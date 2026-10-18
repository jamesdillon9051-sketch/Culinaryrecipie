'use strict';
/**
 * Whether each diet tag on a recipe holds as written, holds only if the cook
 * makes a choice the recipe offers, or does not hold.
 *
 * A line that offers a way out ("honey or sugar", "parmesan, to serve") used
 * to make a tag pass outright, so a focaccia brushed with honey was published
 * as Vegan with nothing on the page to say the honey had to become sugar. Now
 * such a tag is *conditional*: the page says what the condition is ("Vegan
 * when made with sugar rather than honey"), and the structured data, which has
 * no way to state a condition, leaves the diet out. A line with no way out, or
 * one whose every alternative is forbidden ("smoked salmon or gravlax"), is a
 * contradiction, and tools/diet-audit.js fails on it.
 *
 * Imported by the build, the recipe page and tools/diet-audit.js, so the page,
 * the schema and the audit cannot disagree.
 */
const { parse } = require('./ingredients');

const MEAT = 'chicken|beef|pork|lamb|mutton|bacon|ham|gammon|prosciutto|pancetta|guanciale|lardons?|chorizo|salami|pepperoni|mortadella|bresaola|speck|n?duja|jam[oó]n|serrano ham|ib[eé]rico|bologna|mortadella|spam|luncheon meat|meat|pastrami|corned|brisket|steaks?|biltong|jerky|sausages?|frankfurters?|hot dogs?|\\w*wurst|wei(?:ss|ß)wurst|kie?lbas[ay]|kabanos[yi]?|merguez|andouille|boerewors|chipolatas?|lap cheong|longaniza|lingui[cç]a|sobrasada|chistorra|cotechino|zampone|salsiccia|loukaniko|su[cj]uk|leberk[aä]se|cervelat|saucisson|morteau|toulouse sausages?|black pudding|morcilla|blood sausage|duck|turkey|veal|venison|goose|rabbit|hare|quail|pheasant|partridge|pigeon|grouse|boar|goat|kangaroo|liver|kidneys|tripe|sweetbreads|offal|oxtail|bone marrow|marrow bones|foie gras|chicharr[oó]n|fish|cod|haddock|salmon|gravlax|lox|kippers?|tuna|anchov\\w*|prawns?|shrimps?|scampi|langoustines?|squid|octopus|calamari|scallops?|trout|barramundi|halibut|bass|snapper|mahi|swordfish|tilapia|catfish|herring|sardines?|mackerel|pollock|hake|monkfish|plaice|sole|bream|turbot|pike|carp|whitebait|crayfish|eel|eels|crab|lobster|clams?|mussels?|oysters?|cockles|whelks|sea urchin|caviar|roe|bottarga|snails?|escargots?|frogs?|bonito|katsuobushi|dashi|nam pla|belacan|worcestershire|gelatin\\w*|isinglass|lard|dripping|tallow|suet|schmaltz';
const CHEESE = 'cheese|parmesan|parmigiano|pecorino|grana padano|mozzarella|burrata|feta|ricotta|halloumi|mascarpone|paneer|labneh|cheddar|gruy[eè]re|emmental|comt[eé]|brie|camembert|gouda|manchego|provolone|fontina|taleggio|gorgonzola|roquefort|stilton|raclette|reblochon|queso|cotija|quark|skyr';
const DAIRY = `butter|buttermilk|milk|cream|cr[eè]me fra[iî]che|yogh?urt|kefir|whey|casein|ghee|custard|${CHEESE}`;

/* What each tag forbids. Stock, lard and gelatine are in here because they
   are the ones that get missed: nobody forgets that a vegan dish cannot
   contain beef. */
