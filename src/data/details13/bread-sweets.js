'use strict';

/**
 * Volume thirteen — Egyptian bread, sweets and drinks.
 *
 * Bread first, because in Egypt it is called aish — life — and the wholemeal
 * baladi loaf is eaten with almost everything in this volume. Then the sweets,
 * which are mostly syrup-soaked and mostly Ottoman by descent, and three drinks
 * sold from carts and copper urns on the street.
 */

module.exports = {
  'aish-baladi': {
    d: 'The wholemeal country loaf, baked on a bed of bran at a ferocious heat so it puffs into a hollow disc. The bread the word aish — life — actually refers to.',
    meta: 'Egyptian wholemeal country bread proved on bran and baked at ferocious heat so each loaf puffs hollow in two minutes.',
    kw: ['aish baladi', 'egyptian bread', 'aish baladi recipe', 'wholemeal pita', 'egyptian flatbread'],
    why: 'The bran is not a garnish. Baladi dough is wet — considerably wetter than a white pita dough — and the bran bed is what lets you move it to a searing oven without it sticking to everything, while also giving the base its characteristic speckled crust. The wetness is what makes the loaf puff: wholemeal flour absorbs more water and a stiff dough simply will not generate the steam needed to separate the two leaves.',
    ing: [
      '400 g wholemeal flour',
      '100 g strong white flour',
      '7 g fast-action dried yeast',
      '1.5 tsp fine sea salt',
      '1 tsp caster sugar',
      '380 ml warm water',
      '# For the bed',
      '60 g coarse bran, or fine semolina'
    ],
    st: [
      'Mix the flours, yeast, salt and sugar, then work in the water to a soft, distinctly wet dough. It should be tacky and difficult to handle.',
      'Knead 8 minutes with a dough scraper rather than adding flour. Cover and leave to rise 90 minutes, until doubled.',
      'Scatter a thick layer of bran over two trays.',
      'Divide the dough into 8 and, with wet hands, shape each piece into a ball and set it on the bran. Flatten each to a 14 cm disc and dust the tops with more bran.',
      'Cover and leave to prove a second time while the oven heats. Put a baking stone or heavy tray on the top shelf at maximum heat, at least 250°C / 480°F, for 30 minutes.',
      'Slide the loaves two at a time onto the hot surface, bran and all.',
      'Bake 4 to 5 minutes, until fully ballooned and lightly speckled. Wrap in a cloth as they come out so they stay soft.'
    ],
    rest: [90, 'the dough rising'],
    tips: [
      'A wet dough. Adding flour to make it manageable stops it puffing.',
      'The bran bed does the work of a floured peel.',
      'Maximum heat, preheated 30 minutes.'
    ],
    pair: ['Ful medames', "Ta'ameya", 'Besara'],
    store: 'Two days in a bag. It freezes for 3 months and reheats from frozen in a hot oven.',
    nut: [235, 9, 47, 2, 7, 1, 340]
  },

  'eish-merahrah': {
    d: 'A flat wholemeal loaf enriched with ground fenugreek and maize, from the villages of Upper Egypt. Bitter, nutty and quite unlike any other bread here.',
    meta: 'A flat Upper Egyptian loaf made with wholemeal, maize flour and ground fenugreek, giving a nutty, faintly bitter crumb.',
    kw: ['eish merahrah', 'fenugreek bread', 'egyptian village bread', 'eish merahrah recipe', 'maize flatbread'],
    why: 'Fenugreek is aggressively bitter raw, and the fix is to soak the ground seed before it goes into the dough. An hour in warm water leaches out most of the harshness and leaves the maple-ish, savoury note that makes this bread what it is; skip the soak and the loaf is genuinely unpleasant. The maize flour is what keeps the crumb open and slightly crumbly, and it cannot be replaced with more wheat without turning the whole thing dense.',
    ing: [
      '2 tbsp ground fenugreek',
      '150 ml warm water, for soaking',
      '300 g wholemeal flour',
      '150 g fine maize flour',
      '7 g fast-action dried yeast',
      '1.5 tsp fine sea salt',
      '3 tbsp olive oil',
      '250 ml warm water',
      '# For the bed',
      '40 g maize flour, for dusting'
    ],
    st: [
      'Soak the ground fenugreek in the 150 ml warm water for 60 minutes. Do not drain it — the softened seed and its liquid both go into the dough.',
      'Mix the wholemeal and maize flours with the yeast and salt.',
      'Add the soaked fenugreek, the oil and the 250 ml water and bring to a soft dough. Knead 8 minutes.',
      'Cover and prove 75 minutes until well risen. It will not double as dramatically as a white dough.',
      'Heat the oven to 240°C / 465°F with a heavy tray inside.',
      'Divide into 6 and press each into a 16 cm disc on a surface dusted with maize flour. Dust the tops as well.',
      'Bake on the hot tray 18 to 20 minutes, until set and lightly coloured with a dry, matt crust. Cool under a cloth.'
    ],
    rest: [135, 'soaking the fenugreek and rising the dough'],
    tips: [
      'Soak the fenugreek for a full hour or the bread is bitter.',
      'Do not swap the maize flour out — it is the texture.',
      'It rises less than a white dough. That is correct.'
    ],
    pair: ['Besara', 'Gebna domiati salad', 'Sweet tea'],
    store: 'Three days wrapped; it stales more slowly than white bread. It freezes for 2 months.',
    nut: [285, 8, 48, 7, 6, 1, 380]
  },

  'feteer-meshaltet': {
    d: 'Layered pastry stretched paper-thin, folded with ghee over and over, and baked into something between a pancake and a croissant. Called Egyptian pizza, which undersells it.',
    meta: 'Dough stretched paper-thin and folded repeatedly with ghee, baked into a layered pastry between a pancake and a croissant.',
    kw: ['feteer meshaltet', 'egyptian layered pastry', 'feteer recipe', 'egyptian pizza', 'flaky egyptian bread'],
    why: 'The dough must be stretched until you can read through it, and the only way to get there is a very soft dough and a well-greased surface — flour is never used for this, because it would dry the sheet and stop the layers separating. Ghee rather than butter matters too: butter contains water, which turns to steam and blows the layers apart unevenly, where clarified ghee simply lubricates them so they slide and stay distinct.',
    ing: [
      '500 g plain flour',
      '1.5 tsp fine sea salt',
      '1 tsp caster sugar',
      '320 ml warm water',
      '# For the layers',
      '250 g ghee, melted and kept warm',
      '# To finish',
      '2 tbsp ghee, melted'
    ],
    st: [
      'Mix the flour, salt and sugar, add the water and knead 10 minutes to a very soft, smooth dough. Divide into 6 balls.',
      'Coat each ball generously in melted ghee, cover, and leave to relax 30 minutes. Do not skip this — the gluten must slacken before it will stretch.',
      'Grease a large work surface heavily with ghee. Never use flour at any stage.',
      'Take one ball and press it out, then stretch it with the backs of your hands until it is a huge translucent sheet you can read through.',
      'Brush with more ghee, then fold it in from all four sides into a small square parcel.',
      'Repeat with the remaining balls, stacking the parcels. Heat the oven to 220°C / 425°F.',
      'Press each parcel gently into a 20 cm round, brush with ghee, and bake on a heavy tray 25 minutes until deep gold and visibly layered. Serve hot.'
    ],
    tips: [
      'Ghee on the surface, never flour.',
      'Stretch until it is translucent. Thick means no layers.',
      'Rest the ghee-coated balls before stretching or the dough tears.'
    ],
    pair: ['Honey and cream', 'Gebna domiati salad', 'Sweet tea'],
    store: 'Best the day it is made. Two days wrapped; refresh at 200°C for 6 minutes. It freezes baked for a month.',
    nut: [545, 8, 48, 36, 2, 1, 460]
  },

  'gebna-domiati': {
    d: 'The soft white brined cheese of Damietta, cubed with tomato, cucumber and oil into a breakfast salad. Salty enough that it needs no other seasoning.',
    meta: 'Soft brined Damietta cheese cubed with tomato, cucumber and green pepper, dressed with oil, lemon and dried mint.',
    kw: ['gebna domiati', 'egyptian white cheese', 'domiati cheese salad', 'egyptian breakfast salad', 'brined cheese salad'],
    why: 'Domiati is packed in a strong brine and its saltiness varies enormously between producers, so it is tasted before anything else is decided — a mild block wants a pinch of salt in the dressing and a fierce one wants a soak in cold water first. Adding salt blind is how this ends up inedible. Cutting the cheese in large cubes rather than crumbling it also matters: it holds its shape against the tomato instead of dissolving into a paste.',
    ing: [
      '300 g gebna domiati, or a mild feta',
      '4 ripe tomatoes, cut into 2 cm dice',
      '1 cucumber, cut into 2 cm dice',
      '1 green pepper, diced',
      '1 small onion, finely sliced and rinsed',
      '# For the dressing',
      '4 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tsp dried mint',
      '0.25 tsp black pepper',
      '# To serve',
      '20 g flat-leaf parsley, chopped',
      'Aish baladi'
    ],
    st: [
      'Taste the cheese first. If it is very salty, soak it in cold water for 20 minutes and drain.',
      'Cut it into 2 cm cubes rather than crumbling it.',
      'Combine the tomato, cucumber, pepper and rinsed onion in a bowl.',
      'Whisk the oil, lemon, dried mint and black pepper. Add salt only if the cheese was mild.',
      'Add the cheese cubes to the vegetables and pour the dressing over.',
      'Turn everything over once, gently, so the cubes stay whole.',
      'Scatter with parsley and serve immediately with bread.'
    ],
    tips: [
      'Taste the cheese before you season anything.',
      'Cubes, not crumbles — they hold up.',
      'Turn it once. Repeated tossing breaks the cheese down.'
    ],
    pair: ['Aish baladi', 'Ful medames', 'Sweet tea'],
    store: 'Best within the hour. The cheese and vegetables can be prepared separately a day ahead.',
    nut: [265, 12, 9, 21, 2, 6, 780]
  },

  'batarekh': {
    d: 'Grey mullet roe, salted and pressed and dried into a hard amber block, sliced paper-thin with oil and lemon. Egypt has been making it since the pharaohs.',
    meta: 'Cured and pressed grey mullet roe sliced paper-thin, served with olive oil, lemon and bread as a mezze.',
    kw: ['batarekh', 'egyptian bottarga', 'cured mullet roe', 'batarekh recipe', 'salted fish roe'],
    why: 'Batarekh is intense enough that the entire preparation is about restraint — the wax coating comes off, the block is sliced as thin as the knife will allow, and nothing is added but oil and lemon. Slicing it thick makes it overwhelmingly salty and slightly waxy on the tongue; at a millimetre it turns translucent and tastes of the sea rather than of salt. Chilling the block firms it enough to cut cleanly, which a room-temperature one will not do.',
    ing: [
      '150 g batarekh, or bottarga, in the block',
      '4 tbsp good olive oil',
      '2 tbsp lemon juice',
      '# To serve',
      '1 lemon, cut into wedges',
      '6 spring onions',
      '20 g flat-leaf parsley leaves',
      'Aish baladi, or any flatbread'
    ],
    st: [
      'Chill the block for 30 minutes. It slices far more cleanly cold.',
      'Peel away the wax or membrane coating with a small sharp knife.',
      'Slice as thinly as you possibly can — aim for 1 mm, translucent at the edges.',
      'Lay the slices in a single overlapping layer on a cold plate.',
      'Dress with the olive oil and lemon juice about 10 minutes before serving, so it softens slightly.',
      'Scatter with parsley leaves.',
      'Serve with lemon wedges, whole spring onions and bread, and let people build their own mouthfuls.'
    ],
    tips: [
      'Slice it paper-thin. Thick slices are just salt.',
      'Chill before slicing or it crumbles.',
      'Oil and lemon only. It needs nothing else.'
    ],
    pair: ['Aish baladi', 'Spring onions', 'A cold beer'],
    store: 'The whole block keeps refrigerated and wrapped for 3 months. Once sliced, eat within a day.',
    nut: [185, 16, 2, 13, 0, 0, 1150]
  },

  'balah-el-sham': {
    d: 'Ridged fingers of choux fried rather than baked, dropped hot into cold syrup. The name means dates of Damascus, which they resemble and are not.',
    meta: 'Ridged choux fingers deep-fried rather than baked and dropped straight from the oil into cold sugar syrup.',
    kw: ['balah el sham', 'egyptian churros', 'balah el sham recipe', 'fried choux syrup', 'egyptian dessert'],
    why: 'The oil starts cold, or nearly so, and comes up to temperature with the pastry already in it — which is the opposite of every other frying instruction in this book and is what gives balah el sham its hollow inside. Dropped into hot oil the outside sets instantly and the centre stays raw and dense. And as with every syrup-soaked pastry here: hot into cold, so it takes a coating and stops rather than drinking until it collapses.',
    ing: [
      '# For the syrup',
      '400 g caster sugar',
      '250 ml water',
      '1 tbsp lemon juice',
      '1 tsp rose water',
      '# For the choux',
      '250 ml water',
      '100 g butter',
      '1 tbsp caster sugar',
      '0.5 tsp fine sea salt',
      '150 g plain flour',
      '4 eggs',
      '1 tsp vanilla extract',
      '# To fry',
      '800 ml sunflower oil',
      '# To finish',
      '40 g pistachios, chopped'
    ],
    st: [
      'Boil the syrup sugar, water and lemon for 10 minutes to a syrup that coats a spoon. Stir in the rose water and chill until properly cold.',
      'Bring the water, butter, sugar and salt to a rolling boil. Tip in the flour all at once and beat hard over the heat for 2 minutes until it forms a smooth ball that leaves the pan.',
      'Cool for 10 minutes, then beat in the eggs one at a time, followed by the vanilla, to a thick, glossy, pipeable paste.',
      'Fill a piping bag with a large star nozzle. The ridges matter — they are what crisps.',
      'Pour the oil into a deep pan and pipe 6 cm lengths straight into the cold oil, cutting them off with scissors.',
      'Now set the pan over medium heat and bring the oil up slowly. The pastry will rise and hollow as the oil heats. Fry 12 to 14 minutes total, turning, until deep gold and hollow.',
      'Lift straight from the oil into the cold syrup for 40 seconds, then onto a rack. Scatter with pistachios.'
    ],
    tips: [
      'Into cold oil, then heat it. This is what makes them hollow.',
      'A star nozzle, not a plain one.',
      'Hot pastry, cold syrup, forty seconds.'
    ],
    pair: ['Turkish coffee', 'Karkade', 'Mint tea'],
    store: 'Best within a few hours. Refrigerated for 2 days, though they soften. Do not freeze.',
    nut: [385, 5, 52, 18, 1, 36, 220]
  },

  'om-ali': {
    d: 'Torn pastry baked in sweetened milk with nuts and coconut until the top blisters and the bottom turns to custard. Egypt’s national pudding, and supposedly named after a murder.',
    meta: 'Torn puff pastry baked in sweetened milk with nuts, raisins and coconut until the top blisters and the base sets to custard.',
    kw: ['om ali', 'egyptian bread pudding', 'om ali recipe', 'umm ali dessert', 'egyptian milk pudding'],
    why: 'The pastry is baked dry and crisp before any milk goes near it, which is the step that decides whether this is a pudding or a bowl of wet paper. Twelve minutes in a hot oven drives the moisture out and sets the layers, so they can absorb the milk without disintegrating. Pour the milk hot as well — cold milk over crisp pastry soaks unevenly, leaving dry patches on top and sludge underneath.',
    ing: [
      '400 g puff pastry, or 6 croissants',
      '# For the milk',
      '1 litre whole milk',
      '200 ml double cream',
      '120 g caster sugar',
      '1 tsp vanilla extract',
      '1 tbsp rose water',
      '# For the filling',
      '60 g flaked almonds',
      '60 g pistachios, chopped',
      '50 g desiccated coconut',
      '60 g raisins',
      '# To finish',
      '150 ml double cream',
      '2 tbsp flaked almonds'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Roll the pastry out thin, lay it on a tray and bake 12 minutes until puffed, dry and crisp. Cool, then tear into rough pieces.',
      'Scatter the torn pastry into a deep baking dish with the almonds, pistachios, coconut and raisins, mixing them through.',
      'Heat the milk, 200 ml cream, sugar and vanilla until steaming but not boiling. Stir in the rose water off the heat.',
      'Pour the hot milk evenly over the pastry and press everything down with the back of a spoon so it is submerged.',
      'Leave to soak for 10 minutes.',
      'Whip the remaining 150 ml cream to soft peaks and spread it over the top, then scatter with the extra almonds.',
      'Bake 30 minutes at 200°C, until the top is blistered and deep brown in patches and the edges bubble. Rest 10 minutes before serving.'
    ],
    tips: [
      'Bake the pastry crisp first. Raw pastry turns to paste.',
      'Hot milk, poured evenly, then pressed down.',
      'The blistered top is the point — do not pull it out pale.'
    ],
    pair: ['Turkish coffee', 'Karkade', 'Fresh dates'],
    store: 'Refrigerated for 3 days. Reheat at 180°C for 12 minutes. It does not freeze.',
    nut: [575, 11, 52, 35, 3, 34, 240]
  },

  'roz-bel-laban': {
    d: 'Rice pudding cooked on the hob until it thickens by itself, with no eggs and no oven. Served cold in glasses with cinnamon and nuts.',
    meta: 'Egyptian rice pudding cooked on the hob without eggs until the starch alone thickens it, served cold with cinnamon.',
    kw: ['roz bel laban', 'egyptian rice pudding', 'roz bel laban recipe', 'rice pudding milk', 'egyptian dessert'],
    why: 'The rice is boiled in water first and only then finished in the milk, which is what stops the milk catching and scorching over the forty minutes the grain needs. It also lets the starch out into the water where it can be kept — that starchy liquid goes into the pan with the milk and is the only thickener in the recipe. Short-grain rice is essential; long-grain simply does not release enough starch and the result stays thin however long it cooks.',
    ing: [
      '150 g short-grain rice',
      '350 ml water',
      '1 litre whole milk',
      '150 g caster sugar',
      '1 tbsp cornflour',
      '1 tsp vanilla extract',
      '1 tbsp rose water',
      '0.25 tsp fine sea salt',
      '# To finish',
      '1 tsp ground cinnamon',
      '40 g pistachios, chopped',
      '2 tbsp raisins'
    ],
    st: [
      'Rinse the rice once only — you want to keep most of the surface starch.',
      'Simmer it in the 350 ml water for 12 minutes, until the water is almost gone and the grains are swollen but still firm. Do not drain.',
      'Add 900 ml of the milk, the sugar and the salt, and bring to a bare simmer.',
      'Cook uncovered 30 minutes, stirring every few minutes and scraping the base, until the grains are completely soft and the milk has thickened.',
      'Whisk the cornflour into the remaining 100 ml cold milk and stir it in. Cook 3 minutes more, stirring, until it visibly thickens.',
      'Take off the heat and stir in the vanilla and rose water. It will thicken a great deal more as it cools.',
      'Pour into glasses, cool, then chill at least 120 minutes. Serve cold with cinnamon, pistachios and raisins.'
    ],
    rest: [120, 'chilling'],
    tips: [
      'Boil in water first, then finish in milk. It stops the milk catching.',
      'Short-grain rice only.',
      'It thickens hugely as it cools — take it off looser than you want it.'
    ],
    pair: ['Turkish coffee', 'Karkade', 'Fresh dates'],
    store: 'Refrigerated for 4 days, covered. Loosen with a splash of milk. Do not freeze.',
    nut: [285, 8, 48, 7, 1, 33, 110]
  },

  'qatayef': {
    d: 'One-sided pancakes stuffed with nuts and cinnamon, pinched shut and fried, then dropped into syrup. The Ramadan sweet, sold by the kilo from stalls after sunset.',
    meta: 'One-sided pancakes stuffed with walnuts and cinnamon, sealed, fried until crisp and dropped into cold syrup.',
    kw: ['qatayef', 'egyptian qatayef', 'qatayef recipe', 'ramadan pancakes', 'stuffed fried pancakes'],
    why: 'The pancake is cooked on one side only, and the wet holed surface that leaves is what makes the seam stick — this is the same principle as the Lebanese atayef, but here the parcel is sealed completely and fried, so the seal has to be genuinely airtight. Pinch from the point of the fold all the way round and press hard. Any gap lets oil in and the nuts out, and a leaked qatayef will ruin the whole pan of oil.',
    ing: [
      '# For the batter',
      '200 g plain flour',
      '30 g fine semolina',
      '1 tbsp caster sugar',
      '1 tsp baking powder',
      '7 g fast-action dried yeast',
      '0.25 tsp fine sea salt',
      '450 ml warm water',
      '# For the filling',
      '200 g walnuts, chopped',
      '50 g caster sugar',
      '1.5 tsp ground cinnamon',
      '1 tbsp desiccated coconut',
      '# For the syrup',
      '300 g caster sugar',
      '180 ml water',
      '1 tbsp lemon juice',
      '1 tbsp rose water',
      '# To fry',
      '800 ml sunflower oil'
    ],
    st: [
      'Blend the batter ingredients smooth and leave 30 minutes until the surface bubbles. Boil the syrup sugar, water and lemon 8 minutes, add the rose water off the heat and chill.',
      'Mix the walnuts, sugar, cinnamon and coconut.',
      'Cook 8 cm pancakes in a dry non-stick pan on one side only, 60 to 90 seconds, until the top is matt and covered in open holes. Do not turn them. Cover with a cloth.',
      'While still warm, put a spoonful of filling on the holed side of each, fold in half, and pinch the seam completely shut from one end to the other.',
      'Check every seam. One gap will empty the parcel into the oil.',
      'Heat the oil to 175°C and fry in batches of five, 3 minutes, turning once, until deep gold.',
      'Lift straight from the oil into the cold syrup for 45 seconds, then drain on a rack and serve warm.'
    ],
    tips: [
      'One side only. A turned pancake will not seal.',
      'Pinch the whole seam and check it. Leaks ruin the oil.',
      'Hot from the fryer into cold syrup.'
    ],
    pair: ['Turkish coffee', 'Karkade', 'Mint tea'],
    store: 'Best within a few hours. Unfilled pancakes keep 2 days refrigerated and freeze for a month.',
    nut: [420, 8, 55, 19, 3, 34, 180]
  },

  'zalabya': {
    d: 'Yeasted batter dropped in spoonfuls into hot oil, fried into irregular golden balls and rolled in syrup or sugar. Sold hot from vats on winter evenings.',
    meta: 'A wet yeasted batter dropped into hot oil in spoonfuls, fried into irregular golden balls and soaked in syrup.',
    kw: ['zalabya', 'egyptian doughnuts', 'zalabya recipe', 'fried dough balls', 'luqaimat egypt'],
    why: 'The batter is far wetter than a dough — closer to a thick pancake batter — and that is what gives the interior its open, almost hollow crumb. Anything stiff enough to roll gives you a dense fried ball. Handle it with two wet spoons and accept that the shapes will be irregular; that is what they look like. The oil at 170°C is deliberately moderate, because these need six minutes to cook through and would burn at frying temperature proper.',
    ing: [
      '300 g plain flour',
      '50 g cornflour',
      '7 g fast-action dried yeast',
      '2 tbsp caster sugar',
      '0.5 tsp fine sea salt',
      '400 ml warm water',
      '# For the syrup',
      '300 g caster sugar',
      '180 ml water',
      '1 tbsp lemon juice',
      '1 tbsp rose water',
      '# To fry',
      '900 ml sunflower oil',
      '# To finish',
      '2 tbsp sesame seeds'
    ],
    st: [
      'Boil the syrup sugar, water and lemon for 8 minutes, stir in the rose water off the heat, and chill.',
      'Whisk the flour, cornflour, yeast, sugar and salt, then whisk in the warm water to a smooth, loose batter about the thickness of double cream.',
      'Cover and leave in a warm place 60 minutes, until the surface is domed and covered in bubbles.',
      'Beat the batter down briefly with a spoon.',
      'Heat the oil to 170°C. Using two wet spoons, drop rough walnut-sized spoonfuls into the oil, six at a time.',
      'Fry 6 to 7 minutes, turning, until deep gold all over and hollow-sounding when tapped against the spoon.',
      'Lift straight into the cold syrup for 40 seconds, then onto a rack. Scatter with sesame seeds and eat hot.'
    ],
    rest: [60, 'proving the batter'],
    tips: [
      'A loose batter, not a dough. Stiff means dense.',
      'Two wet spoons, and accept irregular shapes.',
      'Moderate oil — they need six minutes and would burn hotter.'
    ],
    pair: ['Karkade', 'Turkish coffee', 'Mint tea'],
    store: 'Eat the day they are made. They go soft overnight and do not revive well.',
    nut: [355, 5, 68, 8, 2, 38, 160]
  },

  'kunafa-bil-manga': {
    d: 'Shredded kunafa pastry baked crisp and layered with cream and fresh mango. A modern Cairo dessert, everywhere since about 2015 and unashamedly so.',
    meta: 'Shredded kunafa pastry baked crisp in butter, then layered with thick cream and fresh mango instead of syrup.',
    kw: ['kunafa bil manga', 'mango kunafa', 'kunafa recipe', 'egyptian mango dessert', 'kanafeh mango'],
    why: 'This is the one kunafa that is not drowned in syrup, and the reason is the mango: fresh fruit brings its own sugar and acid, and syrup on top of it is simply too much. So the pastry is baked in butter until genuinely crisp and stays that way, assembled at the last minute. Rub the butter through the shredded pastry with your fingers rather than pouring it over — poured butter soaks the bottom layer and leaves the top dry.',
    ing: [
      '400 g kunafa pastry, shredded, thawed if frozen',
      '180 g butter, melted',
      '# For the cream',
      '400 ml double cream',
      '200 g ricotta',
      '3 tbsp icing sugar',
      '1 tbsp cornflour',
      '1 tsp vanilla extract',
      '# To assemble',
      '3 large ripe mangoes, diced',
      '# To finish',
      '40 g pistachios, chopped',
      '1 mango, puréed'
    ],
    st: [
      'Heat the oven to 190°C / 375°F. Pull the kunafa pastry apart into loose strands in a big bowl.',
      'Pour over the melted butter and rub it through with your fingers for a couple of minutes, until every strand is coated and the pastry looks evenly damp.',
      'Spread it over a large tray and bake 30 minutes, stirring twice, until uniformly deep gold and crisp. Cool completely.',
      'Whisk the cream with the cornflour, then heat gently, stirring, until it thickens — about 4 minutes. Cool, then fold in the ricotta, icing sugar and vanilla and chill.',
      'Layer in glasses or a dish: crisp pastry, then cream, then diced mango.',
      'Repeat the layers, finishing with pastry.',
      'Spoon the mango purée over, scatter with pistachios and serve within the hour, while the pastry is still crisp.'
    ],
    tips: [
      'Rub the butter through by hand. Pouring it soaks the base.',
      'No syrup. The mango is the sweetness.',
      'Assemble at the last minute or the pastry softens.'
    ],
    pair: ['Turkish coffee', 'Karkade', 'Mint tea'],
    store: 'The baked pastry keeps 3 days in a tin and the cream 2 days refrigerated. Assemble fresh.',
    nut: [565, 9, 52, 36, 3, 30, 290]
  },

  'karkade': {
    d: 'Dried hibiscus steeped into a drink the colour of ink and served either scalding or over ice. Sour, tannic and the national soft drink by some distance.',
    meta: 'Dried hibiscus steeped rather than boiled into a deep red, sour infusion, served either scalding hot or over ice.',
    kw: ['karkade', 'hibiscus tea', 'karkade recipe', 'egyptian hibiscus drink', 'red hibiscus tea'],
    why: 'Hibiscus is steeped, never boiled. Boiling extracts the tannins that make it harshly astringent and dulls the colour from clear crimson to brown, so the water comes off the heat before the flowers go in. Fifteen minutes is enough for a full extraction. Sweeten while it is hot regardless of how you plan to serve it, because sugar will not dissolve properly in a cold infusion and you will end up with a gritty layer at the bottom of the jug.',
    ing: [
      '60 g dried hibiscus flowers',
      '1.5 litres water',
      '150 g caster sugar, or to taste',
      '# Optional',
      '4 cloves',
      '1 cinnamon stick',
      '2 tbsp lemon juice',
      '# To serve',
      'Ice',
      'Mint sprigs',
      'Lemon slices'
    ],
    st: [
      'Rinse the dried flowers briefly in cold water to remove dust.',
      'Bring the water to the boil, then take it off the heat completely.',
      'Add the hibiscus, and the cloves and cinnamon if using. Do not return it to the heat.',
      'Steep 15 minutes, no longer. The liquid will be deep crimson and clear.',
      'Strain through a fine sieve, pressing the flowers gently but not squeezing them hard.',
      'Stir in the sugar while it is still hot, until completely dissolved, then taste and adjust.',
      'Serve hot as it is, or cool and chill and pour over ice with lemon and mint.'
    ],
    tips: [
      'Steep off the heat. Boiling makes it bitter and brown.',
      'Fifteen minutes is plenty. Longer is not stronger, only harsher.',
      'Sweeten hot, even if serving cold.'
    ],
    pair: ['Zalabya', 'Om ali', "Ta'ameya"],
    store: 'Refrigerated for 5 days in a sealed jug. The colour holds well.',
    nut: [95, 0, 24, 0, 0, 24, 10]
  },

  'sobia': {
    d: 'A cold white drink of soaked rice and coconut blended with milk and sugar, sold from urns in Ramadan. Cloudy, sweet and faintly gritty in a way that is correct.',
    meta: 'Soaked rice and coconut blended with milk and sugar into a cloudy white Ramadan drink served very cold.',
    kw: ['sobia', 'egyptian sobia', 'sobia recipe', 'coconut rice drink', 'ramadan drink egypt'],
    why: 'The rice is soaked raw and never cooked, which is what gives sobia its particular cloudy body — cooked rice blends to a thin porridge instead. Soak it long enough that a grain crushes easily between finger and thumb, then blend hard and strain once through a coarse sieve rather than a fine one. Straining too finely removes the very slight grittiness that people who grew up with this drink expect and would notice missing.',
    ing: [
      '200 g short-grain rice',
      '100 g desiccated coconut',
      '1.2 litres cold water, for soaking',
      '# To finish',
      '600 ml whole milk, or coconut milk',
      '180 g caster sugar',
      '1 tsp vanilla extract',
      '0.5 tsp ground cinnamon',
      '1 tbsp rose water',
      '# To serve',
      'Ice',
      'Ground cinnamon'
    ],
    st: [
      'Rinse the rice once, then put it in a bowl with the coconut and the cold water and soak at least 480 minutes, or overnight.',
      'The rice is ready when a grain crushes easily between your fingers.',
      'Tip the whole lot, soaking water included, into a blender and blend on high for a full 2 minutes.',
      'Strain through a coarse sieve, pressing the solids to get everything through. Do not use a fine sieve or muslin.',
      'Stir in the milk, sugar, vanilla, cinnamon and rose water until the sugar has completely dissolved.',
      'Chill until very cold, at least 2 hours.',
      'Stir well before pouring — it settles — and serve over ice with a dusting of cinnamon.'
    ],
    rest: [600, 'soaking the rice and chilling'],
    tips: [
      'Raw soaked rice. Cooking it gives a thin, sad drink.',
      'A coarse sieve. Fine straining removes the texture.',
      'It separates on standing — stir before every pour.'
    ],
    pair: ['Qatayef', 'Zalabya', 'Dates'],
    store: 'Refrigerated for 3 days. It separates; stir hard before serving.',
    nut: [305, 5, 52, 9, 2, 34, 60]
  },

  'asab': {
    d: 'Sugarcane juice, pressed and drunk within minutes. Nothing is added and nothing can be — it oxidises so fast that the machine has to be at the counter.',
    meta: 'Fresh-pressed sugarcane juice served immediately over ice with lime, since it browns within about twenty minutes of pressing.',
    kw: ['asab', 'sugarcane juice', 'asab recipe', 'egyptian sugarcane drink', 'fresh cane juice'],
    why: 'Sugarcane juice oxidises visibly within twenty minutes of pressing — it goes from pale green to grey-brown and loses its fresh grassy note entirely — which is why every asab stall in Egypt presses to order in front of you and why bottled versions taste nothing like it. A squeeze of lime slows the browning by acidifying the juice, and serving it over plenty of ice slows it further. There is no way to make this ahead, and no point trying.',
    ing: [
      '2 kg sugarcane sticks, peeled and cut into lengths',
      '# To serve',
      '1 lime, juiced',
      'Plenty of ice',
      'Lime wedges',
      '# If you have no press',
      '400 g peeled sugarcane, chopped small',
      '400 ml cold water'
    ],
    st: [
      'Peel the hard outer skin from the cane with a heavy knife and cut the pale interior into finger-length pieces.',
      'Pass them through a sugarcane press three times, feeding the crushed fibre back through each time — most of the juice comes out on the second and third pass.',
      'Without a press: blitz the chopped cane with the cold water in a powerful blender for 2 minutes, then strain hard through muslin, squeezing the fibre dry.',
      'Strain the juice through a fine sieve to remove fibre.',
      'Add the lime juice immediately — it slows the browning noticeably.',
      'Fill glasses with ice and pour.',
      'Drink within a few minutes. It will start to darken and flatten in about twenty.'
    ],
    tips: [
      'Lime straight away. It buys you time against oxidation.',
      'Press three times — most of the yield is in the later passes.',
      'There is no making this in advance.'
    ],
    pair: ['Hawawshi', "Ta'ameya", 'Hot afternoons'],
    store: 'None. It browns within 20 minutes and is undrinkable by the next day.',
    nut: [180, 0, 45, 0, 0, 43, 20]
  }
};
