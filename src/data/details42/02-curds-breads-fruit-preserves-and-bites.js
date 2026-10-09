'use strict';

/**
 * Volume forty-two — curd, choux and breads, fruit, preserves and no-bake bites.
 *
 * Passionfruit curd and choux buns, two loaves, simple cooked fruit, small
 * batch jams and jellies for the fridge, a slow cooker apple sauce, and
 * three kinds of no-bake ball. Preserves are small batches for the fridge,
 * not canned. Times are the recipe's own. Nutrition is estimated from the
 * ingredient list by npm run calc.
 */

module.exports = {
  'passionfruit-curd': {
    d: 'A silky, tangy curd of passionfruit pulp, egg yolks, sugar and butter, cooked over low heat until it coats a spoon.',
    meta: 'Passionfruit curd: a silky, tangy curd of passionfruit, egg yolks, sugar and butter. Makes about 16 servings, cooked for 12 minutes.',
    kw: ['passionfruit curd', 'homemade passionfruit curd', 'passion fruit curd', 'passionfruit curd for pavlova', 'tangy passionfruit curd'],
    why: 'Passionfruit, egg yolks, sugar, butter: four ingredients that, with some patience, become a curd that tastes of sunshine. The seeds stay in, which gives it a crunch and a speckled look.\n\nThe heat must be low. Put the pulp, sugar and yolks in a heatproof bowl over a pan of barely simmering water and stir. **The bowl must not touch the water.** Direct heat scrambles the yolks before they thicken, and the curd turns to lumps.\n\nStir constantly for 10 minutes, then add the butter in small pieces, stirring until each has melted. The curd is ready when it coats the back of a spoon and holds a line drawn through it with a finger. It will thicken more as it cools.\n\nPour into a clean jar and press cling film on the surface to stop a skin forming. Chill. Use it on pavlova, in tarts, over yoghurt or on toast. It is a fresh curd, kept in the fridge, and should be eaten within 2 weeks.',
    ing: [
      '100 g passionfruit pulp, from about 6 fruit',
      '100 g caster sugar',
      '4 egg yolks, about 80 g',
      '100 g butter, cubed'
    ],
    st: [
      'Whisk the passionfruit pulp, sugar and egg yolks in a heatproof bowl set over a pan of barely simmering water, without letting the bowl touch the water.',
      'Stir constantly for 10 minutes until the mixture thickens and coats the back of a spoon.',
      'Add the butter a few pieces at a time, stirring until melted, for 2 minutes more.',
      'Pour into a clean jar, press cling film on the surface and chill.'
    ],
    tips: [
      'Keep the bowl above the water.',
      'Stir all the time.',
      'Add the butter gradually.',
      'Cover the surface to stop a skin.'
    ],
    pair: ['Pavlova', 'Scones', 'Greek yoghurt', 'Tart cases'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [90, 1, 8, 6, 1, 7, 5]
  },

  'choux-buns': {
    d: 'Light, hollow choux pastry buns filled with whipped cream and dusted with icing sugar.',
    meta: 'Choux buns: light, hollow choux pastry buns filled with whipped cream. Makes twelve, baked for 30 minutes.',
    kw: ['choux buns', 'cream filled choux buns', 'homemade choux buns', 'choux pastry buns with cream', 'classic choux buns'],
    why: 'Quick tip: do not open the oven door. That is the most useful instruction for choux, since the buns rise on steam and collapse if cold air gets in.\n\nThe paste is made in a pan, with water, butter and flour, and it must be beaten hard until it leaves the sides. Add the eggs gradually, beating each in, and stop when the paste drops slowly from a spoon in a V shape. **The paste should be glossy, not stiff and not runny.** Too many eggs and the buns spread, too few and they do not rise.\n\nPipe or spoon 12 mounds onto a lined tray, leaving gaps. Bake at 200°C for 25 minutes, until puffed, deep golden and light when lifted. If your oven runs hot, check at 20 minutes. Pierce the base of each with a skewer to let steam out and dry them for 5 minutes in the cooling oven.\n\nFill once cold, with whipped cream piped through the hole, and dust with icing sugar. Filled buns soften within hours, so fill them just before serving.',
    ing: [
      '150 ml water',
      '60 g butter',
      '90 g plain flour',
      '1/4 tsp salt',
      '3 eggs, about 150 g',
      '250 ml double cream',
      '2 tbsp icing sugar',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Bring the water and butter to a boil in a pan, add the flour and salt and beat hard for 2 minutes until the paste leaves the sides.',
      'Cool for 5 minutes, then beat in the eggs a little at a time until the paste is glossy and falls from a spoon in a V.',
      'Pipe 12 mounds on the tray. Bake for 25 minutes until puffed and deep golden. Pierce each base and dry for 5 minutes in the switched-off oven.',
      'Whip the cream with the 2 tbsp icing sugar and pipe into the cold buns. Dust with the remaining icing sugar.'
    ],
    tips: [
      'Do not open the oven door early.',
      'Beat the eggs in gradually.',
      'If your oven runs hot, check at 20 minutes.',
      'Fill just before serving.'
    ],
    pair: ['Hot chocolate', 'Fresh raspberries', 'Strong coffee', 'Chocolate sauce'],
    store: 'Unfilled buns keep in a tin for 1 day. Fill at the last moment.',
    nut: [169, 3, 10, 13, 0, 4, 70]
  },

  'rye-bread': {
    d: 'A dense, sour-edged loaf made with rye and white flour, caraway seeds and a spoonful of treacle.',
    meta: 'Rye bread: a dense loaf made with rye and white flour, caraway and treacle. Twelve slices, baked for 40 minutes.',
    kw: ['rye bread', 'homemade rye bread', 'rye bread with caraway seeds', 'german style rye bread', 'rye and white flour bread'],
    why: 'Short and sharp: rye is not wheat. It has little gluten and a lot of fibre, so the dough is sticky and the rise is modest. Cooks who treat it like white dough end up frustrated.\n\nMix rye with strong white flour, one part to two, and the loaf has structure and flavour. The dough should be wetter and stickier than a normal dough. **Do not add more flour to make it easier to handle.** Use a wet hand or a plastic scraper instead, and the crumb stays moist.\n\nKnead for 5 minutes, then leave it covered for 1 hour until it has grown by half. Shape it into a round or an oval, set it on a floured tray and leave for 45 minutes more. It will not double, and that is normal.\n\nBake at 220°C for 40 minutes, until the crust is dark and the loaf sounds hollow when tapped. If your oven runs hot, check at 32 minutes. Cool fully before slicing, since rye needs time to set, and eat it thin with butter and cheese.',
    ing: [
      '300 g rye flour',
      '200 g strong white bread flour',
      '7 g fast-action yeast',
      '10 g salt',
      '1 tbsp caraway seeds, about 6 g',
      '1 tbsp black treacle, about 20 g',
      '350 ml warm water'
    ],
    st: [
      'Mix the rye flour, white flour, yeast, salt and caraway in a large bowl. Stir the treacle into the warm water and add to the flour.',
      'Mix to a sticky dough and knead with a wet hand for 5 minutes. Cover and leave for 1 hour.',
      'Shape into a round on a floured tray, cover and leave for 45 minutes.',
      'Heat the oven to 220°C. Bake for 40 minutes until dark and hollow-sounding. Cool completely before slicing.'
    ],
    tips: [
      'Keep the dough wet and sticky.',
      'Use a wet hand, not more flour.',
      'If your oven runs hot, check at 32 minutes.',
      'Let it cool fully before cutting.'
    ],
    pair: ['Butter', 'Smoked salmon', 'Mature cheddar', 'Soup'],
    store: 'Keeps wrapped for 4 days.',
    rest: [105, 'Rising'],
    nut: [141, 4, 29, 1, 2, 2, 410]
  },

  'no-knead-bread': {
    d: 'A crusty loaf made from four ingredients, left to rise for twelve hours and baked in a covered pot.',
    meta: 'No knead bread: a crusty loaf of flour, water, salt and yeast, left for 12 hours and baked in a covered pot. Ten slices, 45 minutes.',
    kw: ['no knead bread', 'easy no knead bread', 'crusty no knead bread', 'dutch oven no knead bread', 'overnight no knead bread'],
    why: 'The first sign it worked is the sound: a crackle as the loaf cools, the crust contracting and splitting. It comes from a hot, covered pot and a very wet dough.\n\nMix the flour, salt, a tiny amount of yeast and the water in a bowl, with no kneading. It will look like a shaggy, sticky mess, and that is what is wanted. **Time takes the place of kneading.** Over 12 hours the yeast works slowly and the gluten develops by itself, and the flavour is more complex than a quick loaf.\n\nTip the dough onto a floured surface, fold it over itself a few times and let it rest for 1 hour. Meanwhile heat a heavy lidded pot in the oven at 230°C for 30 minutes.\n\nDrop the dough into the hot pot, cover and bake for 30 minutes, then take off the lid and bake for 15 minutes more, until deep brown. If your oven runs hot, check at 40 minutes in all. The lid traps steam and gives the crust its crackle. Cool for an hour before cutting.',
    ing: [
      '400 g strong white bread flour',
      '8 g salt',
      '2 g fast-action yeast',
      '300 ml water'
    ],
    st: [
      'Mix the flour, salt, yeast and water in a large bowl to a shaggy dough. Cover and leave for 12 hours.',
      'Tip onto a floured surface, fold it over itself a few times and rest for 1 hour.',
      'Heat the oven to 230°C with a lidded heavy pot inside for 30 minutes.',
      'Drop the dough into the hot pot, cover and bake for 30 minutes. Remove the lid and bake for 15 minutes more until deep brown.'
    ],
    tips: [
      'Leave it for the full 12 hours.',
      'Preheat the pot.',
      'If your oven runs hot, check at 40 minutes in all.',
      'Let it cool before cutting.'
    ],
    pair: ['Butter', 'Soup', 'Cheese', 'Olive oil'],
    store: 'Best on the day. Keeps wrapped for 2 days.',
    rest: [780, 'Rising and resting'],
    nut: [105, 4, 20, 1, 1, 2, 510]
  },

  'roasted-strawberries': {
    d: 'Strawberries roasted with sugar, balsamic vinegar and vanilla until soft and syrupy, served over ice cream or yoghurt.',
    meta: 'Roasted strawberries: strawberries roasted with sugar, balsamic vinegar and vanilla. Four servings, roasted for 20 minutes.',
    kw: ['roasted strawberries', 'oven roasted strawberries', 'roasted strawberries with balsamic', 'roasted strawberries for ice cream', 'baked strawberries'],
    why: 'Strawberries, sugar, vinegar, vanilla: four things and the oven. It is a way of rescuing berries that are a little too firm or a little pale, because roasting concentrates their flavour.\n\nHalve the strawberries, or quarter large ones, and toss them with the sugar and vinegar in a baking dish. Spread them in a single layer, cut-side up. **A single layer matters.** Piled berries steam and turn to mush, and spread ones caramelise at the edges.\n\nRoast at 200°C for 20 minutes, until the fruit is soft, the edges are dark and the juices have turned to a syrup. If your oven runs hot, check at 15 minutes. Stir in the vanilla as they come out.\n\nThe balsamic is a small amount, and it does not taste of vinegar. It sharpens the sweetness and deepens the colour. Spoon the berries and syrup over vanilla ice cream, yoghurt, porridge or a slice of plain cake. They keep for 3 days in the fridge.',
    ing: [
      '400 g strawberries, hulled and halved',
      '2 tbsp caster sugar',
      '1 tbsp balsamic vinegar',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 200°C. Toss the strawberries with the sugar and balsamic vinegar in a baking dish and spread in a single layer, cut-side up.',
      'Roast for 20 minutes until soft and syrupy.',
      'Stir in the vanilla and serve warm or cold.'
    ],
    tips: [
      'Spread the berries in one layer.',
      'Use ripe or slightly firm fruit.',
      'If your oven runs hot, check at 15 minutes.',
      'Add the vanilla at the end.'
    ],
    pair: ['Vanilla ice cream', 'Greek yoghurt', 'Pancakes', 'Panna cotta'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [64, 1, 15, 0, 2, 12, 5]
  },

  'stewed-rhubarb': {
    d: 'Rhubarb simmered with sugar and orange juice until just soft and still holding its shape.',
    meta: 'Stewed rhubarb: rhubarb simmered with sugar and orange juice until just soft. Four servings, cooked for 10 minutes.',
    kw: ['stewed rhubarb', 'easy stewed rhubarb', 'stewed rhubarb with orange', 'british stewed rhubarb', 'rhubarb stewed with sugar'],
    why: 'Stop cooking before it falls apart. That is the whole recipe, and the part people overdo.\n\nRhubarb goes from raw to mush in about two minutes, and the line between stewed and sludge is thin. Cut the stalks into 3 cm pieces and put them in a pan with the sugar and orange juice. Cover and cook over low heat for 6 minutes, then check. **The pieces should still have edges.** The residual heat will soften them further while the pan cools.\n\nUse red stalks for colour. Green ones are just as sharp, but they cook to a muddy brown. The orange juice adds sweetness and takes the edge off the acid, so you need less sugar.\n\nWhen the rhubarb is soft but holds its shape, take it off the heat and leave it to cool in the pan. Do not stir it. Serve with cold custard, ice cream or yoghurt, or on porridge in the morning. If your hob runs hot, lower the heat as soon as the juice bubbles.',
    ing: [
      '500 g rhubarb, cut into 3 cm pieces',
      '60 g caster sugar',
      '60 ml orange juice'
    ],
    st: [
      'Put the rhubarb, sugar and orange juice in a pan, cover and cook over low heat for 6 minutes.',
      'Check that the pieces are soft but still hold their shape. Cook for up to 4 minutes more if not.',
      'Take off the heat and leave to cool in the pan without stirring.'
    ],
    tips: [
      'Do not overcook.',
      'Do not stir.',
      'If your hob runs hot, lower the heat early.',
      'Choose red stalks for colour.'
    ],
    pair: ['Custard', 'Vanilla ice cream', 'Natural yoghurt', 'Porridge'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [92, 1, 22, 0, 2, 18, 10]
  },

  'berry-compote': {
    d: 'Mixed berries simmered briefly with sugar and lemon into a loose, jammy sauce.',
    meta: 'Berry compote: mixed berries simmered with sugar and lemon into a jammy sauce. Six servings, cooked for 10 minutes.',
    kw: ['berry compote', 'mixed berry compote', 'easy berry compote', 'berry compote for pancakes', 'frozen berry compote'],
    why: 'Most home versions come out as jam, and the fix is to stop the heat as soon as the berries have collapsed. A compote should be loose and fruity, with pieces still visible.\n\nUse frozen berries if fresh ones are out of season: they are cheaper and just as good for cooking. They go in straight from the freezer, with the sugar, water and lemon juice. **Do not stir more than twice.** Stirring breaks the fruit into a purée and clouds the colour.\n\nSimmer for about 10 minutes, until the juice has darkened and thickened slightly and about half the berries have burst. The compote will thicken further as it cools, so take it off the heat while it still looks slightly too runny.\n\nSpoon it warm over pancakes, porridge or ice cream, or let it cool and stir it into yoghurt. A strip of lemon zest or a vanilla pod in the pan adds fragrance. If your hob runs hot, keep the bubbles gentle.',
    ing: [
      '400 g mixed berries, fresh or frozen',
      '50 g caster sugar',
      '2 tbsp lemon juice',
      '2 tbsp water'
    ],
    st: [
      'Put the berries, sugar, lemon juice and water in a pan over medium heat.',
      'Simmer for 10 minutes, stirring only twice, until about half the berries have burst and the juice has thickened.',
      'Take off the heat and cool slightly. Serve warm or cold.'
    ],
    tips: [
      'Use frozen berries if fresh are expensive.',
      'Stir as little as possible.',
      'If your hob runs hot, keep the heat low.',
      'It thickens as it cools.'
    ],
    pair: ['Pancakes', 'Porridge', 'Greek yoghurt', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [64, 0, 16, 0, 2, 14, 5]
  },

  'blueberry-jam': {
    d: 'A small batch of blueberry jam cooked with sugar and lemon until it wrinkles on a cold saucer, for the fridge.',
    meta: 'Blueberry jam: a small batch of blueberry jam with sugar and lemon, cooked for 25 minutes. Makes 24 servings of a spoonful.',
    kw: ['blueberry jam', 'homemade blueberry jam', 'small batch blueberry jam', 'easy blueberry jam', 'blueberry jam with lemon'],
    why: 'The first sign it is ready is the surface: it wrinkles when you push it with a finger on a cold saucer. That is the setting test, and it is more reliable than a timer.\n\nPut a saucer in the freezer before you start. Cook the blueberries with the sugar and lemon juice over medium heat, crushing about half of them against the side of the pan. The sugar dissolves into the juice and the mixture bubbles. **Stir often, since jam burns at the bottom.** A heavy-based pan is best.\n\nAfter about 20 minutes, spoon a little onto the cold saucer, leave for 1 minute and push it with a finger. If the surface wrinkles, it is ready. If it runs back, cook for 3 minutes and test again. Blueberries are low in pectin, so the lemon juice does some of the work.\n\nPour into clean jars and cool. This is a fridge jam, not a canned one, and should be kept cold and eaten within 3 weeks. If your hob runs hot, turn the heat down once the jam starts to thicken.',
    ing: [
      '600 g blueberries',
      '300 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Put a saucer in the freezer. Cook the blueberries, sugar and lemon juice in a heavy pan over medium heat for 5 minutes, crushing about half the berries.',
      'Boil for 15 to 20 minutes, stirring often, until the jam has thickened.',
      'Test a spoonful on the cold saucer: it is ready when the surface wrinkles. Cook for 3 minutes more if not.',
      'Pour into clean jars and cool. Keep in the fridge.'
    ],
    tips: [
      'Chill a saucer for the setting test.',
      'Stir often.',
      'If your hob runs hot, lower the heat as the jam thickens.',
      'Keep it in the fridge.'
    ],
    pair: ['Toast', 'Scones', 'Pancakes', 'Natural yoghurt'],
    store: 'Keeps in the fridge for 3 weeks. This is a fridge jam, not a canning recipe.',
    nut: [64, 0, 16, 0, 1, 15, 5]
  },

  'chilli-jam': {
    d: 'A sweet, hot, sticky jam of red peppers, chillies, garlic, ginger and vinegar, for cheese and cold meats.',
    meta: 'Chilli jam: a sweet, hot, sticky jam of red peppers, chillies and ginger, cooked for 40 minutes. Makes 24 servings of a spoonful.',
    kw: ['chilli jam', 'homemade chilli jam', 'sweet chilli jam', 'red pepper chilli jam', 'chilli jam for cheese'],
    why: 'Compare it to a shop-bought one and the difference is the colour and the freshness: bright red, with a clear taste of pepper under the heat. It takes 10 minutes of chopping and 40 of simmering.\n\nBlend the peppers, chillies, garlic and ginger into a rough paste in a food processor. Pulse, so that the paste still has texture. **Leave the seeds in for more heat and take them out for less.** Most of the fire is in the seeds and the white membrane.\n\nSimmer the paste with the sugar and vinegar over medium-low heat for 40 minutes, stirring now and then. The liquid reduces and the jam turns glossy and thick. It is done when a spoon dragged across the bottom of the pan leaves a trail that stays open for a second.\n\nPour into clean jars while hot and cool. It firms up as it cools. This is a fridge jam, kept cold and eaten within a month. Serve with cheddar, cream cheese on crackers, or in a bacon sandwich. If your hob runs hot, stir more often at the end.',
    ing: [
      '200 g red peppers, chopped',
      '60 g red chillies, chopped',
      '4 cloves garlic, peeled',
      '20 g fresh ginger, peeled',
      '300 g caster sugar',
      '150 ml red wine vinegar'
    ],
    st: [
      'Pulse the peppers, chillies, garlic and ginger in a food processor to a rough paste.',
      'Put the paste, sugar and vinegar in a heavy pan and simmer over medium-low heat for 40 minutes, stirring now and then, until thick and glossy.',
      'Pour into clean jars and cool.'
    ],
    tips: [
      'Pulse, do not blend smooth.',
      'Leave in or remove the seeds for heat.',
      'If your hob runs hot, stir more often at the end.',
      'Keep it in the fridge.'
    ],
    pair: ['Cheddar', 'Cream cheese and crackers', 'Bacon sandwich', 'Grilled chicken'],
    store: 'Keeps in the fridge for 1 month. This is a fridge jam, not a canning recipe.',
    nut: [56, 0, 14, 0, 0, 13, 5]
  },

  'mint-jelly': {
    d: 'A clear, green-flecked jelly of apple juice, vinegar and mint, set with jam sugar and served with roast lamb.',
    meta: 'Mint jelly: a clear jelly of apple juice, vinegar and fresh mint, set with jam sugar. Makes 24 servings of a spoonful, cooked for 15 minutes.',
    kw: ['mint jelly', 'homemade mint jelly', 'mint jelly for lamb', 'apple mint jelly', 'british mint jelly'],
    why: 'Mint, apple, sugar, vinegar: four things and a jar. A jelly is a jam without the fruit pulp, which means it is clear and has to be strained. The shop-bought ones are green with dye. This one is amber with flecks of leaf.\n\nUse clear apple juice, not cloudy, since the cloudiness goes through to the jelly. Jam sugar contains added pectin, which makes the set reliable, as apple juice alone has little. **Bring to a full rolling boil and keep it there for 5 minutes.** A weak boil gives a runny jelly that never sets.\n\nStir in the chopped mint and the vinegar after the boil, and leave for 5 minutes so that the leaves release their flavour. Skim any foam from the surface with a spoon.\n\nPour into clean, warm jars, with the mint distributed by a stir. It sets as it cools, over about an hour. Serve with roast lamb, or stir into peas. It is a fridge jelly, not a canned one, and keeps for 2 weeks. If your hob runs hot, stir often to stop it catching.',
    ing: [
      '500 ml clear apple juice',
      '300 g jam sugar',
      '3 tbsp white wine vinegar',
      '30 g fresh mint, finely chopped'
    ],
    st: [
      'Put the apple juice and jam sugar in a large pan and stir over medium heat until the sugar has dissolved.',
      'Bring to a full rolling boil and boil for 5 minutes, skimming off any foam.',
      'Take off the heat and stir in the vinegar and mint. Leave for 5 minutes.',
      'Stir and pour into clean, warm jars. Cool until set.'
    ],
    tips: [
      'Use clear apple juice.',
      'Keep a full rolling boil.',
      'If your hob runs hot, stir often.',
      'Keep it in the fridge.'
    ],
    pair: ['Roast lamb', 'Lamb chops', 'Peas', 'Cheese sandwiches'],
    store: 'Keeps in the fridge for 2 weeks. This is a fridge jelly, not a canning recipe.',
    nut: [60, 0, 15, 0, 0, 15, 5]
  },

  'pumpkin-butter': {
    d: 'A spiced spread of pumpkin puree, apple juice and brown sugar, cooked down until thick.',
    meta: 'Pumpkin butter: a spiced spread of pumpkin puree, apple juice and brown sugar, cooked for 45 minutes. Makes 24 servings of a spoonful.',
    kw: ['pumpkin butter', 'homemade pumpkin butter', 'spiced pumpkin butter', 'pumpkin butter spread', 'pumpkin butter with apple juice'],
    why: 'Where does the name come from? Butter, in this case, means a spread: the fruit is cooked to a smooth, thick paste that spreads like butter. There is no dairy in it.\n\nPlain pumpkin puree from a tin is the base. It is mostly water, and the work of the recipe is to cook that water away. Simmer the puree with the apple juice and sugar over low heat for 45 minutes, stirring often. **Cover the pan with a splatter guard or a lid ajar.** The thick mixture spits like lava as it bubbles.\n\nAdd the spices and lemon juice near the end, so that their scent stays fresh. The finished butter should be dark orange-brown, thick enough to hold a spoon upright for a second, and smell of cinnamon.\n\nPour into clean jars and cool. Spread it on toast, stir it into oatmeal or serve it with cheese. It is a fridge preserve, kept cold and eaten within 2 weeks. If your hob runs hot, lower the heat and stir more often.',
    ing: [
      '425 g tin plain pumpkin puree',
      '150 ml apple juice',
      '100 g soft light brown sugar',
      '2 tsp pumpkin pie spice',
      '1 tbsp lemon juice'
    ],
    st: [
      'Simmer the pumpkin puree, apple juice and sugar in a heavy pan over low heat for 40 minutes, stirring often, until thick and dark.',
      'Stir in the spice and lemon juice and cook for 5 minutes more.',
      'Pour into clean jars and cool. Keep in the fridge.'
    ],
    tips: [
      'Stir often.',
      'Partly cover the pan against splatters.',
      'If your hob runs hot, lower the heat.',
      'Add the spices near the end.'
    ],
    pair: ['Toast', 'Oatmeal', 'Cheese', 'Pancakes'],
    store: 'Keeps in the fridge for 2 weeks. This is a fridge spread, not a canning recipe.',
    nut: [28, 0, 7, 0, 0, 5, 5]
  },

  'baked-bananas': {
    d: 'Bananas split and baked with butter, brown sugar and cinnamon until soft and caramelised.',
    meta: 'Baked bananas: bananas baked with butter, brown sugar and cinnamon until soft and caramelised. Four servings, baked for 15 minutes.',
    kw: ['baked bananas', 'baked bananas with cinnamon', 'caramelised baked bananas', 'oven baked bananas', 'baked bananas with brown sugar'],
    why: 'It looks like a banana, until you cut it open. Baking turns the flesh soft and sweet and gives it a flavour like banana bread without the bread.\n\nMost versions come out too soft, and the fix is to choose bananas that are ripe but still firm, with a few brown flecks and no black patches. Split them lengthways, in the skin or out of it, and lay them cut-side up in a dish. **Dot the butter along the cut and sprinkle the sugar over it, not all around.** The sugar melts into the flesh and forms the caramel.\n\nBake at 200°C for 15 minutes. If your oven runs hot, check at 12 minutes. The bananas should be soft, golden at the edges, and sitting in a puddle of sticky syrup.\n\nSpoon the syrup over, and serve with Greek yoghurt, vanilla ice cream or a spoonful of crème fraîche. A pinch of salt on top turns it into a more grown-up dessert.',
    ing: [
      '4 bananas, about 480 g peeled, halved lengthways',
      '30 g butter',
      '3 tbsp soft light brown sugar',
      '1/2 tsp ground cinnamon',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 200°C. Lay the banana halves cut-side up in a baking dish.',
      'Dot with the butter, sprinkle with the sugar, cinnamon and salt.',
      'Bake for 15 minutes until soft and caramelised. Spoon the syrup over and serve warm.'
    ],
    tips: [
      'Choose bananas that are ripe but firm.',
      'Keep the sugar on the cut face.',
      'If your oven runs hot, check at 12 minutes.',
      'Serve warm.'
    ],
    pair: ['Greek yoghurt', 'Vanilla ice cream', 'Crème fraîche', 'Chopped nuts'],
    store: 'Best eaten at once.',
    nut: [210, 1, 38, 6, 3, 25, 40]
  },

  'slow-cooker-apple-sauce': {
    d: 'Apples cooked slowly with cinnamon and lemon until soft, then mashed into a chunky sauce.',
    meta: 'Slow cooker apple sauce: apples cooked slowly with cinnamon and lemon, then mashed. Ten servings, 4 hours in the slow cooker.',
    kw: ['slow cooker apple sauce', 'homemade slow cooker apple sauce', 'crock pot apple sauce', 'chunky apple sauce', 'apple sauce in the slow cooker'],
    why: 'Peel less, if you like. That is the quick tip, and one of the benefits of a slow cooker: the skins soften and the sauce comes out slightly pink.\n\nMix a few kinds of apple. Tart ones such as Bramley give sharpness and cook to a fluff, while sweeter ones give body and keep a little of their shape. Peel, core and slice them thickly, and pile them into the slow cooker with the water, sugar, cinnamon and lemon juice. **Do not add more water than the recipe says.** Apples release their own juice as they cook, and too much water gives a thin sauce.\n\nCover and cook on low for 4 hours, until the fruit is completely soft. There is no need to stir during cooking.\n\nMash with a potato masher for a chunky sauce, or blend for a smooth one. Taste, and add a little more sugar if the apples were sharp. Serve warm with pork or porridge, or cool and keep in the fridge for a week.',
    ing: [
      '1.5 kg apples, peeled, cored and sliced',
      '100 ml water',
      '50 g caster sugar',
      '1 tsp ground cinnamon',
      '1 tbsp lemon juice'
    ],
    st: [
      'Put the apples, water, sugar, cinnamon and lemon juice in a slow cooker.',
      'Cover and cook on low for 4 hours until completely soft.',
      'Mash with a potato masher, or blend for a smooth sauce. Taste and add sugar if needed.'
    ],
    tips: [
      'Use a mix of apples.',
      'Do not add extra water.',
      'No need to stir.',
      'Taste before adding sugar.'
    ],
    pair: ['Roast pork', 'Porridge', 'Pancakes', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 1 week.',
    nut: [104, 0, 26, 0, 4, 20, 5]
  },

  'bacon-jam': {
    d: 'Chopped streaky bacon simmered with onion, garlic, brown sugar, cider vinegar, coffee and maple syrup until thick and sticky.',
    meta: 'Bacon jam: chopped streaky bacon simmered with onion, brown sugar, vinegar and coffee. Makes 16 servings, cooked for 60 minutes.',
    kw: ['bacon jam', 'homemade bacon jam', 'sticky bacon jam', 'bacon onion jam', 'bacon jam for burgers'],
    why: 'For a party, a burger night or a cheese board, a jar of bacon jam is the kind of thing that people ask the recipe for. It is salty, sweet, smoky and sharp at once.\n\nChop the bacon small and fry it first, for about 10 minutes, until it has released its fat and begun to crisp. Take out the bacon and leave 2 tablespoons of fat in the pan, then cook the onion and garlic in it. **Do not drain off all the fat.** It carries the flavour through the jam.\n\nReturn the bacon and add the sugar, vinegar, coffee, maple syrup and water. Simmer over low heat for about 50 minutes, stirring now and then, until the liquid has become a dark, sticky glaze and the bacon is very tender.\n\nBlitz briefly if you want a smoother spread, or leave it chunky. It is a fridge preserve, kept cold and eaten within 2 weeks. Serve warm on burgers or toast, or cold with cheese. If your hob runs hot, stir often in the last 15 minutes.',
    ing: [
      '500 g streaky bacon, chopped',
      '1 onion, about 150 g, finely chopped',
      '3 cloves garlic, crushed',
      '150 g dark brown sugar',
      '100 ml cider vinegar',
      '100 ml strong brewed coffee',
      '3 tbsp maple syrup',
      '200 ml water'
    ],
    st: [
      'Fry the bacon in a large heavy pan over medium heat for 10 minutes. Lift it out and leave 2 tbsp of the fat in the pan.',
      'Cook the onion and garlic in the fat for 5 minutes until soft.',
      'Return the bacon and add the sugar, vinegar, coffee, maple syrup and water. Simmer over low heat for 45 minutes, stirring now and then, until dark and sticky.',
      'Pour into a clean jar and cool. Keep in the fridge.'
    ],
    tips: [
      'Keep a little fat in the pan.',
      'Simmer low and slow.',
      'If your hob runs hot, stir often at the end.',
      'Keep it in the fridge.'
    ],
    pair: ['Burgers', 'Toast', 'Cheese', 'Baked potatoes'],
    store: 'Keeps in the fridge for 2 weeks. This is a fridge preserve, not a canning recipe.',
    nut: [108, 5, 13, 4, 0, 12, 470]
  },

  'date-balls': {
    d: 'Sticky balls of blended dates, almonds and cocoa, rolled in coconut.',
    meta: 'Date balls: sticky balls of blended dates, almonds and cocoa, rolled in coconut. Sixteen balls, no cooking.',
    kw: ['date balls', 'date and almond balls', 'no bake date balls', 'date balls with cocoa', 'date balls rolled in coconut'],
    why: 'Dates, almonds, cocoa, coconut: four ingredients and a food processor. These are a sweet that needs no sugar, because the dates supply it.\n\nUse soft Medjool dates, and check each one for a stone. If the dates are dry or firm, soak them in hot water for 5 minutes and drain them well. **Chop the almonds first, and add the dates in the second half.** The nuts need longer to break down than the dates, and a mixture of both from the start turns to paste before the nuts are fine.\n\nProcess until the mixture clumps and holds together when pressed. It should be sticky but not wet. If it is crumbly, add a teaspoon of water. If it is too wet, add a few more almonds.\n\nRoll into 16 balls with damp hands, then roll each in the desiccated coconut. Chill for 30 minutes to firm up. They are a good lunchbox treat, a coffee companion or a gift in a small box.',
    ing: [
      '300 g pitted Medjool dates',
      '100 g almonds',
      '2 tbsp cocoa powder',
      '1 pinch salt',
      '30 g desiccated coconut'
    ],
    st: [
      'Process the almonds in a food processor until finely chopped.',
      'Add the dates, cocoa and salt and process until the mixture clumps together.',
      'Roll into 16 balls with damp hands and roll each in the desiccated coconut.',
      'Chill for 30 minutes.'
    ],
    tips: [
      'Use soft dates.',
      'Process the nuts first.',
      'Roll with damp hands.',
      'Keep them chilled.'
    ],
    pair: ['Hot coffee', 'Mint tea', 'Fresh fruit', 'Cheese'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [108, 2, 16, 4, 3, 12, 10]
  },

  'protein-balls': {
    d: 'Rolled oats, peanut butter, honey and vanilla protein powder mixed and rolled into small chocolate-studded balls.',
    meta: 'Protein balls: rolled oats, peanut butter, honey and vanilla protein powder rolled into small balls. Sixteen balls, no cooking.',
    kw: ['protein balls', 'no bake protein balls', 'peanut butter protein balls', 'oat protein balls', 'homemade protein balls'],
    why: 'Why do protein balls so often come out dry and crumbly? Because powder soaks up moisture, and the recipe needs more sticky ingredients than you expect.\n\nStart with the peanut butter and honey, and warm them together for 20 seconds so that they stir easily. Add the oats, the powder and a pinch of salt. **Add the milk a tablespoon at a time.** The mixture should be dense and slightly tacky, so that it holds when squeezed in your hand. If it is crumbly, add more milk. If it sticks to your fingers, add more oats.\n\nUse a plain or vanilla protein powder with a neutral taste. Chocolate powders can make the balls taste chalky. Fold in the chocolate chips last.\n\nRoll into 16 balls, using damp hands to stop sticking. Chill for 30 minutes to firm up. They are a snack for a bag or a desk drawer, and keep well in the fridge.',
    ing: [
      '100 g rolled oats',
      '100 g smooth peanut butter',
      '80 g honey',
      '40 g vanilla protein powder',
      '2 tbsp milk',
      '1 pinch salt',
      '50 g dark chocolate chips'
    ],
    st: [
      'Warm the peanut butter and honey in a bowl for 20 seconds and stir until smooth.',
      'Stir in the oats, protein powder and salt, then the milk a tablespoon at a time, until the mixture holds when squeezed.',
      'Fold in the chocolate chips.',
      'Roll into 16 balls with damp hands and chill for 30 minutes.'
    ],
    tips: [
      'Warm the peanut butter and honey first.',
      'Add the milk gradually.',
      'Use a neutral-tasting powder.',
      'Roll with damp hands.'
    ],
    pair: ['Hot coffee', 'Banana', 'Greek yoghurt', 'Cold milk'],
    store: 'Keeps in the fridge for 1 week.',
    nut: [113, 5, 12, 5, 1, 6, 20]
  },

  'peanut-butter-energy-bites': {
    d: 'Oats, peanut butter, honey, ground flaxseed and chocolate chips stirred together and rolled into bite-sized balls.',
    meta: 'Peanut butter energy bites: oats, peanut butter, honey, flaxseed and chocolate chips rolled into balls. Sixteen bites, no cooking.',
    kw: ['peanut butter energy bites', 'no bake peanut butter energy bites', 'oat peanut butter bites', 'peanut butter oat balls', 'easy energy bites'],
    why: 'Autumn is when the lunchboxes come back out, and these are the bite that fits. They are made in a bowl in 15 minutes, with nothing to heat.\n\nStir the peanut butter, honey and vanilla together first. The mixture should be smooth and glossy, with no streaks of honey. **Use a no-stir peanut butter or stir the oil in thoroughly.** Oil that has separated makes the bites greasy on the outside and dry in the middle.\n\nAdd the oats and ground flaxseed and mix until the oats are coated. The mixture will be stiff. Press it with the back of a spoon to check it holds together, and add a splash of water if it does not.\n\nFold in the chocolate chips, then roll into 16 bites with wet hands. Chill for 30 minutes before eating, so the honey sets and the bites hold their shape. They keep for a week in the fridge in a covered tin.',
    ing: [
      '100 g rolled oats',
      '100 g smooth peanut butter',
      '60 g honey',
      '30 g ground flaxseed',
      '1 tsp vanilla extract',
      '40 g chocolate chips'
    ],
    st: [
      'Stir the peanut butter, honey and vanilla until smooth and glossy.',
      'Stir in the oats and flaxseed until coated. Add a splash of water if the mixture will not hold together.',
      'Fold in the chocolate chips and roll into 16 bites with wet hands.',
      'Chill for 30 minutes.'
    ],
    tips: [
      'Stir the oil in thoroughly.',
      'Mix until the oats are coated.',
      'Roll with wet hands.',
      'Chill before eating.'
    ],
    pair: ['Hot coffee', 'Fresh fruit', 'Cold milk', 'Natural yoghurt'],
    store: 'Keeps in the fridge for 1 week.',
    nut: [88, 3, 10, 4, 2, 4, 5]
  }
};
