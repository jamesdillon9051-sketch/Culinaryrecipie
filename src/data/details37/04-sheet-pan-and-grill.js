'use strict';

/**
 * Volume thirty-seven — the sheet pan and the grill.
 *
 * A hot tray in a hot oven and a hot grill are the two quickest ways to a
 * browned dinner, and these are the dishes people look up for them. Times are
 * the recipe's own; ovens and grills differ, so each method says when to check
 * early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'sheet-pan-chicken-and-potatoes': {
    d: 'Chicken thighs and potato chunks roasted on one tray with paprika and garlic until golden. Four servings in 55 minutes.',
    meta: 'Sheet pan chicken and potatoes: thighs and potato chunks roasted together with paprika and garlic until golden. Four servings in 55 minutes.',
    kw: ['sheet pan chicken and potatoes', 'sheet pan chicken thighs and potatoes', 'one tray chicken and potatoes', 'easy sheet pan dinner', 'roast chicken and potatoes on a tray'],
    why: 'One tray, one oven, one wash: that is what makes a sheet pan dinner worth making on a weeknight. The chicken fat runs down over the potatoes as it renders, so they cook in it and come out crisp and savoury.\n\nThe trick is to give the potatoes a head start. They take longer than the chicken, so cut them to 3 cm and put them on the hot tray for 15 minutes before the thighs go on. **If everything goes in together, either the chicken dries out or the potatoes stay hard.**\n\nPat the chicken dry and season it under and over the skin. Dry skin crisps; wet skin steams and turns rubbery. Skin side up, on top of the potatoes, lets the fat baste them.\n\nDo not crowd the tray. Pieces that touch steam instead of roasting, and a second tray costs nothing. If your oven runs hot, check the chicken at 35 minutes: the juices should run clear and a thermometer should read 75°C.',
    ing: [
      '800 g potatoes, cut into 3 cm chunks',
      '3 tbsp vegetable oil',
      '8 bone-in chicken thighs, about 1 kg',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside. Toss the potatoes with 2 tablespoons of the oil and half the salt, tip onto the hot tray and roast for 15 minutes.',
      'Pat the chicken dry and rub with the remaining oil, the paprika, garlic powder, the remaining salt and the pepper.',
      'Turn the potatoes, nestle the chicken skin side up among them and roast for 40 minutes, until the skin is golden and the juices run clear.',
      'Squeeze over the lemon, scatter with the parsley and serve straight from the tray.'
    ],
    tips: [
      'Give the potatoes a head start on the hot tray.',
      'Dry the chicken skin thoroughly before seasoning.',
      'Use two trays rather than crowding one.',
      'Check the chicken at 35 minutes if your oven runs hot.'
    ],
    pair: ['Green beans', 'Side salad', 'Gravy', 'Garlic yogurt'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 15 minutes to crisp the potatoes.',
    nut: [773, 46, 37, 49, 5, 2, 1110]
  },

  'sheet-pan-sausage-and-vegetables': {
    d: 'Pork sausages roasted on one tray with peppers, red onion, courgette and potatoes until browned. Four servings in 45 minutes.',
    meta: 'Sheet pan sausage and vegetables: sausages roasted with peppers, onion, courgette and potatoes on one tray. Four servings in 45 minutes.',
    kw: ['sheet pan sausage and vegetables', 'sausage and vegetable traybake', 'one tray sausage dinner', 'easy sausage sheet pan', 'roasted sausages and vegetables'],
    why: 'It is a dinner assembled in the time it takes the oven to heat. The sausages brown and flavour the vegetables as they roast, and the vegetables go sweet and soft at the edges.\n\nCut everything to the same size, about 3 cm, so it finishes together. Potatoes are the slow ingredient, so cut them a little smaller than the rest, or give them 10 minutes alone in the oven first. Courgette goes in later, because it turns to mush in a full 35 minutes.\n\nToss the vegetables with oil, salt and a spoon of mustard before they go on the tray. **Leave space between the pieces.** A crowded tray makes steam, and steam makes grey vegetables; a hot tray and a little room make caramelised ones.\n\nTurn the sausages and stir the vegetables once, halfway. If your oven runs hot, check at 25 minutes. The sausages are done when they are browned all over and the juices run clear.',
    ing: [
      '8 pork sausages, about 450 g',
      '500 g potatoes, cut into 2.5 cm chunks',
      '2 red peppers, cut into chunks',
      '1 red onion, cut into wedges',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '1 tbsp wholegrain mustard',
      '1 tsp dried thyme',
      '2 courgettes, cut into chunks'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside. Toss the potatoes, peppers and onion with the oil, salt, mustard and thyme.',
      'Tip onto the hot tray, add the sausages and roast for 15 minutes.',
      'Turn the sausages, stir the vegetables and add the courgettes. Roast for 20 minutes more, until the sausages are browned and the vegetables are tender with dark edges.'
    ],
    tips: [
      'Cut the potatoes a little smaller than the other vegetables.',
      'Add the courgettes later so they do not collapse.',
      'Do not crowd the tray.',
      'Cut a sausage open to check it is cooked.'
    ],
    pair: ['Mustard', 'Crusty bread', 'Green salad', 'Gravy'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 12 minutes.',
    nut: [562, 20, 35, 38, 7, 9, 1580]
  },

  'sheet-pan-fajitas': {
    d: 'Strips of chicken, peppers and onion roasted on one tray with fajita spices, then wrapped in warm tortillas. Four servings in 40 minutes.',
    meta: 'Sheet pan fajitas: chicken, peppers and onion roasted on one tray with fajita spices, then wrapped in tortillas. Four servings in 40 minutes.',
    kw: ['sheet pan fajitas', 'chicken fajitas on a tray', 'oven fajitas', 'easy sheet pan chicken fajitas', 'one tray fajitas'],
    why: 'Restaurant fajitas arrive sizzling because they are cooked at a very high heat. A hot oven and a tray with space gives the same char with none of the smoke and no pan to scrub.\n\nCut the chicken, peppers and onion into strips of a similar width, about 1.5 cm, so they cook at the same speed. Toss them with oil and the spices, and make sure every piece is coated. **A dry spice mix on dry meat burns**, so the oil is not optional.\n\nSpread the strips on the tray in a single layer. If they pile up, they steam. Use two trays if one cannot hold them with gaps between.\n\nRoast at 230°C for 20 minutes, stirring once. The chicken should be cooked through, and the peppers and onions should have dark, sweet edges. Squeeze lime over the tray at the end and serve straight away with warm tortillas, soured cream and salsa. Everything is eaten by hand.',
    ing: [
      '600 g chicken breast, cut into strips',
      '3 peppers, mixed colours, cut into strips',
      '2 onions, cut into strips',
      '3 tbsp vegetable oil',
      '2 tsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '8 small flour tortillas',
      '2 limes, juiced',
      '100 g soured cream'
    ],
    st: [
      'Heat the oven to 230°C (210°C fan) with two large trays inside.',
      'Toss the chicken, peppers and onions with the oil, chili powder, cumin, paprika, garlic powder and salt.',
      'Spread on the hot trays in a single layer and roast for 20 minutes, stirring once, until the chicken is cooked through and the vegetables are charred at the edges.',
      'Squeeze over the lime juice. Warm the tortillas and serve with the soured cream.'
    ],
    tips: [
      'Cut the strips to the same width.',
      'Use two trays so the strips roast and do not steam.',
      'Coat everything in oil before the spices go on.',
      'Check the chicken at 15 minutes if your oven runs hot.'
    ],
    pair: ['Guacamole', 'Salsa', 'Rice', 'Refried beans'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a hot frying pan for 4 minutes.',
    nut: [622, 43, 54, 26, 7, 11, 1180]
  },

  'sheet-pan-nachos': {
    d: 'Tortilla chips layered with beans, cheese and jalapeños on a tray and baked until bubbling. Four servings in 22 minutes.',
    meta: 'Sheet pan nachos: tortilla chips layered with beans, cheese and jalapeños on a tray and baked until bubbling. Four servings in 22 minutes.',
    kw: ['sheet pan nachos', 'loaded nachos on a tray', 'oven nachos', 'easy nachos with cheese and beans', 'tray nachos'],
    why: 'The mistake with nachos is a heap, because a heap leaves the chips at the bottom bare and soggy and the ones on top burnt. The tray solves it: a thin, even layer, so every chip is covered and every chip is crisp.\n\nBuild it in two layers rather than one. Spread half the chips, scatter half the beans and cheese, then repeat. **The second layer of cheese is the one that holds the whole tray together.**\n\nUse a good melting cheese, grated yourself. Pre-grated cheese carries an anti-caking powder that stops it from melting smoothly. A mix of cheddar and a milder, stretchier cheese melts well and keeps its flavour.\n\nBake at 200°C for 8 minutes, until the cheese bubbles at the edges and just begins to brown. Watch the last two minutes; thin chips burn quickly. Top with the cold things after baking: soured cream, salsa, fresh coriander and lime.',
    ing: [
      '250 g tortilla chips',
      '400 g refried beans',
      '200 g grated cheddar',
      '60 g sliced jalapeños from a jar',
      '2 spring onions, sliced',
      '100 g salsa',
      '100 g soured cream',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Spread half the chips on a large lined tray.',
      'Dot with half the beans, then scatter with half the cheese and half the jalapeños. Add the rest of the chips, beans, cheese and jalapeños.',
      'Bake for 8 minutes until the cheese is bubbling and just browning at the edges.',
      'Top with the spring onions, salsa, soured cream and coriander and serve straight from the tray.'
    ],
    tips: [
      'Build the nachos in two layers.',
      'Grate the cheese yourself for a smoother melt.',
      'Add the cold toppings after baking.',
      'Check at 6 minutes if your oven runs hot.'
    ],
    pair: ['Guacamole', 'Lime wedges', 'Cold drinks', 'Pickled onions'],
    store: 'Best eaten straight away. The chips soften within about 15 minutes.',
    nut: [678, 24, 60, 38, 9, 5, 1220]
  },

  'sheet-pan-pancakes': {
    d: 'A thin pancake batter baked on a tray with blueberries and cut into squares. Eight servings in 30 minutes, with no flipping.',
    meta: 'Sheet pan pancakes: pancake batter baked on a tray with blueberries and cut into squares. Eight servings in 30 minutes, with no flipping.',
    kw: ['sheet pan pancakes', 'oven baked pancakes', 'pancakes on a tray', 'easy pancakes for a crowd', 'blueberry sheet pan pancakes'],
    why: 'Making pancakes for eight people one at a time means the cook eats last, and the first ones are cold by the time the last come off the pan. A tray changes that: one batch of batter, one oven, everyone eats together.\n\nThe batter is an ordinary pancake batter, a little thicker than usual so it does not run to the corners. Stir it only until the flour disappears, since a few lumps make tender pancakes and a smooth, well-beaten batter makes tough ones.\n\nPour it onto a greased, lined tray, scatter over the blueberries and press them in lightly. **Do not skip the lining.** A tray of baked batter sticks fiercely, and baking paper lifts out the whole slab in one piece.\n\nBake at 200°C for 15 minutes, until the top is golden and a skewer comes out clean. If your oven runs hot, check at 12 minutes. Cut into squares and serve with butter and syrup. The texture is more like a soft cake than a fried pancake, which many people prefer.',
    ing: [
      '300 g plain flour',
      '2 tbsp sugar',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '450 ml milk',
      '60 g butter, melted',
      '150 g blueberries',
      '4 tbsp maple syrup'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Line a 25 x 35 cm tray with baking paper and grease it.',
      'Mix the flour, sugar, baking powder and salt. Whisk the eggs, milk and melted butter and pour into the dry mix, stirring until just combined.',
      'Pour the batter onto the tray and scatter with the blueberries, pressing them in lightly.',
      'Bake for 15 minutes until golden and a skewer comes out clean. Cut into 8 squares and serve with the syrup.'
    ],
    tips: [
      'Line the tray so the slab lifts out.',
      'Do not overmix the batter.',
      'Check at 12 minutes if your oven runs hot.',
      'Use frozen blueberries straight from the freezer.'
    ],
    pair: ['Bacon', 'Fresh fruit', 'Greek yogurt', 'Scrambled eggs'],
    store: 'Keeps in the fridge for up to 3 days. Squares freeze for up to 2 months and reheat in a toaster.',
    nut: [294, 7, 44, 10, 2, 14, 390]
  },

  'sheet-pan-meatballs': {
    d: 'Beef and pork meatballs roasted on a tray with cherry tomatoes and garlic until browned and juicy. Four servings in 40 minutes.',
    meta: 'Sheet pan meatballs: beef and pork meatballs roasted with cherry tomatoes and garlic until browned. Four servings in 40 minutes, with no frying.',
    kw: ['sheet pan meatballs', 'oven baked meatballs', 'meatballs on a tray', 'easy baked meatballs', 'roasted meatballs and tomatoes'],
    why: 'Frying meatballs means standing at the hob, turning them one by one and watching them roll into each other. Roasted on a tray they all brown at once, they hold their shape and the pan needs no attention.\n\nA moist mixture is what keeps them tender. Soak breadcrumbs in milk first, so the meat has something to hold onto as it cooks, and mix just until combined. A firm squeeze in the hand makes a dense meatball, and a loose, light roll makes a tender one. **Wet your hands** so the meat does not stick.\n\nMake them the size of a golf ball, all the same. Large ones stay raw in the middle when small ones are done.\n\nRoast at 220°C for 20 minutes on a hot tray, with the cherry tomatoes alongside. The tomatoes burst and make a loose, sweet sauce that the meatballs finish in. If your oven runs hot, check at 15 minutes. Serve over pasta or in rolls.',
    ing: [
      '400 g beef mince',
      '200 g pork mince',
      '50 g dried breadcrumbs',
      '60 ml milk',
      '1 egg',
      '2 garlic cloves, grated',
      '40 g grated parmesan',
      '1 tsp dried oregano',
      '1 tsp salt',
      '300 g cherry tomatoes',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside. Soak the breadcrumbs in the milk for 5 minutes.',
      'Mix with the beef, pork, egg, garlic, parmesan, oregano and salt until just combined. Shape into 20 balls with wet hands.',
      'Put the meatballs and tomatoes on the hot tray, drizzle with the oil and roast for 20 minutes, turning once, until browned and cooked through.',
      'Rest for 3 minutes and spoon the burst tomatoes over the meatballs.'
    ],
    tips: [
      'Wet your hands to shape the meatballs.',
      'Make them all the same size.',
      'Check at 15 minutes if your oven runs hot.',
      'Cut one open to check it is cooked through.'
    ],
    pair: ['Spaghetti', 'Crusty rolls', 'Green salad', 'Garlic bread'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 12 minutes. The meatballs freeze for up to 3 months.',
    nut: [484, 36, 13, 32, 2, 4, 950]
  },

  'sheet-pan-gnocchi': {
    d: 'Shop-bought gnocchi roasted on a tray with sausage, peppers and cherry tomatoes until crisp at the edges. Four servings in 35 minutes.',
    meta: 'Sheet pan gnocchi: shop-bought gnocchi roasted with sausage, peppers and cherry tomatoes until crisp at the edges. Four servings in 35 minutes.',
    kw: ['sheet pan gnocchi', 'roasted gnocchi', 'crispy gnocchi and sausage', 'easy gnocchi dinner on a tray', 'one tray gnocchi'],
    why: 'Gnocchi straight from the packet are soft and pale, and a tray in a hot oven gives them something they never get from a pan of water: a crisp, golden outside and a pillowy middle.\n\nThe gnocchi go in dry and from the packet. **Do not boil them first.** Roasted in oil, they cook through in the steam of their own surface moisture, and boiling would make them wet and soft before they ever touch the tray.\n\nToss them with oil and spread them over a very hot tray. Give them room, since crowded gnocchi steam and stick. A tray large enough to leave small gaps between each piece is the whole requirement.\n\nSausage, peppers and tomatoes roast alongside and make their own sauce. Squeeze the sausage out of the skins in chunks, so it browns on all sides. Stir once during the cooking, and expect to see the edges dark and crisp at 25 minutes. A grating of parmesan and a handful of basil finish it.',
    ing: [
      '500 g potato gnocchi',
      '3 tbsp olive oil',
      '4 pork sausages, about 230 g, skins removed',
      '2 red peppers, cut into chunks',
      '1 red onion, cut into wedges',
      '250 g cherry tomatoes',
      '3 garlic cloves, sliced',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '40 g grated parmesan'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside.',
      'Toss the gnocchi, peppers, onion, tomatoes, garlic, oregano and salt with the oil. Tear the sausage into chunks and add.',
      'Tip onto the hot tray in a single layer and roast for 25 minutes, stirring once, until the gnocchi are crisp and the sausage is browned.',
      'Scatter with the parmesan and serve straight from the tray.'
    ],
    tips: [
      'Do not boil the gnocchi first.',
      'Use a large tray so they sit in a single layer.',
      'Stir once only; constant stirring stops them crisping.',
      'Check at 20 minutes if your oven runs hot.'
    ],
    pair: ['Green salad', 'Basil leaves', 'Garlic bread', 'Chili flakes'],
    store: 'Best eaten straight away. Keeps in the fridge for up to 2 days; reheat in a hot frying pan.',
    nut: [536, 18, 53, 28, 6, 8, 1410]
  },

  'sheet-pan-pizza': {
    d: 'A yeast dough pressed into a tray, topped with tomato sauce and mozzarella and baked until crisp underneath. Six servings in 40 minutes plus proving.',
    meta: 'Sheet pan pizza: a yeast dough pressed into a tray, topped with tomato sauce and mozzarella and baked until crisp underneath. Six servings.',
    kw: ['sheet pan pizza', 'pizza on a tray', 'homemade tray pizza', 'thick crust pizza for a crowd', 'pizza dough for a baking tray'],
    why: 'A pizza from a tray is the easiest way to feed a family, because there is no stretching or peeling, and the crust comes out thick, crisp underneath and soft inside. It is more like focaccia than the thin base of a pizzeria.\n\nThe dough is simple: flour, yeast, salt, oil and warm water, mixed and kneaded for 8 minutes, then left to rise until doubled. **The tray should be well oiled**, with plenty of oil under the dough. This fries the base as it bakes and gives it the crunch.\n\nPress the dough into the corners with oiled fingertips. If it springs back, rest it for 5 minutes and try again; the gluten needs a moment to relax.\n\nSauce goes on thinly, cheese goes to the edges and toppings stay light. A hot oven, 230°C, on the lowest shelf cooks the base through before the top burns. If your oven runs hot, check at 15 minutes. Slide the pizza out onto a board and cut into squares.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1 1/2 tsp salt',
      '4 tbsp olive oil',
      '320 ml warm water',
      '200 g tomato pasta sauce',
      '1 tsp dried oregano',
      '250 g grated mozzarella',
      '60 g sliced pepperoni'
    ],
    st: [
      'Mix the flour, yeast and salt, then add 2 tablespoons of the oil and the water and mix to a dough. Knead for 8 minutes. Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Oil a 25 x 35 cm tray with the remaining oil. Press the dough into the tray and cover for 15 minutes. Heat the oven to 230°C (210°C fan).',
      'Spread with the sauce and oregano, then scatter with the mozzarella and pepperoni.',
      'Bake on the lowest shelf for 20 minutes until the base is crisp and the cheese is golden. Cut into squares and serve.'
    ],
    tips: [
      'Oil the tray generously for a crisp base.',
      'Rest the dough if it springs back when pressed.',
      'Bake on the lowest shelf.',
      'Check at 15 minutes if your oven runs hot.'
    ],
    pair: ['Green salad', 'Garlic dip', 'Cold drinks', 'Olives'],
    store: 'Keeps in the fridge for up to 3 days. Reheat slices at 200°C for 8 minutes.',
    rest: [60, 'proving'],
    nut: [490, 20, 44, 26, 3, 6, 1430]
  },

  'grilled-salmon': {
    d: 'Salmon fillets brushed with oil and grilled skin side down until the flesh flakes, served with lemon. Four servings in 17 minutes.',
    meta: 'Grilled salmon: salmon fillets brushed with oil and grilled skin side down for 10 minutes until they flake, with lemon. Four servings in 17 minutes.',
    kw: ['grilled salmon', 'grilled salmon fillets', 'salmon on the grill', 'easy grilled salmon', 'quick grilled salmon with lemon'],
    why: 'Salmon is forgiving and quick, and a hot grill suits it. The trick is to cook it mostly from one side, with the skin down, so the skin crisps and the flesh above steams in the heat that comes through it.\n\nTake the fillets out of the fridge 15 minutes before cooking, and pat them dry. Brush the skin with oil and season generously with salt and pepper. A dry, oiled skin crisps and does not stick to the rack.\n\nHeat the grill, or the barbecue, to high first. **Lay the fillets skin side down and leave them alone.** Turning salmon early makes it break up. For fillets about 3 cm thick, 10 minutes is usual. If your grill runs hot, check at 7 minutes.\n\nThe flesh should turn from translucent to opaque, and flake when pressed. A little translucent in the very centre is fine, and it carries on cooking as it rests. Serve with lemon wedges and a spoon of herb butter.',
    ing: [
      '4 salmon fillets, skin on, about 150 g each',
      '2 tbsp vegetable oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '30 g butter',
      '2 tbsp chopped parsley',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Take the salmon out of the fridge 15 minutes before cooking and heat the grill to high.',
      'Pat the fillets dry, brush the skin with the oil and season with the salt and pepper.',
      'Grill skin side down for 10 minutes without turning, until the flesh flakes and the skin is crisp.',
      'Mash the butter with the parsley, top each fillet with a little and serve with the lemon.'
    ],
    tips: [
      'Pat the fillets dry so the skin crisps.',
      'Leave the fish undisturbed while it cooks.',
      'Check at 7 minutes if your grill runs hot.',
      'Rest for 2 minutes before serving.'
    ],
    pair: ['New potatoes', 'Asparagus', 'Green salad', 'Lemon rice'],
    store: 'Keeps in the fridge for up to 2 days. Eat it cold in salads rather than reheating, which dries it out.',
    nut: [425, 30, 2, 33, 1, 0, 660]
  },

  'grilled-chicken-breast': {
    d: 'Chicken breasts flattened to an even thickness, marinated briefly and grilled until just cooked through. Four servings in 20 minutes.',
    meta: 'Grilled chicken breast: breasts flattened to an even thickness, marinated briefly and grilled for 14 minutes until juicy. Four servings in 20 minutes.',
    kw: ['grilled chicken breast', 'juicy grilled chicken', 'chicken breast on the grill', 'easy grilled chicken', 'grilled chicken breast marinade'],
    why: 'Chicken breast dries out because it is thick at one end and thin at the other, so by the time the thick end is cooked, the thin end is leather. Flattening it to an even thickness cures that.\n\nPlace each breast between sheets of baking paper and bash it with a rolling pin until it is about 2 cm thick all over. It takes a minute and halves the cooking time. Marinate for 15 minutes in oil, lemon, garlic and paprika, since the acid starts to break down the surface and the oil carries the flavour.\n\n**Do not marinate for more than an hour**; the lemon turns the surface of the meat chalky.\n\nHeat the grill or barbecue until hot, and oil the rack. Cook for 6 or 7 minutes per side, turning once, until the juices run clear and a thermometer reads 75°C. If your grill runs hot, check at 5 minutes. Rest the chicken for 5 minutes before slicing. It is useful cold, too, in salads and sandwiches.',
    ing: [
      '4 chicken breasts, about 600 g',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '2 garlic cloves, grated',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Flatten each breast between sheets of baking paper to about 2 cm thick. Mix the oil, lemon juice, garlic, paprika, salt and pepper, add the chicken and leave for 15 minutes.',
      'Heat the grill to high and oil the rack.',
      'Grill the chicken for 7 minutes per side, turning once, until cooked through and marked with brown.',
      'Rest for 5 minutes before slicing.'
    ],
    tips: [
      'Flatten the breasts for even cooking.',
      'Do not marinate for longer than an hour.',
      'Use a thermometer; 75°C means done.',
      'Rest the meat before cutting.'
    ],
    pair: ['Rice', 'Green salad', 'Roasted vegetables', 'Garlic yogurt'],
    store: 'Keeps in the fridge for up to 3 days. Slice it cold into salads and sandwiches.',
    nut: [270, 34, 2, 14, 0, 0, 660]
  },

  'grilled-steak': {
    d: 'Two thick sirloin steaks seasoned with salt and grilled for 4 minutes a side, then rested. Two servings in 15 minutes.',
    meta: 'Grilled steak: two thick sirloin steaks seasoned with salt and grilled for 4 minutes a side, then rested. Two servings in 15 minutes.',
    kw: ['grilled steak', 'how to grill a steak', 'grilled sirloin steak', 'easy grilled steak', 'steak on the barbecue'],
    why: 'A steak needs three things: dry meat, salt and a very hot grill. Everything else is detail.\n\nPat the steaks dry with kitchen paper and season them generously on both sides, ideally 30 minutes before cooking. Salt draws moisture to the surface and then pulls it back in, which seasons the steak deeply and gives a dry surface that browns. **Take them out of the fridge for 20 minutes** first, so the middle is not ice cold when the outside is done.\n\nHeat the grill or barbecue until it is as hot as it goes, and oil the rack. Lay the steaks on and leave them alone for 4 minutes. Turn once, and cook for 4 minutes more for medium. If your grill runs hot, check at 3 minutes.\n\nA thermometer reads 54°C for medium rare and 60°C for medium. Rest the steaks for 5 minutes, loosely covered, and slice across the grain. The juices that run out are worth pouring over.',
    ing: [
      '2 sirloin steaks, about 250 g each',
      '1 tbsp vegetable oil',
      '1 1/2 tsp salt',
      '1/2 tsp black pepper',
      '20 g butter',
      '2 sprigs thyme'
    ],
    st: [
      'Take the steaks out of the fridge 20 minutes before cooking. Pat dry, rub with the oil and season on both sides with the salt and pepper. Heat the grill to its highest setting.',
      'Grill the steaks for 4 minutes without moving them. Turn and grill for 4 minutes more for medium.',
      'Top each with half the butter and a sprig of thyme and rest for 5 minutes, loosely covered.',
      'Slice across the grain and pour over the resting juices.'
    ],
    tips: [
      'Dry the steaks and season them well.',
      'Let them come up to room temperature first.',
      'Do not press or move them while they cook.',
      'Rest before slicing.'
    ],
    pair: ['Chips', 'Green salad', 'Grilled tomatoes', 'Mushrooms'],
    store: 'Best eaten straight away. Leftovers keep in the fridge for up to 2 days and are good cold in a sandwich.',
    nut: [531, 53, 1, 35, 1, 0, 1910]
  },

  'grilled-pork-chops': {
    d: 'Pork loin chops brined briefly, oiled and grilled for 7 minutes a side until just cooked through. Four servings in 24 minutes.',
    meta: 'Grilled pork chops: loin chops brined briefly and grilled for 7 minutes a side until just cooked through and juicy. Four servings in 24 minutes.',
    kw: ['grilled pork chops', 'juicy grilled pork chops', 'pork chops on the grill', 'easy grilled pork chops', 'barbecue pork chops'],
    why: 'Pork chops are lean, and a lean cut cooked too long goes dry and tough in minutes. Two things prevent it: a short brine, and taking them off the heat on time.\n\nA brine of water, salt and a little sugar, left for 30 minutes, makes the meat hold on to its juices as it cooks. It also seasons the meat all the way through. Dissolve 2 tablespoons of salt in a litre of water, put the chops in, and leave them on the side. **Rinse and pat them very dry afterwards**, or they steam instead of browning.\n\nChoose chops about 2.5 cm thick, with the bone in if you can. The bone slows the cooking at the edge and keeps the meat juicy.\n\nGrill on a hot, oiled rack for 7 minutes per side. A thermometer should read 63°C. If your grill runs hot, check at 5 minutes. They will carry on cooking as they rest, so take them off a degree or two early. Rest for 5 minutes before serving.',
    ing: [
      '4 pork loin chops, about 200 g each',
      '1 litre water',
      '2 tbsp salt',
      '1 tbsp sugar',
      '2 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1/2 tsp black pepper'
    ],
    st: [
      'Stir the salt and sugar into the water until dissolved. Add the chops and leave for 30 minutes. Lift out, rinse and pat very dry.',
      'Heat the grill to high and oil the rack. Rub the chops with the oil, paprika and pepper.',
      'Grill for 7 minutes per side, turning once, until cooked through and marked with brown.',
      'Rest for 5 minutes before serving.'
    ],
    tips: [
      'Brine briefly, then dry thoroughly.',
      'Take the chops off the heat a little early.',
      'Use a thermometer; 63°C is cooked through.',
      'Check at 5 minutes if your grill runs hot.'
    ],
    pair: ['Apple sauce', 'Roast potatoes', 'Green beans', 'Coleslaw'],
    store: 'Keeps in the fridge for up to 3 days. Eat cold or reheat gently in a covered pan.',
    nut: [337, 42, 4, 17, 0, 3, 3650]
  },

  'grilled-sausages': {
    d: 'Pork sausages grilled under medium heat for 15 minutes, turned often, until browned all over. Four servings in 17 minutes.',
    meta: 'Grilled sausages: pork sausages grilled under medium heat for 15 minutes, turned often, until browned all over. Four servings in 17 minutes.',
    kw: ['grilled sausages', 'sausages under the grill', 'how to grill sausages', 'easy grilled sausages', 'grilled pork sausages'],
    why: 'Sausages grill best slowly. A high heat browns the outside before the middle is cooked, and the skins split and spit fat. A medium grill and a little patience give an even brown and a cooked centre.\n\nHeat the grill to medium and lay the sausages on the rack, with the tray underneath to catch the fat. **Do not prick them.** A gentle grill does not burst the skins, and pricking only lets the juices escape and leaves a dry sausage.\n\nTurn them every 3 or 4 minutes. This is the part that makes the difference, since it keeps the colour even and the skins from catching on one side. Fifteen minutes is typical for a thick pork sausage. If your grill runs hot, check at 12 minutes.\n\nA sausage is cooked when it is firm to the touch, evenly brown and the juices run clear with no pink in the middle. Cut one open if unsure. Serve with onion gravy or in a buttered roll.',
    ing: [
      '8 pork sausages, about 450 g',
      '4 bread rolls',
      '30 g butter',
      '4 tsp mustard'
    ],
    st: [
      'Heat the grill to medium and line the tray with foil.',
      'Lay the sausages on the rack, not touching.',
      'Grill for 15 minutes, turning every 3 or 4 minutes, until browned all over and cooked through.',
      'Split and butter the rolls, fill with the sausages and mustard and serve.'
    ],
    tips: [
      'Use a medium heat so the skins do not split.',
      'Do not prick the sausages.',
      'Turn them often for an even colour.',
      'Cut one open to check it is cooked.'
    ],
    pair: ['Mashed potato', 'Onion gravy', 'Baked beans', 'Fried onions'],
    store: 'Keeps in the fridge for up to 3 days. Reheat under the grill for 5 minutes.',
    nut: [450, 18, 18, 34, 2, 3, 1100]
  },

  'grilled-lamb-chops': {
    d: 'Lamb loin chops rubbed with garlic, rosemary and oil and grilled for 5 minutes a side. Four servings in 25 minutes plus marinating.',
    meta: 'Grilled lamb chops: lamb chops rubbed with garlic, rosemary and oil and grilled for 5 minutes a side until pink in the middle. Four servings.',
    kw: ['grilled lamb chops', 'lamb chops on the barbecue', 'barbecue lamb chops', 'easy grilled lamb chops', 'lamb chops with rosemary'],
    why: 'Lamb chops are made for the grill: they have plenty of fat, which bastes the meat, and a short cooking time that suits a hot, quick fire. The skill is knowing when to stop.\n\nMarinate them in oil, garlic and rosemary for at least 30 minutes, or overnight in the fridge. The fat carries the flavours into the meat, and the herbs scorch slightly on the grill, giving a smoky, resinous note. **Pat the chops dry before they go on** the heat, or they steam.\n\nGrill over high heat, 5 minutes per side for chops about 3 cm thick, which gives a medium result with a pink middle. If your grill runs hot, check at 4 minutes. A thermometer reads 57°C for medium.\n\nThe fat around the edge should be crisp and golden. Hold each chop on its edge with tongs for the last minute to render and brown it. Rest for 5 minutes. Serve with a squeeze of lemon and, if you like, a spoon of mint sauce.',
    ing: [
      '900 g lamb loin chops (8 chops)',
      '3 tbsp olive oil',
      '3 garlic cloves, grated',
      '2 tbsp chopped rosemary',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the oil, garlic, rosemary, salt and pepper, coat the chops and leave for at least 30 minutes.',
      'Heat the grill to high. Pat the chops dry.',
      'Grill for 5 minutes per side, then stand them on their fat edges for 1 minute to crisp.',
      'Rest for 5 minutes and serve with the lemon.'
    ],
    tips: [
      'Marinate for at least 30 minutes.',
      'Pat the chops dry before cooking.',
      'Crisp the fat edge at the end.',
      'Check at 4 minutes if your grill runs hot.'
    ],
    pair: ['Roast potatoes', 'Mint sauce', 'Greek salad', 'Couscous'],
    store: 'Keeps in the fridge for up to 2 days. Good cold in sandwiches.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'grilled-burgers': {
    d: 'Beef patties seasoned with salt and pepper, shaped with a dimple and grilled for 5 minutes a side. Four servings in 27 minutes.',
    meta: 'Grilled burgers: beef patties shaped with a dimple and grilled for 5 minutes a side, in toasted buns with cheese. Four servings in 27 minutes.',
    kw: ['grilled burgers', 'homemade burgers on the grill', 'beef burgers on the barbecue', 'easy grilled burgers', 'juicy burgers'],
    why: 'A good burger is beef, salt and a little care. The care is in what you do not do: do not overwork the meat, do not press it on the grill and do not cook it past done.\n\nUse mince with about 20 per cent fat. Lean mince makes dry burgers, since the fat is what keeps them moist as it renders. Shape the patties gently, handling them as little as possible, into rounds a little wider than the buns, because they shrink. Press a shallow dimple into the middle with your thumb. **The dimple stops the burger puffing into a ball** as the edges contract.\n\nSalt the outside only, just before they go on the grill. Salt mixed through the meat makes the texture firm and sausage-like.\n\nGrill over high heat for 5 minutes per side without pressing. Add cheese for the last minute and cover to melt. Toast the buns on the grill for the last 30 seconds. Rest the burgers for 2 minutes before building.',
    ing: [
      '600 g beef mince, 20 per cent fat',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 slices cheddar',
      '4 burger buns',
      '1 tomato, sliced',
      '4 lettuce leaves',
      '4 tbsp mayonnaise',
      '2 tbsp tomato ketchup'
    ],
    st: [
      'Divide the mince into 4 and shape into patties a little wider than the buns, pressing a shallow dimple into each centre. Chill for 10 minutes. Heat the grill to high.',
      'Season the outsides with the salt and pepper. Grill for 5 minutes per side without pressing, adding the cheese for the last minute.',
      'Toast the buns cut side down for 30 seconds.',
      'Spread the buns with the mayonnaise and ketchup, add the lettuce, tomato and burgers and serve.'
    ],
    tips: [
      'Handle the meat as little as possible.',
      'Salt the outside just before cooking.',
      'Do not press the burgers on the grill.',
      'Rest them for 2 minutes before building.'
    ],
    pair: ['Chips', 'Coleslaw', 'Onion rings', 'Pickles'],
    store: 'Best eaten straight away. Raw patties keep in the fridge for 1 day or freeze for up to 3 months.',
    nut: [685, 41, 29, 45, 2, 6, 1290]
  },

  'grilled-hot-dogs': {
    d: 'Frankfurters grilled for 8 minutes until blistered, served in toasted buns with onion and mustard. Four servings in 10 minutes.',
    meta: 'Grilled hot dogs: frankfurters grilled for 8 minutes until blistered, served in toasted buns with fried onion and mustard. Four servings in 10 minutes.',
    kw: ['grilled hot dogs', 'hot dogs on the grill', 'barbecue hot dogs', 'easy grilled hot dogs', 'hot dogs with onions'],
    why: 'A hot dog is already cooked, so the grill only warms it through and puts colour on the skin, which is what makes it taste like something from a barbecue.\n\nScore each frankfurter with shallow cuts about 1 cm apart, in a spiral or in a few slashes. The cuts let the fat bubble out, stop the skin splitting at random and give more surface to brown. Heat the grill to medium-high and turn the dogs every minute or so. **Do not leave them unattended.** The fat flares when it drips.\n\nEight minutes gives a blistered, evenly browned skin. If your grill runs hot, check at 5 minutes.\n\nToast the buns on the cooler edge of the grill for the last minute, cut side down, so they warm and catch a little colour. A cold, soft bun is the usual let-down. Fried onions are a worthwhile addition, cooked slowly in a pan for 10 minutes while the grill heats. Finish with mustard and ketchup.',
    ing: [
      '480 g frankfurters (8)',
      '480 g hot dog buns (8)',
      '2 onions, thinly sliced',
      '1 tbsp vegetable oil',
      '4 tbsp yellow mustard',
      '4 tbsp tomato ketchup'
    ],
    st: [
      'Cook the onions in the oil over medium heat for 10 minutes until soft and golden. Heat the grill to medium-high.',
      'Score the frankfurters with shallow cuts and grill for 8 minutes, turning often, until blistered.',
      'Toast the buns cut side down for the last minute.',
      'Fill with the frankfurters and onions and add the mustard and ketchup.'
    ],
    tips: [
      'Score the skins so they do not split.',
      'Turn them often to avoid flare-ups.',
      'Toast the buns on the cooler edge.',
      'Check at 5 minutes if your grill runs hot.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Pickles', 'Baked beans'],
    store: 'Best eaten straight away. Cooked frankfurters keep in the fridge for 3 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'grilled-peaches': {
    d: 'Halved peaches brushed with butter and honey and grilled cut side down until marked, served with ice cream. Four servings in 13 minutes.',
    meta: 'Grilled peaches: halved peaches brushed with butter and honey, grilled cut side down for 6 minutes and served with vanilla ice cream. Four servings.',
    kw: ['grilled peaches', 'barbecued peaches', 'peaches on the grill', 'easy grilled peaches with ice cream', 'grilled peach dessert'],
    why: 'Fruit on the grill turns into a different thing. The heat caramelises the sugars on the cut face and softens the flesh until it is almost a jam, while the skin keeps everything together.\n\nChoose peaches that are ripe but still firm. Soft ones fall apart on the rack, and hard ones stay sour. Halve them and remove the stones, and brush the cut sides with melted butter and honey. **The fat is what stops the fruit sticking.**\n\nHeat the grill to medium and oil the rack well. Lay the peaches cut side down and leave them for 5 or 6 minutes, until they have deep grill marks. Do not move them; they release when ready.\n\nTurn them and grill for 2 minutes on the skin side. If your grill runs hot, check at 4 minutes, as the sugar burns fast. Serve warm, with a scoop of vanilla ice cream melting into the hollow where the stone was, and a scatter of crushed biscuit or toasted nuts.',
    ing: [
      '4 ripe peaches, halved and stoned',
      '30 g butter, melted',
      '3 tbsp honey',
      '1/2 tsp ground cinnamon',
      '200 g vanilla ice cream',
      '30 g chopped pecans'
    ],
    st: [
      'Heat the grill to medium and oil the rack well. Mix the butter, honey and cinnamon and brush over the cut sides of the peaches.',
      'Grill the peaches cut side down for 6 minutes without moving them, until marked and caramelised.',
      'Turn and grill the skin sides for 2 minutes more.',
      'Serve warm with the ice cream and pecans, drizzled with any remaining honey butter.'
    ],
    tips: [
      'Use ripe but firm peaches.',
      'Oil the rack well and do not move the fruit early.',
      'Watch the honey; it burns quickly.',
      'Check at 4 minutes if your grill runs hot.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Mascarpone', 'Toasted nuts'],
    store: 'Best eaten straight away. Leftover peaches keep in the fridge for 1 day.',
    nut: [333, 4, 41, 17, 3, 36, 40]
  }
};
