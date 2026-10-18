'use strict';

/**
 * Volume fifty-five — cookies, cakes, quick breads and bakes, first part.
 *
 * Twenty-five bakes: almond cookies, almond crescents, an almond flour cake,
 * angel biscuits, apple bread, an apple bundt cake, apple pie bites, banana
 * chocolate chip bread, banana cookies and cupcakes, Biscoff cookies, a
 * blueberry coffee cake, Boston cream donuts, brown sugar shortbread, brownie
 * bites and brownie cookies, buttermilk pie and waffles, cakey brownies,
 * caramel blondies, a carrot cake loaf, cathead biscuits, cheesecake bars,
 * cheesecake cupcakes and cherry almond cookies. Waits of an hour or more are
 * declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'almond-cookies': {
    d: 'Crisp, sandy Chinese almond cookies made with butter and almond extract, each topped with a whole almond and baked for 15 minutes.',
    meta: 'Almond cookies with a crisp, sandy crumb and a whole almond on top, baked for 15 minutes. 24 cookies, ready in 30 minutes.',
    kw: ['almond cookies', 'chinese almond cookies', 'almond biscuits', 'crisp almond cookies', 'almond cookie recipe'],
    why: 'Crumbly, not chewy. That is the defining quality of a Chinese almond cookie, and it comes from the fat and the flour rather than from any special technique. Traditional recipes use lard, which gives a fine, sandy texture. Butter works well and tastes richer, but the dough is a little softer to handle.\n\nThe flavour is almond extract, used with a light hand. A teaspoon is enough to scent the whole batch, and more tastes of marzipan. Ground almonds replace some of the flour, which adds a nutty depth and a tender, short crumb. Rubbing the butter into the dry ingredients, rather than creaming, keeps the cookies crisp.\n\n**Press the dough into balls and flatten them lightly.** A whole almond goes in the centre of each one, pressed in just enough to stay put. Brush with beaten egg yolk to give the golden shine that makes these cookies look the way they do in a bakery.\n\nBake until the edges are pale gold, and no darker. The cookies are soft when they leave the oven and crisp as they cool on the tray. Store them in a tin with a tight lid to keep the crunch.',
    ing: [
      '200 g plain flour',
      '60 g ground almonds',
      '100 g caster sugar',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '150 g cold butter, cubed',
      '1 egg, beaten',
      '1 tsp almond extract',
      '20 g whole blanched almonds, 24 in all',
      '1 egg yolk, beaten, for brushing'
    ],
    st: [
      'Heat the oven to 180C and line 2 trays. Mix the flour, ground almonds, sugar, baking powder and salt.',
      'Rub in the butter until the mixture looks like fine crumbs. Stir in the whole egg and almond extract to form a dough.',
      'Roll into 24 balls and flatten lightly. Press a whole almond into the centre of each and brush with the egg yolk.',
      'Bake for 15 minutes until pale golden at the edges.',
      'Cool on the trays for 10 minutes, then move to a rack.'
    ],
    tips: [
      'Use almond extract sparingly.',
      'Take the cookies out while still pale.',
      'Store in a tin to keep them crisp.'
    ],
    pair: ['Green tea', 'Jasmine tea', 'Coffee', 'Fresh fruit'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [115, 2, 11, 7, 1, 4, 40]
  },

  'almond-crescent-cookies': {
    untimed: ['cooling'],
    d: 'Buttery almond crescents shaped by hand, baked for 15 minutes and rolled twice in icing sugar while still warm.',
    meta: 'Almond crescent cookies, buttery and tender, rolled in icing sugar. 30 cookies, baked for 15 minutes, ready in 1 hour 15 minutes.',
    kw: ['almond crescent cookies', 'almond crescents', 'vanillekipferl style cookies', 'butter almond crescents', 'christmas crescent cookies'],
    why: 'This is what to bake in the first cold week of December, when the shops are playing carols and the kitchen needs something small and sweet for the tin. Almond crescents belong to the Central European tradition of vanilla crescents, a delicate butter cookie that dissolves in the mouth.\n\nThe dough is short, with a high proportion of butter to flour and a generous amount of ground almonds. There is no egg, which is why the cookies are so tender, and also why the dough is fragile. Chill it for 30 minutes before shaping, or it will stick to your hands and lose its shape in the oven.\n\n**Roll into a small log and bend into a crescent.** Pieces about the size of a walnut, rolled under the palm into a short sausage with tapered ends and curved gently, bake into the classic shape. Place them on a lined tray with a little room between them.\n\nBake until the bottoms are pale gold and the tops are still pale, then dust them with icing sugar while they are warm so the first layer melts in. Wait 10 minutes and roll them a second time in more sugar once cool for a thick, snowy coat.',
    ing: [
      '200 g cold butter, cubed',
      '80 g icing sugar, plus 80 g for rolling',
      '1 tsp vanilla extract',
      '250 g plain flour',
      '100 g ground almonds',
      '1/4 tsp salt'
    ],
    st: [
      'Beat the butter and 80 g of the icing sugar for 2 minutes until pale. Beat in the vanilla.',
      'Stir in the flour, ground almonds and salt to form a soft dough. Chill for 30 minutes.',
      'Heat the oven to 170C and line 2 trays. Shape pieces of dough into 30 small crescents.',
      'Bake for 15 minutes until the bottoms are pale gold.',
      'Roll the warm cookies in half the remaining icing sugar. Cool, then roll again in the rest.'
    ],
    tips: [
      'Chill the dough before shaping.',
      'Roll in sugar twice for a snowy coat.',
      'Handle the baked cookies gently: they are fragile.'
    ],
    pair: ['Hot chocolate', 'Mulled wine', 'Black tea', 'Coffee'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [111, 2, 10, 7, 1, 3, 20]
  },

  'almond-flour-cake': {
    d: 'A moist, tender cake made with ground almonds in place of most of the flour, baked for 35 minutes with lemon zest and a dusting of icing sugar.',
    meta: 'Almond flour cake, moist and tender with lemon zest, baked for 35 minutes. Ten servings, ready in 1 hour 5 minutes.',
    kw: ['almond flour cake', 'ground almond cake', 'almond cake with lemon', 'moist almond cake', 'almond sponge cake'],
    why: 'Almonds are the flour here, not an addition to it. A cake made from ground almonds has a tight, moist crumb and a deep, nutty flavour that plain flour cannot match, and it stays soft for days. It is also very forgiving, since there is little gluten to toughen.\n\nThe structure comes from eggs. Four of them, separated, with the whites whipped to soft peaks and folded in at the end to lighten the batter. The yolks are beaten with the sugar and butter until pale and thick. This takes a few extra minutes, but it gives a cake that rises properly rather than a dense, heavy slab.\n\n**Do not overbeat after the almonds go in.** Fold the ground almonds, baking powder and salt in gently, then fold in the whites in two additions. Overmixing knocks out the air and flattens the cake.\n\nBake in a lined 20 cm tin at 170C until a skewer comes out clean and the top is golden. Cool in the tin for 15 minutes before turning out, because the crumb is delicate when warm. A dusting of icing sugar and a spoonful of whipped cream or fresh berries is all it needs.',
    ing: [
      '100 g butter, softened',
      '150 g caster sugar',
      '4 eggs, separated',
      '1 lemon, zested',
      '1 tsp almond extract',
      '200 g ground almonds',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '2 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 170C. Grease and line a 20 cm round tin.',
      'Beat the butter and sugar for 3 minutes until pale. Beat in the egg yolks one at a time, then the lemon zest and almond extract.',
      'Fold in the ground almonds, baking powder and salt.',
      'Whisk the egg whites to soft peaks. Fold into the batter in 2 additions.',
      'Pour into the tin and bake for 35 minutes until golden and a skewer comes out clean. Cool for 15 minutes, turn out and dust with icing sugar.'
    ],
    tips: [
      'Whip the egg whites to soft peaks only.',
      'Fold gently to keep the air in.',
      'Let the cake cool before turning it out.'
    ],
    pair: ['Fresh berries', 'Whipped cream', 'Coffee', 'Dessert wine'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [300, 7, 23, 20, 3, 19, 130]
  },

  'angel-biscuits': {
    d: 'Southern biscuits made with yeast as well as baking powder for a fluffy, yeasty rise, baked at 220C for 15 minutes.',
    meta: 'Angel biscuits with yeast, buttermilk and butter, baked for 15 minutes. 12 biscuits, ready in 35 minutes.',
    kw: ['angel biscuits', 'yeast biscuits', 'southern angel biscuits', 'fluffy buttermilk biscuits', 'angel biscuit recipe'],
    why: 'Why are angel biscuits so tall? Because they have three raising agents working together: yeast, baking powder and bicarbonate of soda. The yeast adds a faint bread-like flavour and a soft, pillowy crumb, and the chemical leavening gives the rise in the oven. Southern cooks sometimes call them the insurance policy of biscuit making.\n\nThe dough is cold, rather than warm, which is the opposite of bread. Cold butter, cut into the flour in pea-sized pieces, melts in the oven and creates steam pockets that open the layers. Warm hands and warm fat give a flat, cakey result. Use buttermilk straight from the fridge, and work the dough as little as you can.\n\n**Fold the dough in thirds like a letter, twice, before cutting.** This builds the layers that peel apart when the biscuits are split. Press out to 2.5 cm thick and cut straight down with a floured cutter, without twisting, which seals the edges and stops the rise.\n\nPlace the biscuits close together on the tray so they support each other as they climb, brush with melted butter, and bake in a hot oven until golden. Serve warm, split, with butter and jam or under sausage gravy.',
    ing: [
      '7 g fast action yeast',
      '2 tbsp warm water',
      '400 g plain flour',
      '1 tbsp caster sugar',
      '1 tbsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp salt',
      '120 g cold butter, cubed',
      '250 ml cold buttermilk',
      '30 g butter, melted'
    ],
    st: [
      'Stir the yeast into the warm water and leave for 5 minutes until foamy.',
      'Mix the flour, sugar, baking powder, bicarbonate of soda and salt. Rub in the cold butter until the pieces are pea-sized.',
      'Stir in the yeast mixture and buttermilk to make a shaggy dough. Rest for 10 minutes.',
      'Heat the oven to 220C. Pat the dough to 2.5 cm, fold in thirds twice, then pat out again to 2.5 cm. Cut 12 rounds without twisting the cutter.',
      'Place close together on a lined tray, brush with the melted butter and bake for 15 minutes until golden.'
    ],
    tips: [
      'Keep the butter and buttermilk cold.',
      'Do not twist the cutter.',
      'Bake the biscuits close together for a better rise.'
    ],
    pair: ['Sausage gravy', 'Fried chicken', 'Butter and jam', 'Honey'],
    store: 'Best the day they are made. Keeps for 2 days and reheats well.',
    nut: [227, 4, 28, 11, 1, 2, 400]
  },

  'apple-bread': {
    d: 'A moist spiced quick bread with chunks of fresh apple, baked for 1 hour and finished with a cinnamon sugar crust.',
    meta: 'Apple bread with fresh apple chunks and cinnamon, baked for 60 minutes. Ten servings, ready in 1 hour 35 minutes.',
    kw: ['apple bread', 'fresh apple quick bread', 'cinnamon apple loaf', 'apple loaf cake', 'homemade apple bread'],
    why: 'Most home versions come out dense and damp in the centre, and the fix is to cut the apple small and pat it dry. Large chunks release water into the batter as they bake and leave soggy pockets, while small dice of about 1 cm soften evenly and give the loaf a fruity crumb.\n\nChoose a firm apple that keeps its shape, such as Braeburn or Granny Smith, and peel it. Toss the diced fruit with a spoonful of the flour from the recipe before folding it in, which helps keep the pieces from sinking to the bottom. The batter itself is a simple oil and brown sugar mix, with buttermilk for tenderness and cinnamon and nutmeg for warmth.\n\n**Mix the wet and dry ingredients separately and combine at the last moment.** Stir only until you can no longer see dry flour. A lumpy batter is correct. Beat it smooth and the loaf comes out tough and tunnelled.\n\nThe cinnamon sugar on top bakes into a crisp, sparkling crust. Bake until a skewer comes out clean, which can take up to an hour and 10 minutes depending on the tin. Cover with foil if the top is darkening before the middle is done, and cool in the tin for 15 minutes.',
    ing: [
      '250 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '1/2 tsp salt',
      '2 eggs',
      '150 g light brown sugar',
      '120 ml vegetable oil',
      '120 ml buttermilk',
      '1 tsp vanilla extract',
      '300 g apples, peeled and diced',
      '1 tbsp caster sugar',
      '1/2 tsp ground cinnamon, for the top'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 900 g loaf tin.',
      'Mix the flour, baking powder, bicarbonate of soda, 1 tsp cinnamon, nutmeg and salt.',
      'Whisk the eggs, brown sugar, oil, buttermilk and vanilla. Fold into the dry ingredients until just combined, then fold in the apple.',
      'Pour into the tin. Mix the caster sugar and 1/2 tsp cinnamon and scatter over the top.',
      'Bake for 1 hour until a skewer comes out clean, covering with foil if the top browns early. Cool in the tin for 15 minutes.'
    ],
    tips: [
      'Dice the apple small and pat it dry.',
      'Mix the batter only until combined.',
      'Cover with foil if the top darkens too early.'
    ],
    pair: ['Butter', 'Coffee', 'Cheddar', 'Hot tea'],
    store: 'Keeps in an airtight container for 3 days, or frozen for 2 months.',
    nut: [284, 4, 40, 12, 2, 20, 260]
  },

  'apple-bundt-cake': {
    d: 'A tall, spiced bundt cake with grated apple and walnuts, baked for 1 hour and finished with a caramel glaze.',
    meta: 'Apple bundt cake with cinnamon, walnuts and a caramel glaze, baked for 60 minutes. Twelve servings, ready in 1 hour 40 minutes.',
    kw: ['apple bundt cake', 'cinnamon apple bundt cake', 'apple cake with caramel glaze', 'fresh apple bundt', 'apple walnut bundt cake'],
    why: 'The smell of cinnamon and warm apples drifting from the oven is the first sign this one is going well. A bundt cake is built for exactly that: a tall, moist crumb with a deep fluted shape that holds a glaze beautifully, and apples and warm spices are a classic match for it.\n\nGrate half of the apples and dice the other half. The grated fruit melts into the batter and keeps it moist, while the diced pieces give soft, jammy bites. Peel them first, as skin turns tough in a cake. A cooking apple holds its shape and adds sharpness, but any firm eating apple will do.\n\n**Grease the tin like you mean it.** Bundt tins have a lot of edges for a cake to cling to. Brush every groove with soft butter, dust with flour and tap out the excess, or use a baking spray that contains flour. Cool the cake in the tin for 15 minutes, then turn it out while still warm.\n\nThe glaze is butter, brown sugar and cream boiled for 2 minutes. Pour it over the cooled cake and let it run into the ridges. Walnuts are optional but their bitterness is a good foil for the sweet glaze.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '2 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '3 eggs',
      '250 g light brown sugar',
      '200 ml vegetable oil',
      '1 tsp vanilla extract',
      '600 g apples, peeled, half grated and half diced',
      '80 g walnuts, chopped',
      '50 g butter, for the glaze',
      '80 g light brown sugar, for the glaze',
      '4 tbsp double cream, for the glaze'
    ],
    st: [
      'Heat the oven to 170C. Grease and flour a 2.5 litre bundt tin thoroughly.',
      'Mix the flour, baking powder, bicarbonate of soda, cinnamon, nutmeg and salt.',
      'Whisk the eggs, 250 g sugar, oil and vanilla. Fold into the dry ingredients, then fold in the apples and walnuts.',
      'Spoon into the tin and bake for 1 hour until a skewer comes out clean. Cool in the tin for 15 minutes, then turn out.',
      'Boil the glaze butter, sugar and cream for 2 minutes. Pour over the cooled cake.'
    ],
    tips: [
      'Grease every groove of the tin.',
      'Use both grated and diced apple.',
      'Cool for 15 minutes before turning out.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Hot coffee', 'Cheddar'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [474, 5, 55, 26, 3, 32, 260]
  },

  'apple-pie-bites': {
    d: 'Mini apple pies baked in a muffin tin from shortcrust pastry, a cinnamon apple filling and a lattice of pastry strips, ready in 40 minutes.',
    meta: 'Apple pie bites with cinnamon apples in mini pastry cases, baked for 15 minutes. 12 servings, ready in 40 minutes.',
    kw: ['apple pie bites', 'mini apple pies', 'apple pie in a muffin tin', 'bite sized apple pies', 'individual apple pies'],
    why: 'It looks like a full apple pie and eats like a snack. Apple pie bites are made in a mini muffin tin from rounds of ready-made pastry, which means you can have two dozen perfectly proportioned mouthfuls in less than an hour with no slicing or serving problems.\n\nThe filling is diced apple cooked briefly in butter, sugar and cinnamon until it just starts to soften, with a spoonful of cornflour to bind the juices. Cook it for 5 minutes only. The apples will finish in the oven, and a filling that is cooked down fully will turn to sauce and lose the bite of the fruit. Let it cool before it goes anywhere near the pastry.\n\n**Press the pastry into the tin, not too thin.** Cut rounds slightly larger than the holes, ease them in, and press against the sides. Thin pastry tears under the weight of the filling. Fill each case almost to the top, because the apples shrink as they bake.\n\nTop with a small round or a few strips of pastry in a lattice, brush with egg and sprinkle with sugar. Bake until deep gold. Run a knife around the edge of each one while still warm, and lift out after 5 minutes.',
    ing: [
      '500 g ready-made shortcrust pastry',
      '3 apples, peeled and diced, about 450 g',
      '30 g butter',
      '50 g light brown sugar',
      '1 tsp ground cinnamon',
      '1 tbsp cornflour',
      '1 tbsp lemon juice',
      '1 egg, beaten',
      '1 tbsp caster sugar'
    ],
    st: [
      'Heat the oven to 190C. Melt the butter in a pan, add the apples, brown sugar, cinnamon and lemon juice and cook for 5 minutes. Stir in the cornflour for 1 minute and cool.',
      'Roll out the pastry. Cut 12 rounds to line a 12-hole muffin tin and press them in. Cut the remaining pastry into thin strips.',
      'Fill each case with the apple mixture. Lay 2 strips over each in a cross.',
      'Brush the pastry with the egg and sprinkle with the caster sugar.',
      'Bake for 15 minutes until golden. Cool in the tin for 5 minutes, run a knife around each and lift out.'
    ],
    tips: [
      'Cool the filling before it goes in the pastry.',
      'Fill almost to the top as the apples shrink.',
      'Loosen each bite with a knife while warm.'
    ],
    pair: ['Vanilla ice cream', 'Custard', 'Hot tea', 'Caramel sauce'],
    store: 'Keeps in an airtight tin for 2 days. Warm for 5 minutes in a low oven.',
    nut: [254, 3, 29, 14, 2, 10, 260]
  },

  'banana-chocolate-chip-bread': {
    d: 'A moist banana loaf studded with chocolate chips and baked for 1 hour until the top cracks and turns deep gold.',
    meta: 'Banana chocolate chip bread, moist and golden, baked for 60 minutes. Ten servings, ready in 1 hour 30 minutes.',
    kw: ['banana chocolate chip bread', 'chocolate chip banana loaf', 'moist banana bread with chocolate', 'banana bread recipe', 'banana loaf with chips'],
    why: 'A Sunday loaf for a table of six, and better on Monday. Banana bread is the classic answer to a bowl of blackening fruit, and the chocolate chips turn a plain loaf into something that disappears by lunchtime.\n\nThe ripeness of the bananas matters more than anything else. Use fruit that is mostly black on the skin, soft and heavily scented, because the sugars are fully developed and the flesh mashes into a loose puree. Pale bananas make a bland, dry loaf, and no amount of extra sugar fixes that. Weigh them after peeling: 350 g is about three medium bananas.\n\n**Toss the chocolate chips in a spoonful of flour first.** This helps keep them suspended in the batter rather than sinking to the bottom of the tin in a layer. Fold them in last, with as few strokes as you can.\n\nBake until a skewer comes out with a few moist crumbs, not clean and not wet. The top will crack along the middle, which is normal, and shows the loaf rose well. Cool in the tin for 15 minutes before lifting out onto a rack. The loaf slices more cleanly once it has fully cooled.',
    ing: [
      '350 g ripe bananas, peeled and mashed',
      '100 g butter, melted',
      '150 g light brown sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '250 g plain flour',
      '1 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '1 tsp ground cinnamon',
      '150 g dark chocolate chips'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 900 g loaf tin.',
      'Mix the mashed bananas, melted butter, sugar, eggs and vanilla in a large bowl.',
      'Stir in the flour, bicarbonate of soda, salt and cinnamon until just combined. Toss the chocolate chips in a spoonful of flour and fold in.',
      'Pour into the tin and bake for 1 hour until a skewer comes out with a few moist crumbs.',
      'Cool in the tin for 15 minutes, then lift onto a rack.'
    ],
    tips: [
      'Use very ripe bananas.',
      'Toss the chips in flour to stop them sinking.',
      'Cool before slicing for neat slices.'
    ],
    pair: ['Butter', 'Coffee', 'Milk', 'Peanut butter'],
    store: 'Keeps in an airtight container for 3 days, or frozen for 2 months.',
    nut: [359, 5, 51, 15, 3, 26, 260]
  },

  'banana-cookies': {
    d: 'Soft, cake-like banana cookies with cinnamon and walnuts, baked for 15 minutes and finished with a thin vanilla glaze.',
    meta: 'Banana cookies, soft and cake-like with cinnamon, baked for 15 minutes. 18 cookies, ready in 50 minutes.',
    kw: ['banana cookies', 'soft banana cookies', 'banana walnut cookies', 'cake like banana cookies', 'banana cookie recipe'],
    why: 'Mash one banana, not two. That is the single most useful instruction here, because banana is wet, and too much of it turns the dough into a batter that spreads into thin, greasy puddles on the tray. One large ripe banana gives you the flavour without flooding the mixture.\n\nThese are soft, almost cake-like cookies, closer to a muffin top than a crisp biscuit. The softness comes from a higher ratio of flour to fat than in a chocolate chip dough, and from the moisture in the fruit. They puff up in the oven and set with a tender, springy crumb, and are not meant to be chewy.\n\n**Chill the dough for 20 minutes before baking.** Banana dough is soft and sticky, and a short rest in the fridge firms the butter so the cookies hold their shape. Drop them in mounds on the tray and leave 4 cm between each one.\n\nBake until the edges are lightly golden and the tops spring back when touched. A thin glaze of icing sugar, milk and vanilla added once the cookies are cool gives a sweet finish. Walnuts add texture, but chocolate chips or oats work just as well.',
    ing: [
      '115 g butter, softened',
      '100 g light brown sugar',
      '1 egg',
      '1 large ripe banana, mashed, about 120 g',
      '1 tsp vanilla extract',
      '220 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt',
      '60 g walnuts, chopped',
      '100 g icing sugar',
      '2 tbsp milk'
    ],
    st: [
      'Beat the butter and sugar for 2 minutes until fluffy. Beat in the egg, banana and vanilla.',
      'Stir in the flour, baking powder, cinnamon and salt, then fold in the walnuts. Chill the dough for 20 minutes.',
      'Heat the oven to 180C and line 2 trays. Drop 18 mounds of dough onto the trays, 4 cm apart.',
      'Bake for 15 minutes until lightly golden and springy. Cool on the trays for 5 minutes, then move to a rack.',
      'Whisk the icing sugar with the milk and drizzle over the cooled cookies.'
    ],
    tips: [
      'Use only one mashed banana.',
      'Chill the dough briefly before baking.',
      'Glaze the cookies only when cool.'
    ],
    pair: ['Milk', 'Coffee', 'Peanut butter', 'Hot tea'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [172, 2, 23, 8, 1, 12, 70]
  },

  'banana-cupcakes': {
    untimed: ['cooling completely'],
    d: 'Soft banana cupcakes baked for 22 minutes and topped with a swirl of cream cheese frosting and a sprinkle of cinnamon.',
    meta: 'Banana cupcakes with cream cheese frosting, baked for 22 minutes. Twelve servings, ready in 45 minutes.',
    kw: ['banana cupcakes', 'banana cupcakes with cream cheese frosting', 'moist banana cupcakes', 'banana cupcake recipe', 'banana cake cupcakes'],
    why: 'Why do banana cupcakes taste so much better than banana cake? Because the small size means more of the golden, caramelised top and edge in every bite, and a proportionally larger amount of frosting. Banana and cream cheese is one of the best pairings in baking, with the tang of the frosting balancing the sweet, mellow fruit.\n\nThe batter uses oil rather than butter for a moist crumb that stays soft for days, with a little brown sugar for depth. Two ripe bananas, mashed, provide the flavour and most of the moisture. Add them last, once the dry ingredients are in, and fold gently so the crumb stays light.\n\n**Fill the paper cases two thirds full and no more.** Banana batter is heavy and rises quickly, so overfilled cases dome too high and crack or collapse as they cool. An ice cream scoop gives even portions.\n\nBake until a skewer comes out clean and the tops spring back. Cool completely on a rack before frosting, or the cream cheese melts into a slick. Beat the frosting from soft butter, cold cream cheese, icing sugar and vanilla, and pipe or swirl it on with a knife.',
    ing: [
      '250 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt',
      '2 eggs',
      '150 g light brown sugar',
      '100 ml vegetable oil',
      '2 ripe bananas, mashed, about 240 g',
      '1 tsp vanilla extract',
      '60 ml milk',
      '100 g butter, softened',
      '150 g cream cheese, cold',
      '200 g icing sugar'
    ],
    st: [
      'Heat the oven to 180C and line a 12-hole muffin tin with paper cases.',
      'Mix the flour, baking powder, bicarbonate of soda, cinnamon and salt.',
      'Whisk the eggs, brown sugar and oil until combined. Stir in the bananas, vanilla and milk, then fold in the dry ingredients until just mixed.',
      'Divide between the cases, filling two thirds full. Bake for 22 minutes until a skewer comes out clean. Cool completely on a rack.',
      'Beat the butter, cream cheese and icing sugar until smooth and swirl onto the cupcakes.'
    ],
    tips: [
      'Fill the cases only two thirds full.',
      'Frost only when completely cool.',
      'Use cold cream cheese for a firm frosting.'
    ],
    pair: ['Coffee', 'Milk', 'Hot tea', 'Fresh berries'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [396, 4, 50, 20, 1, 32, 200]
  },

  'biscoff-cookies': {
    d: 'Chewy brown sugar cookies made with Biscoff spread and crushed spiced biscuits, baked for 12 minutes.',
    meta: 'Biscoff cookies with spiced biscuit spread and crumbs, chewy and soft, baked for 12 minutes. 20 cookies, ready in 30 minutes.',
    kw: ['biscoff cookies', 'biscoff spread cookies', 'lotus biscoff cookies', 'spiced biscuit cookies', 'cookie butter cookies'],
    why: 'Soft in the middle, crisp at the edges, and spiced like a speculoos biscuit. Biscoff cookies use a spread made from caramelised spiced biscuits, which is already a mix of sugar, fat and cinnamon, so the dough gets flavour and softness without needing much else.\n\nThe spread acts as both flavour and fat. Beat it with softened butter and brown sugar, and the result is a smooth, caramel-coloured dough with a distinctive warm, toasty taste. Crushed biscuits folded in at the end give crunchy flecks and a hint of the original biscuit. Do not crush them to dust: leave some pieces the size of a fingernail.\n\n**Underbake slightly.** The cookies look pale and underdone when the 12 minutes is up, with soft centres that set as they cool on the tray. If they look done in the oven, they will be hard and dry once cool. Pull them while the edges are just turning gold.\n\nA small spoonful of extra spread pressed into the middle of each ball before baking creates a molten centre. Let the cookies cool on the tray for 10 minutes before moving them, since they are fragile when hot.',
    ing: [
      '115 g butter, softened',
      '120 g Biscoff spread',
      '100 g light brown sugar',
      '50 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '240 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '60 g Biscoff biscuits, roughly crushed'
    ],
    st: [
      'Heat the oven to 180C and line 2 trays.',
      'Beat the butter, Biscoff spread and both sugars for 2 minutes until smooth. Beat in the egg and vanilla.',
      'Stir in the flour, bicarbonate of soda and salt, then fold in the crushed biscuits.',
      'Roll into 20 balls and place on the trays, 5 cm apart. Flatten slightly.',
      'Bake for 12 minutes until the edges are just golden. Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Leave some biscuit pieces large for crunch.',
      'Take the cookies out while the centres look soft.',
      'Cool on the tray before moving them.'
    ],
    pair: ['Hot chocolate', 'Milk', 'Coffee', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [168, 2, 22, 8, 0, 11, 80]
  },

  'blueberry-coffee-cake': {
    d: 'A tender soured cream cake filled with fresh blueberries and topped with a thick cinnamon crumb, baked for 45 minutes.',
    meta: 'Blueberry coffee cake with a cinnamon crumb topping, baked for 45 minutes. Nine servings, ready in 1 hour 25 minutes.',
    kw: ['blueberry coffee cake', 'blueberry crumb cake', 'blueberry streusel cake', 'blueberry cake with crumb topping', 'blueberry coffee cake recipe'],
    why: 'A weekend dish for a table of nine, and the best reason to buy a punnet of blueberries before they go soft. A coffee cake does not contain coffee. It is named for being eaten with it, a tender, buttery square under a generous crumble of sugar and cinnamon.\n\nThe cake batter uses soured cream, which keeps the crumb moist and gives a subtle tang. Fold in the blueberries last, tossed in a spoonful of flour so they stay distributed. Frozen berries work too, used straight from the freezer, not thawed, or they will bleed purple through the batter.\n\n**Make the crumb topping thick and chunky.** Rub cold butter into flour, brown sugar and cinnamon until it forms clumps the size of peas, then squeeze it with your hands so that some of it sticks into larger lumps. Scatter it right to the corners, and it bakes into a crisp, sandy layer that makes the cake.\n\nBake in a 20 cm square tin until a skewer comes out clean and the topping is deep gold. Cool for 20 minutes before cutting, so that the berries set. Serve warm, with coffee, tea or a cold glass of milk.',
    ing: [
      '250 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '115 g butter, softened',
      '150 g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '200 g soured cream',
      '200 g blueberries',
      '80 g plain flour, for the crumb',
      '60 g light brown sugar',
      '1 tsp ground cinnamon',
      '50 g cold butter, cubed'
    ],
    st: [
      'Heat the oven to 180C. Grease and line a 20 cm square tin.',
      'Rub the cold butter into the 80 g flour, brown sugar and cinnamon until clumpy. Set aside.',
      'Beat the soft butter and caster sugar for 3 minutes. Beat in the eggs and vanilla, then fold in the soured cream and the dry ingredients.',
      'Toss the blueberries in a spoonful of flour and fold in. Spread the batter in the tin and scatter over the crumb.',
      'Bake for 45 minutes until a skewer comes out clean. Cool for 20 minutes before cutting.'
    ],
    tips: [
      'Do not thaw frozen berries.',
      'Squeeze the crumb into big clumps.',
      'Cool before cutting for clean squares.'
    ],
    pair: ['Coffee', 'Hot tea', 'Cold milk', 'Whipped cream'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [437, 6, 56, 21, 2, 27, 210]
  },

  'boston-cream-donuts': {
    untimed: ['chilling the custard', 'cooling the doughnuts'],
    d: 'Baked donuts filled with vanilla custard and topped with a dark chocolate glaze, baked for 12 minutes instead of fried.',
    meta: 'Boston cream donuts, baked and filled with vanilla custard under chocolate glaze. 12 donuts, baked for 12 minutes.',
    kw: ['boston cream donuts', 'baked boston cream donuts', 'custard filled donuts', 'chocolate glazed donuts with custard', 'boston cream doughnut recipe'],
    why: 'The name comes from the Boston cream pie, a layer cake filled with vanilla custard and topped with chocolate ganache, and the donut is a hand-held version of the same idea. These are baked in a donut pan rather than fried, which makes the process easier and tidier, and the cake-style batter is tender and light.\n\nThe custard is the heart of the recipe, a vanilla pastry cream made from milk, egg yolks, sugar and cornflour. Whisk it constantly over a medium heat for 4 minutes until it thickens and a bubble pops on the surface. Strain it into a bowl, press cling film on the surface to stop a skin forming, and chill it until cold. A warm custard will melt the donuts.\n\n**Fill the donuts from the side.** Use a piping bag with a long nozzle, push it into the side of each cooled donut, and squeeze gently until it feels heavy. Too much and the filling bursts out, too little and the donut is a disappointment.\n\nThe glaze is just chocolate melted with warm cream and butter. Dip the top of each filled donut in the glaze and let it set for 10 minutes. Eat the same day, as the custard softens the donut over time.',
    ing: [
      '250 g plain flour',
      '100 g caster sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1/4 tsp nutmeg',
      '2 eggs',
      '180 ml milk',
      '50 g butter, melted',
      '1 tsp vanilla extract',
      '300 ml milk, for the custard',
      '3 egg yolks',
      '60 g caster sugar',
      '25 g cornflour',
      '1 tsp vanilla extract',
      '120 g dark chocolate, chopped',
      '80 ml double cream',
      '15 g butter'
    ],
    st: [
      'Bring the 300 ml milk to a simmer. Whisk the yolks, 60 g sugar and cornflour, pour in the hot milk, return to the pan and whisk over medium heat for 4 minutes until thick. Strain, add the vanilla, cover the surface and chill until cold.',
      'Heat the oven to 180C and grease a 12-hole donut pan. Mix the flour, 100 g sugar, baking powder, salt and nutmeg.',
      'Whisk the eggs, 180 ml milk, melted butter and vanilla. Fold into the dry ingredients and spoon into the pan.',
      'Bake for 12 minutes until a skewer comes out clean. Cool completely on a rack.',
      'Pipe the custard into the side of each donut. Heat the cream, pour over the chocolate with the butter, stir until smooth and dip the donut tops.'
    ],
    tips: [
      'Chill the custard until completely cold.',
      'Fill the donuts through the side.',
      'Eat the same day for the best texture.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Milk', 'Fresh strawberries'],
    store: 'Best the day they are made. Keeps for 1 day in the fridge.',
    nut: [314, 7, 40, 14, 2, 21, 230]
  },

  'brown-sugar-shortbread': {
    d: 'Buttery shortbread fingers made with light brown sugar for a caramel flavour, baked for 25 minutes at 150C.',
    meta: 'Brown sugar shortbread with a caramel flavour, baked for 25 minutes. 16 fingers, ready in 40 minutes.',
    kw: ['brown sugar shortbread', 'caramel shortbread fingers', 'scottish brown sugar shortbread', 'butter shortbread', 'shortbread with brown sugar'],
    why: 'Shortbread has three ingredients: butter, sugar and flour. The Scottish tradition is strict about that, and it works because the three, in the right proportions, produce a pale, crumbly biscuit that tastes intensely of butter. Use brown sugar in place of white, and the flavour moves towards caramel and toffee.\n\nThe golden ratio is one part sugar, two parts butter and three parts flour by weight. Beat the butter and sugar only until combined, not until pale and fluffy, because incorporating air makes the shortbread puff and then collapse. A little rice flour or cornflour in place of some of the plain flour gives a sandier, more tender bite.\n\n**Prick the dough with a fork and bake low.** At 150C the biscuits dry out and colour slowly, so they turn golden at the edges while staying pale in the middle. A hotter oven browns the top before the centre is cooked and gives a hard, greasy biscuit.\n\nCut the shortbread into fingers while it is still warm, because it breaks when cold. Leave it to cool in the tin, then sprinkle with a little caster sugar. Store it in a tin and eat it with tea.',
    ing: [
      '225 g cold butter, cubed',
      '100 g light brown sugar',
      '1/4 tsp salt',
      '250 g plain flour',
      '75 g cornflour',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Heat the oven to 150C. Line a 20 cm square tin with baking paper.',
      'Mix the butter, brown sugar and salt until just combined. Add the flour and cornflour and press together into a dough.',
      'Press the dough evenly into the tin. Prick all over with a fork.',
      'Bake for 25 minutes until pale gold at the edges.',
      'Cut into 16 fingers while warm, sprinkle with the caster sugar and cool in the tin.'
    ],
    tips: [
      'Do not cream the butter and sugar until fluffy.',
      'Bake low and slow.',
      'Cut while warm.'
    ],
    pair: ['Hot tea', 'Coffee', 'Fresh strawberries', 'Cheddar'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [208, 2, 23, 12, 1, 7, 40]
  },

  'brownie-bites': {
    d: 'Mini fudgy brownies baked in a mini muffin tin for 14 minutes, with a crackled top and a soft centre.',
    meta: 'Brownie bites, fudgy mini brownies baked in a muffin tin for 14 minutes. 24 bites, ready in 30 minutes.',
    kw: ['brownie bites', 'mini brownies', 'fudgy brownie bites', 'brownie bites in mini muffin tin', 'bite sized brownies'],
    why: 'Why make brownies in a mini muffin tin? Because every piece has a crisp edge and a soft middle, the two best parts of a brownie, and none of the cutting. A tray of brownie bites also disappears at a party in a way that a tray of squares never does.\n\nThe batter is a classic fudgy mix: melted butter and chocolate, sugar, eggs and a small amount of flour. Whisk the eggs and sugar vigorously for a full 2 minutes before adding the chocolate, since this is what creates the shiny, crackled crust on the surface. A brownie without that crust usually means the sugar was not dissolved.\n\n**Grease the tin well, even if it is non-stick.** The brownies are sticky, and the small holes are hard to reach once the bites are baked. Brush each cup with soft butter, or use cases. Fill each hole three quarters full with a spoon or a piping bag.\n\nBake for 14 minutes. A skewer should come out with a few damp crumbs, not clean. Cool the bites in the tin for 10 minutes, then run a knife around each one and lift them out. A topping of chocolate ganache or a pinch of sea salt makes them look special.',
    ing: [
      '115 g butter',
      '150 g dark chocolate, chopped',
      '150 g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '70 g plain flour',
      '20 g cocoa powder',
      '1/4 tsp salt',
      '1/4 tsp flaky sea salt, for the top'
    ],
    st: [
      'Heat the oven to 175C and grease a 24-hole mini muffin tin.',
      'Melt the butter and chocolate together, stirring until smooth. Cool for 5 minutes.',
      'Whisk the sugar, eggs and vanilla for 2 minutes until pale and thick. Stir in the chocolate mixture.',
      'Fold in the flour, cocoa and salt. Spoon into the tin, filling each hole three quarters full.',
      'Bake for 14 minutes. Cool in the tin for 10 minutes, then lift out and sprinkle with the flaky salt.'
    ],
    tips: [
      'Whisk the eggs and sugar well for a crackled top.',
      'Grease the tin generously.',
      'Pull them out while the centres are still soft.'
    ],
    pair: ['Vanilla ice cream', 'Coffee', 'Cold milk', 'Fresh raspberries'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [119, 1, 13, 7, 1, 9, 60]
  },

  'brownie-cookies': {
    d: 'Fudgy chocolate cookies with a crackled brownie-like surface and chewy centre, baked for 12 minutes at 180C.',
    meta: 'Brownie cookies with a crackled top and a chewy, fudgy middle, baked for 12 minutes. 18 cookies, ready in 57 minutes.',
    kw: ['brownie cookies', 'fudgy brownie cookies', 'chocolate crinkle brownie cookies', 'chewy chocolate cookies', 'brownie cookie recipe'],
    why: 'It looks like a cookie and eats like a brownie, and that is the point. Brownie cookies are the answer for anyone who prefers the edges and the shine, and they have the same crackled paper-thin crust, a dense centre and a rich chocolate flavour from a double hit of cocoa and melted chocolate.\n\nThe dough is wetter than a standard cookie dough. It contains melted chocolate, a lot of sugar and just enough flour to hold it together, so it looks more like a thick batter than a dough. This is correct. Chill it for 30 minutes, until it is firm enough to scoop, and it will bake into flat, fudgy rounds.\n\n**Whip the eggs and sugar for 3 minutes.** This is what builds the thin, shiny crust on top. Do not rush it. The mixture should turn pale and thick, and fall from the whisk in a slow ribbon.\n\nPull the cookies from the oven when the surface is set and crackled but the middle still looks soft. They will firm up on the tray. Leave them for 10 minutes before moving them. Chocolate chunks pressed into the tops before baking add pools of molten chocolate.',
    ing: [
      '150 g dark chocolate, chopped',
      '60 g butter',
      '2 eggs',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '60 g plain flour',
      '25 g cocoa powder',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '100 g dark chocolate chunks'
    ],
    st: [
      'Melt the 150 g chocolate and butter together, stir until smooth and cool for 5 minutes.',
      'Whisk the eggs, sugar and vanilla for 3 minutes until thick and pale. Fold in the chocolate mixture.',
      'Stir in the flour, cocoa, baking powder and salt, then the chocolate chunks. Chill the dough for 30 minutes.',
      'Heat the oven to 180C and line 2 trays. Scoop 18 mounds and place 5 cm apart.',
      'Bake for 12 minutes until the tops are crackled and set. Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Whip the eggs and sugar until thick.',
      'Chill the dough so it can be scooped.',
      'Do not overbake: they firm up as they cool.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Coffee', 'Raspberries'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [160, 2, 20, 8, 2, 15, 60]
  },

  'buttermilk-pie': {
    untimed: ['cooling completely'],
    d: 'A Southern custard pie with buttermilk, butter and vanilla in a blind-baked pastry case, baked for 50 minutes until set with a golden top.',
    meta: 'Buttermilk pie, a tangy Southern custard pie with a golden top, baked for 50 minutes. Eight servings, ready in 1 hour 10 minutes.',
    kw: ['buttermilk pie', 'southern buttermilk pie', 'old fashioned buttermilk pie', 'buttermilk custard pie', 'buttermilk pie recipe'],
    why: 'Buttermilk pie is a Southern American dessert born of thrift, made from ingredients every farmhouse kitchen had to hand: buttermilk, eggs, butter, sugar and flour. It tastes like a cross between a custard tart and a lemon chess pie, sweet and tangy, with a faint cultured flavour and a smooth, jiggling filling.\n\nThe pastry case must be blind baked first. Line it with baking paper, fill with baking beans, and bake for 15 minutes at 190C, then remove the paper and bake for 5 minutes more to dry out the base. A raw base under a wet filling will never crisp. Let it cool a little before pouring in the custard.\n\n**Whisk the filling gently.** Beating too hard whips air into it, and the pie then puffs up in the oven and sinks and cracks as it cools. Combine the sugar, flour, eggs and melted butter first, then stir in the buttermilk and vanilla until just blended. A pinch of nutmeg on top is traditional.\n\nBake at a lower temperature, 170C, for 35 minutes, until the edges are set and the centre still wobbles slightly like gelatin. It sets fully as it cools. Serve at room temperature or chilled, with berries.',
    ing: [
      '250 g ready-made shortcrust pastry',
      '200 g caster sugar',
      '2 tbsp plain flour',
      '3 eggs',
      '80 g butter, melted',
      '250 ml buttermilk',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Heat the oven to 190C. Roll the pastry to fit a 23 cm pie dish, line with baking paper and baking beans, and bake for 15 minutes. Remove the paper and beans and bake for 5 minutes. Reduce the oven to 170C.',
      'Whisk the sugar and flour together, then the eggs and melted butter.',
      'Stir in the buttermilk, vanilla and salt until just blended.',
      'Pour into the pastry case and sprinkle with the nutmeg.',
      'Bake for 35 minutes until the edges are set and the centre has a slight wobble. Cool completely before slicing.'
    ],
    tips: [
      'Blind bake the pastry first.',
      'Whisk the filling gently.',
      'Take it out while the centre still jiggles.'
    ],
    pair: ['Fresh berries', 'Whipped cream', 'Coffee', 'Peaches'],
    store: 'Keeps for 3 days in the fridge, covered.',
    nut: [363, 6, 42, 19, 1, 27, 320]
  },

  'buttermilk-waffles': {
    d: 'Crisp, golden waffles with a tender middle, made with buttermilk and a little melted butter and cooked in 4 to 5 minutes each.',
    meta: 'Buttermilk waffles, crisp outside and tender inside, cooked in a waffle iron. Four servings, ready in 30 minutes.',
    kw: ['buttermilk waffles', 'crispy buttermilk waffles', 'homemade waffles', 'fluffy waffles', 'waffle recipe with buttermilk'],
    why: 'Separate the eggs. This extra step is what lifts a good waffle into a great one, because whipped egg whites folded into the batter trap air, which turns to steam in the hot iron and puffs the waffle up. The result is crisp on the outside and light and tender within.\n\nThe batter uses buttermilk for flavour and tang, with a little bicarbonate of soda to react with the acid and aid lift. Mix the dry and wet ingredients separately, then combine with just a few strokes. Lumps are fine. An overmixed waffle batter makes tough, chewy waffles that steam rather than crisp.\n\n**Let the batter rest for 5 minutes while the iron heats.** The flour absorbs the liquid and the baking soda starts to work, giving a lighter crumb. Grease the iron lightly even if it is non-stick, and use the setting at which the steam stops escaping, which usually means they are done.\n\nKeep the cooked waffles warm and crisp in a 100C oven on a wire rack, not stacked on a plate where steam softens them. Serve with butter, maple syrup and fresh fruit, or go savoury with bacon and fried egg.',
    ing: [
      '250 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '2 eggs, separated',
      '350 ml buttermilk',
      '60 g butter, melted',
      '1 tsp vanilla extract',
      '40 g butter, to serve',
      '4 tbsp maple syrup, to serve'
    ],
    st: [
      'Heat the waffle iron and the oven to 100C. Mix the flour, sugar, baking powder, bicarbonate of soda and salt.',
      'Whisk the egg yolks, buttermilk, melted butter and vanilla. Pour into the dry ingredients and stir until just combined.',
      'Whisk the egg whites to stiff peaks and fold into the batter. Rest for 5 minutes.',
      'Ladle batter into the greased iron and cook for 4 to 5 minutes until golden and crisp.',
      'Keep the waffles on a rack in the warm oven and serve with the butter and maple syrup.'
    ],
    tips: [
      'Whip the egg whites for lighter waffles.',
      'Keep waffles on a rack, not a plate.',
      'Do not overmix the batter.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Bacon', 'Whipped cream'],
    store: 'Freeze cooled waffles for 2 months and reheat in a toaster.',
    nut: [556, 13, 72, 24, 2, 23, 820]
  },

  'cakey-brownies': {
    untimed: ['cooling completely'],
    d: 'Light, soft brownies with a cake-like crumb and a deep chocolate flavour, baked for 30 minutes and finished with chocolate frosting.',
    meta: 'Cakey brownies with a soft, light crumb and chocolate frosting, baked for 30 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['cakey brownies', 'cake like brownies', 'soft chocolate brownies', 'brownies with frosting', 'light brownies recipe'],
    why: 'Brownie lovers divide into two camps: the fudgy and the cakey. This recipe is for the second. A cakey brownie has a lighter, more open crumb that slices neatly, holds a thick layer of frosting, and tastes of chocolate cake in the shape of a bar.\n\nThe difference is the balance of fat and flour. A fudgy brownie has a lot of butter and chocolate and little flour. A cakey one has more flour, less fat, and a chemical raising agent in the form of baking powder, which puffs the batter in the oven. The eggs are beaten with the sugar to a thick mousse, which adds more air.\n\n**Use cocoa powder as well as melted chocolate.** Cocoa gives a drier, more cake-like texture and a bitter edge, while melted chocolate keeps it moist. Sift the cocoa with the flour to avoid lumps, since those bitter specks will not dissolve in the batter.\n\nBake until a skewer comes out clean, which is different from fudgy brownies. The top should spring back lightly. Cool in the tin, spread with the chocolate frosting, and cut into squares with a hot, dry knife.',
    ing: [
      '115 g butter, melted',
      '200 g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '120 g plain flour',
      '40 g cocoa powder',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '80 ml milk',
      '80 g butter, softened, for the frosting',
      '150 g icing sugar',
      '30 g cocoa powder, for the frosting',
      '2 tbsp milk, for the frosting'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 20 cm square tin.',
      'Whisk the melted butter, caster sugar, eggs and vanilla for 2 minutes until thick.',
      'Sift in the flour, 40 g cocoa, baking powder and salt. Fold in with the milk until smooth.',
      'Pour into the tin and bake for 30 minutes until a skewer comes out clean. Cool completely.',
      'Beat the soft butter, icing sugar, 30 g cocoa and 2 tbsp milk until fluffy. Spread over the brownies and cut into 12.'
    ],
    tips: [
      'Sift the cocoa to avoid lumps.',
      'Cool completely before frosting.',
      'Use a hot, dry knife to cut squares.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Coffee', 'Fresh raspberries'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [315, 4, 41, 15, 2, 30, 110]
  },

  'caramel-blondies': {
    untimed: ['cooling completely'],
    d: 'Chewy brown sugar blondies with ribbons of caramel running through them, baked for 30 minutes and finished with flaky sea salt.',
    meta: 'Caramel blondies, chewy with ribbons of caramel and sea salt, baked for 30 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['caramel blondies', 'salted caramel blondies', 'chewy blondies', 'blondies with caramel', 'brown sugar blondies'],
    why: 'It looks like a brownie that forgot the chocolate and tastes like a toffee. Blondies are made from brown sugar, butter, eggs and flour, and the sugar is what gives them their flavour: deep, caramel and faintly molasses-like. Add ribbons of real caramel to the top and the whole bar becomes a sticky, chewy indulgence.\n\nThe recipe is a one bowl affair. Melt the butter, stir in the brown sugar until it dissolves into a thick paste, then beat in the eggs and vanilla. Add the flour last, folded in gently. Beating after the flour is in makes the blondies tough and cakey rather than dense and chewy.\n\n**Swirl the caramel in, do not mix it.** Spoon a third of the batter into the tin, drizzle over some caramel, add the rest of the batter and drizzle again. Drag a knife through the top in a figure of eight. Mixing would dissolve the caramel and lose the ribbons.\n\nUnderbake slightly, because blondies set as they cool and a fully set blondie in the oven turns dry. They are ready when the top is golden and crackled but the centre still has a soft wobble. Finish with flaky sea salt while warm and cool completely before cutting.',
    ing: [
      '150 g butter, melted',
      '250 g light brown sugar',
      '2 eggs',
      '2 tsp vanilla extract',
      '220 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '150 g thick caramel sauce',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 20 cm square tin.',
      'Stir the melted butter and brown sugar together until thick. Beat in the eggs and vanilla.',
      'Fold in the flour, baking powder and salt until just combined.',
      'Spoon half the batter into the tin, drizzle with half the caramel, then add the rest of the batter and the rest of the caramel. Drag a knife through to swirl.',
      'Bake for 30 minutes until golden with a soft centre. Sprinkle with the flaky salt, cool completely and cut into 12.'
    ],
    tips: [
      'Swirl the caramel, do not stir it in.',
      'Underbake slightly for a chewy centre.',
      'Cool fully before cutting.'
    ],
    pair: ['Vanilla ice cream', 'Coffee', 'Cold milk', 'Hot tea'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [296, 3, 44, 12, 1, 28, 270]
  },

  'carrot-cake-loaf': {
    untimed: ['cooling completely'],
    d: 'A moist spiced carrot loaf with walnuts and sultanas, baked for 55 minutes and topped with cream cheese icing.',
    meta: 'Carrot cake loaf with walnuts and cream cheese icing, baked for 55 minutes. Ten servings, ready in 1 hour 15 minutes.',
    kw: ['carrot cake loaf', 'carrot loaf cake', 'carrot cake in a loaf tin', 'spiced carrot loaf with icing', 'moist carrot cake loaf'],
    why: 'The first sign it is ready is the smell: cinnamon and nutmeg warming with the sweetness of baked carrot. A carrot cake is a reliable favourite, and baked as a loaf it is easier to make, easier to slice and easier to transport, which makes it ideal for a picnic or the office.\n\nGrate the carrots finely and pack them lightly. Carrots supply moisture as well as sweetness, and they melt into the batter, which is why the cake stays moist for days. Use oil rather than butter for the same reason: it stays liquid at room temperature, so the crumb never feels dry or firm.\n\n**Toast the walnuts first.** Five minutes in a dry pan or oven turns them from slightly bitter and chewy to crunchy and sweet. Chop them into rough pieces, not dust. Sultanas soaked in hot water for 10 minutes plump up and do not draw moisture from the loaf.\n\nBake until a skewer comes out clean, and cool the loaf fully in the tin before icing, or the icing slides off. The cream cheese icing is soft butter, cold cream cheese, icing sugar and a squeeze of lemon, beaten until just smooth. Overbeating makes it runny.',
    ing: [
      '250 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '3 eggs',
      '200 g light brown sugar',
      '150 ml vegetable oil',
      '250 g carrots, finely grated',
      '60 g walnuts, toasted and chopped',
      '60 g sultanas, soaked and drained',
      '100 g cream cheese, cold',
      '50 g butter, softened',
      '120 g icing sugar',
      '1 tsp lemon juice'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 900 g loaf tin.',
      'Mix the flour, baking powder, bicarbonate of soda, cinnamon, nutmeg and salt.',
      'Whisk the eggs, brown sugar and oil. Fold in the dry ingredients, then the carrots, walnuts and sultanas.',
      'Pour into the tin and bake for 55 minutes until a skewer comes out clean. Cool completely in the tin.',
      'Beat the cream cheese, butter, icing sugar and lemon juice until smooth. Spread over the loaf.'
    ],
    tips: [
      'Grate the carrots finely.',
      'Toast the walnuts for better flavour.',
      'Ice only when the loaf is completely cool.'
    ],
    pair: ['Coffee', 'Hot tea', 'Cold milk', 'Fresh orange'],
    store: 'Keeps in the fridge for 4 days with the icing.',
    nut: [507, 6, 60, 27, 2, 37, 350]
  },

  'cathead-biscuits': {
    d: 'Huge Southern biscuits, each as big as a cat\'s head, made with cold butter and buttermilk and baked at 220C for 18 minutes.',
    meta: 'Cathead biscuits, huge fluffy Southern biscuits with buttermilk, baked for 18 minutes. Eight biscuits, ready in 35 minutes.',
    kw: ['cathead biscuits', 'giant southern biscuits', 'big fluffy buttermilk biscuits', 'appalachian cathead biscuits', 'cathead biscuit recipe'],
    why: 'It looks like a regular biscuit and is the size of a cat\'s head, which is where the name comes from. Cathead biscuits are an Appalachian tradition, a large, craggy biscuit that is not cut but scooped or pinched off the dough, giving a rough, rustic outline and a soft, shaggy crumb.\n\nThe dough is wetter than a rolled biscuit, closer to a thick batter. Use self-raising flour, if you have it, which is traditional for the South and gives a delicate crumb, along with cold butter or lard cut into the flour in pea-sized lumps. The cold fat steams in the oven and creates the flaky layers. Buttermilk goes in last, in one go, stirred just until the flour is damp.\n\n**Do not roll or cut the dough.** Scoop eight rough mounds with a large spoon, flouring your hands lightly, and shape them gently into rounds without pressing. The craggy surfaces brown and crisp in the oven.\n\nPack the biscuits against each other in a cast iron pan or on a tray so they rise upwards, and bake in a hot oven until deeply golden. Brush with melted butter as they come out. Split and fill with sausage gravy, bacon and egg, or jam.',
    ing: [
      '450 g self-raising flour',
      '1 tsp salt',
      '1 tsp caster sugar',
      '115 g cold butter, cubed',
      '350 ml cold buttermilk',
      '30 g butter, melted'
    ],
    st: [
      'Heat the oven to 220C. Grease a 26 cm cast iron pan or a tray.',
      'Mix the flour, salt and sugar. Rub in the cold butter until the lumps are pea-sized.',
      'Pour in the buttermilk and stir until just combined into a wet, shaggy dough.',
      'Scoop 8 large mounds with floured hands and pack them close together in the pan.',
      'Bake for 18 minutes until deep golden. Brush with the melted butter and serve warm.'
    ],
    tips: [
      'Keep the butter and buttermilk cold.',
      'Do not roll out or cut the dough.',
      'Bake the biscuits close together for height.'
    ],
    pair: ['Sausage gravy', 'Bacon and egg', 'Butter and jam', 'Honey'],
    store: 'Best the day they are made. Reheat for 5 minutes at 180C.',
    nut: [352, 7, 45, 16, 2, 3, 340]
  },

  'cheesecake-bars': {
    d: 'A thick layer of vanilla cheesecake on a buttery digestive biscuit base, baked for 40 minutes, chilled and cut into 16 squares.',
    meta: 'Cheesecake bars with a biscuit base and vanilla filling, baked for 40 minutes and chilled. 16 bars, ready in 5 hours 35 minutes, cooling included.',
    kw: ['cheesecake bars', 'vanilla cheesecake bars', 'cheesecake squares', 'biscuit base cheesecake bars', 'cheesecake bars recipe'],
    why: 'Cheesecake in a form that can be cut with a knife and eaten with the hands: that is the idea of a bar. The filling is the same as a full cheesecake, rich and dense with vanilla, but in a shallow pan it bakes in 40 minutes and chills in a fraction of the time.\n\nThe base is crushed digestive biscuits mixed with melted butter and pressed into a lined tin. Pack it firmly with the back of a spoon or the bottom of a glass, and bake it for 10 minutes before adding the filling. A pre-baked base stays crisp under the wet cheesecake mix.\n\n**Bring everything to room temperature.** Cold cream cheese stays lumpy no matter how long you beat it, and lumps in the filling are permanent. Take the cream cheese and eggs out of the fridge an hour ahead. Beat the cheese and sugar first until smooth, then add the eggs one at a time, mixing only until combined.\n\nBake until the edges are set and the middle is slightly wobbly, then turn the oven off and let the bars cool inside for 30 minutes. This gentle cooling prevents cracks. Chill for at least 4 hours before cutting with a hot, wiped knife.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g cream cheese, at room temperature',
      '150 g caster sugar',
      '3 eggs',
      '1 tbsp lemon juice',
      '2 tsp vanilla extract',
      '150 g soured cream',
      '2 tbsp plain flour'
    ],
    st: [
      'Heat the oven to 170C. Mix the biscuit crumbs with the melted butter and press into a lined 20 cm square tin. Bake for 10 minutes.',
      'Beat the cream cheese and sugar until smooth. Beat in the eggs one at a time, then the lemon juice, vanilla, soured cream and flour.',
      'Pour over the base and bake for 30 minutes until the edges are set and the middle wobbles slightly.',
      'Turn off the oven and leave the cheesecake inside for 30 minutes.',
      'Chill for at least 4 hours, then cut into 16 bars with a hot, wiped knife.'
    ],
    tips: [
      'Use room temperature cream cheese and eggs.',
      'Cool slowly in the oven to avoid cracks.',
      'Wipe the knife between cuts.'
    ],
    pair: ['Fresh berries', 'Fruit compote', 'Coffee', 'Whipped cream'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [270, 'Cooling and chilling'],
    nut: [311, 5, 21, 23, 0, 14, 190]
  },

  'cheesecake-cupcakes': {
    untimed: ['cooling'],
    d: 'Mini vanilla cheesecakes baked in a muffin tin on biscuit bases, chilled and topped with fruit.',
    meta: 'Cheesecake cupcakes on biscuit bases, baked for 25 minutes and chilled. 12 servings, ready in 3 hours.',
    kw: ['cheesecake cupcakes', 'mini cheesecakes', 'individual cheesecakes', 'cheesecake in muffin tin', 'mini vanilla cheesecakes'],
    why: 'Individual cheesecakes solve a problem: they need no slicing and no sharing, and they cool and set faster than a whole one. Baked in a standard muffin tin with paper cases, each one has its own crumb base and a smooth top, and the whole batch is ready in an afternoon.\n\nThe base is a spoonful of crushed digestive biscuit mixed with melted butter, pressed into the bottom of each case. Use a small glass or the end of a rolling pin to compact it. A loose base crumbles when you peel off the paper. Bake the bases for 5 minutes before filling to set them.\n\n**Do not overbeat the filling.** Cream cheese, sugar and a little soured cream are beaten just until smooth, and the eggs go in last, on a low speed. Over-beating whips in air, which makes the tops rise in the oven and then crater and crack as they cool.\n\nFill the cases to about three quarters, and bake at 160C until the filling is set at the edges and just wobbles in the centre. They will puff slightly and sink back as they cool, which is normal. Chill for at least 2 hours, then top with a spoon of jam, fresh berries or lemon curd.',
    ing: [
      '120 g digestive biscuits, crushed',
      '50 g butter, melted',
      '400 g cream cheese, at room temperature',
      '100 g caster sugar',
      '100 g soured cream',
      '2 eggs',
      '2 tsp vanilla extract',
      '1 tbsp lemon juice',
      '150 g fresh raspberries'
    ],
    st: [
      'Heat the oven to 160C and line a 12-hole muffin tin with paper cases.',
      'Mix the biscuit crumbs with the melted butter and press a tablespoon into each case. Bake for 5 minutes.',
      'Beat the cream cheese and sugar until smooth. Mix in the soured cream, then the eggs one at a time on low speed. Add the vanilla and lemon juice.',
      'Divide the filling between the cases and bake for 20 minutes until set at the edges with a slight wobble.',
      'Cool, then chill for at least 2 hours. Top with the raspberries.'
    ],
    tips: [
      'Press the bases firmly.',
      'Mix the eggs in on low speed.',
      'Chill before topping.'
    ],
    pair: ['Fresh berries', 'Coffee', 'Fruit compote', 'Lemon curd'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [120, 'Chilling'],
    nut: [259, 4, 18, 19, 1, 12, 160]
  },

  'cherry-almond-cookies': {
    d: 'Soft almond cookies studded with glace cherries and finished with an almond glaze, baked for 14 minutes.',
    meta: 'Cherry almond cookies, soft with chopped cherries and an almond glaze, baked for 14 minutes. 24 cookies, ready in 35 minutes.',
    kw: ['cherry almond cookies', 'glace cherry cookies', 'almond cherry biscuits', 'soft cherry cookies', 'cherry and almond cookie recipe'],
    why: 'Cherries and almonds are a pairing that has been around for as long as there have been orchards. The two share a faint, bittersweet flavour compound, which is why cherry stones taste faintly of almond, and why a bake that uses both seems naturally balanced. These cookies use glace cherries for sweetness and colour, with almond extract and ground almonds to bring the nuttiness.\n\nChop the cherries and dry them on kitchen paper before folding them into the dough. They are sticky and syrupy, and the syrup bleeds into the dough and turns the cookies pink and sticky if the cherries are not blotted. Dust them in a spoonful of flour after drying to keep them suspended.\n\n**Add the almond extract sparingly.** A half teaspoon in the dough and half in the glaze is enough to flavour the whole batch. More tastes like marzipan and overwhelms the fruit. Ground almonds replace a portion of the flour and give a short, tender crumb.\n\nBake the cookies until the edges are lightly golden and the centres are still soft. They firm up as they cool. A thin glaze of icing sugar, milk and a drop of almond extract finishes them, with a flaked almond pressed on top while the glaze is wet.',
    ing: [
      '115 g butter, softened',
      '120 g caster sugar',
      '1 egg',
      '1 tsp almond extract',
      '200 g plain flour',
      '60 g ground almonds',
      '1/2 tsp baking powder',
      '1/4 tsp salt',
      '100 g glace cherries, chopped and dried',
      '100 g icing sugar',
      '2 tbsp milk',
      '10 g flaked almonds'
    ],
    st: [
      'Heat the oven to 175C and line 2 trays.',
      'Beat the butter and sugar for 2 minutes until pale. Beat in the egg and 1/2 tsp of the almond extract.',
      'Stir in the flour, ground almonds, baking powder and salt, then fold in the cherries.',
      'Roll into 24 balls and place 4 cm apart on the trays. Flatten slightly. Bake for 14 minutes until the edges are lightly golden.',
      'Cool on a rack. Whisk the icing sugar, milk and remaining almond extract, drizzle over the cookies and press a flaked almond on each.'
    ],
    tips: [
      'Dry the cherries on kitchen paper.',
      'Use almond extract sparingly.',
      'Take the cookies out while still soft.'
    ],
    pair: ['Hot tea', 'Coffee', 'Milk', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [138, 2, 19, 6, 1, 12, 40]
  }
};
