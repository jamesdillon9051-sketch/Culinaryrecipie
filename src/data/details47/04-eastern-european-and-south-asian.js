'use strict';

/**
 * Volume forty-seven — Polish, Czech, Russian, Ukrainian, Romanian, Balkan
 * and South Asian everyday dishes.
 *
 * Seventeen dishes: potato dumplings, beetroot soup, potato pancakes,
 * beetroot salad, buckwheat and mushrooms, a butter bean dish, two Balkan
 * salads and a bean stew, then khichuri, a poppy seed potato curry, coconut
 * flatbread, an egg curry, daal, an Afghan dal and a Nepali potato and
 * bamboo shoot curry. Times are the recipe's own; hobs differ, so each
 * method says what to look for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'kopytka': {
    cookMax: 35,
    untimed: ['cooling completely'],
    d: 'Polish potato dumplings of mashed potato, flour and egg, cut into small diagonal pieces, boiled and tossed in butter.',
    meta: 'Kopytka: Polish potato dumplings of mashed potato, flour and egg, boiled and tossed in butter. Four servings, boiled for 5 minutes.',
    kw: ['kopytka', 'polish potato dumplings', 'kopytka recipe', 'polish gnocchi', 'potato dumplings with butter'],
    why: 'The first thing you notice is how soft the dough is, almost like warm putty, and how little flour it takes to turn mashed potato into something you can cut. Kopytka means little hooves in Polish, from the diagonal cuts that give each piece its shape.\n\nUse floury potatoes, such as Maris Piper or King Edward, and boil them in their skins to keep them dry. Peel and mash them while hot, then let the mash cool completely. Hot mash makes a sticky dough that soaks up too much flour. **Add the flour a little at a time.** The less you use, the lighter the dumplings are.\n\nKnead briefly, only until the dough comes together. Roll it into ropes about 2 cm thick and cut diagonally into pieces. Test one in simmering water first. If it falls apart, add a spoonful of flour to the dough.\n\nBoil gently until the kopytka rise to the surface, then give them another minute. Toss in butter, with fried onion or breadcrumbs.',
    ing: [
      '800 g floury potatoes, unpeeled',
      '1 egg, about 50 g',
      '1 tsp salt',
      '180 g plain flour',
      '3 tbsp butter',
      '40 g breadcrumbs',
      '1/4 tsp black pepper'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes until soft. Peel, mash and cool completely.',
      'Mix the mash with the egg and salt, then work in the flour a little at a time to a soft dough.',
      'Roll into ropes about 2 cm thick on a floured board and cut diagonally into 3 cm pieces.',
      'Simmer in salted water for 5 minutes until they rise. Drain. Melt the butter in a pan, fry the breadcrumbs for 2 minutes, add the kopytka and the pepper and toss.'
    ],
    tips: [
      'Use dry, floury potatoes.',
      'Cool the mash before adding flour.',
      'Test one dumpling before cooking the lot.',
      'Simmer, do not boil hard.'
    ],
    pair: ['Mushroom sauce', 'Pork stew', 'Fried onions', 'Sour cream'],
    store: 'Keeps in the fridge for 2 days. Fry in butter to reheat.',
    nut: [447, 11, 76, 11, 6, 2, 690]
  },

  'barszcz': {
    d: 'A clear red Polish beetroot soup simmered with carrot, onion and bay and finished with lemon juice and dill.',
    meta: 'Barszcz: clear red Polish beetroot soup with carrot, onion and bay, finished with lemon and dill. Six servings, cooked for 45 minutes.',
    kw: ['barszcz', 'polish beetroot soup', 'barszcz czerwony', 'clear beetroot soup', 'polish red borscht'],
    why: 'A table for six, on a cold evening, with a ladle of ruby-red soup in each bowl: that is what barszcz is for. This clear Polish version has none of the potatoes and cabbage of some beetroot soups, which keeps the broth light and the colour pure.\n\nColour is the thing to protect. Beetroot loses its red in long, hard boiling, and turns brown. Add acid early to hold the colour, and keep the simmer gentle. **Do not let the soup boil hard.** A gentle simmer keeps it clear and its colour deep.\n\nPeel and grate the beetroot, or cut it into thin matchsticks, so it gives up its colour quickly. Simmer with carrot, onion, bay leaves and allspice berries for about 30 minutes. The vegetables give a sweet, earthy base.\n\nStrain, then season with lemon juice, salt and a pinch of sugar. Taste carefully, since the balance of sour and sweet is everything. Serve with dill and, if you like, a boiled egg.',
    ing: [
      '600 g raw beetroot, peeled and coarsely grated',
      '1 carrot, about 100 g, sliced',
      '1 onion, about 150 g, halved',
      '1.5 litres water',
      '2 bay leaves',
      '2 g allspice berries',
      '1 tsp salt',
      '1 tsp sugar',
      '3 tbsp lemon juice',
      '10 g fresh dill, chopped'
    ],
    st: [
      'Put the beetroot, carrot, onion, water, bay and allspice in a large pan and bring slowly to a simmer.',
      'Cook gently for 40 minutes, without boiling hard, until the liquid is deep red.',
      'Strain the soup through a sieve and return it to the pan.',
      'Stir in the salt, sugar and lemon juice. Taste and adjust. Serve hot with the dill.'
    ],
    tips: [
      'Keep the simmer gentle so the colour stays red.',
      'Add the lemon juice after cooking to protect the colour.',
      'Taste and balance the sweet and sour at the end.',
      'Serve with boiled potatoes or a boiled egg for a fuller meal.'
    ],
    pair: ['Boiled potatoes', 'Boiled eggs', 'Rye bread', 'Sour cream'],
    store: 'Keeps in the fridge for 4 days. Reheat gently, without boiling.',
    nut: [68, 2, 15, 0, 4, 10, 480]
  },

  'bramboracky': {
    d: 'Czech potato pancakes of grated raw potato, garlic, marjoram and flour, fried in oil until crisp and golden.',
    meta: 'Bramboracky: Czech potato pancakes of grated potato, garlic and marjoram, fried until crisp and golden. Four servings, cooked for 20 minutes.',
    kw: ['bramboracky', 'czech potato pancakes', 'bramborak', 'czech garlic potato pancakes', 'potato pancakes with marjoram'],
    why: 'Most home versions come out soggy or grey, and the fix is two quick steps: squeeze the potato dry, and cook the pancakes in oil that is hot enough. Raw potato turns grey as soon as it meets air, which is why you grate it last and work quickly.\n\nGrate the potatoes on the coarse side of the grater, straight into a bowl, then press the shreds in a clean tea towel to remove the starchy water. **Do not throw away the starch settled at the bottom of the bowl.** If you let the liquid stand, the starch sinks, and you can pour off the water and stir the starch back into the potato to help bind it.\n\nGarlic and marjoram are the Czech seasoning, and they are used generously. Add a spoonful of flour and an egg to hold the mix together.\n\nFry thin spoonfuls in about 1 cm of hot oil, pressing flat, for about 4 minutes on each side. Drain on paper and eat hot.',
    ing: [
      '800 g potatoes, peeled',
      '3 garlic cloves, crushed',
      '1 tsp dried marjoram',
      '1 egg, about 50 g',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '100 ml vegetable oil, for frying'
    ],
    st: [
      'Grate the potatoes coarsely and squeeze them in a clean tea towel to remove the liquid.',
      'Mix with the garlic, marjoram, egg, flour, salt and pepper.',
      'Heat the oil in a wide frying pan over a medium-high heat. Spoon in portions of the mix and press flat.',
      'Fry for 4 minutes on each side until crisp and golden. Drain on kitchen paper.'
    ],
    tips: [
      'Grate the potatoes just before frying.',
      'Squeeze them hard.',
      'Use hot oil and press the pancakes thin.',
      'Keep cooked batches warm in a low oven.'
    ],
    pair: ['Sauerkraut', 'Sour cream', 'Smoked sausage', 'Green salad'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them.',
    nut: [400, 6, 40, 24, 5, 2, 620]
  },

  'vinegret': {
    d: 'A Russian salad of boiled beetroot, potato and carrot with pickled cucumber, onion and sauerkraut in sunflower oil.',
    meta: 'Vinegret: Russian salad of boiled beetroot, potato, carrot, pickled cucumber and onion in oil. Six servings, cooked for 35 minutes.',
    kw: ['vinegret', 'russian beetroot salad', 'vinaigrette salad russian', 'russian vegetable salad with beetroot', 'beetroot potato carrot salad'],
    why: 'It looks like a colourful chopped salad and eats like a pickle plate, which is the point: vinegret is a Russian salad where sweet root vegetables meet salty, sour things in a plain oil dressing. It is served all winter, when fresh vegetables are scarce.\n\nBoil the beetroot, potatoes and carrots separately, because they cook at different speeds and the beetroot bleeds. Cool them completely, then peel and dice into pieces about 1 cm across. **Dress the beetroot first.** Tossing it in a spoonful of oil before it meets the other vegetables keeps the potato and carrot from turning pink.\n\nPickled cucumber, sauerkraut and onion add the sharp, salty element. Squeeze the sauerkraut well so the salad does not turn watery.\n\nSunflower oil is traditional, and it has a nutty flavour. Chill the salad for an hour before serving. Make it the day before for the best flavour, and keep a spoonful of pickle brine to hand if it needs more tang.',
    ing: [
      '400 g beetroot',
      '300 g potatoes',
      '200 g carrots',
      '150 g pickled cucumbers, diced',
      '100 g sauerkraut, squeezed dry',
      '1 small onion, about 80 g, finely chopped',
      '4 tbsp sunflower oil',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Boil the beetroot for 35 minutes and, in a second pan at the same time, the potatoes and carrots in their skins for 20 minutes, until each is tender. Drain and cool.',
      'Peel and dice all three into 1 cm pieces. Toss the beetroot with 1 tbsp of the oil.',
      'Mix the potatoes, carrots, cucumbers, sauerkraut and onion in a large bowl.',
      'Fold in the beetroot, the rest of the oil, salt and pepper. Taste and adjust.'
    ],
    tips: [
      'Cook the vegetables separately.',
      'Coat the beetroot in oil first.',
      'Squeeze the sauerkraut dry.',
      'Chill the salad before serving.'
    ],
    pair: ['Rye bread', 'Boiled potatoes', 'Smoked fish', 'Pickled herring'],
    store: 'Keeps in the fridge for 3 days. The colour deepens as it stands.',
    nut: [186, 3, 21, 10, 5, 8, 390]
  },

  'draniki': {
    d: 'Crisp Ukrainian potato pancakes of finely grated potato and onion, fried in oil and served with sour cream.',
    meta: 'Draniki: crisp Ukrainian potato pancakes of finely grated potato and onion, fried and served with sour cream. Four servings, cooked for 20 minutes.',
    kw: ['draniki', 'ukrainian potato pancakes', 'deruny', 'draniki recipe', 'potato and onion pancakes'],
    why: 'Grate the onion into the potato. That is the single most useful trick in this recipe, because the onion juice slows the potato from turning grey and adds a mild sweetness. Raw potato oxidises in minutes, and a grey pancake is not appetising.\n\nUse the fine side of the grater for a smoother, more tender pancake, or the medium side for a lacy one. Draniki are generally finer than other potato cakes. Pour off the liquid that collects, but leave the starch that settles at the bottom, and mix it back in. **The starch is the binder.** It holds the pancakes together with very little flour.\n\nHeat the oil until a drop of batter sizzles at once. Spoon in the mix and flatten to about 1 cm thick. Cook for about 4 minutes a side, until the edges are brown and lacy.\n\nServe immediately with sour cream. They cool and soften quickly.',
    ing: [
      '800 g floury potatoes, peeled',
      '1 onion, about 150 g',
      '1 egg, about 50 g',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '100 ml vegetable oil, for frying',
      '4 tbsp sour cream'
    ],
    st: [
      'Grate the potatoes and onion finely into a bowl. Drain off the liquid, keeping the starch at the bottom.',
      'Mix in the egg, flour, salt and pepper.',
      'Heat the oil in a wide frying pan over a medium-high heat. Spoon in portions of the mix and flatten to 1 cm thick.',
      'Fry for 4 minutes on each side until golden and crisp at the edges. Drain and serve with the sour cream.'
    ],
    tips: [
      'Grate the onion in with the potato.',
      'Keep the starch from the bottom of the bowl.',
      'Fry in hot oil in batches.',
      'Serve at once for the best texture.'
    ],
    pair: ['Sour cream', 'Smoked sausage', 'Pickled cucumbers', 'Fried mushrooms'],
    store: 'Best eaten straight away. Reheat in a hot oven.',
    nut: [443, 7, 43, 27, 5, 4, 620]
  },

  'buckwheat-with-mushrooms': {
    d: 'Toasted buckwheat groats cooked with fried onion and mushrooms until fluffy, a Russian and Eastern European side or supper.',
    meta: 'Buckwheat with mushrooms: toasted buckwheat cooked with fried onion and mushrooms until fluffy. Four servings, cooked for 25 minutes.',
    kw: ['buckwheat with mushrooms', 'kasha with mushrooms', 'buckwheat groats with onion and mushrooms', 'russian buckwheat', 'toasted buckwheat with mushrooms'],
    why: 'Toast the buckwheat. That is the advice that matters, because raw buckwheat can taste flat and earthy, while buckwheat toasted for a few minutes in a dry pan smells nutty and cooks into separate, fluffy grains.\n\nThe groats are sold toasted, as kasha, or raw and pale green. If yours are raw, toast them yourself until they turn a rich brown and smell like baking. Rinse them first if you like a lighter flavour. **Use twice as much water as groats by volume.** Too much and the buckwheat turns to porridge.\n\nFry the onion slowly until golden, then add the mushrooms and cook until their water has gone and they begin to brown. That takes about 8 minutes, and it is the flavour of the dish.\n\nStir the buckwheat into the pan, add boiling water and salt, then cover and leave on a low heat. Do not stir during cooking.',
    ing: [
      '250 g buckwheat groats',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '300 g mushrooms, sliced',
      '500 ml boiling water',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '10 g fresh dill, chopped',
      '2 tbsp butter'
    ],
    st: [
      'Toast the buckwheat in a dry pan over a medium heat for 4 minutes, stirring, until it smells nutty.',
      'Heat the oil in a wide pan with a lid and cook the onion for 6 minutes. Add the mushrooms and cook for 8 minutes until browned.',
      'Stir in the buckwheat, boiling water and salt. Cover and cook on a low heat for 12 minutes without stirring.',
      'Rest off the heat for 5 minutes, then stir in the butter, pepper and dill.'
    ],
    tips: [
      'Toast the groats before cooking.',
      'Measure the water carefully.',
      'Do not stir while it cooks.',
      'Brown the mushrooms well for flavour.'
    ],
    pair: ['Sour cream', 'Fried egg', 'Pickled cucumbers', 'Sausages'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [419, 11, 51, 19, 8, 3, 600]
  },

  'fasole-batuta': {
    d: 'Romanian mashed white beans whipped with garlic, oil and a little vinegar, topped with fried onions.',
    meta: 'Fasole batuta: Romanian mashed white beans with garlic and oil, topped with fried onions. Four servings, cooked for 30 minutes.',
    kw: ['fasole batuta', 'romanian bean mash', 'romanian mashed white beans', 'white bean puree with fried onions', 'mashed beans with garlic and onion'],
    why: 'Most home versions come out stiff and dull, and the fix is the oil and the cooking liquid. Fasole bătută, the name of this Romanian dish, means beaten beans, and the beating works best when the beans are warm and there is enough fat to carry the flavour.\n\nTinned white beans make this a quick supper. Drain them but keep a cup of the liquid, then mash them well with a fork or a potato masher. Add garlic, a spoonful of oil and some of the liquid, and keep mashing until the mixture is spreadable. **Keep the beans warm while you mash.** Cold beans turn stiff and stodgy.\n\nThe fried onions are essential. Cook them slowly in oil until deep brown, almost caramelised, and pile them on top. Their sweetness and slight bitterness play against the creamy beans.\n\nServe with bread, pickles and raw onion. Raw sliced onion on the side is traditional, so serve a few rings for those who like the bite.',
    ing: [
      '960 g tinned white beans',
      '4 garlic cloves, crushed',
      '4 tbsp vegetable oil',
      '1 tbsp white wine vinegar',
      '1/2 tsp salt',
      '2 onions, about 300 g, sliced',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the beans with their liquid in a pan for 5 minutes. Drain, keeping a cup of the liquid.',
      'Mash the beans with a fork or masher, adding the garlic, 2 tbsp of the oil, the vinegar, salt and enough of the liquid to make a spreadable mash.',
      'Heat the remaining oil in a pan and fry the onions for 15 minutes over a medium heat until deep brown.',
      'Pile the onions on top of the beans and season with the pepper.'
    ],
    tips: [
      'Mash the beans while they are warm.',
      'Brown the onions slowly.',
      'Add the cooking liquid gradually.',
      'Taste for vinegar before serving.'
    ],
    pair: ['Crusty bread', 'Pickles', 'Raw onion', 'Roasted peppers'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [379, 17, 44, 15, 13, 4, 1020]
  },

  'shopska-salad': {
    d: 'A Balkan salad of chopped tomato, cucumber, pepper and onion, dressed with oil and vinegar and topped with grated white cheese.',
    meta: 'Shopska salad: chopped tomato, cucumber, pepper and onion with oil and vinegar, topped with white cheese. Four servings, no cooking needed.',
    kw: ['shopska salad', 'bulgarian shopska salad', 'balkan tomato and cucumber salad', 'salad with feta on top', 'shopska salata'],
    why: 'A table for four in high summer, when tomatoes and cucumbers are at their best and nobody wants the oven on. Shopska salad is a Balkan classic, and its charm is that it is mostly raw vegetables and one salty cheese.\n\nChop the vegetables into chunks of similar size, about 2 cm. They should be big enough to bite, not diced small. Peel the cucumber if the skin is tough or waxy. **Use the ripest tomatoes you can find.** There is nothing in the salad to hide a pale, watery tomato.\n\nThe dressing is only oil, vinegar and salt, and it goes on just before serving. Salted vegetables release water quickly and the salad turns to soup.\n\nThe cheese is grated over the top like snow. White brined cheese such as sirene is traditional, but feta is an easy and affordable substitute. Do not stir it in, or it melts away.',
    ing: [
      '4 ripe tomatoes, about 500 g, chopped',
      '2 cucumbers, about 400 g, chopped',
      '1 green pepper, about 150 g, chopped',
      '1 small red onion, about 80 g, sliced',
      '3 tbsp sunflower oil',
      '1 tbsp white wine vinegar',
      '1/2 tsp salt',
      '100 g feta, grated'
    ],
    st: [
      'Put the tomatoes, cucumbers, pepper and onion in a large bowl.',
      'Dress with the oil, vinegar and salt just before serving and toss lightly.',
      'Pile the cheese on top without mixing it in.'
    ],
    tips: [
      'Choose ripe tomatoes.',
      'Dress the salad at the last moment.',
      'Grate the cheese on top.',
      'Serve with crusty bread to soak up the juices.'
    ],
    pair: ['Grilled meat', 'Crusty bread', 'Grilled sausages', 'Roasted peppers'],
    store: 'Best eaten straight away, as it turns watery.',
    nut: [224, 6, 14, 16, 3, 8, 580]
  },

  'tarator': {
    d: 'A cold Balkan soup of cucumber, yoghurt, garlic and dill thinned with water, finished with a trickle of oil.',
    meta: 'Tarator: cold Balkan soup of cucumber, yoghurt, garlic and dill, thinned with water. Four servings, no cooking needed.',
    kw: ['tarator', 'bulgarian tarator', 'cold cucumber and yoghurt soup', 'cold cucumber soup with dill', 'tarator soup'],
    why: 'In the Balkans, tarator is eaten on the hottest days of summer, when a hot dish is unthinkable. It is a cold soup of cucumber and yoghurt, thinned with water until it can be sipped from a bowl, and it takes about 10 minutes to put together.\n\nGrate or finely chop the cucumber. Fine pieces release their juice into the soup, while large ones stay in chunks. Crush the garlic with a pinch of salt into a paste, so it spreads through the soup without any raw bites. **Thin the yoghurt gradually.** Add water a little at a time and whisk until it has the texture of single cream.\n\nDill gives the soup its freshness. Chop it finely and stir it in at the end. A drizzle of oil on top softens the sharpness of the yoghurt.\n\nChill the soup for an hour before serving, and serve it very cold.',
    ing: [
      '2 cucumbers, about 500 g, grated',
      '500 g plain yoghurt',
      '200 ml cold water',
      '2 garlic cloves, crushed',
      '1/2 tsp salt',
      '15 g fresh dill, finely chopped',
      '2 tbsp sunflower oil',
      '20 g walnuts, chopped'
    ],
    rest: [60, 'Chilling'],
    st: [
      'Whisk the yoghurt with the water, garlic and salt until smooth.',
      'Stir in the cucumber and most of the dill.',
      'Chill for 1 hour.',
      'Taste and adjust the salt. Serve in bowls with the oil, walnuts and the rest of the dill on top.'
    ],
    tips: [
      'Thin the yoghurt slowly.',
      'Crush the garlic with salt.',
      'Chill the soup well before serving.',
      'Add ice cubes to the bowls on a very hot day.'
    ],
    pair: ['Crusty bread', 'Grilled vegetables', 'Fried fish', 'Olives'],
    store: 'Keeps in the fridge for 1 day. Stir before serving.',
    nut: [213, 14, 10, 13, 1, 7, 340]
  },

  'pasulj': {
    d: 'A thick Balkan bean stew of white beans, onion, carrot and paprika, slow-cooked until creamy and smoky.',
    meta: 'Pasulj: thick Balkan white bean stew with onion, carrot and paprika, slow-cooked until creamy. Six servings, cooked for 75 minutes.',
    kw: ['pasulj', 'serbian bean stew', 'balkan white bean stew', 'pasulj prebranac style', 'white bean stew with paprika'],
    why: 'Give it time. Pasulj is the kind of stew that rewards patience, and an hour on a low heat turns plain white beans into a creamy pot with a thick, rich broth.\n\nTinned beans cut the cooking time, but a long simmer is still what thickens the broth and brings the flavours together. Start with onion and carrot, soften them in oil, then stir in the paprika off the heat. **Paprika burns in seconds.** It should dissolve into the oil, not fry in it, or the stew will taste bitter.\n\nAdd the beans, bay leaves and water, then simmer with the lid slightly ajar. As the beans soften, some break and thicken the liquid. If it thickens too early, add a splash of hot water.\n\nA smoked sausage or a piece of smoked bacon is traditional and gives the pot its smoky depth. Leave it out and add a pinch of smoked paprika for a vegetarian version.',
    ing: [
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, chopped',
      '2 carrots, about 150 g, diced',
      '2 garlic cloves, crushed',
      '2 tbsp sweet paprika',
      '960 g tinned white beans, drained',
      '2 bay leaves',
      '1 litre water',
      '1 tsp salt',
      '150 g smoked sausage, sliced'
    ],
    st: [
      'Heat the oil in a large pan and cook the onions and carrots for 8 minutes. Add the garlic for 1 minute. Take the pan off the heat.',
      'Stir in the paprika for 30 seconds, then return to the heat and add the beans, bay, water, salt and sausage.',
      'Bring to the boil, lower the heat, partly cover and simmer for 55 minutes, stirring now and then.',
      'Remove the bay. Mash a few beans against the pan to thicken the stew.'
    ],
    tips: [
      'Take the pan off the heat before adding paprika.',
      'Keep the simmer low.',
      'Add hot water if the stew thickens too much.',
      'Leave out the sausage for a vegetarian stew.'
    ],
    pair: ['Crusty bread', 'Pickled peppers', 'Raw onion', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. It tastes better the next day.',
    nut: [318, 15, 33, 14, 11, 5, 1090]
  },

  'bangladeshi-khichuri': {
    d: 'A soft Bangladeshi dish of rice and split yellow lentils cooked with ginger, turmeric and ghee, served with fried eggs or vegetables.',
    meta: 'Bangladeshi khichuri: soft rice and split yellow lentils with ginger, turmeric and ghee. Four servings, cooked for 35 minutes.',
    kw: ['bangladeshi khichuri', 'khichuri', 'bengali khichuri', 'rice and lentil khichuri', 'khichuri with ghee'],
    why: 'On a rainy day in Bangladesh, a pot of khichuri is what people want: soft, warm, fragrant, and cheap enough to feed a crowd. It is one pot of rice and lentils, simmered together until they are almost a porridge.\n\nRoast the lentils in a dry pan for 2 minutes before cooking. They turn pale gold and smell nutty. Rinse them with the rice, then fry both briefly in ghee with onion and spices. **Fry the rice and lentils in the spiced ghee for a minute.** That coats each grain and brings out the flavour.\n\nAdd hot water, stir once, cover and simmer. The ratio is looser than for plain rice, so that the khichuri is moist and spoonable. It thickens as it stands.\n\nServe it hot with a fried egg, a fried vegetable and a spoonful of ghee on top. The sharp pickle on the side is not optional.',
    ing: [
      '150 g basmati rice',
      '150 g split yellow moong dal',
      '3 tbsp ghee',
      '1 onion, about 150 g, sliced',
      '1 tbsp ginger, grated',
      '1/2 tsp ground turmeric',
      '1 tsp cumin seeds',
      '2 bay leaves',
      '900 ml hot water',
      '1 tsp salt'
    ],
    st: [
      'Dry roast the dal in a pan for 2 minutes. Rinse with the rice until the water runs clear.',
      'Heat the ghee in a heavy pan. Fry the cumin seeds and bay for 20 seconds, then the onion for 6 minutes until golden. Add the ginger and turmeric for 1 minute.',
      'Add the rice and dal and fry for 1 minute. Add the hot water and salt and bring to the boil.',
      'Cover, lower the heat and cook for 20 minutes, stirring once, until soft. Add hot water if it is too thick.'
    ],
    tips: [
      'Roast the dal first.',
      'Fry the rice and dal in the spiced ghee.',
      'Use plenty of water, as it thickens on standing.',
      'Serve with a fried egg on top.'
    ],
    pair: ['Fried eggs', 'Fried aubergine', 'Pickle', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 2 days. Add hot water when reheating.',
    nut: [388, 12, 58, 12, 7, 4, 600]
  },

  'bengali-aloo-posto': {
    d: 'Potatoes cooked with a creamy paste of ground white poppy seeds, green chilli and mustard oil, a Bengali dry curry.',
    meta: 'Bengali aloo posto: potatoes cooked with a ground poppy seed paste, green chilli and mustard oil. Four servings, cooked for 20 minutes.',
    kw: ['bengali aloo posto', 'aloo posto', 'potatoes in poppy seed paste', 'aloo posto recipe', 'bengali poppy seed potatoes'],
    why: 'Poppy seeds, potatoes and a green chilli: that is what Bengali aloo posto is, and the surprise is how rich a dish from three ingredients tastes. The poppy seeds are ground to a paste and cooked with the potatoes, which makes a pale, creamy coating.\n\nSoak the white poppy seeds in hot water for 10 minutes, then grind them with a green chilli to a smooth paste. A spice grinder or a mortar works. The paste should be fine, with no grit. **Do not skip the soaking.** Dry seeds will not grind to a paste and leave a gritty texture.\n\nMustard oil is traditional and gives the dish a sharp, pungent bite. Heat it until it smokes slightly, then cool for a moment before adding the potatoes. If you cannot find it, use ordinary oil with a pinch of ground mustard.\n\nCook the potatoes in the oil first for a few minutes, then add the paste and a splash of water. Cover and cook gently until the potatoes are tender and coated.',
    ing: [
      '50 g white poppy seeds',
      '2 green chillies',
      '3 tbsp mustard oil',
      '600 g potatoes, peeled and cut into 2 cm cubes',
      '1/2 tsp salt',
      '150 ml water',
      '1 tsp lemon juice'
    ],
    st: [
      'Soak the poppy seeds in hot water for 10 minutes, drain and grind with 1 chilli and a splash of water to a smooth paste.',
      'Heat the oil in a wide pan until it shimmers, then lower the heat. Add the potatoes and salt and fry for 5 minutes.',
      'Add the paste and water, cover and cook on a low heat for 10 minutes, stirring now and then, until the potatoes are tender.',
      'Slit the remaining chilli and add it with the lemon juice for the last 2 minutes.'
    ],
    tips: [
      'Soak the poppy seeds before grinding.',
      'Grind the paste until completely smooth.',
      'Cook on a low heat so the paste does not scorch.',
      'Use ordinary oil if you cannot find mustard oil.'
    ],
    pair: ['Steamed rice', 'Dal', 'Fried fish', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently with a splash of water.',
    nut: [198, 6, 30, 6, 6, 2, 430]
  },

  'sri-lankan-pol-roti': {
    d: 'Sri Lankan coconut flatbreads of flour, grated coconut, green chilli and onion, cooked in a dry pan.',
    meta: 'Sri Lankan pol roti: coconut flatbreads of flour, grated coconut, chilli and onion, cooked in a dry pan. Four servings, cooked for 15 minutes.',
    kw: ['sri lankan pol roti', 'pol roti', 'coconut roti', 'sri lankan coconut flatbread', 'pol roti with coconut'],
    why: 'Flour, coconut, an onion, a chilli and salt: that is the whole list, and a flatbread that is tender, a little sweet and spicy at the edges. Pol roti is eaten for breakfast across Sri Lanka, with a fiery sambol or a curry.\n\nThe dough is crumbly at first. Rub the coconut into the flour with your fingers, then add water a little at a time until you can press it into a ball. It should be soft, not sticky. **Do not over-knead.** The roti are supposed to be tender and crumbly, not chewy.\n\nShape the dough into balls and pat each flat with your hands on a lightly oiled surface, to about 1 cm thick. A rolling pin tends to break the roti, since the coconut makes it fragile.\n\nCook on a dry, medium-hot pan for about 3 minutes on each side, until brown spots appear. Wrap in a clean cloth to keep soft.',
    ing: [
      '250 g plain flour',
      '100 g grated coconut',
      '1/2 onion, about 75 g, finely chopped',
      '1 green chilli, finely chopped',
      '1 g curry leaves',
      '1 tsp salt',
      '150 ml warm water'
    ],
    st: [
      'Mix the flour, coconut, onion, chilli, curry leaves and salt. Add the water a little at a time until the dough holds together.',
      'Divide into 8 balls. Pat each into a round about 1 cm thick on a lightly oiled surface.',
      'Heat a dry frying pan over a medium heat. Cook each roti for 3 minutes on each side until brown spots appear.',
      'Wrap in a clean cloth to keep warm and soft.'
    ],
    tips: [
      'Add the water gradually.',
      'Pat the roti flat by hand.',
      'Cook on a dry pan, without oil.',
      'Keep them wrapped in a cloth.'
    ],
    pair: ['Lunu miris', 'Dal curry', 'Egg curry', 'Plain yoghurt'],
    store: 'Best eaten fresh. Keeps for 1 day wrapped; reheat on a dry pan.',
    nut: [321, 7, 53, 9, 4, 3, 600]
  },

  'sri-lankan-egg-curry': {
    d: 'Boiled eggs simmered in a coconut milk curry with onion, curry leaves, turmeric and chilli.',
    meta: 'Sri Lankan egg curry: boiled eggs in a coconut milk curry with onion, curry leaves, turmeric and chilli. Four servings, cooked for 20 minutes.',
    kw: ['sri lankan egg curry', 'egg curry with coconut milk', 'sri lankan style egg curry', 'egg curry with curry leaves', 'coconut egg curry'],
    why: 'Most home versions come out thin or greasy, and the fix is to fry the eggs briefly first and to reduce the sauce before the eggs go back in. Frying gives the whites a firm skin that holds the sauce, and reducing the sauce keeps it thick.\n\nBoil the eggs for 10 minutes and peel them. Fry them in oil with a little turmeric until the surface blisters and turns golden. **Do not skip this step.** A boiled egg dropped straight into curry stays slippery and tastes plain.\n\nThe sauce is built on onion, softened until golden, with curry leaves, turmeric and chilli powder. Coconut milk goes in last, with a little water. Simmer until the oil rises in small beads on the surface.\n\nAdd a squeeze of lime at the end. Serve with rice, string hoppers or the coconut roti that goes beautifully with it. Rice or flatbread will mop up the sauce, and a sprinkle of chopped coriander on top adds freshness.',
    ing: [
      '6 eggs, about 300 g',
      '3 tbsp vegetable oil',
      '1/2 tsp ground turmeric',
      '1 onion, about 150 g, sliced',
      '1 g curry leaves',
      '2 garlic cloves, crushed',
      '1 tsp chilli powder',
      '1 tsp ground coriander',
      '400 ml tinned coconut milk',
      '100 ml water',
      '1/2 tsp salt',
      '1 tbsp lime juice'
    ],
    st: [
      'Boil the eggs for 10 minutes, cool in cold water and peel.',
      'Heat 1 tbsp of the oil, add the turmeric and fry the eggs for 3 minutes until blistered and golden. Lift out.',
      'Add the remaining oil and cook the onion with the curry leaves for 6 minutes. Add the garlic, chilli powder and ground coriander for 1 minute.',
      'Add the coconut milk, water and salt and simmer for 8 minutes until thick. Return the eggs for 2 minutes. Stir in the lime juice.'
    ],
    tips: [
      'Fry the boiled eggs briefly before adding them to the sauce.',
      'Simmer, do not boil hard, once the coconut milk is in.',
      'Add the lime juice at the end.',
      'Use less chilli powder for a milder curry.'
    ],
    pair: ['Steamed rice', 'Pol roti', 'String hoppers', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [399, 12, 9, 35, 1, 4, 420]
  },

  'pakistani-daal-chawal': {
    d: 'Yellow lentils simmered with turmeric and tempered with garlic, cumin and chilli, served over plain steamed rice.',
    meta: 'Pakistani daal chawal: yellow lentils with turmeric, tempered with garlic, cumin and chilli, over steamed rice. Four servings, cooked for 30 minutes.',
    kw: ['pakistani daal chawal', 'daal chawal', 'dal chawal', 'yellow lentils and rice', 'daal with tarka and rice'],
    why: 'The first sign it is ready is the sizzle: a spoonful of hot oil with garlic and cumin poured onto the lentils, hissing and filling the room with its smell. That tarka, as the finish is called, turns plain boiled lentils into something to look forward to.\n\nDaal chawal means lentils and rice, and it is one of the most common everyday meals across Pakistan. The lentils are cooked until completely soft, then beaten smooth with a whisk or the back of a spoon. **Skim the foam that rises.** It carries impurities and can make the daal taste soapy.\n\nSalt goes in near the end, so the lentils soften evenly. A small amount of turmeric colours the pot.\n\nThe tarka is cooked in a small pan: oil or ghee, then cumin seeds, garlic, dried chillies and sometimes a pinch of chilli powder. Pour it over the daal at the table, while it sizzles.',
    ing: [
      '250 g split yellow moong dal, rinsed',
      '1 litre water',
      '1/2 tsp ground turmeric',
      '1 tsp salt',
      '250 g basmati rice',
      '3 tbsp ghee',
      '1 tsp cumin seeds',
      '4 garlic cloves, sliced',
      '2 dried red chillies',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Put the lentils, water and turmeric in a pan, bring to the boil and skim off the foam. Simmer for 25 minutes until completely soft.',
      'Meanwhile, cook the rice according to the packet.',
      'Beat the lentils until smooth and stir in the salt.',
      'Heat the ghee in a small pan. Fry the cumin seeds for 20 seconds, then the garlic and chillies for 1 minute until golden. Pour over the daal and scatter with the coriander.'
    ],
    tips: [
      'Skim the foam from the lentils.',
      'Add the salt towards the end.',
      'Heat the ghee fully before the garlic goes in.',
      'Pour the tarka over just before serving.'
    ],
    pair: ['Steamed rice', 'Sliced onion', 'Pickle', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 4 days. Add hot water when reheating.',
    nut: [561, 20, 91, 13, 11, 5, 600]
  },

  'afghan-dal': {
    d: 'An Afghan lentil stew of yellow split peas with onion, tomato, garlic and cumin, finished with fresh coriander.',
    meta: 'Afghan dal: yellow split pea stew with onion, tomato, garlic and cumin, finished with coriander. Four servings, cooked for 35 minutes.',
    kw: ['afghan dal', 'afghan lentil stew', 'afghan yellow split pea stew', 'afghan daal', 'dal with cumin and tomato'],
    why: 'Does an Afghan dal differ from the Indian kind? A little, in its restraint. There is no long list of spice blends here: just onion cooked until golden, a ripe tomato, garlic and cumin, with a squeeze of lemon and fresh coriander at the end.\n\nSplit peas or split lentils take about 25 minutes to cook until soft. Rinse them first and skim off any foam. The onion is cooked separately in oil until deep golden, and half of it is stirred into the dal. **Keep the other half for the top.** It adds a sweet, crisp finish that no spice can replace.\n\nThe tomato goes in with the garlic and cumin and cooks into a thick paste, which is stirred into the pot. A little water loosens the stew.\n\nServe with flatbread or rice. The dish tastes better the next day, once the flavours have blended. A pinch of dried chilli flakes at the end gives a little heat for those who want it.',
    ing: [
      '250 g yellow split peas, rinsed',
      '1 litre water',
      '1/2 tsp ground turmeric',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '3 garlic cloves, crushed',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp ground cumin',
      '1 tsp salt',
      '1 tbsp lemon juice',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Put the split peas, water and turmeric in a pan, bring to the boil, skim, and simmer for 25 minutes until soft.',
      'Meanwhile, heat the oil and fry the onions for 12 minutes until deep golden. Lift out half and set aside.',
      'Add the garlic, tomatoes and cumin to the pan and cook for 6 minutes until thick. Stir into the dal with the salt.',
      'Simmer for 5 minutes. Stir in the lemon juice and coriander and top with the reserved onions.'
    ],
    tips: [
      'Skim the foam from the peas.',
      'Keep some browned onion for the top.',
      'Cook the tomato into a thick paste.',
      'Loosen the dal with hot water as needed.'
    ],
    pair: ['Flatbread', 'Steamed rice', 'Plain yoghurt', 'Sliced onion'],
    store: 'Keeps in the fridge for 4 days. Add hot water when reheating.',
    nut: [359, 17, 48, 11, 18, 10, 610]
  },

  'nepali-aloo-tama': {
    d: 'A Nepali sour curry of potatoes and bamboo shoots with black-eyed beans, cumin, turmeric and tomato.',
    meta: 'Nepali aloo tama: sour curry of potatoes and bamboo shoots with black-eyed beans, cumin and turmeric. Four servings, cooked for 35 minutes.',
    kw: ['nepali aloo tama', 'aloo tama', 'nepali potato and bamboo shoot curry', 'aloo tama bodi', 'bamboo shoot and potato curry'],
    why: 'Most home versions come out flat, and the fix is the sourness. Aloo tama is a Nepali curry whose character comes from fermented bamboo shoots, which give a sharp, tangy edge that cuts through the potato and beans. Tinned bamboo shoots are a milder stand-in, so add a squeeze of lime at the end to bring back the tang.\n\nRinse the bamboo shoots well to remove the brine. Cook the tomato, ginger and spices in oil first, until the oil rises to the surface. **Cook the masala properly.** A raw spice mix gives the curry a harsh edge.\n\nPotatoes go in cut into 2 cm cubes, with the bamboo shoots and tinned black-eyed beans. Cover and simmer until the potatoes are soft and the sauce has thickened.\n\nServe with steamed rice. The dish keeps well and is better the next day, when the sourness has settled. If the bamboo shoots are very mild, a teaspoon of the lime juice at the table lifts the whole pot.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger and garlic paste',
      '2 tomatoes, about 200 g, chopped',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '400 g potatoes, peeled and cut into 2 cm cubes',
      '230 g tinned bamboo shoots, drained and rinsed',
      '480 g tinned black-eyed beans, drained',
      '400 ml water',
      '1 tsp salt',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oil and fry the cumin seeds for 20 seconds. Add the onion and cook for 6 minutes. Add the ginger and garlic paste for 1 minute.',
      'Add the tomatoes, turmeric and chilli powder and cook for 6 minutes until the oil separates.',
      'Add the potatoes, bamboo shoots, beans, water and salt. Cover and simmer for 20 minutes until the potatoes are soft.',
      'Stir in the lime juice and taste. Add more if the curry needs a sharper edge.'
    ],
    tips: [
      'Rinse the bamboo shoots well.',
      'Cook the masala until the oil separates.',
      'Add lime juice to taste at the end.',
      'Let the curry stand before serving.'
    ],
    pair: ['Steamed rice', 'Pickle', 'Plain yoghurt', 'Sliced onion'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [352, 13, 48, 12, 12, 8, 970]
  }
};
