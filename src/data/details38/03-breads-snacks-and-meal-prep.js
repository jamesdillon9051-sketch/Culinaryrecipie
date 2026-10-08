'use strict';

/**
 * Volume thirty-eight — breads, snacks and make-ahead meals.
 *
 * Things that are made once and used for days: crackers, chips, loaves,
 * freezer food and lunch-box dishes. Times are the recipe's own; ovens differ,
 * so each method says when to check early. Nutrition is estimated from the
 * ingredient list by npm run calc.
 */

module.exports = {
  'seeded-loaf': {
    d: 'A no-yeast loaf of wholemeal flour, buttermilk and mixed seeds, shaped by hand and cooked for 40 minutes. Ten servings in 1 hour.',
    meta: 'Seeded loaf: a no-yeast loaf of wholemeal flour, buttermilk and mixed seeds, shaped by hand and cooked for 40 minutes until it sounds hollow.',
    kw: ['seeded loaf', 'seeded soda bread', 'homemade seeded loaf', 'no yeast seeded bread', 'seeded wholemeal loaf'],
    why: 'No kneading, no proving, no waiting: this loaf is made with bicarbonate of soda and buttermilk, so it rises as soon as it meets the oven. The result is a dense, nutty slice that is good with soup, cheese or just butter.\n\nMix quickly and lightly. Soda bread starts rising the moment the wet and dry ingredients meet, so handle the dough as little as you can and get it into the oven straight away. **Overworking makes it heavy.**\n\nThe dough should be soft and slightly sticky. Shape it into a round on the tray, cut a deep cross in the top so the heat reaches the middle, and sprinkle with seeds.\n\nCook at 200°C for 40 minutes. It is done when the base sounds hollow when tapped. If your oven runs hot, check at 30 minutes. Cool on a rack before slicing, or the crumb will be gummy. Swap some of the seeds for oats or add a handful of raisins if you prefer a softer, sweeter slice.',
    ing: [
      '300 g wholemeal flour',
      '150 g plain flour',
      '60 g mixed seeds',
      '1 tsp bicarbonate of soda',
      '1 tsp salt',
      '400 ml buttermilk',
      '1 tbsp seeds, for the top'
    ],
    st: [
      'Heat the oven to 200°C. Mix the flours, seeds, bicarbonate of soda and salt in a large bowl.',
      'Make a well, pour in the buttermilk and stir quickly until the dough just comes together.',
      'Shape into a round on a floured tray, cut a deep cross in the top and sprinkle with the seeds.',
      'Cook for 40 minutes, until it sounds hollow when tapped underneath. Cool on a rack.'
    ],
    tips: [
      'Mix lightly and get it into the oven fast.',
      'Cut the cross deep.',
      'If your oven runs hot, check at 30 minutes.',
      'Cool fully before slicing.'
    ],
    pair: ['Vegetable soup', 'Cheddar', 'Smoked salmon', 'Butter'],
    store: 'Best on the day it is made. Keeps wrapped for 2 days, and slices freeze well.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'pita-bread': {
    d: 'A yeast dough rolled into rounds and cooked on a very hot tray for 15 minutes until the breads puff into pockets. Eight servings in 1 hour 40 minutes.',
    meta: 'Pita bread: a yeast dough rolled into rounds and cooked on a very hot tray until the breads puff into soft pockets. Eight servings.',
    kw: ['pita bread', 'homemade pita bread', 'pita bread with pockets', 'soft pita bread', 'pita bread from scratch'],
    why: 'Why does pita puff into a pocket? Heat. The dough is rolled thin, and when it hits a very hot surface the water inside turns to steam so fast that it blows the two layers apart.\n\nEverything depends on the heat, so put the tray in the oven while it warms and slide the breads onto it hot. A cold tray gives flat, pale breads with no pocket.\n\nKnead the dough for 8 minutes, until smooth and elastic, then leave to prove for 1 hour. **Roll to an even thickness** of about 5 mm. If one edge is thinner than the rest, the steam escapes there and the pita will not inflate.\n\nCook at 240°C for about 3 minutes a batch, until puffed and lightly golden. If your oven runs hot, check at 2 minutes. Wrap the hot breads in a clean tea towel, which keeps them soft. Dust the work surface lightly with flour, and keep the rolled rounds covered while you work through the batch.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action yeast',
      '1 tsp salt',
      '1 tsp sugar',
      '300 ml warm water',
      '2 tbsp olive oil'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the water and oil and bring together into a dough. Knead for 8 minutes until smooth.',
      'Cover and leave to prove for 1 hour, until doubled.',
      'Heat the oven to 240°C with a baking tray inside. Divide the dough into 8 balls and roll each into a round 5 mm thick.',
      'Bake the breads on the hot tray in batches for 3 minutes, until puffed. Wrap in a tea towel to keep soft.'
    ],
    tips: [
      'Heat the tray before the dough goes on.',
      'Roll to an even thickness.',
      'If your oven runs hot, check at 2 minutes.',
      'Wrap the breads while hot.'
    ],
    pair: ['Hummus', 'Falafel', 'Kebabs', 'Tzatziki'],
    store: 'Keeps in a bag for 2 days. Freeze for up to 2 months and warm in a toaster.',
    rest: [60, 'proving'],
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'cornbread-waffles': {
    d: 'A cornmeal batter cooked in a waffle iron for 5 minutes a waffle until crisp outside and tender inside. Four servings in 30 minutes.',
    meta: 'Cornbread waffles: a cornmeal batter cooked in a waffle iron until crisp outside and tender inside, served with butter and honey or chili.',
    kw: ['cornbread waffles', 'homemade cornbread waffles', 'cornmeal waffles', 'easy cornbread waffles', 'savoury cornbread waffles'],
    why: 'Cornbread batter cooks well in a waffle iron because the ridges crisp every surface. The result is something between a cornbread and a waffle, crunchy at the edge and soft in the middle.\n\nThe batter is thick, thicker than a pancake batter, and should drop from a spoon. Mix the dry and wet ingredients until just combined, with a few lumps left, because overmixing toughens the waffle.\n\nGrease the iron well and heat it fully before the first waffle goes in. **Wait for the steam to ease** before opening the lid. Opening early tears the waffle in half.\n\nThey are ready after about 5 minutes, when they are deep gold and release easily. If your iron runs hot, check at 4 minutes. Keep finished waffles on a rack in a low oven so they stay crisp, not steamed. Fold in grated cheddar and chopped chives for a savoury version that goes well with soup.',
    ing: [
      '150 g cornmeal',
      '100 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs',
      '300 ml milk',
      '60 g melted butter',
      '1 tbsp honey'
    ],
    st: [
      'Heat the waffle iron. Mix the cornmeal, flour, baking powder and salt in a bowl.',
      'Whisk the eggs, milk, melted butter and honey together, pour into the dry mix and stir until just combined.',
      'Pour a ladle of batter into the greased iron and close the lid. Cook for 5 minutes until deep gold. Repeat with the rest.'
    ],
    tips: [
      'Do not overmix the batter.',
      'Grease and heat the iron well.',
      'If your iron runs hot, check at 4 minutes.',
      'Keep finished waffles on a rack.'
    ],
    pair: ['Fried chicken', 'Maple syrup', 'Chili', 'Crispy bacon'],
    store: 'Best fresh. Keeps in the fridge for 2 days; reheat in a toaster.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'waffle-cones': {
    d: 'A thin sugar batter cooked in a pizzelle iron for 2 minutes a cone, then rolled while hot into crisp ice cream cones. Eight cones in 40 minutes.',
    meta: 'Waffle cones: a thin sugar batter cooked in a pizzelle iron and rolled while hot into crisp, vanilla-scented ice cream cones.',
    kw: ['waffle cones', 'homemade waffle cones', 'ice cream waffle cones', 'waffle cone recipe', 'crisp waffle cones'],
    why: 'The cones are made in seconds and shaped in a flash, and everything depends on speed. The waffle is soft and pliable only while hot, and it sets rigid as it cools.\n\nThe batter is thin: eggs, sugar, flour, melted butter and vanilla, whisked until smooth. Rest it for 5 minutes so the flour hydrates, and thin it with a spoon of milk if it will not spread.\n\nPour a spoonful onto a hot waffle iron, close the lid and cook for 2 minutes until pale gold. **Lift it out and roll it at once** around a cone mould or a rolled sheet of card. Hold the seam for 20 seconds as it sets.\n\nIf your iron runs hot, check at 90 seconds. Cool the cones fully on a rack, then store them airtight, since humidity softens them in a day. Practise with the first one, which is often too thick or too pale, then adjust the amount of batter.',
    ing: [
      '2 eggs',
      '100 g caster sugar',
      '100 g plain flour',
      '60 g melted butter',
      '1 tsp vanilla extract',
      '2 tbsp milk',
      '1/4 tsp salt'
    ],
    st: [
      'Whisk the eggs and sugar until pale, then stir in the melted butter, vanilla, milk and salt. Fold in the flour until smooth and leave for 5 minutes.',
      'Heat the waffle iron. Pour a spoonful of batter in, close the lid and cook for 2 minutes until pale gold.',
      'Lift out each waffle and roll it around a cone mould at once, holding the seam for 20 seconds. Cool on a rack.'
    ],
    tips: [
      'Rest the batter for 5 minutes.',
      'Roll each waffle the moment it comes out.',
      'If your iron runs hot, check at 90 seconds.',
      'Store the cones airtight.'
    ],
    pair: ['Ice cream', 'Chocolate dip', 'Sprinkles', 'Fresh berries'],
    store: 'Keeps in an airtight tin for up to 5 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'tortilla-chips': {
    d: 'Corn tortillas cut into wedges, brushed with oil and salt and cooked for 12 minutes until crisp. Four servings in 17 minutes.',
    meta: 'Tortilla chips: corn tortillas cut into wedges, brushed with oil and salt and cooked for 12 minutes until crisp and golden.',
    kw: ['tortilla chips', 'homemade tortilla chips', 'easy tortilla chips', 'crispy tortilla chips', 'corn tortilla chips'],
    why: 'Shop-bought chips are fine, but fresh ones are better: warm, crisp and sprinkled with salt while the oil is still wet. They also take less than 20 minutes.\n\nCorn tortillas work best. Flour ones turn bubbly and chewy rather than snapping. Stack them, cut the pile into 8 wedges and spread them in a single layer on trays.\n\nBrush lightly with oil, because too much makes the chips greasy and heavy. **A thin film is enough.** Season at once, so the salt sticks.\n\nCook at 190°C for 12 minutes, turning the trays halfway, until the chips are golden at the edges. If your oven runs hot, check at 8 minutes. They crisp further as they cool, so do not wait for them to look done in the oven. Lift them onto a rack and leave for 5 minutes before serving with salsa or guacamole. A squeeze of lime over the warm chips just before serving wakes up the salt and the corn flavour.',
    ing: [
      '8 corn tortillas, about 240 g',
      '2 tbsp vegetable oil',
      '1/2 tsp salt',
      '1/2 tsp smoked paprika'
    ],
    st: [
      'Heat the oven to 190°C. Cut the tortillas into 8 wedges each and spread them on two trays.',
      'Brush with the oil and sprinkle with the salt and paprika.',
      'Cook for 12 minutes, turning the trays halfway, until golden. Cool on a rack for 5 minutes.'
    ],
    tips: [
      'Use corn tortillas, not flour.',
      'Brush on only a thin film of oil.',
      'If your oven runs hot, check at 8 minutes.',
      'Do not overlap the wedges.'
    ],
    pair: ['Guacamole', 'Salsa', 'Bean dip', 'Nachos'],
    store: 'Keeps in an airtight container for up to 3 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'pita-chips': {
    d: 'Pita breads cut into triangles, tossed in olive oil, za\'atar and salt and cooked for 10 minutes until crisp. Four servings in 15 minutes.',
    meta: 'Pita chips: pita breads cut into triangles, tossed in olive oil, za\'atar and salt and cooked for 10 minutes until crisp.',
    kw: ['pita chips', 'homemade pita chips', 'easy pita chips', 'crispy pita chips', 'pita chips with za\'atar'],
    why: 'Pita chips are made from bread you may already be about to throw out. Slightly stale pita works best, since it holds less moisture and crisps faster.\n\nSplit each pita around the edge into two thin rounds before cutting. Single layers crisp evenly, while whole ones stay soft in the middle. Cut each round into 8 triangles.\n\nToss them in the oil and za\'atar in a bowl rather than brushing, which coats every piece in one go. **Spread them in one layer** with space between, or they steam instead of crisping.\n\nCook at 190°C for 10 minutes, turning once, until golden. If your oven runs hot, check at 7 minutes. The chips continue to crisp as they cool, so judge them after a few minutes on the rack, not straight out of the oven. If you cannot find za\'atar, a pinch of dried thyme with sesame seeds and a little lemon zest does a similar job.',
    ing: [
      '4 pita breads, about 280 g',
      '3 tbsp olive oil',
      '1 tbsp za\'atar',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 190°C. Split each pita into two rounds and cut each into 8 triangles.',
      'Toss in a bowl with the oil, za\'atar and salt, and spread in one layer on two trays.',
      'Cook for 10 minutes, turning once, until golden. Cool on a rack.'
    ],
    tips: [
      'Split the pitas into two layers.',
      'Spread them in a single layer.',
      'If your oven runs hot, check at 7 minutes.',
      'Judge crispness once cool.'
    ],
    pair: ['Hummus', 'Baba ganoush', 'Tzatziki', 'Feta dip'],
    store: 'Keeps in an airtight container for up to 4 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'caramel-popcorn': {
    d: 'Popcorn coated in a butter and brown sugar caramel and cooked for 15 minutes in a low oven until crisp. Eight servings in 30 minutes.',
    meta: 'Caramel popcorn: popcorn coated in a butter and brown sugar caramel and cooked for 15 minutes in a low oven until crisp.',
    kw: ['caramel popcorn', 'homemade caramel popcorn', 'easy caramel popcorn', 'crunchy caramel popcorn', 'caramel corn'],
    why: 'It sounds like a sweet shop snack and takes about as long as a film trailer. Popcorn, butter, brown sugar and a pinch of bicarbonate of soda: that is the whole list.\n\nThe bicarbonate matters. It makes the caramel foam and turn airy, so it cracks cleanly instead of setting like toffee. Add it off the heat and stand back, because it bubbles up.\n\nPop the corn first and pick out any unpopped kernels, which crack teeth. Pour the hot caramel over in a large bowl and fold gently with a spatula to coat every piece. **Work quickly**, since the caramel stiffens as it cools.\n\nSpread on trays and cook at 120°C for 15 minutes, stirring once, to dry the coating. If your oven runs hot, check at 10 minutes. Cool completely before breaking up, and keep it airtight. Mix in roasted peanuts or pecans at the coating stage for a crunchier version.',
    ing: [
      '100 g popping corn, popped',
      '115 g butter',
      '200 g brown sugar',
      '60 ml golden syrup',
      '1/2 tsp salt',
      '1/2 tsp bicarbonate of soda'
    ],
    st: [
      'Heat the oven to 120°C. Put the popped corn in a large bowl, discarding any unpopped kernels.',
      'Melt the butter, sugar, golden syrup and salt in a pan and boil for 4 minutes. Off the heat, stir in the bicarbonate of soda.',
      'Pour over the popcorn, fold to coat, then spread on two trays. Cook for 15 minutes, stirring once. Cool completely.'
    ],
    tips: [
      'Discard unpopped kernels.',
      'Add the bicarbonate off the heat.',
      'If your oven runs hot, check at 10 minutes.',
      'Cool fully before storing.'
    ],
    pair: ['Movie night', 'Lunch boxes', 'Party bowls', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for up to 1 week.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'seeded-crackers': {
    d: 'A simple seed and flour dough rolled thin and cooked for 25 minutes into crisp, nutty crackers. Ten servings in 35 minutes.',
    meta: 'Seeded crackers: a simple seed and flour dough rolled thin and cooked for 25 minutes into crisp, nutty crackers for cheese and dips.',
    kw: ['seeded crackers', 'homemade seeded crackers', 'easy seeded crackers', 'crispy seed crackers', 'crackers for cheese'],
    why: 'Homemade crackers are dough rolled thin, and thinness is the entire skill. A cracker that is 2 mm thick snaps, while one at 5 mm is hard and dry.\n\nMix the flour, seeds, salt and oil with warm water to a firm dough. It will feel rough, and that is correct. Rest it for 5 minutes, then roll between two sheets of baking paper to avoid adding more flour.\n\nCut or score it into squares before it goes in the oven, since crackers shatter if you cut them after. **Prick each one with a fork** to stop big bubbles forming.\n\nCook at 180°C for 25 minutes, turning the tray halfway, until golden. The ones at the edge colour first, so lift them off early. If your oven runs hot, check at 18 minutes. Cool on a rack, where they crisp further. Add rosemary, black pepper or a little grated parmesan to the dough to vary the flavour from batch to batch.',
    ing: [
      '200 g plain flour',
      '80 g mixed seeds',
      '1 tsp salt',
      '3 tbsp olive oil',
      '120 ml warm water',
      '1 tsp flaky salt, for the top'
    ],
    st: [
      'Heat the oven to 180°C. Mix the flour, seeds and salt, then stir in the oil and water to a firm dough. Rest for 5 minutes.',
      'Roll the dough very thin between two sheets of paper. Peel off the top sheet, slide the dough on a tray and score into squares.',
      'Prick with a fork, sprinkle with the flaky salt and cook for 25 minutes until golden. Cool on a rack.'
    ],
    tips: [
      'Roll the dough very thin.',
      'Score before cooking.',
      'If your oven runs hot, check at 18 minutes.',
      'Remove the edge crackers first.'
    ],
    pair: ['Cheddar', 'Hummus', 'Soup', 'Smoked salmon'],
    store: 'Keeps in an airtight tin for up to 1 week.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'oat-cakes': {
    d: 'Porridge oats, butter and hot water pressed into a dough, cut into rounds and cooked for 20 minutes into crisp Scottish oatcakes. Twelve servings in 30 minutes.',
    meta: 'Oat cakes: porridge oats, butter and hot water pressed into a dough, cut into rounds and cooked for 20 minutes into crisp Scottish oatcakes.',
    kw: ['oat cakes', 'homemade oat cakes', 'scottish oatcakes', 'easy oat cakes', 'oatcakes with cheese'],
    why: 'Oatcakes are oats, fat, salt and water, and they have fed people in Scotland for centuries. They are drier and more rustic than a biscuit, and they carry cheese or butter well.\n\nPulse half the oats in a blender to a coarse flour and leave the rest whole. The mix of fine and coarse gives a dough that holds together with a pleasant crumble.\n\nMelt the butter into the hot water and stir it in. **The dough will look dry at first**, but it softens in a minute as the oats absorb the water. Press it together with your hands.\n\nRoll to about 5 mm thick, cut rounds with a cutter and lift them on to a tray. Cook at 180°C for 20 minutes, turning them over for the last 5. If your oven runs hot, check at 15 minutes. Cool on a rack. They crisp as they cool. They are traditionally eaten with cheese, butter or honey, and they are a good base for smoked fish and soft cheese.',
    ing: [
      '250 g porridge oats',
      '50 g butter',
      '100 ml hot water',
      '1/2 tsp salt',
      '1/2 tsp bicarbonate of soda'
    ],
    st: [
      'Heat the oven to 180°C. Blend half the oats to a coarse flour and mix with the rest of the oats, the salt and bicarbonate.',
      'Melt the butter into the hot water, stir into the oats and press into a dough.',
      'Roll out to 5 mm thick and cut into rounds. Cook on a tray for 20 minutes, turning for the last 5 minutes. Cool on a rack.'
    ],
    tips: [
      'Blend only half the oats.',
      'Give the dough a minute to absorb the water.',
      'If your oven runs hot, check at 15 minutes.',
      'Cool on a rack so they crisp.'
    ],
    pair: ['Cheddar', 'Smoked salmon', 'Butter and jam', 'Soup'],
    store: 'Keeps in an airtight tin for up to 1 week.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'meal-prep-chicken-and-rice': {
    d: 'Chicken breast roasted with paprika and garlic, packed with rice and broccoli into four boxes for the week. Four servings in 45 minutes.',
    meta: 'Meal prep chicken and rice: chicken breast roasted with paprika and garlic, packed with rice and broccoli into four boxes for the week.',
    kw: ['meal prep chicken and rice', 'chicken and rice meal prep', 'chicken rice bowls', 'meal prep chicken boxes', 'weekly meal prep'],
    why: 'It is not exciting, and it is not meant to be: this is the lunch you do not have to think about on Wednesday. The skill is cooking each part so it still tastes good after four days in the fridge.\n\nRoast the chicken until just done and no further. Dry chicken is the main complaint about meal prep, and it comes from cooking to the point of safety plus another ten minutes. Slice it across the grain, and it reheats without going stringy.\n\nCool the rice quickly by spreading it on a tray, then box it within an hour. **Rice left warm for hours is a food safety risk**, so do not skip the cooling.\n\nPack the broccoli separately from the sauce to keep it from going soft, and add the dressing when you eat. Reheat until steaming hot all the way through, once only. Rotate the flavourings through the week, using a different sauce each day to stop the boxes getting boring.',
    ing: [
      '600 g chicken breast',
      '2 tbsp olive oil',
      '2 tsp smoked paprika',
      '3 garlic cloves, grated',
      '1 tsp salt',
      '300 g long-grain rice',
      '300 g broccoli florets',
      '2 tbsp soy sauce'
    ],
    st: [
      'Heat the oven to 200°C. Rub the chicken with the oil, paprika, garlic and salt and roast on a tray for 20 minutes, until cooked through. Rest for 5 minutes.',
      'Boil the rice for 12 minutes, drain and spread on a tray to cool.',
      'Steam the broccoli for 4 minutes.',
      'Slice the chicken and divide the rice, chicken and broccoli among four boxes. Drizzle with the soy sauce when you eat.'
    ],
    tips: [
      'Do not overcook the chicken.',
      'Cool the rice quickly.',
      'If your oven runs hot, check the chicken at 15 minutes.',
      'Reheat only once, until piping hot.'
    ],
    pair: ['Hot sauce', 'Sliced cucumber', 'Pickled ginger', 'Fried egg'],
    store: 'Keeps in the fridge for up to 4 days in sealed boxes. Reheat once, until steaming hot.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'meal-prep-burrito-bowls': {
    d: 'Spiced rice, black beans, sweetcorn and roasted peppers packed into four boxes with salsa and cheese. Four servings in 40 minutes.',
    meta: 'Meal prep burrito bowls: spiced rice, black beans, sweetcorn and roasted peppers packed into four boxes with salsa and cheese.',
    kw: ['meal prep burrito bowls', 'burrito bowl meal prep', 'vegetarian burrito bowls', 'make ahead burrito bowls', 'black bean burrito bowls'],
    why: 'A burrito bowl is every part of a burrito without the wrapper, which makes it the easiest thing to pack in advance. The parts keep well apart and come together in the box.\n\nCook the rice with cumin and a squeeze of lime so it tastes of something. Plain rice is the dullest part of a bowl, and a few seasonings change that.\n\nRoast the peppers and onion at 220°C for 25 minutes, until blistered at the edges. **Drain and rinse the beans**, since the tin liquid is salty and slimy and leaves the bowls wet.\n\nIf your oven runs hot, check the vegetables at 18 minutes. Pack the salsa and cheese in the corner of each box, not on the rice, so the bowl does not go soggy. Add avocado on the day, as it browns. Reheat without the salsa and add it cold on top. Swap the black beans for pinto beans, or add a handful of shredded cooked chicken for more protein.',
    ing: [
      '300 g long-grain rice',
      '1 tsp ground cumin',
      '1 lime, juiced',
      '480 g tinned black beans, drained',
      '200 g sweetcorn',
      '2 red peppers, sliced',
      '1 red onion, sliced',
      '2 tbsp olive oil',
      '120 g salsa',
      '80 g grated cheddar'
    ],
    st: [
      'Heat the oven to 220°C. Toss the peppers and onion with the oil and roast for 25 minutes.',
      'Boil the rice with the cumin for 12 minutes, drain and stir in the lime juice.',
      'Warm the beans and sweetcorn together for 3 minutes.',
      'Divide the rice, beans, sweetcorn and roasted vegetables among four boxes and top with the salsa and cheese.'
    ],
    tips: [
      'Season the rice.',
      'Rinse the beans well.',
      'If your oven runs hot, check the vegetables at 18 minutes.',
      'Add avocado on the day.'
    ],
    pair: ['Avocado', 'Sour cream', 'Pickled jalapeños', 'Tortilla chips'],
    store: 'Keeps in the fridge for up to 4 days in sealed boxes. Reheat until steaming hot.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'freezer-burritos': {
    d: 'Flour tortillas filled with beans, rice, cheese and salsa, wrapped in foil and frozen, then reheated from frozen. Eight burritos in 30 minutes.',
    meta: 'Freezer burritos: flour tortillas filled with beans, rice, cheese and salsa, wrapped and frozen, then reheated from frozen.',
    kw: ['freezer burritos', 'homemade freezer burritos', 'freezer burrito recipe', 'bean and cheese burritos', 'frozen burritos'],
    why: 'The point of a freezer burrito is that dinner is already made. A batch of eight takes half an hour on a weekend, and each one is ready from frozen in a few minutes.\n\nThe filling must be dry. Wet filling freezes into ice crystals that soak the tortilla when it thaws. Mash the beans, drain the salsa and warm the rice before mixing, so that the mixture is thick enough to sit on a spoon.\n\nWarm the tortillas for 10 seconds so they fold without cracking. Put about 3 tablespoons of filling in the middle, tuck in the sides and roll tightly. **Wrap each burrito in foil**, then freeze flat on a tray.\n\nTo reheat, take off the foil, wrap in a paper towel and microwave from frozen for 3 minutes, turning once. A hot pan for 2 minutes crisps the outside. Label each with the date and filling, and freeze them flat so they stack easily.',
    ing: [
      '480 g flour tortillas (8)',
      '480 g tinned black beans, drained and mashed',
      '300 g cooked rice',
      '200 g grated cheddar',
      '120 g salsa, drained',
      '1 tsp ground cumin',
      '1/2 tsp salt'
    ],
    st: [
      'Mix the beans, rice, cheddar, salsa, cumin and salt.',
      'Warm the tortillas for 10 seconds each. Spoon filling down the middle of each, fold in the sides and roll tightly.',
      'Wrap each burrito in foil and freeze on a tray. To eat, unwrap and reheat from frozen until steaming hot.'
    ],
    tips: [
      'Keep the filling dry and thick.',
      'Warm the tortillas so they do not crack.',
      'Wrap each one individually.',
      'Reheat until hot in the middle.'
    ],
    pair: ['Guacamole', 'Sour cream', 'Extra salsa', 'Green salad'],
    store: 'Freeze for up to 3 months. Reheat from frozen until steaming hot.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'freezer-meatballs': {
    d: 'Beef and pork meatballs browned in the oven for 20 minutes and frozen on a tray, ready to drop into sauce. Eight servings in 40 minutes.',
    meta: 'Freezer meatballs: beef and pork meatballs browned in the oven for 20 minutes and frozen on a tray, ready to drop into sauce.',
    kw: ['freezer meatballs', 'homemade freezer meatballs', 'freezer meatball recipe', 'frozen meatballs', 'meatballs to freeze'],
    why: 'A bag of meatballs in the freezer is the nearest thing to a convenience food that is still food. Brown them now and a simmer in sauce finishes them any night.\n\nMix the mince with breadcrumbs, milk, egg, onion and garlic, and handle it as little as possible. A soft, light mixture gives tender meatballs, and a squeezed one gives rubbery ones. **Wet your hands** to stop the mix sticking.\n\nShape into 32 balls of about 25 g each, and spread them on a lined tray. Cook at 200°C for 20 minutes, turning once, until browned all over. If your oven runs hot, check at 15 minutes.\n\nCool completely, then freeze flat on the tray before bagging, so they do not stick together. To use, drop frozen into simmering sauce for 20 minutes, until hot all the way through. A spoonful of grated parmesan in the mix adds flavour, and a little chopped basil makes them more Italian.',
    ing: [
      '500 g beef mince',
      '300 g pork mince',
      '60 g breadcrumbs',
      '80 ml milk',
      '1 egg',
      '1 onion, grated',
      '3 garlic cloves, grated',
      '2 tbsp chopped parsley',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Mix everything gently until just combined.',
      'Shape into 32 balls with wet hands and spread them on a lined tray.',
      'Cook for 20 minutes, turning once, until browned. Cool completely, then freeze on the tray and bag up.'
    ],
    tips: [
      'Handle the mixture lightly.',
      'Wet your hands for shaping.',
      'If your oven runs hot, check at 15 minutes.',
      'Freeze flat before bagging.'
    ],
    pair: ['Spaghetti', 'Tomato sauce', 'Sub rolls', 'Mashed potato'],
    store: 'Freeze for up to 3 months. Simmer from frozen in sauce for 20 minutes, until hot all the way through.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'freezer-soup': {
    d: 'A thick vegetable and lentil soup simmered for 35 minutes, cooled and frozen in portions. Eight servings in 50 minutes.',
    meta: 'Freezer soup: a thick vegetable and lentil soup simmered for 35 minutes, cooled and frozen in portions for quick lunches.',
    kw: ['freezer soup', 'homemade freezer soup', 'soup to freeze', 'vegetable lentil soup', 'freezer soup recipe'],
    why: 'Soup freezes better than almost anything, and a big pot is cheaper per bowl than a small one. Cook once, and lunch is sorted for weeks.\n\nChoose ingredients that survive freezing. Carrots, onions, celery, lentils and tomatoes are all fine. Potatoes can go grainy and pasta swells to mush, so leave both out and add them fresh when you reheat.\n\nSimmer for 35 minutes, until the lentils are soft and the vegetables are tender. **Cool the soup quickly** by standing the pot in a sink of cold water, then ladle into tubs and freeze.\n\nLeave a gap at the top, since soup expands as it freezes. Label each tub, because by month two nobody remembers what is in it. Reheat from frozen in a covered pan over low heat, or thaw in the fridge overnight. Loosen with a splash of water and taste for salt. Stir in a spoonful of lemon juice and a handful of chopped herbs when reheating to freshen the flavour.',
    ing: [
      '2 tbsp olive oil',
      '2 onions, chopped',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '3 garlic cloves, chopped',
      '200 g red lentils',
      '2 x 400 g tins chopped tomatoes',
      '1.5 litres vegetable stock',
      '1 tsp ground cumin',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil and fry the onions, carrots and celery for 8 minutes. Add the garlic and cumin for 1 minute.',
      'Add the lentils, tomatoes, stock and salt and simmer for 35 minutes, until the lentils are soft.',
      'Cool quickly, ladle into tubs and freeze.'
    ],
    tips: [
      'Leave out potatoes and pasta.',
      'Cool the soup fast before freezing.',
      'Leave room in the tubs.',
      'Label every tub.'
    ],
    pair: ['Crusty bread', 'Grated cheddar', 'Toast', 'Yoghurt'],
    store: 'Freeze for up to 3 months. Reheat from frozen over low heat until steaming hot.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'mason-jar-salad': {
    d: 'Layers of dressing, chickpeas, cucumber, tomato, carrot and leaves in a jar, ready for the lunch box. Four servings in 15 minutes.',
    meta: 'Mason jar salad: layers of dressing, chickpeas, cucumber, tomato, carrot and leaves packed in a jar for a crisp lunch.',
    kw: ['mason jar salad', 'mason jar salad recipe', 'salad in a jar', 'make ahead salad jars', 'lunch salad jars'],
    why: 'Everything depends on the order. The dressing goes in first, at the bottom, and the leaves go in last, at the top, so nothing touches and nothing wilts.\n\nAfter the dressing come the hard, wet vegetables that do not mind sitting in it: chickpeas, carrot and cucumber. Then the softer ones, such as tomatoes, then the cheese, and finally a tight packing of leaves.\n\n**Dry every ingredient first.** Wet vegetables make the salad soggy within a day, and a salad spinner is the quickest way to dry the leaves.\n\nUse wide-mouth jars of about 750 ml, which are easier to fill and to eat from. Pack firmly, since the lid keeps the leaves from being crushed. To eat, shake the jar well and tip it into a bowl, so the dressing coats everything. Keep the jars cold, upright, and out of the lunch bag until you need them. Pick sturdy leaves such as spinach, kale or romaine, and avoid delicate ones such as rocket that wilt quickly.',
    ing: [
      '4 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tsp mustard',
      '1/2 tsp salt',
      '480 g tinned chickpeas, drained',
      '1 cucumber, diced',
      '2 carrots, grated',
      '200 g cherry tomatoes, halved',
      '100 g feta, crumbled',
      '120 g baby spinach'
    ],
    st: [
      'Whisk the oil, lemon juice, mustard and salt and divide among four wide jars.',
      'Layer in the chickpeas, cucumber, carrots, tomatoes and feta, in that order, pressing down lightly.',
      'Pack the spinach on top, seal and keep in the fridge. Shake and tip into a bowl to eat.'
    ],
    tips: [
      'Put the dressing at the bottom.',
      'Dry all the vegetables first.',
      'Pack the leaves in last.',
      'Shake before eating.'
    ],
    pair: ['Grilled chicken', 'Crusty bread', 'Boiled eggs', 'Hummus'],
    store: 'Keeps in the fridge for up to 3 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'sweet-potato-brownies': {
    d: 'Mashed sweet potato, cocoa, dark chocolate and eggs mixed into a fudgy tray of brownies and cooked for 30 minutes. Twelve servings in 45 minutes.',
    meta: 'Sweet potato brownies: mashed sweet potato, cocoa, dark chocolate and eggs mixed into fudgy brownies and cooked for 30 minutes.',
    kw: ['sweet potato brownies', 'homemade sweet potato brownies', 'fudgy sweet potato brownies', 'easy sweet potato brownies', 'brownies with sweet potato'],
    why: 'The sweet potato does what butter and flour do in a regular brownie: it makes the crumb dense, soft and fudgy. You cannot taste it, only the chocolate.\n\nCook the potato until completely soft, then mash it smooth. Lumps leave pale pockets in the finished brownie. Weigh the mash and let it cool a little, so it does not scramble the eggs.\n\nMelt the chocolate with the butter, then stir in the sugar, eggs and mash, and finally fold in the flour and cocoa. **Stop as soon as no streaks of flour remain.** More mixing makes them tough.\n\nCook at 180°C for 30 minutes. The edges should be set and the middle slightly soft, because the brownies firm up as they cool. If your oven runs hot, check at 25 minutes. Cool in the tin before cutting, or they fall apart. A handful of chopped walnuts or chocolate chunks folded in at the end gives texture.',
    ing: [
      '300 g sweet potato, cooked and mashed',
      '150 g dark chocolate',
      '80 g butter',
      '150 g caster sugar',
      '2 eggs',
      '60 g plain flour',
      '30 g cocoa powder',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin. Melt the chocolate and butter together and cool slightly.',
      'Whisk in the sugar, eggs, sweet potato and vanilla until smooth.',
      'Fold in the flour, cocoa and salt until just combined and spread in the tin.',
      'Cook for 30 minutes, until the edges are set. Cool completely in the tin before cutting.'
    ],
    tips: [
      'Mash the sweet potato smooth.',
      'Do not overmix.',
      'If your oven runs hot, check at 25 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Vanilla ice cream', 'Raspberries', 'Black coffee', 'Whipped cream'],
    store: 'Keeps in an airtight tin for up to 4 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  }
};
