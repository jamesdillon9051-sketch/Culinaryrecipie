'use strict';

/**
 * Volume sixty-one, first part: Spanish rice and soups, slow cooked and
 * roast meats, tapas and sweet fritters, bean stews and everyday dishes.
 * Waits of an hour or more are declared as rest. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'arroz-a-banda': {
    d: 'Valencian rice cooked in a rich fish stock until each grain is separate and golden, served with garlic mayonnaise, in 1 hour 5 minutes.',
    meta: 'Arroz a banda, rice cooked in a rich fish stock and served with allioli, cooked for 40 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['arroz a banda', 'valencian fish stock rice', 'spanish rice cooked in fish stock', 'arroz a banda with allioli', 'rice with fish broth'],
    why: 'It is the stock that carries this dish, and the rice that soaks it up. Arroz a banda means rice on the side, from the old fishermen\'s habit of eating the rice cooked in the fish broth first and the fish afterwards, and it is a Valencian classic from the coast of Alicante.\n\nMake the stock first from fish heads, bones and a few prawn shells, simmered for 20 minutes with onion, tomato, garlic and a pinch of saffron, then strain it well. **Keep the stock at a simmer** next to the pan, because cold stock stops the rice cooking evenly. Fry the sofrito of tomato and garlic in a wide shallow pan, stir in the rice and cover with 3 parts of stock to 1 of rice.\n\nCook for 18 minutes without stirring, until the rice is tender and the liquid has gone, leaving a thin crust at the base. Rest for 5 minutes. The fish, poached in the leftover stock, is served beside the rice with a spoonful of allioli, the garlic and oil emulsion, on the side. Lemon is the only other seasoning.',
    ing: [
      '600 g white fish heads and bones',
      '300 g raw prawns, shells on',
      '1.5 litres water',
      '1 onion, halved',
      '4 tbsp olive oil',
      '3 garlic cloves, chopped',
      '300 g ripe tomatoes, grated',
      '1 tsp smoked paprika',
      '0.3 g saffron threads',
      '320 g bomba or paella rice',
      '1 tsp salt',
      '120 g allioli, to serve',
      '1 lemon, in wedges'
    ],
    st: [
      'Simmer the fish bones, prawn shells, onion and water for 20 minutes. Strain, keep the prawns and bring the stock back to a simmer with the saffron.',
      'Warm the oil in a wide shallow pan and fry the garlic for 1 minute. Add the tomatoes and paprika and cook for 8 minutes until thick.',
      'Stir in the rice for 1 minute. Pour in 960 ml of the hot stock and add the salt.',
      'Cook over medium heat for 18 minutes without stirring, until the stock is absorbed. Rest for 5 minutes.',
      'Serve with the prawns, allioli and lemon.'
    ],
    tips: [
      'Strain the stock well.',
      'Keep it hot when it goes in.',
      'Do not stir the rice once the stock is in.'
    ],
    pair: ['Allioli', 'Lemon wedges', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [830, 49, 73, 38, 3, 4, 950]
  },

  'ajoblanco': {
    d: 'A chilled Andalusian soup of blended almonds, bread, garlic, olive oil and sherry vinegar, served with grapes: 15 minutes of work, then 2 hours in the fridge.',
    meta: 'Ajoblanco, chilled Andalusian almond and garlic soup with grapes, ready in 15 minutes plus chilling. Six servings, no cooking.',
    kw: ['ajoblanco', 'white gazpacho', 'chilled almond and garlic soup', 'andalusian almond soup with grapes', 'ajoblanco recipe'],
    why: 'Most home versions come out bitter or harsh, and the fix is to use just one garlic clove and blanched almonds. Ajoblanco, the white gazpacho of Andalusia and Málaga, is a cold soup of ground almonds, soaked bread and garlic, thinned with water and sharpened with a little sherry vinegar. It is served ice cold in summer.\n\nSoak the bread in cold water for 10 minutes, squeeze it and blend it with blanched almonds, the garlic, olive oil, vinegar and salt. **Add the water a little at a time**, tasting as you go, because the soup should be as thick as single cream and no thinner. Blend for at least 3 minutes for a smooth soup. A whole clove of raw garlic is strong, so remove the germ from the middle if it is green.\n\nChill for at least 2 hours, as the flavours settle and the garlic mellows. Serve in small bowls with a drizzle of the best oil and a few green or white grapes, and sometimes a slice of melon. Taste once chilled, since cold dulls salt and acid, and add more of each if needed.',
    ing: [
      '200 g blanched almonds',
      '100 g stale white bread, crusts removed',
      '1 small garlic clove',
      '100 ml extra virgin olive oil',
      '2 tbsp sherry vinegar',
      '600 ml cold water',
      '1 tsp salt',
      '150 g green grapes, halved'
    ],
    st: [
      'Soak the bread in cold water for 10 minutes, then squeeze it dry.',
      'Blend the almonds, bread, garlic, 80 ml of the oil, vinegar and salt, adding the water a little at a time, for 3 minutes until very smooth.',
      'Chill for 2 hours. Taste and adjust the salt and vinegar.',
      'Serve in small bowls with the grapes and the remaining oil.'
    ],
    tips: [
      'Use only one small garlic clove.',
      'Blend until completely smooth.',
      'Season again once chilled.'
    ],
    pair: ['Green grapes', 'Melon', 'Dry sherry', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [413, 9, 20, 33, 5, 6, 480]
  },

  'garbanzos-con-chorizo': {
    d: 'Chickpeas simmered with chorizo, smoked paprika, tomato and garlic until the sauce turns red and sticky, in 55 minutes.',
    meta: 'Garbanzos con chorizo, Spanish chickpeas simmered with chorizo, paprika and tomato, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['garbanzos con chorizo', 'spanish chickpeas with chorizo', 'chickpea and chorizo stew', 'chorizo and chickpea tapas', 'garbanzos con chorizo recipe'],
    why: 'A table for four on a cold weeknight, and a pan of something red and warming that tastes of paprika. Garbanzos con chorizo is a Spanish stew of chickpeas and cured sausage, found in tapas bars from Madrid to Seville, and it takes only a tin of chickpeas and a good chorizo.\n\nUse a cooking chorizo, the soft kind that releases its orange oil. Slice it and fry it gently for 5 minutes until the fat runs and the edges brown. Lift out half, and use the oil to soften an onion, garlic and a pepper. **Take the pan off the heat before the smoked paprika goes in**, so it does not burn and turn bitter, then add tomatoes and stock.\n\nTip in the drained chickpeas and simmer for 30 minutes, uncovered, until the sauce has reduced to a thick glaze. Mash a few chickpeas against the side to thicken it. Return the chorizo, add a splash of sherry vinegar and parsley, and taste for salt. Serve in a shallow dish with bread, or on top of toast as a pintxo.',
    ing: [
      '250 g cooking chorizo, sliced',
      '1 onion, chopped',
      '1 red pepper, diced',
      '3 garlic cloves, sliced',
      '2 tsp smoked paprika',
      '400 g tinned chopped tomatoes',
      '200 ml chicken stock',
      '800 g tinned chickpeas, drained',
      '1 tbsp sherry vinegar',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Fry the chorizo in a wide pan for 5 minutes over medium heat. Lift out half, leaving the oil.',
      'Soften the onion, pepper and garlic in the oil for 8 minutes.',
      'Take the pan off the heat, stir in the paprika, then add the tomatoes and stock.',
      'Add the chickpeas and bring to a simmer. Cook uncovered for 30 minutes, mashing a few chickpeas, until thick.',
      'Return the chorizo, stir in the vinegar and parsley and serve.'
    ],
    tips: [
      'Use soft cooking chorizo.',
      'Add the paprika off the heat.',
      'Mash a few chickpeas to thicken the sauce.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Green salad'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [477, 25, 47, 21, 13, 12, 1280]
  },

  'carrillada-iberica': {
    d: 'Iberian pork cheeks braised in red wine, onion and carrot for 2 hours 30 minutes until the meat can be cut with a spoon.',
    meta: 'Carrillada ibérica, pork cheeks braised in red wine until spoon tender, cooked for 2 hours 30 minutes. Four servings, ready in 2 hours 50 minutes.',
    kw: ['carrillada iberica', 'iberian pork cheeks in red wine', 'braised pork cheeks spanish', 'carrilleras de cerdo', 'pork cheek stew'],
    why: 'Cook it slower than you think you need to. That is the sensory advice for carrillada ibérica, the Spanish braise of pork cheeks, which look like small, dark, muscular nuggets when raw and turn to something soft, rich and silky in the pan.\n\nCheeks are full of collagen, which is why they need time. Trim off any hard sinew, season the meat and sear it in olive oil in batches until deeply brown. Take them out, soften onion, carrot and garlic in the pan, pour in red wine and let it bubble for 5 minutes. **Add stock to come only two thirds of the way up the meat**, and cover the pan so that the top steams while the bottom braises.\n\nCook at a bare simmer, or in a low oven at 150C, for 2 hours 30 minutes. The cheeks are ready when a spoon cuts through them. Lift them out, strain the sauce and boil it down until it coats a spoon. Serve over mashed potato or with roast potatoes and a spoonful of the sauce poured over. A good dish to make a day ahead.',
    ing: [
      '1.1 kg pork cheeks, trimmed',
      '1 tsp salt',
      '4 tbsp olive oil',
      '2 onions, chopped',
      '2 carrots, chopped',
      '4 garlic cloves',
      '300 ml red wine',
      '300 ml beef stock',
      '2 bay leaves',
      '2 sprigs thyme'
    ],
    st: [
      'Heat the oven to 150C. Season the cheeks and sear in the oil in batches, 8 minutes each. Lift out.',
      'Soften the onions, carrots and garlic in the casserole for 8 minutes. Add the wine and boil for 5 minutes.',
      'Add the stock, bay and thyme and return the cheeks. Cover.',
      'Braise for 2 hours 30 minutes until a spoon cuts through them.',
      'Lift out the cheeks and boil the strained sauce for 10 minutes until syrupy.'
    ],
    tips: [
      'Trim the hard sinew before cooking.',
      'Sear until deeply browned.',
      'Reduce the sauce at the end.'
    ],
    pair: ['Mashed potato', 'Roast potatoes', 'Red wine', 'Greens'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [675, 51, 12, 47, 2, 4, 1060]
  },

  'cochinillo-asado': {
    d: 'A suckling pig roasted for 3 hours in a clay dish with water and bay until the skin shatters, the Castilian celebration roast.',
    meta: 'Cochinillo asado, Castilian roast suckling pig with crackling skin, cooked for 3 hours. Six servings, ready in 3 hours 35 minutes.',
    kw: ['cochinillo asado', 'spanish roast suckling pig', 'castilian roast pig with crackling', 'roast suckling pig recipe', 'cochinillo segoviano'],
    why: 'Listen for the skin. When it is ready it crackles and rings under a spoon, which is how cooks in Segovia test it, and some famously cut the pig with the side of a plate. Cochinillo asado is a suckling pig roasted slowly with nothing but water, salt, lard and bay, and the point is the contrast between the glassy skin and the soft, pale meat.\n\nA whole pig is hard to find, so use half a young pig, or a piece of the shoulder and ribs, from a butcher. Rub it all over with salt and lard, lay it skin side down in a dish with a little water and a few bay leaves, and cover with foil. **Roast skin down at first**, at 160C, for about 1 hour 30 minutes, so the meat cooks gently in the steam.\n\nTurn the pig skin side up, remove the foil, and prick the skin all over. Raise the heat to 220C and roast for 30 minutes more, then add a splash of cold water to the pan to blister the skin. Rest for 15 minutes before carving. Serve with roast potatoes, a green salad and a glass of cold red wine.',
    ing: [
      '2.4 kg suckling pig',
      '2 tsp salt',
      '3 tbsp lard',
      '3 bay leaves',
      '300 ml water',
      '800 g potatoes, in wedges',
      '3 tbsp olive oil',
      '1 lettuce, 300 g',
      '2 tbsp sherry vinegar'
    ],
    st: [
      'Heat the oven to 160C. Rub the pig with the salt and lard and lay it skin side down in a deep dish with the bay and water. Cover tightly with foil.',
      'Roast for 1 hour 30 minutes.',
      'Turn skin side up, remove the foil, prick the skin all over and add the potatoes tossed in the oil around it.',
      'Turn the oven to 220C and roast for 30 minutes, adding a splash of cold water to the dish for the last 10 minutes.',
      'Rest for 15 minutes, carve, and serve with the potatoes and the lettuce dressed with the vinegar.'
    ],
    tips: [
      'Roast skin down first so the meat steams.',
      'Prick the skin before the high heat.',
      'Rest before carving.'
    ],
    pair: ['Roast potatoes', 'Green salad', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Reheat the skin in a hot oven.',
    nut: [835, 68, 26, 51, 5, 2, 1040]
  },

  'cordero-asado-castellano': {
    d: 'Lamb shoulder roasted for 2 hours in a clay dish with garlic, water and a little lard until the meat falls from the bone.',
    meta: 'Cordero asado castellano, Castilian roast lamb with garlic, cooked for 2 hours. Six servings, ready in 2 hours 35 minutes.',
    kw: ['cordero asado castellano', 'castilian roast lamb', 'spanish roast lamb shoulder', 'cordero lechal asado', 'lamb roasted with garlic and water'],
    why: 'A Sunday dish for a table of six, and one that needs little more than salt, garlic and patience. Cordero asado castellano is the lamb roast of Castile, cooked in a clay dish in a wood oven, with only a splash of water in the bottom of the dish and a spoonful of lard on top.\n\nUse a shoulder of lamb on the bone, which has more fat and holds its moisture. Rub it all over with salt, crushed garlic and a spoonful of lard, and put it in a roasting dish with a glass of water. **Do not add oil or stock**, because the juice of the lamb itself makes the gravy. Roast at 180C for 2 hours, turning the joint once and basting with the juices every 30 minutes.\n\nThe lamb is ready when the meat pulls from the bone and the top is brown and crisp. Rest it for 15 minutes under foil. Spoon off excess fat from the juices and serve them as a thin gravy. Eat with roast potatoes, a crisp green salad and plenty of bread.',
    ing: [
      '2 kg lamb shoulder, on the bone',
      '2 tsp salt',
      '8 garlic cloves, crushed',
      '2 tbsp lard',
      '200 ml water',
      '800 g potatoes, in wedges',
      '2 tbsp olive oil',
      '1 lettuce, 300 g',
      '2 tbsp white wine vinegar'
    ],
    st: [
      'Heat the oven to 180C. Rub the lamb with the salt, garlic and lard and set it in a roasting dish with the water.',
      'Roast for 2 hours, turning once and basting every 30 minutes. Add the potatoes tossed in the oil for the last 45 minutes.',
      'Rest the lamb for 15 minutes under foil.',
      'Skim the fat from the juices. Serve the lamb with the juices, potatoes and the lettuce dressed with the vinegar.'
    ],
    tips: [
      'Use a shoulder on the bone.',
      'Baste every 30 minutes.',
      'Rest before carving.'
    ],
    pair: ['Roast potatoes', 'Green salad', 'Red wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [1045, 61, 27, 77, 5, 2, 1040]
  },

  'chuletillas-de-cordero': {
    d: 'Small lamb cutlets seared in a very hot pan with sea salt and served with garlic oil and fried padrón peppers, in 25 minutes.',
    meta: 'Chuletillas de cordero, Spanish lamb cutlets with sea salt, garlic oil and padrón peppers, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['chuletillas de cordero', 'spanish lamb cutlets', 'lamb chops with garlic oil', 'chuletillas de lechal', 'lamb cutlets with padron peppers'],
    why: 'Most home lamb cutlets come out grey and chewy, and the fix is a very hot pan and very dry meat. Chuletillas de cordero are small, thin cutlets seared hard and fast and served with little more than sea salt, a clove of garlic and a squeeze of lemon. They are a staple of grill restaurants in Castile.\n\nTake the cutlets out of the fridge 20 minutes before cooking and pat them dry with kitchen paper. A wet surface steams instead of browning. **Heat the pan until it is smoking**, add a little oil and cook the cutlets in a single layer, in two batches if needed. Two minutes on each side is enough for pink meat.\n\nWhile the lamb rests, fry the padrón peppers in the same pan until blistered, and warm the garlic in olive oil with a pinch of paprika. Sprinkle the cutlets with flaky salt and spoon the garlic oil over them. Squeeze lemon on top and serve at once, with the peppers and a piece of bread. If your pan is not big enough, do not crowd it.',
    ing: [
      '12 lamb cutlets, about 900 g',
      '2 tbsp olive oil',
      '1 tsp flaky salt',
      '200 g padrón peppers',
      '4 tbsp olive oil, for the garlic oil',
      '4 garlic cloves, sliced',
      '1/2 tsp smoked paprika',
      '1 lemon, in wedges'
    ],
    st: [
      'Take the cutlets out of the fridge 20 minutes ahead and pat dry.',
      'Heat a heavy pan until smoking, add the 2 tablespoons of oil and sear the cutlets for 2 minutes on each side in 2 batches. Lift out and rest.',
      'Fry the padrón peppers in the same pan for 4 minutes until blistered. Sprinkle with a little salt.',
      'Warm the 4 tablespoons of oil with the garlic and paprika for 2 minutes.',
      'Season the cutlets with the flaky salt, spoon over the garlic oil and serve with the peppers and lemon.'
    ],
    tips: [
      'Pat the cutlets dry.',
      'Use a very hot pan and cook in batches.',
      'Rest the meat for 3 minutes.'
    ],
    pair: ['Padrón peppers', 'Crusty bread', 'Red wine'],
    store: 'Best fresh.',
    nut: [869, 39, 5, 77, 2, 3, 740]
  },

  'solomillo-al-whisky': {
    d: 'Pork tenderloin medallions seared with garlic and finished in a quick whisky and lemon sauce, ready in 25 minutes.',
    meta: 'Solomillo al whisky, pork tenderloin medallions with garlic and a quick whisky sauce, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['solomillo al whisky', 'pork tenderloin in whisky sauce', 'spanish pork with garlic and whisky', 'solomillo al whisky recipe', 'pork medallions with garlic sauce'],
    why: 'The name of this dish is a tapas bar standard, and the story it tells is simple: a good cut of pork, a handful of garlic cloves and a splash of whisky. Solomillo al whisky is a quick Spanish tapa, served in a small dish with the oily sauce for dipping bread.\n\nCut the tenderloin into 2 cm thick medallions and season well. Fry the unpeeled garlic cloves in olive oil for a minute to flavour it, then sear the pork over a high heat for 2 minutes on each side. **Take the pan off the heat before adding the whisky**, because the spirit can flare. Return to the heat, let it bubble for 1 minute and tilt the pan to ignite it if you like, or simply boil off the alcohol.\n\nAdd a squeeze of lemon, a spoonful of stock and the parsley, and let the sauce reduce for 2 minutes. The pork should be just cooked through with a trace of pink. Serve at once with the garlic cloves, which are soft enough to squash onto bread, and plenty of the sauce for dipping.',
    ing: [
      '600 g pork tenderloin, in 2 cm medallions',
      '1 tsp salt',
      '4 tbsp olive oil',
      '8 garlic cloves, unpeeled',
      '60 ml whisky',
      '1 lemon, juice',
      '100 ml chicken stock',
      '3 tbsp chopped parsley',
      '4 slices crusty bread'
    ],
    st: [
      'Season the pork with the salt. Warm the oil in a wide pan with the garlic for 1 minute.',
      'Sear the medallions over high heat for 2 minutes on each side. Lift out.',
      'Take the pan off the heat and add the whisky. Return to the heat and boil for 1 minute.',
      'Add the lemon juice and stock and reduce for 2 minutes. Return the pork and parsley for 1 minute.',
      'Serve with the garlic and bread.'
    ],
    tips: [
      'Take the pan off the heat before adding spirits.',
      'Do not overcook the pork.',
      'Serve with bread for the sauce.'
    ],
    pair: ['Crusty bread', 'Padrón peppers', 'Red wine'],
    store: 'Best fresh.',
    nut: [383, 35, 18, 19, 1, 2, 900]
  },

  'pinchos-morunos': {
    d: 'Pork skewers marinated in cumin, paprika and thyme and grilled for 15 minutes until charred at the edges.',
    meta: 'Pinchos morunos, Spanish pork skewers marinated in cumin, paprika and thyme, cooked for 15 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['pinchos morunos', 'spanish pork skewers', 'moorish pork skewers', 'pinchos morunos recipe', 'spiced pork kebabs'],
    why: 'Short and sharp: marinate them, skewer them and grill them hot. That is all there is to pinchos morunos, the spiced pork skewers sold in tapas bars across southern Spain, whose name refers to the Moorish seasonings of cumin, coriander and paprika.\n\nCut pork shoulder or loin into 2.5 cm cubes. A bit of fat on each piece keeps the meat juicy, so choose shoulder. Mix a marinade of olive oil, garlic, smoked paprika, cumin, thyme, turmeric and sherry vinegar, and coat the pork. **Leave it to marinate for at least 30 minutes**, or overnight in the fridge. The vinegar softens the meat as it sits.\n\nThread the cubes onto skewers, leaving small gaps so that heat reaches every side. Grill over a hot barbecue or griddle pan for 12 to 15 minutes, turning, until charred at the edges and cooked through. Serve with lemon and a bowl of bread. They are small enough to eat in two bites and are best hot from the grill.',
    ing: [
      '900 g pork shoulder, in 2.5 cm cubes',
      '4 tbsp olive oil',
      '4 garlic cloves, crushed',
      '2 tsp smoked paprika',
      '2 tsp ground cumin',
      '1 tsp dried thyme',
      '1/2 tsp ground turmeric',
      '2 tbsp sherry vinegar',
      '1 tsp salt',
      '1 lemon, in wedges'
    ],
    st: [
      'Mix the oil, garlic, paprika, cumin, thyme, turmeric, vinegar and salt. Toss the pork in it and marinate for 30 minutes.',
      'Soak 12 wooden skewers in water. Thread the pork onto them, leaving small gaps.',
      'Heat a griddle or grill to high. Cook the skewers for 12 to 15 minutes, turning, until charred and cooked through.',
      'Rest for 3 minutes and serve with the lemon.'
    ],
    tips: [
      'Choose shoulder for juicy skewers.',
      'Leave small gaps between the cubes.',
      'Turn often for an even char.'
    ],
    pair: ['Crusty bread', 'Lemon wedges', 'Cold beer', 'Allioli'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot pan.',
    nut: [403, 28, 3, 31, 1, 0, 490]
  },

  'empanadillas': {
    untimed: ['cooling completely'],
    d: 'Small pastry turnovers filled with tuna, tomato and onion, sealed and baked for 20 minutes until golden.',
    meta: 'Empanadillas, small Spanish pastry turnovers filled with tuna and tomato, baked for 20 minutes. Twenty servings, ready in 1 hour.',
    kw: ['empanadillas', 'spanish tuna empanadillas', 'small tuna turnovers', 'empanadillas de atun', 'baked empanadillas recipe'],
    why: 'Fill them thinly and seal them well. That is the quick tip for empanadillas, the small half moon pastries of Spain, which are sold in bakeries and served at every party, and they burst open in the oven if the edges are not tight or the filling is wet.\n\nThe filling here is tinned tuna, onion and tomato sauce, cooked down until it is thick and dry. Use a little less sauce than you think and drain the tuna very well. **Cool the filling completely** before it goes on the pastry, as a warm filling melts the dough and makes it hard to seal. Use pre-made discs from the chilled shelf, or roll your own dough from flour, white wine, oil and salt.\n\nPut a teaspoon of filling on each disc, brush the edge with water, fold over and press with a fork. Brush the tops with beaten egg and bake at 200C for 20 minutes, until puffed and golden. Eat them hot or warm, and freeze extras unbaked to cook from frozen. A pinch of paprika in the filling is a good touch.',
    ing: [
      '400 g empanadilla discs',
      '3 tbsp olive oil',
      '1 onion, finely chopped',
      '1 garlic clove',
      '200 g tomato sauce',
      '300 g tinned tuna in oil, drained',
      '1/2 tsp smoked paprika',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes. Add the garlic, tomato sauce and paprika and cook for 8 minutes until thick.',
      'Stir in the tuna and cool completely.',
      'Heat the oven to 200C. Put a teaspoon of filling on each disc, brush the edges with water, fold over and press with a fork.',
      'Set on lined trays, brush with the egg and bake for 20 minutes until puffed and golden.'
    ],
    tips: [
      'Drain the tuna well.',
      'Cool the filling before filling.',
      'Press the edges with a fork.'
    ],
    pair: ['Cold beer', 'Dry sherry', 'Olives'],
    store: 'Keeps for 2 days in the fridge. Freeze unbaked for 2 months.',
    nut: [118, 6, 10, 6, 1, 1, 160]
  },

  'montaditos': {
    d: 'Small toasted bread rolls topped with cured ham, tortilla, sausage or cheese and a sauce, a tapas bar staple ready in 30 minutes.',
    meta: 'Montaditos, small toasted Spanish bread rolls with ham, cheese and tomato, cooked for 10 minutes. Eight servings, ready in 30 minutes.',
    kw: ['montaditos', 'spanish mini sandwiches', 'toasted montaditos with ham and cheese', 'tapas bread toppings', 'montaditos recipe'],
    why: 'This is what to put out in the first warm week, when guests drift in and out and you want food that can be eaten in one hand. Montaditos are small slices of bread or small rolls, toasted and topped with whatever is in the larder, and they appear on every tapas counter in Spain.\n\nUse a crusty baguette or small rolls cut in half. Toast them cut side up in the oven for 5 minutes until they are crisp. **Rub the toasted side with a cut tomato**, which wets the bread and flavours it at the same time. Add a drizzle of olive oil and a pinch of salt. The toppings are then simple.\n\nThree classics are serrano ham with manchego, a slice of potato tortilla with allioli, and grilled chorizo with roasted pepper. Make eight of each, arrange them on a board and eat them warm or at room temperature. Toast the bread just before serving, since a damp base turns limp within the hour. Pickled guindilla chillies can sit beside them.',
    ing: [
      '400 g baguettes, cut in 24 slices',
      '4 tbsp olive oil',
      '2 ripe tomatoes, halved',
      '100 g serrano ham',
      '80 g manchego, shaved',
      '100 g chorizo, sliced',
      '2 roasted red peppers, in strips',
      '100 g potato tortilla, in squares',
      '60 g allioli',
      '1/2 tsp flaky salt'
    ],
    st: [
      'Heat the oven to 200C. Lay the bread on trays, brush with half the oil and toast for 5 minutes until crisp.',
      'Fry the chorizo slices in a dry pan for 3 minutes.',
      'Rub each toast with the cut tomato and drizzle with the remaining oil and salt.',
      'Top 8 with ham and manchego, 8 with chorizo and pepper, and 8 with tortilla and allioli.'
    ],
    tips: [
      'Toast the bread just before serving.',
      'Rub with tomato for flavour.',
      'Serve warm or at room temperature.'
    ],
    pair: ['Dry sherry', 'Cold beer', 'Olives', 'Guindilla chillies'],
    store: 'Best fresh. Prepare the toppings in advance.',
    nut: [393, 13, 38, 21, 3, 4, 900]
  },

  'gildas': {
    d: 'Skewers of a pickled guindilla chilli, an anchovy fillet and a green olive, the classic Basque bar snack, ready in 10 minutes.',
    meta: 'Gildas, Basque pintxo skewers of anchovy, pickled chilli and green olive, ready in 10 minutes. Eight servings, no cooking.',
    kw: ['gildas', 'basque gilda pintxo', 'anchovy olive and pepper skewers', 'gilda skewers recipe', 'pickled chilli and anchovy snack'],
    why: 'Put the anchovy in the middle. That is the quick tip for a gilda, the original Basque pintxo, because it is the strongest flavour and sits best between the olive and the chilli. The gilda is a skewer of three things, no more, and it was named after Rita Hayworth\'s film, since it is salty, green and a little spicy.\n\nUse a good, plump olive stuffed with nothing, a meaty anchovy fillet in olive oil and a pickled guindilla chilli, the mild green pepper of the Basque country. **Drain each ingredient well** and pat them dry on kitchen paper, because oil and brine make the skewer slippery and the bar counter messy. Thread the olive first, then a folded anchovy, then the pepper, and finish with a second olive if you like.\n\nArrange the skewers on a plate and drizzle with olive oil. They need no cooking, and they keep for several hours at room temperature. Serve cold with a glass of txakoli or dry sherry. A gilda is one bite, so make more than you think you need.',
    ing: [
      '24 pitted green olives, 100 g',
      '40 g anchovy fillets in oil',
      '16 pickled guindilla chillies, 80 g',
      '2 tbsp extra virgin olive oil',
    ],
    st: [
      'Drain the olives, anchovies and chillies and pat dry on kitchen paper.',
      'Thread an olive, a folded anchovy and a chilli onto each skewer, and repeat.',
      'Arrange on a plate and drizzle with the oil.',
      'Serve cold.'
    ],
    tips: [
      'Drain and dry each ingredient.',
      'Put the anchovy between the olive and the chilli.',
      'Make plenty, as they vanish quickly.'
    ],
    pair: ['Txakoli', 'Dry sherry', 'Cold beer'],
    store: 'Keeps for 4 hours at room temperature.',
    nut: [70, 2, 2, 6, 1, 1, 370]
  },

  'ensaladilla-rusa': {
    untimed: ['cooling completely'],
    d: 'A cold Spanish salad of potatoes, carrots, peas, tuna and olives bound with mayonnaise, chilled for 1 hour.',
    meta: 'Ensaladilla rusa, cold Spanish potato salad with tuna, peas and mayonnaise, cooked for 30 minutes. Six servings, ready in 55 minutes plus chilling.',
    kw: ['ensaladilla rusa', 'spanish russian salad', 'potato and tuna salad with mayonnaise', 'ensaladilla rusa recipe', 'spanish potato salad tapas'],
    why: 'The sensory detail to look for is a salad that holds a shape and shines. Ensaladilla rusa, the Spanish version of Russian salad, is a mound of diced potato, carrot and peas with tuna and a thick, glossy mayonnaise, and it is on every tapas menu in Spain.\n\nBoil the potatoes and carrots whole in salted water so they do not absorb too much, then peel and dice them small while still warm. Add the peas for the last 3 minutes. **Toss the warm vegetables with a little vinegar and salt** before the mayonnaise goes in, because they absorb seasoning better while warm. Let them cool completely.\n\nMix with flaked tuna in oil, chopped hard boiled egg and enough mayonnaise to bind. Do not overdo it, as the mound should hold its shape when spooned on a plate. Pile onto a plate, smooth the top, and decorate with strips of roasted pepper, olives and a few more peas. Chill for at least 1 hour. Serve with bread sticks or crisps for scooping.',
    ing: [
      '700 g waxy potatoes',
      '2 carrots, about 200 g',
      '150 g frozen peas',
      '4 eggs',
      '1 tbsp white wine vinegar',
      '160 g tuna in olive oil, drained',
      '200 g mayonnaise',
      '1 tsp salt',
      '60 g green olives',
      '2 roasted red peppers, in strips'
    ],
    st: [
      'Boil the potatoes and carrots whole in salted water for 20 minutes. Add the peas for the last 3 minutes. Boil the eggs for 10 minutes separately.',
      'Peel and dice the vegetables small while warm. Toss with the vinegar and salt. Cool completely.',
      'Chop the eggs and fold into the vegetables with the tuna and 160 g of the mayonnaise.',
      'Pile onto a plate, smooth with the remaining mayonnaise and decorate with the olives and peppers.',
      'Chill for 1 hour before serving.'
    ],
    tips: [
      'Dice the vegetables while still warm.',
      'Cool completely before the mayonnaise goes in.',
      'Bind with enough mayonnaise to hold a mound.'
    ],
    pair: ['Bread sticks', 'Cold beer', 'Dry sherry'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [476, 16, 31, 32, 6, 7, 910]
  },

  'canelones-de-carne': {
    cookMax: 65,
    d: 'Catalan cannelloni of fresh pasta wrapped around a rich meat filling, covered in béchamel and baked for 25 minutes.',
    meta: 'Canelones de carne, Catalan cannelloni filled with minced meat under béchamel, baked for 25 minutes. Six servings, ready in 1 hour 40 minutes to 1 hour 45 minutes.',
    kw: ['canelones de carne', 'catalan meat cannelloni', 'spanish cannelloni with bechamel', 'canelones de sant esteve', 'baked canelones recipe'],
    why: 'Seasonal for a day in winter, and traditionally made on Saint Stephen\'s Day in Catalonia, from the leftovers of the Christmas roasts. Canelones de carne are pasta tubes filled with a rich meat mix and baked under béchamel, and the Catalan version is much more tender than the Italian kind.\n\nThe filling is minced pork and beef, fried until deeply brown with onion, tomato and a splash of wine, then cooked for 20 minutes until dry. Cool it, then blitz it briefly with a little béchamel to bind it. **The filling should be thick enough to hold a shape**, as a wet one leaks from the tubes. Cook the cannelloni sheets in boiling water for 3 minutes, cut into rectangles and roll around the filling.\n\nLay the rolls seam side down in a dish, cover them with béchamel and scatter with grated cheese. Bake at 200C for 25 minutes, until bubbling and golden. Rest for 10 minutes. Allow extra time for rolling, since it is easiest with a helper. The dish can be assembled the day before and baked when needed.',
    ing: [
      '250 g cannelloni sheets',
      '3 tbsp olive oil',
      '1 onion, finely chopped',
      '300 g minced pork',
      '300 g minced beef',
      '150 g tinned chopped tomatoes',
      '100 ml dry white wine',
      '1 tsp salt',
      '60 g butter',
      '60 g plain flour',
      '900 ml whole milk',
      '1/4 tsp ground nutmeg',
      '80 g grated Gruyère'
    ],
    st: [
      'Soften the onion in the oil for 5 minutes. Add the pork and beef and brown for 10 minutes. Add the tomatoes, wine and half the salt and cook for 20 minutes until dry. Cool.',
      'While the filling cooks, make the béchamel: melt the butter, stir in the flour for 1 minute and whisk in the milk. Simmer for 8 minutes with the nutmeg and remaining salt. Stir 150 ml into the filling.',
      'Heat the oven to 200C. Boil the sheets in salted water for 3 minutes, drain and cut in half.',
      'Roll a spoonful of filling in each sheet and lay seam side down in a dish.',
      'Cover with the remaining béchamel and the cheese. Bake for 25 minutes until golden. Rest for 10 minutes.'
    ],
    tips: [
      'Cook the filling until it is dry.',
      'Roll them seam side down.',
      'Make ahead and bake when needed.'
    ],
    pair: ['Green salad', 'Red wine', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [683, 34, 49, 39, 2, 10, 570]
  },

  'natillas': {
    d: 'A soft Spanish egg custard flavoured with lemon peel and cinnamon, stirred on the hob for 25 minutes and chilled.',
    meta: 'Natillas, soft Spanish egg custard with lemon and cinnamon, cooked for 25 minutes. Six servings, ready in 35 minutes plus chilling.',
    kw: ['natillas', 'spanish custard', 'natillas con canela', 'spanish egg custard with cinnamon', 'natillas recipe'],
    why: 'A dessert for a table of six on any day of the week, and a plain one: a bowl of cool, soft custard with a biscuit pressed into the top. Natillas is the Spanish custard, made with milk, egg yolks and sugar, flavoured with lemon peel and cinnamon, and eaten cold.\n\nInfuse the milk first with a strip of lemon peel and a cinnamon stick for 10 minutes over a low heat. Whisk the egg yolks with the sugar and a spoonful of cornflour until pale. **Add the hot milk slowly to the yolks, whisking**, so the eggs warm gradually instead of scrambling. Return the mix to the pan and stir over a low heat for about 10 minutes, until it coats the back of a spoon.\n\nDo not let it boil, or it will curdle. Strain into small bowls or glasses and cool, then chill for at least 2 hours. Dust with cinnamon and push a Maria biscuit into each pot, as is traditional. The custard thickens as it cools, so it should be a little looser than you want it when it comes off the heat.',
    ing: [
      '750 ml whole milk',
      '1 strip lemon peel',
      '3 g cinnamon stick',
      '6 egg yolks',
      '120 g caster sugar',
      '1 tbsp cornflour',
      '1/2 tsp ground cinnamon',
      '40 g Maria biscuits'
    ],
    st: [
      'Warm the milk with the lemon peel and cinnamon stick for 10 minutes over low heat. Remove the peel and stick.',
      'Whisk the yolks, sugar and cornflour until pale.',
      'Pour on the hot milk slowly, whisking. Return to the pan and stir over low heat for 10 minutes until it coats a spoon.',
      'Strain into 6 pots and cool. Chill for 2 hours.',
      'Dust with the cinnamon and set a biscuit in each.'
    ],
    tips: [
      'Add the hot milk slowly to the yolks.',
      'Never let the custard boil.',
      'Chill for at least 2 hours.'
    ],
    pair: ['Maria biscuits', 'Fresh fruit', 'Coffee'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [270, 11, 34, 10, 1, 28, 140]
  },

  'mojo-picon': {
    d: 'A spicy red Canary sauce of dried peppers, garlic, cumin, paprika and vinegar, blended in 10 minutes with no cooking.',
    meta: 'Mojo picón, spicy red Canary Islands sauce with garlic, cumin and paprika: soak the peppers, blend in 10 minutes, rest an hour. No cooking.',
    kw: ['mojo picon', 'canary islands red mojo sauce', 'spicy red pepper sauce for potatoes', 'mojo rojo recipe', 'garlic and cumin pepper sauce'],
    why: 'Pepper, garlic, cumin, paprika, oil, vinegar: six things, a blender, and a sauce that makes boiled potatoes into a meal. Mojo picón is the red sauce of the Canary Islands, spicy and garlicky, and it is served with wrinkled potatoes, grilled meats and fish.\n\nThe heat comes from dried chillies and the colour from sweet paprika. Soak 3 dried hot peppers in water for 30 minutes to soften them, then remove the stalks and seeds. If you use a mild dried red pepper such as ñora, the sauce will be gentler. **Blend with a pinch of coarse salt**, which helps the garlic break down into a smooth paste. Add the cumin, paprika, vinegar and a splash of the soaking water.\n\nWith the blender running, pour in the olive oil in a thin stream until the sauce looks glossy and thick, like a loose paste. Taste and adjust: more vinegar for sharpness, more salt for depth. Pour into a jar and leave for an hour for the flavours to marry. It keeps for a week in the fridge, covered with a thin layer of oil.',
    ing: [
      '3 dried hot peppers, 10 g',
      '4 garlic cloves',
      '1 tsp ground cumin',
      '2 tsp sweet paprika',
      '1 tsp coarse salt',
      '3 tbsp red wine vinegar',
      '120 ml extra virgin olive oil',
      '3 tbsp water from soaking the peppers'
    ],
    st: [
      'Soak the dried peppers in water for 30 minutes. Remove the stalks and seeds.',
      'Blend the peppers, garlic, cumin, paprika, salt, vinegar and 3 tablespoons of the soaking water.',
      'With the blender running, pour in the oil in a thin stream until thick and glossy.',
      'Taste, adjust the salt and vinegar and leave for 1 hour before serving.'
    ],
    tips: [
      'Remove the seeds for less heat.',
      'Pour the oil in slowly.',
      'Let it stand for an hour to mellow.'
    ],
    pair: ['Wrinkled potatoes', 'Grilled meat', 'Grilled fish', 'Bread'],
    store: 'Keeps for 1 week in the fridge under a layer of oil.',
    rest: [90, 'Soaking and standing'],
    nut: [150, 1, 5, 14, 1, 3, 300]
  },

  'papas-arrugadas': {
    d: 'Small potatoes boiled in heavily salted water until the skins wrinkle and a white salt crust forms, served with mojo sauce.',
    meta: 'Papas arrugadas, Canary Islands wrinkled potatoes boiled in salted water, cooked for 30 minutes. Four servings, ready in 35 minutes.',
    kw: ['papas arrugadas', 'canary islands wrinkled potatoes', 'wrinkly salt potatoes', 'papas arrugadas con mojo', 'salty boiled new potatoes'],
    why: 'Most home potatoes boiled in salt come out soggy, and the fix is to dry them in the pot. Papas arrugadas, the wrinkled potatoes of the Canary Islands, are boiled in water so salty that it is almost as salty as the sea, and then left to dry over a low heat until the skins pucker and a fine white crust forms.\n\nUse small, waxy potatoes with their skins on, all of equal size. Put them in a pan, add water until it just covers them, and stir in a very large amount of coarse salt, about 1 tablespoon per 100 ml of water. **Do not use less salt**, because the salt crust is the point. Boil them gently for about 25 minutes until tender when pierced.\n\nDrain all the water, return the pot to the lowest heat and shake it for 5 minutes. The remaining water evaporates and leaves a dusty, white salt coat on the wrinkled skins. Serve at once, in the skin, with a bowl of red or green mojo sauce. Eat them whole, skin and all, as a snack.',
    ing: [
      '1 kg small waxy potatoes, unpeeled',
      '120 g coarse sea salt',
      '600 ml water',
      '120 g mojo picón, to serve'
    ],
    st: [
      'Put the potatoes in a pan and add the water and the salt, so the water just covers them.',
      'Bring to the boil, then simmer gently for 25 minutes until tender.',
      'Drain off all the water and return the pan to the lowest heat. Shake for 5 minutes until the skins wrinkle and a white crust forms.',
      'Serve at once with the mojo.'
    ],
    tips: [
      'Use plenty of coarse salt.',
      'Choose small potatoes of equal size.',
      'Shake the pot over low heat to dry them.'
    ],
    pair: ['Mojo picón', 'Grilled fish', 'Grilled meat', 'Cold beer'],
    store: 'Best fresh.',
    nut: [285, 6, 45, 9, 6, 2, 12050]
  },

  'huevos-a-la-flamenca': {
    d: 'Eggs baked in a clay dish over a sauce of tomato, peas, chorizo and ham, ready in 35 minutes.',
    meta: 'Huevos a la flamenca, eggs baked over tomato, peas, chorizo and ham in a clay dish, cooked for 25 minutes. Two servings, ready in 35 minutes.',
    kw: ['huevos a la flamenca', 'flamenco eggs', 'spanish baked eggs with chorizo and peas', 'huevos flamencos recipe', 'baked eggs in tomato sauce spanish'],
    why: 'A good, short breakfast or supper for two: eggs, a pan and a red sauce. Huevos a la flamenca is the Andalusian baked egg dish, cooked in individual clay dishes, with a tomato sauce thick with peas, chorizo, ham and a sliver of pepper, and the eggs are cracked on top.\n\nStart with the sauce. Soften onion and garlic in olive oil, add the chorizo and ham, fry for 3 minutes, then stir in the paprika and tomato sauce. **Cook the sauce until it is thick enough to hold the eggs**, about 10 minutes, since a thin sauce lets the whites run into each other. Add the peas and spoon the mixture into two dishes.\n\nMake a hollow in each and crack two eggs into it. Sprinkle with salt, a little paprika and a few slices of roasted pepper. Bake at 200C for 8 to 10 minutes, until the whites are set and the yolks are still runny. Serve at once, with a piece of crusty bread to soak up the sauce and the yolk.',
    ing: [
      '2 tbsp olive oil',
      '1 small onion, chopped',
      '1 garlic clove',
      '60 g chorizo, diced',
      '60 g serrano ham, diced',
      '1 tsp smoked paprika',
      '300 g tomato sauce',
      '80 g frozen peas',
      '4 eggs',
      '2 roasted red peppers, in strips',
      '1/2 tsp salt',
      '2 slices crusty bread'
    ],
    st: [
      'Heat the oven to 200C. Soften the onion and garlic in the oil for 5 minutes. Add the chorizo and ham and fry for 3 minutes.',
      'Stir in the paprika, tomato sauce and peas and simmer for 10 minutes until thick.',
      'Spoon into 2 clay or ovenproof dishes. Make 2 hollows in each and crack in the eggs.',
      'Season with the salt, add the pepper strips and bake for 8 to 10 minutes until the whites are set.',
      'Serve at once with the bread.'
    ],
    tips: [
      'Cook the sauce until thick.',
      'Pull the dish out when the whites are just set.',
      'Serve at once so the yolks stay runny.'
    ],
    pair: ['Crusty bread', 'Orange juice', 'Coffee'],
    store: 'Best fresh.',
    nut: [606, 31, 44, 34, 9, 19, 1620]
  },

  'rosquillas': {
    d: 'Spanish ring doughnuts of aniseed and lemon dough, fried for 20 minutes in olive oil and rolled in sugar, a Madrid festival sweet.',
    meta: 'Rosquillas, Spanish aniseed ring doughnuts fried in olive oil and rolled in sugar, cooked for 20 minutes. Twenty servings, ready in 1 hour.',
    kw: ['rosquillas', 'spanish ring doughnuts', 'aniseed doughnuts', 'rosquillas fritas', 'rosquillas de san isidro'],
    why: 'The first sign they are ready is the smell: hot olive oil, lemon peel and anise drifting from the pan. Rosquillas are Spanish ring doughnuts, made in the days before Easter and at the spring festivals, and their dough is lighter than a yeast one because it is raised with baking powder and eggs.\n\nFlavour the olive oil by warming it with a strip of lemon peel and removing the peel when it is fragrant. Mix flour, sugar, baking powder, eggs, anise liqueur and lemon zest into a soft dough, adding more flour until it no longer sticks. **Rest the dough for 15 minutes**, then roll small pieces into ropes and join them into rings with wet fingers. They should be about 6 cm across, as they puff up.\n\nFry in oil at 170C, a few at a time, for about 3 minutes on each side until pale gold. They should not be dark. Drain on kitchen paper and roll in caster sugar while hot. They keep for several days in a tin and get more flavourful. Serve with coffee.',
    ing: [
      '400 g plain flour',
      '2 tsp baking powder',
      '100 g caster sugar',
      '3 eggs',
      '50 ml anise liqueur',
      '50 ml olive oil',
      '1 lemon, zest',
      '1 pinch salt',
      '100 ml olive oil absorbed, from 700 ml for frying',
      '80 g caster sugar, for rolling'
    ],
    st: [
      'Mix the flour, baking powder, 100 g sugar, eggs, anise liqueur, 50 ml oil, zest and salt to a soft dough. Rest for 15 minutes.',
      'Roll small pieces into 12 cm ropes and join the ends into rings with wet fingers.',
      'Heat the frying oil to 170C. Fry 4 at a time for 3 minutes on each side until pale gold.',
      'Drain on kitchen paper and roll in the 80 g sugar while hot.'
    ],
    tips: [
      'Keep the oil at 170C.',
      'Fry a few at a time.',
      'Roll in sugar while hot.'
    ],
    pair: ['Coffee', 'Anise liqueur', 'Hot chocolate'],
    store: 'Keeps for 4 days in a tin.',
    nut: [188, 3, 26, 8, 1, 10, 70]
  },

  'bunuelos-de-viento': {
    d: 'Light fried choux puffs rolled in sugar and filled with cream or custard, a Spanish All Saints treat.',
    meta: 'Buñuelos de viento, light fried choux puffs rolled in sugar and filled with custard, cooked for 15 minutes. Twelve servings, ready in 35 minutes.',
    kw: ['bunuelos de viento', 'spanish choux fritters', 'wind fritters with cream', 'filled spanish fritters', 'bunuelos recipe'],
    why: 'Flour, butter, water, eggs: four pantry things, a pan of oil and a bag of sugar. Buñuelos de viento means fritters of wind, and the name describes the puffs: they are hollow choux balls, fried, that swell in the oil to three times their size.\n\nMake a choux paste by boiling water, butter, sugar and a pinch of salt, tipping in the flour all at once and beating over the heat until the paste leaves the sides of the pan. **Cool the paste for 5 minutes**, then beat in the eggs one at a time until it is glossy and drops slowly from a spoon. If the eggs go in too soon, the heat cooks them into lumps.\n\nHeat the oil to 175C and drop in teaspoons of paste, a few at a time. They sink, then bob up and swell, and need about 5 minutes to turn deep gold. Turn them often. Drain, roll in sugar and pipe in a thick custard or whipped cream through a small hole. They are best eaten warm and filled just before serving.',
    ing: [
      '250 ml water',
      '60 g butter',
      '1 tbsp caster sugar',
      '1 pinch salt',
      '150 g plain flour',
      '3 eggs',
      '100 ml olive oil absorbed, from 800 ml for frying',
      '60 g caster sugar, for rolling',
      '250 g ready made custard or whipped cream'
    ],
    st: [
      'Boil the water, butter, 1 tablespoon sugar and salt in a pan. Tip in the flour and beat over the heat for 2 minutes until the paste leaves the sides.',
      'Cool for 5 minutes. Beat in the eggs one at a time until glossy.',
      'Heat the oil to 175C. Drop in teaspoons of paste, 5 at a time, and fry for 5 minutes, turning, until deep gold.',
      'Drain on kitchen paper and roll in the 60 g sugar.',
      'Make a hole in each with a skewer and pipe in the custard.'
    ],
    tips: [
      'Cool the paste before adding the eggs.',
      'Turn the puffs often while frying.',
      'Fill them just before serving.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Sweet wine'],
    store: 'Best fresh.',
    nut: [214, 3, 19, 14, 0, 9, 40]
  },

  'cocido-montanes': {
    d: 'A Cantabrian stew of white beans, cabbage, pork, chorizo and morcilla simmered for 2 hours 30 minutes after an overnight soak.',
    meta: 'Cocido montañés, Cantabrian stew of white beans, cabbage, pork and chorizo, cooked for 2 hours 30 minutes. Six servings, ready in 2 hours 50 minutes plus soaking.',
    kw: ['cocido montanes', 'cantabrian bean and cabbage stew', 'spanish mountain stew with pork', 'cocido montanes recipe', 'white bean and cabbage cocido'],
    why: 'Compare it with the cocido of Madrid and you find beans instead of chickpeas and cabbage in place of the soup noodles, which makes it a heavier and more rustic dish. Cocido montañés comes from the mountains of Cantabria in the north of Spain, and is a plate for cold weather and a table of six.\n\nSoak the dried white beans overnight. Drain them and put them in a large pot with a pork rib, a piece of salted belly, a ham bone and a bay leaf, then cover with cold water and bring slowly to a simmer. **Skim the foam in the first 15 minutes**, as it clouds the broth. Cook for 1 hour 30 minutes, then add the chorizo and morcilla.\n\nThe cabbage, usually a Savoy or kale, is cooked separately in salted water with garlic, drained and fried in the fat of the stew. The two dishes are served together: beans and meats in one dish, cabbage in the other, with the broth beside it. The beans should be soft and creamy but whole, and the meats tender.',
    ing: [
      '400 g dried white beans, soaked overnight',
      '300 g pork ribs',
      '200 g salted pork belly',
      '300 g ham bone',
      '2 bay leaves',
      '200 g chorizo',
      '200 g morcilla',
      '1 savoy cabbage, about 800 g',
      '4 garlic cloves',
      '3 tbsp olive oil',
      '1 tsp salt',
      '2 litres water'
    ],
    st: [
      'Drain the soaked beans and put them in a large pot with the ribs, belly, ham bone, bay and the water. Bring slowly to a simmer and skim.',
      'Cook for 1 hour 30 minutes. Add the chorizo and morcilla and cook for 30 minutes more.',
      'Meanwhile boil the shredded cabbage in salted water for 10 minutes and drain.',
      'Fry the garlic in the oil for 1 minute, add the cabbage and toss for 5 minutes.',
      'Serve the beans and meats in one dish, the cabbage in another, with some of the broth.'
    ],
    tips: [
      'Soak the beans overnight.',
      'Skim the foam from the pot.',
      'Cook the cabbage separately.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Chilli sauce'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    rest: [480, 'Soaking'],
    nut: [717, 35, 25, 53, 7, 5, 1830]
  },

  'pote-gallego': {
    d: 'A Galician soup-stew of white beans, potatoes, turnip tops and pork, simmered for 2 hours after an overnight soak.',
    meta: 'Pote gallego, Galician stew of white beans, potatoes, turnip tops and pork, cooked for 2 hours. Six servings, ready in 2 hours 20 minutes plus soaking.',
    kw: ['pote gallego', 'galician bean and greens stew', 'galician white bean soup', 'pote gallego recipe', 'galicia caldo with grelos'],
    why: 'The smell of the pot is the first thing you notice: smoked pork, beans and the green steam of turnip tops. Pote gallego is the winter stew of Galicia, a thick soup of white beans and potatoes, with a collection of pork cuts, and it is made across the green northwest of Spain.\n\nSoak the beans overnight and put them in a large pot with the pork shoulder, a smoked ham bone and a piece of salted belly that has been soaked for 12 hours to remove the salt. Cover with cold water, bring to a simmer and skim. **Keep the beans below a boil**, because a hard boil splits the skins and clouds the broth. After 1 hour, add the potatoes, cut into chunks.\n\nWash the greens, such as turnip tops or kale, and add them for the last 20 minutes, with the chorizo. The pot is done when the beans are creamy and the broth has the look of a thin gravy. Serve in deep bowls, with a piece of the meats on the side and bread for the broth. It tastes better the day after.',
    ing: [
      '350 g dried white beans, soaked overnight',
      '300 g pork shoulder',
      '300 g smoked ham bone',
      '200 g salted pork belly, soaked 12 hours',
      '2 litres water',
      '600 g potatoes, in chunks',
      '400 g turnip tops or kale',
      '150 g chorizo',
      '2 tbsp olive oil',
      '1 tsp salt'
    ],
    st: [
      'Drain the beans and put them in a large pot with the pork shoulder, ham bone, belly and water. Bring slowly to a simmer and skim.',
      'Cook gently for 1 hour.',
      'Add the potatoes and cook for 30 minutes.',
      'Add the greens and chorizo and cook for 20 minutes more.',
      'Stir in the oil and salt, lift out the meats, slice them and serve with the soup.'
    ],
    tips: [
      'Soak the salted belly to remove the salt.',
      'Keep the beans below a boil.',
      'Add the greens late so they stay green.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Corn bread'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    rest: [720, 'Soaking'],
    nut: [590, 31, 31, 38, 6, 4, 1460]
  },

  'bacalao-a-la-vizcaina': {
    d: 'Salt cod soaked for 24 hours and simmered in a sauce of dried choricero peppers, onion and garlic, the Basque classic.',
    meta: 'Bacalao a la vizcaína, salt cod in a sauce of dried peppers and onion, cooked for 35 minutes. Four servings, ready in 55 minutes plus soaking.',
    kw: ['bacalao a la vizcaina', 'basque salt cod in red pepper sauce', 'salt cod vizcaina', 'bacalao vizcaina recipe', 'cod in dried pepper sauce'],
    why: 'Does salt cod need to be soaked for a full day? Yes, and changing the water three times, or the dish tastes like a salted sea. Bacalao a la vizcaína is the Basque salt cod stew, made with a sauce of dried choricero peppers, onions and a little bread, and it is one of the dishes most often served at Christmas.\n\nSoak the salt cod in cold water in the fridge for 24 hours, changing the water 3 times. Taste a flake: it should be pleasantly salty, not harsh. Meanwhile, soak the dried peppers in warm water for 30 minutes, scrape the flesh from the skins and keep it. **Cook the onions slowly for 25 minutes**, until they are sweet and translucent. They are the base of the sauce and give it its colour.\n\nAdd the pepper pulp, a slice of fried bread and some of the soaking water and blend until smooth. Simmer the sauce for 10 minutes, lay in the pieces of cod, skin side up, and cook gently for 10 minutes. Shake the pan rather than stirring, so the flakes stay whole. Serve with bread and a few fried peppers.',
    ing: [
      '600 g salt cod, in pieces',
      '8 dried choricero or ñora peppers, 40 g',
      '5 tbsp olive oil',
      '3 onions, thinly sliced',
      '4 garlic cloves',
      '1 slice white bread, 40 g, fried',
      '300 ml fish stock',
      '3 tbsp chopped parsley',
      '4 slices crusty bread'
    ],
    st: [
      'Soak the salt cod in cold water in the fridge for 24 hours, changing the water 3 times.',
      'Soak the peppers in warm water for 30 minutes. Scrape out the flesh and discard the skins.',
      'Cook the onions in the oil over low heat for 25 minutes until sweet. Add the garlic for 2 minutes.',
      'Blend the onions, pepper flesh, fried bread and stock to a smooth sauce. Simmer for 10 minutes.',
      'Lay the cod in the sauce skin side up and cook gently for 10 minutes. Scatter with the parsley and serve with the bread.'
    ],
    tips: [
      'Change the soaking water three times.',
      'Cook the onions slowly.',
      'Shake the pan rather than stirring the fish.'
    ],
    pair: ['Crusty bread', 'Fried green peppers', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [1470, 'Soaking'],
    nut: [396, 8, 46, 20, 9, 18, 59400]
  },

  'sopa-castellana': {
    d: 'A Castilian garlic soup of toasted bread, smoked paprika and ham in stock, with an egg poached in each bowl, in 55 minutes.',
    meta: 'Sopa castellana, Castilian garlic soup with paprika, bread, ham and a poached egg, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['sopa castellana', 'castilian garlic soup', 'spanish garlic soup with egg', 'sopa de ajo castellana', 'garlic and paprika soup'],
    why: 'Most garlic soups come out bitter, and the fix is to fry the garlic slowly and take it off the heat before it colours. Sopa castellana is the Castilian bread and garlic soup, one of the oldest and cheapest of Spanish dishes, and it is made from stale bread, a lot of garlic and smoked paprika.\n\nSlice the garlic thin and fry it in plenty of olive oil over low heat, with a few pieces of ham, until pale gold. Lift out the garlic, fry the bread in the same oil until crisp, then take the pan off the heat and stir in the paprika. **The paprika burns in seconds**, which is why it goes in off the heat. Return the garlic and add the stock.\n\nSimmer for 30 minutes, until the bread has broken down and thickened the broth. Taste for salt. Crack the eggs into the simmering soup, or into individual clay bowls, and cook for 3 minutes until the whites are set. Serve with the yolks soft, and a drizzle of oil. It is the Spanish answer to a head cold.',
    ing: [
      '5 tbsp olive oil',
      '8 garlic cloves, thinly sliced',
      '60 g serrano ham, diced',
      '200 g stale bread, in slices',
      '2 tsp smoked paprika',
      '1.2 litres chicken stock',
      '1/2 tsp salt',
      '4 eggs'
    ],
    st: [
      'Warm the oil in a pot over low heat and fry the garlic and ham for 4 minutes until pale gold. Lift out.',
      'Fry the bread in the same oil for 4 minutes until crisp.',
      'Take the pot off the heat, stir in the paprika, then add the stock, garlic and ham.',
      'Simmer for 30 minutes. Season with the salt.',
      'Crack in the eggs and poach for 3 minutes. Serve at once.'
    ],
    tips: [
      'Fry the garlic slowly and keep it pale.',
      'Add the paprika off the heat.',
      'Poach the eggs in the soup just before serving.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Green salad'],
    store: 'Keeps for 2 days in the fridge without the eggs.',
    nut: [413, 17, 30, 25, 2, 3, 1770]
  },

  'alcachofas-con-jamon': {
    d: 'Artichoke hearts sautéed with serrano ham, garlic and a splash of white wine, a Spanish tapa ready in 25 minutes.',
    meta: 'Alcachofas con jamón, artichoke hearts sautéed with serrano ham, garlic and white wine, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['alcachofas con jamon', 'artichokes with ham spanish', 'sauteed artichokes with serrano ham', 'artichoke tapas', 'alcachofas con jamon recipe'],
    why: 'A table for four in spring, when the artichokes are young and tender, and when a tapa that takes 15 minutes is welcome. Alcachofas con jamón is a quick Spanish dish of artichoke hearts fried with ham and garlic, found in tapas bars across Spain from March.\n\nUse frozen or tinned artichoke hearts for ease, or trim fresh baby ones and rub with lemon. Quarter them and pat dry on kitchen paper. **Sear them in a wide pan over medium high heat** until their edges are brown, as this gives a nutty flavour that boiled artichokes lack. Add the garlic and ham pieces and fry for 2 minutes, then a splash of white wine.\n\nLet the wine bubble until it has almost gone, cover for 3 minutes so the artichokes finish cooking in the steam, and season with pepper and parsley. The ham is salty, so taste before adding any salt. Serve in a shallow dish, straight from the pan, with bread for the juices. A drizzle of good olive oil finishes it.',
    ing: [
      '500 g artichoke hearts, quartered',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '80 g serrano ham, in strips',
      '100 ml dry white wine',
      '3 tbsp chopped parsley',
      '1/2 tsp black pepper',
      '4 slices crusty bread'
    ],
    st: [
      'Pat the artichokes dry. Warm 3 tablespoons of the oil in a wide pan over medium high heat and sear the artichokes for 5 minutes until brown at the edges.',
      'Add the garlic and ham and fry for 2 minutes.',
      'Add the wine, let it bubble for 2 minutes, then cover and cook for 3 minutes.',
      'Add the parsley and pepper, drizzle with the remaining oil and serve with the bread.'
    ],
    tips: [
      'Dry the artichokes well so they brown.',
      'Taste before salting, as the ham is salty.',
      'Serve with bread for the juices.'
    ],
    pair: ['Crusty bread', 'Dry sherry', 'Olives'],
    store: 'Best fresh.',
    nut: [272, 9, 23, 16, 4, 3, 770]
  }
};
