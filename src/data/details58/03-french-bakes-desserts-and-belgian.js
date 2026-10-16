'use strict';

/**
 * Volume fifty-eight, third part: seventeen more French dishes (a potato side,
 * tarts, cakes, set desserts, basic preparations, a jam and a sauce) and the
 * first eight Belgian ones. Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'pommes-lyonnaises': {
    d: 'Sliced potatoes fried in butter and oil with plenty of slowly browned onion until golden, finished with parsley, ready in 45 minutes.',
    meta: 'Pommes lyonnaises, fried potatoes with golden onions and parsley, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['pommes lyonnaises', 'lyonnaise potatoes', 'fried potatoes with onions', 'french potatoes and caramelised onions', 'sauteed potatoes with onions and parsley'],
    why: 'Most home versions come out soggy, and the fix is to cook the potatoes and the onions separately. If they go in the pan together, the onions release water and steam the potatoes, and neither browns.\n\nPrecook the potatoes in their skins, cool them, peel and slice them about 5 mm thick. **Fry them in a wide pan in a single layer**, in two batches if the pan is small, in a mix of butter and oil so they brown without burning. Let them sit undisturbed for 4 minutes before turning, so a crust forms. If you stir too soon the slices break and stick.\n\nThe onions take longer than you expect. Cook them in a separate pan over a low heat for about 20 minutes, until they are soft and golden. Fold them into the potatoes for the last 2 minutes, with salt, pepper and a handful of chopped parsley. The dish is a classic with roast chicken, steak or sausages, and it is also good with a fried egg on top for a supper.',
    ing: [
      '800 g waxy potatoes',
      '2 tbsp butter',
      '2 tbsp rapeseed oil',
      '2 onions, thinly sliced',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Boil the potatoes in their skins for 15 minutes until just tender. Drain, cool, peel and slice 5 mm thick.',
      'Heat half the butter and oil in a wide pan over medium heat and cook the onions with a pinch of the salt for 20 minutes, stirring, until golden. Lift out.',
      'Heat the remaining butter and oil and fry the potatoes in a single layer, in two batches, for 8 minutes each, turning once, until golden.',
      'Return all the potatoes and the onions to the pan, add the rest of the salt and the pepper and toss for 2 minutes.',
      'Scatter with the parsley and serve.'
    ],
    tips: [
      'Cook the onions and potatoes in separate pans.',
      'Leave the slices undisturbed for 4 minutes to form a crust.',
      'Use a mix of butter and oil so nothing burns.'
    ],
    pair: ['Roast chicken', 'Steak', 'Sausages', 'Fried eggs'],
    store: 'Best fresh. Reheat in a hot pan.',
    nut: [293, 5, 39, 13, 5, 4, 610]
  },

  'tarte-a-la-rhubarbe': {
    d: 'Rhubarb baked in a sweet shortcrust case with an almond and egg custard, for 40 minutes at 190C.',
    meta: 'Tarte à la rhubarbe, rhubarb and almond custard in a sweet pastry case, baked for 40 minutes. Eight servings, ready in 1 hour 5 minutes.',
    kw: ['tarte a la rhubarbe', 'french rhubarb tart', 'rhubarb tart with almond custard', 'rhubarb custard tart', 'sweet pastry rhubarb tart'],
    why: 'Why does rhubarb sometimes turn a tart into a puddle? Because it is mostly water, and it gives that water up in the oven. The fix is to give the juice somewhere to go: a layer of ground almonds under the fruit soaks it up and keeps the pastry crisp.\n\nCut the rhubarb into 3 cm lengths and toss it with sugar for 20 minutes beforehand, then drain off the pink liquid. **Keep that juice and boil it down** into a syrup to brush over the finished tart, because it carries all the colour and flavour. The pastry is a simple sweet shortcrust, blind baked until pale gold so the custard does not make it soggy.\n\nSpread ground almonds over the base, pack the rhubarb in tight rows and pour over a custard of eggs, cream and sugar. Bake until the custard is just set, with a slight wobble, and the rhubarb is tender. Cool before slicing, or the custard will run. It is best served just warm or cold, with a spoonful of cream or crème fraîche.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '50 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '500 g rhubarb, cut in 3 cm lengths',
      '80 g caster sugar, for the rhubarb',
      '30 g ground almonds',
      '2 eggs',
      '100 ml double cream',
      '40 g caster sugar, for the custard'
    ],
    st: [
      'Rub the butter into the flour and icing sugar. Mix in the egg yolk and water, wrap and chill for 20 minutes.',
      'Toss the rhubarb with the 80 g sugar and leave for 20 minutes. Drain, keeping the juice.',
      'Heat the oven to 190C. Roll out the pastry to fit a 24 cm tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans and bake for 5 minutes.',
      'Sprinkle the ground almonds over the base and pack the rhubarb on top.',
      'Whisk the eggs, cream and 40 g sugar and pour over. Bake for 40 minutes until the custard is just set.',
      'Boil the rhubarb juice until syrupy and brush over the tart. Cool before slicing.'
    ],
    tips: [
      'Drain the rhubarb and keep the juice for a glaze.',
      'Scatter ground almonds on the base to soak up moisture.',
      'Cool the tart before slicing so the custard sets.'
    ],
    pair: ['Crème fraîche', 'Vanilla ice cream', 'Coffee'],
    store: 'Keeps for 2 days in the fridge. Best eaten at room temperature.',
    nut: [375, 7, 44, 19, 2, 23, 30]
  },

  'tarte-aux-abricots': {
    d: 'Apricot halves arranged in a shortcrust case on almond cream and baked for 40 minutes, then glazed with warm apricot jam.',
    meta: 'Tarte aux abricots, fresh apricots on almond cream in a pastry case, baked for 40 minutes. Eight servings, ready in 1 hour 5 minutes.',
    kw: ['tarte aux abricots', 'french apricot tart', 'apricot and almond cream tart', 'apricot tart with frangipane', 'fresh apricot tart'],
    why: 'Pack them tight. That is the one rule, and the part people skip, because apricots shrink as they bake and a loosely arranged tart looks half empty when it comes out. Cut the fruit in half, remove the stones and set the halves cut side up in tight rows, so the curved backs face down into the almond cream.\n\nThe cream is butter, sugar, ground almonds and an egg beaten smooth, and it puffs gently around the fruit. It acts like a sponge for the juice, so the pastry stays crisp. **Use apricots that are ripe but still firm.** Soft ones collapse into jam, and hard ones stay sour and dry. The ones that give very slightly when pressed are right.\n\nBlind bake the case first until pale gold, then fill and bake until the cream is golden and the apricot edges have caramelised. A glaze of warmed apricot jam brushed on while the tart is hot gives it a glossy finish and a little extra sweetness. Serve warm or at room temperature, with cream or ice cream.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '50 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '80 g butter, softened',
      '80 g caster sugar',
      '80 g ground almonds',
      '1 egg',
      '600 g ripe apricots, halved and stoned',
      '3 tbsp apricot jam'
    ],
    st: [
      'Rub the cold butter into the flour and icing sugar. Mix in the egg yolk and water, wrap and chill for 20 minutes.',
      'Heat the oven to 180C. Roll the pastry to fit a 24 cm tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans.',
      'Beat the soft butter with the sugar until pale, then beat in the ground almonds and egg.',
      'Spread the cream in the case. Arrange the apricots cut side up in tight rows.',
      'Bake for 40 minutes until the cream is golden and the fruit tender.',
      'Warm the jam with a spoonful of water and brush over the hot tart.'
    ],
    tips: [
      'Pack the apricots tightly; they shrink in the oven.',
      'Use fruit that is ripe but still firm.',
      'Glaze the tart while it is hot.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Dessert wine'],
    store: 'Keeps for 2 days in the fridge. Warm at 160C for 10 minutes.',
    nut: [449, 7, 49, 25, 3, 27, 20]
  },

  'tarte-au-chocolat': {
    d: 'A crisp sweet pastry case filled with a smooth dark chocolate and cream ganache that sets in the fridge, baked case 20 minutes.',
    meta: 'Tarte au chocolat, a crisp pastry case with a silky dark chocolate ganache, baked for 30 minutes. Ten servings, ready in 1 hour plus chilling.',
    kw: ['tarte au chocolat', 'french chocolate tart', 'dark chocolate ganache tart', 'chocolate tart with sweet pastry', 'chocolate cream tart'],
    why: 'Chocolate, cream and a pastry case: that is the list, and the ganache is the whole filling. Because there is so little in it, the quality of the chocolate shows, so use a good dark chocolate with 60 to 70 per cent cocoa and chop it finely so it melts evenly.\n\nHeat the cream until it steams but does not boil, pour it over the chocolate and wait for 2 minutes before stirring. **Stir slowly from the centre outwards** with a spatula, because whisking beats in air and leaves the filling full of bubbles. Add the butter at the end for gloss. The mixture should be smooth, glossy and thick enough to pour.\n\nPour it into the blind-baked case while still warm and leave it at room temperature for 30 minutes before chilling, so it sets without cracking. It needs at least 2 hours in the fridge. Take it out 20 minutes before serving so the ganache softens to a creamy texture. A dusting of cocoa or a few flakes of sea salt on top finishes it.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '50 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '300 g dark chocolate, 60 to 70 per cent cocoa, chopped',
      '300 ml double cream',
      '30 g butter',
      '1 pinch flaky sea salt'
    ],
    st: [
      'Rub the cold butter into the flour and icing sugar. Mix in the egg yolk and water, wrap and chill for 20 minutes.',
      'Heat the oven to 190C. Roll out the pastry to fit a 24 cm tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans and bake for 8 minutes. Cool.',
      'Heat the cream until steaming and pour over the chocolate. Leave for 2 minutes, then stir slowly until smooth. Stir in the butter.',
      'Pour into the case and leave for 30 minutes at room temperature, then chill for 2 hours.',
      'Take out 20 minutes before serving and finish with the salt.'
    ],
    tips: [
      'Stir the ganache gently to avoid bubbles.',
      'Use good dark chocolate; it is the main flavour.',
      'Serve at cool room temperature for a creamy texture.'
    ],
    pair: ['Raspberries', 'Crème fraîche', 'Espresso'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [464, 5, 39, 32, 3, 20, 40]
  },

  'gateau-nantais': {
    d: 'A moist almond and rum cake baked for 45 minutes and brushed with a warm rum syrup, then finished with a thin white icing.',
    meta: 'Gâteau nantais, a moist almond and rum cake, baked for 45 minutes at 170C. Ten servings, ready in 1 hour 5 minutes.',
    kw: ['gateau nantais', 'french almond and rum cake', 'rum soaked almond cake', 'moist rum cake with icing', 'nantes style rum cake'],
    why: 'It is a cake for the first cold days of the year, made with almonds, butter and a good splash of rum, and it only gets better in the days after baking. The ground almonds keep the crumb dense and moist, and the rum syrup poured on while the cake is warm turns it almost like a pudding.\n\nCream the butter and sugar for a full 5 minutes until pale and light, because this is the only raising the cake gets apart from a spoonful of baking powder. Add the eggs one at a time and beat well after each, so the mixture does not split. **Fold in the almonds and flour gently**, in two additions, and spoon the thick batter into a lined tin.\n\nBake until the top is golden and a skewer comes out clean. While the cake is still in its tin, prick it all over and brush with the warm syrup, a little at a time so it is absorbed. A thin icing of icing sugar and a spoon of rum finishes it. Wrap the cake once cool and leave it for a day before cutting, if you can wait.',
    ing: [
      '150 g butter, softened',
      '150 g caster sugar',
      '3 eggs',
      '150 g ground almonds',
      '60 g plain flour',
      '1 tsp baking powder',
      '1 pinch salt',
      '50 g caster sugar, for the syrup',
      '50 ml water',
      '4 tbsp dark rum',
      '100 g icing sugar'
    ],
    st: [
      'Heat the oven to 170C. Line a 20 cm round tin.',
      'Beat the butter and 150 g sugar for 5 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the ground almonds, flour, baking powder and salt and spoon into the tin.',
      'Bake for 45 minutes until golden and a skewer comes out clean.',
      'Boil the 50 g sugar and water for 2 minutes, take off the heat and stir in 3 tbsp of the rum.',
      'Prick the warm cake, brush with the syrup, cool, then mix the icing sugar with the last tbsp of rum and spread over the top.'
    ],
    tips: [
      'Cream the butter and sugar until pale.',
      'Add the syrup a little at a time while the cake is warm.',
      'Leave the cake a day for the best flavour.'
    ],
    pair: ['Coffee', 'Tea', 'Whipped cream'],
    store: 'Keeps for 5 days wrapped. The flavour deepens after a day.',
    nut: [365, 6, 38, 21, 2, 31, 80]
  },

  'gateau-breton': {
    d: 'A thick, buttery, golden cake with a crisp edge and a soft centre, scored with a lattice and baked for 40 minutes.',
    meta: 'Gâteau breton, a thick buttery cake with a crisp lattice top, baked for 40 minutes. Ten servings, ready in 1 hour.',
    kw: ['gateau breton', 'breton butter cake', 'french salted butter cake', 'thick buttery shortbread cake', 'gateau breton recipe'],
    why: 'Most home versions come out too dry, and the fix is to resist the urge to bake it until it looks done. A gâteau breton is closer to a thick shortbread than a sponge, and it should be pale gold and slightly soft in the middle when it comes out of the oven.\n\nThe batter is soft and sticky, made from butter, sugar, egg yolks and flour, and it is spread into a tart ring or a buttered tin and levelled. Do not knead it; just mix until it comes together. **Chill the batter for 30 minutes before baking**, which firms the butter and helps the cake keep its shape and its tender crumb. Brush the top with beaten egg yolk and mark a diamond pattern with a fork, pressing lightly so it does not drag.\n\nSalted butter is the traditional choice, and it is the flavour that makes the cake taste of itself. If you use unsalted butter, add a generous pinch of salt. Bake until the top is deep gold, then cool in the tin so it firms up. Slice it into wedges, and eat it with tea or coffee.',
    ing: [
      '200 g salted butter, softened',
      '180 g caster sugar',
      '5 egg yolks, plus 1 for glazing',
      '300 g plain flour',
      '1 tsp baking powder',
      '1 tbsp dark rum'
    ],
    st: [
      'Beat the butter and sugar until pale. Beat in 5 egg yolks one at a time, then the rum.',
      'Stir in the flour and baking powder to a soft, sticky dough. Spread into a buttered 22 cm tin, level the top and chill for 30 minutes.',
      'Heat the oven to 180C. Brush the top with the last egg yolk and score a diamond pattern with a fork.',
      'Bake for 40 minutes until deep golden.',
      'Cool in the tin for 15 minutes, then turn out.'
    ],
    tips: [
      'Chill the batter before baking.',
      'Use salted butter for the traditional flavour.',
      'Take the cake out when golden; it firms as it cools.'
    ],
    pair: ['Tea', 'Coffee', 'Cider'],
    store: 'Keeps for 5 days in a tin.',
    nut: [359, 6, 41, 19, 1, 18, 200]
  },

  'cake-au-citron': {
    d: 'A moist lemon loaf cake with a crisp sugar glaze, made with yoghurt, olive oil and lemon zest and baked for 50 minutes.',
    meta: 'Cake au citron, a moist lemon loaf with a sugar glaze, baked for 50 minutes at 170C. Ten slices, ready in 1 hour 5 minutes.',
    kw: ['cake au citron', 'french lemon loaf cake', 'lemon yoghurt loaf', 'moist lemon cake with glaze', 'lemon drizzle style loaf'],
    why: 'The smell of lemon zest rubbed into sugar is the first sign this is going to work. Rubbing the zest into the sugar with your fingertips releases the oils, and those oils carry the flavour right through the cake. Stirring the zest in without this step leaves a faint taste.\n\nA cake au citron is a loaf, mixed in one bowl, and the batter is a simple one: eggs, sugar, yoghurt, oil and flour. The yoghurt and oil keep the crumb damp for days, which is why it is a favourite for lunch boxes and afternoon tea. **Do not overmix.** Stir the wet and dry together until the flour disappears and stop, because a smooth, overworked batter bakes into a tough, rubbery loaf.\n\nWhile the cake bakes, mix lemon juice and icing sugar for the glaze. Spoon half of it over the cake while it is still warm, so it soaks in, and the rest when cold for a crisp white finish. The loaf is done when a skewer comes out clean and the top is golden and cracked.',
    ing: [
      '2 lemons, zest and juice',
      '150 g caster sugar',
      '3 eggs',
      '125 g plain yoghurt',
      '100 ml olive oil',
      '200 g plain flour',
      '2 tsp baking powder',
      '1 pinch salt',
      '100 g icing sugar'
    ],
    st: [
      'Heat the oven to 170C and line a 900 g loaf tin.',
      'Rub the zest into the caster sugar with your fingertips for 1 minute.',
      'Whisk in the eggs, yoghurt and oil. Sift in the flour, baking powder and salt and stir until just combined.',
      'Pour into the tin and bake for 50 minutes until golden and a skewer comes out clean.',
      'Mix 3 tbsp of the lemon juice with the icing sugar. Spoon half over the warm cake, let it soak in, then cool and spoon over the rest.'
    ],
    tips: [
      'Rub the zest into the sugar to release the oils.',
      'Stir only until the flour disappears.',
      'Glaze in two stages for a soaked loaf with a crisp top.'
    ],
    pair: ['Tea', 'Coffee', 'Fresh berries'],
    store: 'Keeps for 4 days wrapped. Freeze for 2 months.',
    nut: [287, 5, 42, 11, 1, 26, 140]
  },

  'moelleux-aux-pommes': {
    d: 'A soft, moist apple cake studded with diced apples and scented with cinnamon, baked for 40 minutes in a round tin.',
    meta: 'Moelleux aux pommes, a soft apple cake with cinnamon, baked for 40 minutes at 180C. Eight servings, ready in 1 hour.',
    kw: ['moelleux aux pommes', 'french soft apple cake', 'moist apple cake with cinnamon', 'apple cake with diced apples', 'easy french apple cake'],
    why: 'Flour, sugar, butter, eggs and apples: five things you already own, and a cake that is ready in under an hour. The name means soft, and that is the point: the crumb is tender and moist, with pieces of apple running through it.\n\nCut the apples into small cubes, about 1 cm, so they sit evenly through the cake rather than sinking in one layer at the base. Toss them in a spoonful of flour first, which helps them stay suspended. **Use firm, tart apples**, such as Granny Smith or Bramley, because they hold their shape and balance the sweetness. Soft eating apples turn to pulp.\n\nMelted butter replaces creaming, which makes the method quicker and the crumb denser and more moist. Mix the batter just until combined, fold in the apples and spoon it into a lined tin. Scatter a few apple slices on top if you like. It is done when a skewer comes out clean and the top is golden. Serve warm or cold, dusted with icing sugar.',
    ing: [
      '3 firm apples, peeled and cut in 1 cm cubes',
      '150 g plain flour',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '3 eggs',
      '120 g caster sugar',
      '100 g butter, melted',
      '60 ml whole milk',
      '1 tsp vanilla extract',
      '1 tbsp icing sugar, to dust'
    ],
    st: [
      'Heat the oven to 180C. Line a 22 cm round tin.',
      'Toss the apples with 1 tbsp of the flour.',
      'Whisk the eggs and sugar until pale. Stir in the melted butter, milk and vanilla.',
      'Fold in the remaining flour, baking powder and cinnamon until just combined, then fold in the apples.',
      'Spoon into the tin and bake for 40 minutes until golden and a skewer comes out clean.',
      'Cool for 10 minutes and dust with the icing sugar.'
    ],
    tips: [
      'Use firm, tart apples so they hold their shape.',
      'Toss the apples in flour so they stay suspended.',
      'Do not overmix the batter.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Coffee'],
    store: 'Keeps for 3 days in a tin. Freeze for 2 months.',
    nut: [301, 5, 41, 13, 2, 24, 150]
  },

  'charlotte-aux-fraises': {
    d: 'A dome of sponge fingers filled with a strawberry bavarois and fresh strawberries, set in the fridge for at least 4 hours.',
    meta: 'Charlotte aux fraises, sponge fingers filled with strawberry cream, cooked for 10 minutes. Ten servings, ready in 55 minutes plus 4 hours of chilling.',
    kw: ['charlotte aux fraises', 'strawberry charlotte', 'sponge finger and strawberry cream dessert', 'french strawberry charlotte cake', 'strawberry bavarois charlotte'],
    why: 'This is what to make in the first week of the strawberry season, when the fruit is sweet and cheap and you want a dessert that looks like a showpiece. It is a mould lined with sponge fingers, filled with a strawberry cream set with gelatine, and turned out onto a plate to be decorated.\n\nThe cream is a custard made with milk, egg yolks and sugar, with gelatine melted in, then cooled and folded with whipped cream and puréed strawberries. **Wait until the custard is cool and thick like a loose jelly before folding in the cream**, because warm custard melts it and the charlotte will not set. Soak the gelatine leaves in cold water until floppy, squeeze them and melt them into the warm custard.\n\nDip the sponge fingers very briefly in a little milk or syrup, because they soften quickly and a soaked finger falls apart. Stand them up around the mould with the sugared side out, fill with the cream and chill for at least 4 hours. Turn out carefully by running a knife around the edge, and decorate with whole strawberries.',
    ing: [
      '300 g sponge fingers, about 24',
      '4 tbsp whole milk, for dipping',
      '250 ml whole milk',
      '4 egg yolks',
      '80 g caster sugar',
      '10 g gelatine leaves',
      '300 g strawberries, puréed',
      '250 ml double cream, whipped',
      '300 g strawberries, hulled, to decorate'
    ],
    st: [
      'Soak the gelatine leaves in cold water for 5 minutes. Line a 20 cm charlotte mould with cling film.',
      'Heat the 250 ml milk until steaming. Whisk the yolks and sugar, pour on the milk, whisking, and return to the pan. Stir over low heat for 5 minutes until the custard coats a spoon.',
      'Squeeze the gelatine and stir it into the hot custard until dissolved. Cool to room temperature, stirring often.',
      'Fold in the strawberry purée, then the whipped cream.',
      'Dip the sponge fingers briefly in the 4 tbsp milk and stand them around the mould. Pour in the cream and cover with more sponge fingers. Chill for 4 hours.',
      'Turn out and decorate with the strawberries.'
    ],
    tips: [
      'Cool the custard fully before folding in the cream.',
      'Dip the sponge fingers very briefly.',
      'Chill for at least 4 hours so it sets.'
    ],
    pair: ['Fresh strawberries', 'Whipped cream', 'Sweet sparkling wine'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [240, 'Chilling'],
    nut: [301, 8, 38, 13, 2, 25, 90]
  },

  'bavarois': {
    d: 'A vanilla custard cream set with gelatine and lightened with whipped cream, chilled until firm and turned out from its mould.',
    meta: 'Bavarois, a set vanilla cream turned out from a mould, cooked for 5 minutes. Eight servings, ready in 30 minutes plus 4 hours of chilling.',
    kw: ['bavarois', 'vanilla bavarois', 'french set vanilla cream', 'gelatine set custard cream', 'bavarian cream dessert'],
    why: 'Why does a bavarois wobble instead of running? Because gelatine holds the cream together, and the amount decides everything. Too little and it slumps on the plate; too much and it bounces like rubber. Ten grams of leaf gelatine for 500 ml of liquid makes a cream that stands when turned out and melts on the tongue.\n\nThe base is a vanilla custard, made from milk, egg yolks and sugar stirred over low heat until it coats the back of a spoon. **Do not let it boil**, or the yolks scramble and the custard turns grainy. If it looks curdled, blend it for a few seconds. Soften the gelatine in cold water, squeeze it and stir it into the hot custard until it dissolves.\n\nCool the custard over ice, stirring, until it is as thick as unwhipped cream and starts to set at the edges. Then fold in the softly whipped cream in two goes. Pour into a lightly oiled mould and chill for at least 4 hours. To turn out, dip the mould in hot water for 5 seconds, run a knife round the edge and invert it onto a plate.',
    ing: [
      '400 ml whole milk',
      '2 g vanilla pod, split',
      '5 egg yolks',
      '100 g caster sugar',
      '10 g gelatine leaves',
      '300 ml double cream',
      '200 g raspberries, for serving'
    ],
    st: [
      'Soak the gelatine leaves in cold water for 5 minutes. Lightly oil a 1 litre mould.',
      'Heat the milk with the vanilla pod until steaming. Whisk the yolks and sugar, pour on the milk, whisking, and return to the pan.',
      'Stir over low heat for 5 minutes until the custard coats a spoon. Do not let it boil.',
      'Squeeze the gelatine and stir it in until dissolved. Strain into a bowl set over ice and stir until thick but not set.',
      'Whip the cream to soft peaks and fold it in in two goes. Pour into the mould and chill for 4 hours.',
      'Dip the mould in hot water for 5 seconds, run a knife round the edge and turn out. Serve with the raspberries.'
    ],
    tips: [
      'Never let the custard boil.',
      'Cool the custard until it starts to thicken before adding the cream.',
      'Dip the mould in hot water for just 5 seconds to release it.'
    ],
    pair: ['Raspberries', 'Fruit coulis', 'Crisp biscuits'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [240, 'Chilling'],
    nut: [270, 8, 19, 18, 2, 17, 70]
  },

  'genoise': {
    d: 'A light sponge cake of whisked whole eggs and sugar with a little melted butter folded in, baked for 30 minutes.',
    meta: 'Génoise, a light whisked sponge cake, baked for 30 minutes at 180C. Eight servings, ready in 55 minutes.',
    kw: ['genoise', 'genoise sponge', 'french whisked sponge cake', 'classic sponge for layer cakes', 'whole egg sponge with butter'],
    why: 'The first sign it is going right is the volume: whole eggs and sugar whisked over a pan of hot water until they triple in size and fall from the whisk in a thick, pale ribbon. That foam is the whole structure of the génoise, because there is no baking powder in it.\n\nWarm the eggs and sugar in a bowl over simmering water, whisking until the mixture is just warm to the finger, which helps the sugar dissolve and the foam form. Then whisk off the heat for 8 minutes, until it is cool, pale and thick. **Fold the flour in with a large metal spoon**, in three additions, in a figure of eight, and stop as soon as no streaks remain. The melted butter goes in last, stirred first with a spoonful of batter so it does not sink.\n\nPour into a lined tin and bake at once, because the foam deflates as it stands. The sponge is ready when it springs back and shrinks slightly from the sides. A génoise is dry on its own, so it is always brushed with syrup and filled with cream or jam.',
    ing: [
      '4 eggs',
      '120 g caster sugar',
      '120 g plain flour',
      '40 g butter, melted and cooled',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 180C. Butter and line a 20 cm round tin.',
      'Whisk the eggs and sugar in a bowl over a pan of barely simmering water for 4 minutes until warm to the touch.',
      'Take off the heat and whisk for 8 minutes until pale, cool and tripled in volume.',
      'Sift in the flour and salt in three additions, folding gently. Stir a spoonful of batter into the butter and vanilla, then fold that in.',
      'Pour into the tin and bake for 30 minutes until the sponge springs back.',
      'Cool in the tin for 5 minutes and turn out onto a rack.'
    ],
    tips: [
      'Whisk the eggs until they fall in a thick ribbon.',
      'Fold the flour in gently and stop when no streaks remain.',
      'Bake as soon as the batter is mixed.'
    ],
    pair: ['Raspberry jam', 'Whipped cream', 'Fresh strawberries'],
    store: 'Best on the day. Wrapped, it keeps for 2 days. Freeze for 1 month.',
    nut: [191, 5, 27, 7, 0, 15, 50]
  },

  'vacherin-aux-fraises': {
    d: 'Layers of crisp meringue sandwiched with whipped cream and strawberries, the meringue dried in a low oven for 90 minutes.',
    meta: 'Vacherin aux fraises, meringue layers with cream and strawberries, baked for 1 hour 30 minutes. Eight servings, ready in 2 hours.',
    kw: ['vacherin aux fraises', 'meringue and strawberry cake', 'strawberry vacherin', 'meringue layers with cream and fruit', 'french meringue dessert'],
    why: 'Most home meringues come out sticky or cracked, and the fix is time, not effort. A vacherin is baked at a very low temperature for a long time, not so much cooked as dried, so that the layers turn crisp and white with a faint pale colour and a marshmallow middle.\n\nThe meringue is egg whites and caster sugar, whisked until stiff and glossy. **Add the sugar a spoonful at a time**, waiting until each is dissolved before adding the next, and test by rubbing a little between your fingers. If it feels gritty, keep whisking. Pipe or spread the meringue into three 20 cm discs on lined trays, with the edges slightly higher.\n\nBake at 100C for 90 minutes and then leave the discs in the switched-off oven until cold, which prevents cracks. Assemble within a few hours of serving, because the cream softens the meringue. Whip the cream with a little sugar, layer it with the strawberries between the discs and finish with more cream and fruit. Cut it with a serrated knife, using a gentle sawing motion.',
    ing: [
      '6 egg whites',
      '300 g caster sugar',
      '1 tsp cornflour',
      '1 tsp white wine vinegar',
      '400 ml double cream',
      '2 tbsp icing sugar',
      '1 tsp vanilla extract',
      '500 g strawberries, hulled and sliced'
    ],
    st: [
      'Heat the oven to 100C. Draw three 20 cm circles on baking paper and turn the paper over onto trays.',
      'Whisk the egg whites to stiff peaks. Add the sugar a spoonful at a time, whisking until glossy and not gritty. Fold in the cornflour and vinegar.',
      'Spread the meringue within the circles, making the edges slightly higher.',
      'Bake for 90 minutes, then switch off the oven and leave the meringues inside until cold.',
      'Whip the cream with the icing sugar and vanilla.',
      'Layer the discs with cream and strawberries and finish with cream and fruit. Serve within a few hours.'
    ],
    tips: [
      'Add the sugar a spoonful at a time and whisk until it dissolves.',
      'Leave the meringues to cool in the switched-off oven.',
      'Assemble close to serving so the meringue stays crisp.'
    ],
    pair: ['Fresh strawberries', 'Sparkling wine', 'Coffee'],
    store: 'The meringue discs keep for 1 week in an airtight tin. Assemble just before serving.',
    nut: [366, 4, 47, 18, 1, 45, 60]
  },

  'pate-a-choux': {
    d: 'The classic French pastry of water, butter, flour and eggs, piped and baked for 30 minutes into hollow, crisp choux buns.',
    meta: 'Pâte à choux, a basic choux pastry for buns, baked for 30 minutes at 200C. Twenty buns, ready in 50 minutes.',
    kw: ['pate a choux', 'choux pastry', 'basic choux buns', 'french choux pastry recipe', 'hollow crisp choux puffs'],
    why: 'Water, butter, flour and eggs make a pastry that rises into hollow, crisp shells with nothing added to raise it. The only lift comes from steam, which is why a choux has to be baked hot and left alone.\n\nThe method has four moves, and each has a reason. Boil the water and butter together so the butter is fully melted before the flour goes in; **tip in all the flour at once** and beat hard until the paste forms a ball and a thin film cooks onto the base of the pan. That cooking dries out the paste, so it can take up more egg. Cool it for 5 minutes, or the eggs will scramble.\n\nBeat in the eggs a little at a time. The paste should become glossy and fall from the spoon in a slow, thick V shape; you may not need all the egg. Pipe small mounds onto a lined tray and bake without opening the door for the first 20 minutes, or the steam escapes and they collapse. Pierce the base of each to let the steam out and dry them in the oven for 5 minutes.',
    ing: [
      '125 ml water',
      '60 g butter',
      '1 pinch salt',
      '1 tsp caster sugar',
      '75 g plain flour',
      '2 to 3 eggs, beaten',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Heat the oven to 200C and line two trays with baking paper.',
      'Boil the water, butter, salt and sugar until the butter melts. Tip in the flour and beat for 2 minutes until the paste forms a ball and leaves a film on the pan. Cool for 5 minutes.',
      'Beat in the eggs a little at a time until the paste is glossy and falls from the spoon in a thick V.',
      'Pipe 20 mounds onto the trays and brush with the glaze, smoothing down any peaks.',
      'Bake for 25 minutes without opening the oven, until golden. Pierce each base and bake for 5 minutes more to dry.',
      'Cool on a rack.'
    ],
    tips: [
      'Cook the paste in the pan until a film forms on the base.',
      'Add the eggs gradually; you may not need them all.',
      'Do not open the oven in the first 20 minutes.'
    ],
    pair: ['Whipped cream', 'Crème pâtissière', 'Chocolate sauce'],
    store: 'The empty shells keep for 2 days in a tin or freeze for 1 month. Fill just before serving.',
    nut: [43, 1, 3, 3, 0, 0, 20]
  },

  'chantilly': {
    d: 'Cold double cream whipped with a little icing sugar and vanilla into soft peaks, ready in 5 minutes with no cooking.',
    meta: 'Chantilly, whipped cream with icing sugar and vanilla, ready in 5 minutes with no cooking. Eight servings.',
    kw: ['chantilly cream', 'chantilly', 'sweetened whipped cream with vanilla', 'french whipped cream', 'how to make chantilly cream'],
    why: 'Chantilly is whipped cream with a little sugar and vanilla, and its name is the one used in French pastry kitchens for the cream that goes on everything. The cream is the whole matter, and it must be cold.\n\nPut the bowl and whisk in the freezer for 10 minutes first. Cold fat holds air, and warm cream turns to butter before it whips. Use double cream or whipping cream, which has at least 35 per cent fat, because lighter cream will not hold its shape. **Start slowly and speed up** as it thickens: the cream goes from liquid to thick to soft peaks in about 3 minutes by hand.\n\nAdd the icing sugar and vanilla as it begins to thicken, because the sugar dissolves faster than caster sugar and the cream stays smooth. Stop whisking when the cream holds a soft peak that folds over at the tip. Another 10 seconds takes it to a grainy, buttery state, and once it has turned, it cannot be saved. Use it at once on tarts, fruit, waffles and cakes.',
    ing: [
      '300 ml double cream, very cold',
      '2 tbsp icing sugar',
      '1 tsp vanilla extract'
    ],
    st: [
      'Chill a bowl and whisk in the freezer for 10 minutes.',
      'Pour in the cream and whisk slowly, speeding up as it thickens.',
      'Add the icing sugar and vanilla and whisk to soft peaks.',
      'Use at once.'
    ],
    tips: [
      'Chill the bowl, whisk and cream.',
      'Stop whisking at soft peaks.',
      'Use icing sugar, which dissolves quickly.'
    ],
    pair: ['Strawberries', 'Tarts', 'Waffles', 'Hot chocolate'],
    store: 'Best fresh. Keeps for 1 day covered in the fridge; whisk briefly to refresh.',
    nut: [137, 1, 4, 13, 0, 4, 10]
  },

  'sabayon': {
    d: 'A frothy warm custard of egg yolks, sugar and sweet white wine, whisked over simmering water until it triples in volume.',
    meta: 'Sabayon, a warm frothy wine custard, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['sabayon', 'french sabayon', 'warm egg yolk and wine custard', 'zabaglione style dessert', 'frothy wine custard for fruit'],
    why: 'Whisk without stopping. That is the whole recipe, and the part people skip, because the foam sets in about 10 minutes of constant movement and scrambles in seconds if you walk away. A sabayon is egg yolks, sugar and wine whisked over barely simmering water until the mixture is thick, pale and airy.\n\nUse a large bowl that fits over a pan without touching the water. The water should simmer very gently, because steam does the cooking and a boil makes the yolks seize. **Keep the whisk moving across the whole base** of the bowl, including the edges, where the heat is strongest. The mixture first turns frothy, then pale and thick, and then forms a ribbon that holds its shape for a moment. That is the moment to stop.\n\nServe it at once, spooned over berries or peaches, because it falls within minutes. The wine sets the flavour: a sweet white wine, Champagne or Marsala are the traditional choices. For a baked finish, spoon it over fruit and brown it under a hot grill for 1 minute.',
    ing: [
      '4 egg yolks',
      '60 g caster sugar',
      '100 ml sweet white wine',
      '300 g raspberries',
      '1 tsp lemon juice'
    ],
    st: [
      'Put the egg yolks, sugar and wine in a large heatproof bowl set over a pan of barely simmering water.',
      'Whisk constantly for 8 to 10 minutes until the mixture triples in volume and forms a thick ribbon. Do not stop whisking.',
      'Toss the raspberries with the lemon juice and divide between four glasses.',
      'Spoon the warm sabayon over the fruit and serve at once.'
    ],
    tips: [
      'Keep the water barely simmering.',
      'Whisk the whole base of the bowl without stopping.',
      'Serve at once; it deflates within minutes.'
    ],
    pair: ['Raspberries', 'Peaches', 'Sponge fingers'],
    store: 'Eat at once; it does not keep.',
    nut: [173, 7, 25, 5, 5, 19, 60]
  },

  'langues-de-chat': {
    d: 'Thin, crisp, finger-shaped butter biscuits made from a soft batter piped into long strips and baked for 10 minutes.',
    meta: 'Langues de chat, thin crisp butter biscuits, baked for 10 minutes at 190C. Forty biscuits, ready in 25 minutes.',
    kw: ['langues de chat', 'cat tongue biscuits', 'thin french butter biscuits', 'crisp piped butter fingers', 'langues de chat recipe'],
    why: 'It is the season for ice cream, and these are what to serve with it. Langues de chat are thin, crisp, pale biscuits with golden edges, piped in short fingers and baked in minutes, and they snap against a soft scoop.\n\nThe batter has four ingredients and no raising agent: butter, icing sugar, egg whites and flour. Beat the soft butter and icing sugar until light, add the egg whites a little at a time, and fold in the flour. **The batter should be thick enough to hold its shape** but soft enough to pipe, like a loose cream. If it spreads when piped, add a spoonful of flour.\n\nPipe the strips about 6 cm long and well apart on a lined tray, because they spread to double the width. Bake until the edges are golden and the centres still pale, which takes about 10 minutes, and cool them on a rack, where they crisp. They burn quickly, so watch the last few minutes. Pack them airtight as soon as they are cold.',
    ing: [
      '100 g butter, softened',
      '100 g icing sugar',
      '3 egg whites',
      '100 g plain flour',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 190C and line two trays.',
      'Beat the butter and icing sugar for 3 minutes until pale. Beat in the egg whites a little at a time, then the vanilla.',
      'Fold in the flour and salt to a soft batter.',
      'Pipe 6 cm strips onto the trays, well apart.',
      'Bake one tray at a time for 10 minutes until the edges are golden.',
      'Cool on a rack.'
    ],
    tips: [
      'Pipe well apart; the biscuits spread.',
      'Watch the last 2 minutes; they colour fast.',
      'Store airtight as soon as they are cold.'
    ],
    pair: ['Ice cream', 'Sorbet', 'Coffee', 'Mousse'],
    store: 'Keeps for 1 week in an airtight tin.',
    nut: [38, 1, 4, 2, 0, 3, 10]
  },

  'marrons-glaces': {
    d: 'Peeled chestnuts simmered in vanilla sugar syrup over two days until glossy and tender, then dried in a low oven.',
    meta: 'Marrons glacés, chestnuts candied in vanilla syrup, cooked for 1 hour. Twenty pieces, ready in 1 hour 30 minutes plus overnight resting.',
    kw: ['marrons glaces', 'candied chestnuts', 'glazed chestnuts in vanilla syrup', 'french candied chestnut recipe', 'homemade marrons glaces'],
    why: 'Why do real marrons glacés take days? Because the chestnuts must be soaked slowly in syrup, and fast cooking makes them split and turn to crumbs. They are among the hardest sweets to make at home, and this version shortens the work, using cooked and peeled chestnuts, but it still asks for patience.\n\nStart with whole peeled chestnuts, which are sold vacuum packed, and choose the largest, most perfect ones. Simmer them in a syrup of sugar, water and a vanilla pod for 30 minutes, then leave them in the syrup overnight so they absorb it. **Handle them as little as possible**, lifting with a slotted spoon, because they are fragile and a broken chestnut is only good for purée.\n\nThe next day, bring the syrup up again and simmer for 30 minutes, then leave them to cool in it. Lift them onto a rack and dry them in a 100C oven for 1 hour, until the surface is tacky and no longer wet. Brush with a little warm syrup for gloss and wrap each in foil. They are a Christmas treat, and they keep for weeks.',
    ing: [
      '500 g whole peeled cooked chestnuts',
      '400 g caster sugar',
      '400 ml water',
      '2 g vanilla pod, split',
      '1 tbsp glucose syrup'
    ],
    st: [
      'Stir the sugar, water, vanilla pod and glucose syrup in a wide pan until dissolved and bring to a gentle simmer.',
      'Add the chestnuts in a single layer and simmer very gently for 30 minutes. Take off the heat, cover and leave overnight.',
      'The next day, bring the syrup back to a gentle simmer for 30 minutes, then cool in the syrup.',
      'Heat the oven to 100C. Lift the chestnuts onto a rack with a slotted spoon and dry for 1 hour until tacky.',
      'Brush with a little warm syrup and wrap each in foil.'
    ],
    tips: [
      'Choose whole, unbroken chestnuts and handle them gently.',
      'Keep the syrup at a bare simmer.',
      'Leave the chestnuts overnight in the syrup.'
    ],
    pair: ['Coffee', 'Champagne', 'Dark chocolate'],
    store: 'Keeps for 3 weeks wrapped in foil in an airtight tin.',
    rest: [480, 'Soaking overnight'],
    nut: [128, 1, 31, 0, 2, 23, 5]
  },

  'confiture-de-fraises': {
    d: 'Strawberry jam made by macerating the fruit in sugar overnight, then boiling for 30 minutes until it sets.',
    meta: 'Confiture de fraises, a soft-set strawberry jam, cooked for 30 minutes. Makes about 1 kg, ready in 45 minutes plus overnight resting.',
    kw: ['confiture de fraises', 'french strawberry jam', 'homemade strawberry jam', 'soft set strawberry preserve', 'strawberry jam with lemon'],
    why: 'The first sign it is ready is the sound: the bubbles change from big and noisy to small and glossy, and the jam begins to thicken on the spoon. Until then it is runny syrup with fruit in it, and the temptation is to take it off too early.\n\nSugar and fruit left together overnight draw out the juice and soften the berries, so the jam cooks faster and keeps its colour and shape. Strawberries are low in pectin, which is what makes jam set, so lemon juice is added to supply acid and a little extra pectin. **Cook it fast at a full rolling boil**, because a long, slow simmer turns the fruit brown and the flavour dull.\n\nTest for the set by putting a spoonful on a chilled saucer, waiting a minute and pushing it with your finger. If it wrinkles, it is ready; if it runs, boil for 3 minutes more and test again. A thermometer reading of 105C is a good guide. Skim off the foam, pot in warm sterilised jars and seal. It makes a soft, spoonable jam that is closer to fruit than to jelly.',
    ing: [
      '1 kg strawberries, hulled',
      '700 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Layer the strawberries and sugar in a large bowl, cover and leave overnight.',
      'Put a saucer in the freezer. Tip the fruit and juices into a wide pan with the lemon juice and heat gently until the sugar dissolves.',
      'Bring to a full rolling boil and cook for 25 minutes, stirring, skimming off the foam, until it reaches 105C.',
      'Test a spoonful on the cold saucer; it should wrinkle when pushed. Boil for 3 minutes more if not.',
      'Cool for 10 minutes, then pot in warm sterilised jars and seal.'
    ],
    tips: [
      'Macerate the fruit overnight in the sugar.',
      'Boil hard to keep the colour and flavour.',
      'Test the set on a chilled saucer.'
    ],
    pair: ['Buttered toast', 'Croissants', 'Scones', 'Yoghurt'],
    store: 'Keeps for 6 months in sealed jars in a cool place. Refrigerate once opened.',
    rest: [480, 'Macerating overnight'],
    nut: [156, 0, 39, 0, 1, 37, 5]
  },

  'sauce-veloute': {
    d: 'A basic French white sauce made by whisking pale butter and flour roux into hot chicken stock and simmering until glossy, 25 minutes.',
    meta: 'Sauce velouté, a basic white sauce from a pale roux and chicken stock, cooked for 20 minutes. Six servings, ready in 25 minutes.',
    kw: ['sauce veloute', 'french veloute sauce', 'white roux and stock sauce', 'basic veloute sauce', 'mother sauce for chicken and fish'],
    why: 'Why does a velouté taste so different from a béchamel? Because it is thickened stock, not milk. The same pale roux of butter and flour is used, but chicken or fish stock goes in, and the sauce comes out lighter, more savoury and almost translucent when it is right.\n\nCook the roux for only 2 minutes, just until it smells of biscuits and has not coloured, since the sauce is meant to be pale. Take it off the heat and add the hot stock gradually, whisking each addition into a smooth paste before adding more. **Use warm stock** and a whisk, because cold liquid against hot roux makes lumps. Return it to the heat and simmer very gently for 20 minutes, stirring often, skimming any skin that forms.\n\nThe long simmer cooks out the taste of raw flour and reduces the sauce until it coats the back of a spoon. Strain if you want it perfectly smooth. It is a base for many sauces, from mushroom to mustard, or served plain with poached chicken. A spoonful of cream and a squeeze of lemon turns it into a finished sauce.',
    ing: [
      '40 g butter',
      '40 g plain flour',
      '600 ml chicken stock, warm',
      '1/4 tsp salt',
      '1/4 tsp white pepper',
      '1 tsp lemon juice',
      '2 tbsp double cream'
    ],
    st: [
      'Melt the butter in a pan over low heat. Stir in the flour and cook for 2 minutes without colouring.',
      'Take off the heat and whisk in the warm stock a little at a time until smooth.',
      'Return to a gentle heat and simmer for 20 minutes, stirring often, until the sauce coats a spoon.',
      'Strain if you like. Stir in the salt, pepper, lemon juice and cream.'
    ],
    tips: [
      'Cook the roux for only 2 minutes so it stays pale.',
      'Add warm stock gradually while whisking.',
      'Simmer long enough to lose the taste of raw flour.'
    ],
    pair: ['Poached chicken', 'Steamed fish', 'Boiled vegetables', 'Pies'],
    store: 'Keeps for 3 days in the fridge with cling film on the surface.',
    nut: [95, 2, 6, 7, 0, 0, 430]
  },

  'gaufres-liegeoises': {
    d: 'Rich, chewy yeast waffles studded with pearl sugar that caramelises on the iron, from a dough risen for an hour, cooked for 20 minutes.',
    meta: 'Gaufres liégeoises, yeast waffles with caramelised pearl sugar, cooked for 20 minutes. Eight waffles, ready in 50 minutes plus rising.',
    kw: ['gaufres liegeoises', 'liege waffles', 'belgian pearl sugar waffles', 'yeast waffles with caramelised sugar', 'chewy belgian waffles'],
    why: 'It looks like a waffle and eats like a brioche, which is the main difference between a Liège waffle and the light, crisp kind. The batter is really a dough, made from flour, yeast, eggs and a lot of butter, and it is stiff enough to be shaped into balls and set in the iron.\n\nThe pearl sugar is the other half of the recipe. These are hard lumps of sugar that do not melt into the dough, and stay whole until they meet the hot iron, where they melt into a crisp, caramelised crust. Without them, the waffle is plain. **Fold the sugar in at the last moment**, after the dough has risen, so it has no time to dissolve into the dough.\n\nLet the dough rise for an hour until doubled, divide it into balls and rest them for 10 minutes. Cook in a hot, lightly oiled waffle iron for 3 to 4 minutes, until the sugar is dark gold and the waffle is firm. Take care, because the melted sugar is hot. Eat them warm and plain, without toppings, as they are sweet enough.',
    ing: [
      '300 g strong white bread flour',
      '7 g fast action yeast',
      '1/2 tsp salt',
      '1 tbsp caster sugar',
      '2 eggs',
      '100 ml whole milk, warm',
      '150 g butter, softened',
      '150 g pearl sugar',
      '1 tsp vanilla extract'
    ],
    st: [
      'Mix the flour, yeast, salt and caster sugar. Add the eggs, warm milk and vanilla and knead for 5 minutes. Add the butter a little at a time and knead for 8 minutes until smooth and glossy.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Fold in the pearl sugar and divide into 8 balls. Rest for 10 minutes.',
      'Heat the waffle iron. Cook each ball for 3 to 4 minutes until deep golden and the sugar has caramelised.',
      'Lift out carefully and cool for 2 minutes before eating.'
    ],
    tips: [
      'Fold in the pearl sugar after the dough has risen.',
      'Cook until the sugar is dark gold.',
      'Take care; the caramelised sugar is very hot.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Fresh strawberries'],
    store: 'Best fresh. Keeps for 2 days in a tin and re-crisps in a toaster.',
    rest: [60, 'Rising'],
    nut: [346, 6, 40, 18, 1, 23, 350]
  },

  'waterzooi': {
    d: 'A creamy Belgian stew of chicken, leeks, carrots and potatoes simmered in stock and thickened with egg yolks and cream.',
    meta: 'Waterzooi, a creamy Belgian chicken and vegetable stew, cooked for 40 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['waterzooi', 'belgian chicken waterzooi', 'creamy chicken and vegetable stew', 'chicken stew with cream and egg yolk', 'belgian ghent stew'],
    why: 'This is what to make in the first cold week, when a pot of something creamy and savoury is the right answer. Waterzooi sits halfway between a soup and a stew: chicken and vegetables cooked in a light broth, which is then enriched at the end with egg yolks and cream.\n\nThe chicken is poached, not browned, so the broth stays pale and clean. Add leeks, carrots, celery and potato to the pot and simmer until everything is tender. Lift out the chicken, pull the meat off the bone in large pieces and return it to the pot. **Take the pot off the heat before the liaison goes in.** Whisk the yolks with the cream, stir in a ladle of the hot broth to warm them, then pour the mixture back into the pot.\n\nIf the stew boils after that, the yolks scramble and the broth turns grainy, so keep it just below a simmer for the last few minutes. A squeeze of lemon and a handful of parsley lift the flavour. Serve in wide bowls with crusty bread, or boiled potatoes if you leave them out of the pot.',
    ing: [
      '1.2 kg chicken thighs and drumsticks',
      '1.2 litres chicken stock',
      '2 leeks, sliced',
      '3 carrots, diced',
      '2 celery sticks, sliced',
      '400 g potatoes, diced',
      '1 bay leaf',
      '3 egg yolks',
      '150 ml double cream',
      '1 tbsp lemon juice',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Put the chicken, stock and bay leaf in a large pot, bring to a simmer and cook for 20 minutes, skimming.',
      'Add the leeks, carrots, celery and potatoes and simmer for 20 minutes until tender.',
      'Lift out the chicken, remove the skin and bones and return the meat to the pot.',
      'Take the pot off the heat. Whisk the yolks with the cream and a ladle of hot broth, then stir into the stew.',
      'Warm gently without boiling for 3 minutes. Stir in the lemon juice and parsley.'
    ],
    tips: [
      'Poach the chicken gently so the broth stays pale.',
      'Add the egg and cream liaison off the heat.',
      'Do not let the stew boil once the yolks are in.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Boiled potatoes'],
    store: 'Keeps for 2 days in the fridge. Reheat very gently.',
    nut: [711, 71, 37, 31, 5, 8, 1390]
  },

  'cuberdons': {
    d: 'Small cone-shaped sweets with a hard shell and a soft fruit syrup centre, made from a gum arabic and sugar mix that dries for a day.',
    meta: 'Cuberdons, cone-shaped sweets with a soft raspberry centre, cooked for 1 hour. Forty sweets, ready in 1 hour 20 minutes plus a day of drying.',
    kw: ['cuberdons', 'belgian cone sweets', 'gum arabic cone candy', 'raspberry cuberdons', 'neuzekes belgian candy'],
    why: 'What makes a cuberdon crack and run on the tongue? A thin, brittle skin of dried gum around a liquid centre, and the whole sweet depends on drying the shape at the right pace. It is a confection that takes patience and a few unusual ingredients, but nothing in it is difficult.\n\nGum arabic, sold as a powder, dissolves slowly in water, so it is soaked and gently warmed, never boiled. Mix it with sugar syrup and raspberry flavouring, and pour it into a tray of mould shapes pressed into cornflour. **The cornflour mould is what gives the cone its form**, so the impressions must be clean and deep. Pour carefully, because a splash ruins the shape.\n\nLeave the filled tray in a warm, dry room for 24 hours. The outside of each sweet dries to a skin while the inside stays liquid. Lift them out with your fingers, brush off the cornflour and roll them in a little sugar. They keep for a week in an airtight box, and they soften in damp air.',
    ing: [
      '100 g gum arabic powder',
      '300 ml water',
      '300 g caster sugar',
      '100 ml raspberry syrup',
      '1 tsp lemon juice',
      '500 g cornflour, for the tray',
      '3 tbsp caster sugar, for rolling'
    ],
    st: [
      'Stir the gum arabic into the water, cover and leave for 4 hours until dissolved. Warm very gently if lumps remain.',
      'Boil the sugar with 100 ml water to 105C. Cool for 10 minutes and stir into the gum with the raspberry syrup and lemon juice.',
      'Fill a deep tray with the cornflour, level it and press small cone shapes into it, 3 cm apart.',
      'Pour the mixture carefully into the impressions.',
      'Leave in a warm, dry room for 24 hours until a skin forms.',
      'Lift out, brush off the cornflour and roll in the sugar.'
    ],
    tips: [
      'Never boil the gum arabic.',
      'Make the cornflour impressions clean and deep.',
      'Dry the sweets in a warm, dry room.'
    ],
    pair: ['Tea', 'Coffee', 'Gift box'],
    store: 'Keeps for 1 week in an airtight box in a dry place.',
    rest: [1680, 'Dissolving the gum and drying the sweets'],
    nut: [88, 0, 22, 0, 2, 9, 5]
  },

  'chicons-au-gratin': {
    d: 'Chicory heads wrapped in ham and baked in a cheese béchamel until bubbling, with the endives first braised for 20 minutes.',
    meta: 'Chicons au gratin, ham-wrapped chicory baked in cheese sauce, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['chicons au gratin', 'belgian chicory and ham gratin', 'endive wrapped in ham with cheese sauce', 'ham and chicory bake', 'witloof gratin'],
    why: 'Chicory, ham, cheese sauce and a potato on the side: that is a Belgian supper in four things. The bitterness of the chicory against a rich sauce is the point of the dish, and it is a good deal better than it sounds.\n\nThe usual complaint is bitterness, and the fix is to braise the chicory slowly in butter, with a pinch of sugar and a splash of water and lemon juice, until soft and golden. **Cut a small cone from the base of each head** to remove the hardest, most bitter part. Cover the pan so the steam softens them, then uncover to drive off the liquid, because a wet endive turns the sauce watery.\n\nWrap each head in a slice of ham, lay them in a dish and cover with a cheese béchamel. Bake until bubbling and browned. The sauce should be thick enough to coat a spoon, because the chicory releases a little water as it bakes. Serve with mashed potato, which is the traditional partner, to soak up the sauce.',
    ing: [
      '800 g chicory heads, about 8',
      '30 g butter',
      '1 tsp caster sugar',
      '1 tbsp lemon juice',
      '100 ml water',
      '8 slices cooked ham',
      '30 g butter, for the sauce',
      '30 g plain flour',
      '400 ml whole milk',
      '120 g Gruyère, grated',
      '1 pinch nutmeg'
    ],
    st: [
      'Heat the oven to 200C. Cut a cone from the base of each chicory head.',
      'Melt the first 30 g butter in a wide pan, add the chicory, sugar, lemon juice and water, cover and cook for 15 minutes. Uncover and cook for 5 minutes until the liquid has gone.',
      'Melt the second 30 g butter, stir in the flour, then whisk in the milk and simmer for 5 minutes. Stir in two thirds of the cheese and the nutmeg.',
      'Wrap each chicory head in a slice of ham and lay in a baking dish.',
      'Pour over the sauce, scatter with the remaining cheese and bake for 25 minutes until golden and bubbling.'
    ],
    tips: [
      'Remove the bitter core from the base of each head.',
      'Cook off the chicory\'s liquid before saucing.',
      'Serve with mashed potato to catch the sauce.'
    ],
    pair: ['Mashed potatoes', 'Boiled potatoes', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge. Reheat at 180C for 15 minutes.',
    nut: [440, 26, 21, 28, 6, 7, 900]
  },

  'boulets-liegeois': {
    d: 'Large pork and beef meatballs simmered in a sweet and sour gravy made with dark syrup, onion and stock for 40 minutes.',
    meta: 'Boulets liégeois, big meatballs in a sweet and sour syrup gravy, cooked for 40 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['boulets liegeois', 'liege style meatballs', 'belgian meatballs in sweet and sour sauce', 'meatballs with syrup gravy', 'belgian meatballs with chips'],
    why: 'It looks like a plate of ordinary meatballs and eats like nothing else, because the gravy is sweet and sour at once, made with a dark fruit syrup and vinegar, and it carries a flavour you do not find in an Italian sauce.\n\nThe meatballs are large, about the size of a small apple, and made from a half-and-half mix of pork and beef with breadcrumbs soaked in milk and a beaten egg. **Handle the mixture as little as possible**; pressing it makes the meat tough. Shape them with wet hands, brown them well in butter, and then lift them out while you build the gravy in the same pan.\n\nFry sliced onions until soft and golden, add a spoonful of flour, then stock, and stir in the syrup and a splash of vinegar. Return the meatballs and simmer, covered, for 30 minutes. The gravy should be glossy and thick. If you cannot find apple syrup, dark treacle works with a little extra vinegar. Serve with chips or mashed potato, which is how they are eaten.',
    ing: [
      '300 g pork mince',
      '300 g beef mince',
      '50 g fresh breadcrumbs',
      '80 ml whole milk',
      '1 egg',
      '1/2 tsp salt',
      '1 tbsp butter',
      '2 onions, sliced',
      '1 tbsp plain flour',
      '400 ml beef stock',
      '3 tbsp apple syrup or dark treacle',
      '1 tbsp cider vinegar'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes. Mix with the minces, egg and salt and shape into 4 large balls with wet hands.',
      'Brown the meatballs in the butter in a wide pan for 8 minutes. Lift out.',
      'Cook the onions in the same pan for 10 minutes until golden. Stir in the flour for 1 minute.',
      'Add the stock, syrup and vinegar and stir until smooth. Return the meatballs.',
      'Cover and simmer for 30 minutes, turning once, until the gravy is glossy and thick.'
    ],
    tips: [
      'Handle the mince lightly.',
      'Brown the meatballs well before simmering.',
      'Use dark treacle with extra vinegar if you cannot find apple syrup.'
    ],
    pair: ['Chips', 'Mashed potatoes', 'Red cabbage', 'Belgian beer'],
    store: 'Keeps for 3 days in the fridge. Reheat gently in the gravy.',
    nut: [493, 33, 25, 29, 1, 12, 850]
  },

  'tarte-au-sucre-belge': {
    d: 'A soft brioche-style tart filled with a mix of brown sugar, butter and cream that bakes into a caramelised custard, for 20 minutes.',
    meta: 'Tarte au sucre belge, a brown sugar and butter tart on soft dough, baked for 20 minutes. Eight servings, ready in 1 hour plus rising.',
    kw: ['tarte au sucre belge', 'belgian sugar tart', 'brown sugar tart on yeast dough', 'soft yeast tart with caramel filling', 'sugar pie tart'],
    why: 'Keep the filling thin. That is the one rule, and the part people skip, because sugar tarts look dull and taste of almost nothing if the filling is spread thick. Here it is a thin layer of brown sugar, butter and cream dotted on a soft yeast dough, and it melts in the oven into a caramel that soaks the top of the crust.\n\nThe dough is a basic enriched one, made with flour, yeast, milk, egg and butter, and it rises for an hour until puffy. Press it into a tin or onto a tray with floured fingers, and poke it all over with your fingertips to make little hollows. **Scatter the sugar and butter into those hollows**, so it stays put and bakes into small pockets of caramel rather than running to the edges.\n\nPour a few spoonfuls of cream over the top and bake until the edges are golden and the sugar has bubbled into a sticky glaze. The tart is best eaten warm, within a day, when the dough is still soft. Cut it into squares and serve with coffee. A little cinnamon over the sugar is a common variation.',
    ing: [
      '300 g strong white bread flour',
      '7 g fast action yeast',
      '1/2 tsp salt',
      '1 tbsp caster sugar',
      '1 egg',
      '120 ml whole milk, warm',
      '50 g butter, softened',
      '100 g light brown sugar',
      '50 g cold butter, cubed',
      '100 ml double cream'
    ],
    st: [
      'Mix the flour, yeast, salt and caster sugar. Add the egg and warm milk and knead for 5 minutes. Knead in the softened butter for 5 minutes until smooth.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Heat the oven to 200C. Press the dough into a lined 30 cm tray with floured fingers and poke it all over with your fingertips.',
      'Scatter the brown sugar and cubed butter into the hollows and drizzle with the cream.',
      'Bake for 20 minutes until golden and bubbling. Cool for 10 minutes and cut into squares.'
    ],
    tips: [
      'Keep the sugar filling thin and spread over the hollows.',
      'Poke the dough all over so the sugar sits in pockets.',
      'Eat it warm, on the day.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Best on the day. Keeps for 2 days in a tin.',
    rest: [60, 'Rising'],
    nut: [309, 5, 34, 17, 1, 17, 350]
  }
};
