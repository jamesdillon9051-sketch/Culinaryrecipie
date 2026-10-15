'use strict';

/**
 * Volume fifty-three — air fryer, Instant Pot and oven dinners, fourth part.
 *
 * Twenty-five dishes: two ramen bowls, blackened shrimp, a breakfast skillet,
 * a cabbage casserole and cabbage steaks, chicken lasagna, nachos, thighs
 * and tostadas, a chicken Wellington, chicken with forty cloves of garlic, a
 * chorizo stew, cod in garlic butter, crab mac and cheese, Korean dak galbi,
 * eggplant lasagna, fettuccine with mushrooms, fried oysters, gammon with
 * pineapple, garlic butter salmon, glazed parsnips, a grilled chicken
 * sandwich, grilled octopus and grilled sea bass. Waits of an hour or more
 * are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'beef-ramen': {
    d: 'Thin sirloin slices laid over ramen noodles in a soy and garlic broth, with a soft egg, spring onions and chilli oil.',
    meta: 'Beef ramen in a soy and garlic broth with a soft egg and chilli oil. Two servings, ready in 30 minutes.',
    kw: ['beef ramen', 'beef ramen noodle soup', 'sirloin ramen', 'soy broth ramen', 'ramen with beef and egg'],
    why: 'Quick to build, slow to forget. A good bowl of beef ramen is mostly broth, and the broth here takes only 15 minutes because it starts with ready-made beef stock and gets its depth from soy sauce, garlic, ginger and a spoonful of mirin.\n\nThe beef is cooked by the broth, not before it. Slice sirloin as thinly as you can, almost see-through, and lay the slices on the hot noodles just before pouring the boiling liquid over. They turn from red to pink in seconds and stay soft. A pan-fried steak would be tougher by the time it reached the table.\n\n**Cook the noodles in a separate pan of water.** Ramen noodles release a lot of starch, which would cloud the broth and make it gluey. Drain them well, divide them between bowls, and keep the broth in its own pot until the last moment.\n\nA soft-boiled egg cooked for 6 minutes gives a jammy yolk that enriches the soup as you eat. Finish with sliced spring onions, a little sesame oil and chilli oil to taste.',
    ing: [
      '2 eggs',
      '800 ml beef stock',
      '3 tbsp soy sauce',
      '1 tbsp mirin',
      '3 garlic cloves, sliced',
      '2 tsp fresh ginger, grated',
      '200 g dried ramen noodles',
      '200 g beef sirloin, sliced paper thin',
      '2 spring onions, sliced',
      '1 tsp sesame oil',
      '1 tsp chilli oil'
    ],
    st: [
      'Lower the eggs into a pan of simmering water and cook for 6 minutes. Transfer to iced water for 5 minutes, then peel and halve.',
      'Simmer the stock, soy sauce, mirin, garlic and ginger for 12 minutes. Strain out the garlic and ginger if you like.',
      'Cook the noodles in a separate pan of boiling water for 4 minutes, or as the pack says. Drain well and divide between 2 bowls.',
      'Lay the raw beef slices over the noodles and pour the boiling broth over the top. The beef cooks in the heat.',
      'Add the eggs, spring onions, sesame oil and chilli oil and serve at once.'
    ],
    tips: [
      'Cook the noodles separately so the broth stays clear.',
      'Slice the beef as thin as you can.',
      'Have the broth boiling when it goes over the beef.'
    ],
    pair: ['Gyoza', 'Pickled ginger', 'Cucumber salad', 'Edamame'],
    store: 'Best eaten at once. Keep the broth in the fridge for 2 days and cook fresh noodles when reheating.',
    nut: [704, 48, 83, 20, 4, 7, 2780]
  },

  'blackened-shrimp': {
    d: 'Prawns coated in a paprika, cayenne and thyme spice mix and seared in a very hot pan for 3 minutes a side until dark and sizzling.',
    meta: 'Blackened shrimp with a bold paprika and cayenne crust, cooked in a hot pan for 6 minutes. Four servings, ready in 16 minutes.',
    kw: ['blackened shrimp', 'cajun blackened shrimp', 'blackened prawns', 'spicy seared shrimp', 'shrimp with cajun spices'],
    why: 'Why does blackened not mean burnt? The dark crust is spice, not char: paprika, cayenne, garlic, onion and herbs toasting in hot butter until they turn the surface of the shrimp a deep brown-red. The skill is knowing how far to go before that tips into bitterness.\n\nThe technique was made famous by a Louisiana chef in the 1980s, and it relies on a very hot cast iron pan. Heat it for a full 3 minutes before anything goes in. A lukewarm pan steams the prawns, and the spice coating turns pasty rather than crusting.\n\n**Pat the prawns completely dry** and toss them in melted butter first, then in the spice mix. The butter carries the spices onto the surface and helps them toast. Dry prawns brown, wet ones boil.\n\nThree minutes on the first side, then flip and give them 2 to 3 minutes more, until they curl into a loose C shape and are opaque all the way through. A tight O means they are overcooked. Finish with lemon juice to cut the heat, and expect some smoke, so open a window.',
    ing: [
      '600 g raw large prawns, peeled and deveined',
      '30 g butter, melted',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp cayenne pepper',
      '1 tsp dried thyme',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp vegetable oil',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the paprika, garlic powder, onion powder, cayenne, thyme, oregano, salt and pepper.',
      'Pat the prawns very dry with kitchen paper. Toss with the melted butter, then with the spice mix until evenly coated.',
      'Heat a cast iron pan over high heat for 3 minutes. Add the oil.',
      'Cook the prawns in a single layer for 3 minutes without moving them. Turn and cook for 2 to 3 minutes more until opaque.',
      'Serve at once with the lemon wedges.'
    ],
    tips: [
      'Heat the pan until it is very hot before the prawns go in.',
      'Do not crowd the pan: cook in two batches if needed.',
      'Switch on the extractor fan before you start.'
    ],
    pair: ['Rice', 'Corn on the cob', 'Coleslaw', 'Lemon wedges'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge; serve cold in a salad.',
    nut: [239, 31, 4, 11, 1, 1, 820]
  },

  'breakfast-skillet': {
    d: 'Crispy potatoes, sausage, peppers and onion cooked in one pan with eggs baked on top until the whites set and the yolks stay runny.',
    meta: 'Breakfast skillet with potatoes, sausage and baked eggs, cooked in one pan. Four servings, ready in 35 minutes.',
    kw: ['breakfast skillet', 'breakfast potatoes and eggs', 'sausage and potato breakfast skillet', 'sausage and egg skillet', 'brunch skillet'],
    why: 'A weekend dish for a table of four, and one that makes the kitchen smell like a diner. The skillet puts the whole of a cooked breakfast into a single pan, with potato for the base, sausage for flavour and eggs on top to bring it together.\n\nPart-cook the potatoes first. Diced into 1.5 cm cubes, they need about 8 minutes in a covered pan with a splash of water, then another 8 minutes uncovered in hot oil until crisp. Skip the first stage and the outside burns before the middle softens. Dry them on a cloth before frying.\n\n**Make little wells for the eggs.** Push the potato mix aside with the back of a spoon, crack an egg into each hollow, and cover the pan. The steam sets the whites in 4 to 5 minutes, and the yolks remain loose enough to run over everything when you cut them.\n\nSeason the eggs with salt and pepper only at the end, since salt can speckle the yolks. Scatter with cheese, chives and a dash of hot sauce, and serve from the pan at the table.',
    ing: [
      '500 g potatoes, cut into 1.5 cm cubes',
      '2 tbsp olive oil',
      '300 g breakfast sausages, sliced',
      '1 onion, diced',
      '1 red pepper, diced',
      '2 garlic cloves, crushed',
      '1 tsp smoked paprika',
      '1/2 tsp salt',
      '4 eggs',
      '60 g cheddar, grated',
      '2 tbsp chives, chopped'
    ],
    st: [
      'Put the potatoes in a large frying pan with 50 ml of water. Cover and cook over medium heat for 8 minutes until nearly tender. Drain off any water.',
      'Add the oil and sausage and cook for 8 minutes, uncovered, until the potatoes are crisp and the sausage is browned.',
      'Add the onion, pepper, garlic, paprika and salt and cook for 4 minutes.',
      'Make 4 wells in the mixture. Crack an egg into each, cover and cook for 5 minutes until the whites are set.',
      'Scatter with the cheddar and chives and serve from the pan.'
    ],
    tips: [
      'Part-cook the potatoes before frying.',
      'Cover the pan to set the egg whites.',
      'Take it off the heat when the yolks still wobble.'
    ],
    pair: ['Buttered toast', 'Hot sauce', 'Fresh fruit', 'Orange juice'],
    store: 'Best eaten at once. The potato mix keeps for 2 days; cook fresh eggs when serving.',
    nut: [527, 23, 30, 35, 5, 5, 1070]
  },

  'cabbage-casserole': {
    d: 'Layers of cabbage, browned beef mince and rice baked in tomato sauce with cheese on top until bubbling and tender.',
    meta: 'Cabbage casserole with beef, rice and tomato, baked for 45 minutes. Six servings, ready in 1 hour.',
    kw: ['cabbage casserole', 'beef and cabbage casserole', 'cabbage and rice bake', 'unstuffed cabbage casserole', 'cabbage roll casserole'],
    why: 'Keep the cabbage thin. That is the whole of the work in this dish, because shredded cabbage cooks down to silky ribbons in the oven while thick wedges stay tough and watery. A cabbage roll flavour without the rolling is the appeal.\n\nBrown the mince with onion and garlic, then stir in tomato sauce, a spoonful of brown sugar, a splash of vinegar and some paprika. The balance of sweet and sour comes from Eastern European cabbage rolls, and it is what makes the plain cabbage taste of something. Check for seasoning before layering, since the cabbage will dilute it.\n\n**Layer the casserole instead of mixing it.** A base of cabbage, then rice and beef, then more cabbage on top. The top layer protects the rice from drying out and caramelises slightly at the edges.\n\nCover tightly with foil for the first 35 minutes, as the rice cooks in the steam and juices from the cabbage. Remove the foil for the last 10 minutes, add the cheese, and let it turn golden. Rest for 5 minutes before spooning out.',
    ing: [
      '1 tbsp olive oil',
      '500 g beef mince',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '400 g tomato sauce',
      '1 tbsp light brown sugar',
      '1 tbsp cider vinegar',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '600 g white cabbage, thinly shredded',
      '150 g long grain rice, uncooked',
      '300 ml beef stock',
      '100 g cheddar, grated'
    ],
    st: [
      'Heat the oven to 180C. Heat the oil in a large pan and brown the beef for 8 minutes. Add the onion and garlic and cook for 4 minutes.',
      'Stir in the tomato sauce, sugar, vinegar, paprika and salt. Simmer for 5 minutes.',
      'Spread a third of the cabbage in a large baking dish. Cover with half the rice and half the beef sauce. Repeat, ending with a layer of cabbage.',
      'Pour the stock over, cover tightly with foil and bake for 35 minutes.',
      'Remove the foil, scatter with the cheddar and bake for 10 minutes more until golden.'
    ],
    tips: [
      'Shred the cabbage finely so it softens fully.',
      'Seal the foil tightly so the rice steams.',
      'Rest for 5 minutes before serving.'
    ],
    pair: ['Soured cream', 'Rye bread', 'Green salad', 'Pickles'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [425, 25, 34, 21, 4, 9, 810]
  },

  'cabbage-steaks': {
    d: 'Thick slices of green cabbage brushed with garlic oil and roasted at 220C for 30 minutes until charred at the edges and soft inside.',
    meta: 'Cabbage steaks roasted with garlic and paprika until charred and tender. Four servings, ready in 35 minutes.',
    kw: ['cabbage steaks', 'roasted cabbage steaks', 'oven roasted cabbage', 'garlic cabbage steaks', 'cabbage wedges'],
    why: 'Cut the cabbage through the core. The core is what holds the slices together, so each thick steak keeps its layers in one piece as it roasts, with the leaves at the edge crisping and the heart staying silky.\n\nTrim the outer leaves if they look tired, then slice the head into rounds about 2.5 cm thick. Thinner steaks scorch before they soften, and thicker ones stay raw in the middle. Each head gives three or four good central slices, and the ends can be shredded for a slaw.\n\n**Brush generously with oil on both sides.** Cabbage is dry, and the oil carries the garlic and paprika and encourages the browning. It looks like too much, but the leaves soak it up as they roast.\n\nRoast on a hot, preheated tray, turning once, until the edges are blackened and crisp and a knife slides into the core. Finish with a squeeze of lemon and a scatter of parmesan or chilli flakes. The sweetness that comes with roasting is a surprise to anyone who thinks they dislike cabbage.',
    ing: [
      '1 large green cabbage, about 1 kg',
      '4 tbsp olive oil',
      '3 garlic cloves, crushed',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '30 g parmesan, grated',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 220C with a large baking tray inside. Remove any damaged outer leaves from the cabbage.',
      'Cut the cabbage into 4 thick slices, about 2.5 cm, straight through the core.',
      'Mix the olive oil, garlic, paprika, salt and pepper. Brush generously over both sides of every slice.',
      'Lay the steaks on the hot tray and roast for 30 minutes, turning once after 15 minutes, until charred at the edges.',
      'Scatter with the parmesan and serve with the lemon wedges.'
    ],
    tips: [
      'Slice through the core so the steaks hold together.',
      'Heat the tray before the cabbage goes on.',
      'Check the heart with a knife before serving.'
    ],
    pair: ['Roast chicken', 'Mashed potatoes', 'Grilled sausages', 'Lemon wedges'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot oven for 8 minutes.',
    nut: [236, 6, 17, 16, 7, 8, 750]
  },

  'chicken-lasagna': {
    d: 'Layers of pasta sheets, shredded chicken in a creamy mushroom sauce and mozzarella, baked for 45 minutes until golden on top.',
    meta: 'Chicken lasagna with a creamy mushroom white sauce and mozzarella, baked for 45 minutes. Eight servings, ready in 1 hour 15 minutes.',
    kw: ['chicken lasagna', 'creamy chicken lasagna', 'chicken and mushroom lasagne', 'white sauce lasagna', 'chicken lasagne recipe'],
    why: 'A creamy sauce fills the kitchen with the smell of butter, garlic and thyme before it is even in the dish. A chicken lasagna is paler and gentler than the classic beef one, with a white béchamel sauce enriched with mushrooms, and it has a delicate flavour that suits a family dinner.\n\nUse cooked chicken, either poached breast or a shop-bought rotisserie bird, shredded by hand. Poaching in seasoned water for 15 minutes keeps it moist and gives you a little stock to loosen the sauce if needed. Stir the shredded chicken through the mushroom sauce so that each layer is evenly flavoured.\n\n**Make the sauce slightly thinner than you think it should be.** The pasta sheets absorb liquid as they bake, and a thick sauce turns the finished lasagna dry. It should coat a spoon but still pour in a ribbon.\n\nUse no-boil sheets and arrange them without overlapping, since doubled sheets stay hard. Finish with a thick layer of mozzarella and parmesan on top. Bake covered at first, then uncovered, and rest for 15 minutes before cutting so that the layers hold together.',
    ing: [
      '60 g butter',
      '250 g mushrooms, sliced',
      '3 garlic cloves, crushed',
      '60 g plain flour',
      '800 ml milk',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '500 g cooked chicken breast, shredded',
      '250 g no-boil lasagna sheets',
      '250 g mozzarella, grated',
      '50 g parmesan, grated'
    ],
    st: [
      'Heat the oven to 190C. Melt the butter in a large pan and cook the mushrooms for 6 minutes. Add the garlic and cook for 1 minute.',
      'Stir in the flour for 1 minute. Add the milk slowly, whisking, and simmer for 6 minutes until thickened. Add the thyme, salt and pepper, and stir in the chicken.',
      'Spread a thin layer of sauce in a baking dish. Cover with a layer of lasagna sheets, then more sauce and a handful of mozzarella. Repeat 3 more times.',
      'Finish with a layer of sauce, the rest of the mozzarella and the parmesan. Cover with foil and bake for 30 minutes.',
      'Remove the foil and bake for 15 minutes more until golden. Rest for 15 minutes before cutting.'
    ],
    tips: [
      'Keep the sauce on the thin side.',
      'Do not overlap the sheets.',
      'Rest the lasagna so it slices cleanly.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'White wine'],
    store: 'Keeps for 4 days in the fridge or 2 months in the freezer.',
    nut: [452, 32, 36, 20, 2, 7, 650]
  },

  'chicken-nachos': {
    d: 'Tortilla chips piled with shredded chicken, black beans and cheese and baked for 15 minutes, topped with fresh salsa and lime.',
    meta: 'Chicken nachos with beans, melted cheese and fresh salsa, baked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['chicken nachos', 'loaded chicken nachos', 'shredded chicken nachos', 'baked chicken nachos', 'nachos with cheese'],
    why: 'It looks like the beef version and eats lighter, which is why chicken nachos are the one to make when a crowd is coming. Shredded chicken soaks up seasoning and lies flat over the chips, so the topping stays put instead of rolling off the edges.\n\nCook the chicken first in a seasoned liquid: water, a bay leaf, half an onion and salt. Poach it gently for 15 minutes, then shred it with two forks. Toss the shreds in lime juice, cumin, smoked paprika and a spoon of the cooking liquid so they are moist and well flavoured. Cold, dry chicken gives chewy, dull nachos.\n\n**Build the nachos in two layers on a lined tray.** Chips, chicken, beans, cheese, then repeat. A single pile leaves the bottom chips plain and the middle ones soggy, while two shallow layers give every chip some topping and let the heat reach the cheese evenly.\n\nBake until the cheese just bubbles and the edges of the top chips are golden. Add the fresh toppings after baking: pico de gallo, avocado, soured cream and coriander, so they stay cool and crisp against the hot base.',
    ing: [
      '500 g chicken breast',
      '1/2 onion',
      '1 bay leaf',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 lime, juiced',
      '1 tsp salt',
      '200 g tortilla chips',
      '200 g tinned black beans, drained',
      '200 g Monterey Jack or cheddar, grated',
      '1 avocado, diced',
      '120 g salsa',
      '100 g soured cream',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Put the chicken, onion, bay leaf and a pinch of salt in a pan, cover with water and simmer gently for 15 minutes. Drain, reserving 4 tbsp of the liquid, and shred the chicken.',
      'Toss the chicken with the cumin, paprika, lime juice, salt and the reserved liquid.',
      'Heat the oven to 200C. Spread half the chips on a lined tray and cover with half the chicken, beans and cheese. Repeat with the rest.',
      'Bake for 15 minutes until the cheese is melted and bubbling.',
      'Top with the avocado, salsa, soured cream and coriander and serve at once.'
    ],
    tips: [
      'Season the shredded chicken so it is not bland.',
      'Layer the chips twice for even coverage.',
      'Add fresh toppings after baking.'
    ],
    pair: ['Guacamole', 'Lime wedges', 'Pickled jalapenos', 'Cold lager'],
    store: 'Best eaten at once. Keep the cooked chicken for 3 days in the fridge.',
    nut: [761, 49, 49, 41, 9, 4, 1570]
  },

  'chicken-ramen': {
    d: 'Chicken thighs poached in a ginger and garlic stock, served over ramen noodles with sweetcorn, pak choi and a soft egg.',
    meta: 'Chicken ramen with a ginger and garlic broth, noodles and pak choi. Two servings, ready in 30 minutes.',
    kw: ['chicken ramen', 'chicken ramen noodle soup', 'homemade chicken ramen', 'ginger garlic ramen broth', 'ramen with chicken thighs'],
    why: 'Keep the broth at a simmer, never a boil. That is the whole difference between a clear, clean soup and a cloudy one, because a hard boil churns the fat and protein into the liquid. A gentle bubble, just breaking the surface, gives a broth you can see through.\n\nHere the broth is a store-cupboard shortcut: chicken stock, sliced ginger, garlic and a splash of soy, with chicken thighs poached right in it. The thighs flavour the stock as they cook and are soft enough to shred with a fork in 15 minutes. Lift them out, slice them, and put them back at the end.\n\n**Add the pak choi in the last 2 minutes.** It wilts quickly, and the stems stay crisp if they are not left to cook. Quarter it lengthways so the layers open up in the hot soup.\n\nCook the noodles in a separate pan, drain them, and put them in the bowls first. Ladle the broth over, then lay the chicken, sweetcorn and egg on top. A drizzle of sesame oil and a scatter of spring onion finish the bowl.',
    ing: [
      '2 eggs',
      '900 ml chicken stock',
      '30 g fresh ginger, sliced',
      '3 garlic cloves, sliced',
      '2 tbsp soy sauce',
      '3 chicken thighs, boneless, about 350 g',
      '200 g dried ramen noodles',
      '2 pak choi, quartered lengthways',
      '80 g sweetcorn',
      '2 spring onions, sliced',
      '1 tsp sesame oil'
    ],
    st: [
      'Lower the eggs into simmering water and cook for 6 minutes. Chill in iced water, then peel and halve.',
      'Bring the stock, ginger, garlic and soy sauce to a gentle simmer. Add the chicken and poach for 15 minutes until cooked through. Lift out and slice.',
      'Cook the noodles in a separate pan according to the pack. Drain and divide between 2 bowls.',
      'Add the pak choi and sweetcorn to the broth and simmer for 2 minutes.',
      'Ladle the broth over the noodles. Top with the chicken, egg, spring onions and sesame oil.'
    ],
    tips: [
      'Keep the broth at a gentle simmer for clarity.',
      'Cook the noodles in their own pan.',
      'Add the pak choi last so it stays crisp.'
    ],
    pair: ['Gyoza', 'Chilli oil', 'Pickled radish', 'Green tea'],
    store: 'Best eaten at once. The broth keeps for 2 days in the fridge.',
    nut: [817, 65, 92, 21, 6, 7, 2690]
  },

  'chicken-thighs-in-oven': {
    d: 'Bone-in chicken thighs roasted at 210C for 40 minutes with garlic, mustard and herbs until the skin is crisp and the meat is tender.',
    meta: 'Chicken thighs in the oven with mustard, garlic and herbs, roasted for 40 minutes. Four servings, ready in 50 minutes.',
    kw: ['chicken thighs in oven', 'oven roasted chicken thighs', 'bone in chicken thighs', 'crispy skin chicken thighs', 'garlic mustard chicken thighs'],
    why: 'It looks like a roast chicken dinner and cooks like a snack, and the difference is the cut. Thighs have more fat and connective tissue than breasts, which is why they stay moist in a hot oven and forgive a few minutes of inattention.\n\nBuy bone-in, skin-on thighs, and dry them well with kitchen paper. A thin layer of grainy mustard mixed with olive oil, garlic and thyme goes under and over the skin. The mustard adds a sharp flavour and the sugar and protein in it help the skin colour as it roasts.\n\n**Start skin side down for 10 minutes**, then turn. The fat renders into the tray and the underside browns, and when you flip the thighs the skin crisps in the clean oven heat. This two-step method gives crisper skin than roasting skin side up throughout.\n\nThe thighs are ready when the skin is deep gold and a skewer in the thickest part brings out clear juices. A thermometer should read 80C, hotter than for breast meat, because dark meat is better when the collagen has melted. Rest for 5 minutes before serving.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1.2 kg',
      '2 tbsp wholegrain mustard',
      '2 tbsp olive oil',
      '4 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 210C. Pat the chicken thighs completely dry.',
      'Mix the mustard, olive oil, garlic, thyme, salt and pepper. Rub it over the thighs and under the skin.',
      'Place the thighs skin side down in a roasting tin and roast for 10 minutes.',
      'Turn the thighs skin side up and roast for 30 minutes more until the skin is crisp and a thermometer reads 80C.',
      'Rest for 5 minutes and serve with the lemon wedges and pan juices.'
    ],
    tips: [
      'Dry the skin before seasoning.',
      'Start skin side down, then turn.',
      'Cook dark meat to 80C for the best texture.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Rice', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Reheat in a 200C oven for 10 minutes.',
    nut: [441, 60, 3, 21, 1, 0, 1000]
  },

  'chicken-tostadas': {
    d: 'Crisp corn tostadas topped with refried beans, spiced shredded chicken, lettuce, cheese and a squeeze of lime.',
    meta: 'Chicken tostadas with refried beans, lettuce and cheese on crisp corn shells. Four servings, ready in 30 minutes.',
    kw: ['chicken tostadas', 'chicken tostada recipe', 'crispy chicken tostadas', 'shredded chicken tostadas', 'mexican tostadas'],
    why: 'Tostadas, shredded chicken, beans, lettuce, cheese: a handful of ingredients and a plate that is part tacos, part salad. The word tostada means toasted in Spanish, and the toast is the point: a flat, crisp corn tortilla that holds a stack of toppings.\n\nBuy ready-made tostada shells, or make your own by brushing corn tortillas with oil and baking them at 200C for 8 minutes, turning once. They should be rigid and golden. A flabby tortilla gives you a soggy mess instead of a crunchy base.\n\n**Spread the beans first, as a glue.** Warm refried beans have the right consistency to hold the other toppings in place and to protect the shell from the wet chicken. A spoonful of beans goes down edge to edge, the chicken after it, and the cold toppings last.\n\nPoach the chicken with cumin, garlic and chilli, shred it, and toss it with lime juice. Add the shredded lettuce, cheese, soured cream and coriander only at the moment of serving. Tostadas are eaten with the hands, and are best eaten quickly.',
    ing: [
      '500 g chicken breast',
      '2 garlic cloves, crushed',
      '2 tsp ground cumin',
      '1 tsp chilli powder',
      '1 tsp salt',
      '2 limes',
      '8 tostada shells, about 120 g',
      '400 g tinned refried beans',
      '100 g iceberg lettuce, shredded',
      '100 g queso fresco or feta, crumbled',
      '100 g soured cream',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Put the chicken in a pan with the garlic, cumin, chilli, salt and enough water to cover. Simmer gently for 15 minutes until cooked through. Shred with two forks and toss with the juice of 1 lime.',
      'Warm the refried beans in a small pan for 5 minutes.',
      'Heat the oven to 180C and warm the tostada shells for 3 minutes if they have been stored.',
      'Spread each shell with beans, then pile on the chicken.',
      'Top with the lettuce, cheese, soured cream and coriander and serve with the remaining lime cut into wedges.'
    ],
    tips: [
      'Spread the beans first to protect the shell.',
      'Add cold toppings at the last moment.',
      'Warm the shells if they have gone soft.'
    ],
    pair: ['Guacamole', 'Salsa', 'Lime wedges', 'Mexican rice'],
    store: 'Best assembled at the table. Keep the cooked chicken for 3 days in the fridge.',
    nut: [492, 43, 44, 16, 7, 4, 1250]
  },

  'chicken-wellington': {
    d: 'Chicken breasts wrapped in prosciutto and a mushroom duxelles, sealed in puff pastry and baked for 35 minutes until golden.',
    meta: 'Chicken Wellington with mushroom duxelles, prosciutto and puff pastry, baked for 35 minutes. Four servings, ready in 1 hour 15 minutes.',
    kw: ['chicken wellington', 'individual chicken wellington', 'chicken in puff pastry', 'mushroom duxelles chicken', 'chicken wellington recipe'],
    why: 'It looks like a beef Wellington and costs a fraction of the price, which is why this is the version to make for a dinner party. Chicken breast, a layer of ham, a mushroom paste and puff pastry: the same architecture, built from cheaper parts.\n\nThe duxelles is a finely chopped mushroom mixture cooked until all the moisture has gone, which takes about 10 minutes in a hot pan. It should look like a thick paste. If it is still wet when it goes onto the chicken, the water seeps into the pastry and makes the base soggy.\n\n**Wrap the chicken in prosciutto first.** The ham forms a barrier between the meat and the pastry, keeping the pastry crisp, and it seasons the chicken as it cooks. Chill the wrapped parcels for 15 minutes so the ham stays attached while you roll the pastry.\n\nSeal the pastry with beaten egg, trim off the excess, and chill again before baking. A cold parcel in a hot oven puffs properly. Score the top lightly for steam, brush with egg, and bake until deep gold. Rest for 5 minutes before slicing.',
    ing: [
      '4 chicken breasts, about 600 g',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '300 g mushrooms, finely chopped',
      '2 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '8 slices prosciutto, about 80 g',
      '375 g ready-rolled puff pastry',
      '2 eggs, beaten'
    ],
    st: [
      'Season the chicken. Heat the oil in a frying pan and sear the breasts for 2 minutes per side. Cool completely.',
      'Cook the mushrooms in the same pan for 10 minutes until dry and paste-like. Add the garlic and thyme and cook for 1 minute. Cool.',
      'Lay 2 slices of prosciutto on cling film, spread with a quarter of the duxelles and set a chicken breast on top. Wrap tightly and chill all 4 parcels for 15 minutes.',
      'Heat the oven to 200C. Cut the pastry into 4 squares, wrap each parcel and seal the edges with beaten egg. Brush the tops with egg.',
      'Bake for 35 minutes until the pastry is deep golden and the chicken reads 74C. Rest for 5 minutes.'
    ],
    tips: [
      'Cook the mushrooms until completely dry.',
      'Chill the parcels before baking.',
      'Use a thermometer to check the chicken.'
    ],
    pair: ['Green beans', 'Mashed potatoes', 'Roast carrots', 'Red wine gravy'],
    store: 'Keeps for 2 days in the fridge. Reheat at 180C for 15 minutes.',
    nut: [672, 50, 37, 36, 3, 4, 1650]
  },

  'chicken-with-40-cloves-of-garlic': {
    d: 'Chicken pieces braised slowly in a covered pot with forty whole garlic cloves, white wine and thyme until the garlic turns sweet and spreadable.',
    meta: 'Chicken with 40 cloves of garlic, braised in wine and thyme until tender. Four servings, ready in 1 hour 50 minutes.',
    kw: ['chicken with 40 cloves of garlic', '40 garlic cloves chicken', 'french garlic chicken', 'braised garlic chicken', 'garlic chicken casserole'],
    why: 'It looks like too much garlic and tastes like very little. The name is the whole premise of this French provincial dish, and what surprises most cooks is that forty cloves, cooked slowly, lose all their sharpness. They turn soft, golden and sweet, and spread like butter onto bread.\n\nDo not peel the cloves. Separate the heads into cloves and leave the skins on, which protects them as they cook and makes them easy to squeeze out at the table. The skins also keep the garlic from browning too fast and turning bitter in the hot pot.\n\n**Cover the pot and keep the heat low.** The chicken braises in its own juices with a little wine and stock. The lid traps the steam, and the garlic softens inside its skin while the chicken turns tender. An hour and a half in a 160C oven is enough.\n\nServe the chicken straight from the pot with the garlic cloves around it and slices of toasted baguette. Each person squeezes the soft garlic out of its skin onto the bread, then eats it with the chicken and the winey juices.',
    ing: [
      '1.4 kg chicken pieces, bone in and skin on',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp olive oil',
      '40 garlic cloves, unpeeled, about 3 heads',
      '150 ml dry white wine',
      '150 ml chicken stock',
      '6 sprigs thyme',
      '2 bay leaves',
      '200 g baguette, sliced and toasted'
    ],
    st: [
      'Heat the oven to 160C. Season the chicken with the salt and pepper. Heat the oil in a casserole dish and brown the chicken in batches for 5 minutes per batch. Remove it.',
      'Add the garlic cloves to the dish and stir for 2 minutes. Pour in the wine and let it bubble for 3 minutes.',
      'Add the stock, thyme and bay leaves and return the chicken with its juices.',
      'Cover with a tight lid and cook in the oven for 1 hour 20 minutes, until the chicken is tender and the garlic is soft.',
      'Serve with the toasted baguette to spread the garlic on.'
    ],
    tips: [
      'Leave the garlic unpeeled.',
      'Keep the lid tight to hold in the steam.',
      'Squeeze the soft garlic onto toast at the table.'
    ],
    pair: ['Toasted baguette', 'Green salad', 'Roast potatoes', 'White wine'],
    store: 'Keeps for 3 days in the fridge. Reheat gently in a covered pan.',
    nut: [933, 74, 40, 53, 3, 2, 1270]
  },

  'chorizo-and-potato-stew': {
    d: 'Spanish chorizo, potatoes, peppers and tomato simmered with smoked paprika into a thick, brick-red stew, finished with parsley.',
    meta: 'Chorizo and potato stew with smoked paprika, tomato and peppers. Four servings, ready in 50 minutes.',
    kw: ['chorizo and potato stew', 'spanish chorizo stew', 'chorizo potato casserole', 'smoked paprika stew', 'patatas con chorizo'],
    why: 'Why does so little chorizo flavour so much stew? Because the sausage is cured with smoked paprika and garlic, and as it cooks it gives up its fat, which is dyed red and carries the flavour through everything else in the pot.\n\nUse Spanish cooking chorizo, not the soft, spreadable kind or the dry sausage you eat sliced raw. Cooking chorizo is firm but fresh enough to render its oil. Slice it and fry it gently for 5 minutes until the edges crisp and the pan fills with red oil. Everything else cooks in that oil.\n\n**Cut the potatoes into rough chunks, not neat cubes.** Rough edges break down a little in the stew and thicken it, in the way that starch from the potatoes does in a classic Spanish dish. Waxy varieties stay firm, while floury ones thicken the sauce.\n\nAdd the tomatoes, paprika and stock, and simmer for 25 minutes until the potatoes are tender and the sauce has thickened. Crush a few potatoes against the side of the pan to help the process. Finish with parsley and a splash of sherry vinegar.',
    ing: [
      '250 g cooking chorizo, sliced',
      '1 onion, chopped',
      '1 red pepper, diced',
      '3 garlic cloves, crushed',
      '2 tsp smoked paprika',
      '600 g potatoes, cut into 3 cm chunks',
      '400 g tinned chopped tomatoes',
      '400 ml chicken stock',
      '1 bay leaf',
      '1 tbsp sherry vinegar',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Fry the chorizo in a large pan over medium heat for 5 minutes until the oil runs and the edges crisp.',
      'Add the onion and pepper and cook for 6 minutes. Stir in the garlic and paprika for 1 minute.',
      'Add the potatoes, tomatoes, stock and bay leaf. Bring to a simmer.',
      'Cook, partly covered, for 25 minutes, until the potatoes are tender. Crush a few against the side of the pan.',
      'Stir in the vinegar, scatter with the parsley and serve.'
    ],
    tips: [
      'Use cooking chorizo, not the cured eating type.',
      'Crush a few potatoes to thicken the stew.',
      'Add vinegar at the end to lift the flavour.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Fried eggs', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [352, 14, 38, 16, 7, 7, 850]
  },

  'cod-in-garlic-butter': {
    d: 'Cod fillets pan-seared and basted with garlic butter, lemon and parsley for about 4 minutes a side until golden and flaking.',
    meta: 'Cod in garlic butter, seared and basted with lemon and parsley. Four servings, ready in 20 minutes.',
    kw: ['cod in garlic butter', 'garlic butter cod', 'pan seared cod', 'butter basted cod', 'cod with lemon and garlic'],
    why: 'Cod, butter, garlic, lemon: four things you already own, and about twenty minutes. The recipe is straightforward, but it is easy to get wrong in one way, which is to cook the garlic too early. Garlic in hot butter burns in under a minute and turns the whole sauce bitter.\n\nSear the fish first in a little oil, then add the butter and garlic to the pan only after the fish has turned. The butter foams, the garlic softens without browning, and you can spoon the mixture over the fillets repeatedly for the last 2 minutes. This basting is what keeps lean cod moist.\n\n**Dry the fillets thoroughly and season them just before cooking.** Salt drawn onto the surface pulls out water, which then spits in the pan and prevents a golden crust. Thick centre-cut fillets are best, and they should go into the pan skin side down if the skin is on.\n\nThe fish is cooked when it flakes at the touch of a fork and has turned from translucent to white. Squeeze lemon into the pan just at the end, swirl, and spoon the sauce over the plates.',
    ing: [
      '4 cod fillets, about 600 g',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp olive oil',
      '50 g butter',
      '4 garlic cloves, thinly sliced',
      '1 lemon, juiced',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Pat the cod very dry and season with the salt and pepper.',
      'Heat the oil in a large frying pan over medium-high heat. Cook the cod for 4 minutes without moving it, until golden underneath.',
      'Turn the fillets. Add the butter and garlic to the pan and cook for 3 minutes, spooning the foaming butter over the fish.',
      'Squeeze in the lemon juice and swirl.',
      'Serve at once with the pan sauce spooned over and the parsley scattered on top.'
    ],
    tips: [
      'Add the garlic after the fish has turned.',
      'Spoon the butter over the fish as it cooks.',
      'Do not move the fillets for the first 4 minutes.'
    ],
    pair: ['New potatoes', 'Steamed greens', 'Rice', 'Crusty bread'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge.',
    nut: [259, 28, 3, 15, 1, 0, 380]
  },

  'crab-mac-and-cheese': {
    d: 'Macaroni in a creamy cheddar and Gruyère sauce with lump crab and Old Bay, topped with buttery crumbs and baked until golden.',
    meta: 'Crab mac and cheese with a cheddar and Gruyère sauce, baked until golden. Six servings, ready in 45 minutes.',
    kw: ['crab mac and cheese', 'baked crab mac and cheese', 'lump crab macaroni cheese', 'seafood mac and cheese', 'old bay mac and cheese'],
    why: 'This is what to make in the autumn, when the evenings turn cold and a bowl of something rich feels earned. Crab and cheese is a pairing that suits the sweet, delicate flavour of crab well, as long as the cheese does not drown it. The answer is to use cheeses with character, not a lot of them.\n\nBuild the sauce on a roux of butter and flour, whisk in warm milk gradually, and simmer until it coats the back of a spoon. Take the pan off the heat before adding the cheese, which melts more smoothly in warm sauce than in boiling. Sharp cheddar gives flavour and Gruyère gives a nutty stretch.\n\n**Fold in the crab at the very end.** Lump crab meat is fragile and cooked already, so stirring it hard breaks it into shreds. Fold it in gently with a spatula after the pasta has been mixed in, then pour the lot into a dish.\n\nOld Bay seasoning is the traditional partner for crab, and a teaspoon is enough. Top with panko mixed with melted butter and bake until the crumbs are golden and the edges bubble.',
    ing: [
      '350 g macaroni',
      '50 g butter',
      '40 g plain flour',
      '700 ml milk, warmed',
      '200 g sharp cheddar, grated',
      '100 g Gruyère, grated',
      '1 tsp Old Bay seasoning',
      '1/2 tsp mustard powder',
      '1 tsp salt',
      '300 g lump crab meat, drained',
      '50 g panko breadcrumbs',
      '20 g butter, melted'
    ],
    st: [
      'Heat the oven to 200C. Cook the macaroni in boiling salted water for 7 minutes, 2 minutes short of the pack. Drain.',
      'Melt the 50 g butter in a large pan, stir in the flour for 1 minute, then whisk in the milk gradually. Simmer for 6 minutes until thick.',
      'Remove from the heat. Stir in the cheddar, Gruyère, Old Bay, mustard powder and salt until smooth.',
      'Stir in the pasta, then fold in the crab gently. Pour into a baking dish.',
      'Mix the panko with the melted butter and scatter on top. Bake for 25 minutes until the top is golden and the edges bubble.'
    ],
    tips: [
      'Take the sauce off the heat before adding cheese.',
      'Fold in the crab gently.',
      'Cook the macaroni short: it finishes in the oven.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Lemon wedges', 'Garlic bread'],
    store: 'Keeps for 2 days in the fridge. Reheat covered at 180C for 15 minutes.',
    nut: [663, 35, 61, 31, 2, 8, 950]
  },

  'dak-galbi': {
    d: 'Chicken thighs stir-fried in a gochujang sauce with cabbage, sweet potato and rice cakes in one pan until sticky and red.',
    meta: 'Dak galbi: Korean spicy chicken with cabbage and sweet potato, stir-fried for 15 minutes. Four servings, ready in 35 minutes.',
    kw: ['dak galbi', 'korean spicy chicken stir fry', 'gochujang chicken', 'korean chicken and cabbage', 'chuncheon dak galbi'],
    why: 'Dak galbi is a dish from the city of Chuncheon in South Korea, and it is traditionally cooked at the table in a large flat pan, with everyone eating straight from it. The base is chicken, cabbage and sweet potato, coated in a red sauce that is spicy, sweet and deeply savoury.\n\nThe sauce is built on gochujang, the Korean fermented chilli paste, with soy sauce, garlic, ginger, a little sugar and a spoon of gochugaru, the coarse chilli flakes. It is sticky and dark red. Marinate the chicken in half of it for at least 20 minutes, which seasons the meat and tenderises it.\n\n**Cook the sweet potato first.** Sliced into thin rounds, it needs a few minutes of head start in the pan before the cabbage and chicken, or it will stay hard in the middle. The starch from it also thickens the sauce.\n\nStir-fry on a high heat, tossing often so the sauce caramelises without scorching. When the chicken is cooked through and the cabbage has wilted, add the rest of the sauce and the sliced spring onions. Finish with sesame seeds, and serve with rice and lettuce leaves for wrapping.',
    ing: [
      '700 g chicken thighs, boneless, cut into bite-sized pieces',
      '3 tbsp gochujang',
      '2 tbsp soy sauce',
      '1 tbsp gochugaru',
      '1 tbsp light brown sugar',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '1 tbsp sesame oil',
      '1 tbsp vegetable oil',
      '300 g sweet potato, thinly sliced',
      '300 g white cabbage, cut into chunks',
      '3 spring onions, cut into lengths',
      '1 tsp sesame seeds'
    ],
    st: [
      'Mix the gochujang, soy sauce, gochugaru, sugar, garlic, ginger and sesame oil. Toss half the sauce with the chicken and leave for 20 minutes.',
      'Heat the vegetable oil in a large pan or wok over medium-high heat. Cook the sweet potato for 4 minutes.',
      'Add the chicken and stir-fry for 6 minutes. Add the cabbage and cook for 4 minutes more.',
      'Stir in the remaining sauce and spring onions and cook for 1 minute until sticky.',
      'Sprinkle with the sesame seeds and serve with rice.'
    ],
    tips: [
      'Marinate the chicken for the best flavour.',
      'Give the sweet potato a head start.',
      'Reduce the gochugaru if you want less heat.'
    ],
    pair: ['Steamed rice', 'Lettuce leaves', 'Kimchi', 'Pickled radish'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot pan with a splash of water.',
    nut: [428, 39, 32, 16, 6, 12, 1030]
  },

  'eggplant-lasagna': {
    d: 'Roasted aubergine slices layered with ricotta, tomato sauce and mozzarella in place of pasta sheets, baked for 50 minutes.',
    meta: 'Eggplant lasagna with roasted slices, ricotta and tomato sauce, baked for 50 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['eggplant lasagna', 'aubergine lasagne', 'eggplant lasagna with ricotta', 'pasta free lasagna', 'roasted eggplant lasagna'],
    why: 'Salt the slices and leave them for half an hour. That one step is what separates a lasagna with firm layers from one that collapses into a watery mess, because aubergine holds a surprising amount of liquid, and it will all end up in the dish unless you draw it out first.\n\nSlice the aubergines lengthways into planks about 1 cm thick. Sprinkle with salt, leave them on a rack, and pat them dry with kitchen paper. Brush them with olive oil and roast on trays at 220C for 20 minutes, turning once, until golden and pliable. Roasted slices absorb far less oil than fried ones.\n\n**Make the tomato sauce thick.** A sauce that is loose in the pan becomes soup in the oven, since the aubergine continues to release a little moisture as it bakes. Simmer the tomatoes with garlic and basil for 20 minutes, until a spoon drawn through leaves a clear trail.\n\nMix the ricotta with egg, parmesan and parsley for the middle layer. The egg sets it so it cuts cleanly. Rest the baked lasagna for 15 minutes before slicing, or the layers slide apart.',
    ing: [
      '1 kg aubergines, sliced lengthways 1 cm thick',
      '2 tsp salt',
      '4 tbsp olive oil',
      '800 g tinned chopped tomatoes',
      '3 garlic cloves, crushed',
      '1 tsp dried oregano',
      '250 g ricotta',
      '1 egg',
      '50 g parmesan, grated',
      '2 tbsp parsley, chopped',
      '250 g mozzarella, grated',
      '2 tbsp basil, torn'
    ],
    st: [
      'Salt the aubergine slices and leave on a rack for 30 minutes. Pat dry. Heat the oven to 220C, brush the slices with the oil and roast on trays for 20 minutes, turning once.',
      'Simmer the tomatoes, garlic and oregano for 20 minutes until thick.',
      'Mix the ricotta, egg, half the parmesan and the parsley. Reduce the oven to 190C.',
      'Spread a little sauce in a baking dish. Layer aubergine, sauce, ricotta mix and mozzarella, repeating twice and finishing with sauce, mozzarella and the remaining parmesan.',
      'Bake for 50 minutes until bubbling and golden. Rest for 15 minutes and scatter with basil.'
    ],
    tips: [
      'Salt and dry the aubergine slices.',
      'Keep the tomato sauce thick.',
      'Rest the lasagna before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roast tomatoes', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 2 months in the freezer.',
    nut: [408, 21, 18, 28, 7, 10, 1220]
  },

  'fettuccine-with-mushrooms': {
    d: 'Fettuccine tossed with garlicky sauteed mushrooms, white wine, cream and parmesan in a silky sauce, ready in 25 minutes.',
    meta: 'Fettuccine with mushrooms in a garlic, wine and parmesan cream sauce. Four servings, ready in 25 minutes.',
    kw: ['fettuccine with mushrooms', 'mushroom fettuccine', 'creamy mushroom pasta', 'garlic mushroom fettuccine', 'mushroom pasta recipe'],
    why: 'Most home versions come out watery, and the fix is to cook the mushrooms in a dry, wide pan without crowding them. Mushrooms are mostly water. If they go into a small pan together they steam in their own liquid and turn grey, while a hot wide pan lets the water evaporate so the mushrooms brown.\n\nSlice the mushrooms thickly, about 5 mm. Add them to a hot pan with oil, and leave them alone for 3 to 4 minutes before stirring. When the first side is golden, stir, and cook for another 4 minutes. Salt them only after they have browned, since salt early draws out water and delays the colour.\n\n**Save a mug of the pasta water.** The starch in it is what thickens and binds the sauce, and it lets you loosen the dish without adding more cream. Add it a splash at a time while tossing the pasta in the pan.\n\nDeglaze with white wine, reduce it by half, then pour in the cream and let it simmer for 3 minutes. Toss in the drained fettuccine with the parmesan and parsley, and serve straight away on warm plates.',
    ing: [
      '350 g tagliatelle',
      '2 tbsp olive oil',
      '500 g mushrooms, thickly sliced',
      '30 g butter',
      '4 garlic cloves, crushed',
      '100 ml dry white wine',
      '200 ml double cream',
      '50 g parmesan, grated',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '3 tbsp parsley, chopped'
    ],
    st: [
      'Cook the fettuccine in boiling salted water as the pack says. Reserve a mug of the pasta water, then drain.',
      'Heat the oil in a wide pan over high heat. Add the mushrooms in a single layer and cook for 4 minutes without stirring, then stir and cook for 4 minutes more.',
      'Add the butter and garlic and cook for 1 minute. Pour in the wine and reduce by half.',
      'Add the cream and simmer for 3 minutes. Season with the salt and pepper.',
      'Toss in the pasta, parmesan and a splash of the pasta water until glossy. Scatter with the parsley.'
    ],
    tips: [
      'Do not crowd the mushrooms in the pan.',
      'Salt after the mushrooms have browned.',
      'Use pasta water to loosen the sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed asparagus', 'White wine'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    nut: [700, 21, 73, 36, 4, 7, 810]
  },

  'fried-oysters': {
    d: 'Shucked oysters rolled in seasoned cornmeal and flour and fried for about 2 minutes a side until crisp outside and plump inside.',
    meta: 'Fried oysters with a crisp cornmeal coating, cooked for 3 minutes. Four servings, ready in 21 minutes with 15 minutes of prep.',
    kw: ['fried oysters', 'cornmeal fried oysters', 'southern fried oysters', 'crispy oysters', 'fried oysters recipe'],
    why: 'Why do fried oysters go wrong so often? Because they are cooked too long. An oyster is mostly water and protein, and it turns from plump and briny to rubbery and small in the time it takes to answer a message. The fat should be hot and the cooking time short.\n\nBuy shucked oysters in their liquor, drain them, and pat them dry. If you have fresh ones, open them yourself and keep the liquid for another dish. A damp oyster makes the coating slide off, and the surface moisture hits the oil as steam and spits. Season them, then coat in flour first, then egg, then the cornmeal mixture.\n\n**Mix cornmeal with flour, not on its own.** Plain cornmeal gives a gritty, heavy coating that can taste dry, while a mix of two parts cornmeal to one part flour gives a crunchy shell with a tender edge. Cayenne, paprika and salt in the mix give it its Southern character.\n\nFry at 190C in about 5 cm of oil, 6 oysters at a time. They are done in 2 minutes, when the coating is golden and floats. Drain on a rack and serve with lemon, hot sauce and tartare sauce.',
    ing: [
      '300 g shucked oysters, drained',
      '60 g plain flour',
      '2 eggs, beaten',
      '100 g fine cornmeal',
      '50 g plain flour, for the coating',
      '1 tsp paprika',
      '1/2 tsp cayenne pepper',
      '1 tsp salt',
      '250 ml vegetable oil, for frying',
      '1 lemon, cut into wedges',
      '4 tbsp tartare sauce'
    ],
    st: [
      'Pat the oysters dry. Put the 60 g flour in one bowl, the eggs in a second and the cornmeal, 50 g flour, paprika, cayenne and salt in a third.',
      'Heat the oil in a deep frying pan to 190C.',
      'Coat each oyster in flour, then egg, then the cornmeal mix, pressing firmly.',
      'Fry 6 at a time for 2 minutes, turning once, until golden. Drain on a wire rack.',
      'Serve immediately with the lemon wedges and tartare sauce.'
    ],
    tips: [
      'Dry the oysters well before coating.',
      'Fry quickly: 2 minutes is enough.',
      'Keep the oil at 190C.'
    ],
    pair: ['Tartare sauce', 'Hot sauce', 'Coleslaw', 'Chips'],
    store: 'Best eaten at once. They do not reheat well.',
    nut: [851, 15, 47, 67, 3, 2, 880]
  },

  'gammon-and-pineapple': {
    d: 'Gammon steaks grilled for 8 minutes a side and topped with a ring of caramelised pineapple, served with a fried egg or chips.',
    meta: 'Gammon and pineapple: grilled gammon steaks with caramelised pineapple rings. Four servings, ready in 35 minutes.',
    kw: ['gammon and pineapple', 'gammon steak with pineapple', 'grilled gammon steaks', 'gammon pineapple and egg', 'gammon steak recipe'],
    why: 'Snip the fat. This one instruction stops a gammon steak curling in the pan or under the grill, because the band of fat shrinks faster than the meat and drags the edge upward. Four or five cuts through the rind, about 1 cm deep, release the tension and let the steak lie flat.\n\nGammon is cured pork, so it is salty already and needs no seasoning beyond pepper. Choose steaks about 2 cm thick, cut from the leg, and pat them dry. If you find them very salty, soak them in cold water for 20 minutes beforehand, then dry them well.\n\n**Brush the pineapple with butter and a little brown sugar** and grill it until the edges blacken. The sugar caramelises quickly under the heat, turning the rings sticky, and the fruit acid cuts through the salt and fat of the ham.\n\nGrill the steaks for 8 minutes on each side under a hot grill, until the fat is crisp and the meat is cooked through, then rest them for 3 minutes. Put a pineapple ring on each steak, and serve with a fried egg if you want the full pub plate.',
    ing: [
      '4 gammon steaks, about 800 g',
      '1 tbsp vegetable oil',
      '1/2 tsp black pepper',
      '4 pineapple rings, tinned in juice, drained',
      '20 g butter, melted',
      '1 tbsp light brown sugar',
      '4 eggs',
      '1 tbsp parsley, chopped'
    ],
    st: [
      'Heat the grill to high. Snip the rind of each steak in 4 or 5 places. Rub with the oil and pepper.',
      'Grill the steaks for 8 minutes, then turn and grill for 8 minutes more until cooked through and crisp at the fat. Rest for 3 minutes.',
      'Brush the pineapple rings with the melted butter and sprinkle with the sugar. Grill for 3 minutes until caramelised at the edges.',
      'Fry the eggs in a lightly oiled pan until the whites are set.',
      'Top each steak with a pineapple ring and an egg, scatter with parsley and serve.'
    ],
    tips: [
      'Snip the fat so the steak stays flat.',
      'Soak very salty steaks in cold water first.',
      'Watch the pineapple closely under the grill.'
    ],
    pair: ['Chips', 'Peas', 'Fried egg', 'Mustard'],
    store: 'Best eaten fresh. Leftover gammon keeps for 2 days in the fridge.',
    nut: [442, 47, 14, 22, 1, 12, 2260]
  },

  'garlic-butter-salmon': {
    d: 'Salmon fillets roasted at 200C for 12 minutes under a garlic butter and lemon mixture until the flesh flakes in moist layers.',
    meta: 'Garlic butter salmon roasted with lemon and herbs for 12 minutes. Four servings, ready in 17 minutes.',
    kw: ['garlic butter salmon', 'baked garlic butter salmon', 'lemon butter salmon', 'oven roasted salmon fillets', 'salmon with garlic butter'],
    why: 'Salmon in garlic butter has the reputation of a restaurant dish, and the effort is a spoon, a bowl and one tray. The sauce is butter melted with garlic, lemon, parsley and a pinch of paprika, and it bastes the fish as it roasts so that the flesh stays moist and glossy.\n\nTake the salmon out of the fridge 10 minutes before cooking so it does not go into the oven stone cold. Pat the fillets dry, season with salt and pepper, and set them on a lined tray. A skin-on fillet holds together better and the skin protects the flesh from the heat of the tray.\n\n**Spoon half of the butter over before roasting and half after.** The first half cooks into the fish and the second half stays fresh and bright, with the garlic still tasting of garlic rather than something baked down to a mellow note.\n\nTwelve minutes at 200C suits a fillet about 3 cm thick. The flesh should flake with gentle pressure and be slightly translucent at the very centre, which carries on cooking as it rests. Overcooked salmon turns pale and dry, with white protein beading on the surface.',
    ing: [
      '4 salmon fillets, about 600 g, skin on',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '60 g butter, melted',
      '4 garlic cloves, crushed',
      '1 lemon, juiced, plus wedges to serve',
      '2 tbsp parsley, chopped',
      '1/2 tsp smoked paprika'
    ],
    st: [
      'Heat the oven to 200C and line a tray with baking paper. Pat the salmon dry and season with the salt and pepper.',
      'Mix the melted butter, garlic, lemon juice, half the parsley and the paprika.',
      'Place the fillets skin side down on the tray and spoon over half of the garlic butter.',
      'Roast for 12 minutes until the flesh flakes easily.',
      'Spoon over the rest of the butter, scatter with the remaining parsley and serve with the lemon wedges.'
    ],
    tips: [
      'Spoon half the butter on after roasting for fresh flavour.',
      'Check at 10 minutes for thinner fillets.',
      'Leave the skin on to protect the flesh.'
    ],
    pair: ['Roast potatoes', 'Asparagus', 'Rice', 'Green salad'],
    store: 'Keeps for 2 days in the fridge and is good cold in salads.',
    nut: [424, 31, 3, 32, 1, 0, 360]
  },

  'glazed-parsnips': {
    d: 'Parsnip batons roasted at 200C for 30 minutes and tossed in a honey, mustard and butter glaze until sticky and caramelised.',
    meta: 'Glazed parsnips with honey and mustard, roasted for 30 minutes until sticky. Six servings, ready in 40 minutes.',
    kw: ['glazed parsnips', 'honey glazed parsnips', 'roasted parsnips', 'honey mustard parsnips', 'christmas parsnips'],
    why: 'This is what to make in the first cold week of the year, when parsnips are sweetest. A frost converts some of their starch to sugar, which is why the best parsnips come from the ground in late autumn and winter, and why they caramelise so readily in a hot oven.\n\nCut the parsnips into batons of an even size, about 1 cm thick, so they cook at the same rate. If the core is woody on a large parsnip, cut it out. Parboiling them for 5 minutes before roasting gives a fluffy centre and gives the surface enough roughness to catch the oil and brown.\n\n**Add the glaze at the end, not at the start.** Honey burns at roasting temperatures, so the parsnips go into the oven with only oil and salt. Take them out after 25 minutes, toss them in the honey, mustard and melted butter, then return them for the last 5 to 8 minutes. The glaze sets into a lacquer without scorching.\n\nServe them straight from the tray, scattered with thyme leaves. They suit a roast dinner, and are good cold the next day in a winter salad.',
    ing: [
      '900 g parsnips, peeled and cut into batons',
      '3 tbsp olive oil',
      '1 tsp salt',
      '3 tbsp honey',
      '1 tbsp wholegrain mustard',
      '20 g butter, melted',
      '1 tbsp fresh thyme leaves'
    ],
    st: [
      'Heat the oven to 200C. Boil the parsnips in salted water for 5 minutes, then drain and steam dry for 2 minutes.',
      'Toss with the olive oil and salt and spread on a large tray. Roast for 25 minutes, turning once.',
      'Mix the honey, mustard and melted butter. Pour over the parsnips and toss.',
      'Roast for 5 minutes more until sticky and deep golden.',
      'Scatter with the thyme leaves and serve.'
    ],
    tips: [
      'Add the glaze late to avoid burning.',
      'Cut out woody cores on large parsnips.',
      'Steam the parboiled parsnips dry before roasting.'
    ],
    pair: ['Roast chicken', 'Roast beef', 'Brussels sprouts', 'Gravy'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot oven for 8 minutes.',
    nut: [242, 2, 36, 10, 7, 16, 460]
  },

  'grilled-chicken-sandwich': {
    d: 'Marinated chicken breast grilled for about 6 minutes a side, then served in a toasted bun with lettuce, tomato and a garlic mayonnaise.',
    meta: 'Grilled chicken sandwich with a lemon marinade, garlic mayo and toasted bun. Four servings, ready in 27 minutes.',
    kw: ['grilled chicken sandwich', 'grilled chicken burger', 'chicken breast sandwich', 'lemon herb grilled chicken sandwich', 'chicken sandwich recipe'],
    why: 'The smell is the first sign: lemon, garlic and thyme hitting a hot grill. A grilled chicken sandwich should be juicy and a little charred, not the dry, grey slab that many versions turn out. Most of the work happens before the chicken meets the heat.\n\nA chicken breast is thick at one end and thin at the other, which means the thin end overcooks long before the thick end is done. Slice each breast in half horizontally into two thin cutlets, or pound the thick end flat with a rolling pin until the whole piece is an even 1.5 cm. Thin, even cutlets cook in about 6 minutes a side.\n\n**Marinate for at least 30 minutes.** A mix of lemon juice, olive oil, garlic and thyme tenderises the surface and flavours the meat. Do not leave it longer than 4 hours, because the acid starts to turn the outer layer mushy.\n\nGrill over a medium-high heat and avoid pressing down, which squeezes out the juices. The cutlets are done at 74C. Toast the cut sides of the buns on the grill for a minute, spread with garlic mayonnaise, and build the sandwich with lettuce and tomato.',
    ing: [
      '2 chicken breasts, about 600 g, sliced in half horizontally',
      '3 tbsp olive oil',
      '1 lemon, juiced',
      '2 garlic cloves, crushed',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 burger buns',
      '4 tbsp mayonnaise',
      '1 garlic clove, crushed, for the mayonnaise',
      '4 lettuce leaves',
      '1 tomato, sliced'
    ],
    st: [
      'Mix the olive oil, lemon juice, 2 garlic cloves, thyme, salt and pepper. Coat the chicken and marinate for at least 30 minutes.',
      'Heat a griddle pan or barbecue over medium-high heat. Grill the chicken for 6 minutes per side, until cooked through and a thermometer reads 74C.',
      'Rest the chicken for 3 minutes. Toast the buns, cut sides down, for 1 minute.',
      'Mix the mayonnaise with the remaining crushed garlic clove.',
      'Spread the mayonnaise on the buns and fill with the lettuce, tomato and chicken.'
    ],
    tips: [
      'Slice or pound the chicken to an even thickness.',
      'Do not marinate longer than 4 hours.',
      'Rest the chicken before assembling.'
    ],
    pair: ['Sweet potato fries', 'Coleslaw', 'Corn on the cob', 'Pickles'],
    store: 'Keeps for 2 days in the fridge. Eat cold in a salad.',
    nut: [515, 39, 29, 27, 2, 5, 990]
  },

  'grilled-octopus': {
    d: 'Octopus simmered gently for an hour until tender, then charred on a hot grill and dressed with olive oil, lemon and oregano.',
    meta: 'Grilled octopus, simmered until tender and charred on the grill with lemon and oregano. Four servings, ready in 1 hour 20 minutes.',
    kw: ['grilled octopus', 'greek grilled octopus', 'octopus with lemon and oregano', 'charred octopus', 'tender octopus recipe'],
    why: 'It looks like a project and is really just patience. Octopus is chewy until it has been simmered long enough for the collagen to melt, and there is no way to shortcut that stage. About an hour at a bare simmer is what a 1 kg octopus needs, and the result is a tender texture with a little spring.\n\nThe Greek tradition is to beat the octopus on rocks to tenderise it, but these days most are sold frozen, and freezing has already broken down some of the fibres. Thaw it in the fridge overnight, rinse it, and put it into the pot with a bay leaf, a few peppercorns and a splash of white wine vinegar.\n\n**Do not add salt to the cooking water.** The octopus releases its own salty liquid, and extra salt toughens the skin. Keep the water at a gentle bubble, with the lid on slightly ajar, and test a tentacle after 50 minutes with a knife. It should slide in with a little resistance.\n\nCool the octopus in its liquid, then cut into tentacles and char them on a very hot grill for 3 minutes a side. Dress them while hot with olive oil, lemon juice, oregano and sea salt, and serve with bread.',
    ing: [
      '1 kg octopus, cleaned',
      '2 bay leaves',
      '1 tsp black peppercorns',
      '2 tbsp white wine vinegar',
      '4 tbsp olive oil',
      '2 lemons',
      '1 tsp dried oregano',
      '1/2 tsp flaky sea salt',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Put the octopus, bay leaves, peppercorns and vinegar in a large pot and cover with cold water. Bring to a gentle simmer.',
      'Cook with the lid ajar for 60 minutes, until a knife slides into the thickest tentacle with slight resistance.',
      'Let the octopus cool in its liquid for 15 minutes, then lift out and cut into tentacles.',
      'Heat a grill or griddle pan until very hot. Brush the tentacles with 1 tbsp of the oil and char for 3 minutes per side.',
      'Toss with the remaining oil, the juice of 1 lemon, the oregano, salt and parsley. Serve with the other lemon cut into wedges.'
    ],
    tips: [
      'Do not salt the cooking water.',
      'Test a tentacle with a knife for tenderness.',
      'Dress the octopus while it is hot.'
    ],
    pair: ['Crusty bread', 'Greek salad', 'Fava puree', 'White wine'],
    store: 'Keeps for 2 days in the fridge. Eat cold with lemon and oil.',
    nut: [332, 38, 9, 16, 1, 1, 870]
  },

  'grilled-sea-bass': {
    d: 'Sea bass fillets brushed with olive oil and grilled skin side up for about 4 minutes a side, finished with lemon, capers and parsley.',
    meta: 'Grilled sea bass with lemon, capers and parsley, cooked in 10 minutes. Two servings, ready in 20 minutes.',
    kw: ['grilled sea bass', 'grilled sea bass fillets', 'sea bass with capers', 'mediterranean sea bass', 'lemon grilled sea bass'],
    why: 'It looks like a restaurant dish and takes less time than the potatoes. Grilled sea bass is mostly a matter of good fish, a hot grill and the discipline to leave it alone. Fillets with the skin on cook evenly and the skin crisps into something worth eating.\n\nPat the fillets dry, brush the skin with olive oil, and season with salt. The skin must be bone dry or it will steam instead of blistering. Score it with two or three shallow cuts, which stops the fillet curling under the heat and lets the oil reach the flesh.\n\n**Start skin side up under a very hot grill**, about 8 cm from the element, for 4 minutes. Then turn the fish and give it another 2 to 3 minutes. This sequence cooks the flesh from the top while the skin crisps against the hot tray, and the fish stays moist.\n\nThe sauce is raw and quick: olive oil, lemon juice, capers and parsley, spooned over just before serving. It is bright and salty, and a good match for the sweet, delicate flesh of sea bass.',
    ing: [
      '2 sea bass fillets, about 300 g, skin on',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '1 lemon, half juiced and half in wedges',
      '1 tbsp capers, drained',
      '2 tbsp parsley, chopped',
      '1 garlic clove, finely chopped'
    ],
    st: [
      'Heat the grill to its highest setting. Pat the fillets dry, score the skin 2 or 3 times and brush with 1 tbsp of the olive oil. Season with the salt.',
      'Place the fillets skin side up on a lined tray, about 8 cm from the grill. Cook for 4 minutes.',
      'Turn the fillets and grill for 2 to 3 minutes more until the flesh is opaque and flakes.',
      'Mix the remaining oil with the lemon juice, capers, parsley and garlic.',
      'Spoon over the fish and serve with the lemon wedges.'
    ],
    tips: [
      'Dry the skin completely.',
      'Score the skin to stop the fillets curling.',
      'Spoon the sauce on just before serving.'
    ],
    pair: ['New potatoes', 'Green beans', 'Tomato salad', 'Couscous'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge.',
    nut: [294, 29, 4, 18, 1, 1, 790]
  }
};
