/** High-protein recipe details, volume four.
    See ../details2/italian.js for the schema.

    Nutrition is per serving, worked from the ingredient list at the stated
    yield rather than estimated from the finished dish. The protein figure is
    what earns the High-Protein tag, so it is the number to get right. */

module.exports = {
  'chicken-rice-protein-bowl': {
    d: 'Chicken breast cooked hard in a dry pan, sliced over rice with edamame and a lemon-tahini dressing, built to put a serious amount of protein in one bowl without tasting like a punishment.',
    meta: 'Chicken and rice protein bowl — 58 g of protein a serving, with edamame and a lemon-tahini dressing.',
    kw: ['high protein chicken bowl', 'chicken and rice bowl', 'muscle gain meal', 'protein rice bowl'],
    why: 'Chicken breast dries out because people cook it gently for a long time; it stays juicy when cooked hot and fast and then left alone. Taking it off at 68C and letting it rest carries it to a safe 74C on residual heat, which is the difference between moist and chalky. The edamame is not garnish — it adds 11 g of protein a serving and is the reason this clears 55 g without a second chicken breast.',
    ing: [
      '# For the bowl',
      '350 g chicken breast, in two even fillets',
      '1 tbsp neutral oil',
      '1 tsp smoked paprika',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '150 g white basmati rice',
      '200 g frozen edamame, podded',
      '1 large carrot, shredded',
      '100 g cucumber, sliced',
      '# For the dressing',
      '2 tbsp tahini',
      '2 tbsp lemon juice',
      '1 small garlic clove, crushed',
      '3 tbsp cold water',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Rinse the rice until the water runs clear, then cook it in 300 ml of water with a pinch of salt, covered, for 11 minutes. Take it off the heat and leave it covered for another 10.',
      'Pat the chicken completely dry and rub it with the oil, paprika, salt and pepper. Dry meat browns; wet meat steams.',
      'Heat a heavy frying pan over medium-high until a drop of water skitters. Lay the fillets in and leave them for 5 minutes without moving them.',
      'Turn once and cook 4 to 6 minutes more, until a thermometer in the thickest part reads 68C.',
      'Move the chicken to a board and rest it 5 minutes. It will climb to 74C as it sits, which is where you want it.',
      'Boil the edamame for 3 minutes in the same pan you used for the rice, then drain.',
      'Whisk the tahini, lemon juice, garlic, water and salt until it loosens into a pourable dressing. It will seize before it thins — keep going.',
      'Slice the chicken across the grain. Build the bowls with rice, edamame, carrot and cucumber, lay the chicken over and spoon the dressing across.'
    ],
    tips: [
      'A thermometer is the single piece of equipment that fixes chicken. Cooking to a time rather than a temperature is why it comes out dry.',
      'Butterfly a thick fillet rather than cooking it longer — an even thickness cooks evenly, and nothing else does.',
      'Doubling the rice and edamame and cooking the chicken fresh each day gives three days of lunches without reheated chicken breast, which is its own punishment.'
    ],
    pair: ['A sharp green salad with plenty of vinegar', 'Chilli crisp or gochujang for heat', 'Sparkling water with lemon'],
    store: 'Refrigerate components separately up to 3 days. The dressing thickens in the fridge; loosen it with a teaspoon of water. Reheat rice with a splash of water, covered, and add the chicken cold or briefly warmed — reheating it hard is what makes it rubbery.',
    nut: [618, 58, 62, 14, 6, 4, 720]
  },

  'salmon-quinoa-bowl': {
    d: 'Salmon roasted just to the point of flaking, over quinoa with roasted broccoli and a dill-yoghurt sauce — a bowl that lands 40 g of protein a serving without much work.',
    meta: 'Baked salmon and quinoa bowl with roasted broccoli and dill yoghurt — 40 g of protein a serving.',
    kw: ['salmon quinoa bowl', 'high protein salmon', 'baked salmon recipe', 'healthy salmon bowl'],
    why: 'Salmon goes from perfect to dry in about two minutes, so the oven is set high and the time is short. Quinoa is rinsed because the saponin coating on the outside is genuinely bitter and rinsing is the whole fix. Roasting the broccoli rather than steaming it is not fussiness — the dry heat is what browns the edges and gives the bowl something other than soft textures.',
    ing: [
      '# For the bowl',
      '4 salmon fillets, about 150 g each, skin on',
      '1 tbsp olive oil',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 lemon, half sliced and half juiced',
      '180 g quinoa',
      '400 g broccoli, in small florets',
      '1 tbsp olive oil, for the broccoli',
      '# For the dill yoghurt',
      '150 g thick Greek yoghurt',
      '2 tbsp chopped dill',
      '1 tbsp lemon juice',
      '1 small garlic clove, crushed',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Heat the oven to 200C fan.',
      'Rinse the quinoa in a fine sieve for 30 seconds, then simmer it in 360 ml of water for 15 minutes, covered. Take it off and leave it 5 minutes, then fork it through.',
      'Toss the broccoli with a tablespoon of oil and a pinch of salt and roast it for 18 minutes, until the tips are properly browned.',
      'Rub the salmon with the remaining oil, the salt and pepper, and lay the lemon slices over.',
      'Roast the salmon for 10 to 12 minutes, on a separate tray, until the thickest part flakes when pressed with a fork. It should still look slightly translucent at the very centre.',
      'Whisk the yoghurt, dill, lemon juice, garlic and salt together.',
      'Divide the quinoa and broccoli between four bowls, lay a fillet on each and spoon the dill yoghurt over.'
    ],
    tips: [
      'Salmon carries on cooking off the heat. Pulling it a minute early is nearly always right.',
      'Skin-on fillets hold together on the tray and the skin lifts away in one piece afterwards if you do not want it.',
      'Cook the quinoa in stock rather than water if you find it bland — it absorbs whatever it is simmered in.'
    ],
    pair: ['A dry Riesling or a cold lager', 'Pickled red onions for sharpness', 'Flatbread to mop the yoghurt'],
    store: 'Refrigerate up to 2 days. Salmon is best eaten cold from the fridge rather than reheated, flaked back over the quinoa; reheating dries it out and makes the kitchen smell for a day.',
    nut: [562, 40, 42, 24, 6, 5, 480]
  },

  'cottage-cheese-pancakes': {
    d: 'Pancakes bound with cottage cheese and eggs rather than mostly flour, sweetened by nothing but a ripe banana, and carrying 31 g of protein a serving.',
    meta: 'Cottage cheese protein pancakes — 31 g of protein a serving, sweetened only by ripe banana.',
    kw: ['cottage cheese pancakes', 'protein pancakes', 'high protein breakfast', 'no added sugar pancakes'],
    why: 'Ordinary pancakes are flour and sugar with an egg for structure. Reversing the ratio — cottage cheese and eggs carrying a little oat flour — gives a batter that sets on protein rather than starch, so it browns quickly and stays tender. Blending the cottage cheese matters: left in curds it makes the pancakes weep, and blended it disappears entirely.',
    ing: [
      '250 g cottage cheese',
      '4 large eggs',
      '80 g rolled oats',
      '1 very ripe banana',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      '0.5 tsp ground cinnamon',
      '1 tbsp neutral oil, for the pan',
      '# To serve',
      '150 g berries',
      '2 tbsp thick Greek yoghurt'
    ],
    st: [
      'Blend the oats alone for 20 seconds until they are a coarse flour.',
      'Add the cottage cheese, eggs, banana, baking powder, vanilla, salt and cinnamon and blend for another 30 seconds, until completely smooth.',
      'Let the batter stand 5 minutes. The oat flour drinks the liquid and the batter thickens noticeably.',
      'Heat a non-stick pan over medium — lower than you would for ordinary pancakes, because this batter browns faster.',
      'Wipe the pan with oil and drop in 3 tablespoons of batter per pancake, spreading each into a 10 cm round.',
      'Cook 2 to 3 minutes, until bubbles hold their shape at the edges, then turn and give it 90 seconds more.',
      'Stack and serve with the berries and a spoonful of yoghurt.'
    ],
    tips: [
      'Medium heat, not high. Protein sets faster than starch, so these colour before the middle is done if the pan is too hot.',
      'The banana has to be properly speckled. An underripe one adds no sweetness at all and these have nothing else to fall back on.',
      'The batter keeps overnight in the fridge and thickens further; loosen it with a splash of milk before cooking.'
    ],
    pair: ['Strong coffee', 'A handful of toasted walnuts', 'Cold milk'],
    store: 'Refrigerate cooked pancakes up to 3 days, or freeze 2 months interleaved with paper. Reheat in a dry pan for 1 minute a side rather than a microwave, which makes them rubbery.',
    nut: [432, 31, 34, 17, 5, 11, 620]
  },

  'tuna-white-bean-salad': {
    d: 'Tinned tuna and cannellini beans dressed with lemon, olive oil and red onion — the Tuscan store-cupboard lunch, and 43 g of protein without turning on the hob.',
    meta: 'Tuna and white bean salad with lemon and red onion — 43 g of protein a serving, no cooking.',
    kw: ['tuna white bean salad', 'tonno e fagioli', 'high protein lunch', 'no cook protein meal'],
    why: 'This is one of the few dishes where tinned is not a compromise: tuna in olive oil has a texture brine-packed tuna cannot reach, and the oil in the tin is part of the dressing. Soaking the sliced onion in the lemon juice for ten minutes takes the raw burn out of it while it sits, so no separate step is needed.',
    ing: [
      '2 tins tuna in olive oil, about 145 g each, oil reserved',
      '400 g tin cannellini beans, drained and rinsed',
      '0.5 small red onion, very finely sliced',
      '3 tbsp lemon juice',
      '3 tbsp extra virgin olive oil',
      '1 tbsp red wine vinegar',
      '2 tbsp flat-leaf parsley, chopped',
      '1 tbsp capers, rinsed',
      '150 g cherry tomatoes, halved',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper',
      '# To serve',
      '2 handfuls rocket'
    ],
    st: [
      'Put the sliced onion in a bowl with the lemon juice and a pinch of the salt and leave it 10 minutes. It softens and turns pink.',
      'Drain the tuna, keeping a tablespoon of the oil.',
      'Add the reserved tuna oil, the olive oil, vinegar and the rest of the salt to the onion and whisk with a fork.',
      'Fold in the beans, capers and tomatoes and leave 5 minutes so the beans take on the dressing.',
      'Add the tuna in large flakes and fold once or twice only — worked any further it turns to paste.',
      'Fold through the parsley, taste for salt and acid, and serve over the rocket.'
    ],
    tips: [
      'Tuna in olive oil, not brine. It is the single decision that makes this dish worth eating.',
      'Rinse the beans properly. The starchy liquid in the tin dulls the dressing and makes everything taste faintly of tin.',
      'This is better after 20 minutes than straight away, and better still at room temperature than fridge-cold.'
    ],
    pair: ['A cold Vermentino', 'Grilled sourdough rubbed with garlic', 'A boiled egg, if you want it heavier'],
    store: 'Refrigerate up to 2 days. The rocket wilts, so add it only to the portion you are eating. Take it out 20 minutes before serving — cold flattens the olive oil.',
    nut: [486, 43, 38, 16, 11, 4, 780]
  },

  'tofu-edamame-stir-fry': {
    d: 'Firm tofu pressed, cornflour-crusted and fried hard, then tossed with edamame and greens in a garlic-ginger sauce. Vegan, and 42 g of protein a serving.',
    meta: 'Tofu and edamame stir-fry with garlic and ginger — a vegan bowl with 42 g of protein a serving.',
    kw: ['tofu edamame stir fry', 'high protein vegan', 'crispy tofu recipe', 'vegan muscle gain meal'],
    why: 'Tofu is bland because it is wet, not because it is tofu. Pressing out the water and coating it in cornflour gives a surface that actually crisps, and a crisp surface holds sauce instead of shedding it. Edamame is doing quiet work here: 200 g adds around 22 g of protein, which is what takes this from a decent vegetable dish to a serious one.',
    ing: [
      '# For the tofu',
      '400 g extra-firm tofu',
      '2 tbsp cornflour',
      '0.5 tsp fine sea salt',
      '3 tbsp neutral oil',
      '# For the stir-fry',
      '200 g frozen edamame, podded',
      '200 g tenderstem broccoli, halved lengthways',
      '4 spring onions, in 3 cm lengths',
      '4 garlic cloves, sliced',
      '20 g fresh ginger, julienned',
      '1 red chilli, sliced',
      '# For the sauce',
      '3 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1 tbsp toasted sesame oil',
      '1 tsp cornflour',
      '4 tbsp cold water'
    ],
    st: [
      'Wrap the tofu in a clean cloth, set a heavy pan on top and press it for 20 minutes. Pour away what comes out — it is a surprising amount.',
      'Cut the tofu into 2.5 cm cubes and toss with the cornflour and salt until every face is dusted.',
      'Whisk the sauce ingredients together in a small bowl and keep it beside the hob. Stir-frying leaves no time to measure.',
      'Heat 2 tablespoons of oil in a wok over high heat and fry the tofu in one layer for 6 to 8 minutes, turning every couple of minutes, until it is golden on most sides. Lift it out.',
      'Add the last tablespoon of oil and the broccoli and edamame, and stir-fry 3 minutes.',
      'Add the garlic, ginger and chilli and stir-fry 45 seconds, no longer — garlic burns and turns bitter fast at this heat.',
      'Pour in the sauce, stir until it thickens and glosses, about 30 seconds, then return the tofu and the spring onions and toss twice to coat.'
    ],
    tips: [
      'Extra-firm tofu only. Silken and firm both collapse, and no amount of technique saves them.',
      'Leave the tofu alone between turns. Moving it constantly is how the crust comes off in the pan.',
      'Everything must be cut and within reach before the wok goes on. This dish takes twelve minutes and none of them are spare.'
    ],
    pair: ['Steamed jasmine rice', 'A cold light beer', 'Cucumber salad with rice vinegar'],
    store: 'Refrigerate up to 3 days. The tofu loses its crust in the fridge and will not get it back; reheat hard in a dry pan rather than a microwave to recover some of it.',
    nut: [524, 42, 26, 26, 9, 6, 900]
  },

  'yogurt-marinated-chicken-skewers': {
    d: 'Chicken thigh marinated in yoghurt, lemon and oregano, then grilled hard until the edges char. The yoghurt does the tenderising, and each serving carries 42 g of protein.',
    meta: 'Yoghurt-marinated chicken skewers with lemon and oregano — 42 g of protein a serving, grilled hard.',
    kw: ['yogurt marinated chicken', 'greek chicken skewers', 'high protein dinner', 'souvlaki style chicken'],
    why: 'Yoghurt tenderises differently from an acid marinade. Lemon juice alone firms and then turns the surface of the meat chalky if left too long; the calcium and mild lactic acid in yoghurt work slowly and cannot overshoot in the same way, so an overnight marinade improves rather than ruins it. Thigh rather than breast because the extra fat survives a hard grill.',
    ing: [
      '# For the marinade',
      '800 g boneless chicken thighs, in 4 cm pieces',
      '250 g thick Greek yoghurt',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '4 garlic cloves, crushed',
      '2 tbsp dried oregano',
      '1 tsp sweet paprika',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To serve',
      '1 red onion, in wedges',
      '1 lemon, in wedges',
      '2 tbsp chopped flat-leaf parsley'
    ],
    st: [
      'Mix everything for the marinade in a bowl and turn the chicken through it until each piece is coated.',
      'Cover and refrigerate at least 2 hours, and up to 24. Longer is genuinely better here.',
      'If using wooden skewers, soak them in water for 30 minutes so they do not burn through.',
      'Thread the chicken onto skewers with the onion wedges between, leaving a little space between pieces so the heat reaches all sides.',
      'Heat a griddle pan or grill until properly hot. Wipe off the excess marinade as you lay each skewer down — clinging yoghurt burns rather than chars.',
      'Grill 12 to 15 minutes, turning every 3 to 4 minutes, until the thickest piece reads 75C and the edges are blackened in places.',
      'Rest 5 minutes, then scatter with parsley and serve with the lemon wedges.'
    ],
    tips: [
      'Thighs, not breast. Breast on a hot grill is dry before it is charred, and the char is the point.',
      'Wipe the marinade off before grilling. A thick coat steams the meat and then scorches, which tastes of neither.',
      'Space the pieces on the skewer. Packed tight they braise against each other and never colour.'
    ],
    pair: ['Flatbread and a sharp salad', 'A cold retsina or dry rosé', 'Tzatziki, if you want more yoghurt'],
    store: 'Refrigerate up to 3 days. The marinated raw chicken also freezes well for 2 months in its marinade, which makes this a good thing to prepare in bulk. Reheat gently or eat cold in a flatbread.',
    nut: [412, 42, 8, 22, 1, 5, 690]
  }
};
