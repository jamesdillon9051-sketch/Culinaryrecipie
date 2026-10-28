'use strict';

/**
 * Volume sixty-three, first part: regional American dishes and the Hawaiian
 * and Cuban dishes cooked alongside them. Waits of an hour or more are
 * declared as rest. Nutrition is computed from the ingredient lists by
 * npm run calc.
 */

module.exports = {
  'salt-potatoes': {
    d: 'Small waxy potatoes boiled for 25 minutes in very salty water until a thin white crust forms, then tossed in melted butter.',
    meta: 'Salt potatoes: small new potatoes boiled for 25 minutes in heavily salted water, then buttered. Six servings.',
    kw: ['salt potatoes', 'salt potatoes recipe', 'boiled salted new potatoes', 'new potatoes in salt water', 'salt potatoes with butter'],
    why: `Use far more salt than feels sensible. That is what separates a salt potato from a plain boiled one. The water is salted until it is almost brine, so the potatoes cook at a higher temperature than usual and the skin dries to a fine white film as they rest.

Choose potatoes of one size, no bigger than a golf ball, so they finish together. Waxy new potatoes hold their shape and stay creamy inside; a floury variety breaks apart in water this salty. Leave the skins on and do not prick them, because the skin is what keeps the salt on the outside. Size matters more than variety.

Drain through a colander and let them stand for a minute or two in the hot pot. **The white crust appears as the steam clears**, and it is the sign the potatoes are ready. Toss them in melted butter and serve while hot, with the extra butter in a bowl. That crust is the point.`,
    ing: [
      '1 kg small waxy potatoes, unpeeled',
      '150 g fine salt, for the cooking water',
      '1.5 litres water',
      '100 g butter, melted',
      '1 tbsp chopped chives'
    ],
    st: [
      'Scrub the potatoes and leave them whole. Put the water and salt in a large pot and stir until the salt dissolves.',
      'Add the potatoes and bring to the boil, then simmer for 25 minutes until a knife slips in easily.',
      'Drain in a colander and return the potatoes to the dry pot. Leave them for 2 minutes until a white salt crust forms on the skins.',
      'Pour over the melted butter, scatter with chives and serve hot with extra butter beside them.'
    ],
    tips: [
      'Choose potatoes of one size so they finish together.',
      'If the salt will not all dissolve, stir the water over the heat before the potatoes go in.',
      'Serve within a few minutes, while the crust is dry.'
    ],
    pair: ['Grilled sausages', 'Barbecued chicken', 'Corn on the cob', 'Coleslaw'],
    store: 'Best eaten hot. Leftovers keep for 3 days in the fridge and are good sliced and fried in butter.'
  },

  'hot-fudge-sundae': {
    d: 'Vanilla ice cream under a warm, glossy chocolate sauce made from cream, cocoa, sugar and butter, finished with whipped cream and a cherry.',
    meta: 'Hot fudge sundae with a warm cocoa and cream fudge sauce. Four servings, ready in 20 minutes.',
    kw: ['hot fudge sundae', 'hot fudge sundae recipe', 'homemade hot fudge sauce', 'chocolate sundae with whipped cream', 'ice cream sundae'],
    why: `Hot sauce, cold ice cream, and about a minute to eat it. That is the whole idea of a sundae, and it only works if the contrast is sharp. The sauce goes on warm, not scalding, and the ice cream comes straight from a freezer set hard. Contrast is everything.

The fudge sauce here is cooked from cocoa, sugar, cream and butter, with a pinch of salt to stop it tasting flat. Whisk the cocoa and sugar into the cream before the pan goes on the heat, so there are no dry lumps to chase later. **Simmer for 5 minutes, no more.** Longer and the sauce sets to a toffee-like chew as it cools; shorter and it stays thin.

Scoop the ice cream into cold glasses so it melts slowly. Spoon the sauce over, add a swirl of whipped cream and top each glass with a cherry. The sauce keeps in a jar, and it reheats gently in a pan or the microwave. A cherry finishes the glass.`,
    ing: [
      '60 g cocoa powder',
      '150 g caster sugar',
      '200 ml double cream',
      '60 g butter',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '800 ml vanilla ice cream',
      '100 ml double cream, whipped',
      '4 maraschino cherries'
    ],
    st: [
      'Whisk the cocoa, sugar, 200 ml cream and the salt in a small pan until smooth.',
      'Bring to a gentle boil over a medium heat, stirring, then simmer for 5 minutes until glossy.',
      'Take the pan off the heat and stir in the butter and vanilla until melted.',
      'Scoop the ice cream into four cold glasses. Spoon over the warm sauce, add the whipped cream and a cherry to each.'
    ],
    tips: [
      'Chill the glasses in the freezer for 10 minutes first.',
      'Whisk the cocoa into the cream before heating to avoid dry lumps.',
      'If the sauce has thickened in the fridge, warm it gently and loosen with a splash of cream.'
    ],
    pair: ['Toasted nuts', 'Sprinkles', 'Salted caramel sauce', 'Banana'],
    store: 'Keeps the sauce for 7 days in a covered jar in the fridge. Reheat gently before serving.'
  },

  'huli-huli-chicken': {
    d: 'Chicken thighs marinated in pineapple juice, soy sauce and ginger, then grilled for 45 minutes and turned and basted until sticky.',
    meta: 'Huli huli chicken: Hawaiian-style chicken marinated in pineapple, soy and ginger, grilled for 45 minutes. Six servings, plus marinating.',
    kw: ['huli huli chicken', 'huli huli chicken recipe', 'hawaiian grilled chicken', 'pineapple soy grilled chicken', 'hawaiian bbq chicken'],
    why: `Turn it, baste it, turn it again. Huli huli means "turn turn" in Hawaiian, and that is the method: the chicken is turned again and again over the heat, basted each time, until the glaze builds up in thin, sticky coats. A sauce poured on at the end sits on the surface; a sauce brushed on ten times becomes part of the skin.

The marinade is sweet and salty, with pineapple juice, soy sauce, brown sugar, ketchup, ginger and garlic. **Marinate in the fridge, never on the counter**, for at least an hour. Bone-in thighs are the right cut, because they stay juicy over a long cook. Keep half of the marinade back before the raw chicken goes in, and boil that portion for the basting, so no sauce that touched raw meat reaches the plate. Patience at the grill pays.

Grill over medium heat, turning every few minutes and brushing with the boiled marinade. The chicken is done when the juices run clear and a thermometer reads 74C at the thickest part. Rest it for five minutes before serving.`,
    ing: [
      '1.5 kg bone-in chicken thighs',
      '250 ml pineapple juice',
      '120 ml soy sauce',
      '100 g brown sugar',
      '60 g ketchup',
      '2 tbsp grated fresh ginger',
      '4 garlic cloves, crushed',
      '2 tbsp rice vinegar',
      '2 spring onions, sliced, to serve'
    ],
    st: [
      'Whisk the pineapple juice, soy sauce, sugar, ketchup, ginger, garlic and vinegar. Pour half into a pan and set aside for the basting sauce.',
      'Put the chicken and the rest of the marinade in a bag or dish. Cover and marinate in the fridge for 1 hour.',
      'Boil the basting sauce for 5 minutes until slightly thickened. Heat the grill to medium.',
      'Grill the chicken for 45 minutes, turning every 5 minutes and brushing with the boiled sauce, until deep brown and 74C inside.',
      'Rest for 5 minutes, scatter with spring onions and serve.'
    ],
    tips: [
      'Turn the chicken often; the sugar in the glaze burns quickly on a hot grill.',
      'If the skin darkens too fast, move the pieces to a cooler part of the grill.',
      'Boil any marinade that touched raw chicken before it is used for basting.'
    ],
    pair: ['Steamed rice', 'Macaroni salad', 'Grilled pineapple', 'Coleslaw'],
    store: 'Keeps for 3 days in the fridge. Freeze cooked for 2 months. Reheat until piping hot.',
    rest: [60, 'Marinating']
  },

  'mojo-pork': {
    d: 'Pork shoulder marinated for 4 hours in sour orange, garlic and oregano, then roasted for 3 hours until the meat pulls apart.',
    meta: 'Mojo pork: shoulder marinated in garlic, orange and lime, roasted for 3 hours until tender. Eight servings, plus marinating.',
    kw: ['mojo pork', 'cuban mojo pork', 'mojo marinated pork shoulder', 'cuban roast pork', 'mojo pork recipe'],
    why: `Dry pork is the usual fate of this cut, and the fix is to leave the fat cap on and roast the shoulder slowly, covered for most of the time. Mojo is a Cuban marinade of garlic, sour citrus, oregano and cumin, and it needs to reach deep into a cut that is thick and rich enough to take it. Slow and covered is the rule.

Sour oranges are the traditional base. Where they are hard to find, orange juice mixed with lime juice gets close. Crush the garlic with salt into a paste first, so it dissolves into the juice instead of sitting in lumps. **Pierce the pork all over with a knife** so the marinade travels into the meat, then keep it in the fridge for at least four hours.

Roast at 160C, covered with foil, until a fork twists the meat apart. Take the foil off for the last 30 minutes to brown the top. Pour the pan juices over the shredded pork and serve with rice and black beans. Skim the fat first.`,
    ing: [
      '2 kg boneless pork shoulder',
      '10 garlic cloves',
      '2 tsp salt',
      '200 ml orange juice',
      '100 ml lime juice',
      '2 tsp dried oregano',
      '2 tsp ground cumin',
      '60 ml olive oil',
      '1 onion, thickly sliced'
    ],
    st: [
      'Crush the garlic with the salt to a paste. Mix with the orange juice, lime juice, oregano, cumin and oil.',
      'Pierce the pork all over with a sharp knife. Put it in a dish with the onion and pour over the mojo. Cover and marinate in the fridge for 4 hours, turning once.',
      'Heat the oven to 160C. Lift the pork into a roasting tin with the onion and marinade and cover tightly with foil.',
      'Roast for 2 hours 30 minutes. Remove the foil and roast for 30 minutes more until browned and tender.',
      'Rest for 15 minutes, then shred the meat and toss it with the pan juices.'
    ],
    tips: [
      'Marinate in the fridge only, and discard any marinade left in the dish.',
      'If the pork is not tender after the full time, re-cover and give it another 20 minutes.',
      'Skim the fat from the pan juices before spooning them over.'
    ],
    pair: ['Rice and black beans', 'Fried plantains', 'Pickled red onion', 'Yuca'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    rest: [255, 'Marinating and resting']
  },

  'walking-tacos': {
    d: 'Single-serve bags of corn chips opened and filled with seasoned beef, beans, cheese and lettuce, made in 25 minutes and eaten with a fork from the bag.',
    meta: 'Walking tacos: corn chip bags filled with taco beef, cheese and toppings, ready in 25 minutes. Six servings.',
    kw: ['walking tacos', 'walking tacos recipe', 'taco in a bag', 'frito walking tacos', 'walking taco bar'],
    why: `A hot taco in a bag, eaten standing up, is about as easy as feeding a crowd gets. Walking tacos are made for the stands at a school game, a bonfire or a big family party, where nobody has a plate or a table and everyone wants something hot. Everyone builds their own.

Cook the beef with the seasoning, and keep it hot in the pan. The rest is a toppings spread: cheese, shredded lettuce, tomato, sour cream and salsa, each in its own bowl so everyone builds their own. **Crush the chips lightly inside the sealed bag** before opening, which breaks them into forkable pieces and makes the filling spread through them. Keep the beef hot.

Cut the bag open along the side, not the top, so it makes a shallow boat. Spoon in the beef first, so the heat melts the cheese, then add the cold toppings. Eat with a fork, straight from the bag.`,
    ing: [
      '6 small bags corn chips (about 45 g each)',
      '600 g minced beef',
      '1 onion, finely chopped',
      '2 tbsp taco seasoning',
      '100 ml water',
      '200 g grated cheddar',
      '1 small lettuce, shredded',
      '2 tomatoes, diced',
      '150 g soured cream',
      '150 g salsa'
    ],
    st: [
      'Brown the beef and onion in a large pan for 8 minutes, breaking up the lumps.',
      'Stir in the taco seasoning and water and simmer for 5 minutes until the liquid has gone.',
      'Gently crush each bag of chips with your hand, then open the bag along one side.',
      'Spoon the hot beef into each bag, then top with the cheese, lettuce, tomatoes, soured cream and salsa.',
      'Eat straight from the bag with a fork.'
    ],
    tips: [
      'Keep the beef hot on the hob until the last bag is filled.',
      'Cut the bags along the side rather than the top for a wider opening.',
      'Set out the toppings in bowls so each person can choose.'
    ],
    pair: ['Pickled jalapeños', 'Black beans', 'Lime wedges', 'Guacamole'],
    store: 'Best made fresh. Keep leftover beef for 3 days in the fridge; assemble the bags only when serving.'
  },

  'sweet-and-sour-meatballs': {
    d: 'Small beef meatballs baked until browned, then simmered for 10 minutes in a glossy pineapple, ketchup and vinegar sauce; a classic party dish.',
    meta: 'Sweet and sour meatballs baked and glazed in a pineapple and vinegar sauce, cooked for 25 minutes. Eight servings.',
    kw: ['sweet and sour meatballs', 'sweet and sour meatballs recipe', 'party meatballs', 'pineapple meatballs', 'baked sweet and sour meatballs'],
    why: `Brown the meatballs in the oven, not the pan. That is the trick to a party batch: a tray of 40 meatballs bakes at once, with no turning and no spitting fat, and the sauce can simmer on the hob while they cook. Baking saves a lot of fuss.

The mixture is simple: beef, breadcrumbs, egg, onion and a little soy sauce for depth. Mix it with a light hand, because pressing too hard makes the meatballs tough. Roll them to about the size of a walnut so each one is a single bite. **Wet your hands between batches** and the mix will not stick. A light hand matters.

The sauce balances sweet and sour with pineapple juice, ketchup, brown sugar and cider vinegar, thickened with a little cornflour. Tip the baked meatballs into the sauce and simmer for ten minutes, until they are glazed all over. Serve in a warm dish with cocktail sticks or over rice. Leftovers reheat nicely.`,
    ing: [
      '600 g minced beef',
      '60 g dried breadcrumbs',
      '1 egg',
      '1/2 onion, grated',
      '1 tbsp soy sauce',
      '1/2 tsp salt',
      '250 ml pineapple juice',
      '120 g ketchup',
      '60 g brown sugar',
      '60 ml cider vinegar',
      '1 tbsp cornflour',
      '1 tbsp water'
    ],
    st: [
      'Heat the oven to 200C. Mix the beef, breadcrumbs, egg, onion, soy sauce and salt without overworking, and roll into about 32 small balls.',
      'Bake on a lined tray for 15 minutes until browned and cooked through.',
      'Meanwhile, simmer the pineapple juice, ketchup, sugar and vinegar in a wide pan for 5 minutes.',
      'Mix the cornflour with the water and stir into the sauce. Cook for 1 minute until glossy.',
      'Add the meatballs and simmer for 10 minutes, turning to coat, until glazed.'
    ],
    tips: [
      'Mix the meat gently so the meatballs stay tender.',
      'Cut one open to check the middle is no longer pink.',
      'Keep the finished meatballs warm in a low oven or slow cooker for a party.'
    ],
    pair: ['Steamed rice', 'Cocktail sticks', 'Pineapple chunks', 'Green beans'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months and reheat in the sauce.'
  },

  'chopped-cheese-sandwich': {
    d: 'Minced beef chopped and griddled with onion, melted under American cheese and piled into a soft roll with lettuce and tomato, ready in 20 minutes.',
    meta: 'Chopped cheese sandwich: griddled minced beef and onion under melted cheese in a soft roll. Two servings, ready in 20 minutes.',
    kw: ['chopped cheese sandwich', 'chopped cheese recipe', 'new york chopped cheese', 'bodega chopped cheese', 'minced beef and cheese sandwich'],
    why: `Chop it, don't just brown it. The defining move in a chopped cheese is working the meat on the griddle with a metal spatula, chopping and scraping until it breaks into tiny crumbs that mix with the onion and cook in their own fat.

Start with a hot, wide pan and a little oil. Add the beef and the onion together and press down hard. Chop through the mixture again and again with the edge of the spatula, turning it over so every bit browns. **Keep the pile together** so it stays a single mass; scattered crumbs dry out. Season with salt, pepper and a little garlic powder. Chop, never stir.

Shape the beef into a rectangle the size of the roll, lay the cheese on top and cover the pan for a minute to melt it. Slide the whole thing into a split, toasted roll and add lettuce, tomato and, if wanted, ketchup. Wrap it in foil for a minute and the roll will steam slightly. Keep the lettuce crisp.`,
    ing: [
      '300 g minced beef',
      '1/2 onion, finely chopped',
      '1 tbsp vegetable oil',
      '1/2 tsp garlic powder',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '4 slices American cheese',
      '200 g bread rolls (2 soft rolls), split and toasted',
      '2 tbsp shredded lettuce',
      '1 tomato, sliced'
    ],
    st: [
      'Heat the oil in a wide pan over a high heat. Add the beef and onion and chop with a metal spatula for 8 minutes until browned and finely crumbled.',
      'Season with the garlic powder, salt and pepper. Shape into two rectangles.',
      'Lay the cheese over the meat, cover the pan and cook for 1 minute until melted.',
      'Slide each portion into a toasted roll, add lettuce and tomato and serve hot.'
    ],
    tips: [
      'Use a stiff metal spatula; a wooden spoon will not chop the meat fine enough.',
      'Do not drain the fat; it flavours the onion.',
      'Wrap the filled roll in foil for a minute to soften the crust.'
    ],
    pair: ['Pickles', 'Potato chips', 'Hot sauce', 'Ketchup'],
    store: 'Best eaten at once. Cooked meat keeps for 2 days in the fridge.'
  },

  'clam-cakes': {
    d: 'Rhode Island fritters of chopped clams in a thick batter, deep-fried for 3 minutes until golden, crisp outside and soft within.',
    meta: 'Clam cakes: chopped clams in a thick batter, fried until golden. Six servings, ready in 30 minutes.',
    kw: ['clam cakes', 'rhode island clam cakes', 'clam cakes recipe', 'clam fritters', 'fried clam cakes'],
    why: `Batter decides everything here. A clam cake is closer to a savoury doughnut than a fritter, a puffed golden ball with a few pieces of clam hiding inside, and the batter has to be thick enough to hold a spoon upright.

Mix flour, baking powder, a little sugar and salt, then add the clams with their juice and the milk and egg. Stir only until there are no dry patches. **Rest the batter while the oil heats**, about ten minutes, so the baking powder starts working and the cakes puff.

Heat the oil to 180C and use a thermometer; the oil should not smoke. Drop in rounded spoonfuls and fry, turning once, until deep golden. Lift onto kitchen paper and serve straight away with lemon wedges. A clam cake goes best with a cup of chowder, and the two are usually eaten together. Eat them hot.`,
    ing: [
      '250 g plain flour',
      '2 tsp baking powder',
      '1 tsp sugar',
      '1 tsp salt',
      '300 g chopped clams, canned, with their juice',
      '120 ml whole milk',
      '1 egg',
      '1 tbsp chopped parsley',
      '1 litre vegetable oil, for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Whisk the flour, baking powder, sugar and salt in a bowl.',
      'Add the clams with their juice, the milk, egg and parsley. Stir until just combined and rest for 10 minutes.',
      'Heat the oil to 180C in a deep pan.',
      'Drop in rounded tablespoons of batter, a few at a time. Fry for 3 minutes, turning once, until deep golden.',
      'Drain on kitchen paper and serve hot with the lemon wedges.'
    ],
    tips: [
      'Keep the oil at 180C; too cool and the cakes soak it up.',
      'Fry in small batches so the temperature does not drop.',
      'Cut one open to check the middle is cooked through.'
    ],
    pair: ['Clam chowder', 'Lemon wedges', 'Tartare sauce', 'Coleslaw'],
    store: 'Best eaten straight away. Leftovers keep for 2 days in the fridge and reheat in a hot oven.'
  },

  'rhode-island-clam-chowder': {
    d: 'A thin, clear clam chowder of clam juice, bacon, potatoes and onion, simmered for 35 minutes with no cream and no flour.',
    meta: 'Rhode Island clam chowder: clear broth with clams, bacon and potatoes, simmered for 35 minutes. Six servings.',
    kw: ['rhode island clam chowder', 'clear clam chowder', 'clear broth clam chowder', 'clam chowder without cream', 'rhode island chowder recipe'],
    why: `On the first cold day of the year, this is the chowder to make when something lighter than the creamy kind is wanted. Rhode Island clam chowder is clear: a broth of clam juice, bacon fat, onion and potato, with the clams added at the end. Clear broth is the point.

Start with the bacon, rendering the fat slowly until crisp, and soften the onion in the fat. Add the potatoes, the clam juice and water, and simmer until the potatoes are tender but not falling apart. **Put the clams in for the last two minutes only.** Longer, and they go tough and rubbery.

There is no flour and no cream, so the soup is thin, and what carries the flavour is the clam juice and the bacon. Taste before salting, because the juice and bacon are salty already. Finish with parsley and plenty of black pepper, and serve with oyster crackers or crusty bread. Taste before salting.`,
    ing: [
      '150 g smoked bacon, diced',
      '1 large onion, chopped',
      '500 g waxy potatoes, diced 1 cm',
      '500 ml clam juice',
      '500 ml water',
      '500 g chopped clams, canned, drained',
      '1 bay leaf',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Cook the bacon in a large pot over a medium heat for 6 minutes until crisp. Lift it out and leave 2 tablespoons of fat in the pot.',
      'Soften the onion in the fat for 5 minutes, then add the potatoes, clam juice, water and bay leaf.',
      'Simmer for 20 minutes until the potatoes are just tender.',
      'Stir in the clams and bacon and cook for 2 minutes. Remove the bay leaf, season with pepper and add the parsley.'
    ],
    tips: [
      'Keep the clams out until the end so they stay tender.',
      'Taste before adding salt; the clam juice and bacon are already salty.',
      'Dice the potatoes small so they cook through in the time.'
    ],
    pair: ['Oyster crackers', 'Crusty bread', 'Clam cakes', 'Lemon wedges'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months, though the potatoes soften.'
  },

  'stuffies': {
    d: 'Large clams chopped and baked back in their shells with bread crumbs, chorizo and herbs for 25 minutes, a Rhode Island favourite.',
    meta: 'Stuffies: stuffed clams baked with chorizo, breadcrumbs and herbs for 25 minutes. Six servings.',
    kw: ['stuffies', 'stuffed clams', 'rhode island stuffies', 'stuffed quahogs', 'baked stuffed clams recipe'],
    why: `Scrub the clams first and steam them open; that is the one step that cannot be skipped. A stuffie is a large hard-shell clam, cooked, chopped and mixed with bread crumbs and spiced sausage, then packed back into half the shell and baked until the top is brown and crisp. Cleaning comes first.

Steam the clams in a covered pot with a splash of water for about ten minutes, until they open. **Throw away any that stay shut.** Lift out the meat, chop it fine and keep the juices. The shells are cleaned and used again as little baking dishes.

Fry the chorizo and onion together, then mix in the bread crumbs, clam, herbs and a few spoonfuls of the clam juice. The stuffing should hold together when pressed but not be wet. Pack it into the shells, dot with butter and bake until golden. Serve with lemon and a dash of hot sauce. A cold beer goes well.`,
    ing: [
      '1.5 kg clams (12 large hard-shell quahogs), scrubbed',
      '100 ml water',
      '120 g cured chorizo, finely diced',
      '1 onion, finely chopped',
      '1 tbsp olive oil',
      '100 g fresh breadcrumbs',
      '2 tbsp chopped parsley',
      '1/2 tsp smoked paprika',
      '30 g butter, cut into small pieces',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Put the clams and water in a large pot, cover and steam for 10 minutes until they open. Discard any that stay shut.',
      'Remove the meat, chop it finely and strain and keep 4 tablespoons of the juice. Reserve 12 half shells.',
      'Fry the chorizo and onion in the oil for 6 minutes. Mix in the breadcrumbs, parsley, paprika, clam meat and juice.',
      'Heat the oven to 200C. Pack the stuffing into the shells on a tray and dot with the butter.',
      'Bake for 25 minutes until golden on top. Serve with lemon.'
    ],
    tips: [
      'Discard any clam that stays closed after steaming.',
      'Keep the stuffing moist, but not wet; it dries in the oven.',
      'If the shells wobble, set them on a bed of crumpled foil.'
    ],
    pair: ['Lemon wedges', 'Hot sauce', 'Clam chowder', 'Green salad'],
    store: 'Best eaten warm. Keeps for 2 days in the fridge, or freeze unbaked for 1 month.'
  },

  'spiedies': {
    d: 'Cubes of chicken marinated for 4 hours in oil, vinegar, garlic and herbs, grilled for 15 minutes on skewers and served in a soft roll.',
    meta: 'Spiedies: marinated chicken skewers grilled for 15 minutes and served in soft rolls. Four servings, plus marinating.',
    kw: ['spiedies', 'spiedie sandwich', 'spiedies recipe', 'chicken spiedies', 'binghamton spiedies'],
    why: `Marinate the meat for longer than feels necessary. A spiedie is a skewered grilled meat sandwich, and the whole flavour comes from a vinegary marinade that has had hours to work: garlic, oil, red wine vinegar, mint, oregano and plenty of black pepper.

Cubes of chicken thigh or lamb go into the marinade in the fridge, never on the counter. **Four hours is the minimum**, and overnight is better still. The vinegar softens the meat as it flavours it, so the grilled cubes are tender with a sharp, herby edge. Time does the work.

Thread the cubes onto skewers, leaving a little space between them so the heat reaches every side. Grill over a medium-high heat, turning, until the edges are charred. The traditional way to serve is to hold a soft Italian roll around the skewer and pull the meat off into the bread, with a little of the marinade brushed on top. Eat from the skewer.`,
    ing: [
      '800 g boneless chicken thighs, in 3 cm cubes',
      '120 ml olive oil',
      '100 ml red wine vinegar',
      '6 garlic cloves, crushed',
      '2 tsp dried mint',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '320 g bread rolls (4 soft Italian rolls), split'
    ],
    st: [
      'Whisk the oil, vinegar, garlic, mint, oregano, salt and pepper. Pour 60 ml into a small dish and keep it separate.',
      'Mix the chicken with the rest of the marinade, cover and marinate in the fridge for 4 hours.',
      'Thread the chicken onto 8 skewers. Heat the grill to medium-high.',
      'Grill for 15 minutes, turning, until charred at the edges and 74C inside.',
      'Pull the chicken off into the rolls and brush with the reserved dressing.'
    ],
    tips: [
      'Keep the raw marinade separate from the dressing used on the cooked chicken.',
      'Soak wooden skewers in water for 30 minutes before threading.',
      'Do not crowd the skewers, or the meat steams rather than chars.'
    ],
    pair: ['Soft Italian rolls', 'Coleslaw', 'Potato salad', 'Pickles'],
    store: 'Keeps for 3 days in the fridge. Freeze cooked for 2 months.',
    rest: [240, 'Marinating']
  },

  'horseshoe-sandwich': {
    d: 'Toast topped with a burger patty, a heap of chips and a ladle of cheese sauce; a hearty, open-faced Illinois sandwich ready in 45 minutes.',
    meta: 'Horseshoe sandwich: toast, burger patty, chips and a warm cheese sauce, cooked for 25 minutes. Four servings.',
    kw: ['horseshoe sandwich', 'springfield horseshoe sandwich', 'horseshoe sandwich recipe', 'open faced burger with chips and cheese sauce', 'illinois horseshoe'],
    why: `A horseshoe is a plate of comfort stacked in order: toast at the bottom, a burger patty, a pile of hot chips and, over everything, a ladle of cheese sauce. It is eaten with a knife and fork and not at all politely. Napkins are essential.

Make the cheese sauce first, so it is waiting. It is a simple white sauce of butter, flour and milk with mustard and sharp cheddar stirred in, and **it must go on hot**, because a cooling cheese sauce turns thick and glue-like. Keep it on the lowest heat, stirring now and then. Warm plates help.

Bake the chips until crisp, cook the patties and toast the bread. Build each plate by laying two slices of toast side by side, placing a patty on each, heaping the chips on top and pouring the sauce over. Serve at once, while the chips are still crisp underneath the sauce. Work fast at the end.`,
    ing: [
      '600 g frozen chips',
      '500 g minced beef',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '8 slices thick white toast',
      '40 g butter',
      '40 g plain flour',
      '400 ml whole milk',
      '200 g grated sharp cheddar',
      '1 tsp English mustard'
    ],
    st: [
      'Bake the chips at 220C for 25 minutes until crisp, turning once.',
      'Shape the beef into 4 patties and season with the salt and pepper. Fry for 4 minutes on each side. Toast the bread.',
      'Melt the butter in a pan, stir in the flour for 1 minute, then add the milk slowly, whisking. Simmer for 5 minutes until thick.',
      'Off the heat, stir in the cheese and mustard until smooth.',
      'Lay 2 slices of toast on each plate, top with a patty, a heap of chips and the hot cheese sauce.'
    ],
    tips: [
      'Add the milk slowly and whisk to keep the sauce smooth.',
      'Keep the cheese sauce warm and loose, adding milk if it tightens.',
      'Serve at once; the chips go soft under the sauce within minutes.'
    ],
    pair: ['Pickles', 'Coleslaw', 'Fried onions', 'Hot sauce'],
    store: 'Best eaten straight away. The cheese sauce keeps for 2 days in the fridge.'
  },

  'maxwell-street-polish': {
    d: 'A grilled Polish sausage on a bun topped with fried onions, yellow mustard and sport peppers, ready in 20 minutes.',
    meta: 'Maxwell Street Polish: grilled sausage on a bun with fried onions and mustard. Four servings, ready in 20 minutes.',
    kw: ['maxwell street polish', 'maxwell street polish recipe', 'polish sausage with grilled onions', 'chicago polish sausage sandwich', 'polish sausage with mustard'],
    why: `Think of a hot dog, then swap the frankfurter for something with more bite. A Maxwell Street Polish is a thick, smoked Polish sausage, split and grilled, laid in a soft bun and loaded with onions that have been cooked until they are brown and sweet. Simple wins here.

The onions come first, because they take the longest. Slice them thin and cook them in a little oil over a medium heat for about ten minutes until they colour, stirring so they do not catch. **Keep them in a pile on the side** to stay warm while the sausages cook. Low and slow is the rule.

Split the sausages lengthways, not all the way through, so they lie flat and brown on the cut side. Grill or pan-fry until browned and heated through. Warm the buns, pile in the sausage and onions, and finish with yellow mustard and a few sport peppers.`,
    ing: [
      '4 smoked Polish sausages (about 150 g each)',
      '2 large onions, sliced thin',
      '1 tbsp vegetable oil',
      '4 soft hot dog buns',
      '4 tbsp yellow mustard',
      '8 sport peppers or pickled green chillies'
    ],
    st: [
      'Heat the oil in a pan over a medium heat. Cook the onions for 10 minutes until soft and browned.',
      'Split each sausage lengthways, almost through. Heat a grill pan over a medium-high heat.',
      'Cook the sausages cut side down for 3 minutes, then turn and cook for 3 minutes more until browned.',
      'Warm the buns. Fill each with a sausage, the onions, mustard and sport peppers.'
    ],
    tips: [
      'Cook the onions slowly; fast heat burns the edges before the middle softens.',
      'Split the sausage so it lies flat and browns evenly.',
      'Steam the buns for 30 seconds in a covered pan for a softer bite.'
    ],
    pair: ['Chips', 'Pickles', 'Coleslaw', 'Cold beer'],
    store: 'Best eaten at once. Cooked onions keep for 3 days in the fridge.'
  },

  'hatch-chile-cheeseburger': {
    d: 'A beef burger topped with melted pepper jack and roasted, peeled green chiles, grilled for 20 minutes and served on a toasted bun.',
    meta: 'Hatch chile cheeseburger: grilled beef patties with roasted green chiles and melted pepper jack. Four servings, ready in 35 minutes.',
    kw: ['hatch chile cheeseburger', 'green chile cheeseburger', 'new mexico green chile cheeseburger', 'hatch green chile burger', 'roasted green chile burger'],
    why: `Hatch chiles are at their best in late summer, when the roasting drums are going outside shops across the Southwest, and the smell of blistering skins is hard to ignore. The chiles are the reason for this burger: smoky, a little sweet and mild to medium in heat. Roasting is half the job.

If fresh chiles are not to hand, a can or jar of roasted green chiles works, so the recipe is not tied to the season. For fresh ones, blacken the skins under a hot grill, steam them in a covered bowl for ten minutes, then peel off the skin and remove the stems and seeds. **Do not rinse them**; the water takes the flavour with it. Peel them gently.

Form the patties loosely and make a shallow dip in the middle of each. Grill over a hot fire, topping with pepper jack in the last minute to melt. Pile the chiles on top, on a toasted bun with lettuce and tomato. Toast the bun.`,
    ing: [
      '600 g minced beef (20% fat)',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 slices pepper jack cheese',
      '200 g roasted green chillies, peeled and chopped',
      '4 hamburger buns, toasted',
      '4 lettuce leaves',
      '1 tomato, sliced',
      '2 tbsp mayonnaise'
    ],
    st: [
      'Divide the beef into 4 loose patties about 2 cm thick. Press a shallow dip in the middle of each and season with the salt and pepper.',
      'Heat a grill or griddle to high. Cook the patties for 5 minutes on one side.',
      'Turn, cook for 4 minutes, and lay the cheese on top for the last minute to melt.',
      'Spread mayonnaise on the toasted buns, add the lettuce and tomato, then the patties, and spoon the chiles over the cheese.'
    ],
    tips: [
      'Handle the beef as little as possible so the patties stay tender.',
      'Press a dip in each patty to stop it puffing up in the middle.',
      'If using canned chiles, pat them dry before topping the burgers.'
    ],
    pair: ['Sweet potato fries', 'Coleslaw', 'Pickles', 'Cold lager'],
    store: 'Best eaten fresh. Cooked patties keep for 3 days in the fridge.'
  },

  'anadama-bread': {
    d: 'A soft loaf of wheat flour, cornmeal and molasses, kneaded and risen twice, then baked for 40 minutes until deep golden.',
    meta: 'Anadama bread: a yeast loaf with cornmeal and molasses, baked for 40 minutes. Ten slices, plus rising.',
    kw: ['anadama bread', 'anadama bread recipe', 'cornmeal molasses bread', 'new england anadama bread', 'molasses cornmeal loaf'],
    why: `Plain brown on the outside, with a secret inside: cornmeal and molasses, cooked together first into a thick porridge. That step softens the cornmeal, so the finished crumb is moist rather than gritty. The porridge step matters.

Pour boiling water over the cornmeal, molasses and butter and let them cool until warm. This is the heart of the recipe. **Do not add the yeast until the mixture is lukewarm**, because a hot porridge kills it. Stir in the yeast, salt and most of the flour, then knead for ten minutes until smooth and slightly tacky.

Leave the dough to rise until doubled, shape it into a loaf and let it rise again in the tin. A dusting of cornmeal on the top gives the crust a rustic look. Bake until the loaf sounds hollow when tapped underneath. It slices well when fully cool, and makes very good toast. Wait for it to cool.`,
    ing: [
      '80 g fine cornmeal',
      '60 ml molasses',
      '40 g butter',
      '250 ml boiling water',
      '7 g fast action yeast',
      '1 1/2 tsp salt',
      '400 g strong white bread flour',
      '1 tbsp cornmeal, for dusting'
    ],
    st: [
      'Put the cornmeal, molasses and butter in a large bowl. Pour over the boiling water, stir and cool for 15 minutes until lukewarm.',
      'Stir in the yeast and salt, then add the flour and mix to a dough. Knead for 10 minutes until smooth.',
      'Cover and leave to rise for 1 hour until doubled. Shape into a loaf and place in a greased 900 g tin.',
      'Leave to rise for 30 minutes. Heat the oven to 190C, sprinkle the top with cornmeal and bake for 40 minutes until hollow-sounding.',
      'Cool on a rack before slicing.'
    ],
    tips: [
      'Cool the cornmeal mixture to lukewarm before adding the yeast.',
      'The dough is slightly sticky; use oiled hands rather than more flour.',
      'If the crust browns too fast, cover the loaf loosely with foil.'
    ],
    pair: ['Butter', 'Baked beans', 'Sharp cheddar', 'Chowder'],
    store: 'Keeps for 3 days wrapped at room temperature. Freeze sliced for 2 months.',
    rest: [105, 'Cooling and rising']
  },

  'pretzel-buns': {
    d: 'Soft, chewy buns shaped, dipped briefly in a baking soda bath and baked for 20 minutes to a dark, glossy crust.',
    meta: 'Pretzel buns: yeast buns dipped in baking soda water and baked for 20 minutes. Eight buns, plus rising.',
    kw: ['pretzel buns', 'pretzel buns recipe', 'homemade pretzel rolls', 'soft pretzel burger buns', 'baking soda bath buns'],
    why: `The baking soda bath, not the shape, is what makes a pretzel a pretzel. A short dip in boiling water with bicarbonate of soda sets the surface of the dough and, in the oven, turns it deep brown with the chewy skin and sharp flavour that plain bread never has. Alkali is the secret.

The dough is a simple enriched one: flour, yeast, milk, butter and a little sugar. Knead until smooth and let it rise until doubled. Divide, shape into tight rounds and rest them again for twenty minutes. **Work in small batches at the bath**, because the buns turn slack if left to soak. Speed matters at the bath.

Lower each bun into the simmering bath for 30 seconds per side, lift it out with a slotted spoon and set it on the tray. Slash the top, brush with egg and scatter with coarse salt. Bake until dark mahogany. Always wear gloves when handling the bath, as the liquid is caustic enough to irritate skin.`,
    ing: [
      '500 g strong white bread flour',
      '7 g fast action yeast',
      '2 tsp sugar',
      '1 1/2 tsp salt',
      '300 ml whole milk, warm',
      '40 g butter, softened',
      '1.5 litres water',
      '60 g bicarbonate of soda',
      '1 egg, beaten',
      '1 tbsp coarse salt'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the warm milk and butter and mix to a dough. Knead for 10 minutes until smooth.',
      'Cover and leave to rise for 1 hour until doubled. Divide into 8 pieces and shape into tight rounds. Rest for 20 minutes.',
      'Heat the oven to 220C. Bring the water and bicarbonate of soda to a simmer in a wide pan.',
      'Lower the buns in, 2 or 3 at a time, for 30 seconds on each side. Lift out onto a lined tray.',
      'Slash the tops, brush with the egg, scatter with salt and bake for 20 minutes until deep brown.'
    ],
    tips: [
      'Use a stainless steel or enamel pan for the bath, not aluminium.',
      'Wear gloves; the bath is alkaline and can irritate skin.',
      'Slash the tops deeply so the buns open as they bake.'
    ],
    pair: ['Burgers', 'Bratwurst', 'Pulled pork', 'Mustard'],
    store: 'Best on the day. Keeps for 2 days wrapped; freeze for 2 months.',
    rest: [80, 'Rising']
  },

  'classic-hollandaise': {
    d: 'A warm, buttery sauce of egg yolks, melted butter and lemon, whisked over gentle heat for 10 minutes until thick enough to coat a spoon.',
    meta: 'Hollandaise sauce: egg yolks, butter and lemon whisked over gentle heat for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['how to make hollandaise', 'hollandaise from scratch', 'classic hollandaise recipe', 'hollandaise with pasteurised eggs', 'warm lemon butter sauce'],
    why: `Hollandaise is warm butter held in suspension by egg yolks, and everything that goes wrong with it is a matter of temperature. Too hot and the yolks scramble; too cool and the butter will not take. The sauce wants a bowl set over barely simmering water, and a steady whisk. Heat is the enemy.

Whisk the yolks with a spoonful of water and the lemon juice until they thicken and leave a trail, which takes a few minutes over the heat. **Lift the bowl off the pan whenever the mixture feels hot** to the touch. Then add the melted butter a spoonful at a time, whisking until each is absorbed. Go slowly with the butter.

Use pasteurised eggs, because the yolks are not taken to 71C and are only warmed through. Season with salt, a pinch of cayenne and a little more lemon juice to sharpen it. If it splits, whisk a spoonful of cold water into a clean bowl and add the split sauce a drop at a time. Serve it warm.`,
    ing: [
      '3 pasteurised egg yolks',
      '1 tbsp water',
      '1 tbsp lemon juice',
      '150 g butter, melted and warm',
      '1/4 tsp salt',
      '1 pinch cayenne pepper'
    ],
    st: [
      'Set a heatproof bowl over a pan of barely simmering water, not touching it. Add the yolks, water and lemon juice.',
      'Whisk for 4 minutes until pale, thick and leaving a trail. Lift the bowl off the heat if it gets too hot.',
      'Whisk in the warm melted butter, a spoonful at a time, over a low heat until the sauce is glossy and thick.',
      'Season with the salt, cayenne and extra lemon juice to taste. Serve at once.'
    ],
    tips: [
      'Keep the water at a bare simmer; a rolling boil will scramble the yolks.',
      'If the sauce splits, whisk it into a spoonful of cold water drop by drop.',
      'Serve within 30 minutes; the sauce does not reheat well.'
    ],
    pair: ['Eggs Benedict', 'Asparagus', 'Poached salmon', 'Steamed broccoli'],
    store: 'Best used at once. Do not keep, and do not reheat.'
  },

  'compound-butter': {
    d: 'Soft butter mixed with garlic, parsley and lemon, rolled into a log and chilled; a quick way to flavour steak, fish and bread.',
    meta: 'Compound butter with garlic, parsley and lemon, rolled and chilled. Eight servings, plus chilling.',
    kw: ['compound butter', 'garlic herb butter', 'compound butter recipe', 'herb butter for steak', 'lemon parsley butter'],
    why: `Butter is about to get a lot more useful. A compound butter is soft butter beaten with herbs, garlic and lemon, rolled into a log, chilled and sliced into rounds. One log in the freezer turns a plain steak, a piece of fish or a hot corn cob into something finished. Soft butter, not melted.

Use butter that is properly soft, not melted. It should take a finger print without squashing. Beat it with the garlic, parsley, lemon zest and a pinch of salt until it is smooth and even. **Chop the parsley finely and dry it well**, because wet herbs make the butter weep and spoil more quickly.

Spoon it onto greaseproof paper, roll it into a tight log and twist the ends. Chill until firm. A slice melting on a hot steak makes its own sauce. Because the mixture contains raw garlic, keep it in the fridge for no more than four days and freeze what will not be used before then.`,
    ing: [
      '250 g unsalted butter, softened',
      '2 garlic cloves, crushed',
      '3 tbsp finely chopped parsley',
      '1 tsp lemon zest',
      '1 tsp lemon juice',
      '1/2 tsp salt'
    ],
    st: [
      'Beat the butter with the garlic, parsley, lemon zest, lemon juice and salt until smooth and evenly mixed.',
      'Spoon onto a sheet of greaseproof paper and roll into a log about 4 cm thick. Twist the ends to seal.',
      'Chill for 1 hour until firm. Slice into rounds to serve.'
    ],
    tips: [
      'Soften the butter at room temperature; do not melt it.',
      'Dry the parsley thoroughly so the butter does not weep.',
      'Slice and freeze rounds on a tray, then bag them, to use from frozen.'
    ],
    pair: ['Grilled steak', 'Baked fish', 'Corn on the cob', 'Warm bread'],
    store: 'Keeps for 4 days in the fridge, because it contains raw garlic. Freeze for 3 months.',
    rest: [60, 'Chilling']
  }
};
