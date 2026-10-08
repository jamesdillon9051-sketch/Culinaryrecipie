'use strict';

/**
 * Volume thirty-six — breads, buns, biscuits and savoury bakes.
 *
 * Flour, yeast, milk and butter make bread that costs a fraction of a shop
 * loaf, and the no-yeast bakes (biscuits, muffins, farls, flatbread) are ready
 * in under an hour. The yeast doughs carry a `rest` for proving. Nutrition is
 * estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'honey-butter-biscuits': {
    d: 'Tall, flaky biscuits made with cold butter and milk, brushed with melted honey butter while hot. Makes 8 in 30 minutes.',
    meta: 'Honey butter biscuits: tall, flaky biscuits made with cold butter and milk, brushed with honey butter. Cheap and easy, 8 biscuits in 30 minutes.',
    kw: ['honey butter biscuits', 'easy buttermilk style biscuits', 'budget baking biscuits', 'flaky american biscuits', 'cheap bread side for eight'],
    why: 'Cold is the secret. Butter that is cold when it goes into the oven melts into the dough in steam bursts, and those bursts are what make the layers. If the butter softens while you work, the biscuits come out flat and dense.\n\nGrate the butter on the coarse side of a box grater and rub it in with your fingertips, quickly, until it looks like coarse crumbs with some pea-sized pieces left. **Those pieces are the flakiness.**\n\nAdd the milk all at once and stir with a fork until just combined. The dough will look shaggy; it should. Press, fold twice, and pat out to 3 cm thick.\n\nCut straight down with a floured cutter, without twisting, which seals the edges and stops the rise. Stand them close together, touching, so they rise up and not out. The honey butter goes on as they come out of the oven. Biscuits are best eaten the day they are made, ideally within the hour. If the oven is small, bake in two batches rather than crowding the tray, and keep the second portion of dough in the fridge while the first bakes.',
    ing: [
      '280 g plain flour',
      '1 tbsp baking powder',
      '1 tsp sugar',
      '1/2 tsp salt',
      '100 g cold butter, grated',
      '200 ml cold milk',
      '30 g butter, melted',
      '2 tbsp honey'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Mix the flour, baking powder, sugar and salt in a bowl. Rub in the grated butter until crumbly, leaving some pea-sized pieces.',
      'Stir in the milk with a fork until just combined. Tip onto a floured surface, pat out, fold in half twice, and pat to 3 cm thick.',
      'Cut 8 rounds with a 6 cm cutter, pressing straight down. Stand them touching on a lined tray.',
      'Bake for 15 minutes until risen and golden. Mix the melted butter and honey and brush over the hot biscuits.'
    ],
    tips: [
      'Keep everything cold, including the milk.',
      'Press the cutter straight down; twisting seals the edges.',
      'Do not overwork the dough or the biscuits turn tough.',
      'Check at 12 minutes if your oven runs hot.'
    ],
    pair: ['Fried chicken', 'Scrambled eggs', 'Jam', 'Sausage gravy'],
    store: 'Best eaten warm on the day. Keep in an airtight tin for up to 2 days and warm at 160°C for 5 minutes. Freezes for up to 2 months.',
    nut: [278, 5, 33, 14, 1, 6, 360]
  },

  'honey-cornbread': {
    d: 'A moist, lightly sweet cornbread made with cornmeal, flour, milk and honey and baked in a square tin. Makes 9 in 35 minutes.',
    meta: 'Honey cornbread: a moist, lightly sweet cornbread made with cornmeal, milk and honey, baked in a square tin. Cheap and easy, 9 pieces in 35 minutes.',
    kw: ['honey cornbread', 'sweet cornbread', 'budget cornbread', 'easy cornbread recipe', 'cheap bread side for nine'],
    why: 'Cornbread goes wrong when it is dry and crumbly, and the cause is usually too much baking or too little fat. The answer here is melted butter and an extra egg, which keep the crumb tender and give it a rich flavour.\n\nMix the wet and dry ingredients separately, then combine with a few strokes. **Overmixing makes cornbread tough**, so it should look slightly lumpy when it goes in the tin.\n\nPreheat the tin if you can. Pouring batter into a hot buttered tin gives a golden, crisp edge that a cold one never will.\n\nBake until a skewer comes out clean and the top is golden. The edges pull slightly away from the tin. Rest for 10 minutes before cutting. It firms up and cuts into neat squares. Cornbread suits a bowl of chili or soup, or sits happily on its own with butter. Yellow and white cornmeal both work, and the finer the grind, the cakier the crumb, so choose according to taste.',
    ing: [
      '150 g yellow cornmeal',
      '150 g plain flour',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '240 ml milk',
      '80 g honey',
      '60 g butter, melted'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Put a greased 20 cm square tin in the oven to heat.',
      'Mix the cornmeal, flour, baking powder and salt. In another bowl whisk the eggs, milk, honey and melted butter.',
      'Pour the wet into the dry and stir with a few strokes until just combined.',
      'Pour into the hot tin and bake for 25 minutes until golden and a skewer comes out clean. Rest for 10 minutes and cut into 9.'
    ],
    tips: [
      'Do not overmix; the batter should be a little lumpy.',
      'Heat the tin first for a crisp edge.',
      'Check at 22 minutes in a fan oven.'
    ],
    pair: ['Chili', 'Baked beans', 'Fried chicken', 'Butter and honey'],
    store: 'Keeps in an airtight tin for up to 3 days. Warm in the oven before serving. Freezes for up to 2 months.',
    nut: [232, 5, 35, 8, 2, 9, 330]
  },

  'cornbread-muffins': {
    d: 'Small, golden cornbread muffins made with cornmeal and buttermilk-style milk. Makes 12 in 28 minutes.',
    meta: 'Cornbread muffins: small, golden muffins made with cornmeal and milk, ready in under half an hour. Cheap and easy, 12 muffins in 28 minutes.',
    kw: ['cornbread muffins', 'easy cornmeal muffins', 'budget muffins', 'savoury cornbread muffin recipe', 'cheap side for twelve'],
    why: 'Muffins bake faster than a tin of cornbread, so they suit a weeknight. They are done in 18 minutes and have more crust, which most people prefer.\n\nCornmeal needs a little time to soften. Stir it into the milk first and leave it for 10 minutes, while the oven heats. It absorbs some of the liquid and bakes tender instead of gritty.\n\nOil gives a moister crumb than butter, and works well here. **Do not fill the cases more than three quarters**, because the batter rises and spills over.\n\nA hot oven, 210°C, gives the muffins a quick burst of lift and a domed top. Bake until golden and a skewer comes out clean. They are at their best warm, split and buttered. Muffins freeze well, and a few taken out in the morning are thawed by lunchtime. Warmed briefly in the oven, they taste almost as good as fresh, with a crisp outside and a tender inside.',
    ing: [
      '150 g yellow cornmeal',
      '300 ml milk',
      '150 g plain flour',
      '1 tbsp baking powder',
      '2 tbsp sugar',
      '1/2 tsp salt',
      '1 egg',
      '60 ml vegetable oil'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan) and line a 12-hole muffin tin. Stir the cornmeal into the milk and leave for 10 minutes.',
      'Mix the flour, baking powder, sugar and salt. Whisk the egg and oil into the cornmeal mixture.',
      'Fold the wet into the dry until just combined. Fill the cases three quarters full.',
      'Bake for 18 minutes until golden and a skewer comes out clean. Cool in the tin for 5 minutes.'
    ],
    tips: [
      'Let the cornmeal soak in the milk to avoid grittiness.',
      'Fill the cases three quarters full only.',
      'Do not overmix the batter.'
    ],
    pair: ['Chili', 'Soup', 'Butter and honey', 'Scrambled eggs'],
    store: 'Keep in an airtight tin for up to 3 days. Freezes for up to 2 months; warm from frozen at 160°C for 10 minutes.',
    nut: [158, 3, 23, 6, 1, 4, 250]
  },

  'cornbread-casserole': {
    d: 'Sweetcorn, creamed corn, soured cream and cornmeal mixed into a soft, spoonable bake. Eight servings in 50 minutes.',
    meta: 'Cornbread casserole: sweetcorn, creamed corn and soured cream mixed with cornmeal and baked until golden. A cheap side for eight in 50 minutes.',
    kw: ['cornbread casserole', 'sweetcorn casserole', 'budget corn side dish', 'easy corn casserole recipe', 'cheap side for eight'],
    why: 'This dish sits between a cornbread and a pudding. It is spooned from the dish, soft in the middle and golden on top, and it is most useful as a side for a roast or a pot of chili.\n\nMost of the body comes from creamed corn, which is more cream than corn and gives the casserole a custardy base. Whole kernels in the mix add pops of sweetness.\n\nSoured cream and butter provide the richness. A little cornmeal binds and sets the lot, and an egg or two gives it structure. **Mix gently** and pour into a buttered dish.\n\nBake until the centre is set and the top turns deep gold. A knife in the middle should come out clean, or nearly. Rest it for 10 minutes so it can firm up. The dish is a side that can double as a vegetarian main when served with a salad. A tin of chopped green chilies stirred through the batter adds a gentle heat for those who enjoy it.',
    ing: [
      '80 g butter, melted',
      '2 eggs',
      '200 g soured cream',
      '410 g tinned creamed sweetcorn',
      '340 g tinned sweetcorn, drained',
      '120 g yellow cornmeal',
      '1 tbsp sugar',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '100 g grated cheddar'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and butter a 2 litre baking dish.',
      'Whisk the melted butter, eggs and soured cream in a large bowl. Stir in the creamed corn and sweetcorn.',
      'Mix the cornmeal, sugar, baking powder and salt, fold into the wet mixture and add half of the cheese.',
      'Pour into the dish, scatter with the remaining cheese and bake for 40 minutes until golden and set. Rest for 10 minutes.'
    ],
    tips: [
      'Mix gently so the casserole stays tender.',
      'Cover with foil if the top darkens before the centre sets.',
      'It will look a little loose, but it firms up as it rests.'
    ],
    pair: ['Roast chicken', 'Ham', 'Chili', 'Green beans'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 160°C for 20 minutes.',
    nut: [348, 10, 32, 20, 3, 6, 330]
  },

  'cornbread-stuffing': {
    d: 'Crumbled cornbread baked with onion, celery, sage and stock into a moist stuffing. Eight servings in 1 hour.',
    meta: 'Cornbread stuffing: crumbled cornbread baked with onion, celery, sage and stock into a moist, golden stuffing. A cheap side for eight in 1 hour.',
    kw: ['cornbread stuffing', 'cornbread dressing', 'budget stuffing for a crowd', 'easy sage cornbread stuffing', 'cheap holiday side for eight'],
    why: 'Stale cornbread is the key. Fresh cornbread turns to paste once the stock goes in, but cornbread dried in a low oven for 20 minutes holds its shape and takes up the liquid slowly.\n\nCrumble it by hand into pieces of about 2 cm. A mix of sizes is good: the small ones dissolve into the base and the large ones keep some bite.\n\nOnion, celery and sage cooked in butter give the stuffing its savoury smell. **Cook the vegetables until soft**, as raw celery in a baked stuffing stays stubbornly crunchy.\n\nThe stock goes in gradually. The mixture should be damp, not wet; it will be sloppy if it drips when squeezed. Bake covered, then uncovered to crisp the top. Stuffing made with cornbread has a slightly sweet, crumbly texture quite different from the bread version. It can be assembled the day before and baked when needed, with a little extra stock if it looks dry.',
    ing: [
      '600 g day-old cornbread, crumbled',
      '60 g butter',
      '2 onions, chopped',
      '4 celery sticks, chopped',
      '2 tsp dried sage',
      '1 tsp dried thyme',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '400 ml chicken stock',
      '2 eggs, beaten'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and butter a 3 litre baking dish. Spread the cornbread on a tray and dry in the oven for 15 minutes.',
      'Melt the butter in a large pan and cook the onions and celery for 10 minutes until soft. Add the sage, thyme, salt and pepper.',
      'Tip into a large bowl with the cornbread. Stir in the stock a little at a time, then the eggs, until evenly moist.',
      'Spoon into the dish, cover with foil and bake for 25 minutes. Uncover and bake for 15 minutes more until crisp on top.'
    ],
    tips: [
      'Dry out the cornbread first so it absorbs the stock.',
      'Add the stock gradually; stop when it is damp, not wet.',
      'Cook the vegetables fully before mixing.'
    ],
    pair: ['Roast turkey', 'Roast chicken', 'Gravy', 'Cranberry sauce'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 20 minutes.',
    nut: [293, 7, 37, 13, 3, 8, 800]
  },

  'cheese-biscuits': {
    d: 'Flaky savoury biscuits made with cold butter and mature cheddar, baked until golden. Makes 8 in 30 minutes.',
    meta: 'Cheese biscuits: flaky savoury biscuits made with cold butter and cheddar, baked until golden. Cheap and easy, 8 biscuits in 30 minutes.',
    kw: ['cheese biscuits', 'cheddar biscuits', 'budget savoury biscuits', 'easy cheese biscuit recipe', 'cheap bread side for eight'],
    why: 'Grated cheese goes in cold, with the butter, and is rubbed into the flour in the same way. The result is flecks of cheese all through the dough that melt in the oven, making crisp, golden patches on the surface.\n\nUse a strong, mature cheddar. Mild cheese is lost; a sharp one stands out against the rich dough.\n\nA pinch of mustard powder and cayenne are the old trick for cheese bakes: they sharpen the cheese without making it taste of either.\n\n**Pat the dough out gently and do not knead it.** Handling warms the butter and toughens the gluten, and the biscuits end up dense. Cut straight down and bake at a high heat. They should rise tall and brown on the tops and the edges. Mature cheddar gives far more taste per gram than mild, so a small amount of a strong cheese goes a long way. The biscuits are excellent split and filled with ham, or served alongside soup in place of bread.',
    ing: [
      '280 g plain flour',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '1/2 tsp mustard powder',
      '1 pinch cayenne pepper',
      '100 g cold butter, grated',
      '150 g grated mature cheddar',
      '200 ml cold milk'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Mix the flour, baking powder, salt, mustard powder and cayenne. Rub in the butter until crumbly.',
      'Stir in 120 g of the cheese, then the milk, until just combined.',
      'Pat out on a floured surface to 3 cm thick and cut 8 rounds with a 6 cm cutter, pressing straight down.',
      'Stand them close together on a lined tray, scatter with the remaining cheese and bake for 15 minutes until golden.'
    ],
    tips: [
      'Keep the butter and milk cold.',
      'Do not twist the cutter.',
      'Eat warm; they stale fast.'
    ],
    pair: ['Soup', 'Chili', 'Scrambled eggs', 'Salad'],
    store: 'Best eaten on the day. Keep in an airtight tin for up to 2 days and warm at 160°C for 5 minutes. Freezes for up to 2 months.',
    nut: [314, 9, 29, 18, 1, 2, 480]
  },

  'cheese-muffins': {
    d: 'Savoury muffins with grated cheddar and a pinch of mustard, baked until golden. Makes 12 in 30 minutes.',
    meta: 'Cheese muffins: savoury muffins with grated cheddar, baked until golden and tender. A very cheap New Zealand-style bake, 12 muffins in 30 minutes.',
    kw: ['cheese muffins', 'savoury cheese muffins', 'budget muffins', 'easy cheddar muffin recipe', 'cheap lunchbox bake'],
    why: 'Muffins are the quickest bread there is. Dry in one bowl, wet in another, a few strokes of the spoon, and straight into the oven. The only trap is overmixing.\n\nStop when you can still see a few streaks of flour. The batter will look wrong, thick and lumpy, but that is how a tender muffin is made. **Beating it smooth develops gluten**, and the muffins come out tough and full of tunnels.\n\nGrated cheddar goes in two ways: most through the mix, some on top. The cheese on top forms a golden, crisp cap.\n\nA spoon of mustard in the milk and a pinch of paprika are barely noticeable, but lift the flavour of the cheese. Bake until a skewer comes out clean and the tops have a deep golden crust. The muffins are quick enough to bake on a weekday morning and are good in a lunch box. For variety, replace some of the cheese with chopped ham, sweetcorn or spring onion, keeping the batter about the same thickness.',
    ing: [
      '300 g self-raising flour',
      '1/2 tsp salt',
      '1 tsp mustard powder',
      '1/2 tsp paprika',
      '180 g grated cheddar',
      '2 eggs',
      '300 ml milk',
      '60 g butter, melted'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a 12-hole muffin tin.',
      'Mix the flour, salt, mustard powder, paprika and 130 g of the cheese in a bowl.',
      'Whisk the eggs, milk and melted butter, pour into the dry mix and stir with a few strokes until just combined.',
      'Fill the cases, scatter with the remaining cheese and bake for 20 minutes until golden and risen.'
    ],
    tips: [
      'Stop mixing while the batter is still lumpy.',
      'Check one with a skewer at 18 minutes.',
      'Add chopped spring onions or ham for a fuller muffin.'
    ],
    pair: ['Soup', 'Butter', 'Salad', 'Cup of tea'],
    store: 'Keep in an airtight tin for up to 2 days. Freezes for up to 2 months.',
    nut: [215, 8, 21, 11, 1, 1, 220]
  },

  'pizza-bread': {
    d: 'Sliced bread spread with tomato purée and oregano, covered in mozzarella and baked until the edges crisp. Four servings in 17 minutes.',
    meta: 'Pizza bread: sliced bread spread with tomato purée and oregano, covered in mozzarella and baked until crisp. A very cheap snack for four in 17 minutes.',
    kw: ['pizza bread', 'cheesy tomato pizza bread', 'budget pizza snack', 'easy baked pizza bread', 'cheap snack for four'],
    why: 'It is a bread first, and a pizza second. Thick slices of a loaf are toasted lightly in the oven before anything goes on them, so the base stays crisp while the topping melts.\n\nSpread the tomato purée thin, edge to edge, mixed with oregano and a pinch of salt. A thick layer of sauce makes the bread soggy and can leave the cheese sliding off.\n\nUse mozzarella. It melts into long strands, and the grated kind from a bag works as well as fresh at a fraction of the cost.\n\n**Take the topping all the way to the edge** of each slice. A bare crust burns in the oven, and the cheese that runs onto the tray crisps into the best part. Bake at a high heat for 8 minutes, until the cheese bubbles and spots brown. Almost any sliced bread works, though a sturdy loaf holds up better than very soft sandwich bread. Leftover slices from the end of a loaf are a good use, and the topping covers any dryness.',
    ing: [
      '8 thick slices white bread',
      '4 tbsp tomato purée',
      '3 tbsp water',
      '1 tsp dried oregano',
      '1/4 tsp salt',
      '200 g grated mozzarella',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Lay the bread on two trays and bake for 3 minutes.',
      'Mix the purée, water, oregano and salt. Spread thinly over the bread, right to the edges.',
      'Cover with the mozzarella and drizzle with the oil.',
      'Bake for 8 minutes until the cheese is bubbling and spotted brown.'
    ],
    tips: [
      'Toast the bread first for a crisp base.',
      'Spread the sauce thin.',
      'Watch the last 2 minutes; the cheese browns quickly.'
    ],
    pair: ['Green salad', 'Tomato soup', 'Cucumber sticks'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat at 200°C for 5 minutes.',
    nut: [336, 17, 31, 16, 2, 4, 760]
  },

  'french-bread-pizza': {
    d: 'A baguette split lengthways, spread with tomato sauce, topped with pepperoni and cheese and baked. Four servings in 22 minutes.',
    meta: 'French bread pizza: a split baguette topped with tomato sauce, pepperoni and cheese, baked until bubbling. A cheap supper for four in 22 minutes.',
    kw: ['french bread pizza', 'baguette pizza', 'budget pizza supper', 'easy french bread pizza recipe', 'cheap supper for four'],
    why: 'A baguette is the perfect pizza base: long, crisp, and cheap. Split it down the length and each half becomes a boat that holds the sauce and cheese.\n\nPull out a little of the soft crumb from each half with your fingers, leaving the crust shell intact. There is more room for the topping, and the bread stays crisp where it touches the oven.\n\nThe sauce is a tin of chopped tomatoes reduced with garlic and oregano for 10 minutes. It should be thick enough to hold on a spoon. **Thin sauce soaks straight through** and leaves a soggy middle.\n\nPepperoni and cheese go on top. Bake until the bread edges are crisp and the cheese is bubbling at the sides. Cut into 4 pieces for serving. A baguette is cheap and keeps for a day, and the oven turns day-old bread crisp again. Add whatever is in the fridge for toppings, such as sliced mushrooms, peppers or leftover cooked sausage.',
    ing: [
      '1 large baguette, about 250 g',
      '1 tbsp olive oil',
      '2 garlic cloves, chopped',
      '200 g tin chopped tomatoes',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '60 g sliced pepperoni',
      '150 g grated mozzarella'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Split the baguette lengthways and pull out a little soft crumb. Toast, cut side up, on a tray for 3 minutes.',
      'Heat the oil in a pan, cook the garlic for 30 seconds, then add the tomatoes, oregano and salt. Simmer for 8 minutes until thick.',
      'Spread the sauce over both halves, add the pepperoni and cover with the cheese.',
      'Bake for 10 minutes until the cheese is bubbling and golden. Cut each half in two.'
    ],
    tips: [
      'Simmer the sauce until thick to avoid soggy bread.',
      'Toast the baguette first for crispness.',
      'Add peppers or mushrooms for variety.'
    ],
    pair: ['Green salad', 'Soup', 'Garlic dip'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat at 200°C for 8 minutes.',
    nut: [408, 18, 39, 20, 2, 4, 1170]
  },

  'cheesy-breadsticks': {
    d: 'Quick yogurt dough rolled into sticks, brushed with garlic butter and topped with cheese. Makes 8 in 25 minutes.',
    meta: 'Cheesy breadsticks: quick no-yeast yogurt dough rolled into sticks and topped with garlic butter and cheese. Cheap and easy, 8 sticks in 25 minutes.',
    kw: ['cheesy breadsticks', 'easy no yeast breadsticks', 'budget garlic breadsticks', 'quick cheese breadsticks', 'cheap side for eight'],
    why: 'No yeast means no wait. Self-raising flour and yogurt make a soft dough in a few minutes, which can be shaped, topped and baked in under half an hour.\n\nThe yogurt supplies acid and fat, and the dough stays tender. Add it all at once and stir with a spoon until it clumps, then bring it together with your hands. **Stop when it is no longer sticky**: more kneading toughens it.\n\nRoll it into a rectangle about 1.5 cm thick and cut it into 8 strips with a floured knife. Twist each one gently and lay them on the tray.\n\nGarlic butter goes on before the cheese, so the cheese sticks. Bake until the sticks are golden and the cheese has crusted at the edges. Serve them warm, with a dip. These are a handy side for soup or pasta when there is no bread in the house. The dough takes only a few minutes to make, and garlic butter and cheese give a flavour out of proportion to the effort.',
    ing: [
      '300 g self-raising flour',
      '1/2 tsp salt',
      '250 g plain yogurt',
      '40 g butter, melted',
      '2 garlic cloves, grated',
      '1 tsp dried oregano',
      '100 g grated mozzarella'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Mix the flour and salt, add the yogurt and stir until it clumps. Knead briefly on a floured surface until smooth.',
      'Roll to a 20 x 24 cm rectangle, about 1.5 cm thick. Cut into 8 strips and twist each gently. Lay on a lined tray.',
      'Mix the butter, garlic and oregano and brush over the sticks. Scatter with the cheese.',
      'Bake for 15 minutes until golden and the cheese is crusted.'
    ],
    tips: [
      'Do not overknead the dough.',
      'Flour the knife to cut cleanly.',
      'Serve warm for the best texture.'
    ],
    pair: ['Tomato sauce for dipping', 'Soup', 'Pasta', 'Garlic dip'],
    store: 'Best eaten warm. Keep in an airtight tin for 1 day and reheat at 180°C for 5 minutes.',
    nut: [232, 10, 30, 8, 1, 1, 240]
  },

  'pita-pizza': {
    d: 'Pitta breads topped with tomato purée, mozzarella and any toppings and baked until the edges crisp. Two servings in 13 minutes.',
    meta: 'Pita pizza: pitta breads topped with tomato purée, mozzarella and toppings, baked until crisp. A very cheap lunch for two in 13 minutes.',
    kw: ['pita pizza', 'pitta bread pizza', 'budget quick pizza', 'easy pita bread pizza', 'cheap lunch for two'],
    why: 'Pitta is the cheapest ready-made pizza base there is, and it crisps in minutes. A pitta is thin, so it cooks faster than a regular base, and the edges turn to cracker.\n\nBake it plain for 2 minutes first. **This stops the sauce from soaking in** and gives the base a head start.\n\nThe sauce is tomato purée thinned with a little water, with oregano and salt. Spread it thin, since pitta holds less than a thicker dough.\n\nToppings should be small and few. Mushrooms, sweetcorn, ham or olives all work, but a heap of toppings weighs it down and the base goes limp. Cheese goes on last, right to the edges, and a hot oven, 220°C, melts it in 6 minutes. Pitta bread is sold everywhere and keeps well in the freezer, so a pack is a reliable base for a quick lunch. Each pizza is about the size of a plate, and two make a good meal for one hungry person.',
    ing: [
      '2 pitta breads',
      '2 tbsp tomato purée',
      '2 tbsp water',
      '1/2 tsp dried oregano',
      '1 pinch salt',
      '100 g grated mozzarella',
      '40 g sliced mushrooms',
      '40 g sweetcorn'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Bake the pitta breads on a tray for 2 minutes.',
      'Mix the purée, water, oregano and salt. Spread over the pittas.',
      'Top with the mushrooms, sweetcorn and cheese.',
      'Bake for 6 minutes until the cheese is bubbling and the edges are crisp.'
    ],
    tips: [
      'Pre-bake the pitta to keep it crisp.',
      'Go easy on the toppings.',
      'Use a wire rack under the pittas for crisper bases.'
    ],
    pair: ['Green salad', 'Tomato soup', 'Cucumber sticks'],
    store: 'Best eaten straight away.',
    nut: [252, 15, 21, 12, 2, 4, 540]
  },

  'bagel-pizza': {
    d: 'Halved bagels topped with tomato sauce and mozzarella and baked until bubbling. Two servings in 13 minutes.',
    meta: 'Bagel pizza: halved bagels topped with tomato sauce and mozzarella, baked until bubbling. A very cheap snack or lunch for two in 13 minutes.',
    kw: ['bagel pizza', 'mini bagel pizzas', 'budget snack pizza', 'easy bagel pizza bites', 'cheap lunch for two'],
    why: 'A bagel is a chewy, dense bread, and that suits a pizza topping. It does not go soft under the sauce the way ordinary bread does, and the edge crisps in the oven.\n\nSplit the bagels and toast them cut side up for 3 minutes first. **Toasting seals the surface**, so the sauce sits on top and does not soak in.\n\nThe topping is the usual: a spoonful of sauce, a handful of cheese, and perhaps a slice of pepperoni or some peppers. Resist adding too much, since the pizza is small.\n\nBake at 200°C until the cheese melts and the edges begin to brown. It takes about 5 minutes. They are a good lunch for children to make themselves, as nothing needs cutting. Day-old bagels are cheaper and bake up crisper than fresh ones. The small size makes them good for children, and a tray of them in the oven is ready in the time it takes to set the table.',
    ing: [
      '180 g bagels, halved',
      '4 tbsp tomato pasta sauce',
      '1/2 tsp dried oregano',
      '100 g grated mozzarella',
      '20 g sliced pepperoni'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Toast the bagel halves cut side up on a tray for 3 minutes.',
      'Spread each half with the sauce and sprinkle with the oregano.',
      'Top with the cheese and pepperoni.',
      'Bake for 5 minutes until the cheese is melted and bubbling.'
    ],
    tips: [
      'Toast the bagels first so they do not go soggy.',
      'Keep toppings small and light.',
      'Let them cool for a minute; melted cheese is hot.'
    ],
    pair: ['Green salad', 'Fruit', 'Carrot sticks'],
    store: 'Best eaten straight away.',
    nut: [445, 23, 50, 17, 3, 7, 890]
  },

  'pizza-pockets': {
    d: 'Quick yogurt dough wrapped around tomato sauce, cheese and pepperoni and baked until golden. Makes 6 in 38 minutes.',
    meta: 'Pizza pockets: quick yogurt dough wrapped around tomato sauce, cheese and pepperoni and baked until golden. A cheap lunchbox bake, 6 pockets in 38 minutes.',
    kw: ['pizza pockets', 'homemade pizza pockets', 'budget lunchbox pizza', 'baked pizza pocket recipe', 'cheap lunch for six'],
    why: 'A pocket is a pizza folded shut, and it solves the problems of a pizza: it travels, it keeps in a lunchbox, and the filling cannot slide off. The trick is to seal it properly.\n\nThe dough is the same quick mix of self-raising flour and yogurt as the breadsticks, so no yeast and no waiting. Roll it 4 mm thick and cut into 6 squares.\n\nKeep the filling dry. A small spoonful of thick sauce, a pinch of cheese and a few slices of pepperoni is the right amount. **Too much and the pocket bursts** as the steam builds inside.\n\nBrush the edges with water, fold the dough over and press down with a fork. Prick the tops so steam can escape. Brush with beaten egg for a deep gold. The pockets freeze well after baking and reheat from frozen in a hot oven. They are good for a packed lunch, and can be filled with ham and cheese or with leftover cooked vegetables for variety.',
    ing: [
      '300 g self-raising flour',
      '1/2 tsp salt',
      '250 g plain yogurt',
      '6 tbsp thick tomato pasta sauce',
      '150 g grated mozzarella',
      '40 g sliced pepperoni',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Mix the flour, salt and yogurt into a soft dough and knead briefly on a floured surface.',
      'Roll out to 4 mm thick and cut into 6 squares of about 12 cm.',
      'Spoon the sauce onto half of each square, add the cheese and pepperoni, brush the edges with water, fold over and press with a fork.',
      'Prick the tops, brush with egg and bake on a lined tray for 18 minutes until golden.'
    ],
    tips: [
      'Do not overfill or the pockets burst.',
      'Seal the edges firmly with a fork.',
      'Cool for 5 minutes; the filling is very hot.'
    ],
    pair: ['Green salad', 'Tomato soup', 'Carrot sticks'],
    store: 'Keeps in the fridge for up to 2 days. Reheat at 180°C for 10 minutes. Freezes for up to 2 months.',
    nut: [331, 17, 41, 11, 2, 2, 490]
  },

  'potato-bread': {
    d: 'A soft loaf made with mashed potato, flour and yeast, which stays moist for days. Makes 1 loaf of 8 slices in 1 hour 5 minutes plus proving.',
    meta: 'Potato bread: a soft yeast loaf made with mashed potato that stays moist for days. A cheap bake, one loaf of 8 slices, with 1 hour 30 of proving.',
    kw: ['potato bread', 'soft potato loaf', 'budget homemade bread', 'homemade potato bread recipe', 'cheap loaf of bread'],
    why: 'Mashed potato in bread does two things: it keeps the crumb moist for days and gives the loaf a soft, slightly sweet taste. It is also a way of using up leftover mash, which is why it is a cheap bread.\n\nThe mash must be plain and smooth, with no butter or milk added, and it should be cool before it goes in. Warm potato can kill the yeast.\n\nThe dough is stickier than a standard loaf, because potato holds water. **Resist adding much extra flour.** A tacky dough gives a softer crumb, and lightly floured hands are enough.\n\nKnead for 10 minutes until smooth and elastic, then prove until doubled. Shape into a loaf, prove again, and bake until deep golden and hollow-sounding when tapped underneath. Cool on a rack before slicing. Bread made with potato stays fresh longer than plain white, so a loaf lasts for sandwiches through the week. Toasted slices are particularly good, with a crisp edge and a soft centre.',
    ing: [
      '300 g cooled plain mashed potato',
      '450 g strong white bread flour',
      '7 g instant yeast',
      '1 tsp salt',
      '1 tsp sugar',
      '200 ml warm water',
      '30 g butter, softened'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar in a large bowl. Add the mash, water and butter and mix to a soft, tacky dough.',
      'Knead on a lightly floured surface for 10 minutes until smooth and elastic. Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Shape into a loaf, put in a greased 900 g tin, cover and prove for 30 minutes until risen above the rim.',
      'Heat the oven to 200°C (180°C fan). Bake for 35 minutes until deep golden and hollow when tapped underneath. Cool on a rack before slicing.'
    ],
    tips: [
      'Use cool, plain mash with no butter or milk.',
      'Keep the dough slightly tacky for a soft crumb.',
      'Cover with foil if the top darkens before 30 minutes.'
    ],
    pair: ['Butter', 'Soup', 'Cheese', 'Jam'],
    store: 'Keeps in a bread bin for up to 3 days. Freezes sliced for up to 2 months.',
    rest: [90, 'proving'],
    nut: [209, 6, 35, 5, 3, 4, 570]
  },

  'potato-farls': {
    d: 'Mashed potato and flour pressed into rounds, cut into wedges and cooked on a dry pan until speckled brown. Makes 8 in 25 minutes.',
    meta: 'Potato farls: mashed potato and flour pressed into rounds, cut into wedges and cooked on a dry pan. Very cheap, 8 farls in 25 minutes.',
    kw: ['potato farls', 'irish potato bread farls', 'budget potato bread', 'easy potato farl recipe', 'cheap breakfast bread'],
    why: 'A farl is a quarter of a round, and a potato farl is the simplest bread there is. Warm mashed potato, a little flour and butter: no yeast, no oven, and a dry pan.\n\nThe potato should be freshly mashed and still warm, and mashed very smooth. Lumps show as hard spots in the finished farl.\n\nAdd the flour in stages, a quarter at a time. You want a soft dough that comes away from the bowl and is just short of sticky. **Too much flour makes dense, floury farls**; too little and they fall apart in the pan.\n\nRoll to 1 cm thick, cut into quarters, and cook in a dry pan over medium heat for 4 minutes per side. They should be speckled with brown, not fully coloured. Best eaten warm with butter, or fried alongside bacon. Farls are best fresh from the pan, but can be reheated in a buttered frying pan the next day. They are a good partner to a fried breakfast, and are also good with cheese or jam.',
    ing: [
      '500 g potatoes, peeled and cut into chunks',
      '30 g butter',
      '1/2 tsp salt',
      '120 g plain flour'
    ],
    st: [
      'Boil the potatoes in salted water for 15 minutes until tender. Drain, steam dry and mash very smooth with the butter and salt.',
      'Work in the flour a quarter at a time to make a soft dough. Do not knead.',
      'Divide into two, pat each into a 1 cm round and cut into 4 wedges.',
      'Cook in a dry non-stick pan over medium heat for 4 minutes per side until speckled brown.'
    ],
    tips: [
      'Use warm mash and mix quickly.',
      'Flour the surface lightly so the dough does not stick.',
      'Do not grease the pan; the farls brown better dry.'
    ],
    pair: ['Bacon', 'Fried egg', 'Butter', 'Sausages'],
    store: 'Best eaten warm. Keeps in the fridge for up to 3 days; fry in a little butter to reheat.',
    nut: [127, 3, 22, 3, 2, 1, 150]
  },

  'bread-rolls': {
    d: 'Soft white bread rolls made with strong flour, yeast and milk, shaped by hand and baked until golden. Makes 12 in 45 minutes plus proving.',
    meta: 'Bread rolls: soft white rolls made with strong flour, yeast and milk, shaped by hand and baked until golden. Cheap, 12 rolls plus proving.',
    kw: ['bread rolls', 'soft white bread rolls', 'budget homemade rolls', 'homemade bread roll recipe', 'cheap rolls for twelve'],
    why: 'Bread dough is mostly waiting. The work is 10 minutes of kneading, and the dough does the rest by itself.\n\nWarm the milk and water until it feels like a warm bath on your wrist; too hot and it kills the yeast, too cold and the dough takes twice as long to rise.\n\nKnead until the dough is smooth and springs back when poked. **Do the windowpane test**: a small piece should stretch thin enough to see light through without tearing.\n\nShape the rolls by cupping your hand over a ball of dough and moving it in small circles on the worktop. This builds tension in the surface and gives a smooth, round top. Prove until puffy, then bake at a high heat. A tray of hot water in the bottom of the oven gives a softer crust. Rolls can be shaped, covered and left in the fridge overnight for a slow rise, then baked fresh in the morning. A bowl of water on the oven floor produces steam and a thinner, shinier crust.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1 1/2 tsp salt',
      '1 tbsp sugar',
      '150 ml warm milk',
      '175 ml warm water',
      '30 g butter, softened',
      '1 egg, beaten'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the milk, water and butter and mix to a dough.',
      'Knead for 10 minutes until smooth and elastic. Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Divide into 12 pieces and shape each into a ball. Place on lined trays, cover and prove for 20 minutes.',
      'Heat the oven to 220°C (200°C fan). Brush the rolls with egg and bake for 18 minutes until golden. Cool on a rack.'
    ],
    tips: [
      'Use warm, not hot, liquid for the yeast.',
      'Cover the dough while it proves so it does not dry out.',
      'Tap the base; a hollow sound means they are done.'
    ],
    pair: ['Soup', 'Butter', 'Ham and cheese', 'Sausages'],
    store: 'Best on the day. Keep in a bread bin for up to 2 days. Freezes for up to 2 months.',
    rest: [60, 'proving'],
    nut: [144, 5, 22, 4, 1, 4, 510]
  },

  'milk-bread': {
    d: 'A soft, fine-crumbed white loaf enriched with milk and butter, baked in a tin. Makes 10 slices in 1 hour 5 minutes plus proving.',
    meta: 'Milk bread: a soft, fine-crumbed white loaf enriched with milk and butter, baked in a tin. Cheap, 10 slices, with 1 hour 30 of proving.',
    kw: ['milk bread', 'soft white milk loaf', 'budget homemade sandwich loaf', 'homemade milk bread recipe', 'cheap loaf of bread'],
    why: 'The softness comes from the milk and the butter. Milk replaces water entirely, and its sugars brown the crust and keep the crumb tender, while butter makes it rich and slow to stale.\n\nScald the milk if the recipe asks for it, but ordinary warm milk works well here and is quicker. Cool it to blood heat before it meets the yeast.\n\nThe dough is soft and a little sticky. Resist more flour; instead, knead with a scraper and oiled hands for the first few minutes, until it begins to hold together. **The kneading time is what produces the fine crumb.**\n\nShape the loaf by rolling it flat, folding in thirds and rolling up tightly. Place it seam side down in the tin. Bake until the crust is deep gold, then brush with butter for a soft finish. A tin loaf like this slices evenly, and the fine crumb suits sandwiches and toast. Because it contains milk and butter it browns quickly, so cover the top loosely with foil if it darkens before the end of the bake.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1 1/2 tsp salt',
      '2 tbsp sugar',
      '300 ml warm milk',
      '50 g butter, softened',
      '15 g butter, melted, for brushing'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the milk and softened butter and mix to a soft dough.',
      'Knead for 12 minutes until smooth and elastic. Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Roll into a rectangle, fold in thirds, roll up tightly and place seam down in a greased 900 g tin. Cover and prove for 30 minutes.',
      'Heat the oven to 190°C (170°C fan). Bake for 35 minutes until deep golden. Brush with the melted butter and cool on a rack.'
    ],
    tips: [
      'Knead long enough for a fine, even crumb.',
      'Use warm, not hot, milk.',
      'Cool completely before slicing.'
    ],
    pair: ['Butter and jam', 'Sandwich fillings', 'Soup', 'Eggs'],
    store: 'Keeps in a bread bin for up to 3 days. Freezes sliced for up to 2 months.',
    rest: [90, 'proving'],
    nut: [212, 6, 29, 8, 2, 6, 610]
  },

  'white-bread': {
    d: 'A plain white loaf made with strong flour, yeast, water and a little oil, baked in a tin. Makes 12 slices in 1 hour plus proving.',
    meta: 'White bread: a plain white loaf made with strong flour, yeast and water, baked in a tin. Very cheap, 12 slices, with 1 hour 30 of proving.',
    kw: ['white bread', 'homemade white loaf', 'budget bread recipe', 'plain white sandwich loaf', 'cheap loaf of bread'],
    why: 'A good white loaf is flour, yeast, salt and water, and the difference between a poor and a good one is time. A long, slow rise gives more flavour than a quick one.\n\nUse strong bread flour, which has more gluten than plain, and so makes a springier crumb. Measure the water carefully: too much makes a slack, flat loaf.\n\nKnead for 10 minutes. It is tiring by hand, but the dough changes from sticky and rough to smooth and elastic, and you can feel the moment it does.\n\n**Prove until doubled**, not for a set time. A warm kitchen takes 45 minutes; a cold one, nearly 2 hours. Poke it gently: if the dent springs back slowly, it is ready. Bake until the base sounds hollow when tapped. A plain loaf is among the cheapest things to bake, as a bag of flour and a sachet of yeast make several. Once the method is familiar, the loaf needs only a few minutes of work and long stretches of waiting.',
    ing: [
      '600 g strong white bread flour',
      '7 g instant yeast',
      '2 tsp salt',
      '2 tbsp vegetable oil',
      '400 ml warm water'
    ],
    st: [
      'Mix the flour, yeast and salt in a large bowl. Add the oil and water and mix to a soft dough.',
      'Knead for 10 minutes until smooth and elastic. Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Knock back, shape into a loaf and put in a greased 900 g tin. Cover and prove for 30 minutes until it rises above the rim.',
      'Heat the oven to 220°C (200°C fan). Bake for 35 minutes until deep golden and hollow when tapped underneath. Cool on a rack.'
    ],
    tips: [
      'Use strong bread flour for a better rise.',
      'Judge the proving by size, not by the clock.',
      'Cool fully before cutting.'
    ],
    pair: ['Butter', 'Soup', 'Cheese', 'Jam'],
    store: 'Keeps in a bread bin for up to 3 days. Freezes sliced for up to 2 months.',
    rest: [90, 'proving'],
    nut: [156, 5, 25, 4, 2, 3, 640]
  },

  'flatbread': {
    d: 'Soft, no-yeast flatbreads made from flour and yogurt and cooked on a dry hot pan. Makes 8 in 22 minutes.',
    meta: 'Flatbread: soft, no-yeast flatbreads made from flour and yogurt and cooked on a hot dry pan. Very cheap and easy, 8 flatbreads in 22 minutes.',
    kw: ['flatbread', 'easy yogurt flatbread', 'budget no yeast flatbread', 'quick flatbread recipe', 'cheap bread for eight'],
    why: 'It is the quickest bread there is: flour, yogurt, a little baking powder and salt, rolled and cooked on a hot pan in under 2 minutes each.\n\nMix the dough until it just comes together and knead for no more than a minute. It will be soft and a little sticky. Let it rest, covered, for 10 minutes while you heat the pan, and the dough relaxes enough to roll without springing back.\n\nRoll each piece thin, about 3 mm. Thin flatbreads puff and blister; thick ones cook through slowly and stay doughy.\n\n**The pan must be properly hot.** Cooked on medium heat, flatbread dries and turns hard. On high heat it puffs in seconds and stays soft. Stack them in a tea towel as they come off to keep them pliable. Flatbreads can be folded around a filling, torn to scoop up a stew or brushed with garlic butter as a side. They cook so quickly that the whole batch is done before the main dish is ready.',
    ing: [
      '300 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '250 g plain yogurt',
      '1 tbsp olive oil'
    ],
    st: [
      'Mix the flour, baking powder and salt. Stir in the yogurt and oil to a soft dough and knead for 1 minute. Cover and rest for 10 minutes.',
      'Divide into 8 balls and roll each into a thin circle about 3 mm thick.',
      'Heat a dry frying pan over high heat. Cook each flatbread for 1 minute per side until puffed and spotted brown.',
      'Stack in a clean tea towel to keep warm.'
    ],
    tips: [
      'Rest the dough so it rolls out easily.',
      'Keep the pan very hot for puffed bread.',
      'Brush with melted garlic butter when they come off.'
    ],
    pair: ['Hummus', 'Curry', 'Grilled meat', 'Salad'],
    store: 'Best on the day. Keep wrapped for up to 2 days and warm in a pan. Freezes for up to 2 months.',
    nut: [175, 7, 30, 3, 1, 1, 220]
  },

  'garlic-butter-rolls': {
    d: 'Soft yeast rolls brushed with melted garlic butter and parsley as they come out of the oven. Makes 12 in 45 minutes plus proving.',
    meta: 'Garlic butter rolls: soft yeast rolls brushed with melted garlic butter and parsley. A cheap side, 12 rolls plus proving.',
    kw: ['garlic butter rolls', 'soft garlic dinner rolls', 'budget garlic rolls', 'homemade garlic bread rolls', 'cheap rolls for twelve'],
    why: 'The garlic goes on after baking, not before. Garlic in the dough or on the rolls going into a hot oven scorches and turns bitter; melted into butter and brushed on at the end it stays sweet and fragrant.\n\nThe dough is a basic enriched roll dough with milk and butter, so the crumb is soft and the crust thin. Shape the rolls into balls and set them close together in a tin; as they prove and bake, they join into a pull-apart sheet.\n\nThey need a long enough prove to be light. **Poke one gently**: if the dent fills slowly, it is ready.\n\nBrush with the garlic butter twice, once when they come out and once after a minute. The first coat soaks in and the second sits on the crust. Serve warm, torn apart. The rolls are a soft, pull-apart bread suited to soup, pasta or a barbecue. Make the garlic butter slightly ahead and keep it warm, so it brushes on easily and soaks into the crust as the rolls cool.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1 1/2 tsp salt',
      '1 tbsp sugar',
      '300 ml warm milk',
      '40 g butter, softened',
      '50 g butter, melted',
      '3 garlic cloves, grated',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the milk and softened butter and mix to a dough. Knead for 10 minutes until smooth.',
      'Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Divide into 12 balls and arrange in a greased 23 x 33 cm tin. Cover and prove for 15 minutes.',
      'Heat the oven to 200°C (180°C fan) and bake for 20 minutes until golden. Mix the melted butter, garlic and parsley and brush over the hot rolls twice.'
    ],
    tips: [
      'Add the garlic butter after baking so it does not burn.',
      'Keep the rolls touching so they pull apart.',
      'Use warm, not hot, milk.'
    ],
    pair: ['Pasta', 'Soup', 'Roast chicken', 'Salad'],
    store: 'Best on the day. Keep covered for up to 2 days and warm at 160°C for 8 minutes.',
    rest: [60, 'proving'],
    nut: [184, 5, 23, 8, 1, 4, 510]
  },

  'hamburger-buns': {
    d: 'Soft, round hamburger buns made with milk and butter, brushed with egg and sprinkled with sesame seeds. Makes 8 in 48 minutes plus proving.',
    meta: 'Hamburger buns: soft, round buns made with milk and butter, brushed with egg and sprinkled with sesame seeds. Cheap, 8 buns plus proving.',
    kw: ['hamburger buns', 'homemade burger buns', 'budget burger bun recipe', 'soft sesame burger buns', 'cheap buns for eight'],
    why: 'The shop-bought bun is mostly air, and the homemade one has crumb. It holds a burger without collapsing and tastes of bread, which is reason enough.\n\nThe dough is a soft enriched one, with milk and butter, and an egg for colour. It should be sticky at first and smooth after 10 minutes of kneading.\n\nShape each portion into a tight ball, then flatten gently with your palm to 2 cm thick. **A bun that is too thick bakes up tall and tips off the burger**, while a bun flattened too much loses its shape.\n\nProve on the tray, covered, until puffy and nearly doubled. Brush with beaten egg and scatter the seeds on. Bake until deep golden, and cool on a rack. Split and toast the cut sides before serving. Homemade buns freeze well, and can be split before freezing so they go straight into the toaster. They are sturdier than shop buns, so they hold up against a juicy burger without falling apart.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1 1/2 tsp salt',
      '2 tbsp sugar',
      '200 ml warm milk',
      '100 ml warm water',
      '50 g butter, softened',
      '1 egg, beaten',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the milk, water and butter and mix to a dough. Knead for 10 minutes until smooth.',
      'Put in an oiled bowl, cover and prove for 1 hour until doubled.',
      'Divide into 8 balls, flatten each to 2 cm thick and set on lined trays. Cover and prove for 20 minutes.',
      'Heat the oven to 200°C (180°C fan). Brush with egg, sprinkle with the seeds and bake for 18 minutes until deep golden. Cool on a rack.'
    ],
    tips: [
      'Flatten the balls to a 2 cm thickness before proving.',
      'Weigh the dough for even buns.',
      'Toast the cut sides before serving.'
    ],
    pair: ['Burger patties', 'Pickles', 'Coleslaw', 'Fries'],
    store: 'Best within 2 days. Keep in a bread bin. Freezes for up to 2 months.',
    rest: [60, 'proving'],
    nut: [257, 8, 36, 9, 2, 8, 770]
  },

  'vegemite-scrolls': {
    d: 'Quick scone dough rolled with Vegemite and cheese and cut into scrolls, baked until golden. Makes 8 in 47 minutes.',
    meta: 'Vegemite scrolls: quick scone dough rolled with Vegemite and cheese into scrolls, baked until golden. A cheap Australian-style bake, 8 scrolls in 47 minutes.',
    kw: ['vegemite scrolls', 'vegemite and cheese scrolls', 'budget lunchbox bake', 'australian cheese scrolls', 'cheap bake for eight'],
    why: 'A scroll is a scone rolled up. The dough takes minutes, with no yeast or proving, and the spread of Vegemite and cheese runs through every turn when it is sliced.\n\nThe dough is cold butter rubbed into flour with milk, handled lightly like scone dough. **Overworking makes tough scrolls**, so stop as soon as it holds together.\n\nRoll it into a rectangle, spread thinly with Vegemite, and scatter with cheese. Vegemite is intensely salty and savoury, and a thin layer goes a long way. A thick layer overwhelms everything.\n\nRoll up from the long edge, tightly, and slice into 8 with a sharp knife. A blunt knife squashes the coil. Place the scrolls cut side up, touching, so they rise and join. The scrolls are eaten warm or cold, and suit a lunch box. A thin spread of the yeast extract is enough; the saltiness mellows in the oven and balances the cheese.',
    ing: [
      '300 g self-raising flour',
      '1/2 tsp salt',
      '60 g cold butter, grated',
      '180 ml cold milk',
      '2 tsp Vegemite',
      '120 g grated cheddar'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Mix the flour and salt. Rub in the butter until crumbly, then stir in the milk to a soft dough.',
      'Roll out on a floured surface to a 25 x 30 cm rectangle. Spread thinly with the Vegemite and scatter with the cheese.',
      'Roll up tightly from the long edge and cut into 8 slices with a sharp knife.',
      'Place cut side up, just touching, in a lined 20 cm tin. Bake for 22 minutes until golden. Cool for 5 minutes.'
    ],
    tips: [
      'Spread the Vegemite thin; it is very strong.',
      'Use a sharp knife so the coils do not squash.',
      'Do not overwork the dough.'
    ],
    pair: ['Soup', 'Butter', 'Cup of tea', 'Salad'],
    store: 'Keep in an airtight tin for up to 2 days. Freezes for up to 2 months.',
    nut: [264, 9, 30, 12, 1, 1, 300]
  },

  'cheese-and-onion-pasty': {
    d: 'Shortcrust pastry parcels filled with grated cheddar, potato and onion, baked until golden. Makes 4 in 1 hour.',
    meta: 'Cheese and onion pasty: shortcrust parcels filled with cheddar, potato and onion, baked until golden. A cheap vegetarian-style bake, 4 pasties in 1 hour.',
    kw: ['cheese and onion pasty', 'cheese and potato pasty', 'budget pasty recipe', 'homemade cheese pasty', 'cheap bake for four'],
    why: 'It is the vegetarian cousin of the beef pasty, and the filling is cheap: onion, potato and cheddar, bound with a little pepper. It does not need cooking before it goes into the pastry.\n\nSlice the potato very thin and dice the onion small, so both soften in the time the pastry takes to brown. Thick chunks stay hard at the heart.\n\nThe cheese melts around them and makes its own sauce. **Season with black pepper generously**, since cheese is salty and the potato soaks up the flavour.\n\nSeal the edge firmly with a crimp, folded over itself. A weak seal opens in the oven and lets out the filling. Bake at a high heat for 15 minutes to set the pastry, then lower the heat for the filling to cook through. The pasty is a good option for meat-free days, and filling enough to count as a meal. Eaten warm from the oven with pickle on the side, it is an easy supper for a cold evening.',
    ing: [
      '450 g shortcrust pastry, ready-made or homemade',
      '250 g potatoes, peeled and thinly sliced',
      '1 onion, finely diced',
      '150 g grated mature cheddar',
      '1/2 tsp salt',
      '1 tsp black pepper',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Roll out the pastry and cut four rounds about 20 cm across.',
      'Mix the potato, onion, cheese, salt and pepper.',
      'Pile a quarter onto the middle of each round, brush the edge with egg, fold over to make a half-moon and crimp firmly.',
      'Set on a lined tray, brush with egg and bake for 15 minutes. Lower to 170°C (150°C fan) and bake for 20 minutes more until golden.'
    ],
    tips: [
      'Slice the potato thin so it cooks through.',
      'Crimp the edge firmly to seal.',
      'Cool for 5 minutes; the filling is very hot.'
    ],
    pair: ['Salad', 'Pickle', 'Baked beans', 'Brown sauce'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 15 minutes. Freezes for up to 2 months.',
    nut: [724, 19, 63, 44, 4, 4, 1230]
  }
};
