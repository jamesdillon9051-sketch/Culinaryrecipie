'use strict';

/**
 * Volume thirty-seven — the slow cooker.
 *
 * Cheap cuts, dried pulses and tough vegetables are what a slow cooker is for,
 * and these are the dishes people look up for it. The cook times are the
 * recipe's own on the low setting unless a step says high; slow cookers vary a
 * great deal in heat, so each method says when to check early. Nutrition is
 * estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'slow-cooker-beef-stew': {
    d: 'Chuck steak, potatoes, carrots and onion cooked in stock for 8 hours on low until the meat is tender. Six servings, with 20 minutes of work.',
    meta: 'Slow cooker beef stew: chuck steak, potatoes and carrots cooked in stock on low for 8 hours until tender. Six servings with 20 minutes of work.',
    kw: ['slow cooker beef stew', 'crock pot beef stew', 'beef stew in the slow cooker', 'easy slow cooker beef stew', 'tender beef stew'],
    why: 'A beef stew in the slow cooker is the dish the appliance was made for. Chuck steak is tough and cheap, and long, gentle heat turns the connective tissue into the gravy that coats everything in the pot.\n\nBrowning the beef is optional in a slow cooker, but it makes a visible difference. A few minutes in a hot pan gives the stew a deeper colour and a roasted flavour that eight hours of wet heat cannot create. Toss the cubes in flour first, and the same flour thickens the liquid as it cooks.\n\nThe pot should be about two thirds full, and the liquid should barely cover the meat. **Do not lift the lid.** Each lift lets out heat and adds about 20 minutes to the cooking time.\n\nThe stew is ready when a piece of beef falls apart under a fork. If the gravy is thin at the end, stir a spoon of cornflour mixed with cold water into the pot and cook on high for 15 minutes with the lid off. Potatoes cut to 3 cm hold their shape for the full 8 hours; smaller pieces turn to mush.',
    ing: [
      '800 g chuck steak, cut into 4 cm cubes',
      '2 tbsp plain flour',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '600 g potatoes, peeled and cut into 3 cm chunks',
      '3 carrots, cut into 3 cm chunks',
      '500 ml beef stock',
      '1 tbsp tomato purée',
      '1 tbsp Worcestershire sauce',
      '2 bay leaves',
      '1 tsp salt'
    ],
    st: [
      'Toss the beef in the flour. Heat the oil in a frying pan and brown the beef in two batches, 4 minutes each, then tip into the slow cooker.',
      'Add the onion, garlic, potatoes and carrots to the slow cooker.',
      'Whisk the stock, purée and Worcestershire sauce together, pour over, and add the bay leaves and salt.',
      'Cover and cook on low for 8 hours, until the beef is tender. If your slow cooker runs hot, check at 6 hours. Remove the bay leaves before serving.'
    ],
    tips: [
      'Brown the beef first for a deeper flavour.',
      'Keep the lid on while it cooks.',
      'Cut the potatoes large so they hold their shape.',
      'Thicken with cornflour on high at the end if the gravy is thin.'
    ],
    pair: ['Crusty bread', 'Dumplings', 'Green beans', 'Mustard'],
    store: 'Keeps in the fridge for up to 4 days and thickens overnight. Freezes for up to 3 months, though the potatoes soften. Reheat until steaming throughout.',
    nut: [349, 32, 26, 13, 4, 4, 800]
  },

  'slow-cooker-chicken-soup': {
    d: 'A whole chicken, carrots, celery and onion cooked in water for 6 hours, then shredded back into the broth with noodles. Six servings.',
    meta: 'Slow cooker chicken soup: a whole chicken with carrots and celery cooked on low for 6 hours, shredded back into the broth with noodles. Six servings.',
    kw: ['slow cooker chicken soup', 'crock pot chicken soup', 'chicken soup in the slow cooker', 'whole chicken soup', 'easy slow cooker chicken noodle soup'],
    why: 'Using a whole chicken gives a soup that tastes as if it had been simmered on a stove all day, because the bones and skin release flavour and body into the broth, which breast meat alone never would.\n\nPut the chicken in whole, breast side up, and surround it with the vegetables. Cover it with cold water until the bird is just submerged. **Do not add too much water**, because the slow cooker loses very little to steam, and extra water thins the soup.\n\nSix hours on low is plenty. The chicken is done when the leg pulls away easily and the meat is tender enough to fall from the bone. Lift the bird out onto a board, let it cool for a few minutes, then strip the meat from the bones and discard the skin and bones.\n\nReturn the meat to the pot with the noodles and cook on high for 20 minutes until they are tender. Add the parsley and a squeeze of lemon at the end. Skim any fat from the surface with a spoon before serving.',
    ing: [
      '1.5 kg whole chicken',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '1 onion, diced',
      '3 garlic cloves',
      '2 litres cold water',
      '2 bay leaves',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '150 g egg noodles',
      '2 tbsp chopped parsley',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Put the chicken in the slow cooker, breast side up, with the carrots, celery, onion, garlic and bay leaves. Pour over the water and add the salt and pepper.',
      'Cover and cook on low for 6 hours, until the chicken is very tender. If your slow cooker runs hot, check at 5 hours.',
      'Lift the chicken onto a board, cool for 10 minutes, then pull the meat from the bones. Discard the skin, bones and bay leaves.',
      'Return the meat to the pot, add the noodles and cook on high for 20 minutes until tender. Stir in the parsley and serve with the lemon.'
    ],
    tips: [
      'Do not overfill with water; the soup will taste weak.',
      'Skim the fat from the top before serving.',
      'Add the noodles only at the end.',
      'Season carefully once the soup has finished cooking.'
    ],
    pair: ['Crusty bread', 'Cheese on toast', 'Crackers'],
    store: 'Keeps in the fridge for up to 3 days; the noodles soften. Freeze the soup without noodles for up to 3 months.',
    nut: [614, 52, 25, 34, 3, 4, 1010]
  },

  'slow-cooker-chili': {
    d: 'Beef mince, kidney beans, tomatoes and chili powder cooked together on low for 6 hours. Six servings, with 15 minutes of work.',
    meta: 'Slow cooker chili: beef mince, kidney beans and tomatoes with chili powder and cumin, cooked on low for 6 hours. Six servings, 15 minutes of work.',
    kw: ['slow cooker chili', 'crock pot chili', 'beef chili in the slow cooker', 'easy slow cooker chili', 'slow cooker chili with beans'],
    why: 'Chili is one of the best things to put in a slow cooker, because the flavours of the spices and the beans blend and mellow over six hours and the pot needs no attention. The one effort worth making is browning the mince.\n\nMince added raw to a slow cooker releases water and grey scum and the chili tastes boiled. Brown it in a frying pan for 8 minutes first, with the onion and garlic, and drain off any excess fat. **That small step is the difference** between a flat chili and a deep, savoury one.\n\nThe spices go in with the mince for the last minute of browning. Chili powder and cumin that are fried first lose their raw edge, and that is the flavour that carries through a long cook.\n\nKeep the liquid low. A slow cooker traps steam, so a tin of tomatoes and a small cup of stock is enough. If the chili is thin at the end, take the lid off and cook on high for 20 minutes. It is better the next day.',
    ing: [
      '500 g beef mince',
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '2 x 400 g tins chopped tomatoes',
      '480 g tinned kidney beans, drained and rinsed',
      '2 tbsp tomato purée',
      '120 ml beef stock',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a large frying pan and brown the mince for 8 minutes, breaking it up. Add the onion and garlic for 3 minutes, then the chili powder and cumin for 1 minute. Drain off any excess fat.',
      'Tip into the slow cooker with the tomatoes, beans, purée, stock and salt and stir.',
      'Cover and cook on low for 6 hours. If your slow cooker runs hot, check at 5 hours.',
      'Stir, taste for salt and, if the chili is thin, cook uncovered on high for 20 minutes.'
    ],
    tips: [
      'Brown the mince before it goes in.',
      'Keep the stock modest; the pot does not reduce.',
      'Uncover for the last 20 minutes to thicken.',
      'Make it a day ahead for the best flavour.'
    ],
    pair: ['Rice', 'Baked potatoes', 'Grated cheddar', 'Cornbread'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [308, 23, 18, 16, 7, 3, 810]
  },

  'slow-cooker-lamb-shanks': {
    d: 'Lamb shanks browned and cooked in red wine, stock and tomatoes for 8 hours until the meat falls from the bone. Four servings.',
    meta: 'Slow cooker lamb shanks: shanks browned and cooked in wine, stock and tomatoes on low for 8 hours until falling from the bone. Four servings.',
    kw: ['slow cooker lamb shanks', 'crock pot lamb shanks', 'lamb shanks in the slow cooker', 'tender lamb shanks', 'braised lamb shanks'],
    why: 'A lamb shank is a tough, sinewy cut that costs little and rewards patience. In the slow cooker, 8 hours of gentle heat turns the sinew into a rich sauce and leaves the meat so tender that it slides off the bone when lifted.\n\nBrown the shanks first, all over, in a hot pan with a little oil. It takes about 10 minutes and gives the sauce its colour and depth. Season them well with salt and pepper before they go in the pan, since the surface carries the seasoning.\n\nThe liquid should come about halfway up the shanks, not over them. **If the shanks are submerged they boil rather than braise**, and the meat loses some of its flavour into the sauce. Red wine, stock and tinned tomatoes make a good base, with garlic, rosemary and a bay leaf.\n\nWhen the shanks are done, lift them out gently, because they will want to fall apart. Skim the fat from the sauce, and reduce it in a pan if it is thin. Mashed potato is the natural partner.',
    ing: [
      '4 lamb shanks, about 400 g each',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 carrots, chopped',
      '4 garlic cloves, crushed',
      '1 tbsp tomato purée',
      '200 ml red wine',
      '400 g tin chopped tomatoes',
      '250 ml beef stock',
      '2 sprigs rosemary',
      '1 bay leaf'
    ],
    st: [
      'Season the shanks with the salt and pepper. Heat the oil in a large frying pan and brown the shanks on all sides for 10 minutes. Lift into the slow cooker.',
      'Cook the onion and carrots in the same pan for 5 minutes. Add the garlic and purée for 1 minute, then the wine, scraping the base, and boil for 3 minutes. Tip over the shanks.',
      'Add the tomatoes, stock, rosemary and bay leaf. Cover and cook on low for 8 hours, until the meat falls from the bone. If your slow cooker runs hot, check at 7 hours.',
      'Lift out the shanks, skim the fat from the sauce and, if it is thin, boil it in a pan for 10 minutes. Serve the shanks with the sauce.'
    ],
    tips: [
      'Brown the shanks well; the sauce takes its colour from this.',
      'Keep the liquid at about halfway up the meat.',
      'Lift the shanks out carefully at the end.',
      'Reduce the sauce in a pan for a thicker finish.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Roast carrots', 'Crusty bread'],
    store: 'Keeps in the fridge for up to 3 days in the sauce. Freezes for up to 3 months. Reheat gently, covered.',
    nut: [791, 79, 13, 47, 3, 6, 1110]
  },

  'slow-cooker-bolognese': {
    d: 'Beef mince, bacon, tomatoes and vegetables cooked on low for 6 hours into a rich meat sauce for pasta. Six servings.',
    meta: 'Slow cooker bolognese: beef mince, tomatoes and vegetables cooked on low for 6 hours into a rich meat sauce for spaghetti. Six servings.',
    kw: ['slow cooker bolognese', 'crock pot bolognese', 'bolognese in the slow cooker', 'slow cooked meat sauce', 'easy bolognese for spaghetti'],
    why: 'A bolognese is a sauce that rewards time, and the slow cooker offers it without any stirring. Six hours on low breaks the meat down until it is soft and silky, and the tomatoes lose their sharpness.\n\nStart in a frying pan, not in the pot. Brown the mince and bacon in two batches so they colour rather than steam, then soften the onion, carrot and celery in the fat. These steps take 15 minutes and give a flavour that raw ingredients tipped into the pot cannot match.\n\nAdd the tomato purée and fry it for 2 minutes until it darkens. **That cooked purée is where much of the savoury depth comes from.**\n\nThe liquid is a tin of tomatoes and a small glass of stock or wine. A bolognese should be thick, and the slow cooker does not reduce it, so keep the liquid to a minimum. If the sauce is loose at the end, cook it uncovered on high for 30 minutes. Stir it through spaghetti with a spoon of the pasta water.',
    ing: [
      '600 g beef mince',
      '100 g streaky bacon, chopped',
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '2 carrots, finely chopped',
      '2 celery sticks, finely chopped',
      '3 garlic cloves, chopped',
      '2 tbsp tomato purée',
      '2 x 400 g tins chopped tomatoes',
      '120 ml beef stock',
      '1 tsp dried oregano',
      '1 tsp salt',
      '350 g spaghetti'
    ],
    st: [
      'Heat the oil in a large frying pan and brown the mince and bacon in two batches, 6 minutes each. Tip into the slow cooker.',
      'Cook the onion, carrots and celery in the same pan for 6 minutes. Add the garlic and purée for 2 minutes and tip into the slow cooker.',
      'Add the tomatoes, stock, oregano and salt. Cover and cook on low for 6 hours. If your slow cooker runs hot, check at 5 hours.',
      'Boil the spaghetti in salted water, drain and serve with the sauce. If the sauce is thin, cook it uncovered on high for 30 minutes first.'
    ],
    tips: [
      'Brown the meat in batches for a better flavour.',
      'Keep the liquid modest because the sauce will not reduce.',
      'Uncover on high at the end if it is too thin.',
      'Freeze portions of the sauce for another day.'
    ],
    pair: ['Grated parmesan', 'Garlic bread', 'Green salad', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [508, 31, 51, 20, 4, 5, 810]
  },

  'slow-cooker-beef-curry': {
    d: 'Chuck steak simmered in a mild curry sauce of onion, tomato and spices for 7 hours on low. Four servings, with 15 minutes of work.',
    meta: 'Slow cooker beef curry: chuck steak in a mild onion and tomato curry sauce, cooked on low for 7 hours until tender. Four servings.',
    kw: ['slow cooker beef curry', 'crock pot beef curry', 'beef curry in the slow cooker', 'easy slow cooker curry', 'tender beef curry'],
    why: 'Beef curry needs time more than anything else, because cheap cuts such as chuck are tough and only turn tender after hours of gentle heat. The slow cooker supplies the hours and demands nothing in return.\n\nThe dry spices should be cooked first. Fry the onion until soft, then the curry powder, garlic and ginger for a minute until they smell warm. Raw curry powder in a slow cooker tastes dusty and bitter; cooked in oil it turns deep and rounded.\n\nBrown the beef in two batches before it goes in. **A brown crust gives the sauce body** and the curry a depth that is hard to get another way.\n\nKeep the liquid to a tin of tomatoes and a small cup of water. The beef gives off its own juices, and the slow cooker retains all of them. At the end, stir in a spoon of yogurt for a creamier sauce, and add salt to taste. A scatter of coriander and a squeeze of lime lifts it.',
    ing: [
      '800 g chuck steak, cut into 4 cm cubes',
      '2 tbsp vegetable oil',
      '2 onions, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '3 tbsp curry powder',
      '400 g tin chopped tomatoes',
      '120 ml water',
      '2 tbsp tomato purée',
      '1 tsp salt',
      '100 g plain yogurt',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat half the oil in a frying pan and brown the beef in two batches, 4 minutes each. Tip into the slow cooker.',
      'Heat the rest of the oil and cook the onions for 8 minutes. Add the garlic, ginger and curry powder for 1 minute and add to the slow cooker.',
      'Add the tomatoes, water, purée and salt. Cover and cook on low for 7 hours until the beef is tender. If your slow cooker runs hot, check at 6 hours.',
      'Stir in the yogurt and coriander, taste for salt and serve.'
    ],
    tips: [
      'Cook the curry powder in oil first.',
      'Brown the beef before adding it.',
      'Add the yogurt at the end, off the high heat.',
      'Serve with plenty of rice to take up the sauce.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [424, 47, 14, 20, 4, 6, 730]
  },

  'slow-cooker-lentil-soup': {
    d: 'Brown lentils, carrots, celery and tomatoes cooked on low for 6 hours into a thick, spiced soup. Six servings, with 10 minutes of work.',
    meta: 'Slow cooker lentil soup: brown lentils, carrots and tomatoes cooked on low for 6 hours into a thick, spiced soup. Six servings, 10 minutes of work.',
    kw: ['slow cooker lentil soup', 'crock pot lentil soup', 'lentil soup in the slow cooker', 'easy slow cooker soup', 'hearty lentil soup'],
    why: 'It might be the easiest soup there is: chop, tip, cover, walk away. Lentils need no soaking, and over six hours they soften and release enough starch to thicken the soup without any blending.\n\nUse brown or green lentils. Red ones dissolve entirely, which suits some soups but turns this one to a purée. Rinse the lentils in a sieve and pick out any small stones before they go in.\n\nThe vegetables go in raw, and that is fine here. If you have 5 minutes, soften the onion, carrots and celery in a little oil first, which adds a sweet note, but it is not required.\n\n**Hold the lemon and the salt until the end.** Acid slows the softening of lentils, and salt can toughen their skins in some pots. Stir both in at the end and taste. The soup thickens a great deal as it stands. Loosen with hot water when serving or reheating.',
    ing: [
      '300 g brown lentils, rinsed',
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '3 garlic cloves, chopped',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '400 g tin chopped tomatoes',
      '1.2 litres vegetable stock',
      '2 bay leaves',
      '1 tsp salt',
      '2 tbsp lemon juice'
    ],
    st: [
      'Put the lentils, onion, carrots, celery, garlic, cumin, paprika, tomatoes, stock and bay leaves in the slow cooker and stir.',
      'Cover and cook on low for 6 hours, until the lentils are tender. If your slow cooker runs hot, check at 5 hours.',
      'Remove the bay leaves. Stir in the salt and lemon juice and taste.',
      'Thin with hot water if the soup is too thick.'
    ],
    tips: [
      'Rinse the lentils and check for grit.',
      'Add the salt and lemon at the end.',
      'Thin with hot water; the soup thickens as it stands.',
      'Fry the vegetables first if you have time.'
    ],
    pair: ['Crusty bread', 'Yogurt', 'Flatbread', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Loosen with water when reheating.',
    nut: [237, 16, 41, 1, 8, 6, 1100]
  },

  'slow-cooker-baked-potatoes': {
    d: 'Large potatoes rubbed with oil and salt and cooked whole on low for 6 hours until soft inside. Four servings, with 5 minutes of work.',
    meta: 'Slow cooker baked potatoes: large potatoes rubbed with oil and salt, cooked whole on low for 6 hours until soft inside. Four servings.',
    kw: ['slow cooker baked potatoes', 'crock pot baked potatoes', 'baked potatoes in the slow cooker', 'jacket potatoes in the slow cooker', 'easy baked potatoes'],
    why: 'A slow cooker does not crisp, and that is the one thing to understand about this method. The potatoes come out with a soft, steamy skin and a very fluffy middle, and they are ready when you are, without heating an oven for an hour.\n\nChoose floury baking potatoes of similar size, about 300 g each, and scrub them. Prick each one several times with a fork so steam can escape. Rub with oil and salt, then wrap each one in foil. **The foil keeps the skin from soaking in condensation**, which in a slow cooker drips off the lid.\n\nThey cook for 6 hours on low, or about 3 on high. A potato is done when a knife slides in with no resistance.\n\nFor a crisp skin, lift the cooked potatoes from the foil and put them under a hot grill or in a hot oven for 10 minutes. It is optional, and worth it when there is time. Split them as soon as they are out, and fluff the flesh.',
    ing: [
      '4 large baking potatoes, about 300 g each',
      '1 tbsp vegetable oil',
      '1 tsp salt',
      '40 g butter',
      '100 g grated cheddar',
      '1/2 tsp black pepper'
    ],
    st: [
      'Scrub the potatoes and prick them all over. Rub with the oil and salt and wrap each one in foil.',
      'Put them in the slow cooker in a single layer if possible. Cover and cook on low for 6 hours, until a knife slides in easily. If your slow cooker runs hot, check at 5 hours.',
      'Unwrap the potatoes. For a crisp skin, grill them for 10 minutes.',
      'Split each potato, fluff the flesh with a fork, and add the butter, cheese and pepper.'
    ],
    tips: [
      'Prick the skins so steam can escape.',
      'Wrap each potato in foil.',
      'Finish under a hot grill for a crisp skin.',
      'Choose potatoes of similar size.'
    ],
    pair: ['Baked beans', 'Chili', 'Coleslaw', 'Tuna mayonnaise'],
    store: 'Keeps in the fridge for up to 2 days. Reheat in a hot oven at 200°C for 15 minutes.',
    nut: [436, 12, 52, 20, 7, 3, 770]
  },

  'slow-cooker-mac-and-cheese': {
    d: 'Macaroni, milk, evaporated milk and cheddar cooked together for 2 hours 30 minutes until creamy. Six servings, with 10 minutes of work.',
    meta: 'Slow cooker mac and cheese: macaroni, milk and cheddar cooked together on low for 2 hours 30 minutes until creamy. Six servings, 10 minutes of work.',
    kw: ['slow cooker mac and cheese', 'crock pot mac and cheese', 'mac and cheese in the slow cooker', 'creamy slow cooker mac and cheese', 'easy mac and cheese'],
    why: 'The macaroni goes in raw and cooks in the sauce, which is why this method works without a roux or a separate pot. The starch from the pasta thickens the milk as it cooks, and the cheese melts into it.\n\nThe risk is overcooking, because slow cookers keep heating for as long as they are on. The pasta turns from tender to mush within 20 minutes. **Check from 2 hours** and turn it off the moment the macaroni is soft.\n\nEvaporated milk does the work that cream does in a baked version. It is stable when heated for a long time, where fresh milk may curdle at the edges, and it adds a rich body for little cost.\n\nGrate the cheese yourself. Bagged grated cheese has a coating that stops it melting smoothly, and the sauce comes out grainy. Stir the cheese in at the end for a minute, then let the pot stand with the lid off. Season with mustard powder and pepper.',
    ing: [
      '350 g macaroni',
      '500 ml milk',
      '370 ml tin evaporated milk',
      '30 g butter, melted',
      '1 tsp mustard powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '350 g grated cheddar'
    ],
    st: [
      'Grease the slow cooker. Put the macaroni, milk, evaporated milk, butter, mustard powder, salt and pepper in and stir.',
      'Cover and cook on low for 2 hours 30 minutes, stirring once after 1 hour 30 minutes. Check the pasta from 2 hours and stop when it is just tender.',
      'Stir in 250 g of the cheese until melted.',
      'Scatter with the remaining cheese, cover for 5 minutes and serve.'
    ],
    tips: [
      'Check from 2 hours; the pasta overcooks quickly.',
      'Grate the cheese yourself.',
      'Stir once in the middle of cooking.',
      'Loosen with milk if the sauce tightens.'
    ],
    pair: ['Steamed broccoli', 'Green salad', 'Sausages', 'Garlic bread'],
    store: 'Keeps in the fridge for up to 2 days. Reheat with a splash of milk.',
    nut: [624, 29, 55, 32, 2, 12, 870]
  },

  'slow-cooker-meatballs': {
    d: 'Beef and pork meatballs simmered in tomato sauce on low for 4 hours until tender. Six servings, with 20 minutes of work.',
    meta: 'Slow cooker meatballs: beef and pork meatballs simmered in tomato sauce on low for 4 hours until tender. Six servings, 20 minutes of work.',
    kw: ['slow cooker meatballs', 'crock pot meatballs', 'meatballs in tomato sauce in the slow cooker', 'easy slow cooker meatballs', 'tender meatballs'],
    why: 'Meatballs that cook slowly in sauce come out tender and tomato-flavoured all the way through. The sauce keeps them moist, and the meat flavours the sauce in return.\n\nThe mixture matters more than the method. Soak breadcrumbs in milk first and mix them into the meat with egg, garlic and parmesan. The soaked crumbs hold moisture inside the meatball. Mix with a light hand and stop as soon as everything is combined.\n\nBrowning is optional, but it adds flavour. A few minutes in a hot pan sets the surface and stops the meatballs breaking up in the pot. **If you skip it, handle them very gently** and do not stir them for the first 2 hours.\n\nPour the sauce over them without crowding. They should sit in one or two layers, covered by the sauce. Four hours on low is enough, and they hold well on the warm setting for another hour if dinner is late. Serve over pasta or in rolls.',
    ing: [
      '500 g beef mince',
      '250 g pork mince',
      '50 g dried breadcrumbs',
      '60 ml milk',
      '1 egg',
      '2 garlic cloves, grated',
      '40 g grated parmesan',
      '1 tsp salt',
      '1 tbsp vegetable oil',
      '2 x 400 g tins chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp dried oregano'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes. Mix with the beef, pork, egg, garlic, parmesan and salt until just combined. Shape into 24 balls.',
      'Heat the oil in a large frying pan and brown the meatballs in batches, 5 minutes each. Lift into the slow cooker.',
      'Mix the tomatoes, purée and oregano and pour over.',
      'Cover and cook on low for 4 hours, until the meatballs are cooked through. If your slow cooker runs hot, check at 3 hours.'
    ],
    tips: [
      'Brown the meatballs for a better texture and flavour.',
      'Do not stir during the first 2 hours.',
      'Keep them in one or two layers under the sauce.',
      'Cut one open to check it is cooked through.'
    ],
    pair: ['Spaghetti', 'Crusty rolls', 'Garlic bread', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days in the sauce. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [373, 28, 9, 25, 1, 2, 650]
  },

  'slow-cooker-ham': {
    d: 'A gammon joint cooked in cola and brown sugar on low for 5 hours, then glazed and finished under the grill. Ten servings.',
    meta: 'Slow cooker ham: a gammon joint cooked in cola and brown sugar on low for 5 hours, then glazed under the grill. Ten servings with leftovers.',
    kw: ['slow cooker ham', 'crock pot ham', 'gammon in the slow cooker', 'glazed ham in the slow cooker', 'easy cooked ham'],
    why: 'A ham joint is a cheap way of feeding a crowd, and it gives the best leftovers on the menu. The slow cooker keeps it moist and frees the oven for everything else, which is why it is a good choice for a family lunch.\n\nA gammon or ham joint of about 2 kg fits most slow cookers, with the lid on. Check before you buy. If the joint is very salty, soak it in cold water for several hours first, or change the water once, because the cooking liquid concentrates the salt.\n\nCola is the traditional liquid. Its sugars and acid sweeten and tenderise the meat, and it forms the base of the glaze. **Do not add salt** to the pot, as the joint is already cured.\n\nCook on low for 5 hours, then lift the joint out, cut off the rind and score the fat. Spread with mustard and brown sugar and put it under a hot grill for 10 minutes until it caramelises. Rest the ham for 15 minutes before carving.',
    ing: [
      '2 kg gammon joint',
      '330 ml cola',
      '1 onion, halved',
      '2 bay leaves',
      '2 g whole cloves (about 10)',
      '2 tbsp light brown sugar',
      '2 tbsp wholegrain mustard'
    ],
    st: [
      'Put the gammon in the slow cooker with the cola, onion and bay leaves. Add enough water to come about a third of the way up the joint.',
      'Cover and cook on low for 5 hours until tender. If your slow cooker runs hot, check at 4 hours.',
      'Heat the grill to high. Lift the gammon onto a tray, cut off the rind, score the fat in a diamond pattern and push a clove into each diamond. Mix the sugar and mustard and spread over the fat.',
      'Grill for 10 minutes until the glaze is dark and bubbling. Rest for 15 minutes before carving.'
    ],
    tips: [
      'Soak a very salty joint in cold water first.',
      'Do not add salt to the pot.',
      'Watch the glaze under the grill; sugar burns fast.',
      'Rest the ham before slicing.'
    ],
    pair: ['Mashed potato', 'Parsley sauce', 'Peas', 'Piccalilli'],
    store: 'Keeps in the fridge for up to 4 days. Leftover ham freezes for up to 2 months.',
    nut: [282, 40, 8, 10, 0, 7, 2260]
  },

  'slow-cooker-porridge': {
    d: 'Rolled oats, milk and water cooked overnight on low so a creamy porridge is ready in the morning. Four servings.',
    meta: 'Slow cooker porridge: rolled oats, milk and water cooked overnight on low for 8 hours so a creamy porridge is ready in the morning. Four servings.',
    kw: ['slow cooker porridge', 'slow cooker steel cut oats', 'crock pot porridge', 'porridge in the slow cooker', 'easy breakfast porridge'],
    why: 'This is porridge for people who would rather sleep than stir. Put the oats in the slow cooker before bed, and by morning there is a pot of creamy porridge that has needed no attention at all.\n\nSteel-cut oats suit a slow cooker best, since they hold their texture over eight hours where rolled oats turn to paste. If you only have rolled oats, cut the cooking time to 4 hours and cook on low, and check it first thing.\n\nThe ratio is 1 part oats to 4 of liquid, half milk and half water. **Grease the sides of the pot with butter** before you start. Porridge sticks to the walls and the base of a slow cooker, and the butter makes washing up easier.\n\nA pinch of salt is important. It brings out the flavour of the oats and stops them tasting flat. Stir the porridge in the morning and add a splash of milk. It thickens as it stands, so serve it at once with brown sugar, fruit or a spoon of honey.',
    ing: [
      '200 g steel-cut oats',
      '15 g butter',
      '400 ml milk',
      '400 ml water',
      '1/4 tsp salt',
      '1 tsp ground cinnamon',
      '2 tbsp light brown sugar',
      '2 bananas, sliced'
    ],
    st: [
      'Grease the slow cooker with the butter. Add the oats, milk, water, salt and cinnamon and stir.',
      'Cover and cook on low for 8 hours overnight. If your slow cooker runs hot, cook for 6 hours instead.',
      'Stir the porridge well in the morning and loosen with a splash of milk if it is stiff.',
      'Serve with the sugar and sliced banana.'
    ],
    tips: [
      'Use steel-cut oats for a creamy, not mushy, porridge.',
      'Grease the pot so the oats do not stick.',
      'Check the first time you try it, as pots vary.',
      'Stir in milk to loosen leftovers.'
    ],
    pair: ['Berries', 'Chopped nuts', 'Honey', 'Yogurt'],
    store: 'Keeps in the fridge for up to 4 days. Reheat with a splash of milk.',
    nut: [374, 11, 60, 10, 7, 20, 200]
  },

  'slow-cooker-apple-crumble': {
    d: 'Sliced apples under a buttery oat crumble cooked in the slow cooker for 3 hours, with a paper towel under the lid. Six servings.',
    meta: 'Slow cooker apple crumble: sliced apples under a buttery oat topping cooked in the slow cooker for 3 hours on low. Six servings, 15 minutes of work.',
    kw: ['slow cooker apple crumble', 'crock pot apple crumble', 'apple crumble in the slow cooker', 'easy apple crumble', 'warm apple pudding'],
    why: 'The slow cooker steams rather than bakes, so the topping comes out soft, not crisp. That suits some people very well, as it gives a pudding like a baked oat, and a few small changes keep it from turning to paste.\n\nUse a firm cooking apple, such as Bramley, which holds its shape and gives a sharp balance to the sweet topping. Toss the sliced apples with sugar, cinnamon and a spoon of cornflour so the juices thicken.\n\nThe topping is oats, flour, brown sugar and cold butter rubbed together until clumpy. **Cover the pot with a folded tea towel or paper towel under the lid.** The cloth catches the condensation that would otherwise drip onto the topping and make it soggy.\n\nCook on low for 3 hours. The apples should be tender and the juices bubbling at the edge. For a crisper topping, spread it on a tray, bake for 10 minutes at 180°C and scatter over the apples before serving. Serve hot, with custard or cream.',
    ing: [
      '1 kg cooking apples, peeled, cored and sliced',
      '60 g caster sugar',
      '1 tbsp cornflour',
      '1 tsp ground cinnamon',
      '100 g rolled oats',
      '80 g plain flour',
      '80 g light brown sugar',
      '100 g cold butter, cubed'
    ],
    st: [
      'Toss the apples with the caster sugar, cornflour and cinnamon and spread in the slow cooker.',
      'Rub the butter into the oats, flour and brown sugar until clumpy and scatter over the apples.',
      'Lay a clean folded tea towel over the pot and set the lid on top. Cook on low for 3 hours, until the apples are tender and the juices bubble. If your slow cooker runs hot, check at 2 hours.',
      'Rest for 10 minutes, then spoon into bowls.'
    ],
    tips: [
      'Put a tea towel under the lid to catch condensation.',
      'Use firm cooking apples.',
      'Crisp the topping separately if you prefer.',
      'Check at 2 hours the first time.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Cream', 'Yogurt'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in the microwave.',
    nut: [427, 4, 69, 15, 6, 40, 10]
  },

  'slow-cooker-chicken-curry': {
    d: 'Chicken thighs in a mild coconut and tomato curry sauce, cooked on low for 6 hours. Four servings, with 15 minutes of work.',
    meta: 'Slow cooker chicken curry: chicken thighs in a mild coconut and tomato sauce, cooked on low for 6 hours. Four servings, 15 minutes of work.',
    kw: ['slow cooker chicken curry', 'crock pot chicken curry', 'chicken curry in the slow cooker', 'easy slow cooker curry', 'coconut chicken curry'],
    why: 'Chicken thighs are the right cut for the slow cooker. Breasts dry out and turn stringy over six hours, where thighs, with more fat and connective tissue, stay tender and juicy.\n\nThe flavour begins in a frying pan. Cook the onion until soft, then the curry paste, garlic and ginger for 2 minutes, and tip the lot into the pot. Raw spices in a slow cooker taste flat, while those fried first deepen over the long cooking.\n\nBrowning the chicken is optional here, since the sauce is rich enough to carry it. Leave the skin off, or the sauce turns greasy. **Add the coconut milk at the end** if you can. Coconut milk cooked for six hours may split and turn grainy, while stirred in for the last 30 minutes it stays smooth.\n\nIf the sauce is thin at the end, take the lid off and cook on high for 20 minutes. A squeeze of lime and a scatter of coriander lift the curry.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '3 tbsp mild curry paste',
      '800 g chicken thigh fillets, halved',
      '400 g tin chopped tomatoes',
      '1 tsp salt',
      '400 ml tin coconut milk',
      '150 g frozen peas',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a frying pan and cook the onion for 6 minutes. Add the garlic, ginger and curry paste for 2 minutes and tip into the slow cooker.',
      'Add the chicken, tomatoes and salt and stir. Cover and cook on low for 5 hours 30 minutes. If your slow cooker runs hot, check at 4 hours 30 minutes.',
      'Stir in the coconut milk and peas, cover and cook for 30 minutes more.',
      'Stir in the coriander, taste for salt and serve.'
    ],
    tips: [
      'Fry the curry paste before it goes in.',
      'Stir in the coconut milk near the end.',
      'Use thighs; breast dries out.',
      'Thicken uncovered on high if the sauce is thin.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [536, 45, 17, 32, 4, 9, 960]
  },

  'slow-cooker-sausage-casserole': {
    d: 'Pork sausages, carrots, onion and baked beans cooked in stock for 4 hours on low. Four servings, with 15 minutes of work.',
    meta: 'Slow cooker sausage casserole: pork sausages, carrots and onion in a tomato and stock sauce, cooked on low for 4 hours. Four servings.',
    kw: ['slow cooker sausage casserole', 'crock pot sausage casserole', 'sausage casserole in the slow cooker', 'easy sausage casserole', 'sausage and bean casserole'],
    why: 'A sausage casserole is the sort of dish many people grew up eating, and it is as good in a slow cooker as on a hob. Cheap sausages go a long way when they are simmered in a sauce with vegetables and beans.\n\nBrown the sausages first in a frying pan, for about 8 minutes, until coloured all over. Cooked from raw in a slow cooker they stay pale and a little rubbery, and the fat does not render. The browned bits that stick to the pan can be loosened with a splash of the stock.\n\nCut the carrots into thick chunks, since thin slices turn to mush over 4 hours. **Do not add too much stock.** The sausages and vegetables release liquid, and the slow cooker keeps it.\n\nAdd the beans for the last hour, when they warm through without breaking up. If the sauce is thin at the end, a spoon of flour mixed with cold water stirred in and cooked on high for 15 minutes thickens it. Serve with mash.',
    ing: [
      '8 pork sausages, about 450 g',
      '1 tbsp vegetable oil',
      '1 onion, sliced',
      '3 carrots, cut into thick chunks',
      '2 celery sticks, sliced',
      '3 garlic cloves, chopped',
      '2 tbsp tomato purée',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp dried thyme',
      '400 g tin chopped tomatoes',
      '400 g tinned haricot beans, drained'
    ],
    st: [
      'Heat the oil in a frying pan and brown the sausages for 8 minutes. Lift into the slow cooker.',
      'Cook the onion, carrots and celery in the pan for 5 minutes, add the garlic and purée for 1 minute, then the stock, scraping the base. Pour into the slow cooker.',
      'Add the Worcestershire sauce, thyme and tomatoes. Cover and cook on low for 3 hours.',
      'Stir in the beans and cook for 1 hour more. If your slow cooker runs hot, check at 3 hours 30 minutes. Serve hot.'
    ],
    tips: [
      'Brown the sausages first for better flavour.',
      'Cut the vegetables thick so they hold their shape.',
      'Add the beans for the last hour.',
      'Thicken with a little flour paste if needed.'
    ],
    pair: ['Mashed potato', 'Crusty bread', 'Green cabbage', 'Peas'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [516, 24, 33, 32, 9, 9, 1550]
  },

  'slow-cooker-minestrone': {
    d: 'Beans, pasta, courgette, carrot and tomatoes cooked in stock on low for 5 hours, with the pasta added at the end. Six servings.',
    meta: 'Slow cooker minestrone: beans, carrot, courgette and tomatoes cooked in stock on low for 5 hours, with pasta added at the end. Six servings.',
    kw: ['slow cooker minestrone', 'crock pot minestrone', 'minestrone soup in the slow cooker', 'easy minestrone', 'vegetable soup with pasta'],
    why: 'Minestrone is the soup that uses up the vegetable drawer, and it can change from week to week without ever tasting wrong. What stays the same is the base: onion, carrot and celery, with tomatoes, beans and stock.\n\nThe long cooking in a slow cooker softens the vegetables and blends the flavours into a broth with real depth. A rind of parmesan dropped in with the stock adds a savoury background note, and is worth saving for it.\n\nThe pasta is the thing to watch. **Do not add it at the start.** Over 5 hours it would swell to a mush and drink the broth. Stir it in for the last 20 minutes on high, and it cooks to a pleasing bite.\n\nCourgette and green beans go in late too, for the last hour, to keep some colour. Serve with a spoon of pesto stirred in, or grated parmesan. The soup thickens a great deal as it stands, so keep stock or hot water handy.',
    ing: [
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '3 garlic cloves, chopped',
      '2 x 400 g tins chopped tomatoes',
      '1.2 litres vegetable stock',
      '400 g tinned cannellini beans, drained',
      '1 tsp dried oregano',
      '2 bay leaves',
      '1 tsp salt',
      '2 courgettes, diced',
      '100 g small pasta',
      '40 g grated parmesan'
    ],
    st: [
      'Put the onion, carrots, celery, garlic, tomatoes, stock, beans, oregano, bay leaves and salt in the slow cooker and stir.',
      'Cover and cook on low for 4 hours. Add the courgettes and cook for 1 hour more. If your slow cooker runs hot, check at 4 hours 30 minutes.',
      'Turn to high, stir in the pasta and cook for 20 minutes until tender.',
      'Remove the bay leaves, taste for salt and serve with the parmesan.'
    ],
    tips: [
      'Add the pasta in the last 20 minutes.',
      'Add courgettes late to keep their colour.',
      'Drop in a parmesan rind for extra flavour.',
      'Thin with hot water when reheating.'
    ],
    pair: ['Crusty bread', 'Pesto', 'Garlic bread', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days; the pasta softens. Freeze the soup without pasta for up to 3 months.',
    nut: [215, 13, 34, 3, 7, 6, 1400]
  },

  'slow-cooker-chicken-tacos': {
    d: 'Chicken thighs cooked in salsa and spices on low for 6 hours, then shredded for tacos. Six servings, with 10 minutes of work.',
    meta: 'Slow cooker chicken tacos: chicken thighs cooked in salsa and spices on low for 6 hours, then shredded into tortillas. Six servings.',
    kw: ['slow cooker chicken tacos', 'crock pot chicken tacos', 'shredded chicken tacos in the slow cooker', 'easy chicken tacos', 'shredded chicken for tacos'],
    why: 'Shredded chicken is among the most useful things to cook in a slow cooker, because one batch fills tacos, burritos, bowls and salads over several days. It needs almost no effort: chicken, salsa and spices go in together and nothing else is required.\n\nChicken thighs stay juicy over six hours and shred easily, where breast meat can go dry. Use skinless boneless thighs for the easiest shredding.\n\nThe salsa is the liquid. A jar of ordinary tomato salsa does the job, with chili powder, cumin and garlic powder added. **Do not add extra water**, since the chicken gives up its own juices and the pot holds them in.\n\nAfter cooking, lift the chicken onto a board and shred it with two forks. Return it to the pot and stir it through the juices for a few minutes so it soaks them up. If it looks dry, spoon over some of the liquid. Serve in warm tortillas with lime, soured cream and coriander.',
    ing: [
      '900 g skinless chicken thigh fillets',
      '300 g tomato salsa',
      '2 tsp chili powder',
      '2 tsp ground cumin',
      '1 tsp garlic powder',
      '1 tsp salt',
      '12 small flour tortillas',
      '100 g soured cream',
      '1 lime, cut into wedges',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Put the chicken in the slow cooker. Mix the salsa with the chili powder, cumin, garlic powder and salt and pour over.',
      'Cover and cook on low for 6 hours, until the chicken is very tender. If your slow cooker runs hot, check at 5 hours.',
      'Lift the chicken onto a board and shred with two forks. Return it to the pot and stir it through the juices.',
      'Warm the tortillas and fill with the chicken, soured cream, lime and coriander.'
    ],
    tips: [
      'Do not add extra liquid; the chicken makes its own.',
      'Stir the shredded chicken through the juices to keep it moist.',
      'Use thighs for the best texture.',
      'Warm the tortillas before filling.'
    ],
    pair: ['Rice', 'Refried beans', 'Guacamole', 'Lime wedges'],
    store: 'Keeps in the fridge for up to 4 days in its juices. Freezes for up to 3 months.',
    nut: [464, 37, 43, 16, 4, 5, 1380]
  },

  'slow-cooker-pea-and-ham-soup': {
    d: 'Dried split peas, a ham hock and vegetables cooked on low for 7 hours into a thick soup. Six servings, with 10 minutes of work.',
    meta: 'Slow cooker pea and ham soup: dried split peas and a ham hock cooked on low for 7 hours into a thick, smoky soup. Six servings.',
    kw: ['slow cooker pea and ham soup', 'crock pot split pea soup', 'pea and ham soup in the slow cooker', 'easy pea and ham soup', 'ham hock soup'],
    why: 'Pea and ham soup is made from two cheap ingredients that happen to suit each other: dried peas and a smoked ham hock. The peas break down into a thick purée as they cook, and the hock gives the pot its flavour.\n\nSplit peas need no soaking. Rinse them in a sieve, and put them in the slow cooker with the vegetables and the hock. Cover with water by about 4 cm; a slow cooker retains the liquid, so more water makes a thin soup.\n\nDo not add salt at the start. **The ham hock may be very salty**, and the soup concentrates as it cooks. Taste at the end and season then. If the hock is a strongly cured one, soak it in cold water for an hour first.\n\nAfter 7 hours the meat should be falling from the bone. Lift out the hock, shred the meat, discard the skin and bones and return the meat to the pot. Stir the soup well. It thickens as it stands, so thin it with hot water as needed.',
    ing: [
      '400 g dried green split peas, rinsed',
      '1 ham hock, about 400 g',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '1.6 litres water',
      '2 bay leaves',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the peas, ham hock, onion, carrots, celery, garlic, water, bay leaves and pepper in the slow cooker.',
      'Cover and cook on low for 7 hours, until the peas have broken down and the ham is tender. If your slow cooker runs hot, check at 6 hours.',
      'Lift out the hock, shred the meat and return it to the pot, discarding the skin and bones.',
      'Remove the bay leaves, stir well, taste for salt and thin with hot water if needed.'
    ],
    tips: [
      'Do not salt until the end.',
      'Soak a very salty hock first.',
      'Thin with hot water; the soup thickens as it stands.',
      'Stir well before serving.'
    ],
    pair: ['Crusty bread', 'Buttered toast', 'Mustard', 'Pickles'],
    store: 'Keeps in the fridge for up to 4 days and thickens. Freezes for up to 3 months.',
    nut: [372, 30, 45, 8, 19, 7, 700]
  },

  'slow-cooker-corned-beef': {
    d: 'A corned beef silverside cooked on low for 8 hours with onion, cloves and malt vinegar, then sliced. Six servings, with 10 minutes of work.',
    meta: 'Slow cooker corned beef: a silverside cooked on low for 8 hours with onion, cloves and vinegar until tender enough to slice. Six servings.',
    kw: ['slow cooker corned beef', 'crock pot corned beef', 'corned beef silverside in the slow cooker', 'tender corned beef', 'easy corned beef'],
    why: 'Corned beef is a cured brisket or silverside, and it is tough until it has been cooked slowly in liquid. The slow cooker is ideal: eight hours on low brings it to a tenderness that holds together for slicing.\n\nRinse the joint under cold water first and look at the pack. Some brands are very salty, and a soak of an hour in cold water makes a difference. Put it in the pot fat side up with the onion, cloves, vinegar and a bay leaf.\n\nThe liquid should come about three quarters of the way up the joint. **Do not salt the water.** The cure is already salty, and the cooking liquid should be discarded rather than used for gravy.\n\nWhen the beef is done, a knife slides in easily. Lift it onto a board and rest it for 15 minutes under foil, then slice across the grain. Slices cut along the grain are stringy. Serve hot with white sauce or mustard, or cold in sandwiches with pickle.',
    ing: [
      '1.5 kg corned beef silverside',
      '1 onion, quartered',
      '2 g whole cloves (about 8)',
      '2 tbsp malt vinegar',
      '2 tbsp light brown sugar',
      '2 bay leaves',
      '1 tsp black peppercorns',
      '1 litre water'
    ],
    st: [
      'Rinse the beef under cold water. Put it in the slow cooker fat side up with the onion, cloves, vinegar, sugar, bay leaves, peppercorns and water.',
      'Cover and cook on low for 8 hours, until a knife slides in easily. If your slow cooker runs hot, check at 7 hours.',
      'Lift the beef onto a board, cover with foil and rest for 15 minutes.',
      'Slice thinly across the grain and serve hot or cold.'
    ],
    tips: [
      'Rinse or soak a very salty joint first.',
      'Do not add salt to the water.',
      'Slice across the grain.',
      'Discard the cooking liquid; it is very salty.'
    ],
    pair: ['Parsley sauce', 'Boiled potatoes', 'Cabbage', 'Mustard'],
    store: 'Keeps in the fridge for up to 4 days. Slices freeze for up to 2 months.',
    nut: [357, 53, 7, 13, 1, 5, 150]
  },

  'slow-cooker-pork-ribs': {
    d: 'Pork ribs rubbed with spices and cooked on low for 6 hours, then glazed with barbecue sauce under the grill. Four servings.',
    meta: 'Slow cooker pork ribs: pork ribs rubbed with spices and cooked on low for 6 hours until tender, then glazed and grilled. Four servings.',
    kw: ['slow cooker pork ribs', 'crock pot ribs', 'ribs in the slow cooker', 'fall off the bone ribs', 'easy slow cooker ribs'],
    why: 'Ribs are tough because they are made of hard-working muscle and a lot of connective tissue, and long, wet cooking breaks that down. The slow cooker gives the meat six hours to relax, and the ribs come out so tender they fall from the bone.\n\nPull off the membrane on the back first. It is a thin silvery skin that stays chewy however long it cooks. Slide a knife under it, grip with a paper towel and peel it away in one sheet.\n\nRub the spices into both sides, and cut the rack into sections that fit the pot. Stand the pieces upright round the side, curved, with a small cup of liquid at the base. **Keep the meat above the liquid**, so it steams and braises rather than boils.\n\nSlow cooking makes ribs tender but pale. Brush with barbecue sauce, then grill for 5 to 8 minutes, until sticky and charred at the edges. Handle with care; they fall apart.',
    ing: [
      '1.5 kg pork back ribs',
      '2 tbsp light brown sugar',
      '2 tsp smoked paprika',
      '2 tsp salt',
      '1 tsp garlic powder',
      '1/2 tsp black pepper',
      '120 ml apple juice',
      '150 g barbecue sauce'
    ],
    st: [
      'Remove the membrane from the back of the ribs. Mix the sugar, paprika, salt, garlic powder and pepper, rub all over and cut into sections.',
      'Pour the apple juice into the slow cooker and stand the ribs upright round the side.',
      'Cover and cook on low for 6 hours until tender. If your slow cooker runs hot, check at 5 hours.',
      'Heat the grill. Lift the ribs onto a tray, brush with the barbecue sauce and grill for 6 minutes until sticky.'
    ],
    tips: [
      'Remove the membrane for tender ribs.',
      'Stand the ribs upright so they do not sit in liquid.',
      'Grill briefly for a sticky finish.',
      'Lift them out carefully; they are very tender.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Baked beans', 'Potato wedges'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 15 minutes.',
    nut: [1075, 57, 25, 83, 1, 21, 1780]
  },

  'slow-cooker-bean-soup': {
    d: 'Dried haricot beans, ham, carrots and tomatoes cooked on low for 7 hours into a thick soup, with no soaking. Six servings.',
    meta: 'Slow cooker bean soup: dried beans, bacon, carrots and tomatoes cooked on low for 7 hours into a thick soup with no soaking. Six servings.',
    kw: ['slow cooker bean soup', 'crock pot bean soup', 'bean soup in the slow cooker', 'easy bean soup', 'hearty bean and bacon soup'],
    why: 'Dried beans are among the cheapest foods in the shop, and the slow cooker removes the one obstacle, which is the long cooking. Seven hours on low turns hard beans into creamy ones, and the broth that results is thick without help.\n\nSoaking is optional. Soaked beans cook a little faster and some cooks find them easier to digest, so rinse and soak overnight if you remember. Otherwise, rinse them and put them in from dry. **Do check that the beans are fully tender**, since beans that stay slightly firm in the middle are unpleasant, and old beans can take longer.\n\nBacon gives a smoky base. Fry it with the onion before it goes in, or add it raw for less trouble.\n\nKeep the salt and the tomatoes for the end, if you can. Acid, from tomatoes and vinegar, slows the softening of the skins, so add the tinned tomatoes for the last 2 hours. Mash a few beans against the pot to thicken the soup.',
    ing: [
      '400 g dried haricot beans, rinsed',
      '150 g bacon, chopped',
      '1 onion, diced',
      '3 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '1.6 litres water',
      '2 bay leaves',
      '400 g tin chopped tomatoes',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the beans, bacon, onion, carrots, celery, garlic, water and bay leaves in the slow cooker and stir.',
      'Cover and cook on low for 5 hours.',
      'Stir in the tomatoes, salt and pepper and cook for 2 hours more, until the beans are completely tender. If your slow cooker runs hot, check at 6 hours.',
      'Mash a few beans against the side of the pot, remove the bay leaves and taste for salt.'
    ],
    tips: [
      'Check that the beans are fully tender before serving.',
      'Add the tomatoes late.',
      'Mash a few beans to thicken the soup.',
      'Soak the beans overnight if you plan ahead.'
    ],
    pair: ['Cornbread', 'Crusty bread', 'Green salad', 'Hot sauce'],
    store: 'Keeps in the fridge for up to 4 days and thickens. Freezes for up to 3 months.',
    nut: [312, 20, 49, 4, 12, 6, 820]
  }
};
