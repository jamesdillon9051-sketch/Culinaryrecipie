'use strict';

/**
 * Volume forty-three — dinners, wings, fish and sauces, third part.
 *
 * A gnocchi bake, Greek lemon chicken, harissa carrots, a lighter stir fry,
 * a toastie, honey soy salmon, honey sriracha wings, a jacket potato, lamb
 * saag, lemon garlic chicken thighs, lemon herb cod, linguine with clams,
 * minted peas, a mornay sauce, mussels with chorizo, beef and rice in one
 * pot and oven fried chicken. Times are the recipe's own; ovens differ, so
 * each method says when to check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'gnocchi-bake': {
    d: 'Potato gnocchi baked in a tomato and mozzarella sauce until the top is golden and bubbling.',
    meta: 'Gnocchi bake: potato gnocchi in a tomato sauce topped with mozzarella and baked for 25 minutes. Four servings.',
    kw: ['gnocchi bake', 'baked gnocchi', 'tomato and mozzarella gnocchi bake', 'cheesy gnocchi bake', 'gnocchi bake with mozzarella'],
    why: 'Do you need to boil the gnocchi before it goes in the oven? No, and that is what makes this recipe quick. Shop-bought gnocchi is already cooked, and it softens in the sauce as it bakes.\n\nStir the gnocchi straight from the packet into the tomato sauce, so every piece is coated. A dry piece on top turns hard and chewy in the oven. The sauce is passata with garlic, oregano and a pinch of salt, which is plain on purpose, because the mozzarella adds richness.\n\n**Cover the dish with foil for the first 15 minutes.** That steams the gnocchi through. Then take the foil off and let the cheese brown for 10 minutes.\n\nBake at 200°C. If your oven runs hot, check at 20 minutes after the foil comes off. The top should be spotted gold and the sauce should bubble at the edges. Scatter with basil and serve from the dish.',
    ing: [
      '500 g potato gnocchi',
      '500 g passata',
      '2 cloves garlic, crushed',
      '1 tsp dried oregano',
      '1 tbsp olive oil',
      '200 g mozzarella, torn',
      '1/2 tsp salt',
      '10 g fresh basil leaves'
    ],
    st: [
      'Heat the oven to 200°C. Stir the passata with the garlic, oregano, oil and salt in a baking dish.',
      'Stir in the gnocchi so every piece is coated, then cover tightly with foil.',
      'Bake for 15 minutes, take off the foil, scatter over the mozzarella and bake for 10 minutes more until golden.',
      'Scatter with the basil and serve from the dish.'
    ],
    tips: [
      'Use the gnocchi straight from the packet.',
      'Coat every piece in sauce.',
      'If your oven runs hot, check at 20 minutes.',
      'Keep the foil on for the first 15 minutes.'
    ],
    pair: ['Rocket salad', 'Garlic bread', 'Roasted courgettes', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven until hot all the way through.',
    nut: [403, 18, 49, 15, 5, 7, 1220]
  },

  'greek-lemon-chicken': {
    d: 'Chicken thighs roasted with potatoes in lemon juice, garlic, oregano and olive oil until golden and tender.',
    meta: 'Greek lemon chicken: chicken thighs and potatoes roasted in lemon, garlic and oregano. Four servings, baked for 50 minutes.',
    kw: ['greek lemon chicken', 'greek lemon chicken and potatoes', 'greek roast lemon chicken', 'lemon oregano chicken', 'greek lemon chicken thighs'],
    why: 'The first sign it is ready is the smell: lemon and oregano turning savoury as the juices catch on the base of the tin. Open the oven door and it should hit you.\n\nThe lemon juice does two jobs. It seasons the meat, and it mixes with the olive oil and chicken fat to make a thin, sharp sauce in the tin. **Spoon that sauce over the chicken halfway through.** It keeps the skin glossy and stops the potatoes drying out.\n\nCut the potatoes into wedges of the same size and put them under the chicken, so they soak up the juices. Roast at 200°C for 50 minutes. If your oven runs hot, check at 40 minutes.\n\nThe chicken is ready when the skin is deep gold and the juices run clear. The potatoes should be soft in the middle with browned edges. Serve with a spoonful of the pan juices.',
    ing: [
      '8 bone-in chicken thighs, about 1 kg',
      '800 g potatoes, cut into wedges',
      '2 lemons, about 200 g, juiced',
      '4 cloves garlic, crushed',
      '4 tbsp olive oil',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Put the potatoes and chicken in a large roasting tin.',
      'Mix the lemon juice, garlic, oil, oregano, salt and pepper and pour over, turning everything to coat.',
      'Roast for 25 minutes, spoon the juices over the chicken and turn the potatoes.',
      'Roast for 25 minutes more until the skin is deep gold and no pink remains.',
      'Rest for 5 minutes and serve with the pan juices.'
    ],
    tips: [
      'Put the potatoes under the chicken.',
      'Spoon the juices over halfway through.',
      'If your oven runs hot, check at 40 minutes.',
      'Cut the wedges the same size.'
    ],
    pair: ['Greek salad', 'Tzatziki', 'Steamed green beans', 'Warm pitta'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven until hot all the way through.',
    nut: [816, 47, 40, 52, 6, 3, 810]
  },

  'harissa-roasted-carrots': {
    d: 'Carrots tossed in harissa paste, olive oil and honey, roasted until caramelised and served with yoghurt.',
    meta: 'Harissa roasted carrots: carrots roasted in harissa, olive oil and honey, served with yoghurt. Four servings, baked for 30 minutes.',
    kw: ['harissa roasted carrots', 'roasted harissa carrots', 'harissa carrots with yoghurt', 'spicy roasted carrots', 'harissa honey carrots'],
    why: 'Harissa is a chilli and spice paste, and here it seasons the whole dish. A couple of spoonfuls turn plain carrots into something with heat, smoke and a deep red colour.\n\nCut the carrots into long, thick batons of the same size. Thin ones burn before they are soft. Toss them with the harissa, oil and honey in the tin so each piece is coated, and spread them in one layer. **Do not crowd the tin.** Carrots that touch steam, and carrots with space around them brown.\n\nRoast at 220°C for 30 minutes, turning once halfway. If your oven runs hot, check at 25 minutes. The edges should be dark and sticky, and a knife should slide in easily.\n\nSpoon the yoghurt on a plate, pile the carrots on top and finish with the lemon juice and a scatter of parsley. The cool yoghurt takes the edge off the heat.',
    ing: [
      '700 g carrots, cut into batons',
      '2 tbsp harissa paste',
      '2 tbsp olive oil',
      '1 tbsp honey',
      '150 g natural yoghurt',
      '1/2 lemon, juiced',
      '1/2 tsp salt',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oven to 220°C. Toss the carrots with the harissa, oil, honey and salt on a large tray and spread in one layer.',
      'Roast for 30 minutes, turning once, until dark at the edges and tender.',
      'Spoon the yoghurt onto a plate, pile on the carrots and squeeze over the lemon.',
      'Scatter with the parsley and serve.'
    ],
    tips: [
      'Cut the carrots the same size.',
      'Spread them in one layer.',
      'If your oven runs hot, check at 25 minutes.',
      'Add the lemon after roasting.'
    ],
    pair: ['Roast chicken', 'Couscous', 'Flatbread', 'Lamb chops'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven or eat cold in a salad.',
    nut: [189, 3, 24, 9, 6, 15, 550]
  },

  'healthy-chicken-stir-fry': {
    d: 'Chicken breast and mixed vegetables stir-fried in a light garlic, ginger and soy sauce.',
    meta: 'Healthy chicken stir fry: chicken breast and mixed vegetables in a garlic, ginger and soy sauce. Four servings, cooked for 12 minutes.',
    kw: ['healthy chicken stir fry', 'light chicken stir fry', 'chicken and vegetable stir fry', 'chicken stir fry with garlic and ginger', 'chicken stir fry with vegetables'],
    why: 'A stir fry is a method, not a recipe, and the method is simple: very high heat, small pieces and no waiting. Everything else is detail.\n\nCut the chicken and vegetables into pieces of a similar size so that they cook together. Have the sauce mixed and every ingredient on the board before the wok goes on the heat, because there is no time to chop once it starts. **Let the wok smoke before the oil goes in.** That heat sears the meat and keeps the vegetables crisp.\n\nCook the chicken first for 4 minutes and take it out. Then fry the carrots and pepper, which need longest, for 3 minutes, and add the broccoli and sugar snaps. Return the chicken, pour in the sauce and toss for a minute.\n\nUse only a small amount of oil and a light sauce, and the dish stays low in fat. Serve over rice or noodles.',
    ing: [
      '500 g chicken breast, thinly sliced',
      '2 tbsp vegetable oil',
      '2 carrots, about 200 g, sliced thin',
      '1 red pepper, about 150 g, sliced',
      '150 g broccoli florets',
      '100 g sugar snap peas',
      '3 cloves garlic, sliced',
      '15 g fresh ginger, grated',
      '3 tbsp soy sauce',
      '1 tsp cornflour',
      '60 ml water'
    ],
    st: [
      'Mix the soy sauce, cornflour and water in a small bowl.',
      'Heat the wok until smoking, add half the oil and stir-fry the chicken for 4 minutes until browned. Set aside.',
      'Add the rest of the oil and fry the carrots and pepper for 3 minutes, then the broccoli and sugar snaps for 2 minutes.',
      'Add the garlic and ginger for 30 seconds, return the chicken and pour in the sauce.',
      'Toss for 1 minute until the sauce is glossy and serve.'
    ],
    tips: [
      'Have everything chopped first.',
      'Cut the vegetables to a similar size.',
      'Cook the chicken in batches if the wok is small.',
      'Add the quick vegetables last.'
    ],
    pair: ['Steamed rice', 'Brown rice', 'Rice noodles', 'Sliced cucumber'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan until hot all the way through.',
    nut: [283, 32, 14, 11, 4, 6, 770]
  },

  'ham-and-cheese-toastie': {
    d: 'Buttered white bread filled with sliced ham and cheddar, fried until golden and the cheese has melted.',
    meta: 'Ham and cheese toastie: buttered bread filled with ham and cheddar, fried for 8 minutes until golden. Two servings.',
    kw: ['ham and cheese toastie', 'ham and cheese toasted sandwich', 'pan fried ham and cheese toastie', 'cheddar and ham toastie', 'ham and cheese toastie recipe'],
    why: 'Why does a toastie from a pan taste better than one from a toaster? Because the butter fries the bread. The outside goes crisp and gold, and the heat travels slowly enough to melt the cheese all the way through.\n\nButter the outside of the bread, not the inside. Put the ham on first and the cheese on top of it, so that the cheese sits against the heat and melts down over the ham. **Keep the heat at medium-low.** If it is too hot, the bread burns long before the cheese softens.\n\nFry for 4 minutes on one side, press gently with a spatula, turn and fry for 4 minutes more. The bread should be deep gold and the cheese should ooze at the edges.\n\nLeave it for a minute before cutting, so the cheese does not run out. Thinly sliced ham melts into the cheese, while thick slices tend to slide out of the sandwich.',
    ing: [
      '4 slices white bread, about 160 g',
      '20 g butter, softened',
      '4 slices ham, about 80 g',
      '100 g cheddar, grated',
      '1 tsp Dijon mustard'
    ],
    st: [
      'Butter one side of each slice of bread and spread the other with the mustard.',
      'Build two sandwiches with the mustard inside, the ham first and the cheese on top.',
      'Fry in a pan over a medium-low heat for 4 minutes until golden, pressing gently.',
      'Turn and fry for 4 minutes more until the cheese melts. Rest for 1 minute and cut in half.'
    ],
    tips: [
      'Butter the outside of the bread.',
      'Put the cheese against the heat.',
      'Keep the pan on medium-low.',
      'Rest it before cutting.'
    ],
    pair: ['Tomato soup', 'Pickles', 'Green salad', 'Crisps'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, reheated in a dry pan.',
    nut: [533, 28, 40, 29, 2, 4, 1250]
  },

  'honey-soy-salmon': {
    d: 'Salmon fillets glazed with honey, soy sauce and garlic, pan-fried until sticky and caramelised.',
    meta: 'Honey soy salmon: salmon fillets glazed with honey, soy sauce and garlic. Two servings, cooked for 12 minutes.',
    kw: ['honey soy salmon', 'honey soy glazed salmon', 'honey soy salmon fillets', 'pan fried honey soy salmon', 'salmon with honey and soy sauce'],
    why: 'Honey and soy sauce do the work of a marinade and a glaze at once. The soy sauce seasons, the honey caramelises, and the garlic gives the glaze a sharp edge.\n\nPat the salmon dry, because a wet fillet will not brown. Fry it skin-side down first for 5 minutes in a hot pan, pressing lightly for the first 30 seconds so the skin does not curl. The skin should be crisp and the flesh should cook about two-thirds of the way up the side.\n\nTurn the fillets, pour in the glaze and cook for 3 to 4 minutes, spooning it over. **Watch the pan at this stage.** Honey catches fast, and a glaze that goes from gold to black takes only seconds.\n\nThe salmon is ready when it flakes easily and the sauce coats the back of a spoon. Serve with rice and greens. Skin-on fillets stay moister than skinless, and the crisp skin is worth eating.',
    ing: [
      '2 salmon fillets, about 300 g',
      '2 tbsp honey',
      '2 tbsp soy sauce',
      '2 cloves garlic, crushed',
      '1 tbsp vegetable oil',
      '1 tsp lemon juice',
      '2 spring onions, about 30 g, sliced'
    ],
    st: [
      'Mix the honey, soy sauce, garlic and lemon juice in a small bowl.',
      'Pat the salmon dry. Fry skin-side down in the oil over a medium-high heat for 5 minutes.',
      'Turn, pour in the glaze and cook for 4 minutes, spooning it over the fish, until sticky.',
      'Serve with the sauce from the pan and the spring onions.'
    ],
    tips: [
      'Pat the fish dry.',
      'Press the fillets down for the first 30 seconds.',
      'Watch the glaze closely, as honey burns fast.',
      'If the glaze thickens too much, add a splash of water.'
    ],
    pair: ['Steamed rice', 'Broccoli', 'Pak choi', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently, or flake cold into a salad.',
    nut: [442, 32, 20, 26, 1, 18, 950]
  },

  'honey-sriracha-wings': {
    d: 'Chicken wings baked until crisp, then tossed in a sticky honey, sriracha and butter glaze.',
    meta: 'Honey sriracha wings: chicken wings baked until crisp and tossed in a honey, sriracha and butter glaze. Four servings, baked for 40 minutes.',
    kw: ['honey sriracha wings', 'baked honey sriracha wings', 'sriracha honey chicken wings', 'sticky honey sriracha wings', 'oven baked sriracha wings'],
    why: 'This is what to make on match day, when a tray of wings goes round the room and disappears. The oven does the cooking and the glaze does the rest.\n\nDry the wings well with kitchen paper, then toss them with baking powder and salt. The baking powder helps the skin crisp, and it dries the surface so that it browns instead of steaming. **Do not skip the drying.** Wet wings come out pale and rubbery.\n\nSpread the wings on a rack over a tray and bake at 220°C for 40 minutes, turning once. If your oven runs hot, check at 35 minutes. The skin should be deep gold and blistered.\n\nWhile they bake, warm the honey, sriracha and butter in a small pan. Toss the hot wings in the glaze in a big bowl. Serve straight away, because the crispness fades once they sit in the sauce. Cut the wings into drumettes and flats first if they come whole, as they cook more evenly.',
    ing: [
      '1 kg chicken wings',
      '1 tbsp baking powder',
      '1 tsp salt',
      '3 tbsp honey',
      '2 tbsp sriracha',
      '30 g butter',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oven to 220°C. Dry the wings very well and toss with the baking powder and salt.',
      'Spread on a rack over a tray and bake for 40 minutes, turning once, until deep gold.',
      'Warm the honey, sriracha and butter in a small pan for 3 minutes, then add the lime juice.',
      'Toss the hot wings in the glaze and serve at once.'
    ],
    tips: [
      'Dry the wings thoroughly.',
      'Use baking powder, not baking soda.',
      'If your oven runs hot, check at 35 minutes.',
      'Toss in the glaze just before serving.'
    ],
    pair: ['Blue cheese dip', 'Celery sticks', 'Coleslaw', 'Oven chips'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to bring back some crispness.',
    nut: [628, 43, 15, 44, 0, 13, 1330]
  },

  'jacket-potato-with-cheese': {
    d: 'A large potato baked until the skin is crisp and the inside fluffy, split and filled with butter and cheddar.',
    meta: 'Jacket potato with cheese: a large potato baked for 70 minutes until crisp, split and filled with butter and cheddar. Two servings.',
    kw: ['jacket potato with cheese', 'cheese jacket potato', 'baked potato with cheese', 'oven baked jacket potato', 'cheesy jacket potato'],
    why: 'Bake it long. That is most of the recipe, and the part people skip. A jacket potato needs over an hour in a hot oven to turn crisp outside and fluffy inside.\n\nPick large baking potatoes of an even size and scrub them well. Prick each one a few times with a fork so steam can escape, rub with oil and salt, and put them straight on the oven rack. The oil and salt help the skin crisp, and the rack lets the heat reach all round. **Do not wrap them in foil.** Foil steams the skin and leaves it soft and wet.\n\nBake at 200°C for 70 minutes. If your oven runs hot, check at 60 minutes. The skin should be crisp and the potato should give when squeezed with an oven glove.\n\nCut a cross in the top, squeeze open, and add the butter first so it melts. Pile on the cheese and serve at once.',
    ing: [
      '2 large baking potatoes, about 600 g',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '30 g butter',
      '100 g cheddar, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Scrub the potatoes, prick them with a fork and rub with the oil and salt.',
      'Put them directly on the oven rack and bake for 70 minutes until the skin is crisp.',
      'Cut a cross in the top of each and squeeze open.',
      'Add the butter, then the cheese and pepper, and serve at once.'
    ],
    tips: [
      'Do not wrap the potatoes in foil.',
      'Prick the skins before baking.',
      'If your oven runs hot, check at 60 minutes.',
      'Butter first, then cheese.'
    ],
    pair: ['Baked beans', 'Green salad', 'Coleslaw', 'Tuna mayonnaise'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to bring the skin back.',
    nut: [608, 19, 52, 36, 7, 3, 930]
  },

  'lamb-saag': {
    d: 'Pieces of lamb simmered with spinach, onions, garlic, ginger and spices into a thick green curry.',
    meta: 'Lamb saag: lamb simmered with spinach, onions, garlic, ginger and spices. Four servings, cooked for 50 minutes.',
    kw: ['lamb saag', 'lamb and spinach curry', 'saag lamb', 'indian lamb saag', 'lamb saag curry'],
    why: 'Most home versions come out watery, and the fix is to cook off the moisture twice: once from the onions, and once from the spinach. A wet saag tastes of nothing but boiled leaves.\n\nBrown the lamb first, in batches, for the flavour that the pot builds on. Then fry the onions for 8 minutes until deep gold, add the garlic, ginger and spices, and stir for a minute. **Keep the spices moving.** They burn in seconds and turn the dish bitter.\n\nAdd the tomatoes and lamb, cover and simmer for 40 minutes until the meat is tender. Stir in the spinach in handfuls, so it wilts down. Cook uncovered for 10 minutes more, until the sauce is thick and clings to the lamb.\n\nFinish with a spoonful of cream if you like it richer. Serve with rice or naan. Frozen spinach works if you thaw it and squeeze out the water, then add it earlier in the cooking.',
    ing: [
      '700 g boneless lamb shoulder, cubed',
      '2 onions, about 300 g, chopped',
      '4 cloves garlic, crushed',
      '20 g fresh ginger, grated',
      '2 tbsp vegetable oil',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '200 g tinned chopped tomatoes',
      '400 g baby spinach',
      '1 tsp salt'
    ],
    st: [
      'Brown the lamb in the oil in batches for 6 minutes, then set aside.',
      'Fry the onions in the same pan for 8 minutes until deep gold, then add the garlic, ginger, cumin, coriander, garam masala and chilli for 1 minute.',
      'Add the tomatoes, lamb and salt, cover and simmer for 40 minutes until the lamb is tender.',
      'Stir in the spinach in handfuls, uncover and cook for 10 minutes until the sauce is thick.'
    ],
    tips: [
      'Brown the lamb in batches.',
      'Cook the onions until deep gold.',
      'Add the spinach in handfuls.',
      'If the sauce is thin, cook it uncovered for longer.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Natural yoghurt', 'Cucumber raita'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water until hot all the way through.',
    nut: [591, 35, 16, 43, 5, 5, 810]
  },

  'lemon-garlic-roast-chicken-thighs': {
    d: 'Bone-in chicken thighs roasted with lemon, garlic and thyme until the skin is crisp and the juices run clear.',
    meta: 'Lemon garlic roast chicken thighs: bone-in thighs roasted with lemon, garlic and thyme. Four servings, baked for 40 minutes.',
    kw: ['lemon garlic roast chicken thighs', 'roast lemon garlic chicken thighs', 'lemon and garlic chicken thighs', 'oven roasted chicken thighs with lemon', 'garlic lemon chicken thighs'],
    why: 'Use thighs. They stay juicy for 40 minutes in a hot oven, where breast would be dry in 25. Bone-in, skin-on is the version that gets the crispest skin and the most flavour.\n\nPat the skin dry with kitchen paper. It is the most useful thing you can do, because dry skin crisps and wet skin steams. Rub the thighs with oil, salt, pepper and the garlic, tuck the lemon halves and thyme around them in the tin, and set the chicken skin-side up. **Do not cover the tin.** Covering traps steam and the skin stays soft.\n\nRoast at 220°C for 40 minutes. If your oven runs hot, check at 30 minutes. The skin should be deep gold and crackly, and a knife into the thickest thigh should show clear juices.\n\nSqueeze the roasted lemon over the chicken and spoon the pan juices on top. Take the chicken out of the fridge 20 minutes ahead, so it cooks evenly.',
    ing: [
      '8 bone-in, skin-on chicken thighs, about 1.2 kg',
      '2 lemons, about 200 g, halved',
      '6 cloves garlic, crushed',
      '2 tbsp olive oil',
      '6 sprigs thyme, about 6 g',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C. Pat the thighs dry and rub with the oil, garlic, salt and pepper.',
      'Set skin-side up in a roasting tin, with the lemon halves and thyme tucked between.',
      'Roast uncovered for 40 minutes until the skin is deep gold and the juices run clear.',
      'Squeeze over a roasted lemon half and spoon over the pan juices.'
    ],
    tips: [
      'Dry the skin well.',
      'Leave the tin uncovered.',
      'If your oven runs hot, check at 30 minutes.',
      'Use the pan juices as a sauce.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Rice', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the skin.',
    nut: [709, 51, 7, 53, 2, 1, 840]
  },

  'lemon-herb-cod': {
    d: 'Cod fillets baked with lemon, parsley, dill and olive oil until the flesh flakes.',
    meta: 'Lemon herb cod: cod fillets baked with lemon, parsley and dill. Two servings, cooked for 15 minutes.',
    kw: ['lemon herb cod', 'baked lemon herb cod', 'lemon and herb cod fillets', 'cod with lemon and herbs', 'oven baked lemon herb cod'],
    why: 'It looks like a lot of work and cooks like the simplest dish in the book, which is why it is a good fish recipe for beginners. A fillet, a lemon and some herbs do all the work.\n\nPat the cod dry and lay the fillets in an oiled dish. Season, scatter the herbs and lay lemon slices on top. The lemon steams the surface of the fish and stops it drying out. **Do not bake it past 15 minutes.** Cod goes from moist to dry in a couple of minutes.\n\nBake at 200°C for 15 minutes. If your fillets are thin, check at 10 minutes. The flesh should turn from glassy to white and flake easily with a fork.\n\nSpoon the juices from the dish over the fish, add a squeeze of lemon and serve straight away. Frozen cod works if you thaw it fully and dry it well first.',
    ing: [
      '2 cod fillets, about 300 g',
      '1 tbsp olive oil',
      '1 lemon, about 100 g, sliced',
      '10 g flat-leaf parsley, chopped',
      '5 g fresh dill, chopped',
      '1 clove garlic, crushed',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Pat the cod dry and lay in an oiled dish.',
      'Season with the salt and pepper and scatter over the garlic, parsley and dill.',
      'Lay the lemon slices on top and bake for 15 minutes until the fish flakes.',
      'Spoon over the juices from the dish and serve.'
    ],
    tips: [
      'Pat the fish dry.',
      'Lay the lemon slices on top.',
      'If the fillets are thin, check at 10 minutes.',
      'Thaw frozen cod fully first.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'Steamed rice', 'Tartare sauce'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [208, 28, 6, 8, 2, 1, 680]
  },

  'linguine-with-clams': {
    d: 'Linguine tossed with fresh clams steamed open in white wine, garlic, chilli and parsley.',
    meta: 'Linguine with clams: linguine and fresh clams steamed in white wine with garlic and chilli. Four servings, cooked for 15 minutes.',
    kw: ['linguine with clams', 'linguine alle vongole', 'clam linguine', 'linguine with clams and white wine', 'linguine with clams and garlic'],
    why: 'How do you know when clams are done? They open. That is the entire test, and it takes around 5 minutes in a hot, covered pan with wine.\n\nScrub the clams under cold water and throw away any that are cracked or do not close when tapped. Soak the rest in cold water for 20 minutes if you can, so they lose their sand, but this is not required for the cooking. Fry the garlic and chilli gently in the oil, pour in the wine, add the clams and cover. **Shake the pan, do not stir.** Stirring breaks the shells apart.\n\nAfter 4 to 5 minutes the shells will open. Discard any that stay shut.\n\nToss the cooked linguine into the clam juices with the parsley, so it soaks up the wine and brine. That liquid is the sauce. Serve at once in warm bowls. Buy clams on the day, and keep them in the fridge under a damp cloth until you cook them.',
    ing: [
      '350 g linguine',
      '1 kg fresh clams, scrubbed',
      '4 cloves garlic, sliced',
      '1/2 tsp chilli flakes',
      '3 tbsp olive oil',
      '150 ml dry white wine',
      '20 g flat-leaf parsley, chopped',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the linguine for 9 minutes, 1 minute under the packet time, and drain, keeping a mugful of the water.',
      'Meanwhile warm the oil in a wide pan, add the garlic and chilli for 1 minute, then pour in the wine.',
      'Add the clams, cover and cook for 4 to 5 minutes, shaking the pan, until the shells open. Discard any that stay shut.',
      'Add the linguine, a splash of pasta water, the parsley and the pepper and toss for 1 minute.',
      'Serve at once.'
    ],
    tips: [
      'Throw away cracked or open clams that stay open when tapped.',
      'Shake the pan, do not stir.',
      'Discard any that stay shut after cooking.',
      'Undercook the pasta by 1 minute.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Dry white wine', 'Lemon wedges'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [618, 47, 76, 14, 3, 3, 1510]
  },

  'minted-peas': {
    d: 'Peas cooked for a few minutes and tossed with butter, chopped fresh mint, salt and pepper.',
    meta: 'Minted peas: peas tossed with butter and fresh mint. Four servings, cooked for 7 minutes.',
    kw: ['minted peas', 'buttered minted peas', 'peas with mint', 'peas with butter and mint', 'british minted peas'],
    why: 'Cook the peas for less time than you think. Three minutes in boiling water is enough for frozen peas, and past 5 they turn dull and floury.\n\nBring a small pan of salted water to the boil and add the peas. As soon as the water returns to the boil, start timing. Drain well, because a puddle in the bowl dilutes the butter. **Stir the mint in at the end.** Heat dulls fresh mint within a minute, and the colour and taste are what lift the dish.\n\nTip the peas back into the warm pan, add the butter and let it melt over them. Chop the mint finely just before it goes in, and add it with the salt and pepper.\n\nServe straight away. They sit beside roast lamb, fish and chips or a pie, and they cost almost nothing. Frozen peas are picked and frozen quickly, so they are often sweeter than fresh peas that have travelled.',
    ing: [
      '500 g frozen peas',
      '20 g butter',
      '10 g fresh mint leaves, chopped',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the peas in salted water for 3 minutes and drain well.',
      'Return them to the warm pan and add the butter.',
      'Stir in the mint, salt and pepper and serve hot.'
    ],
    tips: [
      'Time the peas from the boil.',
      'Drain them well.',
      'Chop the mint at the last moment.',
      'Add a squeeze of lemon if you like a sharper taste.'
    ],
    pair: ['Roast lamb', 'Fish and chips', 'Pie and mash', 'Grilled chicken'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days and reheats gently.',
    nut: [145, 7, 18, 5, 7, 7, 300]
  },

  'mornay-sauce': {
    d: 'A smooth white sauce of butter, flour and milk with grated gruyere and parmesan stirred in.',
    meta: 'Mornay sauce: a white sauce of butter, flour and milk with gruyere and parmesan. Six servings, cooked for 12 minutes.',
    kw: ['mornay sauce', 'classic mornay sauce', 'cheese mornay sauce', 'mornay sauce with gruyere', 'homemade mornay sauce'],
    why: 'Mornay is a white sauce with cheese stirred in, and that is the whole idea. Learn the white sauce first and the cheese is the easy part.\n\nMelt the butter, add the flour and stir for 1 minute until it looks like wet sand. That cooks out the raw flour taste. Add the milk a little at a time, whisking after each splash, so that no lumps form. Simmer for 5 minutes, stirring, until the sauce coats the back of a spoon.\n\n**Take the pan off the heat before the cheese goes in.** Cheese added to a boiling sauce turns stringy and oily. Off the heat, it melts smooth.\n\nStir in the gruyere and parmesan a handful at a time, then the nutmeg, salt and pepper. If the sauce is too thick, loosen it with a splash of milk. Pour it over cauliflower, fish, ham or a croque monsieur, and grill until bubbling.',
    ing: [
      '40 g butter',
      '40 g plain flour',
      '600 ml whole milk',
      '80 g gruyere, grated',
      '30 g parmesan, grated',
      '1/4 tsp ground nutmeg',
      '1/2 tsp salt',
      '1/4 tsp white pepper'
    ],
    st: [
      'Melt the butter over a medium heat, stir in the flour and cook for 1 minute.',
      'Add the milk a little at a time, whisking after each addition, until smooth.',
      'Simmer for 5 minutes, stirring, until it coats the back of a spoon.',
      'Take off the heat and stir in the gruyere and parmesan, then the nutmeg, salt and pepper.'
    ],
    tips: [
      'Add the milk slowly.',
      'Take the pan off the heat before the cheese.',
      'Whisk out lumps as they appear.',
      'Loosen a thick sauce with a splash of milk.'
    ],
    pair: ['Cauliflower', 'Baked fish', 'Ham', 'Croque monsieur'],
    store: 'Keeps in the fridge for 3 days, with cling film pressed on the surface. Reheat gently with a splash of milk.',
    nut: [215, 10, 10, 15, 0, 5, 360]
  },

  'mussels-with-chorizo': {
    d: 'Mussels steamed open in a pan with fried chorizo, garlic, tomato and white wine, finished with parsley.',
    meta: 'Mussels with chorizo: mussels steamed in white wine with chorizo, garlic and tomato. Four servings, cooked for 12 minutes.',
    kw: ['mussels with chorizo', 'mussels and chorizo', 'spanish mussels with chorizo', 'mussels in white wine and chorizo', 'mussels and chorizo in white wine'],
    why: 'Fry the chorizo first and let it give up its oil. That red oil is the cooking fat for the rest of the dish, and it flavours everything the mussels steam in.\n\nCut the chorizo into small coins and fry them over a medium heat for 4 minutes until they colour and the oil runs. Add the garlic and tomatoes, then the wine. Let it bubble for a minute before the mussels go in. **Tap any open mussel and discard it if it stays open.** Throw away cracked shells as well.\n\nTip the mussels in, cover and cook for 5 minutes, shaking the pan once or twice. They are ready when the shells open. Discard any that stay shut.\n\nScatter over the parsley and serve in wide bowls with the juices, and plenty of bread to mop them up. This is a dish to eat straight away. Spanish cooking chorizo gives the most oil, while softer sliced chorizo gives less.',
    ing: [
      '1 kg fresh mussels, cleaned',
      '100 g chorizo, sliced',
      '3 cloves garlic, sliced',
      '200 g tinned chopped tomatoes',
      '150 ml dry white wine',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp black pepper'
    ],
    st: [
      'Fry the chorizo in a large pan with a lid for 4 minutes until the oil runs.',
      'Add the garlic for 30 seconds, then the tomatoes and wine, and bubble for 1 minute.',
      'Add the mussels, cover and cook for 5 minutes, shaking the pan, until the shells open.',
      'Discard any that stay shut, scatter over the parsley and pepper and serve with the juices.'
    ],
    tips: [
      'Discard cracked mussels.',
      'Discard any that stay shut after cooking.',
      'Shake the pan, do not stir.',
      'Serve with bread for the juices.'
    ],
    pair: ['Crusty bread', 'Chips', 'Green salad', 'Dry white wine'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [295, 34, 15, 11, 1, 2, 960]
  },

  'one-pot-beef-and-rice': {
    d: 'Beef mince, onion, peppers and rice cooked together in one pan in a tomato and beef stock sauce.',
    meta: 'One pot beef and rice: beef mince, peppers and rice cooked in one pan in tomato and stock. Four servings, cooked for 30 minutes.',
    kw: ['one pot beef and rice', 'beef and rice skillet', 'ground beef and rice one pot', 'beef mince and rice', 'beef and rice dinner'],
    why: 'The first sign it is ready is the smell of rice toasting in beef fat and onion, a nutty smell that comes before the liquid goes in. Stir the rice for a minute in the pan and you will notice it.\n\nBrown the mince hard, then add the onion and peppers and cook until soft. Stir in the rice, tomato purée and spices for a minute. The rice takes up the flavour before it ever meets the liquid, and that makes the finished dish taste deeper. **Measure the stock exactly.** Too much and the rice turns to porridge, too little and it stays hard.\n\nPour in the stock and tomatoes, bring to a simmer, cover and cook on the lowest heat for 20 minutes without lifting the lid. Then leave it off the heat for 5 minutes.\n\nFluff with a fork and serve straight from the pan. A wide pan with a tight lid cooks the rice evenly, whereas a narrow deep pan can leave the top hard.',
    ing: [
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, diced',
      '3 cloves garlic, crushed',
      '250 g long-grain rice',
      '2 tbsp tomato purée',
      '1 tsp smoked paprika',
      '1 tsp ground cumin',
      '400 g tinned chopped tomatoes',
      '300 ml beef stock',
      '1 tsp salt'
    ],
    st: [
      'Brown the mince in a large lidded pan for 6 minutes, then add the onion and pepper for 5 minutes.',
      'Stir in the garlic, rice, tomato purée, paprika and cumin for 1 minute.',
      'Pour in the tomatoes, stock and salt, bring to a simmer, cover and cook on the lowest heat for 20 minutes without lifting the lid.',
      'Leave off the heat for 5 minutes, then fluff with a fork.'
    ],
    tips: [
      'Brown the mince properly.',
      'Measure the stock.',
      'Do not lift the lid while it cooks.',
      'Rest it off the heat for 5 minutes.'
    ],
    pair: ['Green salad', 'Soured cream', 'Grated cheese', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Cool within an hour and reheat until hot all the way through.',
    nut: [552, 31, 62, 20, 4, 6, 940]
  },

  'oven-fried-chicken': {
    d: 'Chicken pieces coated in seasoned breadcrumbs and baked until the crust is crisp and the meat is juicy.',
    meta: 'Oven fried chicken: chicken pieces in seasoned breadcrumbs baked until crisp. Four servings, baked for 45 minutes.',
    kw: ['oven fried chicken', 'baked fried chicken', 'crispy oven fried chicken', 'oven fried chicken with breadcrumbs', 'oven baked fried chicken'],
    why: 'The first sound to listen for is crackle: a thin crust browning against the rack, which starts around the half-hour mark. That is how you know the coating has set.\n\nThe method has three layers. Buttermilk soaks into the chicken and seasons it, flour makes a base that grips, and seasoned breadcrumbs make the crust. Shake off the excess at every step. A thick coat steams instead of crisping. **Rest the coated pieces for 10 minutes before baking.** The coating then sticks instead of sliding off.\n\nSet the chicken on a rack over a tray, drizzle with a little oil, and bake at 200°C for 45 minutes, turning once. If your oven runs hot, check at 35 minutes.\n\nThe chicken is ready when the crust is dark gold and the juices run clear at the bone. Serve straight away, with coleslaw. Buttermilk can be replaced with milk mixed with a spoonful of lemon juice, left for 5 minutes.',
    ing: [
      '1.2 kg bone-in chicken thighs and drumsticks',
      '200 ml buttermilk',
      '60 g plain flour',
      '120 g dried breadcrumbs',
      '2 tbsp vegetable oil',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Toss the chicken with the buttermilk and half the salt and leave for 10 minutes.',
      'Heat the oven to 200°C. Mix the flour with the paprika, garlic powder, remaining salt and pepper, and put the breadcrumbs on a separate plate.',
      'Dip each piece in the flour, back into the buttermilk, then press into the breadcrumbs. Rest on a rack for 10 minutes.',
      'Drizzle with the oil and bake for 45 minutes, turning once, until dark gold and no pink remains.'
    ],
    tips: [
      'Shake off the excess at every step.',
      'Rest the coated pieces before baking.',
      'If your oven runs hot, check at 35 minutes.',
      'Bake on a rack.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Mashed potato', 'Green beans'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to bring back the crunch.',
    nut: [862, 57, 37, 54, 2, 4, 1110]
  }
};