const FORBIDS = {
  'Vegan': new RegExp(`\\b(${MEAT}|honey|eggs?|egg whites?|egg yolks?|mayonnaise|aioli|meringue|${DAIRY})\\b`),
  'Vegetarian': new RegExp(`\\b(${MEAT})\\b`),
  'Dairy-Free': new RegExp(`\\b(${DAIRY})\\b`),
  'Gluten-Free': /\b(flour|bread|breads|breadcrumbs?|flatbreads?|pitta|pita|naan|baguette|brioche|rolls?|buns?|crumpets?|tortilla wraps?|wraps|pasta|spaghetti|macaroni|orzo|noodles?|udon|ramen|soba|couscous|semolina|barley|farro|bulgur|freekeh|spelt|rye|wheat|seitan|malt|beer|lager|ale|stout|pastry|filo|phyllo|puff|soy sauce|panko|biscuits?|crackers?|croutons?|wafers?|sponge fingers|savoiardi|sourdough|toast|crispbreads?|broa|aish baladi|lavash|pide|simit|cornbread|croissants?|pretzels?|matzo|gnocchi|breadsticks|grissini|shortbread|dumplings?)\b/
};

/* Words on a line that mean the cook is not obliged to use it. */
const OPTIONAL = /optional|to serve|for serving|to finish|to top|to drizzle|\bomit|if you like|if using|garnish|topping|on the side|to accompany|alongside|to taste/i;
/* The subset of those that put the thing beside the dish rather than in it. */
const SERVED = /to serve|for serving|on the side|to accompany|alongside/i;

