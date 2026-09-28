#!/usr/bin/env node
'use strict';
/**
 * Proves the country-recipe guards can fail.
 *
 * A guard that has never been seen to reject anything is a guess. Each check
 * here takes a known-good record, breaks it in one specific way, and requires
 * the engine to notice: a placeholder shell, copied method steps, an invented
 * rating, a keyword the page never mentions, calories that contradict the
 * macros, a wrong canonical, broken JSON-LD, a write outside the allowed
 * folders. The controls (an unmodified record and page) must come back clean,
 * so a check cannot pass by rejecting everything.
 *
 * The fixture is the first record found in recipes_data/, so this needs no
 * copy of a recipe of its own; with no records at all there is nothing to
 * test against and it says so.
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const engine = require('../src/lib/country-recipes');

const ROOT = path.join(__dirname, '..');
let fixture = null;
for (const cc of Object.keys(engine.COUNTRIES)) {
  const data = engine.readCountry(ROOT, cc);
  for (const n of engine.BATCH_NUMBERS) {
    if (!fixture && (data[`batch_${n}`] || []).length) fixture = { rec: data[`batch_${n}`][0], cc, batch: n };
  }
}
if (!fixture) { console.log('No country recipes yet, so the country-recipe guards have nothing to be tested against.'); process.exit(0); }

const clone = o => JSON.parse(JSON.stringify(o));
const good = () => clone(fixture.rec);
const { cc, batch } = fixture;
const failures = [];
let ran = 0;
const expect = (name, condition) => { ran++; if (!condition) failures.push(name); };
const env = () => ({ ctx: { criticalCss: '', categoryCounts: {}, topCuisines: [] }, dates: { dateFor: () => '2026-01-01' }, publishedAt: new Map() });

/* Controls first: nothing below means anything if these fail. */
expect('control: the fixture record validates clean', engine.validateRecord(good(), cc, batch).length === 0);
const page = engine.compile([good()], env()).pages[0];
expect('control: its page verifies clean', engine.verifyPage(page).length === 0);
expect('control: a record with no rating publishes no aggregateRating', !/"aggregateRating"/.test(page.html));

/* A record made of the placeholder strings the hydration script in the uploaded
   index writes into every recipe it generates. */
const shell = {
  id: 'US-0001', country: 'us', batch: 1, title: 'Top Searched US Comfort Mains #1', slug: 'top-searched-us-1',
  category: 'Comfort Mains', prep_time: '17', cook_time: '44', total_time: '61', yield: '4', difficulty: 'Hard',
  ingredients: ['Key regional protein or base ingredient', 'Aromatic spices and seasoning blend', 'Fresh herbs or secondary vegetables', 'Cooking oil or butter base', 'Regional sauce or broth accent'],
  instructions: ['Prepare all ingredients according to standard prep instructions.', 'Heat cooking vessel or preheat oven to required temperature.', 'Combine base ingredients and cook until fully done and fragrant.', 'Garnish with fresh herbs and serve immediately.'],
  nutrition: { calories: 512, protein_g: 20, carbs_g: 33, fat_g: 12 }
};
const shellErrors = engine.validateRecord(shell, 'us', 1);
expect('a placeholder shell record is rejected', shellErrors.length >= 10);
expect('placeholder text is named as such', shellErrors.filter(e => /placeholder text/.test(e)).length >= 4);

const dup = good(); dup.id = 'zz-0099'; dup.slug = `${dup.slug}-copy`; dup.title = `${dup.title} Copy`;
expect('a method copied word for word from another record is rejected',
  engine.validateBatch([dup], cc, batch, { others: [fixture.rec] }).some(e => /copied word for word/.test(e.message)));

const twin = good();
expect('a duplicate slug and id in one batch are rejected',
  engine.validateBatch([good(), twin], cc, batch).filter(e => /also used by/.test(e.message)).length >= 2);

