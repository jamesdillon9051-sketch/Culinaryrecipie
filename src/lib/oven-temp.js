'use strict';
/**
 * Appends the Fahrenheit reading beside a Celsius temperature, in the
 * "200°C / 400°F" shape 377 of these already use.
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
 * A thermometer reading — "the custard reaches 75°C", "prove at 24°C" —
 * needs the precise figure a probe or a room actually shows, so it is
 * converted to the nearest whole degree, not rounded to the nearest 5°F the
 * way an oven dial is marked. Until October 2026 those readings were left in
 * Celsius only, as was every temperature written "180C" without a degree
 * sign (about 700 recipes) and every "bake at 200°C fan" in a step that did
 * not happen to say "oven": a reader with a Fahrenheit oven or thermometer
 * got no number to use. "180C" is now printed "180°C" and paired like the
 * rest. A range keeps both ends ("24 to 26°C / 75 to 79°F"), a reading
 * below zero keeps its sign, and a temperature already paired with
 * Fahrenheit by its author is left exactly as written.
 */

/* A step that sets an oven, grill, fryer or pan of oil. Kept as the auditors'
   test for "this step names an oven or frying temperature". */
const OVEN_CONTEXT = /\boven\b|\bgrill\b|heat the (?:\w+\s+)?oil\b|deep-fry|\bfryer\b|\bfrying\b/i;
/* A setting rather than a reading: the dial of an oven, smoker or fryer, or
   the heat a dish bakes, roasts or fries at. Rounded to 5°F. */
const SETTING = /\boven\b|\bgrill\b|\bfryer\b|\bsmoker\b|\boil\b|\bdripping\b|deep-fry|\bfr(?:y|ies|ied|ying)\b|\bbak(?:e|es|ed|ing)\b|\broast(?:s|ed|ing)?\b|\bcook(?:s|ed)? at\b/i;
/* A reading taken with a thermometer, or a temperature a mixture is brought
   or cooled to. Converted exactly. */
const READING = /\b(?:reach(?:es|ed|ing)?|reads?|registers?|internal|core|thermometer|probe|thickest|centre|center|cool(?:s|ed)? to|until it is|done at|water|warm place|room temperature|steams?)\b[^.;]*$/i;

const MINUS = '[-−]';
/* "180C" and "180 C" as written in about 700 recipes: a two- or three-figure
   number followed by a capital C and nothing that would make it a word. */
const NO_DEGREE = new RegExp(`(^|[^\\w.,/])(${MINUS}?\\d{2,3}) ?C\\b(?![\\w'’])`, 'g');
/* One Celsius figure or a range ending in one, unless its author already
   paired it: followed by "/ 400°F" or "(400°F)". */
const CELSIUS = new RegExp(
  `(^|[^\\w.,])(?:(${MINUS}?\\d{1,3})( ?(?:to|and|or|–|-) ?))?(${MINUS}?\\d{1,3}) ?°C\\b(?! ?[/(] ?${MINUS}?\\d{1,3} ?°? ?F\\b)`, 'g');

const num = s => Number(String(s).replace('−', '-'));
const sign = n => (n < 0 ? `−${-n}` : `${n}`);

/** Rounded to the nearest 5°F, as an oven dial is marked. */
function celsiusToF(c) {
  return Math.round((c * 9 / 5 + 32) / 5) * 5;
}

/** To the nearest whole degree, for a thermometer reading. */
function celsiusToFExact(c) {
  return Math.round(c * 9 / 5 + 32);
}

/** "180C" → "180°C"; nothing else is touched. */
function degreeSign(text) {
  return String(text).replace(NO_DEGREE, (m, lead, c) => `${lead}${c}°C`);
}

/**
 * @param {string} step  one method sentence (or tip, or storage note), as authored
 * @returns {string} the same text, with each Celsius temperature followed by
 *   its Fahrenheit equivalent
 */
function addFahrenheit(step) {
  if (!step) return step;
  const text = degreeSign(step);
  return text.replace(CELSIUS, (match, lead, from, sep, to, offset, whole) => {
    const before = whole.slice(0, offset + lead.length);
    const sentence = before.slice(Math.max(before.lastIndexOf('.'), before.lastIndexOf(';')) + 1);
    const exact = READING.test(sentence) || !SETTING.test(sentence + ' ' + whole);
    const f = c => sign((exact ? celsiusToFExact : celsiusToF)(num(c)));
    const range = from !== undefined ? `${from}${sep}` : '';
    const rangeF = from !== undefined ? `${f(from)}${sep}` : '';
    return `${lead}${range}${to}°C / ${rangeF}${f(to)}°F`;
  });
}

module.exports = { addFahrenheit, degreeSign, celsiusToF, celsiusToFExact, OVEN_CONTEXT };