/* Ingredients whose name trips a pattern without being the thing. */
const NOT_REALLY = [
  /* A plant-based stand-in is named for the thing it replaces. */
  [/\b(?:vegan|veggie|vegetarian|plant[- ]based|meat[- ]free|meatless|mock|faux|dairy[- ]free|non[- ]dairy|egg[- ]free|plant|nut|soy|soya|tofu|seitan|jackfruit|mushroom|cauliflower|celeriac|aubergine|eggplant|cabbage|squash|lentil|bean|chickpea|tvp|oat|almond|cashew|rice|coconut)\s+(?:(?!and\b|or\b|with\b)[\w-]+\s+)?(?:sausages?|mince|bacon|chicken|steaks?|meatballs?|burgers?|hot dogs?|chorizo|ham|salami|pepperoni|jerky|fish|tuna|cheese|parmesan|mozzarella|feta|butter|cream|yogh?urt|milk|mayonnaise|mayo|eggs?|ice cream|custard|kefir|whey|meat)\b/i, 'stand-in'],
  [/\bbutter (?:lettuce|beans?|nut|head)\b/i, 'butter'],
  [/\bbuttern\w*\b/i, 'butter'],
  [/\b(?:peanut|almond|nut|cashew|cocoa|shea|apple|seed|sunflower|hazelnut|pistachio) butter\b/i, 'butter'],
  /* "chestnut, portobello, oyster" is a list of mushroom varieties. No
     ingredient line names both a mushroom and a shellfish. */
  [/\boysters?\b(?=.*\bmushrooms?\b)|(?<=\bmushrooms?\b.*)\boysters?\b/i, 'oyster'],
  [/\boyster mushrooms?\b/i, 'oyster'],
  [/\bcream of tartar\b/i, 'cream'],
  [/\bcream(?= crackers?\b)/i, 'cream'],
  [/\bcustard powder\b/i, 'custard'],
  /* Only the animal word goes, so "goat's cheese" is still cheese and "duck
     eggs" still eggs. */
  [/\bgoat'?s?(?= (?:cheese|milk|curd|yogh?urt|butter|labneh)\b)/i, 'goat'],
  [/\b(?:duck|quail|hen'?s?)(?= eggs?\b)/i, 'duck'],
  [/\bblood (?=oranges?\b)/i, 'blood'],
  [/\bbutter(?= or [\w\s-]*lettuce)|(?<=\b(?:iceberg|cos|romaine|little gem|lettuce)\b[\w\s,-]*\bor )butter\b/i, 'butter'],
  [/\bmilk alternative\b/i, 'milk'],
  [/\bmalt(?= or [\w\s-]*vinegar)/i, 'malt'],
  [/\bvegetable spaghetti\b/i, 'spaghetti'],
  [/\b(?:macaroni|pasta|spaghetti|penne|fusilli|noodles?) made from (?:rice|corn|maize|lentils?|chickpeas?|buckwheat|quinoa)\b|\b(?:rice|corn|maize|lentil|chickpea|buckwheat|quinoa) (?:pasta|macaroni|spaghetti|penne|fusilli)\b/i, 'pasta'],
  [/\bpotato (?=gnocchi\b.*\bgluten[- ]free\b)/i, 'gnocchi'],
  /* "brown bread, butter for the bread": the bread names what the butter is for. */
  [/(?:^|,)\s*for (?:the|brushing|greasing|dusting|frying|serving|spreading)\b[^,]*/i, 'usage'],
  [/\bmeat(?=y\b)|\bsweetmeats?\b|\bmeatless\b/i, 'meat'],
  [/\bpigeon peas?\b/i, 'pigeon'],
  [/\bsole\b(?= (?:purpose|reason))/i, 'sole'],
  [/\bgluten[- ]free [\w-]+(?: [\w-]+)?/i, 'flour'],
  [/\b(?:coconut|rice|gram|chickpea|maize|corn|almond|buckwheat|tapioca|potato|cassava|teff|sorghum|millet|quinoa|banana|chestnut|oat)\s+(?:flour|flakes|noodles?|wraps?|crackers?|bread)\b|\bbesan\b|\bcornflour\b|\bcorn ?starch\b|\bmasarepa\b|\bmasa harina\b/i, 'flour'],
  [/\brice (?:noodles?|vermicelli|paper|wrappers?|sticks)\b|\bglass noodles?\b|\bsweet potato noodles?\b|\bkelp noodles?\b|\bkonjac noodles?\b|\bcourgette noodles?\b|\bshirataki\b|\b(?:100 ?% buckwheat|juwari) soba\b/i, 'noodle'],
  [/\bcorn tortillas?\b|\blettuce (?:wraps?|cups?|leaves)\b|\bspring rolls?\b|\bsushi rolls?\b|\brolled oats\b|\bcabbage rolls?\b/i, 'wrap'],
  [/\btamari\b/i, 'soy sauce'],
  [/\bspaghetti squash\b/i, 'spaghetti'],
  [/\bbuckwheat\b/i, 'wheat'],
  [/\blike (?:coarse |fine )?breadcrumbs\b/i, 'breadcrumbs'],
  [/\bbreadfruit\b/i, 'bread'],
  /* Distilled spirits and malt vinegar are gluten-free (Coeliac UK lists
     both); the grain is gone by the time they are bottled. */
  [/\b(?:rye|malt|wheat|single malt|blended malt|bourbon)\s+(?:scotch\s+)?whisk(?:e)?y\b|\bsingle malt\b|\bmalt vinegar\b/i, 'spirit'],
  [/\bginger ale\b|\bginger beer\b|\broot beer\b/i, 'ale'],
  [/\bwhey\b(?= protein\b.*\b(?:vegan|plant))/i, 'whey']
];

/* Labels that hold only when the cook buys the right version of something,
   whatever the line says. Parmesan, grana padano, pecorino, gruyère and comté
   are made with animal rennet by the rules of their names; ordinary oats are
   usually contaminated with wheat. */
/* "A stock cube" says nothing about what it was made from. */
const VEG_STOCK = { re: /\b(stock cubes?|bouillon(?: cubes?)?|stock|broth)\b/,
  unless: /\b(?:vegetable|veg|vegan|vegetarian|mushroom|kombu|kelp|shiitake|seaweed|corn|tomato|water)\b/, type: 'vegstock' };

const SOFT = {
  'Vegetarian': [{ re: /\b(parmesan|parmigiano(?:[- ]reggiano)?|grana padano|pecorino(?: romano)?|gruy[eè]re|comt[eé])\b/,
    type: 'alt' },
  VEG_STOCK],
  'Vegan': [VEG_STOCK],
  'Gluten-Free': [{ re: /\b(?:rolled |porridge |jumbo |steel[- ]cut |instant |quick[- ]cooking )?(oats|oatmeal|oat (?:flour|milk|bran))\b/,
    unless: /gluten[- ]free/, type: 'labelled' },
  /* Brewed with wheat as a rule; gluten-free versions are sold. */
  { re: /\b(hoisin sauce|hoisin|gochujang|teriyaki sauce|oyster sauce|black bean sauce|miso|stock cubes?|bouillon cubes?)\b/,
    unless: /gluten[- ]free/, type: 'labelled' }]
};

function clean(name) {
  let cleaned = name;
  /* Global, because a single line can trip two of these: "masarepa
     (pre-cooked white maize flour)" needs both the name and the parenthetical
     gloss removed before it stops looking like wheat. */
  for (const [pattern] of NOT_REALLY) cleaned = cleaned.replace(new RegExp(pattern.source, 'gi'), ' ');
  return cleaned;
}

function lines(ing) {
  const out = [];
  let group = '';
  for (const item of parse(ing || [])) {
    if (item.group) { group = String(item.group).toLowerCase(); continue; }
    const name = String(item.name || item.raw || '').toLowerCase();
    out.push({ text: group ? `${group} :: ${name}` : name, name, group, cleaned: clean(name) });
  }
  return out;
}

const UNIT_WORDS = 'g|kg|mg|ml|l|cl|litres?|liters?|tbsp|tsp|cups?|handfuls?|pinch(?:es)?|slices?|tins?|cans?|pieces?|knobs?|large|medium|small|about|roughly|thick|thin|good|very';
const QTY = new RegExp(`^(?:(?:about|roughly|around)\\s+)?(?:[\\d½¼¾⅓⅔⅛.,/-]+\\s*)+(?:(?:${UNIT_WORDS})\\b\\s*)*|^(?:(?:${UNIT_WORDS})\\b\\s*)+|^(?:of|any|a|an|some|the)\\s+`, 'i');
const ASIDE = /\s+(?:to keep it|for an? (?:vegan|vegetarian|dairy[- ]free|gluten[- ]free)|if you (?:are|want|like|prefer)|if not keeping|for vegans?)\b.*$/i;

/* A short name for a line or one side of an alternative: no quantity, no
   preparation after the comma, no parenthetical, no aside about diets. */
function shortName(text) {
  let t = String(text).replace(/\([^)]*\)/g, ' ').split(',')[0];
  t = t.replace(ASIDE, '');
  for (let i = 0; i < 3; i++) t = t.trim().replace(QTY, '');
  return t.replace(/\s+/g, ' ').replace(/^[\s;:.]+|[\s;:.]+$/g, '');
}

const HEAD_NOUN = /\b(stock|broth|sauce|dashi|mince|sausages?|fat|gelatine|paste|wash|milk|tortillas?|suet|cream|yogh?urt|oil|syrup|cheese|bread)$/;
const MODIFIER = /^(?:(?:extra|warm|hot|cold|fresh)\s+)?(?:vegetarian|vegan|vegetable|veg|oat|soy|soya|corn|rice|coconut|almond|plant|dairy[- ]free|gluten[- ]free|light|dark|low[- ]sodium)$/;
const BAD_MODIFIER = /^(?:(?:hot|warm|cold|fresh)\s+)?(?:chicken|beef|lamb|pork|fish|veal|duck|turkey|bone|dairy|whole|anchovy|ham)$/;

/** The phrase of `name` that holds the forbidden word, for "made without the …". */
function phraseWith(name, forbidden) {
  const segments = String(name).replace(/\([^)]*\)/g, ' ')
    .split(/,|;|\s+and\s+|\s+(?:mixed|beaten|whisked|loosened|stirred|blended) with\s+/)
    .map(shortName).filter(Boolean)
    .filter(seg => !/^(?:optional|to serve|to finish|to top|to drizzle|for serving|if you like|if using|drained|to garnish)$/.test(seg));
  const hit = segments.find(seg => forbidden.test(clean(seg)));
  return (hit || segments[0] || name).replace(/\b(?:optional|to serve|to finish|to top|to drizzle|for serving|if you like|if using)\b/g, '').replace(/\s+/g, ' ').trim()
    .split(/\s+\bor\b\s+/).map(shortName).filter(Boolean).join(' or ');
}

/**
 * One ingredient line against one tag: null when the line is fine, otherwise
 * { kind: 'conditional' | 'contradicted', line, cond }.
 * cond is { type: 'choose', good, bad, served } | { type: 'omit', what, served }
 *       | { type: 'alt', item } | { type: 'labelled', item }
 */
function judgeLine(line, forbidden) {
  if (!forbidden.test(line.cleaned)) return null;
  const served = SERVED.test(line.text);
  /* "(use oat milk to keep it vegan)" is the recipe offering the swap. */
  const offered = /\(use ([^)]+?)(?:\s+(?:to keep it|for an?|if you want it)\s+[^)]*)?\)/.exec(line.name);
  if (offered && !forbidden.test(clean(offered[1]))) {
    const bad = shortName(line.name.replace(offered[0], '').split(/\s+\bor\b\s+/)[0]);
    return { kind: 'conditional', line: line.text, cond: { type: 'choose', good: shortName(offered[1]), bad, served } };
  }
  /* An alternative only rescues the line if one of its sides is allowed. */
  if (/\bor\b/.test(line.name)) {
    const parts = line.name.split(/,?\s+\bor\b\s+/);
    const allowed = parts.find(p => !forbidden.test(clean(p)));
    const banned = parts.filter(p => forbidden.test(clean(p)));
    if (allowed && banned.length) {
      let bad = banned.map(shortName);
      if (/^(?:omit|leave (?:it |them )?out|skip|none|without)\b/i.test(shortName(allowed))) {
        return { kind: 'conditional', line: line.text, cond: { type: 'omit', what: bad.join(' or '), served } };
      }
      let good = shortName(allowed).replace(/^use\s+/, '');
      /* "chicken or vegetable stock" means chicken stock; "shredded suet, or
         vegetarian" means vegetarian suet. Only words that are plainly
         modifiers borrow the other side's noun. */
      const goodNoun = HEAD_NOUN.exec(good);
      if (goodNoun) bad = bad.map(b => (BAD_MODIFIER.test(b) ? `${b} ${goodNoun[1]}` : b));
      const last = bad[bad.length - 1];
      const badNoun = last.split(' ').length > 1 && /(\w+)$/.exec(last);
      if (MODIFIER.test(good) && badNoun && !good.endsWith(badNoun[1])) good = `${good} ${badNoun[1]}`;
      return { kind: 'conditional', line: line.text, cond: { type: 'choose', good, bad: bad.join(' or '), served } };
    }
  }
  if (OPTIONAL.test(line.text)) {
    return { kind: 'conditional', line: line.text, cond: { type: 'omit', what: phraseWith(line.name, forbidden), served } };
  }
  return { kind: 'contradicted', line: line.text, cond: null };
}

