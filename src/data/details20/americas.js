'use strict';

/**
 * Volume twenty — Mexico, the United States, Peru, Jamaica, Brazil and
 * Honduras.
 *
 * Nineteen. The Mexican entries are the sweet and the street ends of the menu
 * that forty-eight Mexican recipes had somehow left out: conchas, paletas,
 * esquites, gorditas. Peru had five entries for one of the most written-about
 * cuisines in the world and neither papa a la huancaína nor anticuchos.
 *
 * The American ones are diner and deli food. Chili cheese fries, a po' boy, a
 * French dip, a patty melt: none of them refined and all of them looked up
 * constantly.
 */

module.exports = {
  'brigadeiro': {
    d: 'Condensed milk and cocoa cooked down until a spoon leaves a clean track, rolled in sprinkles. Every Brazilian birthday.',
    meta: 'Brazilian brigadeiro of condensed milk, cocoa and butter cooked to a thick fudge, rolled into balls and coated in sprinkles.',
    kw: ['brigadeiro', 'brigadeiro recipe', 'brazilian chocolate truffles', 'condensed milk fudge balls', 'festa brigadeiro'],
    why: 'The test is the spoon track: drag a wooden spoon across the base of the pan and the mixture should part and stay parted for a full two seconds before closing. Short of that they will not hold a ball; past it they set hard and crack. It takes about twelve minutes on a low heat and there is no visual shortcut — you have to keep testing.',
    ing: [
      '400 g condensed milk',
      '4 tbsp cocoa powder, sifted',
      '30 g unsalted butter, plus extra for your hands',
      '0.25 tsp fine sea salt',
      '100 g chocolate sprinkles'
    ],
    st: [
      'Put the condensed milk, sifted cocoa, butter and salt in a heavy non-stick pan.',
      'Cook over a low heat, stirring constantly with a wooden spoon, for 12 minutes.',
      'Scrape the base and the corners the whole time so nothing catches.',
      'Test it: drag the spoon across the base. When the mixture parts and stays parted for 2 seconds, it is done.',
      'Scrape onto a buttered plate and spread it out.',
      'Cool completely at room temperature, about 1 hour. Do not refrigerate.',
      'Butter your hands lightly.',
      'Take teaspoons of the mixture and roll into balls between your palms.',
      'Roll each ball in the sprinkles until completely coated.',
      'Set in small paper cases and serve at room temperature.'
    ],
    tips: [
      'The two-second spoon track is the only reliable test.',
      'Cool at room temperature, never in the fridge.',
      'Butter your hands or you will fight it.'
    ],
    pair: ['A birthday party', 'Strong coffee', 'Beijinhos'],
    store: 'Keeps 5 days in a tin at room temperature.',
    nut: [95, 2, 15, 3, 0, 14, 30],
    rest: [60, 'cooling before rolling']
  },

  'papa-a-la-huancaina': {
    d: 'Boiled potatoes under a yellow chilli and cheese sauce, cold, with olives and egg. Thirty-five minutes.',
    meta: 'Peruvian papa a la huancaína of boiled potatoes under a blended ají amarillo, cheese and cracker sauce with egg and olives.',
    kw: ['papa a la huancaina', 'huancaina sauce', 'peruvian potato starter', 'aji amarillo sauce', 'peruvian yellow sauce'],
    why: 'Cream crackers are the thickener and they are not a substitute for anything — they give the sauce its particular body, somewhere between a dip and a custard, without any flour or cooking. Blend the ají amarillo paste with the oil first so it emulsifies, then add the cheese and crackers. Serve the sauce cold over cold potatoes; warm, it thins and slides off.',
    ing: [
      '800 g waxy potatoes',
      '1 tbsp fine sea salt, for the water',
      '4 tbsp ají amarillo paste',
      '150 g queso fresco or feta',
      '8 cream crackers',
      '150 ml evaporated milk',
      '4 tbsp vegetable oil',
      '2 garlic cloves',
      '0.5 onion, roughly chopped',
      '0.5 tsp fine sea salt',
      '3 hard-boiled eggs, quartered',
      '12 black olives',
      '4 lettuce leaves'
    ],
    st: [
      'Boil the potatoes whole in salted water for 20 minutes, until tender.',
      'Drain, cool completely, then peel and cut into thick slices.',
      'Fry the onion and garlic in 1 tbsp of the oil for 5 minutes, then cool.',
      'Blend the ají amarillo paste with the remaining oil until it emulsifies.',
      'Add the fried onion and garlic, the cheese, crackers, evaporated milk and salt.',
      'Blend until completely smooth and the thickness of double cream.',
      'Chill the sauce 20 minutes.',
      'Lay a lettuce leaf on each plate and arrange the potato slices over.',
      'Pour the cold sauce generously over the potatoes.',
      'Garnish with quartered egg and olives and serve cold.'
    ],
    tips: [
      'Cream crackers, and no substitute.',
      'Emulsify the chilli paste with the oil before anything else.',
      'Everything cold, sauce included.'
    ],
    pair: ['Ceviche', 'A pisco sour', 'Anticuchos'],
    store: 'The sauce keeps 3 days refrigerated and thickens; loosen with milk.',
    nut: [485, 15, 44, 28, 5, 7, 1080]
  },

  'anticuchos': {
    d: 'Beef heart marinated in ají panca and vinegar, grilled hard over charcoal. Lima\'s street food, and the marinade is the whole thing.',
    meta: 'Peruvian anticuchos of beef heart marinated in ají panca, garlic, cumin and vinegar, skewered and grilled over high heat.',
    kw: ['anticuchos', 'anticuchos recipe', 'peruvian beef heart skewers', 'aji panca marinade', 'peruvian street food'],
    why: 'Beef heart is very lean muscle and it has two states: rare and ruined. Two minutes a side over the fiercest heat you can build, and off. The vinegar in the marinade does the tenderising over several hours, which is why the marinating time is not negotiable, but leaving it overnight makes the surface mushy — four to six hours is the window.',
    ing: [
      '800 g beef heart, trimmed and in 4 cm cubes',
      '5 tbsp ají panca paste',
      '4 tbsp red wine vinegar',
      '8 garlic cloves, crushed',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '1.5 tsp fine sea salt',
      '1 tsp ground black pepper',
      '4 tbsp vegetable oil',
      '16 bamboo skewers, soaked 30 minutes',
      '4 boiled potatoes, thickly sliced',
      '4 pieces boiled corn on the cob',
      '2 tbsp ají amarillo paste, for the sauce',
      '2 tbsp mayonnaise'
    ],
    st: [
      'Trim every scrap of sinew and fat from the heart and cut into even 4 cm cubes.',
      'Mix the ají panca paste, vinegar, garlic, cumin, oregano, salt, pepper and half the oil.',
      'Turn the meat through it and refrigerate 5 hours.',
      'Thread 3 or 4 cubes onto each soaked skewer, not packed tight.',
      'Mix the remaining marinade with the rest of the oil for basting.',
      'Build a charcoal fire until the coals are white, or heat a griddle until it smokes.',
      'Grill the skewers 2 minutes on the first side without moving them.',
      'Turn, baste, and grill 2 minutes more. They should be charred outside and pink within.',
      'Mix the ají amarillo paste with the mayonnaise for a dipping sauce.',
      'Serve with the boiled potato and corn and the sauce alongside.'
    ],
    tips: [
      'Trim all the sinew. It never becomes tender.',
      'Two minutes a side, no more.',
      'Five hours in the marinade, not overnight.'
    ],
    pair: ['Boiled potato and corn', 'Chicha morada', 'Cold beer'],
    store: 'Marinated raw skewers keep 1 day refrigerated. Cooked, eat at once.',
    nut: [385, 42, 24, 13, 3, 4, 1080],
    rest: [330, 'marinating and soaking the skewers']
  },

  'jerk-pork': {
    d: 'Pork shoulder in a scotch bonnet and allspice marinade, cooked slowly over smoke until the outside is black and the inside gives.',
    meta: 'Jamaican jerk pork marinated in scotch bonnet, allspice, thyme and spring onion, slow-grilled over pimento wood or charcoal.',
    kw: ['jerk pork', 'jerk pork recipe', 'jamaican jerk marinade', 'jerk seasoning', 'scotch bonnet marinade'],
    why: 'Allspice — pimento — is the backbone and it goes in three ways: ground in the marinade, whole berries crushed into the fire, and ideally pimento wood on the coals. Scotch bonnet is not interchangeable with any other chilli either; it is fruity as well as hot and the fruit is half the flavour. Cook it slow and away from the direct flame, or the sugar in the marinade burns before the pork is done.',
    ing: [
      '1.5 kg pork shoulder, in thick slabs',
      '4 scotch bonnet chillies, stemmed',
      '8 spring onions, roughly chopped',
      '6 garlic cloves',
      '5 cm ginger',
      '3 tbsp ground allspice',
      '2 tbsp fresh thyme leaves',
      '2 tbsp dark brown sugar',
      '3 tbsp light soy sauce, or tamari to keep it gluten-free',
      '4 tbsp lime juice',
      '3 tbsp vegetable oil',
      '2 tsp ground cinnamon',
      '1 tsp grated nutmeg',
      '2 tsp fine sea salt',
      '1 tsp ground black pepper',
      '2 tbsp whole allspice berries, for the fire'
    ],
    st: [
      'Blend the scotch bonnets, spring onions, garlic, ginger, ground allspice, thyme, sugar, soy sauce, lime juice, oil, cinnamon, nutmeg, salt and pepper to a coarse paste.',
      'Score the pork slabs and rub the paste into every surface and cut.',
      'Refrigerate 6 hours.',
      'Build a charcoal fire and bank the coals to one side.',
      'Crush the whole allspice berries and scatter them over the coals.',
      'Lay the pork on the cool side of the grill, not over the coals.',
      'Cover and cook 60 minutes, turning every 15 minutes.',
      'Move the pork over the direct heat for the last 5 minutes to blacken the outside.',
      'Rest 10 minutes on a board.',
      'Chop into rough pieces with a cleaver, through the bark, and serve.'
    ],
    tips: [
      'Indirect heat for the hour, direct for the last five minutes.',
      'Allspice berries on the coals.',
      'Chop it rough through the bark — jerk is not carved.'
    ],
    pair: ['Rice and peas', 'Festival dumplings', 'Red Stripe'],
    store: 'Keeps 3 days refrigerated and is excellent cold. Freezes 3 months.',
    nut: [645, 46, 14, 45, 3, 9, 1290],
    rest: [360, 'marinating']
  },

  'jamaican-patties': {
    d: 'Turmeric pastry folded round spiced minced beef and baked. The colour comes from the pastry, not the filling.',
    meta: 'Jamaican beef patties of turmeric and suet shortcrust folded around spiced minced beef with scotch bonnet and thyme.',
    kw: ['jamaican beef patties', 'jamaican patty recipe', 'beef patty pastry', 'caribbean patties', 'turmeric pastry'],
    why: 'The filling must be completely cold before it goes into the pastry — warm filling melts the fat in the dough and you lose the flakiness entirely. Make it the day before if you can. The breadcrumbs in the filling are not padding either: they absorb the gravy so it stays inside the patty rather than boiling out through the crimp.',
    ing: [
      '400 g plain flour',
      '2 tsp ground turmeric',
      '1 tsp curry powder',
      '1 tsp fine sea salt, for the pastry',
      '170 g cold vegetable shortening, diced',
      '120 ml ice-cold water',
      '500 g minced beef',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '4 spring onions, finely sliced',
      '1 scotch bonnet, deseeded and finely chopped',
      '4 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '1 tbsp curry powder, for the filling',
      '1 tsp ground allspice',
      '1.5 tsp fine sea salt, for the filling',
      '4 tbsp fresh breadcrumbs',
      '200 ml beef stock',
      '1 egg, beaten'
    ],
    st: [
      'Rub the cold shortening into the flour, turmeric, curry powder and pastry salt until it looks like coarse crumbs with some larger pieces.',
      'Add the ice-cold water and bring together into a dough without kneading. Wrap and chill 45 minutes.',
      'Heat the oil and fry the onion for 6 minutes, then add the spring onions, scotch bonnet, garlic and thyme for 2 minutes.',
      'Add the mince and cook 10 minutes, breaking it up, until browned and dry.',
      'Stir in the filling curry powder, allspice and salt and cook 1 minute.',
      'Add the breadcrumbs and stock and simmer 8 minutes, until thick with no free liquid.',
      'Cool the filling completely, at least 1 hour.',
      'Roll the pastry to 3 mm and cut 16 cm rounds.',
      'Put filling on one half of each round, fold over, and crimp the edge firmly with a fork.',
      'Brush with beaten egg and bake at 190C for 30 minutes, until deep gold.'
    ],
    tips: [
      'Cold filling into cold pastry.',
      'Breadcrumbs hold the gravy in.',
      'Crimp firmly or they leak.'
    ],
    pair: ['A coco bread roll', 'Hot pepper sauce', 'Ting'],
    store: 'Freeze unbaked for 3 months and bake from frozen, adding 10 minutes.',
    nut: [495, 18, 42, 29, 3, 3, 890],
    rest: [105, 'chilling the pastry and cooling the filling']
  },

  'baleadas': {
    d: 'A thick flour tortilla folded over refried beans, cream and crumbled cheese. Honduras\'s breakfast, and thirty minutes.',
    meta: 'Honduran baleadas of thick homemade flour tortillas folded over refried beans, crema and crumbled salty cheese.',
    kw: ['baleadas', 'baleadas recipe', 'honduran baleadas', 'flour tortilla beans cheese', 'central american breakfast'],
    why: 'The tortilla is thicker and softer than a Mexican one and it wants to be, because it is folded rather than rolled and has to hold without cracking. Rest the dough for half an hour so the gluten relaxes and it rolls out without springing back, and cook them on a dry pan just until they puff and blister — a second too long and they go crisp, which is the wrong texture entirely.',
    ing: [
      '350 g plain flour',
      '1 tsp baking powder',
      '1 tsp fine sea salt',
      '60 g lard or vegetable shortening',
      '200 ml warm water',
      '400 g cooked red kidney or black beans',
      '2 tbsp vegetable oil',
      '0.5 onion, finely chopped',
      '2 garlic cloves, crushed',
      '0.5 tsp ground cumin',
      '0.5 tsp fine sea salt, for the beans',
      '150 ml crema or soured cream',
      '120 g queso duro or feta, crumbled',
      '1 avocado, sliced',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Rub the lard into the flour, baking powder and salt.',
      'Add the warm water and knead 6 minutes to a soft, smooth dough.',
      'Cover and rest 30 minutes.',
      'Heat the oil and fry the onion for 5 minutes, then the garlic and cumin for 1 minute.',
      'Add the beans with a splash of their liquid and the bean salt and mash to a thick paste over the heat, about 6 minutes.',
      'Divide the dough into 8 and roll each into a round about 18 cm across and 3 mm thick.',
      'Cook each on a dry pan over a medium-high heat for 45 seconds a side, until puffed and blistered but still soft.',
      'Keep them wrapped in a cloth as you go.',
      'Spread each tortilla with the warm bean paste.',
      'Add crema, crumbled cheese, avocado and coriander, fold in half and eat at once.'
    ],
    tips: [
      'Thick and soft, not thin and crisp.',
      'Rest the dough or it fights you.',
      'Forty-five seconds a side and into a cloth.'
    ],
    pair: ['Scrambled eggs', 'Fried plantain', 'Strong coffee'],
    store: 'Cooked tortillas keep 2 days wrapped. Assemble to order.',
    nut: [545, 17, 62, 26, 9, 4, 1080]
  },

  'chili-cheese-fries': {
    d: 'Chips under beef chilli and melted cheese, eaten with a fork before the bottom layer surrenders. Forty-five minutes.',
    meta: 'American chili cheese fries of twice-cooked chips topped with a thick beef chilli, melted cheese and spring onion.',
    kw: ['chili cheese fries', 'chili cheese fries recipe', 'loaded fries', 'cheese fries', 'beef chilli topping'],
    why: 'The chilli has to be thick enough to sit on the chips rather than run through them — simmer it down until a spoon dragged across the pan leaves a track. And the chips must be twice-cooked: once at 140C to cook through, once at 190C to armour the outside. A single fry gives you a chip that is soft before the chilli even arrives.',
    ing: [
      '900 g Maris Piper potatoes, in 1 cm chips',
      '1 litre vegetable oil, for frying',
      '400 g minced beef',
      '2 tbsp vegetable oil, for the chilli',
      '1 onion, finely chopped',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '1 tbsp ground cumin',
      '1 tbsp smoked paprika',
      '2 tsp dried oregano',
      '1 tsp cayenne pepper',
      '400 g tinned chopped tomatoes',
      '200 g tinned kidney beans, drained',
      '1.5 tsp fine sea salt',
      '200 g mature Cheddar, grated',
      '4 spring onions, sliced',
      '4 tbsp soured cream',
      '2 tbsp pickled jalapeños'
    ],
    st: [
      'Rinse the chips in cold water, then dry them completely on a cloth.',
      'Heat the frying oil to 140C and fry the chips for 6 minutes, until soft but pale. Lift out and cool 15 minutes.',
      'Meanwhile heat the chilli oil and brown the mince for 8 minutes without stirring much.',
      'Add the onion and cook 5 minutes, then the garlic and tomato purée for 2 minutes.',
      'Add the cumin, paprika, oregano and cayenne and cook 30 seconds.',
      'Add the tomatoes, beans and salt and simmer 20 minutes, until a spoon leaves a track.',
      'Raise the oil to 190C and fry the chips again for 4 minutes, until deep gold and hard.',
      'Drain and salt them, then pile into an ovenproof dish.',
      'Spoon the chilli over and scatter the cheese on top.',
      'Grill 4 minutes until bubbling, then top with spring onion, soured cream and jalapeños.'
    ],
    tips: [
      'Twice-cooked chips, always.',
      'Chilli thick enough to leave a spoon track.',
      'Assemble and grill at the last minute.'
    ],
    pair: ['Cold beer', 'Pickled jalapeños', 'A basketball game'],
    store: 'None. This is a dish with a ten-minute lifespan.',
    nut: [845, 38, 68, 46, 8, 8, 1420]
  },

  'po-boy': {
    d: 'Fried prawns in a light baguette with lettuce, tomato and remoulade. New Orleans, and "dressed" means all four.',
    meta: 'New Orleans shrimp po boy of cornmeal-battered prawns in French bread with lettuce, tomato, pickle and remoulade.',
    kw: ['po boy', 'shrimp po boy', 'po boy recipe', 'new orleans sandwich', 'remoulade sauce'],
    why: 'The bread is the thing people get wrong: it needs a crackly thin crust and a light, almost cottony crumb, so a proper French or Vietnamese baguette works and a dense sourdough does not. Cornmeal in the coating rather than all flour is what gives the prawns their particular sandy crunch, and it stays crisp under the remoulade for longer.',
    ing: [
      '600 g raw prawns, peeled',
      '150 ml buttermilk',
      '1 tbsp hot sauce',
      '100 g fine cornmeal',
      '60 g plain flour',
      '2 tsp Cajun seasoning',
      '1 tsp fine sea salt',
      '700 ml vegetable oil, for frying',
      '150 g mayonnaise',
      '2 tbsp wholegrain mustard',
      '1 tbsp hot sauce, for the remoulade',
      '1 tbsp lemon juice',
      '2 tbsp chopped gherkins',
      '2 spring onions, finely sliced',
      '1 tsp smoked paprika',
      '2 light baguettes',
      '0.5 iceberg lettuce, shredded',
      '2 tomatoes, sliced',
      '12 dill pickle slices'
    ],
    st: [
      'Soak the prawns in the buttermilk and hot sauce for 15 minutes.',
      'Mix the mayonnaise, mustard, remoulade hot sauce, lemon juice, gherkins, spring onions and paprika. Chill.',
      'Combine the cornmeal, flour, Cajun seasoning and salt in a bowl.',
      'Heat the oil to 180C.',
      'Lift the prawns from the buttermilk and turn them through the cornmeal mixture, pressing it on.',
      'Fry in two batches for 2 minutes 30 seconds, until golden. Drain on a rack.',
      'Split the baguettes lengthways without cutting all the way through.',
      'Spread remoulade generously on both cut faces.',
      'Layer in the shredded lettuce, tomato and pickle, then pile the hot prawns on top.',
      'Press the sandwich closed, cut in half and eat immediately.'
    ],
    tips: [
      'Light bread with a thin crust. Not sourdough.',
      'Cornmeal in the coating for the crunch.',
      'Remoulade on both faces so the bread does not go through.'
    ],
    pair: ['Dill pickles', 'Hot sauce', 'Cold beer'],
    store: 'Assemble to order. The remoulade keeps 5 days refrigerated.',
    nut: [745, 42, 68, 34, 4, 8, 1680]
  },

  'french-dip': {
    d: 'Thin roast beef in a roll with a cup of the roasting juices to dip it in. Forty-five minutes, and the jus is the recipe.',
    meta: 'American French dip of thinly sliced roast beef in a soft roll with a cup of seasoned beef jus for dipping.',
    kw: ['french dip', 'french dip recipe', 'french dip sandwich', 'au jus recipe', 'roast beef dip sandwich'],
    why: 'The jus must be seasoned and reduced until it tastes good enough to drink on its own — it is not gravy and it is not stock, and a weak one makes the whole sandwich pointless. Slice the beef as thinly as you physically can: thick slices do not absorb, so you get wet bread and dry meat, which is the failure mode of every bad French dip.',
    ing: [
      '700 g sirloin or rump, in one piece',
      '2 tsp fine sea salt',
      '1 tsp ground black pepper',
      '2 tbsp vegetable oil',
      '1 onion, thinly sliced',
      '4 garlic cloves, crushed',
      '2 sprigs thyme',
      '150 ml red wine',
      '700 ml good beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp soy sauce',
      '4 soft white rolls',
      '4 slices Provolone or Gruyère',
      '2 tbsp unsalted butter'
    ],
    st: [
      'Season the beef heavily with the salt and pepper and leave 20 minutes at room temperature.',
      'Heat the oil in a heavy pan and brown the beef hard on all sides, about 8 minutes. Lift out.',
      'Add the onion and cook 6 minutes, then the garlic and thyme for 1 minute.',
      'Pour in the wine and reduce by half, scraping the base.',
      'Add the stock, Worcestershire and soy sauce and simmer 10 minutes.',
      'Return the beef and cook 12 minutes for medium rare, turning once.',
      'Lift the beef out and rest it 10 minutes.',
      'Strain the jus, skim the fat and taste it — it should be strongly savoury on its own. Reduce further if not.',
      'Butter and toast the rolls, lay the cheese in and melt it under a grill for 1 minute.',
      'Slice the beef as thinly as possible, pile it in, and serve each sandwich with a cup of hot jus.'
    ],
    tips: [
      'Reduce the jus until it tastes good enough to drink.',
      'Slice as thinly as your knife allows.',
      'Toast the roll or the first dip destroys it.'
    ],
    pair: ['Horseradish cream', 'Chips', 'A pickle'],
    store: 'Beef and jus keep 3 days refrigerated. Assemble to order.',
    nut: [685, 48, 46, 32, 3, 5, 1680]
  },

  'patty-melt': {
    d: 'A burger patty between rye bread with caramelised onion and Swiss cheese, griddled like a toastie. Thirty-five minutes.',
    meta: 'American patty melt of a thin beef patty griddled between rye bread with slow-caramelised onions and Swiss cheese.',
    kw: ['patty melt', 'patty melt recipe', 'rye bread burger', 'caramelised onion burger', 'diner patty melt'],
    why: 'This is not a burger in bread — it is a grilled sandwich that happens to contain beef, and the differences matter. The patty is thin and cooked through, the onions are caramelised for twenty minutes rather than softened for five, and the whole thing is pressed on a griddle until the bread is dark. Rye bread is not optional: its sourness is what stops the richness becoming cloying.',
    ing: [
      '300 g minced beef, 20 per cent fat',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '2 large onions, thinly sliced',
      '30 g unsalted butter, for the onions',
      '1 tbsp vegetable oil',
      '0.5 tsp caster sugar',
      '4 slices rye bread',
      '4 slices Swiss cheese',
      '2 tbsp unsalted butter, softened, for the bread',
      '1 tbsp Dijon mustard'
    ],
    st: [
      'Melt the onion butter with the oil in a heavy pan over a low heat.',
      'Add the onions and the sugar and cook 20 minutes, stirring occasionally, until deep brown and jammy.',
      'Season the mince with the salt and pepper and shape into 2 thin oval patties the shape of the bread.',
      'Fry the patties in a hot pan for 2 minutes a side, until browned and just cooked through.',
      'Butter one face of each slice of rye and spread mustard on the other face.',
      'Lay two slices butter-side down.',
      'Build each sandwich: cheese, patty, caramelised onion, cheese, then the top slice butter-side up.',
      'Cook on a griddle over a medium-low heat for 4 minutes, pressing gently.',
      'Flip and cook 4 minutes more, until the bread is dark and the cheese has run.',
      'Rest 1 minute and cut in half.'
    ],
    tips: [
      'Twenty minutes on the onions. Not five.',
      'Thin patty, cooked through.',
      'Cheese on both sides of the patty so it seals the bread.'
    ],
    pair: ['Dill pickle', 'Chips', 'A chocolate malt'],
    store: 'None. Eat within five minutes.',
    nut: [845, 46, 46, 52, 5, 12, 1420]
  },

  'grits': {
    d: 'Coarse cornmeal cooked slowly in milk and stock until creamy, finished with butter and cheese. Thirty minutes.',
    meta: 'Southern cheesy grits cooked slowly in milk and stock with butter and sharp Cheddar, seasoned with white pepper.',
    kw: ['cheesy grits', 'grits recipe', 'southern grits', 'creamy grits', 'shrimp and grits base'],
    why: 'Use stone-ground grits and give them the full twenty-five minutes on a low heat, whisking often. Instant grits cook in five and taste of the packet; stone-ground release starch slowly and turn genuinely creamy without any thickener. The liquid ratio is four to one and you may need more — grits absorb far more than seems reasonable, so keep hot liquid to hand.',
    ing: [
      '200 g stone-ground grits or coarse polenta',
      '500 ml whole milk',
      '400 ml chicken or vegetable stock',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground white pepper',
      '60 g unsalted butter',
      '150 g mature Cheddar, grated',
      '2 tbsp double cream',
      '2 spring onions, finely sliced'
    ],
    st: [
      'Bring the milk and stock to a simmer with the salt in a heavy pan.',
      'Pour the grits in slowly in a thin stream, whisking constantly.',
      'Turn the heat to its lowest setting.',
      'Cook 25 minutes, whisking every 3 minutes and scraping the base and corners.',
      'Add a splash of hot water or stock whenever it becomes too thick to whisk easily.',
      'When the grains are soft with no chalkiness left, take off the heat.',
      'Beat in the butter until it disappears.',
      'Beat in the cheese a handful at a time, then the cream and white pepper.',
      'Taste and correct the salt — grits need more than you expect.',
      'Serve at once, scattered with spring onion.'
    ],
    tips: [
      'Stone-ground, not instant.',
      'Whisk in a thin stream or you get lumps you cannot fix.',
      'Keep hot liquid nearby — they drink more than you think.'
    ],
    pair: ['Fried prawns', 'Crisp bacon', 'A poached egg'],
    store: 'Keeps 2 days refrigerated and sets solid; loosen with hot milk.',
    nut: [545, 20, 48, 30, 2, 8, 1080]
  },

  'corned-beef-hash': {
    d: 'Corned beef and potato pressed into a hot pan and left alone until a crust forms. Forty minutes and one flip.',
    meta: 'American corned beef hash of diced potato and corned beef pressed into a hot pan and crisped, served with a fried egg.',
    kw: ['corned beef hash', 'corned beef hash recipe', 'hash browns with corned beef', 'diner hash', 'crispy hash recipe'],
    why: 'Press it flat and then leave it completely alone for six or seven minutes. Every stir breaks the crust that is forming and hash stirred constantly is a pan of warm diced potato — the entire dish is the browned underside. Parboil the potato first so it is cooked through, because there is no time to cook it once the crust is your only concern.',
    ing: [
      '600 g waxy potatoes, in 1.5 cm dice',
      '1 tbsp fine sea salt, for the water',
      '400 g corned beef, in 1.5 cm dice',
      '3 tbsp vegetable oil',
      '30 g beef dripping',
      '1 onion, finely chopped',
      '1 green pepper, finely diced',
      '1 tsp smoked paprika',
      '1 tsp fine sea salt',
      '0.75 tsp ground black pepper',
      '1 tbsp Worcestershire sauce',
      '4 eggs',
      '3 tbsp chopped flat-leaf parsley'
    ],
    st: [
      'Boil the diced potato in salted water for 6 minutes, then drain and dry thoroughly.',
      'Heat the oil and dripping in a heavy frying pan over a medium-high heat.',
      'Fry the onion and pepper for 5 minutes.',
      'Add the potato and cook 5 minutes, turning occasionally.',
      'Add the corned beef, paprika, salt, pepper and Worcestershire sauce and mix through.',
      'Press the whole lot flat with a spatula.',
      'Leave it completely alone for 7 minutes, until a dark crust forms underneath.',
      'Turn it over in sections — it will break up, which is correct — and press flat again.',
      'Cook 5 minutes more without stirring.',
      'Fry the eggs separately and serve them on top with the parsley scattered over.'
    ],
    tips: [
      'Press it flat and do not touch it.',
      'Parboil and dry the potato first.',
      'It breaks up when you turn it. That is fine.'
    ],
    pair: ['A fried egg, always', 'Brown sauce', 'Strong coffee'],
    store: 'Keeps 2 days refrigerated. Re-crisp in a hot pan.',
    nut: [630, 32, 42, 37, 5, 5, 1680]
  },

  'monkey-bread': {
    d: 'Balls of enriched dough rolled in cinnamon sugar, stacked in a ring tin and baked so they pull apart in a caramel.',
    meta: 'American monkey bread of enriched dough balls rolled in cinnamon sugar, stacked in a bundt tin with butter caramel and baked.',
    kw: ['monkey bread', 'monkey bread recipe', 'pull apart bread', 'cinnamon sugar bread', 'bundt caramel bread'],
    why: 'Turn it out within two minutes of it leaving the oven. The caramel sets hard as it cools and monkey bread left in the tin welds itself to the metal — five minutes is already too long. Have the serving plate over the tin ready to go, and do it while it is uncomfortably hot.',
    ing: [
      '450 g strong white flour',
      '50 g caster sugar',
      '2 tsp fast-action yeast',
      '1 tsp fine sea salt',
      '220 ml warm whole milk',
      '1 egg',
      '60 g unsalted butter, softened',
      '200 g light brown soft sugar',
      '2 tbsp ground cinnamon',
      '150 g unsalted butter, melted',
      '4 tbsp double cream',
      '1 tsp vanilla extract',
      '1 tbsp unsalted butter, for the tin'
    ],
    st: [
      'Mix the flour, caster sugar, yeast and salt, then work in the warm milk and egg.',
      'Knead 8 minutes, then work in the softened butter and knead 4 minutes more.',
      'Prove covered for 75 minutes, until doubled.',
      'Butter a 25 cm bundt tin thoroughly, into every groove.',
      'Mix the brown sugar and cinnamon in a bowl.',
      'Knock the dough back and pinch off about 40 walnut-sized pieces, rolling each into a ball.',
      'Dip each ball in the melted butter, then roll in the cinnamon sugar, and stack them loosely in the tin.',
      'Stir the cream and vanilla into the leftover butter and sugar and pour it over the top.',
      'Prove 35 minutes, then bake at 180C for 35 minutes, until deep brown and hollow-sounding.',
      'Rest exactly 2 minutes, then turn out onto a plate at once.'
    ],
    tips: [
      'Turn it out within two minutes or it welds to the tin.',
      'Butter every groove of the tin.',
      'Stack loosely so the caramel gets between the balls.'
    ],
    pair: ['Coffee', 'A slow Sunday', 'Cold cream'],
    store: 'Best warm on the day. Reheat covered at 160C for 10 minutes.',
    nut: [485, 8, 68, 21, 2, 34, 280],
    rest: [110, 'proving the dough']
  },

  'sopa-de-tortilla': {
    d: 'A chilli and tomato broth with crisp tortilla strips added at the table so they keep their crunch. Forty-five minutes.',
    meta: 'Mexican tortilla soup of a pasilla and tomato broth topped at the table with fried tortilla strips, avocado, cheese and crema.',
    kw: ['sopa de tortilla', 'tortilla soup recipe', 'mexican tortilla soup', 'sopa azteca', 'pasilla chilli soup'],
    why: 'The tortilla strips go into the bowl at the table, never into the pot. Cooked in the broth they dissolve into thickener within a couple of minutes and the whole point of the dish — crisp against hot liquid — disappears. Toast and soak the dried chillies rather than using powder; the smoky depth of pasilla is the flavour people remember.',
    ing: [
      '6 corn tortillas, in 1 cm strips',
      '300 ml vegetable oil, for frying',
      '3 pasilla chillies, stemmed and deseeded',
      '2 guajillo chillies, stemmed and deseeded',
      '600 g ripe tomatoes, halved',
      '1 onion, quartered',
      '4 garlic cloves, unpeeled',
      '1.2 litres vegetable or chicken stock',
      '1 tsp dried oregano',
      '1.5 tsp fine sea salt',
      '1 avocado, diced',
      '120 g queso fresco or feta, crumbled',
      '150 ml crema or soured cream',
      '3 tbsp chopped coriander leaves',
      '2 limes, in wedges'
    ],
    st: [
      'Heat the oil to 180C and fry the tortilla strips in batches for 90 seconds, until crisp. Drain and salt lightly.',
      'Toast the pasilla and guajillo chillies in a dry pan for 40 seconds a side, then soak in hot water 20 minutes.',
      'Char the tomatoes, onion and unpeeled garlic in a dry pan for 8 minutes, until blackened in patches.',
      'Squeeze the garlic from its skins.',
      'Blend the charred vegetables with two of the soaked pasillas and a ladleful of stock.',
      'Strain the purée into a pan through a sieve, pressing it through.',
      'Simmer 12 minutes, until it darkens and thickens.',
      'Add the remaining stock, oregano and salt and simmer 12 minutes more.',
      'Slice the remaining soaked chillies into thin rings.',
      'Ladle the hot broth into bowls and let people add tortilla strips, avocado, cheese, crema, chilli rings, coriander and lime themselves.'
    ],
    tips: [
      'Strips at the table, never in the pot.',
      'Toast and soak whole dried chillies.',
      'Strain the purée or the broth is gritty.'
    ],
    pair: ['A cold beer', 'Extra lime', 'Warm tortillas'],
    store: 'The broth keeps 4 days refrigerated and freezes 3 months. Fry strips fresh.',
    nut: [485, 12, 44, 30, 8, 11, 1180]
  },

  'camarones-a-la-diabla': {
    d: 'Prawns in a red chilli sauce hot enough to justify the name, made from soaked guajillo and chipotle. Thirty-five minutes.',
    meta: 'Mexican camarones a la diabla of prawns in a blended guajillo, arbol and chipotle sauce with garlic, tomato and lime.',
    kw: ['camarones a la diabla', 'diabla sauce', 'mexican spicy prawns', 'devil shrimp recipe', 'guajillo prawn sauce'],
    why: 'Fry the blended chilli sauce for five minutes before the prawns go anywhere near it. Straight from the blender it tastes raw and thin and no amount of simmering with the prawns fixes it, because prawns need three minutes and the sauce needs five on its own. Fry it until it darkens and thickens, then add the prawns and take the pan off almost immediately.',
    ing: [
      '700 g raw king prawns, peeled with tails on',
      '5 guajillo chillies, stemmed and deseeded',
      '4 chillies de árbol, stemmed',
      '2 chipotles in adobo',
      '3 tomatoes, halved',
      '0.5 onion, quartered',
      '5 garlic cloves',
      '4 tbsp vegetable oil',
      '1 tbsp tomato purée',
      '1 tsp dried oregano',
      '1 tsp ground cumin',
      '1.25 tsp fine sea salt',
      '1 tsp caster sugar',
      '150 ml chicken stock',
      '2 tbsp lime juice',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Toast the guajillo and árbol chillies in a dry pan for 40 seconds a side, then soak in hot water for 20 minutes.',
      'Char the tomatoes, onion and garlic in the same dry pan for 8 minutes, until blackened in patches.',
      'Blend the soaked chillies, chipotles, charred vegetables, oregano, cumin, salt and sugar with 100 ml of the soaking water.',
      'Strain the sauce through a sieve, pressing the solids through.',
      'Heat the oil in a wide pan and add the tomato purée for 1 minute.',
      'Pour in the strained sauce — stand back — and fry 5 minutes, until it darkens and thickens.',
      'Add the stock and simmer 3 minutes.',
      'Taste and correct the salt now, before the prawns go in.',
      'Add the prawns and cook 3 minutes, turning once, until pink and curled.',
      'Take off the heat, stir in the lime juice, and scatter the coriander over.'
    ],
    tips: [
      'Fry the sauce for five minutes on its own.',
      'Season the sauce before the prawns arrive.',
      'Three minutes for the prawns, then off the heat.'
    ],
    pair: ['White rice', 'Warm corn tortillas', 'Cold lager'],
    store: 'The sauce keeps 4 days refrigerated. Cook the prawns fresh.',
    nut: [360, 38, 18, 15, 5, 9, 1290]
  },

  'esquites': {
    d: 'Corn cut off the cob and fried, then dressed with mayonnaise, lime, chilli and cheese and eaten from a cup with a spoon.',
    meta: 'Mexican esquites of corn kernels charred in butter with epazote, dressed with mayonnaise, lime, chilli powder and cotija.',
    kw: ['esquites', 'esquites recipe', 'mexican corn cup', 'corn in a cup', 'elote en vaso'],
    why: 'Char the kernels properly — leave them still in a hot dry pan until they blacken in patches and start popping. Corn stirred gently in butter is sweet and one-dimensional; charred, it develops the bitter, smoky edge that the lime and chilli play against. Dress it while hot so the mayonnaise loosens and coats rather than sitting in cold blobs.',
    ing: [
      '600 g sweetcorn kernels, fresh or frozen',
      '30 g unsalted butter',
      '1 tbsp vegetable oil',
      '2 sprigs epazote, or 1 tsp dried oregano',
      '1 tsp fine sea salt',
      '5 tbsp mayonnaise',
      '3 tbsp lime juice',
      '2 tsp chilli powder or Tajín',
      '100 g cotija or feta, crumbled',
      '3 tbsp chopped coriander leaves',
      '2 spring onions, finely sliced',
      '1 lime, in wedges'
    ],
    st: [
      'Dry the corn thoroughly on a cloth if it is frozen and thawed.',
      'Heat the butter and oil in a wide heavy pan over a high heat until foaming.',
      'Add the corn in a single layer and leave it still for 4 minutes.',
      'Stir once and leave 3 minutes more, until blackened in patches and popping.',
      'Add the epazote and salt and cook 1 minute.',
      'Take off the heat and let it cool for 2 minutes.',
      'Stir in the mayonnaise and lime juice while still hot, so it loosens and coats.',
      'Fold in half the cheese and half the coriander.',
      'Spoon into cups.',
      'Top with the remaining cheese, coriander, spring onion and a heavy dusting of chilli powder, with lime wedges alongside.'
    ],
    tips: [
      'Leave the corn still until it blackens.',
      'Dress it hot so the mayonnaise loosens.',
      'More chilli powder on top than feels right.'
    ],
    pair: ['A taco stand', 'Cold beer', 'Extra lime'],
    store: 'Best warm. Keeps 2 days refrigerated and is decent cold.',
    nut: [385, 9, 34, 25, 5, 8, 890]
  },

  'paletas': {
    d: 'Fresh fruit blended with a little sugar and lime and frozen in moulds. Fifteen minutes of work and no cooking.',
    meta: 'Mexican paletas of fresh mango and lime blended with a light sugar syrup and chilli, frozen in lolly moulds.',
    kw: ['paletas', 'paletas recipe', 'mexican ice lollies', 'mango chilli paletas', 'fruit popsicles'],
    why: 'Chop a handful of the fruit and stir it in whole rather than blending everything smooth. Paletas de agua are meant to have pieces in them — that is what distinguishes them from a shop-bought ice lolly — and the chunks also break up the ice crystals so the texture is less solid. A spoonful of lime juice keeps the mango from tasting flat once frozen.',
    ing: [
      '900 g ripe mango flesh, about 4 mangoes',
      '120 g caster sugar',
      '150 ml water',
      '4 tbsp lime juice',
      '0.5 tsp fine sea salt',
      '1 tsp Tajín or chilli powder',
      '8 wooden lolly sticks'
    ],
    st: [
      'Warm the sugar and water together, stirring, until the sugar dissolves. Cool completely.',
      'Cut about 150 g of the mango into 5 mm dice and set aside.',
      'Blend the remaining mango with the cooled syrup, lime juice and salt until completely smooth.',
      'Taste it: it should be slightly sweeter and sharper than you want, because freezing dulls both.',
      'Stir the diced mango through the purée.',
      'Sprinkle a pinch of Tajín into the bottom of each mould.',
      'Pour the mixture in, leaving 1 cm at the top for expansion.',
      'Freeze 1 hour, then push the sticks in upright.',
      'Freeze a further 5 hours, until solid.',
      'Dip the moulds in warm water for 15 seconds to release, and dust with more Tajín.'
    ],
    tips: [
      'Season sweeter and sharper than tastes right — freezing dulls it.',
      'Chunks stirred in, not blended.',
      'Sticks in after an hour, when the mixture holds them upright.'
    ],
    pair: ['A hot afternoon', 'Tajín', 'Fresh lime'],
    store: 'Keeps 2 months frozen, wrapped.',
    nut: [145, 1, 36, 0, 2, 34, 160],
    rest: [360, 'freezing']
  },

  'conchas': {
    d: 'Sweet enriched rolls under a crisp sugar paste scored into a shell. Mexico\'s pan dulce, and the pattern is the name.',
    meta: 'Mexican conchas of enriched sweet dough under a butter and sugar paste topping scored into a shell pattern before baking.',
    kw: ['conchas', 'conchas recipe', 'mexican sweet bread', 'pan dulce recipe', 'concha topping'],
    why: 'The topping is a paste of equal parts butter, icing sugar and flour, and it must be rolled thin and laid on before the second prove, not after. It rises with the bun and the scored lines open into the shell as the dough expands underneath — put it on after proving and the pattern stays closed. Score firmly, most of the way through the paste.',
    ing: [
      '450 g strong white flour',
      '80 g caster sugar',
      '2 tsp fast-action yeast',
      '1 tsp fine sea salt',
      '180 ml warm whole milk',
      '2 eggs',
      '80 g unsalted butter, softened',
      '100 g unsalted butter, for the topping',
      '100 g icing sugar',
      '100 g plain flour, for the topping',
      '1 tsp vanilla extract',
      '1 tbsp cocoa powder, for half the topping'
    ],
    st: [
      'Mix the strong flour, caster sugar, yeast and salt, then work in the warm milk and eggs to a soft dough.',
      'Knead 10 minutes, then work in the softened butter and knead 5 minutes more until smooth.',
      'Prove covered for 90 minutes, until doubled.',
      'Beat the topping butter with the icing sugar until pale, then work in the plain flour and vanilla to a stiff paste.',
      'Divide the paste in two and knead the cocoa into one half.',
      'Knock the dough back, divide into 8 and shape into tight balls on a lined tray.',
      'Divide each colour of topping into 4 and roll each piece between baking paper into a thin disc.',
      'Lay a disc over each ball, pressing it down the sides.',
      'Score a shell pattern firmly into each disc with a knife, cutting most of the way through the paste.',
      'Prove 50 minutes, then bake at 180C for 18 minutes, until the pattern has opened and the buns are golden.'
    ],
    tips: [
      'Topping on before the second prove.',
      'Score firmly, nearly through the paste.',
      'Roll the discs thin or the pattern will not open.'
    ],
    pair: ['Café de olla', 'Hot chocolate', 'Dunking'],
    store: 'Best the day they are baked. Freeze 1 month.',
    nut: [485, 9, 68, 20, 2, 28, 320],
    rest: [140, 'proving the dough']
  },

  'gorditas': {
    d: 'Thick corn cakes griddled until they puff, split open like a pocket and stuffed. Fifty minutes.',
    meta: 'Mexican gorditas of masa harina griddled thick until they puff, split and filled with beans, cheese and salsa.',
    kw: ['gorditas', 'gorditas recipe', 'masa harina gorditas', 'mexican stuffed corn cakes', 'gorditas de maiz'],
    why: 'They puff because steam builds inside a sealed thick disc, and that only happens if the masa is the right wetness — it should feel like soft modelling clay and not crack at all when you press the edge. If it cracks, wet your hands and knead more water in. A cracked gordita lets the steam out and stays flat, and then there is nothing to split open.',
    ing: [
      '400 g masa harina',
      '1.25 tsp fine sea salt',
      '520 ml warm water',
      '2 tbsp vegetable oil, for the dough',
      '3 tbsp vegetable oil, for the griddle',
      '400 g refried beans, warm',
      '200 g queso fresco or feta, crumbled',
      '150 ml crema or soured cream',
      '1 avocado, sliced',
      '6 tbsp salsa verde',
      '0.25 white cabbage, finely shredded',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Mix the masa harina and salt, then work in the warm water and dough oil.',
      'Knead 4 minutes to a soft dough the texture of modelling clay.',
      'Test it: press the edge of a ball flat. If it cracks, work in more water a tablespoon at a time.',
      'Rest covered 15 minutes.',
      'Divide into 8 and press each into a disc about 10 cm across and 1.5 cm thick.',
      'Heat a dry griddle over a medium-high heat.',
      'Cook each gordita 4 minutes a side, until speckled brown and visibly puffed.',
      'Brush the griddle with oil and cook them 1 minute more a side, until crisp outside.',
      'Split each one round the edge with a knife, leaving a hinge, to make a pocket.',
      'Fill with refried beans, cheese, crema, avocado, cabbage, salsa and coriander.'
    ],
    tips: [
      'Dough that does not crack at the edge. That is the whole test.',
      'Dry griddle first, oil at the end.',
      'Split them while hot or the pocket seals shut.'
    ],
    pair: ['Salsa verde', 'Pickled jalapeños', 'Agua fresca'],
    store: 'Cooked shells keep 2 days. Reheat on a dry griddle and fill fresh.',
    nut: [620, 20, 74, 27, 11, 5, 1180]
  }
};
