'use strict';
/**
 * Metric to US customary conversion, for the ingredient-list unit toggle.
 *
 * Only ever mass to mass (g/kg to oz/lb) or volume to volume (ml/l to fl oz,
 * cup, tbsp, tsp). Never mass to volume: that needs an ingredient's density,
 * which this site does not know and will not guess — "1 cup" of flour and
 * "1 cup" of honey are not the same number of grams, and a wrong guess here
 * is a wrong recipe, not a rounding quirk.
 *
 * Because every recipe on the site already writes solids in grams and
 * liquids in millilitres (see src/lib/ingredients.js), the toggle never has
 * to cross that line: every convertible unit on a page is already
 * unambiguously one or the other. Spoon and cup measures (tsp, tbsp, cup)
 * and count units (clove, slice, tin) are left exactly as authored in both
 * modes, because they already read the same in either system.
 */

const G_PER_OZ = 28.3495;
const G_PER_LB = 453.592;
const ML_PER_TSP = 4.92892;
const ML_PER_TBSP = 14.7868;
const ML_PER_CUP = 236.588;

/** True for the only units this module ever touches. */
function isConvertible(unit) {
  return unit === 'g' || unit === 'kg' || unit === 'ml' || unit === 'l';
}

/**
 * @param {number} qty   the metric quantity, already scaled for servings
 * @param {string} unit  'g' | 'kg' | 'ml' | 'l'
 * @returns {{qty: number, unit: string}} the same physical quantity in the
 *   US customary unit a home cook would actually reach for
 */
function toUS(qty, unit) {
  if (unit === 'g' || unit === 'kg') {
    const grams = unit === 'kg' ? qty * 1000 : qty;
    /* Three-quarters of a pound is the point a cook reaches for the bigger
       unit rather than saying "12 ounces" — the same judgement formatQty
       already makes between grams and kilograms. */
    if (grams >= G_PER_LB * 0.75) return { qty: grams / G_PER_LB, unit: 'lb' };
    return { qty: grams / G_PER_OZ, unit: 'oz' };
  }
  if (unit === 'ml' || unit === 'l') {
    const ml = unit === 'l' ? qty * 1000 : qty;
    if (ml >= ML_PER_CUP * 0.4) return { qty: ml / ML_PER_CUP, unit: 'cup' };
    if (ml >= ML_PER_TBSP * 0.75) return { qty: ml / ML_PER_TBSP, unit: 'tbsp' };
    return { qty: ml / ML_PER_TSP, unit: 'tsp' };
  }
  return { qty, unit };
}

module.exports = { toUS, isConvertible, G_PER_OZ, G_PER_LB, ML_PER_TSP, ML_PER_TBSP, ML_PER_CUP };
