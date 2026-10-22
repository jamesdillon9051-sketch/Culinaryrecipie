'use strict';
/* Regressions for the diet recognizer (src/lib/diet-conditions.js): named wheat
   pasta and Italian breads against Gluten-Free, and Nutella, chocolate spreads
   and milk chocolate against Dairy-Free and Vegan. Each case that used to read
   "clean" on a real recipe is a recipe that was published with the wrong label
   (panettone bread pudding, slow cooker beef ragu, nutella cookies).
     node tools/diet-conditions-test.js */
const assert = require('node:assert/strict');
const { dietConditions } = require('../src/lib/diet-conditions');

const status = (tags, ing) => {
  const result = dietConditions({ tags, ing, st: ['Cook.'] });
  return Object.fromEntries(Object.entries(result).map(([tag, v]) => [tag, v.status]));
};

const cases = [
  [['Gluten-Free'], ['400 g pappardelle'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['500 g panettone, sliced 2 cm thick'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['250 g dried cannelloni tubes'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['500 g fresh cheese tortellini'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['250 g vermicelli'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['250 g gluten-free penne'], 'Gluten-Free', 'clean'],
  [['Gluten-Free'], ['250 g rice vermicelli'], 'Gluten-Free', 'clean'],
  [['Gluten-Free'], ['400 g round white loaf'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['4 bagels, split'], 'Gluten-Free', 'contradicted'],
  [['Gluten-Free'], ['400 g gluten-free loaf'], 'Gluten-Free', 'clean'],
  [['Vegetarian'], ['600 g grouper fillets, cut into 4 pieces'], 'Vegetarian', 'contradicted'],
  [['Vegan'], ['4 walleye fillets'], 'Vegan', 'contradicted'],
  [['Gluten-Free'], ['250 g lasagne sheets made from rice or corn'], 'Gluten-Free', 'clean'],
  [['Dairy-Free'], ['200 g Nutella'], 'Dairy-Free', 'contradicted'],
  [['Dairy-Free'], ['100 g milk chocolate'], 'Dairy-Free', 'contradicted'],
  [['Vegan'], ['200 g Nutella'], 'Vegan', 'contradicted'],
  [['Dairy-Free'], ['200 g dairy-free chocolate spread'], 'Dairy-Free', 'clean'],
  [['Vegan'], ['100 g vegan white chocolate'], 'Vegan', 'clean'],
  [['Dairy-Free'], ['100 g dark chocolate'], 'Dairy-Free', 'clean']
];
for (const [tags, ing, tag, expected] of cases) {
  assert.equal(status(tags, ing)[tag], expected, `${tag} with ${JSON.stringify(ing)}`);
}
console.log(`${cases.length} diet-recognizer regressions passed`);
