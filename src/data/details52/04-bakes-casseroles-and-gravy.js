'use strict';

/**
 * Volume fifty-two — American regional classics, barbecue, bakes and
 * everyday cooking, fourth part.
 *
 * Twenty-five dishes: witch finger cookies, two muffins and bagel bites;
 * four sourdough bakes (pizza crust, cinnamon rolls, brownies, waffles);
 * cottage cheese toast and a biscuits and gravy casserole; the Italian-
 * American chicken dishes francoise, Vesuvio and Murphy; scalloped corn and a
 * Reuben casserole; Sonoran hot dogs, the Jucy Lucy and a bacon-wrapped
 * meatloaf; pizza casserole; a crown roast of pork; Spanish membrillo; pan
 * gravy and red-eye gravy; and cocktail meatballs and bacon-wrapped scallops.
 * Waits of an hour or more are declared as rest. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'witch-finger-cookies': {
    d: 'Buttery almond shortbread cookies shaped like long, crooked fingers, with an almond for a fingernail and a smear of jam for gore.',
    meta: 'Witch finger cookies: buttery almond shortbread shaped like crooked fingers, with an almond for a nail and jam for gore. Twenty-four cookies, cooked in 15 minutes.',
    kw: ['witch finger cookies', 'witch fingers halloween cookies', 'witch finger cookies recipe', 'almond shortbread finger cookies', 'halloween finger cookies'],
    why: 'How do you make a cookie look like a finger? With a knuckle, a nail and a bit of crookedness. Witch finger cookies are a Halloween favourite because the dough is simple and the shaping is fun. They are a buttery shortbread flavoured with almond, which holds its shape well in the oven and tastes better than the usual novelty biscuit.\n\nRoll a piece of dough into a log about 8 cm long and slightly thinner at the tip. Pinch in two spots to make knuckles, and score a few lines across each with the back of a knife. Press a blanched almond into the tip for the nail, pushing it down firmly so it does not fall out in the oven.\n\n**Chill the shaped fingers for 15 minutes** before baking, so the butter firms up and the lines stay sharp. Bake until just pale gold. Once cool, lift each almond, dab a little red jam under it and press it back, so that the nail looks as if it is bleeding. Serve on a dark plate.',
    ing: [
      '115 g butter, softened',
      '80 g icing sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '1/2 tsp almond extract',
      '250 g plain flour',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '24 blanched almonds, about 30 g',
      '2 tbsp raspberry jam'
    ],
    st: [
      'Beat the butter and icing sugar until pale. Beat in the egg, vanilla and almond extract.',
      'Stir in the flour, baking powder and salt to a soft dough. Cover and chill for 15 minutes.',
      'Heat the oven to 180°C. Roll tablespoons of dough into fingers 8 cm long. Pinch two knuckles in each, score lines with a knife and press an almond into the tip.',
      'Bake on lined trays for 15 minutes until pale gold. Cool, then lift each almond and dab a little jam underneath before pressing back.'
    ],
    tips: [
      'Press the almonds in firmly so they stay attached.',
      'Chill the shaped dough so the shapes hold.',
      'Cool the cookies fully before adding the jam.'
    ],
    pair: ['Hot chocolate', 'Cold milk', 'Apple cider', 'Strong tea'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [101, 2, 12, 5, 0, 4, 40]
  },

  'pumpkin-cream-cheese-muffins': {
    d: 'Spiced pumpkin muffins with a sweet cream cheese centre, baked until domed and golden.',
    meta: 'Pumpkin cream cheese muffins: spiced pumpkin muffins with a sweet cream cheese centre, baked until domed and golden. Twelve muffins, cooked for 25 minutes.',
    kw: ['pumpkin cream cheese muffins', 'pumpkin muffins with cream cheese filling', 'pumpkin cream cheese muffin recipe', 'spiced pumpkin muffins', 'pumpkin muffins with cheesecake centre'],
    why: 'Pumpkin, cream cheese, cinnamon and nutmeg: four things that taste of autumn, and four of the reasons these muffins are worth the extra step. The batter is oil-based, which keeps the crumb moist for days, and the pumpkin gives a tender, slightly dense texture, a little like a carrot cake.\n\nThe cream cheese centre is a spoonful of soft cheese beaten with sugar and an egg yolk. Drop a heaped teaspoon into the middle of each muffin before baking. As the batter rises around it, the filling sinks slightly and sets into a creamy pocket. The egg yolk keeps it from running into the batter.\n\n**Fill each case two-thirds full** and push the cream cheese into the centre. Do not overmix the batter, as the muffins turn tough. Bake until a skewer comes out clean from the cake part, with perhaps a little cheese on it. Cool on a rack for 10 minutes. Store them in the fridge, because of the cream cheese filling.',
    ing: [
      '250 g plain flour',
      '150 g caster sugar',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '2 tsp mixed spice',
      '1/2 tsp salt',
      '250 g pumpkin purée',
      '100 ml vegetable oil',
      '2 eggs',
      '# Cream cheese filling',
      '150 g cream cheese, softened',
      '40 g caster sugar',
      '1 egg yolk'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin with paper cases.',
      'Beat the cream cheese, 40 g sugar and egg yolk until smooth.',
      'Mix the flour, 150 g sugar, baking powder, bicarbonate of soda, spice and salt. Whisk the pumpkin, oil and eggs and stir into the dry mixture until just combined.',
      'Fill the cases two-thirds full and spoon a heaped teaspoon of filling into the centre of each. Bake for 25 minutes until risen and a skewer comes out clean. Cool on a rack.'
    ],
    tips: [
      'Do not overmix the batter.',
      'Use plain pumpkin purée, not pie filling.',
      'Cool the muffins before storing them.'
    ],
    pair: ['Hot coffee', 'Spiced tea', 'Cold milk', 'Apple cider'],
    store: 'Keeps in the fridge for 4 days. Bring to room temperature to serve.',
    nut: [277, 5, 35, 13, 1, 17, 290]
  },

  'blueberry-streusel-muffins': {
    d: 'Tall blueberry muffins with a crumbly cinnamon streusel on top, baked until the berries burst and the crumb is golden.',
    meta: 'Blueberry streusel muffins: tall blueberry muffins with a crumbly cinnamon streusel, baked until the berries burst. Twelve muffins, cooked for 25 minutes.',
    kw: ['blueberry streusel muffins', 'blueberry muffins with streusel topping', 'blueberry streusel muffin recipe', 'bakery style blueberry muffins', 'crumb topped blueberry muffins'],
    why: 'Blueberries, flour, butter, sugar: four ingredients you can find in any kitchen, and the beginning of a bakery-style muffin with a high dome. The domed top comes from starting the oven hot, at 200°C, for the first few minutes, which makes the batter spring up before the crust sets, and then lowering it so the centre cooks through.\n\nThe batter is mixed in two bowls and stirred together as little as possible. Lumps are fine. Overmixing develops gluten, which makes muffins tough and tunnelled. The melted butter and milk make a moist, tender crumb, and tossing the blueberries in a spoonful of flour stops them sinking to the bottom.\n\n**Pile the streusel on thickly.** It is flour, sugar, cinnamon and cold butter, rubbed together until it looks like damp breadcrumbs, and it bakes into a sweet, crunchy crust over the soft cake. Fill the cases almost to the top. Cool the muffins for 10 minutes in the tin so they set, then lift them out.',
    ing: [
      '280 g plain flour',
      '120 g caster sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '200 ml milk',
      '1 egg',
      '80 g butter, melted',
      '1 tsp vanilla extract',
      '200 g blueberries',
      '# Streusel',
      '50 g plain flour',
      '40 g caster sugar',
      '30 g cold butter, diced',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 200°C and line a 12-hole muffin tin with paper cases. Rub the streusel ingredients together into crumbs.',
      'Mix 280 g flour, 120 g sugar, the baking powder and salt. Whisk the milk, egg, melted butter and vanilla and stir into the dry mixture until just combined.',
      'Toss the blueberries in 1 tablespoon of flour and fold in gently. Fill the cases and cover with the streusel.',
      'Bake for 5 minutes, then lower the oven to 180°C and bake for 20 minutes more until golden. Cool in the tin for 10 minutes.'
    ],
    tips: [
      'Stir until just combined; a lumpy batter is correct.',
      'Use frozen blueberries straight from the freezer if you like.',
      'Fill the cases generously for a bakery-style dome.'
    ],
    pair: ['Hot coffee', 'Cold milk', 'Butter', 'Fresh fruit'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [249, 4, 38, 9, 1, 16, 190]
  },

  'bagel-bites': {
    d: 'Mini bagels topped with pizza sauce, mozzarella and pepperoni, baked until the cheese bubbles and the edges crisp.',
    meta: 'Bagel bites: mini bagels topped with pizza sauce, mozzarella and pepperoni, baked until the cheese bubbles. Twelve servings, cooked in 12 minutes.',
    kw: ['bagel bites', 'homemade bagel bites', 'pizza bagel bites', 'mini bagel pizzas', 'bagel bites recipe'],
    why: 'The first sign they are ready is the sound: cheese bubbling and spitting against hot bagel. Bagel bites are mini pizzas on halved mini bagels, and they are made in minutes. They are a snack for parties, after-school hunger and game days, and they are quicker to make from scratch than to wait for a frozen version to bake.\n\nSplit each mini bagel and toast the cut sides lightly first, so they stay crisp under the toppings. A spoonful of thick pizza sauce goes on, then a pinch of grated mozzarella and a slice or two of mini pepperoni. A dusting of dried oregano finishes them. Do not overload them, since the bagels are small and cheese will slide off.\n\n**Bake in a hot oven** at 200°C, until the cheese is melted and speckled with gold. Let them cool for a couple of minutes before serving, because the sauce stays molten. Vary the toppings with sweetcorn, olives or sliced peppers, or leave off the meat for a vegetarian version.',
    ing: [
      '300 g mini bagels, 12, halved',
      '120 g thick tomato pizza sauce',
      '150 g mozzarella, grated',
      '40 g mini pepperoni',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 200°C. Put the bagel halves cut side up on a baking tray and toast for 3 minutes.',
      'Spoon a teaspoon of sauce onto each half. Top with the mozzarella and pepperoni and sprinkle with the oregano.',
      'Bake for 9 minutes until the cheese is bubbling and golden at the edges. Cool for 2 minutes before serving.'
    ],
    tips: [
      'Toast the bagels first to keep them crisp.',
      'Use a thick sauce so it does not soak the bagel.',
      'Let them cool briefly; the sauce is very hot.'
    ],
    pair: ['Green salad', 'Carrot sticks', 'Ranch dip', 'Cold lemonade'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [125, 6, 14, 5, 1, 2, 250]
  },

  'sourdough-pizza-crust': {
    d: 'A thin, chewy, blistered pizza base made with sourdough starter, bulk fermented for four hours and baked in a very hot oven.',
    meta: 'Sourdough pizza crust: a thin, chewy, blistered pizza base made with sourdough starter, fermented for four hours. Four servings, cooked in 15 minutes.',
    kw: ['sourdough pizza crust', 'sourdough pizza dough', 'sourdough pizza base recipe', 'pizza crust with sourdough starter', 'homemade sourdough pizza'],
    why: 'It looks like an ordinary pizza and tastes like a better one. A sourdough crust has a faint tang and a deep, nutty flavour that a yeast crust only gets after a day or two in the fridge, and the long fermentation gives it a chewy interior, a crisp base and big blisters on the rim.\n\nThe dough is flour, water, a lively starter and salt, with a splash of oil. Mix it, knead it briefly, then leave it for four hours, until it has roughly doubled and feels light and airy. The starter should be active: bubbly, risen and at its peak. A weak starter gives a dense, heavy crust that does not blister.\n\n**Heat the oven to its hottest setting for at least 30 minutes** with a baking sheet or stone inside. Stretch the dough by hand, not with a rolling pin, to keep the gas in the rim. Top lightly with sauce and cheese and slide the pizza onto the hot surface. It cooks in 7 minutes. Slice with a pizza cutter and eat at once.',
    ing: [
      '400 g strong white bread flour',
      '250 ml water',
      '100 g active sourdough starter',
      '8 g salt',
      '1 tbsp olive oil',
      '# Topping',
      '200 g tomato pizza sauce',
      '200 g mozzarella, grated',
      '1 tsp dried oregano'
    ],
    st: [
      'Mix the flour, water, starter, salt and oil into a shaggy dough. Knead for 5 minutes until smooth. Cover and leave to ferment for 4 hours until doubled.',
      'Heat the oven to its highest setting with a baking sheet inside. Divide the dough in two and stretch each piece by hand into a 30 cm round.',
      'Top each round with half the sauce, half the mozzarella and a pinch of oregano.',
      'Slide onto the hot sheet and bake for 7 minutes until the rim is blistered and the base is crisp. Repeat with the second pizza.'
    ],
    tips: [
      'Use a starter that is active and bubbly.',
      'Stretch the dough gently to keep the air in the rim.',
      'Do not overload the pizza; thin toppings cook properly.'
    ],
    pair: ['Green salad', 'Cold lager', 'Chilli oil', 'Garlic knots'],
    store: 'Best eaten straight away. Leftover slices keep in the fridge for 2 days.',
    nut: [514, 23, 65, 18, 4, 8, 1700],
    rest: [240, 'Fermenting the dough']
  },

  'sourdough-cinnamon-rolls': {
    d: 'Soft, tangy sourdough rolls swirled with brown sugar and cinnamon, baked until golden and finished with cream cheese icing.',
    meta: 'Sourdough cinnamon rolls: soft, tangy rolls swirled with brown sugar and cinnamon, baked until golden with cream cheese icing. Ten rolls, proving 240 minutes.',
    kw: ['sourdough cinnamon rolls', 'sourdough cinnamon rolls recipe', 'cinnamon rolls with sourdough starter', 'sourdough rolls with cream cheese icing', 'tangy cinnamon rolls'],
    why: 'The smell of cinnamon, butter and warm bread rising through the house is the point of this recipe, and it does take a while to arrive. Sourdough rolls are slower than yeasted ones, since the wild yeast in the starter works at its own pace, but the long rise gives them a soft, pillowy crumb and a light tang that cuts through the sweetness of the filling.\n\nThe dough is enriched with milk, butter, sugar and an egg, so it is soft and a little sticky. Knead it well, for about 10 minutes, until it passes the windowpane test: a small piece should stretch thin enough to see light through without tearing. Roll it out to a large rectangle, spread with softened butter, brown sugar and cinnamon, and roll it up from the long side.\n\n**Cut the log into ten rolls with unflavoured dental floss** or a very sharp knife, which keeps the spirals neat. Let them prove until puffy, then bake until golden. Spread the cream cheese icing on while the rolls are still warm, so it melts into the swirls. Eat them the same day.',
    ing: [
      '450 g strong white flour',
      '150 g active sourdough starter',
      '200 ml warm milk',
      '60 g butter, softened',
      '50 g caster sugar',
      '1 egg',
      '1 tsp salt',
      '# Filling',
      '60 g butter, softened',
      '100 g dark brown sugar',
      '2 tbsp ground cinnamon',
      '# Icing',
      '100 g cream cheese',
      '100 g icing sugar',
      '1 tbsp milk'
    ],
    st: [
      'Mix the flour, starter, milk, 60 g butter, caster sugar, egg and salt. Knead for 10 minutes into a smooth, elastic dough. Cover and leave to rise for 3 hours until doubled.',
      'Roll the dough to a 30 x 40 cm rectangle. Spread with the 60 g butter and sprinkle with the brown sugar and cinnamon. Roll up from the long side and cut into 10 rolls.',
      'Arrange the rolls in a greased 23 x 33 cm dish, cover and leave to prove for 1 hour until puffy.',
      'Heat the oven to 180°C and bake for 30 minutes until golden. Beat the cream cheese, icing sugar and milk and spread over the warm rolls.'
    ],
    tips: [
      'Use a starter that has recently been fed.',
      'Cut with floss for neat spirals.',
      'Ice the rolls while they are still warm.'
    ],
    pair: ['Hot coffee', 'Cold milk', 'Fresh fruit', 'Spiced tea'],
    store: 'Best on the day. Keeps in an airtight container for 2 days.',
    nut: [443, 8, 69, 15, 2, 27, 360],
    rest: [240, 'Rising and proving']
  },

  'sourdough-brownies': {
    d: 'Fudgy chocolate brownies made with sourdough discard, with a shiny crackle top and a deep, slightly tangy chocolate flavour.',
    meta: 'Sourdough brownies: fudgy chocolate brownies made with sourdough discard, with a crackle top and a deep, slightly tangy flavour. Twelve servings, cooked for 30 minutes.',
    kw: ['sourdough brownies', 'sourdough discard brownies', 'sourdough brownies recipe', 'fudgy brownies with sourdough starter', 'chocolate brownies with discard'],
    why: 'Chocolate, butter, sugar, eggs, and a spoonful of something sour. The discard adds a faint tang that cuts the sweetness and deepens the chocolate flavour, the way a pinch of salt or a shot of coffee does, though you cannot taste the sourdough as such. It also adds a little moisture, which keeps the brownies fudgy.\n\nMelt the chocolate and butter together over a pan of simmering water or in short bursts in the microwave, then whisk in the sugar and eggs. The shiny, crackled top comes from beating the eggs and sugar well, so spend a full minute on that step. Fold in the flour, cocoa and discard last, and stop as soon as no dry streaks remain.\n\n**Take the tin out of the oven while the centre is still slightly soft**, with a skewer showing a few moist crumbs. Brownies set as they cool, and overbaked ones turn cakey. Cool in the tin for at least 30 minutes before cutting into squares. For clean edges, chill them briefly first.',
    ing: [
      '200 g dark chocolate, chopped',
      '150 g butter',
      '200 g caster sugar',
      '3 eggs',
      '120 g sourdough discard',
      '80 g plain flour',
      '30 g unsweetened cocoa powder',
      '1/2 tsp salt',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 175°C. Grease and line a 20 cm square tin.',
      'Melt the chocolate and butter together over gentle heat, stirring until smooth. Cool for 5 minutes.',
      'Whisk the sugar, eggs and vanilla for 1 minute until pale and thick. Stir in the chocolate mixture and the sourdough discard.',
      'Fold in the flour, cocoa and salt until just combined. Pour into the tin and bake for 30 minutes until the top is set and crackled. Cool completely in the tin.'
    ],
    tips: [
      'Beat the eggs and sugar well for a shiny top.',
      'Do not overbake; the centre should be slightly soft.',
      'Cool before cutting for neat squares.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Fresh raspberries', 'Black coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [334, 5, 38, 18, 3, 25, 170]
  },

  'sourdough-waffles': {
    d: 'Crisp, tangy waffles made with sourdough discard, light inside and golden outside, ready without an overnight rest.',
    meta: 'Sourdough waffles: crisp, tangy waffles made with sourdough discard, light inside and golden outside. Four servings, cooked in 20 minutes.',
    kw: ['sourdough waffles', 'sourdough discard waffles', 'sourdough waffle recipe', 'crispy sourdough waffles', 'waffles with sourdough starter'],
    why: 'The sound of a waffle iron hissing and the smell of browning butter: that is how breakfast starts. Sourdough waffles use discard, the portion of starter you take out before feeding, which is too good to waste. It adds a gentle tang and a lightness to the batter, and the waffles come out crisp on the outside and tender within.\n\nThe batter is made in a few minutes, with no overnight rest. Mix the discard, flour, milk, eggs and melted butter, then add the baking powder and a little bicarbonate of soda last. The bicarbonate reacts with the acidity of the discard and puffs the batter, which is why it should go in just before cooking.\n\n**Heat the waffle iron fully before pouring** and grease it lightly. Cook each waffle for 4 to 5 minutes, until it stops steaming and is deep golden. Keep the finished waffles on a rack in a low oven, not stacked, so they stay crisp. Serve with butter, maple syrup, fruit or yoghurt.',
    ing: [
      '200 g sourdough discard',
      '150 g plain flour',
      '200 ml milk',
      '2 eggs',
      '50 g butter, melted',
      '1 tbsp caster sugar',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the waffle iron and the oven to 100°C. Whisk the discard, milk, eggs and butter in a large bowl.',
      'Stir in the flour, sugar and salt until almost smooth. Fold in the baking powder and bicarbonate of soda.',
      'Pour a ladleful of batter into the iron and cook for 5 minutes until deep golden and crisp. Repeat with the remaining batter, 4 waffles in all.',
      'Keep the finished waffles on a rack in the warm oven. Serve hot.'
    ],
    tips: [
      'Add the baking powder and soda last.',
      'Do not stack the waffles; steam makes them soggy.',
      'Grease the iron lightly between waffles.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Butter', 'Yoghurt'],
    store: 'Best eaten at once. Cooled waffles keep in the freezer for 1 month and crisp in the toaster.',
    nut: [432, 13, 59, 16, 2, 8, 870]
  },

  'cottage-cheese-toast': {
    d: 'Thick toast topped with cottage cheese, sliced tomato, olive oil, black pepper and torn basil, ready in minutes.',
    meta: 'Cottage cheese toast: thick toast topped with cottage cheese, sliced tomato, olive oil, black pepper and torn basil. Two servings, cooked in 5 minutes.',
    kw: ['cottage cheese toast', 'cottage cheese on toast', 'savoury cottage cheese toast with tomato', 'cottage cheese toast recipe', 'cottage cheese toast with tomato'],
    why: 'The first thing you hear is the crunch of the toast. Cottage cheese on toast is a fast breakfast or lunch that sets soft, cool curds against a crisp base, and the tomato and basil lift it into something that tastes fresh. It takes five minutes and one pan.\n\nThe bread matters. Choose a thick slice of sourdough or a sturdy wholemeal loaf, and toast it until it is properly crisp, so it can carry the cheese without going soft. Cottage cheese is mild, so season generously: black pepper, flaky salt and a good drizzle of olive oil all make a difference.\n\n**Pile the cottage cheese on at the last moment**, once the toast is cool enough to hold. Add the tomato slices, torn basil and a few chilli flakes. If your tomatoes are not very ripe, a pinch of sugar on the slices improves them. For a sweet version, use honey and berries instead of tomato and basil.',
    ing: [
      '80 g thick sourdough bread, 2 slices',
      '200 g cottage cheese',
      '1 tomato, about 125 g, sliced',
      '1 tbsp olive oil',
      '4 fresh basil leaves',
      '1/4 tsp flaky sea salt',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Toast the bread for 3 minutes until crisp and golden.',
      'Spoon the cottage cheese over the toast and spread to the edges.',
      'Lay the tomato slices on top, drizzle with the oil, and season with the salt and pepper.',
      'Tear the basil over the top and serve at once.'
    ],
    tips: [
      'Choose a thick, sturdy slice of bread.',
      'Drain any liquid from the cottage cheese first.',
      'Add the topping at the last moment so the toast stays crisp.'
    ],
    pair: ['Fruit', 'Boiled egg', 'Green salad', 'Coffee'],
    store: 'Best eaten straight away.',
    nut: [281, 15, 26, 13, 2, 6, 890]
  },

  'biscuits-and-gravy-casserole': {
    d: 'Sausage gravy poured over a dish and topped with drop biscuits, baked until the biscuits are golden and the gravy bubbles.',
    meta: 'Biscuits and gravy casserole: sausage gravy topped with drop biscuits, baked until the biscuits are golden. Eight servings, cooked for 40 minutes.',
    kw: ['biscuits and gravy casserole', 'sausage gravy casserole', 'biscuits and gravy bake', 'breakfast casserole with sausage gravy', 'biscuits and gravy casserole recipe'],
    why: 'The smell is the first thing: sausage browning, then the sweet, peppery note of the gravy thickening. Biscuits and gravy is a classic Southern breakfast, and the casserole version puts everything in one dish, with the gravy at the bottom and the biscuits on top, so the underside soaks and the top bakes crisp.\n\nStart with the gravy. Brown the sausage meat in a large pan, breaking it up well, then stir in the flour and cook for a minute to coat the fat. Add the milk gradually, whisking, and simmer for 5 minutes until thick. Season generously with black pepper. The gravy should be thicker than you would serve over biscuits on a plate, since it will loosen in the oven.\n\n**Spoon the biscuit dough over the gravy in rough mounds.** The dough is cold butter rubbed into flour and baking powder, then bound with milk. Do not smooth the mounds; the ragged tops brown best. Bake until deep golden and the gravy bubbles up around the edges, then let the dish stand for 10 minutes before serving.',
    ing: [
      '500 g pork sausage meat',
      '40 g plain flour',
      '700 ml whole milk',
      '1 tsp ground black pepper',
      '1/2 tsp salt',
      '# Biscuits',
      '250 g plain flour',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '80 g cold butter, diced',
      '180 ml milk'
    ],
    st: [
      'Heat the oven to 200°C. Brown the sausage meat in a large pan for 8 minutes, breaking it up. Stir in the 40 g flour and cook for 1 minute.',
      'Gradually whisk in the 700 ml milk and simmer for 5 minutes until thick. Season with pepper and salt and pour into a 23 x 33 cm dish.',
      'For the biscuits, mix the 250 g flour, baking powder and salt. Rub in the butter and stir in the 180 ml milk to a soft dough.',
      'Drop spoonfuls of dough over the gravy. Bake for 25 minutes until the biscuits are golden. Stand for 10 minutes.'
    ],
    tips: [
      'Make the gravy slightly thick; it loosens in the oven.',
      'Use cold butter for the biscuits.',
      'Do not smooth the tops; rough mounds brown best.'
    ],
    pair: ['Scrambled eggs', 'Fresh fruit', 'Hot coffee', 'Orange juice'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [451, 16, 36, 27, 1, 6, 1040]
  },

  'chicken-francoise': {
    d: 'Thin chicken cutlets dipped in egg and Parmesan, pan-fried until golden and finished in a lemon and white wine sauce.',
    meta: 'Chicken Françoise: thin chicken cutlets dipped in egg and Parmesan, pan-fried and finished in a lemon and white wine sauce. Four servings, cooked in 25 minutes.',
    kw: ['chicken francoise', 'chicken françoise', 'chicken francaise recipe', 'egg battered chicken in lemon wine sauce', 'chicken in lemon butter sauce'],
    why: 'Chicken, egg, lemon, wine: this dish is built from four plain things that become more than the sum of their parts. The cutlets are dipped in flour and egg, which makes a thin, soft coating that crisps lightly in the pan and then soaks up the sauce, so it is more like a tender omelette wrapper than a crust.\n\nSlice the chicken breasts in half horizontally, then pound them to an even thickness of about 1 cm. That way they cook in minutes and stay juicy. Coat in flour, then in beaten egg mixed with Parmesan, and fry in oil over medium heat. The coating should turn pale gold, not brown, for about 3 minutes a side.\n\n**Make the sauce in the same pan**, scraping up any browned bits. Wine, stock and lemon juice go in and reduce, then butter whisked in at the end gives the sauce a gloss and a rounder flavour. Return the chicken to the pan for a minute to soak up the sauce. Serve with pasta, rice or green beans.',
    ing: [
      '600 g chicken breast, sliced into 4 thin cutlets',
      '40 g plain flour',
      '2 eggs, beaten',
      '30 g Parmesan, finely grated',
      '3 tbsp vegetable oil',
      '30 g butter',
      '120 ml dry white wine',
      '120 ml chicken stock',
      '3 tbsp lemon juice',
      '2 tbsp chopped fresh parsley',
      '1/2 tsp salt'
    ],
    st: [
      'Pound the cutlets to 1 cm thick and season with the salt. Mix the eggs with the Parmesan. Dredge the chicken in the flour, then dip in the egg.',
      'Heat the oil in a large frying pan over medium heat and fry the cutlets for 3 minutes on each side until pale golden. Lift onto a plate.',
      'Pour the wine and stock into the pan and boil for 5 minutes, scraping up the browned bits. Add the lemon juice.',
      'Whisk in the butter, return the chicken to the sauce for 1 minute and scatter with the parsley.'
    ],
    tips: [
      'Pound the chicken evenly so it cooks through.',
      'Keep the heat at medium so the coating stays pale.',
      'Whisk the butter in off the heat.'
    ],
    pair: ['Linguine', 'Steamed rice', 'Green beans', 'Crusty bread'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days.',
    nut: [429, 41, 10, 25, 0, 1, 610]
  },

  'chicken-vesuvio': {
    d: 'Bone-in chicken roasted with potato wedges, garlic, peas and white wine, with a lemony pan sauce.',
    meta: 'Chicken Vesuvio: bone-in chicken roasted with potato wedges, garlic, peas and white wine, with a lemony pan sauce. Four servings, cooked for 50 minutes.',
    kw: ['chicken vesuvio', 'chicken vesuvio recipe', 'chicago chicken vesuvio', 'chicken with potatoes peas and white wine', 'roasted chicken vesuvio'],
    why: 'What do garlic, white wine and potatoes do together in a roasting tin? They make a sauce. Chicken Vesuvio is a one-tin dish of chicken pieces, potato wedges and plenty of garlic, roasted in wine and oil until the potatoes soak up the juices and the chicken skin turns crisp and gold. Peas stirred in at the end add colour and sweetness.\n\nStart by browning the chicken in a hot pan, which gives the skin a head start. Then roast it in the same pan with the potatoes, garlic cloves and oregano. The potatoes should be cut into thick wedges so they stay fluffy inside and crisp outside. Pour the wine and stock in around the chicken, not over it, so the skin stays dry.\n\n**Add the peas for the last 5 minutes**, when the chicken is almost cooked, so they warm without turning grey. Squeeze lemon over everything before serving. The liquid at the bottom of the tin is the sauce, so spoon it over the plate with a piece of bread.',
    ing: [
      '1.2 kg bone-in chicken pieces',
      '600 g potatoes, cut into thick wedges',
      '8 garlic cloves, peeled',
      '150 ml dry white wine',
      '100 ml chicken stock',
      '3 tbsp olive oil',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '100 g frozen peas',
      '1 lemon'
    ],
    st: [
      'Heat the oven to 200°C. Season the chicken with salt and pepper. Brown the pieces in 1 tablespoon of the oil in a large ovenproof pan for 6 minutes, skin side down.',
      'Add the potatoes, garlic, oregano and remaining oil and turn to coat. Pour in the wine and stock around the chicken.',
      'Roast for 40 minutes until the chicken is cooked through and the potatoes are golden.',
      'Scatter with the peas and roast for 5 minutes more. Squeeze over the lemon and serve with the pan juices.'
    ],
    tips: [
      'Pour the liquid around the chicken to keep the skin crisp.',
      'Cut the potatoes into large wedges so they do not dry out.',
      'Check the thickest piece of chicken is cooked through.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Roast peppers', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven.',
    nut: [834, 62, 34, 50, 6, 3, 900]
  },

  'chicken-murphy': {
    d: 'Bone-in chicken roasted with potatoes, Italian sausage, peppers and hot pickled cherry peppers in a garlicky white wine sauce.',
    meta: 'Chicken Murphy: bone-in chicken roasted with potatoes, Italian sausage, peppers and hot cherry peppers in a garlicky wine sauce. Four servings, cooked for 45 minutes.',
    kw: ['chicken murphy', 'chicken murphy recipe', 'chicken with sausage and potatoes', 'chicken with hot cherry peppers', 'italian american chicken murphy'],
    why: 'Use the brine from the jar. The tangy liquid from the pickled cherry peppers is the sauce\'s secret, and it replaces the lemon or wine vinegar a recipe would otherwise need. A splash of it brightens the whole pan and picks up the browned bits and rich fats from the sausage and the chicken.\n\nThe dish is a one-tin supper of chicken thighs and drumsticks, Italian sausage cut into chunks, potatoes, sweet peppers and onions, all roasted together. The sausage gives off fat and fennel that flavour the potatoes. Chopped hot cherry peppers add heat; use sweet ones if you prefer it milder. Garlic goes in whole so it turns soft and sweet.\n\n**Brown the chicken and sausage in a pan first**, then roast with the potatoes and peppers at 200°C. After 45 minutes the chicken skin should be crisp, the potatoes golden and the sauce reduced to a thick, glossy coating. Spoon the pan juices over each plate and mop up what is left with bread.',
    ing: [
      '1 kg bone-in chicken pieces',
      '250 g Italian sausage, cut into chunks',
      '500 g potatoes, cut into thick wedges',
      '2 peppers, about 300 g, cut into strips',
      '1 onion, sliced',
      '6 garlic cloves, peeled',
      '60 g pickled hot cherry peppers, chopped',
      '2 tbsp pickling liquid from the jar',
      '100 ml dry white wine',
      '3 tbsp olive oil',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Season the chicken with salt. Heat 1 tablespoon of the oil in a large ovenproof pan and brown the chicken and sausage for 8 minutes.',
      'Add the potatoes, peppers, onion, garlic and remaining oil and stir to coat.',
      'Pour in the wine, cherry peppers and the pickling liquid.',
      'Roast for 37 minutes, turning once, until the chicken is cooked through and the potatoes are golden.'
    ],
    tips: [
      'Taste a cherry pepper first to judge how hot they are.',
      'Cut the potatoes into large pieces so they stay moist.',
      'Spoon the pan juices over the plate.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Roast broccoli', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven.',
    nut: [894, 60, 33, 58, 5, 7, 1280]
  },

  'scalloped-corn': {
    d: 'A creamy baked side of sweetcorn, eggs, milk, butter and cracker crumbs, set into a soft, golden casserole.',
    meta: 'Scalloped corn: a creamy baked side of sweetcorn, eggs, milk, butter and cracker crumbs, set into a soft, golden casserole. Six servings, cooked for 45 minutes.',
    kw: ['scalloped corn', 'scalloped corn recipe', 'corn casserole with crackers', 'baked creamy corn side dish', 'old fashioned scalloped corn'],
    why: 'The smell of butter and corn browning together in the oven is the best part. Scalloped corn is an old American side dish, found on the table at Thanksgiving and Sunday dinners, and it works like a savoury bread pudding: crackers soak up the milk and egg, swell and set, holding sweet corn kernels in a soft custard.\n\nCrushed saltine crackers are the traditional thickener. They give the casserole a slightly salty, toasty flavour that plain breadcrumbs lack. Mix half the crumbs into the corn and custard, and use the other half, tossed with melted butter, as a crisp topping. Frozen sweetcorn works as well as fresh, and tinned corn needs only to be drained.\n\n**Let the mixture sit for 5 minutes** before baking, to give the crackers time to soften. Bake until the centre is just set and the top is golden brown, then rest for 10 minutes. It should hold its shape when spooned out, but stay moist. Season with black pepper and, if you like, a pinch of nutmeg.',
    ing: [
      '500 g sweetcorn kernels',
      '60 g saltine crackers, crushed',
      '250 ml whole milk',
      '2 eggs',
      '40 g butter, melted',
      '1/2 tsp salt',
      '1/2 tsp ground black pepper',
      '1 tbsp caster sugar'
    ],
    st: [
      'Heat the oven to 180°C and grease a 1.5 litre baking dish.',
      'Mix the sweetcorn, half the cracker crumbs, milk, eggs, half the butter, salt, pepper and sugar. Let it stand for 5 minutes.',
      'Pour into the dish. Mix the remaining crumbs with the remaining butter and scatter over the top.',
      'Bake for 45 minutes until set and golden. Rest for 10 minutes before serving.'
    ],
    tips: [
      'Crush the crackers coarsely for a better texture.',
      'Thaw frozen corn and drain it first.',
      'The centre should be just set, not wobbly.'
    ],
    pair: ['Roast turkey', 'Baked ham', 'Fried chicken', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven.',
    nut: [235, 7, 27, 11, 2, 7, 320]
  },

  'reuben-casserole': {
    d: 'Layers of rye bread, sauerkraut, corned beef and Swiss cheese with Thousand Island dressing, baked until golden and bubbling.',
    meta: 'Reuben casserole: layers of rye bread, sauerkraut, corned beef and Swiss cheese with Thousand Island dressing, baked until bubbling. Six servings, cooked for 40 minutes.',
    kw: ['reuben casserole', 'reuben casserole recipe', 'corned beef and sauerkraut casserole', 'reuben sandwich casserole', 'rye bread reuben bake'],
    why: 'The common way this dish goes wrong is a soggy middle, and the fix is to squeeze the sauerkraut dry. Sauerkraut holds a lot of liquid, and when it goes into a casserole, that liquid seeps into the bread and turns it to paste. Press it hard in a sieve or wrap it in a clean cloth and squeeze before it goes in the dish.\n\nA Reuben sandwich is corned beef, sauerkraut, Swiss cheese and Thousand Island dressing on grilled rye, and the casserole does the same thing in layers. Toast the rye cubes first in butter, so they hold up, then layer them with the sauerkraut, the chopped corned beef and the dressing. Swiss cheese goes on top, and it melts into a golden crust in the oven.\n\n**Cover the dish with foil for the first 25 minutes**, so the layers heat through, then uncover to brown the top. Let it stand for 5 minutes before serving. Spoon out generous portions, with extra Thousand Island dressing and a pickle spear on the side.',
    ing: [
      '200 g rye bread, cut into 2 cm cubes',
      '40 g butter, melted',
      '300 g sauerkraut, drained and squeezed dry',
      '300 g cooked corned beef, chopped',
      '200 g Swiss cheese, grated',
      '100 g Thousand Island dressing',
      '1 tsp caraway seeds'
    ],
    st: [
      'Heat the oven to 190°C. Toss the bread cubes with the melted butter and toast on a tray for 8 minutes.',
      'Spread half the bread in a 20 x 30 cm baking dish. Top with half the sauerkraut, corned beef, dressing and cheese. Repeat with a second layer.',
      'Scatter with the caraway seeds, cover with foil and bake for 20 minutes.',
      'Uncover and bake for 12 minutes more until golden and bubbling. Stand for 5 minutes.'
    ],
    tips: [
      'Squeeze the sauerkraut as dry as you can.',
      'Toast the bread first so it does not turn to mush.',
      'Serve with extra dressing on the side.'
    ],
    pair: ['Dill pickles', 'Green salad', 'Potato crisps', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [440, 25, 22, 28, 3, 5, 1180]
  },

  'sonoran-hot-dog': {
    d: 'A bacon-wrapped hot dog in a soft roll, topped with pinto beans, tomato, onion, mayonnaise and mustard.',
    meta: 'Sonoran hot dog: a bacon-wrapped hot dog in a soft roll, topped with pinto beans, tomato, onion, mayonnaise and mustard. Four servings, cooked in 10 minutes.',
    kw: ['sonoran hot dog', 'bacon wrapped hot dog', 'sonoran hot dog recipe', 'hot dog with beans and tomato', 'arizona sonoran hot dog'],
    why: 'Bacon, a hot dog, beans, tomato, onion, mayonnaise and mustard: the Sonoran hot dog is a pile of toppings on a soft bun, and the first reaction is usually that it cannot possibly work. It does, because each topping has a job: the bacon is smoky and salty, the beans are creamy and earthy, the tomato and onion are fresh, and the mayonnaise and mustard supply richness and bite.\n\nWrap each hot dog in a rasher of bacon, tucking the ends under, and cook it in a hot pan for about 8 minutes, turning, until the bacon is crisp all over. The bun should be soft and slightly sweet, like a bolillo split down the top. Warm it for a minute in the pan with the bacon fat, or steam it.\n\n**Warm the beans before piling them on**, and keep the diced tomato and onion cold and fresh for contrast. A drizzle of jalapeño salsa on top finishes the dish. Assemble just before eating, since the bun softens under all the toppings.',
    ing: [
      '4 hot dogs, about 320 g',
      '120 g streaky bacon rashers',
      '4 soft rolls, about 240 g',
      '150 g cooked pinto beans, warmed',
      '1 tomato, about 125 g, diced',
      '1/2 onion, about 60 g, diced',
      '2 tbsp mayonnaise',
      '2 tbsp yellow mustard',
      '2 tbsp jalapeño salsa'
    ],
    st: [
      'Wrap each hot dog in a slice of bacon, spiralling it round and tucking in the ends.',
      'Cook in a large frying pan over medium heat for 8 minutes, turning, until the bacon is crisp.',
      'Warm the rolls in the pan for 1 minute. Split and fill with the hot dogs.',
      'Top with the warm beans, tomato, onion, mayonnaise, mustard and salsa.'
    ],
    tips: [
      'Use thin bacon, as thick slices stay chewy.',
      'Secure the bacon with a toothpick if it will not stay.',
      'Build the hot dogs just before serving.'
    ],
    pair: ['Pickled jalapeños', 'Lime wedges', 'Corn on the cob', 'Cold lager'],
    store: 'Best eaten straight away.',
    nut: [538, 24, 43, 30, 5, 6, 1630]
  },

  'jucy-lucy': {
    d: 'A beef burger with a core of molten cheese sealed inside the patty, so it oozes out at the first bite.',
    meta: 'Jucy Lucy: a beef burger with a core of molten cheese sealed inside the patty, so it oozes out at the first bite. Four servings, cooked in 12 minutes.',
    kw: ['jucy lucy', 'juicy lucy burger', 'cheese stuffed burger', 'jucy lucy recipe', 'burger with molten cheese centre'],
    why: 'Seal the edges well and let it rest. Those are the two instructions that matter most for a Jucy Lucy, because the whole point is a patty with a pocket of molten cheese inside, and any gap in the seam will let the cheese escape into the pan instead of into your mouth. A burger that has leaked is just a burger.\n\nDivide the mince into 8 equal balls and flatten each into a thin round. Place a folded slice of American cheese in the centre of four of them, top each with a second round and pinch the edges together, working all the way round. Press the seam flat and check for cracks. Use mince with 20 per cent fat; lean mince cracks.\n\n**Cook the burgers in a hot pan for about 5 minutes a side**, pressing only once, at the start, and never afterwards. Let them rest for 3 minutes before serving, as the cheese inside is hotter than lava. Warn your guests. Serve in toasted buns with pickles and onion.',
    ing: [
      '600 g beef mince, 20 per cent fat',
      '4 slices American cheese, about 80 g',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1 tbsp vegetable oil',
      '4 burger buns, about 240 g',
      '30 g dill pickle slices',
      '1/2 onion, about 60 g, thinly sliced'
    ],
    st: [
      'Divide the beef into 8 balls and flatten each into a thin round about 10 cm across.',
      'Fold each cheese slice in half and place in the centre of 4 rounds. Cover with the remaining rounds and pinch the edges to seal tightly. Season with salt and pepper.',
      'Heat the oil in a heavy pan over medium-high heat and cook the burgers for 5 minutes on each side, turning once.',
      'Rest for 3 minutes. Serve in toasted buns with pickles and onion.'
    ],
    tips: [
      'Seal the edges without gaps.',
      'Rest the burgers before eating; the cheese is very hot.',
      'Do not press the burgers while cooking.'
    ],
    pair: ['Chips', 'Coleslaw', 'Pickles', 'Milkshake'],
    store: 'Best eaten straight away.',
    nut: [577, 37, 33, 33, 2, 6, 1340]
  },

  'bacon-wrapped-meatloaf': {
    d: 'A classic beef meatloaf wrapped in a lattice of bacon and glazed with ketchup, baked until the bacon is crisp.',
    meta: 'Bacon wrapped meatloaf: a classic beef meatloaf wrapped in bacon and glazed with ketchup, baked until the bacon is crisp. Six servings, cooked for 60 minutes.',
    kw: ['bacon wrapped meatloaf', 'bacon wrapped meatloaf recipe', 'meatloaf with bacon and ketchup glaze', 'classic bacon meatloaf', 'beef meatloaf wrapped in bacon'],
    why: 'Beef, bacon, ketchup: the ingredients of a diner dinner, and a plain loaf of meat that is made much better by what is wrapped around it. The bacon bastes the meatloaf as it cooks, adding fat and smoke to the lean beef, and it crisps into a salty shell that contrasts with the soft, tender interior.\n\nThe meatloaf itself is mince mixed with breadcrumbs soaked in milk, an egg, finely chopped onion, Worcestershire sauce and mustard. The breadcrumbs and milk are what keep it moist; skip them and the loaf dries out. Mix with your hands, only until combined, because handling it too much makes it dense and rubbery.\n\n**Lay the bacon over the loaf in overlapping rows**, tucking the ends underneath. Brush with a glaze of ketchup, brown sugar and mustard. Bake on a rack set over a tin so the fat drains away and the bacon crisps on all sides. Rest the loaf for 10 minutes before cutting thick slices, so the juices stay inside.',
    ing: [
      '700 g beef mince, 15 per cent fat',
      '60 g breadcrumbs',
      '80 ml milk',
      '1 egg',
      '100 g onion, finely chopped',
      '2 tbsp Worcestershire sauce',
      '1 tbsp yellow mustard',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '150 g streaky bacon rashers',
      '# Glaze',
      '4 tbsp ketchup',
      '1 tbsp dark brown sugar',
      '1 tsp yellow mustard'
    ],
    st: [
      'Heat the oven to 180°C. Soak the breadcrumbs in the milk for 5 minutes.',
      'Mix the beef, soaked breadcrumbs, egg, onion, Worcestershire sauce, mustard, salt and pepper with your hands until just combined. Shape into a loaf about 25 cm long on a rack set over a baking tin.',
      'Lay the bacon in overlapping rows over the loaf and tuck the ends under. Mix the glaze ingredients and brush over the top.',
      'Bake for 60 minutes until cooked through and the bacon is crisp. Rest for 10 minutes before slicing.'
    ],
    tips: [
      'Do not overmix the meat.',
      'Cook on a rack so the fat drains off.',
      'Check that the centre reaches 74°C.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Gravy', 'Glazed carrots'],
    store: 'Keeps in the fridge for 4 days. Reheat slices in the oven or microwave.',
    nut: [378, 30, 15, 22, 1, 7, 1110]
  },

  'pizza-casserole': {
    d: 'Pasta baked with pizza sauce, pepperoni and plenty of mozzarella, until bubbling and speckled with golden cheese.',
    meta: 'Pizza casserole: pasta baked with pizza sauce, pepperoni and plenty of mozzarella until bubbling and golden. Six servings, cooked for 35 minutes.',
    kw: ['pizza casserole', 'pizza pasta bake', 'pizza casserole recipe', 'pepperoni pizza casserole', 'baked pasta with pizza sauce'],
    why: 'Pasta, sauce, cheese and pepperoni: four ingredients you can pick up on the way home, and the first step is to boil the water. Pizza casserole takes everything people like about pizza and puts it in a baking dish with rotini, which holds on to the sauce and the cheese in its twists.\n\nCook the pasta for 2 minutes less than the packet says, since it carries on cooking in the oven and will absorb some of the sauce. Drain it and stir it straight into the sauce with half the cheese and half the pepperoni. Spoon into a baking dish, and put the rest of the cheese and pepperoni on top.\n\n**Bake until the cheese is melted and lightly browned in spots**, about 25 minutes at 190°C. Let the dish stand for 5 minutes before serving, which lets the sauce thicken and makes it easier to scoop. You can add sautéed peppers, mushrooms, olives or cooked sausage to the mix, and a dusting of Parmesan and oregano brings it closer to the real thing.',
    ing: [
      '300 g rotini pasta',
      '500 g tomato pizza sauce',
      '250 g mozzarella, grated',
      '80 g sliced pepperoni',
      '30 g Parmesan, grated',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 190°C. Boil the pasta in salted water for 8 minutes. Drain.',
      'Stir the pasta into the pizza sauce with half the mozzarella and half the pepperoni.',
      'Spoon into a 23 x 33 cm baking dish. Scatter with the remaining mozzarella and pepperoni, the Parmesan and the oregano.',
      'Bake for 25 minutes until bubbling and golden. Stand for 5 minutes before serving.'
    ],
    tips: [
      'Undercook the pasta slightly.',
      'Use a thick sauce to avoid a watery dish.',
      'Cover with foil if the top browns too fast.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Cold lemonade'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [414, 21, 42, 18, 3, 4, 570]
  },

  'crown-roast-of-pork': {
    d: 'Two racks of pork tied into a crown and roasted with a sage and apple stuffing in the centre, carved into individual chops.',
    meta: 'Crown roast of pork: two racks of pork tied into a crown and roasted with a sage and apple stuffing, carved into chops. Eight servings, cooked for 120 minutes.',
    kw: ['crown roast of pork', 'crown roast of pork recipe', 'pork crown roast with stuffing', 'roast pork rack crown with apple and sage', 'christmas crown roast of pork'],
    why: 'How do you roast a crown? Ask the butcher. A crown roast is made from two racks of pork, each with eight ribs, that the butcher has trimmed of fat and bent into a circle and tied, so you can ask for it ready to cook. All that remains is to season it, stuff the centre and roast it.\n\nThe stuffing is sage, onion, celery and apple cooked in butter, then mixed with bread cubes and stock. Pile it loosely into the centre, as it will swell. Wrap the tips of the bones in foil, so they do not burn and look tidy. Rub the pork all over with salt, pepper and oil.\n\n**Start the oven hot at 220°C for 20 minutes** to colour the meat, then lower it to 160°C for the remaining 100. The roast is ready when the thickest part of the meat reaches 70°C. Rest it for 20 minutes, loosely covered. Carve between the bones into chops, serving each with a scoop of stuffing and the pan gravy.',
    ing: [
      '2.5 kg pork crown roast, 16 ribs, prepared by the butcher',
      '2 tbsp olive oil',
      '2 tsp salt',
      '1 tsp ground black pepper',
      '# Stuffing',
      '150 g bread cubes',
      '40 g butter',
      '100 g onion, finely chopped',
      '2 celery sticks, finely chopped',
      '100 g apple, peeled and diced',
      '1 tsp dried sage',
      '100 ml chicken stock'
    ],
    st: [
      'Heat the oven to 220°C. Rub the pork with the oil, salt and pepper and wrap the bone tips in foil.',
      'Melt the butter and cook the onion, celery and apple for 8 minutes. Mix with the bread cubes, sage and stock.',
      'Put the roast on a rack in a tin and pile the stuffing loosely into the centre. Roast for 20 minutes.',
      'Lower the oven to 160°C and roast for 100 minutes until the pork reaches 70°C. Rest for 20 minutes and carve between the bones.'
    ],
    tips: [
      'Ask the butcher to trim and tie the crown.',
      'Cover the stuffing with foil if it browns too much.',
      'Use a meat thermometer for the best result.'
    ],
    pair: ['Roast potatoes', 'Apple sauce', 'Green beans', 'Gravy'],
    store: 'Keeps in the fridge for 4 days. Serve cold or reheat in the oven.',
    nut: [941, 49, 13, 77, 1, 3, 920]
  },

  'membrillo': {
    d: 'A firm, ruby-coloured Spanish paste of quince and sugar, cooked slowly, set in a tin and served with cheese.',
    meta: 'Membrillo: a firm, ruby-coloured Spanish paste of quince and sugar, cooked slowly, set in a tin and served with cheese. Sixteen servings, setting 8 hours.',
    kw: ['membrillo', 'quince paste', 'membrillo recipe', 'spanish quince paste for cheese', 'homemade membrillo'],
    why: 'A quince paste is made for a cheese board, set out at Christmas and on other festive tables, where its sweet, perfumed flavour balances a salty cheese. Membrillo is the Spanish version, a firm paste of quince and sugar that is sliced into slabs and eaten with Manchego, though any hard cheese works.\n\nQuinces are hard, sour and astringent when raw. Long cooking transforms them, turning the flesh from pale cream to deep pink and finally ruby red as the pectin and sugars concentrate. Peel, core and chop the fruit, then simmer it in a little water until soft. Purée it until smooth, then return it to the pan with an equal weight of sugar.\n\n**Cook it over low heat for 90 minutes**, stirring often, until the paste is thick enough to leave a clear trail when you draw a spoon through. It spits, so wear oven gloves and keep a lid nearby. Pour into a lined tin, smooth the top and leave to set for 8 hours. Wrap it well; it keeps for months.',
    ing: [
      '1 kg quinces, peeled, cored and chopped',
      '500 ml water',
      '800 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Put the quinces and water in a pan, bring to a boil and simmer for 30 minutes until very soft.',
      'Purée until smooth, then return to the pan with the sugar and lemon juice.',
      'Cook over low heat for 90 minutes, stirring often, until the paste is very thick and deep red.',
      'Pour into a lined 20 cm square tin and smooth the top. Leave to set for 8 hours, then turn out and slice.'
    ],
    tips: [
      'Wear oven gloves; the hot paste spits.',
      'Stir from the bottom as the paste thickens.',
      'Wrap the set paste in baking paper and keep it cool.'
    ],
    pair: ['Manchego', 'Hard cheese', 'Almonds', 'Crackers'],
    store: 'Keeps wrapped in the fridge for 3 months.',
    nut: [240, 0, 60, 0, 1, 58, 5],
    rest: [480, 'Setting']
  },

  'pan-gravy': {
    d: 'A simple gravy made from roast pan drippings or butter, flour and stock, stirred smooth and seasoned with pepper.',
    meta: 'Pan gravy: a simple gravy made from pan drippings or butter, flour and stock, stirred smooth and seasoned with pepper. Six servings, cooked in 10 minutes.',
    kw: ['pan gravy', 'pan gravy recipe', 'gravy from pan drippings', 'simple roast gravy', 'homemade gravy with flour and stock'],
    why: 'Cook the flour for a full minute before the stock goes in. That is the quick instruction that makes the difference between a gravy that tastes of raw flour and one that tastes of roasted meat. The flour and fat are cooked together to a pale, nutty paste called a roux, and the colour of the roux sets the colour of the gravy.\n\nUse the fat and sticky brown bits left in the roasting tin, which are packed with flavour. Pour off all but a few spoonfuls of fat, put the tin over a low heat and whisk in the flour. Then add the hot stock a little at a time, whisking after each addition, scraping up the browned bits from the base.\n\n**Simmer the gravy for 5 minutes** until it thickens and coats a spoon. Season with salt and plenty of black pepper, and add a dash of Worcestershire sauce if it needs depth. If it is too thick, thin it with a little hot stock; if lumpy, pass it through a sieve. Serve it hot, in a jug.',
    ing: [
      '60 g pan drippings or butter',
      '30 g plain flour',
      '500 ml hot beef or chicken stock',
      '1 tsp Worcestershire sauce',
      '1/2 tsp ground black pepper',
      '1/4 tsp salt'
    ],
    st: [
      'Warm the drippings in the roasting tin or a pan over medium heat. Whisk in the flour and cook for 1 minute.',
      'Pour in the hot stock a little at a time, whisking, scraping up the browned bits.',
      'Add the Worcestershire sauce and simmer for 5 minutes until thick. Season with the pepper and salt.',
      'Strain if lumpy and serve hot.'
    ],
    tips: [
      'Add the stock gradually and whisk well.',
      'Use hot stock to avoid lumps.',
      'Taste before salting, as the stock may be salty.'
    ],
    pair: ['Roast chicken', 'Roast beef', 'Mashed potato', 'Yorkshire pudding'],
    store: 'Keeps in the fridge for 3 days. Reheat gently, adding stock.',
    nut: [114, 1, 5, 10, 0, 0, 380]
  },

  'red-eye-gravy': {
    d: 'A thin Southern gravy made by deglazing a ham pan with strong black coffee, served over country ham and biscuits.',
    meta: 'Red eye gravy: a thin Southern gravy made by deglazing a ham pan with strong black coffee, served over ham and biscuits. Four servings, cooked in 10 minutes.',
    kw: ['red eye gravy', 'red eye gravy recipe', 'country ham with red eye gravy', 'coffee gravy for ham', 'southern ham and coffee gravy'],
    why: 'What do you do with a ham pan and a cup of coffee? You make red eye gravy. It is one of the simplest sauces there is: the fat and brown bits left from frying country ham are loosened with strong black coffee, which dissolves the sticky browned layer and turns the drippings into a thin, savoury, slightly bitter sauce.\n\nIt does not thicken. Red eye gravy is meant to be thin, and the name comes from the reddish colour it takes on, with the fat floating on top. The coffee must be strong, brewed double strength, because a weak cup gives a flat sauce. A teaspoon of brown sugar rounds off the bitterness.\n\n**Fry the ham first in a hot, dry pan** for 3 minutes a side, then lift it out. Pour the coffee into the hot pan and scrape the base for a couple of minutes while it bubbles and reduces. Spoon the gravy over the ham and split biscuits or grits. The ham is already salty, so there is no need to season it.',
    ing: [
      '300 g country ham, 4 thin slices',
      '1 tbsp butter',
      '120 ml strong black coffee',
      '1 tsp dark brown sugar',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Melt the butter in a heavy frying pan over medium-high heat. Fry the ham for 3 minutes on each side until browned and the edges curl. Lift onto a plate.',
      'Pour the coffee into the hot pan and add the sugar and pepper. Scrape up all the browned bits and boil for 3 minutes until reduced by half.',
      'Pour the gravy over the ham and serve at once.'
    ],
    tips: [
      'Use strong coffee, double strength if possible.',
      'Scrape the pan well; the flavour is in the sticky bits.',
      'Do not add salt; the ham is salty.'
    ],
    pair: ['Buttermilk biscuits', 'Grits', 'Fried eggs', 'Fried apples'],
    store: 'Best eaten straight away.',
    nut: [118, 14, 2, 6, 0, 1, 900]
  },

  'cocktail-meatballs': {
    d: 'Small baked beef meatballs simmered in a sweet and tangy sauce of grape jelly and chilli sauce, kept warm for a party.',
    meta: 'Cocktail meatballs: small baked beef meatballs simmered in a sweet and tangy sauce of grape jelly and chilli sauce. Ten servings, cooked in 30 minutes.',
    kw: ['cocktail meatballs', 'grape jelly meatballs', 'party meatballs recipe', 'sweet and tangy cocktail meatballs', 'meatballs in jelly and chilli sauce'],
    why: 'The sauce smells sweet and sharp at once, a mix of grape jelly and chilli sauce that sounds odd and tastes like a barbecue sauce that has mellowed. Cocktail meatballs are an American party classic, served warm from a slow cooker with toothpicks, and they disappear within minutes of reaching the table.\n\nThe meatballs themselves are plain: beef mince mixed with breadcrumbs, egg, finely chopped onion and a little salt. Keep them small, around the size of a walnut, so they can be eaten in one bite. Baking is quicker and less messy than frying and gives an even brown colour. Roll them with wet hands so the meat does not stick.\n\n**Stir the jelly and chilli sauce over a low heat** until the jelly melts into a smooth, glossy sauce. Add the baked meatballs and simmer for 15 minutes, so they absorb some of it. Serve in a warm dish with cocktail sticks, and stir occasionally to keep the sauce from catching.',
    ing: [
      '600 g beef mince',
      '60 g breadcrumbs',
      '1 egg',
      '1/2 onion, about 60 g, finely grated',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '250 g grape jelly',
      '250 g chilli sauce'
    ],
    st: [
      'Heat the oven to 200°C. Mix the beef, breadcrumbs, egg, onion, salt and pepper and roll into about 40 small balls.',
      'Bake on a lined tray for 15 minutes until browned and cooked through.',
      'Heat the grape jelly and chilli sauce in a large pan over low heat, stirring until smooth.',
      'Add the meatballs and simmer for 15 minutes, stirring now and then, until glazed.'
    ],
    tips: [
      'Wet your hands to roll the meatballs.',
      'Keep them small so they are easy to eat.',
      'Keep warm in a slow cooker on low for a party.'
    ],
    pair: ['Cocktail sticks', 'Crusty rolls', 'Cheese board', 'Cold lager'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [194, 14, 12, 10, 1, 6, 330]
  },

  'bacon-wrapped-scallops': {
    d: 'Plump scallops wrapped in crisp bacon and baked until the scallops are just opaque and the bacon is browned.',
    meta: 'Bacon wrapped scallops: plump scallops wrapped in crisp bacon and baked until just opaque, with a squeeze of lemon. Four servings, cooked in 15 minutes.',
    kw: ['bacon wrapped scallops', 'bacon wrapped scallops recipe', 'baked bacon wrapped scallops', 'scallops wrapped in bacon appetizer', 'bacon scallop skewers'],
    why: 'Scallops, bacon, lemon and a very hot oven: four things, and the secret is in the order. Raw bacon takes much longer to crisp than a scallop takes to cook, so if you wrap them raw, the bacon is chewy by the time the scallops are rubbery. The fix is to part-cook the bacon first.\n\nBake the bacon rashers for 7 minutes at 200°C until they are cooked but still pliable. Cut them in half, wrap each half around a scallop, and secure with a cocktail stick. Pat the scallops very dry first; a wet scallop steams and will not brown. Large sea scallops are best, about 30 g each.\n\n**Bake for 8 more minutes**, until the scallops are opaque and just firm and the bacon is crisp at the edges. Do not overcook them; they go from tender to tough in a couple of minutes. A squeeze of lemon and a sprinkle of paprika finish the dish. Serve hot, on a platter, with a small dish of lemon wedges.',
    ing: [
      '400 g large sea scallops, about 12',
      '150 g streaky bacon rashers',
      '1 tbsp olive oil',
      '1/2 tsp smoked paprika',
      '1/4 tsp ground black pepper',
      '1 lemon'
    ],
    st: [
      'Heat the oven to 200°C. Lay the bacon on a lined tray and bake for 7 minutes until cooked but still pliable. Cool slightly and cut in half.',
      'Pat the scallops very dry and toss with the oil, paprika and pepper. Wrap a piece of bacon around each and secure with a cocktail stick.',
      'Bake on the tray for 8 minutes until the scallops are opaque and the bacon is crisp.',
      'Squeeze over the lemon and serve hot.'
    ],
    tips: [
      'Dry the scallops thoroughly before wrapping.',
      'Part-cook the bacon so it crisps in time.',
      'Remove the small side muscle from each scallop.'
    ],
    pair: ['Lemon wedges', 'Green salad', 'Sparkling wine', 'Crusty bread'],
    store: 'Best eaten straight away.',
    nut: [197, 24, 5, 9, 1, 0, 760]
  }
};
