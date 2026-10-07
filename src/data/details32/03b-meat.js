'use strict';

/**
 * Volume thirty-two — beef, pork, lamb and turkey.
 *
 * Seven meat dinners built the same way as the chicken: lean cuts, a hard sear
 * and a pan sauce or a vegetable base instead of a starch. The meatloaf is
 * glazed with tomato paste and mustard rather than ketchup, and the shepherd's
 * pie wears a cauliflower mash. The sausage skillet is the one dish here that
 * needs the label read, since sausage sodium varies by brand.
 */

module.exports = {
  'turkey-meatloaf': {
    d: 'A moist turkey meatloaf bound with oats and egg and glazed with tomato paste and mustard instead of ketchup. Six servings in 65 minutes.',
    meta: 'Turkey meatloaf with a tomato paste and mustard glaze instead of ketchup: lean turkey, oats, onion and zucchini. Six servings in 65 minutes.',
    kw: ['turkey meatloaf', 'diabetic friendly turkey meatloaf', 'turkey meatloaf without ketchup', 'healthy turkey meatloaf with oats', 'easy turkey meatloaf'],
    why: 'A family dinner for six that slices cleanly and tastes as good cold as it does hot. The glaze is tomato paste, mustard and vinegar, so it is tangy and savoury, with no ketchup and none of the sugar that comes with it. Lean turkey does the rest.\n\nTurkey is lean. Moisture has to come from somewhere else. Grated zucchini, squeezed dry, adds it without a soggy centre, and oats soak up the juices that would otherwise run out into the tray. **Mix only until combined**, because a loaf worked too hard turns dense and rubbery. Shape it free-form on a tray rather than packing it into a tin, which lets the edges brown and the fat drain away.\n\nRest the loaf for 10 minutes before you slice it. The juices settle and the slices hold together. Leftover slices reheat gently and are good cold with mustard and a green salad.',
    ing: [
      '# For the loaf',
      '700 g lean turkey mince',
      '40 g rolled oats',
      '1 large egg',
      '100 g onion, finely chopped',
      '150 g zucchini, grated and squeezed dry',
      '3 garlic cloves, minced',
      '1 tbsp Worcestershire sauce',
      '1 tsp dried thyme',
      '1 tsp smoked paprika',
      '¾ tsp salt',
      '½ tsp black pepper',
      '# For the glaze',
      '3 tbsp tomato paste',
      '1 tbsp Dijon mustard',
      '1 tbsp apple cider vinegar'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a baking tray with parchment paper. Squeeze the grated zucchini in a clean tea towel until it stops dripping.',
      'Mix the turkey, oats, egg, onion, zucchini, garlic, Worcestershire sauce, thyme, paprika, salt and pepper with your hands until just combined.',
      'Shape the mixture into a loaf about 25 cm long on the tray. Stir the tomato paste, mustard and vinegar together and spread half over the top.',
      'Bake for 35 minutes, spread the rest of the glaze over the loaf and bake for another 15 minutes, until a thermometer pushed into the centre reads 74°C. Rest for 10 minutes before slicing.'
    ],
    tips: [
      'Squeeze the zucchini properly; wet zucchini releases water into the loaf and makes it crumble.',
      'If you do not have a thermometer, press a skewer into the centre; the juices should run clear.',
      'Line the tray with parchment paper so the loaf lifts off without breaking.'
    ],
    pair: ['Roasted green beans', 'Steamed broccoli', 'Cauliflower mash'],
    store: 'Keeps in the fridge for up to 3 days. Slices freeze well for up to 3 months.',
    nut: [252, 26, 10, 12, 2, 3, 470]
  },

  'pepper-steak': {
    d: 'Thin strips of beef sirloin with bell peppers and onion in a garlic, ginger and soy sauce, thickened with cornflour. Four servings in 27 minutes.',
    meta: 'Pepper steak: sirloin strips stir-fried with bell peppers and onion in a garlic, ginger and reduced-sodium soy sauce, ready in 27 minutes.',
    kw: ['pepper steak', 'diabetic friendly pepper steak', 'dairy free pepper steak', 'easy pepper steak with bell peppers', 'pepper steak stir fry'],
    why: 'Slice the beef thinly across the grain; it is the one step that decides whether pepper steak is tender or chewy. A partly frozen steak is easier to slice thin, so give it a short spell in the freezer first if you can. The cut matters less than the knife work.\n\nEverything else is fast. The pan has to be very hot, so the beef browns in 2 minutes without releasing its juices, and the peppers should keep a little crunch. **Cook the beef in one layer**, in two batches if your pan is small. The sauce is soy, stock and cornflour, thickened to a gloss in about 1 minute, with coarse black pepper doing the work the name promises.\n\nReduced-sodium soy sauce keeps the salt in check, and the stock stretches it. Taste before adding more. Serve over cauliflower rice or with a simple green salad. Leftovers reheat well in a hot pan with a splash of water.',
    ing: [
      '500 g beef sirloin, sliced thinly across the grain',
      '1 tbsp cornflour',
      '2 tbsp reduced-sodium soy sauce',
      '120 ml unsalted beef stock',
      '1 tbsp rice vinegar',
      '1 tsp coarsely ground black pepper',
      '2 tbsp sunflower oil',
      '400 g bell peppers, red and green, cut into strips',
      '150 g onion, sliced',
      '3 garlic cloves, minced',
      '1 tbsp grated fresh ginger'
    ],
    st: [
      'Whisk the cornflour with the soy sauce, stock, rice vinegar and black pepper until smooth.',
      'Heat 1 tbsp of the oil in a large frying pan or wok over high heat until it shimmers. Stir-fry the beef in a single layer for 2 minutes, until browned but still pink inside, then move it to a plate.',
      'Add the remaining oil, the peppers and the onion and stir-fry for 4 minutes, until the edges start to char. Add the garlic and ginger and stir-fry for 30 seconds.',
      'Pour in the sauce and bring to a boil, stirring, for 1 minute until it thickens. Return the beef and its juices to the pan and toss for 1 minute.'
    ],
    tips: [
      'Freeze the steak for a short while before slicing; a firm steak cuts into thin, even strips.',
      'Cut the peppers and onion to a similar width so they cook at the same rate.',
      'If the sauce thickens too much, loosen it with a splash of stock or water.'
    ],
    pair: ['Cauliflower rice', 'Steamed green beans', 'A cucumber salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a hot pan with a splash of water.',
    nut: [321, 29, 13, 17, 3, 6, 380]
  },

  'sausage-and-cabbage-skillet': {
    d: 'Browned sausage slices with soft cabbage, onion and smoked paprika, finished with mustard and cider vinegar in one pan. Four servings in 30 minutes.',
    meta: 'Sausage and cabbage skillet: sliced sausage, cabbage and onion cooked in one pan with smoked paprika and mustard. Four servings in 30 minutes.',
    kw: ['sausage and cabbage skillet', 'diabetic friendly sausage and cabbage', 'gluten free sausage and cabbage', 'dairy free sausage and cabbage dinner', 'quick sausage and cabbage skillet'],
    why: 'Sausage, cabbage and onion are the whole dish, and the pan does the rest. The sausage browns first and leaves fat behind, the onion softens in it, and the cabbage cooks down in the savoury juices until it is sweet, silky and a little browned at the edges. Dinner in one pan.\n\nSausage is salty, so this recipe adds none and lets mustard and vinegar supply the sharpness. **Check the sausage label**: sodium and fillers vary widely between brands, and some contain gluten. Cabbage collapses quickly. Cut it into ribbons about as wide as your finger so it wilts evenly, and add it in handfuls, since a full pan will not stir until the first batch has gone down.\n\nSmoked paprika adds a smoky depth without any meat beyond the sausage. Serve straight from the pan with a spoonful of mustard on the side. Taste before serving, since the sausage may already supply enough salt. It reheats well.',
    ing: [
      '280 g gluten-free chicken sausages, sliced into 2 cm pieces',
      '1 tbsp olive oil',
      '150 g onion, sliced',
      '600 g green cabbage, shredded',
      '2 garlic cloves, minced',
      '1 tsp smoked paprika',
      '120 ml unsalted chicken stock',
      '1 tbsp apple cider vinegar',
      '1 tbsp Dijon mustard',
      '¼ tsp black pepper'
    ],
    st: [
      'Heat the oil in a large, deep frying pan over medium-high heat. Add the sausage and cook for 5 minutes, turning, until browned on both sides. Lift out onto a plate.',
      'Add the onion to the fat left in the pan and cook for 4 minutes, until soft. Add the garlic and paprika and cook for 30 seconds.',
      'Add the cabbage in handfuls, stirring as it wilts, then pour in the stock. Cover and cook for 6 minutes, until the cabbage is tender but not limp.',
      'Stir in the vinegar, mustard and pepper, return the sausage to the pan and cook uncovered for 2 minutes. Taste and add salt only if it needs it.'
    ],
    tips: [
      'Choose a sausage with a short ingredient list and check the sodium on the label; brands differ widely.',
      'If the pan looks dry while the cabbage cooks, add a splash of stock or water.',
      'Slice the sausage on the diagonal so each piece has more browned surface.'
    ],
    pair: ['Whole-grain mustard on the side', 'A green salad', 'Steamed green beans'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a covered pan until steaming hot.',
    nut: [237, 14, 16, 13, 5, 7, 600]
  },

  'pork-medallions-with-mustard-sauce': {
    d: 'Pork tenderloin medallions seared and served in a quick shallot, mustard and half-and-half pan sauce. Four servings in 25 minutes.',
    meta: 'Pork medallions with mustard sauce: pork tenderloin seared and finished in a shallot, Dijon and half-and-half pan sauce in 25 minutes.',
    kw: ['pork medallions with mustard sauce', 'diabetic friendly pork tenderloin', 'gluten free pork medallions', 'creamy mustard pork', 'easy pork tenderloin with mustard sauce'],
    why: 'Think of it as steak au poivre\'s gentler cousin: the same quick sear and the same pan sauce, with mustard in place of crushed peppercorns. Pork tenderloin is lean and mild, which makes it a good partner for something sharp. It takes 25 minutes from start to finish.\n\nCut the tenderloin into slices about as thick as your thumb and flatten them slightly, so every medallion cooks in the same 3 minutes a side. **Do not crowd the pan**; pork that steams will not brown, and the browned bits are the base of the sauce. Whisk the mustard in over low heat. Boiling it dulls the flavour and can split the sauce.\n\nHalf-and-half is lighter than double cream and still gives the sauce body once it has simmered for 2 minutes. Mustard is salty. Taste before adding more salt, then serve with steamed green beans or a crisp salad. Leftover medallions slice well into a salad.',
    ing: [
      '600 g pork tenderloin, trimmed and cut into 12 slices',
      '½ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp olive oil',
      '40 g shallot, finely chopped',
      '120 ml unsalted chicken stock',
      '80 ml half-and-half',
      '2 tbsp Dijon mustard',
      '1 tsp fresh thyme leaves',
      '1 tbsp chopped fresh parsley'
    ],
    st: [
      'Flatten each slice of pork gently with the palm of your hand so it is an even thickness. Season both sides with the salt and pepper.',
      'Heat the oil in a large frying pan over medium-high heat. Cook the medallions for 3 minutes on each side, until golden and cooked through with clear juices, then move to a plate and cover loosely with foil.',
      'Add the shallot to the pan and cook for 1 minute. Pour in the stock, scrape up the browned bits and simmer for 3 minutes, until reduced by about half.',
      'Lower the heat, whisk in the half-and-half and mustard and simmer gently for 2 minutes, until the sauce coats a spoon. Stir in the thyme, return the pork and its juices to the pan and warm through for 1 minute. Scatter with the parsley.'
    ],
    tips: [
      'Trim the silver skin from the tenderloin with a thin knife; it does not soften as it cooks and makes the meat curl.',
      'If the sauce looks thin, simmer it for another minute before the pork goes back in.',
      'Let the cooked medallions rest under foil while you make the sauce so they stay juicy.'
    ],
    pair: ['Steamed green beans', 'Roasted asparagus', 'A watercress salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat gently in a covered pan so the pork does not dry out.',
    nut: [243, 33, 3, 11, 1, 2, 540]
  },

  'beef-and-green-bean-stir-fry': {
    d: 'Sliced sirloin and green beans stir-fried with garlic and ginger in a light soy sauce, with no added sugar. Four servings in 27 minutes.',
    meta: 'Beef and green bean stir-fry: sirloin strips and green beans in a garlic, ginger and reduced-sodium soy sauce. Four servings in 27 minutes.',
    kw: ['beef and green bean stir fry', 'diabetic friendly beef stir fry', 'dairy free beef and green beans', 'easy beef and green bean stir fry with ginger', 'quick beef stir fry with green beans'],
    why: 'A midweek dinner for four. It is on the table in 27 minutes and uses one pan. The beans go into a hot pan raw and come out blistered at the edges but still crisp in the middle, which is where most of the flavour is. Soy sauce, stock and a little cornflour make the sauce, with no added sugar in it.\n\nSlice the beef thinly across the grain and cook it in a single layer, so each piece sears instead of stewing. Speed is the point. **Leave the beans alone at first** so one side blisters before you toss them. Cut them to about 4 cm so they cook in the time it takes the sauce to thicken.\n\nSesame oil goes in last. Heat dulls its flavour, so it is stirred in off the heat with the spring onions. Serve over cauliflower rice or on its own for a lighter meal. Leftovers make a good lunch the next day.',
    ing: [
      '450 g beef sirloin, sliced thinly across the grain',
      '1 tbsp cornflour',
      '2 tbsp reduced-sodium soy sauce',
      '120 ml unsalted beef stock',
      '1 tbsp rice vinegar',
      '2 tbsp sunflower oil',
      '350 g green beans, trimmed and cut into 4 cm pieces',
      '3 garlic cloves, minced',
      '1 tbsp grated fresh ginger',
      '1 tsp sesame oil',
      '1 tbsp sesame seeds',
      '2 spring onions, sliced'
    ],
    st: [
      'Whisk the cornflour into the soy sauce, stock and rice vinegar until smooth.',
      'Heat 1 tbsp of the sunflower oil in a large wok or frying pan over high heat until it shimmers. Stir-fry the beef in a single layer for 2 minutes, until browned, then move it to a plate.',
      'Add the remaining oil and the green beans and stir-fry for 4 minutes, until blistered and tender-crisp. Add the garlic and ginger and stir-fry for 30 seconds.',
      'Pour in the sauce and bring to a boil, stirring, for 1 minute until thickened. Return the beef and its juices and toss for 1 minute. Off the heat, stir in the sesame oil, sesame seeds and spring onions.'
    ],
    tips: [
      'Dry the green beans well after washing; water in the pan makes them steam instead of blister.',
      'If the beef is hard to slice thinly, freeze it briefly first so it firms up.',
      'Taste the sauce before adding more soy, since it concentrates as it thickens.'
    ],
    pair: ['Cauliflower rice', 'A cucumber salad', 'Steamed pak choi'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a hot pan with a splash of water.',
    nut: [314, 27, 11, 18, 4, 3, 370]
  },

  'cauliflower-shepherds-pie': {
    d: 'Lamb mince, carrot, celery and peas in a rich gravy, topped with a buttery cauliflower mash instead of potato. Six servings in 70 minutes.',
    meta: 'Cauliflower shepherd\'s pie: lamb mince, carrot and peas in a rich gravy under a golden cauliflower mash instead of potato. Serves six.',
    kw: ['cauliflower shepherds pie', 'diabetic friendly shepherds pie', 'gluten free shepherds pie', 'shepherds pie with cauliflower mash', 'baked shepherds pie without potato'],
    why: 'Lamb mince, carrots, celery and peas in a rich gravy, with a cauliflower mash where the potato would be: the shepherd\'s pie everyone knows, minus the starch. It is a proper family dinner. The mash is blended with butter and a little half-and-half until smooth, then baked until the edges turn gold.\n\nAny cauliflower topping has one weak point: water. **Drain it thoroughly** and let it steam dry in the colander before you blend, or the topping slumps into the filling instead of sitting on it. Thicken the gravy properly too; cornflour and 12 minutes of simmering make a filling that holds its shape when you cut a portion. Brown the lamb hard at the start, because the browned bits are most of the flavour.\n\nNutmeg is a classic partner for cauliflower. Roughing the top with a fork gives the oven more edges to brown. Keep leftovers in the fridge and reheat portions in a hot oven so the topping crisps up again.',
    ing: [
      '# For the filling',
      '700 g lean lamb mince',
      '1 tbsp olive oil',
      '150 g onion, finely chopped',
      '150 g carrots, diced',
      '100 g celery, diced',
      '3 garlic cloves, minced',
      '2 tbsp tomato paste',
      '1 tbsp cornflour',
      '300 ml unsalted beef stock',
      '1 tsp dried thyme',
      '1 tsp dried rosemary, finely chopped',
      '½ tsp salt',
      '¼ tsp black pepper',
      '150 g frozen peas',
      '# For the cauliflower topping',
      '900 g cauliflower, cut into florets',
      '30 g butter',
      '60 ml half-and-half',
      '¼ tsp ground nutmeg',
      '½ tsp salt'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Bring a large pan of water to a boil, add the cauliflower and cook for 12 minutes, until very tender. Drain well and leave in the colander to steam dry for 5 minutes.',
      'Meanwhile, heat the oil in a large, deep frying pan over medium-high heat. Brown the lamb for 8 minutes, breaking it up, then spoon off the excess fat. Add the onion, carrots and celery and cook for 6 minutes. Add the garlic, tomato paste, thyme and rosemary and cook for 1 minute.',
      'Whisk the cornflour into the stock and pour it into the pan with the salt and pepper. Simmer for 12 minutes, until thick, then stir in the peas and spoon the filling into a baking dish.',
      'Blend the cauliflower with the butter, half-and-half, nutmeg and salt until smooth, or mash it with a potato masher for a rougher texture. Spread it over the filling and rough up the top with a fork.',
      'Bake for 20 minutes, until the topping is flecked with gold and the filling is bubbling at the edges. Rest for 5 minutes before serving.'
    ],
    tips: [
      'Squeeze the cooked cauliflower in a clean tea towel if it still looks wet; a dry mash holds its shape on top of the filling.',
      'If you prefer a smoother topping, use a blender; for a rustic one, a potato masher is enough.',
      'Skim any excess fat from the lamb before adding the vegetables, so the gravy is not greasy.'
    ],
    pair: ['Steamed green beans', 'A green salad', 'Roasted Brussels sprouts'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months; thaw overnight in the fridge and reheat in a hot oven until steaming hot.',
    nut: [472, 26, 20, 32, 6, 8, 580]
  },

  'steak-with-garlic-mushroom-sauce': {
    d: 'Pan-seared sirloin steaks served with a quick garlic, mushroom and half-and-half sauce made in the same pan. Four servings in 25 minutes.',
    meta: 'Steak with garlic mushroom sauce: sirloin seared in a hot pan, with a mushroom, garlic and half-and-half sauce made from the pan juices.',
    kw: ['steak with garlic mushroom sauce', 'diabetic friendly steak dinner', 'gluten free steak with mushroom sauce', 'sirloin steak with creamy mushrooms', 'easy steak and mushroom sauce'],
    why: 'Garlic mushroom sauce does for steak what gravy does for a roast: it turns what sticks to the pan into something worth pouring. Nothing is wasted. The sauce is made in the same pan, so it tastes of the steak rather than of the cream.\n\nA hot, heavy pan matters most. It sears the outside hard in 3 minutes a side and leaves the middle pink and juicy. Pat the steaks dry first. **Rest the steaks for 5 minutes** before you cut, so the juices stay in the meat instead of on the board. Cook the mushrooms until the water has gone and they start to brown; that takes about 4 minutes and gives the sauce its depth.\n\nHalf-and-half rounds the sauce without making it heavy. Taste before adding salt, because the seasoning on the steak carries into the pan. Serve with roasted broccoli or a green salad. Leftovers slice well into a salad.',
    ing: [
      '600 g beef sirloin steak, in 4 portions',
      '½ tsp salt',
      '½ tsp black pepper',
      '1 tbsp olive oil',
      '1 tbsp butter',
      '250 g mushrooms, sliced',
      '4 garlic cloves, minced',
      '1 tsp fresh thyme leaves',
      '120 ml unsalted beef stock',
      '60 ml half-and-half',
      '1 tbsp chopped fresh parsley'
    ],
    st: [
      'Pat the steaks dry and season both sides with the salt and pepper.',
      'Heat the oil in a large heavy frying pan over high heat until it is smoking. Cook the steaks for 3 minutes on each side for medium-rare, or a little longer for more done. Move them to a plate, cover loosely with foil and let them rest while you make the sauce.',
      'Lower the heat to medium, add the butter and mushrooms to the same pan and cook for 4 minutes, until browned. Add the garlic and thyme and cook for 30 seconds.',
      'Pour in the stock, scrape up the browned bits and simmer for 2 minutes. Stir in the half-and-half and simmer gently for 1 minute. Return any resting juices to the sauce, spoon it over the steaks and scatter with the parsley.'
    ],
    tips: [
      'Pat the steaks dry before they hit the pan so they sear rather than steam.',
      'If you like your steak more done, lower the heat a little and add a minute a side rather than leaving it on high.',
      'Slice the steak against the grain to keep each piece tender.'
    ],
    pair: ['Roasted broccoli', 'A green salad', 'Steamed green beans'],
    store: 'Best eaten straight away. Leftover steak keeps in the fridge for up to 3 days; reheat gently or eat it cold in a salad.',
    nut: [332, 34, 4, 20, 1, 2, 400]
  }
};