function softLine(line, tag) {
  for (const rule of SOFT[tag] || []) {
    const m = rule.re.exec(line.cleaned);
    if (!m || (rule.unless && rule.unless.test(line.name))) continue;
    if (/\bor\b/.test(line.name) && line.name.split(/\s+\bor\b\s+/).some(p => !rule.re.test(clean(p)))) continue;
    return { kind: 'conditional', line: line.text, cond: { type: rule.type, item: m[1] } };
  }
  return null;
}

const fold = v => v.toLowerCase().replace(/[-\s]+/g, ' ').trim();
function unique(items) {
  const seen = new Set();
  return items.filter(i => !seen.has(fold(i)) && seen.add(fold(i)));
}

/** The conditions as one clause each, grouped so nothing is said twice. */
function renderConditions(conds, tag) {
  const out = [];
  const chosen = conds.filter(c => c.type === 'choose');
  for (const c of chosen) out.push(`${c.served ? 'served' : 'made'} with ${c.good} rather than ${c.bad}`);
  const badWords = new Set(chosen.map(c => fold(c.bad)));
  for (const served of [false, true]) {
    const what = unique(conds.filter(c => c.type === 'omit' && c.served === served).map(c => c.what))
      .filter(w => !badWords.has(fold(w)));
    if (what.length) out.push(`${served ? 'served' : 'made'} without the ${joinList(what)}`);
  }
  const alts = unique(conds.filter(c => c.type === 'alt').map(c => c.item));
  /* Parmigiano-Reggiano, Grana Padano, Pecorino Romano and Gorgonzola are made with animal
     rennet by their rules, so "a vegetarian version" means a different cheese, and the note
     says which kind. */
  if (alts.length === 1) out.push(`made with a hard cheese made without animal rennet in place of the ${alts[0]}`);
  if (alts.length > 1) out.push(`made with cheeses made without animal rennet in place of the ${joinList(alts)}`);
  const vegstock = unique(conds.filter(c => c.type === 'vegstock').map(c => c.item.replace(/s$/, '')));
  if (vegstock.length) out.push(`made with a vegetable ${joinList(vegstock)}`);
  const labelled = unique(conds.filter(c => c.type === 'labelled').map(c => c.item));
  if (labelled.length) out.push(`made with ${joinList(labelled)} labelled gluten-free`);
  return unique(out);
}

