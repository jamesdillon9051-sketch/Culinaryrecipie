'use strict';
/**
 * Ingredient line parser.
 *
 * Authors write ingredients as natural strings ("700 g boneless chicken
 * thighs, cut into 3 cm cubes"). This splits off the leading quantity and
 * unit so the serving scaler can recalculate them, leaving the remainder as
 * free text. Only the LEADING number is treated as a quantity, so measures
 * inside the description ("3 cm cubes") are untouched.
 */

const UNITS = new Set([
  'g', 'kg', 'mg', 'ml', 'l', 'cl',
  'tsp', 'tbsp', 'cup', 'cups', 'oz', 'lb', 'lbs', 'pint', 'pints', 'quart',
  'clove', 'cloves', 'can', 'cans', 'tin', 'tins', 'jar', 'jars',
  'slice', 'slices', 'sheet', 'sheets', 'rasher', 'rashers', 'sprig', 'sprigs',
  'stick', 'sticks', 'stalk', 'stalks', 'bunch', 'bunches', 'head', 'heads',
  'pinch', 'pinches', 'dash', 'handful', 'handfuls', 'piece', 'pieces',
  'packet', 'packets', 'punnet', 'strip', 'strips', 'fillet', 'fillets',
  'rack', 'racks', 'glass', 'glasses', 'drop', 'drops'
]);

const LEADING = /^(\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:\.\d+)?)\s+(.*)$/;

function toNumber(raw) {
  if (raw.includes('/')) {
    const parts = raw.trim().split(/\s+/);
    if (parts.length === 2) {
      const [n, d] = parts[1].split('/').map(Number);
      return Number(parts[0]) + n / d;
    }
    const [n, d] = raw.split('/').map(Number);
    return n / d;
  }
  return Number(raw);
}

const VULGAR = {
  0.125: '⅛', 0.25: '¼', 0.3333: '⅓', 0.375: '⅜',
  0.5: '½', 0.625: '⅝', 0.6667: '⅔', 0.75: '¾', 0.875: '⅞'
};

/** Mirror of the client-side formatter so server-rendered HTML matches. */
function formatQty(value, unit) {
  if (!isFinite(value) || value <= 0) return '';
  const metric = /^(g|kg|ml|l)$/.test(unit || '');

  if (metric) {
    if (value >= 1000) return String(Math.round(value / 50) * 50);
    if (value >= 100) return String(Math.round(value / 5) * 5);
    if (value >= 20) return String(Math.round(value));
    return String(Math.round(value * 10) / 10);
  }
  if (value >= 10) return String(Math.round(value));

  const whole = Math.floor(value);
  const frac = value - whole;
  if (frac < 0.06) return String(whole || 0);

  let best = null, bestDiff = 0.07;
  for (const key of Object.keys(VULGAR)) {
    const diff = Math.abs(frac - parseFloat(key));
    if (diff < bestDiff) { bestDiff = diff; best = key; }
  }
  if (best) return (whole ? whole + ' ' : '') + VULGAR[best];
  return String(Math.round(value * 4) / 4);
}

/**
 * @returns {{group:string}|{qty:number|null, unit:string, name:string, raw:string}}
 */
function parseLine(line) {
  if (line.startsWith('# ')) return { group: line.slice(2).trim() };

  const match = LEADING.exec(line.trim());
  if (!match) return { qty: null, unit: '', name: line.trim(), raw: line.trim() };

  const qty = toNumber(match[1]);
  let rest = match[2];
  let unit = '';

  const firstWord = rest.split(/\s+/)[0];
  const candidate = firstWord.replace(/[.,]$/, '').toLowerCase();
  if (UNITS.has(candidate)) {
    unit = candidate;
    rest = rest.slice(firstWord.length).trim();
  }

  return { qty, unit, name: rest, raw: line.trim() };
}

function parse(lines) {
  return lines.map(parseLine);
}

/** Plain-text ingredient list for Recipe schema's recipeIngredient. */
function plainList(lines) {
  return parse(lines).filter(item => !item.group).map(item => item.raw);
}

module.exports = { parse, parseLine, plainList, formatQty, UNITS };
