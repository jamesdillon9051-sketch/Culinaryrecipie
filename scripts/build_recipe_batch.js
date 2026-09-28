#!/usr/bin/env node
'use strict';
/**
 * Validate, preview and publish one batch of country recipes.
 *
 *   node scripts/build_recipe_batch.js --country us --batch 1 --dry-run
 *   node scripts/build_recipe_batch.js --country us --batch 1
 *   node scripts/build_recipe_batch.js --country us --batch 1 --use-draft
 *
 * A dry run does everything except write: it validates every record, renders
 * every page in memory, checks the canonical URLs, Open Graph tags and JSON-LD
 * of each, and reports. Publishing asks first, records the batch in
 * recipes_data/published.json, and runs the site build, which renders every
 * published batch (the build deletes recipes/ each time, so a page that was
 * only written once would not survive the next deploy).
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const engine = require('../src/lib/country-recipes');

const ROOT = path.join(__dirname, '..');
const DRAFT = path.join(ROOT, 'recipes_data', 'draft_batch.json');
const MANIFEST = path.join(ROOT, 'recipes_data', 'published.json');

/* ------------------------------------------------------------------ args */
function parseArgs(argv) {
  const args = { dryRun: false, useDraft: false };
  for (let i = 0; i < argv.length; i++) {
    const [flag, inline] = argv[i].split('=');
    const next = () => (inline !== undefined ? inline : argv[++i]);
    if (flag === '--country') args.country = String(next() || '').toLowerCase();
    else if (flag === '--batch') args.batch = parseInt(next(), 10);
    else if (flag === '--dry-run') args.dryRun = true;
    else if (flag === '--use-draft') args.useDraft = true;
    else if (flag === '--help' || flag === '-h') args.help = true;
    else throw new Error(`unknown option ${argv[i]}`);
  }
  return args;
}

const USAGE = `Usage: node scripts/build_recipe_batch.js --country <us|uk|ca|au|nz> --batch <1|2|3|4> [--dry-run] [--use-draft]`;

function fail(message, code = 1) {
  console.error(`\n${message}`);
  process.exit(code);
}

/* -------------------------------------------------------------- terminal */
function progress(label) {
  const width = 28;
  return (done, total) => {
    if (!process.stdout.isTTY) { if (done === total) console.log(`  ${label} ${done}/${total}`); return; }
    const filled = Math.round(width * done / total);
    process.stdout.write(`\r  ${label} [${'#'.repeat(filled)}${'-'.repeat(width - filled)}] ${done}/${total}`);
    if (done === total) process.stdout.write('\n');
  };
}

function ask(question) {
  return new Promise(resolve => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    let answered = false;
    rl.question(question, answer => { answered = true; rl.close(); resolve(answer.trim().toLowerCase()); });
    rl.on('close', () => { if (!answered) { console.log(''); resolve(''); } });
  });
}

function writeJsonAtomic(file, data) {
  const tmp = `${file}.tmp-${process.pid}`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(tmp, file);
}

