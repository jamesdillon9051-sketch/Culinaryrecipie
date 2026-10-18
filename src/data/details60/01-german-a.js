'use strict';

/**
 * Volume sixty, first part: German pork and potato dishes, dumplings, the
 * north German plates, yeast cakes, Christmas biscuits, soups and puddings.
 * Waits of an hour or more are declared as rest. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'eisbein': {
    d: 'A cured pork knuckle simmered for 2 hours 30 minutes until the meat falls from the bone, served with sauerkraut and mustard.',
    meta: 'Eisbein, German cured pork knuckle simmered until tender, served with sauerkraut, cooked for 2 hours 30 minutes. Four servings, ready in 2 hours 50 minutes.',
    kw: ['eisbein', 'german pork knuckle', 'boiled pork knuckle with sauerkraut', 'eisbein with sauerkraut', 'simmered ham hock german'],
    why: 'Most home versions come out salty or tough, and the fix is a long soak and a very gentle simmer. Eisbein is the north German pork knuckle, cured in brine and then boiled, not roasted, so the meat is pale, soft and mild, with a layer of jellied fat under the skin.\n\nIf the knuckle is cured, soak it in cold water for 12 hours, changing the water once, or the finished dish will be too salty to eat. Cover it with fresh cold water, add an onion, bay leaves, peppercorns and juniper berries and bring it up slowly. **Hold the water just below a simmer**, with an occasional bubble, for 2 hours 30 minutes. A hard boil toughens the meat and clouds the broth.\n\nThe knuckle is ready when the meat pulls from the bone with no resistance. Lift it out and keep it hot in a little of the broth. Warm the sauerkraut in some of the same liquid with a few juniper berries. Serve the meat in thick slices with the cabbage, mashed peas and a dab of sharp mustard.',
    ing: [
      '2 kg cured pork knuckles',
      '1 onion, halved',
      '2 bay leaves',
      '1 tsp black peppercorns',
      '2 g juniper berries',
      '800 g sauerkraut',
      '1 tbsp lard or oil',
      '4 tbsp sharp mustard'
    ],
    st: [
      'Soak the knuckles in cold water overnight if cured. Drain.',
      'Put them in a large pan with the onion, bay, peppercorns and half the juniper. Cover with cold water and bring slowly to just below a simmer.',
      'Cook very gently for 2 hours 30 minutes, until the meat pulls from the bone.',
      'Warm the sauerkraut with the lard, the remaining juniper and 200 ml of the broth for 10 minutes.',
      'Serve the meat in thick slices with the sauerkraut and mustard.'
    ],
    tips: [
      'Soak cured knuckles overnight to draw out the salt.',
      'Keep the water below a simmer.',
      'Warm the sauerkraut in some of the broth for flavour.'
    ],
    pair: ['Mashed peas', 'Boiled potatoes', 'Mustard', 'Dark beer'],
    store: 'Keeps for 3 days in the fridge in a little broth.',
    rest: [480, 'Soaking'],
    nut: [834, 83, 13, 50, 7, 5, 1790]
  },

  'schweinshaxe': {
    d: 'A Bavarian pork knuckle simmered then roasted until the rind crackles, in 2 hours 50 minutes, with beer gravy.',
    meta: 'Schweinshaxe, Bavarian roast pork knuckle with crisp crackling and beer gravy, cooked for 2 hours 30 minutes. Four servings, ready in 2 hours 50 minutes.',
    kw: ['schweinshaxe', 'bavarian roast pork knuckle', 'crispy pork knuckle', 'german pork hock with crackling', 'schweinshaxe recipe'],
    why: 'It is the crackling that people queue for, and it needs a dry rind and a hard blast of heat at the end. Schweinshaxe is the Bavarian roast pork knuckle, a big joint with a thick skin that turns to a glassy, bubbled crust.\n\nStart by simmering the knuckles for 1 hour in salted water with caraway and an onion. This sets the meat and shortens the roasting time. Lift them out, dry them hard with kitchen paper and leave them to air for 20 minutes. **Score the skin in a diamond pattern**, cutting only through the rind, and rub in salt and more caraway.\n\nRoast at 180C for 1 hour 15 minutes, basting with the beer every 20 minutes, but keep the beer off the skin. For the last 15 minutes turn the oven to 230C until the rind blisters and crackles. Rest for 10 minutes. Strain the roasting juices into a pan, simmer to a gravy and serve with potato dumplings and sauerkraut.',
    ing: [
      '2.4 kg pork knuckles',
      '1 onion, quartered',
      '2 tbsp caraway seeds',
      '1 tbsp salt',
      '330 ml dark beer',
      '300 ml beef stock',
      '1 tbsp cornflour',
      '2 carrots, in chunks'
    ],
    st: [
      'Simmer the knuckles in salted water with the onion and 1 tablespoon of the caraway for 1 hour. Drain, dry well and leave to air for 20 minutes.',
      'Heat the oven to 180C. Score the skin in a diamond pattern and rub with the salt and remaining caraway.',
      'Set the knuckles in a tin on the carrots and pour in the beer and stock. Roast for 1 hour 15 minutes, basting around the skin.',
      'Turn the oven to 230C and roast for 15 minutes until the rind crackles. Rest for 10 minutes.',
      'Strain the juices into a pan, stir in the cornflour mixed with water and simmer for 5 minutes.'
    ],
    tips: [
      'Dry the skin before roasting.',
      'Baste the meat, not the skin.',
      'Finish at a high heat for the crackling.'
    ],
    pair: ['Potato dumplings', 'Sauerkraut', 'Dark beer', 'Mustard'],
    store: 'Keeps for 3 days in the fridge. Reheat the skin in a hot oven.',
    nut: [935, 98, 12, 55, 2, 3, 2410]
  },

  'kassler': {
    d: 'Smoked cured pork loin roasted with sauerkraut and onions for 90 minutes until tender, a German family dinner.',
    meta: 'Kassler, smoked cured pork loin roasted on sauerkraut with onions, cooked for 90 minutes. Four servings, ready in 1 hour 45 minutes.',
    kw: ['kassler', 'german smoked pork loin', 'kassler with sauerkraut', 'smoked pork chop german', 'kassler recipe'],
    why: 'It looks like a ham and eats like a roast pork, which is the difference smoking and curing make. Kassler is a smoked, cured pork loin, pink inside and mild, and it only needs gentle heat to warm it through and make it tender.\n\nSoften onions in lard in a casserole, add the sauerkraut, a grated apple, juniper and caraway and pour in white wine and stock. Set the kassler on top. **Cover the casserole and keep the oven low**, at 160C, because the joint is already cured and cooks to a firm, dry meat if it is rushed. The sauerkraut gives off steam that keeps it moist.\n\nAfter 90 minutes the meat should be tender when pierced and the cabbage soft. Lift it out, rest it for 10 minutes and carve in thick slices. Serve on the sauerkraut with mashed potato or boiled potatoes and mustard. The cabbage is better the next day, and leftover slices fry well.',
    ing: [
      '1.2 kg kassler or smoked cured pork loin',
      '2 tbsp lard or oil',
      '2 onions, sliced',
      '800 g sauerkraut',
      '1 apple, grated',
      '2 g juniper berries',
      '1 tsp caraway seeds',
      '150 ml dry white wine',
      '200 ml chicken stock'
    ],
    st: [
      'Heat the oven to 160C. Soften the onions in the lard in a casserole for 5 minutes.',
      'Add the sauerkraut, apple, juniper, caraway, wine and stock and stir.',
      'Set the kassler on top, cover tightly and cook for 90 minutes.',
      'Rest the meat for 10 minutes and carve in thick slices. Serve on the sauerkraut.'
    ],
    tips: [
      'Keep the oven low, as the meat is already cured.',
      'Cover the casserole to keep the cabbage moist.',
      'Slice thickly so the meat stays juicy.'
    ],
    pair: ['Mashed potato', 'Boiled potatoes', 'Mustard', 'Riesling'],
    store: 'Keeps for 4 days in the fridge. Freeze for 2 months.',
    nut: [613, 66, 22, 29, 8, 11, 1650]
  },

  'kartoffelpuffer': {
    d: 'Thin, lacy pancakes of grated potato and onion fried until crisp, served with apple sauce, in 40 minutes.',
    meta: 'Kartoffelpuffer, thin crisp German potato pancakes served with apple sauce, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['kartoffelpuffer', 'german potato pancakes', 'potato pancakes with apple sauce', 'reibekuchen', 'crispy grated potato pancakes'],
    why: 'Kartoffelpuffer means potato puffs, though the best ones are anything but puffy: they are thin, lacy and crisp at the edge, like a latke without the stodge. The name changes across Germany, from Reibekuchen in the Rhineland to Kartoffelpuffer in the south.\n\nGrate the potatoes finely, and the onion with them. Squeeze the mixture hard in a cloth and let the liquid stand for a minute so the starch sinks. **Pour off the water and stir the starch back in**, which holds the pancakes together with almost no flour. Mix with egg, a spoonful of flour and salt.\n\nFry thin rounds in a hot, well oiled pan, pressing them flat, and turn when the edge is deep brown. Each side takes about 4 minutes. Drain on kitchen paper and keep them warm in a low oven while you finish. Serve with apple sauce, or with smoked salmon and soured cream if you prefer a savoury plate.',
    ing: [
      '1 kg floury potatoes, peeled',
      '1 onion',
      '1 egg',
      '2 tbsp plain flour',
      '1 tsp salt',
      '60 ml rapeseed oil absorbed, from 200 ml for frying',
      '200 g apple sauce, to serve'
    ],
    st: [
      'Grate the potatoes and onion finely. Squeeze hard in a cloth over a bowl and let the liquid stand for 1 minute. Pour off the water, keeping the starch.',
      'Mix the potato with the starch, egg, flour and salt.',
      'Heat the oil in a wide pan over medium heat. Drop in spoonfuls and flatten to thin rounds.',
      'Fry for 4 minutes on each side until deep brown and crisp. Drain on kitchen paper.',
      'Serve at once with the apple sauce.'
    ],
    tips: [
      'Squeeze the potato until almost dry.',
      'Keep the starch from the bowl.',
      'Press the pancakes thin for a crisp edge.'
    ],
    pair: ['Apple sauce', 'Smoked salmon', 'Soured cream'],
    store: 'Best fresh. Reheat in a hot oven.',
    nut: [379, 7, 54, 15, 7, 8, 620]
  },

  'kartoffelklosse': {
    d: 'Smooth potato dumplings of raw and cooked potato, simmered gently for 25 minutes and served with roast meat and gravy.',
    meta: 'Kartoffelklöße, German potato dumplings from raw and boiled potato, cooked for 25 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['kartoffelklosse', 'german potato dumplings', 'raw and cooked potato dumplings', 'kartoffelkloesse recipe', 'dumplings for roast and gravy'],
    why: 'Keep the water below a boil. That is the rule for every dumpling, and it matters most here, because a rolling boil breaks these apart. Kartoffelklöße are the potato dumplings served with roast pork, goose or sauerbraten, and they should be light inside with a smooth skin.\n\nHalf the potatoes are boiled and mashed, and half are grated raw and squeezed dry in a cloth. Together they give a dumpling that holds its shape and is not heavy. **Squeeze the grated potato very hard**, since any water left makes the dough sticky and pushes you to add flour. Mix with a little potato starch, salt and nutmeg, and a beaten egg.\n\nShape into balls the size of a small apple with wet hands. Drop them into salted water that is just trembling, and simmer for 25 minutes. They rise when they are nearly ready. A toasted crouton pushed into the centre of each is the traditional touch. Lift out with a slotted spoon and serve at once with gravy.',
    ing: [
      '1 kg floury potatoes, boiled in their skins',
      '1 kg raw floury potatoes',
      '3 tbsp potato starch',
      '1 egg',
      '2 tsp salt',
      '1/4 tsp ground nutmeg',
      '60 g bread croutons'
    ],
    st: [
      'Boil half the potatoes in their skins for 25 minutes. Peel and mash while hot. Cool.',
      'Grate the raw potatoes and squeeze very dry in a cloth.',
      'Mix both with the starch, egg, salt and nutmeg to a firm dough.',
      'With wet hands, shape into 12 balls, pushing a few croutons into the middle of each.',
      'Slide into a pan of salted water just below a simmer and cook for 25 minutes. Lift out with a slotted spoon.'
    ],
    tips: [
      'Squeeze the raw potato as dry as you can.',
      'Keep the water below a boil.',
      'Test one dumpling first and add starch if it breaks.'
    ],
    pair: ['Roast pork', 'Gravy', 'Red cabbage', 'Goose'],
    store: 'Keeps for 2 days in the fridge. Slice and fry the cold dumplings.',
    nut: [314, 9, 65, 2, 8, 3, 890]
  },

  'semmelknodel': {
    d: 'Bread dumplings of stale rolls, milk, egg and parsley, simmered for 25 minutes and served with mushroom sauce or roast.',
    meta: 'Semmelknödel, German bread dumplings with milk, egg and parsley, cooked for 25 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['semmelknodel', 'german bread dumplings', 'bread dumplings with parsley', 'semmelknoedel recipe', 'dumplings from stale bread rolls'],
    why: 'The first sign it is ready is the smell: butter and onion softening in a pan and then the soft, yeasty steam of bread soaking in warm milk. Semmelknödel are the bread dumplings of Bavaria, made from stale rolls that would otherwise go in the bin.\n\nCut the rolls into small cubes, a day old or dried in a low oven, and pour warm milk over them. Fry chopped onion in butter until soft and add it with parsley, eggs and salt. **Let the mixture stand for 15 minutes** so the bread swells, and then test it: it should hold when pressed. If it is sticky, add a spoonful of breadcrumbs. If it is crumbly, add a splash of milk.\n\nShape into balls with wet hands. Lower them into barely simmering salted water and cook for 25 minutes, uncovered. Lift them out and serve with mushroom sauce, roast meat or gravy. Cold ones can be sliced and fried in butter the next day.',
    ing: [
      '300 g stale white bread, in cubes',
      '250 ml warm milk',
      '2 tbsp butter',
      '1 onion, finely chopped',
      '3 tbsp chopped parsley',
      '3 eggs',
      '1 tsp salt',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Pour the warm milk over the bread in a large bowl.',
      'Fry the onion in the butter for 5 minutes. Add it to the bowl with the parsley, eggs, salt and nutmeg and mix. Leave to stand for 15 minutes.',
      'With wet hands shape into 8 balls.',
      'Slide into a pan of salted water just below a simmer and cook for 25 minutes. Lift out with a slotted spoon.'
    ],
    tips: [
      'Use stale rolls, not fresh bread.',
      'Test one dumpling first.',
      'Never let the water boil hard.'
    ],
    pair: ['Mushroom sauce', 'Roast pork', 'Gravy', 'Red cabbage'],
    store: 'Keeps for 2 days in the fridge. Slice and fry.',
    nut: [354, 14, 43, 14, 3, 8, 1030]
  },

  'labskaus': {
    d: 'A north German mash of corned beef, potato and beetroot topped with a fried egg, pickled herring and gherkin, in 1 hour 5 minutes.',
    meta: 'Labskaus, north German mash of corned beef, potato and beetroot with fried egg and herring, cooked for 45 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['labskaus', 'german corned beef hash', 'labskaus with fried egg', 'north german sailor dish', 'corned beef and beetroot mash'],
    why: 'Why is it pink? Because of the beetroot, and the colour is the first thing people notice about labskaus, a north German dish of corned beef, potato and beetroot mashed together. It started as sailors\' food, and it is eaten in Hamburg and the ports of the north.\n\nBoil the potatoes until soft and mash them roughly. Fry a chopped onion in lard until golden, then add the corned beef, breaking it up, and some of the pickled beetroot and its juice. **Mash it all together coarsely**, as a smooth purée loses the texture. Season with pepper and a little of the pickle liquid for sharpness.\n\nServe a mound on each plate with a fried egg on top, a rolled pickled herring beside it and slices of gherkin and beetroot. The mix of rich, salty, sharp and sweet is the point of the plate. The leftovers can be fried into cakes the next day, which is a good way to use them.',
    ing: [
      '800 g potatoes, peeled and cut up',
      '2 tbsp lard or butter',
      '1 onion, chopped',
      '300 g corned beef',
      '150 g pickled beetroot, chopped',
      '2 tbsp beetroot pickling juice',
      '1/2 tsp black pepper',
      '4 eggs',
      '240 g rollmop herrings',
      '100 g gherkins'
    ],
    st: [
      'Boil the potatoes in salted water for 20 minutes until soft. Drain and mash roughly.',
      'Fry the onion in half the lard for 8 minutes until golden. Add the corned beef and break it up for 5 minutes.',
      'Add the potatoes, beetroot, juice and pepper and mash together coarsely over low heat for 10 minutes.',
      'Fry the eggs in the remaining lard.',
      'Serve the mash topped with the egg, with the herring and gherkins on the side.'
    ],
    tips: [
      'Mash coarsely to keep some texture.',
      'Use the pickling juice to sharpen the mash.',
      'Fry the eggs just before serving.'
    ],
    pair: ['Rollmop herring', 'Gherkins', 'Beetroot', 'Beer'],
    store: 'Keeps for 2 days in the fridge. Fry as cakes to reheat.',
    nut: [596, 39, 47, 28, 6, 10, 1780]
  },

  'himmel-und-erde': {
    d: 'Mashed potato and apple served with fried black pudding and onions, a Rhineland plate ready in 50 minutes.',
    meta: 'Himmel und Erde, mashed potato and apple with fried black pudding and onions, cooked for 30 minutes. Four servings, ready in 50 minutes.',
    kw: ['himmel und erde', 'heaven and earth german', 'potato and apple mash with black pudding', 'rhineland potato apple mash', 'german black pudding and apple'],
    why: 'A Sunday dish for a table of four, and a strange one at first sight: potato and apple mashed together, with fried black pudding and onions on top. The name means heaven and earth, which are the apple from the tree and the potato from the ground.\n\nUse firm, tart apples, such as Bramleys or Granny Smiths, and potatoes that mash well. Boil them together with a little salt, the potatoes first for 10 minutes and the apples for the last 10, so both are soft at the same time. **Drain well and dry them in the pot over low heat** for a minute, then mash with butter and a splash of milk. The mash should be sweet, tart and a little loose.\n\nSlice the black pudding and fry it in butter until crisp on both sides. In the same pan, fry a large sliced onion slowly until deep brown, about 15 minutes. Pile the mash on plates, lay the pudding on top and scatter with the onions. A few drops of vinegar on the onions sharpen the plate.',
    ing: [
      '700 g floury potatoes, peeled and cut up',
      '500 g tart apples, peeled and cored',
      '50 g butter',
      '60 ml milk',
      '400 g black pudding, sliced',
      '2 large onions, sliced',
      '1 tsp salt',
      '1 pinch ground nutmeg'
    ],
    st: [
      'Boil the potatoes in salted water for 10 minutes. Add the apples and boil for 10 minutes more. Drain well.',
      'Return to the pot over low heat for 1 minute, then mash with half the butter, the milk and nutmeg.',
      'Fry the onions in the remaining butter over medium heat for 15 minutes until deep brown. Lift out.',
      'Fry the black pudding slices in the same pan for 3 minutes on each side.',
      'Pile the mash on plates and top with the pudding and onions.'
    ],
    tips: [
      'Use tart apples to balance the pudding.',
      'Dry the potatoes in the pot before mashing.',
      'Brown the onions slowly.'
    ],
    pair: ['Apple sauce', 'Mustard', 'Beer'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [627, 17, 70, 31, 9, 18, 1510]
  },

  'maultaschen': {
    d: 'Swabian pasta pockets filled with spinach, pork and bread, simmered in broth for 20 minutes, in 1 hour 20 minutes.',
    meta: 'Maultaschen, Swabian filled pasta pockets with spinach and pork, simmered in broth, cooked for 20 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['maultaschen', 'swabian maultaschen', 'german filled pasta pockets', 'maultaschen in broth', 'spinach and pork pasta parcels'],
    why: 'Maultaschen are large Swabian pasta squares wrapped around a filling of spinach, pork, onion and soaked bread, and the first thing to know is that they are meant to be filled generously. They are sold across southern Germany, and eaten in clear broth or sliced and fried.\n\nThe dough is made of flour, eggs and a splash of water and oil, kneaded for 8 minutes and rested for 20 minutes. Mix the filling by hand: wilted and squeezed spinach, minced pork, soaked bread, onion, egg, parsley and nutmeg. **Roll the dough thin**, almost as thin as for tagliatelle, so the sheets seal well and the cooked pasta stays tender.\n\nSpread the filling in a strip on a sheet of dough, fold over and press down between mounds, then cut into squares 8 cm across and seal the edges with a fork. Simmer in broth for 20 minutes, or boil and then fry in butter with onions and egg. The sealed edges must be tight, or the filling leaks into the broth.',
    ing: [
      '300 g plain flour',
      '3 eggs',
      '1 tbsp oil',
      '300 g baby spinach',
      '300 g minced pork',
      '1 slice white bread, 30 g, soaked in milk',
      '1 onion, chopped',
      '1 egg, for the filling',
      '3 tbsp chopped parsley',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '1.5 litres beef stock'
    ],
    st: [
      'Knead the flour, 3 eggs and oil for 8 minutes to a smooth dough. Wrap and rest for 20 minutes.',
      'Wilt the spinach, cool, squeeze dry and chop. Fry the onion in a little oil for 5 minutes.',
      'Mix the spinach, onion, pork, squeezed bread, egg, parsley, nutmeg and salt.',
      'Roll the dough out thin in two long sheets. Spread filling in a strip on each, fold the dough over, press between the mounds and cut into 8 cm squares. Seal the edges with a fork.',
      'Simmer the maultaschen in the stock for 20 minutes, in batches. Serve in the broth.'
    ],
    tips: [
      'Roll the dough very thin.',
      'Seal the edges tightly.',
      'Simmer, do not boil, so they stay whole.'
    ],
    pair: ['Chives', 'Potato salad', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge. Freeze uncooked for 2 months.',
    nut: [407, 22, 46, 15, 3, 2, 1360]
  },

  'leberkase': {
    d: 'A Bavarian loaf of finely minced pork and beef baked for 1 hour until the top is brown and crusty, served sliced.',
    meta: 'Leberkäse, Bavarian baked meat loaf of fine pork and beef with a crusty top, baked for 1 hour. Six servings, ready in 1 hour 20 minutes.',
    kw: ['leberkase', 'bavarian meatloaf', 'german baked meat loaf', 'leberkaese recipe', 'leberkaese sandwich'],
    why: 'This is what to make on a day in autumn when the oven can stay on, and the house smells of marjoram. Leberkäse is a Bavarian meat loaf with no liver and no cheese despite the name, a pale pink loaf of finely minced pork and beef, baked until the top is brown and the inside is as smooth as a sausage.\n\nThe texture is the point, so the mixture must be a fine paste. Keep the meat and the ice very cold and blend them together in a food processor in short bursts, until it is as smooth as sausage meat. **Add the ice water a little at a time**, because it keeps the mixture cold and holds the moisture. If the mix warms up, it splits and bakes crumbly.\n\nPress the paste into a lined loaf tin, score the top in a diamond pattern and bake at 180C for 1 hour, until the crust is deep gold and the centre reaches 72C. Cool for 10 minutes before slicing. In Bavaria it is eaten warm in a roll with sweet mustard, or fried with an egg on top.',
    ing: [
      '600 g pork belly, minced',
      '400 g minced beef',
      '150 g crushed ice',
      '1 onion, grated',
      '2 tsp salt',
      '1 tsp dried marjoram',
      '1/2 tsp white pepper',
      '1/4 tsp ground nutmeg',
      '1/4 tsp ground allspice'
    ],
    st: [
      'Heat the oven to 180C and line a 1.5 litre loaf tin.',
      'Chill the meat well. Blend it in batches in a food processor with the ice, onion, salt, marjoram, pepper, nutmeg and allspice until a fine paste.',
      'Press the paste firmly into the tin and level. Score the top in a diamond pattern.',
      'Bake for 60 minutes until the top is deep gold and the centre reaches 72C.',
      'Cool for 10 minutes and slice.'
    ],
    tips: [
      'Keep the meat as cold as possible.',
      'Add the ice a little at a time.',
      'Check the centre reaches 72C.'
    ],
    pair: ['Sweet mustard', 'Bread rolls', 'Potato salad', 'Fried egg'],
    store: 'Keeps for 4 days in the fridge. Slice and fry to reheat.',
    nut: [640, 23, 2, 60, 1, 1, 870]
  },

  'weisswurst': {
    d: 'White veal and pork sausages warmed in hot water for 15 minutes and served with sweet mustard and a soft pretzel.',
    meta: 'Weißwurst, Bavarian white sausages warmed in hot water, served with sweet mustard and a pretzel, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['weisswurst', 'bavarian white sausage', 'weisswurst with sweet mustard', 'munich white sausages', 'weisswurst and pretzel'],
    why: 'Pork, veal, parsley, lemon: four things that make a sausage so pale that it looks undone. Weißwurst, the white sausage of Munich, is made fresh, with no smoke or colour, and it is eaten in the morning, traditionally before noon.\n\nDo not boil it, and do not fry it. Bring water to the boil in a wide pan, take it off the heat and let it stand for 2 minutes, then lower the sausages in and leave them for 15 minutes with the lid on. **The water must stay hot but never bubble**, because the skin splits and the sausage loses its juice. Serve them in a bowl with a little of the hot water.\n\nThe traditional way to eat one is to slit it lengthways and peel off the skin, or to suck the meat out. A knife and fork is allowed. Spread sweet Bavarian mustard on each bite, and serve with a soft pretzel and a wheat beer. They do not keep, so cook only what you will eat.',
    ing: [
      '700 g weisswurst',
      '2 litres water',
      '240 g soft pretzels',
      '4 tbsp sweet Bavarian mustard'
    ],
    st: [
      'Bring the water to the boil in a wide pan, then take it off the heat and leave for 2 minutes.',
      'Lower in the sausages, cover and let them poach off the heat for 15 minutes; the water should stay just below a simmer, never boiling, or the skins split.',
      'Lift out with a slotted spoon and serve in a bowl with a little of the hot water.',
      'Serve with the pretzels and the mustard.'
    ],
    tips: [
      'Never boil the sausages.',
      'Serve them in a little hot water to keep them warm.',
      'Eat them fresh, within the hour.'
    ],
    pair: ['Soft pretzels', 'Sweet mustard', 'Wheat beer'],
    store: 'Best fresh. Do not keep.',
    nut: [601, 27, 31, 41, 2, 1, 2640]
  },

  'bienenstich': {
    d: 'A German yeast cake topped with caramelised almonds and split to hold a vanilla cream, risen for 1 hour and baked for 35 minutes.',
    meta: 'Bienenstich, German bee sting cake with caramelised almond top and vanilla cream, baked for 35 minutes. Twelve servings, ready in 1 hour 15 minutes plus rising.',
    kw: ['bienenstich', 'german bee sting cake', 'almond honey cake with cream', 'bienenstich kuchen', 'bee sting cake recipe'],
    why: 'Most home versions come out with a topping that slides off, and the fix is to spread it on the cake before the second rise ends. Bienenstich, the bee sting cake, is a soft yeast cake with a crisp topping of honey and almonds and a split layer of vanilla cream.\n\nThe dough is a rich, sticky yeast dough of flour, milk, butter, eggs and sugar. Press it into a lined tin, let it rise for 1 hour, then spread the topping, a cooked mix of butter, sugar, honey, cream and flaked almonds, over the top. **Spread the topping while it is warm and still runny**, so it sinks into the dough as it bakes and sets in place. Bake at 180C for 35 minutes until the almonds are deep gold.\n\nCool the cake completely and slice it in half horizontally with a serrated knife. Fill with vanilla pastry cream, set the top back on and chill for 1 hour. Cut into squares with a sharp knife dipped in hot water.',
    ing: [
      '400 g plain flour',
      '7 g instant yeast',
      '60 g caster sugar',
      '200 ml lukewarm milk',
      '60 g butter, softened',
      '1 egg',
      '1 pinch salt',
      '100 g butter, for the topping',
      '80 g caster sugar, for the topping',
      '2 tbsp honey',
      '3 tbsp double cream',
      '150 g flaked almonds',
      '500 ml whole milk, for the cream',
      '4 egg yolks',
      '80 g caster sugar, for the cream',
      '40 g cornflour',
      '1 tsp vanilla extract'
    ],
    st: [
      'Mix the flour, yeast, 60 g sugar, lukewarm milk, 60 g butter, egg and salt and knead for 8 minutes. Press into a lined 24 x 30 cm tin and leave to rise for 1 hour.',
      'Heat the oven to 180C. Melt the topping butter, sugar, honey and cream together and stir in the almonds.',
      'Spread the topping over the dough while warm. Bake for 35 minutes until deep gold. Cool completely.',
      'Warm the milk. Whisk the yolks, 80 g sugar and cornflour, pour on the milk, whisking, and return to the pan. Stir for 5 minutes until thick. Add the vanilla and cool.',
      'Split the cake in half, spread the cream over the base and replace the top. Chill for 1 hour and cut in squares.'
    ],
    tips: [
      'Spread the topping while it is warm.',
      'Cool the cake completely before splitting.',
      'Dip the knife in hot water to cut clean squares.'
    ],
    pair: ['Coffee', 'Whipped cream', 'Sweet wine'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [120, 'Rising and chilling'],
    nut: [475, 11, 56, 23, 3, 25, 70]
  },

  'berliner-pfannkuchen': {
    d: 'Jam filled German doughnuts of a yeast dough risen for 90 minutes and fried until golden with a pale band, rolled in sugar.',
    meta: 'Berliner Pfannkuchen, German jam doughnuts rolled in sugar, fried for 20 minutes. Twelve servings, ready in 1 hour plus rising.',
    kw: ['berliner pfannkuchen', 'german jam doughnuts', 'berliner doughnuts', 'krapfen with jam', 'berliner recipe'],
    why: 'Why does the doughnut have a pale ring around the middle? Because it floated in the oil, and the ring is the sign of a good Berliner. Berliner Pfannkuchen are German jam doughnuts, light and yeasty, eaten at carnival and New Year, and the ring tells you the oil was at the right heat.\n\nThe dough is an enriched yeast dough with eggs, butter and a splash of rum. Knead it until it leaves the sides of the bowl, let it rise for 1 hour, then roll it out and cut rounds. Place them on a floured cloth and leave them for another 30 minutes. **Fry them lid side down first**, in oil at 170C, covered for 2 minutes, then turn and fry uncovered for 2 minutes more.\n\nThe pale band should show once you turn them. Drain, roll them in caster sugar while warm and pipe in a spoonful of plum or apricot jam through a hole made with a skewer. They are best the day they are made, and keep soft in a closed tin for a day.',
    ing: [
      '500 g strong bread flour',
      '60 g caster sugar',
      '7 g instant yeast',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '2 eggs',
      '60 g butter, softened',
      '1 tbsp rum',
      '60 ml rapeseed oil absorbed, from 1 litre for frying',
      '80 g caster sugar, for rolling',
      '250 g plum or apricot jam'
    ],
    st: [
      'Mix the flour, sugar, yeast, salt, milk, eggs, butter and rum and knead for 10 minutes until smooth. Leave to rise for 1 hour.',
      'Roll out 2 cm thick and cut 12 rounds of 8 cm. Set on a floured cloth and leave to rise for 30 minutes.',
      'Heat the oil to 170C. Fry 3 at a time, lid side down, covered, for 2 minutes. Turn and fry uncovered for 2 minutes.',
      'Drain on kitchen paper and roll in the sugar while warm.',
      'Make a hole in each with a skewer and pipe in the jam.'
    ],
    tips: [
      'Hold the oil near 170C.',
      'Fry the first side covered so a pale ring forms.',
      'Fill them after rolling in sugar.'
    ],
    pair: ['Coffee', 'Sparkling wine', 'Hot chocolate'],
    store: 'Best the day they are made.',
    rest: [90, 'Rising'],
    nut: [311, 6, 47, 11, 1, 27, 430]
  },

  'spekulatius': {
    d: 'Thin, crisp, spiced Christmas biscuits pressed in moulds or cut by hand, with cinnamon, cloves and brown sugar, chilled for 1 hour.',
    meta: 'Spekulatius, thin crisp spiced Christmas biscuits with cinnamon and brown sugar, baked for 15 minutes. Forty biscuits, ready in 45 minutes plus chilling.',
    kw: ['spekulatius', 'german spiced biscuits', 'christmas spice biscuits', 'spekulatius cookies', 'speculoos german'],
    why: 'Compare these to gingerbread and you will find them thinner, crisper and more buttery. Spekulatius are German Christmas biscuits flavoured with cinnamon, cloves, nutmeg and ginger, and they are traditionally pressed into carved moulds that leave a pattern on the top.\n\nThe dough is mixed from butter, brown sugar, flour, spices and a little milk or egg, and then it must rest in the fridge for at least 1 hour. **Chill it until it is firm**, because a warm dough sticks in the mould and spreads in the oven. If you have no mould, roll it 3 mm thick and cut shapes with a cutter.\n\nBake at 180C for about 15 minutes until the edges are deep gold, and cool them on a rack, where they crisp. The mix of spices is warm rather than hot, and some bakers add cardamom or white pepper. The biscuits keep for weeks in a tin and improve over a few days, as the spice mellows. Serve with coffee, or tea.',
    ing: [
      '300 g plain flour',
      '150 g cold butter, cubed',
      '150 g soft brown sugar',
      '1 tsp ground cinnamon',
      '1/2 tsp ground cloves',
      '1/2 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1/4 tsp ground cardamom',
      '1/2 tsp baking powder',
      '3 tbsp milk',
      '1 pinch salt'
    ],
    st: [
      'Mix the flour, sugar, spices, baking powder and salt. Rub in the butter and mix in the milk to a dough.',
      'Wrap and chill for 1 hour until firm.',
      'Heat the oven to 180C and line two trays. Roll the dough 3 mm thick and cut into shapes, or press into moulds.',
      'Bake for 15 minutes until the edges are deep gold.',
      'Cool on a rack.'
    ],
    tips: [
      'Chill the dough until firm.',
      'Dust the mould with flour so the dough releases.',
      'Cool on a rack so the biscuits crisp.'
    ],
    pair: ['Coffee', 'Mulled wine', 'Hot chocolate'],
    store: 'Keeps for 4 weeks in a tin.',
    rest: [60, 'Chilling'],
    nut: [71, 1, 10, 3, 0, 4, 10]
  },

  'pfeffernusse': {
    d: 'Small, soft, spiced German Christmas biscuits with honey, nuts and black pepper, glazed with icing sugar, baked for 15 minutes.',
    meta: 'Pfeffernüsse, small spiced German Christmas biscuits with honey and a sugar glaze, baked for 15 minutes. Forty biscuits, ready in 45 minutes plus resting.',
    kw: ['pfeffernusse', 'german pepper nut biscuits', 'spiced christmas cookies german', 'pfeffernuesse recipe', 'iced spice biscuits'],
    why: 'Pfeffernüsse means pepper nuts, and a pinch of black pepper really does go in. These are small, round, soft spiced biscuits from Germany, dusted or glazed with icing sugar, and they get better after a few days in a tin.\n\nThe dough is made from honey, brown sugar, butter, flour, almonds and a mix of cinnamon, cloves, ginger, nutmeg and pepper. It will be sticky, so chill it for 1 hour until it can be rolled without clinging to your hands. **Roll the balls no bigger than a walnut**, as they spread a little and puff as they bake. Place them well apart on lined trays.\n\nBake at 170C for about 15 minutes. They should be pale and firm outside and a little soft inside. While still warm, brush with a glaze of icing sugar and water, or roll in sifted icing sugar. The spices bloom over the next three days, so make them well ahead of Christmas.',
    ing: [
      '300 g plain flour',
      '100 g butter, softened',
      '100 g soft brown sugar',
      '100 g honey',
      '1 egg',
      '50 g ground almonds',
      '1 tsp ground cinnamon',
      '1/2 tsp ground cloves',
      '1/2 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1/4 tsp black pepper',
      '1 tsp baking powder',
      '100 g icing sugar'
    ],
    st: [
      'Beat the butter, brown sugar and honey until smooth. Beat in the egg.',
      'Mix in the flour, almonds, spices and baking powder to a soft dough. Chill for 1 hour.',
      'Heat the oven to 170C and line two trays. Roll the dough into 40 balls and set them well apart.',
      'Bake for 15 minutes until pale and firm.',
      'Sift the icing sugar and roll the warm biscuits in it, or glaze them with icing sugar mixed with water.'
    ],
    tips: [
      'Chill the dough so it can be rolled.',
      'Roll small balls, as they spread.',
      'Glaze them while warm.'
    ],
    pair: ['Mulled wine', 'Coffee', 'Hot chocolate'],
    store: 'Keeps for 4 weeks in a tin and improves after a few days.',
    rest: [60, 'Chilling'],
    nut: [83, 1, 13, 3, 0, 7, 10]
  },

  'vanillekipferl': {
    d: 'Small crescent biscuits of butter, ground almonds and flour rolled in vanilla sugar, chilled for 1 hour and baked for 12 minutes.',
    meta: 'Vanillekipferl, German butter almond crescent biscuits rolled in vanilla sugar, baked for 12 minutes. Forty biscuits, ready in 42 minutes plus chilling.',
    kw: ['vanillekipferl', 'vanilla crescent biscuits', 'german almond crescents', 'austrian vanilla kipferl', 'vanillekipferl recipe'],
    why: 'Keep the dough cold and handle it gently. That one instruction is the whole recipe for vanillekipferl, the small, crumbly vanilla crescents of Germany and Austria that melt on the tongue and are among the most popular of the Christmas biscuits.\n\nThe dough has almost no liquid: flour, ground almonds or hazelnuts, butter, sugar and an egg yolk. It breaks if it is overworked and spreads if it is warm. **Chill it for 1 hour before shaping**, then roll it into thin sausages, cut them into 3 cm pieces and bend them into crescents with the ends tapered. Place them on a lined tray, a little apart.\n\nBake at 170C for 12 minutes, until they are pale and just coloured at the base. They are very fragile when hot, so leave them on the tray for 5 minutes. Roll them in vanilla sugar while still warm, so the sugar sticks, and again when cold. They keep for weeks in a tin.',
    ing: [
      '250 g plain flour',
      '100 g ground almonds',
      '200 g cold butter, cubed',
      '80 g icing sugar',
      '1 egg yolk',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '60 g icing sugar mixed with 1 tsp vanilla extract, for rolling'
    ],
    st: [
      'Mix the flour, almonds, 80 g icing sugar and salt. Rub in the butter, add the yolk and vanilla and bring together into a dough. Chill for 1 hour.',
      'Heat the oven to 170C and line two trays. Roll pieces of dough into thin sausages and cut into 3 cm lengths. Bend into crescents.',
      'Bake for 12 minutes until pale with golden bases. Leave on the tray for 5 minutes.',
      'Roll in the vanilla sugar while warm and again when cold.'
    ],
    tips: [
      'Chill the dough until firm.',
      'Handle the crescents gently when warm.',
      'Roll in sugar twice.'
    ],
    pair: ['Coffee', 'Mulled wine', 'Tea'],
    store: 'Keeps for 4 weeks in a tin.',
    rest: [60, 'Chilling'],
    nut: [90, 1, 8, 6, 0, 2, 10]
  },

  'zimtsterne': {
    d: 'Cinnamon stars of ground almonds and egg white meringue with a white glaze, left to dry for 1 hour and baked for 15 minutes.',
    meta: 'Zimtsterne, German cinnamon stars of ground almonds with a meringue glaze, baked for 15 minutes. Thirty biscuits, ready in 45 minutes plus drying.',
    kw: ['zimtsterne', 'german cinnamon stars', 'cinnamon almond star biscuits', 'zimtsterne recipe', 'flourless christmas biscuits'],
    why: 'Compare these to a meringue and you will find the same glossy white top, but under it a chewy almond biscuit scented with cinnamon. Zimtsterne are a German Christmas classic with no flour and no butter, and they are naturally rich and dense.\n\nThe dough is ground almonds, icing sugar, cinnamon and egg white, and it is very sticky. Roll it between two sheets of baking paper that have been dusted with icing sugar, not flour, which would dry the biscuits out. **Cut the stars with a cutter dipped in water**, otherwise the sticky dough clings to it. Then brush the tops with a glaze of whisked egg white and icing sugar.\n\nLeave the stars on a tray to dry at room temperature for 1 hour, which sets the glaze. Bake at 150C for 15 minutes, until the glaze is firm and white and the biscuits are still soft underneath. Overbaking makes them hard. Store in a tin with a slice of apple to keep them chewy.',
    ing: [
      '300 g ground almonds',
      '200 g icing sugar, plus extra for rolling',
      '2 tsp ground cinnamon',
      '3 egg whites',
      '1 pinch salt',
      '1 tsp lemon juice'
    ],
    st: [
      'Whisk the egg whites and salt to stiff peaks, gradually whisk in 150 g of the icing sugar. Set aside 3 tablespoons of this meringue for the glaze.',
      'Fold the almonds and cinnamon into the rest to make a sticky dough.',
      'Roll out 1 cm thick between sheets dusted with icing sugar. Cut stars with a cutter dipped in water.',
      'Whisk the reserved meringue with the lemon juice and brush it over the stars. Leave to dry for 1 hour.',
      'Heat the oven to 150C. Bake the stars on lined trays for 15 minutes. Cool.'
    ],
    tips: [
      'Dust the work surface with icing sugar, not flour.',
      'Dip the cutter in water to stop it sticking.',
      'Do not overbake, or the stars turn hard.'
    ],
    pair: ['Coffee', 'Mulled wine', 'Tea'],
    store: 'Keeps for 3 weeks in a tin.',
    rest: [60, 'Drying'],
    nut: [89, 2, 9, 5, 1, 7, 10]
  },

  'erbsensuppe': {
    d: 'A thick German split pea soup with smoked pork and sausage simmered for 90 minutes until the peas fall apart.',
    meta: 'Erbsensuppe, thick German split pea soup with smoked pork and sausage, cooked for 90 minutes. Six servings, ready in 1 hour 45 minutes.',
    kw: ['erbsensuppe', 'german split pea soup', 'pea soup with smoked sausage', 'german pea soup recipe', 'split pea and ham soup'],
    why: 'This is what to put on the stove on the first cold week, when the smell of smoked pork in the pot is the best sign of winter. Erbsensuppe is a thick German pea soup, cooked until a spoon almost stands in it, with a smoked pork joint and a ring of sausage added at the end.\n\nSplit peas need no soaking, but they do need time. Simmer them with a smoked ham hock or bacon bones, an onion, a carrot, celery and a bay leaf for 90 minutes. **Stir often and scrape the base**, because the thick soup catches easily. The peas dissolve into the broth and thicken it without any cream or flour.\n\nLift out the hock, pull the meat from the bone and return it to the soup with sliced Wiener sausage. Season with marjoram, pepper and a splash of vinegar. The soup keeps thickening as it stands, so thin it with hot water when you reheat it. Serve with dark bread.',
    ing: [
      '500 g green split peas',
      '1 smoked ham hock, about 500 g',
      '2 onions, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '2 bay leaves',
      '2 litres water',
      '1 tsp dried marjoram',
      '200 g Wiener sausages, sliced',
      '1 tbsp white wine vinegar',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the peas, ham hock, onions, carrots, celery, bay and water in a large pan and bring to the boil. Skim.',
      'Simmer for 90 minutes, stirring often, until the peas fall apart.',
      'Lift out the hock, pull off the meat and return it to the pot with the sausage and marjoram. Heat for 5 minutes.',
      'Remove the bay, stir in the vinegar and pepper and thin with hot water if needed.'
    ],
    tips: [
      'Stir often and scrape the base.',
      'Add water to thin it when reheating.',
      'Add the vinegar at the end to lift the flavour.'
    ],
    pair: ['Dark bread', 'Mustard', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [554, 41, 57, 18, 23, 10, 1210]
  },

  'linsensuppe': {
    d: 'A German brown lentil soup with potato, carrot and bacon, finished with a splash of vinegar and sliced sausage, in 55 minutes.',
    meta: 'Linsensuppe, German brown lentil soup with potato, bacon and a splash of vinegar, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['linsensuppe', 'german lentil soup', 'lentil soup with vinegar and sausage', 'brown lentil soup german', 'linsensuppe recipe'],
    why: 'Keep the vinegar for the end. A spoonful stirred into the pot just before serving is what makes a German lentil soup taste like linsensuppe, and not like a plain vegetable soup. The sharpness cuts the starch of the lentils and the smokiness of the bacon.\n\nSoften diced bacon in a pot, then add onion, carrot, celery and leek. Stir in the rinsed brown lentils, diced potato, a bay leaf and enough water or stock to cover by 3 cm. **Do not add the vinegar until the lentils are cooked**, because acid keeps them hard. Simmer for 40 minutes until they are tender and the potato has started to thicken the soup.\n\nSlice in a couple of Wiener sausages for the last 5 minutes and add marjoram and pepper. Finish with 2 tablespoons of red wine vinegar and taste again. Add water if the soup is too thick. It is served with a slice of dark bread and, in some homes, with a spoonful of sour cream on top.',
    ing: [
      '300 g brown lentils',
      '100 g smoked bacon, diced',
      '1 onion, chopped',
      '2 carrots, diced',
      '1 leek, sliced',
      '2 celery sticks, diced',
      '300 g potatoes, diced',
      '1.6 litres water or stock',
      '1 bay leaf',
      '100 g Wiener sausages, sliced',
      '1 tsp dried marjoram',
      '2 tbsp red wine vinegar'
    ],
    st: [
      'Fry the bacon in a large pot for 5 minutes. Add the onion, carrot, leek and celery and cook for 5 minutes.',
      'Add the lentils, potatoes, bay and water, bring to the boil and simmer for 40 minutes until the lentils are tender.',
      'Add the sausages and marjoram for the last 5 minutes.',
      'Stir in the vinegar and taste for salt.'
    ],
    tips: [
      'Add the vinegar at the end.',
      'Rinse the lentils before cooking.',
      'Thin with water if the soup thickens.'
    ],
    pair: ['Dark bread', 'Soured cream', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [347, 22, 49, 7, 8, 5, 1340]
  },

  'eintopf': {
    d: 'A German stew of beef, potatoes, carrots, cabbage and beans simmered together for 50 minutes in a rich broth.',
    meta: 'Eintopf, German stew of beef, potatoes, carrots and cabbage in a rich broth, cooked for 50 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['eintopf', 'german stew', 'german beef and vegetable stew', 'eintopf recipe', 'hearty german vegetable stew'],
    why: 'A table of six on a cold evening and a single big pot: that is what Eintopf means, a dish stewed together in one vessel, and the details change with every cook. This version uses beef, root vegetables, cabbage and white beans, and the broth is the reward.\n\nBrown the beef in lard in batches until it is deep brown, then soften onions and carrots in the same pot. Add stock and a bay leaf and simmer the meat for 30 minutes before the vegetables go in. **Add the vegetables in order of how long they take**: potatoes and carrots first, then the cabbage, then the beans at the end. That way nothing falls apart.\n\nCook until the beef is tender and the potatoes soft, about 50 minutes in all, and finish with parsley and a splash of vinegar. Some of the potato breaks up into the broth and thickens it, which is the aim. Serve in deep bowls with dark bread.',
    ing: [
      '600 g beef shin or chuck, in 3 cm chunks',
      '2 tbsp lard or oil',
      '2 onions, chopped',
      '3 carrots, in chunks',
      '600 g potatoes, in chunks',
      '300 g savoy cabbage, shredded',
      '400 g tinned white beans, drained',
      '1.5 litres beef stock',
      '1 bay leaf',
      '3 tbsp chopped parsley',
      '1 tbsp white wine vinegar'
    ],
    st: [
      'Brown the beef in the lard in batches, 5 minutes each. Lift out.',
      'Soften the onions and carrots in the pot for 8 minutes. Add the stock, bay and beef and simmer for 30 minutes.',
      'Add the potatoes and simmer for 10 minutes, then the cabbage and beans for 10 minutes more.',
      'Stir in the parsley and vinegar and season.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Add the vegetables in order of cooking time.',
      'A splash of vinegar brightens the broth.'
    ],
    pair: ['Dark bread', 'Mustard', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [447, 30, 39, 19, 8, 6, 1130]
  },

  'dampfnudeln': {
    d: 'Steamed yeast dumplings with a crisp golden base, cooked in milk and butter for 25 minutes and served with vanilla sauce.',
    meta: 'Dampfnudeln, steamed German yeast dumplings with a golden crust and vanilla sauce, cooked for 25 minutes. Six servings, ready in 50 minutes plus rising.',
    kw: ['dampfnudeln', 'german yeast dumplings', 'sweet yeast dumplings with vanilla sauce', 'dampfnudel recipe', 'sweet german dumplings'],
    why: 'Keep the lid on. That is the golden rule for dampfnudeln, because a quick peek lets the steam out and the dumplings sink. These sweet yeast dumplings, from southern Germany, are cooked in a covered pan with milk and butter, and they steam on top while the base turns crisp and caramelised.\n\nThe dough is soft and yeasty, made with flour, milk, egg, butter and sugar. Let it rise for 1 hour, shape it into balls and let them rise again on a floured board for 20 minutes. **Do not lift the lid for the first 20 minutes**, and listen: when the sizzling stops, the liquid has gone, and the base has set in a golden crust.\n\nThe dumplings are lifted out with a spatula, crust side up, and served with warm vanilla sauce, stewed plums or a plate of both. The best ones are puffy and dry on top, with a light, chewy crumb. They are a dessert, or a main dish on a fast day.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '40 g caster sugar',
      '1 pinch salt',
      '250 ml lukewarm milk',
      '1 egg',
      '60 g butter, softened',
      '250 ml whole milk, for the pan',
      '40 g butter, for the pan',
      '1 tbsp caster sugar, for the pan',
      '500 ml vanilla sauce, to serve'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, lukewarm milk, egg and softened butter and knead for 8 minutes. Leave to rise for 1 hour.',
      'Shape into 6 balls and leave on a floured board for 20 minutes.',
      'Heat the pan milk, butter and sugar in a wide pan with a lid until bubbling. Set the balls in it, cover and cook over medium heat for 20 minutes without lifting the lid.',
      'Listen for the sizzling to stop and cook for 5 minutes more, until the base is golden.',
      'Lift out and serve crust side up with the vanilla sauce.'
    ],
    tips: [
      'Keep the lid on while they steam.',
      'Listen for the sizzling to stop.',
      'Serve at once, as they sink as they cool.'
    ],
    pair: ['Vanilla sauce', 'Stewed plums', 'Poppy seeds'],
    store: 'Best fresh.',
    rest: [80, 'Rising'],
    nut: [558, 13, 86, 18, 3, 23, 80]
  },

  'rhabarberkuchen': {
    d: 'A tray bake of buttery sponge topped with rhubarb and a soft meringue, baked for 45 minutes and cut in squares.',
    meta: 'Rhabarberkuchen, German rhubarb tray cake with a soft meringue top, baked for 45 minutes. Twelve servings, ready in 1 hour 5 minutes.',
    kw: ['rhabarberkuchen', 'german rhubarb cake', 'rhubarb cake with meringue', 'rhubarb tray bake', 'rhabarberkuchen recipe'],
    why: 'Rhubarb, sugar, eggs, butter: four things you may already own, and about an hour. Rhabarberkuchen is the German spring cake, a soft sponge under a layer of sharp, pink fruit, and the meringue on top softens the sour edge.\n\nCut the rhubarb into 2 cm lengths and toss with a spoonful of sugar. Beat the butter and sugar until pale, add the eggs and fold in the flour and baking powder. Spread the batter in a lined tin and press the rhubarb into it. **Bake the cake for 25 minutes before you add the meringue**, so the base is set and holds the fruit up, then spread the whipped egg whites on top.\n\nReturn it to the oven for another 20 minutes at 170C, until the meringue is pale gold and firm. Cool it in the tin. The rhubarb softens and bleeds into the sponge, giving a pink marbling. It keeps for a day or two and is best eaten at room temperature with a cup of coffee.',
    ing: [
      '600 g rhubarb, in 2 cm lengths',
      '200 g butter, softened',
      '200 g caster sugar',
      '4 eggs, separated',
      '250 g plain flour',
      '2 tsp baking powder',
      '1 tsp vanilla extract',
      '100 g caster sugar, for the meringue',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 170C and line a 24 x 30 cm tin. Toss the rhubarb with 1 tablespoon of the caster sugar.',
      'Beat the butter and 200 g sugar until pale. Beat in the 4 yolks and the vanilla, then fold in the flour and baking powder.',
      'Spread in the tin and press the rhubarb on top. Bake for 25 minutes.',
      'Whisk the whites to stiff peaks, whisk in the 100 g sugar a spoonful at a time and spread over the cake.',
      'Bake for 20 minutes more until pale gold. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Bake the base before adding the meringue.',
      'Cut the rhubarb into even pieces.',
      'Cool completely before cutting.'
    ],
    pair: ['Coffee', 'Whipped cream', 'Vanilla ice cream'],
    store: 'Keeps for 2 days in a tin.',
    nut: [335, 5, 45, 15, 2, 27, 110]
  },

  'streuselkuchen': {
    d: 'A flat yeast cake topped with a thick layer of butter streusel, risen for 1 hour and baked for 30 minutes.',
    meta: 'Streuselkuchen, German yeast tray cake with a thick butter crumb topping, baked for 30 minutes. Twelve servings, ready in 1 hour plus rising.',
    kw: ['streuselkuchen', 'german crumb cake', 'yeast cake with streusel', 'butter streusel tray bake', 'streuselkuchen recipe'],
    why: 'Most home versions come out with a topping that melts into a flat sheet, and the fix is to chill the butter and rub it in by hand. Streuselkuchen is the German crumb cake, a thin yeast base covered with large, buttery lumps of streusel that bake crisp.\n\nThe base is a soft yeast dough of flour, milk, butter, egg and sugar. Roll or press it into a lined tin and let it rise for 1 hour. For the streusel, rub cold butter into flour, sugar and cinnamon until it makes clumps the size of peas and chickpeas. **Squeeze handfuls of the streusel into lumps** before scattering them, as they stay large when baked.\n\nCover the dough thickly with the streusel, pressing very lightly, and bake at 180C for 30 minutes until golden brown. Cool in the tin, then dust with icing sugar. The cake is best on the day it is made, when the streusel is still crisp. Traditionally cut into big squares, it is served with coffee.',
    ing: [
      '400 g plain flour',
      '7 g instant yeast',
      '50 g caster sugar',
      '200 ml lukewarm milk',
      '60 g butter, softened',
      '1 egg',
      '1 pinch salt',
      '300 g plain flour, for the streusel',
      '200 g cold butter, cubed',
      '150 g caster sugar',
      '1 tsp ground cinnamon',
      '1 tbsp icing sugar'
    ],
    st: [
      'Mix the 400 g flour, yeast, 50 g sugar, milk, 60 g butter, egg and salt and knead for 8 minutes. Press into a lined 24 x 30 cm tin and leave to rise for 1 hour.',
      'Heat the oven to 180C. Rub the streusel flour, cold butter, 150 g sugar and cinnamon together into pea sized lumps. Squeeze some into larger clumps.',
      'Scatter the streusel thickly over the dough.',
      'Bake for 30 minutes until golden brown. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Use cold butter for the streusel.',
      'Squeeze handfuls into big lumps.',
      'Cool in the tin before cutting.'
    ],
    pair: ['Coffee', 'Vanilla ice cream', 'Whipped cream'],
    store: 'Best the day it is made. Keeps for 2 days in a tin.',
    rest: [60, 'Rising'],
    nut: [451, 7, 63, 19, 2, 19, 30]
  },

  'rote-grutze': {
    d: 'A German pudding of red berries thickened with cornflour and served cold with vanilla sauce or cream, ready in 25 minutes plus chilling.',
    meta: 'Rote Grütze, German red berry pudding served cold with vanilla sauce, cooked for 15 minutes. Six servings, ready in 25 minutes plus chilling.',
    kw: ['rote grutze', 'german red berry pudding', 'red fruit pudding with vanilla sauce', 'rote gruetze recipe', 'berry compote german dessert'],
    why: 'The first sign it is ready is the colour: a deep, glossy red that clings to the spoon. Rote Grütze is a north German dessert of mixed red berries, simmered briefly with sugar and thickened a little, and eaten cold with vanilla sauce, cream or custard.\n\nUse a mix of raspberries, redcurrants, strawberries and sour cherries, fresh or frozen. A mixture of sharp and sweet fruit gives it depth. Simmer them in their own juice and a splash of red grape juice for 8 minutes, until they just begin to break down. **Stir the thickener in off the heat**: cornflour slaked in cold water, then return the pan to the heat for 2 minutes until clear. Too much cornflour makes it stodgy.\n\nPour into a glass bowl, sprinkle with a little sugar to stop a skin forming, and chill for at least 2 hours. Serve in glasses with cold vanilla sauce poured around, not over, so the red stays bright. It keeps for 3 days in the fridge and tastes better on the second.',
    ing: [
      '300 g raspberries',
      '200 g redcurrants or blackcurrants',
      '200 g strawberries, halved',
      '200 g sour cherries, stoned',
      '150 ml red grape juice',
      '100 g caster sugar',
      '30 g cornflour',
      '3 tbsp cold water',
      '400 ml cold vanilla sauce, to serve'
    ],
    st: [
      'Put the berries, grape juice and sugar in a pan and simmer gently for 8 minutes until just breaking down.',
      'Mix the cornflour and cold water. Take the pan off the heat and stir it in.',
      'Return to the heat and stir for 2 minutes until clear and thick.',
      'Pour into a bowl, sprinkle the top with a teaspoon of sugar and cool.',
      'Chill for 2 hours.',
      'Serve with the vanilla sauce.'
    ],
    tips: [
      'Use a mix of sharp and sweet berries.',
      'Do not add too much cornflour.',
      'Sprinkle the top with sugar against a skin.'
    ],
    pair: ['Vanilla sauce', 'Cream', 'Vanilla ice cream'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [221, 2, 51, 1, 6, 39, 10]
  },

  'kasekuchen': {
    d: 'A tall German baked cheesecake of quark, eggs and lemon in a short pastry case, baked for 70 minutes and cooled slowly.',
    meta: 'Käsekuchen, tall German baked cheesecake of quark and lemon, baked for 70 minutes. Twelve servings, ready in 1 hour 40 minutes plus cooling.',
    kw: ['kasekuchen', 'german cheesecake', 'quark cheesecake', 'kaesekuchen recipe', 'baked german quark cake'],
    why: 'Keep the oven door shut. That is how you stop a Käsekuchen from cracking, and cooling it slowly is the other half of the secret. This is the German baked cheesecake, made with quark rather than cream cheese, which gives a lighter, tangier filling.\n\nThe case is a simple shortcrust. The filling is quark, eggs, sugar, vanilla, lemon, cornflour and a little melted butter. Beat it just until smooth, because too much air makes it rise and then collapse into a crater. **Use full fat quark that has been drained overnight** if it looks wet, as excess water makes the filling weep. Fold in the beaten egg whites for a lighter set.\n\nBake at 170C for 70 minutes, until the top is golden and the centre has only a slight wobble. Turn off the oven, leave the door ajar and let the cake cool inside for 1 hour. Then cool completely and chill for 4 hours before you cut it. It keeps for 4 days in the fridge.',
    ing: [
      '250 g plain flour',
      '100 g cold butter, cubed',
      '70 g caster sugar',
      '1 egg yolk',
      '1 kg full fat quark, drained',
      '4 eggs, separated',
      '200 g caster sugar, for the filling',
      '40 g cornflour',
      '60 g butter, melted',
      '2 lemons, zest and juice of one',
      '1 tsp vanilla extract'
    ],
    st: [
      'Rub the 100 g butter into the flour and 70 g sugar, add the yolk and 1 tablespoon of water and bring into a dough. Chill for 30 minutes.',
      'Heat the oven to 170C. Line a 26 cm springform tin with the pastry.',
      'Beat the quark, 4 yolks, 200 g sugar, cornflour, melted butter, zest, juice and vanilla until smooth. Whisk the whites to stiff peaks and fold in.',
      'Pour into the case and bake for 70 minutes until golden with a slight wobble.',
      'Turn off the oven, leave the door ajar and cool inside for 1 hour. Cool completely, then chill for 4 hours.'
    ],
    tips: [
      'Do not overbeat the filling.',
      'Cool the cake in the oven with the door ajar.',
      'Chill before cutting.'
    ],
    pair: ['Coffee', 'Fresh berries', 'Whipped cream'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [330, 'Cooling and chilling'],
    nut: [429, 15, 45, 21, 1, 26, 60]
  }
};
