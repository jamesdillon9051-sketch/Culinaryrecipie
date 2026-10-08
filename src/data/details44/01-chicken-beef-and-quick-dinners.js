'use strict';

/**
 * Volume forty-four — chicken, beef and quick dinners, first part.
 *
 * Chicken sliders, a pasta salad, tikka wraps and pizza, saltimbocca, a
 * cordon bleu casserole, Provencal, bulgogi, shashlik, gyros, a Moroccan
 * style pastilla and a lemon orzo, then beef pho, a taco skillet, samosas,
 * a broccoli stir fry and goulash soup. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * from the ingredient list by npm run calc.
 */

module.exports = {
  'chicken-parmesan-sliders': {
    d: 'Breaded chicken pieces, tomato sauce and mozzarella in soft slider rolls, baked together and cut apart.',
    meta: 'Chicken parmesan sliders: breaded chicken, tomato sauce and mozzarella in soft rolls. Twelve servings, baked for 20 minutes.',
    kw: ['chicken parmesan sliders', 'baked chicken parmesan sliders', 'chicken parm sliders', 'mozzarella chicken sliders', 'chicken parmesan sliders for a party'],
    why: 'It looks like a chicken parmesan and eats like a sandwich, which is why the crumb coating matters more than anything else. A soft coating turns to paste under the sauce, and a crisp one holds its shape.\n\nCoat the chicken strips in flour, egg and breadcrumbs mixed with parmesan, then bake them first at 220°C for 12 minutes until golden. Do not skip this stage, because chicken that goes into the rolls raw releases water and the bread goes soggy. **Bake the chicken before assembling.** It sets the crust and makes the final bake a short one.\n\nSplit the slab of rolls in half, lay the base in a tin, and spread a thin layer of sauce on the bottom. Add the chicken, more sauce and the mozzarella, then put the top on and brush with melted butter and garlic.\n\nBake for 20 minutes at 180°C, covered for the first 10. If your oven runs hot, check at 15 minutes.',
    ing: [
      '500 g chicken breast, cut into 12 strips',
      '40 g plain flour',
      '2 eggs, about 100 g, beaten',
      '80 g dried breadcrumbs',
      '30 g parmesan, grated',
      '1/2 tsp salt',
      '300 g soft sandwich rolls, joined in a slab of twelve',
      '200 g passata',
      '1 tsp dried oregano',
      '200 g mozzarella, sliced',
      '30 g butter, melted',
      '1 clove garlic, crushed'
    ],
    st: [
      'Heat the oven to 220°C. Coat the chicken strips in the flour, then the egg, then the breadcrumbs mixed with the parmesan and salt.',
      'Bake on a lined tray for 12 minutes until golden. Lower the oven to 180°C.',
      'Split the slab of rolls in half and lay the base in a tin. Spread with half the passata mixed with the oregano.',
      'Add the chicken, the rest of the sauce and the mozzarella and put the top on.',
      'Brush with the butter mixed with the garlic, cover with foil and bake for 10 minutes, then uncover and bake for 10 minutes more.',
      'Rest for 5 minutes and cut into twelve.'
    ],
    tips: [
      'Bake the chicken before assembling.',
      'Use a thin layer of sauce.',
      'If your oven runs hot, check at 15 minutes.',
      'Cut with a serrated knife.'
    ],
    pair: ['Green salad', 'Oven chips', 'Garlic dip', 'Roasted tomatoes'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the rolls.',
    nut: [245, 19, 22, 9, 1, 3, 450]
  },

  'chicken-caesar-pasta-salad': {
    d: 'Pasta, grilled chicken, cos lettuce, parmesan and croutons tossed in a creamy Caesar dressing.',
    meta: 'Chicken Caesar pasta salad: pasta, chicken, cos lettuce and parmesan in a creamy dressing. Four servings, cooked for 12 minutes.',
    kw: ['chicken caesar pasta salad', 'caesar pasta salad with chicken', 'creamy chicken caesar pasta salad', 'chicken caesar pasta salad with croutons', 'pasta salad with caesar dressing'],
    why: 'A pasta salad that is dry by the second day is the common complaint, and the fix is to keep some dressing back. Pasta keeps absorbing it as it stands, and a salad that looked glossy at noon is tight by evening.\n\nCook the pasta for a minute under the packet time and rinse it under cold water so it stops softening and does not clump. Dry it well. Water left in the bowl thins the dressing. **Dress it in two goes.** Half goes on while the pasta is still slightly warm, and half just before serving.\n\nCook the chicken breasts in a hot pan for 6 minutes a side with salt and pepper, rest them for 5 minutes, then slice. Slicing hot chicken lets the juices run out onto the board.\n\nToss the pasta, chicken, lettuce, parmesan and croutons with the dressing at the last moment so that the croutons stay crisp.',
    ing: [
      '250 g fusilli',
      '2 chicken breasts, about 350 g',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 little gem lettuces, about 200 g, sliced',
      '40 g parmesan, shaved',
      '60 g croutons',
      '100 g mayonnaise',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '2 anchovy fillets, about 10 g, finely chopped',
      '1 tsp Dijon mustard'
    ],
    st: [
      'Boil the fusilli for 9 minutes, 1 minute under the packet time. Drain, rinse in cold water and dry well.',
      'Season the chicken with the salt and pepper and fry in the oil for 6 minutes a side until no pink remains. Rest for 5 minutes, then slice.',
      'Stir the mayonnaise, lemon juice, garlic, anchovies and mustard into a dressing, adding a splash of water to loosen it.',
      'Toss the pasta with half the dressing. Just before serving add the chicken, lettuce, parmesan and croutons and the rest of the dressing.'
    ],
    tips: [
      'Rinse the pasta and dry it well.',
      'Dress the salad in two stages.',
      'Rest the chicken before slicing.',
      'Add the croutons last.'
    ],
    pair: ['Garlic bread', 'Cherry tomatoes', 'Sparkling water with lemon', 'Corn on the cob'],
    store: 'Keeps in the fridge for 2 days without the croutons. Add fresh croutons and extra dressing before serving.',
    nut: [650, 35, 60, 30, 4, 4, 860]
  },

  'chicken-tikka-wraps': {
    d: 'Chicken pieces in a yoghurt and spice marinade, cooked in a hot pan and rolled in flatbreads with mint yoghurt and salad.',
    meta: 'Chicken tikka wraps: spiced yoghurt chicken in flatbreads with mint yoghurt and salad. Four servings, cooked for 12 minutes.',
    kw: ['chicken tikka wraps', 'chicken tikka wraps with mint yoghurt', 'homemade chicken tikka wraps', 'chicken tikka flatbread wraps', 'chicken tikka wraps with salad'],
    why: 'The first sign it is ready is the smell: yoghurt and spices catching on a hot pan and turning from pale orange to deep brown at the edges. Those charred edges are what make a tikka taste like one.\n\nMix the chicken with the yoghurt, tikka paste, lemon juice and salt and leave it while you prepare the rest, for about 15 minutes. Yoghurt tenderises the meat without making it mushy. Cook it in a very hot pan in a single layer. **Do not crowd the pan.** Crowded chicken steams and stays pale.\n\nTurn the pieces after 5 minutes and cook for another 5 to 6 minutes, until they are charred in places and cooked all the way through.\n\nWarm the flatbreads for 20 seconds a side. Spread with mint yoghurt, add lettuce, cucumber and red onion, pile on the chicken and roll tightly. Thighs are juicier than breast here, and forgiving if the pan runs a little long.',
    ing: [
      '500 g chicken thighs, boneless, cut into chunks',
      '100 g natural yoghurt',
      '2 tbsp tikka masala paste',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '4 flatbreads, about 240 g',
      '100 g natural yoghurt, for the sauce',
      '1 tbsp mint sauce',
      '60 g lettuce, shredded',
      '1/2 cucumber, about 150 g, sliced',
      '1/2 red onion, about 50 g, sliced'
    ],
    st: [
      'Stir the chicken with the 100 g of yoghurt, tikka paste, lemon juice and salt and leave for 15 minutes.',
      'Heat the oil in a large pan until very hot and cook the chicken in a single layer for 5 minutes, then turn and cook for 5 to 6 minutes more until charred and cooked through.',
      'Mix the remaining yoghurt with the mint sauce.',
      'Warm the flatbreads in a dry pan for 20 seconds a side.',
      'Spread each with the mint yoghurt, add the lettuce, cucumber, onion and chicken, and roll up tightly.'
    ],
    tips: [
      'Use a very hot pan.',
      'Cook in a single layer.',
      'If the pan is small, cook in two batches.',
      'Warm the flatbreads so they roll without cracking.'
    ],
    pair: ['Mango chutney', 'Cucumber raita', 'Lime pickle', 'Poppadoms'],
    store: 'Keeps in the fridge for 2 days. Reheat the chicken in a hot pan and fill fresh flatbreads.',
    nut: [402, 33, 36, 14, 2, 5, 880]
  },

  'chicken-saltimbocca': {
    d: 'Thin chicken escalopes topped with prosciutto and sage, fried and finished with a white wine and butter pan sauce.',
    meta: 'Chicken saltimbocca: thin chicken topped with prosciutto and sage, fried and finished in a wine butter sauce. Four servings.',
    kw: ['chicken saltimbocca', 'chicken saltimbocca with prosciutto and sage', 'chicken saltimbocca recipe', 'chicken saltimbocca with white wine sauce', 'italian chicken saltimbocca'],
    why: 'Chicken, prosciutto, sage, wine and butter: five things, and about twenty-five minutes. The dish is simple, so the only skill is in the preparation.\n\nBeat each breast between baking paper to an even 1 cm thickness. Thin, even chicken cooks in 3 minutes a side and does not dry out. Season lightly, because the prosciutto is salty. Lay a sage leaf on each piece, wrap or cover with prosciutto, and press it down firmly. **Fry the prosciutto side down first.** The ham crisps and seals itself to the chicken.\n\nFry in the oil and butter for 3 minutes, then turn for 3 minutes more. Lift onto a warm plate. Pour the wine into the same pan and scrape up the browned bits, then let it bubble for 3 minutes and swirl in the cold butter.\n\nSpoon the sauce over the chicken and serve at once with sautéed greens or potatoes.',
    ing: [
      '4 chicken breasts, about 600 g',
      '8 fresh sage leaves, about 5 g',
      '8 slices prosciutto, about 80 g',
      '1 tbsp olive oil',
      '20 g butter',
      '100 ml dry white wine',
      '15 g cold butter, to finish',
      '1/4 tsp black pepper'
    ],
    st: [
      'Slice each breast in half through its thickness and beat the pieces between baking paper to 1 cm thick. Season with the pepper.',
      'Lay a sage leaf on each piece and cover with a slice of prosciutto, pressing firmly.',
      'Heat the oil and 20 g of butter in a wide pan and fry the pieces prosciutto-side down for 3 minutes, then turn and cook for 3 minutes more. Move to a warm plate.',
      'Pour the wine into the pan, scraping up the browned bits, and bubble for 3 minutes.',
      'Swirl in the cold butter, spoon the sauce over the chicken and serve.'
    ],
    tips: [
      'Beat the chicken to an even thickness.',
      'Go light on the salt.',
      'Fry the prosciutto side first.',
      'Add the cold butter off the heat for a glossy sauce.'
    ],
    pair: ['Sautéed spinach', 'Roast potatoes', 'Green beans', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [313, 39, 1, 17, 0, 0, 470]
  },

  'chicken-cordon-bleu-casserole': {
    d: 'Chunks of chicken and ham in a creamy Swiss cheese sauce, topped with buttered breadcrumbs and baked.',
    meta: 'Chicken cordon bleu casserole: chicken and ham in a cheesy cream sauce under breadcrumbs. Six servings, baked for 30 minutes.',
    kw: ['chicken cordon bleu casserole', 'baked chicken cordon bleu casserole', 'cordon bleu casserole with ham and swiss', 'creamy chicken and ham casserole', 'chicken cordon bleu casserole with breadcrumbs'],
    why: 'The first sign it is ready is the smell: butter and breadcrumbs toasting while the cheese sauce bubbles below. It is a rich smell, and it means the top is nearly done.\n\nThe dish borrows the idea of chicken cordon bleu, which is chicken, ham and Swiss cheese, without the work of rolling and frying. Cook the chicken first in a hot pan for 6 minutes so that it browns, because chicken stirred into a sauce raw stays pale and tastes of little. Make the sauce from butter, flour, milk and the cheese, and take it off the heat before the cheese goes in. **Do not boil the cheese sauce.** It splits into grease and grains.\n\nStir the ham and chicken through the sauce, tip into a dish and cover with the crumbs.\n\nBake at 200°C for 30 minutes until bubbling at the edges and golden on top. If your oven runs hot, check at 25 minutes.',
    ing: [
      '600 g chicken breast, diced',
      '1 tbsp vegetable oil',
      '40 g butter',
      '40 g plain flour',
      '500 ml whole milk',
      '150 g Swiss cheese, grated',
      '1 tsp Dijon mustard',
      '200 g cooked ham, diced',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '60 g dried breadcrumbs',
      '20 g butter, melted'
    ],
    st: [
      'Heat the oven to 200°C. Brown the chicken in the oil for 6 minutes and set aside.',
      'Melt the 40 g of butter, stir in the flour for 1 minute and whisk in the milk a little at a time. Simmer for 5 minutes until thick.',
      'Take off the heat and stir in the cheese, mustard, salt and pepper.',
      'Stir in the chicken and ham and tip into a baking dish.',
      'Mix the breadcrumbs with the melted butter and scatter over. Bake for 30 minutes until golden and bubbling.'
    ],
    tips: [
      'Brown the chicken first.',
      'Take the pan off the heat before adding cheese.',
      'If your oven runs hot, check at 25 minutes.',
      'Rest it for 5 minutes before serving.'
    ],
    pair: ['Steamed broccoli', 'Green salad', 'Buttered noodles', 'Roasted carrots'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [457, 41, 17, 25, 1, 5, 810]
  },

  'chicken-provencal': {
    d: 'Chicken thighs braised with tomatoes, olives, garlic, thyme and white wine, with a splash of olive oil to finish.',
    meta: 'Chicken Provencal: chicken thighs braised with tomatoes, olives, garlic and thyme. Four servings, cooked for 40 minutes.',
    kw: ['chicken provencal', 'french chicken provencal', 'chicken provencal with olives', 'chicken provencal with tomatoes and thyme', 'braised chicken provencal'],
    why: 'The first sign it is ready is the smell: garlic, thyme and tomato reducing together until the kitchen smells of a French summer. That is the signal to stop adding things and start waiting.\n\nBrown the chicken skin-side down for 8 minutes until the fat has rendered and the skin is deep gold. Do not move the pieces while they brown, because they will release themselves when they are ready. Pour off most of the fat, soften the onion and garlic in what is left, then add the wine. **Scrape the base of the pan as the wine bubbles.** The browned bits dissolve and become the sauce.\n\nAdd the tomatoes, thyme and olives, return the chicken skin-side up and simmer, partly covered, for 25 minutes, until the meat is tender and the sauce is thick.\n\nThe olives are salty, so taste before you add any more salt. Use pitted olives, since stones are easy to miss in a thick sauce.',
    ing: [
      '8 bone-in chicken thighs, about 1.2 kg',
      '1 tbsp olive oil',
      '1 onion, about 150 g, sliced',
      '4 cloves garlic, sliced',
      '150 ml dry white wine',
      '400 g tinned chopped tomatoes',
      '4 sprigs thyme, about 5 g',
      '100 g black olives, pitted',
      '1/2 tsp black pepper',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Brown the chicken skin-side down in the oil for 8 minutes without moving it. Turn and brown for 2 minutes, then set aside.',
      'Pour off all but 1 tbsp of the fat. Soften the onion for 5 minutes, then add the garlic for 1 minute.',
      'Add the wine, scraping the pan, and bubble for 3 minutes. Stir in the tomatoes, thyme, olives and pepper.',
      'Return the chicken skin-side up, cover partly and simmer for 25 minutes until tender.',
      'Scatter with the parsley and serve.'
    ],
    tips: [
      'Brown the skin without moving it.',
      'Scrape the pan after adding the wine.',
      'Taste before adding salt.',
      'Keep the skin above the sauce so it stays crisp.'
    ],
    pair: ['Crusty bread', 'Buttered rice', 'Green beans', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Reheat gently until hot all the way through.',
    nut: [729, 52, 11, 53, 3, 5, 640]
  },

  'chicken-bulgogi': {
    d: 'Thinly sliced chicken thighs in a soy, pear, garlic and sesame marinade, seared in a hot pan and served with rice.',
    meta: 'Chicken bulgogi: sliced chicken thighs in a soy, pear, garlic and sesame sauce, seared in a hot pan. Four servings, cooked for 12 minutes.',
    kw: ['chicken bulgogi', 'korean chicken bulgogi', 'chicken bulgogi with rice', 'chicken bulgogi marinade', 'chicken bulgogi recipe'],
    why: 'Slice the chicken thin and cook it hot. That is the single most useful instruction, because bulgogi is built on thin pieces that sear in minutes and stay tender.\n\nPartly freezing the thighs for 20 minutes makes them much easier to slice. Grate the pear into the marinade. Its juice and enzymes tenderise the meat and add a gentle sweetness that sugar alone does not. Mix it with the soy sauce, garlic, ginger, sesame oil and honey, stir through the chicken and leave it for about 15 minutes. **Do not marinate for hours.** The pear softens the meat too far and makes it mushy.\n\nCook in a very hot pan in two batches, 4 to 5 minutes each, until the edges are caramelised. Crowding the pan boils the meat.\n\nServe over rice with sliced spring onion, sesame seeds and lettuce leaves to wrap it in. Asian pears are sold in larger supermarkets, and a ripe ordinary pear is a fair substitute.',
    ing: [
      '600 g boneless chicken thighs, thinly sliced',
      '1 Asian pear, about 150 g, grated',
      '4 tbsp soy sauce',
      '3 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tbsp sesame oil',
      '1 tbsp honey',
      '1 tbsp vegetable oil',
      '3 spring onions, about 45 g, sliced',
      '1 tbsp sesame seeds',
      '300 g cooked rice'
    ],
    st: [
      'Mix the pear, soy sauce, garlic, ginger, sesame oil and honey, stir through the chicken and leave for 15 minutes.',
      'Heat the vegetable oil in a large pan until very hot.',
      'Cook the chicken in two batches for 4 to 5 minutes each until caramelised at the edges and cooked through.',
      'Serve over the rice with the spring onions and sesame seeds.'
    ],
    tips: [
      'Slice the chicken thin.',
      'Keep the marinade short.',
      'Cook in batches.',
      'Serve with lettuce leaves for wrapping.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Lettuce leaves', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [407, 34, 34, 15, 2, 8, 1020]
  },

  'chicken-shashlik': {
    d: 'Chicken, peppers and onion on skewers, marinated in spiced yoghurt and grilled until charred at the edges.',
    meta: 'Chicken shashlik: chicken, peppers and onion on skewers in a spiced yoghurt marinade, grilled for 15 minutes. Four servings.',
    kw: ['chicken shashlik', 'indian chicken shashlik', 'chicken shashlik skewers', 'grilled chicken shashlik', 'chicken shashlik with peppers'],
    why: 'Shashlik is the name for skewered grilled meat across a wide stretch of Central Asia, and the Indian restaurant version adds peppers and onion on the same stick. The skewer is the point: everything cooks together and shares the char.\n\nCut the chicken, peppers and onion into pieces of a similar size, about 3 cm, so that they cook at the same rate. Toss them in the yoghurt, garlic, ginger, chilli powder, garam masala and lemon juice and leave for about 15 minutes while the grill heats. **Thread them with a little space between pieces.** Packed tight, the sides stay raw and the outsides burn.\n\nGrill under a high heat for 15 minutes, turning every 4 minutes, until the chicken is cooked through and the edges are blackened in places. If you use wooden skewers, soak them in water for 20 minutes first.\n\nServe with rice, onion rings and lemon wedges.',
    ing: [
      '600 g chicken breast, cut into 3 cm pieces',
      '2 peppers, about 300 g, cut into 3 cm pieces',
      '1 onion, about 150 g, cut into chunks',
      '120 g natural yoghurt',
      '3 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tsp chilli powder',
      '1 tsp garam masala',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Stir the yoghurt, garlic, ginger, chilli powder, garam masala, lemon juice, salt and oil together and toss through the chicken. Leave for 15 minutes.',
      'Heat the grill to high. Thread the chicken, peppers and onion onto skewers with a little space between each piece.',
      'Grill for 15 minutes, turning every 4 minutes, until charred and cooked through.',
      'Serve at once.'
    ],
    tips: [
      'Cut everything the same size.',
      'Leave a little space on the skewer.',
      'Soak wooden skewers for 20 minutes.',
      'If the edges burn, move the tray lower.'
    ],
    pair: ['Basmati rice', 'Cucumber raita', 'Onion rings', 'Naan bread'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in a pan or oven.',
    nut: [273, 36, 12, 9, 3, 6, 390]
  },

  'chicken-gyros': {
    d: 'Spiced chicken thighs cooked in a hot pan and wrapped in warm pitta with tzatziki, tomato and red onion.',
    meta: 'Chicken gyros: spiced chicken in warm pitta with tzatziki, tomato and red onion. Four servings, cooked for 15 minutes.',
    kw: ['chicken gyros', 'greek chicken gyros', 'chicken gyros with tzatziki', 'homemade chicken gyros', 'chicken gyros in pitta'],
    why: 'Season the chicken boldly. That is the most useful instruction here, because a gyro is only as good as the meat inside it, and chicken on its own is mild.\n\nThe seasoning is oregano, paprika, garlic powder, cumin and lemon juice with the oil, rubbed into thin strips of thigh. Thighs stay juicy in a fast fry, where breast turns dry. Cook the chicken in a very hot pan for 6 to 7 minutes, turning once, until it is browned and a little charred at the edges. **Do not stir constantly.** Meat left alone browns, and meat stirred steams.\n\nWarm the pitta in a dry pan for 20 seconds a side, so it folds without cracking. Spread a generous spoonful of tzatziki, add the tomato, onion and cucumber, then the chicken, and fold.\n\nEat while it is warm, with a napkin. Chips tucked into the pitta are traditional in Greece, so add a handful if you like.',
    ing: [
      '600 g boneless chicken thighs, cut into thin strips',
      '2 tbsp olive oil',
      '2 tsp dried oregano',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp ground cumin',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '4 pitta breads, about 280 g',
      '150 g tzatziki',
      '2 tomatoes, about 200 g, sliced',
      '1/2 red onion, about 50 g, sliced',
      '1/2 cucumber, about 150 g, sliced'
    ],
    st: [
      'Toss the chicken with 1 tbsp of the oil, the oregano, paprika, garlic powder, cumin, lemon juice and salt.',
      'Heat the remaining oil in a large pan until very hot and cook the chicken for 6 to 7 minutes, turning once, until browned and cooked through.',
      'Warm the pitta in a dry pan for 20 seconds a side.',
      'Spread with the tzatziki, add the tomato, onion, cucumber and chicken, and fold.'
    ],
    tips: [
      'Use thighs for juicier meat.',
      'Leave the chicken alone while it browns.',
      'Warm the pitta before filling.',
      'Add chips to the filling if you want it Greek style.'
    ],
    pair: ['Greek salad', 'Oven chips', 'Lemon wedges', 'Olives'],
    store: 'Keeps in the fridge for 2 days. Reheat the chicken in a hot pan and use fresh pitta.',
    nut: [482, 38, 42, 18, 4, 7, 870]
  },

  'chicken-tikka-pizza': {
    d: 'A flatbread base topped with tikka-spiced chicken, red onion, peppers and mozzarella, baked until crisp.',
    meta: 'Chicken tikka pizza: a flatbread base with tikka chicken, onion, peppers and mozzarella. Four servings, baked for 15 minutes.',
    kw: ['chicken tikka pizza', 'homemade chicken tikka pizza', 'chicken tikka masala pizza', 'chicken tikka pizza with mozzarella', 'chicken tikka pizza on flatbread'],
    why: 'Can you put curry on a pizza and have it work? Yes, as long as the chicken is cooked first and the sauce is not too wet. Wet toppings are the usual reason a pizza goes soggy in the middle.\n\nFry the diced chicken with the tikka paste in a hot pan for 6 minutes until it is cooked through and the paste has dried onto the meat. Mix the tomato purée with a spoonful of the paste for the sauce base, and spread it thin. **Keep the topping dry.** A puddle of sauce under the cheese is what causes a soggy centre.\n\nBake the bases alone for 4 minutes at 220°C, add the sauce, chicken, onion, peppers and mozzarella, and bake for 10 to 11 minutes more until the cheese is spotted gold. If your oven runs hot, check at 8 minutes.\n\nFinish with fresh coriander and a drizzle of mint yoghurt.',
    ing: [
      '4 flatbread pizza bases, about 400 g',
      '350 g chicken breast, diced',
      '2 tbsp tikka masala paste',
      '1 tbsp vegetable oil',
      '4 tbsp tomato purée',
      '1 red onion, about 100 g, thinly sliced',
      '1 pepper, about 150 g, thinly sliced',
      '200 g mozzarella, grated',
      '10 g coriander leaves',
      '60 g natural yoghurt',
      '1 tbsp mint sauce'
    ],
    st: [
      'Heat the oven to 220°C. Fry the chicken with 1 tbsp of the tikka paste in the oil for 6 minutes until cooked through.',
      'Mix the remaining paste with the tomato purée.',
      'Bake the bases on trays for 4 minutes. Spread with a thin layer of the tomato mix.',
      'Top with the chicken, onion, pepper and mozzarella and bake for 10 to 11 minutes until golden.',
      'Scatter with the coriander and drizzle with the yoghurt mixed with the mint sauce.'
    ],
    tips: [
      'Cook the chicken first.',
      'Bake the bases before topping.',
      'If your oven runs hot, check at 8 minutes.',
      'Keep the sauce thin.'
    ],
    pair: ['Green salad', 'Mango chutney', 'Cucumber raita', 'Lime pickle'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the base.',
    nut: [594, 41, 58, 22, 4, 8, 1010]
  },

  'chicken-pastilla': {
    d: 'Spiced shredded chicken, almonds and egg wrapped in layers of crisp filo, baked and dusted with cinnamon and sugar.',
    meta: 'Chicken pastilla: spiced chicken, almonds and egg in layers of crisp filo, baked for 45 minutes. Six servings.',
    kw: ['chicken pastilla', 'moroccan style chicken pastilla', 'chicken pastilla with almonds', 'chicken pastilla with filo', 'sweet and savoury chicken pastilla'],
    why: 'This is what to make for a special table in cooler weather, a pie that is savoury inside and sweet on top. The contrast is the point, and it is the part that surprises people.\n\nThe filling is chicken simmered with onion, ginger, saffron and cinnamon until tender, then shredded. Reduce the cooking liquid until it is thick, stir in the beaten eggs and let them set into soft curds. A wet filling makes the pastry soggy and a dry one is dull, so aim for a moist, set mixture. **Cool the filling completely before it goes into the filo.** Hot filling steams the layers and they never crisp.\n\nBrush each sheet of filo with butter as you layer it. Fill, fold the edges over and bake at 190°C for 45 minutes. If your oven runs hot, check at 35 minutes.\n\nDust with icing sugar and cinnamon in thin stripes just before serving.',
    ing: [
      '700 g chicken thighs, bone in',
      '2 onions, about 300 g, grated',
      '10 g fresh ginger, grated',
      '1 tsp ground cinnamon',
      '1 tsp ground turmeric',
      '1 pinch saffron, about 0.2 g',
      '300 ml water',
      '3 eggs, about 150 g, beaten',
      '80 g flaked almonds, toasted',
      '15 g flat-leaf parsley, chopped',
      '300 g filo pastry',
      '80 g butter, melted',
      '2 tbsp icing sugar',
      '1/2 tsp ground cinnamon, for dusting'
    ],
    st: [
      'Simmer the chicken, onions, ginger, 1 tsp cinnamon, turmeric, saffron and water, covered, for 30 minutes. Lift out the chicken, shred it and discard the bones and skin.',
      'Boil the liquid until reduced to about 100 ml. Lower the heat, stir in the eggs until softly set, then mix in the chicken, almonds and parsley. Cool completely.',
      'Heat the oven to 190°C. Brush a 24 cm tin with butter and line with half the filo, layering the sheets with butter and letting the edges hang over.',
      'Spoon in the filling, fold the edges over and cover with the remaining filo brushed with butter, tucking in the sides.',
      'Bake for 45 minutes until deep gold. Dust with the icing sugar and cinnamon.'
    ],
    tips: [
      'Cool the filling fully.',
      'Brush every layer with butter.',
      'If your oven runs hot, check at 35 minutes.',
      'Keep unused filo covered with a damp cloth.'
    ],
    pair: ['Green salad', 'Orange and olive salad', 'Mint tea', 'Couscous'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the pastry.',
    nut: [534, 34, 41, 26, 4, 8, 390]
  },

  'lemon-chicken-orzo': {
    d: 'Chicken thighs and orzo baked together in a lemon, garlic and oregano stock until the pasta has soaked up the juices.',
    meta: 'Lemon chicken orzo: chicken thighs and orzo baked in lemon, garlic and oregano stock. Four servings, baked for 30 minutes.',
    kw: ['lemon chicken orzo', 'baked lemon chicken orzo', 'lemon chicken and orzo bake', 'greek lemon chicken with orzo', 'one dish lemon chicken orzo'],
    why: 'The first sign it is ready is the smell of lemon and oregano turning savoury as the chicken fat runs into the orzo. Open the oven door at 20 minutes and it should hit you.\n\nOrzo is a small pasta shaped like rice, and it soaks up stock as it bakes instead of needing its own pan. Toast it in the oil for 2 minutes first, because toasted orzo tastes nuttier and keeps its shape. Stir in the stock, lemon juice and garlic, then lay the seasoned chicken thighs on top, skin-side up. **Leave the skin above the liquid.** It crisps in the oven, where submerged skin turns pale and soft.\n\nBake at 200°C for 30 minutes. If your oven runs hot, check at 25 minutes. The orzo should be tender and the stock fully absorbed.\n\nStir in the spinach and a squeeze of lemon, and rest for 5 minutes.',
    ing: [
      '8 bone-in chicken thighs, about 1.2 kg',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '300 g orzo',
      '600 ml hot chicken stock',
      '2 lemons, about 200 g, juiced',
      '3 cloves garlic, crushed',
      '100 g baby spinach'
    ],
    st: [
      'Heat the oven to 200°C. Season the chicken with the oregano, half the salt and the pepper.',
      'Toast the orzo in the oil in an ovenproof pan for 2 minutes. Stir in the stock, lemon juice, garlic and remaining salt.',
      'Lay the chicken skin-side up on top and bake uncovered for 30 minutes until the chicken is cooked and the orzo has absorbed the stock.',
      'Stir the spinach into the orzo, rest for 5 minutes and serve.'
    ],
    tips: [
      'Toast the orzo first.',
      'Keep the skin above the liquid.',
      'If your oven runs hot, check at 25 minutes.',
      'Add the spinach at the end.'
    ],
    pair: ['Greek salad', 'Lemon wedges', 'Steamed green beans', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water, as the orzo thickens.',
    nut: [967, 63, 64, 51, 5, 4, 1360]
  },

  'beef-pho': {
    d: 'Beef bones and brisket simmered for two hours with charred onion, ginger and warm spices, served over rice noodles with raw beef, herbs and lime.',
    meta: 'Beef pho: a spiced beef broth poured over rice noodles, raw beef, herbs and lime. Four servings, cooked for 2 hours.',
    kw: ['beef pho', 'vietnamese beef pho', 'homemade beef pho', 'beef pho broth', 'pho bo'],
    why: 'What gives pho its clear, deep broth? Charring the onion and ginger first, and never letting the pot boil hard. Both steps are easy, and both are skipped by most first attempts.\n\nBlacken the onion and ginger under a hot grill for 10 minutes until the skins are black and the flesh is soft. Rinse off the worst of the char. This gives a sweetness that raw onion never will. Toast the star anise, cinnamon and cloves in a dry pan for 1 minute until they smell warm. **Keep the broth at a gentle simmer.** Boiling hard stirs the fat and scum into the liquid and turns it cloudy.\n\nSimmer the bones, brisket, onion, ginger, spices, fish sauce and sugar for 2 hours, skimming now and then. Strain, season, and keep the broth just below boiling.\n\nPour over noodles and paper-thin raw beef in each bowl, so the hot broth cooks it, and serve with herbs, bean sprouts and lime.',
    ing: [
      '1 kg beef bones',
      '400 g beef brisket',
      '2 onions, about 300 g, halved',
      '60 g fresh ginger, halved',
      '3 star anise, about 3 g',
      '1 cinnamon stick, about 3 g',
      '4 whole cloves, about 1 g',
      '2 litres water',
      '3 tbsp fish sauce',
      '1 tbsp sugar',
      '300 g rice noodles',
      '200 g beef sirloin, very thinly sliced',
      '100 g bean sprouts',
      '20 g Thai basil leaves',
      '2 limes, cut into wedges'
    ],
    st: [
      'Grill the onions and ginger for 10 minutes until blackened. Rinse lightly.',
      'Toast the star anise, cinnamon and cloves in a dry pan for 1 minute.',
      'Put the bones, brisket, onions, ginger, spices, water, fish sauce and sugar in a large pot and bring to a gentle simmer. Cook for 2 hours, skimming now and then.',
      'Lift out the brisket, slice it thinly, and strain the broth. Season with more fish sauce if needed.',
      'Cook the noodles as the packet says and divide between four bowls. Top with the raw sirloin and brisket, pour over the boiling broth and add the sprouts, basil and lime.'
    ],
    tips: [
      'Char the onion and ginger.',
      'Keep the broth at a gentle simmer.',
      'Skim as it cooks.',
      'Slice the raw beef paper thin.'
    ],
    pair: ['Lime wedges', 'Fresh chillies', 'Hoisin sauce', 'Fresh herbs'],
    store: 'Keep the broth in the fridge for 4 days and the noodles separate. Bring the broth back to a boil before serving.',
    nut: [692, 41, 78, 24, 4, 8, 940]
  },

  'beef-taco-skillet': {
    d: 'Beef mince, peppers, black beans and rice cooked in one pan in a tomato and taco spice sauce, finished with melted cheese.',
    meta: 'Beef taco skillet: beef mince, peppers, black beans and rice in one pan under melted cheese. Four servings, cooked for 20 minutes.',
    kw: ['beef taco skillet', 'beef taco skillet recipe', 'taco skillet with rice and beans', 'ground beef taco skillet', 'cheesy beef taco skillet'],
    why: 'Season the beef properly. That is most of it, and the part that people hurry. Plain mince with a sachet stirred in at the end tastes thin, and mince browned hard with the spices has depth.\n\nBrown the mince in a wide pan for 6 minutes without breaking it up straight away, so it forms a crust, then chop it into crumbs. Add the onion and pepper and cook for 4 minutes. Stir in the taco spices for 1 minute, which wakes them up in the fat. **Do not add the rice until the spices have cooked.** Raw spice in liquid tastes dusty.\n\nPour in the tomatoes and water, add the beans and the rice, cover and simmer for 12 minutes until the rice is tender and most of the liquid has gone.\n\nScatter over the cheese, cover for 2 minutes to melt it, and serve with soured cream and lime.',
    ing: [
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, diced',
      '2 tbsp taco seasoning',
      '200 g tinned chopped tomatoes',
      '200 ml water',
      '240 g drained tinned black beans',
      '150 g long-grain rice',
      '120 g cheddar, grated',
      '60 g soured cream',
      '1 lime, cut into wedges'
    ],
    st: [
      'Brown the mince in a wide lidded pan for 6 minutes, then break it up.',
      'Add the onion and pepper for 4 minutes, then the taco seasoning for 1 minute.',
      'Stir in the tomatoes, water, beans and rice, cover and simmer for 12 minutes until the rice is tender.',
      'Scatter over the cheese, cover for 2 minutes until melted, and serve with the soured cream and lime.'
    ],
    tips: [
      'Brown the mince hard.',
      'Cook the spices before adding liquid.',
      'Keep the lid on while the rice cooks.',
      'Add more water if the rice is still firm.'
    ],
    pair: ['Tortilla chips', 'Guacamole', 'Shredded lettuce', 'Sliced jalapenos'],
    store: 'Keeps in the fridge for 3 days. Cool within an hour and reheat until hot all the way through.',
    nut: [657, 40, 50, 33, 7, 6, 470]
  },

  'beef-samosas': {
    d: 'Spiced beef mince and peas in folded pastry triangles, brushed with oil and baked until crisp.',
    meta: 'Beef samosas: spiced beef mince and peas in folded filo triangles, baked for 25 minutes. Twelve servings.',
    kw: ['beef samosas', 'baked beef samosas', 'spiced beef samosas', 'beef mince samosas', 'beef samosas with peas'],
    why: 'Cool the filling. That is the single most useful instruction, because a hot filling steams the pastry from the inside and it never crisps.\n\nFry the onion, garlic and ginger until soft, then the mince until browned and dry. Stir in the cumin, coriander, garam masala and chilli for a minute. Add the peas and cook until any liquid has gone, because wet filling soaks through the pastry. Spread it on a plate to cool completely. **Be patient with the cooling.** It takes about 20 minutes, and everything after depends on it.\n\nCut each filo sheet into strips, put a spoonful of filling at one end and fold the corner over to make a triangle, then fold again and again along the strip, as you would a flag. Brush with oil and seal the end.\n\nBake at 200°C for 25 minutes, turning once, until crisp and golden. If your oven runs hot, check at 20 minutes.',
    ing: [
      '300 g beef mince',
      '1 onion, about 150 g, finely chopped',
      '2 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tbsp vegetable oil',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '100 g frozen peas',
      '1/2 tsp salt',
      '250 g filo pastry',
      '40 ml vegetable oil, for brushing'
    ],
    st: [
      'Soften the onion in the 1 tbsp of oil for 5 minutes, then add the garlic and ginger for 1 minute.',
      'Add the mince and brown for 6 minutes until dry. Stir in the cumin, coriander, garam masala, chilli and salt for 1 minute, then the peas for 2 minutes.',
      'Spread on a plate and cool completely, about 20 minutes. Heat the oven to 200°C.',
      'Cut the filo into strips about 8 cm wide. Put a spoonful of filling at one end, fold the corner over into a triangle and keep folding along the strip. Seal the end with a little oil.',
      'Brush with the oil and bake on a lined tray for 25 minutes, turning once, until golden.'
    ],
    tips: [
      'Cool the filling completely.',
      'Cook off all the liquid.',
      'If your oven runs hot, check at 20 minutes.',
      'Keep unused filo covered.'
    ],
    pair: ['Mint chutney', 'Mango chutney', 'Cucumber raita', 'Tamarind chutney'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the pastry.',
    nut: [169, 7, 15, 9, 1, 1, 220]
  },

  'beef-and-broccoli-stir-fry': {
    d: 'Thin strips of beef and broccoli florets stir-fried in a garlic, ginger, oyster and soy sauce glaze.',
    meta: 'Beef and broccoli stir fry: sliced beef and broccoli in a garlic, ginger, oyster and soy glaze. Four servings, cooked for 12 minutes.',
    kw: ['beef and broccoli stir fry', 'chinese beef and broccoli', 'beef and broccoli with oyster sauce', 'beef and broccoli stir fry with rice', 'takeaway style beef and broccoli'],
    why: 'Beef and broccoli is a takeaway classic, and the reason it is hard to match at home is the beef. Restaurant meat is soft because it is sliced thin, coated in a little cornflour and bicarbonate, and cooked hot and fast.\n\nSlice the steak across the grain into strips as thin as you can manage. A half-frozen steak slices much more easily. Toss the strips with the cornflour and soy sauce and leave them for 10 minutes. Cook in a very hot wok in two batches, because beef crowded into a cool pan turns grey and tough. **Cook the beef for no more than 2 minutes.** It goes back in at the end and finishes cooking in the sauce.\n\nSteam the broccoli in the wok with a splash of water and the lid on for 2 minutes until bright green and just tender. Add the garlic and ginger, return the beef, pour in the sauce and toss for a minute.\n\nServe over rice.',
    ing: [
      '400 g sirloin steak, thinly sliced',
      '1 tbsp cornflour',
      '2 tbsp soy sauce',
      '2 tbsp vegetable oil',
      '300 g broccoli florets',
      '60 ml water',
      '3 cloves garlic, sliced',
      '10 g fresh ginger, grated',
      '3 tbsp oyster sauce',
      '1 tsp sesame oil',
      '300 g cooked rice'
    ],
    st: [
      'Toss the steak with the cornflour and 1 tbsp of the soy sauce and leave for 10 minutes.',
      'Heat half the oil in a wok until smoking and sear the beef in two batches for 90 seconds each. Set aside.',
      'Add the rest of the oil, the broccoli and the water, cover and steam for 2 minutes.',
      'Add the garlic and ginger for 30 seconds, then return the beef with the oyster sauce, remaining soy sauce and sesame oil and toss for 1 minute.',
      'Serve over the rice.'
    ],
    tips: [
      'Slice the beef thin across the grain.',
      'Sear in batches.',
      'Do not overcook the beef.',
      'Have everything ready before you start.'
    ],
    pair: ['Steamed rice', 'Egg fried rice', 'Stir-fried noodles', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan or the microwave until hot all the way through.',
    nut: [381, 26, 31, 17, 2, 2, 810]
  },

  'beef-goulash-soup': {
    d: 'Beef, onions, peppers and potatoes simmered for 90 minutes in a smoked paprika and tomato broth.',
    meta: 'Beef goulash soup: beef, onion, peppers and potatoes in a smoked paprika and tomato broth. Six servings, cooked for 90 minutes.',
    kw: ['beef goulash soup', 'hungarian beef goulash soup', 'goulash soup with potatoes', 'beef and paprika goulash soup', 'hearty beef goulash soup'],
    why: 'Most home versions come out bitter, and the fix is to take the pan off the heat before the paprika goes in. Paprika burns in seconds in a hot pan, and burnt paprika tastes of nothing but bitterness.\n\nBrown the beef in batches, then soften the onions in the same pot for 10 minutes until they are sweet and golden, because the onions give the soup its body. Take the pot off the heat, stir in the paprika and tomato purée for 30 seconds, and only then add the stock. **Never fry paprika over a high heat.** It scorches almost instantly.\n\nReturn the beef, add the peppers and caraway and simmer, partly covered, for 60 minutes. Add the potatoes for the last 20 minutes so that they stay in pieces.\n\nThe soup is ready when the beef is tender and the broth is rich and brick red. It improves overnight.',
    ing: [
      '800 g beef chuck, cut into 2 cm cubes',
      '2 tbsp vegetable oil',
      '3 onions, about 450 g, chopped',
      '3 cloves garlic, crushed',
      '2 tbsp smoked paprika',
      '2 tbsp tomato purée',
      '1.5 litres beef stock',
      '2 red peppers, about 300 g, diced',
      '1 tsp caraway seeds',
      '600 g potatoes, peeled and cubed',
      '1 tsp salt'
    ],
    st: [
      'Brown the beef in the oil in batches for 8 minutes each and set aside.',
      'Soften the onions in the same pot for 10 minutes, then add the garlic for 1 minute.',
      'Take the pot off the heat and stir in the paprika and tomato purée for 30 seconds. Pour in the stock.',
      'Return the beef, add the peppers, caraway and salt, and simmer partly covered for 40 minutes.',
      'Add the potatoes and simmer for 20 minutes more until tender.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Take the pot off the heat before adding paprika.',
      'Add the potatoes late.',
      'It tastes better the next day.'
    ],
    pair: ['Rye bread', 'Soured cream', 'Pickled cucumbers', 'Dumplings'],
    store: 'Keeps in the fridge for 4 days. Reheat until piping hot all the way through.',
    nut: [459, 32, 31, 23, 6, 7, 1320]
  }
};
