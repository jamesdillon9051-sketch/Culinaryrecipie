#!/usr/bin/env node
'use strict';
/**
 * Reads each recipe as one process and reports where its parts disagree: the ingredient list and
 * the method, the stated times and the stages the method describes, the claims in the description
 * and what the recipe actually takes, and the built page against its own data.
 *
 * Every finding is one of three kinds, and only the first fails `npm run check`:
 *
 *   confirmed   a contradiction the data shows outright (a step uses more of an ingredient than
 *               the list holds; the description promises a time the recipe cannot meet; the card,
 *               the index and the Recipe JSON-LD disagree; the cooking stages the method runs one
 *               after another add up to far more than the cook time).
 *   review      likely, but a person has to read it: an ingredient the method never names, a
 *               required wait too short for the timing reader to count, a "divided" ingredient
 *               whose split the steps never make clear, advance preparation hidden in an
 *               ingredient line, a stage sum somewhat over the cook time.
 *   exception   checked by a person and accepted, recorded with the reason in
 *               src/data/consistency-reviewed.json (garnish, water for washing, overlapping tasks).
 *
 * Nothing is edited automatically: keyword matches are evidence for a reader, not a fix.
 *
 *   node tools/recipe-consistency.js                 summary; exit 1 on any unreviewed confirmed finding
 *   node tools/recipe-consistency.js --list [kind]   every finding (or only confirmed / review)
 *   node tools/recipe-consistency.js --slug a,b      the findings for some recipes
 *   node tools/recipe-consistency.js --md FILE       write the review list as Markdown
 */
const fs = require('fs');
const path = require('path');
const { loadRecipes } = require('../src/build');
const { parse } = require('../src/lib/ingredients');
const { detectWait } = require('../src/lib/timing');

const ROOT = path.join(__dirname, '..');
const REVIEWED = (() => {
  try { return require('../src/data/consistency-reviewed.json').recipes || {}; } catch { return {}; }
})();

/* Lines a method does not have to name: seasoning, garnish, serving, greasing, washing. */
const EXEMPT_LINE = /\b(?:to serve|for serving|to garnish|for garnish|garnish|optional|to taste|for greasing|to grease|for dusting|for the (?:tin|pan|dish|tray|board)|for brushing|for frying|for deep[- ]frying|ice cubes?|crushed ice|ice\b|lemon wedges|lime wedges)\b/i;
const EXEMPT_FOOD = /^(?:salt|pepper|black pepper|white pepper|water|ice|sea salt|flaky sea salt|kosher salt|fine sea salt|freshly ground black pepper|cooking spray)$/i;
const STOP = new Set(['fresh', 'freshly', 'finely', 'roughly', 'chopped', 'diced', 'sliced', 'grated', 'minced', 'ground', 'large', 'small',
  'medium', 'whole', 'extra', 'virgin', 'plain', 'unsalted', 'salted', 'light', 'dark', 'good', 'quality', 'ripe', 'thinly', 'thickly',
  'peeled', 'trimmed', 'halved', 'quartered', 'crushed', 'softened', 'melted', 'cold', 'warm', 'room', 'temperature', 'about',
  'each', 'into', 'with', 'and', 'the', 'for', 'plus', 'more', 'tinned', 'canned', 'dried', 'frozen', 'raw', 'cooked', 'boneless',
  'skinless', 'skin', 'bone', 'pieces', 'piece', 'cut', 'cubes', 'cubed', 'rinsed', 'drained', 'washed', 'free', 'range', 'organic',
  'heaped', 'level', 'generous', 'handful', 'bunch', 'sprigs', 'sprig', 'leaves', 'leaf', 'stick', 'sticks', 'clove', 'cloves', 'strong',
  'mild', 'hot', 'sweet', 'ready', 'made', 'shop', 'bought', 'store', 'homemade', 'neutral', 'flavourless', 'mixed', 'very', 'lightly',
  'well', 'beaten', 'separated', 'divided', 'reserved', 'such', 'other', 'your', 'favourite', 'type', 'brand', 'packet', 'pack', 'tin',
  'tins', 'jar', 'jars', 'can', 'cans', 'bottle', 'from', 'about', 'roughly', 'approx', 'total', 'inch', 'thick', 'thin', 'long', 'wide']);
