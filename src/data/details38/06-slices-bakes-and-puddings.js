'use strict';

/**
 * Volume thirty-eight — slices, biscuits, cakes and puddings.
 *
 * Tray bakes and puddings from Australia, New Zealand, Scotland and England.
 * Times are the recipe's own; ovens differ, so each method says when to check
 * early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'bounty-slice': {
    d: 'A no-bake slice of coconut and condensed milk set in the fridge and topped with dark chocolate. Sixteen servings in 2 hours 20 minutes.',
    meta: 'Bounty slice: a no-bake slice of desiccated coconut and condensed milk, chilled until firm and topped with dark chocolate. Sixteen servings.',
    kw: ['bounty slice', 'coconut chocolate slice', 'no bake bounty slice', 'australian bounty slice', 'coconut and condensed milk slice'],
    why: 'Condensed milk is the binder, coconut is the body and chocolate is the lid. There is no oven and no cooking, only mixing and chilling.\n\nStir the desiccated coconut into the condensed milk until it forms a thick, sticky mass. It should hold when pressed between your fingers; if it crumbles, add a spoon more condensed milk.\n\nPress it firmly into a lined tin, using the back of a spoon or a flat glass to get an even, compact layer. **Pressure matters**: a loosely packed slice crumbles when cut.\n\nChill for 2 hours, until completely firm, then pour over the melted chocolate and spread it evenly. Chill again for 30 minutes to set the top. Cut with a hot knife, wiping it between slices. A cold knife cracks the chocolate. Cut small, since the slice is very sweet. Use sweetened condensed milk rather than evaporated milk, which will not bind the coconut.',
    ing: [
      '300 g desiccated coconut',
      '395 g sweetened condensed milk',
      '200 g dark chocolate',
      '1 tbsp coconut oil'
    ],
    st: [
      'Line a 20 cm square tin with paper. Mix the coconut and condensed milk to a thick paste.',
      'Press it firmly into the tin and chill for 2 hours until firm.',
      'Melt the chocolate with the coconut oil, spread over the top and chill for 30 minutes more.',
      'Cut into 16 squares with a hot knife.'
    ],
    tips: [
      'Press the base firmly.',
      'Chill until completely firm.',
      'Cut with a hot knife.',
      'Cut small pieces.'
    ],
    pair: ['Black coffee', 'Pot of tea', 'Fresh fruit', 'Vanilla ice cream'],
    store: 'Keeps in the fridge in an airtight tin for up to 1 week.',
    rest: [150, 'chilling'],
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'cornflake-cookies': {
    d: 'Butter, sugar and flour cookie dough rolled in crushed cornflakes and cooked for 15 minutes until golden. Twenty cookies in 30 minutes.',
    meta: 'Cornflake cookies: butter, sugar and coconut cookie dough rolled in crushed cornflakes and cooked for 15 minutes until golden and crunchy.',
    kw: ['cornflake cookies', 'australian cornflake cookies', 'easy cornflake cookies', 'crunchy cornflake biscuits', 'cornflake and coconut cookies'],
    why: 'These are the cookies of Australian school cake stalls: crisp, golden and covered in crushed cornflakes. They are plain, buttery and surprisingly good.\n\nCream the butter and sugar until pale and fluffy, which takes about 3 minutes with a mixer. Add the flour and coconut and bring to a soft dough. It should be firm enough to roll into balls without sticking.\n\nCrush the cornflakes by hand into pieces about the size of a thumbnail. **Do not crush them to dust**, or you lose the crunch, which is the whole idea.\n\nRoll each ball in the flakes and press gently to stick. Place well apart, as they spread. Cook at 180°C for 15 minutes, until golden at the edges. If your oven runs hot, check at 12 minutes. Cool on the tray for 5 minutes, because they are fragile while hot. Add a handful of sultanas to the dough if you want a chewier cookie.',
    ing: [
      '125 g butter, softened',
      '100 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '200 g plain flour',
      '1 tsp baking powder',
      '40 g desiccated coconut',
      '80 g cornflakes'
    ],
    st: [
      'Heat the oven to 180°C and line two trays. Cream the butter and sugar for 3 minutes, then beat in the egg and vanilla.',
      'Stir in the flour, baking powder and coconut to a soft dough.',
      'Roll into 20 balls, roll each in the lightly crushed cornflakes and set apart on the trays.',
      'Cook for 15 minutes until golden. Cool on the trays for 5 minutes.'
    ],
    tips: [
      'Crush the cornflakes lightly.',
      'Space the cookies apart.',
      'If your oven runs hot, check at 12 minutes.',
      'Cool on the tray at first.'
    ],
    pair: ['Pot of tea', 'Glass of milk', 'Vanilla ice cream', 'Coffee'],
    store: 'Keeps in an airtight tin for up to 5 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'sticky-date-cake': {
    d: 'A moist date sponge cooked for 40 minutes and soaked in hot toffee sauce. Twelve servings in 1 hour.',
    meta: 'Sticky date cake: a moist date sponge cooked for 40 minutes and soaked in a hot toffee sauce, served warm with cream.',
    kw: ['sticky date cake', 'sticky date pudding cake', 'easy sticky date cake', 'australian sticky date cake', 'sticky date cake with toffee sauce'],
    why: 'The cake is a vehicle for the sauce, and the dates are what make the cake worth it. Soaked in hot water with bicarbonate, they melt into the batter and turn it dark, moist and fudgy.\n\nPour boiling water over the chopped dates, add the bicarbonate and leave for 10 minutes. It fizzes, softens the skins and produces a thick, brown pulp. **Do not drain it**: the soaking liquid is part of the batter.\n\nCream the butter and sugar, beat in the eggs, and fold in the flour and the date mixture. The batter will be loose, and that is correct.\n\nCook at 180°C for 40 minutes until a skewer comes out clean. If your oven runs hot, check at 32 minutes. Poke holes in the hot cake and pour half the toffee sauce slowly over it, so it soaks in. Serve the rest alongside, with cream. Medjool dates make the richest cake, though ordinary packet dates work well when they are soft.',
    ing: [
      '250 g dates, chopped',
      '250 ml boiling water',
      '1 tsp bicarbonate of soda',
      '80 g butter, softened',
      '150 g brown sugar',
      '2 eggs',
      '200 g self-raising flour',
      '1 tsp vanilla extract',
      '150 g brown sugar, for the sauce',
      '150 ml double cream',
      '60 g butter, for the sauce'
    ],
    st: [
      'Heat the oven to 180°C and line a 20 cm square tin. Pour the boiling water over the dates, stir in the bicarbonate and leave for 10 minutes.',
      'Cream the butter and 150 g sugar, beat in the eggs and vanilla, then fold in the flour and the date mixture.',
      'Pour into the tin and cook for 40 minutes until a skewer comes out clean.',
      'Boil the sauce sugar, cream and butter for 5 minutes. Poke holes in the cake, pour over half the sauce and serve the rest alongside.'
    ],
    tips: [
      'Do not drain the dates.',
      'Expect a loose batter.',
      'If your oven runs hot, check at 32 minutes.',
      'Pour the sauce over while the cake is hot.'
    ],
    pair: ['Pouring cream', 'Vanilla ice cream', 'Custard', 'Pot of tea'],
    store: 'Keeps in the fridge for up to 4 days. Warm gently before serving.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'passionfruit-slice': {
    d: 'A biscuit base topped with a passionfruit and condensed milk filling, chilled until set. Sixteen servings in 3 hours 20 minutes.',
    meta: 'Passionfruit slice: a crushed biscuit base topped with a tangy passionfruit and condensed milk filling, chilled until set.',
    kw: ['passionfruit slice', 'australian passionfruit slice', 'no bake passionfruit slice', 'passionfruit and condensed milk slice', 'passionfruit cheesecake slice'],
    why: 'The filling sets on its own, because the lime or passionfruit acid thickens the condensed milk. No gelatine is needed, only time.\n\nCrush the biscuits finely and mix with melted butter until the crumbs hold together like wet sand. Press them into a lined tin and make the surface level with the back of a spoon. **Chill the base for 15 minutes** so it firms up before the filling goes on.\n\nBeat the cream cheese until smooth, then stir in the condensed milk and passionfruit pulp. The acid thickens the mixture within a minute or two, which is your signal it is ready to pour.\n\nSpread over the base and chill for 3 hours, until firm enough to cut. Cut with a hot knife, wiping between slices. Passionfruit pulp varies in sharpness, so taste and add a spoon more if the filling is too sweet. Fresh passionfruit gives the best flavour, but tinned pulp works when the fruit is out of season.',
    ing: [
      '250 g digestive biscuits, crushed',
      '120 g butter, melted',
      '250 g cream cheese',
      '395 g sweetened condensed milk',
      '150 g passionfruit pulp',
      '1 lime, zest only'
    ],
    st: [
      'Line a 20 cm square tin. Mix the crushed biscuits with the melted butter, press into the tin and chill for 15 minutes.',
      'Beat the cream cheese until smooth, then stir in the condensed milk, passionfruit pulp and lime zest.',
      'Spread over the base and chill for 3 hours until firm. Cut into 16 with a hot knife.'
    ],
    tips: [
      'Press the base firmly.',
      'Let the filling thicken before pouring.',
      'Chill until firm.',
      'Cut with a hot knife.'
    ],
    pair: ['Fresh passionfruit', 'Whipped cream', 'Pot of tea', 'Berries'],
    store: 'Keeps in the fridge for up to 4 days.',
    rest: [180, 'chilling'],
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'shortbread-fingers': {
    d: 'Butter, sugar and flour pressed into a tin and cooked for 25 minutes into crumbly, golden shortbread fingers. Sixteen servings in 40 minutes.',
    meta: 'Shortbread fingers: butter, sugar and flour pressed into a tin and cooked for 25 minutes into crumbly, golden Scottish shortbread.',
    kw: ['shortbread fingers', 'scottish shortbread fingers', 'easy shortbread fingers', 'classic shortbread', 'buttery shortbread'],
    why: 'Shortbread is the proof that three ingredients can be enough. Butter does everything: it gives flavour, it makes the texture crumble, and it is the reason these keep so well.\n\nUse good butter, softened but not oily, and rub it into the flour and sugar with your fingertips until it looks like damp sand. Then press it together gently into a dough. **Handle it as little as you can**, since warm hands melt the butter and make the dough greasy.\n\nPress into a lined tin and prick all over with a fork. The holes let steam escape and stop the surface from puffing.\n\nCook at 160°C for 25 minutes. It should be pale gold, not brown. If your oven runs hot, check at 20 minutes. Cut into fingers while hot, then leave to cool in the tin. If you wait until cold it shatters. Rice flour or cornflour swapped for a quarter of the flour gives an even sandier bite.',
    ing: [
      '250 g plain flour',
      '75 g caster sugar',
      '175 g butter, softened',
      '1 tbsp caster sugar, for sprinkling',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 160°C and line a 20 cm square tin. Rub the butter into the flour, sugar and salt until crumbly, then press together into a dough.',
      'Press the dough into the tin and prick all over with a fork.',
      'Cook for 25 minutes until pale gold. Cut into 16 fingers while hot, sprinkle with the sugar and cool in the tin.'
    ],
    tips: [
      'Handle the dough as little as possible.',
      'Prick the surface.',
      'If your oven runs hot, check at 20 minutes.',
      'Cut it while still hot.'
    ],
    pair: ['Pot of tea', 'Coffee', 'Fresh strawberries', 'Whipped cream'],
    store: 'Keeps in an airtight tin for up to 1 week.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'apple-pie-with-custard': {
    d: 'A double-crust apple pie cooked for 50 minutes and served with a jug of homemade vanilla custard. Eight servings in 1 hour 30 minutes.',
    meta: 'Apple pie with custard: a double-crust pie of cooking apples, sugar and cinnamon cooked for 50 minutes, served with homemade vanilla custard.',
    kw: ['apple pie with custard', 'english apple pie and custard', 'classic apple pie with custard', 'homemade apple pie', 'apple pie and homemade custard'],
    why: 'Apple pie and custard is a British pudding of the oldest kind, with a sharp filling under a crisp crust and a pouring sauce that soothes. Each half needs its own attention.\n\nUse cooking apples such as Bramley, which break down into a soft purée, and mix in a firmer eating apple so some slices stay whole. Toss them with sugar, cinnamon and a spoon of flour to thicken the juice.\n\nPile the apples high, since they shrink as they cook. **Cut steam vents in the lid** and brush it with milk and sugar for a crisp finish. Cook at 200°C for 50 minutes, until the pastry is deep gold. If your oven runs hot, check at 40 minutes.\n\nFor the custard, whisk the yolks and sugar, add the hot milk slowly and stir over low heat for 8 minutes, until it coats a spoon. Do not let it boil, or it will scramble. Custard keeps a skin if left uncovered, so press a sheet of baking paper onto the surface until you serve it.',
    ing: [
      '500 g shortcrust pastry',
      '900 g cooking apples, peeled and sliced',
      '100 g caster sugar',
      '1 tsp ground cinnamon',
      '1 tbsp plain flour',
      '1 tbsp milk',
      '500 ml milk, for the custard',
      '4 egg yolks',
      '60 g caster sugar, for the custard',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 200°C. Line a pie dish with half the pastry. Toss the apples with the sugar, cinnamon and flour and pile into the dish.',
      'Cover with the rest of the pastry, crimp the edges, cut steam vents and brush with the milk. Cook for 50 minutes until golden.',
      'Heat the custard milk until steaming. Whisk the yolks and custard sugar, pour in the milk slowly, return to the pan and stir over low heat for 8 minutes until thick. Add the vanilla.',
      'Serve the pie with the custard.'
    ],
    tips: [
      'Mix cooking and eating apples.',
      'Cut steam vents.',
      'If your oven runs hot, check at 40 minutes.',
      'Do not let the custard boil.'
    ],
    pair: ['Vanilla ice cream', 'Cream', 'Cheddar', 'Pot of tea'],
    store: 'Pie keeps in the fridge for up to 3 days. Custard keeps for 2 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'maple-pecan-tart': {
    d: 'A shortcrust case filled with maple syrup, pecans and eggs and cooked for 40 minutes until set. Ten servings in 1 hour 10 minutes.',
    meta: 'Maple pecan tart: a shortcrust case filled with maple syrup, pecans and eggs and cooked for 40 minutes until set with a glossy top.',
    kw: ['maple pecan tart', 'canadian maple pecan tart', 'maple syrup pecan tart', 'maple pecan pie', 'maple tart with pecans'],
    why: 'It is the dessert for anyone who thinks pecan pie is too sweet, because maple syrup carries a woody, savoury depth that corn syrup does not. Even so, it is a very rich tart and a thin slice is plenty.\n\nBlind-bake the case first for 15 minutes with baking beans, then remove the beans and bake for 5 more. A dry case holds the liquid filling and stays crisp.\n\nWhisk the eggs with the maple syrup, melted butter, brown sugar and a pinch of salt. **Stir, do not whisk hard**: too much air makes the filling puff and crack.\n\nScatter the pecans in the case, pour over the filling and cook at 170°C for 40 minutes. It is done when the edges are set and the middle has a slight wobble. If your oven runs hot, check at 32 minutes. Cool completely before cutting, so the filling sets. Use real maple syrup, since flavoured table syrup is mostly sugar and tastes flat.',
    ing: [
      '320 g shortcrust pastry',
      '200 g pecan halves',
      '3 eggs',
      '200 ml maple syrup',
      '60 g butter, melted',
      '60 g brown sugar',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Line a 23 cm tart tin with the pastry and cook blind for 15 minutes with baking beans, then 5 minutes without.',
      'Lower the oven to 170°C. Scatter the pecans over the case.',
      'Stir the eggs, maple syrup, butter, sugar, vanilla and salt together and pour over.',
      'Cook for 40 minutes until set at the edges. Cool completely before cutting.'
    ],
    tips: [
      'Blind-bake the case first.',
      'Stir the filling gently.',
      'If your oven runs hot, check at 32 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Black coffee', 'Crème fraîche'],
    store: 'Keeps in the fridge for up to 4 days. Bring to room temperature to serve.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'gingerbread-men': {
    d: 'A spiced ginger and treacle dough cut into little men and cooked for 12 minutes until crisp at the edge. Sixteen biscuits in 40 minutes.',
    meta: 'Gingerbread men: a spiced ginger and treacle dough cut into little men and cooked for 12 minutes until crisp at the edge and chewy in the middle.',
    kw: ['gingerbread men', 'homemade gingerbread men', 'easy gingerbread men', 'gingerbread men biscuits', 'christmas gingerbread men'],
    why: 'The dough smells of ginger, cinnamon and treacle long before it is baked, and that smell is the best part of making them. The biscuits are crisp at the edge, chewy in the middle and sturdy enough to hang on a tree.\n\nRub the butter into the flour and spices, then add the sugar and bind with golden syrup and a beaten egg. The dough will be soft and sticky at first. **Chill it for 30 minutes** to firm it up, because warm dough sticks to the cutter and loses its shape.\n\nRoll to about 5 mm, which gives a biscuit that is firm but not hard. Cut out the shapes and lift them carefully onto a lined tray.\n\nCook at 180°C for 12 minutes, until the edges darken slightly. If your oven runs hot, check at 9 minutes. Cool on a rack, then decorate with icing. Currants make quick eyes and buttons if you do not want to ice them.',
    ing: [
      '350 g plain flour',
      '2 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1 tsp bicarbonate of soda',
      '125 g butter',
      '175 g brown sugar',
      '1 egg, beaten',
      '4 tbsp golden syrup',
      '100 g icing sugar',
      '1 tbsp water'
    ],
    st: [
      'Rub the butter into the flour, spices and bicarbonate, then stir in the brown sugar. Add the egg and golden syrup and bring together into a dough. Chill for 30 minutes.',
      'Heat the oven to 180°C. Roll the dough to 5 mm and cut out 16 shapes.',
      'Cook on lined trays for 12 minutes until darker at the edges. Cool on a rack.',
      'Mix the icing sugar and water and pipe on faces and buttons.'
    ],
    tips: [
      'Chill the dough.',
      'Roll to an even thickness.',
      'If your oven runs hot, check at 9 minutes.',
      'Decorate only when cool.'
    ],
    pair: ['Hot chocolate', 'Glass of milk', 'Pot of tea', 'Mulled cider'],
    store: 'Keeps in an airtight tin for up to 1 week.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'scones-with-jam-and-cream': {
    d: 'Light, tall scones cooked for 15 minutes and split and served with strawberry jam and clotted cream. Eight scones in 30 minutes.',
    meta: 'Scones with jam and cream: light, tall scones cooked for 15 minutes, then split and served with strawberry jam and clotted cream.',
    kw: ['scones with jam and cream', 'classic english scones', 'cream tea scones', 'easy scones with jam and cream', 'afternoon tea scones'],
    why: 'A good scone is tall, light and a little crumbly, and it depends on cold butter and a light hand. The recipe is simple and the outcome is not guaranteed unless you follow a few rules.\n\nRub the butter into the flour with your fingertips, quickly, until it looks like breadcrumbs. Cold butter makes steam in the oven, and steam makes lift.\n\nAdd the milk all at once and stir with a knife until the dough just comes together. **Do not knead it.** Overworked scones are tough and flat.\n\nPat the dough out to 3 cm thick and cut straight down with a floured cutter. Do not twist, as twisting seals the edges and stops the rise. Brush the tops with milk and cook at 220°C for 15 minutes, until risen and golden. If your oven runs hot, check at 12 minutes. Split and eat warm, with jam first or cream first, as you prefer. Choose a scone cutter of about 6 cm, which gives tall scones that split cleanly.',
    ing: [
      '350 g self-raising flour',
      '1 tsp baking powder',
      '60 g cold butter, cubed',
      '40 g caster sugar',
      '175 ml milk',
      '1 tbsp milk, for brushing',
      '8 tbsp strawberry jam',
      '200 g clotted cream'
    ],
    st: [
      'Heat the oven to 220°C and flour a tray. Rub the butter into the flour and baking powder, then stir in the sugar.',
      'Add the milk and mix with a knife to a soft dough.',
      'Pat out to 3 cm thick, cut 8 rounds straight down, set on the tray and brush with milk.',
      'Cook for 15 minutes until golden. Cool for 5 minutes, then split and serve with the jam and cream.'
    ],
    tips: [
      'Keep the butter cold.',
      'Do not knead the dough.',
      'Cut straight down without twisting.',
      'If your oven runs hot, check at 12 minutes.'
    ],
    pair: ['Pot of tea', 'Fresh strawberries', 'Cucumber sandwiches', 'Lemon curd'],
    store: 'Best eaten on the day. Keeps in an airtight tin for 2 days; freeze unfilled for up to 1 month.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'peach-crumble': {
    d: 'Sliced peaches under a crisp topping of flour, butter, oats and brown sugar, cooked for 35 minutes. Six servings in 50 minutes.',
    meta: 'Peach crumble: sliced peaches under a crisp topping of flour, butter, oats and brown sugar, cooked for 35 minutes until bubbling and golden.',
    kw: ['peach crumble', 'easy peach crumble', 'homemade peach crumble', 'peach crumble with oats', 'british peach crumble'],
    why: 'A crumble is the easiest hot pudding there is, and peaches are among the best fruit to put under one. They soften into a sweet, jammy layer that bubbles up through the topping.\n\nUse ripe peaches, which are fragrant and give slightly to pressure. Slice them thick, leave the skin on if it is thin, and toss them with a little sugar and a squeeze of lemon. If the peaches are very juicy, add a spoon of cornflour.\n\nRub the butter into the flour until it looks like coarse breadcrumbs, then stir in the oats and sugar. **Keep the lumps**: a few pea-sized pieces make the best crunch.\n\nScatter the topping loosely over the fruit and do not press it down. Cook at 190°C for 35 minutes, until the top is golden and the juice bubbles at the edges. If your oven runs hot, check at 28 minutes. Stand for 10 minutes before serving. Tinned peaches work in winter, if you drain them well and cut the sugar down.',
    ing: [
      '800 g ripe peaches, sliced',
      '40 g caster sugar',
      '1 lemon, juiced',
      '150 g plain flour',
      '100 g cold butter, cubed',
      '60 g porridge oats',
      '80 g brown sugar'
    ],
    st: [
      'Heat the oven to 190°C. Toss the peaches with the caster sugar and lemon juice and tip into a baking dish.',
      'Rub the butter into the flour, then stir in the oats and brown sugar.',
      'Scatter the topping over the fruit and cook for 35 minutes until golden and bubbling. Stand for 10 minutes.'
    ],
    tips: [
      'Use ripe peaches.',
      'Leave some lumps in the topping.',
      'If your oven runs hot, check at 28 minutes.',
      'Do not press the topping down.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Pouring cream', 'Greek yoghurt'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in the oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'plum-crumble': {
    d: 'Halved plums with a spoonful of sugar under a buttery crumble, cooked for 35 minutes until bubbling. Six servings in 50 minutes.',
    meta: 'Plum crumble: halved plums with sugar and cinnamon under a buttery crumble topping, cooked for 35 minutes until bubbling and golden.',
    kw: ['plum crumble', 'easy plum crumble', 'homemade plum crumble', 'plum crumble with cinnamon', 'british plum crumble'],
    why: 'Plums are sharper than peaches and need more sugar, and that tartness is what makes the crumble special. The fruit turns deep pink and the juice stains the topping.\n\nHalve and stone the plums but do not peel them. The skins give colour and a bit of tartness. Toss them with sugar and cinnamon and let them sit for 10 minutes to start releasing juice.\n\nFor the topping, rub cold butter into the flour and sugar until it looks like crumbs. **Do not overwork it**, as warm butter makes a paste instead of a crumble.\n\nTip the plums into a dish and scatter the topping over them loosely. Cook at 190°C for 35 minutes, until the top is golden and the juice bubbles around the edge. If your oven runs hot, check at 28 minutes. Plum juice runs, so stand the dish on a tray to catch any drips. Victoria plums are the classic choice, while darker varieties give a more tart result.',
    ing: [
      '800 g plums, halved and stoned',
      '70 g caster sugar',
      '1 tsp ground cinnamon',
      '175 g plain flour',
      '100 g cold butter, cubed',
      '75 g brown sugar'
    ],
    st: [
      'Heat the oven to 190°C. Toss the plums with the caster sugar and cinnamon and tip into a baking dish.',
      'Rub the butter into the flour, then stir in the brown sugar.',
      'Scatter the topping over the plums and cook for 35 minutes until golden and bubbling.'
    ],
    tips: [
      'Leave the skins on.',
      'Keep the butter cold.',
      'If your oven runs hot, check at 28 minutes.',
      'Stand the dish on a tray.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Clotted cream', 'Greek yoghurt'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in the oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'kiwi-fruit-pavlova': {
    d: 'A crisp meringue shell with a marshmallow centre, cooked for 90 minutes and topped with whipped cream and sliced kiwi fruit. Eight servings in 2 hours.',
    meta: 'Kiwi fruit pavlova: a crisp meringue shell with a marshmallow centre, cooked for 90 minutes and topped with whipped cream and sliced kiwi fruit.',
    kw: ['kiwi fruit pavlova', 'new zealand pavlova with kiwi', 'classic kiwi pavlova', 'pavlova with kiwi fruit and cream', 'homemade pavlova'],
    why: 'The pavlova is claimed by both New Zealand and Australia, and the kiwi fruit topping is the New Zealand signature. The meringue has a crisp shell and a soft, marshmallow middle, and the kiwi cuts through the sweetness.\n\nWhisk the egg whites until stiff, then add the sugar one spoonful at a time, whisking well between each. Wait until the mixture is glossy and you can rub a little between your fingers without feeling grit. **Undissolved sugar makes the pavlova weep.**\n\nFold in the cornflour, vinegar and vanilla, which give the soft centre. Pile onto a lined tray in a round and make a shallow dip in the middle.\n\nCook at 120°C for 90 minutes, then switch off the oven and leave it to cool inside with the door closed. If your oven runs hot, check at 70 minutes. Top with cream and fruit just before serving. Passionfruit pulp spooned over the top adds a sharper contrast to the kiwi.',
    ing: [
      '6 egg whites',
      '300 g caster sugar',
      '2 tsp cornflour',
      '1 tsp white wine vinegar',
      '1 tsp vanilla extract',
      '300 ml double cream',
      '4 kiwi fruit, peeled and sliced'
    ],
    st: [
      'Heat the oven to 120°C and line a tray. Whisk the egg whites to stiff peaks, then whisk in the sugar a spoonful at a time until glossy.',
      'Fold in the cornflour, vinegar and vanilla. Pile onto the tray in a 23 cm round and make a dip in the middle.',
      'Cook for 90 minutes, then switch off and leave to cool in the oven with the door closed.',
      'Whip the cream, spread over the meringue and top with the kiwi fruit.'
    ],
    tips: [
      'Add the sugar slowly.',
      'Check that the sugar has dissolved.',
      'If your oven runs hot, check at 70 minutes.',
      'Top just before serving.'
    ],
    pair: ['Strawberries', 'Passionfruit', 'Sparkling wine', 'Pot of tea'],
    store: 'The unfilled shell keeps in an airtight tin for 2 days. Top just before serving.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  }
};
