'use strict';

/**
 * Volume forty-one — holiday dishes and party food.
 *
 * A Christmas-style roast turkey and its sides, cookies and cupcakes for
 * Christmas, Valentine's Day and Halloween, a Fourth of July trifle, party
 * snacks, and a few drinks and syrups. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * from the ingredient list by npm run calc.
 */

module.exports = {
  'white-hot-chocolate': {
    d: 'Hot milk melted with white chocolate and vanilla, poured into mugs and topped with cream and marshmallows.',
    meta: 'White hot chocolate: hot milk melted with white chocolate and vanilla, topped with cream. Two servings, ready in 13 minutes.',
    kw: ['white hot chocolate', 'homemade white hot chocolate', 'white chocolate hot chocolate', 'creamy white hot chocolate', 'white chocolate drink'],
    why: 'Why does white hot chocolate so often come out grainy? Because white chocolate scorches at a lower temperature than dark, and one hard boil turns it to gravel.\n\nWarm the milk to steaming and no further, about 6 minutes on low. Take the pan off the heat before the chocolate goes in. **Add the chopped chocolate and whisk for a full minute.** The residual heat melts it, and the whisking turns it into a smooth, pale drink.\n\nChop the chocolate small so that it melts in seconds. White chocolate bought as a bar works better than chips, which often contain stabilisers that stop them from melting evenly. A pinch of salt and a drop of vanilla cut the sweetness and give a cleaner flavour.\n\nPour into warm mugs and top with cream and a few mini marshmallows. Drink it while it is hot, because it thickens as it cools. If your hob runs hot, lift the pan off the heat as soon as steam rises.',
    ing: [
      '500 ml milk',
      '100 g white chocolate, chopped',
      '1/2 tsp vanilla extract',
      '1 pinch salt',
      '40 g whipped cream',
      '20 g mini marshmallows'
    ],
    st: [
      'Warm the milk in a pan over low heat for 6 minutes until steaming. Do not boil.',
      'Take the pan off the heat, add the white chocolate, vanilla and salt, and whisk for 1 minute until smooth.',
      'Pour into two warm mugs and top with the whipped cream and marshmallows.'
    ],
    tips: [
      'Do not boil the milk.',
      'Chop the chocolate small.',
      'If your hob runs hot, lift the pan off at the first steam.',
      'Use bar chocolate, not chips.'
    ],
    pair: ['Shortbread', 'Gingerbread', 'Biscotti', 'Fresh raspberries'],
    store: 'Best drunk at once.',
    nut: [531, 12, 51, 31, 0, 48, 250]
  },

  'white-sangria': {
    d: 'Dry white wine with brandy, orange juice and sliced apple, peach and grapes, topped with sparkling water.',
    meta: 'White sangria: dry white wine with brandy, orange juice, sliced fruit and sparkling water. Eight servings, chilled for 2 hours.',
    kw: ['white sangria', 'summer white sangria', 'easy white sangria', 'white wine sangria', 'sangria blanca'],
    why: 'Sangria began as a way of making an ordinary wine taste better, and the white version is the lightest of them. Fruit, a little spirit, and time in the fridge do all the work.\n\nChoose a dry, crisp white wine that you would be happy to drink on its own, such as a Spanish Verdejo or a Pinot Grigio. A sweet wine plus sweet fruit makes a drink that tastes like squash. **Let it chill for at least 2 hours before serving.** The fruit gives up its juice and the brandy softens the edges of the wine.\n\nSlice the apple and peach thinly and halve the grapes. Thin slices release their juice faster. The sugar is only a spoonful, to be adjusted at the end, since ripe fruit may supply all the sweetness needed.\n\nAdd the sparkling water at the last minute, so the sangria is fizzy when it reaches the glass. Serve over ice with some fruit in each glass.',
    ing: [
      '750 ml dry white wine',
      '60 ml brandy',
      '100 ml orange juice',
      '2 tbsp caster sugar',
      '1 apple, about 150 g, sliced',
      '1 peach, about 150 g, sliced',
      '100 g green grapes, halved',
      '250 ml sparkling water, chilled',
      '200 g ice cubes'
    ],
    st: [
      'Stir the wine, brandy, orange juice and sugar in a large jug until the sugar dissolves.',
      'Add the apple, peach and grapes. Cover and chill for 2 hours.',
      'Just before serving, add the sparkling water.',
      'Pour over ice and give each glass some fruit.'
    ],
    tips: [
      'Use a dry white wine.',
      'Chill for the full 2 hours.',
      'Add the sparkling water last.',
      'Taste before adding extra sugar.'
    ],
    pair: ['Tapas', 'Grilled prawns', 'Olives', 'Manchego'],
    store: 'Best on the day. Keeps in the fridge for 1 day without the sparkling water.',
    rest: [120, 'Chilling'],
    nut: [56, 0, 14, 0, 1, 11, 10]
  },

  'chocolate-milk': {
    d: 'Cold milk stirred into a quickly warmed paste of cocoa, sugar and vanilla.',
    meta: 'Chocolate milk: cold milk stirred into a warm paste of cocoa, sugar and vanilla. Two servings, ready in 8 minutes.',
    kw: ['chocolate milk', 'homemade chocolate milk', 'real chocolate milk', 'cocoa chocolate milk', 'chocolate milk from scratch'],
    why: 'Stir the cocoa into warm water first. That is the whole trick, and the part people skip when they shake cocoa into cold milk and wonder why the bottom of the glass is a lump.\n\nCocoa powder is dry and fine, and it floats. Cold milk will not wet it, and it forms clumps that no stirring will break. Put the cocoa, sugar and a pinch of salt into a small pan with 3 tablespoons of water and warm it for 3 minutes, stirring until it forms a glossy syrup. **The syrup is the secret.** It dissolves the sugar and releases the full flavour of the cocoa.\n\nThen whisk in the cold milk and the vanilla. Because the cocoa is already dissolved, the milk takes it up at once and the colour is even.\n\nChill the milk if you have time, or pour it over ice. The syrup keeps for a week in the fridge if you double the amount, ready to stir into a glass. Taste once and add a little more sugar if you like it sweeter.',
    ing: [
      '500 ml cold milk',
      '2 tbsp cocoa powder',
      '2 tbsp caster sugar',
      '3 tbsp water',
      '1/2 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Warm the cocoa, sugar, salt and water in a small pan over low heat for 3 minutes, stirring, until it forms a glossy syrup.',
      'Take off the heat and stir in the vanilla.',
      'Whisk in the cold milk until even. Pour into two glasses over ice if you like.'
    ],
    tips: [
      'Make the syrup first.',
      'Whisk, do not just stir.',
      'Chill the milk first for a colder drink.',
      'Taste and adjust the sugar.'
    ],
    pair: ['Biscuits', 'Sandwiches', 'Brownies', 'Toast'],
    store: 'Keeps in the fridge for 2 days. Shake before pouring.',
    nut: [229, 9, 28, 9, 2, 25, 190]
  },

  'strawberry-syrup': {
    d: 'A bright red syrup of strawberries, sugar, water and lemon, for milk, soda, pancakes and ice cream.',
    meta: 'Strawberry syrup: strawberries simmered with sugar, water and lemon into a bright red syrup. Makes about ten servings, cooked for 15 minutes.',
    kw: ['strawberry syrup', 'homemade strawberry syrup', 'strawberry syrup for milk', 'strawberry sauce for pancakes', 'strawberry syrup for drinks'],
    why: 'Salt the strawberries lightly and leave them for a few minutes before you start, and the syrup tastes of far more strawberry. That is the single most useful tip for this recipe.\n\nHull the berries and slice them. Simmer them with the sugar, water and lemon juice for 15 minutes, until the fruit is soft and the liquid is the colour of a ripe berry. **Skim off the foam as it rises.** It looks unattractive and clouds the syrup.\n\nMash the fruit lightly against the side of the pan. Pour the contents through a fine sieve and press the pulp gently with a spoon. The syrup should be thick enough to coat a spoon, and it thickens more as it cools. If you want it thicker, simmer it for a few more minutes after straining.\n\nPour into a clean bottle. Stir a spoonful into cold milk for strawberry milk, into sparkling water for a soda, or over pancakes or ice cream. If your hob runs hot, keep the bubbles slow.',
    ing: [
      '400 g strawberries, hulled and sliced',
      '150 g caster sugar',
      '100 ml water',
      '1 tbsp lemon juice'
    ],
    st: [
      'Simmer the strawberries, sugar, water and lemon juice over medium-low heat for 15 minutes, skimming the foam.',
      'Mash the fruit lightly, then strain through a fine sieve, pressing the pulp gently.',
      'Pour into a clean bottle and cool.'
    ],
    tips: [
      'Skim the foam.',
      'Press the pulp gently.',
      'If your hob runs hot, keep the heat low.',
      'Simmer longer for a thicker syrup.'
    ],
    pair: ['Cold milk', 'Pancakes', 'Vanilla ice cream', 'Sparkling water'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [72, 0, 18, 0, 1, 17, 5]
  },

  'herb-roasted-turkey': {
    d: 'A whole turkey rubbed with herb butter, stuffed with lemon, onion and garlic, and roasted until golden with a pan gravy.',
    meta: 'Herb roasted turkey: a whole turkey with herb butter, lemon and garlic, roasted for 3 hours with pan gravy. Ten servings.',
    kw: ['herb roasted turkey', 'roast turkey with herb butter', 'christmas roast turkey', 'thanksgiving roast turkey', 'whole turkey with herbs'],
    why: 'Get the butter under the skin. That is the most useful instruction for a roast turkey, and the one that makes the breast moist.\n\nWork your fingers between the skin and the meat of the breast, taking care not to tear it, and push the herb butter into the gap. The butter melts into the meat as the bird cooks. **Take the turkey out of the fridge an hour before roasting.** A bird straight from the cold cooks unevenly, and the breast dries out before the thigh is done.\n\nRoast at 180°C for about 3 hours, basting every 45 minutes, and cover the breast with foil if it browns too fast. If your oven runs hot, check at 2 hours 30 minutes. The turkey is done when the thickest part of the thigh reaches 74°C on a thermometer and the juices run clear.\n\nRest it under foil for 40 minutes before carving. The rest lets the juices settle, and the pan juices become the gravy.',
    ing: [
      '5000 g turkey',
      '150 g butter, softened',
      '30 g mixed herbs, chopped',
      '4 cloves garlic, crushed',
      '2 onions, about 300 g, quartered',
      '1 lemon, halved',
      '2 tsp salt',
      '1 tsp black pepper',
      '500 ml chicken stock',
      '2 tbsp plain flour'
    ],
    st: [
      'Take the turkey out of the fridge 1 hour ahead. Heat the oven to 180°C. Mix the butter with the herbs, garlic, salt and pepper.',
      'Loosen the skin over the breast and push two-thirds of the butter under it. Rub the rest over the skin.',
      'Put the onions and lemon in the cavity and set the turkey on a rack in a roasting tin. Pour in 250 ml of the stock.',
      'Roast for 3 hours, basting every 45 minutes, until the thigh reads 74°C and the juices run clear. Rest, covered, for 40 minutes.',
      'Stir the flour into the pan juices over medium heat, add the remaining stock and simmer for 5 minutes to make gravy.'
    ],
    tips: [
      'Put the butter under the skin.',
      'Bring the bird to room temperature first.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Use a thermometer.',
      'Rest it before carving.'
    ],
    pair: ['Roast potatoes', 'Cranberry sauce', 'Stuffing', 'Brussels sprouts'],
    store: 'Keeps in the fridge for 3 days. Reheat until steaming hot.',
    nut: [681, 81, 6, 37, 1, 1, 920]
  },

  'honey-glazed-carrots': {
    d: 'Carrots cooked in butter, honey and lemon until tender and glossy, with a sprinkle of thyme.',
    meta: 'Honey glazed carrots: carrots cooked in butter, honey and lemon until tender and glossy. Six servings, cooked for 20 minutes.',
    kw: ['honey glazed carrots', 'glazed carrots with honey', 'honey butter carrots', 'christmas glazed carrots', 'easy honey glazed carrots'],
    why: 'Carrots, butter, honey, lemon: four things that you may already own and a side dish that looks as if it took longer than it did.\n\nCut the carrots into even batons about 6 cm long, so that they cook at the same speed. Start them in a pan with the butter and a splash of water, covered, for 12 minutes, until almost tender. **Take the lid off for the last stage.** The water evaporates and the honey and butter reduce to a glaze that clings to the carrots.\n\nAdd the honey for the last 5 minutes only. Honey burns quickly, and if it goes in early it turns bitter before the carrots are cooked. Toss every minute or so, so that every piece is coated.\n\nFinish with the lemon juice and the thyme. The lemon cuts the sweetness and brings out the colour. Taste for salt, and serve at once. If your hob runs hot, lower the heat as soon as the glaze starts to bubble thickly.',
    ing: [
      '600 g carrots, peeled and cut into batons',
      '30 g butter',
      '100 ml water',
      '2 tbsp honey',
      '1 tbsp lemon juice',
      '1 tsp thyme leaves',
      '1/2 tsp salt'
    ],
    st: [
      'Put the carrots, butter, water and salt in a wide pan. Cover and cook over medium heat for 12 minutes.',
      'Take off the lid, add the honey and cook for 5 minutes more, tossing often, until the liquid has become a glaze.',
      'Stir in the lemon juice and thyme and serve at once.'
    ],
    tips: [
      'Cut the carrots evenly.',
      'Add the honey late.',
      'If your hob runs hot, lower the heat at the glaze stage.',
      'Toss often.'
    ],
    pair: ['Roast turkey', 'Roast chicken', 'Mashed potato', 'Roast ham'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [104, 1, 16, 4, 3, 11, 270]
  },

  'candy-cane-cookies': {
    d: 'Twisted ropes of vanilla and peppermint cookie dough, half of it dyed red, baked into candy cane shapes.',
    meta: 'Candy cane cookies: ropes of vanilla and peppermint dough, half dyed red, twisted and baked. Makes twenty-four, baked for 12 minutes.',
    kw: ['candy cane cookies', 'christmas candy cane cookies', 'peppermint candy cane cookies', 'twisted candy cane cookies', 'red and white candy cane cookies'],
    why: 'Most candy cane cookies spread into blobs in the oven, and the fix is to chill the dough before you shape it.\n\nMake one batch of buttery dough with a little peppermint extract, divide it in half and colour one half red with gel colouring. Gel gives a strong colour without making the dough wet. **Chill both halves for 30 minutes.** Cold dough holds a twist, and warm dough sags into a stripe.\n\nRoll a teaspoon of each colour into ropes about 10 cm long, lay them side by side and twist them together. Bend the top into a hook and set the cookies on a lined tray, 3 cm apart.\n\nBake at 180°C for 12 minutes, until the edges are only just pale gold. If your oven runs hot, check at 9 minutes. Cool on the tray for 5 minutes before moving them, since they are fragile warm. Tie one to a gift with ribbon.',
    ing: [
      '225 g butter, softened',
      '150 g caster sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '1/2 tsp peppermint extract',
      '300 g plain flour',
      '1/2 tsp salt',
      '2 g red gel food colouring'
    ],
    st: [
      'Beat the butter and sugar for 3 minutes until pale. Beat in the egg, vanilla and peppermint extract.',
      'Stir in the flour and salt to a soft dough. Divide it in half and knead the red colouring into one half.',
      'Wrap both halves and chill for 30 minutes. Heat the oven to 180°C and line two trays.',
      'Roll a teaspoon of each colour into 10 cm ropes, twist them together and bend the top into a hook. Set 3 cm apart.',
      'Bake for 12 minutes until the edges are pale gold. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Chill the dough.',
      'Use gel colouring.',
      'If your oven runs hot, check at 9 minutes.',
      'Do not move the cookies while they are warm.'
    ],
    pair: ['Hot chocolate', 'Milk', 'Mulled cider', 'Tea'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [144, 2, 16, 8, 0, 6, 50]
  },

  'halloween-cupcakes': {
    d: 'Chocolate cupcakes topped with orange buttercream and orange and black sprinkles.',
    meta: 'Halloween cupcakes: chocolate cupcakes with orange buttercream and sprinkles. Makes twelve, baked for 20 minutes.',
    kw: ['halloween cupcakes', 'halloween cupcakes with chocolate', 'chocolate halloween cupcakes', 'halloween cupcakes with orange frosting', 'spooky cupcakes'],
    why: 'A dark chocolate sponge under bright orange frosting is the whole look, and it needs no piping skills. The effect depends on the contrast.\n\nThe sponge is a quick one-bowl chocolate batter. Cocoa gives the colour and a bitter note, which is what keeps the sweet frosting from being sickly. **Do not overfill the paper cases.** Two-thirds full gives a gentle dome that holds the frosting without spilling.\n\nThe buttercream is butter, icing sugar and a spoonful of milk, beaten for 3 minutes until pale and fluffy. Orange gel colouring gives a strong shade with only a drop. Add it a little at a time, because it deepens as it stands.\n\nBake at 180°C for 20 minutes. If your oven runs hot, check at 16 minutes. Cool completely before icing, or the frosting slides off. Pipe or swirl the frosting on and scatter the sprinkles over it while it is soft.',
    ing: [
      '150 g plain flour',
      '30 g cocoa powder',
      '1 1/2 tsp baking powder',
      '150 g caster sugar',
      '2 eggs, about 100 g',
      '100 g butter, melted',
      '120 ml milk',
      '120 g butter, softened, for the frosting',
      '250 g icing sugar',
      '2 tbsp milk for the frosting',
      '2 g orange gel food colouring',
      '20 g orange and black sprinkles'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole muffin tin. Whisk the flour, cocoa, baking powder and sugar.',
      'Whisk the eggs, melted butter and 120 ml milk, pour into the dry mixture and stir until smooth.',
      'Fill the cases two-thirds full and bake for 20 minutes until a skewer comes out clean. Cool completely.',
      'Beat the softened butter, icing sugar, 2 tbsp milk and food colouring for 3 minutes. Swirl onto the cupcakes and add the sprinkles.'
    ],
    tips: [
      'Fill the cases two-thirds full.',
      'Cool before icing.',
      'If your oven runs hot, check at 16 minutes.',
      'Add the colouring a little at a time.'
    ],
    pair: ['Cold milk', 'Hot chocolate', 'Apple cider', 'Popcorn'],
    store: 'Best on the day. Keeps in an airtight tin for 2 days.',
    nut: [353, 3, 47, 17, 1, 35, 80]
  },

  'heart-shaped-cookies': {
    d: 'Vanilla sugar cookies cut into hearts and decorated with a thin pink icing.',
    meta: 'Heart shaped cookies: vanilla sugar cookies cut into hearts with pink icing. Makes twenty, baked for 12 minutes.',
    kw: ['heart shaped cookies', 'valentine heart cookies', 'heart shaped sugar cookies', 'iced heart cookies', 'valentines day cookies'],
    why: 'It looks like a simple cookie and behaves like a stubborn one. The difference between a sharp heart and a puffy blob is a matter of keeping the dough cold and the cutter floured.\n\nRoll the dough between two sheets of baking paper, to 5 mm thick, so that you need no extra flour. Extra flour toughens the cookies. Chill the rolled sheet for 15 minutes, then cut. **Cut as many hearts as you can before re-rolling.** Dough that has been worked twice bakes harder.\n\nTransfer the hearts to a lined tray with a palette knife, 2 cm apart. Bake at 180°C for 12 minutes, until the edges have just begun to turn pale gold. If your oven runs hot, check at 9 minutes.\n\nCool them completely before icing. The icing is only icing sugar, milk and a drop of pink colouring, spread with the back of a teaspoon. Let it set for an hour. Hearts keep well in a tin, and make a good gift.',
    ing: [
      '225 g butter, softened',
      '150 g caster sugar',
      '1 egg, about 50 g',
      '1 tsp vanilla extract',
      '300 g plain flour',
      '1/4 tsp salt',
      '150 g icing sugar',
      '2 tbsp milk',
      '0.1 g pink food colouring'
    ],
    st: [
      'Beat the butter and caster sugar for 3 minutes. Beat in the egg and vanilla, then stir in the flour and salt to a dough.',
      'Roll the dough to 5 mm between two sheets of baking paper. Chill for 15 minutes and heat the oven to 180°C.',
      'Cut hearts with a 6 cm cutter and set them 2 cm apart on lined trays. Bake for 12 minutes until the edges are pale gold. Cool completely.',
      'Stir the icing sugar with the milk and colouring and spread over the hearts. Leave to set.'
    ],
    tips: [
      'Roll between baking paper.',
      'Chill before cutting.',
      'If your oven runs hot, check at 9 minutes.',
      'Ice only when cold.'
    ],
    pair: ['Hot chocolate', 'Strawberries', 'Cold milk', 'Tea'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [206, 2, 27, 10, 0, 15, 30]
  },

  'red-velvet-cupcakes': {
    d: 'Red cocoa cupcakes made with buttermilk and a little vinegar, topped with cream cheese frosting.',
    meta: 'Red velvet cupcakes: red cocoa cupcakes with buttermilk and cream cheese frosting. Makes twelve, baked for 20 minutes.',
    kw: ['red velvet cupcakes', 'classic red velvet cupcakes', 'red velvet cupcakes with cream cheese frosting', 'homemade red velvet cupcakes', 'moist red velvet cupcakes'],
    why: 'Flour, cocoa, buttermilk, oil, red colouring: what makes red velvet different from a chocolate cake is how little cocoa it has. The flavour is a faint chocolate, with a tang from the buttermilk.\n\nThe vinegar and bicarbonate react to give a soft, tender crumb. Stir the vinegar into the buttermilk just before it goes into the batter, so that the fizz does its work in the oven rather than in the bowl. **Mix the batter only until the flour disappears.** Overmixed batter is tough and the red turns brown.\n\nColouring is a matter of taste. A tablespoon of liquid red colouring gives a deep red, and gel gives the same effect with less. Beetroot juice is milder and produces a more dusky colour.\n\nBake at 180°C for 20 minutes. If your oven runs hot, check at 16 minutes. Cool completely, then swirl on the cream cheese frosting. Keep the frosted cakes cool, since the cheese frosting softens at room temperature.',
    ing: [
      '200 g plain flour',
      '1 tbsp cocoa powder',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '200 g caster sugar',
      '100 ml sunflower oil',
      '2 eggs, about 100 g',
      '150 ml buttermilk',
      '1 tsp white wine vinegar',
      '15 g red food colouring',
      '1 tsp vanilla extract',
      '200 g cream cheese',
      '80 g butter, softened',
      '250 g icing sugar'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole muffin tin. Sift the flour, cocoa, baking powder and bicarbonate.',
      'Whisk the sugar, oil, eggs, vanilla and red colouring. Stir the vinegar into the buttermilk.',
      'Fold the flour mixture and the buttermilk into the wet mixture in two additions, mixing until just smooth.',
      'Fill the cases two-thirds full and bake for 20 minutes until a skewer comes out clean. Cool completely.',
      'Beat the cream cheese, butter and icing sugar until smooth and swirl onto the cupcakes.'
    ],
    tips: [
      'Do not overmix.',
      'Add the vinegar to the buttermilk at the last minute.',
      'If your oven runs hot, check at 16 minutes.',
      'Keep frosted cupcakes cool.'
    ],
    pair: ['Cold milk', 'Strong coffee', 'Fresh strawberries', 'Hot tea'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [404, 4, 52, 20, 1, 39, 170]
  },

  'fourth-of-july-berry-trifle': {
    d: 'Layers of sponge, custard, whipped cream, strawberries and blueberries in a glass bowl.',
    meta: 'Fourth of July berry trifle: layers of sponge, custard, cream, strawberries and blueberries. Ten servings, chilled for 2 hours.',
    kw: ['fourth of july berry trifle', 'red white and blue trifle', 'july 4th trifle', 'berry trifle for a crowd', 'patriotic berry trifle'],
    why: 'The first sign it works is the view through the glass: red, white and blue in clear stripes. A trifle is a build rather than a bake, so the skill is in the layering.\n\nUse a straight-sided glass bowl, so the layers show. Start with cubed sponge, then custard, then berries, then cream, and repeat. **Spread each layer to the edge of the glass with the back of a spoon.** Otherwise the stripes are muddy and the colours bleed together.\n\nWhip the cream with a little sugar until it holds a soft peak and no more. Overwhipped cream turns grainy when spooned. Use ready-made custard from a tub if you like, because the layers need it thick and cold, and a warm homemade one will melt the cream.\n\nChill for 2 hours before serving so that the sponge soaks up the juices and the layers firm up. Finish with blueberries in a circle and halved strawberries around the edge. Keep it in the fridge until the moment it is served.',
    ing: [
      '250 g sponge cake, cubed',
      '500 g ready-made custard, chilled',
      '300 ml double cream',
      '2 tbsp caster sugar',
      '300 g strawberries, hulled and sliced',
      '200 g blueberries'
    ],
    st: [
      'Whip the cream with the sugar until it holds soft peaks.',
      'Layer a third of the sponge in a glass bowl, then a third of the custard, strawberries and cream. Repeat twice, ending with cream.',
      'Top with the blueberries and a few strawberry halves.',
      'Chill for 2 hours before serving.'
    ],
    tips: [
      'Use a straight-sided glass bowl.',
      'Spread each layer to the edge.',
      'Whip the cream to soft peaks only.',
      'Chill before serving.'
    ],
    pair: ['Barbecue food', 'Sparkling lemonade', 'Fresh mint', 'Iced tea'],
    store: 'Keeps in the fridge for 2 days.',
    rest: [120, 'Chilling'],
    nut: [302, 4, 31, 18, 1, 22, 120]
  },

  'mummy-hot-dogs': {
    d: 'Hot dogs wrapped in strips of puff pastry like bandages and baked, with mustard dots for eyes.',
    meta: 'Mummy hot dogs: hot dogs wrapped in puff pastry strips and baked, with mustard eyes. Makes eight, baked for 15 minutes.',
    kw: ['mummy hot dogs', 'halloween mummy hot dogs', 'puff pastry mummy hot dogs', 'mummy sausage rolls', 'hot dog mummies'],
    why: 'Cut the pastry into thin strips and the mummy practically makes itself. That is the whole idea, and the reason these are the easiest Halloween snack for children to help with.\n\nUse a sheet of ready-rolled puff pastry and slice it lengthways into strips about 1 cm wide. Wrap each strip loosely around a hot dog, leaving a gap for the face, and tuck the ends under. **Leave small gaps between the strips.** The pastry puffs in the oven and closes them up, and a tight wrap bursts.\n\nBrush with beaten egg for a golden colour and bake at 200°C for 15 minutes, until the pastry has risen and turned deep gold. If your oven runs hot, check at 12 minutes.\n\nAfter baking, add two dots of mustard for eyes. A small dot of mustard on a small dot of ketchup gives eyes that look at you. Serve warm with ketchup for dipping, and keep them away from small children who will try to eat the whole thing in one go.',
    ing: [
      '320 g ready-rolled puff pastry',
      '8 hot dogs, about 400 g',
      '1 egg, beaten',
      '2 tbsp mustard',
      '4 tbsp ketchup'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Cut the pastry lengthways into strips about 1 cm wide.',
      'Wrap the strips loosely around the hot dogs, leaving a gap for a face. Brush with egg.',
      'Bake for 15 minutes until puffed and deep gold.',
      'Dot on mustard eyes. Serve warm with the ketchup.'
    ],
    tips: [
      'Wrap loosely.',
      'Leave a gap for the face.',
      'If your oven runs hot, check at 12 minutes.',
      'Add the eyes after baking.'
    ],
    pair: ['Tomato soup', 'Coleslaw', 'Pumpkin soup', 'Apple juice'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and reheats in a 180°C oven for 8 minutes.',
    nut: [319, 10, 18, 23, 1, 3, 760]
  },

  'spiderweb-dip': {
    d: 'A layered dip of refried beans, guacamole, salsa, cheese and sour cream drawn into a spiderweb with an olive spider.',
    meta: 'Spiderweb dip: a layered dip of refried beans, guacamole, salsa and cheese with a sour cream web. Eight servings, no cooking.',
    kw: ['spiderweb dip', 'halloween spiderweb dip', 'spider web taco dip', 'layered halloween dip', 'spiderweb bean dip'],
    why: 'A layered dip is a party dish that does most of the work in the fridge. The web is the only part that needs care, and it is simpler than it looks.\n\nSpread the refried beans in the base of a shallow dish, then the guacamole, then the salsa, then a layer of cheese. Drain the salsa first, or the layers turn soupy and run together. **Make the web with a piping bag, or a small bag with the corner snipped.** Draw concentric circles of sour cream on the top, then drag a toothpick from the centre outwards, at regular gaps, to pull the lines into a web.\n\nThe spider is made from black olives: one whole olive for the body and a halved olive cut into legs. Place it on the web at the last moment.\n\nServe with tortilla chips. Keep the dip covered in the fridge until you are ready, since guacamole darkens when exposed to air. It can be made a few hours ahead without harm.',
    ing: [
      '400 g tin refried beans',
      '150 g guacamole',
      '150 g salsa, drained',
      '100 g mature cheddar, grated',
      '150 g sour cream',
      '6 black olives, about 30 g',
      '200 g tortilla chips'
    ],
    st: [
      'Spread the refried beans in a shallow dish. Layer the guacamole, then the drained salsa, then the cheddar.',
      'Pipe concentric circles of sour cream over the top.',
      'Drag a toothpick from the centre to the edge in 8 evenly spaced lines to form a web.',
      'Cut the olives into a spider and set it on the web. Serve with the tortilla chips.'
    ],
    tips: [
      'Drain the salsa.',
      'Pipe the circles evenly.',
      'Cover and chill until serving.',
      'Add the spider last.'
    ],
    pair: ['Tortilla chips', 'Carrot sticks', 'Cold lemonade', 'Pumpkin soup'],
    store: 'Keeps in the fridge for 1 day, covered.',
    nut: [306, 9, 27, 18, 5, 3, 660]
  },

  'leftover-ham-pie': {
    d: 'Cooked ham and leeks in a mustardy cheese sauce under a puff pastry lid.',
    meta: 'Leftover ham pie: cooked ham and leeks in a mustardy cheese sauce under puff pastry. Six servings, baked for 35 minutes.',
    kw: ['leftover ham pie', 'ham and leek pie', 'christmas leftover ham pie', 'ham and cheese pie with puff pastry', 'cooked ham pie'],
    why: 'Short and sharp: a pie is the best use for what is left over from the roast. Ham from a boxing day table goes into a sauce, under a lid, and becomes a fresh meal.\n\nCook the leeks in butter first, for 6 minutes, until soft. Stir in the flour, then add the milk a little at a time. **Make the sauce thick, because the ham and leeks will thin it.** It should coat a spoon and leave a trail when you drag a finger through it.\n\nAdd the cheddar, mustard and parsley off the heat, then fold in the diced ham. Taste for salt last, since ham is salty already and the cheese adds more.\n\nTip the filling into a pie dish, cover with the pastry, press the edges down and brush with egg. Cut a steam hole in the middle. Bake at 200°C for 25 minutes, until the pastry is deep gold. If your oven runs hot, check at 20 minutes. Let it stand for 5 minutes before cutting.',
    ing: [
      '300 g cooked ham, diced',
      '2 leeks, about 300 g, sliced',
      '30 g butter',
      '30 g plain flour',
      '300 ml milk',
      '80 g mature cheddar, grated',
      '1 tsp English mustard',
      '1 tbsp chopped parsley',
      '320 g ready-rolled puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Cook the leeks in the butter over medium heat for 6 minutes until soft.',
      'Stir in the flour, then the milk a little at a time, and simmer for 4 minutes until thick.',
      'Off the heat, stir in the cheddar, mustard and parsley, then fold in the ham. Tip into a 1.5 litre pie dish and cool slightly.',
      'Cover with the pastry, press the edge, brush with egg and cut a steam hole.',
      'Bake for 25 minutes until deep gold. Stand for 5 minutes.'
    ],
    tips: [
      'Make the sauce thick.',
      'Season after adding the ham.',
      'If your oven runs hot, check at 20 minutes.',
      'Let the pie stand before cutting.'
    ],
    pair: ['Boiled potatoes', 'Green beans', 'Pickles', 'Mustard'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 15 minutes.',
    nut: [446, 20, 33, 26, 2, 6, 1060]
  },

  'cranberry-relish': {
    d: 'Raw cranberries, orange and sugar chopped together with pecans into a sharp, fresh relish that sits for four hours.',
    meta: 'Cranberry relish: raw cranberries, orange and sugar chopped with pecans, chilled for 4 hours. Ten servings, no cooking.',
    kw: ['cranberry relish', 'raw cranberry relish', 'cranberry orange relish', 'fresh cranberry relish', 'thanksgiving cranberry relish'],
    why: 'Pulse the berries, do not blend them. That is the quick tip for this relish, and the reason it has texture instead of being a red paste.\n\nPut the cranberries in a food processor and pulse in short bursts, 8 to 10 times, until they are chopped to the size of peas. Add the orange, with the peel on, cut into quarters and seeds removed. The peel gives a bitter-sweet note that makes the relish more than sweet. **Do not skip the sugar.** Raw cranberries are very sharp, and the sugar is needed to balance them and to draw out the juice.\n\nStir in the sugar and the chopped pecans and chill for 4 hours. During that time the sugar dissolves into the fruit and the relish turns glossy and softens.\n\nServe cold beside roast turkey or ham, or on a sandwich the next day. Unlike cooked cranberry sauce, it keeps its bright colour and sharp taste. Taste it before serving and add a spoonful more sugar if it is too fierce.',
    ing: [
      '300 g fresh cranberries',
      '1 orange, about 150 g, quartered and seeded',
      '100 g caster sugar',
      '30 g pecans, chopped'
    ],
    st: [
      'Pulse the cranberries and orange in a food processor 8 to 10 times until chopped to the size of peas.',
      'Stir in the sugar and pecans.',
      'Cover and chill for 4 hours, stirring once, before serving.'
    ],
    tips: [
      'Pulse, do not blend.',
      'Keep the orange peel on.',
      'Chill for the full 4 hours.',
      'Taste and add sugar if needed.'
    ],
    pair: ['Roast turkey', 'Ham', 'Cheese board', 'Turkey sandwiches'],
    store: 'Keeps in the fridge for 5 days.',
    rest: [240, 'Chilling'],
    nut: [86, 1, 16, 2, 2, 13, 5]
  },

  'cranberry-meatballs': {
    d: 'Beef meatballs baked and simmered in a sweet and tangy cranberry and chilli sauce.',
    meta: 'Cranberry meatballs: beef meatballs baked and simmered in a cranberry and chilli sauce. Twelve servings, cooked for 25 minutes.',
    kw: ['cranberry meatballs', 'cranberry chilli sauce meatballs', 'party cranberry meatballs', 'holiday cranberry meatballs', 'cranberry meatballs for a crowd'],
    why: 'Bake the meatballs, then simmer them. That is the quick tip, and it saves frying 48 meatballs in batches.\n\nMix the mince with the breadcrumbs, egg and salt and shape into balls about 25 g each, which is a little bigger than a walnut. Handle the mixture lightly, since squeezing makes meatballs dense. **Bake them at 200°C for 15 minutes first.** They brown in the oven, firm up and shed fat that would otherwise float in the sauce.\n\nThe sauce is three ingredients that happen to go together very well: whole berry cranberry sauce, chilli sauce and a spoon of brown sugar, with soy for depth. Warm it in a wide pan, stirring until the cranberry sauce has melted.\n\nTip the baked meatballs into the sauce and simmer for 10 minutes, turning them once or twice, until they are glossy. If your oven runs hot, check the meatballs at 12 minutes. Serve with cocktail sticks, or over rice for a meal.',
    ing: [
      '500 g beef mince',
      '50 g breadcrumbs',
      '1 egg, about 50 g',
      '1 tsp salt',
      '300 g whole berry cranberry sauce',
      '150 g sweet chilli sauce',
      '2 tbsp soft light brown sugar',
      '1 tbsp soy sauce'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Mix the mince, breadcrumbs, egg and salt and shape into 24 balls.',
      'Bake for 15 minutes until browned.',
      'Warm the cranberry sauce, chilli sauce, sugar and soy sauce in a wide pan, stirring, until smooth.',
      'Add the meatballs and simmer for 10 minutes, turning, until glossy.'
    ],
    tips: [
      'Handle the mixture lightly.',
      'Bake before simmering.',
      'If your oven runs hot, check at 12 minutes.',
      'Serve with cocktail sticks.'
    ],
    pair: ['Rice', 'Mashed potato', 'Crusty bread', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [183, 9, 21, 7, 0, 17, 460]
  },

  'maple-syrup-pie': {
    d: 'A shortcrust pie filled with a custard of maple syrup, eggs, butter and cream, baked until set.',
    meta: 'Maple syrup pie: shortcrust filled with a baked maple custard. Eight servings, baked for 40 minutes.',
    kw: ['maple syrup pie', 'canadian maple syrup pie', 'maple custard pie', 'maple pie', 'old fashioned maple syrup pie'],
    why: 'It tastes of maple, and very little else, so the quality of the syrup matters. Use a dark, robust grade if you can, since a pale syrup gives a pie that tastes only sweet.\n\nThe filling is a custard: syrup, eggs, melted butter, cream and a spoonful of flour to help it set. Whisk gently, so the mixture stays smooth without a head of foam. **Stop whisking as soon as the eggs are mixed in.** Air bubbles rise and leave a pitted top.\n\nPour the filling into an unbaked shortcrust case and bake at 180°C for 40 minutes. The edge should be set and the centre should still have a slight wobble. If your oven runs hot, check at 30 minutes. A wobble is right: the custard sets as it cools.\n\nCool completely, for at least 2 hours, before cutting. A warm slice will collapse. Serve in thin wedges, since the pie is extremely sweet, with unsweetened whipped cream or vanilla ice cream beside it.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '250 ml maple syrup',
      '3 eggs, about 150 g',
      '50 g butter, melted',
      '120 ml double cream',
      '2 tbsp plain flour',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 180°C. Line a 23 cm pie tin with the pastry and prick the base.',
      'Whisk the maple syrup, eggs, melted butter, cream, flour, vanilla and salt gently until just combined.',
      'Pour into the pastry case and bake for 40 minutes until the edge is set and the centre has a slight wobble.',
      'Cool completely before slicing.'
    ],
    tips: [
      'Use a robust maple syrup.',
      'Do not whisk to a foam.',
      'If your oven runs hot, check at 30 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Unsweetened whipped cream', 'Vanilla ice cream', 'Strong coffee', 'Fresh berries'],
    store: 'Keeps in the fridge for 3 days. Serve at room temperature.',
    nut: [415, 5, 47, 23, 1, 26, 290]
  }
};
