'use strict';

/**
 * Volume sixty, second part: German herb sauce, game, fish and salads,
 * cabbage rolls and asparagus, breads and tray cakes, the grand tortes,
 * macaroons and almond crescents. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'frankfurter-green-sauce': {
    d: 'Seven fresh herbs blended with soured cream, yoghurt and chopped hard boiled eggs, served cold with boiled potatoes, in 25 minutes.',
    meta: 'Frankfurter grüne Soße, cold herb sauce with soured cream and hard boiled eggs, cooked for 10 minutes. Six servings, ready in 55 minutes.',
    kw: ['frankfurter green sauce', 'frankfurt green herb sauce', 'grune sosse', 'german herb sauce with eggs', 'seven herb sauce with potatoes'],
    why: 'Fresh herbs, soured cream and eggs: no cooking, hardly any seasoning and a sauce so green that it is almost startling. Frankfurter grüne Soße is a cold herb sauce from Frankfurt, made with a mix of seven herbs and eaten with boiled potatoes and hard boiled eggs.\n\nThe classic herbs are borage, chervil, cress, parsley, salad burnet, sorrel and chives, though the mix changes with the season. Outside Hesse you can use parsley, chervil, chives, sorrel, watercress and dill. **Chop the herbs by hand or pulse them briefly**, because a blender turns them to a brown paste that loses colour. Mix them into the soured cream and yoghurt with chopped egg yolk, a little mustard, vinegar and salt.\n\nBoil the eggs for 10 minutes, cool them and chop the whites into the sauce. Chill the sauce for at least 30 minutes so the flavours join. Serve cold with warm boiled potatoes. It keeps for 2 days, though the colour fades, so make it on the day if you can.',
    ing: [
      '100 g mixed fresh herbs, such as parsley, chervil, chives, sorrel and watercress',
      '250 g soured cream',
      '150 g plain yoghurt',
      '4 eggs',
      '1 tbsp sharp mustard',
      '1 tbsp white wine vinegar',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 kg waxy potatoes'
    ],
    st: [
      'Boil the eggs for 10 minutes, cool in cold water and peel.',
      'Chop the herbs finely by hand. Mash 2 of the egg yolks with the mustard and vinegar and stir in the soured cream and yoghurt.',
      'Fold in the herbs, the chopped whites of 2 eggs, the salt and pepper. Chill for 30 minutes.',
      'Boil the potatoes for 20 minutes. Serve the sauce cold with the potatoes and the remaining eggs, halved.'
    ],
    tips: [
      'Chop the herbs by hand to keep the colour.',
      'Chill the sauce before serving.',
      'Use a mix of herbs for the best flavour.'
    ],
    pair: ['Boiled potatoes', 'Boiled eggs', 'Schnitzel', 'Cider'],
    store: 'Keeps for 2 days in the fridge, though the colour fades.',
    nut: [284, 12, 32, 12, 4, 4, 500]
  },

  'wildgulasch': {
    d: 'Venison stewed with onions, red wine, juniper and paprika for 2 hours until tender, served with spaetzle or dumplings.',
    meta: 'Wildgulasch, German venison goulash with red wine, juniper and paprika, cooked for 2 hours. Six servings, ready in 2 hours 30 minutes.',
    kw: ['wildgulasch', 'german venison goulash', 'venison stew with red wine and juniper', 'game goulash', 'wildgulasch recipe'],
    why: 'Does venison need a marinade? Not if you cook it slowly and keep it moist. Wildgulasch is a German game stew of venison with onions, red wine and juniper, and it is a rich, dark dish for autumn when game is in season.\n\nUse shoulder or neck of venison, which are tough cuts that turn tender in a stew, cut into 3 cm cubes. Brown them in batches in lard, because crowding makes them grey. Cook a large amount of sliced onion in the same pot for 15 minutes, until they have almost melted, and add paprika and tomato purée. **Take the pot off the heat before adding the paprika**, because it burns and turns bitter in minutes. Add the wine, stock, juniper and bay.\n\nCover and cook on the lowest heat for 2 hours, until the meat gives way under a fork. Finish with a spoonful of redcurrant jelly and a splash of cream if you like a rounder sauce. Serve with spaetzle, potato dumplings or red cabbage.',
    ing: [
      '1.2 kg venison shoulder, in 3 cm cubes',
      '3 tbsp lard or oil',
      '3 onions, sliced',
      '2 tbsp tomato purée',
      '1 tbsp sweet paprika',
      '300 ml red wine',
      '400 ml beef stock',
      '6 g juniper berries, crushed',
      '2 bay leaves',
      '1 tbsp redcurrant jelly',
      '1 tsp salt'
    ],
    st: [
      'Season the venison and brown it in the lard in batches, 6 minutes each. Lift out.',
      'Cook the onions in the pot for 15 minutes until soft and golden. Stir in the tomato purée and cook for 2 minutes.',
      'Off the heat stir in the paprika, then add the wine, stock, juniper and bay. Return the meat.',
      'Cover and cook on the lowest heat for 2 hours until tender.',
      'Stir in the redcurrant jelly and salt and serve.'
    ],
    tips: [
      'Brown the meat in batches.',
      'Add the paprika off the heat.',
      'Cook on the lowest heat so the meat does not dry.'
    ],
    pair: ['Spaetzle', 'Potato dumplings', 'Red cabbage', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [332, 46, 10, 12, 2, 4, 730]
  },

  'matjes': {
    d: 'Soft salted herring fillets served with apple, red onion and a soured cream dressing, ready in 40 minutes with no cooking.',
    meta: 'Matjes, soft salted herring fillets with apple, red onion and soured cream dressing, ready in 40 minutes. Four servings, no cooking.',
    kw: ['matjes', 'matjes herring', 'matjes with apple and onion', 'german herring in cream sauce', 'matjes recipe'],
    why: 'Most home matjes comes out too salty, and the fix is to rinse the fillets and taste one before serving. Matjes are young, lightly cured herring fillets, soft and mild, sold in tubs in northern European shops, and they are eaten with little more than apple, onion and cream.\n\nIf the fillets feel very salty, soak them in cold milk for 30 minutes, which draws out the salt and leaves the fish silky. Pat them dry. Slice a tart apple thin, with the skin on, and a red onion into rings. **Mix the dressing before you plate the fish**, from soured cream, yoghurt, a squeeze of lemon, dill and a pinch of sugar. Taste it, since the sharpness of the apple and onion changes how much lemon you need.\n\nLay the fillets on a platter, scatter with the apple and onion and spoon over the dressing. Serve at once with boiled potatoes or dark rye bread. The dish is best eaten fresh and cold, on a warm day, and keeps for 1 day in the fridge.',
    ing: [
      '400 g matjes herring fillets',
      '200 ml whole milk, for soaking',
      '1 tart apple, thinly sliced',
      '1 red onion, in thin rings',
      '150 g soured cream',
      '100 g plain yoghurt',
      '1 tbsp lemon juice',
      '2 tbsp chopped dill',
      '1 tsp caster sugar',
      '4 slices dark rye bread'
    ],
    st: [
      'Soak the herring fillets in the milk for 30 minutes if they are very salty. Pat dry.',
      'Mix the soured cream, yoghurt, lemon juice, dill and sugar and taste.',
      'Lay the fillets on a platter and scatter with the apple and onion.',
      'Spoon over the dressing and serve with the rye bread.'
    ],
    tips: [
      'Taste a fillet first and soak if too salty.',
      'Add the apple at the last moment so it stays pale.',
      'Serve very cold.'
    ],
    pair: ['Rye bread', 'Boiled potatoes', 'Cold beer', 'Aquavit'],
    store: 'Keeps for 1 day in the fridge.',
    nut: [456, 22, 38, 24, 2, 19, 1290]
  },

  'fischbrotchen': {
    d: 'A soft roll filled with pickled herring, onion rings and gherkin, the north German harbour sandwich, ready in 15 minutes.',
    meta: 'Fischbrötchen, north German bread roll with pickled herring, onion and gherkin, cooked for 5 minutes. Two servings, ready in 15 minutes.',
    kw: ['fischbrotchen', 'german fish roll', 'herring sandwich german', 'bismarck herring roll', 'north german fish sandwich'],
    why: 'What do you eat on a harbour wall in Hamburg? A Fischbrötchen, a soft white roll filled with fish and eaten from paper. The simplest is pickled herring, with raw onion rings and sliced gherkin, and the contrast of soft bread and tart fish is the whole appeal.\n\nUse a good, soft bread roll with a thin crust and warm it briefly, cut side down in a dry pan for 2 minutes, until the cut surface is crisp. **Spread the remoulade or mayonnaise right to the edge**, to stop the bread going soggy from the fish. Lay a lettuce leaf on it as a barrier, then the herring, drained and patted dry.\n\nFinish with onion rings and gherkin slices and press the roll shut. The roll should be eaten at once, as the juices soak into the bread. Bismarck herring, soused in vinegar, is the classic, though rollmops and matjes also work, and smoked mackerel is a good alternative. Wrap in paper to eat on the move.',
    ing: [
      '2 soft white bread rolls',
      '2 tbsp remoulade or mayonnaise',
      '2 lettuce leaves',
      '4 pickled herring fillets, about 160 g',
      '1/2 red onion, in thin rings',
      '60 g gherkins, sliced',
      '1 tbsp chopped chives'
    ],
    st: [
      'Split the rolls and warm them cut side down in a dry pan for 2 minutes.',
      'Spread both halves with the remoulade right to the edge.',
      'Lay a lettuce leaf on each base and top with the herring, pat dry.',
      'Add the onion, gherkin and chives, close the rolls and press gently.'
    ],
    tips: [
      'Spread the sauce to the edges.',
      'Pat the herring dry before filling.',
      'Eat at once while the bread is crisp.'
    ],
    pair: ['Cold beer', 'Pickles', 'Potato salad'],
    store: 'Best eaten at once.',
    nut: [358, 15, 25, 22, 2, 8, 1470]
  },

  'gurkensalat': {
    d: 'Thinly sliced cucumber in a sweet and sour dressing of soured cream, vinegar and dill, ready in 10 minutes with no cooking.',
    meta: 'Gurkensalat, German cucumber salad with soured cream, vinegar and dill, ready in 10 minutes. Four servings, no cooking.',
    kw: ['gurkensalat', 'german cucumber salad', 'creamy cucumber salad with dill', 'cucumber salad with sour cream', 'gurkensalat recipe'],
    why: 'Most home cucumber salads end up watery, and the fix is to salt the slices first. Gurkensalat is the German cucumber salad, thin slices in a creamy, tangy dressing with dill, and it is served with fried fish, schnitzel or sausages.\n\nSlice the cucumber as thin as you can, with a mandoline if you have one. Toss the slices with salt and leave them in a colander for 10 minutes, until a surprising amount of water has run out. **Press the slices gently with your hands** to squeeze out more, then pat them dry. A salad made from unsalted cucumber turns the dressing thin and pale within minutes.\n\nMix the soured cream with a splash of milk, white wine vinegar, a little sugar and chopped dill and fold in the cucumber. Season with white pepper and taste: it should be sour, sweet and creamy all at once. Serve straight away, or chill for 20 minutes. It keeps only an hour or two before it turns watery again.',
    ing: [
      '2 cucumbers, about 800 g',
      '1 tsp salt',
      '150 g soured cream',
      '2 tbsp whole milk',
      '2 tbsp white wine vinegar',
      '1 tsp caster sugar',
      '3 tbsp chopped dill',
      '1/4 tsp white pepper'
    ],
    st: [
      'Slice the cucumbers very thin. Toss with the salt in a colander and leave for 10 minutes.',
      'Squeeze the slices gently and pat dry.',
      'Mix the soured cream, milk, vinegar, sugar, dill and pepper.',
      'Fold in the cucumber and serve at once.'
    ],
    tips: [
      'Salt and drain the cucumber first.',
      'Slice it as thin as possible.',
      'Serve soon after mixing.'
    ],
    pair: ['Schnitzel', 'Fried fish', 'Boiled potatoes', 'Sausages'],
    store: 'Best fresh. It turns watery after 2 hours.',
    nut: [128, 3, 11, 8, 1, 6, 610]
  },

  'kohlrouladen': {
    d: 'Savoy cabbage leaves wrapped around a minced pork and beef filling, browned and braised in gravy for 70 minutes.',
    meta: 'Kohlrouladen, German cabbage rolls of minced pork and beef braised in gravy, cooked for 70 minutes. Four servings, ready in 1 hour 40 minutes.',
    kw: ['kohlrouladen', 'german cabbage rolls', 'stuffed cabbage rolls in gravy', 'savoy cabbage rolls with mince', 'kohlrouladen recipe'],
    why: 'It looks like a neat green parcel and tastes of caraway and gravy. Kohlrouladen are German cabbage rolls, and the trick is to get the leaves soft enough to roll without tearing, and the parcels tight enough to hold together in the pan.\n\nCut out the core of a whole savoy cabbage and put the head in boiling water for 5 minutes, then peel off the outer leaves as they soften. Trim the thick central rib flat with a knife so the leaf rolls easily. **Roll them seam side down and tie with string**, or secure with a cocktail stick, as they unroll in the braise. The filling is minced pork and beef with onion, a soaked bread roll, egg, caraway and parsley.\n\nBrown the rolls in lard in a wide pan until coloured on all sides. Add stock, a splash of wine and a spoonful of tomato purée and cover. Cook gently for 70 minutes, until the rolls are tender and the sauce has reduced. Thicken with a little cream and serve with boiled potatoes.',
    ing: [
      '1 savoy cabbage, about 1.2 kg',
      '300 g minced pork',
      '300 g minced beef',
      '1 onion, finely chopped',
      '1 slice white bread, 30 g, soaked in milk',
      '1 egg',
      '1 tsp caraway seeds',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '2 tbsp lard or oil',
      '1 tbsp tomato purée',
      '400 ml beef stock',
      '100 ml double cream'
    ],
    st: [
      'Boil the whole cabbage for 5 minutes, then peel off 8 large leaves as they soften. Trim the thick ribs flat.',
      'Mix the pork, beef, onion, squeezed bread, egg, caraway, parsley and salt.',
      'Put a portion of the filling on each leaf, fold in the sides and roll up. Tie with string.',
      'Brown the rolls in the lard in a wide pan for 8 minutes. Stir in the tomato purée and stock.',
      'Cover and cook gently for 70 minutes, turning once. Stir in the cream for the last 5 minutes.'
    ],
    tips: [
      'Trim the thick rib so the leaf rolls.',
      'Tie the rolls so they hold.',
      'Cook gently so the cabbage does not split.'
    ],
    pair: ['Boiled potatoes', 'Mashed potato', 'Mustard'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [599, 36, 26, 39, 8, 12, 1130]
  },

  'spargel-mit-hollandaise': {
    d: 'White asparagus boiled until tender and served with hollandaise sauce, new potatoes and ham, in 30 minutes.',
    meta: 'Spargel mit Hollandaise, German white asparagus with hollandaise sauce, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['spargel mit hollandaise', 'german white asparagus', 'white asparagus with hollandaise', 'asparagus with ham and potatoes', 'spargelzeit recipe'],
    why: 'Most home white asparagus comes out stringy, and the fix is to peel it properly. Spargel mit Hollandaise is the dish of the German spring, when white asparagus is sold at every roadside stall, and the season is short enough that people eat it daily.\n\nPeel each spear from just under the tip to the base, removing all of the thick skin, and cut off the woody end. The peel and ends can be simmered in the water for flavour. **Add salt, sugar and a knob of butter to the water**, which keeps the asparagus sweet and a little glossy. Boil for 12 to 15 minutes, until a spear bends slightly when lifted and a knife slips into the base easily.\n\nFor the hollandaise, whisk egg yolks over a pan of barely simmering water, adding melted butter a little at a time until the sauce is thick, then add lemon juice and salt. Do not let it get too hot, or it scrambles. Serve with boiled new potatoes and thin slices of cured ham.',
    ing: [
      '1 kg white asparagus',
      '1 tsp salt',
      '1 tsp caster sugar',
      '20 g butter, for the water',
      '600 g new potatoes',
      '3 egg yolks',
      '150 g butter, melted',
      '1 tbsp lemon juice',
      '150 g thinly sliced cured ham'
    ],
    st: [
      'Peel the asparagus from just below the tips to the base and cut off the woody ends.',
      'Boil the potatoes in salted water for 20 minutes. Keep warm.',
      'Simmer the asparagus in water with the salt, sugar and 20 g butter for 12 minutes until tender.',
      'Whisk the yolks in a bowl over barely simmering water until thick, then whisk in the melted butter a little at a time. Add the lemon juice and salt.',
      'Serve the asparagus with the sauce, potatoes and ham.'
    ],
    tips: [
      'Peel the asparagus thoroughly.',
      'Add sugar and butter to the cooking water.',
      'Keep the sauce warm, not hot.'
    ],
    pair: ['New potatoes', 'Cured ham', 'Dry white wine'],
    store: 'Best fresh. The sauce does not keep.',
    nut: [592, 21, 37, 40, 9, 7, 1100]
  },

  'bohnensuppe': {
    d: 'A thick German bean soup with smoked bacon, potato and carrot, simmered for 1 hour and finished with vinegar.',
    meta: 'Bohnensuppe, thick German bean soup with smoked bacon, potato and carrot, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['bohnensuppe', 'german bean soup', 'white bean soup with bacon', 'german bean and potato soup', 'bohnensuppe recipe'],
    why: 'Most home bean soups taste flat, and the fix is a splash of vinegar at the end and a ham bone at the start. Bohnensuppe is a German bean soup, thick and smoky, and it is made with tinned or cooked beans so that it comes together in an hour.\n\nFry diced bacon until the fat runs, add onion, carrot, leek and celery and soften them for 8 minutes. Stir in the beans and diced potato and cover with stock. **Crush a ladleful of the beans against the pan** to thicken the soup, since German soups are meant to be thick enough for a spoon to stand up. Simmer for 1 hour, with a bay leaf and a sprig of savory if you have it.\n\nSlice a Bockwurst or Wiener into the soup for the last 5 minutes, and finish with a tablespoon of white wine vinegar and chopped parsley. The soup tastes better the next day. Serve with dark bread and, if you like, a spoonful of soured cream.',
    ing: [
      '100 g smoked bacon, diced',
      '1 onion, chopped',
      '2 carrots, diced',
      '1 leek, sliced',
      '2 celery sticks, diced',
      '800 g tinned white beans, drained',
      '400 g potatoes, diced',
      '1.5 litres stock',
      '1 bay leaf',
      '200 g Bockwurst, sliced',
      '1 tbsp white wine vinegar',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Fry the bacon in a large pot for 5 minutes. Add the onion, carrot, leek and celery and cook for 8 minutes.',
      'Add the beans, potatoes, stock and bay and bring to the boil.',
      'Simmer for 1 hour, crushing a ladleful of the beans against the pan to thicken the soup.',
      'Add the sausage for the last 5 minutes. Stir in the vinegar and parsley.'
    ],
    tips: [
      'Crush some beans to thicken the soup.',
      'Add vinegar at the end.',
      'Reheat with a splash of water.'
    ],
    pair: ['Dark bread', 'Soured cream', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [356, 20, 42, 12, 10, 5, 1850]
  },

  'vollkornbrot': {
    d: 'A dense German wholemeal and rye loaf with sunflower seeds and linseed, risen for 90 minutes and baked for 1 hour.',
    meta: 'Vollkornbrot, dense German wholemeal rye loaf with seeds, baked for 60 minutes. Twelve slices, ready in 1 hour 20 minutes plus rising.',
    kw: ['vollkornbrot', 'german wholemeal bread', 'german rye and seed bread', 'dense seeded bread', 'vollkornbrot recipe'],
    why: 'A slice of this will keep you going for hours, which is why German workers carried it. Vollkornbrot is the dense, dark wholemeal loaf, packed with rye, sunflower seeds and linseed, and it slices thin and tastes of cereal.\n\nThe dough is wet and heavy, so it is mixed with a spoon and poured, not shaped, into a tin. The seeds should be soaked in boiling water for 30 minutes, which softens them and keeps them from drawing moisture out of the loaf. **Let the dough rise in the tin, covered**, for 90 minutes until the top is domed and cracked. Rye does not rise like wheat, and the loaf will only grow by about a third.\n\nBake at 200C for 15 minutes, then turn to 180C and bake for 45 minutes more, until the loaf sounds hollow when tapped on the base. Wrap it in a cloth and leave it overnight before slicing, as the crumb sets as it cools and cutting too soon makes it gummy. Serve with butter, cheese or cold meat.',
    ing: [
      '300 g wholemeal rye flour',
      '200 g wholemeal wheat flour',
      '7 g instant yeast',
      '2 tsp salt',
      '1 tbsp honey',
      '60 g sunflower seeds',
      '40 g linseed',
      '400 ml lukewarm water',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Soak the sunflower seeds and linseed in 100 ml of boiling water for 30 minutes.',
      'Mix the flours, yeast and salt. Add the seeds, honey, oil and lukewarm water and stir to a heavy, wet dough.',
      'Pour into an oiled 1 kg loaf tin, cover and leave to rise for 90 minutes.',
      'Heat the oven to 200C. Bake for 15 minutes, then turn to 180C and bake for 45 minutes.',
      'Cool on a rack and wrap in a cloth. Leave overnight before slicing.'
    ],
    tips: [
      'Soak the seeds first.',
      'Do not expect much rise from a rye dough.',
      'Leave the loaf overnight before cutting.'
    ],
    pair: ['Butter and cheese', 'Cold meats', 'Smoked fish'],
    store: 'Keeps for 5 days wrapped. Freeze sliced for 2 months.',
    rest: [570, 'Soaking, rising and resting'],
    nut: [218, 6, 35, 6, 3, 2, 400]
  },

  'pumpernickel': {
    d: 'A dark, moist, sweet rye bread from coarse rye, treacle and cocoa, baked low for 90 minutes in a covered tin.',
    meta: 'Pumpernickel, dark moist rye bread with treacle and cocoa baked in a covered tin, baked for 90 minutes. Twelve slices, ready in 1 hour 50 minutes.',
    kw: ['pumpernickel', 'german pumpernickel bread', 'dark rye bread with treacle', 'pumpernickel at home', 'pumpernickel recipe'],
    why: 'Flour, water, treacle, cocoa: a short list, and a long bake. The authentic pumpernickel of Westphalia is baked for many hours at a very low heat, which turns the rye almost black and sweet. This home version cuts the time to 90 minutes and uses treacle and cocoa for the colour and sweetness.\n\nUse coarse rye meal if you can find it, or wholemeal rye flour with a little cracked wheat. Mix the dough with a spoon into a sticky batter, with no rise to wait for. **Cover the tin tightly with foil**, because the steam is what keeps the crumb moist and dark. A pan of water on the shelf below helps.\n\nBake at 150C for 90 minutes. A skewer should come out clean. Cool in the tin and wrap the loaf in a cloth for a day before slicing, thin as paper. It should be dense, moist and a little sweet. Serve with smoked salmon, cream cheese or sharp cheese. It keeps well for a week.',
    ing: [
      '400 g wholemeal rye flour',
      '100 g strong white flour',
      '2 tbsp cocoa powder',
      '1 tsp salt',
      '1 tsp baking soda',
      '3 tbsp dark treacle',
      '350 ml warm water',
      '2 tbsp vegetable oil',
      '1 tsp caraway seeds'
    ],
    st: [
      'Heat the oven to 150C. Grease and line a 1 kg loaf tin.',
      'Mix the flours, cocoa, salt, baking soda and caraway.',
      'Stir the treacle into the warm water and oil, then stir into the dry mix to a thick, sticky batter.',
      'Pour into the tin, level and cover tightly with foil.',
      'Bake for 90 minutes until a skewer comes out clean. Cool in the tin and wrap in a cloth overnight.'
    ],
    tips: [
      'Cover the tin tightly to keep the steam in.',
      'Slice very thin.',
      'Leave overnight before cutting.'
    ],
    pair: ['Smoked salmon', 'Cream cheese', 'Sharp cheese', 'Butter'],
    store: 'Keeps for 1 week wrapped. Freeze for 2 months.',
    rest: [480, 'Resting'],
    nut: [183, 4, 35, 3, 2, 3, 310]
  },

  'nussecken': {
    d: 'Triangle shaped bars with a shortbread base, apricot jam and a chewy hazelnut caramel topping dipped in chocolate.',
    meta: 'Nussecken, German hazelnut triangles with a shortbread base and chocolate edges, baked for 25 minutes. Twenty four pieces, ready in 1 hour 5 minutes.',
    kw: ['nussecken', 'german nut triangles', 'hazelnut triangle bars', 'nussecken with chocolate', 'nussecken recipe'],
    why: 'The first sign it is ready is the smell: butter and sugar bubbling together into a deep caramel around a sea of hazelnuts. Nussecken are German nut triangles, a bar cut in two cuts into triangles, and they are one of the most common cakes in German bakeries.\n\nThe base is a shortcrust pressed into a tray and covered with a thin layer of apricot jam. The topping is butter, sugar, cream and vanilla boiled briefly with ground and chopped hazelnuts until it holds together. **Spread the topping while it is warm and sticky**, pressing it evenly to the corners. It sets as it cools and bakes into a chewy, caramelised layer.\n\nBake at 180C for 25 minutes, until golden brown. Cool in the tin, then cut into squares and each square into two triangles. Dip the corners in melted dark chocolate and let them set on a rack. They keep well for a week in a tin, and the flavour is better after two days.',
    ing: [
      '250 g plain flour',
      '100 g caster sugar',
      '125 g cold butter, cubed',
      '1 egg',
      '4 tbsp apricot jam',
      '125 g butter, for the topping',
      '125 g caster sugar, for the topping',
      '4 tbsp double cream',
      '1 tsp vanilla extract',
      '300 g hazelnuts, ground and chopped',
      '100 g dark chocolate, melted'
    ],
    st: [
      'Heat the oven to 180C and line a 30 x 25 cm tin. Rub the cold butter into the flour and 100 g sugar, add the egg and press into the tin.',
      'Warm the jam and spread it over the base.',
      'Melt the topping butter with the sugar, cream and vanilla in a pan, add the hazelnuts and stir for 2 minutes until it holds together.',
      'Spread over the jam and bake for 25 minutes until golden brown. Cool in the tin.',
      'Cut into 12 squares, then each into two triangles. Dip the corners in the chocolate and set on a rack.'
    ],
    tips: [
      'Spread the topping while it is warm.',
      'Cool completely before cutting.',
      'Dip the corners in chocolate for the classic look.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Keeps for 1 week in a tin.',
    nut: [283, 4, 24, 19, 2, 14, 10]
  },

  'spritzgeback': {
    d: 'Buttery piped German biscuits in rings, wreaths and fingers, baked for 12 minutes until pale gold at the edge.',
    meta: 'Spritzgebäck, buttery piped German biscuits, baked for 12 minutes at 180C. Forty biscuits, ready in 37 minutes.',
    kw: ['spritzgeback', 'german piped butter biscuits', 'spritz cookies', 'spritzgebaeck recipe', 'christmas piped biscuits'],
    why: 'Most home spritz biscuits come out lumpy or flat, and the fix is the right softness of dough. Spritzgebäck is made from butter, sugar, egg and flour, squeezed through a piping bag with a star nozzle into rings and S shapes, and it has to be soft enough to pipe but firm enough to hold.\n\nBeat the butter and sugar for a full 5 minutes until pale and fluffy, because the air is what makes them tender. Add the egg and vanilla, then fold in the flour just until combined. **Test one biscuit before you pipe the lot**: if it spreads, add 1 tablespoon of flour, and if the dough is too stiff to pipe, add a teaspoon of milk. Use a strong piping bag, as the dough is stiff.\n\nPipe onto cool trays, as warm trays melt the butter before the biscuits set. Bake at 180C for 12 minutes until the edges are pale gold. Cool on a rack. Dip the ends in melted chocolate if you like. They keep for 3 weeks in a tin, and make good Christmas gifts.',
    ing: [
      '250 g butter, softened',
      '150 g caster sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '350 g plain flour',
      '1 pinch salt',
      '100 g dark chocolate, melted'
    ],
    st: [
      'Heat the oven to 180C and line two cool trays.',
      'Beat the butter and sugar for 5 minutes until pale and fluffy. Beat in the egg and vanilla.',
      'Fold in the flour and salt until just combined.',
      'Spoon into a piping bag with a large star nozzle and pipe rings or short fingers onto the trays.',
      'Bake for 12 minutes until pale gold at the edges. Cool on a rack and dip the ends in the chocolate.'
    ],
    tips: [
      'Beat the butter and sugar until fluffy.',
      'Pipe onto cool trays.',
      'Test one biscuit before piping the batch.'
    ],
    pair: ['Coffee', 'Tea', 'Mulled wine'],
    store: 'Keeps for 3 weeks in a tin.',
    nut: [106, 1, 12, 6, 0, 5, 10]
  },

  'butterkuchen': {
    d: 'A flat yeast cake dotted with butter, sugar and flaked almonds, risen for 1 hour and baked for 25 minutes until golden.',
    meta: 'Butterkuchen, flat German yeast cake with a butter, sugar and almond topping, baked for 25 minutes. Twelve servings, ready in 50 minutes plus rising.',
    kw: ['butterkuchen', 'german butter cake', 'yeast butter cake with almonds', 'flat butter cake', 'butterkuchen recipe'],
    why: 'Most home butter cakes come out dry, and the fix is to press in the butter with your fingertips and use plenty of it. Butterkuchen is the flat, golden German cake with a sweet, buttery top, and the dimples left by your fingers hold pools of melted butter and sugar.\n\nThe dough is a soft yeast dough, risen once in the bowl and once in the tin, which gives a light, open crumb. Press it into a lined tray and make deep dimples all over with your fingers. **Dot cold butter into the dimples** in generous lumps, then scatter with sugar and flaked almonds. As it bakes, the butter melts into the dough and the sugar caramelises into a crisp, sticky layer.\n\nBake at 200C for 25 minutes, until deep gold with brown spots at the edges. Brush the surface with a little cream as it comes out for extra gloss. Cut into squares while still warm. It is best the day it is made, with coffee in the afternoon.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '80 g caster sugar',
      '1 tsp salt',
      '250 ml lukewarm milk',
      '1 egg',
      '60 g butter, softened',
      '120 g cold butter, for the topping',
      '100 g caster sugar, for the topping',
      '60 g flaked almonds',
      '2 tbsp double cream'
    ],
    st: [
      'Mix the flour, yeast, 80 g sugar, salt, milk, egg and softened butter and knead for 8 minutes. Leave to rise for 1 hour.',
      'Press the dough into a lined 30 x 40 cm tin. Make deep dimples with your fingers.',
      'Heat the oven to 200C. Dot the dimples with the cold butter, sprinkle with the 100 g sugar and the almonds.',
      'Bake for 25 minutes until deep golden.',
      'Brush with the cream and cut into squares while warm.'
    ],
    tips: [
      'Press deep dimples for the butter.',
      'Use cold butter on top.',
      'Eat it the day it is made.'
    ],
    pair: ['Coffee', 'Tea', 'Whipped cream'],
    store: 'Best the day it is made.',
    rest: [60, 'Rising'],
    nut: [377, 7, 49, 17, 2, 17, 210]
  },

  'zwiebelkuchen': {
    d: 'A savoury yeast tart of slowly cooked onions, bacon, soured cream and caraway, risen for 1 hour and baked for 40 minutes.',
    meta: 'Zwiebelkuchen, German onion tart with bacon, soured cream and caraway on a yeast base, baked for 40 minutes. Eight servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['zwiebelkuchen', 'german onion tart', 'onion and bacon tart', 'zwiebelkuchen recipe', 'onion cake with caraway'],
    why: 'Compare it with a quiche and you will find a softer base and a sweeter filling. Zwiebelkuchen is the German onion tart, baked on a yeast dough rather than pastry, and it is traditionally eaten in autumn with new wine.\n\nCook the onions slowly in butter for 25 minutes until they are completely soft but not brown. They should be sweet and golden, not caramelised. **Do not hurry the onions**, since raw or crunchy onion spoils the tart. Cool them, then mix with bacon, soured cream, eggs, caraway seeds, salt and pepper.\n\nPress the risen yeast dough into a lined tray and spread the filling over it, leaving a rim. Bake at 200C for 40 minutes, until the edges are golden and the filling is set. The top should be pale gold with a few brown spots. Serve warm or at room temperature, cut into squares. It reheats well and is good with a green salad and a glass of white wine.',
    ing: [
      '300 g plain flour',
      '7 g instant yeast',
      '1/2 tsp salt',
      '150 ml lukewarm water',
      '2 tbsp olive oil',
      '1 kg onions, thinly sliced',
      '40 g butter',
      '150 g smoked bacon, diced',
      '200 g soured cream',
      '3 eggs',
      '1 tsp caraway seeds',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Mix the flour, yeast, 1/2 tsp salt, water and oil and knead for 8 minutes. Cover and leave to rise for 1 hour.',
      'Cook the onions in the butter over low heat for 25 minutes until completely soft. Fry the bacon until crisp. Cool both.',
      'Heat the oven to 200C. Mix the onions, bacon, soured cream, eggs, caraway, 1 tsp salt and pepper.',
      'Press the dough into a lined 30 x 40 cm tray with a rim. Spread the filling over.',
      'Bake for 40 minutes until golden and set.'
    ],
    tips: [
      'Cook the onions slowly until soft.',
      'Cool the filling before spreading.',
      'Serve with new wine or a dry white.'
    ],
    pair: ['Green salad', 'Dry white wine', 'New wine'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    rest: [60, 'Rising'],
    nut: [369, 12, 42, 17, 4, 7, 760]
  },

  'apfelkuchen-blech': {
    d: 'A tray bake of sponge batter packed with sliced apples and baked for 45 minutes at 180C, sprinkled with sugar and cinnamon.',
    meta: 'Apfelkuchen vom Blech, German apple tray bake with a soft sponge base, baked for 45 minutes. Sixteen servings, ready in 1 hour 10 minutes.',
    kw: ['apfelkuchen blech', 'german apple tray bake', 'apple sheet cake', 'apfelkuchen vom blech', 'german apple cake for a crowd'],
    why: 'Does an apple cake need a pastry case? Not when the batter is soft enough to hold the fruit. Apfelkuchen vom Blech is a German sheet cake that feeds sixteen, a simple sponge mixed in one bowl and covered with rows of apple slices that sink in as it bakes.\n\nUse firm, slightly tart apples, which keep their shape. Peel and quarter them, then slice each quarter thinly across the curve, or score the rounded side in a criss cross pattern. **Press the slices into the batter at an angle, in tight rows**, so they overlap and cover the surface. The batter rises around them in the oven and holds them in place.\n\nBake at 180C for 45 minutes until the sponge springs back and the apples are golden. While it is still warm, brush with warm apricot jam for gloss and sprinkle with cinnamon sugar. Cut into squares when cool. Serve with whipped cream or vanilla sauce, or alone with coffee.',
    ing: [
      '250 g butter, softened',
      '250 g caster sugar',
      '5 eggs',
      '300 g plain flour',
      '2 tsp baking powder',
      '100 ml milk',
      '1 tsp vanilla extract',
      '1 lemon, zest',
      '1.2 kg tart apples, peeled and sliced',
      '3 tbsp apricot jam',
      '2 tbsp caster sugar mixed with 1 tsp cinnamon'
    ],
    st: [
      'Heat the oven to 180C and line a 30 x 40 cm tin.',
      'Beat the butter and 250 g sugar for 5 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, baking powder, milk, vanilla and zest. Spread in the tin.',
      'Press the apple slices into the batter in tight overlapping rows.',
      'Bake for 45 minutes until golden and springy.',
      'Warm the jam and brush over the cake. Sprinkle with the cinnamon sugar. Cool and cut into squares.'
    ],
    tips: [
      'Use firm tart apples.',
      'Press the slices in at an angle.',
      'Brush with jam while warm for a glaze.'
    ],
    pair: ['Whipped cream', 'Vanilla sauce', 'Coffee'],
    store: 'Keeps for 3 days in a tin. Freeze for 2 months.',
    nut: [331, 4, 45, 15, 2, 27, 90]
  },

  'mohnkuchen': {
    d: 'A moist poppy seed cake with a vanilla and milk filling, baked for 50 minutes on a sweet pastry base.',
    meta: 'Mohnkuchen, moist German poppy seed cake with a sweet pastry base, baked for 50 minutes at 180C. Twelve servings, ready in 1 hour 20 minutes.',
    kw: ['mohnkuchen', 'german poppy seed cake', 'poppy seed filling cake', 'mohnkuchen recipe', 'poppy seed tray cake'],
    why: 'It looks like a plain pale cake and cuts to show a thick, dark, damp layer of poppy seeds. Mohnkuchen is the German poppy seed cake, with a sweet pastry base, a filling made from ground poppy seeds simmered in milk, and sometimes a streusel on top.\n\nGrind the seeds first, in a coffee grinder or a poppy seed mill, because whole seeds will not release their flavour. Simmer the ground seeds in milk with sugar, semolina and butter for 5 minutes, until thick, and cool the filling. **Stir in the beaten egg whites at the end**, to lighten the filling so it does not set like a brick. Add lemon zest and a splash of rum.\n\nLine a tin with the pastry, spoon in the filling and bake at 180C for 50 minutes, until the top is firm and the pastry golden. Cool in the tin and dust with icing sugar. The cake is moist, dark and slightly sweet, with a faint bitter note, and it keeps for 4 days. Serve it with coffee or a sweet wine.',
    ing: [
      '250 g plain flour',
      '100 g cold butter, cubed',
      '80 g caster sugar',
      '1 egg',
      '250 g poppy seeds, ground',
      '400 ml whole milk',
      '100 g caster sugar, for the filling',
      '40 g semolina',
      '30 g butter',
      '3 eggs, separated',
      '1 lemon, zest',
      '1 tbsp rum',
      '1 tbsp icing sugar'
    ],
    st: [
      'Rub the 100 g butter into the flour and 80 g sugar, add the egg and press into a dough. Chill for 20 minutes.',
      'Heat the oven to 180C. Simmer the ground poppy seeds, milk, 100 g sugar, semolina and 30 g butter for 5 minutes until thick. Cool for 20 minutes.',
      'Stir in the yolks, lemon zest and rum. Whisk the whites to stiff peaks and fold in.',
      'Line a 26 cm tin with the pastry. Spoon in the filling.',
      'Bake for 50 minutes until firm. Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Grind the poppy seeds for the best flavour.',
      'Cool the filling before folding in the whites.',
      'Cool the cake in the tin.'
    ],
    pair: ['Coffee', 'Whipped cream', 'Dessert wine'],
    store: 'Keeps for 4 days in a tin.',
    nut: [388, 10, 42, 20, 5, 19, 40]
  },

  'hefezopf': {
    d: 'A sweet braided yeast loaf glazed with egg and sprinkled with pearl sugar, risen twice and baked for 30 minutes.',
    meta: 'Hefezopf, sweet German braided yeast bread with pearl sugar, baked for 30 minutes at 180C. Ten servings, ready in 1 hour 10 minutes plus rising.',
    kw: ['hefezopf', 'german braided yeast bread', 'sweet braided bread', 'hefezopf recipe', 'german sweet bread loaf'],
    why: 'Compare it with a plain white loaf and you will find a richer, softer crumb, a shiny gold crust and a faint sweetness. Hefezopf is a German braided yeast loaf, eaten at weekends and on Easter morning with butter and jam.\n\nThe dough is enriched with eggs, butter, milk and sugar and flavoured with lemon zest and vanilla. Knead it until it is smooth and elastic, about 10 minutes, then leave it for 1 hour to double. **Roll the three strands to the same length and thickness**, so the braid is even. Pinch the ends together and tuck them under, as untucked ends pop open in the oven.\n\nLeave the shaped loaf for 45 minutes until puffy, brush with beaten egg and milk and scatter with pearl sugar or flaked almonds. Bake at 180C for 30 minutes, until deep gold and hollow sounding when tapped underneath. Cool on a rack. It is best on the day it is baked and makes excellent toast the next day.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '70 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '2 eggs',
      '80 g butter, softened',
      '1 lemon, zest',
      '1 tsp vanilla extract',
      '1 egg yolk and 1 tbsp milk, for the glaze',
      '2 tbsp pearl sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, milk, eggs, butter, zest and vanilla and knead for 10 minutes until smooth. Leave to rise for 1 hour.',
      'Divide into 3 and roll each into a strand 40 cm long. Braid them and tuck the ends under. Set on a lined tray and leave for 45 minutes.',
      'Heat the oven to 180C. Brush with the yolk and milk and scatter with the pearl sugar.',
      'Bake for 30 minutes until deep gold. Cool on a rack.'
    ],
    tips: [
      'Roll the strands to equal length.',
      'Tuck the ends under so the braid holds.',
      'Brush with egg for a deep gold crust.'
    ],
    pair: ['Butter and jam', 'Coffee', 'Honey'],
    store: 'Keeps for 3 days wrapped. Freeze for 2 months.',
    rest: [105, 'Rising'],
    nut: [262, 7, 36, 10, 2, 13, 510]
  },

  'prinzregententorte': {
    d: 'A tall Bavarian cake of thin sponge layers filled with chocolate buttercream and coated in chocolate, chilled for 1 hour.',
    meta: 'Prinzregententorte, tall Bavarian layer cake with chocolate buttercream and a dark glaze, baked for 45 minutes. Twelve servings, ready in 1 hour 45 minutes plus chilling.',
    kw: ['prinzregententorte', 'bavarian layer cake', 'chocolate buttercream layer cake german', 'many layer sponge cake', 'prinzregententorte recipe'],
    why: 'A cake for twelve at a big occasion, and one that takes patience: Prinzregententorte is a Bavarian layer cake of thin sponge sheets, traditionally eight of them, sandwiched with chocolate buttercream and covered in chocolate glaze. Baking all the layers is the long part.\n\nThe batter is a whisked sponge of eggs, sugar, flour and a little melted butter. Spread a thin layer, about 5 mm, over the base of a 24 cm springform tin and bake for about 6 minutes at 220C, until pale gold. **Work with one tin and reuse it**, since each layer bakes so quickly. Lift out and cool on a rack before you bake the next.\n\nBeat the buttercream from butter, cocoa, icing sugar and a little melted chocolate until smooth. Spread it between the layers, press them together and cover the top and sides. Chill for 1 hour. Pour the dark chocolate glaze over the cake and let it set. Slice with a knife dipped in hot water, to cut through the layers.',
    ing: [
      '6 eggs, separated',
      '180 g caster sugar',
      '100 g plain flour',
      '60 g potato starch',
      '60 g butter, melted',
      '1 pinch salt',
      '250 g butter, softened, for the buttercream',
      '200 g icing sugar',
      '40 g cocoa powder',
      '100 g dark chocolate, melted and cooled',
      '200 g dark chocolate, for the glaze',
      '100 ml double cream, for the glaze'
    ],
    st: [
      'Heat the oven to 220C and line the base of a 24 cm springform tin.',
      'Whisk the yolks and 90 g sugar until pale. Whisk the whites with the salt, adding the remaining sugar, to stiff peaks. Fold the whites into the yolks with the flour, starch and butter.',
      'Spread 4 tablespoons of batter thinly in the tin and bake for 6 minutes until pale gold. Cool and repeat to make 8 layers.',
      'Beat the 250 g butter with the icing sugar and cocoa until smooth, then beat in the melted chocolate.',
      'Stack the layers with buttercream between them and cover the sides and top thinly. Chill for 1 hour.',
      'Warm the cream, pour over the chopped glaze chocolate and stir smooth. Cool a little and pour over the cake.'
    ],
    tips: [
      'Spread each layer very thin.',
      'Cool each layer fully before stacking.',
      'Cut with a knife dipped in hot water.'
    ],
    pair: ['Coffee', 'Whipped cream', 'Dessert wine'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [572, 6, 56, 36, 4, 44, 50]
  },

  'frankfurter-kranz': {
    d: 'A ring shaped sponge cake layered with buttercream and jam and coated with caramelised nut brittle, in 1 hour 45 minutes plus chilling.',
    meta: 'Frankfurter Kranz, ring shaped German sponge cake with buttercream, jam and nut brittle, baked for 45 minutes. Twelve servings, ready in 1 hour 45 minutes plus chilling.',
    kw: ['frankfurter kranz', 'frankfurt crown cake', 'german ring cake with buttercream', 'sponge ring with nut brittle', 'frankfurter kranz recipe'],
    why: 'This is what to make in the lead up to Christmas, when the ring shape suits the season and the praline coating glitters. Frankfurter Kranz is a ring cake of three sponge layers, filled with jam and vanilla buttercream and rolled in crunchy nut brittle.\n\nThe sponge is mixed in a ring tin with a hole in the middle, so it bakes evenly. Beat the eggs and sugar until they are pale and tripled in volume, then fold in the flour and starch with a spatula. **Do not open the oven door for the first 30 minutes**, as the cake falls if it is disturbed. When it is cool, slice it into three layers with a serrated knife.\n\nFor the brittle, melt sugar until amber, stir in chopped hazelnuts, pour onto a tray and cool, then crush with a rolling pin. Spread the layers with jam and buttercream, press them together and coat the outside with more buttercream. Roll the sides in the brittle. Decorate with piped rosettes and a glacé cherry on each. Chill for 2 hours before cutting.',
    ing: [
      '5 eggs',
      '150 g caster sugar',
      '100 g plain flour',
      '50 g potato starch',
      '1 tsp baking powder',
      '1 lemon, zest',
      '500 ml whole milk, for the buttercream',
      '40 g cornflour',
      '100 g caster sugar, for the buttercream',
      '300 g butter, softened',
      '4 tbsp redcurrant jam',
      '100 g caster sugar, for the brittle',
      '100 g chopped hazelnuts',
      '60 g glacé cherries'
    ],
    st: [
      'Heat the oven to 180C and grease a 24 cm ring tin. Whisk the eggs, 150 g sugar and zest for 8 minutes until tripled. Fold in the flour, starch and baking powder. Bake for 45 minutes. Cool.',
      'Warm 400 ml of the milk. Whisk the rest with the cornflour and 100 g sugar, stir into the milk and cook for 3 minutes until thick. Cool, then beat in the butter a little at a time to a smooth buttercream.',
      'Melt the brittle sugar until amber, stir in the hazelnuts, pour onto a tray and cool. Crush.',
      'Slice the cake into 3 layers. Spread each with jam and buttercream and stack.',
      'Cover the cake with buttercream, roll the sides in the brittle and pipe 12 rosettes. Top each with a cherry.',
      'Chill for 2 hours before cutting.'
    ],
    tips: [
      'Cool the cake and cream fully before assembling.',
      'Do not open the oven door early.',
      'Crush the brittle fairly fine.'
    ],
    pair: ['Coffee', 'Tea', 'Sparkling wine'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [477, 7, 47, 29, 2, 36, 90]
  },

  'donauwelle': {
    d: 'A marbled chocolate and vanilla sponge with sour cherries, topped with buttercream and dark chocolate glaze, baked for 45 minutes.',
    meta: 'Donauwelle, German marbled sponge tray cake with cherries, buttercream and chocolate, baked for 45 minutes. Sixteen servings, ready in 1 hour 25 minutes plus chilling.',
    kw: ['donauwelle', 'danube wave cake', 'german cherry chocolate tray cake', 'marbled sponge with cherries', 'donauwelle recipe'],
    why: 'Compare it with a Black Forest gateau and you will find the same cherries and chocolate in a flat cake that cuts into tidy squares. Donauwelle, the Danube wave, gets its name from the wavy pattern of the dark and light batter, which looks like the surface of a river.\n\nMake one batter and divide it in half. Stir cocoa and a splash of milk into one half. Spread the light batter in a lined tin, spoon the dark batter on top and spread it gently. **Press the sour cherries into the batter in rows** and drag the tip of a knife through to make waves. They sink in as the cake bakes and give a juicy sweet and sour layer.\n\nBake at 180C for 45 minutes and cool completely. Spread with a layer of vanilla buttercream and chill for 1 hour, until firm. Pour over a dark chocolate glaze and score it with a fork for the wave pattern. Cut into squares with a knife dipped in hot water. It keeps for 3 days in the fridge.',
    ing: [
      '250 g butter, softened',
      '250 g caster sugar',
      '5 eggs',
      '300 g plain flour',
      '2 tsp baking powder',
      '100 ml milk',
      '20 g cocoa powder',
      '500 g sour cherries, drained',
      '400 ml whole milk, for the buttercream',
      '30 g cornflour',
      '80 g caster sugar, for the buttercream',
      '250 g butter, softened, for the buttercream',
      '200 g dark chocolate',
      '30 g butter, for the glaze'
    ],
    st: [
      'Heat the oven to 180C and line a 30 x 40 cm tin. Beat 250 g butter with 250 g sugar until pale, beat in the eggs, and fold in the flour, baking powder and milk.',
      'Spread half the batter in the tin. Stir the cocoa into the other half and spread over the top. Press in the cherries and drag a knife through for waves.',
      'Bake for 45 minutes. Cool completely.',
      'Whisk the cornflour, 80 g sugar and a little of the milk. Warm the rest of the milk, stir in, and cook for 3 minutes until thick. Cool, then beat in the 250 g butter. Spread over the cake and chill for 1 hour.',
      'Melt the chocolate and 30 g butter and pour over the cake. Mark waves with a fork. Chill until set.'
    ],
    tips: [
      'Cool the cake before the cream.',
      'Chill the buttercream before glazing.',
      'Use a hot knife to cut squares.'
    ],
    pair: ['Coffee', 'Tea', 'Sparkling wine'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [538, 6, 52, 34, 3, 32, 100]
  },

  'baumkuchen': {
    d: 'A cake built from thin layers of batter grilled one at a time to show rings, brushed with apricot jam and coated in chocolate.',
    meta: 'Baumkuchen, German layered tree cake of thin batter layers grilled one by one and coated in chocolate, cooked for 60 minutes. Sixteen servings, ready in 1 hour 40 minutes.',
    kw: ['baumkuchen', 'german tree cake', 'layered ring cake with chocolate', 'baumkuchen at home', 'baumkuchen recipe'],
    why: 'Why is it called a tree cake? Because when you slice it, the layers show as rings, like the rings of a tree. Baumkuchen is a famously difficult German cake, and the home version is made by baking each thin layer under a hot grill, one after another, in a tin.\n\nThe batter is a rich mixture of butter, sugar, eggs, flour and marzipan. Spread about 3 tablespoons in a thin layer in a lined tin and grill for 3 to 4 minutes, until golden brown, then spread the next layer over the top. **Watch the grill the whole time**, because each layer burns in a few seconds past ready. Keep going until all the batter is used, which gives 14 to 16 layers.\n\nCool the finished cake in the tin, brush with warm apricot jam and coat with melted dark chocolate. The layers should show when it is cut, with a fine, buttery, almond flavoured crumb. It takes time, but a small slice goes a long way. The cake keeps for two weeks wrapped.',
    ing: [
      '250 g butter, softened',
      '200 g caster sugar',
      '100 g marzipan, grated',
      '6 eggs, separated',
      '1 tsp vanilla extract',
      '1 lemon, zest',
      '150 g plain flour',
      '60 g potato starch',
      '1 pinch salt',
      '4 tbsp apricot jam',
      '200 g dark chocolate, melted'
    ],
    st: [
      'Line a 20 cm square tin. Beat the butter, 150 g sugar and marzipan for 5 minutes. Beat in the yolks, vanilla and zest.',
      'Whisk the whites and salt to stiff peaks with the remaining sugar. Fold into the batter with the flour and starch.',
      'Heat the grill to high. Spread 3 tablespoons of batter in the tin and grill for 3 to 4 minutes until golden. Spread on the next layer and repeat, using all the batter.',
      'Cool the cake in the tin for 20 minutes, turn out and cool completely.',
      'Warm the jam and brush it over the cake. Cover with the melted chocolate and let it set. Cut in thin slices.'
    ],
    tips: [
      'Watch the grill closely, as layers burn fast.',
      'Spread each layer thin and even.',
      'Cut thin slices, as the cake is rich.'
    ],
    pair: ['Coffee', 'Tea', 'Dessert wine'],
    store: 'Keeps for 2 weeks wrapped.',
    nut: [336, 5, 34, 20, 2, 24, 40]
  },

  'haselnussmakronen': {
    d: 'Chewy German macaroons of ground hazelnuts, egg white and sugar set on wafers and baked for 25 minutes at 160C.',
    meta: 'Haselnussmakronen, chewy German hazelnut macaroons on wafers, baked for 25 minutes at 160C. Thirty biscuits, ready in 40 minutes.',
    kw: ['haselnussmakronen', 'german hazelnut macaroons', 'hazelnut macaroons on wafers', 'flourless hazelnut biscuits', 'haselnussmakronen recipe'],
    why: 'Does a biscuit need flour? Not this one: haselnussmakronen are made only from ground hazelnuts, egg whites and sugar, and they come out chewy inside and crisp at the edge. They are a Christmas classic in Germany, baked on edible wafers so they do not stick.\n\nToast the hazelnuts first and rub off the skins, then grind them fine. Whisk the egg whites to stiff peaks with the sugar, until thick and glossy, and fold in the nuts. **Fold gently with a metal spoon**, as the whites carry the whole structure, and a heavy hand will deflate them. Spoon heaps onto round wafers, about a tablespoon each.\n\nBake at 160C for 25 minutes, until the tops are pale gold and cracked. They should be soft in the middle when they come out and firm as they cool. Cool on the tray. Leave them out overnight and then store them in a tin. They keep for 3 weeks, and the flavour improves with a few days of rest.',
    ing: [
      '200 g hazelnuts, toasted and finely ground',
      '3 egg whites',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '30 g round wafers, 5 cm',
      '1 lemon, zest'
    ],
    st: [
      'Heat the oven to 160C and line two trays. Set the wafers on the trays.',
      'Whisk the egg whites and salt to soft peaks. Whisk in the sugar a spoonful at a time to stiff glossy peaks. Whisk in the vanilla.',
      'Fold in the hazelnuts and lemon zest gently.',
      'Spoon a tablespoon of the mix on each wafer.',
      'Bake for 25 minutes until pale gold. Cool on the trays.'
    ],
    tips: [
      'Fold the nuts in gently.',
      'Grind the nuts fine but not to a paste.',
      'Cool on the tray to firm up.'
    ],
    pair: ['Coffee', 'Tea', 'Mulled wine'],
    store: 'Keeps for 3 weeks in a tin.',
    nut: [68, 1, 7, 4, 1, 6, 10]
  },

  'kokosmakronen': {
    d: 'Chewy, golden coconut macaroons of desiccated coconut, egg white and sugar, baked for 20 minutes at 170C.',
    meta: 'Kokosmakronen, chewy golden German coconut macaroons, baked for 20 minutes at 170C. Thirty biscuits, ready in 35 minutes.',
    kw: ['kokosmakronen', 'german coconut macaroons', 'chewy coconut macaroons', 'coconut macaroons with egg white', 'kokosmakronen recipe'],
    why: 'The first sign they are ready is the smell: toasted coconut and sugar drifting from the oven, and the edges turning gold. Kokosmakronen are German coconut macaroons, three or four ingredients, no flour and no fat, and they are chewy, sticky and sweet.\n\nThe mixture is stirred over a pan of simmering water until it thickens slightly, which cooks the egg white and makes the macaroons hold their peaks. **Stir for 5 minutes until the mix looks glossy and holds a shape**, then take it off the heat and cool for 5 minutes. A cold mix spoons into tidy mounds that keep their shape in the oven.\n\nUse two spoons to set small heaps on a lined tray, or press the mix into a small cup and tip it out for a neat dome. Bake at 170C for 20 minutes, until the tops are pale gold and the bases are set. Cool on the tray. Dip the base of each in melted dark chocolate for a classic finish. They keep for 2 weeks in a tin.',
    ing: [
      '250 g desiccated coconut',
      '3 egg whites',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '100 g dark chocolate, melted'
    ],
    st: [
      'Heat the oven to 170C and line two trays.',
      'Put the egg whites, sugar and salt in a heatproof bowl over a pan of simmering water. Stir for 5 minutes until warm, glossy and slightly thick.',
      'Off the heat, stir in the coconut and vanilla. Cool for 5 minutes.',
      'Spoon 30 small mounds onto the trays.',
      'Bake for 20 minutes until pale gold. Cool, then dip the bases in the chocolate.'
    ],
    tips: [
      'Stir over the water until the mixture thickens.',
      'Shape small, even mounds.',
      'Dip the bases in chocolate when cool.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Keeps for 2 weeks in a tin.',
    nut: [94, 1, 9, 6, 2, 7, 10]
  },

  'mandelhornchen': {
    d: 'Almond crescent biscuits of marzipan, sugar and egg white rolled in flaked almonds and dipped in chocolate, baked for 20 minutes.',
    meta: 'Mandelhörnchen, German almond crescents of marzipan rolled in flaked almonds, baked for 20 minutes. Twenty four biscuits, ready in 1 hour 10 minutes.',
    kw: ['mandelhornchen', 'german almond crescents', 'marzipan almond horns', 'almond horn biscuits', 'mandelhoernchen recipe'],
    why: 'Chill the dough for a full hour. That is the single most useful instruction for mandelhörnchen, the German almond crescents, because the paste is sticky and falls apart if it is warm. They are made of marzipan, sugar, egg white and almonds, and they are chewy in the middle with a crisp, nutty crust.\n\nGrate the marzipan or crumble it and work it with the icing sugar and egg white to a smooth paste. Wrap and chill for 1 hour. **Wet your hands before shaping**, because water stops the paste sticking to your fingers. Roll pieces into small sausages, press them into a dish of flaked almonds and coat all over, then bend into crescents on the tray.\n\nBake at 170C for 20 minutes until the almonds are deep gold, and cool on the tray, as the crescents are soft while they are hot. Dip the two ends in melted dark chocolate and let them set on paper. They keep for 2 weeks in a tin, and they are among the best of the Christmas biscuits.',
    ing: [
      '250 g marzipan, grated',
      '100 g icing sugar',
      '2 egg whites',
      '1 tsp lemon juice',
      '150 g flaked almonds',
      '100 g dark chocolate, melted'
    ],
    st: [
      'Work the marzipan, icing sugar, 1 egg white and the lemon juice to a smooth paste. Wrap and chill for 1 hour.',
      'Heat the oven to 170C and line two trays. Beat the second egg white lightly.',
      'With wet hands roll the paste into 24 small sausages. Dip each in the egg white, then roll in the almonds.',
      'Bend into crescents on the trays and bake for 20 minutes until deep gold. Cool on the trays.',
      'Dip the ends in the chocolate and leave to set.'
    ],
    tips: [
      'Chill the paste for a full hour.',
      'Wet your hands to stop sticking.',
      'Cool on the tray, as they are soft when hot.'
    ],
    pair: ['Coffee', 'Tea', 'Mulled wine'],
    store: 'Keeps for 2 weeks in a tin.',
    rest: [60, 'Chilling'],
    nut: [127, 3, 13, 7, 2, 11, 10]
  }
};
