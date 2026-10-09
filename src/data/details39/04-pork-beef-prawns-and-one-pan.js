'use strict';

/**
 * Volume thirty-nine — pork, beef, prawns and one-pan suppers.
 *
 * Roasts and chops, skewers and wraps, quick prawn dishes and four suppers
 * made in a single pan or pot. Times are the recipe's own; hobs and ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * from the ingredient list by npm run calc.
 */

module.exports = {
  'slow-roasted-pork-shoulder': {
    d: 'A pork shoulder rubbed with fennel, garlic and paprika and roasted for 4 hours at 150°C until it falls apart, with crackling.',
    meta: 'Slow roasted pork shoulder: a pork shoulder rubbed with fennel, garlic and paprika and roasted for 4 hours until it falls apart. Eight servings.',
    kw: ['slow roasted pork shoulder', 'roast pork shoulder', 'pulled pork shoulder in the oven', 'slow roast pork with crackling', 'tender roast pork shoulder'],
    why: 'Pork shoulder is a cut that needs time, and in return gives a joint that falls apart under a fork. It is forgiving, cheap and feeds a crowd, and the work is all at the start.\n\nScore the skin in parallel lines, pat it dry and rub it with salt, which draws out moisture and helps the crackling. Rub the flesh with fennel seeds, garlic, paprika and oil. **Dry skin is the secret to crackling.** If you have time, leave the joint uncovered in the fridge overnight.\n\nRoast at 150°C for 3 hours 30 minutes, until the meat is tender and gives when pressed. Then raise the oven to 230°C for the last 20 minutes to blister the skin into crackling. If your oven runs hot, check at 3 hours.\n\nRest the pork, loosely covered, for 20 minutes. Break off the crackling in sheets and pull the meat apart with two forks, discarding any large pieces of fat. Serve with apple sauce and roast potatoes, or in rolls.',
    ing: [
      '2.5 kg pork shoulder, skin on and bone in',
      '2 tbsp salt',
      '2 tbsp fennel seeds, lightly crushed',
      '6 garlic cloves, grated',
      '2 tsp smoked paprika',
      '3 tbsp olive oil',
      '2 onions, sliced',
      '250 ml water'
    ],
    st: [
      'Heat the oven to 150°C. Score the skin, pat dry and rub with the salt. Mix the fennel, garlic, paprika and oil and rub over the meat.',
      'Set the pork on the onions in a roasting tin with the water in the base. Roast for 3 hours 30 minutes.',
      'Raise the oven to 230°C and roast for 20 minutes until the skin blisters.',
      'Rest for 20 minutes, loosely covered. Break off the crackling and pull the meat apart.'
    ],
    tips: [
      'Dry the skin thoroughly.',
      'Raise the heat at the end for crackling.',
      'If your oven runs hot, check at 3 hours.',
      'Rest before pulling.'
    ],
    pair: ['Apple sauce', 'Roast potatoes', 'Braised red cabbage', 'Soft rolls'],
    store: 'Keeps in the fridge for 4 days. Reheat pulled meat with a splash of stock.',
    nut: [685, 57, 4, 49, 1, 1, 1960]
  },

  'maple-glazed-pork-chops': {
    d: 'Pork chops seared for 10 minutes and finished in a glaze of maple syrup, mustard and cider vinegar.',
    meta: 'Maple glazed pork chops: pork chops seared until golden and finished in a glaze of maple syrup, mustard and cider vinegar. Four servings.',
    kw: ['maple glazed pork chops', 'maple mustard pork chops', 'canadian maple pork chops', 'easy maple pork chops', 'pork chops with maple glaze'],
    why: 'Maple syrup and pork have been paired for centuries in Canada and New England, and the combination works because of contrast: the syrup is sweet and woody, and the pork is rich and salty. A little mustard and vinegar stops it from being cloying.\n\nUse chops at least 2 cm thick, bone-in if you can. Thin ones dry out before they brown. Season well and sear in a hot pan for 4 minutes a side, without moving them. **Let them colour properly**, since the browning is where the flavour starts.\n\nLower the heat and pour in the maple syrup, mustard and vinegar. Let it bubble for 2 minutes, turning the chops to coat them, until the glaze thickens and shines. If your pan runs hot, check at 1 minute, because sugar scorches quickly.\n\nThe chops are done at 63°C in the centre, with a faint blush of pink. Rest for 5 minutes. Spoon the glaze over the chops.',
    ing: [
      '4 pork chops, about 250 g each',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '4 tbsp maple syrup',
      '2 tbsp wholegrain mustard',
      '1 tbsp cider vinegar',
      '1 tbsp butter'
    ],
    st: [
      'Season the chops with the salt and pepper. Heat the oil in a heavy pan over medium-high heat.',
      'Sear the chops for 4 minutes per side until golden.',
      'Lower the heat, add the maple syrup, mustard, vinegar and butter and bubble for 2 minutes, turning the chops in the glaze.',
      'Rest for 5 minutes and spoon the glaze over.'
    ],
    tips: [
      'Choose chops 2 cm thick.',
      'Do not move them while they sear.',
      'If your pan runs hot, check at 1 minute.',
      'Rest before serving.'
    ],
    pair: ['Mashed potatoes', 'Green beans', 'Roasted apples', 'Buttered carrots'],
    store: 'Keeps in the fridge for 2 days. Slice cold into sandwiches.',
    nut: [530, 51, 14, 30, 0, 12, 870]
  },

  'apple-cider-pork-tenderloin': {
    d: 'Pork tenderloin seared and roasted for 20 minutes, with a pan sauce of apple cider, mustard and thyme.',
    meta: 'Apple cider pork tenderloin: pork tenderloin seared and roasted, with a pan sauce of apple cider, mustard and thyme. Four servings in 45 minutes.',
    kw: ['apple cider pork tenderloin', 'pork tenderloin with apple cider sauce', 'cider pork tenderloin', 'pork tenderloin with apples', 'roast pork tenderloin with cider'],
    why: 'Tenderloin is lean and quick, and it is easy to overcook. The cure is a thermometer and a sauce: a few spoonfuls of cider and mustard make it moist.\n\nTrim off the silver skin, the tough pale membrane, with a thin knife. Season the meat generously and sear in an ovenproof pan for 2 minutes on each side, until deeply golden. **Searing builds the flavour in the pan** that becomes the sauce.\n\nTransfer to a 200°C oven for 15 to 20 minutes, until a thermometer reads 63°C in the thickest part. If your oven runs hot, check at 12 minutes. Rest for 10 minutes, since the temperature will rise a few degrees.\n\nMeanwhile, pour the cider into the pan with the onion and thyme and boil hard until it is reduced by half. Whisk in the mustard and a knob of butter. Slice the pork into thick rounds and spoon the sauce over.',
    ing: [
      '2 pork tenderloins, about 700 g',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '1 onion, sliced',
      '250 ml dry apple cider',
      '2 tbsp wholegrain mustard',
      '2 g thyme sprigs',
      '1 tbsp butter',
      '1 apple, sliced'
    ],
    st: [
      'Heat the oven to 200°C. Trim the pork and season. Sear in the oil in an ovenproof pan for 2 minutes on each side.',
      'Roast for 15 to 20 minutes until 63°C in the centre. Rest on a board for 10 minutes.',
      'Soften the onion and apple in the pan for 4 minutes, add the cider and thyme and boil until reduced by half. Whisk in the mustard and butter.',
      'Slice the pork and spoon the sauce over.'
    ],
    tips: [
      'Trim the silver skin.',
      'Use a thermometer.',
      'If your oven runs hot, check at 12 minutes.',
      'Rest the pork for 10 minutes.'
    ],
    pair: ['Mashed potato', 'Roasted carrots', 'Buttered cabbage', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Serve the slices cold or warm them in the sauce.',
    nut: [308, 38, 12, 12, 2, 8, 830]
  },

  'crispy-pork-belly-bites': {
    d: 'Pork belly cubes simmered until tender, then roasted for 25 minutes with a soy and honey glaze until crisp at the edges.',
    meta: 'Crispy pork belly bites: pork belly cubes simmered until tender, then roasted with a soy and honey glaze until crisp at the edges. Six servings.',
    kw: ['crispy pork belly bites', 'pork belly bites', 'honey soy pork belly bites', 'crispy pork belly cubes', 'pork belly bites appetizer'],
    why: 'Pork belly bites are a decadent snack: a cube of tender meat with a lid of crisp fat and a sticky glaze. The method is two-stage, and it takes longer than it looks, but the result is not difficult.\n\nSimmer the belly in water with soy sauce, star anise and ginger for 35 minutes first. This renders some fat and makes the meat tender all the way through. **Drain and dry the cubes completely**, and leave them uncovered in the fridge for 30 minutes if you can. Dry fat crisps; wet fat steams.\n\nRoast on a rack at 220°C for 25 minutes, turning once, until the fat is blistered and golden. If your oven runs hot, check at 20 minutes.\n\nToss the hot cubes in a glaze of honey, soy sauce and a pinch of chilli, and return them to the oven for 3 minutes. Serve on cocktail sticks with a sharp dipping sauce of rice vinegar and chilli.',
    ing: [
      '800 g pork belly, skin removed, cut into 3 cm cubes',
      '2 litres water',
      '3 tbsp soy sauce, for simmering',
      '2 g star anise',
      '3 slices ginger',
      '1 tsp salt',
      '3 tbsp honey',
      '2 tbsp soy sauce, for the glaze',
      '1/2 tsp chilli flakes'
    ],
    st: [
      'Simmer the pork in the water with the 3 tbsp soy sauce, star anise and ginger for 35 minutes. Drain, dry thoroughly and season with the salt.',
      'Heat the oven to 220°C. Roast the cubes on a rack over a tray for 25 minutes, turning once, until the fat is blistered.',
      'Warm the honey, 2 tbsp soy sauce and chilli and toss the hot cubes in it.',
      'Return to the oven for 3 minutes and serve on cocktail sticks.'
    ],
    tips: [
      'Dry the cubes thoroughly.',
      'Roast on a rack so the fat drains.',
      'If your oven runs hot, check at 20 minutes.',
      'Glaze at the end only.'
    ],
    pair: ['Pickled cucumber', 'Chilli dipping sauce', 'Steamed buns', 'Cold beer'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days; crisp in a hot oven.',
    nut: [731, 13, 10, 71, 0, 9, 1180]
  },

  'steak-and-potato-skillet': {
    d: 'Steak bites and potato cubes fried in butter with garlic and rosemary in one skillet, ready in 35 minutes.',
    meta: 'Steak and potato skillet: sirloin bites and potato cubes fried in butter with garlic and rosemary in one skillet. Four servings in 35 minutes.',
    kw: ['steak and potato skillet', 'steak and potatoes in one skillet', 'garlic butter steak and potato skillet', 'steak bites and potatoes', 'skillet steak and potatoes'],
    why: 'The pan does the work in this dish: steak bites and crisp potatoes are cooked in the same skillet, sharing the butter, the garlic and the browned bits. It is a dinner for a night when you want the flavour of a steak without the fuss of one.\n\nCut the potatoes small, about 1.5 cm, and parboil for 5 minutes. **Dry them well** so they crisp in the pan. Fry in oil over medium-high heat for 12 minutes, turning only now and then, until deep gold. Remove them to a plate.\n\nIn the same pan, sear the steak cubes in a single layer for 3 minutes, turning once, until browned outside and pink inside. Cook in two batches if the pan is crowded. If your pan runs hot, check at 2 minutes.\n\nAdd butter, garlic and rosemary and spoon the foaming butter over the steak for 1 minute. Return the potatoes, toss and season. Serve straight from the pan.',
    ing: [
      '600 g beef sirloin steak, cut into 2 cm cubes',
      '600 g potatoes, cut into 1.5 cm cubes',
      '3 tbsp vegetable oil',
      '40 g butter',
      '4 garlic cloves, sliced',
      '2 g rosemary sprigs',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Boil the potatoes for 5 minutes, drain and dry well.',
      'Heat 2 tbsp of the oil in a large skillet over medium-high heat and fry the potatoes for 12 minutes until deep gold. Set aside.',
      'Heat the remaining oil, season the steak and sear in a single layer for 3 minutes. Add the butter, garlic and rosemary and spoon over for 1 minute.',
      'Return the potatoes to the skillet, toss and scatter with the parsley.'
    ],
    tips: [
      'Dry the parboiled potatoes.',
      'Sear the steak in batches.',
      'If your pan runs hot, check at 2 minutes.',
      'Add the garlic late so it does not burn.'
    ],
    pair: ['Green beans', 'Green salad', 'Garlic bread', 'Steak sauce'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days.',
    nut: [527, 35, 27, 31, 4, 1, 680]
  },

  'greek-beef-pitas': {
    d: 'Thin slices of beef marinated in lemon, oregano and garlic, fried for 8 minutes and stuffed into pitta with tzatziki.',
    meta: 'Greek beef pitas: thin slices of beef marinated in lemon, oregano and garlic, fried and stuffed into pitta with tzatziki. Four servings in 25 minutes.',
    kw: ['greek beef pitas', 'beef gyros pitas', 'greek beef pitta with tzatziki', 'easy greek beef pitas', 'beef souvlaki pitas'],
    why: 'It is the cooking of a Greek street stall in a home kitchen: thin slices of meat, bold herbs, a creamy yoghurt sauce and a warm pitta. It is quick because the beef is cut small and cooks in minutes.\n\nSlice the sirloin as thin as you can, against the grain. Half-freezing it for 20 minutes makes this easier. Toss with olive oil, lemon, oregano, garlic and salt. **Leave it for 15 minutes**, which is long enough to season it without making it mushy.\n\nCook in a very hot pan in two batches, 4 minutes each, so that the meat browns rather than steams. If your pan runs hot, check at 3 minutes.\n\nMake the tzatziki while the beef cooks: grated cucumber squeezed dry, stirred into yoghurt with garlic, lemon and dill. Warm the pittas, then pile in the beef with tomato, red onion, a few chips if you like, and a generous spoon of tzatziki.',
    ing: [
      '500 g beef sirloin, very thinly sliced',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tbsp dried oregano',
      '3 garlic cloves, grated',
      '1 tsp salt',
      '4 pitta breads',
      '200 g plain yoghurt',
      '1/2 cucumber, grated and squeezed dry',
      '1 tbsp chopped dill',
      '2 tomatoes, sliced',
      '1/2 red onion, sliced'
    ],
    st: [
      'Toss the beef with 2 tbsp of the oil, the lemon juice, oregano, half the garlic and half the salt. Leave for 15 minutes.',
      'Stir the yoghurt, cucumber, dill, remaining garlic and remaining salt.',
      'Heat the remaining oil in a very hot pan and fry the beef in two batches for 4 minutes each.',
      'Warm the pittas and fill with the beef, tomato, onion and tzatziki.'
    ],
    tips: [
      'Slice the beef very thin.',
      'Cook in two batches.',
      'If your pan runs hot, check at 3 minutes.',
      'Squeeze the cucumber dry.'
    ],
    pair: ['Greek salad', 'Chips', 'Olives', 'Lemon wedges'],
    store: 'The beef keeps in the fridge for 2 days. Warm it in a pan.',
    nut: [443, 35, 24, 23, 2, 6, 830]
  },

  'korean-beef-lettuce-wraps': {
    d: 'Beef mince fried for 10 minutes with soy sauce, sesame oil, garlic and gochujang, served in crisp lettuce leaves with rice.',
    meta: 'Korean beef lettuce wraps: beef mince fried with soy sauce, sesame oil, garlic and gochujang, served in crisp lettuce leaves. Four servings in 22 minutes.',
    kw: ['korean beef lettuce wraps', 'korean beef wraps', 'bulgogi lettuce wraps', 'quick korean beef lettuce wraps', 'korean ground beef lettuce cups'],
    why: 'This is a fast weeknight dinner that tastes of a Korean barbecue: salty, sweet, garlicky and with a gentle heat. The lettuce makes it light, and it is eaten with the hands.\n\nBrown the mince hard, until the pan is dry and the meat has dark edges. **Do not stir too much**, since the contact with the pan is what browns it. Break it up with a spoon and let it sit between turns.\n\nStir in the garlic and ginger for 30 seconds, then pour in the sauce of soy, brown sugar, sesame oil and gochujang. Let it bubble for 2 minutes until it clings to the beef. If your hob runs hot, check at 1 minute, as the sugar can catch.\n\nChoose crisp, cup-shaped lettuce such as little gem. Spoon a little warm beef into each leaf with some rice, then top with sliced spring onion, cucumber and sesame seeds. Eat at once, while the beef is warm and the lettuce is cold.',
    ing: [
      '500 g beef mince',
      '1 tbsp vegetable oil',
      '3 garlic cloves, grated',
      '1 tbsp grated ginger',
      '3 tbsp soy sauce',
      '2 tbsp brown sugar',
      '1 tbsp sesame oil',
      '1 tbsp gochujang',
      '2 little gem lettuces, leaves separated',
      '200 g cooked rice',
      '3 spring onions, sliced',
      '1/2 cucumber, sliced',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Heat the oil in a large pan and fry the mince for 8 minutes, breaking it up, until browned and dry.',
      'Add the garlic and ginger for 30 seconds, then the soy sauce, sugar, sesame oil and gochujang. Bubble for 2 minutes.',
      'Spoon the beef and rice into the lettuce leaves.',
      'Top with the spring onions, cucumber and sesame seeds.'
    ],
    tips: [
      'Brown the mince until dry.',
      'Do not stir too often.',
      'If your hob runs hot, check at 1 minute.',
      'Use crisp, cup-shaped leaves.'
    ],
    pair: ['Kimchi', 'Steamed rice', 'Pickled radish', 'Cold barley tea'],
    store: 'The beef keeps in the fridge for 3 days. Assemble the wraps fresh.',
    nut: [520, 31, 36, 28, 7, 12, 900]
  },

  'teriyaki-beef-skewers': {
    d: 'Sirloin strips threaded onto skewers, marinated in a homemade teriyaki sauce and grilled for 6 minutes until glazed.',
    meta: 'Teriyaki beef skewers: sirloin strips threaded onto skewers, marinated in homemade teriyaki sauce and grilled until glazed. Four servings.',
    kw: ['teriyaki beef skewers', 'grilled teriyaki beef skewers', 'beef teriyaki skewers', 'teriyaki steak skewers', 'japanese beef skewers'],
    why: 'The thing about teriyaki is that the sauce is made twice: once as a marinade and again as a glaze. The sugar in it caramelises on a hot grill, which gives the beef a shine and a sticky crust.\n\nSlice the sirloin across the grain into thin strips, and weave each onto a soaked bamboo skewer. Thin strips cook in minutes and hold the sauce. **Reserve a third of the marinade** before the beef goes in, so you have a clean sauce for basting at the end. Do not reuse the raw marinade.\n\nMarinate for 30 minutes, no longer, since the soy salts the surface.\n\nGrill over high heat for 6 minutes, turning every 90 seconds and brushing with the reserved sauce for the final 2 minutes. If your grill runs hot, check at 4 minutes and brush later, since sugar chars quickly. Sprinkle with sesame seeds and spring onion, and serve over rice.',
    ing: [
      '600 g beef sirloin, thinly sliced across the grain',
      '5 tbsp soy sauce',
      '4 tbsp mirin',
      '2 tbsp brown sugar',
      '2 garlic cloves, grated',
      '1 tsp grated ginger',
      '1 tbsp vegetable oil',
      '1 tbsp sesame seeds',
      '3 spring onions, sliced'
    ],
    st: [
      'Whisk the soy sauce, mirin, sugar, garlic, ginger and oil. Set aside a third in a clean bowl.',
      'Weave the beef onto soaked skewers, pour over the larger share of marinade and leave for 30 minutes.',
      'Heat the grill to high and cook the skewers for 6 minutes, turning every 90 seconds and brushing with the reserved sauce for the last 2 minutes.',
      'Scatter with the sesame seeds and spring onions.'
    ],
    tips: [
      'Reserve some sauce for basting.',
      'Soak bamboo skewers.',
      'If your grill runs hot, check at 4 minutes.',
      'Marinate for 30 minutes only.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Edamame', 'Miso soup'],
    store: 'Keeps in the fridge for 2 days. Reheat briefly.',
    nut: [357, 34, 17, 17, 1, 14, 1190]
  },

  'honey-garlic-shrimp-stir-fry': {
    d: 'Shrimp and broccoli stir-fried for 8 minutes in a glossy honey, soy and garlic sauce and served over rice.',
    meta: 'Honey garlic shrimp stir fry: shrimp and broccoli stir-fried in a glossy honey, soy and garlic sauce and served over rice. Four servings in 20 minutes.',
    kw: ['honey garlic shrimp stir fry', 'honey garlic shrimp', 'shrimp and broccoli stir fry', 'quick honey garlic shrimp', 'garlic shrimp stir fry'],
    why: 'It is one of the fastest dinners there is, and the whole thing hinges on being organised. The stir fry takes 8 minutes, so everything must be chopped and the sauce mixed before the pan gets hot.\n\nMix the honey, soy sauce, garlic, ginger and cornflour with water. The cornflour thickens the sauce to a glaze in seconds. **Dry the shrimp well** with paper towels, because wet shrimp steam rather than sear.\n\nHeat the wok until it smokes, add the oil, and cook the shrimp in a single layer for 1 minute a side. Take them out while they are still slightly underdone, as they will finish in the sauce. If your hob runs hot, work faster.\n\nStir-fry the broccoli for 3 minutes with a splash of water, then pour in the sauce, which thickens in about 30 seconds. Return the shrimp for 1 minute. Serve straight away over steamed rice.',
    ing: [
      '500 g raw peeled shrimp',
      '2 tbsp vegetable oil',
      '300 g broccoli florets',
      '3 tbsp honey',
      '3 tbsp soy sauce',
      '4 garlic cloves, grated',
      '1 tbsp grated ginger',
      '1 tsp cornflour',
      '100 ml water',
      '200 g cooked rice'
    ],
    st: [
      'Whisk the honey, soy sauce, garlic, ginger, cornflour and water.',
      'Heat the oil in a wok until smoking. Sear the shrimp for 1 minute per side and remove.',
      'Stir-fry the broccoli for 3 minutes with a splash of water.',
      'Pour in the sauce and stir until it thickens, then return the shrimp for 1 minute. Serve over the rice.'
    ],
    tips: [
      'Dry the shrimp.',
      'Mix the sauce before you start.',
      'If your hob runs hot, work faster.',
      'Do not overcook the shrimp.'
    ],
    pair: ['Steamed rice', 'Sesame seeds', 'Spring onions', 'Noodles'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [332, 30, 35, 8, 2, 14, 870]
  },

  'lemon-garlic-shrimp-pasta': {
    d: 'Spaghetti tossed with shrimp, garlic, lemon, parsley and a little butter in a light sauce, ready in 25 minutes.',
    meta: 'Lemon garlic shrimp pasta: spaghetti tossed with shrimp, garlic, lemon, parsley and butter in a light sauce. Four servings in 25 minutes.',
    kw: ['lemon garlic shrimp pasta', 'garlic shrimp pasta', 'lemon shrimp spaghetti', 'easy lemon garlic shrimp pasta', 'shrimp pasta with lemon'],
    why: 'A bright, garlicky shrimp pasta is one of the best things to cook in a hurry, and it asks for very little. The skill lies in the sauce, which is made from the starchy pasta water, lemon and butter.\n\nBoil the spaghetti in salted water, and keep a mug of the water when you drain. **This water is what turns oil and lemon into a sauce**, because the starch in it makes it cling.\n\nCook the shrimp in olive oil for 2 minutes a side until just pink, and lift them out. In the same pan, soften the garlic for 30 seconds, then add the lemon juice and zest, the butter and a ladle of the pasta water.\n\nTip in the spaghetti and toss for 1 minute until it is glossy. If your hob runs hot, keep the heat medium so the garlic does not scorch. Return the shrimp, add parsley and chilli, and taste for salt.',
    ing: [
      '350 g spaghetti',
      '500 g raw peeled shrimp',
      '3 tbsp olive oil',
      '5 garlic cloves, sliced',
      '2 lemons, zest and juice',
      '30 g butter',
      '1/2 tsp chilli flakes',
      '3 tbsp chopped parsley',
      '1 tsp salt'
    ],
    st: [
      'Boil the spaghetti in salted water, keep a mug of the water and drain.',
      'Cook the shrimp in the oil for 2 minutes per side. Lift out.',
      'Soften the garlic in the pan for 30 seconds, add the lemon zest and juice, butter and a ladle of the pasta water.',
      'Toss in the spaghetti for 1 minute, return the shrimp and add the chilli, parsley and salt.'
    ],
    tips: [
      'Keep the pasta water.',
      'Do not let the garlic brown.',
      'If your hob runs hot, keep the heat at medium.',
      'Add the shrimp back at the end.'
    ],
    pair: ['Green salad', 'Garlic bread', 'White wine', 'Roasted asparagus'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [599, 37, 70, 19, 4, 3, 790]
  },

  'sweet-chilli-prawns': {
    d: 'Prawns fried for 4 minutes and tossed in a sweet chilli, lime and garlic glaze, served in lettuce or over rice.',
    meta: 'Sweet chilli prawns: prawns fried until pink and tossed in a sweet chilli, lime and garlic glaze, served over rice. Four servings in 18 minutes.',
    kw: ['sweet chilli prawns', 'sweet chilli garlic prawns', 'australian sweet chilli prawns', 'quick sweet chilli prawns', 'prawns in sweet chilli sauce'],
    why: 'Sweet chilli sauce is a pantry staple in Australia and New Zealand, and it is made for prawns: sticky, mildly hot and sharp with lime. It turns a handful of ingredients into something quick enough for a weeknight.\n\nPeel the prawns but leave the tails on, which gives a handle and keeps the flesh juicy. Pat dry and cook in a hot pan with oil for 2 minutes a side, until pink and just curled. **Pull them when they are slightly underdone**, because they finish in the glaze.\n\nTake the pan off the heat, add the garlic and let it sizzle in the residual heat for 20 seconds. Pour in the sweet chilli sauce and lime juice and toss everything for 30 seconds, until the prawns are coated and glossy. If your hob runs hot, work quickly.\n\nServe over rice, in lettuce cups or on skewers, with coriander and extra lime.',
    ing: [
      '500 g raw king prawns, peeled with tails left on',
      '1 tbsp vegetable oil',
      '3 garlic cloves, grated',
      '5 tbsp sweet chilli sauce',
      '2 limes, juiced',
      '2 tbsp chopped coriander',
      '200 g cooked rice',
      '1/2 tsp salt'
    ],
    st: [
      'Pat the prawns dry and season with the salt.',
      'Heat the oil in a frying pan over high heat and cook the prawns for 2 minutes per side until pink.',
      'Off the heat, add the garlic for 20 seconds, then the sweet chilli sauce and lime juice. Toss for 30 seconds.',
      'Serve over the rice with the coriander.'
    ],
    tips: [
      'Dry the prawns.',
      'Take them off slightly underdone.',
      'If your hob runs hot, work quickly.',
      'Add the garlic off the heat.'
    ],
    pair: ['Steamed rice', 'Lettuce cups', 'Cucumber salad', 'Cold beer'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [256, 27, 28, 4, 1, 10, 670]
  },

  'creamy-tuscan-shrimp': {
    d: 'Shrimp in a creamy sauce of garlic, sun-dried tomatoes, spinach and parmesan, ready in 22 minutes.',
    meta: 'Creamy Tuscan shrimp: shrimp in a creamy sauce of garlic, sun-dried tomatoes, spinach and parmesan. Four servings in 22 minutes.',
    kw: ['creamy tuscan shrimp', 'tuscan shrimp', 'creamy garlic shrimp with spinach', 'tuscan shrimp with sun dried tomatoes', 'easy creamy tuscan shrimp'],
    why: 'This borrows the flavours of a Tuscan chicken but is faster: shrimp cook in minutes, and the cream sauce is made in the pan while they rest. It is rich, so a small portion goes a long way.\n\nCook the shrimp for 90 seconds a side in a hot pan and take them out while still a touch underdone. **They will cook again in the sauce**, and shrimp that goes in raw to the sauce can turn rubbery by the time the sauce thickens.\n\nSoften the garlic in the same pan, then add the sun-dried tomatoes, cream and a splash of stock. Simmer for 4 minutes, until the sauce is thick enough to coat the back of a spoon. If your hob runs hot, keep the heat at medium so the cream does not catch.\n\nStir in the parmesan and spinach, and add a little lemon juice to cut the richness. Return the shrimp for 1 minute. Serve over pasta, rice or crusty bread.',
    ing: [
      '500 g raw peeled shrimp',
      '2 tbsp olive oil',
      '4 garlic cloves, chopped',
      '80 g sun-dried tomatoes, sliced',
      '200 ml double cream',
      '60 ml chicken stock',
      '40 g parmesan, grated',
      '100 g baby spinach',
      '1 lemon, juiced',
      '1/2 tsp salt'
    ],
    st: [
      'Cook the shrimp in the oil for 90 seconds per side. Lift out.',
      'Soften the garlic in the pan for 30 seconds. Add the tomatoes, cream and stock and simmer for 4 minutes.',
      'Stir in the parmesan, spinach, lemon juice and salt until the spinach wilts.',
      'Return the shrimp for 1 minute.'
    ],
    tips: [
      'Undercook the shrimp at first.',
      'Keep the sauce at a simmer, not a boil.',
      'If your hob runs hot, keep the heat at medium.',
      'Add lemon at the end.'
    ],
    pair: ['Pasta', 'Crusty bread', 'Steamed rice', 'Green salad'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat gently.',
    nut: [461, 34, 16, 29, 3, 10, 1120]
  },

  'crispy-fish-tacos-with-slaw': {
    d: 'Battered white fish fried for 5 minutes until crisp, in warm tortillas with lime slaw and a chipotle mayonnaise.',
    meta: 'Crispy fish tacos with slaw: battered white fish fried until crisp, in warm tortillas with lime slaw and a chipotle mayonnaise. Four servings.',
    kw: ['crispy fish tacos with slaw', 'crispy fish tacos', 'beer battered fish tacos with slaw', 'fried fish tacos', 'fish tacos with lime slaw'],
    why: 'A fish taco is a study in contrasts: hot, crisp fish against cold, crunchy slaw, and a soft tortilla to hold the lot. A batter of flour and sparkling water gives the crunch.\n\nCut the fish into strips about 2 cm wide, season and dust with flour. Whisk the batter just before frying, and keep it cold. **Do not overmix**: a few lumps make a lighter coating.\n\nHeat the oil to 180°C and fry the fish in batches of four or five strips for about 5 minutes, turning once, until deep gold. If your oil runs hot, check at 4 minutes. Drain on a rack.\n\nWhile the oil heats, make the slaw: shredded cabbage, lime juice, coriander and a pinch of salt. For the sauce, mix mayonnaise with chipotle paste and lime. Warm the tortillas in a dry pan, then pile in the fish, slaw and sauce. Eat straight away, while the fish is still crisp.',
    ing: [
      '600 g white fish fillets, cut into strips',
      '1 tsp salt',
      '4 tbsp plain flour, for dusting',
      '120 g plain flour, for the batter',
      '200 ml sparkling water',
      '3 tbsp vegetable oil, absorbed from about 500 ml of frying oil',
      '200 g white cabbage, shredded',
      '2 limes, juiced',
      '2 tbsp chopped coriander',
      '4 tbsp mayonnaise',
      '1 tbsp chipotle paste',
      '8 small corn tortillas'
    ],
    st: [
      'Season the fish with half the salt and dust with the 4 tbsp flour. Whisk the 120 g flour with the sparkling water to a lumpy batter.',
      'Heat the frying oil to 180°C. Dip the fish in the batter and fry in batches for 5 minutes until deep gold. Drain on a rack.',
      'Toss the cabbage with the juice of 1 lime, the coriander and remaining salt. Mix the mayonnaise, chipotle paste and remaining lime juice.',
      'Warm the tortillas and fill with the fish, slaw and sauce.'
    ],
    tips: [
      'Keep the batter cold and lumpy.',
      'Fry in small batches.',
      'If your oil runs hot, check at 4 minutes.',
      'Assemble at the last moment.'
    ],
    pair: ['Mexican rice', 'Black beans', 'Lime wedges', 'Cold beer'],
    store: 'Best eaten at once. Fried fish does not keep well.',
    nut: [556, 34, 51, 24, 5, 3, 850]
  },

  'one-pan-chicken-and-rice': {
    d: 'Chicken thighs browned in a single pan, then simmered with rice, stock, paprika and garlic for 25 minutes.',
    meta: 'One pan chicken and rice: chicken thighs browned and simmered with rice, stock, paprika and garlic, all cooked in one pan. Four servings.',
    kw: ['one pan chicken and rice', 'one pan chicken rice', 'easy one pan chicken and rice', 'chicken and rice skillet', 'one skillet chicken and rice'],
    why: 'Everything cooks in the one pan, so the rice drinks the juices from the chicken, and there is only one thing to wash. It is a method rather than a recipe, and it works with whatever you have.\n\nBrown the thighs, skin-side down, for 6 minutes until the skin is crisp and a good deal of fat has rendered. **Pour off most of the fat** and keep a spoonful, since too much will make the rice greasy.\n\nSoften the onion in the same pan, add garlic and paprika, then the rice, and stir for a minute to coat each grain. Pour in the stock, bring to a boil and nestle the chicken on top, skin-side up.\n\nCover and cook on low heat for 25 minutes, without lifting the lid. If your hob runs hot, check at 20 minutes. The rice should be tender and the liquid absorbed. Rest for 5 minutes with the lid on, then fluff the rice and scatter with parsley and lemon.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '1 tsp salt',
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '2 tsp smoked paprika',
      '300 g long-grain rice',
      '600 ml chicken stock',
      '150 g frozen peas',
      '2 tbsp chopped parsley',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Season the chicken with the salt. Heat the oil in a large lidded pan and brown the chicken skin-side down for 6 minutes. Pour off all but 1 tbsp of the fat.',
      'Soften the onion in the same pan for 4 minutes, add the garlic and paprika, then the rice for 1 minute.',
      'Pour in the stock, bring to the boil and set the chicken on top skin-side up. Cover and cook on low heat for 25 minutes.',
      'Scatter the peas over for the last 5 minutes. Rest for 5 minutes, fluff and serve with the parsley and lemon.'
    ],
    tips: [
      'Pour off excess fat.',
      'Do not lift the lid.',
      'If your hob runs hot, check at 20 minutes.',
      'Rest before fluffing.'
    ],
    pair: ['Green salad', 'Roasted broccoli', 'Lemon wedges', 'Garlic bread'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [668, 59, 72, 16, 5, 4, 1320]
  },

  'one-pan-sausage-and-potatoes': {
    d: 'Pork sausages, potatoes and onion roasted together in one pan for 35 minutes with rosemary and a little mustard.',
    meta: 'One pan sausage and potatoes: pork sausages, potatoes and onion roasted together in one pan with rosemary and mustard. Four servings.',
    kw: ['one pan sausage and potatoes', 'one pan sausages and potatoes', 'sausage and potato traybake', 'easy one pan sausage and potatoes', 'roast sausages and potatoes'],
    why: 'It is the sort of supper that is mostly oven time: a tray of sausages, potatoes and onion that roasts while you do something else. The sausages release their fat, which crisps the potatoes, and everything tastes of everything else.\n\nCut the potatoes into 3 cm pieces, so they are done in the time the sausages need. Toss them with oil, rosemary, salt and pepper and spread them on a large tray. **Crowding makes them steam**, so use two trays if you need to.\n\nRoast at 220°C for 15 minutes, then add the sausages and onion wedges, turn everything and roast for 20 minutes more. If your oven runs hot, check at 28 minutes.\n\nThe sausages should be browned all over and cooked through, the potatoes crisp at the edges. For the last 2 minutes, brush the sausages with a little mustard and honey, which gives a sticky, tangy glaze. Serve straight from the tray.',
    ing: [
      '8 pork sausages, about 500 g',
      '800 g potatoes, cut into 3 cm pieces',
      '3 tbsp olive oil',
      '2 g rosemary sprigs',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 red onions, cut into wedges',
      '2 tsp mustard',
      '1 tsp honey'
    ],
    st: [
      'Heat the oven to 220°C. Toss the potatoes with the oil, rosemary, salt and pepper on a large tray and roast for 15 minutes.',
      'Add the sausages and onions to the same pan, turn everything and roast for 18 minutes.',
      'Mix the mustard and honey, brush over the sausages and roast for 2 minutes more.',
      'Serve straight from the tray.'
    ],
    tips: [
      'Cut the potatoes evenly.',
      'Use a large tray.',
      'If your oven runs hot, check at 28 minutes.',
      'Glaze at the very end.'
    ],
    pair: ['Peas', 'Gravy', 'Green salad', 'Brown sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [633, 21, 45, 41, 6, 7, 1630]
  },

  'one-pot-lasagne-soup': {
    d: 'Beef mince, tomatoes, stock and broken lasagne sheets simmered in one pot for 30 minutes and finished with ricotta.',
    meta: 'One pot lasagne soup: beef mince, tomatoes, stock and broken lasagne sheets simmered in one pot and finished with ricotta. Six servings.',
    kw: ['one pot lasagne soup', 'lasagna soup', 'one pot lasagna soup', 'easy lasagne soup', 'lasagne soup with ricotta'],
    why: 'It has the flavour of a lasagne without the layering, the baking or the long wait. The pasta is broken into pieces and cooked right in the soup, so it releases starch and thickens the broth.\n\nBrown the mince with the onion in a large pot until it is dry and browned, and drain off any excess fat. **Browning is where the depth comes from**, so be patient. Add garlic, tomato puree and Italian herbs and stir for a minute.\n\nPour in the tomatoes and stock and bring to the boil. Break the lasagne sheets into bite-size pieces and drop them in, stirring to stop them sticking. Simmer for 15 minutes until the pasta is tender. If your hob runs hot, check at 12 minutes and stir often.\n\nStir in the spinach for the last 2 minutes. Serve in bowls with a spoonful of ricotta and a handful of mozzarella and parmesan on top.',
    ing: [
      '500 g beef mince',
      '1 onion, chopped',
      '4 garlic cloves, chopped',
      '2 tbsp tomato puree',
      '2 tsp dried Italian herbs',
      '800 g tinned chopped tomatoes',
      '1 litre beef stock',
      '150 g dried lasagne sheets, broken',
      '100 g baby spinach',
      '1 tsp salt',
      '150 g ricotta',
      '100 g mozzarella, grated',
      '30 g parmesan, grated'
    ],
    st: [
      'In one large pot, brown the mince and onion for 10 minutes until dry. Add the garlic, tomato puree and herbs for 1 minute.',
      'Pour in the tomatoes and stock and bring to the boil.',
      'Add the broken lasagne sheets and simmer for 15 minutes, stirring often. Stir in the spinach and salt for 2 minutes.',
      'Serve topped with the ricotta, mozzarella and parmesan.'
    ],
    tips: [
      'Brown the mince thoroughly.',
      'Stir often so the pasta does not stick.',
      'If your hob runs hot, check at 12 minutes.',
      'Add the cheese at the table.'
    ],
    pair: ['Garlic bread', 'Green salad', 'Crusty bread', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. The pasta softens, so add a splash of stock when reheating.',
    nut: [442, 31, 30, 22, 3, 6, 1220]
  },

  'one-pot-jambalaya': {
    d: 'Chicken, smoked sausage, rice, peppers and Cajun spices cooked in one pot for 35 minutes until the rice is tender.',
    meta: 'One pot jambalaya: chicken, smoked sausage, rice, peppers and Cajun spices cooked together in one pot until the rice is tender. Six servings.',
    kw: ['one pot jambalaya', 'easy one pot jambalaya', 'chicken and sausage jambalaya', 'cajun one pot jambalaya', 'one pot cajun rice'],
    why: 'Jambalaya is a pot of rice with everything in it, and the Louisiana way is to cook it all in one vessel so that the flavours go into the grains. It is a dish for a crowd and for a cold evening.\n\nBrown the sausage first, in a heavy pot, and the fat that comes out cooks the rest. Then brown the chicken, which you season with Cajun spice. **Do not skip the browning**: the dark bits stuck to the bottom of the pot are the base of the flavour.\n\nSoften the onion, pepper and celery, the so-called holy trinity, for 6 minutes, then add garlic, tomatoes, rice and stock. Return the meat, stir once, cover and simmer for 25 minutes without stirring. If your hob runs hot, check at 20 minutes.\n\nThe rice should be tender with a little liquid left. Rest it, covered, for 10 minutes, then fluff and stir in spring onions and parsley. Serve with hot sauce on the side.',
    ing: [
      '300 g smoked sausage, sliced',
      '500 g chicken thighs, boneless, cut into pieces',
      '2 tbsp Cajun seasoning',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '1 green pepper, chopped',
      '2 celery sticks, chopped',
      '4 garlic cloves, chopped',
      '400 g tinned chopped tomatoes',
      '300 g long-grain rice',
      '600 ml chicken stock',
      '3 spring onions, sliced',
      '2 tbsp chopped parsley'
    ],
    st: [
      'In one large pot, brown the sausage for 5 minutes and remove. Season the chicken with half the Cajun seasoning, brown it in the oil for 5 minutes and remove.',
      'Soften the onion, pepper and celery for 6 minutes. Add the garlic, remaining seasoning, tomatoes, rice and stock.',
      'Return the meat, bring to the boil, cover and simmer on low heat for 25 minutes without stirring.',
      'Rest for 10 minutes, fluff and stir in the spring onions and parsley.'
    ],
    tips: [
      'Brown the meat well.',
      'Do not stir while the rice cooks.',
      'If your hob runs hot, check at 20 minutes.',
      'Rest before serving.'
    ],
    pair: ['Hot sauce', 'Cornbread', 'Green salad', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [509, 29, 51, 21, 4, 4, 830]
  }
};
