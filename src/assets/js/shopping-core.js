/* ==========================================================================
   Weekly Delight — shopping list arithmetic
   One file for the build (require) and the browser (window.WDShopping), so the
   weekly plan printed on the page and the list a reader rebuilds after
   changing the servings are worked out by the same rules.

   What it promises:
   - Quantities scale with the servings asked for, line by line.
   - Only the same food in compatible units is added together: grams with
     kilograms, millilitres with litres, teaspoons with tablespoons, and counts
     only with the same count word ("2 red peppers" + "1 red pepper"). A food
     given by weight in one recipe and by count in another is listed twice,
     on one line, rather than converted by a guessed weight.
   - Distinct products stay distinct: "boneless chicken thighs" and "bone-in
     chicken thighs" are two lines. Only spelling (plural, "fresh", "large")
     and the preparation after the first comma are ignored.
   - Seasonings and things most kitchens keep are listed apart as pantry
     staples; lines marked optional are listed apart as optional; lines with
     no quantity ("salt to taste") are listed by name only.
   - Numbers are rounded for shopping, not for the scales: 5 g steps, halves
     and quarters for counts.
   ========================================================================== */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.WDShopping = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MASS = { g: 1, kg: 1000 };
  var VOLUME = { ml: 1, cl: 10, l: 1000 };
  var SPOON = { tsp: 1, tbsp: 3 };
  var COUNT_UNITS = { clove: 'clove', cloves: 'clove', slice: 'slice', slices: 'slice', rasher: 'rasher',
    rashers: 'rasher', sprig: 'sprig', sprigs: 'sprig', stalk: 'stalk', stalks: 'stalk', stick: 'stick',
    sticks: 'stick', head: 'head', heads: 'head', bunch: 'bunch', bunches: 'bunch', can: 'tin', cans: 'tin',
    tin: 'tin', tins: 'tin', jar: 'jar', jars: 'jar', fillet: 'fillet', fillets: 'fillet', packet: 'packet',
    packets: 'packet', sheet: 'sheet', sheets: 'sheet', piece: 'piece', pieces: 'piece', handful: 'handful',
    handfuls: 'handful', punnet: 'punnet', rack: 'rack', racks: 'rack', strip: 'strip', strips: 'strip' };

  /* Seasonings, oils and dry goods a kitchen usually has. Listed, never hidden. */
  var PANTRY = /^(?:fine |flaky |coarse |sea |table |kosher )*(?:sea )?salt$|black pepper|white pepper|^pepper$|(?:olive|vegetable|sunflower|neutral|rapeseed|groundnut|sesame|canola|coconut) oil|^oil$|vinegar|soy sauce|fish sauce|oyster sauce|worcestershire|^(?:plain|self-raising|all-purpose|bread|strong white) flour$|^(?:caster|granulated|light brown|dark brown|brown|demerara|icing) sugar$|^sugar$|baking powder|bicarbonate|baking soda|cornflour|cornstarch|^ground (?!beef|pork|lamb|turkey|chicken|almonds)|^dried (?:oregano|thyme|basil|mint|rosemary|sage|parsley|dill|tarragon|marjoram|mixed herbs|herbs|chilli|chili|chillies)|smoked paprika|^paprika$|chilli flakes?|chili flakes?|red pepper flakes?|chilli powder|chili powder|cayenne|garlic powder|onion powder|curry powder|garam masala|turmeric|cumin|bay leaf|peppercorns|mustard powder|vanilla extract|honey$|golden syrup|stock cube|bouillon|tomato (?:paste|purée|puree)$|^water$/;
  var DROP = /^(?:water|cold water|boiling water|hot water|ice|ice cubes)$/;
  var NOISE = /\b(?:fresh|freshly|large|small|medium|ripe|good|good-quality|cold|hot|warm|extra|about|roughly|approximately|heaped|level|thinly|thickly|finely|roughly)\b/g;
  /* Preparation words in front of the food. Not in front of tomatoes: tinned chopped tomatoes are a product. */
  var PREP = /^(?:(?:grated|chopped|sliced|diced|minced|crushed|shredded|torn|picked)\s+)+(?!tomato)/;
  var SALT = /^(?:fine |flaky |coarse |sea |table |kosher |rock )*salt$/;

  function singular(word) {
    if (/(?:ss|us|is)$/.test(word)) return word;
    if (/chillies$/.test(word)) return word.replace(/ies$/, 'i');
    if (/ies$/.test(word)) return word.replace(/ies$/, 'y');
    if (/(?:tomato|potato|mango)es$/.test(word)) return word.replace(/es$/, '');
    if (/(?:ch|sh|x)es$/.test(word)) return word.replace(/es$/, '');
    if (/leaves$/.test(word)) return word.replace(/leaves$/, 'leaf');
    if (/s$/.test(word) && word.length > 3) return word.slice(0, -1);
    return word;
  }

  function plural(word) {
    if (/chilli$/.test(word)) return word + 'es';
    if (/y$/.test(word) && !/[aeiou]y$/.test(word)) return word.replace(/y$/, 'ies');
    if (/(?:tomato|potato|mango)$/.test(word)) return word + 'es';
    if (/(?:ch|sh|x|s)$/.test(word)) return word + 'es';
    if (/leaf$/.test(word)) return word.replace(/leaf$/, 'leaves');
    return word + 's';
  }

  /** The name as written, without quantities, preparation or size words: "red peppers". */
  function cleanName(name) {
    var text = String(name || '').toLowerCase()
      .replace(/\([^)]*\)/g, ' ')
      .split(/,|;|\bto serve\b|\bfor (?:the|serving|dusting|frying|brushing|greasing)\b/)[0]
      .replace(/\b(?:x\s*)?\d+(?:[.,]\d+)?\s*(?:g|kg|ml|l|cm|mm)\b/g, ' ')
      .replace(/\bof\b/g, ' ')
      .replace(NOISE, ' ')
      .replace(/\bflorets?\b/g, ' ')
      .replace(/\s+/g, ' ').trim()
      .replace(PREP, '');
    text = text.replace(/^garlic cloves?$/, 'garlic').replace(/^cloves? garlic$/, 'garlic');
    if (SALT.test(text)) text = 'salt';
    return text;
  }

  /** "Red peppers, about 150 g, sliced" -> "red pepper": the key two lines must share to be added together. */
  function foodKey(name) {
    var words = cleanName(name).split(' ');
    if (words.length) words[words.length - 1] = singular(words[words.length - 1]);
    return words.join(' ').trim();
  }

  function isOptional(line, group) {
    return /\boptional\b|\bif (?:you like|using|wished)\b/i.test(line.raw || line.name || '') || /optional/i.test(group || '');
  }

  function family(unit, key) {
    if (MASS[unit]) return 'mass';
    if (VOLUME[unit]) return 'volume';
    if (SPOON[unit]) return 'spoon';
    if (COUNT_UNITS[unit]) return 'count:' + COUNT_UNITS[unit];
    if (!unit && /garlic/.test(key)) return 'count:clove';
    return 'count:';
  }

  function toBase(qty, unit) {
    if (MASS[unit]) return qty * MASS[unit];
    if (VOLUME[unit]) return qty * VOLUME[unit];
    if (SPOON[unit]) return qty * SPOON[unit];
    return qty;
  }

  var FRACTIONS = [[0.25, '¼'], [0.5, '½'], [0.75, '¾']];
  function countText(n) {
    var whole = Math.floor(n + 1e-9);
    var frac = n - whole;
    var best = null;
    for (var i = 0; i < FRACTIONS.length; i++) if (Math.abs(frac - FRACTIONS[i][0]) < 0.13) best = FRACTIONS[i][1];
    if (frac < 0.13) return String(whole || 1);
    if (frac > 0.87) return String(whole + 1);
    return (whole ? whole + ' ' : '') + (best || '½');
  }

  /** A shopping quantity: grams in 5 g steps, kilograms to one decimal, spoons as tbsp when there are three or more. */
  function amountText(fam, base) {
    if (fam === 'mass') {
      if (base >= 1000) return (Math.round(base / 100) / 10) + ' kg';
      return (base >= 50 ? Math.round(base / 5) * 5 : Math.max(1, Math.round(base))) + ' g';
    }
    if (fam === 'volume') {
      if (base >= 1000) return (Math.round(base / 100) / 10) + ' litres';
      return (base >= 50 ? Math.round(base / 10) * 10 : Math.max(1, Math.round(base))) + ' ml';
    }
    if (fam === 'spoon') {
      if (base >= 3) return countText(base / 3) + ' tbsp';
      return countText(base) + ' tsp';
    }
    var word = fam.slice(6);
    var n = countText(base);
    if (!word) return n;
    return n + ' ' + word + (base > 1.13 ? (/h$/.test(word) ? 'es' : 's') : '');
  }

  /**
   * recipes: [{ slug, title, servings (as written), make (servings wanted), lines: parsed ingredient lines }]
   * Each parsed line is { qty, unit, name, raw } or { group } (src/lib/ingredients.js parseLine, or the
   * same fields read from a recipe page in the browser).
   */
  function build(recipes) {
    var items = {};
    var order = [];
    recipes.forEach(function (recipe) {
      var factor = recipe.servings ? (recipe.make || recipe.servings) / recipe.servings : 1;
      var group = '';
      recipe.lines.forEach(function (line) {
        if (line.group) { group = line.group; return; }
        var key = foodKey(line.name || line.raw);
        if (!key || DROP.test(key)) return;
        var unit = String(line.unit || '').toLowerCase();
        var optional = isOptional(line, group);
        var section = optional ? 'optional' : PANTRY.test(key) ? 'pantry' : 'buy';
        var id = section + '|' + key;
        if (!items[id]) {
          items[id] = { key: key, section: section, label: cleanName(line.name || line.raw), amounts: {}, from: [], toServe: false };
          order.push(id);
        }
        var item = items[id];
        if (item.from.indexOf(recipe.title) === -1) item.from.push(recipe.title);
        if (/to serve|serving|garnish/i.test(group) || /\bto serve\b/i.test(line.raw || '')) item.toServe = true;
        if (line.qty == null || !isFinite(line.qty)) { item.unmeasured = true; return; }
        var fam = family(unit, key);
        item.amounts[fam] = (item.amounts[fam] || 0) + toBase(line.qty * factor, unit);
      });
    });
    var out = { buy: [], pantry: [], optional: [] };
    order.forEach(function (id) {
      var item = items[id];
      var fams = Object.keys(item.amounts);
      var parts = fams.map(function (fam) { return amountText(fam, item.amounts[fam]); });
      /* A count reads "4 red peppers"; one of something reads "1 lemon". */
      var counted = fams.filter(function (f) { return f === 'count:'; });
      var label = counted.length ? (item.amounts['count:'] > 1.13 ? plural(item.key) : item.key) : item.label;
      if (item.unmeasured && !parts.length) parts.push('some');
      else if (item.unmeasured) parts.push('plus some');
      out[item.section].push({
        name: label,
        amount: parts.join(' + '),
        from: item.from,
        toServe: item.toServe
      });
    });
    var byName = function (a, b) { return a.name.localeCompare(b.name); };
    out.buy.sort(byName); out.pantry.sort(byName); out.optional.sort(byName);
    return out;
  }

  return { build: build, foodKey: foodKey, amountText: amountText };
}));
