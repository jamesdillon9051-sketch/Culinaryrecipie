'use strict';

/**
 * Volume thirty-eight — chutneys, relishes, jams and spreads.
 *
 * Small-batch preserves cooked in one pan and kept in the fridge, not canned.
 * A serving is a spoonful, so the figures are per spoonful. Times are the
 * recipe's own; fruit and pans differ, so each method says when to test early.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'cranberry-chutney': {
    d: 'Fresh cranberries simmered with apple, onion, ginger and brown sugar for 25 minutes into a sharp, spiced chutney. Sixteen servings of a spoonful in 35 minutes.',
    meta: 'Cranberry chutney: fresh cranberries simmered with apple, onion, ginger and brown sugar into a sharp, spiced chutney for cold meats and cheese.',
    kw: ['cranberry chutney', 'homemade cranberry chutney', 'cranberry chutney with apple', 'easy cranberry chutney', 'cranberry chutney for cheese'],
    why: 'Cranberries are very sharp, and the whole job here is to soften that edge without losing it. Brown sugar and apple do the softening, while ginger and vinegar keep it lively.\n\nThe berries burst within the first 10 minutes, which is the cue that the sugar has done its work. Keep stirring from then on, as the thickening sugar will catch on the base of the pan.\n\nThe chutney is ready when a spoon dragged across the bottom leaves a clear channel for a second. **It thickens a lot as it cools**, so stop while it still looks slightly loose.\n\nIf your hob runs hot, check at 20 minutes. Spoon it into a clean jar while hot, cool and keep in the fridge. It is better after a day, when the spice and fruit have settled together. It is the natural partner to turkey and cold ham, but it is also very good with a sharp cheddar, or spooned over a wedge of brie baked until soft.',
    ing: [
      '300 g fresh cranberries',
      '1 apple, peeled and diced',
      '1 onion, finely chopped',
      '150 g brown sugar',
      '100 ml cider vinegar',
      '1 tsp grated ginger',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt'
    ],
    st: [
      'Put all the ingredients in a medium pan and bring to the boil, stirring.',
      'Simmer over medium-low heat for 25 minutes, stirring often, until the berries burst and the chutney is thick.',
      'Spoon into a clean jar and cool. Keep in the fridge.'
    ],
    tips: [
      'Stir often once the berries burst.',
      'Stop cooking while it still looks a little loose.',
      'If your hob runs hot, check at 20 minutes.',
      'Leave it for a day to settle.'
    ],
    pair: ['Roast turkey', 'Cheddar', 'Cold ham', 'Brie on toast'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'tomato-chutney': {
    d: 'Ripe tomatoes, onions, apples and raisins simmered with malt vinegar and sugar for 90 minutes into a thick, sweet-sharp chutney. Twenty-four servings of a spoonful in 1 hour 50 minutes.',
    meta: 'Tomato chutney: ripe tomatoes, onions, apple and raisins simmered with malt vinegar and sugar into a thick chutney for cheese and cold meats.',
    kw: ['tomato chutney', 'homemade tomato chutney', 'ripe tomato chutney', 'easy tomato chutney', 'tomato chutney for cheese'],
    why: 'A tomato chutney is a slow cook with one rule: let it reduce. The tomatoes release a lot of water, and it all has to leave the pan before the chutney will keep or spread.\n\nChop everything small, so it breaks down evenly. Raisins and apple add body and a rounder sweetness, and malt vinegar gives the dark, tangy backbone that British chutney is known for.\n\nStart over medium heat until it bubbles, then turn down so it simmers lazily for 90 minutes. **Stir every 10 minutes**, and more often in the last half hour as it thickens and starts to stick.\n\nIt is done when you can draw a spoon across the base and the trail stays open. If your hob runs hot, check at 75 minutes. Pot it hot in a clean jar. The flavour mellows after a week. Use ripe, flavourful tomatoes if you can, and do not worry about the skins, which soften and disappear into the chutney as it cooks down.',
    ing: [
      '1 kg ripe tomatoes, chopped',
      '2 onions, finely chopped',
      '2 apples, peeled and diced',
      '100 g raisins',
      '250 ml malt vinegar',
      '250 g brown sugar',
      '1 tsp salt',
      '1 tsp mustard seeds',
      '1/2 tsp ground ginger'
    ],
    st: [
      'Put everything in a large heavy pan and bring to the boil, stirring until the sugar dissolves.',
      'Lower the heat and simmer for 90 minutes, stirring every 10 minutes, until thick and glossy.',
      'Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Chop everything small so it breaks down evenly.',
      'Stir more often towards the end.',
      'If your hob runs hot, check at 75 minutes.',
      'Wait a week for the best flavour.'
    ],
    pair: ['Cheddar', 'Ploughmans lunch', 'Sausage rolls', 'Cold roast beef'],
    store: 'Keeps in a clean jar in the fridge for up to 2 months.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'plum-chutney': {
    d: 'Plums stewed with onion, raisins, spices, vinegar and sugar for 75 minutes into a dark, glossy chutney. Twenty-four servings of a spoonful in 1 hour 35 minutes.',
    meta: 'Plum chutney: plums stewed with onion, raisins, mixed spice, vinegar and sugar into a dark, glossy chutney for cheese and cold meats.',
    kw: ['plum chutney', 'homemade plum chutney', 'spiced plum chutney', 'easy plum chutney', 'plum chutney for cheese'],
    why: 'Plums have a tart skin and a sweet middle, and chutney lets you use both. Stone them, chop them roughly and leave the skins on: they dissolve as the fruit cooks and add colour.\n\nCider vinegar suits plums better than malt, since it is lighter and fruitier, and a spoon of mixed spice adds the warm notes that make the chutney taste of autumn.\n\nSimmer gently for 75 minutes, stirring often. The fruit collapses within half an hour, but the chutney needs the rest of the time to lose its liquid and turn thick and glossy.\n\n**A wooden spoon dragged across the base** should leave a trail that stays open for a second. If your hob runs hot, check at 60 minutes. Spoon into a clean jar while hot. Any plum will do, from dark and sharp to golden and sweet, though sharper varieties make a more balanced chutney, so add a little less sugar if yours are very ripe.',
    ing: [
      '800 g plums, stoned and chopped',
      '2 onions, finely chopped',
      '100 g raisins',
      '200 g brown sugar',
      '250 ml cider vinegar',
      '1 tsp mixed spice',
      '1 tsp grated ginger',
      '1/2 tsp salt'
    ],
    st: [
      'Put all the ingredients in a large pan and bring to the boil, stirring to dissolve the sugar.',
      'Simmer over low heat for 75 minutes, stirring often, until dark and thick.',
      'Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Leave the skins on.',
      'Stir often to stop the base catching.',
      'If your hob runs hot, check at 60 minutes.',
      'Let it mature for a few days.'
    ],
    pair: ['Blue cheese', 'Roast pork', 'Cold turkey', 'Oatcakes'],
    store: 'Keeps in a clean jar in the fridge for up to 2 months.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'green-tomato-chutney': {
    d: 'Unripe green tomatoes cooked with apples, onions, raisins and spices in malt vinegar for 90 minutes. Twenty-four servings of a spoonful in 1 hour 50 minutes.',
    meta: 'Green tomato chutney: unripe tomatoes cooked with apples, onions, raisins and spices in malt vinegar into a tangy chutney for cheese and cold meats.',
    kw: ['green tomato chutney', 'homemade green tomato chutney', 'chutney with green tomatoes', 'easy green tomato chutney', 'end of season tomato chutney'],
    why: 'Green tomatoes are what is left at the end of the season, and chutney is the best use for them. They are firm and sharp, so they hold their shape longer than ripe ones and give the chutney a bite.\n\nChop them small, along with the apples and onions. The apples soften the sharpness, and the raisins add a dark sweetness that rounds it off.\n\nKeep the heat low and the pan uncovered. **The vinegar fumes are strong at first**, so open a window. They calm as it simmers.\n\nIt needs 90 minutes to turn thick and brown. If your hob runs hot, check at 75 minutes. Stir often near the end. When the chutney is ready, a spoon pulled across the base should leave a clear channel. Pot into clean jars while hot. Wait a week before eating. Unripe tomatoes are firmer and more sour than ripe ones, which is exactly why the chutney benefits from the extra sugar and the long, slow cooking.',
    ing: [
      '1 kg green tomatoes, chopped',
      '2 apples, peeled and diced',
      '2 onions, finely chopped',
      '100 g raisins',
      '250 g brown sugar',
      '300 ml malt vinegar',
      '1 tsp salt',
      '1 tsp ground ginger',
      '1 tsp mustard seeds'
    ],
    st: [
      'Put all the ingredients in a large pan and bring to the boil, stirring until the sugar dissolves.',
      'Simmer on low heat for 90 minutes, stirring often, until thick and brown.',
      'Spoon into clean jars and cool. Keep in the fridge.'
    ],
    tips: [
      'Open a window as the vinegar heats.',
      'Keep the pan uncovered.',
      'If your hob runs hot, check at 75 minutes.',
      'Let the chutney mature for a week.'
    ],
    pair: ['Mature cheddar', 'Cold pork pie', 'Cheese sandwiches', 'Cold sausages'],
    store: 'Keeps in a clean jar in the fridge for up to 2 months.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'beetroot-relish': {
    d: 'Grated raw beetroot simmered with onion, apple, sugar and red wine vinegar for 45 minutes into a bright, sweet-sharp relish. Sixteen servings of a spoonful in 1 hour 5 minutes.',
    meta: 'Beetroot relish: grated beetroot simmered with onion, apple, sugar and red wine vinegar into a bright, sweet-sharp relish for burgers and cheese.',
    kw: ['beetroot relish', 'homemade beetroot relish', 'beetroot relish for burgers', 'easy beetroot relish', 'beetroot and apple relish'],
    why: 'Beetroot relish is the red slice in an Australian burger, and it works in a sandwich or on a cheeseboard as well. It is sweet, sharp and very simple.\n\nGrate the raw beetroot coarsely so it cooks in the time. Grated onion and apple go in with it and melt away, leaving a soft, jammy mixture.\n\nWear gloves if you want to avoid stained hands. **Beetroot juice stains** skin, wood and plastic for days.\n\nSimmer gently for 45 minutes, stirring often. The relish is ready when the vinegar has mostly gone and the mixture holds a trail across the pan. If your hob runs hot, check at 35 minutes. It thickens as it cools, so spoon it into a clean jar while still a little looser than you want it. A spoonful on a hot burger with a fried egg and a slice of cheese turns it into the classic Australian version, and it also lifts a plain cheese sandwich.',
    ing: [
      '600 g raw beetroot, peeled and grated',
      '1 onion, finely chopped',
      '1 apple, peeled and grated',
      '150 g caster sugar',
      '200 ml red wine vinegar',
      '1 tsp salt',
      '1/2 tsp ground cloves',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put everything in a pan and bring to the boil, stirring to dissolve the sugar.',
      'Simmer on medium-low heat for 45 minutes, stirring often, until thick and glossy.',
      'Spoon into a clean jar and cool. Keep in the fridge.'
    ],
    tips: [
      'Wear gloves to grate the beetroot.',
      'Stir often as it thickens.',
      'If your hob runs hot, check at 35 minutes.',
      'Pot it slightly loose, as it sets on cooling.'
    ],
    pair: ['Beef burgers', 'Goat cheese', 'Ham sandwiches', 'Cheese toasties'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'corn-relish': {
    d: 'Sweetcorn kernels cooked with red pepper, onion, mustard and turmeric in a sweet vinegar for 40 minutes. Sixteen servings of a spoonful in 1 hour.',
    meta: 'Corn relish: sweetcorn cooked with red pepper, onion, mustard and turmeric in a sweet vinegar into a bright yellow relish for barbecues.',
    kw: ['corn relish', 'homemade corn relish', 'sweetcorn relish', 'easy corn relish', 'corn relish for barbecue'],
    why: 'A good corn relish is bright yellow, crunchy and tangy, with a mustard bite at the end. It belongs next to sausages at a barbecue, on ham sandwiches and beside cheese.\n\nThe corn can be fresh, frozen or tinned, so long as it is drained well. Cut the pepper and onion small, close to the size of the kernels, so every spoonful has the same texture.\n\nCornflour and mustard powder thicken the vinegar into a loose, glossy sauce. Whisk them smooth with a little cold vinegar first so they do not clot.\n\n**Do not overcook it**: 40 minutes is enough for the vegetables to soften and keep a little crunch. If your hob runs hot, check at 30 minutes. The colour comes from turmeric, which stains, so use a stainless pan and a clean spoon. Spoon it over sausages straight from the barbecue, stir a little into potato salad, or add it to a cheese and ham toastie for a sharp, sweet contrast.',
    ing: [
      '500 g sweetcorn kernels, drained',
      '1 red pepper, finely diced',
      '1 onion, finely diced',
      '200 ml white wine vinegar',
      '120 g caster sugar',
      '2 tsp mustard powder',
      '1 tsp turmeric',
      '1 tbsp cornflour',
      '1 tsp salt'
    ],
    st: [
      'Whisk the cornflour, mustard powder and turmeric with a little of the vinegar until smooth.',
      'Put the sweetcorn, pepper, onion, rest of the vinegar, sugar and salt in a pan, stir in the paste and bring to the boil.',
      'Simmer for 40 minutes, stirring often, until thick and glossy. Spoon into a clean jar and cool.'
    ],
    tips: [
      'Dice the vegetables to match the corn.',
      'Whisk the powders with cold vinegar first.',
      'If your hob runs hot, check at 30 minutes.',
      'Drain tinned or frozen corn well.'
    ],
    pair: ['Grilled sausages', 'Ham sandwiches', 'Burgers', 'Cheese platter'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'pickled-beetroot': {
    d: 'Cooked beetroot sliced and packed in a sweet, spiced vinegar brine simmered for 20 minutes. Sixteen servings in 35 minutes.',
    meta: 'Pickled beetroot: cooked beetroot sliced and packed in a sweet, spiced vinegar brine, ready to eat with cold meats and salads.',
    kw: ['pickled beetroot', 'homemade pickled beetroot', 'sweet pickled beetroot', 'easy pickled beetroot', 'pickled beetroot in vinegar'],
    why: 'Pickled beetroot is sharp, sweet and bright pink, and it makes a plain salad look like a plan. Making it yourself means you control the sweetness, and there is no sulphurous jar smell.\n\nBoil the beetroot whole in their skins until tender, which takes about 45 minutes depending on size. Keeping the skin on stops the colour bleeding out, and the skins rub off easily once they are cool.\n\nThe brine is vinegar, water, sugar, peppercorns and bay, simmered for 20 minutes. **Pour it over the beetroot while hot**, so the flavour goes in quickly.\n\nIf you use ready-cooked beetroot, check it is not already in vinegar. Leave the jar for a day. The beetroot keeps getting better as the brine soaks into the slices. Add a few sliced red onions or a pinch of caraway to the jar if you like, and use the leftover brine to quick-pickle a handful of sliced cucumber.',
    ing: [
      '800 g cooked beetroot, peeled and sliced',
      '300 ml malt vinegar',
      '150 ml water',
      '100 g caster sugar',
      '6 black peppercorns',
      '2 bay leaves',
      '1 tsp salt'
    ],
    st: [
      'Pack the sliced beetroot into clean jars.',
      'Simmer the vinegar, water, sugar, peppercorns, bay and salt for 20 minutes.',
      'Pour the hot brine over the beetroot, making sure it is covered. Cool, seal and keep in the fridge.'
    ],
    tips: [
      'Pour the brine over hot.',
      'Keep the beetroot fully covered.',
      'If your hob runs hot, check the brine at 15 minutes.',
      'Wait a day before eating.'
    ],
    pair: ['Cold ham', 'Cheddar sandwiches', 'Green salad', 'Boiled eggs'],
    store: 'Keeps in the fridge in its brine for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'raspberry-jam': {
    d: 'Raspberries cooked with sugar and lemon juice for 20 minutes to a soft set. Twenty-four servings of a spoonful in 30 minutes.',
    meta: 'Raspberry jam: raspberries cooked with sugar and lemon juice for 20 minutes to a soft, bright set, with no added pectin.',
    kw: ['raspberry jam', 'homemade raspberry jam', 'easy raspberry jam', 'raspberry jam without pectin', 'small batch raspberry jam'],
    why: 'Raspberries set easily because they carry their own pectin, so this jam needs only fruit, sugar and lemon. No pectin to buy, and nothing to measure but weight.\n\nMash the fruit lightly with the sugar and let it sit for 10 minutes to draw out the juice. Cooking then dissolves the sugar before the fruit reaches a boil, which keeps the flavour fresh.\n\nBoil hard for about 20 minutes, stirring often. **Skim off the foam** with a spoon or it will cloud the jar.\n\nTest for a set with a chilled saucer: put a drop on it, wait a minute, and push with a finger. If it wrinkles, it is ready. If your hob runs hot, test at 12 minutes. Spoon into clean jars and cool. The jam thickens as it chills. A small batch like this is easy to manage in a wide pan, and the colour and flavour are better when you do not cook more than a kilo at once.',
    ing: [
      '1 kg raspberries',
      '750 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Mash the raspberries lightly with the sugar and lemon juice in a wide pan and leave for 10 minutes.',
      'Heat gently, stirring, until the sugar dissolves, then boil hard for 20 minutes, skimming the foam.',
      'Test a drop on a chilled saucer. When it wrinkles, spoon the jam into clean jars. Cool and keep in the fridge.'
    ],
    tips: [
      'Chill a saucer for the set test.',
      'Skim the foam off as it cooks.',
      'If your hob runs hot, test at 12 minutes.',
      'Use a wide pan so it reduces faster.'
    ],
    pair: ['Scones', 'Buttered toast', 'Yoghurt', 'Victoria sponge'],
    store: 'Keeps in a clean jar in the fridge for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'blackberry-jam': {
    d: 'Blackberries boiled with sugar and lemon juice for 20 minutes into a deep purple jam. Twenty-four servings of a spoonful in 30 minutes.',
    meta: 'Blackberry jam: blackberries boiled with sugar and lemon juice for 20 minutes into a deep purple, lightly seeded jam.',
    kw: ['blackberry jam', 'homemade blackberry jam', 'easy blackberry jam', 'blackberry jam without pectin', 'small batch blackberry jam'],
    why: 'Blackberries are the classic hedgerow jam, deep purple and a little wild. They have plenty of pectin early in the season and less late on, so the lemon juice matters.\n\nWash the berries gently and drain them well. Wet fruit stretches the cooking time, and the jam can end up runny.\n\nSimmer the berries first with a splash of water for 5 minutes to soften the skins, then add the sugar and stir until it dissolves. **Do not boil before the sugar has dissolved**, or the jam may crystallise in the jar.\n\nBoil hard for about 15 minutes more. Test with a chilled saucer: a drop that wrinkles when pushed is set. If your hob runs hot, test at 12 minutes. Sieve out the seeds if you prefer a smooth jam, though most people leave them in. Pick the berries on a dry day if you forage them, and look them over for small insects, then rinse briefly and drain on kitchen paper.',
    ing: [
      '1 kg blackberries',
      '3 tbsp water',
      '750 g caster sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Simmer the blackberries with the water for 5 minutes until the skins soften.',
      'Add the sugar and lemon juice and stir over low heat until the sugar dissolves.',
      'Boil hard for 15 minutes, until a drop wrinkles on a chilled saucer. Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Drain the washed berries well.',
      'Dissolve the sugar before boiling.',
      'If your hob runs hot, test at 12 minutes.',
      'Use the saucer test, not the clock.'
    ],
    pair: ['Toast', 'Porridge', 'Scones', 'Vanilla ice cream'],
    store: 'Keeps in a clean jar in the fridge for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'plum-jam': {
    d: 'Stoned plums simmered with sugar, a splash of water and lemon juice for 35 minutes into a rich, dark jam. Twenty-four servings of a spoonful in 50 minutes.',
    meta: 'Plum jam: stoned plums simmered with sugar, water and lemon juice for 35 minutes into a rich, dark jam with a tart edge.',
    kw: ['plum jam', 'homemade plum jam', 'easy plum jam', 'plum jam without pectin', 'small batch plum jam'],
    why: 'Plum jam is dark, tart and a bit grown-up. The skins hold most of the pectin and all of the colour, so leave them on and let them soften as the fruit cooks.\n\nHalve and stone the plums and cut each half in two. Cook them gently in a splash of water first, until they collapse. **Add the sugar only when the fruit is soft**, because sugar toughens the skins if they are still firm.\n\nBoil for about 20 minutes, stirring often. Plums are sticky, so keep the heat medium and scrape the base as you stir.\n\nTest with a chilled saucer. A drop that wrinkles when you push it is set. If your hob runs hot, test at 25 minutes. Spoon into clean jars and cool. A few stones in the pan add a faint almond flavour, if you remove them before potting. If the jam seems very tart when you taste it, add a spoon more sugar, but wait until the plums are soft so you can judge it properly.',
    ing: [
      '1 kg plums, halved and stoned',
      '100 ml water',
      '750 g caster sugar',
      '1 tbsp lemon juice'
    ],
    st: [
      'Simmer the plums with the water for 15 minutes until soft.',
      'Add the sugar and lemon juice and stir until dissolved.',
      'Boil for 20 minutes, until a drop wrinkles on a chilled saucer. Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Soften the plums before adding the sugar.',
      'Stir often so it does not catch.',
      'If your hob runs hot, test at 25 minutes.',
      'Use the saucer test.'
    ],
    pair: ['Toast', 'Yoghurt', 'Rice pudding', 'Cheese toasties'],
    store: 'Keeps in a clean jar in the fridge for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'apricot-jam': {
    d: 'Halved apricots cooked with sugar and lemon juice for 30 minutes into a golden, tangy jam. Twenty-four servings of a spoonful in 45 minutes.',
    meta: 'Apricot jam: halved apricots cooked with sugar and lemon juice for 30 minutes into a golden, tangy jam with soft pieces of fruit.',
    kw: ['apricot jam', 'homemade apricot jam', 'easy apricot jam', 'apricot jam without pectin', 'small batch apricot jam'],
    why: 'Apricot jam is the one that makes a good glaze as well as a good spread, so a jar is useful twice over. The fruit is sweet, tangy and golden, and it sets well with lemon juice alone.\n\nHalve and stone the apricots and cut the halves into chunks. Cook them with the lemon juice and a little water until soft, which takes about 10 minutes.\n\nAdd the sugar and stir over a low heat until it dissolves. **Raise the heat only when you cannot see any grains**, then boil for about 20 minutes. Stir often, as apricot jam catches on the base more than most.\n\nTest on a chilled saucer: a drop that wrinkles when pushed is set. If your hob runs hot, test at 20 minutes. Pot into clean jars while hot. A spoonful stirred with a splash of water and warmed in a pan makes a glossy glaze for fruit tarts and sponge cakes, so it earns its place twice.',
    ing: [
      '1 kg apricots, halved and stoned',
      '100 ml water',
      '700 g caster sugar',
      '3 tbsp lemon juice'
    ],
    st: [
      'Cook the apricots with the water and lemon juice for 10 minutes until soft.',
      'Add the sugar and stir over low heat until dissolved.',
      'Boil for 20 minutes, until a drop wrinkles on a chilled saucer. Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Stir often so it does not catch.',
      'Dissolve the sugar before boiling.',
      'If your hob runs hot, test at 20 minutes.',
      'Warm a spoonful to glaze cakes and tarts.'
    ],
    pair: ['Croissants', 'Toast', 'Fruit tarts', 'Yoghurt'],
    store: 'Keeps in a clean jar in the fridge for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'rhubarb-jam': {
    d: 'Chopped rhubarb boiled with sugar, lemon and ginger for 25 minutes into a pink, tart jam. Twenty-four servings of a spoonful in 40 minutes.',
    meta: 'Rhubarb jam: chopped rhubarb boiled with sugar, lemon and ginger for 25 minutes into a pink, tart jam that spreads softly.',
    kw: ['rhubarb jam', 'homemade rhubarb jam', 'easy rhubarb jam', 'rhubarb and ginger jam', 'small batch rhubarb jam'],
    why: 'Rhubarb has very little pectin, so a pure rhubarb jam is soft and spoonable rather than firm. That is no fault: it is a spread for toast and yoghurt more than a jam for slicing.\n\nCut the stalks into small pieces and cook them with the sugar and lemon from the start, stirring until the sugar dissolves. The pieces collapse into strands within 10 minutes.\n\nGinger lifts the tartness and gives a warm edge. **Use stalks that are firm and pink**, since the green or woody ones are stringy.\n\nBoil for about 25 minutes until the jam thickens and a drop on a chilled saucer wrinkles when you push it. If your hob runs hot, test at 18 minutes. Spoon into clean jars. It will keep setting a little as it cools. Because it is a loose-set jam, it works especially well as a swirl through porridge or yoghurt, or folded into whipped cream for a quick fool.',
    ing: [
      '800 g rhubarb, cut into 2 cm pieces',
      '600 g caster sugar',
      '3 tbsp lemon juice',
      '1 tbsp grated ginger'
    ],
    st: [
      'Put the rhubarb, sugar, lemon juice and ginger in a wide pan and stir over low heat until the sugar dissolves.',
      'Boil for 25 minutes, stirring often, until thick.',
      'Test a drop on a chilled saucer. Spoon into clean jars, cool and keep in the fridge.'
    ],
    tips: [
      'Choose firm, pink stalks.',
      'Stir often to stop it sticking.',
      'If your hob runs hot, test at 18 minutes.',
      'Expect a softer set than other jams.'
    ],
    pair: ['Scones', 'Porridge', 'Rice pudding', 'Greek yoghurt'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'fig-jam': {
    d: 'Chopped fresh figs simmered with sugar, lemon juice and a pinch of cinnamon for 40 minutes into a thick, dark jam. Twenty-four servings of a spoonful in 50 minutes.',
    meta: 'Fig jam: chopped fresh figs simmered with sugar, lemon juice and a pinch of cinnamon into a thick, dark jam for cheese and toast.',
    kw: ['fig jam', 'homemade fig jam', 'easy fig jam', 'fresh fig jam', 'fig jam for cheese'],
    why: 'Figs are very sweet but low in acid, so the lemon juice does two jobs: it helps the jam set and it keeps the taste from going flat.\n\nTrim off the stalks and chop the figs, skin and all. The skins soften completely and the seeds give a pleasant crunch, like a nut.\n\nCook the figs with the sugar and lemon over low heat until the sugar dissolves, then simmer for 40 minutes. **Stir often** because figs are sticky and burn easily on the base of the pan.\n\nThe jam is ready when it is thick enough to leave a trail when you drag a spoon across the pan, and it will thicken more as it cools. If your hob runs hot, check at 30 minutes. Pot into a clean jar. It goes with soft cheese and cured meats. Slightly under-ripe figs work as well as soft ones, because the cooking does the softening, so this is a good way to use fruit that never quite ripened.',
    ing: [
      '800 g fresh figs, stalks removed and chopped',
      '400 g caster sugar',
      '4 tbsp lemon juice',
      '100 ml water',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Put all the ingredients in a wide pan and stir over low heat until the sugar dissolves.',
      'Simmer for 40 minutes, stirring often, until thick and glossy.',
      'Spoon into a clean jar, cool and keep in the fridge.'
    ],
    tips: [
      'Stir often because figs stick.',
      'Do not skip the lemon juice.',
      'If your hob runs hot, check at 30 minutes.',
      'Leave the skins on.'
    ],
    pair: ['Goat cheese', 'Brie', 'Prosciutto', 'Buttered toast'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'almond-butter': {
    d: 'Roasted almonds blended for about 15 minutes into a smooth, creamy butter with a pinch of salt. Sixteen servings of a spoonful in 20 minutes.',
    meta: 'Almond butter: roasted almonds blended for about 15 minutes into a smooth, creamy spread with a pinch of salt and nothing else.',
    kw: ['almond butter', 'homemade almond butter', 'easy almond butter', 'smooth almond butter', 'almond butter in a food processor'],
    why: 'Two things go into almond butter: almonds and patience. Nothing else is needed, and the food processor does the work as long as you give it time.\n\nRoast the nuts first for 10 minutes at 180°C. Warm nuts release their oil more easily, and the roasting adds a deeper, toasted flavour. Cool them for 5 minutes before blending, as they should be warm, not hot.\n\nThe processor goes through stages. First a coarse meal, then a thick clump, then a crumbly paste, and finally, after about 15 minutes, a smooth, pourable butter. **Stop to scrape down the sides** every few minutes.\n\nIf your machine runs hot, pause for a minute now and then. Add the salt at the end. It thickens in the fridge, so stir before use. Different machines take different times, so judge by texture rather than the clock, and be patient with the stage that looks like dry crumbs.',
    ing: [
      '400 g whole almonds',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C. Roast the almonds on a tray for 10 minutes. Cool for 5 minutes.',
      'Blend in a food processor for 15 minutes, scraping down the sides every few minutes, until smooth.',
      'Add the salt and blend for 1 minute. Spoon into a clean jar.'
    ],
    tips: [
      'Roast the almonds first.',
      'Scrape down the sides often.',
      'If your machine runs hot, pause for a minute now and then.',
      'Stir before using, as the oil separates.'
    ],
    pair: ['Toast', 'Banana slices', 'Porridge', 'Apple wedges'],
    store: 'Keeps in a clean jar in the fridge for up to 4 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'chocolate-spread': {
    d: 'Roasted hazelnuts blended with dark chocolate, cocoa and icing sugar into a smooth, spreadable hazelnut chocolate spread. Sixteen servings of a spoonful in 15 minutes.',
    meta: 'Chocolate spread: roasted hazelnuts blended with melted dark chocolate, cocoa and icing sugar into a smooth, spreadable hazelnut spread.',
    kw: ['chocolate spread', 'homemade chocolate spread', 'chocolate hazelnut spread', 'easy chocolate spread', 'nutella style spread'],
    why: 'Hazelnuts and chocolate belong together, and homemade spread proves it. It tastes of real nuts and real chocolate rather than oil and sugar, and you decide how sweet it is.\n\nRoast the hazelnuts at 180°C for 10 minutes, then rub them in a tea towel to remove the loose skins. Blend them warm for about 8 minutes until they turn to a runny butter.\n\n**Melt the chocolate separately**, in a bowl over hot water, and stir it in with the cocoa, icing sugar, oil and salt. Add the chocolate to the nuts while both are warm, so it blends smoothly without seizing.\n\nBlend for a further 2 minutes, then taste. Add a little more sugar if you want it sweeter. The spread is soft when warm and firms as it cools, so stir it before using from the fridge. Use a chocolate you enjoy eating on its own, since there is little to hide behind, and choose one with at least 60 per cent cocoa for balance.',
    ing: [
      '250 g hazelnuts',
      '150 g dark chocolate',
      '3 tbsp cocoa powder',
      '60 g icing sugar',
      '2 tbsp vegetable oil',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C. Roast the hazelnuts for 10 minutes and rub off the loose skins.',
      'Blend the warm nuts in a food processor for 8 minutes until runny.',
      'Melt the chocolate and add it to the nuts with the cocoa, icing sugar, oil and salt. Blend for 2 minutes. Spoon into a clean jar.'
    ],
    tips: [
      'Rub off the skins after roasting.',
      'Blend the nuts while they are still warm.',
      'If your machine runs hot, pause for a minute now and then.',
      'Adjust the sugar to taste.'
    ],
    pair: ['Toast', 'Pancakes', 'Strawberries', 'Waffles'],
    store: 'Keeps in a clean jar in the fridge for up to 3 weeks.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  }
};
