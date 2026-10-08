'use strict';

/**
 * Volume forty-four — beef, pork and lamb, second part.
 *
 * A short rib ragu, tagliata, lo mein and pot roast, then pork: carnitas,
 * chops, loin, medallions, vindaloo, belly bao, larb, lo mein, meatball
 * soup, stuffed peppers and a pork pie, and finally lamb shawarma and
 * souvlaki. Times are the recipe's own; ovens differ, so each method says
 * when to check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'beef-short-rib-ragu': {
    d: 'Beef short ribs braised for three hours in red wine and tomatoes, shredded off the bone and tossed through wide pasta.',
    meta: 'Beef short rib ragu: short ribs braised in red wine and tomato, shredded and tossed with pasta. Six servings, cooked for 3 hours.',
    kw: ['beef short rib ragu', 'short rib ragu with pappardelle', 'slow braised short rib ragu', 'italian beef short rib ragu', 'short rib ragu pasta'],
    why: 'Short ribs, red wine, tomatoes, onion and time: five things that turn into one of the richest pasta sauces there is. The ribs bring bone and fat, and both end up in the sauce.\n\nBrown the ribs hard on every side until they are the colour of dark chocolate. Do not hurry it, because the browned crust is where the flavour comes from. Soften the onion, carrot and celery in the beef fat, add the tomato purée and cook it for 2 minutes, then pour in the wine and let it reduce by half. **Skim the fat at the end.** Short ribs are fatty, and the sauce is better for it being lifted off.\n\nAdd the tomatoes and stock, return the ribs, cover and cook at 160°C for 3 hours. If your oven runs hot, check at 2 hours 30 minutes. The meat should fall off the bone when pressed with a spoon.\n\nShred the meat, discard the bones and stir the shreds back into the sauce.',
    ing: [
      '1.5 kg beef short ribs',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '1 carrot, about 100 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '3 cloves garlic, crushed',
      '2 tbsp tomato purée',
      '250 ml red wine',
      '400 g tinned chopped tomatoes',
      '300 ml beef stock',
      '2 sprigs rosemary, about 4 g',
      '400 g pappardelle',
      '40 g parmesan, grated'
    ],
    st: [
      'Heat the oven to 160°C. Season the ribs with the salt and brown in the oil in batches for 12 minutes, until very dark. Set aside.',
      'Soften the onion, carrot and celery in the same pot for 8 minutes, then add the garlic and tomato purée for 2 minutes.',
      'Pour in the wine and boil until reduced by half. Add the tomatoes, stock and rosemary and return the ribs.',
      'Cover and cook for 3 hours until the meat falls from the bone.',
      'Lift out the ribs, shred the meat and skim the fat from the sauce. Return the meat to the sauce.',
      'Boil the pappardelle for 9 minutes, drain, toss through the ragu and serve with the parmesan.'
    ],
    tips: [
      'Brown the ribs until very dark.',
      'Reduce the wine by half.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Skim the fat before serving.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted fennel', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. The sauce is better the next day. Reheat gently.',
    nut: [1062, 48, 60, 70, 4, 6, 850]
  },

  'beef-tagliata': {
    d: 'Seared sirloin steak sliced thin and laid over rocket with shaved parmesan, olive oil and balsamic vinegar.',
    meta: 'Beef tagliata: seared sirloin sliced thin over rocket with parmesan, olive oil and balsamic. Four servings, cooked for 10 minutes.',
    kw: ['beef tagliata', 'steak tagliata', 'italian beef tagliata', 'tagliata with rocket and parmesan', 'sliced steak tagliata'],
    why: 'Steak, rocket, parmesan, oil and vinegar: five things and about twenty minutes. Nothing hides in a dish this simple, so the steak has to be right.\n\nTake the steaks out of the fridge 30 minutes before cooking so they are not cold in the middle. Dry them well and season with salt and pepper just before they hit the pan. Cook in a very hot pan for 3 to 4 minutes a side for medium-rare, longer for more. **Rest the steak for 5 minutes before slicing.** The juices settle, and the slices stay pink instead of bleeding onto the board.\n\nSlice across the grain into strips about 1 cm thick and fan them over the rocket. The heat of the meat wilts the leaves slightly. Scatter over shavings of parmesan, then add the oil, balsamic and a squeeze of lemon.\n\nServe at once with roast potatoes or bread. Sirloin is the usual choice, though rump or ribeye work if cooked a minute longer.',
    ing: [
      '600 g sirloin steak, about 3 cm thick',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '100 g rocket',
      '50 g parmesan, shaved',
      '2 tbsp extra virgin olive oil',
      '1 tbsp balsamic vinegar',
      '1/2 lemon, juiced'
    ],
    st: [
      'Season the steak with the salt and pepper and sear in the oil in a very hot pan for 3 to 4 minutes a side.',
      'Rest on a board for 5 minutes, then slice across the grain into 1 cm strips.',
      'Pile the rocket on a platter, fan the steak over it and scatter with the parmesan.',
      'Dress with the extra virgin oil, balsamic and lemon juice and serve at once.'
    ],
    tips: [
      'Bring the steak to room temperature first.',
      'Use a very hot pan.',
      'Rest before slicing.',
      'Slice across the grain.'
    ],
    pair: ['Roast potatoes', 'Crusty bread', 'Cherry tomatoes', 'Red wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; eat the slices cold in a sandwich.',
    nut: [390, 37, 2, 26, 1, 1, 570]
  },

  'beef-lo-mein': {
    d: 'Egg noodles, sliced beef, cabbage and carrots tossed in a soy and oyster sauce, with spring onions and sesame oil.',
    meta: 'Beef lo mein: egg noodles, sliced beef, cabbage and carrots in a soy and oyster sauce. Four servings, cooked for 12 minutes.',
    kw: ['beef lo mein', 'chinese beef lo mein', 'beef lo mein noodles', 'beef lo mein with vegetables', 'homemade beef lo mein'],
    why: 'The first sign it is going well is the smell: sesame oil and garlic hitting a very hot wok, sharp and nutty within seconds. That is the cue to move fast, because lo mein is finished before most people have laid the table.\n\nLo mein noodles are boiled first and tossed in the sauce at the end, unlike chow mein, which is fried until crisp. Boil the noodles for 1 minute under the packet time and rinse them. They finish cooking in the wok. **Do not cook the noodles fully first.** They turn soft and break up when tossed.\n\nSear the beef in a hot wok for 90 seconds and set it aside. Fry the carrots and cabbage for 3 minutes, add the garlic, then the noodles and sauce, and toss for 2 minutes.\n\nReturn the beef, add the spring onions and the sesame oil, and serve at once. Fresh egg noodles from the chilled aisle need only 2 minutes in boiling water.',
    ing: [
      '300 g egg noodles',
      '300 g beef sirloin, thinly sliced',
      '2 tbsp vegetable oil',
      '2 carrots, about 200 g, julienned',
      '200 g white cabbage, shredded',
      '3 cloves garlic, sliced',
      '3 tbsp soy sauce',
      '2 tbsp oyster sauce',
      '1 tsp sugar',
      '3 spring onions, about 45 g, sliced',
      '1 tsp sesame oil'
    ],
    st: [
      'Boil the noodles for 3 minutes, 1 minute under the packet time. Drain and rinse.',
      'Heat half the oil in a wok until smoking and sear the beef for 90 seconds. Set aside.',
      'Add the rest of the oil and stir-fry the carrots and cabbage for 3 minutes, then the garlic for 30 seconds.',
      'Add the noodles, soy sauce, oyster sauce and sugar and toss for 2 minutes.',
      'Return the beef, add the spring onions and sesame oil and toss for 30 seconds.'
    ],
    tips: [
      'Undercook the noodles.',
      'Keep the wok very hot.',
      'Have everything ready first.',
      'Sear the beef briefly so that it stays tender.'
    ],
    pair: ['Chilli oil', 'Cucumber salad', 'Spring rolls', 'Steamed dumplings'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan with a splash of water.',
    nut: [533, 29, 66, 17, 5, 8, 960]
  },

  'beef-pot-roast-with-gravy': {
    d: 'A chuck roast braised for three hours on a bed of onions, carrots and potatoes, with the cooking juices made into gravy.',
    meta: 'Beef pot roast with gravy: chuck roast braised on onions, carrots and potatoes, with a rich gravy. Six servings, baked for 3 hours.',
    kw: ['beef pot roast with gravy', 'classic beef pot roast', 'oven beef pot roast with vegetables', 'beef chuck pot roast', 'sunday beef pot roast'],
    why: 'It looks like a roast and cooks like a stew, which is why it asks only that you wait. A chuck roast is a hard-working, well-marbled cut that only gives up its tenderness after hours in moist heat.\n\nBrown the beef on every side for about 10 minutes until it is deep brown, and take the time to do it. The crust is the flavour of the gravy later. Set it on the onions in a deep pot and add the stock, tomato purée and thyme. Cover tightly, because steam does the work. **Do not open the lid in the first 2 hours.** Every peek lets out the heat and slows the cooking.\n\nCook at 160°C for 3 hours, adding the carrots and potatoes for the last 60 minutes so that they hold their shape. If your oven runs hot, check at 2 hours 30 minutes.\n\nLift out the meat and vegetables, thicken the juices with the cornflour and serve the gravy over everything.',
    ing: [
      '1.5 kg beef chuck roast',
      '2 tbsp vegetable oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 onions, about 300 g, sliced',
      '400 ml beef stock',
      '2 tbsp tomato purée',
      '4 sprigs thyme, about 5 g',
      '4 carrots, about 400 g, cut into chunks',
      '600 g potatoes, halved',
      '1 tbsp cornflour',
      '2 tbsp water'
    ],
    st: [
      'Heat the oven to 160°C. Season the beef with the salt and pepper and brown it in the oil on all sides for 10 minutes.',
      'Spread the onions in a deep pot, set the beef on top and add the stock, tomato purée and thyme. Cover tightly.',
      'Cook for 2 hours, then add the carrots and potatoes and cook for 60 minutes more until the beef is tender.',
      'Lift out the beef and vegetables. Stir the cornflour into the water, whisk it into the juices and simmer for 3 minutes until thick.',
      'Slice or pull the beef and serve with the vegetables and gravy.'
    ],
    tips: [
      'Brown the beef well.',
      'Keep the lid on.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Add the vegetables late.'
    ],
    pair: ['Green beans', 'Yorkshire pudding', 'Crusty bread', 'Horseradish sauce'],
    store: 'Keeps in the fridge for 4 days. Reheat in the gravy until hot all the way through.',
    nut: [678, 53, 31, 38, 5, 6, 830]
  },

  'pork-carnitas-bowls': {
    d: 'Pork shoulder braised with orange, cumin and oregano until tender, crisped under the grill and served over rice with beans and salsa.',
    meta: 'Pork carnitas bowls: braised pork shoulder crisped under the grill, with rice, beans and salsa. Six servings, cooked for 3 hours.',
    kw: ['pork carnitas bowls', 'pork carnitas rice bowls', 'carnitas bowls with beans and rice', 'slow cooked pork carnitas bowls', 'mexican pork carnitas bowls'],
    why: 'Pork shoulder, orange, spices and salt: four things, and a long wait. Carnitas means little meats, and the dish is pork braised until it falls apart and then crisped at the edges.\n\nCut the shoulder into large chunks, rub with the cumin, oregano and salt and put them in a deep pot with the orange juice, orange halves, onion and garlic. Cover and cook at 160°C for 3 hours. If your oven runs hot, check at 2 hours 30 minutes. The meat should shred with a fork. **Do not trim off all the fat.** It melts into the meat and keeps it moist.\n\nShred the pork, spread it on a tray and spoon over some of the cooking juices. Grill it for 6 to 8 minutes until the edges are crisp and brown, turning once. This step is what separates carnitas from pulled pork.\n\nServe over rice with beans, salsa, avocado and lime.',
    ing: [
      '1.5 kg pork shoulder, cut into large chunks',
      '2 tsp ground cumin',
      '2 tsp dried oregano',
      '2 tsp salt',
      '2 oranges, about 300 g, juiced and halved',
      '1 onion, about 150 g, halved',
      '4 cloves garlic, crushed',
      '300 g cooked rice',
      '240 g drained tinned black beans, warmed',
      '150 g salsa',
      '1 avocado, about 150 g, sliced',
      '1 lime, cut into wedges'
    ],
    st: [
      'Heat the oven to 160°C. Rub the pork with the cumin, oregano and salt and put it in a deep pot with the orange juice, orange halves, onion and garlic.',
      'Cover and cook for 3 hours until the meat shreds easily.',
      'Shred the pork, spread on a tray and spoon over some of the cooking juices.',
      'Grill for 6 to 8 minutes, turning once, until crisp at the edges.',
      'Serve over the rice with the beans, salsa, avocado and lime.'
    ],
    tips: [
      'Leave some fat on the pork.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Do not skip the grill.',
      'Spoon over juices before grilling.'
    ],
    pair: ['Pickled red onions', 'Soured cream', 'Corn tortillas', 'Lime wedges'],
    store: 'Keeps in the fridge for 4 days. Reheat in a hot pan to crisp the edges.',
    nut: [691, 51, 34, 39, 7, 7, 1240]
  },

  'pork-chops-with-mushroom-sauce': {
    d: 'Pan-fried pork chops with a creamy mushroom sauce made in the same pan with garlic, thyme and a splash of stock.',
    meta: 'Pork chops with mushroom sauce: pan-fried chops with a creamy garlic and thyme mushroom sauce. Four servings, cooked for 25 minutes.',
    kw: ['pork chops with mushroom sauce', 'pork chops in creamy mushroom sauce', 'pork chops with mushrooms recipe', 'pork chops with mushroom cream sauce', 'smothered pork chops with mushrooms'],
    why: 'Take the chops out of the pan before they look done. That is the most useful instruction here, because pork chops dry out in the last two minutes and carry on cooking while they rest.\n\nPat the chops dry, season well and sear them in a hot pan for 4 to 5 minutes a side, until they are golden and the middle reads about 63°C or the juices run clear. Move them to a warm plate and cover loosely. **Leave the browned bits in the pan.** They become the sauce.\n\nCook the mushrooms in the same pan for 6 minutes, without stirring for the first 3, until the water has gone and they are brown. Add the garlic and thyme, then the stock, and scrape the pan. Simmer for 3 minutes, stir in the cream and cook for 2 minutes more.\n\nReturn the chops and any juices to the sauce and serve.',
    ing: [
      '4 pork chops, about 800 g',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '250 g mushrooms, sliced',
      '3 cloves garlic, crushed',
      '4 sprigs thyme, about 5 g',
      '150 ml chicken stock',
      '100 ml double cream'
    ],
    st: [
      'Pat the chops dry and season with the salt and pepper. Sear in the oil for 4 to 5 minutes a side until golden and cooked through. Set aside.',
      'Add the mushrooms to the same pan and cook for 6 minutes until brown and dry.',
      'Add the garlic and thyme for 1 minute, then pour in the stock, scraping the pan, and simmer for 3 minutes.',
      'Stir in the cream and simmer for 2 minutes. Return the chops with any juices and warm through for 1 minute.'
    ],
    tips: [
      'Pat the chops dry.',
      'Do not overcook them.',
      'Leave the mushrooms alone at first.',
      'Use the browned bits in the pan.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Buttered noodles', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in the sauce.',
    nut: [471, 43, 5, 31, 1, 2, 830]
  },

  'pork-loin-with-cider-gravy': {
    d: 'A roast pork loin cooked on a bed of onions and apples, with a cider gravy made from the roasting juices.',
    meta: 'Pork loin with cider gravy: roast pork loin on onions and apples, with a cider gravy. Six servings, baked for 75 minutes.',
    kw: ['pork loin with cider gravy', 'roast pork loin with cider', 'pork loin with apples and cider gravy', 'roast pork loin with apple', 'british roast pork loin with cider gravy'],
    why: 'The first sign it is ready is the smell: pork fat and cider caramelising on the base of the tin, a sweet, sharp smell that fills the house. It starts about 45 minutes in and tells you the gravy is building.\n\nSeason the loin well and rub it with oil and mustard. Set it on thick slices of onion and apple, so the meat sits off the base and the fruit roasts in the juices. Roast at 200°C for the first 20 minutes to colour the outside, then lower the oven to 170°C and cook for 55 minutes more. If your oven runs hot, check at 65 minutes in total. **Use a thermometer if you have one.** Pork is done at 70°C in the middle.\n\nRest the meat for 15 minutes under foil. Meanwhile pour the cider and stock into the tin and boil for 8 minutes to a gravy, mashing the apple into it. Strain if you like it smooth.\n\nSlice thick and serve with the gravy.',
    ing: [
      '1.5 kg boneless pork loin',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '1 tbsp Dijon mustard',
      '2 onions, about 300 g, thickly sliced',
      '2 apples, about 300 g, cored and thickly sliced',
      '300 ml dry cider',
      '200 ml chicken stock',
      '1 tbsp plain flour'
    ],
    st: [
      'Heat the oven to 200°C. Rub the pork with the oil, mustard, salt and pepper.',
      'Spread the onions and apples in a roasting tin and set the pork on top. Roast for 20 minutes.',
      'Lower the oven to 170°C and roast for 55 minutes more until the middle reaches 70°C.',
      'Lift the pork onto a board, cover with foil and rest for 15 minutes.',
      'Stir the flour into the tin juices on the hob, pour in the cider and stock and boil for 8 minutes, mashing the apple. Strain if you like.',
      'Slice the pork and serve with the gravy.'
    ],
    tips: [
      'Start hot, then lower the oven.',
      'Rest the pork for 15 minutes.',
      'If your oven runs hot, check at 65 minutes.',
      'Use dry cider for a less sweet gravy.'
    ],
    pair: ['Roast potatoes', 'Braised red cabbage', 'Green beans', 'Apple sauce'],
    store: 'Keeps in the fridge for 3 days. Eat the slices cold or reheat in the gravy.',
    nut: [456, 54, 15, 20, 2, 9, 690]
  },

  'pork-medallions-in-cream-sauce': {
    d: 'Slices of pork fillet seared in butter and finished in a cream, mustard and white wine sauce with shallots.',
    meta: 'Pork medallions in cream sauce: seared pork fillet slices in a cream, mustard and white wine sauce. Four servings, cooked for 20 minutes.',
    kw: ['pork medallions in cream sauce', 'pork medallions with mustard cream sauce', 'french pork medallions in cream', 'creamy pork medallions with white wine', 'pork fillet medallions in cream sauce'],
    why: 'Medallions are simply thick slices of pork fillet, and the name is as grand as the dish gets. The French habit of finishing a seared cut in a pan sauce of wine, cream and mustard is what makes it taste like more than it is.\n\nSlice the fillet into rounds about 2 cm thick and press each flat with your palm so they cook evenly. Season and sear in a hot pan with butter for 3 minutes a side. They should be golden and just cooked through, with no pink. Move them to a plate. **Do not overcook them.** Fillet is lean, and dries out fast.\n\nSoften the shallots in the same pan, add the wine and boil it down by half, then stir in the mustard and cream and simmer for 3 minutes until it coats a spoon.\n\nReturn the pork and its juices to the pan for a minute, add the parsley and serve at once.',
    ing: [
      '600 g pork fillet, sliced into 2 cm rounds',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '30 g butter',
      '2 shallots, about 80 g, finely chopped',
      '100 ml dry white wine',
      '1 tbsp Dijon mustard',
      '150 ml double cream',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Press the pork rounds flat and season with the salt and pepper.',
      'Sear in half the butter in a hot pan for 3 minutes a side until golden and cooked through. Move to a plate.',
      'Add the rest of the butter and soften the shallots for 3 minutes. Pour in the wine and boil until halved.',
      'Stir in the mustard and cream and simmer for 3 minutes until slightly thick.',
      'Return the pork and its juices for 1 minute, add the parsley and serve.'
    ],
    tips: [
      'Slice the pork to an even thickness.',
      'Do not overcook the fillet.',
      'Reduce the wine before adding cream.',
      'Serve at once.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'Buttered noodles', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, reheated gently.',
    nut: [380, 35, 6, 24, 1, 3, 470]
  },

  'pork-vindaloo': {
    d: 'Pork shoulder simmered for 90 minutes in a hot vinegar, chilli and garlic curry sauce until the meat is soft.',
    meta: 'Pork vindaloo: pork shoulder simmered in a hot vinegar, chilli and garlic sauce. Six servings, cooked for 90 minutes.',
    kw: ['pork vindaloo', 'hot pork vindaloo', 'homemade pork vindaloo', 'pork vindaloo curry', 'slow cooked pork vindaloo'],
    why: 'A dish for a table of six that likes its curry hot, and one that is better made a day ahead. Vindaloo comes from the pairing of pork and vinegar, and the sharpness is what sets it apart from other hot curries.\n\nGrind or blend the chillies, garlic, ginger, cumin, mustard seeds and turmeric with the vinegar into a thick paste. Fry the onions slowly for 10 minutes until deep gold, add the paste and fry for 3 minutes, stirring all the time. **Keep stirring while the paste fries.** It catches easily, and burnt vindaloo is bitter.\n\nAdd the pork and brown it for 5 minutes, then the water, cover and simmer gently for 90 minutes until the pork is tender and the sauce is thick and dark. Stir now and then and add a splash of water if it dries.\n\nThis is a hot dish. Use half the chillies for a milder one. Serve with rice and yoghurt.',
    ing: [
      '1 kg pork shoulder, cut into 3 cm cubes',
      '6 dried red chillies, about 12 g',
      '6 cloves garlic',
      '20 g fresh ginger',
      '2 tsp ground cumin',
      '1 tsp mustard seeds',
      '1 tsp ground turmeric',
      '100 ml malt vinegar',
      '2 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '300 ml water',
      '1 tsp sugar',
      '1 tsp salt'
    ],
    st: [
      'Blend the chillies, garlic, ginger, cumin, mustard seeds, turmeric and vinegar into a thick paste.',
      'Fry the onions in the oil for 10 minutes until deep gold. Add the paste and fry for 3 minutes, stirring.',
      'Add the pork and brown for 5 minutes. Pour in the water and add the sugar and salt.',
      'Cover and simmer gently for 90 minutes, stirring now and then, until the pork is tender and the sauce is thick.'
    ],
    tips: [
      'Keep stirring while the paste fries.',
      'Use fewer chillies for a milder curry.',
      'Add water if the sauce catches.',
      'Make it a day ahead if you can.'
    ],
    pair: ['Basmati rice', 'Natural yoghurt', 'Naan bread', 'Cucumber raita'],
    store: 'Keeps in the fridge for 4 days. Reheat until hot all the way through.',
    nut: [408, 31, 8, 28, 1, 3, 510]
  },

  'pork-belly-bao': {
    d: 'Soft steamed buns filled with slow-braised pork belly, pickled cucumber, spring onion and hoisin sauce.',
    meta: 'Pork belly bao: steamed buns filled with braised pork belly, pickled cucumber and hoisin. Eight servings, cooked for 2 hours 30 minutes.',
    kw: ['pork belly bao', 'braised pork belly bao buns', 'homemade pork belly bao', 'steamed pork belly buns', 'pork belly bao with pickled cucumber'],
    why: 'The first sign it is going well is the dough: smooth, springy and doubled in size after an hour. Everything else in a bao is patience, and most of it is the pork.\n\nBraise the belly in soy sauce, sugar, ginger, star anise and water for 2 hours at a bare simmer until it can be cut with a spoon. Cool it in the liquid, which keeps it moist, then slice. **Do not boil the braise hard.** It toughens the meat instead of melting the fat.\n\nMix the flour, yeast, sugar, milk and oil into a dough and knead for 8 minutes. Leave it to prove for 1 hour. Divide into eight, roll into ovals, brush with oil and fold over. Prove for a further 20 minutes. Steam the buns over simmering water for 12 minutes, on squares of baking paper.\n\nFill with the warmed pork, cucumber, spring onion and hoisin.',
    ing: [
      '800 g pork belly, in one piece',
      '100 ml soy sauce',
      '2 tbsp sugar',
      '20 g fresh ginger, sliced',
      '2 star anise, about 2 g',
      '600 ml water',
      '300 g plain flour',
      '7 g dried yeast',
      '1 tbsp sugar, for the dough',
      '150 ml warm milk',
      '1 tbsp vegetable oil',
      '1 cucumber, about 250 g, thinly sliced',
      '2 tbsp rice vinegar',
      '4 spring onions, about 60 g, sliced',
      '4 tbsp hoisin sauce'
    ],
    st: [
      'Put the pork, soy sauce, 2 tbsp of sugar, ginger, star anise and water in a pot, bring to a bare simmer, cover and cook for 2 hours until very tender. Leave to cool in the liquid.',
      'Mix the flour, yeast, 1 tbsp of sugar, milk and oil into a dough and knead for 8 minutes. Leave to prove for 1 hour until doubled.',
      'Divide into eight, roll into ovals, brush with oil and fold over. Leave to prove for 20 minutes.',
      'Toss the cucumber with the rice vinegar. Slice the pork and warm it in a little of the braising liquid.',
      'Steam the buns over simmering water for 12 minutes. Fill with the pork, cucumber, spring onions and hoisin.'
    ],
    tips: [
      'Braise at a bare simmer.',
      'Cool the pork in its liquid.',
      'Steam on squares of baking paper.',
      'Warm the pork before filling.'
    ],
    pair: ['Pickled cucumber', 'Chilli sauce', 'Steamed greens', 'Green tea'],
    store: 'Keeps in the fridge for 3 days. Re-steam the buns for 5 minutes and reheat the pork in its liquid.',
    rest: [60, 'Proving'],
    nut: [728, 15, 41, 56, 2, 9, 920]
  },

  'pork-larb': {
    d: 'Minced pork cooked in a hot pan and tossed with lime juice, fish sauce, toasted rice, chilli and mint.',
    meta: 'Pork larb: minced pork tossed with lime, fish sauce, toasted rice, chilli and mint. Four servings, cooked for 10 minutes.',
    kw: ['pork larb', 'thai pork larb', 'larb moo', 'pork larb with toasted rice', 'minced pork larb with mint'],
    why: 'Larb is a minced meat salad eaten across Thailand and Laos, and it is built on balance: sour, salty, hot and fresh, with a little crunch. Each of the four has to be there or the dish falls flat.\n\nToast the uncooked rice in a dry pan for about 5 minutes until deep gold and smelling nutty, then grind it to a coarse powder. This is what gives larb its character. Cook the pork in a hot pan with a splash of water for 6 minutes, breaking it into fine crumbs, until no pink remains. **Take the pan off the heat before the lime goes in.** Cooked lime juice turns bitter.\n\nToss the pork with the lime juice, fish sauce, chilli flakes and sugar while it is warm, so it absorbs the dressing. Add the shallots, spring onions, mint, coriander and toasted rice at the last moment.\n\nServe with lettuce leaves for scooping and sticky rice.',
    ing: [
      '500 g pork mince',
      '60 ml water',
      '2 tbsp uncooked jasmine rice',
      '3 tbsp lime juice',
      '2 tbsp fish sauce',
      '1 tsp chilli flakes',
      '1 tsp sugar',
      '2 shallots, about 80 g, thinly sliced',
      '3 spring onions, about 45 g, sliced',
      '20 g mint leaves',
      '10 g coriander leaves',
      '100 g lettuce leaves'
    ],
    st: [
      'Toast the uncooked rice in a dry pan for 5 minutes until deep gold, then grind to a coarse powder.',
      'Cook the pork with the water in a hot pan for 6 minutes, breaking it into fine crumbs, until no pink remains. Take off the heat.',
      'Toss the pork with the lime juice, fish sauce, chilli flakes and sugar.',
      'Stir in the shallots, spring onions, mint, coriander and half the ground rice.',
      'Serve in lettuce leaves with the rest of the rice scattered over.'
    ],
    tips: [
      'Toast the rice until nutty.',
      'Take the pan off the heat before adding lime.',
      'Add the herbs last.',
      'Adjust the chilli to taste.'
    ],
    pair: ['Sticky rice', 'Lettuce cups', 'Sliced cucumber', 'Green beans'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, without the herbs.',
    nut: [350, 24, 14, 22, 2, 4, 610]
  },

  'pork-lo-mein': {
    d: 'Egg noodles, sliced pork, cabbage and carrots tossed in a soy and oyster sauce with sesame oil and spring onions.',
    meta: 'Pork lo mein: egg noodles, sliced pork, cabbage and carrots in a soy and oyster sauce. Four servings, cooked for 12 minutes.',
    kw: ['pork lo mein', 'chinese pork lo mein', 'pork lo mein noodles', 'pork lo mein with vegetables', 'homemade pork lo mein'],
    why: 'The first sign it is going well is the sound: pork hitting a very hot wok and sizzling loudly the moment it lands. If it does not sizzle, the wok is not hot enough, and the meat will stew.\n\nSlice the pork fillet very thin, about 3 mm, and toss it with the soy sauce and cornflour. The cornflour keeps it tender in the high heat. Cook it in two batches for 2 minutes each, because pork packed into a wok turns grey and tough. **Heat the wok before adding the oil.** Oil added to a cold wok sticks.\n\nBoil the noodles for a minute less than the packet says and rinse them. Stir-fry the cabbage and carrots for 3 minutes, add the noodles, sauces and pork, and toss for 2 minutes.\n\nFinish with the sesame oil and spring onions and serve in warm bowls. Pork fillet is lean, so slice it thin and cook it briefly to keep it from drying out.',
    ing: [
      '300 g egg noodles',
      '300 g pork fillet, thinly sliced',
      '1 tbsp cornflour',
      '4 tbsp soy sauce',
      '2 tbsp vegetable oil',
      '2 carrots, about 200 g, julienned',
      '200 g white cabbage, shredded',
      '3 cloves garlic, sliced',
      '2 tbsp oyster sauce',
      '3 spring onions, about 45 g, sliced',
      '1 tsp sesame oil'
    ],
    st: [
      'Toss the pork with the cornflour and 1 tbsp of the soy sauce. Boil the noodles for 3 minutes, 1 minute under the packet time, then drain and rinse.',
      'Heat half the oil in a wok until smoking and sear the pork in two batches for 2 minutes each. Set aside.',
      'Add the rest of the oil and stir-fry the carrots and cabbage for 3 minutes, then the garlic for 30 seconds.',
      'Add the noodles, remaining soy sauce, oyster sauce and pork and toss for 2 minutes.',
      'Finish with the spring onions and sesame oil.'
    ],
    tips: [
      'Slice the pork very thin.',
      'Cook the pork in two batches.',
      'Undercook the noodles.',
      'Serve at once.'
    ],
    pair: ['Chilli oil', 'Spring rolls', 'Cucumber salad', 'Steamed dumplings'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan with a splash of water.',
    nut: [505, 30, 67, 13, 5, 7, 1180]
  },

  'pork-meatball-soup': {
    d: 'Small pork and ginger meatballs simmered in a clear chicken broth with pak choi and spring onions.',
    meta: 'Pork meatball soup: small ginger pork meatballs in a clear broth with pak choi. Four servings, cooked for 20 minutes.',
    kw: ['pork meatball soup', 'chinese pork meatball soup', 'pork and ginger meatball soup', 'pork meatball soup with pak choi', 'clear pork meatball soup'],
    why: 'Why do meatballs in soup come out so much softer than fried ones? Because they are poached, and never browned. The gentle heat sets the outside without making it chewy.\n\nMix the pork with the ginger, garlic, soy sauce, cornflour and sesame oil until the mixture is sticky, and stir in one direction for about a minute. This develops the protein and gives a bouncy meatball. Wet your hands and roll walnut-sized balls. **Wet your hands every few balls.** The mixture sticks to dry palms.\n\nBring the stock to a gentle simmer, drop in the meatballs and cook for 8 minutes until they float and are cooked all through. Do not let the stock boil hard, as that breaks them up.\n\nAdd the pak choi for the last 2 minutes and finish with the spring onions and a few drops of sesame oil. A splash of rice vinegar at the table lifts the broth and balances the pork.',
    ing: [
      '400 g pork mince',
      '10 g fresh ginger, grated',
      '2 cloves garlic, crushed',
      '2 tbsp soy sauce',
      '1 tbsp cornflour',
      '1 tsp sesame oil',
      '1.2 litres chicken stock',
      '200 g pak choi, quartered',
      '3 spring onions, about 45 g, sliced',
      '1/2 tsp white pepper'
    ],
    st: [
      'Mix the pork with the ginger, garlic, soy sauce, cornflour, sesame oil and pepper, stirring in one direction for 1 minute until sticky.',
      'Roll into about 24 small balls with wet hands.',
      'Bring the stock to a gentle simmer and drop in the meatballs. Cook for 8 minutes until they float.',
      'Add the pak choi for 2 minutes. Scatter with the spring onions and serve.'
    ],
    tips: [
      'Stir the mix in one direction.',
      'Wet your hands for rolling.',
      'Keep the stock at a gentle simmer.',
      'Add the greens last.'
    ],
    pair: ['Steamed rice', 'Chilli oil', 'Soy dipping sauce', 'Steamed dumplings'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and add fresh greens.',
    nut: [287, 22, 7, 19, 1, 1, 1530]
  },

  'pork-stuffed-peppers': {
    d: 'Peppers filled with seasoned pork mince, rice and tomato, topped with cheese and baked until soft.',
    meta: 'Pork stuffed peppers: peppers filled with pork mince, rice and tomato under cheese. Four servings, baked for 40 minutes.',
    kw: ['pork stuffed peppers', 'baked pork stuffed peppers', 'stuffed peppers with pork and rice', 'pork and rice stuffed peppers', 'cheesy pork stuffed peppers'],
    why: 'Most home versions come out with raw rice or soggy peppers, and the fix is to cook both parts a little first. A pepper and its filling bake at different speeds, so they need a head start.\n\nHalve the peppers through the stalk and scoop out the seeds. Pre-bake them cut-side up for 10 minutes, which softens the walls so that they finish at the same time as the filling. Cook the rice until almost done, because it carries on in the oven. Brown the pork with the onion and garlic, stir in the tomatoes and spices and mix in the rice. **Pack the filling in firmly and mound it.** Loose filling slumps and dries out.\n\nTop with the cheese and bake at 190°C for 30 minutes. If your oven runs hot, check at 25 minutes. The cheese should be golden and the peppers should give when pressed.\n\nRest for 5 minutes before serving.',
    ing: [
      '4 large peppers, about 800 g',
      '300 g pork mince',
      '1 onion, about 150 g, chopped',
      '2 cloves garlic, crushed',
      '1 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '200 g tinned chopped tomatoes',
      '150 g cooked rice',
      '80 g cheddar, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 190°C. Halve the peppers, remove the seeds and bake cut-side up on a tray for 10 minutes.',
      'Brown the pork with the onion in the oil for 8 minutes, then add the garlic, paprika and oregano for 1 minute.',
      'Stir in the tomatoes and salt and simmer for 5 minutes, then mix in the rice.',
      'Pack the filling into the peppers, top with the cheese and bake for 30 minutes until golden.'
    ],
    tips: [
      'Pre-bake the peppers.',
      'Cook the rice most of the way.',
      'Pack the filling firmly.',
      'If your oven runs hot, check at 25 minutes.'
    ],
    pair: ['Green salad', 'Soured cream', 'Crusty bread', 'Roasted potatoes'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [420, 22, 29, 24, 6, 11, 480]
  },

  'pork-pie-with-piccalilli': {
    d: 'A raised hot water crust pie filled with seasoned pork and baked, served in wedges with piccalilli.',
    meta: 'Pork pie with piccalilli: a hot water crust pie filled with seasoned pork, baked for 90 minutes. Eight servings.',
    kw: ['pork pie with piccalilli', 'homemade pork pie', 'hot water crust pork pie', 'british pork pie', 'raised pork pie with piccalilli'],
    why: 'This is what to make in the first cold week, when a pie on the table makes more sense than another salad. It is a project, and one that is done in stages.\n\nHot water crust is made with melted lard and boiling water, and it must be used while it is warm, because it stiffens as it cools and cracks when rolled. Keep the pastry you are not using under a warm, damp cloth. Mould it up the sides of a lined tin and fill it with the seasoned pork, packing it firmly. Cover with the lid, crimp the edge and cut a steam hole. **Do not overfill the pie.** The meat shrinks as it cooks and leaves a gap.\n\nBake at 200°C for 30 minutes, then lower the oven to 160°C and bake for 60 minutes more. If your oven runs hot, check at 80 minutes in total. The crust should be deep golden.\n\nCool before cutting, and serve in wedges with piccalilli.',
    ing: [
      '350 g plain flour',
      '1 tsp salt',
      '100 g lard',
      '150 ml water',
      '800 g pork shoulder, finely diced',
      '150 g bacon, finely chopped',
      '1 tsp ground sage',
      '1 tsp salt, for the filling',
      '1/2 tsp white pepper',
      '1 egg, about 50 g, beaten',
      '120 g piccalilli'
    ],
    st: [
      'Heat the oven to 200°C. Sift the flour and 1 tsp of salt into a bowl. Melt the lard in the water, bring to the boil and stir into the flour to make a dough.',
      'Keep a third of the pastry warm for the lid. Mould the rest up the sides of a lined 20 cm loose-bottomed tin.',
      'Mix the pork with the bacon, sage, salt and pepper and pack into the pastry.',
      'Roll out the lid, set it on top, crimp the edge, cut a steam hole and brush with egg.',
      'Bake for 30 minutes, lower the oven to 160°C and bake for 60 minutes more until deep golden.',
      'Cool completely before cutting and serve with the piccalilli.'
    ],
    tips: [
      'Use the pastry while it is warm.',
      'Pack the meat in firmly.',
      'If your oven runs hot, check at 80 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Piccalilli', 'English mustard', 'Pickled onions', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. Eat it cold or at room temperature.',
    nut: [530, 26, 39, 30, 2, 5, 1060]
  },

  'lamb-shawarma': {
    d: 'Thin lamb strips marinated in warm spices and lemon, roasted until crisp at the edges and served in flatbreads with tahini sauce.',
    meta: 'Lamb shawarma: spiced lamb strips roasted until crisp, in flatbreads with tahini sauce. Four servings, cooked for 20 minutes.',
    kw: ['lamb shawarma', 'homemade lamb shawarma', 'lamb shawarma wraps', 'oven lamb shawarma', 'lamb shawarma with tahini sauce'],
    why: 'Shawarma is meat cooked on a vertical spit and shaved off in thin, crisp-edged slices, and the home version recreates that on a hot tray. The secret is thin strips and a very hot oven.\n\nSlice the lamb as thin as you can and toss it with the cumin, coriander, paprika, cinnamon, garlic, lemon juice and oil. Leave it for about 15 minutes. Spread it in one layer on a tray, with space between the pieces. **Do not pile the meat up.** Piled lamb steams, and spread lamb crisps.\n\nRoast at 240°C for 12 to 15 minutes, turning once, until the edges are browned and crisp and the middle is cooked. If your oven runs hot, check at 10 minutes.\n\nMake the sauce by stirring the tahini, yoghurt, lemon juice and garlic with a little water until pourable. Warm the flatbreads, then fill with the lamb, tomato, onion, pickles and sauce.',
    ing: [
      '600 g lamb leg, thinly sliced',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp smoked paprika',
      '1/2 tsp ground cinnamon',
      '3 cloves garlic, crushed',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      '1 tsp salt',
      '2 tbsp tahini',
      '60 g natural yoghurt',
      '4 flatbreads, about 240 g',
      '2 tomatoes, about 200 g, sliced',
      '1/2 red onion, about 50 g, sliced',
      '40 g pickled cucumbers'
    ],
    st: [
      'Heat the oven to 240°C. Toss the lamb with the cumin, coriander, paprika, cinnamon, garlic, 1 tbsp of the lemon juice, the oil and salt. Leave for 15 minutes.',
      'Spread the lamb in one layer on a large tray and roast for 12 to 15 minutes, turning once, until crisp at the edges.',
      'Stir the tahini, yoghurt and remaining lemon juice with 2 tbsp of water into a pourable sauce.',
      'Warm the flatbreads and fill with the lamb, tomato, onion, pickles and sauce.'
    ],
    tips: [
      'Slice the lamb very thin.',
      'Spread it in one layer.',
      'If your oven runs hot, check at 10 minutes.',
      'Warm the flatbreads before filling.'
    ],
    pair: ['Hummus', 'Tabbouleh', 'Pickled turnips', 'Fries'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan to re-crisp.',
    nut: [547, 38, 38, 27, 4, 4, 1020]
  },

  'lamb-souvlaki': {
    d: 'Cubes of lamb marinated in lemon, oregano and garlic, threaded on skewers and grilled, served in pitta with tzatziki.',
    meta: 'Lamb souvlaki: lamb cubes in lemon, oregano and garlic, grilled on skewers for 12 minutes. Four servings.',
    kw: ['lamb souvlaki', 'greek lamb souvlaki', 'lamb souvlaki skewers', 'grilled lamb souvlaki', 'lamb souvlaki with tzatziki'],
    why: 'Keep the heat high. That is most of the recipe, and the part that gets skipped. Lamb cubes need a fierce grill to char outside while staying pink within.\n\nCut the lamb into 3 cm cubes, all the same size, and trim the thickest fat. Toss with the lemon juice, oil, garlic, oregano and salt and leave for 15 minutes. A short marinade is enough, and a long one in lemon makes the surface of the meat mealy. **Do not push the cubes tight on the skewer.** A little space lets the heat reach every side.\n\nGrill for 12 minutes, turning every 3 minutes, until browned all over and just cooked through. If you use wooden skewers, soak them in water for 20 minutes first.\n\nWarm the pitta, spread with tzatziki, and add the lamb, tomato and onion. A squeeze of lemon finishes it. Boneless leg or shoulder both work, and shoulder stays a little juicier on the grill.',
    ing: [
      '700 g lamb leg, cut into 3 cm cubes',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '3 cloves garlic, crushed',
      '2 tsp dried oregano',
      '1 tsp salt',
      '4 pitta breads, about 280 g',
      '150 g tzatziki',
      '2 tomatoes, about 200 g, sliced',
      '1/2 red onion, about 50 g, sliced'
    ],
    st: [
      'Mix the lemon juice, oil, garlic, oregano and salt and toss with the lamb. Leave for 15 minutes.',
      'Heat the grill to high. Thread the lamb onto skewers, leaving a little space between the cubes.',
      'Grill for 12 minutes, turning every 3 minutes, until browned and just cooked through.',
      'Warm the pitta and serve with the lamb, tzatziki, tomato and onion.'
    ],
    tips: [
      'Cut the cubes the same size.',
      'Keep the marinade short.',
      'Soak wooden skewers for 20 minutes.',
      'Use a high heat.'
    ],
    pair: ['Greek salad', 'Lemon potatoes', 'Tzatziki', 'Warm pitta'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in a pan.',
    nut: [606, 43, 41, 30, 3, 7, 1150]
  }
};
