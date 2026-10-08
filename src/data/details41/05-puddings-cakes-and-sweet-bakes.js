'use strict';

/**
 * Volume forty-one — puddings, cakes and sweet bakes, first half.
 *
 * Bread pudding, rolls, doughnuts and banana bakes, a no-bake banoffee
 * cheesecake, brownies and tarts, a chiffon cake, chocolate sweets and a
 * courgette cake. Times are the recipe's own; ovens differ, so each method
 * says when to check early. Nutrition is estimated from the ingredient list
 * by npm run calc.
 */

module.exports = {
  'bread-pudding-with-whiskey-sauce': {
    d: 'Cubes of stale bread soaked in cinnamon custard with raisins, baked until set and served with a warm whiskey butter sauce.',
    meta: 'Bread pudding with whiskey sauce: stale bread baked in cinnamon custard with raisins and a whiskey butter sauce. Eight servings, 45 minutes.',
    kw: ['bread pudding with whiskey sauce', 'bread pudding with bourbon sauce', 'southern bread pudding', 'old fashioned bread pudding', 'bread pudding with raisins'],
    why: 'Bread, milk, eggs, sugar: four ingredients that were once kept in every kitchen, and a pudding that was invented to use up the end of a loaf.\n\nStale bread is the key, because fresh bread collapses into paste when it soaks. If yours is fresh, dry the cubes in a low oven for 10 minutes first. Pour the custard over the bread and press down. **Leave it to soak for 15 minutes.** The bread should drink up the liquid, and the dish should look nearly dry before it goes into the oven.\n\nBake at 170°C for 45 minutes, until the top is deep gold and the middle is just set. If your oven runs hot, check at 35 minutes. A knife pushed into the centre should come out clean.\n\nThe sauce is made while the pudding bakes: melt the butter and sugar, add the cream, simmer for 4 minutes, and stir in the whiskey off the heat. Pour it warm over each portion, and serve straight away.',
    ing: [
      '300 g stale white bread, cubed',
      '500 ml milk',
      '250 ml double cream',
      '3 eggs, about 150 g',
      '100 g caster sugar',
      '1 tsp ground cinnamon',
      '100 g raisins',
      '40 g butter, melted',
      '100 g butter for the sauce',
      '100 g caster sugar for the sauce',
      '100 ml double cream for the sauce',
      '60 ml whiskey'
    ],
    st: [
      'Heat the oven to 170°C and grease a 2 litre baking dish. Put the bread and raisins in the dish.',
      'Whisk the milk, 250 ml cream, eggs, 100 g sugar, cinnamon and the 40 g butter. Pour over the bread, press down and leave to soak for 15 minutes.',
      'Bake for 45 minutes until deep gold and just set.',
      'Meanwhile melt the 100 g butter with the 100 g sugar, add the 100 ml cream and simmer for 4 minutes. Off the heat, stir in the whiskey.',
      'Serve the pudding warm with the sauce poured over.'
    ],
    tips: [
      'Use stale bread.',
      'Let the bread soak for 15 minutes.',
      'If your oven runs hot, check at 35 minutes.',
      'Add the whiskey off the heat.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Hot coffee', 'Fresh berries'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 160°C oven for 15 minutes.',
    nut: [583, 9, 58, 35, 2, 39, 250]
  },

  'apple-cinnamon-rolls': {
    d: 'Soft yeasted rolls filled with diced apple, cinnamon and brown sugar, baked and iced while warm.',
    meta: 'Apple cinnamon rolls: soft yeasted rolls filled with diced apple, cinnamon and brown sugar. Makes twelve, baked for 25 minutes.',
    kw: ['apple cinnamon rolls', 'homemade apple cinnamon rolls', 'apple cinnamon buns', 'apple filled cinnamon rolls', 'iced apple cinnamon rolls'],
    why: 'Dice the apple small and the rolls stay together. That is the most useful instruction for this recipe, and the one that decides whether the filling stays in the spiral.\n\nThe dough is a rich, soft one, made with milk, an egg and butter. Knead it for 8 minutes until it springs back, then leave it for 1 hour until doubled. **Cut the apple into pieces no bigger than 5 mm.** Large chunks tear the dough as you roll and leak juice into the tin.\n\nRoll the dough into a rectangle, spread it with soft butter, brown sugar and cinnamon, scatter the apple and roll up tightly from the long side. Cut into twelve with a thread or a sharp knife and set the rolls in a lined tin. Cover and leave for 30 minutes.\n\nBake at 180°C for 25 minutes, until golden. If your oven runs hot, check at 20 minutes. Ice them while they are still warm so that the icing melts into the folds.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action yeast',
      '60 g caster sugar',
      '1 tsp salt',
      '250 ml warm milk',
      '1 egg, about 50 g',
      '60 g butter, melted',
      '80 g butter, softened, for the filling',
      '100 g soft light brown sugar',
      '2 tsp ground cinnamon',
      '2 apples, about 300 g, peeled and finely diced',
      '150 g icing sugar',
      '2 tbsp milk for the icing'
    ],
    st: [
      'Mix the flour, yeast, caster sugar and salt. Add the warm milk, egg and melted butter and mix to a soft dough.',
      'Knead for 8 minutes until smooth. Cover and leave for 1 hour until doubled.',
      'Roll into a 30 by 40 cm rectangle. Spread with the softened butter, then the brown sugar and cinnamon, then scatter over the diced apple.',
      'Roll up from the long side, cut into 12 slices and set them in a lined 25 by 35 cm tin. Cover and leave for 30 minutes.',
      'Heat the oven to 180°C and bake for 25 minutes until golden. Stir the icing sugar with the 2 tbsp milk and spread over the warm rolls.'
    ],
    tips: [
      'Dice the apple small.',
      'Roll the dough up tightly.',
      'If your oven runs hot, check at 20 minutes.',
      'Ice them while warm.'
    ],
    pair: ['Hot coffee', 'Warm milk', 'Hot tea', 'Vanilla ice cream'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    rest: [90, 'Rising'],
    nut: [336, 6, 51, 12, 2, 31, 420]
  },

  'baked-doughnuts': {
    d: 'Light cake-style doughnuts baked in a doughnut tin and dipped in a thin vanilla glaze.',
    meta: 'Baked doughnuts: light cake-style doughnuts baked in a tin and dipped in vanilla glaze. Makes twelve, baked for 12 minutes.',
    kw: ['baked doughnuts', 'baked donuts', 'oven baked doughnuts', 'cake doughnuts without frying', 'homemade baked doughnuts'],
    why: 'Flour, sugar, egg, milk: four ingredients, a tin with rings in it, and no pan of hot oil. Baked doughnuts are closer to a small cake than to the fried kind, and they are better for it on a busy morning.\n\nThe batter is thick, thicker than muffin batter, and should be piped or spooned into the tin rather than poured. A bag with the corner snipped makes this quick and tidy. **Fill the rings only two-thirds full.** The doughnuts rise as they bake, and an overfilled ring loses its hole.\n\nBake at 180°C for 12 minutes, until the tops spring back when pressed. If your oven runs hot, check at 9 minutes. Leave them in the tin for 3 minutes, then turn them out onto a rack.\n\nThe glaze is icing sugar and milk, stirred until it coats a spoon. Dip each doughnut face down while it is still slightly warm, so that the glaze sets thin and shiny. Eat them the same day, since baked doughnuts dry out faster than fried ones.',
    ing: [
      '200 g plain flour',
      '100 g caster sugar',
      '2 tsp baking powder',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '1 egg, about 50 g',
      '150 ml milk',
      '40 g butter, melted',
      '1 tsp vanilla extract',
      '100 g icing sugar',
      '2 tbsp milk for the glaze'
    ],
    st: [
      'Heat the oven to 180°C and grease a 12-hole doughnut tin. Whisk the flour, caster sugar, baking powder, nutmeg and salt.',
      'Whisk the egg, 150 ml milk, melted butter and vanilla, pour into the dry mixture and stir until just combined.',
      'Pipe or spoon the batter into the tin, filling each ring two-thirds full. Bake for 12 minutes until the tops spring back.',
      'Cool in the tin for 3 minutes, then turn out. Stir the icing sugar with the 2 tbsp milk and dip each doughnut in the glaze.'
    ],
    tips: [
      'Fill the rings two-thirds full.',
      'Pipe the batter for neat doughnuts.',
      'If your oven runs hot, check at 9 minutes.',
      'Glaze while still slightly warm.'
    ],
    pair: ['Hot coffee', 'Cold milk', 'Fresh berries', 'Hot chocolate'],
    store: 'Best on the day. Keeps in a tin for 1 day.',
    nut: [168, 3, 30, 4, 1, 18, 190]
  },

  'banana-cake-with-cream-cheese-icing': {
    d: 'A soft banana cake with cinnamon, finished with a thick cream cheese icing.',
    meta: 'Banana cake with cream cheese icing: a soft cinnamon banana cake with cream cheese icing. Twelve slices, baked for 35 minutes.',
    kw: ['banana cake with cream cheese icing', 'banana cake with cream cheese frosting', 'moist banana cake', 'banana cake with cinnamon', 'iced banana cake'],
    why: 'An occasion is what this cake is for: a birthday tea, a baby shower, a Sunday when there are overripe bananas in the bowl and nobody wants them. It is a way of turning a problem into a cake.\n\nUse bananas that are black and spotted, because they are sweeter and wetter. Mash them with a fork until nearly smooth. **Do not use a blender.** It turns the banana to a thin liquid that makes the cake heavy.\n\nCream the butter and sugar, beat in the eggs, then fold in the banana, flour, cinnamon and milk. Spoon into a lined 23 cm tin and bake at 175°C for 35 minutes. If your oven runs hot, check at 28 minutes. A skewer should come out clean.\n\nCool completely before icing. The cream cheese icing is cream cheese, butter and icing sugar, beaten until thick. Keep the cake in the fridge once iced, because the cheese goes soft in a warm room.',
    ing: [
      '100 g butter, softened',
      '150 g caster sugar',
      '2 eggs, about 100 g',
      '3 very ripe bananas, about 360 g peeled, mashed',
      '250 g self-raising flour',
      '1 tsp ground cinnamon',
      '100 ml milk',
      '150 g cream cheese',
      '50 g butter, softened, for the icing',
      '150 g icing sugar'
    ],
    st: [
      'Heat the oven to 175°C and line a 23 cm round tin. Beat the 100 g butter and caster sugar for 3 minutes until pale.',
      'Beat in the eggs one at a time. Fold in the mashed banana, flour, cinnamon and milk until just combined.',
      'Pour into the tin and bake for 35 minutes until a skewer comes out clean. Cool completely.',
      'Beat the cream cheese, 50 g butter and icing sugar until thick and spread over the cake.'
    ],
    tips: [
      'Use very ripe bananas.',
      'Mash with a fork.',
      'If your oven runs hot, check at 28 minutes.',
      'Keep the iced cake in the fridge.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Walnuts', 'Cold milk'],
    store: 'Keeps in the fridge for 4 days. Serve at room temperature.',
    nut: [360, 5, 49, 16, 1, 30, 50]
  },

  'banana-walnut-loaf': {
    d: 'A moist banana loaf with chopped walnuts, baked in a loaf tin and sliced thick.',
    meta: 'Banana walnut loaf: a moist banana loaf with chopped walnuts, baked for 55 minutes. Ten slices.',
    kw: ['banana walnut loaf', 'banana nut loaf', 'banana bread with walnuts', 'moist banana walnut bread', 'banana and walnut loaf cake'],
    why: 'Bananas, eggs, butter, sugar, flour: five things, one bowl, and a loaf that fills the kitchen with a warm, toasty smell. Walnuts give it a crunch and a slightly bitter edge that stops it from being only sweet.\n\nMash the bananas with a fork, leaving small lumps for texture. The riper the bananas, the better the loaf. **Chop the walnuts coarsely and toss them in a spoonful of flour.** The flour helps them stay suspended in the batter instead of sinking to the bottom.\n\nBake in a lined 900 g loaf tin at 170°C for 55 minutes. If your oven runs hot, check at 45 minutes. A skewer should come out clean and the top should be deeply golden, with the traditional crack down the middle.\n\nCool in the tin for 10 minutes and then on a rack. Slice it with a serrated knife once it is cool, since warm banana bread squashes. Toast a slice the next day and spread it with butter.',
    ing: [
      '3 very ripe bananas, about 360 g peeled',
      '120 g caster sugar',
      '2 eggs, about 100 g',
      '100 g butter, melted',
      '250 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '60 g walnuts, chopped'
    ],
    st: [
      'Heat the oven to 170°C and line a 900 g loaf tin. Mash the bananas in a large bowl.',
      'Stir in the sugar, eggs and melted butter. Sift in the flour, baking powder, bicarbonate and salt and fold until just combined.',
      'Fold in the walnuts. Pour into the tin.',
      'Bake for 55 minutes until a skewer comes out clean. Cool in the tin for 10 minutes, then turn out.'
    ],
    tips: [
      'Use very ripe bananas.',
      'Do not overmix.',
      'If your oven runs hot, check at 45 minutes.',
      'Slice with a serrated knife when cool.'
    ],
    pair: ['Butter', 'Hot coffee', 'Hot tea', 'Cold milk'],
    store: 'Keeps wrapped for 4 days.',
    nut: [297, 5, 40, 13, 2, 17, 180]
  },

  'banoffee-cheesecake': {
    d: 'A no-bake cheesecake of biscuit base, cream cheese filling, toffee and sliced banana, finished with whipped cream and chocolate.',
    meta: 'Banoffee cheesecake: a no-bake cheesecake with toffee, banana and cream, chilled for 4 hours. Ten slices.',
    kw: ['banoffee cheesecake', 'no bake banoffee cheesecake', 'banoffee pie cheesecake', 'toffee banana cheesecake', 'banoffee cheesecake recipe'],
    why: 'Biscuits, cream cheese, toffee, banana: four ingredients that come together in a tin and need only a fridge. It is a pie and a cheesecake in one dessert.\n\nThe base is crushed digestives and melted butter, pressed hard into the tin. Press it with the back of a spoon until it is even and tight, because it has to hold a slice without crumbling. **Spread the toffee on the base before the filling goes on.** It creates a barrier that keeps the biscuit crisp for a bit longer.\n\nWhip the cream until it holds a soft peak and fold it into the beaten cream cheese and icing sugar. Overbeaten cream cheese turns runny, so stop as soon as it is smooth.\n\nSlice the bananas just before they go on, so that they do not brown. Layer them over the toffee and under the filling, and finish the top with more cream and grated chocolate. Chill for 4 hours before cutting, or the filling will not hold.',
    ing: [
      '250 g digestive biscuits, crushed',
      '100 g butter, melted',
      '200 g tinned caramel',
      '3 bananas, about 360 g peeled, sliced',
      '400 g cream cheese',
      '60 g icing sugar',
      '350 ml double cream',
      '30 g dark chocolate, grated'
    ],
    st: [
      'Mix the crushed biscuits with the melted butter and press firmly into the base of a 23 cm springform tin.',
      'Spread the caramel over the base and top with half the banana slices.',
      'Beat the cream cheese with the icing sugar until smooth. Whip 250 ml of the cream to soft peaks, fold it in and spread over the bananas.',
      'Chill for 4 hours. Whip the remaining cream, spread it on top and finish with the remaining banana and the grated chocolate.'
    ],
    tips: [
      'Press the base down hard.',
      'Slice the bananas at the last minute.',
      'Do not overbeat the cream cheese.',
      'Chill for the full 4 hours.'
    ],
    pair: ['Hot coffee', 'Fresh berries', 'Pouring cream', 'Dessert wine'],
    store: 'Keeps in the fridge for 2 days.',
    rest: [240, 'Chilling'],
    nut: [602, 6, 50, 42, 2, 31, 290]
  },

  'cheddar-bay-biscuits': {
    d: 'Soft drop biscuits full of cheddar and garlic, brushed with garlic butter while still hot.',
    meta: 'Cheddar bay biscuits: soft drop biscuits with cheddar and garlic, brushed with garlic butter. Makes ten, baked for 15 minutes.',
    kw: ['cheddar bay biscuits', 'cheddar garlic biscuits', 'cheesy garlic drop biscuits', 'cheese biscuits with garlic butter', 'copycat cheddar bay biscuits'],
    why: 'Why do drop biscuits come out so much better than rolled ones? Because they need no rolling, no cutting and no resting. The dough is stirred and dropped straight onto the tray.\n\nRub the cold butter into the flour until it looks like coarse crumbs, leaving some pieces the size of peas. Those pieces melt in the oven and leave pockets that make the biscuit tender. **Keep the butter cold.** If your kitchen is warm, chill the bowl for 10 minutes before adding the milk.\n\nStir in the cheddar and the milk with a fork, just until the dough comes together. Drop 10 large spoonfuls onto the tray, leaving them ragged. The rough edges brown and give the best crunch.\n\nBake at 220°C for 15 minutes. If your oven runs hot, check at 12 minutes. Mix the melted butter with garlic powder and parsley and brush it over the biscuits the moment they come out. Eat them warm.',
    ing: [
      '250 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp garlic powder',
      '1/2 tsp salt',
      '80 g cold butter, cubed',
      '100 g mature cheddar, grated',
      '180 ml milk',
      '30 g butter, melted, for brushing',
      '1/2 tsp garlic powder for brushing',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Mix the flour, baking powder, 1/2 tsp garlic powder and salt, then rub in the cold butter until crumbly.',
      'Stir in the cheddar and milk with a fork until just combined.',
      'Drop 10 large spoonfuls onto the tray. Bake for 15 minutes until golden.',
      'Stir the melted butter with the remaining garlic powder and parsley and brush over the hot biscuits.'
    ],
    tips: [
      'Keep the butter cold.',
      'Do not overmix.',
      'If your oven runs hot, check at 12 minutes.',
      'Brush with butter while hot.'
    ],
    pair: ['Seafood chowder', 'Fried chicken', 'Tomato soup', 'Scrambled eggs'],
    store: 'Best on the day. Keeps in a tin for 2 days and reheats in a 160°C oven for 5 minutes.',
    nut: [225, 6, 21, 13, 1, 1, 290]
  },

  'cheesecake-brownies': {
    d: 'Dark fudgy brownies swirled with a baked vanilla cream cheese layer, cut into squares.',
    meta: 'Cheesecake brownies: fudgy chocolate brownies swirled with vanilla cream cheese. Sixteen pieces, baked for 40 minutes.',
    kw: ['cheesecake brownies', 'cream cheese swirl brownies', 'cheesecake swirl brownies', 'brownies with cheesecake layer', 'homemade cheesecake brownies'],
    why: 'A birthday for sixteen, a bake sale, a potluck: cheesecake brownies are the kind of bake that disappears first from the table. They also keep better than plain brownies, because the cheese layer holds moisture.\n\nMelt the butter and chocolate together first, then beat in the sugar and eggs. The brownie batter should be glossy and thick, with a sheen like wet paint. **Beat the eggs in well.** That is what gives brownies their shiny crackled top.\n\nFor the swirl, beat the cream cheese with the sugar, egg and vanilla until smooth. Spread two-thirds of the brownie batter in the tin, dollop the cheese mixture on top, add the rest of the brownie batter and drag a knife through for a marbled finish.\n\nBake at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes. The edges should be set and the middle should still have a slight wobble. Cool completely, then chill, which makes clean slices possible.',
    ing: [
      '150 g butter',
      '150 g dark chocolate',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '100 g plain flour',
      '30 g cocoa powder',
      '250 g cream cheese',
      '60 g caster sugar for the cheese layer',
      '1 egg, about 50 g, for the cheese layer',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm square tin. Melt the butter and chocolate together, stir until smooth and cool for 5 minutes.',
      'Beat in the 200 g sugar and 3 eggs, then fold in the flour and cocoa.',
      'Beat the cream cheese with the 60 g sugar, the egg and the vanilla until smooth.',
      'Spread two-thirds of the batter in the tin, dollop on the cream cheese, add the rest of the batter and swirl with a knife.',
      'Bake for 40 minutes until the edges are set. Cool completely, then chill before cutting into 16.'
    ],
    tips: [
      'Beat the eggs in well.',
      'Swirl gently.',
      'If your oven runs hot, check at 32 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Fresh raspberries'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [290, 4, 28, 18, 2, 21, 60]
  },

  'cherry-bakewell': {
    d: 'Small shortcrust tarts with cherry jam and almond sponge, topped with white icing and a glace cherry.',
    meta: 'Cherry Bakewell: shortcrust tarts with cherry jam, almond sponge and white icing. Makes twelve, baked for 25 minutes.',
    kw: ['cherry bakewell', 'cherry bakewell tarts', 'homemade cherry bakewells', 'iced cherry bakewell', 'cherry bakewell tarts with icing'],
    why: 'Is a Cherry Bakewell a tart or a cake? It is both, which is why people who cannot decide between the two end up buying a box. The pastry holds a layer of jam, a puffed almond sponge and a thin white lid of icing.\n\nRoll the pastry thin, about 3 mm, and cut rounds that fit the holes of a 12-hole tin. Press them in without stretching. **Put only half a teaspoon of jam in each case.** Jam boils and rises through the sponge if there is too much, and the tarts look messy.\n\nThe filling is a frangipane: butter, sugar, eggs, ground almonds and a little flour, beaten into a smooth paste. Spoon it over the jam so that it nearly fills each case. It puffs as it bakes and settles as it cools.\n\nBake at 190°C for 25 minutes. If your oven runs hot, check at 20 minutes. Cool completely, spread with icing made from icing sugar and water, and top each with half a glace cherry.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '80 g cherry jam',
      '100 g butter, softened',
      '100 g caster sugar',
      '2 eggs, about 100 g',
      '100 g ground almonds',
      '25 g plain flour',
      '150 g icing sugar',
      '2 tbsp water',
      '6 glace cherries, about 40 g, halved'
    ],
    st: [
      'Heat the oven to 190°C and grease a 12-hole tart tin. Roll the pastry to 3 mm, cut 12 rounds and press into the tin.',
      'Put half a teaspoon of cherry jam in each case.',
      'Beat the butter and caster sugar for 3 minutes. Beat in the eggs, then fold in the ground almonds and flour. Spoon over the jam.',
      'Bake for 25 minutes until golden. Cool completely.',
      'Stir the icing sugar with the water, spread over the tarts and top each with half a cherry.'
    ],
    tips: [
      'Use only a little jam.',
      'Roll the pastry thin.',
      'If your oven runs hot, check at 20 minutes.',
      'Ice only when cold.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Custard', 'Cold milk'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [347, 5, 39, 19, 2, 25, 170]
  },

  'chiffon-cake': {
    d: 'A tall, airy cake made with oil and whipped egg whites, baked in a tube tin and cooled upside down.',
    meta: 'Chiffon cake: a tall, airy lemon cake made with oil and whipped egg whites. Twelve slices, baked for 50 minutes.',
    kw: ['chiffon cake', 'lemon chiffon cake', 'classic chiffon cake', 'light chiffon cake', 'chiffon cake recipe'],
    why: 'Get the whites right and the cake rises by itself. That is the quick tip for a chiffon cake, and the reason it takes more care than most.\n\nSeparate the eggs while they are cold, and make sure not a speck of yolk gets into the whites. Wipe the bowl with a little vinegar first, since any grease stops the whites from whipping. Whip them with the cream of tartar until they stand in stiff, glossy peaks. **Fold the whites into the batter in three parts.** The first loosens the batter and the next two keep the air in.\n\nBake in an ungreased tube tin at 170°C for 50 minutes. The batter climbs the sides of the tin as it bakes, so greasing it makes the cake slip. If your oven runs hot, check at 42 minutes.\n\nTurn the tin upside down at once, standing it on its feet or on a bottle neck, and leave it for 1 hour. This keeps the cake from collapsing while it sets. Loosen the edges with a knife to release.',
    ing: [
      '250 g plain flour',
      '300 g caster sugar',
      '3 tsp baking powder',
      '1 tsp salt',
      '120 ml sunflower oil',
      '6 egg yolks, about 120 g',
      '180 ml water',
      '1 tsp vanilla extract',
      '1 lemon, zest only',
      '8 egg whites, about 240 g',
      '1/2 tsp cream of tartar'
    ],
    st: [
      'Heat the oven to 170°C. Whisk the flour, 150 g of the sugar, baking powder and salt in a large bowl.',
      'Make a well and add the oil, egg yolks, water, vanilla and lemon zest. Whisk until smooth.',
      'Whip the egg whites with the cream of tartar until foamy, then add the remaining 150 g sugar a spoonful at a time and whip to stiff peaks.',
      'Fold the whites into the batter in three parts. Pour into an ungreased 25 cm tube tin.',
      'Bake for 50 minutes until a skewer comes out clean. Turn the tin upside down at once and cool for 1 hour before releasing.'
    ],
    tips: [
      'Keep every trace of yolk out of the whites.',
      'Do not grease the tin.',
      'If your oven runs hot, check at 42 minutes.',
      'Cool upside down.'
    ],
    pair: ['Fresh berries', 'Whipped cream', 'Lemon curd', 'Hot tea'],
    store: 'Keeps in an airtight tin for 3 days.',
    rest: [60, 'Cooling upside down'],
    nut: [300, 6, 42, 12, 1, 25, 360]
  },

  'chocolate-bark': {
    d: 'A thin slab of melted dark chocolate scattered with pistachios, dried cranberries and sea salt, set and broken into shards.',
    meta: 'Chocolate bark: melted dark chocolate with pistachios, cranberries and sea salt, set and broken into shards. Twelve servings, chilled for 1 hour.',
    kw: ['chocolate bark', 'dark chocolate bark', 'pistachio cranberry chocolate bark', 'easy chocolate bark', 'homemade chocolate bark'],
    why: 'Three ingredients and a tray: that is all the equipment bark needs. The result looks like something from a shop and is eaten in a day.\n\nChop the chocolate small and melt it gently, in a bowl over barely simmering water or in the microwave in 20 second bursts. Stir between each. **Take it off the heat before the last pieces have melted.** The warmth of the bowl will finish the job, and chocolate that gets too hot turns dull and grainy when it sets.\n\nPour onto a lined tray and spread with a spatula to about 5 mm. Scatter over the pistachios, the cranberries and a pinch of flaky salt while the chocolate is still wet, so that they stick. Press them in lightly.\n\nLeave the tray in the fridge for 1 hour, until the chocolate is firm and snaps cleanly. Break it into rough shards by hand. Store in a tin with paper between the layers, away from the heat.',
    ing: [
      '300 g dark chocolate, chopped',
      '50 g shelled pistachios, chopped',
      '30 g dried cranberries',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Line a tray with baking paper. Melt the chocolate in short bursts over 5 minutes, stirring, taking it off the heat before the last pieces have melted.',
      'Pour onto the tray and spread to about 5 mm thick.',
      'Scatter with the pistachios, cranberries and sea salt, pressing them in lightly.',
      'Chill for 1 hour until firm, then break into shards.'
    ],
    tips: [
      'Do not overheat the chocolate.',
      'Add the toppings while it is wet.',
      'Spread it to an even thickness.',
      'Store it somewhere cool.'
    ],
    pair: ['Hot coffee', 'Cheese board', 'Fresh fruit', 'Dessert wine'],
    store: 'Keeps in a cool place or the fridge for 2 weeks.',
    rest: [60, 'Chilling'],
    nut: [179, 2, 18, 11, 3, 14, 100]
  },

  'chocolate-beetroot-cake': {
    d: 'A dark, fudgy chocolate cake made with cooked beetroot, which keeps the crumb soft and moist.',
    meta: 'Chocolate beetroot cake: a dark, fudgy chocolate cake made with cooked beetroot. Twelve slices, baked for 45 minutes.',
    kw: ['chocolate beetroot cake', 'beetroot chocolate cake', 'chocolate cake with beetroot', 'moist beetroot chocolate cake', 'british chocolate beetroot cake'],
    why: 'Beetroot is the hidden ingredient here, and nobody tastes it. What it does is add moisture and a faint earthy sweetness that deepens the chocolate.\n\nUse cooked beetroot from a vacuum pack, not pickled, which would make the cake sour. Blend it to a smooth puree with a splash of water, so that no flecks remain. **Dry the puree slightly on kitchen paper if it looks very wet.** A watery puree makes a heavy cake.\n\nMelt the butter and chocolate together and let it cool for 10 minutes before the eggs go in. Beat in the sugar, eggs and beetroot, then fold in the flour and cocoa gently. The batter will be a dark, glossy brown.\n\nBake at 170°C for 45 minutes. If your oven runs hot, check at 36 minutes. A skewer should come out with a few moist crumbs. Cool in the tin and dust with icing sugar, or top with a simple chocolate ganache.',
    ing: [
      '250 g cooked beetroot, pureed',
      '150 g dark chocolate',
      '150 g butter',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '150 g self-raising flour',
      '30 g cocoa powder',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 170°C and line a 23 cm round tin. Melt the chocolate and butter together over low heat and cool for 10 minutes.',
      'Beat in the sugar and eggs, then stir in the beetroot puree.',
      'Fold in the flour and cocoa until just combined. Pour into the tin.',
      'Bake for 45 minutes until a skewer comes out with a few moist crumbs. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Use cooked beetroot, not pickled.',
      'Blend the puree smooth.',
      'If your oven runs hot, check at 36 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Whipped cream', 'Raspberries', 'Hot coffee', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [312, 4, 38, 16, 3, 25, 40]
  },

  'chocolate-cream-pie': {
    d: 'A baked pastry case filled with dark chocolate custard and topped with whipped cream.',
    meta: 'Chocolate cream pie: a pastry case filled with dark chocolate custard and whipped cream. Eight servings, chilled for 4 hours.',
    kw: ['chocolate cream pie', 'classic chocolate cream pie', 'chocolate custard pie', 'chocolate pie with whipped cream', 'homemade chocolate cream pie'],
    why: 'Where does a chocolate cream pie go wrong? The pastry goes soft, the custard turns to a skin, or the filling runs when it is cut. All three have a fix.\n\nBake the pastry blind at 190°C for 15 minutes, with baking paper and beans, so that the case is crisp and dry before the filling goes in. A case that is only partly baked turns soggy under wet custard. **Whisk the custard constantly while it thickens.** The cornflour catches at the base of the pan and lumps if left alone.\n\nCook the custard over medium heat for about 8 minutes, until it thickens and a bubble pops on the surface. Take it off the heat, add the chocolate and butter, and stir until glossy. Pour it into the case while hot.\n\nPress cling film on the surface to prevent a skin, and chill for 4 hours. Spread the whipped cream over the top just before serving, and finish with chocolate shavings. If your oven runs hot, check the pastry at 12 minutes.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '500 ml milk',
      '100 g caster sugar',
      '4 egg yolks, about 80 g',
      '30 g cornflour',
      '150 g dark chocolate, chopped',
      '20 g butter',
      '250 ml double cream',
      '2 tbsp caster sugar',
      '20 g dark chocolate, shaved'
    ],
    st: [
      'Heat the oven to 190°C. Line a 23 cm pie tin with the pastry, prick the base, cover with baking paper and beans and bake for 15 minutes. Remove the paper and beans and bake for 5 minutes more. Cool.',
      'Whisk the milk, 100 g sugar, egg yolks and cornflour in a pan over medium heat for 8 minutes until thick.',
      'Off the heat, stir in the chopped chocolate and butter until glossy. Pour into the case, cover the surface with cling film and chill for 4 hours.',
      'Whip the cream with the 2 tbsp sugar and spread over the pie. Finish with the shaved chocolate.'
    ],
    tips: [
      'Bake the pastry fully.',
      'Whisk the custard constantly.',
      'Cover the surface to stop a skin.',
      'Add the cream just before serving.'
    ],
    pair: ['Hot coffee', 'Fresh raspberries', 'Cold milk', 'Dessert wine'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [240, 'Chilling'],
    nut: [568, 8, 53, 36, 3, 31, 280]
  },

  'chocolate-fondue': {
    d: 'A pot of melted dark chocolate and cream with honey, served with strawberries, banana, marshmallows and biscuits for dipping.',
    meta: 'Chocolate fondue: melted dark chocolate and cream with strawberries, banana and marshmallows for dipping. Six servings, ready in 10 minutes.',
    kw: ['chocolate fondue', 'easy chocolate fondue', 'dark chocolate fondue', 'chocolate fondue with fruit', 'homemade chocolate fondue'],
    why: 'What do you dip in chocolate fondue, and how do you stop it going wrong? Most of the answers are about the chocolate, not the fruit.\n\nUse a good dark chocolate, with at least 55 per cent cocoa, and chop it fine so that it melts in seconds. Heat the cream until it just starts to steam, pour it over the chocolate and wait a minute before stirring. **Do not let the cream boil.** Boiling cream can split the chocolate into an oily mess that no stirring will rescue.\n\nStir in the honey for a touch of sweetness and shine, and pour into a small pot over a tea light, or into a warmed bowl. If the chocolate begins to firm up while people dip, add a splash of warm cream and stir.\n\nPrepare the dippers while the chocolate melts. Strawberries, banana chunks, marshmallows and plain biscuits all work, and anything that is dry takes the chocolate best. Dry the fruit on kitchen paper first, because water makes the chocolate seize.',
    ing: [
      '200 g dark chocolate, chopped',
      '150 ml double cream',
      '1 tbsp honey',
      '200 g strawberries, hulled',
      '200 g banana, peeled and cut into chunks',
      '100 g marshmallows',
      '100 g plain biscuits'
    ],
    st: [
      'Heat the cream in a small pan over low heat for 3 minutes until it begins to steam. Do not boil.',
      'Pour it over the chopped chocolate, wait 1 minute, then stir until smooth. Stir in the honey.',
      'Pour into a warmed fondue pot or bowl. Arrange the dippers around it.'
    ],
    tips: [
      'Chop the chocolate fine.',
      'Do not boil the cream.',
      'Dry the fruit well.',
      'Warm the pot first.'
    ],
    pair: ['Fresh fruit', 'Dessert wine', 'Hot coffee', 'Fresh mint tea'],
    store: 'Best eaten at once. Leftover chocolate keeps in the fridge for 3 days and reheats gently.',
    nut: [459, 4, 59, 23, 5, 39, 80]
  },

  'cookie-dough-bites': {
    d: 'Small balls of eggless cookie dough made with heat-treated flour, chilled and dipped in dark chocolate.',
    meta: 'Cookie dough bites: eggless cookie dough made with heat-treated flour, dipped in dark chocolate. Makes twenty, cooked for 8 minutes.',
    kw: ['cookie dough bites', 'edible cookie dough bites', 'chocolate dipped cookie dough bites', 'eggless cookie dough balls', 'cookie dough bites with chocolate'],
    why: 'It looks like a cookie and eats like the dough from the bowl, and the reason it is safe is the flour. Raw flour can carry bacteria, so it must be heat-treated before you eat it unbaked.\n\nSpread the flour on a tray and bake it at 180°C for 5 minutes. Let it cool completely before you use it. **Do not skip the cooling.** Warm flour melts the butter and the dough turns greasy instead of firm.\n\nBeat the butter with the sugars, add the milk and vanilla, then stir in the flour, salt and chocolate chips. The dough should hold together when pressed and not stick to your hands. If it is crumbly, add milk a teaspoon at a time.\n\nRoll into 20 small balls and chill for 30 minutes. Melt the dark chocolate in short bursts, dip each ball and set on paper. These contain no egg, so they are not baked and are meant to be eaten cold. Keep them in the fridge.',
    ing: [
      '200 g plain flour',
      '115 g butter, softened',
      '100 g soft light brown sugar',
      '50 g caster sugar',
      '3 tbsp milk',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '100 g chocolate chips',
      '150 g dark chocolate for dipping'
    ],
    st: [
      'Heat the oven to 180°C. Spread the flour on a tray and bake for 5 minutes. Cool completely.',
      'Beat the butter with the brown and caster sugars for 2 minutes. Beat in the milk and vanilla.',
      'Stir in the cooled flour, salt and chocolate chips to a firm dough. Roll into 20 balls and chill for 30 minutes.',
      'Melt the dark chocolate in short bursts for 3 minutes, dip each ball and set on baking paper.'
    ],
    tips: [
      'Heat-treat the flour.',
      'Cool the flour completely.',
      'If your oven runs hot, check the flour at 4 minutes.',
      'Keep the bites in the fridge.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Fresh strawberries'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [164, 2, 21, 8, 1, 11, 40]
  },

  'courgette-and-lemon-cake': {
    d: 'A moist oil cake made with grated courgette and lemon zest, topped with a thin lemon icing.',
    meta: 'Courgette and lemon cake: a moist oil cake with grated courgette and lemon, topped with lemon icing. Ten slices, baked for 45 minutes.',
    kw: ['courgette and lemon cake', 'lemon courgette cake', 'zucchini lemon cake', 'courgette cake with lemon icing', 'moist courgette cake'],
    why: 'Squeeze the courgette dry and the cake is moist rather than soggy. That is the single most useful tip for this recipe, because the vegetable is mostly water.\n\nGrate it on the coarse side of the grater and wrap it in a clean tea towel. Twist and squeeze over the sink until almost no more liquid comes out. **The courgette should feel damp, not wet.** What is left disappears into the cake and leaves only moisture behind.\n\nWhisk the sugar, eggs and oil until pale, then fold in the courgette, lemon zest and juice and the flour. The batter is thick and lemon-scented. Pour into a lined 20 cm tin and bake at 170°C for 45 minutes. If your oven runs hot, check at 36 minutes.\n\nCool in the tin. The icing is just icing sugar and lemon juice, stirred to a pourable consistency and spread over the cooled cake. Use it only when the cake is cold, or the icing runs off.',
    ing: [
      '250 g courgette, coarsely grated',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '150 ml sunflower oil',
      '250 g self-raising flour',
      '2 lemons, zest only',
      '2 tbsp lemon juice',
      '150 g icing sugar',
      '2 tbsp lemon juice for the icing'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Squeeze the grated courgette dry in a tea towel.',
      'Whisk the sugar, eggs and oil for 3 minutes until pale. Fold in the courgette, lemon zest, 2 tbsp lemon juice and flour.',
      'Pour into the tin and bake for 45 minutes until a skewer comes out clean. Cool in the tin.',
      'Stir the icing sugar with the 2 tbsp lemon juice and spread over the cold cake.'
    ],
    tips: [
      'Squeeze the courgette dry.',
      'Use the zest as well as the juice.',
      'If your oven runs hot, check at 36 minutes.',
      'Ice only when cold.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Greek yoghurt', 'Fresh berries'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [388, 5, 56, 16, 1, 36, 20]
  }
};