const LABEL = { 'Vegan': 'Vegan', 'Vegetarian': 'Vegetarian', 'Dairy-Free': 'Dairy-free', 'Gluten-Free': 'Gluten-free' };

/**
 * Every checkable diet tag on the recipe, judged.
 * recipe: { tags, ing | ingredients, st | steps }
 * Returns { [tag]: { status: 'clean'|'conditional'|'contradicted', conditions: [...],
 *                    lines: [...], steps: [...], note } }
 */
function dietConditions(recipe) {
  const ing = recipe.ing || recipe.ingredients || [];
  const steps = recipe.st || recipe.steps || [];
  const parsed = lines(ing);
  const out = {};
  for (const tag of recipe.tags || []) {
    const forbidden = FORBIDS[tag];
    if (!forbidden) continue;
    const judged = parsed.map(l => judgeLine(l, forbidden) || softLine(l, tag)).filter(Boolean);
    const contradicted = judged.filter(j => j.kind === 'contradicted');
    const conditional = judged.filter(j => j.kind === 'conditional');
    /* A method step that names only the forbidden side ("stir the honey into
       the water") tells the cook to do the thing the label depends on them
       not doing. Reported for a person to reword; the label stays
       conditional either way. */
    const stepHits = [];
    const words = new Set(conditional.filter(j => j.cond.type !== 'alt' && j.cond.type !== 'labelled')
      .flatMap(j => (clean(j.line).match(new RegExp(forbidden.source, 'g')) || [])));
    steps.forEach((step, i) => {
      const text = clean(String(step).toLowerCase());
      for (const w of words) {
        const at = text.search(new RegExp(`\\b${w}\\b`));
        if (at < 0) continue;
        const near = text.slice(Math.max(0, at - 40), at + w.length + 40);
        if (/\bor\b|\bif using\b|\bif you\b|optional|\bany\b/.test(near)) continue;
        const source = conditional.find(j => j.cond.type !== 'alt' && j.cond.type !== 'labelled'
          && new RegExp(`\\b${w}\\b`).test(clean(j.line)));
        stepHits.push({ step: i + 1, word: w, cond: source ? source.cond : null });
        break;
      }
    });
    const conditions = renderConditions(conditional.map(j => j.cond), tag);
    const status = contradicted.length ? 'contradicted' : conditional.length ? 'conditional' : 'clean';
    out[tag] = {
      status,
      conditions,
      lines: (contradicted.length ? contradicted : conditional).map(j => j.line),
      steps: stepHits,
      note: status === 'conditional' ? `${LABEL[tag]} when ${joinList(conditions)}.` : ''
    };
  }
  return out;
}

function joinList(items) {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

module.exports = { dietConditions, FORBIDS, OPTIONAL, NOT_REALLY, SOFT, lines, clean };
