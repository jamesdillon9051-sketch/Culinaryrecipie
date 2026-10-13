'use strict';

/**
 * Volume forty-six — roasts, sides, snacks and sweets.
 *
 * Eighteen dishes to finish the volume: roast vegetables and beetroot, two
 * pasta suppers with mince, a peas pulao, a tomato salad, onion chutney,
 * apple sauce, frozen banana pops, a mug cake, fairy cakes, oat bars, two
 * pinwheels and pizza muffins, a herb butter, a tomato sauce and lentil
 * sloppy joes. Times are the recipe's own; ovens and hobs differ, so each
 * method says what to look for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'roast-vegetables': {
    d: 'Potatoes, carrots, parsnips, red onion and peppers roasted together with olive oil, garlic and thyme.',
    meta: 'Roast vegetables: potatoes, carrots, parsnips, onion and peppers roasted with olive oil, garlic and thyme. Four servings, cooked for 40 minutes.',
    kw: ['roast vegetables', 'oven roasted vegetables', 'roasted mixed vegetables', 'roast vegetables with thyme', 'roast root vegetables and peppers'],
    why: 'Why do roast vegetables so often come out soft and pale? Because the tray is crowded, the oven is not hot enough, or the vegetables are cut in sizes that finish at different times.\n\nCut the harder vegetables, such as potatoes, carrots and parsnips, into pieces about 3 cm across. Cut the softer ones, such as peppers and onion, into larger chunks, since they cook faster. That way everything is ready together. **Use two trays if one is crowded.** Vegetables that touch each other steam, and steam never browns.\n\nToss them in oil and seasoning in a big bowl, not on the tray. Every piece should shine.\n\nA hot oven does the rest. Turn the vegetables once, halfway through. They are ready when the edges are browned and a knife slides through the thickest piece with no resistance.',
    ing: [
      '500 g potatoes, cut into 3 cm pieces',
      '300 g carrots, cut into 3 cm pieces',
      '300 g parsnips, cut into 3 cm pieces',
      '1 red onion, about 150 g, cut into wedges',
      '2 peppers, about 300 g, cut into chunks',
      '4 tbsp olive oil',
      '4 garlic cloves, unpeeled',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) and put 2 large trays inside to heat.',
      'Toss the potatoes, carrots and parsnips with half the oil, the garlic, thyme, salt and pepper in a large bowl.',
      'Spread on one hot tray and roast for 20 minutes.',
      'Toss the onion and peppers with the remaining oil, add to the second tray and roast both trays for 20 minutes more, turning once, until browned and tender.'
    ],
    tips: [
      'Cut the harder vegetables smaller than the soft ones.',
      'Use two trays rather than crowd one.',
      'Preheat the trays for faster browning.',
      'If your oven runs hot, check at 30 minutes.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Plain yoghurt dip', 'Couscous'],
    store: 'Keeps in the fridge for 3 days. Eat cold in a salad or reheat in a hot oven.',
    nut: [359, 5, 51, 15, 11, 13, 660]
  },

  'roast-beetroot': {
    d: 'Whole beetroot roasted in foil until tender, then peeled and sliced and dressed with olive oil, vinegar and a pinch of salt.',
    meta: 'Roast beetroot: whole beetroot roasted in foil until tender, then peeled and dressed with olive oil and vinegar. Four servings, cooked for 50 minutes.',
    kw: ['roast beetroot', 'roasted beetroot', 'oven roasted beetroot', 'beetroot roasted in foil', 'roast beetroot with vinegar'],
    why: 'What is the best way to cook beetroot? Roasted whole in foil, so it steams in its own juices and keeps its colour and sweetness. Boiling leaches both into the water.\n\nLeave the skin on and trim only the long tails and the leaf stalks, leaving a short stump. Cutting into the beetroot makes it bleed. **Wrap each beetroot in foil with a drizzle of oil.** The parcel traps steam and softens the flesh evenly.\n\nSmall beetroot cook in less time than large ones, so choose a similar size. Test by pushing a knife into the middle through the foil. It should slide in easily.\n\nLet them cool until you can handle them. The skin rubs off with your fingers or a paper towel. Slice or cut into wedges and dress while still slightly warm.',
    ing: [
      '800 g beetroot, scrubbed',
      '1 tbsp olive oil',
      '1/4 tsp salt',
      '2 tbsp olive oil, to dress',
      '1 tbsp red wine vinegar',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan).',
      'Drizzle the beetroot with the first measure of oil, sprinkle with the salt and wrap each one in foil.',
      'Roast on a tray for 50 minutes, until a knife slides into the middle easily.',
      'Cool until you can handle them, rub off the skins and cut into wedges. Dress with the second measure of oil, the vinegar and the pepper.'
    ],
    tips: [
      'Keep a short stump of stalk so the beetroot does not bleed.',
      'Wear gloves to stop your hands turning pink.',
      'Choose beetroot of a similar size.',
      'Dress them while slightly warm so they absorb the vinegar.'
    ],
    pair: ['Goat cheese', 'Walnuts', 'Green salad', 'Cold meats'],
    store: 'Keeps in the fridge for 5 days.',
    nut: [187, 3, 19, 11, 6, 14, 300]
  },

  'taco-pasta': {
    d: 'Pasta, beef mince, taco seasoning and tinned tomatoes cooked in one pan, finished with melted cheese.',
    meta: 'Taco pasta: pasta, beef mince, taco seasoning and tomatoes cooked in one pan with cheese on top. Six servings, cooked for 25 minutes.',
    kw: ['taco pasta', 'taco pasta with ground beef', 'beef taco pasta', 'taco pasta with cheese', 'taco seasoned pasta skillet'],
    why: 'Beef mince, pasta shells, a tin of tomatoes, taco seasoning and cheese: a handful of things, and about 35 minutes. The pasta cooks in the sauce itself, so there is one pan and no draining.\n\nBrown the mince first, pressing it into the pan so it forms a crust before you break it up. The seasoning goes in with the browned meat for a minute, which wakes up the spices. **Add the liquid in one go, then leave it alone.** Stirring too much breaks the pasta and makes the sauce gluey.\n\nSmall shapes such as shells or macaroni work best. They cook in the same time as the sauce thickens.\n\nCheese goes on top at the end with the lid on for 2 minutes. It melts into the sauce and holds the whole dish together.',
    ing: [
      '1 tbsp vegetable oil',
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '3 tbsp taco seasoning',
      '400 g tinned chopped tomatoes',
      '500 ml beef stock',
      '300 g dried pasta shells',
      '100 g tinned sweetcorn, drained',
      '120 g cheddar, grated'
    ],
    st: [
      'Heat the oil in a large deep pan and brown the mince with the onion for 8 minutes, breaking it up.',
      'Stir in the taco seasoning for 1 minute.',
      'Add the tomatoes, stock and pasta and bring to the boil. Cover and simmer for 12 minutes, stirring twice, until the pasta is tender.',
      'Stir in the sweetcorn, top with the cheese, cover and leave for 2 minutes to melt.'
    ],
    tips: [
      'Use small pasta shapes that cook in the sauce.',
      'Stir only twice while the pasta simmers.',
      'Add more stock if the pasta soaks up all the liquid.',
      'Taste before salting, as taco seasoning is salty.'
    ],
    pair: ['Sour cream', 'Green salad', 'Tortilla chips', 'Sliced avocado'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [519, 30, 48, 23, 4, 5, 470]
  },

  'beef-and-pasta-skillet': {
    d: 'Beef mince, onion, peppers and macaroni simmered in a tomato sauce in one pan, finished with cheddar.',
    meta: 'Beef and pasta skillet: beef mince, peppers and macaroni simmered in tomato sauce in one pan. Six servings, cooked for 25 minutes.',
    kw: ['beef and pasta skillet', 'beef and macaroni skillet', 'ground beef pasta skillet', 'beef mince and macaroni', 'cheesy beef and pasta skillet'],
    why: 'It looks like a pasta bake and cooks like a stew, which is why a deep pan works better than a baking dish. Everything simmers together, and the pasta draws flavour from the sauce as it softens.\n\nBrown the mince first, then the onion and pepper. The caramelised bits that stick to the pan lift off when the liquid goes in, and they flavour the whole sauce. **Do not drain the fat off completely.** A spoonful of it carries the flavour.\n\nMacaroni or small shells are best. Long pasta needs breaking and tangles in the sauce. Add enough stock for the pasta to cook, and check at 10 minutes in case it needs more.\n\nCheese goes in at the end and melts into the sauce rather than sitting on top. Taste and adjust the salt before serving.',
    ing: [
      '1 tbsp vegetable oil',
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, diced',
      '2 garlic cloves, crushed',
      '400 g tinned chopped tomatoes',
      '500 ml beef stock',
      '1 tsp dried oregano',
      '300 g dried macaroni',
      '120 g cheddar, grated'
    ],
    st: [
      'Heat the oil in a large deep pan and brown the mince for 6 minutes, breaking it up.',
      'Add the onion and pepper and cook for 4 minutes. Add the garlic for 1 minute.',
      'Add the tomatoes, stock, oregano and macaroni. Bring to the boil, cover and simmer for 12 minutes, stirring twice, until the pasta is tender.',
      'Stir in most of the cheese, then top with the rest and leave for 2 minutes to melt.'
    ],
    tips: [
      'Brown the mince well for a deeper sauce.',
      'Stir sparingly while the pasta cooks.',
      'Add a splash of water if the sauce gets too thick.',
      'Taste before adding salt.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Sweetcorn', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [503, 29, 45, 23, 3, 5, 470]
  },

  'peas-pulao': {
    d: 'Basmati rice cooked with green peas, whole spices and cumin in one pot, light and fragrant.',
    meta: 'Peas pulao: basmati rice cooked with green peas, whole spices and cumin in one pot. Four servings, cooked for 20 minutes.',
    kw: ['peas pulao', 'matar pulao', 'green peas pulao', 'peas pulao with basmati rice', 'indian peas pulao'],
    why: 'Frozen peas make this a dish for any season, though it belongs especially to spring when fresh ones are in the shops. Peas pulao is a one-pot rice dish with the sweetness of the peas against warm whole spices.\n\nRinse the rice until the water runs clear, then soak it for 15 minutes. Soaked grains cook evenly and stay long and separate. **Use a ratio of rice to water you trust.** Too much water makes the pulao mushy, too little leaves it hard in the middle.\n\nFry the whole spices briefly in hot oil, then the cumin seeds and onion, then the rice. Frying the rice for a minute coats each grain with oil and keeps them apart.\n\nAdd the peas, water and salt, cover tightly and leave it. After the heat goes off, rest the pot for 5 minutes before fluffing.',
    ing: [
      '250 g basmati rice',
      '2 tbsp vegetable oil',
      '2 g cinnamon stick',
      '1 g cloves',
      '2 g green cardamom pods',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, sliced',
      '150 g frozen peas',
      '450 ml water',
      '1/2 tsp salt'
    ],
    st: [
      'Rinse the rice until the water runs clear, soak for 15 minutes and drain.',
      'Heat the oil in a pan with a lid. Fry the cinnamon, cloves, cardamom and cumin for 30 seconds. Add the onion and cook for 5 minutes until golden.',
      'Add the rice and fry for 1 minute. Add the peas, water and salt and bring to the boil.',
      'Cover, lower the heat and cook for 12 minutes. Rest off the heat for 5 minutes, then fluff with a fork.'
    ],
    tips: [
      'Rinse and soak the rice first.',
      'Do not lift the lid while it cooks.',
      'Measure the water carefully.',
      'Remove the whole spices before eating, or warn guests about them.'
    ],
    pair: ['Cucumber raita', 'Dal', 'Pickle', 'Papad'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [340, 7, 60, 8, 4, 4, 300]
  },

  'tomato-salad': {
    d: 'Ripe tomatoes sliced and dressed with olive oil, red wine vinegar, salt and fresh basil.',
    meta: 'Tomato salad: ripe tomatoes dressed with olive oil, red wine vinegar, salt and fresh basil. Four servings, no cooking needed.',
    kw: ['tomato salad', 'simple tomato salad', 'italian tomato salad', 'tomato salad with basil', 'tomato salad with olive oil'],
    why: 'Does a tomato salad really need a recipe? Yes, because the difference between a good one and a bland one lies in a few small decisions, and a recipe records them.\n\nUse the ripest tomatoes you can find, and never refrigerate them. Cold dulls their flavour and turns the flesh mealy. A tomato left at room temperature until it smells sweet makes a better salad than any dressing can. **Salt the tomatoes before the dressing.** Salt draws out the juice, which mixes with the oil and vinegar into a sauce.\n\nCut the tomatoes into thick wedges or slices with a sharp knife. A blunt one crushes them and spills the juice.\n\nLet the salad stand for 10 minutes. The tomatoes release their juice, the basil perfumes it and the whole bowl comes together. Serve with bread to soak up the dressing.',
    ing: [
      '700 g ripe tomatoes, cut into wedges',
      '1/2 tsp salt',
      '3 tbsp olive oil',
      '1 tbsp red wine vinegar',
      '1/2 red onion, about 50 g, thinly sliced',
      '10 g fresh basil leaves',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the tomatoes in a large bowl and sprinkle with the salt. Leave for 5 minutes.',
      'Add the oil, vinegar, onion and pepper and toss gently.',
      'Tear in the basil and leave for 10 minutes before serving.'
    ],
    tips: [
      'Keep the tomatoes out of the fridge.',
      'Salt them before the dressing goes on.',
      'Cut with a sharp knife so they keep their juice.',
      'Serve with bread to mop up the dressing.'
    ],
    pair: ['Crusty bread', 'Mozzarella', 'Grilled chicken', 'Pasta'],
    store: 'Best eaten within a few hours. The tomatoes release their liquid and the salad turns watery.',
    nut: [139, 2, 8, 11, 2, 5, 300]
  },

  'onion-chutney': {
    d: 'Sliced onions cooked slowly with brown sugar, vinegar and spices until dark, sticky and jam-like.',
    meta: 'Onion chutney: sliced onions cooked slowly with brown sugar, vinegar and spices until dark and sticky. Eight servings, cooked for 40 minutes.',
    kw: ['onion chutney', 'caramelised onion chutney', 'onion chutney for cheese', 'sweet onion chutney', 'homemade onion chutney'],
    why: 'The smell of onions slowly turning from sharp to sweet is the signal that this is working, and it takes longer than you would guess. The onions need to cook right down, past soft and past golden, until they are dark brown and jammy.\n\nSlice the onions thinly and evenly. Thin slices break down into the chutney, while thick ones stay in pieces. Cook them over a low heat with the sugar, stirring now and then. **Do not turn the heat up to speed things.** High heat burns the sugar and leaves a bitter edge.\n\nThe vinegar goes in once the onions are soft. It cuts the sweetness and acts as a preservative. Add the mustard seeds and a pinch of chilli for background warmth.\n\nSimmer until a spoon dragged across the pan leaves a trail that fills slowly. Pot while hot into clean jars.',
    ing: [
      '2 tbsp vegetable oil',
      '1 kg onions, thinly sliced',
      '150 g soft brown sugar',
      '200 ml malt vinegar',
      '1 tsp mustard seeds',
      '1/2 tsp salt',
      '1/4 tsp chilli flakes'
    ],
    st: [
      'Heat the oil in a wide pan over a low heat. Add the onions and cook for 20 minutes, stirring now and then, until very soft.',
      'Add the sugar, vinegar, mustard seeds, salt and chilli flakes and stir until the sugar dissolves.',
      'Simmer for 20 minutes, stirring more often as it thickens, until dark and sticky.',
      'Spoon into clean, warm jars and cool. Seal and store.'
    ],
    tips: [
      'Slice the onions thin and even.',
      'Keep the heat low for the first stage.',
      'Stir often near the end so the chutney does not catch.',
      'Use sterilised jars if you plan to keep it for weeks.'
    ],
    pair: ['Cheddar', 'Cold meats', 'Sausages', 'Cheese on toast'],
    store: 'Keeps in sterilised jars in a cool, dark place for 2 months. Once opened, keep in the fridge and use within 3 weeks.',
    nut: [160, 1, 30, 4, 2, 23, 170]
  },

  'applesauce': {
    d: 'Chopped apples simmered with a little water, sugar and cinnamon until soft, then mashed or blended into a sauce.',
    meta: 'Applesauce: chopped apples simmered with water, sugar and cinnamon, then mashed into a sauce. Six servings, cooked for 20 minutes.',
    kw: ['applesauce', 'homemade applesauce', 'how to make applesauce', 'applesauce with cinnamon', 'easy applesauce'],
    why: 'It goes with pork, spooned over porridge or eaten alone, which makes a jar of homemade applesauce one of the most useful things in the fridge. It costs almost nothing when apples are in season, and it uses fruit that is too soft to eat raw.\n\nYou do not need to peel the apples, though peeled ones give a paler, smoother result. Chop them roughly and cook with the water in a covered pan. **Use very little water.** The apples release their own juice, and added water dilutes the flavour.\n\nOnce the apples collapse, mash them with a fork for a chunky sauce or blend for a smooth one. Sugar is optional and depends on the apples. Taste before sweetening.\n\nCinnamon and a squeeze of lemon bring the flavours forward. Serve warm or cold.',
    ing: [
      '1 kg apples, peeled, cored and chopped',
      '4 tbsp water',
      '30 g sugar',
      '1/2 tsp ground cinnamon',
      '1 tsp lemon juice'
    ],
    st: [
      'Put the apples, water, sugar and cinnamon in a large pan.',
      'Cover and cook over a low heat for 20 minutes, stirring now and then, until the apples are very soft.',
      'Mash with a fork or blend until smooth. Stir in the lemon juice and add more sugar if you like.'
    ],
    tips: [
      'Taste the apples before adding sugar.',
      'Keep the lid on so the apples cook in steam.',
      'Mash for a chunky texture or blend for a smooth one.',
      'Keep a few chunks back and stir them in for texture.'
    ],
    pair: ['Roast pork', 'Porridge', 'Plain yoghurt', 'Pancakes'],
    store: 'Keeps in the fridge for 5 days. Freezes well for up to 3 months.',
    nut: [116, 1, 28, 0, 4, 22, 5]
  },

  'frozen-banana-pops': {
    d: 'Banana halves on sticks dipped in melted chocolate, rolled in chopped peanuts and frozen until firm.',
    meta: 'Frozen banana pops: banana halves on sticks dipped in melted chocolate, rolled in peanuts and frozen. Six servings, frozen for 3 hours.',
    kw: ['frozen banana pops', 'chocolate covered frozen bananas', 'frozen banana popsicles', 'banana pops with chocolate', 'frozen chocolate bananas on a stick'],
    why: 'Freeze the bananas first. That is the short sharp rule for this recipe, because a banana dipped in chocolate while still soft slides off the stick and the coating never sets. A properly frozen banana grips the chocolate and cools it in seconds.\n\nPeel and halve the bananas, push a stick into the cut end of each half and freeze them on a tray lined with baking paper. They need at least 2 hours before dipping. **Work quickly once the bananas are out of the freezer.** They begin to soften in a minute or two.\n\nMelt the chocolate gently, over a pan of hot water or in short bursts in the microwave. Add a teaspoon of oil to make it thin enough to coat evenly and set with a thin, crisp shell.\n\nRoll in nuts immediately, while the chocolate is wet, then return to the freezer to set.',
    ing: [
      '3 bananas, about 400 g, peeled',
      '150 g dark chocolate, chopped',
      '1 tsp vegetable oil',
      '40 g peanuts, finely chopped'
    ],
    rest: [180, 'Freezing'],
    st: [
      'Halve the bananas, push a stick into the cut end of each and freeze on a lined tray for 2 hours.',
      'Melt the chocolate with the oil in a bowl over a pan of hot water, stirring until smooth. Cool for 5 minutes.',
      'Dip each banana in the chocolate, turning to coat, and roll in the peanuts straight away.',
      'Return to the lined tray and freeze for 1 hour until firm.'
    ],
    tips: [
      'Freeze the bananas until hard before dipping.',
      'Work quickly once they leave the freezer.',
      'Add the oil so the chocolate sets in a thin shell.',
      'Swap the peanuts for sprinkles if you prefer.'
    ],
    pair: ['Vanilla ice cream', 'Fresh berries', 'Hot coffee'],
    store: 'Keeps in the freezer for 2 weeks in an airtight box with baking paper between the pops.',
    nut: [257, 4, 31, 13, 5, 20, 5]
  },

  'vanilla-mug-cake': {
    d: 'A single-serving sponge of flour, sugar, milk and vanilla mixed in a mug and cooked in the microwave.',
    meta: 'Vanilla mug cake: a single-serving sponge mixed in a mug and cooked in the microwave. One serving, cooked for 2 minutes.',
    kw: ['vanilla mug cake', 'microwave vanilla mug cake', 'vanilla cake in a mug', 'single serve vanilla cake', 'mug cake with egg'],
    why: 'Most mug cakes come out rubbery, and the fix is to use less than you think of everything, including cooking time. A cake in a mug has very little mass, so it overcooks in seconds, and it keeps cooking for a moment after the microwave stops.\n\nUse a wide, straight-sided mug of about 300 ml. The batter should fill it by no more than half, because the cake rises and spills over if it has no room. **Mix until just smooth.** A beaten batter turns tough and chewy.\n\nMicrowave power varies a lot. Start with 1 minute 30 seconds, then check and add 10 seconds at a time. The cake is done when the top looks dry and springs back when pressed lightly.\n\nLet it stand for a minute before eating. The centre sets as it cools.',
    ing: [
      '4 tbsp plain flour',
      '3 tbsp caster sugar',
      '1/4 tsp baking powder',
      '1 pinch salt',
      '1 egg yolk, about 18 g',
      '3 tbsp whole milk',
      '1 tbsp vegetable oil',
      '1/2 tsp vanilla extract'
    ],
    st: [
      'Mix the flour, sugar, baking powder and salt in a 300 ml mug.',
      'Add the egg yolk, milk, oil and vanilla and stir until smooth.',
      'Microwave on high for 1 minute 30 seconds. Check, and add 10 seconds at a time until the top looks dry and springs back.',
      'Stand for 1 minute before eating from the mug.'
    ],
    tips: [
      'Use a wide, straight-sided mug.',
      'Fill it only half full.',
      'Check early and add time in small steps.',
      'Top with jam, cream or ice cream.'
    ],
    pair: ['Vanilla ice cream', 'Jam', 'Whipped cream', 'Fresh berries'],
    store: 'Best eaten straight away.',
    nut: [472, 8, 65, 20, 1, 40, 310]
  },

  'fairy-cakes': {
    d: 'Small, light vanilla sponge cakes baked in paper cases and topped with a thin glacé icing.',
    meta: 'Fairy cakes: small light vanilla sponge cakes baked in paper cases and topped with glacé icing. Twelve cakes, baked for 18 minutes.',
    kw: ['fairy cakes', 'british fairy cakes', 'vanilla fairy cakes', 'fairy cakes with glace icing', 'small sponge cakes'],
    why: 'Flour, butter, sugar, eggs: four things you already own, and about 35 minutes. Fairy cakes are the small, plain cousins of cupcakes, with a lighter sponge and a thin icing instead of a tall swirl of buttercream.\n\nThe method is the classic creaming of butter and sugar. Beat them for a full 3 minutes until pale and fluffy, because the air trapped in that mixture makes the cakes rise. **Use butter at room temperature.** Cold butter does not cream, and melted butter does not hold air.\n\nAdd the eggs one at a time with a spoonful of flour, which stops the mix curdling. Fold in the rest of the flour gently.\n\nFill the paper cases only two thirds full. Bake until golden and springy, then cool completely before icing, or the icing slides off.',
    ing: [
      '125 g butter, softened',
      '125 g caster sugar',
      '2 eggs, about 100 g',
      '125 g self-raising flour',
      '1 tsp vanilla extract',
      '2 tbsp whole milk',
      '150 g icing sugar',
      '2 tbsp water'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a 12-hole bun tin with paper cases.',
      'Beat the butter and caster sugar for 3 minutes until pale and fluffy. Beat in the eggs one at a time with a spoonful of the flour each.',
      'Fold in the remaining flour, vanilla and milk.',
      'Divide between the cases and bake for 18 minutes until golden and springy. Cool completely on a wire rack.',
      'Mix the icing sugar with the water until smooth and spoon a little onto each cake.'
    ],
    tips: [
      'Cream the butter and sugar until pale.',
      'Add the eggs slowly to avoid curdling.',
      'If your oven runs hot, check at 15 minutes.',
      'Cool the cakes fully before icing.'
    ],
    pair: ['Tea', 'Sprinkles', 'Jam', 'Fresh strawberries'],
    store: 'Keeps in an airtight tin for 3 days. Ice on the day you serve them.',
    nut: [213, 2, 31, 9, 0, 23, 10]
  },

  'chewy-oat-granola-bars': {
    d: 'Rolled oats, honey, butter and brown sugar pressed into a tin, baked and cut into chewy bars.',
    meta: 'Chewy oat granola bars: rolled oats, honey, butter and brown sugar pressed into a tin and baked. Twelve bars, baked for 25 minutes.',
    kw: ['chewy oat granola bars', 'homemade granola bars', 'oat granola bars with honey', 'chewy granola bars', 'baked oat bars'],
    why: 'Keep them in the tin until they are cold. That is the short sharp rule for these bars, and the part people skip. Warm, they are soft and crumbly; cold, they set firm enough to cut and carry.\n\nThe mix is only oats, butter, honey and sugar, with raisins for chew. The butter, honey and sugar are melted together and poured over the oats, which coat each flake in a sticky syrup. **Press the mix down very firmly.** The bars hold together because the oats are packed tight, so use the back of a spoon or a flat-bottomed glass.\n\nBake until the edges are golden but the middle is still soft. It will not look done, and that is right. The bars firm up as they cool.\n\nCut into twelve with a sharp knife once completely cold.',
    ing: [
      '150 g butter',
      '100 g honey',
      '100 g soft brown sugar',
      '300 g rolled oats',
      '60 g raisins',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line a 20 cm square tin with baking paper.',
      'Melt the butter, honey and sugar in a pan over a low heat, stirring until the sugar dissolves.',
      'Stir in the oats, raisins, cinnamon and salt until coated. Press very firmly into the tin.',
      'Bake for 25 minutes until golden at the edges. Cool completely in the tin, then cut into 12 bars.'
    ],
    tips: [
      'Press the mix down hard.',
      'Cool the bars fully before cutting.',
      'Use a sharp knife and a sawing motion.',
      'Swap the raisins for chopped dried apricots or chocolate chips.'
    ],
    pair: ['Banana', 'Milk', 'Yoghurt', 'Tea'],
    store: 'Keeps in an airtight tin for 5 days. Freezes well for up to 2 months.',
    nut: [268, 4, 36, 12, 3, 18, 60]
  },

  'pizza-muffins': {
    d: 'Savoury muffins of flour, cheese, tomato paste and oregano with pepperoni, baked in a tin.',
    meta: 'Pizza muffins: savoury muffins of flour, cheese, tomato paste and oregano with pepperoni. Twelve muffins, baked for 20 minutes.',
    kw: ['pizza muffins', 'savoury pizza muffins', 'pepperoni pizza muffins', 'cheese and tomato muffins', 'pizza flavoured muffins'],
    why: 'Mix quickly and stop. That is the short, sharp rule for any muffin, and it matters more for savoury ones. Overmixing builds gluten, and the muffins turn tough with tunnels inside.\n\nThe batter is flour, baking powder, milk, egg and oil, plus tomato paste, cheese, oregano and chopped pepperoni. Combine the dry and wet ingredients separately and fold them together with just a few strokes. **Leave a few streaks of flour showing.** They disappear in the oven.\n\nFill the cases to the top, since savoury muffins do not rise as much as sweet ones. A bit of cheese sprinkled over the top gives a golden crust.\n\nThese are good warm from the tin, and they also pack well for a lunchbox or a picnic.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '1 tsp dried oregano',
      '150 g cheddar, grated',
      '60 g pepperoni, chopped',
      '2 eggs, about 100 g',
      '250 ml whole milk',
      '80 ml vegetable oil',
      '3 tbsp tomato paste'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a 12-hole muffin tin with paper cases.',
      'Mix the flour, baking powder, salt, oregano, 100 g of the cheese and the pepperoni in a large bowl.',
      'Whisk the eggs, milk, oil and tomato paste together and pour into the dry mix. Fold with a few strokes until just combined.',
      'Divide between the cases, sprinkle with the remaining cheese and bake for 20 minutes until golden and risen.'
    ],
    tips: [
      'Fold the batter with as few strokes as you can.',
      'Leave a few streaks of flour.',
      'Check the muffins with a skewer at 18 minutes.',
      'Swap the pepperoni for ham or chopped peppers.'
    ],
    pair: ['Tomato soup', 'Green salad', 'Pizza sauce for dipping', 'Cherry tomatoes'],
    store: 'Keeps in the fridge for 3 days. Freezes for up to 2 months. Reheat until warm.',
    nut: [246, 9, 21, 14, 1, 2, 370]
  },

  'pizza-pinwheels': {
    d: 'Ready-rolled puff pastry spread with tomato paste, grated mozzarella and pepperoni, rolled and sliced into spirals.',
    meta: 'Pizza pinwheels: puff pastry spread with tomato paste, mozzarella and pepperoni, rolled and sliced. Twelve pinwheels, baked for 18 minutes.',
    kw: ['pizza pinwheels', 'puff pastry pizza pinwheels', 'pepperoni pinwheels', 'pizza rolls with puff pastry', 'cheese and tomato pinwheels'],
    why: 'Short, sharp advice: keep the pastry cold. Puff pastry gets its flaky layers from butter that stays solid until it hits the oven. Warm pastry turns sticky and bakes into a dense roll.\n\nUnroll the sheet and spread it with tomato paste, leaving a clean border along one long edge. That border is where the roll seals shut. **Go easy on the toppings.** Too much filling oozes out as the pinwheels bake and burns on the tray.\n\nRoll the pastry tightly from the long side, finishing on the clean border. Chill the log for 15 minutes so it slices neatly. A sharp knife and a sawing action keep the spirals from squashing.\n\nBake on a lined tray until puffed and golden. Eat warm.',
    ing: [
      '320 g ready-rolled puff pastry',
      '3 tbsp tomato paste',
      '1/2 tsp dried oregano',
      '100 g mozzarella, grated',
      '40 g pepperoni, chopped',
      '1 egg, about 50 g, beaten'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a tray with baking paper.',
      'Unroll the pastry and spread with the tomato paste, leaving a 2 cm border along one long edge. Sprinkle with the oregano, mozzarella and pepperoni.',
      'Roll up tightly from the other long edge, finishing on the clean border. Chill for 15 minutes.',
      'Slice into 12 rounds, lay on the tray and brush with the egg. Bake for 18 minutes until puffed and golden.'
    ],
    tips: [
      'Keep the pastry cold throughout.',
      'Do not overfill, or the filling leaks.',
      'Chill the roll before slicing.',
      'Swap the pepperoni for olives or sweetcorn.'
    ],
    pair: ['Tomato dip', 'Green salad', 'Raw vegetable sticks', 'Soup'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the pastry.',
    nut: [154, 5, 11, 10, 1, 1, 280]
  },

  'spinach-pinwheels': {
    d: 'Puff pastry spread with cream cheese, wilted spinach and grated cheddar, rolled and sliced into spirals.',
    meta: 'Spinach pinwheels: puff pastry spread with cream cheese, spinach and cheddar, rolled and sliced. Twelve pinwheels, baked for 20 minutes.',
    kw: ['spinach pinwheels', 'spinach and cheese pinwheels', 'puff pastry spinach pinwheels', 'spinach and cream cheese pinwheels', 'savoury spinach pastry rolls'],
    why: 'Squeeze the spinach dry. Everything else about these pinwheels is simple, and this is the step that decides whether they bake crisp or soggy. Spinach holds a surprising amount of water, and any that stays will soak the pastry from the inside.\n\nWilt the spinach in a dry pan or in a colander with boiling water, cool it and then squeeze it hard in a clean tea towel. It should shrink to a small, dense ball. **Chop it finely.** Long strands drag out of the roll as you slice.\n\nMix the spinach with the cream cheese and cheddar, and season. Spread it thinly, leaving a border along one edge. The filling expands slightly as it bakes.\n\nRoll tightly, chill and slice with a sharp knife. Baked until golden, the layers puff up and the cheese turns gooey inside.',
    ing: [
      '320 g ready-rolled puff pastry',
      '200 g frozen spinach, thawed',
      '120 g cream cheese',
      '80 g cheddar, grated',
      '1/4 tsp ground nutmeg',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '1 egg, about 50 g, beaten'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a tray with baking paper.',
      'Squeeze the spinach very dry and chop it finely. Mix with the cream cheese, cheddar, nutmeg, salt and pepper.',
      'Unroll the pastry and spread with the filling, leaving a 2 cm border along one long edge. Roll up tightly from the other long edge and chill for 15 minutes.',
      'Slice into 12 rounds, lay on the tray and brush with the egg. Bake for 20 minutes until puffed and golden.'
    ],
    tips: [
      'Squeeze the spinach dry in a tea towel.',
      'Spread the filling thin.',
      'Chill the roll so the slices stay neat.',
      'Add a pinch of chilli flakes to the filling for warmth.'
    ],
    pair: ['Tomato dip', 'Green salad', 'Soup', 'Pickles'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the pastry.',
    nut: [181, 5, 11, 13, 1, 1, 300]
  },

  'herb-butter': {
    d: 'Softened butter mixed with parsley, chives, garlic and lemon, rolled in greaseproof paper and chilled to slice.',
    meta: 'Herb butter: softened butter mixed with parsley, chives, garlic and lemon, rolled into a log and chilled. Eight servings, chilled for 1 hour.',
    kw: ['herb butter', 'homemade herb butter', 'parsley and chive butter', 'garlic herb butter', 'compound herb butter'],
    why: 'A good butter on the table turns the plainest meal into something worth sitting down for. Herb butter takes 10 minutes to make, keeps well and lifts everything from steak to a boiled potato.\n\nSoften the butter at room temperature until it gives easily under a finger, but is not oily. If the butter melts, the herbs sink to the bottom and the butter will not set evenly. **Chop the herbs very finely.** Large pieces tear through the slices and look untidy.\n\nGarlic is strong when raw. A single small clove is enough for 125 g of butter, and it mellows as the butter rests. Lemon zest brightens the flavour without adding liquid, which would split the butter.\n\nRoll the butter into a log in greaseproof paper and chill. Slice it into rounds to melt on hot food.',
    ing: [
      '125 g butter, softened',
      '15 g fresh parsley, finely chopped',
      '5 g chives, finely chopped',
      '1 garlic clove, crushed',
      '1 tsp lemon zest',
      '1/4 tsp salt'
    ],
    rest: [60, 'Chilling'],
    st: [
      'Beat the butter with a fork until soft and creamy.',
      'Mix in the parsley, chives, garlic, lemon zest and salt until evenly combined.',
      'Spoon onto a sheet of greaseproof paper, shape into a log and roll up, twisting the ends.',
      'Chill for 1 hour until firm. Slice into rounds to serve.'
    ],
    tips: [
      'Soften the butter at room temperature, not in the microwave.',
      'Chop the herbs finely.',
      'Use one small clove of garlic.',
      'Taste the butter and add salt as you like.'
    ],
    pair: ['Grilled steak', 'Crusty bread', 'Baked potatoes', 'Grilled fish'],
    store: 'Keeps in the fridge for 1 week. Freezes well for up to 3 months.',
    nut: [117, 0, 0, 13, 0, 0, 80]
  },

  'tomato-sauce': {
    d: 'A basic sauce of tinned tomatoes, onion, garlic and olive oil, simmered until thick and sweet.',
    meta: 'Tomato sauce: tinned tomatoes, onion, garlic and olive oil simmered until thick and sweet. Six servings, cooked for 30 minutes.',
    kw: ['tomato sauce', 'basic tomato sauce', 'homemade tomato sauce', 'simple tomato sauce for pasta', 'tomato sauce from tinned tomatoes'],
    why: 'The smell tells you when it is ready: sweet, rounded and a little caramelised, no longer sharp and raw. That change takes about 30 minutes, and it is why a simmered sauce beats a spoonful straight from the tin.\n\nStart with the onion, cooked slowly in plenty of olive oil until soft. It should not brown. Add the garlic for the last minute so it perfumes the oil but does not burn. **Use tinned tomatoes, not fresh, unless it is high summer.** Tinned ones are picked ripe and give a deeper flavour out of season.\n\nSimmer uncovered so the water evaporates. The sauce thickens, the colour darkens and the taste concentrates. A pinch of sugar, if needed, cuts any acidity.\n\nUse it for pasta, pizza, meatballs or baked eggs. It freezes well in portions.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '800 g tinned chopped tomatoes',
      '1/2 tsp salt',
      '1/2 tsp sugar',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oil in a pan over a low heat and cook the onion for 8 minutes until soft but not brown. Add the garlic for 1 minute.',
      'Add the tomatoes, salt, sugar and oregano and bring to a simmer.',
      'Cook uncovered over a low heat for 20 minutes, stirring now and then, until thick.',
      'Taste and adjust the salt and sugar.'
    ],
    tips: [
      'Cook the onion slowly without browning.',
      'Simmer uncovered so the sauce thickens.',
      'Add the sugar only if the sauce tastes sharp.',
      'Blend the sauce if you want it smooth.'
    ],
    pair: ['Spaghetti', 'Pizza', 'Meatballs', 'Baked eggs'],
    store: 'Keeps in the fridge for 5 days. Freezes well for up to 3 months.',
    nut: [107, 2, 9, 7, 2, 5, 200]
  },

  'lentil-sloppy-joes': {
    d: 'Brown lentils simmered in a sweet and tangy tomato sauce with onion and pepper, piled into soft burger buns.',
    meta: 'Lentil sloppy joes: brown lentils simmered in a sweet tomato sauce with onion and pepper, piled into buns. Four servings, cooked for 25 minutes.',
    kw: ['lentil sloppy joes', 'vegetarian sloppy joes', 'sloppy joes with lentils', 'lentil sloppy joe filling', 'meat free sloppy joes'],
    why: 'Lentils, tomato, onion, pepper and a bun: that is the short list for a sloppy joe without any meat in it, and the lentils do the job of mince surprisingly well. They have the right chew and they soak up the sauce.\n\nCook the onion and pepper first until soft, then the garlic and tomato paste. The paste should darken slightly. **Let the paste cook for 1 minute.** Raw tomato paste tastes tinny, and a little frying deepens it.\n\nThe sauce is sweet and tangy: ketchup, a spoonful of brown sugar, mustard and vinegar. Taste and balance it, since ketchups vary in sweetness.\n\nSimmer until thick enough that it holds on a spoon. A watery filling soaks the bun and runs down your wrist, which is part of the fun but not all of it.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, diced',
      '2 garlic cloves, crushed',
      '2 tbsp tomato paste',
      '480 g tinned brown lentils, drained',
      '150 g tomato ketchup',
      '1 tbsp soft brown sugar',
      '1 tsp mustard',
      '1 tbsp apple cider vinegar',
      '150 ml water',
      '4 burger buns, about 240 g'
    ],
    st: [
      'Heat the oil in a pan and cook the onion and pepper for 6 minutes until soft. Add the garlic and tomato paste for 1 minute.',
      'Add the lentils, ketchup, sugar, mustard, vinegar and water and bring to the boil.',
      'Simmer for 12 minutes, stirring now and then, until thick.',
      'Toast the buns, spoon in the lentils and serve hot.'
    ],
    tips: [
      'Cook the tomato paste for a minute before adding liquid.',
      'Mash a few lentils to thicken the sauce.',
      'Taste and adjust the sweetness and vinegar.',
      'Serve with a fork to hand, because it is messy.'
    ],
    pair: ['Coleslaw', 'Oven chips', 'Pickles', 'Sweetcorn'],
    store: 'The filling keeps in the fridge for 4 days. Freezes for up to 3 months. Assemble the buns when serving.',
    nut: [703, 37, 123, 7, 17, 22, 670]
  }
};
