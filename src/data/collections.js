'use strict';
/**
 * The curated collections: six lists chosen by reading each recipe, not by a
 * query. src/lib/collections.js checks every entry against the recipe it names
 * on every build (times, servings, role, vessels, storage), and the build fails
 * if a recipe has drifted out of the criteria its collection prints.
 *
 * Writing an entry
 * ----------------
 * - `why` is one or two sentences, specific to the dish, saying why it meets
 *   this collection's purpose. Only facts that are in the recipe itself: its
 *   own times, quantities, equipment and method. No claim that anyone cooked it.
 * - `note` (optional) is what a reader must know that the times do not show:
 *   rice to cook alongside, a joint to buy in advance.
 * - For "Cook once, eat twice", `second` names the recipe that uses the
 *   leftovers and `keep` how much to set aside; the storage advice shown is the
 *   base recipe's own, and the plan keeps the second meal within 3 days, the
 *   USDA's general limit for cooked leftovers (see SOURCES below).
 *
 * Chosen 27 October 2026 by an editorial reading of the recipe text (Claude),
 * without Search Console data. None of these recipes has been cooked for the
 * collection; src/data/testing-notes.json and the flagship register say which
 * have.
 */

const SOURCES = {
  leftovers: {
    name: 'USDA Food Safety and Inspection Service, "Leftovers and Food Safety"',
    url: 'https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety'
  }
};

