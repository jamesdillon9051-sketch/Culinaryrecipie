'use strict';

/**
 * Volume nineteen — India, the Indo-Chinese kitchen, and one Nepalese dumpling.
 *
 * Thirty-four. India had forty-three entries on a site of twelve hundred, for
 * the largest recipe-searching population on earth, and the gaps were not
 * obscure regional dishes — they were the things people cook and look up most.
 *
 * Three groups were missing outright. The paneer gravies, which are what a
 * north Indian household orders and cooks more than any chicken dish: paneer
 * butter masala, matar paneer, kadai paneer. The breakfast canon of poha,
 * upma, medu vada and uttapam, none of which existed here. And the whole of
 * Indo-Chinese — gobi manchurian, chilli paneer, hakka noodles, schezwan
 * fried rice — which is a cuisine in its own right in Indian cities, invented
 * by the Hakka community of Kolkata, and enormous online.
 *
 * Quantities are metric and the spicing is written for a British kitchen:
 * Kashmiri chilli where the point is colour rather than heat, and green
 * chillies counted rather than described, because "two chillies" travels and
 * "medium hot" does not.
 */

module.exports = {
  'paneer-butter-masala': {
    d: 'Paneer in a glossy tomato and cashew gravy, finished with butter and cream. The restaurant dish people try to reproduce at home more than any other.',
    meta: 'North Indian paneer in a smooth tomato, cashew and butter gravy, simmered and blended, finished with cream and crushed fenugreek leaf.',
    kw: ['paneer butter masala', 'paneer butter masala recipe', 'butter paneer', 'restaurant style paneer', 'paneer makhani'],
    why: 'The gravy is blended and then strained, and the straining is the step people skip. Cashew and tomato skin leave grit no amount of blending removes, and a restaurant gravy is smooth in a way a home one usually is not — passing it through a sieve is the whole difference. Add the cream off the heat: boiled cream splits in an acidic tomato base, and the sauce goes grainy in a way you cannot bring back.',
    ing: [
      '400 g paneer, cut into 2.5 cm cubes',
      '500 g ripe tomatoes, roughly chopped',
      '60 g cashew nuts',
      '1 onion, roughly chopped',
      '4 garlic cloves',
      '2.5 cm ginger, sliced',
      '2 green cardamom pods',
      '60 g unsalted butter',
      '1 tbsp vegetable oil',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp garam masala',
      '1 tsp caster sugar',
      '1.25 tsp fine sea salt',
      '100 ml double cream',
      '1 tsp dried fenugreek leaves (kasuri methi)',
      '200 ml water'
    ],
    st: [
      'Simmer the tomatoes, cashews, onion, garlic, ginger, cardamom and water in a covered pan for 15 minutes, until the onion is soft.',
      'Cool for 5 minutes, then blend to a purée.',
      'Push the purée through a sieve, working the solids with the back of a ladle. Discard what will not go through.',
      'Melt the butter with the oil in the rinsed pan over a medium heat.',
      'Add the chilli powder and turmeric and let them bloom for 20 seconds.',
      'Pour in the strained purée, stand back, and simmer for 12 minutes, stirring, until it darkens and thickens.',
      'Stir in the sugar, salt and garam masala.',
      'Add the paneer and simmer 4 minutes, spooning gravy over the cubes.',
      'Take the pan off the heat. Stir in the cream and crush the fenugreek leaves between your palms into the pan.',
      'Rest 3 minutes before serving so the paneer takes up the gravy.'
    ],
    tips: [
      'Sieve the gravy — that is what makes it taste like the restaurant.',
      'Cream goes in off the heat or it splits.',
      'Soak shop-bought paneer in hot water for 10 minutes and it softens.'
    ],
    pair: ['Garlic naan', 'Jeera rice', 'Kachumber salad'],
    store: 'Keeps 3 days refrigerated. The gravy freezes for 2 months; add the paneer fresh on reheating.',
    nut: [485, 18, 21, 37, 3, 11, 760]
  },

  'matar-paneer': {
    d: 'Paneer and peas in an onion-tomato gravy, the weeknight version of the butter masala and the one most Indian households actually cook.',
    meta: 'Paneer cubes and green peas simmered in a north Indian onion, tomato and ginger gravy with garam masala.',
    kw: ['matar paneer', 'matar paneer recipe', 'peas and paneer curry', 'paneer curry recipe', 'north indian paneer'],
    why: 'Fry the onion paste until the oil separates and pools at the edge of the pan. That is not a garnish, it is the signal that the water has gone and the sugars have caught — before it, the gravy tastes raw and sharp; after it, sweet and round. It takes about eight minutes and there is no shortcut. Frozen peas go in near the end: they need three minutes, and twelve turns them grey.',
    ing: [
      '350 g paneer, cut into 2 cm cubes',
      '250 g frozen peas',
      '2 onions, finely chopped',
      '400 g tinned chopped tomatoes',
      '4 garlic cloves, crushed',
      '2.5 cm ginger, grated',
      '2 green chillies, slit',
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 tsp ground coriander',
      '0.5 tsp ground turmeric',
      '1 tsp Kashmiri chilli powder',
      '1 tsp garam masala',
      '1.25 tsp fine sea salt',
      '300 ml water',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil in a wide pan and fry the cumin seeds for 30 seconds until they pop.',
      'Add the onions and fry over a medium heat for 10 minutes, until deep golden.',
      'Stir in the garlic, ginger and chillies and cook 2 minutes.',
      'Add the coriander, turmeric and chilli powder and cook 30 seconds.',
      'Tip in the tomatoes and cook 8 minutes, until the oil separates and pools at the edge.',
      'Pour in the water, add the salt, and bring to a simmer.',
      'Add the peas and simmer 3 minutes.',
      'Add the paneer and simmer 4 minutes more, without stirring hard, so the cubes stay whole.',
      'Stir in the garam masala and half the coriander.',
      'Rest 5 minutes off the heat, then scatter the remaining coriander over.'
    ],
    tips: [
      'Wait for the oil to separate before you add water.',
      'Peas at the end, not the beginning.',
      'Slit the chillies rather than chopping them, and they season without burning.'
    ],
    pair: ['Chapati', 'Jeera rice', 'Plain yoghurt'],
    store: 'Keeps 3 days refrigerated and reheats well with a splash of water.',
    nut: [355, 17, 24, 22, 6, 9, 720]
  },

  'kadai-paneer': {
    d: 'Paneer and peppers tossed in a coarse, freshly pounded coriander-and-chilli masala. Drier and sharper than the creamy paneer gravies.',
    meta: 'Paneer and peppers cooked in a kadai with a coarsely ground coriander seed and dried chilli masala, finished with ginger julienne.',
    kw: ['kadai paneer', 'kadai paneer recipe', 'paneer capsicum', 'dry paneer curry', 'kadai masala'],
    why: 'The masala is pounded, not powdered. Coriander seeds and dried chillies crushed coarsely in a mortar give bursts of flavour you bite into; the same spices bought ready-ground disappear into the sauce and taste flat. Grind them yourself and stop while the pieces are still visible. The peppers want high heat and about four minutes — they should still snap.',
    ing: [
      '350 g paneer, cut into 2.5 cm batons',
      '1 red pepper, cut into 2.5 cm squares',
      '1 green pepper, cut into 2.5 cm squares',
      '1 onion, cut into petals',
      '400 g tinned chopped tomatoes',
      '2 tbsp coriander seeds',
      '4 dried Kashmiri chillies',
      '3 tbsp vegetable oil',
      '4 garlic cloves, crushed',
      '2.5 cm ginger, half grated and half cut into fine julienne',
      '1 tsp garam masala',
      '1 tsp dried fenugreek leaves (kasuri methi)',
      '1.25 tsp fine sea salt',
      '100 ml water',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Toast the coriander seeds and dried chillies in a dry pan for 90 seconds, until they smell nutty.',
      'Pound them in a mortar to a coarse powder with visible pieces. Set aside.',
      'Heat 2 tbsp of the oil in a wide pan over a high heat and fry the peppers and onion for 4 minutes, until blistered but still firm. Lift out.',
      'Add the remaining oil, the garlic and the grated ginger, and cook 1 minute.',
      'Stir in two thirds of the pounded masala and cook 30 seconds.',
      'Add the tomatoes and salt and cook 8 minutes, until thick and the oil shows at the edge.',
      'Pour in the water and simmer 2 minutes.',
      'Return the peppers and onion, add the paneer, and toss for 3 minutes over a high heat.',
      'Stir in the garam masala, the remaining pounded masala and the crushed fenugreek leaves.',
      'Scatter the ginger julienne and coriander over and serve straight from the pan.'
    ],
    tips: [
      'Pound the masala coarse. Powder tastes like a different dish.',
      'Blister the peppers separately and add them back at the end.',
      'Keep a third of the masala for the finish so it stays fragrant.'
    ],
    pair: ['Tandoori roti', 'Onion salad with lemon', 'Cucumber raita'],
    store: 'Best the day it is made. Keeps 2 days refrigerated; the peppers soften.',
    nut: [340, 16, 19, 22, 5, 10, 710]
  },

  'paneer-bhurji': {
    d: 'Crumbled paneer scrambled with onion, tomato and green chilli. Fifteen minutes, and the standard Indian answer to a fast, high-protein breakfast.',
    meta: 'Crumbled paneer cooked with onion, tomato, turmeric and green chilli into a soft scramble, finished with coriander and lemon.',
    kw: ['paneer bhurji', 'paneer bhurji recipe', 'scrambled paneer', 'indian paneer breakfast', 'quick paneer recipe'],
    why: 'Crumble the paneer by hand rather than grating it. Grated paneer is uniform and turns pasty; hand-crumbled gives you pieces of three or four different sizes, which is what makes it read as a scramble rather than a paste. Add it at the very end and give it two minutes — paneer cooked longer than that squeaks and tightens.',
    ing: [
      '350 g paneer, crumbled by hand',
      '1 onion, finely chopped',
      '2 tomatoes, finely chopped',
      '2 green chillies, finely chopped',
      '2.5 cm ginger, grated',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '0.5 tsp ground turmeric',
      '1 tsp ground coriander',
      '0.5 tsp garam masala',
      '1 tsp fine sea salt',
      '2 tbsp chopped coriander leaves',
      '0.5 lemon, for squeezing'
    ],
    st: [
      'Heat the oil in a frying pan and fry the cumin seeds for 30 seconds.',
      'Add the onion and fry over a medium heat for 5 minutes, until softening and pale gold.',
      'Stir in the ginger and chillies and cook 1 minute.',
      'Add the turmeric and ground coriander and cook 20 seconds.',
      'Add the tomatoes and salt and cook 4 minutes, until they collapse.',
      'Turn the heat to low and fold in the crumbled paneer.',
      'Cook 2 minutes only, folding rather than stirring, until heated through.',
      'Take off the heat and stir in the garam masala and coriander.',
      'Squeeze the lemon over and serve at once.'
    ],
    tips: [
      'Crumble by hand for uneven pieces.',
      'Two minutes for the paneer, no more.',
      'The lemon at the end is not optional — it lifts the whole thing.'
    ],
    pair: ['Pav or buttered toast', 'Masala chai', 'Sliced onion and green chilli'],
    store: 'Best fresh. Keeps 2 days refrigerated but the paneer firms up.',
    nut: [330, 19, 11, 24, 2, 6, 690]
  },

  'chilli-paneer': {
    d: 'Battered paneer tossed with peppers and onion in a dark, glossy soy and chilli sauce. Indo-Chinese, and the one everybody orders.',
    meta: 'Paneer in a cornflour batter, fried and tossed with peppers, onion and a soy, vinegar and chilli sauce thickened to a gloss.',
    kw: ['chilli paneer', 'chilli paneer recipe', 'indo chinese paneer', 'dry chilli paneer', 'restaurant style chilli paneer'],
    why: 'The sauce is thickened with a cornflour slurry added at the very end, off a rolling boil, and it must go in while the pan is moving. Poured into a still pan it seizes into lumps that never disperse. The other rule is speed: once the fried paneer meets the sauce you have about ninety seconds before the crust softens, so have everything cut and measured before the wok goes on.',
    ing: [
      '400 g paneer, cut into 2 cm cubes',
      '4 tbsp cornflour',
      '2 tbsp plain flour',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp fine sea salt',
      '5 tbsp water',
      '400 ml vegetable oil, for frying',
      '1 green pepper, cut into 2 cm squares',
      '1 onion, cut into petals',
      '4 garlic cloves, finely chopped',
      '2.5 cm ginger, finely chopped',
      '3 green chillies, slit',
      '2 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1 tbsp tomato ketchup',
      '1 tsp caster sugar',
      '1 tsp cornflour mixed with 3 tbsp water',
      '3 spring onions, sliced'
    ],
    st: [
      'Whisk the cornflour, plain flour, chilli powder, salt and water to a thick batter that coats a spoon.',
      'Turn the paneer through it until every cube is covered.',
      'Heat the oil to 180C and fry the paneer in two batches for 3 minutes each, until pale gold and crisp. Drain.',
      'Pour all but 2 tbsp of the oil out of the wok.',
      'Over a high heat, fry the garlic, ginger and chillies for 30 seconds.',
      'Add the pepper and onion and stir-fry 2 minutes — they should stay crunchy.',
      'Add the soy, vinegar, ketchup and sugar and bring to a fast boil.',
      'Stir the cornflour slurry again and pour it in while stirring hard. It thickens in about 20 seconds.',
      'Tip in the fried paneer and toss for 30 seconds to coat.',
      'Scatter the spring onions over and serve immediately.'
    ],
    tips: [
      'Slurry into a moving pan, never a still one.',
      'Everything cut before the wok goes on.',
      'Serve within a minute or the crust goes soft.'
    ],
    pair: ['Hakka noodles', 'Schezwan fried rice', 'Cold beer'],
    store: 'Does not keep — the coating softens within the hour.',
    nut: [430, 17, 28, 27, 2, 6, 1080]
  },

  'gobi-manchurian': {
    d: 'Cauliflower fried in a spiced batter and tossed in a dark garlic and soy sauce. Kolkata Hakka cooking, and the dish that made Indo-Chinese a cuisine.',
    meta: 'Cauliflower florets in a cornflour batter, deep fried and tossed in a garlic, ginger, soy and chilli sauce with spring onions.',
    kw: ['gobi manchurian', 'gobi manchurian recipe', 'cauliflower manchurian', 'indo chinese cauliflower', 'dry manchurian'],
    why: 'Blanch the florets for two minutes before battering. Raw cauliflower needs longer in the fryer than the batter can survive, so you end up with a dark crust around a hard centre; blanched, both are ready together. Drain them properly and dry them on a cloth, because a wet floret slides out of its batter in the oil.',
    ing: [
      '1 cauliflower, about 700 g, in 3 cm florets',
      '6 tbsp cornflour',
      '3 tbsp plain flour',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground black pepper',
      '1 tsp fine sea salt',
      '120 ml water',
      '500 ml vegetable oil, for frying',
      '6 garlic cloves, finely chopped',
      '2.5 cm ginger, finely chopped',
      '3 green chillies, chopped',
      '1 onion, finely diced',
      '3 tbsp light soy sauce',
      '2 tbsp tomato ketchup',
      '1 tbsp rice vinegar',
      '1 tsp caster sugar',
      '1 tsp cornflour mixed with 4 tbsp water',
      '4 spring onions, sliced'
    ],
    st: [
      'Blanch the florets in boiling salted water for 2 minutes, drain, and dry on a cloth.',
      'Whisk the cornflour, plain flour, chilli powder, pepper, salt and water into a batter the thickness of double cream.',
      'Heat the oil to 180C.',
      'Coat the florets in batter and fry in three batches for 4 minutes each, until deep gold. Drain on a rack.',
      'Pour all but 2 tbsp of oil from the pan.',
      'Fry the garlic, ginger, chillies and onion over a high heat for 90 seconds.',
      'Add the soy, ketchup, vinegar and sugar and bring to the boil.',
      'Stir the slurry and pour it in, stirring, until the sauce turns glossy — about 20 seconds.',
      'Add the fried cauliflower and toss for 45 seconds.',
      'Scatter the spring onions over and serve at once.'
    ],
    tips: [
      'Blanch first, then batter. It is the whole trick.',
      'Dry the florets or the batter slides off.',
      'A rack, not paper, so the underside stays crisp.'
    ],
    pair: ['Hakka noodles', 'Schezwan fried rice', 'Chilli paneer'],
    store: 'Eat immediately. The sauce softens the crust within minutes.',
    nut: [365, 8, 42, 19, 5, 9, 1190]
  },

  'hakka-noodles': {
    d: 'Egg noodles tossed with shredded vegetables over a high flame. The Indian Chinese restaurant staple, and fifteen minutes start to finish.',
    meta: 'Boiled egg noodles stir-fried with shredded cabbage, carrot and pepper in soy and vinegar over a high heat.',
    kw: ['hakka noodles', 'hakka noodles recipe', 'veg hakka noodles', 'indo chinese noodles', 'restaurant style noodles'],
    why: 'Cook the noodles a minute short, rinse them cold and toss them in a teaspoon of oil. Noodles that go into the wok hot and wet steam rather than fry, and they clump into a single mass. Cold, oiled and slightly under, they separate and take the heat. Shred everything the same thickness as the noodles so a forkful is one texture.',
    ing: [
      '300 g dried egg noodles',
      '3 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '2.5 cm ginger, finely chopped',
      '1 onion, finely sliced',
      '150 g white cabbage, finely shredded',
      '2 carrots, cut into fine matchsticks',
      '1 green pepper, finely sliced',
      '3 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1 tsp white pepper',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '4 spring onions, sliced'
    ],
    st: [
      'Boil the noodles for 1 minute less than the packet says.',
      'Drain, rinse under cold water until completely cool, and toss with 1 tsp of the oil.',
      'Heat the remaining oil in a wok until it shimmers.',
      'Fry the garlic and ginger for 20 seconds.',
      'Add the onion, cabbage, carrot and pepper and stir-fry over the highest heat for 3 minutes. They should still be crunchy.',
      'Add the soy, vinegar, white pepper, sugar and salt and toss for 30 seconds.',
      'Tip in the noodles and lift and toss with two spoons for 2 minutes, until heated through and streaked brown.',
      'Add the spring onions, toss once more, and serve.'
    ],
    tips: [
      'Cold, oiled noodles or they clump.',
      'Shred the vegetables noodle-thin.',
      'The highest heat your hob has, and keep everything moving.'
    ],
    pair: ['Gobi manchurian', 'Chilli paneer', 'Hot and sour soup'],
    store: 'Keeps 2 days refrigerated. Reheat in a hot pan, not a microwave.',
    nut: [420, 12, 66, 12, 5, 8, 1210]
  },

  'schezwan-fried-rice': {
    d: 'Fried rice with a spoonful of red schezwan sauce through it. Nothing to do with Sichuan, everything to do with the Indian Chinese menu.',
    meta: 'Cold cooked rice stir-fried with vegetables and a garlic and dried chilli schezwan sauce over a high flame.',
    kw: ['schezwan fried rice', 'schezwan fried rice recipe', 'szechuan fried rice', 'indo chinese fried rice', 'spicy fried rice'],
    why: 'The rice must be cold and at least a few hours old. Fresh rice is still full of surface moisture and steams into a sticky mass the moment it meets a hot wok; refrigerated overnight, the grains dry and firm and they fry into separate pieces. If you have only fresh rice, spread it on a tray and refrigerate it uncovered for an hour.',
    ing: [
      '600 g cooked long-grain rice, cold',
      '3 tbsp vegetable oil',
      '6 garlic cloves, finely chopped',
      '2.5 cm ginger, finely chopped',
      '1 onion, finely diced',
      '1 carrot, finely diced',
      '100 g green beans, finely sliced',
      '1 green pepper, finely diced',
      '3 tbsp schezwan sauce, or 8 dried chillies blitzed with 4 garlic cloves and 2 tbsp oil',
      '2 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '4 spring onions, sliced'
    ],
    st: [
      'Break up the cold rice with wet fingers so no lumps remain.',
      'Heat the oil in a wok until it just smokes.',
      'Fry the garlic and ginger for 20 seconds.',
      'Add the onion, carrot, beans and pepper and stir-fry over the highest heat for 3 minutes.',
      'Push the vegetables to one side, add the schezwan sauce to the clear space and let it fry for 30 seconds.',
      'Tip in the rice and toss for 3 minutes, pressing it against the hot metal and lifting.',
      'Add the soy, vinegar, sugar and salt and toss for 1 minute more.',
      'Fold through half the spring onions.',
      'Scatter the rest over and serve straight from the wok.'
    ],
    tips: [
      'Day-old rice, or an hour uncovered in the fridge.',
      'Fry the schezwan sauce for half a minute before the rice goes in.',
      'Press and lift rather than stir, so the grains catch.'
    ],
    pair: ['Chilli paneer', 'Gobi manchurian', 'Sweetcorn soup'],
    store: 'Keeps 2 days refrigerated. Reheat in a very hot pan.',
    nut: [430, 8, 71, 13, 4, 7, 1150]
  },

  'chicken-65': {
    d: 'Small pieces of chicken in a red, curry-leaf-scented coating, fried hard and tossed with yoghurt and chilli. A Chennai hotel dish from 1965.',
    meta: 'Boneless chicken marinated in yoghurt, ginger, garlic and Kashmiri chilli, fried in a rice flour coating and tossed with curry leaves.',
    kw: ['chicken 65', 'chicken 65 recipe', 'chennai chicken 65', 'south indian fried chicken', 'restaurant style chicken 65'],
    why: 'Rice flour, not plain flour, is what gives the shattering crust — it fries harder and stays crisp for longer because it has no gluten to soften. The other half of the dish is the tempering: curry leaves and split green chillies dropped into hot oil for fifteen seconds and poured over at the end. Skip it and you have fried chicken; include it and you have chicken 65.',
    ing: [
      '600 g boneless chicken thigh, in 3 cm pieces',
      '4 tbsp thick natural yoghurt',
      '1 tbsp ginger and garlic paste',
      '2 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp garam masala',
      '1.25 tsp fine sea salt',
      '4 tbsp rice flour',
      '2 tbsp cornflour',
      '1 egg',
      '500 ml vegetable oil, for frying',
      '20 curry leaves',
      '4 green chillies, slit',
      '4 garlic cloves, sliced',
      '2 tbsp thick natural yoghurt, for finishing',
      '1 tsp lemon juice'
    ],
    st: [
      'Mix the chicken with the yoghurt, ginger and garlic paste, chilli powder, turmeric, garam masala and salt.',
      'Marinate 30 minutes at room temperature.',
      'Stir in the rice flour, cornflour and egg to make a thick clinging coating.',
      'Heat the oil to 180C.',
      'Fry the chicken in three batches for 5 minutes each, until deep red-brown and firm. Drain on a rack.',
      'Pour all but 2 tbsp of the oil from the pan.',
      'Drop in the curry leaves, chillies and garlic and fry 15 seconds, until the leaves crackle.',
      'Take the pan off the heat and stir in the finishing yoghurt and lemon juice.',
      'Return the chicken and toss for 30 seconds to coat.',
      'Serve at once, while the coating is still crisp.'
    ],
    tips: [
      'Rice flour is what makes the crust shatter.',
      'The curry leaf tempering is the dish, not a garnish.',
      'Fry in three batches — crowding steams the coating soft.'
    ],
    pair: ['Sliced onion and lemon', 'Curd rice', 'Cold lager'],
    store: 'Eat straight away. It will keep 2 days but the crust does not.',
    nut: [415, 33, 19, 23, 1, 3, 890]
  },

  'chicken-lollipop': {
    d: 'Chicken wings frenched into a lollipop, battered red and fried. Bar food across India, and the reason wing drumettes sell out.',
    meta: 'Chicken wing drumettes shaped into lollipops, marinated in ginger, garlic and chilli, coated in cornflour and deep fried.',
    kw: ['chicken lollipop', 'chicken lollipop recipe', 'frenched chicken wings', 'indian chicken starter', 'drums of heaven'],
    why: 'Frenching the wing is what makes it a lollipop and it takes a knife and thirty seconds each: cut through the tendons at the narrow end, then push the meat down the bone into a ball. Do it before you marinate, not after, because the marinade makes the meat slippery. Fry twice — five minutes to cook through, a two-minute rest, then ninety seconds hot for the crust.',
    ing: [
      '16 chicken wing drumettes',
      '2 tbsp ginger and garlic paste',
      '2 tsp Kashmiri chilli powder',
      '1 tsp ground black pepper',
      '1 tbsp light soy sauce',
      '1 tbsp rice vinegar',
      '1.25 tsp fine sea salt',
      '5 tbsp cornflour',
      '2 tbsp plain flour',
      '1 egg',
      '2 tbsp tomato ketchup',
      '600 ml vegetable oil, for frying',
      '2 spring onions, sliced'
    ],
    st: [
      'Cut through the tendons at the narrow end of each drumette and push the meat down the bone into a ball.',
      'Mix the chicken with the ginger and garlic paste, chilli powder, pepper, soy, vinegar and salt.',
      'Marinate 30 minutes.',
      'Stir in the cornflour, plain flour, egg and ketchup to make a thick red coating.',
      'Heat the oil to 170C.',
      'Fry eight lollipops for 5 minutes, holding the bones clear of the oil. Lift onto a rack.',
      'Repeat with the rest, then rest both batches 2 minutes.',
      'Raise the oil to 190C and fry all the lollipops again for 90 seconds, until dark and crisp.',
      'Drain, scatter the spring onions over and serve with the bones pointing up.'
    ],
    tips: [
      'French the wings before marinating, not after.',
      'Two fries: one to cook, one to crisp.',
      'Wrap the bone ends in foil if you are serving them by hand.'
    ],
    pair: ['Schezwan sauce for dipping', 'Sliced onion', 'Cold beer'],
    store: 'Best fresh. Reheat leftovers in a hot oven for 8 minutes rather than a microwave.',
    nut: [390, 28, 22, 21, 1, 3, 940]
  },

  'chicken-chettinad': {
    d: 'Chicken in a black, coconut-and-pepper masala from the Chettinad country of Tamil Nadu. One of the hottest curries in Indian cooking, and the most fragrant.',
    meta: 'Tamil chicken curry in a freshly roasted masala of coconut, black pepper, fennel and dried chillies, with curry leaves.',
    kw: ['chicken chettinad', 'chettinad chicken recipe', 'tamil chicken curry', 'south indian chicken curry', 'chettinad masala'],
    why: 'Every spice is roasted dry and ground for the dish, and that is not fussiness — the fennel, pepper and coconut all turn from raw to nutty at different moments, so they go into the pan in stages and come out together. The coconut goes last and needs about ninety seconds; take it past golden and the whole masala turns bitter and there is no rescuing it.',
    ing: [
      '900 g bone-in chicken pieces',
      '4 tbsp desiccated coconut',
      '1 tbsp coriander seeds',
      '1 tbsp fennel seeds',
      '2 tsp black peppercorns',
      '1 tsp cumin seeds',
      '6 dried Kashmiri chillies',
      '4 cloves',
      '2.5 cm cinnamon stick',
      '3 tbsp coconut oil',
      '2 onions, finely chopped',
      '2 tbsp ginger and garlic paste',
      '2 tomatoes, chopped',
      '20 curry leaves',
      '0.5 tsp ground turmeric',
      '1.5 tsp fine sea salt',
      '300 ml water',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Toast the coriander, fennel, peppercorns, cumin, chillies, cloves and cinnamon in a dry pan for 2 minutes.',
      'Add the coconut and toast 90 seconds more, until it is pale gold and no further.',
      'Cool 5 minutes, then grind to a fine powder.',
      'Heat the coconut oil and fry half the curry leaves for 20 seconds.',
      'Add the onions and fry 10 minutes, until deep brown.',
      'Stir in the ginger and garlic paste and cook 2 minutes.',
      'Add the tomatoes, turmeric and salt and cook 5 minutes, until pulpy.',
      'Add the chicken and turn it in the masala for 5 minutes.',
      'Stir in the ground masala and the water, cover, and simmer 25 minutes.',
      'Uncover and cook 5 minutes more to thicken. Scatter the remaining curry leaves and the coriander over.'
    ],
    tips: [
      'Coconut goes in last and comes out pale gold.',
      'Grind the masala for this dish, not from a jar.',
      'Bone-in chicken — the bones carry the flavour into the gravy.'
    ],
    pair: ['Steamed rice', 'Appam or dosa', 'Cucumber and onion raita'],
    store: 'Better on the second day. Keeps 3 days refrigerated, freezes 2 months.',
    nut: [475, 42, 14, 29, 5, 6, 980]
  },

  'mutton-curry': {
    d: 'Bone-in mutton browned hard and simmered ninety minutes in onion and whole spice, until the gravy is dark and the meat gives at a spoon.',
    meta: 'Bone-in mutton or lamb slow-cooked in a browned onion and whole spice gravy with ginger, garlic and garam masala.',
    kw: ['mutton curry', 'mutton curry recipe', 'indian lamb curry', 'bone in mutton masala', 'slow cooked mutton'],
    why: 'Brown the meat in batches and let each batch sit still for two minutes before turning it. Crowded, mutton releases water and boils grey; given room and stillness, it takes a crust that dissolves into the gravy and is most of what makes it dark. The onions want ten minutes of their own, past golden to genuinely brown, and that is where the sweetness comes from.',
    ing: [
      '1.2 kg bone-in mutton or lamb shoulder, in 5 cm pieces',
      '4 tbsp vegetable oil',
      '3 onions, finely sliced',
      '2 tbsp ginger and garlic paste',
      '4 green cardamom pods',
      '4 cloves',
      '5 cm cinnamon stick',
      '2 bay leaves',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '3 tomatoes, chopped',
      '1.5 tsp fine sea salt',
      '700 ml water',
      '1.5 tsp garam masala',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat 2 tbsp of the oil in a heavy pan and brown the mutton in three batches, leaving each batch still for 2 minutes before turning. Lift out.',
      'Add the remaining oil and fry the cardamom, cloves, cinnamon and bay for 30 seconds.',
      'Add the onions and fry over a medium heat for 12 minutes, until genuinely brown.',
      'Stir in the ginger and garlic paste and cook 2 minutes.',
      'Add the ground coriander, cumin, chilli and turmeric and cook 30 seconds.',
      'Add the tomatoes and salt and cook 6 minutes, until the oil separates.',
      'Return the meat with any juices, pour in the water and bring to a simmer.',
      'Cover and cook on the lowest heat for 75 minutes, stirring twice.',
      'Uncover and simmer 15 minutes more, until the gravy coats the meat and the mutton gives at a spoon.',
      'Stir in the garam masala, rest 10 minutes off the heat, and scatter the coriander over.'
    ],
    tips: [
      'Brown in batches and leave it alone between turns.',
      'Onions to brown, not gold — that is ten minutes at least.',
      'Rest it off the heat before serving; the gravy settles.'
    ],
    pair: ['Tandoori roti', 'Steamed basmati', 'Sliced onion with lemon'],
    store: 'Improves overnight. Keeps 3 days refrigerated, freezes 3 months.',
    nut: [560, 45, 16, 35, 4, 7, 1020]
  },

  'egg-curry': {
    d: 'Boiled eggs halved into a spiced onion and tomato gravy. The cheapest good curry there is, and on the table in forty-five minutes.',
    meta: 'Hard-boiled eggs simmered in a north Indian onion, tomato and ginger gravy, the eggs fried in turmeric first.',
    kw: ['egg curry', 'egg curry recipe', 'anda curry', 'indian egg masala', 'boiled egg curry'],
    why: 'Fry the peeled eggs in turmeric and chilli for two minutes before they go into the gravy. It blisters the surface slightly, which gives the sauce something to hold onto — eggs dropped in smooth sit in the gravy rather than taking it up. Add them whole and halve them in the pan at the end, so the yolks stay put.',
    ing: [
      '8 eggs',
      '3 tbsp vegetable oil',
      '0.5 tsp ground turmeric, for the eggs',
      '0.5 tsp Kashmiri chilli powder, for the eggs',
      '2 onions, finely chopped',
      '2 tbsp ginger and garlic paste',
      '3 tomatoes, chopped',
      '2 green chillies, slit',
      '1 tsp cumin seeds',
      '2 tsp ground coriander',
      '0.5 tsp ground turmeric',
      '1 tsp Kashmiri chilli powder',
      '1 tsp garam masala',
      '1.25 tsp fine sea salt',
      '400 ml water',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Boil the eggs for 9 minutes, cool them under cold water and peel.',
      'Heat 1 tbsp of the oil, add the turmeric and chilli powder for the eggs, and roll the eggs in it for 2 minutes until blistered. Lift out.',
      'Add the remaining oil and fry the cumin seeds for 30 seconds.',
      'Add the onions and fry 10 minutes, until deep golden.',
      'Stir in the ginger and garlic paste and the chillies and cook 2 minutes.',
      'Add the ground coriander, turmeric and chilli powder and cook 30 seconds.',
      'Add the tomatoes and salt and cook 8 minutes, until the oil separates.',
      'Pour in the water and simmer 5 minutes.',
      'Return the eggs whole, cover, and simmer 5 minutes.',
      'Halve the eggs in the pan, stir in the garam masala, and scatter the coriander over.'
    ],
    tips: [
      'Nine minutes gives a set yolk that still has colour.',
      'Blister the eggs in spiced oil before they meet the gravy.',
      'Halve them in the pan at the end so the yolks stay whole.'
    ],
    pair: ['Steamed rice', 'Chapati', 'Onion salad'],
    store: 'Keeps 2 days refrigerated. The whites firm up but the gravy improves.',
    nut: [345, 19, 15, 24, 3, 8, 780]
  },

  'egg-bhurji': {
    d: 'Indian scrambled eggs with onion, tomato and green chilli, cooked hard and fast. Fifteen minutes, two pans of nothing, and a breakfast worth getting up for.',
    meta: 'Eggs scrambled with onion, tomato, turmeric and green chilli over a brisk heat, finished with coriander.',
    kw: ['egg bhurji', 'egg bhurji recipe', 'indian scrambled eggs', 'anda bhurji', 'quick egg breakfast'],
    why: 'This is not a French scramble and low slow heat ruins it. The onion needs to catch at the edges and the egg wants to set in curds, not a custard, so keep the pan hot and move the spoon less than you think. Beat the eggs with salt only when the pan is already hot — salted early, they thin and weep.',
    ing: [
      '4 eggs',
      '1 onion, finely chopped',
      '1 tomato, finely chopped',
      '2 green chillies, finely chopped',
      '1 tbsp vegetable oil',
      '0.5 tsp cumin seeds',
      '0.25 tsp ground turmeric',
      '0.5 tsp Kashmiri chilli powder',
      '0.5 tsp fine sea salt',
      '0.25 tsp garam masala',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil in a frying pan over a medium-high heat and fry the cumin for 20 seconds.',
      'Add the onion and chillies and fry 3 minutes, until the edges catch.',
      'Add the turmeric and chilli powder and cook 15 seconds.',
      'Add the tomato and cook 2 minutes, until it softens.',
      'Beat the eggs with the salt and pour them in.',
      'Leave them 20 seconds, then push the setting egg from the edge to the middle. Repeat for 2 minutes.',
      'Take the pan off the heat while the egg still looks slightly wet.',
      'Stir in the garam masala and coriander and serve at once.'
    ],
    tips: [
      'Hot pan, few stirs, curds rather than custard.',
      'Salt the eggs as they go in, not before.',
      'Off the heat while it still looks underdone.'
    ],
    pair: ['Buttered pav or toast', 'Masala chai', 'Green chilli on the side'],
    store: 'Eat immediately. Scrambled egg does not keep.',
    nut: [265, 15, 9, 19, 2, 5, 640]
  },

  'fish-tikka': {
    d: 'Firm white fish in a yoghurt and carom seed marinade, charred at the edges. Thirty-five minutes and no tandoor required.',
    meta: 'Cubes of firm white fish marinated in thick yoghurt, ginger, garlic, carom and chilli, then grilled until charred.',
    kw: ['fish tikka', 'fish tikka recipe', 'tandoori fish', 'grilled fish tikka', 'indian fish starter'],
    why: 'Marinate fish for twenty minutes and no longer. Yoghurt and lemon are acidic and fish protein is fragile: past half an hour the surface goes chalky and the cubes fall apart on the skewer. Carom seed is the flavour people cannot place in a good fish tikka — it tastes of thyme, cuts oil, and traditionally sits with fish for exactly that reason.',
    ing: [
      '700 g firm white fish such as monkfish or cod loin, in 4 cm cubes',
      '150 g thick Greek yoghurt',
      '1 tbsp ginger and garlic paste',
      '1 tsp carom seeds (ajwain)',
      '1.5 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp garam masala',
      '2 tbsp gram flour',
      '2 tbsp lemon juice',
      '1 tsp fine sea salt',
      '2 tbsp mustard oil or vegetable oil',
      '1 red onion, in petals',
      '1 lemon, in wedges'
    ],
    st: [
      'Toast the gram flour in a dry pan for 2 minutes, until it smells nutty. Cool.',
      'Whisk the yoghurt with the toasted gram flour, ginger and garlic paste, carom, chilli powder, turmeric, garam masala, lemon juice, salt and oil.',
      'Fold the fish through and marinate 20 minutes, no longer.',
      'Heat the grill to its highest setting, or a griddle pan until it smokes.',
      'Thread the fish onto skewers with the onion petals between.',
      'Grill 6 minutes, turning once, until charred at the corners and just opaque through.',
      'Rest 3 minutes off the heat.',
      'Serve with the lemon wedges.'
    ],
    tips: [
      'Twenty minutes in the marinade, never more.',
      'Toast the gram flour or the marinade tastes raw.',
      'Charred corners, not an even colour — that is the point of tikka.'
    ],
    pair: ['Mint chutney', 'Sliced onion with lemon', 'Tandoori roti'],
    store: 'Best hot. Keeps 1 day refrigerated and is good cold in a wrap.',
    nut: [275, 36, 9, 11, 1, 4, 720]
  },

  'prawn-masala': {
    d: 'Prawns in a quick coastal gravy of onion, tomato and curry leaf. Thirty-five minutes, and the prawns cook in four of them.',
    meta: 'Prawns simmered briefly in a south Indian onion, tomato and curry leaf masala with mustard seeds and coconut.',
    kw: ['prawn masala', 'prawn masala recipe', 'indian prawn curry', 'shrimp masala', 'coastal prawn curry'],
    why: 'Make the whole gravy before the prawns go anywhere near it. Prawns need three to four minutes and are ruined by six, so the sauce has to be finished and tasted first — then the prawns go in, the pan comes off, and the residual heat does the rest. A prawn that has gone rubbery cannot be brought back.',
    ing: [
      '600 g raw king prawns, peeled and deveined',
      '3 tbsp coconut oil',
      '1 tsp mustard seeds',
      '20 curry leaves',
      '2 onions, finely chopped',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, chopped',
      '2 green chillies, slit',
      '1.5 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp ground coriander',
      '3 tbsp desiccated coconut',
      '1.25 tsp fine sea salt',
      '150 ml water',
      '1 tbsp lemon juice',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the coconut oil and pop the mustard seeds for 30 seconds.',
      'Add the curry leaves and let them crackle for 10 seconds.',
      'Add the onions and fry 8 minutes, until golden.',
      'Stir in the ginger and garlic paste and the chillies and cook 2 minutes.',
      'Add the chilli powder, turmeric and coriander and cook 20 seconds.',
      'Add the tomatoes and salt and cook 6 minutes, until pulpy and the oil shows.',
      'Stir in the coconut and the water and simmer 3 minutes. Taste and correct the salt now.',
      'Add the prawns, stir once, and cook 3 minutes until they turn pink and curl.',
      'Take the pan off the heat, stir in the lemon juice and scatter the coriander over.'
    ],
    tips: [
      'Finish and taste the gravy before the prawns go in.',
      'Three minutes for the prawns, then off the heat.',
      'Coconut oil rather than vegetable — it is half the flavour.'
    ],
    pair: ['Steamed rice', 'Appam', 'Kachumber'],
    store: 'Best fresh. Keeps 1 day refrigerated; do not reheat hard.',
    nut: [330, 33, 13, 17, 4, 7, 940]
  },

  'khichdi': {
    d: 'Rice and split moong cooked soft together with turmeric and ghee. What Indian households eat when they are ill, and what they eat when they are tired.',
    meta: 'Rice and split yellow moong dal cooked together with turmeric, cumin and ghee to a soft, savoury porridge.',
    kw: ['khichdi', 'khichdi recipe', 'moong dal khichdi', 'indian rice and lentils', 'comfort food khichdi'],
    why: 'Roast the moong dal dry for two minutes before it meets the rice. It is a small step that turns the whole dish from bland to nutty, and it is the difference between khichdi as invalid food and khichdi as something you would choose. The ratio matters too: one part dal to one part rice, and five parts water, gives the soft-set texture. Less water gives you pilaf.',
    ing: [
      '150 g split yellow moong dal',
      '150 g basmati rice',
      '3 tbsp ghee',
      '1 tsp cumin seeds',
      '1 pinch asafoetida',
      '2.5 cm ginger, grated',
      '2 green chillies, slit',
      '0.5 tsp ground turmeric',
      '1.5 tsp fine sea salt',
      '1.5 litres water',
      '1 tomato, chopped',
      '2 tbsp chopped coriander leaves',
      '1 tbsp ghee, for finishing'
    ],
    st: [
      'Toast the moong dal in a dry pan over a medium heat for 2 minutes, until it smells nutty.',
      'Rinse the dal and rice together until the water runs clear.',
      'Heat the ghee in a heavy pan and fry the cumin seeds and asafoetida for 30 seconds.',
      'Add the ginger and chillies and cook 1 minute.',
      'Add the tomato and turmeric and cook 3 minutes.',
      'Tip in the drained rice and dal and turn them in the ghee for 2 minutes.',
      'Pour in the water, add the salt, and bring to the boil.',
      'Turn the heat low, cover, and cook 20 minutes, stirring twice, until both grains have collapsed and it is soft and loose.',
      'Rest 5 minutes off the heat.',
      'Stir in the coriander, pour the finishing ghee over, and serve.'
    ],
    tips: [
      'Dry-roast the dal. It is two minutes and it changes everything.',
      'Five parts water to one of grain, for softness.',
      'A spoon of ghee poured over at the table, not stirred in earlier.'
    ],
    pair: ['Plain yoghurt', 'Mango pickle', 'Papad'],
    store: 'Keeps 2 days refrigerated. It thickens; loosen with hot water when reheating.',
    nut: [420, 15, 62, 13, 7, 3, 760]
  },

  'veg-biryani': {
    d: 'Vegetables and part-cooked rice layered with saffron milk and fried onion, then sealed and steamed. The dum method, done properly.',
    meta: 'Layered vegetable biryani with basmati parboiled to seventy per cent, saffron milk, fried onions and a sealed dum steam.',
    kw: ['veg biryani', 'vegetable biryani recipe', 'dum biryani', 'hyderabadi veg biryani', 'layered rice recipe'],
    why: 'The rice is boiled to seventy per cent and not a grain more. It finishes in the steam of the sealed pot, and rice that went in fully cooked comes out as paste. Test by pressing a grain: it should break into three with a hard white core still visible. Seal the lid with foil or dough — the steam is the cooking, and a lid that lets it out gives you dry rice on top and wet underneath.',
    ing: [
      '400 g basmati rice',
      '3 onions, finely sliced',
      '150 ml vegetable oil, for frying the onions',
      '300 g mixed carrot, green beans and cauliflower, in 2 cm pieces',
      '150 g frozen peas',
      '200 g thick natural yoghurt',
      '2 tbsp ginger and garlic paste',
      '2 green chillies, slit',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1.5 tsp garam masala',
      '4 green cardamom pods',
      '4 cloves',
      '5 cm cinnamon stick',
      '2 bay leaves',
      '1 tsp saffron threads soaked in 4 tbsp warm milk',
      '3 tbsp ghee',
      '2.5 tsp fine sea salt',
      '3 tbsp chopped mint leaves',
      '3 tbsp chopped coriander leaves',
      '3 litres water, for parboiling'
    ],
    st: [
      'Soak the rice in cold water for 20 minutes, then drain.',
      'Fry the onions in the oil over a medium heat for 15 minutes, until dark brown and crisp. Drain on paper.',
      'Mix the vegetables with the yoghurt, ginger and garlic paste, chillies, chilli powder, turmeric, garam masala, half the fried onions and 1 tsp of the salt. Leave 15 minutes.',
      'Bring the water to a rolling boil with the remaining salt, the cardamom, cloves, cinnamon and bay.',
      'Add the rice and boil 5 minutes, until a grain breaks into three with a white core. Drain at once.',
      'Spread the marinated vegetables in a heavy pot with 2 tbsp of the ghee.',
      'Cover with the drained rice, then scatter over the remaining fried onions, the mint and coriander.',
      'Spoon the saffron milk over in stripes and dot with the last of the ghee.',
      'Cover the pot with foil, press the lid down hard on top, and cook on the lowest heat for 25 minutes.',
      'Rest sealed for 10 minutes, then open and lift the layers with a flat spoon rather than stirring.'
    ],
    tips: [
      'Seventy per cent rice: it breaks in three with a white core.',
      'Seal with foil under the lid or the steam escapes.',
      'Lift to serve, never stir, or the grains break.'
    ],
    pair: ['Cucumber and mint raita', 'Mirchi ka salan', 'Papad'],
    store: 'Keeps 3 days refrigerated. Reheat covered with a splash of water.',
    nut: [545, 12, 78, 21, 6, 8, 980]
  },

  'poha': {
    d: 'Flattened rice rinsed, tossed with turmeric, mustard seed and peanuts, and eaten within ten minutes. Central India\'s breakfast.',
    meta: 'Flattened rice rinsed and steamed briefly with mustard seeds, curry leaves, turmeric, onion and roasted peanuts.',
    kw: ['poha', 'poha recipe', 'flattened rice breakfast', 'indori poha', 'kanda poha'],
    why: 'Rinse the poha in a sieve under running water for about fifteen seconds and then leave it alone. It carries on absorbing while it stands, so poha that felt right in the sieve is right in the pan five minutes later; poha soaked in a bowl turns to porridge. Use thick poha — the thin sort dissolves whatever you do.',
    ing: [
      '200 g thick flattened rice (poha)',
      '3 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '15 curry leaves',
      '2 green chillies, finely chopped',
      '1 onion, finely chopped',
      '1 potato, in 1 cm dice',
      '0.5 tsp ground turmeric',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '60 g roasted peanuts',
      '2 tbsp chopped coriander leaves',
      '1 lemon, in wedges'
    ],
    st: [
      'Tip the poha into a sieve and rinse under running water for 15 seconds, turning it with your fingers.',
      'Leave it in the sieve to drain and swell for 5 minutes.',
      'Heat the oil and pop the mustard seeds for 30 seconds.',
      'Add the curry leaves and chillies for 10 seconds.',
      'Add the potato and fry 6 minutes, until cooked through.',
      'Add the onion and fry 3 minutes, until soft.',
      'Stir in the turmeric, sugar and salt.',
      'Fold in the drained poha and the peanuts and toss gently for 2 minutes, until heated and yellow throughout.',
      'Take off the heat, fold through the coriander, and serve with lemon wedges.'
    ],
    tips: [
      'Rinse in a sieve, never soak in a bowl.',
      'Thick poha only.',
      'Fold rather than stir, or it turns to mush.'
    ],
    pair: ['Masala chai', 'Coconut chutney', 'Sev scattered over'],
    store: 'Eat fresh. It dries out within the hour and does not reheat well.',
    nut: [415, 10, 62, 15, 5, 5, 690]
  },

  'upma': {
    d: 'Semolina roasted and steamed with mustard seed, curry leaf and vegetables. Ready in twenty-five minutes and the south Indian weekday breakfast.',
    meta: 'Roasted coarse semolina cooked with mustard seeds, urad dal, curry leaves and vegetables into a soft savoury porridge.',
    kw: ['upma', 'upma recipe', 'rava upma', 'south indian breakfast', 'semolina upma'],
    why: 'Roast the semolina dry until it smells like toast and no longer sticks together, then let it cool before it meets the water. Unroasted semolina turns gluey; roasted, the grains stay separate. Pour the semolina into boiling water in a thin stream with the other hand stirring, or you get lumps you will never break up.',
    ing: [
      '200 g coarse semolina (rava)',
      '3 tbsp ghee',
      '1 tsp mustard seeds',
      '1 tbsp split urad dal',
      '1 tbsp cashew nuts',
      '15 curry leaves',
      '2 green chillies, chopped',
      '1 onion, finely chopped',
      '2.5 cm ginger, grated',
      '1 carrot, finely diced',
      '80 g frozen peas',
      '1.5 tsp fine sea salt',
      '750 ml water',
      '2 tbsp chopped coriander leaves',
      '1 tbsp lemon juice'
    ],
    st: [
      'Roast the semolina in a dry pan over a medium heat for 4 minutes, stirring, until it smells toasty. Tip onto a plate to cool.',
      'Heat the ghee in the same pan and pop the mustard seeds for 30 seconds.',
      'Add the urad dal and cashews and fry 1 minute, until golden.',
      'Add the curry leaves, chillies and ginger for 20 seconds.',
      'Add the onion and fry 4 minutes, until soft.',
      'Add the carrot and peas and cook 3 minutes.',
      'Pour in the water, add the salt, and bring to a rolling boil.',
      'Turn the heat low and pour in the semolina in a thin stream, stirring constantly with the other hand.',
      'Cook 4 minutes, stirring, until it thickens and pulls from the sides.',
      'Cover and rest 5 minutes off the heat, then fork through the coriander and lemon juice.'
    ],
    tips: [
      'Roast the semolina and cool it before it meets water.',
      'Thin stream in, constant stirring, no lumps.',
      'Rest covered for five minutes — it finishes swelling.'
    ],
    pair: ['Coconut chutney', 'Filter coffee', 'A wedge of lemon'],
    store: 'Best fresh. It sets firm when cold; steam to reheat.',
    nut: [380, 9, 56, 13, 4, 4, 800]
  },

  'medu-vada': {
    d: 'Doughnut-shaped urad dal fritters, crisp outside and airy in. The hardest simple thing in a south Indian kitchen.',
    meta: 'Ground urad dal batter beaten until aerated, shaped into rings and deep fried until crisp outside and soft within.',
    kw: ['medu vada', 'medu vada recipe', 'urad dal vada', 'south indian fritters', 'crispy vada'],
    why: 'Grind the dal with as little water as you can bear and then beat the batter hard for five minutes, lifting it as you go. The beating is the whole recipe: it whips air into the batter, and a spoonful dropped into water should float. Batter that sinks makes heavy, oily vada no matter how hot the oil is. Wet hands, not floured, for shaping.',
    ing: [
      '250 g split urad dal (skinless black gram)',
      '4 tbsp cold water, or as little as possible',
      '2.5 cm ginger, finely chopped',
      '2 green chillies, finely chopped',
      '15 curry leaves, chopped',
      '0.5 tsp whole black peppercorns, crushed',
      '1.5 tsp fine sea salt',
      '1 pinch asafoetida',
      '700 ml vegetable oil, for frying'
    ],
    st: [
      'Soak the urad dal in cold water for 4 hours, then drain thoroughly.',
      'Grind to a thick, fluffy paste, adding the cold water a spoonful at a time. Use as little as you can.',
      'Beat the batter hard with your hand or a spoon for 5 minutes, lifting and folding.',
      'Test it: a small spoonful dropped into a glass of water should float. If it sinks, beat 2 minutes more.',
      'Fold in the ginger, chillies, curry leaves, pepper, salt and asafoetida.',
      'Heat the oil to 170C.',
      'Wet your palm, take a lump of batter, flatten it and press a hole through the middle with a wet thumb.',
      'Slide four vada into the oil and fry 5 minutes, turning once, until deep gold.',
      'Drain on a rack and repeat with the rest.',
      'Serve immediately, while the outside is still crisp.'
    ],
    tips: [
      'The float test decides whether they will be light.',
      'As little water as possible in the grinding.',
      'Wet hands for shaping, and work quickly.'
    ],
    pair: ['Coconut chutney', 'Sambar', 'Filter coffee'],
    store: 'Eat within the hour. They soften and cannot be revived.',
    nut: [325, 13, 34, 15, 7, 2, 730],
    rest: [240, 'soaking the dal']
  },

  'uttapam': {
    d: 'A thick dosa batter poured small and pressed with onion, tomato and chilli. Softer than a dosa and easier to get right.',
    meta: 'Fermented rice and urad dal batter poured thick and topped with onion, tomato and chilli, cooked on one side then flipped.',
    kw: ['uttapam', 'uttapam recipe', 'onion uttapam', 'south indian pancake', 'dosa batter uttapam'],
    why: 'Uttapam wants batter a day past its best — slightly sour and slightly thicker than dosa batter, which is exactly what a dosa cook throws away. Put the toppings on the raw upper surface and press them in with the back of a spoon; scattered on loose, they fall off at the flip. One flip only, and thirty seconds on the second side.',
    ing: [
      '200 g idli rice or short-grain rice',
      '75 g split urad dal',
      '0.5 tsp fenugreek seeds',
      '1.5 tsp fine sea salt',
      '250 ml water, plus more for grinding',
      '1 red onion, finely chopped',
      '2 tomatoes, deseeded and finely chopped',
      '2 green chillies, finely chopped',
      '2 tbsp chopped coriander leaves',
      '4 tbsp sesame oil, for the pan'
    ],
    st: [
      'Soak the rice in cold water, and the urad dal with the fenugreek in a separate bowl, for 5 hours.',
      'Grind the dal to a light fluffy paste, then the rice to a slightly grainy one, and mix them with the salt.',
      'Cover and leave in a warm place for 10 hours, until risen and smelling sour.',
      'Stir the batter down and loosen with the water to the thickness of double cream.',
      'Heat a heavy frying pan over a medium heat and brush with sesame oil.',
      'Pour a ladle of batter into a thick round about 15 cm across. Do not spread it thin.',
      'Scatter onion, tomato, chilli and coriander over the wet surface and press them in with the back of a spoon.',
      'Drizzle a teaspoon of oil round the edge and cook 4 minutes, until the underside is golden and the top has set.',
      'Flip and cook 30 seconds only.',
      'Repeat with the rest of the batter, serving each one as it comes off the pan.'
    ],
    tips: [
      'Day-old batter is better than fresh here.',
      'Press the toppings in or they fall off.',
      'Thirty seconds on the second side, no more.'
    ],
    pair: ['Coconut chutney', 'Sambar', 'Tomato chutney'],
    store: 'The batter keeps 4 days refrigerated and improves. Cooked uttapam does not keep.',
    nut: [310, 10, 52, 8, 4, 4, 700],
    rest: [900, 'fermenting the batter']
  },

  'veg-momos': {
    d: 'Pleated Himalayan dumplings of finely chopped cabbage and carrot, steamed and eaten with a fiery tomato chutney.',
    meta: 'Nepalese steamed dumplings filled with finely chopped cabbage, carrot and spring onion, pleated and served with tomato achar.',
    kw: ['veg momos', 'momos recipe', 'steamed momos', 'nepali momo', 'momo chutney'],
    why: 'Salt the shredded cabbage and let it stand fifteen minutes, then wring it out in a cloth. Cabbage is mostly water and the filling turns the wrapper to paste from the inside if you skip this — you will be surprised how much comes out. The wrapper is rolled thin at the edge and left thicker in the middle, so the pleats seal and the base does not tear.',
    ing: [
      '300 g plain flour',
      '160 ml warm water',
      '0.5 tsp fine sea salt, for the dough',
      '300 g white cabbage, very finely shredded',
      '1 tsp fine sea salt, for drawing water',
      '2 carrots, coarsely grated',
      '6 spring onions, finely sliced',
      '4 garlic cloves, crushed',
      '2.5 cm ginger, grated',
      '2 tbsp vegetable oil',
      '1 tbsp light soy sauce',
      '1 tsp ground black pepper',
      '0.5 tsp fine sea salt, for the filling',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Mix the flour, dough salt and warm water into a firm dough and knead 8 minutes until smooth. Rest covered 30 minutes.',
      'Toss the cabbage with the drawing salt and leave 15 minutes, then wring it dry in a clean cloth.',
      'Mix the cabbage with the carrot, spring onions, garlic, ginger, oil, soy, pepper, filling salt and coriander.',
      'Divide the dough into 24 pieces and roll each into an 8 cm round, thinner at the edge than the middle.',
      'Put a spoonful of filling in each and pleat the edge round, twisting the top closed.',
      'Line a steamer with baking paper and oil it.',
      'Set the momos in, well apart, and steam over rapidly boiling water for 12 minutes.',
      'Let them stand 1 minute before lifting, or the wrappers tear.',
      'Serve hot with tomato chutney.'
    ],
    tips: [
      'Wring the cabbage out or the filling floods the wrapper.',
      'Thin at the edge, thicker in the middle.',
      'Stand a minute after steaming before you lift them.'
    ],
    pair: ['Tomato and chilli achar', 'Clear vegetable broth', 'Pickled radish'],
    store: 'Freeze uncooked on a tray for 2 months and steam from frozen, adding 4 minutes.',
    nut: [340, 10, 62, 7, 5, 5, 830]
  },

  'ras-malai': {
    d: 'Discs of fresh cheese poached, squeezed and soaked in cardamom and saffron milk. The dessert Bengali sweet shops are judged on.',
    meta: 'Homemade chenna kneaded smooth, poached in syrup, flattened and steeped in reduced cardamom and saffron milk with pistachios.',
    kw: ['ras malai', 'ras malai recipe', 'rasmalai', 'indian milk dessert', 'bengali sweet'],
    why: 'Knead the drained chenna with the heel of your hand for a full eight minutes, until it stops being grainy and goes greasy and smooth. That is the entire difference between ras malai that stays soft and ras malai that sets into rubber. The discs also double in the syrup, so make them half the size you want and leave room in the pan.',
    ing: [
      '2 litres whole milk, for the chenna',
      '4 tbsp lemon juice',
      '1 tbsp semolina',
      '150 g caster sugar',
      '750 ml water',
      '1 litre whole milk, for the rabri',
      '100 g caster sugar, for the rabri',
      '8 green cardamom pods, seeds crushed',
      '1 tsp saffron threads',
      '40 g pistachios, slivered',
      '20 g flaked almonds'
    ],
    st: [
      'Bring the 2 litres of milk to the boil, take it off the heat and stir in the lemon juice until it splits.',
      'Strain through muslin, rinse under cold water, and hang for 30 minutes to drain.',
      'Knead the chenna with the semolina on a work surface for 8 minutes, until completely smooth and slightly greasy.',
      'Roll into 16 balls and flatten each into a 4 cm disc.',
      'Boil the 150 g sugar with the water in a wide pan.',
      'Slide the discs in, cover, and boil hard for 12 minutes. They will double.',
      'Meanwhile simmer the 1 litre of milk with the rabri sugar, cardamom and saffron for 25 minutes, until reduced by a third.',
      'Lift the discs out of the syrup, press each gently between your palms to squeeze the syrup out, and drop them into the warm rabri.',
      'Cool, then refrigerate 4 hours so they take up the milk.',
      'Serve cold, scattered with pistachios and almonds.'
    ],
    tips: [
      'Eight minutes of kneading. Set a timer.',
      'They double in the syrup — leave room.',
      'Squeeze the syrup out before they go into the milk.'
    ],
    pair: ['Strong masala chai', 'Gulab jamun', 'Fresh mango'],
    store: 'Keeps 4 days refrigerated in its milk and is better on the second day.',
    nut: [385, 13, 48, 16, 1, 45, 180],
    rest: [270, 'chilling in the rabri']
  },

  'kulfi': {
    d: 'Milk boiled down by half and frozen hard in moulds. Denser than ice cream because it is never churned.',
    meta: 'Whole milk reduced by half with sugar and cardamom, blended with nuts and frozen in moulds without churning.',
    kw: ['kulfi', 'kulfi recipe', 'indian ice cream', 'malai kulfi', 'pistachio kulfi'],
    why: 'Kulfi is not churned, so the smoothness has to come from the reduction — boiling the milk down by half concentrates the solids until there is not enough free water left to form large ice crystals. Scrape the skin back into the pan as it forms; that caramelised film is where the flavour is, and left on the surface it becomes rubbery threads in the finished kulfi.',
    ing: [
      '1.5 litres whole milk',
      '150 g caster sugar',
      '8 green cardamom pods, seeds crushed',
      '0.5 tsp saffron threads',
      '3 tbsp cornflour mixed with 4 tbsp cold milk',
      '60 g pistachios, finely chopped',
      '40 g almonds, finely chopped'
    ],
    st: [
      'Bring the milk to the boil in a wide heavy pan, then turn it down to a steady simmer.',
      'Simmer 35 minutes, stirring every few minutes and scraping the skin from the sides back into the pan.',
      'When it has reduced by half, stir in the sugar, cardamom and saffron.',
      'Stir the cornflour slurry and pour it in, stirring hard, and cook 3 minutes until it thickens.',
      'Take off the heat and stir in most of the pistachios and almonds, keeping some back.',
      'Cool to room temperature, stirring now and then to stop a skin forming.',
      'Pour into kulfi moulds or small cups and freeze 6 hours, until solid.',
      'Dip the moulds in warm water for 10 seconds to turn them out.',
      'Scatter the reserved nuts over and serve at once.'
    ],
    tips: [
      'Scrape the skin back in as it forms.',
      'Reduced by half, not a third — that is what stops ice crystals.',
      'Ten seconds in warm water and it slides straight out.'
    ],
    pair: ['Falooda', 'Rose syrup', 'Fresh mango'],
    store: 'Keeps 1 month frozen, wrapped, without losing texture.',
    nut: [340, 11, 38, 16, 2, 34, 130],
    rest: [360, 'freezing']
  },

  'gajar-ka-halwa': {
    d: 'Grated carrot cooked down in milk and ghee until it is dark, glossy and barely a vegetable any more. North India\'s winter pudding.',
    meta: 'Grated carrots slow-cooked in whole milk with ghee, sugar and cardamom until reduced and glossy, finished with nuts.',
    kw: ['gajar ka halwa', 'gajar halwa recipe', 'carrot halwa', 'indian carrot pudding', 'winter indian dessert'],
    why: 'Cook the carrot in the milk until the milk has completely gone before the sugar goes anywhere near it. Sugar added early draws water out of the carrot and stalls the whole thing — you end up simmering in syrup for an hour and it never darkens. Grate on the coarse side of the box grater; fine gratings turn to paste.',
    ing: [
      '1 kg carrots, coarsely grated',
      '750 ml whole milk',
      '5 tbsp ghee',
      '180 g caster sugar',
      '8 green cardamom pods, seeds crushed',
      '50 g raisins',
      '50 g cashew nuts, halved',
      '40 g pistachios, slivered',
      '3 tbsp milk powder'
    ],
    st: [
      'Fry the cashews and raisins in 1 tbsp of the ghee for 2 minutes, until the nuts colour and the raisins swell. Lift out.',
      'Put the grated carrot and the milk in a wide heavy pan and bring to a simmer.',
      'Cook uncovered for 30 minutes, stirring every 5 minutes, until the milk has almost entirely gone.',
      'Add the remaining ghee and fry the carrot in it for 8 minutes, stirring, until it darkens.',
      'Stir in the sugar. It will loosen again — keep cooking.',
      'Cook 10 minutes more, until thick and glossy and the ghee shows at the edges.',
      'Stir in the milk powder and cardamom and cook 2 minutes.',
      'Fold through the fried cashews and raisins.',
      'Serve warm, scattered with pistachios.'
    ],
    tips: [
      'Milk gone before sugar goes in.',
      'Coarse grate, not fine.',
      'It is ready when the ghee separates at the edge.'
    ],
    pair: ['A scoop of vanilla ice cream', 'Masala chai', 'Rabri'],
    store: 'Keeps 5 days refrigerated and freezes 2 months. Reheat with a spoon of ghee.',
    nut: [420, 8, 52, 21, 5, 42, 160]
  },

  'falooda': {
    d: 'Rose syrup, soaked basil seeds, vermicelli, milk and ice cream layered in a tall glass. Half drink and half pudding.',
    meta: 'A layered dessert drink of rose syrup, soaked basil seeds, cooked vermicelli, chilled milk and ice cream.',
    kw: ['falooda', 'falooda recipe', 'rose falooda', 'indian dessert drink', 'kulfi falooda'],
    why: 'Soak the basil seeds in plenty of cold water for at least twenty minutes and they swell to eight times their size with a clear jelly around each one. Rushed, they swell in the glass instead and drink like grit. Everything goes into the glass cold — a warm layer melts the ice cream and the whole thing collapses into pink milk.',
    ing: [
      '3 tbsp basil seeds (sabja)',
      '300 ml cold water, for soaking',
      '60 g falooda vermicelli or fine wheat vermicelli',
      '6 tbsp rose syrup',
      '700 ml whole milk, well chilled',
      '2 tbsp caster sugar',
      '4 scoops vanilla or kulfi ice cream',
      '2 tbsp pistachios, chopped',
      '2 tbsp almonds, slivered'
    ],
    st: [
      'Soak the basil seeds in the cold water for 20 minutes, until each is surrounded by clear jelly.',
      'Boil the vermicelli for 4 minutes, drain, rinse under cold water and chill.',
      'Stir the sugar into the chilled milk until it dissolves.',
      'Put 1 tbsp of rose syrup in the bottom of each of four tall glasses.',
      'Add a spoonful of drained basil seeds, then a spoonful of vermicelli.',
      'Pour the cold milk in slowly down the side of the glass, to about three quarters full.',
      'Add another half tablespoon of rose syrup so it streaks down through the milk.',
      'Top each glass with a scoop of ice cream.',
      'Scatter the pistachios and almonds over and serve with a long spoon and a straw.'
    ],
    tips: [
      'Twenty minutes for the basil seeds, in plenty of water.',
      'Everything cold before it meets the ice cream.',
      'Pour the milk down the side so the layers stay separate.'
    ],
    pair: ['Kulfi', 'A hot summer afternoon', 'Salted pistachios'],
    store: 'Assemble to order. The components keep 2 days refrigerated separately.',
    nut: [395, 11, 62, 12, 3, 48, 150]
  },

  'shrikhand': {
    d: 'Yoghurt hung until it is thick as cream cheese, then beaten with sugar, saffron and cardamom. Fifteen minutes of work and a night of waiting.',
    meta: 'Whole milk yoghurt strained overnight and whisked with icing sugar, saffron and cardamom into a thick set dessert.',
    kw: ['shrikhand', 'shrikhand recipe', 'strained yoghurt dessert', 'kesar shrikhand', 'gujarati dessert'],
    why: 'Hang the yoghurt overnight and you lose about half its weight in whey — that is not a loss, it is the recipe. Anything less and the shrikhand will not hold a shape on the spoon. Use icing sugar rather than caster: granulated sugar never fully dissolves in something this cold and thick, and you can feel it.',
    ing: [
      '1 kg whole milk natural yoghurt',
      '150 g icing sugar',
      '0.5 tsp saffron threads',
      '2 tbsp warm milk',
      '8 green cardamom pods, seeds ground',
      '2 tbsp pistachios, slivered',
      '1 tbsp almonds, slivered'
    ],
    st: [
      'Line a sieve with muslin, tip the yoghurt in, gather the corners and tie.',
      'Hang over a bowl in the refrigerator for 8 hours, until it has lost about half its weight.',
      'Soak the saffron in the warm milk for 10 minutes, then crush the threads against the side of the cup.',
      'Scrape the strained yoghurt into a bowl and whisk in the icing sugar until completely smooth.',
      'Whisk in the saffron milk and the ground cardamom.',
      'Pass the whole lot through a sieve once for a finer texture.',
      'Chill 1 hour.',
      'Spoon into small bowls and scatter the pistachios and almonds over.'
    ],
    tips: [
      'Eight hours of hanging, and expect to lose half the weight.',
      'Icing sugar, not caster — you can feel caster.',
      'One pass through a sieve makes it silky.'
    ],
    pair: ['Puri', 'Fresh mango', 'Masala chai'],
    store: 'Keeps 4 days refrigerated, covered.',
    nut: [285, 9, 42, 9, 1, 40, 110],
    rest: [540, 'straining the yoghurt']
  },

  'rasam': {
    d: 'A thin, sour, peppery broth of tamarind and tomato, drunk from a cup or poured over rice. South India\'s answer to everything.',
    meta: 'A thin south Indian tamarind and tomato broth spiced with freshly pounded pepper and cumin, tempered with mustard seeds.',
    kw: ['rasam', 'rasam recipe', 'tomato rasam', 'south indian rasam', 'pepper rasam'],
    why: 'Rasam is never boiled once the tamarind and rasam powder are in. Bring it just to the point where a froth rises up the sides and take it off — boiling drives off the volatile aromatics that are the whole point, and turns the pepper harsh and flat. It should be thin enough to drink, not a soup you eat with a spoon.',
    ing: [
      '1 tbsp tamarind paste',
      '600 ml hot water',
      '3 tomatoes, roughly chopped',
      '1 tsp black peppercorns',
      '1 tsp cumin seeds',
      '3 garlic cloves',
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '2 dried red chillies',
      '15 curry leaves',
      '1 pinch asafoetida',
      '0.5 tsp ground turmeric',
      '1.5 tsp fine sea salt',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Dissolve the tamarind paste in the hot water and set aside.',
      'Pound the peppercorns, cumin and garlic to a coarse paste in a mortar.',
      'Squash the tomatoes with your hands into a pan.',
      'Add the tamarind water, turmeric and salt and simmer 10 minutes, until the raw tamarind smell has gone.',
      'Stir in the pounded pepper and cumin paste and cook 4 minutes.',
      'Watch for a froth rising up the sides of the pan, then take it off the heat at once. Do not let it boil.',
      'Heat the oil in a small pan and pop the mustard seeds for 30 seconds.',
      'Add the chillies, curry leaves and asafoetida and fry 15 seconds.',
      'Pour the tempering over the rasam and cover for 2 minutes.',
      'Stir in the coriander and serve hot, in cups or over rice.'
    ],
    tips: [
      'Never boil it after the tamarind goes in.',
      'Pound the pepper for this pot; ready-ground tastes flat.',
      'Thin enough to drink is correct.'
    ],
    pair: ['Steamed rice and ghee', 'Papad', 'A simple vegetable poriyal'],
    store: 'Keeps 3 days refrigerated. Reheat without boiling.',
    nut: [110, 3, 12, 6, 3, 6, 890]
  },

  'coconut-chutney': {
    d: 'Fresh coconut ground with green chilli and roasted gram, finished with a mustard seed tempering. The thing every south Indian breakfast comes with.',
    meta: 'Fresh grated coconut ground with roasted gram dal, green chilli and ginger, tempered with mustard seeds and curry leaves.',
    kw: ['coconut chutney', 'coconut chutney recipe', 'nariyal chutney', 'dosa chutney', 'south indian chutney'],
    why: 'Roasted gram dal is what stops the chutney splitting into water and coconut within the hour. It has no other job and no substitute does it as well — it absorbs the water and holds the emulsion. Grind with ice-cold water: a warm grinder turns coconut oily and the chutney goes greasy and grey.',
    ing: [
      '150 g fresh or frozen grated coconut',
      '4 tbsp roasted gram dal (pottukadalai)',
      '2 green chillies',
      '2.5 cm ginger',
      '1 tsp fine sea salt',
      '150 ml ice-cold water',
      '2 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 dried red chilli, broken',
      '12 curry leaves',
      '1 pinch asafoetida'
    ],
    st: [
      'Put the coconut, roasted gram, green chillies, ginger and salt in a blender.',
      'Add half the ice-cold water and blend to a thick paste.',
      'Add the rest of the water a little at a time until it is the thickness of double cream.',
      'Scrape into a bowl.',
      'Heat the coconut oil in a small pan and pop the mustard seeds for 30 seconds.',
      'Add the dried chilli, curry leaves and asafoetida and fry 15 seconds, until the leaves crackle.',
      'Pour the tempering over the chutney.',
      'Stir it through just before serving, or leave it sitting on top.'
    ],
    tips: [
      'Roasted gram dal is what stops it splitting.',
      'Ice-cold water in the grinder.',
      'Temper last and pour it over hot.'
    ],
    pair: ['Dosa', 'Idli', 'Medu vada'],
    store: 'Keeps 2 days refrigerated. It thickens; loosen with cold water.',
    nut: [165, 4, 8, 14, 4, 2, 400]
  },

  'tandoori-roti': {
    d: 'Wholemeal flatbread slapped onto the side of a very hot oven and blistered. No tandoor: a cast-iron pan upside down does it.',
    meta: 'Wholemeal dough rolled thick and cooked on an inverted cast-iron pan until blistered and charred in patches.',
    kw: ['tandoori roti', 'tandoori roti recipe', 'roti without tandoor', 'wholemeal indian bread', 'tawa roti'],
    why: 'A tandoori roti is thicker than a chapati and cooked much harder, so it stays soft inside while the outside chars. Wet one face of the rolled dough before it goes on the metal — the water is what makes it stick to a vertical surface, which is how you get to blister the other side directly over the flame without it falling into the fire.',
    ing: [
      '400 g wholemeal flour (atta)',
      '1 tsp fine sea salt',
      '1 tsp caster sugar',
      '280 ml warm water',
      '2 tbsp vegetable oil',
      '4 tbsp water, for wetting',
      '2 tbsp vegetable oil, for brushing'
    ],
    st: [
      'Mix the flour, salt and sugar, then work in the warm water and oil to a soft dough.',
      'Knead 8 minutes until smooth and slightly tacky.',
      'Cover and rest 30 minutes.',
      'Divide into 8 and roll each into a round about 15 cm across and 4 mm thick — thicker than a chapati.',
      'Heat a cast-iron frying pan over a high heat for 5 minutes, then turn it upside down over the flame.',
      'Wet one face of a roti with water and slap it wet-side down onto the hot metal.',
      'Cook 90 seconds, until the upper surface puffs and dries.',
      'Turn the pan so the exposed face is over the flame and cook 30 seconds, until charred in patches.',
      'Lift off with tongs and brush with oil.',
      'Repeat with the rest, stacking them under a cloth.'
    ],
    tips: [
      'Thicker than a chapati, or it dries out.',
      'Wet one face so it sticks to the metal.',
      'Char in patches, not evenly — that is what tandoori means here.'
    ],
    pair: ['Dal makhani', 'Paneer butter masala', 'Sliced onion with lemon'],
    store: 'Best hot. Keeps 1 day wrapped; reheat directly over a flame for 20 seconds.',
    nut: [245, 8, 44, 5, 7, 2, 490]
  },

  'pani-puri': {
    d: 'Hollow crisp spheres filled with spiced water, potato and chickpea, eaten whole in one go. India\'s most-loved street snack.',
    meta: 'Crisp semolina puris filled with spiced mint and tamarind water, potato and chickpeas, assembled and eaten immediately.',
    kw: ['pani puri', 'pani puri recipe', 'golgappa', 'puchka', 'spiced water snack'],
    why: 'The puris puff because the dough is stiff and the oil is hot — a soft dough steams and stays flat, and oil under 190C lets them absorb rather than inflate. Roll thin, cut small, and fry in oil hot enough that they rise within five seconds. Then keep the pani ice cold and assemble one at a time: a filled puri has about twenty seconds before it collapses.',
    ing: [
      '150 g fine semolina',
      '2 tbsp plain flour',
      '0.5 tsp fine sea salt, for the dough',
      '90 ml warm water',
      '600 ml vegetable oil, for frying',
      '40 g mint leaves',
      '30 g coriander leaves',
      '3 green chillies',
      '2.5 cm ginger',
      '2 tbsp tamarind paste',
      '2 tsp chaat masala',
      '1 tsp roasted cumin powder',
      '1.5 tsp black salt',
      '700 ml ice-cold water',
      '2 potatoes, boiled and diced small',
      '200 g cooked chickpeas',
      '1 tsp Kashmiri chilli powder'
    ],
    st: [
      'Mix the semolina, plain flour and dough salt with the warm water into a very stiff dough. Knead 8 minutes.',
      'Cover with a damp cloth and rest 30 minutes.',
      'Roll the dough as thin as you can and cut 40 rounds about 4 cm across.',
      'Heat the oil to 190C and fry 6 rounds at a time, pressing them under with a slotted spoon until they puff, about 90 seconds each batch.',
      'Drain on a rack and cool completely — they crisp as they cool.',
      'Blend the mint, coriander, chillies, ginger, tamarind, chaat masala, cumin and black salt with a little of the cold water to a smooth paste.',
      'Stir the paste into the rest of the ice-cold water and chill 30 minutes.',
      'Toss the potato and chickpeas with the chilli powder and a pinch of salt.',
      'To serve, crack a hole in the top of each puri, spoon in a little filling, dip it full of cold pani.',
      'Eat it whole, immediately, and make the next one.'
    ],
    tips: [
      'Stiff dough and 190C oil, or they will not puff.',
      'Cool them completely before storing — warm puris go soft.',
      'Fill one at a time. Twenty seconds is all you get.'
    ],
    pair: ['Sweet tamarind chutney', 'Bhel puri', 'Cold lassi'],
    store: 'The puris keep 2 weeks airtight. The pani keeps 3 days refrigerated.',
    nut: [285, 8, 48, 8, 6, 5, 1150],
    rest: [60, 'resting the dough']
  },

  'dhokla': {
    d: 'A steamed savoury sponge of gram flour, sharp with lemon and sweet with a sugar tempering. Gujarat\'s teatime, and gluten-free by nature.',
    meta: 'Gram flour batter soured with lemon, raised with eno and steamed into a light savoury sponge, finished with a mustard and sugar tempering.',
    kw: ['dhokla', 'dhokla recipe', 'khaman dhokla', 'gujarati dhokla', 'steamed gram flour cake'],
    why: 'The raising agent goes in last and the batter goes straight into the steamer — you have about thirty seconds of usable lift before the bubbles collapse. Have the steamer already boiling and the tin already greased before you add it. The tempering is poured over while the dhokla is still warm so it soaks in rather than sitting on top.',
    ing: [
      '250 g gram flour (besan)',
      '200 ml water',
      '3 tbsp lemon juice',
      '1 tbsp caster sugar',
      '1.5 tsp fine sea salt',
      '2.5 cm ginger, grated',
      '2 green chillies, finely chopped',
      '0.25 tsp ground turmeric',
      '1 tbsp vegetable oil, for the batter',
      '1.5 tsp eno fruit salt or 1 tsp baking powder',
      '3 tbsp vegetable oil, for tempering',
      '1 tsp mustard seeds',
      '15 curry leaves',
      '3 green chillies, slit',
      '2 tbsp caster sugar, for tempering',
      '100 ml water, for tempering',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Whisk the gram flour, water, lemon juice, sugar, salt, ginger, chopped chillies, turmeric and batter oil into a smooth batter.',
      'Rest 15 minutes.',
      'Bring a steamer to a full boil and grease a 20 cm tin.',
      'Whisk the eno into the batter — it will froth — and pour it into the tin at once.',
      'Steam 20 minutes, until a skewer comes out clean.',
      'Cool 5 minutes, then cut into diamonds while still in the tin.',
      'Heat the tempering oil and pop the mustard seeds for 30 seconds.',
      'Add the curry leaves and slit chillies for 15 seconds, then the tempering sugar and water. Boil 1 minute.',
      'Pour the hot tempering evenly over the warm dhokla and let it soak in for 10 minutes.',
      'Scatter the coriander over and serve.'
    ],
    tips: [
      'Steamer boiling and tin greased before the eno goes in.',
      'Cut it in the tin while warm, not after it cools.',
      'The sugar tempering is what makes it taste Gujarati.'
    ],
    pair: ['Green chilli chutney', 'Masala chai', 'Fried green chillies'],
    store: 'Keeps 2 days refrigerated. Steam for 3 minutes to bring it back.',
    nut: [265, 11, 38, 8, 6, 12, 780]
  },

  'bhel-puri': {
    d: 'Puffed rice tossed at the last second with chutneys, onion, potato and sev. Bombay beach food, and it must be eaten inside two minutes.',
    meta: 'Puffed rice tossed with tamarind and mint chutneys, onion, potato, tomato and sev, assembled immediately before eating.',
    kw: ['bhel puri', 'bhel puri recipe', 'mumbai bhel', 'puffed rice chaat', 'indian street snack'],
    why: 'Everything is prepared separately and combined in the last thirty seconds. Puffed rice is hygroscopic to a degree that has to be seen: chutney-dressed bhel is crisp when you toss it and soggy by the time it reaches the table if you dawdle. Toss, plate, hand it over, eat.',
    ing: [
      '120 g puffed rice (murmura)',
      '60 g sev',
      '20 papdi crackers, crushed',
      '1 potato, boiled and diced small',
      '1 red onion, finely chopped',
      '1 tomato, deseeded and finely chopped',
      '4 tbsp tamarind chutney',
      '3 tbsp mint and coriander chutney',
      '1 tsp chaat masala',
      '0.5 tsp Kashmiri chilli powder',
      '0.5 tsp black salt',
      '3 tbsp chopped coriander leaves',
      '1 lemon, in wedges'
    ],
    st: [
      'Dry the puffed rice in a low oven for 5 minutes if it is at all soft, and cool it.',
      'Have every other ingredient chopped and within reach before you start.',
      'Put the puffed rice in a large bowl.',
      'Add the potato, onion, tomato and crushed papdi.',
      'Spoon in both chutneys, the chaat masala, chilli powder and black salt.',
      'Toss hard with two spoons for 15 seconds, until everything is coated.',
      'Fold through half the sev and the coriander.',
      'Pile into bowls, scatter the remaining sev over and serve with lemon wedges.',
      'Eat within 2 minutes.'
    ],
    tips: [
      'Everything ready before the chutney touches the rice.',
      'Fifteen seconds of tossing, then straight into bowls.',
      'Refresh soft puffed rice in a low oven first.'
    ],
    pair: ['Pani puri', 'Cutting chai', 'Sliced raw mango'],
    store: 'None. Assemble to order; the components keep 3 days separately.',
    nut: [305, 6, 52, 9, 5, 12, 980]
  }
};
