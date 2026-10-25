'use strict';

/**
 * Volume forty-seven — Australia, New Zealand, Canada and the United
 * States, with four more everyday vegetable dishes.
 *
 * Twenty-one dishes: cheese and Vegemite scrolls, a mince and cheese pie,
 * Anzac biscuits, corn fritters, a boil up and a kiwi burger, maple baked
 * beans, a sloppy joe casserole, meatloaf muffins, loaded baked potato soup,
 * johnny cakes, ants on a log, an applesauce cake, an eggless chocolate cake,
 * a dump cake, a fruit cobbler and hand pies, then a hot and sour potato
 * stir fry, a cucumber salad, soy braised potatoes and broccoli pasta.
 * Times are the recipe's own; ovens and hobs differ, so each method says
 * what to look for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'new-zealand-mince-and-cheese-pie': {
    untimed: ['cooling completely'],
    d: 'A double-crust pie of beef mince and onion in a thick gravy with melted cheddar, in a shortcrust base and puff pastry lid.',
    meta: 'New Zealand mince and cheese pie: beef mince and onion in thick gravy with cheddar, in shortcrust with a puff lid. Six servings, baked for 45 minutes.',
    kw: ['new zealand mince and cheese pie', 'mince and cheese pie', 'kiwi mince and cheese pie', 'beef mince and cheese pie', 'savoury mince pie with cheese'],
    why: 'Quick tip: cool the filling completely before it goes into the pastry. A hot filling melts the butter in the pastry before it reaches the oven, and the base turns soft, pale and wet instead of crisp.\n\nThe filling is a simple mince stew: browned beef, onion, a spoonful of flour to thicken, stock and a dash of Worcestershire sauce. Cook until it is thick enough to sit on a spoon. **A loose filling makes a pie that leaks.** The cheddar goes in at the end, stirred through once the mince has cooled slightly, so it melts in the oven.\n\nLine a deep pie dish with shortcrust pastry, fill it, brush the rim with egg and top with puff pastry. Press the edges together to seal and trim. Cut a small slit in the lid for steam.\n\nBake on a hot tray so the base cooks from underneath. The pie is ready when the lid is deep golden and puffed.',
    ing: [
      '1 tbsp vegetable oil',
      '500 g beef mince',
      '1 onion, about 150 g, finely chopped',
      '2 tbsp plain flour',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1/2 tsp black pepper',
      '100 g cheddar, grated',
      '320 g ready-rolled shortcrust pastry',
      '320 g ready-rolled puff pastry',
      '1 egg, about 50 g, beaten'
    ],
    st: [
      'Heat the oil in a pan and brown the mince for 6 minutes. Add the onion and cook for 5 minutes. Stir in the flour for 1 minute.',
      'Add the stock, Worcestershire sauce and pepper and simmer for 10 minutes until thick. Cool completely, then stir in the cheese.',
      'Heat the oven to 200°C (180°C fan) with a tray inside. Line a 23 cm pie dish with the shortcrust, fill with the mince and brush the rim with egg.',
      'Cover with the puff pastry, seal, trim and cut a slit. Brush with egg and bake on the hot tray for 45 minutes until deep golden.'
    ],
    tips: [
      'Cool the filling fully before assembling the pie.',
      'Keep the filling thick.',
      'Bake on a hot tray for a crisp base.',
      'If your oven runs hot, check at 35 minutes.'
    ],
    pair: ['Tomato sauce', 'Peas', 'Mashed potato', 'Gravy'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven until piping hot.',
    nut: [745, 28, 48, 49, 3, 4, 1000]
  },


  'new-zealand-corn-fritters': {
    d: 'Thick sweetcorn fritters with spring onion and a little flour, fried until golden and served with sour cream.',
    meta: 'New Zealand corn fritters: thick sweetcorn fritters with spring onion, fried until golden. Four servings, cooked for 15 minutes.',
    kw: ['new zealand corn fritters', 'corn fritters', 'sweetcorn fritters', 'kiwi corn fritters', 'corn fritters with spring onion'],
    why: 'In summer, when sweetcorn is cheap and nobody wants a long stand at the stove, a pan of corn fritters makes a quick lunch. The recipe uses tinned or frozen corn, so it works in any month.\n\nThe batter is plain flour, an egg, milk, baking powder and a pinch of salt. It should be thick, closer to a drop scone batter than a pancake mix. **Keep the batter thick.** A thin one spreads in the pan, and the fritters come out flat and greasy.\n\nDrain the corn well. If it is tinned, tip it into a sieve and press. Wet corn thins the batter and steams in the pan. Stir in spring onion and a few herbs for freshness.\n\nCook spoonfuls in a lightly oiled pan over a medium heat. Wait for bubbles to break on the surface before turning. Serve hot, with sour cream, sweet chilli sauce or bacon.',
    ing: [
      '150 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs, about 100 g',
      '100 ml whole milk',
      '400 g tinned sweetcorn, drained',
      '3 spring onions, about 40 g, sliced',
      '3 tbsp vegetable oil',
      '4 tbsp sour cream'
    ],
    st: [
      'Mix the flour, baking powder and salt in a bowl. Whisk in the eggs and milk to a thick batter.',
      'Stir in the corn and spring onions.',
      'Heat half the oil in a frying pan over a medium heat. Drop in spoonfuls of batter and flatten slightly. Cook for 3 minutes until bubbles appear, then turn and cook for 2 minutes more.',
      'Repeat with the remaining oil and batter. Serve with the sour cream.'
    ],
    tips: [
      'Keep the batter thick.',
      'Drain the corn well.',
      'Turn the fritters when bubbles break the surface.',
      'Keep the first batches warm in a low oven.'
    ],
    pair: ['Sour cream', 'Sweet chilli sauce', 'Crispy bacon', 'Sliced avocado'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [414, 12, 51, 18, 3, 6, 480]
  },


  'new-zealand-kiwi-burger': {
    d: 'A beef patty burger with a fried egg, sliced beetroot, cheese and lettuce in a toasted bun.',
    meta: 'New Zealand kiwi burger: beef patty with a fried egg, sliced beetroot, cheese and lettuce in a bun. Four servings, cooked for 15 minutes.',
    kw: ['new zealand kiwi burger', 'kiwi burger', 'burger with egg and beetroot', 'nz burger with beetroot', 'beef burger with fried egg and beetroot'],
    why: 'Quick tip: cook the patties first and the eggs last. The patties can rest while you fry the eggs, and the eggs go on the burgers still hot, with the yolk just beginning to run into the bun.\n\nThe kiwi burger is a New Zealand takeaway classic: a beef patty topped with a fried egg and sliced beetroot, sometimes with cheese, lettuce and tomato. The beetroot is the unusual part, and it brings a sweet, earthy sharpness that cuts the richness of the egg and meat.\n\nShape the patties gently, with as little handling as possible, and press a dent in the middle. **Salt the outside only.** Salt mixed through the meat firms the texture into something bouncy.\n\nToast the buns in the pan after the patties come out, cut-side down, so they soak up the beef juices. Layer from the bottom up: lettuce, patty, cheese, beetroot, egg. Pineapple rings are another common addition, though the egg and beetroot are the classic pairing.',
    ing: [
      '500 g beef mince',
      '1/2 tsp black pepper',
      '1/2 tsp salt',
      '3 tbsp vegetable oil',
      '4 eggs, about 200 g',
      '4 slices cheddar, about 80 g',
      '4 burger buns, about 240 g',
      '8 slices tinned beetroot, about 120 g',
      '40 g lettuce leaves'
    ],
    st: [
      'Shape the mince with the pepper into 4 patties about 2 cm thick, pressing a dent in each.',
      'Heat 1 tbsp of the oil in a large frying pan over a high heat. Salt the patties and cook for 4 minutes on each side. Top with the cheese for the last minute. Rest on a plate.',
      'Toast the buns cut-side down in the pan for 1 minute. Fry the eggs in the remaining oil until the whites are set and the yolks are runny.',
      'Build each burger with lettuce, patty, beetroot and egg.'
    ],
    tips: [
      'Shape the patties lightly.',
      'Salt just before cooking.',
      'Drain the beetroot well so it does not soak the bun.',
      'Fry the eggs last so they go on hot.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Tomato sauce', 'Onion rings'],
    store: 'Best eaten straight away. Cooked patties keep in the fridge for 2 days.',
    nut: [687, 41, 34, 43, 3, 7, 890]
  },

  'canadian-maple-baked-beans': {
    d: 'White beans baked slowly with maple syrup, bacon, onion and mustard in a rich sticky sauce.',
    meta: 'Canadian maple baked beans: white beans baked with maple syrup, bacon, onion and mustard in a sticky sauce. Eight servings, baked for 90 minutes.',
    kw: ['canadian maple baked beans', 'maple baked beans', 'baked beans with maple syrup', 'maple and bacon baked beans', 'slow baked beans with maple'],
    why: 'Most home versions come out too sweet or too watery, and the fix is the balance of the sauce and the long, slow bake. Maple syrup is sweet, so it needs mustard and a splash of vinegar to cut through, and the dish needs long enough in the oven to thicken.\n\nTinned white beans save the soaking and the first hour of simmering. Drain and rinse them, then stir them into a sauce of cooked bacon, onion, maple syrup, tomato paste, mustard and water. **Taste the sauce before it goes in the oven.** Once the beans are baking you cannot rescue a sauce that is too sweet.\n\nBake in a covered dish for the first hour, to keep the beans soft. Take the lid off for the last half hour. The sauce reduces and darkens, and the top goes sticky at the edges.\n\nLeave the beans to stand for 15 minutes before serving. They thicken further as they cool.',
    ing: [
      '150 g streaky bacon, chopped',
      '1 onion, about 150 g, chopped',
      '1.5 kg tinned white beans, drained',
      '120 ml maple syrup',
      '2 tbsp tomato paste',
      '2 tbsp Dijon mustard',
      '1 tbsp apple cider vinegar',
      '300 ml water',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan).',
      'Cook the bacon in an ovenproof pan for 5 minutes. Add the onion and cook for 5 minutes.',
      'Stir in the beans, maple syrup, tomato paste, mustard, vinegar, water, salt and pepper and bring to a simmer.',
      'Cover and bake for 60 minutes, then uncover and bake for 30 minutes more until thick and sticky. Rest for 15 minutes.'
    ],
    tips: [
      'Taste the sauce before baking.',
      'Keep the dish covered for the first hour.',
      'Add a splash of water if the sauce gets too thick.',
      'Leave out the bacon for a vegetarian version.'
    ],
    pair: ['Crusty bread', 'Fried eggs', 'Sausages', 'Coleslaw'],
    store: 'Keeps in the fridge for 5 days. Freezes well for up to 3 months.',
    nut: [276, 16, 44, 4, 10, 14, 1070]
  },

  'sloppy-joe-casserole': {
    d: 'Sloppy joe beef mince in a tomato sauce baked under a golden, cheesy scone-dough topping.',
    meta: 'Sloppy joe casserole: sloppy joe beef mince in tomato sauce baked under a cheesy scone-dough topping. Six servings, cooked for 30 minutes.',
    kw: ['sloppy joe casserole', 'sloppy joe bake', 'sloppy joe casserole with cheese topping', 'beef sloppy joe bake', 'sloppy joe casserole with biscuits'],
    why: 'The first sign it is ready is the smell: sweet, tangy tomato and browned beef bubbling at the edges of the dish, with cheese turning golden on top. It is a sloppy joe without the bun, and the topping takes the place of the bread.\n\nCook the mince first, in a wide pan, until it is browned and the liquid has cooked away. Add the onion, then the tomato sauce, ketchup, mustard and brown sugar. Simmer until thick. **Thick is important.** A runny filling soaks the topping from below and leaves it pale.\n\nThe topping is a scone dough made with self-raising flour, butter and milk, with cheese worked in. Drop spoonfuls over the filling, leaving gaps for steam.\n\nBake until the topping is risen and golden. A tray under the dish catches any bubbling over. Rest for 5 minutes before serving. Pickles or sliced gherkins on the side cut through the sweet, rich filling nicely.',
    ing: [
      '1 tbsp vegetable oil',
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, diced',
      '200 g tomato ketchup',
      '200 g passata',
      '1 tbsp soft brown sugar',
      '1 tsp mustard',
      '1/2 tsp salt',
      '200 g self-raising flour',
      '50 g butter, cold and diced',
      '100 g cheddar, grated',
      '120 ml whole milk'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan).',
      'Heat the oil in an ovenproof pan and brown the mince for 6 minutes. Add the onion and pepper and cook for 4 minutes.',
      'Stir in the ketchup, passata, sugar, mustard and salt and simmer for 5 minutes until thick.',
      'Rub the butter into the flour, stir in most of the cheese and the milk to a soft dough. Drop spoonfuls over the beef and sprinkle with the remaining cheese. Bake for 20 minutes until golden.'
    ],
    tips: [
      'Cook the filling until it is thick.',
      'Leave gaps in the topping.',
      'Do not overwork the dough.',
      'Rest the dish for 5 minutes before serving.'
    ],
    pair: ['Green salad', 'Coleslaw', 'Sweetcorn', 'Pickles'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [524, 25, 43, 28, 3, 14, 720]
  },

  'meatloaf-muffins': {
    d: 'Individual meatloaves of beef mince, onion and breadcrumbs baked in a muffin tin with a ketchup glaze.',
    meta: 'Meatloaf muffins: individual meatloaves of beef mince, onion and breadcrumbs baked in a muffin tin with a ketchup glaze. Six servings, baked for 25 minutes.',
    kw: ['meatloaf muffins', 'mini meatloaves in muffin tin', 'individual meatloaves', 'muffin tin meatloaf', 'meatloaf cups'],
    why: 'Why bake a meatloaf in a muffin tin? Because small portions cook in about half the time of a loaf, so the whole dinner is ready in 40 minutes rather than an hour, and each portion gets more of the sticky, caramelised glaze.\n\nThe mixture is beef mince, breadcrumbs, an egg, grated onion and a few seasonings. Mix with your hands, lightly, only until combined. **Overmixing makes the meatloaf tough.** The meat should still look loose and slightly shaggy.\n\nPress the mix into the greased tin, mounding it slightly in the middle. A spoonful of glaze goes on top, made of ketchup, brown sugar and a splash of vinegar. It bubbles and thickens in the oven.\n\nCheck that the centres are cooked through: no pink, and the juices run clear. Rest for 5 minutes in the tin, which lets the meat firm up so it lifts out cleanly. Leftover muffins slice well into a sandwich the next day.',
    ing: [
      '600 g beef mince',
      '1 onion, about 150 g, grated',
      '60 g breadcrumbs',
      '1 egg, about 50 g',
      '2 tbsp Worcestershire sauce',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '100 g tomato ketchup',
      '1 tbsp soft brown sugar',
      '1 tsp white wine vinegar'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan) and grease a 12-hole muffin tin.',
      'Mix the mince, onion, breadcrumbs, egg, Worcestershire sauce, salt and pepper gently. Press into 12 holes.',
      'Stir the ketchup, sugar and vinegar together and spoon over the tops.',
      'Bake for 25 minutes until cooked through and the glaze is sticky. Rest in the tin for 5 minutes.'
    ],
    tips: [
      'Mix lightly so the muffins stay tender.',
      'Grease the tin well.',
      'Check that the middles are cooked through.',
      'Rest them before lifting out.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Peas', 'Gravy'],
    store: 'Keeps in the fridge for 3 days. Freezes well for up to 2 months.',
    nut: [300, 22, 17, 16, 1, 8, 740]
  },

  'loaded-baked-potato-soup': {
    d: 'A thick potato soup with bacon, cheddar and spring onion, topped like a loaded baked potato.',
    meta: 'Loaded baked potato soup: thick potato soup with bacon, cheddar and spring onion, topped with sour cream. Six servings, cooked for 30 minutes.',
    kw: ['loaded baked potato soup', 'baked potato soup', 'potato soup with bacon and cheese', 'loaded potato soup', 'creamy potato soup with cheddar'],
    why: 'Quick tip: mash part of the soup and leave the rest chunky. A smooth soup tastes like mashed potato; a chunky one tastes like the baked potato it is named after. Half and half gives the best of both.\n\nUse floury potatoes, such as Maris Piper, which break down and thicken the soup as they cook. Peel and dice them into 2 cm pieces so they soften in about 15 minutes. **Do not use a blender.** It turns the starch gluey. A potato masher, used lightly in the pot, is all you need.\n\nCook the bacon first until crisp, then lift it out and use some of the fat for the onion. Flour thickens the base, then milk and stock are added in stages to keep the soup smooth.\n\nCheddar goes in at the end, off the heat, so it melts without turning grainy. Serve with the crisp bacon, spring onions and sour cream on top.',
    ing: [
      '150 g bacon, diced',
      '1 tbsp butter',
      '1 onion, about 150 g, chopped',
      '2 tbsp plain flour',
      '600 ml chicken stock',
      '500 ml whole milk',
      '900 g floury potatoes, peeled and cut into 2 cm cubes',
      '150 g cheddar, grated',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '3 spring onions, about 40 g, sliced',
      '4 tbsp sour cream'
    ],
    st: [
      'Cook the bacon in a large pan for 6 minutes until crisp. Lift out onto kitchen paper.',
      'Add the butter and onion to the pan and cook for 5 minutes. Stir in the flour for 1 minute.',
      'Add the stock and milk gradually, stirring, then the potatoes. Simmer for 15 minutes until tender.',
      'Mash roughly in the pan. Take off the heat, stir in most of the cheese, salt and pepper and serve with the bacon, spring onions, sour cream and remaining cheese.'
    ],
    tips: [
      'Use floury potatoes.',
      'Mash roughly, not smooth.',
      'Add the cheese off the heat.',
      'Add milk if the soup gets too thick.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Coleslaw', 'Crackers'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of milk.',
    nut: [378, 18, 36, 18, 4, 7, 1120]
  },

  'johnny-cakes': {
    d: 'Griddled cornmeal cakes made with milk, egg and a little sugar, served hot with butter and maple syrup.',
    meta: 'Johnny cakes: griddled cornmeal cakes made with milk, egg and a little sugar, served with butter. Four servings, cooked for 15 minutes.',
    kw: ['johnny cakes', 'johnnycakes', 'cornmeal johnny cakes', 'cornmeal pancakes', 'griddled cornmeal cakes'],
    why: 'Keep the heat low. That is the short, sharp advice for cornmeal cakes, because cornmeal browns fast and the outside can burn before the middle has set. A medium-low pan gives a slow, even golden crust.\n\nThe batter is mostly cornmeal, with a little flour to bind it, plus baking powder, an egg, milk and a spoonful of sugar. Let it stand for 5 minutes before cooking. **Do not skip the rest.** Cornmeal is gritty at first and needs time to soak up the liquid, and the cakes come out smoother if it has.\n\nPour or spoon the batter onto a lightly greased pan in rounds about 8 cm wide. They are thin and stay small. Wait for the bubbles to appear and the edges to look set before turning.\n\nJohnny cakes are best straight from the pan, with butter melting on top. Maple syrup, honey or jam all work.',
    ing: [
      '150 g fine cornmeal',
      '50 g plain flour',
      '1 tsp baking powder',
      '2 tbsp sugar',
      '1/2 tsp salt',
      '250 ml whole milk',
      '1 egg, about 50 g',
      '2 tbsp melted butter',
      '1 tbsp vegetable oil, for the pan',
      '4 tbsp maple syrup'
    ],
    st: [
      'Mix the cornmeal, flour, baking powder, sugar and salt. Whisk the milk, egg and melted butter and stir into the dry mix. Rest for 5 minutes.',
      'Heat a frying pan over a medium-low heat and brush with a little of the oil.',
      'Spoon in batter to make rounds about 8 cm wide. Cook for 3 minutes until bubbles appear, flip and cook for 2 minutes more.',
      'Repeat with the rest of the oil and batter. Serve with the syrup.'
    ],
    tips: [
      'Rest the batter for 5 minutes.',
      'Cook on a medium-low heat.',
      'Wait for bubbles before turning.',
      'Serve them hot with butter.'
    ],
    pair: ['Maple syrup', 'Butter', 'Bacon', 'Fried eggs'],
    store: 'Best eaten fresh. Keeps in the fridge for 2 days; reheat in a toaster.',
    nut: [406, 8, 62, 14, 3, 22, 460]
  },

  'ants-on-a-log': {
    d: 'Celery sticks filled with peanut butter and topped with a row of raisins.',
    meta: 'Ants on a log: celery sticks filled with peanut butter and topped with raisins. Four servings, no cooking needed.',
    kw: ['ants on a log', 'celery with peanut butter and raisins', 'ants on a log snack', 'peanut butter celery sticks', 'celery sticks with raisins'],
    why: 'A snack for four, on a school afternoon or at any other time when everyone is hungry and the oven is off. Ants on a log is celery filled with peanut butter and topped with raisins, and the name is as far as the description needs to go.\n\nChoose crisp, firm celery with bright, tight stalks. Limp celery gets stringy and bends when you spread it. Wash it, trim the ends and cut each stalk into sticks about 8 cm long. **Pull the strings off if they are tough.** A small peeler or a paring knife does it in a few seconds, and the snack is much easier to bite.\n\nSpread the peanut butter in the hollow of each stick, filling it level. Smooth peanut butter is easier for small children to eat, but crunchy adds texture.\n\nPress the raisins along the top in a row. Eat at once, or keep covered in the fridge for a couple of hours. Replace the raisins with seeds or dried cranberries if you like.',
    ing: [
      '6 celery sticks, about 300 g',
      '100 g smooth peanut butter',
      '40 g raisins'
    ],
    st: [
      'Wash the celery, trim the ends and cut each stick into 3 pieces about 8 cm long.',
      'Spread the peanut butter into the hollow of each piece.',
      'Press 3 or 4 raisins along the top of each.'
    ],
    tips: [
      'Choose crisp celery.',
      'Pull off tough strings first.',
      'Fill the hollow level.',
      'Swap the raisins for sunflower seeds if you prefer.'
    ],
    pair: ['Apple slices', 'A glass of milk', 'Carrot sticks', 'Yoghurt'],
    store: 'Keeps in the fridge for 1 day in a covered container.',
    nut: [205, 7, 15, 13, 4, 8, 60]
  },

  'applesauce-cake': {
    d: 'A moist spiced cake made with applesauce, brown sugar and cinnamon, baked in a loaf tin and dusted with icing sugar.',
    meta: 'Applesauce cake: moist spiced cake made with applesauce, brown sugar and cinnamon, baked in a loaf tin. Ten servings, baked for 40 minutes.',
    kw: ['applesauce cake', 'apple sauce cake', 'moist applesauce cake', 'spiced applesauce loaf cake', 'applesauce cake with cinnamon'],
    why: 'Short, sharp advice: do not overmix. A cake made with applesauce is moist by nature, but beating the batter hard builds gluten, and the loaf bakes tough with tunnels inside. Stir the wet and dry ingredients together until the flour just disappears.\n\nUse unsweetened applesauce, or make your own and leave the sugar out of it. Sweetened applesauce makes a cloying cake. The sauce replaces most of the butter, which is why the crumb stays soft for days. **Measure the flour carefully.** Spooned lightly into the cup and levelled, not scooped, it keeps the cake tender.\n\nCinnamon, nutmeg and a handful of raisins are the traditional additions. Brown sugar gives a deeper flavour than white.\n\nBake in a lined loaf tin until a skewer comes out clean. Cool in the tin for 10 minutes before turning out, then dust with icing sugar once cold. The cake is better the next day.',
    ing: [
      '250 g plain flour',
      '1 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '150 g soft brown sugar',
      '60 ml vegetable oil',
      '2 eggs, about 100 g',
      '350 g unsweetened applesauce',
      '80 g raisins',
      '2 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a 900 g loaf tin.',
      'Mix the flour, bicarbonate of soda, cinnamon, nutmeg and salt in a bowl.',
      'Whisk the sugar, oil, eggs and applesauce, then fold into the dry mix with the raisins until just combined.',
      'Pour into the tin and bake for 40 minutes until a skewer comes out clean. Cool in the tin for 10 minutes, then on a rack. Dust with the icing sugar.'
    ],
    tips: [
      'Stir the batter as little as you can.',
      'Use unsweetened applesauce.',
      'If your oven runs hot, check at 35 minutes.',
      'Wait until the cake is cold before dusting.'
    ],
    pair: ['Tea', 'Plain yoghurt', 'Whipped cream', 'Custard'],
    store: 'Keeps in an airtight tin for 4 days. Freezes well for up to 2 months.',
    nut: [267, 4, 47, 7, 2, 25, 260]
  },

  'depression-cake': {
    untimed: ['cooling completely'],
    d: 'A rich chocolate cake made without eggs, milk or butter, mixed in the tin with vinegar, oil and cocoa.',
    meta: 'Depression cake: a chocolate cake made without eggs, milk or butter, using oil, vinegar and cocoa. Nine servings, baked for 35 minutes.',
    kw: ['depression cake', 'eggless chocolate cake', 'wacky cake', 'chocolate cake without eggs or milk', 'one bowl chocolate cake with vinegar'],
    why: 'This is what to bake in the last week of the month, when the eggs and butter are gone and the cupboard still holds flour, sugar, cocoa and a bottle of vinegar. The cake needs none of the first three, and that is why it is such a useful recipe.\n\nThe vinegar looks strange, but it has a job. It reacts with the bicarbonate of soda to produce bubbles that lift the cake, standing in for the eggs. The taste disappears in baking. **Add the vinegar last, and bake straight away.** The reaction begins at once, and a batter left to stand loses its lift.\n\nMix the dry ingredients first, then make three small wells and add the vanilla, vinegar and oil. Pour in the water and stir until smooth. There are no lumps to worry about.\n\nBake in a small square tin until a skewer comes out clean. Cool and dust with icing sugar, or top with a thin chocolate icing.',
    ing: [
      '200 g plain flour',
      '150 g sugar',
      '3 tbsp unsweetened cocoa powder',
      '1 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '1 tsp vanilla extract',
      '1 tbsp white vinegar',
      '80 ml vegetable oil',
      '250 ml cold water',
      '2 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a 20 cm square tin.',
      'Mix the flour, sugar, cocoa, bicarbonate of soda and salt in the tin or a bowl.',
      'Add the vanilla, vinegar, oil and water and stir quickly until smooth.',
      'Pour into the lined tin and bake for 35 minutes until a skewer comes out clean. Cool completely and dust with the icing sugar.'
    ],
    tips: [
      'Add the vinegar last and bake at once.',
      'Stir until just smooth.',
      'If your oven runs hot, check at 30 minutes.',
      'Wait for the cake to cool before cutting.'
    ],
    pair: ['Tea', 'Whipped cream', 'Fresh berries', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 3 days. Freezes well for up to 2 months.',
    nut: [241, 3, 37, 9, 1, 20, 270]
  },

  'dump-cake': {
    d: 'A cake made by layering tinned pineapple, cherry pie filling and dry cake mix in a dish, dotted with butter and baked.',
    meta: 'Dump cake: tinned pineapple, cherry pie filling and dry cake mix layered in a dish, dotted with butter and baked. Ten servings, baked for 45 minutes.',
    kw: ['dump cake', 'cherry pineapple dump cake', 'dump cake with cake mix', 'easy dump cake', 'dump cake with cherry pie filling'],
    why: 'Nothing is mixed. That is the whole idea of a dump cake, where the ingredients are tipped into the dish in layers: fruit at the bottom, dry cake mix over it and butter on top. As it bakes, the butter melts into the mix and forms a golden, crumbly crust, and the fruit bubbles underneath like a cobbler.\n\nThe layers matter more than they look. Spread the fruit evenly, then sprinkle the dry cake mix over it in a thin, even layer without stirring. **Do not stir or press.** Pockets of dry mix would stay powdery, so cover every part of the surface.\n\nThe butter goes on in thin slices. Cover as much of the surface as you can, since any dry patch will stay floury. Melted butter poured over works too, and it spreads more evenly.\n\nBake until the top is golden and the fruit is bubbling at the edges. Serve warm, with ice cream or cream.',
    ing: [
      '400 g tinned crushed pineapple, with its juice',
      '600 g tinned cherry pie filling',
      '430 g dry yellow cake mix',
      '150 g butter, thinly sliced',
      '40 g flaked almonds'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and grease a 23 x 33 cm baking dish.',
      'Spread the pineapple with its juice in the dish, then spoon the cherry pie filling evenly over it.',
      'Sprinkle the dry cake mix over the top in an even layer. Cover with the butter slices and scatter with the almonds.',
      'Bake for 45 minutes until the top is golden and the fruit is bubbling. Rest for 10 minutes before serving.'
    ],
    tips: [
      'Do not stir the layers.',
      'Cover the whole surface with butter.',
      'If the top browns too fast, cover loosely with foil.',
      'Serve it warm with ice cream.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Custard', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Reheat in a warm oven.',
    nut: [399, 3, 54, 19, 2, 32, 240]
  },

  'fruit-cobbler': {
    d: 'Mixed fruit baked under a golden drop-scone topping of flour, butter, sugar and milk.',
    meta: 'Fruit cobbler: mixed fruit baked under a golden drop-scone topping of flour, butter and milk. Eight servings, baked for 40 minutes.',
    kw: ['fruit cobbler', 'mixed fruit cobbler', 'easy fruit cobbler', 'cobbler with scone topping', 'baked fruit cobbler'],
    why: 'It looks like a pie and cooks like a pudding, which is why a cobbler is the easiest of baked fruit desserts: no pastry to roll, no lattice to weave, just fruit and a scone-like topping dropped on in spoonfuls.\n\nFrozen fruit works beautifully and is cheaper out of season. Use it straight from the freezer, and toss it with sugar and cornflour so the juices thicken as they bake. **Do not thaw the fruit first.** Thawed fruit leaks juice and makes a watery base.\n\nThe topping is a soft dough of flour, sugar, baking powder, butter and milk. Rub the cold butter into the dry ingredients, then stir in the milk until just combined. Drop spoonfuls over the fruit, leaving gaps so the juice can bubble up between them.\n\nBake until the topping is golden and the fruit is bubbling. A sprinkle of sugar on top gives a crisp, sparkling crust.',
    ing: [
      '800 g frozen mixed fruit',
      '80 g sugar',
      '1 tbsp cornflour',
      '1 tbsp lemon juice',
      '200 g self-raising flour',
      '2 tbsp sugar, for the topping',
      '80 g butter, cold and diced',
      '150 ml whole milk',
      '1 tbsp sugar, to finish'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan).',
      'Toss the frozen fruit with the sugar, cornflour and lemon juice and spread in a 23 x 30 cm baking dish.',
      'Rub the butter into the flour and topping sugar until like breadcrumbs. Stir in the milk to a soft dough.',
      'Drop spoonfuls over the fruit, leaving gaps. Sprinkle with the finishing sugar and bake for 40 minutes until golden and bubbling.'
    ],
    tips: [
      'Use the fruit straight from the freezer.',
      'Leave gaps between the spoonfuls of topping.',
      'Rub the butter in with cold hands.',
      'Serve warm, not hot.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Cream', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Reheat in a warm oven.',
    nut: [281, 4, 46, 9, 4, 24, 10]
  },

  'hand-pies': {
    untimed: ['cooling completely'],
    d: 'Small shortcrust pastry pies filled with spiced apple, crimped with a fork and baked until golden.',
    meta: 'Hand pies: small shortcrust pastry pies filled with spiced apple, crimped and baked until golden. Eight servings, baked for 25 minutes.',
    kw: ['hand pies', 'apple hand pies', 'homemade hand pies', 'baked apple hand pies', 'small apple pies'],
    why: 'Hand pies began as portable meals for people who worked outdoors, and the format still makes sense: a small parcel of fruit that can be eaten without a plate or a fork. The pastry here is ready-rolled, which turns a project into a quick bake.\n\nCook the apple filling first, briefly, until just soft. Raw apple shrinks as it bakes and leaves an air gap under the crust. Let the filling cool completely before filling the pastry. **Warm filling melts the pastry.** Cut circles with a bowl or cutter, put a spoonful in the middle and fold over.\n\nSeal the edges firmly with a fork, and prick the top a couple of times for steam. Do not overfill, or the filling bursts out during baking and sticks to the tray.\n\nBrush with egg and sprinkle with sugar for a glossy, crisp crust. Bake until deep golden, and cool on a rack. They are good warm or cold.',
    ing: [
      '500 g apples, peeled, cored and diced',
      '50 g sugar',
      '1/2 tsp ground cinnamon',
      '1 tbsp lemon juice',
      '1 tbsp cornflour',
      '640 g ready-rolled shortcrust pastry',
      '1 egg, about 50 g, beaten',
      '1 tbsp sugar, to finish'
    ],
    st: [
      'Cook the apples with the sugar, cinnamon and lemon juice in a pan for 8 minutes until just soft. Stir in the cornflour and cook for 1 minute. Cool completely.',
      'Heat the oven to 200°C (180°C fan) and line a tray. Cut 16 circles about 10 cm wide from the pastry.',
      'Spoon filling onto 8 circles, brush the edges with egg, top with the other circles and press the edges with a fork. Prick the tops.',
      'Brush with egg, sprinkle with the sugar and bake for 25 minutes until golden. Cool on a rack.'
    ],
    tips: [
      'Cool the filling fully.',
      'Do not overfill the pies.',
      'Seal the edges well.',
      'Prick the tops so steam can escape.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Tea', 'Cream'],
    store: 'Keeps in an airtight tin for 3 days. Freezes well for up to 2 months.',
    nut: [430, 6, 52, 22, 3, 16, 490]
  },

  'hot-and-sour-potato-strips': {
    d: 'Thin potato strips stir-fried over a high heat with garlic, dried chilli and vinegar until crisp-tender.',
    meta: 'Hot and sour potato strips: thin potato strips stir-fried with garlic, dried chilli and vinegar. Four servings, cooked for 10 minutes.',
    kw: ['hot and sour potato strips', 'chinese hot and sour potatoes', 'stir fried shredded potatoes', 'sour and spicy potato strips', 'shredded potato stir fry with vinegar'],
    why: 'Rinse the potatoes. That is the single most useful instruction for this dish, because the shreds should end up crisp and separate, and the starch on their surface makes them stick together into a gluey clump. A few rinses in cold water wash it away.\n\nCut the potatoes into thin matchsticks, about 3 mm thick. A sharp knife works, though a mandoline or a julienne peeler is faster. Soak the strips in cold water for 5 minutes, then drain and dry them well. **Cook them fast.** The dish takes 5 minutes in a hot wok, and a longer time turns the potato soft.\n\nDried chillies and garlic go into the hot oil first, just long enough to scent it. The potato goes in next, and the vinegar goes in near the end, so its sharpness stays bright.\n\nThe finished strips should be firm and slightly translucent, with a bite like a raw carrot.',
    ing: [
      '500 g waxy potatoes, cut into thin matchsticks',
      '3 tbsp vegetable oil',
      '3 dried red chillies',
      '3 garlic cloves, sliced',
      '3 spring onions, about 40 g, sliced',
      '2 tbsp rice vinegar',
      '1 tbsp soy sauce',
      '1/2 tsp salt'
    ],
    st: [
      'Soak the potato strips in cold water for 5 minutes, rinse until the water runs clear, and drain and dry well.',
      'Heat the oil in a wok over a high heat. Fry the chillies and garlic for 20 seconds.',
      'Add the potatoes and stir fry for 4 minutes until just tender but still firm.',
      'Add the vinegar, soy sauce, salt and spring onions and toss for 1 minute. Serve at once.'
    ],
    tips: [
      'Rinse the strips well.',
      'Dry them before they go in the wok.',
      'Keep the heat high.',
      'Taste one strip before serving to check the bite.'
    ],
    pair: ['Steamed rice', 'Stir fried greens', 'Fried egg', 'Noodles'],
    store: 'Best eaten straight away. The strips go soft in the fridge.',
    nut: [207, 3, 24, 11, 3, 2, 530]
  },

  'sichuan-cucumber-salad': {
    d: 'Smashed cucumber pieces tossed with garlic, rice vinegar, soy sauce, sesame oil and chilli oil.',
    meta: 'Sichuan cucumber salad: smashed cucumber tossed with garlic, rice vinegar, soy sauce and chilli oil. Four servings, no cooking needed.',
    kw: ['sichuan cucumber salad', 'smashed cucumber salad', 'chinese cucumber salad', 'cucumber salad with garlic and chilli oil', 'spicy cucumber salad'],
    why: 'Smash the cucumber. That is the short, sharp rule behind this salad, and it works better than slicing for a good reason: the rough, split edges of smashed cucumber grip the dressing, while smooth slices let it slide off.\n\nLay each cucumber on the board and whack it with the flat of a knife or a rolling pin until it splits. Then break it into bite-size pieces by hand. Sprinkle with salt and leave for 10 minutes. **Drain off the liquid.** It is bitter and dilutes the dressing.\n\nThe dressing is made of garlic, rice vinegar, soy sauce, a little sugar, sesame oil and chilli oil, all stirred together. Taste it on its own first. It should be sharp, savoury and slightly sweet.\n\nToss the cucumber with the dressing just before serving. It softens within an hour, so eat it fresh and crisp. Toasted sesame seeds on top add a nutty crunch if you have them.',
    ing: [
      '2 cucumbers, about 600 g',
      '1/2 tsp salt',
      '2 garlic cloves, crushed',
      '2 tbsp rice vinegar',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '1 tsp sesame oil',
      '1 tbsp chilli oil'
    ],
    st: [
      'Smash the cucumbers with the flat of a knife until they split and cut into bite-size pieces. Toss with the salt and leave for 10 minutes.',
      'Drain off the liquid.',
      'Mix the garlic, vinegar, soy sauce, sugar, sesame oil and chilli oil.',
      'Toss the cucumber with the dressing and serve at once.'
    ],
    tips: [
      'Smash, do not slice.',
      'Salt the cucumber and drain it.',
      'Dress the salad at the last moment.',
      'Taste the dressing before pouring it on.'
    ],
    pair: ['Steamed rice', 'Noodles', 'Dumplings', 'Grilled meat'],
    store: 'Best eaten within an hour. Keeps in the fridge for 1 day, but softens.',
    nut: [49, 2, 8, 1, 1, 4, 520]
  },

  'gamja-jorim': {
    d: 'Small potatoes braised in a sweet and salty soy glaze until tender and shiny, a Korean side dish.',
    meta: 'Gamja jorim: small potatoes braised in a sweet and salty soy glaze until tender and shiny. Four servings, cooked for 20 minutes.',
    kw: ['gamja jorim', 'korean braised potatoes', 'korean soy braised potatoes', 'korean potato side dish', 'braised potatoes in soy sauce'],
    why: 'Does a side dish of braised potatoes count as a main? In Korea, it often does, with a bowl of rice and a few other small plates. Gamja jorim is potatoes simmered in soy sauce and sugar until the liquid reduces to a sticky glaze.\n\nCut the potatoes into 3 cm chunks, or use baby potatoes whole. Rinse them to wash off the starch, which would cloud the glaze. Fry them briefly in oil first, until the outsides turn translucent. **Fry before braising.** The oil seals the surface and stops the potatoes turning to mush in the sauce.\n\nThe braising liquid is soy sauce, sugar, a little water and a few drops of sesame oil. Simmer gently, with the lid off after the first few minutes, until the liquid is almost gone.\n\nStir often at the end. The glaze thickens and can catch quickly. Finish with sesame seeds. A little extra water goes in if the potatoes are not yet tender when the glaze is thick.',
    ing: [
      '600 g small potatoes, cut into 3 cm chunks',
      '2 tbsp vegetable oil',
      '3 tbsp soy sauce',
      '2 tbsp sugar',
      '150 ml water',
      '1 tsp sesame oil',
      '1 tbsp sesame seeds',
      '2 spring onions, about 20 g, sliced'
    ],
    st: [
      'Rinse the potato chunks and dry them. Fry in the oil in a wide pan for 4 minutes until the edges turn translucent.',
      'Add the soy sauce, sugar and water and bring to the boil.',
      'Lower the heat, partly cover and simmer for 10 minutes. Uncover and cook for 4 minutes, stirring often, until the glaze is thick.',
      'Stir in the sesame oil and sprinkle with the sesame seeds and spring onions.'
    ],
    tips: [
      'Rinse the potatoes to remove surface starch.',
      'Fry them briefly before braising.',
      'Stir often at the end so the glaze does not burn.',
      'Taste the glaze and add a pinch of sugar if it is too salty.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Fried egg', 'Seaweed'],
    store: 'Keeps in the fridge for 4 days. Good cold or reheated.',
    nut: [229, 4, 33, 9, 4, 8, 670]
  },

  'pasta-ai-broccoli': {
    d: 'Short pasta cooked with broccoli until the florets break down into a green sauce, with garlic, chilli and olive oil.',
    meta: 'Pasta ai broccoli: short pasta cooked with broccoli until it breaks down into a sauce with garlic and chilli. Four servings, cooked for 20 minutes.',
    kw: ['pasta ai broccoli', 'pasta with broccoli', 'italian broccoli pasta', 'broccoli and garlic pasta', 'pasta con i broccoli'],
    why: 'Overcook the broccoli. That is the opposite of the usual rule, and the whole point of this dish, because broccoli cooked until it is soft and starting to break down becomes a rough, savoury sauce that coats the pasta.\n\nBreak the broccoli into small florets and slice the stalk thinly. Boil them in the same pot as the pasta, in well-salted water, and add the pasta when the broccoli has had a few minutes. Both finish together. **Do not drain it too well.** A little of the starchy cooking water is what binds the sauce.\n\nIn a wide pan, warm olive oil with sliced garlic and chilli flakes until the garlic just begins to colour. Tip in the drained pasta and broccoli and crush the florets with the back of a spoon. They fall apart into a green, nubbly sauce.\n\nFinish with parmesan and a splash of pasta water. Add more oil at the table if you like.',
    ing: [
      '350 g penne',
      '500 g broccoli, in small florets',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt',
      '40 g parmesan, grated'
    ],
    st: [
      'Boil the broccoli in a large pan of well-salted water for 4 minutes. Add the penne to the same water and cook according to the packet. Keep a cup of the water, then drain loosely.',
      'Meanwhile, warm the oil in a wide pan over a low heat with the garlic and chilli flakes for 2 minutes until the garlic just starts to colour.',
      'Add the pasta and broccoli with a splash of the water and the salt. Crush the broccoli with a spoon as you toss for 2 minutes.',
      'Serve with the parmesan.'
    ],
    tips: [
      'Cook the broccoli until very soft.',
      'Keep some of the pasta water.',
      'Crush the florets into the pasta.',
      'Add an anchovy with the garlic for extra depth.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Grated parmesan'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [551, 19, 76, 19, 6, 5, 490]
  }
};
