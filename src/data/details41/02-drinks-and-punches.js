'use strict';

/**
 * Volume forty-one — drinks, cordials and punches.
 *
 * Smoothies and coffees, fruit cordials to keep in the fridge, punches for a
 * crowd, mocktails, and hot drinks for the cold months. Times are the
 * recipe's own. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'apple-pie-smoothie': {
    d: 'A thick smoothie of apple, banana, oats, yoghurt and cinnamon that tastes of the pie.',
    meta: 'Apple pie smoothie: apple, banana, oats, yoghurt and cinnamon blended thick. Two servings, no cooking.',
    kw: ['apple pie smoothie', 'apple cinnamon smoothie', 'apple and oat smoothie', 'apple pie smoothie with yoghurt', 'apple banana smoothie'],
    why: 'Blend the oats first. That one step is the difference between a smooth drink and a gritty one.\n\nRolled oats need about 20 seconds on their own with the milk, until they break down into a fine, creamy base. If they go in with everything else, the blades chase soft fruit around and leave flakes behind. **Add the ice last.** It crushes on top of the other ingredients and chills the whole jug.\n\nA ripe banana gives the sweetness and the body, so the smoothie needs no sugar. Use a firm apple with the skin on, cut into chunks, because the skin adds colour and a little tartness that is part of the pie flavour.\n\nBlend for a full minute, taste, and add a pinch more cinnamon if you like. It should be thick enough to need a spoon. If it is stiff, thin it with a splash of milk. Drink it at once, because the oats continue to swell as it stands.',
    ing: [
      '40 g rolled oats',
      '250 ml milk',
      '1 apple, about 150 g, chopped',
      '1 ripe banana, about 120 g peeled',
      '100 g plain yoghurt',
      '1 tsp ground cinnamon',
      '1 tbsp maple syrup',
      '100 g ice cubes'
    ],
    st: [
      'Blend the oats with the milk for 20 seconds until the oats are broken down.',
      'Add the apple, banana, yoghurt, cinnamon and maple syrup and blend until smooth.',
      'Add the ice and blend for 30 seconds. Pour into two glasses and serve at once.'
    ],
    tips: [
      'Blend the oats first.',
      'Add the ice last.',
      'If it is too thick, add a splash of milk.',
      'Drink it at once.'
    ],
    pair: ['Toast with butter', 'Hot coffee', 'A boiled egg', 'Fresh berries'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day; stir before drinking.',
    nut: [327, 13, 53, 7, 6, 29, 80]
  },

  'blackcurrant-cordial': {
    d: 'A deep purple fruit syrup made by simmering blackcurrants with sugar and water, to be diluted with still or sparkling water.',
    meta: 'Blackcurrant cordial: blackcurrants simmered with sugar and water into a syrup to dilute. Makes about ten servings, cooked for 15 minutes.',
    kw: ['blackcurrant cordial', 'homemade blackcurrant cordial', 'blackcurrant syrup', 'blackcurrant squash', 'blackcurrant drink concentrate'],
    why: 'Blackcurrants are sharp, so they can carry a lot of sugar without turning sickly. A cordial is simply that balance in a bottle, ready to be diluted at the table.\n\nSimmer the fruit with the water for 10 minutes first, until the skins split and the juice runs dark. Crushing the berries against the side of the pan helps. **Do not boil hard.** A fierce boil drives off the aroma that makes blackcurrant taste of itself.\n\nPour the mixture into a sieve lined with muslin and let it drip without pressing. Pressing makes the cordial cloudy and bitter. Return the juice to the pan with the sugar and the lemon juice and warm it for 5 minutes, stirring until the sugar has dissolved.\n\nPour into a clean bottle while hot. Dilute one part cordial to four or five of cold water, to taste. If your hob runs hot, keep the heat low enough that the surface barely moves.',
    ing: [
      '500 g blackcurrants',
      '500 ml water',
      '300 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Simmer the blackcurrants with the water over medium-low heat for 10 minutes, crushing the fruit lightly with a spoon.',
      'Strain through muslin without pressing.',
      'Return the juice to the pan with the sugar and lemon juice. Warm for 5 minutes, stirring, until the sugar has dissolved.',
      'Pour into a clean bottle. Dilute one part cordial to four or five parts water.'
    ],
    tips: [
      'Simmer gently; do not boil hard.',
      'Do not press the fruit.',
      'If your hob runs hot, keep the heat low.',
      'Use a clean, sterilised bottle.'
    ],
    pair: ['Sparkling water', 'Vanilla ice cream', 'Gin', 'Lemonade'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [144, 0, 36, 0, 2, 34, 5]
  },

  'caramel-macchiato': {
    d: 'Steamed vanilla milk marked with a shot of espresso and a drizzle of caramel sauce.',
    meta: 'Caramel macchiato: vanilla milk marked with a shot of espresso and caramel sauce. One serving, ready in 8 minutes.',
    kw: ['caramel macchiato', 'homemade caramel macchiato', 'iced caramel macchiato', 'caramel macchiato at home', 'vanilla caramel coffee'],
    why: 'It looks like a latte and is built the other way up, which is why it carries a different name. The espresso goes in last, onto the milk, so that the first sip is sweet and milky and the last is strong.\n\nWarm the milk with the vanilla and syrup in a small pan, stirring, until it steams but does not boil, about 3 minutes. Whisk it hard for 20 seconds so that it foams. **Boiled milk tastes flat and cooked.** Stop at the point where the pan is too hot to touch for long.\n\nPour the milk into a tall glass, spooning the foam on top. Then pour the espresso slowly through the foam so that it leaves a brown mark, and finish with the caramel in a criss-cross.\n\nNo espresso machine is needed. Strong coffee from a moka pot or a small, very concentrated cup of instant works. If your hob runs hot, take the milk off the heat as soon as it steams.',
    ing: [
      '250 ml milk',
      '1 tbsp vanilla syrup',
      '30 ml espresso',
      '1 tbsp caramel sauce'
    ],
    st: [
      'Warm the milk and vanilla syrup in a small pan for 3 minutes until steaming. Do not boil.',
      'Whisk hard for 20 seconds until foamy and pour into a tall glass, spooning the foam on top.',
      'Pour the espresso slowly through the foam.',
      'Drizzle the caramel sauce over the top in a criss-cross.'
    ],
    tips: [
      'Do not let the milk boil.',
      'Pour the espresso slowly.',
      'If your hob runs hot, lift the pan off at the first steam.',
      'Use strong coffee.'
    ],
    pair: ['Shortbread', 'Almond croissant', 'Biscotti', 'Fresh fruit'],
    store: 'Best drunk at once.',
    nut: [226, 9, 25, 10, 0, 23, 130]
  },

  'christmas-punch': {
    d: 'A big bowl of cranberry juice, orange juice and ginger ale with orange slices and frozen cranberries.',
    meta: 'Christmas punch: cranberry juice, orange juice and ginger ale with orange slices and cranberries. Twelve servings, no cooking.',
    kw: ['christmas punch', 'non alcoholic christmas punch', 'cranberry orange christmas punch', 'holiday punch', 'christmas party punch'],
    why: 'Cranberry juice, orange juice, ginger ale, ice: four ingredients, a bowl, and a drink that looks right on a Christmas table. It also serves twelve with one stir.\n\nThe colour is the point. Deep red juice with orange slices and a few floating cranberries looks festive without any effort. **Freeze some of the cranberry juice in an ice cube tray.** Cubes made of juice chill the punch without watering it down, which ordinary ice does within the hour.\n\nMix the juices in the bowl ahead of time and chill them. Add the ginger ale at the last minute, because it loses its fizz within about 20 minutes of being poured. A bottle that is still cold and unopened until the guests arrive makes the difference.\n\nLadle into glasses with a few of the cubes and a slice of orange in each. For a grown-up version, a splash of sparkling wine in each glass works well.',
    ing: [
      '1 litre cranberry juice, chilled',
      '500 ml orange juice, chilled',
      '750 ml ginger ale, chilled',
      '2 oranges, sliced',
      '100 g fresh cranberries',
      '200 ml cranberry juice for ice cubes'
    ],
    st: [
      'Pour the 200 ml cranberry juice into an ice cube tray and freeze it for 3 hours. Chill the other drinks.',
      'Stir the 1 litre cranberry juice and the orange juice together in a large bowl. Add the orange slices and cranberries.',
      'Just before serving, pour in the ginger ale and add the juice ice cubes. Ladle into glasses.'
    ],
    tips: [
      'Freeze juice cubes instead of using plain ice.',
      'Add the ginger ale at the last moment.',
      'Keep everything cold.',
      'Float the fruit for colour.'
    ],
    pair: ['Mince pies', 'Cheese straws', 'Sausage rolls', 'Gingerbread'],
    store: 'Best on the day. Keep the mixed juices in the fridge for 2 days and add the ginger ale fresh.',
    rest: [180, 'Freezing the juice cubes'],
    nut: [104, 1, 25, 0, 1, 18, 10]
  },

  'cinderella-mocktail': {
    d: 'A layered non-alcoholic drink of orange, pineapple and lemon juice topped with ginger ale and a splash of cranberry juice.',
    meta: 'Cinderella mocktail: orange, pineapple and lemon juice topped with ginger ale and cranberry. Two servings, no cooking.',
    kw: ['cinderella mocktail', 'cinderella drink', 'non alcoholic cinderella', 'orange pineapple mocktail', 'cinderella mocktail recipe'],
    why: 'Autumn dinner parties and summer garden tables both call for a drink that looks as if it took effort. This one takes two minutes and a long spoon.\n\nThe three juices go in first, with ice, and are shaken or stirred hard for 10 seconds until the outside of the glass frosts. Strain them into tall glasses over fresh ice. **Pour the cranberry juice last, over the back of a spoon.** It sinks through the orange layer slowly and leaves a streak of red.\n\nGinger ale goes on top for fizz. It adds a little spice and keeps the drink from tasting like plain fruit juice. Add it gently, or the bubbles break up the layers.\n\nGarnish with an orange slice and a cherry if you have them. Taste before you serve: if the pineapple juice is very sweet, add a squeeze of extra lemon. Serve straight away while the layers are clear.',
    ing: [
      '150 ml orange juice',
      '100 ml pineapple juice',
      '2 tbsp lemon juice',
      '100 ml ginger ale',
      '50 ml cranberry juice',
      '150 g ice cubes',
      '2 orange slices'
    ],
    st: [
      'Stir the orange juice, pineapple juice and lemon juice with half the ice for 10 seconds.',
      'Strain into two tall glasses filled with the remaining ice.',
      'Top with the ginger ale, then pour the cranberry juice slowly over the back of a spoon.',
      'Add an orange slice to each glass and serve at once.'
    ],
    tips: [
      'Pour the cranberry juice over a spoon.',
      'Add the ginger ale gently.',
      'Taste and add lemon if the juice is very sweet.',
      'Serve at once.'
    ],
    pair: ['Canapes', 'Cheese straws', 'Fruit salad', 'Sandwiches'],
    store: 'Best drunk at once.',
    nut: [169, 2, 38, 1, 4, 27, 10]
  },

  'cranberry-spritzer': {
    d: 'Cranberry juice and sparkling water over ice with a squeeze of lime.',
    meta: 'Cranberry spritzer: cranberry juice and sparkling water over ice with lime. Four servings, no cooking.',
    kw: ['cranberry spritzer', 'cranberry juice spritzer', 'cranberry lime spritzer', 'non alcoholic cranberry spritzer', 'cranberry sparkling water'],
    why: 'A spritzer is cranberry juice with its sweetness stretched. Straight cranberry juice is tart and heavy, and sparkling water makes it lighter and crisper.\n\nUse equal amounts of juice and sparkling water for a balanced drink, or a little more water if you like it dry. Pour the juice over the ice first and top with the water slowly. **Pouring the water in fast loses the bubbles.** Tilt the glass as you would with a beer.\n\nThe lime does more than it seems to. A squeeze cuts through the sweetness and makes the red look brighter. A few fresh cranberries on top look pretty and add a little tartness if you bite one.\n\nChill the juice and the water well before you start, so the ice melts slowly. It is a good drink for a table where some guests do not drink alcohol, and for anyone who wants something sharper than lemonade.',
    ing: [
      '400 ml cranberry juice, chilled',
      '400 ml sparkling water, chilled',
      '200 g ice cubes',
      '2 limes, juice of 1 and 1 sliced',
      '40 g fresh cranberries'
    ],
    st: [
      'Fill four glasses with ice and pour 100 ml of the cranberry juice into each.',
      'Squeeze in the juice of one lime.',
      'Tilt each glass and top slowly with the sparkling water.',
      'Add lime slices and a few cranberries and serve at once.'
    ],
    tips: [
      'Chill everything first.',
      'Pour the water slowly.',
      'Squeeze the lime in last for a sharper taste.',
      'Serve straight away.'
    ],
    pair: ['Roast turkey', 'Cheese board', 'Canapes', 'Mince pies'],
    store: 'Best drunk at once.',
    nut: [64, 0, 16, 0, 1, 13, 5]
  },

  'cucumber-mint-cooler': {
    d: 'Cucumber, mint, lime and sugar blended with cold water and strained into a pitcher over ice.',
    meta: 'Cucumber mint cooler: cucumber, mint, lime and sugar blended with cold water. Four servings, no cooking.',
    kw: ['cucumber mint cooler', 'cucumber and mint drink', 'cucumber mint lime cooler', 'cucumber cooler', 'non alcoholic cucumber mint drink'],
    why: 'On a hot afternoon, in the garden, with a jug on the table: that is when this drink earns its place. It tastes of very little but cold, green and fresh, which is exactly what is wanted.\n\nBlend the cucumber with the mint, lime juice, sugar and half the water until smooth, and strain through a fine sieve. The sieve matters because unstrained cucumber leaves a pulp that settles at the bottom. **Press the pulp with a spoon to get every drop.** Most of the flavour sits in the juice you can squeeze out.\n\nAdd the remaining water and taste. A spoonful more sugar rounds off the edges if the cucumber is bitter. Chill the jug for at least 30 minutes if you can, though ice will do the job if you cannot.\n\nServe it over plenty of ice with extra mint leaves and thin slices of cucumber in each glass. For a longer drink, top up with sparkling water.',
    ing: [
      '1 cucumber, about 350 g, chopped',
      '1 handful mint leaves, about 15 g',
      '3 limes, juice only, about 90 ml',
      '3 tbsp caster sugar',
      '700 ml cold water',
      '200 g ice cubes'
    ],
    st: [
      'Blend the cucumber, mint, lime juice, sugar and 350 ml of the water until smooth.',
      'Strain through a fine sieve into a jug, pressing the pulp with a spoon.',
      'Stir in the remaining water and taste, adding more sugar if needed.',
      'Serve over the ice with extra mint and cucumber slices.'
    ],
    tips: [
      'Strain through a fine sieve.',
      'Press the pulp.',
      'Taste before serving.',
      'Serve over lots of ice.'
    ],
    pair: ['Cucumber sandwiches', 'Scones', 'Barbecue food', 'Fresh salads'],
    store: 'Best on the day. Keeps in the fridge for 1 day; stir before pouring.',
    nut: [64, 1, 15, 0, 1, 11, 5]
  },

  'fruit-punch': {
    d: 'A party bowl of pineapple, orange and cranberry juice with lemonade, sparkling water and sliced fruit.',
    meta: 'Fruit punch: pineapple, orange and cranberry juice with lemonade and sparkling water. Twelve servings, no cooking.',
    kw: ['fruit punch', 'non alcoholic fruit punch', 'party fruit punch', 'fruit punch for a crowd', 'pineapple orange fruit punch'],
    why: 'A birthday for twelve, a street party, a school fair: fruit punch is the drink for a crowd. It needs no skill, only a large bowl and cold ingredients.\n\nThe base is three juices, chosen to balance each other. Pineapple gives sweetness and a tropical scent, orange gives body, and cranberry gives colour and a little tartness. **Mix the juices ahead and add the fizzy drinks at the end.** Lemonade and sparkling water go flat quickly, so they should meet the punch just before it is served.\n\nSlice the fruit and add it to the bowl. The oranges and strawberries give colour, and the fruit soaks up the juice and is nice to eat from the bottom of a glass.\n\nKeep the bowl on ice if the day is hot. Taste once everything is in, and add a little more lemonade if the punch is too sharp or more cranberry juice if it is too sweet.',
    ing: [
      '750 ml pineapple juice, chilled',
      '500 ml orange juice, chilled',
      '500 ml cranberry juice, chilled',
      '750 ml lemonade, chilled',
      '500 ml sparkling water, chilled',
      '2 oranges, sliced',
      '200 g strawberries, sliced',
      '300 g ice cubes'
    ],
    st: [
      'Stir the pineapple, orange and cranberry juices together in a large punch bowl.',
      'Add the sliced oranges and strawberries.',
      'Just before serving, pour in the lemonade and sparkling water and add the ice.',
      'Stir gently and ladle into glasses with some fruit.'
    ],
    tips: [
      'Add the fizzy drinks at the last minute.',
      'Keep everything cold.',
      'Taste and adjust before serving.',
      'Keep the bowl on ice in hot weather.'
    ],
    pair: ['Party sandwiches', 'Sausage rolls', 'Cupcakes', 'Fruit skewers'],
    store: 'Best on the day. Keeps the mixed juices in the fridge for 2 days.',
    nut: [108, 1, 26, 0, 2, 21, 10]
  },

  'ginger-ale': {
    d: 'A fresh ginger syrup made with sugar, water and lemon, mixed with sparkling water and served over ice.',
    meta: 'Ginger ale: a fresh ginger syrup with lemon, mixed with sparkling water over ice. Six servings, cooked for 10 minutes.',
    kw: ['ginger ale', 'homemade ginger ale', 'fresh ginger ale', 'ginger syrup soda', 'real ginger ale'],
    why: 'It is the first cold week of the year, and a glass of something hot and spicy in the middle of a salad lunch is the cure. Homemade ginger ale has a bite that the bottled kind lacks.\n\nThe flavour comes from fresh ginger, so use plenty. Grate 100 g with the skin on, which carries a lot of the heat, and simmer it with the sugar and water for 10 minutes. **The longer it steeps, the stronger it gets.** Leave it to sit for 15 minutes off the heat if you like a fiery drink.\n\nStrain it through a fine sieve into a jug, pressing the pulp, and add the lemon juice. The syrup keeps for a fortnight in the fridge and is the base of every glass.\n\nTo serve, pour about 50 ml of syrup over ice and top with 150 ml of cold sparkling water. Adjust the ratio to taste, and add a squeeze of lime or a few mint leaves if you like.',
    ing: [
      '100 g fresh ginger, grated',
      '150 g caster sugar',
      '300 ml water',
      '2 tbsp lemon juice',
      '900 ml sparkling water, chilled',
      '200 g ice cubes'
    ],
    st: [
      'Simmer the ginger with the sugar and water over medium heat for 10 minutes, stirring until the sugar dissolves.',
      'Strain through a fine sieve into a jug, pressing the pulp, and stir in the lemon juice. Cool.',
      'For each glass, pour about 50 ml of syrup over ice and top with 150 ml of sparkling water.'
    ],
    tips: [
      'Grate the ginger with the skin on.',
      'Strain well.',
      'Adjust the syrup to taste.',
      'Keep the sparkling water cold.'
    ],
    pair: ['Roast chicken', 'Sandwiches', 'Gingerbread', 'Fish and chips'],
    store: 'The syrup keeps in the fridge for 2 weeks. Mix with sparkling water just before serving.',
    nut: [112, 0, 28, 0, 0, 25, 5]
  },

  'ginger-cordial': {
    d: 'A sharp, warming cordial of fresh ginger, lemon and sugar to dilute with hot or cold water.',
    meta: 'Ginger cordial: fresh ginger, lemon and sugar simmered into a cordial to dilute. Makes about ten servings, cooked for 20 minutes.',
    kw: ['ginger cordial', 'homemade ginger cordial', 'ginger and lemon cordial', 'ginger syrup', 'fresh ginger cordial'],
    why: 'Where ginger ale is fizzy and sweet, a ginger cordial is stronger and more sharp. It can be diluted with hot water for a winter drink or poured over ice with soda water in summer.\n\nThe ginger is the main ingredient, so grate it rather than slicing. Grating breaks open more of the fibres and gives the syrup a hot, clean bite. **Peel only if the skin is thick or dry.** Young ginger can be left unpeeled.\n\nSimmer the ginger with the sugar and water for 20 minutes, until the liquid is the colour of pale amber and has begun to thicken slightly. Add the lemon zest and juice for the last 5 minutes so that the flavour stays fresh.\n\nStrain through muslin, pour into a clean bottle and cool. Dilute one part cordial to five parts water, or add a splash to hot tea. If your hob runs hot, lower the heat so that the surface only trembles.',
    ing: [
      '150 g fresh ginger, grated',
      '400 g caster sugar',
      '600 ml water',
      '2 lemons, zest and juice'
    ],
    st: [
      'Simmer the ginger with the sugar and water over medium-low heat for 15 minutes.',
      'Add the lemon zest and juice and simmer for 5 minutes more.',
      'Strain through muslin into a clean bottle and cool.',
      'Dilute one part cordial to five parts hot or cold water.'
    ],
    tips: [
      'Grate the ginger.',
      'Add the lemon late.',
      'If your hob runs hot, keep the heat low.',
      'Taste and dilute to your liking.'
    ],
    pair: ['Hot tea', 'Soda water', 'Gingerbread', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 3 weeks.',
    nut: [176, 0, 44, 0, 1, 41, 5]
  },

  'ginger-shot': {
    d: 'A small, sharp drink of fresh ginger, lemon and apple juice blended and strained.',
    meta: 'Ginger shot: fresh ginger, lemon and apple juice blended and strained into six small glasses. No cooking.',
    kw: ['ginger shot', 'homemade ginger shot', 'ginger lemon shot', 'fresh ginger shots', 'ginger and apple juice shot'],
    why: 'A ginger shot is small and fierce. It is a mouthful of fresh ginger, lemon and apple juice that tastes mostly of heat, and it is meant to be drunk in a single swallow.\n\nThe apple juice is there to soften the ginger, not to turn it into a sweet drink. Use a cloudy, unsweetened juice if you can. **Blend the ginger with the juice, not on its own.** The liquid carries it through the blades and gives a smooth result.\n\nStrain through a fine sieve or muslin and press the pulp hard. The first spoonful of pulp holds a lot of the flavour, and wasting it makes a weaker shot. The result is a pale golden liquid with a sharp aroma.\n\nPour into six small glasses, about 50 ml each, and drink at once or keep chilled. A pinch of black pepper in the glass is a common addition. If it is too strong, add a splash of water or a little more apple juice.',
    ing: [
      '100 g fresh ginger, roughly chopped',
      '200 ml apple juice',
      '3 lemons, juice only, about 90 ml',
      '1 pinch black pepper'
    ],
    st: [
      'Blend the ginger with the apple juice for 1 minute until smooth.',
      'Strain through a fine sieve or muslin into a jug, pressing the pulp hard.',
      'Stir in the lemon juice and pepper.',
      'Pour into six small glasses and serve cold.'
    ],
    tips: [
      'Blend the ginger with the juice.',
      'Press the pulp hard.',
      'Dilute if it is too strong.',
      'Serve cold.'
    ],
    pair: ['Fresh orange', 'Breakfast', 'Sparkling water', 'Honey toast'],
    store: 'Keeps in the fridge for 3 days; shake before drinking.',
    nut: [36, 1, 8, 0, 1, 4, 5]
  },

  'gingerbread-latte': {
    d: 'Hot milk steamed with ginger, cinnamon, nutmeg and molasses, poured over a shot of espresso.',
    meta: 'Gingerbread latte: hot milk with ginger, cinnamon, nutmeg and molasses over espresso. Two servings, ready in 10 minutes.',
    kw: ['gingerbread latte', 'homemade gingerbread latte', 'gingerbread spiced latte', 'gingerbread coffee', 'christmas gingerbread latte'],
    why: 'The first cold week of December is when this drink makes sense: dark, spiced, and best held in both hands. Gingerbread flavour is a short list of spices and one sticky sweetener.\n\nWarm the milk with the ginger, cinnamon, nutmeg and treacle for about 4 minutes, whisking, until it steams and the treacle has dissolved. The treacle is the key ingredient, because it gives the dark, slightly bitter note that gingerbread has. **Whisk until the spices have dispersed.** Ground spices float, and the first sip will be thin if they are left on top.\n\nBrew the espresso, or use two small cups of very strong coffee, and divide it between two mugs. Pour the hot spiced milk over it, holding back the foam with a spoon and then adding it on top.\n\nDust with a pinch of cinnamon and serve. If your hob runs hot, keep the heat low, since milk scorches quickly and the sugars in the treacle catch.',
    ing: [
      '500 ml milk',
      '2 tbsp black treacle',
      '1 tsp ground ginger',
      '1/2 tsp ground cinnamon',
      '1/4 tsp ground nutmeg',
      '60 ml espresso',
      '1 pinch ground cinnamon for dusting'
    ],
    st: [
      'Warm the milk with the treacle, ginger, cinnamon and nutmeg over low heat for 4 minutes, whisking, until steaming. Do not boil.',
      'Pour the espresso into two mugs.',
      'Pour the spiced milk over the espresso, holding back the foam, then spoon the foam on top.',
      'Dust with the pinch of cinnamon.'
    ],
    tips: [
      'Whisk the spices in well.',
      'Do not let the milk boil.',
      'If your hob runs hot, keep the heat low.',
      'Taste and add more treacle for a darker flavour.'
    ],
    pair: ['Gingerbread men', 'Shortbread', 'Mince pies', 'Whipped cream'],
    store: 'Best drunk at once.',
    nut: [213, 9, 24, 9, 0, 22, 130]
  },

  'green-juice': {
    d: 'A bright green juice of cucumber, celery, apple, lemon and spinach blended with water and strained.',
    meta: 'Green juice: cucumber, celery, apple, lemon and spinach blended and strained. Two servings, no cooking.',
    kw: ['green juice', 'homemade green juice', 'cucumber celery green juice', 'green juice with apple', 'green juice without a juicer'],
    why: 'Cucumber, celery, apple, lemon, spinach: five things and a blender. There is no need for a juicer, which many kitchens do not have.\n\nBlend everything with a cup of cold water for a full minute until the mixture looks like a smooth green slush, then strain. A nut milk bag or a fine sieve both work. **Strain it hard or it will be gritty.** The pulp holds a lot of fibre that is pleasant in a smoothie but unpleasant in a juice.\n\nThe apple gives sweetness, so there is no need to add sugar. The lemon brightens the flavour and keeps the colour green for longer. Without it the juice goes brown within the hour.\n\nDrink it cold, straight away, over ice if you like. If the juice is too earthy, add half an apple more. If it is too sweet, add more lemon. The leftover pulp can be stirred into soup or a smoothie rather than thrown away.',
    ing: [
      '1 cucumber, about 350 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '1 apple, about 150 g, chopped',
      '1 lemon, juice only, about 30 ml',
      '60 g baby spinach',
      '250 ml cold water'
    ],
    st: [
      'Blend the cucumber, celery, apple, lemon juice, spinach and water for 1 minute until smooth.',
      'Strain through a fine sieve or nut milk bag, pressing hard.',
      'Pour into two glasses over ice and drink at once.'
    ],
    tips: [
      'Strain it well.',
      'Include the lemon to keep the colour.',
      'Drink it straight away.',
      'Use the pulp in soup.'
    ],
    pair: ['Wholegrain toast', 'A boiled egg', 'Fresh fruit', 'Porridge'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day; shake before drinking.',
    nut: [105, 3, 21, 1, 5, 12, 70]
  },

  'homemade-cola': {
    d: 'A cola-style syrup of citrus zest, cinnamon, cloves, vanilla and brown sugar, mixed with sparkling water.',
    meta: 'Homemade cola: a spiced citrus syrup with cinnamon, cloves and vanilla, mixed with sparkling water. Eight servings, cooked for 20 minutes.',
    kw: ['homemade cola', 'cola syrup', 'homemade cola recipe', 'diy cola with spices', 'cola from scratch'],
    why: 'Orange, lime, cinnamon, clove and vanilla: those are the flavours that most people recognise as cola. Brown sugar adds the caramel note and the dark colour.\n\nSimmer the zests, spices and sugar with the water for 20 minutes, until the syrup has reduced a little and smells like the real thing. **Do not use more clove than the recipe says.** It is the strongest spice here and a few too many make the drink taste like a dentist.\n\nStrain the syrup through a fine sieve and add the vanilla and the lemon juice after the heat is off, because vanilla loses its fragrance when boiled. The lemon adds the sharpness that gives cola its bite.\n\nTo serve, mix one part syrup to four parts cold sparkling water over ice. Taste the first glass and adjust the ratio. The syrup keeps for two weeks in the fridge. The drink is a homemade soda, not a copy of any brand.',
    ing: [
      '150 g soft light brown sugar',
      '250 ml water',
      '1 orange, zest only',
      '1 lime, zest only',
      '1 cinnamon stick, about 3 g',
      '3 whole cloves, about 1 g',
      '1 tsp vanilla extract',
      '1 tbsp lemon juice',
      '1 litre sparkling water, chilled',
      '200 g ice cubes'
    ],
    st: [
      'Simmer the sugar, water, orange zest, lime zest, cinnamon and cloves over medium heat for 20 minutes.',
      'Strain through a fine sieve and stir in the vanilla and lemon juice. Cool.',
      'For each glass, pour about 40 ml of syrup over ice and top with 125 ml sparkling water.'
    ],
    tips: [
      'Measure the cloves.',
      'Add the vanilla off the heat.',
      'Taste and adjust the strength.',
      'Keep the sparkling water cold.'
    ],
    pair: ['Burgers', 'Hot dogs', 'Pizza', 'Ice cream'],
    store: 'The syrup keeps in the fridge for 2 weeks.',
    nut: [84, 0, 21, 0, 1, 20, 10]
  },

  'hot-apple-cider': {
    d: 'Apple juice simmered with cinnamon sticks, cloves, orange slices and a little brown sugar.',
    meta: 'Hot apple cider: apple juice simmered with cinnamon, cloves and orange. Six servings, cooked for 25 minutes.',
    kw: ['hot apple cider', 'spiced apple cider', 'homemade hot apple cider', 'warm apple cider', 'mulled apple cider'],
    why: 'The smell arrives first: apples, cinnamon and clove drifting out of the kitchen. It is the reason people make a pot of hot cider rather than just warming juice.\n\nUse a cloudy, pressed apple juice with no added sugar, because a clear, sweet one gives a thin drink. Heat the juice with the spices and sugar over low heat. **Keep it below a boil.** A rolling boil drives off the aroma and makes the spices bitter.\n\nSimmer for 25 minutes, long enough for the flavour to move into the juice. The orange slices add a little sharpness and keep the drink from tasting like warmed pudding. Remove the cloves before serving so that nobody bites one.\n\nLadle into mugs with a cinnamon stick in each, or keep the pot on very low heat for a party. If your hob runs hot, check that the surface is only trembling. The drink is at its best on a cold evening.',
    ing: [
      '1.5 litres cloudy apple juice',
      '3 cinnamon sticks, about 9 g',
      '6 whole cloves, about 2 g',
      '1 orange, sliced',
      '2 tbsp soft light brown sugar'
    ],
    st: [
      'Combine the apple juice, cinnamon, cloves, orange slices and brown sugar in a large pan.',
      'Heat gently, bring to a bare simmer and cook for 25 minutes. Do not boil.',
      'Remove the cloves and ladle into mugs, with a cinnamon stick in each.'
    ],
    tips: [
      'Do not let it boil.',
      'Use cloudy juice.',
      'If your hob runs hot, lower the heat.',
      'Remove the cloves before serving.'
    ],
    pair: ['Apple pie', 'Doughnuts', 'Cheese and crackers', 'Gingerbread'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [148, 1, 36, 0, 2, 32, 10]
  },

  'lemon-ginger-tea': {
    d: 'Fresh ginger and lemon steeped in hot water with a spoonful of honey.',
    meta: 'Lemon ginger tea: fresh ginger and lemon steeped in hot water with honey. Two servings, ready in 15 minutes.',
    kw: ['lemon ginger tea', 'fresh ginger and lemon tea', 'ginger tea with honey', 'homemade lemon ginger tea', 'hot lemon and ginger drink'],
    why: 'It looks like a pot of hot water and tastes like much more. Ginger, lemon and honey have no caffeine and no tea leaves, and can be made in the time it takes to boil a kettle.\n\nSlice the ginger thinly and simmer it for 10 minutes. Thin slices expose more surface than chunks and give a stronger drink. **Add the lemon and honey after the simmer, not during.** Cooked lemon tastes bitter and heated honey loses its scent.\n\nStrain into two mugs, squeeze in the juice of half a lemon each, and stir in the honey a teaspoon at a time. Taste between spoonfuls. The balance is personal: some people want it hot and sharp, others want it sweet.\n\nA slice of lemon floated on top looks good and gives a little extra aroma. Drink while it is hot. If you like it stronger, leave the ginger to steep for another 5 minutes before straining.',
    ing: [
      '40 g fresh ginger, thinly sliced',
      '500 ml water',
      '1 lemon, juice and a few slices',
      '2 tsp honey'
    ],
    st: [
      'Simmer the ginger in the water for 10 minutes.',
      'Strain into two mugs.',
      'Squeeze in the lemon juice and stir in the honey to taste.',
      'Float a lemon slice on each and serve hot.'
    ],
    tips: [
      'Slice the ginger thin.',
      'Add the lemon and honey after simmering.',
      'Steep longer for a stronger drink.',
      'Taste before adding more honey.'
    ],
    pair: ['Shortbread', 'Toast and honey', 'Plain biscuits', 'Fresh fruit'],
    store: 'Best drunk hot, at once.',
    nut: [52, 1, 12, 0, 1, 7, 5]
  },

  'lime-cordial': {
    d: 'A clear, tart lime syrup made with fresh juice, zest and sugar, to dilute with water or soda.',
    meta: 'Lime cordial: a tart lime syrup of fresh juice, zest and sugar. Makes about ten servings, cooked for 10 minutes.',
    kw: ['lime cordial', 'homemade lime cordial', 'fresh lime cordial', 'lime syrup', 'lime juice cordial recipe'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip.\n\nLime juice loses its fresh, green flavour when boiled and tastes flat. So the sugar and water are dissolved first, over gentle heat, and the lime goes in at the end. **Add the juice off the heat.** The syrup is then still warm enough to absorb the zest but too cool to cook the flavour out.\n\nUse unwaxed limes if you can find them, because the zest is part of the flavour. Peel it in wide strips with a vegetable peeler and avoid the white pith, which is bitter. The strips steep in the warm syrup and are removed before bottling.\n\nPour the cordial into a clean bottle and cool. Dilute one part cordial to five parts water, or use it in a gin and soda, a mojito or over ice cream. Roll the limes firmly on the counter before you squeeze them, since this helps to release more juice.',
    ing: [
      '300 g caster sugar',
      '300 ml water',
      '6 limes, zest of 3 in strips and juice of 6, about 180 ml'
    ],
    st: [
      'Warm the sugar and water in a pan over low heat for 10 minutes, stirring until the sugar has dissolved. Do not boil.',
      'Take off the heat and add the lime zest strips. Leave for 5 minutes.',
      'Strain, stir in the lime juice and pour into a clean bottle. Cool.',
      'Dilute one part cordial to five parts water.'
    ],
    tips: [
      'Add the juice off the heat.',
      'Avoid the white pith.',
      'Use a clean, sterilised bottle.',
      'Taste and dilute to your liking.'
    ],
    pair: ['Sparkling water', 'Gin', 'Vanilla ice cream', 'Fresh mint'],
    store: 'Keeps in the fridge for 2 weeks.',
    nut: [128, 0, 32, 0, 1, 30, 5]
  }
};