/* An ingredient the method may name by its class. */
const CLASSES = [
  [/\b(?:ground|seeds?|powder|paprika|cumin|coriander|turmeric|cinnamon|cardamom|clove|nutmeg|allspice|chilli flakes|chili flakes|pepper flakes|cayenne|garam masala|star anise|fennel seed|mustard seed|peppercorns?|sumac|za'atar|oregano|thyme|bay|saffron|fenugreek|curry powder|five[- ]spice|mace|juniper)\b/i, /\b(?:spices?|spice (?:mix|paste|blend)|seasoning|masala|dry rub|rub|aromatics|whole spices)\b/],
  [/\b(?:cheddar|gruy[eè]re|parmesan|parmigiano|pecorino|mozzarella|feta|ricotta|monterey jack|jack|emmental|comt[eé]|halloumi|gouda|manchego|provolone|fontina|mascarpone|stilton|brie|camembert|paneer|queso|cotija|cheese)\b/i, /\bchees/],
  [/\b(?:flour|baking powder|bicarbonate|baking soda|cornflour|cornstarch|cocoa|salt|sugar|yeast|oats|semolina|ground almonds)\b/i, /\bdry ingredients|\bdry mix|\bflour mixture/],
  [/\b(?:egg|milk|buttermilk|oil|melted butter|vanilla|yoghurt|yogurt|cream)\b/i, /\bwet ingredients|\bwet mix/],
  [/\b(?:parsley|coriander|cilantro|mint|basil|dill|chives|tarragon|chervil|thyme|rosemary|sage|oregano)\b/i, /\bherbs?\b/],
  [/\b(?:onions?|shallots?|garlic|ginger|celery|carrots?|leeks?|chillies|chilli|chiles?|peppers?|spring onions?|scallions?|lemongrass)\b/i, /\b(?:aromatics|vegetables|veg|soffritto|sofrito|mirepoix|holy trinity|paste|the base)\b/],
  [/\b(?:soy|vinegar|honey|mustard|mirin|sake|fish sauce|oyster sauce|hoisin|sesame oil|lemon juice|lime juice|olive oil|oil|maple|worcestershire|ketchup|sriracha|gochujang|wine|rice wine|shaoxing|stock|brown sugar|sugar|yoghurt|yogurt|mayonnaise|tahini)\b/i, /\b(?:marinade|dressing|vinaigrette|glaze|sauce ingredients|sauce|seasoning|mixture|brine|baste|liquid)\b/],
  [/\b(?:radish|cucumber|tomato|avocado|lettuce|cabbage|onion|lime|lemon|coriander|chilli|jalape[nñ]o|olive|pickle|tortilla|bread|flatbread|pitta|pita|rice|noodles)\b/i, /\b(?:toppings|garnishes|accompaniments|the trimmings|fixings|condiments|sides)\b/],
  [/\b(?:beef|pork|lamb|chicken|turkey|mince|minced|sausage|veal|goat|mutton|venison)\b/i, /\b(?:the meat|meats|minces|meatballs?|patties|patty|burgers?)\b/],
  [/\b(?:spaghetti|linguine|penne|rigatoni|fusilli|tagliatelle|fettuccine|macaroni|orzo|bucatini|pappardelle|conchiglie|farfalle|noodles?|dangmyeon|udon|soba|vermicelli)\b/i, /\b(?:pasta|noodles?)\b/],
  [/\b(?:cod|haddock|salmon|hake|pollock|tilapia|halibut|sea bass|bream|trout|mackerel|snapper|whiting|coley|monkfish|tuna)\b/i, /\bfish\b|\bfillets?\b/],
  [/\b(?:steak|chuck|brisket|sirloin|rump|shin|skirt|flank)\b/i, /\b(?:beef|steak|meat)\b/],
  [/\beggs?\b/i, /\b(?:yolks?|whites?)\b/],
  [/\b(?:loaf|bread|baguette|sourdough|brioche|bun|rolls?)\b/i, /\b(?:bread|toast|slices|croutons|cubes)\b/],
  [/\b(?:walnuts?|pecans?|almonds?|hazelnuts?|pistachios?|cashews?|peanuts?|pine nuts)\b/i, /\bnuts?\b/],
  [/\b(?:salad leaves|rocket|arugula|spinach|lettuce|watercress|leaves)\b/i, /\b(?:leaves|greens|salad)\b/],
  [/\b(?:strawberr|raspberr|blueberr|blackberr|cherr|grapes?|peach|banana|mango|apple|pear|fruit)/i, /\b(?:fruit|berries)\b/],
  [/\b(?:jars?|lids?|bottles?|skewers?|cases|liners|paper|string|twine|toothpicks?|cocktail sticks?)\b/i, /./],
  [/\b(?:cauliflower|broccoli|courgettes?|zucchini|sweet potato|parsnips?|beetroot|squash|pumpkin|aubergine|eggplant|green beans|haricots|potatoes?)\b/i, /\b(?:vegetables|veg|roots|beans)\b/],
  [/\b(?:lager|beer|ale|stout|cider|marsala|sherry|brandy|rum|vodka|whisky|whiskey|port|vermouth)\b/i, /\b(?:beer|alcohol|liquor|spirit|booze|wine)\b/],
];
const HEAT = /\b(?:bake|baked|baking|roast|roasted|roasting|fry|fried|frying|saut[eé]|sweat|simmer|simmered|simmering|boil|boiled|boiling|grill|grilled|grilling|griddle|cook|cooked|cooking|braise|braised|braising|steam|steamed|steaming|poach|poached|poaching|sear|seared|searing|toast|toasted|brown|browned|reduce|reduced|caramelise|caramelize|smoke|smoked|stew|stewed)\b/i;
const TIME = /(\d+(?:\.\d+)?)(?:\s*(?:to|–|-|or)\s*(\d+(?:\.\d+)?))?\s*(minutes?|mins?|hours?|hrs?)\b/gi;
const minutes = (n, unit) => /^h/i.test(unit) ? n * 60 : n;
const singular = w => w.replace(/(?:ies)$/, 'y').replace(/(?:oes|ches|shes|xes)$/, m => m.slice(0, -2)).replace(/s$/, '');

function words(name) {
  return String(name).toLowerCase().replace(/\([^)]*\)/g, ' ').split(/[,;]/)[0]
    .replace(/[^a-zà-ÿ\s-]/g, ' ').split(/[\s-]+/).filter(w => w.length > 2 && !STOP.has(w)).map(singular);
}

function check(recipe, built) {
  const out = [];
  const add = (kind, code, detail) => out.push({ slug: recipe.slug, kind, code, detail });
  const items = parse(recipe.ingredients).filter(i => !i.group);
  const steps = recipe.steps.map(String);
  const method = steps.join(' ').toLowerCase();
  const methodWords = new Set(method.replace(/[^a-zà-ÿ\s-]/g, ' ').split(/[\s-]+/).map(singular));

  /* 1. Ingredients the method never names. A line is covered when the method names it, names
     the group it sits under ("# Marinade" and "the marinade ingredients"), or names the class it
     belongs to ("the spices", "the cheese", "the dry ingredients"). */
  const groupOf = new Map();
  let group = '';
  for (const raw of recipe.ingredients.map(String)) {
    if (/^#\s*/.test(raw)) { group = raw.replace(/^#\s*/, '').toLowerCase(); continue; }
    groupOf.set(raw, group);
  }
  const everything = /\b(?:all (?:the|of the) (?:ingredients|remaining ingredients)|everything else|the rest of the ingredients|the remaining ingredients|all the remaining)\b/.test(method);
  const stem = w => w.slice(0, Math.max(4, w.length - 2));
  for (const it of items) {
    if (EXEMPT_LINE.test(it.raw)) continue;
    const ws = words(it.name);
    if (!ws.length || EXEMPT_FOOD.test(it.name.split(',')[0].trim())) continue;
    if (ws.some(w => methodWords.has(w) || method.includes(w) || (w.length >= 5 && method.includes(stem(w))))) continue;
    if (everything) continue;
    const g = words(groupOf.get(it.raw) || '');
    if (g.some(w => method.includes(w))) continue;
    if (CLASSES.some(([food, named]) => food.test(it.name) && named.test(method))) continue;
    add('review', 'ingredient-not-in-method', `"${it.raw}" is never named in the method`);
  }

  /* 2. A step that uses more of an ingredient than the list holds. */
  for (const step of steps) {
    for (const m of step.matchAll(/(\d+(?:\.\d+)?)\s*(g|kg|ml|l)\s+(?:of\s+)?(?:the\s+)?([a-zà-ÿ][a-zà-ÿ ]{2,30})/gi)) {
      const qty = Number(m[1]) * (/^k|^l$/i.test(m[2]) ? 1000 : 1);
      const food = words(m[3]).slice(0, 2);
      if (!food.length) continue;
      const lines = items.filter(it => /^(?:g|kg|ml|l)$/i.test(it.unit || '') && food.every(f => words(it.name).includes(f)));
      if (!lines.length) continue;
      const listed = lines.reduce((n, it) => n + it.qty * (/^k|^l$/i.test(it.unit) ? 1000 : 1), 0);
      if (qty > listed * 1.05) add('confirmed', 'step-quantity-exceeds-list', `a step uses ${m[1]} ${m[2]} ${m[3].trim()} but the list has ${listed} ${/l$/i.test(lines[0].unit) ? 'ml' : 'g'}`);
    }
  }

  /* 3. "Divided" ingredients whose split the method never makes. */
  for (const it of items.filter(i => /\bdivided\b/i.test(i.raw))) {
    const ws = words(it.name);
    const named = steps.filter(s => ws.some(w => s.toLowerCase().includes(w)));
    const split = named.some(s => /\b(?:half|remaining|rest of|reserved|another|the other|a third|two-thirds|quarter)\b|\d+\s*(?:g|ml|tbsp|tsp)\b/i.test(s));
    if (named.length < 2 || !split) add('review', 'divided-unclear', `"${it.raw}" is divided but the method does not show how it is split`);
  }

  /* 4. Sequential cooking stages against the cook time. A time counts as cooking only when the
     nearest verb before it is a cooking verb ("simmer 2 hours" counts; "cook to 80C, then chill
     for 4 hours" counts nothing for the chill). Overlapping tasks ("while", "meanwhile"), the
     alternative after "or", optional variants and rates ("15 minutes per 500 g") are left out. */
  let stages = 0;
  const stageList = [];
  const NOT_COOKING = /\bbaking (?:paper|parchment|tray|sheet|dish|tin|powder|soda|beans)\b|\bcooking (?:liquid|water|juices|spray|oil)\b|\bbefore (?:baking|cooking|roasting|grilling|frying|serving)\b|\bbrown(?:ed)? sugar\b|\bbrown bread\b/gi;
  const VERB = new RegExp(`${HEAT.source}|\\b(?:rest|rests|rested|chill|chilled|cool|cooled|refrigerate|freeze|marinate|prove|rise|soak|stand|leave|infuse|churn|steep|set|knead|whisk|beat|blend|mix)\\w*\\b`, 'gi');
  for (const step of steps) {
    for (const raw of step.split(/(?<=[.!?])\s+/)) {
      if (/^\s*(?:while|meanwhile|in the meantime|at the same time|for the traditional|alternatively|if you)\b/i.test(raw)) continue;
      /* The first of two alternatives ("6 hours on low or 4 on high"), and the floor of a range
         written with units on both sides ("90 minutes to 2 hours"). */
      const sentence = raw.replace(/(\d+)\s+1\/2\b/g, (_, n) => `${n}.5`).replace(/(\d+)½/g, (_, n) => `${n}.5`).split(/,\s*or\s+|\bor until\b|\bor\s+(?:on\s+)?(?:high|low|pressure|in)\b|\bor\s+\d/i)[0]
        .replace(/(\d+(?:\.\d+)?\s*(?:minutes?|mins?|hours?|hrs?))\s*(?:to|–|-)\s*\d+(?:\.\d+)?\s*(?:minutes?|mins?|hours?|hrs?)/gi, '$1')
        .replace(NOT_COOKING, ' ');
      if (!HEAT.test(sentence)) continue;
      for (const m of sentence.matchAll(TIME)) {
        const before = sentence.slice(0, m.index);
        if (/\bevery\s+$/i.test(before) || /^\s*(?:per|a side|each side)\b/i.test(sentence.slice(m.index + m[0].length))) continue;
        const verbs = [...before.matchAll(VERB)];
        const last = verbs.length ? verbs[verbs.length - 1][0] : '';
        if (!last || !new RegExp(`^(?:${HEAT.source})$`, 'i').test(last)) continue;
        const v = minutes(Number(m[1]), m[3]);
        stages += v; stageList.push(v);
      }
    }
  }
  const cook = recipe.cookMax || recipe.cook;
  if (stages > cook + 15 && stages > cook * 1.25) {
    const kind = stages >= cook * 2 && stages >= cook + 60 ? 'confirmed' : 'review';
    add(kind, 'stages-exceed-cook', `cooking stages in the method add up to ${stages} min (${stageList.join(' + ')}) against a cook time of ${cook} min`);
  }

  /* 5. Required waits too short, or untimed, for the timing reader to count. */
  const wait = detectWait({ slug: recipe.slug, st: steps, ing: recipe.ingredients });
  for (const sentence of steps.join(' ').split(/(?<=[.!?])\s+/)) {
    if (/^\s*(?:while|meanwhile)\b/i.test(sentence)) continue;
    const required = /\b(?:rest|chill|cool|set|stand|mature|refrigerate|freeze)\w*\b[^.]*\b(?:at least|before (?:cutting|slicing|serving|filling|icing|assembling|eating|turning out|unmoulding)|until (?:set|firm|cold|completely cool)|completely)\b/i.test(sentence);
    if (!required) continue;
    const t = [...sentence.matchAll(TIME)].map(m => minutes(Number(m[1]), m[3]));
    const longest = t.length ? Math.max(...t) : 0;
    if (!wait.min && (longest >= 15 || !t.length)) {
      add('review', 'required-wait-not-counted', `${t.length ? `${longest} min` : 'an untimed'} wait is required but not in the total: "${sentence.trim().slice(0, 140)}"`);
    }
  }

  /* 6. Advance preparation written into an ingredient line. */
  for (const it of items) {
    const m = /\b(?:soaked|marinated|aged|rested|chilled|frozen|brined|steeped)\b[^,]*?\b(overnight|\d+\s*(?:hours?|hrs?|days?))\b/i.exec(it.raw);
    if (!m) continue;
    const counted = (wait.trace || []).some(t => t.startsWith('prep') && t.includes(it.raw.slice(0, 20)));
    if (!counted && !wait.min) add('review', 'advance-prep-in-ingredient', `"${it.raw}" asks for advance preparation the total does not include`);
  }

  /* 7. Time promises the recipe cannot keep. "Ready in", "on the table in", "takes", "N servings
     in" and "an N-minute dinner" promise the whole recipe; "grilled in 6 minutes" or "a 15-minute
     brine" describe one stage and are fine. Anything else is left for a reader. */
  const elapsed = built.elapsedTime;
  const STAGE = /\b(?:cook(?:ed|s)?|bake[sd]?|grill(?:ed|s)?|fr(?:y|ied|ies)|steam(?:ed|s)?|pressure[- ]cook(?:ed)?|microwave[ds]?|blend(?:ed|s)?|mix(?:ed|es)?|assembl(?:ed|es)|whisk(?:ed)?|simmer(?:ed|s)?|roast(?:ed|s)?|warm(?:ed|s)?|sear(?:ed|s)?|toast(?:ed|s)?|churn(?:ed)?|boil(?:ed|s)?|poach(?:ed)?|made on the hob|on the hob|brine|marinade|soak|rest|chill|bake time|cooking time)\b[^.]{0,30}$/i;
  for (const [field, text] of [['title', recipe.title], ['description', recipe.description], ['meta', recipe.meta]]) {
    const str = String(text || '');
    for (const m of str.matchAll(/\b(ready in|on the table in|done in|takes|servings?(?:,)? in|servings?(?:,)? ready in|made in|in|under|within)\s+(\d+)\s*(?:minutes?|mins?)\b|\b(\d+)[- ]minute\s+(\w+)/gi)) {
      const n = Number(m[2] || m[3]);
      const after = str.slice(m.index + m[0].length, m.index + m[0].length + 30);
      if (!n || n >= elapsed || /^\s*(?:plus|\+|to cook|to bake|of (?:cooking|baking|hands-on|work|preparation|prep|active))/i.test(after)) continue;
      if (m[3] && /^(?:brine|marinade|soak|rest|chill|bake|simmer|boil|rise|prove|cook|roast|knead)/i.test(m[4])) continue;
      const before = str.slice(Math.max(0, m.index - 40), m.index);
      const whole = /^(?:ready in|on the table in|done in|takes|servings?,? in|servings?,? ready in|made in)$/i.test((m[1] || '').trim()) || (m[3] && /^(?:recipe|meal|dinner|lunch|breakfast|dish|supper|dessert|snack|bake|pasta|curry|soup|salad)$/i.test(m[4]));
      if (STAGE.test(before + (m[1] === 'made in' ? '' : '')) && !/^(?:ready in|on the table in|takes|servings?,? (?:ready )?in)$/i.test((m[1] || '').trim())) continue;
      add(whole ? 'confirmed' : 'review', 'time-claim', `${field} says "${(before.slice(-25) + m[0]).trim()}" but the recipe takes ${elapsed} min start to finish`);
    }
  }
  return out;
}

/* 8. The card, the search index and the JSON-LD against the recipe's own times. */
function builtAgreement(recipes) {
  const out = [];
  const index = new Map(JSON.parse(fs.readFileSync(path.join(ROOT, 'search-index.json'), 'utf8')).map(r => [r.g, r]));
  const iso = m => `PT${Math.floor(m / 60) ? `${Math.floor(m / 60)}H` : ''}${m % 60 ? `${m % 60}M` : ''}` || 'PT0M';
  for (const r of recipes) {
    const entry = index.get(r.slug);
    if (!entry) { out.push({ slug: r.slug, kind: 'confirmed', code: 'index-missing', detail: 'not in search-index.json' }); continue; }
    if (entry.m !== r.elapsedTime) out.push({ slug: r.slug, kind: 'confirmed', code: 'index-time', detail: `index says ${entry.m} min, the recipe ${r.elapsedTime}` });
    const file = path.join(ROOT, 'recipes', r.slug, 'index.html');
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, 'utf8');
    const total = /"totalTime":"([^"]+)"/.exec(html);
    if (total && total[1] !== iso(r.elapsedTime)) out.push({ slug: r.slug, kind: 'confirmed', code: 'schema-time', detail: `JSON-LD totalTime ${total[1]}, the recipe ${iso(r.elapsedTime)}` });
  }
  return out;
}

