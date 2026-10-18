'use strict';

/**
 * Volume fifty — Europe, Africa and Jewish cooking, first part.
 *
 * Twenty-five dishes: a lemon poppy seed cake and jam doughnuts, Middlesbrough
 * chicken parmo, mashed swede, a lasagne cheese sauce, peri peri and Spanish
 * chicken, three Greek dips and Easter bread, Italian steak, breadsticks,
 * granita and torta della nonna, Spanish padrón peppers and cocido, a
 * Portuguese cataplana, Dutch pea soup, Norwegian waffles, Polish pączki and
 * Romanian papanași, Bulgarian banitsa and two Balkan grills. Waits of an
 * hour or more are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'lemon-poppy-seed-cake': {
    d: 'A moist, tender cake of butter, lemon zest, yoghurt and poppy seeds, soaked while warm in a sharp lemon syrup.',
    meta: 'Lemon poppy seed cake: a moist cake of butter, lemon zest, yoghurt and poppy seeds soaked in lemon syrup. Ten servings, baked for 40 minutes.',
    kw: ['lemon poppy seed cake', 'lemon and poppy seed cake', 'lemon poppy seed loaf cake', 'lemon poppy seed cake with syrup', 'moist lemon poppy seed cake'],
    why: 'Does the syrup really matter? Yes. A lemon cake without one is a plain vanilla sponge that happens to contain zest, and a cake with a good soak is moist for days and sharp enough to wake up an afternoon cup of tea. The syrup is a simple one, lemon juice and sugar warmed together, and it goes on while the cake is still hot from the oven.\n\nCream the butter and sugar for a full 4 minutes, until pale and fluffy. Rub the zest into the sugar first with your fingertips, which releases the oils and perfumes the whole cake. Add the eggs one at a time, then fold in the flour, baking powder, poppy seeds and yoghurt. **Do not overmix once the flour goes in.** A few streaks are better than a tight crumb.\n\nBake at 170°C for about 40 minutes, until a skewer comes out clean and the top is golden. Prick the surface all over with the skewer while the cake is still warm in the tin, and spoon the syrup over a little at a time so it sinks in rather than running off.\n\nLeave to cool in the tin. The syrup sets into a thin, glossy crust on the top.',
    ing: [
      '175 g unsalted butter, softened',
      '175 g caster sugar',
      '2 lemons, zest only',
      '3 eggs',
      '200 g plain flour',
      '2 tsp baking powder',
      '3 tbsp poppy seeds',
      '125 g plain yoghurt',
      '1 tbsp lemon juice, for the batter',
      '# Syrup',
      '80 ml lemon juice',
      '60 g caster sugar'
    ],
    st: [
      'Heat the oven to 170°C (150°C fan) and line a 20 cm round tin.',
      'Rub the lemon zest into the sugar. Beat with the butter for 4 minutes until pale and fluffy. Beat in the eggs one at a time.',
      'Fold in the flour, baking powder, poppy seeds, yoghurt and the 1 tbsp lemon juice until just combined.',
      'Spoon into the tin, level the top and bake for 40 minutes until golden and a skewer comes out clean.',
      'Stir the syrup lemon juice and sugar together until dissolved. Prick the warm cake all over and spoon the syrup over slowly. Cool in the tin.'
    ],
    tips: [
      'Use room-temperature eggs to avoid curdling.',
      'Spoon the syrup on in stages.',
      'Add a lemon glaze if you like a sweeter finish.'
    ],
    pair: ['Earl Grey tea', 'Whipped cream', 'Fresh berries', 'Greek yoghurt'],
    store: 'Keeps in an airtight tin for 4 days or freezes for up to 2 months.',
    nut: [345, 6, 42, 17, 1, 25, 120]
  },

  'jam-doughnuts': {
    d: 'Soft, yeasted doughnuts cooked in hot oil, rolled in sugar and filled with raspberry or strawberry jam.',
    meta: 'Jam doughnuts: soft yeasted doughnuts cooked in hot oil, rolled in sugar and filled with raspberry jam. Makes twelve, cooked for 15 minutes.',
    kw: ['jam doughnuts', 'homemade jam doughnuts', 'jam doughnut recipe', 'jam filled doughnuts', 'british jam doughnuts'],
    why: 'The oil is the thing to watch, and the dough should do the rest. A jam doughnut is a rich yeasted dough, risen until puffy, cut into rounds, left to rise again, and cooked in oil at 170°C. Too cool and the dough soaks up oil and goes greasy; too hot and the outside burns before the middle is cooked.\n\nThe dough is bread flour, sugar, yeast, milk, an egg and butter, kneaded for 10 minutes until smooth and elastic. Leave it to rise in a warm place for 1 hour, until doubled. Roll it out to 2 cm thick and cut 8 cm rounds. **Place the rounds on floured paper and let them rise again for 30 minutes.** They should look puffy and hold a dent when pressed gently.\n\nFry in batches of three or four, for 2 minutes on each side, until deep gold. A white band around the middle of each doughnut is a good sign: it means they were light and floated high. Drain, then roll in caster sugar while warm.\n\nCool for 10 minutes, then fill. Push a piping bag with a long nozzle into the side and squeeze in a spoonful of jam.',
    ing: [
      '500 g strong white bread flour',
      '60 g caster sugar',
      '7 g fast-action dried yeast',
      '1/2 tsp salt',
      '250 ml warm milk',
      '1 egg',
      '50 g butter, melted',
      '500 ml vegetable oil, for frying',
      '100 g caster sugar, for rolling',
      '200 g raspberry jam'
    ],
    st: [
      'Mix the flour, 60 g sugar, yeast and salt. Add the milk, egg and butter and knead for 10 minutes until smooth and elastic.',
      'Cover and leave to rise for 1 hour until doubled.',
      'Roll out to 2 cm thick and cut 12 rounds, 8 cm across. Place on floured paper and leave to rise for 30 minutes.',
      'Heat the oil to 170°C. Fry the doughnuts in batches for 2 minutes on each side until deep golden. Drain on kitchen paper and roll in the 100 g sugar.',
      'Cool for 10 minutes. Using a piping bag with a long nozzle, pipe the jam into the side of each doughnut.'
    ],
    tips: [
      'Use a thermometer for the oil.',
      'Do not overcrowd the pan.',
      'Eat them the same day.'
    ],
    pair: ['Hot tea', 'Coffee', 'Hot chocolate', 'Fresh berries'],
    store: 'Best eaten the day they are made.',
    nut: [600, 5, 46, 44, 1, 26, 320],
    rest: [90, 'Proving']
  },

  'chicken-parmo': {
    d: 'A breaded chicken fillet topped with a creamy white béchamel and melted cheese, grilled and served with chips, a Middlesbrough favourite.',
    meta: 'Chicken parmo: a breaded chicken fillet topped with béchamel and melted cheese, served with chips. Four servings, cooked for 25 minutes.',
    kw: ['chicken parmo', 'middlesbrough parmo', 'chicken parmo recipe', 'parmo with bechamel and cheese', 'teesside chicken parmo'],
    why: 'It is not a parmigiana, and it is not Italian. The parmo is a Teesside dish, a breaded cutlet buried under a white sauce and cheese, and the two of them together are as much part of Middlesbrough as the Transporter Bridge. It is the dish for a Friday night, eaten from a polystyrene tray with chips and a lot of salt.\n\nThe chicken is the first thing to get right. Butterfly two breasts and bash them out to about 1 cm thick, so they cook through in the pan. Coat in flour, then beaten egg, then fine breadcrumbs, pressing the crumbs on firmly. **Chill the coated fillets for 15 minutes.** The coating sets and stays on during the cooking.\n\nShallow-fry the fillets in hot oil for 4 minutes on each side, until deep golden. Drain.\n\nThe sauce is a thick béchamel, made with butter, flour, milk, a pinch of nutmeg and salt. Cook until it coats a spoon, then pile it on the cutlets and cover with grated cheddar. Grill for 5 minutes, until the cheese is melted and speckled with brown. Serve with chips and a side of garlic sauce or a salad.',
    ing: [
      '2 chicken breasts, about 600 g',
      '4 tbsp plain flour',
      '2 eggs, beaten',
      '120 g fine breadcrumbs',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '100 ml vegetable oil, for frying',
      '# Béchamel',
      '30 g butter',
      '30 g plain flour',
      '350 ml whole milk',
      '1 pinch ground nutmeg',
      '1/2 tsp salt',
      '150 g cheddar cheese, grated'
    ],
    st: [
      'Slice each chicken breast in half horizontally to make 4 fillets. Flatten each to 1 cm thick between sheets of cling film.',
      'Season the flour with salt and pepper. Coat the fillets in flour, then egg, then breadcrumbs. Chill for 15 minutes.',
      'Melt the butter, stir in the flour and cook for 1 minute. Gradually whisk in the milk and cook, stirring, for 6 minutes until thick. Add the nutmeg and salt.',
      'Heat the oil in a wide pan and cook the fillets for 4 minutes on each side until golden. Drain.',
      'Heat the grill to high. Place the fillets on a tray, spoon over the béchamel, cover with the cheese and grill for 5 minutes until bubbling and golden.'
    ],
    tips: [
      'Flatten the chicken evenly so it cooks at the same rate.',
      'Press the crumbs on firmly.',
      'Serve with chips and a squeeze of garlic mayonnaise.'
    ],
    pair: ['Chips', 'Garlic sauce', 'Coleslaw', 'Side salad'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day and reheats in a hot oven.',
    nut: [844, 55, 39, 52, 2, 6, 1480]
  },

  'mashed-swede': {
    d: 'Swede boiled until tender and mashed with butter, black pepper and a pinch of nutmeg, a sweet, earthy side for roast dinners.',
    meta: 'Mashed swede: swede boiled until tender and mashed with butter, black pepper and nutmeg. Four servings, cooked for 25 minutes.',
    kw: ['mashed swede', 'mashed swede recipe', 'buttery mashed swede', 'swede mash', 'mashed swede with nutmeg'],
    why: 'Is swede a boring vegetable? Only if it is boiled until it is wet and then mashed without any thought. Cooked well, it is sweet, peppery and a little earthy, and with butter it is the best partner a Sunday roast can have.\n\nPeel it generously. The skin of a swede is thick and waxy, and the layer just beneath it is tough and fibrous. Cut the flesh into 3 cm cubes so they cook evenly. Boil in salted water for 20 minutes, until a knife slides in without resistance. **Drain well, and return the swede to the hot pan for 2 minutes.** The steam that escapes means a drier, richer mash.\n\nMash with butter first, then season. A potato masher gives a rustic texture; a ricer or electric whisk gives a smoother, silkier one. Swede holds a lot of water, so let it steam dry before it meets the butter, or the mash will be sloppy.\n\nBlack pepper and a pinch of nutmeg are the traditional seasonings. A spoonful of cream or a few dashes of white pepper work well. In Scotland it is served as neeps beside haggis, and in Cornwall it goes into pasties.',
    ing: [
      '1 swede, about 800 g, peeled and cut into 3 cm cubes',
      '1 tsp salt',
      '40 g butter',
      '1/2 tsp ground black pepper',
      '1 pinch ground nutmeg'
    ],
    st: [
      'Put the swede in a pan, cover with cold water, add the salt and bring to a boil. Simmer for 20 minutes until completely tender.',
      'Drain well and return the swede to the hot pan over a low heat for 2 minutes to steam dry.',
      'Add the butter, pepper and nutmeg and mash until smooth or as coarse as you like. Taste and adjust.'
    ],
    tips: [
      'Steam the swede dry before mashing.',
      'Add the butter in pieces.',
      'Mash with an equal weight of carrots for a sweeter dish.'
    ],
    pair: ['Roast beef', 'Sausages', 'Haggis', 'Roast chicken'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [161, 2, 18, 9, 5, 9, 620]
  },

  'cheese-sauce-for-lasagne': {
    d: 'A smooth white sauce thickened with butter and flour, enriched with parmesan and cheddar, used to layer lasagne and baked pasta.',
    meta: 'Cheese sauce for lasagne: a smooth white sauce enriched with parmesan and cheddar for lasagne and baked pasta. Six servings, cooked for 15 minutes.',
    kw: ['cheese sauce for lasagne', 'white sauce for lasagne', 'bechamel with cheese for lasagne', 'lasagne cheese sauce recipe', 'cheesy bechamel for pasta'],
    why: 'Lumps are the enemy of a white sauce, and the way to avoid them is to add the milk slowly and warm. Cold milk poured straight onto a hot roux seizes the flour into little knots. Warm milk, added a ladleful at a time, produces a smooth sauce in about 10 minutes.\n\nThe base is a roux: equal weights of butter and plain flour, cooked together for 2 minutes over a low heat, until it smells like biscuits and has stopped bubbling. Don\'t let it colour. **Add the first ladle of milk and stir hard until the paste is smooth before adding the next.** After the third ladle, you can pour more freely.\n\nOnce all the milk is in, cook the sauce for 6 minutes, stirring, until it coats the back of a spoon. Season with salt, white pepper and a grating of nutmeg. Take it off the heat before the cheese goes in. Hot sauce on the heat splits and goes stringy.\n\nParmesan gives depth and salt; cheddar gives melt and sharpness. Stir them in until smooth. The sauce should be a little thicker than double cream, since it thins as it bakes.',
    ing: [
      '60 g butter',
      '60 g plain flour',
      '750 ml whole milk, warmed',
      '1/2 tsp salt',
      '1/4 tsp white pepper',
      '1 pinch ground nutmeg',
      '50 g parmesan, finely grated',
      '100 g mature cheddar, grated'
    ],
    st: [
      'Melt the butter in a pan over a low heat. Stir in the flour and cook for 2 minutes without colouring.',
      'Add the warm milk a ladle at a time, whisking until smooth before adding more.',
      'Cook for 6 minutes, stirring, until the sauce coats the back of a spoon. Season with the salt, pepper and nutmeg.',
      'Take off the heat and stir in the parmesan and cheddar until melted and smooth.'
    ],
    tips: [
      'Warm the milk before adding.',
      'Use a whisk and a heavy pan.',
      'Cover the surface with greaseproof paper to prevent a skin if not using at once.'
    ],
    pair: ['Lasagne', 'Cannelloni', 'Baked pasta', 'Cauliflower cheese'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of milk.',
    nut: [284, 12, 14, 20, 0, 6, 490]
  },

  'peri-peri-chicken-thighs': {
    d: 'Chicken thighs marinated in a garlicky, lemony peri peri sauce with chillies and paprika, then roasted until the skin is crisp and charred.',
    meta: 'Peri peri chicken thighs: chicken thighs marinated in a garlicky, lemony chilli sauce and roasted until crisp. Four servings, cooked for 35 minutes.',
    kw: ['peri peri chicken thighs', 'peri peri chicken thighs recipe', 'portuguese peri peri chicken', 'oven peri peri chicken thighs', 'nando\'s style peri peri chicken'],
    why: 'Marinate it for an hour, and make the sauce while you wait. The sauce is a blend of red chillies, garlic, lemon juice, paprika, oregano and olive oil, and it is both marinade and basting liquid. The chicken takes on the flavour, and the sauce that is left is brushed on at the end for a final burst of heat.\n\nBone-in, skin-on thighs are the right cut. They stay juicy under the fierce oven, and the skin crisps into a lacquered shell. Slash each thigh twice, to the bone, so the marinade can get deep into the meat. **Do not rinse off the marinade before roasting.** The chilli and garlic char at the edges, and that is the flavour you want.\n\nRoast on a rack over a tray at 220°C for 35 minutes, turning once, until the thighs are dark at the edges and the juices run clear. Brush with the reserved sauce for the last 5 minutes.\n\nServe with chips, a green salad and extra sauce. The sauce is as hot as you make it: use mild red peppers and a couple of chillies for a gentle version, or bird\'s eye chillies for the real thing.',
    ing: [
      '8 chicken thighs on the bone, skin on, about 1 kg',
      '# Sauce',
      '4 red chillies, roughly chopped',
      '6 garlic cloves',
      '1 red pepper, about 150 g, roasted and peeled',
      '4 tbsp lemon juice',
      '3 tbsp olive oil',
      '2 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1 tsp sugar'
    ],
    st: [
      'Blend the chillies, garlic, red pepper, lemon juice, olive oil, paprika, oregano, salt and sugar to a smooth sauce.',
      'Slash each chicken thigh twice. Coat with two-thirds of the sauce, cover and marinate for 1 hour.',
      'Heat the oven to 220°C (200°C fan). Put the thighs on a rack over a roasting tray.',
      'Roast for 35 minutes, turning once, until charred and cooked through. Brush with the remaining sauce for the last 5 minutes.'
    ],
    tips: [
      'Use a rack so the skin crisps all over.',
      'Reserve some sauce before it touches raw chicken.',
      'Finish under the grill for extra char.'
    ],
    pair: ['Chips', 'Coleslaw', 'Corn on the cob', 'Garlic bread'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [430, 50, 8, 22, 2, 4, 820],
    rest: [60, 'Marinating']
  },

  'spanish-chicken-and-rice': {
    d: 'Chicken thighs and rice cooked with paprika, saffron, tomato and peas in a wide pan until the rice is tender and golden at the edges.',
    meta: 'Spanish chicken and rice: chicken thighs and rice cooked with paprika, saffron, tomato and peas. Four servings, cooked for 35 minutes.',
    kw: ['spanish chicken and rice', 'arroz con pollo spanish', 'spanish chicken rice recipe', 'chicken and rice with paprika and saffron', 'spanish style chicken rice'],
    why: 'The first sign it is ready is the smell: onions and peppers turned sweet in olive oil, then paprika and saffron joining them, then stock. Chicken and rice is a Spanish home dish, simpler than paella but made the same way: a sofrito, a measured amount of stock, and rice that is not stirred.\n\nBrown the chicken first, skin-side down, until deep gold. It leaves behind fat and sticky brown bits that flavour everything. Remove it and cook the onion, pepper and garlic in the same pan until soft, then add the tomato, paprika and saffron. **Cook the tomato until it forms a thick paste.** A watery sofrito makes a bland rice.\n\nStir in the rice to coat it with the sofrito, add hot stock, nestle the chicken back, and bring to a boil. Then lower the heat, cover with a lid or foil, and leave it alone for 18 minutes. The peas go on top for the last 5 minutes.\n\nRest, covered, for 5 minutes. A thin golden crust on the base is a good thing. Serve straight from the pan with lemon wedges.',
    ing: [
      '4 tbsp olive oil',
      '8 chicken thighs on the bone, skin on, about 900 g',
      '1 onion, about 150 g, finely chopped',
      '1 red pepper, about 150 g, diced',
      '4 garlic cloves, crushed',
      '2 tomatoes, about 200 g, grated',
      '2 tsp smoked paprika',
      '1 pinch saffron strands',
      '300 g paella or short-grain rice',
      '750 ml hot chicken stock',
      '1 tsp salt',
      '100 g frozen peas',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide, shallow pan. Brown the chicken, skin-side down, for 8 minutes. Turn and cook for 3 minutes. Remove.',
      'Cook the onion and pepper in the same pan for 6 minutes. Add the garlic, tomatoes, paprika and saffron and cook for 5 minutes until thick.',
      'Stir in the rice for 1 minute. Add the stock and salt, return the chicken and bring to a boil. Cover and cook on low heat for 18 minutes, scattering the peas on top for the last 5.',
      'Rest, covered, for 5 minutes and serve with lemon wedges.'
    ],
    tips: [
      'Do not stir the rice once the stock is in.',
      'Use hot stock so the rice cooks evenly.',
      'Let the base crisp slightly for the best flavour.'
    ],
    pair: ['Green salad', 'Lemon wedges', 'Crusty bread', 'Rioja'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of stock.',
    nut: [749, 55, 76, 25, 5, 6, 1420]
  },

  'taramasalata': {
    d: 'A pale pink Greek dip of cod\'s roe blended with soaked bread, lemon juice and olive oil until creamy and rich.',
    meta: 'Taramasalata: a pale pink Greek dip of cod\'s roe blended with soaked bread, lemon juice and olive oil. Six servings, no cooking.',
    kw: ['taramasalata', 'taramasalata recipe', 'homemade taramasalata', 'greek cod roe dip', 'authentic taramasalata with bread'],
    why: 'The supermarket version is neon pink for a reason: it is coloured. Real taramasalata is pale, creamy beige, the colour of smoked cod\'s roe, and the flavour is smoky, salty and fresh at the same time. It is a ten-minute job in a food processor.\n\nThe roe is salted and often smoked, and it is sold in jars or in a fresh piece. If you buy it fresh, scrape the roe from the skin. If it is a jar, check the ingredients for colouring and heavy preservatives. Soak a thick slice of white bread in water, squeeze it dry and blend it with the roe. The bread is what makes the dip light and fluffy. In Greece, a boiled potato is sometimes used instead.\n\nAdd lemon juice and finely grated onion, then pour in the oil slowly with the motor running. **Add the oil in a thin stream, as for mayonnaise.** Pour it in all at once and the mixture splits.\n\nTaste and adjust: more lemon for sharpness, or a splash of cold water if the dip is too thick. Chill for 30 minutes before serving. Serve with warm pitta, raw vegetables and olives.',
    ing: [
      '100 g smoked cod\'s roe, skin removed',
      '2 slices white bread, about 60 g, crusts removed',
      '1 tbsp finely grated onion',
      '3 tbsp lemon juice',
      '120 ml olive oil',
      '2 tbsp cold water'
    ],
    st: [
      'Soak the bread in cold water for 2 minutes and squeeze it dry.',
      'Put the roe, bread, onion and lemon juice in a food processor and blend until smooth.',
      'With the motor running, add the olive oil in a thin stream, then the water, until pale and creamy.',
      'Taste and adjust. Chill for 30 minutes before serving.'
    ],
    tips: [
      'Add the oil slowly.',
      'Use white, not coloured, roe.',
      'Thin with water if the dip is too thick.'
    ],
    pair: ['Warm pitta', 'Crudités', 'Olives', 'Cucumber'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [211, 4, 6, 19, 0, 1, 60]
  },

  'skordalia': {
    d: 'A thick Greek dip of mashed potato, raw garlic, olive oil and vinegar, with a bite that wakes up fried fish and roast vegetables.',
    meta: 'Skordalia: a thick Greek dip of mashed potato, raw garlic, olive oil and vinegar. Six servings, cooked for 20 minutes.',
    kw: ['skordalia', 'skordalia recipe', 'greek garlic dip', 'greek garlic and potato sauce', 'skordalia with potato'],
    why: 'It tastes of garlic, and nothing in the recipe tries to hide that. Skordalia is a Greek garlic sauce that goes with fried salt cod, beetroot, courgette fritters and roast vegetables, and the amount of garlic is a matter of family pride. Five cloves makes a mild one; eight makes one that clears a room.\n\nThe base is a floury potato, boiled until soft and mashed while hot. Use a ricer if you have one. A food processor makes potato gluey. **Mash the potato while it is still hot and add the olive oil gradually.** Cold potato does not absorb oil, and the sauce turns heavy.\n\nCrush the raw garlic with a pinch of salt in a mortar into a smooth paste, then work in the potato, adding olive oil in a thin stream, as if making mayonnaise. Finish with red wine vinegar. The sauce should be thick enough to hold a spoon, but loose enough to scoop with bread.\n\nTaste and adjust. If it is too sharp, add a splash of water or a little more oil. Serve at room temperature, drizzled with extra olive oil.',
    ing: [
      '400 g floury potatoes, peeled and cut into chunks',
      '1 tsp salt, for the water',
      '6 garlic cloves',
      '1/2 tsp salt',
      '100 ml olive oil',
      '2 tbsp red wine vinegar',
      '2 tbsp water'
    ],
    st: [
      'Boil the potatoes in salted water for 20 minutes until completely soft. Drain well and mash while hot.',
      'Crush the garlic with the 1/2 tsp salt to a smooth paste. Stir into the potato.',
      'Beat in the olive oil in a thin stream, then the vinegar and water, until the sauce is thick and creamy.',
      'Taste and adjust. Serve at room temperature.'
    ],
    tips: [
      'Use floury potatoes such as Maris Piper.',
      'Start with fewer garlic cloves if you are cautious.',
      'Add the oil slowly.'
    ],
    pair: ['Fried fish', 'Roasted beetroot', 'Courgette fritters', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [191, 2, 12, 15, 2, 1, 590]
  },

  'melitzanosalata': {
    d: 'Smoky roasted aubergine mashed with garlic, lemon juice, olive oil and parsley into a rustic Greek dip.',
    meta: 'Melitzanosalata: smoky roasted aubergine mashed with garlic, lemon juice, olive oil and parsley. Six servings, cooked for 45 minutes.',
    kw: ['melitzanosalata', 'greek aubergine dip', 'melitzanosalata recipe', 'greek roasted aubergine salad', 'greek eggplant dip with garlic'],
    why: 'In Greece this is a meze, in a small dish alongside tzatziki and taramasalata, and what makes it different from baba ganoush is the lack of tahini. The dip is roasted aubergine, olive oil, lemon, garlic and parsley, with red wine vinegar, and the flavour is entirely of the aubergine.\n\nThe cooking is where the character comes from. Prick the aubergines and roast them whole at 220°C for 45 minutes, turning once, until the skin is black and wrinkled and the flesh has collapsed. A flame or a hot grill gives more smoke still. **Let them cool, then split them and scrape out the flesh, discarding the skin and any large seeds.**\n\nDrain the flesh in a sieve for 10 minutes. Aubergine holds a good deal of water, which turns the dip bitter and sloppy if left in. Chop it roughly and mix with crushed garlic, olive oil, lemon juice, a splash of vinegar, salt and parsley.\n\nDon\'t blend it smooth: the dip is best a little coarse, with fine strands. Taste and adjust, then rest for 30 minutes so the flavours settle. Serve with warm pitta and olives.',
    ing: [
      '3 aubergines, about 900 g',
      '2 garlic cloves, crushed',
      '4 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tbsp red wine vinegar',
      '1/2 tsp salt',
      '3 tbsp chopped fresh flat-leaf parsley'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Prick the aubergines all over and roast on a tray for 45 minutes, turning once, until collapsed and blackened.',
      'Cool, split open and scrape out the flesh. Drain in a sieve for 10 minutes and chop roughly.',
      'Mix with the garlic, olive oil, lemon juice, vinegar, salt and parsley. Taste and adjust.',
      'Leave to stand for 30 minutes before serving.'
    ],
    tips: [
      'Char the skin well for a smoky flavour.',
      'Drain the flesh so the dip is not watery.',
      'Add a handful of chopped walnuts for a variation.'
    ],
    pair: ['Warm pitta', 'Olives', 'Tzatziki', 'Feta'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [138, 2, 10, 10, 5, 5, 200]
  },

  'tsoureki': {
    d: 'A soft, braided Greek Easter bread scented with orange zest and spices, enriched with eggs and butter and topped with almonds.',
    meta: 'Tsoureki: a soft, braided Greek Easter bread scented with orange zest and spices, enriched with eggs and butter. Ten servings, baked for 30 minutes.',
    kw: ['tsoureki', 'greek easter bread', 'tsoureki recipe', 'greek braided sweet bread', 'tsoureki with orange zest'],
    why: 'It needs time, not skill. Tsoureki is a yeasted bread, and all of its character comes from letting the dough rise slowly. The dough is enriched with eggs, butter and sugar, and it takes about 2 hours to rise the first time and 45 minutes the second, but each stage needs little effort, and the result is a bread with a feathery, stringy crumb.\n\nTraditionally the flavour comes from mahleb (ground cherry stones) and mastic, the resin of a Greek island tree. Neither is easy to find outside Greek shops. Ground cardamom and fresh orange zest give a good approximation: warm, floral and a little citrusy. **Zest the orange over the sugar to catch the oils.**\n\nKnead the dough until smooth and silky, about 10 minutes, and keep it warm while it rises. Divide into three ropes, braid, and place on a lined tray. Tuck red-dyed eggs into the braid for Easter, if you like, securing them with strips of dough.\n\nBrush with beaten egg, scatter with flaked almonds and bake at 180°C for 30 minutes, until deep golden. Cool on a rack. Tsoureki is best the day it is baked, and it makes excellent toast the next.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action dried yeast',
      '100 g caster sugar',
      '1 orange, zest only',
      '1/2 tsp ground cardamom',
      '1/2 tsp salt',
      '150 ml warm milk',
      '3 eggs',
      '75 g butter, melted',
      '1 egg, beaten, for brushing',
      '2 tbsp flaked almonds'
    ],
    st: [
      'Rub the orange zest into the sugar. Mix with the flour, yeast, cardamom and salt.',
      'Add the milk, 3 eggs and butter and knead for 10 minutes until smooth and silky. Cover and leave to rise for 2 hours until doubled.',
      'Divide into 3 ropes, about 40 cm long. Braid them and place on a lined baking tray. Cover and leave to rise for 45 minutes.',
      'Heat the oven to 180°C (160°C fan). Brush the loaf with the beaten egg and scatter with the almonds.',
      'Bake for 30 minutes until deep golden. Cool on a rack.'
    ],
    tips: [
      'Keep the dough in a warm place.',
      'Do not add too much flour while kneading.',
      'Cover loosely with foil if the top browns too fast.'
    ],
    pair: ['Butter', 'Greek coffee', 'Jam', 'Dyed Easter eggs'],
    store: 'Keeps wrapped for 3 days or freezes for up to 2 months.',
    nut: [283, 8, 38, 11, 2, 15, 400],
    rest: [165, 'Proving']
  },

  'bistecca-fiorentina': {
    d: 'A thick T-bone steak of Chianina-style beef cooked quickly over the hottest heat, rare in the middle and charred outside, seasoned only with salt and olive oil.',
    meta: 'Bistecca alla fiorentina: a thick T-bone steak cooked quickly over the hottest heat, rare in the middle, seasoned with salt and olive oil. Four servings, cooked for 15 minutes.',
    kw: ['bistecca fiorentina', 'bistecca alla fiorentina', 'florentine steak', 'tuscan t-bone steak recipe', 'bistecca fiorentina at home'],
    why: 'Short-sharp: salt, heat, beef. A true Florentine steak is 5 cm thick, serves three or four people, and is cooked for about 5 minutes on each side over wood coals. Nothing else goes near it before the plate, because everything else would be a distraction. At home, the same steak is cooked in a smoking-hot cast iron pan or on a grill.\n\nBuy the right cut: a T-bone or porterhouse at least 4 cm thick, about 1.2 kg. A thin steak overcooks before it chars. Take it out of the fridge an hour before cooking so the middle is not cold. **Dry the surface completely and salt it only just before it goes on the heat.**\n\nSear for 4 minutes on each side, then stand the steak on its bone for 3 minutes so the meat next to the bone cooks. The inside should be deep red and warm, 50°C on a thermometer, and the outside nearly black in places.\n\nRest it on a board for 10 minutes, tented loosely. Slice the meat off the bone in thick pieces, drizzle with the best olive oil, and add coarse sea salt and black pepper. The Tuscan way is to serve it with white beans and a rocket salad.',
    ing: [
      '1.2 kg T-bone steak, at least 4 cm thick',
      '2 tsp coarse sea salt',
      '1/2 tsp ground black pepper',
      '3 tbsp extra virgin olive oil',
      '2 sprigs fresh rosemary',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Take the steak out of the fridge 1 hour before cooking. Pat dry.',
      'Heat a large cast iron pan or grill until smoking hot. Season the steak with half the salt and cook for 4 minutes on each side without moving.',
      'Stand the steak on its bone side and cook for 3 minutes.',
      'Rest on a board under foil for 10 minutes. Slice the meat from the bone and cut into thick slices.',
      'Season with the remaining salt and pepper, drizzle with the olive oil, and serve with the rosemary and lemon.'
    ],
    tips: [
      'Use a meat thermometer: 50°C for rare.',
      'Do not press the steak while it cooks.',
      'Rest the meat for the full 10 minutes.'
    ],
    pair: ['Cannellini beans', 'Rocket salad', 'Roast potatoes', 'Chianti'],
    store: 'Best eaten straight away. Leftover slices keep in the fridge for 2 days and are good cold.',
    nut: [512, 63, 2, 28, 1, 0, 1340]
  },

  'grissini': {
    d: 'Thin, crisp Italian breadsticks made from an olive oil dough, rolled by hand and baked until golden.',
    meta: 'Grissini: thin, crisp Italian breadsticks made from an olive oil dough, rolled by hand and baked until golden. Twelve servings, baked for 20 minutes.',
    kw: ['grissini', 'grissini recipe', 'homemade grissini breadsticks', 'italian breadsticks', 'crispy olive oil grissini'],
    why: 'Roll them thin, thinner than you think: the difference between a grissino and a bread stick is the crunch. The dough is simple, flour, yeast, olive oil, salt and warm water, and it takes 10 minutes to knead and 1 hour to rise. After that, it is a matter of cutting and rolling.\n\nKnead until the dough is smooth and elastic, then leave it to rise in an oiled bowl until doubled. Press it out into a rectangle about 1.5 cm thick, brush with oil and cut it into strips with a knife or a pizza wheel. **Roll each strip between your palms and the table until it is as thin as a pencil.** The dough springs back, so stretch it as you roll.\n\nPlace the sticks on lined trays, leaving a finger\'s width between them. Brush with olive oil and sprinkle with sea salt, sesame seeds or rosemary.\n\nBake at 200°C for 18 minutes, turning the trays halfway, until golden and crisp all the way through. Cool on a rack. They keep crisp for a week in a tin and are excellent with cured meats or dips.',
    ing: [
      '400 g strong white bread flour',
      '7 g fast-action dried yeast',
      '1 tsp salt',
      '4 tbsp olive oil',
      '230 ml warm water',
      '1 tbsp olive oil, for brushing',
      '2 tsp coarse sea salt',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Mix the flour, yeast and salt. Add the 4 tbsp oil and the water and knead for 10 minutes. Cover and leave to rise for 1 hour until doubled.',
      'Heat the oven to 200°C (180°C fan) and line two trays.',
      'Press the dough into a rectangle 1.5 cm thick. Cut into 24 strips and roll each into a thin stick, about 30 cm long.',
      'Arrange on the trays, brush with the remaining oil and sprinkle with the sea salt and sesame seeds.',
      'Bake for 18 minutes, swapping the trays halfway, until golden and crisp. Cool on a rack.'
    ],
    tips: [
      'Roll the dough as thin as you can.',
      'Use a pizza wheel to cut even strips.',
      'Dry in a low oven for 10 minutes if they are soft.'
    ],
    pair: ['Prosciutto', 'Hummus', 'Cheese', 'Antipasti'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [143, 3, 17, 7, 1, 2, 750],
    rest: [60, 'Proving']
  },

  'lemon-granita': {
    untimed: ['cooling completely'],
    d: 'Icy crystals of sharp lemon syrup, scraped with a fork every half hour as they freeze to a light, snowy texture.',
    meta: 'Lemon granita: icy crystals of sharp lemon syrup, scraped with a fork as they freeze. Six servings, frozen for 4 hours.',
    kw: ['lemon granita', 'lemon granita recipe', 'sicilian lemon granita', 'italian lemon ice', 'easy lemon granita'],
    why: 'A fork and some patience: the only equipment is a shallow tray and a fork, and the only skill is returning to the freezer every half hour. Granita is the Sicilian ice, and the texture depends on scraping the freezing syrup into separate crystals before it can set into a solid block.\n\nThe base is as simple as possible: lemon juice, sugar and water. The sugar should be fully dissolved in hot water, then cooled before the lemon juice goes in. Fresh juice has the best flavour. **Taste the mixture before it freezes.** Freezing dulls sweetness, so a syrup that tastes just right at room temperature will taste too tart once it is cold.\n\nPour into a wide, shallow container, the wider the better, so that the mixture freezes quickly and evenly. After 1 hour, when ice crystals form around the edges, scrape them in with a fork. Repeat every 30 minutes for 3 hours, until the whole tray is a mass of fluffy, snow-like crystals.\n\nServe in chilled glasses, with a mint leaf. Sicilians eat it for breakfast with a brioche, but it also makes a good palate cleanser between courses.',
    ing: [
      '150 g caster sugar',
      '500 ml hot water',
      '200 ml lemon juice',
      '1 tbsp lemon zest',
      '6 mint leaves'
    ],
    st: [
      'Stir the sugar into the hot water until dissolved. Cool completely.',
      'Stir in the lemon juice and zest. Taste: it should be quite sharp.',
      'Pour into a wide, shallow, freezer-proof dish. When ice crystals form around the edges, scrape them into the middle with a fork.',
      'Leave to freeze for 4 hours in total, scraping every 30 minutes, until fluffy and snow-like. Serve in chilled glasses with a mint leaf.'
    ],
    tips: [
      'Use a wide, shallow dish.',
      'Chill the glasses before serving.',
      'Break up the granita with a fork before serving if it has frozen hard.'
    ],
    pair: ['Brioche', 'Fresh berries', 'Prosecco', 'Mint'],
    store: 'Best eaten the same day. Keeps in the freezer for 1 week; scrape before serving.',
    nut: [112, 0, 28, 0, 0, 26, 5],
    rest: [240, 'Freezing']
  },

  'torta-della-nonna': {
    d: 'A shortcrust tart filled with lemon-scented vanilla custard, topped with pastry and pine nuts and dusted with icing sugar.',
    meta: 'Torta della nonna: a shortcrust tart filled with lemon-scented vanilla custard, topped with pine nuts and icing sugar. Ten servings, baked for 45 minutes.',
    kw: ['torta della nonna', 'torta della nonna recipe', 'italian grandmother cake', 'tuscan custard tart with pine nuts', 'nonna\'s cake'],
    why: 'The name means grandmother\'s cake, and the recipe is the sort a family passes down: pastry, custard and pine nuts, three things that should be on hand in any Tuscan kitchen. The tart is a closed one, with a sweet pastry lid over the custard, and the top is scattered with pine nuts that toast as it bakes.\n\nThe pastry is made from flour, butter, sugar, egg yolks and lemon zest, with a little baking powder. Work it quickly and lightly and chill it for 1 hour: this relaxes the gluten and prevents shrinkage. **Don\'t overwork the dough.** Warm hands and too much handling make tough pastry.\n\nThe custard is crème pâtissière, made with milk, egg yolks, sugar, flour and lemon peel, cooked until it thickens, 5 minutes of constant whisking. Remove the lemon peel, cover the surface with cling film to stop a skin forming, and cool completely before filling.\n\nLine a tin with two-thirds of the pastry, fill with custard, and cover with the rest. Brush with egg, scatter with pine nuts, and bake at 180°C for 45 minutes. Cool in the tin and dust with icing sugar. Serve at room temperature.',
    ing: [
      '# Pastry',
      '300 g plain flour',
      '120 g cold butter, diced',
      '100 g caster sugar',
      '2 egg yolks',
      '1 egg',
      '1 lemon, zest only',
      '1 tsp baking powder',
      '1 pinch salt',
      '# Custard',
      '500 ml whole milk',
      '4 egg yolks',
      '120 g caster sugar',
      '40 g plain flour',
      '2 strips lemon peel',
      '1 tsp vanilla extract',
      '# Top',
      '1 egg, beaten',
      '40 g pine nuts',
      '1 tbsp icing sugar'
    ],
    st: [
      'Rub the butter into the flour, sugar, baking powder, salt and lemon zest. Mix in the egg yolks and egg to make a soft dough. Wrap and chill for 1 hour.',
      'For the custard, heat the milk with the lemon peel until steaming. Whisk the egg yolks, sugar and flour in a bowl, then pour in the hot milk, whisking. Return to the pan and cook, whisking, for 5 minutes until thick. Remove the peel, add the vanilla, cover the surface with cling film and cool.',
      'Heat the oven to 180°C (160°C fan). Roll two-thirds of the pastry and line a 24 cm tin. Fill with the cooled custard.',
      'Roll the remaining pastry and lay over the top, sealing the edges. Brush with the beaten egg and scatter with the pine nuts.',
      'Bake for 45 minutes until golden. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Cool the custard fully before filling.',
      'Chill the pastry well.',
      'Serve at room temperature, not hot.'
    ],
    pair: ['Espresso', 'Vin Santo', 'Fresh berries', 'Whipped cream'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [422, 11, 54, 18, 2, 27, 140],
    rest: [60, 'Chilling the pastry']
  },

  'pimientos-de-padron': {
    d: 'Small green peppers blistered in olive oil until the skins wrinkle and char, then tossed with flaky salt.',
    meta: 'Pimientos de Padrón: small green peppers blistered in olive oil and tossed with flaky salt. Four servings, cooked for 8 minutes.',
    kw: ['pimientos de padron', 'padron peppers', 'padron peppers recipe', 'blistered padron peppers', 'spanish padron peppers with sea salt'],
    why: 'Most are mild and one in ten is hot, and nobody knows which. That uncertainty is the charm of Padrón peppers, a tapas bar standard in Spain and now sold in British shops in late summer. A plate of them is a small gamble and a good snack.\n\nThe cooking is the shortest in this book. Heat olive oil in a wide frying pan until almost smoking, add the peppers in a single layer, and leave them untouched for 2 minutes. The skins blister and darken. Toss them and cook for another 2 to 3 minutes, until wrinkled and charred in places. **Use a pan big enough for a single layer.** Crowded peppers steam and go soggy.\n\nThe finish is salt, and a lot depends on which. Flaky sea salt, such as Maldon, scattered over at the last second, sticks to the oil on the skin and gives a crisp contrast. Serve at once on a warm plate.\n\nEat them by the stalk, pulling the whole pepper into your mouth and leaving the stem on the plate. A cold beer or a glass of albariño is the right drink.',
    ing: [
      '250 g Padrón peppers',
      '3 tbsp olive oil',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Heat the oil in a large frying pan over a high heat until just smoking.',
      'Add the peppers in a single layer and leave for 2 minutes until blistered on the underside.',
      'Toss and cook for 2 to 3 minutes more, until wrinkled and charred in places.',
      'Tip onto a plate, scatter with the salt and serve at once.'
    ],
    tips: [
      'Use a very hot pan.',
      'Do not overcrowd.',
      'Salt just before eating.'
    ],
    pair: ['Cold beer', 'Albariño', 'Jamón', 'Tortilla'],
    store: 'Best eaten straight away.',
    nut: [119, 1, 4, 11, 1, 3, 590]
  },

  'cocido-madrileno': {
    d: 'A Madrid stew of chickpeas, beef, chicken, chorizo and vegetables, served in three courses: the broth with noodles, the chickpeas and vegetables, then the meats.',
    meta: 'Cocido madrileño: a Madrid stew of chickpeas, beef, chicken, chorizo and vegetables, served in three courses. Six servings, cooked for 2 and a half hours.',
    kw: ['cocido madrileno', 'cocido madrileño', 'cocido madrileno recipe', 'madrid chickpea stew', 'spanish cocido stew'],
    why: 'On a cold Madrid winter day, one pot feeds the family for an afternoon and serves three courses in order. First the broth, with thin noodles, as a soup. Then the chickpeas, cabbage and potatoes, with a drizzle of olive oil. Then the meats, carved on a platter. That sequence is the tradition, and the same pot supplies all three.\n\nThe chickpeas are soaked overnight, at least 8 hours, in plenty of water. They go into the pot with the meats: beef shin, chicken thighs, a ham bone or salt pork and chorizo. Start in cold water, bring slowly to a boil, skim thoroughly, and cook at a bare simmer for 1 hour 30 minutes. **Cook everything in the same pot, adding the vegetables later.** Carrots and potatoes go in for the last 30 minutes, cabbage for the last 20.\n\nThe broth is strained off and cooked with thin noodles for 5 minutes. The chickpeas and vegetables are lifted out for the second course, tossed with olive oil and garlic. The meats go on a board.\n\nIt looks like a lot, and it is. Leftovers, fried with garlic, become ropa vieja the next day.',
    ing: [
      '250 g dried chickpeas, soaked overnight and drained',
      '500 g beef shin',
      '4 chicken thighs on the bone, about 500 g',
      '200 g ham bone or salted pork belly',
      '2 chorizo sausages, about 200 g',
      '3 litres water',
      '2 tsp salt',
      '3 carrots, about 300 g, halved',
      '400 g potatoes, peeled and halved',
      '300 g green cabbage, cut into wedges',
      '100 g fine soup noodles',
      '2 tbsp olive oil',
      '2 garlic cloves, sliced'
    ],
    st: [
      'Put the chickpeas, beef, chicken, ham bone and chorizo in a large pot with the water. Bring slowly to a boil, skim, then simmer gently for 90 minutes.',
      'Add the carrots and potatoes and cook for 20 minutes. Add the cabbage and salt and cook for 15 minutes more.',
      'Strain off 1.2 litres of broth into another pan and bring to a boil. Add the noodles and cook for 5 minutes. Serve as the first course.',
      'Heat the olive oil with the garlic until golden and toss with the chickpeas and vegetables. Serve as the second course.',
      'Carve the meats and serve as the third course.'
    ],
    tips: [
      'Soak the chickpeas overnight.',
      'Skim the broth well in the first 20 minutes.',
      'Use the leftovers for ropa vieja.'
    ],
    pair: ['Crusty bread', 'Pickled chillies', 'Red wine', 'Tomato sauce'],
    store: 'Keeps in the fridge for 4 days. Reheat in the broth.',
    nut: [766, 48, 40, 46, 7, 7, 1370],
    rest: [480, 'Soaking the chickpeas']
  },

  'cataplana-de-marisco': {
    d: 'A Portuguese seafood stew of clams, prawns and white fish cooked with tomatoes, peppers, chorizo and white wine in a sealed pan.',
    meta: 'Cataplana de marisco: a Portuguese seafood stew of clams, prawns and fish cooked with tomatoes, peppers, chorizo and white wine. Four servings, cooked for 25 minutes.',
    kw: ['cataplana de marisco', 'portuguese cataplana', 'cataplana recipe', 'portuguese seafood stew', 'algarve seafood cataplana'],
    why: 'A cataplana is a hinged copper pan, shaped like a clam, that closes tight so that the steam cooks the food. It comes from the Algarve, and the dish made in it is simple: shellfish, tomatoes, peppers, a little cured sausage and a splash of wine, all steaming together until the shells open. The pan is brought to the table and opened there, to a cloud of aroma.\n\nWithout a cataplana, a wide casserole with a lid works nearly as well, as long as it closes tight. The method is layers: soften the onion, peppers and garlic in olive oil with the chorizo, add the tomatoes and wine, then the seafood on top. Close the lid and cook. **Do not stir.** The shellfish steam in the vapour rising from the sauce, and stirring would cool the pan.\n\nClams go in on top, then prawns, then fish chunks. Cook for 10 minutes over a medium heat. Discard any clams that stay shut.\n\nFinish with a handful of chopped coriander and a squeeze of lemon. Serve with crusty bread to mop the juices, and a glass of vinho verde.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, sliced',
      '1 red pepper, about 150 g, sliced',
      '4 garlic cloves, sliced',
      '100 g chorizo, sliced',
      '400 g tinned chopped tomatoes',
      '150 ml dry white wine',
      '1 bay leaf',
      '1 tsp smoked paprika',
      '500 g clams, scrubbed',
      '300 g raw king prawns, shell on',
      '300 g firm white fish fillet, cut into 4 cm pieces',
      '3 tbsp chopped fresh coriander',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide pan with a tight lid. Cook the onion, pepper, garlic and chorizo for 8 minutes.',
      'Add the tomatoes, wine, bay leaf and paprika and simmer for 5 minutes.',
      'Layer the clams, prawns and fish on top. Close the lid tightly and cook over a medium heat for 10 minutes until the clams open and the prawns are pink.',
      'Discard any clams that have not opened. Scatter with the coriander and serve with the lemon wedges.'
    ],
    tips: [
      'Scrub the clams and discard any that are open before cooking.',
      'Do not lift the lid during cooking.',
      'Serve in the pan at the table.'
    ],
    pair: ['Crusty bread', 'Vinho verde', 'Green salad', 'Boiled potatoes'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [447, 51, 18, 19, 3, 7, 1120]
  },

  'erwtensoep': {
    d: 'A thick Dutch split pea soup with smoked sausage, pork, celeriac and leek, thick enough to stand a spoon in.',
    meta: 'Erwtensoep: a thick Dutch split pea soup with smoked sausage, pork, celeriac and leek. Six servings, cooked for 2 hours.',
    kw: ['erwtensoep', 'dutch pea soup', 'snert dutch soup', 'dutch split pea soup with sausage', 'erwtensoep recipe'],
    why: 'It is meant to be so thick that a spoon stands upright in it, and the Dutch call this a "snert" when it reaches that stage. Erwtensoep is a winter soup, eaten on ice-skating days and at the edge of a frozen canal, and it is better on the second and third day.\n\nSplit green peas break down into a purée with no help. Rinse them well and cook them in water with a pork hock or a few pork ribs, for 1 hour 30 minutes, skimming the surface in the first 20 minutes. **Do not season with salt until the peas are soft.** Salt added too early toughens the skins and slows them.\n\nWhen the peas have collapsed, add the vegetables: celeriac, leeks, carrots and potatoes, all cut small, and cook for another 30 minutes. Lift out the pork, strip the meat from the bone and return it to the pot.\n\nThe smoked sausage, rookworst, goes in at the end, sliced, and heats through for 10 minutes. Season with salt, pepper and celery leaf. Serve with rye bread, bacon and mustard. Leave it overnight and it thickens to a paste.',
    ing: [
      '350 g dried green split peas, rinsed',
      '2.5 litres water',
      '500 g pork hock or ribs',
      '1 celeriac, about 300 g, peeled and diced',
      '2 leeks, about 300 g, sliced',
      '2 carrots, about 200 g, diced',
      '1 potato, about 200 g, peeled and diced',
      '1 smoked sausage (rookworst), about 250 g, sliced',
      '2 tsp salt',
      '1/2 tsp ground black pepper',
      '2 tbsp chopped celery leaves'
    ],
    st: [
      'Put the peas, water and pork in a large pot. Bring to a boil, skim thoroughly, and simmer gently for 90 minutes, stirring now and then, until the peas have collapsed.',
      'Add the celeriac, leeks, carrots and potato and cook for 25 minutes more.',
      'Lift out the pork, strip the meat from the bones and return it to the pot with the sausage. Heat through for 10 minutes.',
      'Season with the salt and pepper and scatter with the celery leaves.'
    ],
    tips: [
      'Stir often at the end so the soup does not catch.',
      'Add the salt only when the peas are soft.',
      'Serve with rye bread and mustard.'
    ],
    pair: ['Rye bread', 'Bacon', 'Mustard', 'Pickled gherkins'],
    store: 'Keeps in the fridge for 5 days and freezes for up to 3 months. It thickens; add water.',
    nut: [625, 34, 57, 29, 19, 10, 1270]
  },

  'norwegian-waffles': {
    d: 'Thin, soft heart-shaped waffles flavoured with cardamom, served warm with jam and soured cream or brown cheese.',
    meta: 'Norwegian waffles: thin, soft heart-shaped waffles flavoured with cardamom, served with jam and soured cream. Six servings, cooked for 20 minutes.',
    kw: ['norwegian waffles', 'vafler', 'norwegian heart waffles', 'norwegian waffles recipe', 'scandinavian waffles with cardamom'],
    why: 'Can a waffle be soft? In Norway, it must be. Vafler are thin, floppy, heart-shaped waffles, not the crisp deep-pocketed ones of Belgium, and they are eaten folded or rolled, warm, with jam and a spoonful of soured cream. The batter is closer to a pancake batter than to a waffle one.\n\nThe flavour is cardamom, a Scandinavian signature. Use freshly ground seeds if you can: a teaspoon is enough to scent the batter without dominating. The liquid is part milk and part soured cream or buttermilk, which gives a gentle tang and tenderness. Melted butter goes into the batter, so there is hardly any need to grease the iron.\n\nMix the batter just until smooth and let it rest for 10 minutes. **Do not beat it hard.** Overmixing makes the waffles tough, which is the opposite of what you want here.\n\nHeat the waffle iron and pour in a ladle of batter. Cook for about 2 minutes, until the steam slows and the waffle is pale gold. Stack them on a plate and keep warm. Serve with strawberry jam and soured cream, or with slices of brunost, the sweet brown cheese.',
    ing: [
      '250 g plain flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1 tsp ground cardamom',
      '1/4 tsp salt',
      '2 eggs',
      '250 ml whole milk',
      '150 ml soured cream',
      '60 g butter, melted',
      '150 g strawberry jam',
      '150 g soured cream, to serve'
    ],
    st: [
      'Mix the flour, sugar, baking powder, cardamom and salt.',
      'Whisk the eggs, milk, 150 ml soured cream and melted butter. Pour into the dry ingredients and whisk until just smooth. Rest for 10 minutes.',
      'Heat a heart-shaped waffle iron. Pour in about 100 ml of batter and cook for 2 minutes until pale golden.',
      'Repeat with the rest of the batter. Serve warm with the jam and soured cream.'
    ],
    tips: [
      'Do not overmix the batter.',
      'Serve folded or rolled.',
      'Keep cooked waffles warm in a low oven.'
    ],
    pair: ['Strawberry jam', 'Soured cream', 'Brunost', 'Coffee'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and freezes for up to 1 month.',
    nut: [462, 9, 57, 22, 1, 23, 240]
  },

  'paczki': {
    d: 'Rich, round Polish doughnuts filled with rose petal jam, cooked in hot oil and finished with a dusting of icing sugar.',
    meta: 'Pączki: rich, round Polish doughnuts filled with rose petal jam, cooked in hot oil and dusted with icing sugar. Makes twelve, cooked for 20 minutes.',
    kw: ['paczki', 'pączki', 'polish paczki recipe', 'polish doughnuts with rose jam', 'fat thursday paczki'],
    why: 'Fat Thursday, the last Thursday before Lent, is when Poles eat pączki, and the queues at bakeries are famous. The doughnut is richer than an English one: the dough is enriched with egg yolks, butter and a splash of spirit, and the result is dense, soft and deeply flavoured.\n\nThe spirit is the surprise. A tablespoon of vodka or rum goes into the dough, and the alcohol evaporates quickly in the hot oil, which reduces the amount of fat the doughnut absorbs. It also gives a faint flavour. **Do not leave it out.** The dough is also very soft, softer than a bread dough, so use a lightly floured surface and be gentle.\n\nKnead the dough for 10 minutes until smooth, then leave it to rise in a warm place for 1 hour 30 minutes, until doubled. Roll out to 2 cm thick, cut 7 cm rounds and let them rise for a further 30 minutes.\n\nThe oil should be at 175°C. Fry in batches, 3 minutes on one side with the lid on, then 2 minutes on the other, until a pale ring forms around the middle. Fill with rose petal jam using a piping bag, and dust with icing sugar.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action dried yeast',
      '60 g caster sugar',
      '1/2 tsp salt',
      '200 ml warm milk',
      '5 egg yolks',
      '60 g butter, melted',
      '1 tbsp vodka or rum',
      '500 ml vegetable oil, for frying',
      '200 g rose petal jam',
      '3 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the milk, egg yolks, butter and vodka and knead for 10 minutes until smooth. Cover and leave to rise for 90 minutes.',
      'Roll out to 2 cm thick and cut 12 rounds, 7 cm across. Place on floured paper, cover and leave to rise for 30 minutes.',
      'Heat the oil to 175°C. Fry the pączki in batches, with the lid on, for 3 minutes on one side, then turn and fry for 2 minutes.',
      'Drain on kitchen paper, cool for 10 minutes, then pipe the jam into each. Dust with the icing sugar.'
    ],
    tips: [
      'Keep the oil at 175°C.',
      'Cover the pan for the first side so the pączki rise.',
      'Fill them when they are just warm.'
    ],
    pair: ['Hot tea', 'Coffee', 'Hot chocolate', 'Candied orange peel'],
    store: 'Best eaten the day they are made.',
    nut: [606, 7, 41, 46, 1, 21, 340],
    rest: [120, 'Proving']
  },

  'papanasi': {
    d: 'Romanian doughnuts of cottage cheese, semolina and egg, cooked until golden and served with soured cream and sour cherry jam.',
    meta: 'Papanași: Romanian doughnuts of cottage cheese, semolina and egg, served with soured cream and sour cherry jam. Six servings, cooked for 15 minutes.',
    kw: ['papanasi', 'papanași', 'romanian cheese doughnuts', 'papanasi recipe', 'romanian papanasi with sour cream and jam'],
    why: 'The cheese in the dough is the secret, and there is nothing complicated about the method. Papanași are a Romanian dessert of fried cheese dough, shaped into a ring with a smaller ball placed on top as a hat, then served with soured cream and a spoonful of tart cherry jam. The dough is soft, slightly sweet and quite rich.\n\nUse a dry cheese: drained cottage cheese or fresh curd cheese, pressed in a sieve for 30 minutes until the liquid is gone. Wet cheese makes a sticky dough that falls apart in the oil. Mix with semolina, flour, an egg, sugar, vanilla, lemon zest and a pinch of baking powder. **The dough should be soft and just firm enough to shape.** It should hold a ring, not run.\n\nWith floured hands, shape a ball the size of a tangerine, press a hole in the centre with your finger and widen it into a ring. Roll a smaller ball and set it aside as the hat.\n\nCook in oil at 170°C for about 4 minutes, turning, until deep golden all over. Stack the hat on top. Spoon over soured cream and cherry jam, and eat at once.',
    ing: [
      '300 g cottage cheese, drained for 30 minutes',
      '2 eggs',
      '4 tbsp semolina',
      '150 g plain flour',
      '3 tbsp caster sugar',
      '1 tsp vanilla extract',
      '1 lemon, zest only',
      '1 tsp baking powder',
      '1 pinch salt',
      '400 ml vegetable oil, for frying',
      '150 g soured cream',
      '150 g sour cherry jam'
    ],
    st: [
      'Mix the cheese, eggs, semolina, flour, sugar, vanilla, lemon zest, baking powder and salt to a soft dough.',
      'With floured hands, shape 6 balls and press a hole through the centre of each to make a ring. Shape 6 small balls for the hats.',
      'Heat the oil to 170°C. Fry the rings and small balls in batches for 4 minutes, turning, until deep golden. Drain.',
      'Serve each ring with a small ball on top, with the soured cream and cherry jam spooned over.'
    ],
    tips: [
      'Drain the cheese well.',
      'Keep your hands floured.',
      'Serve warm.'
    ],
    pair: ['Black tea', 'Sour cherry jam', 'Soured cream', 'Coffee'],
    store: 'Best eaten warm, straight away.',
    nut: [842, 12, 41, 70, 2, 12, 340]
  },

  'banitsa': {
    d: 'A Bulgarian pie of crisp filo layers wrapped around a filling of eggs, feta and yoghurt, baked until golden.',
    meta: 'Banitsa: a Bulgarian pie of crisp filo layers wrapped around eggs, feta and yoghurt, baked until golden. Eight servings, baked for 40 minutes.',
    kw: ['banitsa', 'bulgarian banitsa', 'banitsa recipe', 'bulgarian cheese pie with filo', 'banitsa with feta and eggs'],
    why: 'Banitsa is breakfast in Bulgaria, bought warm from a bakery on the way to work with a glass of yoghurt drink, and it is made in every home on New Year\'s Eve, with paper fortunes tucked inside. The filling is plain: eggs, feta and yoghurt. The technique is the thing.\n\nThe filo is the structure. Sprinkle each sheet with a mixture of the egg, yoghurt and cheese filling, and scatter it unevenly, then roll it loosely into a long rope. **Roll loosely and don\'t press down.** The air trapped inside gives banitsa its airy layers.\n\nCoil the ropes in a round, oiled tin, starting from the middle, and pour any remaining filling over the top. Brush with melted butter and bake at 190°C for 40 minutes, until deep gold and crisp.\n\nAfter baking, sprinkle with a little water and cover with a cloth for 10 minutes. The steam softens the top, so the pie is crisp at the edges and tender in the middle. Cut it into wedges and serve warm. Leftovers are good cold.',
    ing: [
      '250 g filo pastry sheets',
      '3 eggs',
      '250 g plain yoghurt',
      '250 g feta cheese, crumbled',
      '1/2 tsp bicarbonate of soda',
      '60 g butter, melted',
      '3 tbsp sunflower oil',
      '2 tbsp water, to sprinkle'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan) and oil a 26 cm round tin.',
      'Whisk the eggs, yoghurt, feta and bicarbonate of soda together.',
      'Lay a sheet of filo on a board. Sprinkle with a little of the filling and roll loosely from the long side into a rope. Repeat with the remaining sheets.',
      'Coil the ropes in the tin from the centre outwards. Pour any remaining filling over the top and brush with the melted butter and oil.',
      'Bake for 40 minutes until deep golden. Sprinkle with the water, cover with a cloth and rest for 10 minutes before cutting.'
    ],
    tips: [
      'Keep the filo covered with a damp cloth while you work.',
      'Do not roll the sheets tightly.',
      'Add spinach or leeks to the filling for a variation.'
    ],
    pair: ['Ayran or yoghurt drink', 'Boza', 'Tomato salad', 'Black tea'],
    store: 'Keeps in the fridge for 3 days. Reheat in a moderate oven.',
    nut: [321, 13, 20, 21, 1, 3, 610]
  },

  'cevapi': {
    d: 'Small skinless sausages of minced beef and lamb, cooked on a hot grill, served in flatbread with chopped raw onion and red pepper relish.',
    meta: 'Ćevapi: small skinless sausages of minced beef and lamb, grilled and served in flatbread with raw onion and ajvar. Four servings, cooked for 12 minutes.',
    kw: ['cevapi', 'ćevapi', 'cevapi recipe', 'balkan cevapi', 'bosnian cevapi with somun'],
    why: 'The seasoning is almost nothing: salt, pepper and a pinch of bicarbonate of soda. What makes ćevapi special is not what goes in them but what is done to the meat. The mince, beef and lamb with a good proportion of fat, is kneaded for several minutes, then left overnight in the fridge. By the next day the texture has changed from a crumbly mince to a sticky, springy paste, and the grilled sausage is soft and bouncy.\n\nThe bicarbonate of soda is another trick, and a modern one: about half a teaspoon per 500 g of meat helps the sausages stay juicy. The garlic is often crushed into a little water and the water added to the meat, which gives a gentle flavour without any raw bite. **Knead the meat for at least 5 minutes by hand.** It should look pale and feel tacky.\n\nShape into fingers about 7 cm long and 2 cm thick with damp hands. Grill over a high heat for 10 to 12 minutes, turning every 3 minutes, until they are charred outside and cooked through.\n\nServe five or ten in a warmed, split flatbread (somun), with chopped raw onion, ajvar, kajmak if you can find it, and a squeeze of lemon.',
    ing: [
      '400 g minced beef, about 20 per cent fat',
      '200 g minced lamb',
      '3 garlic cloves, crushed with 2 tbsp cold water',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1/2 tsp bicarbonate of soda',
      '# To serve',
      '4 flatbreads or pitta',
      '1 onion, about 150 g, finely chopped',
      '4 tbsp ajvar',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Knead the beef, lamb, garlic water, salt, pepper and bicarbonate of soda for 5 minutes until sticky and pale. Cover and refrigerate overnight, or at least 4 hours.',
      'With wet hands, shape into 20 fingers, 7 cm long and 2 cm thick.',
      'Heat a grill or griddle to high. Cook for 10 to 12 minutes, turning every 3 minutes, until charred and cooked through.',
      'Warm the flatbreads, split them and fill with the ćevapi, onion and ajvar. Serve with the lemon wedges.'
    ],
    tips: [
      'Rest the meat overnight for the best texture.',
      'Do not overcook; they should stay juicy.',
      'Serve with the onion raw.'
    ],
    pair: ['Ajvar', 'Raw onion', 'Kajmak', 'Chips'],
    store: 'Keeps in the fridge for 2 days. The raw mixture keeps for 1 day.',
    nut: [519, 36, 42, 23, 3, 4, 1260],
    rest: [480, 'Resting overnight']
  },

  'pljeskavica': {
    d: 'A large, flat Balkan burger patty of mixed beef, pork and lamb, grilled until charred and served in flatbread with onion and kajmak.',
    meta: 'Pljeskavica: a large, flat Balkan patty of beef, pork and lamb, grilled and served in flatbread with onion and kajmak. Four servings, cooked for 12 minutes.',
    kw: ['pljeskavica', 'balkan burger', 'pljeskavica recipe', 'serbian pljeskavica', 'balkan grilled meat patty'],
    why: 'Not a burger, but a close relation: a pljeskavica is a flat, wide patty, closer to a plate than a ball, and cooked quickly over fierce heat. The meat is a mix of beef, pork and sometimes lamb, with the pork providing the fat. The seasoning is salt, pepper and a little onion.\n\nTwo things matter. The first is the fat: aim for a mince with 20 per cent fat in total, because lean meat makes a dry patty. The second is the shape: press the meat into 14 cm discs, about 1.5 cm thick, and make a shallow dent in the centre with a thumb. **The dent stops the patty from puffing up in the middle** and keeps the thickness even.\n\nGrate half an onion and squeeze it dry before mixing it into the meat. Add a spoonful of sparkling water or beer to keep the mixture soft, and knead for 3 minutes until sticky.\n\nGrill over a high heat for about 5 minutes on each side. Serve in a warmed flatbread with chopped raw onion, a spoonful of kajmak (a creamy clotted dairy spread) or soured cream, and ajvar. Chips go alongside.',
    ing: [
      '400 g minced beef',
      '300 g minced pork',
      '100 g minced lamb',
      '1/2 onion, about 80 g, grated and squeezed dry',
      '2 garlic cloves, crushed',
      '2 tbsp sparkling water',
      '1 1/2 tsp salt',
      '1/2 tsp ground black pepper',
      '# To serve',
      '4 flatbreads or pitta',
      '1 onion, about 150 g, finely chopped',
      '4 tbsp kajmak or soured cream',
      '4 tbsp ajvar'
    ],
    st: [
      'Knead the beef, pork, lamb, grated onion, garlic, sparkling water, salt and pepper for 3 minutes until sticky.',
      'Divide into 4 portions. With wet hands, press each into a disc 14 cm across and 1.5 cm thick, with a shallow dent in the centre.',
      'Heat a grill or griddle to high. Cook the patties for 5 minutes on each side until charred and cooked through.',
      'Warm the flatbreads and fill with the patties, chopped onion, kajmak and ajvar.'
    ],
    tips: [
      'Chill the shaped patties for 15 minutes before cooking.',
      'Do not press the patties on the grill.',
      'Serve with chips and a tomato salad.'
    ],
    pair: ['Kajmak', 'Ajvar', 'Chips', 'Shopska salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [658, 45, 43, 34, 3, 5, 1430]
  }
};
