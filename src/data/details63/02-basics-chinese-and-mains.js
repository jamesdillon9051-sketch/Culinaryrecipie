'use strict';

/**
 * Volume sixty-three, second part: the kitchen basics (ricotta, ghee, pastry,
 * egg pasta, hoisin), three Chinese-American stir-fries, the Canadian Caesar,
 * a pie, shellfish, ribs, a roast and the first British dishes. Waits of an
 * hour or more are declared as rest. Nutrition is computed from the
 * ingredient lists by npm run calc.
 */

module.exports = {
  'homemade-ricotta': {
    d: 'Fresh ricotta made from whole milk, cream and lemon juice: heated for 15 minutes until curds form, then drained into soft, sweet cheese.',
    meta: 'Homemade ricotta from milk, cream and lemon juice, heated for 15 minutes and drained. Makes about 300 g, plus draining.',
    kw: ['homemade ricotta', 'how to make ricotta', 'ricotta cheese from milk', 'fresh ricotta recipe', 'lemon ricotta'],
    why: `What is ricotta, really? Curds, drained. Heat milk until it is just short of boiling, add acid, and the proteins gather into soft white clouds that can be lifted out with a slotted spoon. That is the whole cheese.

Use whole milk and a little cream, and avoid ultra-pasteurised milk, which refuses to curdle properly. Heat gently, stirring now and then so the bottom does not catch, until small bubbles appear around the edge and a thermometer reads 90C. **Pour in the lemon juice, stir once and then stop.** Stirring after that breaks the curds into a grainy mass. Use fresh milk.

Leave the pot alone for ten minutes while the curds form, then ladle them into a sieve lined with muslin. Drain for fifteen minutes for a creamy ricotta, or longer for a firmer one. Use the cheese warm on toast, in lasagne or with honey, and keep the whey to use in bread dough or soup. Keep the whey too.`,
    ing: [
      '2 litres whole milk',
      '250 ml double cream',
      '60 ml lemon juice',
      '1/2 tsp salt'
    ],
    st: [
      'Pour the milk, cream and salt into a large heavy pot. Heat over a medium heat, stirring now and then, for 15 minutes until it reaches 90C and small bubbles break at the edge.',
      'Take the pot off the heat, pour in the lemon juice, stir once and leave undisturbed for 10 minutes until curds form.',
      'Line a sieve with muslin and set it over a bowl. Ladle in the curds gently and drain for 15 minutes.',
      'Serve warm, or chill in a covered dish.'
    ],
    tips: [
      'Avoid ultra-pasteurised milk; it does not curdle well.',
      'Stir once after adding the lemon, then leave the curds alone.',
      'Drain for longer for a firmer cheese to slice or crumble.'
    ],
    pair: ['Toast and honey', 'Lasagne', 'Fresh figs', 'Pasta'],
    store: 'Keeps for 4 days in a covered container in the fridge. Do not freeze.',
    rest: [15, 'Draining']
  },

  'homemade-ghee': {
    d: 'Butter simmered for 25 minutes until the water cooks off and the milk solids brown, then strained into clear golden ghee.',
    meta: 'Homemade ghee: butter simmered slowly for 25 minutes and strained into a clear golden fat. Makes about 20 spoonfuls.',
    kw: ['homemade ghee', 'how to make ghee', 'ghee from butter', 'clarified butter ghee', 'ghee recipe'],
    why: `Patience is the only skill needed. Ghee is butter cooked slowly until the water has evaporated and the milk solids have browned and settled, leaving a clear golden fat with a nutty smell and a high smoking point.

Use unsalted butter, cut into pieces so it melts evenly, and a heavy pan with room for it to foam. Over a low heat the butter melts, then crackles and froths as the water boils off. **Do not stir.** Let it simmer until the crackling quietens, the foam on top thins and the solids on the bottom turn the colour of toasted nuts.

Watch it closely in the last few minutes. The solids go from golden to burnt quickly, and once they smell sharp or turn dark brown the batch is spoiled. Cool for ten minutes, strain through muslin into a clean, dry jar and discard the solids. Any water left in the jar will spoil the ghee, so everything must be dry.`,
    ing: [
      '500 g unsalted butter, cut into cubes'
    ],
    st: [
      'Melt the butter in a heavy pan over a low heat.',
      'Simmer, without stirring, for 25 minutes. The butter will foam, crackle and then quieten as the water cooks off.',
      'When the foam thins, the liquid is clear gold and the solids at the bottom are light brown, take the pan off the heat.',
      'Cool for 10 minutes, then strain through muslin into a clean, dry jar. Discard the solids.'
    ],
    tips: [
      'Use a pan with high sides; the butter foams up.',
      'Stop as soon as the solids turn light brown; they burn in moments.',
      'Make sure the jar and any spoon are completely dry.'
    ],
    pair: ['Dal', 'Rice', 'Roti', 'Roast vegetables'],
    store: 'Keeps for 3 months in a sealed jar in the fridge. Use a dry spoon each time.'
  },

  'shortcrust-pastry': {
    d: 'A buttery, crumbly pastry rubbed together from flour, butter and cold water, rested for 30 minutes and baked blind for 20 minutes.',
    meta: 'Shortcrust pastry for pies and tarts, rubbed in by hand, chilled and baked blind for 20 minutes. Makes one 23 cm case.',
    kw: ['shortcrust pastry', 'homemade shortcrust pastry', 'shortcrust pastry recipe', 'butter shortcrust pastry', 'blind baked pastry case'],
    why: `Keep everything cold. That is the single instruction that matters, because shortcrust gets its crumbly bite from small pieces of butter that stay solid until they reach the oven, where they melt and leave tiny pockets.

Rub the cold butter into the flour with the tips of the fingers, lifting the mixture to let air in, until it looks like fine breadcrumbs. Warm hands melt the butter, so work quickly or use a food processor. **Add the water a spoonful at a time** and stop as soon as the mixture comes together. Too much water makes a tough, shrunken case.

Wrap the dough and rest it for 30 minutes. This relaxes the gluten and stops the pastry pulling back in the oven. Roll it thinly, line the tin, prick the base and chill again. Bake blind with baking beans until pale gold, then remove the paper and beans and bake a few minutes more to dry the base. Chill, then bake.`,
    ing: [
      '250 g plain flour',
      '1/2 tsp salt',
      '125 g cold butter, cubed',
      '4 tbsp cold water',
      '1 egg, beaten, for brushing'
    ],
    st: [
      'Rub the butter into the flour and salt with your fingertips for 5 minutes until the mixture looks like fine breadcrumbs.',
      'Add the cold water a spoonful at a time and mix to a dough. Wrap and rest in the fridge for 30 minutes.',
      'Heat the oven to 190C. Roll out the dough and line a 23 cm tin. Prick the base and chill for 10 minutes.',
      'Line with paper and baking beans and bake for 15 minutes. Remove the paper and beans, brush with egg and bake for 5 minutes more until pale gold.'
    ],
    tips: [
      'Add the water gradually; the dough should be just damp.',
      'Chill the lined tin before baking so the sides hold their shape.',
      'Patch any crack in the baked case with a little raw dough.'
    ],
    pair: ['Quiche', 'Fruit tarts', 'Meat pies', 'Custard tart'],
    store: 'Wrap the raw dough and keep for 2 days in the fridge, or freeze for 3 months. The baked case keeps for 2 days.',
    rest: [30, 'Chilling']
  },

  'fresh-egg-pasta': {
    d: 'Silky pasta dough made from flour and eggs, kneaded, rested for 30 minutes, rolled thin and cut; it cooks in 3 minutes.',
    meta: 'Fresh egg pasta from flour and eggs, rested for 30 minutes and cooked for 3 minutes. Four servings, plus resting.',
    kw: ['fresh egg pasta', 'homemade egg pasta', 'fresh pasta dough', 'how to make fresh pasta', 'egg pasta dough recipe'],
    why: `Flour, eggs and a little patience: that is the entire ingredient list, and the quality depends on how the dough is treated. Egg pasta is richer and silkier than the dried kind, and it cooks in minutes. Resist adding more flour.

Make a mound of flour on the counter with a well in the middle. Break the eggs into the well and whisk them gently with a fork, drawing in flour from the sides until the mixture is too stiff to stir. Then use your hands. **Knead for ten minutes**, until the dough is smooth, firm and springs back, with no dry flecks. It will feel stiff at first; that is correct.

Wrap and rest for 30 minutes so the gluten relaxes and the dough rolls without fighting back. Roll it thin enough to see your hand faintly through the sheet, dust with flour and fold or roll up before cutting into ribbons. Cook in plenty of boiling salted water until it floats and tastes tender, which takes just minutes. Taste a strand to check.`,
    ing: [
      '300 g 00 flour',
      '3 eggs',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '2 tbsp semolina flour, for dusting'
    ],
    st: [
      'Tip the flour onto a clean counter and make a well. Add the eggs, oil and salt and whisk with a fork, drawing in flour from the sides.',
      'Bring the dough together by hand and knead for 10 minutes until smooth and elastic.',
      'Wrap in cling film and rest at room temperature for 30 minutes.',
      'Roll the dough out thinly, dust with semolina, and cut into ribbons about 6 mm wide.',
      'Cook in a large pot of boiling salted water for 3 minutes. Drain and sauce at once.'
    ],
    tips: [
      'If the dough is too dry to come together, wet your hands rather than adding water.',
      'Rest the dough before rolling; it will be easier to stretch.',
      'Cook in a lot of water so the ribbons do not stick.'
    ],
    pair: ['Bolognese', 'Butter and sage', 'Pesto', 'Tomato sauce'],
    store: 'Best on the day. Dry nests on a floured tray and keep for 2 days in the fridge, or freeze for 1 month.',
    rest: [30, 'Resting']
  },

  'hoisin-sauce': {
    d: 'A thick, sweet and salty Chinese sauce of soy, peanut butter, molasses, vinegar and garlic, simmered for 10 minutes.',
    meta: 'Hoisin sauce made from soy sauce, peanut butter, molasses and garlic, simmered for 10 minutes. Makes about 240 ml.',
    kw: ['hoisin sauce', 'homemade hoisin sauce', 'hoisin sauce recipe', 'hoisin sauce from scratch', 'chinese hoisin sauce'],
    why: `A jar of hoisin sauce costs little, so why make it? Because the homemade version can be tasted and adjusted: more garlic, more vinegar, less sugar, and none of the preservatives found in many bottles. It takes ten minutes and uses things already in most kitchens. Nothing about it is hard.

The base is soy sauce for salt, molasses for dark sweetness and peanut butter for body. Rice vinegar adds sharpness, garlic and five-spice add warmth, and a little sesame oil gives the roasted note people recognise. **Whisk everything cold before the pan goes on the heat.** Peanut butter is stubborn, and lumps are far easier to remove before the sauce is hot. Whisk first, then heat.

Simmer gently, stirring, until the sauce is thick enough to coat the back of a spoon. It thickens more as it cools, so stop just before it looks right. Use it as a glaze, a dipping sauce, a stir-fry base or a spread for Peking duck pancakes. A little goes far.`,
    ing: [
      '80 ml soy sauce',
      '60 g smooth peanut butter',
      '60 ml molasses',
      '2 tbsp rice vinegar',
      '1 tbsp toasted sesame oil',
      '2 garlic cloves, crushed',
      '1/2 tsp Chinese five-spice',
      '1/4 tsp black pepper',
      '1 tsp chilli flakes'
    ],
    st: [
      'Whisk the soy sauce, peanut butter, molasses, vinegar, sesame oil, garlic, five-spice, pepper and chilli in a small pan until smooth.',
      'Bring to a gentle simmer over a medium-low heat and cook for 10 minutes, stirring, until thick and glossy.',
      'Cool and pour into a clean jar.'
    ],
    tips: [
      'Whisk the ingredients smooth before heating.',
      'The sauce thickens as it cools, so take it off the heat while still pourable.',
      'Thin with a splash of water if it sets too firmly in the fridge.'
    ],
    pair: ['Peking duck pancakes', 'Stir-fries', 'Grilled pork ribs', 'Spring rolls'],
    store: 'Keeps for 2 weeks in a sealed jar in the fridge.'
  },

  'moo-shu-pork': {
    d: 'Thin pork strips stir-fried for 15 minutes with cabbage, mushrooms, egg and hoisin, then rolled into warm pancakes.',
    meta: 'Moo shu pork: pork, cabbage, mushrooms and egg stir-fried with hoisin and rolled in pancakes. Four servings.',
    kw: ['moo shu pork', 'moo shu pork recipe', 'mu shu pork', 'pork stir fry with pancakes', 'moo shu pork with hoisin'],
    why: `Why does moo shu come with pancakes? Because the filling is a dry, quick stir-fry meant to be wrapped, not a saucy dish for rice. The mixture of pork, cabbage, mushrooms and egg is cooked fast and kept fairly dry, so it stays inside the roll.

Slice everything thin and similar in size; that is the real work. Marinate the pork briefly in soy sauce, cornflour and a splash of rice wine. Scramble the eggs first and set them aside. **Cook in stages**, pork first, then the vegetables, so each is browned rather than steamed, and the eggs go back at the end.

Warm the pancakes in a steamer or covered in the microwave until soft and pliable. Spread each with hoisin sauce, spoon in the filling and fold up the bottom before rolling. Fillings that are even a little wet will break the pancake, so let any excess liquid cook off. Warm pancakes tear less.`,
    ing: [
      '350 g pork loin, sliced into thin strips',
      '2 tbsp soy sauce',
      '1 tbsp cornflour',
      '1 tbsp rice wine',
      '3 eggs, beaten',
      '3 tbsp vegetable oil',
      '300 g white cabbage, finely shredded',
      '150 g shiitake mushrooms, sliced',
      '3 spring onions, sliced',
      '2 garlic cloves, crushed',
      '3 tbsp hoisin sauce',
      '8 thin flour tortillas or Chinese pancakes, warmed'
    ],
    st: [
      'Mix the pork with 1 tablespoon of the soy sauce, the cornflour and the rice wine.',
      'Heat 1 tablespoon of the oil in a wok. Scramble the eggs for 1 minute until just set. Remove.',
      'Add 1 tablespoon of oil and stir-fry the pork for 3 minutes until browned. Remove.',
      'Add the rest of the oil and stir-fry the cabbage, mushrooms, spring onions and garlic for 6 minutes.',
      'Return the pork and eggs with the remaining soy sauce and 1 tablespoon of hoisin. Toss for 2 minutes.',
      'Spread each pancake with the remaining hoisin, fill with the pork mixture and roll up.'
    ],
    tips: [
      'Cut the vegetables thin so they cook quickly.',
      'Do not overfill the pancakes; they tear.',
      'Cook in stages so nothing stews in its own juices.'
    ],
    pair: ['Extra hoisin sauce', 'Cucumber strips', 'Spring onions', 'Hot and sour soup'],
    store: 'Keeps the filling for 3 days in the fridge. Assemble the pancakes fresh.'
  },

  'kung-pao-shrimp': {
    d: 'Prawns stir-fried for 10 minutes with dried chillies, peanuts and a sweet, sour and peppery sauce, ready in 25 minutes.',
    meta: 'Kung pao shrimp: prawns, peanuts and dried chillies in a tangy, spicy sauce, stir-fried fast. Four servings, ready in 25 minutes.',
    kw: ['kung pao shrimp', 'kung pao shrimp recipe', 'kung pao prawns', 'szechuan shrimp with peanuts', 'spicy peanut shrimp stir fry'],
    why: `Get the wok very hot before anything goes in. Kung pao is a stir-fry of contrasts: sweet and sour, hot and numbing, soft prawns and crunchy peanuts. A pan that is merely warm will steam the prawns and turn the sauce to soup. Heat is the secret.

Mix the sauce first, in a small bowl, because there is no time to measure once the wok is hot. It is soy sauce, black vinegar, sugar and cornflour, which thickens the sauce so it clings. Toss the prawns in a little cornflour and soy sauce so they stay juicy. **Fry the dried chillies and peppercorns in the oil for just a few seconds**, until fragrant; they blacken and turn bitter fast. Everything is ready beforehand.

Then in go the prawns, which need only a couple of minutes on each side, the aromatics, the sauce and the peanuts last, so they stay crisp. Serve at once with rice, while the sauce is glossy. Rice soaks up the sauce.`,
    ing: [
      '500 g raw king prawns, peeled',
      '1 tbsp cornflour',
      '3 tbsp soy sauce',
      '2 tbsp Chinese black vinegar',
      '1 tbsp sugar',
      '1 tsp cornflour, extra',
      '3 tbsp vegetable oil',
      '8 dried red chillies',
      '1 tsp Sichuan peppercorns',
      '3 garlic cloves, sliced',
      '1 tbsp grated fresh ginger',
      '4 spring onions, cut into 3 cm lengths',
      '80 g roasted peanuts'
    ],
    st: [
      'Toss the prawns with the 1 tablespoon cornflour and 1 tablespoon of the soy sauce. Mix the remaining soy sauce, vinegar, sugar and 1 teaspoon cornflour in a small bowl.',
      'Heat the oil in a wok over a high heat. Fry the chillies and peppercorns for 20 seconds until fragrant.',
      'Add the prawns and fry for 3 minutes, turning, until pink.',
      'Add the garlic, ginger and spring onions and stir-fry for 1 minute. Pour in the sauce and cook for 1 minute until glossy.',
      'Toss in the peanuts and serve at once.'
    ],
    tips: [
      'Mix the sauce before heating the wok.',
      'Do not leave the chillies in the hot oil for more than a few seconds.',
      'Cook the prawns only until pink; they turn rubbery when overdone.'
    ],
    pair: ['Steamed rice', 'Stir-fried greens', 'Cucumber salad', 'Egg fried rice'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge; reheat quickly.'
  },

  'szechuan-beef': {
    d: 'Thin strips of beef stir-fried for 15 minutes with chilli bean paste, celery, carrot and Sichuan pepper in a spicy, numbing sauce.',
    meta: 'Szechuan beef: sliced steak stir-fried with chilli bean paste, celery and Sichuan pepper. Four servings, ready in 30 minutes.',
    kw: ['szechuan beef', 'szechuan beef stir fry', 'sichuan beef recipe', 'spicy beef with chilli bean paste', 'szechuan beef with celery'],
    why: `Szechuan beef sits beside the better known Kung Pao in many Chinese-American menus, and it is the beef version of the same hot and numbing flavours. Where Kung Pao is sweet and sour, this is darker and deeper, built on fermented chilli bean paste, soy sauce and Sichuan pepper. Dark, deep and tingling.

Slice the steak thin, across the grain, and freeze it for twenty minutes before slicing if it is hard to cut cleanly. Thin pieces cook in seconds and stay tender. **Coat the beef in cornflour and a little oil** so it fries without clumping and holds the sauce when it goes in the wok.

Fry the beef in two batches over a very high heat; a crowded pan steams, and steamed beef is grey and chewy. Then fry the celery and carrot, add the chilli bean paste, garlic and ginger, and return the beef with the sauce. The pepper gives a tingling warmth rather than pure heat, so adjust the quantity to taste. Taste the pepper first.`,
    ing: [
      '500 g flank steak, sliced thinly against the grain',
      '1 tbsp cornflour',
      '3 tbsp vegetable oil',
      '2 tbsp chilli bean paste',
      '1 tbsp soy sauce',
      '1 tbsp rice wine',
      '1 tsp sugar',
      '1 tsp ground Sichuan pepper',
      '3 celery sticks, sliced thin',
      '2 carrots, cut into matchsticks',
      '3 garlic cloves, sliced',
      '1 tbsp grated fresh ginger',
      '4 spring onions, sliced'
    ],
    st: [
      'Toss the beef with the cornflour and 1 tablespoon of the oil. Mix the soy sauce, wine and sugar in a small bowl.',
      'Heat 1 tablespoon of oil in a wok until smoking. Fry the beef in 2 batches for 2 minutes each, until browned. Remove.',
      'Add the remaining oil and stir-fry the celery and carrots for 3 minutes.',
      'Add the chilli bean paste, garlic and ginger and fry for 30 seconds.',
      'Return the beef, add the sauce and Sichuan pepper and toss for 2 minutes. Scatter with spring onions.'
    ],
    tips: [
      'Slice against the grain for tender beef.',
      'Cook the beef in batches so it browns.',
      'Add the Sichuan pepper at the end for the strongest tingle.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Stir-fried bok choy', 'Egg noodles'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot pan.'
  },

  'caesar-cocktail': {
    d: 'A Canadian drink of vodka, clam and tomato juice, hot sauce and Worcestershire, served over ice in a celery-salt-rimmed glass.',
    meta: 'Caesar cocktail: vodka, clam tomato juice, hot sauce and lime over ice in a celery-salt-rimmed glass. One serving.',
    kw: ['caesar cocktail', 'canadian caesar', 'caesar drink recipe', 'bloody caesar', 'caesar with clamato'],
    why: `Most Caesars go wrong before the first sip, at the rim. A good one starts with a glass edged in celery salt, and the salt has to stay on the glass, not slide into the drink or fall off in a pile. The rim comes first.

Run a lime wedge around the outside of the rim only, so the juice does not drip inside, then dip the glass into a saucer of celery salt, turning it. **Fill the glass with ice before pouring**; the salt stays put and the drink stays cold to the last mouthful. Build it in the glass: vodka, a little hot sauce and Worcestershire sauce, a squeeze of lime, and the clam tomato juice poured over. Chill the glass too.

Stir gently with a stick of celery, which doubles as a garnish. The recipe is easy to tune: more hot sauce and horseradish for heat, more lime for sharpness. Mix the seasonings in a jug if making several, and add the ice and vodka glass by glass. Garnish and serve.`,
    ing: [
      '1 lime wedge',
      '1 tsp celery salt, for the rim',
      '45 ml vodka',
      '150 ml clam and tomato juice',
      '1 tsp Worcestershire sauce',
      '1 tsp hot sauce',
      '1 tsp lime juice',
      '1/4 tsp prepared horseradish',
      '1 celery stick',
      'ice'
    ],
    st: [
      'Run the lime wedge around the outer rim of a tall glass. Dip the rim in the celery salt.',
      'Fill the glass with ice. Add the vodka, Worcestershire sauce, hot sauce, lime juice and horseradish.',
      'Top with the clam and tomato juice and stir gently.',
      'Garnish with the celery stick and the lime wedge.'
    ],
    tips: [
      'Wet only the outside of the rim so the salt stays out of the drink.',
      'Chill the juice beforehand for a colder drink.',
      'Adjust the hot sauce and horseradish to taste.'
    ],
    pair: ['Brunch dishes', 'Oysters', 'Bacon', 'Smoked salmon'],
    store: 'Best served at once. A jug of the juice and seasoning mix keeps for 2 days in the fridge; add the vodka and ice when serving.'
  },

  'leek-and-potato-pie': {
    d: 'A vegetarian pie of leeks, potatoes and mustard cream cheese under puff pastry, baked for 45 minutes until golden.',
    meta: 'Leek and potato pie: tender leeks and potatoes in a creamy mustard sauce under puff pastry. Six servings, baked for 45 minutes.',
    kw: ['leek and potato pie', 'leek and potato pie recipe', 'vegetarian leek pie', 'leek and potato puff pastry pie', 'creamy leek and potato bake'],
    why: `The first cold week of the year is the moment for a pie like this one, when the leeks look good at the market and the oven becomes the warmest room in the house. A leek and potato pie is the sort of dish that makes a meatless dinner feel substantial. Leeks reward patience.

Cook the potatoes first, in salted water, just until a knife slips in easily; they carry on softening in the oven, so stop short of soft. Slice the leeks and soften them in butter until sweet and limp. **Drain the leeks well**, because water from the filling turns the pastry base soggy. Stir the leeks and potatoes into a sauce of cream, mustard and cheddar, and let it cool a little. Cool the filling first.

A hot filling under cold pastry melts the butter before it can puff. Fill the dish, cover with the puff pastry, crimp the edge and brush with egg. Bake until the lid is deep gold and the filling bubbles at the sides. Rest before slicing.`,
    ing: [
      '600 g waxy potatoes, cut into 2 cm chunks',
      '40 g butter',
      '4 large leeks (about 700 g), sliced',
      '2 garlic cloves, crushed',
      '200 ml double cream',
      '1 tbsp wholegrain mustard',
      '100 g grated mature cheddar',
      '1 tbsp chopped thyme',
      '375 g ready-rolled puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Boil the potatoes in salted water for 8 minutes until just tender. Drain.',
      'Melt the butter in a large pan and cook the leeks for 10 minutes until soft. Add the garlic for 1 minute. Drain off any liquid.',
      'Stir in the cream, mustard, cheddar and thyme, then the potatoes. Season and cool for 10 minutes.',
      'Heat the oven to 200C. Tip the filling into a 1.5 litre pie dish, cover with the pastry, trim, crimp and brush with egg.',
      'Bake for 45 minutes until the pastry is deep golden and the filling bubbles.'
    ],
    tips: [
      'Undercook the potatoes slightly; they finish in the oven.',
      'Cool the filling a little before covering with pastry.',
      'Cut a small steam hole in the lid to stop it going soggy.'
    ],
    pair: ['Green beans', 'Buttered peas', 'Pickled red cabbage', 'Mustard'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven until hot all through. Freeze baked for 2 months.'
  },

  'broiled-lobster-tail': {
    d: 'Split lobster tails brushed with garlic and lemon butter and broiled for 10 minutes until the meat turns opaque and just firm.',
    meta: 'Broiled lobster tail with garlic lemon butter, cooked for 10 minutes under the grill. Two servings.',
    kw: ['broiled lobster tail', 'broiled lobster tail recipe', 'grilled lobster tails with garlic butter', 'lobster tails with lemon butter', 'how to cook lobster tails'],
    why: `Pull the meat up over the shell before it goes under the heat. Splitting a lobster tail and lifting the flesh onto the top of the shell is the one piece of work in this recipe, and it makes the tail look like a restaurant dish while letting the butter reach the meat. Presentation helps.

Thaw frozen tails overnight in the fridge. Cut along the top of the shell with kitchen scissors, stopping at the tail fan, and slide a finger between the meat and shell to loosen it. Lift the meat out, leaving it attached at the base, and rest it on top. **Brush it generously with garlic butter**, which both seasons the lobster and protects it from drying.

Broil on a rack set about 15 cm below the heat. The meat is cooked when it turns white and opaque and reads 63C at the thickest part. Overcooked lobster is rubbery, so watch the clock and check early. Serve with the remaining butter for dipping and lemon for squeezing. Dip in the butter.`,
    ing: [
      '2 lobster tails (about 200 g each), thawed',
      '60 g butter, melted',
      '2 garlic cloves, crushed',
      '1 tbsp lemon juice',
      '1/2 tsp paprika',
      '1/4 tsp salt',
      '1 tbsp chopped parsley',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the grill to high with the rack 15 cm below the heat. Mix the butter, garlic, lemon juice, paprika and salt.',
      'Cut along the top of each lobster shell with scissors. Loosen the meat and lift it over the shell, keeping it attached at the base.',
      'Place the tails on a tray and brush the meat with half the butter.',
      'Broil for 8 to 10 minutes, basting once, until the meat is opaque and 63C in the thickest part.',
      'Scatter with parsley and serve with the remaining butter and the lemon wedges.'
    ],
    tips: [
      'Check at 8 minutes; lobster overcooks quickly.',
      'Thaw tails slowly in the fridge, not in warm water.',
      'Use the thermometer in the thickest part of the meat.'
    ],
    pair: ['Lemon wedges', 'Steamed asparagus', 'Baked potato', 'Champagne'],
    store: 'Best eaten at once. Cooked lobster keeps for 2 days in the fridge.'
  },

  'mussels-in-white-wine': {
    d: 'Fresh mussels steamed for 10 minutes in white wine, shallots, garlic and parsley until they open, served with the broth and crusty bread.',
    meta: 'Mussels in white wine: shallots, garlic and parsley in a quick broth, steamed for 10 minutes. Two servings.',
    kw: ['mussels in white wine', 'mussels in white wine recipe', 'moules marinieres', 'mussels with garlic and wine', 'mussels with shallots'],
    why: `Buy them alive and cook them the same day. That is the safest and tastiest way to enjoy mussels, which are about the quickest shellfish dinner there is: ten minutes from the hob to the table, with a broth that only needs bread. Freshness is everything.

Scrub the mussels under cold water and pull away any beard. Tap any that are open; if they do not close, throw them away. **Discard any that stay shut after cooking** as well, because those did not open in the steam. Soften shallots and garlic in butter, pour in the white wine and bring it to a boil to cook off the harshness, then tip in the mussels and cover. Steam does the cooking.

Shake the pan once or twice and look after about five minutes: the shells should be wide open. Take the pot off the heat, stir in the parsley and a splash of cream if wanted, and serve straight from the pan. The broth is the best part, so have bread ready for it. Do not skip the bread.`,
    ing: [
      '1 kg fresh mussels, scrubbed and debearded',
      '30 g butter',
      '2 shallots, finely chopped',
      '3 garlic cloves, sliced',
      '200 ml dry white wine',
      '2 tbsp chopped parsley',
      '1/4 tsp black pepper',
      '1 lemon, cut into wedges',
      '4 slices crusty bread, to serve'
    ],
    st: [
      'Rinse the mussels and discard any with cracked shells or any open ones that do not close when tapped.',
      'Melt the butter in a large lidded pot and soften the shallots and garlic for 3 minutes.',
      'Pour in the wine and boil for 2 minutes. Tip in the mussels, cover and cook for 5 minutes, shaking the pot now and then, until the shells open.',
      'Discard any that remain shut. Stir in the parsley and pepper and serve in bowls with the broth, lemon and bread.'
    ],
    tips: [
      'Cook mussels the day they are bought.',
      'Do not force open any shell that stays shut after cooking; discard it.',
      'Use a wine you would drink; the flavour carries into the broth.'
    ],
    pair: ['Crusty bread', 'Chips', 'Green salad', 'Dry white wine'],
    store: 'Best eaten at once. Do not keep or reheat cooked mussels.'
  },

  'honey-garlic-ribs': {
    d: 'Pork back ribs baked low for 2 hours, then glazed with a sweet honey and garlic sauce and finished under a hot grill.',
    meta: 'Honey garlic ribs: pork ribs baked tender for 2 hours, then glazed in a sticky honey garlic sauce. Four servings.',
    kw: ['honey garlic ribs', 'honey garlic ribs recipe', 'oven baked honey garlic ribs', 'sticky honey garlic pork ribs', 'honey garlic pork ribs'],
    why: `The ribs are not cooked in the sauce. They are cooked in foil, first, in a low oven until the meat is nearly falling off the bone, and the sauce is added only for the final blast of heat. Sugar burns, and honey burns faster than most, so a long bake in sauce would blacken it.

Remove the thin membrane from the back of each rack by working a knife under it and pulling it away with a paper towel; it does not soften and keeps the rub out. Season well, wrap tight in foil and bake low for two hours. **Open the foil carefully**, because the steam is hot and the juices are good for thinning the sauce. Steam escapes fast.

Simmer honey, soy sauce, garlic, ketchup and vinegar until slightly thickened. Brush the ribs, return them to a hot oven on a rack or tray, and glaze and turn them until sticky and lightly charred at the edges. Cut between the bones and serve with extra sauce. A bowl of napkins helps.`,
    ing: [
      '1.5 kg pork back ribs (2 racks)',
      '1 tsp salt',
      '1 tsp black pepper',
      '1 tsp garlic powder',
      '120 g honey',
      '60 ml soy sauce',
      '4 garlic cloves, crushed',
      '60 g ketchup',
      '2 tbsp cider vinegar',
      '1 tbsp cornflour',
      '1 tbsp water'
    ],
    st: [
      'Heat the oven to 150C. Pull the membrane off the back of the ribs. Rub with the salt, pepper and garlic powder and wrap each rack tightly in foil.',
      'Bake for 2 hours until the meat has pulled back from the bones.',
      'Meanwhile, simmer the honey, soy sauce, garlic, ketchup and vinegar for 3 minutes. Stir the cornflour into the water and add; cook for 2 minutes until glossy.',
      'Heat the oven to 220C. Unwrap the ribs onto a lined tray, brush with the sauce and bake for 15 minutes, basting once, until sticky.',
      'Cut into portions and serve with any extra sauce.'
    ],
    tips: [
      'Remove the membrane for more tender meat.',
      'Add the glaze only for the last 15 minutes so the honey does not burn.',
      'Baste the ribs once or twice for a thick coat.'
    ],
    pair: ['Steamed rice', 'Coleslaw', 'Corn on the cob', 'Baked potatoes'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months. Reheat in a covered dish.'
  },

  'chateaubriand': {
    d: 'The centre cut of a beef fillet seared, roasted for 25 minutes and carved into thick slices, with a quick red wine and shallot sauce.',
    meta: 'Chateaubriand: roast centre-cut beef fillet with a red wine and shallot sauce. Four servings, ready in 50 minutes.',
    kw: ['chateaubriand', 'chateaubriand recipe', 'roast beef fillet', 'chateaubriand with red wine sauce', 'beef tenderloin roast'],
    why: `Chateaubriand is the thick centre cut of the beef fillet, the most tender part of the animal, and the cut is expensive enough that it needs to be cooked with care. It is for the table where dinner is an occasion, and it takes about as long as a weeknight pasta. Treat it with care.

Take the beef out of the fridge a short time before cooking so it is not stone cold in the middle, and dry the surface well with kitchen paper. A wet surface will steam rather than sear. **Season boldly and sear hard in a very hot pan**, turning until every side is deeply browned, then roast until a thermometer reads 52C in the centre for medium-rare.

Rest the meat for ten minutes under foil while the sauce comes together in the same pan: shallots, red wine, stock and a knob of cold butter swirled in at the end for gloss. Carve into thick slices across the grain and spoon the sauce over each. Slice across the grain.`,
    ing: [
      '800 g beef tenderloin (fillet), centre cut, trimmed',
      '1 tbsp olive oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 shallots, finely chopped',
      '200 ml red wine',
      '200 ml beef stock',
      '30 g cold butter, cubed',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200C. Pat the beef dry and rub with the oil, salt and pepper.',
      'Sear the beef in a hot ovenproof pan for 8 minutes, turning, until browned all over.',
      'Roast for 25 minutes until a thermometer reads 52C in the centre. Lift out, cover with foil and rest for 10 minutes.',
      'Soften the shallots in the pan for 2 minutes. Add the wine and stock and boil for 8 minutes until reduced by half.',
      'Off the heat, swirl in the butter. Slice the beef thickly, spoon over the sauce and scatter with parsley.'
    ],
    tips: [
      'Use a thermometer; the difference between rare and well done is a few degrees.',
      'Rest the beef for the full 10 minutes so the juices stay in the meat.',
      'Add the butter off the heat so the sauce does not split.'
    ],
    pair: ['Dauphinoise potatoes', 'Green beans', 'Roasted carrots', 'Red wine'],
    store: 'Best eaten at once. Leftover beef keeps for 3 days in the fridge and is good cold, sliced thin.'
  },

  'chicken-and-broccoli-bake': {
    d: 'Chicken breast and broccoli in a creamy cheddar sauce, baked for 25 minutes until bubbling, with a crisp breadcrumb topping.',
    meta: 'Chicken and broccoli bake in a cheddar sauce with a breadcrumb crust, baked for 25 minutes. Four servings.',
    kw: ['chicken and broccoli bake', 'chicken and broccoli bake recipe', 'cheesy chicken broccoli casserole', 'chicken broccoli cheese bake', 'creamy chicken and broccoli'],
    why: `Chicken and broccoli, brought together under a blanket of cheese: that is what to make on a night when everyone is hungry and nobody wants to wash many pans. The sauce is made on the hob in one pot and the bake finishes in the oven. One pot makes the sauce.

Cut the chicken into bite-sized pieces so it cooks through in the time the bake takes. Blanch the broccoli for two minutes only; it finishes in the oven, and a fully cooked floret turns grey and soft. **Make the sauce thick**, as the vegetables release water in the oven and thin it. A roux of butter and flour with milk, mustard and plenty of cheddar does the job. Blanch briefly.

Mix everything in a baking dish and scatter breadcrumbs mixed with a little melted butter over the top. Bake until the sauce bubbles at the edges and the crumbs are golden. Check that the chicken is white all the way through before serving. A green salad balances it.`,
    ing: [
      '500 g chicken breast, in 2 cm pieces',
      '400 g broccoli florets',
      '40 g butter',
      '40 g plain flour',
      '450 ml whole milk',
      '1 tsp Dijon mustard',
      '150 g grated mature cheddar',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '50 g breadcrumbs',
      '15 g butter, melted, for the topping'
    ],
    st: [
      'Heat the oven to 200C. Boil the broccoli for 2 minutes, drain and refresh in cold water.',
      'Melt the 40 g butter in a pan, stir in the flour for 1 minute, then add the milk slowly, whisking. Simmer for 5 minutes until thick.',
      'Off the heat, stir in the mustard, 100 g of the cheddar, the salt and pepper.',
      'Mix the chicken, broccoli and sauce in a 2 litre dish. Mix the breadcrumbs with the melted butter and the rest of the cheese and scatter over.',
      'Bake for 25 minutes until bubbling, golden and the chicken is white throughout.'
    ],
    tips: [
      'Blanch the broccoli briefly so it does not overcook in the oven.',
      'Make the sauce thick; the vegetables thin it as they bake.',
      'Cut the chicken into even pieces so it cooks at the same pace.'
    ],
    pair: ['Rice', 'Garlic bread', 'Green salad', 'Roasted tomatoes'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months. Reheat until piping hot.'
  },

  'apple-walnut-salad': {
    d: 'Crisp apples, celery, toasted walnuts and salad leaves tossed with a cider and mustard dressing; ready in 13 minutes.',
    meta: 'Apple walnut salad with crisp apples, celery and toasted walnuts in a cider mustard dressing. Four servings, ready in 13 minutes.',
    kw: ['apple walnut salad', 'apple and walnut salad recipe', 'apple salad with cider dressing', 'crunchy apple salad', 'walnut and celery salad'],
    why: `Crunch is the point. This salad has crisp apple, celery and toasted walnuts, all of which hold their texture in a dressing, so it can be made ahead and still taste fresh. It is a good side for roast pork or cold cuts.

Choose firm, tart apples that stay crisp: Granny Smith, Braeburn or Cox. Slice them thin, and toss them at once in a spoonful of the dressing so they do not brown. **Toast the walnuts in a dry pan** for a few minutes, shaking constantly, until fragrant; this takes away their slight bitterness and keeps them crunchy. Dress it late.

The dressing is cider vinegar, mustard, a touch of honey and olive oil, shaken in a jar until it thickens. Put the leaves in a wide bowl, add the apples and celery, then scatter the walnuts over the top just before serving, so they do not soften. Nuts go on last.`,
    ing: [
      '2 crisp apples, cored and sliced thin',
      '3 celery sticks, sliced thin',
      '80 g walnut halves',
      '100 g mixed salad leaves',
      '3 tbsp olive oil',
      '2 tbsp cider vinegar',
      '1 tsp Dijon mustard',
      '1 tsp honey',
      '1/4 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Toast the walnuts in a dry pan over a medium heat for 3 minutes, shaking often. Tip onto a plate to cool.',
      'Shake the oil, vinegar, mustard, honey, salt and pepper in a jar until thick.',
      'Toss the apples and celery in 1 tablespoon of the dressing.',
      'Put the leaves in a wide bowl, add the apples and celery, toss with the rest of the dressing and scatter the walnuts over.'
    ],
    tips: [
      'Slice the apples last, and toss them in dressing right away.',
      'Watch the walnuts in the pan; they burn in seconds.',
      'Add the nuts at the table so they stay crisp.'
    ],
    pair: ['Roast pork', 'Cheddar', 'Cold ham', 'Baked potatoes'],
    store: 'Best eaten at once. The dressed apples and celery keep for 1 day in the fridge; add the leaves and nuts when serving.'
  },

  'arbroath-smokie': {
    d: 'A hot-smoked haddock pair warmed for 10 minutes in the oven with butter, pulled from the bone and eaten with brown bread.',
    meta: 'Arbroath smokie: hot-smoked haddock warmed in foil with butter for 10 minutes. Two servings.',
    kw: ['arbroath smokie', 'arbroath smokies recipe', 'hot smoked haddock', 'scottish smoked haddock with butter', 'how to cook arbroath smokies'],
    why: `Do nothing to it. A smokie is a haddock that has been salted, tied in pairs and hot-smoked until the skin is dark copper and the flesh is cooked, so the work is done before it reaches the kitchen. The job is to warm it through gently and leave the flavour alone.

Wrap the pair in foil with a knob of butter and warm it in a hot oven for about ten minutes, until it is hot and the butter has melted into the flesh. **Open the foil away from the face**, because steam rises quickly. Pull the fish away from the backbone in two fillets; the meat should come away easily, with some pale butter-soaked flakes. Mind the steam.

Serve it as it comes with brown bread and butter and a squeeze of lemon, or with a poached egg on top. It also makes a good base for a creamy fish soup or a warm tart, where the smoke carries through everything else. Keep the sides plain.`,
    ing: [
      '500 g smoked haddock (2 pairs of Arbroath smokies)',
      '40 g butter',
      '1 lemon, cut into wedges',
      '4 slices brown bread',
      '1 tbsp chopped parsley',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200C. Split each pair and lay each smokie on a sheet of foil with a quarter of the butter on top.',
      'Fold the foil into loose parcels and bake for 10 minutes until hot through.',
      'Open the parcels carefully. Lift the flesh off the bones and spoon over the melted butter.',
      'Scatter with parsley and pepper and serve with lemon and brown bread.'
    ],
    tips: [
      'Warm the fish gently; it is already cooked, and more heat only dries it.',
      'Check for small bones as you lift the fillets.',
      'Serve with plain brown bread and butter.'
    ],
    pair: ['Brown bread', 'Poached eggs', 'Lemon', 'Watercress'],
    store: 'Best eaten at once. Leftover flaked fish keeps for 2 days in the fridge and is good in kedgeree or fishcakes.'
  },

  'gala-pie': {
    d: 'A raised pork pie in hot water crust with whole eggs set in the centre; baked for 2 hours, cooled and chilled before slicing.',
    meta: 'Gala pie: hot water crust pastry around seasoned pork with a line of eggs, baked for 2 hours. Ten slices, plus chilling.',
    kw: ['gala pie', 'gala pie recipe', 'raised pork pie with eggs', 'hot water crust pork pie', 'picnic pie with eggs'],
    why: `A gala pie is built for a buffet table, a picnic or a Boxing Day spread, where a pie that cuts into pretty slices is worth the effort. It is a raised pork pie with a line of boiled eggs running through the middle, so each slice has a round of yolk in it. Build it for a crowd.

The pastry is hot water crust. Melt lard with water and salt, pour it into the flour while it is still hot, and work it quickly into a dough, because it stiffens as it cools. **Keep the dough warm under a cloth** while moulding the pie, or it will crack. Line a tin with most of the pastry, press in the seasoned pork, lay the peeled eggs end to end down the centre and cover with more pork.

Seal the lid, make a steam hole and bake until golden and the meat reaches 74C in the centre. The pie must cool, then chill for several hours before cutting. Serve it cold, with chutney and pickles.`,
    ing: [
      '450 g plain flour',
      '1 tsp salt',
      '100 g lard',
      '200 ml water',
      '800 g pork shoulder, minced',
      '200 g pork belly, finely diced',
      '1 tsp salt',
      '1 tsp black pepper',
      '1/2 tsp ground mace',
      '1/2 tsp dried sage',
      '4 eggs, hard-boiled and peeled',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Heat the oven to 200C. Mix the pork, belly, salt, pepper, mace and sage in a bowl.',
      'Sift the flour and salt into a bowl. Melt the lard with the water until boiling, pour into the flour and mix to a dough.',
      'While warm, line a 20 cm loose-based tin with two thirds of the pastry. Press in half the pork, lay the eggs in a line down the centre and cover with the rest of the pork.',
      'Roll the remaining pastry for a lid, seal it on with beaten egg, cut a steam hole and brush with egg.',
      'Bake for 30 minutes, then turn the oven down to 160C and bake for 1 hour 30 minutes until the meat reaches 74C. Cool for 1 hour, then chill for 4 hours before slicing.'
    ],
    tips: [
      'Keep the hot water crust warm while you mould the pie.',
      'Use a thermometer to check the pork has reached 74C.',
      'Cool for no more than 2 hours, then chill; do not leave the pie out.'
    ],
    pair: ['Piccalilli', 'Pickled onions', 'Mustard', 'Green salad'],
    store: 'Keeps for 3 days in the fridge, wrapped. Do not freeze.',
    rest: [300, 'Cooling and chilling']
  },

  'skirlie': {
    d: 'Pinhead oatmeal fried for 15 minutes in butter with onion until toasted and crumbly, a Scottish side or stuffing.',
    meta: 'Skirlie: oatmeal toasted in butter with onion until crumbly, ready in 20 minutes. Four servings.',
    kw: ['skirlie', 'skirlie recipe', 'scottish oatmeal stuffing', 'skirlie with onions', 'fried oatmeal and onion'],
    why: `Skirlie is mince's best friend, and it is tastier than it looks. It is oatmeal toasted in fat with onion until it turns crumbly and nutty, and it is eaten alongside beef and potatoes, or packed into a bird as a stuffing. Humble food, done well.

The onion goes into the butter first and cooks slowly until golden and soft; this takes ten minutes and gives the dish its sweetness. **Add the oatmeal all at once** and stir over a medium heat until it soaks up the fat. It looks like too much, but the oats swell slightly and toast to the colour of a digestive biscuit. Patience pays here.

Season boldly with salt and black pepper; oatmeal needs more than seems right. The result should be loose, dry and fragrant, not clumped or pasty. Spoon it onto the plate beside mince and tatties, or alongside roast chicken or a pie. Serve it hot.`,
    ing: [
      '50 g butter',
      '2 onions, finely chopped',
      '150 g pinhead oatmeal',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Melt the butter in a frying pan and cook the onions over a medium heat for 10 minutes until golden.',
      'Add the oatmeal and stir for 5 minutes until the oats have taken up the fat and begin to smell toasted.',
      'Season with the salt and pepper and serve hot.'
    ],
    tips: [
      'Cook the onions slowly until golden before adding the oats.',
      'Keep the oatmeal moving so it toasts evenly.',
      'Use pinhead oatmeal for the best texture; rolled oats go soft.'
    ],
    pair: ['Mince and tatties', 'Roast chicken', 'Haggis', 'Mashed neeps'],
    store: 'Keeps for 3 days in the fridge. Reheat in a dry pan.'
  },

  'singin-hinnies': {
    d: 'Rich griddle scones of flour, butter, lard and currants, cooked for 20 minutes on a hot griddle until they hiss and brown.',
    meta: "Singin' hinnies: currant griddle scones cooked in a dry pan for 20 minutes. Eight scones.",
    kw: ["singin' hinnies", 'singin hinnies recipe', 'northumbrian griddle scones', 'currant griddle cakes', 'hinnies recipe'],
    why: `Flour, butter, lard, currants: four things you already own, and about forty minutes. A singin' hinny is a griddle scone that gets its name from the sizzle it makes as the fat in the dough melts against the hot pan. Fat is the secret.

Rub the fats into the flour and baking powder, stir in the currants and sugar, and add just enough milk to make a soft dough. **Handle it as little as possible.** Over-worked dough makes tough, flat hinnies. Pat it out to about 1 cm thick, cut it into rounds or one large circle, and prick the surface with a fork.

Cook over a medium heat on a dry, heavy griddle or frying pan, turning once. They should be golden brown with a few darker flecks, which takes about ten minutes a side. If they brown too fast, the middle will be raw. Split them hot and eat with butter, or cold with jam. Butter melts straight in.`,
    ing: [
      '250 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '50 g butter, cold',
      '50 g lard, cold',
      '60 g currants',
      '30 g caster sugar',
      '100 ml whole milk'
    ],
    st: [
      'Mix the flour, baking powder and salt. Rub in the butter and lard until the mixture looks like fine crumbs.',
      'Stir in the currants and sugar, then add the milk to make a soft dough.',
      'Pat out to 1 cm thick, cut into 8 rounds and prick each with a fork.',
      'Cook on a medium-hot dry griddle for 10 minutes on each side until golden brown and cooked through.',
      'Split while hot and serve with butter.'
    ],
    tips: [
      'If your griddle runs hot, turn the heat down so the middles cook through.',
      'Use cold fat for a flakier texture.',
      'Do not knead; a gentle pat is enough.'
    ],
    pair: ['Butter', 'Jam', 'A pot of tea', 'Cheddar'],
    store: 'Best on the day. Keeps for 2 days in a tin; toast to refresh.'
  }
};
