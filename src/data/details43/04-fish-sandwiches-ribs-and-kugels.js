'use strict';

/**
 * Volume forty-three — fish, sandwiches, pork and kugels, fourth part.
 *
 * Crusted cod and salmon, parmesan carrots, perogies, a Philly chicken
 * sandwich, piri piri prawns, a ploughman's sandwich, a po' boy, pork adobo,
 * oven ribs, pork souvlaki, a pork and apple casserole, potato and noodle
 * kugel, prawn laksa and two pastas. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * by npm run calc.
 */

module.exports = {
  'parmesan-crusted-cod': {
    d: 'Cod fillets topped with a mix of parmesan, breadcrumbs, butter and lemon zest, baked until golden.',
    meta: 'Parmesan crusted cod: cod fillets under a golden crust of parmesan, breadcrumbs and lemon. Four servings, baked for 15 minutes.',
    kw: ['parmesan crusted cod', 'baked parmesan crusted cod', 'cod with parmesan crust', 'parmesan and lemon cod', 'parmesan crusted cod fillets'],
    why: 'Most home versions come out with a soggy crust, and the fix is to pat the fish dry and spread the mustard thin. Moisture on the cod turns the topping to paste, and a thick layer of mustard does the same.\n\nMix the parmesan with the breadcrumbs, melted butter, lemon zest and parsley until the crumbs look like damp sand. Brush each fillet with a thin layer of mustard, which acts as a glue, then press the crumbs on firmly. **Press the topping on, do not just sprinkle it.** Loose crumbs fall into the tray.\n\nBake at 200°C for 15 minutes. If your fillets are thin, check at 10 minutes. The crust should be golden and the fish should flake easily.\n\nThe cod is ready when the thickest part has turned from glassy to opaque white. Serve with lemon wedges and greens. Fresh parmesan, grated from a block, melts and browns better than the pre-grated kind.',
    ing: [
      '4 cod fillets, about 600 g',
      '50 g parmesan, grated',
      '40 g dried breadcrumbs',
      '30 g butter, melted',
      '1 lemon, zested, plus wedges to serve',
      '1 tbsp Dijon mustard',
      '10 g flat-leaf parsley, chopped',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Pat the cod dry and lay on a lined tray.',
      'Mix the parmesan, breadcrumbs, butter, lemon zest, parsley and pepper until like damp sand.',
      'Brush each fillet with a thin layer of mustard and press on the crumbs firmly.',
      'Bake for 15 minutes until golden and the fish flakes. Serve with lemon wedges.'
    ],
    tips: [
      'Pat the fish dry.',
      'Spread the mustard thin.',
      'If the fillets are thin, check at 10 minutes.',
      'Press the crumbs on firmly.'
    ],
    pair: ['Green beans', 'Roast potatoes', 'Garden salad', 'Steamed asparagus'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [267, 33, 9, 11, 1, 1, 410]
  },

  'parmesan-roasted-carrots': {
    d: 'Carrot batons roasted with olive oil and garlic, tossed in grated parmesan for the last few minutes.',
    meta: 'Parmesan roasted carrots: carrot batons roasted until sweet and tossed with grated parmesan. Four servings, baked for 25 minutes.',
    kw: ['parmesan roasted carrots', 'roasted carrots with parmesan', 'oven roasted parmesan carrots', 'garlic parmesan carrots', 'cheesy roasted carrots'],
    why: 'Salt the carrots early and add the cheese late. That is the rule, and it is the whole recipe. Parmesan burns if it sits in a 220°C oven for 25 minutes, so it only goes on for the last five.\n\nCut the carrots into batons of the same thickness and toss them with the oil, garlic and salt. Spread them in one layer so they roast rather than steam. Roast for 20 minutes, turning once, until the edges begin to brown and the carrots are nearly tender. **Add the parmesan only at this point.** It melts into a crisp, nutty coat.\n\nRoast for 5 minutes more. If your oven runs hot, check at 22 minutes in total.\n\nThe carrots are ready when a knife slides in easily and the cheese is golden. Serve straight away with a squeeze of lemon. Choose carrots of a similar width, and halve any thick ones lengthways so they cook at the same rate.',
    ing: [
      '700 g carrots, cut into batons',
      '2 tbsp olive oil',
      '2 cloves garlic, crushed',
      '1/2 tsp salt',
      '40 g parmesan, grated',
      '1/2 lemon, juiced',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C. Toss the carrots with the oil, garlic and salt on a large tray and spread in one layer.',
      'Roast for 20 minutes, turning once.',
      'Scatter over the parmesan and roast for 5 minutes more until golden.',
      'Squeeze over the lemon, add the pepper and serve.'
    ],
    tips: [
      'Cut the carrots the same size.',
      'Add the parmesan late.',
      'If your oven runs hot, check after 22 minutes.',
      'Do not crowd the tray.'
    ],
    pair: ['Roast chicken', 'Grilled steak', 'Baked salmon', 'Mashed potato'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to restore some crispness.',
    nut: [182, 5, 18, 10, 5, 8, 570]
  },

  'pecan-crusted-salmon': {
    d: 'Salmon fillets brushed with maple syrup and mustard, pressed with chopped pecans and baked until the crust is toasted.',
    meta: 'Pecan crusted salmon: salmon fillets coated in maple, mustard and chopped pecans, baked for 15 minutes. Four servings.',
    kw: ['pecan crusted salmon', 'baked pecan crusted salmon', 'maple pecan crusted salmon', 'salmon with pecan crust', 'pecan and mustard salmon'],
    why: 'Most home versions come out with burnt nuts and a dry middle, and the fix is a short bake and a thin crust. Pecans toast quickly at 200°C, and thin fillets are done well before thick crusts burn.\n\nChop the pecans roughly rather than grinding them. Fine nut dust scorches and coarse pieces toast. Whisk the maple syrup with the mustard and salt to make a sticky paste, brush it over the fish, then press on the nuts. **Press hard so the pecans stay on.** The sticky paste is the only glue.\n\nBake for 15 minutes. If your oven runs hot, check at 12 minutes. The nuts should be dark gold, not brown, and the salmon should flake.\n\nSalmon is best when the middle is still a little translucent, as it carries on cooking as it rests. Serve with greens and lemon. Pecans can be swapped for walnuts, and the baking time stays the same.',
    ing: [
      '4 salmon fillets, about 600 g',
      '80 g pecans, roughly chopped',
      '2 tbsp maple syrup',
      '2 tbsp Dijon mustard',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Lay the salmon on it skin-side down.',
      'Whisk the maple syrup, mustard, salt and pepper and brush over the fish.',
      'Press the chopped pecans firmly onto the top of each fillet.',
      'Bake for 15 minutes until the nuts are dark gold and the salmon flakes. Serve with lemon wedges.'
    ],
    tips: [
      'Chop the pecans coarse.',
      'Press the nuts on firmly.',
      'If your oven runs hot, check at 12 minutes.',
      'Leave the middle just translucent.'
    ],
    pair: ['Steamed asparagus', 'Rice pilaf', 'Green beans', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Eat cold in a salad or reheat gently.',
    nut: [487, 32, 11, 35, 3, 7, 500]
  },

  'perogies-with-onions': {
    d: 'Boiled potato and cheese dumplings pan-fried in butter until golden, served with slowly browned onions.',
    meta: 'Perogies with onions: boiled dumplings pan-fried in butter and served with browned onions. Four servings, cooked for 20 minutes.',
    kw: ['perogies with onions', 'pan fried perogies with onions', 'perogies with caramelised onions', 'fried perogies and onions', 'potato and cheese perogies with onions'],
    why: 'Boil the perogies first, then fry them. That is the single most useful instruction here. Frying them straight from the packet leaves the dough raw in the middle.\n\nBoil for 4 to 5 minutes until they float, drain well and let them steam dry for a minute. Wet perogies spit in hot butter and never brown. Meanwhile cook the onions slowly in butter for 15 minutes, stirring now and then, until they are soft, sweet and deep gold. **Do not hurry the onions.** High heat makes them bitter and not sweet.\n\nPush the onions to one side, add more butter and fry the perogies for 3 minutes on each side until they are crisp and golden.\n\nServe with the onions on top and a spoonful of soured cream. Chives are good if you have them. Frozen perogies go straight into the boiling water, with an extra minute on the clock.',
    ing: [
      '500 g potato and cheese perogies',
      '3 onions, about 450 g, sliced',
      '50 g butter',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '150 ml soured cream',
      '10 g chives, chopped'
    ],
    st: [
      'Cook the onions in half the butter with the salt over a medium-low heat for 15 minutes, stirring, until soft and deep gold.',
      'Meanwhile boil the perogies for 5 minutes until they float, drain and steam dry for 1 minute.',
      'Push the onions aside, add the rest of the butter and fry the perogies for 3 minutes on each side until golden.',
      'Serve with the onions, soured cream, pepper and chives.'
    ],
    tips: [
      'Boil the perogies before frying.',
      'Dry them before they go in the pan.',
      'Cook the onions slowly.',
      'Do not crowd the pan.'
    ],
    pair: ['Soured cream', 'Sausage', 'Sauerkraut', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a frying pan with a little butter.',
    nut: [318, 5, 34, 18, 5, 7, 320]
  },

  'philly-chicken-sandwich': {
    d: 'Sliced chicken, peppers and onions cooked on a hot pan and piled into rolls under melted provolone.',
    meta: 'Philly chicken sandwich: sliced chicken, peppers and onions under melted provolone in a roll. Four servings, cooked for 15 minutes.',
    kw: ['philly chicken sandwich', 'chicken philly sandwich', 'philly cheese chicken sandwich', 'chicken philly with peppers', 'chicken philly with provolone'],
    why: 'Slice the chicken as thin as you can. That is the most useful instruction, because thin slices cook in a few minutes in a hot pan and stay tender.\n\nA half-frozen breast is much easier to slice thin, so give it 20 minutes in the freezer first. Fry the onions and peppers in a hot pan for 6 minutes until they soften and char at the edges, then push them aside and cook the chicken for 4 minutes with the seasoning. **Keep the pan hot.** A cool pan makes the meat release its water and stew.\n\nMix the chicken and vegetables together, then pile them into four splits of roll. Lay the provolone over the top and grill or bake for 2 minutes until it melts into the filling.\n\nEat while it is hot, with plenty of napkins. Use soft, slightly chewy rolls, as hard crusts shatter and squeeze the filling out.',
    ing: [
      '500 g chicken breast, very thinly sliced',
      '1 onion, about 150 g, sliced',
      '1 green pepper, about 150 g, sliced',
      '2 tbsp vegetable oil',
      '1 tsp garlic powder',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '300 g soft sandwich rolls, in four',
      '120 g provolone, sliced'
    ],
    st: [
      'Heat half the oil in a large pan and fry the onion and pepper for 6 minutes until soft and charred. Push to one side.',
      'Add the rest of the oil and the chicken with the garlic powder, salt and pepper and cook for 4 minutes until no pink remains.',
      'Mix the chicken and vegetables and divide between the split rolls.',
      'Lay the provolone on top and grill for 2 minutes until melted. Serve hot.'
    ],
    tips: [
      'Freeze the chicken for 20 minutes to slice it thin.',
      'Keep the pan hot.',
      'Cook the chicken in batches if it crowds.',
      'Melt the cheese just before serving.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Dill pickles', 'Green salad'],
    store: 'Best eaten straight away. Keep the filling in the fridge for 2 days and reheat it before filling fresh rolls.',
    nut: [549, 44, 46, 21, 3, 7, 940]
  },

  'piri-piri-prawns': {
    d: 'Raw prawns tossed in a garlic, chilli and lemon piri piri sauce, grilled for a few minutes until pink.',
    meta: 'Piri piri prawns: prawns in a garlic, chilli and lemon sauce, cooked for 6 minutes. Four servings as a starter.',
    kw: ['piri piri prawns', 'piri piri prawns recipe', 'piri piri prawns with garlic', 'portuguese piri piri prawns', 'piri piri prawn starter'],
    why: 'The first sign it is ready is the smell: chilli and garlic hitting a hot pan and turning fragrant within seconds. That is also the signal to take care, because garlic burns fast.\n\nMake the sauce first by blending the chillies, garlic, paprika, lemon juice, vinegar and oil. Toss the prawns in half and keep the rest for dipping, since sauce that touched raw prawns should not be served as it is. Cook the prawns in a very hot pan for 2 to 3 minutes a side. **They are done when they turn pink and curl into a loose C.** A tight ring means overcooked.\n\nPrawns cook in minutes, so have the plates ready before they go on the heat.\n\nServe with lemon wedges, bread for the sauce and a cold drink to take the heat down. Wear gloves, or wash your hands well, after chopping the chillies, and keep them away from your eyes.',
    ing: [
      '500 g raw king prawns, peeled',
      '2 red chillies, about 20 g, chopped',
      '4 cloves garlic, crushed',
      '1 tsp smoked paprika',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tbsp red wine vinegar',
      '1/2 tsp salt',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Blend the chillies, garlic, paprika, 2 tbsp of the oil, lemon juice, vinegar and salt to a rough sauce. Set half aside for dipping.',
      'Toss the prawns in the other half.',
      'Heat the remaining oil in a very hot pan and cook the prawns for 3 minutes a side until pink.',
      'Serve with the reserved sauce and lemon wedges.'
    ],
    tips: [
      'Use a very hot pan.',
      'Cook for no more than 3 minutes a side.',
      'Keep the dipping sauce away from the raw prawns.',
      'Use less chilli for a milder dish.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Chips', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [219, 26, 4, 11, 1, 1, 480]
  },

  'ploughmans-sandwich': {
    d: 'Crusty bread filled with mature cheddar, sweet pickle, sliced apple, lettuce and butter.',
    meta: 'Ploughmans sandwich: crusty bread filled with mature cheddar, pickle, apple and lettuce. Two servings, no cooking.',
    kw: ['ploughmans sandwich', 'ploughmans cheese sandwich', 'cheddar and pickle sandwich', 'ploughmans lunch sandwich', 'british ploughmans sandwich'],
    why: 'What makes a ploughman\'s a ploughman\'s? Cheese, pickle and bread, with something fresh to cut through them. Everything else is optional.\n\nThe cheese does most of the work, so use a mature cheddar with real flavour and cut it in thick slices rather than grating it. The pickle supplies sweetness and tang, and a thin layer is enough. Slices of crisp apple add crunch and a cool, fresh sharpness. **Butter the bread right to the edges.** It stops the pickle soaking in and keeps the bread from going soft.\n\nLayer the lettuce on the butter, then the cheese, the apple and the pickle on top. Press the lid down firmly and cut in half with a serrated knife.\n\nIt packs well for a walk or a picnic, and tastes better a few minutes after it is made. Swap the cheddar for a crumbly cheese such as Cheshire if you prefer something milder.',
    ing: [
      '4 thick slices crusty bread, about 160 g',
      '20 g butter, softened',
      '120 g mature cheddar, sliced',
      '2 tbsp sweet pickle',
      '1 apple, about 150 g, thinly sliced',
      '40 g lettuce leaves'
    ],
    st: [
      'Butter the bread right to the edges.',
      'Lay the lettuce on two slices, then the cheddar and the apple.',
      'Spread the pickle on top, then close with the other slices.',
      'Press down firmly and cut in half with a serrated knife.'
    ],
    tips: [
      'Butter to the edges.',
      'Slice the cheese thick.',
      'Slice the apple just before using.',
      'Use a serrated knife to cut it.'
    ],
    pair: ['Pickled onions', 'Crisps', 'Tomato soup', 'Cider'],
    store: 'Best eaten within a few hours. Keeps wrapped in the fridge for 1 day.',
    nut: [599, 23, 57, 31, 4, 16, 900]
  },

  'po-boy-sandwich': {
    d: 'Cornmeal-fried prawns piled into a crusty roll with lettuce, tomato, pickles and remoulade.',
    meta: 'Po boy sandwich: cornmeal-fried prawns in a crusty roll with lettuce, tomato and remoulade. Four servings, cooked for 10 minutes.',
    kw: ['po boy sandwich', 'prawn po boy sandwich', 'shrimp po boy', 'new orleans po boy sandwich', 'fried prawn po boy'],
    why: 'This is what to make on a hot summer day, when the idea of a long cook is more than you want. The frying takes minutes, and the build is the fun part.\n\nToss the prawns in seasoned flour and buttermilk, then in cornmeal mixed with Cajun seasoning. The cornmeal gives a sandy crunch that flour alone cannot. Shallow-fry in hot oil for about 2 minutes a side, until deep gold. **Do not crowd the pan.** The oil cools, and the coating soaks it up.\n\nMake the remoulade by stirring mayonnaise with mustard, lemon juice, hot sauce and chopped pickles. Split the rolls, toast them lightly, spread both sides with the sauce and layer in the lettuce, tomato and prawns.\n\nEat straight away, while the prawns are still crisp. A fresh, crackly loaf of French-style bread gives the proper contrast with the soft filling. Season the prawns well. Shallow frying uses far less oil than deep frying, and gives much the same crust.',
    ing: [
      '500 g raw peeled prawns',
      '100 ml buttermilk',
      '60 g plain flour',
      '80 g fine cornmeal',
      '2 tsp Cajun seasoning',
      '60 ml vegetable oil, for shallow frying',
      '300 g crusty rolls, in four',
      '80 g mayonnaise',
      '1 tsp Dijon mustard',
      '1 tbsp lemon juice',
      '1 tsp hot sauce',
      '2 tbsp chopped dill pickles',
      '60 g shredded lettuce',
      '2 tomatoes, about 200 g, sliced'
    ],
    st: [
      'Stir the mayonnaise, mustard, lemon juice, hot sauce and pickles into a remoulade.',
      'Toss the prawns in the buttermilk, then the flour, then the cornmeal mixed with the Cajun seasoning.',
      'Heat the oil in a wide frying pan until a crumb sizzles at once and fry the prawns in batches for 2 minutes a side until deep gold. Drain on kitchen paper.',
      'Split and lightly toast the rolls, spread with the remoulade and fill with the lettuce, tomato and prawns. Serve at once.'
    ],
    tips: [
      'Keep the oil hot enough to sizzle.',
      'Fry in small batches.',
      'Drain on kitchen paper.',
      'Fill the rolls at the last moment.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Dill pickles', 'Corn on the cob'],
    store: 'Best eaten straight away. Keep the remoulade in the fridge for 3 days.',
    nut: [729, 37, 71, 33, 5, 7, 850]
  },

  'pork-adobo': {
    d: 'Pork belly or shoulder simmered in soy sauce, vinegar, garlic and bay leaves until tender, then reduced to a glossy sauce.',
    meta: 'Pork adobo: pork simmered in soy sauce, vinegar, garlic and bay leaves until tender. Four servings, cooked for 45 minutes.',
    kw: ['pork adobo', 'filipino pork adobo', 'pork adobo with soy and vinegar', 'classic pork adobo', 'pork adobo recipe'],
    why: 'A dish for a family table of four, and one that is better the next day. Adobo is simple: soy sauce, vinegar, garlic, bay and pepper, with the pork cooking in all of it.\n\nBrown the pork first for flavour and fat, then add the soy sauce, vinegar, garlic, bay leaves, peppercorns and water. **Do not stir for the first few minutes after the vinegar goes in.** Letting it come to a simmer undisturbed cooks off the raw edge of the vinegar.\n\nSimmer gently, covered, for 40 minutes until the pork is tender. Then take off the lid and boil for 5 minutes until the sauce reduces to a glossy coating. If it becomes too salty, add a little water.\n\nServe with steamed rice, which soaks up the sauce. Soy sauces vary in salt, so taste before you add any more. Pork belly makes it richer, and shoulder makes it leaner, so choose by how much fat you like.',
    ing: [
      '800 g pork shoulder, cut into chunks',
      '1 tbsp vegetable oil',
      '80 ml soy sauce',
      '80 ml white vinegar',
      '6 cloves garlic, crushed',
      '3 bay leaves',
      '1 tsp black peppercorns',
      '200 ml water',
      '1 tsp sugar'
    ],
    st: [
      'Brown the pork in the oil in a heavy pan for 6 minutes.',
      'Add the soy sauce, vinegar, garlic, bay leaves, peppercorns, water and sugar and bring to a simmer without stirring.',
      'Cover and simmer gently for 40 minutes until tender.',
      'Take off the lid and boil for 5 minutes until the sauce is glossy and thick.'
    ],
    tips: [
      'Brown the pork first.',
      'Do not stir right after the vinegar goes in.',
      'Taste before adding salt.',
      'Make it a day ahead if you can.'
    ],
    pair: ['Steamed rice', 'Garlic rice', 'Fried egg', 'Steamed greens'],
    store: 'Keeps in the fridge for 4 days. Reheat gently until hot all the way through.',
    nut: [456, 38, 4, 32, 0, 1, 1300]
  },

  'pork-ribs-in-the-oven': {
    d: 'Pork ribs rubbed with paprika, brown sugar and garlic, wrapped in foil and baked slowly, then glazed with barbecue sauce.',
    meta: 'Pork ribs in the oven: spice-rubbed ribs baked slowly in foil and glazed with barbecue sauce. Four servings, baked for 2 hours 30 minutes.',
    kw: ['pork ribs in the oven', 'oven baked pork ribs', 'slow baked pork ribs', 'oven pork ribs with barbecue sauce', 'oven ribs'],
    why: 'Pork ribs, a dry rub, foil and time: four things, and the time does most of the work. Low heat for a long time turns the tough meat tender and lets it pull away from the bone.\n\nPeel the thin membrane from the back of the rack if you can, because it stays tough and chewy. Mix the paprika, sugar, garlic powder, salt and pepper and rub it over both sides. Wrap the ribs tightly in foil, which traps steam and keeps them moist. **Seal the foil well.** A leaky parcel dries the meat out.\n\nBake at 150°C for 2 hours. Open the foil, brush with barbecue sauce and bake uncovered at 220°C for 30 minutes until sticky and lightly charred. If your oven runs hot, check the glaze at 20 minutes.\n\nRest for 10 minutes, then cut between the bones. If the ribs are not tender after 2 hours, rewrap them and bake for another 20 minutes.',
    ing: [
      '1.5 kg pork ribs',
      '2 tbsp smoked paprika',
      '2 tbsp brown sugar',
      '1 tbsp garlic powder',
      '1 tbsp salt',
      '1 tsp black pepper',
      '150 g barbecue sauce'
    ],
    st: [
      'Heat the oven to 150°C. Mix the paprika, sugar, garlic powder, salt and pepper and rub all over the ribs.',
      'Wrap tightly in two layers of foil on a tray and bake for 2 hours.',
      'Open the foil, brush the ribs with the barbecue sauce and raise the oven to 220°C.',
      'Bake uncovered for 30 minutes until sticky and lightly charred. Rest for 10 minutes and cut between the bones.'
    ],
    tips: [
      'Remove the membrane from the back.',
      'Seal the foil well.',
      'If your oven runs hot, check the glaze at 20 minutes.',
      'Rest the ribs before cutting.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Baked beans', 'Potato wedges'],
    store: 'Keeps in the fridge for 3 days. Reheat wrapped in foil in a medium oven.',
    nut: [1075, 58, 24, 83, 2, 18, 2370]
  },

  'pork-souvlaki': {
    d: 'Cubes of pork marinated in lemon, oregano and garlic, threaded on skewers and grilled until browned.',
    meta: 'Pork souvlaki: pork cubes in lemon, oregano and garlic, grilled on skewers for 12 minutes. Four servings.',
    kw: ['pork souvlaki', 'greek pork souvlaki', 'pork souvlaki skewers', 'grilled pork souvlaki', 'pork souvlaki with tzatziki'],
    why: 'A dish for a table of four on a warm evening, with pitta, tzatziki and a bowl of salad in the middle. Skewers cook fast and are easy to share.\n\nCut the pork into 3 cm cubes of an even size so they cook together. Mix the lemon juice, oil, garlic and oregano, toss it through the pork and leave it for 15 minutes while the grill heats. A short marinade is enough, and a long one in lemon turns the surface of the meat mushy. **Do not overcook the pork.** Souvlaki should be juicy, not dry.\n\nThread onto skewers, leaving a little space between the cubes. Grill over a high heat for 12 minutes, turning every 3 minutes, until browned and cooked through. If you use wooden skewers, soak them in water for 20 minutes first.\n\nServe in warm pitta with tzatziki, tomato and onion. Pork shoulder suits grilling best, as the fat keeps the cubes moist over a high heat.',
    ing: [
      '700 g pork shoulder, cut into 3 cm cubes',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '3 cloves garlic, crushed',
      '2 tsp dried oregano',
      '1 tsp salt',
      '4 pitta breads, about 280 g',
      '150 g tzatziki',
      '2 tomatoes, about 200 g, sliced'
    ],
    st: [
      'Mix the lemon juice, oil, garlic, oregano and salt and toss with the pork. Leave for 15 minutes.',
      'Heat the grill to high. Thread the pork onto skewers, leaving a little space between the cubes.',
      'Grill for 12 minutes, turning every 3 minutes, until browned and cooked through.',
      'Warm the pitta and serve with the souvlaki, tzatziki and tomato.'
    ],
    tips: [
      'Cut the cubes the same size.',
      'Keep the marinade short.',
      'Soak wooden skewers for 20 minutes.',
      'Leave a little space between the cubes.'
    ],
    pair: ['Greek salad', 'Tzatziki', 'Lemon potatoes', 'Warm pitta'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in a pan to avoid drying the pork.',
    nut: [671, 40, 40, 39, 3, 6, 1130]
  },

  'pork-and-apple-casserole': {
    d: 'Pork shoulder, apples, onions and cider simmered slowly in the oven until tender, in a mustard-spiked sauce.',
    meta: 'Pork and apple casserole: pork shoulder, apple and cider baked slowly until tender. Six servings, baked for 90 minutes.',
    kw: ['pork and apple casserole', 'pork casserole with apples and cider', 'slow baked pork and apple casserole', 'pork and cider casserole', 'british pork and apple casserole'],
    why: 'Use the apples twice. Half goes in at the start and melts into the sauce, and half goes in near the end and keeps its shape. The first gives sweetness and body, and the second gives a fresh bite.\n\nBrown the pork in batches until it takes a deep colour, because the browned bits on the pan are the base of the flavour. Fry the onions in the same pan, stir in the flour and mustard, and pour in the cider, scraping up the browned bits. **Do not crowd the pork.** Crowded meat steams and turns grey.\n\nAdd the stock, thyme and first half of the apple, cover and bake at 160°C for 60 minutes. Stir in the rest of the apple and bake for 30 minutes more. If your oven runs hot, check at 80 minutes in total.\n\nThe pork is ready when it breaks with a spoon. Serve with mash and greens.',
    ing: [
      '1 kg pork shoulder, cut into chunks',
      '2 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '2 tbsp plain flour',
      '1 tbsp wholegrain mustard',
      '300 ml dry cider',
      '300 ml chicken stock',
      '4 sprigs thyme, about 5 g',
      '3 apples, about 450 g, cored and chopped',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 160°C. Brown the pork in the oil in batches for 8 minutes.',
      'Fry the onions in the same pan for 5 minutes, stir in the flour and mustard, then pour in the cider, scraping up the browned bits.',
      'Add the stock, thyme, salt, pepper and half the apple, cover and bake for 60 minutes.',
      'Stir in the remaining apple and bake for 30 minutes more until the pork is tender.'
    ],
    tips: [
      'Brown the pork in batches.',
      'Add the apple in two stages.',
      'If your oven runs hot, check at 80 minutes.',
      'Use a firm cooking apple for the second half.'
    ],
    pair: ['Mashed potato', 'Cabbage', 'Crusty bread', 'Buttered carrots'],
    store: 'Keeps in the fridge for 3 days. Reheat gently until hot all the way through.',
    nut: [469, 32, 20, 29, 3, 11, 710]
  },

  'potato-kugel': {
    d: 'Grated potato and onion mixed with egg and oil and baked in a hot tin until the top is crisp and the middle is soft.',
    meta: 'Potato kugel: grated potato and onion baked with egg until crisp on top and soft inside. Eight servings, baked for 75 minutes.',
    kw: ['potato kugel', 'baked potato kugel', 'classic potato kugel', 'crispy potato kugel', 'potato and onion kugel'],
    why: 'A dish for a table of eight, and one that holds well on a buffet. Potato kugel is a baked pudding of grated potato and onion, with a crisp crust and a soft middle.\n\nGrate the potatoes and onion and squeeze them hard in a clean tea towel, because the water they hold makes the kugel heavy and grey. Mix with the eggs, flour, salt and pepper straight away. Potatoes darken quickly once grated. **Preheat the tin with the oil in it.** Hot oil on the base sets the bottom crust the moment the batter goes in.\n\nPour in the batter, level it and bake at 200°C for 75 minutes. If your oven runs hot, check at 60 minutes. The top should be deep brown and crackly at the edges.\n\nLeave it for 10 minutes before cutting into squares. A spoonful of apple sauce or soured cream on the side suits it well.',
    ing: [
      '1.2 kg floury potatoes, peeled',
      '2 onions, about 300 g',
      '4 eggs, about 200 g, beaten',
      '60 g plain flour',
      '80 ml vegetable oil',
      '2 tsp salt',
      '1 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Pour the oil into a 23 x 33 cm tin and heat it for 10 minutes.',
      'Grate the potatoes and onions and squeeze hard in a clean tea towel.',
      'Mix at once with the eggs, flour, salt and pepper.',
      'Pour into the hot tin, level and bake for 75 minutes until deep brown and crisp at the edges.',
      'Rest for 10 minutes and cut into squares.'
    ],
    tips: [
      'Squeeze the potatoes dry.',
      'Work fast, as grated potato darkens.',
      'If your oven runs hot, check at 60 minutes.',
      'Heat the oil in the tin first.'
    ],
    pair: ['Apple sauce', 'Soured cream', 'Roast chicken', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the top.',
    nut: [276, 7, 35, 12, 4, 3, 630]
  },

  'noodle-kugel': {
    d: 'Egg noodles baked with cream cheese, soured cream, eggs and sugar into a sweet pudding with a crisp top.',
    meta: 'Noodle kugel: egg noodles baked with cream cheese, soured cream and eggs into a sweet pudding. Ten servings, baked for 50 minutes.',
    kw: ['noodle kugel', 'sweet noodle kugel', 'baked noodle kugel', 'cream cheese noodle kugel', 'egg noodle kugel'],
    why: 'Salt the water, but leave the noodles slightly firm. They finish cooking in the custard, and noodles that start soft turn to mush. That is the one fix this recipe needs.\n\nBlend the cream cheese with the sugar and eggs until smooth, then stir in the soured cream, milk, vanilla and cinnamon. Fold in the drained noodles and pour everything into a buttered dish. **Make sure the noodles are all under the custard.** Any that poke out dry into hard strands in the oven.\n\nFor the top, mix cornflake crumbs with melted butter and a little sugar and scatter over. Bake at 180°C for 50 minutes, until the custard is set with a slight wobble in the middle. If your oven runs hot, check at 40 minutes.\n\nIt is served warm, cut into squares, and holds well for a crowd. A mix of cinnamon and a little sugar sprinkled on top gives a darker, sweeter crust.',
    ing: [
      '350 g egg noodles',
      '250 g cream cheese',
      '200 g soured cream',
      '4 eggs, about 200 g',
      '100 g caster sugar',
      '250 ml whole milk',
      '2 tsp vanilla extract',
      '1 tsp ground cinnamon',
      '40 g butter, melted',
      '50 g cornflake crumbs'
    ],
    st: [
      'Heat the oven to 180°C and butter a 23 x 33 cm dish. Boil the noodles for 4 minutes, 2 minutes under the packet time, and drain.',
      'Beat the cream cheese, soured cream, eggs, 80 g of the sugar, milk, vanilla and cinnamon until smooth.',
      'Fold in the noodles and pour into the dish.',
      'Mix the cornflake crumbs with the butter and remaining sugar and scatter over the top.',
      'Bake for 50 minutes until set and golden. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Undercook the noodles.',
      'Beat the cream cheese until smooth.',
      'If your oven runs hot, check at 40 minutes.',
      'Rest it before cutting.'
    ],
    pair: ['Fresh berries', 'Apple sauce', 'Roast chicken', 'Fruit salad'],
    store: 'Keeps in the fridge for 4 days. Reheat in a medium oven or eat cold.',
    nut: [396, 11, 43, 20, 1, 14, 160]
  },

  'prawn-laksa': {
    d: 'Prawns and rice noodles in a coconut milk broth built on laksa paste, with tofu puffs, bean sprouts and lime.',
    meta: 'Prawn laksa: prawns and rice noodles in a spicy coconut broth with laksa paste. Four servings, cooked for 20 minutes.',
    kw: ['prawn laksa', 'malaysian prawn laksa', 'prawn laksa with coconut milk', 'spicy prawn laksa', 'laksa with prawns'],
    why: 'Laksa paste, coconut milk, stock, prawns and noodles: five things that make a rich, spicy bowl from a short ingredient list. The paste does most of the work.\n\nFry the paste in the oil for 2 minutes until it smells deep and the oil separates at the edges. That step cooks out the raw taste and wakes up the spices. **Do not skip frying the paste.** Stirred straight into liquid it tastes flat.\n\nAdd the stock and coconut milk and simmer gently for 10 minutes. Cook the rice noodles separately, according to the packet, because they soak up broth and cloud it. Add the prawns to the broth for the last 3 minutes, when they turn pink.\n\nDivide the noodles between four bowls, ladle over the broth and prawns and top with bean sprouts, tofu puffs, coriander and a squeeze of lime. Laksa pastes vary in heat and salt, so start with three spoonfuls and taste before adding the fourth.',
    ing: [
      '4 tbsp laksa paste',
      '1 tbsp vegetable oil',
      '600 ml chicken stock',
      '400 ml coconut milk',
      '300 g raw peeled prawns',
      '200 g rice noodles',
      '100 g tofu puffs, halved',
      '100 g bean sprouts',
      '10 g coriander leaves',
      '1 lime, cut into wedges'
    ],
    st: [
      'Fry the laksa paste in the oil in a large pan for 2 minutes.',
      'Add the stock and coconut milk and simmer gently for 10 minutes.',
      'Meanwhile cook the rice noodles in a separate pan as the packet says and drain.',
      'Add the tofu puffs and prawns to the broth for 3 minutes until the prawns are pink.',
      'Divide the noodles between four bowls, ladle over the broth and top with the bean sprouts, coriander and lime.'
    ],
    tips: [
      'Fry the paste first.',
      'Cook the noodles separately.',
      'Do not overcook the prawns.',
      'Add the lime at the table.'
    ],
    pair: ['Lime wedges', 'Fresh chilli', 'Cucumber salad', 'Iced tea'],
    store: 'Keep the broth and noodles apart in the fridge for 2 days. Reheat the broth until simmering and add the noodles to warm.',
    nut: [530, 25, 49, 26, 2, 4, 960]
  },

  'prawn-pasta': {
    d: 'Spaghetti tossed with garlic prawns, cherry tomatoes, chilli, white wine and parsley.',
    meta: 'Prawn pasta: spaghetti with garlic prawns, cherry tomatoes, chilli and white wine. Four servings, cooked for 15 minutes.',
    kw: ['prawn pasta', 'garlic prawn pasta', 'spaghetti with prawns', 'prawn and cherry tomato pasta', 'prawn pasta with chilli and garlic'],
    why: 'Cook the prawns last. That is the whole rule, and it takes about three minutes. Prawns need only to turn pink, and anything past that makes them rubbery.\n\nBoil the spaghetti first and keep a mugful of the water. While it cooks, soften the garlic and chilli in the oil, then add the cherry tomatoes and wine and let them burst and simmer for 5 minutes into a loose sauce. **Add the prawns only when the sauce is ready.** They cook in the sauce while you toss the pasta through.\n\nThe prawns are done when they have curled and turned pink all over, after 2 to 3 minutes. Add a splash of the pasta water if the sauce looks tight.\n\nScatter over the parsley and serve straight away. Cheese is not usual with seafood pasta, so leave it off. If you only have cooked prawns, stir them in for the last 30 seconds just to warm them through.',
    ing: [
      '350 g spaghetti',
      '400 g raw peeled prawns',
      '3 tbsp olive oil',
      '4 cloves garlic, sliced',
      '1/2 tsp chilli flakes',
      '300 g cherry tomatoes, halved',
      '100 ml dry white wine',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the spaghetti for 10 minutes and drain, keeping a mugful of the water.',
      'Warm the oil, add the garlic and chilli for 1 minute, then the tomatoes and wine. Simmer for 5 minutes until the tomatoes burst.',
      'Add the prawns and salt and cook for 3 minutes until pink.',
      'Toss in the spaghetti with a splash of pasta water and the parsley. Serve at once.'
    ],
    tips: [
      'Add the prawns last.',
      'Keep some pasta water.',
      'Do not cook the prawns past pink.',
      'Serve straight away.'
    ],
    pair: ['Rocket salad', 'Crusty bread', 'Dry white wine', 'Lemon wedges'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [520, 32, 71, 12, 4, 5, 460]
  },

  'pumpkin-and-sage-pasta': {
    d: 'Pasta in a sauce of roasted pumpkin, crisp sage and butter, finished with parmesan.',
    meta: 'Pumpkin and sage pasta: pasta in a sauce of roasted pumpkin, sage butter and parmesan. Four servings, cooked for 25 minutes.',
    kw: ['pumpkin and sage pasta', 'roasted pumpkin and sage pasta', 'pumpkin sage butter pasta', 'creamy pumpkin pasta with sage', 'pumpkin pasta with parmesan'],
    why: 'Sage and pumpkin are a classic pairing in Italian cooking, and the reason is simple: the herb\'s peppery, piney edge cuts the sweetness of the squash.\n\nRoast the pumpkin cubes with oil and salt at 220°C for 25 minutes, until the edges are browned and soft. Roasting concentrates the sweetness, where boiling would make it watery. Mash half the pumpkin with a splash of pasta water into a rough sauce and keep the other half in chunks. **Fry the sage in the butter until crisp.** It turns dark green, crackles and loses its raw taste.\n\nToss the cooked pasta with the pumpkin, the sage butter and parmesan. Loosen it with pasta water until the sauce clings.\n\nServe with the crisp sage leaves on top and plenty of black pepper. Butternut squash is the easiest to peel and gives the same sweet, smooth result. Peel it with a sharp peeler and cut it into cubes of an even size so they roast evenly.',
    ing: [
      '600 g pumpkin, peeled and cut into 2 cm cubes',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '350 g penne',
      '50 g butter',
      '15 g fresh sage leaves',
      '2 cloves garlic, crushed',
      '50 g parmesan, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C. Toss the pumpkin with the oil and salt on a tray and roast for 25 minutes.',
      'Boil the penne for 10 minutes and drain, keeping a mugful of the water.',
      'Melt the butter, fry the sage for 1 minute until crisp, then add the garlic for 30 seconds.',
      'Mash half the pumpkin with a splash of pasta water and stir into the butter, then add the pasta, remaining pumpkin and parmesan.',
      'Loosen with pasta water, season with the pepper and serve.'
    ],
    tips: [
      'Roast the pumpkin, do not boil it.',
      'Fry the sage until crisp.',
      'If your oven runs hot, check at 20 minutes.',
      'Loosen with pasta water.'
    ],
    pair: ['Rocket salad', 'Garlic bread', 'Roasted hazelnuts', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [598, 18, 82, 22, 6, 7, 500]
  }
};
