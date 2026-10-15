'use strict';

/**
 * Volume fifty-four — one pot dinners, sheet pan meals, slow cooker favourites
 * and weeknight classics, third part.
 *
 * Twenty-five dishes: eighteen slow cooker recipes (chicken and dumplings,
 * cottage pie, dal, egg casserole, French onion soup, hash brown casserole,
 * jambalaya, lamb curry, lasagna, pasta, carnitas, pulled pork, risotto,
 * salmon, short ribs, stuffing, turkey breast, a whole chicken), a smoked
 * salmon dip, Southern mac and cheese, spaghetti pomodoro, spaghetti alla
 * Norma, oven spare ribs, a spatchcock chicken and a stovetop mac and cheese.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'slow-cooker-chicken-and-dumplings': {
    d: 'Chicken thighs and vegetables slow cooked on low for 5 hours in a creamy broth, topped with herb dumplings for the final 30 minutes.',
    meta: 'Slow cooker chicken and dumplings with vegetables and herb dumplings, cooked for 5 hours. Six servings, ready in 5 hours 20 minutes.',
    kw: ['slow cooker chicken and dumplings', 'crockpot chicken and dumplings', 'chicken and dumplings from scratch', 'herb dumplings', 'chicken dumpling stew'],
    why: 'A Sunday dish for a table of six, and better on a cold day than almost anything. Chicken and dumplings is a Southern American comfort classic, a soup-stew thick enough to stand a spoon in, topped with soft clouds of dough that steam on the surface.\n\nThe stew base cooks for 5 hours on low: chicken thighs, carrots, celery, onion and a little thyme, in chicken stock thickened with a spoon of flour. Lift the thighs out at the end, shred the meat, and stir it back in. Taste it before the dumplings go in, because they will dilute the seasoning.\n\n**Mix the dumpling dough just until combined.** Flour, baking powder, salt, butter and milk are stirred together into a sticky, lumpy dough, no more. Overmixing builds gluten and makes dense, rubbery dumplings. Drop spoonfuls onto the surface of the hot stew, spaced apart, and do not lift the lid for 30 minutes.\n\nThey are ready when they have doubled in size and a skewer pushed into the centre comes out clean. Switch to high when you add them, so the steam builds quickly. Serve the stew immediately, since the dumplings soften and absorb the broth as they stand.',
    ing: [
      '800 g chicken thighs, boneless and skinless',
      '3 carrots, sliced',
      '3 celery sticks, sliced',
      '1 onion, diced',
      '3 garlic cloves, crushed',
      '1 litre chicken stock',
      '2 tbsp plain flour',
      '1 tsp dried thyme',
      '1 bay leaf',
      '1 tsp salt',
      '150 g frozen peas',
      '200 g plain flour, for the dumplings',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '40 g cold butter, cubed',
      '150 ml milk',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Put the chicken, carrots, celery, onion, garlic, stock, 2 tbsp flour, thyme, bay leaf and 1 tsp salt in the slow cooker. Stir well.',
      'Cover and cook on low for 4 hours 30 minutes. Lift out the chicken, shred it and stir back in with the peas.',
      'Mix the 200 g flour, baking powder and 1/2 tsp salt. Rub in the butter, then stir in the milk and parsley until just combined.',
      'Switch the cooker to high. Drop spoonfuls of the dough onto the stew, cover and cook for 30 minutes without lifting the lid.',
      'Check that a skewer in a dumpling comes out clean and serve at once.'
    ],
    tips: [
      'Do not overmix the dumpling dough.',
      'Keep the lid on while the dumplings cook.',
      'Taste the stew before adding the dumplings.'
    ],
    pair: ['Green beans', 'Crusty bread', 'Pickles', 'Black pepper'],
    store: 'The stew keeps for 3 days in the fridge, but the dumplings soften. Freeze the stew without them.',
    nut: [417, 35, 40, 13, 4, 6, 1480]
  },

  'slow-cooker-cottage-pie': {
    d: 'Beef mince and vegetables in a rich gravy cooked on low for 5 hours, then topped with mashed potato and browned under the grill.',
    meta: 'Slow cooker cottage pie with a rich beef filling and mashed potato topping, cooked for 5 hours. Six servings, ready in 5 hours 25 minutes.',
    kw: ['slow cooker cottage pie', 'crockpot cottage pie', 'cottage pie with beef mince', 'beef and potato pie', 'cottage pie recipe'],
    why: 'Cottage pie is a British dish of minced beef under a lid of mashed potato, and its name comes from the cottages of the rural poor who ate it. Shepherd\'s pie is the same with lamb. The slow cooker version cooks the filling without watching, leaving only the potato and the grill for the last half hour.\n\nBrown the mince in a frying pan first and drain off the fat, since a slow cooker will not brown meat. Then add it to the pot with carrots, onion, celery, tomato purée, Worcestershire sauce and stock. A spoonful of flour stirred through the mince thickens the gravy as it cooks.\n\n**The filling should be thick, not soupy.** After 5 hours on low, if it looks loose, take the lid off and cook on high for 20 minutes. A wet filling sinks the mashed potato topping into itself, and a thick one holds it up.\n\nFor the mash, boil floury potatoes, drain them well and mash with butter and a little milk. Spread it over the filling in a dish and fork it into ridges, which brown and crisp under the grill. Scatter with cheddar for the last few minutes if you like.',
    ing: [
      '1 tbsp vegetable oil',
      '800 g beef mince',
      '1 onion, diced',
      '3 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, crushed',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '2 tbsp Worcestershire sauce',
      '400 ml beef stock',
      '1 tsp dried thyme',
      '1 tsp salt',
      '150 g frozen peas',
      '1 kg floury potatoes, peeled and chopped',
      '60 g butter',
      '80 ml milk',
      '50 g cheddar, grated'
    ],
    st: [
      'Brown the mince in the oil in a large pan for 8 minutes. Drain off the fat. Stir in the flour for 1 minute.',
      'Put the mince, onion, carrots, celery, garlic, tomato purée, Worcestershire sauce, stock, thyme and salt in the slow cooker.',
      'Cover and cook on low for 5 hours. Stir in the peas and, if the filling is thin, cook on high with the lid off for 20 minutes.',
      'Boil the potatoes in salted water for 18 minutes, drain, and mash with the butter and milk.',
      'Spoon the filling into a dish, top with the mash and cheddar, and grill for 8 minutes until golden.'
    ],
    tips: [
      'Brown the mince before it goes in the cooker.',
      'Thicken the filling so the topping sits on top.',
      'Fork the mash into ridges for a crisp surface.'
    ],
    pair: ['Green beans', 'Peas', 'Red cabbage', 'Brown sauce'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [610, 34, 42, 34, 7, 7, 860]
  },

  'slow-cooker-dal': {
    d: 'Yellow split lentils slow cooked on low for 6 hours with onion, tomato, ginger and turmeric, finished with a sizzling garlic and cumin tarka.',
    meta: 'Slow cooker dal with yellow split lentils and a garlic cumin tarka, cooked for 6 hours. Six servings, ready in 6 hours 10 minutes.',
    kw: ['slow cooker dal', 'crockpot dal', 'yellow lentil dal', 'dal tadka', 'indian lentil dal'],
    why: 'Why does dal made in a slow cooker taste so much creamier? Because the lentils have six hours to break down fully, and what starts as separate grains ends as a smooth, golden porridge with a deep flavour. There is no need to blend it.\n\nUse yellow split lentils such as toor dal or chana dal, rinsed until the water runs clear. Put them in the cooker with water, chopped onion, tomatoes, grated ginger, turmeric and salt, and leave it. Do not add salt late: lentils cook perfectly well in salted water now, despite the old advice.\n\n**The tarka is what makes it dal.** In a small pan, heat ghee or oil until hot, then fry cumin seeds, sliced garlic and dried red chillies for about a minute until the garlic turns pale gold and the seeds crackle. Pour the sizzling mixture over the finished dal and stir through. It adds a smoky, nutty aroma that no amount of slow cooking can produce.\n\nA squeeze of lemon at the end brightens the earthiness of the lentils. Serve with rice or flatbread. If the dal has thickened on standing, thin it with hot water to the consistency of soup.',
    ing: [
      '300 g yellow split lentils, rinsed',
      '1.4 litres water',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tbsp fresh ginger, grated',
      '1 tsp turmeric',
      '1.5 tsp salt',
      '2 tbsp ghee',
      '1 tsp cumin seeds',
      '4 garlic cloves, sliced',
      '2 dried red chillies',
      '1 lemon, juiced',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Put the lentils, water, onion, tomatoes, ginger, turmeric and salt in the slow cooker.',
      'Cover and cook on low for 6 hours, stirring once or twice, until the lentils have broken down.',
      'Whisk the dal until smooth, adding hot water if too thick.',
      'Heat the ghee in a small pan. Fry the cumin seeds, garlic and chillies for 1 minute until golden and fragrant.',
      'Pour the tarka over the dal, stir in the lemon juice and scatter with the coriander.'
    ],
    tips: [
      'Rinse the lentils until the water runs clear.',
      'Make the tarka at the last moment.',
      'Thin with hot water if the dal thickens.'
    ],
    pair: ['Basmati rice', 'Roti', 'Cucumber raita', 'Lime pickle'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [250, 13, 36, 6, 9, 3, 600]
  },

  'slow-cooker-egg-casserole': {
    d: 'Hash browns, sausage, cheddar and eggs cooked in the slow cooker for 4 hours into a set, golden breakfast casserole for eight.',
    meta: 'Slow cooker egg casserole with hash browns, sausage and cheddar, cooked for 4 hours. Eight servings, ready in 4 hours 20 minutes.',
    kw: ['slow cooker egg casserole', 'crockpot breakfast casserole', 'hash brown egg casserole', 'sausage and egg slow cooker casserole', 'slow cooker breakfast bake'],
    why: 'Most slow cooker egg dishes come out rubbery at the edges and wet in the middle, and the fix is to line the pot and keep the heat low. Eggs set at a low temperature, so a gentle 4 hours on low gives a custardy, evenly set casserole with no browned edges.\n\nGrease the cooker thoroughly, or line it with a slow cooker liner or baking paper, which also makes lifting the cooked casserole out much easier. Layer frozen hash browns, browned sausage, grated cheddar and sliced spring onion, three times, so every portion has a bit of each. Pour the beaten eggs and milk over the top at the end.\n\n**Do not use fresh potatoes.** They release a lot of water as they cook, and give a soggy base. Frozen hash browns are pre-cooked and drier, so they hold the egg mix in place and crisp slightly at the bottom.\n\nIt is done when the centre is set and a knife comes out clean. Leave it with the lid off for 10 minutes before serving to let steam escape. Serve cut into wedges with hot sauce or ketchup.',
    ing: [
      '600 g frozen hash browns, shredded',
      '400 g pork sausage meat',
      '200 g cheddar, grated',
      '4 spring onions, sliced',
      '12 eggs',
      '250 ml milk',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1/2 tsp mustard powder'
    ],
    st: [
      'Brown the sausage meat in a pan for 8 minutes, breaking it up. Drain off any fat.',
      'Grease the slow cooker well or line it. Layer one third of the hash browns, sausage, cheddar and spring onions. Repeat twice.',
      'Whisk the eggs, milk, salt, pepper and mustard powder. Pour evenly over the layers.',
      'Cover and cook on low for 4 hours until set in the centre.',
      'Leave uncovered for 10 minutes, then cut into wedges and serve.'
    ],
    tips: [
      'Line the cooker for easy serving.',
      'Use frozen hash browns, not fresh potato.',
      'Test the centre with a knife.'
    ],
    pair: ['Hot sauce', 'Fresh fruit', 'Buttered toast', 'Orange juice'],
    store: 'Keeps for 3 days in the fridge. Reheat in the microwave for 1 minute.',
    nut: [481, 25, 21, 33, 2, 3, 1190]
  },

  'slow-cooker-french-onion-soup': {
    d: 'Sliced onions slow cooked for 8 hours into deep amber sweetness, then simmered with beef stock and sherry and finished with cheese toasts.',
    meta: 'Slow cooker French onion soup with caramelised onions and cheese toasts, cooked for 8 hours. Six servings, ready in 8 hours 20 minutes.',
    kw: ['slow cooker french onion soup', 'crockpot french onion soup', 'caramelised onion soup', 'french onion soup with gruyere', 'onion soup with cheese toast'],
    why: 'Why does French onion soup need so many onions? Because they shrink to almost nothing as they caramelise, and a pot that starts overflowing ends up a third full. Plan for about a kilo of onions for six bowls, and slice them evenly so they cook at the same rate.\n\nThe slow cooker makes the hardest part, the caramelising, nearly effortless. Instead of standing at the hob for 45 minutes, you put the sliced onions in with butter and salt, switch it on and leave it for 8 hours. The onions turn soft, dark and sweet as their sugars slowly brown. Salt helps by drawing out moisture.\n\n**Deglaze before the stock goes in.** After the 8 hours, stir in a splash of sherry or white wine and a spoon of flour, then the beef stock and thyme. Cook for another 30 minutes on high. The flour thickens the soup lightly and the sherry adds depth.\n\nFor the cheese toasts, toast slices of baguette, cover with grated Gruyère, and grill until bubbling. Float one on each bowl. Use ovenproof bowls and grill the bowl with the toast for 3 minutes if you want the cheese to melt over the rim.',
    ing: [
      '1 kg onions, thinly sliced',
      '50 g butter',
      '1 tsp salt',
      '1 tbsp plain flour',
      '100 ml dry sherry',
      '1.2 litres beef stock',
      '4 sprigs thyme',
      '1 bay leaf',
      '1/2 tsp black pepper',
      '6 slices baguette, about 100 g',
      '150 g Gruyère, grated'
    ],
    st: [
      'Put the onions, butter and salt in the slow cooker. Cover and cook on low for 8 hours, stirring once or twice, until deep amber.',
      'Stir in the flour, then the sherry, stock, thyme, bay leaf and pepper.',
      'Cover and cook on high for 30 minutes. Remove the thyme and bay leaf.',
      'Toast the baguette slices, top with the Gruyère and grill until bubbling.',
      'Ladle the soup into bowls and float a cheese toast on each.'
    ],
    tips: [
      'Slice the onions evenly.',
      'Stir once or twice during the long cook.',
      'Use Gruyère for the best melt.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Red wine', 'Cornichons'],
    store: 'The soup keeps for 4 days in the fridge or 3 months in the freezer. Make the toasts fresh.',
    nut: [312, 13, 29, 16, 4, 8, 1240]
  },

  'slow-cooker-hash-brown-casserole': {
    d: 'Frozen hash browns, cheddar, soured cream and cream of chicken soup cooked on low for 4 hours into a creamy side dish for eight.',
    meta: 'Slow cooker hash brown casserole with cheddar and soured cream, cooked for 4 hours. Eight servings, ready in 4 hours 10 minutes.',
    kw: ['slow cooker hash brown casserole', 'crockpot cheesy potatoes', 'funeral potatoes', 'hash brown casserole with cheese', 'cheesy hash brown bake'],
    why: 'Thaw the hash browns. That is the single most useful instruction here, because frozen potatoes dumped straight into a cooker release ice-cold water into the sauce, and the casserole turns thin and watery. Ten minutes on the counter is enough to take the chill off.\n\nThis is a Midwestern potluck staple often called funeral potatoes, made for gatherings because it feeds a crowd and travels in its own pot. The sauce is simple: condensed soup, soured cream, grated cheddar and onion, stirred through the potatoes and left to cook down. Here the condensed soup is replaced with a homemade white sauce, if you prefer.\n\n**Stir every hour only if you are home.** Most of the time the casserole needs no attention, but a stir halfway through brings the potatoes on the edge to the middle and keeps the sauce even. Do not lift the lid more than once.\n\nThe top will not crisp in a slow cooker, so add a crunchy topping of crushed cornflakes or crisps tossed with melted butter for the last 10 minutes. Scatter it over the surface and leave the lid ajar so the steam can escape.',
    ing: [
      '900 g frozen shredded hash browns, thawed',
      '400 g condensed cream of chicken soup',
      '250 g soured cream',
      '250 g cheddar, grated',
      '1 onion, finely chopped',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1/2 tsp garlic powder',
      '40 g cornflakes, crushed',
      '30 g butter, melted'
    ],
    st: [
      'Grease the slow cooker. Mix the hash browns, soup, soured cream, three quarters of the cheddar, onion, salt, pepper and garlic powder.',
      'Spread the mixture in the cooker. Cover and cook on low for 4 hours, stirring once after 2 hours.',
      'Mix the cornflakes with the melted butter.',
      'Scatter the remaining cheddar and the cornflakes over the top. Leave the lid ajar and cook for 10 minutes.',
      'Serve hot from the cooker.'
    ],
    tips: [
      'Thaw the hash browns so the sauce does not thin.',
      'Add the crunchy topping at the end.',
      'Stir once only, halfway through.'
    ],
    pair: ['Baked ham', 'Roast chicken', 'Green beans', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Reheat in the microwave or oven.',
    nut: [457, 13, 36, 29, 3, 4, 980]
  },

  'slow-cooker-jambalaya': {
    d: 'Chicken thighs, smoked sausage, peppers and tomatoes slow cooked for 3 hours 30 minutes, then rice and prawns added for the last 30 minutes.',
    meta: 'Slow cooker jambalaya with chicken, sausage, rice and prawns, cooked for 4 hours. Six servings, ready in 4 hours 20 minutes.',
    kw: ['slow cooker jambalaya', 'crockpot jambalaya', 'chicken sausage and prawn jambalaya', 'cajun jambalaya', 'jambalaya with rice'],
    why: 'Chicken, sausage, peppers and rice: four things, and a pot of Louisiana cooking that tastes of a long afternoon. Jambalaya is a rice dish related to Spanish paella and West African jollof, and this slow cooker version simplifies it without losing the character.\n\nThe backbone is the trinity of onion, celery and green pepper, with garlic, tomatoes and Cajun seasoning. Everything goes into the cooker with the chicken and sliced smoked sausage and cooks on low. The sausage releases its smoky, paprika-red fat, which flavours the whole pot.\n\n**Add the rice and prawns near the end.** Rice cooked for hours turns to mush, so stir it in for the last 30 to 40 minutes, with extra stock to keep the pot moist. Use long grain rice, not easy-cook, which holds its shape better. The prawns go in for the final 10 minutes, just long enough to turn pink.\n\nThe finished jambalaya should be moist but not soupy, with distinct grains. Taste and adjust with hot sauce and salt, and finish with spring onions and parsley. Serve straight from the pot with a bottle of hot sauce on the table.',
    ing: [
      '600 g chicken thighs, boneless, cut into chunks',
      '250 g smoked sausage, sliced',
      '1 onion, diced',
      '2 celery sticks, diced',
      '1 green pepper, diced',
      '4 garlic cloves, crushed',
      '400 g tinned chopped tomatoes',
      '1 tbsp Cajun seasoning',
      '1 tsp dried thyme',
      '1 bay leaf',
      '600 ml chicken stock',
      '250 g long grain rice',
      '250 g raw peeled prawns',
      '3 spring onions, sliced',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Put the chicken, sausage, onion, celery, pepper, garlic, tomatoes, Cajun seasoning, thyme, bay leaf and 300 ml of the stock in the slow cooker.',
      'Cover and cook on low for 3 hours.',
      'Stir in the rice and the remaining stock. Cover and cook on high for 30 minutes until the rice is tender.',
      'Add the prawns and cook for 10 minutes more until pink.',
      'Remove the bay leaf, stir in the spring onions and parsley and serve with hot sauce.'
    ],
    tips: [
      'Add the rice only at the end.',
      'Add the prawns for the last 10 minutes.',
      'Adjust the heat with Cajun seasoning and hot sauce.'
    ],
    pair: ['Hot sauce', 'Cornbread', 'Green salad', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of stock.',
    nut: [476, 39, 44, 16, 3, 4, 840]
  },

  'slow-cooker-lamb-curry': {
    d: 'Cubed lamb shoulder slow cooked on low for 6 hours in an onion, tomato and spice sauce until tender, finished with garam masala and coriander.',
    meta: 'Slow cooker lamb curry with a rich onion and tomato sauce, cooked for 6 hours. Six servings, ready in 6 hours 20 minutes.',
    kw: ['slow cooker lamb curry', 'crockpot lamb curry', 'lamb shoulder curry', 'tender lamb curry', 'indian lamb curry'],
    why: 'Lamb shoulder is a forgiving cut for curry, with enough fat and connective tissue to survive long cooking and to enrich the sauce. Over 6 hours on low it becomes silken, falling apart at the touch of a spoon, which is the whole point of putting it in a slow cooker.\n\nStart in a frying pan, not the cooker. Brown the lamb in batches for 4 minutes each, then cook onions for 10 minutes until deeply golden. This is the base of the sauce, and shortcuts here show in the finished dish. Add garlic, ginger, cumin, coriander, turmeric and chilli, and stir for a minute until they smell warm.\n\n**Do not add much liquid.** The lamb and onions release plenty of juice during the long cook, and a slow cooker loses almost nothing to evaporation. A tin of tomatoes and a small cup of water is enough. Too much liquid gives a thin, pale sauce.\n\nStir in garam masala and a spoon of yogurt at the end and let the curry sit for 10 minutes. The fresh spices lift the long-cooked flavours. Serve with rice or naan to catch the sauce, and scatter with coriander.',
    ing: [
      '1 kg lamb shoulder, boneless, cut into 4 cm cubes',
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '5 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp turmeric',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '100 ml water',
      '1 tsp salt',
      '1 tsp garam masala',
      '3 tbsp plain yogurt',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Heat 2 tbsp of the oil and brown the lamb in 3 batches for 4 minutes each. Transfer to the slow cooker.',
      'Add the remaining oil and cook the onions for 10 minutes until deep golden. Add the garlic, ginger, cumin, coriander, turmeric and chilli and stir for 1 minute.',
      'Add the tomatoes, water and salt to the pan, scrape the base and pour into the slow cooker.',
      'Cover and cook on low for 6 hours until the lamb is tender.',
      'Stir in the garam masala and yogurt, leave for 10 minutes, and scatter with the coriander.'
    ],
    tips: [
      'Brown the onions and lamb before they go in the cooker.',
      'Use little liquid.',
      'Add the garam masala at the end.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [529, 31, 9, 41, 2, 4, 530]
  },

  'slow-cooker-lasagna': {
    d: 'Layers of beef ragu, ricotta, mozzarella and dry lasagna sheets cooked on low for 4 hours until tender and bubbling.',
    meta: 'Slow cooker lasagna with beef ragu, ricotta and mozzarella, cooked for 4 hours. Eight servings, ready in 4 hours 30 minutes.',
    kw: ['slow cooker lasagna', 'crockpot lasagna', 'slow cooker lasagne with ricotta', 'no boil lasagna in slow cooker', 'beef lasagna slow cooker'],
    why: 'A Sunday dish for a table of eight, and the one time a slow cooker beats the oven for lasagna. The gentle, moist heat softens the pasta sheets without drying the edges, and the whole dish steams to a tender, sliceable stack. It also frees the oven for something else.\n\nUse dry no-boil sheets and break them to fit the shape of your cooker. They absorb the liquid from the sauce as they cook, so the ragu should be a little looser than for an oven lasagna. If it seems too thick, thin it with a splash of water before layering.\n\n**Start and end with sauce.** A layer of ragu on the base prevents the first layer of pasta from sticking, and a layer of sauce and cheese on top keeps the final sheets from drying out. In between, alternate sauce, sheets, ricotta mixture and mozzarella, overlapping the sheets slightly.\n\nCook on low for 4 hours, until the pasta is tender when pierced. The edges will brown slightly. Switch off and rest the lasagna with the lid off for 20 minutes, which lets it firm up so that slices hold together on the plate.',
    ing: [
      '1 tbsp olive oil',
      '600 g beef mince',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '800 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp dried oregano',
      '1 tsp salt',
      '250 g ricotta',
      '1 egg',
      '40 g parmesan, grated',
      '250 g dried no-boil lasagna sheets',
      '300 g mozzarella, grated'
    ],
    st: [
      'Brown the mince in the oil for 8 minutes. Add the onion and garlic for 4 minutes. Stir in the tomatoes, tomato purée, oregano and salt and simmer for 10 minutes.',
      'Mix the ricotta, egg and parmesan.',
      'Grease the slow cooker. Spread a layer of ragu, then break lasagna sheets over it. Add ricotta mixture, mozzarella and more ragu. Repeat to make 4 layers, finishing with ragu and mozzarella.',
      'Cover and cook on low for 4 hours until the pasta is tender.',
      'Turn off the heat, remove the lid and rest for 20 minutes before cutting.'
    ],
    tips: [
      'Start and end with a layer of sauce.',
      'Break the sheets to fit the cooker.',
      'Rest before slicing.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted vegetables', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 2 months in the freezer.',
    nut: [512, 34, 31, 28, 3, 5, 690]
  },

  'slow-cooker-pasta': {
    d: 'Penne, Italian sausage, peppers and passata cooked together in the slow cooker for 3 hours with mozzarella melted through the top.',
    meta: 'Slow cooker pasta with sausage, peppers and mozzarella, cooked for 3 hours. Six servings, ready in 3 hours 10 minutes.',
    kw: ['slow cooker pasta', 'crockpot sausage pasta', 'slow cooker penne with sausage', 'dump and cook pasta', 'slow cooker pasta bake'],
    why: 'Sausage, passata, penne, peppers: four things, and a pasta dish that makes itself while you are out. The dry pasta cooks directly in the sauce, so there is no separate pot of boiling water and no draining, and the starch it gives up thickens the sauce as it goes.\n\nThe liquid is the thing to get right. Pasta needs enough to swell, and a slow cooker keeps nearly all of it. Use equal volumes of passata and stock, and stir the pasta in so that every piece is below the surface. Dry penne in the top layer stays hard.\n\n**Add the pasta for the last 45 minutes, not the first.** Sausage and peppers can cook on low for 2 hours first to develop their flavour, but pasta left for 3 hours becomes soft mush. Stir it in, switch to high, and check at 30 minutes. It is done when tender with a slight bite.\n\nScatter the mozzarella on top, put the lid back for 10 minutes, and let it melt. The finish should be creamy and saucy, not dry. If the pasta has absorbed too much, a ladle of hot stock loosens it again.',
    ing: [
      '500 g Italian sausages, casings removed',
      '1 onion, diced',
      '2 peppers, sliced',
      '4 garlic cloves, crushed',
      '700 g passata',
      '500 ml chicken stock',
      '1 tsp dried oregano',
      '1/2 tsp chilli flakes',
      '1 tsp salt',
      '350 g dried penne',
      '200 g mozzarella, grated',
      '2 tbsp basil, torn'
    ],
    st: [
      'Brown the sausage meat in a pan for 6 minutes, breaking it up. Put it in the slow cooker.',
      'Add the onion, peppers, garlic, passata, stock, oregano, chilli flakes and salt. Cover and cook on low for 2 hours.',
      'Stir in the penne, making sure it is below the surface. Switch to high and cook for 45 minutes, stirring once.',
      'Scatter the mozzarella over the top, cover and leave for 10 minutes until melted.',
      'Scatter with the basil and serve.'
    ],
    tips: [
      'Keep the pasta submerged in the sauce.',
      'Add the pasta late so it does not turn to mush.',
      'Loosen with hot stock if it gets too thick.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Parmesan', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Add a splash of stock when reheating.',
    nut: [613, 29, 59, 29, 5, 11, 1660]
  },

  'slow-cooker-pork-carnitas': {
    d: 'Pork shoulder slow cooked for 8 hours with orange, cumin and oregano, shredded and crisped under the grill for taco night.',
    meta: 'Slow cooker pork carnitas with orange and cumin, crisped under the grill. Eight servings, cooked for 8 hours.',
    kw: ['slow cooker pork carnitas', 'crockpot carnitas', 'mexican pulled pork carnitas', 'carnitas tacos', 'crispy slow cooked carnitas'],
    why: 'A different method to the pressure cooker, and a different result. Eight hours on low gives carnitas a softer, more tender texture, with long, juicy strands that soak up the cooking liquid. It is the best choice for a day when you want to leave the house.\n\nUse a bone-in pork shoulder or a boneless one of about 2 kg. Cut it into large chunks, about 8 cm, so the surface area is smaller and the meat stays moist. Rub with salt, cumin, oregano and garlic, and put it in the cooker with the juice of an orange and a lime, a bay leaf and a halved onion. The citrus tenderises and balances the richness.\n\n**Crisp the shredded pork under the grill.** After 8 hours, lift the meat out, shred it on a tray, and spoon over a few tablespoons of the cooking liquid. Grill for 6 to 8 minutes, turning once, until the edges are caramelised and crisp. This is what makes it carnitas.\n\nSkim the fat from the liquid in the pot and keep it for drizzling over the pork. Serve in warm corn tortillas with diced onion, coriander, lime and salsa verde.',
    ing: [
      '2 kg pork shoulder, cut into 8 cm chunks',
      '2 tsp salt',
      '2 tsp ground cumin',
      '2 tsp dried oregano',
      '5 garlic cloves, crushed',
      '1 orange, juiced',
      '1 lime, juiced',
      '1 onion, halved',
      '2 bay leaves',
      '8 corn tortillas',
      '1 white onion, diced, to serve',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Rub the pork with the salt, cumin, oregano and garlic.',
      'Put the pork, orange juice, lime juice, halved onion and bay leaves in the slow cooker.',
      'Cover and cook on low for 8 hours until the meat falls apart.',
      'Heat the grill to high. Shred the pork on a tray and spoon over 4 tbsp of the skimmed cooking liquid. Grill for 7 minutes, turning once, until crisp at the edges.',
      'Serve in warm tortillas with the diced onion and coriander.'
    ],
    tips: [
      'Do not skip the grill step.',
      'Skim the fat before spooning over the juices.',
      'Cut the pork into large chunks.'
    ],
    pair: ['Lime wedges', 'Salsa verde', 'Pickled red onion', 'Refried beans'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [580, 47, 17, 36, 3, 3, 750]
  },

  'slow-cooker-pulled-pork': {
    d: 'A pork shoulder rubbed with paprika, brown sugar and mustard, slow cooked for 8 hours until it shreds with a fork and tossed in barbecue sauce.',
    meta: 'Slow cooker pulled pork with a smoky rub and barbecue sauce, cooked for 8 hours. Ten servings, ready in 8 hours 15 minutes.',
    kw: ['slow cooker pulled pork', 'crockpot pulled pork', 'bbq pulled pork', 'pulled pork shoulder', 'easy pulled pork for a crowd'],
    why: 'Keep the lid on. That is most of the recipe, and the part people skip. Pork shoulder is a fatty, collagen-rich cut that turns tender because of the steam trapped inside the cooker, and every lift of the lid lets it escape and adds up to 20 minutes to the cooking time.\n\nThe rub does a lot of work. Mix brown sugar, smoked paprika, garlic powder, onion powder, mustard powder, salt and black pepper, and press it firmly all over the pork. Even a few hours in the fridge helps. Sit the shoulder on a sliced onion to keep it off the base, and add only a splash of liquid, since the pork releases its own.\n\n**Shred the meat, then stir it back into the juices.** After 8 hours, lift the pork onto a tray, discard the bone and fat, and pull it apart with two forks. Skim the fat from the liquid in the pot, return the meat, and add the barbecue sauce. The pork soaks it up while it sits.\n\nPile the pulled pork onto soft buns with coleslaw, or serve it over baked potatoes. It freezes well in portions and makes quick lunches for weeks.',
    ing: [
      '2.5 kg pork shoulder, bone in',
      '3 tbsp light brown sugar',
      '2 tbsp smoked paprika',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp mustard powder',
      '2 tsp salt',
      '1 tsp black pepper',
      '1 onion, sliced',
      '120 ml chicken stock',
      '200 g barbecue sauce'
    ],
    st: [
      'Mix the sugar, paprika, garlic powder, onion powder, mustard powder, salt and pepper. Rub it all over the pork.',
      'Spread the onion in the slow cooker, pour in the stock and set the pork on top.',
      'Cover and cook on low for 8 hours without lifting the lid, until the pork shreds easily.',
      'Lift the pork onto a tray, discard the bone and fat, and shred the meat. Skim the fat off the juices.',
      'Return the pork to the cooker, stir in the barbecue sauce and warm through for 10 minutes.'
    ],
    tips: [
      'Do not lift the lid during cooking.',
      'Skim the fat before returning the meat.',
      'Add the sauce at the end, not the start.'
    ],
    pair: ['Soft buns', 'Coleslaw', 'Baked beans', 'Pickles'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [555, 46, 14, 35, 1, 11, 860]
  },

  'slow-cooker-risotto': {
    d: 'Arborio rice, stock, onion, white wine and parmesan cooked on high for 2 hours 30 minutes in the slow cooker into a creamy risotto.',
    meta: 'Slow cooker risotto with arborio rice, white wine and parmesan, cooked for 2 hours 30 minutes. Four servings, ready in 2 hours 45 minutes.',
    kw: ['slow cooker risotto', 'crockpot risotto', 'creamy parmesan risotto', 'hands off risotto', 'arborio rice risotto slow cooker'],
    why: 'Most people think a risotto needs 20 minutes of stirring. It does not, if you are willing to change the method. In a slow cooker the rice cooks gently in a closed pot, the starch releases slowly, and the result is creamy and evenly cooked without anyone standing over it.\n\nThe key is to use arborio rice, which has the high starch that makes a risotto creamy, and to toast it in butter on the hob first. A couple of minutes in the pan with the onion and garlic coats each grain in fat, which keeps them separate and nutty. Then the wine goes in, sizzles away, and everything is transferred to the cooker with hot stock.\n\n**Do not lift the lid or add more rice than the recipe says.** A slow cooker has little evaporation, so the ratio of liquid to rice is more exact than on the hob. Use 4 parts stock to 1 part rice by volume, and stir only at the end. Check at 2 hours.\n\nFinish with the butter and parmesan off the heat, stirring vigorously for a minute, which brings the creamy texture together. A final splash of hot stock loosens it if it has set. Serve at once in warm bowls, as risotto stiffens as it cools.',
    ing: [
      '40 g butter',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '300 g arborio rice',
      '120 ml dry white wine',
      '1.1 litres hot chicken stock',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '60 g parmesan, grated',
      '30 g butter, cubed',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Melt the 40 g butter in a pan and cook the onion for 5 minutes. Add the garlic and rice and stir for 2 minutes until the grains turn translucent at the edges.',
      'Pour in the wine and let it sizzle away. Tip the rice into the slow cooker.',
      'Add the hot stock, salt and pepper and stir once.',
      'Cover and cook on high for 2 hours 30 minutes, until the rice is tender with a slight bite.',
      'Stir in the parmesan and cubed butter vigorously for 1 minute, scatter with parsley and serve.'
    ],
    tips: [
      'Use arborio rice for a creamy result.',
      'Do not lift the lid before 2 hours.',
      'Add a splash of hot stock if it sets.'
    ],
    pair: ['Roast chicken', 'Green salad', 'Grilled mushrooms', 'White wine'],
    store: 'Best eaten at once. Leftover risotto makes good rice cakes.',
    nut: [500, 14, 66, 20, 2, 1, 1730]
  },

  'slow-cooker-salmon': {
    d: 'Salmon fillets on a bed of lemon and dill cooked on low for 1 hour in the slow cooker until just opaque and tender.',
    meta: 'Slow cooker salmon with lemon and dill, cooked on low for 1 hour. Four servings, ready in 1 hour 10 minutes.',
    kw: ['slow cooker salmon', 'crockpot salmon', 'poached salmon in slow cooker', 'lemon dill salmon fillets', 'gentle cooked salmon'],
    why: 'The first sign it is ready is the colour: a deep coral turning to a pale, opaque pink at the edges. Salmon cooked slowly at a low temperature stays soft and silky, because the proteins set gradually rather than tightening all at once. It is the gentlest way to cook a fish fillet.\n\nA slow cooker holds a very even heat, so it works well as a poacher. Line the base with lemon slices and sprigs of dill, which lift the fillets off the bottom and scent the steam. Add a small amount of white wine or water, about 100 ml, and lay the fillets on top, skin side down, in a single layer.\n\n**Check at 45 minutes.** Cooker temperatures vary, and thin tail pieces cook faster than thick centre cuts. The fish is ready when it flakes easily and the flesh has just turned from translucent to opaque. One hour is a guide, not a promise.\n\nLift the fillets out carefully with a fish slice. Make a quick sauce from a spoon of mayonnaise, lemon juice, chopped capers and dill, and serve it cold against the warm, soft salmon with boiled potatoes.',
    ing: [
      '4 salmon fillets, about 600 g, skin on',
      '1 lemon, sliced',
      '6 sprigs dill',
      '100 ml dry white wine',
      '3/4 tsp salt',
      '1/4 tsp black pepper',
      '4 tbsp mayonnaise',
      '1 tbsp lemon juice',
      '1 tbsp capers, chopped',
      '1 tbsp fresh dill, chopped'
    ],
    st: [
      'Line the base of the slow cooker with the lemon slices and dill sprigs. Pour in the wine.',
      'Season the salmon with the salt and pepper and lay it skin side down on the lemon in a single layer.',
      'Cover and cook on low for 1 hour, checking at 45 minutes, until the salmon flakes easily.',
      'Mix the mayonnaise, lemon juice, capers and chopped dill.',
      'Lift out the fillets carefully and serve with the sauce.'
    ],
    tips: [
      'Check at 45 minutes.',
      'Use a fish slice to lift the fillets out.',
      'Lay the fillets in a single layer.'
    ],
    pair: ['Boiled potatoes', 'Green beans', 'Cucumber salad', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge and is good cold.',
    nut: [402, 30, 3, 30, 1, 1, 640]
  },

  'slow-cooker-short-ribs': {
    d: 'Beef short ribs browned and slow cooked for 8 hours in red wine, stock and tomato until the meat slides from the bone.',
    meta: 'Slow cooker short ribs in red wine and tomato, cooked for 8 hours. Four servings, ready in 8 hours 20 minutes.',
    kw: ['slow cooker short ribs', 'crockpot beef short ribs', 'braised short ribs in red wine', 'fall off the bone short ribs', 'beef short ribs recipe'],
    why: 'Keep the heat low. That is most of the recipe, and the part that makes short ribs worth the wait. These are a fatty, bony, collagen-rich cut from the lower ribs, and they need long, slow cooking for the tough connective tissue to melt into a rich, sticky sauce.\n\nBrown the ribs first. Season them well, sear on all sides in a hot pan for about 8 minutes in total, and take them out. The deep brown crust adds flavour that the cooker cannot build alone. Use the same pan to soften onions, carrots and garlic, then pour in red wine and let it bubble down by half.\n\n**Set the ribs bone side up, standing on end if possible.** The bones keep the meat out of the cooking liquid, so it braises in steam, and the fat melts down over the top. A tight fit keeps the liquid level shallow, which concentrates the flavour.\n\nAfter 8 hours on low, the meat should be tender enough to come off the bone with a spoon. Lift the ribs out, skim the fat from the sauce, and reduce it in a pan for 10 minutes. Serve the ribs over creamy mash or polenta with the sauce spooned over.',
    ing: [
      '1.2 kg beef short ribs, bone in',
      '1.5 tsp salt',
      '1 tsp black pepper',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 carrots, chopped',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '250 ml red wine',
      '250 ml beef stock',
      '3 sprigs thyme',
      '2 bay leaves'
    ],
    st: [
      'Season the ribs with the salt and pepper. Heat the oil in a large pan and brown the ribs in batches for 8 minutes in total each. Transfer to the slow cooker.',
      'Cook the onion and carrots in the pan for 5 minutes. Add the garlic and tomato purée for 1 minute.',
      'Pour in the wine and bubble for 5 minutes. Add the stock and pour over the ribs. Tuck in the thyme and bay leaves.',
      'Cover and cook on low for 8 hours until the meat is falling from the bone.',
      'Lift out the ribs. Skim the fat, reduce the sauce in a pan for 10 minutes, and spoon over the ribs.'
    ],
    tips: [
      'Brown the ribs for flavour.',
      'Skim the fat from the sauce.',
      'Reduce the sauce before serving.'
    ],
    pair: ['Creamy mashed potatoes', 'Soft polenta', 'Green beans', 'Red wine'],
    store: 'Keeps for 4 days in the fridge in the sauce, or 3 months in the freezer.',
    nut: [954, 44, 10, 82, 2, 4, 1310]
  },

  'slow-cooker-stuffing': {
    d: 'Cubed bread, celery, onion, sage and stock cooked on low for 4 hours in the slow cooker to free the oven on Christmas or Thanksgiving day.',
    meta: 'Slow cooker stuffing with sage, celery and onion, cooked for 4 hours. Ten servings, ready in 4 hours 20 minutes.',
    kw: ['slow cooker stuffing', 'crockpot stuffing', 'thanksgiving stuffing in slow cooker', 'sage and onion stuffing', 'make ahead stuffing'],
    why: 'This is what to make for the big holiday dinner, when the oven is full and every shelf is spoken for. A slow cooker holds the stuffing at a gentle temperature for hours without needing attention, and it stays moist where an oven version can dry at the edges.\n\nThe bread is the foundation. Use a sturdy loaf, a day or two old, cut into 2 cm cubes and dried in a low oven for 30 minutes so that it does not turn to paste. The cooked onion and celery add flavour and moisture, and a generous handful of sage gives the unmistakable scent of a roast dinner.\n\n**Do not overload the stock.** Slow cookers hold moisture, and a stuffing that looks right going in will be soggy by the end. Use about 500 ml of stock for 600 g of bread, toss gently, and check that the cubes are damp throughout but not wet. Add a spoon more if there are dry patches.\n\nLine the cooker with a liner or baking paper to make clean up easier, and lay a clean tea towel under the lid to absorb condensation. The edges will soften rather than crisp, so finish with a few minutes under the grill if you want a golden top.',
    ing: [
      '600 g day-old bread, cut into 2 cm cubes',
      '60 g butter',
      '2 onions, finely chopped',
      '3 celery sticks, finely chopped',
      '3 garlic cloves, crushed',
      '3 tbsp fresh sage, chopped',
      '1 tbsp fresh thyme leaves',
      '1.5 tsp salt',
      '1/2 tsp black pepper',
      '500 ml chicken stock',
      '2 eggs, beaten',
      '3 tbsp parsley, chopped'
    ],
    st: [
      'Heat the oven to 150C. Dry the bread cubes on trays for 30 minutes.',
      'Melt the butter in a pan and cook the onions and celery for 8 minutes. Add the garlic, sage, thyme, salt and pepper for 1 minute.',
      'Tip the bread, vegetables and parsley into a large bowl. Add the stock and eggs and toss gently.',
      'Spoon into the greased slow cooker. Lay a clean tea towel under the lid.',
      'Cover and cook on low for 4 hours, then serve.'
    ],
    tips: [
      'Dry the bread cubes first.',
      'Do not add too much stock.',
      'Use a tea towel under the lid to absorb steam.'
    ],
    pair: ['Roast turkey', 'Gravy', 'Cranberry sauce', 'Roast vegetables'],
    store: 'Keeps for 3 days in the fridge. Reheat covered in the oven.',
    nut: [236, 8, 33, 8, 2, 4, 840]
  },

  'slow-cooker-turkey-breast': {
    d: 'A bone-in turkey breast rubbed with herb butter and slow cooked on low for 5 hours until juicy, with a quick gravy from the juices.',
    meta: 'Slow cooker turkey breast with herb butter, cooked for 5 hours with gravy. Eight servings, ready in 5 hours 20 minutes.',
    kw: ['slow cooker turkey breast', 'crockpot turkey breast', 'herb butter turkey breast', 'turkey breast with gravy', 'bone in turkey breast slow cooker'],
    why: 'A turkey breast is the lean part of a bird that is already prone to drying out, and the slow cooker, with its steamy, enclosed heat, is the kindest way to treat it. The meat stays moist from edge to centre, and there is no basting or turning to worry about.\n\nChoose a bone-in breast of about 2 kg that fits comfortably in the pot with the lid on. The bone slows the cooking and adds flavour. Pat it dry and rub it all over, and under the skin, with softened butter mixed with sage, thyme, garlic and salt. The butter melts into the meat and keeps the breast moist.\n\n**Cook it on a bed of onions, carrots and celery.** The vegetables lift the turkey off the base and release juices that become the gravy. Pour in just 100 ml of stock, since the turkey releases plenty of its own liquid.\n\nThe skin will be pale and soft, which is normal in a slow cooker. Put the breast under a hot grill for 5 minutes at the end to brown it. Check that a thermometer reads 74C in the thickest part, rest it for 15 minutes, and strain the juices into a pan to thicken with a little cornflour.',
    ing: [
      '2 kg bone-in turkey breast',
      '60 g butter, softened',
      '2 tbsp fresh sage, chopped',
      '1 tbsp fresh thyme leaves',
      '3 garlic cloves, crushed',
      '1.5 tsp salt',
      '1/2 tsp black pepper',
      '1 onion, thickly sliced',
      '2 carrots, chunked',
      '2 celery sticks, chunked',
      '100 ml chicken stock',
      '1 tbsp cornflour'
    ],
    st: [
      'Mix the butter, sage, thyme, garlic, salt and pepper. Loosen the turkey skin and spread two thirds of the butter underneath. Rub the rest over the top.',
      'Spread the onion, carrots and celery in the slow cooker and pour in the stock. Set the turkey on top.',
      'Cover and cook on low for 5 hours, until a thermometer reads 74C in the thickest part.',
      'Brown the skin under a hot grill for 5 minutes, then rest the turkey for 15 minutes.',
      'Strain the juices into a pan, stir in the cornflour mixed with 2 tbsp cold water, and simmer for 3 minutes into a gravy.'
    ],
    tips: [
      'Use a thermometer to avoid overcooking.',
      'Brown the skin under the grill at the end.',
      'Use the juices for the gravy.'
    ],
    pair: ['Stuffing', 'Cranberry sauce', 'Roast potatoes', 'Green beans'],
    store: 'Keeps for 3 days in the fridge. Slice before storing.',
    nut: [354, 61, 5, 10, 1, 2, 660]
  },

  'slow-cooker-whole-chicken': {
    d: 'A whole chicken rubbed with paprika and garlic and slow cooked on low for 5 hours until it falls from the bone, with a rich broth below.',
    meta: 'Slow cooker whole chicken with paprika and garlic, cooked for 5 hours. Six servings, ready in 5 hours 10 minutes.',
    kw: ['slow cooker whole chicken', 'crockpot whole chicken', 'whole chicken in slow cooker', 'fall off the bone chicken', 'slow cooked roast chicken'],
    why: 'Stand it on onions. That one move keeps the chicken out of the liquid at the bottom of the pot, so it steams and roasts gently instead of boiling, and the juices drip down into a savoury stock. Without it, the underside turns pale and the bottom stays soggy.\n\nA 1.8 kg bird fits most cookers. Rub it with a mix of smoked paprika, garlic powder, onion powder, thyme, salt and pepper, working some under the skin, and sit it breast side up on thick slices of onion. No liquid is needed; the chicken releases its own as it cooks, and by the end there will be several hundred millilitres of rich broth.\n\n**It will not crisp.** Slow cooker chicken has a pale, soft skin, which many people pull off and discard. If you want it browned, lift the bird out carefully with two spatulas and grill it for 5 to 8 minutes until the skin colours and crisps.\n\nThe meat is ready when the leg moves freely in the joint and a thermometer reads at least 75C. It will be so tender that carving is more of a pulling apart. Save the broth, skim the fat, and use it for gravy, soup or cooking rice.',
    ing: [
      '1.8 kg whole chicken',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp dried thyme',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '2 onions, thickly sliced',
      '1 lemon, halved'
    ],
    st: [
      'Mix the paprika, garlic powder, onion powder, thyme, salt and pepper. Rub it all over the chicken and under the breast skin. Put the lemon halves in the cavity.',
      'Lay the onion slices in a layer across the base of the slow cooker. Set the chicken on top, breast side up.',
      'Cover and cook on low for 5 hours, until the leg moves freely and a thermometer reads at least 75C.',
      'Lift the chicken onto a tray with two spatulas. For crisp skin, grill for 5 to 8 minutes.',
      'Rest for 10 minutes and carve. Strain and skim the broth in the pot to serve alongside.'
    ],
    tips: [
      'Sit the chicken on onions, not in the liquid.',
      'Use two spatulas to lift the bird out whole.',
      'Save the broth for gravy or soup.'
    ],
    pair: ['Mashed potatoes', 'Green beans', 'Gravy', 'Buttered carrots'],
    store: 'Keeps for 3 days in the fridge. Use the carcass for stock.',
    nut: [607, 58, 6, 39, 1, 2, 1000]
  },

  'smoked-salmon-dip': {
    d: 'Cream cheese blended with smoked salmon, lemon, dill and capers into a spreadable dip, chilled and served with crackers.',
    meta: 'Smoked salmon dip with cream cheese, lemon and dill, made in 10 minutes. Eight servings, no cooking required.',
    kw: ['smoked salmon dip', 'smoked salmon cream cheese dip', 'salmon dip with dill', 'smoked salmon pate', 'party dip with smoked salmon'],
    why: 'Why does smoked salmon dip taste better after a short wait? Because the salty fish and the lemon need a little time to soak into the cream cheese, and a dip made and served immediately tastes flat compared with one that has rested. Half an hour in the fridge is enough.\n\nSoften the cream cheese at room temperature before mixing so it blends smoothly without lumps. Fold in finely chopped smoked salmon rather than blending it to a paste, so you can see and taste the pink pieces. Offcuts or trimmings, sold cheaply in packs, are ideal for this.\n\n**Taste before you add salt.** Smoked salmon is salty, and so are capers, so most dips need none at all. Lemon juice and zest cut the richness and brighten the flavour. A spoonful of horseradish adds a gentle kick that complements the fish without overwhelming it.\n\nServe it in a bowl, topped with a few snipped chives and a swirl of olive oil, surrounded by crackers, cucumber slices and slices of toasted rye bread. It also works as a spread for bagels, or a filling for small cucumber cups at a party.',
    ing: [
      '250 g cream cheese, softened',
      '100 g smoked salmon, finely chopped',
      '60 g soured cream',
      '1 lemon, zested and juiced',
      '2 tbsp fresh dill, chopped',
      '1 tbsp capers, chopped',
      '1 tsp horseradish sauce',
      '1/4 tsp black pepper',
      '1 tbsp chives, snipped',
      '200 g crackers, to serve',
      '1 cucumber, sliced, to serve'
    ],
    st: [
      'Beat the cream cheese and soured cream together until smooth.',
      'Stir in the lemon zest and juice, dill, capers, horseradish and pepper.',
      'Fold in the smoked salmon, keeping some pieces large.',
      'Chill for 30 minutes to let the flavours settle.',
      'Spoon into a bowl, scatter with the chives and serve with the crackers and cucumber.'
    ],
    tips: [
      'Soften the cream cheese before mixing.',
      'Taste before adding any salt.',
      'Chill for 30 minutes before serving.'
    ],
    pair: ['Crackers', 'Cucumber slices', 'Rye bread', 'Bagels'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [256, 7, 21, 16, 1, 2, 450]
  },

  'southern-mac-and-cheese': {
    d: 'Macaroni in a baked egg custard with sharp cheddar, evaporated milk and butter, topped with more cheese, set in a dish rather than a sauce.',
    meta: 'Southern mac and cheese baked in an egg and cheddar custard for 35 minutes. Eight servings, ready in 55 minutes.',
    kw: ['southern mac and cheese', 'southern baked macaroni and cheese', 'custard style mac and cheese', 'soul food mac and cheese', 'baked mac and cheese with eggs'],
    why: 'Why does this macaroni and cheese set like a slice of pie? Because it has no roux. The binding is a custard of eggs and evaporated milk, which sets in the oven to a firm, creamy square that can be cut and lifted onto the plate. It is a very different thing from the saucy stovetop style.\n\nCook the macaroni until just short of tender, about 2 minutes less than the pack says, and drain it well. It will finish in the oven, where it absorbs custard. Toss it while hot with butter and half the cheese so that the cheese starts to melt before the eggs are added. Hot pasta poured into cold eggs scrambles them, so let the mixture cool for a few minutes.\n\n**Grate the cheese yourself and use a sharp, aged cheddar.** Bagged shredded cheese is coated with starch that stops it melting cleanly. A mix of sharp cheddar and a milder one like Colby gives both flavour and a creamy melt.\n\nBake in a hot oven until the edges are bubbling and the top is golden, with a slight wobble in the middle. Rest for 10 minutes, which sets the custard and allows clean slices.',
    ing: [
      '350 g elbow macaroni',
      '60 g butter',
      '400 g sharp cheddar, grated',
      '3 eggs',
      '350 ml evaporated milk',
      '250 ml whole milk',
      '1 tsp mustard powder',
      '1/2 tsp smoked paprika',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190C. Boil the macaroni in salted water for 6 minutes, drain and return to the pan.',
      'Stir in the butter and two thirds of the cheddar until melting. Leave to cool for 5 minutes.',
      'Whisk the eggs, evaporated milk, whole milk, mustard powder, paprika, salt and pepper. Stir into the pasta.',
      'Pour into a greased 23 by 33 cm baking dish and scatter with the remaining cheddar.',
      'Bake for 35 minutes until golden and set with a slight wobble. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Cool the pasta slightly before adding the eggs.',
      'Grate the cheese yourself.',
      'Rest before cutting so the custard sets.'
    ],
    pair: ['Collard greens', 'Fried chicken', 'Baked ham', 'Cornbread'],
    store: 'Keeps for 4 days in the fridge. Reheat covered at 170C for 15 minutes.',
    nut: [530, 25, 40, 30, 2, 8, 700]
  },

  'spaghetti-pomodoro': {
    d: 'Spaghetti tossed with a fresh tomato sauce of olive oil, garlic and basil, simmered for 15 minutes and finished with parmesan.',
    meta: 'Spaghetti pomodoro with a fresh tomato and basil sauce, simmered for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['spaghetti pomodoro', 'spaghetti with tomato sauce', 'fresh tomato spaghetti', 'italian tomato and basil pasta', 'simple tomato spaghetti'],
    why: 'It looks like a plate of plain pasta and tastes like summer. Spaghetti pomodoro is the simplest of the tomato sauces, with no meat, no cream and no long simmer, and it depends on a short list of good ingredients treated with care.\n\nBuy tinned San Marzano tomatoes or the best you can find. In winter, tinned fruit are often better than the pale fresh ones. Crush them by hand into a bowl, because the texture is better than from a blender, and remove any hard cores. Cook a few sliced garlic cloves gently in plenty of olive oil until pale, before the tomatoes go in.\n\n**Simmer for no more than 15 minutes.** The sauce should be fresh and bright, not dark and jammy. A pinch of sugar corrects any sharpness from the tomatoes, and a little salt brings out their sweetness. Stir in torn basil at the very end so that its scent is not lost.\n\nCook the spaghetti in salted water, drain it a minute early and finish it in the sauce with a ladle of pasta water. The starch binds the sauce to the pasta and gives it a glossy finish. Serve with parmesan and a thread of olive oil.',
    ing: [
      '400 g spaghetti',
      '4 tbsp olive oil',
      '4 garlic cloves, thinly sliced',
      '800 g tinned whole San Marzano tomatoes',
      '1 pinch sugar',
      '1 tsp salt',
      '1 handful fresh basil, torn',
      '40 g parmesan, grated'
    ],
    st: [
      'Heat the oil in a wide pan over medium heat. Cook the garlic for 1 minute until pale gold.',
      'Crush the tomatoes by hand into the pan with their juice. Add the sugar and salt and simmer gently for 15 minutes.',
      'Meanwhile boil the spaghetti in salted water for 1 minute less than the pack says. Reserve a mug of the water and drain.',
      'Toss the pasta in the sauce with a splash of the water for 1 minute.',
      'Stir in the basil, scatter with the parmesan and serve.'
    ],
    tips: [
      'Crush the tomatoes by hand.',
      'Do not let the garlic brown.',
      'Finish the pasta in the sauce with pasta water.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Red wine', 'Grilled courgettes'],
    store: 'The sauce keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [583, 19, 84, 19, 6, 8, 760]
  },

  'spaghetti-alla-norma': {
    d: 'Spaghetti with fried aubergine, tomato sauce, basil and ricotta salata, a Sicilian dish from Catania, ready in 50 minutes.',
    meta: 'Spaghetti alla Norma with fried aubergine, tomato and ricotta salata. Four servings, ready in 50 minutes.',
    kw: ['spaghetti alla norma', 'pasta alla norma', 'sicilian aubergine pasta', 'aubergine and tomato spaghetti', 'norma pasta with ricotta salata'],
    why: 'Fry the aubergine until deeply golden. This is the main skill in the dish, because pale, spongy aubergine tastes of nothing, and properly browned cubes turn silky and nutty. The name comes from the opera Norma by Bellini, a Catania composer, and Sicilians describe a good dish by saying it is a Norma.\n\nCut the aubergines into 2 cm cubes, salt them, and leave them in a colander for 20 minutes. The salt draws out bitter liquid, which you pat away. Then fry them in a generous amount of olive oil, in batches, until all sides are browned. They absorb oil quickly at first and then release it again as they cook, so be patient.\n\n**Make the tomato sauce plain.** Garlic, a pinch of chilli, tinned tomatoes and basil are all it needs, simmered for 15 minutes. The aubergine brings richness, so the sauce can stay light. Stir the fried aubergine through at the end, so it keeps its texture.\n\nFinish with grated ricotta salata, a firm, salty cheese that does not melt and adds a savoury contrast. If you cannot find it, use feta or pecorino. Add torn basil on top and serve at once.',
    ing: [
      '600 g aubergines, cut into 2 cm cubes',
      '1 tsp salt',
      '6 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '800 g tinned chopped tomatoes',
      '350 g spaghetti',
      '60 g ricotta salata, grated',
      '3 tbsp basil, torn'
    ],
    st: [
      'Toss the aubergine with the salt and leave in a colander for 20 minutes. Pat dry.',
      'Heat 4 tbsp of the oil in a large frying pan and fry the aubergine in 2 batches for 8 minutes each until deep golden. Remove.',
      'Add the remaining oil, garlic and chilli to the pan for 1 minute, then the tomatoes. Simmer for 15 minutes.',
      'Boil the spaghetti in salted water for 1 minute less than the pack says. Reserve a mug of the water and drain.',
      'Toss the pasta with the sauce and aubergine and a splash of water. Serve with the ricotta salata and basil.'
    ],
    tips: [
      'Salt and dry the aubergine before frying.',
      'Brown the aubergine properly.',
      'Use ricotta salata, or feta if unavailable.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Red wine', 'Grilled courgettes'],
    store: 'Keeps for 2 days in the fridge. Reheat with a splash of water.',
    nut: [629, 17, 84, 25, 10, 13, 620]
  },

  'spare-ribs': {
    d: 'Pork spare ribs rubbed with paprika and brown sugar, wrapped in foil and baked at 150C for 2 hours 30 minutes, then glazed with barbecue sauce.',
    meta: 'Spare ribs rubbed with paprika and baked low and slow for 2 hours 30 minutes. Four servings, ready in 2 hours 45 minutes.',
    kw: ['spare ribs', 'oven baked spare ribs', 'pork spare ribs recipe', 'barbecue spare ribs', 'low and slow ribs'],
    why: 'Remove the membrane. This thin, silvery skin on the bone side of the ribs stays tough through any amount of cooking, and it blocks the rub from reaching the meat. Slide a knife under it at one end, grip it with a piece of kitchen paper and pull. It comes away in one sheet in under a minute.\n\nPork spare ribs come from the belly side and are meatier and fattier than back ribs. They need slow cooking for the fat and collagen to melt. A rack of about 1.2 kg serves four. Rub with brown sugar, smoked paprika, garlic powder, onion powder, mustard powder, salt and pepper, and leave for a few hours or overnight.\n\n**Wrap the ribs tightly in foil.** The sealed parcel traps steam, which braises the meat to tenderness at a low 150C. Two and a half hours in the foil takes the meat to the edge of falling off the bone. A gentle tug on a bone should loosen it.\n\nUnwrap, brush both sides with barbecue sauce, and return to a hotter oven at 220C for 10 minutes, so the glaze caramelises. Rest for 5 minutes and cut between the bones. Serve with extra sauce and plenty of napkins.',
    ing: [
      '1.2 kg pork spare ribs',
      '3 tbsp light brown sugar',
      '2 tbsp smoked paprika',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp mustard powder',
      '2 tsp salt',
      '1 tsp black pepper',
      '150 g barbecue sauce'
    ],
    st: [
      'Remove the membrane from the back of the ribs. Mix the sugar, paprika, garlic powder, onion powder, mustard powder, salt and pepper and rub all over.',
      'Heat the oven to 150C. Wrap the ribs tightly in a double layer of foil and set on a tray.',
      'Bake for 2 hours 30 minutes until the meat is very tender and has shrunk back from the bones.',
      'Raise the oven to 220C. Unwrap the ribs, brush with the barbecue sauce and bake for 10 minutes until sticky.',
      'Rest for 5 minutes and cut between the bones.'
    ],
    tips: [
      'Remove the membrane for tender ribs.',
      'Seal the foil tightly to trap steam.',
      'Glaze at the end so the sugar does not burn.'
    ],
    pair: ['Coleslaw', 'Baked beans', 'Corn on the cob', 'Cornbread'],
    store: 'Keeps for 4 days in the fridge. Reheat wrapped in foil at 160C for 20 minutes.',
    nut: [899, 46, 28, 67, 2, 22, 1740]
  },

  'spatchcock-chicken': {
    d: 'A whole chicken with the backbone removed and the breastbone flattened, roasted at 220C for 50 minutes with lemon and thyme.',
    meta: 'Spatchcock chicken roasted flat with lemon and thyme for 50 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['spatchcock chicken', 'spatchcocked roast chicken', 'butterflied chicken', 'flat roast chicken', 'crispy spatchcock chicken'],
    why: 'The first sign it is ready is the sound: a steady crackle from the tray as the skin renders and blisters. Spatchcocking, which means removing the backbone and flattening the bird, exposes all the skin to the heat at once, and cuts roasting time in half. The legs and breast finish together instead of the breast drying out while the thighs catch up.\n\nUse strong kitchen scissors to cut along both sides of the backbone. Save it for stock. Turn the chicken over and press down firmly on the breastbone with the heel of your hand until you hear it crack and the bird lies flat. It looks odd but the result is a bird that roasts evenly.\n\n**Dry the skin and season generously.** Pat the chicken completely dry, then rub with salt, pepper, softened butter, lemon zest and thyme, working some butter under the skin of the breast. For the crispest skin, leave the salted bird uncovered in the fridge for a few hours or overnight.\n\nRoast skin side up on a tray at 220C for 50 minutes, until a thermometer in the thigh reads 75C. Rest for 10 minutes and carve into legs, thighs and breast slices. A quick pan sauce made from the tray juices and a splash of wine goes well alongside.',
    ing: [
      '1.6 kg whole chicken',
      '50 g butter, softened',
      '1 lemon, zested',
      '1 tbsp fresh thyme leaves',
      '2 garlic cloves, crushed',
      '1.5 tsp salt',
      '1/2 tsp black pepper',
      '1 onion, sliced',
      '100 ml white wine'
    ],
    st: [
      'Heat the oven to 220C. Cut out the backbone of the chicken with scissors, turn the bird over and press down on the breastbone until flat. Pat dry.',
      'Mix the butter, lemon zest, thyme, garlic, salt and pepper. Rub it under and over the skin.',
      'Spread the onion in a roasting tin and set the chicken on top, skin side up.',
      'Roast for 50 minutes until the skin is deep golden and a thermometer reads 75C in the thigh.',
      'Rest for 10 minutes. Pour the wine into the tin, scrape the base and simmer into a sauce.'
    ],
    tips: [
      'Use strong scissors to remove the backbone.',
      'Dry the skin well.',
      'Rest the chicken for 10 minutes before carving.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Gravy', 'Buttered carrots'],
    store: 'Keeps for 3 days in the fridge. Use the backbone and carcass for stock.',
    nut: [886, 77, 5, 62, 1, 2, 1170]
  },

  'stovetop-mac-and-cheese': {
    d: 'Macaroni in a smooth cheddar sauce made on the hob in 20 minutes with butter, flour and milk, with no oven needed.',
    meta: 'Stovetop mac and cheese with a smooth cheddar sauce, made in 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['stovetop mac and cheese', 'creamy stovetop macaroni and cheese', 'homemade mac and cheese', 'cheddar mac and cheese', 'macaroni cheese on the hob'],
    why: 'Salt the pasta water well and take the sauce off the heat before the cheese goes in. These two habits are the difference between a creamy sauce and a grainy one. Overheated cheese separates into oil and curds, while cheese stirred into warm sauce melts into a smooth coat.\n\nThe sauce starts with a roux: butter and flour cooked together for a minute, then milk whisked in a little at a time. Adding the milk gradually, and warming it first, stops lumps forming. Simmer for 5 minutes until the sauce coats the back of a spoon. A pinch of mustard powder and a little nutmeg sharpen the cheese flavour without being noticeable.\n\n**Grate the cheese yourself.** Pre-grated cheese is dusted with cellulose to stop it sticking together in the bag, and the same coating stops it melting smoothly into a sauce. Sharp cheddar gives flavour, and a handful of a good melter such as Gruyère or Monterey Jack gives stretch.\n\nCook the macaroni to just short of tender, drain it and tip it straight into the sauce. Stir for a minute and serve immediately, as the sauce thickens quickly as it stands. If it tightens, loosen it with a splash of milk.',
    ing: [
      '300 g macaroni',
      '40 g butter',
      '40 g plain flour',
      '600 ml milk, warmed',
      '1/2 tsp mustard powder',
      '1/4 tsp nutmeg',
      '1 tsp salt',
      '200 g sharp cheddar, grated',
      '50 g Gruyère, grated',
      '1/4 tsp black pepper'
    ],
    st: [
      'Boil the macaroni in well-salted water for 2 minutes less than the pack says. Drain.',
      'Melt the butter in a large pan, stir in the flour and cook for 1 minute. Whisk in the warm milk a little at a time until smooth.',
      'Add the mustard powder, nutmeg and salt and simmer for 5 minutes, stirring, until the sauce coats a spoon.',
      'Take the pan off the heat. Stir in the cheddar and Gruyère until melted.',
      'Stir in the macaroni and pepper and serve immediately.'
    ],
    tips: [
      'Take the sauce off the heat before adding cheese.',
      'Warm the milk before whisking it in.',
      'Loosen with milk if the sauce tightens.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Crispy bacon', 'Hot sauce'],
    store: 'Best eaten at once. Reheat with a splash of milk.',
    nut: [731, 32, 72, 35, 3, 10, 1020]
  }
};
