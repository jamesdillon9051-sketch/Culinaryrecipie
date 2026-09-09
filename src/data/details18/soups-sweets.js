'use strict';

/**
 * Volume eighteen — Chinese soups, breads, sauces and sweets.
 *
 * Fifteen, and two of them are foundations rather than dishes. Sichuan chilli
 * oil and XO sauce turn up in a dozen recipes across this volume and the jarred
 * versions are a poor substitute for either — chilli oil in particular is a
 * fifteen-minute job whose only difficulty is not letting the oil get too hot.
 *
 * The sweets are the smallest category in Chinese cooking and the most
 * misunderstood. Very little of it is cake. It is soups, jellies, filled
 * glutinous rice and things served in a bowl with a spoon, and most of it is
 * only faintly sweet by Western standards.
 */

module.exports = {
  'west-lake-beef-soup': {
    d: 'A thick clear soup of minced beef and egg white with a great deal of coriander. Hangzhou, and it takes twenty minutes from a standing start.',
    meta: 'A Hangzhou soup of finely minced beef and tofu thickened with cornflour, finished with egg white ribbons and coriander.',
    kw: ['west lake beef soup', 'west lake beef soup recipe', 'chinese thick beef soup', 'hangzhou soup', 'egg white beef soup'],
    why: 'Blanch the minced beef in water and drain it before it goes in the soup. Beef added raw releases scum and grey particles that cloud the whole pot, and this soup is meant to be translucent — restaurant versions are always blanched first. Add the cornflour before the egg white, because the thickened liquid holds the egg in suspension as long ribbons; in thin broth the egg sinks and clumps. And pour the egg white in a thin stream while stirring in one direction only.',
    ing: [
      '250 g finely minced beef',
      '1 tbsp Shaoxing wine',
      '0.5 tsp fine sea salt',
      '# For the soup',
      '1.2 litres beef or chicken stock',
      '200 g silken tofu, in small dice',
      '4 dried shiitake mushrooms, soaked and finely diced',
      '20 g ginger, finely chopped',
      '1 tbsp light soy sauce',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '# To thicken and finish',
      '4 tbsp cornflour, slaked in 6 tbsp cold water',
      '3 egg whites, lightly beaten',
      '1 tsp sesame oil',
      '40 g coriander, chopped',
      '2 spring onions, finely sliced'
    ],
    st: [
      'Mix the minced beef with the wine and the 0.5 tsp salt.',
      'Bring a small pan of water to the boil, add the beef, stir to break it up and blanch 60 seconds. Drain and rinse it.',
      'Bring the stock to a simmer with the ginger, shiitake, soy sauce, salt and white pepper.',
      'Add the blanched beef and the diced tofu and simmer 8 minutes.',
      'Stir in the slaked cornflour and simmer 2 minutes, until the soup is thick enough to coat a spoon.',
      'Turn the heat low and stir the soup in one direction while pouring the beaten egg whites in a thin stream.',
      'Stop stirring and let the ribbons set, 30 seconds.',
      'Add the sesame oil, then stir in the coriander and spring onions off the heat.'
    ],
    tips: [
      'Blanch the beef first or the soup goes cloudy.',
      'Thicken before the egg white goes in, not after.',
      'Pour the egg in a thin stream and stir one way only.'
    ],
    pair: ['Steamed rice', 'A stir-fried vegetable', 'Green tea'],
    store: 'Refrigerated for 2 days. Reheat gently — boiling breaks the thickening.',
    nut: [230, 22, 16, 9, 1, 2, 1290]
  },

  'egg-drop-soup': {
    d: 'Stock thickened lightly and finished with beaten egg poured in a thread so it sets into ribbons. Ten minutes, four ingredients, and easy to do badly.',
    meta: 'A light Chinese soup of seasoned stock with sweetcorn, thickened with cornflour and finished with beaten egg poured in a thin stream.',
    kw: ['egg drop soup', 'egg drop soup recipe', 'chinese egg flower soup', 'sweetcorn egg soup', 'quick chinese soup'],
    why: 'The soup must be barely simmering when the egg goes in — a rolling boil shreds it into fragments and a cold soup lets it sink and cloud. Take the pan almost off the heat, pour the beaten egg in the thinnest stream you can manage from a height, and then stop stirring completely for half a minute so the ribbons set. Thicken the soup slightly first with cornflour, which suspends the egg where it lands rather than letting it drift to the bottom.',
    ing: [
      '1.2 litres chicken or vegetable stock',
      '20 g ginger, sliced',
      '150 g sweetcorn kernels',
      '1 tbsp light soy sauce',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 tsp caster sugar',
      '# To thicken',
      '3 tbsp cornflour, slaked in 5 tbsp cold water',
      '# To finish',
      '3 eggs, lightly beaten',
      '1 tsp sesame oil',
      '4 spring onions, finely sliced',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Bring the stock to a simmer with the ginger and cook 5 minutes, then fish the ginger out.',
      'Add the sweetcorn, soy sauce, salt, white pepper and sugar and simmer 3 minutes.',
      'Stir in the slaked cornflour and simmer 1 minute, until the soup thickens slightly and turns glossy.',
      'Turn the heat right down so the surface is barely moving.',
      'Pour the beaten eggs in the thinnest stream you can, from a height, moving across the pan.',
      'Stop stirring completely and let the ribbons set, 30 seconds.',
      'Stir once gently, add the sesame oil, and scatter with spring onions and coriander.'
    ],
    tips: [
      'Barely simmering, never boiling, when the egg goes in.',
      'Thin stream, from a height, then stop stirring.',
      'Thicken first — it holds the ribbons up.'
    ],
    pair: ['Fried rice', 'Dumplings', 'Anything with chilli'],
    store: 'Refrigerated for 2 days. Reheat gently without boiling.',
    nut: [140, 8, 16, 5, 1, 4, 1090]
  },

  'winter-melon-soup': {
    d: 'Winter melon simmered with pork ribs and dried shrimp until it turns translucent and takes on everything around it. The clear soup Cantonese families make all summer.',
    meta: 'A clear Cantonese soup of winter melon simmered with pork ribs, dried shrimp and dried scallop until the melon turns translucent.',
    kw: ['winter melon soup', 'winter melon soup recipe', 'cantonese clear soup', 'dong gua tang', 'chinese summer soup'],
    why: 'Blanch the pork ribs and then wash the pot before starting properly. Cantonese soups are judged on clarity and the scum released in the first few minutes will cloud the whole thing if it is simmered back in. Add the winter melon in the last twenty minutes only: it is more than ninety-five per cent water, cooks to translucency very quickly, and melon added at the start dissolves entirely and leaves nothing to eat.',
    ing: [
      '600 g pork ribs, chopped into pieces',
      '1 kg winter melon, peeled, seeded and in 3 cm chunks',
      '2 litres water',
      '30 g dried shrimp, rinsed',
      '4 dried scallops, rinsed, optional',
      '6 dried shiitake mushrooms, soaked and halved',
      '30 g ginger, sliced',
      '2 strips dried tangerine peel',
      '20 g goji berries, optional',
      '1.5 tsp fine sea salt',
      '0.5 tsp white pepper',
      '# To finish',
      '3 spring onions, sliced',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Put the ribs in cold water, bring to the boil and blanch 5 minutes. Drain, rinse the ribs and wash out the pot.',
      'Return the ribs to the clean pot with the 2 litres of water, the dried shrimp, scallops, shiitake, ginger and tangerine peel.',
      'Bring to a simmer, skim once, then cook gently, half covered, 40 minutes.',
      'Add the winter melon and the goji berries and simmer 20 minutes more, until the melon is translucent and yields to a spoon.',
      'Season with the salt and white pepper.',
      'Ladle into bowls with a piece of rib and some melon in each, and scatter with spring onion and coriander.'
    ],
    tips: [
      'Blanch the ribs and wash the pot. Clarity is the point.',
      'Melon in for the last twenty minutes only.',
      'Season at the end — the dried seafood brings its own salt.'
    ],
    pair: ['Steamed rice', 'A stir-fried green', 'Steamed fish'],
    store: 'Refrigerated for 3 days. Freezes 2 months, though the melon softens.',
    nut: [230, 22, 10, 12, 2, 5, 1190]
  },

  'lotus-root-rib-soup': {
    d: 'Lotus root and pork ribs simmered for two hours until the root goes floury and pulls into starchy threads when you lift a piece. Wuhan\'s household soup.',
    meta: 'A Hubei soup of pork ribs and lotus root simmered two hours in a clay pot until the root softens and thickens the broth.',
    kw: ['lotus root soup', 'lotus root pork rib soup', 'lian ou tang', 'chinese clay pot soup', 'wuhan lotus root soup'],
    why: 'Use the fat, starchy variety of lotus root — the one with a powdery cut face rather than a glassy one — because only that kind breaks down and gives the soup its body and the characteristic starchy threads. The crisp variety used for stir-frying stays crunchy however long you cook it, which is a different and much less interesting soup. Two hours at a bare simmer, never a boil, or the broth turns cloudy and the ribs go stringy.',
    ing: [
      '800 g pork ribs, chopped into pieces',
      '800 g starchy lotus root, peeled and in large chunks',
      '2.5 litres water',
      '40 g ginger, sliced',
      '4 spring onions, whole',
      '2 tbsp Shaoxing wine',
      '1 tbsp white peppercorns, lightly crushed',
      '2 strips dried tangerine peel, optional',
      '2 tsp fine sea salt',
      '# To finish',
      '3 spring onions, sliced',
      '0.5 tsp white pepper'
    ],
    st: [
      'Put the ribs in cold water, bring to the boil and blanch 5 minutes. Drain, rinse them and wash the pot.',
      'Return the ribs to the clean pot with the water, ginger, whole spring onions, wine, peppercorns and tangerine peel.',
      'Bring to a bare simmer and skim, then cook gently, half covered, 60 minutes.',
      'Add the lotus root chunks and simmer a further 60 minutes, until the root is soft enough to break with a spoon.',
      'The broth should have thickened slightly and the lotus root should pull into fine threads when a piece is lifted.',
      'Add the salt and simmer 5 minutes more.',
      'Serve in deep bowls with white pepper and spring onion over.'
    ],
    tips: [
      'The starchy variety of lotus root, not the crisp one.',
      'A bare simmer for two hours. Boiling clouds it.',
      'The threads when you lift a piece are how you know it is done.'
    ],
    pair: ['Steamed rice', 'A stir-fried vegetable', 'Chilli oil on the side'],
    store: 'Refrigerated for 3 days and better on the second. Freezes 2 months.',
    nut: [340, 26, 26, 15, 4, 3, 1090]
  },

  'mantou': {
    d: 'Plain steamed white buns, smooth as porcelain, eaten instead of rice across northern China. Four ingredients and no oven.',
    meta: 'Northern Chinese steamed bread: a simple yeasted dough rolled and cut into buns, proved and steamed until white, smooth and springy.',
    kw: ['mantou', 'mantou recipe', 'chinese steamed buns', 'steamed white bread', 'plain bao buns'],
    why: 'Roll the dough out and roll it up rather than shaping each bun by hand, because the tight spiral is what gives mantou their dense, layered, faintly chewy crumb rather than the open texture of a bread roll. Knead until the dough is genuinely smooth — ten minutes at least — since any pockmark on the surface will still be there after steaming. And when the time is up, turn the heat off and wait three minutes before lifting the lid: cold air on hot steamed dough makes it wrinkle and collapse.',
    ing: [
      '500 g plain flour',
      '6 g fast-action yeast',
      '40 g caster sugar',
      '0.5 tsp fine sea salt',
      '260 ml warm water',
      '2 tbsp vegetable oil',
      '# For rolling',
      '3 tbsp plain flour, for dusting'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, warm water and oil into a dough and knead 10 minutes, until completely smooth with no pockmarks.',
      'Cover and prove 60 minutes, until doubled.',
      'Knock the dough back and knead it 3 minutes more to drive out every large bubble.',
      'Roll it out on a lightly floured surface into a rectangle about 40 by 25 cm, 1 cm thick.',
      'Roll it up tightly from the long edge into a log, pinching the seam closed.',
      'Cut the log into 12 pieces with a sharp knife and set each on a square of baking paper.',
      'Prove 30 minutes, until light and puffy.',
      'Steam over gently boiling water 20 minutes.',
      'Turn the heat off and wait 3 minutes before lifting the lid slowly.'
    ],
    rest: [90, 'proving the dough twice'],
    tips: [
      'Roll and cut, do not shape by hand. The spiral is the texture.',
      'Knead until there are no pockmarks — they survive steaming.',
      'Wait three minutes before lifting the lid.'
    ],
    pair: ['Braised pork', 'Condensed milk, for dipping', 'Any dish with sauce'],
    store: 'Frozen for 3 months. Re-steam from frozen for 8 minutes.',
    nut: [190, 5, 38, 3, 1, 4, 110]
  },

  'shao-bing': {
    d: 'Layered sesame flatbreads, crisp outside and hollow within, split open and filled with egg or braised meat. Northern breakfast, sold from carts.',
    meta: 'Northern Chinese sesame flatbreads made with a flour and oil roux spread inside the dough for layers, coated in sesame and baked until hollow.',
    kw: ['shao bing', 'shao bing recipe', 'chinese sesame flatbread', 'layered chinese bread', 'northern chinese breakfast bread'],
    why: 'The layers come from you tang — a paste of flour cooked in hot oil — spread inside the rolled dough. Oil alone slides out during shaping and the layers fuse; flour thickens it into a paste that stays put and keeps the leaves separate. The maltose or syrup wash is what makes the sesame stick and gives the deep colour: plain water leaves seeds all over the tray and a pale bread.',
    ing: [
      '# For the dough',
      '400 g plain flour',
      '5 g fast-action yeast',
      '1 tsp fine sea salt',
      '1 tsp caster sugar',
      '250 ml warm water',
      '# For the you tang',
      '60 g plain flour',
      '80 ml vegetable oil',
      '1 tsp fine sea salt',
      '1 tsp five-spice powder',
      '# To finish',
      '2 tbsp maltose or golden syrup, loosened with 2 tbsp hot water',
      '80 g white sesame seeds'
    ],
    st: [
      'Mix the 400 g flour, yeast, salt, sugar and warm water into a soft dough and knead 8 minutes. Cover and prove 60 minutes.',
      'Heat the oil until it just shimmers, take it off the heat and whisk in the 60 g flour, salt and five-spice to a smooth paste. Cool.',
      'Roll the dough into a large rectangle about 3 mm thick.',
      'Spread the cooled paste right across it in a thin even layer.',
      'Roll up tightly from the long edge, then cut into 8 pieces.',
      'Stand each piece on its cut end, press it down and roll it into an oval about 1 cm thick.',
      'Brush the tops with the loosened maltose and press them face down into the sesame seeds.',
      'Set them sesame up on a lined tray and rest 20 minutes.',
      'Bake at 200C fan / 220C / gas 7 for 20 minutes, until deep gold, puffed and hollow-sounding.'
    ],
    rest: [60, 'proving the dough'],
    tips: [
      'Flour cooked into the oil, not oil alone. That is what holds the layers.',
      'Maltose wash so the sesame sticks and the colour deepens.',
      'They should sound hollow when tapped.'
    ],
    pair: ['Soy milk', 'Youtiao tucked inside', 'Braised beef'],
    store: 'In a tin for 2 days. Re-crisp in a hot oven for 5 minutes. Freezes 2 months.',
    nut: [330, 8, 42, 15, 3, 3, 690]
  },

  'chilli-oil': {
    d: 'Hot oil poured over chilli flakes and spices in stages, so the sediment toasts without burning. Fifteen minutes, and it improves everything for a month.',
    meta: 'Sichuan chilli oil: aromatics infused into oil, which is then poured over coarse chilli flakes in three stages at falling temperatures.',
    kw: ['chilli oil', 'sichuan chilli oil recipe', 'chinese chilli oil', 'homemade chili crisp oil', 'la jiao you'],
    why: 'The oil is poured over the chilli in three stages, at three temperatures, and that is the whole technique. The first pour at around 190C toasts and blooms the flakes; the second at 160C extracts the colour; the third at 130C keeps the aroma without cooking it away. One pour at high heat scorches the top layer and leaves the bottom raw, which is exactly what most disappointing homemade chilli oil is. Use coarse flakes, not powder, which burns instantly.',
    ing: [
      '# For the chilli base',
      '80 g coarse Sichuan chilli flakes, or a mix of coarse and medium',
      '2 tbsp white sesame seeds',
      '1.5 tsp fine sea salt',
      '1 tsp caster sugar',
      '# For infusing the oil',
      '500 ml rapeseed or groundnut oil',
      '1 onion, sliced',
      '40 g ginger, sliced',
      '6 spring onions, in lengths',
      '4 star anise',
      '2 cinnamon sticks',
      '2 bay leaves',
      '1 tbsp Sichuan peppercorns',
      '1 tbsp fennel seeds',
      '4 cardamom pods, cracked'
    ],
    st: [
      'Put the chilli flakes, sesame seeds, salt and sugar in a large heatproof bowl and stir.',
      'Heat the oil with the onion, ginger, spring onions and all the whole spices over medium-low heat 15 minutes, until the aromatics are golden and the oil smells strongly of them.',
      'Strain the oil and discard the solids. Return the oil to the pan.',
      'Bring the oil to 190C — a chilli flake dropped in should sizzle vigorously.',
      'Pour a third of the oil over the chilli flakes and stir; it will foam and smell toasty.',
      'Let the oil in the pan drop to about 160C, then pour over another third and stir.',
      'Let it drop again to about 130C and pour over the last third.',
      'Stir well, cool completely, and pour into a clean jar with all the sediment.',
      'Leave 24 hours before using — the colour and flavour deepen overnight.'
    ],
    rest: [1440, 'letting the oil mature before use'],
    tips: [
      'Three pours at three temperatures. One pour scorches the top.',
      'Coarse flakes, never powder.',
      'Keep the sediment. It is most of the flavour.'
    ],
    pair: ['Wontons', 'Cold noodles', 'A fried egg'],
    store: 'In a sealed jar at room temperature for 3 months, or refrigerated for 6.',
    nut: [200, 1, 3, 21, 1, 1, 290]
  },

  'xo-sauce': {
    d: 'Dried scallop and shrimp shredded and fried with chilli, ham and garlic until crisp. Invented in a Hong Kong hotel in the 1980s and named after the brandy grade.',
    meta: 'A Hong Kong relish of dried scallops and shrimp soaked, shredded and slowly fried with chilli, garlic, shallot and cured ham in oil.',
    kw: ['xo sauce', 'xo sauce recipe', 'dried scallop sauce', 'hong kong xo sauce', 'chinese seafood relish'],
    why: 'Everything is fried separately and at a low temperature — this is a forty-minute job at a lazy sizzle, not a stir-fry. The dried seafood must dehydrate again and go crisp in the oil, which is where the texture comes from, and anything rushed at high heat browns outside while staying leathery inside. Shred the soaked scallops by hand along their natural grain rather than chopping, which gives the fine threads that define the sauce.',
    ing: [
      '80 g dried scallops',
      '80 g dried shrimp',
      '150 ml Shaoxing wine, for soaking',
      '# For frying',
      '400 ml vegetable oil',
      '12 shallots, finely chopped',
      '12 garlic cloves, finely chopped',
      '40 g ginger, finely chopped',
      '100 g Jinhua ham or prosciutto, finely diced',
      '6 tbsp coarse dried chilli flakes',
      '4 fresh red chillies, finely chopped',
      '# For seasoning',
      '2 tbsp caster sugar',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp fine sea salt',
      '2 tbsp of the scallop soaking liquid'
    ],
    st: [
      'Soak the dried scallops and shrimp separately in the Shaoxing wine topped up with warm water, 2 hours, until soft. Keep the liquid.',
      'Shred the scallops by hand along their grain into fine threads, and chop the shrimp roughly.',
      'Heat the oil in a wide heavy pan over medium-low heat and fry the shallots 10 minutes, until golden. Lift them out.',
      'Fry the garlic 4 minutes, until pale gold, then lift it out.',
      'Fry the shredded scallop and shrimp together 12 minutes, at a lazy sizzle, until crisp and separated.',
      'Add the ginger and diced ham and cook 5 minutes.',
      'Return the shallots and garlic, add both chillies and fry 5 minutes more.',
      'Add the sugar, soy sauce, oyster sauce, salt and soaking liquid and cook 4 minutes, until the sauce is thick and the oil has separated.',
      'Cool completely and pack into jars with the oil covering the solids.'
    ],
    rest: [120, 'soaking the dried scallops and shrimp'],
    tips: [
      'Low and slow. Forty minutes at a lazy sizzle, not a stir-fry.',
      'Shred the scallops by hand along the grain.',
      'Keep the solids under the oil in the jar.'
    ],
    pair: ['Steamed fish', 'Fried rice', 'Plain noodles'],
    store: 'Refrigerated under its oil for 3 months. Do not freeze.',
    nut: [280, 12, 8, 23, 1, 4, 1090]
  },

  'tangyuan': {
    d: 'Glutinous rice balls with a molten black sesame centre, floated in ginger syrup. Eaten at the lantern festival and at the winter solstice.',
    meta: 'Glutinous rice flour balls filled with a black sesame, sugar and butter paste, boiled and served in a light ginger syrup.',
    kw: ['tangyuan', 'tangyuan recipe', 'black sesame rice balls', 'chinese glutinous rice dessert', 'lantern festival dessert'],
    why: 'Freeze the filling balls before wrapping. The sesame paste is soft at room temperature and impossible to enclose — it smears through the dough and leaks into the water — while frozen balls can be wrapped cleanly and melt back to liquid during boiling. The dough is made with boiling water for part of it, which gelatinises some of the starch and makes it pliable rather than crumbly. Roll each ball smooth with no cracks, or they burst.',
    ing: [
      '# For the filling',
      '120 g black sesame seeds, toasted',
      '80 g caster sugar',
      '80 g butter, softened',
      '0.25 tsp fine sea salt',
      '# For the dough',
      '250 g glutinous rice flour',
      '80 ml boiling water',
      '110 ml cold water',
      '# For the syrup',
      '800 ml water',
      '60 g rock sugar',
      '40 g ginger, sliced',
      '2 pandan leaves or 1 strip tangerine peel, optional'
    ],
    st: [
      'Grind the toasted sesame seeds to a coarse powder, then beat in the sugar, softened butter and salt to a thick paste.',
      'Roll the filling into 20 small balls and freeze them 30 minutes, until firm.',
      'Put the glutinous rice flour in a bowl, pour the boiling water over a third of it and mix quickly with chopsticks.',
      'Add the cold water gradually and knead to a smooth dough with the texture of soft putty. Cover.',
      'Divide the dough into 20 pieces and flatten each into a disc thicker at the centre.',
      'Wrap a frozen filling ball in each and roll smooth between your palms, checking for cracks.',
      'Simmer the syrup ingredients together 10 minutes and keep it hot.',
      'Bring a large pan of water to the boil and drop the tangyuan in, stirring gently so they do not stick.',
      'Boil 4 minutes from the moment they float to the surface.',
      'Lift them into bowls with a slotted spoon and ladle the hot ginger syrup over.'
    ],
    tips: [
      'Freeze the filling balls or they cannot be wrapped.',
      'Boiling water into part of the flour is what makes the dough pliable.',
      'Roll them smooth. Cracks burst in the pan.'
    ],
    pair: ['Ginger syrup', 'Green tea', 'A cold night'],
    store: 'Freeze uncooked on a tray for 2 months and boil from frozen, adding 2 minutes.',
    nut: [420, 7, 56, 19, 3, 24, 130]
  },

  'red-bean-soup': {
    d: 'Adzuki beans cooked to collapse with rock sugar and dried tangerine peel, eaten warm or cold. Barely sweet, and closer to a soup than a pudding.',
    meta: 'A Cantonese sweet soup of adzuki beans simmered until collapsed with rock sugar and dried tangerine peel, served warm or chilled.',
    kw: ['red bean soup', 'hong dou tang recipe', 'adzuki bean dessert', 'chinese sweet soup', 'tangerine peel bean soup'],
    why: 'Sugar goes in at the end, never at the start. Sugar in the cooking water slows the beans down dramatically — it draws water out of them by osmosis — and beans cooked in sweetened liquid can simmer for hours and still be firm. Cook them in plain water until they collapse, then sweeten. Dried tangerine peel is the traditional aromatic and it does more than it looks like it should: soak it and scrape the bitter white pith off the inside first.',
    ing: [
      '300 g dried adzuki beans',
      '2 litres water',
      '2 strips dried tangerine peel',
      '2 pandan leaves, optional',
      '# To sweeten',
      '150 g rock sugar, or to taste',
      '0.25 tsp fine sea salt',
      '# Optional additions',
      '80 g lotus seeds, soaked',
      '4 tbsp coconut milk, to serve'
    ],
    st: [
      'Soak the adzuki beans in cold water 8 hours, then drain and rinse them.',
      'Soak the tangerine peel in warm water 15 minutes, then scrape the white pith off the inside with a spoon.',
      'Put the beans, the 2 litres of water, the tangerine peel and the pandan leaves in a pot and bring to the boil.',
      'Simmer, half covered, 60 minutes.',
      'Add the lotus seeds if using and simmer 30 minutes more, until the beans have collapsed and the liquid has thickened.',
      'Crush some of the beans against the side of the pot to thicken it further.',
      'Only now add the rock sugar and the salt, and simmer 10 minutes until dissolved.',
      'Serve warm, or chill and serve cold with a spoonful of coconut milk.'
    ],
    rest: [480, 'soaking the adzuki beans overnight'],
    tips: [
      'Sugar at the end. Early sugar stops the beans softening.',
      'Scrape the pith from the tangerine peel or it turns bitter.',
      'Crush some of the beans to thicken it.'
    ],
    pair: ['Coconut milk', 'Sesame balls', 'Served cold in summer'],
    store: 'Refrigerated for 5 days and it thickens. Freezes 3 months.',
    nut: [280, 12, 56, 1, 11, 26, 110]
  },

  'mango-pomelo-sago': {
    d: 'Mango purée and sago pearls with pomelo segments stirred through, served very cold. Invented in Hong Kong in the 1980s and now everywhere in Asia.',
    meta: 'A chilled Hong Kong dessert of mango purée and coconut milk with sago pearls and pomelo segments folded through.',
    kw: ['mango pomelo sago', 'mango sago recipe', 'hong kong dessert', 'sago coconut mango', 'chilled asian dessert'],
    why: 'Cook the sago until the pearls are entirely translucent with no white dot at the centre, then rinse them under cold running water until the water runs clear. That rinse removes the loose surface starch that would otherwise make the whole dessert gluey within an hour. Pomelo, not grapefruit — pomelo segments separate into dry, firm beads that stay separate, while grapefruit collapses and releases juice that turns the purée bitter.',
    ing: [
      '100 g small sago or tapioca pearls',
      '1 litre water, for boiling',
      '# For the mango base',
      '700 g ripe mango flesh, from about 3 mangoes',
      '200 ml coconut milk',
      '80 g caster sugar',
      '150 ml water',
      '1 tbsp lime juice',
      '# To fold through',
      '200 g pomelo segments, teased into beads',
      '200 g mango, in 1 cm dice',
      '# To serve',
      '4 tbsp coconut milk',
      'Mint leaves'
    ],
    st: [
      'Bring the litre of water to a rolling boil and rain in the sago, stirring so it does not clump.',
      'Boil 12 minutes, then take the pan off the heat, cover, and leave 10 minutes until every pearl is clear with no white centre.',
      'Drain the sago and rinse it under cold running water until the water runs completely clear. Keep it in cold water.',
      'Blend 500 g of the mango flesh with the coconut milk, sugar, 150 ml water and the lime juice until smooth.',
      'Chill the purée thoroughly, 2 hours.',
      'Drain the sago and fold it into the cold purée with the pomelo beads and the diced mango.',
      'Serve in glasses with a spoonful of coconut milk swirled over and a mint leaf.'
    ],
    rest: [120, 'chilling the mango purée'],
    tips: [
      'No white dot left in the sago pearls.',
      'Rinse the sago until the water runs clear or it goes gluey.',
      'Pomelo, not grapefruit. Grapefruit collapses and turns it bitter.'
    ],
    pair: ['Nothing', 'A very hot day', 'Green tea'],
    store: 'Refrigerated for 2 days, though the sago firms. Do not freeze.',
    nut: [290, 3, 58, 7, 3, 42, 35]
  },

  'eight-treasure-rice': {
    d: 'Glutinous rice packed into a bowl lined with candied fruit around a core of red bean paste, steamed and turned out as a decorated dome.',
    meta: 'A Chinese celebration pudding of sweetened glutinous rice moulded around red bean paste in a bowl lined with dried and candied fruits, steamed and inverted.',
    kw: ['eight treasure rice', 'ba bao fan recipe', 'chinese new year dessert', 'sticky rice pudding chinese', 'red bean rice dome'],
    why: 'Oil the bowl heavily before the fruit goes in, and lay the fruit face down in the pattern you want to see — it comes out inverted, so what touches the bowl ends up on top. Glutinous rice sticks ferociously and a poorly oiled bowl will leave half your design behind. Press the rice firmly but do not compact it into a solid mass; it needs to hold together while still having some give when it is turned out.',
    ing: [
      '400 g glutinous rice',
      '# For dressing the rice',
      '80 g caster sugar',
      '4 tbsp vegetable oil, plus more for the bowl',
      '2 tbsp water',
      '# For the filling',
      '300 g sweetened red bean paste',
      '# For the pattern',
      '80 g candied fruit — cherries, angelica, orange peel',
      '60 g raisins',
      '40 g dried longan or goji berries',
      '40 g lotus seeds, cooked',
      '40 g walnut halves',
      '# For the syrup',
      '200 ml water',
      '60 g caster sugar',
      '1 tbsp cornflour, slaked in 2 tbsp water',
      '1 tsp osmanthus flowers, optional'
    ],
    st: [
      'Soak the glutinous rice in cold water 4 hours, then drain it.',
      'Steam the rice in a lined steamer 25 minutes, until tender.',
      'Turn the hot rice through the sugar, oil and water until glossy and evenly coated.',
      'Oil a 1 litre bowl generously, right up the sides.',
      'Arrange the candied fruit, raisins, longan, lotus seeds and walnuts face down against the bowl in a pattern.',
      'Press half the rice over the fruit in an even layer, right up the sides, without disturbing the pattern.',
      'Pack the red bean paste into the hollow, then cover with the rest of the rice and press level.',
      'Cover with foil and steam 35 minutes.',
      'Simmer the syrup water and sugar together, thicken with the slaked cornflour, and add the osmanthus.',
      'Rest 5 minutes, run a knife round the edge, invert onto a plate and pour the syrup over.'
    ],
    rest: [240, 'soaking the glutinous rice'],
    tips: [
      'Oil the bowl heavily and lay the fruit face down.',
      'Press the rice firmly but do not compact it solid.',
      'Run a knife round the edge before inverting.'
    ],
    pair: ['Green tea', 'Chinese New Year', 'A small bowl each'],
    store: 'Refrigerated for 4 days. Re-steam 20 minutes. Freezes 2 months.',
    nut: [480, 7, 92, 10, 4, 44, 90]
  },

  'sesame-balls': {
    d: 'Hollow glutinous rice balls coated in sesame seeds and fried until they swell to three times their size around a small centre of red bean paste.',
    meta: 'Chinese fried glutinous rice balls filled with red bean paste, rolled in sesame seeds and fried slowly from cold oil so they expand hollow.',
    kw: ['sesame balls', 'jian dui recipe', 'chinese sesame balls', 'fried glutinous rice balls', 'red bean sesame dessert'],
    why: 'Start them in oil that is only moderately warm and bring the heat up slowly, pressing each ball gently against the side of the pan with a slotted spoon as it fries. The gentle pressure and the slow temperature rise are what make them expand hollow; dropped into hot oil they set their skin immediately and stay small and dense. Roll them in sesame seeds over a damp hand so the seeds stick, and press the seeds in firmly or they detach in the oil.',
    ing: [
      '# For the dough',
      '300 g glutinous rice flour',
      '60 g caster sugar',
      '60 g wheat starch or plain flour',
      '80 ml boiling water',
      '160 ml warm water',
      '1 tbsp vegetable oil',
      '# For the filling',
      '250 g sweetened red bean paste',
      '# To coat',
      '150 g white sesame seeds',
      '4 tbsp water, in a shallow dish',
      '# For frying',
      '1 litre vegetable oil'
    ],
    st: [
      'Mix the wheat starch with the boiling water to a paste, then work it into the glutinous rice flour with the sugar.',
      'Add the warm water gradually and the oil, and knead to a smooth dough like soft putty. Cover and rest 20 minutes.',
      'Roll the red bean paste into 24 small balls.',
      'Divide the dough into 24 pieces, flatten each into a disc thicker at the centre, and wrap a paste ball in each.',
      'Roll smooth between your palms, checking carefully for cracks.',
      'Dip each ball briefly in the dish of water, then roll it in the sesame seeds, pressing them in firmly.',
      'Put the oil in a deep pan and add the balls while the oil is still only moderately warm, about 120C.',
      'Fry them gently, bringing the heat up over 10 minutes, turning constantly and pressing each ball against the side of the pan with a slotted spoon.',
      'Once they have swollen and turned golden, raise the heat briefly to crisp them, 2 minutes.',
      'Drain on a rack and cool 5 minutes before eating — the filling is molten.'
    ],
    tips: [
      'Start in moderately warm oil and raise the heat slowly.',
      'Press each ball against the pan as it fries. That is what hollows them.',
      'Wet the surface before the sesame, and press the seeds in hard.'
    ],
    pair: ['Chinese tea', 'Red bean soup', 'Eaten warm'],
    store: 'Best within the hour. Re-crisp leftovers in a hot oven for 5 minutes.',
    nut: [280, 5, 38, 12, 3, 14, 45]
  },

  'almond-tofu': {
    d: 'A set almond cream cut into cubes and floated in syrup with fruit. Not tofu and not really almond — it is apricot kernel, and it tastes of neither.',
    meta: 'A Chinese set dessert of almond milk and dairy milk set with agar into a soft white block, cut into cubes and served in light syrup with fruit.',
    kw: ['almond tofu', 'almond jelly recipe', 'xing ren dou fu', 'chinese almond dessert', 'agar set almond pudding'],
    why: 'Agar has to be boiled, properly, for at least two minutes — unlike gelatine it will not set from a warm dissolve, and an agar jelly that has been heated but not boiled simply stays liquid in the fridge. It also sets at room temperature and sets firm, so pour it into the mould promptly and do not expect the soft wobble of a gelatine dessert. Use almond extract sparingly: a teaspoon in a litre is plenty, and more tastes of marzipan.',
    ing: [
      '# For the jelly',
      '400 ml whole milk',
      '300 ml almond milk',
      '4 g agar agar powder',
      '80 g caster sugar',
      '1 tsp almond extract',
      '0.25 tsp fine sea salt',
      '# For the syrup',
      '300 ml water',
      '60 g caster sugar',
      '2 strips lemon peel',
      '# To serve',
      '300 g mixed fruit — lychees, melon, mandarin segments, berries',
      '2 tbsp goji berries, optional',
      'Mint leaves'
    ],
    st: [
      'Whisk the agar powder into the almond milk while it is cold, so it disperses without lumps.',
      'Add the whole milk, sugar and salt and bring to the boil, whisking.',
      'Boil 2 full minutes, whisking constantly — agar must boil or it will not set.',
      'Take it off the heat, stir in the almond extract, and pour into a shallow dish through a sieve.',
      'Leave to set at room temperature 30 minutes, then refrigerate 2 hours until firm.',
      'Simmer the syrup water, sugar and lemon peel together 5 minutes, then chill it.',
      'Cut the set jelly into 2 cm cubes or diamonds with a wet knife.',
      'Divide between bowls, add the fruit, and pour the cold syrup over.'
    ],
    rest: [120, 'setting the jelly'],
    tips: [
      'Boil the agar for two full minutes. Warm is not enough.',
      'It sets at room temperature, so pour it promptly.',
      'A teaspoon of almond extract, no more.'
    ],
    pair: ['Lychees', 'Green tea', 'A hot evening'],
    store: 'Refrigerated for 4 days, covered. Do not freeze — agar weeps when thawed.',
    nut: [175, 4, 32, 4, 1, 30, 105]
  },

  'hong-kong-egg-waffle': {
    d: 'A sheet of connected batter spheres cooked in a hinged iron, crisp outside and hollow within, torn apart while walking. Hong Kong street food since the 1950s.',
    meta: 'Hong Kong gai daan jai: a custard-scented batter with custard powder and evaporated milk baked in a spherical waffle iron until crisp outside and soft inside.',
    kw: ['hong kong egg waffle', 'egg waffle recipe', 'gai daan jai', 'bubble waffle', 'hong kong street dessert'],
    why: 'Rest the batter for at least an hour, which lets the flour hydrate and gives the smooth, custardy interior the bubbles are meant to have; unrested batter cooks up chewy. The iron has to be genuinely hot and generously oiled on both plates before the batter goes in, and it is flipped almost immediately and repeatedly, which is what forces the batter into the spheres. Tapioca starch in the mix is what keeps the outside crisp rather than going soft within a minute.',
    ing: [
      '200 g plain flour',
      '40 g tapioca starch',
      '40 g custard powder',
      '2 tsp baking powder',
      '0.25 tsp fine sea salt',
      '3 eggs',
      '160 g caster sugar',
      '150 ml evaporated milk',
      '120 ml water',
      '3 tbsp vegetable oil',
      '1 tsp vanilla extract',
      '# For the iron',
      '4 tbsp vegetable oil'
    ],
    st: [
      'Whisk the eggs and sugar together until pale, 2 minutes.',
      'Whisk in the evaporated milk, water, oil and vanilla.',
      'Sift the flour, tapioca starch, custard powder, baking powder and salt over and whisk to a smooth batter the thickness of double cream.',
      'Cover and rest the batter 1 hour at room temperature.',
      'Heat an egg waffle iron until it is properly hot and brush both plates generously with oil.',
      'Pour in enough batter to cover the plate and close the iron immediately.',
      'Flip it over at once, then flip again after 30 seconds, and continue turning every 30 seconds for 4 minutes.',
      'Open it when the waffle is golden and lifts away cleanly.',
      'Lay it on a rack, curved side up, and let it crisp for 1 minute before rolling it into a cone or tearing it apart.'
    ],
    rest: [60, 'resting the batter'],
    tips: [
      'An hour of resting. Unrested batter cooks up chewy.',
      'Oil both plates and flip immediately, then keep turning.',
      'Cool on a rack for a minute — that is when it crisps.'
    ],
    pair: ['Hong Kong milk tea', 'Condensed milk', 'Eaten walking'],
    store: 'None. It is crisp for about five minutes and that is the point.',
    nut: [390, 8, 66, 11, 1, 34, 260]
  }
};
