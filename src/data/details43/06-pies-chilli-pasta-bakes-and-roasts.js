'use strict';

/**
 * Volume forty-three — pies, chilli, bakes and roasts, final part.
 *
 * Sweet potato mash, teriyaki meatballs, Texas chilli, peanut noodles,
 * trout with almonds, tuna fishcakes, a turkey pot pie and club wrap, a
 * vegetable pasta bake, soy sauce eggs, arroz caldo, black eyed peas with
 * ham, a meatball pasta bake, lemon pepper salmon, braised brisket with
 * onions and a Cumberland sausage ring. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * by npm run calc.
 */

module.exports = {
  'sweet-potato-mash': {
    d: 'Sweet potatoes boiled and mashed with butter, a little milk, salt and black pepper.',
    meta: 'Sweet potato mash: sweet potatoes mashed with butter, milk and pepper. Four servings, cooked for 25 minutes.',
    kw: ['sweet potato mash', 'creamy sweet potato mash', 'mashed sweet potatoes', 'buttery sweet potato mash', 'sweet potato mash with butter'],
    why: 'Drain well. That is the whole secret to mash that holds its shape. Sweet potatoes hold more water than ordinary potatoes, and a wet mash looks like soup on the plate.\n\nPeel the sweet potatoes and cut them into even chunks, so that they cook at the same speed. Boil them in salted water for 20 to 25 minutes, until a knife slides in with no resistance. Drain in a colander and leave them for 2 minutes so the steam escapes. **Return them to the hot pan to dry for a minute.** The leftover heat drives off the last of the moisture.\n\nMash with the butter first, then add the milk a splash at a time until smooth. Salt and pepper to taste.\n\nA pinch of nutmeg or a squeeze of orange juice suits it. Serve next to roast pork, sausages or a pie. Orange-fleshed sweet potatoes give the creamiest result, whereas pale ones are drier and more crumbly.',
    ing: [
      '800 g sweet potatoes, peeled and cut into chunks',
      '40 g butter',
      '60 ml whole milk',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the sweet potatoes in salted water for 20 to 25 minutes until very tender.',
      'Drain well, return to the hot pan and leave for 1 minute to dry.',
      'Mash with the butter, then add the milk a splash at a time until smooth.',
      'Season with the salt and pepper and serve hot.'
    ],
    tips: [
      'Cut the chunks the same size.',
      'Let the steam escape before mashing.',
      'Add the milk gradually.',
      'Season at the end.'
    ],
    pair: ['Roast pork', 'Sausages', 'Roast chicken', 'Pork chops'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [261, 4, 41, 9, 6, 9, 410]
  },

  'teriyaki-meatballs': {
    d: 'Beef and pork meatballs baked and tossed in a glossy teriyaki glaze, served with rice and sesame seeds.',
    meta: 'Teriyaki meatballs: beef and pork meatballs baked and coated in a glossy teriyaki glaze. Four servings, baked for 20 minutes.',
    kw: ['teriyaki meatballs', 'baked teriyaki meatballs', 'japanese style teriyaki meatballs', 'teriyaki meatballs with rice', 'sticky teriyaki meatballs'],
    why: 'Teriyaki is a glaze of soy sauce, sweetener and often mirin, and it is simple to make from the cupboard. Here the glaze coats a meatball that is baked instead of fried.\n\nMix the mince with the breadcrumbs, egg, garlic, ginger and a splash of soy sauce, using your hands but only until it comes together. Overworked mince makes dense, rubbery meatballs. Roll into 24 even balls with damp hands. **Keep them the same size.** Different sizes cook at different rates.\n\nBake at 200°C for 20 minutes, turning once. If your oven runs hot, check at 15 minutes. Meanwhile simmer the soy sauce, mirin, honey and cornflour for 3 minutes until syrupy.\n\nToss the hot meatballs in the glaze until coated. Serve over rice with sesame seeds and sliced spring onion. Wet your hands with cold water before rolling, which stops the mixture sticking to your palms. Line the tray with baking paper, as the glaze is sticky and the meatballs can weld to bare metal.',
    ing: [
      '300 g beef mince',
      '300 g pork mince',
      '40 g dried breadcrumbs',
      '1 egg, about 50 g',
      '2 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tbsp soy sauce',
      '4 tbsp soy sauce, for the glaze',
      '3 tbsp mirin',
      '2 tbsp honey',
      '1 tsp cornflour',
      '60 ml water',
      '1 tbsp sesame seeds',
      '2 spring onions, about 30 g, sliced'
    ],
    st: [
      'Heat the oven to 200°C. Mix the beef and pork mince with the breadcrumbs, egg, garlic, ginger and 1 tbsp of soy sauce and roll into 24 balls.',
      'Bake on a lined tray for 20 minutes, turning once, until browned and cooked through.',
      'Simmer the remaining soy sauce, mirin, honey, cornflour and water in a pan for 3 minutes until syrupy.',
      'Toss the meatballs in the glaze and scatter with the sesame seeds and spring onions.'
    ],
    tips: [
      'Do not overmix the meat.',
      'Roll the balls the same size.',
      'If your oven runs hot, check at 15 minutes.',
      'Toss in the glaze while hot.'
    ],
    pair: ['Steamed rice', 'Steamed broccoli', 'Cucumber salad', 'Stir-fried greens'],
    store: 'Keeps in the fridge for 3 days. Reheat until hot all the way through.',
    nut: [471, 32, 25, 27, 1, 15, 1280]
  },

  'texas-chili': {
    d: 'Beef chuck cubes simmered for two hours in a dried chilli, cumin and beef stock sauce, with no beans.',
    meta: 'Texas chili: beef chuck simmered in a dried chilli and cumin sauce, with no beans. Eight servings, cooked for 2 hours.',
    kw: ['texas chili', 'texas style chili', 'texas chili with beef chuck', 'texas chili without beans', 'texas beef chili'],
    why: 'The first sign it is going well is the smell: dried chillies and cumin toasting in the pan and turning dark and fragrant. Take them off the heat the moment you smell it, because scorched chilli turns the whole pot bitter.\n\nThis version is made with cubes of beef chuck, not mince, and has no beans. The long simmer breaks the chuck down into soft, shreddable pieces in a thick red sauce. Brown the beef in batches, because crowding the pan steams it. **Do not skip the browning.** It builds the base of the flavour.\n\nSoak the dried chillies in hot water for 20 minutes, then blend them with some of the soaking water into a smooth paste. Stir it into the onions and spices, add the beef, tomatoes and stock, then simmer, partly covered, for 2 hours, stirring now and then.\n\nThe chilli is ready when the sauce is thick and the beef falls apart.',
    ing: [
      '1.2 kg beef chuck, cut into 2 cm cubes',
      '3 tbsp vegetable oil',
      '4 dried ancho chillies, about 40 g, soaked in hot water',
      '2 onions, about 300 g, chopped',
      '5 cloves garlic, crushed',
      '2 tbsp ground cumin',
      '1 tbsp smoked paprika',
      '1 tsp dried oregano',
      '400 g tinned chopped tomatoes',
      '500 ml beef stock',
      '2 tsp salt'
    ],
    st: [
      'Brown the beef in the oil in batches for 8 minutes each and set aside.',
      'Blend the soaked chillies with 100 ml of their water to a smooth paste.',
      'Fry the onions in the same pot for 6 minutes, add the garlic, cumin, paprika and oregano for 1 minute, then the chilli paste.',
      'Return the beef, add the tomatoes, stock and salt and bring to a simmer.',
      'Cook partly covered for 2 hours, stirring now and then, until the sauce is thick and the beef is tender.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Do not let the spices scorch.',
      'Stir now and then so it does not catch.',
      'It tastes better the next day.'
    ],
    pair: ['Cornbread', 'Rice', 'Soured cream', 'Grated cheddar'],
    store: 'Keeps in the fridge for 4 days. Reheat until piping hot all the way through.',
    nut: [381, 31, 8, 25, 2, 3, 900]
  },

  'thai-peanut-noodles': {
    d: 'Rice noodles tossed in a sauce of peanut butter, soy sauce, lime and chilli with carrot, cucumber and coriander.',
    meta: 'Thai peanut noodles: rice noodles in a peanut, soy, lime and chilli sauce with carrot and cucumber. Four servings, cooked for 8 minutes.',
    kw: ['thai peanut noodles', 'peanut noodles', 'thai peanut sauce noodles', 'rice noodles with peanut sauce', 'cold thai peanut noodles'],
    why: 'Why does peanut sauce sometimes turn out thick and clumpy? Because peanut butter does not blend into cold liquid by itself. Warm water fixes it, and it takes only a splash.\n\nWhisk the peanut butter with the soy sauce, lime juice, honey, garlic and chilli, then add warm water a spoonful at a time until the sauce pours like double cream. **Add the water slowly.** The sauce goes from clumpy to smooth in one spoonful, and it thickens again as it cools.\n\nCook the rice noodles as the packet says, usually about 5 minutes, then rinse in cold water so they stop cooking and do not stick together. Drain well. Toss with the sauce, the carrot, cucumber and spring onions.\n\nScatter with chopped peanuts and coriander and serve warm or cold. It travels well in a lunchbox. Smooth peanut butter blends more easily, though crunchy leaves pleasant bits in the sauce.',
    ing: [
      '250 g rice noodles',
      '4 tbsp peanut butter',
      '3 tbsp soy sauce',
      '2 tbsp lime juice',
      '1 tbsp honey',
      '1 clove garlic, crushed',
      '1/2 tsp chilli flakes',
      '4 tbsp warm water',
      '2 carrots, about 200 g, julienned',
      '1/2 cucumber, about 150 g, sliced into strips',
      '3 spring onions, about 45 g, sliced',
      '30 g roasted peanuts, chopped',
      '10 g coriander leaves'
    ],
    st: [
      'Whisk the peanut butter, soy sauce, lime juice, honey, garlic and chilli, then whisk in the warm water until pourable.',
      'Cook the noodles as the packet says, about 5 minutes, rinse in cold water and drain well.',
      'Toss the noodles with the sauce, carrot, cucumber and spring onions.',
      'Top with the peanuts and coriander.'
    ],
    tips: [
      'Add the water slowly.',
      'Rinse the noodles in cold water.',
      'Taste and add more lime for a sharper sauce.',
      'Keep a spoon of sauce back to loosen leftovers.'
    ],
    pair: ['Grilled chicken', 'Prawn skewers', 'Cucumber salad', 'Lime wedges'],
    store: 'Keeps in the fridge for 2 days. Loosen with a splash of water before serving.',
    nut: [420, 12, 66, 12, 5, 9, 760]
  },

  'trout-with-almonds': {
    d: 'Pan-fried trout fillets finished with browned butter, toasted flaked almonds and lemon juice.',
    meta: 'Trout with almonds: pan-fried trout with browned butter, toasted almonds and lemon. Two servings, cooked for 15 minutes.',
    kw: ['trout with almonds', 'pan fried trout with almonds', 'trout almondine', 'trout with brown butter and almonds', 'trout fillets with almonds'],
    why: 'Watch the butter, not the fish. Trout fillets are thin and cook in 3 minutes a side, but butter goes from nutty to burnt in seconds.\n\nPat the fillets dry, dust them lightly with flour and season. Fry them skin-side down in a little oil for 3 minutes, until the skin is crisp and the flesh has turned opaque most of the way up, then turn for 1 minute. Lift them onto warm plates. **Wipe the pan before the butter goes in.** Burnt flour and scraps will taint the sauce.\n\nMelt the butter over a medium heat with the almonds. Swirl the pan until the butter smells nutty and the almonds turn gold. Take off the heat at once and stir in the lemon juice, which will foam, and the parsley.\n\nSpoon over the fish and serve with boiled potatoes and green beans. Ask the fishmonger to pin-bone the fillets, which saves you picking out the small bones afterwards.',
    ing: [
      '2 trout fillets, about 300 g',
      '1 tbsp plain flour',
      '1 tbsp vegetable oil',
      '40 g butter',
      '30 g flaked almonds',
      '1 tbsp lemon juice',
      '10 g flat-leaf parsley, chopped',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Pat the trout dry, season and dust lightly with the flour.',
      'Fry skin-side down in the oil for 3 minutes, turn for 1 minute and lift onto warm plates. Wipe the pan.',
      'Melt the butter with the almonds over a medium heat for 2 minutes, swirling, until nutty and gold.',
      'Take off the heat, stir in the lemon juice and parsley and spoon over the fish.'
    ],
    tips: [
      'Dry the fish well.',
      'Wipe the pan before making the butter.',
      'Take the butter off the heat the moment it smells nutty.',
      'Serve straight away.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'Steamed asparagus', 'Lemon wedges'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [510, 34, 8, 38, 2, 1, 670]
  },

  'tuna-fishcakes': {
    d: 'Tinned tuna mixed with mashed potato, spring onions and parsley, coated in breadcrumbs and shallow-fried.',
    meta: 'Tuna fishcakes: tinned tuna, mashed potato and parsley in a breadcrumb coat, fried for 12 minutes. Four servings.',
    kw: ['tuna fishcakes', 'tuna and potato fishcakes', 'british tuna fishcakes', 'homemade tuna fishcakes', 'crispy tuna fishcakes'],
    why: 'It looks like a salmon fishcake and cooks like a potato cake, which is why the potato matters most. Dry, fluffy mash holds the cake together, and wet mash makes it fall apart in the pan.\n\nBoil the potatoes until soft, drain them well and let them steam dry for 2 minutes before mashing. Cool the mash before mixing, because warm mash makes the mixture sticky and hard to shape. Drain the tuna very well, pressing out the liquid with a fork. **Chill the shaped cakes for 15 minutes.** Cold cakes hold together in the pan.\n\nShape into eight patties, coat in the egg and breadcrumbs, and fry in a shallow layer of oil for 5 to 6 minutes a side, until deep gold. Drain on kitchen paper.\n\nServe with lemon wedges, mayonnaise and a green salad. Tuna in oil tastes richer, but it must be drained even more carefully than the kind in water.',
    ing: [
      '600 g potatoes, peeled and cut up',
      '320 g tinned tuna in water, drained',
      '3 spring onions, about 45 g, finely sliced',
      '15 g flat-leaf parsley, chopped',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 egg, about 50 g, beaten',
      '80 g dried breadcrumbs',
      '40 ml vegetable oil'
    ],
    st: [
      'Boil the potatoes for 15 minutes, drain, steam dry for 2 minutes and mash. Cool for 10 minutes.',
      'Mix in the well-drained tuna, spring onions, parsley, lemon juice, salt and pepper.',
      'Shape into eight patties, dip in the egg and then the breadcrumbs, and chill for 15 minutes.',
      'Fry in the oil for 5 to 6 minutes a side until deep gold. Drain on kitchen paper.'
    ],
    tips: [
      'Dry the mash.',
      'Drain the tuna well.',
      'Chill the cakes before frying.',
      'Turn them once only.'
    ],
    pair: ['Green salad', 'Lemon wedges', 'Tartare sauce', 'Peas'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the coating.',
    nut: [384, 28, 41, 12, 5, 3, 700]
  },

  'turkey-pot-pie': {
    d: 'Cooked turkey, carrots, peas and onion in a creamy sauce under a puff pastry lid, baked until golden.',
    meta: 'Turkey pot pie: cooked turkey and vegetables in a creamy sauce under puff pastry. Six servings, baked for 50 minutes.',
    kw: ['turkey pot pie', 'leftover turkey pot pie', 'creamy turkey pot pie', 'turkey pot pie with puff pastry', 'turkey and vegetable pot pie'],
    why: 'A pot pie is a thick stew with a pastry lid, and the stew has to be thick. If the filling is runny before it goes in the oven, it will be soup under the pastry by the time it comes out.\n\nSoften the onion and carrots in the butter for 8 minutes. Stir in the flour for a minute, then add the stock and milk a little at a time, whisking, and simmer for 5 minutes until the sauce coats the back of a spoon. Fold in the turkey and peas. **Cool the filling for 15 minutes before covering.** Hot filling melts the pastry from underneath.\n\nSpoon into a pie dish, lay the pastry over, press the edges and cut a slit. Brush with beaten egg. Bake at 200°C for 35 minutes until the pastry is risen and deep gold. If your oven runs hot, check at 28 minutes.\n\nRest for 10 minutes before serving.',
    ing: [
      '500 g cooked turkey, shredded',
      '40 g butter',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 200 g, diced',
      '40 g plain flour',
      '300 ml chicken stock',
      '150 ml whole milk',
      '100 g frozen peas',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '320 g ready-rolled puff pastry',
      '1 egg, about 50 g, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Soften the onion and carrots in the butter for 8 minutes.',
      'Stir in the flour for 1 minute, then whisk in the stock and milk and simmer for 5 minutes until thick.',
      'Fold in the turkey, peas, salt and pepper and cool for 15 minutes.',
      'Spoon into a pie dish, cover with the pastry, press the edges, cut a slit and brush with egg.',
      'Bake for 35 minutes until risen and deep gold. Rest for 10 minutes.'
    ],
    tips: [
      'Make the filling thick.',
      'Cool it before covering.',
      'If your oven runs hot, check at 28 minutes.',
      'Cut a slit for steam.'
    ],
    pair: ['Green beans', 'Mashed potato', 'Cranberry sauce', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [445, 21, 34, 25, 4, 6, 770]
  },

  'turkey-club-wrap': {
    d: 'Sliced turkey, bacon, lettuce, tomato and mayonnaise rolled in a large tortilla and cut in half.',
    meta: 'Turkey club wrap: sliced turkey, bacon, lettuce, tomato and mayonnaise in a tortilla. Two servings, no cooking.',
    kw: ['turkey club wrap', 'turkey bacon club wrap', 'turkey and bacon wrap', 'club wrap with turkey', 'turkey club tortilla wrap'],
    why: 'Turkey, bacon, lettuce, tomato and mayonnaise: five things on the board and a tortilla to wrap them in. There is nothing to cook, as long as the bacon is already crisp.\n\nUse bacon that has been cooked until crisp and patted dry on kitchen paper, as a greasy slice leaks through the wrap. Dry the lettuce and tomato slices too. **Layer so the wettest items touch the mayonnaise, not the tortilla.** That keeps the wrap from going soft.\n\nSpread the mayonnaise over the tortilla, leaving 2 cm at the edge. Lay the turkey on first, then the bacon, lettuce and tomato in a line across the middle. Fold in the sides, then roll up tightly from the bottom.\n\nCut on the diagonal with a sharp knife. Wrap in paper to hold it together if you are taking it out. Use the largest tortillas you can find, since a small one tears when rolled round this much filling.',
    ing: [
      '2 large flour tortillas, about 120 g',
      '2 tbsp mayonnaise',
      '150 g sliced roast turkey',
      '4 slices cooked crisp bacon, about 60 g',
      '40 g lettuce leaves',
      '1 tomato, about 100 g, sliced',
      '1/4 tsp black pepper'
    ],
    st: [
      'Spread the mayonnaise over each tortilla, leaving a 2 cm border.',
      'Lay the turkey in a line across the middle, then the bacon, lettuce and tomato.',
      'Season with the pepper, fold in the sides and roll up tightly.',
      'Cut in half on the diagonal.'
    ],
    tips: [
      'Use crisp, dry bacon.',
      'Dry the lettuce.',
      'Roll tightly.',
      'Wrap in paper to take with you.'
    ],
    pair: ['Crisps', 'Pickles', 'Apple slices', 'Tomato soup'],
    store: 'Best eaten within a few hours. Keeps wrapped in the fridge for 1 day.',
    nut: [427, 23, 32, 23, 3, 3, 960]
  },

  'veggie-pasta-bake': {
    d: 'Pasta with roasted courgette, peppers and onion in a tomato sauce, topped with mozzarella and baked.',
    meta: 'Veggie pasta bake: pasta with courgette, peppers and onion in tomato sauce under mozzarella. Four servings, baked for 30 minutes.',
    kw: ['veggie pasta bake', 'vegetable pasta bake', 'roasted vegetable pasta bake', 'pasta bake with courgette and peppers', 'veggie pasta bake with mozzarella'],
    why: 'Roast the vegetables first and the bake tastes of far more than it should. Courgette and peppers boiled in sauce go limp and bland, and roasted ones turn sweet and a little charred.\n\nCut the vegetables into pieces of an even size, toss them with the oil and salt, and roast at 220°C for 20 minutes, until the edges brown. Meanwhile boil the pasta for 2 minutes less than the packet says, since it finishes cooking in the oven. **Do not overcook the pasta.** It will absorb sauce as it bakes and turn soft.\n\nStir the roasted vegetables and pasta into the tomato sauce, tip into a baking dish and scatter over the mozzarella and parmesan. Bake for 30 minutes at 200°C, until golden and bubbling. If your oven runs hot, check at 25 minutes.\n\nLeave for 5 minutes before serving. Any soft vegetable works here, such as aubergine or mushrooms, as long as it is cut to the same size.',
    ing: [
      '300 g penne',
      '2 courgettes, about 400 g, diced',
      '2 red peppers, about 300 g, diced',
      '1 red onion, about 150 g, diced',
      '3 tbsp olive oil',
      '1/2 tsp salt',
      '500 g passata',
      '2 cloves garlic, crushed',
      '1 tsp dried oregano',
      '150 g mozzarella, torn',
      '30 g parmesan, grated'
    ],
    st: [
      'Heat the oven to 220°C. Toss the courgettes, peppers and onion with the oil and salt and roast on a tray for 20 minutes.',
      'Boil the penne for 8 minutes, 2 minutes under the packet time, and drain.',
      'Warm the passata with the garlic and oregano, then stir in the pasta and roasted vegetables.',
      'Tip into a baking dish, top with the mozzarella and parmesan, lower the oven to 200°C and bake for 30 minutes until golden.'
    ],
    tips: [
      'Roast the vegetables first.',
      'Undercook the pasta.',
      'If your oven runs hot, check at 25 minutes.',
      'Rest it before serving.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Rocket salad', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [607, 25, 75, 23, 7, 16, 770]
  },

  'soy-sauce-eggs': {
    d: 'Soft-boiled eggs peeled and soaked in a sauce of soy sauce, mirin, water and a little sugar until the whites turn brown.',
    meta: 'Soy sauce eggs: soft-boiled eggs soaked in soy sauce, mirin and sugar. Six servings, cooked for 8 minutes, then marinated for 4 hours.',
    kw: ['soy sauce eggs', 'japanese soy sauce eggs', 'marinated soy sauce eggs', 'soy marinated eggs', 'soy sauce eggs with mirin'],
    why: 'This is what to make for a party table, a ramen night or a lunchbox, since it can be done the day before. The cooking takes minutes and the soaking does the rest.\n\nLower the eggs into boiling water and cook for exactly 7 minutes for a jammy yolk, or 8 for one that is nearly set. Move them straight to iced water for 5 minutes, which stops the cooking and makes the shells easier to peel. **Peel them under cold running water.** The membrane slides off cleanly.\n\nWarm the soy sauce, mirin, water and sugar in a pan until the sugar dissolves, then cool completely. Hot sauce would cook the whites to rubber. Put the eggs in a bag or jar with the sauce so that they are covered, and chill for 4 hours. Turn them once if they are not fully covered.\n\nHalve them to serve. Eggs straight from the fridge crack more easily in boiling water, so lower them in gently with a spoon.',
    ing: [
      '6 eggs, about 300 g',
      '100 ml soy sauce',
      '100 ml mirin',
      '100 ml water',
      '1 tbsp sugar'
    ],
    st: [
      'Boil the eggs for 7 minutes and move them to iced water for 5 minutes. Peel under cold running water.',
      'Warm the soy sauce, mirin, water and sugar until the sugar dissolves, then cool completely.',
      'Put the eggs and sauce in a bag or jar so that they are covered.',
      'Marinate for 4 hours, turning once.', 'Halve the eggs to serve.'
    ],
    tips: [
      'Time the eggs exactly.',
      'Cool the sauce before the eggs go in.',
      'Keep the eggs fully covered.',
      'Eat within 3 days, as the whites keep darkening and salting.'
    ],
    pair: ['Ramen', 'Steamed rice', 'Pickled cucumber', 'Spring onions'],
    store: 'Keeps in the fridge for 3 days, in the sauce. Discard the sauce afterwards.',
    rest: [240, 'Marinating'],
    nut: [125, 8, 12, 5, 0, 10, 1040]
  },

  'arroz-caldo': {
    d: 'Chicken, rice, ginger and garlic simmered into a thick porridge, served with a boiled egg, crisp garlic and spring onions.',
    meta: 'Arroz caldo: chicken and rice simmered with ginger and garlic into a thick porridge. Four servings, cooked for 35 minutes.',
    kw: ['arroz caldo', 'filipino arroz caldo', 'arroz caldo with chicken', 'chicken and rice porridge', 'arroz caldo with ginger'],
    why: 'Chicken, rice, ginger and stock: four things that become a porridge thick enough to eat with a spoon. The ginger does the most work.\n\nFry the ginger and onion in the oil until fragrant and pale gold, add the garlic and chicken and brown them lightly. Stir in the rice for a minute so each grain is coated. Pour in the stock and water, bring to a simmer and cook for 30 minutes, stirring now and then so it does not catch. **Stir more often towards the end.** Rice porridge thickens fast and sticks.\n\nAdd water if it gets too thick. The finished porridge should flow slowly off a spoon.\n\nFinish with fish sauce to taste. Serve in bowls with a halved boiled egg, crisp fried garlic, sliced spring onion and a squeeze of lime. It is a traditional dish for a cold or rainy day. Glutinous rice gives the stickiest result, though ordinary long-grain rice also works if you stir it a little more.',
    ing: [
      '600 g bone-in chicken thighs',
      '2 tbsp vegetable oil',
      '30 g fresh ginger, sliced into matchsticks',
      '1 onion, about 150 g, chopped',
      '5 cloves garlic, crushed',
      '200 g glutinous rice',
      '1.2 litres chicken stock',
      '2 tbsp fish sauce',
      '4 eggs, about 200 g, boiled and halved',
      '3 spring onions, about 45 g, sliced',
      '1 lime, cut into wedges'
    ],
    st: [
      'Fry the ginger and onion in the oil for 4 minutes, then add the garlic and chicken and brown for 5 minutes.',
      'Stir in the rice for 1 minute, then pour in the stock.',
      'Bring to a simmer and cook for 30 minutes, stirring often, until the rice is soft and the chicken is tender.',
      'Season with the fish sauce. Serve topped with the eggs, spring onions and lime.'
    ],
    tips: [
      'Brown the ginger lightly.',
      'Stir more often towards the end.',
      'Add water if it gets too thick.',
      'Season with the fish sauce last.'
    ],
    pair: ['Boiled egg', 'Crisp garlic', 'Lime wedges', 'Spring onions'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water, as it thickens as it cools.',
    nut: [684, 39, 51, 36, 2, 3, 1710]
  },

  'black-eyed-peas-with-ham': {
    d: 'Black-eyed peas simmered with a ham hock, onion, celery and garlic until the peas are tender and the broth is rich.',
    meta: 'Black eyed peas with ham: black-eyed peas simmered with ham, onion, celery and garlic. Four servings, cooked for 45 minutes.',
    kw: ['black eyed peas with ham', 'southern black eyed peas with ham', 'black eyed peas and ham hock', 'black eyed peas with smoked ham', 'black eyed pea stew with ham'],
    why: 'The first sign it is going well is the smell of smoky ham and onions softening, coming off the pot an hour before you eat. It is a slow, savoury smell, and it means the broth is working.\n\nStart with tinned peas for speed, or soak dried ones overnight and cook them for longer. Soften the onion, celery and garlic in the oil, add the ham and peas and cover with the stock. Simmer gently for 45 minutes, until the peas are tender and creamy but not falling apart. **Do not boil hard.** Hard boiling bursts the skins and turns the pot to mush.\n\nTaste the broth before adding salt, because the ham is already salty. Add the thyme and pepper.\n\nPull the ham from the bone, return the meat to the pot and serve with rice or cornbread and a splash of hot sauce. A splash of cider vinegar at the table lifts the whole pot and cuts the richness of the ham.',
    ing: [
      '480 g tinned black-eyed peas, drained',
      '300 g smoked ham hock, cooked and shredded',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '3 cloves garlic, crushed',
      '750 ml chicken stock',
      '1 tsp dried thyme',
      '1/2 tsp black pepper'
    ],
    st: [
      'Soften the onion and celery in the oil for 6 minutes, then add the garlic for 1 minute.',
      'Add the peas, ham, stock, thyme and pepper and bring to a gentle simmer.',
      'Cook, partly covered, for 45 minutes until the peas are creamy and the broth has thickened.',
      'Taste before adding any salt, and serve hot.'
    ],
    tips: [
      'Simmer gently.',
      'Taste before salting.',
      'Mash a few peas to thicken the broth.',
      'Add a splash of vinegar at the table.'
    ],
    pair: ['Steamed rice', 'Cornbread', 'Collard greens', 'Hot sauce'],
    store: 'Keeps in the fridge for 4 days. Reheat with a splash of water, as the peas soak up the broth.',
    nut: [300, 24, 24, 12, 8, 9, 1400]
  },

  'meatball-pasta-bake': {
    d: 'Beef meatballs and penne in a tomato sauce, topped with mozzarella and baked until bubbling.',
    meta: 'Meatball pasta bake: beef meatballs and penne in tomato sauce under mozzarella. Six servings, baked for 35 minutes.',
    kw: ['meatball pasta bake', 'baked meatball pasta', 'meatball and mozzarella pasta bake', 'meatball pasta bake with penne', 'beef meatball pasta bake'],
    why: 'Mince, breadcrumbs, an egg, tomato sauce and cheese: five things you probably have, which become a dish for six. The oven brings it together.\n\nMix the beef with the breadcrumbs, egg, garlic and oregano, handling it as little as possible, and roll into 24 balls the size of a walnut. Overworked mince makes tough meatballs. Brown them in a hot pan for 6 minutes, turning, to set the outside. They do not need to cook through yet. **Do not skip browning.** Raw meatballs baked in sauce stay pale and bland.\n\nBoil the penne for 2 minutes under the packet time. Stir the pasta and meatballs into the sauce in a big dish and cover with the mozzarella.\n\nBake at 200°C for 35 minutes until golden and bubbling. If your oven runs hot, check at 28 minutes. Rest for 5 minutes. Wet your hands before rolling the meatballs, so the mixture does not stick to your palms.',
    ing: [
      '500 g beef mince',
      '50 g dried breadcrumbs',
      '1 egg, about 50 g',
      '2 cloves garlic, crushed',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1 tbsp olive oil',
      '350 g penne',
      '700 g passata',
      '200 g mozzarella, torn'
    ],
    st: [
      'Heat the oven to 200°C. Mix the mince, breadcrumbs, egg, garlic, oregano and salt and roll into 24 balls.',
      'Brown the meatballs in the oil for 6 minutes, turning.',
      'Boil the penne for 8 minutes, 2 minutes under the packet time, and drain.',
      'Stir the pasta, meatballs and passata together in a large baking dish and top with the mozzarella.',
      'Bake for 35 minutes until golden and bubbling. Rest for 5 minutes.'
    ],
    tips: [
      'Do not overmix the meat.',
      'Brown the meatballs first.',
      'Undercook the pasta.',
      'If your oven runs hot, check at 28 minutes.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Roasted tomatoes'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [584, 35, 57, 24, 4, 8, 840]
  },

  'lemon-pepper-salmon': {
    d: 'Salmon fillets coated in cracked black pepper and lemon zest, seared in a pan and finished with lemon juice.',
    meta: 'Lemon pepper salmon: salmon fillets coated in cracked black pepper and lemon zest, pan-seared. Two servings, cooked for 12 minutes.',
    kw: ['lemon pepper salmon', 'pan seared lemon pepper salmon', 'lemon pepper salmon fillets', 'salmon with lemon and pepper', 'lemon pepper salmon in a pan'],
    why: 'It looks like a spice-crusted fish and cooks like a plain pan-fried fillet, which is why the pepper must be coarse. Fine pepper tastes dusty and burns, and cracked pepper gives bite and a little heat.\n\nCrack the pepper in a mortar or under the flat of a knife, and mix it with the lemon zest and salt. Pat the salmon dry, brush it with oil, and press the mix onto the flesh side. **Press firmly.** Loose pepper falls off into the pan and scorches.\n\nHeat the pan until the oil shimmers. Cook the salmon crust-side down for 4 minutes without moving, until the crust is dark and set, then turn and cook for 3 minutes more. The middle should still be just translucent.\n\nSqueeze the lemon over the fillets, add a knob of butter to the pan juices, and spoon over the top. Use the zest of the lemon before you juice it, as a squeezed lemon is almost impossible to zest.',
    ing: [
      '2 salmon fillets, about 300 g',
      '1 tbsp vegetable oil',
      '1 tsp black peppercorns, coarsely cracked',
      '1 lemon, zested, juiced',
      '1/2 tsp salt',
      '10 g butter'
    ],
    st: [
      'Mix the cracked pepper, lemon zest and salt. Pat the salmon dry, brush with half the oil and press the mix onto the flesh.',
      'Heat the remaining oil in a pan, add the salmon crust-side down and cook for 4 minutes without moving.',
      'Turn and cook for 3 minutes more.',
      'Add the butter and lemon juice to the pan and spoon over the salmon.'
    ],
    tips: [
      'Crack the pepper coarse.',
      'Press the crust on firmly.',
      'Do not move the fish while it sears.',
      'Leave the middle just translucent.'
    ],
    pair: ['Steamed asparagus', 'Boiled new potatoes', 'Green salad', 'Rice'],
    store: 'Keeps in the fridge for 2 days. Eat cold in a salad.',
    nut: [411, 30, 3, 31, 1, 1, 660]
  },

  'brisket-with-onions': {
    d: 'A beef brisket braised for three and a half hours on a bed of sliced onions with stock and tomato until tender.',
    meta: 'Brisket with onions: beef brisket braised on sliced onions with stock and tomato until tender. Eight servings, baked for 3 hours 30 minutes.',
    kw: ['brisket with onions', 'braised brisket with onions', 'slow braised beef brisket', 'oven braised brisket with onions', 'beef brisket with onion gravy'],
    why: 'It looks like a roast and cooks like a stew, which is why it asks only that you wait. Brisket is a tough, well-worked cut, and it needs hours in moist heat before it turns soft.\n\nBrown the brisket well on both sides to build flavour, then set it on the onions in a deep pot. Add the stock, tomato purée and bay leaf, cover tightly and cook at 160°C for 3 hours 30 minutes. **Keep the lid or foil sealed.** Steam is the cooking method here.\n\nIf your oven runs hot, check at 3 hours. The brisket is ready when a fork slides in with no resistance. Lift it out and rest it for 20 minutes, which makes slicing easier.\n\nSlice across the grain, because slices cut along it are stringy. Reduce the onion and cooking juices into a thick gravy and spoon it over the meat. Make it the day before if you can, since cold brisket is much easier to slice neatly and the flavour improves overnight.',
    ing: [
      '2 kg beef brisket',
      '2 tbsp vegetable oil',
      '4 onions, about 600 g, sliced',
      '3 cloves garlic, sliced',
      '2 tbsp tomato purée',
      '400 ml beef stock',
      '2 bay leaves',
      '2 tsp salt',
      '1 tsp black pepper'
    ],
    st: [
      'Heat the oven to 160°C. Season the brisket with the salt and pepper and brown it well in the oil on both sides, about 10 minutes.',
      'Spread the onions and garlic in a deep pot, set the brisket on top and add the tomato purée, stock and bay leaves.',
      'Cover tightly and cook for 3 hours 30 minutes until a fork slides in with no resistance.',
      'Rest the brisket for 20 minutes, then slice across the grain and spoon over the onions and juices.'
    ],
    tips: [
      'Brown the meat well.',
      'Keep the lid tightly sealed.',
      'If your oven runs hot, check at 3 hours.',
      'Slice across the grain.'
    ],
    pair: ['Roast potatoes', 'Carrot tzimmes', 'Green beans', 'Noodle kugel'],
    store: 'Keeps in the fridge for 4 days. It is easier to slice cold, then reheat in the juices.',
    nut: [630, 46, 8, 46, 1, 3, 910]
  },

  'cumberland-sausage-ring': {
    d: 'A long Cumberland sausage coiled into a spiral on a baking tray, roasted until crisp and served with gravy.',
    meta: 'Cumberland sausage ring: a coiled Cumberland sausage roasted until crisp, served with gravy. Six servings, baked for 35 minutes.',
    kw: ['cumberland sausage ring', 'baked cumberland sausage ring', 'roasted cumberland sausage coil', 'cumberland sausage coil', 'cumberland sausage ring with gravy'],
    why: 'A Cumberland sausage is sold as a long coil, and the name comes from the county it is associated with, a fact the recipe relies on only for the pepper. The seasoning is peppery rather than sweet.\n\nKeep the coil in one piece. Lay it flat on a tray and thread two long skewers across, through the coil, so it holds its shape and turns easily. Prick it a few times, brush with oil and roast at 200°C for 35 minutes, turning once. **Do not pierce it too many times.** The fat should render, not escape.\n\nIf your oven runs hot, check at 28 minutes. The sausage is ready when it is deep golden, firm to the touch and has no pink in the middle.\n\nRest for 5 minutes. Cut into wedges and serve with onion gravy, mashed potato and peas. A good butcher will sell the coil by weight, so ask for the size that fits your tray.',
    ing: [
      '900 g Cumberland sausage ring',
      '1 tbsp vegetable oil',
      '200 ml onion gravy',
      '800 g potatoes, boiled and mashed',
      '300 g peas'
    ],
    st: [
      'Heat the oven to 200°C. Lay the sausage flat on a tray and thread two skewers across to hold the coil.',
      'Prick a few times, brush with the oil and roast for 35 minutes, turning once, until deep gold and cooked through.',
      'Rest for 5 minutes and cut into wedges.',
      'Serve with the gravy, mash and peas.'
    ],
    tips: [
      'Skewer the coil to hold it.',
      'Prick the skin only a few times.',
      'If your oven runs hot, check at 28 minutes.',
      'Rest it before cutting.'
    ],
    pair: ['Mashed potato', 'Onion gravy', 'Peas', 'Mustard'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven until hot all the way through.',
    nut: [599, 25, 37, 39, 7, 7, 1210]
  }
};
