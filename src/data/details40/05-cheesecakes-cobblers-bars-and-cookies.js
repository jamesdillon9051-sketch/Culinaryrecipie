'use strict';

/**
 * Volume forty — freezer and fridge cakes, cheesecakes, slices and cookies.
 *
 * Desserts that wait: frozen and chilled cakes, five baked cheesecakes, and
 * the slices, bars and cookies of the United States, Australia and New
 * Zealand. Chilling and freezing times are declared as rest. Nutrition is
 * estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'ice-cream-cake': {
    d: 'Layers of vanilla and chocolate ice cream over a crushed chocolate biscuit base, topped with chocolate sauce and nuts.',
    meta: 'Ice cream cake: vanilla and chocolate ice cream layered over a chocolate biscuit base and frozen. Ten servings, no cooking.',
    kw: ['ice cream cake', 'easy ice cream cake', 'homemade ice cream cake', 'layered ice cream cake', 'chocolate and vanilla ice cream cake'],
    why: 'Ice cream cake is mostly patience. You spread, you wait, you spread again, and nothing goes near an oven.\n\nThe base is crushed chocolate sandwich biscuits and melted butter, pressed hard into a 20 cm springform tin. Press it with the back of a spoon until it is flat and tightly packed. **A firm base is what lets you cut clean slices.** A loose one crumbles when the knife goes through.\n\nLet the ice cream soften at room temperature until it spreads like thick paste, not until it is runny. Melted ice cream refreezes grainy and icy. Spread the vanilla first, level it, then add the chocolate.\n\nFreeze the cake for 5 hours until solid. Take it out 10 minutes before slicing, run a warm knife around the edge, and finish with chocolate sauce and chopped nuts just before serving. Choose ice creams that suit each other, as a mild vanilla beside a bitter chocolate shows off both.',
    ing: [
      '200 g chocolate sandwich biscuits, crushed',
      '60 g butter, melted',
      '600 g vanilla ice cream',
      '600 g chocolate ice cream',
      '4 tbsp chocolate sauce',
      '40 g chopped roasted hazelnuts'
    ],
    st: [
      'Line the base of a 20 cm springform tin with cling film. Mix the crushed biscuits with the melted butter and press firmly into the base.',
      'Soften the vanilla ice cream until spreadable and spread it over the base. Level the top.',
      'Spread the softened chocolate ice cream over the vanilla. Cover and freeze for 5 hours until solid.',
      'Run a warm knife around the edge and release the tin. Top with the chocolate sauce and hazelnuts and slice with a hot knife.'
    ],
    tips: [
      'Press the base down hard.',
      'Soften the ice cream, do not melt it.',
      'If the slices stick, dip the knife in hot water.',
      'Add the sauce at the last moment.'
    ],
    pair: ['Fresh berries', 'Whipped cream', 'Chocolate sauce', 'Hot coffee'],
    store: 'Keeps in the freezer for 1 month, covered. Soften for 10 minutes before slicing.',
    rest: [300, 'Freezing'],
    nut: [437, 6, 47, 25, 2, 36, 180]
  },

  'ice-box-cake': {
    d: 'Layers of digestive biscuits, whipped cream and strawberries that soften overnight in the fridge into a sliceable cake.',
    meta: 'Ice box cake: digestive biscuits layered with whipped cream and strawberries and chilled to a soft, sliceable cake. Ten servings, no oven.',
    kw: ['ice box cake', 'icebox cake', 'no bake ice box cake', 'strawberry ice box cake', 'biscuit and cream cake'],
    why: 'What stops an ice box cake from setting? Usually the cream was not whipped stiff enough, or the cake was cut too early.\n\nWhip the double cream with the icing sugar and vanilla until it holds a peak that stays when you lift the whisk. Stop there. Over-whipped cream turns grainy. **Stiff cream is the structure.** The biscuits supply only flavour.\n\nSpread a little cream on the dish to hold the first layer of biscuits, then alternate biscuits, cream and sliced strawberries, ending with cream. Press each biscuit layer in lightly.\n\nCover and chill for 6 hours. During that time the cream draws moisture from the biscuits, which collapse from crisp to cake-soft. Cut with a hot knife and scatter with grated chocolate. Do not skip the wait; the cake falls apart if cut early. Slice a few extra strawberries to lay across the top, since the cream hides the fruit inside.',
    ing: [
      '500 ml double cream',
      '3 tbsp icing sugar',
      '1 tsp vanilla extract',
      '250 g digestive biscuits',
      '300 g strawberries, hulled and sliced',
      '30 g dark chocolate, grated'
    ],
    st: [
      'Whip the cream with the icing sugar and vanilla until it holds stiff peaks.',
      'Spread a spoonful of cream in a 23 cm square dish. Cover with a layer of biscuits, then cream, then strawberries.',
      'Repeat the layers, finishing with cream. Cover and chill for 6 hours.',
      'Scatter with the grated chocolate and cut into squares with a hot knife.'
    ],
    tips: [
      'Whip the cream until stiff.',
      'Do not cut it early.',
      'If the biscuits are still crisp at 6 hours, give it longer.',
      'Dip the knife in hot water between slices.'
    ],
    pair: ['Fresh strawberries', 'Hot tea', 'Raspberry sauce', 'Sparkling wine'],
    store: 'Keeps in the fridge for 2 days.',
    rest: [360, 'Chilling'],
    nut: [332, 3, 26, 24, 2, 13, 140]
  },

  'lemon-cheesecake': {
    d: 'A baked cheesecake with a digestive biscuit base and a smooth lemon cream cheese filling.',
    meta: 'Lemon cheesecake: a baked cheesecake with a biscuit base and a smooth lemon filling. Ten slices, baked for 50 minutes then chilled.',
    kw: ['lemon cheesecake', 'baked lemon cheesecake', 'classic lemon cheesecake', 'lemon cream cheese cheesecake', 'homemade lemon cheesecake'],
    why: 'It looks like a plain cheesecake and eats like a lemon tart, which is why the zest matters more than the juice. Juice adds sourness, while zest carries the actual lemon flavour.\n\nBeat the cream cheese with the sugar until smooth, using room-temperature cheese so no lumps remain. Add the eggs one at a time and mix on low speed. **Overmixing puts air in, and air makes the top crack.** Stir in the sour cream, zest, juice and flour gently.\n\nPress the biscuit crumbs and butter into a 23 cm springform tin, pour in the filling and bake at 160°C for 50 minutes. The edge should be set and the middle should still wobble. If your oven runs hot, check at 40 minutes.\n\nCool in the tin for 1 hour, then chill for 5 hours before slicing. A thin spoonful of lemon curd on top before serving adds shine and an extra sharpness.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g cream cheese, at room temperature',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '150 ml sour cream',
      '3 lemons, zest of 3 and juice of 2',
      '2 tbsp plain flour'
    ],
    st: [
      'Heat the oven to 160°C. Mix the crushed biscuits with the melted butter and press into the base of a 23 cm springform tin.',
      'Beat the cream cheese and sugar until smooth. Beat in the eggs one at a time on low speed.',
      'Stir in the sour cream, lemon zest, juice and flour. Pour over the base.',
      'Bake for 50 minutes until the edge is set and the middle still wobbles. Cool in the tin for 1 hour.',
      'Chill for 5 hours before releasing the tin and slicing.'
    ],
    tips: [
      'Use cream cheese at room temperature.',
      'Mix on low speed.',
      'If your oven runs hot, check at 40 minutes.',
      'Slice with a hot knife.'
    ],
    pair: ['Fresh berries', 'Whipped cream', 'Lemon curd', 'Hot tea'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [360, 'Cooling and chilling'],
    nut: [492, 8, 34, 36, 1, 22, 300]
  },

  'strawberry-cheesecake': {
    d: 'A baked vanilla cheesecake on a biscuit base, topped with a glossy strawberry sauce and fresh strawberries.',
    meta: 'Strawberry cheesecake: a baked vanilla cheesecake with a strawberry sauce on top. Ten slices, baked for 50 minutes then chilled.',
    kw: ['strawberry cheesecake', 'baked strawberry cheesecake', 'classic strawberry cheesecake', 'strawberry topped cheesecake', 'homemade strawberry cheesecake'],
    why: 'Why does a cheesecake crack, and how do you stop it? It cracks when the filling is overbaked or cooled too quickly.\n\nBake at 160°C for 50 minutes and take it out while the middle is still wobbly. The centre sets as it cools. **A wobble the size of a coin is exactly right.** If the whole surface is firm, the cake has gone too far.\n\nBeat the cream cheese and sugar on low speed, beat in the eggs and vanilla, and stir in the sour cream and flour. Pour over the biscuit base and bake.\n\nCool in the tin for 1 hour, then chill for 5 hours. While it chills, simmer 200 g of the strawberries with a spoonful of sugar for 5 minutes into a sauce. If your oven runs hot, check the cheesecake at 40 minutes. Spoon the cooled sauce over the top and finish with sliced strawberries.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g cream cheese, at room temperature',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '1 tsp vanilla extract',
      '150 ml sour cream',
      '2 tbsp plain flour',
      '400 g strawberries, hulled',
      '2 tbsp caster sugar for the sauce'
    ],
    st: [
      'Heat the oven to 160°C. Press the biscuits mixed with the butter into a 23 cm springform tin.',
      'Beat the cream cheese and 150 g sugar on low speed. Beat in the eggs and vanilla, then stir in the sour cream and flour. Pour onto the base.',
      'Bake for 50 minutes until set at the edge with a small wobble in the middle. Cool in the tin for 1 hour.',
      'Simmer 200 g of the strawberries with the 2 tbsp sugar for 5 minutes until syrupy, then cool.',
      'Chill the cheesecake for 5 hours. Spoon over the sauce and top with the remaining sliced strawberries.'
    ],
    tips: [
      'Mix on a low speed.',
      'Take it out with a slight wobble in the middle.',
      'If your oven runs hot, check at 40 minutes.',
      'Add the topping just before serving.'
    ],
    pair: ['Whipped cream', 'Fresh strawberries', 'Hot tea', 'Sparkling wine'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [360, 'Cooling and chilling'],
    nut: [508, 8, 38, 36, 1, 26, 300]
  },

  'chocolate-cheesecake': {
    d: 'A rich baked chocolate cheesecake on a chocolate biscuit base, made with melted dark chocolate and cocoa.',
    meta: 'Chocolate cheesecake: a rich baked cheesecake on a chocolate biscuit base. Ten slices, baked for 50 minutes then chilled.',
    kw: ['chocolate cheesecake', 'baked chocolate cheesecake', 'rich chocolate cheesecake', 'dark chocolate cheesecake', 'homemade chocolate cheesecake'],
    why: 'Dark chocolate, cream cheese, eggs, sugar: four things you can find in any supermarket, and one dessert that tastes far more expensive than it is.\n\nMelt 200 g of the chocolate gently, either over a pan of barely simmering water or in the microwave in short bursts, and let it cool for 10 minutes. **Hot chocolate scrambles the eggs.** The chocolate should be warm and fluid, not hot.\n\nBeat the cream cheese and sugar until smooth, beat in the eggs, then fold in the cooled chocolate, cocoa and sour cream. The filling should be thick and glossy.\n\nPour it onto a base of crushed chocolate biscuits and melted butter and bake at 160°C for 50 minutes. If your oven runs hot, check at 40 minutes. The edge is set and the middle still moves slightly. Cool in the tin for 1 hour, then chill for 5 hours. Use a chocolate you enjoy eating on its own, as its flavour comes through in every slice.',
    ing: [
      '200 g chocolate sandwich biscuits, crushed',
      '80 g butter, melted',
      '200 g dark chocolate',
      '500 g cream cheese, at room temperature',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '150 ml sour cream',
      '2 tbsp cocoa powder'
    ],
    st: [
      'Heat the oven to 160°C. Mix the biscuits and butter and press into a 23 cm springform tin.',
      'Melt the chocolate and cool it for 10 minutes.',
      'Beat the cream cheese and sugar until smooth. Beat in the eggs one at a time, then fold in the chocolate, cocoa and sour cream.',
      'Pour onto the base and bake for 50 minutes until the edge is set. Cool in the tin for 1 hour.',
      'Chill for 5 hours before slicing with a hot knife.'
    ],
    tips: [
      'Cool the melted chocolate first.',
      'Mix on low speed.',
      'If your oven runs hot, check at 40 minutes.',
      'Use a hot knife for clean slices.'
    ],
    pair: ['Raspberries', 'Whipped cream', 'Hot coffee', 'Red wine'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [360, 'Cooling and chilling'],
    nut: [555, 7, 44, 39, 3, 34, 260]
  },

  'caramel-cheesecake': {
    d: 'A baked vanilla cheesecake swirled with caramel sauce and finished with more caramel and sea salt.',
    meta: 'Caramel cheesecake: a baked vanilla cheesecake swirled with caramel sauce and sea salt. Ten slices, baked for 50 minutes then chilled.',
    kw: ['caramel cheesecake', 'baked caramel cheesecake', 'salted caramel cheesecake', 'caramel swirl cheesecake', 'homemade caramel cheesecake'],
    why: 'A Sunday dessert for a table of ten, made on Saturday. The cheesecake needs 6 hours of cooling and chilling, so it suits being made ahead.\n\nThe caramel is bought or home-made, but it needs to be thick enough to hold a swirl. Thin caramel disappears into the filling. **Warm it slightly so it pours, then swirl once only.** More swirling blends it into a uniform beige.\n\nBeat the cream cheese with the sugar and eggs on low speed, add the vanilla, sour cream and flour, and pour half the filling onto the biscuit base. Drizzle with caramel, add the rest of the filling, and drag a knife through in loose figure eights.\n\nBake at 160°C for 50 minutes. If your oven runs hot, check at 40 minutes. Cool in the tin for 1 hour, chill for 5 hours, then top with more caramel and the sea salt. Slice it cold and let each piece stand for 10 minutes, when the caramel softens and the flavour opens up.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g cream cheese, at room temperature',
      '120 g caster sugar',
      '3 eggs, about 150 g',
      '1 tsp vanilla extract',
      '150 ml sour cream',
      '2 tbsp plain flour',
      '200 g caramel sauce',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 160°C. Press the biscuits mixed with the butter into a 23 cm springform tin.',
      'Beat the cream cheese, sugar and eggs on low speed. Stir in the vanilla, sour cream and flour.',
      'Pour half the filling onto the base, drizzle with 100 g of the caramel, add the remaining filling and swirl once with a knife.',
      'Bake for 50 minutes until set at the edge. Cool in the tin for 1 hour.',
      'Chill for 5 hours. Drizzle with the remaining caramel and scatter with the sea salt.'
    ],
    tips: [
      'Warm the caramel so it pours.',
      'Swirl just once.',
      'If your oven runs hot, check at 40 minutes.',
      'Add the salt at the end.'
    ],
    pair: ['Vanilla ice cream', 'Sliced pear', 'Hot coffee', 'Dessert wine'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [360, 'Cooling and chilling'],
    nut: [554, 8, 45, 38, 1, 31, 450]
  },

  'blueberry-cheesecake': {
    d: 'A baked vanilla cheesecake on a biscuit base, topped with a spoonful of blueberry sauce and fresh blueberries.',
    meta: 'Blueberry cheesecake: a baked vanilla cheesecake topped with blueberry sauce. Ten slices, baked for 50 minutes then chilled.',
    kw: ['blueberry cheesecake', 'baked blueberry cheesecake', 'classic blueberry cheesecake', 'blueberry topped cheesecake', 'homemade blueberry cheesecake'],
    why: 'Biscuit crumbs, cream cheese, eggs, blueberries: four things, and a topping that turns a plain cheesecake into the one people ask for.\n\nThe base is crushed digestives and butter. Press it flat and up the sides slightly, so the filling has a rim to sit in. Beat the cream cheese with the sugar until smooth, add the eggs and vanilla, then the sour cream and flour. **Use low speed throughout.** High speed whips in air, and air is what cracks the top.\n\nBake at 160°C for 50 minutes. If your oven runs hot, check at 40 minutes. The centre should wobble gently. Cool in the tin for 1 hour.\n\nSimmer 200 g of the blueberries with the sugar and a splash of water for 5 minutes until jammy, and cool. Chill the cheesecake for 5 hours, then top with the sauce and the remaining berries. Frozen blueberries make a perfectly good sauce, so there is no need to wait for the season.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g cream cheese, at room temperature',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '1 tsp vanilla extract',
      '150 ml sour cream',
      '2 tbsp plain flour',
      '400 g blueberries',
      '2 tbsp caster sugar for the sauce'
    ],
    st: [
      'Heat the oven to 160°C. Press the crushed biscuits mixed with the butter into the base of a 23 cm springform tin.',
      'Beat the cream cheese and 150 g sugar until smooth. Beat in the eggs and vanilla on low speed, then stir in the sour cream and flour.',
      'Pour onto the base and bake for 50 minutes until the edge is set. Cool in the tin for 1 hour.',
      'Simmer 200 g of the blueberries with the 2 tbsp sugar and a splash of water for 5 minutes. Cool.',
      'Chill the cheesecake for 5 hours, then top with the sauce and the remaining berries.'
    ],
    tips: [
      'Beat on low speed.',
      'Cool the sauce before it goes on.',
      'If your oven runs hot, check at 40 minutes.',
      'Press the base up the sides slightly.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Hot tea', 'Sparkling wine'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [360, 'Cooling and chilling'],
    nut: [520, 8, 41, 36, 2, 28, 300]
  },

  'blueberry-cobbler': {
    d: 'Juicy blueberries with a lemon and sugar syrup under a golden, tender scone-style topping.',
    meta: 'Blueberry cobbler: juicy blueberries under a golden scone-style topping. Six servings, baked for 40 minutes.',
    kw: ['blueberry cobbler', 'easy blueberry cobbler', 'baked blueberry cobbler', 'blueberry cobbler with biscuit topping', 'homemade blueberry cobbler'],
    why: 'A cobbler is a Sunday dish for a table of six, and it takes less effort than a pie. There is no pastry to roll and no lattice to weave.\n\nThe fruit is blueberries tossed with sugar, cornflour and lemon juice. The cornflour thickens the juice as it cooks, so it does not run. **Taste a berry first.** If they are very sweet, use less sugar, and if they are tart, use the full amount.\n\nThe topping is a soft dough of flour, sugar, cold butter and milk. Rub the butter in until the mixture looks like crumbs, stir in the milk, and drop spoonfuls over the fruit. Leave gaps so the juice can bubble up.\n\nBake at 190°C for 40 minutes, until the topping is deep gold and the fruit is bubbling at the edges. If your oven runs hot, check at 30 minutes. The cobbler is at its best when warm, with the cold cream melting into the hot juice.',
    ing: [
      '400 g blueberries',
      '80 g caster sugar',
      '1 tbsp cornflour',
      '1 tbsp lemon juice',
      '150 g self-raising flour',
      '60 g caster sugar for the topping',
      '60 g cold butter, cubed',
      '120 ml milk'
    ],
    st: [
      'Heat the oven to 190°C. Toss the blueberries with the 80 g sugar, cornflour and lemon juice in a 1.5 litre baking dish.',
      'Rub the butter into the flour and 60 g sugar until crumbly. Stir in the milk to a soft dough.',
      'Drop spoonfuls of dough over the fruit, leaving gaps.',
      'Bake for 40 minutes until the topping is golden and the fruit is bubbling. Cool for 10 minutes.'
    ],
    tips: [
      'Taste the berries before adding all the sugar.',
      'Leave gaps in the topping.',
      'If your oven runs hot, check at 30 minutes.',
      'Cool for 10 minutes so the juice thickens.'
    ],
    pair: ['Vanilla ice cream', 'Pouring cream', 'Custard', 'Hot tea'],
    store: 'Best on the day. Keeps in the fridge for 2 days and reheats in a 160°C oven for 12 minutes.',
    nut: [313, 4, 54, 9, 2, 31, 10]
  },

  'caramel-apples': {
    d: 'Small crisp apples on sticks, dipped in melted soft caramel and left to set.',
    meta: 'Caramel apples: crisp apples on sticks, dipped in melted soft caramel and left to set. Six servings, 5 minutes to melt.',
    kw: ['caramel apples', 'easy caramel apples', 'homemade caramel apples', 'toffee apples with caramel', 'candy apples with caramel'],
    why: 'They look like a candy apple and eat like one, but the caramel is soft and chewy, not glassy. The cooking is only a gentle melt, so no thermometer is needed.\n\nWax is the problem. Shop apples are coated, and caramel slides off wax. Dip each apple in hot water for 10 seconds and rub it dry with a cloth. **A clean, dry apple is the only trick.** If the skin is damp, the caramel pools at the bottom.\n\nPush a stick into the stem end, then melt the unwrapped caramels with the milk in a pan over low heat for 5 minutes, stirring until smooth. Tilt the pan and roll each apple through.\n\nLet the extra drip off, set the apples on a tray lined with greaseproof paper and leave them until firm. Roll in chopped nuts before the caramel sets, if you like. Pick small apples, because a large one is hard to bite through once the caramel sets around it.',
    ing: [
      '6 small crisp apples, about 900 g',
      '300 g soft caramel sweets, unwrapped',
      '2 tbsp milk',
      '40 g chopped roasted peanuts'
    ],
    st: [
      'Dip the apples in hot water for 10 seconds, rub them dry and push a stick into each stem end.',
      'Melt the caramels with the milk in a pan over low heat for 5 minutes, stirring until smooth.',
      'Tilt the pan and roll each apple through the caramel. Let the excess drip off.',
      'Roll in the peanuts if you like and set on a lined tray until firm.'
    ],
    tips: [
      'Remove the wax from the skin.',
      'Dry the apples completely.',
      'If the caramel thickens, stir in a spoonful of milk.',
      'Set them on a lined tray, not a plate.'
    ],
    pair: ['Hot chocolate', 'Cinnamon tea', 'Vanilla ice cream', 'Mulled cider'],
    store: 'Best on the day. Keeps in the fridge for 2 days; the apple gets softer.',
    nut: [337, 4, 60, 9, 4, 46, 80]
  },

  'pineapple-lumps-slice': {
    d: 'A no-bake slice of crushed biscuit, melted chocolate-coated pineapple chews and condensed milk, chilled until firm.',
    meta: 'Pineapple Lumps slice: a no-bake slice of crushed biscuit and melted pineapple chews, chilled until firm. Sixteen pieces.',
    kw: ['pineapple lumps slice', 'nz pineapple lumps slice', 'no bake pineapple lumps slice', 'new zealand slice', 'pineapple lumps chocolate slice'],
    why: 'Biscuit crumbs, butter, condensed milk and one famous New Zealand sweet. That is all the slice contains, and no oven is needed.\n\nPineapple Lumps are chocolate-coated pineapple-flavoured chews. Melt them gently with the condensed milk, stirring until the mixture is smooth, and it becomes a thick, glossy, pineapple-scented chocolate caramel. **Keep the heat low.** Chocolate scorches and the chews turn sticky.\n\nThe base is crushed malt or plain sweet biscuits mixed with melted butter, pressed into a lined tin. Press hard so it holds when cut.\n\nSpread the melted topping over the base while it is still warm so the two stick together. Chill for 3 hours until firm. Cut with a hot knife into 16 small pieces, as the slice is rich and a small square goes a long way. Keep the slice cold when serving, as it softens and loses its shape at room temperature. A cup of hot tea cuts through the sweetness nicely.',
    ing: [
      '250 g plain sweet biscuits, crushed',
      '100 g butter, melted',
      '200 g chocolate-coated pineapple chews (Pineapple Lumps)',
      '200 g sweetened condensed milk'
    ],
    st: [
      'Line a 20 cm square tin with cling film. Mix the crushed biscuits with the melted butter and press firmly into the tin.',
      'Melt the pineapple chews with the condensed milk in a pan over low heat, stirring until smooth.',
      'Pour over the base while warm and spread level.',
      'Chill for 3 hours until firm. Lift out and cut into 16 pieces with a hot knife.'
    ],
    tips: [
      'Keep the heat low.',
      'Press the base hard.',
      'If the topping is too thick to spread, warm it for a minute.',
      'Dip the knife in hot water between cuts.'
    ],
    pair: ['Hot tea', 'Flat white', 'Vanilla ice cream', 'Cold milk'],
    store: 'Keeps in the fridge for 5 days.',
    rest: [180, 'Chilling'],
    nut: [156, 2, 19, 8, 1, 11, 70]
  },

  'apple-slice': {
    d: 'A buttery shortcrust base layered with stewed apple and topped with an oat crumble, baked and cut into squares.',
    meta: 'Apple slice: a buttery base layered with stewed apple and an oat crumble top. Sixteen pieces, baked for 35 minutes.',
    kw: ['apple slice', 'australian apple slice', 'apple crumble slice', 'apple slice with oat topping', 'homemade apple slice'],
    why: 'The first sign it is ready is the smell: butter, apple and cinnamon rising from the oven together. The slice has three layers, and each one needs only a small effort.\n\nThe base is flour, butter, sugar and an egg, pressed into the tin and baked for a few minutes first, so the apple does not turn it soggy. The filling is peeled apples cooked with a spoonful of sugar and cinnamon until the juice has gone. **Stew it dry.** Wet filling makes the base and crumble gluey.\n\nThe topping is flour, butter, sugar and oats rubbed to coarse crumbs and scattered loosely, not pressed.\n\nBake at 180°C for 35 minutes, until the top is deeply golden. If your oven runs hot, check at 28 minutes. Cool completely in the tin before cutting into 16 squares. Serve squares warm with a spoonful of custard for a dessert, or cold with tea.',
    ing: [
      '225 g plain flour',
      '125 g cold butter, cubed',
      '60 g caster sugar',
      '1 egg, about 50 g',
      '4 apples, about 600 g, peeled and diced',
      '2 tbsp caster sugar for the filling',
      '1 tsp ground cinnamon',
      '100 g plain flour for the topping',
      '60 g cold butter, cubed, for the topping',
      '60 g caster sugar for the topping',
      '40 g rolled oats'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin. Rub the 125 g butter into the 225 g flour and 60 g sugar, stir in the egg and press into the tin.',
      'Cook the apples with the 2 tbsp sugar and cinnamon in a pan for 8 minutes until soft and dry. Cool slightly.',
      'Rub the topping butter into the topping flour and sugar, then stir in the oats.',
      'Spread the apple over the base, scatter the crumble on top and bake for 35 minutes until golden. Cool in the tin before cutting.'
    ],
    tips: [
      'Cook the apple until it is dry.',
      'Scatter the topping loosely.',
      'If your oven runs hot, check at 28 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Hot tea', 'Cream'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [230, 3, 32, 10, 2, 13, 10]
  },

  'caramel-slice-bars': {
    d: 'A coconut and brown sugar base, a layer of golden condensed milk caramel and a topping of melted dark chocolate.',
    meta: 'Caramel slice bars: a coconut base, a layer of condensed milk caramel and dark chocolate on top. Sixteen pieces, then chilled.',
    kw: ['caramel slice bars', 'australian caramel slice', 'caramel slice', 'chocolate caramel slice bars', 'homemade caramel slice'],
    why: 'What goes wrong most often with a caramel slice? The caramel is undercooked and runs when cut, or overcooked and sets like toffee.\n\nCook the butter, condensed milk and golden syrup over medium heat for 8 minutes, stirring all the time. It should turn the colour of peanut butter and leave a trail when you drag the spoon through. **Do not stop stirring.** Condensed milk catches on the base of the pan in seconds.\n\nThe base is flour, coconut, brown sugar and melted butter, pressed into a lined tin and baked at 180°C for 12 minutes until pale gold. Pour the hot caramel over the hot base so the layers fuse.\n\nMelt the chocolate with the oil, spread it over the cooled caramel, and chill for 2 hours before cutting into 16 bars with a hot knife. Cut the slice while the chocolate is just set, because cold, hard chocolate cracks under the knife.',
    ing: [
      '150 g plain flour',
      '100 g desiccated coconut',
      '100 g soft light brown sugar',
      '125 g butter, melted',
      '395 g sweetened condensed milk',
      '100 g butter for the caramel',
      '2 tbsp golden syrup',
      '200 g dark chocolate',
      '1 tbsp sunflower oil'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin. Mix the flour, coconut, brown sugar and melted butter, press into the tin and bake for 12 minutes.',
      'Cook the condensed milk, 100 g butter and golden syrup in a pan over medium heat for 8 minutes, stirring, until golden and thick.',
      'Pour the caramel over the hot base. Cool completely.',
      'Melt the chocolate with the oil and spread over the caramel. Chill for 2 hours, then cut into 16 bars with a hot knife.'
    ],
    tips: [
      'Stir the caramel constantly.',
      'Pour it onto the hot base.',
      'If your oven runs hot, check the base at 10 minutes.',
      'Warm the knife for clean cuts.'
    ],
    pair: ['Flat white', 'Hot tea', 'Vanilla ice cream', 'Cold milk'],
    store: 'Keeps in the fridge for 5 days.',
    rest: [120, 'Chilling'],
    nut: [346, 4, 42, 18, 2, 31, 50]
  },

  'chocolate-chip-cookie-bars': {
    d: 'A chewy bar of brown sugar cookie dough with chocolate chips, baked in a single tin and cut into squares.',
    meta: 'Chocolate chip cookie bars: chewy brown sugar bars studded with chocolate chips. Sixteen pieces, baked for 25 minutes.',
    kw: ['chocolate chip cookie bars', 'easy chocolate chip cookie bars', 'chewy cookie bars', 'chocolate chip blondie bars', 'homemade cookie bars'],
    why: 'Most cookie bars come out dry, and the fix is to pull them from the oven before they look done. The middle should seem slightly underbaked, as it carries on cooking in the hot tin.\n\nMelted butter gives the chew. Mix it with the brown sugar, egg and vanilla, then stir in the flour and bicarbonate. No creaming is needed, which makes the bars very fast. **Do not overmix once the flour goes in.** A stiff dough makes a cakey bar.\n\nFold in 150 g of chocolate chips and press the dough into a lined 20 cm square tin. Press a few extra chips on top so the surface looks good.\n\nBake at 180°C for 25 minutes. If your oven runs hot, check at 20 minutes. The edges should be golden and the middle soft. Cool in the tin before cutting. A pinch of flaky salt on the top before baking balances the sweetness of the sugar and chips.',
    ing: [
      '150 g butter, melted',
      '150 g soft light brown sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '200 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '150 g chocolate chips'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin.',
      'Stir the melted butter, sugar, egg and vanilla together until smooth.',
      'Stir in the flour, bicarbonate and salt just until combined, then fold in the chocolate chips.',
      'Press into the tin and bake for 25 minutes until the edges are golden and the middle is just set. Cool in the tin, then cut into 16.'
    ],
    tips: [
      'Take them out while the middle looks soft.',
      'Do not overmix.',
      'If your oven runs hot, check at 20 minutes.',
      'Cool fully before cutting.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Hot tea'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [164, 2, 21, 8, 1, 9, 90]
  },

  'peanut-butter-chocolate-bars': {
    d: 'A no-bake bar of biscuit crumb and peanut butter, covered with melted milk chocolate and chilled until firm.',
    meta: 'Peanut butter chocolate bars: a no-bake biscuit and peanut butter base with chocolate on top. Sixteen pieces, chilled for 2 hours.',
    kw: ['peanut butter chocolate bars', 'no bake peanut butter chocolate bars', 'peanut butter bars with chocolate', 'chocolate peanut butter slice', 'easy peanut butter bars'],
    why: 'Biscuit crumbs, butter, peanut butter, icing sugar, chocolate: five things, no oven, and a bar that tastes like a famous sweet. Only the chocolate needs heat.\n\nBlitz the biscuits to fine crumbs. Coarse pieces make a bar that falls apart. Mix the crumbs with the melted butter, peanut butter and icing sugar into a dough that holds when squeezed. **If it crumbles, add a spoonful more peanut butter.**\n\nPress it firmly into a lined tin. The firmer the press, the cleaner the cut. A flat glass or the back of a spoon works better than your fingers.\n\nMelt the milk chocolate in the microwave for 2 minutes in short bursts, stirring between each, and spread it over the base. Chill for 2 hours until firm. Cut with a hot knife into 16 bars, and eat them cold. Cut the bars small, as the combination of peanut butter and chocolate is very rich.',
    ing: [
      '200 g digestive biscuits, crushed to fine crumbs',
      '120 g butter, melted',
      '200 g smooth peanut butter',
      '200 g icing sugar',
      '200 g milk chocolate'
    ],
    st: [
      'Line a 20 cm square tin with foil. Mix the biscuit crumbs, melted butter, peanut butter and icing sugar into a firm dough.',
      'Press the dough firmly into the tin and level the top.',
      'Melt the chocolate in short bursts in the microwave, stirring, and spread over the base.',
      'Chill for 2 hours until firm. Lift out and cut into 16 bars with a hot knife.'
    ],
    tips: [
      'Grind the biscuits finely.',
      'Press the base down firmly.',
      'If the chocolate seizes, stir in a teaspoon of oil.',
      'Warm the knife for clean cuts.'
    ],
    pair: ['Cold milk', 'Hot coffee', 'Banana slices', 'Hot chocolate'],
    store: 'Keeps in the fridge for 1 week.',
    rest: [120, 'Chilling'],
    nut: [247, 4, 24, 15, 1, 16, 70]
  },

  'double-chocolate-cookies': {
    d: 'Soft chocolate cookies made with cocoa and chocolate chips, baked until the edges are set and the middles are chewy.',
    meta: 'Double chocolate cookies: soft cocoa cookies packed with chocolate chips. Makes twenty, baked for 12 minutes.',
    kw: ['double chocolate cookies', 'chewy double chocolate cookies', 'chocolate chip cocoa cookies', 'soft double chocolate cookies', 'homemade double chocolate cookies'],
    why: 'Short on time? These need no chilling and no creaming, and they bake in 12 minutes.\n\nThe cocoa and the chips give the two chocolates. Use good cocoa, because it makes most of the flavour, and keep the chips whole so they stay as pockets of melted chocolate. **Pull them out when the middles still look underdone.** They firm up on the tray and stay chewy.\n\nCream the butter with the brown sugar for 2 minutes, mix in the egg and vanilla, and fold in the flour, cocoa and bicarbonate until just combined. The dough is soft and sticky.\n\nDrop tablespoons onto lined trays, 5 cm apart, and bake at 180°C for 12 minutes. If your oven runs hot, check at 9 minutes. Leave them on the tray for 5 minutes, since they are fragile warm. Press a few extra chocolate chips onto the tops as they come out of the oven for a bakery finish.',
    ing: [
      '125 g butter, softened',
      '150 g soft light brown sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '190 g plain flour',
      '40 g cocoa powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '150 g chocolate chips'
    ],
    st: [
      'Heat the oven to 180°C and line two trays.',
      'Beat the butter and sugar for 2 minutes. Mix in the egg and vanilla.',
      'Fold in the flour, cocoa, bicarbonate and salt, then the chocolate chips.',
      'Drop 20 tablespoons of dough onto the trays, 5 cm apart. Bake for 12 minutes until the edges are set. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Take them out while the middles are soft.',
      'Space the dough well apart.',
      'If your oven runs hot, check at 9 minutes.',
      'Leave them on the tray to firm up.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Hot chocolate'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [134, 2, 18, 6, 1, 7, 70]
  },

  'lemon-cookies': {
    d: 'Soft, cakey lemon cookies rolled in sugar and baked until the tops crack and the edges are pale gold.',
    meta: 'Lemon cookies: soft lemon cookies rolled in sugar and baked until the tops crack. Makes twenty, baked for 12 minutes.',
    kw: ['lemon cookies', 'soft lemon cookies', 'chewy lemon cookies', 'lemon sugar cookies', 'homemade lemon cookies'],
    why: 'Where does the lemon flavour come from, and why does it fade in the oven? Juice loses its edge in heat, but zest does not.\n\nUse the zest of two lemons, rubbed into the sugar before the butter goes in, and only a tablespoon of juice. More juice makes the dough wet and the cookies spread flat. **Zest carries the flavour that survives baking.**\n\nCream the butter and sugar, beat in the egg, zest and juice, and fold in the flour, bicarbonate and salt. The dough is soft but should hold a shape.\n\nRoll it into walnut-sized balls, roll them in caster sugar, and set them 5 cm apart. Bake at 180°C for 12 minutes, until the edges are barely coloured and the tops are cracked. If your oven runs hot, check at 9 minutes. Cool for 5 minutes on the tray. Roll the dough balls generously in the sugar, since the sugar crust gives the cracked, sparkling top.',
    ing: [
      '115 g butter, softened',
      '150 g caster sugar',
      '2 lemons, zest only',
      '1 egg, about 50 g',
      '1 tbsp lemon juice',
      '250 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '3 tbsp caster sugar for rolling'
    ],
    st: [
      'Heat the oven to 180°C and line two trays. Rub the zest into the 150 g sugar.',
      'Beat in the butter for 2 minutes, then the egg and lemon juice.',
      'Stir in the flour, bicarbonate and salt to a soft dough.',
      'Roll into 20 balls, coat in the rolling sugar and bake 5 cm apart for 12 minutes until the tops crack. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Use zest, not extra juice.',
      'Roll the balls evenly.',
      'If your oven runs hot, check at 9 minutes.',
      'Do not let them brown.'
    ],
    pair: ['Hot tea', 'Cold milk', 'Fresh berries', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [129, 2, 19, 5, 1, 10, 70]
  },

  'pistachio-shortbread': {
    d: 'Crumbly butter shortbread with chopped pistachios folded through, baked until pale gold and cut into fingers.',
    meta: 'Pistachio shortbread: crumbly butter shortbread with chopped pistachios, baked for 20 minutes. Sixteen pieces.',
    kw: ['pistachio shortbread', 'easy pistachio shortbread', 'buttery pistachio shortbread', 'shortbread with pistachios', 'homemade pistachio shortbread'],
    why: 'It looks like plain shortbread and eats like a richer relative, thanks to the green flecks of pistachio and the slightly nutty bite.\n\nThe method is the same as for any shortbread. Rub or beat the butter with the sugar until combined, then work in the flour and cornflour. **Handle the dough as little as possible.** Warm hands melt the butter, and a dough that has gone greasy bakes hard instead of short.\n\nChop the pistachios roughly, not into dust, so the pieces show when you cut the fingers. Press the dough into a lined tin and prick it all over with a fork.\n\nBake at 170°C for 20 minutes, until pale gold at the edges and still pale in the middle. If your oven runs hot, check at 16 minutes. Cut into 16 fingers while warm, then leave to cool in the tin, because cold shortbread shatters when cut.',
    ing: [
      '225 g butter, softened',
      '100 g caster sugar',
      '250 g plain flour',
      '50 g cornflour',
      '100 g shelled pistachios, roughly chopped',
      '1 tbsp caster sugar to finish'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm square tin.',
      'Beat the butter and 100 g sugar until combined. Work in the flour and cornflour, then the pistachios.',
      'Press the dough into the tin, level the top and prick all over with a fork.',
      'Bake for 20 minutes until pale gold at the edges. Sprinkle with the finishing sugar, cut into 16 fingers while warm and cool in the tin.'
    ],
    tips: [
      'Handle the dough lightly.',
      'Chop the nuts roughly.',
      'If your oven runs hot, check at 16 minutes.',
      'Cut it while warm.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Fresh strawberries', 'Cold milk'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [234, 3, 24, 14, 1, 8, 5]
  }
};