const COLLECTIONS = [
  {
    slug: 'complete-dinners-in-30-minutes',
    meta: 'Fourteen complete dinners, each with protein, vegetables and a starch in one recipe, on the table in 30 minutes start to finish, waiting included.',
    title: 'Complete Dinners in 30 Minutes',
    short: '30-minute complete dinners',
    purpose: 'A whole dinner, not a main that still needs a side, on the table within half an hour.',
    intro: 'Each of these is a full plate on its own: a protein, a vegetable and a starch cooked together in the recipe. The time on every card is start to finish, so nothing here hides a marinade, a rest or a pot of rice cooked separately.',
    criteria: [
      'Prep, cooking and any waiting add up to 30 minutes or less, by the recipe\'s own times.',
      'No step the recipe leaves untimed, and no ingredient that must be cooked in advance (cold cooked rice, for example).',
      'Protein, vegetables and a starch are all in the ingredient list, so nothing else needs cooking.',
      'A main course, not a side or a snack.'
    ],
    check: { maxElapsed: 30, role: 'main', noAdvance: true },
    items: [
      { slug: 'pad-see-ew', why: 'Chicken, Chinese broccoli and wide rice noodles in one wok; the charring is done in three 30-second rests, so the cooking is quick but needs your attention.' },
      { slug: 'beef-lo-mein', why: 'Egg noodles, sirloin, carrot and cabbage. The noodles boil for 3 minutes while you slice, and everything else happens in the wok.' },
      { slug: 'chicken-rice-noodle-stir-fry', why: 'The flat rice noodles soak in hot tap water for 10 minutes instead of boiling, which frees the hob for the chicken and vegetables.' },
      { slug: 'beef-noodle-stir-fry', why: 'Steak, red pepper and broccoli with egg noodles; the beef is coated in cornflour and seared in two batches, the step that keeps it from stewing.' },
      { slug: 'mie-goreng', why: 'Chicken, prawns, egg and pak choi with sweet soy noodles. A longer ingredient list than most here, but the cooking is about 10 minutes once everything is chopped.' },
      { slug: 'yaki-udon', why: 'Ready-cooked udon only need loosening, so the 12 minutes of cooking go on browning the pork and wilting the cabbage.' },
      { slug: 'pasta-with-peas-and-bacon', why: 'The peas go into the pasta water for the last 2 minutes, so the vegetable costs no extra pan or time.' },
      { slug: 'salmon-pasta', why: 'Tinned salmon and frozen peas in a lemon and cream-cheese sauce made in the pasta pan; 20 minutes and mostly cupboard ingredients.' },
      { slug: 'pasta-ai-broccoli', why: 'Half a kilo of broccoli boils in the same water as the penne and is crushed into the sauce. Meat-free, though the parmesan is not vegetarian.' },
      { slug: 'skillet-gnocchi-with-spinach', why: 'Shop-bought gnocchi are fried straight from the packet, so there is no water to boil; 200 g of spinach wilts into the cream sauce.' },
      { slug: 'sausage-hash', why: 'Potatoes, sausage meat, onion and pepper with eggs cooked on top, all finished in one frying pan after a 5-minute parboil.' },
      { slug: 'kielbasa-potato-skillet', why: 'The potatoes start under a lid to cook through, then crisp uncovered; the kielbasa is already cooked, so it only needs browning.' },
      { slug: 'sheet-pan-fish-tacos', why: 'The cod roasts on a preheated tray while you shred the slaw and mix the crema; tortillas warm in a dry pan at the end.' },
      { slug: 'prawn-tacos', why: 'The prawns take under 3 minutes in a hot pan. Make the slaw first and it softens while you do everything else.' }
    ]
  },
  {
    slug: 'one-pan-dinners',
    meta: 'Fourteen dinners cooked in a single tin, tray, frying pan or pot, chosen by reading each method, with the vessel, its size and the full time listed.',
    title: 'One-Pan Dinners',
    short: 'One-pan dinners',
    purpose: 'Dinners that cook in a single pan, pot or tray, for fewer things to wash and fewer things to time.',
    intro: '"One pan" here means one cooking vessel, read from each method: a roasting tin, a sheet pan, a frying pan or a lidded pot. A bowl for mixing does not count. Several of these are oven dinners, so the time includes the roasting but not the oven heating up.',
    criteria: [
      'The method cooks everything in one vessel. Recipes that boil pasta or rice in a second pan are left out.',
      'A main course that makes a meal with nothing more than bread or a salad alongside.',
      'The vessel and its size, where the recipe gives one, are listed on each entry.'
    ],
    check: { role: 'main', onePan: true },
    items: [
      { slug: 'greek-chicken-traybake', why: 'Potatoes roast for 10 minutes before the chicken joins them, so both finish together in one large roasting tin.' },
      { slug: 'sheet-pan-chicken-and-potatoes', why: 'The tray goes into the oven to heat while you cut the potatoes, which starts the crisping the moment they land on it.' },
      { slug: 'sausage-and-potato-traybake', why: 'Sausages, potatoes, onions and carrots on one hot tray, turned once halfway, with mustard stirred through at the end.' },
      { slug: 'sheet-pan-salmon-and-asparagus', why: 'The asparagus and tomatoes get a 5-minute head start, then the salmon goes in beside them for 10; the shortest oven dinner here.' },
      { slug: 'sheet-pan-cod-and-vegetables', why: 'New potatoes, then green beans and tomatoes, then cod, each added at the point that makes them all ready together.' },
      { slug: 'sheet-pan-gnocchi', why: 'Gnocchi roast straight from the packet on a hot tray with sausage and peppers; there is no water to boil.' },
      { slug: 'sheet-pan-sausage-and-peppers', why: 'Sausages and peppers roast on a preheated tray; the garlic cooks in its skin and is squeezed into the juices at the end.' },
      { slug: 'one-pot-chicken-and-rice', why: 'The thighs are browned, then nestled into the rice to finish in the same pot; the peas steam in at the end with the heat off.', note: 'Includes a 10-minute rest off the heat, counted in the cooking time.' },
      { slug: 'one-pot-jambalaya', why: 'Sausage and chicken are browned and set aside, the rice simmers in the same pot, then everything is stirred back together.' },
      { slug: 'one-pot-paella', why: 'Cooked in one wide paella pan, without stirring once the stock is in, which is what gives the crust at the base.' },
      { slug: 'one-pot-lentil-curry', why: 'Red lentils cook down to a thick curry in 25 minutes in one large pot. Vegetarian as written.' },
      { slug: 'black-bean-and-rice-skillet', why: 'Rice, beans and sweetcorn cook together under a lid in one large pan, with cheese melted over the top.' },
      { slug: 'ground-beef-and-potato-skillet', why: 'Cubed potatoes crisp first, then the mince browns in the middle of the same pan.' },
      { slug: 'beef-taco-skillet', why: 'The rice cooks in the tomato and bean sauce with the beef, so there is no separate pan of rice.' }
    ]
  },
  {
    slug: 'dinner-for-two',
    meta: 'Eleven dinners written for two people, so nothing needs halving: quantities and pan sizes to match, with the full time and any rice or bread to add.',
    title: 'Dinner for Two',
    short: 'Dinner for two',
    purpose: 'Recipes written for two, so there is nothing to divide and nothing left over unless you want it.',
    intro: 'Halving a recipe for four works for some dishes and not others: eggs do not halve neatly, small amounts of sauce burn in a big pan, and a whole fish is a whole fish. Every recipe here is written for two people, with quantities and pan sizes to match.',
    criteria: [
      'Written for 2 servings, so no quantity needs scaling.',
      'A main course.',
      'Where a recipe needs rice or bread that it does not include, the entry says so.'
    ],
    check: { role: 'main', servings: 2 },
    items: [
      { slug: 'oyakodon', why: 'Chicken and onion simmered in a 20 cm pan of dashi, with the egg added in two pours so it sets in soft ribbons.', note: 'Serve over 600 g of hot cooked short-grain rice, which the recipe\'s times do not include: start it first.' },
      { slug: 'pad-kra-pao', why: 'Minced pork, chilli and holy basil cooked in about 5 minutes, with a crisp fried egg on top.', note: 'Uses 300 g of cooked jasmine rice; cook it before you start the wok.' },
      { slug: 'salmon-teriyaki', why: 'Two fillets, one frying pan and a sauce that reduces in 3 minutes around the fish.', note: 'Serve with rice or greens; neither is in the recipe.' },
      { slug: 'sole-meuniere', why: 'Two whole sole in one large frying pan, then a brown-butter sauce made in the same pan in about 90 seconds.' },
      { slug: 'sea-bream-with-fennel', why: 'Two whole bream roast on a bed of fennel and tomatoes with white wine in one roasting tin.' },
      { slug: 'moules-a-la-creme', why: 'A kilo of mussels for two, steamed open in 5 minutes and finished with cream; the bread for the sauce is in the ingredient list.' },
      { slug: 'huevos-rotos', why: 'Potatoes slowly fried in olive oil, topped with serrano ham and four fried eggs broken at the table.' },
      { slug: 'steak-salad', why: 'One 300 g sirloin, seared and rested, sliced over a mustard-dressed salad.', note: 'The method takes the steak out of the fridge 20 minutes before cooking.' },
      { slug: 'eggs-in-purgatory', why: 'Eggs poached in a garlic and chilli tomato sauce in one wide pan, with crusty bread in the ingredient list. Vegetarian as written.' },
      { slug: 'char-kway-teow', why: 'Fresh rice noodles with prawns, Chinese sausage and egg; every ingredient is set out before the wok goes on, because the cooking takes about 5 minutes.' },
      { slug: 'pasta-burro-e-salvia', why: '200 g of pasta, brown butter and sage: about the shortest recipe on the site that still makes a dinner.' }
    ]
  },
  {
    slug: 'cook-once-eat-twice',
    meta: 'Eight bigger cooks that give a second, different dinner within three days, each paired with a recipe written for the leftovers and its own keeping note.',
    title: 'Cook Once, Eat Twice',
    short: 'Cook once, eat twice',
    purpose: 'One larger cook that gives you a second, different dinner within the next three days.',
    intro: 'Each entry pairs a recipe that makes more than one meal with a second recipe on the site that is written for the leftovers. The amount to set aside comes from the second recipe\'s own ingredient list. The keeping advice is the first recipe\'s own, and the second meal is planned within three days, the general limit the USDA gives for cooked leftovers in the fridge.',
    criteria: [
      'The first recipe serves at least four, and its storage note covers keeping it in the fridge.',
      'The second recipe already exists on the site and calls for the cooked leftover by weight.',
      'The second meal falls within 3 days of the first. Cool leftovers and refrigerate them within 2 hours of cooking.'
    ],
    check: { role: 'main', pairs: true },
    items: [
      { slug: 'slow-cooker-pulled-pork', second: 'pulled-pork-tacos', keep: '600 g of the pulled pork', why: 'A 2.5 kg shoulder serves ten, so setting 600 g aside for tacos still leaves plenty for the first night.' },
      { slug: 'instant-pot-whole-chicken', second: 'leftover-roast-chicken-pie', keep: '400 g of the meat', why: 'Pull 400 g of meat off the 1.6 kg bird before carving the rest for the table, then make the pie with leeks and peas.', note: 'The pie recipe asks that the chicken was chilled within 2 hours of its first cooking.' },
      { slug: 'slow-cooker-pot-roast', second: 'stovies', keep: '300 g of the beef', why: 'Stovies is the Scottish way to use up cooked roast beef: potatoes and onions cooked slowly in dripping, with the beef stirred in for the last 20 minutes.' },
      { slug: 'maple-glazed-ham', second: 'leftover-ham-pie', keep: '300 g of the ham', also: 'ham-and-pea-pasta', why: 'A 4 kg ham serves twelve; a leek and cheddar pie under puff pastry takes 300 g of it, and the pasta another 200 g.' },
      { slug: 'roast-turkey', second: 'turkey-curry', keep: '500 g of the turkey', why: 'The curry is built for cooked turkey: the sauce simmers for 15 minutes and the meat only warms through, so it does not dry out.', note: 'The turkey recipe needs 24 to 48 hours of dry-brining in the fridge before it is roasted.' },
      { slug: 'chili-con-carne', second: 'baked-potato', keep: 'two or three ladles of chili', why: 'The chili recipe says it improves for the first 48 hours; on the second night spoon it, reheated until steaming, over baked potatoes.' },
      { slug: 'slow-cooker-whole-chicken', second: 'chicken-gnocchi-soup', keep: '400 g of the meat', why: 'A 1.8 kg bird cooked on low for 5 hours; strip 400 g of meat before it goes back in the fridge and the soup is 40 minutes on another night.', note: 'The soup recipe keeps for 2 days itself, so make it within the chicken\'s 3 days and eat it soon after.' },
      { slug: 'honey-glazed-ham', second: 'croque-monsieur', keep: '250 g of the ham', why: 'The ham is simmered, then glazed; thick slices of it make the croque monsieur, a ham and cheese sandwich finished under béchamel.', note: 'The ham recipe keeps it 5 days wrapped in the fridge; this plan still uses it within 3.' }
    ]
  },
  {
    slug: 'beginner-baking',
    meta: 'Ten bakes for a first attempt: mixed by hand, no yeast or mixer, 13 ingredients or fewer, and a clear doneness test in every method rather than a time alone.',
    title: 'Beginner-Friendly Baking',
    short: 'Beginner baking',
    purpose: 'Bakes for a first attempt: few ingredients, mixing by hand, and a clear sign of when they are done.',
    intro: 'None of these needs a stand mixer, yeast, a sugar thermometer or a piping bag. Most are stirred in one bowl. Each recipe says how to tell when it is ready, whether that is a skewer coming out clean, a hollow sound underneath or edges turning deep gold, and those cues matter more than the minutes.',
    criteria: [
      'Rated Easy, with no yeast, no electric mixer or food processor, and no thermometer.',
      'Mixed by hand, usually in one bowl, with 13 ingredients or fewer.',
      'The method gives a doneness test, not only a time.'
    ],
    check: { difficulty: 'Easy', noKit: ['mixer', 'food-processor', 'thermometer'], maxIngredients: 13 },
    items: [
      { slug: 'soda-bread', why: 'Flour, bicarbonate of soda, salt and buttermilk, brought together in about 30 seconds; it is done when the base sounds hollow.' },
      { slug: 'damper', why: 'Five ingredients, rubbed together by hand, kneaded for 1 minute and baked as one round.' },
      { slug: 'lemonade-scones', why: 'Self-raising flour, cream and lemonade stirred with a knife. There is no butter to rub in, the step that usually goes wrong.' },
      { slug: 'beer-bread', why: 'A quick loaf of self-raising flour and lager stirred until just combined; the batter is meant to be lumpy.', note: 'Made with lager, which is baked rather than served raw.' },
      { slug: 'rock-cakes', why: 'Butter rubbed into flour, then piled in rough heaps with two forks; they are meant to look craggy.' },
      { slug: 'anzac-biscuits', why: 'Oats, flour and coconut bound with melted butter and golden syrup; bake them shorter for chewy, longer for crisp.' },
      { slug: 'flapjacks', why: 'Oats stirred into melted butter, sugar and syrup, pressed into a 20 cm square tin. The hour of cooling in the tin is part of the recipe.' },
      { slug: 'gateau-au-yaourt', why: 'Everything is measured with the empty yoghurt pot, so no scales are needed for most of it.' },
      { slug: 'blueberry-muffins', why: 'Wet and dry are folded together in about 12 strokes, and the batter rests 15 minutes so the muffins rise up rather than spread.' },
      { slug: 'banana-bread', why: 'One bowl, folded by hand until a few streaks of flour remain; the skewer test and the foil tent at 40 minutes keep it from going wrong.', note: 'The method browns the butter first, which takes 4 to 5 minutes of watching the pan.' }
    ]
  }
];

