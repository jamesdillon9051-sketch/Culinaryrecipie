'use strict';

/**
 * Volume fifty-three — air fryer, Instant Pot and oven dinners, first part.
 *
 * Twenty-five air fryer dishes: a baked potato, banana bread, brownies,
 * burgers, nuggets, cinnamon rolls, cookies, crab cakes, drumsticks,
 * dumplings, eggplant, empanadas, falafel, fish tacos, fish and chips, fried
 * chicken, grilled cheese, gyoza, lamb chops, pierogies, pizza rolls,
 * popcorn chicken, pork belly, a quesadilla and spring rolls. Nutrition is
 * estimated by npm run calc.
 */

module.exports = {
  'air-fryer-baked-potato': {
    cookMax: 45,
    d: 'Scrubbed baking potatoes, oiled and salted, cooked in the air fryer for 40 minutes until the skin crackles and the middle is soft.',
    meta: 'Air fryer baked potato with a crisp salted skin and a fluffy middle. Two servings, ready in 45 minutes with 5 minutes of prep.',
    kw: ['air fryer baked potato', 'baked potato in air fryer', 'air fryer jacket potato', 'crispy skin baked potato', 'air fryer baked potatoes'],
    why: 'Salt the skin and do not wrap the potato in foil. Foil traps steam, and steam is the enemy of a crisp skin. In the air fryer the moving air dries the surface as it cooks, so a potato rubbed with oil and coarse salt ends up with a skin you can hear.\n\nChoose a floury variety such as a russet or a King Edward. Their flesh breaks into dry, fluffy crumbs when cooked, where waxy potatoes stay dense and a little damp. Scrub the skins, dry them thoroughly and prick each one a few times with a fork so steam can leave through the holes instead of stressing the skin.\n\n**Turn the potatoes halfway** through the cooking time so that the side resting on the basket does not stay pale. A potato is fully baked when a skewer slides into the centre with no resistance and the skin feels papery when you squeeze it with a cloth.\n\nSplit it straight away. Left whole, the steam inside softens the skin as it sits.',
    ing: [
      '600 g baking potatoes, scrubbed, about 2 large',
      '2 tsp olive oil',
      '1 tsp coarse sea salt',
      '20 g butter',
      '40 g cheddar, grated',
      '2 tbsp soured cream',
      '1 tbsp chives, finely chopped'
    ],
    st: [
      'Heat the air fryer to 200C. Scrub the potatoes, dry them very well and prick each one 4 or 5 times with a fork.',
      'Rub the potatoes with the olive oil, then roll them in the coarse salt so the skin is evenly coated.',
      'Place the potatoes in the basket with space between them. Air fry for 40 minutes, turning them over after 20 minutes.',
      'Test with a skewer through the thickest part. It should slide in easily. If it meets resistance, cook for 5 minutes more.',
      'Split each potato lengthways, push the ends together to open it and add the butter, cheddar, soured cream and chives.'
    ],
    tips: [
      'Dry the skins completely before oiling, or the salt will not stick.',
      'If the potatoes are small, check at 30 minutes.',
      'Use a cloth to squeeze the potato: a papery skin means it is ready.'
    ],
    pair: ['Baked beans', 'Coleslaw', 'Chilli con carne', 'Green salad'],
    store: 'Eat straight away. Leftover cooked potatoes keep for 2 days in the fridge and reheat well in the air fryer for 5 minutes.',
    nut: [459, 11, 52, 23, 7, 3, 1330]
  },

  'air-fryer-banana-bread': {
    d: 'A moist banana loaf baked in a small tin inside the air fryer, with a golden top and a soft crumb, ready to slice after cooling.',
    meta: 'Air fryer banana bread: a small, moist loaf with a golden top. Eight slices, ready in 45 minutes with 10 minutes of prep.',
    kw: ['air fryer banana bread', 'banana bread in air fryer', 'small batch banana bread', 'air fryer banana loaf', 'moist banana bread'],
    why: 'Short loaf, short bake. A small tin inside an air fryer cooks banana bread faster than a full-size oven loaf, and the fan is strong enough to colour the top before the middle sets, which is why the temperature here is lower than you might expect.\n\nThe bananas do the work. Use fruit with black freckles all over the skin, because the starch has already turned to sugar and the flesh mashes to a loose puree. Pale bananas make a bland, dry loaf however long you bake it.\n\n**Cover the tin loosely with foil after 20 minutes** if the top is already deep brown. The air fryer browns from above with no way to move the tin further from the element, so foil is the only brake you have. Stir the batter just until the flour disappears, because beating it makes the crumb tough and rubbery.\n\nThe loaf is done when a skewer comes out with a few moist crumbs, not wet batter. Cool it in the tin for 10 minutes before turning it out.',
    ing: [
      '3 ripe bananas, about 300 g peeled',
      '80 g butter, melted',
      '120 g light brown sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '180 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the air fryer to 160C. Grease and line a 900 g loaf tin that fits in the basket.',
      'Mash the bananas in a large bowl until almost smooth. Stir in the melted butter, brown sugar, egg and vanilla.',
      'Mix the flour, baking powder, bicarbonate of soda, salt and cinnamon, then fold into the banana mixture until just combined.',
      'Pour the batter into the tin and level the top. Bake in the air fryer for 35 minutes, covering with foil after 20 minutes if the top browns too fast.',
      'Check with a skewer: it should come out with a few moist crumbs. Cool in the tin for 10 minutes, then lift out and slice.'
    ],
    tips: [
      'Weigh the bananas after peeling so the loaf is not too wet.',
      'Cover the top with foil if it is dark before the 20 minute mark.',
      'Wait for the loaf to cool before slicing, or the crumb will tear.'
    ],
    pair: ['Butter', 'Coffee', 'Greek yogurt', 'Peanut butter'],
    store: 'Keeps in an airtight container for 3 days, or sliced and frozen for 1 month.',
    nut: [261, 4, 41, 9, 2, 19, 230]
  },

  'air-fryer-brownies': {
    untimed: ['cooling completely'],
    d: 'Fudgy chocolate brownies baked in a small tin in the air fryer for 20 minutes, with a crackled top and a soft centre.',
    meta: 'Air fryer brownies: fudgy squares with a crackled top, baked in a small tin. Nine servings, ready in 30 minutes.',
    kw: ['air fryer brownies', 'brownies in air fryer', 'fudgy air fryer brownies', 'small batch brownies', 'air fryer chocolate brownies'],
    why: 'The top cracks like a thin sheet of ice when you press it, and that is the sign of a good brownie. The crust comes from whisking the sugar into the eggs until the mixture is pale and thick, which dissolves the sugar and floats it to the surface during baking.\n\nBrownies in an air fryer need a small square tin, about 18 cm, set on the basket rather than directly under the fan. Lower the temperature to 160C so the edges do not set before the middle has had time to cook through. A brownie is ready when the surface is dull and the middle still wobbles slightly.\n\n**Do not bake until a skewer comes out clean.** By then the centre has set past fudgy and into cake. A few damp crumbs on the skewer mean the brownie will finish setting as it cools in the tin.\n\nMelt the chocolate and butter gently and let them cool a little before adding the eggs, otherwise the heat scrambles them. Cut with a hot knife once completely cold.',
    ing: [
      '120 g dark chocolate, chopped',
      '100 g butter',
      '150 g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '70 g plain flour',
      '20 g cocoa powder',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the air fryer to 160C. Grease and line an 18 cm square tin.',
      'Melt the chocolate and butter together in a bowl over a pan of simmering water, stirring until smooth. Let it cool for 5 minutes.',
      'Whisk the sugar, eggs and vanilla for 3 minutes until pale and thick. Stir in the cooled chocolate.',
      'Sift in the flour, cocoa and salt and fold until no streaks remain. Pour into the tin and smooth the top.',
      'Bake in the air fryer for 20 minutes. The top should be crackled and the centre just set. Cool completely in the tin before cutting into 9 squares.'
    ],
    tips: [
      'Check at 17 minutes if your air fryer runs hot.',
      'Pull the brownies out when a skewer shows damp crumbs, not clean.',
      'Chill for 30 minutes before slicing for neat edges.'
    ],
    pair: ['Vanilla ice cream', 'Raspberries', 'Whipped cream', 'Cold milk'],
    store: 'Keeps in an airtight container for 4 days, or frozen for 1 month.',
    nut: [275, 3, 32, 15, 2, 23, 80]
  },

  'air-fryer-burgers': {
    d: 'Beef patties pressed thin with a dimple in the centre, air fried for 12 minutes and served in toasted buns with cheese.',
    meta: 'Air fryer burgers with a browned crust and a juicy middle, ready in 22 minutes. Four servings with cheese and buns.',
    kw: ['air fryer burgers', 'burgers in air fryer', 'air fryer hamburgers', 'air fryer beef burgers', 'juicy air fryer burgers'],
    why: 'Hamburger means from Hamburg, but the style known today is a thoroughly American habit. The air fryer suits it well, because the hot circulating air browns the surface of the patty while the fat drips away to the bottom of the basket.\n\nShape the patties wider than the bun, as they shrink as they cook, and press a shallow dimple into the middle of each one. Without the dimple the centre puffs up and the burger turns into a dome. Use mince with at least 15 per cent fat, or the patties will taste dry however carefully you time them.\n\n**Season the outside only, just before cooking.** Salt mixed through the meat tightens the protein and makes the burger dense, more like a meatball than a burger. Handle the mince as little as possible.\n\nPut the cheese on for the final minute so it melts without sliding off. Rest the patties for 2 minutes, which lets the juices settle back through the meat before the first bite.',
    ing: [
      '600 g beef mince, 15 to 20 per cent fat',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 slices cheddar, about 80 g',
      '4 burger buns',
      '20 g butter, softened',
      '4 lettuce leaves',
      '1 tomato, sliced',
      '4 tbsp burger sauce'
    ],
    st: [
      'Divide the mince into 4 portions and shape each into a patty about 11 cm wide. Press a dimple into the middle with your thumb. Chill for 10 minutes.',
      'Heat the air fryer to 190C. Season both sides of the patties with the salt and pepper just before cooking.',
      'Air fry the patties in a single layer for 10 minutes, turning once. Lay a slice of cheese on each patty and cook for 2 minutes more.',
      'Rest the patties for 2 minutes. Spread the buns with butter and toast them in the air fryer for 2 minutes.',
      'Build each burger with the sauce, lettuce, tomato and patty.'
    ],
    tips: [
      'Do not press the patties down while they cook.',
      'Use a thermometer: 71C in the centre means they are cooked through.',
      'If the basket smokes, put a splash of water in the bottom drawer.'
    ],
    pair: ['Sweet potato fries', 'Coleslaw', 'Pickles', 'Onion rings'],
    store: 'Cooked patties keep for 2 days in the fridge. Reheat in the air fryer for 4 minutes at 160C.',
    nut: [632, 39, 29, 40, 2, 6, 1210]
  },

  'air-fryer-chicken-nuggets': {
    d: 'Chicken breast pieces coated in seasoned breadcrumbs and air fried for 12 minutes until crisp and golden, with a dip alongside.',
    meta: 'Air fryer chicken nuggets with a crisp crumb coating, cooked for 12 minutes. Four servings, ready in 32 minutes.',
    kw: ['air fryer chicken nuggets', 'homemade chicken nuggets', 'chicken nuggets in air fryer', 'crispy chicken nuggets', 'breaded chicken nuggets'],
    why: 'Nuggets are mostly about the crumb. A plain breadcrumb coat tastes of nothing, so the panko here is mixed with paprika, garlic powder and a little grated parmesan, and a spoonful of oil stirred through the crumbs helps them brown without deep frying.\n\nCut the chicken into pieces of roughly the same size, about 3 cm, so that they all finish together. Use breast meat for a lean nugget, or thigh if you prefer it juicier. Pat the pieces dry before the flour, or the coating slides off in the basket.\n\n**Use the three-bowl method**: flour, then beaten egg, then crumbs. Press the crumbs on firmly with your palm. A dry hand and a wet hand keep the coating off your fingers.\n\nCook in a single layer with a little space between the nuggets so the air reaches every side. Crowding them leaves pale, soft patches. Spray lightly with oil before cooking, and turn them once halfway through.',
    ing: [
      '600 g chicken breast, cut into 3 cm pieces',
      '50 g plain flour',
      '2 eggs, beaten',
      '100 g panko breadcrumbs',
      '2 tbsp parmesan, finely grated',
      '1 tsp paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '2 tbsp olive oil',
      '4 tbsp ketchup, to serve'
    ],
    st: [
      'Heat the air fryer to 200C. Pat the chicken pieces dry and season with half of the salt.',
      'Mix the panko, parmesan, paprika, garlic powder and the remaining salt in a shallow bowl. Stir in the olive oil until the crumbs look damp.',
      'Put the flour in a second bowl and the beaten eggs in a third. Coat each piece in flour, then egg, then press firmly into the crumbs.',
      'Lay the nuggets in a single layer in the basket, working in batches if needed. Air fry for 12 minutes, turning them after 6 minutes.',
      'Check that the chicken is white all the way through with no pink. Serve hot with the ketchup.'
    ],
    tips: [
      'Cook in batches rather than stacking nuggets in the basket.',
      'If the crumbs look dry in places, spray with a little oil before cooking.',
      'Freeze the uncooked coated nuggets on a tray, then bag them for later.'
    ],
    pair: ['Ketchup', 'Honey mustard', 'Sweet potato fries', 'Green peas'],
    store: 'Keeps for 2 days in the fridge. Reheat in the air fryer for 4 minutes at 180C.',
    nut: [435, 42, 33, 15, 1, 5, 940]
  },

  'air-fryer-cinnamon-rolls': {
    d: 'Soft yeast rolls rolled with cinnamon sugar, proved and air fried for 12 minutes, then glazed with cream cheese icing while warm.',
    meta: 'Air fryer cinnamon rolls: soft swirls with cream cheese icing, cooked for 12 minutes. Six servings, 32 minutes of work plus an hour\'s rise.',
    kw: ['air fryer cinnamon rolls', 'cinnamon rolls in air fryer', 'homemade cinnamon rolls', 'cream cheese icing cinnamon rolls', 'small batch cinnamon rolls'],
    why: 'Flour, butter, sugar, cinnamon, milk and yeast: six ingredients, and the smell of the kitchen does the rest. This is a small batch of cinnamon rolls, enough for six, made to fit the basket of an air fryer without any special tin.\n\nThe dough is soft and a little sticky, which is what makes the finished roll tender. Knead it until it springs back when you press it with a finger. Roll it out thin, spread it with soft butter and a thick layer of cinnamon sugar, and roll it up tightly from the long side so that the swirl stays together.\n\n**Cut with dental floss or a very sharp knife**, not a blunt one. A blunt knife squashes the roll and closes up the swirl. Let the cut rolls rise until they touch each other, then cook them at a lower heat so the middle bakes before the outside darkens.\n\nIce them while they are still warm. The cream cheese icing melts into the gaps and soaks into every layer.',
    ing: [
      '250 g plain flour',
      '7 g fast action yeast',
      '30 g caster sugar',
      '1/2 tsp salt',
      '120 ml warm milk',
      '40 g butter, melted',
      '1 egg',
      '40 g butter, softened, for the filling',
      '60 g light brown sugar',
      '2 tsp ground cinnamon',
      '60 g cream cheese',
      '40 g icing sugar',
      '1 tbsp milk'
    ],
    st: [
      'Mix the flour, yeast, caster sugar and salt. Add the warm milk, melted butter and egg and stir to a soft dough. Knead for 8 minutes until smooth, then let it rise in a covered bowl for 1 hour.',
      'Roll the dough into a rectangle about 30 by 20 cm. Spread with the softened butter, then scatter over the brown sugar and cinnamon.',
      'Roll up tightly from the long side. Cut into 6 equal pieces and place cut side up in a lined 18 cm tin that fits the air fryer. Cover and leave for 20 minutes.',
      'Heat the air fryer to 160C. Cook the rolls for 12 minutes until golden and risen, covering with foil if the tops brown too quickly.',
      'Beat the cream cheese, icing sugar and milk until smooth. Spread over the warm rolls and serve.'
    ],
    tips: [
      'Use a cotton thread or dental floss to cut the log cleanly.',
      'If the dough is very sticky, add flour a spoonful at a time, not all at once.',
      'Cover the tops with foil if they brown before 10 minutes.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Fresh berries', 'Cold milk'],
    store: 'Best the day they are made. Keeps for 2 days in an airtight container; warm for 15 seconds in the microwave.',
    rest: [80, 'Rising'],
    nut: [396, 7, 56, 16, 2, 23, 250]
  },

  'air-fryer-cookies': {
    d: 'Chocolate chip cookies baked in the air fryer in two batches of six, with crisp edges and soft centres after 10 minutes.',
    meta: 'Air fryer cookies with crisp edges and soft chewy middles, baked for 10 minutes. Twelve cookies, ready in 20 minutes.',
    kw: ['air fryer cookies', 'chocolate chip cookies in air fryer', 'air fryer chocolate chip cookies', 'small batch cookies', 'air fryer cookie recipe'],
    why: 'Why do cookies spread so much less in an air fryer? The moving air sets the edges of the dough quickly, so the cookie holds its shape before the butter has time to melt out. That gives a thicker, chewier cookie than the same dough would make in a flat oven tray.\n\nCook at a lower heat than you might think, 160C, and stop while the centre still looks a little pale and soft. The cookies keep cooking on the hot tray for a few minutes after you take them out. Overbaked cookies turn hard and biscuity once cold.\n\n**Line the basket with baking paper that is cut to size** and does not cover the holes entirely. Paper that blows up into the fan can burn. Leave a gap of 3 cm between the cookies, because they will puff and then settle.\n\nUse brown sugar for chew and a good bar of chocolate, chopped roughly, so that you get molten pools rather than uniform chips. Work in two batches of six.',
    ing: [
      '115 g butter, softened',
      '100 g light brown sugar',
      '50 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '190 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '150 g dark chocolate, roughly chopped'
    ],
    st: [
      'Beat the butter, brown sugar and caster sugar for 2 minutes until pale. Beat in the egg and vanilla.',
      'Stir in the flour, bicarbonate of soda and salt until a soft dough forms. Fold in the chocolate.',
      'Heat the air fryer to 160C. Shape the dough into 12 balls, each about the size of a walnut, and chill them for 10 minutes.',
      'Line the basket with cut-to-fit baking paper. Place 6 balls on it with space between, pressing each down lightly. Air fry for 10 minutes until the edges are golden.',
      'Leave on the paper for 5 minutes to firm up, then move to a rack. Repeat with the rest of the dough.'
    ],
    tips: [
      'Weigh the dough balls so every cookie bakes at the same rate.',
      'Stop when the middle still looks soft: it sets as it cools.',
      'Freeze extra dough balls and bake from frozen, adding 2 minutes.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Coffee', 'Peanut butter'],
    store: 'Keeps in an airtight tin for 4 days. Raw dough balls freeze for 2 months.',
    nut: [257, 3, 32, 13, 2, 18, 160]
  },

  'air-fryer-crab-cakes': {
    d: 'Lump crab bound with mayonnaise, mustard and breadcrumbs, shaped into cakes and air fried for 10 minutes until golden outside.',
    meta: 'Air fryer crab cakes with golden crusts and sweet crab inside, cooked for 10 minutes. Four servings, ready in 1 hour.',
    kw: ['air fryer crab cakes', 'crab cakes in air fryer', 'air fried crab cakes', 'lump crab cakes', 'crab cakes recipe'],
    why: 'Is there any real point in a crab cake that tastes of breadcrumbs? A good one is mostly crab, with just enough binder to hold the cake together while it cooks. Here the crab is folded in gently so that the lumps stay whole, which gives the cake its texture.\n\nThe binder is mayonnaise, an egg, Dijon mustard and a small amount of crushed crackers or panko. Mix it first, then fold in the crab last, using a rubber spatula and as few strokes as you can. Stirring breaks the crab into shreds and turns the cakes into paste.\n\n**Chill the shaped cakes for 30 minutes.** Cold cakes keep their shape in the moving air of the fryer and do not fall apart when you turn them. Brush the tops lightly with oil to help them brown.\n\nUse white crab meat from a pot, drained and pressed dry in a clean cloth, since loose liquid makes the mixture sloppy. Serve with lemon and a spoonful of tartare sauce.',
    ing: [
      '450 g white crab meat, drained',
      '40 g panko breadcrumbs, plus 20 g for coating',
      '3 tbsp mayonnaise',
      '1 egg',
      '1 tbsp Dijon mustard',
      '2 spring onions, finely sliced',
      '1 tsp Old Bay seasoning',
      '1 tbsp lemon juice',
      '2 tsp olive oil',
      '1 lemon, cut into wedges',
      '4 tbsp tartare sauce'
    ],
    st: [
      'Press the crab meat in a clean cloth to remove the liquid. Pick out any shell.',
      'Whisk the mayonnaise, egg, mustard, spring onions, Old Bay and lemon juice. Stir in 40 g of the panko.',
      'Fold in the crab gently, keeping the lumps whole. Shape into 8 cakes, press each into the remaining panko, and chill for 30 minutes.',
      'Heat the air fryer to 190C. Brush the tops of the cakes with the olive oil and place in a single layer in the basket.',
      'Air fry for 10 minutes without turning until golden. Serve with the lemon wedges and tartare sauce.'
    ],
    tips: [
      'Fold the crab in last and keep the lumps whole.',
      'Chill the cakes before cooking, or they may break when lifted.',
      'Line the basket with perforated paper for easy cleaning.'
    ],
    pair: ['Lemon wedges', 'Tartare sauce', 'Green salad', 'Corn on the cob'],
    store: 'Keeps for 1 day in the fridge. Reheat in the air fryer for 4 minutes at 180C.',
    nut: [306, 24, 12, 18, 1, 2, 710]
  },

  'air-fryer-drumsticks': {
    d: 'Chicken drumsticks rubbed with smoked paprika and garlic and air fried for 25 minutes until the skin is crisp and the meat is cooked through.',
    meta: 'Air fryer drumsticks with crisp skin and juicy meat, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['air fryer drumsticks', 'air fryer chicken drumsticks', 'crispy chicken drumsticks', 'chicken legs in air fryer', 'drumsticks in air fryer'],
    why: 'Drumsticks sit somewhere between wings and thighs: dark meat with a lot of skin, which makes them forgiving to cook and very well suited to an air fryer. The fat under the skin renders out into the drawer, leaving the skin thin and brittle.\n\nThe trick to crisp skin is a dry surface. Pat the drumsticks with kitchen paper, then toss them with a little oil and a rub that includes baking powder, not baking soda. The baking powder raises the pH of the skin slightly and encourages it to blister and crackle.\n\n**Cook to 75C in the thickest part**, not by the clock. Dark meat is safe at a lower temperature but is better at 75C or above, when the connective tissue has broken down and the meat pulls cleanly from the bone.\n\nGive the drumsticks room. If they touch, the contact points stay pale and flabby. Turn them at the halfway mark and again for the last 5 minutes if one side looks lighter than the other.',
    ing: [
      '8 chicken drumsticks, about 1 kg',
      '1 tbsp olive oil',
      '1 tsp baking powder',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Pat the drumsticks very dry with kitchen paper. Toss with the oil in a large bowl.',
      'Mix the baking powder, paprika, garlic powder, onion powder, salt and pepper. Sprinkle over the drumsticks and turn until evenly coated.',
      'Heat the air fryer to 200C. Arrange the drumsticks in a single layer without touching.',
      'Air fry for 25 minutes, turning them over halfway through.',
      'Check that the temperature in the thickest part reads at least 75C and the juices run clear. Rest for 5 minutes before serving.'
    ],
    tips: [
      'Dry the skin thoroughly before the rub goes on.',
      'Use baking powder, not bicarbonate of soda, which tastes soapy.',
      'If your drumsticks are large, add 5 minutes and check the temperature.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Potato wedges', 'Barbecue sauce'],
    store: 'Keeps for 3 days in the fridge. Reheat in the air fryer for 6 minutes at 180C to crisp the skin again.',
    nut: [351, 43, 2, 19, 1, 0, 940]
  },

  'air-fryer-dumplings': {
    d: 'Pork and cabbage dumplings pleated by hand and air fried for 10 minutes with a light brush of oil, served with a soy and vinegar dip.',
    meta: 'Air fryer dumplings with a crisp base and juicy pork filling, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['air fryer dumplings', 'dumplings in air fryer', 'pork dumplings air fryer', 'crispy dumplings', 'air fried dumplings'],
    why: 'Dumplings are a good party for a small basket. Ten at a time, they come out of the air fryer with a crisp, browned base and a soft, tender top, much like potstickers, with none of the splatter from the pan.\n\nThe filling is minced pork with finely chopped cabbage, spring onion, ginger and soy. Salt the cabbage lightly and squeeze it dry in a cloth first, because wet cabbage leaks into the filling and tears the wrappers. Mix the filling in one direction until it turns slightly sticky, which gives a bouncy bite.\n\n**Do not overfill.** A level teaspoon and a half is enough for each wrapper. Wet the edge with a fingertip of water, fold over, and pleat the front edge three or four times to seal.\n\nBrush the dumplings with oil and place them flat in the basket on baking paper so that they do not stick. They do not need turning. The base crisps, the sides stay chewy and the filling cooks through in 10 minutes.',
    ing: [
      '250 g pork mince',
      '150 g white cabbage, finely chopped',
      '1/2 tsp salt',
      '2 spring onions, finely sliced',
      '2 tsp fresh ginger, grated',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '24 dumpling wrappers, about 200 g',
      '1 tbsp vegetable oil',
      '3 tbsp soy sauce, for dipping',
      '1 tbsp rice vinegar'
    ],
    st: [
      'Toss the cabbage with the salt and leave for 10 minutes. Squeeze it dry in a clean cloth.',
      'Mix the pork, cabbage, spring onions, ginger, soy sauce and sesame oil in one direction for 1 minute until sticky.',
      'Place a heaped teaspoon of filling in the centre of each wrapper. Wet the edge, fold in half and pleat to seal.',
      'Heat the air fryer to 190C. Brush the dumplings with the vegetable oil and arrange them on baking paper in a single layer.',
      'Air fry for 10 minutes until golden underneath and the pork is cooked through. Mix the dipping soy sauce and rice vinegar and serve alongside.'
    ],
    tips: [
      'Keep unused wrappers under a damp cloth so they do not dry out.',
      'Cook in batches rather than stacking the dumplings.',
      'Cut one open to check the pork is cooked through before serving the rest.'
    ],
    pair: ['Chilli oil', 'Cucumber salad', 'Steamed rice', 'Pak choi'],
    store: 'Uncooked dumplings freeze on a tray for 2 months; cook from frozen with 3 extra minutes. Cooked ones keep for 1 day in the fridge.',
    nut: [336, 17, 31, 16, 2, 2, 1470]
  },

  'air-fryer-eggplant': {
    d: 'Thick slices of aubergine brushed with oil and garlic and air fried for 15 minutes until browned, soft inside and finished with parmesan.',
    meta: 'Air fryer eggplant with garlic and parmesan, soft inside and browned outside. Three servings, ready in 40 minutes.',
    kw: ['air fryer eggplant', 'air fryer aubergine', 'eggplant in air fryer', 'roasted eggplant slices', 'garlic parmesan eggplant'],
    why: 'Most home versions of this dish come out greasy, and the fix is to season the slices before the oil goes on, not after. Aubergine soaks up fat like a sponge, so a small amount of oil brushed on the surface, plus salt drawn through the flesh, gives a better result than a heavy drizzle.\n\nCut the aubergine into rounds about 1.5 cm thick. Thinner slices dry out and curl, and thicker slices stay raw in the middle. Sprinkle them with salt and leave for 15 minutes, then blot off the beads of moisture with kitchen paper. This step also removes some of the bitterness.\n\n**Brush, do not pour.** Use about two teaspoons of oil in total for the whole batch, with a pastry brush, and spread the garlic evenly. The moving air does the browning.\n\nCook in a single layer, in two batches if needed. The slices are ready when they are deeply golden and a knife slips into the centre without resistance. Sprinkle the parmesan on for the last minute only, so it melts but does not burn.',
    ing: [
      '500 g aubergine, cut into 1.5 cm rounds',
      '1 tsp salt',
      '2 tbsp olive oil',
      '2 garlic cloves, crushed',
      '1 tsp dried oregano',
      '1/2 tsp black pepper',
      '30 g parmesan, finely grated',
      '1 tbsp parsley, chopped',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Lay the aubergine slices on a tray and sprinkle with the salt. Leave for 15 minutes, then blot dry with kitchen paper.',
      'Mix the olive oil, garlic, oregano and pepper. Brush lightly on both sides of every slice.',
      'Heat the air fryer to 200C. Place the slices in a single layer in the basket and cook for 15 minutes, turning once, until deep golden.',
      'Scatter the parmesan over the slices for the final minute of cooking.',
      'Transfer to a plate, sprinkle with parsley and serve with lemon wedges.'
    ],
    tips: [
      'Blot the salted slices thoroughly, or the aubergine will steam.',
      'Work in batches so the air can reach every slice.',
      'Check at 12 minutes if the slices are thinner than 1.5 cm.'
    ],
    pair: ['Tomato salad', 'Couscous', 'Yogurt and mint', 'Grilled chicken'],
    store: 'Keeps for 2 days in the fridge. Reheat in the air fryer for 3 minutes.',
    nut: [193, 6, 13, 13, 6, 6, 940]
  },

  'air-fryer-empanadas': {
    untimed: ['cooling completely'],
    d: 'Beef and onion empanadas made with ready-rolled pastry discs, crimped by hand and air fried for 12 minutes until golden and crisp.',
    meta: 'Air fryer empanadas with a spiced beef filling in crisp golden pastry. Eight servings, ready in 42 minutes.',
    kw: ['air fryer empanadas', 'empanadas in air fryer', 'beef empanadas', 'air fried empanadas', 'empanada pastry'],
    why: 'An empanada is a pie that you hold in your hand. The name comes from the Spanish for to wrap in bread, and the idea of a pastry parcel with a savoury filling turns up in cooking from Argentina to the Philippines.\n\nThis version uses a beef and onion filling, seasoned with cumin and paprika, with a few chopped olives and a hard-boiled egg for the traditional Argentinian touch. Cook the filling until it is dry and thick, then let it cool completely. A warm or wet filling softens the pastry and splits the seam as it cooks.\n\n**Use no more than a heaped tablespoon of filling per disc.** An overfilled empanada bursts in the air fryer. Fold the disc over, press the edges with a fork, or crimp with the traditional twisted rope edge called a repulgue.\n\nBrush with beaten egg for a glossy finish, and cook in batches of four. The pastry puffs and colours quickly in the fast moving air, so check the empanadas at 10 minutes.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '250 g beef mince',
      '1 tsp ground cumin',
      '1 tsp smoked paprika',
      '1/2 tsp salt',
      '30 g green olives, chopped',
      '1 hard-boiled egg, chopped',
      '8 empanada pastry discs, about 400 g',
      '1 egg, beaten, for brushing'
    ],
    st: [
      'Heat the olive oil in a frying pan over medium heat. Cook the onion for 5 minutes until soft.',
      'Add the beef, cumin, paprika and salt. Cook for 8 minutes, breaking up the meat, until browned and dry. Stir in the olives and egg and cool completely.',
      'Heat the air fryer to 180C. Place a heaped tablespoon of filling on each disc, fold over and seal the edge with a fork.',
      'Brush the empanadas with the beaten egg. Cook 4 at a time in the basket for 12 minutes, turning once, until golden.',
      'Cool for 5 minutes before serving, as the filling stays very hot.'
    ],
    tips: [
      'Cool the filling fully before filling the pastry.',
      'Press out any air from the parcel before sealing.',
      'Prick each empanada once with a fork to let steam out.'
    ],
    pair: ['Chimichurri', 'Green salad', 'Salsa', 'Lime wedges'],
    store: 'Keeps for 2 days in the fridge. Reheat in the air fryer for 5 minutes at 160C.',
    nut: [323, 11, 27, 19, 1, 2, 490]
  },

  'air-fryer-falafel': {
    d: 'Chickpea falafel flavoured with parsley, cumin and garlic, shaped into balls and air fried for 12 minutes until crisp outside and green inside.',
    meta: 'Air fryer falafel with a crisp shell and a herby middle, cooked for 12 minutes. Four servings, ready in 1 hour 2 minutes.',
    kw: ['air fryer falafel', 'falafel in air fryer', 'chickpea falafel', 'crispy falafel', 'homemade falafel'],
    why: 'Falafel is at its best in the warm months, when the parsley and coriander are plentiful and a plate of cold salad and yogurt is all you want beside it. The herbs are what turn the inside bright green and give the falafel its fresh flavour.\n\nTraditional falafel uses dried chickpeas that have been soaked overnight but not cooked. Tinned chickpeas make a softer, damper mixture, so drain them well and dry them on kitchen paper. Pulse the mixture in a food processor until it looks like coarse sand and holds together when you squeeze it, not until it becomes a paste.\n\n**Chill the mixture for 30 minutes before you shape it.** The flour and chickpea starch need time to absorb moisture, and cold falafel keeps its shape in the basket.\n\nBrush the balls with oil and leave space between them. They are ready when deeply golden and firm to the touch. Break one open: the centre should be soft and green, not wet.',
    ing: [
      '400 g tinned chickpeas, drained and dried',
      '1 small onion, roughly chopped',
      '3 garlic cloves',
      '30 g fresh parsley',
      '20 g fresh coriander',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp salt',
      '3 tbsp plain flour',
      '1/2 tsp baking powder',
      '2 tbsp olive oil'
    ],
    st: [
      'Pulse the chickpeas, onion, garlic, parsley and coriander in a food processor until coarse and just holding together.',
      'Add the cumin, ground coriander, salt, flour and baking powder and pulse briefly. Chill for 30 minutes.',
      'Heat the air fryer to 190C. Shape the mixture into 16 balls and flatten them slightly.',
      'Brush the falafel with the olive oil and place in the basket in a single layer. Air fry for 12 minutes, turning them over after 6 minutes.',
      'Serve hot while the shells are crisp.'
    ],
    tips: [
      'Dry the chickpeas well before processing.',
      'Do not purée the mixture: it should look like coarse crumbs.',
      'If the balls crack when shaped, add a spoonful of water.'
    ],
    pair: ['Hummus', 'Pitta bread', 'Tahini sauce', 'Tomato and cucumber salad'],
    store: 'Keeps for 3 days in the fridge. Reheat in the air fryer for 4 minutes at 180C.',
    nut: [230, 9, 26, 10, 6, 4, 660]
  },

  'air-fryer-fish-tacos': {
    d: 'Breaded white fish fillets air fried for 10 minutes until crisp, then tucked into warm tortillas with slaw and a lime crema.',
    meta: 'Air fryer fish tacos with crisp fish, cabbage slaw and lime crema, cooked for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['air fryer fish tacos', 'fish tacos in air fryer', 'crispy fish tacos', 'baja fish tacos', 'fish taco recipe'],
    why: 'It looks like a fried fish sandwich and eats like a taco, which is why the contrast matters. Hot, crisp fish needs something cold and sharp on top, so the slaw here is dressed with lime juice and a little salt, and the crema is soured cream thinned with more lime.\n\nCut the fish into strips about 2 cm wide so that they finish at the same time. Cod, haddock or pollock all work, as long as the fillets are firm and thick. Pat them dry before the flour and egg, because a wet fish makes the crumb slip off in the basket.\n\n**Spray the crumbed fish with oil before cooking.** Without it the panko stays pale and sandy, since an air fryer has no fat of its own to crisp the coating. Cook the strips in a single layer.\n\nWarm the tortillas for a few seconds in a dry pan or directly on a gas flame, which makes them soft and a little blistered. Assemble just before serving, or the slaw wilts and the fish loses its crunch.',
    ing: [
      '500 g skinless cod fillet, cut into strips',
      '40 g plain flour',
      '1 egg, beaten',
      '80 g panko breadcrumbs',
      '1 tsp smoked paprika',
      '1/2 tsp salt',
      '2 tsp olive oil',
      '150 g white cabbage, finely shredded',
      '2 limes',
      '100 g soured cream',
      '8 small corn tortillas',
      '1 tbsp coriander, chopped'
    ],
    st: [
      'Toss the cabbage with the juice of 1 lime and a pinch of salt. Mix the soured cream with the juice of the second lime.',
      'Mix the panko, paprika and salt. Dip the fish strips in the flour, then the egg, then the crumbs.',
      'Heat the air fryer to 200C. Spray or brush the crumbed fish with the olive oil and place in the basket in one layer.',
      'Air fry for 10 minutes, turning once, until golden and flaking.',
      'Warm the tortillas in a dry pan. Fill with slaw, fish and crema and finish with coriander.'
    ],
    tips: [
      'Pat the fish dry before coating.',
      'Do not overcrowd the basket, or the coating steams.',
      'Dress the cabbage at the last minute to keep it crunchy.'
    ],
    pair: ['Lime wedges', 'Avocado slices', 'Pickled red onion', 'Hot sauce'],
    store: 'Best eaten straight away. Keep the components separate in the fridge for 1 day.',
    nut: [399, 31, 44, 11, 5, 4, 470]
  },

  'air-fryer-fish-and-chips': {
    d: 'Panko-coated cod fillets and thick potato chips cooked together in the air fryer for 20 minutes, served with lemon and tartare sauce.',
    meta: 'Air fryer fish and chips: crisp cod and golden chips from one basket. Two servings, ready in 1 hour.',
    kw: ['air fryer fish and chips', 'fish and chips in air fryer', 'homemade fish and chips', 'crispy cod and chips', 'british fish and chips'],
    why: 'Fish and chips has been sold wrapped in paper for well over a century in Britain, and it remains the dish people crave on a wet Friday. This version swaps the deep fryer for the air fryer, which cuts the oil but still gives a crisp crumb and chips with a proper crunch.\n\nThe chips go in first. Cut floury potatoes into 1 cm sticks, soak them in cold water for 20 minutes to rinse off the surface starch, then dry them thoroughly. Wet chips steam and go limp. A teaspoon of oil is all they need.\n\n**Start the chips 10 minutes before the fish.** Cod takes only 10 minutes in the fast air, while the chips need 20, so the two meet at the end of the cooking time.\n\nBrown the crumb with a light spray of oil. Season the fish, flour it, dip it in egg and press the panko on firmly. Serve with plenty of salt, malt vinegar or lemon, and a spoon of tartare sauce, and eat straight away.',
    ing: [
      '500 g floury potatoes, cut into 1 cm chips',
      '2 tsp vegetable oil',
      '2 cod fillets, about 300 g',
      '30 g plain flour',
      '1 egg, beaten',
      '70 g panko breadcrumbs',
      '1/2 tsp salt',
      '1 tsp olive oil',
      '2 tbsp tartare sauce',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Soak the chips in cold water for 20 minutes. Drain and dry them thoroughly, then toss with the vegetable oil.',
      'Heat the air fryer to 200C. Cook the chips for 10 minutes, shaking the basket once.',
      'Season the cod with the salt. Dip in the flour, then egg, then press into the panko. Brush with the olive oil.',
      'Lay the fish on top of the chips or on the rack. Cook for 10 minutes more, then shake the chips and check the fish is cooked through.',
      'Serve with the tartare sauce and lemon wedges.'
    ],
    tips: [
      'Dry the chips completely before oiling.',
      'If your basket is small, cook the chips first and keep them warm.',
      'Check the cod with a fork: it should flake easily.'
    ],
    pair: ['Mushy peas', 'Malt vinegar', 'Tartare sauce', 'Lemon wedges'],
    store: 'Best eaten at once. Reheat leftovers in the air fryer for 5 minutes at 180C.',
    nut: [648, 41, 85, 16, 8, 5, 930]
  },

  'air-fryer-fried-chicken': {
    d: 'Buttermilk-soaked chicken pieces coated in seasoned flour and air fried for 25 minutes until crunchy outside and juicy within.',
    meta: 'Air fryer fried chicken: buttermilk-marinated, crunchy and juicy, cooked for 25 minutes. Four servings, after at least 2 hours in the marinade.',
    kw: ['air fryer fried chicken', 'fried chicken in air fryer', 'buttermilk fried chicken', 'crispy fried chicken', 'air fried chicken'],
    why: 'It tastes like fried chicken and cooks like roast chicken, which is the entire appeal. The buttermilk marinade does the tenderising, the double coating does the crunching, and the air fryer supplies the heat without a pan of hot oil.\n\nBuy a mix of drumsticks and thighs, which stay moist during the long cook. Marinate them in buttermilk with salt and hot sauce for at least 2 hours, or overnight if you can plan ahead. Lift each piece out and let the excess drip off, but do not wipe it, as the sticky buttermilk is what holds the flour on.\n\n**Dip the chicken a second time** into the buttermilk and the flour. The double coat gives the thick craggy crust associated with fried chicken, and it stays attached when you turn the pieces.\n\nSpray the coated pieces generously with oil so that no flour stays white. Cook for 25 minutes at 180C, turning once, until a thermometer reads 75C at the bone. Let the chicken rest for 5 minutes on a rack.',
    ing: [
      '1 kg chicken drumsticks and thighs, bone in',
      '250 ml buttermilk',
      '1 tsp salt',
      '1 tbsp hot sauce',
      '150 g plain flour',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1/2 tsp cayenne pepper',
      '1/2 tsp black pepper',
      '3 tbsp vegetable oil, for spraying'
    ],
    st: [
      'Mix the buttermilk, half the salt and the hot sauce. Add the chicken, cover and chill for at least 2 hours.',
      'Mix the flour, paprika, garlic powder, onion powder, cayenne, pepper and the remaining salt in a wide dish.',
      'Lift each piece from the buttermilk, let it drip, then coat in the flour. Dip back into the buttermilk and coat again. Rest on a rack for 10 minutes.',
      'Heat the air fryer to 180C. Spray the chicken well with the oil and arrange in the basket without touching.',
      'Cook for 25 minutes, turning once and spraying any pale patches, until a thermometer reads 75C at the bone. Rest for 5 minutes.'
    ],
    tips: [
      'Rest the coated chicken for 10 minutes so the flour bonds.',
      'Spray every pale patch with oil before cooking.',
      'Cook in two batches if your basket is small.'
    ],
    pair: ['Coleslaw', 'Mashed potatoes', 'Cornbread', 'Pickles'],
    store: 'Keeps for 3 days in the fridge. Reheat in the air fryer for 8 minutes at 180C.',
    rest: [120, 'Marinating'],
    nut: [562, 49, 33, 26, 2, 3, 960]
  },

  'air-fryer-grilled-cheese': {
    d: 'Buttered sourdough filled with cheddar and mozzarella, air fried for 8 minutes until the bread is golden and the cheese has melted.',
    meta: 'Air fryer grilled cheese with a golden crisp crust and molten centre, cooked for 8 minutes. Two servings, ready in 13 minutes.',
    kw: ['air fryer grilled cheese', 'grilled cheese in air fryer', 'air fryer cheese toastie', 'air fryer grilled cheese sandwich', 'crispy grilled cheese'],
    why: 'Why does a toastie cook so evenly in the air fryer? Hot air surrounds the whole sandwich at once, so both sides brown at the same moment and there is no need to flip the pan or press with a spatula.\n\nSpread the butter on the outside of the bread, edge to edge. A thin, complete layer of fat is what gives an even golden colour. Mayonnaise works too, and some cooks prefer it because it does not burn as quickly.\n\n**Use two cheeses**: a sharp one for flavour, such as mature cheddar, and a good melter, such as mozzarella. Grate them rather than slicing them, which spreads the cheese across the bread and gives a thinner, more even melt.\n\nThe air flow can lift the top slice, so lay a small baking rack or a trivet over the sandwich or tuck the edges down. Cook for 4 minutes on one side, flip, and give it another 4 minutes. Rest for a minute before cutting, or the cheese runs out.',
    ing: [
      '4 slices sourdough bread, about 160 g',
      '30 g butter, softened',
      '80 g mature cheddar, grated',
      '60 g mozzarella, grated',
      '1 tsp Dijon mustard'
    ],
    st: [
      'Heat the air fryer to 190C. Spread the butter on one side of each slice of bread.',
      'Turn two slices buttered side down and spread with the mustard. Pile on the cheddar and mozzarella.',
      'Top with the other slices, buttered side up. Press down lightly.',
      'Air fry for 4 minutes, flip carefully and cook for 4 minutes more until golden and the cheese is melted.',
      'Rest for 1 minute, then cut in half and serve.'
    ],
    tips: [
      'Grate the cheese for a faster, more even melt.',
      'Weigh down the top slice if it lifts in the airflow.',
      'Add a slice of tomato or ham between the cheese for variety.'
    ],
    pair: ['Tomato soup', 'Pickles', 'Crisps', 'Green salad'],
    store: 'Best eaten straight from the fryer. It does not reheat well.',
    nut: [571, 24, 40, 35, 2, 5, 880]
  },

  'air-fryer-gyoza': {
    d: 'Frozen or fresh gyoza brushed with oil and air fried for 10 minutes until the bases are crisp and the wrappers are golden.',
    meta: 'Air fryer gyoza with crisp bases and juicy fillings, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['air fryer gyoza', 'gyoza in air fryer', 'air fryer potstickers', 'crispy gyoza', 'pork gyoza'],
    why: 'It looks like a dumpling and cooks like a potsticker, which is more or less what gyoza are. The Japanese version has a thinner wrapper and a finer filling than the Chinese original, and a crisp golden base on one side.\n\nIn a frying pan the dumplings are fried, then steamed with a splash of water, then fried again. In the air fryer there is no steaming stage, so the key is a light film of oil on the wrappers. Brush the tops and sides, then cook them straight from the freezer.\n\n**Do not defrost frozen gyoza.** The wrappers go soggy as they thaw and stick to the basket. Put them in the basket frozen, spaced about 2 cm apart, and add a minute or two to the cooking time if they are large.\n\nServe them with a dipping sauce made from soy sauce, rice vinegar and a little chilli oil, and a few shreds of ginger if you have it. Eat them while the bases are still crisp and the filling is hot.',
    ing: [
      '20 frozen pork gyoza, about 400 g',
      '2 tsp vegetable oil',
      '3 tbsp soy sauce',
      '1 tbsp rice vinegar',
      '1 tsp chilli oil',
      '2 spring onions, finely sliced'
    ],
    st: [
      'Heat the air fryer to 190C. Line the basket with perforated baking paper.',
      'Brush the gyoza lightly with the vegetable oil. Arrange in a single layer, leaving space between them.',
      'Air fry for 10 minutes, shaking the basket once halfway, until golden and cooked through.',
      'Mix the soy sauce, rice vinegar and chilli oil for dipping.',
      'Serve the gyoza hot, scattered with the spring onions.'
    ],
    tips: [
      'Cook straight from frozen, never thawed.',
      'Use perforated paper so the air can move around the base.',
      'If the wrappers are pale, cook for 2 more minutes.'
    ],
    pair: ['Steamed rice', 'Miso soup', 'Cucumber salad', 'Edamame'],
    store: 'Best eaten straight away. Leftovers keep for 1 day in the fridge.',
    nut: [237, 10, 29, 9, 2, 2, 1160]
  },

  'air-fryer-lamb-chops': {
    d: 'Lamb loin chops rubbed with garlic, rosemary and olive oil and air fried for 10 minutes, then rested until pink and juicy in the middle.',
    meta: 'Air fryer lamb chops with garlic and rosemary, cooked for 10 minutes and rested. Two servings, ready in 20 minutes.',
    kw: ['air fryer lamb chops', 'lamb chops in air fryer', 'garlic rosemary lamb chops', 'lamb loin chops', 'juicy lamb chops'],
    why: 'Most home versions come out grey and dry, and the fix is to stop cooking while the middle is still pink. Lamb chops are thin and cook in minutes. Ten minutes in the air fryer, followed by a rest, is all they need.\n\nTake the chops out of the fridge 20 minutes before cooking so that they are not stone cold in the middle. Rub them with olive oil, crushed garlic, chopped rosemary and plenty of salt and pepper. The fat on the edge of the chop should be rendered and golden, not pale.\n\n**Use a thermometer.** For medium-rare, take the chops out at 54C in the thickest part, and for medium at 60C. They will rise a few degrees as they rest, so do not wait until they reach the target temperature in the fryer.\n\nCover them loosely with foil and rest for 5 minutes. This lets the juices redistribute through the meat, and keeps the pink centre from running onto the plate when you cut it.',
    ing: [
      '4 lamb loin chops, about 400 g',
      '1 tbsp olive oil',
      '2 garlic cloves, crushed',
      '1 tbsp fresh rosemary, finely chopped',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Take the chops out of the fridge 20 minutes before cooking. Mix the olive oil, garlic, rosemary, salt and pepper and rub over both sides.',
      'Heat the air fryer to 200C.',
      'Place the chops in a single layer in the basket. Cook for 10 minutes, turning them over after 5 minutes. A thermometer should read 54C for medium-rare.',
      'Transfer to a plate, cover loosely with foil and rest for 5 minutes.',
      'Serve with the lemon wedges.'
    ],
    tips: [
      'Check with a thermometer at 8 minutes.',
      'Pat the chops dry before rubbing them with oil.',
      'Press the fat edge against the basket for a minute to crisp it.'
    ],
    pair: ['Mint sauce', 'New potatoes', 'Green beans', 'Roast carrots'],
    store: 'Best eaten fresh. Leftovers keep for 2 days in the fridge and are good cold in a salad.',
    nut: [669, 35, 4, 57, 1, 1, 720]
  },

  'air-fryer-pierogies': {
    d: 'Potato and cheese pierogi brushed with butter and air fried for 12 minutes until the pastry is golden, served with onions and soured cream.',
    meta: 'Air fryer pierogies with a crisp golden shell and soft potato filling, cooked for 12 minutes. Four servings, ready in 22 minutes.',
    kw: ['air fryer pierogies', 'pierogi in air fryer', 'air fried pierogies', 'crispy pierogies', 'potato cheese pierogi'],
    why: 'Can you air fry pierogi without boiling them first? Yes, and the result is closer to a fried one than a boiled one. The dumplings need no pre-cooking if they are made from a shop-bought frozen pack, as the fryer heats them through while it browns the dough.\n\nPierogi are the filled dumplings of Poland, usually stuffed with potato and cheese, sauerkraut or mushrooms. Fried with onions, they are a staple of Polish and Polish-American kitchens. The air fryer gives you the same blistered crust with much less butter.\n\n**Brush the dumplings with melted butter** or oil on both sides before cooking. Dry pierogi turn leathery, but a thin film of fat gives a crisp, tender skin.\n\nCook the onions separately in the pan until sweet and deeply golden, which takes about 15 minutes. Spoon them over the hot pierogies with a good dollop of soured cream and a sprinkle of chives or dill.',
    ing: [
      '400 g frozen potato and cheese pierogi',
      '30 g butter, melted',
      '2 onions, thinly sliced',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '120 g soured cream',
      '1 tbsp chives, chopped'
    ],
    st: [
      'Heat the oil in a frying pan over medium-low heat. Cook the onions with the salt for 15 minutes, stirring occasionally, until soft and golden.',
      'Heat the air fryer to 190C. Brush the frozen pierogi on both sides with the melted butter.',
      'Arrange in a single layer in the basket. Cook for 12 minutes, turning once, until golden and puffed.',
      'Pile the hot pierogi on a dish and top with the onions.',
      'Serve with the soured cream and chives.'
    ],
    tips: [
      'Cook the pierogi straight from frozen, not thawed.',
      'Do not stack them in the basket: they will stick.',
      'Go slowly with the onions: they should be sweet, not burnt.'
    ],
    pair: ['Soured cream', 'Fried onions', 'Kielbasa', 'Beetroot salad'],
    store: 'Best eaten at once. Keeps 2 days in the fridge; reheat in the air fryer for 5 minutes.',
    nut: [360, 6, 39, 20, 3, 5, 710]
  },

  'air-fryer-pizza-rolls': {
    d: 'Pizza rolls filled with mozzarella and pepperoni, sealed in egg roll wrappers and air fried for 10 minutes until crisp and bubbling.',
    meta: 'Air fryer pizza rolls with a crisp wrapper and a stretchy cheese centre, cooked for 10 minutes. Six servings, ready in 25 minutes.',
    kw: ['air fryer pizza rolls', 'homemade pizza rolls', 'pizza rolls in air fryer', 'pepperoni pizza rolls', 'pizza egg rolls'],
    why: 'The first sign they are ready is the sound: a faint crackle, and the smell of tomato and hot cheese. A homemade pizza roll is a thin wrapper holding mozzarella, pepperoni and a spoonful of pizza sauce, and it cooks in minutes in the basket.\n\nEgg roll wrappers are the easiest choice. They are thin, they crisp quickly and they seal with a dab of water. Use only a tablespoon of filling per wrapper. Too much, and the sauce forces its way through the seam as it heats and drips into the drawer.\n\n**Keep the sauce thick.** A thin sauce soaks into the wrapper before it even reaches the fryer, so use a concentrated pizza sauce or tomato purée mixed with oregano. Cut the mozzarella into small cubes, or use a dry grated type, not fresh, which weeps.\n\nSpray the rolls lightly with oil and arrange them with room between each. Leave them for 2 minutes after cooking, because the cheese inside is hotter than it looks.',
    ing: [
      '12 egg roll wrappers, about 240 g',
      '150 g low-moisture mozzarella, cut into small cubes',
      '60 g pepperoni slices, chopped',
      '4 tbsp pizza sauce',
      '1 tsp dried oregano',
      '1 tbsp olive oil',
      '1 tbsp water',
      '4 tbsp pizza sauce, warmed, for dipping'
    ],
    st: [
      'Mix the mozzarella, pepperoni, 4 tbsp pizza sauce and oregano in a bowl.',
      'Lay a wrapper in a diamond shape. Put 1 heaped tablespoon of filling in the centre. Wet the edges with water, fold in the sides and roll up tightly.',
      'Heat the air fryer to 190C. Brush the rolls with the olive oil.',
      'Cook in a single layer for 10 minutes, turning once, until golden and crisp.',
      'Rest for 2 minutes and serve with the warm pizza sauce for dipping.'
    ],
    tips: [
      'Do not overfill, or the cheese will burst through the seam.',
      'Seal the edges firmly with water.',
      'Make a batch and freeze the uncooked rolls on a tray.'
    ],
    pair: ['Marinara sauce', 'Ranch dip', 'Green salad', 'Garlic bread'],
    store: 'Uncooked rolls freeze for 1 month; cook from frozen with 3 extra minutes. Cooked ones keep for 1 day.',
    nut: [256, 12, 25, 12, 1, 2, 640]
  },

  'air-fryer-popcorn-chicken': {
    d: 'Bite-sized pieces of chicken breast in a seasoned crumb coating, air fried for 10 minutes until crunchy and served with a dip.',
    meta: 'Air fryer popcorn chicken: small crunchy bites with a seasoned coating, cooked for 10 minutes. Four servings, ready in 45 minutes.',
    kw: ['air fryer popcorn chicken', 'popcorn chicken in air fryer', 'crispy popcorn chicken', 'chicken bites air fryer', 'homemade popcorn chicken'],
    why: 'Chicken breast, an egg, flour and a bag of cornflakes: four things you already own, and about thirty minutes. The cornflake crumb is the secret of this version, as the flakes crisp in the moving air and give a coarse, crunchy shell that panko does not quite match.\n\nCut the chicken into pieces about 2 cm square. Smaller than that and they dry out, larger and they take too long to cook through before the coating burns. Toss them in a marinade of buttermilk or a little milk with salt and garlic powder for 15 minutes, which keeps the lean meat tender.\n\n**Crush the cornflakes by hand** in a bag, leaving some pieces the size of a coin. A fine powder gives a flat coating, while a mix of fine and coarse pieces gives the craggy edge that makes popcorn chicken worth eating.\n\nSpray the bites with oil and cook in a single layer, shaking the basket halfway. Serve while hot, with honey mustard or barbecue sauce.',
    ing: [
      '500 g chicken breast, cut into 2 cm pieces',
      '100 ml milk',
      '1 tsp salt',
      '1 tsp garlic powder',
      '40 g plain flour',
      '1 egg, beaten',
      '80 g cornflakes, lightly crushed',
      '1 tsp smoked paprika',
      '2 tbsp vegetable oil, for spraying',
      '4 tbsp honey mustard, to serve'
    ],
    st: [
      'Toss the chicken with the milk, half the salt and the garlic powder. Leave for 15 minutes, then drain.',
      'Mix the cornflakes with the paprika and the remaining salt in a shallow dish.',
      'Dust the chicken in the flour, dip in the egg, then press into the cornflakes to coat.',
      'Heat the air fryer to 200C. Spray the bites with the oil and spread in a single layer.',
      'Cook for 10 minutes, shaking the basket after 5 minutes, until golden and cooked through. Serve with the honey mustard.'
    ],
    tips: [
      'Keep some cornflake pieces large for extra crunch.',
      'Cook in two batches rather than piling the bites up.',
      'Cut one open to check there is no pink.'
    ],
    pair: ['Honey mustard', 'Barbecue sauce', 'Coleslaw', 'Fries'],
    store: 'Keeps for 2 days in the fridge. Reheat in the air fryer for 4 minutes at 180C.',
    nut: [361, 34, 27, 13, 2, 3, 980]
  },

  'air-fryer-pork-belly': {
    d: 'A scored slab of pork belly dried, salted and air fried for 40 minutes until the skin puffs into crackling and the meat is tender.',
    meta: 'Air fryer pork belly with shattering crackling and soft, rich meat, cooked for 40 minutes after at least 2 hours drying uncovered in the fridge.',
    kw: ['air fryer pork belly', 'pork belly in air fryer', 'crispy pork belly', 'pork belly crackling', 'roast pork belly'],
    why: 'Does pork belly really need hours in the oven? Not in the air fryer. A 700 g slab cooks in 40 minutes, and the circulating air dries the rind quickly enough to puff it into crackling before the meat has time to turn tough.\n\nThe skin is everything. Pat it dry with kitchen paper, score it in a tight pattern with a sharp knife without cutting into the meat, and rub salt into the cuts. Leave the belly uncovered in the fridge for a few hours or overnight if you can. The drier the skin, the better it blisters.\n\n**Start at a lower heat**, then raise it. Cooking at 160C for 30 minutes renders the fat and softens the meat, and a final 10 minutes at 200C puffs the skin into crackling. Going straight to a high heat burns the surface and leaves the middle chewy.\n\nRest the pork for 10 minutes, then cut it with a serrated knife, pressing down firmly to break through the rind. Serve with apple sauce to cut the richness.',
    ing: [
      '700 g pork belly, skin on, in one piece',
      '1 tbsp coarse sea salt',
      '1 tsp fennel seeds, crushed',
      '1/2 tsp black pepper',
      '1 tsp olive oil',
      '4 tbsp apple sauce, to serve'
    ],
    st: [
      'Pat the pork belly dry. Score the skin in lines 1 cm apart, cutting through the skin but not the meat.',
      'Rub the salt, fennel and pepper into the scores and over the meat. Leave uncovered in the fridge for at least 2 hours.',
      'Wipe off the excess salt and brush the skin with the olive oil. Heat the air fryer to 160C.',
      'Cook the pork skin side up for 30 minutes. Raise the temperature to 200C and cook for 10 minutes more until the crackling is blistered and golden.',
      'Rest for 10 minutes, cut into thick slices and serve with the apple sauce.'
    ],
    tips: [
      'Dry the skin well: damp skin will not crackle.',
      'Cut a piece off the edge to test: the meat should be soft.',
      'If the skin is not puffed, extend the high heat by 3 minutes.'
    ],
    pair: ['Apple sauce', 'Roast potatoes', 'Red cabbage', 'Steamed greens'],
    store: 'Keeps for 3 days in the fridge. Reheat in the air fryer for 8 minutes at 180C.',
    rest: [120, 'Drying in the fridge'],
    nut: [918, 16, 2, 94, 0, 1, 1840]
  },

  'air-fryer-quesadilla': {
    d: 'Flour tortillas filled with chicken, peppers and cheese, folded and air fried for 8 minutes until crisp and golden.',
    meta: 'Air fryer quesadilla with melted cheese and a crisp golden tortilla, cooked for 8 minutes. Two servings, ready in 13 minutes.',
    kw: ['air fryer quesadilla', 'quesadilla in air fryer', 'chicken quesadilla air fryer', 'crispy quesadilla', 'cheese quesadilla'],
    why: 'Flour tortillas, cooked chicken, a pepper and a handful of cheese: that is a dinner. The air fryer crisps both sides of the tortilla at once, so you get the crunch of a pan-fried quesadilla without turning it with a spatula.\n\nUse cooked chicken, either left over from a roast or shredded from a shop-bought rotisserie bird. Slice the pepper thinly so it softens in the short cooking time. Grate the cheese yourself, since pre-grated cheese is coated in starch and melts less smoothly.\n\n**Fold, do not stack.** Spread the filling over half of the tortilla and fold the other half over. A folded tortilla keeps its filling in the basket, where a flat top layer lifts in the airflow. Lay a trivet or an oven-safe weight on top if your model blows the top around.\n\nBrush the tortilla lightly with oil on both sides. Cook for 4 minutes, turn, and cook for 4 minutes more. Rest the quesadilla for 1 minute before cutting into wedges, because the cheese is molten.',
    ing: [
      '2 large flour tortillas, about 70 g each',
      '120 g cooked chicken, shredded',
      '1/2 red pepper, thinly sliced',
      '100 g cheddar and mozzarella mix, grated',
      '1 spring onion, sliced',
      '1/2 tsp ground cumin',
      '1 tsp olive oil',
      '4 tbsp salsa, to serve',
      '4 tbsp soured cream, to serve'
    ],
    st: [
      'Heat the air fryer to 190C. Mix the chicken, pepper, spring onion and cumin.',
      'Lay a tortilla flat. Cover one half with half the cheese, half the chicken mixture, and top with more cheese. Fold over the other half.',
      'Brush both sides lightly with the olive oil.',
      'Air fry one quesadilla at a time for 8 minutes, turning once, until golden and the cheese has melted.',
      'Rest for 1 minute, cut into wedges and serve with salsa and soured cream.'
    ],
    tips: [
      'Grate the cheese yourself for a smoother melt.',
      'Do not overfill: a thin layer cooks through faster.',
      'Use a small trivet on top if the tortilla lifts.'
    ],
    pair: ['Guacamole', 'Salsa', 'Soured cream', 'Rice and beans'],
    store: 'Best eaten fresh. Leftovers keep for 1 day and reheat in the air fryer for 3 minutes.',
    nut: [578, 35, 42, 30, 4, 7, 1030]
  },

  'air-fryer-spring-rolls': {
    d: 'Vegetable spring rolls wrapped in thin pastry, brushed with oil and air fried for 12 minutes until crisp and golden.',
    meta: 'Air fryer spring rolls with a crisp wrapper and a vegetable filling, cooked for 12 minutes. Six servings, ready in 52 minutes.',
    kw: ['air fryer spring rolls', 'spring rolls in air fryer', 'vegetable spring rolls', 'crispy spring rolls', 'homemade spring rolls'],
    why: 'Spring rolls were traditionally made at the start of spring in China, a plate of the first fresh vegetables wrapped in thin dough. The fried, crisp version is a long way from the soft, fresh rolls you find in Vietnam, and the air fryer gets close to the fried texture with a teaspoon of oil.\n\nThe filling has to be dry. Cabbage, carrot, mushrooms and spring onion are cooked briefly in a hot pan with garlic, ginger and soy sauce, then cooled and drained in a sieve. Hot, wet filling steams the wrapper from inside and makes it burst.\n\n**Roll them tight, like a small cigar.** Fold the bottom corner over the filling, fold in both sides, then roll away from you and seal the last corner with a paste of flour and water. Loose rolls fall open in the basket.\n\nBrush them with oil all over before cooking, because the wrapper has no fat of its own. They are ready when the surface has blistered and turned a deep golden, and they crackle when you tap them.',
    ing: [
      '1 tbsp vegetable oil',
      '2 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '150 g white cabbage, shredded',
      '1 carrot, grated, about 100 g',
      '100 g mushrooms, finely sliced',
      '2 spring onions, sliced',
      '1 tbsp soy sauce',
      '1 tsp sesame oil',
      '12 spring roll wrappers, about 200 g',
      '1 tbsp plain flour, mixed with 1 tbsp water',
      '2 tbsp vegetable oil, for brushing',
      '4 tbsp sweet chilli sauce'
    ],
    st: [
      'Heat the 1 tbsp vegetable oil in a wok over high heat. Stir-fry the garlic and ginger for 30 seconds, then add the cabbage, carrot and mushrooms and cook for 4 minutes.',
      'Add the spring onions, soy sauce and sesame oil. Tip into a sieve and leave to cool and drain for 15 minutes.',
      'Place a tablespoon of filling near one corner of a wrapper. Fold the corner over, fold in the sides, roll up and seal with the flour paste.',
      'Heat the air fryer to 190C. Brush the rolls on all sides with the 2 tbsp vegetable oil and place in the basket.',
      'Cook for 12 minutes, turning once, until golden. Serve with the sweet chilli sauce.'
    ],
    tips: [
      'Drain and cool the filling fully before wrapping.',
      'Keep the wrappers under a damp cloth as you work.',
      'Do not let the rolls touch in the basket.'
    ],
    pair: ['Sweet chilli sauce', 'Soy dipping sauce', 'Noodle salad', 'Fried rice'],
    store: 'Uncooked rolls freeze for 1 month. Cooked ones keep for 1 day and reheat in the air fryer for 4 minutes.',
    nut: [208, 4, 30, 8, 2, 7, 400]
  }
};
