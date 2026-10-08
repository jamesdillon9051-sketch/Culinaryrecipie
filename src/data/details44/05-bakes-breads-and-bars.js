'use strict';

/**
 * Volume forty-four — bakes, breads and bars, fifth part.
 *
 * Apple pie cookies, a raspberry ripple cheesecake, key lime bars,
 * banoffee and sticky toffee cupcakes, peanut butter blondies, lemon
 * blueberry and cranberry orange muffins, Irish brown bread and treacle
 * bread, jalapeno cornbread, honey wheat bread, an everything bagel dip,
 * cinnamon raisin bagels, iced buns and bakewell slices. Times are the
 * recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'apple-pie-cookies': {
    d: 'Soft cinnamon cookie dough sandwiched round a spoonful of spiced apple filling and baked until golden at the edges.',
    meta: 'Apple pie cookies: cinnamon cookie dough wrapped round a spiced apple filling, baked for 15 minutes. Twelve cookies.',
    kw: ['apple pie cookies', 'stuffed apple pie cookies', 'apple pie filled cookies', 'cinnamon apple pie cookies', 'homemade apple pie cookies'],
    why: 'Cook the apples first. That is the single most useful instruction, because raw apple releases water as it bakes and turns the cookie soggy from the inside.\n\nSimmer the diced apple with the sugar, cinnamon and lemon juice for 8 minutes, until soft and syrupy, then stir in a spoonful of cornflour to thicken it. Cool the filling completely. Warm filling melts the dough as you shape it. **Keep the filling thick.** A runny one leaks through the seams and burns on the tray.\n\nMake the dough from butter, sugar, egg, flour and a pinch of cinnamon. It should be soft but not sticky. Flatten a ball of dough in your palm, put a teaspoon of filling in the middle and fold the dough up around it, sealing the seam well.\n\nBake at 180°C for 15 minutes, until golden at the edges. If your oven runs hot, check at 12 minutes. Cool on the tray for 5 minutes.',
    ing: [
      '2 apples, about 300 g, peeled and diced',
      '2 tbsp caster sugar',
      '1 tsp ground cinnamon',
      '1 tbsp lemon juice',
      '1 tsp cornflour',
      '120 g butter, softened',
      '120 g soft light brown sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '250 g plain flour',
      '1/2 tsp baking powder',
      '1/2 tsp ground cinnamon, for the dough',
      '1/4 tsp salt'
    ],
    st: [
      'Simmer the apples with the caster sugar, cinnamon and lemon juice for 8 minutes until soft. Stir in the cornflour for 1 minute and cool completely.',
      'Heat the oven to 180°C and line two trays. Beat the butter and brown sugar until pale, then beat in the egg and vanilla.',
      'Mix in the flour, baking powder, cinnamon and salt to a soft dough.',
      'Flatten a walnut-sized ball of dough in your palm, put a teaspoon of filling in the middle, fold the dough round it and seal. Make twelve.',
      'Bake for 15 minutes until golden at the edges. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Cook the apples first.',
      'Cool the filling.',
      'If your oven runs hot, check at 12 minutes.',
      'Seal the seams well.'
    ],
    pair: ['Vanilla ice cream', 'Hot tea', 'Custard', 'Warm milk'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [221, 3, 32, 9, 1, 14, 80]
  },

  'raspberry-ripple-cheesecake': {
    d: 'A baked vanilla cheesecake on a biscuit base, swirled with a tart raspberry sauce and chilled overnight.',
    meta: 'Raspberry ripple cheesecake: a baked vanilla cheesecake with a raspberry swirl on a biscuit base. Ten servings, baked for 50 minutes, then chilled for 4 hours.',
    kw: ['raspberry ripple cheesecake', 'baked raspberry ripple cheesecake', 'raspberry swirl cheesecake', 'vanilla cheesecake with raspberry ripple', 'raspberry cheesecake with biscuit base'],
    why: 'Cool the cheesecake slowly. That is the most useful instruction, because a sudden change in temperature is what causes the cracks that ruin the top.\n\nMake the base from crushed digestive biscuits and melted butter, and press it firmly into the tin. Beat the cream cheese with the sugar only until smooth, then add the eggs one at a time on the lowest speed. Too much air puffs the filling up in the oven and it collapses as it cools. **Mix on a low speed.** Fast beating is the cause of most cracked tops.\n\nSimmer the raspberries with a spoonful of sugar for 5 minutes, sieve out the seeds and cool the sauce. Pour the filling onto the base, drizzle over the sauce and drag a skewer through to make ripples.\n\nBake at 150°C for 50 minutes until set but with a slight wobble. Turn the oven off and leave the door ajar for 30 minutes. Chill for at least 4 hours.',
    ing: [
      '200 g digestive biscuits, crushed',
      '90 g butter, melted',
      '600 g full-fat cream cheese',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '1 tsp vanilla extract',
      '150 ml soured cream',
      '250 g raspberries',
      '2 tbsp caster sugar, for the sauce'
    ],
    st: [
      'Heat the oven to 150°C. Mix the biscuit crumbs with the butter and press into the base of a 23 cm springform tin.',
      'Simmer the raspberries with the 2 tbsp of sugar for 5 minutes, sieve out the seeds and cool.',
      'Beat the cream cheese with the 150 g of sugar on a low speed until smooth, then beat in the eggs one at a time, followed by the vanilla and soured cream.',
      'Pour onto the base, drizzle over the sauce and drag a skewer through to ripple.',
      'Bake for 50 minutes until set with a slight wobble. Turn the oven off and leave the door ajar for 30 minutes.',
      'Chill for 4 hours before serving.'
    ],
    tips: [
      'Beat on a low speed.',
      'Cool it slowly.',
      'Do not overbake it.',
      'Chill for a clean slice.'
    ],
    pair: ['Fresh raspberries', 'Whipped cream', 'Coffee', 'Sparkling wine'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [270, 'Cooling and chilling'],
    nut: [504, 8, 37, 36, 2, 25, 300]
  },

  'key-lime-bars': {
    d: 'A buttery graham cracker base topped with a set key lime custard of condensed milk, egg yolks and lime juice.',
    meta: 'Key lime bars: a graham cracker base with a set lime and condensed milk custard. Sixteen bars, baked for 20 minutes, then chilled for 2 hours.',
    kw: ['key lime bars', 'key lime pie bars', 'easy key lime bars', 'lime bars with graham cracker crust', 'creamy key lime bars'],
    why: 'Condensed milk, egg yolks and lime juice: three things that set into a custard when baked, with no cornflour and no stirring on the hob. The acid in the lime thickens the milk, and the yolks set it.\n\nCrush the graham crackers finely, mix them with the sugar and melted butter and press them firmly into a lined tin. Bake the base for 10 minutes first so it stays crisp under the filling. Whisk the yolks with the condensed milk and lime juice until smooth, add the zest, and pour over the hot base. **Use fresh lime juice.** Bottled juice tastes flat and the bars lose their sharpness.\n\nBake at 175°C for 15 to 20 minutes, until the filling is set at the edges and wobbles slightly in the centre. If your oven runs hot, check at 15 minutes.\n\nCool in the tin, chill for 2 hours and cut into squares. Top with whipped cream if you like.',
    ing: [
      '200 g graham crackers, finely crushed',
      '2 tbsp caster sugar',
      '100 g butter, melted',
      '4 egg yolks, about 80 g',
      '400 g sweetened condensed milk',
      '120 ml fresh lime juice',
      '2 limes, about 100 g, zested'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Mix the crumbs with the sugar and butter and press into the base.',
      'Bake the base for 10 minutes.',
      'Whisk the egg yolks with the condensed milk, lime juice and zest until smooth and pour over the hot base.',
      'Bake for 15 to 20 minutes until set at the edges with a slight wobble in the middle.',
      'Cool in the tin, then chill for 2 hours before cutting into sixteen bars.'
    ],
    tips: [
      'Press the base firmly.',
      'Use fresh lime juice.',
      'If your oven runs hot, check at 15 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Lime wedges', 'Coffee'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [120, 'Chilling'],
    nut: [210, 4, 26, 10, 1, 19, 110]
  },

  'banoffee-cupcakes': {
    d: 'Banana sponge cupcakes with a toffee centre, topped with whipped cream, a slice of banana and a crumbled biscuit.',
    meta: 'Banoffee cupcakes: banana sponge cupcakes with a toffee filling, cream and crumbled biscuit. Twelve cupcakes, baked for 20 minutes.',
    kw: ['banoffee cupcakes', 'banoffee pie cupcakes', 'banana and toffee cupcakes', 'banoffee cupcakes with whipped cream', 'banana cupcakes with toffee'],
    why: 'What makes a banoffee pie a banoffee pie? Bananas, toffee and cream on a biscuit base. These cupcakes keep that order and give it a sponge.\n\nUse very ripe bananas, mashed until nearly smooth, because they supply sweetness and moisture. Beat the butter and sugar until pale, add the egg and mashed banana, and fold in the flour and baking powder. The batter will be soft. Fill the cases two-thirds full and bake at 180°C for 20 minutes. If your oven runs hot, check at 17 minutes. **Wait until the cakes are fully cool before filling.** Warm cakes melt the cream.\n\nCut a small cone from the top of each cake and spoon in a teaspoon of dulce de leche. Replace the lid, top with whipped cream, a slice of banana dipped in lemon juice, and a crumble of digestive biscuit.\n\nAssemble just before serving, because the banana browns. Dulce de leche is sold in jars, and a tin of caramel works too.',
    ing: [
      '100 g butter, softened',
      '120 g caster sugar',
      '1 egg, about 50 g',
      '2 very ripe bananas, about 200 g peeled, mashed',
      '1 tsp vanilla extract',
      '180 g self-raising flour',
      '60 ml whole milk',
      '120 g dulce de leche',
      '200 ml double cream, whipped',
      '1 banana, about 100 g, sliced',
      '1 tsp lemon juice',
      '30 g digestive biscuits, crumbled'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole tin with cases. Beat the butter and sugar until pale, then beat in the egg, mashed banana and vanilla.',
      'Fold in the flour and milk until just combined and divide between the cases.',
      'Bake for 20 minutes until springy. Cool fully on a rack.',
      'Cut a small cone from the top of each cake, spoon in the dulce de leche and replace the lid.',
      'Top with the whipped cream, banana slices tossed in the lemon juice, and the crumbled biscuit.'
    ],
    tips: [
      'Use very ripe bananas.',
      'Cool the cakes fully.',
      'If your oven runs hot, check at 17 minutes.',
      'Add the fresh banana last.'
    ],
    pair: ['Tea', 'Coffee', 'Hot chocolate', 'Milk'],
    store: 'Best eaten the day they are topped. Keep undecorated cakes in an airtight tin for 2 days.',
    nut: [291, 4, 35, 15, 1, 20, 40]
  },

  'sticky-toffee-cupcakes': {
    d: 'Date sponge cupcakes soaked with warm toffee sauce and topped with a swirl of toffee buttercream.',
    meta: 'Sticky toffee cupcakes: date sponge cupcakes soaked with toffee sauce, with toffee buttercream. Twelve cupcakes, baked for 20 minutes.',
    kw: ['sticky toffee cupcakes', 'sticky toffee pudding cupcakes', 'date and toffee cupcakes', 'sticky toffee cupcakes with buttercream', 'toffee sauce cupcakes'],
    why: 'Can you fit a sticky toffee pudding into a cupcake case? Yes, and the date sponge is why. It stays soft and damp for days, which ordinary sponge does not.\n\nSoak the chopped dates in boiling water with the bicarbonate of soda for 10 minutes, then blend them to a rough purée. The bicarbonate breaks the skins down and gives the sponge its dark colour. Beat in the butter, sugar, eggs and flour. The batter looks loose, and that is correct. **Do not add extra flour.** The cakes are meant to be very moist.\n\nBake at 180°C for 20 minutes. If your oven runs hot, check at 17 minutes. While they are still warm, prick the tops and spoon over some warm toffee sauce, which soaks in and makes them sticky.\n\nBeat the rest of the sauce into the buttercream once it has cooled, pipe it on top and serve.',
    ing: [
      '150 g dates, stoned and chopped',
      '150 ml boiling water',
      '1/2 tsp bicarbonate of soda',
      '60 g butter, softened',
      '120 g soft dark brown sugar',
      '2 eggs, about 100 g',
      '150 g self-raising flour',
      '1 tsp vanilla extract',
      '100 g soft dark brown sugar, for the sauce',
      '60 g butter, for the sauce',
      '150 ml double cream, for the sauce',
      '125 g butter, for the buttercream',
      '250 g icing sugar'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole tin with cases. Soak the dates in the boiling water with the bicarbonate of soda for 10 minutes, then blend roughly.',
      'Beat the 60 g of butter and the 120 g of sugar until pale, then beat in the eggs. Fold in the flour, vanilla and date mixture.',
      'Divide between the cases and bake for 20 minutes until springy.',
      'Melt the 100 g of sugar, 60 g of butter and cream in a pan, boil for 3 minutes and cool slightly. Prick the warm cakes and spoon over half the sauce.',
      'Beat the 125 g of butter with the icing sugar and 2 tbsp of the cooled sauce until fluffy. Pipe on top and serve.'
    ],
    tips: [
      'Soak the dates in bicarbonate.',
      'Expect a loose batter.',
      'Pour the sauce over warm cakes.',
      'Cool the sauce before the buttercream.'
    ],
    pair: ['Custard', 'Tea', 'Vanilla ice cream', 'Coffee'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [442, 3, 58, 22, 1, 47, 70]
  },

  'peanut-butter-blondies': {
    d: 'Chewy brown sugar blondies with peanut butter swirled through and a handful of chocolate chips.',
    meta: 'Peanut butter blondies: chewy brown sugar blondies with peanut butter and chocolate chips. Sixteen squares, baked for 25 minutes.',
    kw: ['peanut butter blondies', 'chewy peanut butter blondies', 'peanut butter chocolate chip blondies', 'blondies with peanut butter', 'peanut butter blondie bars'],
    why: 'A blondie is a brownie without the cocoa, and the flavour comes from brown sugar and butter instead. Add peanut butter and it tastes like a cookie bar that took a shortcut to the oven.\n\nMelt the butter and stir in the brown sugar, which dissolves into a glossy caramel-like mixture. Beat in the egg, vanilla and peanut butter, then fold in the flour, baking powder and salt. Stop as soon as no dry flour is visible. **Underbake it slightly.** Blondies firm up as they cool, and one baked until a skewer comes out dry is cakey and not chewy.\n\nFold in the chocolate chips and spread the batter in a lined tin. Dollop extra peanut butter on top and drag a knife through it once.\n\nBake at 175°C for 25 minutes. If your oven runs hot, check at 22 minutes. The centre should look a little soft. Cool in the tin before cutting.',
    ing: [
      '115 g butter, melted',
      '200 g soft light brown sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '120 g smooth peanut butter',
      '150 g plain flour',
      '1/2 tsp baking powder',
      '1/2 tsp salt',
      '100 g chocolate chips',
      '40 g smooth peanut butter, for the top'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Stir the butter and brown sugar together until glossy.',
      'Beat in the egg, vanilla and the 120 g of peanut butter. Fold in the flour, baking powder and salt, then the chocolate chips.',
      'Spread in the tin, dollop the 40 g of peanut butter on top and swirl once with a knife.',
      'Bake for 25 minutes until golden with a slightly soft centre.',
      'Cool completely in the tin before cutting into sixteen.'
    ],
    tips: [
      'Do not overmix.',
      'Underbake slightly.',
      'If your oven runs hot, check at 22 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Coffee', 'Banana slices'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [216, 4, 23, 12, 1, 13, 100]
  },

  'lemon-blueberry-muffins': {
    d: 'Tender muffins with lemon zest and juice and whole blueberries, baked until domed and golden.',
    meta: 'Lemon blueberry muffins: tender muffins with lemon zest and blueberries, baked for 22 minutes. Twelve muffins.',
    kw: ['lemon blueberry muffins', 'bakery style lemon blueberry muffins', 'fresh blueberry lemon muffins', 'moist lemon blueberry muffins', 'lemon and blueberry muffins with sugar top'],
    why: 'Muffins are a quick bread, and the secret is to treat the batter gently. Stir until the flour has just disappeared, and stop. Lumps are fine, since they bake out, and overmixing is what makes muffins tough and tunnelled.\n\nWhisk the dry ingredients in one bowl and the wet in another, and combine them with a few strokes of a spatula. Toss the blueberries in a spoonful of flour first, which helps keep them from sinking to the base. **Fill the cases to the top.** A full case gives a high, domed top, and a half-filled one gives a flat muffin.\n\nSprinkle a little coarse sugar over each for a crisp crust. Bake at 200°C for 5 minutes, then lower the oven to 180°C and bake for 17 minutes more. The hot start sets the dome. If your oven runs hot, check at 20 minutes in total.\n\nCool in the tin for 5 minutes before moving them to a rack.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '150 g caster sugar',
      '2 lemons, about 200 g, zested, plus 2 tbsp juice',
      '2 eggs, about 100 g',
      '240 ml whole milk',
      '100 ml vegetable oil',
      '200 g blueberries',
      '1 tbsp plain flour, for the berries',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Heat the oven to 200°C and line a 12-hole muffin tin. Whisk the 300 g of flour, baking powder, salt, sugar and lemon zest.',
      'Whisk the eggs, milk, oil and lemon juice in a jug and pour into the dry mix. Stir with a few strokes until just combined.',
      'Toss the blueberries in the 1 tbsp of flour and fold in gently.',
      'Fill the cases to the top and sprinkle with the coarse sugar.',
      'Bake for 5 minutes, lower the oven to 180°C and bake for 17 minutes more until golden. Cool in the tin for 5 minutes.'
    ],
    tips: [
      'Stir until just combined.',
      'Toss the berries in flour.',
      'Fill the cases fully.',
      'If your oven runs hot, check at 20 minutes in total.'
    ],
    pair: ['Tea', 'Coffee', 'Orange juice', 'Greek yoghurt'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [257, 5, 39, 9, 2, 18, 200]
  },

  'cranberry-orange-muffins': {
    d: 'Muffins flavoured with orange zest and juice and studded with fresh cranberries, finished with a sugar crust.',
    meta: 'Cranberry orange muffins: orange muffins studded with cranberries, baked for 22 minutes. Twelve muffins.',
    kw: ['cranberry orange muffins', 'fresh cranberry orange muffins', 'orange and cranberry muffins', 'bakery style cranberry orange muffins', 'cranberry orange muffins with sugar top'],
    why: 'Cranberries, orange, flour, sugar and an egg: five things and about forty minutes. Fresh cranberries are sharp and a little bitter, and the orange tempers them.\n\nCut the cranberries in half so that they release their juice into the batter and do not sit as hard little lumps. Rub the orange zest into the sugar with your fingertips until it smells of oranges and looks damp, because that pushes the oils into the sugar and flavours the whole muffin. **Zest the orange before you juice it.** A squeezed orange is nearly impossible to zest.\n\nWhisk the wet and dry mixtures separately and combine with a few strokes. Stop while the batter is lumpy.\n\nFill the cases fully, sprinkle with sugar and bake at 200°C for 5 minutes, then 180°C for 17 minutes. If your oven runs hot, check at 20 minutes in total. Cool in the tin for 5 minutes.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '150 g caster sugar',
      '2 oranges, about 300 g, zested, plus 60 ml juice',
      '2 eggs, about 100 g',
      '180 ml whole milk',
      '100 ml vegetable oil',
      '200 g fresh cranberries, halved',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Heat the oven to 200°C and line a 12-hole muffin tin. Rub the orange zest into the caster sugar with your fingertips.',
      'Whisk in the flour, baking powder and salt.',
      'Whisk the eggs, milk, oil and orange juice and pour into the dry mix. Stir with a few strokes, then fold in the cranberries.',
      'Fill the cases to the top and sprinkle with the coarse sugar.',
      'Bake for 5 minutes, lower the oven to 180°C and bake for 17 minutes more until golden.'
    ],
    tips: [
      'Halve the cranberries.',
      'Rub the zest into the sugar.',
      'Stop mixing while lumpy.',
      'If your oven runs hot, check at 20 minutes in total.'
    ],
    pair: ['Tea', 'Coffee', 'Orange juice', 'Cream cheese'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [257, 4, 40, 9, 2, 18, 200]
  },

  'irish-brown-bread': {
    d: 'A quick wholemeal soda bread raised with bicarbonate of soda and buttermilk, baked until the crust sounds hollow.',
    meta: 'Irish brown bread: a wholemeal soda bread raised with buttermilk and bicarbonate of soda. Eight slices, baked for 45 minutes.',
    kw: ['irish brown bread', 'traditional irish brown soda bread', 'wholemeal irish brown bread', 'irish brown bread with buttermilk', 'no yeast irish brown bread'],
    why: 'Mix it fast and bake it at once. That is the most useful instruction, because the raising agent starts working the moment the buttermilk touches the bicarbonate of soda, and every minute of delay is lost rise.\n\nStir the wholemeal flour, plain flour, bran, salt and bicarbonate together in a big bowl. Make a well, pour in most of the buttermilk and mix with one hand until the dough just comes together. It should be soft and a little sticky, and the less you handle it the lighter the bread. **Do not knead it.** Kneading makes soda bread tough.\n\nShape into a round, set it on a floured tray and cut a deep cross in the top, which helps it bake through in the middle.\n\nBake at 200°C for 15 minutes, then lower the oven to 180°C and bake for 30 minutes more. If your oven runs hot, check at 40 minutes in total. It is done when it sounds hollow when tapped underneath.',
    ing: [
      '300 g wholemeal flour',
      '150 g plain flour',
      '30 g wheat bran',
      '1 tsp salt',
      '1 tsp bicarbonate of soda',
      '400 ml buttermilk',
      '1 tbsp plain flour, for dusting'
    ],
    st: [
      'Heat the oven to 200°C and dust a tray with flour. Mix the wholemeal flour, plain flour, bran, salt and bicarbonate of soda in a large bowl.',
      'Make a well, pour in most of the buttermilk and mix quickly until the dough just comes together, adding the rest if needed.',
      'Shape into a round, set on the tray and cut a deep cross in the top.',
      'Bake for 15 minutes, lower the oven to 180°C and bake for 30 minutes more until it sounds hollow underneath.',
      'Cool on a rack before slicing.'
    ],
    tips: [
      'Bake as soon as it is mixed.',
      'Do not knead.',
      'If your oven runs hot, check at 40 minutes in total.',
      'Tap the base to test.'
    ],
    pair: ['Salted butter', 'Smoked salmon', 'Cheddar', 'Vegetable soup'],
    store: 'Best on the day it is baked. Keeps wrapped for 3 days, and is good toasted.',
    nut: [234, 9, 45, 2, 6, 3, 510]
  },

  'treacle-bread': {
    d: 'A dark, slightly sweet soda bread made with black treacle, wholemeal flour and buttermilk.',
    meta: 'Treacle bread: a dark, lightly sweet soda bread with black treacle and buttermilk. Eight slices, baked for 40 minutes.',
    kw: ['treacle bread', 'irish treacle bread', 'treacle soda bread', 'dark treacle bread with buttermilk', 'sweet treacle soda bread'],
    why: 'This is what to bake when the days draw in and the oven is a welcome source of heat. Treacle bread is a soda bread with a deep, dark flavour that is closer to gingerbread than to a plain loaf.\n\nMeasure the treacle onto a warmed spoon, or dip the spoon in hot water first, so that it slides off easily. Whisk it into the buttermilk until it dissolves. Stir the wholemeal and plain flours, oats, bicarbonate of soda and salt in a large bowl, pour in the treacle mixture and mix quickly. The dough should be soft and sticky. **Mix it as little as you can.** Soda bread turns heavy if it is worked.\n\nShape into a round, set it on a floured tray and cut a deep cross in the top.\n\nBake at 190°C for 40 minutes. If your oven runs hot, check at 35 minutes. The crust should be dark brown and the loaf should sound hollow underneath. Cool before slicing, and serve with plenty of butter.',
    ing: [
      '300 g wholemeal flour',
      '150 g plain flour',
      '50 g rolled oats',
      '1 tsp bicarbonate of soda',
      '1 tsp salt',
      '3 tbsp black treacle',
      '400 ml buttermilk',
      '1 tbsp plain flour, for dusting'
    ],
    st: [
      'Heat the oven to 190°C and dust a tray with flour. Mix the wholemeal flour, plain flour, oats, bicarbonate of soda and salt.',
      'Whisk the treacle into the buttermilk until dissolved and pour into the flour mixture. Mix quickly to a soft, sticky dough.',
      'Shape into a round on the tray and cut a deep cross in the top.',
      'Bake for 40 minutes until dark brown and hollow-sounding underneath.',
      'Cool on a rack before slicing.'
    ],
    tips: [
      'Use a warm spoon for the treacle.',
      'Mix as little as you can.',
      'If your oven runs hot, check at 35 minutes.',
      'Cool before slicing.'
    ],
    pair: ['Salted butter', 'Mature cheddar', 'Marmalade', 'Strong tea'],
    store: 'Keeps wrapped for 4 days. Good toasted.',
    nut: [254, 9, 50, 2, 5, 7, 510]
  },

  'jalapeno-cornbread': {
    d: 'A moist cornbread with diced jalapenos and cheddar, baked in a hot skillet until the crust is crisp and golden.',
    meta: 'Jalapeno cornbread: moist cornbread with jalapenos and cheddar, baked in a hot skillet for 25 minutes. Nine servings.',
    kw: ['jalapeno cornbread', 'cheddar jalapeno cornbread', 'skillet jalapeno cornbread', 'spicy jalapeno cornbread', 'jalapeno and cheese cornbread'],
    why: 'Heat the skillet before the batter goes in. That is the most useful instruction here, because batter poured into a screaming-hot, buttered pan sizzles and sets a crisp golden crust that a cold tin never gives.\n\nPut the skillet in the oven while it heats to 220°C, with a spoonful of butter in it. Whisk the cornmeal, flour, baking powder and salt in one bowl, and the eggs, buttermilk and melted butter in another. Combine them quickly, and fold in the cheese and jalapenos. **Do not overmix.** Overmixed cornbread is dense and dry.\n\nPour the batter into the hot skillet, where it should sizzle at the edges, and bake for 25 minutes. If your oven runs hot, check at 20 minutes. It is done when the top is golden and a skewer comes out clean.\n\nRemove the seeds from the jalapenos for a milder bread, or leave them in for more fire. Cool for 5 minutes and cut into wedges.',
    ing: [
      '200 g cornmeal',
      '100 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '2 eggs, about 100 g',
      '300 ml buttermilk',
      '60 g butter, melted',
      '15 g butter, for the pan',
      '100 g cheddar, grated',
      '2 jalapenos, about 40 g, seeded and diced'
    ],
    st: [
      'Heat the oven to 220°C and put a 23 cm cast iron skillet with the 15 g of butter inside to heat.',
      'Whisk the cornmeal, flour, baking powder and salt. Whisk the eggs, buttermilk and melted butter in a jug.',
      'Combine quickly, then fold in the cheese and jalapenos.',
      'Pour the batter into the hot skillet and bake for 25 minutes until golden.',
      'Cool for 5 minutes and cut into wedges.'
    ],
    tips: [
      'Heat the skillet first.',
      'Do not overmix.',
      'If your oven runs hot, check at 20 minutes.',
      'Take out the jalapeno seeds for less heat.'
    ],
    pair: ['Chilli', 'Honey butter', 'Barbecue ribs', 'Black bean soup'],
    store: 'Keeps wrapped for 3 days. Reheat in a hot oven.',
    nut: [261, 8, 28, 13, 2, 2, 360]
  },

  'honey-wheat-bread': {
    d: 'A soft sandwich loaf made with wholemeal and white flour, sweetened with honey and raised with yeast.',
    meta: 'Honey wheat bread: a soft wholemeal sandwich loaf sweetened with honey. Ten slices, baked for 35 minutes after 90 minutes rising.',
    kw: ['honey wheat bread', 'soft honey wheat bread', 'homemade honey wheat sandwich bread', 'honey wholemeal bread', 'honey wheat bread loaf'],
    why: 'Wheat bread is the sort of loaf that most people buy and few bake, which is a pity, because the homemade one is softer and keeps its flavour. Honey is the secret to the soft crumb and the golden crust.\n\nMix the flours, yeast and salt, warm the milk and water with the honey and butter until just lukewarm, and combine into a dough. Knead for 10 minutes until it is smooth and elastic and springs back when pressed. A properly kneaded dough passes the windowpane test: a small piece stretches thin enough to see light through without tearing. **Do not use hot liquid.** It kills the yeast.\n\nLeave the dough to rise in an oiled bowl for 1 hour until doubled. Shape it into a loaf, put it in a tin and leave it to rise for 30 minutes until it crowns above the rim.\n\nBake at 190°C for 35 minutes until golden and hollow-sounding. Cool on a rack.',
    ing: [
      '300 g wholemeal flour',
      '250 g strong white flour',
      '7 g fast-action dried yeast',
      '1 tsp salt',
      '200 ml whole milk, warm',
      '100 ml water, warm',
      '3 tbsp honey',
      '30 g butter, melted',
      '1 tbsp vegetable oil, for the bowl'
    ],
    st: [
      'Mix the flours, yeast and salt in a large bowl. Stir the milk, water, honey and butter together and add to the flour. Mix to a dough.',
      'Knead for 10 minutes until smooth and elastic.',
      'Leave to rise in an oiled bowl, covered, for 1 hour until doubled.',
      'Shape into a loaf, put it in a greased 900 g loaf tin and leave to rise for 30 minutes.',
      'Heat the oven to 190°C and bake for 35 minutes until golden and hollow-sounding underneath. Cool on a rack.'
    ],
    tips: [
      'Use lukewarm liquid.',
      'Knead until elastic.',
      'If your oven runs hot, check at 30 minutes.',
      'Cool before slicing.'
    ],
    pair: ['Butter and honey', 'Cheddar', 'Vegetable soup', 'Jam'],
    store: 'Keeps wrapped for 4 days. Slices freeze well.',
    rest: [90, 'Rising'],
    nut: [262, 7, 45, 6, 4, 7, 250]
  },

  'everything-bagel-dip': {
    d: 'A cold dip of cream cheese, soured cream and chives, flavoured with everything bagel seasoning.',
    meta: 'Everything bagel dip: cream cheese, soured cream and chives with everything bagel seasoning. Eight servings, no cooking.',
    kw: ['everything bagel dip', 'cream cheese everything bagel dip', 'everything bagel seasoning dip', 'creamy everything bagel dip', 'everything bagel dip with chives'],
    why: 'This is what to make for the first warm week of summer, when a bowl of something cold and creamy with crackers is all the cooking anyone wants to do. It takes five minutes and gets better after an hour in the fridge.\n\nLeave the cream cheese out for 30 minutes so that it is soft. Cold cream cheese stays lumpy however hard you stir. Beat it with the soured cream until smooth, then stir in the chives, garlic powder, lemon juice and most of the seasoning. **Save some seasoning for the top.** The sprinkle on the surface is the part that people see, and it should look generous.\n\nTaste and add salt only if it needs it, because the seasoning mix is already salty. Spoon into a bowl, sprinkle over the rest and chill for an hour.\n\nServe with crackers, pretzels, cucumber slices and carrot sticks, or spread on bagels.',
    ing: [
      '250 g cream cheese, softened',
      '120 g soured cream',
      '10 g chives, finely chopped',
      '1/2 tsp garlic powder',
      '1 tsp lemon juice',
      '2 tbsp everything bagel seasoning',
      '1 tbsp everything bagel seasoning, for the top'
    ],
    st: [
      'Beat the cream cheese with the soured cream until smooth.',
      'Stir in the chives, garlic powder, lemon juice and the 2 tbsp of seasoning.',
      'Spoon into a bowl, sprinkle with the 1 tbsp of seasoning and chill until ready to serve.'
    ],
    tips: [
      'Soften the cream cheese first.',
      'Save seasoning for the top.',
      'Taste before adding salt.',
      'Make it an hour ahead.'
    ],
    pair: ['Crackers', 'Pretzels', 'Cucumber slices', 'Carrot sticks'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [158, 3, 5, 14, 0, 2, 120]
  },

  'cinnamon-raisin-bagels': {
    d: 'Chewy bagels with cinnamon and raisins, boiled briefly in honey water and baked until deep golden.',
    meta: 'Cinnamon raisin bagels: chewy yeast bagels with cinnamon and raisins, boiled then baked. Eight bagels, baked for 25 minutes after proving.',
    kw: ['cinnamon raisin bagels', 'homemade cinnamon raisin bagels', 'chewy cinnamon raisin bagels', 'boiled cinnamon raisin bagels', 'cinnamon and raisin bagels from scratch'],
    why: 'Flour, yeast, water, cinnamon and raisins: five things, and a short boil that does the clever part. The boil sets the outside before the oven, which is what gives a bagel its shiny, chewy crust and dense crumb.\n\nBagel dough is stiff, much stiffer than bread dough, and it will be hard work to knead. That is correct, and it is the reason for the chew. Knead for 10 minutes until it is smooth and firm, then work in the raisins last so they do not tear. **Do not add extra water.** A softer dough gives a bread roll with a hole in it.\n\nLeave it to prove for 1 hour until about one and a half times its size. Divide into eight, roll each into a rope, and join the ends into a ring. Rest them for 20 minutes.\n\nBoil in honey water for 1 minute a side, and bake at 220°C for 25 minutes until deep gold.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action dried yeast',
      '2 tsp salt',
      '2 tbsp caster sugar',
      '2 tsp ground cinnamon',
      '280 ml warm water',
      '100 g raisins',
      '1 tbsp vegetable oil, for the bowl',
      '2 litres water, for boiling',
      '2 tbsp honey'
    ],
    st: [
      'Mix the flour, yeast, salt, sugar and cinnamon. Add the warm water and mix to a stiff dough.',
      'Knead for 10 minutes until smooth and firm, then knead in the raisins.',
      'Leave to prove in an oiled bowl, covered, for 1 hour.',
      'Divide into eight, roll each into a rope and join the ends into a ring. Rest for 20 minutes. Heat the oven to 220°C.',
      'Boil the 2 litres of water with the honey and simmer the bagels for 1 minute a side.',
      'Bake on a lined tray for 25 minutes until deep gold. Cool on a rack.'
    ],
    tips: [
      'Keep the dough stiff.',
      'Knead in the raisins last.',
      'If your oven runs hot, check at 20 minutes.',
      'Do not skip the boil.'
    ],
    pair: ['Cream cheese', 'Butter', 'Peanut butter', 'Coffee'],
    store: 'Best on the day. Keeps in a bag for 3 days. Slice and toast.',
    rest: [60, 'Proving'],
    nut: [315, 7, 65, 3, 3, 15, 590]
  },

  'iced-buns': {
    d: 'Soft, sweet yeast buns baked in a tray and topped with white glacé icing.',
    meta: 'Iced buns: soft sweet yeast buns baked in a tray and topped with white icing. Twelve buns, baked for 15 minutes after proving.',
    kw: ['iced buns', 'british iced buns', 'soft iced buns with glace icing', 'homemade iced buns', 'iced finger buns'],
    why: 'Most home versions come out dense, and the fix is a warm, soft dough and enough time. A bun is a rich dough with milk, butter and egg, and it needs a long, gentle rise to turn light.\n\nWarm the milk until it is just lukewarm, since hot milk kills the yeast. Mix the flour, sugar, salt and yeast, then add the milk, egg and butter and knead for 10 minutes until the dough is smooth, soft and slightly sticky. Do not add much extra flour. **A slightly sticky dough makes a lighter bun.** A stiff one bakes hard.\n\nLeave it to rise for 1 hour until doubled. Divide into twelve, shape into fingers, set them close together on a tray so that they join as they rise, and leave for 20 minutes.\n\nBake at 200°C for 15 minutes until golden. Cool completely before icing, or the icing slides off.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action dried yeast',
      '60 g caster sugar',
      '1/2 tsp salt',
      '250 ml whole milk, warm',
      '1 egg, about 50 g',
      '50 g butter, melted',
      '1 tbsp vegetable oil, for the bowl',
      '250 g icing sugar',
      '3 tbsp water'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the milk, egg and butter and knead for 10 minutes to a smooth, soft dough.',
      'Leave to rise in an oiled bowl, covered, for 1 hour until doubled.',
      'Divide into twelve, shape into fingers and set close together on a lined tray. Leave for 20 minutes. Heat the oven to 200°C.',
      'Bake for 15 minutes until golden and cool completely.',
      'Stir the icing sugar with the water into a thick icing and spread over the cooled buns.'
    ],
    tips: [
      'Use lukewarm milk.',
      'Keep the dough soft.',
      'If your oven runs hot, check at 12 minutes.',
      'Cool before icing.'
    ],
    pair: ['Tea', 'Milk', 'Cherries', 'Butter'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    rest: [60, 'Rising'],
    nut: [314, 6, 59, 6, 1, 27, 110]
  },

  'bakewell-slices': {
    d: 'A shortcrust base spread with raspberry jam and topped with an almond sponge, baked and finished with white icing.',
    meta: 'Bakewell slices: shortcrust pastry with raspberry jam and almond sponge, iced. Twelve slices, baked for 35 minutes.',
    kw: ['bakewell slices', 'traybake bakewell slices', 'bakewell tart slices', 'raspberry and almond bakewell slices', 'iced bakewell slices'],
    why: 'Bake the pastry first. That is the short, sharp instruction that decides everything, because a raw pastry base under a wet sponge never crisps. Ten minutes in the oven on its own is enough.\n\nPress the pastry into a lined tin, prick it with a fork and bake at 190°C for 10 minutes until pale gold. Spread the jam over it while the base is still warm. The jam spreads more easily, and a thin layer is plenty. Too much leaks into the sponge and makes it soggy. **Spread the jam thin.** The almond flavour should lead.\n\nBeat the butter and sugar, add the eggs and ground almonds with the flour, and spoon the mixture over the jam, smoothing it to the edges. Scatter flaked almonds on top.\n\nBake for 25 minutes. If your oven runs hot, check at 20 minutes. The sponge should be golden and spring back. Cool, then drizzle with icing and cut into slices.',
    ing: [
      '320 g shortcrust pastry, ready-rolled',
      '100 g raspberry jam',
      '125 g butter, softened',
      '125 g caster sugar',
      '2 eggs, about 100 g',
      '100 g ground almonds',
      '50 g self-raising flour',
      '1/2 tsp almond extract',
      '30 g flaked almonds',
      '100 g icing sugar',
      '2 tbsp water'
    ],
    st: [
      'Heat the oven to 190°C. Line a 20 x 30 cm tin with the pastry, prick with a fork and bake for 10 minutes. Lower the oven to 180°C.',
      'Spread the jam thinly over the warm base.',
      'Beat the butter and sugar until pale, then beat in the eggs. Fold in the ground almonds, flour and almond extract and spread over the jam.',
      'Scatter with the flaked almonds and bake for 25 minutes until golden and springy.',
      'Cool completely, drizzle with the icing sugar mixed with the water and cut into twelve.'
    ],
    tips: [
      'Bake the pastry first.',
      'Spread the jam thin.',
      'If your oven runs hot, check at 20 minutes.',
      'Cool before icing.'
    ],
    pair: ['Tea', 'Custard', 'Fresh cherries', 'Coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [382, 5, 41, 22, 2, 25, 170]
  }
};