/**
 * The weekly plan. One stable page (/weekly-plan/), rewritten in place when the
 * plan changes rather than a new URL each week. Recipes chosen for overlapping
 * ingredients (red peppers, broccoli, garlic, parmesan) and a mix of quick
 * hob dinners and hands-off oven ones.
 */
const WEEKLY_PLAN = {
  slug: 'weekly-plan',
  title: 'Five Dinners for This Week',
  updated: '2026-10-27',
  intro: 'Five dinners for four people, chosen so the shopping overlaps: the red peppers, broccoli, garlic and parmesan bought for one night are used again on another. Wednesday and Friday go in the oven and need little attention, Monday is a one-pot simmer, and Tuesday and Thursday take 25 minutes on the hob.',
  days: [
    { day: 'Monday', slug: 'one-pot-chicken-and-rice', why: 'One pot and a long, quiet simmer to start the week.' },
    { day: 'Tuesday', slug: 'pasta-ai-broccoli', why: 'Meat-free and 25 minutes; uses most of the broccoli.' },
    { day: 'Wednesday', slug: 'sheet-pan-gnocchi', why: 'Into the oven on one tray; uses two of the red peppers and the rest of the parmesan.' },
    { day: 'Thursday', slug: 'beef-noodle-stir-fry', why: 'The last red pepper and the rest of the broccoli, in a 25-minute stir-fry.' },
    { day: 'Friday', slug: 'sheet-pan-fish-tacos', why: 'Fish bought fresh near the end of the week, or frozen; roasted on one tray.' }
  ],
  schedule: [
    'Shop once for everything on the list. If you buy the cod fresh rather than frozen, buy it nearer Friday.',
    'Monday: the chicken and rice is about 55 minutes, most of it simmering with the lid on.',
    'Tuesday: put the pasta water on as soon as you are in the kitchen; the broccoli and penne share it.',
    'Wednesday: the tray heats in the oven while you cut the peppers and onion; 25 minutes of roasting after that.',
    'Thursday: slice the steak and vegetables before the wok goes on; the cooking takes about 10 minutes.',
    'Friday: make the slaw and crema while the cod roasts.'
  ]
};

module.exports = { COLLECTIONS, WEEKLY_PLAN, SOURCES };
