'use strict';
/* Pins down the Fahrenheit readings src/lib/oven-temp.js adds to the method, tips, why-panel and
   storage note. About 700 recipes write "180C" with no degree sign, which the helper used to miss,
   so those pages printed no Fahrenheit at all. */
const assert = require('node:assert/strict');
const { addFahrenheit: f } = require('../src/lib/oven-temp');
assert.equal(f('Heat the oven to 220C and line a tray.'), 'Heat the oven to 220°C / 430°F and line a tray.');
assert.equal(f('Heat the air fryer to 200C.'), 'Heat the air fryer to 200°C / 390°F.');
// An author's own pair is left alone; the fan figure beside it keeps its reading, as before.
assert.equal(f('Heat the oven to 200°C / 400°F (180°C fan).'), 'Heat the oven to 200°C / 400°F (180°C / 355°F fan).');
assert.equal(f('Reduce to 180°C / 355°F.'), 'Reduce to 180°C / 355°F.');
assert.equal(f('Heat the oil to 180C (350F).'), 'Heat the oil to 180°C (350F).');
// A setting is rounded to 5°F like an oven dial; a thermometer reading is converted exactly.
assert.equal(f('Cover and cook at 150°C fan for 2 hours.'), 'Cover and cook at 150°C / 300°F fan for 2 hours.');
assert.equal(f('Roast until the thigh reads 74°C and the breast 68°C.'), 'Roast until the thigh reads 74°C / 165°F and the breast 68°C / 154°F.');
assert.equal(f('until thick, reaching 75°C on a thermometer.'), 'until thick, reaching 75°C / 167°F on a thermometer.');
// Ranges keep both ends, and a reading below zero keeps its sign.
assert.equal(f('Prove at 24 to 26°C for 2 hours.'), 'Prove at 24 to 26°C / 75 to 79°F for 2 hours.');
assert.equal(f('Keep the oil between 160 and 175°C.'), 'Keep the oil between 160 and 175°C / 320 and 345°F.');
assert.equal(f('Freeze at −20°C for 7 days.'), 'Freeze at −20°C / −4°F for 7 days.');
assert.equal(f('frozen at −20°C / −4°F for 7 days'), 'frozen at −20°C / −4°F for 7 days');
// Not temperatures.
assert.equal(f('Use a 1.5C mix and vitamin C.'), 'Use a 1.5C mix and vitamin C.');
assert.equal(f('Simmer for 20 minutes.'), 'Simmer for 20 minutes.');
console.log('14 oven-temperature regressions passed');
