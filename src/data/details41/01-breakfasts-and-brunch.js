'use strict';

/**
 * Volume forty-one — breakfasts and brunch.
 *
 * Pancakes and waffles, French toast, eggs, the full breakfasts of Ireland
 * and Scotland, overnight oats, and the Australian and New Zealand slices
 * and scrolls that go with a morning cup of tea. Times are the recipe's own;
 * hobs and ovens differ, so each method says when to check early. Nutrition
 * is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'cinnamon-roll-pancakes': {
    d: 'Fluffy buttermilk-style pancakes with a ribbon of cinnamon butter swirled through each one and a cream cheese icing on top.',
    meta: 'Cinnamon roll pancakes: fluffy pancakes with a swirl of cinnamon butter and cream cheese icing. Four servings, cooked for 15 minutes.',
    kw: ['cinnamon roll pancakes', 'easy cinnamon roll pancakes', 'cinnamon swirl pancakes', 'pancakes with cream cheese icing', 'cinnamon pancakes'],
    why: 'The first sign they are ready is the smell: butter and cinnamon catching on a hot pan. That smell is also the warning, because the swirl is mostly sugar and burns quickly.\n\nMake the batter first and leave it lumpy. Overmixed batter gives flat, chewy pancakes. **Cook the pancakes over medium heat, not high.** A hot pan browns the swirl before the middle sets.\n\nSpoon the cinnamon butter into a small bag with the corner snipped, or use a spoon. Pour the batter, then draw a spiral of the butter over the top before flipping. The swirl sinks into the pancake and caramelises on the underside.\n\nCook for about 2 minutes on the first side, until bubbles pop and stay open, then 1 minute on the second. If your pan runs hot, check at 90 seconds. Beat the cream cheese, icing sugar and milk until pourable and drizzle over the stack.',
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '2 tbsp caster sugar',
      '1/2 tsp salt',
      '1 egg, about 50 g',
      '280 ml milk',
      '30 g butter, melted',
      '50 g butter, melted, for the swirl',
      '60 g soft light brown sugar',
      '2 tsp ground cinnamon',
      '60 g cream cheese',
      '60 g icing sugar',
      '1 tbsp milk for the icing'
    ],
    st: [
      'Stir the 50 g melted butter with the brown sugar and cinnamon into a thick paste and spoon it into a small bag.',
      'Whisk the flour, baking powder, caster sugar and salt. Add the egg, 280 ml milk and 30 g melted butter and stir until just combined.',
      'Heat a lightly oiled pan over medium heat. Pour in a ladle of batter, draw a spiral of cinnamon paste on top and cook for 2 minutes until bubbles stay open. Flip and cook for 1 minute more. Repeat with the rest.',
      'Beat the cream cheese, icing sugar and 1 tbsp milk until smooth. Drizzle over the pancakes.'
    ],
    tips: [
      'Leave the batter lumpy.',
      'Cook over medium heat so the swirl does not burn.',
      'If your pan runs hot, check at 90 seconds.',
      'Keep cooked pancakes in a low oven while you finish the batch.'
    ],
    pair: ['Maple syrup', 'Fresh banana', 'Hot coffee', 'Cold milk'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days and reheats in a toaster.',
    nut: [590, 10, 79, 26, 2, 40, 640]
  },

  'savoury-waffles': {
    d: 'Crisp waffles made with cheddar and chives, served with a fried egg or a spoonful of sour cream and smoked salmon.',
    meta: 'Savoury waffles: crisp cheddar and chive waffles for brunch, cooked for 15 minutes. Four servings.',
    kw: ['savoury waffles', 'cheese and chive waffles', 'cheddar waffles', 'savory waffles for brunch', 'savoury waffles with eggs'],
    why: 'Why does anyone put cheese in a waffle? Because a waffle iron does for cheese what a frying pan does for a toastie: it browns the edges into a crisp, lacy crust.\n\nThe batter is a plain one with the sugar left out. Add the cheddar and chives at the end, so the cheese stays in pieces and melts into pockets in the grid. **Grease the iron even if it says non-stick.** Cheese is the first thing to glue itself to a cold plate.\n\nPour in enough batter to fill the grid without overflowing, close the lid and leave it alone. Most irons take about 4 minutes. If the steam has stopped coming from the sides, the waffle is usually ready.\n\nServe them straight away, topped with a fried egg or smoked salmon and sour cream. Waffles that sit on a plate go soft, so keep the finished ones on a rack in a warm oven.',
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '1 tsp salt',
      '2 eggs, about 100 g',
      '250 ml milk',
      '50 g butter, melted',
      '80 g mature cheddar, grated',
      '2 tbsp chopped chives',
      '1 tbsp sunflower oil to grease the iron',
      '4 eggs, about 200 g, for serving',
      '4 tbsp sour cream'
    ],
    st: [
      'Heat the waffle iron and grease it. Whisk the flour, baking powder and salt in a bowl.',
      'Whisk the 2 eggs with the milk and melted butter, pour into the flour and stir until just combined. Fold in the cheddar and chives.',
      'Cook 4 waffles for 4 minutes each, or as long as your iron needs, until deep gold. Keep them on a rack in a low oven.',
      'Fry the remaining eggs in a little oil. Top each waffle with an egg and a spoonful of sour cream.'
    ],
    tips: [
      'Grease the iron well.',
      'Fold in the cheese at the end.',
      'If your iron runs hot, check at 3 minutes.',
      'Serve on a rack, not a plate, to keep the crust crisp.'
    ],
    pair: ['Smoked salmon', 'Crisp bacon', 'Avocado', 'Hot coffee'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days and crisps up in a toaster.',
    nut: [557, 22, 43, 33, 2, 4, 1090]
  },

  'churro-waffles': {
    d: 'Light waffles rolled in cinnamon sugar while hot and served with a pot of warm chocolate sauce.',
    meta: 'Churro waffles: light waffles rolled in cinnamon sugar and served with chocolate sauce. Four servings, cooked for 15 minutes.',
    kw: ['churro waffles', 'cinnamon sugar waffles', 'churro waffles with chocolate sauce', 'cinnamon waffles', 'waffles with cinnamon sugar'],
    why: 'Flour, eggs, milk, butter: four things you already own, and a cinnamon sugar coat that turns breakfast into something closer to a fairground treat.\n\nThe trick is the butter. Brush each waffle with melted butter the moment it comes off the iron, then roll it in the cinnamon sugar. **The sugar only sticks to a hot, buttered waffle.** Wait a minute and it bounces off.\n\nThe waffles themselves are plain and slightly sweet, with a spoonful of cinnamon in the batter. Cook them until they are deep gold, not pale, because the sugar coat softens the crust and you want it crisp to begin with.\n\nWarm the chocolate sauce for 1 minute in a small pan or the microwave. It should pour but cling. Serve the waffles whole or cut into sticks, so that people can dip them like churros. If your iron runs hot, check at 3 minutes. Serve the chocolate sauce in a small cup in the middle of the plate and let everyone dip.',
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '2 tbsp caster sugar',
      '1 tsp ground cinnamon',
      '1/4 tsp salt',
      '2 eggs, about 100 g',
      '250 ml milk',
      '60 g butter, melted, for the batter',
      '30 g butter, melted, for brushing',
      '50 g caster sugar for coating',
      '1 tsp ground cinnamon for coating',
      '100 g chocolate sauce'
    ],
    st: [
      'Heat and grease the waffle iron. Whisk the flour, baking powder, 2 tbsp sugar, 1 tsp cinnamon and salt.',
      'Whisk the eggs, milk and 60 g melted butter into the flour until just combined.',
      'Cook 4 waffles for 4 minutes each until deep gold.',
      'Mix the coating sugar and cinnamon on a plate. Brush each hot waffle with the 30 g butter and roll it in the sugar.',
      'Warm the chocolate sauce for 1 minute and serve beside the waffles for dipping.'
    ],
    tips: [
      'Coat the waffles while they are hot.',
      'Cook to deep gold so the crust stays crisp.',
      'If your iron runs hot, check at 3 minutes.',
      'Cut into sticks for dipping.'
    ],
    pair: ['Vanilla ice cream', 'Hot chocolate', 'Sliced banana', 'Cold milk'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days but the coating softens.',
    nut: [564, 11, 76, 24, 2, 35, 480]
  },

  'stuffed-french-toast': {
    d: 'Thick slices of bread filled with sweetened cream cheese and jam, dipped in egg custard and fried until golden.',
    meta: 'Stuffed French toast: thick bread filled with cream cheese and jam, dipped in egg and fried. Four servings, cooked for 12 minutes.',
    kw: ['stuffed french toast', 'cream cheese stuffed french toast', 'strawberry stuffed french toast', 'filled french toast', 'french toast with cream cheese'],
    why: 'Cut a pocket and the filling stays put. That is the one instruction that decides whether this works.\n\nTake a thick slice, about 3 cm, and slice sideways into the crust, leaving the other three edges joined. Spoon in the cream cheese and jam, and press the edge closed. **Thin bread tears, so use bread that is at least 2 cm thick.** Day-old bread soaks up the custard without falling apart.\n\nWhisk the eggs with the milk and vanilla in a shallow dish. Dip each sandwich for 10 seconds a side, not longer, because soaked bread tears when you lift it.\n\nFry in butter over medium heat for about 3 minutes on each side, until the outside is deep gold and the cream cheese is warm. If your pan runs hot, check at 2 minutes. Cook in two batches and dust with icing sugar. Serve it at once, because the filling is at its best while it is still warm and soft.',
    ing: [
      '4 thick slices white bread, about 3 cm, 240 g',
      '120 g cream cheese',
      '60 g strawberry jam',
      '4 eggs, about 200 g',
      '120 ml milk',
      '1 tsp vanilla extract',
      '30 g butter',
      '1 tbsp icing sugar'
    ],
    st: [
      'Mix the cream cheese and jam. Cut a pocket into the side of each bread slice and fill it with the mixture.',
      'Whisk the eggs, milk and vanilla in a shallow dish.',
      'Melt half the butter in a pan over medium heat. Dip two stuffed slices for 10 seconds on each side and fry for 3 minutes a side until golden. Repeat with the rest.',
      'Dust with the icing sugar and serve warm.'
    ],
    tips: [
      'Use bread at least 2 cm thick.',
      'Do not soak the slices for long.',
      'If your pan runs hot, check at 2 minutes.',
      'Do not overfill the pocket.'
    ],
    pair: ['Fresh strawberries', 'Maple syrup', 'Hot coffee', 'Orange juice'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats in a toaster oven.',
    nut: [379, 12, 31, 23, 1, 16, 320]
  },

  'challah-french-toast': {
    d: 'Thick slices of eggy challah soaked in a cinnamon custard and fried in butter until golden outside and creamy within.',
    meta: 'Challah French toast: thick slices of challah soaked in cinnamon custard and fried. Four servings, cooked for 12 minutes.',
    kw: ['challah french toast', 'easy challah french toast', 'french toast with challah', 'cinnamon french toast', 'challah bread french toast'],
    why: 'Can you make French toast with fresh bread? You can, but it turns to paste, which is why stale challah is the better choice.\n\nChallah is rich with eggs and a little sweet, so it browns quickly and holds a lot of custard. Leave the slices out for an hour, or dry them for 5 minutes in a low oven, and they absorb the liquid without collapsing. **Slice it thick, about 2 cm.** Thin slices go limp before the middle sets.\n\nWhisk the eggs, milk, cinnamon and vanilla until no streaks of white remain. Soak each slice for 15 seconds a side.\n\nFry in butter over medium heat for 3 minutes on each side, until deep gold. If your pan runs hot, check at 2 minutes. Lower the heat if the butter turns brown before the toast does. Serve at once with maple syrup. A little grated orange zest in the custard goes well with the cinnamon if you have an orange.',
    ing: [
      '8 slices challah, about 2 cm thick, 400 g',
      '3 eggs, about 150 g',
      '150 ml milk',
      '1 tsp ground cinnamon',
      '1 tsp vanilla extract',
      '30 g butter',
      '4 tbsp maple syrup'
    ],
    st: [
      'Whisk the eggs, milk, cinnamon and vanilla in a shallow dish.',
      'Soak each slice of challah in the custard for 15 seconds on each side.',
      'Melt a third of the butter in a large pan over medium heat. Fry 3 slices for 3 minutes on each side until deep gold. Repeat with the remaining butter and slices.',
      'Serve warm with the maple syrup.'
    ],
    tips: [
      'Use slightly stale bread.',
      'Slice it 2 cm thick.',
      'If your pan runs hot, check at 2 minutes.',
      'Wipe the pan between batches if the butter darkens.'
    ],
    pair: ['Fresh berries', 'Crisp bacon', 'Whipped cream', 'Hot coffee'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days and reheats in a toaster.',
    nut: [345, 12, 45, 13, 2, 17, 360]
  },

  'breakfast-tacos': {
    d: 'Small warm tortillas filled with soft scrambled eggs, chorizo, cheddar and avocado, finished with salsa.',
    meta: 'Breakfast tacos: warm tortillas filled with scrambled eggs, chorizo, cheddar and avocado. Four servings, cooked for 10 minutes.',
    kw: ['breakfast tacos', 'easy breakfast tacos', 'egg and chorizo breakfast tacos', 'scrambled egg tacos', 'breakfast tacos with avocado'],
    why: 'Eggs, chorizo, tortillas, cheese: four things, ten minutes of cooking, and a breakfast that feels more like a party. The order of cooking is what matters.\n\nFry the chorizo first, in a dry pan, for 4 minutes. It releases a red oil that you should leave in the pan, because the eggs cook in it and take on its colour and spice. **Do not add butter.** The chorizo has provided all the fat you need.\n\nTurn the heat down before the eggs go in. Stir them slowly with a spatula until they form soft curds and still look slightly wet, about 3 minutes. They keep cooking on the plate.\n\nWarm the tortillas in a dry pan for 20 seconds a side, fill with egg, cheddar, sliced avocado and salsa and fold. Wrap them in a clean cloth if you are cooking in batches, so that they stay soft. A squeeze of lime over the top just before eating lifts the whole filling.',
    ing: [
      '8 small corn tortillas, about 240 g',
      '150 g cooking chorizo, diced',
      '6 eggs, about 300 g',
      '80 g mature cheddar, grated',
      '1 avocado, about 170 g, sliced',
      '100 g salsa',
      '1/4 tsp salt'
    ],
    st: [
      'Fry the chorizo in a dry pan over medium heat for 4 minutes until it has released its oil.',
      'Beat the eggs with the salt. Turn the heat to low, pour them into the pan and stir for 3 minutes until in soft curds.',
      'Warm the tortillas in a dry pan for 20 seconds on each side and wrap in a cloth.',
      'Fill the tortillas with the egg and chorizo, cheddar, avocado and salsa.'
    ],
    tips: [
      'Do not add butter to the chorizo.',
      'Take the eggs off the heat while they still look wet.',
      'If your pan runs hot, lower the heat before the eggs go in.',
      'Keep the tortillas warm in a cloth.'
    ],
    pair: ['Refried beans', 'Hot sauce', 'Orange juice', 'Black coffee'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat the filling gently.',
    nut: [511, 24, 34, 31, 7, 3, 880]
  },

  'bacon-egg-and-cheese-muffin': {
    d: 'A toasted English muffin filled with crisp bacon, a soft fried egg and a slice of melted cheddar.',
    meta: 'Bacon egg and cheese muffin: a toasted English muffin with crisp bacon, a fried egg and cheddar. Two servings, cooked for 10 minutes.',
    kw: ['bacon egg and cheese muffin', 'bacon egg and cheese english muffin', 'breakfast muffin sandwich', 'english muffin breakfast sandwich', 'egg and bacon muffin'],
    why: 'An English muffin is a bread with a built-in advantage: its nooks and crannies. They catch melted butter and cheese, and they stay chewy under a hot egg.\n\nStart with the bacon, since it takes the longest. Fry it over medium heat for about 6 minutes until crisp, turning once. While it cooks, split and toast the muffins. **Butter the muffins while they are hot.** It melts into the holes instead of sitting on top.\n\nCrack the eggs into the bacon fat, which gives them flavour for free, and cook for 2 minutes. Put the cheese on top of the egg for the last 30 seconds, with a lid on, so that it melts.\n\nBuild the sandwich with the egg on the bottom half, then bacon, then the top. Eat it warm. If your pan runs hot, check the bacon at 4 minutes. For a runnier yolk, take the egg off the heat a few seconds sooner.',
    ing: [
      '2 English muffins, about 130 g',
      '4 rashers streaky bacon, about 80 g',
      '2 eggs, about 100 g',
      '2 slices cheddar, about 40 g',
      '10 g butter',
      '1/4 tsp black pepper'
    ],
    st: [
      'Fry the bacon in a pan over medium heat for 6 minutes, turning once, until crisp. Lift out and keep the fat.',
      'Split the muffins, toast them and spread with the butter.',
      'Crack the eggs into the bacon fat and fry for 2 minutes. Lay a cheddar slice on each, cover and cook for 30 seconds.',
      'Put an egg on each muffin base, add the bacon, season with the pepper and close.'
    ],
    tips: [
      'Butter the muffins while hot.',
      'Fry the eggs in the bacon fat.',
      'If your pan runs hot, check the bacon at 4 minutes.',
      'Cover the pan to melt the cheese.'
    ],
    pair: ['Hot coffee', 'Orange juice', 'Fresh fruit', 'Hash browns'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats in a toaster oven.',
    nut: [409, 24, 31, 21, 2, 4, 1090]
  },

  'greek-omelette': {
    d: 'A folded three-egg omelette with feta, spinach, black olives, tomato and oregano.',
    meta: 'Greek omelette: a three-egg omelette filled with feta, spinach, olives, tomato and oregano. One serving, cooked for 8 minutes.',
    kw: ['greek omelette', 'feta and spinach omelette', 'greek omelette with olives', 'mediterranean omelette', 'greek feta omelette'],
    why: 'Why does an omelette turn rubbery? Because the pan is too hot or the filling is wet. A Greek omelette has both risks built in, with salty feta and juicy tomato.\n\nCook the spinach in the pan for 1 minute first, until it wilts, and squeeze out the water. Wet filling steams the egg from the inside. Then the tomatoes go in whole halves, cut side down, only to warm through. **Keep the heat at medium and add the eggs while the pan is hot, not smoking.**\n\nBeat the eggs with a pinch of oregano and pour them in. Pull the cooked edges towards the middle with a spatula and tilt the pan so the raw egg runs into the gap. After about 3 minutes the top should look glossy and barely set.\n\nScatter the feta and olives over one half, fold and slide onto a plate. The salt in the feta means you need little extra.',
    ing: [
      '3 eggs, about 150 g',
      '1 tbsp olive oil',
      '30 g baby spinach',
      '6 cherry tomatoes, about 90 g, halved',
      '50 g feta, crumbled',
      '30 g black olives, halved',
      '1/2 tsp dried oregano',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oil in a small non-stick pan over medium heat. Wilt the spinach for 1 minute and squeeze it dry. Set it aside.',
      'Beat the eggs with the oregano and pepper.',
      'Pour the eggs into the pan. Draw the set edges inward for 3 minutes until the top is glossy and barely set.',
      'Scatter the spinach, tomatoes, feta and olives on one half, fold over and slide onto a plate.'
    ],
    tips: [
      'Squeeze the spinach dry.',
      'Keep the heat at medium.',
      'If your pan runs hot, check the egg at 2 minutes.',
      'Go easy on salt because the feta is salty.'
    ],
    pair: ['Toasted pitta', 'Greek yoghurt', 'Strong coffee', 'Fresh orange juice'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day but turns firm.',
    nut: [539, 28, 10, 43, 3, 5, 1210]
  },

  'smashed-avocado-on-sourdough': {
    d: 'Crushed avocado with lemon, feta and chilli flakes on thick toasted sourdough.',
    meta: 'Smashed avocado on sourdough: crushed avocado with lemon, feta and chilli on thick toasted sourdough. Two servings, ready in 10 minutes.',
    kw: ['smashed avocado on sourdough', 'smashed avocado on toast', 'avocado toast with feta', 'australian smashed avo', 'smashed avo on sourdough'],
    why: 'The first sign it is right is the sound: a crunch as the knife goes through toasted sourdough. Soft bread and soft avocado make a dull breakfast, so the toast needs to be properly crisp.\n\nToast the bread for about 5 minutes until deep gold, and let it stand on a rack so the steam does not soften the underside. **Season the avocado, not the toast.** Salt, lemon juice and olive oil mashed in with a fork turn a flat fruit into something savoury.\n\nMash it roughly, leaving chunks. A smooth purée looks like baby food and lacks texture. Spread it to the edges of the bread, because the last bite should be as good as the first.\n\nCrumble the feta over the top, add chilli flakes and a thread of olive oil, and eat at once. Avocado browns in minutes, so mash it only when the toast is ready. Choose fruit that gives slightly under your thumb.',
    ing: [
      '2 thick slices sourdough, about 100 g',
      '1 ripe avocado, about 170 g',
      '1 tbsp lemon juice',
      '2 tsp olive oil',
      '40 g feta, crumbled',
      '1/4 tsp chilli flakes',
      '1/4 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Toast the sourdough for 5 minutes until deep gold and crisp. Stand it on a rack.',
      'Mash the avocado with the lemon juice, 1 tsp of the oil, salt and pepper, leaving some chunks.',
      'Spread the avocado over the toast to the edges.',
      'Top with the feta, chilli flakes and the remaining oil. Serve at once.'
    ],
    tips: [
      'Toast the bread until properly crisp.',
      'Mash the avocado at the last moment.',
      'If the avocado is hard, wait a day.',
      'Season the avocado before it goes on the toast.'
    ],
    pair: ['Poached eggs', 'Flat white', 'Cherry tomatoes', 'Fresh orange juice'],
    store: 'Best eaten at once. Avocado browns within the hour.',
    nut: [375, 9, 33, 23, 7, 4, 770]
  },

  'ricotta-toast-with-honey': {
    d: 'Thick toast spread with whipped ricotta, drizzled with honey and finished with lemon zest and pistachios.',
    meta: 'Ricotta toast with honey: toast spread with ricotta, honey, lemon zest and pistachios. Two servings, ready in 8 minutes.',
    kw: ['ricotta toast with honey', 'ricotta and honey toast', 'ricotta toast with pistachios', 'honey ricotta breakfast toast', 'sweet ricotta toast'],
    why: 'Ricotta, honey, lemon, toast: four things and about three minutes of cooking. Everything depends on how good each one is, so buy fresh ricotta in a tub, not the stiff kind sold in a block.\n\nBeat the ricotta in a bowl with a pinch of salt for a full minute. It loosens from a grainy spoonful to a light, creamy spread. **The pinch of salt is not optional.** Without it the cheese tastes only of milk and the honey tastes of sugar.\n\nToast the bread until golden at the edges, then spread the ricotta thickly while the toast is still warm. The heat softens the cheese slightly without melting it.\n\nDrizzle with the honey, grate lemon zest over the top and add chopped pistachios for crunch. Eat it open, with a knife and fork if you must, though most people will not bother. Choose a runny honey, as a set honey will not drizzle across the toast.',
    ing: [
      '2 thick slices sourdough, about 100 g',
      '100 g fresh ricotta',
      '2 tbsp honey',
      '1 lemon, zest only',
      '20 g shelled pistachios, chopped',
      '1 pinch salt'
    ],
    st: [
      'Beat the ricotta with the salt for 1 minute until creamy.',
      'Toast the bread for 3 minutes until golden at the edges.',
      'Spread the ricotta thickly over the warm toast.',
      'Drizzle with the honey and scatter with the lemon zest and pistachios.'
    ],
    tips: [
      'Use fresh tub ricotta.',
      'Salt the ricotta.',
      'Spread it on warm toast.',
      'Add the pistachios last so they stay crunchy.'
    ],
    pair: ['Fresh figs', 'Strong coffee', 'Sliced peaches', 'Orange juice'],
    store: 'Best eaten at once. Leftover ricotta keeps in the fridge for 2 days.',
    nut: [361, 12, 49, 13, 3, 21, 370]
  },

  'full-irish-breakfast': {
    d: 'Irish sausages, back bacon, black and white pudding, fried eggs, mushrooms, tomatoes, beans and soda bread on one plate.',
    meta: 'Full Irish breakfast: sausages, bacon, black and white pudding, eggs, mushrooms, tomatoes and soda bread. Four servings, cooked for 25 minutes.',
    kw: ['full irish breakfast', 'traditional irish breakfast', 'irish fry up', 'full irish fry', 'irish breakfast with black pudding'],
    why: 'A fry-up is a timing problem: eight things need to finish together on four plates. The order below solves it.\n\nStart with the sausages, which take the longest. Brown them in a little oil over medium heat for 15 minutes, turning often. **Cook everything in the same pan.** The fat from the sausages and bacon is what flavours the mushrooms, the puddings and the bread.\n\nAdd the bacon and the black and white pudding slices after 5 minutes, and the halved tomatoes cut-side down. Move everything to one side as it finishes and keep it warm in a low oven.\n\nFry the mushrooms in the pan juices, warm the beans in a small pan, and finish with the eggs. Each takes under 4 minutes. Fry the soda bread in the last of the fat until crisp. If your hob runs hot, check the sausages at 12 minutes. Brown sauce and a pot of strong tea on the table finish the meal in the traditional way.',
    ing: [
      '8 Irish pork sausages, about 400 g',
      '8 rashers back bacon, about 240 g',
      '4 slices black pudding, about 200 g',
      '4 slices white pudding, about 200 g',
      '4 eggs, about 200 g',
      '2 tomatoes, about 240 g, halved',
      '200 g mushrooms, halved',
      '400 g tin baked beans',
      '4 slices soda bread, about 160 g',
      '2 tbsp sunflower oil',
      '20 g butter'
    ],
    st: [
      'Heat the oven to 100°C. Brown the sausages in the oil in a large pan over medium heat for 15 minutes, turning often.',
      'After 5 minutes add the bacon, black pudding, white pudding and tomatoes cut-side down. Move finished items to a plate in the oven.',
      'Warm the beans in a small pan. Fry the mushrooms in the pan juices with the butter for 4 minutes.',
      'Fry the eggs for 3 minutes. Fry the soda bread in the remaining fat until crisp.',
      'Divide everything between four warm plates.'
    ],
    tips: [
      'Cook the sausages first.',
      'Keep finished items warm in a low oven.',
      'If your hob runs hot, check the sausages at 12 minutes.',
      'Warm the plates.'
    ],
    pair: ['Strong tea', 'Brown sauce', 'Buttered toast', 'Orange juice'],
    store: 'Best eaten at once. Leftover sausages keep in the fridge for 2 days.',
    nut: [1057, 52, 57, 69, 7, 11, 3260]
  },

  'full-scottish-breakfast': {
    d: 'Lorne sausage, link sausages, bacon, black pudding, tattie scones, eggs, mushrooms and tomatoes fried in one pan.',
    meta: 'Full Scottish breakfast: Lorne and link sausages, bacon, black pudding, tattie scones, eggs, mushrooms and tomatoes. Four servings, 25 minutes.',
    kw: ['full scottish breakfast', 'scottish fry up', 'traditional scottish breakfast', 'scottish breakfast with lorne sausage', 'tattie scones breakfast'],
    why: 'The first thing to know is that it is not a full English with a different name. The Scottish plate is defined by two things: square Lorne sausage and tattie scones.\n\nLorne sausage is sliced from a block and fried flat, so it takes less time than a link. Cook the link sausages first, for 15 minutes, then fry the Lorne slices alongside for the last 6 minutes. **Do not prick the sausages.** The skin keeps the fat inside and the sausage juicy.\n\nThe tattie scones, which are thin potato griddle breads, need only 2 minutes a side in the fat left behind. They soak up everything and are the best part of the plate.\n\nFinish with the eggs, mushrooms and tomatoes in the same pan. If your hob runs hot, check the sausages at 12 minutes. Keep finished items in a low oven and serve everything together on hot plates.',
    ing: [
      '4 slices Lorne sausage, about 240 g',
      '4 pork link sausages, about 160 g',
      '4 rashers back bacon, about 120 g',
      '4 slices black pudding, about 200 g',
      '4 tattie scones, about 200 g',
      '4 eggs, about 200 g',
      '2 tomatoes, about 240 g, halved',
      '200 g mushrooms, halved',
      '2 tbsp sunflower oil',
      '20 g butter'
    ],
    st: [
      'Heat the oven to 100°C. Brown the link sausages in the oil over medium heat for 15 minutes, turning often.',
      'Add the Lorne slices, bacon, black pudding and tomatoes cut-side down for the last 6 minutes. Move finished items to a plate in the oven.',
      'Fry the tattie scones for 2 minutes on each side in the pan fat. Fry the mushrooms in the butter for 4 minutes.',
      'Fry the eggs for 3 minutes and plate everything together.'
    ],
    tips: [
      'Do not prick the sausages.',
      'Fry the tattie scones in the pan fat.',
      'If your hob runs hot, check the sausages at 12 minutes.',
      'Serve on hot plates.'
    ],
    pair: ['Strong tea', 'Brown sauce', 'Buttered toast', 'Orange juice'],
    store: 'Best eaten at once. Leftover sausages keep in the fridge for 2 days.',
    nut: [769, 34, 30, 57, 3, 4, 2020]
  },

  'apple-pie-overnight-oats': {
    d: 'Rolled oats soaked overnight in milk and yoghurt with grated apple, cinnamon, maple syrup, raisins and walnuts.',
    meta: 'Apple pie overnight oats: oats soaked in milk and yoghurt with apple, cinnamon, maple syrup and walnuts. Two servings, no cooking.',
    kw: ['apple pie overnight oats', 'apple cinnamon overnight oats', 'overnight oats with apple', 'apple overnight oats with walnuts', 'cold apple oats'],
    why: 'Stir it together tonight and breakfast is waiting in the morning. That is the whole idea, and the soak does everything a pan of porridge would.\n\nRolled oats soften as they absorb the milk and yoghurt over about 8 hours. Instant oats turn to paste, and steel-cut ones stay hard. **Use plain rolled oats.** The ratio is one part oats to about two and a half parts liquid, which gives a thick, spoonable result.\n\nGrate the apple with its skin on and stir it in straight away with the cinnamon and maple syrup, so the apple soaks too and does not brown. The flavour is that of the pie, without the pastry.\n\nTop with walnuts and raisins just before eating, or the nuts go soft. Eat the oats cold, or warm them for 90 seconds if the morning is bitter. Add a splash of milk if the oats have thickened too much.',
    ing: [
      '80 g rolled oats',
      '200 ml milk',
      '100 g plain yoghurt',
      '1 apple, about 150 g, grated',
      '1 tsp ground cinnamon',
      '1 tbsp maple syrup',
      '20 g raisins',
      '20 g walnuts, chopped'
    ],
    st: [
      'Stir the oats, milk, yoghurt, grated apple, cinnamon and maple syrup together in a jar or bowl.',
      'Cover and chill overnight for 8 hours.',
      'Stir in a splash of milk if needed. Top with the raisins and walnuts and serve.'
    ],
    tips: [
      'Use rolled oats, not instant.',
      'Grate the apple straight in.',
      'Add the nuts just before eating.',
      'Loosen with milk if the oats are too thick.'
    ],
    pair: ['Hot coffee', 'Sliced banana', 'Extra yoghurt', 'Black tea'],
    store: 'Keeps in the fridge for 2 days without the toppings.',
    rest: [480, 'Chilling overnight'],
    nut: [430, 16, 60, 14, 7, 27, 70]
  },

  'marmite-cheese-scrolls': {
    d: 'Soft scone-dough scrolls swirled with Marmite and grated cheddar, baked until golden.',
    meta: 'Marmite cheese scrolls: scone-dough scrolls swirled with Marmite and cheddar. Makes twelve, baked for 20 minutes.',
    kw: ['marmite cheese scrolls', 'marmite and cheese scrolls', 'cheese and marmite scrolls', 'savoury scrolls', 'nz marmite scrolls'],
    why: 'Marmite is a spread you either love or leave, and a scroll is the gentlest way in. The yeast extract melts with butter into something deep and savoury, and the cheese softens its edges.\n\nThe dough is a scone dough, with no yeast and no rising, which is why the recipe takes less than an hour. Rub cold butter into the flour until it looks like crumbs, then add the milk and bring it together. **Handle it as little as you can.** Overworked scone dough bakes tough.\n\nRoll it into a rectangle, spread it with the Marmite and butter mixture, scatter over the cheddar and roll up from the long side. Slice into twelve and set them cut-side up on a tray, close together so they rise into each other.\n\nBake at 220°C for 20 minutes. If your oven runs hot, check at 15 minutes. They are done when golden and the cheese is bubbling at the edges.',
    ing: [
      '300 g self-raising flour',
      '60 g cold butter, cubed',
      '1/2 tsp salt',
      '180 ml milk',
      '2 tbsp Marmite',
      '20 g butter, softened',
      '150 g mature cheddar, grated'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Rub the cold butter into the flour and salt until it looks like crumbs.',
      'Stir in the milk with a knife to a soft dough. Roll out on a floured surface into a 25 by 35 cm rectangle.',
      'Mix the Marmite with the softened butter and spread over the dough. Scatter with the cheddar.',
      'Roll up from the long side, cut into 12 slices and set them cut-side up, almost touching, on the tray.',
      'Bake for 20 minutes until golden.'
    ],
    tips: [
      'Handle the dough lightly.',
      'Do not leave gaps in the spread.',
      'If your oven runs hot, check at 15 minutes.',
      'Cut the roll with a sharp knife or thread.'
    ],
    pair: ['Hot tea', 'Butter', 'Tomato soup', 'Cold milk'],
    store: 'Best on the day. Keeps in a tin for 2 days and reheats in a 160°C oven for 5 minutes.',
    nut: [198, 7, 20, 10, 1, 1, 270]
  },

  'anzac-slice': {
    d: 'A chewy slab of oats, coconut and golden syrup baked in a tin and cut into squares.',
    meta: 'Anzac slice: a chewy slab of oats, coconut and golden syrup, baked for 25 minutes. Sixteen pieces.',
    kw: ['anzac slice', 'australian anzac slice', 'oat and coconut slice', 'anzac slice with golden syrup', 'chewy anzac slice'],
    why: 'Anzac biscuits need rolling and spacing, and a slice needs only a tin. Everything goes into one pan, then into a lined tin, and it is cut once.\n\nMelt the butter with the golden syrup and sugar. Stir the bicarbonate of soda into boiling water and add it to the pan, where it froths. **That froth is what makes the slice chewy rather than hard.** Pour the mixture onto the dry oats, flour and coconut and stir until every oat is coated.\n\nPress it firmly into the tin with the back of a spoon. The pressing matters, because a loose slice crumbles when cut.\n\nBake at 170°C for 25 minutes, until deep gold at the edges and just firm in the middle. If your oven runs hot, check at 20 minutes. Cool completely in the tin before cutting into 16, or the slice will fall apart. Cut it into small squares, as the slice is dense and sweet and goes a long way.',
    ing: [
      '150 g rolled oats',
      '150 g plain flour',
      '100 g desiccated coconut',
      '150 g caster sugar',
      '125 g butter',
      '2 tbsp golden syrup',
      '1 tsp bicarbonate of soda',
      '2 tbsp boiling water'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm square tin. Mix the oats, flour, coconut and sugar in a bowl.',
      'Melt the butter with the golden syrup. Stir the bicarbonate into the boiling water and add it to the butter.',
      'Pour into the dry ingredients and stir until combined.',
      'Press firmly into the tin and bake for 25 minutes until deep gold. Cool completely before cutting into 16.'
    ],
    tips: [
      'Press the mixture down hard.',
      'Cool in the tin before cutting.',
      'If your oven runs hot, check at 20 minutes.',
      'Use rolled oats, not instant.'
    ],
    pair: ['Hot tea', 'Flat white', 'Cold milk', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [215, 3, 26, 11, 2, 11, 80]
  },

  'apricot-slice': {
    d: 'A buttery shortcrust base layered with stewed dried apricots and a coconut topping, baked and cut into squares.',
    meta: 'Apricot slice: a buttery base, stewed dried apricots and a coconut topping, baked for 30 minutes. Sixteen pieces.',
    kw: ['apricot slice', 'apricot coconut slice', 'australian apricot slice', 'dried apricot slice', 'apricot and coconut bars'],
    why: 'The base, the filling and the topping each take a few minutes, and the oven does the rest. Apricot slice has been on lunchboxes and cake stalls for generations.\n\nDried apricots hold the flavour, but they need softening first. Chop them small and simmer for 8 minutes in a little water until they are soft and the liquid has gone. **Cook the filling until it is thick and dry.** A wet filling soaks into the base and leaves it soggy.\n\nPress the base into the tin and bake it on its own for 12 minutes at 180°C so that it sets. Spread the apricots over it while the base is hot, then pour over the topping of egg, sugar and coconut.\n\nBake for 18 minutes more, until golden. If your oven runs hot, check at 14 minutes. Cool in the tin and cut into 16 squares once the slice is cold.',
    ing: [
      '150 g plain flour',
      '90 g cold butter, cubed',
      '50 g icing sugar',
      '150 g dried apricots, finely chopped',
      '150 ml water',
      '2 eggs, about 100 g',
      '100 g caster sugar',
      '150 g desiccated coconut'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin. Rub the butter into the flour and icing sugar until it clumps, then press into the tin.',
      'Bake the base for 12 minutes. Meanwhile simmer the apricots with the water for 8 minutes until soft and dry.',
      'Spread the apricots over the hot base. Beat the eggs with the caster sugar, stir in the coconut and spread over the top.',
      'Bake for 18 minutes until golden. Cool in the tin before cutting into 16.'
    ],
    tips: [
      'Cook the apricots until dry.',
      'Spread the filling on the hot base.',
      'If your oven runs hot, check at 14 minutes.',
      'Cut the slice when cold.'
    ],
    pair: ['Hot tea', 'Flat white', 'Cold milk', 'Fresh cream'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [191, 3, 20, 11, 2, 11, 10]
  },

  'arnold-palmer': {
    d: 'Half cold black tea and half lemonade, poured over ice with a slice of lemon.',
    meta: 'Arnold Palmer: half cold black tea and half lemonade over ice with lemon. Four servings, no cooking.',
    kw: ['arnold palmer', 'arnold palmer drink', 'iced tea and lemonade', 'half and half iced tea', 'arnold palmer recipe'],
    why: 'The first sign it is working is the colour: a pale amber with a hint of yellow, cloudy where the lemonade meets the tea. The drink is half and half, and the balance is the only real decision.\n\nStrong tea is what keeps it from tasting like flat lemonade. Make the tea stronger than you would to drink hot, and let it cool completely before it goes near the ice. **Warm tea melts the ice and waters the drink.** Cold tea from the fridge solves it.\n\nUse lemonade that is sharp rather than very sweet, since the tea adds bitterness and the two need to balance. If you like it sweeter, stir in a spoonful of sugar syrup, not sugar, which sinks.\n\nFill tall glasses with ice, pour in the tea and lemonade at the same time and stir once. Add a wheel of lemon and a sprig of mint if there is any. Serve straight away.',
    ing: [
      '500 ml cold strong black tea',
      '500 ml lemonade, chilled',
      '300 g ice cubes',
      '1 lemon, sliced',
      '4 sprigs mint'
    ],
    st: [
      'Fill four tall glasses with ice.',
      'Pour in the cold tea and lemonade in equal parts.',
      'Stir once, add the lemon slices and mint and serve at once.'
    ],
    tips: [
      'Make the tea strong.',
      'Chill the tea before it meets the ice.',
      'Use a sharp lemonade.',
      'Serve at once.'
    ],
    pair: ['Sandwiches', 'Barbecue food', 'Shortbread', 'Fresh mint'],
    store: 'Best drunk at once. The mixed drink keeps in the fridge for 1 day.',
    nut: [36, 0, 9, 0, 0, 8, 10]
  }
};
