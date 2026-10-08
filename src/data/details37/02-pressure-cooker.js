'use strict';

/**
 * Volume thirty-seven — the electric pressure cooker.
 *
 * People look these dishes up as "Instant Pot" recipes, which is why the name
 * is in the titles; the method is the same on any electric pressure cooker.
 * Times here are cooking time under pressure plus the time the pot takes to
 * come up to pressure and to release, so they are the recipe's own and not the
 * figure on the dial. Nutrition is estimated from the ingredient list by
 * npm run calc.
 */

module.exports = {
  'instant-pot-chili': {
    d: 'Beef mince, beans, tomatoes and chili powder pressure cooked together until thick, in one pot. Six servings in 40 minutes.',
    meta: 'Instant Pot chili: beef mince, kidney beans and tomatoes pressure cooked for 10 minutes with chili powder and cumin. Six servings in 40 minutes.',
    kw: ['instant pot chili', 'pressure cooker chili', 'instant pot beef chili', 'easy instant pot chili', 'chili in the instant pot'],
    why: 'The pressure cooker does not brown anything on its own, so brown the mince first. Use the sauté setting for the first 8 minutes, breaking the beef up as it cooks, and the chili tastes of roasted meat and not of boiled mince.\n\nSpices go in next, for a minute, in the fat from the beef. Chili powder and cumin taste raw if they are stirred into liquid, and deepen when they are fried first.\n\nThe pressure does the rest. **Add the liquid carefully**: a pressure cooker loses almost nothing to steam, so a chili that looks thin going in will be thin coming out. The tinned tomatoes and a small cup of water are enough.\n\nCook on high pressure for 10 minutes, then let it release naturally for 10 minutes. Stir, and if it is still thin, use the sauté setting for 5 minutes to reduce it. The chili is better the next day, and it freezes well in portions, so a full pot is a useful thing to cook for the week ahead.',
    ing: [
      '500 g beef mince',
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '400 g tin chopped tomatoes',
      '480 g tinned kidney beans, drained and rinsed',
      '1 tbsp tomato purée',
      '120 ml water',
      '1 tsp salt'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and brown the mince for 8 minutes, breaking it up. Add the onion and garlic for 3 minutes.',
      'Stir in the chili powder and cumin for 1 minute, then the tomatoes, beans, purée, water and salt. Scrape the base of the pot so nothing sticks.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 10 minutes.',
      'Let the pressure release naturally for 10 minutes, then release the rest. Stir, and use the sauté setting for 5 minutes if it is too thin.'
    ],
    tips: [
      'Scrape the base after sautéing, or the pot may give a burn warning.',
      'Keep the liquid modest; the pot does not let it evaporate.',
      'Taste for salt after pressure cooking.'
    ],
    pair: ['Rice', 'Cornbread', 'Grated cheddar', 'Soured cream'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [312, 23, 19, 16, 7, 4, 740]
  },

  'instant-pot-mac-and-cheese': {
    d: 'Macaroni cooked in milk and stock under pressure, then stirred with cheddar into a creamy sauce. Four servings in 15 minutes.',
    meta: 'Instant Pot mac and cheese: macaroni pressure cooked for 4 minutes, then stirred with cheddar into a creamy sauce. Four servings in 15 minutes.',
    kw: ['instant pot mac and cheese', 'pressure cooker mac and cheese', 'one pot mac and cheese', 'creamy instant pot mac and cheese', 'quick mac and cheese'],
    why: 'The pasta cooks in the liquid it will be eaten in, so every drop of starch ends up in the sauce. That is the reason this works without a roux.\n\nUse the exact measure of liquid: 500 ml of water and a little milk for 300 g of macaroni. Too much and the macaroni turns to mush; too little and the pot gives a burn warning. Lay the pasta flat, add the liquid and do not stir it in. Stirring pushes pasta to the base.\n\nPressure cook on high for 4 minutes, then release quickly. **The cheese goes in after pressure cooking, off the heat.** Stir in the milk and the grated cheese a handful at a time. Cheese stirred into a boiling pot turns oily and grainy.\n\nThe sauce thickens as it stands for a few minutes. If it looks tight, add a splash of milk. A sharp cheddar gives the strongest flavour, and a handful of grated cheese stirred in at the end of reheating restores the creamy sauce to leftovers.',
    ing: [
      '300 g macaroni',
      '500 ml water',
      '1 tsp mustard powder',
      '1 tsp salt',
      '15 g butter',
      '200 ml milk',
      '250 g grated cheddar',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the macaroni, water, mustard powder, salt and butter in the pot. Do not stir.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 4 minutes.',
      'Release the pressure quickly. Stir, then add the milk and the cheese in handfuls, stirring until melted and creamy.',
      'Season with the pepper and let it stand for 3 minutes to thicken.'
    ],
    tips: [
      'Measure the liquid exactly.',
      'Add the cheese off the heat, in handfuls.',
      'Loosen with a splash of milk if the sauce tightens.',
      'Grate the cheese yourself for the smoothest sauce.'
    ],
    pair: ['Steamed broccoli', 'Green salad', 'Sausages', 'Garlic bread'],
    store: 'Keeps in the fridge for up to 2 days. Reheat with a splash of milk.',
    nut: [591, 27, 60, 27, 3, 5, 1020]
  },

  'instant-pot-rice': {
    d: 'Long-grain rice pressure cooked with an equal measure of water, left to rest, and fluffed. Four servings in 25 minutes.',
    meta: 'Instant Pot rice: long-grain rice pressure cooked with an equal measure of water for 4 minutes, then rested. Four servings in 25 minutes.',
    kw: ['instant pot rice', 'pressure cooker rice', 'instant pot white rice', 'perfect rice in the instant pot', 'easy rice'],
    why: 'In a pressure cooker nothing evaporates, so rice takes the same measure of water as rice, one to one. Any more and the grains turn to porridge.\n\nRinse the rice first, in a sieve under cold water, until it runs nearly clear. That removes the surface starch that makes grains stick together. Drain well, since extra water throws the ratio off.\n\nPut the rice, the water and a pinch of salt in the pot, give it one stir and cook on high pressure for 4 minutes. **Let the pressure release naturally for 10 minutes.** The rice finishes steaming in that time, and the grains firm up.\n\nFluff with a fork, not a spoon, which mashes the grains. The rice keeps warm in the pot for a little while with the lid on. This ratio is for long-grain white rice. Brown rice needs more water and longer. Pots differ in how long they take to come up to pressure, so the total time on the clock is longer than the 4 minutes of cooking under pressure.',
    ing: [
      '300 g long-grain white rice',
      '300 ml water',
      '1/2 tsp salt',
      '10 g butter'
    ],
    st: [
      'Rinse the rice in a sieve under cold water until it runs nearly clear. Drain well.',
      'Put the rice, water and salt in the pot and stir once.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 4 minutes.',
      'Let the pressure release naturally for 10 minutes, then release the rest. Fluff with a fork and stir in the butter.'
    ],
    tips: [
      'Rinse the rice and drain it well.',
      'Use equal measures of rice and water.',
      'Do not skip the natural release.',
      'Fluff with a fork, not a spoon.'
    ],
    pair: ['Curry', 'Chili', 'Stir-fried vegetables', 'Grilled chicken'],
    store: 'Cool within 1 hour and keep in the fridge for up to 1 day. Reheat until steaming throughout.',
    nut: [287, 5, 60, 3, 1, 0, 300]
  },

  'instant-pot-chicken-soup': {
    d: 'Chicken thighs, carrots, celery and noodles cooked in a seasoned broth in the pressure cooker. Six servings in 40 minutes.',
    meta: 'Instant Pot chicken soup: chicken thighs, carrots and celery pressure cooked for 10 minutes, with noodles stirred in at the end. Six servings.',
    kw: ['instant pot chicken soup', 'pressure cooker chicken soup', 'chicken noodle soup in the instant pot', 'easy chicken soup', 'homemade chicken soup'],
    why: 'A soup that tastes as if it had simmered for hours takes 10 minutes under pressure, because the pressure forces flavour out of the chicken bones and into the water.\n\nBone-in chicken thighs give the best broth. Brown them first on the sauté setting, skin side down, for 5 minutes, and the soup has a deeper flavour. Take them out, soften the onion, carrot and celery in the fat, and put the chicken back on top.\n\nUse enough water to cover the thighs and no more. **The pot does not lose liquid**, so a pot filled to the brim gives a weak soup.\n\nAfter pressure cooking, lift the chicken out, pull the meat off the bones and discard the skin and bones. Add the noodles to the hot broth on the sauté setting and cook for 6 minutes. Return the chicken for the last minute. A squeeze of lemon and plenty of black pepper at the end make a plain broth taste fresher, and leftover shredded chicken is good in sandwiches.',
    ing: [
      '800 g bone-in chicken thighs',
      '1 tbsp vegetable oil',
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '3 garlic cloves, chopped',
      '1.2 litres water',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 1/2 tsp salt',
      '120 g egg noodles',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and brown the thighs, skin side down, for 5 minutes. Lift out.',
      'Cook the onion, carrots and celery for 4 minutes. Add the garlic for 1 minute, then the water, bay leaves, thyme and salt. Put the chicken on top.',
      'Lock the pressure cooker lid and pressure cook on high for 10 minutes. Release the pressure naturally for 10 minutes.',
      'Lift out the chicken, shred the meat and discard the skin and bones. Add the noodles to the broth on sauté and cook for 6 minutes, then return the chicken, add the parsley and serve.'
    ],
    tips: [
      'Brown the chicken first for a deeper broth.',
      'Do not overfill the pot with water.',
      'Add the noodles after pressure cooking so they do not go soft.',
      'Taste and adjust the salt at the end.'
    ],
    pair: ['Crusty bread', 'Cheese on toast', 'Crackers'],
    store: 'Keeps in the fridge for up to 3 days; the noodles soften. Freeze the soup without noodles for up to 3 months.',
    nut: [404, 26, 21, 24, 2, 3, 750]
  },

  'instant-pot-pulled-pork': {
    d: 'A pork shoulder rubbed with spices and pressure cooked until it shreds, then tossed in its own juices and barbecue sauce. Eight servings in 105 minutes.',
    meta: 'Instant Pot pulled pork: a spiced pork shoulder pressure cooked for 90 minutes until it shreds, tossed in barbecue sauce. Eight servings.',
    kw: ['instant pot pulled pork', 'pressure cooker pulled pork', 'pulled pork in the instant pot', 'easy pulled pork', 'pulled pork shoulder'],
    why: 'Pork shoulder is full of connective tissue, which is tough when cooked briefly and turns to gelatine under long, wet heat. A pressure cooker gets there in 90 minutes, where a slow cooker needs eight hours.\n\nCut the shoulder into four large chunks. Smaller pieces cook faster, and more surface takes more rub. Season with the paprika, sugar, salt and garlic powder and press the spices on. Brown the chunks on the sauté setting for 3 minutes per side, which gives the meat a roasted flavour.\n\nThe liquid at the base is only a cup of stock. **The pork gives off plenty of its own juice**, and too much stock makes a boiled, bland result.\n\nAfter cooking, let the pressure release naturally. Shred the meat, skim the fat from the juices and toss the pork in some of them. Add barbecue sauce at the end. The shredded pork reheats well in its juices and fills rolls, tacos or a baked potato, so one shoulder gives several meals.',
    ing: [
      '1.8 kg boneless pork shoulder, cut into 4 pieces',
      '2 tbsp light brown sugar',
      '2 tsp smoked paprika',
      '2 tsp salt',
      '1 tsp garlic powder',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '240 ml chicken stock',
      '1 onion, sliced',
      '150 g barbecue sauce'
    ],
    st: [
      'Mix the sugar, paprika, salt, garlic powder and pepper and rub all over the pork.',
      'Set the pot to sauté. Heat the oil and brown the pork for 3 minutes per side. Remove, then add the stock and scrape the base.',
      'Put the onion in the pot and the pork on top. Lock the pressure cooker lid and pressure cook on high for 90 minutes. Let the pressure release naturally for 15 minutes.',
      'Shred the pork with two forks, skim the fat from the juices and toss the meat with 120 ml of the juices and the barbecue sauce.'
    ],
    tips: [
      'Cut the shoulder into chunks so it cooks evenly.',
      'Keep the liquid at the base to one cup.',
      'Natural release keeps the meat moist.',
      'Skim the fat from the juices before using them.'
    ],
    pair: ['Soft rolls', 'Coleslaw', 'Baked beans', 'Corn on the cob'],
    store: 'Keeps in the fridge for up to 4 days in its juices. Freezes for up to 3 months. Reheat gently, covered.',
    nut: [509, 41, 12, 33, 1, 9, 1010]
  },

  'instant-pot-ribs': {
    d: 'Pork ribs rubbed with spices, pressure cooked until tender, then glazed with barbecue sauce and finished under the grill. Four servings in 55 minutes.',
    meta: 'Instant Pot ribs: pork ribs pressure cooked for 30 minutes until tender, then glazed and grilled. Four servings in 55 minutes.',
    kw: ['instant pot ribs', 'pressure cooker ribs', 'pork ribs in the instant pot', 'fall off the bone ribs', 'easy ribs'],
    why: 'Ribs take hours in the oven. Under pressure they take 30 minutes, and the meat comes out tender enough to pull from the bone with a fork.\n\nThe membrane on the back of the ribs has to go. It is a thin, tough skin that stays chewy however long you cook it. Slide a knife under it at one corner, grip with a paper towel and pull it off in a sheet.\n\nRub the spices in and cut the rack into sections that fit the pot. Stand them upright round the wall of the pot, curled, on the rack with 240 ml of water or stock below. **The ribs must stay above the liquid**, so they steam rather than boil.\n\nAfter pressure cooking, the ribs are tender but pale. Brush with barbecue sauce and put them under a hot grill for 5 minutes until sticky and lightly charred. Handle them carefully; they fall apart.',
    ing: [
      '1.5 kg pork back ribs',
      '2 tbsp light brown sugar',
      '2 tsp smoked paprika',
      '2 tsp salt',
      '1 tsp garlic powder',
      '1/2 tsp black pepper',
      '240 ml water',
      '150 g barbecue sauce'
    ],
    st: [
      'Remove the thin membrane from the back of the ribs. Mix the sugar, paprika, salt, garlic powder and pepper and rub all over. Cut into 3 or 4 sections.',
      'Put the rack and 240 ml of water in the pot and stand the ribs upright around the wall, above the water.',
      'Lock the pressure cooker lid and pressure cook on high for 30 minutes. Let the pressure release naturally for 10 minutes.',
      'Heat the grill to high. Lift the ribs onto a tray, brush with the barbecue sauce and grill for 5 minutes until sticky and lightly charred.'
    ],
    tips: [
      'Remove the membrane for tender ribs.',
      'Keep the ribs above the liquid.',
      'Handle gently after cooking; they are very tender.',
      'Grill for a few minutes for a sticky glaze.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Baked beans', 'Potato wedges'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 15 minutes.',
    nut: [1059, 57, 21, 83, 1, 18, 1780]
  },

  'instant-pot-lentil-soup': {
    d: 'Brown lentils, carrots, celery and tomatoes pressure cooked into a thick, spiced soup. Six servings in 35 minutes.',
    meta: 'Instant Pot lentil soup: brown lentils, carrots and tomatoes pressure cooked for 12 minutes into a thick, spiced soup. Six servings in 35 minutes.',
    kw: ['instant pot lentil soup', 'pressure cooker lentil soup', 'lentil soup in the instant pot', 'easy lentil soup', 'hearty lentil soup'],
    why: 'Lentils need no soaking, and under pressure they cook in 12 minutes with no stirring. Their starch thickens the soup as they soften, so there is no need to blend any of it.\n\nUse brown or green lentils. Red ones collapse into a purée under pressure, which suits some soups but not this one. Rinse them in a sieve and pick out any small stones before they go in.\n\nFry the onion, carrots and celery on the sauté setting for 5 minutes. The vegetables take on a sweetness that stock alone cannot give. Add cumin and a little smoked paprika for a minute, then the lentils, tomatoes and stock.\n\n**Hold back the lemon juice until the end.** Acid in the pot slows the softening of the lentils, and a squeeze stirred in at the end lifts the whole soup. A spoon of yogurt on each bowl, or a drizzle of olive oil, finishes it, and the soup is thick enough to be a meal with bread alone.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '300 g brown lentils, rinsed',
      '400 g tin chopped tomatoes',
      '1.2 litres vegetable stock',
      '1 tsp salt',
      '2 tbsp lemon juice'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and cook the onion, carrots and celery for 5 minutes. Add the garlic, cumin and paprika for 1 minute.',
      'Add the lentils, tomatoes, stock and salt and stir.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 12 minutes. Let the pressure release naturally for 10 minutes.',
      'Stir in the lemon juice, taste for salt and serve.'
    ],
    tips: [
      'Rinse the lentils and pick out any grit.',
      'Add the lemon juice after cooking.',
      'The soup thickens as it stands; loosen with water.'
    ],
    pair: ['Crusty bread', 'Yogurt', 'Flatbread', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Loosen with water when reheating.',
    nut: [260, 16, 40, 4, 8, 5, 1090]
  },

  'instant-pot-mashed-potatoes': {
    d: 'Potatoes pressure cooked in a little water until soft, then mashed with butter and warm milk. Six servings in 30 minutes.',
    meta: 'Instant Pot mashed potatoes: potatoes pressure cooked for 8 minutes, then mashed with butter and warm milk. Six servings in 30 minutes.',
    kw: ['instant pot mashed potatoes', 'pressure cooker mashed potatoes', 'mashed potatoes in the instant pot', 'easy mashed potatoes', 'creamy mash'],
    why: 'Potatoes cooked under pressure absorb less water than potatoes boiled in a pan, and a drier potato makes a creamier mash.\n\nPeel them and cut into even chunks of 4 cm, which cook through in 8 minutes. Floury potatoes, such as Maris Piper or russet, give a light mash; waxy ones turn gluey when mashed.\n\nThe pot needs only 250 ml of water in the base, with a trivet or steamer basket if you have one. **Drain them well and let them steam dry** for 2 minutes in the open pot. The wet surface is what makes mash sloppy.\n\nHeat the milk with the butter before it goes in. Cold milk cools the potatoes and gives a lumpy, sticky mash. Mash with a masher, not a food processor, which turns the starch to glue. Salt well; potatoes take more than you expect. Because the potatoes cook in steam they hold less water than boiled ones, so they take plenty of butter and milk without turning loose.',
    ing: [
      '1.2 kg floury potatoes, peeled and cut into 4 cm chunks',
      '250 ml water',
      '60 g butter',
      '120 ml milk',
      '1 1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the water in the pot with a steamer basket and add the potatoes.',
      'Lock the pressure cooker lid and pressure cook on high for 8 minutes. Release the pressure quickly.',
      'Drain the potatoes and let them steam dry in the open pot for 2 minutes. Warm the butter and milk together.',
      'Mash the potatoes with the warm milk mixture, salt and pepper until smooth.'
    ],
    tips: [
      'Cut the potatoes evenly so they cook together.',
      'Let them steam dry before mashing.',
      'Warm the milk first.',
      'Use a masher, not a blender.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Meatloaf', 'Gravy'],
    store: 'Keeps in the fridge for up to 3 days. Reheat with a splash of milk.',
    nut: [241, 5, 35, 9, 4, 3, 610]
  },

  'instant-pot-beef-stew': {
    d: 'Chuck steak, potatoes, carrots and onion pressure cooked in stock until the meat is tender. Six servings in 60 minutes.',
    meta: 'Instant Pot beef stew: chuck steak, potatoes and carrots pressure cooked for 35 minutes until tender. Six servings in 1 hour.',
    kw: ['instant pot beef stew', 'pressure cooker beef stew', 'beef stew in the instant pot', 'easy beef stew', 'tender beef stew'],
    why: 'Chuck steak is the right cut, because it is tough and cheap and full of the connective tissue that turns tender under pressure. Lean steak goes dry and stringy.\n\nCut the beef into 4 cm cubes, toss it in flour and brown it in two batches on the sauté setting. Browned meat gives the stew colour and savour that the pressure cooker cannot supply by itself. **Do not crowd the pot**, or the beef steams grey.\n\nThe vegetables go in with the meat. Potatoes cut to 3 cm are tender after 35 minutes under pressure but do not collapse; very small pieces turn to mush.\n\nA spoon of tomato purée and a splash of Worcestershire sauce add depth. After pressure cooking, release naturally for 15 minutes. If the stew is thin, mash a few potato pieces into it or boil on sauté for 5 minutes. The stew is better after a night in the fridge, when the flavours have settled and the sauce has thickened, so make it a day ahead if there is time.',
    ing: [
      '800 g chuck steak, cut into 4 cm cubes',
      '2 tbsp plain flour',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '1 tbsp tomato purée',
      '500 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '600 g potatoes, peeled and cut into 3 cm chunks',
      '3 carrots, cut into 3 cm chunks',
      '2 bay leaves',
      '1 tsp salt'
    ],
    st: [
      'Toss the beef in the flour. Set the pot to sauté and brown the beef in the oil in two batches, 4 minutes each. Lift out.',
      'Cook the onion for 4 minutes. Add the garlic and purée for 1 minute, then the stock and Worcestershire sauce, scraping the base.',
      'Return the beef and add the potatoes, carrots, bay leaves and salt. Lock the pressure cooker lid and pressure cook on high for 35 minutes.',
      'Release the pressure naturally for 15 minutes. Remove the bay leaves and use the sauté setting for 5 minutes if the stew is thin.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Scrape the base clean after sautéing.',
      'Use chuck, not a lean cut.',
      'Mash a few potatoes into the stew to thicken it.'
    ],
    pair: ['Crusty bread', 'Dumplings', 'Green beans', 'Mustard'],
    store: 'Keeps in the fridge for up to 4 days and thickens. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [349, 32, 26, 13, 4, 4, 800]
  },

  'instant-pot-hard-boiled-eggs': {
    d: 'Eggs steamed under pressure for 5 minutes and cooled in iced water so the shells peel cleanly. Six servings in 14 minutes.',
    meta: 'Instant Pot hard boiled eggs: eggs pressure cooked for 5 minutes and cooled in iced water so they peel easily. Six eggs in 14 minutes.',
    kw: ['instant pot hard boiled eggs', 'pressure cooker hard boiled eggs', '5 5 5 eggs', 'easy peel boiled eggs', 'hard boiled eggs'],
    why: 'The reason people use a pressure cooker for boiled eggs is the peel. Steam at pressure forces the membrane away from the shell, and the shells come off in large pieces with the white left smooth.\n\nPut the rack in the pot with a cup of water, and the eggs on the rack. They steam, they are not boiled. Straight from the fridge is fine.\n\nThe method often called 5-5-5 means 5 minutes under pressure, 5 minutes of natural release and 5 minutes in iced water. **The ice bath stops the cooking** and keeps the yolk from going grey at the edge. Skip it and the eggs overcook in their own heat.\n\nFor a softer yolk, cook for 4 minutes. For a very firm one, 6. Crack the shell all over by rolling it on the worktop and peel under running water. Fresh eggs are harder to peel than week-old ones, so buy them a few days ahead if you can, and use older eggs for the cleanest peel.',
    ing: [
      '6 eggs',
      '240 ml water',
      '1 litre cold water, for the ice bath'
    ],
    st: [
      'Put the rack and 240 ml of water in the pot and set the eggs on the rack.',
      'Lock the pressure cooker lid and pressure cook on high for 5 minutes. Let the pressure release naturally for 5 minutes, then release the rest.',
      'Move the eggs to a bowl of cold water with a handful of ice cubes for 5 minutes.',
      'Crack and peel under running water.'
    ],
    tips: [
      'Use the ice bath so the yolks stay yellow.',
      'Cook for 4 minutes if you like a softer yolk.',
      'Peel under running water.',
      'Do not skip the natural release.'
    ],
    pair: ['Toast', 'Salad', 'Sandwiches', 'Curry'],
    store: 'Unpeeled, they keep in the fridge for up to 5 days. Peeled eggs keep for up to 2 days.',
    nut: [69, 6, 0, 5, 0, 0, 60]
  },

  'instant-pot-risotto': {
    d: 'Arborio rice cooked in stock under pressure with onion and white wine, finished with butter and parmesan. Four servings in 25 minutes.',
    meta: 'Instant Pot risotto: arborio rice pressure cooked for 6 minutes with onion and stock, then finished with butter and parmesan. Four servings.',
    kw: ['instant pot risotto', 'pressure cooker risotto', 'easy risotto', 'risotto in the instant pot', 'creamy risotto'],
    why: 'A risotto on the hob needs 25 minutes of stirring. The pressure cooker does the job in 6, because the pressure forces the stock into the rice and the agitation of the pot releases the starch.\n\nStart with the rice toasted in butter and oil on the sauté setting for 2 minutes. The grains turn translucent at the edges and take the fat, which keeps them separate. Add the wine and let it bubble until it has gone.\n\nThe stock measure is exact: 700 ml for 300 g of rice. **Do not stir once the lid is on**, and do not add extra stock. The rice cooks to al dente in the sealed pot.\n\nAfter a quick release, the risotto looks a little loose. Stir for a minute, then add the butter and parmesan. The starch and fat make it creamy and it thickens as it stands. Serve at once.',
    ing: [
      '30 g butter',
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '2 garlic cloves, chopped',
      '300 g arborio rice',
      '100 ml dry white wine',
      '700 ml hot chicken stock',
      '1/2 tsp salt',
      '60 g grated parmesan',
      '1/2 tsp black pepper'
    ],
    st: [
      'Set the pot to sauté. Melt half the butter with the oil and cook the onion for 4 minutes. Add the garlic and rice and stir for 2 minutes.',
      'Pour in the wine and let it bubble until absorbed. Add the stock and salt and stir once, scraping the base.',
      'Lock the pressure cooker lid and pressure cook on high for 6 minutes. Release the pressure quickly.',
      'Stir vigorously for 1 minute, then add the remaining butter, the parmesan and pepper. Rest for 2 minutes and serve.'
    ],
    tips: [
      'Toast the rice before adding liquid.',
      'Measure the stock exactly.',
      'Stir hard at the end to bring out the creaminess.',
      'Serve at once; risotto thickens as it stands.'
    ],
    pair: ['Green salad', 'Grilled chicken', 'Roasted mushrooms', 'Crusty bread'],
    store: 'Best eaten straight away. Reheat with a splash of stock if kept for 1 day.',
    nut: [447, 13, 65, 15, 2, 1, 1100]
  },

  'instant-pot-chicken-curry': {
    d: 'Chicken thighs in a spiced tomato and onion sauce, pressure cooked for 8 minutes and finished with cream. Four servings in 35 minutes.',
    meta: 'Instant Pot chicken curry: chicken thighs in a spiced tomato and onion sauce, pressure cooked for 8 minutes, finished with cream. Four servings.',
    kw: ['instant pot chicken curry', 'pressure cooker chicken curry', 'chicken curry in the instant pot', 'easy chicken curry', 'chicken curry for four'],
    why: 'Curry sauces need their onions cooked down, and the sauté setting does that in the pot you will cook the curry in. Ten minutes of onion, stirred now and then, and the sauce has a sweet, deep base.\n\nSpices go in next, for a minute, with the garlic and ginger. Ground spices burn easily, so stir constantly. Add a splash of water and scrape the base clean before the lid goes on, because stuck-on spice causes a burn warning.\n\nThe thighs cook in 8 minutes under pressure and stay juicy. Breast meat dries out. **Add the cream after pressure cooking**, off the pressure, because cream added before can split.\n\nIf the sauce is thin, use the sauté setting for 5 minutes. A squeeze of lemon and chopped coriander at the end lift it. Serve it with rice and a spoon of yogurt, and add a little chili powder with the spices for a hotter curry, since the cream mellows the finished sauce.',
    ing: [
      '1 tbsp vegetable oil',
      '2 onions, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '2 tbsp curry powder',
      '1 tsp ground turmeric',
      '400 g tin chopped tomatoes',
      '60 ml water',
      '600 g chicken thigh fillets, cut into chunks',
      '1 tsp salt',
      '60 ml double cream',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and cook the onions for 10 minutes until golden. Add the garlic, ginger, curry powder and turmeric for 1 minute.',
      'Add the tomatoes and water and scrape the base clean. Stir in the chicken and salt.',
      'Lock the pressure cooker lid and pressure cook on high for 8 minutes. Release the pressure quickly.',
      'Stir in the cream and use the sauté setting for 3 minutes if the sauce is thin. Scatter with the coriander.'
    ],
    tips: [
      'Scrape the base after frying the spices.',
      'Use thighs, not breast.',
      'Add the cream after pressure cooking.',
      'Serve with rice to soak up the sauce.'
    ],
    pair: ['Rice', 'Naan', 'Raita', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [324, 32, 13, 16, 3, 5, 740]
  },

  'instant-pot-black-beans': {
    d: 'Dried black beans cooked without soaking in the pressure cooker with onion, garlic and cumin. Six servings in 45 minutes.',
    meta: 'Instant Pot black beans: dried black beans pressure cooked without soaking in 25 minutes with onion, garlic and cumin. Six servings in 45 minutes.',
    kw: ['instant pot black beans', 'pressure cooker black beans', 'black beans without soaking', 'dried black beans in the instant pot', 'easy black beans'],
    why: 'Dried beans cost a fraction of tinned, and a pressure cooker removes the two reasons people avoid them: the overnight soak and the long simmer. Black beans cook from dry in 25 minutes.\n\nRinse them and pick out any stones or odd beans. Put them in the pot with onion, garlic, cumin and a bay leaf, and cover with water by about 4 cm. **Add the salt now.** The old advice to hold salt until the end does not apply under pressure, and salted beans taste better.\n\nA spoon of oil in the pot stops the beans foaming and blocking the valve. Foaming is the usual reason a pot spits.\n\nLet the pressure release naturally for 15 minutes; a quick release bursts the skins. The beans should be creamy inside and hold their shape. Cook for a few minutes more if they are firm. They freeze well in their cooking liquid. Cooked beans are the base of burrito bowls, soups and rice and beans, so a double batch freezes in portions and saves a lot of time later.',
    ing: [
      '400 g dried black beans, rinsed',
      '1 tbsp vegetable oil',
      '1 onion, halved',
      '4 garlic cloves, peeled',
      '2 tsp ground cumin',
      '1 bay leaf',
      '1.2 litres water',
      '1 1/2 tsp salt'
    ],
    st: [
      'Put the beans, oil, onion, garlic, cumin, bay leaf, water and salt in the pot.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 25 minutes.',
      'Let the pressure release naturally for 15 minutes, then release the rest.',
      'Remove the onion halves and bay leaf and taste a bean; cook for 5 minutes more under pressure if they are firm.'
    ],
    tips: [
      'Add the oil to limit foaming.',
      'Let the pressure release naturally.',
      'Salt the water at the start for better flavour.',
      'Store the beans in their cooking liquid.'
    ],
    pair: ['Rice', 'Tacos', 'Burrito bowls', 'Soured cream'],
    store: 'Keeps in the fridge in their liquid for up to 5 days. Freezes for up to 3 months.',
    nut: [259, 15, 43, 3, 10, 2, 600]
  },

  'instant-pot-oatmeal': {
    d: 'Steel-cut oats pressure cooked with water and milk until creamy, with no stirring. Four servings in 17 minutes.',
    meta: 'Instant Pot oatmeal: steel-cut oats pressure cooked for 4 minutes with water and milk until creamy. Four servings in 17 minutes, no stirring.',
    kw: ['instant pot oatmeal', 'pressure cooker oatmeal', 'steel cut oats in the instant pot', 'easy oatmeal', 'creamy oatmeal'],
    why: 'Steel-cut oats take 30 minutes on the hob and constant stirring. Under pressure they take 4 minutes and need no attention, and they come out creamy and still chewy.\n\nToast the oats in a little butter first, on the sauté setting for 2 minutes. They smell nutty, and the flavour carries through. Add the liquid, a pinch of salt and stir once.\n\nThe ratio is 1 part oats to 4 parts liquid. **Do not use rolled oats here**: they turn to glue under pressure. A mix of water and milk makes it creamy without being heavy.\n\nAfter 4 minutes of pressure, let it release naturally for 10 minutes. The oatmeal looks thin when you open the lid. Stir, and it thickens as it stands for a few minutes. Top with cinnamon, fruit or a spoon of brown sugar. A pot of oatmeal keeps for the week, so cook a large batch on Sunday and reheat bowls with a splash of milk, adding fresh toppings each morning.',
    ing: [
      '200 g steel-cut oats',
      '15 g butter',
      '400 ml water',
      '400 ml milk',
      '1/4 tsp salt',
      '1 tsp ground cinnamon',
      '2 tbsp light brown sugar'
    ],
    st: [
      'Set the pot to sauté. Melt the butter and toast the oats for 2 minutes.',
      'Add the water, milk and salt and stir once, scraping the base.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 4 minutes.',
      'Let the pressure release naturally for 10 minutes. Stir in the cinnamon and sugar and let it stand for 3 minutes.'
    ],
    tips: [
      'Use steel-cut oats, not rolled.',
      'Let the pressure release naturally.',
      'Loosen with milk if it thickens too much.',
      'Reheat leftovers with a splash of milk.'
    ],
    pair: ['Sliced banana', 'Berries', 'Chopped nuts', 'Maple syrup'],
    store: 'Keeps in the fridge for up to 4 days. Reheat with a splash of milk.',
    nut: [314, 10, 46, 10, 5, 12, 200]
  },

  'instant-pot-cheesecake': {
    d: 'A baked-style cheesecake with a biscuit base, cooked in a springform tin in the pressure cooker and chilled overnight. Eight servings in 55 minutes plus chilling.',
    meta: 'Instant Pot cheesecake: a creamy cheesecake with a biscuit base, steamed in the pressure cooker for 35 minutes, then chilled. Eight servings.',
    kw: ['instant pot cheesecake', 'pressure cooker cheesecake', 'cheesecake in the instant pot', 'cheesecake for eight', 'creamy cheesecake'],
    why: 'A cheesecake is a custard, and custards like gentle, steamy heat. The pressure cooker provides that without a water bath that leaks into the base, and the cake cooks without cracking.\n\nUse a 15 cm springform tin that fits in the pot, and wrap the base in foil even though there is no water bath. The cheesecake sits on a rack above the water and is cooked by steam.\n\nBeat the cream cheese until smooth before the eggs go in, and beat the eggs in on low speed. **Too much air makes a cheesecake puff, then crack and sink.** Ingredients at room temperature mix smoothly and without lumps.\n\nCook on high pressure for 35 minutes, then let it release naturally for 15 minutes. The centre should wobble slightly when the tin is shaken. It sets fully as it chills, which needs at least 4 hours, ideally overnight. Run a thin knife round the edge of the tin before releasing the sides, and warm the knife under hot water between slices for clean cuts.',
    ing: [
      '120 g digestive biscuits, crushed',
      '50 g butter, melted',
      '450 g full-fat cream cheese, at room temperature',
      '100 g caster sugar',
      '2 eggs',
      '120 g soured cream',
      '1 tsp vanilla extract',
      '1 tbsp plain flour',
      '250 ml water'
    ],
    st: [
      'Mix the crushed biscuits and butter, press into the base of a 15 cm springform tin and chill for 10 minutes.',
      'Beat the cream cheese and sugar until smooth. Beat in the eggs one at a time on low speed, then the soured cream, vanilla and flour. Pour over the base and cover the tin tightly with foil.',
      'Put the rack and the water in the pot. Lower the tin onto the rack, lock the pressure cooker lid and pressure cook on high for 35 minutes. Release the pressure naturally for 15 minutes.',
      'Lift out the tin, cool to room temperature, then chill for at least 4 hours before releasing and slicing.'
    ],
    tips: [
      'Use room-temperature ingredients for a smooth batter.',
      'Beat the eggs in on low speed.',
      'Let the pressure release naturally to avoid cracks.',
      'Chill fully before slicing.'
    ],
    pair: ['Fresh berries', 'Berry sauce', 'Whipped cream', 'Coffee'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 2 months.',
    rest: [240, 'chilling'],
    nut: [411, 7, 26, 31, 0, 18, 260]
  },

  'instant-pot-bolognese': {
    d: 'Beef mince, tomatoes, carrot and celery pressure cooked into a rich meat sauce for spaghetti. Six servings in 40 minutes.',
    meta: 'Instant Pot bolognese: beef mince, tomatoes, carrot and celery pressure cooked for 15 minutes into a rich meat sauce. Six servings in 40 minutes.',
    kw: ['instant pot bolognese', 'pressure cooker bolognese', 'bolognese sauce in the instant pot', 'easy bolognese', 'meat sauce for spaghetti'],
    why: 'A bolognese needs two hours on the hob to turn rich and soft. Under pressure the flavours blend in 15 minutes, but the sauce still needs the same first steps to be good.\n\nBrown the mince hard on the sauté setting. Do not stir it for the first 4 minutes, so it can form a crust. The deep brown flavour comes from this step, and pressure cooking cannot add it back.\n\nThe soffritto of onion, carrot and celery goes in next and softens in the beef fat for 5 minutes. A spoon of tomato purée fried until it darkens adds a savoury depth.\n\nKeep the liquid low. **A pressure cooker does not reduce a sauce**, so use a tin of tomatoes and a small splash of water. After cooking, boil on the sauté setting for 5 minutes if the sauce is loose. Stir through the pasta, with a little pasta water. The sauce makes a good lasagne filling or a topping for baked potatoes, and portions freeze well, so a full pot is worth making.',
    ing: [
      '600 g beef mince',
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '2 carrots, finely chopped',
      '2 celery sticks, finely chopped',
      '3 garlic cloves, chopped',
      '2 tbsp tomato purée',
      '2 x 400 g tins chopped tomatoes',
      '1 tsp dried oregano',
      '1 tsp salt',
      '350 g spaghetti'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and brown the mince for 8 minutes, leaving it undisturbed for the first 4.',
      'Add the onion, carrots and celery for 5 minutes, then the garlic and purée for 2 minutes.',
      'Stir in the tomatoes, oregano and salt, scraping the base. Lock the pressure cooker lid and pressure cook on high for 15 minutes. Release the pressure naturally for 10 minutes.',
      'Boil the spaghetti in salted water, drain and serve with the sauce. Use the sauté setting for 5 minutes to thicken the sauce if needed.'
    ],
    tips: [
      'Brown the mince properly before the lid goes on.',
      'Scrape the base clean to avoid a burn warning.',
      'Reduce the sauce on sauté if it is thin.'
    ],
    pair: ['Grated parmesan', 'Garlic bread', 'Green salad', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [478, 28, 51, 18, 4, 5, 500]
  },

  'instant-pot-chicken-thighs': {
    d: 'Bone-in chicken thighs seasoned and pressure cooked in 10 minutes, then crisped under the grill. Four servings in 35 minutes.',
    meta: 'Instant Pot chicken thighs: bone-in thighs seasoned and pressure cooked for 10 minutes, then crisped under the grill. Four servings in 25 minutes.',
    kw: ['instant pot chicken thighs', 'pressure cooker chicken thighs', 'bone in chicken thighs instant pot', 'easy chicken thighs', 'juicy chicken thighs'],
    why: 'Pressure cooking makes a thigh tender but also pale and flabby, and the skin needs a second step to be worth eating. The grill supplies it.\n\nSeason the thighs the day before if you can, or at least 15 minutes before cooking. Salt works its way into the meat and seasons it through. Paprika, garlic powder and pepper are good with the salt.\n\nBrown them skin side down on the sauté setting for 5 minutes. The skin starts to crisp and the fat renders. Lift them out, pour in the stock and scrape the base, then set the thighs on the rack above the liquid.\n\n**Keep the skin above the stock.** The thighs steam rather than boil, and the skin does not become soggy. Pressure cook for 10 minutes and release naturally for 5. Put them skin side up under a hot grill for 5 minutes until crisp. Spoon over the juices in the pot. Leftover thighs pull easily from the bone and go into sandwiches, salads or a pan of fried rice, so a double batch is sensible.',
    ing: [
      '8 bone-in chicken thighs, about 1 kg',
      '1 tsp salt',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '120 ml chicken stock'
    ],
    st: [
      'Rub the thighs with the salt, paprika, garlic powder and pepper. Set the pot to sauté, heat the oil and brown the thighs skin side down in two batches, 5 minutes each. Lift out.',
      'Pour in the stock and scrape the base. Set the rack in the pot and the thighs on top.',
      'Lock the pressure cooker lid and pressure cook on high for 10 minutes. Let the pressure release naturally for 5 minutes.',
      'Heat the grill to high. Lay the thighs skin side up on a tray and grill for 5 minutes until crisp. Spoon over the juices.'
    ],
    tips: [
      'Brown the skin first, then keep it above the liquid.',
      'Finish under the grill for crisp skin.',
      'Season at least 15 minutes before cooking.',
      'Use the cooking juices as a sauce.'
    ],
    pair: ['Rice', 'Mashed potato', 'Green beans', 'Salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 12 minutes.',
    nut: [550, 42, 1, 42, 0, 0, 900]
  },

  'instant-pot-split-pea-soup': {
    d: 'Dried green split peas, carrots and a ham hock pressure cooked into a thick soup with no soaking. Six servings in 40 minutes.',
    meta: 'Instant Pot split pea soup: dried green split peas and a ham hock pressure cooked for 15 minutes into a thick soup. Six servings in 40 minutes.',
    kw: ['instant pot split pea soup', 'pressure cooker split pea soup', 'split pea and ham soup', 'easy split pea soup', 'pea soup in the instant pot'],
    why: 'Split peas need no soaking and break down completely under pressure, which is how the soup gets thick with no blending. The 15 minutes in the pot does what an hour at a simmer would.\n\nThe hazard is foam. Split peas foam as they heat, and the foam can block the steam valve, so add a spoonful of oil to the pot and keep the liquid below the maximum line. **Never fill the pot more than half with peas and liquid.**\n\nA ham hock gives the flavour: smoky, salty and deep. It cooks with the peas and comes out tender enough to shred. Taste before adding any salt, since the hock brings plenty.\n\nAfter 15 minutes under pressure, release naturally for 15. The soup will look thin, then thicken fast when stirred. Shred the ham, return it to the pot and thin with hot water if the soup is too stiff.',
    ing: [
      '400 g dried green split peas, rinsed',
      '1 ham hock, about 400 g',
      '1 tbsp vegetable oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '1.5 litres water',
      '2 bay leaves',
      '1/2 tsp black pepper'
    ],
    st: [
      'Set the pot to sauté. Heat the oil and cook the onion, carrots and celery for 5 minutes.',
      'Add the split peas, ham hock, water, bay leaves and pepper. Stir and check the pot is no more than half full.',
      'Lock the pressure cooker lid, set the valve to sealing and pressure cook on high for 15 minutes. Release the pressure naturally for 15 minutes.',
      'Lift out the hock, shred the meat and return it to the pot, discarding the skin and bones. Stir well and remove the bay leaves.'
    ],
    tips: [
      'Add a spoonful of oil to limit foaming.',
      'Fill the pot no more than half.',
      'Taste before salting; the ham is salty.',
      'Thin with hot water if the soup thickens too much.'
    ],
    pair: ['Crusty bread', 'Rye bread', 'Mustard', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days and thickens. Freezes for up to 3 months.',
    nut: [390, 30, 45, 10, 19, 7, 700]
  }
};
