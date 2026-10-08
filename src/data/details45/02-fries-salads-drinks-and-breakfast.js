'use strict';

/**
 * Volume forty-five — fries, salads, drinks and breakfast, second part.
 *
 * One-pan sausage pasta and Mexican rice, a BLT, loaded sweet potatoes,
 * three kinds of fries, Nicoise, spinach and beetroot salads, a rice
 * salad, a protein smoothie, an oat milk latte, watermelon juice and a
 * strawberry mocktail, breakfast sandwiches and eggs Sardou. Times are the
 * recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'one-pan-sausage-pasta': {
    d: 'Sausages, pasta, tomatoes and spinach cooked together in one pan, with the pasta absorbing the sauce as it cooks.',
    meta: 'One pan sausage pasta: sausage, pasta, tomatoes and spinach cooked in one pan. Four servings, cooked for 20 minutes.',
    kw: ['one pan sausage pasta', 'one pot sausage pasta', 'sausage and tomato pasta in one pan', 'sausage pasta with spinach', 'sausage pasta in a single pan'],
    why: 'Sausage and pasta is a pairing that has been a weeknight standby in British kitchens for a long time, and the one-pan version is just the same dish with less washing up. The pasta cooks in the sauce, and the starch it releases thickens it.\n\nSqueeze the sausage meat out of the skins and brown it in a wide, deep pan for 6 minutes, breaking it into pieces. Add the onion and garlic and cook for 3 minutes. Pour in the tomatoes and stock and bring to the boil, then add the pasta. **Stir often at the start.** Pasta sticks to the base of the pan in the first two minutes, before the starch has gelled.\n\nCover and simmer for 10 minutes, stirring now and then, until the pasta is tender and the sauce has thickened. Add a splash of water if it looks dry.\n\nStir in the spinach to wilt it for a minute and serve with a scatter of cheese.',
    ing: [
      '400 g pork sausages',
      '1 onion, about 150 g, chopped',
      '3 cloves garlic, crushed',
      '400 g tinned chopped tomatoes',
      '600 ml chicken stock',
      '300 g penne',
      '100 g baby spinach',
      '1 tsp dried oregano',
      '1/2 tsp black pepper',
      '40 g cheddar, grated'
    ],
    st: [
      'Squeeze the sausage meat from the skins into a wide, deep pan and brown for 6 minutes, breaking it up.',
      'Add the onion for 3 minutes, then the garlic and oregano for 1 minute.',
      'Pour in the tomatoes and stock, bring to the boil and stir in the pasta.',
      'Cover and simmer for 10 minutes, stirring often, until the pasta is tender and the sauce has thickened.',
      'Stir in the spinach and pepper for 1 minute and serve with the cheese.'
    ],
    tips: [
      'Stir often at the start.',
      'Use a wide pan.',
      'Add water if the pasta looks dry.',
      'Add the spinach last.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Peas'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [657, 29, 70, 29, 6, 8, 1390]
  },

  'one-pan-mexican-rice': {
    d: 'Long-grain rice toasted in oil and cooked in tomato, onion and cumin stock with peas and carrots, in one pan.',
    meta: 'One pan Mexican rice: long-grain rice cooked with tomato, onion, cumin, peas and carrots. Four servings, cooked for 30 minutes.',
    kw: ['one pan mexican rice', 'mexican rice in one pan', 'spanish style mexican rice', 'tomato mexican rice with peas', 'easy mexican rice one pot'],
    why: 'This is what to make when the evening is warm and you want something to go with grilled chicken or a pan of beans. The rice is toasted first, which is what separates it from boiled rice with tomato stirred in.\n\nBlend the tomatoes, onion and garlic into a smooth sauce. Heat the oil in a wide pan and fry the rinsed, dried rice for 4 minutes, stirring, until it turns golden and smells nutty. Toasting coats the grains in oil, so they stay separate. **Rinse the rice and drain it well first.** Surface starch makes the grains gluey.\n\nPour in the tomato mixture and the stock, add the cumin, salt, peas and carrots, and bring to the boil. Cover tightly and cook on the lowest heat for 18 minutes without lifting the lid.\n\nRest off the heat for 5 minutes, fluff with a fork and serve. Add a little chopped jalapeno to the pan for gentle heat.',
    ing: [
      '250 g long-grain rice',
      '2 tbsp vegetable oil',
      '400 g tinned chopped tomatoes',
      '1 onion, about 150 g',
      '2 cloves garlic',
      '350 ml chicken stock',
      '1 tsp ground cumin',
      '1 tsp salt',
      '100 g frozen peas',
      '1 carrot, about 100 g, finely diced',
      '10 g coriander leaves'
    ],
    st: [
      'Rinse the rice until the water runs clear and drain well.',
      'Blend the tomatoes, onion and garlic until smooth.',
      'Fry the rice in the oil in a wide lidded pan for 4 minutes, stirring, until golden.',
      'Add the tomato mixture, stock, cumin, salt, peas and carrot, bring to the boil, cover and cook on the lowest heat for 18 minutes.',
      'Rest for 5 minutes, fluff with a fork and scatter with the coriander.'
    ],
    tips: [
      'Rinse and drain the rice.',
      'Toast it until golden.',
      'Do not lift the lid.',
      'Rest it before fluffing.'
    ],
    pair: ['Grilled chicken', 'Refried beans', 'Guacamole', 'Lime wedges'],
    store: 'Keeps in the fridge for 3 days. Cool within an hour and reheat until hot all the way through.',
    nut: [364, 8, 65, 8, 5, 7, 910]
  },

  'bacon-lettuce-and-tomato-sandwich': {
    d: 'Crisp bacon, crunchy lettuce, ripe tomato and mayonnaise between slices of toasted white bread.',
    meta: 'Bacon lettuce and tomato sandwich: crisp bacon, lettuce and tomato with mayonnaise on toasted bread. Two servings, cooked for 10 minutes.',
    kw: ['bacon lettuce and tomato sandwich', 'classic blt sandwich', 'blt sandwich with mayonnaise', 'toasted blt sandwich', 'crispy bacon blt'],
    why: 'This is what to make in high summer, when the tomatoes are ripe and heavy and need nothing but salt. A BLT is only as good as its tomato, and a hard, pale winter one makes a sad sandwich.\n\nCook the bacon until it is crisp but not brittle, about 10 minutes in a pan or in the oven at 200°C on a rack. Drain it on kitchen paper, because grease makes the bread soggy. Toast the bread on both sides. Slice the tomato thick and sprinkle it with salt and pepper, which pulls out the flavour. **Season the tomato.** Plain tomato slices taste of water.\n\nSpread the mayonnaise on the toast right to the edges. Build the sandwich in layers: lettuce first, which protects the bread, then tomato, then bacon.\n\nCut in half on the diagonal with a serrated knife and eat at once. Smoked streaky bacon gives the most flavour, though back bacon makes a meatier sandwich.',
    ing: [
      '8 rashers streaky bacon, about 160 g',
      '4 slices white bread, about 160 g',
      '2 tbsp mayonnaise',
      '2 tomatoes, about 250 g, thickly sliced',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '4 leaves cos lettuce, about 40 g'
    ],
    st: [
      'Cook the bacon in a pan for 8 to 10 minutes, turning, until crisp. Drain on kitchen paper.',
      'Toast the bread on both sides.',
      'Season the tomato slices with the salt and pepper.',
      'Spread the mayonnaise on the toast. Build with the lettuce, tomato and bacon.',
      'Cut in half on the diagonal and serve at once.'
    ],
    tips: [
      'Use ripe tomatoes.',
      'Season the tomato.',
      'Drain the bacon well.',
      'Spread the mayonnaise to the edges.'
    ],
    pair: ['Crisps', 'Pickles', 'Coleslaw', 'Tomato soup'],
    store: 'Best eaten straight away.',
    nut: [475, 22, 45, 23, 4, 8, 1980]
  },

  'loaded-sweet-potatoes': {
    d: 'Baked sweet potatoes split and filled with black beans, cheese, soured cream, spring onions and coriander.',
    meta: 'Loaded sweet potatoes: baked sweet potatoes filled with black beans, cheese and soured cream. Four servings, baked for 50 minutes.',
    kw: ['loaded sweet potatoes', 'loaded baked sweet potatoes', 'black bean loaded sweet potatoes', 'stuffed sweet potatoes with cheese', 'loaded sweet potatoes with soured cream'],
    why: 'Bake them long. That is the short, sharp rule, because a sweet potato is not truly done when it is soft. It is done when the sugars have started to ooze and caramelise at the skin, and that takes an extra ten minutes.\n\nPrick the potatoes all over, rub them with oil and set them directly on the oven rack, with a tray underneath to catch the drips. Bake at 200°C for 50 minutes. If your oven runs hot, check at 45 minutes. They should feel completely soft when squeezed with an oven glove. **Do not wrap them in foil.** Foil steams the skin and leaves it soft and soggy.\n\nWarm the black beans with the cumin and a splash of water. Split the potatoes, fluff the flesh with a fork and fill with the beans and cheese. Return to the oven for 5 minutes to melt it.\n\nTop with soured cream, spring onions and coriander.',
    ing: [
      '4 sweet potatoes, about 800 g',
      '1 tbsp vegetable oil',
      '480 g drained tinned black beans',
      '1 tsp ground cumin',
      '3 tbsp water',
      '120 g cheddar, grated',
      '120 g soured cream',
      '2 spring onions, about 30 g, sliced',
      '10 g coriander leaves',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Prick the potatoes, rub with the oil and bake directly on the rack for 50 minutes until completely soft.',
      'Warm the beans with the cumin, water and salt for 5 minutes.',
      'Split the potatoes, fluff the flesh with a fork and fill with the beans and cheese. Bake for 5 minutes to melt the cheese.',
      'Top with the soured cream, spring onions and coriander.'
    ],
    tips: [
      'Do not wrap in foil.',
      'Bake until completely soft.',
      'If your oven runs hot, check at 45 minutes.',
      'Fluff the flesh before filling.'
    ],
    pair: ['Green salad', 'Salsa', 'Guacamole', 'Lime wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [504, 20, 61, 20, 14, 11, 970]
  },

  'disco-fries': {
    d: 'Oven chips topped with melted mozzarella and a rich brown gravy, a diner favourite.',
    meta: 'Disco fries: oven chips topped with melted mozzarella and brown gravy. Four servings, baked for 35 minutes.',
    kw: ['disco fries', 'diner style disco fries', 'disco fries with gravy and mozzarella', 'gravy and cheese fries', 'homemade disco fries'],
    why: 'Disco fries are a diner dish of chips under gravy and melted cheese, and they are meant to be eaten late and messy. The three layers need to be hot, and the chips need to stay crisp for at least a few minutes under the gravy.\n\nCut the potatoes into thick chips, soak them in cold water for 15 minutes to remove surface starch, and dry them very thoroughly. A wet chip steams. Toss them with the oil and salt, spread them in one layer and roast at 230°C for 30 minutes, turning once. **Dry the chips completely.** Damp ones never crisp.\n\nWhile they cook, melt the butter, stir in the flour for a minute, add the beef stock and Worcestershire sauce and simmer for 8 minutes until thick, to make the gravy.\n\nPile the chips onto a tray, scatter over the mozzarella and bake for 3 minutes until melted, then pour over the hot gravy and serve at once.',
    ing: [
      '800 g potatoes, cut into thick chips',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '30 g butter',
      '30 g plain flour',
      '500 ml beef stock',
      '1 tsp Worcestershire sauce',
      '1/2 tsp black pepper',
      '200 g mozzarella, grated'
    ],
    st: [
      'Heat the oven to 230°C. Soak the chips in cold water for 15 minutes, then drain and dry very well.',
      'Toss with the oil and salt, spread in one layer on a large tray and roast for 30 minutes, turning once.',
      'Melt the butter, stir in the flour for 1 minute, then whisk in the stock and Worcestershire sauce. Simmer for 8 minutes until thick and add the pepper.',
      'Scatter the mozzarella over the chips and bake for 3 minutes until melted.',
      'Pour over the hot gravy and serve at once.'
    ],
    tips: [
      'Dry the chips completely.',
      'Roast in one layer.',
      'If your oven runs hot, check at 25 minutes.',
      'Serve at once.'
    ],
    pair: ['Burgers', 'Fried chicken', 'Coleslaw', 'Dill pickles'],
    store: 'Best eaten straight away.',
    nut: [488, 17, 42, 28, 5, 2, 1330]
  },

  'curly-fries': {
    d: 'Frozen curly fries baked on a hot tray until crisp, tossed in paprika and garlic salt.',
    meta: 'Curly fries: frozen curly fries baked until crisp and tossed in paprika and garlic salt. Four servings, baked for 30 minutes.',
    kw: ['curly fries', 'baked curly fries', 'crispy oven curly fries', 'seasoned curly fries', 'curly fries with paprika'],
    why: 'How do you get curly fries crisp at home? A hot oven, a hot tray and no crowding. Fries from frozen are already part-cooked, and the oven only has to drive off the surface moisture and brown them.\n\nPut the baking tray in the oven while it heats to 230°C, so that the fries sizzle the moment they land on it. Spread them in a single layer with a little space between them, and add no oil if the packet says they are already coated. Turn them after 15 minutes. **Do not pile them up.** Fries that touch steam each other and stay floppy.\n\nBake for 25 to 30 minutes, until deep golden and crisp at the ends. If your oven runs hot, check at 22 minutes.\n\nToss them straight away with the paprika, garlic salt and a little pepper, so the seasoning clings to the hot surface. Serve with ketchup or a garlic mayonnaise.',
    ing: [
      '600 g frozen curly fries',
      '1 tsp smoked paprika',
      '1/2 tsp garlic salt',
      '1/4 tsp black pepper',
      '1 tsp vegetable oil'
    ],
    st: [
      'Heat the oven to 230°C with a baking tray inside.',
      'Spread the frozen fries on the hot tray in a single layer and toss with the oil.',
      'Bake for 25 to 30 minutes, turning once after 15 minutes, until deep golden and crisp.',
      'Toss at once with the paprika, garlic salt and pepper and serve.'
    ],
    tips: [
      'Heat the tray first.',
      'Do not crowd the fries.',
      'If your oven runs hot, check at 22 minutes.',
      'Season while hot.'
    ],
    pair: ['Burgers', 'Fried chicken', 'Ketchup', 'Garlic mayonnaise'],
    store: 'Best eaten straight away.',
    nut: [340, 5, 44, 16, 5, 1, 450]
  },

  'waffle-fries': {
    d: 'Frozen waffle-cut fries baked until crisp and golden, tossed in salt and served with a dipping sauce.',
    meta: 'Waffle fries: frozen waffle-cut fries baked until crisp and golden. Four servings, baked for 25 minutes.',
    kw: ['waffle fries', 'baked waffle fries', 'crispy oven waffle fries', 'waffle cut fries with dip', 'seasoned waffle fries'],
    why: 'This is what to make for the first big match of the season, when a tray of something crisp and shareable is more useful than anything on a plate. Waffle fries have a lattice shape that gives them more surface to crisp and more edges to hold a dip.\n\nHeat the oven to 220°C with the tray inside. The hot metal gives the fries a head start on the browning. Spread the frozen fries across the tray in a single layer. The lattice traps steam when the fries overlap, and stops them crisping. **Spread them out.** A crowded tray gives soggy middles.\n\nBake for 22 to 25 minutes, turning them once halfway. If your oven runs hot, check at 20 minutes. They should be deep golden at the edges.\n\nSalt them the moment they come out. Stir the soured cream with the chives and a pinch of salt for a quick dip, and serve while hot.',
    ing: [
      '600 g frozen waffle fries',
      '1/2 tsp salt',
      '150 g soured cream',
      '10 g chives, chopped',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 220°C with a baking tray inside.',
      'Spread the frozen fries on the hot tray in a single layer.',
      'Bake for 22 to 25 minutes, turning once, until deep golden. Sprinkle with the salt.',
      'Stir the soured cream with the chives and lemon juice for a dip and serve with the hot fries.'
    ],
    tips: [
      'Heat the tray first.',
      'Spread the fries in one layer.',
      'If your oven runs hot, check at 20 minutes.',
      'Salt them while hot.'
    ],
    pair: ['Burgers', 'Chicken wings', 'Ketchup', 'Cheese sauce'],
    store: 'Best eaten straight away.',
    nut: [411, 5, 46, 23, 5, 2, 760]
  },

  'nicoise-salad': {
    d: 'Tuna, green beans, new potatoes, eggs, tomatoes, olives and anchovies in a mustard and red wine vinegar dressing.',
    meta: 'Nicoise salad: tuna, green beans, potatoes, eggs, tomatoes and olives with mustard dressing. Four servings, cooked for 15 minutes.',
    kw: ['nicoise salad', 'classic nicoise salad', 'french nicoise salad with tuna', 'nicoise salad with green beans and eggs', 'salade nicoise'],
    why: 'Tuna, potatoes, beans, eggs and olives: five things on a plate, and the dressing that pulls them together. It is a salad built from separate parts, laid out rather than tossed.\n\nBoil the potatoes until tender, about 15 minutes, and drain. Cook the eggs for 8 minutes, which gives a yolk that is just set and a little soft in the centre, then cool them in cold water and peel them. Blanch the beans for 3 minutes and plunge them into cold water, so that they stay bright green and crisp. **Dress the potatoes while they are still warm.** Warm potatoes soak up the vinaigrette, and cold ones just wear it.\n\nWhisk the mustard, vinegar, oil and a pinch of salt for the dressing.\n\nArrange the lettuce on a platter and lay the potatoes, beans, tomatoes, eggs, tuna, olives and anchovies in sections on top. Drizzle with the dressing. Buy good tinned tuna in oil, as it is the centre of the dish and the cheap kind is dry.',
    ing: [
      '400 g new potatoes, halved',
      '4 eggs, about 200 g',
      '200 g green beans, trimmed',
      '2 little gem lettuces, about 200 g',
      '300 g tomatoes, cut into wedges',
      '320 g tinned tuna in oil, drained',
      '80 g black olives',
      '8 anchovy fillets, about 20 g',
      '1 tbsp Dijon mustard',
      '3 tbsp red wine vinegar',
      '80 ml olive oil',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the potatoes for 15 minutes, drain and halve. Boil the eggs for 8 minutes, cool in cold water and peel.',
      'Blanch the beans in boiling water for 3 minutes and cool in cold water.',
      'Whisk the mustard, vinegar, oil and salt and toss a spoonful through the warm potatoes.',
      'Arrange the lettuce on a platter with the potatoes, beans, tomatoes, quartered eggs, tuna, olives and anchovies.',
      'Drizzle with the rest of the dressing.'
    ],
    tips: [
      'Dress the potatoes while warm.',
      'Cool the beans in cold water.',
      'Time the eggs exactly.',
      'Arrange, do not toss.'
    ],
    pair: ['Crusty bread', 'Dry rose', 'Lemon wedges', 'Sparkling water'],
    store: 'Best eaten on the day. Keep the components separate in the fridge for 1 day.',
    nut: [488, 33, 26, 28, 7, 5, 1170]
  },

  'spinach-salad-with-warm-bacon': {
    d: 'Baby spinach, mushrooms and boiled egg tossed with a hot bacon and red wine vinegar dressing.',
    meta: 'Spinach salad with warm bacon: spinach, mushrooms and egg with a hot bacon and vinegar dressing. Four servings, cooked for 10 minutes.',
    kw: ['spinach salad with warm bacon', 'warm bacon dressing spinach salad', 'wilted spinach salad with bacon', 'spinach salad with hot bacon dressing', 'spinach mushroom and bacon salad'],
    why: 'What does hot dressing do to a salad? It wilts the spinach slightly, softens the mushrooms and carries the smoky flavour of the bacon through every leaf. A cold dressing sits on top, and a hot one gets in.\n\nFry the bacon in a dry pan until crisp, remove it and leave the fat in the pan. Stir in the shallot for a minute, then the vinegar, mustard and sugar, and let it bubble for 30 seconds. Take the pan off the heat. **Dress the salad at the last moment.** Warm dressing wilts the spinach within a minute, and a salad left to stand turns limp.\n\nPile the spinach, sliced mushrooms and halved boiled eggs in a bowl, pour over the warm dressing, toss and scatter the crisp bacon on top.\n\nServe at once, as a light lunch or beside a steak. Choose young spinach leaves, as larger ones are tougher and more bitter.',
    ing: [
      '200 g baby spinach',
      '150 g mushrooms, thinly sliced',
      '4 eggs, about 200 g, boiled and halved',
      '6 rashers streaky bacon, about 120 g, diced',
      '1 shallot, about 40 g, finely chopped',
      '3 tbsp red wine vinegar',
      '1 tsp Dijon mustard',
      '1 tsp sugar',
      '1/4 tsp black pepper'
    ],
    st: [
      'Fry the bacon in a dry pan for 6 minutes until crisp. Lift out and leave the fat in the pan.',
      'Cook the shallot in the fat for 1 minute, then add the vinegar, mustard and sugar and bubble for 30 seconds. Take off the heat.',
      'Put the spinach, mushrooms and eggs in a large bowl.',
      'Pour over the warm dressing, toss, scatter with the bacon and pepper and serve at once.'
    ],
    tips: [
      'Dress at the last moment.',
      'Take the pan off the heat before pouring.',
      'Dry the spinach well.',
      'Use a flavourful bacon.'
    ],
    pair: ['Crusty bread', 'Steak', 'Roast chicken', 'Tomato soup'],
    store: 'Best eaten straight away.',
    nut: [161, 14, 6, 9, 2, 3, 580]
  },

  'roasted-beet-salad-with-goat-cheese': {
    d: 'Roasted beetroot with rocket, goat cheese, toasted walnuts and an orange and balsamic dressing.',
    meta: 'Roasted beet salad with goat cheese: roasted beetroot, rocket, goat cheese and walnuts. Four servings, baked for 50 minutes.',
    kw: ['roasted beet salad with goat cheese', 'roasted beetroot and goat cheese salad', 'beet salad with walnuts and goat cheese', 'beetroot salad with rocket and goat cheese', 'roasted beet and goat cheese salad'],
    why: 'This is what to make in the first cold week, when the beetroot are at their best and a warm salad makes sense. Roasting beetroot concentrates the sweetness in a way that boiling never does.\n\nScrub the beetroot, wrap each in foil with a splash of oil and roast at 200°C for 50 minutes. If your oven runs hot, check at 45 minutes. A knife should slide in easily. Let them cool a little, then rub off the skins with kitchen paper, which comes away easily when they are warm. **Wear gloves, or old clothes.** Beetroot stains hands and tea towels.\n\nCut into wedges and toss with the dressing of orange juice, balsamic vinegar and oil while still warm, so they absorb it.\n\nPile the rocket on a platter, scatter the beetroot over it, crumble the goat cheese on top and finish with the toasted walnuts. Pistachios make a good alternative to walnuts if you prefer them.',
    ing: [
      '600 g raw beetroot',
      '1 tbsp olive oil',
      '100 g rocket',
      '120 g goat cheese, crumbled',
      '40 g walnuts, toasted',
      '2 tbsp orange juice',
      '1 tbsp balsamic vinegar',
      '3 tbsp olive oil, for the dressing',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Scrub the beetroot, wrap in foil with the 1 tbsp of oil and roast for 50 minutes until a knife slides in easily.',
      'Cool slightly, rub off the skins and cut into wedges.',
      'Whisk the orange juice, balsamic vinegar, 3 tbsp of oil, salt and pepper and toss with the warm beetroot.',
      'Pile the rocket on a platter, top with the beetroot, goat cheese and walnuts.'
    ],
    tips: [
      'Roast the beetroot in foil.',
      'Dress them while warm.',
      'If your oven runs hot, check at 45 minutes.',
      'Wear gloves to peel them.'
    ],
    pair: ['Crusty bread', 'Roast chicken', 'Grilled salmon', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Add the rocket and cheese just before serving.',
    nut: [390, 11, 19, 30, 5, 12, 600]
  },

  'rice-salad': {
    d: 'Cooled rice with peppers, sweetcorn, tuna, olives and parsley in a lemon and olive oil dressing.',
    meta: 'Rice salad: cooled rice with peppers, sweetcorn, tuna and olives in a lemon dressing. Six servings, cooked for 15 minutes.',
    kw: ['rice salad', 'italian rice salad', 'insalata di riso', 'rice salad with tuna and vegetables', 'cold rice salad with lemon dressing'],
    why: 'The first sign it is right is the grains: separate, tender and glossy with dressing, not clumped. A good rice salad is a salad first and a bowl of rice second.\n\nCook the rice in plenty of boiling salted water for 12 minutes, until just tender, and drain. Rinse it under cold water straight away to stop the cooking and wash off the starch. Shake the colander dry. Add the dressing while the rice is still slightly warm, because warm rice absorbs it. **Do not leave the rice to dry out uncovered.** It hardens quickly.\n\nWhisk the lemon juice, oil, mustard and salt. Toss the rice with the dressing, and when it has cooled fold in the peppers, sweetcorn, tuna, olives and parsley.\n\nTaste again before serving, as cold dulls seasoning, and add more lemon or salt if it needs it. Cook extra rice and use leftovers the next day, since cold rice must be chilled promptly.',
    ing: [
      '300 g long-grain rice',
      '1 red pepper, about 150 g, diced',
      '150 g sweetcorn',
      '320 g tinned tuna in oil, drained',
      '80 g black olives, halved',
      '20 g flat-leaf parsley, chopped',
      '4 tbsp olive oil',
      '3 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tsp salt'
    ],
    st: [
      'Boil the rice in plenty of salted water for 12 minutes until just tender. Drain, rinse under cold water and shake dry.',
      'Whisk the oil, lemon juice, mustard and salt and toss through the slightly warm rice.',
      'When cooled, fold in the pepper, sweetcorn, tuna, olives and parsley.',
      'Taste, adjust the seasoning and serve.'
    ],
    tips: [
      'Rinse the rice.',
      'Dress it while warm.',
      'Taste again before serving.',
      'Add the tuna last so it stays in chunks.'
    ],
    pair: ['Cherry tomatoes', 'Green salad', 'Crusty bread', 'Cold white wine'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [385, 19, 48, 13, 2, 2, 780]
  },

  'protein-smoothie': {
    d: 'A thick smoothie of banana, Greek yoghurt, peanut butter and milk, blended with oats and a scoop of protein powder.',
    meta: 'Protein smoothie: banana, Greek yoghurt, peanut butter, oats and protein powder blended with milk. Two servings, no cooking.',
    kw: ['protein smoothie', 'banana peanut butter protein smoothie', 'protein smoothie with greek yoghurt', 'thick protein smoothie with oats', 'post workout protein smoothie'],
    why: 'It looks like a milkshake and works like a meal, which is why the oats and peanut butter matter. They give it body, and keep a smoothie from tasting thin an hour later.\n\nPut the milk in the blender first, then the yoghurt, banana, peanut butter, oats and protein powder, in that order. Liquid at the base helps the blades turn, and heavy ingredients on top push the mix down. A frozen banana gives a thicker, colder smoothie than a fresh one, and no ice is needed. **Blend for a full minute.** The oats need that long to break down, or the smoothie has a gritty texture.\n\nTaste and add a spoonful of honey if the protein powder is unsweetened. Add a splash more milk if the smoothie is too thick to pour.\n\nPour into two glasses and drink straight away, because it thickens as it stands. A handful of spinach disappears into it without changing the flavour.',
    ing: [
      '300 ml whole milk',
      '200 g Greek yoghurt',
      '2 bananas, about 250 g peeled, frozen',
      '2 tbsp peanut butter',
      '30 g rolled oats',
      '30 g whey protein powder',
      '1 tsp honey'
    ],
    st: [
      'Put the milk, yoghurt, bananas, peanut butter, oats, protein powder and honey in a blender in that order.',
      'Blend for 1 minute until completely smooth, adding a splash of milk if it is too thick.',
      'Pour into two glasses and drink at once.'
    ],
    tips: [
      'Use frozen banana.',
      'Add the liquid first.',
      'Blend for a full minute.',
      'Drink it straight away.'
    ],
    pair: ['Toast', 'Fresh berries', 'Hard-boiled egg', 'Handful of nuts'],
    store: 'Best drunk straight away. Keeps in the fridge for 1 day; shake before drinking.',
    nut: [536, 33, 56, 20, 6, 31, 220]
  },

  'oat-milk-latte': {
    d: 'Espresso topped with warm, frothed oat milk, with a little vanilla or honey if you like it sweeter.',
    meta: 'Oat milk latte: espresso topped with warm, frothed oat milk. One serving, ready in 6 minutes.',
    kw: ['oat milk latte', 'homemade oat milk latte', 'oat milk latte with espresso', 'oat latte with espresso', 'oat latte'],
    why: 'It looks like a latte and froths like a latte, but oat milk behaves differently from dairy. It is thinner in protein, so it does not foam as tall, and it scorches at a lower temperature, so a gentle heat is better.\n\nChoose an oat milk labelled barista or for coffee. It has added fat and stabilisers that help it froth and stop it separating in hot coffee. Ordinary oat milk splits and looks curdled in the cup. Heat the milk in a small pan to about 60°C, just steaming and too hot to leave a finger in for more than a second. **Do not boil it.** Boiled oat milk thickens and tastes of porridge.\n\nFroth with a handheld frother for 20 seconds, or shake it in a jar with a tight lid for 30 seconds and warm it briefly.\n\nPour the shot of espresso into a mug, add the vanilla or honey if using, and pour the milk over, holding back the foam with a spoon and spooning it on top.',
    ing: [
      '150 ml barista oat milk',
      '60 ml hot espresso',
      '1/2 tsp vanilla extract',
      '1 tsp honey'
    ],
    st: [
      'Heat the oat milk in a small pan to just steaming, about 60°C. Do not let it boil.',
      'Froth with a handheld frother for 20 seconds.',
      'Pour the espresso into a mug and stir in the vanilla and honey.',
      'Pour in the milk, holding back the foam, then spoon the foam on top.'
    ],
    tips: [
      'Use barista oat milk.',
      'Do not boil the milk.',
      'Froth while it is hot.',
      'Stir the honey into the espresso first.'
    ],
    pair: ['Banana bread', 'Toast', 'Biscotti', 'Granola'],
    store: 'Best drunk straight away.',
    nut: [117, 5, 13, 5, 0, 13, 70]
  },

  'watermelon-juice': {
    d: 'Fresh watermelon blended with lime juice and a pinch of salt and strained into a cold, pink juice.',
    meta: 'Watermelon juice: fresh watermelon blended with lime juice and a pinch of salt. Four servings, no cooking.',
    kw: ['watermelon juice', 'fresh watermelon juice', 'mexican watermelon juice', 'watermelon lime juice', 'homemade watermelon juice'],
    why: 'It looks like a pink soft drink and tastes like the fruit itself, which is why the choice of melon matters more than anything else. A ripe one is heavy for its size, with a yellow patch where it lay on the ground and a hollow sound when tapped.\n\nCut the flesh into chunks and take out the seeds if you can, though they strain out anyway. Blend for 30 seconds until completely liquid, then pour through a sieve into a jug, pressing with a spoon. Straining is optional, but it gives a clear juice instead of a pulpy one. **Add a pinch of salt.** It sounds odd, and it makes the sweetness taste brighter.\n\nStir in the lime juice and taste. Add a spoonful of sugar only if the melon was not very sweet.\n\nServe over ice with a mint leaf, and drink within a few hours, because the juice separates and loses its freshness.',
    ing: [
      '1.2 kg watermelon flesh, cut into chunks',
      '3 tbsp lime juice',
      '1 pinch salt',
      '200 g ice cubes',
      '4 sprigs mint, about 4 g'
    ],
    st: [
      'Blend the watermelon for 30 seconds until completely liquid.',
      'Pour through a sieve into a jug, pressing with a spoon.',
      'Stir in the lime juice and salt and taste.',
      'Serve over the ice with the mint.'
    ],
    tips: [
      'Choose a ripe, heavy melon.',
      'Strain for a clear juice.',
      'Add a pinch of salt.',
      'Serve very cold.'
    ],
    pair: ['Tacos', 'Grilled corn', 'Tortilla chips', 'Fresh fruit'],
    store: 'Best drunk within a few hours. Keeps in the fridge for 1 day; stir before pouring.',
    nut: [113, 2, 24, 1, 1, 19, 40]
  },

  'strawberry-daiquiri-mocktail': {
    d: 'Frozen strawberries blended with lime juice, sugar syrup and ice into a slushy drink with no alcohol.',
    meta: 'Strawberry daiquiri mocktail: frozen strawberries blended with lime juice and ice. Four servings, no cooking.',
    kw: ['strawberry daiquiri mocktail', 'virgin strawberry daiquiri', 'frozen strawberry daiquiri mocktail', 'non alcoholic strawberry daiquiri', 'strawberry lime slush'],
    why: 'The daiquiri is a drink of rum, lime juice and sugar, and this version leaves out the rum and keeps the rest. What is left is a slushy strawberry and lime drink that is as good for children as for adults.\n\nUse frozen strawberries as the base, because they give the drink its thickness without watering it down. Blend them with the lime juice, sugar syrup and a handful of ice until completely smooth. A good blender will take a minute, and a weaker one needs a splash of water. **Do not blend for too long.** The heat of the motor melts the ice, and the slush turns thin.\n\nTaste and adjust: more lime for sharpness, more syrup for sweetness. Strawberries vary a great deal in sweetness, so it needs checking each time.\n\nPour into chilled glasses, top with a strawberry and a wedge of lime, and drink at once while the texture is thick.',
    ing: [
      '400 g frozen strawberries',
      '4 tbsp lime juice',
      '4 tbsp sugar syrup',
      '200 g ice cubes',
      '100 ml water',
      '4 fresh strawberries, about 60 g',
      '1 lime, cut into wedges'
    ],
    st: [
      'Blend the frozen strawberries, lime juice, sugar syrup, ice and water until smooth, about 1 minute.',
      'Taste and add more lime juice or syrup if needed.',
      'Pour into four chilled glasses.',
      'Top each with a strawberry and a lime wedge and serve at once.'
    ],
    tips: [
      'Use frozen strawberries.',
      'Chill the glasses.',
      'Taste and adjust.',
      'Drink it at once.'
    ],
    pair: ['Nachos', 'Tacos', 'Grilled prawns', 'Fresh fruit'],
    store: 'Best drunk straight away. It separates as it melts.',
    nut: [100, 1, 24, 0, 3, 19, 5]
  },

  'breakfast-sandwiches': {
    d: 'Soft rolls filled with a fried egg, crisp bacon and melted cheese, built in minutes and eaten hot.',
    meta: 'Breakfast sandwiches: soft rolls with fried egg, crisp bacon and melted cheese. Four servings, cooked for 10 minutes.',
    kw: ['breakfast sandwiches', 'egg and bacon breakfast sandwiches', 'bacon egg and cheese breakfast sandwiches', 'homemade breakfast sandwiches', 'breakfast sandwich with fried egg'],
    why: 'Cook the bacon first. That is the short, sharp rule, because everything else happens in seconds, and the bacon takes the longest. Once it is crisp, the egg and the cheese follow in a minute or two.\n\nFry the bacon in a pan or bake it on a rack at 200°C for 12 minutes, until crisp, and set it on kitchen paper. In the same pan, with a little of the fat, crack in the eggs and fry them until the white is set but the yolk is still soft, about 3 minutes. For a firmer egg, break the yolk and flip once. **Melt the cheese on the egg.** Lay a slice on top as it finishes, so the heat of the pan melts it.\n\nSplit the rolls and toast them lightly, then butter them. Build each with bacon, egg and cheese, and press down gently.\n\nEat straight away, wrapped in paper if you are on the move.',
    ing: [
      '300 g soft rolls, in four',
      '8 rashers streaky bacon, about 160 g',
      '4 eggs, about 200 g',
      '4 slices cheddar, about 80 g',
      '20 g butter',
      '1/4 tsp black pepper'
    ],
    st: [
      'Fry the bacon in a pan for 8 minutes until crisp. Drain on kitchen paper.',
      'Fry the eggs in a little of the bacon fat for 3 minutes. Lay a slice of cheese over each as it finishes.',
      'Split and lightly toast the rolls and spread with the butter.',
      'Fill each with the bacon and a cheesy egg and season with the pepper.'
    ],
    tips: [
      'Cook the bacon first.',
      'Melt the cheese on the egg.',
      'Toast the rolls lightly.',
      'Eat while hot.'
    ],
    pair: ['Orange juice', 'Coffee', 'Fruit salad', 'Hash browns'],
    store: 'Best eaten straight away. They can be wrapped and reheated in a low oven.',
    nut: [458, 25, 40, 22, 2, 4, 1170]
  },

  'eggs-sardou': {
    d: 'Poached eggs on creamed spinach and artichoke bottoms, topped with hollandaise sauce, a classic New Orleans breakfast.',
    meta: 'Eggs Sardou: poached eggs on creamed spinach and artichoke hearts with hollandaise. Four servings, cooked for 20 minutes.',
    kw: ['eggs sardou', 'new orleans eggs sardou', 'eggs sardou with hollandaise', 'poached eggs with artichoke and spinach', 'classic eggs sardou'],
    why: 'Eggs Sardou is a New Orleans breakfast dish of poached eggs on artichoke and creamed spinach, under hollandaise. It looks grand and is made of simple parts, and the work is in timing them all to arrive hot at once.\n\nMake the hollandaise first, since it can sit in a warm place. Whisk the yolks with the lemon juice over simmering water until thick and pale, then whisk in the melted butter a trickle at a time. If it starts to split, whisk in a spoonful of hot water. **Keep the sauce warm, not hot.** Too much heat scrambles it.\n\nWilt the spinach in the butter with the garlic, stir in the cream and cook until thick. Warm the artichokes in a pan.\n\nPoach the eggs in barely simmering water with a splash of vinegar for 3 minutes. Layer the spinach, artichoke and egg on warm plates, and spoon over the hollandaise.',
    ing: [
      '4 eggs, about 200 g, for poaching',
      '1 tbsp white vinegar',
      '3 egg yolks, about 60 g',
      '1 tbsp lemon juice',
      '150 g butter, melted',
      '1/4 tsp salt',
      '20 g butter, for the spinach',
      '1 clove garlic, crushed',
      '300 g baby spinach',
      '60 ml double cream',
      '400 g tinned artichoke hearts, drained',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Whisk the yolks with the lemon juice in a bowl over simmering water until thick and pale. Whisk in the melted butter a trickle at a time and add the salt. Keep warm.',
      'Melt the 20 g of butter, cook the garlic for 30 seconds and wilt the spinach. Stir in the cream and nutmeg and cook for 3 minutes until thick.',
      'Warm the artichoke hearts in a small pan for 3 minutes.',
      'Poach the eggs in barely simmering water with the vinegar for 3 minutes. Lift out with a slotted spoon.',
      'Layer the spinach, artichokes and eggs on warm plates and spoon over the hollandaise.'
    ],
    tips: [
      'Make the hollandaise first.',
      'Add the butter slowly.',
      'Keep the water at a bare simmer.',
      'Warm the plates.'
    ],
    pair: ['Orange juice', 'Coffee', 'Crispy bacon', 'Toasted muffin'],
    store: 'Best eaten straight away.',
    nut: [537, 14, 10, 49, 4, 2, 590]
  }
};
