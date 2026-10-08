'use strict';

/**
 * Volume forty-five — eggs, roasts and barbecue, third part.
 *
 * Devilled eggs, a spinach frittata, cheese on toast, banana bread French
 * toast and a honey lime fruit salad, then a shepherd's pie, a roast lamb
 * dinner, stuffing balls, carrots, corn two ways and courgettes, and a run
 * of barbecue dishes: pulled pork nachos, meatballs, baked beans, drumsticks
 * and salmon. Times are the recipe's own; ovens differ, so each method
 * says when to check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'devilled-eggs': {
    d: 'Hard-boiled egg halves filled with a creamy yolk mixture of mayonnaise, mustard and paprika.',
    meta: 'Devilled eggs: boiled egg halves filled with a creamy mayonnaise, mustard and paprika yolk filling. Twelve halves, cooked for 12 minutes.',
    kw: ['devilled eggs', 'classic devilled eggs', 'devilled eggs with paprika', 'creamy devilled eggs', 'british devilled eggs'],
    why: 'Most home versions come out with grey rings around the yolk and craters in the white, and both are easy to avoid. The grey is a sign of overcooking, and the craters come from eggs that were too fresh to peel cleanly.\n\nLower the eggs gently into boiling water and cook for exactly 10 minutes, then move them straight into iced water for 5 minutes. The cold stops the cooking and shrinks the egg slightly from the shell. Older eggs peel more easily than very fresh ones. **Peel them under running water.** The shell comes off in large pieces, and the white stays whole.\n\nHalve the eggs lengthways, pop out the yolks and mash them with the mayonnaise, mustard, vinegar and salt until completely smooth. Push the mix through a sieve for a very fine filling.\n\nSpoon or pipe the filling back into the whites and finish with a dusting of paprika. Chill until needed.',
    ing: [
      '6 eggs, about 300 g',
      '3 tbsp mayonnaise',
      '1 tsp Dijon mustard',
      '1 tsp white wine vinegar',
      '1/4 tsp salt',
      '1/2 tsp smoked paprika',
      '5 g chives, chopped'
    ],
    st: [
      'Lower the eggs into boiling water and cook for 10 minutes. Move to iced water for 5 minutes.',
      'Peel the eggs under running water and halve lengthways.',
      'Pop out the yolks and mash with the mayonnaise, mustard, vinegar and salt until smooth.',
      'Spoon or pipe the filling into the whites and dust with the paprika.',
      'Scatter with the chives and chill until needed.'
    ],
    tips: [
      'Time the boiling exactly.',
      'Cool the eggs in iced water.',
      'Peel them under running water.',
      'Sieve the yolks for a smoother filling.'
    ],
    pair: ['Cold ham', 'Green salad', 'Smoked salmon', 'Prosecco'],
    store: 'Keeps in the fridge for 2 days. Fill the whites on the day for the best texture.',
    nut: [57, 3, 0, 5, 0, 0, 110]
  },

  'frittata-with-spinach': {
    d: 'Eggs, spinach, onion and feta cooked in a pan on the hob and finished under the grill until set and golden.',
    meta: 'Frittata with spinach: eggs, spinach, onion and feta cooked in a pan and finished under the grill. Four servings, cooked for 15 minutes.',
    kw: ['frittata with spinach', 'spinach and feta frittata', 'italian spinach frittata', 'frittata with spinach and onion', 'spinach frittata with feta'],
    why: 'Keep the heat low. That is the short, sharp rule, because a frittata cooked fast is tough on the base and raw on top. Gentle heat sets the egg slowly and gives a creamy, tender result.\n\nWilt the spinach in the pan and squeeze out the water, since wet spinach makes a watery frittata. Soften the onion in the oil for 5 minutes. Beat the eggs with the salt, pepper and a splash of milk, and stir in the spinach, feta and onion. **Use an ovenproof pan.** The frittata starts on the hob and finishes under the grill, so a plastic handle will not survive.\n\nPour the mix into the hot oiled pan and cook on a low heat for 8 minutes, until the edges are set and the middle is still slightly runny. Slide the pan under a hot grill for 3 minutes until the top is golden and just set.\n\nLoosen the edge, slide onto a board and cut into wedges. It is as good cold as hot.',
    ing: [
      '200 g baby spinach',
      '1 tbsp olive oil',
      '1 onion, about 150 g, thinly sliced',
      '8 eggs, about 400 g',
      '3 tbsp whole milk',
      '100 g feta, crumbled',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Wilt the spinach in a dry pan for 2 minutes, cool and squeeze out the water.',
      'Soften the onion in the oil in a 24 cm ovenproof pan for 5 minutes.',
      'Beat the eggs with the milk, salt and pepper and stir in the spinach and feta. Pour into the pan.',
      'Cook on a low heat for 8 minutes until the edges are set.',
      'Slide the pan under a hot grill for 3 minutes until golden on top. Cut into wedges.'
    ],
    tips: [
      'Squeeze the spinach dry.',
      'Use an ovenproof pan.',
      'Keep the heat low.',
      'Do not overcook the top.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Cherry tomatoes', 'Roasted potatoes'],
    store: 'Keeps in the fridge for 3 days. Serve cold or reheat gently.',
    nut: [275, 18, 8, 19, 2, 4, 740]
  },

  'cheese-on-toast-with-chutney': {
    d: 'Thick toast under a layer of grilled cheddar mixed with mustard and Worcestershire sauce, with a spoonful of chutney.',
    meta: 'Cheese on toast with chutney: thick toast under grilled cheddar with mustard, served with chutney. Two servings, cooked for 5 minutes.',
    kw: ['cheese on toast with chutney', 'grilled cheese on toast with chutney', 'cheddar cheese on toast with chutney', 'british cheese on toast', 'cheese and chutney on toast'],
    why: 'Cheese on toast is a British supper that goes back a long way, and the way to do it well is to treat the cheese as a topping with a bit of seasoning in it. A plain slice of cheese melts into grease. A seasoned layer browns into something worth eating.\n\nToast the bread lightly on one side under the grill first, so that the untoasted side takes the topping and does not go soggy. Mix the grated cheddar with the mustard, Worcestershire sauce and a splash of milk until it forms a thick paste. **Spread the cheese right to the edges.** Bare crust burns before the middle is done.\n\nGrill about 15 cm from the heat for 3 to 4 minutes, until bubbling and flecked with brown. Watch it closely, because it goes from perfect to burnt in under a minute.\n\nServe straight away with a spoonful of chutney on the side, and a few slices of apple or tomato.',
    ing: [
      '4 thick slices white bread, about 200 g',
      '200 g mature cheddar, grated',
      '1 tsp English mustard',
      '1 tsp Worcestershire sauce',
      '1 tbsp whole milk',
      '4 tbsp fruit chutney'
    ],
    st: [
      'Heat the grill to high. Toast the bread on one side.',
      'Mix the cheddar with the mustard, Worcestershire sauce and milk into a thick paste.',
      'Spread the paste over the untoasted sides, right to the edges.',
      'Grill for 3 to 4 minutes until bubbling and flecked with brown.',
      'Serve at once with the chutney.'
    ],
    tips: [
      'Toast one side first.',
      'Spread the cheese to the edges.',
      'Watch it under the grill.',
      'Use a mature cheddar.'
    ],
    pair: ['Chutney', 'Sliced apple', 'Tomato soup', 'Pickled onions'],
    store: 'Best eaten straight away.',
    nut: [716, 35, 63, 36, 3, 17, 1410]
  },

  'banana-bread-french-toast': {
    d: 'Thick slices of banana bread soaked in a cinnamon custard and fried in butter, served with sliced banana and maple syrup.',
    meta: 'Banana bread French toast: banana bread slices soaked in cinnamon custard and fried in butter. Four servings, cooked for 10 minutes.',
    kw: ['banana bread french toast', 'french toast with banana bread', 'cinnamon banana bread french toast', 'pan fried banana bread french toast', 'banana bread french toast with maple syrup'],
    why: 'This is what to make with the end of a loaf, when the banana bread is a couple of days old and a little dry. Stale bread soaks up custard without falling apart, and that is exactly what banana bread does after a day or two.\n\nCut thick slices, about 2 cm, because thin ones collapse in the custard. Whisk the eggs, milk, cinnamon and vanilla together in a shallow dish. Dip each slice for just 10 seconds a side. Banana bread is much more tender than ordinary bread and breaks if it soaks for long. **Handle the slices gently.** They are fragile when wet, so lift them with a spatula.\n\nMelt the butter in a pan over a medium heat and fry the slices for 3 minutes a side until golden brown. The sugar in the bread caramelises quickly, so watch the pan.\n\nTop with sliced banana and maple syrup, and a dusting of cinnamon.',
    ing: [
      '400 g banana bread, in 8 thick slices',
      '3 eggs, about 150 g',
      '120 ml whole milk',
      '1/2 tsp ground cinnamon',
      '1 tsp vanilla extract',
      '40 g butter',
      '2 bananas, about 250 g, sliced',
      '80 ml maple syrup'
    ],
    st: [
      'Whisk the eggs, milk, cinnamon and vanilla in a shallow dish.',
      'Dip each slice of banana bread for 10 seconds a side.',
      'Melt a little butter in a pan over a medium heat and fry the slices in batches for 3 minutes a side until golden.',
      'Top with the sliced banana and maple syrup.'
    ],
    tips: [
      'Use day-old banana bread.',
      'Dip briefly.',
      'Lift the slices with a spatula.',
      'Watch the pan, as the sugar browns quickly.'
    ],
    pair: ['Maple syrup', 'Greek yoghurt', 'Crispy bacon', 'Coffee'],
    store: 'Best eaten straight away. Reheat leftovers in a toaster.',
    nut: [377, 8, 57, 13, 4, 38, 70]
  },

  'fruit-salad-with-honey-lime': {
    d: 'Mango, pineapple, kiwi, strawberries and grapes tossed in a dressing of honey, lime juice and mint.',
    meta: 'Fruit salad with honey lime: mango, pineapple, kiwi and strawberries in a honey, lime and mint dressing. Six servings, no cooking.',
    kw: ['fruit salad with honey lime', 'honey lime fruit salad', 'fresh fruit salad with lime and mint', 'fruit salad with honey and lime dressing', 'australian style fruit salad'],
    why: 'It looks like a bowl of fruit and eats like a dessert, which is why a simple dressing matters. Lime juice keeps the fruit looking fresh and sharpens the sweetness, and the honey ties the flavours together.\n\nChoose fruit that is ripe but firm. Soft fruit turns to mush when tossed, and underripe fruit tastes of very little. Cut everything into pieces of a similar size, about 2 cm, so each spoonful has a bit of everything. Keep the strawberries and any soft fruit aside until the last moment. **Dress the fruit just before serving.** The acid and sugar draw out the juice, and the salad turns watery if it sits for long.\n\nWhisk the honey, lime juice and zest with a spoonful of warm water until smooth. Pour it over the fruit, add the chopped mint and fold gently.\n\nServe cold, in a big bowl, on its own or with yoghurt.',
    ing: [
      '1 mango, about 300 g, cubed',
      '300 g pineapple, cubed',
      '3 kiwi fruit, about 250 g, peeled and sliced',
      '250 g strawberries, halved',
      '200 g seedless grapes, halved',
      '3 tbsp honey',
      '2 limes, about 100 g, zested and juiced',
      '1 tbsp warm water',
      '10 g mint leaves, chopped'
    ],
    st: [
      'Put the mango, pineapple, kiwi and grapes in a large bowl.',
      'Whisk the honey, lime zest, lime juice and water until smooth.',
      'Pour over the fruit, add the strawberries and mint and fold gently.',
      'Serve cold.'
    ],
    tips: [
      'Use ripe but firm fruit.',
      'Cut the pieces the same size.',
      'Dress at the last moment.',
      'Fold gently.'
    ],
    pair: ['Greek yoghurt', 'Pancakes', 'Granola', 'Vanilla ice cream'],
    store: 'Best eaten within a few hours. Keeps in the fridge for 1 day, though the fruit softens.',
    nut: [177, 2, 40, 1, 4, 32, 5]
  },

  'shepherds-pie-with-cheesy-mash': {
    d: 'Lamb mince cooked with carrots, peas and onions in a rich gravy, topped with cheddar mash and baked until golden.',
    meta: 'Shepherd\'s pie with cheesy mash: lamb mince and vegetables in gravy under cheddar mash. Six servings, baked for 60 minutes.',
    kw: ['shepherds pie with cheesy mash', 'lamb shepherds pie with cheddar mash', 'traditional shepherds pie with cheese topping', 'cheesy mash shepherds pie', 'british shepherds pie with cheesy mash'],
    why: 'This is what to make in the first cold week, when a pie with a lid of mash is exactly what the weather asks for. A shepherd\'s pie is made with lamb, and a cottage pie with beef, and it is worth being exact about which is which.\n\nBrown the lamb well in a wide pan, breaking it up as it cooks, until it is dark and the fat has rendered. Pour off excess fat. Add the onion, carrots and garlic, then the flour and tomato purée, and pour in the stock with the Worcestershire sauce. Simmer for 20 minutes until thick. **Make the gravy thick.** A thin filling floods the mash.\n\nBoil the potatoes until soft, drain and steam dry, then mash with butter, milk and most of the cheese. Spoon the mash over the filling, rake it with a fork and scatter over the rest of the cheese.\n\nBake at 200°C for 35 minutes. If your oven runs hot, check at 28 minutes. The top should be golden and the edges bubbling.',
    ing: [
      '700 g lamb mince',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 200 g, diced',
      '2 cloves garlic, crushed',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '400 ml lamb stock',
      '1 tbsp Worcestershire sauce',
      '100 g frozen peas',
      '1 kg potatoes, peeled and cut up',
      '40 g butter',
      '80 ml whole milk',
      '120 g mature cheddar, grated',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Brown the lamb in the oil for 8 minutes, breaking it up, and pour off excess fat.',
      'Add the onion, carrots and garlic for 6 minutes, then stir in the flour and tomato purée for 1 minute.',
      'Pour in the stock and Worcestershire sauce and simmer for 20 minutes until thick. Stir in the peas and half the salt and tip into a baking dish.',
      'Boil the potatoes for 15 minutes, drain, steam dry and mash with the butter, milk, remaining salt and two thirds of the cheese.',
      'Spoon over the filling, rake with a fork and scatter with the rest of the cheese. Bake for 35 minutes until golden and bubbling.'
    ],
    tips: [
      'Brown the lamb well.',
      'Make the gravy thick.',
      'Steam the potatoes dry.',
      'If your oven runs hot, check at 28 minutes.'
    ],
    pair: ['Green beans', 'Buttered cabbage', 'Pickled red cabbage', 'Baked beans'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [635, 31, 40, 39, 6, 6, 900]
  },

  'roast-lamb-dinner': {
    d: 'A roast leg of lamb studded with garlic and rosemary, with roast potatoes, carrots, gravy and mint sauce.',
    meta: 'Roast lamb dinner: roast leg of lamb with garlic and rosemary, roast potatoes and gravy. Six servings, baked for 2 hours 30 minutes.',
    kw: ['roast lamb dinner', 'sunday roast lamb dinner', 'roast leg of lamb with potatoes', 'roast lamb with garlic and rosemary', 'traditional british roast lamb dinner'],
    why: 'Lamb is the meat of the traditional Sunday roast in much of Britain, and a leg with garlic and rosemary is the version most cooks reach for. It is a showpiece that asks only for time and a hot tin.\n\nTake the lamb out of the fridge an hour before cooking, so that the middle is not cold when it goes into the oven. Make deep cuts in the meat, push in slivers of garlic and sprigs of rosemary, rub with oil, salt and pepper, and set it on a bed of onions in a roasting tin. Roast at 180°C for 2 hours 30 minutes, which gives a well-cooked leg that is still tender, with the meat reading 70°C in the thickest part. **Use a meat thermometer if you have one.** It is the only reliable test.\n\nParboil the potatoes for 8 minutes, rough them up and roast them in a second tin for the final hour, with the carrots.\n\nRest the lamb for 20 minutes, then make the gravy from the tin juices and carve.',
    ing: [
      '2 kg leg of lamb, bone in',
      '4 cloves garlic, sliced',
      '4 sprigs rosemary, about 8 g',
      '2 tbsp olive oil',
      '2 tsp salt',
      '1 tsp black pepper',
      '2 onions, about 300 g, thickly sliced',
      '1.2 kg potatoes, peeled and cut into large pieces',
      '3 tbsp vegetable oil',
      '500 g carrots, cut into chunks',
      '1 tbsp plain flour',
      '400 ml lamb stock',
      '4 tbsp mint sauce'
    ],
    st: [
      'Take the lamb out of the fridge 1 hour ahead. Heat the oven to 180°C. Make deep cuts in the lamb and push in the garlic and rosemary. Rub with the olive oil, salt and pepper.',
      'Set the lamb on the onions in a roasting tin and roast for 2 hours 30 minutes, until the thickest part reaches 70°C.',
      'Boil the potatoes for 8 minutes, drain and shake to roughen. Heat the vegetable oil in a second tin, add the potatoes and carrots and roast for the last hour, turning once.',
      'Rest the lamb on a board under foil for 20 minutes.',
      'Stir the flour into the tin juices on the hob, add the stock and simmer for 8 minutes. Carve the lamb and serve with the potatoes, carrots, gravy and mint sauce.'
    ],
    tips: [
      'Bring the lamb to room temperature.',
      'Use a thermometer.',
      'If your oven runs hot, check at 2 hours 15 minutes.',
      'Rest the lamb for 20 minutes.'
    ],
    pair: ['Green beans', 'Yorkshire pudding', 'Braised red cabbage', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Eat cold in sandwiches or reheat in gravy.',
    nut: [908, 60, 50, 52, 8, 8, 1260]
  },

  'stuffing-balls': {
    d: 'Sage and onion stuffing mixed with sausage meat, rolled into balls and baked until golden and crisp.',
    meta: 'Stuffing balls: sage and onion stuffing with sausage meat, rolled into balls and baked. Twelve balls, baked for 25 minutes.',
    kw: ['stuffing balls', 'sage and onion stuffing balls', 'sausage meat stuffing balls', 'christmas stuffing balls', 'baked stuffing balls'],
    why: 'Cook the onion first. That is the most useful instruction, because raw onion in a stuffing ball stays crunchy and sharp, and the flavour of a properly softened one is sweet and mellow.\n\nSoften the onion in the butter for 8 minutes with the sage until it is translucent, and let it cool. Warm stuffing mixture is hard to shape and starts to melt the fat in the sausage meat. Mix the cooled onion with the breadcrumbs, sausage meat, egg and seasoning, kneading it with your hands until it holds together. **Wet your hands before rolling.** The mixture sticks to dry palms.\n\nRoll into twelve balls about the size of a golf ball and set them on a tray. Brush with a little oil and bake at 200°C for 25 minutes, turning once, until deep golden and crisp on the outside. If your oven runs hot, check at 20 minutes.\n\nServe with the roast, or make ahead and reheat.',
    ing: [
      '20 g butter',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp dried sage',
      '100 g fresh breadcrumbs',
      '300 g sausage meat',
      '1 egg, about 50 g',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Heat the oven to 200°C. Soften the onion in the butter with the sage for 8 minutes and cool.',
      'Mix the cooled onion with the breadcrumbs, sausage meat, egg, salt and pepper, kneading until it holds together.',
      'Roll with wet hands into twelve balls and set on a lined tray. Brush with the oil.',
      'Bake for 25 minutes, turning once, until deep golden.'
    ],
    tips: [
      'Cool the onion first.',
      'Wet your hands for rolling.',
      'If your oven runs hot, check at 20 minutes.',
      'Make them ahead and reheat.'
    ],
    pair: ['Roast turkey', 'Roast chicken', 'Gravy', 'Cranberry sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp.',
    nut: [133, 5, 8, 9, 1, 1, 360]
  },

  'buttered-carrots': {
    d: 'Carrot batons simmered in a little water and butter until tender, then glazed with a pinch of sugar and parsley.',
    meta: 'Buttered carrots: carrot batons simmered in butter and water and glazed with parsley. Four servings, cooked for 15 minutes.',
    kw: ['buttered carrots', 'simple buttered carrots', 'glazed buttered carrots with parsley', 'carrots with butter', 'british buttered carrots'],
    why: 'Carrots, butter, salt and parsley: four things, and a simple method that is nonetheless often done badly. The usual failure is boiling the carrots to a pale, watery mush and then adding butter to a wet pan.\n\nCut the carrots into batons of an even thickness, about 1 cm, so they cook at the same speed. Put them in a pan with the butter, a splash of water, a pinch of sugar and salt, and cover. Simmer for 10 minutes. The water steams the carrots, then boils away and leaves the butter, which glazes them. **Take the lid off for the last 3 minutes.** That evaporates the last of the water and lets the glaze cling.\n\nShake the pan until the carrots are glossy and the liquid has become a thin, buttery coating.\n\nScatter with parsley and pepper and serve beside a roast, a pie or grilled meat. Baby carrots can be used whole, and need about 5 minutes longer.',
    ing: [
      '600 g carrots, cut into batons',
      '30 g butter',
      '100 ml water',
      '1 tsp sugar',
      '1/2 tsp salt',
      '10 g flat-leaf parsley, chopped',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the carrots, butter, water, sugar and salt in a pan, cover and simmer for 10 minutes.',
      'Take off the lid and cook for 3 to 4 minutes more, shaking the pan, until the liquid has become a glossy glaze.',
      'Scatter with the parsley and pepper and serve.'
    ],
    tips: [
      'Cut the carrots even.',
      'Take off the lid at the end.',
      'Shake the pan to glaze.',
      'Do not overcook them.'
    ],
    pair: ['Roast chicken', 'Pie and mash', 'Roast lamb', 'Grilled fish'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [126, 2, 16, 6, 4, 8, 400]
  },

  'corn-on-the-cob-with-chilli-butter': {
    d: 'Boiled corn on the cob brushed with butter mixed with chilli, lime zest and salt.',
    meta: 'Corn on the cob with chilli butter: boiled corn brushed with chilli, lime and salt butter. Four servings, cooked for 10 minutes.',
    kw: ['corn on the cob with chilli butter', 'sweetcorn with chilli butter', 'boiled corn on the cob with chilli lime butter', 'spicy buttered corn on the cob', 'chilli lime butter corn'],
    why: 'Most home versions come out tough and starchy, and the usual cause is overcooking. Fresh corn needs only 5 minutes in boiling water, and after 10 the kernels turn chewy and lose their sweetness.\n\nBuy cobs with green, tight husks and a fresh-looking cut at the stem. The sugar in corn turns to starch within a day or two of picking, so fresh is everything. Husk the corn and boil it in unsalted water for 5 minutes. Salt in the water can toughen the kernels. **Do not salt the cooking water.** Season the butter instead.\n\nMash the softened butter with the chilli flakes, lime zest and salt until even.\n\nLift the cobs out and drain them for a moment, then rub each with a generous spoonful of the butter so that it melts into the kernels. Squeeze over the lime juice and serve at once. Leftover chilli butter keeps well in the fridge and is good on grilled fish.',
    ing: [
      '4 corn cobs, about 800 g',
      '60 g butter, softened',
      '1 tsp chilli flakes',
      '1 lime, about 50 g, zested and juiced',
      '1/2 tsp salt'
    ],
    st: [
      'Mash the butter with the chilli flakes, lime zest and salt until even.',
      'Husk the corn and boil in unsalted water for 5 minutes. Drain well.',
      'Rub each cob with a generous spoonful of the butter.',
      'Squeeze over the lime juice and serve at once.'
    ],
    tips: [
      'Buy the freshest corn.',
      'Do not overcook it.',
      'Do not salt the water.',
      'Butter the cobs while hot.'
    ],
    pair: ['Grilled chicken', 'Burgers', 'Barbecue ribs', 'Coleslaw'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [323, 7, 40, 15, 5, 7, 330]
  },

  'grilled-corn-salad': {
    d: 'Charred corn kernels tossed with cherry tomatoes, red onion, coriander and lime in a light dressing.',
    meta: 'Grilled corn salad: charred corn with cherry tomatoes, red onion, coriander and lime dressing. Four servings, cooked for 10 minutes.',
    kw: ['grilled corn salad', 'charred corn salad', 'grilled corn and tomato salad', 'summer grilled corn salad with lime', 'grilled corn salad with coriander'],
    why: 'The first sign it is ready is the smell: corn sugars catching on a hot grill and turning smoky. The char is the point of the dish, and it takes a hotter fire than most people expect.\n\nBrush the cobs with oil and grill them over a high heat for 8 to 10 minutes, turning every couple of minutes, until the kernels are flecked with brown and black. Cook a few minutes more if you want more char. Cool them for 5 minutes, stand each cob on its end and slice the kernels off with a sharp knife. **Cut the kernels off while the corn is warm.** Cold kernels stick to the cob.\n\nWhisk the lime juice, oil, chilli flakes and salt and toss with the warm corn, so it absorbs the dressing.\n\nFold in the tomatoes, onion and coriander just before serving, and taste again for salt and lime.',
    ing: [
      '4 corn cobs, about 800 g',
      '1 tbsp vegetable oil',
      '250 g cherry tomatoes, halved',
      '1/2 red onion, about 50 g, finely diced',
      '15 g coriander leaves, chopped',
      '3 tbsp lime juice',
      '3 tbsp olive oil',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt'
    ],
    st: [
      'Heat a grill or griddle pan to high. Brush the corn with the vegetable oil and grill for 8 to 10 minutes, turning, until flecked with brown and black.',
      'Cool for 5 minutes, then slice the kernels from the cobs.',
      'Whisk the lime juice, olive oil, chilli flakes and salt and toss with the warm kernels.',
      'Fold in the tomatoes, onion and coriander and serve.'
    ],
    tips: [
      'Grill over a high heat.',
      'Cut the kernels off while warm.',
      'Dress the corn while it is warm.',
      'Add the tomatoes at the end.'
    ],
    pair: ['Grilled chicken', 'Burgers', 'Tacos', 'Grilled fish'],
    store: 'Keeps in the fridge for 2 days. Serve at room temperature.',
    nut: [353, 7, 43, 17, 5, 9, 330]
  },

  'roasted-courgettes': {
    d: 'Courgette wedges roasted in a hot oven with olive oil, garlic and parmesan until golden at the edges.',
    meta: 'Roasted courgettes: courgette wedges roasted with olive oil, garlic and parmesan. Four servings, baked for 25 minutes.',
    kw: ['roasted courgettes', 'oven roasted courgettes with parmesan', 'roasted courgettes with garlic', 'golden roasted courgettes', 'italian roasted courgettes'],
    why: 'Cut them thick and roast them hot. That is the short, sharp rule, because courgettes are almost all water, and thin slices turn to a limp, watery tangle while thick ones brown at the edges and stay tender inside.\n\nCut the courgettes lengthways into quarters, and then in half across, to make wedges about 2 cm thick. Toss them with the oil, garlic and salt on a large tray and spread them out with the cut sides down. Heat the oven to 220°C first, and put the tray in only when it is hot. **Do not crowd the tray.** Courgettes that touch each other steam and stay pale.\n\nRoast for 25 minutes, turning once halfway, until deep golden at the edges and soft in the middle. If your oven runs hot, check at 20 minutes.\n\nScatter over the parmesan for the last 5 minutes, and finish with a squeeze of lemon and fresh basil.',
    ing: [
      '700 g courgettes, cut into thick wedges',
      '3 tbsp olive oil',
      '2 cloves garlic, sliced',
      '1/2 tsp salt',
      '30 g parmesan, grated',
      '1/2 lemon, juiced',
      '10 g fresh basil leaves'
    ],
    st: [
      'Heat the oven to 220°C. Mix the courgettes with the oil, garlic and salt and lay them cut-side down on a large tray.',
      'Roast for 20 minutes, flipping the wedges once.',
      'Sprinkle over the parmesan and return to the oven for 5 minutes until golden.',
      'Squeeze over the lemon and tear over the basil.'
    ],
    tips: [
      'Cut the wedges thick.',
      'Heat the oven first.',
      'If your oven runs hot, check at 20 minutes.',
      'Do not crowd the tray.'
    ],
    pair: ['Roast chicken', 'Grilled fish', 'Pasta', 'Lamb chops'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [165, 5, 7, 13, 2, 5, 420]
  },

  'bbq-pulled-pork-nachos': {
    d: 'Tortilla chips piled with barbecue pulled pork, melted cheese, jalapenos and soured cream, baked until bubbling.',
    meta: 'BBQ pulled pork nachos: tortilla chips with barbecue pulled pork, cheese and jalapenos, baked for 15 minutes. Six servings.',
    kw: ['bbq pulled pork nachos', 'barbecue pulled pork nachos', 'loaded pulled pork nachos', 'pulled pork nachos with cheese', 'pulled pork nachos with jalapenos'],
    why: 'It looks like a plate of nachos and eats like a barbecue dinner, which is why the layers matter. A single layer of chips with everything piled on top leaves the bottom half bare and the top half too heavy.\n\nBuild it in two layers. Spread half the chips on a large tray, scatter over half the pork, cheese and jalapenos, then repeat. Every chip near the middle then gets something on it. Warm the pork with a splash of barbecue sauce before it goes on, so that it is hot throughout and does not cool the cheese. **Use a good melting cheese.** Pre-grated packs are coated in starch that stops it melting smoothly.\n\nBake at 200°C for 12 to 15 minutes, until the cheese is bubbling and starting to brown. If your oven runs hot, check at 10 minutes.\n\nFinish with the soured cream, spring onions and coriander, and eat at once, before the chips soften.',
    ing: [
      '300 g tortilla chips',
      '400 g cooked pulled pork',
      '100 g barbecue sauce',
      '200 g cheddar, grated',
      '100 g mozzarella, grated',
      '2 jalapenos, about 40 g, sliced',
      '120 g soured cream',
      '3 spring onions, about 45 g, sliced',
      '10 g coriander leaves'
    ],
    st: [
      'Heat the oven to 200°C. Warm the pork with the barbecue sauce in a pan for 5 minutes.',
      'Spread half the chips on a large tray and scatter over half the pork, cheese and jalapenos. Repeat with the rest.',
      'Bake for 12 to 15 minutes until the cheese is bubbling.',
      'Top with the soured cream, spring onions and coriander and serve at once.'
    ],
    tips: [
      'Build in two layers.',
      'Warm the pork first.',
      'Grate the cheese yourself.',
      'If your oven runs hot, check at 10 minutes.'
    ],
    pair: ['Guacamole', 'Salsa', 'Lime wedges', 'Cold beer'],
    store: 'Best eaten straight away. Do not keep assembled nachos.',
    nut: [638, 34, 40, 38, 3, 7, 970]
  },

  'bbq-meatballs': {
    d: 'Beef and pork meatballs baked until browned and tossed in a sticky barbecue sauce, served on cocktail sticks.',
    meta: 'BBQ meatballs: beef and pork meatballs baked and coated in a sticky barbecue sauce. Eight servings, baked for 30 minutes.',
    kw: ['bbq meatballs', 'baked bbq meatballs', 'barbecue meatballs', 'sticky bbq meatballs', 'party bbq meatballs'],
    why: 'This is what to make for the first big match of the season, when a tray of something sticky and shareable is more useful than anything on a plate. The oven does the cooking, and the sauce does the rest.\n\nMix the beef and pork mince with the breadcrumbs, egg, garlic powder, salt and a splash of milk, using your hands and stopping as soon as it comes together. Overworked mince makes dense, rubbery meatballs. Roll into 32 balls, the size of a walnut, with wet hands. **Keep them all the same size.** Different sizes cook at different rates.\n\nBake on a lined tray at 200°C for 18 minutes, turning once, until browned. If your oven runs hot, check at 15 minutes.\n\nWhile they bake, simmer the barbecue sauce with the brown sugar and vinegar for 5 minutes until thick. Toss the hot meatballs in it, return them to the oven for 10 minutes so the sauce goes sticky, and serve on cocktail sticks.',
    ing: [
      '400 g beef mince',
      '400 g pork mince',
      '50 g dried breadcrumbs',
      '1 egg, about 50 g',
      '2 tbsp whole milk',
      '1 tsp garlic powder',
      '1 tsp salt',
      '250 g barbecue sauce',
      '2 tbsp soft light brown sugar',
      '1 tbsp white wine vinegar'
    ],
    st: [
      'Heat the oven to 200°C. Mix the beef and pork mince with the breadcrumbs, egg, milk, garlic powder and salt and roll into 32 balls.',
      'Bake on a lined tray for 18 minutes, turning once, until browned.',
      'Simmer the barbecue sauce with the brown sugar and vinegar for 5 minutes until thick.',
      'Toss the meatballs in the sauce, return to the oven for 10 minutes until sticky and serve on cocktail sticks.'
    ],
    tips: [
      'Do not overmix the meat.',
      'Roll the balls the same size.',
      'If your oven runs hot, check at 15 minutes.',
      'Line the tray to ease the cleaning.'
    ],
    pair: ['Coleslaw', 'Potato salad', 'Crusty rolls', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [309, 20, 19, 17, 0, 13, 720]
  },

  'bbq-baked-beans': {
    d: 'Haricot beans baked with bacon, onion, molasses, mustard and barbecue sauce until thick, sweet and smoky.',
    meta: 'BBQ baked beans: haricot beans baked with bacon, molasses and barbecue sauce. Eight servings, baked for 60 minutes.',
    kw: ['bbq baked beans', 'barbecue baked beans', 'smoky bbq baked beans with bacon', 'homemade bbq baked beans', 'baked beans with barbecue sauce'],
    why: 'Baked beans are a dish with deep roots in the American cooking tradition, and the barbecue version is the one most often brought to a summer cookout. It is a dish that tastes better the longer it sits, and it holds well in a warm oven.\n\nFry the bacon until crisp, then soften the onion in the fat. Stir in the mustard, molasses, brown sugar, vinegar and barbecue sauce, then fold in the beans. Use a deep ovenproof dish, since the sauce bubbles up. **Stir once halfway through the baking.** The sugars at the edge caramelise and catch, and stirring them in gives a deeper flavour.\n\nBake uncovered at 180°C for 60 minutes, until the sauce has thickened and darkened and the edges are sticky. If your oven runs hot, check at 50 minutes.\n\nLeave to stand for 10 minutes before serving. The sauce continues to thicken as it cools.',
    ing: [
      '150 g streaky bacon, diced',
      '1 onion, about 150 g, chopped',
      '2 tbsp Dijon mustard',
      '3 tbsp molasses',
      '3 tbsp soft light brown sugar',
      '2 tbsp white wine vinegar',
      '150 g barbecue sauce',
      '960 g drained tinned haricot beans',
      '100 ml water',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C. Fry the bacon in an ovenproof pan for 6 minutes until crisp, then soften the onion in the fat for 5 minutes.',
      'Stir in the mustard, molasses, brown sugar, vinegar, barbecue sauce, water and salt.',
      'Fold in the beans and bake uncovered for 60 minutes, stirring once halfway, until thick and sticky.',
      'Leave to stand for 10 minutes before serving.'
    ],
    tips: [
      'Use a deep dish.',
      'Stir once halfway.',
      'If your oven runs hot, check at 50 minutes.',
      'Let it stand before serving.'
    ],
    pair: ['Pulled pork', 'Barbecue ribs', 'Cornbread', 'Coleslaw'],
    store: 'Keeps in the fridge for 5 days. Reheat gently with a splash of water.',
    nut: [219, 12, 36, 3, 7, 16, 1050]
  },

  'bbq-chicken-drumsticks': {
    d: 'Chicken drumsticks baked until the skin is crisp and brushed with barbecue sauce in the last minutes of cooking.',
    meta: 'BBQ chicken drumsticks: chicken drumsticks baked until crisp and glazed with barbecue sauce. Four servings, baked for 45 minutes.',
    kw: ['bbq chicken drumsticks', 'baked bbq chicken drumsticks', 'oven bbq chicken drumsticks', 'sticky barbecue chicken drumsticks', 'barbecue drumsticks in the oven'],
    why: 'The first sign it is ready is the smell: smoky paprika and sugar caramelising on the skin, with the barbecue sauce just catching at the edges. That is the cue to take the tray out before the sugar tips into burnt.\n\nPat the drumsticks dry and toss them with the oil, paprika, garlic powder, salt and pepper. Dry skin crisps, and wet skin steams. Set them on a rack over a tray so that the heat reaches underneath, and bake at 220°C for 35 minutes, turning once. If your oven runs hot, check at 30 minutes. **Do not add the sauce at the start.** Sugar burns long before the chicken is cooked.\n\nBrush the sauce over the drumsticks, return them to the oven for 5 minutes, then brush again and bake for 5 minutes more, until sticky and glossy.\n\nThe chicken is done when the juices run clear at the bone. Rest for 5 minutes before serving.',
    ing: [
      '1.2 kg chicken drumsticks',
      '1 tbsp vegetable oil',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '150 g barbecue sauce'
    ],
    st: [
      'Heat the oven to 220°C. Pat the drumsticks dry and toss with the oil, paprika, garlic powder, salt and pepper.',
      'Set on a rack over a tray and bake for 35 minutes, turning once.',
      'Brush with half the barbecue sauce and bake for 5 minutes, then brush with the rest and bake for 5 minutes more until sticky.',
      'Rest for 5 minutes and serve.'
    ],
    tips: [
      'Dry the skin.',
      'Glaze only at the end.',
      'If your oven runs hot, check at 30 minutes.',
      'Use a rack.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Potato salad', 'Baked beans'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [462, 52, 14, 22, 1, 11, 1240]
  },

  'bbq-salmon': {
    d: 'Salmon fillets brushed with a brown sugar and mustard glaze and cooked on the barbecue until just flaking.',
    meta: 'BBQ salmon: salmon fillets with a brown sugar and mustard glaze, cooked on the barbecue for 12 minutes. Four servings.',
    kw: ['bbq salmon', 'barbecued salmon fillets', 'grilled bbq salmon with brown sugar glaze', 'australian bbq salmon', 'salmon on the barbecue'],
    why: 'Oil the grill, not the fish. That is the most useful instruction, because salmon sticks to a dry hot grill, and the skin tears off when it is turned. A well-oiled, very hot bar releases the fish cleanly.\n\nHeat the barbecue until it is properly hot, scrape it clean and wipe it with an oiled cloth held in tongs. Mix the brown sugar, mustard, soy sauce and garlic for the glaze. Brush it on at the last stage, since the sugar burns quickly. Lay the fillets skin-side down and cook for 8 minutes with the lid closed, without moving them. **Do not turn the salmon.** The skin protects the flesh from the heat, and the fish cooks through gently.\n\nBrush on the glaze for the last 3 minutes. The fish is done when it flakes easily and the middle is just opaque.\n\nSlide a spatula between the flesh and the skin to lift it off, and serve with lemon and a green salad.',
    ing: [
      '4 salmon fillets, skin on, about 600 g',
      '1 tbsp vegetable oil',
      '2 tbsp soft light brown sugar',
      '1 tbsp wholegrain mustard',
      '1 tbsp soy sauce',
      '1 clove garlic, crushed',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the barbecue until very hot. Scrape clean and wipe with an oiled cloth.',
      'Stir the brown sugar, mustard, soy sauce and garlic into a glaze.',
      'Lay the salmon skin-side down, brush the flesh with the oil, close the lid and cook for 8 minutes.',
      'Brush on the glaze and cook for 3 minutes more until the fish flakes. Serve with the lemon wedges.'
    ],
    tips: [
      'Oil the grill.',
      'Do not turn the fish.',
      'Add the glaze at the end.',
      'Check for flaking at 10 minutes.'
    ],
    pair: ['Green salad', 'Potato salad', 'Corn on the cob', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Eat cold in a salad.',
    nut: [367, 31, 9, 23, 1, 7, 360]
  }
};
