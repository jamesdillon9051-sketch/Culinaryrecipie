'use strict';

/**
 * Volume sixty-one, second part: Spanish vegetable, poultry, rabbit and
 * seafood dishes, then the first Portuguese ones (salt cod, duck rice,
 * grilled fish, octopus, boiled meats, a steak roll, a cold cake, cheese tarts
 * and the stone soup). Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'judias-verdes-con-jamon': {
    d: 'Flat green beans simmered until tender with serrano ham, garlic and tomato, a Spanish side dish ready in 30 minutes.',
    meta: 'Judías verdes con jamón, Spanish green beans with serrano ham, garlic and tomato, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['judias verdes con jamon', 'spanish green beans with ham', 'green beans with serrano ham and garlic', 'judias verdes recipe', 'beans with ham and tomato'],
    why: 'Judías verdes con jamón is a simple Spanish side, and the name gives the whole recipe: green beans with ham. It is served as a plain first course in homes across the country, and it works because the flat green beans are cooked until they are soft and sweet, not crisp.\n\nTop and tail the beans and cut them into 4 cm lengths. Boil them in salted water for 8 minutes until tender, and drain. Meanwhile fry sliced garlic in olive oil until pale gold, add diced serrano ham, and cook for 2 minutes to release its fat. **Do not brown the garlic**, as bitter garlic spoils the whole dish. Add a spoonful of chopped tomato and cook for 3 minutes.\n\nToss the drained beans in the pan for 3 minutes, so they take on the flavour of the ham. A pinch of smoked paprika at the end gives a warm colour. Taste before adding salt, since the ham is already salty. Serve warm as a first course with bread, or alongside a grilled fish or a fried egg for a light lunch.',
    ing: [
      '600 g flat green beans',
      '3 tbsp olive oil',
      '4 garlic cloves, sliced',
      '80 g serrano ham, diced',
      '1 tomato, 120 g, chopped',
      '1/2 tsp smoked paprika',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the beans in salted water for 8 minutes until tender. Drain.',
      'Warm the oil in a wide pan and fry the garlic for 1 minute until pale gold. Add the ham and fry for 2 minutes.',
      'Add the tomato and cook for 3 minutes.',
      'Toss in the beans for 3 minutes. Add the paprika, taste and season.'
    ],
    tips: [
      'Cook the beans until soft, not crisp.',
      'Keep the garlic pale.',
      'Taste before adding salt.'
    ],
    pair: ['Fried egg', 'Grilled fish', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [188, 7, 13, 12, 6, 6, 550]
  },

  'menestra-de-verduras': {
    d: 'A Navarra stew of artichokes, peas, broad beans, asparagus and ham in a light sauce, ready in 55 minutes.',
    meta: 'Menestra de verduras, Navarra spring vegetable stew with artichokes, peas and ham, cooked for 30 minutes. Four servings, ready in 55 minutes.',
    kw: ['menestra de verduras', 'navarra vegetable stew', 'spanish spring vegetable stew', 'menestra recipe', 'artichokes peas and asparagus stew'],
    why: 'It looks like a pot of small green things and tastes of spring itself. Menestra de verduras, the vegetable stew of Navarra, is made from the first young vegetables of the year, and it is a mixed dish, closer to a soup than to a stew, with a light, glossy sauce.\n\nPrepare each vegetable in turn: trim the artichokes to their hearts and rub with lemon, snap the woody ends from the asparagus, shell the broad beans and peel off their skins if large. **Add the vegetables in order of how long they take**: artichokes first, then carrots, broad beans and asparagus, and peas last. Soften an onion and garlic in olive oil, stir in a spoonful of flour, add the wine and stock and the artichokes.\n\nSimmer for 20 minutes, adding the other vegetables in stages, until all are tender but still green. Fry the ham separately until crisp and scatter over the top. Taste the sauce and add lemon. The stew is best made with fresh vegetables, but good frozen artichoke hearts, peas and broad beans save a great deal of time.',
    ing: [
      '300 g baby artichoke hearts',
      '1 lemon, juice',
      '3 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves',
      '1 tbsp plain flour',
      '100 ml dry white wine',
      '500 ml vegetable stock',
      '2 carrots, sliced',
      '200 g podded broad beans',
      '200 g green asparagus, in 4 cm lengths',
      '150 g frozen peas',
      '80 g serrano ham, diced',
      '1/2 tsp salt'
    ],
    st: [
      'Trim the artichokes, quarter them and rub with the lemon juice.',
      'Soften the onion and garlic in 2 tablespoons of the oil for 5 minutes. Stir in the flour for 1 minute, then add the wine and stock.',
      'Add the artichokes and carrots and simmer for 10 minutes. Add the broad beans and asparagus for 8 minutes, then the peas for 4 minutes.',
      'Fry the ham in the remaining oil until crisp.',
      'Season the stew with the salt and serve topped with the ham.'
    ],
    tips: [
      'Add the vegetables in order of cooking time.',
      'Keep them green by not overcooking.',
      'Use good frozen vegetables if the fresh ones are not in season.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Fried eggs'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [276, 15, 27, 12, 9, 8, 1210]
  },

  'revuelto-de-setas': {
    d: 'Soft scrambled eggs folded through browned mushrooms and garlic, a Spanish supper ready in 20 minutes.',
    meta: 'Revuelto de setas, Spanish scrambled eggs with browned mushrooms and garlic, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['revuelto de setas', 'spanish scrambled eggs with mushrooms', 'mushroom revuelto', 'revuelto recipe', 'eggs scrambled with garlic and mushrooms'],
    why: 'Take the pan off the heat while the eggs are still wet. That is the quick tip for any revuelto, because the heat left in the pan will finish the cooking, and a revuelto should be soft and creamy, never dry. It is a classic Spanish supper dish, a plate of soft eggs with a vegetable folded through.\n\nStart with the mushrooms. Cook sliced wild or cultivated mushrooms in a dry pan until they have released their water and it has evaporated, then add olive oil and garlic and brown them. **Do not salt the mushrooms until they are brown**, because salt draws out water and stops the colouring. Take a spoon of them out for the top.\n\nBeat the eggs lightly with a pinch of salt and pour them over the mushrooms in the pan over low heat. Stir slowly with a spatula, scraping the bottom, for about 3 minutes until the eggs are just set but still glossy. Take off the heat and fold in the parsley. Serve on toast or on its own, topped with the reserved mushrooms.',
    ing: [
      '400 g mixed mushrooms, sliced',
      '3 tbsp olive oil',
      '2 garlic cloves, sliced',
      '8 eggs',
      '1/2 tsp salt',
      '3 tbsp chopped parsley',
      '1/4 tsp black pepper',
      '4 slices crusty bread, toasted'
    ],
    st: [
      'Cook the mushrooms in a dry wide pan over medium high heat for 6 minutes until the water has gone.',
      'Add the oil and garlic and fry for 3 minutes until golden. Set a few mushrooms aside.',
      'Beat the eggs with the salt and pepper and pour into the pan over low heat. Stir slowly for 3 minutes until just set.',
      'Take off the heat, fold in the parsley and serve on the toast with the reserved mushrooms.'
    ],
    tips: [
      'Take the pan off the heat while the eggs are still wet.',
      'Brown the mushrooms before salting.',
      'Stir slowly over low heat.'
    ],
    pair: ['Toast', 'Dry white wine', 'Green salad'],
    store: 'Best fresh.',
    nut: [337, 18, 19, 21, 2, 4, 570]
  },

  'pollo-en-pepitoria': {
    d: 'Chicken in a golden sauce of ground almonds, saffron and egg yolk, simmered for 45 minutes in the Castilian style.',
    meta: 'Pollo en pepitoria, Castilian chicken in an almond, saffron and egg yolk sauce, cooked for 45 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['pollo en pepitoria', 'chicken in almond and saffron sauce', 'spanish chicken pepitoria', 'castilian chicken with egg yolk sauce', 'pollo en pepitoria recipe'],
    why: 'The first sign it is ready is the colour: a deep yellow sauce, thick with ground almonds, and a smell of saffron and wine. Pollo en pepitoria is a traditional Castilian chicken dish, thickened with a paste of almonds and hard boiled egg yolk, which gives it a texture closer to a rich custard.\n\nBrown the chicken pieces in olive oil in batches and set them aside. Soften onion and garlic in the same oil, add a bay leaf, white wine and stock and return the chicken. Cover and simmer for 35 minutes. **Make the paste while the chicken cooks**: pound toasted almonds with garlic, a pinch of saffron and the cooked yolks, thinning it with a ladle of the broth.\n\nStir the paste into the pot and simmer for 10 minutes without a lid, shaking the pan, until the sauce thickens and glosses. Do not boil hard, or the almond paste splits and looks grainy. Scatter with chopped egg white and parsley. Serve with rice or fried potatoes to soak up the sauce.',
    ing: [
      '1.2 kg chicken thighs and drumsticks, bone in',
      '4 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves',
      '150 ml dry white wine',
      '400 ml chicken stock',
      '1 bay leaf',
      '60 g toasted almonds',
      '3 hard boiled eggs',
      '0.3 g saffron threads',
      '3 tbsp chopped parsley',
      '1 tsp salt'
    ],
    st: [
      'Season the chicken and brown it in the oil in batches for 8 minutes. Lift out.',
      'Soften the onion and 2 of the garlic cloves in the pan for 5 minutes. Add the wine, stock and bay and return the chicken. Simmer, covered, for 35 minutes.',
      'Pound the almonds, remaining garlic, saffron and the yolks of the eggs to a paste with a ladle of the broth.',
      'Stir the paste into the pot and simmer for 10 minutes, uncovered, shaking the pan.',
      'Season with the salt, chop the egg whites and scatter over with the parsley.'
    ],
    tips: [
      'Brown the chicken well.',
      'Do not boil the sauce hard once the paste is in.',
      'Serve with rice to soak up the sauce.'
    ],
    pair: ['Rice', 'Fried potatoes', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [663, 69, 9, 39, 2, 2, 1240]
  },

  'pollo-al-chilindron': {
    d: 'Chicken stewed with red peppers, tomatoes, onion and serrano ham in the style of Aragon for 1 hour.',
    meta: 'Pollo al chilindrón, Aragonese chicken stewed with red peppers, tomato and ham, cooked for 1 hour. Four servings, ready in 1 hour 20 minutes.',
    kw: ['pollo al chilindron', 'aragonese chicken with peppers', 'chicken chilindron', 'spanish chicken with peppers and ham', 'pollo al chilindron recipe'],
    why: 'What is a chilindrón? It is a sauce of red peppers, tomatoes and onions cooked down to a thick, sweet jam, and it is the way people in Aragon and Navarre cook chicken, lamb and rabbit. The red of the sauce comes from the peppers, not from paprika, so use the best you can find.\n\nBrown the chicken pieces in olive oil in batches and set aside. Cook sliced onions and strips of red pepper in the same pan for 15 minutes, until soft and sweet. Add the ham and garlic, then the tomatoes. **Cook the sauce, uncovered, until it is thick and the oil rises** to the surface, which takes about 20 minutes. This is what makes the flavour deep.\n\nReturn the chicken, add a splash of white wine and cover. Simmer gently for 30 minutes more, turning the pieces once, until the meat is tender and the sauce has thickened. Taste for salt and sugar; a pinch of sugar balances acid tomatoes. Serve with rice or fried potatoes and crusty bread to mop up every drop.',
    ing: [
      '1.2 kg chicken thighs and drumsticks, bone in',
      '4 tbsp olive oil',
      '2 onions, sliced',
      '3 red peppers, in strips',
      '80 g serrano ham, diced',
      '3 garlic cloves',
      '500 g ripe tomatoes, chopped',
      '100 ml dry white wine',
      '1 tsp salt',
      '1 pinch caster sugar'
    ],
    st: [
      'Season the chicken and brown it in 2 tablespoons of the oil in a wide casserole. Lift out.',
      'Add the remaining oil, the onions and peppers and cook for 15 minutes until soft.',
      'Add the ham and garlic for 2 minutes, then the tomatoes. Cook uncovered for 20 minutes until thick.',
      'Return the chicken, add the wine, cover and simmer for 30 minutes, turning once.',
      'Season with the salt and sugar and serve.'
    ],
    tips: [
      'Cook the sauce until the oil rises.',
      'Use ripe tomatoes.',
      'Turn the chicken once while it simmers.'
    ],
    pair: ['Rice', 'Fried potatoes', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [597, 66, 18, 29, 5, 11, 1110]
  },

  'conejo-al-ajillo': {
    d: 'Rabbit pieces fried with a generous amount of garlic, white wine and thyme and simmered for 1 hour until tender.',
    meta: 'Conejo al ajillo, Spanish rabbit fried with plenty of garlic and white wine, cooked for 1 hour. Four servings, ready in 1 hour 15 minutes.',
    kw: ['conejo al ajillo', 'spanish garlic rabbit', 'rabbit with garlic and white wine', 'conejo al ajillo recipe', 'fried rabbit with garlic'],
    why: 'The first sign it is ready is the smell: whole garlic cloves frying slowly in olive oil, then the sharp hiss of wine in the pan. Conejo al ajillo is a Spanish country dish of rabbit cooked with more garlic than you would expect, and the garlic, once cooked, is soft and sweet and spreads onto bread.\n\nCut the rabbit into serving pieces, season with salt and pepper and brown in a generous amount of olive oil over a medium heat for 10 minutes. Do not rush this step. Add a whole head of garlic, broken into unpeeled cloves, to the oil. **Keep the heat moderate**, so that the garlic softens and turns golden, and does not burn. Pour in white wine and a spoonful of vinegar.\n\nAdd thyme and a bay leaf, cover the pan and simmer for 45 minutes, turning the pieces once, until the meat is tender. Uncover for the last 10 minutes so the sauce can reduce to a glaze. Serve with fried potatoes and the garlic cloves, squeezed from their skins onto the bread.',
    ing: [
      '1.2 kg rabbit, jointed',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '6 tbsp olive oil',
      '1 head garlic, 60 g, separated',
      '150 ml dry white wine',
      '1 tbsp sherry vinegar',
      '3 sprigs thyme',
      '1 bay leaf',
      '4 slices crusty bread'
    ],
    st: [
      'Season the rabbit and brown it in the oil in a wide pan over medium heat for 10 minutes.',
      'Add the unpeeled garlic cloves and fry for 3 minutes.',
      'Add the wine, vinegar, thyme and bay, cover and simmer for 45 minutes, turning once.',
      'Uncover for the last 10 minutes to reduce the sauce.',
      'Serve with the bread and the soft garlic.'
    ],
    tips: [
      'Brown the rabbit slowly.',
      'Keep the garlic unpeeled so it softens.',
      'Reduce the sauce at the end.'
    ],
    pair: ['Fried potatoes', 'Crusty bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [638, 66, 17, 34, 1, 2, 870]
  },

  'lomo-adobado': {
    d: 'Pork loin steaks marinated in paprika, oregano, garlic and vinegar for 4 hours, then fried for 10 minutes.',
    meta: 'Lomo adobado, Spanish marinated pork loin in paprika, oregano and vinegar, cooked for 25 minutes. Four servings, ready in 35 minutes plus marinating.',
    kw: ['lomo adobado', 'spanish marinated pork loin', 'pork in paprika and vinegar marinade', 'adobo pork steaks', 'lomo adobado recipe'],
    why: 'Marinate it, and do not hurry. Lomo adobado is pork loin steeped in an adobo of paprika, oregano, garlic and vinegar, a Spanish method of flavouring and preserving meat that dates from before refrigerators, and which still gives the pork a deep red colour and a tangy taste.\n\nMix the adobo in a bowl: sweet paprika, a little smoked paprika, crushed garlic, dried oregano, salt, olive oil and sherry vinegar. Cut the loin into 2 cm thick steaks and rub the paste well into the meat. **Leave it for at least 4 hours in the fridge**, or overnight, as the vinegar tenderises the pork and the spices sink in. Take the steaks out 20 minutes before cooking.\n\nPat the steaks dry with kitchen paper and fry in a hot pan with a little oil for about 4 minutes on each side, until the outside is dark and caramelised and the meat is just cooked through. Rest for 3 minutes. Serve with fried potatoes and roasted peppers, or in a bread roll as a bocadillo. Do not overcook, since lean loin dries quickly.',
    ing: [
      '700 g pork loin, in 2 cm steaks',
      '2 tsp sweet paprika',
      '1 tsp smoked paprika',
      '4 garlic cloves, crushed',
      '2 tsp dried oregano',
      '1 tsp salt',
      '3 tbsp sherry vinegar',
      '3 tbsp olive oil',
      '2 tbsp olive oil, for frying',
      '400 g fried potatoes, to serve'
    ],
    st: [
      'Mix the paprikas, garlic, oregano, salt, vinegar and 3 tablespoons of oil. Rub into the pork and marinate in the fridge for 4 hours.',
      'Take the steaks out 20 minutes ahead and pat dry.',
      'Heat the frying oil in a wide pan over high heat and cook the steaks for 4 minutes on each side.',
      'Rest for 3 minutes and serve with the potatoes.'
    ],
    tips: [
      'Marinate for at least 4 hours.',
      'Pat the steaks dry before frying.',
      'Do not overcook the loin.'
    ],
    pair: ['Fried potatoes', 'Roasted peppers', 'Red wine', 'Bread rolls'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [240, 'Marinating'],
    nut: [506, 39, 20, 30, 3, 1, 690]
  },

  'arroz-caldoso': {
    d: 'A soupy Spanish rice with prawns, squid and mussels in a saffron fish broth, ready in 1 hour 5 minutes.',
    meta: 'Arroz caldoso, soupy Spanish rice with prawns, squid and mussels in saffron broth, cooked for 40 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['arroz caldoso', 'spanish soupy rice', 'brothy seafood rice', 'arroz caldoso de marisco', 'spanish rice soup with prawns'],
    why: 'The first thing you notice is the colour, a deep golden orange, and the second is the spoon: arroz caldoso is eaten with one, because it is a rice dish in a broth. It is looser than a paella and richer than a soup, and it is the dish Spanish fishermen make on the boat from what is left in the net.\n\nStart with a fish stock, made from prawn shells and heads simmered with onion and tomato. Strain it. Soften onion, garlic and pepper in olive oil, then add the squid and cook for 5 minutes until it turns opaque. Add tomato and paprika, stir in the rice for a minute and add the hot stock. **Use 4 parts of stock to 1 part of rice** for this soupy texture, where a paella has only 2 or 3.\n\nSimmer for 15 minutes, add the mussels and prawns, and cook for 5 minutes more, until the rice is tender and the shells have opened. Throw away any that stay shut. The rice goes on absorbing broth as it stands, so serve it at once. A spoonful of allioli stirred in at the table is traditional.',
    ing: [
      '400 g raw prawns, heads and shells on',
      '1.6 litres water',
      '4 tbsp olive oil',
      '1 onion, chopped',
      '1 green pepper, diced',
      '3 garlic cloves',
      '200 g squid, in rings',
      '2 tomatoes, 250 g, grated',
      '1 tsp smoked paprika',
      '0.3 g saffron threads',
      '200 g bomba or paella rice',
      '400 g mussels, cleaned',
      '1 tsp salt',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Peel the prawns, keeping the shells and heads. Simmer the shells and heads in the water with the saffron for 15 minutes. Strain and keep hot.',
      'Soften the onion, pepper and garlic in the oil for 8 minutes. Add the squid and cook for 5 minutes.',
      'Add the tomatoes and paprika and cook for 5 minutes. Stir in the rice for 1 minute.',
      'Pour in the hot stock, add the salt and simmer for 15 minutes.',
      'Add the mussels and prawns and cook for 5 minutes until the shells open. Discard any shut ones and scatter with the parsley.'
    ],
    tips: [
      'Use about four parts stock to one of rice.',
      'Keep the stock hot when it goes in.',
      'Serve at once, as the rice keeps absorbing broth.'
    ],
    pair: ['Allioli', 'Lemon wedges', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [558, 45, 54, 18, 3, 4, 1070]
  },

  'mejillones-a-la-marinera': {
    d: 'Mussels steamed open in white wine with garlic, tomato, paprika and parsley, a Spanish bar classic ready in 20 minutes.',
    meta: 'Mejillones a la marinera, Spanish mussels steamed with white wine, garlic, tomato and parsley, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['mejillones a la marinera', 'spanish sailor style mussels', 'mussels in tomato and white wine', 'mejillones marinera recipe', 'mussels with garlic and paprika'],
    why: 'Be careful not to overcook them. That is the quick tip for any mussels recipe, because mussels turn rubbery after 5 minutes in the pot, and the best moment to take them off the heat is as soon as the shells have opened. Mejillones a la marinera is the Spanish sailor\'s way, with a quick sauce of garlic, tomato and wine, and it is one of the most popular of tapas.\n\nScrub the mussels in cold water, pull out the beards and discard any with cracked shells or that stay open when tapped. Soften chopped garlic and onion in olive oil, add the paprika and a spoonful of tomato, then the wine, and boil for 1 minute. **Add the mussels all at once and cover at once**, shaking the pan so they cook evenly. They need 4 to 5 minutes.\n\nLift the lid when most are open, stir and cook for 1 minute more. Throw away any that stay shut. Scatter with parsley and serve in the pan with a squeeze of lemon and bread for the juices. The juice is the best part, so serve it in a deep bowl and do not strain it away.',
    ing: [
      '1.2 kg mussels, cleaned',
      '3 tbsp olive oil',
      '1 small onion, finely chopped',
      '3 garlic cloves, chopped',
      '1 tsp smoked paprika',
      '2 tbsp tomato sauce',
      '150 ml dry white wine',
      '3 tbsp chopped parsley',
      '1 lemon, in wedges',
      '4 slices crusty bread'
    ],
    st: [
      'Scrub the mussels and pull off the beards. Discard any open ones that do not close when tapped.',
      'Soften the onion and garlic in the oil for 4 minutes. Add the paprika, tomato sauce and wine and boil for 1 minute.',
      'Add the mussels, cover at once and cook for 4 to 5 minutes, shaking the pan.',
      'Discard any that stay shut. Add the parsley and serve with the lemon and bread.'
    ],
    tips: [
      'Take the mussels off the heat as soon as they open.',
      'Cover the pan at once.',
      'Throw away any that stay shut.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Lemon wedges'],
    store: 'Best fresh.',
    nut: [445, 40, 33, 17, 2, 4, 1060]
  },

  'pulpo-a-feira': {
    d: 'Octopus simmered until tender, cut in slices and served on boiled potatoes with olive oil, smoked paprika and coarse salt.',
    meta: 'Pulpo a feira, Galician octopus on potatoes with olive oil and paprika, cooked for 1 hour. Four servings, ready in 1 hour 10 minutes.',
    kw: ['pulpo a feira', 'galician octopus', 'spanish octopus with paprika and potatoes', 'pulpo a la gallega', 'pulpo a feira recipe'],
    why: 'The first sign it is ready is the colour: the skin turns deep purple and a skewer slides through the thickest part like a knife through butter. Pulpo a feira is Galician fair style octopus, sold in big copper pots at festivals, and it is simply octopus, potatoes, oil, paprika and salt.\n\nBuy a frozen octopus if you can, since the freezing helps to tenderise the flesh, or ask the fishmonger for a cleaned one. Bring a large pan of unsalted water to the boil. **Dip the octopus in the boiling water three times** and lift it out each time, holding it by the head, which makes the tentacles curl. Then lower it in, cover and simmer gently for about 1 hour.\n\nTest the thickest tentacle with a skewer. Lift it out and rest it for 10 minutes in the pot with the lid on. Cook the potatoes in the same water until tender and slice thick. Cut the octopus into 1 cm rounds with scissors, lay on the potatoes and dress with olive oil, coarse salt and smoked paprika. Serve at once on a wooden plate.',
    ing: [
      '1.5 kg octopus, cleaned',
      '800 g waxy potatoes, peeled and sliced thick',
      '5 tbsp extra virgin olive oil',
      '2 tsp smoked paprika',
      '2 tsp coarse sea salt'
    ],
    st: [
      'Bring a large pan of water to the boil. Holding the octopus by the head, dip it in 3 times for 5 seconds each.',
      'Lower it in, cover and simmer gently for 1 hour until a skewer slides through the thickest part.',
      'Lift out and rest, covered, for 10 minutes. Cook the potatoes in the same water for 15 minutes.',
      'Cut the octopus into 1 cm rounds with scissors. Lay on the potatoes.',
      'Dress with the oil, paprika and salt and serve at once.'
    ],
    tips: [
      'Dip the octopus three times before simmering.',
      'Test the thickest tentacle with a skewer.',
      'Cook the potatoes in the octopus water.'
    ],
    pair: ['Crusty bread', 'Ribeiro white wine', 'Padrón peppers'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [597, 60, 42, 21, 5, 2, 2050]
  },

  'dorada-a-la-sal': {
    d: 'A whole sea bream baked in a crust of coarse salt for 35 minutes, cracked open at the table, with lemon and olive oil.',
    meta: 'Dorada a la sal, whole sea bream baked in a salt crust, cooked for 35 minutes. Two servings, ready in 50 minutes.',
    kw: ['dorada a la sal', 'sea bream baked in salt', 'spanish salt baked sea bream', 'whole fish in a salt crust', 'dorada a la sal recipe'],
    why: 'Compare a fish baked in a salt crust with one baked in foil and you find one that is more moist and tastes of itself. Dorada a la sal is the Spanish fish baked in a blanket of coarse salt, and the salt does not season it so much as seal it, trapping steam and juice around the flesh.\n\nBuy a whole sea bream, scaled and gutted but with the skin on. Stuff the cavity with lemon slices, thyme and a bay leaf. Mix the coarse salt with egg whites and a splash of water until it feels like damp sand. **Spread a layer of the salt on the tray, lay the fish on it and pack the rest over the top**, covering the fish completely, except perhaps the tail. The crust must be sealed.\n\nBake at 220C for 35 minutes. Rest for 5 minutes, then crack the crust with the back of a spoon and lift off the pieces. The skin comes away with the salt, leaving white, moist flesh. Lift the fillets from the bone and serve with olive oil, lemon and boiled potatoes. The fish is not salty if the crust is cracked and removed cleanly.',
    ing: [
      '800 g whole sea bream, scaled and gutted',
      '1 lemon, sliced',
      '4 sprigs thyme',
      '1 bay leaf',
      '1 kg coarse sea salt',
      '3 egg whites',
      '100 ml water',
      '4 tbsp extra virgin olive oil',
      '1 lemon, in wedges',
      '400 g boiled potatoes, to serve'
    ],
    st: [
      'Heat the oven to 220C. Stuff the fish with the lemon slices, thyme and bay.',
      'Mix the salt, egg whites and water until it feels like damp sand.',
      'Spread a third of the salt on a tray, lay the fish on top and pack the rest over to cover it completely.',
      'Bake for 35 minutes. Rest for 5 minutes.',
      'Crack the crust, lift it away with the skin, and lift the fillets from the bone. Serve with the oil, lemon wedges and potatoes.'
    ],
    tips: [
      'Seal the fish completely in the salt.',
      'Rest before cracking the crust.',
      'Remove the skin with the salt.'
    ],
    pair: ['Boiled potatoes', 'Green salad', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [956, 90, 41, 48, 7, 4, 196880]
  },

  'porra-antequerana': {
    d: 'A thick, cold Andalusian tomato and bread soup finished with diced ham and tuna: 20 minutes of work and no cooking, then 2 hours in the fridge.',
    meta: 'Porra antequerana, thick cold Andalusian tomato and bread soup with ham and tuna, ready in 20 minutes plus chilling. Six servings, no cooking.',
    kw: ['porra antequerana', 'thick andalusian tomato soup', 'cold tomato and bread soup with ham', 'antequera porra', 'porra recipe'],
    why: 'It is a close relative of salmorejo, thicker and denser, and in Antequera it is served as a first course, as a dip with bread, and as a snack in bars. The name porra refers to the thick consistency, which is such that a spoon almost stands up in it. The difference is the toppings: ham and tuna in this one.\n\nBlend ripe tomatoes with garlic, stale crustless bread, olive oil, sherry vinegar and salt until perfectly smooth. **Add the bread in stages**, tasting the texture each time, because the right thickness depends on how wet the tomatoes are. It should be as thick as a mayonnaise. Taste, and add more salt or vinegar as needed, remembering that chilling mutes the flavour.\n\nPour into a bowl and chill for at least 2 hours. Serve in small bowls or on a plate, topped with diced serrano ham, flaked tuna and a drizzle of oil. In Antequera, hard boiled egg is also traditional, but you can leave it out. Use the best tomatoes you can find, since they are the whole dish. Serve with crusty bread.',
    ing: [
      '1 kg ripe tomatoes, chopped',
      '200 g stale white bread, crusts removed',
      '1 garlic clove',
      '120 ml extra virgin olive oil',
      '2 tbsp sherry vinegar',
      '1 tsp salt',
      '80 g serrano ham, diced',
      '120 g tuna in olive oil, drained and flaked'
    ],
    st: [
      'Blend the tomatoes, garlic, vinegar and salt until smooth. Add the bread in stages, blending after each, until thick.',
      'With the blender running, pour in 100 ml of the oil in a thin stream.',
      'Chill for 2 hours. Taste and adjust the salt and vinegar.',
      'Serve in small bowls topped with the ham, tuna and the remaining oil.'
    ],
    tips: [
      'Use ripe tomatoes.',
      'Add the bread a little at a time.',
      'Season again once chilled.'
    ],
    pair: ['Crusty bread', 'Dry sherry', 'Cured ham'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [338, 12, 23, 22, 3, 6, 800]
  },

  'pa-amb-oli': {
    d: 'Mallorcan bread rubbed with ripe tomato, olive oil and salt, topped with ham or cheese, ready in 10 minutes with no cooking.',
    meta: 'Pa amb oli, Mallorcan bread rubbed with tomato and olive oil and topped with ham or cheese, ready in 10 minutes. Four servings, no cooking.',
    kw: ['pa amb oli', 'mallorcan bread with oil', 'bread with tomato and olive oil', 'pa amb oli with ham and cheese', 'balearic bread and oil'],
    why: 'Bread, tomato, oil, salt. That is it, and every one of the four has to be the best you can buy. Pa amb oli means bread with oil in Catalan, and it is the everyday meal of Mallorca, served with ham, cheese, sausages or fish on top. The dish is as simple as that.\n\nUse thick slices of a rustic loaf, with a chewy crumb and a firm crust. Cut a ripe tomato in half and rub the cut side hard over the bread, squashing it so the pulp and juice soak into the crumb. **Press the tomato until only the skin is left in your hand**, which should leave a red, damp surface. Do this on the day the bread is made, or it is too dry to take the juice.\n\nSprinkle with salt, drizzle generously with olive oil and add the toppings: slices of serrano ham, Mahón cheese, a few olives or a spoonful of sobrasada. A scattering of black pepper is enough seasoning. Eat at once with your hands, with cold white wine. Do not toast the bread, which belongs to the Catalan pan con tomate.',
    ing: [
      '4 thick slices rustic bread, 240 g',
      '2 ripe tomatoes, 300 g, halved',
      '4 tbsp extra virgin olive oil',
      '1/2 tsp flaky salt',
      '100 g serrano ham',
      '100 g Mahón or manchego cheese, sliced',
      '60 g black olives'
    ],
    st: [
      'Rub the cut side of the tomatoes hard over both sides of each slice of bread until only the skin remains.',
      'Sprinkle with the salt and drizzle with the oil.',
      'Lay the ham and cheese on top and serve with the olives.'
    ],
    tips: [
      'Press the tomato until only the skin is left.',
      'Use thick slices of rustic bread.',
      'Use excellent olive oil.'
    ],
    pair: ['Olives', 'Dry white wine', 'Cold beer'],
    store: 'Best fresh.',
    nut: [370, 16, 18, 26, 2, 3, 1170]
  },

  'espinacas-a-la-catalana': {
    d: 'Spinach sautéed with garlic, raisins and pine nuts in olive oil, a Catalan side dish ready in 25 minutes.',
    meta: 'Espinacas a la catalana, Catalan spinach with raisins, pine nuts and garlic, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['espinacas a la catalana', 'catalan spinach with raisins and pine nuts', 'spinach with garlic and raisins', 'espinacas catalana recipe', 'spanish spinach side dish'],
    why: 'Most home spinach comes out watery and dull, and the fix is to cook it in a wide pan and drain it hard. Espinacas a la catalana is the Catalan way with spinach, tossed with sweet raisins and toasted pine nuts, and it is served as a side dish or tapa all over Barcelona.\n\nSoak the raisins in warm water for 10 minutes to plump them. Toast the pine nuts in a dry pan until golden, and keep an eye on them, as they burn in a minute. **Cook the spinach in batches**, covering the pan for 1 minute so it wilts in its own steam, then tip it into a colander and press out the water with the back of a spoon. Chop it roughly.\n\nIn the same pan, warm olive oil with sliced garlic until pale gold, add the raisins and pine nuts and the spinach, and toss for 2 minutes over high heat to drive off the last moisture. Season with salt, pepper and a tiny pinch of nutmeg. Serve warm as a side to grilled fish or lamb, or on toast as a tapa.',
    ing: [
      '800 g baby spinach',
      '50 g raisins',
      '40 g pine nuts',
      '4 tbsp olive oil',
      '3 garlic cloves, sliced',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 pinch ground nutmeg'
    ],
    st: [
      'Soak the raisins in warm water for 10 minutes and drain. Toast the pine nuts in a dry pan for 2 minutes.',
      'Wilt the spinach in a covered wide pan in 3 batches, 1 minute each. Press out the water in a colander and chop roughly.',
      'Warm the oil with the garlic for 2 minutes until pale gold. Add the raisins, pine nuts and spinach.',
      'Toss over high heat for 2 minutes. Season with the salt, pepper and nutmeg.'
    ],
    tips: [
      'Press the spinach dry.',
      'Watch the pine nuts, as they burn quickly.',
      'Serve warm.'
    ],
    pair: ['Grilled fish', 'Roast lamb', 'Toasted bread'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [297, 8, 19, 21, 5, 9, 450]
  },

  'chuleton-de-buey': {
    d: 'A thick bone in ox rib steak seared on a very hot grill, rested, sliced and served with flaky salt, in 30 minutes.',
    meta: 'Chuletón de buey, thick Spanish grilled rib steak with flaky salt, cooked for 20 minutes. Two servings, ready in 30 minutes.',
    kw: ['chuleton de buey', 'spanish bone in rib steak', 'basque bone in rib steak', 'chuleton recipe', 'thick ox rib steak'],
    why: 'Beef, salt, fire: three things, and no sauce. Chuletón de buey is the Spanish bone in rib steak from an old ox, a thick cut that is grilled over embers in the Basque country, rested and sliced at the table, and it tastes of the meat itself.\n\nTake the steak out of the fridge an hour before cooking so it comes to room temperature, as a cold steak cooks unevenly. Do not salt it before cooking; **salt only after the steak is seared**, when it goes on in coarse flakes as it is sliced. Heat the grill or a cast iron pan until it is smoking hot, and sear the steak for 4 minutes on each side to get a dark crust.\n\nFor a steak that is 4 cm thick, finish it over a gentler heat or in a 180C oven for 10 minutes, until the centre reads 50C for rare to medium rare. Rest it for 10 minutes on a board. Slice the meat off the bone in strips, season with flaky salt and serve with grilled green peppers and a good red wine. The bone is for gnawing.',
    ing: [
      '800 g bone in rib steak, 4 cm thick',
      '1 tbsp olive oil',
      '2 tsp flaky salt',
      '200 g green peppers',
      '2 tbsp olive oil, for the peppers'
    ],
    st: [
      'Take the steak out of the fridge 1 hour ahead. Heat the oven to 180C.',
      'Heat a cast iron pan until smoking, brush the steak with the oil and sear for 4 minutes on each side.',
      'Transfer to the oven for 10 minutes until the centre reads 50C.',
      'Fry the peppers in the 2 tablespoons of oil for 5 minutes.',
      'Rest the steak for 10 minutes, slice off the bone, season with the flaky salt and serve with the peppers.'
    ],
    tips: [
      'Bring the steak to room temperature.',
      'Salt after searing.',
      'Rest before slicing.'
    ],
    pair: ['Grilled peppers', 'Red wine', 'Fried potatoes'],
    store: 'Best fresh.',
    nut: [769, 85, 6, 45, 2, 4, 2580]
  },

  'arroz-con-conejo-y-caracoles': {
    d: 'Valencian rice cooked with rabbit, chicken, snails and green beans in a wide pan over a low heat, ready in 1 hour 20 minutes.',
    meta: 'Arroz con conejo y caracoles, Valencian rice with rabbit, snails and beans, cooked for 1 hour. Six servings, ready in 1 hour 20 minutes.',
    kw: ['arroz con conejo y caracoles', 'valencian rabbit and snail rice', 'paella with rabbit and snails', 'spanish rabbit rice', 'arroz con conejo recipe'],
    why: 'What do you eat in the Valencian countryside? A paella built of rabbit, chicken and snails, cooked over a wood fire in the open air. The seafood paella is the tourist\'s dish, and this is the one local families make on Sundays, with green beans, garrofó beans and a good deal of paprika.\n\nBrown the rabbit and chicken pieces in olive oil in a wide pan, over medium heat, for 12 minutes, until deeply coloured. This colour is the base of the flavour. Push the meat to the edges, add the green beans, grated tomato and paprika to the centre and cook for 5 minutes. **Add the water in one go and do not stir the rice once it is in**, so the grains cook evenly and a crust forms at the base.\n\nBring the stock to the boil, add the saffron and the rice, spread it evenly and leave it to simmer for 18 minutes. Add the snails, which are cooked and from a jar, for the last 5 minutes, with a sprig of rosemary. Rest for 5 minutes. A crisp layer at the base, the socarrat, is the prize.',
    ing: [
      '600 g rabbit, jointed',
      '400 g chicken thighs, in pieces',
      '5 tbsp olive oil',
      '200 g flat green beans, in 4 cm lengths',
      '2 tomatoes, 250 g, grated',
      '1 tsp smoked paprika',
      '1.2 litres hot water',
      '0.3 g saffron threads',
      '400 g paella rice',
      '200 g cooked snails, drained',
      '1 sprig rosemary',
      '1 tsp salt'
    ],
    st: [
      'Season the rabbit and chicken and brown them in the oil in a 40 cm paella pan for 12 minutes.',
      'Push the meat to the edges. Add the beans and tomatoes to the centre and cook for 5 minutes. Stir in the paprika.',
      'Pour in the hot water, add the saffron and salt and simmer for 15 minutes.',
      'Scatter in the rice evenly. Simmer for 18 minutes without stirring, adding the snails and rosemary for the last 5 minutes.',
      'Rest for 5 minutes and serve from the pan.'
    ],
    tips: [
      'Brown the meat well.',
      'Do not stir the rice once it is in.',
      'Rest before serving.'
    ],
    pair: ['Lemon wedges', 'Red wine', 'Green salad'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [592, 45, 58, 20, 3, 2, 540]
  },

  'bacalhau-a-gomes-de-sa': {
    d: 'Salt cod layered with sliced potatoes, onions and olives in a baking dish, finished with boiled egg, after a 24 hour soak.',
    meta: 'Bacalhau à Gomes de Sá, Portuguese salt cod baked with potatoes, onions, olives and egg, cooked for 40 minutes. Four servings, ready in 1 hour plus soaking.',
    kw: ['bacalhau a gomes de sa', 'portuguese salt cod with potatoes', 'gomes de sa cod', 'bacalhau baked with potatoes and olives', 'bacalhau recipe'],
    why: 'A short, sharp instruction first: soak the cod properly. A piece of salt cod that has not been soaked for 24 hours is a mouthful of salt, and you cannot fix it later. Bacalhau à Gomes de Sá is one of the best loved Portuguese salt cod dishes, from Porto, in which flaked cod, soft potatoes, onions and olives are baked together with eggs on top.\n\nSoak the cod in cold water in the fridge for 24 hours, changing the water 3 times. Poach it in milk for 10 minutes, then flake the fish and remove the skin and bones. Boil sliced potatoes until just tender. **Cook the onions slowly for 15 minutes** in olive oil with garlic and a bay leaf, until sweet and soft, as they are the main flavour of the dish.\n\nMix the cod, potatoes and onions in a baking dish, stirring gently so the flakes stay large. Cover with halved boiled eggs and black olives and bake at 200C for 15 minutes until the top is lightly browned. Scatter with parsley. Serve straight from the dish with a green salad.',
    ing: [
      '600 g salt cod, in pieces',
      '500 ml whole milk',
      '700 g waxy potatoes, sliced 5 mm',
      '4 tbsp olive oil',
      '3 onions, thinly sliced',
      '3 garlic cloves, sliced',
      '1 bay leaf',
      '3 hard boiled eggs, halved',
      '80 g black olives',
      '3 tbsp chopped parsley',
      '1/2 tsp black pepper'
    ],
    st: [
      'Soak the salt cod in cold water in the fridge for 24 hours, changing the water 3 times.',
      'Poach the cod in the milk for 10 minutes, then flake it, discarding the skin and bones. Boil the potatoes in salted water for 10 minutes and drain.',
      'Heat the oven to 200C. Cook the onions in the oil with the garlic and bay over low heat for 15 minutes.',
      'Mix the cod, potatoes and onions with the pepper in a baking dish. Top with the eggs and olives.',
      'Bake for 15 minutes until lightly browned. Scatter with the parsley.'
    ],
    tips: [
      'Soak the cod for a full 24 hours.',
      'Cook the onions slowly until sweet.',
      'Flake the cod in large pieces.'
    ],
    pair: ['Green salad', 'Vinho verde', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [1440, 'Soaking'],
    nut: [465, 14, 46, 25, 6, 11, 59370]
  },

  'arroz-de-pato': {
    d: 'Portuguese duck rice made with shredded roast duck, chorizo and a crisp top baked in the oven, ready in 1 hour 20 minutes.',
    meta: 'Arroz de pato, Portuguese duck rice with chorizo and a crisp baked top, cooked for 50 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['arroz de pato', 'portuguese duck rice', 'duck and chorizo rice', 'braga duck rice', 'arroz de pato recipe'],
    why: 'This is what to cook in the first week of autumn, when you want a dish that fills the house with the smell of duck fat and smoked sausage. Arroz de pato is the Portuguese duck rice, a dish where rice is cooked in the broth of the duck itself, mixed with shredded meat and chorizo and finished in the oven until crisp on top.\n\nSimmer the duck legs in water with an onion, a carrot and a bay leaf for 40 minutes, until the meat is tender and comes away from the bone. Lift them out, strain the broth and shred the meat. Fry the duck skin until crisp if you like. **Use the duck broth to cook the rice**, not water, as it carries the flavour. Soften onion and garlic in olive oil and add the rice, then the hot broth.\n\nSimmer for 12 minutes until the rice is almost tender, then stir in the shredded duck and layer the sliced chorizo on top. Bake at 220C for 15 minutes, until the top is crisp and the chorizo is browned. Rest for 5 minutes. Serve straight from the dish with a green salad and a glass of red wine.',
    ing: [
      '4 duck legs, about 1.2 kg',
      '1 onion, halved',
      '1 carrot',
      '1 bay leaf',
      '1.5 litres water',
      '3 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves',
      '350 g long grain rice',
      '150 g chorizo, sliced',
      '1 tsp salt',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Simmer the duck legs with the halved onion, carrot, bay and water for 40 minutes. Lift out and shred the meat. Strain the broth and keep it hot.',
      'Heat the oven to 220C. Soften the chopped onion and garlic in the oil for 5 minutes. Add the rice and stir for 1 minute.',
      'Add 700 ml of the hot broth and the salt and simmer for 12 minutes.',
      'Stir in the duck, spread in a baking dish and lay the chorizo on top.',
      'Bake for 15 minutes until the top is crisp. Rest for 5 minutes and scatter with the parsley.'
    ],
    tips: [
      'Cook the rice in the duck broth.',
      'Do not cook the rice fully before baking.',
      'Rest before serving.'
    ],
    pair: ['Green salad', 'Red wine', 'Orange slices'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [697, 38, 53, 37, 2, 2, 770]
  },

  'sardinhas-assadas': {
    d: 'Whole fresh sardines grilled over a high heat for 12 minutes, served on bread with roasted peppers and boiled potatoes.',
    meta: 'Sardinhas assadas, Portuguese grilled sardines with coarse salt, served on bread, cooked for 12 minutes. Four servings, ready in 22 minutes.',
    kw: ['sardinhas assadas', 'portuguese grilled sardines', 'grilled whole sardines with salt', 'santo antonio sardines', 'sardinhas na brasa'],
    why: 'Compare a grilled sardine to a tinned one and you will think they are different fish. Sardinhas assadas are the fresh sardines of Portugal, grilled whole over charcoal in June during the festivals of Saint Anthony, when the streets of Lisbon smell of smoke, and everyone eats them on a slice of bread.\n\nUse the freshest sardines you can find, with shiny skin and clear eyes. Do not gut or scale them: the guts are removed at the table, by running a thumb down the belly. Salt them with coarse salt 15 minutes before cooking, which firms the flesh and seasons the skin. **Grill them over a very hot fire**, 5 to 6 minutes on each side, until the skin blisters and blackens in places.\n\nServe on a thick slice of crusty bread, which soaks up the juices and the fat. Eat with a salad of roasted peppers, boiled potatoes and a drizzle of olive oil. Pull the flesh from the backbone with your fingers. They are best eaten the moment they leave the grill and are not good reheated.',
    ing: [
      '1 kg fresh sardines, whole',
      '2 tbsp coarse sea salt',
      '4 thick slices crusty bread',
      '4 roasted red peppers, in strips',
      '600 g boiled potatoes',
      '4 tbsp olive oil',
      '1 lemon, in wedges'
    ],
    st: [
      'Sprinkle the sardines with the coarse salt and leave for 15 minutes.',
      'Heat a barbecue or grill to very hot. Cook the sardines for 5 to 6 minutes on each side until the skin blisters.',
      'Lay the sardines on the bread. Serve with the peppers and potatoes, drizzled with the oil, and the lemon.'
    ],
    tips: [
      'Salt the fish 15 minutes before cooking.',
      'Grill over a very hot fire.',
      'Serve on bread to catch the juices.'
    ],
    pair: ['Roasted peppers', 'Boiled potatoes', 'Vinho verde'],
    store: 'Best fresh.',
    nut: [871, 70, 51, 43, 8, 9, 4700]
  },

  'polvo-a-lagareiro': {
    d: 'Octopus simmered then roasted in olive oil with garlic and potatoes that are punched flat, a Portuguese oven classic.',
    meta: 'Polvo à lagareiro, Portuguese octopus roasted in olive oil with garlic and potatoes, cooked for 1 hour. Four servings, ready in 1 hour 15 minutes.',
    kw: ['polvo a lagareiro', 'portuguese roast octopus', 'octopus with olive oil and potatoes', 'polvo a lagareiro recipe', 'oven roasted octopus with garlic'],
    why: 'Short and sharp: boil it, then roast it in oil. That is all there is to polvo à lagareiro, the octopus of the olive press workers. The old lagareiros were paid in oil, and so the dish is soaked in it, and the potatoes are punched, or murro, before roasting so that they drink up the garlic and the fat.\n\nBoil the octopus in unsalted water for about 1 hour until a skewer slides in easily. Cool it in the water, then cut the tentacles apart. Boil small potatoes in their skins until just tender, 20 minutes, and press each one flat with your fist so the skin cracks and the flesh opens. **Be generous with the oil**, a good 150 ml, since the whole dish depends on it.\n\nPut the octopus and potatoes in a roasting dish, scatter with sliced garlic, bay and coarse salt, and pour over the oil. Roast at 220C for 20 minutes, until the octopus is blistered and the potatoes are golden. Serve in the dish with a green salad, a lemon wedge and plenty of bread.',
    ing: [
      '1.5 kg octopus, cleaned',
      '800 g small waxy potatoes',
      '150 ml extra virgin olive oil',
      '8 garlic cloves, sliced',
      '2 bay leaves',
      '2 tsp coarse sea salt',
      '3 tbsp chopped parsley',
      '1 lemon, in wedges'
    ],
    st: [
      'Simmer the octopus in unsalted water for 1 hour until a skewer slides in easily. Cool in the water and cut into pieces.',
      'Boil the potatoes in their skins for 20 minutes. Drain and press each flat with your fist.',
      'Heat the oven to 220C. Put the octopus and potatoes in a roasting dish with the garlic, bay and salt and pour over the oil.',
      'Roast for 20 minutes until blistered and golden. Scatter with the parsley and serve with the lemon.'
    ],
    tips: [
      'Cool the octopus in its cooking water.',
      'Press the potatoes flat so they absorb the oil.',
      'Do not skimp on the olive oil.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Vinho verde'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [775, 61, 45, 39, 5, 2, 2060]
  },

  'cozido-a-portuguesa': {
    d: 'A Portuguese boiled dinner of beef, pork, sausages, cabbage, carrots, potatoes and rice, simmered for 2 hours 30 minutes.',
    meta: 'Cozido à portuguesa, Portuguese boiled dinner of meats, sausages and vegetables, cooked for 2 hours 30 minutes. Eight servings, ready in 3 hours.',
    kw: ['cozido a portuguesa', 'portuguese boiled dinner', 'portuguese meat and vegetable stew', 'cozido recipe', 'portuguese cozido with sausages'],
    why: 'Compare it to the Spanish cocido and you find fewer chickpeas and more vegetables, with a platter that comes out looking like a feast. Cozido à portuguesa is the national boiled dinner, a table of eight, each piece of meat and each vegetable cooked in the same broth in turn and served on a large dish.\n\nStart with the tougher meats: beef, a ham hock and pork belly, simmered in water for 1 hour 30 minutes with a bay leaf. Skim the foam as it rises. **Add each next item in order of its cooking time**: chouriço and morcela for 20 minutes, then the carrots, turnips and potatoes for 20 minutes, and the cabbage for the last 15 minutes. Use a second pot for the rice if you want a clear broth.\n\nTo serve, lift each piece out with a slotted spoon, slice the meats and sausages, and arrange them on a big platter with the vegetables. Serve the broth separately, or cook rice in it. Offer mustard, piri piri and olive oil at the table. The leftovers make a good soup or a fry up the next day.',
    ing: [
      '800 g beef shin',
      '500 g smoked ham hock',
      '400 g pork belly',
      '2.5 litres water',
      '2 bay leaves',
      '200 g chouriço',
      '200 g morcela',
      '4 carrots',
      '300 g turnips',
      '800 g potatoes',
      '1 savoy cabbage, about 800 g',
      '200 g rice',
      '1 tsp salt'
    ],
    st: [
      'Put the beef, ham hock, belly, bay and water in a large pot and bring slowly to a simmer. Skim for 15 minutes.',
      'Cook gently for 1 hour 30 minutes. Add the chouriço and morcela and cook for 20 minutes.',
      'Add the carrots, turnips and potatoes for 20 minutes, then the cabbage for 15 minutes.',
      'Lift out the meats and vegetables. Cook the rice in 600 ml of the broth for 12 minutes.',
      'Slice the meats and arrange on a platter with the vegetables. Serve with the rice and broth.'
    ],
    tips: [
      'Add each item in order of cooking time.',
      'Skim the foam early.',
      'Serve the broth separately.'
    ],
    pair: ['Mustard', 'Piri piri', 'Red wine', 'Olive oil'],
    store: 'Keeps for 4 days in the fridge. Freeze for 2 months.',
    nut: [917, 48, 53, 57, 7, 7, 1500]
  },

  'prego-no-pao': {
    d: 'A thin steak marinated in garlic and wine, fried briefly and served in a crusty roll with its juices, ready in 25 minutes.',
    meta: 'Prego no pão, Portuguese garlic steak roll with a marinade of wine and garlic, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['prego no pao', 'portuguese steak sandwich', 'garlic steak in a roll', 'prego recipe', 'portuguese beef roll'],
    why: 'The first sign it is ready is the smell: garlic and butter on a hot pan, and a thin steak turning brown in a minute. Prego no pão is the Portuguese steak roll, sold in cafés and eaten at the counter at any hour, and it is a thin slice of beef in a roll with garlicky juice.\n\nBeat the steak very thin, to about 5 mm, so it cooks in a flash. Marinate it in white wine, crushed garlic, a bay leaf and salt, ideally for 1 hour, though 10 minutes will do. **Fry it for 1 minute on each side in a very hot pan**, no more. Overcooked steak turns grey and tough. Add a spoonful of the marinade and butter to the pan and let it bubble to a sauce.\n\nSplit the rolls, dip the cut sides into the juices to soften them, and tuck in the steak. The sandwich should be moist, not dripping. Add a smear of mustard if you like, or a fried egg for a prego com ovo. Eat at once, with a cold beer, standing up if you want to do it properly.',
    ing: [
      '500 g thin beef sirloin steaks, 5 mm',
      '100 ml dry white wine',
      '4 garlic cloves, crushed',
      '1 bay leaf',
      '1 tsp salt',
      '2 tbsp olive oil',
      '30 g butter',
      '4 crusty bread rolls',
      '2 tbsp mustard'
    ],
    st: [
      'Beat the steaks to 5 mm. Mix the wine, garlic, bay and salt and marinate the steaks for 10 minutes.',
      'Heat the oil in a wide pan until very hot. Fry the steaks for 1 minute on each side, in batches. Lift out.',
      'Add the butter and 4 tablespoons of the marinade to the pan and bubble for 2 minutes.',
      'Split the rolls, dip the cut sides in the sauce, spread with mustard and fill with the steak.'
    ],
    tips: [
      'Beat the steak thin.',
      'Fry for one minute a side, no more.',
      'Dip the roll in the pan juices.'
    ],
    pair: ['Chips', 'Cold beer', 'Fried egg'],
    store: 'Best fresh.',
    nut: [404, 30, 17, 24, 1, 2, 890]
  },

  'bolo-de-bolacha': {
    d: 'A Portuguese no bake cake of layers of Maria biscuits dipped in coffee and coffee buttercream, chilled overnight.',
    meta: 'Bolo de bolacha, Portuguese cake of coffee dipped biscuits and buttercream, no baking. Eight servings, ready in 25 minutes plus chilling.',
    kw: ['bolo de bolacha', 'portuguese biscuit cake', 'no bake coffee biscuit cake', 'maria biscuit cake', 'bolo de bolacha recipe'],
    why: 'Does a cake need an oven? Not this one. Bolo de bolacha is the Portuguese biscuit cake, a tall stack of Maria biscuits dipped in coffee and layered with a rich buttercream, and it is the cake most often made for children\'s birthdays, since nothing about it has to be baked.\n\nThe cream is just butter, sugar, egg yolk and strong coffee, beaten together until light and smooth. Use butter at room temperature, so that it whips, and beat for a full 5 minutes. **Dip each biscuit in the cold coffee for only a second**, no more, as it softens fast and falls apart in the dish. Lay the dipped biscuits in a single layer on a serving plate and cover with a thin layer of cream.\n\nRepeat until you have used all the biscuits and cream, ending with a layer of cream. Cover and chill overnight so that the biscuits soften to a cake like texture. Decorate with crushed biscuits or chocolate shavings. Cut with a sharp knife, in slices as you would a gateau. It keeps for 4 days in the fridge.',
    ing: [
      '250 g Maria biscuits',
      '250 ml strong coffee, cooled',
      '250 g butter, softened',
      '150 g icing sugar',
      '1 egg yolk',
      '2 tbsp strong coffee, for the cream',
      '20 g dark chocolate, grated'
    ],
    st: [
      'Beat the butter and icing sugar for 5 minutes until pale. Beat in the egg yolk and the 2 tablespoons of coffee.',
      'Dip a biscuit in the cooled coffee for 1 second and lay it on a plate. Repeat to make a layer of biscuits.',
      'Spread with a thin layer of cream. Repeat with the biscuits and cream, ending with cream.',
      'Cover and chill overnight.',
      'Decorate with the chocolate and cut into slices.'
    ],
    tips: [
      'Dip the biscuits for only a second.',
      'Beat the butter until light.',
      'Chill overnight for the best texture.'
    ],
    pair: ['Coffee', 'Tea', 'Port'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [480, 'Chilling'],
    nut: [458, 3, 44, 30, 1, 26, 110]
  },

  'queijadas-de-sintra': {
    d: 'Small Portuguese tartlets of crisp pastry filled with a sweet curd cheese, egg yolk and cinnamon filling, baked for 25 minutes.',
    meta: 'Queijadas de Sintra, small Portuguese cheese tartlets with cinnamon, baked for 25 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['queijadas de sintra', 'portuguese cheese tartlets', 'sintra cheese tarts', 'queijadas recipe', 'sweet cheese tartlets with cinnamon'],
    why: 'A treat for a table of twelve, and a Portuguese tradition from Sintra for centuries: queijadas de Sintra are small tartlets filled with fresh cheese, egg yolk, sugar and a pinch of cinnamon, with a thin, crisp, almost translucent pastry. The recipe is old, and it is simple.\n\nThe pastry is flour, a little butter, water and a pinch of salt, mixed to a soft dough and rolled very thin. Cut rounds and press them into a muffin tin, so the sides come up high. **Use fresh, mild cheese such as ricotta or fresh curd**, drained overnight if it is wet, as a wet cheese weeps in the oven. Mash it with sugar, yolks, flour and cinnamon until smooth.\n\nSpoon the filling into the cases to just below the rim, and bake at 200C for 25 minutes, until the tops are golden brown and spotted, and the pastry is crisp. Cool in the tin for 10 minutes, then turn out and dust with cinnamon. They keep for 2 days but are best on the day. Serve with strong coffee.',
    ing: [
      '250 g plain flour',
      '50 g butter',
      '80 ml water',
      '1 pinch salt',
      '300 g fresh curd cheese or ricotta, drained',
      '150 g caster sugar',
      '4 egg yolks',
      '1 tbsp plain flour',
      '1 tsp ground cinnamon',
      '1 tbsp icing sugar'
    ],
    st: [
      'Mix the 250 g flour, butter, water and salt to a soft dough. Rest for 15 minutes.',
      'Heat the oven to 200C. Roll the dough very thin and cut 12 rounds. Press into a muffin tin.',
      'Mash the cheese with the sugar, yolks, 1 tablespoon flour and half the cinnamon until smooth.',
      'Fill the cases almost to the top and bake for 25 minutes until golden with brown spots.',
      'Cool for 10 minutes, turn out and dust with the icing sugar and remaining cinnamon.'
    ],
    tips: [
      'Roll the pastry very thin.',
      'Drain the cheese if it is wet.',
      'Cool in the tin before turning out.'
    ],
    pair: ['Strong coffee', 'Tea', 'Port'],
    store: 'Best the day they are baked. Keeps for 2 days.',
    nut: [224, 7, 31, 8, 1, 15, 40]
  },

  'sopa-de-pedra': {
    d: 'The Alentejo stone soup of red beans, pork, sausages and vegetables, simmered for 2 hours after an overnight soak.',
    meta: 'Sopa de pedra, Alentejo stone soup of red beans, pork, sausages and vegetables, cooked for 2 hours. Six servings, ready in 2 hours 20 minutes plus soaking.',
    kw: ['sopa de pedra', 'portuguese stone soup', 'alentejo bean and pork soup', 'sopa de pedra recipe', 'red bean and sausage soup'],
    why: 'Short and sharp: the stone is a joke. The story goes that a hungry friar tricked a family into feeding him by saying he could make soup from a stone, and then asked for just a few extras. Sopa de pedra is the Portuguese result, a thick soup of red beans, pork, smoked sausages and vegetables, with a clean stone sometimes placed in the pot as a nod to the tale.\n\nSoak the red beans overnight. Drain them and put them in a large pot with pork ribs, a smoked ham bone, chouriço and morcela and cover with cold water. Bring to a simmer and skim. **Add the vegetables in two stages**: carrots, turnip and potato after 1 hour, and cabbage near the end. The beans should be soft but whole.\n\nSimmer for 2 hours in all, until the pork is tender and the broth is thick and red. Lift out the sausages and meat, slice or shred them and return them to the pot with a handful of mint, which is traditional in Alentejo. Taste for salt. Serve in deep bowls with bread. The soup tastes better the second day.',
    ing: [
      '300 g dried red kidney beans, soaked overnight',
      '400 g pork ribs',
      '300 g smoked ham bone',
      '150 g chouriço',
      '150 g morcela',
      '2.5 litres water',
      '2 carrots, diced',
      '150 g turnip, diced',
      '500 g potatoes, diced',
      '300 g savoy cabbage, shredded',
      '2 tbsp chopped mint',
      '1 tsp salt'
    ],
    st: [
      'Drain the beans and put them in a large pot with the ribs, ham bone, chouriço, morcela and water. Bring to a simmer and skim.',
      'Cook for 1 hour. Add the carrots, turnip and potatoes and cook for 40 minutes.',
      'Add the cabbage for the last 20 minutes.',
      'Lift out the meats, slice or shred them and return to the pot with the mint and salt.'
    ],
    tips: [
      'Soak the beans overnight.',
      'Add the vegetables in two stages.',
      'Finish with mint, as in the Alentejo.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Olives'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    rest: [480, 'Soaking'],
    nut: [512, 32, 33, 28, 7, 5, 1660]
  }
};
