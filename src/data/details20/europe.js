'use strict';

/**
 * Volume twenty — central, eastern and northern Europe.
 *
 * Twenty-three, and the pattern is consistent: countries the site covered with
 * three to five recipes apiece, missing the dish everyone actually names when
 * you mention them. Poland had five entries and no pierogi ruskie. Russia had
 * five and no medovik. Hungary had four and no dobos torte. Germany had
 * thirteen and no rouladen and no black forest gateau.
 *
 * The Belgians get two because the country's two best-known dishes — moules
 * marinière and a beef stew made with its own beer — are both absent from most
 * English-language recipe sites under their own names.
 */

module.exports = {
  'placki-ziemniaczane': {
    d: 'Grated potato pancakes fried crisp at the edges and soft in the middle. Forty minutes, and the squeezing is the recipe.',
    meta: 'Polish potato pancakes of grated potato and onion squeezed dry, bound with egg and flour, fried crisp in oil.',
    kw: ['placki ziemniaczane', 'polish potato pancakes', 'potato pancake recipe', 'grated potato fritters', 'placki recipe'],
    why: 'Squeeze the grated potato hard in a cloth and then let the liquid stand for two minutes — a layer of white starch settles at the bottom. Pour the water off and scrape that starch back into the potato. It is the binder, it costs nothing, and it means you need barely any flour, which is what keeps the pancakes light rather than stodgy.',
    ing: [
      '1 kg floury potatoes, peeled',
      '1 onion',
      '2 eggs',
      '3 tbsp plain flour',
      '1.5 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '150 ml vegetable oil, for frying',
      '200 ml soured cream',
      '3 tbsp chopped chives'
    ],
    st: [
      'Grate the potatoes and onion coarsely into a bowl.',
      'Tip into a clean cloth and squeeze as hard as you can over a bowl, until no more liquid comes.',
      'Let the squeezed-out liquid stand 2 minutes; a white starch layer will settle at the bottom.',
      'Pour the water off carefully and scrape the starch back into the potato.',
      'Mix in the eggs, flour, salt and pepper.',
      'Heat 3 tbsp of the oil in a wide frying pan over a medium-high heat.',
      'Drop in heaped tablespoons and flatten each to about 8 cm.',
      'Fry 4 minutes, until the edges are deep brown and lacy.',
      'Turn and fry 3 minutes more, then drain on a rack.',
      'Repeat with the rest, adding oil as needed, and serve hot with soured cream and chives.'
    ],
    tips: [
      'Squeeze hard, then reclaim the starch.',
      'A rack, not paper, or the underside steams soft.',
      'Fry them as you grate — raw potato greys within minutes.'
    ],
    pair: ['Soured cream', 'Apple sauce', 'Goulash'],
    store: 'Best immediately. Re-crisp in a hot oven for 6 minutes.',
    nut: [420, 8, 48, 22, 5, 4, 890]
  },

  'makowiec': {
    d: 'A yeasted roll wound around a thick poppy seed filling, sliced to show the spiral. Poland\'s Christmas cake.',
    meta: 'Polish makowiec of enriched yeast dough rolled around a ground poppy seed, honey and nut filling and baked, then iced.',
    kw: ['makowiec', 'makowiec recipe', 'poppy seed roll', 'polish christmas cake', 'poppy seed filling'],
    why: 'The poppy seeds must be simmered in milk and then ground twice, and the second grind is what people skip. Once-ground seeds stay gritty and the filling tastes of dry seed; ground twice they release their oil and turn into a dark, almost creamy paste. A meat grinder or a strong blender both work, but it needs two passes.',
    ing: [
      '400 g plain flour',
      '60 g caster sugar',
      '2 tsp fast-action yeast',
      '0.75 tsp fine sea salt',
      '150 ml warm milk',
      '2 egg yolks',
      '80 g unsalted butter, softened',
      '300 g poppy seeds',
      '400 ml whole milk, for the filling',
      '120 g caster sugar, for the filling',
      '4 tbsp honey',
      '60 g unsalted butter, for the filling',
      '80 g raisins',
      '60 g chopped walnuts',
      '40 g candied orange peel',
      '2 egg whites',
      '1 egg, beaten, for glazing',
      '120 g icing sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Mix the flour, caster sugar, yeast and salt, then work in the warm milk and egg yolks.',
      'Knead 8 minutes, work in the softened butter, and knead 4 minutes more. Prove 90 minutes.',
      'Simmer the poppy seeds in the filling milk for 25 minutes, then drain thoroughly.',
      'Grind the drained seeds, then grind them a second time — they should turn dark and pasty.',
      'Cook the ground seeds with the filling sugar, honey and butter for 8 minutes, stirring.',
      'Stir in the raisins, walnuts and candied peel and cool completely.',
      'Whisk the egg whites to soft peaks and fold them into the cooled filling.',
      'Roll the dough into a 40 x 30 cm rectangle and spread the filling to within 2 cm of the edges.',
      'Roll up tightly from the long side, tuck the ends under and lay seam-down on a lined tray.',
      'Prove 40 minutes, brush with egg, bake at 180C for 45 minutes, then cool and drizzle with icing sugar mixed with lemon juice.'
    ],
    tips: [
      'Grind the poppy seeds twice.',
      'Cool the filling completely before it meets the dough.',
      'Roll tightly or the spiral has gaps.'
    ],
    pair: ['Strong tea', 'Christmas Eve', 'Compote'],
    store: 'Keeps 5 days wrapped and improves after a day. Freezes 2 months.',
    nut: [545, 13, 62, 28, 6, 34, 240],
    rest: [130, 'proving the dough']
  },

  'stroganoff-sauce': {
    d: 'Mushrooms, mustard and soured cream reduced into a sauce for beef or anything else. Forty minutes and no beef required.',
    meta: 'A Russian stroganoff sauce of mushrooms, onion, paprika, mustard and soured cream, finished off the heat with dill.',
    kw: ['stroganoff sauce', 'stroganoff sauce recipe', 'mushroom soured cream sauce', 'creamy paprika sauce', 'stroganoff without beef'],
    why: 'Soured cream splits at a simmer, so it goes in off the heat and is never allowed to boil after that. Temper it first — stir a couple of ladlefuls of the hot sauce into the cream in a separate bowl and then return the lot — and it stays smooth. Brown the mushrooms in a dry pan before any fat goes in and they concentrate instead of stewing in their own water.',
    ing: [
      '500 g chestnut mushrooms, thickly sliced',
      '50 g unsalted butter',
      '1 tbsp vegetable oil',
      '2 onions, thinly sliced',
      '3 garlic cloves, crushed',
      '2 tsp sweet paprika',
      '1 tbsp Dijon mustard',
      '150 ml white wine',
      '300 ml beef or vegetable stock',
      '200 ml soured cream',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '3 tbsp chopped dill',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat a wide dry pan over a high heat and add the mushrooms with no fat.',
      'Cook 6 minutes without stirring much, until they have given up their water and it has boiled away.',
      'Add the butter and oil and fry the mushrooms 3 minutes more, until browned. Lift out.',
      'Add the onions and cook 8 minutes, until soft and golden.',
      'Stir in the garlic, paprika and mustard and cook 1 minute.',
      'Pour in the wine and reduce by half.',
      'Add the stock and simmer 8 minutes, until reduced by a third.',
      'Return the mushrooms with the salt and pepper.',
      'Take the pan off the heat. Stir 2 ladlefuls of the hot sauce into the soured cream, then pour that back into the pan.',
      'Stir in the dill and lemon juice and serve without reheating.'
    ],
    tips: [
      'Dry pan first so the mushrooms brown rather than stew.',
      'Temper the soured cream and never boil it after.',
      'Lemon at the end lifts the whole thing.'
    ],
    pair: ['Buttered noodles', 'Rice', 'Boiled new potatoes'],
    store: 'Keeps 2 days refrigerated. Reheat gently and never boil.',
    nut: [285, 7, 16, 21, 3, 8, 890]
  },

  'syrniki': {
    d: 'Curd cheese pancakes, crisp outside and almost custardy in the middle, eaten with soured cream and jam.',
    meta: 'Russian syrniki of tvorog curd cheese bound with egg and a little flour, shaped into thick discs and pan-fried.',
    kw: ['syrniki', 'syrniki recipe', 'russian cheese pancakes', 'tvorog pancakes', 'curd cheese fritters'],
    why: 'Drain the curd cheese overnight if it is at all wet — wet tvorog needs more flour to hold together and the extra flour is exactly what turns syrniki into rubbery discs. The rule is as little flour as will let you shape them. Shape them thick, about two centimetres, so the outside crisps while the inside stays soft.',
    ing: [
      '500 g tvorog or dry curd cheese',
      '1 egg',
      '3 tbsp caster sugar',
      '4 tbsp plain flour, plus more for shaping',
      '0.5 tsp fine sea salt',
      '1 tsp vanilla extract',
      '40 g raisins, optional',
      '3 tbsp vegetable oil',
      '30 g unsalted butter',
      '200 ml soured cream',
      '4 tbsp cherry or strawberry jam',
      '1 tbsp icing sugar'
    ],
    st: [
      'Press it through a sieve into a bowl so there are no lumps.',
      'Mix in the egg, sugar, salt, vanilla and raisins.',
      'Add the flour a tablespoon at a time, stopping as soon as the mixture just holds together.',
      'Dust a work surface with flour and roll the mixture into a log.',
      'Cut into 12 pieces and pat each into a thick disc about 2 cm deep.',
      'Heat the oil and butter in a wide pan over a medium heat.',
      'Fry in batches for 4 minutes, until deep golden underneath.',
      'Turn carefully and fry 3 minutes more.',
      'Dust with icing sugar and serve hot with soured cream and jam.'
    ],
    tips: [
      'If you have only wet curd cheese, hang it in muslin overnight before starting.',
      'Drain the cheese and sieve it.',
      'As little flour as you can get away with.',
      'Thick discs, medium heat, patience.'
    ],
    pair: ['Soured cream', 'Cherry jam', 'Black tea'],
    store: 'Best fresh. Keeps 2 days refrigerated; re-crisp in a pan.',
    nut: [345, 18, 32, 16, 1, 18, 620]
  },

  'knedliky': {
    d: 'Bread dumplings steamed in a cloth roll and cut into rounds with thread. What Czech gravy is served over.',
    meta: 'Czech houskové knedlíky of yeasted dough studded with fried bread cubes, boiled as a roll and sliced with thread.',
    kw: ['czech dumplings', 'knedliky recipe', 'houskove knedliky', 'bread dumplings', 'czech bread dumpling'],
    why: 'Cut them with thread, not a knife. A blade compresses the dumpling as it goes through and you get a dense, gummy slice; a length of cotton drawn under and pulled up through leaves the crumb open. The other rule is to prick each roll several times the moment it comes out of the water, or trapped steam collapses it as it cools.',
    ing: [
      '500 g plain flour',
      '1 tsp fine sea salt',
      '2 tsp fast-action yeast',
      '250 ml warm milk',
      '1 egg',
      '3 slices stale white bread, in 1 cm cubes',
      '20 g unsalted butter',
      '1 tbsp fine sea salt, for the water'
    ],
    st: [
      'Fry the bread cubes in the butter for 4 minutes, until golden. Cool.',
      'Mix the flour, salt and yeast, then work in the warm milk and egg to a soft, slightly sticky dough.',
      'Knead 8 minutes, then fold through the fried bread cubes.',
      'Prove covered for 60 minutes, until doubled.',
      'Divide in two and roll each into a log about 20 cm long.',
      'Bring a wide pan of salted water to a gentle boil.',
      'Lower the rolls in and simmer 12 minutes, then turn them over and simmer 10 minutes more.',
      'Lift out and prick each roll 8 times immediately with a skewer, to let the steam out.',
      'Rest 3 minutes.',
      'Slide a length of thread under the roll, cross the ends over the top and pull to cut 1.5 cm slices.'
    ],
    tips: [
      'Thread, never a knife.',
      'Prick them the second they leave the water.',
      'Turn them halfway through the boil or the top stays doughy.'
    ],
    pair: ['Svíčková', 'Goulash', 'Roast pork and sauerkraut'],
    store: 'Keep 2 days refrigerated. Steam slices for 3 minutes to revive.',
    nut: [345, 11, 62, 6, 3, 3, 780],
    rest: [60, 'proving the dough']
  },

  'tafelspitz': {
    d: 'Beef simmered gently in broth with root vegetables and served in it, with apple horseradish alongside. Vienna\'s.',
    meta: 'Austrian tafelspitz of beef rump cap simmered in broth with root vegetables, served in the broth with apple horseradish.',
    kw: ['tafelspitz', 'tafelspitz recipe', 'austrian boiled beef', 'viennese beef broth', 'apple horseradish'],
    why: 'The meat goes into water that is already simmering, not cold water. Started cold, the proteins leach out and you get a superb broth and dull, grey beef — started hot, the outside sets and the meat keeps its flavour, which is the point here since it is the thing being served. Never let it boil after that; a bare shiver for two and a half hours.',
    ing: [
      '1.5 kg beef rump cap or top rump, in one piece',
      '2.5 litres water',
      '2 onions, halved and charred cut-side down in a dry pan',
      '3 carrots, in chunks',
      '0.5 celeriac, in chunks',
      '2 leeks, in thick lengths',
      '1 tbsp black peppercorns',
      '3 bay leaves',
      '1 bunch lovage or parsley',
      '2.5 tsp fine sea salt',
      '2 apples, peeled and grated',
      '4 tbsp grated fresh horseradish',
      '1 tbsp lemon juice',
      '1 tsp caster sugar',
      '3 tbsp chopped chives'
    ],
    st: [
      'Bring the water to a simmer with the peppercorns, bay and 1.5 tsp of the salt.',
      'Lower the beef in — the water should already be at a simmer — and skim for the first 10 minutes.',
      'Add the charred onion halves.',
      'Hold at a bare shiver for 2 hours. Do not let it boil.',
      'Add the carrots, celeriac and leeks and cook 30 minutes more, until the beef is tender to a skewer.',
      'Mix the grated apple with the horseradish, lemon juice, sugar and remaining salt for the sauce.',
      'Lift the beef out and rest it 10 minutes.',
      'Strain some of the broth into bowls and taste it for salt.',
      'Slice the beef across the grain, about 1 cm thick.',
      'Serve the slices in the broth with the vegetables, the apple horseradish alongside, and chives scattered over.'
    ],
    tips: [
      'Into simmering water, not cold.',
      'Never boil — that is the whole discipline.',
      'Char the onion halves first for colour in the broth.'
    ],
    pair: ['Rösti potatoes', 'Chive sauce', 'A Grüner Veltliner'],
    store: 'Keeps 3 days refrigerated in its broth and reheats gently.',
    nut: [545, 58, 18, 26, 4, 10, 1180]
  },

  'moules-mariniere': {
    d: 'Mussels steamed open in white wine, shallot and parsley, in the time it takes to lay the table.',
    meta: 'Belgian moules marinière of mussels steamed with shallots, garlic, white wine, butter and parsley, served with the cooking liquor.',
    kw: ['moules mariniere', 'moules mariniere recipe', 'mussels white wine', 'belgian mussels', 'moules frites'],
    why: 'Cook them in a pan wide enough to hold them no more than three deep and shake rather than stir. Mussels open at slightly different rates, and stirring breaks the ones that opened first while the rest are still shut — shaking redistributes them without damage. Any that stay closed after four minutes should be thrown away, and any open before cooking tapped: if it does not close, discard it.',
    ing: [
      '2 kg live mussels',
      '50 g unsalted butter',
      '4 shallots, finely chopped',
      '4 garlic cloves, finely chopped',
      '2 celery sticks, finely diced',
      '350 ml dry white wine',
      '2 bay leaves',
      '2 sprigs thyme',
      '150 ml double cream',
      '0.5 tsp ground black pepper',
      '40 g flat-leaf parsley, chopped',
      '1 baguette'
    ],
    st: [
      'Scrub the mussels and pull the beards off.',
      'Tap any that are open — if they do not close, throw them away. Discard any with broken shells.',
      'Melt the butter in a very wide pan and cook the shallots, garlic and celery for 5 minutes, without colouring.',
      'Add the wine, bay and thyme and bring to a hard boil for 2 minutes.',
      'Tip the mussels in — they should be no more than three deep — and cover at once.',
      'Steam 4 minutes, shaking the pan twice, until the shells have opened.',
      'Lift the mussels out with a slotted spoon into warm bowls, discarding any that stayed shut.',
      'Boil the liquor hard for 1 minute, then stir in the cream and pepper.',
      'Taste it — it should not need salt.',
      'Pour the liquor over the mussels, scatter the parsley and serve with the baguette.'
    ],
    tips: [
      'A wide pan, three deep at most.',
      'Shake, never stir.',
      'Anything still shut goes in the bin.'
    ],
    pair: ['Frites and mayonnaise', 'A crusty baguette', 'Belgian witbier'],
    store: 'Eat immediately. Cooked mussels do not keep well.',
    nut: [545, 42, 22, 28, 2, 4, 1290]
  },

  'stoofvlees': {
    d: 'Beef braised in dark Belgian ale with a slice of mustard-spread bread stirred in to thicken it. Three hours.',
    meta: 'Flemish beef stew braised in dark Belgian ale with onions, thickened by a slice of mustard-spread bread and sweetened with syrup.',
    kw: ['stoofvlees', 'stoofvlees recipe', 'flemish beef stew', 'carbonnade flamande', 'beef and beer stew'],
    why: 'A slice of bread spread thickly with mustard is laid on top of the stew and left to dissolve into it. It thickens the sauce, and the mustard cuts the sweetness of the beer and the syrup — this is the traditional method and it works better than flour, which dulls the flavour. Use a dark abbey-style ale, not a lager and not a stout: lager is thin, stout is bitter.',
    ing: [
      '1.2 kg braising beef, in 5 cm chunks',
      '2 tsp fine sea salt',
      '1 tsp ground black pepper',
      '3 tbsp plain flour',
      '4 tbsp vegetable oil',
      '3 onions, thickly sliced',
      '500 ml dark Belgian abbey ale',
      '300 ml beef stock',
      '2 tbsp dark brown sugar',
      '2 tbsp cider vinegar',
      '3 bay leaves',
      '4 sprigs thyme',
      '2 slices white bread',
      '3 tbsp Dijon mustard'
    ],
    st: [
      'Season the beef with the salt and pepper and toss it in the flour.',
      'Heat 2 tbsp of the oil in a heavy pan and brown the beef in three batches, 4 minutes a batch. Lift out.',
      'Add the remaining oil and the onions and cook 12 minutes, until deeply golden.',
      'Return the beef with the ale, stock, sugar, vinegar, bay and thyme.',
      'Bring to a simmer, scraping the base.',
      'Spread the bread thickly with the mustard and lay the slices mustard-side down on top of the stew.',
      'Cover and cook on the lowest heat for 2 hours 30 minutes.',
      'Stir once at the halfway point, breaking the bread up into the sauce.',
      'Uncover for the last 20 minutes to thicken.',
      'Fish out the bay and thyme, taste for salt and vinegar, and serve.'
    ],
    tips: [
      'Abbey ale, not lager and not stout.',
      'The mustard bread is the thickener.',
      'Balance it at the end with more vinegar if it is too sweet.'
    ],
    pair: ['Frites', 'Buttered noodles', 'The same beer'],
    store: 'Better the next day. Keeps 4 days refrigerated, freezes 3 months.',
    nut: [685, 52, 32, 34, 4, 12, 1290]
  },

  'stamppot': {
    d: 'Potatoes mashed with kale or endive and a well of gravy in the middle, with sausage laid across. Fifty minutes.',
    meta: 'Dutch stamppot of potatoes boiled with kale and mashed with butter and milk, served with smoked sausage and a well of gravy.',
    kw: ['stamppot', 'stamppot recipe', 'dutch mashed potato kale', 'boerenkool stamppot', 'dutch winter food'],
    why: 'Cook the kale with the potatoes rather than separately. It is not about saving a pan — the potato takes up the kale\'s flavour and colour as they boil together, and stamppot made by folding cooked kale into finished mash is stripey rather than green through. Mash it coarsely too; this is not a purée and the texture should be rough.',
    ing: [
      '1.2 kg floury potatoes, in large chunks',
      '400 g curly kale, stalks removed and shredded',
      '1 tbsp fine sea salt, for the water',
      '100 ml whole milk, warm',
      '80 g unsalted butter',
      '1 tsp fine sea salt',
      '0.5 tsp ground white pepper',
      '0.25 tsp grated nutmeg',
      '2 smoked sausages, about 400 g',
      '200 ml beef gravy, hot',
      '2 tbsp wholegrain mustard'
    ],
    st: [
      'Put the potatoes in a large pan of cold salted water and bring to the boil.',
      'After 8 minutes, pile the shredded kale on top of the potatoes.',
      'Cover and cook 12 minutes more, until the potatoes are completely tender.',
      'Lay the smoked sausages on top of the kale for the last 10 minutes to heat through.',
      'Lift the sausages out and keep them warm.',
      'Drain the pan thoroughly and let it steam dry for 2 minutes.',
      'Add the butter, warm milk, salt, white pepper and nutmeg.',
      'Mash coarsely with a hand masher — leave texture, do not purée.',
      'Pile into bowls and press a deep well into the middle of each.',
      'Pour hot gravy into the well, lay sliced sausage across and serve with mustard.'
    ],
    tips: [
      'Kale in with the potatoes, not cooked separately.',
      'Steam the pan dry before the butter goes in.',
      'Coarse mash, and a real well for the gravy.'
    ],
    pair: ['Rookworst', 'Mustard', 'Dutch beer'],
    store: 'Keeps 3 days refrigerated and fries beautifully as leftovers.',
    nut: [645, 22, 62, 35, 8, 6, 1420]
  },

  'raggmunk': {
    d: 'Thin potato pancakes fried in butter, with bacon and lingonberry. Sweden\'s Thursday, and forty minutes.',
    meta: 'Swedish raggmunk of grated potato in a thin milk and flour batter, fried in butter and served with bacon and lingonberry.',
    kw: ['raggmunk', 'raggmunk recipe', 'swedish potato pancakes', 'potato pancake lingonberry', 'swedish comfort food'],
    why: 'Raggmunk is grated potato bound in a thin crêpe batter, which is what separates it from a rösti or a latke — the batter goes into the potato, not the other way round. Do not squeeze the potato: the starch is part of the binding here. Fry in butter rather than oil, and accept that they brown quickly because of it.',
    ing: [
      '700 g floury potatoes, peeled',
      '100 g plain flour',
      '400 ml whole milk',
      '1 egg',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground white pepper',
      '100 g unsalted butter, for frying',
      '250 g streaky bacon',
      '6 tbsp lingonberry jam',
      '2 tbsp chopped chives'
    ],
    st: [
      'Whisk the flour, milk, egg, salt and white pepper into a thin, lump-free batter and rest 10 minutes.',
      'Fry the bacon in a dry pan until crisp, then keep it warm.',
      'Grate the potatoes coarsely, directly into the batter as you go so they do not discolour.',
      'Do not squeeze them — the starch helps the pancakes hold.',
      'Stir well; the mixture should be loose and pourable.',
      'Melt a knob of butter in a wide frying pan over a medium heat.',
      'Pour in a ladleful and spread it to a thin round about 15 cm across.',
      'Fry 4 minutes, until the underside is deep gold and the edges lacy.',
      'Turn and fry 3 minutes more, adding butter for each pancake.',
      'Serve hot with the bacon, lingonberry jam and chives.'
    ],
    tips: [
      'Grate straight into the batter.',
      'Do not squeeze the potato — this is not a rösti.',
      'Butter, and fresh butter for every pancake.'
    ],
    pair: ['Crisp bacon', 'Lingonberry jam', 'Cold milk'],
    store: 'Best immediately. The batter keeps 1 day refrigerated.',
    nut: [745, 20, 52, 52, 5, 12, 1420]
  },

  'tattie-scones': {
    d: 'Mashed potato and flour rolled thin, cut into triangles and cooked on a dry griddle. Part of a Scottish fry-up.',
    meta: 'Scottish potato scones of leftover mashed potato worked with flour and butter, rolled thin and griddled dry.',
    kw: ['tattie scones', 'tattie scones recipe', 'potato scones', 'scottish potato farls', 'scottish breakfast'],
    why: 'Make them while the mashed potato is still warm and use as little flour as will hold it. Cold mash needs more flour to come together and the extra flour is what makes tattie scones tough and papery — warm potato absorbs it readily and the scones stay soft. Roll them properly thin, about 5 mm, so they cook through in the four minutes a dry griddle gives you.',
    ing: [
      '500 g floury potatoes, peeled and boiled',
      '40 g unsalted butter, melted',
      '1 tsp fine sea salt',
      '0.25 tsp ground white pepper',
      '100 g plain flour, plus more for rolling',
      '1 tbsp unsalted butter, for the griddle'
    ],
    st: [
      'Drain the boiled potatoes and steam them dry in the pan for 2 minutes.',
      'Mash them completely smooth while hot, with no lumps at all.',
      'Beat in the melted butter, salt and white pepper.',
      'Work in the flour a spoonful at a time, stopping the moment it comes together as a soft dough.',
      'Turn onto a floured surface and divide in two.',
      'Roll each half into a round about 20 cm across and 5 mm thick.',
      'Cut each round into 4 triangles.',
      'Heat a dry griddle or heavy frying pan over a medium heat and rub with a little butter.',
      'Cook the triangles 3 minutes a side, until dark brown blisters appear.',
      'Serve hot, or cool and fry in bacon fat the next morning.'
    ],
    tips: [
      'Warm potato and as little flour as possible.',
      'Roll to 5 mm, not thicker.',
      'A dry griddle, barely greased.'
    ],
    pair: ['A full Scottish breakfast', 'Bacon fat', 'Brown sauce'],
    store: 'Keep 3 days refrigerated and fry to reheat. Freeze 2 months.',
    nut: [245, 5, 38, 8, 3, 2, 620]
  },

  'barmbrack': {
    d: 'A tea-soaked fruit loaf with a ring hidden in it, sliced and buttered. Ireland\'s Hallowe\'en cake.',
    meta: 'Irish barmbrack of dried fruit soaked overnight in strong tea and whiskey, folded into a spiced batter and baked as a loaf.',
    kw: ['barmbrack', 'barmbrack recipe', 'irish tea loaf', 'halloween fruit bread', 'tea brack'],
    why: 'Soak the fruit in hot tea overnight and it plumps to the point of bursting, which does two things: the loaf stays moist for days, and the fruit stops stealing moisture from the crumb during baking. Fruit added dry gives you a cake that is stale on the second morning. Use tea strong enough to be undrinkable — it is carrying most of the flavour.',
    ing: [
      '400 g mixed dried fruit',
      '300 ml very strong hot black tea',
      '3 tbsp Irish whiskey',
      '200 g light brown soft sugar',
      '300 g self-raising flour',
      '2 tsp mixed spice',
      '1 tsp ground cinnamon',
      '0.5 tsp fine sea salt',
      '1 egg, beaten',
      '1 orange, zested',
      '2 tbsp marmalade',
      '1 tbsp unsalted butter, for the tin',
      '2 tbsp honey, for glazing'
    ],
    st: [
      'Put the dried fruit in a bowl with the sugar, pour the hot tea and whiskey over and stir.',
      'Cover and leave overnight, at least 8 hours, until the fruit has swelled and most of the liquid has gone.',
      'Heat the oven to 170C and butter and line a 900 g loaf tin.',
      'Stir the beaten egg, orange zest and marmalade into the soaked fruit.',
      'Sift the flour, mixed spice, cinnamon and salt over and fold in until just combined.',
      'Scrape into the tin and level the top.',
      'Bake 60 minutes, until a skewer comes out clean and the top is dark.',
      'Cover loosely with foil after 40 minutes if it is browning too fast.',
      'Brush the hot loaf with honey and leave in the tin for 15 minutes.',
      'Turn out and cool completely before slicing thickly and buttering.'
    ],
    tips: [
      'Overnight soaking, no shortcuts.',
      'Tea strong enough to be undrinkable.',
      'Slice it thick and butter it heavily.'
    ],
    pair: ['Salted butter', 'A pot of tea', 'Hallowe\'en'],
    store: 'Keeps 1 week wrapped and improves for the first three days.',
    nut: [385, 5, 82, 3, 3, 52, 240],
    rest: [480, 'soaking the fruit']
  },

  'dublin-coddle': {
    d: 'Sausages, bacon, potato and onion layered in a pot and cooked slowly in stock until everything gives. Almost no seasoning.',
    meta: 'Dublin coddle of pork sausages, streaky bacon, potatoes and onions layered and slow-cooked in stock with parsley.',
    kw: ['dublin coddle', 'coddle recipe', 'irish sausage stew', 'dublin sausage potato stew', 'irish comfort food'],
    why: 'Brown the sausages and bacon before they go in, even though the traditional recipe does not — the untraditional version is grey and the browning costs six minutes. Everything else stays plain: no herbs beyond parsley, no garlic, no wine. Coddle is meant to taste of pork, potato and onion and nothing else, and cooks who improve it stop making coddle.',
    ing: [
      '8 good pork sausages',
      '250 g streaky bacon, in thick pieces',
      '1 tbsp vegetable oil',
      '3 onions, thickly sliced',
      '1.2 kg waxy potatoes, in thick slices',
      '700 ml chicken or ham stock',
      '1 tsp fine sea salt',
      '1 tsp ground black pepper',
      '3 bay leaves',
      '30 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oil in a heavy pan and brown the sausages all over, about 5 minutes. Lift out.',
      'Fry the bacon pieces for 4 minutes, until the fat runs and the edges colour. Lift out.',
      'Layer half the onion in the base of a casserole, then half the potato.',
      'Lay the sausages and bacon on top, then the remaining onion and potato.',
      'Tuck the bay leaves in and season each layer as you go with the salt and pepper.',
      'Pour the stock in around the edge until it comes about three quarters up.',
      'Bring to a simmer on the hob, then cover and cook on the lowest heat for 90 minutes.',
      'Do not stir at any point.',
      'Uncover for the last 15 minutes so the top layer of potato colours.',
      'Scatter the parsley over and serve straight from the pot with soda bread.'
    ],
    tips: [
      'Brown the meat first, whatever tradition says.',
      'Nothing beyond salt, pepper, bay and parsley.',
      'Do not stir it. Layers are the dish.'
    ],
    pair: ['Soda bread', 'Guinness', 'Butter'],
    store: 'Better the next day. Keeps 3 days refrigerated.',
    nut: [720, 34, 58, 39, 7, 8, 1780]
  },

  'rouladen': {
    d: 'Thin beef rolled around bacon, onion and pickle, browned and braised two hours into its own gravy.',
    meta: 'German rouladen of thin beef slices rolled around mustard, bacon, onion and gherkin, browned and braised in stock and red wine.',
    kw: ['rouladen', 'rouladen recipe', 'german beef rolls', 'beef rouladen gravy', 'german sunday dinner'],
    why: 'Bat the beef out until you can nearly see through it. Thick slices never become tender in two hours — they stay chewy and the roll is too fat to brown evenly. And spread mustard right to the edges before the filling goes on: it seasons the inside of the roll, which otherwise tastes of nothing, and helps the gravy cling.',
    ing: [
      '8 thin slices topside or silverside, about 120 g each',
      '4 tbsp German or Dijon mustard',
      '8 rashers streaky bacon',
      '2 onions, 1 thinly sliced and 1 chopped',
      '4 large gherkins, quartered lengthways',
      '1.5 tsp fine sea salt',
      '1 tsp ground black pepper',
      '3 tbsp vegetable oil',
      '2 carrots, chopped',
      '2 tbsp tomato purée',
      '250 ml red wine',
      '700 ml beef stock',
      '2 bay leaves',
      '2 tbsp cornflour mixed with 4 tbsp cold water',
      '3 tbsp chopped flat-leaf parsley'
    ],
    st: [
      'Bat each slice of beef between sheets of clingfilm until very thin and roughly rectangular.',
      'Season with the salt and pepper and spread mustard right to the edges.',
      'Lay a rasher of bacon on each, then some sliced onion and a strip of gherkin at one short end.',
      'Roll up tightly, tucking the sides in, and secure with a cocktail stick or string.',
      'Heat the oil in a heavy pan and brown the rolls all over, about 8 minutes. Lift out.',
      'Add the chopped onion and carrot and cook 8 minutes.',
      'Stir in the tomato purée, then the wine, and reduce by half.',
      'Return the rolls with the stock and bay leaves, cover, and simmer on the lowest heat for 100 minutes.',
      'Lift the rolls out, remove the sticks, and strain the sauce if you want it smooth.',
      'Thicken with the cornflour slurry, return the rolls to warm through, and scatter the parsley over.'
    ],
    tips: [
      'Bat them genuinely thin.',
      'Mustard to the edges.',
      'Roll tight and secure, or they unwind in the pot.'
    ],
    pair: ['Spätzle', 'Red cabbage', 'Potato dumplings'],
    store: 'Better the next day. Keeps 3 days refrigerated, freezes 3 months.',
    nut: [620, 48, 22, 36, 3, 7, 1420]
  },

  'kartoffelsalat': {
    d: 'Warm potato slices in a bacon, vinegar and stock dressing, with no mayonnaise anywhere near it.',
    meta: 'Southern German potato salad dressed warm with hot stock, cider vinegar, mustard and bacon, with no mayonnaise.',
    kw: ['german potato salad', 'kartoffelsalat recipe', 'warm potato salad', 'bacon vinegar potato salad', 'no mayo potato salad'],
    why: 'Pour hot stock over the warm potato slices and let them stand for ten minutes before anything else goes in. They absorb it, which seasons the potato all the way through instead of coating it — this is the whole distinction from the mayonnaise version. The potatoes must be waxy and sliced while still hot, which means handling them with a cloth.',
    ing: [
      '1 kg waxy potatoes',
      '1 tbsp fine sea salt, for the water',
      '300 ml hot chicken or vegetable stock',
      '4 tbsp cider vinegar',
      '2 tbsp German or Dijon mustard',
      '1 tsp caster sugar',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '200 g streaky bacon, diced',
      '1 onion, finely chopped',
      '4 tbsp vegetable oil',
      '4 spring onions, finely sliced',
      '3 tbsp chopped chives'
    ],
    st: [
      'Boil the potatoes whole in salted water for 22 minutes, until tender.',
      'Drain and peel them while hot, holding them in a cloth.',
      'Slice into 5 mm rounds straight into a wide bowl.',
      'Whisk the hot stock with the vinegar, mustard, sugar, salt and pepper.',
      'Pour it over the warm potato slices and turn gently.',
      'Leave 10 minutes for the potato to absorb the dressing.',
      'Fry the bacon in a dry pan until crisp, then lift out with a slotted spoon.',
      'Fry the onion in the bacon fat with the oil for 5 minutes.',
      'Pour the onion and its fat over the potatoes and fold through with the bacon.',
      'Rest 20 minutes, then fold in the spring onions and chives and serve warm.'
    ],
    tips: [
      'Peel and slice while hot.',
      'Hot stock first, and give it ten minutes to soak in.',
      'Serve warm, never cold from the fridge.'
    ],
    pair: ['Bratwurst', 'Schnitzel', 'A cold Pilsner'],
    store: 'Keeps 2 days refrigerated. Bring back to room temperature before serving.',
    nut: [420, 12, 42, 22, 5, 5, 1180]
  },

  'black-forest-gateau': {
    d: 'Chocolate sponge soaked in kirsch, layered with cherries and cream. The kirsch is not optional and never was.',
    meta: 'German Schwarzwälder Kirschtorte of chocolate sponge soaked in kirsch syrup, layered with morello cherries and whipped cream.',
    kw: ['black forest gateau', 'black forest cake recipe', 'schwarzwalder kirschtorte', 'cherry chocolate cake', 'kirsch cake'],
    why: 'The kirsch is what makes it a Black Forest gateau rather than a chocolate cherry cake — in Germany the name is legally protected and requires it. Soak the sponges generously and let them sit for an hour before assembly; the alcohol needs time to distribute or you get boozy patches and dry patches. Whip the cream to soft peaks only, since it firms further as you spread it.',
    ing: [
      '6 eggs',
      '180 g caster sugar',
      '120 g plain flour',
      '50 g cocoa powder',
      '0.5 tsp baking powder',
      '0.25 tsp fine sea salt',
      '80 g unsalted butter, melted and cooled',
      '680 g jarred morello cherries, drained, juice kept',
      '150 ml kirsch',
      '3 tbsp caster sugar, for the syrup',
      '750 ml double cream, very cold',
      '3 tbsp icing sugar',
      '150 g dark chocolate, for shaving',
      '12 fresh cherries, to finish'
    ],
    st: [
      'Heat the oven to 180C and line two 23 cm tins.',
      'Whisk the eggs and caster sugar for 8 minutes, until pale, tripled and holding a ribbon.',
      'Sift the flour, cocoa, baking powder and salt over and fold in gently in three additions.',
      'Fold in the melted butter, then divide between the tins and bake 22 minutes.',
      'Cool completely, then split each cake horizontally to give 4 layers.',
      'Boil 200 ml of the cherry juice with the syrup sugar for 3 minutes, cool, then stir in the kirsch.',
      'Brush every layer generously with the syrup and leave 1 hour.',
      'Whip the cold cream with the icing sugar to soft peaks.',
      'Stack the layers with cream and drained cherries between each, keeping some cream back.',
      'Cover the top and sides with the remaining cream, press chocolate shavings round the sides, and finish with fresh cherries.'
    ],
    tips: [
      'Kirsch, generously, and an hour to distribute.',
      'Soft peaks — it firms as you spread it.',
      'Split the cakes with a long serrated knife and a steady hand.'
    ],
    pair: ['Strong coffee', 'More kirsch', 'A Sunday afternoon'],
    store: 'Keeps 3 days refrigerated. Bring to room temperature for 30 minutes before serving.',
    nut: [685, 9, 58, 46, 3, 42, 180],
    rest: [60, 'soaking the sponges']
  },

  'obatzda': {
    d: 'Ripe Camembert mashed with butter, paprika and beer into a spread for pretzels. Fifteen minutes and no cooking.',
    meta: 'Bavarian obatzda of ripe Camembert mashed with butter, sweet paprika, onion and a splash of beer, served with pretzels.',
    kw: ['obatzda', 'obatzda recipe', 'bavarian cheese spread', 'camembert spread', 'beer garden cheese'],
    why: 'Use Camembert that is properly ripe — soft to the point of collapse and smelling strongly. Under-ripe cheese stays in rubbery lumps that no amount of mashing fixes, and it is the ripeness that gives obatzda its depth. Mash it with a fork rather than blending: the texture should be uneven, with some pieces still recognisable.',
    ing: [
      '300 g very ripe Camembert',
      '100 g unsalted butter, softened',
      '80 g cream cheese',
      '1 small onion, very finely chopped',
      '2 tsp sweet paprika',
      '0.5 tsp caraway seeds, crushed',
      '0.5 tsp fine sea salt',
      '0.25 tsp ground black pepper',
      '3 tbsp wheat beer',
      '4 spring onions, finely sliced',
      '2 tbsp chopped chives',
      '4 soft pretzels',
      '1 red onion, in rings'
    ],
    st: [
      'Leave the Camembert at room temperature for 1 hour so it softens completely.',
      'Cut it into rough pieces, rind and all, into a bowl.',
      'Add the softened butter and cream cheese.',
      'Mash with a fork for 3 minutes, leaving some pieces of cheese visible.',
      'Work in the chopped onion, paprika, crushed caraway, salt and pepper.',
      'Add the beer a spoonful at a time until it is spreadable but not loose.',
      'Taste and correct the salt and paprika.',
      'Chill 30 minutes to firm slightly.',
      'Pile into a bowl and scatter the spring onions and chives over.',
      'Serve with pretzels and raw red onion rings.'
    ],
    tips: [
      'Properly ripe Camembert, rind included.',
      'Fork, not blender — the texture should be uneven.',
      'Beer a spoonful at a time.'
    ],
    pair: ['Soft pretzels', 'Radishes', 'A cold wheat beer'],
    store: 'Keeps 4 days refrigerated and the flavour deepens.',
    nut: [485, 18, 8, 43, 1, 3, 1180],
    rest: [90, 'softening the cheese and chilling']
  },

  'pierogi-ruskie': {
    d: 'Dumplings filled with potato and curd cheese, boiled and then fried in butter with onions. Poland\'s most-made dish.',
    meta: 'Polish pierogi ruskie of soft dough filled with mashed potato and twaróg curd cheese, boiled then fried in butter with onion.',
    kw: ['pierogi ruskie', 'pierogi recipe', 'polish dumplings', 'potato cheese pierogi', 'homemade pierogi'],
    why: 'The dough is made with hot water rather than cold, which gelatinises some of the starch and makes it far more elastic and forgiving — it rolls thin without springing back and it seals without tearing. Keep it under a bowl the whole time you work, because pierogi dough dries in about four minutes and dry edges will not seal at all.',
    ing: [
      '400 g plain flour',
      '1 tsp fine sea salt',
      '250 ml hot water',
      '2 tbsp vegetable oil',
      '600 g floury potatoes, boiled and mashed',
      '250 g twaróg or dry curd cheese',
      '2 onions, finely chopped',
      '80 g unsalted butter',
      '1.25 tsp fine sea salt, for the filling',
      '0.75 tsp ground black pepper',
      '1 tbsp fine sea salt, for the water',
      '200 ml soured cream',
      '3 tbsp chopped chives'
    ],
    st: [
      'Mix the flour and salt, pour in the hot water and oil, and stir with a spoon until cool enough to handle.',
      'Knead 8 minutes to a smooth, soft dough. Cover with a bowl and rest 30 minutes.',
      'Fry one chopped onion in 30 g of the butter for 8 minutes, until golden.',
      'Mix the mashed potato, curd cheese, fried onion, filling salt and pepper. Cool completely.',
      'Roll the dough thin, about 2 mm, keeping the rest under the bowl.',
      'Cut 8 cm rounds, put a spoonful of filling on each and fold over.',
      'Press the edges firmly and crimp; they must be fully sealed.',
      'Boil in well-salted water in batches for 3 minutes after they float.',
      'Fry the second onion in the remaining butter until deep golden.',
      'Toss the drained pierogi in the onion butter for 2 minutes and serve with soured cream and chives.'
    ],
    tips: [
      'Hot water dough. It changes everything.',
      'Keep the dough under a bowl at all times.',
      'Boil, then fry. Both.'
    ],
    pair: ['Soured cream', 'Fried onions', 'Cold vodka'],
    store: 'Freeze uncooked on a tray for 3 months and boil from frozen, adding 2 minutes.',
    nut: [620, 20, 78, 25, 6, 5, 1290]
  },

  'sernik': {
    d: 'A dense baked cheesecake made with twaróg rather than cream cheese, which makes it drier and more interesting.',
    meta: 'Polish sernik baked cheesecake of twaróg curd cheese, eggs and sugar on a shortcrust base, baked low and cooled in the oven.',
    kw: ['sernik', 'sernik recipe', 'polish cheesecake', 'twarog cheesecake', 'baked curd cheesecake'],
    why: 'Twaróg has to be pressed through a sieve or ground twice — it is grainy in a way cream cheese is not, and lumps that look small in the bowl are unpleasant in the finished cake. Bake it low and slow and then leave it in the switched-off oven with the door ajar for an hour: sudden cooling is what cracks the top, and this one cracks readily.',
    ing: [
      '200 g plain flour',
      '80 g icing sugar',
      '120 g cold butter, diced',
      '1 egg yolk',
      '2 tbsp cold water',
      '1 kg twaróg or dry curd cheese',
      '200 g caster sugar',
      '5 eggs, separated',
      '120 g unsalted butter, softened',
      '3 tbsp cornflour',
      '2 tsp vanilla extract',
      '1 lemon, zested',
      '80 g raisins, optional',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Rub the cold butter into the flour and icing sugar, then bind with the egg yolk and water. Chill 30 minutes.',
      'Press the pastry into the base of a 23 cm springform tin and bake at 180C for 18 minutes. Cool.',
      'Press the twaróg through a sieve twice, or grind it, until completely smooth.',
      'Beat the softened butter with the caster sugar until pale, then beat in the egg yolks one at a time.',
      'Beat in the sieved cheese, cornflour, vanilla, lemon zest and salt.',
      'Whisk the egg whites to soft peaks and fold them in gently in three additions.',
      'Fold in the raisins if using.',
      'Pour onto the cooled base and level the top.',
      'Bake at 160C for 60 minutes, until set at the edge with a slight wobble in the centre.',
      'Turn the oven off, prop the door ajar and leave the cake inside for 1 hour.',
      'Then chill 4 hours before slicing.'
    ],
    tips: [
      'Sieve the twaróg twice.',
      'Low oven, and cool it in the oven with the door ajar.',
      'Four hours in the fridge before it will slice cleanly.'
    ],
    pair: ['Black coffee', 'Stewed plums', 'Whipped cream'],
    store: 'Keeps 4 days refrigerated and is better on the second day.',
    nut: [545, 22, 48, 30, 1, 32, 320],
    rest: [330, 'chilling the base, cooling in the oven and chilling the cake']
  },

  'medovik': {
    d: 'Eight or nine paper-thin honey layers stacked with soured cream, left overnight until the whole thing softens into cake.',
    meta: 'Russian medovik of thin honey biscuit layers stacked with a soured cream and condensed milk frosting and rested overnight.',
    kw: ['medovik', 'medovik recipe', 'russian honey cake', 'honey layer cake', 'soured cream layer cake'],
    why: 'The layers come out of the oven as hard biscuits and that is correct — they are supposed to. The overnight rest is not for flavour but for structure: the moisture in the soured cream frosting migrates into the biscuit and turns the whole stack into something you can cut with a fork. Served the same day it is a stack of biscuits with cream between them.',
    ing: [
      '150 g honey',
      '100 g caster sugar',
      '100 g unsalted butter',
      '2 eggs, beaten',
      '1.5 tsp bicarbonate of soda',
      '480 g plain flour',
      '0.5 tsp fine sea salt',
      '800 ml soured cream, cold',
      '400 g condensed milk',
      '1 tsp vanilla extract',
      '2 tbsp lemon juice',
      '60 g walnuts, finely chopped'
    ],
    st: [
      'Melt the honey, caster sugar and butter in a heatproof bowl over simmering water.',
      'Whisk in the bicarbonate of soda; the mixture will foam up dramatically. Keep whisking 2 minutes.',
      'Take off the heat, cool 5 minutes, then whisk in the beaten eggs.',
      'Fold in the flour and salt to make a soft, sticky dough. Chill 40 minutes.',
      'Divide into 9 pieces and roll each between baking paper into a 22 cm round.',
      'Bake each at 180C for 4 minutes, until golden. Trim to a neat circle while hot and keep the trimmings.',
      'Whisk the cold soured cream with the condensed milk, vanilla and lemon juice to a thick spreadable frosting.',
      'Stack the layers with frosting between each, using about 4 tbsp per layer.',
      'Cover the top and sides with the remaining frosting.',
      'Crush the trimmings with the walnuts and press them over the whole cake, then refrigerate overnight before slicing.'
    ],
    tips: [
      'The layers are meant to be hard. They soften overnight.',
      'Trim while hot; cold layers shatter.',
      'Keep the trimmings — they are the coating.'
    ],
    pair: ['Black tea', 'A long afternoon', 'More soured cream'],
    store: 'Keeps 4 days refrigerated and is best on days two and three.',
    nut: [545, 9, 68, 27, 2, 44, 320],
    rest: [520, 'chilling the dough and soaking overnight']
  },

  'varenyky': {
    d: 'Ukrainian dumplings filled with sour cherries, boiled and served with soured cream and sugar. Sweet, and a main course.',
    meta: 'Ukrainian varenyky filled with sour cherries and sugar, boiled and served with soured cream and the cherry syrup.',
    kw: ['varenyky', 'varenyky recipe', 'ukrainian dumplings', 'cherry varenyky', 'sweet dumplings'],
    why: 'Drain the cherries and toss them with semolina, not flour or cornflour, half an hour before filling. Semolina absorbs the juice they release without going pasty, so the dumplings do not burst in the water — and any juice that does escape thickens rather than clouding the pan. Seal the edges with damp fingers and pinch twice.',
    ing: [
      '400 g plain flour',
      '1 tsp fine sea salt',
      '1 egg',
      '200 ml warm water',
      '2 tbsp vegetable oil',
      '600 g pitted sour cherries, drained, syrup kept',
      '4 tbsp fine semolina',
      '100 g caster sugar',
      '1 tbsp fine sea salt, for the water',
      '250 ml soured cream',
      '3 tbsp caster sugar, to serve',
      '30 g unsalted butter'
    ],
    st: [
      'Mix the flour and salt, then work in the egg, warm water and oil to a soft dough.',
      'Knead 8 minutes until smooth and elastic. Cover and rest 30 minutes.',
      'Toss the drained cherries with the semolina and the 100 g of sugar and leave 30 minutes.',
      'Roll the dough thin, about 2 mm, keeping the rest covered.',
      'Cut 8 cm rounds and put 3 or 4 cherries on each.',
      'Fold over, press the edges together with damp fingers and pinch twice all the way round.',
      'Bring a wide pan of salted water to a gentle boil — not a rolling one, which tears them.',
      'Cook in batches for 4 minutes after they rise to the surface.',
      'Lift out with a slotted spoon and toss gently in the butter.',
      'Serve hot with soured cream, a dusting of sugar and the reserved cherry syrup poured over.'
    ],
    tips: [
      'Semolina with the cherries, half an hour ahead.',
      'A gentle boil, never a rolling one.',
      'Pinch the seal twice.'
    ],
    pair: ['Soured cream', 'Cherry syrup', 'Cold milk'],
    store: 'Freeze uncooked on a tray for 3 months and boil from frozen, adding 2 minutes.',
    nut: [545, 12, 94, 14, 4, 42, 780],
    rest: [60, 'resting the dough and drawing the cherries']
  },

  'dobos-torte': {
    d: 'Five thin sponge layers with chocolate buttercream and a caramel disc on top, cut into wedges before it sets.',
    meta: 'Hungarian dobos torte of five thin sponge layers with chocolate buttercream, topped with a caramel disc scored into wedges.',
    kw: ['dobos torte', 'dobos torte recipe', 'hungarian layer cake', 'caramel topped cake', 'chocolate buttercream torte'],
    why: 'The caramel top must be scored into wedges while it is still liquid enough to cut and firm enough to hold the line — about forty seconds after it is poured, and the window is genuinely that short. Oil the knife first. Left to set solid, it shatters when anyone tries to serve it, which is why so many Dobos tortes arrive with a broken lid.',
    ing: [
      '6 eggs, separated',
      '150 g caster sugar',
      '150 g plain flour',
      '0.25 tsp fine sea salt',
      '1 tsp vanilla extract',
      '200 g dark chocolate, 60 per cent',
      '250 g unsalted butter, softened',
      '150 g icing sugar',
      '4 egg yolks',
      '3 tbsp whole milk',
      '180 g caster sugar, for the caramel',
      '2 tbsp water, for the caramel',
      '1 tbsp vegetable oil, for the knife',
      '80 g hazelnuts, toasted and chopped'
    ],
    st: [
      'Whisk the 6 egg yolks with half the caster sugar until pale, then whisk the whites with the rest to firm peaks.',
      'Fold the whites into the yolks, then sift the flour and salt over and fold in with the vanilla.',
      'Spread into five 22 cm rounds on lined trays and bake at 190C for 7 minutes each, until golden at the edges.',
      'Cool the layers flat.',
      'Melt the chocolate and cool it to just warm.',
      'Beat the 4 egg yolks with the milk over simmering water for 6 minutes, until thick, then cool.',
      'Beat the butter with the icing sugar until very pale, then beat in the cooled yolk mixture and the melted chocolate.',
      'Choose the flattest layer for the top and set it aside. Stack the other four with buttercream between, and coat the sides.',
      'Boil the caramel sugar and water to a deep amber, about 7 minutes, and pour it over the reserved layer.',
      'Wait 40 seconds, then cut it into 12 wedges with an oiled knife, sit the wedges on the cake at an angle and press the hazelnuts round the sides.'
    ],
    tips: [
      'Score the caramel at forty seconds. Oil the knife.',
      'Keep the flattest sponge for the top.',
      'Cool the melted chocolate before it meets the butter.'
    ],
    pair: ['Black coffee', 'A Budapest café', 'Whipped cream'],
    store: 'Keeps 3 days at cool room temperature. Refrigeration makes the caramel weep.',
    nut: [545, 8, 52, 34, 2, 42, 140]
  },

  'pkhali': {
    d: 'Vegetables blanched, squeezed and pounded with walnut, garlic and coriander into small mounds. Georgia\'s table starts with these.',
    meta: 'Georgian pkhali of blanched spinach, beetroot and beans separately pounded with a walnut, garlic, coriander and vinegar paste.',
    kw: ['pkhali', 'pkhali recipe', 'georgian walnut pate', 'spinach pkhali', 'georgian appetiser'],
    why: 'The walnut paste is made once and divided between the vegetables, which is what makes a plate of pkhali read as one dish in three colours. Squeeze the blanched vegetables far harder than feels necessary — anything left wet turns the paste to soup. Blue fenugreek and marigold are the authentic seasonings but ground coriander and a pinch of turmeric get close.',
    ing: [
      '300 g spinach',
      '300 g cooked beetroot',
      '300 g green beans',
      '250 g walnuts',
      '6 garlic cloves',
      '2 tbsp ground coriander',
      '1 tbsp blue fenugreek, or 2 tsp ground fenugreek',
      '0.5 tsp ground turmeric',
      '3 tbsp red wine vinegar',
      '2 tsp fine sea salt',
      '0.5 tsp cayenne pepper',
      '1 onion, roughly chopped',
      '30 g coriander leaves',
      '4 tbsp pomegranate seeds'
    ],
    st: [
      'Blanch the spinach for 40 seconds and the green beans for 5 minutes, in separate batches. Refresh both in cold water.',
      'Squeeze the spinach and beans as dry as you possibly can, then chop each finely and keep separate.',
      'Grate or finely chop the cooked beetroot and squeeze that too.',
      'Blitz the walnuts, garlic, onion, ground coriander, fenugreek, turmeric, vinegar, salt and cayenne to a thick paste.',
      'Add the coriander leaves and pulse until flecked green.',
      'Divide the paste into three equal parts.',
      'Work one part into the spinach, one into the beans and one into the beetroot, in separate bowls.',
      'Taste each and correct the salt and vinegar.',
      'Shape each into small mounds or quenelles with two spoons.',
      'Arrange the three colours on one plate and scatter the pomegranate seeds over.'
    ],
    tips: [
      'One walnut paste, divided three ways.',
      'Squeeze everything much harder than seems reasonable.',
      'Taste and correct each colour separately.'
    ],
    pair: ['Georgian bread', 'Khachapuri', 'A dry amber wine'],
    store: 'Keeps 4 days refrigerated and improves overnight.',
    nut: [385, 11, 18, 32, 6, 8, 890]
  }
};
