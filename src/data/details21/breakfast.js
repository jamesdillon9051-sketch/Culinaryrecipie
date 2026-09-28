'use strict';

/**
 * Volume twenty-one — breakfast.
 *
 * Eggs, potatoes, oats and the sandwiches built round them. The catalogue had
 * pancakes, waffles and eggs Benedict; it did not have the breakfast sandwich,
 * the biscuit sandwich, home fries or a baked oatmeal, and had no plain crêpe
 * to go with its crêpes Suzette.
 */

module.exports = {
  'breakfast-sandwich': {
    d: 'A toasted English muffin around a soft-set egg, melted cheese and crisp bacon. Fifteen minutes, one pan.',
    meta: 'Breakfast sandwich on a toasted English muffin, with a soft-set egg, melted cheese and crisp bacon. Fifteen minutes and one pan.',
    kw: ['breakfast sandwich', 'breakfast sandwich recipe', 'egg and cheese breakfast sandwich', 'english muffin breakfast sandwich', 'homemade breakfast sandwich'],
    why: 'The sandwich is a set of timings more than a recipe. The bacon goes in first because it takes longest and leaves the fat the eggs are cooked in, the muffins are toasted while the egg sets so everything is hot at once, and the cheese goes on the egg in the pan rather than on the bread so that it melts while the yolk is still soft. Piercing the yolk with a fork keeps it from bursting or running out of the muffin.',
    ing: [
      '4 rashers streaky bacon',
      '2 English muffins, split',
      '1 tbsp butter, divided',
      '2 large eggs',
      '0.25 tsp fine sea salt',
      '0.25 tsp black pepper',
      '2 slices cheddar or American cheese'
    ],
    st: [
      'Cook the bacon in a large skillet over medium heat for 8 minutes, turning, until crisp. Drain on paper towels and pour off all but 1 teaspoon of the fat.',
      'Toast the muffins until golden and butter them with half the butter.',
      'Add the rest of the butter to the pan over medium-low heat. Crack the eggs in separately, prick each yolk with a fork and season with the salt and pepper.',
      'Cook 2 minutes until the whites are set, flip and cook 30 seconds for a soft yolk or 1 minute for a firm one.',
      'Lay a slice of cheese over each egg for the last 30 seconds so it softens.',
      'Build each sandwich: muffin base, egg and cheese, two rashers of bacon, muffin top. Press gently and serve hot.'
    ],
    tips: [
      'Prick the yolk so it sets softly instead of bursting.',
      'Put the cheese on the egg in the pan, so it melts before the sandwich is built.',
      'Toast the muffins while the egg cooks so everything comes together hot.'
    ],
    pair: ['Fresh orange juice', 'A fruit salad', 'Hot coffee'],
    store: 'Best eaten hot. Wrap assembled sandwiches in foil and refrigerate up to 3 days, or freeze for 1 month and reheat from frozen in the microwave for 90 seconds, then finish in a toaster oven.',
    nut: [440, 26, 30, 24, 2, 4, 1150]
  },

  'sausage-egg-and-cheese-biscuit': {
    d: 'Split buttermilk biscuits filled with a sage-spiced sausage patty, a fried egg and melted cheese. The Southern drive-through breakfast, in forty-five minutes.',
    meta: 'Sausage, egg and cheese biscuit: flaky buttermilk biscuits filled with a sage-spiced sausage patty, a fried egg and melted cheese.',
    kw: ['sausage egg and cheese biscuit', 'sausage egg and cheese biscuit recipe', 'breakfast biscuit sandwich', 'homemade sausage biscuit', 'sausage egg cheese biscuits from scratch'],
    why: 'Biscuit dough is worked as little as possible: cold butter is left in pea-sized pieces and the dough is folded rather than kneaded, so the butter steams in the oven and pushes the layers apart. The sausage is seasoned with sage and black pepper because those two are where most of the flavour of breakfast sausage comes from, and cooking the patties hard in a hot pan gives the sandwich a browned crust to set against the soft biscuit.',
    ing: [
      '# For the biscuits',
      '300 g plain flour',
      '1 tbsp baking powder',
      '1 tsp fine sea salt',
      '1 tsp sugar',
      '100 g cold unsalted butter, cubed',
      '240 ml cold buttermilk, plus 1 tbsp for brushing',
      '# For the filling',
      '450 g pork sausage meat',
      '1 tsp dried sage',
      '0.5 tsp black pepper',
      '0.5 tsp fine sea salt',
      '1 tbsp butter',
      '6 large eggs',
      '6 slices cheddar or American cheese'
    ],
    st: [
      'Heat the oven to 220°C / 425°F and line a tray with baking paper.',
      'Whisk the flour, baking powder, salt and sugar in a large bowl. Rub in the cold butter until only pea-sized pieces remain.',
      'Stir in the buttermilk with a fork until a shaggy dough forms. Turn onto a floured surface, pat to 2.5 cm thick and fold in thirds. Pat out and fold in thirds once more.',
      'Pat to 3 cm thick and cut 6 rounds with a 7 cm cutter, pressing straight down without twisting. Set them touching on the tray and brush the tops with the extra buttermilk.',
      'Bake 15 to 18 minutes, until tall and golden.',
      'Meanwhile mix the sausage meat with the sage, pepper and salt and shape into 6 patties about 8 cm across, slightly thinner in the middle.',
      'Fry the patties in a skillet over medium-high heat for 4 minutes a side, until browned and 71°C / 160°F in the middle. Drain.',
      'Wipe the pan, melt the butter and fry the eggs for 2 minutes each, until the whites are set, laying a slice of cheese on each for the last 30 seconds.',
      'Split the warm biscuits and fill each with a patty and an egg with cheese. Serve immediately.'
    ],
    tips: [
      'Keep the butter cold. Warm butter melts into the flour and the biscuits will not rise.',
      'Cut straight down with the cutter. Twisting seals the edges and stops the rise.',
      'Make the patties thinner in the middle, since they puff as they cook.'
    ],
    pair: ['Fresh fruit', 'Hot coffee', 'Hash browns'],
    store: 'Best fresh. Wrap assembled sandwiches in foil and refrigerate up to 3 days, or freeze for 2 months and reheat from frozen at 180°C for 25 minutes.',
    nut: [546, 22, 38, 34, 2, 3, 1080]
  },

  'crustless-quiche': {
    d: 'Spinach, mushroom and Gruyère set in a silky egg custard with no pastry to make. Fifty-five minutes.',
    meta: 'Crustless quiche with spinach, mushrooms and Gruyère in a creamy egg custard baked until just set. No pastry, gluten-free, easy to slice.',
    kw: ['crustless quiche', 'crustless quiche recipe', 'crustless spinach quiche', 'crustless quiche with cheese', 'gluten free crustless quiche'],
    why: 'Without a crust it is simply a baked custard, and custard has one rule: it sets at around 80°C, and going beyond that turns it rubbery and makes it weep. That is why it comes out of the oven while the centre still trembles slightly, and why some cream goes in with the milk, since it forgives a degree or two of overbaking. The spinach has to be squeezed dry, because whatever water it holds ends up in a puddle at the bottom of the dish.',
    ing: [
      '1 tbsp butter, plus extra for the dish',
      '1 onion, finely diced',
      '200 g chestnut mushrooms, sliced',
      '200 g baby spinach',
      '6 large eggs',
      '240 ml whole milk',
      '120 ml double cream',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '0.25 tsp freshly grated nutmeg',
      '150 g Gruyère, grated'
    ],
    st: [
      'Heat the oven to 175°C / 350°F and butter a 23 cm deep pie dish.',
      'Melt the butter in a large frying pan and cook the onion for 5 minutes, then add the mushrooms and cook 6 minutes until their liquid has gone.',
      'Add the spinach in handfuls and cook 2 minutes until wilted. Tip into a sieve, press out all the water and cool a few minutes.',
      'Whisk the eggs, milk, cream, salt, pepper and nutmeg until smooth.',
      'Spread the vegetables and two thirds of the cheese over the base of the dish and pour over the custard. Scatter the rest of the cheese on top.',
      'Bake 35 to 40 minutes, until puffed and golden and the centre has just a slight wobble.',
      'Rest 10 minutes before slicing so the custard finishes setting.'
    ],
    tips: [
      'Squeeze the spinach dry. Any water left pools at the bottom.',
      'Take it out while the very centre still wobbles. It sets as it rests.',
      'Cook the mushrooms until their liquid has gone, or the custard turns watery.'
    ],
    pair: ['A green salad', 'Roasted tomatoes', 'Crusty bread'],
    store: 'Refrigerate up to 4 days and eat cold or reheat gently at 160°C for 15 minutes. Freeze wrapped slices for 2 months.',
    nut: [286, 17, 5, 22, 1, 3, 480]
  },

  'baked-oatmeal': {
    d: 'Oats baked with milk, egg, banana and cinnamon into a soft, sliceable breakfast that holds together like a bread pudding. Forty-five minutes.',
    meta: 'Baked oatmeal with bananas, blueberries, cinnamon and walnuts: oats baked in milk and egg until golden and sliceable. Ideal for meal prep.',
    kw: ['baked oatmeal', 'baked oatmeal recipe', 'baked oatmeal with bananas and blueberries', 'baked oatmeal for meal prep', 'baked oatmeal squares'],
    why: 'Baking changes what oatmeal is. The oats swell in the milk and egg and set as a custard would, so the result slices into squares that can be eaten with a fork or in the hand, rather than spooned from a pan. Baking powder gives it a little lift so it is tender instead of dense, and the melted butter goes into the batter rather than on top, so it tenderises the whole thing rather than only browning the surface.',
    ing: [
      '270 g rolled oats',
      '1.5 tsp baking powder',
      '1 tsp ground cinnamon',
      '0.5 tsp fine sea salt',
      '480 ml whole milk',
      '2 large eggs',
      '80 ml maple syrup',
      '60 g unsalted butter, melted, plus extra for the dish',
      '1 tsp vanilla extract',
      '2 ripe bananas, sliced',
      '100 g blueberries',
      '40 g walnuts, chopped'
    ],
    st: [
      'Heat the oven to 190°C / 375°F and butter a 20 x 30 cm baking dish.',
      'Mix the oats, baking powder, cinnamon and salt in a large bowl.',
      'Whisk the milk, eggs, maple syrup, melted butter and vanilla in a second bowl.',
      'Arrange half the banana slices over the base of the dish and scatter over half the blueberries.',
      'Spread the oat mixture over the fruit and pour over the milk mixture, then tap the dish so it settles through.',
      'Top with the remaining banana, blueberries and the walnuts.',
      'Bake 30 to 35 minutes, until set in the middle and golden at the edges.',
      'Cool 5 minutes, then cut into squares and serve warm with milk or yogurt.'
    ],
    tips: [
      'Use rolled oats, not instant. Instant oats turn to paste.',
      'Tap the dish after pouring so the milk reaches the bottom.',
      'It firms as it cools, so squares hold together best after 15 minutes.'
    ],
    pair: ['Greek yogurt', 'A splash of cold milk', 'Fresh berries'],
    store: 'Refrigerate up to 5 days and reheat squares in the microwave for 45 seconds. Freeze portions for 3 months.',
    nut: [350, 9, 47, 14, 5, 20, 330]
  },

  'french-toast-casserole': {
    d: 'Cubes of brioche soaked in cinnamon custard, topped with a pecan streusel and baked until puffed. It can be assembled the night before.',
    meta: 'French toast casserole: cubed brioche soaked in a cinnamon-vanilla custard and baked under a pecan streusel. Assemble ahead and serve with maple syrup.',
    kw: ['french toast casserole', 'french toast casserole recipe', 'make ahead french toast casserole', 'baked french toast', 'french toast bake with pecan streusel'],
    why: 'It is a bread pudding with a breakfast attitude, so the bread decides everything. Brioche or challah is rich enough to hold the custard without collapsing, and drying the cubes for a while in the air means they drink the custard instead of dissolving in it. The streusel goes on top because a bare bread surface dries out in the oven, and the crisp, buttery pecan crust against the soft custard beneath is the point of the dish.',
    ing: [
      '# For the casserole',
      '450 g brioche or challah, cut into 3 cm cubes',
      '6 large eggs',
      '360 ml whole milk',
      '120 ml double cream',
      '75 g light brown sugar',
      '2 tsp ground cinnamon',
      '1 tbsp vanilla extract',
      '0.5 tsp fine sea salt',
      '1 tbsp butter, for the dish',
      '# For the streusel',
      '100 g light brown sugar',
      '60 g plain flour',
      '1 tsp ground cinnamon',
      '60 g cold unsalted butter, cubed',
      '50 g pecans, chopped',
      'Maple syrup, to serve'
    ],
    st: [
      'Butter a 23 x 33 cm baking dish and spread the bread cubes in it.',
      'Whisk the eggs, milk, cream, sugar, cinnamon, vanilla and salt until smooth and pour evenly over the bread.',
      'Press the bread down so all of it is soaked. If you have time, cover and refrigerate overnight. Otherwise leave it to soak for 30 minutes.',
      'Heat the oven to 175°C / 350°F.',
      'For the streusel, mix the sugar, flour and cinnamon, rub in the cold butter until crumbly and stir in the pecans.',
      'Scatter the streusel over the bread.',
      'Bake 45 to 50 minutes, until puffed, golden and set in the middle, with a knife coming out clean.',
      'Rest 10 minutes, then serve warm with maple syrup.'
    ],
    tips: [
      'Use rich, slightly stale bread. Soft sandwich bread turns to mush.',
      'Press the cubes under the custard so none dry out or burn.',
      'Cover with foil if the streusel is browning before the middle sets.'
    ],
    pair: ['Crisp bacon', 'Fresh berries', 'Hot coffee'],
    store: 'Refrigerate up to 4 days and reheat squares at 160°C for 15 minutes. Freeze baked squares for 2 months.',
    nut: [492, 13, 56, 24, 2, 30, 480]
  },

  'home-fries': {
    d: 'Diced potatoes parboiled, then browned in a hot skillet with onion and pepper until crisp at the edges and fluffy inside. Forty minutes.',
    meta: 'Diner-style home fries: diced potatoes parboiled, then crisped in a hot skillet with onion, pepper and smoked paprika until golden.',
    kw: ['home fries', 'home fries recipe', 'diner style home fries', 'crispy breakfast potatoes', 'skillet home fries with peppers and onions'],
    why: 'Raw diced potatoes brown before they cook through, and boiled ones fall apart in the pan, so parboiling them for five minutes is the compromise that works: the outsides are already soft and slightly roughed up, which is what gives them a crisp crust, while the middles finish in the skillet. Steam-drying after draining matters as much as the boiling, since surface water is what stops browning. Leaving them alone for the first eight minutes builds the crust.',
    ing: [
      '900 g Yukon Gold or other all-purpose potatoes, cut into 1.5 cm dice',
      '1 tsp fine sea salt, for the water',
      '3 tbsp vegetable oil',
      '1 onion, diced',
      '1 green pepper, diced',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Put the potatoes in a pot of cold water with the 1 teaspoon of salt, bring to a boil and cook 5 minutes, until just tender at the edges.',
      'Drain well and leave them in the colander to steam-dry for 5 minutes.',
      'Heat the oil in a large cast-iron skillet over medium-high heat until shimmering.',
      'Add the potatoes in a single layer and cook without stirring for 8 minutes, until the underside is deeply golden.',
      'Turn the potatoes, add the onion and pepper and cook 10 minutes, stirring every 3 minutes, until browned and crisp at the edges.',
      'Season with the paprika, garlic powder, salt and pepper, toss and cook 1 minute more.',
      'Serve hot, straight from the pan.'
    ],
    tips: [
      'Steam-dry the parboiled potatoes. Wet ones will not brown.',
      'Leave them alone for the first 8 minutes so a crust forms.',
      'Add the onion and pepper late, or they burn before the potatoes are done.'
    ],
    pair: ['Fried eggs', 'Crisp bacon', 'Buttered toast'],
    store: 'Refrigerate up to 4 days and re-crisp in a hot skillet or the air fryer for 5 minutes. Cooked potatoes freeze poorly.',
    nut: [249, 4, 38, 9, 4, 3, 560]
  },

  'crepes': {
    d: 'Thin, lacy pancakes from a pourable batter of eggs, milk and flour, rested and cooked one at a time. Thirty minutes, plus a rest.',
    meta: 'Classic French crêpes: a thin, lacy batter of eggs, milk, flour and melted butter, rested then cooked in a hot pan. Fill sweet or savoury.',
    kw: ['crepes', 'crepe recipe', 'how to make crepes', 'french crepes', 'thin crepes with milk and eggs'],
    why: 'The batter has to be thin, about the consistency of single cream, and it has to rest. Thirty minutes lets the flour hydrate fully and the gluten relax, so the crêpes are tender rather than rubbery and do not tear when flipped. The first crêpe is always a bad one, because the pan is not yet at temperature and has too much or too little butter; it is a test, not a failure. Swirl the pan the instant the batter goes in, since it sets in seconds.',
    ing: [
      '125 g plain flour',
      '1 tbsp sugar',
      '0.25 tsp fine sea salt',
      '2 large eggs',
      '250 ml whole milk',
      '60 ml water',
      '2 tbsp unsalted butter, melted, plus extra for the pan',
      'Lemon juice and sugar, or jam, to serve'
    ],
    st: [
      'Whisk the flour, sugar and salt in a bowl and make a well in the centre.',
      'Add the eggs and half the milk and whisk from the centre outwards until smooth, then whisk in the rest of the milk, the water and the melted butter.',
      'Cover and rest the batter for 30 minutes.',
      'Heat a 20 cm non-stick pan over medium heat and rub with a little butter.',
      'Pour in about 60 ml of batter, swirling the pan immediately so it coats the base thinly.',
      'Cook 1 minute, until the edges lift and the underside is golden, then flip and cook 20 seconds.',
      'Slide onto a plate and repeat, buttering the pan every second crêpe.',
      'Serve filled with lemon and sugar, jam or whatever you like, folded into quarters.'
    ],
    tips: [
      'Rest the batter. It makes crêpes tender and less likely to tear.',
      'The first crêpe is a test of the pan. Do not judge the batter by it.',
      'Add a splash of milk if the batter thickens as it rests.'
    ],
    pair: ['Lemon and sugar', 'Fresh berries and cream', 'Ham and cheese'],
    store: 'Stack with baking paper between them and refrigerate up to 3 days. Freeze for 2 months and thaw at room temperature. Reheat in a dry pan for 15 seconds a side.',
    nut: [255, 9, 30, 11, 1, 6, 180]
  }
};
