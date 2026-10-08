'use strict';

/**
 * Volume thirty-five — chili, curry, roasts and pork.
 *
 * Chuck and pork shoulder are the cheap cuts that need time rather than skill,
 * and the pork chops and mince curries here are the quick end of the same
 * idea. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'beef-and-bean-chili': {
    d: 'Beef mince simmered with kidney beans, tinned tomatoes, onion and chili powder until thick. Six servings in 60 minutes from one pot.',
    meta: 'Beef and bean chili: mince, kidney beans and tomatoes simmered with chili powder and cumin. A cheap pot for six in 60 minutes.',
    kw: ['beef and bean chili', 'ground beef chili with beans', 'budget chili for a crowd', 'easy mince and bean chili', 'cheap family chili'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. A chili boiled hard splits the fat and toughens the mince; one that barely bubbles turns thick and glossy.\n\nThe tinned beans do two jobs. They stretch 500 g of mince across six bowls and they thicken the sauce when a few are crushed against the side of the pot.\n\nFry the chili powder and cumin in the pan for a minute before the tomatoes go in. Spices cooked in fat smell warm and round; spices stirred into liquid taste raw and dusty.\n\n**Taste at the end and not before.** Tinned tomatoes and beans vary a lot in salt, and chili sharpens as it reduces. Chili is a flexible pot, and extra beans, grated carrot or a tin of sweetcorn stretch it further without changing the character. Leave it to stand off the heat for a while before serving, and the flavour comes together noticeably.',
    ing: [
      '500 g beef mince',
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '2 x 400 g tins chopped tomatoes',
      '480 g tinned kidney beans, drained and rinsed',
      '1 tbsp tomato purée',
      '200 ml water',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a large pot over medium-high heat. Add the mince and cook for 8 minutes, breaking it up, until browned.',
      'Add the onion and garlic and cook for 4 minutes. Stir in the chili powder and cumin and cook for 1 minute.',
      'Add the tomatoes, beans, purée, water and salt. Bring to a boil, then lower the heat to a bare simmer.',
      'Cook uncovered for 45 minutes, stirring now and then, until thick. Crush a few beans against the side of the pot, taste and adjust the salt.'
    ],
    tips: [
      'Rinse the beans well to remove the tin liquid, which can taste metallic.',
      'If the chili catches on the base, lower the heat and add a splash of water.',
      'Let it stand off the heat for 10 minutes before serving; it thickens as it cools.',
      'Add more chili powder at the end rather than the start if you want it hotter.'
    ],
    pair: ['Rice', 'Baked potatoes', 'Grated cheddar', 'Soured cream', 'Cornbread'],
    store: 'Keeps in the fridge for up to 4 days and tastes better on the second day. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [308, 23, 18, 16, 7, 3, 740]
  },

  'beef-mince-curry': {
    d: 'A mild British-style curry of beef mince, onion, peas and curry powder in a thick tomato sauce. Four servings in 40 minutes.',
    meta: 'Beef mince curry: a mild, saucy curry with onion, peas and curry powder, ready in 40 minutes. Cheap, easy and served over rice.',
    kw: ['beef mince curry', 'mild mince curry', 'budget curry with mince', 'easy ground beef curry', 'cheap curry for four'],
    why: 'Mince, onion, peas, curry powder: four things you may already own, and about forty minutes. The aim is a curry mild enough for children and thick enough to sit on rice without running off the plate.\n\nCook the curry powder in the oil with the onion for a full minute. Dry spice mixes taste of raw flour until they hit hot fat.\n\nThe tomato purée does the work of a long-simmered sauce. It gives sweetness and body, so 20 minutes is plenty.\n\n**Add the peas at the end.** Frozen peas need only 3 minutes in the heat, and any longer turns them grey and mealy. Children tend to accept a curry with a sweet, mild sauce, and the peas help by adding sweetness. For adults, offer chili sauce or chopped fresh chilies at the table, so one pot suits everyone. Serve it with warmed flatbread if there is no rice, and leave a bowl of yogurt on the table for anyone who wants a milder mouthful.',
    ing: [
      '500 g beef mince',
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '3 garlic cloves, chopped',
      '2 tbsp mild curry powder',
      '2 tbsp tomato purée',
      '400 g tin chopped tomatoes',
      '200 ml water',
      '150 g frozen peas',
      '1 tsp salt',
      '300 g basmati rice'
    ],
    st: [
      'Heat the oil in a large pan over medium heat. Add the onion and cook for 5 minutes until soft. Add the garlic and curry powder and cook for 1 minute.',
      'Add the mince and cook for 8 minutes, breaking it up, until browned.',
      'Stir in the purée, tomatoes, water and salt. Simmer uncovered for 20 minutes until thick.',
      'Meanwhile, cook the rice by the packet instructions. Stir the peas into the curry and cook for 3 minutes. Serve over the rice.'
    ],
    tips: [
      'Cook the curry powder in the oil first to take away its raw taste.',
      'If the sauce is too thick, add a splash of water; if too thin, simmer for 5 minutes more.',
      'Stir in a spoon of plain yogurt at the end for a creamier curry.'
    ],
    pair: ['Basmati rice', 'Naan', 'Mango chutney', 'Cucumber raita'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months without the rice. Reheat until steaming throughout.',
    nut: [648, 33, 75, 24, 6, 6, 690]
  },

  'beef-keema': {
    d: 'Spiced beef mince cooked with onion, tomato, ginger and garam masala, finished with peas. Four servings in 40 minutes.',
    meta: 'Beef keema: spiced mince with onion, tomato, ginger and garam masala, finished with peas. A cheap, quick curry for four in 40 minutes.',
    kw: ['beef keema', 'keema matar', 'easy mince keema', 'budget indian mince curry', 'beef keema with peas'],
    why: 'The smell is the first signal. Onions turning from white to deep brown, then ginger, garlic and cumin hitting the oil: when the whole kitchen smells like that, the keema is on track.\n\nBrowning the onion properly is the difference between a keema that tastes deep and one that tastes flat. Give it 10 minutes, not 4, and stir so the edges do not burn.\n\nThe mince goes in once the spices have bloomed. Break it up well as it cooks, because lumps of mince stay grey in the middle.\n\n**Cook the tomatoes until the oil separates.** That is the cue the sauce is ready: the fat pools at the edges and the paste looks glossy. Keema is a very forgiving dish, and works with lamb, chicken or even lentils in place of the beef. A spoonful of yogurt stirred in at the end softens the spices and gives the sauce a slightly creamy finish.',
    ing: [
      '500 g beef mince',
      '2 tbsp vegetable oil',
      '2 onions, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp turmeric',
      '2 tomatoes, chopped',
      '1 tsp salt',
      '1 tbsp garam masala',
      '150 g frozen peas',
      '100 ml water'
    ],
    st: [
      'Heat the oil in a large pan over medium heat. Add the onions and cook for 10 minutes, stirring, until deep golden.',
      'Add the garlic, ginger, cumin, coriander and turmeric and cook for 1 minute.',
      'Add the tomatoes and salt and cook for 5 minutes, until the mixture turns to a paste and the oil begins to separate.',
      'Add the mince and cook for 8 minutes, breaking it up. Pour in the water, cover and simmer for 10 minutes.',
      'Stir in the peas and garam masala and cook uncovered for 3 minutes.'
    ],
    tips: [
      'Brown the onions slowly and stir often so they colour without burning.',
      'If the keema looks dry, add a splash of water a spoonful at a time.',
      'Garam masala goes in last because its aroma fades with long cooking.'
    ],
    pair: ['Steamed rice', 'Warm flatbread', 'Plain yogurt', 'Lime pickle'],
    store: 'Keeps in the fridge for up to 3 days and the flavour deepens overnight. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [410, 28, 16, 26, 5, 6, 680]
  },

  'braised-chuck-roast': {
    d: 'A chuck roast browned, then simmered with onions, carrots and stock until it falls apart. Six servings, mostly hands-off, in 2 hours 45 minutes.',
    meta: 'Braised chuck roast: a cheap beef roast browned and simmered with onion, carrot and stock until tender. Six servings in 2 hours 45.',
    kw: ['braised chuck roast', 'pot roast chuck', 'budget beef roast', 'tender chuck roast in the oven', 'cheap sunday roast beef'],
    why: 'Most home pot roasts come out dry or stringy, and the fix is time at a low simmer. A chuck roast is full of connective tissue; hot and fast makes it tough, and low and slow turns that tissue into gravy.\n\nSear it first. A deep brown crust on every side gives the braise its flavour and colour, and there is no way to add that later.\n\nThe liquid should come about halfway up the meat, not over it. The top browns while the bottom simmers.\n\n**Do not lift the lid to check for the first 90 minutes.** Every look lets out heat and adds time. The roast is done when a fork twists easily and the meat pulls apart. If it still resists, give it 20 more minutes. Braised meat is always better rested, so if there is time let it sit in its liquid off the heat before slicing. The vegetables turn soft and rich in the juices, and the fat that rises to the top lifts off easily with a spoon.',
    ing: [
      '1.4 kg beef chuck roast',
      '1 tsp salt',
      '1 tsp black pepper',
      '2 tbsp vegetable oil',
      '2 onions, thickly sliced',
      '4 carrots, cut into chunks',
      '3 garlic cloves, smashed',
      '2 tbsp tomato purée',
      '500 ml beef stock',
      '2 bay leaves',
      '1 tbsp Worcestershire sauce'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan). Pat the beef dry and season with the salt and pepper.',
      'Heat the oil in a heavy casserole over medium-high heat. Sear the beef for 4 minutes per side until deeply browned, then lift it out.',
      'Add the onions, carrots and garlic and cook for 5 minutes. Stir in the purée, then the stock, Worcestershire sauce and bay leaves.',
      'Return the beef to the pot, cover tightly and cook in the oven for 2 hours 30 minutes, until a fork twists easily in the meat.',
      'Rest the beef for 15 minutes. Skim the fat from the liquid and spoon it over the sliced meat and vegetables.'
    ],
    tips: [
      'Pat the beef dry before searing, because a wet surface steams instead of browning.',
      'If the meat is not tender at 2 hours 30 minutes, give it another 20 minutes.',
      'For a thicker gravy, lift out the meat and boil the liquid for 5 minutes.',
      'Rest the meat before slicing so the juices stay in.'
    ],
    pair: ['Mashed potato', 'Buttered noodles', 'Green beans', 'Crusty bread'],
    store: 'Keeps in the fridge for up to 4 days in its liquid. Freezes for up to 3 months. Reheat gently, covered, so the meat stays moist.',
    nut: [543, 47, 10, 35, 2, 4, 880]
  },

  'beans-and-franks': {
    d: 'Sliced hot dogs simmered in a sweet and smoky baked bean sauce with onion and mustard. Four servings in 25 minutes from the cupboard.',
    meta: 'Beans and franks: sliced hot dogs in baked beans with onion, mustard and ketchup. A cheap 25 minute supper for four from the cupboard.',
    kw: ['beans and franks', 'franks and beans', 'hot dogs and beans', 'budget beans and hot dogs dinner', 'easy hot dog and bean supper'],
    why: 'Franks and beans began as a way to make a tin go further, and it still does the job. Sliced hot dogs add salt and smoke to a sweet bean sauce, and one tin feeds four with some bread.\n\nCook the onion first, in a little oil, until soft. Raw onion stirred into beans tastes sharp and never softens.\n\nMustard and a spoon of vinegar are the corrective. Tinned beans are sweet, and a sharp edge keeps the sauce from tasting like dessert.\n\n**Simmer, do not boil.** A hard boil breaks the beans and turns the sauce to paste. Eat it with buttered toast or baked potatoes. It reheats well, so a double batch is no trouble. This is a store-cupboard supper that needs almost no shopping, and it improves if left for a little while after cooking. A slice of buttered toast underneath turns it from a side into a meal.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '300 g hot dogs, sliced into 2 cm pieces',
      '800 g tinned beans in tomato sauce',
      '2 tbsp tomato ketchup',
      '2 tsp yellow mustard',
      '1 tsp cider vinegar',
      '1/2 tsp smoked paprika'
    ],
    st: [
      'Heat the oil in a saucepan over medium heat. Cook the onion for 5 minutes until soft.',
      'Add the hot dogs and cook for 3 minutes until lightly coloured.',
      'Stir in the beans, ketchup, mustard, vinegar and paprika.',
      'Simmer gently for 12 minutes, stirring now and then, until thick. Serve hot.'
    ],
    tips: [
      'Cook the onion until soft before the beans go in, so it does not taste raw.',
      'If the sauce is too sweet, add another splash of vinegar.',
      'Keep the heat at a gentle simmer so the beans stay whole.'
    ],
    pair: ['Buttered toast', 'Baked potatoes', 'Coleslaw', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a pan with a splash of water. Do not reheat more than once.',
    nut: [436, 18, 37, 24, 9, 14, 1720]
  },

  'chili-dogs': {
    d: 'Grilled hot dogs in soft buns piled with a quick beef chili and grated cheese. Four servings in 25 minutes.',
    meta: 'Chili dogs: hot dogs in soft buns with a quick beef chili and grated cheddar. A cheap, fast supper for four in 25 minutes.',
    kw: ['chili dogs', 'chili cheese dogs', 'hot dogs with chili', 'budget hot dog dinner', 'easy chili dog recipe'],
    why: 'Smell the spice as it hits the pan. Chili powder, cumin and garlic in hot oil give off the scent that tells you the topping is going to be good, not just red and wet.\n\nThe chili here is a quick one, with only 200 g of mince. It should be thick enough to sit on the hot dog without sliding off, which means simmering it uncovered until a spoon leaves a trail.\n\nToast the buns. Even a minute under the grill makes the difference between a bun that holds and one that falls apart.\n\n**Cook the hot dogs in a hot pan, not boiling water.** They blister and taste better. Melt the cheese under the grill for 1 minute at the very end. The chili can be made ahead and kept warm, so assembly takes only moments. Toast the buns in the dry pan the hot dogs came out of, and they pick up a little flavour and stay sturdier under the topping.',
    ing: [
      '200 g beef mince',
      '1 tsp vegetable oil',
      '1/2 onion, finely chopped',
      '1 garlic clove, chopped',
      '1 tbsp chili powder',
      '1 tsp ground cumin',
      '200 g tin chopped tomatoes',
      '1 tbsp tomato purée',
      '1/2 tsp salt',
      '300 g hot dogs',
      '240 g soft finger buns',
      '60 g grated cheddar'
    ],
    st: [
      'Heat the oil in a pan over medium-high heat. Brown the mince for 6 minutes, breaking it up. Add the onion and garlic and cook for 3 minutes.',
      'Stir in the chili powder and cumin, then the tomatoes, purée and salt. Simmer uncovered for 10 minutes until thick.',
      'Fry or grill the hot dogs for 6 minutes, turning, until blistered. Split and toast the buns.',
      'Set a hot dog in each bun, spoon over the chili and scatter with the cheese. Grill for 1 minute until melted.'
    ],
    tips: [
      'Simmer the chili until a spoon leaves a trail; a runny topping makes soggy buns.',
      'Toast the buns so they stay firm under the chili.',
      'Serve on a tray lined with kitchen paper, because it is a messy meal.'
    ],
    pair: ['Coleslaw', 'Potato wedges', 'Pickles', 'Sweetcorn'],
    store: 'Keep the chili in the fridge for up to 3 days. Assemble the dogs fresh. Reheat the chili until steaming throughout.',
    nut: [584, 28, 37, 36, 3, 8, 1590]
  },

  'slow-cooker-pot-roast': {
    d: 'Chuck roast, potatoes and carrots cooked in a slow cooker with onion and stock for 8 hours. Six servings, 20 minutes of work.',
    meta: 'Slow cooker pot roast: chuck roast, potatoes and carrots in stock, 8 hours on low. Six servings with almost no work, cheap and easy.',
    kw: ['slow cooker pot roast', 'crock pot pot roast', 'budget slow cooker beef', 'easy pot roast with vegetables', 'cheap slow cooker dinner'],
    why: 'Most of the work in a slow cooker pot roast is done before you leave the house. Twenty minutes of chopping and searing, then eight hours of nothing.\n\nSear the roast, though, even though the cooker does not need it. Browning is what gives the gravy colour and a savoury edge, and without it the meat looks grey and the liquid tastes thin.\n\nPut the vegetables under and around the meat, not on top. The potatoes cook in the stock, and the meat stays above the liquid where it braises rather than boils.\n\n**Resist opening the lid.** Each lift costs about 20 minutes of cooking. The roast is ready when it pulls apart with a fork. Thicken the juices with a spoon of cornflour for a gravy. Slow cookers vary a lot, so learn whether yours runs hot or cool and adjust accordingly. The meat should be soft enough to fall apart under a fork, and the juices reduced in a pan make a far better gravy than anything from a packet.',
    ing: [
      '1.3 kg beef chuck roast',
      '1 tsp salt',
      '1 tsp black pepper',
      '1 tbsp vegetable oil',
      '1 onion, cut into wedges',
      '600 g baby potatoes, halved',
      '4 carrots, cut into chunks',
      '3 garlic cloves',
      '400 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '2 bay leaves',
      '1 tbsp cornflour'
    ],
    st: [
      'Season the beef with the salt and pepper. Heat the oil in a frying pan over high heat and sear the beef for 3 minutes per side until deeply browned.',
      'Put the onion, potatoes, carrots and garlic in the slow cooker. Set the beef on top and add the stock, Worcestershire sauce and bay leaves.',
      'Cover and cook on low for 8 hours, until the beef pulls apart with a fork.',
      'Lift out the beef and vegetables. Stir the cornflour with 2 tablespoons of cold water, whisk it into the juices and simmer for 3 minutes in a pan until glossy. Serve over the meat.'
    ],
    tips: [
      'Sear the beef for colour and flavour; it does not need to cook through.',
      'Keep the lid on during cooking, since each peek adds time.',
      'If your cooker runs hot, check at 7 hours.',
      'For a thicker gravy, add a little more cornflour mixed with cold water.'
    ],
    pair: ['Crusty bread', 'Green beans', 'Horseradish sauce', 'Peas'],
    store: 'Keeps in the fridge for up to 4 days in its juices. Freezes for up to 3 months. Reheat gently until steaming.',
    nut: [567, 46, 26, 31, 4, 4, 820]
  },

  'braised-pork-shoulder': {
    d: 'A boneless pork shoulder browned and braised in stock with onions and apple until it pulls apart. Eight servings in 3 hours 15 minutes.',
    meta: 'Braised pork shoulder: a cheap boneless shoulder simmered with onion and apple until it pulls apart. Eight servings in 3 hours 15.',
    kw: ['braised pork shoulder', 'pulled pork shoulder in the oven', 'budget pork roast', 'cheap pork shoulder dinner', 'easy braised pork'],
    why: 'Pork shoulder, onions, apple, stock: four things and a lot of patience. It is one of the cheapest cuts a butcher sells, and three hours turns it into something that falls apart at the touch of a fork.\n\nSeason it the night before if you can. A dry rub of salt and pepper pulls into the surface and seasons the meat deeper than a quick sprinkle ever will.\n\nThe apple melts into the braise and gives a mild sweetness that suits pork. No sugar is needed.\n\n**Keep the lid on.** Pork shoulder has plenty of fat, but a loose lid lets the liquid evaporate and leaves the top dry. It is done when a fork slides in and twists with no resistance. Shred it in its own juices. The meat is forgiving and hard to overcook, so it suits cooks who like to start dinner early and leave it. Leftovers make excellent sandwiches or a filling for tacos the next day, with the juices spooned over to keep them moist.',
    ing: [
      '1.8 kg boneless pork shoulder, tied',
      '2 tsp salt',
      '1 tsp black pepper',
      '1 tbsp vegetable oil',
      '2 onions, sliced',
      '2 apples, cored and chopped',
      '3 garlic cloves',
      '400 ml chicken stock',
      '2 tbsp cider vinegar',
      '2 bay leaves'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan). Rub the pork with the salt and pepper.',
      'Heat the oil in a heavy casserole over medium-high heat. Sear the pork for 4 minutes per side until deeply browned, then lift it out.',
      'Add the onions, apples and garlic and cook for 5 minutes. Pour in the stock and vinegar, scraping up the browned bits, and add the bay leaves.',
      'Return the pork, cover tightly and cook in the oven for 3 hours, until a fork slides in and twists easily.',
      'Rest for 15 minutes, then shred the meat and moisten it with the cooking juices.'
    ],
    tips: [
      'Salt the pork the night before for a deeper seasoning, if you have time.',
      'If the pork is still firm at 3 hours, give it another 20 minutes.',
      'Skim the fat from the juices before spooning them over.',
      'Do not cut the meat until it has rested, or the juices run out.'
    ],
    pair: ['Mashed potato', 'Coleslaw', 'Soft rolls', 'Roast carrots'],
    store: 'Keeps in the fridge for up to 4 days in its juices. Freezes for up to 3 months. Reheat gently in a covered pan.',
    nut: [505, 42, 10, 33, 2, 6, 890]
  },

  'pork-chop-casserole': {
    d: 'Pork chops baked on sliced potatoes and onions in a creamy mushroom sauce. Four servings in 65 minutes with one dish to wash.',
    meta: 'Pork chop casserole: chops baked over sliced potato and onion in a creamy mushroom sauce. A cheap one-dish dinner for four, 65 minutes.',
    kw: ['pork chop casserole', 'pork chops and potatoes bake', 'budget pork chop dinner', 'easy baked pork chops with potatoes', 'cheap one dish pork dinner'],
    why: 'The smell of pork fat meeting hot onion tells you the dish is on its way. Sear the chops for 3 minutes per side first, because a brown crust is what stops baked pork looking pale.\n\nThe potatoes sit under the chops and take up the juices as they cook. Slice them thin, about 3 mm, so they soften in the time the chops need.\n\nChops bake dry when left too long. **Take them out as soon as the centre is no longer pink** and the juices run clear, which is about 40 minutes at this heat.\n\nThe sauce is a quick mix of milk, flour and mushrooms. It thickens as it bakes, and it should be loose when it goes in. Chops vary a lot in thickness, so judge by touch as well as the clock: the meat should feel springy, not firm. If the sauce looks thin at the end, it thickens quickly in the heat of the dish while it stands.',
    ing: [
      '4 pork chops, about 180 g each',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '600 g potatoes, peeled and thinly sliced',
      '1 onion, sliced',
      '200 g button mushrooms, sliced',
      '25 g butter',
      '2 tbsp plain flour',
      '400 ml milk',
      '1 tsp dried thyme'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan). Season the chops with salt and pepper. Sear in the oil for 3 minutes per side and set aside.',
      'Melt the butter in the same pan and cook the mushrooms for 5 minutes. Stir in the flour, then add the milk gradually, whisking, and simmer for 3 minutes. Add the thyme.',
      'Layer the potatoes and onion in a 3 litre baking dish and pour over the sauce. Set the chops on top.',
      'Cover with foil and bake for 25 minutes. Remove the foil and bake for 15 minutes more, until the potatoes are tender and the chops are cooked through.'
    ],
    tips: [
      'Slice the potatoes thinly and evenly so they cook through in the time the chops need.',
      'If the sauce splits in the oven, whisk it briefly before serving.',
      'Check the chops at 35 minutes in case your oven runs hot.'
    ],
    pair: ['Green beans', 'Apple sauce', 'Steamed broccoli', 'Crusty bread'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 20 minutes. The potatoes soften on freezing, so it is best eaten fresh.',
    nut: [584, 45, 38, 28, 5, 8, 750]
  },

  'pork-steaks': {
    d: 'Pork shoulder steaks seared in a hot pan with garlic and paprika, then finished in butter. Four servings in 35 minutes.',
    meta: 'Pork steaks: cheap shoulder steaks seared in a hot pan with garlic and paprika. Four servings in 35 minutes, tender and well browned.',
    kw: ['pork steaks', 'pan fried pork shoulder steaks', 'budget pork steak dinner', 'easy pork steaks in a pan', 'cheap pork dinner'],
    why: 'Most pork steaks come out grey and tough, and the cure is a hot pan and a dry steak. Pat the meat with kitchen paper and leave it uncovered in the fridge for 30 minutes if you can; a dry surface browns, a wet one steams.\n\nShoulder steaks have more fat than loin, which is why they are cheap and why they stay tender. The fat renders in the pan and bastes the meat.\n\nSear for 4 minutes on the first side without moving it. **Resist turning early.** It releases from the pan by itself once the crust forms.\n\nFinish with butter and garlic for the last minute, spooning the foaming butter over the top. A cast-iron or heavy steel pan keeps its heat when the cold meat goes in, which is the key to browning. Leftover steaks slice thinly for sandwiches, and the pan juices make a quick sauce with a splash of water.',
    ing: [
      '4 pork shoulder steaks, about 200 g each',
      '1 tsp salt',
      '1 tsp smoked paprika',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '30 g butter',
      '3 garlic cloves, smashed',
      '1 tbsp lemon juice'
    ],
    st: [
      'Pat the steaks dry and rub with the salt, paprika and pepper.',
      'Heat the oil in a large heavy frying pan over medium-high heat until it shimmers. Add the steaks and cook for 4 minutes without moving them.',
      'Turn and cook for 4 minutes more. Add the butter and garlic and tilt the pan, spooning the butter over the steaks for 1 minute.',
      'Lift out, add the lemon juice to the pan and pour over the steaks. Rest for 5 minutes before serving.'
    ],
    tips: [
      'Pat the steaks dry so they brown instead of steaming.',
      'If the steaks are over 2 cm thick, cook them for 2 minutes longer per side.',
      'Rest the meat for 5 minutes so the juices stay put.'
    ],
    pair: ['Buttered potatoes', 'Apple sauce', 'Green salad', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 3 days. Reheat gently in a covered pan so the steaks do not dry out.',
    nut: [494, 36, 2, 38, 0, 0, 710]
  },

  'honey-garlic-pork-chops': {
    d: 'Pork chops seared in a pan and glazed with a sauce of honey, garlic and soy. Four servings in 25 minutes.',
    meta: 'Honey garlic pork chops: pan-seared chops glazed in a sticky honey, garlic and soy sauce. Four servings, cheap and ready in 25 minutes.',
    kw: ['honey garlic pork chops', 'pan fried honey pork chops', 'quick pork chop dinner', 'easy glazed pork chops', 'budget pork chop recipe'],
    why: 'It looks like a stir-fry sauce and behaves like a caramel, which is why the pan has to be watched. Honey burns fast, so the glaze goes in only after the chops are cooked.\n\nSear them first, 4 minutes per side, then take them out. The sauce simmers in the same pan and picks up the browned bits.\n\nThe sauce is ready when it coats the back of a spoon, about 3 minutes. **Do not walk away.** Thick honey goes from glossy to burnt in seconds.\n\nReturn the chops for the last minute and turn them in the glaze. They take on a sticky shine, and the sauce clings instead of running off. Ginger grated into the glaze changes the flavour without adding work. Because the glaze is sticky, soak the pan straight after serving, since it sets hard as it cools and is far harder to clean the next morning.',
    ing: [
      '4 pork loin chops, about 180 g each',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '4 garlic cloves, minced',
      '3 tbsp honey',
      '3 tbsp soy sauce',
      '1 tbsp rice vinegar',
      '60 ml water'
    ],
    st: [
      'Pat the chops dry and season with salt and pepper. Heat the oil in a large frying pan over medium-high heat and sear for 4 minutes per side. Lift out and rest.',
      'Lower the heat to medium. Add the garlic and cook for 30 seconds.',
      'Stir in the honey, soy sauce, vinegar and water and simmer for 3 minutes until the sauce coats a spoon.',
      'Return the chops and any juices to the pan and turn in the glaze for 1 minute. Serve with the sauce spooned over.'
    ],
    tips: [
      'Add the glaze after the chops are cooked, because honey burns on a hot pan.',
      'If the sauce reduces too far, loosen it with a spoonful of water.',
      'Thin chops may cook in 3 minutes per side, so check early.'
    ],
    pair: ['Steamed rice', 'Green beans', 'Stir-fried cabbage', 'Cucumber slices'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a covered pan with a splash of water.',
    nut: [324, 39, 15, 12, 0, 13, 1060]
  },

  'breaded-pork-chops': {
    d: 'Thin pork chops coated in seasoned breadcrumbs and shallow-fried until crisp and golden. Four servings in 35 minutes.',
    meta: 'Breaded pork chops: thin chops in seasoned breadcrumbs, shallow-fried until crisp. A cheap, fast dinner for four in 35 minutes.',
    kw: ['breaded pork chops', 'crispy fried pork chops', 'budget pork chop dinner', 'easy shallow fried pork chops', 'cheap crumbed pork'],
    why: 'Most breaded chops go wrong in the coating: it slides off in the pan, or it browns before the pork is cooked. The fix is three plain steps in order: flour, egg, crumbs.\n\nFlour first, pressed on and shaken off. It gives the egg something to grip. Then the egg, then the crumbs, pressed on with the flat of the hand.\n\nUse thin chops, no more than 1.5 cm. A thick chop needs longer, and the crumbs burn.\n\n**Do not move them in the pan.** Four minutes undisturbed on the first side sets the crust. Drain on a rack and not on kitchen paper, where steam would soften the underside. If the chops are not thin to begin with, flatten them gently between sheets of paper so they cook evenly. Leftover chops make a good sandwich filling, with a little mustard or apple sauce to cut through the crumb. Season the crumbs well, as the plain coating is the only seasoning the chop gets apart from the salt on the meat, and taste a corner of the first one cooked.',
    ing: [
      '4 thin pork loin chops, about 150 g each',
      '1 tsp salt',
      '60 g plain flour',
      '2 eggs, beaten',
      '120 g dried breadcrumbs',
      '1 tsp garlic powder',
      '1 tsp paprika',
      '80 ml vegetable oil, for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Pat the chops dry and season with half the salt. Put the flour on one plate, the egg in a shallow bowl and the crumbs mixed with the garlic powder, paprika and remaining salt on another.',
      'Coat each chop in flour, then egg, then press firmly into the crumbs.',
      'Heat the oil in a large frying pan over medium heat until a pinch of crumbs sizzles at once.',
      'Fry two chops at a time for 4 minutes per side, until golden and cooked through. Drain on a wire rack and serve with the lemon.'
    ],
    tips: [
      'Press the crumbs on firmly so they stay put in the pan.',
      'If the crumbs darken too fast, lower the heat and add 1 minute to each side.',
      'Fry in batches; a crowded pan lowers the oil temperature and the coating turns greasy.'
    ],
    pair: ['Mashed potato', 'Coleslaw', 'Peas', 'Gravy'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a rack at 200°C for 10 minutes to bring the crust back. Do not microwave them.',
    nut: [561, 40, 35, 29, 2, 2, 910]
  },

  'pork-fried-noodles': {
    d: 'Egg noodles stir-fried with shredded pork, cabbage, carrot and a soy and oyster sauce glaze. Four servings in 25 minutes.',
    meta: 'Pork fried noodles: egg noodles stir-fried with pork, cabbage and carrot in a soy glaze. A cheap, quick supper for four in 25 minutes.',
    kw: ['pork fried noodles', 'easy pork stir fry noodles', 'budget noodle stir fry', 'quick pork and cabbage noodles', 'cheap chinese style noodles'],
    why: 'It is the noodles that make or break this. Cook them for 1 minute less than the packet says, rinse under cold water and toss with a spoonful of oil, or they will clump into a block in the wok.\n\nA hot pan is the second thing. Stir-fries need heat, and the only way to get it is to cook the pork in small batches. A crowded pan steams the meat grey.\n\nCabbage is the cheap filler here. It softens in the sauce and adds sweetness that the soy would otherwise lack.\n\n**Have everything ready before you light the hob.** The whole cook takes 8 minutes, and there is no time to chop in the middle. Noodle dishes depend on speed, so keep the plates warm and the table laid before cooking begins. Leftover roast pork works in place of the raw pork if added at the end, which cuts the cooking time further.',
    ing: [
      '250 g dried egg noodles',
      '300 g pork loin, thinly sliced',
      '1 tsp cornflour',
      '2 tbsp vegetable oil',
      '3 garlic cloves, chopped',
      '300 g white cabbage, shredded',
      '2 carrots, cut into matchsticks',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp sesame oil',
      '2 spring onions, sliced'
    ],
    st: [
      'Cook the noodles for 1 minute less than the packet says. Drain, rinse under cold water and toss with a teaspoon of the oil.',
      'Toss the pork with the cornflour. Heat half the oil in a large wok or frying pan over high heat and stir-fry the pork for 3 minutes until browned. Lift out.',
      'Add the remaining oil, then the garlic, cabbage and carrots, and stir-fry for 3 minutes.',
      'Return the pork, add the noodles, soy sauce, oyster sauce and sesame oil and toss for 2 minutes until hot and glossy. Top with the spring onions.'
    ],
    tips: [
      'Rinse the noodles after boiling to stop them sticking together.',
      'Cook the pork in two batches if your pan is small.',
      'Keep everything moving in the pan so the cabbage does not scorch.'
    ],
    pair: ['Chili sauce', 'Cucumber salad', 'Spring rolls', 'Prawn crackers'],
    store: 'Keeps in the fridge for up to 2 days. Reheat in a hot pan with a splash of water rather than in the microwave, for a better texture.',
    nut: [476, 27, 56, 16, 5, 6, 850]
  },

  'pork-and-cabbage-dumplings': {
    d: 'Dumplings filled with minced pork, cabbage and ginger, pan-fried on one side and steamed in the same pan. Makes about 32, serving four, in 55 minutes.',
    meta: 'Pork and cabbage dumplings: shop-bought wrappers filled with pork, cabbage and ginger, then fried and steamed. About 32, in 55 minutes.',
    kw: ['pork and cabbage dumplings', 'pan fried pork dumplings', 'homemade dumplings', 'budget dumplings with wrappers', 'potsticker recipe'],
    why: 'Shop-bought wrappers turn this from a project into an evening. They cost little, keep in the fridge and fold in seconds once you have the rhythm, which comes after the first four.\n\nThe filling is salted cabbage squeezed dry. This step matters: cabbage left wet gives a watery filling that bursts the wrapper as it cooks.\n\nUse a teaspoon and a half of filling per dumpling. Overfilled ones will not seal.\n\n**Brown the bases, then add the water and cover at once.** The steam cooks the filling while the bases stay crisp. Serve with soy sauce and vinegar. Everything on the table is cheap, and it disappears fast. Folding is a skill that comes quickly, and the first few misshapen ones still taste the same. A tray lined with paper keeps the finished dumplings from sticking to each other while the rest are being filled. Any leftover filling can be shaped into small patties and fried, so nothing from the batch is wasted, and the wrappers keep in the fridge for another day.',
    ing: [
      '300 g pork mince',
      '300 g white cabbage, finely chopped',
      '1 tsp salt',
      '2 spring onions, finely chopped',
      '2 tsp grated fresh ginger',
      '2 garlic cloves, grated',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '230 g dumpling wrappers (about 32)',
      '2 tbsp vegetable oil',
      '120 ml water',
      '3 tbsp soy sauce, to serve',
      '1 tbsp rice vinegar, to serve'
    ],
    st: [
      'Toss the cabbage with the salt and leave for 10 minutes. Squeeze out as much liquid as you can in a clean tea towel.',
      'Mix the cabbage with the pork, spring onions, ginger, garlic, soy sauce and sesame oil until sticky.',
      'Put a heaped teaspoon of filling on each wrapper, wet the edge with water, fold in half and pinch shut, pleating if you like.',
      'Heat half the oil in a large non-stick frying pan over medium-high heat. Arrange half the dumplings flat side down and fry for 3 minutes until golden.',
      'Pour in half the water, cover at once and steam for 5 minutes. Uncover and cook for 1 minute until the water has gone. Repeat with the rest, and serve with the soy sauce and vinegar mixed.'
    ],
    tips: [
      'Squeeze the cabbage as dry as you can, because wet filling splits the wrappers.',
      'Keep unused wrappers under a damp cloth so they do not dry out.',
      'If the dumplings stick, add a splash more water and cover again.',
      'Freeze uncooked dumplings on a tray before bagging them so they do not stick.'
    ],
    pair: ['Chili oil', 'Cucumber salad', 'Steamed rice', 'Egg drop soup'],
    store: 'Cooked dumplings keep in the fridge for up to 2 days; reheat in a pan. Uncooked dumplings freeze for up to 3 months and cook from frozen with 2 minutes more steaming.',
    nut: [417, 20, 37, 21, 3, 3, 1820]
  }
};