function main() {
  const args = process.argv.slice(2);
  const opt = n => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
  let recipes = loadRecipes();
  if (opt('--slug')) { const want = new Set(opt('--slug').split(',')); recipes = recipes.filter(r => want.has(r.slug)); }
  let findings = recipes.flatMap(r => check(r, r));
  if (!opt('--slug') || args.includes('--built')) findings = findings.concat(builtAgreement(recipes));
  for (const f of findings) {
    const reviewed = (REVIEWED[f.slug] || {})[f.code];
    if (reviewed) { f.kind = 'exception'; f.reason = reviewed; }
  }
  const count = k => findings.filter(f => f.kind === k).length;
  const show = args.includes('--list') ? (opt('--list') && !opt('--list').startsWith('-') ? opt('--list') : null) : undefined;
  if (show !== undefined || opt('--slug')) {
    for (const f of findings.filter(f => !show || f.kind === show)) console.log(`  ${f.kind === 'confirmed' ? '✗' : f.kind === 'review' ? '?' : '·'} ${f.slug} [${f.code}] ${f.detail}${f.reason ? ` — accepted: ${f.reason}` : ''}`);
  }
  if (opt('--md')) {
    const byCode = {};
    for (const f of findings.filter(f => f.kind !== 'exception')) (byCode[f.code] = byCode[f.code] || []).push(f);
    const md = ['# Recipe consistency review list', '', `Generated by \`node tools/recipe-consistency.js --md\`. ${count('confirmed')} confirmed, ${count('review')} for review, ${count('exception')} accepted exceptions. A "review" finding is a keyword-level signal for a person to read, not a verdict.`, ''];
    for (const [code, list] of Object.entries(byCode).sort((a, b) => b[1].length - a[1].length)) {
      md.push(`## ${code} (${list.length})`, '');
      for (const f of list) md.push(`- [${f.kind}] [/recipes/${f.slug}/](https://weeklydelight.com/recipes/${f.slug}/): ${f.detail.replace(/\|/g, '\\|')}`);
      md.push('');
    }
    fs.writeFileSync(opt('--md'), md.join('\n'));
  }
  const codes = {};
  for (const f of findings) codes[`${f.kind}:${f.code}`] = (codes[`${f.kind}:${f.code}`] || 0) + 1;
  console.log(`recipe consistency: ${count('confirmed')} confirmed, ${count('review')} for review, ${count('exception')} accepted exceptions across ${recipes.length} recipes`);
  if (!args.includes('--quiet')) for (const [k, v] of Object.entries(codes).sort()) console.log(`  ${k}: ${v}`);
  process.exit(count('confirmed') ? 1 : 0);
}

if (require.main === module) main();
module.exports = { check, builtAgreement };