/* ------------------------------------------------------------------ main */
async function main() {
  let args;
  try { args = parseArgs(process.argv.slice(2)); } catch (e) { fail(`${e.message}\n${USAGE}`, 2); }
  if (args.help) { console.log(USAGE); return; }
  if (!engine.COUNTRIES[args.country]) fail(`--country must be one of ${Object.keys(engine.COUNTRIES).join(', ')}\n${USAGE}`, 2);
  if (!engine.BATCH_NUMBERS.includes(args.batch)) fail(`--batch must be one of ${engine.BATCH_NUMBERS.join(', ')}\n${USAGE}`, 2);

  const cc = args.country;
  const batchKey = `batch_${args.batch}`;
  const label = `${cc.toUpperCase()} | Batch: ${args.batch}`;

  /* 1. Load. --use-draft reads the edited draft instead of the data file. */
  let data;
  try { data = engine.readCountry(ROOT, cc); } catch (e) { fail(e.message); }
  let records = data[batchKey];
  if (!Array.isArray(records)) fail(`recipes_data/${cc}_recipes.json has no ${batchKey} array`);
  if (args.useDraft) {
    if (!fs.existsSync(DRAFT)) fail('there is no recipes_data/draft_batch.json; choose "e" at the review gate to create one');
    let draft;
    try { draft = JSON.parse(fs.readFileSync(DRAFT, 'utf8')); } catch (e) { fail(`draft_batch.json is not valid JSON: ${e.message}`); }
    if (draft.country !== cc || draft.batch !== args.batch) fail(`the draft is for ${String(draft.country).toUpperCase()} batch ${draft.batch}, not ${label}`);
    records = draft.records;
    console.log(`Using recipes_data/draft_batch.json (${records.length} records)`);
  }
  if (!records.length) fail(`${batchKey} in ${cc}_recipes.json is empty; there is nothing to build`);

  /* 2. Everything else the batch has to live alongside. */
  const { loadRecipes, buildContext, build } = require('../src/build');
  const catalogue = loadRecipes();
  const ctx = buildContext(catalogue);
  const manifest = engine.readManifest(ROOT);
  const others = [];
  const publishedAt = new Map();
  for (const other of Object.keys(engine.COUNTRIES)) {
    for (const entry of manifest[other] || []) {
      if (other === cc && entry.batch === args.batch) continue;
      const list = engine.readCountry(ROOT, other)[`batch_${entry.batch}`] || [];
      for (const rec of list) { others.push(rec); publishedAt.set(rec.id, entry.publishedAt); }
    }
  }
  const already = (manifest[cc] || []).find(e => e.batch === args.batch);

  /* 3. Validate. Errors stop here, dry run or not. */
  console.log(`\nValidating ${records.length} records for ${label} ...`);
  const errors = engine.validateBatch(records, cc, args.batch, { others });
  for (const slug of catalogue.map(r => r.slug)) {
    if (engine.RESERVED_SLUGS.has(slug)) errors.push({ id: '-', message: `the catalogue recipe "${slug}" collides with recipes/${slug}/` });
  }
  if (errors.length) {
    const byId = new Map();
    for (const e of errors) { if (!byId.has(e.id)) byId.set(e.id, []); byId.get(e.id).push(e.message); }
    console.error(`\n${errors.length} problem${errors.length === 1 ? '' : 's'} in ${byId.size} record${byId.size === 1 ? '' : 's'}:`);
    let shown = 0;
    for (const [id, messages] of byId) {
      if (shown++ >= 25) { console.error(`  ... and ${byId.size - 25} more records`); break; }
      console.error(`  ${id}`);
      for (const m of messages) console.error(`    - ${m}`);
    }
    fail('Nothing was written. Fix the records above and run again.');
  }

  /* 4. Render everything in memory, exactly as the build will. */
  console.log('Rendering pages in memory ...');
  const proposed = others.concat(records);
  const compiled = engine.compile(proposed, { ctx, dates: ctx.dates, publishedAt, onProgress: progress('render') });
  if (compiled.problems.length) {
    console.error(`\n${compiled.problems.length} page problem${compiled.problems.length === 1 ? '' : 's'}:`);
    for (const p of compiled.problems.slice(0, 25)) console.error(`  - ${p}`);
    fail('Nothing was written. This is a template or data fault; fix it before publishing.');
  }
  const ownPages = compiled.pages.filter(p => p.kind === 'recipe' && p.cc === cc && records.some(r => r.id === p.rec.id));
  console.log(`  ${ownPages.length} recipe pages, ${compiled.pages.length - ownPages.length} hub pages: `
    + 'canonical URLs, Open Graph, Twitter Card, robots and Recipe + FAQPage JSON-LD all verified');

  /* 5. What a human should see before saying yes. */
  console.log('\nSample of the batch:');
  console.log('  ' + 'id'.padEnd(9) + 'title'.padEnd(30) + 'primary keyword'.padEnd(36) + 'category');
  for (const r of records.slice().sort((a, b) => a.id.localeCompare(b.id)).slice(0, 10)) {
    console.log('  ' + r.id.padEnd(9) + r.title.slice(0, 28).padEnd(30) + r.primary_keyword.slice(0, 34).padEnd(36) + r.category);
  }
  if (records.length > 10) console.log(`  ... and ${records.length - 10} more`);

  const overlaps = engine.overlapWarnings(records, catalogue).concat(engine.crossCountryWarnings(proposed).filter(w => records.some(r => r.id === w.id)));
  if (overlaps.length) {
    console.log(`\n${overlaps.length} warning${overlaps.length === 1 ? '' : 's'} (not errors, but read them: two pages chasing one query split the ranking):`);
    for (const w of overlaps.slice(0, 20)) console.log(`  ! ${w.id}  ${w.message}`);
    if (overlaps.length > 20) console.log(`  ... and ${overlaps.length - 20} more`);
  } else {
    console.log('\nNo overlap with existing pages found (a heuristic: it compares titles, not intent).');
  }
  if (records.length < engine.BATCH_SIZE) console.log(`Note: this batch holds ${records.length} of the ${engine.BATCH_SIZE} records a full batch carries.`);
  const noindex = compiled.pages.filter(p => p.kind !== 'recipe' && !p.indexable);
  if (noindex.length) console.log(`Note: ${noindex.length} hub page${noindex.length === 1 ? '' : 's'} list fewer than ${engine.MIN_INDEXABLE_HUB} recipes and will be noindex until they grow: ${noindex.map(p => '/' + p.path).join(', ')}`);

  if (args.dryRun) {
    console.log(`\n[DRY RUN] ${records.length} recipes validated and ${compiled.pages.length} pages rendered in memory. Review gate skipped: nothing is written, no file changed.`);
    return;
  }

  /* 6. The review gate. */
  const answer = await ask(`\n[REVIEW GATE] Ready to build ${records.length} SEO-optimized recipes for ${label}. Proceed? (y = Yes / e = Edit Draft Manifest / n = Cancel): `);
  if (answer === 'e') {
    writeJsonAtomic(DRAFT, { country: cc, batch: args.batch, note: 'Edit the records below, then run again with --use-draft. Nothing has been published.', records });
    console.log('\nWrote recipes_data/draft_batch.json. Edit the records there, then run:');
    console.log(`  node scripts/build_recipe_batch.js --country ${cc} --batch ${args.batch} --use-draft`);
    return;
  }
  if (answer !== 'y') { console.log('\nCancelled. Nothing was written.'); return; }

  /* 7. Publish: data, manifest, build. Restored if the build fails. */
  const dataFile = engine.dataPath(ROOT, cc);
  const before = { data: fs.readFileSync(dataFile, 'utf8'), manifest: fs.readFileSync(MANIFEST, 'utf8') };
  try {
    if (args.useDraft) { data[batchKey] = records; writeJsonAtomic(dataFile, data); }
    const next = engine.readManifest(ROOT);
    if (!(next[cc] || []).some(e => e.batch === args.batch)) {
      next[cc] = (next[cc] || []).concat({ batch: args.batch, publishedAt: new Date().toISOString().slice(0, 10) })
        .sort((a, b) => a.batch - b.batch);
      writeJsonAtomic(MANIFEST, next);
    } else console.log('This batch was already published; rebuilding so the pages match the data.');
    console.log('\nBuilding the site ...');
    build();
  } catch (error) {
    fs.writeFileSync(dataFile, before.data);
    fs.writeFileSync(MANIFEST, before.manifest);
    console.error(`\nThe build failed, so the data file and the manifest were restored: ${error.message}`);
    try { build(); console.error('The site was rebuilt from the restored state.'); } catch (e) { console.error(`Rebuilding the restored state also failed: ${e.message}`); }
    process.exit(1);
  }
  if (args.useDraft && fs.existsSync(DRAFT)) fs.unlinkSync(DRAFT);

  /* 8. Prove what is on disk is what was verified in memory. */
  let missing = 0;
  const final = engine.compile(engine.loadLive(ROOT, catalogue).records, { ctx, dates: ctx.dates, publishedAt: new Map(), onProgress: () => {} });
  for (const page of final.pages) {
    const file = path.join(ROOT, page.file);
    if (!fs.existsSync(file) || !fs.readFileSync(file, 'utf8').includes(`<link rel="canonical" href="${page.url}">`)) missing++;
  }
  if (missing) fail(`${missing} page(s) are missing or carry the wrong canonical URL on disk`);
  console.log(`\nPublished ${records.length} recipes for ${label}. Every page on disk carries its own canonical URL.`);
  console.log('Next: npm run check, then commit and push.');
}

main().catch(error => fail(error.stack || error.message));
