'use strict';

/**
 * Volume fifty-six — no-bake desserts, ice creams, mug cakes and special-diet
 * sweets, second part.
 *
 * Twenty-five dishes: toffee popcorn, bear claws, brown butter Rice Krispie
 * treats, chocolate covered pretzels and bananas, cinnamon twists, a fruit
 * pizza, two French toasts, peanut butter and carrot cake overnight oats, a
 * sheet pan apple crisp, four slow cooker puddings (bread pudding,
 * cheesecake, peach cobbler, sticky toffee), apple pie filling, cake balls,
 * cookies and cream and rocky road ice cream, an ice cream pie, frozen hot
 * chocolate and three mug cakes. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'toffee-popcorn': {
    d: 'Popped corn coated in a butter and brown sugar toffee and baked slowly at 120C for 45 minutes until crisp and glossy.',
    meta: 'Toffee popcorn coated in butter and brown sugar and baked low for 45 minutes. Ten servings, ready in 1 hour.',
    kw: ['toffee popcorn', 'caramel toffee popcorn', 'baked toffee popcorn', 'homemade toffee popcorn', 'crunchy toffee popcorn'],
    why: 'What is the difference between caramel corn and toffee popcorn? Mostly the oven. A toffee popcorn is baked low and slow after it is coated, which dries the sugar coating into a thin, brittle glass that shatters when you bite it. A soft caramel corn is chewy. Both are good, but this one is for people who want crunch.\n\nStart with popped corn, about 5 litres of it, which is roughly 150 g of kernels. Remove every unpopped kernel, which can break a tooth. Spread the popcorn in a large roasting tin and keep it warm in the oven while you make the toffee. A warm tin helps the coating spread and cling.\n\n**Boil the toffee for exactly 4 minutes.** Butter, brown sugar, golden syrup and salt are brought to a boil and left for 4 minutes without stirring. Less, and the coating stays sticky. More, and it turns bitter and hard. Off the heat, whisk in the bicarbonate of soda, which makes the mixture foam and gives the toffee a lighter, airier texture.\n\nPour the toffee over the popcorn in a thin stream and fold with two spatulas, then bake at 120C for 45 minutes, stirring every 15 minutes to coat evenly. Cool the popcorn on baking paper, breaking apart the clusters, and store in an airtight tin.',
    ing: [
      '150 g popping corn, popped, about 5 litres',
      '225 g butter',
      '300 g light brown sugar',
      '4 tbsp golden syrup',
      '1 tsp salt',
      '1/2 tsp bicarbonate of soda',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 120C. Spread the popped corn in a large roasting tin, removing any unpopped kernels.',
      'Boil the butter, sugar, golden syrup and salt in a heavy pan for 4 minutes without stirring.',
      'Off the heat, whisk in the bicarbonate of soda and vanilla. The mixture will foam.',
      'Pour over the popcorn and fold with 2 spatulas until coated.',
      'Bake for 45 minutes, stirring every 15 minutes. Cool on baking paper and break into clusters.'
    ],
    tips: [
      'Remove unpopped kernels.',
      'Boil the toffee for exactly 4 minutes.',
      'Stir the popcorn every 15 minutes while baking.'
    ],
    pair: ['Hot chocolate', 'Cold milk', 'Coffee', 'Movie night'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [314, 1, 37, 18, 0, 34, 320]
  },

  'bear-claws': {
    d: 'Puff pastry pockets filled with almond cream, slit into claws, baked for 25 minutes and glazed with icing and flaked almonds.',
    meta: 'Bear claws with almond filling in puff pastry, baked for 25 minutes. Eight pastries, ready in 1 hour 5 minutes.',
    kw: ['bear claws', 'almond bear claws', 'bear claw pastry', 'puff pastry almond pastries', 'bear claw recipe'],
    why: 'The shape is the point. A bear claw is a rectangle of pastry folded over a filling, then cut along the folded edge into four or five short slits that splay apart in the oven like the toes of a paw. The original was a yeasted Danish pastry from American bakeries, but this version, made from puff pastry, is much quicker and gives a flaky, shattering texture.\n\nThe filling is almond cream, or frangipane: ground almonds, butter, sugar and an egg, beaten into a thick paste with a drop of almond extract. Spread a line of it down the centre of each pastry rectangle, leaving a border of 1 cm all around for sealing. Too much filling will burst out at the cuts and burn on the tray, so keep it neat.\n\n**Cut the slits with a sharp knife, not scissors.** Fold the pastry over, press the edges with a fork, and make four cuts through the sealed edge, at right angles to it, about 2 cm deep. Bend each pastry into a gentle curve so the cuts fan open. Chill the shaped pastries for 15 minutes before baking, so the butter in the pastry stays cold.\n\nBrush with beaten egg and scatter with flaked almonds. Bake at 200C until puffed and deep golden. Drizzle with a thin icing made from icing sugar, milk and a drop of almond extract while still slightly warm.',
    ing: [
      '375 g ready-rolled puff pastry',
      '100 g ground almonds',
      '60 g butter, softened',
      '60 g caster sugar',
      '1 egg',
      '1/2 tsp almond extract',
      '1 egg, beaten, for glazing',
      '30 g flaked almonds',
      '100 g icing sugar',
      '2 tbsp milk'
    ],
    st: [
      'Beat the ground almonds, butter, sugar, the egg and almond extract into a thick paste.',
      'Heat the oven to 200C. Cut the pastry into 8 rectangles. Spread a line of filling down the middle of each, leaving a 1 cm border.',
      'Brush the border with egg, fold over and press the edges. Make 4 cuts along the sealed edge and curve each pastry slightly. Chill for 15 minutes.',
      'Brush with egg, scatter with flaked almonds and bake for 25 minutes until deep golden.',
      'Whisk the icing sugar and milk and drizzle over the warm pastries.'
    ],
    tips: [
      'Do not overfill the pastry.',
      'Chill before baking.',
      'Cut and curve the pastry to fan the claws.'
    ],
    pair: ['Coffee', 'Hot tea', 'Hot chocolate', 'Fresh fruit'],
    store: 'Best the day they are made. Keeps for 2 days in a tin.',
    nut: [439, 8, 41, 27, 3, 22, 300]
  },

  'brown-butter-rice-krispie-treats': {
    d: 'Marshmallow cereal bars made with nutty browned butter and a pinch of sea salt, set in a tin in 30 minutes.',
    meta: 'Brown butter Rice Krispie treats with a nutty flavour and sea salt, made in 50 minutes. 16 bars, ready in 50 minutes.',
    kw: ['brown butter rice krispie treats', 'browned butter marshmallow treats', 'salted rice krispie treats', 'chewy rice krispie bars', 'brown butter rice cereal bars'],
    why: 'Browning the butter is the one move that makes these different from the childhood original. Butter that has been cooked past melting until the milk solids turn golden and smell of hazelnuts adds a deep, toasty, caramel flavour to the bars, without altering anything else about the recipe. It is a five-minute detour with a large payoff.\n\nMelt the butter over medium heat, stirring, as it foams and spits and then settles. Watch for the moment the white milk solids at the bottom turn the colour of a hazelnut and the smell changes from creamy to nutty. Pour it into a bowl at once, because it goes from brown to burnt in seconds, even off the heat. The marshmallows go into the warm butter and melt in minutes.\n\n**Use fresh marshmallows.** Old ones, which have dried and hardened, make rigid, tough treats. The bars should be soft and chewy. Fold in the cereal gently with a greased spatula, press lightly into the tin with greased fingers, and do not compact the mixture, or the bars will be hard.\n\nA generous pinch of flaky sea salt over the top makes the sweetness taste more complex. Cool for 30 minutes before cutting into squares with an oiled knife.',
    ing: [
      '80 g butter',
      '300 g mini marshmallows',
      '1 tsp vanilla extract',
      '1/2 tsp salt',
      '160 g crispy rice cereal',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Grease a 20 cm square tin and line with baking paper.',
      'Melt the butter in a large pan over medium heat for 5 minutes, stirring, until golden and smelling of hazelnuts. Pour into a bowl straight away.',
      'Return the pan to low heat, add the butter back with the marshmallows and the 1/2 tsp salt and stir until melted and smooth. Stir in the vanilla.',
      'Fold in the cereal with a greased spatula until coated.',
      'Press lightly into the tin, sprinkle with the flaky salt and cool for 30 minutes before cutting into 16.'
    ],
    tips: [
      'Take the butter off the heat as soon as it smells nutty.',
      'Use fresh marshmallows.',
      'Press lightly into the tin.'
    ],
    pair: ['Cold milk', 'Coffee', 'Hot chocolate', 'Fresh fruit'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [132, 1, 23, 4, 0, 11, 130]
  },

  'chocolate-covered-pretzels': {
    d: 'Salty pretzel twists dipped in melted milk and dark chocolate, decorated with sprinkles and set on baking paper in 30 minutes.',
    meta: 'Chocolate covered pretzels with sprinkles, dipped and set in 30 minutes. 24 pretzels, ready in 50 minutes.',
    kw: ['chocolate covered pretzels', 'chocolate dipped pretzels', 'sweet and salty pretzels', 'pretzels dipped in chocolate', 'pretzel chocolate treats'],
    why: 'Sweet and salty is a pairing that people find hard to resist, and the combination of a crunchy pretzel with a snap of chocolate is among the simplest ways to get it. It takes two ingredients and almost no skill, which makes it a good project for children and a standard in holiday gift boxes.\n\nThe only technical part is the chocolate. Chop it and melt it gently, either in a bowl over barely simmering water or in the microwave in 20 second bursts, stirring in between. Overheated chocolate seizes into a stiff, grainy paste, and a single drop of water can do the same, so keep the bowl and utensils bone dry. Melt it until about two thirds smooth and then stir off the heat.\n\n**Use a mixture of dark and milk chocolate.** All dark is bitter against the salt of the pretzel, and all milk can taste cloying. A 50-50 blend gives balance. Dip about two thirds of each pretzel, tap off the excess on the side of the bowl, and lay on a tray of baking paper.\n\nScatter with sprinkles, crushed nuts or flaked salt before the chocolate sets, since it hardens within minutes. A stay in the fridge for 15 minutes speeds it up. Pack them in layers with paper between.',
    ing: [
      '200 g mini pretzel twists, about 24',
      '150 g milk chocolate, chopped',
      '150 g dark chocolate, chopped',
      '2 tbsp rainbow sprinkles',
      '1/4 tsp flaky sea salt'
    ],
    st: [
      'Line 2 trays with baking paper.',
      'Melt the milk and dark chocolate together in a dry bowl over barely simmering water, stirring until smooth, or in the microwave in 20 second bursts.',
      'Dip each pretzel two thirds of the way into the chocolate, using a fork, and tap off the excess.',
      'Lay on the trays and scatter at once with the sprinkles and flaky salt.',
      'Chill for 15 minutes until set, then pack in layers with paper between.'
    ],
    tips: [
      'Keep the bowl and utensils bone dry.',
      'Blend milk and dark chocolate.',
      'Decorate before the chocolate sets.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Cold milk', 'Gift boxes'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [79, 1, 12, 3, 1, 5, 170]
  },

  'chocolate-dipped-bananas': {
    d: 'Frozen banana halves on sticks dipped in dark chocolate and rolled in crushed nuts, frozen for 2 hours.',
    meta: 'Chocolate dipped bananas with nuts, frozen for 2 hours. Six servings, ready in 2 hours 20 minutes.',
    kw: ['chocolate dipped bananas', 'frozen chocolate bananas', 'chocolate covered frozen bananas', 'frozen banana pops', 'chocolate banana ice lollies'],
    why: 'A frozen banana tastes oddly like ice cream, with a creamy, dense texture and a natural sweetness, and the chocolate shell turns it into something that resembles a dessert from a fairground stall. The method requires no machine and only a freezer, and it is among the best things to do with a bunch of bananas that are about to go off.\n\nChoose bananas that are ripe but firm, yellow with a few brown flecks. Soft, speckled ones are too mushy to hold a stick. Peel, halve crosswise, and push a lolly stick or wooden skewer into the cut end, about halfway up. Lay them on a tray lined with baking paper and freeze for at least 1 hour, until hard. A cold banana grips the chocolate.\n\n**Add a spoonful of coconut oil to the chocolate.** Melted with dark chocolate, coconut oil makes a shell that sets crisp in seconds on contact with the frozen fruit, and cracks cleanly when bitten, without sticking to the teeth. About 1 tablespoon to 200 g of chocolate does the job.\n\nDip each banana quickly, turning to coat, and roll it in the chopped nuts or sprinkles before the shell sets, which takes under a minute. Return to the freezer for at least 1 hour. They keep for a month, though the banana darkens slightly.',
    ing: [
      '3 bananas, ripe but firm',
      '200 g dark chocolate, chopped',
      '1 tbsp coconut oil',
      '60 g roasted peanuts, finely chopped',
    ],
    st: [
      'Peel the bananas and cut in half crosswise. Push a stick into the cut end of each.',
      'Lay on a lined tray and freeze for 1 hour until hard.',
      'Melt the chocolate and coconut oil together, stirring until smooth.',
      'Dip each banana in the chocolate, turning to coat, and roll at once in the peanuts.',
      'Return to the tray and freeze for 1 hour more until the shell is hard.'
    ],
    tips: [
      'Use ripe but firm bananas.',
      'Freeze the bananas hard before dipping.',
      'Add coconut oil for a crisp shell.'
    ],
    pair: ['Cold milk', 'Fresh berries', 'Summer picnic', 'Iced tea'],
    store: 'Keeps in the freezer for 1 month in an airtight container.',
    rest: [120, 'Freezing'],
    nut: [331, 5, 35, 19, 5, 24, 10]
  },

  'cinnamon-twists': {
    d: 'Strips of puff pastry brushed with butter, coated in cinnamon sugar, twisted and baked for 15 minutes until crisp and golden.',
    meta: 'Cinnamon twists from puff pastry and cinnamon sugar, baked for 15 minutes. 12 twists, ready in 30 minutes.',
    kw: ['cinnamon twists', 'puff pastry cinnamon twists', 'cinnamon sugar pastry twists', 'cinnamon sugar twists', 'easy cinnamon twists'],
    why: 'Puff pastry does the hard work in this recipe: a bought sheet, a brush of butter and a shower of cinnamon sugar produce a crisp, flaky, caramelised pastry in under half an hour. The twists look as if they came from a bakery, which makes them a good thing to serve with coffee when guests arrive unexpectedly.\n\nThe cinnamon sugar is plain: caster sugar and ground cinnamon in a ratio of about 4 to 1. A bit more sugar than you think is needed, because it caramelises on the pastry as it bakes and forms the crisp crust. A pinch of salt cuts the sweetness and brings out the cinnamon. Mix it in a bowl, and have it close to hand.\n\n**Fold, cut, twist.** Brush the pastry with melted butter, scatter half of the sugar over it, then fold it in half like a book and press down. Cut into 12 strips, 2 cm wide. Hold each strip at both ends and twist in opposite directions until it forms a spiral. Lay on a lined tray and press the ends down so that the twist does not unravel.\n\nChill the twists for 10 minutes if the kitchen is warm, then bake at 200C until puffed and deeply golden. Take them off the tray while they are still hot, otherwise the caramelised sugar sets and sticks them down. Serve warm or cool.',
    ing: [
      '375 g ready-rolled puff pastry',
      '30 g butter, melted',
      '80 g caster sugar',
      '2 tsp ground cinnamon',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 200C and line 2 trays. Mix the sugar, cinnamon and salt.',
      'Unroll the pastry and brush with the melted butter. Scatter over two thirds of the cinnamon sugar.',
      'Fold in half like a book and press down. Cut into 12 strips, 2 cm wide.',
      'Twist each strip into a spiral, press the ends down on the trays and sprinkle with the rest of the sugar.',
      'Bake for 15 minutes until puffed and deep golden. Move to a rack while hot.'
    ],
    tips: [
      'Use plenty of cinnamon sugar.',
      'Press the ends down so they do not unravel.',
      'Lift them off the tray while hot.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Hot tea', 'Vanilla ice cream'],
    store: 'Best the day they are made. Keeps for 2 days in a tin.',
    nut: [170, 2, 18, 10, 1, 8, 200]
  },

  'fruit-pizza': {
    untimed: ['cooling completely'],
    d: 'A giant sugar cookie base spread with sweet cream cheese and topped with sliced strawberries, kiwi and blueberries.',
    meta: 'Fruit pizza on a sugar cookie crust with cream cheese frosting, baked for 12 minutes. 12 slices, ready in 1 hour.',
    kw: ['fruit pizza', 'sugar cookie fruit pizza', 'fruit pizza with cream cheese frosting', 'dessert fruit pizza', 'fruit pizza recipe'],
    why: 'It looks like a pizza and eats like a very good fruit tart, which is why fruit pizza has been a summer party fixture across North America for decades. The base is a giant sugar cookie, baked on a pizza tray, and topped with sweet cream cheese frosting and a pattern of fresh fruit.\n\nThe cookie base is soft rather than snappy. Press the dough into a 30 cm circle on a lined tray, about 8 mm thick, and bake it until just golden at the edges. It will look slightly underdone in the middle, but it firms up as it cools. A cookie baked until hard breaks when you slice it, while a tender one cuts like a cake.\n\n**Cool the cookie completely before spreading.** A warm base melts the frosting into a puddle. The frosting itself is made from cream cheese, icing sugar and vanilla, beaten until smooth, with a spoon of lemon juice to cut the sweetness. Spread it right to the edge with an offset spatula.\n\nArrange the fruit in concentric circles, starting from the outside with sliced strawberries, then kiwi, then blueberries, and finishing with a single berry in the centre. A thin glaze of warmed apricot jam brushed over the fruit keeps it from drying out and gives it a shine. Chill for 30 minutes and cut into wedges.',
    ing: [
      '115 g butter, softened',
      '120 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '200 g plain flour',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '200 g cream cheese, softened',
      '80 g icing sugar',
      '1 tsp lemon juice',
      '200 g strawberries, sliced',
      '150 g kiwi fruit, peeled and sliced',
      '100 g blueberries',
      '3 tbsp apricot jam, warmed'
    ],
    st: [
      'Heat the oven to 180C. Beat the butter and caster sugar for 2 minutes. Beat in the egg and vanilla, then stir in the flour, baking powder and salt.',
      'Press the dough into a 30 cm circle on a lined tray. Bake for 12 minutes until the edges are golden. Cool completely.',
      'Beat the cream cheese, icing sugar and lemon juice until smooth. Spread over the cooled base.',
      'Arrange the strawberries, kiwi and blueberries in circles over the frosting.',
      'Brush with the warmed jam, chill for 30 minutes and cut into 12 wedges.'
    ],
    tips: [
      'Cool the cookie fully before frosting.',
      'Do not overbake the base.',
      'Glaze the fruit with warmed jam.'
    ],
    pair: ['Iced tea', 'Lemonade', 'Sparkling water', 'Summer picnic'],
    store: 'Best the day it is made. Keeps in the fridge for 1 day.',
    nut: [290, 4, 37, 14, 1, 22, 150]
  },

  'nutella-french-toast': {
    d: 'Brioche slices sandwiched with Nutella, dipped in egg custard and pan fried for 3 minutes a side until golden.',
    meta: 'Nutella French toast stuffed with chocolate hazelnut spread, pan fried for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['nutella french toast', 'nutella stuffed french toast', 'chocolate hazelnut french toast', 'brioche french toast with nutella', 'nutella sandwich french toast'],
    why: 'Salty bread, sweet custard and chocolate: a sandwich that turns French toast into dessert. Nutella is the traditional filling, being a thick spread of cocoa and hazelnuts that melts into a warm, gooey layer in the pan. It makes a brunch dish that people ask for again.\n\nThe bread matters. Thick-cut brioche, about 2 cm, soaks up custard without falling apart and has enough sweetness to match the spread. Day-old bread is better than fresh, since its drier crumb absorbs more liquid. If you only have fresh bread, leave the slices out for an hour. Spread Nutella thickly on one slice, top with another and press the edges together.\n\n**Dip each sandwich for no more than 10 seconds per side.** A longer soak makes the bread soggy and it collapses in the pan. The custard is eggs, milk, a spoon of sugar, vanilla and a pinch of cinnamon, whisked until no streaks of white remain. Let the excess drip off before the bread goes into the pan.\n\nFry over medium heat in butter, not high, so that the outside caramelises without burning before the Nutella melts. About 3 minutes a side gives a deep golden crust. Cut diagonally, dust with icing sugar and serve with sliced strawberries or bananas.',
    ing: [
      '8 slices brioche, 2 cm thick, about 320 g',
      '120 g Nutella',
      '3 eggs',
      '120 ml milk',
      '1 tbsp caster sugar',
      '1 tsp vanilla extract',
      '1/2 tsp ground cinnamon',
      '30 g butter',
      '1 tbsp icing sugar',
      '200 g strawberries, sliced'
    ],
    st: [
      'Spread 4 slices of the brioche thickly with the Nutella and top with the other slices, pressing the edges together.',
      'Whisk the eggs, milk, caster sugar, vanilla and cinnamon in a shallow dish.',
      'Melt half the butter in a large frying pan over medium heat.',
      'Dip 2 sandwiches in the custard for 10 seconds per side. Fry for 3 minutes per side until golden. Repeat with the remaining butter and sandwiches.',
      'Cut diagonally, dust with the icing sugar and serve with the strawberries.'
    ],
    tips: [
      'Use thick-cut, slightly stale brioche.',
      'Do not soak for more than 10 seconds a side.',
      'Fry over medium heat.'
    ],
    pair: ['Fresh strawberries', 'Sliced banana', 'Coffee', 'Maple syrup'],
    store: 'Best eaten at once.',
    nut: [606, 14, 70, 30, 4, 35, 390]
  },

  'overnight-french-toast': {
    d: 'A casserole of bread cubes soaked overnight in cinnamon custard, baked for 45 minutes and served with maple syrup.',
    meta: 'Overnight French toast casserole with cinnamon custard, soaked overnight and baked for 45 minutes. Eight servings.',
    kw: ['overnight french toast', 'baked french toast casserole', 'make ahead french toast bake', 'overnight cinnamon french toast', 'french toast casserole recipe'],
    why: 'Assemble it the night before, and breakfast makes itself. An overnight French toast casserole turns a loaf of bread, a dozen eggs and a pint of milk into a golden, puffed, custardy bake that feeds eight, and the work is done in the evening, when you have time. In the morning it only needs to go in the oven.\n\nThe bread should be a sturdy one, such as brioche, challah or a day-old French loaf, cut into 3 cm cubes and left to dry out for an hour on the counter. Stale bread soaks up the custard evenly and keeps its structure, while fresh bread collapses into a paste. Pack the cubes loosely into a buttered dish.\n\n**Pour the custard slowly, in stages, and press the bread down.** Add a third, wait for it to soak in, press, then add more. This ensures the bread absorbs the liquid all the way through, rather than leaving a dry pocket in the middle. Cover and refrigerate for at least 8 hours.\n\nThe topping of brown sugar, cinnamon and cold butter, rubbed into crumbs, goes on in the morning. Bake uncovered at 180C until puffed and golden, with a set custard in the middle. Stand for 10 minutes before cutting, and serve with warm maple syrup and fresh fruit.',
    ing: [
      '500 g day-old brioche, cut into 3 cm cubes',
      '6 eggs',
      '500 ml milk',
      '120 ml double cream',
      '100 g light brown sugar',
      '2 tsp vanilla extract',
      '1 tsp ground cinnamon',
      '1/4 tsp salt',
      '60 g butter, cold, cubed',
      '80 g light brown sugar, for the topping',
      '1 tsp ground cinnamon, for the topping',
      '120 ml maple syrup, warmed'
    ],
    st: [
      'Butter a 23 by 33 cm baking dish and fill it loosely with the bread cubes.',
      'Whisk the eggs, milk, cream, 100 g sugar, vanilla, 1 tsp cinnamon and the salt. Pour over the bread in 3 stages, pressing down after each.',
      'Cover and refrigerate overnight, for at least 8 hours.',
      'Heat the oven to 180C. Rub the cold butter with the 80 g sugar and 1 tsp cinnamon until crumbly and scatter over the top.',
      'Bake uncovered for 45 minutes until puffed and golden. Stand for 10 minutes and serve with the maple syrup.'
    ],
    tips: [
      'Use stale bread.',
      'Press the bread down after each addition of custard.',
      'Rest for 10 minutes before cutting.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Bacon', 'Coffee'],
    store: 'Keeps in the fridge for 3 days after baking.',
    rest: [480, 'Soaking overnight'],
    nut: [557, 12, 71, 25, 1, 44, 410]
  },

  'peanut-butter-overnight-oats': {
    d: 'Rolled oats, milk, yogurt, peanut butter and chia seeds stirred together and chilled overnight into a creamy breakfast.',
    meta: 'Peanut butter overnight oats with yogurt and chia seeds, chilled overnight. Two servings, ready in 8 hours 5 minutes.',
    kw: ['peanut butter overnight oats', 'overnight oats with peanut butter', 'peanut butter banana overnight oats', 'creamy overnight oats', 'no cook peanut butter oats'],
    why: 'Prepare it before bed, and breakfast is ready when you wake. Overnight oats are not cooked: the oats soften in cold milk and yogurt over eight hours in the fridge, absorbing the liquid and swelling into a creamy, spoonable porridge that is eaten cold, or warmed briefly if you prefer.\n\nThe ratio is what makes them work. Equal parts rolled oats and liquid, by volume, give a thick but not stodgy texture. Half milk and half yogurt makes it creamy, and a spoonful of chia seeds absorbs extra liquid and thickens the mixture further. Use old-fashioned rolled oats, not instant ones, which turn to paste, and not steel-cut, which stay hard.\n\n**Whisk the peanut butter into the milk first.** A cold, stiff spoonful of nut butter will not blend into the oats on its own and will sit in lumps. Stir it into the milk with a fork until smooth, then add the yogurt, then the oats. A drizzle of honey or maple syrup sweetens it, and a pinch of salt brings out the nuttiness.\n\nCover and chill. In the morning, stir well, loosen with a splash of milk if needed, and top with sliced banana, a few chopped peanuts and a swirl of jam. It keeps for up to 3 days.',
    ing: [
      '80 g rolled oats',
      '120 ml milk',
      '120 g Greek yogurt',
      '2 tbsp smooth peanut butter',
      '1 tbsp chia seeds',
      '1 tbsp honey',
      '1 pinch salt',
      '1 banana, sliced',
      '2 tbsp roasted peanuts, chopped'
    ],
    st: [
      'Whisk the peanut butter into the milk until smooth.',
      'Stir in the yogurt, honey and salt, then the oats and chia seeds.',
      'Divide between 2 jars, cover and chill overnight for at least 8 hours.',
      'In the morning, stir well and loosen with a splash of milk if needed.',
      'Top with the banana and peanuts.'
    ],
    tips: [
      'Use old-fashioned rolled oats.',
      'Blend the peanut butter into the milk first.',
      'Stir and loosen in the morning.'
    ],
    pair: ['Fresh berries', 'Coffee', 'Orange juice', 'Toast'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [480, 'Chilling overnight'],
    nut: [508, 21, 61, 20, 10, 23, 130]
  },

  'sheet-pan-apple-crisp': {
    d: 'Sliced apples under a buttery oat topping, spread on a large tray and baked for 35 minutes for a crisp crust on every portion.',
    meta: 'Sheet pan apple crisp with a large surface of crunchy oat topping, baked for 35 minutes. 12 servings, ready in 55 minutes.',
    kw: ['sheet pan apple crisp', 'apple crisp for a crowd', 'tray bake apple crisp', 'large batch apple crisp', 'apple crisp with oats'],
    why: 'The surface is the point. A deep dish apple crisp has a layer of soft fruit under a few centimetres of topping, but a sheet pan version spreads the apples thinly and covers them with a wide area of crunch. Every portion gets more topping, the fruit cooks faster and evenly, and the whole thing is ready in 35 minutes.\n\nUse firm, tart apples, such as Granny Smith, Bramley or Braeburn, peeled and sliced about 5 mm thick. Thinner slices turn to purée, thicker ones stay hard. Toss them with lemon juice, sugar, cinnamon and a spoonful of cornflour, and spread them in a single layer on a large rimmed tray. The cornflour is important, since without it the juice will pool and the topping soften.\n\n**Make the topping with cold butter and press it into clumps.** Rub butter into flour, oats, brown sugar, cinnamon and salt until it forms a crumbly mixture with some larger lumps. Squeeze handfuls together to make clusters, which crisp up and bake into the golden nuggets that are the best part of the dish.\n\nBake at 190C until the apples are tender and the topping is golden and crisp. Let it rest for 10 minutes and serve warm, cut into squares, with ice cream or custard. The tray is also easy to carry to a party.',
    ing: [
      '1.2 kg apples, peeled and sliced 5 mm thick',
      '60 g caster sugar',
      '1 tbsp lemon juice',
      '1 tbsp cornflour',
      '1 tsp ground cinnamon',
      '150 g plain flour',
      '120 g rolled oats',
      '150 g light brown sugar',
      '1 tsp ground cinnamon, for the topping',
      '1/2 tsp salt',
      '170 g cold butter, cubed'
    ],
    st: [
      'Heat the oven to 190C. Toss the apples with the caster sugar, lemon juice, cornflour and 1 tsp cinnamon. Spread in a single layer on a 33 by 45 cm rimmed tray.',
      'Mix the flour, oats, brown sugar, 1 tsp cinnamon and salt. Rub in the butter until crumbly.',
      'Squeeze handfuls of the topping into clumps and scatter over the apples.',
      'Bake for 35 minutes until the apples are tender and the topping is golden.',
      'Rest for 10 minutes and cut into 12 squares.'
    ],
    tips: [
      'Slice the apples evenly at 5 mm.',
      'Squeeze the topping into clumps.',
      'Rest before cutting.'
    ],
    pair: ['Vanilla ice cream', 'Custard', 'Whipped cream', 'Cheddar'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [321, 3, 48, 13, 4, 27, 110]
  },

  'slow-cooker-bread-pudding': {
    d: 'Cubes of bread soaked in a rich cinnamon custard with raisins, slow cooked on low for 3 hours until set and served with vanilla sauce.',
    meta: 'Slow cooker bread pudding with raisins and cinnamon custard, cooked for 3 hours. Eight servings, ready in 3 hours 20 minutes.',
    kw: ['slow cooker bread pudding', 'crockpot bread pudding', 'bread and butter pudding slow cooker', 'cinnamon raisin bread pudding', 'bread pudding with vanilla sauce'],
    why: 'Bread pudding has been a thrifty dish for centuries, a way of using stale bread by soaking it in sweet custard, and the slow cooker version is its gentlest form. The low, steady, moist heat sets the custard without curdling it, and the pudding comes out soft, rich and spoonable, rather than the dry, crusty slab a hot oven can produce.\n\nUse stale bread, cut into 2 cm cubes and left to dry for an hour or so. Enriched breads such as brioche, challah or a plain white loaf are best. Fresh bread turns to mush. Toss the cubes with raisins in the cooker, and pour over the custard of eggs, milk, cream, sugar, vanilla and cinnamon. Press the bread down gently, and let it soak for 20 minutes before cooking.\n\n**Line the cooker with baking paper, or use a liner.** The custard sets against the sides and base, and is very hard to scrub off. A sheet of paper that overhangs the edges also gives you handles to lift the pudding out if you want to serve it whole.\n\nCook on low for 3 hours, with a clean tea towel under the lid to catch condensation and stop it dripping onto the pudding. It is ready when the custard is set in the centre and a knife comes out clean. Serve warm with vanilla sauce, cream or custard.',
    ing: [
      '400 g day-old brioche or white bread, cut into 2 cm cubes',
      '80 g raisins',
      '4 eggs',
      '500 ml milk',
      '200 ml double cream',
      '120 g caster sugar',
      '2 tsp vanilla extract',
      '1 1/2 tsp ground cinnamon',
      '1/4 tsp salt',
      '30 g butter, melted',
      '150 ml vanilla sauce, to serve'
    ],
    st: [
      'Line the slow cooker with baking paper. Add the bread and raisins.',
      'Whisk the eggs, milk, cream, sugar, vanilla, cinnamon and salt. Pour over the bread and press down gently. Leave for 20 minutes.',
      'Drizzle with the melted butter.',
      'Lay a clean tea towel under the lid. Cover and cook on low for 3 hours until the custard is set in the centre.',
      'Rest for 10 minutes and serve warm with the vanilla sauce.'
    ],
    tips: [
      'Use stale bread.',
      'Line the cooker with paper.',
      'Put a tea towel under the lid.'
    ],
    pair: ['Vanilla sauce', 'Custard', 'Vanilla ice cream', 'Whipped cream'],
    store: 'Keeps in the fridge for 3 days. Reheat in the microwave.',
    nut: [422, 11, 54, 18, 2, 30, 390]
  },

  'slow-cooker-cheesecake': {
    d: 'A creamy vanilla cheesecake baked in a springform tin inside the slow cooker for 90 minutes, then chilled for 6 hours.',
    meta: 'Slow cooker cheesecake with a biscuit base, cooked for 90 minutes and chilled. Ten servings, ready in 8 hours.',
    kw: ['slow cooker cheesecake', 'crockpot cheesecake', 'cheesecake in a slow cooker', 'creamy slow cooker cheesecake', 'slow cooker vanilla cheesecake'],
    why: 'Cheesecake loves gentle heat, and a slow cooker is about as gentle as heat comes. The sealed pot provides a humid environment, like a water bath in the oven, which cooks the filling evenly and prevents cracks, curdling and a rubbery texture. The result is a smooth, dense cheesecake with a perfectly creamy centre.\n\nThe tin must fit. A 15 to 18 cm springform tin is the usual size for a 6 litre cooker. Check before you start, and wrap the outside in a double layer of foil, because condensation can leak in and wet the crust. Rest the tin on a trivet or a rolled collar of foil, so the base is off the bottom of the pot. Pour a cup of hot water into the pot around it.\n\n**Do not lift the lid.** Opening it releases heat and moisture, and drops the temperature enough to cause the surface to crack. Set a timer for 90 minutes, and look at the cheesecake only when it ends. It should be set around the edge, with a wobble in the centre.\n\nTurn off the cooker and leave the cheesecake inside for 1 hour with the lid slightly ajar. This gradual cooling is the other half of the crack-free method. Then lift it out, cool to room temperature and chill for at least 6 hours. Slice with a hot knife.',
    ing: [
      '150 g digestive biscuits, crushed',
      '60 g butter, melted',
      '500 g full-fat cream cheese, at room temperature',
      '120 g caster sugar',
      '2 eggs',
      '100 g soured cream',
      '1 tsp vanilla extract',
      '1 tbsp lemon juice',
      '1 tbsp plain flour'
    ],
    st: [
      'Mix the crumbs and melted butter and press into a lined 18 cm springform tin. Wrap the outside in a double layer of foil.',
      'Beat the cream cheese and sugar until smooth. Beat in the eggs one at a time, then the soured cream, vanilla, lemon juice and flour.',
      'Pour onto the base. Set the tin on a foil collar in the slow cooker and add 250 ml hot water around it.',
      'Cover and cook on high for 90 minutes without lifting the lid.',
      'Turn off, leave inside with the lid ajar for 1 hour, then chill for at least 6 hours.'
    ],
    tips: [
      'Check the tin fits before you start.',
      'Do not open the lid while it cooks.',
      'Cool it slowly in the pot.'
    ],
    pair: ['Fresh berries', 'Fruit compote', 'Coffee', 'Whipped cream'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [420, 'Cooling and chilling'],
    nut: [376, 6, 25, 28, 0, 17, 240]
  },

  'slow-cooker-peach-cobbler': {
    d: 'Sliced peaches under a sweet biscuit topping, slow cooked on low for 3 hours until bubbling and set, with cinnamon and vanilla.',
    meta: 'Slow cooker peach cobbler with a biscuit topping and cinnamon, cooked for 3 hours. Eight servings, ready in 3 hours 15 minutes.',
    kw: ['slow cooker peach cobbler', 'crockpot peach cobbler', 'peach cobbler with biscuit topping', 'easy peach cobbler in a slow cooker', 'southern peach cobbler'],
    why: 'It looks like a cross between a pie and a cake, and it is the great Southern dessert of the peach season. A cobbler has a bubbling fruit base and a topping of sweet biscuit dough dropped on in rough patches, so that the surface looks like a cobbled road. In the slow cooker, the fruit stews gently and the topping steams to a soft, cakey consistency.\n\nTin peaches are fine, and often better than hard out-of-season fresh ones. Drain them and keep a little of the syrup. For fresh peaches, peel and slice them, toss with sugar and lemon, and leave for 15 minutes to release juice. A spoonful of cornflour thickens the juices into a syrup as they heat. Cinnamon, nutmeg and vanilla are the classic spicing.\n\n**Do not worry about the topping browning.** It will not, since a slow cooker cannot brown. It steams to a pale golden, tender, cake-like layer, much like a dumpling. A sprinkle of cinnamon sugar over the top and a few minutes under the grill at the end gives some colour and crunch if you like.\n\nPlace a clean tea towel under the lid to catch the condensation, and cook on low for 3 hours. The cobbler is ready when the topping is set and a skewer comes out clean. Let it rest for 15 minutes and serve warm with vanilla ice cream.',
    ing: [
      '800 g tinned peaches in juice, drained, syrup reserved',
      '80 g caster sugar',
      '1 tbsp cornflour',
      '1 tsp ground cinnamon',
      '1 tsp vanilla extract',
      '150 g plain flour',
      '2 tsp baking powder',
      '1/4 tsp salt',
      '50 g caster sugar, for the topping',
      '60 g cold butter, cubed',
      '120 ml milk',
      '1 tbsp cinnamon sugar'
    ],
    st: [
      'Grease the slow cooker. Toss the peaches with 80 g sugar, the cornflour, cinnamon, vanilla and 4 tbsp of the reserved syrup. Spread in the cooker.',
      'Mix the flour, baking powder, salt and 50 g sugar. Rub in the butter, then stir in the milk to a thick, sticky batter.',
      'Drop spoonfuls of the batter over the peaches and sprinkle with the cinnamon sugar.',
      'Lay a clean tea towel under the lid. Cover and cook on low for 3 hours until the topping is set.',
      'Rest for 15 minutes and serve warm.'
    ],
    tips: [
      'Put a tea towel under the lid.',
      'Do not expect the topping to brown.',
      'Rest before serving so the juices thicken.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Custard', 'Fresh peaches'],
    store: 'Keeps in the fridge for 3 days. Reheat in the microwave.',
    nut: [247, 3, 43, 7, 3, 26, 200]
  },

  'slow-cooker-sticky-toffee-pudding': {
    d: 'A steamed date sponge cooked for 2 hours 30 minutes in the slow cooker and served with a hot toffee sauce.',
    meta: 'Slow cooker sticky toffee pudding with dates and toffee sauce, cooked for 2 hours 30 minutes. Eight servings, ready in 3 hours.',
    kw: ['slow cooker sticky toffee pudding', 'crockpot sticky toffee pudding', 'sticky toffee pudding with dates', 'toffee sauce pudding', 'sticky toffee pudding recipe'],
    why: 'Sticky toffee pudding was made famous by a hotel in the Lake District, according to the usual account, and has since become one of the most-loved desserts in Britain. The cake is a dense, moist sponge made with chopped dates, rich with the flavour of molasses and caramel, and it is always served with a pool of hot toffee sauce.\n\nThe dates are the key. Soak 200 g of chopped, stoned dates in 250 ml of boiling water with a teaspoon of bicarbonate of soda for 10 minutes. The soda softens the dates into a jammy pulp and darkens the batter. The dates and their liquid are mixed into the batter, making the cake moist and fruity.\n\n**Cook the pudding in a covered basin inside the slow cooker.** A 1.5 litre heatproof bowl, covered with foil pleated in the middle to allow for rise, sits on a trivet or rolled foil ring, with hot water coming halfway up the sides. This steams the pudding gently, giving it a light, spongy texture that an oven would dry out.\n\nThe sauce is butter, dark brown sugar and double cream, simmered together for 5 minutes until glossy and thick. Pour half of it over the pudding to soak in, and serve the rest in a jug. A scoop of vanilla ice cream melting into the hot sauce is traditional.',
    ing: [
      '200 g stoned dates, chopped',
      '250 ml boiling water',
      '1 tsp bicarbonate of soda',
      '60 g butter, softened',
      '150 g dark brown sugar',
      '2 eggs',
      '175 g self-raising flour',
      '1 tsp vanilla extract',
      '100 g butter, for the sauce',
      '150 g dark brown sugar, for the sauce',
      '200 ml double cream'
    ],
    st: [
      'Soak the dates in the boiling water with the bicarbonate of soda for 10 minutes. Grease a 1.5 litre heatproof basin.',
      'Beat the 60 g butter and 150 g sugar for 3 minutes. Beat in the eggs, then fold in the flour, vanilla and the dates with their liquid.',
      'Pour into the basin and cover with pleated foil. Set on a trivet in the slow cooker and add hot water halfway up the basin.',
      'Cover and cook on high for 2 hours 30 minutes until a skewer comes out clean.',
      'Simmer the sauce butter, sugar and cream for 5 minutes. Turn out the pudding and pour over half the sauce.'
    ],
    tips: [
      'Soak the dates with bicarbonate of soda.',
      'Pleat the foil to allow for rising.',
      'Serve with a jug of extra sauce.'
    ],
    pair: ['Vanilla ice cream', 'Clotted cream', 'Custard', 'Dessert wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in the microwave.',
    nut: [546, 5, 73, 26, 3, 53, 190]
  },

  'apple-pie-filling': {
    untimed: ['cooling completely'],
    d: 'Sliced apples simmered with sugar, cinnamon and lemon juice until tender and thickened with cornflour, ready for pies or crumbles.',
    meta: 'Apple pie filling with cinnamon and lemon, simmered for 15 minutes. Fills one 23 cm pie, ready in 35 minutes.',
    kw: ['apple pie filling', 'homemade apple pie filling', 'cinnamon apple pie filling', 'apple filling for pies', 'cooked apple filling'],
    why: 'Pre-cooking the filling solves the biggest problem with apple pie, the gap. Raw apples shrink by a third as they cook, and a pie filled with raw slices bakes up with a hollow dome under the crust. Simmered first, the apples have already given up their water and softened, so the filling is the right volume and does not collapse.\n\nChoose a mix of apples. Granny Smiths keep their shape and give a clean acidity, while softer varieties such as Cox or Braeburn break down into a sweet sauce that holds the slices together. Peel, core and slice them 5 mm thick, and toss with lemon juice to keep them from browning. Thinner slices turn to mush in the pan.\n\n**Thicken at the end, with cornflour.** Simmer the apples with sugar, cinnamon and a pinch of nutmeg for about 8 minutes until the slices are just tender but still hold their shape. The juices will be thin. Stir in a slurry of cornflour and cold water, cook for another 2 minutes until glossy, and cool completely before using.\n\nThe filling keeps in the fridge for 5 days and in the freezer for 3 months, so it is worth making a double batch. Use it in a pie, a crumble, a turnover or stirred into porridge, or serve it warm over ice cream.',
    ing: [
      '1 kg apples, peeled, cored and sliced 5 mm thick',
      '2 tbsp lemon juice',
      '120 g caster sugar',
      '1 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '1/4 tsp salt',
      '60 ml water',
      '1 1/2 tbsp cornflour',
      '30 g butter'
    ],
    st: [
      'Toss the apple slices with the lemon juice.',
      'Put the apples, sugar, cinnamon, nutmeg, salt and 60 ml water in a large pan and simmer for 8 minutes until just tender.',
      'Mix the cornflour with 2 tbsp cold water, stir into the apples and cook for 2 minutes until glossy.',
      'Stir in the butter. Spread on a tray to cool completely.',
      'Use in a pie or crumble, or chill for up to 5 days.'
    ],
    tips: [
      'Use a mix of firm and soft apples.',
      'Cool the filling before using it in pastry.',
      'Make a double batch and freeze half.'
    ],
    pair: ['Vanilla ice cream', 'Porridge', 'Custard', 'Pie crust'],
    store: 'Keeps in the fridge for 5 days, or frozen for 3 months.',
    nut: [163, 0, 34, 3, 3, 28, 80]
  },

  'cake-balls': {
    untimed: ['chilling until set'],
    d: 'Crumbled sponge mixed with buttercream, rolled into balls, chilled and dipped in melted chocolate.',
    meta: 'Cake balls made from crumbled sponge and buttercream, dipped in chocolate. 24 balls, ready in 1 hour 30 minutes.',
    kw: ['cake balls', 'chocolate dipped cake balls', 'cake truffles', 'cake balls with buttercream', 'leftover cake balls'],
    why: 'The problem with cake balls is that the mix is too wet, and the balls slump or slide off the stick. The fix is restraint. A cake ball is a mixture of crumbled sponge and just enough frosting to bind it, and the most common mistake is adding too much. Start with two spoonfuls of buttercream per 300 g of crumbs, and add a little more only if the mix will not hold when squeezed.\n\nIt is also the best use of leftover or slightly dry sponge. Any plain cake works: vanilla, chocolate, lemon, red velvet. Crumble it finely with your fingers or in a food processor until there are no large chunks left, and mix with the buttercream until the texture of cookie dough is reached. Press it into a ball in your fist, and it should hold its shape without cracking.\n\n**Chill the balls until firm before dipping.** A cold ball holds up against the hot coating, and the chocolate sets quickly on contact. Roll them to about 3 cm across, set on a tray lined with baking paper and chill for 30 minutes. If they soften as you work, return them to the fridge.\n\nMelt dark or milk chocolate with a teaspoon of coconut oil, dip each ball with a fork, tap off the excess and set on baking paper. Decorate with sprinkles before the coating sets. Keep chilled until serving.',
    ing: [
      '300 g plain sponge cake, crumbled',
      '4 tbsp vanilla buttercream',
      '300 g dark chocolate, chopped',
      '1 tsp coconut oil',
      '3 tbsp sprinkles'
    ],
    st: [
      'Crumble the sponge into fine crumbs in a large bowl. Mix in the buttercream until the mixture holds together when squeezed.',
      'Roll into 24 balls, 3 cm across, and set on a tray lined with baking paper.',
      'Chill the balls for 30 minutes until firm.',
      'Melt the chocolate and coconut oil together, stirring until smooth.',
      'Dip each ball with a fork, tap off the excess, set on the paper and add sprinkles. Chill until set.'
    ],
    tips: [
      'Use as little buttercream as you can.',
      'Chill the balls before dipping.',
      'Keep the finished balls refrigerated.'
    ],
    pair: ['Coffee', 'Hot tea', 'Cold milk', 'Party table'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [140, 1, 16, 8, 1, 12, 50]
  },

  'carrot-cake-overnight-oats': {
    d: 'Rolled oats, grated carrot, yogurt and warm spices chilled overnight into a spoonable breakfast with a cream cheese swirl.',
    meta: 'Carrot cake overnight oats with grated carrot and cinnamon, chilled overnight. Two servings, ready in 8 hours 10 minutes.',
    kw: ['carrot cake overnight oats', 'carrot cake oats', 'overnight oats with carrot and cinnamon', 'no cook carrot cake oats', 'carrot cake breakfast oats'],
    why: 'All the flavours of a carrot cake, none of the baking: that is the idea of this breakfast. Grated carrot, rolled oats, cinnamon, nutmeg and a handful of raisins soften together in the fridge overnight, and in the morning the jar tastes like a spoonful of cake batter, with a swirl of cream cheese on top.\n\nGrate the carrot finely, on the small holes of a box grater, so that it blends into the oats and softens completely. Large shreds stay crunchy and fibrous. Half a large carrot per serving is enough. It adds natural sweetness and a pale orange colour, and the moisture it releases helps the oats soften.\n\n**Add the spices generously.** Cold dishes dull flavours, so overnight oats need more seasoning than a hot porridge. Use a teaspoon of cinnamon, a pinch of nutmeg and a pinch of ginger for two servings. A spoonful of maple syrup adds sweetness, and a drop of vanilla rounds it out.\n\nMix the oats with milk and yogurt, in equal parts, and add the carrot, raisins and spices. Cover and refrigerate for at least 8 hours. In the morning, stir well, loosen with a splash of milk, and top with a spoonful of cream cheese mixed with a little maple syrup, and a few chopped walnuts.',
    ing: [
      '80 g rolled oats',
      '120 ml milk',
      '120 g Greek yogurt',
      '1 carrot, finely grated, about 100 g',
      '30 g raisins',
      '1 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '1 pinch ground ginger',
      '2 tbsp maple syrup',
      '50 g cream cheese',
      '2 tbsp walnuts, chopped'
    ],
    st: [
      'Mix the oats, milk, yogurt, carrot, raisins, cinnamon, nutmeg, ginger and 1 tbsp of the maple syrup.',
      'Divide between 2 jars, cover and refrigerate overnight for at least 8 hours.',
      'Stir the cream cheese with the remaining maple syrup until smooth.',
      'In the morning, stir the oats and loosen with a splash of milk.',
      'Top with the cream cheese mixture and the walnuts.'
    ],
    tips: [
      'Grate the carrot finely.',
      'Use plenty of spices.',
      'Loosen with milk in the morning.'
    ],
    pair: ['Coffee', 'Fresh orange juice', 'Fruit', 'Toast'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [480, 'Chilling overnight'],
    nut: [504, 17, 64, 20, 7, 30, 160]
  },

  'cookies-and-cream-ice-cream': {
    d: 'A vanilla custard ice cream churned with chunks of crushed chocolate sandwich biscuits, chilled and frozen for 8 hours.',
    meta: 'Cookies and cream ice cream with a vanilla custard base and crushed Oreos, chilled and frozen. Eight servings, ready in 9 hours.',
    kw: ['cookies and cream ice cream', 'oreo ice cream', 'homemade cookies and cream ice cream', 'custard cookies and cream ice cream', 'chocolate biscuit ice cream'],
    why: 'Many homemade batches fail on a single point, which is the cookies going soggy. A biscuit mixed into a wet ice cream base slowly absorbs moisture and turns into a dull grey paste. The fix is to add them last, in large chunks, while the ice cream is still churning, and to freeze it quickly, so that they stay crisp and snap.\n\nStart with a very good vanilla custard. Heat the milk and cream with a split vanilla pod, whisk the egg yolks with the sugar, combine them and cook gently until the custard reaches 80C and coats a spoon. The vanilla needs to be pure and strong, because the chocolate biscuits have a strong flavour of their own. Chill the custard for at least 4 hours until completely cold.\n\n**Break the biscuits by hand into pieces about the size of a coin.** Pulverised biscuits dissolve into the ice cream and turn it grey, while large pieces keep their crunch and stay recognisable. Include the cream filling, which streaks the base with white.\n\nChurn the custard until it has the texture of soft-serve, add the biscuits in the last minute, and pack into a lidded container. Freeze for 4 hours before serving. Take it out of the freezer 10 minutes before scooping.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '2 tsp vanilla bean paste',
      '5 egg yolks',
      '120 g caster sugar',
      '1/4 tsp salt',
      '12 Oreo biscuits, about 130 g, broken into pieces'
    ],
    st: [
      'Heat the cream, milk and vanilla bean paste to a simmer. Take off the heat and leave for 5 minutes.',
      'Whisk the egg yolks, sugar and salt until pale. Reheat the cream until steaming, whisk a ladle into the yolks, then tip back into the pan.',
      'Cook over low heat, stirring, to 80C until the custard coats a spoon. Strain and chill for 4 hours.',
      'Churn until thick, adding the broken biscuits for the last minute.',
      'Freeze in a lidded container for 4 hours.'
    ],
    tips: [
      'Break the biscuits by hand into large pieces.',
      'Add the biscuits at the very end of churning.',
      'Chill the custard completely first.'
    ],
    pair: ['Brownies', 'Hot fudge sauce', 'Wafer cones', 'Cold milk'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Steeping, chilling and freezing'],
    nut: [337, 7, 30, 21, 0, 24, 210]
  },

  'ice-cream-pie': {
    d: 'A crushed Oreo crust filled with softened vanilla ice cream, topped with hot fudge and frozen for 4 hours.',
    meta: 'Ice cream pie with an Oreo crust, vanilla ice cream and fudge sauce, frozen for 4 hours. Eight servings, ready in 4 hours 25 minutes.',
    kw: ['ice cream pie', 'oreo ice cream pie', 'frozen ice cream pie with fudge', 'easy ice cream pie', 'ice cream pie with chocolate crust'],
    why: 'A simple pie assembled from what is in the freezer, built in layers and left to set. An ice cream pie is a classic of American summers, with a chocolate biscuit base, a thick layer of ice cream, a drizzle of fudge sauce and a topping of whipped cream. It is quick to put together and impressive to serve.\n\nThe crust is crushed Oreo biscuits, filling and all, mixed with melted butter and pressed into a pie dish. Pack it hard against the base and sides, using the bottom of a glass, to create a solid shell. Freeze it for 15 minutes before adding the ice cream, so it sets firmly and does not melt the first layer of ice cream.\n\n**Soften the ice cream, but do not melt it.** Take the tub out of the freezer 10 minutes before you start, until a spoon sinks in with some effort, and the ice cream can be spread like thick paste. Melted ice cream refreezes icy and grainy. Spread it into the crust with the back of a spoon, smoothing the top.\n\nDrizzle with cold fudge sauce, add a second layer of ice cream if you like, and freeze for at least 4 hours until completely firm. Remove the pie from the freezer 10 minutes before slicing, and cut with a knife dipped in hot water. Add whipped cream and crushed biscuits to finish.',
    ing: [
      '250 g Oreo biscuits, crushed to fine crumbs',
      '70 g butter, melted',
      '1 litre vanilla ice cream, softened',
      '100 g fudge sauce',
      '150 ml double cream, whipped',
      '50 g Oreo biscuits, crushed, for the top'
    ],
    st: [
      'Mix the Oreo crumbs with the melted butter and press firmly into a 23 cm pie dish. Freeze for 15 minutes.',
      'Spread half the softened ice cream into the crust.',
      'Drizzle over half of the fudge sauce, then spread the remaining ice cream on top.',
      'Freeze for at least 4 hours until firm.',
      'Top with the whipped cream, the rest of the fudge sauce and the crushed biscuits. Cut with a hot knife.'
    ],
    tips: [
      'Press the crust firmly.',
      'Soften the ice cream but do not melt it.',
      'Cut with a hot knife.'
    ],
    pair: ['Hot fudge sauce', 'Fresh berries', 'Coffee', 'Cold milk'],
    store: 'Keeps in the freezer for 2 weeks, covered.',
    rest: [255, 'Freezing'],
    nut: [608, 7, 64, 36, 2, 47, 280]
  },

  'frozen-hot-chocolate': {
    d: 'Ice, milk, cocoa and chocolate sauce blended into a thick frozen drink, topped with whipped cream and shaved chocolate.',
    meta: 'Frozen hot chocolate blended from ice, milk and cocoa in 5 minutes. Two servings, no cooking required.',
    kw: ['frozen hot chocolate', 'frozen hot chocolate drink', 'iced chocolate slush', 'blended frozen chocolate drink', 'frozen hot chocolate recipe'],
    why: 'The idea is a New York invention of the late twentieth century, a drink which has the flavour of hot chocolate and the texture of a slushy. It was created in a restaurant to serve in summer, and it caught on with people who wanted cocoa in July. The result is a thick, cold, frosty glass that is part milkshake, part ice cream.\n\nThe base is cocoa and chocolate sauce, which together give a deep flavour. Use unsweetened cocoa powder, sifted so that it does not clump, and a good quality chocolate syrup. Whisk the cocoa with a little warm milk first to dissolve it into a smooth paste, then cool it down in the fridge, because a lump of dry cocoa will not blend into cold milk.\n\n**Use whole milk ice cubes.** Freeze a tray of milk the night before, and blend those instead of ordinary ice. They keep the drink creamy as they melt, where water ice dilutes it. The result is thick, icy and intensely chocolatey.\n\nBlend in short bursts, scraping down the sides, until the texture is like a thick smoothie. Pour into tall glasses, top with whipped cream and chocolate shavings and serve straight away with a wide straw. It melts fast, so do not leave it standing.',
    ing: [
      '400 ml whole milk, frozen into cubes',
      '100 ml whole milk',
      '3 tbsp unsweetened cocoa powder',
      '4 tbsp chocolate syrup',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '4 tbsp whipped cream',
      '1 tbsp dark chocolate, shaved'
    ],
    st: [
      'Whisk the cocoa with 3 tbsp of the fresh milk to make a smooth paste, then stir in the rest of the fresh milk.',
      'Pour into a blender with the chocolate syrup, vanilla and salt.',
      'Add the frozen milk cubes and blend in short bursts, scraping down the sides, until thick and smooth.',
      'Pour into 2 tall glasses.',
      'Top with the whipped cream and chocolate shavings and serve with wide straws.'
    ],
    tips: [
      'Freeze milk into cubes the night before.',
      'Make the cocoa paste first.',
      'Serve straight away.'
    ],
    pair: ['Brownies', 'Cookies', 'Summer treat', 'Whipped cream'],
    store: 'Best drunk at once.',
    nut: [415, 11, 41, 23, 3, 36, 200]
  },

  'rocky-road-ice-cream': {
    d: 'A rich chocolate custard ice cream churned with mini marshmallows and toasted almonds, chilled and frozen for 8 hours.',
    meta: 'Rocky road ice cream with chocolate custard, marshmallows and almonds, chilled and frozen. Eight servings, ready in 9 hours.',
    kw: ['rocky road ice cream', 'chocolate marshmallow almond ice cream', 'homemade rocky road ice cream', 'chocolate custard ice cream with marshmallows', 'rocky road ice cream recipe'],
    why: 'The name goes back to a flavour created by an ice cream maker in the 1920s, supposedly to lift the spirits of people during hard times. Chocolate ice cream, nuts and marshmallows: the combination of smooth, crunchy and chewy has become a staple of the freezer aisle, and the homemade version is far better.\n\nThe base is a dark chocolate custard. Heat the milk and cream, whisk egg yolks with sugar and cocoa, and combine the two, then cook to 80C until the custard coats a spoon. Stir in chopped dark chocolate while it is still hot, which melts into a thick, glossy base. Chill for 4 hours until completely cold.\n\n**Toast the almonds and use small marshmallows.** Toasting the nuts in a dry pan for 4 minutes brings out their flavour and keeps them crunchy when frozen. Mini marshmallows are the right size for the job. Large ones freeze solid and are difficult to bite. Some people roll them in cornflour first so they do not stick together.\n\nChurn the custard until it is thick, then fold in the marshmallows and almonds by hand so they stay whole. Pack into a container and freeze for 4 hours. The marshmallows stay soft and chewy, even when frozen, which is part of the appeal.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '5 egg yolks',
      '140 g caster sugar',
      '30 g cocoa powder',
      '150 g dark chocolate, chopped',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '80 g mini marshmallows',
      '60 g whole almonds, toasted and chopped'
    ],
    st: [
      'Heat the cream and milk to steaming. Whisk the egg yolks, sugar, cocoa and salt until smooth.',
      'Whisk a ladle of the hot milk into the yolks, then tip all back into the pan. Cook over low heat to 80C, stirring.',
      'Take off the heat, stir in the chocolate until melted, then the vanilla. Strain and chill for 4 hours.',
      'Churn until thick. Fold in the marshmallows and almonds by hand.',
      'Pack into a container and freeze for 4 hours.'
    ],
    tips: [
      'Toast the almonds first.',
      'Use mini marshmallows.',
      'Fold in the extras by hand.'
    ],
    pair: ['Hot fudge sauce', 'Wafer cones', 'Brownies', 'Cold milk'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [464, 9, 44, 28, 4, 36, 150]
  },

  'microwave-mug-cake': {
    d: 'A soft chocolate cake for one, mixed in a mug and cooked in the microwave in 90 seconds.',
    meta: 'Microwave mug cake with chocolate, ready in 90 seconds. One serving, made in 7 minutes.',
    kw: ['microwave mug cake', 'chocolate mug cake', 'mug cake in the microwave', 'single serving chocolate cake', 'mug cake recipe'],
    why: 'Overcooking is the only way this goes wrong. A mug cake needs about 90 seconds in the microwave, and 15 seconds too long turns the sponge from soft and tender to a rubbery puck. It is the same with any microwave cooking: the cake sets from the outside in, and continues to cook for a minute after you take it out.\n\nThe batter is a minimum of ingredients: flour, cocoa, sugar and baking powder, with milk, oil and a drop of vanilla. Egg is left out of most mug recipes because a whole egg is too much for a single serving and makes the cake spongy and eggy. Without it, the cake is tender, moist and chocolatey. A spoonful of chocolate chips pressed into the centre melts into a pool.\n\n**Use a large, straight-sided mug.** The batter rises to double its height, and a narrow mug leads to overflow. Aim for a 350 ml cup and fill it to no more than halfway. Mix with a fork, scraping the base and the corners, where dry flour likes to hide.\n\nMicrowave on high for 70 seconds, then check: the top should look set, and spring back when touched. If it is still wet, add 10 seconds. Leave it to stand for a minute, then eat from the mug, with a scoop of ice cream or a spoon of peanut butter.',
    ing: [
      '4 tbsp plain flour',
      '3 tbsp caster sugar',
      '2 tbsp cocoa powder',
      '1/4 tsp baking powder',
      '1 pinch salt',
      '3 tbsp milk',
      '2 tbsp vegetable oil',
      '1/4 tsp vanilla extract',
      '1 tbsp chocolate chips'
    ],
    st: [
      'Mix the flour, sugar, cocoa, baking powder and salt in a large 350 ml mug.',
      'Stir in the milk, oil and vanilla, scraping the base and corners, until smooth.',
      'Press the chocolate chips into the centre of the batter.',
      'Microwave on high for 70 seconds, then check. Add 10 seconds if the top is wet.',
      'Leave to stand for 1 minute and eat from the mug.'
    ],
    tips: [
      'Do not overcook it.',
      'Use a large mug and fill it halfway.',
      'Stand for a minute before eating.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Fresh berries', 'Peanut butter'],
    store: 'Best eaten at once.',
    nut: [616, 7, 75, 32, 5, 40, 320]
  },

  'mug-brownie': {
    d: 'A fudgy brownie for one, mixed in a mug and microwaved for 60 seconds with a molten chocolate centre.',
    meta: 'Mug brownie with a molten centre, microwaved for 1 minute. One serving, made in 6 minutes.',
    kw: ['mug brownie', 'microwave mug brownie', 'single serving brownie', 'brownie in a mug', 'chocolate mug brownie recipe'],
    why: 'A brownie for one in a minute is a dangerous thing to know about. The recipe takes advantage of the microwave\'s fast heat to set the outside while leaving a molten centre, so that you get a warm, fudgy, spoonable brownie in the time it takes to boil a kettle. It is much closer to a pudding than to a tray bake.\n\nThe base is melted butter and chocolate, which gives it its fudgy richness, with a touch of flour for structure and cocoa for depth. Melt a square of dark chocolate with a spoonful of butter in the mug for 20 seconds, stir until smooth, then add sugar, an egg yolk, and a pinch of salt. The yolk makes it rich and dense, and there is no white to make it springy.\n\n**Cook for 45 to 60 seconds and no more.** The mixture will look wet in the middle and just set around the edges, and this is correct. It sets further as it stands. If you cook until it appears firm, it will be dry and rubbery by the time you take the first bite.\n\nLet the mug stand for 1 minute, then eat straight from it. A scoop of ice cream on top melts into the warm brownie, and a pinch of flaky salt makes the chocolate taste even deeper. Wash the mug immediately.',
    ing: [
      '20 g dark chocolate, chopped',
      '1 tbsp butter',
      '2 tbsp caster sugar',
      '1 egg yolk',
      '2 tbsp plain flour',
      '1 tbsp cocoa powder',
      '1 pinch salt',
      '60 g vanilla ice cream, to serve'
    ],
    st: [
      'Put the chocolate and butter in a large mug and microwave for 20 seconds. Stir until smooth.',
      'Stir in the sugar and egg yolk until glossy.',
      'Add the flour, cocoa and salt and mix until smooth.',
      'Microwave on high for 45 seconds, then check: it should be set at the edges with a soft middle. Add 10 seconds if needed.',
      'Stand for 1 minute and top with the ice cream.'
    ],
    tips: [
      'Stop cooking while the centre is still soft.',
      'Use only the yolk for a fudgy texture.',
      'Eat it warm.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Fresh raspberries', 'Coffee'],
    store: 'Best eaten at once.',
    nut: [595, 12, 67, 31, 4, 48, 270]
  },

  'mug-carrot-cake': {
    d: 'A spiced carrot cake for one, made with grated carrot, cinnamon and a spoon of cream cheese frosting, microwaved for 2 minutes.',
    meta: 'Mug carrot cake with cinnamon and cream cheese frosting, microwaved for 2 minutes. One serving, made in 7 minutes.',
    kw: ['mug carrot cake', 'microwave carrot cake', 'single serving carrot cake', 'carrot cake in a mug', 'carrot cake for one'],
    why: 'Carrot cake in a mug sounds odd until you try it, and then it is difficult to ignore. A heaped tablespoon of grated carrot melts into the batter, providing moisture and sweetness, and brings the cinnamon, nutmeg and brown sugar flavour of the full-size cake in a fraction of the time. The result is soft, spiced and surprisingly cakey.\n\nGrate the carrot finely and squeeze it lightly to remove excess liquid. A coarse shred will not soften in the short cooking time, and wet carrot makes a soggy cake. Use brown sugar for depth and a molasses note. The batter is a mix of flour, brown sugar, cinnamon, baking powder, oil and milk, with a spoon of chopped walnuts if you have them.\n\n**Mix in the mug itself, and stop when just combined.** The batter should be thick and lumpy. Overmixing develops gluten, and in a microwave this gives a chewy, rubbery cake. Tap the mug on the counter to settle the batter before cooking.\n\nMicrowave for 90 seconds, then check. The cake will rise above the rim and settle as it cools. Stir a spoon of cream cheese with a teaspoon of icing sugar and a drop of vanilla, and dollop it on top while the cake is warm so it melts into a rich frosting. Eat at once.',
    ing: [
      '4 tbsp plain flour',
      '2 tbsp light brown sugar',
      '1/2 tsp ground cinnamon',
      '1/4 tsp baking powder',
      '1 pinch nutmeg',
      '1 pinch salt',
      '3 tbsp milk',
      '1 tbsp vegetable oil',
      '2 tbsp grated carrot, about 25 g',
      '1 tbsp walnuts, chopped',
      '1 tbsp cream cheese',
      '1 tsp icing sugar'
    ],
    st: [
      'Mix the flour, brown sugar, cinnamon, baking powder, nutmeg and salt in a large 350 ml mug.',
      'Stir in the milk and oil until just combined, then fold in the carrot and walnuts.',
      'Tap the mug on the counter to settle the batter.',
      'Microwave on high for 90 seconds, then check. Add 10 seconds if the centre is wet.',
      'Stir the cream cheese and icing sugar together and dollop over the warm cake.'
    ],
    tips: [
      'Grate the carrot finely.',
      'Do not overmix the batter.',
      'Add the frosting while the cake is warm.'
    ],
    pair: ['Coffee', 'Hot tea', 'Cold milk', 'Vanilla ice cream'],
    store: 'Best eaten at once.',
    nut: [518, 7, 64, 26, 3, 36, 370]
  }
};
