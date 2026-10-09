'use strict';

/**
 * Volume forty-one — cakes, slices and sweets, second half.
 *
 * Fudge and gingersnaps, a hazelnut cake and a lemon butter cake, tarts and
 * fruit cakes, rhubarb and plum bakes, brownies, a sponge roll and treacle
 * scones. Times are the recipe's own; ovens differ, so each method says when
 * to check early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'evaporated-milk-fudge': {
    d: 'Soft chocolate fudge made by boiling sugar with evaporated milk and butter, then stirring in chocolate chips.',
    meta: 'Evaporated milk fudge: sugar, evaporated milk and butter boiled and stirred with chocolate. Makes thirty-six squares, cooked for 15 minutes.',
    kw: ['evaporated milk fudge', 'chocolate fudge with evaporated milk', 'old fashioned evaporated milk fudge', 'easy chocolate fudge', 'homemade fudge squares'],
    why: 'Stir all the time. That is most of the recipe, and the part people skip.\n\nThe sugar, evaporated milk and butter go into a heavy pan and are stirred over medium heat until the sugar has dissolved, then brought to a steady boil. Keep stirring for 10 minutes. **A heavy pan matters.** A thin pan creates hot spots where the sugar catches and burns before the rest has cooked.\n\nThe mixture is ready when a spoonful dropped into a cup of cold water forms a soft ball you can squash between your fingers. A sugar thermometer reads 112°C at that point. Take it off the heat at once.\n\nAdd the chocolate chips and vanilla and beat hard for a minute, until the chocolate has melted and the fudge turns glossy and starts to thicken. Pour into a lined tin and leave to set for 2 hours before cutting into 36 small squares. If your hob runs hot, lower the heat as soon as the boil is steady.',
    ing: [
      '400 g caster sugar',
      '170 ml evaporated milk',
      '100 g butter',
      '200 g milk chocolate chips',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Line a 20 cm square tin. Stir the sugar, evaporated milk, butter and salt in a heavy pan over medium heat until the sugar has dissolved.',
      'Bring to a steady boil and cook for 10 minutes, stirring all the time, until a drop in cold water forms a soft ball (112°C).',
      'Take off the heat. Add the chocolate chips and vanilla and beat hard for 1 minute until glossy and thickening.',
      'Pour into the tin and leave to set for 2 hours, then cut into 36 squares.'
    ],
    tips: [
      'Use a heavy pan.',
      'Stir all the time.',
      'If your hob runs hot, lower the heat once boiling.',
      'Beat hard after adding the chocolate.'
    ],
    pair: ['Hot coffee', 'Hot tea', 'Vanilla ice cream', 'Walnuts'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    rest: [120, 'Setting'],
    nut: [79, 1, 12, 3, 0, 12, 10]
  },

  'gingersnaps': {
    d: 'Crisp, spicy ginger biscuits with a crackled sugar top, made with golden syrup, cinnamon and cloves.',
    meta: 'Gingersnaps: crisp, spicy ginger biscuits with golden syrup and a crackled sugar top. Makes twenty-four, baked for 12 minutes.',
    kw: ['gingersnaps', 'crisp gingersnap cookies', 'homemade gingersnaps', 'ginger snap biscuits', 'classic gingersnaps'],
    why: 'The name is an instruction as much as a description: a good gingersnap breaks with a snap. That comes from baking it until it is dry at the edges and leaving it to firm up on the tray.\n\nThe dough is a thick, dark one, made from butter, sugar, golden syrup and an egg, with the flour, bicarbonate and spices stirred in. It will look too stiff, and that is the right texture. **Roll the balls in caster sugar before baking.** The sugar melts and cracks into a sparkling crust as the biscuits spread.\n\nSet the balls 5 cm apart and flatten them very slightly. Bake at 180°C for 12 minutes, until the surface is crackled and the edges are dark. If your oven runs hot, check at 9 minutes. The biscuits are soft when they come out and crisp up as they cool.\n\nLeave them on the tray for 5 minutes, then move them to a rack. For a chewier biscuit, bake for 2 minutes less.',
    ing: [
      '225 g plain flour',
      '2 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1/2 tsp ground cloves',
      '1 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '75 g butter, softened',
      '150 g caster sugar',
      '80 g golden syrup',
      '1 egg, about 50 g',
      '3 tbsp caster sugar for rolling'
    ],
    st: [
      'Heat the oven to 180°C and line two trays. Mix the flour, ginger, cinnamon, cloves, bicarbonate and salt.',
      'Beat the butter and 150 g sugar until pale. Beat in the golden syrup and egg, then stir in the dry mixture to a stiff dough.',
      'Roll into 24 balls, roll each in the rolling sugar and set 5 cm apart. Flatten slightly.',
      'Bake for 12 minutes until crackled and dark at the edges. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Roll the balls in sugar.',
      'Space them well apart.',
      'If your oven runs hot, check at 9 minutes.',
      'Let them crisp on the tray.'
    ],
    pair: ['Hot tea', 'Cold milk', 'Vanilla ice cream', 'Strong coffee'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [103, 1, 18, 3, 0, 11, 80]
  },

  'hazelnut-chocolate-cake': {
    d: 'A rich, almost flourless Italian-style cake of dark chocolate, butter and ground hazelnuts.',
    meta: 'Hazelnut chocolate cake: a rich, almost flourless cake of dark chocolate, butter and ground hazelnuts. Ten slices, baked for 40 minutes.',
    kw: ['hazelnut chocolate cake', 'chocolate and hazelnut cake', 'italian hazelnut chocolate cake', 'flourless hazelnut chocolate cake', 'gianduja style cake'],
    why: 'It looks like a brownie that grew up, and eats like a cross between a cake and a torte. The hazelnuts replace most of the flour, which is why the crumb is dense and moist.\n\nGround hazelnuts are the base, and the flavour is stronger if you toast them first. Spread them on a tray and toast in the oven for 8 minutes until they smell nutty, then cool. **Do not grind them to a paste.** Pulse until they look like coarse sand, or they release their oil and turn the batter greasy.\n\nMelt the chocolate and butter together and let it cool slightly. Beat the eggs and sugar for 3 minutes, until pale and thick, then fold in the chocolate, the nuts, the flour and the cocoa. The batter should fall in slow ribbons.\n\nBake in a lined 20 cm tin at 175°C for 40 minutes. If your oven runs hot, check at 32 minutes. The top should be set and the middle just soft. Cool in the tin and dust with icing sugar.',
    ing: [
      '150 g dark chocolate',
      '150 g butter',
      '150 g caster sugar',
      '4 eggs, about 200 g',
      '120 g ground hazelnuts',
      '30 g plain flour',
      '30 g cocoa powder',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm round tin. Toast the ground hazelnuts on a tray for 8 minutes and cool.',
      'Melt the chocolate and butter together over low heat and cool for 10 minutes.',
      'Beat the eggs and sugar for 3 minutes until pale and thick. Fold in the chocolate mixture, then the hazelnuts, flour and cocoa.',
      'Pour into the tin and bake for 40 minutes until set. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Toast the hazelnuts first.',
      'Do not grind them to a paste.',
      'If your oven runs hot, check at 32 minutes.',
      'Cool in the tin.'
    ],
    pair: ['Whipped cream', 'Espresso', 'Raspberries', 'Dessert wine'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [391, 6, 31, 27, 4, 24, 30]
  },

  'lemon-butter-cake': {
    d: 'A buttery cake made with lemon zest and juice, finished with a thin lemon glaze.',
    meta: 'Lemon butter cake: a buttery sponge with lemon zest and juice, finished with a lemon glaze. Ten slices, baked for 40 minutes.',
    kw: ['lemon butter cake', 'australian lemon butter cake', 'lemon butter cake with glaze', 'easy lemon cake', 'classic lemon butter cake'],
    why: 'Most home versions come out dense, and the fix is to beat the butter and sugar for longer than seems reasonable. Four minutes with an electric whisk turns the mixture pale and fluffy, and the air in it is what lifts the cake.\n\nUse butter that is soft but not oily, and add the eggs one at a time. If the batter looks curdled, add a spoonful of the flour and it recovers. **Add the lemon zest to the sugar first.** Rub them together with your fingertips for a minute, and the oils from the zest spread through the whole cake.\n\nFold in the flour and milk in two parts, with the lemon juice. Pour into a lined 20 cm tin and bake at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes.\n\nMake the glaze while the cake cools. Icing sugar and lemon juice are stirred to a runny paste and spread over the cold cake, where it sets in a thin, shiny sheet.',
    ing: [
      '185 g butter, softened',
      '185 g caster sugar',
      '2 lemons, zest only',
      '3 eggs, about 150 g',
      '250 g self-raising flour',
      '125 ml milk',
      '2 tbsp lemon juice',
      '100 g icing sugar',
      '1 tbsp lemon juice for the glaze'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Rub the lemon zest into the sugar.',
      'Beat the butter and lemon sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, milk and 2 tbsp lemon juice. Pour into the tin and bake for 40 minutes until a skewer comes out clean. Cool.',
      'Stir the icing sugar with the 1 tbsp lemon juice and spread over the cold cake.'
    ],
    tips: [
      'Beat the butter and sugar for 4 minutes.',
      'Rub the zest into the sugar.',
      'If your oven runs hot, check at 32 minutes.',
      'Glaze only when cold.'
    ],
    pair: ['Hot tea', 'Fresh berries', 'Whipped cream', 'Strong coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [373, 5, 50, 17, 1, 30, 30]
  },

  'maids-of-honour': {
    d: 'Small puff pastry tarts with a spoonful of raspberry jam and a lemony ricotta and almond filling.',
    meta: 'Maids of Honour: small puff pastry tarts with raspberry jam and a lemony ricotta and almond filling. Makes twelve, baked for 25 minutes.',
    kw: ['maids of honour', 'maids of honour tarts', 'english maids of honour', 'ricotta almond tarts', 'puff pastry tartlets with almond filling'],
    why: 'It looks like a Bakewell tart and tastes more of lemon and cheese, which is the main difference. A Maid of Honour is smaller, lighter and a little sharper.\n\nTraditionally the filling is made from curd cheese. Ricotta is easier to find and works well, provided it is drained first. Tip it into a sieve for 10 minutes and press out the liquid. **Wet ricotta makes a filling that never sets.** The pastry beneath turns soft and the tarts collapse.\n\nCut the puff pastry into rounds and press them into a 12-hole tin. Put half a teaspoon of jam at the bottom of each, then spoon in the filling, which is ricotta beaten with ground almonds, sugar, egg and lemon zest. Fill to two-thirds.\n\nBake at 200°C for 25 minutes. If your oven runs hot, check at 20 minutes. The pastry should be risen and deep gold and the tops domed. Cool in the tin for 5 minutes. Eat warm or cold.',
    ing: [
      '320 g ready-rolled puff pastry',
      '2 tbsp raspberry jam, about 40 g',
      '150 g ricotta, drained',
      '75 g ground almonds',
      '75 g caster sugar',
      '1 egg, about 50 g',
      '1 lemon, zest only',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 200°C and grease a 12-hole tart tin. Cut 12 rounds from the pastry and press them into the tin.',
      'Put half a teaspoon of jam in each case.',
      'Beat the ricotta with the ground almonds, caster sugar, egg and lemon zest. Spoon into the cases to two-thirds full.',
      'Bake for 25 minutes until risen and deep gold. Cool for 5 minutes and dust with the icing sugar.'
    ],
    tips: [
      'Drain the ricotta.',
      'Do not overfill the cases.',
      'If your oven runs hot, check at 20 minutes.',
      'Eat the same day.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Fresh raspberries', 'Cold milk'],
    store: 'Best on the day. Keeps in an airtight tin for 2 days.',
    nut: [212, 5, 21, 12, 1, 10, 180]
  },

  'orange-poppy-seed-cake': {
    d: 'A buttery orange cake studded with poppy seeds and finished with an orange glaze.',
    meta: 'Orange poppy seed cake: a buttery orange cake with poppy seeds and an orange glaze. Ten slices, baked for 45 minutes.',
    kw: ['orange poppy seed cake', 'orange and poppy seed cake', 'orange poppy seed cake with glaze', 'poppy seed orange cake', 'moist orange poppy seed cake'],
    why: 'Winter is when oranges are at their best, and this cake makes use of the whole fruit: the zest in the batter and the juice in the glaze.\n\nZest the oranges before you juice them, since a juiced orange is almost impossible to grate. Rub the zest into the sugar to release the oils. **Add the poppy seeds to the flour, not to the butter.** They disperse more evenly, and they do not clump in the creamed mixture.\n\nCream the butter and sugar for 4 minutes, beat in the eggs one at a time and fold in the flour, seeds, juice and milk. Bake in a lined 20 cm tin at 170°C for 45 minutes. If your oven runs hot, check at 36 minutes.\n\nWhile the cake is still warm, prick it with a skewer and brush on some of the glaze. Pour the rest over once the cake has cooled. The glaze sinks into the warm crumb and keeps it moist for days.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '2 oranges, zest only',
      '3 eggs, about 150 g',
      '200 g self-raising flour',
      '25 g poppy seeds',
      '60 ml orange juice',
      '2 tbsp milk',
      '100 g icing sugar',
      '2 tbsp orange juice for the glaze'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Rub the orange zest into the sugar.',
      'Beat the butter and sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour mixed with the poppy seeds, then the 60 ml orange juice and the milk. Pour into the tin.',
      'Bake for 45 minutes until a skewer comes out clean. Stir the icing sugar with the 2 tbsp juice, brush some over the warm cake, then pour over the rest when cool.'
    ],
    tips: [
      'Zest before juicing.',
      'Mix the seeds into the flour.',
      'If your oven runs hot, check at 36 minutes.',
      'Glaze the cake while warm.'
    ],
    pair: ['Hot tea', 'Natural yoghurt', 'Fresh orange', 'Strong coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [365, 5, 48, 17, 2, 31, 20]
  },

  'pear-tart': {
    d: 'A shortcrust tart filled with almond cream and sliced pears, brushed with apricot jam.',
    meta: 'Pear tart: a shortcrust tart filled with almond cream and sliced pears, with an apricot glaze. Eight servings, baked for 40 minutes.',
    kw: ['pear tart', 'french pear tart', 'pear and almond tart', 'pear frangipane tart', 'classic pear tart'],
    why: 'Keep the slices thin. That is most of the recipe, and the part people skip.\n\nPears are a wet fruit, and thick slices release their juice into the almond cream, which turns the tart soggy. Core and slice them about 4 mm thick, and pat them dry on kitchen paper. **Use pears that are ripe but still firm.** Soft ones turn to mush in the oven.\n\nBlind bake the case for 15 minutes at 190°C with baking paper and beans, then for 5 minutes more without. This sets the pastry so that the cream does not soak in. Beat the butter, sugar, eggs and ground almonds into a smooth paste and spread it in the case.\n\nFan the pears over the top, pressing them gently into the cream, and bake for 25 minutes more. If your oven runs hot, check at 20 minutes. Warm the apricot jam with a spoon of water and brush it over the hot tart for a shine.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '100 g butter, softened',
      '100 g caster sugar',
      '2 eggs, about 100 g',
      '100 g ground almonds',
      '3 pears, about 450 g, peeled, cored and thinly sliced',
      '3 tbsp apricot jam',
      '1 tbsp water'
    ],
    st: [
      'Heat the oven to 190°C. Line a 23 cm tart tin with the pastry, prick the base, cover with baking paper and beans and bake for 15 minutes. Remove the paper and beans and bake for 5 minutes more.',
      'Beat the butter and sugar until pale. Beat in the eggs, then the ground almonds. Spread in the case.',
      'Fan the pear slices over the top, pressing gently. Bake for 25 minutes until golden.',
      'Warm the jam with the water and brush over the hot tart.'
    ],
    tips: [
      'Slice the pears thin and dry them.',
      'Blind bake the case.',
      'If your oven runs hot, check at 20 minutes.',
      'Glaze while the tart is hot.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot coffee', 'Dessert wine'],
    store: 'Best on the day. Keeps in the fridge for 2 days.',
    nut: [469, 7, 45, 29, 4, 23, 260]
  },

  'pistachio-cake': {
    d: 'A tender cake made with ground pistachios, yoghurt and a little cardamom, soaked with lemon syrup.',
    meta: 'Pistachio cake: a tender cake of ground pistachios, yoghurt and cardamom, soaked in lemon syrup. Ten slices, baked for 40 minutes.',
    kw: ['pistachio cake', 'pistachio and cardamom cake', 'middle eastern pistachio cake', 'pistachio yoghurt cake', 'pistachio cake with lemon syrup'],
    why: 'Pistachios, butter, eggs, sugar: four ingredients, and a cake that is green-flecked and soft. The nuts are ground, so they do the work of flour and fat together.\n\nGrind the shelled pistachios in a food processor in short pulses, until they look like fine crumbs. Stop before they turn to paste, as the oil begins to release and the cake turns heavy. **Shelled, unsalted pistachios are the only kind to use.** Salted ones make the cake savoury and the shell fragments are unpleasant.\n\nCream the butter and sugar, add the eggs, then fold in the nuts, flour, yoghurt and cardamom. The batter is thick, so spread it into the tin rather than pouring. Bake in a lined 20 cm tin at 170°C for 40 minutes. If your oven runs hot, check at 32 minutes.\n\nBoil the sugar, water and lemon juice for 3 minutes, and spoon the syrup over the hot cake. It soaks in and keeps the crumb moist for days. Serve with extra chopped pistachios scattered on top.',
    ing: [
      '150 g butter, softened',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '100 g shelled unsalted pistachios, ground',
      '125 g self-raising flour',
      '100 g plain yoghurt',
      '1/2 tsp ground cardamom',
      '60 g caster sugar for the syrup',
      '60 ml water',
      '2 tbsp lemon juice',
      '20 g pistachios, chopped, to finish'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm round tin. Beat the butter and 150 g sugar for 4 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the ground pistachios, flour, yoghurt and cardamom. Spread into the tin.',
      'Bake for 40 minutes until a skewer comes out clean.',
      'Boil the syrup sugar, water and lemon juice for 3 minutes and spoon over the hot cake. Cool, then scatter with the chopped pistachios.'
    ],
    tips: [
      'Use shelled, unsalted pistachios.',
      'Pulse the nuts, do not blend.',
      'If your oven runs hot, check at 32 minutes.',
      'Pour the syrup over the hot cake.'
    ],
    pair: ['Greek yoghurt', 'Hot tea', 'Fresh figs', 'Strong coffee'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [339, 7, 35, 19, 2, 23, 20]
  },

  'plum-cake': {
    d: 'A buttery sponge topped with halved plums and cinnamon sugar, baked until the fruit is soft and jammy.',
    meta: 'Plum cake: a buttery sponge topped with halved plums and cinnamon sugar. Ten slices, baked for 45 minutes.',
    kw: ['plum cake', 'german plum cake', 'plum cake with cinnamon', 'zwetschgenkuchen', 'fresh plum cake'],
    why: 'Put the plums cut-side up. That is the quick tip for this cake, and the reason the fruit stays plump instead of sinking into the batter.\n\nHalve the plums and remove the stones, then press them lightly into the surface of the batter, close together, with the skin side down. The cut faces catch the cinnamon sugar and the juice stays in the hollow of each one. **Choose firm plums with a little tartness.** Soft, very sweet ones turn to mush and the cake becomes cloying.\n\nThe batter is a simple butter sponge, thick enough to hold the fruit. Spread it into a lined 23 cm tin with a spatula and arrange the plums on top. Sprinkle with the cinnamon sugar.\n\nBake at 175°C for 45 minutes, until the sponge is golden and the plum juices are bubbling at the edges. If your oven runs hot, check at 36 minutes. Serve warm or cold, with softly whipped cream.',
    ing: [
      '150 g butter, softened',
      '150 g caster sugar',
      '3 eggs, about 150 g',
      '200 g plain flour',
      '2 tsp baking powder',
      '60 ml milk',
      '500 g plums, halved and stoned',
      '2 tbsp caster sugar for the topping',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 175°C and line a 23 cm round tin. Beat the butter and 150 g sugar for 3 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, baking powder and milk. Spread the batter into the tin.',
      'Press the plum halves into the batter, cut-side up, close together. Mix the topping sugar and cinnamon and sprinkle over.',
      'Bake for 45 minutes until golden and the plums are soft.'
    ],
    tips: [
      'Place the plums cut-side up.',
      'Choose firm plums.',
      'If your oven runs hot, check at 36 minutes.',
      'Serve warm or cold.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot coffee', 'Hot tea'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [302, 5, 39, 14, 1, 23, 120]
  },

  'pumpkin-brownies': {
    d: 'Fudgy dark chocolate brownies made with pumpkin puree and warm autumn spices.',
    meta: 'Pumpkin brownies: fudgy chocolate brownies made with pumpkin puree and warm spices. Sixteen pieces, baked for 30 minutes.',
    kw: ['pumpkin brownies', 'fudgy pumpkin brownies', 'chocolate pumpkin brownies', 'pumpkin spice brownies', 'homemade pumpkin brownies'],
    why: 'When the first leaves fall and the pumpkins arrive, this is the bake that makes use of them. Brownies and pumpkin sound like an odd pair, but the puree keeps the middle moist and the spice goes well with dark chocolate.\n\nUse plain pumpkin puree, not pie filling. Pie filling already contains sugar and spice, and the balance goes wrong. **Blot the puree on kitchen paper if it is wet.** Too much water gives a cakey brownie and not a fudgy one.\n\nMelt the chocolate and butter together, then beat in the sugar and eggs until the mixture looks glossy. Stir in the pumpkin, then fold in the flour, cocoa and spices just until no streaks remain. Do not overbeat, as too much air makes them cakey.\n\nBake in a lined 20 cm tin at 175°C for 30 minutes. If your oven runs hot, check at 24 minutes. The edges should be set and the middle soft. Cool completely and chill for an hour before cutting into 16 squares.',
    ing: [
      '100 g dark chocolate',
      '80 g butter',
      '150 g caster sugar',
      '2 eggs, about 100 g',
      '100 g plain pumpkin puree',
      '100 g plain flour',
      '20 g cocoa powder',
      '1 tsp pumpkin pie spice',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Melt the chocolate and butter together and cool for 5 minutes.',
      'Beat in the sugar and eggs until glossy, then stir in the pumpkin puree.',
      'Fold in the flour, cocoa, spice and salt just until no streaks remain. Spread in the tin.',
      'Bake for 30 minutes until the edges are set and the middle is soft. Cool completely, chill for 1 hour and cut into 16.'
    ],
    tips: [
      'Use plain pumpkin puree.',
      'Blot wet puree.',
      'If your oven runs hot, check at 24 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Hot tea'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [60, 'Chilling'],
    nut: [147, 2, 19, 7, 1, 13, 50]
  },

  'rhubarb-custard-cake': {
    d: 'A butter sponge layered with ready-made custard and topped with pink rhubarb pieces, baked until golden.',
    meta: 'Rhubarb custard cake: a butter sponge layered with custard and topped with rhubarb. Ten slices, baked for 50 minutes.',
    kw: ['rhubarb custard cake', 'rhubarb and custard cake', 'rhubarb custard sponge cake', 'rhubarb cake with custard', 'british rhubarb custard cake'],
    why: 'Spring is when rhubarb arrives, long pink stalks with a sharp edge, and this cake pairs it with the thing it goes best with: custard.\n\nThe batter is a standard butter sponge, thick enough to hold the layers apart. Pour half into the tin, spread over the custard, then the rest of the batter and finally the rhubarb. **Chop the rhubarb in 2 cm pieces and toss it in sugar.** The sugar draws out the sharpness, and the juice sets into pink pockets in the sponge.\n\nUse custard from a tub, which is thick enough to stay in a layer. Homemade custard is usually too runny and soaks into the sponge.\n\nBake at 170°C for 50 minutes. If your oven runs hot, check at 40 minutes. The top should be golden, the rhubarb soft, and a skewer inserted in the sponge should come out clean. Cool in the tin, then lift out and serve with extra custard if you like.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '175 g self-raising flour',
      '2 tbsp milk',
      '250 g ready-made custard',
      '400 g rhubarb, cut into 2 cm pieces',
      '2 tbsp caster sugar for the rhubarb'
    ],
    st: [
      'Heat the oven to 170°C and line a 23 cm round tin. Toss the rhubarb with the 2 tbsp sugar.',
      'Beat the butter and 175 g sugar for 4 minutes until pale. Beat in the eggs one at a time, then fold in the flour and milk.',
      'Spread half the batter in the tin. Spoon over the custard and top with the remaining batter.',
      'Scatter the rhubarb over the top and bake for 50 minutes until golden. Cool in the tin.'
    ],
    tips: [
      'Toss the rhubarb in sugar.',
      'Use thick custard from a tub.',
      'If your oven runs hot, check at 40 minutes.',
      'Cool in the tin before lifting out.'
    ],
    pair: ['Hot custard', 'Whipped cream', 'Hot tea', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [333, 5, 40, 17, 1, 24, 40]
  },

  'rhubarb-muffins': {
    d: 'Tender muffins with small pieces of rhubarb and a crunchy sugar top.',
    meta: 'Rhubarb muffins: tender muffins with small pieces of rhubarb and a crunchy sugar top. Makes twelve, baked for 22 minutes.',
    kw: ['rhubarb muffins', 'fresh rhubarb muffins', 'homemade rhubarb muffins', 'rhubarb muffins with sugar topping', 'tender rhubarb muffins'],
    why: 'Most home versions come out with gaps and sour pockets, and the fix is to dice the rhubarb small and coat it in sugar first.\n\nCut the stalks into pieces no bigger than 1 cm. Large chunks release their juice into the batter and leave wet tunnels. Toss the pieces with a spoonful of sugar and leave them for 10 minutes. **The sugar draws out the sharpness.** Drain off the juice before folding the rhubarb into the batter, which would otherwise turn it pink and heavy.\n\nMix the dry ingredients in one bowl and the wet in another, and combine with a few strokes. Lumps are fine. Fold in the rhubarb last, and fill the cases right to the top.\n\nSprinkle with coarse sugar and bake at 190°C for 22 minutes. If your oven runs hot, check at 18 minutes. The muffins are done when the tops spring back and a skewer comes out clean. Cool for 5 minutes in the tin before moving them.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '130 g caster sugar',
      '2 eggs, about 100 g',
      '240 ml milk',
      '100 g butter, melted',
      '1 tsp vanilla extract',
      '200 g rhubarb, finely diced',
      '1 tbsp caster sugar for the rhubarb',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Toss the diced rhubarb with the 1 tbsp sugar and leave for 10 minutes, then drain.',
      'Heat the oven to 190°C and line a 12-hole tin. Combine the flour, baking powder, salt and 130 g sugar.',
      'Whisk the eggs, milk, butter and vanilla, pour into the dry mixture and fold with a few strokes. Fold in the rhubarb.',
      'Fill the cases to the top, sprinkle with coarse sugar and bake for 22 minutes until the tops spring back.'
    ],
    tips: [
      'Dice the rhubarb small.',
      'Drain it after sugaring.',
      'If your oven runs hot, check at 18 minutes.',
      'Do not overmix.'
    ],
    pair: ['Hot tea', 'Butter', 'Natural yoghurt', 'Strong coffee'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [228, 4, 35, 8, 1, 15, 200]
  },

  'seed-cake': {
    d: 'A plain butter cake flavoured with caraway seeds, baked in a loaf tin and sliced with tea.',
    meta: 'Seed cake: a plain butter cake flavoured with caraway seeds. Ten slices, baked for 50 minutes.',
    kw: ['seed cake', 'caraway seed cake', 'old fashioned seed cake', 'british seed cake', 'traditional caraway cake'],
    why: 'It is a cake that tastes of tea time and nothing else, which is exactly why some cooks still make it. The flavour comes from caraway, a seed with a warm, slightly aniseed taste.\n\nThe cake itself is a plain butter sponge, so the quality of the butter matters. Cream it with the sugar for 4 minutes until pale. **Crush the caraway seeds lightly in a mortar before using them.** Whole seeds give hard, sharp bites, while lightly crushed ones spread their flavour through the crumb.\n\nBeat in the eggs one at a time and fold in the flour and the seeds with the milk. Spoon into a lined 900 g loaf tin and bake at 160°C for 50 minutes. If your oven runs hot, check at 40 minutes. The top should be golden and a skewer should come out clean.\n\nCool in the tin for 10 minutes, then on a rack. Slice it thickly. The flavour of the seeds deepens after a day wrapped in paper, so it is worth making ahead.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '225 g self-raising flour',
      '2 tbsp caraway seeds, about 12 g, lightly crushed',
      '3 tbsp milk'
    ],
    st: [
      'Heat the oven to 160°C and line a 900 g loaf tin. Beat the butter and sugar for 4 minutes until pale.',
      'Beat in the eggs one at a time. Fold in the flour, crushed caraway seeds and milk.',
      'Spoon into the tin and bake for 50 minutes until golden and a skewer comes out clean.',
      'Cool in the tin for 10 minutes, then turn out onto a rack.'
    ],
    tips: [
      'Crush the seeds lightly.',
      'Cream the butter and sugar well.',
      'If your oven runs hot, check at 40 minutes.',
      'Wrap for a day to deepen the flavour.'
    ],
    pair: ['Hot tea', 'Strong coffee', 'Butter', 'Sherry'],
    store: 'Keeps wrapped for 5 days.',
    nut: [308, 5, 36, 16, 1, 18, 20]
  },

  'sponge-roll': {
    d: 'A thin whisked sponge rolled around raspberry jam and whipped cream.',
    meta: 'Sponge roll: a thin whisked sponge rolled around raspberry jam and whipped cream. Ten slices, baked for 12 minutes.',
    kw: ['sponge roll', 'jam and cream sponge roll', 'swiss roll', 'raspberry jam sponge roll', 'classic sponge roll'],
    why: 'For a tea table of ten, a sponge roll looks impressive and bakes in 12 minutes. It is a whisked sponge, with no butter, so everything depends on how much air goes into the eggs.\n\nWhisk the eggs and sugar for at least 8 minutes with an electric whisk, until the mixture is pale, thick and leaves a trail when you lift the whisk. **The trail should hold for 3 seconds.** That is the signal that the sponge has enough air to rise.\n\nSift in the flour and fold gently with a large metal spoon, cutting through the middle and turning the mixture over, to keep the air in. Pour into a lined Swiss roll tin and bake at 220°C for 10 minutes, until golden and springy. If your oven runs hot, check at 8 minutes.\n\nTip the sponge onto a sheet of sugared paper at once and roll it up with the paper inside while it is hot. Unroll when cold, spread with the jam and cream, and roll again.',
    ing: [
      '4 eggs, about 200 g',
      '100 g caster sugar',
      '100 g plain flour',
      '1 tsp vanilla extract',
      '2 tbsp caster sugar for the paper',
      '100 g raspberry jam',
      '150 ml double cream'
    ],
    st: [
      'Heat the oven to 220°C and line a 23 by 33 cm Swiss roll tin. Whisk the eggs, 100 g sugar and vanilla for 8 minutes until pale and thick.',
      'Sift in the flour and fold gently. Pour into the tin and bake for 10 minutes until golden.',
      'Turn onto a sheet of baking paper sprinkled with the 2 tbsp sugar. Roll up with the paper inside and cool.',
      'Whip the cream. Unroll the sponge, spread with jam and cream and roll up again.'
    ],
    tips: [
      'Whisk until the mixture leaves a trail.',
      'Fold gently.',
      'If your oven runs hot, check at 8 minutes.',
      'Roll the sponge while it is warm.'
    ],
    pair: ['Hot tea', 'Fresh raspberries', 'Strong coffee', 'Sparkling wine'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [187, 4, 27, 7, 0, 19, 30]
  },

  'treacle-scones': {
    d: 'Dark, spiced scones made with black treacle and mixed spice, split and eaten warm with butter.',
    meta: 'Treacle scones: dark, spiced scones with black treacle and mixed spice. Makes eight, baked for 15 minutes.',
    kw: ['treacle scones', 'black treacle scones', 'spiced treacle scones', 'british treacle scones', 'treacle scones with butter'],
    why: 'It is a plain scone with something dark and sticky in it. The treacle gives colour, a faint bitterness and a flavour somewhere between toffee and liquorice.\n\nMeasure the treacle with a spoon dipped in hot water, so that it slides off cleanly. Warm it with the milk for 30 seconds in a pan to loosen it, and stir until it dissolves into a brown liquid. **Cool the mixture before adding it to the flour.** Hot liquid starts the baking powder reacting too early, and the scones come out flat.\n\nRub the butter into the flour, then add the treacle milk and mix with a knife until it just comes together. The dough will be softer and darker than a regular scone dough. Pat it to 3 cm thick and cut with a floured cutter, straight down, with no twisting.\n\nBake at 220°C for 15 minutes. If your oven runs hot, check at 12 minutes. Eat them warm with butter. Cheddar also goes well with the dark, sweet flavour.',
    ing: [
      '225 g self-raising flour',
      '1 tsp baking powder',
      '1 tsp mixed spice',
      '50 g cold butter, cubed',
      '20 g caster sugar',
      '2 tbsp black treacle, about 40 g',
      '100 ml milk',
      '1 tbsp milk for brushing'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Warm the treacle with the 100 ml milk for 30 seconds, stir until dissolved and cool.',
      'Mix the flour, baking powder and mixed spice. Rub in the butter until crumbly and stir in the sugar.',
      'Add the treacle milk and mix with a knife to a soft dough. Pat out to 3 cm thick on a floured surface and cut 8 rounds.',
      'Set on the tray, brush with the milk and bake for 15 minutes until risen.'
    ],
    tips: [
      'Cool the treacle milk before using.',
      'Cut straight down.',
      'If your oven runs hot, check at 12 minutes.',
      'Eat the same day.'
    ],
    pair: ['Salted butter', 'Mature cheddar', 'Hot tea', 'Apple slices'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [174, 3, 27, 6, 1, 6, 70]
  },

  'salted-caramel-brownies': {
    d: 'Fudgy brownies with ribbons of caramel sauce swirled through and a sprinkle of flaky salt.',
    meta: 'Salted caramel brownies: fudgy brownies with ribbons of caramel and flaky salt. Sixteen pieces, baked for 35 minutes.',
    kw: ['salted caramel brownies', 'caramel swirl brownies', 'fudgy salted caramel brownies', 'brownies with salted caramel', 'homemade salted caramel brownies'],
    why: 'Swirl the caramel in at the last minute. That is the quick tip for these brownies, and the reason the ribbons stay visible instead of melting into the batter.\n\nThe brownie base is a fudgy one: butter, dark chocolate, sugar, eggs and a little flour. Beat the eggs and sugar for a full 3 minutes, until pale and thick, so that the surface sets into a shiny crust. **Use caramel sauce thick enough to hold a ribbon.** Runny sauce disappears into the brownie and leaves a damp patch.\n\nSpread the batter in a lined 20 cm tin. Drizzle half the caramel over the top and drag a knife through for a loose swirl, but only once or twice. More swirling makes a uniform brown.\n\nBake at 170°C for 35 minutes. If your oven runs hot, check at 28 minutes. The edges should be set and the middle slightly soft. Drizzle the remaining caramel over, add the flaky salt and cool completely before cutting.',
    ing: [
      '150 g butter',
      '150 g dark chocolate',
      '200 g caster sugar',
      '3 eggs, about 150 g',
      '100 g plain flour',
      '20 g cocoa powder',
      '150 g caramel sauce',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 170°C and line a 20 cm square tin. Melt the butter and chocolate and cool for 5 minutes.',
      'Beat the sugar and eggs for 3 minutes until pale and thick. Fold in the chocolate, flour and cocoa.',
      'Spread in the tin, drizzle with half the caramel and swirl once or twice with a knife.',
      'Bake for 35 minutes until the edges are set. Drizzle with the remaining caramel, scatter with the salt and cool completely before cutting into 16.'
    ],
    tips: [
      'Beat the eggs and sugar well.',
      'Swirl the caramel only once or twice.',
      'If your oven runs hot, check at 28 minutes.',
      'Cool completely before cutting.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Hot coffee', 'Fresh raspberries'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [253, 3, 31, 13, 1, 23, 100]
  }
};
