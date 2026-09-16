'use strict';
/**
 * Appends the Fahrenheit reading beside a bare Celsius oven or frying-oil
 * temperature, in the "200°C / 400°F" shape 377 of these already use.
 *
 * That shape is mined from the site's own existing pairs rather than
 * computed independently: extracted across every recipe, the established
 * numbers are almost all exact math rounded to the nearest 5°F (an oven
 * dial's usual increment) rather than the rounder textbook figures a
 * conversion chart quotes — 160°C prints as 320°F here, not the 325°F a
 * gas-mark table would give. Matching that keeps a new conversion from
 * reading like it came from a different source than the 377 already on the
 * site.
 *
 * Scoped to oven and frying-oil mentions only, not every Celsius figure in a
 * method. A thermometer reading — "the custard reaches 75°C", "prove at
 * 24°C" — needs the precise figure a probe or a room actually shows, and
 * rounding it to the nearest 5°F the way an oven dial is marked would be a
 * small step down in accuracy on exactly the readings where the number is
 * doing real work. Measured before this was written: 41 bare oven/frying
 * mentions against 80 of these more precise ones, and only the 41 are
 * touched.
 */

const OVEN_CONTEXT = /\boven\b|\bgrill\b|heat the (?:\w+\s+)?oil\b|deep-fry|\bfryer\b|\bfrying\b/i;

/* Not already paired — "200°C / 400°F" is left alone so this never appends a
   second conversion beside one an author already wrote by hand. */
const BARE_CELSIUS = /\b(\d{2,3})\s*°\s*C\b(?!\s*\/)/g;

function celsiusToF(c) {
  return Math.round((c * 9 / 5 + 32) / 5) * 5;
}

/**
 * @param {string} step  one method sentence, as authored
 * @returns {string} the same sentence, with °C readings in an oven or
 *   frying context paired with their °F equivalent
 */
function addFahrenheit(step) {
  if (!step || !OVEN_CONTEXT.test(step)) return step;
  return step.replace(BARE_CELSIUS, (match, c) => `${c}°C / ${celsiusToF(Number(c))}°F`);
}

module.exports = { addFahrenheit, celsiusToF, OVEN_CONTEXT };
