'use strict';

/**
 * Volume twenty-one — the cuts and the basics.
 *
 * The catalogue had the dishes made from meat and fish, and few of the meat and
 * fish themselves: no pork chop, no pork tenderloin, no scallops, no flank
 * steak, no baked cod, no boiled egg. These are the questions people ask a
 * recipe site most often: how long, at what temperature, and how do I stop it
 * drying out.
 */

module.exports = {
  'smothered-pork-chops': {
    d: 'Floured bone-in chops browned in a skillet, then simmered under a blanket of golden onions and gravy until tender. Fifty-five minutes.',
    meta: 'Southern smothered pork chops: floured bone-in chops browned, then simmered in a rich onion gravy until tender. One skillet, served over rice or mash.',
    kw: ['smothered pork chops', 'smothered pork chops recipe', 'southern smothered pork chops', 'pork chops with onion gravy', 'smothered pork chops in the skillet'],
    why: 'A pork chop dries out because it is lean and fast; smothering solves it by finishing the chop in gravy at a gentle simmer, where it stays moist and slowly tenderises instead of toughening. The chops are floured so they brown well and so the flour that comes off in the pan becomes the base of the gravy. The onions get a full ten minutes to go deep golden, because that is where most of the sweetness in the sauce comes from.',
    ing: [
      '4 bone-in pork chops, about 2 cm thick, 250 g each',
      '1 tsp fine sea salt, divided',
      '0.5 tsp black pepper',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '60 g plain flour',
      '3 tbsp vegetable oil',
      '2 large onions, sliced',
      '3 garlic cloves, minced',
      '2 tbsp plain flour, for the gravy',
      '500 ml chicken stock',
      '1 tsp Worcestershire sauce',
      '1 tsp dried thyme',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Pat the chops dry. Mix half the salt with the pepper, paprika, garlic powder and the 60 g flour on a plate and press the chops into it, shaking off the excess.',
      'Heat the oil in a large deep skillet over medium-high heat and brown the chops for 3 minutes a side, until deep golden. They do not need to cook through. Move to a plate.',
      'Turn the heat to medium and cook the onions in the same pan for 10 minutes, stirring, until golden and soft. Add the garlic for 1 minute.',
      'Sprinkle over the 2 tablespoons of flour and cook 1 minute, stirring.',
      'Whisk in the stock, Worcestershire sauce, thyme and the remaining salt and bring to a simmer.',
      'Nestle the chops back into the pan and spoon the onions and gravy over them.',
      'Cover and simmer very gently for 20 minutes, until the chops reach 63°C / 145°F and are tender.',
      'Uncover and simmer 3 minutes to thicken the gravy, then scatter with parsley and serve.'
    ],
    tips: [
      'Give the onions the full ten minutes. Their sweetness is the gravy.',
      'Simmer gently. A hard boil toughens the chops.',
      'Use bone-in chops. The bone keeps them moist during the long simmer.'
    ],
    pair: ['Mashed potatoes', 'Steamed rice', 'Green beans'],
    store: 'Refrigerate up to 3 days and reheat gently in the gravy. Freeze the chops in their gravy for 2 months.',
    nut: [464, 40, 22, 24, 2, 5, 950]
  },

  'pork-tenderloin': {
    d: 'Two tenderloins seared in a skillet, brushed with Dijon and herbs and roasted to 63°C, then rested and sliced. Forty minutes.',
    meta: 'Roast pork tenderloin: seared in a skillet, brushed with a Dijon, garlic and herb coating, roasted to 63°C and rested for a juicy, rosy slice.',
    kw: ['pork tenderloin', 'pork tenderloin recipe', 'roast pork tenderloin', 'juicy pork tenderloin with dijon and herbs', 'how long to cook pork tenderloin'],
    why: 'Tenderloin is the leanest cut of pork, with almost no fat to protect it, so it is right at only one moment and dry after that. That moment is 63°C in the middle, after which it climbs a couple of degrees as it rests. Searing first builds the crust that a short roast alone would not, and the mustard and herb coating both seasons it and bastes it in the oven. Trimming off the tough silver skin matters because it shrinks with heat and makes the meat curl.',
    ing: [
      '2 pork tenderloins, about 450 g each',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 tbsp olive oil, divided',
      '2 tbsp Dijon mustard',
      '4 garlic cloves, minced',
      '1 tbsp chopped fresh rosemary',
      '1 tbsp fresh thyme leaves'
    ],
    st: [
      'Heat the oven to 220°C / 425°F. Trim the silver skin from the tenderloins with a thin sharp knife and pat them dry. Season with the salt and pepper.',
      'Heat 1 tablespoon of the oil in a large ovenproof skillet over high heat and sear the tenderloins for 6 minutes, turning, until browned on all sides.',
      'Mix the remaining oil, the mustard, garlic, rosemary and thyme and brush over the seared tenderloins.',
      'Roast 15 to 18 minutes, until the thickest part reads 63°C / 145°F.',
      'Move to a board and rest 10 minutes.',
      'Slice into 2 cm rounds and spoon over the pan juices.'
    ],
    tips: [
      'Take it out at 63°C. Past 70°C it is dry and chalky.',
      'Trim the silver skin. It shrinks in the heat and makes the meat curl.',
      'Rest for the full 10 minutes so the juices stay in the slices.'
    ],
    pair: ['Roast potatoes', 'Apple sauce', 'Steamed green beans'],
    store: 'Refrigerate up to 4 days and eat cold in sandwiches or reheat sliced in a pan with a splash of stock. Freeze slices for 2 months.',
    nut: [284, 42, 2, 12, 0, 0, 640]
  },

  'seared-scallops': {
    d: 'Large sea scallops seared two minutes in a smoking pan for a deep gold crust and a barely set middle, basted with garlic butter. Sixteen minutes.',
    meta: 'Pan-seared scallops: bone-dry sea scallops seared in a very hot pan for a deep golden crust, then basted with garlic butter and lemon.',
    kw: ['seared scallops', 'seared scallops recipe', 'pan seared scallops', 'how to sear scallops', 'garlic butter scallops'],
    why: 'Scallops are mostly water, and the whole job is to get that water out of the way so the surface can brown before the middle overcooks. They must be bone dry, the pan very hot, and they must have room, since a crowded pan floods with liquid and they steam grey. What you want is a deep gold crust on one side, formed in two minutes without being touched, and a translucent, barely set middle. The butter goes in only after the crust is made, since it would burn at that heat.',
    ing: [
      '12 large sea scallops, about 500 g, side muscle removed',
      '0.75 tsp fine sea salt',
      '0.25 tsp black pepper',
      '1 tbsp vegetable oil',
      '2 tbsp unsalted butter',
      '2 garlic cloves, lightly crushed',
      '2 sprigs thyme',
      '1 tbsp lemon juice',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Pat the scallops thoroughly dry on paper towels, pressing lightly, and season both sides with the salt and pepper.',
      'Heat the oil in a large skillet over high heat until it just begins to smoke.',
      'Lay the scallops in a single layer with space between them and do not move them. Sear 2 minutes, until the underside is deep golden.',
      'Turn each scallop, add the butter, garlic and thyme and baste with a spoon for 1 minute, until the middle is just opaque.',
      'Take the pan off the heat, spoon over the lemon juice and scatter with the parsley.',
      'Serve immediately.'
    ],
    tips: [
      'Dry the scallops until the paper towel comes away dry. Wet scallops steam.',
      'Do not move them for the first 2 minutes. That is how the crust forms.',
      'Add the butter after searing. In the hot oil it would burn.'
    ],
    pair: ['Cauliflower purée', 'Buttered asparagus', 'A dry white wine'],
    store: 'Best eaten immediately. Refrigerate up to 1 day and eat cold in a salad, since reheating turns scallops rubbery.',
    nut: [183, 16, 5, 11, 0, 0, 600]
  },

  'turkey-burgers': {
    d: 'Turkey patties made moist with grated onion, breadcrumbs and Worcestershire, pan-cooked to 74°C and served in toasted buns. Twenty-seven minutes.',
    meta: 'Juicy turkey burgers with grated onion, breadcrumbs, smoked paprika and Worcestershire, pan-cooked to 74°C and served on toasted buns.',
    kw: ['turkey burgers', 'turkey burgers recipe', 'juicy turkey burgers', 'homemade turkey burgers', 'turkey burgers on the stovetop'],
    why: 'Turkey mince is lean and mild, so left alone it makes a dry, bland burger. The fixes are about moisture and seasoning: grated onion and a little breadcrumb hold water in the patty, Worcestershire sauce and smoked paprika add the meaty depth turkey lacks, and a dimple pressed into the centre stops the patty puffing into a dome. Turkey has to reach 74°C and cannot be served pink, which is why the moisture has to be built in instead of left to the doneness.',
    ing: [
      '600 g turkey mince, ideally 7 percent fat',
      '1 small onion, grated',
      '40 g fresh breadcrumbs',
      '1 large egg',
      '1 tbsp Worcestershire sauce',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp vegetable oil',
      '4 burger buns, split and toasted',
      '4 slices cheddar',
      'Lettuce, tomato slices and mayonnaise, to serve'
    ],
    st: [
      'Mix the turkey, onion, breadcrumbs, egg, Worcestershire sauce, paprika, garlic powder, salt and pepper gently with your hands until just combined. Do not overwork it.',
      'Shape into 4 patties about 2 cm thick and slightly wider than the buns. Press a shallow dimple into the centre of each.',
      'Heat the oil in a large skillet or griddle over medium-high heat.',
      'Cook the patties 5 to 6 minutes a side, until deeply browned and 74°C / 165°F in the middle.',
      'Lay a slice of cheese over each patty for the last minute and cover the pan so it melts.',
      'Build the burgers on the toasted buns with the lettuce, tomato and mayonnaise and serve hot.'
    ],
    tips: [
      'Do not overmix. Handled too much, the patties turn dense and bouncy.',
      'The dimple stops the burger puffing up in the middle.',
      'Cook to 74°C and no further. A thermometer is worth using.'
    ],
    pair: ['Sweet potato fries', 'Coleslaw', 'A cold lager'],
    store: 'Refrigerate cooked patties up to 3 days. Freeze uncooked patties, separated by paper, for 3 months and cook from frozen, adding 3 minutes a side.',
    nut: [452, 38, 30, 20, 2, 5, 900]
  },

  'baked-cod': {
    d: 'Cod fillets brushed with Dijon and topped with a buttery lemon and parsley crumb, baked at 200°C until the topping is golden. Twenty-five minutes.',
    meta: 'Baked cod with a lemon and parsley breadcrumb crust: fillets brushed with Dijon, topped with buttery panko and ready in about 25 minutes.',
    kw: ['baked cod', 'baked cod recipe', 'baked cod with lemon and breadcrumbs', 'oven baked cod fillets', 'how long to bake cod at 400'],
    why: 'Cod is lean and flaky, and it goes from moist to chalky in about two minutes, so the coating has two jobs: the panko browns and gives crunch, and the film of mustard and butter underneath insulates the top of the fillet so it cooks gently. Mixing the crumbs with melted butter before they go on is what lets them brown in a bake this short. Cod is done when it turns opaque and flakes at 60°C; the residual heat takes it a few degrees higher on the plate.',
    ing: [
      '4 cod fillets, about 180 g each',
      '0.75 tsp fine sea salt',
      '0.25 tsp black pepper',
      '1 tbsp Dijon mustard',
      '60 g panko breadcrumbs',
      '2 tbsp unsalted butter, melted',
      '1 garlic clove, grated',
      '2 tbsp chopped parsley',
      'Zest of 1 lemon',
      'Lemon wedges, to serve'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Pat the cod dry, set it on the tray and season with the salt and pepper.',
      'Brush the top of each fillet with the mustard.',
      'Mix the panko, melted butter, garlic, parsley and lemon zest in a bowl until the crumbs are evenly moistened.',
      'Press the crumb mixture firmly onto the mustard on each fillet.',
      'Bake 12 to 15 minutes, until the crust is golden and the fish flakes easily and reads 60°C / 140°F.',
      'Serve at once with lemon wedges.'
    ],
    tips: [
      'Coat the crumbs in melted butter. Dry crumbs stay pale in a short bake.',
      'Pat the fish dry so the crumb sticks and the tray does not steam.',
      'Take it out at 60°C. Cod turns chalky quickly.'
    ],
    pair: ['Roasted potatoes', 'Steamed green beans', 'Tartare sauce'],
    store: 'Refrigerate up to 2 days and reheat at 160°C for 8 minutes. Freeze uncooked, crumbed fillets for 2 months and bake from frozen, adding 8 minutes.',
    nut: [274, 34, 12, 10, 1, 1, 560]
  },

  'honey-mustard-chicken': {
    d: 'Chicken thighs baked under a sticky glaze of Dijon, wholegrain mustard, honey and garlic, basted twice. Forty minutes.',
    meta: 'Baked honey mustard chicken: boneless thighs glazed with Dijon, wholegrain mustard, honey and garlic, basted twice for a sticky, lacquered finish.',
    kw: ['honey mustard chicken', 'honey mustard chicken recipe', 'baked honey mustard chicken', 'honey mustard chicken thighs', 'honey mustard glaze for chicken'],
    why: 'Honey mustard is a balance: the honey supplies sweetness and caramelises in the oven, the Dijon supplies tang and body, and the wholegrain mustard adds texture and a mild heat. It is used in two stages because sugar burns: a first coat before baking seasons the meat, and a second brushed on partway keeps a glossy layer that has not had time to scorch. Thighs suit it better than breasts, staying moist through the long bake and holding the glaze.',
    ing: [
      '800 g boneless skinless chicken thighs',
      '4 tbsp Dijon mustard',
      '3 tbsp honey',
      '2 tbsp wholegrain mustard',
      '1 tbsp olive oil',
      '2 garlic cloves, grated',
      '1 tsp smoked paprika',
      '0.75 tsp fine sea salt',
      '0.25 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Whisk the Dijon, honey, wholegrain mustard, oil, garlic and paprika in a bowl.',
      'Pat the chicken dry, season with the salt and pepper and set on the tray, not touching.',
      'Brush half the glaze over the chicken.',
      'Bake 15 minutes, then brush on the remaining glaze.',
      'Bake 12 to 15 minutes more, until the thickest part reaches 74°C / 165°F and the glaze is sticky and browned in places.',
      'Rest 5 minutes, scatter with parsley and spoon over the juices from the tray.'
    ],
    tips: [
      'Glaze in two stages. Honey burns if it is on for the whole bake.',
      'Use thighs. They stay juicy and hold the glaze.',
      'Spoon the tray juices over the top before serving. They are the best part.'
    ],
    pair: ['Roasted broccoli', 'Rice', 'Mashed potatoes'],
    store: 'Refrigerate up to 4 days and reheat at 180°C for 10 minutes. Freeze cooked chicken for 3 months.',
    nut: [358, 38, 20, 14, 1, 18, 780]
  },

  'cajun-chicken-pasta': {
    d: 'Blackened Cajun-spiced chicken and peppers in a creamy Parmesan sauce over penne. Forty minutes.',
    meta: 'Cajun chicken pasta: blackened, spice-crusted chicken and peppers in a creamy Parmesan sauce tossed with penne and finished with spring onions.',
    kw: ['cajun chicken pasta', 'cajun chicken pasta recipe', 'creamy cajun chicken pasta', 'cajun chicken penne', 'homemade cajun seasoning chicken pasta'],
    why: 'The chicken is seasoned heavily and seared hard, which builds a dark, spicy crust that is the flavour of the whole dish; that crust and the browned bits it leaves in the pan are what the sauce is built on. The cream is loosened with stock and cut with Parmesan so it stays tangy rather than heavy, and the pasta is finished in the sauce with its own starchy water so everything clings. The peppers go in after the chicken, so they soften without going to mush.',
    ing: [
      '350 g penne',
      '500 g boneless skinless chicken breasts, sliced into thin strips',
      '2 tbsp olive oil, divided',
      '# For the Cajun seasoning',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp dried oregano',
      '1 tsp dried thyme',
      '0.5 tsp cayenne pepper',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the sauce',
      '1 red pepper, sliced',
      '1 green pepper, sliced',
      '1 onion, sliced',
      '3 garlic cloves, minced',
      '120 ml chicken stock',
      '250 ml double cream',
      '50 g Parmesan, grated',
      '3 spring onions, sliced'
    ],
    st: [
      'Boil the penne in well-salted water for 1 minute less than the packet says, about 9 minutes. Save 120 ml of the water and drain.',
      'Mix the seasoning ingredients and toss the chicken strips in them until well coated.',
      'Heat 1 tablespoon of the oil in a large deep skillet over high heat and cook the chicken in two batches, 3 to 4 minutes each, until dark and cooked through. Set aside.',
      'Add the remaining oil, the peppers and onion and cook 5 minutes, then the garlic for 1 minute.',
      'Pour in the stock and scrape up the browned bits, then add the cream and simmer 4 minutes until slightly thickened.',
      'Stir in the Parmesan until melted.',
      'Add the pasta, chicken and a splash of the pasta water and toss for 2 minutes until the sauce clings.',
      'Serve topped with the spring onions.'
    ],
    tips: [
      'Sear the chicken hard. The dark crust is the flavour of the sauce.',
      'Cook the chicken in two batches so it browns instead of steaming.',
      'Use the pasta water to loosen the sauce rather than more cream.'
    ],
    pair: ['A crisp green salad', 'Garlic bread', 'A cold lager'],
    store: 'Refrigerate up to 3 days and reheat with a splash of milk or stock. Cream sauces freeze poorly.',
    nut: [664, 38, 56, 32, 4, 8, 1000]
  },

  'sheet-pan-sausage-and-peppers': {
    d: 'Italian sausages roasted on one tray with peppers, red onion and garlic until everything caramelises. Forty-five minutes.',
    meta: 'Sheet pan sausage and peppers: Italian sausages roasted with bell peppers, red onion and garlic on a hot tray until browned, with a splash of balsamic.',
    kw: ['sheet pan sausage and peppers', 'sausage and peppers', 'italian sausage and peppers in the oven', 'sheet pan sausage dinner', 'roasted sausage peppers and onions'],
    why: 'Sausages need a hot oven to brown and render their fat, and the peppers and onions need the same, since they are cooked in that fat and take on the sausage seasoning. The vegetables are cut large enough that they roast rather than turn to mush, turned once, and given a splash of balsamic at the end that brings out their sweetness. The whole trick is a large, hot tray with room on it: a crowded one makes steam, and steam gives grey sausages and wet peppers.',
    ing: [
      '600 g Italian sausages, about 6',
      '3 bell peppers, mixed colours, cut into 2 cm strips',
      '2 red onions, cut into wedges',
      '4 garlic cloves, left whole in their skins',
      '3 tbsp olive oil',
      '1 tsp dried oregano',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp balsamic vinegar',
      'A handful of basil leaves',
      'Crusty rolls, to serve'
    ],
    st: [
      'Heat the oven to 220°C / 425°F with a large rimmed baking tray inside.',
      'Toss the peppers, onions and garlic with the oil, oregano, salt and pepper.',
      'Carefully spread the vegetables over the hot tray and nestle the sausages among them.',
      'Roast 20 minutes, then turn the sausages and stir the vegetables.',
      'Roast 12 to 15 minutes more, until the sausages are browned and cooked through and the vegetables are soft and charred at the edges.',
      'Drizzle with the balsamic vinegar, squeeze the soft garlic out of its skins into the pan juices and scatter with basil.',
      'Serve in crusty rolls or on their own.'
    ],
    tips: [
      'Use a big tray and do not crowd it. Steam makes grey sausages.',
      'Leave the garlic in its skins so it turns sweet and soft instead of burning.',
      'Finish with balsamic. It brings out the sweetness of the peppers.'
    ],
    pair: ['Crusty rolls', 'Polenta', 'A light red such as Chianti'],
    store: 'Refrigerate up to 4 days and reheat at 190°C for 12 minutes. Freeze cooked sausages for 2 months.',
    nut: [458, 24, 14, 34, 3, 8, 1050]
  },

  'garlic-butter-chicken-bites': {
    d: 'Chicken breast cubes dusted in spices and cornflour, seared golden and tossed in garlic butter and lemon. Twenty minutes.',
    meta: 'Garlic butter chicken bites: cubes of chicken breast dusted with spices and cornflour, seared golden and tossed in melted garlic butter with lemon.',
    kw: ['garlic butter chicken bites', 'garlic butter chicken bites recipe', 'garlic butter chicken', 'garlic chicken bites in a skillet', 'lemon garlic chicken bites'],
    why: 'A thin dusting of cornflour is what gives cubes of chicken breast a savoury, lightly crisp crust in a few minutes and holds in the juices, while the spices on it season every piece. The garlic butter is made in the pan, after the chicken, so that it picks up the browned bits, and it is added at the end with the heat low so the garlic softens and perfumes the butter without scorching. The chicken is seared in two batches, because a crowded pan steams and the bites turn pale and rubbery.',
    ing: [
      '700 g boneless skinless chicken breasts, cut into 2.5 cm cubes',
      '1 tbsp cornflour',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tbsp vegetable oil',
      '4 tbsp unsalted butter',
      '5 garlic cloves, minced',
      '0.25 tsp chilli flakes',
      '1 tbsp lemon juice',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Pat the chicken dry and toss in a bowl with the cornflour, salt, pepper, paprika and garlic powder until lightly coated.',
      'Heat the oil in a large skillet over medium-high heat and cook the chicken in two batches for 4 to 5 minutes each, turning, until golden and cooked through. Set aside.',
      'Lower the heat to medium-low and melt the butter in the same pan. Add the garlic and chilli flakes and cook 45 seconds, until fragrant.',
      'Return the chicken to the pan and toss for 1 minute to coat.',
      'Take off the heat, stir in the lemon juice and parsley and serve at once.'
    ],
    tips: [
      'Cut the cubes the same size so they finish together.',
      'Cook in two batches. Crowding steams the chicken.',
      'Keep the heat low for the garlic. It burns in seconds and turns bitter.'
    ],
    pair: ['Steamed rice', 'Roasted broccoli', 'Mashed potatoes'],
    store: 'Refrigerate up to 3 days and reheat gently in a pan. Freeze for 2 months.',
    nut: [342, 42, 3, 18, 0, 0, 780]
  },

  'flank-steak': {
    d: 'Flank steak marinated in soy, garlic, lime and cumin, grilled hot to medium-rare and sliced thin across the grain. Two hours of marinating.',
    meta: 'Grilled flank steak: marinated in soy, garlic, lime and cumin, cooked hot and fast to medium-rare, then sliced thin against the grain.',
    kw: ['flank steak', 'flank steak recipe', 'grilled flank steak', 'marinated flank steak', 'how to cook flank steak'],
    why: 'Flank is a lean, flat, coarse-grained cut with a strong beefy flavour and a lot of tough muscle fibre, so it needs two things: a marinade whose salt and acid start to tenderise it, and a fast, very hot cook that leaves the middle rare, since a well-done flank is leather. The other half of tenderness is in the cutting. The fibres run in long, obvious lines, and slicing across them, thinly and at a slight angle, turns them into short, easy bites.',
    ing: [
      '700 g flank steak',
      '60 ml olive oil',
      '60 ml soy sauce',
      '3 tbsp lime juice',
      '3 garlic cloves, minced',
      '1 tbsp honey',
      '1 tsp ground cumin',
      '0.5 tsp black pepper',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Whisk the oil, soy sauce, lime juice, garlic, honey, cumin and pepper in a shallow dish. Add the steak, turn to coat and marinate in the fridge for at least 2 hours.',
      'Take the steak out 30 minutes before cooking and pat it dry.',
      'Heat a barbecue grill or heavy cast-iron pan to very high.',
      'Grill the steak 5 to 6 minutes a side, until well browned and 52°C / 125°F for rare or 54°C / 130°F for medium-rare.',
      'Rest on a board for 10 minutes, loosely covered.',
      'Slice thinly across the grain at a slight angle and scatter with coriander.'
    ],
    tips: [
      'Cook it hot and fast, no further than medium-rare. Well-done flank is tough.',
      'Slice across the grain. It is the difference between chewy and tender.',
      'Pat the steak dry before it goes on the grill so it browns.'
    ],
    pair: ['Chimichurri', 'Grilled corn', 'A Malbec'],
    store: 'Refrigerate up to 4 days and eat cold in salads and sandwiches. Freeze sliced steak for 3 months.',
    nut: [348, 36, 6, 20, 0, 5, 1100],
    rest: [120, 'marinating']
  },

  'slow-cooker-pulled-chicken': {
    d: 'Chicken cooked low in the slow cooker with a smoky rub until it shreds, then tossed in barbecue sauce. Four hours, and no attention.',
    meta: 'Slow cooker pulled chicken: breasts cooked with a smoky paprika rub until they shred easily, then tossed in barbecue sauce for buns or tacos.',
    kw: ['slow cooker pulled chicken', 'slow cooker pulled chicken recipe', 'crockpot pulled chicken', 'pulled chicken sandwiches', 'shredded bbq chicken'],
    why: 'Chicken breast pulls apart when it is cooked slowly until the muscle fibres separate, and the trick is to stop at that point rather than long after, when it turns to dry threads. A small amount of liquid in the pot is enough, since the chicken gives up its own juices, and the shredded meat is then returned to a little of that liquid before the sauce goes in, so it reabsorbs moisture instead of drying on the board. A spice rub, not just sauce, seasons it through.',
    ing: [
      '1.2 kg boneless skinless chicken breasts',
      '1 onion, sliced',
      '240 ml chicken stock',
      '1 tbsp light brown sugar',
      '1 tbsp smoked paprika',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp ground cumin',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '240 ml barbecue sauce',
      '1 tbsp cider vinegar',
      '8 burger buns, to serve',
      'Coleslaw and pickles, to serve'
    ],
    st: [
      'Mix the sugar, paprika, garlic powder, onion powder, cumin, salt and pepper and rub all over the chicken.',
      'Spread the onion over the base of the slow cooker and pour in the stock. Lay the chicken on top.',
      'Cover and cook on high for 4 hours or on low for 6 to 7 hours, until the chicken is completely tender and shreds easily.',
      'Lift the chicken onto a board and shred with two forks.',
      'Skim any fat from the cooking liquid and return the chicken to the slow cooker with 120 ml of the liquid, the barbecue sauce and the vinegar.',
      'Stir, cover and cook on high for 15 minutes so the chicken soaks up the sauce.',
      'Pile into buns with coleslaw and pickles.'
    ],
    tips: [
      'Shred it once it is tender, not long after. Overcooked chicken turns to dry threads.',
      'Return some of the cooking liquid to the shredded meat so it stays juicy.',
      'Add the barbecue sauce at the end. It scorches on the base of the pot.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Baked beans'],
    store: 'Refrigerate up to 4 days and reheat with a splash of stock. Freeze in portions for 3 months.',
    nut: [270, 30, 24, 6, 1, 18, 820]
  },

  'hard-boiled-eggs': {
    d: 'Eggs lowered into boiling water, timed to the minute for runny, jammy or fully set yolks, then chilled in ice water so they peel cleanly.',
    meta: 'Hard boiled eggs done right: lowered into boiling water, timed for soft, jammy or fully set yolks, then cooled in ice water so they peel cleanly.',
    kw: ['hard boiled eggs', 'how to boil eggs', 'how to make hard boiled eggs', 'perfect hard boiled eggs', 'how long to boil eggs'],
    why: 'Egg white sets at around 80°C and yolk at 65 to 70°C, so the difference between a runny yolk and a chalky one is a matter of minutes, which is why the eggs go into water that is already boiling: it starts the clock at a known moment. The ice bath matters for two reasons. It stops the cooking, and so prevents the grey-green ring around an overcooked yolk, and it shrinks the egg away from the shell a little so it peels cleanly. Eggs that are a week or two old peel more easily than very fresh ones.',
    ing: [
      '6 large eggs, straight from the fridge',
      '2 litres water',
      '1 tsp fine sea salt',
      'A large bowl of ice water'
    ],
    st: [
      'Bring the water and salt to a rolling boil in a large saucepan.',
      'Lower the eggs in gently, one at a time, with a spoon and set a timer.',
      'Turn the heat down to a steady, gentle boil and cook for 6 minutes for runny yolks, 7 for jammy, 9 for medium or 11 to 12 for fully set.',
      'Meanwhile fill a bowl with ice and cold water.',
      'Lift the eggs straight into the ice bath with a slotted spoon and leave for 5 minutes.',
      'Tap each egg all over on the counter, roll it gently and peel under a trickle of cold water, starting at the wide end.'
    ],
    tips: [
      'Put the eggs into water that is already boiling so the timing is accurate.',
      'Do not skip the ice bath. It stops the cooking and helps the peel.',
      'Use eggs a week or two old. Very fresh ones cling to the shell.'
    ],
    pair: ['Avocado toast', 'Egg mayonnaise sandwiches', 'A green salad'],
    store: 'Refrigerate unpeeled up to 7 days, or peeled up to 3 days in a covered container. Do not freeze whole eggs.',
    nut: [73, 6, 1, 5, 0, 0, 65]
  }
};
