'use strict';

/**
 * Volume thirty-six — potatoes, vegetable sides and party snacks.
 *
 * Potatoes, carrots, parsnips, cabbage and peas are the cheapest vegetables in
 * the shop, and the dips and cocktail snacks at the end feed a crowd for very
 * little. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'gravy-fries': {
    d: 'Oven-baked fries topped with a hot beef gravy and melted cheese. Four servings in 35 minutes.',
    meta: 'Gravy fries: oven-baked fries topped with a hot beef gravy and melted cheese. A cheap Canadian-style snack or supper for four in 35 minutes.',
    kw: ['gravy fries', 'fries with gravy and cheese', 'budget poutine style fries', 'easy oven fries and gravy', 'cheap snack for four'],
    why: 'Serve it at once. Fries, gravy and cheese are a dish with a short life: within 10 minutes the fries have soaked up the gravy and lost the crunch that made them worth eating.\n\nBake the fries on a hot tray, spread out, until deep golden. A tray crowded with fries steams them, and steamed fries go limp under gravy.\n\nThe gravy is butter, flour and beef stock, whisked together and simmered until it coats a spoon. **Make it while the fries bake**, so both are hot at the same moment.\n\nCheese goes on the fries before the gravy, so the heat of the sauce melts it. Grated cheddar does the job; squeaky curds would be traditional, but they are rarely cheap. Pour the gravy on at the table. The dish is a close cousin of poutine, and a good use of leftover gravy. A pot of gravy made from the pan juices of a roast would work in place of the stock version, saving effort and adding flavour.',
    ing: [
      '900 g potatoes, cut into 1 cm sticks',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '30 g butter',
      '30 g plain flour',
      '500 ml beef stock',
      '1 tsp Worcestershire sauce',
      '1/2 tsp black pepper',
      '150 g grated cheddar'
    ],
    st: [
      'Heat the oven to 230°C (210°C fan) with a large tray inside. Toss the potato sticks with the oil and half the salt.',
      'Tip onto the hot tray in one layer and bake for 30 minutes, turning once, until deep golden.',
      'Meanwhile, melt the butter in a saucepan, stir in the flour for 1 minute, then whisk in the stock and Worcestershire sauce. Simmer for 6 minutes until thick, then add the pepper and remaining salt.',
      'Pile the fries into bowls, scatter with the cheese and pour the hot gravy over.'
    ],
    tips: [
      'Use two trays so the fries do not steam.',
      'Make the gravy slightly thicker than you think you need.',
      'Serve at once; the fries soften quickly.'
    ],
    pair: ['Coleslaw', 'Sausages', 'Pickles', 'Green salad'],
    store: 'Best eaten straight away. The gravy keeps in the fridge for up to 3 days.',
    nut: [509, 16, 46, 29, 5, 2, 1270]
  },

  'curry-fries': {
    d: 'Oven chips served with a chip-shop style curry sauce of onion, curry powder and stock. Four servings in 40 minutes.',
    meta: 'Curry fries: oven chips with a chip-shop style curry sauce of onion, curry powder and stock. A very cheap British supper for four in 40 minutes.',
    kw: ['curry fries', 'chips and curry sauce', 'budget chip shop curry sauce', 'easy curry sauce for chips', 'cheap supper for four'],
    why: 'Chip-shop curry sauce is a sweet, mild, gravy-like sauce with a hint of spice, and it is easy to reproduce. Onion, curry powder and flour cooked together, with stock added and simmered, give you most of it.\n\nCook the onion slowly in oil, for 8 minutes, until very soft. It melts into the sauce and gives the sweetness that is the signature of the dish.\n\nThe curry powder goes in with the flour and cooks in the fat for a full minute. **Raw curry powder tastes bitter**, and this is the step that fixes it.\n\nStock goes in gradually, whisking, then a spoon of sugar or a grated apple rounds out the flavour. Simmer for 10 minutes and pour over fries straight from the oven. Curry sauce is a kind of gravy with spices, and the batch keeps well in the fridge. Warmed up, it turns baked potatoes, chips and rice into a quick meal, so a saucepan of it is a useful thing to have.',
    ing: [
      '900 g potatoes, cut into 1 cm sticks',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '1 onion, finely chopped',
      '2 tbsp plain flour',
      '2 tbsp mild curry powder',
      '500 ml vegetable stock',
      '1 tsp sugar',
      '1 tsp tomato ketchup'
    ],
    st: [
      'Heat the oven to 230°C (210°C fan) with a large tray inside. Toss the potato sticks with 2 tablespoons of the oil and half the salt and bake on the hot tray for 30 minutes, turning once.',
      'Meanwhile, heat the remaining oil in a saucepan over medium heat and cook the onion for 8 minutes until soft.',
      'Stir in the flour and curry powder and cook for 1 minute. Add the stock gradually, whisking, then the sugar, ketchup and remaining salt.',
      'Simmer for 10 minutes, stirring, until thick and glossy. Serve over the fries.'
    ],
    tips: [
      'Cook the curry powder in the fat for a full minute.',
      'Strain the sauce if you like it smooth.',
      'Thin with a splash of stock if it thickens too much.'
    ],
    pair: ['Mushy peas', 'Battered sausage', 'Pickled onions', 'Bread and butter'],
    store: 'The sauce keeps in the fridge for up to 4 days. Reheat gently. The fries are best fresh.',
    nut: [319, 7, 48, 11, 7, 4, 1030]
  },

  'garlic-parmesan-fries': {
    d: 'Oven fries tossed with melted garlic butter and grated parmesan straight from the tray. Four servings in 40 minutes.',
    meta: 'Garlic parmesan fries: oven fries tossed with melted garlic butter and grated parmesan. A cheap snack or side for four in 40 minutes.',
    kw: ['garlic parmesan fries', 'oven garlic fries', 'budget cheesy fries', 'easy parmesan fries', 'cheap snack for four'],
    why: 'The coating goes on after the fries come out of the oven, not before. Garlic burns at the temperatures needed to crisp potatoes, so it joins the dish at the end, in melted butter, while the fries are still too hot to hold.\n\nSoak the cut potatoes in cold water for 20 minutes, then dry them very well. Soaking removes surface starch, which makes the fries crisper, and drying means the oil sticks.\n\nA high oven, 230°C, and a tray that has been preheating are what give the browned edges. **Do not crowd the tray.** Space between the sticks lets the steam out.\n\nToss with the garlic butter in a big bowl, then add the cheese straight away so it clings and half melts. Salt at the end, tasting first, since parmesan is salty. Soaking the cut potatoes in cold water is the extra step worth the trouble, as it draws out surface starch and gives a crisper chip. Dry them well afterwards, because wet potatoes spit in the oven.',
    ing: [
      '900 g potatoes, cut into 1 cm sticks',
      '3 tbsp vegetable oil',
      '40 g butter',
      '3 garlic cloves, grated',
      '60 g grated parmesan',
      '1/2 tsp salt',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Soak the potato sticks in cold water for 20 minutes. Drain and dry thoroughly with a tea towel.',
      'Heat the oven to 230°C (210°C fan) with a large tray inside. Toss the potatoes with the oil and bake on the hot tray for 30 minutes, turning once, until golden.',
      'Melt the butter with the garlic in a small pan for 1 minute without browning.',
      'Tip the fries into a large bowl, pour over the garlic butter, add the parmesan, salt and parsley and toss. Serve at once.'
    ],
    tips: [
      'Dry the potatoes well so the oil sticks and they crisp.',
      'Add the garlic after baking so it does not burn.',
      'Taste before salting; the parmesan is salty.'
    ],
    pair: ['Burgers', 'Garlic mayonnaise', 'Coleslaw', 'Ketchup'],
    store: 'Best eaten straight away. Leftover fries can be crisped on a tray at 220°C for 8 minutes.',
    nut: [403, 10, 39, 23, 5, 2, 540]
  },

  'potato-skins': {
    d: 'Baked potato halves hollowed and crisped, then filled with cheese and bacon and baked again. Four servings in 1 hour 5 minutes.',
    meta: 'Potato skins: baked potato halves crisped and filled with cheese and bacon, then baked again. A cheap snack or supper for four, 1 hour 5.',
    kw: ['potato skins', 'loaded potato skins', 'budget cheese and bacon potato skins', 'easy baked potato skins', 'cheap party snack'],
    why: 'Bake the potatoes whole for an hour, until the skins are crisp and the insides soft. A shortcut in the microwave gives a soft skin that never crisps.\n\nOnce cool enough to handle, cut them in half and scoop out the middle, leaving a 5 mm wall. The scooped potato is not wasted; mash it with butter and use it elsewhere.\n\nBrush the shells, inside and out, with oil and bake them cut side up for 10 minutes. **This is what makes them crisp**, since the fat fries the flesh left on the skin.\n\nFill with cheese and cooked bacon, then bake for 8 minutes more until the cheese is melted and bubbling. Serve with soured cream and spring onion. They are eaten with the fingers. The scooped potato can be mashed with butter and milk and served with sausages, so nothing is lost. The skins reheat well in a hot oven, and make good party food that can be assembled earlier in the day.',
    ing: [
      '4 large baking potatoes, about 300 g each',
      '1 tbsp vegetable oil',
      '3 tbsp vegetable oil, for brushing',
      '1/2 tsp salt',
      '100 g streaky bacon, chopped and fried until crisp',
      '150 g grated cheddar',
      '2 spring onions, sliced',
      '100 g soured cream'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Prick the potatoes, rub with the 1 tablespoon of oil and bake directly on the shelf for 1 hour until soft.',
      'Cool for 10 minutes, halve lengthways and scoop out the flesh, leaving a 5 mm wall. Keep the scooped potato for another use.',
      'Brush the shells inside and out with the 3 tablespoons of oil, sprinkle with the salt and bake cut side up for 10 minutes.',
      'Fill with the bacon and cheese and bake for 8 minutes more. Top with the spring onions and serve with the soured cream.'
    ],
    tips: [
      'Bake the potatoes unwrapped for crisp skins.',
      'Leave a thin wall of potato in the shell for body.',
      'Use the scooped potato in mash or potato cakes.'
    ],
    pair: ['Soured cream', 'Chives', 'Green salad', 'Hot sauce'],
    store: 'Best eaten straight away. Keeps in the fridge for up to 2 days; reheat at 200°C for 10 minutes.',
    nut: [598, 20, 53, 34, 7, 4, 940]
  },

  'potato-croquettes': {
    d: 'Mashed potato with cheese and chives, shaped into logs, crumbed and fried until golden. Makes 12 in 45 minutes.',
    meta: 'Potato croquettes: mashed potato with cheese and chives, shaped into logs, crumbed and fried until golden. A cheap snack or side, 12 in 45 minutes.',
    kw: ['potato croquettes', 'cheese potato croquettes', 'budget croquettes from mash', 'crispy mashed potato logs', 'cheap party snack'],
    why: 'Dry mash is the key to a croquette that holds together. If the potato is wet, the croquettes burst in the oil and spill their filling in a mess.\n\nBoil the potatoes in their skins if you can, which keeps the water out, then peel while hot with a fork and knife. Mash without milk and cool completely: the mixture needs to be cold and stiff to shape.\n\nBind with an egg and a little flour. **The coating needs to be complete**, flour then egg then breadcrumbs, with no gaps, or the oil gets in.\n\nChill the shaped croquettes for 30 minutes before frying. Cold ones hold their form in the oil. Fry in oil at 180°C for 3 minutes, turning, until deep golden, and drain on kitchen paper. They are a good way of using up leftover mash, and the crumb makes the cooked potato feel like a different dish. For a lighter version, bake them on a tray with a little oil sprayed over, turning once.',
    ing: [
      '800 g floury potatoes, scrubbed',
      '60 g grated cheddar',
      '2 tbsp chopped chives',
      '1 egg',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '40 g plain flour',
      '2 eggs, beaten',
      '120 g dried breadcrumbs',
      '500 ml vegetable oil, for frying'
    ],
    st: [
      'Boil the whole potatoes for 25 minutes until tender. Peel while hot, then mash until smooth with no milk. Spread on a plate to cool completely.',
      'Mix the mash with the cheese, chives, egg, salt and pepper.',
      'Shape into 12 logs about 6 cm long. Roll each in the flour, then the beaten egg, then the breadcrumbs. Chill for 30 minutes.',
      'Heat the oil in a deep pan to 180°C. Fry in batches for 3 minutes, turning, until deep golden. Drain on kitchen paper.'
    ],
    tips: [
      'Cool the mash completely before shaping.',
      'Coat evenly; gaps in the crumbs let the filling leak.',
      'Test the oil with a crumb: it should sizzle at once.'
    ],
    pair: ['Roast chicken', 'Peas', 'Garlic mayonnaise', 'Green salad'],
    store: 'Keeps in the fridge for up to 2 days. Reheat on a tray at 200°C for 12 minutes. Uncooked croquettes freeze for up to 2 months.',
    nut: [967, 12, 43, 83, 4, 2, 440]
  },

  'potato-gratin': {
    d: 'Thin-sliced potatoes baked in garlicky cream and milk until tender with a golden top. Six servings in 1 hour 15 minutes.',
    meta: 'Potato gratin: thin-sliced potatoes baked in garlicky cream and milk until tender with a golden top. A cheap side dish for six in 1 hour 15 minutes.',
    kw: ['potato gratin', 'gratin dauphinois', 'budget creamy potato bake', 'easy french potato gratin', 'cheap side dish for six'],
    why: 'Slice the potatoes thin and even, 2 mm if you can, and do not rinse them. The starch on the cut surface is what thickens the cream into a sauce, and washing it off leaves a thin, watery gratin.\n\nWarm the cream and milk with the garlic before it goes over the potatoes. Heating it first means the gratin starts cooking at once and takes less time in the oven.\n\nLayer the potatoes in overlapping rows, seasoning each layer. **Press them down firmly** so the liquid comes up and just covers them.\n\nBake slowly, uncovered for the second half, so the top browns and the sauce reduces. A knife should slide into the centre with no resistance. Rest it for 10 minutes. It firms up and cuts neatly. A gratin is among the best uses of cheap potatoes, and needs only cream and garlic to become a dinner party dish. It reheats well, so can be made the day before and warmed in the oven while the main course rests.',
    ing: [
      '1.2 kg floury potatoes, peeled and sliced 2 mm thick',
      '300 ml double cream',
      '300 ml milk',
      '3 garlic cloves, crushed',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1/4 tsp ground nutmeg',
      '20 g butter'
    ],
    st: [
      'Heat the oven to 170°C (150°C fan). Butter a 2 litre gratin dish with half the butter.',
      'Warm the cream, milk, garlic, salt, pepper and nutmeg in a pan until just steaming.',
      'Layer the potatoes in the dish, overlapping and pressing down. Pour over the hot cream mixture, which should just cover them. Dot with the remaining butter.',
      'Bake for 1 hour 5 minutes, covering with foil if the top browns too fast, until a knife slides in easily and the top is golden. Rest for 10 minutes.'
    ],
    tips: [
      'Do not wash the potato slices; the starch thickens the sauce.',
      'Use a mandoline for even slices if you have one.',
      'Cover with foil if the top darkens before the potatoes are tender.'
    ],
    pair: ['Roast chicken', 'Green beans', 'Roast lamb', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 160°C for 20 minutes.',
    nut: [382, 7, 39, 22, 5, 6, 440]
  },

  'potato-dumplings': {
    d: 'Boiled potato, flour and egg shaped into balls and simmered until they float. Four servings in 55 minutes.',
    meta: 'Potato dumplings: boiled potato, flour and egg shaped into balls and simmered until they float. A cheap German-style side for four in 55 minutes.',
    kw: ['potato dumplings', 'german potato dumplings', 'budget kartoffelkloesse', 'dumplings made from potato', 'cheap side dish for four'],
    why: 'Floury potatoes, boiled in their skins, mashed while hot and cooled before mixing: that is the foundation. The dumpling is only as light as the potato is dry.\n\nPress the potatoes through a ricer or mash them very finely. Lumps show in the finished dumpling as hard white pieces.\n\nAdd the egg and flour with a light hand, and stop mixing the moment the dough comes together. **Overworked dough gives rubbery dumplings.** It should feel soft and slightly tacky, and hold a ball shape.\n\nTest one first. Drop a single dumpling in simmering water: if it falls apart, add a spoonful more flour. If it holds, shape the rest. Simmer, never boil. They are done when they float, about 5 minutes later. Dumplings suit rich dishes that have plenty of gravy, such as roast pork or a stew. Leftover dumplings can be sliced and fried in butter the next day, which turns them into a second meal.',
    ing: [
      '900 g floury potatoes, scrubbed',
      '1 egg',
      '150 g plain flour',
      '1 tsp salt',
      '1/4 tsp ground nutmeg',
      '20 g butter, melted'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes until tender. Peel while hot and mash very finely or press through a ricer. Cool for 20 minutes.',
      'Mix the potato with the egg, flour, salt and nutmeg to a soft dough. Do not overwork.',
      'Shape into 12 balls with floured hands. Drop one into simmering salted water to test; adjust the dough if it breaks.',
      'Simmer the dumplings in batches for 12 minutes, until they float and are firm. Lift out, drain and toss with the melted butter.'
    ],
    tips: [
      'Use floury potatoes for a light result.',
      'Test one dumpling before shaping the rest.',
      'Keep the water at a gentle simmer; a boil breaks them.'
    ],
    pair: ['Roast pork', 'Gravy', 'Red cabbage', 'Sausages'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a pan with butter, or slice and fry.',
    nut: [362, 10, 67, 6, 6, 2, 620]
  },

  'stuffed-onions': {
    d: 'Whole onions hollowed and filled with sausage meat, breadcrumbs and herbs, then baked until soft. Four servings in 1 hour 15 minutes.',
    meta: 'Stuffed onions: whole onions hollowed and filled with sausage meat, breadcrumbs and herbs, then baked. A very cheap supper for four in 1 hour 15 minutes.',
    kw: ['stuffed onions', 'baked stuffed onions with sausage', 'budget stuffed onion dinner', 'traditional stuffed onions', 'cheap supper for four'],
    why: 'Large onions are cheap, and when baked they turn sweet and tender. This dish treats them as bowls, which can hold a savoury stuffing.\n\nPeel them, trim the base so they sit flat, and parboil for 10 minutes. The par-boiling softens the layers enough to separate and scoop out the centres, and cuts the baking time.\n\nThe stuffing is sausage meat, breadcrumbs, the chopped onion centres and herbs. **Season it well**, as the onion walls are sweet and the filling must stand up to them.\n\nPack the filling in firmly, mounding it on top. Stand the onions close together in a dish, so they support one another. Bake covered at first to soften the onions, then uncovered to brown the filling. The onion shells become sweet and silky in the oven, and the stock in the dish turns into a sauce. Leftover onion centres go into the stuffing, so nothing is wasted, and the whole dish costs little.',
    ing: [
      '4 large onions, about 300 g each',
      '300 g pork sausage meat',
      '50 g dried breadcrumbs',
      '1 tsp dried sage',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 egg',
      '200 ml beef stock',
      '15 g butter'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan). Peel the onions, trim the bases so they stand, and boil in salted water for 10 minutes. Drain and cool.',
      'Cut a slice off the top of each and scoop out the centres, leaving two outer layers. Chop the scooped onion finely.',
      'Mix the sausage meat, breadcrumbs, chopped onion, sage, salt, pepper and egg. Pack into the onion shells, mounding the tops.',
      'Stand them in a snug dish, pour in the stock and dot with the butter. Cover with foil and bake for 30 minutes, then uncover and bake for 25 minutes more until browned and cooked through.'
    ],
    tips: [
      'Trim the bases so the onions sit steady.',
      'Pack the filling firmly so it does not fall out.',
      'Check the sausage filling is cooked through before serving.'
    ],
    pair: ['Mashed potato', 'Gravy', 'Peas', 'Green beans'],
    store: 'Keeps in the fridge for up to 2 days. Reheat covered at 180°C for 20 minutes.',
    nut: [435, 17, 40, 23, 6, 14, 1180]
  },

  'roasted-potatoes-and-onions': {
    d: 'Potato chunks and onion wedges roasted at a high heat with oil and thyme until crisp and golden. Four servings in 55 minutes.',
    meta: 'Roasted potatoes and onions: potato chunks and onion wedges roasted with oil and thyme until crisp and golden. A very cheap side for four, 55 minutes.',
    kw: ['roasted potatoes and onions', 'oven roasted potatoes with onions', 'budget roast potato side', 'easy roast potatoes', 'cheap side dish for four'],
    why: 'Preheat the tray. A tray that is already hot when the potatoes land on it sets the surface at once, and that sizzle is the start of a crisp crust.\n\nCut the potatoes into chunks of 4 cm. Smaller pieces dry out; larger ones stay hard in the middle by the time the outsides are brown.\n\nParboil them for 8 minutes first, drain, and shake them in the colander. The rough, fluffy surface that results is what crisps. **Do not skip the shake.**\n\nOnions go in for the last 25 minutes only. Added at the start they burn before the potatoes are done. Thyme and salt at the end of roasting, and a turn or two halfway through, finish the dish. A big tray of roast potatoes is among the cheapest and most satisfying things to cook. Cooking them in a mix of oil and a little goose fat or beef dripping, if you have it, gives a deeper flavour.',
    ing: [
      '1.2 kg floury potatoes, peeled and cut into 4 cm chunks',
      '4 tbsp vegetable oil',
      '2 onions, cut into wedges',
      '1 tsp dried thyme',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large roasting tray inside. Boil the potatoes in salted water for 8 minutes, drain and shake in the colander to roughen the edges.',
      'Pour the oil onto the hot tray and add the potatoes, turning to coat. Roast for 20 minutes.',
      'Turn the potatoes and add the onions. Roast for 25 minutes more, turning once, until deep golden.',
      'Sprinkle with the thyme and salt and serve at once.'
    ],
    tips: [
      'Shake the parboiled potatoes to roughen the surface.',
      'Use a big tray so the potatoes are not crowded.',
      'Add the onions later so they do not burn.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Gravy', 'Green beans'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 15 minutes.',
    nut: [378, 7, 56, 14, 8, 5, 610]
  },

  'roasted-sweet-potatoes': {
    d: 'Sweet potato wedges roasted with oil, paprika and salt until the edges caramelise. Four servings in 45 minutes.',
    meta: 'Roasted sweet potatoes: wedges roasted with oil, paprika and salt until the edges caramelise. A very cheap side for four in 45 minutes.',
    kw: ['roasted sweet potatoes', 'oven roasted sweet potato wedges', 'budget sweet potato side', 'easy roast sweet potatoes', 'cheap side dish for four'],
    why: 'Sweet potatoes caramelise rather than crisp, and that changes how to roast them. Their sugars brown quickly and then burn, so the oven should be hot but not hotter than 210°C.\n\nCut them into wedges of the same thickness, 3 cm at the widest. Thin ones scorch, and thick ones are still firm in the middle.\n\nToss with oil, salt and paprika in a bowl so every wedge is coated. **Leave space around each wedge on the tray**, or they steam and turn soft instead of browning.\n\nTurn them once, after 20 minutes. The cut sides pick up the best colour, so it is worth a few minutes of attention. They are ready when a knife slides in easily and the edges are dark and sticky. Sweet potatoes stand up to strong seasoning, so try a pinch of cumin or chili in place of paprika. The wedges are good served with a spoon of yogurt or soured cream, and the leftovers are excellent in a salad.',
    ing: [
      '1 kg sweet potatoes, scrubbed and cut into wedges',
      '3 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan) with a large tray inside.',
      'Toss the sweet potato wedges with the oil, paprika, salt and pepper.',
      'Tip onto the hot tray in a single layer and roast for 20 minutes. Turn and roast for 15 minutes more until tender and caramelised at the edges.'
    ],
    tips: [
      'Cut the wedges to the same thickness.',
      'Use two trays if they do not fit in one layer.',
      'Squeeze lime over before serving.'
    ],
    pair: ['Grilled chicken', 'Soured cream', 'Sausages', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 10 minutes.',
    nut: [315, 4, 50, 11, 8, 11, 730]
  },

  'roasted-parsnips': {
    d: 'Parsnip batons roasted in oil until golden and sticky at the edges. Four servings in 45 minutes.',
    meta: 'Roasted parsnips: parsnip batons roasted in oil until golden and sticky at the edges. A very cheap British side for four in 45 minutes.',
    kw: ['roasted parsnips', 'roast parsnips', 'budget parsnip side', 'easy oven roasted parsnips', 'cheap side dish for four'],
    why: 'Parsnips are sweet, and that is both their appeal and their problem. The sugars brown fast, and in a hot oven the thin ends can go from golden to black while the thick ends are still firm.\n\nThe cure is to cut them evenly. Halve them lengthways, and if the top is thick, quarter it so that the pieces are the same width all the way along. Cut out the woody core of a large parsnip.\n\nParboil for 5 minutes. **This shortens the roasting time and prevents scorching**, and the surface that results crisps nicely.\n\nRoast on a hot tray, turning once. A spoonful of honey in the last 10 minutes gives a sticky glaze, but the vegetable is sweet enough without. Parsnips are in season through the winter, and among the cheapest vegetables then. Roasted this way they taste almost like a sweet, so the dish suits a plain roast meat that needs something with sweetness alongside.',
    ing: [
      '800 g parsnips, peeled and cut into batons',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 tsp dried thyme'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan) with a large tray inside. Boil the parsnips in salted water for 5 minutes and drain well.',
      'Toss with the oil, salt, pepper and thyme.',
      'Tip onto the hot tray in a single layer and roast for 30 minutes, turning once, until golden and caramelised at the edges.'
    ],
    tips: [
      'Cut the parsnips evenly so they brown at the same pace.',
      'Remove the woody core from large ones.',
      'Watch the tips in the last 10 minutes; they burn first.'
    ],
    pair: ['Roast chicken', 'Gravy', 'Sausages', 'Brussels sprouts'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 10 minutes.',
    nut: [251, 2, 36, 11, 10, 10, 610]
  },

  'honey-roasted-carrots': {
    d: 'Whole carrots roasted in oil and finished with a glaze of honey and thyme. Four servings in 45 minutes.',
    meta: 'Honey roasted carrots: whole carrots roasted in oil and finished with a honey and thyme glaze. A very cheap side for four in 45 minutes.',
    kw: ['honey roasted carrots', 'roast carrots with honey', 'budget carrot side', 'easy glazed carrots', 'cheap side dish for four'],
    why: 'Honey burns, so it goes on late. Carrots roasted plain for 30 minutes get tender and begin to brown; the honey added for the last 10 minutes turns to a glaze without scorching.\n\nIf the carrots are thin, leave them whole. Thick ones are halved lengthways, so they are about the same width and cook together.\n\nA hot tray makes the difference. The sizzle when the carrots hit it starts the browning at once. **Do not crowd them**, since carrots packed together give off steam and turn limp.\n\nToss them in the honey with the pan juices once they come out. The residual heat softens the honey and it coats the carrots evenly. A little thyme and salt are all that is needed. A bag of carrots costs little and keeps for weeks, so this is a side dish that rarely needs special shopping. A pinch of cumin or a few sprigs of fresh thyme in the tray gives the glaze a more complex flavour.',
    ing: [
      '800 g carrots, scrubbed and halved lengthways',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '1 tsp dried thyme',
      '2 tbsp honey',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan) with a large tray inside.',
      'Toss the carrots with the oil, salt and thyme. Tip onto the hot tray and roast for 30 minutes, turning once.',
      'Drizzle with the honey, toss and roast for 8 minutes more until glossy and caramelised.',
      'Season with the pepper and serve.'
    ],
    tips: [
      'Add the honey late so it does not burn.',
      'Cut thick carrots in half lengthways so they cook evenly.',
      'Use two trays if the carrots would touch.'
    ],
    pair: ['Roast chicken', 'Roast pork', 'Mashed potato', 'Peas'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 200°C for 10 minutes.',
    nut: [219, 2, 28, 11, 6, 18, 730]
  },

  'kumara-fries': {
    d: 'Kumara cut into sticks, tossed in oil and cornflour and baked until the edges crisp. Four servings in 40 minutes.',
    meta: 'Kumara fries: kumara cut into sticks, tossed in oil and cornflour and baked until the edges crisp. A cheap New Zealand-style snack for four in 40 minutes.',
    kw: ['kumara fries', 'baked kumara chips', 'budget sweet potato fries', 'easy oven kumara fries', 'cheap snack for four'],
    why: 'Kumara, the orange sweet potato of New Zealand, is soft when it cooks, and this is the challenge for any fry. A light coating of cornflour is the answer: it dries on the surface and gives the sticks a crust.\n\nCut them evenly, about 1 cm square. Thicker sticks cook through but never crisp; thinner ones burn.\n\nToss the sticks in a bowl with a spoonful of cornflour first, then the oil. **Do the cornflour before the oil**, so it clings dry to the kumara and forms a paste with the oil as the fries heat.\n\nBake on a hot tray, spread out, turning once. Space matters most: anything touching steams. Salt while still hot. Kumara fries crisp as they cool for a minute. Kumara has a natural sweetness that goes well with salty and sour dips. A bowl of yogurt with a squeeze of lemon, or a spoonful of sweet chilli sauce, makes a simple partner for the crisp edges.',
    ing: [
      '800 g kumara or orange sweet potato, cut into 1 cm sticks',
      '1 tbsp cornflour',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '1 tsp smoked paprika'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with two large trays inside.',
      'Toss the kumara sticks with the cornflour in a large bowl, then with the oil, salt and paprika.',
      'Spread on the hot trays in a single layer and bake for 30 minutes, turning once, until the edges are crisp and golden.',
      'Rest for 2 minutes to crisp up and serve hot.'
    ],
    tips: [
      'Use two trays so the fries are not crowded.',
      'Toss in cornflour before the oil for a crisper result.',
      'Eat at once; they soften as they cool.'
    ],
    pair: ['Burgers', 'Sour cream and chives', 'Sweet chilli sauce', 'Grilled sausages'],
    store: 'Best eaten straight away. Reheat on a tray at 220°C for 8 minutes.',
    nut: [279, 3, 42, 11, 6, 8, 700]
  },

  'potato-wedges': {
    d: 'Potato wedges tossed in oil and spices and baked until crisp outside and fluffy inside. Four servings in 45 minutes.',
    meta: 'Potato wedges: potato wedges tossed in oil and spices and baked until crisp outside and fluffy inside. A very cheap Australian-style snack for four, 45 minutes.',
    kw: ['potato wedges', 'oven baked potato wedges', 'budget crispy wedges', 'easy seasoned potato wedges', 'cheap snack for four'],
    why: 'Leave the skins on. They hold the wedge together, add a bit of flavour and crisp up better than the flesh.\n\nCut the potatoes lengthways into 8 wedges each. Keep them the same size, or the thin ones burn while the thick ones stay hard.\n\nParboil for 5 minutes in salted water, then drain and steam dry for 2 minutes. **This makes them fluffy inside**, and the rough surface it creates is what crisps in the oven.\n\nToss with oil and the seasoning in a bowl, shaking hard so the edges roughen. The spice mix of paprika, garlic powder and salt gives the golden colour and flavour. Bake on a hot tray at 220°C, turning once, until crisp and well browned. Wedges are the sort of snack that disappears as soon as it arrives, so make plenty. The same method works with sweet potatoes, though they need a little less time in the oven and brown more easily.',
    ing: [
      '1 kg floury potatoes, scrubbed and cut into 8 wedges each',
      '3 tbsp vegetable oil',
      '1 tsp paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '100 g sweet chilli sauce',
      '100 g soured cream'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside. Boil the wedges in salted water for 5 minutes. Drain and let them steam dry for 2 minutes.',
      'Toss with the oil, paprika, garlic powder, salt and pepper, shaking to roughen the edges.',
      'Tip onto the hot tray in one layer and bake for 30 minutes, turning once, until crisp and golden.',
      'Serve with the sweet chilli sauce and soured cream.'
    ],
    tips: [
      'Keep the skins on for crispness.',
      'Steam the parboiled wedges dry before oiling.',
      'Use two trays to give them room.'
    ],
    pair: ['Sweet chilli sauce', 'Soured cream', 'Coleslaw', 'Grilled chicken'],
    store: 'Keeps in the fridge for up to 3 days. Reheat on a tray at 220°C for 10 minutes.',
    nut: [404, 6, 59, 16, 6, 16, 860]
  },

  'buttered-peas': {
    d: 'Frozen peas cooked briefly in butter with a pinch of sugar and a few mint leaves. Four servings in 8 minutes.',
    meta: 'Buttered peas: frozen peas cooked briefly in butter with a pinch of sugar and mint. A very cheap side for four in 8 minutes.',
    kw: ['buttered peas', 'peas with butter and mint', 'budget vegetable side', 'easy buttered green peas', 'cheap side dish for four'],
    why: 'Overcooking is the only way to ruin them. Frozen peas are picked and frozen within hours, so they are already sweet and tender, and need only 3 or 4 minutes of heat.\n\nCook them in a small amount of water, just enough to cover the base of the pan, with the lid on. Steam does the work, and less water means more flavour stays in the peas.\n\nA pinch of sugar brings out the sweetness. It is not enough to taste sugary; it simply raises what is already there.\n\n**Add the butter after draining**, while the peas are hot. It melts in a few seconds and coats each pea. Mint leaves, torn at the last moment, give freshness. Dried mint tastes of tea and should be avoided. Frozen peas keep for months and cost very little, which is why they appear alongside so many dishes. For a more substantial side, stir in a spoon of cream or a handful of chopped ham at the end.',
    ing: [
      '400 g frozen peas',
      '50 ml water',
      '1 pinch sugar',
      '20 g butter',
      '1/4 tsp salt',
      '6 fresh mint leaves, torn'
    ],
    st: [
      'Put the peas, water and sugar in a saucepan, cover and bring to a boil over medium heat.',
      'Cook for 3 minutes, until the peas are hot and bright green.',
      'Drain, return to the pan and toss with the butter and salt until melted.',
      'Stir in the mint and serve at once.'
    ],
    tips: [
      'Do not overcook; they turn grey and mealy.',
      'Add mint just before serving.',
      'A squeeze of lemon sharpens them.'
    ],
    pair: ['Fish and chips', 'Roast chicken', 'Pies', 'Sausages and mash'],
    store: 'Best eaten straight away. They keep in the fridge for 1 day but lose their colour.',
    nut: [112, 5, 14, 4, 6, 6, 150]
  },

  'fried-cabbage': {
    d: 'Shredded cabbage fried in butter and bacon fat until soft and browned at the edges. Four servings in 25 minutes.',
    meta: 'Fried cabbage: shredded cabbage fried in butter and bacon fat until soft and browned at the edges. A very cheap American-style side for four in 25 minutes.',
    kw: ['fried cabbage', 'southern fried cabbage with bacon', 'budget cabbage side', 'easy pan fried cabbage', 'cheap side dish for four'],
    why: 'A hot, wide pan and some patience turn a cheap head of cabbage into something worth eating. In butter and bacon fat, cabbage softens and caramelises, and it turns sweet.\n\nStart with the bacon, chopped and cooked until the fat runs. Lift out the pieces, leaving the fat in the pan for the cabbage.\n\nShred the cabbage 1 cm thick, no finer, or it turns to mush. Add it in batches, as the volume at first fills the pan, and it wilts to a third as it cooks.\n\n**Leave it alone for the first 3 minutes**, then stir. Browned edges are the aim, and they only come from contact with the pan. Salt at the end, and a splash of vinegar. The bacon returns to the pan last. Cabbage is one of the cheapest vegetables in the shop and keeps for weeks in the fridge. Cooked this way it has a sweet, savoury flavour that surprises people who expect a bland, boiled vegetable.',
    ing: [
      '100 g streaky bacon, chopped',
      '20 g butter',
      '1 onion, sliced',
      '800 g green cabbage, shredded',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp cider vinegar'
    ],
    st: [
      'Fry the bacon in a large deep pan over medium-high heat for 5 minutes until crisp. Lift out, leaving the fat.',
      'Add the butter and onion and cook for 4 minutes. Add the cabbage in batches and leave for 3 minutes before stirring.',
      'Cook for 8 minutes in total, stirring now and then, until soft and browned at the edges.',
      'Return the bacon, season with the salt and pepper, and stir in the vinegar.'
    ],
    tips: [
      'Use a wide pan so the cabbage fries rather than steams.',
      'Add the cabbage in batches.',
      'Season at the end; bacon is salty.'
    ],
    pair: ['Cornbread', 'Pork chops', 'Boiled potatoes', 'Sausages'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a hot pan.',
    nut: [147, 7, 14, 7, 6, 8, 710]
  },

  'cheesy-potato-bake': {
    d: 'Sliced potatoes layered with cheese and onion, baked in a seasoned milk until golden. Six servings in 1 hour 15 minutes.',
    meta: 'Cheesy potato bake: sliced potatoes layered with cheddar and onion, baked in seasoned milk until golden. A cheap side or supper for six, 1 hour 15.',
    kw: ['cheesy potato bake', 'cheese and potato casserole', 'budget potato bake', 'easy layered potato bake', 'cheap side dish for six'],
    why: 'A good potato bake needs a lid. For the first 45 minutes, a sheet of foil keeps the steam inside and cooks the slices through; the top is then uncovered so the cheese can brown.\n\nSlice the potatoes 4 mm thick. A mandoline is quicker and more even than a knife, but a sharp knife and patience will do.\n\nLayer the potatoes, onion and cheese, seasoning each layer. **Do not pack the cheese in the middle**, since a thick layer melts into a greasy puddle. A thin, even scatter works better.\n\nThe milk is poured over until it comes about three quarters of the way up the potatoes. Too much and it floods; too little and the top layer stays hard. Rest for 10 minutes before serving. The bake works as a side for a roast or as a main dish with a green salad. It can be assembled ahead and kept covered in the fridge, then baked a little longer than the recipe says if it goes in cold.',
    ing: [
      '1.2 kg potatoes, peeled and sliced 4 mm thick',
      '1 onion, thinly sliced',
      '200 g grated cheddar',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '400 ml milk',
      '20 g butter'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan). Butter a 2.5 litre baking dish.',
      'Layer a third of the potatoes and onion in the dish, season, and sprinkle with a third of the cheese. Repeat twice, finishing with cheese.',
      'Pour the milk around the edge so it comes about three quarters of the way up. Dot with the butter.',
      'Cover with foil and bake for 45 minutes. Uncover and bake for 20 minutes more until golden and a knife slides in easily. Rest for 10 minutes.'
    ],
    tips: [
      'Slice the potatoes evenly so they cook at the same speed.',
      'Pour the milk down the side of the dish, not over the top.',
      'Cover with foil to prevent the top browning before the potatoes are cooked.'
    ],
    pair: ['Roast chicken', 'Ham', 'Green beans', 'Sausages'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 25 minutes.',
    nut: [364, 15, 40, 16, 5, 6, 650]
  },

  'loaded-baked-potatoes': {
    d: 'Crisp-skinned baked potatoes piled with melted cheese, crispy bacon, soured cream and chives. Four servings in 1 hour 10 minutes.',
    meta: 'Loaded baked potatoes: crisp-skinned potatoes topped with cheese, bacon, soured cream and chives. A cheap supper for four in 1 hour 10 minutes.',
    kw: ['loaded baked potatoes', 'cheese and bacon baked potatoes', 'budget loaded potatoes', 'easy loaded jacket potatoes', 'cheap supper for four'],
    why: 'Salt and oil the skins, and bake the potatoes straight on the oven shelf. The skin dries and crisps, and the inside turns light and floury.\n\nPierce each potato with a fork a few times so steam can escape. A sealed potato can burst, and a pierced one cooks more evenly.\n\nOnce baked, split along the top and press the ends toward each other to open it. Fluff the inside with a fork and add a knob of butter. **Salt the inside** before the toppings; it is the only seasoning the potato gets.\n\nBacon is best cooked until properly crisp in a dry pan, then crumbled. Soft bacon on a soft potato is a monotone. Put the cheese on first so the heat of the potato melts it. A baked potato is the most flexible base for a meal, and the toppings can be altered to use what is in the fridge. Leftover chili, baked beans or tuna mayonnaise all stand in for the bacon and cheese.',
    ing: [
      '4 large baking potatoes, about 300 g each',
      '1 tbsp vegetable oil',
      '1 tsp salt',
      '100 g streaky bacon, fried until crisp and crumbled',
      '30 g butter',
      '150 g grated cheddar',
      '100 g soured cream',
      '2 tbsp chopped chives'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Prick the potatoes, rub with the oil and half the salt and bake directly on the shelf for 1 hour until the skins are crisp.',
      'Split each potato along the top and open it. Fluff the flesh with a fork, add the butter and the remaining salt.',
      'Scatter with the cheese and return to the oven for 5 minutes to melt.',
      'Top with the bacon, soured cream and chives.'
    ],
    tips: [
      'Bake unwrapped for crisp skins.',
      'Open and fluff the flesh right away so steam escapes.',
      'Keep the bacon crisp by adding it at the last moment.'
    ],
    pair: ['Green salad', 'Coleslaw', 'Baked beans', 'Sweetcorn'],
    store: 'Keeps in the fridge for up to 2 days. Reheat at 180°C for 20 minutes.',
    nut: [562, 20, 53, 30, 7, 4, 1240]
  },

  'jacket-potato-with-baked-beans': {
    d: 'A baked potato with a crisp skin, split and topped with butter, baked beans and grated cheese. Two servings in 1 hour 5 minutes.',
    meta: 'Jacket potato with baked beans: a crisp-skinned baked potato with butter, beans and cheese. A very cheap British supper for two, 1 hour 5.',
    kw: ['jacket potato with baked beans', 'baked potato beans and cheese', 'budget jacket potato supper', 'easy baked potato with beans', 'cheap supper for two'],
    why: 'Short, sharp: bake it for an hour. Anything quicker gives a potato that is cooked but pale, without the crackle in the skin that makes a jacket potato worth the wait.\n\nRub the potato with oil and salt, and put it directly on the oven shelf. A baking tray insulates the base, and a potato wrapped in foil steams and loses its crisp.\n\nSplit it open as soon as it comes out. **Trapped steam makes the inside gluey**, and a cross cut lets it escape and keeps the flesh fluffy.\n\nButter goes in first. Then the beans, heated in a pan and drained slightly so they do not flood the plate. Cheese melts on top from the heat. Black pepper is the only seasoning needed. It is the plainest of suppers, and worth an hour in the oven. Several potatoes can bake at once for very little extra cost, so cook more than needed and use the rest as the next day\'s base.',
    ing: [
      '2 large baking potatoes, about 300 g each',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '20 g butter',
      '400 g tinned beans in tomato sauce',
      '60 g grated cheddar',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Prick the potatoes, rub with the oil and salt and bake directly on the shelf for 1 hour until the skins are crisp.',
      'Warm the beans in a small pan for 5 minutes over medium heat.',
      'Cut a cross in the top of each potato, squeeze open, and add the butter.',
      'Spoon over the beans, scatter with the cheese and pepper, and serve at once.'
    ],
    tips: [
      'Bake the potato unwrapped for a crisp skin.',
      'Cut the cross as soon as it comes out of the oven.',
      'Drain the beans slightly if they look very thin.'
    ],
    pair: ['Side salad', 'Coleslaw', 'Grilled sausages', 'Tuna mayonnaise'],
    store: 'Best eaten straight away. Leftover potato keeps in the fridge for 2 days.',
    nut: [654, 23, 82, 26, 15, 13, 1600]
  },

  'nachos-with-cheese-sauce': {
    d: 'Tortilla chips covered with a hot cheese sauce, salsa and sliced jalapeños. Four servings in 20 minutes.',
    meta: 'Nachos with cheese sauce: tortilla chips covered with a hot cheddar sauce, salsa and jalapeños. A cheap snack or supper for four in 20 minutes.',
    kw: ['nachos with cheese sauce', 'homemade nacho cheese sauce', 'budget nachos', 'easy cheesy nachos', 'cheap snack for four'],
    why: 'The cheese sauce is a white sauce with cheddar in it, and it stays smooth if you follow two rules: add the milk gradually, and take the pan off the heat before the cheese goes in.\n\nButter and flour cooked for a minute make the base. Milk is whisked in a splash at a time, so lumps cannot form, until the sauce is thick enough to coat the back of a spoon.\n\nOff the heat, stir in the grated cheese in handfuls. **Heat makes cheese grainy**, so the sauce should be warm, not bubbling, when it goes in. A pinch of mustard powder and paprika give it a nacho flavour.\n\nPile the chips on a plate or tray, not in a bowl, so more of them are covered. Pour on the sauce and add the salsa and jalapeños at once. Eat while the chips are still crisp. The cheese sauce keeps well and reheats gently, so make extra for another meal. Plain tortilla chips go furthest, and a handful of sweetcorn or black beans scattered over turns them into a more substantial dish.',
    ing: [
      '250 g tortilla chips',
      '30 g butter',
      '30 g plain flour',
      '350 ml milk',
      '200 g grated cheddar',
      '1/2 tsp mustard powder',
      '1/2 tsp smoked paprika',
      '100 g salsa',
      '30 g sliced jalapeños from a jar'
    ],
    st: [
      'Melt the butter in a saucepan over medium heat, stir in the flour and cook for 1 minute.',
      'Add the milk a splash at a time, whisking, then simmer for 3 minutes until thick.',
      'Take off the heat and stir in the cheese, mustard powder and paprika until smooth.',
      'Pile the chips on a large plate, pour over the sauce and top with the salsa and jalapeños.'
    ],
    tips: [
      'Take the sauce off the heat before adding the cheese.',
      'Spread the chips on a wide plate for more coverage.',
      'Serve at once; the chips soften within minutes.'
    ],
    pair: ['Guacamole', 'Soured cream', 'Black beans', 'Lime wedges'],
    store: 'The sauce keeps in the fridge for up to 3 days. Reheat gently with a splash of milk. Chips are best fresh.',
    nut: [656, 21, 53, 40, 4, 7, 850]
  },

  'cheese-dip': {
    d: 'A hot dip of cream cheese, grated cheddar, garlic and a little hot sauce, heated until smooth. Six servings in 15 minutes.',
    meta: 'Cheese dip: a hot dip of cream cheese, cheddar, garlic and hot sauce, stirred until smooth. A very cheap party snack for six in 15 minutes.',
    kw: ['cheese dip', 'hot cheese dip', 'budget party dip', 'easy cream cheese dip', 'cheap snack for six'],
    why: 'Cream cheese is the base, since it melts smoothly where plain cheddar goes stringy or oily. The cheddar adds flavour and bite.\n\nSoften the cream cheese first, in a saucepan over low heat with a splash of milk, stirring until it loosens. Add the grated cheese in handfuls, waiting for each to melt before the next.\n\n**Keep the heat low.** Cheese sauces split above a gentle simmer, and a split dip is greasy and grainy.\n\nGarlic powder, mustard and hot sauce supply the seasoning. Taste and add more hot sauce if you want it spicy. Serve warm, in a bowl set on a plate of crisps, tortilla chips or vegetable sticks. It thickens quickly as it cools, so keep it over a low flame if you can. The dip is good for a small crowd and takes only moments to make. Keep it warm over a very low heat while it is being served, and stir occasionally, since cheese sauces thicken and set quickly as they cool.',
    ing: [
      '200 g cream cheese',
      '100 ml milk',
      '200 g grated cheddar',
      '1/2 tsp garlic powder',
      '1/2 tsp mustard powder',
      '1 tsp hot sauce',
      '1/4 tsp salt'
    ],
    st: [
      'Put the cream cheese and milk in a saucepan over low heat and stir for 3 minutes until smooth.',
      'Add the cheddar in handfuls, stirring until each melts.',
      'Stir in the garlic powder, mustard powder, hot sauce and salt.',
      'Cook for 2 minutes more, stirring, and serve warm.'
    ],
    tips: [
      'Keep the heat low to prevent splitting.',
      'Add more milk if the dip gets too thick.',
      'Grate the cheese yourself; pre-grated cheese has an anti-caking powder.'
    ],
    pair: ['Tortilla chips', 'Celery sticks', 'Crusty bread', 'Pretzels'],
    store: 'Keeps in the fridge for up to 3 days. Reheat gently with a splash of milk.',
    nut: [263, 11, 3, 23, 0, 2, 440]
  },

  'bean-dip': {
    d: 'Refried beans warmed with cumin, salsa and cheese into a thick dip. Six servings in 15 minutes.',
    meta: 'Bean dip: refried beans warmed with cumin, salsa and cheese into a thick dip. A very cheap party snack for six in 15 minutes.',
    kw: ['bean dip', 'hot refried bean dip', 'budget party dip', 'easy bean and cheese dip', 'cheap snack for six'],
    why: 'Tinned refried beans are cheap and ready to use, and with a few additions they become a dip. They are also dull straight from the tin, which is why the spice and the salsa matter.\n\nWarm the beans in a pan with a splash of water, stirring until smooth and loose. Cold beans are stiff and tasteless; warm ones soften and take up flavours.\n\nCumin, garlic and chili powder are the spices, and a squeeze of lime lifts it. **Taste it hot**, as it will seem less seasoned once it cools a little.\n\nThe cheese goes on top, not in. Melt it under the grill for 2 minutes or simply stir half through the dip and the rest on top. Serve it with tortilla chips, which are strong enough to dig into the thick mixture. Refried beans are among the cheapest convenience foods, and a tin makes a large bowl of dip. A splash of hot sauce or a chopped jalapeño stirred through increases the heat for those who like it.',
    ing: [
      '400 g refried beans',
      '3 tbsp water',
      '1/2 tsp ground cumin',
      '1/2 tsp garlic powder',
      '1/2 tsp chili powder',
      '1 tbsp lime juice',
      '100 g salsa',
      '100 g grated cheddar',
      '200 g tortilla chips'
    ],
    st: [
      'Warm the refried beans with the water in a saucepan over medium heat for 4 minutes, stirring until smooth.',
      'Stir in the cumin, garlic powder, chili powder, lime juice and salsa.',
      'Transfer to a heatproof dish, scatter with the cheese and grill for 2 minutes until melted and bubbling.',
      'Serve hot with the chips.'
    ],
    tips: [
      'Warm the beans with a little water to loosen them.',
      'Taste while hot and add more spice if needed.',
      'Add a spoon of soured cream on top to serve.'
    ],
    pair: ['Tortilla chips', 'Soured cream', 'Guacamole', 'Cucumber sticks'],
    store: 'Keeps in the fridge for up to 3 days. Reheat with a splash of water.',
    nut: [302, 11, 33, 14, 5, 2, 660]
  },

  'honey-mustard-sausages': {
    d: 'Cocktail sausages baked and tossed in a sticky glaze of honey, wholegrain mustard and soy sauce. Eight servings in 25 minutes.',
    meta: 'Honey mustard sausages: cocktail sausages baked and tossed in a sticky honey and wholegrain mustard glaze. A very cheap party snack for eight, 25 minutes.',
    kw: ['honey mustard sausages', 'honey mustard cocktail sausages', 'budget party sausages', 'easy glazed sausages', 'cheap party snack'],
    why: 'The glaze is the whole point, and it is made from three things: honey, mustard and a splash of soy. Together they are sweet, sharp and salty, and they stick to anything that comes out of the oven.\n\nBake the sausages first on their own, 15 minutes at 200°C, until they start to brown. They give off fat which you drain, so the glaze sticks instead of sliding off.\n\nToss them in the glaze while they are still hot. **The heat thins the honey** and it coats every sausage in a single stir.\n\nReturn to the oven for 5 minutes, until sticky and dark at the edges. Watch them for the last minute: honey goes from caramel to burnt quickly. Serve them warm with cocktail sticks. Cocktail sausages are inexpensive in the freezer section, and the glaze gives them a party feel. Keep them warm in a low oven, and put out cocktail sticks and a napkin for each guest.',
    ing: [
      '600 g cocktail sausages',
      '3 tbsp honey',
      '2 tbsp wholegrain mustard',
      '1 tbsp soy sauce',
      '1 tsp vegetable oil'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Spread the sausages on a lined tray, brush with the oil and bake for 15 minutes.',
      'Mix the honey, mustard and soy sauce in a large bowl.',
      'Drain off any fat from the tray, tip the hot sausages into the bowl and toss to coat.',
      'Return to the tray and bake for 5 minutes more until sticky and dark at the edges.'
    ],
    tips: [
      'Drain the fat before glazing so the sauce sticks.',
      'Line the tray with paper; the glaze is hard to scrub.',
      'Watch for the last minute to avoid burning.'
    ],
    pair: ['Cocktail sticks', 'Mustard dip', 'Coleslaw', 'Bread rolls'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 10 minutes.',
    nut: [247, 10, 9, 19, 1, 7, 780]
  },

  'honey-garlic-meatballs': {
    d: 'Beef and pork meatballs baked until browned and tossed in a sticky honey, garlic and soy glaze. Six servings in 45 minutes.',
    meta: 'Honey garlic meatballs: beef meatballs baked until browned and tossed in a sticky honey, garlic and soy glaze. A cheap party snack for six, 45 minutes.',
    kw: ['honey garlic meatballs', 'sticky glazed meatballs', 'budget party meatballs', 'easy baked meatballs', 'cheap snack for six'],
    why: 'Panade is the answer to dry meatballs. Soaking breadcrumbs in milk for 5 minutes and mixing them in holds moisture inside the meat as it cooks, and the result stays tender instead of turning into hard little lumps.\n\nMix gently, just until combined. A heavy hand compacts the meat. Shape into balls of about 30 g, using wet hands to stop the mixture sticking.\n\nBake rather than fry. A hot oven browns them evenly, they do not need turning, and the tray is the only thing to wash.\n\n**The glaze goes on at the end.** Honey burns, so it is simmered separately in a small pan with garlic and soy sauce, and tossed with the hot meatballs. Serve them warm with cocktail sticks, or over rice. The meatballs freeze well before glazing, so a large batch is worthwhile. Defrost them overnight in the fridge and warm in the oven, then toss in a freshly made glaze just before serving.',
    ing: [
      '500 g beef mince',
      '50 g dried breadcrumbs',
      '60 ml milk',
      '1 egg',
      '2 garlic cloves, grated',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '4 tbsp honey',
      '3 tbsp soy sauce',
      '3 garlic cloves, grated, for the glaze',
      '1 tbsp rice vinegar',
      '1 tsp sesame seeds'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a tray. Soak the breadcrumbs in the milk for 5 minutes.',
      'Mix the mince, soaked crumbs, egg, 2 garlic cloves, salt and pepper gently. Shape into 24 balls.',
      'Bake for 20 minutes, until browned and cooked through.',
      'Meanwhile, simmer the honey, soy sauce, remaining garlic and vinegar in a small pan for 4 minutes until syrupy. Toss the meatballs in the glaze and sprinkle with the sesame seeds.'
    ],
    tips: [
      'Mix the meatballs lightly to keep them tender.',
      'Wet your hands to shape them without sticking.',
      'Make the glaze while they bake; honey burns quickly.'
    ],
    pair: ['Steamed rice', 'Cocktail sticks', 'Cucumber salad', 'Stir-fried vegetables'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 10 minutes. Freezes for up to 3 months.',
    nut: [282, 19, 20, 14, 1, 13, 770]
  },

  'butter-bean-stew': {
    d: 'Butter beans simmered with carrot, celery, tomatoes and smoked paprika into a thick stew. Four servings in 45 minutes.',
    meta: 'Butter bean stew: butter beans simmered with carrot, celery, tomatoes and smoked paprika into a thick stew. A very cheap dinner for four in 45 minutes.',
    kw: ['butter bean stew', 'butter beans in tomato sauce', 'budget bean stew', 'easy butter bean casserole', 'cheap stew for four'],
    why: 'Butter beans are mild and creamy, and the stew built around them should add flavour without overwhelming them. Smoked paprika does most of the work, with garlic and tomato behind it.\n\nStart with the vegetables. Onion, carrot and celery cooked slowly in oil for 10 minutes give a sweet base that tinned beans lack.\n\nThe beans go in tinned, drained and rinsed, with the tomatoes and stock. **Simmer gently, with the lid half on**, because a hard boil splits the skins and turns the beans to mush.\n\nCrush a few against the side of the pot near the end. Their starch thickens the sauce without flour. Finish with a handful of chopped parsley and a splash of vinegar, which lifts the whole pot. Butter beans soak up flavour and hold together in a long simmer, which makes them a dependable store-cupboard ingredient. Serve the stew in wide bowls with a drizzle of oil on top and plenty of bread to soak up the sauce.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '2 tsp smoked paprika',
      '400 g tin chopped tomatoes',
      '300 ml vegetable stock',
      '720 g tinned butter beans, drained and rinsed',
      '1/2 tsp salt',
      '1 tbsp red wine vinegar',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion, carrots and celery for 10 minutes. Add the garlic and paprika and cook for 1 minute.',
      'Add the tomatoes, stock, beans and salt. Bring to a boil, then lower to a simmer.',
      'Cook with the lid half on for 20 minutes, until thick. Crush a few beans against the side of the pot.',
      'Stir in the vinegar and parsley and serve.'
    ],
    tips: [
      'Keep the heat gentle so the beans stay whole.',
      'Crush a few beans to thicken the stew.',
      'Add a splash of water if it gets too thick.'
    ],
    pair: ['Crusty bread', 'Rice', 'Green salad', 'Grilled sausages'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat with a splash of water.',
    nut: [284, 14, 39, 8, 12, 7, 1130]
  }
};
