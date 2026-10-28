'use strict';

/**
 * Volume forty-six — soups and stews, first part.
 *
 * Twenty soups and stews built on the cheapest things in the shop: lentils,
 * potatoes, cabbage, beans, tomatoes and eggs. Each needs one pan and a hob.
 * Times are the recipe's own; hobs differ, so each method says what to look
 * for as well as how long. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'lentil-and-carrot-soup': {
    d: 'Red lentils and carrots simmered with onion, cumin and stock into a thick orange soup that needs no blender.',
    meta: 'Lentil and carrot soup: red lentils, carrots, onion and cumin simmered in stock until thick. Four servings, cooked for 30 minutes.',
    kw: ['lentil and carrot soup', 'red lentil and carrot soup', 'carrot and lentil soup', 'lentil carrot soup with cumin', 'homemade lentil and carrot soup'],
    why: 'The first sign it is ready is the colour: the carrots soften, the lentils fall apart and the whole pot turns deep orange. Red lentils do most of the work, collapsing into the stock so that no cream or blender is needed. Nothing else is required.\n\nCook the onion and carrot in the oil for 5 minutes before any liquid goes in. That short step builds a sweet base that plain boiling cannot. Add the cumin with them so the spice warms in the fat. **Rinse the lentils until the water runs clear.** It removes the dust and the foam that otherwise gathers on top.\n\nSimmer gently and stir now and then, because lentils settle and catch on the base of the pan. If the soup thickens too much, add a splash of water. Season at the end, since stock and lentils both change how salty it tastes.\n\nMash a few ladlefuls against the side of the pan for a thicker body. A squeeze of lemon lifts the whole pot.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '400 g carrots, diced',
      '1 tsp ground cumin',
      '200 g red lentils, rinsed',
      '1 litre vegetable stock',
      '1/2 tsp salt',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion and carrots for 5 minutes, stirring now and then.',
      'Stir in the cumin for 30 seconds, then add the lentils and the stock.',
      'Bring to the boil, then lower the heat and simmer for 25 minutes, stirring now and then, until the lentils and carrots are soft.',
      'Mash a few ladlefuls against the side of the pan for a thicker soup. Stir in the salt and lemon juice and add water if it is too thick.'
    ],
    tips: [
      'Rinse the lentils before they go in.',
      'If the soup sticks, turn the heat down and stir more often.',
      'Add the lemon juice at the end so its flavour stays bright.',
      'A pinch of chilli flakes warms it without changing the method.'
    ],
    pair: ['Crusty bread', 'Toast with butter', 'A spoonful of yoghurt', 'Grated cheddar'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months. The soup thickens as it cools, so loosen with water when reheating.',
    nut: [289, 16, 45, 5, 9, 7, 1190]
  },

  'red-lentil-and-tomato-soup': {
    d: 'Red lentils cooked in tinned tomatoes, garlic and stock until they dissolve into a smooth, thick soup.',
    meta: 'Red lentil and tomato soup: red lentils simmered with tinned tomatoes, garlic and stock until thick. Four servings, cooked for 25 minutes.',
    kw: ['red lentil and tomato soup', 'tomato and lentil soup', 'lentil tomato soup', 'red lentil soup with tomatoes', 'tinned tomato lentil soup'],
    why: 'A Sunday dish for four, and good enough on Monday that it is worth making extra. It uses a pantry shelf rather than a shopping list: a tin of tomatoes, a bag of red lentils, an onion and some stock.\n\nRed lentils need no soaking and cook quickly because they have no skin. They soften until they almost vanish, which is why the soup comes out thick without cream. **Do not add salt to the water at the start.** Add it at the end, once the tomatoes and stock have had their say.\n\nCook the onion and garlic first for 5 minutes in the oil. Garlic that browns turns bitter, so keep the heat moderate. Then add the tomatoes, lentils and stock together.\n\nStir often near the end. Lentils sink and stick, and a scorched base would spoil the whole pot. Blend the soup if you want it silky, or leave it rough. Both work.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '200 g red lentils, rinsed',
      '400 g tinned chopped tomatoes',
      '800 ml vegetable stock',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion for 5 minutes until soft. Add the garlic for 1 minute.',
      'Add the lentils, tomatoes, stock and oregano and bring to the boil.',
      'Lower the heat and simmer for 15 minutes, stirring often, until the lentils have collapsed.',
      'Season with the salt and pepper. Blend if you want a smooth soup, or serve as it is.'
    ],
    tips: [
      'Stir often once the soup thickens.',
      'Season at the end, not the start.',
      'If the soup is too thick, add water a splash at a time.',
      'Blend half the soup for a texture between smooth and rough.'
    ],
    pair: ['Crusty bread', 'Cheese on toast', 'A swirl of yoghurt', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [269, 16, 40, 5, 8, 5, 960]
  },

  'cabbage-and-potato-soup': {
    d: 'Shredded cabbage, potatoes and onion simmered in stock until the potatoes thicken the broth, finished with butter.',
    meta: 'Cabbage and potato soup: cabbage, potatoes and onion simmered in stock and finished with butter. Four servings, cooked for 30 minutes.',
    kw: ['cabbage and potato soup', 'irish cabbage and potato soup', 'potato and cabbage soup', 'cabbage potato soup', 'cabbage and potato soup with butter'],
    why: 'Cabbage, potatoes, an onion, stock and butter: five things from the bottom of the vegetable rack, and about 40 minutes.\n\nThe potatoes do two jobs. They cook until tender and then, when you crush a few against the side of the pan, they thicken the broth into something closer to a stew. No flour or cream is needed. Cut them into pieces of similar size so they cook evenly.\n\nAdd the cabbage after the potatoes have had a head start. If it goes in too early it turns grey and loses its sweetness. **Cook the cabbage for only 10 minutes.** It should be soft but still green.\n\nButter goes in at the end, because it tastes better when it is not boiled. Finish with plenty of black pepper. Its sharpness suits the sweet cabbage. A grind of black pepper at the table and a knob of butter on each bowl turn a plain, thrifty soup into something comforting enough for a cold evening.',
    ing: [
      '1 tbsp butter',
      '1 onion, about 150 g, chopped',
      '500 g potatoes, peeled and diced',
      '1 litre vegetable stock',
      '300 g green cabbage, shredded',
      '1 tbsp butter, to finish',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Melt the first measure of butter in a large pan and cook the onion for 5 minutes until soft.',
      'Add the potatoes and stock, bring to the boil and simmer for 15 minutes until the potatoes are tender.',
      'Add the cabbage and simmer for 10 minutes until soft but still green.',
      'Crush a few potatoes against the side of the pan to thicken the soup. Stir in the second measure of butter, the salt and the pepper.'
    ],
    tips: [
      'Cut the potatoes evenly so they cook at the same pace.',
      'Add the cabbage late so it keeps its colour.',
      'Crush a few potatoes for body rather than adding flour.',
      'If the broth is too thick, loosen it with a little water.'
    ],
    pair: ['Soda bread', 'Crusty bread', 'Grated cheddar', 'Sliced ham'],
    store: 'Keeps in the fridge for 3 days. Reheat gently; the potatoes thicken it further as it cools.',
    nut: [202, 6, 31, 6, 5, 5, 1140]
  },

  'tomato-and-egg-soup': {
    d: 'A light, savoury soup of ripe tomatoes and ribbons of beaten egg, seasoned with soy sauce and spring onion.',
    meta: 'Tomato and egg soup: ripe tomatoes in a light broth with ribbons of egg, soy sauce and spring onion. Two servings, cooked for 10 minutes.',
    kw: ['tomato and egg soup', 'chinese tomato egg soup', 'tomato egg drop soup', 'tomato and egg soup with spring onion', 'homemade tomato and egg soup'],
    why: 'Tomatoes and eggs are one of the most common pairings in Chinese home cooking, and this soup shows why. The acidity of the tomato cuts through the soft, mild egg.\n\nCook the tomatoes in the oil for 3 minutes before the water goes in. They break down and give the broth a deep red colour and a sweeter taste. Ripe tomatoes work best; if yours are pale, add a pinch of sugar.\n\nPour the beaten egg into the simmering broth in a thin stream while stirring gently in one direction. **Keep the heat low when the egg goes in.** A hard boil breaks it into small crumbs rather than long ribbons.\n\nSeason at the end. Soy sauce is salty, so taste before adding more. Serve it straight away, while the ribbons of egg are soft and the broth is hot, ideally with a bowl of steamed rice alongside to soak up the tomato.',
    ing: [
      '1 tbsp vegetable oil',
      '300 g ripe tomatoes, chopped',
      '600 ml water',
      '2 eggs, about 100 g, beaten',
      '1 tbsp soy sauce',
      '1/4 tsp salt',
      '1/2 tsp sesame oil',
      '2 spring onions, about 20 g, sliced'
    ],
    st: [
      'Heat the oil in a pan and cook the tomatoes for 3 minutes until they start to collapse.',
      'Add the water, bring to a simmer and cook for 5 minutes.',
      'Turn the heat down low. Pour in the beaten egg in a thin stream, stirring gently in one direction.',
      'Add the soy sauce and salt, then the sesame oil. Serve with the spring onions on top.'
    ],
    tips: [
      'Cook the tomatoes until they break down before adding water.',
      'Pour the egg slowly while stirring for long ribbons.',
      'If the soup tastes sharp, add a pinch of sugar.',
      'Taste before adding extra soy sauce.'
    ],
    pair: ['Steamed rice', 'Egg fried rice', 'Stir fried greens'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat gently so the egg stays tender.',
    nut: [177, 8, 7, 13, 2, 4, 810]
  },

  'roast-tomato-soup': {
    d: 'Tomatoes, onion and garlic roasted until their edges caramelise, then simmered with stock and blended smooth.',
    meta: 'Roast tomato soup: tomatoes, onion and garlic roasted until caramelised, then blended with stock. Four servings, cooked for 45 minutes.',
    kw: ['roast tomato soup', 'roasted tomato soup', 'oven roasted tomato soup', 'roasted tomato and garlic soup', 'homemade roast tomato soup'],
    why: 'The smell tells you when it is ready: sweet, a little smoky and close to jam as the tomato skins blister and darken at the edges. That roasting is the whole point of this soup.\n\nHeat concentrates a tomato. Water leaves, sugars brown and the flavour deepens in a way that simmering in a pan never manages. Tinned tomatoes are fine for a quick soup, but fresh ones roasted at 200°C give a rounder taste.\n\nSpread the tomatoes, onion and garlic in a single layer on the tray. A crowded tray steams rather than roasts. **Turn them once halfway through.** The browned bits on the tray are flavour, so scrape them into the pan with the stock.\n\nBlend until smooth, then taste. If the soup is sharp, add a pinch of sugar. If it is thin, simmer it for a few minutes more. For a thicker soup, blend it for longer or simmer it with the lid off for a few minutes. For a thinner one, stir in a little more hot stock.',
    ing: [
      '800 g ripe tomatoes, halved',
      '1 onion, about 150 g, quartered',
      '4 garlic cloves, unpeeled',
      '2 tbsp olive oil',
      '500 ml vegetable stock',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tsp sugar'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Put the tomatoes, onion and garlic on a tray, toss with the oil, salt and pepper and spread in a single layer.',
      'Roast for 35 minutes, turning once halfway, until the edges are browned.',
      'Squeeze the garlic from its skins. Tip everything, with the browned bits from the tray, into a pan with the stock.',
      'Simmer for 10 minutes, then blend until smooth. Add the sugar if the soup tastes sharp.'
    ],
    tips: [
      'Use a tray big enough to hold the tomatoes in one layer.',
      'If your oven runs hot, check the tomatoes at 25 minutes.',
      'Scrape the tray into the soup, because the browned bits carry flavour.',
      'Add the sugar only if the soup needs it.'
    ],
    pair: ['Cheese toastie', 'Crusty bread', 'Basil leaves', 'A swirl of cream'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [144, 4, 14, 8, 3, 8, 720]
  },

  'greek-lentil-soup': {
    d: 'Brown lentils simmered with onion, carrot, garlic and bay, finished with red wine vinegar and olive oil.',
    meta: 'Greek lentil soup (fakes): brown lentils, onion, carrot and bay, finished with vinegar and olive oil. Four servings, cooked for 40 minutes.',
    kw: ['greek lentil soup', 'fakes soup', 'fakes greek lentil soup', 'greek brown lentil soup', 'lentil soup with vinegar'],
    why: 'Lentil soup belongs to the cold months, when a pot on the hob heats the kitchen and costs almost nothing. This Greek version, called fakes, is plain on purpose.\n\nBrown or green lentils hold their shape better than red ones, so the soup stays brothy rather than turning to purée. Rinse them, then pick out any stones. **Add the vinegar at the end, off the heat.** It brightens the whole pot, but boiling takes the sharpness out.\n\nThe tomato paste adds depth, and a bay leaf gives the broth a quiet savoury note. Keep the simmer gentle. A hard boil splits the lentil skins and clouds the broth.\n\nA generous trickle of olive oil on each bowl is traditional. Serve it hot with bread. Taste it once it has rested for 10 minutes off the heat. Lentil soup settles and deepens as it stands, so the vinegar and salt often need a final adjustment.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '3 garlic cloves, sliced',
      '250 g brown lentils, rinsed',
      '1 tbsp tomato paste',
      '2 bay leaves',
      '1.2 litres water',
      '1/2 tsp salt',
      '2 tbsp red wine vinegar'
    ],
    st: [
      'Heat 1 tbsp of the oil in a large pan and cook the onion and carrots for 5 minutes. Add the garlic for 1 minute.',
      'Stir in the lentils, tomato paste, bay and water and bring to the boil.',
      'Lower the heat and simmer for 30 minutes until the lentils are tender.',
      'Remove the bay. Stir in the salt, vinegar and the rest of the oil, and serve.'
    ],
    tips: [
      'Keep the simmer gentle so the lentils hold their shape.',
      'Add the vinegar at the end and taste before adding more.',
      'Rinse the lentils and check them for small stones.',
      'If the soup is too thick, loosen it with hot water.'
    ],
    pair: ['Crusty bread', 'Olives', 'Feta', 'Sliced onion'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months. It thickens as it stands, so add water when reheating.',
    nut: [351, 17, 46, 11, 9, 5, 330]
  },

  'moroccan-chickpea-soup': {
    d: 'Chickpeas, tomatoes and onion simmered with cumin, paprika and cinnamon, finished with lemon and coriander.',
    meta: 'Moroccan chickpea soup: chickpeas and tomatoes simmered with cumin, paprika and cinnamon, finished with lemon. Four servings, cooked for 35 minutes.',
    kw: ['moroccan chickpea soup', 'moroccan spiced chickpea soup', 'chickpea and tomato soup', 'spiced chickpea soup', 'chickpea soup with cumin and cinnamon'],
    why: 'Toast the spices. Cumin, paprika and cinnamon stirred into hot oil for 30 seconds release their oils and turn a plain pot of chickpeas into something with depth.\n\nTinned chickpeas make this a quick soup, and they are among the cheapest sources of protein in the shop. Drain and rinse them first to lose the starchy liquid, which can turn the broth cloudy and slightly slimy.\n\nCrush a few chickpeas with the back of a spoon near the end. They thicken the soup so it feels like a stew without any flour. **Do not skip the lemon juice.** It lifts the spices and stops the soup tasting flat.\n\nFinish with fresh coriander. If you have none, parsley works. The soup improves overnight as the flavours settle. If the soup seems too thick after standing, loosen it with a splash of hot water and taste again, as the spices mellow a little overnight.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '1/2 tsp ground cinnamon',
      '400 g tinned chopped tomatoes',
      '480 g tinned chickpeas, drained',
      '750 ml vegetable stock',
      '1 tbsp lemon juice',
      '10 g fresh coriander, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion for 5 minutes until soft. Add the garlic for 1 minute.',
      'Stir in the cumin, paprika and cinnamon for 30 seconds.',
      'Add the tomatoes, chickpeas and stock and bring to the boil. Simmer for 20 minutes.',
      'Crush a few chickpeas against the side of the pan. Stir in the lemon juice, salt and coriander.'
    ],
    tips: [
      'Toast the spices in the oil before any liquid goes in.',
      'Drain and rinse the chickpeas to keep the broth clear.',
      'Crush some chickpeas to thicken the soup naturally.',
      'Add the lemon juice last so it tastes fresh.'
    ],
    pair: ['Flatbread', 'Plain yoghurt', 'Dates', 'Harissa'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [271, 12, 31, 11, 8, 8, 1280]
  },

  'czech-potato-soup': {
    d: 'A thick Czech soup of potatoes, carrot, celery and onion seasoned with marjoram and caraway, with mushrooms stirred in.',
    meta: 'Czech potato soup: potatoes, carrot and onion simmered with marjoram and caraway, thickened with a little flour. Four servings, cooked for 35 minutes.',
    kw: ['czech potato soup', 'bramborova polevka', 'potato soup with marjoram', 'czech potato soup with caraway', 'traditional czech potato soup'],
    why: 'Bramborová polévka is the name in Czech, and it is among the plainest soups in the Czech kitchen: potatoes, root vegetables, a little fat and a handful of dried herbs.\n\nThe flavour comes from two seasonings. Marjoram gives a gentle, savoury note, and caraway seeds add a warmth that suits potatoes. Crush the caraway lightly in a mortar, or press the seeds under a knife, so they release their aroma into the soup.\n\nA spoonful of flour stirred into the softened vegetables thickens the broth slightly. **Cook the flour for 1 minute before the stock.** Raw flour tastes pasty, and a short cook removes that.\n\nCut the potatoes into small, even cubes, about the size of a thumb joint. They cook faster and thicken the soup as some of them break down. Mash a few if you want it thicker still. Marjoram is the herb that makes this taste Czech, so do not swap it for something stronger. A spoonful of sour cream in each bowl is a good finish.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 carrot, about 100 g, diced',
      '1 celery stick, about 50 g, diced',
      '1 tbsp plain flour',
      '600 g potatoes, peeled and diced',
      '1 litre vegetable stock',
      '1 tsp dried marjoram',
      '1/2 tsp caraway seeds, lightly crushed',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, carrot and celery for 5 minutes until soft.',
      'Stir in the flour and cook for 1 minute. Add the potatoes, stock, marjoram and caraway.',
      'Bring to the boil, then lower the heat and simmer for 25 minutes until the potatoes are very tender.',
      'Mash a few potatoes against the side of the pan to thicken. Season with the salt and pepper.'
    ],
    tips: [
      'Crush the caraway seeds lightly before they go in.',
      'Cook the flour for a minute so it loses its raw taste.',
      'Cut the potatoes small so they cook quickly.',
      'If the soup is too thick, loosen it with hot water.'
    ],
    pair: ['Rye bread', 'Sliced sausage', 'Pickled cucumber', 'Sour cream'],
    store: 'Keeps in the fridge for 3 days. The potatoes thicken it further, so add water when reheating.',
    nut: [208, 7, 36, 4, 5, 4, 1160]
  },

  'german-potato-soup': {
    d: 'Kartoffelsuppe: a thick German potato soup with carrot, leek, bacon and a splash of vinegar to finish.',
    meta: 'German potato soup (Kartoffelsuppe): potatoes, carrot, leek and bacon simmered in stock and lightly mashed. Four servings, cooked for 35 minutes.',
    kw: ['german potato soup', 'kartoffelsuppe', 'german potato soup with bacon', 'potato soup with leek and carrot', 'traditional german potato soup'],
    why: 'It smells of bacon first, then of onion softening in the fat. That is the signal to add the potatoes, and the beginning of a soup that has long been a plain German staple.\n\nThe bacon matters, but only a little of it: two rashers, chopped small, give the whole pot a smoky, salty base. Cook it slowly so the fat runs out before the vegetables go in. Skip the bacon and use oil for a meat-free soup.\n\nLeave the soup chunky or mash it roughly. **Do not blend it smooth.** Kartoffelsuppe should have pieces of potato and carrot, and a coarse mash gives the thickness.\n\nA small splash of vinegar at the end is the traditional finish. It brightens the starchy potatoes and makes the flavour clearer. Add it a little at a time and taste. Add the parsley at the table rather than in the pot. It keeps its colour and its fresh, green flavour against the smoky bacon and soft potato.',
    ing: [
      '100 g bacon, diced',
      '1 onion, about 150 g, chopped',
      '1 leek, about 150 g, sliced',
      '2 carrots, about 150 g, diced',
      '600 g potatoes, peeled and diced',
      '1 litre chicken stock',
      '1 bay leaf',
      '1/2 tsp black pepper',
      '1 tbsp white wine vinegar',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Cook the bacon in a large pan for 5 minutes until the fat runs and the edges brown.',
      'Add the onion, leek and carrots and cook for 5 minutes.',
      'Add the potatoes, stock and bay and bring to the boil. Simmer for 20 minutes until the potatoes are tender.',
      'Remove the bay and mash roughly. Stir in the pepper and vinegar and scatter with the parsley.'
    ],
    tips: [
      'Cook the bacon slowly so its fat runs before the vegetables go in.',
      'Mash the soup roughly rather than blending it.',
      'Add the vinegar a little at a time and taste.',
      'Without bacon, use a tablespoon of oil and add a pinch of smoked paprika.'
    ],
    pair: ['Rye bread', 'Sausages', 'Pickles', 'Mustard'],
    store: 'Keeps in the fridge for 3 days. Add water when reheating, as the potatoes thicken it.',
    nut: [240, 11, 40, 4, 6, 6, 1250]
  },

  'romanian-bean-soup': {
    d: 'A sour Romanian soup of white beans, carrot, celery and peppers, finished with tomato paste, paprika and lemon juice.',
    meta: 'Romanian bean soup: white beans simmered with carrot, celery and peppers, finished with lemon and herbs. Six servings, cooked for 45 minutes.',
    kw: ['romanian bean soup', 'ciorba de fasole', 'romanian white bean soup', 'white bean soup with lemon', 'bean soup with peppers and celery'],
    why: 'Sour is the point. Romanian soups called ciorbă are made tart with lemon juice or fermented liquid, and the sharpness is what keeps a plain pot of beans from tasting heavy.\n\nTinned white beans make the soup fast, and they are cheap. Drain and rinse them, then simmer them with the vegetables so they take on the flavour of the stock. Tinned beans are already cooked, so they need only enough time to absorb the broth.\n\nCook the paprika in the oil for just 30 seconds, off a high heat. **Paprika burns quickly and turns bitter.** If it darkens, start again with a fresh spoonful.\n\nAdd the lemon juice at the end and taste. A soup that seems flat usually needs a little more. Fresh dill or parsley on top gives colour and a green note. Offer extra lemon at the table, because people differ on how sour they like it. A few slices of fresh chilli on top add a pleasant sharp heat.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '2 celery sticks, about 100 g, diced',
      '1 red pepper, about 150 g, diced',
      '1 tbsp tomato paste',
      '1 tsp paprika',
      '960 g tinned white beans, drained',
      '1.2 litres vegetable stock',
      '1 bay leaf',
      '3 tbsp lemon juice',
      '15 g fresh parsley, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, carrots, celery and pepper for 8 minutes until soft.',
      'Stir in the tomato paste and paprika for 30 seconds.',
      'Add the beans, stock and bay and bring to the boil. Simmer for 30 minutes.',
      'Remove the bay. Stir in the lemon juice, salt and parsley. Add more lemon if the soup tastes flat.'
    ],
    tips: [
      'Keep the heat low when the paprika goes in.',
      'Rinse the beans so the broth stays clear.',
      'Taste before serving, then add lemon juice a spoonful at a time.',
      'Crush a few beans against the pan for a thicker broth.'
    ],
    pair: ['Crusty bread', 'Sliced onion', 'Chilli flakes', 'Sour cream'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [246, 14, 34, 6, 10, 5, 1370]
  },

  'zuppa-di-fagioli': {
    d: 'A thick Italian bean soup of cannellini beans, onion, celery, carrot and rosemary, finished with olive oil.',
    meta: 'Zuppa di fagioli: Italian cannellini bean soup with onion, celery, carrot and rosemary. Four servings, cooked for 40 minutes.',
    kw: ['zuppa di fagioli', 'italian bean soup', 'cannellini bean soup', 'white bean soup with rosemary', 'tuscan style bean soup'],
    why: 'Zuppa di fagioli simply means bean soup, and the recipe is exactly as plain as that sounds. Beans, a few vegetables, a sprig of rosemary and good olive oil are all it needs.\n\nThe base of onion, celery and carrot is cooked slowly in oil until soft, with no browning. That gentle cooking sweetens them and gives the soup its savoury depth. **Take your time over this step.** Rushing it leaves a raw edge that boiling does not remove.\n\nTinned cannellini beans save hours and cost very little. Mash about a third of them against the side of the pan to make a creamy broth without any cream. The rest stay whole for texture.\n\nFinish with a thread of olive oil on each bowl. It adds richness and a fruity note. Serve with bread for dipping. A rind of parmesan simmered in the pot adds savoury depth at no extra cost. Fish it out before serving, along with the rosemary stalks.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 celery sticks, about 100 g, diced',
      '2 carrots, about 150 g, diced',
      '3 garlic cloves, sliced',
      '960 g tinned cannellini beans, drained',
      '1 litre vegetable stock',
      '2 sprigs fresh rosemary',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat 2 tbsp of the oil in a large pan. Cook the onion, celery and carrots over a low heat for 10 minutes until soft.',
      'Add the garlic for 1 minute, then the beans, stock and rosemary.',
      'Bring to the boil and simmer for 25 minutes.',
      'Remove the rosemary. Mash a third of the beans against the side of the pan, season, and serve with the remaining oil trickled over.'
    ],
    tips: [
      'Cook the vegetables slowly until soft, without browning.',
      'Mash some of the beans for a creamy broth.',
      'Rinse the beans first to get rid of the canning liquid.',
      'Use the best olive oil you have for the final trickle.'
    ],
    pair: ['Toasted bread', 'Grated parmesan', 'Cavolo nero', 'Chilli oil'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [372, 19, 47, 12, 14, 5, 1890]
  },

  'acquacotta': {
    d: 'A rustic Italian soup of onion, celery, tomato and stale bread with an egg poached in the broth.',
    meta: 'Acquacotta: Italian soup of onion, celery and tomato poured over stale bread, with a poached egg on top. Four servings, cooked for 30 minutes.',
    kw: ['acquacotta', 'acquacotta soup', 'tuscan acquacotta', 'italian bread and egg soup', 'tomato and bread soup with egg'],
    why: 'Acquacotta means "cooked water", and the name is the whole joke: very little goes in, and it still comes out as a meal. It belongs to the end of autumn, when the last tomatoes are on the vine and a loaf has gone hard.\n\nThe soup is built in layers. Onion and celery soften in oil, tomatoes cook down, and water turns the pot into a thin, sweet broth. Stale bread sits in each bowl and soaks it up. **Use bread that has dried out.** Fresh bread dissolves into paste.\n\nThe egg goes in last. Make a dip in the simmering soup with a spoon, crack the egg in and cook it for 3 minutes, so the white sets and the yolk stays soft.\n\nA little grated cheese on top is traditional but not needed. Leftover bread is the point of this soup, so keep a heel of any loaf for it. Even a slice of toasted sandwich bread will do in an emergency.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, sliced',
      '2 celery sticks, about 100 g, diced',
      '2 garlic cloves, sliced',
      '400 g tinned chopped tomatoes',
      '800 ml water',
      '1/2 tsp salt',
      '4 eggs, about 200 g',
      '4 slices stale bread, about 120 g',
      '20 g parmesan, grated'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion and celery for 8 minutes until soft. Add the garlic for 1 minute.',
      'Add the tomatoes, water and salt and simmer for 15 minutes.',
      'Put a slice of bread in each of 4 bowls. Make 4 dips in the simmering soup and crack an egg into each. Cook for 3 minutes until the white is set.',
      'Lift each egg into a bowl, ladle the soup over the bread and finish with the parmesan.'
    ],
    tips: [
      'Choose bread that is properly dry.',
      'Make a dip in the soup before you drop in each egg.',
      'Cook the eggs gently so the whites set before the yolks.',
      'Taste the broth before the eggs go in and adjust the salt.'
    ],
    pair: ['Green salad', 'Olives', 'More bread', 'A glass of red wine'],
    store: 'Best eaten straight away. The broth keeps for 3 days without the bread and eggs; poach fresh eggs when serving.',
    nut: [306, 12, 24, 18, 3, 6, 610]
  },

  'pastina-in-brodo': {
    d: 'Tiny star-shaped pasta cooked in hot stock until soft, finished with butter and parmesan.',
    meta: 'Pastina in brodo: tiny pasta cooked in stock and finished with butter and parmesan. Two servings, cooked for 10 minutes.',
    kw: ['pastina in brodo', 'pastina soup', 'italian pastina', 'pastina with butter and parmesan', 'pastina in chicken stock'],
    why: 'Cook it in stock. That single choice is what makes pastina taste like something and not a bowl of plain pasta. The tiny shapes soak up the liquid as they soften, and the starch thickens the broth to a gentle porridge.\n\nPastina means "little pasta", and any very small shape works: stars, little rings or even broken-up spaghetti. They cook in about 5 minutes, so the dish goes from pan to bowl before you have time to wonder what else to make.\n\nStir while it cooks. Small pasta settles and sticks, and the starch it releases is what makes the soup creamy. **Take it off the heat while it is still loose.** Pastina keeps absorbing liquid in the bowl, and it thickens fast.\n\nButter and parmesan go in at the end and melt into the hot pasta. It is the soup people reach for when they are tired or unwell. Keep a packet of tiny pasta in the cupboard and it is ready in minutes.',
    ing: [
      '500 ml chicken stock',
      '80 g pastina',
      '1 tbsp butter',
      '20 g parmesan, grated',
      '1/4 tsp black pepper'
    ],
    st: [
      'Bring the stock to the boil in a small pan.',
      'Add the pastina and cook for 5 minutes, stirring often, until soft.',
      'Take the pan off the heat and stir in the butter and parmesan until melted.',
      'Season with the pepper and serve straight away, adding a splash of hot water if it has thickened.'
    ],
    tips: [
      'Stir often so the pasta does not stick.',
      'If the stock is salty, taste before adding any extra salt.',
      'Add hot water if the pastina thickens in the bowl.',
      'Beat in an egg off the heat for a richer bowl.'
    ],
    pair: ['Toast', 'Steamed greens', 'A soft-boiled egg'],
    store: 'Best eaten straight away, as the pasta keeps soaking up liquid. If you must keep it, loosen it with hot water when reheating.',
    nut: [262, 11, 32, 10, 1, 1, 980]
  },

  'persian-barley-soup': {
    d: 'A thick Persian soup of pearl barley, carrot, onion, celery and chickpeas, finished with lemon juice and parsley.',
    meta: 'Persian barley soup: pearl barley simmered with carrot, onion and chickpeas, finished with lemon and herbs. Six servings, cooked for 60 minutes.',
    kw: ['persian barley soup', 'soup e jo', 'barley and vegetable soup', 'barley soup with chickpeas', 'persian style barley soup'],
    why: 'Give it a full hour. Pearl barley takes time, and shortening the cooking leaves it chewy in the middle and the broth thin.\n\nThe soup is known in Persian as soup-e jo, and it is a staple of cold weather. Barley releases starch as it softens and turns the pot thick and creamy with no dairy at all. Rinse the barley first to wash away the loose starch that otherwise clouds the broth.\n\nThe vegetables go in with the barley so everything softens together. Turmeric gives the broth a warm yellow colour and a gentle earthy note. **Stir every few minutes.** Barley sinks and catches on the base of the pan.\n\nAdd water if the soup gets too thick, as it will keep thickening as it stands. Finish with lemon juice and a handful of parsley. They bring the whole pot to life. Good with a spoonful of plain yoghurt and a scatter of dried mint. The cool, tangy yoghurt contrasts nicely with the thick, hearty barley.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '2 celery sticks, about 100 g, diced',
      '1/2 tsp ground turmeric',
      '150 g pearl barley, rinsed',
      '240 g tinned chickpeas, drained',
      '1.5 litres vegetable stock',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp lemon juice',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, carrots and celery for 8 minutes until soft.',
      'Stir in the turmeric, then add the barley, chickpeas and stock. Bring to the boil.',
      'Lower the heat, cover and simmer for 50 minutes, stirring every few minutes, until the barley is tender.',
      'Add the salt, pepper and lemon juice. Stir in the parsley and add water if the soup is too thick.'
    ],
    tips: [
      'Rinse the barley before it goes in.',
      'Stir every few minutes so it does not catch.',
      'Add hot water if the soup thickens too much.',
      'Taste for lemon at the end, as barley soaks up acidity as it stands.'
    ],
    pair: ['Flatbread', 'Plain yoghurt', 'Fresh mint', 'Pickled cucumber'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months. It thickens as it cools, so loosen with water when reheating.',
    nut: [235, 9, 34, 7, 7, 4, 1180]
  },

  'sausage-and-bean-stew': {
    d: 'Pork sausages browned and simmered with tinned beans, tomatoes, onion and smoked paprika until thick.',
    meta: 'Sausage and bean stew: browned sausages simmered with beans, tomatoes and smoked paprika. Four servings, cooked for 35 minutes.',
    kw: ['sausage and bean stew', 'sausage and bean casserole', 'sausage and butter bean stew', 'sausage and white bean stew', 'sausage stew with tomatoes and beans'],
    why: 'Why does a sausage stew taste so much better than the same ingredients on a plate? Because the sausages brown first, and those browned bits in the pan become the base of the sauce.\n\nCook the sausages whole in a little oil until deep golden on all sides, about 8 minutes. They do not need to cook through yet, as they finish in the stew. Take them out, then soften the onion in the fat left behind. **Do not wash the pan between steps.** The brown residue is pure flavour.\n\nBeans do the heavy lifting here. They soak up the tomato and the paprika, and some of them break down to thicken the sauce. Tinned butter beans or haricot beans both work.\n\nSlice the sausages into pieces before serving so everyone gets some in every spoonful. Choose good-quality sausages with a high meat content, as cheap ones shed a lot of water and make the sauce thin and pale.',
    ing: [
      '8 pork sausages, about 450 g',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, sliced',
      '2 garlic cloves, crushed',
      '1 tsp smoked paprika',
      '400 g tinned chopped tomatoes',
      '480 g tinned butter beans, drained',
      '200 ml water',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Brown the sausages in the oil in a large pan for 8 minutes, turning, until deep golden. Lift out onto a plate.',
      'Add the onion to the pan and cook for 5 minutes, scraping up the browned bits. Add the garlic and paprika for 1 minute.',
      'Add the tomatoes, beans, water, salt and pepper. Return the sausages to the pan.',
      'Simmer for 20 minutes until the sauce is thick and the sausages are cooked through. Slice the sausages before serving.'
    ],
    tips: [
      'Brown the sausages well before they join the sauce.',
      'Scrape up the browned bits when the onion goes in.',
      'If the stew is too thick, add a splash of water.',
      'Check that the sausages are cooked through at the end.'
    ],
    pair: ['Mashed potato', 'Crusty bread', 'Green beans', 'Buttered cabbage'],
    store: 'Keeps in the fridge for 3 days. Freezes well for up to 3 months. Reheat until piping hot.',
    nut: [495, 24, 30, 31, 9, 6, 1560]
  },

  'kulajda': {
    d: 'A creamy Czech soup of potatoes, dill and mushrooms, sharpened with a splash of vinegar and finished with a poached egg.',
    meta: 'Kulajda: creamy Czech potato and dill soup with mushrooms, vinegar and a poached egg. Four servings, cooked for 30 minutes.',
    kw: ['kulajda', 'czech dill soup', 'kulajda soup', 'czech potato and dill soup', 'dill and potato soup with egg'],
    why: 'This is a soup for early summer, when dill is plentiful and the first new potatoes arrive. It is thick with potato and cream, with a sour note that keeps it from feeling heavy.\n\nDill is the main flavour, not a garnish. Chop it and add most of it at the end so its fresh, grassy taste stays bright. Cooked for long, dill turns dull and loses its character. **Add the dill off the heat.**\n\nThe sour note comes from vinegar, stirred in at the end. Add it a little at a time and taste, because the amount you need depends on the stock and the cream. The soup should taste lively, not sharp.\n\nA poached egg on top is the classic finish. Slide it in gently and let the soup coat it. Bread on the side finishes the bowl. Taste the soup before the egg goes in. If it seems flat, a few more drops of vinegar or a little extra salt usually brings it to life.',
    ing: [
      '1 tbsp butter',
      '1 onion, about 150 g, chopped',
      '600 g potatoes, peeled and diced',
      '1 litre vegetable stock',
      '200 g mushrooms, sliced',
      '1 tbsp plain flour',
      '150 ml double cream',
      '20 g fresh dill, chopped',
      '2 tsp white wine vinegar',
      '4 eggs, about 200 g',
      '1/2 tsp salt'
    ],
    st: [
      'Melt the butter in a large pan and cook the onion for 5 minutes until soft.',
      'Add the potatoes and stock, bring to the boil and simmer for 15 minutes until tender. Add the mushrooms for the last 5 minutes.',
      'Mix the flour with the cream until smooth and stir it into the soup. Simmer for 3 minutes until slightly thick.',
      'Take the pan off the heat. Stir in most of the dill, the vinegar and the salt.',
      'Poach the eggs in a separate pan of gently simmering water for 3 minutes. Serve one in each bowl with the rest of the dill on top.'
    ],
    tips: [
      'Stir the dill in off the heat.',
      'Add the vinegar slowly and taste after each spoonful.',
      'Whisk the flour into the cream until there are no lumps.',
      'Poach the eggs in a separate pan so the soup stays clear.'
    ],
    pair: ['Rye bread', 'Pickled cucumber', 'Sausage', 'Fresh dill'],
    store: 'Keeps in the fridge for 2 days without the eggs. Reheat gently and poach fresh eggs when serving.',
    nut: [402, 15, 36, 22, 5, 5, 1210]
  },

  'czech-garlic-soup': {
    d: 'A clear, peppery Czech soup built on a whole head of garlic, with potato and marjoram, served with crisp bread croutons.',
    meta: 'Czech garlic soup: garlic, potato and marjoram simmered in stock and served with crisp bread croutons. Four servings, cooked for 20 minutes.',
    kw: ['czech garlic soup', 'cesnecka', 'czech garlic soup with croutons', 'garlic soup with potato', 'traditional czech garlic soup'],
    why: 'Crush the garlic and leave it for a few minutes before it hits the pan. That single piece of advice is the whole difference between a soup that tastes of garlic and one that merely hints at it. Crushing breaks the cells and lets the flavour develop.\n\nČesnečka, as it is called in Czech, is built on a lot of garlic and very little else. Potato gives body, marjoram adds a gentle herby note, and the stock does the rest. It is a plain, warming soup, the kind eaten when the weather turns.\n\n**Add half the garlic at the start and half at the end.** The first half mellows into the broth, and the second gives a sharp, fresh punch.\n\nServe it with croutons made from stale bread fried in a little oil. They stay crisp for the first minutes and then soften into the soup. Keep the croutons separate until the last moment. The soup is thin by design, and soggy bread would make the bowl heavy.',
    ing: [
      '2 tbsp vegetable oil',
      '8 garlic cloves, crushed',
      '300 g potatoes, peeled and diced',
      '1 litre vegetable stock',
      '1 tsp dried marjoram',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 slices stale bread, about 60 g, cubed',
      '1 tbsp vegetable oil, for the croutons'
    ],
    st: [
      'Heat the first measure of oil in a pan and cook half the garlic for 1 minute. Add the potatoes, stock and marjoram.',
      'Bring to the boil and simmer for 15 minutes until the potatoes are soft.',
      'Meanwhile fry the bread cubes in the second measure of oil for 4 minutes until crisp and golden.',
      'Add the rest of the garlic, the salt and the pepper to the soup and simmer for 1 minute. Serve with the croutons.'
    ],
    tips: [
      'Crush the garlic and let it stand before using it.',
      'Add half the garlic late for a fresher flavour.',
      'Fry the croutons until properly golden.',
      'Serve the croutons on the side so they stay crisp.'
    ],
    pair: ['Rye bread', 'Grated cheese', 'Fried egg', 'Pickled cucumber'],
    store: 'Keeps in the fridge for 3 days without the croutons. Make fresh croutons when serving.',
    nut: [219, 6, 24, 11, 2, 1, 1200]
  },

  'sayur-lodeh': {
    d: 'An Indonesian vegetable soup in a mild coconut milk broth with cabbage, green beans, carrot and aubergine.',
    meta: 'Sayur lodeh: Indonesian coconut milk vegetable soup with cabbage, green beans, carrot and aubergine. Four servings, cooked for 20 minutes.',
    kw: ['sayur lodeh', 'indonesian vegetable soup', 'sayur lodeh coconut vegetable stew', 'indonesian coconut vegetable curry', 'vegetables in coconut milk'],
    why: 'The wet season is when this belongs, when markets are full of cheap greens and a pot of coconut broth feeds the household. Sayur lodeh means vegetables in a coconut soup, and the details change with whatever is available.\n\nThe broth begins with a paste of shallot, garlic, turmeric and a little chilli, cooked briefly in oil until fragrant. That is the aroma that fills the kitchen. **Stir the paste for 2 minutes.** Raw spice paste tastes harsh and green.\n\nAdd the vegetables in order of how long they take. Carrots and aubergine go in first, then green beans, and cabbage last. Mixed together they cook unevenly, with mush on one side and rawness on the other.\n\nKeep the simmer gentle once the coconut milk goes in. A hard boil can make it split and look curdled. Leftovers taste even better the next day as the coconut broth soaks into the vegetables. Reheat slowly and add a splash of water if it has thickened.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '1 tsp ground turmeric',
      '1/2 tsp chilli flakes',
      '2 carrots, about 150 g, sliced',
      '1 aubergine, about 250 g, cubed',
      '150 g green beans, halved',
      '200 g white cabbage, shredded',
      '400 ml tinned coconut milk',
      '400 ml water',
      '1 tsp salt',
      '1 tsp sugar'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, garlic, turmeric and chilli for 2 minutes, stirring.',
      'Add the carrots, aubergine, coconut milk and water and bring to a gentle simmer. Cook for 8 minutes.',
      'Add the green beans and cook for 5 minutes, then the cabbage for 3 minutes.',
      'Stir in the salt and sugar. Taste and adjust, then serve with rice.'
    ],
    tips: [
      'Cook the spice paste until it smells fragrant.',
      'Add the vegetables in stages so none is overdone.',
      'Keep the simmer gentle once the coconut milk is in.',
      'Swap any vegetable you have, keeping to the firm ones first.'
    ],
    pair: ['Steamed rice', 'Fried tempeh', 'Boiled eggs', 'Chilli sambal'],
    store: 'Keeps in the fridge for 3 days. Reheat gently; do not boil hard.',
    nut: [297, 5, 22, 21, 6, 11, 650]
  },

  'ginisang-munggo': {
    d: 'A Filipino stew of mung beans simmered with garlic, onion, tomato and spinach, flavoured with fish sauce.',
    meta: 'Ginisang munggo: Filipino mung bean stew with garlic, onion, tomato and spinach. Four servings, cooked for 40 minutes.',
    kw: ['ginisang munggo', 'filipino mung bean stew', 'munggo guisado', 'mung bean stew with spinach', 'filipino mung bean soup'],
    why: 'The pot goes on early in the week, when money is tight and a bag of dried mung beans stretches a long way. Ginisang munggo is a staple of Filipino home cooking, and a dish that does not ask for much.\n\n"Ginisa" refers to the base of garlic, onion and tomato cooked in oil, the start of countless Filipino dishes. Let the onion soften and the tomato collapse before the beans go in. **Do not rush the base.** It sets the flavour for the whole stew.\n\nMung beans need no soaking and cook in about 30 minutes. Test one by pressing it between your fingers. It should crush with no resistance, and some will have broken down to thicken the broth.\n\nSpinach goes in at the end and wilts in the heat of the pot. Fish sauce adds the salty, savoury note; add it a little at a time and taste.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '4 garlic cloves, crushed',
      '2 tomatoes, about 200 g, chopped',
      '200 g dried mung beans, rinsed',
      '1 litre water',
      '2 tbsp fish sauce',
      '100 g baby spinach',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion and garlic for 4 minutes until soft.',
      'Add the tomatoes and cook for 3 minutes until they collapse.',
      'Add the mung beans and water and bring to the boil. Simmer for 30 minutes until the beans are soft and the stew is thick.',
      'Stir in the fish sauce and pepper, then the spinach until it wilts. Add water if the stew is too thick.'
    ],
    tips: [
      'Cook the onion, garlic and tomato until soft before the beans go in.',
      'Press a bean to check it is soft before seasoning.',
      'Add the fish sauce a spoonful at a time.',
      'Loosen the stew with hot water if it thickens as it stands.'
    ],
    pair: ['Steamed rice', 'Fried fish', 'Crispy fried pork', 'Lime wedges'],
    store: 'Keeps in the fridge for 4 days. It thickens as it cools, so add water when reheating.',
    nut: [248, 14, 39, 4, 10, 7, 560]
  }
};
