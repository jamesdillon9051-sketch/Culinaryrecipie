'use strict';

/**
 * Volume fifty-six — no-bake desserts, ice creams, mug cakes and special-diet
 * sweets, third part.
 *
 * Twenty-five dishes: a mug chocolate chip cookie, no bake brownies, chocolate
 * cake, chocolate pie, granola bars, key lime pie, peanut butter bars, pumpkin
 * pie and strawberry pie, Neapolitan and peach ice cream, orange curd, protein
 * bars, three three-ingredient recipes (banana pancakes, cookies, fudge) and
 * nine dairy-free sweets (brownies, cheesecake, cookies, mousse, cupcakes,
 * custard, hot chocolate, milkshake and pumpkin pie). Waits of an hour or
 * more are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'mug-chocolate-chip-cookie': {
    d: 'A single soft chocolate chip cookie baked in a mug in the microwave in 60 seconds, eaten warm with the chips still molten.',
    meta: 'Mug chocolate chip cookie, soft and gooey, microwaved for 1 minute. One serving, ready in 6 minutes.',
    kw: ['mug chocolate chip cookie', 'microwave chocolate chip cookie', 'single serving cookie', 'cookie in a mug', 'one minute cookie'],
    why: 'Why does a microwave cookie behave so differently from an oven one? Because there is no dry heat to form a crust, so the result is soft all through, closer to a warm pudding than a crisp biscuit. That suits this recipe well, because the point is a gooey cookie that is eaten with a spoon while the chocolate is still molten.\n\nThe dough uses only an egg yolk, which gives richness and chew without the eggy, rubbery texture that a whole egg brings in a small portion. Melted butter, brown sugar and a pinch of salt make a fudgy base, and a few spoonfuls of flour hold it together. Everything is stirred in the mug itself, so there is only one thing to wash.\n\n**Cook for 40 to 60 seconds and stop while it still looks underdone.** The cookie will be wet on top and gooey in the middle when the timer goes. It continues to cook from the residual heat for a minute afterwards. Overdone, it turns hard and rubbery within seconds, and there is no way back.\n\nPress extra chocolate chips into the top as soon as it comes out, so that they melt into the surface. A spoon of ice cream on top turns this into a warm cookie sundae. Eat it immediately, as it firms up as it cools.',
    ing: [
      '1 tbsp butter, melted',
      '2 tbsp light brown sugar',
      '1 egg yolk',
      '1/4 tsp vanilla extract',
      '3 tbsp plain flour',
      '1 pinch salt',
      '1 pinch bicarbonate of soda',
      '2 tbsp dark chocolate chips'
    ],
    st: [
      'Melt the butter in a large mug in the microwave for 15 seconds.',
      'Stir in the brown sugar, egg yolk and vanilla until smooth.',
      'Mix in the flour, salt and bicarbonate of soda, then half the chocolate chips.',
      'Press the remaining chips into the top. Microwave on high for 45 seconds, then check: it should look just set at the edges.',
      'Leave for 1 minute and eat warm with a spoon.'
    ],
    tips: [
      'Stop while the centre still looks soft.',
      'Use only the yolk of the egg.',
      'Eat it while it is warm.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Coffee', 'Hot chocolate'],
    store: 'Best eaten at once.',
    nut: [539, 10, 64, 27, 3, 42, 340]
  },

  'no-bake-brownies': {
    d: 'Dense, fudgy brownies made from dates, walnuts and cocoa, blended and pressed into a tin and chilled for 1 hour.',
    meta: 'No bake brownies made from dates, walnuts and cocoa, chilled for 1 hour. 12 squares, ready in 1 hour 15 minutes.',
    kw: ['no bake brownies', 'date and walnut brownies', 'raw chocolate brownies', 'fridge brownies', 'no bake chocolate squares'],
    why: 'Dates are the base of this recipe, and they are an excellent one. Soft Medjool dates are about 60 per cent sugar by weight, and blended with nuts they turn into a sticky, caramel-like paste that holds a bar together as well as any flour and butter. They also bring a deep, toffee-like sweetness that suits chocolate.\n\nPit the dates first. If they are firm and dry, soak them in hot water for 10 minutes and drain, since hard dates will not blend smoothly and leave sticky lumps. Walnuts give a crunchy, slightly bitter note, and they are blended into a coarse crumb in the food processor, with cocoa powder and a pinch of salt. The result is a mixture that looks like wet soil and holds together when pinched.\n\n**Pulse, do not blend continuously.** Short pulses give a mixture with a bit of texture, whereas continuous blending turns the nuts to a paste and releases their oil, making the brownies greasy. Stop as soon as the mixture clumps around the blades and sticks when pressed between your fingers.\n\nPress firmly into a lined tin, using the back of a spoon or a flat glass, so the bars are dense and cut cleanly. Chill for at least 1 hour. They keep in the fridge for a week, and are good with a dusting of cocoa or a drizzle of melted chocolate.',
    ing: [
      '300 g Medjool dates, pitted',
      '150 g walnuts',
      '40 g cocoa powder',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '1 tbsp water',
      '50 g dark chocolate chips'
    ],
    st: [
      'Line a 20 cm square tin with greaseproof paper.',
      'Pulse the walnuts in a food processor to a coarse crumb. Add the dates, cocoa, vanilla and salt and pulse until the mixture clumps.',
      'Add the water if the mixture is too dry, then pulse in the chocolate chips.',
      'Press firmly into the tin and smooth the top.',
      'Chill for at least 1 hour, then cut into 12 squares.'
    ],
    tips: [
      'Soak dry dates before using.',
      'Pulse, do not blend continuously.',
      'Press the mixture firmly into the tin.'
    ],
    pair: ['Coffee', 'Hot tea', 'Fresh berries', 'Cold milk'],
    store: 'Keeps in the fridge for 1 week.',
    rest: [60, 'Chilling'],
    nut: [202, 3, 25, 10, 4, 18, 50]
  },

  'no-bake-chocolate-cake': {
    d: 'A British fridge cake of crushed biscuits, dark chocolate, golden syrup and butter, pressed into a tin and chilled for 4 hours.',
    meta: 'No bake chocolate cake, a British biscuit cake with golden syrup, chilled for 4 hours. 12 slices, ready in 4 hours 25 minutes.',
    kw: ['no bake chocolate cake', 'chocolate biscuit cake', 'fridge cake', 'chocolate fridge cake', 'tiffin style chocolate cake'],
    why: 'It looks like a slice of rocky road and eats like a thick chocolate fudge, which is why chocolate biscuit cake is a staple of British tea tables and a regular at royal weddings. It is a British classic, requires no oven and uses only a handful of store-cupboard ingredients, though it needs patience, because it only sets in the cold.\n\nThe base is a mix of melted butter, dark chocolate, golden syrup and a spoonful of cocoa, folded into broken biscuits. Rich tea or digestive biscuits are the usual choice. Break them into pieces roughly 1 cm across, some larger and some smaller, so that the cake has a pleasing variety of crunchy chunks and fudgy gaps. Crushing them to dust turns it into a paste.\n\n**Let the chocolate mixture cool for 5 minutes before folding it in.** Hot chocolate melts the biscuits and makes the cake greasy and weak. It should be warm and pourable, not hot. Add chopped glace cherries, raisins or hazelnuts for texture and flavour.\n\nPack the mixture firmly into a lined tin, pressing down hard with the back of a spoon to eliminate air pockets, and chill for at least 4 hours. Spread a thin layer of melted chocolate on top for a glossy finish, and cut into slim slices with a hot knife. It is very rich, and keeps for a week.',
    ing: [
      '250 g rich tea or digestive biscuits',
      '150 g butter',
      '3 tbsp golden syrup',
      '2 tbsp cocoa powder',
      '200 g dark chocolate, chopped',
      '80 g glace cherries, halved',
      '50 g raisins',
      '100 g dark chocolate, chopped, for the top'
    ],
    st: [
      'Line a 900 g loaf tin with baking paper. Break the biscuits into 1 cm pieces.',
      'Melt the butter, golden syrup, cocoa and 200 g chocolate together over low heat for 5 minutes, stirring. Cool for 5 minutes.',
      'Fold the biscuits, cherries and raisins into the chocolate mixture.',
      'Press firmly into the tin. Melt the 100 g chocolate and spread over the top.',
      'Chill for at least 4 hours before slicing with a hot knife.'
    ],
    tips: [
      'Break the biscuits into varied sizes.',
      'Cool the chocolate mixture before folding it in.',
      'Press the mixture down firmly.'
    ],
    pair: ['Hot tea', 'Coffee', 'Whipped cream', 'Fresh berries'],
    store: 'Keeps in the fridge for 1 week.',
    rest: [240, 'Chilling'],
    nut: [379, 3, 40, 23, 3, 26, 110]
  },

  'no-bake-chocolate-pie': {
    d: 'A silky chocolate pudding pie in a crushed biscuit crust, made on the hob in 5 minutes and chilled for 4 hours.',
    meta: 'No bake chocolate pie with a silky chocolate filling and biscuit crust, chilled for 4 hours. Eight servings, ready in 4 hours 30 minutes.',
    kw: ['no bake chocolate pie', 'chocolate cream pie', 'chocolate pudding pie', 'chocolate pie with biscuit crust', 'easy chocolate pie'],
    why: 'The filling is a stovetop chocolate pudding, and the crust is a pressed biscuit base: nothing in the pie goes into an oven. The pudding is made from milk, cream, sugar, cocoa, cornflour and egg yolks, cooked for about 5 minutes until thick, and the result is far smoother and deeper than anything from a packet.\n\nWhisk the dry ingredients together first, the sugar, cocoa and cornflour, so that the cornflour does not clump when the liquid goes in. Add the milk and cream gradually, whisking constantly, then bring to a simmer over medium heat. As the mixture thickens, it will turn glossy and start to bubble slowly, and a spoon dragged through it leaves a clear trail. Stir in the egg yolks with a ladle of the hot filling first, to temper them.\n\n**Strain the filling into the crust.** Pouring it through a fine sieve catches any lumps of cornflour or cooked egg, and gives a perfectly smooth surface. Press a sheet of cling film directly onto the pudding while it cools to prevent a skin from forming, or the pie will have a rubbery top.\n\nFinish with a stirred-in knob of butter, dark chocolate and vanilla. Chill the pie for at least 4 hours, then top with whipped cream and shaved chocolate. It slices cleanly when thoroughly cold, with a sharp knife dipped in hot water.',
    ing: [
      '200 g chocolate biscuits, crushed',
      '80 g butter, melted',
      '100 g caster sugar',
      '30 g cocoa powder',
      '35 g cornflour',
      '1/4 tsp salt',
      '400 ml whole milk',
      '200 ml double cream',
      '3 egg yolks',
      '80 g dark chocolate, chopped',
      '1 tsp vanilla extract',
      '150 ml double cream, whipped, to top'
    ],
    st: [
      'Mix the biscuit crumbs and melted butter and press firmly into a 23 cm pie dish. Chill for 15 minutes.',
      'Whisk the sugar, cocoa, cornflour and salt in a pan. Whisk in the milk and 200 ml cream gradually and bring to a simmer, whisking, for 5 minutes until thick.',
      'Whisk a ladle of the hot filling into the egg yolks, then whisk it all back into the pan for 1 minute. Off the heat, stir in the chocolate and vanilla until smooth.',
      'Strain into the crust and press cling film onto the surface. Chill for at least 4 hours.',
      'Top with the whipped cream.'
    ],
    tips: [
      'Whisk the cornflour with the dry ingredients first.',
      'Strain the filling for a smooth top.',
      'Cover the surface with cling film while it cools.'
    ],
    pair: ['Whipped cream', 'Fresh raspberries', 'Coffee', 'Cold milk'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [240, 'Chilling'],
    nut: [540, 8, 46, 36, 3, 28, 240]
  },

  'neapolitan-ice-cream': {
    d: 'Three layers of no churn vanilla, chocolate and strawberry ice cream, frozen in a loaf tin and sliced to show the stripes.',
    meta: 'Neapolitan ice cream in three no churn layers, frozen for 8 hours. Ten servings, ready in 9 hours.',
    kw: ['neapolitan ice cream', 'homemade neapolitan ice cream', 'vanilla chocolate strawberry ice cream', 'three layer ice cream', 'no churn neapolitan ice cream'],
    why: 'It is named for the city of Naples, where the Neapolitan style of layered ice cream was developed in the nineteenth century by Italian immigrants in America, who used the red, white and green of the Italian flag. In the United States, the trio became vanilla, chocolate and strawberry, and the striped brick has been a freezer staple ever since.\n\nThe whole thing is made from a single no churn base: whipped cream folded with sweetened condensed milk. Divide the base into three equal parts and flavour each one differently. The vanilla needs only extract. For the chocolate, whisk in cocoa and a little warm milk to dissolve it. For the strawberry, fold in a puree of fresh berries that has been reduced to a thick jam, so the extra water does not turn it icy.\n\n**Freeze each layer before adding the next.** Spread the first layer in the lined tin, freeze for 1 hour until firm to the touch, and then add the second. This keeps the colours separate with sharp lines between them. Layers added onto soft ones bleed together into a muddy swirl.\n\nCover the surface with greaseproof paper and freeze for at least 6 hours after the last layer. To serve, lift out by the paper, peel it away and slice into thick slabs with a hot knife. Each slice shows the three bands.',
    ing: [
      '600 ml double cream, cold',
      '400 g sweetened condensed milk',
      '1 tsp vanilla extract',
      '3 tbsp cocoa powder',
      '3 tbsp warm milk',
      '200 g strawberries, hulled',
      '1 tbsp icing sugar'
    ],
    st: [
      'Whip the cream to stiff peaks and fold in the condensed milk. Divide into 3 equal bowls.',
      'Fold the vanilla into the first bowl. Whisk the cocoa into the warm milk until smooth, cool, and fold into the second bowl.',
      'Crush the strawberries with the icing sugar until thick and jammy, and fold into the third bowl.',
      'Line a 900 g loaf tin with greaseproof paper. Spread the vanilla layer and freeze for 1 hour. Add the chocolate layer and freeze for 1 hour. Add the strawberry layer.',
      'Cover and freeze for at least 6 hours. Lift out and slice with a hot knife.'
    ],
    tips: [
      'Freeze each layer before adding the next.',
      'Reduce the strawberry puree so it is not watery.',
      'Slice with a hot knife.'
    ],
    pair: ['Wafer cones', 'Fresh strawberries', 'Chocolate sauce', 'Cold milk'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Freezing'],
    nut: [357, 5, 28, 25, 1, 26, 70]
  },

  'no-bake-granola-bars': {
    d: 'Rolled oats, nuts and dried fruit bound with warm honey and peanut butter, pressed into a tin and chilled for 1 hour.',
    meta: 'No bake granola bars with oats, honey and peanut butter, chilled for 1 hour. 12 bars, ready in 1 hour 20 minutes.',
    kw: ['no bake granola bars', 'chewy granola bars', 'oat and honey granola bars', 'peanut butter granola bars', 'homemade granola bars'],
    why: 'Shop-bought granola bars rely on glucose syrup and binding agents. Homemade ones need only honey and a nut butter, warmed together until fluid and stirred into the oats, and they set firm once chilled. The recipe has few ingredients and a lot of room for improvisation.\n\nThe binder is the key. Honey, peanut butter and a spoon of brown sugar are warmed in a pan for 3 minutes until they melt together and just begin to bubble at the edges. Do not boil it for long: too much heat turns it into a hard toffee when cold, and the bars become teeth-breaking. Stir in vanilla and salt off the heat.\n\n**Toast the oats first.** Five minutes on a tray in a 180C oven, or in a dry pan, turns pale rolled oats nutty and golden, and removes the raw taste. Mix them with chopped almonds, pumpkin seeds and dried cranberries, then pour the warm binder over and stir until every piece is coated.\n\nPress the mixture into a lined tin as firmly as you can, using the base of a glass or the back of a spoon, since loose bars crumble. Chill for 1 hour, lift out and cut into 12 with a sharp knife. Store them in the fridge in layers separated by paper.',
    ing: [
      '200 g rolled oats',
      '60 g almonds, chopped',
      '40 g pumpkin seeds',
      '60 g dried cranberries',
      '100 g honey',
      '100 g smooth peanut butter',
      '2 tbsp light brown sugar',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Toast the oats in a dry pan for 5 minutes, then tip into a large bowl with the almonds, seeds and cranberries.',
      'Warm the honey, peanut butter and sugar in a pan over low heat for 3 minutes until fluid. Stir in the vanilla and salt.',
      'Pour over the oat mixture and stir until coated.',
      'Press very firmly into a lined 20 cm square tin.',
      'Chill for 1 hour, then cut into 12 bars.'
    ],
    tips: [
      'Toast the oats for flavour.',
      'Do not boil the binder for long.',
      'Press the mixture down very firmly.'
    ],
    pair: ['Yogurt', 'Fruit', 'Coffee', 'Hot tea'],
    store: 'Keeps in the fridge for 1 week.',
    rest: [60, 'Chilling'],
    nut: [222, 6, 27, 10, 3, 14, 50]
  },

  'no-bake-key-lime-pie': {
    d: 'Lime juice, condensed milk and whipped cream in a graham cracker crust, chilled for 4 hours to a cool, tangy set.',
    meta: 'No bake key lime pie with condensed milk and lime juice, chilled for 4 hours. Eight servings, ready in 4 hours 20 minutes.',
    kw: ['no bake key lime pie', 'key lime pie without baking', 'lime pie with condensed milk', 'cool lime pie', 'key lime pie recipe'],
    why: 'The standard version of this pie from Florida is baked, though the setting is done by the lime juice itself. The acid in lime thickens the protein in condensed milk, so even without an oven the filling firms up into a creamy, sliceable custard in the fridge. A baked pie just speeds it up and adds a golden finish.\n\nIt was historically made with the tiny, intensely sour key limes of the Florida Keys, which have a floral, slightly bitter flavour, but ordinary limes work well. Use fresh juice only. Bottled juice is dull and sometimes metallic. Squeeze about 120 ml, which is 4 to 5 limes, and zest two of them for extra aroma before cutting. The zest is where the oils are.\n\n**Fold the whipped cream in last, and gently.** The filling is condensed milk mixed with lime juice and zest, to which whipped cream is added to lighten it. Stir the juice in slowly, and the mixture visibly thickens within a minute. Whip the cream separately to soft peaks, and fold it in with a large spatula in two additions.\n\nPour into the biscuit crust, smooth the top and chill for at least 4 hours. Serve with a dollop of whipped cream and a twist of lime zest. A traditional key lime pie is pale yellow, never green, so skip the food colouring.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '400 g sweetened condensed milk',
      '120 ml fresh lime juice',
      '2 limes, zested',
      '300 ml double cream, whipped to soft peaks',
      '100 ml double cream, whipped, to serve'
    ],
    st: [
      'Mix the biscuit crumbs and melted butter and press into a 23 cm pie dish. Chill for 15 minutes.',
      'Stir the condensed milk with the lime juice and zest slowly until thickened.',
      'Fold in the 300 ml whipped cream in 2 additions.',
      'Pour into the crust and smooth the top.',
      'Chill for at least 4 hours and top with the remaining whipped cream.'
    ],
    tips: [
      'Use fresh lime juice, not bottled.',
      'Fold in the cream gently.',
      'Chill for at least 4 hours.'
    ],
    pair: ['Whipped cream', 'Fresh lime zest', 'Coffee', 'Sparkling wine'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [240, 'Chilling'],
    nut: [544, 7, 48, 36, 1, 34, 210]
  },

  'peach-ice-cream': {
    d: 'A vanilla custard ice cream churned with fresh peaches that have been cooked down with sugar, chilled and frozen for 8 hours.',
    meta: 'Peach ice cream with a custard base and cooked fresh peaches, chilled and frozen. Eight servings, ready in 9 hours.',
    kw: ['peach ice cream', 'fresh peach ice cream', 'homemade peach ice cream', 'peach custard ice cream', 'summer peach ice cream'],
    why: 'Early summer, when peaches are fragrant enough to smell across the kitchen, is the time for this ice cream. Unlike the pale, lightly flavoured shop-bought kind, a homemade peach ice cream tastes of real fruit: sweet, floral and a little tart, with soft pieces of peach through a smooth, rich vanilla custard.\n\nThe secret is to cook the fruit first. Raw peach pieces freeze into hard, icy chunks that are unpleasant to bite and have little flavour. Simmered with sugar and lemon juice for about 8 minutes, they release their juices and soften, and the syrup that forms is full of peach aroma. Mash half the fruit into a rough puree and leave the rest in small pieces.\n\n**Choose ripe, fragrant peaches.** Underripe fruit is hard and flavourless and no amount of cooking will rescue it. They should give slightly under gentle pressure and smell strongly of peach. Peel them by dropping them in boiling water for 30 seconds and slipping the skins off.\n\nMake a classic custard with egg yolks, cream and milk, chill it for 4 hours until cold, then stir in the cold peach mixture and churn. Freeze for 4 hours in a lidded container. Let it soften for 10 minutes before scooping.',
    ing: [
      '500 g ripe peaches, peeled and diced',
      '80 g caster sugar',
      '1 tbsp lemon juice',
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '100 g caster sugar, for the custard',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Simmer the peaches, 80 g sugar and lemon juice for 8 minutes. Mash half the fruit roughly and chill the mixture.',
      'Heat the cream and milk to steaming. Whisk the egg yolks, 100 g sugar and salt until pale, whisk in a ladle of hot cream, then tip back into the pan.',
      'Cook over low heat to 80C, stirring, then strain. Stir in the vanilla and chill for 4 hours.',
      'Stir the cold peaches into the custard and churn until thick.',
      'Freeze in a lidded container for 4 hours.'
    ],
    tips: [
      'Cook the peaches before freezing.',
      'Use ripe, fragrant fruit.',
      'Chill the custard completely.'
    ],
    pair: ['Shortbread', 'Pound cake', 'Fresh berries', 'Cobbler'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [318, 7, 32, 18, 1, 31, 140]
  },

  'no-bake-peanut-butter-bars': {
    d: 'A peanut butter and graham cracker base topped with melted dark chocolate, chilled for 1 hour and cut into 16 bars.',
    meta: 'No bake peanut butter bars with a chocolate topping, chilled for 1 hour. 16 bars, ready in 1 hour 20 minutes.',
    kw: ['no bake peanut butter bars', 'peanut butter chocolate bars', 'buckeye bars', 'peanut butter and chocolate squares', 'chocolate peanut butter bars no bake'],
    why: 'Each bar has two layers, as in a peanut butter cup, and both are made without turning on the oven. The base is a sweet, crumbly peanut butter mix with graham cracker crumbs and icing sugar, pressed into a tin, and the top is a smooth layer of melted chocolate. It is a recipe from the American Midwest, close to the Ohio buckeye candy.\n\nThe base needs enough fat and sugar to hold together. Melted butter and smooth peanut butter bind the crumbs, and icing sugar makes the mix sweet and fine in texture. It should feel like firm cookie dough and hold when pressed in your fist. If it is too crumbly, add a spoonful of melted butter. If it is sticky, add a few more crumbs.\n\n**Press the base down hard.** Use the flat bottom of a glass to compress the layer evenly, so it forms a dense, even slab that will not crumble when cut. A loose base is the main reason these bars fall apart. Chill the base for 15 minutes before adding the chocolate.\n\nMelt the dark chocolate with a spoonful of peanut butter, which makes it glossy and keeps it from cracking when cut. Spread it over the base, chill for at least 1 hour and cut into 16 bars with a hot knife. Wipe the blade between cuts for clean edges.',
    ing: [
      '150 g graham crackers or digestive biscuits, crushed',
      '115 g butter, melted',
      '250 g smooth peanut butter',
      '200 g icing sugar',
      '200 g dark chocolate, chopped',
      '2 tbsp smooth peanut butter, for the top'
    ],
    st: [
      'Line a 20 cm square tin with greaseproof paper.',
      'Mix the crumbs, melted butter, 250 g peanut butter and icing sugar until it holds together. Press firmly into the tin and chill for 15 minutes.',
      'Melt the chocolate with the 2 tbsp peanut butter, stirring until smooth.',
      'Spread over the base.',
      'Chill for at least 1 hour and cut into 16 bars with a hot knife.'
    ],
    tips: [
      'Press the base very firmly.',
      'Add peanut butter to the chocolate for a clean cut.',
      'Wipe the knife between cuts.'
    ],
    pair: ['Cold milk', 'Coffee', 'Hot chocolate', 'Fresh bananas'],
    store: 'Keeps in the fridge for 1 week.',
    rest: [60, 'Chilling'],
    nut: [328, 6, 31, 20, 3, 22, 60]
  },

  'no-bake-pumpkin-pie': {
    d: 'A cool, spiced pumpkin filling of cream cheese, pumpkin puree and whipped cream in a gingersnap crust, chilled for 4 hours.',
    meta: 'No bake pumpkin pie with cream cheese and a gingersnap crust, chilled for 4 hours. Eight servings, ready in 4 hours 25 minutes.',
    kw: ['no bake pumpkin pie', 'pumpkin cream cheese pie', 'chilled pumpkin pie', 'no oven pumpkin pie', 'pumpkin pie with gingersnap crust'],
    why: 'The oven is full on Thanksgiving, and a pumpkin pie that does not need one is a gift to the cook. This no bake pie has a different texture from the classic custard: it is light, mousse-like and creamy, set with cream cheese and whipped cream rather than eggs, and the flavours are pumpkin, cinnamon and ginger, much the same.\n\nThe crust is crushed gingersnaps, which add spice and a snap that stands up to the creamy filling. Mix with melted butter, press firmly into the dish and chill. Digestive biscuits work too, but gingersnaps complement the spice mix beautifully and look darker and richer.\n\n**Blot the pumpkin puree.** Tinned puree is quite wet, and in a no bake filling that water has nowhere to go. Spread it on a double layer of kitchen paper for 5 minutes and press off the excess. The mixture will be thicker and richer, and the pie will set firmly. Use plain puree, not pumpkin pie filling.\n\nBeat the cream cheese with brown sugar and spices until smooth, mix in the pumpkin, and fold in whipped cream in two additions. Chill for at least 4 hours before slicing. Serve with extra whipped cream, a dusting of cinnamon and chopped toasted pecans.',
    ing: [
      '200 g gingersnap biscuits, crushed',
      '90 g butter, melted',
      '250 g cream cheese, at room temperature',
      '100 g light brown sugar',
      '1 1/2 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1/4 tsp salt',
      '250 g tinned pumpkin puree, blotted',
      '1 tsp vanilla extract',
      '250 ml double cream, whipped to soft peaks',
      '30 g pecans, toasted and chopped'
    ],
    st: [
      'Mix the gingersnap crumbs and melted butter and press into a 23 cm pie dish. Chill for 15 minutes.',
      'Beat the cream cheese, brown sugar, cinnamon, ginger, nutmeg and salt until smooth.',
      'Beat in the blotted pumpkin and vanilla.',
      'Fold in the whipped cream in 2 additions and spoon into the crust.',
      'Chill for at least 4 hours and scatter with the pecans.'
    ],
    tips: [
      'Blot the pumpkin puree.',
      'Use cream cheese at room temperature.',
      'Chill for at least 4 hours.'
    ],
    pair: ['Whipped cream', 'Coffee', 'Hot tea', 'Spiced cider'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [240, 'Chilling'],
    nut: [492, 5, 37, 36, 2, 24, 280]
  },

  'no-bake-strawberry-pie': {
    d: 'Fresh strawberries in a glossy cooked strawberry glaze set in a biscuit crust and chilled for 4 hours, topped with whipped cream.',
    meta: 'No bake strawberry pie with fresh berries and a glossy glaze, chilled for 4 hours. Eight servings, ready in 4 hours 25 minutes.',
    kw: ['no bake strawberry pie', 'fresh strawberry pie', 'strawberry glaze pie', 'strawberry pie with whipped cream', 'summer strawberry pie'],
    why: 'It looks like a fresh fruit tart and eats like the summer, a heap of glossy red berries in a crisp crust. The pie works best in late spring and early summer, when strawberries are at their peak: ripe, fragrant and sweet to the core. Out of season the berries are pale and the pie suffers.\n\nThe glaze is what turns it from a bowl of fruit into a pie. Crush a third of the berries, simmer them for 5 minutes with sugar, cornflour and a little water until thick and translucent, and cool for 15 minutes. It sets into a bright red jelly that binds the whole berries together and keeps them in place when sliced. A squeeze of lemon sharpens the flavour.\n\n**Hull and halve the berries, and pat them dry.** Moisture on the surface dilutes the glaze and weakens the set. Arrange the berries cut side down in the crust, tightly packed, and spoon the cooled glaze over them. Take care to let it seep between the berries.\n\nChill the pie for at least 4 hours, until the glaze is firm. Top with sweetened whipped cream just before serving. A shortbread or digestive crust holds up well to the fruit, and a coating of melted white chocolate brushed inside the crust keeps it crisp.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '800 g strawberries, hulled',
      '100 g caster sugar',
      '3 tbsp cornflour',
      '120 ml water',
      '1 tbsp lemon juice',
      '200 ml double cream',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the biscuit crumbs and melted butter, press into a 23 cm pie dish and chill for 15 minutes.',
      'Crush 250 g of the strawberries. Simmer with the caster sugar, cornflour, water and lemon juice for 5 minutes until thick and translucent. Cool for 15 minutes.',
      'Halve the remaining strawberries, pat dry and pack tightly cut side down into the crust.',
      'Spoon the glaze over the strawberries so it seeps between them.',
      'Chill for at least 4 hours. Whip the cream with the icing sugar and spread over the top before serving.'
    ],
    tips: [
      'Use ripe, in-season strawberries.',
      'Pat the berries dry.',
      'Cool the glaze before spooning it on.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Coffee', 'Sparkling wine'],
    store: 'Best the day it is made. Keeps in the fridge for 2 days.',
    rest: [240, 'Chilling'],
    nut: [391, 3, 43, 23, 3, 26, 140]
  },

  'orange-curd': {
    d: 'A bright, tangy spread of orange juice, zest, eggs and butter, cooked gently for 12 minutes until thick and strained.',
    meta: 'Orange curd with fresh zest and juice, cooked for 12 minutes. 12 servings, ready in 25 minutes.',
    kw: ['orange curd', 'homemade orange curd', 'orange curd for cakes', 'citrus curd', 'orange curd recipe'],
    why: 'Lemon curd gets all the attention, but orange curd is gentler, sweeter and more aromatic, and its fragrance fills the kitchen as it cooks. It is spread on toast, sandwiched between cake layers, spooned over yogurt or swirled into ice cream. A jar made at home keeps for two weeks in the fridge and is gone sooner.\n\nOrange juice is less acidic than lemon, so the curd needs a little help to taste properly sharp. A tablespoon of lemon juice balances the sweetness and also helps the curd set. Zest two oranges directly into the sugar and rub them together with your fingers, which spreads the oil from the peel through the sugar crystals and dissolves it into the curd. The zest is where the true orange flavour is.\n\n**Cook it over very low heat and stir constantly.** Egg yolks scramble at around 85C, so the curd should never come near a simmer. Use a heavy-based pan or a bowl over a pan of barely simmering water, and stir with a spatula, scraping the bottom and corners. It is ready when it coats the back of a spoon and leaves a clear line when you draw a finger through it.\n\nStrain through a fine sieve to remove the zest and any scrambled bits, then whisk in the cold butter, a cube at a time, for a glossy finish. Press cling film on the surface to prevent a skin and chill to thicken.',
    ing: [
      '2 oranges, zested',
      '120 g caster sugar',
      '120 ml fresh orange juice',
      '1 tbsp lemon juice',
      '4 egg yolks',
      '1 egg',
      '85 g cold butter, cubed',
      '1 pinch salt'
    ],
    st: [
      'Rub the zest into the sugar in a heavy pan. Whisk in the orange juice, lemon juice, egg yolks, egg and salt.',
      'Cook over very low heat for 12 minutes, stirring constantly, until the curd coats the back of a spoon.',
      'Strain through a fine sieve into a bowl.',
      'Whisk in the cold butter a cube at a time until glossy.',
      'Press cling film onto the surface and chill until thick.'
    ],
    tips: [
      'Keep the heat very low.',
      'Stir constantly and scrape the corners.',
      'Strain for a perfectly smooth finish.'
    ],
    pair: ['Scones', 'Greek yogurt', 'Toast', 'Pound cake'],
    store: 'Keeps in the fridge for 2 weeks in a clean jar.',
    nut: [140, 3, 14, 8, 1, 13, 40]
  },

  'protein-bars': {
    d: 'Chewy bars of oats, protein powder, peanut butter and honey pressed into a tin and chilled for 1 hour, with dark chocolate chips.',
    meta: 'Protein bars with oats, peanut butter and protein powder, chilled for 1 hour. 10 bars, ready in 1 hour 15 minutes.',
    kw: ['protein bars', 'homemade protein bars', 'oat and peanut butter protein bars', 'no bake protein bars', 'chewy protein bars with chocolate'],
    why: 'Protein powder is dry, chalky and absorbent, and a bar made with too much of it turns into a dry, crumbly brick. The way round it is a generous amount of nut butter and honey, which provide moisture and binding, and a modest amount of powder. Each bar here has roughly 10 g of protein from the powder, oats and peanut butter combined.\n\nChoose a vanilla or unflavoured whey or plant protein powder. Chocolate-flavoured ones are sweet and can taste artificial against the peanut butter. Whey absorbs less liquid than plant powder, so if you swap one for another, add a spoonful of milk to loosen the mixture, or a few extra oats if it is too wet.\n\n**Warm the peanut butter and honey together before mixing.** Cold nut butter is stiff and does not blend evenly with the dry ingredients, leaving clumps of powder and pockets of oil. Thirty seconds in the microwave makes it fluid enough to stir in thoroughly. The mix should look like a thick cookie dough.\n\nPress firmly into a lined tin, as for any no bake bar. Scatter chocolate chips on top and press them in. Chill for 1 hour, cut into 10 bars and wrap them individually for grab-and-go snacks. Store in the fridge, where they keep for a week.',
    ing: [
      '150 g rolled oats',
      '60 g vanilla protein powder',
      '150 g smooth peanut butter',
      '80 g honey',
      '60 ml milk',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '50 g dark chocolate chips'
    ],
    st: [
      'Line a 20 cm square tin with greaseproof paper. Mix the oats and protein powder in a large bowl.',
      'Warm the peanut butter and honey in the microwave for 30 seconds and stir until smooth. Stir in the milk, vanilla and salt.',
      'Pour onto the oat mixture and stir until a thick, sticky dough forms.',
      'Press very firmly into the tin and press the chocolate chips onto the top.',
      'Chill for 1 hour and cut into 10 bars.'
    ],
    tips: [
      'Warm the nut butter for even mixing.',
      'Add milk if the mixture is too dry.',
      'Press the bars down very firmly.'
    ],
    pair: ['Cold milk', 'Banana', 'Coffee', 'Greek yogurt'],
    store: 'Keeps in the fridge for 1 week, or frozen for 2 months.',
    rest: [60, 'Chilling'],
    nut: [235, 11, 23, 11, 3, 11, 90]
  },

  '3-ingredient-banana-pancakes': {
    d: 'Mashed banana, eggs and rolled oats blended into a batter and cooked in a pan for 2 minutes a side, with no flour or sugar.',
    meta: 'Three ingredient banana pancakes from banana, eggs and oats, cooked for 10 minutes. Two servings, ready in 15 minutes.',
    kw: ['3 ingredient banana pancakes', 'banana oat pancakes', 'banana egg pancakes', 'flourless banana pancakes', 'three ingredient pancakes'],
    why: 'Two bananas, two eggs and a handful of oats: these are the three ingredients, with a little butter or oil for the pan that does not count. There is no flour, sugar or milk, and the pancakes get all of their sweetness and moisture from fruit, which is why they work so well for breakfast or for toddlers.\n\nThe oats are blended into a fine flour first, in a blender or food processor, and then the banana and eggs are added and the whole lot blitzed into a thin, pourable batter. Leave it for 5 minutes so the oat flour absorbs the liquid and thickens. A batter that is cooked immediately is too thin and spreads into floppy crepes.\n\n**Make them small and cook them gently.** These pancakes are delicate. They lack the gluten of a flour pancake, so they are fragile and break when flipped if they are large. Pour batter into a pan about 7 cm across, cook over medium-low heat for 2 minutes until the bubbles on the surface pop and the edges look dry, then flip carefully.\n\nUse ripe bananas with brown spots, which are sweeter and more fragrant. Serve with sliced banana, a spoon of yogurt, a drizzle of maple syrup, or a handful of berries.',
    ing: [
      '2 ripe bananas, about 240 g',
      '2 eggs',
      '60 g rolled oats',
      '1 tsp butter, for the pan',
      '2 tbsp maple syrup, to serve',
      '1 banana, sliced, to serve'
    ],
    st: [
      'Blend the oats to a fine flour. Add the bananas and eggs and blend until smooth. Leave for 5 minutes.',
      'Heat a non-stick pan over medium-low heat and add a little of the butter.',
      'Pour in 3 tbsp of batter per pancake. Cook for 2 minutes until the bubbles pop and the edges look dry.',
      'Flip carefully and cook for 1 to 2 minutes more.',
      'Serve with the sliced banana and maple syrup.'
    ],
    tips: [
      'Rest the batter for 5 minutes.',
      'Make small pancakes.',
      'Use very ripe bananas.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Yogurt', 'Peanut butter'],
    store: 'Best fresh. Keeps in the fridge for 1 day; reheat in a toaster.',
    nut: [429, 12, 75, 9, 8, 34, 70]
  },

  '3-ingredient-cookies': {
    d: 'Peanut butter, sugar and an egg mixed into a dough and baked for 10 minutes into crisp-edged, chewy cookies with a crosshatch top.',
    meta: 'Three ingredient peanut butter cookies, baked for 10 minutes. 12 cookies, ready in 20 minutes.',
    kw: ['3 ingredient cookies', 'three ingredient peanut butter cookies', 'peanut butter sugar egg cookies', 'flourless peanut butter cookies', 'simple peanut butter cookies'],
    why: 'Peanut butter, sugar and an egg: that is the full ingredient list, and the cookies they make are chewy, deeply nutty and need no flour. The recipe works because peanut butter has everything a cookie dough needs, fat for tenderness, protein for structure and a lot of body, and the egg binds it into a dough that holds together.\n\nThe type of peanut butter makes a big difference. Use a smooth, commercial brand such as Skippy or Jif. These are stabilised, so the oil does not separate. A natural peanut butter, with a layer of oil on top, makes a dough that is greasy and crumbles apart, and the cookies spread too much. If you use a natural one, stir it very well and chill the dough for 30 minutes.\n\n**Do not skip the flattening.** The dough does not spread in the oven, so the cookies keep the shape you give them. Roll into balls, place them 5 cm apart and press down with a fork in a crosshatch to about 1.5 cm thick. The pattern helps the centre cook through.\n\nBake for 10 minutes, until the edges are set and the tops look dry. They will be very soft and fragile when they come out, and firm as they cool. Leave them on the tray for 10 minutes before moving them. A pinch of salt on top turns them from good to excellent.',
    ing: [
      '250 g smooth peanut butter',
      '100 g caster sugar',
      '1 egg',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 180C and line a tray.',
      'Mix the peanut butter, sugar and egg until a stiff dough forms.',
      'Roll into 12 balls and place 5 cm apart on the tray.',
      'Press each down with a fork in a crosshatch and sprinkle with the flaky salt.',
      'Bake for 10 minutes until set at the edges. Cool on the tray for 10 minutes.'
    ],
    tips: [
      'Use a stabilised smooth peanut butter.',
      'Press down with a fork.',
      'Cool on the tray before moving.'
    ],
    pair: ['Cold milk', 'Coffee', 'Hot chocolate', 'Fresh bananas'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [175, 6, 13, 11, 2, 10, 60]
  },

  '3-ingredient-fudge': {
    d: 'Dark chocolate chips and condensed milk melted together with vanilla and set in a tin for 2 hours into smooth squares.',
    meta: 'Three ingredient fudge from chocolate, condensed milk and vanilla, set for 2 hours. 24 squares, ready in 2 hours 15 minutes.',
    kw: ['3 ingredient fudge', 'three ingredient chocolate fudge', 'condensed milk fudge', 'easy chocolate fudge', 'chocolate fudge with condensed milk'],
    why: 'Chocolate, condensed milk and vanilla: there is no sugar syrup, no thermometer and no beating, and a pan of fudge is ready to set in 10 minutes. The sweetened condensed milk contains the sugar, milk and body of a traditional fudge in a single can, and the chocolate firms it as it cools. It is the easiest fudge there is.\n\nThe quality of the chocolate shows. A bar of chopped dark chocolate, with 50 to 60 per cent cocoa solids, gives a more complex flavour than chips, which contain stabilisers to hold their shape. If you use chips, choose semisweet. Milk chocolate makes the fudge much sweeter and softer, and it may need extra chocolate to set.\n\n**Melt gently over very low heat.** Chocolate burns easily, and condensed milk catches on the bottom of a pan. Stir constantly with a wooden spoon, and take the pan off the heat as soon as the chocolate is melted and the mixture is smooth and glossy. It should take about 5 minutes. A splash of vanilla and a pinch of salt go in off the heat.\n\nPour into a lined tin, smooth the top and leave to set for 2 hours at room temperature, or an hour in the fridge. Cut into 24 squares with a hot knife. It is rich, so small pieces are right.',
    ing: [
      '350 g dark chocolate, chopped',
      '400 g sweetened condensed milk',
      '1 tsp vanilla extract',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Line a 20 cm square tin with baking paper.',
      'Melt the chocolate and condensed milk in a heavy pan over very low heat for 5 minutes, stirring, until smooth.',
      'Take off the heat and stir in the vanilla.',
      'Pour into the tin, smooth the top and sprinkle with the flaky salt.',
      'Leave to set for 2 hours, then cut into 24 squares with a hot knife.'
    ],
    tips: [
      'Melt over very low heat.',
      'Stir constantly to avoid catching.',
      'Cut with a hot knife.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Hot tea', 'Gift boxes'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    rest: [120, 'Setting'],
    nut: [134, 2, 18, 6, 1, 16, 50]
  },

  'dairy-free-brownies': {
    d: 'Fudgy chocolate brownies made with dairy-free butter and dairy-free dark chocolate, baked for 25 minutes with a crackled top.',
    meta: 'Dairy-free brownies with a crackled top and fudgy centre, baked for 25 minutes. 16 squares, ready in 45 minutes.',
    kw: ['dairy-free brownies', 'dairy-free chocolate brownies', 'brownies without butter', 'fudgy dairy-free brownies', 'dairy-free brownie recipe'],
    why: 'Brownies do not need dairy to taste rich. What makes a brownie fudgy is fat and chocolate, and both can be dairy-free: coconut oil or a dairy-free baking block replaces the butter, and plain dark chocolate, which is often made without milk, provides the flavour. The only thing to check is the label, since some dark chocolate contains milk fat or traces of it.\n\nBuy a dairy-free dark chocolate with at least 60 per cent cocoa, and melt it with the oil over a pan of barely simmering water. Stir it until it is smooth and glossy, then take it off the heat and let it cool a little before adding the eggs. If the mixture is too hot, it will scramble them. Whisk the eggs and sugar separately for 3 minutes until thick, which gives the characteristic crackled surface.\n\n**Do not skip the whisking.** The thin, shiny crust on a brownie comes from sugar dissolving into the eggs and rising to the top as it bakes. A short beat gives a flat, dull surface. Fold in the melted chocolate and the dry ingredients gently, so that you keep the air.\n\nBake until the top is set and a skewer comes out with a few moist crumbs. They firm up as they cool, so take them out when they still look slightly underdone. Cool completely before cutting. Oat milk or plain water is used if the batter needs loosening.',
    ing: [
      '120 g dairy-free baking block or coconut oil',
      '200 g dairy-free dark chocolate, chopped',
      '200 g caster sugar',
      '3 eggs',
      '1 tsp vanilla extract',
      '100 g plain flour',
      '30 g cocoa powder',
      '1/2 tsp baking powder',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 175C. Grease and line a 20 cm square tin.',
      'Melt the dairy-free block and chocolate together over barely simmering water, stirring until smooth. Cool for 5 minutes.',
      'Whisk the sugar, eggs and vanilla for 3 minutes until thick and pale. Fold in the chocolate mixture.',
      'Sift in the flour, cocoa, baking powder and salt and fold in until just combined. Pour into the tin.',
      'Bake for 25 minutes until set with a few moist crumbs on a skewer. Cool completely and cut into 16.'
    ],
    tips: [
      'Check the chocolate label for milk.',
      'Whisk the eggs and sugar well.',
      'Take the brownies out while still slightly soft.'
    ],
    pair: ['Dairy-free ice cream', 'Fresh raspberries', 'Coffee', 'Oat milk'],
    store: 'Keeps in an airtight container for 4 days.',
    nut: [224, 3, 26, 12, 2, 19, 100]
  },

  'dairy-free-cheesecake': {
    d: 'A creamy vegan-style cheesecake made with soaked cashews, coconut cream and lemon on a date and nut base, frozen for 6 hours.',
    meta: 'Dairy-free cheesecake from cashews and coconut cream on a date and almond base. Ten servings, ready in 10 hours with soaking and freezing.',
    kw: ['dairy-free cheesecake', 'cashew cheesecake', 'dairy-free no bake cheesecake', 'coconut cream cheesecake', 'cashew and lemon cheesecake'],
    why: 'Cashews, once soaked and blended, turn into something remarkably like cream cheese. Their high fat content and mild flavour mean that when they are blended with lemon juice, coconut cream and a little sweetener, they produce a smooth, thick filling with the tang and richness of the real thing. The cheesecake sets not with cheese but with coconut oil, which solidifies in the cold.\n\nSoak the cashews in cold water for at least 4 hours, or cover them with hot water and leave for 1 hour if you are short of time. Soaking softens them so that they blend to a perfectly smooth cream. Drain and rinse them before use. Raw, unsalted cashews are best, and a high-speed blender gives the smoothest result.\n\n**Blend for longer than you think you need to.** A grainy filling is the most common failing, and it comes from impatience. Blend for 3 or 4 minutes, stopping to scrape the sides, until the mixture is completely silky when rubbed between finger and thumb. Add the liquid coconut oil last, with the blender running, so that it emulsifies into the mixture.\n\nThe base is dates blended with almonds and a pinch of salt. Press into a lined springform tin, pour the filling over and freeze for at least 6 hours. Move to the fridge for 30 minutes before serving. Top with fresh berries.',
    ing: [
      '200 g raw cashews, soaked for 4 hours and drained',
      '150 g almonds',
      '150 g Medjool dates, pitted',
      '1/4 tsp salt',
      '200 ml coconut cream',
      '80 ml maple syrup',
      '60 ml lemon juice',
      '1 lemon, zested',
      '1 tsp vanilla extract',
      '60 g coconut oil, liquid',
      '150 g raspberries, to serve'
    ],
    st: [
      'Blend the almonds, dates and salt to a sticky crumb. Press into the base of a lined 20 cm springform tin.',
      'Blend the soaked cashews, coconut cream, maple syrup, lemon juice, zest and vanilla for 3 to 4 minutes until completely silky.',
      'With the blender running, add the liquid coconut oil.',
      'Pour onto the base and smooth the top.',
      'Freeze for at least 6 hours. Move to the fridge for 30 minutes before serving with the raspberries.'
    ],
    tips: [
      'Soak the cashews for at least 4 hours.',
      'Blend until completely smooth.',
      'Soften in the fridge before slicing.'
    ],
    pair: ['Fresh berries', 'Fruit coulis', 'Coffee', 'Hot tea'],
    store: 'Keeps in the freezer for 1 month, or in the fridge for 3 days.',
    rest: [600, 'Soaking, freezing and softening'],
    nut: [412, 8, 32, 28, 5, 19, 70]
  },

  'dairy-free-chocolate-chip-cookies': {
    d: 'Chewy chocolate chip cookies made with dairy-free butter and dairy-free chocolate chips, baked for 12 minutes.',
    meta: 'Dairy-free chocolate chip cookies, chewy with crisp edges, baked for 12 minutes. 24 cookies, ready in 30 minutes.',
    kw: ['dairy-free chocolate chip cookies', 'dairy-free cookies', 'chocolate chip cookies without butter', 'chocolate chip cookies without dairy', 'dairy-free cookie recipe'],
    why: 'Keep the dough cold. That is the key to a dairy-free chocolate chip cookie, because the fat replacing butter melts at a lower temperature, and a warm dough spreads into flat, greasy discs. Dairy-free baking blocks are firmer than tub spreads and give better results, but even they benefit from 30 minutes in the fridge.\n\nUse a block of dairy-free baking spread or refined coconut oil, creamed with the sugar until light. Tub spreads contain water, which makes the cookies cakey and soft. A block holds more fat and creates the crisp edges and chewy middle of a classic cookie. Refined coconut oil has no coconut flavour, which is preferable here, but its melting point is low so chilling is vital.\n\n**Check the chocolate chips.** Many standard chocolate chips contain milk powder or are processed on shared equipment. Look for chips labelled dairy-free, or use a chopped bar of dark chocolate with no milk ingredients. The cookies are only as dairy-free as the chocolate that goes in them.\n\nBake until the edges are golden and the centres still look soft. Leave them on the tray for 10 minutes to finish setting. A pinch of flaky salt on top before baking sharpens the chocolate, and the cookies keep for 5 days in a tin, staying chewy.',
    ing: [
      '115 g dairy-free baking block',
      '120 g light brown sugar',
      '60 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '230 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '150 g dairy-free dark chocolate chips'
    ],
    st: [
      'Cream the dairy-free block and both sugars for 3 minutes. Beat in the egg and vanilla.',
      'Stir in the flour, bicarbonate of soda and salt, then fold in the chocolate chips.',
      'Chill the dough for 30 minutes.',
      'Heat the oven to 180C and line 2 trays. Roll 24 balls and place 5 cm apart.',
      'Bake for 12 minutes until the edges are golden. Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Chill the dough to stop spreading.',
      'Use a firm baking block, not tub spread.',
      'Check the chocolate chips for milk.'
    ],
    pair: ['Oat milk', 'Coffee', 'Dairy-free ice cream', 'Hot tea'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [134, 2, 18, 6, 1, 10, 100]
  },

  'dairy-free-chocolate-mousse': {
    d: 'A light chocolate mousse made from dairy-free dark chocolate and whipped coconut cream, chilled for 3 hours.',
    meta: 'Dairy-free chocolate mousse with coconut cream, chilled for 3 hours. Four servings, ready in 3 hours 25 minutes.',
    kw: ['dairy-free chocolate mousse', 'coconut cream chocolate mousse', 'dairy-free mousse', 'chocolate mousse without cream', 'rich dairy-free chocolate dessert'],
    why: 'Whipped coconut cream stands in for dairy cream in a chocolate mousse, and it does so remarkably well. A tin of full-fat coconut milk, chilled overnight, separates into a thick solid cream on top and a thin liquid below, and the cream whips into soft peaks that fold into melted chocolate just like double cream would.\n\nThe tin must be chilled for at least 12 hours. Keep it in the back of the fridge, undisturbed, and do not shake it. When you open it, spoon off the solid cream from the top and leave the watery liquid in the tin, which can go into a smoothie. Brands vary, and some do not separate, so choose one with a high coconut content and no stabilisers, such as guar gum.\n\n**Cool the melted chocolate to lukewarm before folding.** Hot chocolate melts the whipped cream and makes the mousse flat and soupy. Melt the chocolate gently and let it cool for 10 minutes until it is just warm to the touch. Fold in a third of the whipped coconut cream to loosen it, then fold in the rest gently with a large spatula.\n\nSpoon into small glasses or ramekins and chill for at least 3 hours. The mousse sets as the coconut fat firms. Top with raspberries, a sprinkle of sea salt and some chopped nuts. Choose a dairy-free dark chocolate, and read the label for milk.',
    ing: [
      '400 ml full-fat coconut milk, chilled overnight',
      '150 g dairy-free dark chocolate, chopped',
      '2 tbsp maple syrup',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '100 g raspberries, to serve'
    ],
    st: [
      'Spoon the solid cream from the top of the chilled coconut milk into a cold bowl. Whip until soft peaks form.',
      'Melt the chocolate gently, stir until smooth and cool for 10 minutes until just warm.',
      'Stir the maple syrup, vanilla and salt into the chocolate. Fold in a third of the coconut cream, then fold in the rest.',
      'Spoon into 4 glasses.',
      'Chill for at least 3 hours and top with the raspberries.'
    ],
    tips: [
      'Chill the coconut milk for at least 12 hours.',
      'Cool the chocolate before folding.',
      'Check the chocolate label for milk.'
    ],
    pair: ['Fresh raspberries', 'Coffee', 'Dairy-free biscuits', 'Hot tea'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [180, 'Chilling'],
    nut: [426, 4, 35, 30, 5, 27, 60]
  },

  'dairy-free-cupcakes': {
    d: 'Light vanilla cupcakes made with oat milk and dairy-free baking block, topped with a dairy-free vanilla buttercream.',
    meta: 'Dairy-free cupcakes with oat milk and a dairy-free buttercream, baked for 22 minutes. Twelve servings, ready in 50 minutes.',
    kw: ['dairy-free cupcakes', 'dairy-free vanilla cupcakes', 'cupcakes without milk or butter', 'dairy-free cupcakes with buttercream', 'dairy-free cupcake recipe'],
    why: 'Most home versions come out dry and dense, and the fix is to replace the fat properly and add a touch of acid. Without butter, a cake loses flavour and tenderness, and the right substitutes are a dairy-free baking block for the creaming method and a splash of lemon juice stirred into the oat milk. The acid sours the milk slightly, mimicking buttermilk, and tenderises the crumb.\n\nOat milk is the best dairy-free milk for baking. It is neutral in flavour, with a natural sweetness, and it has body, which keeps the cakes moist. Almond and rice milks are thinner, and soy milk can curdle. Use unsweetened and unflavoured, and measure carefully. Cream the baking block and sugar for a full 3 minutes until the mixture is pale and very light.\n\n**Do not overfill the cases.** Dairy-free batters rise less than dairy ones, but they dome a lot and sink quickly when overfilled. Fill each paper case two thirds full with an ice cream scoop for even sizing, and bake at 180C.\n\nThe buttercream is dairy-free baking block beaten with icing sugar, a spoonful of oat milk and vanilla until light. Block, not tub spread, since tubs are too soft and the frosting collapses. Cool the cupcakes completely before frosting, or the buttercream will melt and slide.',
    ing: [
      '200 g plain flour',
      '1 1/2 tsp baking powder',
      '1/4 tsp salt',
      '115 g dairy-free baking block, softened',
      '150 g caster sugar',
      '2 eggs',
      '1 tsp vanilla extract',
      '120 ml unsweetened oat milk',
      '1 tsp lemon juice',
      '150 g dairy-free baking block, softened, for the buttercream',
      '300 g icing sugar',
      '2 tbsp oat milk'
    ],
    st: [
      'Heat the oven to 180C and line a 12-hole muffin tin. Stir the lemon juice into the 120 ml oat milk and leave for 5 minutes.',
      'Cream the 115 g baking block and the caster sugar for 3 minutes. Beat in the eggs one at a time, then the vanilla.',
      'Fold in the flour, baking powder and salt alternately with the soured oat milk.',
      'Fill the cases two thirds full and bake for 22 minutes. Cool completely.',
      'Beat the buttercream block, icing sugar and 2 tbsp oat milk until fluffy. Swirl onto the cupcakes.'
    ],
    tips: [
      'Use oat milk with a little lemon juice.',
      'Use a firm baking block, not a tub spread.',
      'Frost only when completely cool.'
    ],
    pair: ['Oat milk', 'Fresh berries', 'Hot tea', 'Coffee'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [387, 3, 51, 19, 1, 38, 210]
  },

  'dairy-free-custard': {
    d: 'A smooth vanilla custard made with oat milk, egg yolks and cornflour, cooked in 10 minutes and served warm over puddings.',
    meta: 'Dairy-free custard with oat milk and vanilla, cooked in 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['dairy-free custard', 'oat milk custard', 'dairy-free vanilla custard', 'custard without milk', 'dairy-free custard recipe'],
    why: 'Custard is mostly milk, eggs and sugar, and each of those can be adapted. The milk is the only dairy ingredient, and oat milk, with its creamy body and mild sweetness, makes an excellent replacement. The eggs thicken it, and a little cornflour gives extra insurance against curdling, which is the usual hazard with a cooked custard.\n\nWhisk the egg yolks with the sugar and cornflour until pale and smooth in a large bowl. Heat the oat milk with a split vanilla pod or a teaspoon of vanilla bean paste until it just begins to steam, and no more. Oat milk can behave oddly over high heat, thickening and separating when boiled, so watch it. Pour a little of the hot milk onto the yolks while whisking, then add the rest.\n\n**Cook over low heat and never let it boil.** Return the mixture to the pan and stir constantly with a wooden spoon, scraping the base and corners, for about 5 minutes. When it coats the back of the spoon and leaves a clear line when you draw a finger through it, it is ready. Boiled custard scrambles into sweet, lumpy scrambled eggs.\n\nStrain it into a jug at once, stirring in a pinch of salt. To keep it warm without a skin, press cling film onto the surface. Serve poured over apple pie, sponge pudding or stewed fruit, or let it cool and use it in a trifle.',
    ing: [
      '500 ml unsweetened oat milk',
      '4 egg yolks',
      '50 g caster sugar',
      '1 tbsp cornflour',
      '2 tsp vanilla bean paste',
      '1 pinch salt'
    ],
    st: [
      'Whisk the egg yolks, sugar and cornflour in a bowl until pale and smooth.',
      'Warm the oat milk with the vanilla bean paste in a pan until just steaming.',
      'Pour a little hot milk onto the yolks, whisking, then whisk in the rest.',
      'Return to the pan and cook over low heat for 5 minutes, stirring constantly, until the custard coats the back of a spoon.',
      'Strain into a jug, stir in the salt and serve warm.'
    ],
    tips: [
      'Never let the custard boil.',
      'Use unsweetened oat milk.',
      'Cover the surface to stop a skin forming.'
    ],
    pair: ['Apple crumble', 'Sponge pudding', 'Stewed fruit', 'Trifle'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [209, 11, 21, 9, 0, 19, 160]
  },

  'dairy-free-hot-chocolate': {
    d: 'Oat milk heated with cocoa, dairy-free dark chocolate and a pinch of salt into a thick, rich hot chocolate in 8 minutes.',
    meta: 'Dairy-free hot chocolate with oat milk and dark chocolate, ready in 13 minutes. Two servings, cooked for 8 minutes.',
    kw: ['dairy-free hot chocolate', 'oat milk hot chocolate', 'dairy-free cocoa drink', 'rich hot chocolate without milk', 'dairy-free hot chocolate recipe'],
    why: 'It tastes of dark chocolate, with a thicker body than you would expect from a drink made without dairy. Oat milk is the secret. Its natural starches thicken as it heats, giving a creamy mouthfeel that almond or rice milk cannot match, and its mild, slightly sweet flavour lets the chocolate shine. A pinch of salt makes the whole thing taste more chocolatey.\n\nMake a paste first. Mix the cocoa powder with a little of the oat milk in the pan until completely smooth, then whisk in the rest. Cocoa is hydrophobic and floats in lumps if you add it directly to a large volume of cold liquid. Starting with a paste solves the problem. Add the chopped chocolate while the milk is warm.\n\n**Heat gently and whisk constantly.** Oat milk can become gluey and thick if you boil it, and it will catch on the bottom of the pan. Keep the heat at medium-low and stop when the drink is steaming and tiny bubbles form at the edges, which takes about 6 minutes. Whisk well to get a thin layer of froth.\n\nSweeten to taste with maple syrup or sugar, since sweetened oat milks vary. Pour into mugs and top with dairy-free whipped cream or a few mini marshmallows. A shake of cinnamon or a drop of vanilla makes it more special.',
    ing: [
      '500 ml unsweetened oat milk',
      '2 tbsp cocoa powder',
      '50 g dairy-free dark chocolate, chopped',
      '2 tbsp maple syrup',
      '1/4 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Whisk the cocoa with 4 tbsp of the oat milk in a pan until smooth.',
      'Whisk in the rest of the oat milk and warm over medium-low heat.',
      'Add the chocolate, maple syrup and salt and whisk for 6 minutes until the chocolate is melted and the drink is steaming.',
      'Stir in the vanilla.',
      'Pour into 2 mugs.'
    ],
    tips: [
      'Make a cocoa paste first.',
      'Do not boil oat milk.',
      'Taste and adjust the sweetness.'
    ],
    pair: ['Dairy-free biscuits', 'Marshmallows', 'Banana bread', 'Cinnamon toast'],
    store: 'Best drunk fresh. Reheat gently.',
    nut: [382, 11, 44, 18, 4, 36, 190]
  },

  'dairy-free-milkshake': {
    d: 'A thick vanilla milkshake of frozen banana, oat milk and vanilla blended in 5 minutes with no ice cream.',
    meta: 'Dairy-free milkshake from frozen banana and oat milk, blended in 5 minutes. Two servings, no cooking required.',
    kw: ['dairy-free milkshake', 'banana oat milk shake', 'dairy-free vanilla milkshake', 'milkshake without ice cream', 'frozen banana milkshake'],
    why: 'Frozen banana is the nearest thing to ice cream that comes out of a fruit bowl. When frozen and blended, it breaks down into a smooth, creamy, soft-serve-like mass because of its high starch and low water content, and it needs nothing else to give a thick shake. Add oat milk and vanilla and you have a dairy-free shake in minutes.\n\nSlice the bananas before freezing, in rounds about 2 cm thick, and spread them on a tray in a single layer for 2 hours before bagging them. A whole frozen banana is hard to blend and strains the motor, whereas frozen slices go through easily. Use ripe, brown-spotted bananas, which are sweeter and more fragrant. Green ones taste starchy.\n\n**Blend with the liquid at the bottom.** Pour the oat milk into the jug first, then add the banana slices, so that the blades have something to catch. Start slowly and use the tamper if your blender has one. Add the milk gradually: you want a thick, spoonable shake that holds a straw upright.\n\nA tablespoon of peanut butter or cocoa turns it into a different flavour, and a few dates add extra sweetness. Pour into cold glasses and serve right away, because the shake melts and thins quickly. This quantity makes two servings.',
    ing: [
      '3 ripe bananas, sliced and frozen, about 360 g',
      '200 ml unsweetened oat milk',
      '1 tsp vanilla extract',
      '1 tbsp maple syrup',
      '1 pinch salt'
    ],
    st: [
      'Pour the oat milk into a blender.',
      'Add the frozen banana slices, vanilla, maple syrup and salt.',
      'Blend on low for 20 seconds, then on high for 1 minute until thick and smooth.',
      'Add a splash more oat milk if it is too thick.',
      'Pour into 2 cold glasses and serve with straws.'
    ],
    tips: [
      'Freeze sliced bananas in a single layer.',
      'Put the liquid in first.',
      'Serve right away.'
    ],
    pair: ['Cookies', 'Toast', 'Fresh berries', 'Brownies'],
    store: 'Best drunk at once.',
    nut: [268, 5, 53, 4, 5, 33, 130]
  },

  'dairy-free-pumpkin-pie': {
    d: 'A silky pumpkin pie made with coconut milk and an oil-based pastry, baked for 1 hour and cooled for 2 hours before slicing.',
    meta: 'Dairy-free pumpkin pie with coconut milk and oil pastry, baked for 60 minutes. Eight servings, ready in 3 hours 30 minutes.',
    kw: ['dairy-free pumpkin pie', 'coconut milk pumpkin pie', 'pumpkin pie without dairy', 'dairy-free thanksgiving pie', 'dairy-free pumpkin pie recipe'],
    why: 'Pumpkin pie is traditionally set with evaporated milk, and the recipe needs only two substitutions to go dairy-free. Full-fat coconut milk in place of evaporated milk gives the same richness and thick, silky set, and an oil-based pastry replaces the butter crust. Neither change is noticeable once the spices and sweet pumpkin are tasted.\n\nShake the tin of coconut milk well before opening, since the cream and liquid separate. Use full-fat and not light, which is too thin and gives a runny pie. The pumpkin puree should be plain, not pie filling, and blotted on kitchen paper to remove excess water. Mix with brown sugar, eggs, cinnamon, ginger, nutmeg and cloves, and a tablespoon of cornflour for insurance.\n\n**Blind bake the crust first.** The filling is wet, and a raw pastry base will not crisp underneath it. Line the pastry with baking paper and beans, bake at 190C for 15 minutes, then remove the paper and bake for 5 minutes more. A thin coat of beaten egg brushed inside the hot case seals it against the filling.\n\nBake the pie at 175C for 40 minutes until the edges are set and the middle still wobbles slightly like jelly. It sets fully as it cools. Leave it for at least 2 hours before slicing, and serve with whipped coconut cream.',
    ing: [
      '250 g dairy-free shortcrust pastry',
      '1 egg yolk, for sealing',
      '425 g tinned pumpkin puree, blotted',
      '400 ml full-fat coconut milk',
      '150 g light brown sugar',
      '3 eggs',
      '1 tbsp cornflour',
      '1 1/2 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1/4 tsp ground nutmeg',
      '1/4 tsp ground cloves',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 190C. Roll out the pastry to line a 23 cm pie dish. Line with paper and beans and bake for 15 minutes. Remove the paper and beans and bake for 5 minutes. Brush with the egg yolk. Reduce the oven to 175C.',
      'Whisk the pumpkin, coconut milk, brown sugar, eggs, cornflour, spices and salt until smooth.',
      'Pour into the pastry case.',
      'Bake for 40 minutes until the edges are set and the centre has a slight wobble.',
      'Cool completely for at least 2 hours before slicing.'
    ],
    tips: [
      'Use full-fat coconut milk.',
      'Blot the pumpkin puree.',
      'Cool for 2 hours before slicing.'
    ],
    pair: ['Whipped coconut cream', 'Coffee', 'Hot tea', 'Spiced cider'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [120, 'Cooling'],
    nut: [359, 7, 40, 19, 2, 22, 380]
  }
};
