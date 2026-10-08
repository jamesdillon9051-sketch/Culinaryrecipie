'use strict';

/**
 * Volume thirty-seven — barbecue and burgers.
 *
 * Dishes cooked over a fire or a hot pan, and the burgers people look up by
 * the patty they are made from. Times are the recipe's own; grills differ, so
 * each method says when to check early. Nutrition is estimated from the
 * ingredient list by npm run calc.
 */

module.exports = {
  'bbq-pork': {
    d: 'Pork shoulder steaks rubbed with paprika, sugar and garlic, grilled for 25 minutes and brushed with barbecue sauce at the end. Four servings in 40 minutes.',
    meta: 'BBQ pork: pork shoulder steaks rubbed with smoked paprika and grilled for 25 minutes, glazed with barbecue sauce. Four servings in 40 minutes.',
    kw: ['bbq pork', 'barbecue pork steaks', 'grilled bbq pork', 'bbq pork shoulder steaks', 'pork on the barbecue'],
    why: 'Barbecue pork has a reputation for taking all day, but shoulder steaks give you the same sticky, smoky result in under half an hour on the grill. The fat running through the meat does the work that slow cooking does for a whole joint.\n\nThe rub is paprika, brown sugar, garlic, salt and pepper. Sugar browns fast, so keep the steaks over a medium heat and not a roaring one. **Sauce goes on in the last 5 minutes**, never at the start, or it blackens before the pork is cooked through.\n\nTurn the steaks every 5 minutes. They are ready when the thickest part reads 70°C or the juices run clear when you cut in. If your grill runs hot, check at 15 minutes.\n\nRest the pork for 5 minutes under foil. Slice it across the grain, which keeps each piece tender, and spoon over whatever sauce is left on the plate.',
    ing: [
      '800 g pork shoulder steaks',
      '2 tbsp brown sugar',
      '2 tsp smoked paprika',
      '2 garlic cloves, grated',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '120 ml barbecue sauce'
    ],
    st: [
      'Mix the sugar, paprika, garlic, salt, pepper and oil, and rub it all over the pork.',
      'Heat the grill to medium-high. Grill the steaks for 20 minutes, turning every 5 minutes.',
      'Brush with the barbecue sauce and grill for 5 minutes more, turning once, until sticky and browned.',
      'Rest for 5 minutes, then slice across the grain.'
    ],
    tips: [
      'Add the sauce in the last 5 minutes.',
      'Keep the heat at medium so the sugar does not burn.',
      'If your grill runs hot, check at 15 minutes.',
      'Slice across the grain.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Baked beans', 'Potato salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat gently or eat cold in rolls.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'bbq-beef-brisket': {
    d: 'Beef brisket rubbed with paprika, mustard powder and brown sugar, covered and cooked for 4 hours at 150°C, then glazed with barbecue sauce. Eight servings in 4 hours 20 minutes.',
    meta: 'BBQ beef brisket: a rubbed brisket cooked covered for 4 hours at 150°C until tender, then glazed with barbecue sauce. Eight servings in 4 hours 20 minutes.',
    kw: ['bbq beef brisket', 'barbecue brisket in the oven', 'beef brisket with barbecue sauce', 'slow cooked brisket', 'brisket recipe'],
    why: 'Brisket is a tough, hard-working cut, and the only way through is time. Low heat and a tight cover turn the connective tissue into gelatine, which is why the meat goes from stubborn to sliceable.\n\nThe rub of paprika, mustard powder, brown sugar and salt goes on before the meat does, and the more evenly it covers the surface, the better the crust. Sear the brisket in a hot pan first if you have time, but the recipe works without it.\n\nCook it covered with stock in the bottom of the tin so the steam stays in. **Do not lift the lid before 3 hours**, as every peek lets out the heat the cut is relying on.\n\nIt is done when a fork twists in with no resistance. If your oven runs hot, check at 3 hours. Slice against the grain, thickly, and glaze with the sauce for the last 20 minutes uncovered. Leftovers make excellent sandwiches, so it is worth cooking the full piece even for a smaller table.',
    ing: [
      '1.8 kg beef brisket',
      '2 tbsp brown sugar',
      '2 tbsp smoked paprika',
      '1 tbsp mustard powder',
      '2 tsp salt',
      '1 tsp black pepper',
      '2 onions, sliced',
      '250 ml beef stock',
      '150 ml barbecue sauce'
    ],
    st: [
      'Heat the oven to 150°C. Mix the sugar, paprika, mustard powder, salt and pepper and rub it over the brisket.',
      'Scatter the onions in a roasting tin, pour in the stock and set the brisket on top.',
      'Cover the tin tightly with foil and cook for 3 hours 40 minutes, until a fork twists in easily.',
      'Uncover, brush with the barbecue sauce and cook for 20 minutes more at 150°C.',
      'Rest for 15 minutes, then slice thickly against the grain.'
    ],
    tips: [
      'Cover the tin tightly so the steam stays in.',
      'If your oven runs hot, check at 3 hours.',
      'Slice against the grain.',
      'Add the sauce only for the last 20 minutes.'
    ],
    pair: ['Mashed potato', 'Coleslaw', 'Pickles', 'Soft rolls'],
    store: 'Keeps in the fridge for up to 4 days, covered in its juices. Reheat gently with a splash of stock.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'bbq-prawns': {
    d: 'Large prawns threaded on skewers, brushed with garlic, lemon and chilli butter and grilled for 8 minutes. Four servings in 18 minutes.',
    meta: 'BBQ prawns: large prawns on skewers brushed with garlic, lemon and chilli butter and grilled for 8 minutes. Four servings in 18 minutes.',
    kw: ['bbq prawns', 'barbecue prawns with garlic butter', 'grilled prawns', 'prawns on the barbie', 'easy bbq prawns'],
    why: 'Prawns cook in minutes and spoil in seconds, so the barbecue is a good place for them: hot, fast, and over before anyone looks away.\n\nBuy raw, shell-on prawns if you can. The shell protects the flesh from the heat and keeps it juicy, and guests peel their own at the table. Peeled prawns work too, but cut the time a little.\n\nThe butter is melted with garlic, lemon zest and chilli, then brushed on in two coats. It drips into the coals, which is half the smell. **Pull them when they turn pink and curl into a loose C.** A tight O means overcooked and rubbery.\n\nThread two skewers through each row, one near the head and one near the tail, so the prawns lie flat and turn all at once. If your grill runs hot, check at 5 minutes. Serve them with plenty of napkins and a bowl for the shells, because this is food to eat with your hands.',
    ing: [
      '800 g raw king prawns, shell on',
      '60 g butter, melted',
      '3 garlic cloves, grated',
      '1 lemon, zest and juice',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the grill to high. Thread the prawns onto skewers.',
      'Stir together the butter, garlic, lemon zest, lemon juice, chilli and salt.',
      'Brush the prawns with half the butter and grill for 4 minutes, then turn, brush with the rest and grill for 4 minutes more.',
      'Scatter with parsley and serve with the pan juices.'
    ],
    tips: [
      'Choose shell-on prawns for juicier meat.',
      'Pull them as soon as they curl into a loose C.',
      'If your grill runs hot, check at 5 minutes.',
      'Brush on the butter in two coats.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Lemon wedges', 'Corn on the cob'],
    store: 'Best eaten straight away. Cooked prawns keep in the fridge for 1 day.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'bbq-corn': {
    d: 'Corn on the cob grilled for 15 minutes until charred in spots, then rolled in butter, lime and chilli. Four servings in 20 minutes.',
    meta: 'BBQ corn: corn on the cob grilled for 15 minutes until charred in places, then rolled in butter, lime and chilli. Four servings in 20 minutes.',
    kw: ['bbq corn', 'grilled corn on the cob', 'barbecue corn with butter', 'charred corn', 'corn on the barbecue'],
    why: 'Corn on the grill goes wrong in two ways: it dries out, or it burns in the husk before the kernels are tender. The fix is moisture and patience.\n\nSoak the cobs in cold water for 10 minutes first, with the husks pulled back and the silk removed, then fold the husks back up. They steam inside the leaves while the outside chars, so the kernels stay plump and sweet.\n\nTurn the cobs every 3 minutes. **Charred spots are what you want**, not a uniform black, so keep them moving.\n\nWhile they cook, mix soft butter with lime zest, chilli and salt. Roll each hot cob through it so the butter melts into the kernels and runs down the sides. If your grill runs hot, check at 10 minutes. The kernels should give slightly when pressed. Any butter left in the bowl can be brushed over the cobs again as they sit, so nothing is wasted.',
    ing: [
      '4 corn cobs in their husks',
      '60 g soft butter',
      '1 lime, zest and juice',
      '1/2 tsp chilli powder',
      '1/2 tsp salt',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Pull back the husks, remove the silk, fold the husks back up and soak the cobs in cold water for 10 minutes.',
      'Heat the grill to medium-high. Grill the cobs for 15 minutes, turning every 3 minutes, until the husks are charred.',
      'Mix the butter, lime zest, lime juice, chilli and salt.',
      'Peel back the husks, roll each cob in the butter and scatter with coriander.'
    ],
    tips: [
      'Soak the cobs first so they steam inside the husk.',
      'Turn often for even char.',
      'If your grill runs hot, check at 10 minutes.',
      'Roll the cobs in butter while hot.'
    ],
    pair: ['Grilled chicken', 'Burgers', 'Coleslaw', 'Black bean salad'],
    store: 'Eat straight away. Cooked cobs keep in the fridge for 2 days; cut the kernels off for salads.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'bbq-lamb': {
    d: 'A butterflied leg of lamb marinated in garlic, rosemary and lemon, then grilled for 40 minutes and rested. Six servings in 55 minutes.',
    meta: 'BBQ lamb: a butterflied leg of lamb marinated with garlic, rosemary and lemon and grilled for 40 minutes. Six servings in 55 minutes.',
    kw: ['bbq lamb', 'barbecue butterflied leg of lamb', 'grilled leg of lamb', 'lamb on the barbie', 'easy bbq lamb'],
    why: 'A butterflied leg of lamb is one of the best things to put on a barbecue: boned and opened out, it is a flat piece of meat of roughly even thickness, so it cooks evenly and the surface gets plenty of char.\n\nMix the oil, garlic, rosemary, lemon and salt, and rub it in, pushing it into the cuts. A longer marinade helps, but 30 minutes is enough if you are short of time.\n\nCook it over medium heat with the lid closed if your barbecue has one. **Turn it every 10 minutes**, so the outside browns without burning, and the thick parts finish at the same time as the thin.\n\nA thermometer reads 57°C for pink and 65°C for medium. If your barbecue runs hot, check at 30 minutes. Rest for 10 minutes under foil, then slice across the grain. The carved slices are good hot with the juices spooned over, and just as good cold the next day in a salad.',
    ing: [
      '1.5 kg butterflied leg of lamb',
      '4 tbsp olive oil',
      '5 garlic cloves, grated',
      '3 tbsp chopped rosemary',
      '1 lemon, zest and juice',
      '2 tsp salt',
      '1 tsp black pepper'
    ],
    st: [
      'Mix the oil, garlic, rosemary, lemon zest, lemon juice, salt and pepper and rub it all over the lamb. Leave for 30 minutes.',
      'Heat the barbecue to medium. Grill the lamb for 40 minutes, turning every 10 minutes.',
      'Cover loosely with foil and rest for 10 minutes.',
      'Slice thinly across the grain.'
    ],
    tips: [
      'Press the marinade into the cuts.',
      'Turn the lamb every 10 minutes.',
      'If your barbecue runs hot, check at 30 minutes.',
      'Rest before slicing.'
    ],
    pair: ['Roast potatoes', 'Greek salad', 'Mint sauce', 'Tzatziki'],
    store: 'Keeps in the fridge for up to 3 days. Good cold in wraps.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'fish-burgers': {
    d: 'Patties of white fish, potato and parsley, breadcrumbed and fried for 10 minutes, served in buns with tartare sauce. Four servings in 25 minutes.',
    meta: 'Fish burgers: patties of white fish, potato and parsley, breadcrumbed and fried for 10 minutes, with tartare sauce. Four servings in 25 minutes.',
    kw: ['fish burgers', 'homemade fish burgers', 'white fish burgers with tartare sauce', 'easy fish burgers', 'fish patties in buns'],
    why: 'Fish burgers are at their best in the warmer months, when you want something light off the hob that still goes in a bun. The risk is a patty that falls apart in the pan, and the cure is mashed potato.\n\nCold mashed potato binds the flaked fish without making it heavy. Season it well with parsley, lemon zest and salt, and fold gently so some flakes stay whole.\n\nShape four patties and chill them while you set up the crumb. A cold patty holds together better. **Coat in flour, egg, then breadcrumbs**, pressing the crumbs in so they stay on.\n\nFry in a little oil over medium heat for 5 minutes a side, until deep golden. If your pan runs hot, check at 4 minutes. Serve in toasted buns with tartare sauce and lettuce. Cooked fish from the night before works well here, as does a mix of salmon and white fish if you want more colour.',
    ing: [
      '500 g cooked white fish, flaked',
      '250 g cold mashed potato',
      '2 tbsp chopped parsley',
      '1 lemon, zest only',
      '1/2 tsp salt',
      '2 tbsp plain flour',
      '1 egg, beaten',
      '60 g breadcrumbs',
      '3 tbsp vegetable oil',
      '4 burger buns',
      '4 tbsp tartare sauce',
      '4 lettuce leaves'
    ],
    st: [
      'Mix the fish, potato, parsley, lemon zest and salt, and shape into 4 patties.',
      'Coat each patty in flour, then egg, then breadcrumbs.',
      'Heat the oil in a frying pan over medium heat and fry the patties for 5 minutes per side, until golden.',
      'Toast the buns and fill with lettuce, a patty and tartare sauce.'
    ],
    tips: [
      'Use cold mashed potato to bind.',
      'Chill the patties before coating.',
      'If your pan runs hot, check at 4 minutes.',
      'Press the crumbs on firmly.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Mushy peas', 'Lemon wedges'],
    store: 'Keeps in the fridge for 1 day. Reheat in a hot oven so the crumb crisps again.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'lamb-burgers': {
    d: 'Lamb mince with cumin, mint and garlic, shaped into patties and cooked for 12 minutes, served in buns with yoghurt sauce. Four servings in 27 minutes.',
    meta: 'Lamb burgers: lamb mince with cumin, mint and garlic, cooked for 12 minutes and served in buns with a cool yoghurt sauce. Four servings in 27 minutes.',
    kw: ['lamb burgers', 'homemade lamb burgers', 'lamb burgers with mint yoghurt', 'easy lamb burgers', 'greek lamb burgers'],
    why: 'Lamb mince makes a richer burger than beef and takes spices well. Cumin, garlic and mint do the most for it, and a cool yoghurt sauce cuts through the fat.\n\nLamb is fatty, so there is no need to add any. Season the meat and mix it just enough to combine, because overworked mince goes dense and rubbery.\n\nShape four patties about 2 cm thick and press a dimple in the middle of each with your thumb. **The dimple stops them puffing up** into a dome as they cook, so the toppings stay put.\n\nCook in a hot frying pan or on the grill for 6 minutes per side, until deeply browned and cooked through. If your pan runs hot, check at 5 minutes. Toast the buns, spread with yoghurt sauce and add the patties. A spoonful of harissa in the yoghurt gives it a warmer edge if you like some heat with your lamb.',
    ing: [
      '600 g lamb mince',
      '1 tsp ground cumin',
      '2 garlic cloves, grated',
      '2 tbsp chopped mint',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '4 burger buns',
      '150 g plain yoghurt',
      '1 tomato, sliced',
      '40 g rocket'
    ],
    st: [
      'Mix the lamb, cumin, garlic, half the mint, salt and pepper and shape into 4 patties with a dimple in each.',
      'Heat the oil in a frying pan over medium-high heat and cook the patties for 6 minutes per side.',
      'Stir the remaining mint into the yoghurt.',
      'Toast the buns and fill with yoghurt, rocket, tomato and a patty.'
    ],
    tips: [
      'Mix the meat gently.',
      'Press a dimple into each patty.',
      'If your pan runs hot, check at 5 minutes.',
      'Toast the buns for a firmer base.'
    ],
    pair: ['Sweet potato wedges', 'Greek salad', 'Pickled onions', 'Hummus'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan rather than a microwave.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'pork-burgers': {
    d: 'Pork mince with sage, apple and onion, shaped into patties and cooked for 12 minutes until no pink remains. Four servings in 27 minutes.',
    meta: 'Pork burgers: pork mince with sage, grated apple and onion, cooked for 12 minutes until no pink remains. Four servings in 27 minutes.',
    kw: ['pork burgers', 'homemade pork burgers', 'pork and apple burgers', 'sage pork burgers', 'pork patties'],
    why: 'Pork mince goes dry faster than beef, and most home versions come out like a hockey puck. The fix is moisture inside the patty, and a grated apple provides it.\n\nApple adds juice and a gentle sweetness that suits pork, while sage gives the savoury note people associate with sausages. A grated onion does the same job as the apple and adds bite.\n\nSqueeze the grated apple and onion lightly in your hand before they go in, so the patties are not wet. **Pork must be cooked right through**, with no pink and a clear juice, so do not press the burgers down in the pan to hurry them.\n\nCook over medium heat for 6 minutes a side, until browned and firm. If your pan runs hot, check at 5 minutes. Serve in a bun with mustard and crisp lettuce. A slice of mature cheddar added in the last minute melts over the top and goes well with the apple.',
    ing: [
      '600 g pork mince',
      '1 apple, grated',
      '1 small onion, grated',
      '1 tbsp chopped sage',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '4 burger buns',
      '2 tsp wholegrain mustard',
      '4 lettuce leaves'
    ],
    st: [
      'Mix the pork, apple, onion, sage, salt and pepper and shape into 4 patties.',
      'Heat the oil in a frying pan over medium heat and cook the patties for 6 minutes per side, until browned and cooked through.',
      'Toast the buns, spread with mustard and fill with lettuce and a patty.'
    ],
    tips: [
      'Squeeze the grated apple lightly first.',
      'Cook until no pink remains.',
      'If your pan runs hot, check at 5 minutes.',
      'Do not press the patties in the pan.'
    ],
    pair: ['Apple slaw', 'Oven chips', 'Pickles', 'Cheddar'],
    store: 'Keeps in the fridge for 2 days. Reheat until hot all the way through.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'mushroom-burgers': {
    d: 'Large field mushrooms marinated in balsamic, garlic and thyme, grilled for 15 minutes and served in buns with cheese. Four servings in 25 minutes.',
    meta: 'Mushroom burgers: large field mushrooms marinated in balsamic, garlic and thyme, grilled for 15 minutes and served in buns with cheese. Four servings in 25 minutes.',
    kw: ['mushroom burgers', 'portobello mushroom burgers', 'grilled mushroom burgers', 'vegetarian mushroom burgers', 'field mushroom burgers'],
    why: 'Mushrooms, oil and balsamic: three things, and the mushroom does the rest. A large field mushroom is about the size and shape of a patty, and it browns into something dense and savoury.\n\nMushrooms are mostly water, so they need to lose some of it. Score the caps lightly, brush with the marinade and cook gills-up first so the juices collect, then tip them out and turn.\n\n**Do not wash them**; wipe the caps with damp kitchen paper instead, or they soak up water and steam in the pan. A pinch of salt draws moisture out, so season only at the end.\n\nGrill or griddle for 15 minutes, turning once, until the caps are dark and tender. If your grill runs hot, check at 10 minutes. Top with cheese for the last minute to melt, and serve in toasted buns. A slice of halloumi or a spoonful of pesto in the bun adds richness if you want the burger to feel more substantial.',
    ing: [
      '4 large field mushrooms',
      '3 tbsp olive oil',
      '2 tbsp balsamic vinegar',
      '2 garlic cloves, grated',
      '1 tsp thyme leaves',
      '1/2 tsp salt',
      '4 slices cheddar',
      '4 burger buns',
      '1 tomato, sliced',
      '40 g rocket'
    ],
    st: [
      'Wipe the mushrooms and mix the oil, vinegar, garlic and thyme. Brush the mushrooms with it and leave for 10 minutes.',
      'Heat the grill to medium-high. Grill the mushrooms gills-up for 7 minutes, then turn and grill for 8 minutes more.',
      'Lay a slice of cheddar on each for the last minute.',
      'Toast the buns and fill with rocket, tomato and a mushroom.'
    ],
    tips: [
      'Wipe the mushrooms rather than washing them.',
      'Start gills-up.',
      'If your grill runs hot, check at 10 minutes.',
      'Salt after cooking if you can.'
    ],
    pair: ['Sweet potato fries', 'Coleslaw', 'Green salad', 'Pickled gherkins'],
    store: 'Best eaten at once. Cooked mushrooms keep in the fridge for 2 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'beetroot-burger': {
    d: 'Grated beetroot, cooked brown rice and walnuts bound with egg and breadcrumbs, shaped into patties and fried for 12 minutes. Four servings in 27 minutes.',
    meta: 'Beetroot burger: grated beetroot, cooked rice and walnuts bound with egg and fried for 12 minutes, in buns with horseradish. Four servings in 27 minutes.',
    kw: ['beetroot burger', 'vegetarian beetroot burger', 'beetroot and walnut burgers', 'homemade beetroot burgers', 'veggie beetroot patties'],
    why: 'It looks like a meat burger and cooks like a rissole, which is why the mixture has to be firm. Beetroot is wet, and a wet mix slides apart in the pan.\n\nSqueeze the grated beetroot hard in a clean tea towel before mixing. You should get a good handful of purple juice out. Cooked rice and breadcrumbs soak up the rest, and the egg holds it together.\n\nWalnuts, chopped small, give bite and fat. Without them the patty is soft all the way through.\n\n**Chill the shaped patties for 15 minutes** before frying, which firms them up and makes them far easier to turn. Fry over medium heat for 6 minutes a side, until the edges are dark and crisp. If your pan runs hot, check at 5 minutes. Horseradish or mustard in the bun suits the earthy sweetness. Wear gloves if you do not want pink fingers, because beetroot stains skin and work surfaces for hours.',
    ing: [
      '400 g raw beetroot, peeled and grated',
      '200 g cooked brown rice',
      '80 g walnuts, finely chopped',
      '60 g breadcrumbs',
      '1 egg',
      '1 small onion, grated',
      '1 tsp ground cumin',
      '1 tsp salt',
      '3 tbsp vegetable oil',
      '4 burger buns',
      '2 tsp horseradish sauce',
      '4 lettuce leaves'
    ],
    st: [
      'Squeeze the grated beetroot dry in a tea towel and mix with the rice, walnuts, breadcrumbs, egg, onion, cumin and salt.',
      'Shape into 4 patties and chill for 15 minutes.',
      'Heat the oil in a frying pan over medium heat and fry the patties for 6 minutes per side, until firm and dark at the edges.',
      'Toast the buns and fill with horseradish, lettuce and a patty.'
    ],
    tips: [
      'Squeeze the beetroot dry.',
      'Chill the patties for 15 minutes.',
      'If your pan runs hot, check at 5 minutes.',
      'Turn them only once.'
    ],
    pair: ['Sweet potato wedges', 'Rocket salad', 'Pickled red onion', 'Yoghurt dip'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan or oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  }
};
