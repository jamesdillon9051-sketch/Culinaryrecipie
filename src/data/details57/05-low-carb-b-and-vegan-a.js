'use strict';

/**
 * Volume fifty-seven, fifth part: seven more low-carb dishes (muffins,
 * pancakes, pizza, stir fry, taco casserole, tortillas, zucchini lasagna) and
 * the first six vegan dishes (alfredo, butter chicken, carbonara, cinnamon
 * rolls, cornbread, French toast). Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'low-carb-muffins': {
    d: 'Almond flour muffins with blueberries and cinnamon, lightly sweetened with a mashed banana and baked for 22 minutes.',
    meta: 'Low-carb muffins of almond flour, eggs and blueberries, baked for 22 minutes at 180C. Twelve muffins, ready in 32 minutes.',
    kw: ['low carb muffins', 'almond flour blueberry muffins', 'muffins without wheat flour', 'baked low carb breakfast muffins', 'almond flour muffins with banana'],
    why: 'A batch for the week, made on a Sunday and gone by Wednesday. These muffins swap wheat flour for ground almonds, which are mostly fat and protein, so each muffin holds only a few grams of carbohydrate.\n\nAlmond flour batters behave differently from wheat batters. They do not need gentle handling, because there is no gluten to toughen, but they do need eggs to set the structure and baking powder to lift it. A single mashed banana adds sweetness and moisture across twelve muffins without pushing the carbohydrate up. **Fill the cases right to the top**, since almond muffins rise less than wheat ones.\n\nThey are done when the tops are golden and a skewer comes out clean, at about 22 minutes. They will feel soft at first and firm as they cool, so let them rest in the tin for 10 minutes before moving them. Keep them in a covered tin; the moist crumb turns damp if left open.',
    ing: [
      '200 g ground almonds',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/4 tsp salt',
      '4 eggs',
      '60 g butter, melted',
      '1 ripe banana, mashed',
      '60 ml whole milk',
      '1 tsp vanilla extract',
      '100 g blueberries'
    ],
    st: [
      'Heat the oven to 180C and line a 12-hole muffin tin with paper cases.',
      'Mix the ground almonds, baking powder, cinnamon and salt in a bowl.',
      'Whisk the eggs, melted butter, banana, milk and vanilla and stir into the dry mix. Fold in the blueberries.',
      'Fill the cases right to the top.',
      'Bake for 22 minutes until golden and a skewer comes out clean.',
      'Rest in the tin for 10 minutes, then move to a rack.'
    ],
    tips: [
      'Fill the cases to the top.',
      'Use a ripe banana for sweetness.',
      'Rest the muffins before moving them.'
    ],
    pair: ['Butter', 'Cream cheese', 'Hot coffee'],
    store: 'Keeps for 3 days in a covered tin. Freeze for 2 months.',
    nut: [191, 6, 8, 15, 3, 3, 150]
  },

  'low-carb-pancakes': {
    d: 'Soft pancakes made from almond flour, cream cheese and eggs, cooked in butter for 10 minutes.',
    meta: 'Low-carb pancakes of almond flour, cream cheese and eggs, cooked for 10 minutes in a pan. Four servings, ready in 20 minutes.',
    kw: ['low carb pancakes', 'almond flour pancakes', 'cream cheese pancakes', 'pancakes without wheat flour', 'low carb breakfast pancakes'],
    why: 'It looks like a pancake and cooks like an omelette, which is why the pan has to be gentler than you would expect. The batter is mostly egg and cream cheese, so it sets quickly and burns if the heat is too high.\n\nThe cream cheese keeps the pancakes tender and gives them a faint tang, and the almond flour supplies body. Blend or whisk the batter until no lumps of cheese remain, since lumps leave pale, uneven patches. Rest it for 3 minutes so the almond flour swells and the batter thickens a little. **Cook over medium-low heat and keep the pancakes small.** A pancake 8 cm across is easy to flip. A large one tears.\n\nWait for bubbles on the surface and set edges before turning, which takes about 2 minutes, then give the second side just a minute. Serve them warm with butter and berries. Maple syrup works but adds carbohydrate, so use it sparingly.',
    ing: [
      '100 g ground almonds',
      '100 g cream cheese, softened',
      '4 eggs',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '20 g butter, for the pan',
      '100 g raspberries, to serve'
    ],
    st: [
      'Blend or whisk the ground almonds, cream cheese, eggs, baking powder, vanilla and salt until completely smooth. Rest for 3 minutes.',
      'Melt a little butter in a non-stick pan over medium-low heat.',
      'Pour in 3 tablespoons of batter for each pancake and cook for 2 minutes until bubbles form and the edges set.',
      'Flip and cook for 1 minute more. Repeat, buttering the pan between batches.',
      'Serve warm with the raspberries.'
    ],
    tips: [
      'Cook over medium-low heat.',
      'Keep the pancakes small.',
      'Whisk until no cream cheese lumps remain.'
    ],
    pair: ['Raspberries', 'Butter', 'Crispy bacon', 'Greek yoghurt'],
    store: 'Keeps for 2 days in the fridge. Reheat in a toaster.',
    nut: [362, 13, 10, 30, 5, 3, 300]
  },

  'low-carb-pizza': {
    d: 'A pizza with a base of melted mozzarella, almond flour and cream cheese, topped with passata, mozzarella and pepperoni.',
    meta: 'Low-carb pizza on a mozzarella and almond flour base, cooked for 20 minutes at 220C. Three servings, ready in 40 minutes.',
    kw: ['low carb pizza', 'mozzarella and almond flour pizza base', 'pizza without wheat flour', 'low carb pepperoni pizza', 'cheese crust pizza'],
    why: 'Most home versions come out soft in the middle, and the fix is to bake the base on its own first. A mozzarella dough is wetter than wheat dough, so it needs time to dry out and firm before the sauce goes on, or the toppings turn it soggy.\n\nThe base is melted mozzarella and cream cheese worked together with almond flour and an egg. Heat the cheeses until they melt into a smooth, stretchy mass, then stir in the flour and egg. The dough is sticky, so press it out between two sheets of baking paper rather than rolling it in flour. **Part-bake the base for 10 minutes** until golden and firm, then top and return to the oven.\n\nKeep the toppings light. A thin spoonful of passata, a little mozzarella and some pepperoni is enough, and too much sauce makes the crust limp. It is done when the cheese bubbles and the edge is deep golden. Let it stand for 2 minutes before slicing.',
    ing: [
      '200 g mozzarella, grated',
      '40 g cream cheese',
      '100 g ground almonds',
      '1 egg',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '4 tbsp passata',
      '80 g mozzarella, sliced, for the top',
      '40 g pepperoni slices',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 220C. Melt the grated mozzarella and cream cheese in a bowl in the microwave for 1 minute, stir, and heat for 30 seconds more until smooth.',
      'Stir in the ground almonds, egg, baking powder and salt to make a sticky dough.',
      'Press the dough between two sheets of baking paper into a 28 cm round. Remove the top sheet and slide onto a tray.',
      'Bake the base for 10 minutes until golden and firm.',
      'Spread with the passata, add the sliced mozzarella, pepperoni and oregano and bake for 10 minutes until bubbling.',
      'Stand for 2 minutes before slicing.'
    ],
    tips: [
      'Part-bake the base before topping.',
      'Press the dough between baking paper.',
      'Keep the sauce and toppings light.'
    ],
    pair: ['Rocket salad', 'Olives', 'Cherry tomatoes'],
    store: 'Best eaten fresh. Keeps for 2 days in the fridge; reheat in a hot pan.',
    nut: [634, 34, 12, 50, 4, 4, 1440]
  },

  'low-carb-stir-fry': {
    d: 'Chicken thigh strips stir-fried with broccoli, red pepper and mushrooms in a garlic, ginger and tamari sauce, ready in 25 minutes.',
    meta: 'Low-carb stir fry with chicken, broccoli and mushrooms in a ginger tamari sauce, cooked for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['low carb stir fry', 'chicken and broccoli stir fry', 'stir fry without rice', 'ginger and garlic chicken stir fry', 'low carb chinese dinner'],
    why: 'The first sound you want is a hard sizzle when the chicken hits the pan. A stir fry is a hot-pan dish, and it only works if the pan is hot enough to brown the meat and leave the vegetables crisp instead of steaming them.\n\nCut everything before you start. The cooking takes only 10 minutes, and there is no time to chop in the middle. Slice the chicken thin so it cooks in 4 or 5 minutes, and cut the broccoli into small florets. **Cook in two batches** if your pan is small: crowding the pan drops the heat and releases water, so the food stews. Keep the vegetables moving and remove them while they still have bite.\n\nThe sauce is garlic, ginger, tamari and sesame oil, with no sugar or cornflour. It coats the pieces in a thin glaze instead of a thick gloop. Serve it by itself or over cauliflower rice, which absorbs the sauce and adds almost no carbohydrate.',
    ing: [
      '1 tbsp rapeseed oil',
      '500 g boneless chicken thighs, sliced',
      '200 g broccoli florets',
      '1 red pepper, sliced',
      '150 g mushrooms, sliced',
      '3 spring onions, sliced',
      '3 garlic cloves, crushed',
      '2 tsp fresh ginger, grated',
      '2 tbsp tamari',
      '1 tbsp sesame oil'
    ],
    st: [
      'Heat the oil in a wok or large pan over high heat until smoking. Add the chicken and cook for 4 minutes until browned. Lift out.',
      'Add the broccoli and pepper and stir-fry for 3 minutes.',
      'Add the mushrooms, garlic and ginger and stir-fry for 2 minutes.',
      'Return the chicken, add the tamari and sesame oil and toss for 1 minute.',
      'Scatter with the spring onions and serve at once.'
    ],
    tips: [
      'Prepare everything before the pan heats.',
      'Cook in batches so the pan stays hot.',
      'Take the vegetables off while they still have bite.'
    ],
    pair: ['Cauliflower rice', 'Sesame seeds', 'Chilli flakes'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot pan.',
    nut: [269, 29, 9, 13, 3, 4, 580]
  },

  'low-carb-taco-casserole': {
    d: 'Spiced beef mince, salsa and cream cheese baked under cheddar for 20 minutes, with no tortillas or rice.',
    meta: 'Low-carb taco casserole of spiced beef, salsa and cheddar, cooked for 30 minutes at 190C. Six servings, ready in 45 minutes.',
    kw: ['low carb taco casserole', 'taco beef bake', 'taco casserole without tortillas', 'beef and cheese casserole', 'mexican style beef bake'],
    why: 'Salsa and cheese bubbling at the edges of the dish is the smell of a good taco night, without a tortilla in sight. Everything that makes a taco satisfying, the spiced beef, the tang of salsa and the melted cheese, goes into one dish.\n\nThe seasoning is a mix of chilli powder, cumin and smoked paprika, made from the cupboard, so you can control the salt. Brown the mince well and drain off excess fat, which would otherwise pool around the edges. **Simmer the beef with the salsa for 5 minutes** to reduce the liquid, so the casserole is moist but not wet.\n\nThe cream cheese is dotted over the meat and melts into it, giving a creamy layer without a sauce to make. The cheddar goes on top and browns. Serve it with sliced avocado, soured cream, lettuce and jalapeños. The leftovers make a good filling for lettuce cups the next day.',
    ing: [
      '1 tbsp rapeseed oil',
      '1 onion, diced',
      '600 g beef mince',
      '2 tbsp chilli powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '200 g salsa',
      '100 g cream cheese',
      '150 g mature cheddar, grated',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 190C. Heat the oil in a large pan and cook the onion for 5 minutes.',
      'Add the mince and brown for 6 minutes, breaking it up. Pour off excess fat.',
      'Stir in the chilli powder, cumin, paprika and salt, then the salsa. Simmer for 5 minutes.',
      'Spread the beef in a baking dish, dot with the cream cheese and scatter with the cheddar.',
      'Bake for 20 minutes until bubbling and golden.'
    ],
    tips: [
      'Drain excess fat from the beef.',
      'Simmer the salsa down so the bake is not wet.',
      'Serve with fresh toppings.'
    ],
    pair: ['Sliced avocado', 'Soured cream', 'Shredded lettuce', 'Jalapeños'],
    store: 'Keeps for 4 days in the fridge. Freezes for 2 months.',
    nut: [424, 27, 7, 32, 2, 3, 950]
  },

  'low-carb-tortillas': {
    d: 'Pliable tortillas made from almond flour and psyllium husk, rolled thin and cooked in a dry pan for about 10 minutes.',
    meta: 'Low-carb tortillas from almond flour and psyllium husk, cooked for 10 minutes in a dry pan. Eight tortillas, ready in 25 minutes.',
    kw: ['low carb tortillas', 'almond flour tortillas', 'psyllium husk wraps', 'tortillas without wheat flour', 'low carb wraps for tacos'],
    why: 'Rest the dough. That is the step that turns a crumbly mix into something you can roll. Almond flour has no gluten, so psyllium husk does the binding, and it needs a few minutes in the water before it forms its gel.\n\nMix the dry ingredients, add warm water and oil, and knead for a minute. The dough should feel like soft clay, a little sticky. Cover it and leave it for 10 minutes. If it cracks when you press a ball flat, add water a teaspoon at a time; if it sticks, add a pinch of almond flour. **Roll each ball between two sheets of baking paper**, as these tortillas are fragile and tear if lifted from a floured board.\n\nCook in a dry non-stick pan over medium heat for about a minute a side, until it has pale brown spots and bends without cracking. Keep them wrapped in a clean cloth while you cook the rest. They will crisp if left in the pan too long.',
    ing: [
      '150 g ground almonds',
      '15 g psyllium husk powder',
      '1/2 tsp baking powder',
      '1/2 tsp salt',
      '100 ml warm water',
      '1 tbsp olive oil'
    ],
    st: [
      'Mix the ground almonds, psyllium husk, baking powder and salt in a bowl.',
      'Add the warm water and oil and knead for 1 minute to a soft dough. Cover and rest for 10 minutes.',
      'Divide into 8 balls. Roll each between two sheets of baking paper to a thin round about 15 cm across.',
      'Cook in a dry non-stick pan over medium heat for 1 minute a side, until pale brown spots appear.',
      'Wrap in a clean cloth to keep soft.'
    ],
    tips: [
      'Rest the dough before rolling.',
      'Roll between baking paper.',
      'Do not overcook; they stiffen if left in the pan.'
    ],
    pair: ['Seasoned beef', 'Grilled chicken', 'Guacamole', 'Salsa'],
    store: 'Keeps for 3 days in the fridge. Reheat in a dry pan.',
    nut: [139, 4, 6, 11, 4, 1, 180]
  },

  'low-carb-zucchini-lasagna': {
    d: 'Layers of salted courgette slices, beef ragu and ricotta baked under mozzarella for 35 minutes, in place of pasta sheets.',
    meta: 'Low-carb zucchini lasagna with beef ragu and ricotta, cooked for 45 minutes. Six servings, ready in 2 hours.',
    kw: ['low carb zucchini lasagna', 'courgette lasagne without pasta', 'beef and ricotta lasagna', 'low carb italian bake', 'lasagna with zucchini slices'],
    why: 'A Sunday dish for a table of six, and better on Monday. Courgette slices stand in for the pasta sheets here, which cuts the carbohydrate sharply and adds vegetables to a dish that is usually a plate of starch.\n\nThe problem with courgette is water. Slice it lengthwise into 5 mm strips, lay it on paper towels and salt it lightly, then leave it for 30 minutes. The salt draws out moisture, which you press away with more paper towels. **Do not skip this**, or the lasagna weeps into the dish and the layers slide apart. Some cooks also dry-roast the slices for 10 minutes, which gives a firmer layer.\n\nThe ragu is beef mince cooked down with onion, garlic and passata until thick. Ricotta mixed with an egg and a little parmesan forms the cheesy layer, in place of a white sauce. Rest the lasagna for 15 minutes before cutting; it will still be softer than the pasta version, so cut square portions and lift them with a wide spatula.',
    ing: [
      '1 kg courgettes, sliced lengthwise',
      '1 tsp salt, for the courgettes',
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 garlic cloves, crushed',
      '500 g beef mince',
      '400 g passata',
      '1 tsp dried oregano',
      '250 g ricotta',
      '1 egg',
      '30 g parmesan, grated',
      '150 g mozzarella, grated'
    ],
    st: [
      'Lay the courgette slices on paper towels, sprinkle with the salt and leave for 30 minutes. Press dry with fresh towels.',
      'Heat the oven to 190C. Heat the oil in a pan and cook the onion for 5 minutes. Add the garlic and mince and brown for 6 minutes.',
      'Add the passata and oregano and simmer for 10 minutes until thick.',
      'Mix the ricotta, egg and parmesan.',
      'Layer the courgette, ragu and ricotta mix in a 23 x 33 cm dish, ending with ragu. Scatter with the mozzarella.',
      'Bake for 35 minutes until bubbling and golden. Rest for 15 minutes before cutting.'
    ],
    tips: [
      'Salt the courgette and press it dry.',
      'Make the ragu thick; the courgette adds moisture.',
      'Rest the lasagna before cutting.'
    ],
    pair: ['Green salad', 'Garlic mushrooms', 'Steamed green beans'],
    store: 'Keeps for 3 days in the fridge. Reheat covered at 180C.',
    nut: [441, 32, 13, 29, 3, 8, 800]
  },

  'vegan-alfredo': {
    d: 'Fettuccine in a creamy sauce of blended cashews, soy milk, garlic and nutritional yeast, with no dairy.',
    meta: 'Vegan alfredo with a cashew and soy milk sauce, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['vegan alfredo', 'cashew alfredo sauce', 'dairy free fettuccine alfredo', 'creamy vegan pasta', 'plant based alfredo'],
    why: 'A weeknight pasta for four, and the sauce is blended, not cooked. Alfredo is normally butter, cream and parmesan, and this version builds the same richness from cashews, which blend into a smooth cream when soaked and puréed.\n\nSoak the cashews in boiling water for 10 minutes to soften them, then blend with soy milk, garlic, lemon juice and nutritional yeast until completely smooth. A high-speed blender gives the silkiest sauce; with a weaker one, blend for longer and add a splash more milk. **Taste for salt and lemon at the end**, because a creamy sauce with no cheese depends on those two for its flavour.\n\nWarm the sauce gently in the pan with the drained pasta and a splash of the cooking water, which helps it cling. Do not boil it hard, as it can thicken and turn pasty. A grind of black pepper and a pinch of nutmeg finish it.',
    ing: [
      '100 g raw cashews',
      '300 g fettuccine',
      '300 ml unsweetened soy milk',
      '3 garlic cloves',
      '3 tbsp nutritional yeast',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '1 pinch nutmeg'
    ],
    st: [
      'Cover the cashews with boiling water and soak for 10 minutes. Drain.',
      'Boil the fettuccine in salted water for 10 minutes until al dente. Keep a mugful of the water, then drain.',
      'Blend the cashews, soy milk, garlic, nutritional yeast, lemon juice, oil, salt, pepper and nutmeg until completely smooth.',
      'Pour into the pasta pan over low heat, add the pasta and toss for 2 minutes, loosening with the pasta water.',
      'Serve at once with black pepper.'
    ],
    tips: [
      'Blend the sauce for longer than you think.',
      'Taste for salt and lemon at the end.',
      'Loosen with the pasta water, not more milk.'
    ],
    pair: ['Steamed broccoli', 'Garlic mushrooms', 'Green salad'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge; reheat with a splash of water.',
    nut: [545, 19, 70, 21, 6, 4, 660]
  },

  'vegan-butter-chicken': {
    d: 'Tofu and chickpeas in a spiced tomato and coconut sauce, a plant-based take on butter chicken, simmered for 30 minutes.',
    meta: 'Vegan butter chicken of tofu and chickpeas in a tomato and coconut sauce, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['vegan butter chicken', 'tofu and chickpea curry', 'plant based butter chicken', 'coconut tomato curry', 'dairy free butter chicken'],
    why: 'This is what to make in the first cold week, when a bowl of curry and rice feels like the right answer. The sauce follows the familiar butter chicken pattern, a smooth, mild tomato sauce enriched with cream, and here the cream is coconut.\n\nThe tofu replaces the chicken. Press it for 10 minutes, cut it into 2 cm cubes and fry until golden on all sides, which gives it a firm outside that holds up in the sauce. **Do not skip the browning**, as unbrowned tofu stays soft and tastes of very little. Chickpeas add bulk and absorb the sauce.\n\nThe sauce is built on onion, garlic and ginger, with garam masala, tomato purée and tinned tomatoes. Simmer for 20 minutes, until it darkens and loses its raw edge, then stir in the coconut cream. A spoonful of sugar can balance the acidity of the tomatoes, but taste first. Finish with fresh coriander and serve over rice or with naan.',
    ing: [
      '2 tbsp rapeseed oil',
      '400 g firm tofu, pressed and cubed',
      '1 onion, finely diced',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tsp garam masala',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '240 g tinned chickpeas, drained and rinsed',
      '200 ml coconut cream',
      '1 tsp salt',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Heat half the oil in a pan and fry the tofu for 8 minutes until golden. Lift out.',
      'Heat the remaining oil and cook the onion for 8 minutes. Add the garlic and ginger and cook for 1 minute.',
      'Stir in the garam masala, cumin, paprika and tomato purée and cook for 1 minute.',
      'Add the tomatoes and salt, bring to a simmer and cook for 20 minutes until thick.',
      'Stir in the coconut cream, chickpeas and tofu and heat through for 3 minutes.',
      'Scatter with the coriander and serve.'
    ],
    tips: [
      'Press and brown the tofu well.',
      'Simmer the sauce until it darkens.',
      'Taste before adding any sugar.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber salad', 'Mango chutney'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [394, 16, 24, 26, 6, 9, 800]
  },

  'vegan-carbonara': {
    d: 'Spaghetti in a silky sauce of blended silken tofu, nutritional yeast and garlic, topped with crisp smoked mushrooms.',
    meta: 'Vegan carbonara with a silken tofu sauce and crisp smoked mushrooms, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['vegan carbonara', 'silken tofu carbonara sauce', 'plant based spaghetti carbonara', 'dairy free carbonara', 'mushroom carbonara'],
    why: 'Salt the pasta water well and keep a mug of it back. That water, with its starch, is what turns a thin blended sauce into one that clings to every strand of spaghetti.\n\nCarbonara is traditionally eggs, cheese and cured pork. The plant-based version makes the silky sauce from silken tofu blended with nutritional yeast, garlic, mustard and a splash of soy milk, which gives a creamy, savoury result with a gentle cheesy depth. Season it with plenty of black pepper, since pepper is the point of the dish. **Crisp the mushrooms properly**: slice them thin, give them space in the pan and leave them undisturbed for 4 minutes before stirring.\n\nAdd smoked paprika and a splash of tamari near the end for a smoky, bacon-like flavour. Toss the pasta with the sauce over low heat, off the boil, to warm it through. Pile the mushrooms on top so they stay crisp.',
    ing: [
      '320 g spaghetti',
      '300 g silken tofu',
      '3 tbsp nutritional yeast',
      '3 garlic cloves',
      '1 tsp Dijon mustard',
      '100 ml unsweetened soy milk',
      '250 g chestnut mushrooms, thinly sliced',
      '2 tbsp rapeseed oil',
      '1 tsp smoked paprika',
      '1 tbsp tamari',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the spaghetti in well-salted water for 10 minutes until al dente. Keep a mugful of the water, then drain.',
      'Heat the oil in a wide pan over high heat and fry the mushrooms for 6 minutes without stirring too often until crisp. Add the paprika and tamari and cook for 1 minute. Lift out.',
      'Blend the tofu, nutritional yeast, garlic, mustard, soy milk, salt and pepper until completely smooth.',
      'Return the spaghetti to its pot over low heat, pour in the sauce and toss for 2 minutes, loosening with the pasta water.',
      'Serve topped with the mushrooms and plenty of black pepper.'
    ],
    tips: [
      'Keep some pasta water to loosen the sauce.',
      'Give the mushrooms room so they crisp.',
      'Heat the sauce gently; do not boil it.'
    ],
    pair: ['Green salad', 'Roasted tomatoes', 'Garlic bread'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge.',
    nut: [493, 24, 70, 13, 7, 4, 880]
  },

  'vegan-cinnamon-rolls': {
    d: 'Soft yeasted rolls spiralled with coconut oil, brown sugar and cinnamon and finished with a soy milk glaze.',
    meta: 'Vegan cinnamon rolls with a coconut oil and cinnamon filling, cooked for 25 minutes. Nine rolls, ready in 55 minutes plus 1 hour 30 minutes of rising.',
    kw: ['vegan cinnamon rolls', 'dairy free cinnamon buns', 'plant based cinnamon rolls', 'yeast rolls without eggs or butter', 'egg free cinnamon rolls'],
    why: 'Quick tip: warm the milk to the temperature of a bath, no hotter. Milk that is too hot kills the yeast, and the rolls do not rise. That is the most common reason a batch of cinnamon rolls turns out dense.\n\nThe dough here uses soy milk and rapeseed oil in place of dairy milk, eggs and butter. Yeast does the lifting, with a little sugar to feed it, and the kneading builds the structure that traps the gas. Knead for 8 minutes by hand until the dough is smooth and springs back when poked. **Let it rise until doubled**, which takes about an hour in a warm room.\n\nSpread the filling of softened coconut oil, brown sugar and cinnamon right to the edges, roll up tightly and cut into nine with thread or a sharp knife. Rest the cut rolls for 30 minutes so they puff against each other in the tin, then bake until golden. Spoon the glaze over while they are warm so it soaks into the folds.',
    ing: [
      '450 g plain flour',
      '7 g fast action yeast',
      '60 g caster sugar',
      '1/2 tsp salt',
      '250 ml unsweetened soy milk, warm',
      '60 ml rapeseed oil',
      '50 g coconut oil, softened',
      '80 g light brown sugar',
      '2 tbsp ground cinnamon',
      '120 g icing sugar',
      '2 tbsp unsweetened soy milk, for the glaze',
      '1 tsp vanilla extract'
    ],
    st: [
      'Mix the flour, yeast, caster sugar and salt in a large bowl. Add the warm soy milk and rapeseed oil and mix to a dough.',
      'Knead on a floured surface for 8 minutes until smooth and elastic. Put in an oiled bowl, cover and leave to rise for 1 hour until doubled.',
      'Roll the dough out to a rectangle about 30 x 40 cm. Spread with the coconut oil and scatter with the brown sugar and cinnamon.',
      'Roll up from the long edge, cut into 9 slices and place cut side up in a lined 23 cm tin. Leave for 30 minutes.',
      'Heat the oven to 180C. Bake for 25 minutes until golden.',
      'Stir the icing sugar, soy milk and vanilla into a glaze and spoon over the warm rolls.'
    ],
    tips: [
      'Use warm, not hot, milk.',
      'Knead until the dough springs back.',
      'Glaze the rolls while they are warm.'
    ],
    pair: ['Hot coffee', 'Fresh fruit', 'Plant milk'],
    store: 'Best the day they are made. Keeps for 2 days covered; warm for 15 seconds in the microwave.',
    rest: [90, 'Rising'],
    nut: [413, 6, 68, 13, 2, 29, 160]
  },

  'vegan-cornbread': {
    d: 'A golden skillet-style cornbread made with cornmeal, soy milk and oil, with no eggs or dairy, baked for 25 minutes.',
    meta: 'Vegan cornbread with cornmeal and soy milk, baked for 25 minutes at 200C. Nine pieces, ready in 35 minutes.',
    kw: ['vegan cornbread', 'dairy free cornbread', 'egg free cornbread', 'cornmeal bread without eggs', 'baked vegan cornbread'],
    why: 'A table of six for chili night, and a pan of cornbread to scrape the bowl with. The recipe is built from a few pantry items: cornmeal, flour, baking powder, sugar, soy milk and oil. There is no egg or butter, and the crumb still holds together.\n\nSoy milk mixed with cider vinegar curdles slightly to make a stand-in for buttermilk, and that acidity reacts with the baking powder to lift the batter. A ground flaxseed mixed with water stands in for the egg and binds the crumb. Stir the batter just until it comes together; **overmixing makes the cornbread tough and dry.**\n\nHeat the oiled pan or tin in the oven first. When the batter hits it, it sizzles, and the base forms a golden, crisp crust. The cornbread is done when the top is deep gold and a skewer comes out clean. Cool for 10 minutes before cutting, since the crumb is fragile when hot.',
    ing: [
      '150 g cornmeal',
      '150 g plain flour',
      '1 tbsp baking powder',
      '50 g caster sugar',
      '1 tsp salt',
      '300 ml unsweetened soy milk',
      '1 tbsp cider vinegar',
      '1 tbsp ground flaxseed',
      '3 tbsp water',
      '80 ml rapeseed oil'
    ],
    st: [
      'Heat the oven to 200C and put a 23 cm square tin with 1 tablespoon of the oil inside to heat.',
      'Stir the flaxseed into the water and leave for 5 minutes. Mix the soy milk with the vinegar.',
      'Mix the cornmeal, flour, baking powder, sugar and salt in a bowl.',
      'Add the flax mix, soy milk mix and remaining oil and stir until just combined.',
      'Pour into the hot tin and bake for 25 minutes until golden and a skewer comes out clean.',
      'Cool for 10 minutes before cutting.'
    ],
    tips: [
      'Heat the tin before adding the batter.',
      'Do not overmix.',
      'Cool before cutting.'
    ],
    pair: ['Chili', 'Vegan stew', 'Baked beans', 'Maple syrup'],
    store: 'Keeps for 2 days in a covered tin. Freeze for 1 month.',
    nut: [230, 3, 32, 10, 2, 6, 460]
  },

  'vegan-french-toast': {
    d: 'Thick bread slices soaked in a cinnamon and vanilla batter of soy milk and cornflour and fried until golden.',
    meta: 'Vegan French toast with a soy milk and cinnamon batter, cooked for 10 minutes in a pan. Four servings, ready in 20 minutes.',
    kw: ['vegan french toast', 'egg free french toast', 'dairy free french toast', 'plant based breakfast toast', 'cinnamon french toast with soy milk'],
    why: 'Use bread that is a day or two old. Stale bread soaks up the batter without falling apart, while fresh bread turns soft and tears when you lift it. That is the one choice that decides how the French toast turns out.\n\nWithout eggs, cornflour thickens the batter and helps it stick to the bread and crisp in the pan. Soy milk supplies the liquid, and cinnamon, vanilla and a little sugar give the classic flavour. Whisk the cornflour into a spoonful of cold milk first, then add the rest, so it does not lump. **Soak each slice for about 15 seconds a side**, not longer, or the middle turns to mush.\n\nCook in a non-stick pan over medium heat with a little oil until the underside is deep golden, about 3 minutes, then turn. High heat browns the outside before the batter has cooked through. Serve at once with fruit and maple syrup.',
    ing: [
      '8 slices day-old bread (about 320 g)',
      '250 ml unsweetened soy milk',
      '2 tbsp cornflour',
      '1 tbsp caster sugar',
      '1 tsp ground cinnamon',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '2 tbsp rapeseed oil',
      '4 tbsp maple syrup, to serve',
      '150 g strawberries, sliced, to serve'
    ],
    st: [
      'Whisk the cornflour with 2 tablespoons of the soy milk until smooth, then whisk in the remaining milk, sugar, cinnamon, vanilla and salt. Pour into a shallow dish.',
      'Heat 1 tablespoon of oil in a non-stick pan over medium heat.',
      'Dip each bread slice in the batter for 15 seconds a side.',
      'Fry in batches for 3 minutes a side until deep golden, adding the remaining oil as needed.',
      'Serve with the maple syrup and strawberries.'
    ],
    tips: [
      'Use day-old bread.',
      'Soak the slices briefly.',
      'Cook over medium heat so the middle sets.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Sliced banana', 'Plant yoghurt'],
    store: 'Best fresh. Keeps for 1 day in the fridge; reheat in a toaster.',
    nut: [374, 8, 63, 10, 3, 21, 480]
  }
};
