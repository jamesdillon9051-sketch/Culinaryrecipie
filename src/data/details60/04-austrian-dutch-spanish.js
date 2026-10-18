'use strict';

/**
 * Volume sixty, fourth part: more Austrian dumplings and cakes, Dutch savoury
 * dishes and bakes, and the first Spanish dishes (tripe, anchovies, hake and
 * the Catalan fish stew). Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'frittatensuppe': {
    d: 'Clear beef broth with thin strips of herb pancake, a classic Austrian starter ready in 25 minutes.',
    meta: 'Frittatensuppe, Austrian beef broth with strips of chive pancake, cooked for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['frittatensuppe', 'austrian pancake soup', 'beef broth with pancake strips', 'frittaten soup recipe', 'austrian clear soup with chive pancakes'],
    why: 'Flour, egg, milk, chives: four things, a clear broth and a plate of pancakes cut into ribbons. Frittatensuppe is the Austrian pancake soup, and the pancakes are the point: thin, tender, flecked with green and rolled into noodle shaped strips.\n\nThe batter is more liquid than a normal pancake batter, which makes the frittaten delicate. Whisk the flour with the milk and eggs until smooth, stir in chives and a pinch of nutmeg, and let it stand for 10 minutes. **Pour only a thin layer into the pan**, so that each pancake is paper thin. Cook for 1 minute on each side in a little butter, until set and pale gold with a few brown flecks.\n\nStack the cooked pancakes, roll them up and cut across into strips about 5 mm wide. Unroll the strips into warm bowls and ladle the hot broth over them at the table. If you add them to the pot too early they turn soggy and cloud the soup. A good broth makes the dish, and the rindsuppe of the Viennese kitchen is the natural base.',
    ing: [
      '120 g plain flour',
      '200 ml whole milk',
      '2 eggs',
      '1 pinch salt',
      '1 pinch ground nutmeg',
      '3 tbsp chopped chives',
      '20 g butter, for the pan',
      '1.2 litres hot beef broth'
    ],
    st: [
      'Whisk the flour, milk, eggs, salt and nutmeg until smooth. Stir in half the chives. Stand for 10 minutes.',
      'Melt a little butter in a 22 cm pan and pour in a thin layer of batter. Cook for 1 minute on each side. Repeat to make 6 pancakes.',
      'Roll up the pancakes and cut across into 5 mm strips.',
      'Divide the strips between 4 warm bowls, ladle over the hot broth and scatter with the remaining chives.'
    ],
    tips: [
      'Make the pancakes paper thin.',
      'Add the strips to the bowls, not the pot.',
      'Use a clear, well flavoured broth.'
    ],
    pair: ['Crusty bread', 'Dry white wine'],
    store: 'The pancakes keep for 1 day in the fridge. Assemble the soup fresh.',
    nut: [237, 11, 28, 9, 1, 3, 1080]
  },

  'serviettenknodel': {
    d: 'A large bread dumpling shaped into a log, wrapped in a cloth and simmered for 25 minutes, then sliced and served with gravy.',
    meta: 'Serviettenknödel, Austrian napkin dumpling of bread, egg and parsley simmered in a cloth, cooked for 25 minutes. Six servings, ready in 1 hour 15 minutes.',
    kw: ['serviettenknodel', 'austrian napkin dumpling', 'bread dumpling log in a cloth', 'serviettenknoedel recipe', 'sliced bread dumpling with gravy'],
    why: 'Flour, butter, bread, eggs: four pantry things and a clean tea towel. Serviettenknödel is the Austrian napkin dumpling, a bread dumpling formed into one big log, wrapped in a cloth and simmered, which makes it easy to slice into neat rounds for a roast dinner.\n\nCut stale white rolls or white bread into small cubes. Fry chopped onion in butter, then pour milk, eggs, parsley, salt and nutmeg over the bread and add the onion. **Let the mixture stand for 20 minutes** so the bread swells and the dumpling holds together. If it is too wet, add a spoonful of breadcrumbs.\n\nShape the mix into a thick log on a buttered cloth, roll it up and tie the ends with string, leaving a little room for it to swell. Simmer in salted water for 25 minutes, turning once. Lift out, unwrap carefully and rest for 2 minutes before cutting into 2 cm slices. Serve with mushroom sauce or roast gravy. Leftover slices fry well in butter.',
    ing: [
      '400 g stale white bread, in small cubes',
      '250 ml warm milk',
      '40 g butter',
      '1 onion, finely chopped',
      '3 eggs',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '1/4 tsp ground nutmeg',
      '2 tbsp dry breadcrumbs'
    ],
    st: [
      'Fry the onion in the butter for 5 minutes. Put the bread in a bowl and add the warm milk, onion, eggs, parsley, salt and nutmeg. Mix and leave to stand for 20 minutes.',
      'Add the breadcrumbs if it is too wet. Shape into a log 20 cm long on a buttered clean cloth.',
      'Roll up in the cloth and tie both ends with string, leaving room to swell.',
      'Simmer in salted water for 25 minutes, turning once.',
      'Unwrap, rest for 2 minutes and cut into 2 cm slices.'
    ],
    tips: [
      'Let the bread soak before shaping.',
      'Tie the cloth loosely so the dumpling can swell.',
      'Fry leftover slices in butter.'
    ],
    pair: ['Mushroom sauce', 'Roast pork', 'Gravy', 'Red cabbage'],
    store: 'Keeps for 2 days in the fridge. Slice and fry to reheat.',
    nut: [295, 11, 38, 11, 2, 6, 790]
  },

  'griessknodel': {
    d: 'Small soft dumplings of semolina, egg and butter poached for 15 minutes and served in beef broth with chives.',
    meta: 'Grießknödel, soft Austrian semolina dumplings poached in broth, cooked for 15 minutes. Six servings, ready in 55 minutes.',
    kw: ['griessknodel', 'austrian semolina dumplings', 'semolina dumplings in broth', 'griessnockerl soup', 'griessknoedel recipe'],
    why: 'The first sign they are ready is the sight of them floating: pale, plump little dumplings turning slowly in a pot of broth. Grießknödel are an Austrian soup dumpling made from semolina, egg and butter, and they are among the lightest of the dumplings.\n\nBeat the soft butter until creamy, then beat in the egg, a pinch of salt and nutmeg and fold in the semolina. The mixture will look loose at first. **Let it stand for 20 minutes**, when the semolina swells and the dough becomes firm enough to shape. Test one dumpling in simmering salted water: if it falls apart, add a spoonful of semolina.\n\nShape the mixture with two wet spoons or damp hands into small ovals and slip them into barely simmering salted water. Cook for 15 minutes, uncovered, until they have doubled in size and float. Lift them into bowls of hot beef broth and scatter with chives. They are very delicate, so handle gently and cook in the water, not the broth, to keep the soup clear.',
    ing: [
      '60 g butter, softened',
      '2 eggs',
      '1/2 tsp salt',
      '1 pinch ground nutmeg',
      '150 g coarse semolina',
      '1.2 litres hot beef broth',
      '3 tbsp chopped chives'
    ],
    st: [
      'Beat the butter until creamy. Beat in the eggs, salt and nutmeg, then fold in the semolina. Stand for 20 minutes.',
      'Bring a wide pan of salted water to a bare simmer.',
      'With wet hands or spoons shape the mixture into 12 small ovals and slip them in. Cook for 15 minutes until they float and double in size.',
      'Lift into bowls, ladle over the hot broth and scatter with the chives.'
    ],
    tips: [
      'Let the mixture stand for 20 minutes.',
      'Test one dumpling first.',
      'Poach in water, not in the broth.'
    ],
    pair: ['Crusty bread', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [198, 7, 20, 10, 1, 0, 880]
  },

  'salzburger-nockerl': {
    d: 'A fluffy sweet soufflé of whisked egg whites, yolks and sugar in three mounds, baked for 15 minutes and dusted with sugar.',
    meta: 'Salzburger Nockerl, Austrian sweet soufflé baked in three mounds, baked for 15 minutes at 220C. Four servings, ready in 40 minutes.',
    kw: ['salzburger nockerl', 'austrian sweet souffle', 'salzburg souffle dessert', 'nockerl dessert recipe', 'fluffy egg white dessert'],
    why: 'Flour, eggs, sugar, butter: you already own the four things that make this dessert, and it takes about forty minutes. Salzburger Nockerl is an Austrian soufflé of whisked egg whites folded with yolks and a little flour, baked in three mounds said to resemble the hills of Salzburg.\n\nThe whole dish rests on the whites. Whisk them with a spoonful of sugar, then add the rest slowly, until the meringue is stiff and glossy and stands up when you lift the whisk. **Fold the yolks and flour in with a few quick strokes**, no more. Over folding knocks out the air and the mounds collapse in the oven.\n\nSpoon three tall mounds into a buttered dish of hot melted butter and milk, which warms the base and keeps the nockerl moist. Bake at 220C for 15 minutes, until the tops are golden and the middles are still creamy. Serve at once, dusted with icing sugar, because the soufflé begins to sink within minutes. Spoon a little of the warm milk on each plate and have fruit compote on the table.',
    ing: [
      '6 eggs, separated',
      '90 g caster sugar',
      '1 tbsp plain flour',
      '1 tsp vanilla extract',
      '1 lemon, zest',
      '30 g butter',
      '100 ml whole milk',
      '2 tbsp icing sugar',
      '200 g raspberries, to serve'
    ],
    st: [
      'Heat the oven to 220C. Melt the butter with the milk in a 24 cm oval ovenproof dish.',
      'Whisk the whites to soft peaks, add the sugar a spoonful at a time and whisk to stiff glossy peaks.',
      'Whisk the yolks with the vanilla and zest and fold into the whites with the flour in a few strokes.',
      'Spoon three tall mounds into the hot dish and bake for 15 minutes until golden on top.',
      'Dust with the icing sugar and serve at once with the raspberries.'
    ],
    tips: [
      'Whisk the whites until stiff and glossy.',
      'Fold in the yolks with a few strokes.',
      'Serve straight from the oven.'
    ],
    pair: ['Raspberries', 'Fruit compote', 'Sweet wine'],
    store: 'Eat at once. It does not keep.',
    nut: [330, 11, 40, 14, 4, 33, 110]
  },

  'esterhazy-torte': {
    untimed: ['cooling'],
    d: 'A layered cake of walnut meringue and vanilla buttercream glazed with white icing and a chocolate feather pattern.',
    meta: 'Esterházy Torte, layered walnut meringue cake with vanilla buttercream and a feathered icing, baked for 40 minutes. Twelve servings, ready in at least 2 hours 40 minutes with chilling.',
    kw: ['esterhazy torte', 'austrian walnut meringue cake', 'esterhazy cake recipe', 'layered meringue cake with buttercream', 'feathered icing cake'],
    why: 'Short and sharp: whisk the whites, fold in the walnuts and bake slowly. That is the first stage of Esterházy Torte, a famous layered cake with thin discs of walnut meringue sandwiched with buttercream and finished with a white glaze marked with a chocolate web.\n\nBake the meringue in four thin discs. Whisk the whites to stiff peaks with the sugar, then fold in ground walnuts and a spoon of flour. **Spread each disc thin and even on baking paper**, drawing a 22 cm circle as a guide, and bake at 160C for about 12 minutes each until pale gold. They crisp as they cool. Peel off the paper when cold.\n\nBeat the buttercream from a custard of milk, yolks, sugar and cornflour, cooled and beaten into soft butter with a spoonful of kirsch. Layer the discs and cream, chill for 1 hour, then cover the top with warm apricot jam and white icing. Pipe lines of melted chocolate across and drag a knife in alternate directions. Chill again before slicing with a hot knife.',
    ing: [
      '8 egg whites',
      '200 g caster sugar',
      '220 g ground walnuts',
      '30 g plain flour',
      '500 ml whole milk',
      '4 egg yolks',
      '120 g caster sugar, for the cream',
      '40 g cornflour',
      '250 g butter, softened',
      '1 tbsp kirsch',
      '3 tbsp apricot jam',
      '150 g icing sugar',
      '2 tbsp water',
      '30 g dark chocolate, melted'
    ],
    st: [
      'Heat the oven to 160C. Whisk the whites to stiff peaks with the 200 g sugar. Fold in the walnuts and flour.',
      'Spread a quarter of the mixture thinly over a 22 cm circle on baking paper. Bake for 12 minutes until pale gold. Repeat to make 4 discs. Cool and peel off the paper.',
      'Whisk the yolks, 120 g sugar and cornflour with a little of the milk. Warm the rest, pour on, return to the pan and stir for 5 minutes until thick. Cool, then beat into the butter with the kirsch.',
      'Stack the discs with the cream between them and over the sides. Chill for 1 hour.',
      'Warm the jam and brush over the top. Mix the icing sugar and water and spread over. Pipe lines of chocolate and drag a knife across to feather. Chill and slice with a hot knife.'
    ],
    tips: [
      'Spread the meringue discs thin and even.',
      'Cool the custard before beating in the butter.',
      'Cut with a knife dipped in hot water.'
    ],
    pair: ['Coffee', 'Tea', 'Sweet wine'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [545, 9, 53, 33, 2, 45, 80]
  },

  'kaspressknodel': {
    d: 'Flat Tyrolean cheese dumplings of bread, cheese and egg pan fried until crisp and served in broth or with salad.',
    meta: 'Kaspressknödel, flat Tyrolean cheese dumplings pan fried until crisp, cooked for 10 minutes. Four servings, ready in 50 minutes.',
    kw: ['kaspressknodel', 'tyrolean cheese dumplings', 'pressed cheese dumplings', 'kaspressknoedel recipe', 'fried cheese dumplings in broth'],
    why: 'Does a dumpling have to be round and boiled? Not in the Tyrol. Kaspressknödel are pressed flat and fried in butter until the outside is crisp and the inside is soft and cheesy, and they are served in beef broth or on a green salad with a dollop of soured cream.\n\nThe mixture is stale bread, milk, egg, strong mountain cheese, onion and chives. Soak the bread in the warm milk with the eggs for 15 minutes, then mix in the cheese and fried onion. **Press the mix firmly into rounds** about 2 cm thick with wet hands, so they hold together in the pan. If the mixture falls apart, add a few breadcrumbs.\n\nFry in butter over medium heat for 4 to 5 minutes on each side, until a deep golden crust forms. Do not turn them until the first side is set. Serve at once, in a bowl of hot broth for a soup, or on a plate with a green salad dressed with vinegar and pumpkin seed oil. The dish is tolerant of the cheese you have, as long as it is a strong, tasty one.',
    ing: [
      '250 g stale bread, in small cubes',
      '250 ml warm milk',
      '2 eggs',
      '150 g strong mountain cheese or Gruyère, grated',
      '1 onion, finely chopped',
      '2 tbsp butter',
      '3 tbsp chopped chives',
      '1/2 tsp salt',
      '50 g butter, for frying'
    ],
    st: [
      'Fry the onion in the 2 tablespoons of butter for 5 minutes.',
      'Soak the bread in the warm milk and eggs for 15 minutes. Mix in the cheese, onion, chives and salt.',
      'With wet hands press into 8 flat rounds, 2 cm thick.',
      'Fry in the frying butter over medium heat for 4 to 5 minutes on each side, in two batches, until deep golden.',
      'Serve in hot broth or on a green salad.'
    ],
    tips: [
      'Press the rounds firmly.',
      'Do not turn them until the first side is crisp.',
      'Use a strong, tasty cheese.'
    ],
    pair: ['Beef broth', 'Green salad', 'Soured cream'],
    store: 'Keeps for 2 days in the fridge. Fry again to crisp.',
    nut: [542, 22, 37, 34, 2, 7, 780]
  },

  'tiroler-grostl': {
    d: 'Fried potatoes, onions and leftover roast meat in a heavy pan, topped with a fried egg, a Tyrolean supper ready in 45 minutes.',
    meta: 'Tiroler Gröstl, Tyrolean pan of fried potatoes, onion and bacon topped with a fried egg, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['tiroler grostl', 'tyrolean grostl', 'austrian fried potatoes and bacon', 'groestl recipe', 'potato hash with fried egg'],
    why: 'Where does the name come from? It comes from a word for roasting or browning, and Tiroler Gröstl is exactly that: potatoes fried in a heavy pan with bacon, onion and leftover meat until deep brown and crisp. It began as a way to use up Sunday roast and it is still a staple in mountain huts.\n\nCook the potatoes the day before, or earlier in the day, and slice them while cold. Warm potatoes break up in the pan. **Fry the bacon and onion first** to render the fat and brown the onion, then lift them out and fry the potatoes in the same fat in a single layer. Do not stir them for the first 5 minutes, so they form a brown crust.\n\nReturn the bacon and onion and the diced meat to the pan, season with caraway, marjoram, salt and pepper and fry for 10 minutes more. Fry the eggs in a separate pan and set one on each plate. Scatter with chives and serve straight from the pan with a green salad dressed with vinegar.',
    ing: [
      '800 g cold waxy potatoes, cooked and sliced',
      '150 g smoked bacon, diced',
      '2 onions, sliced',
      '250 g cooked roast pork or beef, diced',
      '2 tbsp lard or oil',
      '1 tsp caraway seeds',
      '1 tsp dried marjoram',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 eggs',
      '3 tbsp chopped chives'
    ],
    st: [
      'Fry the bacon in the lard in a large heavy pan for 5 minutes. Add the onions and fry for 8 minutes until brown. Lift both out.',
      'Add the potatoes to the pan in a single layer and fry without stirring for 5 minutes. Turn and fry for 5 minutes more.',
      'Return the bacon and onions and add the meat, caraway, marjoram, salt and pepper. Fry for 10 minutes.',
      'Fry the eggs in a separate pan.',
      'Serve the gröstl topped with the eggs and chives.'
    ],
    tips: [
      'Use cold, already cooked potatoes.',
      'Do not stir for the first 5 minutes.',
      'Use any leftover roast meat.'
    ],
    pair: ['Green salad', 'Pickles', 'Beer'],
    store: 'Best fresh.',
    nut: [530, 34, 40, 26, 6, 4, 1270]
  },

  'hutspot': {
    d: 'A Dutch mash of potatoes, carrots and onions cooked together and mashed with butter, served with sausage or beef, in 50 minutes.',
    meta: 'Hutspot, Dutch mash of potatoes, carrots and onions with butter, cooked for 30 minutes. Four servings, ready in 50 minutes.',
    kw: ['hutspot', 'dutch carrot and potato mash', 'dutch stamppot with carrots and onions', 'hutspot with rookworst', 'hutspot recipe'],
    why: 'Does it matter which potatoes you use? It does, for hutspot, the Dutch mash of potatoes, carrots and onions, because floury potatoes make a light mash and waxy ones make glue. Choose a floury kind such as Maris Piper, and the dish comes out soft, sweet and golden.\n\nPeel the potatoes, carrots and onions and cut them into even chunks. Put them all in the same pot, with the carrots and onions on the bottom, cover with water, add salt and simmer for 30 minutes. **Drain well, keeping a cupful of the cooking water**, and let the vegetables steam dry in the pot for 2 minutes. This removes the extra water that makes a mash sloppy.\n\nMash with a generous knob of butter, a splash of the warm milk and plenty of black pepper, until the carrots and onions are broken up but not smooth. A few lumps are right. Serve with a smoked sausage, meatballs or slow cooked beef, and a spoon of gravy over the top. The dish is traditionally eaten on a cold evening.',
    ing: [
      '1 kg floury potatoes, peeled and cut in chunks',
      '600 g carrots, peeled and cut in chunks',
      '3 onions, peeled and quartered',
      '1 tsp salt',
      '60 g butter',
      '100 ml warm milk',
      '1/2 tsp black pepper',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Put the carrots and onions in a large pan, add the potatoes on top and cover with water. Add the salt.',
      'Bring to the boil, then simmer for 30 minutes until all are very soft.',
      'Drain, keeping 100 ml of the water. Return to the pot for 2 minutes to steam dry.',
      'Mash with the butter, warm milk, pepper and nutmeg, adding some of the cooking water if needed.'
    ],
    tips: [
      'Use floury potatoes.',
      'Steam the vegetables dry before mashing.',
      'Leave a few lumps for texture.'
    ],
    pair: ['Smoked sausage', 'Meatballs', 'Gravy', 'Mustard'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of milk.',
    nut: [422, 8, 66, 14, 11, 14, 720]
  },

  'kroketten': {
    d: 'Crisp breadcrumbed croquettes with a thick beef ragout filling, set for 4 hours and fried for 15 minutes.',
    meta: 'Kroketten, Dutch beef ragout croquettes in a crisp coating, fried for 15 minutes. Twelve servings, ready in 55 minutes plus chilling.',
    kw: ['kroketten', 'dutch croquettes', 'dutch beef croquettes', 'beef ragout croquette recipe', 'croquettes with mustard'],
    why: 'Chill the ragout until it is stiff enough to cut. That is the single most useful instruction for kroketten, the Dutch croquettes with a crisp shell and a soft, creamy beef filling, because a warm ragout will not hold a shape and bursts in the oil.\n\nThe filling is a thick roux sauce made with butter, flour and beef stock, mixed with finely chopped cooked beef, onion and nutmeg. It must be very thick, almost a paste, because it loosens in the fat. Spread it in a tray and chill for at least 4 hours or overnight. **Work with floured hands** to shape cylinders about 8 cm long. They are coated in flour, egg and fine breadcrumbs, and for extra crunch the egg and crumb step is repeated.\n\nChill again for 20 minutes, then fry in oil at 180C for 3 minutes in batches, until deep gold. Do not crowd the pan. Drain on kitchen paper and serve with mustard and a soft roll. A half formed croquette that splits in the fryer was either not cold enough or not coated twice.',
    ing: [
      '60 g butter',
      '80 g plain flour',
      '500 ml hot beef stock',
      '400 g cooked beef, finely chopped',
      '1 small onion, finely chopped',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '50 g plain flour, for coating',
      '3 eggs, beaten',
      '150 g fine breadcrumbs',
      '100 ml rapeseed oil absorbed, from 1 litre for frying',
      '4 tbsp mustard'
    ],
    st: [
      'Melt the butter in a pan, add the onion and fry for 3 minutes. Stir in the 80 g flour for 2 minutes, then whisk in the stock a little at a time and stir over low heat for 8 minutes until very thick.',
      'Stir in the beef, nutmeg and salt. Spread in a tray and chill for 4 hours.',
      'Shape into 12 cylinders with floured hands. Coat in the flour, egg and breadcrumbs, then egg and crumbs again. Chill for 20 minutes.',
      'Heat the oil to 180C and fry 4 at a time for 3 minutes until deep gold.',
      'Drain on kitchen paper and serve with the mustard.'
    ],
    tips: [
      'Chill the ragout until stiff.',
      'Coat twice for a crust that holds.',
      'Fry a few at a time.'
    ],
    pair: ['Mustard', 'Bread rolls', 'Beer'],
    store: 'Shaped croquettes keep for 1 day in the fridge or freeze for 2 months.',
    rest: [260, 'Chilling'],
    nut: [303, 14, 19, 19, 1, 1, 520]
  },

  'oliebollen': {
    d: 'Dutch New Year doughnuts of a wet yeast batter with raisins and currants, risen for 1 hour and deep fried for 15 minutes.',
    meta: 'Oliebollen, Dutch New Year doughnuts with raisins and icing sugar, fried for 15 minutes. Twelve servings, ready in 30 minutes plus rising.',
    kw: ['oliebollen', 'dutch new year doughnuts', 'dutch doughnut balls with raisins', 'oliebollen recipe', 'fried yeast batter balls'],
    why: 'Use two spoons dipped in the hot oil. It is the quick tip that makes oliebollen easier, because the batter is wet and sticky and the oil keeps it from clinging. These Dutch New Year doughnuts are made from a soft yeast batter with raisins and apple, and sold from stalls on every street in December.\n\nThe batter is a loose dough of flour, milk, yeast and egg, beaten until it stretches, then left to rise for 1 hour until bubbly. It is too wet to shape, so you scoop it. Fold in the raisins and currants just before frying. **Check the oil is at 175C** with a thermometer, because a cooler oil makes greasy balls and a hotter one burns the outside before the middle is cooked.\n\nDrop spoonfuls into the oil and fry for 4 to 5 minutes, turning, until deep brown. Test one by cutting it open: the middle should be airy, not doughy. Drain on kitchen paper and dust generously with icing sugar. They are best eaten warm, within the hour, from a paper bag.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '1 tsp salt',
      '50 g caster sugar',
      '350 ml lukewarm milk',
      '1 egg',
      '100 g raisins',
      '100 g currants',
      '1 apple, peeled and diced',
      '100 ml rapeseed oil absorbed, from 1.2 litres for frying',
      '60 g icing sugar'
    ],
    st: [
      'Mix the flour, yeast, salt, sugar, milk and egg and beat for 5 minutes into a thick, sticky batter. Cover and leave to rise for 1 hour until bubbly.',
      'Fold in the raisins, currants and apple.',
      'Heat the oil to 175C. Using two spoons dipped in the oil, drop in balls of batter, 4 at a time.',
      'Fry for 4 to 5 minutes, turning, until deep brown. Drain on kitchen paper.',
      'Dust generously with the icing sugar and serve warm.'
    ],
    tips: [
      'Dip the spoons in the oil.',
      'Keep the oil at 175C.',
      'Cut one open to check the middle.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Mulled wine'],
    store: 'Best fresh within the hour.',
    rest: [60, 'Rising'],
    nut: [346, 6, 58, 10, 3, 23, 220]
  },

  'appeltaart': {
    d: 'A deep Dutch apple pie with cinnamon and raisins in a buttery pastry case with a lattice top, baked for 60 minutes.',
    meta: 'Appeltaart, deep Dutch apple pie with cinnamon, raisins and a lattice top, baked for 60 minutes at 180C. Twelve servings, ready in 2 hours 20 minutes.',
    kw: ['appeltaart', 'dutch apple pie', 'dutch apple pie with lattice', 'deep apple pie with cinnamon', 'appeltaart recipe'],
    why: 'It looks like an English apple pie and eats like a spiced apple cake, with a taller filling and a firmer crust. Appeltaart is the Dutch apple pie, a deep tart with a lattice top, packed with apples, cinnamon and raisins, served in every cafe with a mound of whipped cream.\n\nThe pastry is a rich butter dough with a little baking powder, which makes it tender enough to push into the tin with your fingers. Use firm, tart apples such as Granny Smith, sliced thin and tossed with cinnamon, sugar, lemon juice and breadcrumbs. **Sprinkle breadcrumbs over the base before the filling**, as they soak up the apple juice and protect the pastry from turning soggy. Pile the apples high, since they shrink as they bake.\n\nCover with a lattice of pastry strips, brush with egg and bake at 180C for 60 minutes, until the crust is deep gold and the apples are tender. Cool for 30 minutes in the tin before cutting. It tastes better the next day, when the juices have set. Serve with whipped cream.',
    ing: [
      '350 g plain flour',
      '200 g cold butter, cubed',
      '150 g caster sugar',
      '1 tsp baking powder',
      '1 egg, plus 1 yolk',
      '1 pinch salt',
      '1.2 kg tart apples, peeled and sliced',
      '80 g raisins',
      '60 g caster sugar, for the filling',
      '2 tsp ground cinnamon',
      '1 lemon, juice',
      '3 tbsp dry breadcrumbs',
      '1 egg, for glazing',
      '200 ml double cream, whipped'
    ],
    st: [
      'Rub the butter into the flour, 150 g sugar, baking powder and salt. Mix in the egg and yolk to a dough. Chill for 20 minutes.',
      'Heat the oven to 180C. Press two thirds of the dough into a 24 cm springform tin, up the sides.',
      'Toss the apples with the raisins, 60 g sugar, cinnamon and lemon juice.',
      'Scatter the breadcrumbs over the base and pile the apples on top.',
      'Cover with a lattice of the remaining dough, brush with the beaten egg and bake for 60 minutes until deep gold.',
      'Cool in the tin for 30 minutes and serve with the cream.'
    ],
    tips: [
      'Use firm tart apples.',
      'Sprinkle breadcrumbs under the filling.',
      'Cool before cutting.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Coffee'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [457, 5, 62, 21, 4, 32, 90]
  },

  'pannenkoeken': {
    d: 'Large, thin Dutch pancakes fried in butter and eaten with syrup, bacon or apple, ready in 45 minutes.',
    meta: 'Pannenkoeken, large thin Dutch pancakes with syrup, bacon or apple, cooked for 20 minutes. Four servings, ready in 45 minutes.',
    kw: ['pannenkoeken', 'dutch pancakes', 'large thin dutch pancakes', 'pannenkoeken with syrup', 'pannenkoeken recipe'],
    why: 'It looks like a pancake and cooks like a crêpe, but it is larger, thicker and meant to be a full meal. Pannenkoeken are the Dutch pancakes, as wide as the pan and eaten for dinner as often as for breakfast, with sweet or savoury toppings.\n\nThe batter is flour, milk, eggs and a pinch of salt, whisked smooth and left to stand for 15 minutes. It should be the thickness of single cream. **Use a large, heavy non stick pan and a hot flame**, pouring in enough batter to cover the base in a thin layer, swirled quickly. Lay strips of bacon, slices of apple or cheese on top while the batter is still wet.\n\nCook for 2 minutes until the underside is golden and the top has just set, then flip with a wide spatula or a plate and cook for 1 minute more. Keep warm in a low oven. In the Netherlands, they are served flat on a plate and eaten with a knife and fork, with syrup, powdered sugar or ginger. The bacon version is a salty and sweet classic.',
    ing: [
      '250 g plain flour',
      '500 ml whole milk',
      '3 eggs',
      '1/2 tsp salt',
      '40 g butter, for frying',
      '120 g streaky bacon rashers',
      '2 apples, peeled and thinly sliced',
      '4 tbsp syrup',
      '2 tbsp icing sugar'
    ],
    st: [
      'Whisk the flour, milk, eggs and salt to a smooth batter. Stand for 15 minutes.',
      'Melt a little butter in a 26 cm pan over medium high heat. Lay 2 rashers of bacon in the pan and cook for 2 minutes.',
      'Pour in a quarter of the batter to cover the pan in a thin layer. Cook for 2 minutes until the underside is golden, then flip and cook for 1 minute.',
      'Repeat for the remaining pancakes, topping some with apple slices. Keep warm in a low oven.',
      'Serve with the syrup and icing sugar.'
    ],
    tips: [
      'Rest the batter for 15 minutes.',
      'Use a large non stick pan.',
      'Add toppings before flipping.'
    ],
    pair: ['Syrup', 'Icing sugar', 'Ginger', 'Coffee'],
    store: 'Keeps for 2 days in the fridge. Reheat in a pan.',
    nut: [592, 21, 82, 20, 4, 31, 850]
  },

  'kibbeling': {
    d: 'Chunks of white fish in a spiced batter fried until golden and eaten from a paper cone with garlic sauce.',
    meta: 'Kibbeling, Dutch battered fish chunks with spiced coating, fried for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['kibbeling', 'dutch fried fish bites', 'dutch battered cod chunks', 'kibbeling with garlic sauce', 'kibbeling recipe'],
    why: 'Keep the pieces small and the oil hot. Kibbeling are the Dutch fried fish pieces sold from fish stalls at every market, and they are crisp outside and juicy inside because they are cut into bite sized chunks and fried fast.\n\nCut the cod or whiting into pieces about 3 cm square. Toss them with a pinch of salt, paprika, garlic powder and white pepper and let them stand for 10 minutes. The batter is flour, cornflour, baking powder, beer or cold water and the same spices, mixed until barely smooth. **Keep the batter very cold**, since a cold batter meets hot oil with a crisp reaction and a hot one comes out heavy.\n\nHeat the oil to 180C. Dip the pieces in batter and fry in small batches for about 3 minutes until they are golden and crisp. Drain on kitchen paper and serve at once in a paper cone with garlic sauce or remoulade and a wedge of lemon. Eat while hot, with your fingers, standing up if you want to do it properly.',
    ing: [
      '700 g cod or whiting fillets, in 3 cm pieces',
      '1 tsp salt',
      '1 tsp paprika',
      '1/2 tsp garlic powder',
      '1/4 tsp white pepper',
      '120 g plain flour',
      '40 g cornflour',
      '1 tsp baking powder',
      '200 ml cold beer or cold water',
      '80 ml rapeseed oil absorbed, from 1 litre for frying',
      '120 g garlic sauce, to serve',
      '1 lemon, in wedges'
    ],
    st: [
      'Toss the fish with half the salt, the paprika, garlic powder and pepper. Stand for 10 minutes.',
      'Whisk the flour, cornflour, baking powder, remaining salt and cold beer until barely smooth. Keep cold.',
      'Heat the oil to 180C in a deep pan.',
      'Dip the fish in the batter and fry in 3 batches for 3 minutes each, until golden. Drain on kitchen paper.',
      'Serve at once with the garlic sauce and lemon.'
    ],
    tips: [
      'Keep the batter very cold.',
      'Fry in small batches.',
      'Serve at once while crisp.'
    ],
    pair: ['Garlic sauce', 'Lemon wedges', 'Chips', 'Cold beer'],
    store: 'Best fresh.',
    nut: [504, 37, 44, 20, 2, 1, 810]
  },

  'gehaktbal': {
    d: 'A large Dutch meatball of spiced minced beef and pork, browned and simmered in gravy for 30 minutes.',
    meta: 'Gehaktbal, large Dutch spiced meatballs simmered in onion gravy, cooked for 30 minutes. Four servings, ready in 50 minutes.',
    kw: ['gehaktbal', 'dutch meatball', 'large dutch meatballs in gravy', 'gehaktbal recipe', 'dutch minced meat balls with gravy'],
    why: 'Pack the mince tight and do not overwork it. That is the quick tip behind a gehaktbal, the large Dutch meatball that is the centre of a weeknight dinner, served with boiled potatoes, vegetables and a spoonful of gravy. It is plain and filling, with a hint of nutmeg.\n\nThe mix is half beef and half pork mince, an egg, soaked breadcrumbs, grated onion, nutmeg and plenty of pepper. Mix by hand until just combined, then shape into four large balls, about the size of a tennis ball. **Dip your hands in water** so the meat does not stick, and press and roll each ball firmly so that it holds its shape in the pan.\n\nBrown the balls in butter over medium heat for 8 minutes, turning, until crusted. Lift them out, add flour and stock to the pan to make a gravy, and return the meatballs to simmer for 20 minutes with the lid on. They should be cooked through, with no pink at the centre. Serve with boiled potatoes and green beans.',
    ing: [
      '400 g minced beef',
      '400 g minced pork',
      '1 egg',
      '50 g dry breadcrumbs, soaked in 100 ml milk',
      '1 onion, grated',
      '1/2 tsp ground nutmeg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '40 g butter',
      '30 g plain flour',
      '500 ml beef stock'
    ],
    st: [
      'Mix the beef, pork, egg, soaked crumbs, onion, nutmeg, salt and pepper lightly. Shape into 4 large balls with wet hands.',
      'Brown the balls in the butter in a wide pan for 8 minutes. Lift out.',
      'Stir the flour into the pan for 1 minute, then whisk in the stock to make a gravy.',
      'Return the meatballs, cover and simmer for 20 minutes, turning once, until cooked through.',
      'Serve with the gravy.'
    ],
    tips: [
      'Mix lightly and shape with wet hands.',
      'Brown well before simmering.',
      'Check there is no pink in the centre.'
    ],
    pair: ['Boiled potatoes', 'Green beans', 'Red cabbage'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [581, 43, 19, 37, 1, 2, 1230]
  },

  'rookworst': {
    d: 'A Dutch smoked sausage warmed in hot water for 20 minutes and served with sauerkraut mash and gravy.',
    meta: 'Rookworst, Dutch smoked sausage with sauerkraut mash and gravy, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['rookworst', 'dutch smoked sausage', 'rookworst with sauerkraut mash', 'zuurkool stamppot with rookworst', 'rookworst recipe'],
    why: 'Keep the heat low. That is most of the recipe for rookworst, and the part people skip: the sausage is already cooked, and boiling it makes the skin split and the fat run out. It only needs warming through in hot water, while the potatoes and sauerkraut cook alongside.\n\nBoil the potatoes until soft, 20 minutes. Meanwhile warm the sauerkraut with a few juniper berries and a splash of stock. **Slide the sausage into water that is steaming but not bubbling**, put the lid on and leave it for 15 minutes. Do not prick it. Lift it out and slice on the diagonal.\n\nMash the potatoes with butter and milk, stir in the drained sauerkraut and make a well in the middle of each portion. Fill it with a spoonful of onion gravy, and lay the rookworst slices on top. The dish is a stamppot, a Dutch mash with a vegetable folded in, and it is one of the country\'s favourite winter suppers. Serve with plenty of mustard.',
    ing: [
      '1 kg floury potatoes, peeled and cut up',
      '500 g rookworst',
      '400 g sauerkraut, drained',
      '2 g juniper berries',
      '60 g butter',
      '100 ml warm milk',
      '1 onion, sliced',
      '20 g plain flour',
      '300 ml beef stock',
      '3 tbsp mustard'
    ],
    st: [
      'Boil the potatoes in salted water for 20 minutes until soft. Drain.',
      'Warm the sauerkraut with the juniper in a pan for 10 minutes.',
      'While the potatoes boil, bring water to the boil in a wide pan, take it off the heat, slide in the sausages, cover and let them poach off the heat for 15 minutes.',
      'Soften the onion in 20 g butter for 5 minutes, stir in the flour, then whisk in the stock and simmer for 5 minutes for gravy.',
      'Mash the potatoes with the remaining butter and milk, stir in the sauerkraut, and serve with the sliced sausage, gravy and mustard.'
    ],
    tips: [
      'Never boil the sausage.',
      'Drain the sauerkraut before mixing.',
      'Make a well in the mash for the gravy.'
    ],
    pair: ['Mustard', 'Gravy', 'Pickles', 'Beer'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [736, 25, 60, 44, 10, 8, 2060]
  },

  'kapsalon': {
    d: 'Dutch fast food of chips topped with spiced chicken, melted cheese, salad and garlic sauce, baked in one tray for 25 minutes.',
    meta: 'Kapsalon, Dutch tray of chips with spiced chicken, melted cheese, salad and garlic sauce, baked for 25 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['kapsalon', 'dutch kapsalon', 'chips with kebab meat and cheese', 'kapsalon with chicken', 'dutch fast food tray'],
    why: 'A table for four and a single tray: kapsalon started in a Rotterdam hairdresser\'s, the name means barber shop, and it has become the best known Dutch fast food. It is a heap of chips under spiced meat, melted cheese and a cold salad, with garlic sauce over the lot.\n\nThe meat here is chicken thighs marinated in cumin, paprika, garlic and yoghurt, then roasted until the edges char. Slice it thin. **Bake the chips first and the cheese last**, so the chips stay crisp and the cheese melts to a bubbling blanket. Use frozen oven chips or cut your own, tossed in oil and roasted for 25 minutes.\n\nSpread the hot chips in a tray, lay the sliced chicken on top, cover with grated Gouda and return to the oven for 5 minutes. Pile shredded lettuce, tomato and cucumber on the cheese and pour the garlic sauce over, with a drizzle of chilli sauce. Eat with a fork straight from the tray. It is a meal that works better with a cold drink at the side.',
    ing: [
      '800 g chicken thigh fillets',
      '100 g plain yoghurt',
      '2 garlic cloves, crushed',
      '2 tsp ground cumin',
      '2 tsp paprika',
      '2 tbsp olive oil',
      '1 tsp salt',
      '900 g oven chips',
      '200 g Gouda, grated',
      '150 g shredded lettuce',
      '2 tomatoes, diced',
      '1/2 cucumber, diced',
      '120 g garlic sauce',
      '2 tbsp chilli sauce'
    ],
    st: [
      'Mix the chicken with the yoghurt, garlic, cumin, paprika, oil and salt. Marinate, covered, in the fridge for 15 minutes.',
      'Heat the oven to 220C. Bake the chips on a tray for 25 minutes. At the same time, roast the chicken on a second tray for 20 minutes, turning once, until charred at the edges. Slice thin.',
      'Spread the chips in a large baking dish, lay the chicken on top and cover with the Gouda. Bake for 5 minutes until melted.',
      'Pile the lettuce, tomato and cucumber on top and pour over the garlic and chilli sauces. Serve from the dish.'
    ],
    tips: [
      'Bake the chips until crisp before assembling.',
      'Add the cheese last.',
      'Slice the chicken thin so it layers well.'
    ],
    pair: ['Cold drinks', 'Pickled chillies', 'Extra garlic sauce'],
    store: 'Best fresh.',
    nut: [974, 65, 84, 42, 10, 7, 1420]
  },

  'boterkoek': {
    d: 'A Dutch butter cake, dense and chewy with almond and lemon, baked for 30 minutes and cut into squares.',
    meta: 'Boterkoek, dense chewy Dutch butter cake with almond and lemon, baked for 30 minutes at 180C. Twelve servings, ready in 1 hour.',
    kw: ['boterkoek', 'dutch butter cake', 'dutch almond butter cake', 'boterkoek recipe', 'dense dutch butter cake with almonds'],
    why: 'How can a cake made with so much butter stay firm? Because the dough has almost no liquid, only an egg, and it bakes more like shortbread than sponge. Boterkoek is the Dutch butter cake, a flat, golden, dense square with a chewy edge, and it is one of the simplest bakes in the Dutch kitchen.\n\nBeat the soft butter with the sugar until creamy, then add the egg yolk, lemon zest and a drop of almond essence, and finally the flour and a little salt. The dough will be soft and sticky. **Press it into the tin with floured fingers**, and smooth the top. Mark a criss cross pattern with a fork, brush with the egg yolk and press an almond into each piece.\n\nBake at 180C for 30 minutes until deep gold at the edges and a little pale in the centre. Cool in the tin for 15 minutes and cut into squares while still slightly warm, as the cake hardens as it cools. It keeps for a week in a tin, and the flavour improves with a day or two. Serve with coffee or tea.',
    ing: [
      '250 g butter, softened',
      '200 g caster sugar',
      '1 egg',
      '1 egg yolk, for brushing',
      '1 lemon, zest',
      '1/2 tsp almond extract',
      '250 g plain flour',
      '1 pinch salt',
      '12 g whole almonds'
    ],
    st: [
      'Heat the oven to 180C and line a 20 cm square tin.',
      'Beat the butter and sugar for 3 minutes. Beat in the egg, zest and almond extract.',
      'Stir in the flour and salt to a soft dough. Press into the tin with floured fingers.',
      'Mark a criss cross with a fork, brush with the egg yolk and press the almonds on top.',
      'Bake for 30 minutes until deep gold at the edges. Cool in the tin for 15 minutes and cut into squares.'
    ],
    tips: [
      'Press the dough in with floured fingers.',
      'Cut while slightly warm.',
      'Do not overbake, or it turns hard.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Keeps for 1 week in a tin.',
    nut: [310, 4, 33, 18, 1, 17, 30]
  },

  'gevulde-koeken': {
    d: 'Dutch round biscuits of buttery spiced dough filled with almond paste, glazed with egg and baked for 20 minutes.',
    meta: 'Gevulde koeken, Dutch round biscuits filled with almond paste, baked for 20 minutes at 180C. Twelve servings, ready in 1 hour 30 minutes.',
    kw: ['gevulde koeken', 'dutch almond filled biscuits', 'almond paste filled cookies', 'gevulde koeken recipe', 'dutch almond biscuits'],
    why: 'The first sign they are done is the smell: butter and almond, with a faint scent of lemon, drifting from the oven. Gevulde koeken are Dutch almond filled biscuits, soft inside and crisp at the edge, with a thick layer of almond paste hidden between two rounds of dough.\n\nThe dough is a rich shortcrust, made from butter, sugar, flour, an egg and a pinch of baking powder, and it is chilled for 30 minutes. The filling is almond paste, beaten with a little egg and lemon zest until it can be shaped into discs. **Roll the paste into discs just smaller than the biscuit**, so there is a border of dough to seal round the edge. Press them between two layers of dough in a greased ring or muffin tin.\n\nBrush the tops with beaten egg and press an almond into the middle. Bake at 180C for 20 minutes, until the tops are rich gold and the edges are firm. Cool in the tin for 10 minutes. The biscuits keep for a week in a tin and the paste gets softer and more moist with time.',
    ing: [
      '300 g plain flour',
      '150 g cold butter, cubed',
      '125 g caster sugar',
      '1 egg',
      '1 tsp baking powder',
      '1 pinch salt',
      '250 g almond paste',
      '1 egg, for the paste',
      '1 lemon, zest',
      '1 egg yolk, for glazing',
      '12 g whole almonds'
    ],
    st: [
      'Rub the butter into the flour, sugar, baking powder and salt, add the egg and press into a dough. Chill for 30 minutes.',
      'Heat the oven to 180C and grease a 12 hole muffin tin. Beat the almond paste with 1 egg and the lemon zest until smooth. Shape into 12 discs.',
      'Press two thirds of the dough into the holes. Place a disc of paste in each.',
      'Cover with the remaining dough rolled into 12 lids and press the edges to seal. Brush with the yolk and press an almond on top.',
      'Bake for 20 minutes until rich gold. Cool in the tin for 10 minutes.'
    ],
    tips: [
      'Chill the dough so it is easy to handle.',
      'Seal the edges so the paste stays in.',
      'Cool in the tin before turning out.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Keeps for 1 week in a tin.',
    nut: [374, 9, 35, 22, 4, 12, 70]
  },

  'tompouce': {
    d: 'Two layers of crisp puff pastry sandwiching thick vanilla pastry cream under a pink icing, the classic Dutch cake.',
    meta: 'Tompouce, Dutch cake of puff pastry and vanilla cream under pink icing, baked for 15 minutes. Eight servings, ready in 1 hour 15 minutes.',
    kw: ['tompouce', 'dutch tompouce', 'pink iced puff pastry cake', 'dutch custard slice', 'tompouce recipe'],
    why: 'It looks like a pink brick and eats like a custard slice, which is what a tompouce is. This is the classic Dutch cake, a slab of crisp puff pastry on the bottom and top with a thick vanilla cream between, and the top is covered with pink icing and eaten on the Queen\'s Day, now King\'s Day, when it is dyed orange.\n\nBake the puff pastry between two trays so it rises evenly and stays flat. Cool it completely, then trim the edges and cut into rectangles. For the cream, cook milk, yolks, sugar and cornflour for 5 minutes until very thick, beat in vanilla and cool, then fold in whipped cream. **Make the cream stiff**, because a runny cream squirts out of the sides when you cut the slice.\n\nSpread the cream on the base layer in a thick slab and press the top layer on. Mix icing sugar with a little raspberry juice and water until it is thick enough to spread without running and ice the tops. Let the icing set for 20 minutes. Cut with a serrated knife using a sawing motion, and eat with a fork, as it will squeeze out when bitten.',
    ing: [
      '640 g ready rolled puff pastry, 2 sheets',
      '500 ml whole milk',
      '4 egg yolks',
      '100 g caster sugar',
      '40 g cornflour',
      '1 tsp vanilla extract',
      '150 ml double cream',
      '200 g icing sugar',
      '2 tbsp raspberry juice',
      '1 tbsp water'
    ],
    st: [
      'Heat the oven to 200C. Lay the pastry on a lined tray, cover with baking paper and a second tray and bake for 15 minutes until gold. Cool.',
      'Whisk the yolks, sugar and cornflour with a little milk. Warm the rest of the milk, pour on, return to the pan and stir for 5 minutes until very thick. Add the vanilla and cool.',
      'Whip the cream to stiff peaks and fold into the cooled custard.',
      'Trim the pastry and cut into 8 rectangles for the base and 8 for the top.',
      'Spread the cream thickly on the bases and press on the tops.',
      'Mix the icing sugar, juice and water to a thick icing, spread over the tops and leave to set for 20 minutes.'
    ],
    tips: [
      'Bake the pastry between trays so it stays flat.',
      'Make the cream stiff.',
      'Cut with a serrated knife in a sawing motion.'
    ],
    pair: ['Coffee', 'Tea', 'Sparkling wine'],
    store: 'Best the day it is assembled.',
    nut: [619, 10, 75, 31, 2, 44, 540]
  },

  'vlaai': {
    d: 'A Limburg fruit pie with a soft yeast crust and a cherry or apricot filling under a lattice, risen for 1 hour and baked for 40 minutes.',
    meta: 'Vlaai, Limburg fruit pie with a yeast crust and cherry filling, baked for 40 minutes at 200C. Ten servings, ready in 1 hour 10 minutes plus rising.',
    kw: ['vlaai', 'limburg vlaai', 'dutch fruit pie with yeast crust', 'cherry vlaai', 'vlaai recipe'],
    why: 'What do you get if a pie is made on a bread dough? A vlaai, the fruit pie of Limburg, in the south of the Netherlands, with a shallow soft crust, a thick sweet filling and, for celebrations, a lattice top. It is served in wedges at coffee time, in generous slices.\n\nThe dough is an enriched yeast dough, sweet and light, risen for 1 hour and rolled into the tin. The filling is simple: cherries or apricots with sugar and a little cornflour, simmered until thick and cooled. **Let the filling cool before it goes on the dough**, as a hot filling kills the yeast and makes a doughy base. Prick the base before filling to stop it puffing.\n\nSpread the fruit in a thick layer and lay strips of dough across in a lattice. Brush with beaten egg and bake at 200C for 40 minutes, until golden. Cool in the tin and serve at room temperature, with whipped cream. A well made vlaai has a thin crust and a deep filling, so use plenty of fruit.',
    ing: [
      '400 g strong bread flour',
      '7 g instant yeast',
      '50 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '1 egg',
      '60 g butter, softened',
      '800 g pitted cherries',
      '100 g caster sugar, for the filling',
      '30 g cornflour',
      '1 egg, for glazing'
    ],
    st: [
      'Mix the flour, yeast, 50 g sugar, salt, milk, egg and butter and knead for 8 minutes. Leave to rise for 1 hour.',
      'Simmer the cherries with the 100 g sugar for 8 minutes. Stir in the cornflour mixed with water and cook for 2 minutes until thick. Cool.',
      'Heat the oven to 200C. Roll two thirds of the dough and line a 26 cm tin. Prick the base and spread with the cherries.',
      'Cut the rest of the dough into strips and lay them in a lattice. Brush with the beaten egg.',
      'Bake for 40 minutes until golden. Cool in the tin.'
    ],
    tips: [
      'Cool the filling before spooning it on.',
      'Prick the base to stop it puffing.',
      'Use plenty of fruit.'
    ],
    pair: ['Whipped cream', 'Coffee', 'Tea'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [60, 'Rising'],
    nut: [304, 7, 51, 8, 3, 28, 450]
  },

  'callos-a-la-madrilena': {
    d: 'Madrid style tripe stew with chorizo, morcilla, chickpeas and smoked paprika, simmered for 2 hours 30 minutes.',
    meta: 'Callos a la madrileña, Madrid tripe stew with chorizo, morcilla and paprika, cooked for 2 hours 30 minutes. Six servings, ready in 2 hours 50 minutes.',
    kw: ['callos a la madrilena', 'madrid tripe stew', 'spanish tripe with chorizo', 'callos madrilenos recipe', 'tripe and chorizo stew'],
    why: 'Most people who dislike tripe have only had it undercooked, and the fix is time. Callos a la madrileña is the Madrid tripe stew, a sticky, paprika red dish thickened by the gelatine in the trotter and the tripe, and flavoured with chorizo and morcilla.\n\nBuy cleaned tripe and a pig\'s trotter, rinse them and boil for 15 minutes in water, then drain and discard the water. This removes the strong smell. Cut the tripe into 3 cm squares. Soften onion, garlic and a ham bone in oil, stir in smoked paprika **off the heat so it does not burn**, then add tomato, wine, stock and the meats. The sauce should barely cover.\n\nSimmer on a very low heat for 2 hours, adding the chickpeas and chorizo for the last 30 minutes, and the morcilla for the last 10. The stew is ready when the tripe is soft and the sauce has thickened and become glossy. Callos tastes better the next day. Serve in small bowls with bread, and a glass of young red wine.',
    ing: [
      '800 g cleaned beef tripe',
      '500 g pig trotter',
      '3 tbsp olive oil',
      '2 onions, chopped',
      '4 garlic cloves',
      '2 tbsp smoked paprika',
      '400 g tinned chopped tomatoes',
      '150 ml dry white wine',
      '1 litre water',
      '2 bay leaves',
      '200 g chorizo, sliced',
      '150 g morcilla, sliced',
      '400 g tinned chickpeas, drained',
      '1 tsp salt'
    ],
    st: [
      'Boil the tripe and trotter in water for 15 minutes. Drain, rinse and cut the tripe into 3 cm squares.',
      'Soften the onions and garlic in the oil for 8 minutes. Take off the heat, stir in the paprika, then add the tomatoes, wine, water and bay.',
      'Add the tripe and trotter, bring to a bare simmer and cook on very low heat for 2 hours.',
      'Add the chorizo and chickpeas and cook for 20 minutes, then the morcilla for 10 minutes.',
      'Remove the trotter bones and bay, season with the salt and serve.'
    ],
    tips: [
      'Boil the tripe first to remove the smell.',
      'Stir in the paprika off the heat.',
      'Cook very slowly and let it stand overnight if you can.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Pickled peppers'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [635, 46, 25, 39, 6, 6, 1270]
  },

  'boquerones-en-vinagre': {
    d: 'Fresh anchovy fillets cured in white wine vinegar for 2 hours, then dressed with garlic, parsley and olive oil.',
    meta: 'Boquerones en vinagre, fresh anchovies cured in vinegar with garlic and parsley, ready in 15 minutes plus freezing and curing. Four servings, no cooking.',
    kw: ['boquerones en vinagre', 'spanish vinegar anchovies', 'white anchovies in vinegar', 'marinated fresh anchovies', 'boquerones recipe'],
    why: 'Freeze the anchovies first. That is the problem-first fix for boquerones en vinagre, the Spanish tapas of fresh anchovies cured in vinegar: raw fish can carry anisakis worms, which vinegar does not kill. Freezing does, given 7 days at −20°C / −4°F or colder in a freezer that really reaches it, and only then do the anchovies go into the vinegar.\n\nSplit the fresh anchovies open, take out the backbone and heads, wash them well and arrange them in a single layer in a dish. Cover with white wine vinegar mixed with a little water and salt, and leave in the fridge for 2 hours. **The flesh turns white and firm** as the vinegar works on it, as if it had been cooked. Pour the vinegar off and rinse the fish gently under cold water.\n\nDry them on kitchen paper, arrange them in a clean dish, sprinkle with sliced garlic and parsley and cover with olive oil. Leave for 1 hour more before serving. They keep for 3 days in the fridge and their flavour improves overnight. Serve cold, on bread, with olives and a glass of chilled dry sherry.',
    ing: [
      '500 g very fresh anchovies, frozen at −20°C / −4°F or colder for 7 days, then thawed in the fridge',
      '300 ml white wine vinegar',
      '100 ml water',
      '1 tsp salt',
      '4 garlic cloves, sliced',
      '3 tbsp chopped parsley',
      '100 ml extra virgin olive oil',
      '4 slices crusty bread'
    ],
    st: [
      'Split the anchovies open, remove the heads and backbones, wash and arrange in a single layer in a dish.',
      'Mix the vinegar, water and salt and pour over. Cover and chill for 2 hours until the flesh is white.',
      'Drain, rinse under cold water and dry on kitchen paper.',
      'Lay in a clean dish, scatter with the garlic and parsley and cover with the oil. Leave for 1 hour.',
      'Serve cold on the bread.'
    ],
    tips: [
      'Freeze the fish for 7 days at −20°C / −4°F first; a freezer that only reaches −18°C is not cold enough.',
      'Use only very fresh anchovies.',
      'Rinse off the vinegar before oiling.'
    ],
    pair: ['Crusty bread', 'Olives', 'Dry sherry', 'Cold beer'],
    store: 'Keeps for 3 days in the fridge, covered in oil.',
    rest: [10260, 'Freezing and curing'],
    nut: [548, 39, 17, 36, 1, 2, 5370]
  },

  'boquerones-fritos': {
    d: 'Whole fresh anchovies dusted with flour and fried for 2 minutes until crisp, served with lemon, a classic of the Andalusian coast.',
    meta: 'Boquerones fritos, crisp fried fresh anchovies with lemon, cooked for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['boquerones fritos', 'fried anchovies spanish', 'andalusian fried fish tapas', 'crispy fried fresh anchovies', 'boquerones fritos recipe'],
    why: 'Fry them in small handfuls and in very hot oil. That is the short instruction for boquerones fritos, the little crisp anchovies of the Andalusian coast, which are sold in paper cones from beach bars and eaten whole, bones and all.\n\nBuy the freshest anchovies you can, with bright eyes and shiny skins. Rinse them in cold water, drain them well and pat them completely dry. **Dust them in a mix of plain flour and fine semolina** if you can find it, and shake off the excess in a sieve. The coating should be almost invisible, a dry veil and not a batter.\n\nHeat the oil to 190C, and fry in small batches for 2 minutes until golden and crisp. Remove with a slotted spoon, drain on kitchen paper and sprinkle with salt at once. Eat them hot, with lemon wedges, and with a cold beer or a glass of fino sherry. They go soft within minutes, so fry only what you can eat and serve the next batch when it is ready.',
    ing: [
      '600 g fresh anchovies, cleaned',
      '100 g plain flour',
      '50 g fine semolina',
      '1 tsp salt',
      '90 ml olive oil absorbed, from 600 ml for frying',
      '1 lemon, in wedges'
    ],
    st: [
      'Rinse the anchovies, drain and pat completely dry.',
      'Mix the flour, semolina and half the salt. Toss the fish in it and shake off the excess in a sieve.',
      'Heat the oil to 190C. Fry in 4 small batches for 2 minutes each until golden and crisp.',
      'Drain on kitchen paper, sprinkle with the remaining salt and serve with the lemon.'
    ],
    tips: [
      'Dry the fish thoroughly before dusting.',
      'Fry in small batches in very hot oil.',
      'Eat as soon as they come out.'
    ],
    pair: ['Lemon wedges', 'Cold beer', 'Dry sherry', 'Bread'],
    store: 'Best fresh.',
    nut: [632, 48, 29, 36, 2, 1, 6140]
  },

  'merluza-a-la-vasca': {
    d: 'Hake steaks in a green parsley and garlic sauce with clams, peas and asparagus, a Basque classic ready in 45 minutes.',
    meta: 'Merluza a la vasca, Basque hake in green sauce with clams, peas and asparagus, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['merluza a la vasca', 'basque hake in green sauce', 'hake with clams and peas', 'merluza en salsa verde', 'basque fish in parsley sauce'],
    why: 'This is what to cook when the season turns, in the first spring week when peas and asparagus are sweet and hake is cheap. Merluza a la vasca, the Basque hake dish, is a cazuela of fish steaks poached in a green sauce of garlic, parsley and wine, with clams in their shells and a few spring vegetables.\n\nThe sauce makes itself. Soften garlic gently in olive oil without browning, stir in a spoonful of flour, add white wine and fish stock and simmer for 5 minutes. **Shake the pan and do not stir** once the fish goes in, because the gelatine in the hake and the flour combine to thicken the sauce, and stirring breaks the fish. Lay the steaks in the sauce, add the clams, peas and asparagus tips and cover.\n\nCook for 8 to 10 minutes, shaking the pan now and then, until the hake is opaque, the clams are open and the sauce has turned thick and glossy. Throw away any clams that stay shut. Finish with a large handful of chopped parsley and, if you like, halved hard boiled eggs. Serve in the cazuela with bread to mop up the sauce.',
    ing: [
      '800 g hake steaks',
      '4 tbsp olive oil',
      '6 garlic cloves, sliced',
      '1 tbsp plain flour',
      '150 ml dry white wine',
      '300 ml fish stock',
      '400 g clams, cleaned',
      '150 g frozen peas',
      '8 asparagus tips, 100 g',
      '5 tbsp chopped parsley',
      '1 tsp salt'
    ],
    st: [
      'Season the hake with half the salt. Warm the oil in a wide shallow pan and soften the garlic for 2 minutes without browning.',
      'Stir in the flour for 1 minute. Add the wine and stock and simmer for 5 minutes.',
      'Lay the hake in the sauce, add the clams, peas and asparagus tips and cover.',
      'Cook for 8 to 10 minutes, shaking the pan, until the clams open and the fish is opaque. Discard unopened clams.',
      'Stir in the parsley and remaining salt and serve with bread.'
    ],
    tips: [
      'Do not let the garlic brown.',
      'Shake the pan rather than stirring.',
      'Throw away clams that stay shut.'
    ],
    pair: ['Crusty bread', 'Txakoli', 'Green salad'],
    store: 'Best fresh. Do not store.',
    nut: [539, 60, 14, 27, 3, 3, 1550]
  },

  'zarzuela-de-pescado': {
    d: 'A Catalan stew of mixed fish and shellfish in a tomato, wine and almond sauce, ready in 1 hour 10 minutes.',
    meta: 'Zarzuela de pescado, Catalan stew of fish and shellfish in tomato, wine and almond sauce, cooked for 40 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['zarzuela de pescado', 'catalan fish stew', 'spanish seafood stew', 'zarzuela recipe', 'mixed fish and shellfish stew'],
    why: 'A Sunday dish for a table of six, and one that looks far more difficult than it is. Zarzuela de pescado is a Catalan fish stew whose name means operetta, a show with many characters: prawns, mussels, squid, clams and firm white fish in a sauce thickened with ground almonds.\n\nThe flavour of the stew comes from the sofrito, the base of onion, tomato and garlic, simmered slowly until it is dark and sweet, and the picada, a paste of toasted almonds, garlic and parsley pounded together. Make the sofrito first and cook it for 20 minutes. **Add the shellfish and fish in order of how long they take**: firm fish first, clams and mussels next, prawns and squid last. Each stage needs only a few minutes.\n\nStir the picada into the sauce at the end, with a splash of brandy, and let the stew simmer for 3 minutes to thicken. Discard any clams or mussels that stay shut. Serve it in the pan at the table, with toasted bread rubbed with garlic and a glass of cold white wine. Do not leave any seafood over the heat too long.',
    ing: [
      '4 tbsp olive oil',
      '2 onions, finely chopped',
      '4 garlic cloves, chopped',
      '600 g ripe tomatoes, grated',
      '1 tsp smoked paprika',
      '150 ml dry white wine',
      '500 ml fish stock',
      '500 g firm white fish, in chunks',
      '300 g mussels, cleaned',
      '300 g clams, cleaned',
      '300 g raw prawns',
      '200 g squid, in rings',
      '40 g toasted almonds',
      '2 garlic cloves, for the picada',
      '3 tbsp chopped parsley',
      '2 tbsp brandy'
    ],
    st: [
      'Cook the onions in the oil for 10 minutes. Add the garlic and tomatoes and cook for 20 minutes, stirring, until dark and thick. Stir in the paprika.',
      'Add the wine and stock and simmer for 5 minutes.',
      'Pound the almonds, garlic and half the parsley to a paste with a little stock.',
      'Add the white fish to the pan and cook for 4 minutes. Add the mussels and clams, cover and cook for 4 minutes until open. Add the prawns and squid for 3 minutes.',
      'Stir in the almond paste and brandy and simmer for 3 minutes. Discard any shut shells. Scatter with the remaining parsley.'
    ],
    tips: [
      'Cook the sofrito until dark.',
      'Add the seafood in order of cooking time.',
      'Throw away any shells that stay shut.'
    ],
    pair: ['Garlic toast', 'Dry white wine', 'Green salad'],
    store: 'Best fresh. Do not reheat the seafood.',
    nut: [396, 47, 16, 16, 3, 5, 870]
  }
};