const rated = good(); rated.rating = { value: 9, count: 0 };
expect('an invented rating is rejected', engine.validateRecord(rated, cc, batch).some(e => /rating/.test(e)));
const realRated = good(); realRated.rating = { value: 4.6, count: 12 };
expect('a real rating publishes a valid aggregateRating', /"aggregateRating":\{"@type":"AggregateRating","ratingValue":4.6,"ratingCount":12/.test(engine.compile([realRated], env()).pages[0].html));

const kw = good(); kw.secondary_keywords = kw.secondary_keywords.concat(['gluten free vegan keto meal prep bowl']);
expect('a keyword the page never mentions is rejected', engine.validateRecord(kw, cc, batch).some(e => /not supported by the page/.test(e)));
const title = good(); title.primary_keyword = 'quinoa stuffed acorn squash recipe';
expect('a primary keyword the title lacks is rejected', engine.validateRecord(title, cc, batch).some(e => /primary keyword/.test(e)));

const cal = good(); cal.nutrition.calories = 900; cal.calories = '900 kcal';
expect('calories that contradict the macros are rejected', engine.validateRecord(cal, cc, batch).some(e => /do not match the macros/.test(e)));
const sugar = good(); sugar.nutrition.sugar_g = sugar.nutrition.carbs_g + 5;
expect('sugar above carbohydrate is rejected', engine.validateRecord(sugar, cc, batch).some(e => /sugar exceeds/.test(e)));
const time = good(); time.total_time = 'PT99H';
expect('a total_time that is not prep + cook + rest is rejected', engine.validateRecord(time, cc, batch).some(e => /total_time/.test(e)));
const stub = good(); stub.instructions = stub.instructions.slice(0, 2); stub.pro_tips = ['Short tip here now.']; stub.intro = ['Short.', 'Short.', 'Short.'];
expect('a stub page is rejected', engine.validateRecord(stub, cc, batch).length >= 3);
const fluff = good(); fluff.intro[0] += ' This is a game changer that is to die for.';
expect('stock phrasing is rejected', engine.validateRecord(fluff, cc, batch).some(e => /stock phrase/.test(e)));
const storage = good(); storage.storage_tips = 'Keep it somewhere cool and dry, covered loosely, and eat it soon after making it, ideally the same day, because the texture is at its best straight away and the flavor slowly fades as it stands on the counter.';
expect('storage advice that skips fridge, freezer and reheating is rejected', engine.validateRecord(storage, cc, batch).length >= 3);
const q = good(); q.faqs = q.faqs.slice(0, 2);
expect('fewer than three FAQs is rejected', engine.validateRecord(q, cc, batch).some(e => /faqs needs/.test(e)));

/* Overlap with the catalogue: warnings, but they have to fire. */
const catalogue = [{ slug: 'meatloaf', title: 'Meatloaf' }, { slug: 'buttermilk-pancakes', title: 'Fluffy Buttermilk Pancakes' }, { slug: 'air-fryer-chicken-wings', title: 'Air Fryer Chicken Wings' }];
const over = engine.overlapWarnings([
  { id: 'a', slug: 'classic-american-meatloaf', title: 'Classic American Meatloaf' },
  { id: 'b', slug: 'pancakes', title: 'Pancakes' },
  { id: 'c', slug: 'meatloaf', title: 'Anything' },
  { id: 'd', slug: 'air-fryer-chicken-breast', title: 'Air Fryer Chicken Breast' }], catalogue);
expect('a title that is an existing dish is flagged', over.some(w => w.id === 'a'));
expect('a title one word from an existing dish is flagged', over.some(w => w.id === 'b'));
expect('a slug identical to an existing page is flagged', over.some(w => w.id === 'c'));
expect('a different cut of the same protein is not flagged', !over.some(w => w.id === 'd'));

/* Page verification. */
expect('a canonical that is not the published URL is caught',
  engine.verifyPage({ ...page, html: page.html.replace(/<link rel="canonical" href="[^"]*"/, '<link rel="canonical" href="https://weeklydelight.com/x/"') }).some(e => /canonical/.test(e)));
expect('broken JSON-LD is caught',
  engine.verifyPage({ ...page, html: page.html.replace('"@type":"Recipe"', '"@type":"Recipe",,,') }).some(e => /does not parse/.test(e)));
expect('a missing og:image is caught',
  engine.verifyPage({ ...page, html: page.html.replace(/<meta property="og:image" content="[^"]*">/, '') }).some(e => /og:image/.test(e)));
expect('a missing FAQPage schema is caught',
  engine.verifyPage({ ...page, html: page.html.replace('"@type":"FAQPage"', '"@type":"Thing"') }).some(e => /FAQPage/.test(e)));
expect('a missing Jump to Recipe button is caught',
  engine.verifyPage({ ...page, html: page.html.replace('jump-to-recipe-btn', 'nothing') }).some(e => /Jump to Recipe/.test(e)));
expect('a noindex page marked indexable is caught',
  engine.verifyPage({ ...page, html: page.html.replace('index, follow, max-image-preview:large', 'noindex, follow, x') }).some(e => /robots meta/.test(e)));

/* The write guard. */
const guard = (file, root = ROOT) => { try { engine.assertWritable(root, file); return false; } catch { return true; } };
expect('writes under recipes/<country>/ are allowed', !guard('recipes/us/new-recipe/index.html'));
expect('writes under recipes/category/ are allowed', !guard('recipes/category/new/index.html'));
for (const bad of ['recipes/index.html', 'recipes/aam-panna/index.html', 'assets/js/app.js', 'src/build.js', '../outside.html', 'recipes/us/../../src/build.js', '/etc/passwd']) {
  expect(`a write to ${bad} is refused`, guard(bad));
}
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'country-guard-'));
fs.mkdirSync(path.join(tmp, 'recipes', 'us', 'a'), { recursive: true });
fs.writeFileSync(path.join(tmp, 'recipes', 'us', 'a', 'index.html'), 'existing');
expect('an existing country page is never overwritten', guard('recipes/us/a/index.html', tmp));
fs.rmSync(tmp, { recursive: true, force: true });

if (failures.length) {
  for (const f of failures) console.log(`  ✗ country-recipes guard did not hold: ${f}`);
  process.exit(1);
}
console.log(`All ${ran} country-recipe guards reject what they should and accept what they should.`);
