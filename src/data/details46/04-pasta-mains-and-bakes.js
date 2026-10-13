'use strict';

/**
 * Volume forty-six — dough, pasta, mince, chicken, beans and vegetable sides.
 *
 * Twenty-one dishes: a yeast-free pizza dough, three-ingredient cookies,
 * stewed apples, three pasta dishes, salmon cakes, mince and potatoes,
 * burgers, two chicken tray dishes, baked beans, vegetable fritters, two
 * Greek bakes, two Spanish dishes, a Portuguese rice pudding, a Chinese
 * greens dish, aubergine in garlic sauce and a boerewors roll. Times are the
 * recipe's own; ovens and hobs differ, so each method says what to look for.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'pizza-dough-without-yeast': {
    d: 'A quick dough of self-raising flour, yoghurt and salt, mixed in a bowl, rolled thin and baked without any proving.',
    meta: 'Pizza dough without yeast: self-raising flour and yoghurt mixed into a quick dough, rolled and baked. Four servings, baked for 15 minutes.',
    kw: ['pizza dough without yeast', 'no yeast pizza dough', 'yoghurt pizza dough', 'self raising flour pizza dough', 'pizza base without yeast'],
    why: 'Why does bread dough have to rest before it goes in the oven? Because yeast needs time to make gas. This dough has no yeast, so it needs no time: the rise comes from the raising agent in self-raising flour and from the yoghurt.\n\nTwo ingredients form the dough: self-raising flour and thick yoghurt. A little salt seasons it. Mix until it just comes together, then knead for a minute. **Do not over-knead.** There is no gluten to build, and a tough dough bakes into a cracker.\n\nRoll the dough thin, about the thickness of a coin. A thin base crisps in the middle and puffs gently at the edges. Thick dough stays pale and floury.\n\nBake on a hot tray so the underside sets quickly. Top and finish as you like, or bake the base first for 5 minutes if the toppings are wet. Add a pinch of dried oregano or garlic powder to the flour for more flavour. The dough also works as a quick flatbread cooked in a dry pan.',
    ing: [
      '250 g self-raising flour',
      '250 g thick plain yoghurt',
      '1/2 tsp salt',
      '1 tbsp olive oil',
      '120 g tomato passata',
      '120 g mozzarella, grated',
      '1/2 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 230°C (210°C fan) with a large baking tray inside.',
      'Mix the flour, yoghurt and salt in a bowl until a dough forms. Knead on a floured surface for 1 minute.',
      'Divide into 2 pieces and roll each into a thin round about 25 cm wide.',
      'Brush with the oil, spread with the passata, scatter with the mozzarella and oregano and slide onto the hot tray.',
      'Bake for 15 minutes until the base is crisp and the cheese is golden.'
    ],
    tips: [
      'Knead only until the dough is smooth.',
      'Roll the dough thin for a crisp base.',
      'Preheat the tray so the base cooks from underneath.',
      'Dust the work surface with flour so the dough does not stick.'
    ],
    pair: ['Green salad', 'Garlic dip', 'Sliced tomatoes', 'Olives'],
    store: 'The dough is best used straight away. Baked pizza keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [396, 20, 52, 12, 2, 4, 530]
  },

  'three-ingredient-peanut-butter-cookies': {
    d: 'Chewy peanut butter cookies made from just peanut butter, sugar and an egg, baked on one tray.',
    meta: 'Three ingredient peanut butter cookies: peanut butter, sugar and an egg baked into chewy cookies. Twelve cookies, baked for 12 minutes.',
    kw: ['three ingredient peanut butter cookies', '3 ingredient peanut butter cookies', 'peanut butter cookies with egg and sugar', 'flourless peanut butter cookies', 'simple peanut butter cookies'],
    why: 'A good thing to make for a group of twelve when the cupboards are nearly bare. Peanut butter, sugar and one egg are all the dough needs, and nothing has to be creamed, rested or chilled.\n\nUse a smooth peanut butter, not the natural kind that separates. Natural peanut butter has more oil and less sugar, and the dough turns greasy and crumbles. **Stir the dough until no streaks remain.** Uneven mixing gives cookies that spread in some places and stay dense in others.\n\nShape the dough into balls and press each flat with a fork, once in each direction. This flattening matters, because a ball stays raw in the middle while the outside browns.\n\nThe cookies come out soft and pale, and they firm up on the tray as they cool. Leave them for 5 minutes before lifting, or they break. A pinch of salt on top before baking sharpens the flavour. Press chocolate chips into the tops if you want something richer.',
    ing: [
      '250 g smooth peanut butter',
      '150 g caster sugar',
      '1 egg, about 50 g'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a baking tray with baking paper.',
      'Mix the peanut butter, sugar and egg until smooth and no streaks remain.',
      'Roll into 12 balls, set them on the tray 5 cm apart and press flat with a fork.',
      'Bake for 12 minutes until the edges are set. Cool on the tray for 5 minutes before lifting.'
    ],
    tips: [
      'Use a smooth peanut butter that does not separate.',
      'Flatten each ball so the middle cooks through.',
      'If your oven runs hot, check at 10 minutes.',
      'Wait for the cookies to cool before moving them.'
    ],
    pair: ['A glass of milk', 'Hot chocolate', 'Sliced banana', 'Tea'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [191, 6, 17, 11, 2, 14, 10]
  },

  'stewed-apples': {
    d: 'Peeled apples simmered in a little water, sugar and cinnamon until soft but still in pieces.',
    meta: 'Stewed apples: peeled apples simmered with sugar, cinnamon and a little water until soft. Four servings, cooked for 15 minutes.',
    kw: ['stewed apples', 'stewed apples with cinnamon', 'how to stew apples', 'stewed apple compote', 'simple stewed apples'],
    why: 'What do you do with apples that have gone soft in the fruit bowl? Stew them. A pan, a splash of water and a spoonful of sugar turn tired fruit into a warm pudding or a topping for porridge.\n\nCooking apples such as Bramley break down into a fluffy purée, while eating apples hold their shape better. Mix both for a texture with some chunks and some sauce. **Add only a little water.** Apples release their own juice, and too much water makes a thin, pale stew.\n\nCook with the lid on at first, so the steam softens the fruit. Take it off for the last few minutes to let any extra liquid reduce.\n\nSugar goes in to taste. Cooking apples need more than sweet ones, and a squeeze of lemon sharpens the flavour. Serve warm with cream, custard or yoghurt. Try a few blackberries or a handful of raisins in the pan. Both soften quickly and add colour and sweetness.',
    ing: [
      '700 g apples, peeled, cored and sliced',
      '3 tbsp water',
      '40 g sugar',
      '1/2 tsp ground cinnamon',
      '1 tsp lemon juice'
    ],
    st: [
      'Put the apples, water, sugar and cinnamon in a pan and bring to a simmer.',
      'Cover and cook over a low heat for 10 minutes, stirring now and then.',
      'Remove the lid and cook for 5 minutes more until the apples are soft and the liquid has thickened.',
      'Stir in the lemon juice and taste. Add more sugar if needed.'
    ],
    tips: [
      'Use a mix of cooking and eating apples.',
      'Start with little water; you can always add more.',
      'Taste before sweetening, since apple varieties differ.',
      'Add a few cloves or a strip of lemon peel for extra flavour.'
    ],
    pair: ['Custard', 'Porridge', 'Plain yoghurt', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 5 days. Freezes well for up to 3 months.',
    nut: [144, 1, 35, 0, 4, 28, 5]
  },

  'pasta-with-tomato-and-basil': {
    d: 'Spaghetti tossed in a quick tomato sauce of garlic, olive oil and tinned tomatoes, finished with torn basil.',
    meta: 'Pasta with tomato and basil: spaghetti in a quick sauce of garlic, olive oil, tinned tomatoes and basil. Four servings, cooked for 20 minutes.',
    kw: ['pasta with tomato and basil', 'spaghetti with tomato and basil', 'simple tomato basil pasta', 'tomato and basil spaghetti', 'pasta with fresh basil'],
    why: 'Pomodoro is the Italian word for tomato, and this dish is little more than that: tomato, garlic, oil and basil, tossed with pasta. It is a recipe that depends entirely on the quality of what goes in.\n\nTinned tomatoes are the reliable choice, since they are picked ripe and cooked in the tin. Fresh tomatoes only beat them in high summer. Simmer them with the garlic for about 12 minutes until the sauce is thick enough to coat a spoon. **Do not let the garlic brown.** It turns bitter and spoils the pot.\n\nCook the pasta until just firm and keep a cup of the cooking water. Toss the pasta into the sauce with a splash of that water. The starch in it makes the sauce cling.\n\nTear the basil by hand and add it at the end, off the heat. A final drizzle of olive oil makes the dish glossy.',
    ing: [
      '350 g spaghetti',
      '3 tbsp olive oil',
      '3 garlic cloves, sliced',
      '800 g tinned chopped tomatoes',
      '1/2 tsp salt',
      '1/2 tsp sugar',
      '15 g fresh basil leaves',
      '30 g parmesan, grated'
    ],
    st: [
      'Cook the spaghetti in a large pan of well-salted boiling water according to the packet. Keep a cup of the cooking water, then drain.',
      'Meanwhile, warm 2 tbsp of the oil in a wide pan. Add the garlic for 1 minute without browning.',
      'Add the tomatoes, salt and sugar and simmer for 12 minutes until thick.',
      'Toss the spaghetti into the sauce with a splash of the pasta water. Tear in the basil, drizzle with the remaining oil and serve with the parmesan.'
    ],
    tips: [
      'Salt the pasta water well.',
      'Keep the garlic pale.',
      'Add a splash of pasta water to help the sauce cling.',
      'Add the basil at the end, so it stays fresh.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Grated parmesan', 'A glass of red wine'],
    store: 'Keeps in the fridge for 3 days. The sauce freezes well on its own for 3 months.',
    nut: [490, 16, 75, 14, 5, 8, 420]
  },

  'pasta-with-peas-and-bacon': {
    d: 'Short pasta tossed with crisp bacon, sweet peas, garlic and a splash of cream, finished with parmesan.',
    meta: 'Pasta with peas and bacon: short pasta tossed with crisp bacon, peas, garlic and cream. Four servings, cooked for 20 minutes.',
    kw: ['pasta with peas and bacon', 'bacon and pea pasta', 'creamy bacon and pea pasta', 'pea and bacon pasta', 'penne with peas and bacon'],
    why: 'Midweek, tired, with a bag of peas in the freezer and a packet of bacon in the fridge: this is the dinner for that evening. It feeds four and takes about 25 minutes from the first step.\n\nBacon does the heavy lifting. Cook it slowly in a dry pan so the fat renders and the pieces turn crisp. Leave the fat in the pan, as it becomes the base of the sauce. **Do not drain the bacon fat.** It carries the smoky flavour through the rest of the dish.\n\nFrozen peas go into the pasta water for the last 2 minutes of cooking. They need no separate step, and they come out bright green rather than grey.\n\nStir in the cream and a splash of pasta water, then the pasta. Cheese goes on last. The dish should look glossy, not soupy. Leave out the cream for a lighter version and use more pasta water to bind the sauce. Add lemon zest for freshness.',
    ing: [
      '350 g penne',
      '200 g streaky bacon, chopped',
      '2 garlic cloves, crushed',
      '200 g frozen peas',
      '120 ml double cream',
      '1/4 tsp black pepper',
      '40 g parmesan, grated'
    ],
    st: [
      'Cook the penne in a large pan of well-salted boiling water according to the packet, adding the peas for the last 2 minutes. Keep a cup of the water, then drain.',
      'Cook the bacon in a large pan over a medium heat for 8 minutes until crisp. Add the garlic for 30 seconds.',
      'Stir in the cream and a splash of pasta water and bring to a gentle simmer.',
      'Toss in the pasta and peas with the pepper and half the parmesan. Serve with the rest of the cheese.'
    ],
    tips: [
      'Cook the bacon slowly so the fat runs.',
      'Add the peas to the pasta pan to save a step.',
      'Use pasta water to loosen the sauce.',
      'Taste before adding salt, as bacon and parmesan are both salty.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Sliced tomatoes', 'Crusty bread'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of milk or water.',
    nut: [593, 27, 74, 21, 6, 6, 920]
  },

  'pasta-frittata': {
    d: 'Leftover cooked spaghetti mixed with eggs, parmesan and parsley, set in a frying pan and finished under the grill.',
    meta: 'Pasta frittata: cooked spaghetti mixed with eggs, parmesan and parsley, set in a pan and grilled. Four servings, cooked for 15 minutes.',
    kw: ['pasta frittata', 'spaghetti frittata', 'leftover pasta frittata', 'frittata with pasta', 'italian pasta omelette'],
    why: 'Autumn Sundays leave a lot of cooked pasta behind, and the next day this is what to do with it. Pasta frittata turns a cold bowl of leftover spaghetti into a crisp-edged, golden cake, with no sauce and no fuss.\n\nCold pasta sets better than hot. It has dried a little, so it takes up the egg without turning slimy. Toss it with the beaten egg, cheese and parsley until every strand is coated. **Press the mix down firmly in the pan.** A loose, fluffy mix does not hold together when you cut it.\n\nCook on a medium-low heat for about 8 minutes. The base should turn deep golden and the edges start to pull away from the pan.\n\nFinish under a hot grill for the top. Slide it onto a board, cut into wedges and eat warm or cold. Cut it into wedges and pack it for lunch. It tastes just as good cold, with a green salad.',
    ing: [
      '250 g cooked spaghetti',
      '5 eggs, about 250 g',
      '40 g parmesan, grated',
      '15 g fresh parsley, chopped',
      '1/4 tsp black pepper',
      '1/4 tsp salt',
      '2 tbsp olive oil'
    ],
    st: [
      'Beat the eggs with the parmesan, parsley, pepper and salt. Stir in the spaghetti until every strand is coated.',
      'Heat the oil in a 24 cm ovenproof frying pan over a medium-low heat. Pour in the mix and press it down firmly.',
      'Cook for 8 minutes until the base is deep golden and the edges pull away.',
      'Slide the pan under a hot grill for 3 minutes until the top is set and golden. Cut into wedges.'
    ],
    tips: [
      'Use cold, leftover pasta.',
      'Press the mixture firmly into the pan.',
      'Use an ovenproof pan with a metal handle.',
      'Let the frittata rest for 2 minutes before cutting.'
    ],
    pair: ['Green salad', 'Tomato salad', 'Crusty bread', 'Olives'],
    store: 'Keeps in the fridge for 2 days. Serve cold or reheat in a low oven.',
    nut: [284, 15, 20, 16, 1, 1, 380]
  },

  'canned-salmon-cakes': {
    d: 'Tinned pink salmon mixed with mashed potato, spring onion and lemon, shaped into patties and pan-fried.',
    meta: 'Canned salmon cakes: tinned salmon mixed with mashed potato, spring onion and lemon, pan-fried until golden. Four servings, cooked for 10 minutes.',
    kw: ['canned salmon cakes', 'tinned salmon cakes', 'salmon patties with potato', 'salmon cakes with mashed potato', 'salmon fish cakes'],
    why: 'On a busy evening when the cupboard is the shopping list, this is a dinner you can make from tins and a potato. Tinned salmon is cheap and already cooked, so the work is only in mixing and frying.\n\nDrain the salmon well and flake it with a fork. Tinned salmon often contains small soft bones, which are edible and rich in calcium, though you can remove them if you prefer. **Use cold mashed potato.** Warm potato is soft and sticky, and the patties collapse in the pan.\n\nShape the mixture into four thick patties and chill them for 10 minutes if you have time. Cold patties hold together much better.\n\nFry in a little oil over a medium heat. Turn once, after the underside has formed a golden crust. Serve with lemon wedges and a green salad. A spoonful of tartare sauce or mayonnaise mixed with lemon works well on the side. Tinned tuna can replace the salmon.',
    ing: [
      '420 g tinned pink salmon, drained',
      '300 g cold mashed potato',
      '3 spring onions, about 40 g, sliced',
      '1 egg, about 50 g',
      '1 tbsp lemon juice',
      '1/4 tsp black pepper',
      '3 tbsp plain flour',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Flake the salmon into a bowl, removing any large bones. Add the potato, spring onions, egg, lemon juice and pepper and mix well.',
      'Shape into 4 patties and coat lightly in the flour. Chill for 10 minutes if you have time.',
      'Heat the oil in a frying pan over a medium heat. Fry the patties for 4 minutes on each side until golden and hot through.'
    ],
    tips: [
      'Use cold mashed potato so the patties hold.',
      'Drain the salmon well.',
      'Turn the patties only once.',
      'Chill them first if they feel soft.'
    ],
    pair: ['Green salad', 'Lemon wedges', 'Tartare sauce', 'Peas'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven or pan until hot through.',
    nut: [334, 25, 18, 18, 2, 1, 490]
  },

  'mince-and-potatoes': {
    d: 'Beef mince browned with onion and carrot, then simmered with diced potatoes in a thin gravy until tender.',
    meta: 'Mince and potatoes: beef mince browned with onion and carrot, simmered with diced potatoes in gravy. Four servings, cooked for 30 minutes.',
    kw: ['mince and potatoes', 'beef mince and potato stew', 'mince and potato dinner', 'savoury mince with potatoes', 'minced beef and potatoes'],
    why: 'Brown the mince properly. That is the advice for this dish, and the one step that people skip. Mince that is simply stirred until grey tastes flat. Mince left alone for a few minutes in a hot pan develops a deep brown crust, and that crust is the flavour.\n\nPress it down into the pan, let it sit, then break it up and turn it. **Do not crowd the pan.** If the meat steams in its own juice, it will not brown at all.\n\nThe potatoes are cut small, about 2 cm, so they cook in the same time as the sauce. They thicken the gravy slightly as they cook, and some of them break down at the edges.\n\nA spoonful of tomato purée and a splash of Worcestershire sauce add depth. Taste before serving, as stock varies a lot in saltiness. Serve it in shallow bowls with bread. A few dashes of Worcestershire sauce at the end sharpen the gravy.',
    ing: [
      '1 tbsp vegetable oil',
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '2 tbsp tomato purée',
      '500 g potatoes, peeled and cut into 2 cm cubes',
      '500 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1/2 tsp black pepper',
      '100 g frozen peas'
    ],
    st: [
      'Heat the oil in a large pan over a high heat. Add the mince, press it down and brown for 5 minutes, then break it up.',
      'Add the onion and carrots and cook for 5 minutes. Stir in the tomato purée for 1 minute.',
      'Add the potatoes, stock, Worcestershire sauce and pepper and bring to the boil.',
      'Cover, lower the heat and simmer for 15 minutes until the potatoes are tender. Stir in the peas for the last 3 minutes.'
    ],
    tips: [
      'Let the mince sit in the pan to brown.',
      'Cut the potatoes small so they cook in time.',
      'Taste before adding salt, as the stock is salty.',
      'Mash a few potatoes into the sauce to thicken it.'
    ],
    pair: ['Buttered cabbage', 'Crusty bread', 'Pickled beetroot', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Freezes for up to 2 months. Reheat until piping hot.',
    nut: [463, 30, 34, 23, 6, 6, 580]
  },

  'homemade-burger-patties': {
    d: 'Beef mince shaped into thick patties, seasoned with salt and pepper and pan-fried until browned on both sides.',
    meta: 'Homemade burger patties: beef mince shaped into patties, seasoned and pan-fried until browned. Four servings, cooked for 10 minutes.',
    kw: ['homemade burger patties', 'beef burger patties', 'how to make burger patties', 'pan fried burger patties', 'simple beef burgers'],
    why: 'Beef mince, salt, pepper and an onion: four things, and a burger that tastes better than most from a packet. The ingredient list is short because the method matters more.\n\nHandle the meat as little as possible. Overworked mince turns dense and rubbery, because the proteins bind tightly. Mix gently with a fork, shape the patties lightly and stop. **Press a dent in the centre of each patty.** The middle puffs as it cooks, and a dent keeps the burger flat rather than domed.\n\nSalt the patties on the outside just before cooking, not in the mix. Salt mixed through early makes the texture bouncy and sausage-like.\n\nCook in a hot pan without moving them for 4 minutes. A crust forms, and the patty lifts easily when ready to turn. Rest for 2 minutes before eating. Make several at once and freeze them between sheets of baking paper. They go straight from the freezer to the pan with a few extra minutes.',
    ing: [
      '500 g beef mince',
      '1/2 onion, about 75 g, finely grated',
      '1/4 tsp black pepper',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '4 burger buns, about 240 g'
    ],
    st: [
      'Mix the mince, onion and pepper gently with a fork and shape into 4 patties about 2 cm thick. Press a dent in the middle of each.',
      'Heat the oil in a large frying pan over a high heat. Sprinkle the patties with the salt.',
      'Cook for 4 minutes without moving, turn and cook for 4 minutes more until browned and cooked through. Rest for 2 minutes.',
      'Toast the buns in the pan and serve the patties inside.'
    ],
    tips: [
      'Handle the mince as little as you can.',
      'Salt the outside just before cooking.',
      'Leave the patties alone while they brown.',
      'Check they are cooked through, with no pink in the middle.'
    ],
    pair: ['Sliced tomato', 'Lettuce', 'Pickles', 'Oven chips'],
    store: 'Raw patties keep in the fridge for 1 day, or freeze for up to 2 months. Eat cooked patties within 2 days.',
    nut: [469, 29, 32, 25, 2, 5, 680]
  },

  'chicken-drumsticks-roasted': {
    d: 'Chicken drumsticks tossed in oil, paprika and garlic, roasted until the skin is crisp and the meat is cooked through.',
    meta: 'Roasted chicken drumsticks: drumsticks tossed in oil, paprika and garlic, roasted until the skin is crisp. Four servings, cooked for 40 minutes.',
    kw: ['roasted chicken drumsticks', 'oven baked chicken drumsticks', 'crispy chicken drumsticks', 'chicken drumsticks in the oven', 'paprika chicken drumsticks'],
    why: 'Most home versions come out with pale, rubbery skin, and the fix is to dry the drumsticks well and give them space on the tray. Water on the skin turns to steam in the oven, and steam stops crisping.\n\nPat each drumstick dry with kitchen paper and toss with the oil and spices in a bowl. A rub of paprika and garlic gives colour and flavour, and a little salt draws out surface moisture. **Do not crowd the tray.** Leave a finger-width gap between pieces so hot air can reach the skin.\n\nRoast at a high heat. Turn the drumsticks once halfway so all sides colour evenly.\n\nThey are done when the skin is deep brown and the juices run clear when you pierce the thickest part with a knife. Rest for 5 minutes before serving. Drumsticks are one of the cheapest cuts of chicken. A squeeze of lemon and a spoonful of yoghurt on the side balance the smoky spice.',
    ing: [
      '12 chicken drumsticks, about 1.2 kg',
      '2 tbsp vegetable oil',
      '2 tsp smoked paprika',
      '1 tsp garlic granules',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan).',
      'Pat the drumsticks dry and toss with the oil, paprika, garlic granules, salt and pepper.',
      'Spread on a large tray with gaps between each piece.',
      'Roast for 40 minutes, turning once halfway, until the skin is deep brown and the juices run clear. Rest for 5 minutes.'
    ],
    tips: [
      'Pat the chicken dry before seasoning.',
      'Leave gaps between the drumsticks.',
      'If your oven runs hot, check at 30 minutes.',
      'Pierce the thickest part to check the juices run clear.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Roast potatoes', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven until piping hot.',
    nut: [433, 51, 1, 25, 0, 0, 860]
  },

  'chicken-tray-bake': {
    d: 'Chicken thighs roasted on one tray with potatoes, carrots and onion, seasoned with oil, garlic and thyme.',
    meta: 'Chicken tray bake: chicken thighs roasted with potatoes, carrots and onion on one tray. Four servings, cooked for 45 minutes.',
    kw: ['chicken tray bake', 'chicken and potato tray bake', 'one tray chicken thighs and vegetables', 'chicken thighs with roast vegetables', 'chicken traybake with potatoes'],
    why: 'Cut the vegetables smaller than you think you need to. That is the single most useful piece of advice for a tray bake, because the chicken and the vegetables must finish together, and vegetables cut thick take far longer than thighs.\n\nPotatoes and carrots go in about 2 cm cubes. The chicken thighs sit on top, skin-side up, so their fat drips down and flavours the vegetables beneath. **Do not cover the tray with foil.** The skin needs dry heat to crisp.\n\nToss the vegetables in oil, garlic and thyme, and season everything well. Salt the chicken skin too, as it helps it brown.\n\nTurn the vegetables once halfway through. The tray is ready when the chicken skin is deep golden, the potatoes have crisp edges and the juices from a thigh run clear. Thighs are cheaper and harder to overcook than breast. Leftovers can be shredded into a wrap or stirred into rice the next day.',
    ing: [
      '8 chicken thighs, bone in, about 1 kg',
      '700 g potatoes, cut into 2 cm cubes',
      '3 carrots, about 250 g, cut into 2 cm pieces',
      '1 onion, about 150 g, cut into wedges',
      '3 tbsp olive oil',
      '4 garlic cloves, crushed',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan).',
      'Toss the potatoes, carrots, onion, garlic and thyme with 2 tbsp of the oil and half the salt on a large tray.',
      'Rub the chicken with the rest of the oil, salt and the pepper and lay skin-side up on top of the vegetables.',
      'Roast for 45 minutes, stirring the vegetables once, until the skin is golden and the juices run clear.'
    ],
    tips: [
      'Cut the vegetables small so they cook with the chicken.',
      'Put the chicken skin-side up and leave the tray uncovered.',
      'If your oven runs hot, check at 35 minutes.',
      'Spoon the tray juices over the plates.'
    ],
    pair: ['Green beans', 'Peas', 'Gravy', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven until piping hot.',
    nut: [578, 54, 41, 22, 7, 6, 870]
  },

  'baked-beans-from-scratch': {
    d: 'Haricot beans simmered in a sweet and smoky tomato sauce with onion, garlic and a splash of vinegar.',
    meta: 'Baked beans from scratch: tinned haricot beans simmered in a tomato sauce with onion, garlic and vinegar. Six servings, cooked for 40 minutes.',
    kw: ['baked beans from scratch', 'homemade baked beans', 'homemade baked beans in tomato sauce', 'baked beans on the hob', 'haricot beans in tomato sauce'],
    why: 'Salt the sauce lightly and let it simmer. That is the short version of how this recipe works, and the reason homemade beans beat the tin. A tin of sauce is made to taste of a lot; here you can decide how sweet, smoky and sharp it turns out.\n\nThe base is onion and garlic, softened in oil, then tomato purée and tinned tomatoes. Add paprika for smokiness, brown sugar for sweetness and vinegar for brightness. **Taste near the end and adjust.** Sweetness, acidity and salt need to balance, and each batch of tomatoes is different.\n\nTinned haricot beans are already cooked, so they need only enough time to absorb the sauce. Simmer uncovered so the sauce thickens.\n\nThe beans improve overnight. If they are for toast, a thick sauce stays on the bread rather than soaking it. Make a big batch and freeze it in portions. Homemade beans cost far less than the tinned kind and can be adjusted to your taste.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '2 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1 tsp smoked paprika',
      '2 tbsp soft brown sugar',
      '1 tbsp malt vinegar',
      '1 tbsp Worcestershire sauce',
      '960 g tinned haricot beans, drained',
      '150 ml water',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion for 6 minutes until soft. Add the garlic and tomato purée for 1 minute.',
      'Add the tomatoes, paprika, sugar, vinegar, Worcestershire sauce, beans, water and salt and bring to the boil.',
      'Lower the heat and simmer uncovered for 25 minutes, stirring now and then, until thick.',
      'Taste and adjust the sugar, vinegar or salt.'
    ],
    tips: [
      'Rinse the beans before they go in.',
      'Simmer without a lid so the sauce thickens.',
      'Taste at the end and adjust the sweetness and sharpness.',
      'Add a splash of water if the sauce gets too thick.'
    ],
    pair: ['Toast', 'Jacket potatoes', 'Sausages', 'Fried egg'],
    store: 'Keeps in the fridge for 5 days. Freezes well for up to 3 months.',
    nut: [211, 11, 35, 3, 9, 9, 710]
  },

  'vegetable-fritters': {
    d: 'Grated courgette, carrot and potato mixed with egg, flour and spring onion and shallow-fried until crisp.',
    meta: 'Vegetable fritters: grated courgette, carrot and potato bound with egg and flour and shallow-fried. Four servings, cooked for 15 minutes.',
    kw: ['vegetable fritters', 'mixed vegetable fritters', 'courgette and carrot fritters', 'veggie fritters', 'grated vegetable fritters'],
    why: 'Courgette, carrot, potato, egg, flour: five things from the fridge and the cupboard, and about 25 minutes. That is what vegetable fritters are, and they turn the odds and ends of the week into a meal.\n\nGrate everything on the coarse side of a box grater, then squeeze the lot in a clean tea towel. Courgette holds a lot of water, and any left in the mix makes the fritters limp. **Squeeze until almost no liquid comes out.** The mixture should feel damp, not wet.\n\nThe egg and flour are only there to hold the shreds together, so use as little flour as will do the job. A fritter that is mostly batter is heavy.\n\nCook in a medium-hot pan with a thin layer of oil. Press each spoonful flat and leave it alone until the underside is golden. Use whatever vegetables are in the drawer, such as sweetcorn or grated beetroot. Keep the total weight about the same.',
    ing: [
      '1 courgette, about 200 g, coarsely grated',
      '1 carrot, about 100 g, coarsely grated',
      '1 potato, about 150 g, coarsely grated',
      '3 spring onions, about 40 g, sliced',
      '2 eggs, about 100 g',
      '4 tbsp plain flour',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '4 tbsp vegetable oil'
    ],
    st: [
      'Mix the courgette, carrot and potato and squeeze firmly in a clean tea towel to remove the liquid.',
      'Mix with the spring onions, eggs, flour, salt and pepper.',
      'Heat half the oil in a large frying pan over a medium heat. Drop in 4 spoonfuls of the mix and press flat.',
      'Fry for 4 minutes on each side until golden and crisp. Repeat with the remaining oil and mix.'
    ],
    tips: [
      'Squeeze the grated vegetables very dry.',
      'Use only enough flour to bind.',
      'Press the fritters flat so they cook through.',
      'Keep the first batch warm in a low oven.'
    ],
    pair: ['Plain yoghurt', 'Fried egg', 'Green salad', 'Sweet chilli sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp them.',
    nut: [245, 6, 17, 17, 3, 3, 350]
  },

  'gigantes-plaki': {
    d: 'Large white beans baked slowly in a sauce of tomatoes, onion, garlic, olive oil and herbs, a Greek meze or main.',
    meta: 'Gigantes plaki: large white beans baked in a sauce of tomatoes, onion, garlic and olive oil. Six servings, cooked for 60 minutes.',
    kw: ['gigantes plaki', 'greek baked beans', 'greek giant beans in tomato sauce', 'gigantes beans', 'baked giant beans'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Giant beans cooked at a rolling boil split and turn to mush, while those baked gently in a covered dish stay whole and creamy.\n\nGigantes plaki means giant beans baked in a pan, and the beans are the large, flat, white variety that Greek shops sell dried or in jars. Tinned butter beans are a reasonable substitute and save hours. **Use plenty of olive oil.** It is the traditional richness of the sauce, and the dish tastes thin without it.\n\nThe sauce is onion and garlic softened in oil, then tomatoes, a little tomato purée, oregano and a bay leaf. It is baked uncovered for the last part so the top browns and the sauce thickens.\n\nServe warm or at room temperature, with crumbled feta and bread. This dish is better made a day ahead. The beans keep absorbing the sauce, and the flavours deepen overnight.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '4 garlic cloves, sliced',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1 tsp dried oregano',
      '2 bay leaves',
      '960 g tinned butter beans, drained',
      '200 ml water',
      '1/2 tsp salt',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan).',
      'Heat the oil in an ovenproof pan and cook the onion for 6 minutes. Add the garlic and tomato purée for 1 minute.',
      'Add the tomatoes, oregano, bay, beans, water and salt and bring to the boil.',
      'Cover and bake for 30 minutes, then uncover and bake for 20 minutes more until the sauce is thick and the top is browned at the edges. Stir in the parsley.'
    ],
    tips: [
      'Use good olive oil; it gives the dish its richness.',
      'Keep the beans whole by baking gently, not boiling.',
      'Check the sauce at 40 minutes, and add water if it is dry.',
      'Let the dish cool slightly, as the flavour is better warm than hot.'
    ],
    pair: ['Crumbled feta', 'Crusty bread', 'Green salad', 'Olives'],
    store: 'Keeps in the fridge for 4 days. Good cold or reheated.',
    nut: [258, 12, 30, 10, 10, 4, 690]
  },

  'briam': {
    d: 'A Greek tray bake of potatoes, courgettes, aubergine, onion and tomatoes roasted in olive oil and herbs.',
    meta: 'Briam: Greek tray bake of potatoes, courgettes, aubergine and tomatoes roasted in olive oil and herbs. Four servings, cooked for 60 minutes.',
    kw: ['briam', 'greek briam', 'greek roasted vegetables', 'briam greek vegetable bake', 'briam with potatoes and courgettes'],
    why: 'Briam is a dish of summer, when the courgettes and aubergines are at their best and the tomatoes are too ripe to eat plain. Everything goes into one dish with olive oil and herbs, and the oven does the rest.\n\nCut the vegetables into thick slices or chunks about the same size, so they cook together. Potatoes take the longest, so slice them a little thinner than the rest. **Do not skimp on the olive oil.** It carries the flavour and stops the vegetables drying out.\n\nLayer them loosely in a roasting dish, not packed, and pour over the tomatoes. Cover with foil for the first part of the bake so the vegetables steam and soften. Then take it off to brown.\n\nBriam tastes better warm than hot. Serve with crusty bread to mop up the oily tomato juices. Any summer vegetables work. The dish is also good cold the next day, with a spoonful of yoghurt and a piece of bread.',
    ing: [
      '500 g potatoes, peeled and thickly sliced',
      '2 courgettes, about 400 g, thickly sliced',
      '1 aubergine, about 250 g, cut into chunks',
      '1 onion, about 150 g, sliced',
      '400 g tinned chopped tomatoes',
      '4 garlic cloves, sliced',
      '5 tbsp olive oil',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan).',
      'Mix the potatoes, courgettes, aubergine, onion and garlic with the tomatoes, oil, oregano, salt and pepper in a large roasting dish.',
      'Cover with foil and bake for 30 minutes.',
      'Remove the foil, stir, and bake for 30 minutes more until the vegetables are tender and browned at the edges. Scatter with the parsley.'
    ],
    tips: [
      'Cut the potatoes slightly thinner than the other vegetables.',
      'Keep the foil on for the first half of the cooking time.',
      'Stir once, after the foil comes off.',
      'Add a splash of water if the dish looks dry under the foil.'
    ],
    pair: ['Crumbled feta', 'Crusty bread', 'Grilled fish', 'Roast chicken'],
    store: 'Keeps in the fridge for 3 days. Good cold or reheated.',
    nut: [334, 6, 37, 18, 8, 10, 620]
  },

  'lentejas': {
    d: 'A Spanish lentil stew of brown lentils, onion, carrot, pepper and paprika, finished with a splash of vinegar.',
    meta: 'Lentejas: Spanish lentil stew with onion, carrot, pepper and paprika, finished with a splash of vinegar. Four servings, cooked for 40 minutes.',
    kw: ['lentejas', 'spanish lentil stew', 'lentejas stewed lentils', 'spanish lentils with paprika', 'lentil stew with peppers'],
    why: 'Most home versions come out bland, and the fix is the paprika and the vinegar. Smoked paprika adds depth and warmth, and a spoonful of vinegar at the end lifts the flavour of the lentils.\n\nBrown or green lentils hold their shape in long cooking, which suits a stew like this one. Red lentils break down into a purée and would turn the dish to soup. Rinse them and check for stones. **Do not salt the lentils early.** Salt added at the start can toughen the skins, so add it near the end.\n\nThe vegetables are cooked slowly in olive oil to start. Onion, carrot and pepper soften and sweeten, and that sweetness balances the earthy lentils.\n\nSimmer gently for about 30 minutes. The stew should be thick enough to eat with a spoon but still a little brothy. In Spain, the dish is often served with a side of cured meat. For a meat-free version, a drizzle of good olive oil at the end is enough.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '1 green pepper, about 150 g, diced',
      '3 garlic cloves, sliced',
      '2 tsp smoked paprika',
      '250 g brown lentils, rinsed',
      '2 bay leaves',
      '900 ml water',
      '1 tsp salt',
      '1 tbsp red wine vinegar'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, carrots and pepper for 8 minutes until soft. Add the garlic and paprika for 1 minute.',
      'Add the lentils, bay and water and bring to the boil.',
      'Lower the heat and simmer for 30 minutes, stirring now and then, until the lentils are tender.',
      'Remove the bay. Stir in the salt and vinegar and serve.'
    ],
    tips: [
      'Add the salt towards the end.',
      'Keep the simmer gentle so the lentils stay whole.',
      'Add a splash of water if the stew thickens too much.',
      'Taste the vinegar before adding more.'
    ],
    pair: ['Crusty bread', 'Chorizo', 'Fried egg', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. It thickens as it stands, so add water when reheating.',
    nut: [359, 17, 48, 11, 10, 6, 620]
  },

  'pisto': {
    d: 'A Spanish vegetable stew of courgette, pepper, onion and tomato slowly cooked in olive oil until soft and sweet.',
    meta: 'Pisto: Spanish vegetable stew of courgette, pepper, onion and tomato slowly cooked in olive oil. Four servings, cooked for 35 minutes.',
    kw: ['pisto', 'pisto manchego', 'spanish vegetable stew', 'spanish ratatouille', 'pisto with eggs'],
    why: 'What is the difference between pisto and ratatouille? Mostly the cooking. Pisto is stirred and stewed in a pan until the vegetables break down into a soft, jammy mass, while ratatouille tends to keep its pieces distinct.\n\nStart with the onion and peppers, which take the longest, and add the courgette once they have softened. Tomatoes go in last, because their juice slows everything down. **Cook the pisto until the oil floats on top.** That is the signal that the water has cooked away and the flavour has concentrated.\n\nOlive oil is generous here, and it is the point. The vegetables absorb it, and it carries their flavour.\n\nPisto is served in many ways: with a fried egg on top, with bread, or as a side for meat. It is often better the next day. Traditionally it is served warm with a fried egg on top. Leftovers can be stirred into pasta or used as a filling for an omelette.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 red peppers, about 300 g, diced',
      '2 courgettes, about 400 g, diced',
      '3 garlic cloves, sliced',
      '400 g tinned chopped tomatoes',
      '1/2 tsp sugar',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion and peppers over a medium heat for 10 minutes until soft.',
      'Add the courgettes and garlic and cook for 8 minutes.',
      'Add the tomatoes, sugar, salt and pepper and simmer gently for 15 minutes, stirring now and then, until thick and the oil rises to the top.',
      'Taste and adjust the seasoning.'
    ],
    tips: [
      'Cook the vegetables slowly to keep them sweet.',
      'Add the tomatoes late to avoid a watery pisto.',
      'Stir now and then so nothing catches.',
      'Fry or poach eggs to serve on top.'
    ],
    pair: ['Fried eggs', 'Crusty bread', 'Grilled chicken', 'Rice'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [211, 3, 16, 15, 4, 10, 310]
  },

  'arroz-doce': {
    d: 'A Portuguese rice pudding cooked slowly in milk with a lemon peel and cinnamon stick, then dusted with ground cinnamon.',
    meta: 'Arroz doce: Portuguese rice pudding cooked in milk with lemon peel and a cinnamon stick. Six servings, cooked for 40 minutes.',
    kw: ['arroz doce', 'portuguese rice pudding', 'arroz doce recipe', 'rice pudding with lemon and cinnamon', 'portuguese sweet rice'],
    why: 'This is a pudding for a cold day, when a pan on the hob warms the kitchen and nobody minds standing at it. Arroz doce means sweet rice, and it is a creamy rice pudding flavoured with lemon peel and cinnamon.\n\nCook the rice in water first for 10 minutes, then add the milk a little at a time. This is the secret. Stirring in cold milk all at once cools the pan and slows everything down. **Add the milk in three batches.** Each time the rice absorbs it, add the next.\n\nA strip of lemon peel and a cinnamon stick go in at the start and are fished out at the end. They give a gentle fragrance without overpowering the rice.\n\nEgg yolks at the end thicken the pudding and give it a golden colour. Stir them in off the heat, or they scramble. In Portugal, the cinnamon is often drawn into a pattern on top. The pudding is served warm or chilled, and it thickens as it cools.',
    ing: [
      '200 g short grain rice',
      '400 ml water',
      '1 strip lemon peel',
      '3 g cinnamon stick',
      '800 ml whole milk',
      '120 g sugar',
      '1 pinch salt',
      '3 egg yolks, about 55 g',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Put the rice, water, lemon peel and cinnamon stick in a large pan and cook over a medium heat for 10 minutes until the water is absorbed.',
      'Add a third of the milk with the sugar and salt. Cook, stirring, until absorbed. Repeat twice more, about 25 minutes in all.',
      'Take the pan off the heat and remove the lemon peel and cinnamon stick. Stir in the egg yolks until smooth.',
      'Spoon into bowls and dust with the ground cinnamon. Serve warm or cold.'
    ],
    tips: [
      'Add the milk in stages, stirring each time.',
      'Use a wide pan so the rice cooks evenly.',
      'Stir the yolks in off the heat to avoid scrambling.',
      'The pudding thickens as it cools, so keep it slightly loose.'
    ],
    pair: ['Fresh berries', 'Stewed fruit', 'Coffee', 'Orange segments'],
    store: 'Keeps in the fridge for 3 days. Loosen with a splash of milk if it thickens.',
    nut: [319, 9, 55, 7, 1, 27, 90]
  },

  'bok-choy-with-garlic': {
    d: 'Halved bok choy stir-fried over a high heat with sliced garlic and a splash of soy sauce.',
    meta: 'Bok choy with garlic: halved bok choy stir-fried with sliced garlic and soy sauce. Four servings, cooked for 5 minutes.',
    kw: ['bok choy with garlic', 'garlic bok choy', 'stir fried bok choy', 'chinese bok choy with garlic', 'pak choi with garlic'],
    why: 'Keep the heat high. That is most of the recipe, and the part people get wrong. Bok choy has a crisp white stem and a tender green leaf, and a hot pan cooks both in a few minutes without turning either to mush.\n\nHalve the heads lengthways, or quarter larger ones. Wash them well, since grit hides between the stems, and shake off the water. **Dry bok choy fries; wet bok choy steams.** Pat the leaves with a clean tea towel if they are dripping.\n\nGarlic goes into the hot oil first for just a few seconds. It should sizzle and smell sweet, not brown. Then the bok choy goes in cut-side down so it can take on a little colour.\n\nA splash of soy sauce and water, a lid for one minute, and the stems turn tender. Serve at once. A splash of oyster sauce at the end makes the dish richer. Serve it at once, while the stems still have some crunch.',
    ing: [
      '600 g bok choy, halved lengthways',
      '2 tbsp vegetable oil',
      '4 garlic cloves, sliced',
      '2 tbsp soy sauce',
      '2 tbsp water',
      '1/2 tsp sesame oil',
      '1/2 tsp sugar'
    ],
    st: [
      'Heat the oil in a wok or large frying pan over a high heat. Add the garlic for 10 seconds.',
      'Add the bok choy cut-side down and cook for 1 minute until lightly coloured.',
      'Add the soy sauce, water and sugar. Cover and cook for 1 minute until the stems are tender.',
      'Uncover, toss for 30 seconds and finish with the sesame oil.'
    ],
    tips: [
      'Wash the bok choy well and dry it.',
      'Do not let the garlic brown.',
      'Serve it right away, while the stems are crisp.',
      'Use baby bok choy whole if you can find it.'
    ],
    pair: ['Steamed rice', 'Fried tofu', 'Noodles', 'Braised pork'],
    store: 'Best eaten straight away. It goes soft and watery in the fridge.',
    nut: [104, 3, 5, 8, 2, 2, 540]
  },

  'eggplant-with-garlic-sauce': {
    d: 'Aubergine pieces fried until soft and coated in a glossy sauce of garlic, soy sauce, vinegar and chilli.',
    meta: 'Eggplant with garlic sauce: aubergine fried until soft and coated in a garlic, soy, vinegar and chilli sauce. Four servings, cooked for 15 minutes.',
    kw: ['eggplant with garlic sauce', 'aubergine in garlic sauce', 'chinese garlic eggplant', 'braised aubergine with garlic', 'chinese aubergine in garlic sauce'],
    why: 'It looks like a rich braise and cooks like a stir fry, which is why the pan has to be hotter than you expect. Aubergine soaks up oil like a sponge, and in a cool pan it turns greasy before it softens.\n\nSalt the aubergine first for 10 minutes and pat it dry. The salt draws out some of the water, so the pieces brown rather than steam, and they absorb less oil. **Cut the pieces into chunks of the same size.** Small pieces fall apart, large ones stay hard in the middle.\n\nFry in batches in a hot pan with a generous slick of oil until golden. They will look overcooked on the outside by the end of the sauce, which is how they should be.\n\nThe sauce is mixed ahead and poured over the top. It thickens in seconds and coats everything in a shiny glaze. Leave the skin on for colour and texture. Add a spoonful of chilli bean paste to the sauce if you like heat.',
    ing: [
      '2 aubergines, about 600 g, cut into chunks',
      '1/2 tsp salt',
      '4 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '1 tbsp ginger, grated',
      '3 tbsp soy sauce',
      '1 tbsp rice vinegar',
      '2 tsp sugar',
      '100 ml water',
      '1 tsp cornflour',
      '2 spring onions, about 20 g, sliced'
    ],
    st: [
      'Toss the aubergine with the salt and leave for 10 minutes. Pat dry.',
      'Heat half the oil in a wide pan over a high heat and fry half the aubergine for 5 minutes until golden and soft. Lift out. Repeat with the rest.',
      'Mix the soy sauce, vinegar, sugar, water and cornflour.',
      'Add the garlic and ginger to the pan for 30 seconds, then the sauce. Stir until thick, return the aubergine and toss for 1 minute. Scatter with the spring onions.'
    ],
    tips: [
      'Salt and dry the aubergine first.',
      'Fry in batches so the pan stays hot.',
      'Stir the sauce before pouring it in, because the cornflour settles.',
      'Add chilli flakes with the garlic for heat.'
    ],
    pair: ['Steamed rice', 'Stir fried greens', 'Fried egg', 'Noodles'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [194, 3, 14, 14, 5, 8, 960]
  },

  'boerewors-roll': {
    d: 'Spiral boerewors sausage grilled or pan-fried and served in a soft roll with a sweet tomato and onion relish.',
    meta: 'Boerewors roll: grilled boerewors sausage in a soft roll with a sweet tomato and onion relish. Four servings, cooked for 20 minutes.',
    kw: ['boerewors roll', 'boerewors sausage roll', 'south african boerewors roll', 'boerewors with tomato and onion relish', 'boerewors on a roll'],
    why: 'The first sign it is ready is the smell: coriander and clove from the sausage as the fat starts to run, mixed with sweet onion caught at the edge of the pan. That is the signal for a South African braai, even when it is made on a hob.\n\nBoerewors is a coarse beef sausage seasoned with coriander and other spices. It is sold in a long spiral. Keep it coiled in the pan so it cooks evenly, and do not prick it. **Pricking lets the fat escape.** The sausage dries out, and you lose the juices that make it good.\n\nCook over a medium heat for about 15 minutes, turning once. It should be browned and firm, with no pink in the middle.\n\nThe relish is onion and tomato cooked until jammy with a pinch of sugar. Pile it on the sausage inside a soft roll. A roll with sausage and relish is a classic of South African stalls. Mustard or a little mayonnaise is a good addition.',
    ing: [
      '600 g boerewors sausage',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, sliced',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp sugar',
      '1/4 tsp salt',
      '4 soft rolls, about 240 g',
      '2 tbsp chutney'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion for 6 minutes until soft. Add the tomatoes, sugar and salt and cook for 8 minutes until jammy. Tip into a bowl.',
      'Add the boerewors to the pan, still coiled. Cook over a medium heat for 15 minutes, turning once, until browned and cooked through.',
      'Cut the sausage into 4 lengths and split the rolls.',
      'Spread the rolls with the chutney, add the sausage and top with the relish.'
    ],
    tips: [
      'Do not prick the sausage.',
      'Keep the heat medium so it cooks through without burning.',
      'Make the relish ahead and keep it warm.',
      'Check there is no pink in the middle before serving.'
    ],
    pair: ['Pap and tomato sauce', 'Coleslaw', 'Grilled corn', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan until hot through.',
    nut: [653, 26, 45, 41, 4, 11, 1700]
  }
};
