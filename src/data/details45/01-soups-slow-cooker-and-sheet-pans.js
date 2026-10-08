'use strict';

/**
 * Volume forty-five — soups, slow cooker dishes and sheet pans, first part.
 *
 * A squash and apple soup, stracciatella, Hungarian mushroom soup and tom
 * yum, stuffed vine leaves and kofte, air fryer courgette fries, seven slow
 * cooker dishes from pork chops to apple crisp, and two sheet pan dinners.
 * Times are the recipe's own; hobs, ovens and slow cookers differ, so each
 * method says when to check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'roasted-squash-and-apple-soup': {
    d: 'Butternut squash and apple roasted until caramelised, then simmered with onion and stock and blended smooth.',
    meta: 'Roasted squash and apple soup: butternut squash and apple roasted, simmered with stock and blended. Four servings, cooked for 45 minutes.',
    kw: ['roasted squash and apple soup', 'butternut squash and apple soup', 'roasted butternut and apple soup', 'squash and apple soup with sage', 'autumn squash and apple soup'],
    why: 'The first sign it is ready is the smell: squash and apple turning dark gold at the edges in the oven, sweet and a little smoky. That caramelised edge is the flavour of the soup, and boiling would never give it.\n\nCut the squash and apples into even pieces, toss them with the oil, onion, salt and sage, and spread them on a tray in one layer. Roast at 200°C for 35 minutes, turning once. If your oven runs hot, check at 30 minutes. **Do not crowd the tray.** Squash piled up steams and stays pale.\n\nTip everything into a pan with the stock, simmer for 10 minutes, and blend until completely smooth. Hot liquid in a blender needs care: fill the jug no more than half and hold the lid down under a cloth.\n\nA squeeze of lemon lifts the sweetness at the end. Serve with a swirl of cream and a few crisp sage leaves.',
    ing: [
      '800 g butternut squash, peeled and cubed',
      '2 apples, about 300 g, cored and chopped',
      '1 onion, about 150 g, quartered',
      '2 tbsp olive oil',
      '4 fresh sage leaves, about 2 g',
      '1/2 tsp salt',
      '750 ml vegetable stock',
      '1 tbsp lemon juice',
      '4 tbsp double cream',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Toss the squash, apples, onion, oil, sage and salt on a large tray and spread in one layer.',
      'Roast for 35 minutes, turning once, until the edges are dark gold.',
      'Tip into a pan with the stock and simmer for 10 minutes.',
      'Blend until completely smooth, stir in the lemon juice and pepper and reheat gently.',
      'Serve with a swirl of the cream.'
    ],
    tips: [
      'Roast in one layer.',
      'Cut the pieces the same size.',
      'If your oven runs hot, check at 30 minutes.',
      'Blend hot soup in small batches.'
    ],
    pair: ['Crusty bread', 'Cheese scones', 'Toasted pumpkin seeds', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. Reheat gently.',
    nut: [297, 5, 40, 13, 7, 14, 930]
  },

  'stracciatella': {
    d: 'A clear chicken broth with ribbons of egg, parmesan and semolina stirred in, served with black pepper and parsley.',
    meta: 'Stracciatella: clear chicken broth with egg, parmesan and parsley stirred into ribbons. Four servings, cooked for 10 minutes.',
    kw: ['stracciatella', 'stracciatella soup', 'italian egg drop soup', 'roman stracciatella with parmesan', 'stracciatella with spinach'],
    why: 'Stock, eggs, parmesan, semolina and parsley: five things, and ten minutes. Stracciatella means little rags, and the name describes how the egg forms in the hot broth.\n\nBeat the eggs with the parmesan, semolina and a pinch of nutmeg until smooth. Bring the stock to a gentle boil, then reduce the heat so that it barely simmers. Pour the egg mixture in a thin stream while stirring the broth in a slow circle with a fork. **Stir slowly while you pour.** Fast stirring makes the egg break up into a cloudy scramble, and slow stirring gives long ribbons.\n\nSimmer for 2 minutes until the egg is set, then take the pan off the heat. The soup is ready as soon as the ribbons turn opaque.\n\nSeason with black pepper and add the parsley and more parmesan at the table. A handful of spinach stirred in at the end suits it well.',
    ing: [
      '1.2 litres chicken stock',
      '3 eggs, about 150 g',
      '40 g parmesan, grated',
      '1 tbsp semolina',
      '1/4 tsp ground nutmeg',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp black pepper',
      '60 g baby spinach'
    ],
    st: [
      'Beat the eggs with the parmesan, semolina and nutmeg until smooth.',
      'Bring the stock to a gentle boil, then lower the heat to a bare simmer.',
      'Pour in the egg mixture in a thin stream, stirring slowly with a fork, and simmer for 2 minutes until set.',
      'Stir in the spinach and parsley, season with the pepper and serve.'
    ],
    tips: [
      'Keep the stock at a bare simmer.',
      'Stir slowly as you pour.',
      'Use a good stock.',
      'Serve at once.'
    ],
    pair: ['Crusty bread', 'Extra parmesan', 'Green salad', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, reheated gently.',
    nut: [135, 12, 6, 7, 1, 0, 1200]
  },

  'hungarian-mushroom-soup': {
    d: 'Mushrooms, onion and paprika simmered in stock and finished with soured cream, dill and a splash of lemon juice.',
    meta: 'Hungarian mushroom soup: mushrooms and paprika in a creamy broth with soured cream and dill. Four servings, cooked for 30 minutes.',
    kw: ['hungarian mushroom soup', 'creamy hungarian mushroom soup', 'hungarian mushroom soup with paprika', 'mushroom soup with dill and soured cream', 'paprika mushroom soup'],
    why: 'Brown the mushrooms properly, and do not salt them at the start. That is the most useful instruction, because salt draws out the water and the mushrooms stew instead of browning, which leaves a pale, dull soup.\n\nCook them in a wide pan in batches, over a high heat, until the water has gone and they are deep brown. This takes about 8 minutes. Soften the onion in butter, then take the pan off the heat before the paprika goes in, since it burns in seconds. Stir in the flour, return to the heat for a minute, and pour in the stock gradually, stirring. **Add the paprika off the heat.** Scorched paprika is bitter.\n\nReturn the mushrooms, add the soy sauce, dill and pepper, and simmer for 15 minutes.\n\nTake the pan off the heat before stirring in the soured cream and lemon juice, which would split if boiled. Chestnut mushrooms give more flavour than white ones, and a few dried porcini add depth.',
    ing: [
      '500 g mushrooms, sliced',
      '40 g butter',
      '1 onion, about 150 g, chopped',
      '1 tbsp smoked paprika',
      '2 tbsp plain flour',
      '800 ml vegetable stock',
      '1 tbsp soy sauce',
      '10 g fresh dill, chopped',
      '1/2 tsp black pepper',
      '120 g soured cream',
      '1 tbsp lemon juice'
    ],
    st: [
      'Cook the mushrooms in the butter in batches over a high heat for 8 minutes until deep brown. Set aside.',
      'Soften the onion in the same pan for 6 minutes. Take off the heat and stir in the paprika and flour, then return to the heat for 1 minute.',
      'Pour in the stock gradually, stirring, and add the mushrooms, soy sauce, dill and pepper. Simmer for 15 minutes.',
      'Take off the heat and stir in the soured cream and lemon juice.'
    ],
    tips: [
      'Brown the mushrooms in batches.',
      'Take the pan off the heat for the paprika.',
      'Add the soured cream off the heat.',
      'Finish with fresh dill.'
    ],
    pair: ['Rye bread', 'Green salad', 'Pickled cucumbers', 'Dumplings'],
    store: 'Keeps in the fridge for 3 days. Reheat gently and do not boil.',
    nut: [227, 8, 15, 15, 3, 6, 900]
  },

  'tom-yum-soup': {
    d: 'A hot and sour Thai prawn soup of lemongrass, galangal, kaffir lime leaves, mushrooms, chilli and lime juice.',
    meta: 'Tom yum soup: a hot and sour Thai broth with prawns, lemongrass, mushrooms and lime. Four servings, cooked for 15 minutes.',
    kw: ['tom yum soup', 'thai tom yum soup', 'tom yum soup with prawns', 'hot and sour tom yum soup', 'tom yum goong'],
    why: 'Tom yum is a hot and sour soup from Thailand, and the name is built from the two flavours it is about. The balance matters more than any single ingredient: sour from lime, salty from fish sauce, hot from chilli and a touch of sweet to round it off.\n\nBruise the lemongrass with the back of a knife so that it releases its oil, and tear the lime leaves to open them up. Simmer them with the galangal in the stock for 8 minutes, so that the herbs flavour the liquid. The pieces are not meant to be eaten. **Add the lime juice off the heat.** Boiled lime juice turns bitter and loses its freshness.\n\nAdd the mushrooms and chilli for 3 minutes, then the prawns for 2 minutes, until pink. Take the pan off the heat and stir in the fish sauce and lime juice. Taste, and adjust until all four flavours are in balance.\n\nServe with coriander and steamed rice.',
    ing: [
      '1 litre chicken stock',
      '2 stalks lemongrass, about 60 g, bruised',
      '20 g galangal, sliced',
      '5 kaffir lime leaves, about 3 g',
      '150 g oyster mushrooms',
      '2 red chillies, about 20 g, sliced',
      '300 g raw peeled prawns',
      '3 tbsp fish sauce',
      '3 tbsp lime juice',
      '1 tsp sugar',
      '10 g coriander leaves'
    ],
    st: [
      'Simmer the stock with the lemongrass, galangal and lime leaves for 8 minutes.',
      'Add the mushrooms and chillies for 3 minutes, then the prawns for 2 minutes until pink.',
      'Take off the heat and stir in the fish sauce, lime juice and sugar. Taste and adjust.',
      'Scatter with the coriander and serve.'
    ],
    tips: [
      'Bruise the lemongrass.',
      'Add the lime juice off the heat.',
      'Do not overcook the prawns.',
      'Balance the flavours by tasting.'
    ],
    pair: ['Steamed rice', 'Lime wedges', 'Fresh chillies', 'Cucumber salad'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day without the prawns.',
    nut: [133, 20, 11, 1, 1, 3, 1730]
  },

  'dolma': {
    d: 'Vine leaves rolled round a filling of rice, onion, herbs and lemon, simmered in olive oil and stock and served cold.',
    meta: 'Dolma: vine leaves filled with rice, onion, herbs and lemon, simmered in olive oil and stock. Eight servings, cooked for 50 minutes.',
    kw: ['dolma', 'greek dolma', 'stuffed vine leaves', 'dolmades with rice and herbs', 'homemade dolma with lemon'],
    why: 'Rice, onion, herbs, lemon and vine leaves: five things, and a good deal of patience at the rolling stage. The first dozen are slow, and the rest go quickly once the hands know what to do.\n\nUse vine leaves from a jar, rinsed and drained. Leaves in brine need a rinse and a minute in boiling water to take off the salt. Soften the onion in the oil, stir in the rice for 2 minutes, then the herbs, lemon juice and a little water, and let it cool. **Do not overfill the leaves.** The rice swells as it cooks, and an overstuffed roll bursts open.\n\nLay a leaf shiny-side down, put a teaspoon of filling at the stem end, fold in the sides and roll up snugly, not tight.\n\nPack the rolls seam-side down in a pan lined with spare leaves, weigh them down with a plate, add the stock and simmer gently for 45 minutes. Cool in the pan.',
    ing: [
      '200 g vine leaves in brine',
      '4 tbsp olive oil',
      '2 onions, about 300 g, finely chopped',
      '200 g long-grain rice',
      '30 g flat-leaf parsley, chopped',
      '15 g fresh mint, chopped',
      '15 g fresh dill, chopped',
      '3 tbsp lemon juice',
      '1/2 tsp salt',
      '400 ml hot vegetable stock'
    ],
    st: [
      'Rinse the vine leaves and blanch in boiling water for 1 minute. Drain and trim the stems.',
      'Soften the onions in 2 tbsp of the oil for 6 minutes, stir in the rice for 2 minutes, then add the herbs, 1 tbsp of the lemon juice, salt and 100 ml of water. Cook for 5 minutes and cool.',
      'Put a teaspoon of filling on each leaf, fold in the sides and roll up snugly.',
      'Pack the rolls seam-side down in a pan lined with spare leaves. Add the stock, remaining oil and lemon juice, weigh down with a plate and simmer gently for 40 minutes.',
      'Cool in the pan before serving.'
    ],
    tips: [
      'Rinse the leaves well.',
      'Do not overfill them.',
      'Weigh them down with a plate.',
      'Cool them in the pan.'
    ],
    pair: ['Lemon wedges', 'Tzatziki', 'Feta', 'Olives'],
    store: 'Keeps in the fridge for 5 days. Serve cold or at room temperature.',
    nut: [196, 4, 27, 8, 4, 2, 490]
  },

  'kofte-with-yoghurt': {
    d: 'Spiced lamb and beef kofte shaped round skewers, grilled and served on flatbread with garlic yoghurt and tomato.',
    meta: 'Kofte with yoghurt: spiced lamb and beef kofte grilled on skewers, with garlic yoghurt on flatbread. Four servings, cooked for 12 minutes.',
    kw: ['kofte with yoghurt', 'turkish kofte with garlic yoghurt', 'lamb kofte with yoghurt', 'grilled kofte on flatbread with yoghurt', 'kofte kebabs with yoghurt'],
    why: 'It looks like a kebab and cooks like a burger, which is why the mix matters. Mince with too little fat is dry, and mince with too much falls apart on the skewer. A mix of lamb and beef strikes the balance.\n\nGrate the onion and squeeze out the juice, since wet onion makes the mixture sloppy. Work the mince with the onion, garlic, parsley, cumin, paprika and salt for a full minute, until it turns sticky and holds together in your hand. Working it is the opposite of the advice for burgers, because here the mince has to bind. **Knead the mince until it is tacky.** Loose mince falls off the skewer.\n\nMould it round flat skewers into long sausages and grill for 12 minutes, turning, until browned and cooked through.\n\nStir the garlic into the yoghurt, spread it on warm flatbread and top with the kofte, tomato and onion.',
    ing: [
      '300 g lamb mince',
      '300 g beef mince',
      '1 onion, about 100 g, grated and squeezed',
      '3 cloves garlic, crushed',
      '20 g flat-leaf parsley, chopped',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '200 g natural yoghurt',
      '1 clove garlic, crushed, for the yoghurt',
      '4 flatbreads, about 240 g',
      '2 tomatoes, about 200 g, sliced',
      '1/2 red onion, about 50 g, sliced'
    ],
    st: [
      'Knead the lamb and beef mince with the grated onion, garlic, parsley, cumin, paprika and salt for 1 minute until sticky.',
      'Mould the mixture round eight flat skewers into long sausages.',
      'Grill under a high heat for 12 minutes, turning every 3 minutes, until browned and cooked through.',
      'Stir the garlic into the yoghurt. Warm the flatbreads and spread with the yoghurt, then top with the kofte, tomato and red onion.'
    ],
    tips: [
      'Squeeze the onion dry.',
      'Knead until the mince is tacky.',
      'Wet your hands for moulding.',
      'Soak wooden skewers for 20 minutes.'
    ],
    pair: ['Tabbouleh', 'Pickled chillies', 'Rice', 'Ayran'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [574, 36, 40, 30, 3, 7, 1020]
  },

  'air-fryer-zucchini-fries': {
    d: 'Courgette sticks coated in egg and parmesan breadcrumbs and cooked in an air fryer until crisp.',
    meta: 'Air fryer zucchini fries: courgette sticks in a parmesan crumb coating, cooked in the air fryer for 12 minutes. Four servings.',
    kw: ['air fryer zucchini fries', 'air fryer courgette fries', 'crispy air fryer zucchini fries', 'parmesan air fryer zucchini fries', 'zucchini fries in the air fryer'],
    why: 'Why do zucchini fries so often go limp? Because courgettes are mostly water, and the water steams the coating from the inside. Salting and drying the sticks first fixes most of it.\n\nCut the courgettes into sticks about 1 cm thick, sprinkle them with salt and leave them for 10 minutes. Pat them dry with kitchen paper, pressing hard. Coat the sticks in flour, then egg, then breadcrumbs mixed with parmesan and garlic powder. **Do not skip the drying.** A wet stick sheds its coating in the basket.\n\nSpray the crumbs lightly with oil and cook in the air fryer at 200°C in a single layer for 12 minutes, shaking the basket halfway. If the basket is small, cook in two batches. Crowded sticks steam and stay pale.\n\nServe straight away with a garlic dip, marinara sauce or ranch. Air fryers vary, so check the fries at 10 minutes and add time if they are pale.',
    ing: [
      '500 g courgettes, cut into 1 cm sticks',
      '1/2 tsp salt',
      '40 g plain flour',
      '2 eggs, about 100 g, beaten',
      '80 g dried breadcrumbs',
      '40 g parmesan, grated',
      '1/2 tsp garlic powder',
      '1 tbsp vegetable oil',
      '100 g marinara sauce'
    ],
    st: [
      'Toss the courgettes with the salt and leave for 10 minutes, then pat very dry with kitchen paper.',
      'Dip the sticks in the flour, then the egg, then the breadcrumbs mixed with the parmesan and garlic powder.',
      'Spray or brush with the oil and cook in the air fryer at 200°C in a single layer for 12 minutes, shaking the basket halfway.',
      'Serve at once with the marinara sauce.'
    ],
    tips: [
      'Salt and dry the courgettes.',
      'Cook in a single layer.',
      'Shake the basket halfway.',
      'Serve at once.'
    ],
    pair: ['Marinara sauce', 'Garlic dip', 'Ranch dressing', 'Green salad'],
    store: 'Best eaten straight away. Reheat leftovers in the air fryer for 3 minutes.',
    nut: [250, 12, 28, 10, 3, 6, 650]
  },

  'slow-cooker-pork-chops': {
    d: 'Pork chops cooked on low for four hours in a sauce of onion, apple juice, mustard and thyme until tender.',
    meta: 'Slow cooker pork chops: pork chops cooked on low in an apple, onion and mustard sauce. Four servings, cooked for 4 hours.',
    kw: ['slow cooker pork chops', 'tender slow cooker pork chops', 'slow cooker pork chops with onions', 'crockpot pork chops with apple', 'slow cooked pork chops'],
    why: 'Choose thick, bone-in chops. That is the most useful instruction, because thin boneless chops dry out long before the cooker is done, and thick ones stay moist in a long, gentle cook.\n\nBrown the chops for 3 minutes a side in a hot pan before they go in the slow cooker. It is an extra step, and it gives the sauce a deeper flavour and the chops a better colour. Scatter the sliced onions in the base, lay the chops on top, and pour over the apple juice mixed with the mustard, thyme and salt. **Do not add extra liquid.** The chops release their own juices as they cook.\n\nCover and cook on low for 4 hours. If your cooker runs hot, check at 3 hours 30 minutes. They are done when the meat is tender and pulls easily from the bone.\n\nLift the chops onto a plate. Thicken the juices with a little cornflour paste in a pan for 3 minutes and pour over.',
    ing: [
      '4 bone-in pork chops, about 900 g',
      '1 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '200 ml apple juice',
      '2 tbsp wholegrain mustard',
      '4 sprigs thyme, about 5 g',
      '1 tsp salt',
      '1 tbsp cornflour',
      '2 tbsp water'
    ],
    st: [
      'Brown the chops in the oil for 3 minutes a side.',
      'Put the onions in the slow cooker, lay the chops on top and pour over the apple juice mixed with the mustard, thyme and salt.',
      'Cover and cook on low for 4 hours until tender.',
      'Lift out the chops. Pour the juices into a pan, stir in the cornflour mixed with the water and simmer for 3 minutes until thick.',
      'Pour over the chops and serve.'
    ],
    tips: [
      'Use thick, bone-in chops.',
      'Brown them first.',
      'If your cooker runs hot, check at 3 hours 30 minutes.',
      'Do not add extra liquid.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Buttered cabbage', 'Apple sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [469, 46, 15, 25, 2, 8, 860]
  },

  'slow-cooker-lasagne': {
    d: 'A layered lasagne of meat sauce, ricotta and mozzarella built in the slow cooker and cooked on low until set.',
    meta: 'Slow cooker lasagne: layers of meat sauce, pasta, ricotta and mozzarella cooked on low. Eight servings, cooked for 4 hours.',
    kw: ['slow cooker lasagne', 'crockpot lasagne', 'slow cooker lasagne with ricotta', 'slow cooker lasagne recipe', 'slow cooked lasagne'],
    why: 'Cook it low and leave it alone. That is the short, sharp rule, because a slow cooker lasagne is set by gentle heat over hours, and lifting the lid lets out the steam it depends on.\n\nBrown the beef with the onion and garlic and stir in the passata, oregano and salt. Mix the ricotta with the egg and parsley so that it sets into a firm layer. Spread a little sauce on the base, which stops the pasta sticking, then build the layers: pasta, sauce, ricotta mixture, mozzarella. Break the lasagne sheets to fit, and overlap them slightly. **Finish with a layer of sauce and cheese.** Exposed pasta dries into hard edges.\n\nCover and cook on low for 4 hours. If your cooker runs hot, check at 3 hours 30 minutes. The pasta should be tender and the edges bubbling.\n\nLeave it with the lid off for 15 minutes so the layers settle, then cut into portions and lift out with a spatula.',
    ing: [
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '3 cloves garlic, crushed',
      '800 g passata',
      '2 tsp dried oregano',
      '1 tsp salt',
      '250 g ricotta',
      '1 egg, about 50 g',
      '15 g flat-leaf parsley, chopped',
      '250 g dried lasagne sheets',
      '250 g mozzarella, grated',
      '40 g parmesan, grated'
    ],
    st: [
      'Brown the mince with the onion for 8 minutes, add the garlic for 1 minute and stir in the passata, oregano and salt. Simmer for 5 minutes.',
      'Mix the ricotta with the egg and parsley.',
      'Spread a little sauce over the base of the slow cooker. Layer lasagne sheets, sauce, ricotta mixture and mozzarella, repeating until all is used and finishing with sauce and cheese.',
      'Cover and cook on low for 4 hours until the pasta is tender.',
      'Scatter with the parmesan, leave the lid off for 15 minutes and serve.'
    ],
    tips: [
      'Do not lift the lid while it cooks.',
      'Break the sheets to fit.',
      'Finish with sauce and cheese.',
      'Rest it before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted broccoli', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [463, 31, 33, 23, 3, 7, 740]
  },

  'slow-cooker-chilli-con-carne': {
    d: 'Beef mince, kidney beans and tomatoes cooked slowly with cumin, chilli and smoked paprika until thick and deep red.',
    meta: 'Slow cooker chilli con carne: beef mince and kidney beans with cumin and smoked paprika. Six servings, cooked for 5 hours.',
    kw: ['slow cooker chilli con carne', 'crockpot chilli con carne', 'slow cooked chilli con carne', 'beef and kidney bean slow cooker chilli', 'slow cooker chilli with beans'],
    why: 'A dish for a big table on a cold evening, and one that suits making ahead. A chilli is better the second day, when the spices have had time to settle into the beans and meat.\n\nBrown the mince in batches, until it has a dark crust, before it goes in the slow cooker. Raw mince cooked in liquid turns grey and gives a thin flavour. Soften the onion and pepper in the same pan, then add the garlic and spices for a minute to wake them up. Tip everything into the cooker with the tomatoes, tomato purée, stock and beans. **Add the beans later if they are tinned.** Beans cooked for five hours turn to mush.\n\nCook on low for 4 hours, then stir in the drained beans and cook for 1 hour more. If your cooker runs hot, check at 4 hours 30 minutes in total.\n\nThe chilli should be thick enough to coat a spoon. If it is too thin, take the lid off for the last 30 minutes.',
    ing: [
      '600 g beef mince',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 red pepper, about 150 g, diced',
      '3 cloves garlic, crushed',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '200 ml beef stock',
      '480 g drained tinned kidney beans',
      '1 tsp salt'
    ],
    st: [
      'Brown the mince in the oil in batches for 6 minutes each.',
      'Soften the onion and pepper in the same pan for 5 minutes, then add the garlic, cumin, paprika and chilli for 1 minute.',
      'Tip into the slow cooker with the mince, tomatoes, tomato purée, stock and salt. Cook on low for 4 hours.',
      'Stir in the kidney beans and cook for 1 hour more until thick.'
    ],
    tips: [
      'Brown the mince first.',
      'Add the tinned beans late.',
      'If your cooker runs hot, check at 4 hours 30 minutes in total.',
      'Make it a day ahead.'
    ],
    pair: ['Steamed rice', 'Soured cream', 'Grated cheddar', 'Tortilla chips'],
    store: 'Keeps in the fridge for 4 days. Reheat until piping hot all the way through.',
    nut: [350, 27, 20, 18, 7, 5, 830]
  },

  'slow-cooker-beef-bourguignon': {
    d: 'Beef chuck cooked for six hours in red wine with bacon, mushrooms and pearl onions until it falls apart.',
    meta: 'Slow cooker beef bourguignon: beef chuck cooked in red wine with bacon, mushrooms and onions. Six servings, cooked for 6 hours.',
    kw: ['slow cooker beef bourguignon', 'crockpot beef bourguignon', 'slow cooked beef bourguignon', 'beef bourguignon in the slow cooker', 'french beef bourguignon slow cooker'],
    why: 'Why do slow cooker stews sometimes taste flat? Because nothing in a covered cooker browns, so the flavour has to be built beforehand. The extra twenty minutes at the hob is what makes this taste like bourguignon.\n\nBrown the beef in batches until each piece is a deep brown, and fry the bacon until crisp. Soften the onion and carrots in the fat, stir in the flour and tomato purée, and pour in the wine. Bring it to the boil for 3 minutes, scraping up the browned bits, so that the alcohol cooks off and the wine reduces. **Do not skip the reducing.** Raw wine in a slow cooker stays harsh.\n\nTip everything into the cooker with the stock, thyme and bay, and cook on low for 6 hours. If your cooker runs hot, check at 5 hours 30 minutes.\n\nFry the mushrooms and pearl onions in butter until golden and stir them in for the last 30 minutes.',
    ing: [
      '1.2 kg beef chuck, cut into 4 cm cubes',
      '2 tbsp vegetable oil',
      '150 g streaky bacon, diced',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 200 g, sliced',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '400 ml red wine',
      '300 ml beef stock',
      '4 sprigs thyme, about 5 g',
      '2 bay leaves',
      '250 g mushrooms, halved',
      '200 g pearl onions, peeled',
      '20 g butter',
      '1 tsp salt'
    ],
    st: [
      'Brown the beef in the oil in batches for 8 minutes each. Fry the bacon for 6 minutes until crisp.',
      'Soften the onion and carrots in the fat for 6 minutes, stir in the flour and tomato purée for 1 minute, then pour in the wine and boil for 3 minutes, scraping the pan.',
      'Tip into the slow cooker with the beef, bacon, stock, thyme, bay leaves and salt. Cook on low for 6 hours.',
      'Fry the mushrooms and pearl onions in the butter for 8 minutes until golden and stir into the stew for the last 30 minutes.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Boil the wine before it goes in.',
      'If your cooker runs hot, check at 5 hours 30 minutes.',
      'Add the mushrooms late.'
    ],
    pair: ['Mashed potato', 'Crusty bread', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. It tastes better the next day.',
    nut: [577, 46, 15, 37, 3, 6, 1100]
  },

  'slow-cooker-honey-garlic-chicken': {
    d: 'Chicken thighs cooked on low in a sticky sauce of honey, soy sauce, garlic and ketchup, served over rice.',
    meta: 'Slow cooker honey garlic chicken: chicken thighs in a sticky honey, soy and garlic sauce. Four servings, cooked for 4 hours.',
    kw: ['slow cooker honey garlic chicken', 'crockpot honey garlic chicken', 'sticky honey garlic chicken thighs', 'honey garlic chicken in the slow cooker', 'slow cooked honey garlic chicken'],
    why: 'Chicken, honey, soy sauce, garlic and ketchup: five things, and four hours of waiting. The sauce does the work, and it is mostly a matter of stirring it together and leaving it.\n\nUse thighs, since they stay juicy over a long cook where breast turns dry and stringy. Season them with salt and pepper, lay them in the cooker and pour the sauce over. **Do not add water.** The chicken releases its own liquid, and extra water dilutes the sauce.\n\nCook on low for 4 hours. If your cooker runs hot, check at 3 hours 30 minutes. The meat should be tender and nearly falling off the bone.\n\nLift the chicken onto a plate. Pour the sauce into a pan, stir in the cornflour paste and simmer for 4 minutes until it turns thick and glossy, like a glaze. Return the chicken to the sauce, or spoon the glaze over. Serve over rice with sesame seeds and sliced spring onion.',
    ing: [
      '8 bone-in chicken thighs, about 1.2 kg',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '100 ml honey',
      '80 ml soy sauce',
      '4 cloves garlic, crushed',
      '60 g tomato ketchup',
      '1 tbsp cornflour',
      '2 tbsp water',
      '1 tbsp sesame seeds',
      '2 spring onions, about 30 g, sliced'
    ],
    st: [
      'Season the chicken with the salt and pepper and lay it in the slow cooker.',
      'Stir the honey, soy sauce, garlic and ketchup together and pour over.',
      'Cover and cook on low for 4 hours until tender.',
      'Lift out the chicken. Pour the juices into a pan, stir in the cornflour mixed with the water and simmer for 4 minutes until glossy.',
      'Return the chicken to the sauce and scatter with the sesame seeds and spring onions.'
    ],
    tips: [
      'Use thighs.',
      'Do not add water.',
      'If your cooker runs hot, check at 3 hours 30 minutes.',
      'Thicken the sauce in a pan.'
    ],
    pair: ['Steamed rice', 'Steamed broccoli', 'Stir-fried greens', 'Cucumber salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [787, 53, 38, 47, 1, 32, 1860]
  },

  'slow-cooker-macaroni-and-cheese': {
    d: 'Macaroni, evaporated milk, eggs and two cheeses cooked together on low for two hours into a creamy bake.',
    meta: 'Slow cooker macaroni and cheese: macaroni, evaporated milk, eggs and cheddar cooked on low. Eight servings, cooked for 2 hours.',
    kw: ['slow cooker macaroni and cheese', 'crockpot mac and cheese', 'creamy slow cooker mac and cheese', 'slow cooker mac and cheese with cheddar', 'slow cooked macaroni and cheese'],
    why: 'It looks like a baked mac and cheese and cooks like a custard, which is why the eggs and evaporated milk matter. They set the sauce into something creamy and sliceable, instead of a thin, greasy pool.\n\nCook the macaroni for 3 minutes less than the packet says. It will go on cooking in the slow cooker, and pasta that starts soft ends up as mush. Drain it and tip it into the cooker with the butter, which coats the pasta and stops it sticking. Beat the eggs with the evaporated milk, milk, mustard, salt and most of the cheese and stir it in. **Check it early.** Overcooked mac and cheese turns dry and grainy.\n\nCover and cook on low for 2 hours, stirring once after 1 hour. If your cooker runs hot, check at 1 hour 30 minutes. The pasta should be tender and the sauce creamy.\n\nStir, scatter over the rest of the cheese, cover for 5 minutes and serve.',
    ing: [
      '350 g macaroni',
      '30 g butter',
      '2 eggs, about 100 g',
      '400 ml evaporated milk',
      '200 ml whole milk',
      '1 tsp mustard powder',
      '1 tsp salt',
      '350 g mature cheddar, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the macaroni for 5 minutes, 3 minutes under the packet time, and drain. Stir through the butter in the slow cooker.',
      'Beat the eggs with the evaporated milk, milk, mustard powder and salt and stir into the pasta with three quarters of the cheese.',
      'Cover and cook on low for 2 hours, stirring once after 1 hour.',
      'Stir, scatter over the rest of the cheese and pepper, cover for 5 minutes and serve.'
    ],
    tips: [
      'Undercook the pasta.',
      'Check it early.',
      'Stir once while it cooks.',
      'Use a mature cheddar.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Roasted tomatoes', 'Baked beans'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [468, 23, 40, 24, 2, 8, 660]
  },

  'slow-cooker-mashed-potatoes': {
    d: 'Potatoes cooked in stock in the slow cooker until soft, then mashed with butter, cream cheese and warm milk.',
    meta: 'Slow cooker mashed potatoes: potatoes cooked in stock, then mashed with butter, cream cheese and milk. Eight servings, cooked for 4 hours.',
    kw: ['slow cooker mashed potatoes', 'crockpot mashed potatoes', 'creamy slow cooker mashed potatoes', 'make ahead slow cooker mashed potatoes', 'slow cooked mashed potatoes'],
    why: 'Most home versions come out gluey, and the fix is to mash gently and add the liquid warm. Overworked potatoes release starch and turn to paste, and cold milk makes the mash heavy and cool.\n\nPeel the potatoes and cut them into even chunks so they cook at the same speed. Put them in the slow cooker with the stock and garlic, cover and cook on low for 4 hours until they are very soft. If your cooker runs hot, check at 3 hours 30 minutes. **Drain them well, and keep a little of the stock.** Wet potatoes make a loose, watery mash.\n\nMash with a hand masher, or push through a ricer for the smoothest result, but do not use a food processor. Add the butter and cream cheese while the potatoes are hot, then stir in the warm milk a splash at a time.\n\nThe mash can sit on the warm setting for an hour before serving, which is the real value of this method on a busy day.',
    ing: [
      '1.5 kg floury potatoes, peeled and cut into chunks',
      '500 ml chicken stock',
      '3 cloves garlic, peeled',
      '80 g butter',
      '100 g cream cheese',
      '150 ml whole milk, warmed',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the potatoes, stock and garlic in the slow cooker and cook on low for 4 hours until very soft.',
      'Drain well, keeping a little of the stock.',
      'Mash with the butter and cream cheese while hot.',
      'Stir in the warm milk a splash at a time, adding a little stock if needed, and season with the salt and pepper.'
    ],
    tips: [
      'Cut the chunks even.',
      'Drain them well.',
      'Warm the milk first.',
      'Do not use a food processor.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Beef stew', 'Gravy'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [277, 6, 34, 13, 4, 3, 560]
  },

  'slow-cooker-apple-crisp': {
    d: 'Sliced apples cooked on low under an oat, butter and brown sugar topping until soft and bubbling.',
    meta: 'Slow cooker apple crisp: sliced apples under an oat and brown sugar topping, cooked on low. Six servings, cooked for 3 hours.',
    kw: ['slow cooker apple crisp', 'crockpot apple crisp', 'apple crisp in the slow cooker', 'slow cooked apple crisp with oats', 'slow cooker apple crumble'],
    why: 'This is what to make in autumn, when the apples are good and the oven is better used for something else. A slow cooker gives a soft, spiced fruit pudding that needs no watching.\n\nCut the apples into thick slices, about 1 cm, so they soften without turning to purée. Toss them with the sugar, cinnamon, lemon juice and cornflour, which thickens the juice into a syrup. Stir the oats, flour, brown sugar and cold butter into a rough crumble with your fingertips. **Line the lid with a clean tea towel.** It catches the condensation, which would drip onto the topping and turn it soggy.\n\nCook on low for 3 hours, until the apples are tender and the juices bubble round the edge. If your cooker runs hot, check at 2 hours 30 minutes.\n\nThe topping will be softer than from the oven. For a crisper finish, spoon it onto a tray and grill for 2 minutes. Serve warm with ice cream or custard.',
    ing: [
      '1 kg apples, peeled, cored and sliced',
      '60 g caster sugar',
      '1 tsp ground cinnamon',
      '1 tbsp lemon juice',
      '1 tbsp cornflour',
      '100 g rolled oats',
      '60 g plain flour',
      '80 g soft light brown sugar',
      '80 g cold butter, cubed',
      '1/4 tsp salt'
    ],
    st: [
      'Toss the apples with the caster sugar, cinnamon, lemon juice and cornflour in the slow cooker.',
      'Rub the oats, flour, brown sugar, butter and salt together with your fingertips into a rough crumble and scatter over the apples.',
      'Line the lid with a clean tea towel, cover and cook on low for 3 hours until the apples are tender.',
      'Serve warm.'
    ],
    tips: [
      'Cut the apples thick.',
      'Line the lid with a tea towel.',
      'If your cooker runs hot, check at 2 hours 30 minutes.',
      'Grill briefly for a crisper top.'
    ],
    pair: ['Vanilla ice cream', 'Custard', 'Whipped cream', 'Tea'],
    store: 'Keeps in the fridge for 3 days. Reheat in the microwave.',
    nut: [392, 4, 67, 12, 6, 40, 110]
  },

  'sheet-pan-salmon-and-broccoli': {
    d: 'Salmon fillets and broccoli florets roasted together on one tray with lemon, garlic and olive oil.',
    meta: 'Sheet pan salmon and broccoli: salmon fillets and broccoli roasted together with lemon and garlic. Four servings, cooked for 18 minutes.',
    kw: ['sheet pan salmon and broccoli', 'sheet pan salmon with broccoli', 'one tray salmon and broccoli', 'roasted salmon and broccoli on a tray', 'lemon garlic sheet pan salmon and broccoli'],
    why: 'The first sign it is ready is the smell of garlic and lemon catching on the edges of the broccoli. The broccoli should be nicely charred before the fish comes out of the oven.\n\nGive the broccoli a head start. Salmon needs about 12 minutes and broccoli needs closer to 18, so the broccoli goes into the oven alone for 6 minutes first. Toss it with oil, garlic and salt on a large tray. Then make gaps, set the salmon in the spaces, and put the tray back. **Do not crowd the tray.** Broccoli packed together steams, and spread broccoli roasts.\n\nRoast at 220°C. If your oven runs hot, check the salmon at 10 minutes. It is done when it flakes easily and the middle is just opaque.\n\nSqueeze the lemon over everything and serve straight from the tray. Overcooked salmon turns dry and chalky, so err on the side of earlier.',
    ing: [
      '4 salmon fillets, about 600 g',
      '400 g broccoli florets',
      '3 tbsp olive oil',
      '3 cloves garlic, sliced',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 220°C. Toss the broccoli with 2 tbsp of the oil, the garlic and half the salt on a large tray and roast for 6 minutes.',
      'Rub the salmon with the remaining oil, salt and the pepper.',
      'Push the broccoli aside, set the salmon on the tray and roast for 12 minutes until flaking.',
      'Squeeze over the lemon and serve from the tray.'
    ],
    tips: [
      'Start the broccoli first.',
      'Leave space on the tray.',
      'If your oven runs hot, check the salmon at 10 minutes.',
      'Finish with lemon.'
    ],
    pair: ['Rice', 'Boiled new potatoes', 'Couscous', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Eat the salmon cold in a salad.',
    nut: [438, 33, 9, 30, 3, 2, 690]
  },

  'sheet-pan-shrimp-boil': {
    d: 'Prawns, sausage, sweetcorn and potatoes roasted on a tray with Cajun seasoning and butter.',
    meta: 'Sheet pan shrimp boil: prawns, sausage, corn and potatoes roasted with Cajun seasoning and butter. Four servings, cooked for 25 minutes.',
    kw: ['sheet pan shrimp boil', 'sheet pan prawn boil', 'oven roasted shrimp boil', 'one tray shrimp boil with sausage', 'cajun sheet pan shrimp boil'],
    why: 'Cut the potatoes small. That is the single most useful instruction, because a shrimp boil depends on everything being ready at once, and potatoes are the slowest.\n\nHalve baby potatoes, or quarter them if they are large, and toss them with the butter, Cajun seasoning and oil. Roast them alone at 220°C for 12 minutes until they begin to colour. Add the sausage and corn and roast for 8 minutes more. **Add the prawns last.** They need only 5 minutes, and they turn tough and curled if they cook for longer.\n\nToss the prawns in the seasoning, nestle them on the tray and finish for 5 minutes until they are pink and just firm. If your oven runs hot, check at 20 minutes in total.\n\nSqueeze over lemon juice, scatter with parsley, and serve straight from the tray with plenty of napkins. Smoked sausage such as kielbasa works best, though chorizo is a fine swap.',
    ing: [
      '500 g baby potatoes, halved',
      '2 tbsp Cajun seasoning',
      '50 g butter, melted',
      '1 tbsp vegetable oil',
      '300 g smoked sausage, sliced',
      '2 corn cobs, about 500 g, cut into 4 pieces',
      '400 g raw peeled prawns',
      '1 lemon, cut into wedges',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oven to 220°C. Toss the potatoes with half the Cajun seasoning, half the butter and the oil on a large tray and roast for 12 minutes.',
      'Add the sausage and corn and roast for 8 minutes more.',
      'Toss the prawns with the remaining seasoning and butter, nestle them on the tray and roast for 5 minutes until pink.',
      'Squeeze over the lemon, scatter with the parsley and serve from the tray.'
    ],
    tips: [
      'Cut the potatoes small.',
      'Add the prawns last.',
      'If your oven runs hot, check at 20 minutes in total.',
      'Serve straight from the tray.'
    ],
    pair: ['Lemon wedges', 'Crusty bread', 'Coleslaw', 'Cold beer'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [658, 37, 51, 34, 7, 6, 780]
  }
};
