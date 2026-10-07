'use strict';

/**
 * Volume thirty-three — breakfast.
 *
 * Seven morning dishes held to the Weight-Loss Friendly limits: no more than
 * 400 kcal a serving, and above 200 kcal at least 15 g of protein or 5 g of
 * fibre. Three of them lean on egg whites, one on a sweet potato in place of
 * bread, one on black beans and corn tortillas, and two on oats and banana.
 * Every figure is worked out from the ingredient list by
 * tools/nutrition-calc.js; none is typed in.
 */

module.exports = {
  'veggie-egg-white-omelet': {
    d: 'A light omelet of whisked egg whites folded around mushrooms, spinach, tomato and chives, with no cheese or butter. Two servings in 16 minutes.',
    meta: 'Veggie egg white omelet: whisked egg whites folded around mushrooms, spinach, tomato and chives in 16 minutes. Dairy free and gluten free.',
    kw: ['veggie egg white omelet', 'weight loss friendly egg white omelet', 'gluten free egg white omelet', 'dairy free vegetable omelet', 'quick egg white omelet with vegetables'],
    why: 'Why do egg white omelets so often come out rubbery and weepy? Two causes, both fixable. The heat is too high, and the vegetables are still wet when the eggs go in. Cook the vegetables first, until their liquid has gone, then pour the whites over them in a pan set to medium.\n\nEgg whites are nearly all protein and water, with no fat to keep them tender, so they set faster and toughen sooner than whole eggs. **Cook them over medium heat** and slide the omelet out while the top still looks slightly glossy. The heat in the pan finishes it. Season the whites in the bowl and whisk until no thick strands remain, so they cook evenly.\n\nUse a non-stick pan and a thin spatula. Folding is then easy. Mushrooms, spinach, tomato and spring onions give the filling colour, and chives add a mild onion note at the end. Serve it with fruit or a slice of wholegrain toast.',
    ing: [
      '240 g egg whites, about 8 large',
      '2 tsp olive oil',
      '100 g mushrooms, sliced',
      '60 g baby spinach',
      '80 g tomatoes, diced',
      '2 spring onions, sliced',
      '¼ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp chopped fresh chives'
    ],
    st: [
      'Whisk the egg whites with the salt and pepper for about 30 seconds, until no thick strands remain and the surface is frothy.',
      'Heat 1 tsp of the oil in a large non-stick frying pan over medium heat. Cook the mushrooms and spring onions for 3 minutes, until the liquid has cooked off. Add the spinach and tomatoes and cook for 1 minute, until the spinach wilts. Tip onto a plate.',
      'Wipe out the pan, add the remaining oil and pour in the egg whites. Cook for 2 minutes, lifting the edges so the liquid runs underneath, until the top is just set but still glossy.',
      'Spoon the vegetables over one half, fold the other half over and slide onto a board. Cut in two and scatter with the chives.'
    ],
    tips: [
      'Dry the tomatoes on paper towels after dicing; extra juice is the quickest way to a watery omelet.',
      'If the whites start to brown at the edges, lower the heat at once.',
      'Slide, do not flip: use a wide spatula and fold with a single movement.'
    ],
    pair: ['A slice of wholegrain toast', 'Fresh berries', 'A small side salad'],
    store: 'Best eaten straight away. Keeps in the fridge for up to 2 days; reheat gently in a non-stick pan.',
    nut: [133, 16, 6, 5, 2, 3, 520]
  },

  'egg-white-breakfast-wrap': {
    d: 'Scrambled egg whites with spinach and feta rolled in a whole-wheat tortilla with salsa. Two servings in 13 minutes.',
    meta: 'Egg white breakfast wrap: soft scrambled egg whites with spinach, feta and salsa rolled in a whole-wheat tortilla. Two servings in 13 minutes.',
    kw: ['egg white breakfast wrap', 'weight loss friendly breakfast wrap', 'vegetarian breakfast wrap', 'egg white wrap with spinach and feta', 'quick egg white breakfast wrap'],
    why: 'It is a breakfast burrito\'s lighter cousin: the same wrapped warmth, with egg whites and spinach in place of sausage and cheese. Feta does the seasoning. A little goes a long way, and the whole thing is ready in 13 minutes.\n\nSoft scrambled whites are the base. Whisk the whites well first, so the scramble is even and fine. **Keep the heat at medium**, push the eggs gently from the edges to the centre and stop while they still look slightly moist, because they carry on setting in the tortilla. Spinach goes in first and wilts in under a minute, so the wrap holds greens as well as protein. Salsa adds moisture and a little heat without extra fat.\n\nWarm the tortillas for a few seconds in a dry pan so they bend without cracking. Fill the middle and fold in the sides. Roll tightly. Wrap the finished roll in foil if you are taking it with you.',
    ing: [
      '180 g egg whites, about 6 large',
      '1 tsp olive oil',
      '60 g baby spinach',
      '30 g feta, crumbled',
      '2 whole-wheat tortillas, 20 cm across',
      '4 tbsp salsa',
      '¼ tsp black pepper'
    ],
    st: [
      'Whisk the egg whites with the pepper until smooth. Heat the oil in a non-stick frying pan over medium heat, add the spinach and cook for 1 minute, until wilted.',
      'Pour in the egg whites and cook for 3 to 4 minutes, pushing them gently from the edges to the centre, until just set but still soft. Stir in the feta.',
      'Warm the tortillas for 20 seconds on each side in a dry pan. Spread each with 2 tbsp of the salsa.',
      'Divide the egg mixture between the tortillas, fold in the sides and roll up tightly. Cut in half and serve.'
    ],
    tips: [
      'Warm the tortillas first; cold ones crack when rolled.',
      'If you like more heat, add a few drops of hot sauce to the salsa.',
      'Press the spinach dry if the leaves are wet from washing.'
    ],
    pair: ['Fresh fruit', 'Sliced tomatoes', 'A cup of unsweetened tea'],
    store: 'Best eaten straight away. A wrapped roll keeps in the fridge for up to 1 day; reheat in a dry pan.',
    nut: [294, 19, 32, 10, 5, 4, 920]
  },

  'asparagus-frittata': {
    d: 'Eggs poured over soft asparagus and onion and finished in the oven until just set, with Parmesan and chives. Four servings in 30 minutes.',
    meta: 'Asparagus frittata: asparagus and onion under whisked eggs with Parmesan and chives, set in the oven. Gluten free. Four servings in 30 minutes.',
    kw: ['asparagus frittata', 'weight loss friendly frittata', 'gluten free asparagus frittata', 'vegetarian asparagus frittata with parmesan', 'baked asparagus frittata'],
    why: 'Do not stir it. A frittata is an omelet you leave alone, and the eggs turn from liquid to a tender slice in the oven rather than in the pan. The asparagus goes in first so it has time to soften, and the eggs are poured over and left to set.\n\nStart on the hob and finish in the oven. **Set the edges on the hob**, for about 3 minutes, so the frittata keeps its shape, then move the pan to a hot oven for the top to firm up. Pull it out when the centre has only a slight wobble; it keeps cooking for a minute or two as it rests, and overcooked eggs turn rubbery and dry. A little milk loosens the texture.\n\nParmesan seasons the whole dish, so it needs very little salt. Cut the frittata into four wedges and serve warm or at room temperature, with a green salad. It is as good cold the next day.',
    ing: [
      '6 large eggs',
      '60 ml semi-skimmed milk',
      '300 g asparagus, woody ends removed, cut into 2 cm pieces',
      '1 tbsp olive oil',
      '100 g onion, thinly sliced',
      '30 g grated Parmesan',
      '2 tbsp chopped fresh chives',
      '¼ tsp salt',
      '¼ tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Whisk the eggs with the milk, Parmesan, salt and pepper in a bowl until just combined.',
      'Heat the oil in a 25 cm ovenproof frying pan over medium heat. Cook the onion for 4 minutes, until soft. Add the asparagus and cook for 4 minutes, until bright green and just tender.',
      'Pour the eggs over the vegetables and cook for 3 minutes without stirring, until the edges begin to set.',
      'Transfer the pan to the oven and bake for 8 to 10 minutes, until the centre is just set. Scatter with the chives, rest for 3 minutes and cut into four wedges.'
    ],
    tips: [
      'Use an ovenproof pan with a non-stick surface so the frittata slides out whole.',
      'If the top is set but the middle still wobbles a lot, give it 2 more minutes.',
      'Cut the asparagus small so no piece is tough or stringy in the finished slice.'
    ],
    pair: ['A green salad', 'Sliced tomatoes', 'A slice of wholegrain toast'],
    store: 'Keeps in the fridge for up to 3 days. Eat cold or reheat gently in a low oven.',
    nut: [240, 17, 7, 16, 2, 4, 390]
  },

  'banana-oat-breakfast-cookies': {
    d: 'Soft oat cookies made from ripe banana, rolled oats, peanut butter and cinnamon, with no flour, butter or added sugar. Six servings of two cookies in 25 minutes.',
    meta: 'Banana oat breakfast cookies: ripe banana, oats, peanut butter and cinnamon baked into soft cookies. Vegan, no flour or added sugar. Six servings.',
    kw: ['banana oat breakfast cookies', 'weight loss friendly breakfast cookies', 'vegan banana oat cookies', 'dairy free banana oat cookies', 'easy banana oat breakfast cookies'],
    why: 'Banana cookies go wrong in two ways: they spread into flat discs, or they stay damp and stodgy. The fix is ripeness and oats. A very ripe banana supplies the sweetness and the binding, so the cookies need no sugar, butter or egg, and the oats give them structure.\n\nMash the banana until it is almost a purée, then stir in the oats, peanut butter and cinnamon. **Rest the dough for 5 minutes** so the oats soak up some of the moisture and the mixture firms up. The cookies do not spread in the oven. Shape each one as you want it to look when baked, pressing it flat with a fork or the back of a spoon, since a mound will stay a mound.\n\nThey are soft, not crisp. Two cookies make a serving, with a cup of tea or a glass of milk. Keep them in a tin and eat them within 3 days.',
    ing: [
      '240 g very ripe bananas, mashed',
      '120 g rolled oats',
      '2 tbsp natural peanut butter',
      '30 g raisins',
      '20 g chopped walnuts',
      '1 tsp ground cinnamon',
      '½ tsp vanilla extract',
      '½ tsp baking powder',
      '¼ tsp salt'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a baking tray with parchment paper.',
      'Mash the bananas in a large bowl until almost smooth. Stir in the peanut butter and vanilla, then the oats, raisins, walnuts, cinnamon, baking powder and salt. Leave the dough to rest for 5 minutes.',
      'Scoop 12 mounds, about 2 tbsp each, onto the tray and press each flat with a fork to about 1.5 cm thick.',
      'Bake for 15 minutes, until the edges are golden and the cookies feel set. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Use bananas with plenty of brown spots; green-tinged ones taste starchy and make a bland cookie.',
      'If the dough is too wet to shape, add a tablespoon more oats.',
      'Wet your fingers to shape the cookies; the dough sticks to dry hands.'
    ],
    pair: ['A glass of milk or soya milk', 'A cup of tea', 'A spoonful of plain yogurt'],
    store: 'Keeps in an airtight tin for up to 3 days. Freezes for up to 2 months.',
    nut: [186, 5, 28, 6, 4, 9, 140]
  },

  'sweet-potato-toast': {
    d: 'Slices of sweet potato roasted until tender and used in place of bread, topped with mashed avocado and a fried egg. Two servings in 20 minutes.',
    meta: 'Sweet potato toast: roasted sweet potato slices topped with mashed avocado and a fried egg. Dairy free and gluten free. Two servings in 20 minutes.',
    kw: ['sweet potato toast', 'weight loss friendly sweet potato toast', 'gluten free sweet potato toast', 'dairy free sweet potato toast with egg', 'easy sweet potato toast with avocado'],
    why: 'A sweet potato, an avocado and two eggs make breakfast on a slice that is neither bread nor a compromise. No bread needed. The sweet potato is cut lengthwise into slabs, roasted until the edges caramelise and the middle turns soft, and piled with toppings the way toast would be.\n\nThickness is the whole trick. **Slice them about 7 mm thick**, no more, so the slabs cook through and still hold a topping. Thicker slices stay firm in the centre, and thinner ones collapse. Roast them on a hot tray and turn them once, and expect the edges to colour before the centre softens. They will not snap like toast. Expect a tender centre and a sweet, slightly chewy edge.\n\nMash the avocado with lime juice and a pinch of salt so it spreads. Fry the eggs while the slices finish, and keep the yolks soft; they act as the sauce. Chilli flakes are optional.',
    ing: [
      '300 g sweet potato, scrubbed and cut lengthwise into 4 slices about 7 mm thick',
      '1 tsp olive oil',
      '75 g ripe avocado',
      '1 tsp lime juice',
      '2 large eggs',
      '¼ tsp salt',
      '¼ tsp black pepper',
      '1 tbsp chopped fresh cilantro'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Brush the sweet potato slices with the oil and lay them in a single layer on a baking tray. Roast for 8 minutes, turn and roast for 7 minutes more, until tender and golden at the edges.',
      'Mash the avocado with the lime juice and a pinch of the salt in a small bowl.',
      'Fry the eggs in a non-stick pan over medium heat for 3 minutes, until the whites are set and the yolks are still soft.',
      'Spread the avocado over the sweet potato slices, top each pair with an egg, and finish with the remaining salt, the pepper and the cilantro.'
    ],
    tips: [
      'Cut the slices to an even thickness with a sharp knife so they all cook at the same speed.',
      'If the slices are not tender after 15 minutes, cover the tray with foil for 3 minutes.',
      'Choose a wide, evenly shaped sweet potato; thin ones give slices too small for toppings.'
    ],
    pair: ['Sliced tomato', 'A small green salad', 'Fresh fruit'],
    store: 'Best eaten straight away. Roasted slices keep in the fridge for up to 3 days; reheat in a toaster or a hot oven and add fresh toppings.',
    nut: [306, 11, 34, 14, 7, 7, 460]
  },

  'black-bean-breakfast-tostadas': {
    d: 'Crisp corn tortillas spread with mashed black beans and topped with fried eggs, tomato, avocado and queso fresco. Four servings in 20 minutes.',
    meta: 'Black bean breakfast tostadas: corn tortillas crisped in the oven, then topped with mashed black beans, fried eggs, tomato and avocado. Four servings.',
    kw: ['black bean breakfast tostadas', 'weight loss friendly breakfast tostadas', 'vegetarian black bean tostadas', 'breakfast tostadas with egg and avocado', 'easy black bean breakfast tostadas'],
    why: 'Brunch for four that looks like a lot and weighs very little. Nothing here is deep-fried. Corn tortillas crisp in the oven, mashed black beans make the base, and an egg on each tostada supplies a rich yolk that works as the sauce.\n\nCrisp the tortillas on a tray in a single layer, turning them once. **Bake them until they snap**: they should sound hollow when tapped and be golden at the edges, because a soft tostada folds under the weight of its toppings. Warm the beans in a pan with cumin and a splash of water. Mash them roughly. That way they spread easily and keep some texture.\n\nBuild just before eating. Tomato and cilantro add freshness, avocado adds creaminess, and a little crumbled queso fresco adds salt. Lime juice and hot sauce finish the plate. Eat these with a knife and fork, or by hand with a napkin.',
    ing: [
      '4 corn tortillas, 15 cm across',
      '240 g canned black beans, drained and rinsed',
      '½ tsp ground cumin',
      '2 tbsp water',
      '4 large eggs',
      '1 tsp olive oil',
      '100 g tomatoes, diced',
      '60 g ripe avocado, sliced',
      '40 g queso fresco, crumbled',
      '2 tbsp chopped fresh cilantro',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Lay the tortillas on a baking tray in a single layer and bake for 6 minutes, turning once, until crisp and golden at the edges.',
      'Meanwhile, warm the beans in a small pan with the cumin and water for 3 minutes, mashing roughly with a fork.',
      'Heat the oil in a non-stick frying pan over medium heat and fry the eggs for 3 minutes, until the whites are set and the yolks are still soft.',
      'Spread the beans over the tostadas and top each with an egg, the tomatoes, avocado, queso fresco and cilantro. Finish with the lime juice.'
    ],
    tips: [
      'Rinse the canned beans well to wash away the salty liquid.',
      'If the tortillas curl, weigh them down with a second tray for the first 2 minutes.',
      'Serve with hot sauce on the side so each person can set the heat.'
    ],
    pair: ['Fresh fruit', 'Sliced radishes', 'A cup of coffee or tea'],
    store: 'Best eaten straight away. The beans keep in the fridge for up to 3 days; the crisp tortillas keep in a dry container for up to 2 days.',
    nut: [273, 16, 23, 13, 6, 2, 340]
  },

  'peanut-butter-banana-toast': {
    d: 'Hot wholegrain toast spread with natural peanut butter and topped with sliced banana, cinnamon and chia seeds. Two servings in 8 minutes.',
    meta: 'Peanut butter banana toast: wholegrain toast with natural peanut butter, sliced banana, cinnamon and chia seeds. Vegan, ready in 8 minutes.',
    kw: ['peanut butter banana toast', 'weight loss friendly breakfast toast', 'vegan peanut butter banana toast', 'dairy free peanut butter toast', 'quick peanut butter banana toast'],
    why: 'The smell of peanut butter on hot toast is the point. It softens into the surface. The banana on top warms slightly under it. Toast the bread until it is properly crisp, then spread the peanut butter while the slice is still hot.\n\nKeep it simple. There are only four main ingredients, so choose them with care. **Use natural peanut butter**, made from peanuts and a little salt, so there is no added sugar or palm oil. Seeded wholegrain bread brings fibre, and a ripe but firm banana slices cleanly without turning to mush. Chia seeds add more fibre and a little crunch, and cinnamon adds warmth.\n\nA slice is a light breakfast or snack. Peanut butter is rich, so spread it thinly rather than thickly. Eat it straight away, while the toast is crisp, with a glass of milk or a cup of coffee. Toast it a shade darker if you like more crunch.',
    ing: [
      '2 slices seeded wholegrain bread',
      '2 tbsp natural peanut butter',
      '1 small banana, sliced',
      '1 tbsp chia seeds',
      '¼ tsp ground cinnamon'
    ],
    st: [
      'Toast the bread for 3 minutes, until crisp and golden.',
      'Spread the peanut butter over the hot toast while it is still warm.',
      'Arrange the banana slices over the peanut butter and sprinkle with the chia seeds and cinnamon. Serve at once.'
    ],
    tips: [
      'Spread the peanut butter while the toast is hot, so it melts into the crumb.',
      'If your banana is very ripe, mash half and spread it under the slices for extra sweetness.',
      'Slice the banana at the last moment; it browns quickly once cut.'
    ],
    pair: ['A glass of milk or soya milk', 'A cup of coffee', 'A handful of berries'],
    store: 'Best eaten straight away, while the toast is crisp.',
    nut: [255, 8, 31, 11, 5, 8, 150]
  }
};
