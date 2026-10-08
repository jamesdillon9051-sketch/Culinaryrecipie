'use strict';

/**
 * Volume thirty-six — breakfast.
 *
 * Eggs, oats, bread and potatoes are what a breakfast is made from when it
 * has to be cheap, and none of these takes more than a few minutes of
 * attention. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'egg-butty': {
    d: 'A fried egg with a runny yolk, tucked into buttered white bread with a squeeze of brown sauce. One serving in 13 minutes.',
    meta: 'Egg butty: a fried egg with a runny yolk in buttered white bread with brown sauce. A very cheap breakfast for one in 13 minutes.',
    kw: ['egg butty', 'fried egg sandwich with brown sauce', 'budget breakfast sandwich', 'easy egg butty', 'cheap breakfast for one'],
    why: 'A butty is a sandwich, and this one is not much more than bread, butter and an egg. The result depends on the egg.\n\nFry it in a small pan over medium heat, with a spoon of oil that is hot but not smoking. The edges of the white should turn crisp and lacy within a minute. Spoon some hot oil over the yolk, or cover the pan for 30 seconds, until the white on top is set.\n\n**Keep the yolk runny.** It is the sauce. When you bite into the sandwich it runs into the bread, so butter on the slices matters more than you would think: it stops the yolk from soaking through.\n\nUse soft white sliced bread, or a floury bap if you have one. Brown sauce or ketchup goes on last. The bread matters more than it seems, and a soft white roll or sliced loaf is traditional. Brown sauce is a matter of taste, so keep the bottle on the table, and make a second butty with the oil left in the pan, since a pan this hot is rarely used for only one egg.',
    ing: [
      '1 tbsp vegetable oil',
      '1 egg',
      '2 slices soft white bread',
      '10 g butter',
      '1 tsp brown sauce',
      '1 pinch salt'
    ],
    st: [
      'Butter both slices of bread.',
      'Heat the oil in a small frying pan over medium heat for 1 minute. Crack in the egg and fry for 3 minutes, spooning a little hot oil over the white, until the white is set and the yolk still soft.',
      'Season with the salt. Lift the egg onto one slice, spoon over the brown sauce, close with the second slice and press lightly.',
      'Cut in half and eat while hot.'
    ],
    tips: [
      'Butter the bread to the edges so the yolk does not soak through.',
      'For a firmer yolk, flip the egg for 20 seconds before it goes in the bread.',
      'Toast the bread first if you like a firmer sandwich.'
    ],
    pair: ['Mug of tea', 'Grilled tomato', 'Bacon', 'Orange juice'],
    store: 'Best eaten straight away. A fried egg does not keep.',
    nut: [424, 12, 31, 28, 2, 4, 580]
  },

  'eggy-bread': {
    d: 'Slices of white bread dipped in beaten egg and milk and fried in butter until golden. Two servings in 15 minutes.',
    meta: 'Eggy bread: slices of white bread dipped in egg and milk and fried in butter until golden. A very cheap breakfast for two in 15 minutes.',
    kw: ['eggy bread', 'french toast with eggs', 'budget egg bread breakfast', 'easy savoury eggy bread', 'cheap breakfast for two'],
    why: 'Stale bread is the right bread. Fresh slices go soggy and fall apart in the egg; bread that has dried out for a day soaks it up and holds its shape in the pan.\n\nThe egg mix is eggs, a splash of milk and a pinch of salt, whisked until no streaks of white remain. Pour it into a shallow dish wide enough to take a slice flat.\n\nSoak each slice for about 15 seconds per side. **Do not leave it longer**, as the slice sags and tears when you lift it.\n\nFry in butter over medium heat for 2 to 3 minutes a side, until golden and puffed. High heat browns the outside before the middle sets. This version is savoury, served with ketchup or brown sauce. Sugar and cinnamon turn it sweet. Eggy bread can go either way, savoury or sweet, and the same egg mixture serves both. For a sweet version, stir a spoon of sugar and a pinch of cinnamon into the egg, and serve with jam, syrup or sliced fruit instead of ketchup.',
    ing: [
      '2 eggs',
      '60 ml milk',
      '1/4 tsp salt',
      '4 slices day-old white bread',
      '30 g butter',
      '2 tbsp tomato ketchup'
    ],
    st: [
      'Whisk the eggs, milk and salt in a shallow dish until smooth.',
      'Melt half the butter in a large frying pan over medium heat.',
      'Soak two slices of bread for 15 seconds per side, let the excess drip off, and fry for 2 to 3 minutes per side until golden and puffed. Keep warm.',
      'Repeat with the remaining butter and bread. Serve with the ketchup.'
    ],
    tips: [
      'Use day-old bread so the slices hold together.',
      'Keep the heat medium so the egg sets before the outside burns.',
      'Add black pepper to the egg for a savoury kick.'
    ],
    pair: ['Bacon', 'Grilled tomato', 'Baked beans', 'Mug of tea'],
    store: 'Best eaten straight away. Leftover slices keep in the fridge for 1 day; reheat in a toaster.',
    nut: [372, 13, 35, 20, 2, 8, 800]
  },

  'snag-in-bread': {
    d: 'A grilled sausage wrapped in a slice of buttered white bread with tomato sauce and fried onions. Four servings in 17 minutes.',
    meta: 'Snag in bread: a grilled sausage wrapped in white bread with tomato sauce and fried onions. A very cheap Australian-style lunch for four, 17 minutes.',
    kw: ['snag in bread', 'sausage in bread', 'budget sausage sandwich', 'easy barbecue sausage in bread', 'cheap sausage lunch'],
    why: 'Short, sharp: a sausage, a slice and some sauce. A snag in bread needs no plate and no cutlery, only a napkin.\n\nCook the sausages well. Thin ones take about 10 minutes in a pan over medium heat, turned every few minutes, until evenly browned and firm. If they split, the heat is too high.\n\nFried onions are the classic topping and need patience. Slice them thin and cook them in the sausage fat over medium heat for 8 minutes, until soft and gold.\n\n**Put the onions under the sausage**, not on top. They sit in the bread and stay put, instead of sliding off the first time you bite. Fold the bread over the sausage and squeeze on the sauce. It is easy outdoor food for barbecues and picnics, and the same method works on a grill or in a pan. Cook the sausages slowly, because they should be cooked through and not just browned on the outside.',
    ing: [
      '8 thin pork sausages, about 450 g',
      '1 tbsp vegetable oil',
      '2 onions, thinly sliced',
      '4 slices white bread',
      '4 tbsp tomato sauce'
    ],
    st: [
      'Heat the oil in a large frying pan over medium heat. Cook the sausages for 10 minutes, turning, until browned and cooked through. Lift out.',
      'Add the onions to the pan and cook for 8 minutes in the fat, stirring, until soft and golden.',
      'Lay each slice of bread flat. Spoon a quarter of the onions along one edge and add two sausages.',
      'Squeeze over the sauce and fold the bread around the sausages.'
    ],
    tips: [
      'Cook the sausages over medium heat so they do not split.',
      'Use soft bread that folds without cracking.',
      'Add mustard if you like a bite.'
    ],
    pair: ['Coleslaw', 'Potato salad', 'Pickled beetroot', 'Cold drink'],
    store: 'Best eaten straight away. Cooked sausages and onions keep in the fridge for up to 2 days.',
    nut: [447, 18, 24, 31, 3, 6, 1060]
  },

  'porridge-with-brown-sugar': {
    d: 'Rolled oats simmered in milk and water until thick and creamy, with a spoon of brown sugar melted on top. Two servings in 10 minutes.',
    meta: 'Porridge with brown sugar: rolled oats simmered in milk and water until creamy, topped with brown sugar. A very cheap breakfast for two in 10 minutes.',
    kw: ['porridge with brown sugar', 'scottish porridge', 'budget oat breakfast', 'easy stovetop porridge', 'cheap breakfast for two'],
    why: 'Salt the porridge. It is the one change that makes the biggest difference, because a pinch brings the nutty flavour of the oats forward and stops it tasting like wet cardboard.\n\nStir while it cooks. Oats release starch as they swell, and a spoon moving through the pan keeps it creamy and stops it catching on the base. A wooden spoon or a spurtle does the job.\n\nA mixture of half milk, half water gives creamy porridge without being heavy. All water is thinner and all milk can scorch.\n\n**Take it off the heat while it is slightly looser than you want.** It thickens fast in the bowl. Brown sugar goes on top, not in the pan, so it melts into a sticky layer. Porridge oats come in several grades, and rolled oats give a creamy result with a little chew. Oatmeal that is coarsely ground takes longer but gives a different, nuttier texture, if you have it and the time.',
    ing: [
      '80 g rolled oats',
      '250 ml water',
      '250 ml milk',
      '1 pinch salt',
      '2 tbsp light brown sugar'
    ],
    st: [
      'Put the oats, water, milk and salt in a saucepan.',
      'Bring to a gentle boil over medium heat, stirring.',
      'Lower the heat and simmer for 5 minutes, stirring often, until thick and creamy.',
      'Divide between two bowls and sprinkle with the sugar.'
    ],
    tips: [
      'Stir often so the porridge does not catch on the base.',
      'Add a splash of milk if it gets too thick.',
      'Soak the oats overnight for a faster cook in the morning.'
    ],
    pair: ['Sliced banana', 'Raisins', 'Cream', 'Cup of tea'],
    store: 'Best eaten straight away. Leftover porridge keeps in the fridge for up to 2 days; reheat with a splash of milk.',
    nut: [283, 9, 46, 7, 4, 20, 140]
  },

  'fried-cornmeal-mush': {
    d: 'Cornmeal cooked into a thick porridge, set in a loaf tin, sliced and fried until crisp. Four servings in 25 minutes plus chilling.',
    meta: 'Fried cornmeal mush: cornmeal porridge set in a tin, sliced and fried until crisp. A very cheap breakfast for four, with time to chill.',
    kw: ['fried cornmeal mush', 'fried polenta breakfast', 'budget cornmeal breakfast', 'cornmeal mush recipe', 'cheap breakfast for four'],
    why: 'Whisk the cornmeal into cold water, then heat it. If the cornmeal goes into hot water it lumps at once, and no amount of whisking will get the lumps out.\n\nThe mush takes about 12 minutes of stirring to thicken. It spits, so use a deep pan and a long spoon, and keep the heat low.\n\nIt then needs to set. Pour it into a loaf tin and leave it to cool completely, at least 3 hours in the fridge or overnight. **Slices cut from warm mush fall apart in the pan.**\n\nFry the slices in a thin film of oil over medium heat for 4 minutes per side, until crisp and golden on the outside and soft inside. Maple syrup is the traditional topping, or serve with a fried egg. Mush stretches a small amount of meal a long way, and a pan of it feeds a family for very little. Cooked and cooled mush is easy to store, so it can be made on a quiet evening and fried on a busy morning.',
    ing: [
      '150 g yellow cornmeal',
      '750 ml cold water',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '4 tbsp maple syrup'
    ],
    st: [
      'Whisk the cornmeal, water and salt in a saucepan until smooth. Bring to a boil over medium heat, stirring.',
      'Lower the heat and cook for 12 minutes, stirring often, until very thick.',
      'Pour into a lined 900 g loaf tin, smooth the top and chill for at least 3 hours until firm.',
      'Turn out and cut into 8 slices. Fry in the oil over medium heat for 4 minutes per side until crisp and golden. Serve with the maple syrup.'
    ],
    tips: [
      'Whisk the cornmeal into cold water to prevent lumps.',
      'Chill the mush completely before slicing.',
      'Use a non-stick pan and let the crust form before turning.'
    ],
    pair: ['Fried egg', 'Bacon', 'Sausages', 'Fresh fruit'],
    store: 'The set mush keeps in the fridge for up to 4 days before frying. Fried slices are best eaten straight away.',
    rest: [180, 'chilling'],
    nut: [252, 3, 42, 8, 3, 12, 590]
  },

  'leftover-mashed-potato-cakes': {
    d: 'Cold mashed potato mixed with egg and flour, shaped into patties and fried until crisp. Four servings in 20 minutes.',
    meta: 'Leftover mashed potato cakes: cold mash mixed with egg and flour and fried until crisp. A very cheap breakfast for four in 20 minutes.',
    kw: ['leftover mashed potato cakes', 'potato cakes from mash', 'budget potato breakfast', 'easy fried potato patties', 'cheap breakfast for four'],
    why: 'Cold mash behaves differently from hot. It has firmed up in the fridge, which makes it easy to shape and gives the cakes a better chance of holding together in the pan.\n\nThe flour and egg are the binder. A little goes a long way, so add the egg first, then the flour a spoonful at a time, until you can form a patty that does not stick to your hands.\n\nFlour your hands, not the cakes. Shape them 1.5 cm thick, no thicker, or the middle stays cold while the outside burns.\n\n**Fry over medium heat and do not move them for 4 minutes.** A crust forms, and the cake releases when ready. Spring onion or grated cheese turns them into something more. A fried egg on top makes breakfast. The cakes use mash that might otherwise be thrown away, and take less time than frying fresh potatoes. A little grated cheese in the mixture, or a spoon of chopped herbs, changes the flavour without any extra effort.',
    ing: [
      '500 g cold mashed potato',
      '1 egg, beaten',
      '40 g plain flour',
      '2 spring onions, finely sliced',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Mix the mashed potato, egg, flour, spring onions, salt and pepper in a bowl until it comes together.',
      'With floured hands, shape into 8 patties about 1.5 cm thick.',
      'Heat the oil in a large frying pan over medium heat. Fry the cakes in two batches for 4 minutes per side until deep golden.',
      'Drain briefly on kitchen paper and serve hot.'
    ],
    tips: [
      'Use cold mash; warm mash is too soft to shape.',
      'Add flour a spoonful at a time until the mixture holds.',
      'Chill the shaped cakes for 10 minutes if they feel soft.'
    ],
    pair: ['Fried egg', 'Bacon', 'Baked beans', 'Ketchup'],
    store: 'Keeps in the fridge for up to 2 days. Reheat in a pan or at 200°C for 10 minutes. Make sure the original mash was chilled promptly.',
    nut: [248, 5, 30, 12, 3, 1, 320]
  },

  'oatmeal-bars': {
    d: 'Rolled oats, banana, peanut butter and honey baked into soft bars for grab-and-go breakfasts. Makes nine in 35 minutes.',
    meta: 'Oatmeal bars: rolled oats, mashed banana, peanut butter and honey baked into soft bars. A cheap grab-and-go breakfast, nine bars in 35 minutes.',
    kw: ['oatmeal bars', 'banana oat breakfast bars', 'budget oat bars', 'easy baked oatmeal squares', 'cheap grab and go breakfast'],
    why: 'Ripe bananas are the secret. The spotted ones at the bottom of the bowl are sweet and soft, and they act as both sugar and binder, so very little else is needed.\n\nMash them well with a fork until no lumps remain. Then stir in the peanut butter and honey, and finally the oats. The mixture should look like a thick, sticky porridge.\n\nPress it into the tin firmly with the back of a spoon. **A loose layer crumbles when cut.**\n\nBake until the top is golden and the edges pull away from the tin. The bars firm up as they cool, so let them cool for 15 minutes before slicing. They are soft, not crisp. Keep them in the fridge in a tin. These bars are not very sweet, so they suit breakfast rather than dessert. Replace the raisins with chopped apple, dried apricot or a handful of seeds if you prefer, keeping the total roughly the same so the mixture still holds.',
    ing: [
      '3 ripe bananas, mashed',
      '80 g smooth peanut butter',
      '60 g honey',
      '1 tsp vanilla extract',
      '240 g rolled oats',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt',
      '50 g raisins'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a 20 cm square tin with baking paper.',
      'Mix the bananas, peanut butter, honey and vanilla until smooth.',
      'Stir in the oats, cinnamon, salt and raisins. Press firmly into the tin.',
      'Bake for 25 minutes until golden at the edges. Cool for 15 minutes in the tin, then cut into 9 squares.'
    ],
    tips: [
      'Use very ripe bananas for the best sweetness.',
      'Press the mix down firmly so the bars hold together.',
      'Check for peanut allergies before sharing.'
    ],
    pair: ['Glass of milk', 'Yogurt', 'Fresh fruit', 'Cup of tea'],
    store: 'Keep in an airtight tin in the fridge for up to 4 days. Freezes for up to 2 months.',
    nut: [234, 6, 39, 6, 5, 14, 70]
  },

  'breakfast-cookies': {
    d: 'Soft oat cookies made with banana, raisins and a little brown sugar, baked on one tray. Makes 12 in 25 minutes.',
    meta: 'Breakfast cookies: soft oat cookies with banana, raisins and a little brown sugar. A cheap, easy grab-and-go breakfast, 12 cookies in 25 minutes.',
    kw: ['breakfast cookies', 'banana oat breakfast cookies', 'budget oat cookies', 'easy breakfast cookie recipe', 'cheap grab and go breakfast'],
    why: 'They are soft, not crisp, and that is the point: a breakfast cookie is a baked bowl of oats. The bananas keep the inside tender, and the oats give it chew.\n\nMash the banana until smooth, then beat in the oil and sugar. A lumpy mash leaves wet streaks in the baked cookie.\n\nThe batter is thick enough to hold a shape. Scoop heaped tablespoons onto the tray and flatten them slightly with the back of a spoon, because they do not spread in the oven. **What you shape is what you get.**\n\nBake until the edges are golden and the middle is still pale. They firm up on the tray as they cool for 5 minutes. Stir through chocolate chips or nuts if you have them. A cookie for breakfast makes sense when it is mostly oats and fruit. They keep well, and a batch made on Sunday covers several mornings, with a glass of milk or a piece of fruit alongside to make it a full meal.',
    ing: [
      '2 ripe bananas, mashed',
      '60 ml vegetable oil',
      '60 g light brown sugar',
      '1 tsp vanilla extract',
      '200 g rolled oats',
      '60 g plain flour',
      '1 tsp ground cinnamon',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '60 g raisins'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a baking tray.',
      'Beat the bananas, oil, sugar and vanilla until smooth.',
      'Stir in the oats, flour, cinnamon, baking powder, salt and raisins until just combined.',
      'Drop 12 heaped tablespoons onto the tray and flatten slightly. Bake for 15 minutes until golden at the edges. Cool for 5 minutes on the tray.'
    ],
    tips: [
      'Flatten the dough because it will not spread much in the oven.',
      'Check at 12 minutes if your oven runs hot.',
      'Use very ripe bananas for natural sweetness.'
    ],
    pair: ['Glass of milk', 'Yogurt', 'Fresh fruit', 'Cup of tea'],
    store: 'Keep in an airtight tin for up to 3 days. Freezes for up to 2 months.',
    nut: [178, 3, 28, 6, 3, 10, 70]
  },

  'breakfast-quesadilla': {
    d: 'A flour tortilla filled with scrambled egg and melted cheese, folded and toasted in a pan. Two servings in 13 minutes.',
    meta: 'Breakfast quesadilla: a flour tortilla filled with scrambled egg and melted cheese, folded and crisped in a pan. A cheap breakfast for two in 13 minutes.',
    kw: ['breakfast quesadilla', 'egg and cheese quesadilla', 'budget egg breakfast', 'easy breakfast tortilla', 'cheap breakfast for two'],
    why: 'Scramble the eggs soft, a little under what you want. They finish cooking inside the quesadilla, where the heat of the tortilla and the melting cheese will set them the rest of the way.\n\nUse a medium heat for the eggs and stir gently with a spatula. Small, creamy curds are the aim, and they should still look slightly wet when you take them off.\n\nPut the cheese on both sides of the egg. **Cheese on the bottom melts into the tortilla and glues the filling** so it does not slide out when you cut the quesadilla.\n\nCook in a dry pan over medium heat for 2 minutes a side. The tortilla should be golden and crisp in patches, not scorched. Salsa is the obvious thing to serve with it. Quesadillas are quick because the tortilla is both plate and wrapper. Add whatever is to hand: a few spoons of black beans, sliced peppers or leftover cooked sausage all fit inside without any change to the method.',
    ing: [
      '4 eggs',
      '1/4 tsp salt',
      '1 tbsp vegetable oil',
      '2 large flour tortillas',
      '100 g grated cheddar',
      '2 spring onions, sliced',
      '4 tbsp salsa'
    ],
    st: [
      'Whisk the eggs with the salt. Heat the oil in a non-stick pan over medium heat and scramble the eggs gently for 2 minutes until just set. Tip onto a plate.',
      'Lay a tortilla in the pan. Cover half with a quarter of the cheese, half of the egg and spring onions, then another quarter of the cheese.',
      'Fold over, press down and toast for 2 minutes per side until golden and the cheese has melted. Repeat with the second tortilla.',
      'Cut each into wedges and serve with the salsa.'
    ],
    tips: [
      'Take the eggs off the heat while they are still soft.',
      'Put cheese on both sides of the egg to hold the filling.',
      'Press down gently with a spatula for even browning.'
    ],
    pair: ['Salsa', 'Soured cream', 'Sliced avocado', 'Orange juice'],
    store: 'Best eaten straight away. Leftovers keep in the fridge for 1 day; reheat in a dry pan.',
    nut: [610, 31, 36, 38, 3, 4, 1390]
  },

  'breakfast-pizza': {
    d: 'A ready-made pizza base topped with scrambled egg, sausage, cheese and peppers and baked until bubbling. Four servings in 25 minutes.',
    meta: 'Breakfast pizza: a pizza base topped with scrambled egg, sausage, cheese and peppers, baked until bubbling. A cheap brunch for four in 25 minutes.',
    kw: ['breakfast pizza', 'egg and sausage pizza', 'budget brunch pizza', 'easy breakfast pizza on a ready made base', 'cheap brunch for four'],
    why: 'It is a pizza with a breakfast topping, and it works because the toppings are cooked before they go on. Raw egg on a pizza sets unevenly; scrambled egg added just short of done finishes in the oven and stays soft.\n\nUse a ready-made base, which saves 90 minutes. Brush it with a little oil and bake it plain for 4 minutes first, so the crust crisps and is not soggy under the toppings.\n\nBrown the sausage meat, and scramble the eggs, before you assemble. **Everything on top should be nearly cooked** because the oven time is short.\n\nCheese goes on last, so it covers the egg and protects it from drying out. A hot oven, 220°C, melts it in 8 minutes. Cut with scissors, not a knife. The base can be replaced by a large flour tortilla or a split pitta bread, which cuts the cooking time further. Because the toppings are cooked first, the pizza needs only enough oven time to melt the cheese and crisp the edge.',
    ing: [
      '1 ready-made pizza base, about 300 g',
      '1 tbsp vegetable oil',
      '150 g pork sausage meat',
      '4 eggs',
      '1/4 tsp salt',
      '1 red pepper, diced',
      '150 g grated mozzarella',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Brush the base with half the oil, set on a tray and bake for 4 minutes.',
      'Fry the sausage meat in a pan for 5 minutes, breaking it up. Lift out. Whisk the eggs with the salt and scramble in the same pan for 2 minutes, keeping them soft.',
      'Scatter the sausage, egg and pepper over the base and cover with the cheese.',
      'Bake for 8 minutes until the cheese is bubbling. Scatter with the spring onions and cut into 8 slices.'
    ],
    tips: [
      'Pre-bake the base so it stays crisp.',
      'Keep the scrambled egg soft; it sets more in the oven.',
      'Cut into wedges while hot.'
    ],
    pair: ['Green salad', 'Fruit', 'Hot sauce', 'Orange juice'],
    store: 'Keeps in the fridge for up to 2 days. Reheat slices at 180°C for 8 minutes.',
    nut: [541, 27, 43, 29, 3, 5, 1110]
  },

  'cheese-omelette': {
    d: 'Three eggs beaten and cooked in butter, folded over a handful of melted cheddar. One serving in 8 minutes.',
    meta: 'Cheese omelette: three eggs cooked in butter and folded over melted cheddar. A very cheap breakfast or supper for one in 8 minutes.',
    kw: ['cheese omelette', 'plain cheese omelette', 'budget egg breakfast', 'easy omelette for one', 'cheap quick supper'],
    why: 'Why does an omelette turn rubbery? The pan is too hot, or the eggs are overcooked, which in an omelette amounts to the same thing. It cooks in under 2 minutes.\n\nBeat the eggs with a pinch of salt until the whites and yolks are fully mixed, with no strings of white. Foam does not matter.\n\nMelt the butter in a non-stick pan over medium heat until it stops foaming, then pour in the eggs. Stir with a fork for 20 seconds, pulling the set edges into the middle, then leave it.\n\n**Take it off while the top is still shiny.** It continues to cook in its own heat on the way to the plate. Put the cheese on one half and fold the other half over it. The thing that makes an omelette cheap is that it needs so little: eggs, butter and a handful of cheese. Mature cheddar goes further than mild, because a small amount delivers more flavour, and a pinch of mustard in the egg sharpens it.',
    ing: [
      '3 eggs',
      '1 pinch salt',
      '15 g butter',
      '40 g grated cheddar'
    ],
    st: [
      'Beat the eggs with the salt in a bowl until smooth.',
      'Melt the butter in a 20 cm non-stick frying pan over medium heat until it stops foaming. Pour in the eggs.',
      'Stir gently with a fork for 20 seconds, then leave for 1 minute until the edges set and the top is still slightly wet.',
      'Scatter the cheese over one half, fold the other half over and slide onto a plate.'
    ],
    tips: [
      'Use a pan the right size; 20 cm suits three eggs.',
      'Keep the heat at medium so the omelette stays tender.',
      'Serve at once; omelettes toughen as they stand.'
    ],
    pair: ['Buttered toast', 'Grilled tomato', 'Green salad', 'Hash browns'],
    store: 'Best eaten straight away.',
    nut: [484, 29, 2, 40, 0, 1, 600]
  },

  'mushroom-omelette': {
    d: 'Three eggs folded over mushrooms cooked in butter until golden, with a squeeze of black pepper. One serving in 15 minutes.',
    meta: 'Mushroom omelette: three eggs folded over mushrooms cooked in butter until golden. A cheap breakfast or supper for one in 15 minutes.',
    kw: ['mushroom omelette', 'classic mushroom omelette', 'budget egg supper', 'easy omelette with mushrooms', 'cheap supper for one'],
    why: 'The mushrooms decide this omelette, so cook them first and properly. Sliced thin and added to a hot, dry pan, they release their water in about 3 minutes, then start to brown. That is when they taste of something.\n\nButter goes in only after the water has gone. **If you add fat too early they stew instead of frying**, and end up grey.\n\nA pinch of salt at the end, not the start, since salt draws out more water.\n\nThe eggs go into the same pan, with a little fresh butter, once the mushrooms are on a plate. Cook them as you would a plain omelette, quickly over medium heat. Fill with the mushrooms while the top is still slightly wet and fold over. Mushrooms can be replaced by whatever is in the drawer, including sliced peppers, spinach or leftover cooked potato. The method stays the same: cook the filling first, keep it warm, and make the omelette quickly in a clean pan.',
    ing: [
      '100 g button mushrooms, thinly sliced',
      '25 g butter',
      '3 eggs',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '1 tsp chopped parsley'
    ],
    st: [
      'Heat a 20 cm non-stick pan over medium-high heat. Add the mushrooms and cook for 3 minutes until the water has gone. Add half the butter and cook for 3 minutes until golden. Season with a pinch of salt. Tip onto a plate.',
      'Beat the eggs with the remaining salt and the pepper.',
      'Melt the remaining butter in the pan over medium heat, pour in the eggs and stir with a fork for 20 seconds. Leave for 1 minute until the edges set.',
      'Spoon the mushrooms onto one half, fold over, scatter with the parsley and slide onto a plate.'
    ],
    tips: [
      'Cook the mushrooms in a dry pan first to drive off their water.',
      'Do not salt the mushrooms until the end.',
      'Wipe the pan out before the eggs go in if it has caught.'
    ],
    pair: ['Buttered toast', 'Green salad', 'Grilled tomato'],
    store: 'Best eaten straight away. Cooked mushrooms keep in the fridge for 2 days.',
    nut: [423, 22, 5, 35, 1, 3, 780]
  },

  'spanish-omelette': {
    d: 'Potatoes and onion slowly cooked in olive oil, then set in beaten eggs into a thick round omelette. Four servings in 35 minutes.',
    meta: 'Spanish omelette: potatoes and onion slowly cooked in olive oil and set in eggs into a thick round. A cheap supper for four in 35 minutes.',
    kw: ['spanish omelette', 'tortilla espanola', 'budget potato omelette', 'easy tortilla de patatas', 'cheap supper for four'],
    why: 'The potatoes are poached in oil, not fried, and that is what makes the texture. At a gentle heat for 15 minutes they turn silky and just collapse at the edges, with no crisp bits at all.\n\nSlice them thin, about 3 mm, and cook with the onion in more oil than seems sensible. Most of it is drained off afterwards.\n\nDrain well and fold the warm potatoes into the beaten eggs. Leave for 5 minutes. **This rest lets the egg soak into the potato**, and the omelette comes out soft and holds together.\n\nCook it in a 24 cm non-stick pan over medium heat for 5 minutes, then flip it with a plate. The second side needs 3 minutes. The middle should stay a little soft. The omelette is eaten warm, at room temperature or cold. Cut into cubes with cocktail sticks, it makes a good party snack, and a wedge in a bread roll is a very satisfying sandwich.',
    ing: [
      '120 ml olive oil',
      '600 g potatoes, peeled and sliced 3 mm thick',
      '1 onion, thinly sliced',
      '1 tsp salt',
      '6 eggs'
    ],
    st: [
      'Heat the oil in a 24 cm non-stick pan over medium-low heat. Add the potatoes, onion and half the salt and cook for 15 minutes, turning gently, until soft but not browned.',
      'Drain the potatoes in a sieve over a bowl, keeping 1 tablespoon of the oil. Beat the eggs with the remaining salt, fold in the warm potatoes and leave for 5 minutes.',
      'Heat the reserved oil in the pan over medium heat. Pour in the mixture and cook for 5 minutes until the base is set.',
      'Slide onto a plate, invert back into the pan and cook for 3 minutes more. Rest for 5 minutes and cut into wedges.'
    ],
    tips: [
      'Cook the potatoes gently; they should not colour.',
      'Let the mixture rest for 5 minutes so the egg soaks into the potato.',
      'Keep the middle a little soft if you like it traditional.'
    ],
    pair: ['Green salad', 'Tomato salad', 'Crusty bread', 'Olives'],
    store: 'Keeps in the fridge for up to 3 days. Serve at room temperature or cold.',
    nut: [483, 13, 29, 35, 4, 3, 690]
  },

  'apple-cinnamon-oatmeal': {
    d: 'Rolled oats simmered in milk with diced apple and cinnamon until soft and thick. Two servings in 13 minutes.',
    meta: 'Apple cinnamon oatmeal: rolled oats simmered in milk with diced apple and cinnamon until thick. A very cheap breakfast for two in 13 minutes.',
    kw: ['apple cinnamon oatmeal', 'apple oatmeal breakfast', 'budget apple oats', 'easy stovetop apple oatmeal', 'cheap breakfast for two'],
    why: 'The apple cooks with the oats, not on top, and that changes the result. As it softens it gives off sweetness and a little moisture, so the oatmeal tastes of apple all the way through and needs no sugar.\n\nDice it small, about 1 cm, so the pieces cook in the same time as the oats. Leave the skin on if it is thin: the colour stays pretty and there is more fibre.\n\nCinnamon goes in with the oats, not at the end. **Heat releases its aroma**, and cinnamon stirred in last tastes dusty.\n\nCook on low heat and stir often. Thick oatmeal catches on the pan if left alone. A spoon of honey or a few chopped walnuts on top is optional. Apples in season are cheap, and the oatmeal works with pears just as well. For a creamier bowl, use all milk in place of the water, and stir in a handful of raisins or chopped walnuts if there is some to spare.',
    ing: [
      '80 g rolled oats',
      '250 ml milk',
      '250 ml water',
      '1 apple, cored and diced',
      '1 tsp ground cinnamon',
      '1 pinch salt',
      '2 tsp honey'
    ],
    st: [
      'Put the oats, milk, water, apple, cinnamon and salt in a saucepan.',
      'Bring to a gentle boil over medium heat, stirring.',
      'Lower the heat and simmer for 8 minutes, stirring often, until thick and the apple is soft.',
      'Divide between two bowls and drizzle with the honey.'
    ],
    tips: [
      'Dice the apple small so it softens with the oats.',
      'Stir often to stop it catching.',
      'Add a splash of milk if it thickens too much.'
    ],
    pair: ['Chopped walnuts', 'Yogurt', 'Raisins', 'Cup of tea'],
    store: 'Best eaten straight away. Keeps in the fridge for up to 2 days; reheat with a splash of milk.',
    nut: [307, 10, 51, 7, 7, 21, 140]
  },

  'sausage-egg-and-cheese-muffin': {
    d: 'A toasted English muffin filled with a sausage patty, a fried egg and a slice of melted cheese. Two servings in 17 minutes.',
    meta: 'Sausage egg and cheese muffin: a toasted English muffin with a sausage patty, fried egg and melted cheese. A cheap breakfast for two in 17 minutes.',
    kw: ['sausage egg and cheese muffin', 'breakfast muffin sandwich', 'budget breakfast sandwich', 'easy homemade breakfast sandwich', 'cheap breakfast for two'],
    why: 'It is the drive-through breakfast made at home, for a fraction of the cost. A sausage patty, an egg and a slice of cheese in a toasted muffin: nothing more, and nothing missing.\n\nForm the patty from sausage meat, flattened to 1 cm and slightly wider than the muffin, because it shrinks in the pan. Fry for 4 minutes per side over medium heat until deeply browned and cooked through.\n\nCook the egg in the same pan, in the sausage fat. A single egg broken and set with a lid becomes a neat round that fits the muffin.\n\n**Put the cheese on the hot egg** so it melts in seconds. Toast the muffin halves cut side down in the pan after the egg comes out, to take up the fat. A batch of patties can be made ahead and frozen between sheets of paper, ready to cook from frozen. Assemble the sandwiches in the morning, and the whole breakfast takes only a few minutes at the stove.',
    ing: [
      '200 g pork sausage meat',
      '2 eggs',
      '1 pinch salt',
      '2 English muffins, split',
      '40 g processed cheese slices',
      '10 g butter'
    ],
    st: [
      'Divide the sausage meat into two and flatten each piece into a 1 cm patty a little wider than the muffin.',
      'Fry in a large pan over medium heat for 4 minutes per side until deeply browned. Lift out.',
      'Crack the eggs into the pan, season with the salt, cover and cook for 2 minutes. Lay a cheese slice over each.',
      'Toast the muffin halves, buttered, cut side down in the pan for 1 minute. Assemble with the sausage and egg.'
    ],
    tips: [
      'Make the patties wider than the muffin as they shrink.',
      'Cover the pan to set the egg and melt the cheese together.',
      'Check the sausage is cooked through before serving.'
    ],
    pair: ['Hash browns', 'Fruit', 'Coffee', 'Orange juice'],
    store: 'Best eaten straight away. Assembled muffins freeze for up to 1 month; reheat from frozen at 180°C for 20 minutes.',
    nut: [574, 27, 31, 38, 2, 5, 1460]
  },

  'milk-toast': {
    d: 'Hot buttered toast broken into warm sweetened milk, an old-fashioned comfort breakfast. One serving in 10 minutes.',
    meta: 'Milk toast: hot buttered toast broken into warm sweetened milk. An old-fashioned, very cheap comfort breakfast for one in 10 minutes.',
    kw: ['milk toast', 'old fashioned milk toast', 'budget comfort breakfast', 'easy warm milk and toast', 'cheap breakfast for one'],
    why: 'Short, sharp: toast, milk, butter, sugar. Milk toast is one of the plainest dishes there is, and one of the oldest comfort foods.\n\nToast the bread well, until it is deep golden and crisp. Pale toast turns to paste in the milk in a minute; dark toast holds on for the first few spoonfuls.\n\nHeat the milk gently with the sugar and a pinch of salt, until steaming but not boiling. **Boiled milk grows a skin and tastes cooked.**\n\nThe butter goes on the toast while it is hot, then the toast is torn into the bowl and the milk poured over. Cinnamon on top is optional. Eat it at once, before the toast goes soft. It is soft, mild food for days when something plain is wanted, and it needs no more than a slice of bread and a cup of milk. Leave out the cinnamon for the plainest version, or add a few raisins for something sweeter.',
    ing: [
      '2 slices white bread',
      '15 g butter',
      '250 ml milk',
      '2 tsp sugar',
      '1 pinch salt',
      '1/4 tsp ground cinnamon'
    ],
    st: [
      'Toast the bread until deep golden and butter it while hot.',
      'Warm the milk with the sugar and salt in a small pan over medium heat for 3 minutes until steaming. Do not let it boil.',
      'Tear the toast into a bowl and pour the milk over.',
      'Sprinkle with the cinnamon and eat at once.'
    ],
    tips: [
      'Toast the bread dark so it holds its shape in the milk.',
      'Warm the milk without boiling it.',
      'Add the milk just before eating.'
    ],
    pair: ['Fresh fruit', 'Cup of tea', 'Boiled egg'],
    store: 'Best eaten straight away.',
    nut: [454, 14, 50, 22, 2, 24, 560]
  },

  'banana-toast': {
    d: 'Toast spread with peanut butter and topped with sliced banana, honey and a pinch of cinnamon. One serving in 7 minutes.',
    meta: 'Banana toast: toast with peanut butter, sliced banana, honey and cinnamon. A very cheap breakfast or snack for one in 7 minutes.',
    kw: ['banana toast', 'peanut butter and banana toast', 'budget quick breakfast', 'easy banana on toast', 'cheap breakfast for one'],
    why: 'Toast the bread properly. It is the base for something soft, so it has to be crisp enough to hold it up.\n\nSpread the peanut butter while the toast is still hot. It melts slightly into the surface and glues the banana on, so slices stay in place when you bite.\n\nThe banana should be just ripe, yellow with a few freckles. Greener ones are starchy and dry; very spotty ones turn to mush.\n\n**Slice it 5 mm thick**, no thinner, and lay the slices overlapping. Honey and cinnamon finish it. A pinch of salt makes the sweetness taste rounder. Wholemeal bread gives the toast a nutty flavour that works well with banana, though white bread is fine. If peanut butter is not available, any nut butter or even a spread of cream cheese stands in, and the honey can be left out when the banana is very ripe. A pinch of salt on top lifts the sweetness.',
    ing: [
      '1 slice wholemeal bread',
      '1 tbsp smooth peanut butter',
      '1 banana, sliced',
      '1 tsp honey',
      '1 pinch ground cinnamon'
    ],
    st: [
      'Toast the bread until golden.',
      'Spread the peanut butter over the hot toast.',
      'Lay the banana slices on top, overlapping.',
      'Drizzle with the honey and sprinkle with the cinnamon.'
    ],
    tips: [
      'Spread the peanut butter while the toast is hot.',
      'Use a banana that is ripe but still firm.',
      'Check for peanut allergies before serving.'
    ],
    pair: ['Glass of milk', 'Yogurt', 'Coffee'],
    store: 'Best eaten straight away; the banana browns.',
    nut: [326, 9, 50, 10, 6, 23, 150]
  },

  'cinnamon-toast': {
    d: 'Hot buttered toast sprinkled with cinnamon sugar. Two servings in 8 minutes from three cupboard items.',
    meta: 'Cinnamon toast: hot buttered toast sprinkled with cinnamon sugar. A very cheap sweet breakfast or snack for two in 8 minutes.',
    kw: ['cinnamon toast', 'buttered cinnamon sugar toast', 'budget sweet breakfast', 'easy cinnamon sugar toast', 'cheap snack for two'],
    why: 'Cinnamon toast is toast, butter, sugar and cinnamon, and it still goes wrong. The sugar must go on while the butter is liquid, or it sits on the surface and falls off.\n\nMix the sugar and cinnamon in a small bowl first, so the spice is spread evenly. A ratio of about four parts sugar to one of cinnamon tastes right.\n\nToast the bread lightly, spread it with soft butter right to the edges, and sprinkle the mixture over at once. **Cover every corner**, because the edges are where it burns in the next step.\n\nTwo minutes under a hot grill melts the sugar into a thin crust. Watch it, since sugar goes from golden to burnt in a few seconds. This is the sort of treat that takes less time to make than to ask for. Spread the butter thickly, since cinnamon sugar needs fat to stick to, and use a heavy hand with the cinnamon, which mellows in the heat of the grill.',
    ing: [
      '4 slices white bread',
      '40 g soft butter',
      '3 tbsp sugar',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the grill to high. Mix the sugar and cinnamon in a small bowl.',
      'Toast the bread lightly on one side under the grill for 1 minute, then turn it over.',
      'Spread the untoasted side with the butter to the edges and cover with the cinnamon sugar.',
      'Grill for 1 to 2 minutes until the sugar bubbles. Watch closely and serve hot.'
    ],
    tips: [
      'Butter to the very edge so the toast does not dry out.',
      'Do not walk away from the grill; sugar burns quickly.',
      'Use soft butter so it spreads without tearing the bread.'
    ],
    pair: ['Glass of milk', 'Hot chocolate', 'Cup of tea'],
    store: 'Best eaten straight away.',
    nut: [382, 6, 49, 18, 2, 22, 300]
  },

  'tomato-toast': {
    d: 'Toasted bread rubbed with garlic and ripe tomato, drizzled with olive oil and salt. Two servings in 8 minutes.',
    meta: 'Tomato toast: toasted bread rubbed with garlic and ripe tomato, with olive oil and salt. A very cheap Spanish-style breakfast for two in 8 minutes.',
    kw: ['tomato toast', 'pan con tomate', 'budget tomato breakfast', 'easy spanish tomato bread', 'cheap breakfast for two'],
    why: 'The tomato is the sauce, and it is applied by rubbing, not by slicing. Cut a ripe tomato in half, press the cut side onto the toast and squeeze: the flesh and juice soak into the bread, and the skin is left in your hand.\n\nThe bread has to be rough and crisp. Thick slices of a country loaf, toasted until the edges are hard, are best, because the surface grabs at the tomato.\n\nRub the toast with a cut garlic clove first. **One pass is enough**: garlic on hot toast is powerful.\n\nOlive oil and salt come last. A good flaky salt gives crunch, and a decent oil, used generously, makes the dish. It needs a ripe tomato. A hard, pale one gives nothing. The dish depends entirely on the quality of the tomatoes, so make it in summer when they are ripe and cheap. Out of season, a tin of good chopped tomatoes drained and spread on the toast is an acceptable second choice.',
    ing: [
      '4 thick slices crusty bread',
      '1 garlic clove, halved',
      '2 ripe tomatoes, halved',
      '2 tbsp olive oil',
      '1/2 tsp flaky salt'
    ],
    st: [
      'Toast the bread until crisp and golden at the edges.',
      'Rub one side of each slice with the cut side of the garlic.',
      'Rub the cut side of a tomato half over each slice, squeezing so the pulp soaks in. Discard the skin.',
      'Drizzle with the olive oil, sprinkle with the salt and serve at once.'
    ],
    tips: [
      'Use ripe tomatoes; hard ones give no juice.',
      'Rub the garlic once; it is strong.',
      'Serve at once before the bread goes soft.'
    ],
    pair: ['Fried egg', 'Serrano ham', 'Coffee', 'Olives'],
    store: 'Best eaten straight away.',
    nut: [312, 7, 35, 16, 3, 6, 890]
  },

  'spaghetti-on-toast': {
    d: 'Tinned spaghetti in tomato sauce heated through and spooned over buttered toast. Two servings in 7 minutes.',
    meta: 'Spaghetti on toast: tinned spaghetti in tomato sauce heated through and spooned over buttered toast. A very cheap breakfast for two in 7 minutes.',
    kw: ['spaghetti on toast', 'tinned spaghetti on toast', 'budget quick breakfast', 'easy spaghetti toast', 'cheap breakfast for two'],
    why: 'The method is almost nothing: heat the tin, toast the bread. But a few small decisions make the difference between something thin and sloppy and something you would make on purpose.\n\nHeat the spaghetti in a pan, not the microwave, and stir while it warms. A pan lets some of the thin sauce reduce, so it clings to the strands and does not soak the toast.\n\nA knob of butter and a good grind of pepper make it taste less like the tin.\n\n**Butter the toast to the edges** before the spaghetti goes on. The fat makes a small barrier that keeps the toast crisp for the first few bites. Grated cheddar melts over the top in seconds. A spoon of grated cheese, a few drops of Worcestershire sauce or a fried egg on top all lift it, and each can be added without changing the method. It is a snack that needs almost no planning and very little cleaning up afterwards.',
    ing: [
      '400 g tinned spaghetti in tomato sauce',
      '10 g butter',
      '1/4 tsp black pepper',
      '4 slices white bread',
      '20 g butter, for the toast',
      '30 g grated cheddar'
    ],
    st: [
      'Tip the spaghetti into a small pan with the 10 g of butter and the pepper. Warm over medium heat for 4 minutes, stirring, until hot and slightly reduced.',
      'Toast the bread and spread with the 20 g of butter.',
      'Spoon the spaghetti over the toast and scatter with the cheese.'
    ],
    tips: [
      'Warm the tin in a pan so some sauce reduces.',
      'Butter the toast to the edges for crispness.',
      'Add a dash of Worcestershire sauce for a savoury lift.'
    ],
    pair: ['Fried egg', 'Grilled bacon', 'Mug of tea'],
    store: 'Best eaten straight away. Leftover spaghetti keeps in the fridge for 1 day.',
    nut: [448, 13, 54, 20, 4, 10, 1150]
  },

  'potato-pancakes-with-applesauce': {
    d: 'Grated potato and onion fried into crisp pancakes and served with applesauce. Four servings in 30 minutes.',
    meta: 'Potato pancakes with applesauce: grated potato and onion fried into crisp pancakes. A cheap breakfast or supper for four in 30 minutes.',
    kw: ['potato pancakes with applesauce', 'potato latkes', 'budget potato pancakes', 'crispy grated potato pancakes', 'cheap potato breakfast'],
    why: 'Squeeze the potato. That is the step everyone skips and the reason pancakes turn limp. Grated potato holds a surprising amount of water, and if it stays in the mixture the pancakes steam in the pan instead of frying.\n\nGrate the potatoes and onion together on the coarse side of a box grater, then wrap in a clean tea towel and twist hard over the sink. **A cupful of liquid should come out.**\n\nLet that liquid stand for 2 minutes, pour off the water and keep the white starch that settles at the bottom. Stir it back into the potato; it is the glue that holds the pancakes together.\n\nFry in a good depth of oil, about 5 mm, over medium-high heat for 3 to 4 minutes per side. Drain on kitchen paper and serve at once. The pancakes taste best the moment they leave the pan, so serve them in batches rather than waiting for the last. Homemade applesauce is easy to make from a couple of cooking apples simmered with a splash of water until soft.',
    ing: [
      '700 g floury potatoes, peeled',
      '1 onion',
      '2 eggs, beaten',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '100 ml vegetable oil, for frying',
      '200 g applesauce'
    ],
    st: [
      'Grate the potatoes and onion on the coarse side of a grater. Squeeze out as much liquid as you can in a clean tea towel.',
      'Mix with the eggs, flour, salt and pepper, stirring in any starch left at the bottom of the squeezed liquid.',
      'Heat the oil in a large frying pan over medium-high heat. Drop in heaped tablespoons of mixture, flatten and fry in batches for 3 to 4 minutes per side until deep golden and crisp.',
      'Drain on kitchen paper and serve hot with the applesauce.'
    ],
    tips: [
      'Squeeze the potato dry; wet potato makes soggy pancakes.',
      'Do not make them too thick or the middle stays raw.',
      'Keep finished pancakes warm in a low oven.'
    ],
    pair: ['Soured cream', 'Smoked salmon', 'Fried egg', 'Green salad'],
    store: 'Keeps in the fridge for up to 2 days. Reheat on a tray at 200°C for 10 minutes to crisp them.',
    nut: [438, 8, 43, 26, 5, 7, 630]
  },

  'pikelets': {
    d: 'Small, thick pancakes made from a self-raising flour batter and cooked on a dry pan. Makes 16 in 20 minutes.',
    meta: 'Pikelets: small, thick pancakes cooked on a dry pan from a simple self-raising flour batter. A very cheap New Zealand-style treat, 16 in 20 minutes.',
    kw: ['pikelets', 'new zealand pikelets', 'budget pancakes', 'easy pikelet recipe', 'cheap afternoon tea treat'],
    why: 'Pikelets are small, and the pan does the work. A mixture of flour, egg, milk and sugar, dropped by the spoonful onto a pan that is hot and nearly dry, rises into thick rounds that are golden on both sides.\n\nThe pan should be medium heat. Test with one pikelet: if it browns in under a minute, the pan is too hot; if it takes more than 2, too cool.\n\nThe batter is thicker than for crepes, and drops from a spoon in a round that holds. **Do not overmix**; a few lumps are fine. Beating it hard develops the gluten and the pikelets turn out tough.\n\nTurn them when bubbles appear on the surface and burst, and the edges look set. They need only 1 minute on the second side. Serve with butter and jam, or cream. A pikelet is a good first thing for a child to cook, as the batter is forgiving and the pan is easy to read. Serve them warm with butter, or cold with jam and cream, and a plate of them disappears quickly at an afternoon tea.',
    ing: [
      '150 g self-raising flour',
      '2 tbsp caster sugar',
      '1 egg',
      '180 ml milk',
      '15 g butter, melted',
      '1 pinch salt',
      '20 g butter, for the pan'
    ],
    st: [
      'Mix the flour, sugar and salt in a bowl. Whisk the egg, milk and melted butter together and pour into the dry ingredients, stirring until just combined.',
      'Heat a non-stick frying pan over medium heat and wipe with a little of the butter.',
      'Drop tablespoons of batter into the pan, spaced apart. Cook for 1 to 2 minutes until bubbles appear and burst.',
      'Turn and cook for 1 minute more until golden. Repeat with the remaining batter, greasing the pan lightly each time.'
    ],
    tips: [
      'Do not overmix the batter; some lumps are fine.',
      'Grease the pan lightly each time; too much butter makes them greasy.',
      'Keep the heat at medium so they brown evenly.'
    ],
    pair: ['Butter and jam', 'Whipped cream', 'Fresh berries', 'Cup of tea'],
    store: 'Best eaten fresh. Keep in an airtight container for up to 2 days or freeze for 1 month.',
    nut: [71, 2, 9, 3, 0, 2, 20]
  }
};
