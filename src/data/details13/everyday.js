'use strict';

/**
 * Volume thirteen — the everyday Egyptian table.
 *
 * Fourteen dishes that between them account for most of what most Egyptians
 * actually eat: pulses, greens, pickles and bread, seasoned with very little
 * beyond cumin, garlic, coriander and lemon. The economy of it is the point —
 * besara is broad beans and herbs and nothing else, and it is one of the best
 * things in the book.
 */

module.exports = {
  'taameya': {
    d: "Egypt's falafel, and a genuinely different thing from the Levantine one: split broad beans rather than chickpeas, a third more herbs, and a green interior that startles people who slice one open.",
    meta: 'Egyptian falafel made from split broad beans rather than chickpeas, packed with herbs and fried to a green-centred crumb.',
    kw: ["ta'ameya", 'egyptian falafel', 'taameya recipe', 'broad bean falafel', 'ful nabed falafel'],
    why: 'The beans are soaked and then ground raw — never cooked, not even briefly. Cooked pulses release starch and give a paste that turns dense and gluey in the fryer, where raw soaked beans hold their structure and fry into something light and almost crumbly. The colour comes from a genuinely large quantity of herbs, more than looks reasonable, and from grinding them with the beans rather than folding them in. Add the bicarbonate at the last moment: it starts working immediately and a mix left standing goes flat.',
    ing: [
      '400 g dried split broad beans, skinless',
      '1 large onion, quartered',
      '6 garlic cloves',
      '100 g coriander leaves and stems',
      '80 g flat-leaf parsley',
      '50 g dill',
      '4 spring onions',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '2 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tsp bicarbonate of soda',
      '# To coat and fry',
      '4 tbsp sesame seeds',
      '900 ml sunflower oil'
    ],
    st: [
      'Cover the broad beans with plenty of cold water and soak for at least 720 minutes, or overnight. They will roughly double. Drain thoroughly.',
      'Put the drained raw beans, onion, garlic, all the herbs, spring onions, cumin, ground coriander, salt and pepper through a food processor in two batches, to a coarse, damp, bright green paste.',
      'Push the mixture through the processor a second time if it is still rough. It should hold together when squeezed.',
      'Refrigerate the paste for 60 minutes, which firms it and makes it far easier to shape.',
      'Stir in the bicarbonate of soda immediately before frying, not sooner.',
      'Shape into flattened discs about 5 cm across, pressing one side into the sesame seeds.',
      'Heat the oil to 170°C and fry in batches of six, 4 to 5 minutes, turning once, until deep brown and crisp. Drain on a rack and serve hot.'
    ],
    rest: [780, 'soaking the beans and chilling the paste'],
    tips: [
      'Raw soaked beans only. Cooked ones give a heavy, gluey patty.',
      'Bicarbonate at the last second — it deflates on standing.',
      'A lower oil temperature than you expect, so the inside cooks before the crust burns.'
    ],
    pair: ['Aish baladi', 'Egyptian tahina', 'Salata baladi'],
    store: 'The paste keeps refrigerated 2 days and freezes for a month. Fried, they are best within the hour.',
    nut: [320, 13, 30, 16, 9, 3, 480]
  },

  'besara': {
    d: 'Broad beans cooked to a purée with an enormous quantity of green herbs, poured out flat and topped with fried onion. Peasant food in the plainest sense and better than almost anything.',
    meta: 'Dried broad beans cooked soft and blended with masses of coriander, dill and parsley, poured flat under crisp fried onion.',
    kw: ['besara', 'egyptian broad bean puree', 'bessara recipe', 'green bean dip egypt', 'vegan broad bean dip'],
    why: 'The herbs go in at the very end, off the heat, and that is the entire difference between a grey-green sludge and something the colour of a spring lawn. Chlorophyll breaks down within a couple of minutes of boiling, so anything added early is cosmetically dead by the time it reaches the table. Blend hot beans with cold raw herbs, work quickly, and pour it out immediately — the residual heat is enough to take the raw edge off without dulling the colour.',
    ing: [
      '350 g dried split broad beans, skinless',
      '1 onion, chopped',
      '6 garlic cloves',
      '1.25 litres water',
      '2 tsp ground cumin',
      '1.5 tsp fine sea salt',
      '# The green',
      '80 g coriander leaves and stems',
      '50 g dill',
      '40 g flat-leaf parsley',
      '3 tbsp lemon juice',
      '5 tbsp olive oil',
      '# To finish',
      '2 onions, sliced thinly',
      '4 tbsp olive oil',
      '1 tsp ground cumin',
      '0.5 tsp chilli flakes'
    ],
    st: [
      'Rinse the beans and simmer them with the chopped onion, garlic and water for 40 minutes, until completely collapsing. Top up with a little water if it dries out.',
      'Meanwhile fry the sliced onions in 4 tbsp oil over medium heat for 15 minutes, until deep brown and crisp. Drain on paper and reserve the oil.',
      'Stir the cumin and salt into the cooked beans and take the pan off the heat.',
      'Tip the hot beans into a blender with all the fresh herbs, the lemon juice and the 5 tbsp olive oil.',
      'Blend to a smooth, vividly green purée, working quickly. Add a splash of hot water if it is too stiff to move.',
      'Taste for salt and lemon and pour immediately into a wide shallow dish.',
      'Top with the crisp onions, the cumin, chilli flakes and a spoonful of the onion oil. Serve warm with bread.'
    ],
    tips: [
      'Herbs in at the end, off the heat. Boiled herbs go grey.',
      'Blend hot beans with cold herbs and serve straight away.',
      'Keep the onion frying oil — it is the best thing on top.'
    ],
    pair: ['Aish baladi', 'Torshi', 'Green onions and radishes'],
    store: 'Refrigerated for 3 days; the colour fades but the flavour holds. Reheat gently and add fresh lemon.',
    nut: [245, 12, 27, 10, 9, 3, 420]
  },

  'shorbet-ads': {
    d: 'Red lentil soup finished with cumin, lemon and fried bread. The default first course at every Egyptian table in winter and at every iftar in Ramadan.',
    meta: 'Red lentil soup cooked with carrot and onion, blended smooth and finished with cumin, lemon and fried bread.',
    kw: ['shorbet ads', 'egyptian lentil soup', 'red lentil soup recipe', 'shorbet ads recipe', 'ramadan lentil soup'],
    why: 'Cumin is added twice and that is deliberate. A spoonful early, bloomed in the oil, gives the deep earthy base that carries the whole soup; a second pinch stirred in at the end supplies the bright, almost citrus top note that cooking destroys. Blending is not optional either — this soup is meant to be completely smooth, thick enough to coat a spoon, and a partially blended version tastes thin no matter how long it has cooked.',
    ing: [
      '300 g red lentils, rinsed',
      '2 onions, chopped',
      '2 carrots, chopped',
      '1 potato, chopped',
      '6 garlic cloves',
      '4 tbsp olive oil',
      '2 tsp ground cumin',
      '0.5 tsp ground turmeric',
      '1.75 tsp fine sea salt',
      '1.5 litres water or vegetable stock',
      '# To finish',
      '1 tsp ground cumin',
      '4 tbsp lemon juice',
      '2 pitta breads, cut into squares',
      '3 tbsp olive oil'
    ],
    st: [
      'Soften the onions in 4 tbsp oil for 8 minutes, then add the garlic, carrot and potato and cook 5 minutes more.',
      'Stir in 2 tsp cumin and the turmeric and let them bloom in the oil for 45 seconds.',
      'Add the lentils and the water, bring to the boil, and simmer 35 minutes until the lentils have completely disintegrated.',
      'Fry the pitta squares in 3 tbsp oil until crisp and gold, about 4 minutes, and drain.',
      'Blend the soup until entirely smooth. It should coat a spoon; loosen with hot water if it is too thick.',
      'Stir in the salt, the remaining 1 tsp cumin and the lemon juice off the heat.',
      'Serve with the fried bread scattered over and extra lemon at the table.'
    ],
    tips: [
      'Cumin twice: bloomed early for depth, raw at the end for lift.',
      'Blend it completely smooth. Half-blended tastes watery.',
      'Lemon off the heat, and more of it than you think.'
    ],
    pair: ['Aish baladi', 'Salata baladi', 'Torshi'],
    store: 'Refrigerated for 4 days and it thickens; loosen with water. It freezes for 3 months.',
    nut: [265, 14, 38, 6, 8, 5, 620]
  },

  'salata-baladi': {
    d: 'The chopped country salad that arrives with everything: tomato, cucumber, onion and pepper cut small, dressed with lemon and cumin. No lettuce, no oil-heavy dressing.',
    meta: 'The everyday Egyptian chopped salad of tomato, cucumber, onion and pepper, dressed only with lemon, cumin and a little oil.',
    kw: ['salata baladi', 'egyptian salad', 'salata baladi recipe', 'egyptian chopped salad', 'tomato cucumber salad'],
    why: 'Everything is cut to the same small dice, roughly a centimetre, and that uniformity is what makes it work as a spooned condiment rather than a side salad. The dressing is deliberately lean — lemon does most of it, with only a spoonful of oil — because this is eaten alongside rich, oily dishes and its job is to cut through them. Salt goes on at the very last moment, since salted tomato weeps within minutes and turns the bowl to soup.',
    ing: [
      '5 ripe tomatoes, deseeded and cut into 1 cm dice',
      '2 cucumbers, cut into 1 cm dice',
      '1 green pepper, cut into 1 cm dice',
      '1 small onion, finely diced',
      '30 g flat-leaf parsley, chopped',
      '# For the dressing',
      '4 tbsp lemon juice',
      '2 tbsp olive oil',
      '1 tsp ground cumin',
      '1 garlic clove, crushed',
      '1 tsp fine sea salt',
      '0.25 tsp black pepper'
    ],
    st: [
      'Deseed the tomatoes properly — scoop the watery centres out and discard them, or the salad floods.',
      'Cut the tomato, cucumber and pepper to an even 1 cm dice. Consistency matters more than precision.',
      'Rinse the diced onion under cold water for 20 seconds and shake dry, which takes the harsh edge off.',
      'Whisk the lemon, oil, cumin, garlic and pepper together. Leave the salt out for now.',
      'Combine the vegetables and parsley in a bowl.',
      'Pour over the dressing and turn everything over gently.',
      'Add the salt, toss once more and serve within a few minutes.'
    ],
    tips: [
      'Deseed the tomatoes or it turns into soup.',
      'Salt at the very end, immediately before serving.',
      'Even dice throughout — it is a condiment, not a side salad.'
    ],
    pair: ['Ta\'ameya', 'Kofta masreya', 'Aish baladi'],
    store: 'Best within 30 minutes. It does not keep — the vegetables collapse.',
    nut: [95, 2, 9, 6, 3, 5, 260]
  },

  'tahina-salad': {
    d: 'The Egyptian tahini sauce, thinner and sharper than the Levantine one, cut with vinegar as well as lemon and always served alongside fried things.',
    meta: 'The Egyptian tahini sauce, loosened thinner than the Levantine version and sharpened with vinegar as well as lemon.',
    kw: ['egyptian tahina', 'tahina salad', 'tahini sauce recipe', 'egyptian tahini dip', 'tahina for falafel'],
    why: 'Vinegar is what makes this Egyptian rather than Levantine, and it needs to be a mild white vinegar rather than anything with its own character. It sharpens the sauce past what lemon alone does, which is exactly what you want against ta\'ameya or fried fish. The other difference is consistency: this is poured, not spooned, so it takes more water than a Levantine tahini and should run off the spoon in a thin ribbon.',
    ing: [
      '200 g tahini',
      '4 tbsp lemon juice',
      '2 tbsp white wine vinegar',
      '3 garlic cloves, crushed to a paste',
      '1 tsp fine sea salt',
      '0.5 tsp ground cumin',
      '150 ml cold water, or as needed',
      '# To finish',
      '20 g flat-leaf parsley, finely chopped',
      '1 tbsp olive oil',
      '0.25 tsp chilli flakes'
    ],
    st: [
      'Whisk the tahini with the lemon juice and vinegar. It will seize into a thick paste — this always happens and is not a problem.',
      'Add the garlic, salt and cumin and whisk again.',
      'Add the cold water a tablespoon at a time, whisking after each addition, until the sauce loosens.',
      'Keep going past the point where it looks right. It should pour in a thin ribbon, not sit in a mound.',
      'Taste for salt and sharpness — it wants to be noticeably sour.',
      'Stir in most of the parsley.',
      'Pour into a shallow bowl and finish with the oil, chilli flakes and the last of the parsley.'
    ],
    tips: [
      'It seizes before it loosens. Keep adding water.',
      'Thinner than a Levantine tahini — it should pour.',
      'Vinegar as well as lemon. That is what makes it Egyptian.'
    ],
    pair: ["Ta'ameya", 'Fried fish', 'Aish baladi'],
    store: 'Refrigerated for a week. It thickens in the fridge; whisk in cold water to bring it back.',
    nut: [165, 5, 7, 14, 3, 1, 290]
  },

  'baba-ghanoug-masri': {
    d: 'The Egyptian version, which is a salad rather than a purée: charred aubergine chopped rough and mixed with tomato, pepper and onion, with only a little tahini.',
    meta: 'The Egyptian take on baba ghanoug, chopped rather than puréed and mixed with tomato, green pepper and onion.',
    kw: ['baba ghanoug', 'egyptian baba ghanoug', 'baba ghanoug masri', 'charred aubergine salad', 'egyptian aubergine dip'],
    why: 'This is where Egyptian and Levantine cooking part company over the same vegetable. The Levantine version blends aubergine and tahini into a smooth, pale, sesame-dominated purée; the Egyptian one chops everything and keeps the tahini to a couple of spoonfuls, so it stays a salad you can see the components of. Charring the aubergine over flame still matters as much — without smoke there is nothing holding it together.',
    ing: [
      '3 large aubergines',
      '2 tomatoes, deseeded and finely diced',
      '1 green pepper, finely diced',
      '1 small onion, finely diced and rinsed',
      '3 garlic cloves, crushed',
      '2 tbsp tahini',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '1 tsp ground cumin',
      '1.25 tsp fine sea salt',
      '# To finish',
      '20 g flat-leaf parsley, chopped',
      '1 tbsp olive oil'
    ],
    st: [
      'Char the aubergines whole directly over a gas flame or under a maximum grill, turning often, 25 to 30 minutes until black all over and completely collapsed.',
      'Put them in a colander, split them open and leave to drain and cool for 15 minutes.',
      'Scrape the flesh from the skins and chop it roughly on a board. Do not purée it.',
      'Mix with the tomato, pepper, rinsed onion and garlic.',
      'Whisk the tahini, lemon juice, 3 tbsp oil, cumin and salt together and fold it through.',
      'Taste — it should be sharp and smoky, with the tahini in the background rather than the front.',
      'Spread on a plate, finish with parsley and oil, and serve at room temperature.'
    ],
    tips: [
      'Chop it, do not blend it. That is the whole difference.',
      'Two spoonfuls of tahini, no more.',
      'Drain the aubergine properly or the salad waters down.'
    ],
    pair: ['Aish baladi', "Ta'ameya", 'Grilled meat'],
    store: 'Refrigerated for 3 days. Bring back to room temperature and refresh the lemon.',
    nut: [175, 4, 13, 12, 5, 6, 340]
  },

  'torshi': {
    d: 'The pink pickled turnips that come free with every plate of ta\'ameya in Egypt. Beetroot does the colouring; the turnip does everything else.',
    meta: 'Turnips pickled in brine with a wedge of beetroot for colour, ready in a week and served with every fried thing.',
    kw: ['torshi', 'pickled turnips', 'egyptian pickles', 'torshi recipe', 'pink pickled turnip'],
    why: 'One piece of raw beetroot colours an entire jar, and more than that turns the brine muddy and gives the turnips an earthy flavour that fights the vinegar. The other rule is a properly saline brine: pickles that go slimy or cloudy have almost always been under-salted, because salt is what suppresses the wrong bacteria while the lactic fermentation gets going. Weigh the salt rather than measuring it by spoon.',
    ing: [
      '1 kg turnips, peeled and cut into batons',
      '1 small raw beetroot, peeled and cut into 4 wedges',
      '4 garlic cloves, peeled',
      '# For the brine',
      '1 litre water',
      '60 g fine sea salt',
      '150 ml white wine vinegar',
      '1 tbsp caster sugar',
      '1 tsp coriander seeds',
      '2 bay leaves'
    ],
    st: [
      'Sterilise a 2-litre jar and its lid with boiling water and let it dry.',
      'Bring the water, salt and sugar to a simmer, stirring until fully dissolved, then take off the heat and add the vinegar. Cool completely.',
      'Pack the turnip batons upright into the jar with the garlic, coriander seeds and bay leaves.',
      'Tuck the beetroot wedges down the sides. Use no more than four — the colour spreads a long way.',
      'Pour over the cold brine until everything is submerged, leaving 2 cm of headspace.',
      'Push the vegetables under the surface with a small weight or a folded cabbage leaf. Anything above the brine will spoil.',
      'Seal and leave at cool room temperature for at least 7 days, by which time the pink will have reached the centre. Refrigerate once open.'
    ],
    rest: [10080, 'pickling'],
    tips: [
      'One small beetroot for a whole jar. More makes it muddy.',
      'Weigh the salt. Under-salted brine goes slimy.',
      'Everything must stay under the brine.'
    ],
    pair: ["Ta'ameya", 'Koshari', 'Grilled meat'],
    store: 'Refrigerated for 2 months once opened; the texture softens slowly. Discard if the brine turns cloudy or smells wrong.',
    nut: [25, 1, 5, 0, 1, 3, 680]
  },

  'betengan-mekhalel': {
    d: 'Small aubergines boiled, stuffed with garlic, chilli and pepper, and kept under oil and vinegar. Sharper and hotter than the Levantine makdous, and made without walnuts.',
    meta: 'Small aubergines boiled and stuffed with garlic, chilli and pepper, then kept under oil and vinegar as a sharp pickle.',
    kw: ['betengan mekhalel', 'egyptian pickled aubergine', 'pickled eggplant recipe', 'stuffed aubergine pickle', 'egyptian torshi betengan'],
    why: 'Vinegar rather than oil alone is what preserves this, which is the technical difference from Syrian makdous and the reason it is sharper. That said, the draining step is identical and equally non-negotiable: aubergine that goes into the jar still holding water will dilute the acidity below the point where it is safe, and the whole batch spoils. Press them under a weight until they genuinely stop giving liquid.',
    ing: [
      '1 kg small aubergines, about 8 cm long',
      '2 tbsp fine sea salt, for draining',
      '# For the stuffing',
      '10 garlic cloves, crushed',
      '2 red chillies, finely chopped',
      '1 red pepper, very finely diced',
      '1 tbsp ground coriander',
      '1.5 tsp fine sea salt',
      '# To pack',
      '200 ml white wine vinegar',
      '300 ml olive oil, or enough to cover'
    ],
    st: [
      'Boil the aubergines whole in salted water 12 minutes, until a skewer passes through but the skins hold. Drain.',
      'Slit each one down one side, stopping short of both ends, and rub the inside with a little of the draining salt.',
      'Sit them cut-side down in a colander under a plate and a heavy weight and leave to drain for at least 480 minutes. They must stop weeping entirely.',
      'Mix the garlic, chillies, red pepper, ground coriander and salt into a coarse stuffing.',
      'Press a teaspoon of it into each aubergine and close the slit.',
      'Pack them tightly into a sterilised jar, pour in the vinegar, then top up with olive oil until they are completely submerged.',
      'Seal and keep somewhere cool for at least a week before eating.'
    ],
    rest: [480, 'draining under a weight'],
    tips: [
      'Drain until no more liquid comes. This is a food-safety step, not a texture one.',
      'Vinegar as well as oil — that is what makes it Egyptian and what keeps it.',
      'Everything stays under the surface.'
    ],
    pair: ['Koshari', 'Grilled meat', 'Aish baladi'],
    store: 'Cool and dark for 3 months while covered; refrigerate after opening and use within 6 weeks.',
    nut: [145, 3, 10, 11, 4, 4, 590]
  },

  'batates-mohammara': {
    d: 'Potatoes roasted hard with cumin, coriander and a lot of garlic until the edges go almost black. Sold from carts by the paper cone.',
    meta: 'Potato wedges roasted hard with cumin, coriander and garlic until the edges blacken, finished with lemon and chilli.',
    kw: ['batates mohammara', 'egyptian roast potatoes', 'cumin roast potatoes', 'spiced potatoes recipe', 'egyptian street potatoes'],
    why: 'Ground cumin burns long before a potato is properly roasted, so half of it goes on at the start to perfume the oil and the rest goes on when the tray comes out. Coating potatoes in all the spice up front gives you a bitter, scorched crust and a bland interior. Parboiling first and then roughing the edges in the colander creates the broken surface that catches the oil and turns almost black — the same trick as a British roast potato, to a completely different end.',
    ing: [
      '1 kg floury potatoes, cut into large wedges',
      '5 tbsp olive oil',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '6 garlic cloves, crushed',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '1 tsp ground cumin',
      '0.5 tsp chilli flakes',
      '3 tbsp lemon juice',
      '20 g coriander leaves, chopped'
    ],
    st: [
      'Heat the oven to 220°C / 425°F.',
      'Boil the potato wedges in salted water 8 minutes, then drain and leave them in the colander for 2 minutes to steam dry.',
      'Shake the colander hard so the outsides rough up and break a little.',
      'Toss with the oil, 1 tsp cumin, the ground coriander, garlic, salt and pepper.',
      'Spread on a large tray in a single layer with space between the wedges.',
      'Roast 35 minutes, turning once at the halfway point, until deeply browned with blackened edges.',
      'Toss straight from the oven with the remaining cumin, the chilli flakes, lemon juice and fresh coriander.'
    ],
    tips: [
      'Rough the edges in the colander. That is where the crust comes from.',
      'Half the cumin at the start, half at the end — it burns.',
      'Lemon while they are still hot.'
    ],
    pair: ['Grilled chicken', 'Egyptian tahina', 'Salata baladi'],
    store: 'Best immediately. Refrigerated for 2 days; re-crisp at 220°C for 10 minutes.',
    nut: [245, 4, 34, 11, 4, 2, 420]
  },

  'dukkah': {
    d: 'Toasted nuts, seeds and spices pounded to a dry rubble, eaten by dipping bread in oil and then in the dukkah. Every family has its proportions and considers the others wrong.',
    meta: 'Toasted hazelnuts, sesame, coriander and cumin pounded to a dry, uneven rubble for dipping bread and oil into.',
    kw: ['dukkah', 'egyptian dukkah', 'dukkah recipe', 'nut spice blend', 'duqqa recipe'],
    why: 'Everything is toasted separately, because a hazelnut needs eight minutes and a sesame seed needs ninety seconds, and toasting them together guarantees that something is either raw or burnt. The texture is the other half: dukkah is pounded, not blended, and it must stay dry and uneven. A food processor run for more than a few pulses releases the oil in the nuts and turns the whole thing into a paste, which is a different and much worse condiment.',
    ing: [
      '150 g hazelnuts',
      '80 g sesame seeds',
      '3 tbsp coriander seeds',
      '2 tbsp cumin seeds',
      '1 tbsp fennel seeds',
      '1 tsp black peppercorns',
      '1.5 tsp flaky sea salt',
      '0.5 tsp dried mint',
      '# To serve',
      'Good olive oil',
      'Aish baladi or any flatbread'
    ],
    st: [
      'Toast the hazelnuts in a dry pan over medium heat for 8 minutes, shaking often, until the skins darken and loosen. Tip into a tea towel and rub the skins off.',
      'Toast the coriander, cumin and fennel seeds together for 2 minutes, until they smell warm and begin to pop. Tip out.',
      'Toast the sesame seeds alone for 90 seconds, until pale gold. They burn faster than anything else here.',
      'Grind the peppercorns and toasted spice seeds in a mortar or spice grinder to a coarse powder.',
      'Pound the hazelnuts separately to a rubble the size of coarse gravel. Stop well before they turn oily.',
      'Combine everything with the sesame seeds, salt and dried mint and toss well.',
      'Serve in a bowl beside a dish of olive oil, with bread for dipping into one and then the other.'
    ],
    tips: [
      'Toast each thing separately. The timings are not close.',
      'Pound, do not blend. Blending makes nut butter.',
      'Keep it dry — no oil in the mix itself.'
    ],
    pair: ['Flatbread and olive oil', 'Boiled eggs', 'Roast vegetables'],
    store: 'An airtight jar in a cool cupboard for 4 weeks. It goes stale rather than off; the nuts lose their crispness first.',
    nut: [110, 4, 5, 9, 2, 1, 190]
  },

  'bamia-masreya': {
    d: 'The Egyptian okra stew: smaller pods than the Levantine version, more tomato, and finished with a hit of fried garlic and coriander stirred in at the end.',
    meta: 'Okra and lamb stewed in tomato, finished with a taqliya of fried garlic and coriander stirred in at the last moment.',
    kw: ['bamia masreya', 'egyptian okra stew', 'bamia recipe', 'okra tomato lamb', 'egyptian bamya'],
    why: 'The taqliya — garlic and ground coriander fried hard in oil and poured in at the end — is what separates this from every other okra stew in the region. It goes in during the last two minutes so it stays sharp and almost raw-tasting against the long-cooked tomato underneath. Stirred in earlier it simply disappears. As with any okra, the pods stay whole and the cook is long: an hour and a quarter, and the slipperiness is gone entirely.',
    ing: [
      '500 g lamb shoulder, cut into 3 cm cubes',
      '700 g small okra, stems trimmed but pods whole',
      '2 onions, chopped',
      '3 tbsp olive oil',
      '400 g tin chopped tomatoes',
      '3 tbsp tomato purée',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '700 ml water',
      '# For the taqliya',
      '8 garlic cloves, crushed',
      '2 tsp ground coriander',
      '3 tbsp olive oil',
      '0.5 tsp chilli flakes',
      '# To finish',
      'Lemon wedges'
    ],
    st: [
      'Trim the okra by paring the stem cone away without opening the pod.',
      'Brown the lamb hard in 3 tbsp oil in two batches, about 8 minutes. Lift out.',
      'Soften the onions in the same pan 8 minutes, stir in the tomato purée and cook it out 2 minutes.',
      'Return the lamb with the tomatoes, salt, pepper and water. Simmer covered 45 minutes.',
      'Add the whole okra, pushing it under the liquid, and simmer uncovered 25 minutes more, shaking the pan rather than stirring.',
      'For the taqliya, fry the garlic and ground coriander in 3 tbsp oil over high heat for 45 seconds, until fiercely fragrant and just beginning to colour. Add the chilli flakes.',
      'Pour the taqliya into the stew, stir once, and cook a final 2 minutes. Serve with rice and lemon.'
    ],
    tips: [
      'Whole pods, always. Cut okra is slimy okra.',
      'The taqliya goes in at the end — that is the Egyptian signature.',
      'Shake the pan rather than stirring once the okra is in.'
    ],
    pair: ['Plain rice', 'Aish baladi', 'Torshi'],
    store: 'Refrigerated for 4 days and better the next day. It freezes for 3 months.',
    nut: [390, 24, 22, 24, 6, 9, 720]
  },

  'torly': {
    d: 'Vegetables cut large and roasted together in a tomato sauce until everything is soft enough to eat with a spoon. Lent food, and one of the best vegetarian dishes in the cuisine.',
    meta: 'Aubergine, courgette, potato and carrot roasted together in a garlic tomato sauce until soft enough to eat with a spoon.',
    kw: ['torly', 'egyptian vegetable casserole', 'torly recipe', 'roasted vegetable stew', 'vegan egyptian dish'],
    why: 'The vegetables are roasted before the sauce goes anywhere near them, which is the difference between torly and a wet vegetable stew. Twenty-five minutes in a hot oven drives off water and browns the cut faces; only then does the tomato go in, and it coats rather than boils. Cut everything large — 4 cm — because the point is soft, yielding pieces that keep their identity, and small dice simply dissolves into a mush.',
    ing: [
      '2 aubergines, cut into 4 cm chunks',
      '3 courgettes, cut into 4 cm chunks',
      '500 g potatoes, cut into 4 cm chunks',
      '3 carrots, cut into 3 cm lengths',
      '2 onions, cut into wedges',
      '6 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '# For the sauce',
      '400 g tin chopped tomatoes',
      '3 tbsp tomato purée',
      '8 garlic cloves, crushed',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1 tsp fine sea salt',
      '350 ml water',
      '# To finish',
      '30 g coriander leaves, chopped',
      'Lemon wedges'
    ],
    st: [
      'Heat the oven to 220°C / 425°F.',
      'Toss all the vegetables with the oil and 1.5 tsp salt and spread across two large trays so nothing is crowded.',
      'Roast 25 minutes, turning once, until browned at the edges and half cooked.',
      'Whisk the tomatoes, purée, garlic, ground coriander, cumin, salt and water together.',
      'Tip all the roasted vegetables into one deep dish and pour the sauce over.',
      'Lower the oven to 190°C / 375°F and bake 45 minutes, until everything is completely tender and the sauce has thickened around it.',
      'Rest 10 minutes, then scatter with fresh coriander and serve with lemon and bread.'
    ],
    tips: [
      'Roast first, sauce second. Otherwise it is a boiled stew.',
      'Cut everything large so the pieces survive.',
      'Two trays for the roasting — crowding steams them.'
    ],
    pair: ['Aish baladi', 'Plain rice', 'Egyptian tahina'],
    store: 'Refrigerated for 4 days and better on day two. It freezes for 3 months.',
    nut: [210, 5, 26, 11, 7, 11, 480]
  },

  'roz-mermah': {
    d: 'Egyptian rice, which is short-grain and cooked with broken vermicelli browned in butter first. The default starch under everything else in this volume.',
    meta: 'Short-grain Egyptian rice cooked with vermicelli browned in butter first, giving a nutty base under every other dish.',
    kw: ['roz mermah', 'egyptian rice', 'rice with vermicelli', 'egyptian rice recipe', 'vermicelli pilaf'],
    why: 'The vermicelli has to be browned properly in the butter — to the colour of strong tea, not pale gold — because that toasting is the entire flavour contribution and undercooked noodles just add texture. It takes about four minutes of constant attention and goes from perfect to burnt in roughly twenty seconds, so it cannot be left. Egyptian rice is short-grain and is rinsed rather than soaked; the small amount of surface starch that survives is what gives the dish its slight stickiness.',
    ing: [
      '400 g short-grain rice, rinsed three times',
      '60 g vermicelli, broken into 2 cm pieces',
      '3 tbsp butter',
      '1.5 tsp fine sea salt',
      '700 ml hot water or chicken stock'
    ],
    st: [
      'Melt the butter in a heavy pan over medium heat.',
      'Add the broken vermicelli and stir constantly for 4 minutes, until every piece is the colour of strong tea. Do not walk away from it.',
      'Add the drained rice and turn it in the butter for 2 minutes until the grains look glossy.',
      'Pour in the hot water or stock and add the salt. Stir once, and once only.',
      'Bring to a full boil, then cover and cook on the lowest possible heat 15 minutes without lifting the lid.',
      'Take off the heat and leave covered for a further 10 minutes.',
      'Fork it through gently, lifting rather than stirring, and serve.'
    ],
    tips: [
      'Brown the vermicelli to a real colour. Pale means no flavour.',
      'Stir once after the liquid goes in, then never again.',
      'Ten minutes covered off the heat is part of the cooking, not a rest.'
    ],
    pair: ['Bamia masreya', 'Torly', 'Kofta masreya'],
    store: 'Refrigerated for 3 days. Reheat covered with a splash of water. It freezes for 2 months.',
    nut: [285, 6, 50, 7, 1, 1, 380]
  },

  'kishk-masri': {
    d: 'A thick soup of yogurt and flour cooked out slowly and poured over fried bread and onions. Sour, savoury and completely unlike anything else in the book.',
    meta: 'A thick sour soup of yogurt cooked out with flour and garlic, poured over fried bread and crisp onions.',
    kw: ['kishk masri', 'egyptian kishk', 'yogurt flour soup', 'kishk recipe', 'sour yogurt soup'],
    why: 'The flour has to be cooked out for a good five minutes in the butter before any yogurt goes in, or the finished soup tastes raw and pasty — this is a roux, and it behaves like one. Once the yogurt is in, the same rule applies as to every yogurt sauce in this book: constant stirring in one direction until it simmers, at which point it is stable. Take the pan off the heat the moment it thickens; kishk left bubbling turns grainy.',
    ing: [
      '600 g full-fat plain yogurt',
      '40 g plain flour',
      '3 tbsp butter',
      '6 garlic cloves, crushed',
      '1 tsp ground coriander',
      '1.25 tsp fine sea salt',
      '400 ml water',
      '# To finish',
      '2 onions, sliced thinly',
      '3 tbsp olive oil',
      '2 pitta breads, torn and fried crisp',
      '0.5 tsp chilli flakes'
    ],
    st: [
      'Fry the sliced onions in the olive oil over medium heat for 15 minutes until deep brown and crisp. Drain and set aside.',
      'Melt the butter in a heavy pan, add the flour, and cook it out over medium heat for 5 minutes, stirring, until it smells biscuity and turns pale sand-coloured.',
      'Whisk the yogurt with the water until smooth, then pour it into the roux in a thin stream, whisking hard.',
      'Add the garlic, ground coriander and salt.',
      'Stir constantly in one direction over medium heat for about 8 minutes until it comes to a gentle simmer and thickens to the consistency of double cream.',
      'Take it off the heat immediately — it goes grainy if held at a boil.',
      'Pour over the fried bread in bowls, top with the crisp onions and chilli flakes, and serve hot.'
    ],
    tips: [
      'Cook the flour out for a full 5 minutes or the soup tastes raw.',
      'One direction, constant stirring, until it simmers.',
      'Off the heat the moment it thickens.'
    ],
    pair: ['Aish baladi', 'Torshi', 'A green salad'],
    store: 'Refrigerated for 2 days. Rewarm gently without boiling and add the bread and onions fresh.',
    nut: [235, 11, 28, 9, 2, 9, 560]
  }
};
