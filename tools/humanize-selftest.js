#!/usr/bin/env node
'use strict';
/**
 * Self-test for the voice rules, the page layouts, the rewrite overlay, the
 * rewrite validator and the batch pipeline in tools/humanize.js.
 *
 * It needs no API key and sends nothing to the internet. The pipeline tests
 * talk to a fake Anthropic server on localhost that is told, step by step, to
 * misbehave the way the real one does: 429s with Retry-After, 529 overloads,
 * 500s, dropped connections, hung requests, answers that break the house rules,
 * answers in the wrong shape, a rejected key, an empty balance. What the
 * pipeline does with each is what is being tested, because the real failure
 * modes are the part of this tool that a happy-path run never shows.
 *
 * Everything it writes goes to a temporary directory; nothing in src/data, logs/
 * or .humanize/ is touched.
 *
 *   npm run selftest
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const assert = require('assert');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), 'humanize-selftest-'));
/* Set before anything is required: the overlay loader and the pipeline read
   these once, at load. The child processes the pipeline spawns inherit them. */
process.env.WD_REWRITES_DIR = path.join(TMP, 'rewrites');
process.env.HUMANIZE_STATE_DIR = path.join(TMP, 'state');
process.env.HUMANIZE_LOG_DIR = path.join(TMP, 'logs');
process.env.ANTHROPIC_API_KEY = 'test-key';

const voice = require('../src/lib/voice');
const inline = require('../src/lib/inline');
const { pick } = require('../src/lib/pick');
const layouts = require('../src/lib/layouts');
const rewrites = require('../src/lib/rewrites');
const check = require('../src/lib/rewrite-check');
const humanize = require('./humanize');

let passed = 0;
const failed = [];
async function test(name, fn) {
  try { await fn(); passed++; console.log(`  ✓ ${name}`); } catch (e) {
    failed.push(name);
    console.log(`  ✗ ${name}\n      ${String(e.message).split('\n').join('\n      ')}`);
  }
}
const section = title => console.log(`\n${title}`);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rm = dir => fs.rmSync(dir, { recursive: true, force: true });

/* ------------------------------------------------------------ fake server */

/**
 * A stand-in for api.anthropic.com. `script` is consumed one request at a time;
 * once it runs out, every request is answered correctly.
 *
 *   'ok'            a valid answer (the pipeline's own mock model, wrapped as the API wraps it)
 *   '429' / '529' / '500'   the error, with Retry-After: 0 on the first
 *   'drop'          close the connection without answering
 *   'hang'          answer, but only after the client's timeout
 *   'bad-rewrite'   a valid API answer whose content breaks the house rules
 *   'text-json'     the answer as JSON in a text block instead of a tool call
 *   '401' / 'credit'  the errors retrying cannot fix
 *   {kind, delay, headers, retryAfter}   any of the above, refined
 */
async function fakeApi(script) {
  const items = humanize.loadItems();
  const byTitle = new Map(items.map(i => [i.row.title, i]));
  const seen = [];
  let n = 0;
  const server = http.createServer((req, res) => {
    let raw = '';
    req.on('data', c => { raw += c; });
    req.on('end', async () => {
      const at = Date.now();
      const step = script[n] || 'ok';
      const s = typeof step === 'string' ? { kind: step } : step;
      const i = n++;
      let payload;
      try { payload = JSON.parse(raw); } catch (e) { payload = null; }
      const record = { i, kind: s.kind, at, contentType: req.headers['content-type'], key: req.headers['x-api-key'], version: req.headers['anthropic-version'], payload };
      seen.push(record);

      const send = (status, body, headers = {}) => {
        res.writeHead(status, { 'content-type': 'application/json', ...headers });
        res.end(JSON.stringify(body));
      };
      const error = (status, type, message, headers) => send(status, { type: 'error', error: { type, message } }, headers);
      if (s.delay) await sleep(s.delay);

      if (s.kind === 'drop') return req.socket.destroy();
      if (s.kind === '429') return error(429, 'rate_limit_error', 'Number of request tokens has exceeded your per-minute rate limit', { 'retry-after': String(s.retryAfter == null ? 0 : s.retryAfter) });
      if (s.kind === '529') return error(529, 'overloaded_error', 'Overloaded');
      if (s.kind === '500') return error(500, 'api_error', 'Internal server error');
      if (s.kind === '401') return error(401, 'authentication_error', 'invalid x-api-key');
      if (s.kind === 'credit') return error(400, 'invalid_request_error', 'Your credit balance is too low to access the Anthropic API.');
      if (s.kind === 'hang') { await sleep(1500); return res.headersSent || res.destroyed ? undefined : error(500, 'api_error', 'too late'); }

      /* The request itself has to look like a real one. */
      const problems = [];
      if (!payload) problems.push('body is not JSON');
      else {
        if (req.headers['x-api-key'] !== 'test-key') problems.push('missing x-api-key');
        if (req.headers['anthropic-version'] !== '2023-06-01') problems.push('missing anthropic-version');
        if (!payload.model || !payload.max_tokens) problems.push('missing model or max_tokens');
        if (!Array.isArray(payload.messages) || payload.messages[0].role !== 'user') problems.push('messages malformed');
        if (!payload.tools || payload.tool_choice.name !== 'submit_rewrite') problems.push('tool not forced');
        if (!Array.isArray(payload.system) || !payload.system[0].text) problems.push('system malformed');
      }
      if (problems.length) return error(400, 'invalid_request_error', problems.join('; '));

      const prompt = payload.messages[0].content;
      const info = JSON.parse(/<recipe>\n([\s\S]*?)\n<\/recipe>/.exec(prompt)[1]);
      const item = byTitle.get(info.title);
      const ctx = { row: item.row, orig: item.orig, hook: voice.hookFor(item.row.slug), layout: layouts.layoutFor({ slug: item.row.slug, layout: item.orig.layout }) };
      let input = humanize.mockModel(ctx);
      record.feedback = /Your previous answer was rejected/.test(prompt);

      if (s.kind === 'bad-rewrite') {
        input = { ...input, why: [`Let us delve into ${item.row.title}. ${input.why[0]}`, ...input.why.slice(1)], tips: [`I tested this three times and it never fails, so trust me.`, ...input.tips.slice(1)] };
      }
      const usage = { input_tokens: 1200, output_tokens: 600, cache_read_input_tokens: 1000, cache_creation_input_tokens: 0 };
      const content = s.kind === 'text-json'
        ? [{ type: 'text', text: `Here is the rewrite:\n${JSON.stringify(input)}` }]
        : [{ type: 'tool_use', id: `toolu_${i}`, name: 'submit_rewrite', input }];
      send(200, { id: `msg_${i}`, type: 'message', role: 'assistant', model: payload.model, content, stop_reason: s.kind === 'text-json' ? 'end_turn' : 'tool_use', usage }, typeof s.headers === 'function' ? s.headers() : (s.headers || {}));
    });
  });
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  return { url: `http://127.0.0.1:${server.address().port}`, seen, close: () => new Promise(r => { server.closeAllConnections && server.closeAllConnections(); server.close(r); }) };
}

