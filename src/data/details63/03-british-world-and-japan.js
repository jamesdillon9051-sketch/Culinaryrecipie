'use strict';

/**
 * Volume sixty-three, third part: a British fritter, the Australian dagwood
 * dog, Filipino, Jamaican and West African dishes, a Russian soup, Swiss,
 * Dutch, Swedish and Greek dishes, a Portuguese hot sauce and the first
 * Japanese dishes. Waits of an hour or more are declared as rest. Nutrition
 * is computed from the ingredient lists by npm run calc.
 */

module.exports = {
  'spam-fritters': {
    d: 'Luncheon meat sliced thick, dipped in a light batter and fried for 15 minutes until golden, crisp outside and salty within.',
    meta: 'Spam fritters: luncheon meat slices in a crisp batter, fried until golden. Four servings, ready in 25 minutes.',
    kw: ['spam fritters', 'spam fritters recipe', 'luncheon meat fritters', 'battered spam', 'fried spam in batter'],
    why: `Spam, flour, egg, water and a pan of hot oil: five things and about twenty-five minutes. Spam fritters are one of those cheap wartime-era British dishes that survived because they taste good, a salty, crisp-edged slice of meat in a puffed golden coat. Simple, salty and crisp.

Slice the meat thick enough to hold its shape, about the width of a finger, and pat it dry. A wet slice will not hold the batter. **Make the batter thick and ice cold**, because cold batter hitting hot oil puffs and crisps instead of turning greasy. A spoonful of baking powder helps it rise.

Fry in oil heated to 180C, a few slices at a time, turning once, until deep golden. Drain on kitchen paper and sprinkle with a little pepper. Spam is already salty, so no more salt is needed. Serve with chips and a sharp sauce, or in a soft roll with brown sauce. Chips go on the side.`,
    ing: [
      '340 g canned ham (luncheon meat such as Spam), sliced 1 cm thick',
      '150 g plain flour',
      '1 tsp baking powder',
      '1 egg',
      '150 ml cold water',
      '1/4 tsp black pepper',
      '500 ml vegetable oil, for frying'
    ],
    st: [
      'Whisk the flour, baking powder, egg, water and pepper into a thick batter.',
      'Heat the oil in a deep pan to 180C. Pat the meat slices dry.',
      'Dip the slices in the batter and fry 3 or 4 at a time for 3 minutes on each side until deep golden.',
      'Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Pat the slices dry so the batter clings.',
      'Use cold water for the batter for a crisper coat.',
      'Fry in small batches to keep the oil hot.'
    ],
    pair: ['Chips', 'Mushy peas', 'Brown sauce', 'Fried egg'],
    store: 'Best eaten at once. Leftovers keep for 2 days in the fridge and reheat in a hot oven.'
  },

  'dagwood-dog': {
    d: 'A frankfurter on a stick coated in a thick cornmeal batter and deep-fried for 3 minutes until golden, served with tomato sauce.',
    meta: 'Dagwood dog: battered, deep-fried hot dogs on sticks with tomato sauce. Six servings, ready in 30 minutes.',
    kw: ['dagwood dog', 'dagwood dog recipe', 'australian dagwood dogs', 'battered hot dogs on a stick', 'corn dog australian style'],
    why: `A hot dog dressed for a day out: a frankfurter on a stick, dipped in a thick cornmeal batter and deep-fried, a favourite at Australian fairs, footy grounds and showgrounds. The tomato sauce is the standard accompaniment, squeezed on thickly. Eat it on a stick.

The batter is what separates a dagwood dog from a plain fried sausage. Self-raising flour, cornmeal, an egg, milk and a spoonful of sugar make a thick mixture that clings. Pour it into a tall glass, so each sausage can be dipped in one pass. **Dry the sausages thoroughly** and roll them in a little flour first; the batter slides off damp skins. Tall glasses help.

Heat the oil to 180C in a deep pan and lower the sausages in one at a time. Fry until deep golden brown, turning, and drain on kitchen paper. Eat them within a few minutes while the coating is crisp, with tomato sauce and mustard. Mustard is optional.`,
    ing: [
      '300 g frankfurters (6 sausages)',
      '6 wooden skewers',
      '2 tbsp plain flour, for dusting',
      '150 g self-raising flour',
      '100 g fine cornmeal',
      '1 tsp sugar',
      '1/2 tsp salt',
      '1 egg',
      '200 ml whole milk',
      '1 litre vegetable oil, for frying',
      '6 tbsp tomato sauce, to serve'
    ],
    st: [
      'Pat the frankfurters dry, push a skewer into each and roll in the plain flour.',
      'Whisk the self-raising flour, cornmeal, sugar, salt, egg and milk into a thick batter and pour into a tall glass.',
      'Heat the oil to 180C in a deep, heavy pan.',
      'Dip each frankfurter in the batter, then lower into the oil. Fry for 3 minutes, turning, until deep golden. Cook 2 at a time.',
      'Drain on kitchen paper and serve with tomato sauce.'
    ],
    tips: [
      'Keep the batter thick enough to coat the back of a spoon.',
      'Fry only 2 at a time so the oil temperature stays steady.',
      'Check the oil with a thermometer; hot oil is dangerous, so use a deep, stable pan.'
    ],
    pair: ['Tomato sauce', 'Mustard', 'Hot chips', 'Coleslaw'],
    store: 'Best eaten at once. Not suitable for keeping.'
  },

  'bulalo': {
    d: 'A Filipino beef shank soup simmered for 3 hours with marrow bones, corn and cabbage in a clear, rich broth seasoned with fish sauce.',
    meta: 'Bulalo: Filipino beef shank and marrow bone soup with corn and cabbage, simmered for 3 hours. Six servings.',
    kw: ['bulalo', 'bulalo recipe', 'filipino beef shank soup', 'beef bone marrow soup', 'bulalo with corn and cabbage'],
    why: `Bulalo is the Filipino answer to a cold, rainy day: a pot of beef shank and marrow bones simmered until the meat is tender and the broth is rich and clear. In the Philippines, the dish is closely tied to the cool highland areas, though cooks make it all over the country. Rainy days suit it.

The skill is in keeping the broth clear. Cover the beef and bones with cold water, bring to the boil and boil for five minutes, then pour off the grey scum along with the water and rinse the bones. **Start again with fresh water.** This extra step is why the finished soup looks clean and tastes of beef, not of scum.

Simmer, barely bubbling, for nearly three hours, then add the corn, potatoes and cabbage so they cook through without turning to mush. Season with fish sauce and pepper. Serve in deep bowls with the marrow bone sitting in each, and a dish of fish sauce with chilli and calamansi on the side.`,
    ing: [
      '1.5 kg beef shank, cut into thick pieces, with marrow bones',
      '2.5 litres water',
      '1 onion, quartered',
      '1 tsp whole black peppercorns',
      '3 tbsp fish sauce',
      '3 corn cobs, each cut into 3 pieces',
      '300 g potatoes, halved',
      '300 g cabbage, cut into wedges',
      '200 g pak choi, halved'
    ],
    st: [
      'Put the beef and bones in a large pot, cover with cold water and boil for 5 minutes. Drain, rinse the meat and bones and wipe the pot clean.',
      'Return the beef to the pot with the 2.5 litres fresh water, onion and peppercorns. Bring to the boil, then simmer gently for 2 hours 45 minutes until the beef is tender.',
      'Add the fish sauce, corn and potatoes and simmer for 10 minutes. Add the cabbage and simmer for 5 minutes more.',
      'Add the pak choi for the last minute. Serve in deep bowls with a marrow bone in each.'
    ],
    tips: [
      'Skim any scum that rises during the simmer.',
      'Keep the broth at a bare simmer; a hard boil makes it cloudy.',
      'Add the vegetables in stages so each stays in shape.'
    ],
    pair: ['Steamed rice', 'Fish sauce with chilli', 'Calamansi or lime', 'Salted egg'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months. Reheat until boiling.'
  },

  'caldereta': {
    d: 'A Filipino beef stew simmered for 2 hours in tomato sauce with chicken livers, peppers, olives and potatoes, finished with grated cheese.',
    meta: 'Caldereta: Filipino beef stew in a tomato and liver sauce with peppers, olives and potatoes, cooked for 2 hours. Six servings.',
    kw: ['caldereta', 'beef caldereta', 'filipino beef stew', 'caldereta recipe', 'kaldereta with liver sauce'],
    why: `A caldereta that tastes thin or plain is almost always short on one thing: time. The beef needs a full two hours in the tomato sauce to turn tender, and the liver has to melt into the sauce so it thickens and deepens it. Time does the rest.

Brown the beef well in batches, because crowding the pot makes it grey and stewy. Soften onion and garlic in the same fat, add tomato sauce, stock and bay leaf, and return the beef. **Simmer gently with the lid on.** A steady, low bubble keeps the meat from drying and lets the sauce reduce slowly.

Add the potatoes and carrots for the last thirty minutes so they stay in chunks. Stir in the red pepper, olives and a handful of grated cheese at the end; the cheese enriches the sauce and rounds off the sharpness of the tomato. A dash of chilli gives the dish its warm edge. Serve with plenty of rice.`,
    ing: [
      '1 kg beef chuck, cut into 4 cm cubes',
      '3 tbsp vegetable oil',
      '1 large onion, chopped',
      '4 garlic cloves, crushed',
      '400 g tomato sauce',
      '500 ml beef stock',
      '2 bay leaves',
      '100 g chicken livers, finely chopped',
      '400 g potatoes, in chunks',
      '2 carrots, in chunks',
      '1 red pepper, cut into strips',
      '60 g green olives',
      '50 g grated cheddar',
      '1 tsp chilli flakes'
    ],
    st: [
      'Brown the beef in the oil in 2 batches for 8 minutes in total. Lift out.',
      'Soften the onion and garlic in the pot for 5 minutes, then add the livers and mash them into the onion for 2 minutes. Add the tomato sauce, stock and bay leaves and return the beef.',
      'Cover and simmer for 1 hour 30 minutes, stirring now and then, until the beef is almost tender.',
      'Add the potatoes and carrots and cook for 25 minutes until tender.',
      'Add the pepper, olives, cheese and chilli and cook for 5 minutes. Serve with rice.'
    ],
    tips: [
      'Brown the beef in batches for a deeper sauce.',
      'Mash the livers well so they melt into the sauce.',
      'Add the vegetables late so they hold their shape.'
    ],
    pair: ['Steamed rice', 'Fried plantains', 'Green salad', 'Pickled papaya'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.'
  },

  'bammy': {
    d: 'Flat, dense Jamaican cassava breads, soaked in coconut milk and pan-fried for 10 minutes until golden on both sides.',
    meta: 'Bammy: flat Jamaican cassava flatbreads soaked in coconut milk and pan-fried. Eight pieces, ready in 25 minutes.',
    kw: ['bammy', 'jamaican bammy', 'cassava bammy recipe', 'bammy with coconut milk', 'fried bammy'],
    why: `A day with fried fish, escovitch sauce and a hot bammy is about as Jamaican as a meal gets. The bammy is a flat, round bread made from cassava, and its flavour is mild and slightly sweet, which is why it soaks up sauce so well. Bread and fish go together.

Traditionally it is made from grated, pressed cassava. This version uses cassava flour, which gives the same chewy-soft texture without the work of squeezing out the juice. Mix the flour with salt and warm water into a firm dough, let it rest for a few minutes so the flour absorbs the water, and press it into flat rounds about a finger thick. **Wet your hands** as you shape; the dough is sticky and splits on dry skin.

Soaking the rounds in coconut milk for a few minutes gives them a soft, sweet centre. Then fry them in a little oil over a medium heat until golden, turning once. Serve them hot, split and buttered, or beside fish and vegetables. Leftovers toast well.`,
    ing: [
      '250 g cassava flour',
      '1/2 tsp salt',
      '250 ml warm water',
      '200 ml coconut milk',
      '3 tbsp coconut oil, for frying'
    ],
    st: [
      'Mix the cassava flour and salt in a bowl. Add the warm water and mix to a firm dough. Rest for 5 minutes.',
      'Divide into 8 pieces. With wet hands, press each into a round about 1 cm thick.',
      'Dip each round in the coconut milk for 1 minute on each side.',
      'Heat the oil in a wide pan over a medium heat. Fry the bammies for 4 minutes on each side until golden.',
      'Serve hot, split or whole.'
    ],
    tips: [
      'Add water a little at a time; cassava flour is thirsty.',
      'Keep your hands wet when shaping the rounds.',
      'Fry over a medium heat so the middles cook before the outsides colour too far.'
    ],
    pair: ['Escovitch fish', 'Ackee and saltfish', 'Butter', 'Steamed vegetables'],
    store: 'Best on the day. Keeps for 2 days; reheat in a dry pan.'
  },

  'coconut-drops': {
    d: 'Jamaican sweets of coconut chips cooked for 30 minutes in sugar, ginger and water until the syrup turns to a sticky glaze, then dropped in clusters to set.',
    meta: 'Coconut drops: chewy Jamaican sweets of coconut, brown sugar and ginger. Twenty pieces, ready in 40 minutes.',
    kw: ['coconut drops', 'jamaican coconut drops', 'coconut drops recipe', 'ginger coconut candy', 'jamaican coconut sweets'],
    why: `Why do coconut drops turn out chewy in one pan and hard as stone in the next? It comes down to when the pan comes off the heat. A syrup that has cooked too long sets like glass; one taken off a little early stays sticky and soft. Timing is everything.

Coconut chips go into a pan with brown sugar, grated ginger and a little water. Bring to a boil and stir, and the sugar melts into a thin syrup that thickens as the water cooks off. **Stir steadily for the last ten minutes**, because the sugar catches quickly. When the mixture clumps together and the bubbles slow, it is ready. Watch the pan.

Spoon small heaps onto a greased tray or sheet of baking paper straight away, since the mixture sets within minutes as it cools. Leave them to harden slightly, then lift them off. They keep well in a tin, and the ginger gives them a gentle warmth that is easy to adjust: use more for a sharper edge. Let them set.`,
    ing: [
      '300 g unsweetened coconut chips',
      '250 g dark brown sugar',
      '120 ml water',
      '2 tbsp grated fresh ginger',
      '1/4 tsp ground cinnamon',
      '1/4 tsp salt'
    ],
    st: [
      'Mix the sugar, water, ginger, cinnamon and salt in a heavy pan. Bring to the boil, stirring, until the sugar dissolves.',
      'Add the coconut chips and simmer for 30 minutes, stirring often, until the syrup is thick and clings to the coconut.',
      'Spoon heaps of about a tablespoon onto a greased tray, 20 in all.',
      'Leave to cool and set. Lift off the tray.'
    ],
    tips: [
      'Stir more often as the mixture thickens, so it does not catch.',
      'Grease the tray well; the sugar sticks hard.',
      'Work quickly when dropping the heaps; the mixture sets fast.'
    ],
    pair: ['A pot of tea', 'Ginger beer', 'Coffee', 'Fresh pineapple'],
    store: 'Keeps for 1 week in an airtight tin. Do not refrigerate.'
  },

  'fufu': {
    d: 'A smooth, stretchy West African dough made by stirring yam flour into boiling water for 20 minutes, shaped into balls and served with soup.',
    meta: 'Fufu: stretchy West African yam flour dough stirred smooth over the heat. Four servings, ready in 25 minutes.',
    kw: ['fufu', 'fufu recipe', 'yam flour fufu', 'how to make fufu', 'nigerian fufu for soup'],
    why: `Fufu is soft and stretchy and almost cool to the tongue, a starchy dough that is pinched off with the fingers, dipped in a spoonful of soup and swallowed. It has no strong flavour of its own, and that is exactly what makes it work with rich, spicy soups. Soft and cool.

Making it means arm work, since the flour must be beaten smooth as it cooks. Bring the water to the boil, then add the flour a little at a time, beating hard with a wooden spoon. **Add the flour gradually**, not all at once, or lumps form that are almost impossible to beat out. As the mixture thickens it will pull away from the sides of the pan and look glossy. Beat it hard.

Turn the heat low, cover and steam for a few minutes, then beat again until the dough is smooth and elastic. Shape it into rounds with a wet spoon or hands, because it sticks to everything dry. Serve at once, as it hardens as it cools, with egusi, okra or any thick soup. Wet hands help throughout.`,
    ing: [
      '300 g yam flour',
      '700 ml water'
    ],
    st: [
      'Bring the water to the boil in a heavy pan.',
      'Reduce the heat and add the yam flour a handful at a time, beating hard with a wooden spoon after each addition, until the dough is smooth.',
      'Cover, turn the heat low and steam for 5 minutes. Beat again for 5 minutes until stretchy and glossy.',
      'Shape into 4 balls with wet hands or a wet spoon and serve at once.'
    ],
    tips: [
      'Add the flour gradually, beating each time.',
      'Keep a bowl of water nearby to wet the spoon and hands.',
      'Serve at once; fufu stiffens as it cools.'
    ],
    pair: ['Egusi soup', 'Okra soup', 'Pepper soup', 'Groundnut soup'],
    store: 'Best eaten at once. Leftover fufu keeps for 1 day wrapped in the fridge; steam to soften.'
  },

  'solyanka': {
    d: 'A tangy Russian soup of mixed meats, pickled cucumbers, olives and tomato, simmered for 40 minutes and finished with lemon and sour cream.',
    meta: 'Solyanka: a sour and salty Russian soup of sausage, ham, pickles and olives, simmered for 40 minutes. Six servings.',
    kw: ['solyanka', 'russian solyanka soup', 'solyanka recipe', 'sour and salty meat soup', 'solyanka with pickles and olives'],
    why: `Solyanka is salty, sour, smoky and a little hot, the soup that wakes people up. Its flavour comes from a pot of mixed meats, brined cucumbers, olives, capers and tomato paste, and the result is among the most layered soups in Russian cooking. It wakes the palate.

Use several kinds of meat for depth: smoked sausage, cooked ham, a little beef, and bacon if wanted. Cut them into small pieces so there is some of each in every spoonful. Fry them with the onion until they begin to brown. **Cook the tomato paste for a full minute** before adding stock; this removes its raw edge and gives the soup a deep colour. Variety is the point.

Add the pickled cucumbers with a little of their brine, the olives and capers, and simmer. Taste near the end and adjust with more brine for sharpness, or a splash of stock if it is too sour. Serve with a slice of lemon, a spoonful of sour cream, fresh dill and a few more olives on top. Lemon finishes it.`,
    ing: [
      '200 g smoked sausage, sliced',
      '150 g cooked ham, diced',
      '200 g beef sirloin, cut into small pieces',
      '2 tbsp vegetable oil',
      '1 large onion, chopped',
      '2 tbsp tomato paste',
      '1.5 litres beef stock',
      '4 pickled cucumbers, diced',
      '100 ml pickle brine',
      '60 g pitted green olives',
      '2 tbsp capers',
      '2 bay leaves',
      '150 g soured cream, to serve',
      '1 lemon, cut into wedges',
      '2 tbsp chopped dill'
    ],
    st: [
      'Heat the oil in a large pot and brown the sausage, ham and beef over a medium-high heat for 8 minutes.',
      'Add the onion and cook for 5 minutes. Stir in the tomato paste and cook for 1 minute.',
      'Pour in the stock, add the bay leaves and simmer for 15 minutes.',
      'Add the cucumbers, brine, olives and capers and simmer for 10 minutes. Remove the bay leaves.',
      'Serve with soured cream, lemon wedges and dill.'
    ],
    tips: [
      'Cut the meats small so each spoonful has some of everything.',
      'Add the brine a little at a time, tasting as you go.',
      'Serve with plenty of lemon; the sourness is part of the soup.'
    ],
    pair: ['Rye bread', 'Soured cream', 'Lemon wedges', 'Dill'],
    store: 'Keeps for 4 days in the fridge. Freeze without the soured cream for 2 months.'
  },

  'zurcher-geschnetzeltes': {
    d: 'Veal cut into narrow strips and cooked for 20 minutes with mushrooms in a creamy white wine sauce, the best-known dish of Zürich.',
    meta: 'Zürcher Geschnetzeltes: veal strips in a creamy mushroom and white wine sauce. Four servings, ready in 35 minutes.',
    kw: ['zurcher geschnetzeltes', 'zurich style veal', 'swiss veal in cream sauce', 'veal in mushroom cream sauce', 'geschnetzeltes recipe'],
    why: `Dinner for four, on a Saturday, with rösti on the side: that is when this dish is at its best. Zürcher Geschnetzeltes is sliced veal in a cream sauce with mushrooms and white wine, and it is a Swiss restaurant classic that is easy to make at home. Rösti goes beside it.

Slice the veal thin and cut it into narrow strips, then cook it quickly in two batches in a hot pan so it browns instead of stewing. **Take the veal out of the pan as soon as it is browned** and keep it warm; it turns tough if it simmers in the sauce. The sauce is made in the same pan with shallots, mushrooms, white wine and cream. Speed matters here.

Let the wine reduce by half before the cream goes in, then simmer until the sauce coats the back of a spoon. Return the veal and its juices to warm through for a minute. Finish with parsley and a squeeze of lemon, and serve with rösti or buttered noodles. Serve at once.`,
    ing: [
      '500 g veal escalope, sliced into thin strips',
      '30 g butter',
      '1 tbsp vegetable oil',
      '2 shallots, finely chopped',
      '250 g mushrooms, sliced',
      '150 ml dry white wine',
      '200 ml double cream',
      '1 tbsp plain flour',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '2 tbsp chopped parsley',
      '1 tsp lemon juice'
    ],
    st: [
      'Toss the veal with the flour, salt and pepper. Heat the oil and half the butter in a large pan.',
      'Fry the veal in 2 batches for 2 minutes each over a high heat until browned. Lift out.',
      'Melt the remaining butter, add the shallots and mushrooms and cook for 6 minutes until golden.',
      'Add the wine and boil for 4 minutes until reduced by half. Add the cream and simmer for 3 minutes.',
      'Return the veal to the pan for 1 minute. Stir in the parsley and lemon juice.'
    ],
    tips: [
      'Brown the veal in batches so it does not stew.',
      'Do not boil the veal in the sauce; warm it through only.',
      'Chicken or pork fillet can replace the veal.'
    ],
    pair: ['Rösti', 'Buttered noodles', 'Green salad', 'White wine'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge; reheat gently.'
  },

  'frikandel': {
    d: 'A Dutch minced meat sausage seasoned with nutmeg and paprika, shaped by hand and fried for 15 minutes until browned all over.',
    meta: 'Frikandel: Dutch spiced meat sausages, fried for 15 minutes and served with curry ketchup. Four servings.',
    kw: ['frikandel', 'frikandel recipe', 'dutch frikandel', 'homemade frikandel', 'frikandel speciaal'],
    why: `Salt it, spice it, shape it. A frikandel is the Dutch snack-bar sausage with no casing: minced meat seasoned with nutmeg, paprika and onion, shaped into a long finger and fried. It is soft inside, deeply savoury and best eaten hot.

Use a mix of pork and beef, with a little chicken if wanted, and mix the seasonings through the meat with a wet hand until the mixture turns tacky. **Mix for a full minute.** This breaks down the proteins so the sausages bind and hold their shape in the oil, rather than crumbling at the edges.

Shape the mixture into eight fingers about the length of a hand, using damp hands so the meat does not stick. Fry in a shallow layer of oil, turning, until deep brown and cooked through; a thermometer should read 74C in the middle. Serve in the Dutch style, "speciaal", with mayonnaise, curry ketchup and chopped raw onion. Mayonnaise and onion finish it.`,
    ing: [
      '300 g minced pork',
      '300 g minced beef',
      '40 g breadcrumbs',
      '1 egg',
      '1 tsp salt',
      '1 tsp paprika',
      '1/2 tsp ground nutmeg',
      '1/2 tsp onion powder',
      '1/2 tsp black pepper',
      '3 tbsp vegetable oil, for frying',
      '4 tbsp mayonnaise, to serve',
      '4 tbsp curry ketchup, to serve',
      '1 small onion, chopped, to serve'
    ],
    st: [
      'Mix the pork, beef, breadcrumbs, egg, salt, paprika, nutmeg, onion powder and pepper in a bowl for 1 minute until tacky.',
      'With damp hands, shape into 8 fingers about 12 cm long.',
      'Heat the oil in a large frying pan over a medium heat. Fry the frikandel for 12 minutes, turning, until browned all over and 74C inside.',
      'Serve with the mayonnaise, curry ketchup and chopped onion.'
    ],
    tips: [
      'Mix well so the sausages bind.',
      'Use damp hands for shaping.',
      'Check the inside with a thermometer; they should read 74C.'
    ],
    pair: ['Chips', 'Curry ketchup', 'Mayonnaise', 'Soft bread rolls'],
    store: 'Keeps for 3 days in the fridge. Freeze cooked for 2 months and reheat until hot all through.'
  },

  'swedish-pancakes': {
    d: 'Thin, lacy pancakes of eggs, milk and flour cooked for 20 minutes in butter, served with jam and whipped cream.',
    meta: 'Swedish pancakes: thin buttery pancakes cooked in a hot pan and served with jam and cream. Four servings, ready in 25 minutes.',
    kw: ['swedish pancakes', 'swedish pancakes recipe', 'thin swedish pancakes', 'pannkakor', 'swedish pancakes with lingonberry jam'],
    why: `Sunday lunch in a Swedish household used to end with these, and they suit any slow weekend morning: thin, golden pancakes, spread with jam and rolled up, with cream on the side. They are closer to a crêpe than to the thick American kind. Think thin.

The batter is mostly milk, so it is thin enough to spread to the edges of the pan in a quick swirl. Whisk the flour with the eggs and a little milk first to a smooth paste, then add the rest of the milk slowly. This stops lumps. **Let the batter rest for 10 minutes**, which lets the flour swell and gives a tender pancake that does not tear when turned.

Use a medium-hot pan with a little butter. Pour in a ladle of batter, tip the pan to coat, and cook for about a minute each side until golden with lacy brown edges. Stack the pancakes on a warm plate and serve with lingonberry jam, sugar or whipped cream.`,
    ing: [
      '3 eggs',
      '125 g plain flour',
      '500 ml whole milk',
      '1/4 tsp salt',
      '1 tbsp sugar',
      '40 g butter, melted, plus extra for the pan',
      '150 g lingonberry jam, to serve',
      '150 ml double cream, whipped, to serve'
    ],
    st: [
      'Whisk the eggs, flour, salt and sugar with 100 ml of the milk to a smooth paste, then whisk in the rest of the milk and the melted butter.',
      'Rest the batter for 10 minutes.',
      'Heat a non-stick frying pan over a medium heat and add a little butter.',
      'Pour in a ladle of batter, tilt the pan to coat and cook for 1 minute on each side until golden. Repeat, making 12 pancakes in all.',
      'Serve hot with the jam and whipped cream.'
    ],
    tips: [
      'Add the milk gradually so the batter is lump-free.',
      'Make the first pancake a test; adjust the heat as needed.',
      'Keep cooked pancakes warm in a low oven.'
    ],
    pair: ['Lingonberry jam', 'Whipped cream', 'Fresh berries', 'Sugar and lemon'],
    store: 'Keeps for 2 days in the fridge, interleaved with paper. Freeze for 2 months.'
  },

  'christmas-rice-porridge': {
    d: 'Creamy short-grain rice simmered for 45 minutes in milk until thick and soft, served warm with cinnamon, sugar and a knob of butter.',
    meta: 'Christmas rice porridge: short-grain rice simmered in milk for 45 minutes and served with cinnamon. Six servings.',
    kw: ['christmas rice porridge', 'swedish rice porridge', 'risgrynsgrot', 'rice pudding porridge with cinnamon', 'creamy milk rice porridge'],
    why: `Stir it often. Rice porridge made with milk catches on the bottom of the pan if left to itself, and one scorched patch spoils the whole pot with a burnt taste. Keep the heat low and give it a stir every few minutes.

The rice starts in water, so it can swell and soften before the milk goes in. This is a small step with a large effect, because milk slows the softening of the grain. **Add the milk only after the rice has absorbed the water.** Then simmer, stirring, until the porridge is thick, creamy and the rice is tender, which takes around forty minutes. Use a heavy pan.

Season with a pinch of salt and let it stand for a few minutes. Serve it hot in bowls with a pat of butter melting in the middle, cinnamon and sugar, or with cold milk poured round the edge. It is a simple, filling dish for a winter breakfast or a cold evening supper. Eat it warm.`,
    ing: [
      '200 g short-grain pudding rice',
      '250 ml water',
      '1 litre whole milk',
      '1/2 tsp salt',
      '30 g butter',
      '2 tbsp sugar',
      '2 tsp ground cinnamon'
    ],
    st: [
      'Put the rice and water in a heavy pan and bring to the boil. Simmer for 5 minutes until the water is absorbed.',
      'Add the milk and salt. Bring to a gentle simmer, then cook for 40 minutes, stirring every few minutes, until thick and creamy.',
      'Spoon into bowls and top with the butter, sugar and cinnamon.'
    ],
    tips: [
      'Stir often and scrape the bottom of the pan.',
      'Use short-grain rice for the creamiest result.',
      'Thin the porridge with warm milk if it thickens too much on standing.'
    ],
    pair: ['Cinnamon and sugar', 'Fruit compote', 'Cold milk', 'Ginger biscuits'],
    store: 'Keeps for 3 days in the fridge. Loosen with milk and reheat gently.'
  },

  'dakos': {
    d: 'A Cretan salad of hard barley rusks topped with grated tomato, crumbled feta, olives and oregano, ready in 10 minutes without cooking.',
    meta: 'Dakos: Cretan barley rusks topped with tomato, feta and olives. Four servings, ready in 10 minutes.',
    kw: ['dakos', 'cretan dakos', 'dakos salad', 'greek barley rusk salad', 'dakos recipe'],
    why: `Summer in Crete, on a plate: ripe tomato, feta, olives and a good green oil, over a rusk. A dakos is a hard barley rusk, softened just enough to bite, and it is eaten as a meze or a light lunch. Tomatoes carry the dish.

The tomatoes are the part that matters, so choose the ripest ones available. Grate them on the large holes of a box grater, leaving the skin behind in your hand, to get a juicy pulp that soaks into the rusk. **Moisten the rusk briefly under the tap or with a splash of water**, then let it stand for a minute. It should be crunchy at the core and tender at the edges, not soggy. Serve immediately.

Spoon the tomato pulp over the rusks, then crumble the feta on top, scatter with olives and oregano and pour on plenty of olive oil. Serve at once. If the rusks are left to sit, they go soft all the way through and lose the contrast that makes the dish.`,
    ing: [
      '4 barley rusks (about 40 g each)',
      '600 g ripe tomatoes, halved',
      '150 g feta, crumbled',
      '60 g Kalamata olives',
      '1 tsp dried oregano',
      '4 tbsp extra virgin olive oil',
      '1 tsp capers',
      '1/4 tsp salt'
    ],
    st: [
      'Grate the tomatoes on the coarse holes of a grater into a bowl, discarding the skins. Season with the salt.',
      'Run each rusk quickly under cold water, then set on a plate and leave for 1 minute.',
      'Spoon the tomato over the rusks, then top with the feta, olives and capers.',
      'Sprinkle with the oregano, pour over the olive oil and serve at once.'
    ],
    tips: [
      'Choose very ripe tomatoes; the dish depends on them.',
      'Wet the rusks briefly; they should keep a crunch at the centre.',
      'Use a good olive oil; there is no cooking to hide behind.'
    ],
    pair: ['Greek salad', 'Grilled halloumi', 'Chilled white wine', 'Fresh cucumbers'],
    store: 'Best eaten at once. The rusks go soft within 30 minutes.'
  },

  'fava': {
    d: 'A smooth Greek purée of yellow split peas simmered for 45 minutes with onion, blended with olive oil and lemon, served with capers.',
    meta: 'Fava: Greek yellow split pea purée simmered for 45 minutes and blended with olive oil and lemon. Six servings.',
    kw: ['fava', 'greek fava', 'yellow split pea puree', 'santorini fava', 'fava dip recipe'],
    why: `Fava is a purée of yellow split peas, not of broad beans, as the name suggests to anyone who has not met it before. In Greece it is a meze and a dip, creamy and savoury and finished with a spoonful of good olive oil and a few capers. It is not a bean purée.

Rinse the split peas until the water runs clear, then simmer them with a chopped onion and a bay leaf in plenty of water. **Skim off the foam** that rises in the first ten minutes; if it is left it gives a bitter, soapy edge. Cook until the peas collapse into a thick mush, which takes about forty-five minutes, adding water if the pan dries out. Rinse the peas well.

Blend with olive oil and lemon juice until smooth and glossy. The purée sets as it cools, so serve it warm or at room temperature, spread on a plate, topped with raw red onion, capers, a drizzle of oil and a scatter of parsley. Serve warm.`,
    ing: [
      '300 g yellow split peas, rinsed',
      '1 onion, chopped',
      '1 bay leaf',
      '1.2 litres water',
      '80 ml extra virgin olive oil',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '2 tbsp capers',
      '1/2 red onion, finely chopped',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Put the split peas, onion, bay leaf and water in a pot. Bring to the boil and skim off any foam.',
      'Simmer for 45 minutes, stirring now and then, until the peas have fallen apart and the water is absorbed.',
      'Remove the bay leaf. Blend the peas with 60 ml of the olive oil, the lemon juice and the salt until smooth.',
      'Spread on a plate and top with the capers, red onion, parsley and the remaining oil.'
    ],
    tips: [
      'Skim the foam early for a clean taste.',
      'Add a splash of hot water if the purée is too stiff to blend.',
      'Serve warm for the best texture.'
    ],
    pair: ['Pitta bread', 'Grilled octopus', 'Olives', 'Raw vegetables'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months and re-blend with a little water.'
  },

  'piri-piri-sauce': {
    d: 'A fiery Portuguese-style sauce of red chillies, garlic, lemon and olive oil, simmered for 10 minutes and blended smooth.',
    meta: 'Piri piri sauce: red chillies, garlic, lemon juice and olive oil, simmered and blended. Makes about 250 ml.',
    kw: ['piri piri sauce', 'homemade piri piri sauce', 'peri peri sauce recipe', 'chilli garlic lemon sauce', 'piri piri marinade'],
    why: `Taste it before it goes anywhere near chicken. The heat of a piri piri sauce depends on the chillies, and fresh bird's eye chillies range from warm to blazing, so the only way to know is to taste a drop from the pan.

Red chillies, garlic, lemon juice, vinegar, paprika and olive oil make up the sauce. Simmering the chillies and garlic with a splash of vinegar and water for a few minutes softens the chillies and mellows the raw garlic, which gives a smoother result than blending everything cold. **Wear gloves to handle the chillies** and keep hands away from the eyes. Simmering mellows the garlic.

Blend until smooth, then add the oil and lemon juice and blend again for a creamy, glossy finish. Use it as a marinade, brushed over chicken as it cooks, or as a table sauce. Because it contains garlic in oil, keep it in the fridge for no more than four days and freeze any extra. Keep it cold.`,
    ing: [
      '10 red bird\'s eye chillies, stalks removed',
      '4 garlic cloves',
      '60 ml lemon juice',
      '2 tbsp white wine vinegar',
      '2 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp salt',
      '60 ml water',
      '60 ml olive oil'
    ],
    st: [
      'Put the chillies, garlic, vinegar, paprika, oregano, salt and water in a small pan. Bring to a simmer and cook for 10 minutes.',
      'Cool for 5 minutes, then tip into a blender with the lemon juice and olive oil.',
      'Blend until smooth and glossy. Taste and add more lemon or salt if needed.'
    ],
    tips: [
      'Wear gloves when handling chillies.',
      'Remove the seeds for a milder sauce.',
      'Keep in the fridge and use within 4 days, or freeze.'
    ],
    pair: ['Grilled chicken', 'Prawns', 'Chips', 'Grilled corn'],
    store: 'Keeps for 4 days in a sealed jar in the fridge, because it contains garlic in oil. Freeze for 3 months.'
  },

  'shabu-shabu': {
    d: 'A Japanese hot pot of thinly sliced beef and vegetables swished through simmering kombu broth for 15 minutes and dipped in sesame and ponzu sauces.',
    meta: 'Shabu shabu: thin beef and vegetables cooked at the table in kombu broth with two dipping sauces. Four servings.',
    kw: ['shabu shabu', 'shabu shabu recipe', 'japanese hot pot', 'beef shabu shabu', 'shabu shabu dipping sauce'],
    why: `The name is said to echo the sound of the meat being swished through the broth. Shabu shabu is a table-top hot pot where each person cooks thin slices of beef in a pot of simmering stock, one piece at a time, and dips it in a sauce before eating. Everyone cooks their own.

Everything is prepared beforehand and arranged on platters, so the cooking happens at the table. Slice the beef paper-thin; freezing it for half an hour makes it easier to cut. Prepare the cabbage, mushrooms, tofu and carrot, and mix the two dipping sauces: a creamy sesame sauce and a sharp ponzu with spring onion. **Keep the broth at a gentle simmer** rather than a rolling boil, which toughens the meat. Prepare everything first.

Swish each slice through the broth for about ten seconds, until the pink has gone, and eat at once. Add vegetables as the beef goes, starting with the hardest. The broth gains flavour as the meal goes on, so finish by cooking noodles in it and ladling it into bowls. Finish with noodles.`,
    ing: [
      '400 g very thinly sliced beef sirloin',
      '1.5 litres water',
      '1 piece kombu (10 cm)',
      '1/2 Chinese cabbage, cut into pieces',
      '200 g shiitake mushrooms',
      '200 g firm tofu, cubed',
      '2 carrots, sliced thin',
      '4 spring onions, cut into 5 cm lengths',
      '150 g udon noodles, to finish',
      '4 tbsp sesame sauce, to serve',
      '3 tbsp soy sauce mixed with 2 tbsp lemon juice (ponzu), to serve'
    ],
    st: [
      'Put the water and kombu in a wide pot and heat for 10 minutes. Remove the kombu just before the water boils.',
      'Arrange the beef, cabbage, mushrooms, tofu, carrot and spring onions on platters. Pour the sauces into small bowls.',
      'Bring the broth to a gentle simmer and add the harder vegetables first, cooking for 5 minutes.',
      'Swish a slice of beef through the broth for 10 seconds until no longer pink, dip and eat. Repeat, adding vegetables as needed.',
      'Cook the udon in the remaining broth for 3 minutes and serve in bowls.'
    ],
    tips: [
      'Slice the beef very thin, and freeze it for 30 minutes first.',
      'Cook only a few slices at a time so the broth stays hot.',
      'Check the beef is fully cooked before eating.'
    ],
    pair: ['Steamed rice', 'Pickled vegetables', 'Green tea', 'Sake'],
    store: 'Best eaten at once. The broth keeps for 2 days in the fridge.'
  },

  'taiyaki': {
    d: 'Fish-shaped Japanese cakes of sweet batter cooked for 20 minutes in a hot mould and filled with melted chocolate or red bean paste.',
    meta: 'Taiyaki: fish-shaped batter cakes with a melting chocolate filling, cooked in a hot mould. Six pieces.',
    kw: ['taiyaki', 'taiyaki recipe', 'japanese fish shaped cake', 'taiyaki with chocolate filling', 'homemade taiyaki'],
    why: `Fill the mould only two thirds full. That is the quick tip that matters, because the batter spreads and rises as it cooks, and an overfilled mould leaks batter, glues the fish together and gives a pale, soggy cake with the filling squashed to one side.

Taiyaki are fish-shaped batter cakes cooked in a double-sided iron mould, crisp on the outside and soft and fluffy within. The batter is a simple one of flour, baking powder, sugar, egg and milk, left thick enough to pour but not run. **Oil the mould lightly each time** so the cakes release cleanly. Patience with the heat helps.

Pour batter into one half of the hot mould, add a few pieces of chocolate, then cover with a little more batter and close the lid. Cook over a medium heat, flipping the mould halfway, until both sides are golden. Open carefully and lift the fish out with chopsticks. Eat warm, while the outside is crisp.`,
    ing: [
      '200 g plain flour',
      '1 tsp baking powder',
      '40 g sugar',
      '1 egg',
      '250 ml whole milk',
      '1 tbsp vegetable oil, for the mould',
      '100 g dark chocolate, chopped'
    ],
    st: [
      'Whisk the flour, baking powder and sugar. Whisk in the egg and milk to a smooth batter.',
      'Heat a taiyaki mould over a medium-low heat and brush both sides with oil.',
      'Fill each fish cavity two thirds with batter, add a few pieces of chocolate, and cover with a little more batter.',
      'Close the mould and cook for 3 minutes. Flip and cook for 3 minutes more until golden on both sides. Repeat to make 6.',
      'Lift out with chopsticks and eat warm.'
    ],
    tips: [
      'Fill each cavity only two thirds so the batter does not overflow.',
      'Keep the heat medium-low so the inside cooks before the outside colours.',
      'Sweet red bean paste is the classic filling; use about 150 g in place of the chocolate.',
      'Eat warm; the crisp outside softens as it cools.'
    ],
    pair: ['Green tea', 'Matcha', 'Custard filling', 'Vanilla ice cream'],
    store: 'Best eaten warm. Keeps for 1 day; reheat in a hot oven for 5 minutes.'
  },

  'hamburg-steak': {
    d: 'A Japanese hamburger patty of beef and pork mixed with fried onion and panko, pan-fried for 20 minutes and served with a ketchup and Worcestershire sauce.',
    meta: 'Hamburg steak: a juicy Japanese-style meat patty with a ketchup sauce, pan-fried for 20 minutes. Four servings.',
    kw: ['hamburg steak', 'japanese hamburg steak', 'hambagu recipe', 'japanese hamburger steak with sauce', 'hamburg steak recipe'],
    why: `Fry the onion first, and let it cool. That is the quick tip behind a juicy hamburg steak: raw onion gives off water and a harsh edge, while onion that has been softened in a pan adds sweetness and keeps the patty moist.

The mix is beef and pork, which gives more tenderness than beef alone, bound with an egg and panko soaked in milk. Add nutmeg, salt and pepper, and work the mixture with your hand until it turns sticky and pale. **Slap each patty between your palms** a few times to knock out the air; trapped air makes the patties crack when they cook. Dent the middle.

Form oval patties with a shallow dent in the middle so they cook flat. Brown them in a hot pan for three minutes a side, then cover and cook gently until done. In the same pan, simmer ketchup, Worcestershire sauce and soy sauce into a glossy brown sauce and spoon it over the steaks. The sauce uses the same pan.`,
    ing: [
      '250 g minced beef',
      '250 g minced pork',
      '1 onion, finely chopped',
      '1 tbsp vegetable oil',
      '40 g panko breadcrumbs',
      '60 ml whole milk',
      '1 egg',
      '1/2 tsp salt',
      '1/4 tsp ground nutmeg',
      '1/4 tsp black pepper',
      '3 tbsp ketchup',
      '2 tbsp Worcestershire sauce',
      '1 tbsp soy sauce',
      '1 tbsp sugar'
    ],
    st: [
      'Soften the onion in half the oil for 5 minutes. Cool. Soak the panko in the milk for 5 minutes.',
      'Mix the beef, pork, onion, panko mixture, egg, salt, nutmeg and pepper with your hand until sticky. Divide into 4 oval patties, slapping each between your palms.',
      'Heat the remaining oil in a frying pan. Fry the patties for 3 minutes on each side until browned.',
      'Add 60 ml water, cover and cook for 8 minutes until 74C in the centre. Lift out.',
      'Stir the ketchup, Worcestershire sauce, soy sauce and sugar into the pan and simmer for 1 minute. Spoon over the patties.'
    ],
    tips: [
      'Cool the cooked onion before mixing it in.',
      'Make a shallow dent in the centre of each patty.',
      'Check the middle is 74C before serving.'
    ],
    pair: ['Steamed rice', 'Buttered corn', 'Shredded cabbage', 'Fried egg'],
    store: 'Keeps for 3 days in the fridge. Freeze cooked for 2 months.'
  },

  'napolitan-spaghetti': {
    d: 'A Japanese diner pasta of spaghetti fried for 15 minutes with sausage, onion, green pepper and mushrooms in a ketchup sauce.',
    meta: 'Napolitan spaghetti: Japanese-style pasta with sausage, peppers and a sweet ketchup sauce. Four servings, ready in 29 minutes.',
    kw: ['napolitan spaghetti', 'japanese napolitan', 'napolitan pasta recipe', 'ketchup spaghetti with sausage', 'japanese ketchup pasta'],
    why: `Sweet, savoury and slightly nostalgic, this pasta has little to do with Naples, and that is the charm of it. Napolitan is a Japanese diner dish of spaghetti tossed in a thick ketchup sauce with sausage, onion, green pepper and mushrooms, and it is eaten in cafés across the country. It is plain comfort.

The pasta is cooked a little past al dente, which is traditional and means it soaks up the sauce. Fry the sausage first, then the vegetables, until they begin to brown. **Cook the ketchup in the pan for a couple of minutes** before adding the pasta. This takes away the tinny, raw taste and deepens it to something closer to a tomato sauce. Soft pasta is the point.

Toss everything together with butter or oil, a splash of Worcestershire sauce and plenty of black pepper. Serve hot, with grated cheese on top, and, in the traditional style, a pile of the pasta on a plate with a fried egg. Pepper it generously.`,
    ing: [
      '300 g spaghetti',
      '1 tbsp vegetable oil',
      '300 g pork sausages, sliced',
      '1 onion, sliced',
      '1 green pepper, sliced',
      '150 g mushrooms, sliced',
      '120 g ketchup',
      '1 tbsp Worcestershire sauce',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Cook the spaghetti in salted water for 11 minutes, a little past al dente. Drain.',
      'Heat the oil in a large pan and fry the sausages for 4 minutes until browned.',
      'Add the onion, pepper and mushrooms and cook for 5 minutes.',
      'Stir in the ketchup and Worcestershire sauce and cook for 2 minutes. Add the spaghetti and toss for 2 minutes until coated.',
      'Season with the salt and pepper and serve hot.'
    ],
    tips: [
      'Cook the pasta a little longer than usual.',
      'Fry the ketchup briefly to deepen its flavour.',
      'Top with a fried egg for the classic version.'
    ],
    pair: ['Fried egg', 'Grated cheese', 'Green salad', 'Cold lager'],
    store: 'Keeps for 2 days in the fridge. Reheat in a frying pan with a splash of water.'
  },

  'curry-udon': {
    d: 'Thick udon noodles in a Japanese curry broth with beef and onion, simmered for 20 minutes and served piping hot.',
    meta: 'Curry udon: thick noodles in a savoury Japanese-style curry broth with beef and onion. Two servings, ready in 30 minutes.',
    kw: ['curry udon', 'japanese curry udon', 'curry udon recipe', 'udon noodles in curry broth', 'beef curry udon'],
    why: `Slurping is allowed. A bowl of curry udon is a thick, hot, comforting noodle soup, and it is best eaten fast while the broth is hot and the noodles are chewy. It is quick to make from a pantry curry powder.

The broth starts with dashi, which gives a savoury depth, and thin slices of beef simmered with onion until soft. Cook flour and curry powder in oil for a minute to make a roux, then whisk in the dashi a little at a time so the sauce comes out smooth and glossy; poured in all at once it clumps. **Boil the udon separately**, in plain boiling water, then rinse it before adding to the bowls. This stops the starch from clouding and thickening the broth. Keep the noodles separate.

Pour the curry broth over the noodles and finish with spring onions. A soft egg on top is a nice addition. The dish needs nothing else but a spoon and chopsticks. Eat it quickly.`,
    ing: [
      '400 g fresh udon noodles',
      '600 ml dashi stock',
      '150 g thinly sliced beef sirloin',
      '1 onion, sliced',
      '2 tbsp vegetable oil',
      '2 tbsp plain flour',
      '2 tbsp curry powder',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oil in a pan, stir in the flour and curry powder for 1 minute, then whisk in the dashi until smooth.',
      'Add the beef and onion and simmer for 12 minutes until the onion is soft. Add the soy sauce and sugar and simmer for 3 minutes.',
      'Cook the udon in a separate pan of boiling water for 3 minutes. Drain and rinse.',
      'Divide the noodles between 2 bowls, ladle over the curry broth and top with spring onions.'
    ],
    tips: [
      'Add the dashi to the roux gradually, whisking.',
      'Cook the noodles separately so the broth stays clear.',
      'Wear an apron; curry broth stains.'
    ],
    pair: ['Soft-boiled egg', 'Pickled ginger', 'Tempura', 'Steamed rice'],
    store: 'Best eaten at once. The broth keeps for 2 days in the fridge; cook fresh noodles to serve.'
  }
};
