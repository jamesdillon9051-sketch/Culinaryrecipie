'use strict';

/**
 * Volume sixty-two, first part: Polish roasts, cakes, pancakes, pierogi,
 * dumplings and pork dishes, then the first Czech dishes (roast pork with
 * dumplings, goulash, fried cheese, schnitzel, tomato sauce, garlic soup and
 * the sweet koláče). Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'golonka': {
    d: 'A Polish pork knuckle simmered with root vegetables and then roasted in beer until the skin crackles, in 2 hours 15 minutes.',
    meta: 'Golonka, Polish pork knuckle simmered then roasted in beer until crisp, cooked for 2 hours. Four servings, ready in 2 hours 15 minutes.',
    kw: ['golonka', 'polish pork knuckle', 'roast pork knuckle with beer', 'golonka recipe', 'polish roast pork hock'],
    why: 'What is the difference between the German and the Polish knuckle? The Polish golonka is boiled first with vegetables and spices, then roasted with a beer glaze, so the meat is soft and the skin is thin and brittle at once. It is on the menu of every Polish pub, usually served with mustard, horseradish and sauerkraut.\n\nSimmer the knuckles in water with onion, carrot, bay, allspice and peppercorns for 1 hour. Lift them out and dry them. Rub with garlic, marjoram, salt and pepper, and set in a roasting tin with a glass of dark beer. **Roast at 200C and baste every 15 minutes with the beer**, never on the skin itself, which must stay dry to crisp. After 1 hour the skin should be blistered and deep brown.\n\nRest for 10 minutes, then carve in thick slices, cutting through the crisp skin with a sharp knife. Strain the tin juices to make a gravy, thickened with a little cornflour. Serve with boiled potatoes, sauerkraut and horseradish. A cold lager is the usual drink. The broth from the simmering makes a useful soup base.',
    ing: [
      '2 pork knuckles, about 2 kg',
      '1 onion, halved',
      '2 carrots',
      '2 bay leaves',
      '2 g allspice berries',
      '2 g black peppercorns',
      '4 garlic cloves, crushed',
      '2 tsp dried marjoram',
      '1 tsp salt',
      '330 ml dark beer',
      '1 tbsp cornflour',
      '800 g sauerkraut, to serve',
      '4 tbsp horseradish'
    ],
    st: [
      'Simmer the knuckles with the onion, carrots, bay, allspice and peppercorns in water to cover for 1 hour. Lift out and dry well.',
      'Heat the oven to 200C. Rub the knuckles with the garlic, marjoram and salt and set in a roasting tin with the beer.',
      'Roast for 1 hour, basting the meat with the beer every 15 minutes, keeping the skin dry.',
      'Rest for 10 minutes. Strain the tin juices into a pan, add the cornflour mixed with water and simmer for 3 minutes.',
      'Carve and serve with the gravy, sauerkraut and horseradish.'
    ],
    tips: [
      'Dry the skin after simmering.',
      'Baste the meat, not the skin.',
      'Serve with horseradish and sauerkraut.'
    ],
    pair: ['Sauerkraut', 'Horseradish', 'Boiled potatoes', 'Lager'],
    store: 'Keeps for 3 days in the fridge. Reheat the skin in a hot oven.',
    nut: [838, 83, 23, 46, 8, 8, 2300]
  },

  'szarlotka': {
    d: 'A Polish apple cake of shortcrust with a thick layer of cinnamon apples and a grated pastry top, baked for 45 minutes.',
    meta: 'Szarlotka, Polish apple cake with grated pastry top and cinnamon apples, baked for 45 minutes at 180C. Ten servings, ready in 1 hour 10 minutes.',
    kw: ['szarlotka', 'polish apple cake', 'polish apple pie with grated pastry', 'szarlotka recipe', 'apple cake with shortcrust'],
    why: 'Flour, butter, sugar, apples: four things, one tin and no rolling pin. Szarlotka is the Polish apple cake, the one every grandmother makes, and the clever part is that the pastry is grated over the apples rather than rolled, so it bakes in a crisp, rough, shaggy top.\n\nMake a rich shortcrust of flour, butter, sugar, egg yolks and a spoonful of soured cream. Divide it into two parts, a larger one for the base and a smaller one for the top, and chill both for 30 minutes. For the apples, use a tart cooking variety such as Bramley, peeled and grated coarsely, with cinnamon, a little sugar and a spoonful of semolina to absorb the juice. **Chill the top part until very hard**, so it grates cleanly into flakes and does not smear.\n\nPress the base part into a tin, spread the apples over, and grate the cold dough on top in an even layer. Bake at 180C for 45 minutes, until golden. Cool in the tin, dust with icing sugar and cut into squares. It keeps for 3 days and is best the next day, with a cup of tea.',
    ing: [
      '400 g plain flour',
      '200 g cold butter, cubed',
      '100 g caster sugar',
      '3 egg yolks',
      '2 tbsp soured cream',
      '1 tsp baking powder',
      '1 kg tart apples, peeled and grated',
      '2 tbsp caster sugar, for the apples',
      '2 tsp ground cinnamon',
      '1 tbsp semolina',
      '1 tbsp icing sugar'
    ],
    st: [
      'Rub the butter into the flour, 100 g sugar and baking powder. Mix in the yolks and soured cream to a dough. Divide into two thirds and one third. Chill for 30 minutes, freezing the smaller piece for 20 minutes more.',
      'Heat the oven to 180C and line a 24 cm tin. Press the larger piece into the tin.',
      'Mix the apples with 2 tablespoons of sugar, the cinnamon and semolina and spread over the base.',
      'Grate the frozen dough over the apples in an even layer.',
      'Bake for 45 minutes until golden. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Chill the top dough until hard.',
      'Use tart apples.',
      'Cool before cutting.'
    ],
    pair: ['Tea', 'Whipped cream', 'Vanilla ice cream'],
    store: 'Keeps for 3 days in a tin.',
    nut: [439, 7, 60, 19, 4, 24, 70]
  },

  'mazurek': {
    untimed: ['cooling the base', 'setting the topping for a few hours'],
    d: 'A flat Polish Easter cake of crisp shortcrust topped with chocolate or caramel and decorated with nuts and dried fruit.',
    meta: 'Mazurek, flat Polish Easter shortcrust cake with a caramel topping and nuts, baked for 30 minutes. Sixteen servings, ready in 55 minutes.',
    kw: ['mazurek', 'polish easter cake', 'mazurek kajmakowy', 'polish flat shortcrust cake', 'mazurek recipe'],
    why: 'Pour the topping on warm, not hot. That is the quick tip for mazurek, the flat Easter cake of Poland, because a topping that is too hot soaks into the pastry and makes it soft, and a cold one will not spread. The cake is a base of crisp shortcrust with a thick layer of sweet topping, decorated with whole nuts, candied peel or dried fruit.\n\nThe pastry is flour, butter, sugar, egg yolks and a spoonful of soured cream, pressed into a lined tin and baked until pale gold. It must be crisp, so bake it until the edges colour. For the topping, a toffee of condensed milk, cooked in the tin, or a chocolate ganache, are both traditional. Spread over the cooled base and decorate while it is still soft.\n\nTry a pattern of halved almonds, walnut halves, raisins and glacé cherries, or write Wesołych Świąt, Happy Easter, in icing. Leave it for several hours at room temperature to set, and cut into small squares, since the cake is very sweet. It keeps for a week in a tin. The flavour improves after a day.',
    ing: [
      '300 g plain flour',
      '150 g cold butter, cubed',
      '80 g icing sugar',
      '3 egg yolks',
      '1 tbsp soured cream',
      '1 pinch salt',
      '400 g tinned sweetened condensed milk, caramelised',
      '100 g butter, softened',
      '50 g walnuts',
      '50 g blanched almonds',
      '30 g raisins',
      '30 g glacé cherries'
    ],
    st: [
      'Heat the oven to 180C and line a 25 x 35 cm tin. Rub the cold butter into the flour, icing sugar and salt, mix in the yolks and soured cream and press into the tin.',
      'Prick the base and bake for 30 minutes until golden at the edges. Cool completely.',
      'Beat the caramelised condensed milk with the softened butter until smooth.',
      'Spread over the base and decorate with the walnuts, almonds, raisins and cherries.',
      'Leave to set for a few hours and cut into small squares.'
    ],
    tips: [
      'Bake the base until crisp.',
      'Spread the topping on cool but soft.',
      'Cut small squares, as it is very sweet.'
    ],
    pair: ['Tea', 'Coffee', 'Easter basket treats'],
    store: 'Keeps for 1 week in a tin.',
    nut: [352, 6, 37, 20, 1, 22, 60]
  },

  'piernik': {
    d: 'A Polish honey and spice cake with cinnamon, ginger, cloves and cocoa, baked for 40 minutes and finished with a plum jam and chocolate glaze.',
    meta: 'Piernik, Polish honey and spice gingerbread cake with plum jam and chocolate, baked for 40 minutes. Twelve servings, ready in 1 hour 5 minutes.',
    kw: ['piernik', 'polish gingerbread cake', 'polish honey spice cake', 'piernik recipe', 'gingerbread loaf with chocolate'],
    why: 'Piernik means gingerbread in Polish, and the best known is the piernik of Toruń, made with honey. The old name for the town is closely linked with the cake, which has been baked for hundreds of years, and the Christmas version is a dark, moist loaf that is better after a week.\n\nWarm the honey with butter, sugar and water until the butter melts, and let it cool for 10 minutes. Stir in the eggs one at a time. Sift the flour with cocoa, baking soda and the spices and fold them in, with a splash of milk. **Do not add the flour while the honey is hot**, because the eggs scramble and the cake is lumpy. The batter should be thick but pourable.\n\nBake at 170C for 40 minutes in a lined loaf tin, until a skewer comes out clean. Cool, split the loaf in half and spread plum jam between the layers. Cover with a chocolate glaze made from melted dark chocolate and a little butter. Wrap and keep for a few days before cutting; the spices bloom and the crumb softens. Thin slices are best.',
    ing: [
      '250 g honey',
      '100 g butter',
      '100 g caster sugar',
      '3 tbsp water',
      '3 eggs',
      '300 g plain flour',
      '2 tbsp cocoa powder',
      '1 tsp baking soda',
      '2 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1/2 tsp ground cloves',
      '1/2 tsp ground nutmeg',
      '100 ml milk',
      '4 tbsp plum jam',
      '100 g dark chocolate',
      '30 g butter, for the glaze'
    ],
    st: [
      'Heat the oven to 170C and line a 1.5 litre loaf tin.',
      'Warm the honey, 100 g butter, sugar and water until melted. Cool for 10 minutes. Beat in the eggs one at a time.',
      'Sift the flour with the cocoa, baking soda and spices and fold in with the milk.',
      'Pour into the tin and bake for 40 minutes until a skewer comes out clean. Cool.',
      'Split the loaf in half, spread the base with the jam and replace the top.',
      'Melt the chocolate with 30 g butter and pour over the cake.'
    ],
    tips: [
      'Cool the honey mixture before adding the eggs.',
      'Leave the cake to mature for a few days.',
      'Slice thinly.'
    ],
    pair: ['Tea', 'Mulled wine', 'Coffee'],
    store: 'Keeps for 2 weeks wrapped.',
    nut: [350, 5, 51, 14, 2, 31, 130]
  },

  'nalesniki': {
    d: 'Thin Polish pancakes folded round a filling of sweet curd cheese and raisins, then fried in butter until golden.',
    meta: 'Naleśniki, thin Polish pancakes filled with sweet curd cheese and raisins, cooked for 20 minutes. Four servings, ready in 50 minutes.',
    kw: ['nalesniki', 'polish pancakes with curd cheese', 'nalesniki z serem', 'polish crepes with sweet cheese', 'nalesniki recipe'],
    why: 'The first sign they are ready is the smell: butter browning and the sweet scent of vanilla cheese warming inside the pancake. Naleśniki are the Polish pancakes, thin, supple and slightly crisp at the edges, and the best known filling is twaróg, a fresh curd cheese, mixed with sugar, vanilla and raisins.\n\nThe batter is flour, eggs, milk, a splash of mineral water, a pinch of salt and a little melted butter. The sparkling water makes the pancakes lighter. Whisk it smooth and rest it for 15 minutes. **Pour in only enough batter to coat the pan thinly** and swirl it. Cook for 1 minute until the edges lift, flip and cook for 30 seconds. Stack the pancakes under a cloth to keep them soft.\n\nMash the curd cheese with sugar, an egg yolk and vanilla, and stir in the raisins. Put a spoonful in each pancake, fold it into an envelope, and fry the parcels in butter for 2 minutes on each side until golden. Serve warm with soured cream and a dusting of icing sugar. They can also be filled with jam or stewed fruit.',
    ing: [
      '200 g plain flour',
      '2 eggs',
      '300 ml whole milk',
      '100 ml sparkling mineral water',
      '1 pinch salt',
      '30 g butter, melted',
      '500 g curd cheese or quark',
      '60 g caster sugar',
      '1 egg yolk',
      '1 tsp vanilla extract',
      '50 g raisins',
      '40 g butter, for frying',
      '150 g soured cream, to serve'
    ],
    st: [
      'Whisk the flour, eggs, milk, water, salt and melted butter. Rest for 15 minutes.',
      'Cook 8 thin pancakes in a lightly buttered pan, 1 minute then 30 seconds. Stack under a cloth.',
      'Mash the curd cheese with the sugar, yolk and vanilla and stir in the raisins.',
      'Put a spoonful on each pancake and fold into an envelope.',
      'Fry the parcels in the 40 g butter for 2 minutes on each side. Serve with the soured cream.'
    ],
    tips: [
      'Sparkling water makes the pancakes lighter.',
      'Pour in only enough batter to coat the pan.',
      'Fry the parcels in butter for a golden finish.'
    ],
    pair: ['Soured cream', 'Icing sugar', 'Fruit compote', 'Tea'],
    store: 'Keeps for 2 days in the fridge, filled.',
    nut: [777, 29, 73, 41, 2, 32, 180]
  },

  'pierogi-z-kapusta': {
    untimed: ['cooling completely'],
    d: 'Polish dumplings filled with sauerkraut and dried mushrooms, boiled for 10 minutes and fried in butter with onions.',
    meta: 'Pierogi z kapustą, Polish dumplings filled with sauerkraut and mushrooms, boiled for 10 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['pierogi z kapusta', 'sauerkraut and mushroom pierogi', 'polish cabbage pierogi', 'pierogi z kapusta i grzybami', 'polish christmas eve pierogi'],
    why: 'Most home pierogi burst in the pot, and the fix is to seal them well and not to overfill. Pierogi z kapustą are the dumplings of Christmas Eve in Poland, filled with sauerkraut and dried wild mushrooms and served without meat, and they are one of the twelve dishes of the meatless Wigilia supper.\n\nThe dough is flour, hot water, an egg, oil and salt, kneaded for 8 minutes until soft and elastic, and rested for 30 minutes under a bowl. For the filling, rinse the sauerkraut, chop it fine and simmer it with soaked, chopped mushrooms and onion for 25 minutes, until dry. **Squeeze the filling very dry and cool it completely.** A wet filling will not stay in the dough.\n\nRoll the dough out thin, cut rounds with a 8 cm cutter and put a teaspoon of filling on each. Fold over and pinch the edge tightly. Boil in salted water in small batches for 3 to 4 minutes after they float. Drain and fry in butter with onions until golden. Serve hot with soured cream, though traditionally they are eaten plain at Christmas.',
    ing: [
      '400 g plain flour',
      '1 egg',
      '200 ml hot water',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '500 g sauerkraut, rinsed and chopped',
      '15 g dried porcini mushrooms, soaked and chopped',
      '1 onion, chopped',
      '2 tbsp vegetable oil, for the filling',
      '1/2 tsp black pepper',
      '2 onions, sliced',
      '60 g butter'
    ],
    st: [
      'Knead the flour, egg, hot water, oil and salt for 8 minutes to a soft dough. Rest under a bowl for 30 minutes.',
      'Fry the chopped onion in the oil for 5 minutes. Add the sauerkraut and mushrooms and simmer with a splash of water for 25 minutes until dry. Add the pepper and cool completely.',
      'Roll the dough thin and cut 8 cm rounds. Put a teaspoon of filling on each, fold over and pinch tightly.',
      'Boil in salted water in batches for 4 minutes after they float. Drain.',
      'Fry the sliced onions in the butter for 10 minutes until golden. Toss in the pierogi for 3 minutes.'
    ],
    tips: [
      'Cool and squeeze the filling dry.',
      'Pinch the edges tightly.',
      'Boil in small batches.'
    ],
    pair: ['Soured cream', 'Fried onions', 'Beetroot soup'],
    store: 'Keeps for 2 days in the fridge. Freeze uncooked for 2 months.',
    nut: [429, 9, 60, 17, 5, 4, 760]
  },

  'pierogi-z-miesem': {
    d: 'Polish dumplings filled with seasoned minced beef and pork, boiled for 10 minutes and served with fried onions.',
    meta: 'Pierogi z mięsem, Polish dumplings filled with beef and pork, boiled for 10 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['pierogi z miesem', 'polish meat pierogi', 'pierogi with minced meat', 'pierogi z mięsem recipe', 'polish meat dumplings'],
    why: 'A Sunday dish for a table of six, and a good use for the leftovers of a roast. Pierogi z mięsem are the Polish dumplings filled with seasoned meat, served with fried onions and a spoonful of soured cream, and they are among the most common pierogi after the potato and cheese ones.\n\nUse a mix of cooked beef and pork, finely minced, or fresh mince cooked until dry. Fry onion in lard until golden, add the meat, marjoram, salt and pepper and a splash of stock, and cook for 10 minutes. **Bind the filling with a little of the cooking juices**, so it is moist enough to stay soft inside the dough, but not wet enough to leak. Cool completely.\n\nMake the dough as for any pierogi: flour, hot water, an egg and a spoonful of oil, rested for 30 minutes. Roll thin and cut 8 cm rounds. Put a heaped teaspoon of filling in each, fold, and pinch the edges firmly. Boil in salted water in batches for 4 minutes after they float. Toss with butter and fried onions. They can also be pan fried until crisp after boiling.',
    ing: [
      '400 g plain flour',
      '1 egg',
      '200 ml hot water',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '300 g minced beef',
      '200 g minced pork',
      '2 onions, chopped',
      '2 tbsp lard',
      '1 tsp dried marjoram',
      '100 ml beef stock',
      '1 tsp salt, for the filling',
      '1/2 tsp black pepper',
      '2 onions, sliced',
      '60 g butter'
    ],
    st: [
      'Knead the flour, egg, hot water, oil and 1/2 tsp salt for 8 minutes to a soft dough. Rest under a bowl for 30 minutes.',
      'Fry the chopped onions in the lard for 8 minutes. Add the beef and pork and cook for 10 minutes. Add the marjoram, stock, salt and pepper and cook for 10 minutes until moist but not wet. Cool.',
      'Roll the dough thin and cut 8 cm rounds. Fill, fold and pinch tightly.',
      'Boil in salted water in batches for 4 minutes after they float.',
      'Fry the sliced onions in the butter for 10 minutes until golden and toss with the pierogi.'
    ],
    tips: [
      'Cool the filling before filling the dough.',
      'Make the filling moist but not wet.',
      'Pinch the edges firmly.'
    ],
    pair: ['Soured cream', 'Fried onions', 'Beetroot soup', 'Beer'],
    store: 'Keeps for 2 days in the fridge. Freeze uncooked for 2 months.',
    nut: [580, 24, 58, 28, 3, 3, 710]
  },

  'placki-po-wegiersku': {
    d: 'Potato pancakes topped with a thick paprika beef goulash and a spoonful of soured cream, a Polish pub classic.',
    meta: 'Placki po węgiersku, Polish potato pancakes topped with beef goulash, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['placki po wegiersku', 'polish potato pancakes with goulash', 'hungarian style potato pancakes', 'placki ziemniaczane with goulash', 'potato pancake and goulash'],
    why: 'This is what to put on the table in the first cold week of the year, a plate of crisp potato pancakes under a deep red goulash. Placki po węgiersku, Hungarian style potato pancakes, are a Polish pub classic, a dish that is not Hungarian at all but borrows its goulash from that country.\n\nThe pancakes are made from grated potato and onion with an egg and a spoonful of flour. Squeeze the grated potato in a cloth and pour off the water, but keep the starch that settles. **Stir the starch back into the mixture**, as it holds the pancakes together. Season well. Fry spoonfuls in oil over medium heat for about 4 minutes on each side, until they are deep gold and crisp at the edge.\n\nThe goulash is a quick one: brown beef in lard, add onion, garlic, paprika, tomato purée and stock, and simmer for 45 minutes, until the beef is tender and the sauce has thickened. Take it off the heat before adding the paprika. Pile the sauce over the pancakes, top with soured cream and parsley and serve at once. A bit of extra chilli gives it a kick.',
    ing: [
      '700 g beef chuck, in 2 cm cubes',
      '2 tbsp lard',
      '2 onions, chopped',
      '2 garlic cloves',
      '2 tsp sweet paprika',
      '1 tbsp tomato purée',
      '400 ml beef stock',
      '1 red pepper, diced',
      '1 kg floury potatoes, peeled',
      '1 onion',
      '1 egg',
      '2 tbsp plain flour',
      '1 tsp salt',
      '60 ml rapeseed oil absorbed, from 200 ml for frying',
      '150 g soured cream'
    ],
    st: [
      'Brown the beef in the lard in batches for 8 minutes. Lift out. Soften the 2 chopped onions and garlic in the pot for 8 minutes.',
      'Take the pot off the heat, stir in the paprika and purée, then the stock. Return the beef and add the pepper. Simmer for 45 minutes.',
      'Grate the potatoes and the whole onion, squeeze in a cloth, pour off the water and stir the starch back in. Mix with the egg, flour and salt.',
      'Fry spoonfuls in the oil for 4 minutes on each side until deep gold. Drain.',
      'Top with the goulash and the soured cream.'
    ],
    tips: [
      'Stir the potato starch back in.',
      'Add the paprika off the heat.',
      'Serve the pancakes immediately.'
    ],
    pair: ['Soured cream', 'Pickled cucumbers', 'Beer'],
    store: 'The goulash keeps for 3 days. Fry the pancakes fresh.',
    nut: [902, 45, 59, 54, 8, 9, 1090]
  },

  'sernik-na-zimno': {
    d: 'A no bake Polish cheesecake of biscuit base, cream cheese and whipped cream, set in the fridge for 6 hours and topped with fruit.',
    meta: 'Sernik na zimno, Polish no bake cheesecake with biscuit base and fruit, no baking. Ten servings, ready in 25 minutes plus chilling.',
    kw: ['sernik na zimno', 'polish no bake cheesecake', 'cold cheesecake with fruit', 'sernik na zimno recipe', 'no bake quark cheesecake'],
    why: 'Does a cheesecake need an oven? Not this one. Sernik na zimno, the cold cheesecake of Poland, is a light, creamy cake of curd cheese, mascarpone and cream that is set in the fridge, and it is eaten in summer topped with strawberries or raspberries.\n\nThe base is crushed biscuits mixed with soft butter and pressed into a tin. Chill for 20 minutes while you make the filling. Beat curd cheese or quark with icing sugar, vanilla and lemon zest until smooth, then add mascarpone. **Whip the cream to soft peaks and fold it in**, in two goes, so the cake keeps its air. A heavy filling is a dense one.\n\nSpread over the base and smooth the top. Cover and chill for at least 6 hours, ideally overnight, so the cheesecake sets firm enough to slice. Decorate with fresh strawberries and a spoonful of fruit glaze. Cut with a knife dipped in hot water. The cake keeps for 3 days in the fridge, and it can be frozen in slices for a month.',
    ing: [
      '250 g digestive biscuits, crushed',
      '120 g soft butter',
      '500 g curd cheese or quark',
      '250 g mascarpone',
      '100 g icing sugar',
      '1 tsp vanilla extract',
      '1 lemon, zest',
      '300 ml double cream',
      '400 g strawberries',
      '3 tbsp strawberry glaze'
    ],
    st: [
      'Mix the crushed biscuits with the soft butter and press into the base of a 24 cm springform tin. Chill for 20 minutes.',
      'Beat the curd cheese, mascarpone, icing sugar, vanilla and zest until smooth.',
      'Whip the cream to soft peaks and fold into the cheese in two goes.',
      'Spread over the base and smooth the top. Cover and chill for 6 hours.',
      'Top with the strawberries and glaze and cut with a hot knife.'
    ],
    tips: [
      'Press the base firmly.',
      'Fold in the cream gently.',
      'Chill for at least 6 hours.'
    ],
    pair: ['Fresh strawberries', 'Coffee', 'Tea'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [380, 'Chilling'],
    nut: [545, 10, 34, 41, 2, 21, 170]
  },

  'chlodnik': {
    d: 'A cold pink Polish soup of beetroot, kefir, cucumber, radishes and dill: 15 minutes of work and no cooking, then an hour in the fridge.',
    meta: 'Chłodnik, cold pink Polish beetroot and kefir soup with cucumber and dill, ready in 15 minutes plus chilling. Four servings, no cooking.',
    kw: ['chlodnik', 'polish cold beetroot soup', 'pink summer soup with kefir', 'chlodnik litewski', 'cold beetroot and cucumber soup'],
    why: 'A bowl for four on the first hot day, and the pinkest soup you will ever see. Chłodnik is a cold Polish summer soup of beetroot, kefir or buttermilk, cucumber, radishes and dill, and it has been made for generations in the days when the first young beets arrived at the market.\n\nUse ready peeled vacuum packed beetroot to save time, or grate raw young beets. Grate half the beetroot coarsely and dice the rest. Stir into the kefir with a little cold water, grated cucumber, sliced radishes, spring onion and a handful of dill. **Season well with salt, a pinch of sugar and a spoonful of lemon juice**, because cold dulls flavour, and the soup should be tangy and sweet at once.\n\nChill for at least 1 hour. The colour deepens and the flavours blend. Serve in bowls over a few ice cubes, with a dollop of soured cream and a scattering of chives. A boiled egg half and a few new potatoes on the side are traditional. The soup keeps for 2 days in the fridge, and the colour fades slightly.',
    ing: [
      '500 g vacuum packed beetroot',
      '700 ml kefir or buttermilk',
      '200 ml cold water',
      '1 cucumber, 300 g, grated',
      '6 radishes, 80 g, thinly sliced',
      '4 spring onions, sliced',
      '4 tbsp chopped dill',
      '1 tbsp lemon juice',
      '1 tsp caster sugar',
      '1 tsp salt',
      '100 g soured cream, to serve'
    ],
    st: [
      'Grate half the beetroot and dice the rest finely.',
      'Stir the kefir with the cold water, then add the beetroot, cucumber, radishes, spring onions and half the dill.',
      'Season with the lemon juice, sugar and salt.',
      'Chill for 1 hour. Taste again.',
      'Serve over ice cubes with the soured cream and remaining dill.'
    ],
    tips: [
      'Season boldly, as cold dulls flavour.',
      'Use vacuum packed beetroot to save time.',
      'Chill for at least an hour.'
    ],
    pair: ['New potatoes', 'Rye bread', 'Cold beer'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [207, 9, 27, 7, 5, 21, 890]
  },

  'kotlet-mielony': {
    d: 'Flat Polish minced pork cutlets seasoned with onion, garlic and marjoram, coated in breadcrumbs and fried, in 30 minutes.',
    meta: 'Kotlet mielony, flat Polish minced pork cutlets in breadcrumbs, cooked for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['kotlet mielony', 'polish minced pork cutlets', 'polish meat patties', 'kotlet mielony recipe', 'breaded minced pork patties'],
    why: 'Pork mince, an egg, a roll soaked in milk and some onion: you probably have them now, and the result is a dish that Poles eat several times a week. Kotlet mielony is the Polish meat cutlet, a flat patty of minced pork flavoured with garlic and marjoram, coated in breadcrumbs and fried until crisp.\n\nSoak a stale bread roll in milk for 5 minutes and squeeze it dry. Mix with the mince, an egg, grated onion, crushed garlic, salt, pepper and a teaspoon of marjoram. **Knead the mixture for a full 2 minutes**, which makes it sticky and stops the cutlets falling apart in the pan. Wet your hands and shape into flat ovals about 1.5 cm thick.\n\nCoat in breadcrumbs, pressing firmly, and fry in a wide pan with a layer of oil or lard over medium heat for about 6 minutes on each side, until deep gold and cooked through. Drain on kitchen paper. Serve with mashed potatoes, cucumber salad or red cabbage. The cutlets are also good cold in a sandwich, and they freeze well.',
    ing: [
      '700 g minced pork',
      '1 stale bread roll, 60 g, soaked in 100 ml milk',
      '1 egg',
      '1 onion, grated',
      '2 garlic cloves',
      '1 tsp dried marjoram',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '100 g dry breadcrumbs',
      '50 ml rapeseed oil absorbed, from 150 ml for frying',
      '800 g mashed potato, to serve'
    ],
    st: [
      'Squeeze the roll and mix with the pork, egg, onion, garlic, marjoram, salt and pepper. Knead for 2 minutes.',
      'With wet hands shape into 8 flat ovals 1.5 cm thick. Press into the breadcrumbs.',
      'Heat the oil in a wide pan over medium heat and fry for 6 minutes on each side until deep gold and cooked through.',
      'Drain on kitchen paper and serve with the mashed potato.'
    ],
    tips: [
      'Knead the mixture until sticky.',
      'Wet your hands to shape.',
      'Fry over medium heat so they cook through.'
    ],
    pair: ['Mashed potato', 'Cucumber salad', 'Red cabbage'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [792, 40, 59, 44, 6, 5, 940]
  },

  'pyry-z-gzikiem': {
    d: 'Boiled new potatoes served with gzik, a cold dip of curd cheese, soured cream, radishes and chives from Poznań.',
    meta: 'Pyry z gzikiem, boiled potatoes with a cold curd cheese dip with radishes and chives, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['pyry z gzikiem', 'poznan potatoes with curd cheese', 'gzik recipe', 'polish potatoes with quark and radish', 'pyry z gzikiem poznanskie'],
    why: 'Compare it with a jacket potato and quark, and you find a sharper, crunchier dip with radishes and spring onions in the cheese. Pyry z gzikiem, potatoes with gzik, is the dish of Poznań in western Poland, where pyry is the local word for potatoes, and it is eaten for lunch or a light supper.\n\nBoil small potatoes in their skins for 25 minutes, in salted water, until a knife slips in easily. For the gzik, mash the curd cheese with a fork and mix it with soured cream, sliced radishes, finely chopped spring onions and chives. **Season with salt and pepper and let it stand for 10 minutes**, as the radishes release their juice and sharpen the flavour. Taste and adjust.\n\nDrain the potatoes and dry them in the pot. Serve them hot, in their skins, with a generous spoonful of cold gzik on top and a pat of butter. Sometimes a few pieces of crisp bacon or fried onion are added. The contrast between the hot potatoes and the cold, sharp cheese is what makes the dish. Eat at once.',
    ing: [
      '1.2 kg small waxy potatoes',
      '1 tsp salt',
      '400 g curd cheese or quark',
      '150 g soured cream',
      '8 radishes, 100 g, thinly sliced',
      '4 spring onions, finely chopped',
      '3 tbsp chopped chives',
      '1/2 tsp salt, for the gzik',
      '1/4 tsp black pepper',
      '30 g butter'
    ],
    st: [
      'Boil the potatoes in their skins in salted water for 25 minutes until tender.',
      'Mash the curd cheese with a fork and mix in the soured cream, radishes, spring onions, chives, salt and pepper. Stand for 10 minutes.',
      'Drain the potatoes and return to the pot for 2 minutes to dry.',
      'Serve hot with the butter and a spoonful of gzik.'
    ],
    tips: [
      'Slice the radishes thin.',
      'Let the gzik stand for 10 minutes.',
      'Serve the potatoes hot and the dip cold.'
    ],
    pair: ['Crisp bacon', 'Fried onions', 'Pickled cucumbers'],
    store: 'The gzik keeps for 2 days in the fridge.',
    nut: [524, 19, 58, 24, 7, 8, 960]
  },

  'kluski-slaskie': {
    untimed: ['cooling completely'],
    d: 'Soft Silesian potato dumplings shaped into balls with a dent in the middle for gravy, boiled for 10 minutes.',
    meta: 'Kluski śląskie, soft Silesian potato dumplings with a dent for gravy, cooked for 10 minutes. Four servings, ready in 40 minutes.',
    kw: ['kluski slaskie', 'silesian potato dumplings', 'potato dumplings with a dent', 'kluski slaskie recipe', 'polish potato dumplings with gravy'],
    why: 'The first sign they are right is the dent: a shallow thumb print in the centre of each dumpling, where the gravy collects. Kluski śląskie are the Silesian potato dumplings, soft and smooth, made with boiled potatoes and potato starch, and served with roast beef rolls and a rich sauce.\n\nBoil floury potatoes in their skins, peel and mash them while hot and let the mash cool completely. Measure it: for every 3 parts of mashed potato, take away one part and replace it with potato starch. **Cut a cross in the mash with a knife, remove one quarter and fill the gap with starch**, which is the traditional method and gives the dumplings their lightness. Add an egg and a pinch of salt.\n\nKnead briefly to a smooth dough and roll into balls the size of a walnut, pressing a dent with your thumb. Simmer in salted water for about 5 minutes after they float. Lift out with a slotted spoon and serve at once. They are soft and slightly chewy. The dent should hold about a spoonful of gravy.',
    ing: [
      '1 kg floury potatoes',
      '150 g potato starch',
      '1 egg',
      '1 tsp salt',
      '400 ml beef gravy, to serve',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes. Peel and mash while hot. Cool completely.',
      'Cut a cross in the mash, remove one quarter and replace it with the starch. Add the egg and salt.',
      'Knead briefly to a smooth dough. Roll into 20 balls and press a dent in each.',
      'Simmer in salted water for 5 minutes after they float. Lift out.',
      'Serve with the gravy and parsley.'
    ],
    tips: [
      'Cool the mash completely.',
      'Replace a quarter with starch.',
      'Press a dent for the gravy.'
    ],
    pair: ['Beef roulade', 'Gravy', 'Red cabbage', 'Roast pork'],
    store: 'Keeps for 2 days in the fridge. Slice and fry.',
    nut: [275, 8, 54, 3, 7, 3, 920]
  },

  'rolada-slaska': {
    d: 'Beef slices rolled around bacon, onion and gherkin, browned and braised in gravy for 40 minutes, a Silesian Sunday dish.',
    meta: 'Rolada śląska, Silesian beef roll with bacon, onion and gherkin in gravy, cooked for 40 minutes. Eight servings, ready in 1 hour 30 minutes.',
    kw: ['rolada slaska', 'silesian beef rolls', 'beef roulade with bacon and gherkin', 'rolada slaska recipe', 'polish beef roll in gravy'],
    why: 'Short and sharp: beat the beef thin, and roll it tightly. Rolada śląska, the Silesian beef roll, is a Sunday dish in southern Poland, with a hidden surprise in the centre of each slice: a stripe of bacon, a strip of gherkin and onion. It is usually served with kluski śląskie and red cabbage.\n\nUse topside or silverside, cut into 8 slices and beaten flat to 5 mm. Spread each slice with mustard and season. Lay on a strip of bacon, a piece of pickled gherkin and a few onion slices. **Roll the beef up tightly and secure with string or cocktail sticks**, since it unrolls in the pot. Brown the rolls in lard on all sides.\n\nTransfer to a casserole, add stock, bay and allspice and cover. Braise at 160C for 40 minutes, or until the meat is tender. Thicken the juices with a little flour and cream. Remove the string before serving, slice the rolls in half to show the filling and serve with the gravy. The dish improves if made a day in advance and reheated slowly in the sauce.',
    ing: [
      '1 kg beef topside, in 8 thin slices',
      '3 tbsp mustard',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '120 g streaky bacon rashers',
      '100 g gherkins, in strips',
      '1 onion, sliced',
      '3 tbsp lard',
      '500 ml beef stock',
      '2 bay leaves',
      '1 g allspice berries',
      '30 g plain flour',
      '100 ml double cream'
    ],
    st: [
      'Beat the beef to 5 mm. Spread with the mustard and season.',
      'Lay a bacon rasher, strips of gherkin and onion on each slice. Roll up tightly and tie with string.',
      'Brown the rolls in the lard in a casserole for 8 minutes. Add the stock, bay and allspice and cover.',
      'Braise at 160C for 40 minutes until tender.',
      'Lift out the rolls. Whisk the flour into the cream and stir into the juices, simmer for 3 minutes. Serve.'
    ],
    tips: [
      'Beat the beef thin.',
      'Tie the rolls tightly.',
      'Make a day ahead for more flavour.'
    ],
    pair: ['Silesian dumplings', 'Red cabbage', 'Gravy'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [310, 31, 6, 18, 1, 1, 1020]
  },

  'modra-kapusta': {
    d: 'Polish red cabbage braised with apple, onion, vinegar and sugar for 25 minutes until tender and sweet and sour.',
    meta: 'Modra kapusta, Polish braised red cabbage with apple, onion and vinegar, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['modra kapusta', 'polish braised red cabbage', 'sweet and sour red cabbage', 'modra kapusta recipe', 'red cabbage with apple'],
    why: 'Why add vinegar to red cabbage? Because the acid keeps the colour red and bright, where plain cooking turns it a dull blue grey. Modra kapusta is the Polish braised red cabbage, a sweet and sour side dish served with roast pork, duck and goose, and the vinegar goes in early, as well as at the end.\n\nShred the cabbage finely. Fry sliced onion in lard until soft, add the cabbage and toss it in the fat for 3 minutes. **Pour in the vinegar at once**, with a splash of water, so the colour is set. Add a peeled, grated apple, sugar, caraway, a bay leaf and salt, and cover.\n\nCook gently for about 25 minutes, stirring now and then and adding a spoon of water if it dries, until the cabbage is tender but still has some bite. Stir in a spoonful of redcurrant jelly or a little more sugar at the end, and adjust the sharpness with vinegar. It should be sweet, sour and glossy. The cabbage keeps for 4 days and is even better the day after.',
    ing: [
      '1 red cabbage, about 900 g, finely shredded',
      '2 tbsp lard',
      '1 onion, sliced',
      '3 tbsp red wine vinegar',
      '100 ml water',
      '1 apple, peeled and grated',
      '2 tbsp caster sugar',
      '1 tsp caraway seeds',
      '1 bay leaf',
      '1 tsp salt',
      '1 tbsp redcurrant jelly'
    ],
    st: [
      'Melt the lard and soften the onion for 5 minutes. Add the cabbage and toss for 3 minutes.',
      'Pour in the vinegar and water at once. Add the apple, sugar, caraway, bay and salt.',
      'Cover and cook gently for 25 minutes, stirring now and then.',
      'Stir in the redcurrant jelly and taste for sharpness.'
    ],
    tips: [
      'Add the vinegar early to keep the colour.',
      'Cook until tender with a little bite.',
      'Make it a day ahead.'
    ],
    pair: ['Roast pork', 'Goose', 'Duck', 'Dumplings'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [224, 4, 34, 8, 6, 23, 650]
  },

  'zrazy': {
    d: 'Polish beef rolls filled with mushrooms, onion and pickled cucumber, browned and braised in gravy for 60 minutes.',
    meta: 'Zrazy, Polish beef rolls filled with mushrooms, onion and pickle, cooked for 60 minutes. Four servings, ready in 1 hour 30 minutes.',
    kw: ['zrazy', 'polish beef rolls', 'zrazy zawijane', 'beef rolls with mushrooms and pickles', 'zrazy recipe'],
    why: 'It looks like a small parcel of beef and tastes of the forest, from the mushrooms and the thick brown gravy. Zrazy are Polish beef rolls, closely related to the Silesian rolada, but filled with mushrooms, onion and pickled cucumber and cooked slowly in a gravy that is thickened with cream.\n\nCut slices from a piece of topside, about 1 cm thick, and beat each one out to 5 mm. Fry chopped onions and mushrooms in butter until all the moisture is gone and they begin to colour. Cool, then mix with chopped pickled cucumber and parsley. **Spread the filling only to 2 cm from the edge**, so it does not squeeze out as you roll.\n\nFold in the sides, roll the meat tightly and tie with string. Brown the rolls in lard in a casserole, then add stock, a bay leaf and some dried mushrooms. Cover and simmer for 60 minutes, turning once, until the beef is tender. Lift out, remove the string and thicken the sauce with flour mixed in cream. Serve with buckwheat or boiled potatoes and the gravy.',
    ing: [
      '700 g beef topside, in 4 slices',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '30 g butter',
      '1 onion, chopped',
      '200 g mushrooms, chopped',
      '2 pickled cucumbers, 100 g, chopped',
      '2 tbsp chopped parsley',
      '2 tbsp lard',
      '500 ml beef stock',
      '1 bay leaf',
      '10 g dried mushrooms',
      '1 tbsp plain flour',
      '100 ml double cream'
    ],
    st: [
      'Beat the beef to 5 mm and season.',
      'Fry the onion and mushrooms in the butter for 10 minutes until dry and golden. Cool and mix with the pickles and parsley.',
      'Spread the filling over the beef, leaving a 2 cm border. Roll up tightly and tie with string.',
      'Brown the rolls in the lard for 8 minutes. Add the stock, bay and dried mushrooms, cover and simmer for 60 minutes.',
      'Lift out the rolls. Whisk the flour into the cream, stir into the gravy and simmer for 3 minutes.'
    ],
    tips: [
      'Cook the filling until dry.',
      'Leave a border when filling.',
      'Simmer gently so the rolls stay whole.'
    ],
    pair: ['Buckwheat', 'Boiled potatoes', 'Beetroot salad'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [508, 42, 13, 32, 2, 6, 1120]
  },

  'kaszanka': {
    d: 'Polish buckwheat and blood sausage fried with onions and apple until crisp, served with mustard, ready in 45 minutes.',
    meta: 'Kaszanka, Polish buckwheat and blood sausage fried with onions and apple, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['kaszanka', 'polish blood sausage', 'buckwheat blood sausage', 'kaszanka with onions and apple', 'kaszanka recipe'],
    why: 'What is in kaszanka? Pork blood, buckwheat groats, offal, onions and marjoram, packed into a casing, and the result is a dense, earthy sausage that tastes of grain and spice. It is a staple of Polish winter, eaten at a barbecue, at breakfast or at the end of a pig slaughter.\n\nKaszanka is sold ready made, in rings, and just needs frying. Cut it in thick slices, or leave it whole and prick it. Fry sliced onions slowly in lard for 15 minutes until deep gold, and push them to the side. **Fry the sausage on a medium heat**, turning it often, for 8 minutes until the casing is crisp. Overcooking makes it dry and crumbly. Add sliced apple for the last 3 minutes.\n\nSprinkle with marjoram and serve with the onions and apple, mustard and rye bread. A few pickled cucumbers on the side cut the richness. At a barbecue, the sausage is grilled over a fire, in its casing, and served on a paper plate. It is best hot, and tastes of crisp edges and soft centre.',
    ing: [
      '600 g kaszanka, in 2 cm slices',
      '3 tbsp lard',
      '3 onions, sliced',
      '2 apples, cored and sliced',
      '1 tsp dried marjoram',
      '1/2 tsp black pepper',
      '4 tbsp sharp mustard',
      '4 slices rye bread'
    ],
    st: [
      'Fry the onions in the lard over medium low heat for 15 minutes until deep gold. Push to the side.',
      'Fry the kaszanka slices for 4 minutes on each side until the edges are crisp.',
      'Add the apples for the last 3 minutes.',
      'Sprinkle with the marjoram and pepper and serve with the mustard and bread.'
    ],
    tips: [
      'Fry on medium heat to avoid drying it.',
      'Brown the onions slowly.',
      'Serve with mustard and pickles.'
    ],
    pair: ['Mustard', 'Pickled cucumbers', 'Rye bread', 'Beer'],
    store: 'Best fresh.',
    nut: [715, 23, 59, 43, 6, 14, 1670]
  },

  'knedle-ze-sliwkami': {
    d: 'Polish potato dumplings wrapped around whole plums with a sugar cube and served with buttered breadcrumbs and cinnamon.',
    meta: 'Knedle ze śliwkami, Polish potato dumplings filled with plums, cooked for 20 minutes. Six servings, ready in 1 hour.',
    kw: ['knedle ze sliwkami', 'polish plum dumplings', 'plum dumplings in potato dough', 'knedle ze sliwkami recipe', 'polish dumplings with plums'],
    why: 'Short and sharp: use ripe, firm plums. Soft ones burst in the water, and hard ones stay sour. Knedle ze śliwkami, the Polish plum dumplings, are made in late summer when the small purple plums, known as węgierki, are ripe, and they are served with melted butter and crumbs and a dusting of sugar.\n\nBoil floury potatoes in their skins, peel while hot and rice them. Cool, then mix with flour, potato starch, an egg and a pinch of salt into a soft dough. Do not overwork it. **Stone the plums and fill each with a sugar cube** and a pinch of cinnamon. Press a flat disc of dough around each plum and roll it into a smooth ball between wet hands, sealing every gap.\n\nSimmer the dumplings in salted water for about 5 minutes after they float, in batches. Lift out and roll in browned butter and breadcrumbs mixed with sugar and cinnamon. Serve warm with a spoonful of soured cream or sweet cream. The plums melt into a hot, sweet jam inside, so wait a minute before biting.',
    ing: [
      '800 g floury potatoes',
      '150 g plain flour',
      '50 g potato starch',
      '1 egg',
      '1/2 tsp salt',
      '600 g small plums',
      '48 g sugar cubes',
      '1/2 tsp ground cinnamon',
      '80 g butter',
      '100 g dry breadcrumbs',
      '40 g caster sugar'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes. Peel and rice while hot. Cool.',
      'Mix with the flour, starch, egg and salt into a soft dough.',
      'Stone the plums and put a sugar cube and a pinch of cinnamon in each. Wrap a disc of dough around each plum and roll into a smooth ball.',
      'Simmer in salted water for 5 minutes after they float, in batches. Lift out.',
      'Brown the breadcrumbs in the butter with the sugar for 5 minutes and roll the dumplings in them.'
    ],
    tips: [
      'Use ripe but firm plums.',
      'Seal the dough completely.',
      'Wait a minute before biting, as the plum is hot.'
    ],
    pair: ['Soured cream', 'Whipped cream', 'Cinnamon sugar'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [477, 9, 81, 13, 6, 27, 330]
  },

  'vepro-knedlo-zelo': {
    d: 'Czech roast pork with bread dumplings and sauerkraut, the national plate, roasted for 90 minutes with caraway and garlic.',
    meta: 'Vepřo knedlo zelo, Czech roast pork with bread dumplings and sauerkraut, cooked for 90 minutes. Six servings, ready in 1 hour 55 minutes.',
    kw: ['vepro knedlo zelo', 'czech roast pork dumplings and sauerkraut', 'czech national dish', 'vepřo knedlo zelo recipe', 'pork with dumplings and cabbage'],
    why: 'The name is the recipe: vepřo knedlo zelo means pork, dumpling, cabbage. It is the most famous plate in Czech cooking, served at pubs and Sunday tables across the country, and the three parts are cooked separately and brought together on the plate.\n\nFor the pork, use shoulder with the rind on. Score the rind, rub with salt, caraway and garlic and set in a tin on onions. Add a little water and roast at 180C for 90 minutes, basting. **Keep adding a splash of water to the tin**, so the juices do not burn, because they make the gravy. For the last 15 minutes, raise the heat to 220C to crisp the rind.\n\nThe dumplings are sliced bread dumplings, made as the Austrian napkin dumplings, simmered in a cloth and sliced. The sauerkraut is simmered with onion, a spoonful of sugar and caraway until soft, and sometimes thickened with grated potato. Serve the sliced pork with the dumplings and cabbage and a ladle of the pan gravy. A half litre of Czech lager is the usual drink.',
    ing: [
      '1.5 kg pork shoulder, rind on',
      '2 tsp salt',
      '2 tsp caraway seeds',
      '4 garlic cloves, crushed',
      '2 onions, sliced',
      '250 ml water',
      '400 g stale white bread, in cubes',
      '250 ml warm milk',
      '2 eggs',
      '1 tbsp butter',
      '800 g sauerkraut',
      '1 tbsp caster sugar',
      '1 tbsp lard'
    ],
    st: [
      'Heat the oven to 180C. Score the rind, rub with the salt, half the caraway and the garlic and set on the onions in a tin with half the water.',
      'Roast for 90 minutes, adding water as needed and basting. Turn up to 220C for the last 15 minutes.',
      'Mix the bread with the milk, eggs and butter and leave for 20 minutes. Shape into a log, wrap in a cloth and simmer for 25 minutes.',
      'Simmer the sauerkraut with the sugar, lard and remaining caraway for 30 minutes.',
      'Rest the pork for 15 minutes, slice and serve with the sliced dumplings, sauerkraut and the pan gravy.'
    ],
    tips: [
      'Keep adding water to the tin.',
      'Crisp the rind at the end.',
      'Slice the dumpling with a thread.'
    ],
    pair: ['Czech lager', 'Gravy', 'Mustard'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [817, 56, 47, 45, 7, 12, 2180]
  },

  'gulas-cesky': {
    d: 'Czech beef goulash with onions, caraway and paprika, simmered for 2 hours and served with bread dumplings.',
    meta: 'Guláš český, Czech beef goulash with onions, caraway and paprika, cooked for 2 hours. Six servings, ready in 2 hours 20 minutes.',
    kw: ['gulas cesky', 'czech goulash', 'czech beef goulash with onions', 'guláš recipe', 'czech beef stew with dumplings'],
    why: 'Compare it with the Hungarian gulyás and the Czech version is thicker, with more onions and less paprika. Guláš is the Czech beef stew, a staple of every pub menu, and it is flavoured with caraway, marjoram and garlic. It is a dish that Czechs have made their own since the days of the Austro Hungarian Empire.\n\nUse as many onions as meat, by weight. Cook the onions slowly in lard for 20 minutes, until they are golden and almost melted, because they form the thick sauce, with no flour. Add the beef, cut into 3 cm cubes, and brown it. **Take the pot off the heat before adding the paprika and tomato purée**, as paprika turns bitter if it burns. Stir in garlic, caraway and marjoram, then the stock.\n\nSimmer, covered, for 2 hours on a low heat, stirring now and then, until the beef is very tender and the sauce is thick and glossy. Add a little water if it catches. Serve with bread dumplings and a slice of raw onion on the side. The goulash is better the next day, and reheats well.',
    ing: [
      '1 kg beef shin or chuck, in 3 cm cubes',
      '1 kg onions, chopped',
      '4 tbsp lard',
      '2 tbsp sweet paprika',
      '1 tbsp tomato purée',
      '3 garlic cloves',
      '1 tsp caraway seeds',
      '1 tsp dried marjoram',
      '500 ml beef stock',
      '1 tsp salt',
      '400 g bread dumplings, to serve'
    ],
    st: [
      'Cook the onions in the lard over low heat for 20 minutes until golden and almost melted.',
      'Add the beef and brown for 10 minutes.',
      'Take the pot off the heat, stir in the paprika and purée, then the garlic, caraway, marjoram and stock.',
      'Cover and simmer on low heat for 2 hours, stirring now and then.',
      'Season with the salt and serve with the dumplings.'
    ],
    tips: [
      'Use as many onions as beef.',
      'Add the paprika off the heat.',
      'Make it a day ahead if you can.'
    ],
    pair: ['Bread dumplings', 'Czech lager', 'Pickled peppers'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [678, 42, 51, 34, 6, 11, 1110]
  },

  'smazeny-syr': {
    d: 'Slabs of Edam or Hermelín cheese coated in breadcrumbs and fried until crisp, served with tartare sauce and chips.',
    meta: 'Smažený sýr, Czech breaded fried cheese served with tartare sauce, cooked for 10 minutes. Four servings, ready in 25 minutes.',
    kw: ['smazeny syr', 'czech fried cheese', 'breaded edam cheese', 'smažený sýr recipe', 'czech fried cheese with tartare sauce'],
    why: 'Coat the cheese twice. That is the short and sharp advice for smažený sýr, the breaded fried cheese of Czech pubs, because a single coating cracks and lets the cheese leak into the oil. A double layer of egg and crumbs holds it in.\n\nUse a firm, mild cheese such as Edam, Gouda or Emmental, cut into slabs about 1.5 cm thick. Freeze them for 30 minutes if you can; a very cold slab melts more slowly in the pan. Dust with flour, dip in beaten egg, then crumbs, then egg and crumbs again. **Press the crumbs on firmly**, especially at the edges. Rest the coated slabs in the fridge for 10 minutes.\n\nFry in oil at 175C for about 2 minutes on each side, until deep gold. Watch them and lift them out as soon as the crust is a rich colour, since the cheese melts fast. Drain and serve at once with tartare sauce, chips and a slice of lemon. The cheese should ooze when you cut in. It is a satisfying and cheap meal.',
    ing: [
      '480 g Edam or Gouda, cut in 4 slabs 1.5 cm thick',
      '50 g plain flour',
      '3 eggs, beaten',
      '100 g fine breadcrumbs',
      '60 ml rapeseed oil absorbed, from 500 ml for frying',
      '80 g tartare sauce',
      '300 g chips, to serve',
      '1 lemon, in wedges'
    ],
    st: [
      'Freeze the cheese slabs for 30 minutes if you can.',
      'Dust with flour, dip in egg, press into the crumbs, dip in egg again and then crumbs again. Rest in the fridge for 10 minutes.',
      'Heat the oil to 175C and fry for 2 minutes on each side until deep gold.',
      'Drain on kitchen paper and serve at once with the tartare sauce, chips and lemon.'
    ],
    tips: [
      'Coat the cheese twice.',
      'Freeze the slabs first.',
      'Lift them out as soon as they are golden.'
    ],
    pair: ['Tartare sauce', 'Chips', 'Czech lager', 'Lemon wedges'],
    store: 'Best fresh.',
    nut: [928, 42, 55, 60, 4, 6, 1400]
  },

  'rizek-cesky': {
    d: 'A Czech breaded pork or veal schnitzel fried in lard until the crumb puffs and ripples, served with potato salad.',
    meta: 'Řízek, Czech breaded pork schnitzel fried in lard, served with potato salad, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['rizek cesky', 'czech schnitzel', 'czech breaded pork cutlet', 'rizek recipe', 'schnitzel with potato salad czech'],
    why: 'What makes a good schnitzel crust ripple and puff away from the meat? Plenty of fat in the pan, and a swirl of the pan. Řízek is the Czech schnitzel, made from pork or veal beaten flat, coated in flour, egg and fine crumbs and fried in lard or oil, and it is served on Sundays with potato salad.\n\nBeat the cutlets between sheets of cling film to 5 mm, so that they cook in minutes. Season with salt and dust with flour, dip in beaten egg and press into fine breadcrumbs. **Do not press the crumbs on too hard**, so that there is room for them to puff in the pan. Heat the lard or oil in a wide pan to a depth of 1 cm, and fry the cutlets over medium high heat for 2 to 3 minutes on each side, shaking the pan to wash the fat over the tops.\n\nThe crust should be pale gold, loose and puffed. Drain on kitchen paper, serve with a lemon wedge and a mound of potato salad dressed with vinegar, onion and a spoonful of mayonnaise. Eat at once while the crust is crisp, and pour a little more lard over the cutlet if you like.',
    ing: [
      '600 g pork loin cutlets',
      '1 tsp salt',
      '50 g plain flour',
      '2 eggs, beaten',
      '120 g fine breadcrumbs',
      '70 ml lard or oil absorbed, from 200 ml for frying',
      '600 g potato salad, to serve',
      '1 lemon, in wedges'
    ],
    st: [
      'Beat the cutlets between cling film to 5 mm. Season with the salt.',
      'Dust with the flour, dip in the egg and press lightly into the crumbs.',
      'Heat the lard in a wide pan over medium high heat. Fry the cutlets for 2 to 3 minutes on each side, shaking the pan.',
      'Drain on kitchen paper and serve with the potato salad and lemon.'
    ],
    tips: [
      'Beat the cutlets evenly thin.',
      'Do not pack the crumbs too tightly.',
      'Shake the pan so the crust puffs.'
    ],
    pair: ['Potato salad', 'Lemon wedges', 'Czech lager'],
    store: 'Best fresh.',
    nut: [692, 43, 58, 32, 5, 4, 920]
  },

  'rajska-omacka': {
    d: 'A sweet Czech tomato sauce with beef and bread dumplings, simmered for an hour, a classic school dinner.',
    meta: 'Rajská omáčka, sweet Czech tomato sauce with boiled beef and dumplings, cooked for 1 hour. Four servings, ready in 1 hour 20 minutes.',
    kw: ['rajska omacka', 'czech tomato sauce', 'czech beef in tomato sauce with dumplings', 'rajska omacka recipe', 'sweet tomato sauce czech'],
    why: 'The sauce here is sweet, and anyone raised in Czechia would say so. Rajská omáčka, tomato sauce, is one of the traditional school dinners of the country, a smooth, pinkish sauce that is poured over slices of boiled beef and bread dumplings, and the surprise for visitors is that it contains sugar.\n\nSimmer a piece of beef brisket in water with a bay leaf for 1 hour 30 minutes, until tender, and keep the broth. For the sauce, cook flour in butter until pale, stir in tomato purée and sugar, then whisk in the broth a ladle at a time. **Cook the roux for 3 minutes before adding the broth**, so it loses its raw taste, and whisk well to avoid lumps. Simmer for 20 minutes, until it coats a spoon.\n\nSeason with salt, a splash of vinegar and a pinch of sugar to balance it, and add a little cream for a smooth finish. Slice the beef and lay it with the dumplings in a deep plate, ladle the sauce over and serve. The sauce is also good with boiled eggs or pasta. It keeps for 3 days.',
    ing: [
      '800 g beef brisket',
      '1 bay leaf',
      '1.5 litres water',
      '50 g butter',
      '50 g plain flour',
      '3 tbsp tomato purée',
      '2 tbsp caster sugar',
      '1 tsp white wine vinegar',
      '100 ml double cream',
      '1 tsp salt',
      '400 g bread dumplings, sliced'
    ],
    st: [
      'Simmer the beef with the bay in the water for 1 hour 30 minutes. Lift out and keep the broth.',
      'Melt the butter, stir in the flour for 3 minutes, then the purée and sugar.',
      'Whisk in 700 ml of the broth a ladle at a time. Simmer for 20 minutes.',
      'Stir in the vinegar, cream and salt.',
      'Slice the beef and serve with the dumplings and sauce.'
    ],
    tips: [
      'Cook the roux before adding the broth.',
      'Balance the sweetness with vinegar.',
      'Slice the beef against the grain.'
    ],
    pair: ['Bread dumplings', 'Boiled eggs', 'Pasta'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [896, 50, 66, 48, 3, 13, 1230]
  },

  'cesnecka-polevka': {
    d: 'A Czech garlic soup with potato, marjoram and caraway, served over cheese croutons, ready in 45 minutes.',
    meta: 'Česnečka, Czech garlic soup with potato, marjoram and cheese croutons, cooked for 35 minutes. Four servings, ready in 45 minutes.',
    kw: ['cesnecka polevka', 'czech garlic soup', 'cesnecka recipe', 'garlic soup with potatoes and croutons', 'czech hangover soup'],
    why: 'Garlic, potatoes, stock, marjoram: four things, and a soup that Czechs eat for a cold, for a hangover and for a cheap supper. Česnečka is the Czech garlic soup, a pale, thick broth that is both strong and soothing, and it is served over cubes of bread fried until crisp and topped with cheese.\n\nPeel a whole head of garlic, crush the cloves and add them to boiling stock, with diced potato, marjoram and caraway. Simmer for 20 minutes, until the potato is soft. **Add the garlic late, or divide it in two**, adding half at the start and half 5 minutes before the end, so that the soup has both mellow and sharp notes of garlic. Mash a few potatoes to thicken the broth.\n\nFry cubes of stale bread in butter until golden. Beat an egg and stir it into the simmering soup so that it forms ribbons. Ladle the soup over the croutons in bowls and top with grated cheese, such as Edam, which melts in the heat. Season with salt, pepper and a pinch of paprika. It is a strong soup, so serve small portions.',
    ing: [
      '1.2 litres chicken or vegetable stock',
      '500 g potatoes, diced',
      '1 head garlic, 60 g, peeled and crushed',
      '1 tsp dried marjoram',
      '1 tsp caraway seeds',
      '1 egg',
      '4 slices stale bread, in cubes, 120 g',
      '30 g butter',
      '100 g grated Edam',
      '1/2 tsp salt'
    ],
    st: [
      'Bring the stock to the boil with the potatoes, half the garlic, marjoram and caraway. Simmer for 20 minutes.',
      'Mash a few potatoes against the pot. Add the rest of the garlic and simmer for 5 minutes.',
      'Fry the bread cubes in the butter for 5 minutes until golden.',
      'Beat the egg and stir it into the simmering soup in a thin stream. Season with the salt.',
      'Ladle over the croutons and top with the cheese.'
    ],
    tips: [
      'Add the garlic in two stages.',
      'Mash some potato to thicken.',
      'Serve with plenty of cheese.'
    ],
    pair: ['Rye bread', 'Czech lager', 'Pickled peppers'],
    store: 'Keeps for 3 days in the fridge. Make the croutons fresh.',
    nut: [364, 16, 39, 16, 4, 3, 1660]
  },

  'kolace': {
    d: 'Soft Czech yeast pastries topped with sweet poppy seed, curd cheese and plum jam fillings, risen for 90 minutes and baked for 20 minutes.',
    meta: 'Koláče, soft Czech yeast pastries with poppy seed, curd cheese and plum jam, baked for 20 minutes. Twenty servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['kolace', 'czech kolache', 'koláče with poppy seed and plum', 'czech sweet yeast pastries', 'kolache recipe'],
    why: 'The name koláče means wheels, and each pastry is a round of soft dough with a hollow in the middle, filled with a spoonful of poppy seed, sweet curd cheese or plum jam. They are among the best known of Czech sweets, taken to the American Midwest by immigrants, where they are still baked.\n\nThe dough is enriched with eggs, butter and milk, and flavoured with vanilla and lemon zest. Knead for 10 minutes until smooth and elastic, and let it rise for 90 minutes. Divide into 20 balls and flatten each, leaving a thick rim. **Press a deep dent into each centre with the back of a spoon**, so the filling stays in. Let them rise again for 20 minutes.\n\nSpoon in the fillings: ground poppy seed cooked with milk and sugar, curd cheese mixed with egg yolk and sugar, or thick plum jam. Brush the rims with egg and bake at 190C for 20 minutes, until golden. Dust with icing sugar while still warm, and top with crumbly streusel if you like. They are best on the day, with coffee.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '70 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '2 eggs',
      '70 g butter, softened',
      '1 lemon, zest',
      '1 tsp vanilla extract',
      '150 g plum jam',
      '150 g curd cheese',
      '30 g caster sugar',
      '1 egg yolk',
      '150 g ground poppy seed filling',
      '1 egg, for glazing',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, 70 g sugar, salt, milk, 2 eggs, butter, zest and vanilla and knead for 10 minutes. Leave to rise for 90 minutes.',
      'Divide into 20 balls and flatten each, leaving a thick rim. Press a dent into each centre. Leave on lined trays for 20 minutes.',
      'Heat the oven to 190C. Mix the curd cheese with 30 g sugar and the yolk.',
      'Fill 7 with plum jam, 7 with curd cheese and 6 with poppy seed. Brush the rims with the beaten egg.',
      'Bake for 20 minutes until golden. Dust with the icing sugar.'
    ],
    tips: [
      'Press a deep dent for the filling.',
      'Do not overfill.',
      'Dust with sugar while still warm.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Best the day they are made. Freeze for 1 month.',
    rest: [110, 'Rising'],
    nut: [197, 6, 23, 9, 2, 9, 260]
  }
};