const sink = () => { const lines = []; return { write: s => { lines.push(String(s)); }, text: () => lines.join(''), isTTY: false }; };

/** Run the pipeline against a fake server with the given script. */
async function pipeline(script, options = {}) {
  const api = await fakeApi(script);
  process.env.ANTHROPIC_BASE_URL = api.url;
  const out = sink(); const err = sink();
  const outDir = options.out || path.join(TMP, 'rewrites');
  try {
    const result = await humanize.run({
      batchSize: 4, concurrency: 2, maxRetries: 6, fixAttempts: 2, timeout: 0.4, backoffScale: 0.002,
      skipBackup: true, audit: false, quiet: false, out: outDir, model: 'test-model', ...options
    }, { stdout: out, stderr: err, ...(options.io || {}) });
    return { result, api, out: out.text(), err: err.text(), outDir };
  } finally { await api.close(); }
}

const readEntries = dir => rewrites.entries(dir);
const readLog = () => {
  const dir = process.env.HUMANIZE_LOG_DIR;
  const file = path.join(dir, 'humanize-errors.jsonl');
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).map(JSON.parse) : [];
};
const resetState = () => { rm(process.env.WD_REWRITES_DIR); rm(process.env.HUMANIZE_STATE_DIR); rm(process.env.HUMANIZE_LOG_DIR); };

/* ---------------------------------------------------------------- tests */

