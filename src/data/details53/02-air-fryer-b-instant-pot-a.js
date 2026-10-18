'use strict';

/**
 * Volume fifty-three — air fryer, Instant Pot and oven dinners, second part.
 *
 * Twenty-five dishes: four more air fryer recipes (stuffed peppers, tater
 * tots, turkey breast, zucchini chips) and twenty-one Instant Pot dishes from
 * baked beans through to lamb shanks. Waits of an hour or more are declared
 * as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'air-fryer-stuffed-peppers': {
    d: 'Halved peppers filled with spiced beef, rice and tomato, topped with cheese and air fried for 20 minutes until soft and bubbling.',
    meta: 'Air fryer stuffed peppers with beef, rice and melted cheese, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['air fryer stuffed peppers', 'stuffed peppers in air fryer', 'beef stuffed peppers', 'stuffed bell peppers', 'stuffed peppers with rice'],
    why: 'A Sunday dish for a table of four, and one that also works on a Tuesday. Stuffed peppers are a way of using a handful of ordinary things, mince, rice and a tin of tomatoes, and ending up with something that looks like a proper meal. The air fryer shortens the time without drying out the filling.\n\nCook the rice first, or use a pouch of ready-cooked rice, so that the filling is only being heated rather than finished in the pepper. Brown the mince with onion and garlic, add the spices and tomatoes, and let it reduce until it holds its shape on a spoon. A wet filling pools in the base of the pepper and makes it sag.\n\n**Cut the peppers lengthways and keep the stalks on.** The stalk gives the half a little rigidity and holds the filling in. Remove the seeds and pith, and stand each half upright in the basket, wedged against the others.\n\nCover the tops with foil for the first 12 minutes, then take it off, add the cheese and cook for the last 8 minutes until the top is golden and the pepper edges are charred.',
    ing: [
      '4 large red peppers, halved lengthways',
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '2 garlic cloves, crushed',
      '300 g beef mince',
      '1 tsp ground cumin',
      '1 tsp smoked paprika',
      '200 g tinned chopped tomatoes',
      '200 g cooked rice',
      '1/2 tsp salt',
      '100 g cheddar, grated'
    ],
    st: [
      'Heat the olive oil in a frying pan over medium heat. Cook the onion for 5 minutes, add the garlic and beef and cook for 6 minutes until browned.',
      'Stir in the cumin, paprika, tomatoes and salt. Simmer for 5 minutes until thick, then stir in the rice.',
      'Heat the air fryer to 180C. Remove the seeds from the pepper halves and fill each one with the beef mixture.',
      'Stand the peppers in the basket and cover with foil. Cook for 12 minutes.',
      'Remove the foil, scatter over the cheddar and cook for 8 minutes more until the cheese has melted and the peppers are soft.'
    ],
    tips: [
      'Reduce the filling until thick so the peppers do not collapse.',
      'If the peppers will not stand, wedge them with scrunched foil.',
      'Add a pinch of chilli flakes to the mince for heat.'
    ],
    pair: ['Green salad', 'Soured cream', 'Garlic bread', 'Corn on the cob'],
    store: 'Keeps for 3 days in the fridge. Reheat in the air fryer for 6 minutes at 170C.',
    nut: [444, 25, 32, 24, 5, 11, 520]
  },

  'air-fryer-tater-tots': {
    d: 'Frozen tater tots air fried for 15 minutes without any added oil, until the outsides are crunchy and the insides are soft.',
    meta: 'Air fryer tater tots: crisp outside, soft inside, cooked from frozen for 15 minutes. Four servings, ready in 17 minutes.',
    kw: ['air fryer tater tots', 'tater tots in air fryer', 'crispy tater tots', 'frozen tater tots air fryer', 'tater tots recipe'],
    why: 'Frozen potato nuggets were invented by a company looking for a use for potato offcuts in the 1950s, and they have been a school dinner favourite since. They also happen to be one of the best things you can put in an air fryer, because the high airflow crisps the grated potato without any extra fat.\n\nCook them from frozen and never thaw them first. Thawed tots go soft and mushy. Spread them in a single layer so the air reaches every side, and shake the basket at least once during cooking.\n\n**Do not add oil.** Frozen tots already contain enough fat from the factory frying, and more only makes them greasy. A light shake of salt after cooking is all they need.\n\nThey are ready when they are a deep golden colour and sound hollow if you tap one with a fork. Try a spoonful of the seasoning mix here, a little smoked paprika and garlic powder tossed through the hot tots, then serve them with ketchup or a cheese dip.',
    ing: [
      '500 g frozen tater tots',
      '1/2 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1/4 tsp salt',
      '4 tbsp ketchup'
    ],
    st: [
      'Heat the air fryer to 200C.',
      'Tip the frozen tater tots into the basket in a single layer. Do not defrost them.',
      'Cook for 15 minutes, shaking the basket after 5 and 10 minutes, until golden and crisp.',
      'Toss the hot tots in a bowl with the paprika, garlic powder and salt.',
      'Serve straight away with the ketchup.'
    ],
    tips: [
      'Never thaw the tots before cooking.',
      'Cook in two batches if the basket is full.',
      'Check at 12 minutes if your air fryer runs hot.'
    ],
    pair: ['Ketchup', 'Cheese sauce', 'Burgers', 'Fried eggs'],
    store: 'Best eaten at once. Reheat leftovers in the air fryer for 3 minutes at 190C.',
    nut: [282, 3, 36, 14, 3, 4, 850]
  },

  'air-fryer-turkey-breast': {
    d: 'A boneless turkey breast rubbed with butter and herbs, air fried for 50 minutes and rested until juicy, with crisp golden skin.',
    meta: 'Air fryer turkey breast with a herb butter rub and golden skin, cooked for 50 minutes. Six servings, ready in 1 hour.',
    kw: ['air fryer turkey breast', 'turkey breast in air fryer', 'herb butter turkey breast', 'roast turkey breast', 'small turkey roast'],
    why: 'Pull it out at 71C, not later. A turkey breast has almost no fat inside, so there is a narrow gap between cooked through and dry, and a thermometer is the only reliable way to hit it. The air fryer cooks the outside faster than an oven does, which makes the check more important, not less.\n\nChoose a boneless breast of about 1 kg that fits the basket with some room around it. Mix softened butter with garlic, thyme, sage and salt, and push some of it under the skin as well as over the top. The butter bastes the meat from the inside as it melts.\n\n**Cover the skin loosely with foil for the first 30 minutes.** This stops the herbs from scorching before the middle is warm. Take the foil off for the last 20 minutes so the skin can crisp and turn golden.\n\nRest the turkey for 15 minutes before slicing, covered with foil. Carving it straight away lets the juices run out onto the board, and the slices will be drier for it.',
    ing: [
      '1 kg boneless turkey breast, skin on',
      '50 g butter, softened',
      '2 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '1 tbsp fresh sage, finely chopped',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil'
    ],
    st: [
      'Mix the butter, garlic, thyme, sage, salt and pepper. Loosen the skin of the turkey and spread half of the butter underneath. Rub the rest over the top.',
      'Heat the air fryer to 170C. Brush the basket with the olive oil.',
      'Place the turkey skin side up in the basket. Cover loosely with foil and cook for 30 minutes.',
      'Remove the foil and cook for 20 minutes more, until the skin is golden and a thermometer in the thickest part reads 71C.',
      'Rest under foil for 15 minutes, then slice against the grain.'
    ],
    tips: [
      'Use a thermometer: 71C in the thickest part is cooked.',
      'If the skin browns too fast, tent it with foil again.',
      'Slice across the grain for tender portions.'
    ],
    pair: ['Roast potatoes', 'Cranberry sauce', 'Gravy', 'Green beans'],
    store: 'Keeps for 3 days in the fridge. Slice before storing and reheat gently with a splash of stock.',
    nut: [272, 40, 1, 12, 0, 0, 490]
  },

  'air-fryer-zucchini-chips': {
    d: 'Thin zucchini slices coated in parmesan breadcrumbs and air fried for 15 minutes until crisp and golden, with a yogurt dip.',
    meta: 'Air fryer zucchini chips with a parmesan crumb, crisp and golden after 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['air fryer zucchini chips', 'zucchini chips in air fryer', 'air fryer courgette chips', 'parmesan zucchini chips', 'crispy zucchini chips'],
    why: 'The sound of the first one snapping is the sign that the batch is right. Thin slices of courgette hold a lot of water, so the secret is to draw some out before the crumb goes on, and to cook them in a hot, dry air stream that finishes the job.\n\nSlice the zucchini into rounds about 3 mm thick, using a mandoline if you have one, or a sharp knife and patience. Salt them lightly, leave them for 10 minutes and pat them dry with kitchen paper. They will look beaded with moisture, and that is what you are removing.\n\n**Press the crumb on firmly** with the flat of your hand. Mix panko, finely grated parmesan, paprika and a pinch of garlic powder, then dip each slice in beaten egg and in the crumb. A loose coating falls off as soon as the air catches it.\n\nCook in a single layer, spraying with a little oil, and turn the slices once halfway. Cooking in two batches gives a better result than trying to squeeze them all in at once. Serve them hot with a garlicky yogurt dip.',
    ing: [
      '400 g zucchini, sliced 3 mm thick',
      '1/2 tsp salt',
      '2 eggs, beaten',
      '60 g panko breadcrumbs',
      '40 g parmesan, finely grated',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '2 tbsp olive oil, for spraying',
      '150 g Greek yogurt',
      '1 garlic clove, crushed',
      '1 tsp lemon juice'
    ],
    st: [
      'Toss the zucchini slices with the salt and leave for 10 minutes. Pat very dry with kitchen paper.',
      'Mix the panko, parmesan, paprika and garlic powder in a shallow dish. Put the eggs in a second dish.',
      'Dip each slice in egg, then press firmly into the crumb mixture.',
      'Heat the air fryer to 190C. Spray the slices with the olive oil and arrange in a single layer. Cook for 15 minutes in two batches, turning once, until golden and crisp.',
      'Mix the yogurt, garlic and lemon juice and serve as a dip.'
    ],
    tips: [
      'Cut the slices evenly so they cook at the same speed.',
      'Pat the salted slices dry before the egg.',
      'Eat them quickly: they soften as they cool.'
    ],
    pair: ['Yogurt dip', 'Marinara sauce', 'Burgers', 'Green salad'],
    store: 'Best eaten straight away. They do not reheat well, but 3 minutes in the air fryer helps.',
    nut: [250, 14, 17, 14, 2, 5, 540]
  },

  'instant-pot-baked-beans': {
    d: 'Dried haricot beans cooked under pressure in a molasses and tomato sauce, finished with bacon until thick, sweet and smoky.',
    meta: 'Instant Pot baked beans from dried beans in a smoky molasses sauce. Eight servings, cooked for 50 minutes under pressure.',
    kw: ['instant pot baked beans', 'baked beans from dried beans', 'homemade baked beans', 'pressure cooker baked beans', 'smoky baked beans'],
    why: 'It looks like a tin of beans and cooks like a Sunday pot of them, which is why the pressure cooker is such a good fit. Dried beans need hours on the hob, but under pressure they soften in under an hour without soaking, and absorb the sauce while they do.\n\nUse haricot or navy beans, which hold their shape and take on a creamy texture. Rinse them and pick out any stones. The sauce is built from bacon, onion, tomato purée, molasses, brown sugar, mustard and cider vinegar, a balance of sweet, smoky and sharp.\n\n**Do not add the molasses until the beans are soft.** Sugar and acid slow the softening of the skins, and beans cooked with molasses from the start can stay hard even after an hour. Cook them in water and bacon first, then stir in the sauce for a final simmer.\n\nThe finished beans should be thick enough that a spoon dragged through leaves a trail. If they are loose, use the sauté function for 10 minutes without the lid, stirring often, until the liquid has reduced.',
    ing: [
      '400 g dried haricot beans, rinsed',
      '100 g smoked bacon, diced',
      '1 onion, finely chopped',
      '1 litre water',
      '3 tbsp tomato purée',
      '3 tbsp black treacle',
      '2 tbsp light brown sugar',
      '1 tbsp English mustard',
      '2 tbsp cider vinegar',
      '1 tsp salt',
      '1 tsp smoked paprika'
    ],
    st: [
      'Set the Instant Pot to sauté. Cook the bacon for 5 minutes until the fat runs, then add the onion and cook for 4 minutes.',
      'Add the beans and the water. Seal the lid and cook on high pressure for 35 minutes. Release the pressure naturally for 15 minutes.',
      'Open the lid. Stir in the tomato purée, treacle, brown sugar, mustard, vinegar, salt and paprika.',
      'Select sauté and simmer without the lid for 10 minutes, stirring, until the sauce is thick and glossy.',
      'Taste, adjust the salt and serve hot.'
    ],
    tips: [
      'Add the sweet and sour ingredients only after the beans are tender.',
      'Do not skip the natural release: it keeps the beans intact.',
      'Thin the sauce with a splash of hot water if it gets too thick.'
    ],
    pair: ['Buttered toast', 'Jacket potatoes', 'Sausages', 'Fried eggs'],
    store: 'Keeps for 5 days in the fridge or 3 months in the freezer. They thicken as they cool; loosen with water when reheating.',
    nut: [230, 14, 39, 2, 8, 9, 520]
  },

  'instant-pot-beans-and-ham': {
    d: 'Dried beans cooked under pressure with a smoked ham hock, carrot, onion and celery until creamy, with the ham pulled through the pot.',
    meta: 'Instant Pot beans and ham with a smoked hock and a thick, savoury broth. Six servings, cooked for 60 minutes.',
    kw: ['instant pot beans and ham', 'ham and beans pressure cooker', 'ham hock and beans', 'smoked ham hock beans', 'white beans and ham'],
    why: 'Keep the heat low. That is most of the recipe in the stovetop version, and the pressure cooker does it without any attention at all. A smoked ham hock, simmered with dried white beans, turns a thin broth into something rich and slightly sticky as the collagen dissolves.\n\nThe hock supplies the salt, so there is none in the pot until the end. Taste before seasoning, because a hock can be very salty. Soak the beans for a couple of hours if you have time, or cook them straight from dry with 10 minutes more in the pot.\n\n**Pull the meat off the bone and return it to the pot.** The hock is mostly skin, fat and bone, and the meat is what you want. Discard the skin and bone, shred the meat, and stir it back in so that every spoonful has some.\n\nAdd a splash of cider vinegar at the end to lift the smoky richness, and mash a few beans against the side of the pot to thicken the broth. Serve with cornbread or crusty bread.',
    ing: [
      '400 g dried white beans, rinsed',
      '1 smoked ham hock, about 600 g',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, crushed',
      '1 bay leaf',
      '1 tsp dried thyme',
      '1.2 litres water',
      '1 tbsp cider vinegar',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the beans, ham hock, onion, carrots, celery, garlic, bay leaf, thyme and water in the Instant Pot.',
      'Seal the lid and cook on high pressure for 50 minutes. Let the pressure release naturally for 10 minutes, then release the rest.',
      'Lift out the hock and pull the meat from the bone. Discard the skin, fat and bone and shred the meat.',
      'Return the meat to the pot. Mash a few beans against the side to thicken the broth.',
      'Stir in the vinegar and pepper, taste for salt and serve.'
    ],
    tips: [
      'Do not add salt until after the hock has cooked.',
      'Mash a ladleful of beans to thicken the broth.',
      'Soak the beans for a softer result and a shorter cook.'
    ],
    pair: ['Cornbread', 'Crusty bread', 'Green salad', 'Hot sauce'],
    store: 'Keeps for 5 days in the fridge or 3 months in the freezer.',
    nut: [250, 25, 15, 10, 5, 2, 1230]
  },

  'instant-pot-beef-bourguignon': {
    d: 'Beef chuck braised under pressure in red wine with bacon, mushrooms, onions and carrots until tender in a glossy sauce.',
    meta: 'Instant Pot beef bourguignon with red wine, bacon and mushrooms. Six servings, ready in 1 hour 10 minutes.',
    kw: ['instant pot beef bourguignon', 'pressure cooker beef bourguignon', 'beef bourguignon recipe', 'red wine beef stew', 'french beef stew'],
    why: 'Beef bourguignon means beef from Burgundy, and the name tells you the cooking liquid: red wine. A good bottle is not needed, but a wine you would drink is, since the flavour concentrates as the sauce reduces.\n\nBrown the beef in batches in the Instant Pot on the sauté setting. The dark crust on each piece is where the flavour of the stew starts, so do not rush it. Crowding the pot makes the meat steam and turn grey, and the sauce will taste thin.\n\n**Deglaze with the wine and scrape the base clean.** The brown stuck to the bottom contains much of the flavour, and it can also trigger the burn warning if left there when the pressure builds. Reduce the wine for a few minutes before sealing the lid.\n\nPressure cooking reduces the cooking time from three hours to 45 minutes. Thicken the sauce at the end with a paste of butter and flour, and cook the mushrooms separately in a pan so they stay golden rather than turning soft and grey in the stew.',
    ing: [
      '1 kg beef chuck, cut into 4 cm cubes',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '100 g smoked bacon lardons',
      '1 tbsp olive oil',
      '1 onion, chopped',
      '2 carrots, sliced',
      '3 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '300 ml red wine',
      '200 ml beef stock',
      '2 sprigs thyme',
      '250 g button mushrooms',
      '30 g butter',
      '2 tbsp plain flour'
    ],
    st: [
      'Season the beef with the salt and pepper. Set the Instant Pot to sauté and cook the lardons for 4 minutes. Remove them. Brown the beef in 2 batches in the olive oil for 4 minutes per batch.',
      'Add the onion and carrots and cook for 4 minutes. Add the garlic and tomato purée and cook for 1 minute.',
      'Pour in the wine, scraping the base, and reduce for 5 minutes. Add the stock, thyme and lardons.',
      'Seal and cook on high pressure for 35 minutes. Release naturally for 10 minutes, then release the rest.',
      'Fry the mushrooms in 10 g of the butter until golden. Mash the remaining butter with the flour, stir into the stew on sauté for 3 minutes until thick, and fold in the mushrooms.'
    ],
    tips: [
      'Brown the beef in batches, not all at once.',
      'Scrape the base of the pot clean before sealing.',
      'Add the thickener at the end, not before pressure cooking.'
    ],
    pair: ['Mashed potatoes', 'Crusty bread', 'Green beans', 'Buttered noodles'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer. Better the next day.',
    nut: [462, 38, 10, 30, 2, 3, 890]
  },

  'instant-pot-beef-brisket': {
    d: 'A beef brisket joint cooked under pressure with onions, garlic and stock for 90 minutes until tender enough to slice or shred.',
    meta: 'Instant Pot beef brisket with onions and a rich cooking sauce. Eight servings, cooked for 90 minutes.',
    kw: ['instant pot beef brisket', 'pressure cooker brisket', 'braised beef brisket', 'tender beef brisket', 'brisket with onions'],
    why: 'Slice it against the grain. That is the whole secret of a tender brisket, and it matters as much as the cooking. A brisket is a long, tough muscle with the grain running in one direction, and cutting across those fibres shortens them so that every slice falls apart on the fork.\n\nBuy a flat-cut brisket of about 1.5 kg, trimmed of all but a thin layer of fat. Rub it with paprika, garlic powder, salt and pepper, and sear it hard on both sides in the pot. The browning is where the roasted flavour comes from, because there is no oven crust in a pressure cooker.\n\n**Cook it fat side up** so the fat bastes the meat as it softens. Sit it on a bed of onions, which lift it off the base and prevent scorching, then pour in stock and a splash of Worcestershire sauce.\n\nRest the meat in its juices for 15 minutes after the pressure has gone. Skim the fat off the cooking liquid and boil it down on sauté until it is a thick sauce, then pour it over the sliced beef.',
    ing: [
      '1.5 kg beef brisket, flat cut',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '2 tsp salt',
      '1 tsp black pepper',
      '1 tbsp olive oil',
      '2 onions, sliced',
      '4 garlic cloves, sliced',
      '300 ml beef stock',
      '2 tbsp Worcestershire sauce',
      '1 tbsp tomato purée'
    ],
    st: [
      'Mix the paprika, garlic powder, salt and pepper and rub all over the brisket. Cut the meat in half if it does not fit the pot.',
      'Set the Instant Pot to sauté. Heat the olive oil and sear the brisket for 4 minutes on each side. Remove it.',
      'Layer the onions and garlic in the pot. Add the stock, Worcestershire sauce and tomato purée and stir, scraping the base.',
      'Return the brisket fat side up. Seal and cook on high pressure for 90 minutes. Release naturally for 20 minutes.',
      'Rest the meat for 15 minutes in the liquid. Skim the fat, reduce the sauce on sauté for 10 minutes, slice the brisket against the grain and serve.'
    ],
    tips: [
      'Slice against the grain for tender portions.',
      'Cook fat side up so it bastes the meat.',
      'Reduce the sauce after cooking for a rich finish.'
    ],
    pair: ['Mashed potatoes', 'Coleslaw', 'Pickles', 'Buttered carrots'],
    store: 'Keeps for 4 days in the fridge in its sauce, or 3 months in the freezer.',
    nut: [406, 38, 5, 26, 1, 2, 880]
  },

  'instant-pot-beef-curry': {
    d: 'Cubed beef chuck cooked under pressure in an onion, tomato and spice sauce until tender, finished with fresh coriander.',
    meta: 'Instant Pot beef curry with a thick onion and tomato sauce. Four servings, ready in 50 minutes.',
    kw: ['instant pot beef curry', 'pressure cooker beef curry', 'beef curry recipe', 'indian beef curry', 'tender beef curry'],
    why: 'The first sign it is ready is the smell: onions turning from white to deep gold, then cumin and coriander blooming in the hot oil. The curry sauce is built from that base, and it is the reason this curry tastes like it has been cooking all afternoon.\n\nCook the onions properly, for at least 8 minutes, until they are soft and darkening at the edges. They form the body of the sauce. Add ginger, garlic and the dry spices, and stir for a minute so that the oil carries their flavour, then stir in tomato and a spoon of yogurt.\n\n**Cut the beef into pieces of about 3 cm.** Smaller pieces cook down to shreds under pressure. Chuck or shin are the best cuts, because their connective tissue melts into the sauce and makes it glossy.\n\nUse very little liquid. The pot is sealed, so nothing evaporates, and the meat and onions release plenty of juice themselves. If the sauce is thin at the end, simmer it on sauté for 10 minutes. Add the garam masala and coriander only after cooking, so their scent is fresh.',
    ing: [
      '600 g beef chuck, cut into 3 cm cubes',
      '2 tbsp vegetable oil',
      '2 onions, finely chopped',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp turmeric',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '3 tbsp plain yogurt',
      '1 tsp salt',
      '100 ml water',
      '1 tsp garam masala',
      '2 tbsp fresh coriander, chopped'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and cook the onions for 8 minutes until deep golden.',
      'Add the garlic, ginger, cumin, ground coriander, turmeric and chilli. Stir for 1 minute, then add the beef and stir to coat.',
      'Add the tomatoes, yogurt, salt and water, scraping the base.',
      'Seal and cook on high pressure for 30 minutes. Release naturally for 10 minutes.',
      'If the sauce is thin, simmer on sauté for 5 minutes. Stir in the garam masala and coriander.'
    ],
    tips: [
      'Brown the onions fully: they are the flavour base.',
      'Use little liquid because nothing evaporates under pressure.',
      'Add the garam masala at the end.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [427, 33, 13, 27, 3, 6, 710]
  },

  'instant-pot-beef-stroganoff': {
    d: 'Strips of beef cooked under pressure with mushrooms and onions, stirred through egg noodles with soured cream and mustard.',
    meta: 'Instant Pot beef stroganoff with mushrooms, noodles and a soured cream sauce. Four servings, ready in 40 minutes.',
    kw: ['instant pot beef stroganoff', 'pressure cooker stroganoff', 'beef stroganoff with noodles', 'creamy beef stroganoff', 'mushroom stroganoff'],
    why: 'Stroganoff takes its name from a Russian noble family, according to the usual account, and the dish has travelled widely since. The Instant Pot version cooks the noodles in the same pot as the beef, so there is one pan to wash and the noodles drink up the sauce as they soften.\n\nSlice the beef thinly across the grain, into strips about the thickness of a finger. Sirloin or rump cooks fast, and thin strips stay tender in the short time under pressure. Brown the beef first, for flavour, then set it aside while you cook the onions and mushrooms.\n\n**Add the soured cream off the heat.** If the sauce is boiling when the cream goes in, it splits into grainy curds. Open the lid, switch the pot off, stir the cream in slowly, and the residual heat will warm it through.\n\nA spoonful of Dijon mustard and a splash of Worcestershire sauce add depth, and a little paprika gives colour. Serve straight away, scattered with parsley, because the noodles continue to absorb liquid as they sit.',
    ing: [
      '500 g beef sirloin, cut into thin strips',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 onion, sliced',
      '250 g mushrooms, sliced',
      '2 garlic cloves, crushed',
      '1 tbsp plain flour',
      '500 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tbsp Dijon mustard',
      '1 tsp paprika',
      '200 g egg noodles',
      '150 g soured cream',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Season the beef with half of the salt. Set the Instant Pot to sauté and brown the beef in the oil in 2 batches for 3 minutes each. Remove.',
      'Cook the onion and mushrooms for 5 minutes. Add the garlic and flour and stir for 1 minute.',
      'Pour in the stock, Worcestershire sauce, mustard, paprika and remaining salt, scraping the base. Add the noodles and press them under the liquid. Return the beef on top.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Stir well, switch off the heat and stir in the soured cream. Serve with the parsley.'
    ],
    tips: [
      'Slice the beef across the grain in thin strips.',
      'Stir in the soured cream after the heat is off.',
      'Do not stir the noodles before sealing.'
    ],
    pair: ['Green salad', 'Pickled gherkins', 'Steamed peas', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge. Add a splash of stock when reheating as the noodles absorb liquid.',
    nut: [579, 38, 46, 27, 3, 6, 1210]
  },

  'instant-pot-beef-and-broccoli': {
    d: 'Thin slices of beef pressure cooked in a soy and oyster sauce, with broccoli added at the end and the sauce thickened with cornflour.',
    meta: 'Instant Pot beef and broccoli in a glossy soy and garlic sauce. Four servings, ready in 25 minutes.',
    kw: ['instant pot beef and broccoli', 'pressure cooker beef and broccoli', 'beef and broccoli sauce', 'chinese beef and broccoli', 'beef broccoli sauce'],
    why: 'Most home versions come out with grey, mushy broccoli, and the fix is to keep it out of the pressure cooker. The beef needs the pressure to turn tender, but broccoli needs a couple of minutes at most. Add it afterwards, on the sauté setting, and it keeps its colour and bite.\n\nSlice the beef thinly against the grain. Flank steak or sirloin both work, and a quick toss with cornflour and a splash of soy before cooking gives the slices a silky coating that holds the sauce. The sauce itself is soy, oyster sauce, a little sugar, garlic and ginger, and it should taste slightly too strong before it is thickened.\n\n**Do not thicken the sauce before pressure cooking.** Cornflour at the bottom of a sealed pot can scorch and trigger the burn warning. Stir a slurry in once the lid is off and the sauce is simmering, and it will go glossy within a minute.\n\nServe the beef over rice, and spoon the sauce over the top so that it soaks into the grains.',
    ing: [
      '500 g flank steak, sliced thinly across the grain',
      '1 tbsp cornflour, plus 1 tbsp for the sauce',
      '4 tbsp soy sauce',
      '2 tbsp oyster sauce',
      '1 tbsp light brown sugar',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '120 ml beef stock',
      '1 tbsp vegetable oil',
      '350 g broccoli florets',
      '1 tsp sesame oil'
    ],
    st: [
      'Toss the beef with 1 tbsp cornflour and 1 tbsp of the soy sauce. Mix the rest of the soy, oyster sauce, sugar, garlic, ginger and stock.',
      'Set the Instant Pot to sauté. Heat the oil and brown the beef for 2 minutes. Pour in the sauce.',
      'Seal and cook on high pressure for 8 minutes. Release the pressure quickly.',
      'Select sauté. Add the broccoli and simmer for 3 minutes until just tender.',
      'Mix the remaining cornflour with 2 tbsp cold water, stir it in and simmer for 1 minute until glossy. Finish with the sesame oil.'
    ],
    tips: [
      'Add the broccoli after pressure cooking to keep it green.',
      'Thicken the sauce with the lid off.',
      'Slice the beef thinly for tenderness.'
    ],
    pair: ['Steamed rice', 'Egg fried rice', 'Noodles', 'Sesame seeds'],
    store: 'Keeps for 3 days in the fridge. Reheat in a pan with a splash of water.',
    nut: [279, 31, 14, 11, 2, 5, 1280]
  },

  'instant-pot-biryani': {
    d: 'Marinated chicken and basmati rice cooked together in layers under pressure with whole spices, caramelised onions and saffron milk.',
    meta: 'Instant Pot biryani with chicken, basmati, fried onions and saffron. Six servings, ready in 1 hour 15 minutes.',
    kw: ['instant pot biryani', 'chicken biryani pressure cooker', 'biryani recipe', 'basmati chicken biryani', 'one pot biryani'],
    why: 'Flavoured rice, spiced chicken, fried onions and a pinch of saffron: biryani is a layered dish of many parts, and the Instant Pot lets you cook them together without the dum sealing with dough or hours at the stove. The steam does the rest of the work.\n\nMarinate the chicken in yogurt, ginger, garlic and spices for at least 30 minutes. The yogurt tenderises the meat and forms the base of the gravy. Rinse the basmati until the water runs clear, which removes surface starch and keeps the grains separate.\n\n**Layer, do not stir.** Put the chicken and its marinade in the base of the pot, scatter the fried onions and herbs over it, then spoon the rice on top and pour in the water. If the rice touches the bottom, it will stick and catch. Do not stir after sealing.\n\nCook for only 6 minutes on high pressure, followed by a 10 minute natural release. Fluff the rice gently with a fork, folding the layers together, and drizzle the saffron milk over the top.',
    ing: [
      '600 g chicken thighs, boneless, cut into chunks',
      '150 g plain yogurt',
      '1 tbsp fresh ginger, grated',
      '4 garlic cloves, crushed',
      '2 tsp garam masala',
      '1 tsp turmeric',
      '1 tsp chilli powder',
      '1 tsp salt',
      '300 g basmati rice, rinsed',
      '2 tbsp vegetable oil',
      '2 onions, thinly sliced',
      '300 ml water',
      '1 pinch saffron strands',
      '3 tbsp warm milk',
      '2 tbsp fresh coriander, chopped'
    ],
    st: [
      'Mix the chicken with the yogurt, ginger, garlic, garam masala, turmeric, chilli and salt. Marinate for 30 minutes.',
      'Set the Instant Pot to sauté. Fry the onions in the oil for 12 minutes until deep golden. Remove half and set aside.',
      'Add the chicken and marinade to the pot and spread flat. Scatter the coriander and the reserved onions on top, then add the rice in an even layer. Pour in the water without stirring.',
      'Seal and cook on high pressure for 6 minutes. Release naturally for 10 minutes.',
      'Soak the saffron in the warm milk. Fluff the biryani gently, drizzle with the saffron milk and serve.'
    ],
    tips: [
      'Rinse the rice until the water is clear.',
      'Do not stir the layers before cooking.',
      'Use thighs: breast dries out under pressure.'
    ],
    pair: ['Raita', 'Cucumber salad', 'Pickle', 'Boiled eggs'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of water.',
    nut: [386, 27, 47, 10, 2, 3, 510]
  },

  'instant-pot-cabbage-rolls': {
    d: 'Cabbage leaves wrapped around a beef and rice filling and cooked under pressure in tomato sauce, until the leaves are silky.',
    meta: 'Instant Pot cabbage rolls with beef, rice and tomato sauce. Six servings, ready in 55 minutes.',
    kw: ['instant pot cabbage rolls', 'pressure cooker cabbage rolls', 'stuffed cabbage rolls', 'polish cabbage rolls', 'golabki'],
    why: 'Most home versions tear, and the fix is to soften the leaves before you roll them. A whole cabbage dunked in boiling water for a few minutes loosens its leaves, which peel away cleanly and turn pliable enough to fold without splitting.\n\nThe filling is beef mince mixed with half-cooked rice, grated onion, egg, salt and pepper. Using part-cooked rice matters because it keeps absorbing juice in the pot. Raw rice may stay hard, while fully cooked rice turns to mush after the pressure cooking.\n\n**Shave the thick rib** on each leaf so that it folds flat. Place a spoonful of filling near the stem end, fold the sides in, then roll up firmly. Pack the rolls seam side down in the pot in tight layers, so they cannot unroll as they cook.\n\nPour over a sauce of passata, a little sugar and vinegar, which gives the sweet and sour balance common in Polish golabki. Cook under pressure for 25 minutes, then release the pressure slowly.',
    ing: [
      '1 large green cabbage, about 1.2 kg',
      '500 g beef mince',
      '100 g cooked rice',
      '1 onion, grated',
      '1 egg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '500 g passata',
      '1 tbsp light brown sugar',
      '1 tbsp cider vinegar',
      '100 ml water'
    ],
    st: [
      'Cut out the core of the cabbage. Simmer the whole head in boiling water for 5 minutes, then peel off 12 large leaves. Trim the thick rib from each.',
      'Mix the mince, rice, onion, egg, salt and pepper. Put 3 tbsp of filling on each leaf, fold in the sides and roll up.',
      'Mix the passata, sugar, vinegar and water. Spread a third over the base of the Instant Pot, then pack in the rolls seam side down. Pour over the rest of the sauce.',
      'Seal and cook on high pressure for 25 minutes. Release naturally for 10 minutes.',
      'Spoon the sauce over the rolls and serve hot.'
    ],
    tips: [
      'Trim the thick rib so the leaf folds flat.',
      'Pack the rolls tightly so they hold their shape.',
      'Use part-cooked rice for the right texture.'
    ],
    pair: ['Mashed potatoes', 'Soured cream', 'Rye bread', 'Pickled beetroot'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [310, 21, 25, 14, 7, 13, 580]
  },

  'instant-pot-carnitas': {
    d: 'Pork shoulder rubbed with cumin, oregano and orange, cooked under pressure until tender, then crisped under the grill.',
    meta: 'Instant Pot carnitas with orange and spices, shredded and crisped. Eight servings, cooked for 60 minutes.',
    kw: ['instant pot carnitas', 'pressure cooker carnitas', 'pork carnitas tacos', 'crispy carnitas', 'mexican pulled pork'],
    why: 'A Saturday dish for a table of eight, and the filling for tacos, burritos or bowls all week. Carnitas means little meats, and the traditional method simmers pork in its own fat until it falls apart. The pressure cooker gets there in an hour.\n\nUse pork shoulder, which has enough fat to keep the shreds juicy. Cut it into large chunks so that the surface takes up the rub and the cooking juices. A rub of cumin, oregano, garlic and salt, plus the juice of an orange and a lime, gives the pork a sweet, citrus-tinged flavour.\n\n**Crisp the shredded meat under the grill**, spread on a tray with a ladle of the cooking juices over it. Five minutes under a hot grill gives crisp, caramelised edges against tender strands, and this step is what separates carnitas from plain pulled pork.\n\nSkim the fat from the cooking liquid and spoon a little back over the meat before grilling. Serve in warm tortillas with onion, coriander and lime, and a spoonful of salsa verde.',
    ing: [
      '1.5 kg pork shoulder, boneless, cut into 6 cm chunks',
      '2 tsp salt',
      '2 tsp ground cumin',
      '2 tsp dried oregano',
      '4 garlic cloves, crushed',
      '1 orange, juiced',
      '1 lime, juiced',
      '1 onion, quartered',
      '2 bay leaves',
      '100 ml water'
    ],
    st: [
      'Rub the pork with the salt, cumin, oregano and garlic.',
      'Put the pork, orange juice, lime juice, onion, bay leaves and water in the Instant Pot.',
      'Seal and cook on high pressure for 60 minutes. Release naturally for 15 minutes.',
      'Heat the grill to high. Shred the pork with two forks on a tray and spoon over 5 tablespoons of the cooking liquid.',
      'Grill for 5 minutes until the edges are crisp and browned. Serve in tortillas.'
    ],
    tips: [
      'Do not skip the grill step: it makes the carnitas.',
      'Skim off the fat before spooning over the juices.',
      'Cut the pork into big chunks for the best texture.'
    ],
    pair: ['Corn tortillas', 'Pickled red onion', 'Salsa verde', 'Lime wedges'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [390, 34, 5, 26, 1, 2, 700]
  },

  'instant-pot-chicken-adobo': {
    d: 'Chicken thighs braised under pressure in soy sauce, vinegar, garlic and peppercorns, then reduced to a glossy, savoury glaze.',
    meta: 'Instant Pot chicken adobo with soy, vinegar and garlic, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['instant pot chicken adobo', 'filipino chicken adobo', 'pressure cooker chicken adobo', 'chicken adobo recipe', 'soy vinegar chicken'],
    why: 'Let the vinegar cook off before you stir. This is the single most useful instruction for adobo, because the sharp smell of raw vinegar fades after a few minutes of simmering, and the flavour softens into something rounder and sweeter.\n\nAdobo is the national dish of the Philippines in all but name, and every household has its own balance of soy sauce, vinegar, garlic and bay leaf. In a pressure cooker, the chicken goes in raw, with the marinade, and cooks in 10 minutes. The result is deeply flavoured meat that falls from the bone.\n\n**Brown the chicken skin first** on the sauté setting, then pour off most of the fat. The browning adds a savoury depth, and without it the chicken skin turns pale and rubbery in the sauce.\n\nThe finished sauce is thin, so lift out the chicken and boil the liquid on sauté for 8 minutes until it reduces to a glaze that coats a spoon. Return the chicken, turn it in the glaze, and serve over steamed rice with plenty of sauce.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '1 tbsp vegetable oil',
      '6 garlic cloves, crushed',
      '120 ml soy sauce',
      '120 ml white vinegar',
      '100 ml water',
      '1 tbsp light brown sugar',
      '3 bay leaves',
      '1 tsp black peppercorns'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and brown the chicken, skin side down, for 5 minutes. Turn and cook for 2 minutes more. Pour off most of the fat.',
      'Add the garlic, soy sauce, vinegar, water, sugar, bay leaves and peppercorns. Let the mixture simmer for 3 minutes without stirring.',
      'Seal and cook on high pressure for 10 minutes. Release naturally for 5 minutes.',
      'Lift out the chicken. Select sauté and boil the sauce for 8 minutes until reduced and glossy.',
      'Return the chicken to the pot, turn it in the glaze and serve.'
    ],
    tips: [
      'Do not stir for the first few minutes after adding the vinegar.',
      'Reduce the sauce at the end for a glossy glaze.',
      'Brown the skin for flavour.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Cucumber salad', 'Garlic rice'],
    store: 'Keeps for 4 days in the fridge, and tastes even better the next day.',
    nut: [371, 52, 7, 15, 1, 4, 1990]
  },

  'instant-pot-chicken-cacciatore': {
    d: 'Chicken thighs braised under pressure with peppers, onion, mushrooms and tomato, finished with olives and a splash of red wine.',
    meta: 'Instant Pot chicken cacciatore with peppers, mushrooms and tomato. Four servings, ready in 40 minutes.',
    kw: ['instant pot chicken cacciatore', 'chicken cacciatore recipe', 'pressure cooker cacciatore', 'italian hunter chicken', 'chicken with peppers and tomato'],
    why: 'Cacciatore means hunter in Italian, and the name suggests a stew made with whatever the hunter had to hand. Tomatoes, peppers, onion, herbs and a little wine are the usual core, and the pressure cooker concentrates them in under half an hour.\n\nChicken thighs are the right choice, because they stay juicy under pressure while breast meat turns dry and stringy. Brown them skin side down until the fat has run and the skin is deeply golden. The sauce picks up that flavour from the base of the pot.\n\n**Cook the vegetables on sauté first.** Peppers, onion and mushrooms soften and lose some of their water, which stops the finished sauce from being thin. Deglaze with red wine and let it reduce by half before adding the tomatoes.\n\nUnder pressure the chicken is done in 12 minutes. Open the pot, lift out the thighs, and simmer the sauce on sauté for a few minutes if it needs thickening. Add the olives and basil at the end, so that the flavour of both stays bright.',
    ing: [
      '8 chicken thighs, bone in, about 1 kg',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 onion, sliced',
      '2 peppers, sliced',
      '200 g mushrooms, quartered',
      '4 garlic cloves, crushed',
      '120 ml red wine',
      '400 g tinned chopped tomatoes',
      '1 tbsp tomato purée',
      '1 tsp dried oregano',
      '60 g black olives',
      '1 tbsp fresh basil, torn'
    ],
    st: [
      'Season the chicken with the salt. Set the Instant Pot to sauté and brown the thighs in the oil, skin side down, for 6 minutes. Remove and set aside.',
      'Cook the onion, peppers and mushrooms for 5 minutes. Add the garlic and cook for 1 minute.',
      'Pour in the wine, scrape the base and reduce for 3 minutes. Add the tomatoes, purée and oregano, then return the chicken.',
      'Seal and cook on high pressure for 12 minutes. Release naturally for 8 minutes.',
      'Simmer on sauté for 5 minutes if the sauce is thin. Stir in the olives and basil.'
    ],
    tips: [
      'Brown the skin deeply for flavour.',
      'Reduce the wine before adding the tomatoes.',
      'Add olives and basil after cooking.'
    ],
    pair: ['Polenta', 'Crusty bread', 'Pasta', 'Green salad'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [461, 53, 15, 21, 4, 8, 1060]
  },

  'instant-pot-chicken-fajitas': {
    d: 'Chicken strips, peppers and onions cooked together under pressure with fajita spices and lime, then served in warm tortillas.',
    meta: 'Instant Pot chicken fajitas with peppers and lime, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['instant pot chicken fajitas', 'pressure cooker fajitas', 'chicken fajitas recipe', 'fajita chicken and peppers', 'fajita seasoning chicken'],
    why: 'Chicken, peppers, onions and a pot of spice: four things, and about twenty minutes. Fajitas are normally cooked quickly over high heat on a griddle, so a pressure cooker seems an odd choice, but with a short cooking time and a quick release the vegetables keep a little bite.\n\nSlice everything thinly and evenly, about 1 cm wide, so the vegetables cook at the same speed as the chicken. The spice blend is smoked paprika, cumin, chilli powder, garlic powder and oregano, mixed with salt and sprinkled over the top.\n\n**Cook for no more than 5 minutes under pressure**, then release the pressure at once. A longer time turns the peppers soft and colourless. Chicken breast strips are done in this time, and the quick release stops the meat tightening any further.\n\nFinish with a squeeze of lime juice, then drain off any extra liquid with a slotted spoon so the tortillas do not turn soggy. Serve with soured cream, guacamole and salsa, and let everyone assemble their own.',
    ing: [
      '600 g chicken breast, sliced into strips',
      '2 peppers, sliced',
      '1 red onion, sliced',
      '2 tbsp olive oil',
      '2 tsp smoked paprika',
      '2 tsp ground cumin',
      '1 tsp chilli powder',
      '1 tsp garlic powder',
      '1 tsp dried oregano',
      '1 tsp salt',
      '60 ml water',
      '2 limes',
      '8 flour tortillas'
    ],
    st: [
      'Mix the paprika, cumin, chilli, garlic powder, oregano and salt. Toss with the chicken, peppers, onion and olive oil.',
      'Pour the water into the Instant Pot, then add the chicken mixture without stirring.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Stir in the juice of the limes. Lift out the filling with a slotted spoon.',
      'Warm the tortillas and serve the fajita filling in them.'
    ],
    tips: [
      'Release the pressure quickly to keep the peppers firm.',
      'Drain off excess liquid before serving.',
      'Slice everything to the same thickness.'
    ],
    pair: ['Guacamole', 'Soured cream', 'Salsa', 'Spanish rice'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot pan.',
    nut: [596, 44, 60, 20, 6, 8, 1320]
  },

  'instant-pot-chicken-tikka-masala': {
    d: 'Spiced yogurt-marinated chicken pieces in a creamy tomato sauce, cooked under pressure and finished with cream and fenugreek.',
    meta: 'Instant Pot chicken tikka masala in a creamy tomato sauce. Four servings, ready in 55 minutes.',
    kw: ['instant pot chicken tikka masala', 'chicken tikka masala', 'pressure cooker tikka masala', 'creamy tikka masala', 'tikka masala sauce'],
    why: 'It looks like a restaurant curry and cooks like a weeknight stew, which is the main attraction of the Instant Pot version. Chicken tikka masala is generally credited to British Indian cooking, and the sauce at its heart is tomato, spices and cream, mellow rather than hot.\n\nMarinate the chicken in yogurt, garam masala, turmeric, cumin and lemon juice. Even 20 minutes helps, and an hour is better. The yogurt tenderises the surface and carries the spices into the meat. Brown the chicken first in the pot to add a hint of char, which gives the dish its tikka character.\n\n**Cook the sauce base before adding the chicken back.** Onions, garlic, ginger and tomato purée go in first, then passata, and the whole lot is pressure cooked for just 6 minutes. A long cook breaks the cream and dulls the spices.\n\nStir in the cream at the end with the sauté function off, then add a spoonful of dried fenugreek leaves crushed between the fingers. That sweet, slightly bitter scent is what many people associate with a good tikka masala.',
    ing: [
      '600 g chicken thighs, boneless, cut into chunks',
      '100 g plain yogurt',
      '2 tsp garam masala',
      '1 tsp turmeric',
      '1 tsp ground cumin',
      '1 tbsp lemon juice',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tbsp tomato purée',
      '400 g passata',
      '120 ml double cream',
      '1 tsp dried fenugreek leaves'
    ],
    st: [
      'Mix the chicken with the yogurt, 1 tsp garam masala, turmeric, cumin, lemon juice and salt. Marinate for at least 20 minutes.',
      'Set the Instant Pot to sauté. Brown the chicken in the oil for 4 minutes and remove it.',
      'Cook the onion for 5 minutes. Add the garlic, ginger and tomato purée, then stir for 1 minute. Add the passata and remaining garam masala.',
      'Return the chicken. Seal and cook on high pressure for 6 minutes. Release naturally for 5 minutes.',
      'Stir in the cream and crush the fenugreek leaves over the top. Simmer for 2 minutes and serve.'
    ],
    tips: [
      'Add the cream after pressure cooking, never before.',
      'Marinate for longer for more flavour.',
      'Crush the fenugreek between your fingers to release its scent.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Poppadoms', 'Cucumber raita'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [417, 35, 13, 25, 3, 8, 850]
  },

  'instant-pot-corned-beef-and-cabbage': {
    d: 'A salt beef brisket cooked under pressure with onions, potatoes, carrots and cabbage, sliced across the grain and served with mustard.',
    meta: 'Instant Pot corned beef and cabbage with potatoes and carrots. Six servings, ready in 1 hour 45 minutes.',
    kw: ['instant pot corned beef and cabbage', 'pressure cooker corned beef', 'corned beef and cabbage', 'st patricks day corned beef', 'corned beef brisket'],
    why: 'Most home versions come out stringy and salty, and the fix is to rinse the brisket and slice it correctly. The brine used for a corned beef is strong, so a quick rinse under cold water removes the excess from the surface and leaves the meat seasoned rather than harsh.\n\nUse a 1.5 kg corned beef brisket, flat cut if you can find it, with its spice packet. Put it on a trivet or a bed of onions in the pot with water and the spices. Under pressure it takes about 75 minutes to soften through. Anything less and the connective tissue stays tough.\n\n**Add the vegetables afterwards.** Cabbage, carrots and potatoes cooked for 75 minutes would melt away. Lift the beef out to rest, then cook the vegetables in the same liquid for 4 minutes on high pressure, with a quick release.\n\nThe cut matters at the table. Find the direction of the grain, which runs in long lines, and carve across it into thin slices. Served with mustard and the cooking liquid spooned over, it is a plate of hearty, salty comfort.',
    ing: [
      '1.5 kg corned beef brisket, with spice packet',
      '1 onion, quartered',
      '4 garlic cloves, smashed',
      '1 litre water',
      '2 bay leaves',
      '600 g potatoes, halved',
      '4 carrots, cut into chunks',
      '1 small green cabbage, cut into 6 wedges',
      '4 tbsp wholegrain mustard, to serve'
    ],
    st: [
      'Rinse the brisket under cold water. Place the onion and garlic in the Instant Pot, then the beef fat side up. Add the spice packet, bay leaves and water.',
      'Seal and cook on high pressure for 75 minutes. Release naturally for 15 minutes.',
      'Lift the beef onto a board and cover with foil. Add the potatoes and carrots to the liquid, seal and cook on high pressure for 3 minutes. Quick release.',
      'Add the cabbage, seal and cook on high pressure for 1 minute. Quick release.',
      'Slice the beef across the grain. Serve with the vegetables, some of the cooking liquid and the mustard.'
    ],
    tips: [
      'Rinse the brisket first to remove excess brine.',
      'Slice thinly against the grain.',
      'Cook the vegetables separately so they hold their shape.'
    ],
    pair: ['Wholegrain mustard', 'Soda bread', 'Horseradish', 'Butter'],
    store: 'Keeps for 4 days in the fridge in its liquid. Slice before storing.',
    nut: [646, 54, 31, 34, 7, 7, 410]
  },

  'instant-pot-fajita-pasta': {
    d: 'Penne cooked in the pot with chicken, peppers, onion and fajita spices in a creamy tomato sauce, finished with melted cheese.',
    meta: 'Instant Pot fajita pasta with chicken, peppers and melted cheese. Four servings, ready in 20 minutes.',
    kw: ['instant pot fajita pasta', 'chicken fajita pasta', 'one pot fajita pasta', 'pressure cooker pasta', 'tex mex pasta'],
    why: 'Keep the pasta under the liquid. That is the rule for every pressure cooker pasta dish, and it matters here too. Penne sits in the broth and cooks in 5 minutes, but any pieces poking above the surface stay hard.\n\nThe flavour comes from fajita spices rubbed onto sliced chicken breast, along with peppers and onion. Smoked paprika, cumin, garlic powder and chilli give a smoky warmth without being hot. A tin of chopped tomatoes and a measure of stock become the sauce as the pasta absorbs part of the liquid.\n\n**Do not stir after layering.** Put the chicken and vegetables in first, then the pasta, then the liquid, and press the pasta gently under the surface. Stirring pushes pasta to the base, where it sticks and sets off the burn warning.\n\nOnce the pressure is released, stir hard for a minute, which thickens the sauce with starch from the pasta. Add the cream cheese and cheddar off the heat, so they melt into a smooth, creamy coating, and top with coriander and a squeeze of lime.',
    ing: [
      '400 g chicken breast, sliced into thin strips',
      '2 tsp smoked paprika',
      '1 tsp ground cumin',
      '1 tsp garlic powder',
      '1 tsp chilli powder',
      '1 tsp salt',
      '1 tbsp olive oil',
      '1 onion, sliced',
      '2 peppers, sliced',
      '300 g penne',
      '400 g tinned chopped tomatoes',
      '400 ml chicken stock',
      '60 g cream cheese',
      '100 g cheddar, grated',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Toss the chicken with the paprika, cumin, garlic powder, chilli and salt. Set the Instant Pot to sauté and brown the chicken in the oil for 4 minutes.',
      'Add the onion and peppers. Spread the penne over the top, pour in the tomatoes and stock, and push the pasta under the liquid. Do not stir.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Stir well for 1 minute. Add the cream cheese and cheddar and stir until melted.',
      'Scatter with coriander and serve.'
    ],
    tips: [
      'Press the pasta under the liquid but do not stir it.',
      'Stir hard after cooking to thicken the sauce.',
      'Add the cheese off the heat.'
    ],
    pair: ['Lime wedges', 'Green salad', 'Guacamole', 'Tortilla chips'],
    store: 'Keeps for 3 days in the fridge. Add a splash of water when reheating.',
    nut: [654, 43, 71, 22, 6, 10, 1200]
  },

  'instant-pot-general-tso-chicken': {
    d: 'Bite-sized chicken pieces cooked under pressure in a sweet, tangy soy and chilli sauce, thickened and served with broccoli.',
    meta: 'Instant Pot General Tso chicken in a sticky sweet and spicy sauce. Four servings, ready in 30 minutes.',
    kw: ['instant pot general tso chicken', 'general tso chicken', 'pressure cooker general tso', 'sweet and spicy chicken', 'chinese takeaway chicken'],
    why: 'Why does takeaway General Tso chicken taste so different from most home versions? It is the sauce, a balance of salty, sweet, sour and hot that is thick enough to cling to each piece. This pressure cooker version builds that sauce in the pot, and skips the deep frying.\n\nThe chicken is cut into 3 cm pieces and tossed in cornflour before browning. That thin coat helps it hold the sauce and gives the surface a velvety texture. Thigh meat is richer and more forgiving than breast, and holds up well to the sauce.\n\n**Thicken at the end, with the lid off.** The sauce of soy sauce, rice vinegar, sugar, hoisin, garlic, ginger and dried chilli is thin when it is pressure cooked. A slurry of cornflour and cold water stirred into the simmering sauce turns it glossy in about a minute.\n\nServe the chicken over steamed rice with steamed broccoli, and add the sesame seeds and spring onions at the last second so that they keep their crunch.',
    ing: [
      '600 g chicken thighs, boneless, cut into 3 cm pieces',
      '2 tbsp cornflour, plus 1 tbsp for the sauce',
      '1 tbsp vegetable oil',
      '4 tbsp soy sauce',
      '3 tbsp rice vinegar',
      '3 tbsp light brown sugar',
      '2 tbsp hoisin sauce',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '4 dried red chillies',
      '120 ml chicken stock',
      '2 spring onions, sliced',
      '1 tsp sesame seeds'
    ],
    st: [
      'Toss the chicken in 2 tbsp cornflour. Set the Instant Pot to sauté and brown the chicken in the oil for 4 minutes.',
      'Add the soy sauce, vinegar, sugar, hoisin, garlic, ginger, chillies and stock and stir, scraping the base.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Select sauté. Mix 1 tbsp cornflour with 2 tbsp cold water, stir it in and simmer for 1 minute until glossy.',
      'Scatter with spring onions and sesame seeds and serve.'
    ],
    tips: [
      'Coat the chicken in cornflour for the glossy texture.',
      'Thicken the sauce only after releasing the pressure.',
      'Remove the chillies if you want less heat.'
    ],
    pair: ['Steamed rice', 'Steamed broccoli', 'Egg fried rice', 'Pak choi'],
    store: 'Keeps for 3 days in the fridge. Reheat in a pan with a splash of water.',
    nut: [311, 32, 21, 11, 1, 13, 1260]
  },

  'instant-pot-goulash': {
    d: 'Beef, onions and a generous amount of paprika cooked under pressure with peppers and potatoes into a thick, brick-red Hungarian stew.',
    meta: 'Instant Pot goulash with beef, paprika and potatoes. Six servings, ready in 35 minutes.',
    kw: ['instant pot goulash', 'hungarian goulash', 'pressure cooker goulash', 'beef goulash with paprika', 'goulash stew'],
    why: 'Beef, onions, paprika, potatoes: four things you already own, and the stew they become is one of the great one-pot dishes of central Europe. Goulash comes from the Hungarian word for herdsman, and the paprika is the point, in quantity, not as a garnish.\n\nUse sweet Hungarian paprika if you can find it, and stir it into the onions off the heat. Paprika scorches in seconds and turns bitter, so add it to the warm fat, stir for 20 seconds and add the liquid at once. A tablespoon of tomato purée and a pepper add sweetness and body.\n\n**Cook the onions for longer than feels reasonable**, about 10 minutes. They melt into the stew and give it the thick body that distinguishes goulash from a thin soup. A pale, hurried onion gives a thin, sharp result.\n\nPressure cooking tenderises the beef chuck in 25 minutes. Add the potatoes for the last 4 minutes using a second short cook, or leave them in the pot for a natural release, and they are soft but whole. Serve with a spoon of soured cream.',
    ing: [
      '800 g beef chuck, cut into 3 cm cubes',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '3 onions, chopped',
      '3 garlic cloves, crushed',
      '3 tbsp sweet paprika',
      '1 tsp caraway seeds',
      '2 tbsp tomato purée',
      '1 red pepper, diced',
      '500 ml beef stock',
      '500 g potatoes, cut into 3 cm chunks',
      '1 bay leaf',
      '4 tbsp soured cream'
    ],
    st: [
      'Season the beef with the salt. Set the Instant Pot to sauté and brown the beef in the oil in 2 batches. Remove it.',
      'Cook the onions for 10 minutes until very soft. Add the garlic, paprika and caraway and stir for 20 seconds. Add the tomato purée and pepper.',
      'Pour in the stock, scraping the base, and add the bay leaf and beef.',
      'Seal and cook on high pressure for 25 minutes. Release naturally for 10 minutes.',
      'Add the potatoes, seal and cook for 4 minutes with a quick release. Serve with the soured cream.'
    ],
    tips: [
      'Add the paprika to warm, not hot, fat.',
      'Cook the onions until completely soft.',
      'Add the potatoes after the beef is tender.'
    ],
    pair: ['Soured cream', 'Rye bread', 'Egg noodles', 'Pickles'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [445, 30, 25, 25, 5, 5, 770]
  },

  'instant-pot-gumbo': {
    d: 'Chicken thighs and smoked sausage cooked under pressure in a dark roux base with okra, peppers and celery, served over rice.',
    meta: 'Instant Pot gumbo with chicken, sausage and a dark roux. Six servings, ready in 55 minutes.',
    kw: ['instant pot gumbo', 'chicken and sausage gumbo', 'pressure cooker gumbo', 'louisiana gumbo', 'gumbo with okra'],
    why: 'Gumbo comes from the Louisiana kitchens where West African, French and Native American cooking met, and the word is often linked to the West African word for okra. A pot of gumbo is judged by its roux, a cooked mix of flour and fat, stirred until it turns the colour of dark chocolate.\n\nThe roux is the one part of this recipe that cannot be hurried or walked away from. Make it on the sauté setting, stirring constantly with a wooden spoon, for about 15 minutes. It goes from pale, to peanut butter, to copper, and then to a deep brown. Scorched flecks mean you must start again.\n\n**Add the chopped onion, pepper and celery to the roux straight away.** The cool vegetables stop the roux from cooking further and give a base known as the trinity. Then add stock slowly, stirring, so that the roux dissolves without lumps.\n\nUnder pressure the chicken is tender in 10 minutes. Stir in the sliced okra after the pressure has gone, and simmer for a few minutes so that it thickens the gumbo without turning slimy.',
    ing: [
      '60 ml vegetable oil',
      '60 g plain flour',
      '1 onion, chopped',
      '1 green pepper, chopped',
      '2 celery sticks, chopped',
      '4 garlic cloves, crushed',
      '600 g chicken thighs, boneless, cut into chunks',
      '250 g smoked sausage, sliced',
      '1 litre chicken stock',
      '2 tsp Cajun seasoning',
      '1 tsp dried thyme',
      '2 bay leaves',
      '200 g okra, sliced',
      '300 g cooked rice, to serve'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and whisk in the flour. Stir constantly for 15 minutes until the roux is dark brown.',
      'Add the onion, pepper, celery and garlic and stir for 4 minutes. Pour in the stock gradually, stirring.',
      'Add the chicken, sausage, Cajun seasoning, thyme and bay leaves.',
      'Seal and cook on high pressure for 10 minutes. Release naturally for 10 minutes.',
      'Stir in the okra and simmer on sauté for 5 minutes. Serve over the rice.'
    ],
    tips: [
      'Stir the roux constantly: it can burn in seconds.',
      'Add the okra at the end to avoid sliminess.',
      'Add the stock gradually to prevent lumps.'
    ],
    pair: ['Steamed rice', 'Crusty bread', 'Hot sauce', 'Potato salad'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [473, 31, 31, 25, 3, 3, 990]
  },

  'instant-pot-korean-beef': {
    d: 'Thin slices of beef cooked under pressure in a gochujang, soy and sesame sauce, served with rice and sliced spring onions.',
    meta: 'Instant Pot Korean beef in a sweet, spicy sauce with sesame. Four servings, ready in 35 minutes.',
    kw: ['instant pot korean beef', 'korean beef bowl', 'pressure cooker korean beef', 'korean beef bulgogi style', 'gochujang beef'],
    why: 'This is what to make in the first cold week, when a quick bowl of rice and sweet, savoury beef feels like the right dinner. The sauce is built from soy sauce, brown sugar, gochujang, sesame oil, garlic and ginger, and it turns the beef a deep mahogany.\n\nGochujang is the Korean red chilli paste, fermented and slightly sweet, and it has a deep, round heat you cannot replace with plain chilli sauce. Use the amount here for a mild result, and increase it by a spoonful if you want more fire. The sugar balances it, and a little pear or apple juice would tenderise the meat further if you have one.\n\n**Slice the beef very thinly against the grain.** Partly freezing the steak for 30 minutes makes it firm enough to cut in thin strips. Thin strips are tender in just 6 minutes under pressure.\n\nStir the cornflour in at the end for a glossy sauce. Serve the beef over rice with quick-pickled cucumber, sesame seeds and sliced spring onions for freshness.',
    ing: [
      '600 g beef sirloin, sliced thinly across the grain',
      '4 tbsp soy sauce',
      '3 tbsp light brown sugar',
      '2 tbsp gochujang',
      '1 tbsp sesame oil',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '120 ml beef stock',
      '1 tbsp vegetable oil',
      '1 tbsp cornflour',
      '3 spring onions, sliced',
      '1 tsp sesame seeds',
      '300 g cooked rice, to serve'
    ],
    st: [
      'Mix the soy sauce, sugar, gochujang, sesame oil, garlic, ginger and stock in a bowl.',
      'Set the Instant Pot to sauté. Heat the vegetable oil and brown the beef in 2 batches for 2 minutes each.',
      'Return all of the beef to the pot and pour over the sauce.',
      'Seal and cook on high pressure for 6 minutes. Release the pressure quickly.',
      'Mix the cornflour with 2 tbsp cold water and stir in on sauté for 1 minute. Serve over the rice with the spring onions and sesame seeds.'
    ],
    tips: [
      'Partly freeze the steak to slice it thinly.',
      'Taste the sauce before cooking and adjust the heat.',
      'Add the cornflour only after the pressure is released.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Cucumber pickle', 'Sesame greens'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of water.',
    nut: [484, 36, 40, 20, 1, 12, 1320]
  },

  'instant-pot-lamb-shanks': {
    d: 'Lamb shanks browned and cooked under pressure with red wine, garlic, rosemary and tomato until the meat slides off the bone.',
    meta: 'Instant Pot lamb shanks in red wine and rosemary, tender after 60 minutes under pressure. Four servings.',
    kw: ['instant pot lamb shanks', 'pressure cooker lamb shanks', 'braised lamb shanks', 'red wine lamb shanks', 'lamb shanks with rosemary'],
    why: 'This is what to make in the first cold week, when the oven feels like a treat but you do not have four hours to give it. Lamb shanks are among the toughest cuts on the animal, which is exactly why they turn so rich and sticky once they have been braised.\n\nBrown the shanks all over on the sauté setting, a few minutes on each side, until a dark crust forms. The browning is where the roasted flavour comes from, and the fat that runs out is the base for the vegetables. Use two shanks per pair of people, or one each if they are large.\n\n**Stand the shanks upright** around the edge of the pot if they do not fit flat. The bone should be pointing upwards so the meat stays in the liquid and the marrow keeps the sauce rich.\n\nAfter 60 minutes under pressure the meat comes away at the touch of a spoon. Lift out the shanks, skim the fat from the surface of the sauce, and simmer it on sauté until it thickens enough to coat the spoon. Serve over mashed potatoes or soft polenta.',
    ing: [
      '4 lamb shanks, about 1.6 kg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 carrots, chopped',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '200 ml red wine',
      '300 ml beef stock',
      '3 sprigs rosemary',
      '2 bay leaves'
    ],
    st: [
      'Season the shanks with the salt and pepper. Set the Instant Pot to sauté and brown the shanks in the oil for 4 minutes per side. Remove them.',
      'Cook the onion and carrots for 5 minutes. Add the garlic and tomato purée and stir for 1 minute.',
      'Pour in the wine, scrape the base and reduce for 4 minutes. Add the stock, rosemary and bay leaves.',
      'Return the shanks and seal. Cook on high pressure for 60 minutes. Release naturally for 15 minutes.',
      'Lift out the shanks. Skim the fat, then reduce the sauce on sauté for 10 minutes. Spoon over the shanks.'
    ],
    tips: [
      'Brown the shanks well: this builds the flavour.',
      'Skim the fat before reducing the sauce.',
      'The meat is ready when it falls from the bone at a touch.'
    ],
    pair: ['Mashed potatoes', 'Creamy polenta', 'Green beans', 'Roast carrots'],
    store: 'Keeps for 4 days in the fridge in the sauce, or 3 months in the freezer.',
    nut: [775, 78, 10, 47, 2, 3, 1150]
  }
};
