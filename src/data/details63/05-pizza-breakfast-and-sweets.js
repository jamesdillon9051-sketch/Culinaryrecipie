'use strict';

/**
 * Volume sixty-three, fifth part: pizzas and Tex-Mex bakes, Mexican chicken
 * and vegetables, American breakfasts, party dips, and the last sweets,
 * including a New Zealand dip and chips and an Australian slice. Waits of
 * an hour or more are declared as rest. Nutrition is computed from the
 * ingredient lists by npm run calc.
 */

module.exports = {
  'supreme-pizza': {
    d: 'A loaded pizza with pepperoni, sausage, peppers, onion, mushrooms and olives over tomato sauce and mozzarella, baked for 15 minutes.',
    meta: 'Supreme pizza: homemade dough loaded with pepperoni, sausage, peppers, mushrooms and olives, baked for 15 minutes. Four servings.',
    kw: ['supreme pizza', 'supreme pizza recipe', 'homemade supreme pizza', 'loaded pizza with sausage and peppers', 'pizza with everything'],
    why: `A Friday-night pizza for four people who cannot agree on toppings, and the answer is all of them. Meat, vegetables and olives all go on one base, and the trick is to stop it turning into a wet, heavy pile. Balance matters.

Cook the sausage first, crumbled and browned in a pan, because raw sausage releases fat and water as it bakes and leaves the cheese swimming. Slice the peppers, onion and mushrooms thinly and pat them dry. **Keep the toppings in a single layer** instead of stacking them; thick piles stay raw underneath and steam the crust from above. Cook the sausage first.

Stretch the dough, spread a thin layer of sauce, add mozzarella, then the toppings, and finish with pepperoni on top so the slices crisp. Bake on a preheated tray at the highest setting until the crust is blistered and the cheese is bubbling. Rest the pizza for two minutes so the toppings settle before it is cut. Cut it with a sharp wheel.`,
    ing: [
      '300 g strong white bread flour',
      '4 g fast action yeast',
      '1 tsp salt',
      '1 tsp sugar',
      '190 ml warm water',
      '1 tbsp olive oil',
      '120 g passata',
      '1/2 tsp dried oregano',
      '200 g grated mozzarella',
      '100 g Italian sausage, casing removed',
      '50 g sliced pepperoni',
      '1/2 green pepper, sliced thin',
      '1/2 small onion, sliced thin',
      '60 g mushrooms, sliced',
      '30 g black olives, sliced'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the water and oil and knead for 8 minutes until smooth. Cover and leave to rise for 1 hour.',
      'Heat the oven to 240C with a baking tray inside. Brown the sausage in a pan for 5 minutes, breaking it up, and drain.',
      'Stretch the dough to a 30 cm round on baking paper. Spread with the passata and oregano and scatter over the mozzarella.',
      'Top with the sausage, pepperoni, pepper, onion, mushrooms and olives in a single layer.',
      'Slide onto the hot tray and bake for 15 minutes until the crust is blistered and the cheese is bubbling.'
    ],
    tips: [
      'Brown the sausage first so it does not release fat on the pizza.',
      'Pat wet vegetables dry before topping.',
      'Keep the toppings thin so the base crisps.'
    ],
    pair: ['Green salad', 'Garlic dip', 'Chilli flakes', 'Cold lager'],
    store: 'Keeps for 3 days in the fridge. Reheat slices in a hot oven.',
    rest: [60, 'Rising']
  },

  'sicilian-pizza': {
    d: 'A thick, soft, rectangular pizza proved in an oiled tin, topped with tomato sauce, mozzarella and parmesan and baked for 25 minutes.',
    meta: 'Sicilian pizza: a thick, airy tray pizza with a crisp base, baked for 25 minutes. Eight slices, plus rising.',
    kw: ['sicilian pizza', 'sicilian pizza recipe', 'thick crust sicilian pizza', 'sicilian tray pizza', 'pan pizza with tomato and mozzarella'],
    why: `A Sunday dinner for a table of eight: one big tray, cut into squares, with a base like focaccia and a topping that goes right to the corner. Sicilian pizza is thick and airy with a crisp, oily base, and it feeds a crowd for little money. Think focaccia with toppings.

The dough is wetter than a standard pizza dough, which gives it the open, bubbly crumb. Mix it, let it rise once, then press it into an oiled tin and let it rise again until puffy. **Do not punch the dough down hard.** Press it gently with oiled fingers to fill the corners, so the air stays in the dough.

Be generous with the oil in the tin: it fries the base to a golden crunch. Top with sauce, mozzarella and a dusting of parmesan and bake on a low shelf so the base browns before the cheese does. Slide the pizza out of the tin onto a rack straight away, so steam does not soften the bottom. Move it out fast.`,
    ing: [
      '400 g strong white bread flour',
      '6 g fast action yeast',
      '1 1/2 tsp salt',
      '1 tsp sugar',
      '300 ml warm water',
      '4 tbsp olive oil',
      '200 g passata',
      '1 tsp dried oregano',
      '250 g grated mozzarella',
      '30 g grated parmesan'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the water and 1 tablespoon of the oil and mix to a sticky dough. Cover and leave to rise for 1 hour.',
      'Pour 2 tablespoons of oil into a 33 x 23 cm tin. Turn the dough into it, press gently into the corners and leave to rise for 45 minutes.',
      'Heat the oven to 230C. Spread the passata over the dough and sprinkle with the oregano.',
      'Add the mozzarella and parmesan, drizzle with the last of the oil and bake on a low shelf for 25 minutes until golden and bubbling.',
      'Slide out onto a rack and cut into 8 squares.'
    ],
    tips: [
      'Use plenty of oil in the tin; it crisps the base.',
      'Press the dough into the corners with oiled fingers.',
      'Bake low in the oven so the base browns.'
    ],
    pair: ['Green salad', 'Roasted peppers', 'Olives', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze slices for 2 months.',
    rest: [105, 'Rising']
  },

  'taco-pizza': {
    d: 'A pizza with a refried bean base, spiced beef, melted cheese and cold lettuce, tomato and tortilla chips, baked for 20 minutes.',
    meta: 'Taco pizza: refried beans, seasoned beef and cheese on a pizza base, topped with cold lettuce and tomato. Four servings.',
    kw: ['taco pizza', 'taco pizza recipe', 'homemade taco pizza', 'pizza with refried beans and taco beef', 'mexican pizza with taco toppings'],
    why: `Game night, a birthday table or a Friday with four hungry people: taco pizza fits all of them. Instead of tomato sauce the base is spread with refried beans, then topped with seasoned beef and cheese, and it comes out of the oven to be piled with cold, crisp taco toppings. Cold toppings finish it.

Brown the beef with the seasoning and let the liquid cook away; a wet filling makes the base soggy. Spread the refried beans in a thin layer to the edge, scatter the beef and cheese over it, and bake until the cheese melts and the crust is crisp. **Add the cold toppings after baking**, not before. Hot lettuce wilts into a damp mess, but cold lettuce on hot cheese is the point of the dish.

Finish with shredded lettuce, diced tomato, a scatter of crushed tortilla chips, a spoonful of soured cream and salsa. Cut the pizza while the cheese is still molten and eat it with a napkin. Eat it hot.`,
    ing: [
      '300 g ready-made pizza base',
      '250 g refried beans',
      '300 g minced beef',
      '2 tbsp taco seasoning',
      '60 ml water',
      '200 g grated cheddar',
      '1 small lettuce, shredded',
      '2 tomatoes, diced',
      '30 g tortilla chips, crushed',
      '100 g soured cream',
      '100 g salsa'
    ],
    st: [
      'Heat the oven to 220C. Brown the beef in a pan for 6 minutes. Stir in the taco seasoning and water and simmer for 4 minutes until dry.',
      'Spread the refried beans over the pizza base, leaving a 2 cm border.',
      'Scatter over the beef and the cheddar.',
      'Bake for 20 minutes until the cheese bubbles and the edge is crisp.',
      'Top with the lettuce, tomatoes, tortilla chips, soured cream and salsa and serve at once.'
    ],
    tips: [
      'Cook the beef dry so the base stays crisp.',
      'Add the cold toppings after baking.',
      'Warm the refried beans so they spread easily.'
    ],
    pair: ['Guacamole', 'Pickled jalapeños', 'Lime wedges', 'Cold beer'],
    store: 'Best eaten fresh. Keeps for 2 days in the fridge without the cold toppings.'
  },

  'enchilada-pie': {
    d: 'Layers of corn tortillas, spiced beef, black beans, enchilada sauce and cheese baked for 25 minutes in one dish and cut into wedges.',
    meta: 'Enchilada pie: layers of tortilla, beef, beans, sauce and cheese baked together. Six servings, ready in 50 minutes.',
    kw: ['enchilada pie', 'enchilada pie recipe', 'layered enchilada casserole', 'beef and bean enchilada pie', 'easy enchilada casserole'],
    why: `Warm the tortillas before layering. A cold corn tortilla cracks as soon as it is bent, but a warm one is soft and lies flat, so each layer in the pie stays whole and slices cleanly.

This is enchiladas without the rolling: a stack of tortillas, spiced beef and beans, and sauce, repeated and finished with a lot of cheese. Brown the beef with onion, garlic and cumin until the pan is dry, then stir in the beans. **Dip each tortilla in the sauce** for a moment before laying it down. The sauce softens the tortilla and holds the layers together as they bake. Layers hold it together.

Build the pie in a deep, round dish, ending with sauce and cheese, and cover with foil for the first part of the bake. Uncover to melt and brown the top. Rest it for ten minutes before cutting, so the layers set into wedges that stay upright on the plate.`,
    ing: [
      '450 g minced beef',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp chilli powder',
      '400 g tinned black beans, drained',
      '600 ml enchilada sauce',
      '8 corn tortillas',
      '250 g grated cheddar and Monterey jack',
      '2 spring onions, sliced',
      '100 g soured cream, to serve'
    ],
    st: [
      'Heat the oven to 190C. Brown the beef and onion in a pan for 8 minutes. Add the garlic, cumin and chilli powder for 1 minute, then the beans and 100 ml of the sauce.',
      'Warm the tortillas in a dry pan or the microwave until soft.',
      'Spread a little sauce in a deep 23 cm dish. Dip 2 tortillas in sauce and lay them down, then add a third of the beef and a quarter of the cheese. Repeat for 3 layers.',
      'Finish with 2 tortillas dipped in sauce, the remaining sauce and cheese. Cover with foil and bake for 15 minutes.',
      'Uncover and bake for 10 minutes until bubbling and browned. Rest for 10 minutes, then cut into wedges with the spring onions and soured cream.'
    ],
    tips: [
      'Warm the tortillas so they do not crack.',
      'Rest the pie for 10 minutes before slicing.',
      'Choose a deep dish so the sauce does not boil over.'
    ],
    pair: ['Green salad', 'Rice', 'Guacamole', 'Lime wedges'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.'
  },

  'taco-bake': {
    d: 'A casserole of crushed tortilla chips, taco beef, beans, salsa and cheese baked for 25 minutes until bubbling and golden.',
    meta: 'Taco bake: crushed tortilla chips layered with taco beef, beans and cheese. Six servings, ready in 50 minutes.',
    kw: ['taco bake', 'taco bake recipe', 'taco casserole with tortilla chips', 'beef and bean taco bake', 'easy taco casserole'],
    why: `Tortilla chips, taco beef, beans, cheese: that is the whole list, and the oven does the rest. A taco bake takes everything a good taco has and stacks it in one dish, with the chips standing in for the shell and softening just enough to hold the layers together. Everything goes in one dish.

Brown the beef with the seasoning and a little water, and cook until the pan is nearly dry. Stir in the beans and salsa. **Crush the chips only roughly**, leaving some pieces about the size of a thumbnail; fine crumbs turn to paste in the sauce, but chunky pieces keep some bite.

Layer chips and filling in a baking dish, finishing with cheese, and bake until the cheese is bubbling and the edges are crisp. The dish can be topped, after baking, with whatever a taco would have: lettuce, tomato, soured cream, jalapeños and a squeeze of lime. Serve it straight from the dish with a big spoon. Leftovers reheat well.`,
    ing: [
      '500 g minced beef',
      '2 tbsp taco seasoning',
      '120 ml water',
      '400 g tinned pinto beans, drained',
      '250 g salsa',
      '200 g tortilla chips, roughly crushed',
      '250 g grated cheddar',
      '1 small lettuce, shredded',
      '2 tomatoes, diced',
      '100 g soured cream'
    ],
    st: [
      'Heat the oven to 190C. Brown the beef in a large pan for 8 minutes, breaking it up.',
      'Stir in the taco seasoning and water and simmer for 5 minutes until nearly dry. Add the beans and salsa.',
      'Spread half the chips in a 3 litre baking dish. Add half the beef mixture and a third of the cheese. Repeat the layers, finishing with the last of the cheese.',
      'Bake for 25 minutes until bubbling and golden.',
      'Top with the lettuce, tomatoes and soured cream and serve.'
    ],
    tips: [
      'Cook the beef until nearly dry.',
      'Crush the chips roughly rather than to crumbs.',
      'Add the cold toppings after baking.'
    ],
    pair: ['Lime wedges', 'Guacamole', 'Rice', 'Pickled jalapeños'],
    store: 'Keeps for 3 days in the fridge. The chips soften; reheat in a hot oven.'
  },

  'calabacitas': {
    d: 'A Mexican skillet of courgettes, sweetcorn, roasted poblano and tomato, cooked for 20 minutes and finished with crumbled fresh cheese.',
    meta: 'Calabacitas: courgettes, corn, poblano and tomato cooked in one pan. Four servings, ready in 30 minutes.',
    kw: ['calabacitas', 'calabacitas recipe', 'mexican courgette and corn skillet', 'calabacitas con elote', 'zucchini corn and poblano'],
    why: `Calabacitas fails when the courgettes are cooked until they weep and collapse, and the dish turns into a pan of grey water. The cure is a hot pan, a single layer of courgette and a light hand with the lid. Hot pans fix it.

Cut the courgettes into half-moons or small cubes, about the size of a thumb joint. Cook them in oil over a medium-high heat for a few minutes without stirring, until the underside is golden. **Do not salt them early**, since salt draws out water and the courgettes steam instead of browning. Add the onion, garlic and the poblano, which gives the dish its smoky, mild heat. Season at the end.

The corn goes in next, then the tomatoes, with a splash of water or stock. Cover and cook for a few minutes until the vegetables are tender but still hold their shape. Stir in the crumbled cheese at the end, and eat the dish on its own with warm tortillas, or beside grilled meat. Cheese softens it.`,
    ing: [
      '600 g courgettes, cut into 1.5 cm cubes',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '2 poblano peppers (about 200 g), roasted, peeled and chopped',
      '200 g sweetcorn kernels',
      '2 tomatoes, chopped',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '80 g queso fresco, crumbled'
    ],
    st: [
      'Heat the oil in a wide pan over a medium-high heat. Cook the courgettes in a single layer for 6 minutes until golden in places.',
      'Add the onion and garlic and cook for 3 minutes. Stir in the poblano peppers and cumin.',
      'Add the sweetcorn, tomatoes and 60 ml water. Cover and cook for 8 minutes until tender.',
      'Season with the salt, stir in the cheese and serve hot.'
    ],
    tips: [
      'Cook the courgettes in one layer, in batches if the pan is small.',
      'Salt late so the courgettes stay firm.',
      'Use a green pepper and a pinch of chilli if poblanos are not available.'
    ],
    pair: ['Warm tortillas', 'Grilled chicken', 'Rice', 'Black beans'],
    store: 'Keeps for 3 days in the fridge. Reheat gently.'
  },

  'pollo-asado': {
    d: 'Chicken legs marinated for 2 hours in orange, lime, garlic and cumin, then roasted for 45 minutes until the skin is crisp and the juices clear.',
    meta: 'Pollo asado: chicken legs marinated in orange, lime and garlic and roasted for 45 minutes. Four servings, plus marinating.',
    kw: ['pollo asado', 'pollo asado recipe', 'mexican roast chicken', 'citrus marinated chicken legs', 'pollo asado with orange and lime'],
    why: `Pollo asado means roasted or grilled chicken, and the name covers a lot of ground. This version is the citrus kind: chicken legs marinated in orange juice, lime juice, garlic, cumin and oregano, then roasted hot until the skin crackles. Citrus does the work.

The orange and lime do two jobs. Acid softens the surface of the meat and carries the garlic and spices into it, and the sugar in the orange juice caramelises on the skin for colour. **Do not marinate for longer than four hours.** Citrus begins to turn the meat chalky and soft if it sits too long. Always marinate in the fridge, and cover the dish.

Pat the legs dry before roasting, or the skin steams instead of crisping. Roast on a rack over a tray, turning once, until the skin is deep golden and a thermometer in the thickest part reads 74C. Rest for five minutes. Serve with rice, beans, tortillas and a sharp salsa.`,
    ing: [
      '1.2 kg chicken leg quarters',
      '120 ml orange juice',
      '60 ml lime juice',
      '5 garlic cloves, crushed',
      '2 tsp ground cumin',
      '2 tsp dried oregano',
      '1 tsp smoked paprika',
      '2 tsp salt',
      '2 tbsp vegetable oil'
    ],
    st: [
      'Whisk the orange juice, lime juice, garlic, cumin, oregano, paprika, salt and oil in a bowl.',
      'Put the chicken in a dish, pour over the marinade, cover and marinate in the fridge for 2 hours.',
      'Heat the oven to 220C. Lift the chicken out, pat dry and set on a rack over a roasting tray.',
      'Roast for 45 minutes, turning once, until the skin is golden and the chicken reaches 74C.',
      'Rest for 5 minutes and serve.'
    ],
    tips: [
      'Marinate in the fridge for no more than 4 hours.',
      'Pat the chicken dry so the skin crisps.',
      'Use a thermometer to check the thickest part.'
    ],
    pair: ['Rice', 'Black beans', 'Warm tortillas', 'Pickled red onion'],
    store: 'Keeps for 3 days in the fridge. Freeze cooked for 2 months.',
    rest: [120, 'Marinating']
  },

  'western-omelette': {
    d: 'A folded omelette of eggs, diced ham, green pepper, onion and cheddar, cooked for 10 minutes in butter in a hot non-stick pan.',
    meta: 'Western omelette with ham, green pepper, onion and cheddar. Two servings, ready in 20 minutes.',
    kw: ['western omelette', 'western omelette recipe', 'denver omelette', 'ham and pepper omelette', 'omelette with ham, onion and green pepper'],
    why: `Breakfast for two on a weekend, with plenty of coffee: the Western omelette suits the slow start. Ham, green pepper and onion are cooked briefly in butter, then folded into soft eggs with a little cheddar, and the whole thing takes about as long as the toast. Keep it simple.

Cook the filling first and set it aside, because raw onion and pepper release water into the eggs and leave a damp, rubbery omelette. They need only a few minutes in the pan until soft. **Beat the eggs with a spoonful of milk** and plenty of pepper until no streaks of white remain. That gives a tender, even texture.

Use a non-stick pan over a medium heat, add the egg, and as the edges set, tilt the pan and draw the cooked egg to the centre so the raw egg runs out to fill the gaps. When the top is nearly set but still glossy, add the filling and cheese, fold, and slide onto a warm plate. Serve it hot.`,
    ing: [
      '4 eggs',
      '2 tbsp whole milk',
      '30 g butter',
      '80 g cooked ham, diced',
      '1/2 green pepper, diced',
      '1/2 small onion, diced',
      '40 g grated cheddar',
      '1/4 tsp black pepper'
    ],
    st: [
      'Melt half the butter in a non-stick pan. Cook the onion and pepper for 4 minutes until soft, add the ham for 1 minute and tip onto a plate.',
      'Beat the eggs with the milk and pepper.',
      'Melt half the remaining butter in the pan over a medium heat, pour in half the eggs and cook for 2 minutes, drawing the edges to the centre.',
      'Add half the filling and cheese, fold the omelette over and slide onto a plate. Repeat with the remaining mixture.'
    ],
    tips: [
      'Cook the vegetables before they go in the omelette.',
      'Use a medium heat; a hot pan toughens the eggs.',
      'Fold when the top is just set and still a little glossy.'
    ],
    pair: ['Toast', 'Hash browns', 'Fresh orange juice', 'Fried tomatoes'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.'
  },

  'blueberry-pancakes': {
    d: 'Thick, fluffy pancakes dotted with fresh blueberries and cooked for 15 minutes on a griddle until golden.',
    meta: 'Blueberry pancakes: thick, fluffy griddle pancakes with juicy berries. Four servings, ready in 25 minutes.',
    kw: ['blueberry pancakes', 'blueberry pancakes recipe', 'fluffy blueberry pancakes', 'homemade blueberry pancakes', 'pancakes with fresh blueberries'],
    why: `Think of a blueberry muffin, made in a pan in a quarter of the time. A good blueberry pancake is thick, fluffy and tender, with berries that burst into pockets of warm juice, and the batter is nearly as simple as a muffin mix. Speed is the difference.

Mix the dry ingredients and the wet ones separately and combine them with a few strokes. **Leave the batter lumpy.** Stirring until smooth develops the gluten and gives tough, flat pancakes. Let it stand for five minutes while the pan heats so the flour hydrates and the baking powder begins to work.

Pour the batter into a lightly buttered pan, then drop the blueberries onto each pancake while the top is still wet. Scattering them into the batter bowl makes the whole batch purple and the berries burst on the griddle. Turn when bubbles break on the surface and the edges look set, and cook the second side until golden. Serve hot with butter and maple syrup.`,
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '2 tbsp sugar',
      '1/2 tsp salt',
      '1 egg',
      '250 ml whole milk',
      '40 g butter, melted, plus extra for the pan',
      '150 g fresh blueberries',
      '60 ml maple syrup, to serve'
    ],
    st: [
      'Mix the flour, baking powder, sugar and salt in a bowl.',
      'Whisk the egg, milk and melted butter, pour into the flour and stir until just combined, leaving a few lumps. Rest for 5 minutes.',
      'Heat a griddle or large frying pan over a medium heat and rub with butter.',
      'Pour 80 ml of batter per pancake, drop 5 or 6 blueberries on each, and cook for 2 minutes until bubbles form. Flip and cook for 2 minutes more. Repeat to make 8.',
      'Serve with the maple syrup.'
    ],
    tips: [
      'Keep the batter lumpy; overmixing makes tough pancakes.',
      'Add the blueberries on the griddle, not in the bowl.',
      'Cook over a medium heat so the middle sets before the outside browns.'
    ],
    pair: ['Maple syrup', 'Butter', 'Crispy bacon', 'Greek yoghurt'],
    store: 'Keeps for 2 days in the fridge. Freeze for 2 months and reheat in a toaster.'
  },

  'oatmeal-pancakes': {
    d: 'Hearty pancakes of rolled oats soaked in buttermilk, cooked for 15 minutes until golden, with a nutty flavour and soft crumb.',
    meta: 'Oatmeal pancakes: soft, nutty pancakes made with rolled oats and buttermilk. Four servings, ready in 25 minutes.',
    kw: ['oatmeal pancakes', 'oatmeal pancakes recipe', 'oat pancakes with buttermilk', 'rolled oat pancakes', 'hearty oatmeal pancakes'],
    why: `Soak the oats in the buttermilk first. It is the one step that matters, because raw oats are tough and dry in a batter, but oats that have sat in buttermilk for ten minutes turn soft and creamy, and the pancakes cook up tender with a gentle tang.

Stir the oats and buttermilk together in a bowl and leave them while the pan heats and the dry ingredients are measured. **Use rolled oats, not instant.** Instant oats turn to paste, and steel-cut ones stay hard. The soaked oats look like thick porridge, which is correct; do not add extra liquid.

Whisk in the egg and melted butter, then fold in the flour, baking powder and sugar until just combined. Cook on a medium heat in a lightly greased pan, using about 60 ml of batter for each. The pancakes are a little denser than white-flour ones, so they need a minute longer on each side. Serve with fruit, nuts and syrup.`,
    ing: [
      '100 g rolled oats',
      '300 ml buttermilk',
      '1 egg',
      '30 g butter, melted, plus extra for the pan',
      '100 g plain flour',
      '2 tsp baking powder',
      '2 tbsp brown sugar',
      '1/2 tsp salt',
      '1/2 tsp ground cinnamon',
      '60 ml maple syrup, to serve'
    ],
    st: [
      'Stir the oats and buttermilk together and leave for 10 minutes.',
      'Whisk in the egg and melted butter. Fold in the flour, baking powder, sugar, salt and cinnamon until just combined.',
      'Heat a griddle over a medium heat and rub with butter.',
      'Pour 60 ml batter per pancake and cook for 3 minutes until bubbles form and the edge looks set. Flip and cook for 2 minutes more. Repeat to make 8.',
      'Serve with the maple syrup.'
    ],
    tips: [
      'Soak the oats for the full 10 minutes.',
      'Keep the heat medium; oat batter browns fast.',
      'Thin the batter with a splash of milk if it is too stiff.'
    ],
    pair: ['Maple syrup', 'Sliced banana', 'Toasted walnuts', 'Berries'],
    store: 'Keeps for 2 days in the fridge. Freeze for 2 months.'
  },

  'eggnog-french-toast': {
    d: 'Thick bread slices soaked in eggnog and egg and fried for 15 minutes in butter until golden, with nutmeg and maple syrup.',
    meta: 'Eggnog French toast: brioche soaked in eggnog and pan-fried until golden. Four servings, ready in 25 minutes.',
    kw: ['eggnog french toast', 'eggnog french toast recipe', 'christmas french toast', 'french toast with eggnog', 'brioche french toast with nutmeg'],
    why: `Soak, don't drown. The bread should take on enough eggnog to be custardy in the middle and no more, because a slice that is saturated stays wet at the centre however long it fries.

Use thick slices of brioche or challah that are a day or two old, which hold up to the soak without falling apart. Fresh, soft bread collapses. Whisk the eggnog with the eggs, a pinch of nutmeg and a splash of vanilla in a shallow dish. **Soak each slice for about 30 seconds a side**, long enough for the surface to take on the custard but not so long that it sags.

Fry in butter over a medium heat until deeply golden, about three minutes on each side, so the custard in the middle cooks through. A too-hot pan browns the outside before the middle sets. Use shop-bought, pasteurised eggnog. Serve at once, dusted with nutmeg and with maple syrup.`,
    ing: [
      '8 thick slices brioche (about 400 g), a day old',
      '250 ml pasteurised eggnog',
      '2 eggs',
      '1/2 tsp ground nutmeg',
      '1 tsp vanilla extract',
      '40 g butter, for frying',
      '60 ml maple syrup, to serve'
    ],
    st: [
      'Whisk the eggnog, eggs, nutmeg and vanilla in a shallow dish.',
      'Melt a little butter in a large pan over a medium heat.',
      'Soak each slice for 30 seconds on each side and fry for 3 minutes on each side until deep golden and set in the middle. Cook in batches, adding butter as needed.',
      'Serve hot, dusted with nutmeg and with the maple syrup.'
    ],
    tips: [
      'Use day-old bread so it holds up to the soak.',
      'Cook over a medium heat so the middle sets.',
      'Keep cooked slices warm in a low oven.'
    ],
    pair: ['Maple syrup', 'Crispy bacon', 'Fresh cranberries', 'Whipped cream'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge; reheat in a toaster.'
  },

  'farina-porridge': {
    d: 'Smooth hot cereal of fine wheat semolina cooked for 8 minutes in milk until thick and creamy, finished with butter and brown sugar.',
    meta: 'Farina porridge: creamy wheat semolina cooked in milk with butter and sugar. Two servings, ready in 10 minutes.',
    kw: ['farina porridge', 'farina hot cereal', 'farina recipe', 'creamy semolina porridge', 'wheat farina breakfast'],
    why: `The pot smells of warm milk and wheat, and it takes only minutes to bring a bowl of farina porridge to the table. It is a smooth, mild hot cereal made from fine ground wheat, popular for breakfast and for anyone who finds oats too coarse. Stir early and often.

The one risk is lumps. Pour the farina into the milk in a slow, steady stream while whisking, and keep whisking for the first minute. **Start with cold milk, not boiling**, so the grains disperse before they swell. Heat the pot gently, stirring, and the mixture thickens quickly into a smooth porridge with the texture of loose pudding.

Cook until it holds a trail on the surface and no longer tastes raw or chalky. Stir in the butter and a pinch of salt. It thickens as it stands, so serve it a little looser than it should be at the table. Brown sugar, cinnamon, fruit or a spoonful of jam are all good on top. Season to taste.`,
    ing: [
      '60 g fine semolina',
      '500 ml whole milk',
      '1 pinch salt',
      '15 g butter',
      '2 tbsp brown sugar',
      '1/4 tsp ground cinnamon'
    ],
    st: [
      'Pour the cold milk into a pan and sprinkle in the semolina, whisking constantly.',
      'Heat over a medium heat, stirring, and cook for 8 minutes until thick and smooth.',
      'Stir in the salt and butter.',
      'Spoon into bowls and top with the sugar and cinnamon.'
    ],
    tips: [
      'Whisk the semolina in while the milk is cold.',
      'Stir often so the bottom does not catch.',
      'Add a splash of milk if the porridge stiffens as it stands.'
    ],
    pair: ['Brown sugar', 'Stewed fruit', 'Jam', 'Sliced banana'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge; loosen with milk and reheat.'
  },

  'little-smokies': {
    d: 'Cocktail sausages simmered for 25 minutes in a sticky barbecue and grape jelly sauce until glazed, for parties and game days.',
    meta: 'Little smokies: cocktail sausages in a sweet barbecue and grape jelly sauce. Twelve servings, ready in 30 minutes.',
    kw: ['little smokies', 'little smokies recipe', 'barbecue little smokies', 'cocktail sausages in grape jelly sauce', 'party sausages'],
    why: `Three ingredients. Twenty-five minutes. A pot that does its own work while the rest of the party food comes together: little smokies are about as simple as hot party snacks get, and a bowl of them disappears quickly.

The sauce is barbecue sauce and grape jelly, which sounds odd and tastes like a sweet, tangy glaze. Grape jelly is mostly sugar and fruit, and it melts into the sauce and gives it a glossy shine and a mild fruitiness that balances the smoke. **Simmer uncovered** so the sauce reduces and clings. Covered, it stays thin and pools in the dish.

Stir often and cook until the sausages are plump, heated through and well coated. Hold the pot on the lowest heat, or move it to a slow cooker on warm, and serve with cocktail sticks. For a spicier version, add a spoonful of hot sauce or a pinch of chilli flakes to the pot. Spice it if wanted.`,
    ing: [
      '800 g cocktail sausages',
      '250 g barbecue sauce',
      '150 g grape jelly',
      '1 tbsp hot sauce'
    ],
    st: [
      'Combine the barbecue sauce, grape jelly and hot sauce in a large pan and heat, stirring, until the jelly melts.',
      'Add the sausages and stir to coat.',
      'Simmer uncovered over a medium-low heat for 25 minutes, stirring often, until glazed and hot through.',
      'Serve warm with cocktail sticks.'
    ],
    tips: [
      'Keep the heat medium-low so the sugar in the sauce does not burn.',
      'Stir often to coat the sausages evenly.',
      'Use a slow cooker on warm to hold them for a party.'
    ],
    pair: ['Cocktail sticks', 'Cheese cubes', 'Potato salad', 'Cold lager'],
    store: 'Keeps for 3 days in the fridge. Reheat until piping hot.'
  },

  'taco-dip': {
    d: 'A layered cold dip of cream cheese, soured cream and taco seasoning topped with salsa, lettuce, tomato, cheddar and olives; no cooking.',
    meta: 'Taco dip: layers of seasoned cream cheese, salsa, lettuce and cheddar, served cold with tortilla chips. Twelve servings.',
    kw: ['taco dip', 'taco dip recipe', 'layered taco dip', 'cold taco dip with cream cheese', 'taco dip for tortilla chips'],
    why: `Taco dip takes its name from the toppings of a taco, laid out in layers in a single dish: a creamy base, then salsa, lettuce, tomato, cheese and olives. It is a party staple because it needs no oven and no last-minute work. Layers are the idea.

The base is cream cheese beaten with soured cream and taco seasoning until smooth. Let the cream cheese soften at room temperature first; cold cheese leaves lumps. **Spread the base all the way to the edge** of a shallow dish, so the layers are visible through glass and every scoop gets some of each. A thin layer of salsa goes on next, drained so it does not leak. Soften the cheese first.

Top with shredded lettuce, diced tomato, grated cheddar and sliced olives. Add the cold toppings close to serving time so the lettuce stays crisp. Chill for the cream cheese to firm up, and do not leave the dip out at room temperature for more than two hours. Serve with tortilla chips.`,
    ing: [
      '225 g cream cheese, softened',
      '150 g soured cream',
      '2 tbsp taco seasoning',
      '200 g salsa, drained',
      '1/2 small lettuce, shredded',
      '2 tomatoes, diced',
      '150 g grated cheddar',
      '50 g black olives, sliced',
      '250 g tortilla chips, to serve'
    ],
    st: [
      'Beat the cream cheese, soured cream and taco seasoning until smooth.',
      'Spread the mixture to the edges of a shallow 23 cm dish.',
      'Spoon over the drained salsa, then layer the lettuce, tomatoes, cheddar and olives.',
      'Chill until ready to serve, and serve with the tortilla chips.'
    ],
    tips: [
      'Soften the cream cheese for a lump-free base.',
      'Drain the salsa so it does not make the layers watery.',
      'Keep the dip chilled and return it to the fridge after 2 hours.'
    ],
    pair: ['Tortilla chips', 'Vegetable sticks', 'Guacamole', 'Cold beer'],
    store: 'Keeps for 2 days in the fridge, covered. Do not freeze.'
  },

  'shrimp-dip': {
    d: 'A cold, creamy dip of cream cheese, mayonnaise, chopped cooked prawns, lemon and chives, chilled for 30 minutes and served with crackers.',
    meta: 'Shrimp dip: cream cheese, mayonnaise and chopped cooked prawns with lemon and chives. Eight servings, plus chilling.',
    kw: ['shrimp dip', 'shrimp dip recipe', 'cold shrimp dip with cream cheese', 'creamy prawn dip', 'party shrimp dip'],
    why: `Shrimp dip is closest in spirit to a prawn cocktail: sweet cooked shellfish, a creamy base and a sharp squeeze of lemon. It is a cold party dip that goes with crackers and cut vegetables, and it can be made a day ahead. Chilling helps the flavour.

Chop the cooked prawns small, so that every scoop of dip has some in it and nothing slides off the cracker. Pat them dry first. **Beat the cream cheese and mayonnaise until completely smooth** before adding anything else. Lumps of cream cheese do not break down once the prawns and herbs are in.

Add lemon juice, a little Worcestershire sauce, chives and a pinch of paprika, then fold in the prawns. Chill for at least thirty minutes so the flavours blend and the dip thickens. Taste before serving; it often needs a little more lemon or salt once it is cold. Keep it in the fridge and bring out only as much as will be eaten within two hours. Taste it cold.`,
    ing: [
      '225 g cream cheese, softened',
      '60 g mayonnaise',
      '200 g cooked peeled prawns, chopped',
      '1 tbsp lemon juice',
      '1 tsp Worcestershire sauce',
      '2 tbsp chopped chives',
      '1/4 tsp paprika',
      '1/4 tsp salt',
      '200 g cucumber slices, to serve'
    ],
    st: [
      'Beat the cream cheese and mayonnaise until smooth.',
      'Stir in the lemon juice, Worcestershire sauce, chives, paprika and salt.',
      'Fold in the chopped prawns.',
      'Chill for 30 minutes. Serve with the cucumber slices and crackers.'
    ],
    tips: [
      'Pat the prawns dry before chopping.',
      'Beat the base until smooth before adding the prawns.',
      'Keep the dip chilled until serving.'
    ],
    pair: ['Crackers', 'Cucumber slices', 'Celery sticks', 'Sparkling wine'],
    store: 'Keeps for 2 days in the fridge, covered. Do not freeze.',
    rest: [30, 'Chilling']
  },

  'orange-fluff': {
    d: 'A retro dessert salad of orange jelly crystals, cottage cheese, mandarin segments and whipped cream, mixed without cooking and chilled for an hour.',
    meta: 'Orange fluff: a light, fluffy dessert of orange jelly, cottage cheese, mandarins and cream. Eight servings, plus chilling.',
    kw: ['orange fluff', 'orange fluff recipe', 'orange jelly fluff salad', 'cottage cheese and jelly dessert', 'mandarin orange fluff'],
    why: `Most retro fluff salads go runny, and the cure is in the order of work. Orange fluff mixes dry jelly crystals straight into cottage cheese, with no water, so the crystals dissolve into the moisture in the cheese and the mixture stays thick and creamy. Order of work matters.

Stir the jelly crystals into the cottage cheese and leave for a few minutes. They will dissolve slowly, and the mixture turns bright orange. Drain the mandarin segments well and pat them dry, because syrup thins the fluff and prevents it setting. **Whip the cream to soft peaks**, not stiff, and fold it in gently so the air stays in. Stir patiently.

Fold the mandarins into the cheese mixture first, then the cream last, and spoon into a bowl. Chill for at least an hour. It firms slightly and turns light and mousse-like, sweet and tangy at once. Serve cold in small bowls; a little goes a long way.`,
    ing: [
      '85 g orange jelly crystals',
      '250 g cottage cheese',
      '300 g tinned mandarin segments, drained and patted dry',
      '250 ml double cream, whipped to soft peaks'
    ],
    st: [
      'Stir the jelly crystals into the cottage cheese. Leave for 5 minutes, then stir again until the crystals have dissolved.',
      'Fold in the drained mandarin segments.',
      'Fold in the whipped cream gently.',
      'Spoon into a serving bowl and chill for 1 hour before serving.'
    ],
    tips: [
      'Drain the mandarins well so the fluff stays thick.',
      'Whip the cream only to soft peaks.',
      'Keep it chilled and serve within 2 hours of taking it out.'
    ],
    pair: ['Shortbread', 'Fresh berries', 'Roast ham', 'Chilled tea'],
    store: 'Keeps for 2 days in the fridge, covered. Do not freeze.',
    rest: [60, 'Chilling']
  },

  'cake-doughnuts': {
    d: 'Dense, tender doughnuts of a nutmeg-scented batter chilled for 30 minutes, cut into rings, fried for 15 minutes and glazed with a sweet icing.',
    meta: 'Cake doughnuts: tender nutmeg-scented rings fried until golden and glazed. Twelve doughnuts, plus chilling.',
    kw: ['cake doughnuts', 'cake donuts recipe', 'old fashioned cake doughnuts', 'homemade cake doughnuts', 'fried glazed cake doughnuts'],
    why: `Flour, baking powder, sugar, an egg and milk: that is a cake doughnut, not a yeast one, and it needs no rising. The dough is mixed and chilled, rolled thick, cut into rings and fried at once, which makes it a good project for a weekend morning. No yeast needed.

The batter is soft and sticky, and chilling for thirty minutes is what makes it possible to roll. **Do not skip the chill**, because warm dough sticks to the board, spreads in the oil and absorbs fat. Flour the surface lightly and roll the dough about 1 cm thick. Thicker rings stay cakey inside; thin ones turn crisp and dry. Cold dough rolls better.

Fry at 180C. Too cool and the doughnuts soak up oil and turn heavy; too hot and the outside browns while the middle stays raw. They need about a minute and a half on each side. Drain, then dip the tops in glaze while still warm so it sets in a thin, shiny shell.`,
    ing: [
      '350 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1/2 tsp ground nutmeg',
      '100 g sugar',
      '2 eggs',
      '150 ml whole milk',
      '40 g butter, melted',
      '1 tsp vanilla extract',
      '1 litre vegetable oil, for frying',
      '150 g icing sugar',
      '3 tbsp milk'
    ],
    st: [
      'Mix the flour, baking powder, salt, nutmeg and sugar. Whisk in the eggs, 150 ml milk, butter and vanilla to a soft dough.',
      'Cover and chill for 30 minutes.',
      'Roll the dough on a floured surface to 1 cm thick. Cut 12 rings with a 7 cm cutter and a 2.5 cm cutter for the holes.',
      'Heat the oil to 180C. Fry the doughnuts and holes in batches for 1 minute 30 seconds on each side until golden.',
      'Drain on kitchen paper. Whisk the icing sugar with the 3 tablespoons milk and dip the tops of the warm doughnuts.'
    ],
    tips: [
      'Chill the dough or it will be too soft to cut.',
      'Keep the oil at 180C; use a thermometer.',
      'Fry the holes too; they cook in about a minute.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Cinnamon sugar', 'Fresh fruit'],
    store: 'Best on the day. Keeps for 1 day in an airtight tin.',
    rest: [30, 'Chilling']
  },

  'grilled-nopales': {
    d: 'Cactus paddles grilled for 15 minutes with oil, garlic and lime until tender and lightly charred, with a flavour like green beans.',
    meta: 'Grilled nopales: tender cactus paddles with garlic and lime, grilled until charred. Four servings, ready in 25 minutes.',
    kw: ['grilled nopales', 'grilled nopales recipe', 'how to cook nopales', 'grilled cactus paddles', 'nopales with lime and garlic'],
    why: `Cut the spines off first. Nopales are the flat paddles of the prickly pear cactus, and although most shops sell them already cleaned, some still have small thorns or eyes that need slicing away with a knife.

Hold each paddle with tongs, scrape the knife along the surface away from you, and trim the edge all the way round. Rinse well. Grilling is the best way to cook them, because the heat dries the surface and reduces the slimy sap that nopales release when boiled. **Salt them and let them stand for ten minutes**, then pat dry, and the paddles grill with far less stickiness.

Brush with oil and garlic and cook over a medium-high heat for about six minutes a side, until tender and speckled with char. The texture is like a firm green bean, with a mild, lemony, slightly tart flavour. Slice into strips and finish with lime juice. They are good in tacos, with eggs or beside grilled meat.`,
    ing: [
      '500 g cleaned nopales (cactus paddles)',
      '3 tbsp olive oil',
      '3 garlic cloves, crushed',
      '1/2 tsp salt',
      '2 tbsp lime juice',
      '2 tbsp chopped coriander',
      '1/2 tsp chilli flakes'
    ],
    st: [
      'Trim any remaining spines from the nopales, rinse and sprinkle with the salt. Leave for 10 minutes, then pat dry.',
      'Mix the oil and garlic and brush over both sides of the paddles.',
      'Grill over a medium-high heat for 6 minutes on each side, until tender and charred in places.',
      'Slice into strips, toss with the lime juice, coriander and chilli flakes and serve warm.'
    ],
    tips: [
      'Salt and dry the nopales to reduce their sticky sap.',
      'Use tongs when trimming; thorns are sharp.',
      'Grill until just tender; overcooked paddles go slimy.'
    ],
    pair: ['Tacos', 'Scrambled eggs', 'Grilled steak', 'Black beans'],
    store: 'Keeps for 3 days in the fridge. Reheat quickly in a hot pan.'
  },

  'strawberry-fool': {
    d: 'A simple chilled dessert of crushed strawberries folded into softly whipped cream, sweetened lightly and spooned into glasses with no cooking.',
    meta: 'Strawberry fool: crushed strawberries folded into whipped cream, spooned into glasses. Four servings.',
    kw: ['strawberry fool', 'strawberry fool recipe', 'british strawberry fool', 'strawberry and cream dessert', 'fruit fool with whipped cream'],
    why: `Strawberries, cream and sugar: three things, no oven, and a dessert that looks finer than the effort that goes into it. A fool is simply crushed fruit folded into whipped cream, and the best ones are made with fruit at its ripest. Ripeness is everything.

Hull the strawberries and crush about two thirds of them with a fork, with the sugar, until they are juicy but still have some texture. Leave the rest in slices for the top. **Whip the cream to soft peaks only.** Stiff cream will not fold smoothly, and the fool turns heavy and buttery instead of light.

Fold the crushed fruit into the cream in a few gentle strokes, leaving ripples of red rather than blending it to an even pink. Spoon into glasses and chill for at least thirty minutes for the flavours to meet. Top with the sliced strawberries just before serving. A squeeze of lemon brightens the fruit.`,
    ing: [
      '400 g ripe strawberries, hulled',
      '50 g caster sugar',
      '1 tsp lemon juice',
      '300 ml double cream'
    ],
    st: [
      'Slice a third of the strawberries and set them aside. Crush the rest with the sugar and lemon juice using a fork.',
      'Whip the cream to soft peaks.',
      'Fold the crushed strawberries into the cream with a few strokes, leaving ripples.',
      'Spoon into 4 glasses, top with the sliced strawberries and chill until ready to serve.'
    ],
    tips: [
      'Use the ripest strawberries you can find.',
      'Whip the cream only to soft peaks.',
      'Fold gently to keep the ripple.'
    ],
    pair: ['Shortbread', 'Sponge fingers', 'Sparkling wine', 'Fresh mint'],
    store: 'Keeps for 1 day in the fridge, covered. Do not freeze.'
  },

  'peppermint-creams': {
    d: 'Soft, sweet fondant sweets of icing sugar, pasteurised egg white and peppermint, cut into rounds and left for 2 hours to firm up.',
    meta: 'Peppermint creams: soft fondant sweets with a cool mint flavour, no cooking. Thirty sweets, plus setting.',
    kw: ['peppermint creams', 'peppermint creams recipe', 'homemade peppermint creams', 'peppermint fondant sweets', 'no cook peppermint sweets'],
    why: `Icing sugar, egg white, peppermint: a short list, and about half an hour of fiddly pleasure. Peppermint creams are old-fashioned sweets, soft in the middle and slightly crisp on the outside, and they make a good edible gift. They make good gifts.

Use pasteurised egg white from a carton, because the mixture is not cooked. Whisk the egg white with the peppermint extract until just frothy, then add icing sugar a spoonful at a time, stirring until it forms a stiff, smooth dough. **Add the sugar in stages.** The amount needed depends on the size of the egg white, and the dough should feel like soft modelling clay that does not stick to the fingers.

Dust the surface with icing sugar, roll the dough to about the thickness of a finger and cut into small rounds. Lay them on parchment and leave in a cool place for two hours to dry out. Dip half in melted chocolate for a more elaborate sweet. They keep well in a tin.`,
    ing: [
      '40 g pasteurised egg white',
      '1 tsp peppermint extract',
      '450 g icing sugar, sifted',
      '2 tbsp icing sugar, for rolling'
    ],
    st: [
      'Whisk the egg white and peppermint extract in a bowl until frothy.',
      'Stir in the icing sugar a spoonful at a time until you have a firm, smooth dough.',
      'Dust the work surface with icing sugar, roll the dough 1 cm thick and cut out 30 rounds with a 3 cm cutter.',
      'Lay on a sheet of greaseproof paper and leave for 2 hours until firm.'
    ],
    tips: [
      'Sift the icing sugar to avoid lumps.',
      'Add the sugar slowly to get the right consistency.',
      'Use pasteurised egg white from a carton.'
    ],
    pair: ['Dark chocolate', 'Coffee', 'Hot chocolate', 'Gift tin'],
    store: 'Keeps for 2 weeks in an airtight tin between sheets of paper.',
    rest: [120, 'Setting']
  },

  'muesli-slice': {
    d: 'A chewy slice of rolled oats, coconut, seeds and raisins bound with butter and honey, baked for 20 minutes and cut into squares.',
    meta: 'Muesli slice: a chewy oat, coconut and raisin traybake bound with honey. Sixteen pieces, ready in 35 minutes.',
    kw: ['muesli slice', 'muesli slice recipe', 'oat and coconut slice', 'chewy muesli bars', 'australian muesli slice'],
    why: `Oats and honey toasting give off a smell about ten minutes into the bake, and it is how you know the slice is nearly done. Muesli slice is an Australian traybake of oats, coconut, seeds and dried fruit, held together with butter and honey, and it is a lunchbox staple. Pack it tight.

Melt the butter, honey and sugar together, then stir them into the dry ingredients until every oat is lightly coated. **Press the mixture into the tin firmly.** Use the back of a spoon, then a flat-bottomed glass, and press hard right into the corners. A loose, uneven layer crumbles when cut.

Bake until golden brown at the edges; the centre will still feel soft, but it firms up as it cools. Cut into squares while warm and then leave to cool completely in the tin. Cutting after it sets leaves the pieces cracked. Wrap individual squares for lunchboxes, and keep in an airtight container.`,
    ing: [
      '200 g rolled oats',
      '60 g desiccated coconut',
      '100 g raisins',
      '60 g sunflower seeds',
      '100 g butter',
      '80 g honey',
      '80 g light brown sugar',
      '1/4 tsp salt',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 160C. Line a 20 cm square tin with baking paper.',
      'Mix the oats, coconut, raisins, seeds, salt and cinnamon in a large bowl.',
      'Melt the butter, honey and sugar in a small pan, stirring, then pour over the oat mixture and stir well.',
      'Press firmly into the tin and bake for 20 minutes until golden at the edges.',
      'Cut into 16 squares while warm, then cool in the tin before lifting out.'
    ],
    tips: [
      'Press the mixture firmly, especially at the edges.',
      'Cut the slice while it is warm.',
      'Let it cool completely in the tin before removing.'
    ],
    pair: ['Tea', 'Coffee', 'Fresh fruit', 'Yoghurt'],
    store: 'Keeps for 1 week in an airtight tin. Freeze for 2 months.'
  },

  'kiwi-onion-dip': {
    d: 'A New Zealand party dip of soured cream, cream cheese and slowly softened onion, mixed with chives and chilled for an hour.',
    meta: 'Kiwi onion dip: soured cream and cream cheese with soft fried onion and chives. Ten servings, plus chilling.',
    kw: ['kiwi onion dip', 'new zealand onion dip', 'onion dip recipe', 'soured cream and onion dip', 'kiwi dip with chips'],
    why: `Next to a French onion dip, the Kiwi version is paler, creamier and a good deal more relaxed: a bowl of soured cream and cream cheese with onion cooked down until soft and sweet, set out with potato chips at any summer barbecue. It does not take long to make, and it tastes better after a rest in the fridge. Make it ahead.

The onion is what turns it from a plain sour dip into a rich one. Cook it slowly in butter over a low heat until it is soft, translucent and just beginning to colour, about ten minutes. **Cool the onion completely** before it goes into the cream. Hot onion thins the dip and can turn the soured cream grainy. Slow cooking is the key.

Beat the cream cheese until smooth, fold in the soured cream, the cooled onion, garlic powder, chives and a squeeze of lemon, and season. Chill for at least an hour so the onion flavour spreads through. Stir again before serving, and keep it in the fridge until the last moment. Potato chips are the classic partner.`,
    ing: [
      '1 large onion, finely chopped',
      '20 g butter',
      '200 g cream cheese, softened',
      '250 g soured cream',
      '1/2 tsp garlic powder',
      '2 tbsp chopped chives',
      '1 tsp lemon juice',
      '1/2 tsp salt',
      '200 g potato chips, to serve'
    ],
    st: [
      'Melt the butter in a pan and cook the onion over a low heat for 10 minutes until soft and just starting to colour. Cool completely.',
      'Beat the cream cheese until smooth, then fold in the soured cream.',
      'Stir in the cooled onion, garlic powder, chives, lemon juice and salt.',
      'Chill for 1 hour. Stir and serve with the potato chips.'
    ],
    tips: [
      'Cool the onion fully before mixing it in.',
      'Soften the cream cheese for a smooth base.',
      'Chill for the full hour so the flavours blend.'
    ],
    pair: ['Potato chips', 'Vegetable sticks', 'Crackers', 'Cold beer'],
    store: 'Keeps for 3 days in the fridge, covered. Do not freeze.',
    rest: [60, 'Chilling']
  },

  'kumara-chips': {
    d: 'Wedges of kumara (sweet potato) tossed in oil and paprika and roasted for 35 minutes until crisp at the edges and soft inside.',
    meta: 'Kumara chips: sweet potato wedges roasted in oil and paprika. Four servings, ready in 45 minutes.',
    kw: ['kumara chips', 'kumara chips recipe', 'roasted kumara wedges', 'sweet potato chips in the oven', 'new zealand kumara fries'],
    why: `Kumara, oil, salt: three things and a hot oven. Kumara is the New Zealand name for sweet potato, and a tray of wedges roasted until crisp at the edges and soft in the middle is among the best things to do with one. Heat does the work.

Sweet potato holds a lot of sugar and water, so it browns quickly and goes soft rather than crisp unless the tray is treated well. Cut the wedges to an even thickness, and spread them out with space between each, never touching. **Do not crowd the tray.** Crowded pieces steam each other and turn limp, and two trays will be better than one overloaded one.

Toss the wedges in oil, salt and paprika, and roast on a high shelf in a hot oven, turning once. A pinch of cornflour in the coating gives an extra-crisp shell. Serve straight away with a dipping sauce of soured cream, sweet chilli or aioli. The chips lose their crispness within a few minutes of leaving the oven. Dip them in anything.`,
    ing: [
      '800 g kumara (sweet potato), cut into wedges',
      '3 tbsp vegetable oil',
      '1 tbsp cornflour',
      '1 tsp smoked paprika',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 220C. Put 2 large trays in the oven to heat.',
      'Toss the kumara with the oil, cornflour, paprika and salt.',
      'Tip onto the hot trays in a single layer, not touching.',
      'Roast for 35 minutes, turning once, until crisp at the edges and tender inside. Serve at once.'
    ],
    tips: [
      'Cut the wedges the same size so they cook evenly.',
      'Use two trays rather than crowding one.',
      'Serve straight from the oven; they soften as they cool.'
    ],
    pair: ['Soured cream', 'Sweet chilli sauce', 'Aioli', 'Grilled fish'],
    store: 'Best eaten at once. Leftovers keep for 2 days in the fridge; reheat in a hot oven.'
  }
};