async function main() {
  section('Voice rules (src/lib/voice.js)');
  const ids = (text, opts) => voice.lint(text, opts).map(f => f.id).sort();
  await test('the owner\'s seven banned phrases are all caught', () => {
    for (const [text, id] of [
      ['This will elevate your dish.', 'elevate'], ['A symphony of flavors.', 'symphony'], ['Let us delve into it.', 'delve'],
      ['A game-changer for weeknights.', 'game-changer'], ['A testament to simple cooking.', 'testament'],
      ['Begin your culinary journey.', 'culinary-cliche'], ['A village nestled in the hills.', 'nestled']]) {
      assert.ok(ids(text).includes(id), `${text} -> ${ids(text)}`);
    }
  });
  await test('legitimate uses are not caught (the instruction "nestle", "crème", "Nestlé", "must have", "four", "iron mine")', () => {
    for (const text of ['Nestle the fish fillets among the vegetables.', 'Stir in the crème fraîche.', 'Use Nestlé condensed milk.',
      'The filling must have cooled. You must make sure the tin is lined.', 'Four sour cherries, an hour of rising, pour it in.',
      'Santiago, where there was an iron mine.', 'The singer M.I.A. was mentioned.']) {
      assert.deepStrictEqual(ids(text), [], text);
    }
  });
  await test('first-person and testing claims are errors; the dish name "Marry Me Chicken" is not', () => {
    assert.ok(ids('I have made this a dozen times.').includes('i'));
    assert.ok(ids('In my kitchen it never fails.').includes('my'));
    assert.ok(ids('We tested this recipe.').includes('we'));
    assert.ok(ids('Kitchen-tested and approved.').includes('tested-claim'));
    assert.deepStrictEqual(ids('Marry Me Chicken is rich.', { title: 'Marry Me Chicken' }), []);
    assert.ok(ids('Marry Me Chicken is rich.').includes('me'));
  });
  await test('the owner\'s own examples of good advice pass', () => {
    assert.deepStrictEqual(ids('If your oven runs hot, check at 12 minutes. The dough will look shaggy at first; keep kneading.'), []);
  });
  await test('exclamation marks are errors; bold markers are invisible to the rules', () => {
    assert.ok(ids('Serve at once!').includes('exclamation'));
    assert.deepStrictEqual(ids('**Do not** open the oven door.'), []);
  });
  await test('every hook is reachable and the ten are spread evenly over 2,415 slugs', () => {
    const counts = {};
    for (let i = 0; i < 2415; i++) { const h = voice.hookFor(`slug-${i}`).id; counts[h] = (counts[h] || 0) + 1; }
    assert.strictEqual(Object.keys(counts).length, voice.HOOKS.length);
    for (const c of Object.values(counts)) assert.ok(c > 150 && c < 340, JSON.stringify(counts));
    assert.ok(voice.HOOKS.length >= 8);
  });

  section('Inline bold (src/lib/inline.js) and choosing (src/lib/pick.js)');
  await test('bold becomes <strong>, everything else is escaped, plain() strips the markers', () => {
    assert.strictEqual(inline.html('Do **not** open <the> door for **10 minutes**.'), 'Do <strong>not</strong> open &lt;the&gt; door for <strong>10 minutes</strong>.');
    assert.strictEqual(inline.plain('Do **not** open it.'), 'Do not open it.');
    assert.deepStrictEqual(inline.spans('a **b c** d **e**'), ['b c', 'e']);
    assert.strictEqual(inline.paragraphs('one\n\ntwo\n  \nthree').length, 3);
  });
  await test('pick is deterministic', () => {
    assert.strictEqual(pick(['a', 'b', 'c', 'd'], 'x'), pick(['a', 'b', 'c', 'd'], 'x'));
  });

  section('Layouts (src/lib/layouts.js)');
  await test('there are at least five layouts, each orders every section once, and they are all different', () => {
    assert.ok(layouts.LAYOUTS.length >= 5);
    const orders = new Set();
    for (const l of layouts.LAYOUTS) {
      assert.deepStrictEqual([...l.order].sort(), [...layouts.SECTIONS].sort(), l.id);
      orders.add(l.order.join());
    }
    assert.strictEqual(orders.size, layouts.LAYOUTS.length, 'two layouts share a section order');
    assert.ok(new Set(layouts.LAYOUTS.map(l => l.order[0])).size >= 4, 'too few different openers');
  });
  await test('a slug picks a layout evenly: each of 2,415 slugs gets one, and no layout has under 12% or over 22%', () => {
    const counts = {};
    for (let i = 0; i < 2415; i++) { const id = layouts.layoutFor({ slug: `r-${i}` }).id; counts[id] = (counts[id] || 0) + 1; }
    for (const l of layouts.LAYOUTS) assert.ok(counts[l.id] > 2415 * 0.12 && counts[l.id] < 2415 * 0.22, JSON.stringify(counts));
  });
  await test('a recipe may name its layout and its own headings; an unsafe heading falls back to the pool', () => {
    const r = { slug: 'x', title: 'Apple Pie', layout: 'cook-first', headings: { tips: 'A quick note on the butter', serve: '<b>bad</b>', method: 'Cooking it' } };
    assert.strictEqual(layouts.layoutFor(r).id, 'cook-first');
    const l = layouts.layoutFor(r);
    assert.strictEqual(layouts.headingFor(r, l, 'tips'), 'A quick note on the butter');
    assert.notStrictEqual(layouts.headingFor(r, l, 'serve'), '<b>bad</b>');
    assert.ok(layouts.headingFor(r, l, 'method').includes('Apple Pie'), 'the method heading must keep the dish name');
  });

  section('Rewrite overlay (src/lib/rewrites.js)');
  const sample = () => ({
    'apple-pie': { d: 'A double-crust pie of apples and sugar.', why: 'Some words about the apples.', tips: ['Keep it cold.'], pair: ['Cream'], store: 'Keeps 2 days.' },
    'plain-tart': { d: 'A tart.', why: 'Words.', tips: ['Tip.'], pair: ['Tea'], store: 'Keeps.' }
  });
  const good = slug => ({
    src: rewrites.sourceHash(sample()[slug]), at: new Date().toISOString(), model: 'test', hook: 'sensory', layout: 'classic',
    d: 'A double-crust pie of apples, butter and sugar, baked until the top is deep gold.',
    why: 'The smell of apples and butter is the first sign this is nearly done. '.repeat(4).trim(),
    tips: ['Keep the butter cold until the last minute.', 'Let the pie rest for an hour before cutting.'],
    store: 'Keeps for 2 days, covered, at room temperature.', headings: { tips: 'A quick note on the butter' }
  });
  const overlayDir = path.join(TMP, 'overlay-test');
  await test('an entry is laid over its original; the original record itself is not mutated', () => {
    rm(overlayDir); fs.mkdirSync(overlayDir, { recursive: true });
    fs.writeFileSync(path.join(overlayDir, 'a.json'), JSON.stringify({ 'apple-pie': good('apple-pie') }));
    const base = sample();
    const untouched = JSON.stringify(base['apple-pie']);
    const merged = rewrites.apply({ ...base }, overlayDir);
    assert.strictEqual(merged['apple-pie'].layout, 'classic');
    assert.ok(merged['apple-pie'].why.startsWith('The smell'));
    assert.strictEqual(merged['plain-tart'].d, 'A tart.');
    assert.strictEqual(JSON.stringify(base['apple-pie']), untouched);
    assert.strictEqual(merged.__rewrites.applied, 1);
  });
  await test('an entry whose original has since changed is ignored, and counted', () => {
    const changed = sample(); changed['apple-pie'].why = 'Edited afterwards.';
    const merged = rewrites.apply(changed, overlayDir);
    assert.strictEqual(merged['apple-pie'].why, 'Edited afterwards.');
    assert.deepStrictEqual(merged.__rewrites.stale, ['apple-pie']);
  });
  await test('an entry for a recipe that does not exist is counted, not fatal', () => {
    const merged = rewrites.apply({ 'plain-tart': sample()['plain-tart'] }, overlayDir);
    assert.deepStrictEqual(merged.__rewrites.unknown, ['apple-pie']);
  });
  await test('a malformed entry stops the build and names the recipe', () => {
    for (const bad of [{ why: 'short' }, { tips: ['one'] }, { layout: 'nope' }, { hook: 'nope' }, { headings: { bogus: 'x' } }, { headings: { tips: '<b>x</b>' } }, { src: 'zz' }]) {
      fs.writeFileSync(path.join(overlayDir, 'a.json'), JSON.stringify({ 'apple-pie': { ...good('apple-pie'), ...bad } }));
      assert.throws(() => rewrites.apply(sample(), overlayDir), /apple-pie/, JSON.stringify(bad));
    }
  });
  await test('more than three bold spans in why, or two in the tips, is refused', () => {
    const b = { ...good('apple-pie'), why: '**a** **b** **c** **d** ' + 'word '.repeat(60) };
    assert.throws(() => rewrites.assertEntry('apple-pie', b), /bold/);
    const t = { ...good('apple-pie'), tips: ['**a** and **b** and **c** are here.', 'Another tip that is long enough.'] };
    assert.throws(() => rewrites.assertEntry('apple-pie', t), /bold/);
  });

  section('Rewrite validator (src/lib/rewrite-check.js)');
  const items = humanize.loadItems();
  const pizza = items.find(i => i.row.slug === 'margherita-pizza');
  const base = {
    hook: 'problem-first', layout: 'classic',
    d: 'A Neapolitan margherita: blistered, airy crust under San Marzano tomatoes, milky fior di latte and torn basil, cooked on a very hot steel in an ordinary home oven from a slow, cold-fermented dough.',
    why: 'Most home pizza fails on the stretch between dough and oven. The dough here gets a long, cold rest in the fridge, and that rest does the work: enzymes break starch into simple sugars, which is what gives the rim its leopard-spotted char in only **8 minutes**. That is the whole trick.\n\nHydration matters too. At 65% the crumb stays open and light. The sauce is left raw, so it stays bright instead of stewing into sweetness under the heat.',
    tips: ['Drain torn mozzarella on kitchen paper for 20 minutes, because the water it sheds is the biggest cause of a soggy centre.',
      'If you have no baking steel, preheat an upturned heavy baking sheet for an hour instead.',
      'Weigh the water rather than measuring it in a jug. Pizza dough lives or dies on hydration, and cups are hopelessly imprecise.'],
    store: 'The dough balls keep in the fridge for 3 days, or freeze for 3 months and defrost overnight in the fridge. Cooked slices refrigerate for 3 days; reheat them in a dry skillet over medium heat for 3 minutes with a lid on to re-crisp the base and melt the cheese. Never microwave.',
    headings: { why: 'What the long rest is doing', tips: 'Two things that save the base', serve: 'What goes on the table with it', store: 'Keeping the dough and the leftovers' }
  };
  const registryFor = () => check.Registry.seed(items.map(i => ({ slug: i.row.slug, title: i.row.title, why: i.orig.why, tips: i.orig.tips })),
    [...layouts.LAYOUTS.flatMap(l => Object.values(l.headings).flat()), ...Object.values(layouts.SHARED_HEADINGS).flat()]);
  const validate = (entry, reg = registryFor()) => check.validate(entry, { row: pizza.row, orig: pizza.orig, hook: voice.HOOKS.find(h => h.id === 'problem-first') }, reg);
  const mutate = patch => ({ ...JSON.parse(JSON.stringify(base)), ...patch });

  await test('a good hand-written rewrite is accepted', () => { assert.deepStrictEqual(validate(base), []); });
  for (const [name, patch, expect] of [
    ['a temperature the recipe never gave', { tips: [base.tips[0], 'Bake at 230°C for the best spring.', base.tips[2]] }, /230°C.*not a quantity/],
    ['a weight the recipe never gave', { tips: [base.tips[0], base.tips[1], 'Use 300 g of mozzarella, no more.'] }, /300 g/],
    ['a year', { why: base.why.replace('Most home pizza', 'Since 1889, most home pizza') }, /1889/],
    ['an invented name', { why: base.why.replace('Most home pizza', 'As Escoffier said, most home pizza') }, /Escoffier/],
    ['an invented century', { why: base.why.replace('Most home pizza', 'In the nineteenth century most home pizza') }, /century/],
    ['a diet claim', { d: base.d.replace('airy crust', 'airy vegan crust') }, /vegan/],
    ['a storage method dropped', { store: 'The dough balls keep in the fridge for 3 days. Cooked slices refrigerate for 3 days and reheat well. Never microwave.' }, /freezer/],
    ['a storage duration changed', { store: base.store.replace('for 3 days, or freeze', 'for 5 days, or freeze') }, /5 days.*not a quantity/],
    ['first-person experience', { tips: [base.tips[0], 'I make this every Friday and it never fails.', base.tips[2]] }, /"I"|\bi\b/],
    ['a banned phrase', { d: base.d.replace('airy crust', 'airy crust, a true game-changer') }, /game-changer/],
    ['an exclamation mark', { tips: [base.tips[0], 'Preheat for a full hour!', base.tips[2]] }, /exclamation/],
    ['four bold spans', { why: base.why.replace('the stretch', '**the** **stretch** **between** **dough**') }, /bold spans/],
    ['the dish name in bold', { why: base.why.replace('Most home pizza', '**Margherita Pizza**') }, /recipe's name/],
    ['an unpaired asterisk', { why: base.why.replace('Hydration matters too.', 'Hydration* matters too.') }, /stray \*/],
    ['markup', { tips: [base.tips[0], '<b>Preheat</b> the steel for an hour.', base.tips[2]] }, /markup/],
    ['no short sentence', { why: 'Most of the pizzas that people make at home fail somewhere on the long stretch between the dough and the oven, which is the real point here and always has been.\n\nThe dough gets a long, cold rest in the fridge and that rest does all the work, with enzymes breaking starch into simple sugars for the rim to char on in only 8 minutes flat.' }, /eight words or fewer/],
    ['too few tips', { tips: [base.tips[0]] }, /tips has 1/],
    ['a lede far too long', { d: 'x'.repeat(300) }, /d is 300 characters/],
    ['an unchanged why', { why: pizza.orig.why }, /word for word/],
    ['a method heading without the dish name', { headings: { ...base.headings, method: 'Cooking it properly' } }, /must contain/],
    ['the same heading twice on one page', { headings: { ...base.headings, serve: base.headings.tips } }, /repeats another heading/],
    ['a heading from the pool', { headings: { ...base.headings, tips: 'Small Things That Help' } }, /already used on/],
    ['a heading that is not a section', { headings: { ...base.headings, bogus: 'Nothing here' } }, /not a section/]
  ]) {
    await test(`rejects ${name}`, () => {
      const problems = validate(mutate(patch));
      assert.ok(problems.some(p => expect.test(p)), `expected ${expect}, got:\n${problems.join('\n') || '(accepted)'}`);
    });
  }
  await test('rejects an opening another recipe already has', () => {
    const reg = registryFor();
    const other = items.find(i => i.row.slug !== 'margherita-pizza');
    reg.claim(other.row.slug, other.row.title, { why: base.why, tips: [], headings: {} });
    assert.ok(validate(base, reg).some(p => /already open/.test(p)));
  });
  await test('rejects a heading already worn out across the site, and lets a claimed one be taken back', () => {
    const reg = registryFor();
    for (let i = 0; i < check.HEADING_REUSE; i++) reg.claim(`fake-${i}`, `Fake ${i}`, { why: `Unique opening number ${i} goes here.`, tips: [], headings: { tips: 'Two things that save the base' } });
    assert.ok(validate(base, reg).some(p => /already used on/.test(p)));
    reg.release('fake-0');
    assert.ok(!validate(base, reg).some(p => /already used on/.test(p)), 'releasing a claim must free its headings');
  });
  await test('a "check early" time is allowed, a long new one is not', () => {
    assert.deepStrictEqual(validate(mutate({ tips: [base.tips[0], 'If the test oven runs hot, check at 5 minutes.', base.tips[2]] })), []);
    /* 3 hours is shorter than the 24 to 72 hours this recipe already states, so it is allowed; 10 hours is past the four-hour cap. */
    assert.deepStrictEqual(validate(mutate({ tips: [base.tips[0], 'Give it 3 hours more, to be safe.', base.tips[2]] })), []);
    assert.ok(validate(mutate({ tips: [base.tips[0], 'Give it 10 hours more, to be safe.', base.tips[2]] })).some(p => /not a quantity/.test(p)));
  });
  await test('quantities: "1 hour" equals "60 minutes", "forty-five minutes" is read, ranges give both ends', () => {
    const keys = t => check.quantities(t).map(q => q.key);
    assert.deepStrictEqual(keys('an hour'), keys('60 minutes'));
    assert.ok(keys('Forty-five minutes').includes('time:45'));
    assert.deepStrictEqual(keys('10 to 12 minutes'), ['time:10', 'time:12']);
    assert.ok(keys('180°C / 350°F').includes('temp:F:350'));
    assert.ok(keys('1.5 kg').includes('mass:g:1500'));
  });

  section('Pages: layouts, headings, paragraphs and bold on a real recipe');
  resetState();
  await test('every layout renders exactly one method and one FAQ, in its own order, with no ** anywhere', () => {
    const { loadRecipes, buildContext } = require('../src/build');
    const page = require('../src/templates/recipe-page');
    const recipes = loadRecipes();
    const ctx = buildContext(recipes);
    const recipe = recipes.find(r => r.slug === 'margherita-pizza');
    const seenOrders = new Set();
    for (const l of layouts.LAYOUTS) {
      const html = page.render({ ...recipe, layout: l.id, whyRich: 'One **bold** claim here.\n\nA second paragraph follows.', why: 'One bold claim here.\n\nA second paragraph follows.', tipsRich: ['Keep it **cold**.', 'Second tip.'], tips: ['Keep it cold.', 'Second tip.'], headings: { tips: 'A quick note on the butter' } }, ctx);
      assert.strictEqual((html.match(/id="method"/g) || []).length, 1, l.id);
      assert.strictEqual((html.match(/id="faq"/g) || []).length, 1, l.id);
      assert.ok((html.match(/id="why-title"/g) || []).length <= 1, l.id);
      assert.ok(!html.includes('**'), `${l.id}: a ** marker reached the page`);
      assert.ok(html.includes('<strong>bold</strong>') && html.includes('<strong>cold</strong>'), l.id);
      assert.ok(html.includes('A quick note on the butter'), l.id);
      assert.ok(html.includes('<p>A second paragraph follows.</p>'), `${l.id}: second paragraph`);
      const prose = html.slice(html.indexOf('<div class="prose">'), html.indexOf('<section class="reviews"'));
      const headings = [...prose.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      seenOrders.add(headings.join('|'));
      assert.ok(headings.length >= 6, `${l.id}: only ${headings.length} h2s`);
      assert.ok(!/<h2[^>]*>\s*<\/h2>/.test(prose), `${l.id}: an empty heading`);
      /* structured data carries the plain words */
      for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
        assert.ok(!m[1].includes('**'), `${l.id}: ** in JSON-LD`);
        JSON.parse(m[1]);
      }
    }
    assert.strictEqual(seenOrders.size, layouts.LAYOUTS.length, 'layouts rendered alike');
  });
  await test('two h2s on one page are never the same, across 400 real recipes', () => {
    const { loadRecipes, buildContext } = require('../src/build');
    const page = require('../src/templates/recipe-page');
    const recipes = loadRecipes();
    const ctx = buildContext(recipes);
    for (const recipe of recipes.filter((_, i) => i % 6 === 0)) {
      const html = page.render(recipe, ctx);
      const hs = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
      assert.strictEqual(new Set(hs.map(h => h.toLowerCase())).size, hs.length, `${recipe.slug}: ${hs.join(' | ')}`);
    }
  });

  section('Pipeline (tools/humanize.js) against a fake Anthropic server');
  resetState();
  /* Recipes the stand-in model can rewrite acceptably, found by trying. */
  const candidates = items.slice(0, 300).filter((_, i) => i % 7 === 0).map(i => i.row.slug);
  await humanize.run({ mock: true, select: candidates.join(','), batchSize: 50, quiet: true, skipBackup: true, audit: false }, { stdout: sink(), stderr: sink() });
  const workable = Object.keys(readEntries(path.join(process.env.HUMANIZE_STATE_DIR, 'mock', 'rewrites')));
  rm(process.env.HUMANIZE_STATE_DIR); rm(process.env.HUMANIZE_LOG_DIR);
  assert.ok(workable.length >= 14, `only ${workable.length} workable fixtures`);
  const fixtures = workable.slice(0, 14);
  const pick8 = fixtures.slice(0, 8).join(',');

  await test('survives 429, 529, 500, a dropped connection, a hang, a bad rewrite and a text-only answer, and still rewrites everything', async () => {
    resetState();
    const { result, api, err } = await pipeline(['429', '529', '500', 'drop', 'hang', 'bad-rewrite', 'text-json'], { select: pick8, batchSize: 4, concurrency: 2 });
    assert.strictEqual(result.accepted, 8, JSON.stringify(result));
    assert.strictEqual(result.rejected + result.failed, 0, JSON.stringify(result));
    assert.ok(result.retries >= 5, `retries ${result.retries}`);
    assert.ok(result.throttled >= 2, `throttled ${result.throttled}`);
    const entries = readEntries(path.join(TMP, 'rewrites'));
    assert.strictEqual(Object.keys(entries).length, 8);
    for (const e of Object.values(entries)) {
      assert.ok(e.src && e.at && e.hook && e.layout && e.why && e.tips.length >= 2, 'entry fields');
      assert.strictEqual(e.model, 'test-model');
    }
    const errors = readLog();
    const kinds = new Set(errors.map(e => e.status || e.kind || e.event));
    for (const k of [429, 529, 500, 'network', 'validation_reject']) assert.ok(kinds.has(k), `error log lacks ${k}: ${[...kinds]}`);
    assert.ok(api.seen.some(s => s.feedback), 'the rejected rewrite was not sent back with its problems');
    assert.ok(api.seen.every(s => s.key === 'test-key' && s.version === '2023-06-01'));
    assert.ok(/Batch 1\/2 done/.test(err) && /Batch 2\/2 done/.test(err), `progress:\n${err}`);
    assert.ok(fs.readdirSync(process.env.WD_REWRITES_DIR).filter(f => f.endsWith('.json')).length === 2, 'one file per batch');
  });

  await test('a Retry-After pauses every worker, not only the one that was told', async () => {
    resetState();
    const script = [{ kind: '429', retryAfter: 1 }, { kind: 'ok', delay: 250 }, { kind: 'ok', delay: 250 }];
    const { api, result } = await pipeline(script, { select: fixtures.slice(0, 6).join(','), batchSize: 6, concurrency: 3, backoffScale: 1, timeout: 5 });
    assert.strictEqual(result.accepted, 6, JSON.stringify(result));
    const t429 = api.seen[0].at;
    const later = api.seen.slice(3).map(s => s.at - t429);
    assert.ok(later.length && Math.min(...later) >= 700, `a request was sent ${Math.min(...later)} ms after the 429, inside its Retry-After of 1000`);
  });

  await test('rate-limit headers that say "nothing left" make it wait for the reset', async () => {
    resetState();
    /* Evaluated when the answer is sent, so the reset is 500 ms from then. */
    const headers = () => ({ 'anthropic-ratelimit-requests-remaining': '0', 'anthropic-ratelimit-requests-reset': new Date(Date.now() + 500).toISOString() });
    const script = [{ kind: 'ok', headers }];
    const { api, result } = await pipeline(script, { select: fixtures.slice(0, 2).join(','), batchSize: 2, concurrency: 1, backoffScale: 1, timeout: 5 });
    assert.strictEqual(result.accepted, 2);
    assert.ok(api.seen[1].at - api.seen[0].at >= 350, `second request came after ${api.seen[1].at - api.seen[0].at} ms`);
  });

  await test('a rejected key stops the run at once and writes nothing', async () => {
    resetState();
    const { result, api } = await pipeline(['401'], { select: pick8, concurrency: 1 });
    assert.ok(/refused the key/.test(result.fatal), result.fatal);
    assert.strictEqual(api.seen.length, 1, 'it kept asking after a 401');
    assert.strictEqual(Object.keys(readEntries(path.join(TMP, 'rewrites'))).length, 0);
  });

  await test('an empty credit balance stops the run', async () => {
    resetState();
    const { result } = await pipeline(['credit'], { select: pick8, concurrency: 1 });
    assert.ok(/no credit/.test(result.fatal), result.fatal);
  });

  await test('an API that keeps failing trips the breaker instead of burning through the catalogue', async () => {
    resetState();
    const { result, api } = await pipeline(Array(200).fill('500'), { select: fixtures.join(','), concurrency: 1, maxRetries: 1, maxConsecutiveFailures: 3 });
    assert.ok(/in a row failed/.test(result.fatal), result.fatal);
    assert.strictEqual(result.failed, 3, JSON.stringify(result));
    assert.ok(api.seen.length <= 8, `${api.seen.length} requests`);
  });

  await test('an interrupted run resumes where it stopped: finished recipes are not asked for again', async () => {
    resetState();
    const ten = fixtures.slice(0, 10).join(',');
    const first = await pipeline(['ok', 'ok', 'ok', 'ok', 'ok', 'ok', '401'], { select: ten, batchSize: 4, concurrency: 1 });
    assert.ok(first.result.fatal);
    const afterFirst = Object.keys(readEntries(path.join(TMP, 'rewrites'))).length;
    assert.strictEqual(afterFirst, 6, `${afterFirst} saved by the interrupted run`);
    const second = await pipeline([], { select: ten, batchSize: 4, concurrency: 1 });
    assert.strictEqual(second.api.seen.length, 4, `${second.api.seen.length} requests on resume`);
    assert.strictEqual(Object.keys(readEntries(path.join(TMP, 'rewrites'))).length, 10);
    const third = await pipeline([], { select: ten, batchSize: 4 });
    assert.strictEqual(third.api.seen.length, 0, 'a finished run asked again');
    assert.ok(/Nothing to do/.test(third.out));
  });

  await test('two runs started in the same millisecond-scale window never overwrite each other\'s batch files', async () => {
    resetState();
    const a = await pipeline([], { select: fixtures.slice(0, 2).join(','), batchSize: 2 });
    const b = await pipeline([], { select: fixtures.slice(2, 4).join(','), batchSize: 2 });
    assert.strictEqual(a.result.accepted + b.result.accepted, 4);
    assert.strictEqual(Object.keys(readEntries(path.join(TMP, 'rewrites'))).length, 4);
    assert.strictEqual(fs.readdirSync(path.join(TMP, 'rewrites')).length, 2);
  });

  await test('a rewrite that keeps failing validation is left as it was, recorded, and skipped next time', async () => {
    resetState();
    const slug = fixtures[0];
    const { result, api } = await pipeline(['bad-rewrite', 'bad-rewrite', 'bad-rewrite'], { select: slug, fixAttempts: 2, concurrency: 1 });
    assert.strictEqual(result.rejected, 1, JSON.stringify(result));
    assert.strictEqual(api.seen.length, 3);
    assert.strictEqual(Object.keys(readEntries(path.join(TMP, 'rewrites'))).length, 0);
    assert.ok(JSON.parse(fs.readFileSync(path.join(process.env.HUMANIZE_STATE_DIR, 'rejected.json'), 'utf8'))[slug]);
    const again = await pipeline([], { select: slug });
    assert.strictEqual(again.api.seen.length, 0, 'a rejected recipe was retried without --retry-rejected');
    const forced = await pipeline([], { select: slug, retryRejected: true });
    assert.strictEqual(forced.result.accepted, 1);
  });

  await test('what the audits reject afterwards is taken back out of the overlay', async () => {
    resetState();
    const slugs = fixtures.slice(0, 4);
    let pass = 0;
    const stub = () => (++pass === 1 ? { [slugs[1]]: [`voice-audit.js: ${slugs[1]} — banned phrase`], 'some-other-recipe': ['timing-audit.js: unrelated'] } : {});
    const { result, out } = await pipeline([], { select: slugs.join(','), batchSize: 4, audit: true, io: { runAudits: stub } });
    const entries = readEntries(path.join(TMP, 'rewrites'));
    assert.ok(!entries[slugs[1]], 'the rejected rewrite is still in the overlay');
    assert.strictEqual(Object.keys(entries).length, 3);
    assert.strictEqual(result.accepted, 3);
    assert.strictEqual(result.rejected, 1);
    assert.ok(/took back/.test(out));
    assert.ok(JSON.parse(fs.readFileSync(path.join(process.env.HUMANIZE_STATE_DIR, 'rejected.json'), 'utf8'))[slugs[1]]);
  });

  await test('the limiter halves its concurrency on a throttle and earns it back', () => {
    const l = new humanize.Limiter(4);
    l.penalise(1); assert.strictEqual(l.capacity, 2);
    l.penalise(1); assert.strictEqual(l.capacity, 1);
    l.penalise(1); assert.strictEqual(l.capacity, 1, 'never below one');
    for (let i = 0; i < 15 * 3; i++) l.reward();
    assert.strictEqual(l.capacity, 4);
    assert.ok(l.cooldownUntil > 0);
  });
  await test('Retry-After is read as seconds or as a date', () => {
    const h = v => ({ get: () => v });
    assert.strictEqual(humanize.retryAfterMs(h('3')), 3000);
    assert.strictEqual(humanize.retryAfterMs(h('0.5')), 500);
    const in2 = new Date(Date.now() + 2000).toUTCString();
    const ms = humanize.retryAfterMs(h(in2));
    assert.ok(ms > 500 && ms <= 2000, String(ms));
    assert.strictEqual(humanize.retryAfterMs(h(null)), null);
  });

  section('Command line');
  const cli = (...args) => spawnSync(process.execPath, [path.join(__dirname, 'humanize.js'), ...args], { encoding: 'utf8', env: { ...process.env, ANTHROPIC_API_KEY: '' } });
  await test('batch sizes outside 30–50 are refused', () => {
    for (const n of ['10', '29', '51', '500']) { const r = cli('--batch-size', n); assert.notStrictEqual(r.status, 0, n); assert.ok(/between 30 and 50/.test(r.stderr), r.stderr); }
    assert.notStrictEqual(cli('--bogus').status, 0);
  });
  await test('a real run without a key or without a model says so, and --dry-run needs neither and sends nothing', () => {
    resetState();
    const real = cli('--limit', '2', '--skip-backup');
    assert.notStrictEqual(real.status, 0);
    assert.ok(/ANTHROPIC_API_KEY is not set/.test(real.stderr + real.stdout), real.stderr + real.stdout);
    const noModel = spawnSync(process.execPath, [path.join(__dirname, 'humanize.js'), '--limit', '2', '--skip-backup'], { encoding: 'utf8', env: { ...process.env, ANTHROPIC_API_KEY: 'x', HUMANIZE_MODEL: '' } });
    assert.notStrictEqual(noModel.status, 0);
    assert.ok(/No model chosen/.test(noModel.stderr + noModel.stdout), noModel.stderr + noModel.stdout);
    const dry = cli('--dry-run', '--limit', '2', '--price-in', '3', '--price-out', '15');
    assert.strictEqual(dry.status, 0, dry.stderr);
    assert.ok(/Nothing has been sent/.test(dry.stdout) && /SYSTEM PROMPT/.test(dry.stdout) && /cost at \$3/.test(dry.stdout), dry.stdout.slice(0, 600));
  });
  await test('--mock writes to the state directory, never to the rewrites overlay', () => {
    resetState();
    const r = cli('--mock', '--limit', '2', '--batch-size', '30', '--quiet');
    assert.strictEqual(r.status, 0, r.stderr);
    assert.ok(fs.existsSync(path.join(process.env.HUMANIZE_STATE_DIR, 'mock', 'rewrites')));
    assert.ok(!fs.existsSync(process.env.WD_REWRITES_DIR) || fs.readdirSync(process.env.WD_REWRITES_DIR).length === 0);
  });
  await test('--select flagged picks only recipes the voice audit flags', () => {
    const { todo } = humanize.selectItems(items, { ...humanize.DEFAULTS, select: 'flagged' }, { existing: {}, rejected: {} });
    assert.ok(todo.length > 0 && todo.length < items.length * 0.6, String(todo.length));
  });
  await test('an unknown slug is an error, not an empty run', () => {
    assert.throws(() => humanize.selectItems(items, { ...humanize.DEFAULTS, select: 'no-such-recipe' }, { existing: {}, rejected: {} }), /No such recipe/);
  });
  await test('the dates are not this tool\'s business: no entry it writes has a date field but "at"', async () => {
    resetState();
    await pipeline([], { select: fixtures.slice(0, 2).join(','), batchSize: 2 });
    for (const e of Object.values(readEntries(path.join(TMP, 'rewrites')))) {
      for (const k of Object.keys(e)) assert.ok(!/publish|date|modified/i.test(k), `field ${k}`);
    }
  });

  rm(TMP);
  console.log(`\n${passed} passed, ${failed.length} failed.`);
  if (failed.length) { console.log(`Failed: ${failed.join('; ')}`); process.exit(1); }
}

main().catch(e => { console.error(e); rm(TMP); process.exit(1); });
