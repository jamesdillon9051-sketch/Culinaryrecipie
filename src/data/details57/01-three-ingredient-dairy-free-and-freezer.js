'use strict';

/**
 * Volume fifty-seven — three-ingredient, dairy-free, freezer, gluten-free,
 * high-protein, low-carb and vegan cooking, first part.
 *
 * Twenty-five dishes: four three-ingredient recipes (biscuits, mac and cheese,
 * pancakes, pizza dough); eight dairy-free dishes (chocolate cake, banana
 * bread, mac and cheese, mashed potatoes, pancakes, ranch dressing, cream of
 * mushroom soup, scones); seven freezer dishes (biscuits, dumplings,
 * enchiladas, lasagna, mac and cheese, muffins, pot pie); and the first six
 * gluten-free dishes (apple crumble, banana bread, beer battered fish,
 * biscuits, bread, carrot cake). Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  '3-ingredient-biscuits': {
    d: 'Tall, tender cream biscuits made with just self-raising flour, double cream and butter, baked for 15 minutes at 220C.',
    meta: 'Three ingredient biscuits from self-raising flour, double cream and butter, baked for 15 minutes. Eight biscuits, ready in 25 minutes.',
    kw: ['3 ingredient biscuits', 'cream biscuits', 'self raising flour and cream biscuits', 'two ingredient style biscuits', 'easy cream biscuit recipe'],
    why: 'Flour, cream and butter are the three ingredients, with a pinch of salt that does not count. It is a shortcut that works because of what cream contains: fat, in the place of the butter that is normally rubbed into the flour, and liquid, in the place of the milk. A single ingredient does two jobs, which is why the dough comes together in two minutes.\n\nUse self-raising flour, which already contains the baking powder that makes the biscuits rise. In the United States this is called self-rising flour and also contains salt, so the pinch of salt here makes up for the difference if you are using the British kind. Cold double cream, straight from the fridge, is stirred in with a fork until the dough forms a shaggy mass.\n\n**Handle the dough as little as possible.** Pat it out with floured hands to about 2.5 cm thick, fold it in half once, pat it out again, and cut straight down with a floured cutter. Every extra minute of kneading builds gluten and makes tough biscuits. Do not twist the cutter, which seals the edges and stops the rise.\n\nPlace the biscuits touching each other on the tray so they support one another as they climb. Brush with melted butter and bake in a hot oven until golden. Serve split while warm, with butter and jam, or under gravy.',
    ing: [
      '300 g self-raising flour',
      '240 ml double cream, cold',
      '30 g butter, melted, for brushing',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 220C and line a tray. Mix the flour and the pinch of salt in a bowl.',
      'Stir in the cold cream with a fork until a shaggy dough forms. Do not overmix.',
      'Pat the dough out on a floured surface to 2.5 cm thick, fold in half once and pat out again. Cut 8 rounds, pressing straight down.',
      'Place the biscuits touching on the tray and brush the tops with the melted butter.',
      'Bake for 15 minutes until golden. Serve warm.'
    ],
    tips: [
      'Keep the cream cold.',
      'Fold only once and do not twist the cutter.',
      'Bake the biscuits touching each other.'
    ],
    pair: ['Butter and jam', 'Sausage gravy', 'Fried chicken', 'Honey'],
    store: 'Best the day they are made. Reheat for 5 minutes at 180C.',
    nut: [258, 4, 29, 14, 1, 1, 30]
  },

  '3-ingredient-mac-and-cheese': {
    d: 'Macaroni cooked straight in milk and finished with grated cheddar in one pan, ready in 20 minutes with no draining and no roux.',
    meta: 'Three ingredient mac and cheese from macaroni, milk and cheddar in one pan, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['3 ingredient mac and cheese', 'mac and cheese cooked in milk', 'macaroni cheese with three ingredients', 'stovetop mac and cheese in milk', 'easy mac and cheese'],
    why: 'Macaroni, milk and cheese: that is all it takes, and salt and pepper do not count. The pasta cooks directly in the milk, so the starch it releases thickens the liquid into a sauce, with no flour, no butter and no roux. It is the dish for a night when the cupboard is nearly bare, and every step takes place in a single pan.\n\nUse small elbow macaroni, which cooks in about 10 minutes and fits the volume of milk. Larger pasta shapes take longer than the milk can bear. Whole milk is best, since the fat helps the sauce stay smooth. Bring it to a gentle simmer, not a boil, because milk scorches on the base of the pan and can foam over in seconds.\n\n**Stir often and keep the heat low.** Milk catches on the bottom of the pan if left alone, and the macaroni sticks together in the first few minutes. Stir every minute or so with a wooden spoon, scraping the base. The sauce thickens gradually as the pasta releases its starch, and the pan should look creamy by the end.\n\nTake the pan off the heat, stir in the grated cheddar a handful at a time until melted, and season well. Grate it yourself, since pre-grated cheese is coated in starch that stops it melting smoothly. A pinch of mustard powder, if you have it, sharpens the flavour. Serve at once, as it thickens as it sits.',
    ing: [
      '250 g elbow macaroni',
      '700 ml whole milk',
      '200 g mature cheddar, grated',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the macaroni, milk and salt in a large, deep pan and bring to a gentle simmer over medium heat.',
      'Cook for 12 minutes, stirring every minute and scraping the base, until the pasta is tender and the milk has thickened.',
      'Take the pan off the heat. Stir in the cheddar a handful at a time until melted and smooth.',
      'Season with the pepper and taste for salt.',
      'Serve at once, loosening with a splash of milk if it has thickened too much.'
    ],
    tips: [
      'Stir often to avoid scorching.',
      'Grate the cheese yourself.',
      'Loosen with milk if it thickens.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Crispy bacon', 'Hot sauce'],
    store: 'Best eaten at once. Reheat with a splash of milk.',
    nut: [539, 27, 56, 23, 2, 11, 700]
  },

  '3-ingredient-pancakes': {
    d: 'Self-raising flour, milk and an egg whisked into a smooth batter and cooked for 2 minutes a side into fluffy pancakes.',
    meta: 'Three ingredient pancakes from self-raising flour, milk and an egg, cooked in 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['3 ingredient pancakes', 'self raising flour pancakes', 'simple fluffy pancakes', 'flour milk egg pancakes', 'three ingredient pancake recipe'],
    why: 'Flour, milk and an egg: three ingredients, and a stack of fluffy pancakes in ten minutes. The secret is the self-raising flour, which brings its own baking powder to the batter, so there is no need for any extra raising agent. A pinch of salt and a little butter for the pan are the only extras, and they do not count.\n\nThe proportions matter more than anything here. One part flour to one part milk by weight, with a single egg, gives a thick batter that falls from the whisk in a slow ribbon. Too thin, and the pancakes spread into crepes. Too thick, and they cook through unevenly. Weigh the ingredients if you can, since cups vary in how tightly they are packed.\n\n**Whisk until just smooth and leave it for 5 minutes.** A short rest lets the flour absorb the milk and the baking powder begin to work, and the pancakes come out thicker and lighter. A few small lumps are fine. Whisking hard develops gluten and makes them tough.\n\nCook over medium heat in a lightly buttered non-stick pan. Pour in about 3 tablespoons of batter per pancake and wait for bubbles to appear on the surface and the edges to look set, about 2 minutes, then flip. They should be golden brown. Keep them warm in a low oven and serve with butter and maple syrup.',
    ing: [
      '200 g self-raising flour',
      '200 ml whole milk',
      '1 egg',
      '1 pinch salt',
      '1 tsp butter, for the pan',
      '4 tbsp maple syrup, to serve'
    ],
    st: [
      'Whisk the flour, milk, egg and salt until just smooth. Leave for 5 minutes.',
      'Heat a non-stick pan over medium heat and rub with a little butter.',
      'Pour in 3 tbsp of batter for each pancake and cook for 2 minutes until bubbles form and the edges look set.',
      'Flip and cook for 1 to 2 minutes more until golden. Keep warm in a low oven.',
      'Serve with the maple syrup.'
    ],
    tips: [
      'Rest the batter for 5 minutes.',
      'Do not whisk out every lump.',
      'Flip when bubbles appear.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Bacon', 'Butter'],
    store: 'Best fresh. Freeze cooked pancakes for 2 months and reheat in a toaster.',
    nut: [284, 8, 54, 4, 2, 15, 80]
  },

  '3-ingredient-pizza-dough': {
    d: 'A no-yeast pizza dough of self-raising flour, Greek yogurt and olive oil, rolled thin and baked for 15 minutes at 230C.',
    meta: 'Three ingredient pizza dough with self-raising flour and yogurt, no yeast, baked for 15 minutes. Two pizzas, ready in 25 minutes.',
    kw: ['3 ingredient pizza dough', 'yogurt pizza dough', 'no yeast pizza dough', 'self raising flour pizza base', 'quick pizza dough'],
    why: 'Pizza dough usually needs yeast and an hour of rising. This one needs neither. The raising is done by the baking powder in self-raising flour, activated by the acid in Greek yogurt, and the dough is ready to roll straight after mixing. It will not have the open crumb or the chew of a yeasted pizza, but it makes a good thin, crisp, flatbread-style base in a fraction of the time.\n\nThe dough is simple. Equal weights of self-raising flour and thick Greek yogurt, plus a spoonful of olive oil and a pinch of salt, mixed with a fork and then kneaded on a floured surface for about a minute. It should be soft and slightly tacky but not sticky. Add a little more flour if it clings to your hands, or a spoon of yogurt if it is dry and crumbly.\n\n**Roll it thin, about 4 mm.** A thick base made with chemical raising agents turns cakey and dense, while a thin one bakes into a crisp, golden crust. Roll it out on baking paper, so it can be slid straight onto a very hot tray. Preheat the tray in the oven for 10 minutes.\n\nBrush the base with oil, spread a thin layer of tomato sauce, add mozzarella and your toppings, and bake at 230C for about 12 to 15 minutes, until the edges are golden and the cheese bubbles. The yogurt gives the crust a slight tang.',
    ing: [
      '250 g self-raising flour',
      '250 g Greek yogurt',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '4 tbsp tomato pizza sauce',
      '150 g mozzarella, grated',
      '1 tbsp basil, torn'
    ],
    st: [
      'Heat the oven to 230C with a baking tray inside. Mix the flour, yogurt, 1 tbsp of the olive oil and the salt with a fork, then knead for 1 minute on a floured surface.',
      'Divide into 2 and roll each piece into a thin round, about 4 mm, on baking paper.',
      'Brush with the remaining oil and spread with the tomato sauce. Scatter over the mozzarella.',
      'Slide each pizza on its paper onto the hot tray and bake for 15 minutes until golden and bubbling.',
      'Scatter with the basil and serve.'
    ],
    tips: [
      'Roll the dough thin.',
      'Preheat the tray.',
      'Add flour if the dough is sticky.'
    ],
    pair: ['Green salad', 'Garlic oil', 'Chilli flakes', 'Cold beer'],
    store: 'Best eaten at once.',
    nut: [899, 42, 104, 35, 4, 8, 1250]
  },

  'dairy-free-chocolate-cake': {
    d: 'A tender two-layer chocolate cake made with oil, oat milk and vinegar and covered in a dairy-free chocolate ganache, baked for 30 minutes.',
    meta: 'Dairy-free chocolate cake with oat milk and a dairy-free ganache, baked for 30 minutes. Twelve servings, ready in 1 hour 30 minutes.',
    kw: ['dairy-free chocolate cake', 'oat milk chocolate cake', 'chocolate cake without butter or milk', 'dairy-free chocolate layer cake', 'dairy-free cake recipe'],
    why: 'Many of the best chocolate cakes were dairy-free by accident. During the Depression and the war years, cooks made cakes without butter, eggs or milk, relying on oil and vinegar, and found that the cakes were moist and deeply chocolatey. This is the descendant of those recipes: simple, fast, and still one of the most tender chocolate cakes there is.\n\nThe raising comes from a reaction. Bicarbonate of soda reacts with the vinegar in the batter to create bubbles, which lift the cake in the oven. For that reason, the batter must be mixed quickly and baked at once. Oil in place of butter keeps the crumb moist for days, and oat milk, which is neutral in flavour, gives the cake a softness similar to dairy.\n\n**Whisk hot coffee into the cocoa.** A hot liquid blooms the cocoa, dissolving it fully and intensifying its flavour, which is why many chocolate cake recipes use it. The coffee does not taste of coffee in the finished cake, only of more chocolate. Add it last and mix until smooth, and the batter will be thin, which is correct.\n\nThe ganache is dairy-free dark chocolate melted with warm coconut cream and stirred until glossy. Cool it until it thickens to a spreading consistency, about 30 minutes, and sandwich the layers with it. Check the chocolate label for milk if you cook for someone with an allergy.',
    ing: [
      '300 g plain flour',
      '75 g cocoa powder',
      '300 g caster sugar',
      '1 1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '300 ml unsweetened oat milk',
      '120 ml sunflower oil',
      '1 tbsp cider vinegar',
      '2 tsp vanilla extract',
      '120 ml hot strong coffee',
      '250 g dairy-free dark chocolate, chopped',
      '200 ml coconut cream'
    ],
    st: [
      'Heat the oven to 175C. Grease and line two 20 cm tins.',
      'Mix the flour, cocoa, sugar, bicarbonate of soda and salt in a large bowl.',
      'Whisk the oat milk, oil, vinegar and vanilla. Pour into the dry ingredients with the hot coffee and whisk until smooth.',
      'Divide between the tins at once and bake for 30 minutes until a skewer comes out clean. Cool completely.',
      'Warm the coconut cream, pour over the chocolate, stir until glossy and cool until spreadable. Sandwich and cover the cake.'
    ],
    tips: [
      'Bake the batter straight after mixing.',
      'Use hot coffee to bloom the cocoa.',
      'Check the chocolate label for milk.'
    ],
    pair: ['Oat milk', 'Fresh raspberries', 'Coffee', 'Dairy-free ice cream'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [479, 6, 62, 23, 5, 37, 270]
  },

  'dairy-free-banana-bread': {
    d: 'A moist banana loaf made with oil and oat milk in place of butter and dairy milk, baked for 55 minutes.',
    meta: 'Dairy-free banana bread with oil and oat milk, baked for 55 minutes. Ten servings, ready in 1 hour 15 minutes.',
    kw: ['dairy-free banana bread', 'banana bread without butter', 'oil banana bread', 'dairy-free banana loaf', 'dairy-free banana bread recipe'],
    why: 'Banana bread made with butter has a particular richness, but one made with oil has something else: a longer-lasting softness. Liquid fat coats the flour more thoroughly than solid, and does not set when it cools, so an oil-based loaf stays moist for days. That makes the dairy-free version practical as well as inclusive.\n\nThe bananas supply the flavour and most of the sweetness. Use fruit that is thoroughly ripe, speckled brown and almost black in places, because the sugars are fully developed and the pulp mashes to a smooth puree. Weigh 350 g after peeling. If your bananas are underripe, put them unpeeled in a 150C oven for 15 minutes until the skins blacken and the flesh softens.\n\n**Use a neutral oil and a splash of oat milk.** Sunflower or light olive oil adds moisture without flavour. Coconut oil melted works too but leaves a faint coconut taste. A few tablespoons of oat milk loosen the batter and replace the milk without adding dairy. Cinnamon and a pinch of nutmeg give a warm background note.\n\nFold the wet and dry mixtures together with as few strokes as possible. Overmixing gives a tough, rubbery loaf with a tunnelled crumb. Bake until a skewer comes out with a few moist crumbs, cover with foil if the top darkens, and cool in the tin for 15 minutes before turning out.',
    ing: [
      '350 g ripe bananas, peeled and mashed',
      '120 ml sunflower oil',
      '150 g light brown sugar',
      '2 eggs',
      '3 tbsp unsweetened oat milk',
      '1 tsp vanilla extract',
      '250 g plain flour',
      '1 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 900 g loaf tin.',
      'Whisk the mashed bananas, oil, brown sugar, eggs, oat milk and vanilla until combined.',
      'Fold in the flour, bicarbonate of soda, cinnamon and salt until just combined.',
      'Pour into the tin and bake for 55 minutes until a skewer comes out with a few moist crumbs, covering with foil if the top darkens.',
      'Cool in the tin for 15 minutes, then turn out.'
    ],
    tips: [
      'Use very ripe bananas.',
      'Mix with as few strokes as possible.',
      'Cover with foil if the top darkens.'
    ],
    pair: ['Dairy-free spread', 'Coffee', 'Peanut butter', 'Hot tea'],
    store: 'Keeps in an airtight container for 4 days, or frozen for 2 months.',
    nut: [301, 4, 42, 13, 2, 19, 260]
  },

  'dairy-free-mac-and-cheese': {
    d: 'Macaroni in a creamy sauce of blended potato, carrot, cashews and nutritional yeast, baked for 20 minutes with a crisp crumb.',
    meta: 'Dairy-free mac and cheese with a potato, carrot and cashew sauce, baked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['dairy-free mac and cheese', 'mac and cheese without dairy', 'cashew and potato cheese sauce', 'nutritional yeast mac and cheese', 'dairy-free macaroni cheese'],
    why: 'It tastes like cheese without a trace of it. The sauce is made of vegetables and nuts: boiled potato and carrot give body and a golden colour, soaked cashews add creaminess and fat, and nutritional yeast provides the savoury, slightly nutty flavour that people associate with cheddar. Blended together with mustard, lemon and garlic, they make a velvety orange sauce that coats pasta beautifully.\n\nNutritional yeast, sold as flakes in health food shops and many supermarkets, is deactivated yeast with a cheesy, umami flavour. It is rich in B vitamins and has no connection with baker\'s yeast. A quarter of a cup, about 20 g, is enough for a family-sized dish. Without it the sauce tastes sweet and vegetable, not savoury.\n\n**Blend for longer than you think you need to.** The sauce needs 2 to 3 minutes in a high-speed blender to become completely smooth, as any grittiness from the cashews is obvious on the tongue. If you have a standard blender, soak the cashews for an hour in hot water first, and strain the sauce through a sieve.\n\nToss the cooked pasta with the sauce, tip it into a baking dish and scatter with breadcrumbs mixed with olive oil. Bake until the top is golden and crisp. A pinch of smoked paprika and a few drops of hot sauce sharpen the flavour. Check the labels on the breadcrumbs for milk.',
    ing: [
      '300 g macaroni',
      '200 g potatoes, peeled and diced',
      '1 carrot, diced, about 100 g',
      '60 g cashews, soaked in hot water for 30 minutes',
      '20 g nutritional yeast',
      '250 ml unsweetened oat milk',
      '1 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '2 garlic cloves',
      '1 tsp salt',
      '1/2 tsp smoked paprika',
      '40 g breadcrumbs',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 200C. Boil the potato and carrot in salted water for 12 minutes until very soft, then drain.',
      'Boil the macaroni in salted water for 2 minutes less than the pack says. Drain.',
      'Blend the potato, carrot, drained cashews, nutritional yeast, oat milk, lemon juice, mustard, garlic, salt and paprika for 3 minutes until completely smooth.',
      'Toss the pasta with the sauce and tip into a baking dish. Mix the breadcrumbs and olive oil and scatter over the top.',
      'Bake for 20 minutes until golden and bubbling.'
    ],
    tips: [
      'Blend the sauce until perfectly smooth.',
      'Do not skip the nutritional yeast.',
      'Check that the breadcrumbs contain no milk.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Hot sauce', 'Garlic bread'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of oat milk.',
    nut: [542, 19, 85, 14, 7, 9, 740]
  },

  'dairy-free-mashed-potatoes': {
    d: 'Fluffy mashed potatoes made with olive oil, oat milk and roasted garlic in place of butter and cream.',
    meta: 'Dairy-free mashed potatoes with olive oil, oat milk and roasted garlic, ready in 30 minutes. Six servings, boiled for 20 minutes.',
    kw: ['dairy-free mashed potatoes', 'mashed potatoes without butter', 'olive oil mashed potatoes', 'oat milk mashed potatoes', 'dairy-free mash'],
    why: 'It is the best argument against the idea that mash needs butter. Good olive oil, warm and stirred in vigorously, makes potatoes silky and gives them a fruity, peppery note that butter does not. A head of roasted garlic mashed into them adds a mellow sweetness. Many cooks who try this version do not go back.\n\nChoose floury potatoes, such as Maris Piper, King Edward or russet, which break down into a light, fluffy mash. Waxy varieties turn gluey and heavy. Cut them into even chunks, about 4 cm, and start them in cold, salted water, bringing it up to a gentle boil. This cooks the outside and inside at the same rate. They are ready when a knife slides in with no resistance, about 20 minutes.\n\n**Dry the potatoes before mashing.** Drain them well, then return them to the hot pan over low heat for a minute, shaking to steam off the moisture. Wet potatoes make a watery mash that cannot absorb the oil. Use a ricer or masher, never a blender or food processor, which ruptures the starch cells and turns the mash to paste.\n\nWarm the oat milk with the olive oil and garlic before adding it to the potatoes, in stages, mixing gently. Cold liquid cools the mash and makes it stodgy. Taste, and season with salt and white pepper.',
    ing: [
      '1.2 kg floury potatoes, peeled and cut into 4 cm chunks',
      '1 head garlic',
      '5 tbsp extra virgin olive oil',
      '150 ml unsweetened oat milk, warmed',
      '1 1/2 tsp salt',
      '1/4 tsp white pepper',
      '2 tbsp chives, chopped'
    ],
    st: [
      'Heat the oven to 200C. Cut the top off the garlic head, drizzle with 1 tbsp of the oil, wrap in foil and roast for 30 minutes.',
      'Put the potatoes in a pan of cold salted water, bring to the boil and simmer for 20 minutes until tender.',
      'Drain and return to the hot pan over low heat for 1 minute, shaking to dry.',
      'Squeeze the roasted garlic from its skins. Mash the potatoes with the garlic, the remaining oil and the warm oat milk, added in stages.',
      'Season with the salt and white pepper and scatter with the chives.'
    ],
    tips: [
      'Choose floury potatoes.',
      'Dry them in the pan before mashing.',
      'Warm the oat milk before adding.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Gravy', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of oat milk.',
    nut: [281, 5, 36, 13, 4, 3, 610]
  },

  'dairy-free-pancakes': {
    d: 'Fluffy pancakes made with oat milk, oil and an egg, cooked for 2 minutes a side until golden.',
    meta: 'Dairy-free pancakes with oat milk, fluffy and golden, cooked in 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['dairy-free pancakes', 'oat milk pancakes', 'fluffy pancakes without butter', 'pancakes without dairy', 'dairy-free pancake recipe'],
    why: 'Pancakes are easy to make dairy-free because the milk and butter play minor roles and can be replaced without anyone noticing. Oat milk is the best substitute for the milk, as it has body and a faint sweetness. A neutral oil takes the place of melted butter in the batter and in the pan. What keeps the pancakes fluffy is a pinch of acid and plenty of baking powder.\n\nAdd a teaspoon of lemon juice or cider vinegar to the oat milk and leave it for 5 minutes. It curdles slightly, like buttermilk, and reacts with the baking powder to produce extra bubbles, so the pancakes rise higher and have a more tender crumb. You will not taste it in the finished pancake.\n\n**Do not overmix.** Stir the wet and dry mixtures together until just combined, with a few small lumps still visible. Beating the batter smooth develops the gluten and gives tough, chewy pancakes. Let it rest for 5 minutes while the pan heats, and the baking powder gets to work.\n\nCook on medium heat in a lightly oiled non-stick pan. Pour about 1/4 cup per pancake, wait for bubbles to form and break on the surface, usually 2 minutes, then flip. Keep them warm in a low oven and serve with maple syrup, berries and dairy-free yogurt.',
    ing: [
      '200 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '250 ml unsweetened oat milk',
      '1 tsp lemon juice',
      '1 egg',
      '3 tbsp sunflower oil',
      '1 tsp vanilla extract',
      '4 tbsp maple syrup, to serve'
    ],
    st: [
      'Stir the lemon juice into the oat milk and leave for 5 minutes.',
      'Mix the flour, sugar, baking powder and salt in a large bowl.',
      'Whisk the egg, 2 tbsp of the oil and the vanilla into the soured oat milk. Pour into the dry ingredients and stir until just combined. Rest for 5 minutes.',
      'Heat a non-stick pan over medium heat with a little of the remaining oil. Cook 1/4 cup of batter per pancake for 2 minutes until bubbles form, then flip and cook for 1 to 2 minutes.',
      'Keep warm in a low oven and serve with the maple syrup.'
    ],
    tips: [
      'Sour the oat milk with lemon juice.',
      'Leave a few lumps in the batter.',
      'Flip when bubbles form and break.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Dairy-free yogurt', 'Sliced banana'],
    store: 'Best fresh. Freeze cooked pancakes for 2 months.',
    nut: [410, 9, 62, 14, 2, 22, 580]
  },

  'dairy-free-ranch-dressing': {
    d: 'A creamy herb dressing made from mayonnaise, oat milk, lemon, garlic and fresh dill and chives, whisked in 10 minutes.',
    meta: 'Dairy-free ranch dressing with mayonnaise, oat milk and fresh herbs, made in 10 minutes. Eight servings, no cooking.',
    kw: ['dairy-free ranch dressing', 'ranch dressing without dairy', 'oat milk ranch', 'homemade dairy-free ranch', 'dairy-free ranch recipe'],
    why: 'Ranch is an American dressing, reputedly created at a dude ranch in California in the 1950s, and it is made with buttermilk and sour cream, both dairy. What gives it its character, though, is not the dairy itself but the tang and the herbs, and both can be reproduced with other things. The result is a thick, cool, garlicky dressing that goes with raw vegetables, salads and pizza crusts.\n\nMayonnaise provides the creaminess and the body. A good quality one, made with egg and oil, is already dairy-free, so check the label to be sure. Oat milk thins it to the right consistency, and a tablespoon of lemon juice or cider vinegar adds the sharpness that buttermilk would. Together, the acid and the oat milk create the faint curdled tang that makes ranch taste like ranch.\n\n**Use fresh herbs and let it rest.** Chopped dill, chives and parsley make the dressing bright and green, and dried herbs taste dusty by comparison. A teaspoon each of garlic powder and onion powder gives the savoury backbone, since fresh raw garlic can overwhelm. The flavours blend and deepen if the dressing stands in the fridge for 30 minutes before serving.\n\nThin it with more oat milk for a pouring dressing, or leave it thick for dipping. It keeps for 5 days in a jar in the fridge.',
    ing: [
      '150 g mayonnaise',
      '100 ml unsweetened oat milk',
      '1 tbsp lemon juice',
      '1 tsp cider vinegar',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '2 tbsp fresh dill, chopped',
      '2 tbsp chives, chopped',
      '1 tbsp parsley, chopped',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Whisk the mayonnaise with the oat milk until smooth.',
      'Stir in the lemon juice, vinegar, garlic powder, onion powder, salt and pepper.',
      'Fold in the dill, chives and parsley.',
      'Taste and adjust the salt and acid.',
      'Chill for 30 minutes before serving.'
    ],
    tips: [
      'Check the mayonnaise label for milk.',
      'Use fresh herbs.',
      'Thin with oat milk to pour.'
    ],
    pair: ['Raw vegetables', 'Chicken wings', 'Pizza', 'Green salad'],
    store: 'Keeps in the fridge for 5 days in a jar.',
    nut: [147, 1, 2, 15, 0, 1, 270]
  },

  'dairy-free-cream-of-mushroom-soup': {
    d: 'A velvety mushroom soup thickened with a flour roux and finished with oat milk instead of cream, simmered for 25 minutes.',
    meta: 'Dairy-free cream of mushroom soup with oat milk and thyme, simmered for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['dairy-free cream of mushroom soup', 'mushroom soup with oat milk', 'creamy mushroom soup without cream', 'dairy-free mushroom soup', 'vegetable stock mushroom soup'],
    why: 'Mushrooms have a natural creaminess when they are cooked and blended, and a velvety mushroom soup does not really need cream. Oat milk adds enough smoothness, a roux gives body, and the savoury depth of the browned mushrooms does the rest. Dairy-free diners, and anyone who prefers a lighter bowl, will not feel anything is missing.\n\nBrown the mushrooms properly. Slice them thickly and cook in batches in a wide pan with olive oil, over high heat, without stirring for the first 3 minutes. Mushrooms are mostly water, and in a crowded pan they steam and turn grey and rubbery. In a hot pan they brown and develop the deep, roasted flavour that carries the soup. Salt only after browning.\n\n**Make a roux with olive oil and flour.** Cook a spoonful of flour in the oil with the onions for 2 minutes before the stock goes in. The flour will thicken the soup as it simmers, and the toasted flavour of the cooked-out roux adds depth. Add the stock gradually, stirring, to prevent lumps.\n\nBlend half of the soup until smooth and return it to the pot, leaving some mushroom slices whole for texture. Stir in the oat milk, thyme and a squeeze of lemon, and heat without boiling, since oat milk can thicken and turn gluey if boiled hard. Serve with crusty bread.',
    ing: [
      '3 tbsp olive oil',
      '500 g mushrooms, sliced',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '2 tbsp plain flour',
      '600 ml vegetable stock',
      '250 ml unsweetened oat milk',
      '1 tsp fresh thyme leaves',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat 2 tbsp of the oil in a wide pan over high heat. Brown the mushrooms in 2 batches for 6 minutes each. Remove and season with half of the salt.',
      'Add the remaining oil and cook the onion for 5 minutes. Add the garlic and flour and stir for 2 minutes.',
      'Gradually stir in the stock, add the mushrooms and thyme and simmer for 12 minutes.',
      'Blend half of the soup until smooth and return to the pot. Stir in the oat milk, the remaining salt, pepper and lemon juice.',
      'Warm gently without boiling and serve.'
    ],
    tips: [
      'Brown the mushrooms in batches.',
      'Do not boil the soup after adding oat milk.',
      'Leave some slices whole for texture.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Toasted sourdough', 'Parsley'],
    store: 'Keeps in the fridge for 4 days or in the freezer for 3 months.',
    nut: [209, 8, 15, 13, 2, 7, 1120]
  },

  'dairy-free-scones': {
    d: 'Light, tall scones made with dairy-free baking block and oat milk, baked at 220C for 18 minutes.',
    meta: 'Dairy-free scones with oat milk and baking block, baked for 18 minutes. Eight scones, ready in 35 minutes.',
    kw: ['dairy-free scones', 'scones without butter or milk', 'oat milk scones', 'dairy-free afternoon tea scones', 'dairy-free scone recipe'],
    why: 'A scone depends on cold fat, a hot oven and a light touch, and none of these has anything to do with dairy. The substitution that matters is the fat. Use a firm dairy-free baking block, which behaves like butter when rubbed into flour, and not a tub spread, which contains too much water and makes a softer, flatter scone. Chill the block for 30 minutes first, so that it is as firm as it can be.\n\nThe milk is oat milk, with a spoonful of lemon juice stirred in to sour it. This reacts with the baking powder and helps the scone rise. Oat milk is neutral in flavour, and the sweetness of the scone masks any difference. Add it gradually, mixing with a knife, until the dough just holds together. Too much liquid makes a sticky dough that spreads and bakes into flat discs.\n\n**Pat out the dough thick and cut straight down.** About 3 cm gives the proper height. Press the cutter down without twisting, which seals the cut edge and stops the rise. Brush the tops with oat milk, not the sides, and bake on a hot tray for 18 minutes.\n\nServe them warm with jam and a dairy-free spread, or with coconut cream, which is the nearest thing to clotted cream. They are best eaten on the day they are made.',
    ing: [
      '350 g self-raising flour',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '85 g dairy-free baking block, chilled and cubed',
      '50 g caster sugar',
      '1 egg, beaten',
      '120 ml unsweetened oat milk',
      '1 tsp lemon juice',
      '1 tbsp oat milk, for brushing',
      '4 tbsp strawberry jam, to serve'
    ],
    st: [
      'Heat the oven to 220C with a baking tray inside. Stir the lemon juice into the 120 ml oat milk.',
      'Mix the flour, baking powder and salt and rub in the baking block to breadcrumbs. Stir in the sugar.',
      'Add the egg and soured oat milk and mix with a knife into a soft dough.',
      'Pat out to 3 cm thick and cut 8 rounds with a 6 cm cutter, pressing straight down. Brush the tops with oat milk.',
      'Bake on the hot tray for 18 minutes until risen and golden. Serve warm with the jam.'
    ],
    tips: [
      'Use a firm dairy-free block, not a tub.',
      'Chill the fat before using.',
      'Do not twist the cutter.'
    ],
    pair: ['Strawberry jam', 'Coconut cream', 'Hot tea', 'Fresh strawberries'],
    store: 'Best the day they are made. Freeze for 1 month.',
    nut: [294, 6, 45, 10, 1, 12, 190]
  },

  'freezer-biscuits': {
    d: 'Buttermilk biscuits cut, frozen on a tray for 2 hours and baked from frozen at 220C in 18 minutes.',
    meta: 'Freezer biscuits cut and frozen, then baked from frozen in 18 minutes. 12 biscuits, ready in 2 hours 35 minutes including freezing.',
    kw: ['freezer biscuits', 'frozen buttermilk biscuits', 'bake from frozen biscuits', 'biscuits to freeze before baking', 'freezer biscuit dough'],
    why: 'Fresh biscuits on a weekday morning are a luxury, unless the work was done in advance. Cut and frozen biscuits can go straight from freezer to oven in 18 minutes, and they come out risen, flaky and golden, as if you had just made them. The dough is unaffected by freezing, and the cold butter in it actually performs better, making taller, flakier layers.\n\nThe dough is a straightforward buttermilk biscuit mix, made with cold butter grated into the flour, baking powder, a little sugar and salt, and buttermilk stirred in until the dough just holds. The usual rules apply: cold ingredients, light handling, a sharp cutter pressed straight down, no twisting. Fold the dough in thirds twice before cutting to build the layers.\n\n**Freeze the cut biscuits on a tray before bagging them.** They should be frozen solid in a single layer, about 2 hours, so that they do not stick together. Then they can go into a freezer bag, with the air squeezed out, where they keep for 3 months. Do not thaw them before baking, or the butter softens and the biscuits spread.\n\nBake from frozen at 220C on a lined tray, packed close together for a better rise, with 3 extra minutes on top of the fresh baking time. Brush with melted butter as soon as they come out.',
    ing: [
      '450 g plain flour',
      '1 tbsp baking powder',
      '1 tsp caster sugar',
      '1 tsp salt',
      '1/2 tsp bicarbonate of soda',
      '170 g cold butter, grated',
      '300 ml cold buttermilk',
      '30 g butter, melted, for brushing'
    ],
    st: [
      'Mix the flour, baking powder, sugar, salt and bicarbonate of soda. Toss in the grated butter.',
      'Stir in the buttermilk until a shaggy dough forms.',
      'Pat out to 3 cm thick, fold in thirds twice, and cut 12 rounds without twisting the cutter.',
      'Freeze the biscuits on a lined tray for 2 hours until solid, then bag them.',
      'To bake, heat the oven to 220C and place the frozen biscuits touching on a lined tray. Bake for 18 minutes and brush with the melted butter.'
    ],
    tips: [
      'Freeze on a tray before bagging.',
      'Bake from frozen, not thawed.',
      'Pack the biscuits close together on the tray.'
    ],
    pair: ['Sausage gravy', 'Butter and honey', 'Fried egg', 'Jam'],
    store: 'The raw biscuits keep in the freezer for 3 months. Baked biscuits keep for 2 days.',
    rest: [120, 'Freezing'],
    nut: [266, 5, 30, 14, 1, 2, 410]
  },

  'freezer-dumplings': {
    d: 'Pork and cabbage dumplings pleated by hand, frozen on a tray and kept in bags, steamed from frozen in 10 minutes.',
    meta: 'Freezer dumplings with pork and cabbage, frozen and steamed from frozen in 10 minutes. 30 dumplings, six servings, ready in 55 minutes.',
    kw: ['freezer dumplings', 'frozen pork dumplings', 'homemade dumplings to freeze', 'pork and cabbage dumplings', 'steam from frozen dumplings'],
    why: 'Making a big batch of dumplings is a project, and the sensible reward is a freezer full of them. Frozen homemade dumplings are far better than shop-bought ones, with a juicier filling and a thinner, more tender wrapper, and they cook straight from frozen in about 10 minutes, whether steamed, boiled or pan fried. A single afternoon of folding provides weeks of dinners.\n\nThe filling is minced pork with finely chopped cabbage, spring onion, ginger and soy sauce. Salt the cabbage and squeeze it dry before mixing, or the filling will be wet and the wrappers will tear. Stir the pork in one direction for a minute until it turns sticky and bouncy, which gives the dumplings their springy texture. A teaspoon of sesame oil adds fragrance.\n\n**Use about a heaped teaspoon of filling per wrapper.** Overfilling is the main cause of bursting. Wet the edge with a fingertip of water, fold the wrapper over, and pleat the front edge four or five times against the flat back. Press the seam firmly to seal. Keep the unused wrappers under a damp cloth so they do not dry out.\n\nLay the dumplings on a floured tray, not touching, and freeze for at least 1 hour until solid before moving them to bags. They keep for 3 months. To cook, steam from frozen over boiling water for 10 minutes, or boil for 6 minutes, until they float and the pork is cooked through.',
    ing: [
      '500 g pork mince',
      '300 g white cabbage, finely chopped',
      '1 tsp salt',
      '4 spring onions, finely sliced',
      '1 tbsp fresh ginger, grated',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1/2 tsp white pepper',
      '30 dumpling wrappers, about 300 g'
    ],
    st: [
      'Toss the cabbage with the salt and leave for 10 minutes. Squeeze dry in a clean cloth.',
      'Mix the pork, cabbage, spring onions, ginger, soy sauce, sesame oil and pepper in one direction for 1 minute until sticky.',
      'Put a heaped teaspoon of filling on each wrapper, wet the edge, fold and pleat to seal.',
      'Freeze on a floured tray, not touching, for at least 1 hour, then bag.',
      'To cook, steam from frozen over boiling water for 10 minutes until the pork is cooked through.'
    ],
    tips: [
      'Squeeze the cabbage dry.',
      'Do not overfill the wrappers.',
      'Freeze in a single layer before bagging.'
    ],
    pair: ['Soy dipping sauce', 'Chilli oil', 'Steamed rice', 'Cucumber salad'],
    store: 'Keeps in the freezer for 3 months. Cook from frozen.',
    rest: [60, 'Freezing'],
    nut: [357, 20, 31, 17, 3, 2, 1000]
  },

  'freezer-enchiladas': {
    d: 'Chicken and black bean enchiladas rolled in tortillas with red sauce and cheese, frozen in foil trays and baked from frozen.',
    meta: 'Freezer enchiladas with chicken, beans and red sauce, assembled and frozen, then baked for 75 minutes. Eight servings, ready in 1 hour 45 minutes.',
    kw: ['freezer enchiladas', 'frozen chicken enchiladas', 'make ahead enchiladas', 'bake from frozen enchiladas', 'chicken and black bean enchiladas'],
    why: 'The enchilada is one of the best dishes for freezing, because the tortillas and the sauce both survive the cold, and the whole dish reheats into a bubbling, cheesy tray. This recipe makes two trays of four, so one can go into the oven tonight and the other into the freezer for a night when there is nothing planned.\n\nThe filling is shredded cooked chicken, black beans, sweetcorn, red onion and a handful of cheese, bound with a spoonful of the sauce. Keep it fairly dry, because a loose, wet filling makes soggy enchiladas that tear when you roll them. Warm the tortillas for 20 seconds in the microwave so they are pliable. Cold tortillas crack.\n\n**Use a thick sauce and leave out the final cheese before freezing.** A good enchilada sauce is made from tomato, chilli powder, cumin, garlic and a spoonful of flour, and should be thick enough to coat a spoon. Pour a layer in the tray, put the rolled tortillas in, cover with more sauce, but add the final layer of cheese just before baking so that it does not go rubbery in the freezer.\n\nWrap the foil tray tightly in cling film and a second layer of foil. To bake from frozen, remove the cling film, cover with foil and bake at 190C for 60 minutes, then uncover, add the cheese and bake for 15 more.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '2 tbsp plain flour',
      '2 tbsp chilli powder',
      '2 tsp ground cumin',
      '400 g tinned chopped tomatoes',
      '300 ml chicken stock',
      '500 g cooked chicken, shredded',
      '400 g tinned black beans, drained',
      '150 g sweetcorn',
      '200 g cheddar, grated',
      '8 large flour tortillas',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Heat the oil and cook the onion for 5 minutes. Add the garlic, flour, chilli powder and cumin and stir for 1 minute. Add the tomatoes and stock and simmer for 15 minutes until thick.',
      'Mix the chicken, beans, sweetcorn, half the cheddar and 6 tbsp of the sauce.',
      'Warm the tortillas. Fill each with the mixture, roll up and lay seam side down in 2 foil trays on a layer of sauce. Pour over the rest of the sauce.',
      'Wrap one tray in cling film and foil and freeze. For the other, scatter over the remaining cheddar and bake at 190C for 30 minutes.',
      'To bake the frozen tray, cover with foil and bake for 60 minutes, then uncover, add cheese and bake for 15 minutes. Scatter with coriander.'
    ],
    tips: [
      'Keep the filling fairly dry.',
      'Warm the tortillas before rolling.',
      'Add the final cheese just before baking.'
    ],
    pair: ['Soured cream', 'Guacamole', 'Rice', 'Green salad'],
    store: 'The frozen tray keeps for 3 months. Baked enchiladas keep for 3 days in the fridge.',
    nut: [543, 34, 50, 23, 7, 5, 940]
  },

  'freezer-lasagna': {
    d: 'A beef and tomato lasagna assembled in a foil dish and frozen unbaked, then baked from frozen for 1 hour 30 minutes.',
    meta: 'Freezer lasagna with beef ragu and mozzarella, assembled and frozen, baked for 45 minutes fresh. Eight servings, ready in 1 hour 25 minutes.',
    kw: ['freezer lasagna', 'make ahead lasagna to freeze', 'frozen beef lasagna', 'bake from frozen lasagna', 'lasagna for the freezer'],
    why: 'A lasagna takes an afternoon to build, and the sensible thing is to make two. One goes in the oven, the other is assembled in a foil dish, wrapped well and frozen unbaked, for a night when a homemade dinner is needed with no effort. Frozen unbaked, the pasta stays tender and the cheese does not dry out, so the result is better than a baked lasagna that has been frozen and reheated.\n\nThe ragu is the heart of it. Brown beef and pork mince in batches, cook onion, carrot and celery until soft, add garlic, tomato purée and wine, then simmer with tinned tomatoes for 30 minutes. Cool the sauce completely before assembling. Warm sauce on dry pasta sheets starts to soften them at once, and in the freezer it makes the lasagna watery.\n\n**Use no-boil sheets and a slightly looser sauce.** The dry pasta absorbs liquid as it bakes, and in a frozen lasagna it takes in a bit more. Layer the sauce, pasta, a white sauce or ricotta mix, and mozzarella, finishing with a layer of sauce and cheese. Press cling film directly on the surface to keep ice crystals out, then wrap the dish in foil.\n\nTo bake from frozen, remove the cling film, cover with foil and bake at 180C for 1 hour 15 minutes, then uncover and bake for 15 minutes more until golden and bubbling. Rest for 15 minutes before cutting. Fresh, the lasagna bakes in 45 minutes.',
    ing: [
      '2 tbsp olive oil',
      '400 g beef mince',
      '300 g pork mince',
      '1 onion, finely chopped',
      '1 carrot, finely chopped',
      '2 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '100 ml red wine',
      '800 g tinned chopped tomatoes',
      '1 tsp dried oregano',
      '1 tsp salt',
      '250 g ricotta',
      '1 egg',
      '250 g no-boil lasagna sheets',
      '300 g mozzarella, grated',
      '50 g parmesan, grated'
    ],
    st: [
      'Heat the oil and brown the beef and pork in batches for 8 minutes each. Add the onion and carrot for 6 minutes, then the garlic and tomato purée. Pour in the wine, reduce, then add the tomatoes, oregano and salt and simmer for 30 minutes. Cool completely.',
      'Mix the ricotta with the egg and half the parmesan.',
      'In a large foil dish, layer sauce, pasta, ricotta mix and mozzarella, three times, finishing with sauce, mozzarella and the remaining parmesan.',
      'To bake fresh, heat the oven to 180C and bake covered for 30 minutes, then uncovered for 15 minutes. Rest for 15 minutes.',
      'To freeze, press cling film onto the surface, wrap in foil and freeze unbaked. Bake from frozen, covered, for 1 hour 15 minutes, then uncovered for 15 minutes.'
    ],
    tips: [
      'Cool the sauce before assembling.',
      'Freeze the lasagna unbaked.',
      'Cover the surface with cling film.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted vegetables', 'Red wine'],
    store: 'The unbaked lasagna keeps in the freezer for 3 months. Baked, it keeps for 4 days in the fridge.',
    rest: [60, 'Freezing'],
    nut: [569, 36, 32, 33, 3, 5, 720]
  },

  'freezer-mac-and-cheese': {
    d: 'A baked macaroni cheese with cheddar and Gruyere, cooled and frozen in portions, reheated in 30 minutes.',
    meta: 'Freezer mac and cheese baked and frozen in portions, reheated from frozen. Eight servings, baked for 20 minutes, ready in 40 minutes.',
    kw: ['freezer mac and cheese', 'frozen macaroni cheese', 'batch cook mac and cheese', 'macaroni cheese to freeze', 'make ahead mac and cheese'],
    why: 'Mac and cheese is not a dish that obviously freezes, because the sauce can split and the pasta can go soft. A few adjustments fix both problems. The sauce is a stable béchamel, thickened with flour so it does not separate when frozen, and the pasta is cooked until only just short of tender so it finishes in the oven rather than turning mushy on reheating.\n\nCheese sauces made without a roux tend to weep and turn grainy after freezing. The flour binds the fat and protein, and keeps it smooth. Use a sharp cheddar for flavour and Gruyère or Emmental for stretch, and add a spoonful of Dijon mustard and a pinch of nutmeg. Cook the pasta 3 minutes short of the pack time, since it will cook further in the oven and once more when reheated.\n\n**Freeze it in individual portions.** Bake the mac and cheese in a large dish, cool it completely, cut it into portions, and wrap each in cling film and foil, or pack into lidded containers. Single portions defrost and reheat quickly and evenly, and you can take out just as many as you need.\n\nTo reheat, thaw overnight in the fridge and bake at 180C for 20 minutes, or microwave from frozen with a splash of milk, stirring halfway, for 4 minutes. A scatter of fresh breadcrumbs gives it back a crisp top.',
    ing: [
      '400 g macaroni',
      '60 g butter',
      '60 g plain flour',
      '900 ml whole milk, warmed',
      '1 tsp Dijon mustard',
      '1/4 tsp nutmeg',
      '1 tsp salt',
      '250 g sharp cheddar, grated',
      '100 g Gruyère, grated',
      '40 g breadcrumbs'
    ],
    st: [
      'Heat the oven to 200C. Boil the macaroni for 3 minutes short of the pack time. Drain.',
      'Melt the butter, stir in the flour for 1 minute and whisk in the warm milk gradually. Simmer for 6 minutes until thick.',
      'Off the heat, stir in the mustard, nutmeg, salt, cheddar and Gruyère until smooth. Stir in the macaroni.',
      'Pour into a large dish, scatter with the breadcrumbs and bake for 20 minutes until golden.',
      'Cool completely, cut into 8 portions and wrap each. Freeze for up to 3 months.'
    ],
    tips: [
      'Use a flour-thickened sauce for stability.',
      'Undercook the pasta.',
      'Freeze in single portions.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Crispy bacon', 'Hot sauce'],
    store: 'Keeps in the freezer for 3 months. Thaw overnight and reheat at 180C for 20 minutes.',
    nut: [529, 23, 53, 25, 2, 8, 640]
  },

  'freezer-muffins': {
    d: 'Blueberry muffins baked, cooled and frozen individually, then warmed from frozen in 1 minute in the microwave.',
    meta: 'Freezer muffins with blueberries, baked for 22 minutes and frozen. 12 muffins, ready in 40 minutes.',
    kw: ['freezer muffins', 'blueberry muffins to freeze', 'make ahead breakfast muffins', 'frozen muffins reheated in the microwave', 'batch baked muffins'],
    why: 'A batch of muffins baked on a Sunday and frozen one by one makes a breakfast for the rest of the week. They freeze beautifully, because a well-made muffin has a moist crumb that holds on to its water in the freezer, and they come back to life in 60 seconds in the microwave or 15 minutes in a low oven. It is the most useful kind of baking.\n\nThe batter is a basic blueberry muffin mix, with oil rather than butter for a crumb that stays soft after freezing. Butter muffins firm up as they cool, and tend to dry out in the freezer, while oil ones remain tender. Frozen berries go in straight from the freezer and are tossed in a spoonful of flour. Do not thaw them or they will bleed and turn the batter grey.\n\n**Cool the muffins completely before freezing.** Warm muffins sealed in a bag create steam, which condenses into ice crystals and makes the tops sticky. Leave them on a rack for at least an hour. Then wrap each in cling film, or put them in a freezer bag with the air pressed out, and label it with the date.\n\nTo eat, unwrap a frozen muffin, wrap it in a damp piece of kitchen paper and microwave for 45 to 60 seconds. For a crisper top, warm it from thawed in a 160C oven for 10 minutes. They keep for 3 months.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '150 g caster sugar',
      '2 eggs',
      '120 ml sunflower oil',
      '240 ml buttermilk',
      '1 tsp vanilla extract',
      '200 g frozen blueberries',
      '1 tbsp demerara sugar'
    ],
    st: [
      'Heat the oven to 200C and line a 12-hole muffin tin with paper cases.',
      'Mix the flour, baking powder, bicarbonate of soda, salt and caster sugar.',
      'Whisk the eggs, oil, buttermilk and vanilla. Fold into the dry ingredients until just combined, then fold in the blueberries tossed in a spoonful of flour.',
      'Fill the cases to the top and sprinkle with the demerara sugar. Bake for 5 minutes, reduce to 180C and bake for 17 minutes more. Cool completely on a rack.',
      'Wrap each muffin individually and freeze. To eat, microwave from frozen for 45 to 60 seconds.'
    ],
    tips: [
      'Use oil for muffins that stay soft.',
      'Cool completely before freezing.',
      'Add the berries frozen.'
    ],
    pair: ['Butter', 'Coffee', 'Fresh fruit', 'Yogurt'],
    store: 'Keeps in the freezer for 3 months. Baked muffins keep for 3 days at room temperature.',
    nut: [250, 4, 36, 10, 1, 16, 260]
  },

  'freezer-pot-pie': {
    d: 'Chicken and vegetable pot pies in a creamy sauce under puff pastry lids, assembled in foil dishes and frozen unbaked.',
    meta: 'Freezer pot pie with chicken, vegetables and puff pastry, frozen unbaked and baked for 40 minutes fresh. Six servings, ready in 1 hour 10 minutes.',
    kw: ['freezer pot pie', 'chicken pot pie to freeze', 'chicken pot pie for the freezer', 'frozen chicken pot pies', 'individual pot pies for the freezer'],
    why: 'A pot pie is a good candidate for the freezer, because it consists of a filling that freezes well and pastry that bakes better from cold than from warm. Make a few at once in individual foil dishes, freeze them unbaked, and bake straight from frozen on a busy night. The pastry rises crisp and golden, and the filling bubbles through.\n\nThe filling is chicken, carrots, peas and leeks in a thick white sauce made from butter, flour, stock and milk. Make it thicker than you would for eating straight away, since a loose filling turns watery after freezing and thawing in the oven. The sauce should coat the back of a spoon firmly. Cool it completely before assembling, as warm filling melts the pastry.\n\n**Use puff pastry lids and no base.** A top crust only is easier and freezes more reliably than a double crust. A raw pastry base under a wet filling stays pale and soggy after freezing. Cut lids slightly larger than the dish, seal the edges with a fork, cut a steam slit, and brush with egg only just before baking.\n\nFreeze the pies on a tray until solid, then wrap in cling film and foil. To bake from frozen, put them on a hot tray in a 190C oven for 55 minutes, until the pastry is deep gold and the filling is piping hot in the middle. Fresh pies take 40 minutes.',
    ing: [
      '40 g butter',
      '2 leeks, sliced',
      '2 carrots, diced',
      '40 g plain flour',
      '400 ml chicken stock',
      '150 ml milk',
      '500 g cooked chicken, diced',
      '100 g frozen peas',
      '1 tbsp fresh thyme leaves',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '375 g ready-rolled puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Melt the butter and cook the leeks and carrots for 8 minutes. Stir in the flour for 1 minute, then add the stock and milk gradually and simmer for 8 minutes until very thick.',
      'Stir in the chicken, peas, thyme, salt and pepper. Cool completely.',
      'Divide the filling between 6 individual foil dishes. Cut the pastry into 6 lids slightly larger than the dishes and press them on, sealing the edges. Cut a slit in each.',
      'Freeze the pies on a tray until solid, then wrap each in cling film and foil.',
      'To bake, heat the oven to 190C, brush the pies with egg and bake from frozen for 55 minutes, or fresh for 40 minutes, until deep gold.'
    ],
    tips: [
      'Make the filling thick.',
      'Cool the filling fully before assembling.',
      'Glaze with egg just before baking.'
    ],
    pair: ['Green peas', 'Mashed potatoes', 'Buttered cabbage', 'Gravy'],
    store: 'The unbaked pies keep in the freezer for 3 months. Baked pies keep for 3 days in the fridge.',
    nut: [558, 31, 41, 30, 4, 7, 1100]
  },

  'gluten-free-apple-crumble': {
    d: 'Tart apples under a buttery crumble topping of gluten-free oats and flour, baked for 40 minutes until bubbling and golden.',
    meta: 'Gluten-free apple crumble with oats and a buttery topping, baked for 40 minutes. Six servings, ready in 1 hour.',
    kw: ['gluten-free apple crumble', 'apple crumble with gluten-free oats', 'gluten-free crumble topping', 'british apple crumble gluten free', 'gluten-free apple crumble recipe'],
    why: 'A crumble is an easy pudding to make gluten-free, because the topping is meant to be rough and uneven, and there is no gluten structure to replace. What matters is a combination of ingredients that can stand in for the plain flour: gluten-free flour blend or ground almonds, and rolled oats that are certified gluten-free. Standard oats are often contaminated with wheat during milling, so check the pack.\n\nBramley apples are the traditional British choice. They are very sharp and collapse during baking into a fluffy, tart sauce that balances the sweet crumble. Peel, core and slice them into chunks, toss with sugar and cinnamon, and leave them for 10 minutes. If you are using eating apples, such as Cox, reduce the sugar and add a squeeze of lemon juice for sharpness, since they hold their shape rather than breaking down.\n\n**Rub the butter in coarsely.** The topping should be uneven, with some pea-sized lumps still showing. Overworking it makes a flat, greasy cover. Stir in the oats and sugar, and scatter the mixture over the fruit without pressing it down. A light topping bakes into a crisp, golden surface, whereas a compacted one is stodgy.\n\nBake at 190C until the juices bubble up around the edges and the top is deep gold. Let it stand for 10 minutes before serving with custard, cream or ice cream. Check that the custard powder is gluten-free as well.',
    ing: [
      '900 g Bramley apples, peeled, cored and chopped',
      '60 g caster sugar',
      '1 tsp ground cinnamon',
      '120 g gluten-free flour blend',
      '60 g certified gluten-free rolled oats',
      '80 g light brown sugar',
      '100 g cold butter, cubed',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 190C. Toss the apples with the caster sugar and cinnamon and spread in a 1.5 litre baking dish.',
      'Mix the gluten-free flour, oats, brown sugar and salt. Rub in the butter coarsely, leaving some pea-sized lumps.',
      'Scatter the crumble over the apples without pressing it down.',
      'Bake for 40 minutes until the juices bubble and the top is golden.',
      'Stand for 10 minutes and serve with custard.'
    ],
    tips: [
      'Use certified gluten-free oats.',
      'Rub the butter in coarsely.',
      'Do not press the topping down.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Single cream', 'Clotted cream'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven.',
    nut: [415, 4, 66, 15, 5, 38, 110]
  },

  'gluten-free-banana-bread': {
    d: 'A moist banana loaf made with a gluten-free flour blend and ground almonds, baked for 55 minutes.',
    meta: 'Gluten-free banana bread with a flour blend and ground almonds, baked for 55 minutes. Ten servings, ready in 1 hour 15 minutes.',
    kw: ['gluten-free banana bread', 'banana bread with gluten-free flour', 'moist gluten-free banana loaf', 'gluten-free banana loaf cake', 'gluten-free banana bread recipe'],
    why: 'Banana bread is forgiving about its flour, since the fruit itself holds the loaf together. The mashed bananas supply moisture and starch, and the eggs bind everything, so there is far less reliance on gluten than in a loaf of yeasted bread. That is why this is one of the easiest breads to convert, and a gluten-free flour blend works with very little adjustment.\n\nA small amount of ground almonds improves the texture further. It adds fat, moisture and a delicate nutty flavour, and it prevents the crumb from turning dry and sandy, which gluten-free loaves tend to do after the first day. Replace a quarter of the flour with ground almonds. Use a blend that contains xanthan gum, or add a half teaspoon yourself.\n\n**Rest the batter for 10 minutes before baking.** Gluten-free flours are thirstier than wheat flour and take longer to absorb liquid. A short rest lets the blend hydrate, so the loaf bakes up with an even crumb instead of a gritty one. The batter will thicken as it stands.\n\nBake at 170C, slightly lower than for a wheat loaf, so that the middle cooks through before the outside darkens. Test with a skewer, which should come out with a few moist crumbs, and cover the top with foil if it browns too fast. Cool in the tin completely, since the loaf is fragile when warm.',
    ing: [
      '350 g ripe bananas, peeled and mashed',
      '100 g butter, melted',
      '150 g light brown sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '170 g gluten-free flour blend with xanthan gum',
      '60 g ground almonds',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 170C. Grease and line a 900 g loaf tin.',
      'Whisk the mashed bananas, melted butter, brown sugar, eggs and vanilla.',
      'Fold in the gluten-free flour, ground almonds, baking powder, bicarbonate of soda, cinnamon and salt until just combined. Rest the batter for 10 minutes.',
      'Pour into the tin and bake for 55 minutes until a skewer comes out with a few moist crumbs, covering with foil if the top browns.',
      'Cool completely in the tin before turning out.'
    ],
    tips: [
      'Rest the batter so the flours hydrate.',
      'Use ripe bananas.',
      'Cool completely before slicing.'
    ],
    pair: ['Butter', 'Coffee', 'Hot tea', 'Peanut butter'],
    store: 'Keeps in an airtight container for 3 days, or frozen for 2 months.',
    nut: [276, 5, 37, 12, 2, 19, 250]
  },

  'gluten-free-beer-battered-fish': {
    d: 'Cod fillets in a crisp batter made with gluten-free beer and rice flour, fried at 180C for 6 minutes a side.',
    meta: 'Gluten-free beer battered fish with rice flour and gluten-free lager, fried for 12 minutes. Four servings, ready in 27 minutes.',
    kw: ['gluten-free beer battered fish', 'gluten-free fish and chips batter', 'rice flour fish batter', 'gluten-free battered cod', 'gluten-free fish recipe'],
    why: 'Most home versions of gluten-free fish batter come out heavy and doughy, and the fix is rice flour and bubbles. Rice flour is naturally low in protein and fries to a very light, crisp, almost glassy crust, which is why it is used in Japanese tempura. A gluten-free lager, or sparkling water, adds carbon dioxide that puffs the batter in the hot oil.\n\nMix rice flour with cornflour and a teaspoon of baking powder, and whisk in the ice-cold beer just before frying. Cold liquid slows the development of any gluten-like structure and keeps the batter light. Lumps are fine. Check the labels, since regular beer is made from barley and contains gluten, while labelled gluten-free beers are brewed from sorghum, rice or millet, or have the gluten removed.\n\n**Dust the fish in plain rice flour before dipping.** The dry flour gives the wet batter something to cling to and prevents it from sliding off in the hot oil. Pat the fillets dry first. Shake off the excess flour, dip in the batter, let the excess drip off and lower the fish gently into the oil.\n\nFry at 180C in a deep pan, 2 pieces at a time to avoid dropping the oil temperature, for about 6 minutes a side, until golden. Drain on a wire rack and serve at once with chips, mushy peas and lemon.',
    ing: [
      '600 g cod fillets, cut into 4 pieces',
      '40 g rice flour, for dusting',
      '120 g rice flour',
      '60 g cornflour',
      '1 tsp baking powder',
      '1 tsp salt',
      '250 ml ice-cold gluten-free lager',
      '60 ml vegetable oil, plus extra for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a deep pan to 180C. Pat the fish dry and season. Dust each fillet in the 40 g rice flour.',
      'Whisk the 120 g rice flour, cornflour, baking powder and salt. Whisk in the cold lager just before frying until the batter is thin and bubbly.',
      'Dip the fish in the batter, let the excess drip off and lower into the oil.',
      'Fry 2 pieces at a time for 6 minutes per side until golden. Drain on a wire rack.',
      'Serve at once with the lemon wedges.'
    ],
    tips: [
      'Use ice-cold gluten-free lager.',
      'Dust the fish with rice flour first.',
      'Do not crowd the pan.'
    ],
    pair: ['Chips', 'Mushy peas', 'Tartare sauce', 'Lemon wedges'],
    store: 'Best eaten at once.',
    nut: [451, 31, 48, 15, 2, 1, 800]
  },

  'gluten-free-biscuits': {
    d: 'Flaky buttermilk biscuits made with a gluten-free flour blend, cold butter and a fold-and-cut method, baked for 16 minutes.',
    meta: 'Gluten-free biscuits with a flour blend and buttermilk, baked for 16 minutes. Eight biscuits, ready in 35 minutes.',
    kw: ['gluten-free biscuits', 'gluten-free buttermilk biscuits', 'flaky gluten-free biscuits', 'gluten-free southern biscuits', 'gluten-free biscuit recipe'],
    why: 'Biscuits are among the harder things to make gluten-free, for the simple reason that their flakiness comes from layers, and layers need a dough that stays together when folded. Without gluten, the dough is more fragile, and it takes some care. The answer is a flour blend with xanthan gum, very cold butter and a dough that is a little wetter than usual.\n\nGrate the butter while frozen directly into the flour. Frozen butter shreds stay as distinct pieces and melt in the oven, leaving pockets of steam that lift the dough and form the layers. Warm hands melt the fat too soon, so work fast, and chill the bowl in the fridge for 15 minutes before you add the buttermilk. The cold keeps everything firm.\n\n**Fold the dough on baking paper.** A gluten-free dough tears when you lift it, so shape it on a sheet of baking paper and use the paper to fold it over on itself. Pat it into a rectangle, fold it in thirds, turn it, and repeat once more. Then pat it to 3 cm thick and cut with a sharp cutter, pressing straight down.\n\nPlace the biscuits touching in a lined tin so they lean on each other as they rise, and bake at 220C until golden. Brush with melted butter. Gluten-free biscuits are at their best warm, on the day they are made, and they turn dry the next day.',
    ing: [
      '300 g gluten-free flour blend with xanthan gum',
      '1 tbsp baking powder',
      '1 tsp caster sugar',
      '1 tsp salt',
      '115 g frozen butter, grated',
      '200 ml cold buttermilk',
      '1 egg, beaten',
      '30 g butter, melted, for brushing'
    ],
    st: [
      'Heat the oven to 220C and line a tin with baking paper. Mix the flour, baking powder, sugar and salt, and toss in the grated butter. Chill for 15 minutes.',
      'Stir in the buttermilk and egg until a shaggy dough forms.',
      'Tip onto baking paper and pat into a rectangle. Use the paper to fold it in thirds, turn and fold once more.',
      'Pat to 3 cm thick and cut 8 rounds, pressing straight down. Place them touching in the tin.',
      'Bake for 16 minutes until golden and brush with the melted butter.'
    ],
    tips: [
      'Grate frozen butter into the flour.',
      'Use the baking paper to fold the dough.',
      'Eat them on the day they are baked.'
    ],
    pair: ['Butter and jam', 'Sausage gravy', 'Fried chicken', 'Honey'],
    store: 'Best the day they are made. Freeze for 1 month and reheat in the oven.',
    nut: [292, 6, 31, 16, 1, 2, 530]
  },

  'gluten-free-bread': {
    d: 'A soft yeast loaf made from a gluten-free flour blend and psyllium husk, risen for 1 hour and baked for 50 minutes.',
    meta: 'Gluten-free bread with a flour blend and psyllium husk, risen for 1 hour and baked for 50 minutes. 12 slices, ready in 2 hours.',
    kw: ['gluten-free bread', 'gluten-free yeast bread', 'psyllium husk bread', 'homemade gluten-free loaf', 'gluten-free bread recipe'],
    why: 'In wheat bread, gluten forms an elastic network that traps the gas from yeast and gives the loaf its structure and chew. Without it, you need a stand-in. Psyllium husk is the best: it absorbs many times its weight in water and forms a gel that is stretchy and sticky, much like gluten. Together with xanthan gum, it provides enough structure for a loaf that rises, holds its shape and slices.\n\nThe dough is not a conventional bread dough. It is wet and sticky, closer to a thick batter or a cake mix, and cannot be kneaded or shaped by hand. Beat it with a spoon or a stand mixer for 3 minutes to develop the gel, then spoon it into a lined loaf tin and smooth the top with a wet spatula. The wetness is essential, as the flours absorb a lot of liquid.\n\n**Let it rise only once.** A gluten-free loaf has no elastic network, so a long rise causes the bubbles to coalesce and the loaf to collapse in the oven. Leave it to rise in the tin for about 1 hour, until it is about 1.5 times its size and just reaches the top of the tin. Then bake immediately.\n\nBake at 200C for 50 minutes, until the crust is deep golden and the loaf sounds hollow when tapped underneath. Cool completely on a rack before slicing, at least 1 hour, as the crumb continues to set while it cools. Slicing too soon gives a gummy centre. It toasts well.',
    ing: [
      '400 g gluten-free flour blend with xanthan gum',
      '15 g psyllium husk powder',
      '7 g fast action yeast',
      '1 tsp caster sugar',
      '1 1/2 tsp salt',
      '450 ml warm water',
      '2 tbsp olive oil',
      '1 egg'
    ],
    st: [
      'Mix the flour, psyllium husk, yeast, sugar and salt in a large bowl.',
      'Add the warm water, olive oil and egg and beat for 3 minutes until a thick, sticky batter forms.',
      'Spoon into a lined 900 g loaf tin and smooth the top with a wet spatula. Cover and leave to rise for 1 hour.',
      'Heat the oven to 200C. Bake for 50 minutes until the crust is deep golden and the loaf sounds hollow underneath.',
      'Cool completely on a rack for at least 1 hour before slicing.'
    ],
    tips: [
      'Do not knead: beat the dough instead.',
      'Rise only once.',
      'Cool completely before slicing.'
    ],
    pair: ['Butter', 'Jam', 'Soup', 'Eggs'],
    store: 'Keeps for 3 days wrapped, or sliced and frozen for 2 months.',
    rest: [120, 'Rising and cooling'],
    nut: [151, 4, 27, 3, 2, 1, 300]
  },

  'gluten-free-carrot-cake': {
    d: 'A moist spiced carrot cake made with a gluten-free flour blend and ground almonds, baked for 40 minutes in two layers.',
    meta: 'Gluten-free carrot cake with cream cheese frosting, baked for 40 minutes. Twelve servings, ready in 1 hour 20 minutes.',
    kw: ['gluten-free carrot cake', 'carrot cake with gluten-free flour', 'gluten-free cake with cream cheese frosting', 'gluten-free spiced carrot cake', 'gluten-free carrot cake recipe'],
    why: 'Carrot cake is one of the best cakes to make gluten-free, because it is already a moist, dense, heavily laden cake whose structure depends on eggs, oil and grated vegetable, and not on a delicate sponge. The carrots and the oil keep the crumb damp, and the spices hide any trace of the flour blend. Many people say they cannot tell the difference.\n\nUse a gluten-free flour blend with xanthan gum, and replace a third of it with ground almonds for moisture and richness. Oil rather than butter makes the cake keep for days. Grate the carrots finely, on the small holes, so they melt into the batter. Large shreds can make the cake wet and heavy. Add the walnuts and sultanas last.\n\n**Rest the batter for 15 minutes before baking.** The gluten-free flours need time to absorb the liquid, and a rested batter bakes into a more even, less grainy cake. It will thicken noticeably as it stands. Spread it in two lined 20 cm tins and smooth the tops.\n\nBake at 170C until a skewer comes out clean, then cool in the tins for 15 minutes. Gluten-free cakes are delicate when warm and break easily. Fill and cover the cooled cake with a cream cheese frosting made from soft butter, cold cream cheese, icing sugar and vanilla. Check that the icing sugar and baking powder are labelled gluten-free.',
    ing: [
      '200 g gluten-free flour blend with xanthan gum',
      '100 g ground almonds',
      '2 tsp baking powder',
      '1 tsp bicarbonate of soda',
      '2 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '4 eggs',
      '250 g light brown sugar',
      '200 ml sunflower oil',
      '300 g carrots, finely grated',
      '80 g walnuts, chopped',
      '60 g sultanas',
      '200 g cream cheese, cold',
      '100 g butter, softened',
      '300 g icing sugar'
    ],
    st: [
      'Heat the oven to 170C. Grease and line two 20 cm tins.',
      'Mix the flour blend, ground almonds, baking powder, bicarbonate of soda, spices and salt.',
      'Whisk the eggs, brown sugar and oil. Fold into the dry ingredients, then fold in the carrots, walnuts and sultanas. Rest for 15 minutes.',
      'Divide between the tins and bake for 40 minutes until a skewer comes out clean. Cool in the tins for 15 minutes, then turn out and cool completely.',
      'Beat the cream cheese, butter and icing sugar until smooth. Sandwich and cover the cake.'
    ],
    tips: [
      'Grate the carrots finely.',
      'Rest the batter before baking.',
      'Cool fully before frosting.'
    ],
    pair: ['Coffee', 'Hot tea', 'Cold milk', 'Fresh orange'],
    store: 'Keeps in the fridge for 4 days with the frosting.',
    nut: [646, 8, 68, 38, 3, 51, 380]
  }
};
