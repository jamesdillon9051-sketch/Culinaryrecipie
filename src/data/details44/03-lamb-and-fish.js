'use strict';

/**
 * Volume forty-four — lamb and fish, third part.
 *
 * Lamb navarin, hotpot, chops, samosas, pilaf and a pappardelle ragu, then
 * fish: poke bowls, a salmon quiche and tacos, sesame tuna, cod chowder,
 * tacos and curry, smoked haddock risotto and fishcakes, and a fish pie.
 * Times are the recipe's own; ovens differ, so each method says when to
 * check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'lamb-navarin': {
    d: 'Lamb shoulder stewed with turnips, carrots, potatoes and peas in a light tomato and thyme broth.',
    meta: 'Lamb navarin: lamb shoulder stewed with spring vegetables in a light tomato and thyme broth. Six servings, cooked for 100 minutes.',
    kw: ['lamb navarin', 'french lamb navarin', 'lamb navarin with spring vegetables', 'lamb and vegetable stew navarin', 'classic lamb navarin'],
    why: 'Brown the lamb in batches, and let each batch go properly dark. That is the most useful instruction, because a navarin has no cream or wine to hide behind, and the browning is where the flavour comes from.\n\nSeason the lamb and sear it in a hot pot until every side is deep brown. Take it out, soften the onion, stir in the flour and tomato purée and add the stock. Return the lamb with the thyme and bay and simmer gently, partly covered, for 60 minutes. **Add the vegetables in stages.** Carrots and turnips go in for the last 30 minutes, potatoes for the last 20, and peas for the last 5.\n\nThe lamb should be tender enough to cut with a spoon and the broth lightly thickened. If it is too thin, boil it uncovered for 5 minutes.\n\nThe finished stew is light, rather than rich, and tastes of the vegetables as much as the meat. Skim off any fat before serving.',
    ing: [
      '1 kg lamb shoulder, cut into 4 cm cubes',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '750 ml lamb stock',
      '4 sprigs thyme, about 5 g',
      '1 bay leaf',
      '300 g carrots, cut into chunks',
      '250 g turnips, cut into chunks',
      '400 g potatoes, halved',
      '100 g frozen peas'
    ],
    st: [
      'Season the lamb with the salt and brown in the oil in batches for 8 minutes each. Set aside.',
      'Soften the onion in the same pot for 5 minutes, then stir in the flour and tomato purée for 1 minute.',
      'Pour in the stock, scraping the pot, and add the lamb, thyme and bay leaf. Simmer gently, partly covered, for 60 minutes.',
      'Add the carrots and turnips and cook for 10 minutes, then the potatoes for 20 minutes more.',
      'Stir in the peas for the last 5 minutes. Skim off any fat and serve.'
    ],
    tips: [
      'Brown the lamb well.',
      'Add the vegetables in stages.',
      'Skim the fat before serving.',
      'Keep the simmer gentle.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Dijon mustard', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat gently until hot all the way through.',
    nut: [591, 33, 27, 39, 5, 7, 1000]
  },

  'lamb-hotpot': {
    d: 'Lamb neck and onions in a thick gravy under a lid of overlapping sliced potatoes, baked slowly until the potatoes are crisp.',
    meta: 'Lamb hotpot: lamb and onions in gravy under overlapping sliced potatoes, baked for 2 hours 30 minutes. Six servings.',
    kw: ['lamb hotpot', 'lancashire style lamb hotpot', 'lamb hotpot with sliced potatoes', 'oven baked lamb hotpot', 'traditional lamb hotpot'],
    why: 'What separates a hotpot from a stew with potatoes on top? The potatoes. They are sliced thin, overlapped like roof tiles and brushed with butter, so that they crisp on top and steam in the gravy beneath.\n\nBrown the lamb and soften the onions, then stir in the flour and pour on the stock with the Worcestershire sauce and bay leaves. Simmer for 10 minutes until it starts to thicken, then tip it into a deep casserole. **Slice the potatoes thin and even, about 3 mm.** Thick slices stay hard at the end.\n\nOverlap the slices in tight rings, brush with the melted butter and season. Cover and bake at 160°C for 2 hours, then uncover and bake at 200°C for 30 minutes to brown the top. If your oven runs hot, check the top at 20 minutes.\n\nThe lamb should be soft and the potato lid crisp at the edges.',
    ing: [
      '900 g lamb neck fillet, cut into chunks',
      '2 tbsp vegetable oil',
      '3 onions, about 450 g, sliced',
      '2 tbsp plain flour',
      '500 ml lamb stock',
      '2 tbsp Worcestershire sauce',
      '2 bay leaves',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '900 g potatoes, peeled and thinly sliced',
      '40 g butter, melted',
      '300 g carrots, sliced'
    ],
    st: [
      'Heat the oven to 160°C. Brown the lamb in the oil in batches for 8 minutes each and set aside.',
      'Soften the onions in the same pan for 8 minutes, stir in the flour for 1 minute, then add the stock, Worcestershire sauce, bay leaves, salt and pepper and simmer for 10 minutes.',
      'Layer the lamb, carrots and gravy in a deep casserole.',
      'Overlap the potato slices in tight rings on top, brush with the melted butter and season.',
      'Cover and bake for 2 hours. Uncover, raise the oven to 200°C and bake for 30 minutes until the potatoes are golden and crisp.'
    ],
    tips: [
      'Slice the potatoes thin and even.',
      'Overlap them tightly.',
      'If your oven runs hot, check the top at 20 minutes.',
      'Brush the potatoes with butter.'
    ],
    pair: ['Pickled red cabbage', 'Buttered greens', 'Crusty bread', 'Mint sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the potatoes.',
    nut: [630, 31, 41, 38, 6, 7, 870]
  },

  'lamb-chops-with-mint-sauce': {
    d: 'Lamb chops seared in a hot pan until pink in the middle, served with a sharp mint sauce of vinegar and sugar.',
    meta: 'Lamb chops with mint sauce: seared lamb chops with a sharp mint, vinegar and sugar sauce. Four servings, cooked for 12 minutes.',
    kw: ['lamb chops with mint sauce', 'pan seared lamb chops with mint sauce', 'british lamb chops with mint sauce', 'lamb chops and mint sauce', 'lamb chops with fresh mint sauce'],
    why: 'Most home versions come out grey and tough, and the fix is a hot pan and a short cook. Lamb chops are thin, and 4 minutes a side is plenty for pink in the middle.\n\nTake the chops out of the fridge 20 minutes before cooking so they are not cold in the middle. Pat dry, brush with oil and season well on both sides. Heat the pan until it is smoking, then lay the chops down away from you. Do not move them for 3 minutes, until they are deep brown. Turn and cook for 3 to 4 minutes more. **Stand the chops on their fat edge for the last minute.** The fat renders and crisps.\n\nRest for 5 minutes on a warm plate.\n\nFor the sauce, chop the mint finely, stir it with the sugar and 2 tbsp of boiling water until the sugar dissolves, then add the vinegar. Leave it for 10 minutes so that the mint softens.',
    ing: [
      '8 lamb chops, about 800 g',
      '1 tbsp vegetable oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '30 g fresh mint leaves, finely chopped',
      '2 tsp sugar',
      '2 tbsp boiling water',
      '3 tbsp white wine vinegar'
    ],
    st: [
      'Take the chops out of the fridge 20 minutes ahead. Pat dry, brush with the oil and season with the salt and pepper.',
      'Stir the mint with the sugar and boiling water until the sugar dissolves, then add the vinegar. Leave for 10 minutes.',
      'Heat a heavy pan until smoking and sear the chops for 3 minutes without moving, then turn and cook for 3 to 4 minutes more.',
      'Stand the chops on their fat edge for 1 minute, then rest for 5 minutes and serve with the sauce.'
    ],
    tips: [
      'Bring the chops to room temperature.',
      'Use a very hot pan.',
      'Do not move the chops while they sear.',
      'Rest them before serving.'
    ],
    pair: ['New potatoes', 'Peas', 'Green beans', 'Roast carrots'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days.',
    nut: [634, 34, 3, 54, 0, 2, 720]
  },

  'lamb-samosas': {
    d: 'Spiced lamb mince and peas wrapped in folded filo triangles, brushed with oil and baked until crisp.',
    meta: 'Lamb samosas: spiced lamb mince and peas in folded filo triangles, baked for 25 minutes. Twelve servings.',
    kw: ['lamb samosas', 'baked lamb samosas', 'spiced lamb samosas', 'lamb mince samosas', 'lamb samosas with peas'],
    why: 'Fry the filling until it is dry. That is the most useful instruction here, because a samosa with a wet filling soaks through its pastry and never crisps, however hot the oven.\n\nSoften the onion with the garlic and ginger, add the lamb and brown it for 6 minutes until the pan is dry. Stir in the cumin, coriander, garam masala and chilli, then the peas and a squeeze of lemon. Lamb gives a richer filling than beef and needs the lemon to lift it. **Cool the filling completely.** A hot filling steams the filo from inside.\n\nCut the filo into strips, spoon filling at one end and fold the corner over into a triangle, then keep folding along the strip. Brush with oil and seal the end.\n\nBake at 200°C for 25 minutes, turning once, until crisp and golden. If your oven runs hot, check at 20 minutes. Serve with chutney.',
    ing: [
      '300 g lamb mince',
      '1 onion, about 150 g, finely chopped',
      '2 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tbsp vegetable oil',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '100 g frozen peas',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '250 g filo pastry',
      '40 ml vegetable oil, for brushing'
    ],
    st: [
      'Soften the onion in the 1 tbsp of oil for 5 minutes, then add the garlic and ginger for 1 minute.',
      'Add the lamb and brown for 6 minutes until dry. Stir in the cumin, coriander, garam masala, chilli and salt for 1 minute, then the peas and lemon juice for 2 minutes.',
      'Tip the lamb mixture onto a plate and leave it until cold, about 20 minutes. Heat the oven to 200°C.',
      'Halve the filo sheets lengthways. Put a spoonful of lamb at the end of each strip, then fold the corner across to form a triangle, folding it over and over along the strip and sealing the end with a dab of oil.',
      'Brush the triangles all over with oil and bake on a lined tray for 25 minutes, turning once, until crisp.'
    ],
    tips: [
      'Cook the filling dry.',
      'Cool it before filling.',
      'If your oven runs hot, check at 20 minutes.',
      'Keep unused filo covered.'
    ],
    pair: ['Mint chutney', 'Mango chutney', 'Cucumber raita', 'Tamarind chutney'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the pastry.',
    nut: [178, 7, 15, 10, 1, 1, 220]
  },

  'lamb-pilaf': {
    d: 'Lamb and basmati rice cooked together in stock with onions, raisins, almonds and warm spices.',
    meta: 'Lamb pilaf: lamb and basmati rice cooked in stock with onions, raisins, almonds and spices. Four servings, cooked for 45 minutes.',
    kw: ['lamb pilaf', 'middle eastern lamb pilaf', 'lamb pilaf with rice and almonds', 'lamb pilaf recipe', 'lamb and rice pilaf'],
    why: 'A pilaf is rice cooked in a flavoured liquid until every grain has taken it up, and the word and the method are shared across the Middle East and beyond. The method does not change much: brown, toast, add liquid, cover and wait.\n\nBrown the lamb in batches, soften the onions in the same pot until golden, and stir in the cinnamon, cumin and allspice. Add the stock and simmer the lamb, covered, for 25 minutes until almost tender. The rice goes in afterwards, so the lamb needs its head start. **Rinse the rice until the water runs clear.** Surface starch makes the grains clump.\n\nStir in the rice and raisins, bring back to a simmer, cover and cook on the lowest heat for 15 minutes without lifting the lid. Rest off the heat for 10 minutes.\n\nFluff with a fork and scatter over toasted almonds and parsley. A few strands of saffron soaked in warm water make a good addition if you have them.',
    ing: [
      '500 g lamb shoulder, cut into 2 cm cubes',
      '2 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '1 tsp ground cinnamon',
      '1 tsp ground cumin',
      '1/2 tsp ground allspice',
      '750 ml lamb stock',
      '300 g basmati rice, rinsed',
      '50 g raisins',
      '1 tsp salt',
      '40 g flaked almonds, toasted',
      '15 g flat-leaf parsley, chopped'
    ],
    st: [
      'Brown the lamb in the oil in batches for 6 minutes each. Set aside.',
      'Soften the onions in the same pot for 10 minutes until golden, then stir in the cinnamon, cumin and allspice for 1 minute.',
      'Return the lamb, add the stock and salt, cover and simmer for 25 minutes.',
      'Stir in the rice and raisins, bring back to a simmer, cover and cook on the lowest heat for 15 minutes without lifting the lid.',
      'Rest for 10 minutes, fluff with a fork and scatter over the almonds and parsley.'
    ],
    tips: [
      'Rinse the rice well.',
      'Give the lamb a head start.',
      'Do not lift the lid.',
      'Rest it before fluffing.'
    ],
    pair: ['Natural yoghurt', 'Cucumber salad', 'Flatbread', 'Pickled turnips'],
    store: 'Keeps in the fridge for 3 days. Cool within an hour and reheat until piping hot.',
    nut: [794, 32, 81, 38, 4, 11, 1310]
  },

  'lamb-ragu-pappardelle': {
    d: 'Lamb shoulder cooked slowly in red wine and tomatoes with rosemary until it shreds, tossed through wide ribbons of pappardelle.',
    meta: 'Lamb ragu pappardelle: lamb braised in red wine, tomato and rosemary, tossed with pappardelle. Six servings, cooked for 2 hours.',
    kw: ['lamb ragu pappardelle', 'slow cooked lamb ragu', 'lamb ragu with pappardelle', 'italian lamb ragu', 'lamb shoulder ragu pasta'],
    why: 'Most home versions come out greasy, and the fix is to skim the fat before the pasta goes in. Lamb shoulder is a fatty cut, and it flavours the sauce generously, but too much of it leaves the pasta slick.\n\nBrown the lamb pieces well in a heavy pot, then soften the onion, carrot and celery. Add the garlic and tomato purée, pour in the wine and boil it down by half. Add the tomatoes, stock and rosemary and return the lamb. **Cover and cook at a low simmer for 2 hours.** The lamb should be soft enough to crush with a spoon.\n\nLift out the lamb, shred it with two forks and discard the bones and gristle. Skim the fat off the sauce with a spoon, return the meat and simmer for 10 minutes to thicken.\n\nBoil the pappardelle for 9 minutes, drain, toss with the ragu and a splash of pasta water, and serve with parmesan.',
    ing: [
      '1.2 kg lamb shoulder, bone in',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '1 carrot, about 100 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '3 cloves garlic, crushed',
      '2 tbsp tomato purée',
      '200 ml red wine',
      '400 g tinned chopped tomatoes',
      '300 ml lamb stock',
      '2 sprigs rosemary, about 4 g',
      '400 g pappardelle',
      '40 g parmesan, grated'
    ],
    st: [
      'Season the lamb with the salt and brown it in the oil on all sides for 12 minutes. Set aside.',
      'Soften the onion, carrot and celery in the same pot for 8 minutes, then add the garlic and tomato purée for 2 minutes.',
      'Pour in the wine and boil until halved. Add the tomatoes, stock and rosemary and return the lamb. Cover and simmer for 2 hours.',
      'Lift out the lamb, shred the meat and discard the bones. Skim the fat from the sauce, return the meat and simmer for 10 minutes.',
      'Boil the pappardelle for 9 minutes, drain, toss with the ragu and serve with the parmesan.'
    ],
    tips: [
      'Brown the lamb thoroughly.',
      'Skim the fat before serving.',
      'Keep the simmer low.',
      'Loosen with a splash of pasta water.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Roasted fennel', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. Reheat gently and boil fresh pasta.',
    nut: [856, 47, 59, 48, 4, 6, 840]
  },

  'salmon-poke-bowls': {
    d: 'Cubes of raw salmon in a soy and sesame dressing over sushi rice with avocado, cucumber, edamame and pickled ginger.',
    meta: 'Salmon poke bowls: cubed raw salmon in soy and sesame over sushi rice with avocado and cucumber. Four servings, no cooking.',
    kw: ['salmon poke bowls', 'homemade salmon poke bowls', 'salmon poke bowls with avocado', 'salmon poke bowl with sushi rice', 'salmon poke bowls with edamame'],
    why: 'Buy the fish first, and buy it for this. Poke uses raw fish, so it has to be sold as suitable to eat raw, and it should be bought the day you use it from a fishmonger you trust. If you cannot find that, choose another dish.\n\nCut the salmon into 2 cm cubes with a very sharp knife, and keep it in the fridge until the last moment. Toss it with the soy sauce, sesame oil, rice vinegar and a little honey only 10 minutes before serving. **Do not dress the fish early.** Soy and vinegar firm the flesh and turn it opaque.\n\nSpoon the cooled sushi rice into bowls. Arrange the salmon, avocado, cucumber, edamame and pickled ginger on top in sections, and finish with spring onions, sesame seeds and a drizzle of the dressing.\n\nEat straight away, and do not keep leftovers of raw fish. Skin-on salmon must have the skin removed before cubing, so ask the fishmonger to do it.',
    ing: [
      '400 g sushi-grade salmon fillet, skinless, cut into 2 cm cubes',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp rice vinegar',
      '1 tsp honey',
      '400 g cooked sushi rice, cooled',
      '1 avocado, about 150 g, sliced',
      '1/2 cucumber, about 150 g, diced',
      '100 g shelled edamame, thawed',
      '30 g pickled ginger',
      '2 spring onions, about 30 g, sliced',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Whisk the soy sauce, sesame oil, rice vinegar and honey. Toss half of it with the salmon and leave for 10 minutes in the fridge.',
      'Spoon the sushi rice into four bowls.',
      'Arrange the salmon, avocado, cucumber, edamame and pickled ginger on top in sections.',
      'Drizzle with the remaining dressing and scatter with the spring onions and sesame seeds. Serve at once.'
    ],
    tips: [
      'Use fish sold for eating raw.',
      'Keep it cold until the last moment.',
      'Dress the fish only 10 minutes ahead.',
      'Eat it the same day.'
    ],
    pair: ['Miso soup', 'Seaweed salad', 'Green tea', 'Wasabi'],
    store: 'Best eaten straight away. Do not keep leftovers that contain raw fish.',
    nut: [721, 33, 91, 25, 6, 3, 720]
  },

  'salmon-quiche': {
    d: 'A shortcrust case filled with flaked salmon, spinach and dill in a creamy egg custard, baked until just set.',
    meta: 'Salmon quiche: a shortcrust case with salmon, spinach and dill in an egg custard, baked for 40 minutes. Six servings.',
    kw: ['salmon quiche', 'salmon and spinach quiche', 'salmon quiche with dill', 'baked salmon quiche', 'salmon and dill quiche'],
    why: 'A dish for a table of six at a weekend lunch, equally good hot or cold. The salmon sits in a custard that wobbles slightly in the middle when it comes out and sets as it cools.\n\nBlind-bake the pastry case first with baking paper and beans for 15 minutes, then without them for 5. Skip this and the base turns soft and pale under the wet filling. Squeeze the cooked spinach as dry as you can, because any water left in it leaks into the custard. **Squeeze the spinach until it stops dripping.** A soggy slice is nearly always water from the greens.\n\nScatter the flaked salmon, spinach and dill in the case, whisk the eggs with the cream and milk and pour it over. Bake at 180°C for 40 minutes, until golden and just set. If your oven runs hot, check at 35 minutes.\n\nRest for 10 minutes before cutting.',
    ing: [
      '320 g shortcrust pastry, ready-rolled',
      '300 g cooked salmon, flaked',
      '150 g spinach, cooked and squeezed dry',
      '10 g fresh dill, chopped',
      '3 eggs, about 150 g',
      '150 ml double cream',
      '100 ml whole milk',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '40 g cheddar, grated'
    ],
    st: [
      'Heat the oven to 190°C. Line a 23 cm tin with the pastry and blind-bake with baking paper and beans for 15 minutes, then without for 5 minutes. Lower the oven to 180°C.',
      'Scatter the salmon, spinach and dill over the base.',
      'Whisk the eggs with the cream, milk, salt and pepper and pour into the case. Scatter over the cheese.',
      'Bake for 40 minutes until golden and just set. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Blind-bake the pastry.',
      'Squeeze the spinach dry.',
      'If your oven runs hot, check at 35 minutes.',
      'Rest it before cutting.'
    ],
    pair: ['Green salad', 'New potatoes', 'Cucumber salad', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Serve cold or reheat gently in a low oven.',
    nut: [499, 20, 26, 35, 2, 3, 650]
  },

  'salmon-tacos': {
    d: 'Spiced salmon pieces seared in a hot pan and piled into warm tortillas with slaw, avocado and lime crema.',
    meta: 'Salmon tacos: spiced seared salmon in warm tortillas with slaw, avocado and lime crema. Four servings, cooked for 10 minutes.',
    kw: ['salmon tacos', 'seared salmon tacos', 'salmon tacos with slaw', 'salmon tacos with avocado', 'salmon tacos with lime crema'],
    why: 'Season the salmon boldly and cook it hot. That is the single most useful instruction, because plain salmon tastes mild, and a taco has a lot of other things going on.\n\nRub the fillets with the chilli powder, cumin, paprika and salt. Sear them skin-side down in a hot pan for 5 minutes, without moving them, then turn for 2 minutes. They should flake easily when pressed. **Break the salmon into chunks in the pan, not on the plate.** The pieces pick up the spiced oil.\n\nMake the crema by stirring the soured cream with lime juice and a pinch of salt. Toss the cabbage with a little lime and salt. Warm the tortillas in a dry pan for 15 seconds a side.\n\nBuild each taco with slaw, salmon, avocado and crema, and finish with coriander. Eat while the fish is warm. Corn tortillas also work, and give the tacos a more traditional flavour.',
    ing: [
      '4 salmon fillets, about 500 g',
      '2 tsp chilli powder',
      '1 tsp ground cumin',
      '1 tsp smoked paprika',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '120 g soured cream',
      '2 tbsp lime juice',
      '200 g red cabbage, finely shredded',
      '8 small flour tortillas, about 240 g',
      '1 avocado, about 150 g, sliced',
      '10 g coriander leaves'
    ],
    st: [
      'Rub the salmon with the chilli powder, cumin, paprika and half the salt.',
      'Sear skin-side down in the oil for 5 minutes, turn and cook for 2 minutes more. Break into chunks.',
      'Stir the soured cream with 1 tbsp of the lime juice and a pinch of salt. Toss the cabbage with the remaining lime juice and salt.',
      'Warm the tortillas in a dry pan for 15 seconds a side.',
      'Fill with the slaw, salmon, avocado and crema and scatter with the coriander.'
    ],
    tips: [
      'Season the fish well.',
      'Do not move the salmon while it sears.',
      'Warm the tortillas.',
      'Dress the slaw just before filling.'
    ],
    pair: ['Lime wedges', 'Black beans', 'Mexican rice', 'Corn salsa'],
    store: 'Keeps in the fridge for 1 day. Eat the salmon cold in a salad.',
    nut: [621, 33, 39, 37, 6, 6, 780]
  },

  'tuna-steaks-with-sesame': {
    d: 'Tuna steaks coated in black and white sesame seeds, seared for a minute on each side and served with soy and wasabi.',
    meta: 'Tuna steaks with sesame: sesame-crusted tuna seared for a minute a side, served with soy and wasabi. Two servings, cooked for 6 minutes.',
    kw: ['tuna steaks with sesame', 'sesame crusted tuna steaks', 'seared tuna steaks with sesame seeds', 'sesame seared tuna', 'japanese style tuna steaks with sesame'],
    why: 'Watch the pan, not the clock. Tuna steaks are done in about 90 seconds a side, and a minute too long turns them from silky to dry and chalky.\n\nPat the steaks very dry and brush them with a little soy sauce, which helps the seeds stick. Press both sides into the sesame seeds so that they are thickly coated. Heat the oil in a heavy pan until it is smoking, and sear for 90 seconds a side. **The middle should stay pink.** Many people like it rare, but if you prefer it cooked through, give it a further minute a side and accept that it will be drier.\n\nSear the thin edges for 10 seconds each so that the seeds toast all round.\n\nSlice against the grain with a sharp knife and fan the slices on the plate. Serve with soy sauce for dipping, wasabi, pickled ginger and a little cucumber.',
    ing: [
      '2 tuna steaks, about 300 g',
      '1 tbsp soy sauce',
      '3 tbsp white sesame seeds',
      '3 tbsp black sesame seeds',
      '1 tbsp vegetable oil',
      '2 tbsp soy sauce, for dipping',
      '1 tsp wasabi paste',
      '20 g pickled ginger',
      '1/2 cucumber, about 150 g, sliced'
    ],
    st: [
      'Pat the tuna very dry, brush with the 1 tbsp of soy sauce and press into the mixed sesame seeds on both sides.',
      'Heat the oil in a heavy pan until smoking and sear the steaks for 90 seconds a side. Sear the edges for 10 seconds each.',
      'Slice against the grain and fan on two plates.',
      'Serve with the dipping soy sauce, wasabi, pickled ginger and cucumber.'
    ],
    tips: [
      'Buy fresh, thick steaks.',
      'Pat them dry.',
      'Use a very hot pan.',
      'Do not cook past 90 seconds a side.'
    ],
    pair: ['Steamed rice', 'Seaweed salad', 'Edamame', 'Miso soup'],
    store: 'Best eaten straight away. Do not keep leftovers of rare fish.',
    nut: [414, 42, 12, 22, 4, 2, 1390]
  },

  'tuna-poke-bowls': {
    d: 'Cubes of raw tuna in a soy and sesame dressing over sushi rice with mango, cucumber, radish and seaweed.',
    meta: 'Tuna poke bowls: cubed raw tuna in soy and sesame over sushi rice with mango, cucumber and radish. Four servings, no cooking.',
    kw: ['tuna poke bowls', 'homemade tuna poke bowls', 'ahi tuna poke bowls', 'tuna poke bowls with mango', 'tuna poke bowl with sushi rice'],
    why: 'The first sign it is right is the colour: tuna that is a deep, glossy ruby red with no brown edges or dull patches. If it looks dull, it is not for this dish.\n\nPoke uses raw fish, so buy tuna sold as suitable to eat raw, on the day, from a fishmonger you trust. If you cannot get that, make something else. Keep it very cold and cut it into 2 cm cubes with a sharp knife. **Dress the tuna just before serving.** Soy and sesame oil begin to firm the flesh within minutes.\n\nCool the sushi rice to room temperature and season it with a little rice vinegar. Warm rice is the most common reason a poke bowl turns lukewarm and unappealing.\n\nDivide the rice between four bowls and arrange the tuna, mango, cucumber, radish and seaweed on top. Finish with sesame seeds and a squeeze of lime. Do not keep leftovers.',
    ing: [
      '400 g tuna steak, sold for eating raw, cut into 2 cm cubes',
      '3 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tsp honey',
      '400 g cooked sushi rice, cooled',
      '1 tbsp rice vinegar',
      '1 mango, about 250 g, diced',
      '1/2 cucumber, about 150 g, diced',
      '4 radishes, about 60 g, sliced',
      '10 g nori, shredded',
      '1 tbsp sesame seeds',
      '1 lime, cut into wedges'
    ],
    st: [
      'Stir the rice vinegar through the cooled sushi rice and divide between four bowls.',
      'Whisk the soy sauce, sesame oil and honey and toss with the tuna just before serving.',
      'Arrange the tuna, mango, cucumber, radish and nori on the rice.',
      'Scatter with the sesame seeds and serve with the lime wedges.'
    ],
    tips: [
      'Use tuna sold for eating raw.',
      'Keep it cold.',
      'Dress it at the last moment.',
      'Cool the rice first.'
    ],
    pair: ['Miso soup', 'Edamame', 'Green tea', 'Pickled ginger'],
    store: 'Best eaten straight away. Do not keep leftovers that contain raw fish.',
    nut: [575, 33, 95, 7, 4, 11, 730]
  },

  'cod-chowder': {
    d: 'Chunks of cod, potatoes, sweetcorn and bacon simmered in a milk and cream broth until thick and creamy.',
    meta: 'Cod chowder: cod, potatoes, sweetcorn and bacon in a creamy milk broth. Six servings, cooked for 30 minutes.',
    kw: ['cod chowder', 'creamy cod chowder', 'cod and sweetcorn chowder', 'cod chowder with bacon', 'new england style cod chowder'],
    why: 'Most home versions come out thin, and the fix is to let the potatoes do the thickening. Some of them break down into the broth as they cook, and that starch is what gives a chowder its body.\n\nFry the bacon until crisp, remove it and soften the onion and celery in the fat. Stir in the flour, then add the stock a little at a time. Add the potatoes and simmer for 12 minutes, until they are soft and some are falling apart. Mash a few against the side of the pot. **Add the cod last.** It needs only 5 minutes and falls apart if it is stirred too much.\n\nPour in the milk and cream, add the sweetcorn and the fish, and keep the heat low. A boil can split the dairy and break up the cod.\n\nSeason with salt and pepper, scatter with the bacon and parsley, and serve with crackers or bread.',
    ing: [
      '100 g streaky bacon, diced',
      '1 onion, about 150 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '2 tbsp plain flour',
      '500 ml fish stock',
      '600 g potatoes, peeled and diced',
      '500 g cod fillet, cut into chunks',
      '300 ml whole milk',
      '100 ml double cream',
      '200 g sweetcorn',
      '1/2 tsp salt',
      '1/2 tsp white pepper',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Fry the bacon in a large pot for 6 minutes until crisp. Lift out and keep.',
      'Soften the onion and celery in the bacon fat for 6 minutes, then stir in the flour for 1 minute.',
      'Add the stock gradually, then the potatoes, and simmer for 12 minutes until tender. Mash a few against the side.',
      'Add the milk, cream, sweetcorn and cod and heat gently for 5 minutes without boiling.',
      'Season, scatter with the bacon and parsley and serve.'
    ],
    tips: [
      'Let the potatoes thicken the broth.',
      'Add the cod last.',
      'Keep the heat low once the dairy goes in.',
      'Season at the end.'
    ],
    pair: ['Crusty bread', 'Oyster crackers', 'Green salad', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and do not boil.',
    nut: [327, 25, 32, 11, 4, 6, 820]
  },

  'cod-tacos': {
    d: 'Cod pieces seasoned with cumin and chilli, pan-fried and piled into warm tortillas with cabbage, lime crema and salsa.',
    meta: 'Cod tacos: seasoned cod in warm tortillas with cabbage, lime crema and salsa. Four servings, cooked for 10 minutes.',
    kw: ['cod tacos', 'pan seared cod tacos', 'cod tacos with cabbage slaw', 'cod tacos with lime crema', 'easy fish tacos with cod'],
    why: 'The first sign it is ready is the sound: cod hitting a hot pan with a sharp hiss, then settling into a steady sizzle. Cod is delicate, and the heat has to be high enough that it sears before it sticks.\n\nPat the cod dry and cut it into strips about 3 cm wide. Toss them in the cumin, chilli powder and salt. Heat the oil until it shimmers, add the fish in a single layer and leave it for 2 minutes before turning. **Turn it only once.** Cod flakes into crumbs if it is moved too much.\n\nCook for 2 minutes more, until it flakes and is opaque all through. Squeeze over some lime juice.\n\nStir the soured cream with lime juice for the crema, and toss the cabbage with a pinch of salt. Warm the tortillas for 15 seconds a side. Fill each with cabbage, cod, salsa and crema.',
    ing: [
      '500 g cod fillet, cut into 3 cm strips',
      '1 tsp ground cumin',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '120 g soured cream',
      '2 tbsp lime juice',
      '200 g white cabbage, finely shredded',
      '8 small corn tortillas, about 200 g',
      '100 g salsa',
      '10 g coriander leaves'
    ],
    st: [
      'Pat the cod dry and toss with the cumin, chilli powder and salt.',
      'Heat the oil in a pan until shimmering and cook the cod in a single layer for 2 minutes without moving, then turn and cook for 2 minutes more.',
      'Stir the soured cream with 1 tbsp of the lime juice. Toss the cabbage with the remaining juice and a pinch of salt.',
      'Warm the tortillas in a dry pan for 15 seconds a side.',
      'Fill with the cabbage, cod, salsa and crema and scatter with the coriander.'
    ],
    tips: [
      'Pat the cod dry.',
      'Turn it only once.',
      'Warm the tortillas.',
      'Serve at once.'
    ],
    pair: ['Lime wedges', 'Black beans', 'Mexican rice', 'Guacamole'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [332, 27, 29, 12, 5, 5, 590]
  },

  'cod-curry': {
    d: 'Chunks of cod simmered gently in a coconut milk and tomato sauce with ginger, garlic, turmeric and green chilli.',
    meta: 'Cod curry: cod simmered in a coconut and tomato sauce with ginger, garlic and turmeric. Four servings, cooked for 25 minutes.',
    kw: ['cod curry', 'coconut cod curry', 'cod curry with tomatoes', 'indian style cod curry', 'cod curry with coconut milk'],
    why: 'This is what to make on a wet autumn evening, when you want something warm in the bowl and the fish is already in the fridge. The sauce takes 15 minutes and the fish goes in at the end.\n\nSoften the onion in the oil for 8 minutes until golden, then add the garlic, ginger, turmeric, coriander and green chilli for 2 minutes. Pour in the tomatoes and coconut milk and simmer for 10 minutes so the sauce thickens and the flavours join. Taste it now, because this is the last chance to adjust it before the fish goes in. **Add the cod only when the sauce is ready.** It needs just 5 minutes.\n\nLay the chunks into the sauce, cover and cook on a very low heat. Do not stir; shake the pan instead. The fish is done when it flakes and is opaque all through.\n\nFinish with lime juice and coriander and serve with rice.',
    ing: [
      '600 g cod fillet, cut into large chunks',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 cloves garlic, crushed',
      '15 g fresh ginger, grated',
      '1 tsp ground turmeric',
      '1 tsp ground coriander',
      '1 green chilli, about 10 g, sliced',
      '200 g tinned chopped tomatoes',
      '400 ml coconut milk',
      '1/2 tsp salt',
      '1 tbsp lime juice',
      '10 g coriander leaves'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes, then add the garlic, ginger, turmeric, coriander and chilli for 2 minutes.',
      'Add the tomatoes, coconut milk and salt and simmer for 10 minutes until thickened.',
      'Lay in the cod, cover and cook on a very low heat for 5 minutes until the fish flakes. Shake the pan rather than stirring.',
      'Finish with the lime juice and coriander.'
    ],
    tips: [
      'Cook the onion until golden.',
      'Add the fish last.',
      'Do not stir once the cod is in.',
      'Use less chilli for a milder curry.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Lime wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently so the fish stays whole.',
    nut: [389, 30, 11, 25, 2, 5, 400]
  },

  'smoked-haddock-risotto': {
    d: 'Arborio rice stirred slowly in smoked haddock poaching milk and stock, finished with peas, parmesan and parsley.',
    meta: 'Smoked haddock risotto: arborio rice cooked in smoked haddock milk and stock with peas and parmesan. Four servings, cooked for 35 minutes.',
    kw: ['smoked haddock risotto', 'creamy smoked haddock risotto', 'smoked haddock and pea risotto', 'smoked haddock risotto with parmesan', 'british smoked haddock risotto'],
    why: 'Poach the fish first. That is the most useful instruction, because the milk it cooks in becomes the flavour of the whole risotto, and it costs nothing.\n\nSimmer the haddock in the milk and stock for 6 minutes, lift it out and flake it, then keep the liquid hot in the pan beside the risotto. Remove the skin and any bones. Soften the onion in the butter, stir in the rice for 2 minutes until it turns translucent at the edges, and add the first ladle of liquid. Stir until it is absorbed, then add the next. **Add the liquid a ladle at a time.** The rice releases its starch slowly, and that is what makes the dish creamy.\n\nAfter about 20 minutes the rice should be tender with a slight bite. Stir in the peas for the last 3 minutes.\n\nFold in the flaked fish, parmesan and parsley gently, and rest for 2 minutes.',
    ing: [
      '400 g undyed smoked haddock fillet',
      '500 ml whole milk',
      '500 ml fish stock',
      '30 g butter',
      '1 onion, about 150 g, finely chopped',
      '300 g arborio rice',
      '100 g frozen peas',
      '40 g parmesan, grated',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the milk and stock in a wide pan, add the haddock and poach for 6 minutes. Lift out, flake the fish and discard the skin and bones. Keep the liquid hot.',
      'Soften the onion in the butter in a separate pan for 6 minutes. Stir in the rice for 2 minutes.',
      'Add the hot liquid a ladle at a time, stirring, for about 20 minutes until the rice is tender with a slight bite.',
      'Stir in the peas for the last 3 minutes.',
      'Fold in the fish, parmesan, parsley and pepper and rest for 2 minutes.'
    ],
    tips: [
      'Poach the fish in the milk.',
      'Add the liquid slowly.',
      'Stir the fish in gently.',
      'Taste before salting, as the haddock is salty.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Poached egg', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [567, 34, 74, 15, 3, 9, 690]
  },

  'smoked-haddock-fishcakes': {
    d: 'Flaked smoked haddock mixed with mashed potato and parsley, coated in breadcrumbs and shallow-fried until golden.',
    meta: 'Smoked haddock fishcakes: smoked haddock, mashed potato and parsley in a crumb coat, fried for 15 minutes. Four servings.',
    kw: ['smoked haddock fishcakes', 'homemade smoked haddock fishcakes', 'crispy smoked haddock fishcakes', 'smoked haddock and potato fishcakes', 'smoked haddock fishcakes with parsley'],
    why: 'Dry the mash. That is the most useful instruction, because a fishcake with wet potato falls apart in the pan, and the good ones hold together because the mixture is firm.\n\nPoach the haddock in milk for 6 minutes, lift it out, flake it and discard the skin. Boil the potatoes until tender, drain them well and let them steam dry for 2 minutes before mashing with butter and no extra milk. Cool the mash. **Shape the cakes when the mixture is cold.** Warm mixture is sticky and slumps.\n\nFold the fish, parsley and lemon zest into the mash gently, so the flakes stay visible. Shape into eight patties and chill for 15 minutes. Dip in flour, egg and breadcrumbs.\n\nFry in a little oil for 4 minutes a side until deep gold. Drain on kitchen paper and serve with lemon and tartare sauce. Undyed haddock tastes better than the bright yellow kind, which has been coloured.',
    ing: [
      '350 g undyed smoked haddock fillet',
      '200 ml whole milk',
      '600 g potatoes, peeled and cut up',
      '20 g butter',
      '15 g flat-leaf parsley, chopped',
      '1 lemon, zested, plus wedges to serve',
      '40 g plain flour',
      '1 egg, about 50 g, beaten',
      '80 g dried breadcrumbs',
      '40 ml vegetable oil',
      '1/2 tsp black pepper'
    ],
    st: [
      'Poach the haddock in the milk for 6 minutes. Lift out, flake and discard the skin.',
      'Boil the potatoes for 15 minutes, drain, steam dry for 2 minutes and mash with the butter. Cool for 10 minutes.',
      'Fold in the fish, parsley, lemon zest and pepper. Shape into eight patties and chill for 15 minutes.',
      'Dip in the flour, then egg, then breadcrumbs.',
      'Fry in the oil for 4 minutes a side until deep gold. Drain on kitchen paper and serve with the lemon wedges.'
    ],
    tips: [
      'Dry the mash.',
      'Cool the mixture before shaping.',
      'Chill the cakes before frying.',
      'Turn them only once.'
    ],
    pair: ['Tartare sauce', 'Green salad', 'Peas', 'Poached egg'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the coating.',
    nut: [474, 26, 52, 18, 5, 5, 240]
  },

  'fish-pie-with-cheddar-mash': {
    d: 'Salmon, cod and prawns in a creamy parsley sauce, topped with cheddar mashed potato and baked until golden.',
    meta: 'Fish pie with cheddar mash: salmon, cod and prawns in parsley sauce under cheddar mash. Six servings, baked for 40 minutes.',
    kw: ['fish pie with cheddar mash', 'british fish pie', 'classic fish pie with cheesy mash', 'salmon cod and prawn fish pie', 'family fish pie with cheddar'],
    why: 'Fish, sauce, potato: three layers, and the quality of each depends on how little you cook the one before. Fish that is fully cooked before it goes into the pie ends up dry after 40 minutes in the oven.\n\nPoach the cod and salmon in the milk for only 3 minutes, so that they are still raw in the middle, then lift them out and flake them. Use the same milk for the sauce, thickened with butter and flour, and finish it with parsley and a little lemon. Stir in the prawns raw. **Let the sauce cool a little before the potato goes on.** A hot sauce makes the mash sink.\n\nMake the mash with butter, milk and cheddar and spoon it over, then drag a fork across the top to make ridges that brown. Bake at 200°C for 40 minutes. If your oven runs hot, check at 30 minutes.\n\nRest for 10 minutes before serving.',
    ing: [
      '300 g cod fillet',
      '300 g salmon fillet',
      '500 ml whole milk',
      '40 g butter',
      '40 g plain flour',
      '150 g raw peeled prawns',
      '20 g flat-leaf parsley, chopped',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '1 kg potatoes, peeled and cut up',
      '30 g butter, for the mash',
      '60 ml whole milk, for the mash',
      '100 g cheddar, grated'
    ],
    st: [
      'Heat the oven to 200°C. Poach the cod and salmon in the 500 ml of milk for 3 minutes. Lift out, flake and discard any skin. Strain the milk.',
      'Melt the 40 g of butter, stir in the flour for 1 minute and whisk in the milk. Simmer for 5 minutes, then stir in the parsley, lemon juice and salt. Cool slightly.',
      'Fold in the fish and raw prawns and tip into a pie dish.',
      'Boil the potatoes for 15 minutes, drain and mash with the 30 g of butter, 60 ml of milk and two thirds of the cheddar.',
      'Spoon the mash over the pie, rake with a fork and scatter over the rest of the cheese. Bake for 40 minutes until golden and bubbling.'
    ],
    tips: [
      'Undercook the fish at the poaching stage.',
      'Cool the sauce slightly.',
      'If your oven runs hot, check at 30 minutes.',
      'Rest it before serving.'
    ],
    pair: ['Peas', 'Green beans', 'Buttered carrots', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 2 days. Reheat covered until hot all the way through.',
    nut: [525, 36, 39, 25, 4, 6, 450]
  }
};
