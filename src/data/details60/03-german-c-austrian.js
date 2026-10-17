'use strict';

/**
 * Volume sixty, third part: German soups, supper dishes and sausages, the
 * festive roasts, fish and salads, then the first Austrian dishes (dumplings,
 * pancakes, strudel, fried chicken and beef broth). Waits of an hour or more
 * are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'gulaschsuppe': {
    d: 'A thick German goulash soup of beef, peppers, onions and potatoes with paprika, simmered for 90 minutes.',
    meta: 'Gulaschsuppe, thick German goulash soup with beef, peppers, onions and paprika, cooked for 90 minutes. Six servings, ready in 1 hour 50 minutes.',
    kw: ['gulaschsuppe', 'german goulash soup', 'beef goulash soup with peppers', 'paprika beef soup', 'gulaschsuppe recipe'],
    why: 'Take the pan off the heat before the paprika goes in. That is the short sharp instruction behind a good Gulaschsuppe, because paprika burns in seconds and turns a rich red soup bitter. The rest of the recipe is patience: beef, onions, peppers and a long, low simmer.\n\nUse beef shin or chuck, cut into 2 cm cubes, which is smaller than for a stew so that it cooks into the soup. Brown it in batches in lard until it has a deep crust. Cook an equal weight of onions in the same pot for 15 minutes, until they melt into the base. **Stir in the paprika and tomato purée off the heat**, then add stock, peppers and a little marjoram and caraway.\n\nSimmer for 90 minutes. Add the diced potatoes for the last 25 minutes, so they cook through and thicken the broth without falling apart. The soup should be thick and glossy, and the beef tender enough to crush with a spoon. Serve in deep bowls with soured cream and dark bread. The flavour is better on the second day.',
    ing: [
      '700 g beef shin, in 2 cm cubes',
      '3 tbsp lard or oil',
      '700 g onions, chopped',
      '2 tbsp sweet paprika',
      '2 tbsp tomato purée',
      '2 red peppers, diced',
      '1.5 litres beef stock',
      '1 tsp caraway seeds',
      '1 tsp dried marjoram',
      '500 g potatoes, diced',
      '1 tsp salt',
      '150 g soured cream'
    ],
    st: [
      'Brown the beef in the lard in batches, 5 minutes each. Lift out.',
      'Cook the onions in the pot for 15 minutes until soft and golden.',
      'Take the pot off the heat, stir in the paprika and purée, then add the stock, peppers, caraway and marjoram. Return the beef.',
      'Simmer for 65 minutes. Add the potatoes and cook for 25 minutes more.',
      'Season with the salt and serve with the soured cream.'
    ],
    tips: [
      'Add the paprika off the heat.',
      'Cook the onions until they melt.',
      'Add the potatoes late so they hold their shape.'
    ],
    pair: ['Dark bread', 'Soured cream', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [513, 30, 33, 29, 6, 9, 1320]
  },

  'huhnersuppe-mit-nudeln': {
    d: 'A clear chicken soup with carrots, celery and fine noodles, made by simmering a whole chicken for 40 minutes.',
    meta: 'Hühnersuppe mit Nudeln, clear German chicken soup with vegetables and fine noodles, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['huhnersuppe mit nudeln', 'german chicken noodle soup', 'clear chicken soup with noodles', 'chicken soup german style', 'huehnersuppe recipe'],
    why: 'A whole chicken, a pot of water, and the patience to leave it alone: that is the entire method. Hühnersuppe mit Nudeln is the German chicken noodle soup, with a clear, golden broth that tastes of chicken and nothing else, served to anyone who is ill or tired.\n\nPut the chicken in a large pot, cover it with cold water and bring it slowly to a bare simmer. Skim off the grey foam that rises in the first 10 minutes. **Do not let the soup boil**, as a rolling boil makes the broth cloudy and the meat stringy. Add carrots, celery, a leek, an onion and a bay leaf and simmer for 40 minutes, until the chicken is cooked through.\n\nLift out the chicken, strain the broth, shred the meat and return it with the vegetables, sliced. Cook the noodles in the soup for the last 5 minutes, or separately if you want the broth to stay clear. Add parsley and a pinch of nutmeg and taste for salt. The broth freezes well.',
    ing: [
      '1.4 kg whole chicken',
      '2.5 litres cold water',
      '3 carrots, 2 left whole and 1 diced',
      '2 celery sticks',
      '1 leek, halved',
      '1 onion, halved',
      '1 bay leaf',
      '100 g fine soup noodles',
      '3 tbsp chopped parsley',
      '1 pinch ground nutmeg',
      '1 tsp salt'
    ],
    st: [
      'Put the chicken in a large pot with the water and bring slowly to a bare simmer. Skim the foam.',
      'Add the 2 whole carrots, celery, leek, onion and bay and simmer for 40 minutes.',
      'Lift out the chicken and strain the broth. Shred the meat and discard the skin and bones.',
      'Return the broth to the pot with the diced carrot and simmer for 5 minutes. Add the noodles and cook for 5 minutes.',
      'Add the meat, parsley, nutmeg and salt and serve.'
    ],
    tips: [
      'Start with cold water and bring it up slowly.',
      'Skim the foam for a clear broth.',
      'Cook the noodles separately for the clearest soup.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Salad'],
    store: 'Keeps for 4 days in the fridge. Freeze the broth for 3 months.',
    nut: [559, 48, 22, 31, 3, 4, 600]
  },

  'spargelcremesuppe': {
    d: 'A smooth cream of asparagus soup made with a stock from the peelings and finished with cream, ready in 40 minutes.',
    meta: 'Spargelcremesuppe, smooth German cream of asparagus soup with cream, cooked for 25 minutes. Four servings, ready in 40 minutes.',
    kw: ['spargelcremesuppe', 'german cream of asparagus soup', 'white asparagus soup', 'asparagus soup with cream', 'spargelcremesuppe recipe'],
    why: 'It looks like a pale cream soup and tastes of the whole spear, because the peelings go into the stock. Spargelcremesuppe is the soup of the German asparagus season, when white asparagus is sold on every roadside, and it makes use of the parts you would otherwise throw away.\n\nPeel the asparagus thoroughly and cut off the woody ends. Simmer the peelings and ends in water with salt, a pinch of sugar and a knob of butter for 15 minutes, then strain. **Do not skip the straining**, as the peel is fibrous and leaves strings in the finished soup. Cut the spears into pieces, keeping the tips aside, and cook the stalks in the stock for 15 minutes until soft.\n\nBlend the stalks with the stock until smooth. Thicken with a roux of butter and flour or a little cream, add the tips and cook for 3 minutes. Finish with cream and lemon juice. The tips should stay firm. Serve with a spoonful of cream and fresh chives.',
    ing: [
      '700 g white asparagus',
      '1 litre water',
      '1 tsp salt',
      '1 tsp caster sugar',
      '60 g butter',
      '40 g plain flour',
      '150 ml double cream',
      '1 tbsp lemon juice',
      '2 tbsp chopped chives'
    ],
    st: [
      'Peel the asparagus and cut off the woody ends. Simmer the peelings and ends in the water with the salt, sugar and 20 g butter for 15 minutes. Strain.',
      'Cut the spears in pieces, keeping the tips aside. Cook the stalk pieces in the stock for 15 minutes until soft.',
      'Blend until smooth.',
      'Melt the remaining butter, stir in the flour for 1 minute, whisk in the soup, bring to a simmer and add the tips. Cook for 3 minutes.',
      'Stir in the cream and lemon juice and serve with the chives.'
    ],
    tips: [
      'Peel the asparagus thoroughly.',
      'Strain the stock to remove fibres.',
      'Keep the tips whole for the soup.'
    ],
    pair: ['Crusty bread', 'Cured ham', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [326, 6, 17, 26, 4, 6, 610]
  },

  'selleriesuppe': {
    d: 'A silky celeriac soup with potato, cream and a little apple, blended smooth after 30 minutes, with a swirl of cream.',
    meta: 'Selleriesuppe, silky German celeriac soup with potato, apple and cream, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['selleriesuppe', 'german celeriac soup', 'cream of celeriac soup', 'celery root soup', 'selleriesuppe recipe'],
    why: 'A bowl for four on a grey day, and a soup that tastes more than it looks. Selleriesuppe is made from celeriac, the knobbly root that tastes of celery and hazelnut, and it makes a smooth, pale, quietly rich soup that needs little more than stock and cream.\n\nPeel the celeriac thickly, since the skin and the layer under it are tough and bitter, and cut it into small cubes. Sweat it in butter with an onion and a potato for 8 minutes without browning. **Add a diced apple at this stage**, as its sweetness balances the earthy root. Pour in stock, bring it to a simmer and cook for 20 minutes until everything is soft.\n\nBlend until smooth, adding the cream last, and pass through a sieve if you want it silky. Taste for salt and add a grating of nutmeg. Serve in warm bowls with a swirl of cream and some fried bacon or toasted hazelnuts on top. The soup thickens as it cools, so thin it with stock when you reheat it.',
    ing: [
      '700 g celeriac, peeled and cubed',
      '1 potato, 200 g, peeled and cubed',
      '1 apple, peeled and diced',
      '1 onion, chopped',
      '40 g butter',
      '900 ml vegetable or chicken stock',
      '100 ml double cream',
      '1 pinch ground nutmeg',
      '1/2 tsp salt'
    ],
    st: [
      'Melt the butter in a large pan and sweat the onion, celeriac, potato and apple for 8 minutes without browning.',
      'Add the stock, bring to a simmer and cook for 20 minutes until soft.',
      'Blend until smooth. Stir in the cream, nutmeg and salt.',
      'Reheat gently without boiling and serve with a swirl of cream.'
    ],
    tips: [
      'Peel the celeriac thickly.',
      'Sweat the vegetables without browning.',
      'Reheat gently after adding the cream.'
    ],
    pair: ['Crusty bread', 'Fried bacon', 'Toasted hazelnuts'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [326, 7, 34, 18, 6, 10, 1220]
  },

  'pellkartoffeln-mit-quark': {
    d: 'Jacket potatoes served with a herb quark of chives and parsley, a plain German supper ready in 35 minutes.',
    meta: 'Pellkartoffeln mit Quark, boiled jacket potatoes with a chive and herb quark, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['pellkartoffeln mit quark', 'german jacket potatoes with quark', 'potatoes with herb quark', 'kraeuterquark with potatoes', 'pellkartoffeln recipe'],
    why: 'A Sunday supper for a table of four, and the plainest dish in the German repertoire: potatoes boiled in their skins and a bowl of herb quark. It is eaten with a pat of butter and salt, and sometimes with a linseed oil dressing in the east.\n\nChoose waxy potatoes of equal size so they cook together. Boil them in salted water with the skins on, because peeled potatoes absorb water and fall apart. **Start them in cold water and bring them to a simmer**, so the outside does not break before the inside is cooked. They take about 25 minutes, and a knife should slide in with no resistance.\n\nFor the quark, mix it with chives, parsley, a spoonful of milk to loosen it, salt, pepper and a squeeze of lemon. Let it stand for 10 minutes. Drain the potatoes, return them to the pot with the lid on for 2 minutes to dry, and serve them in their skins. Each person peels their own potato and dips or spoons the quark over it.',
    ing: [
      '1.2 kg waxy potatoes, of equal size',
      '1 tsp salt',
      '500 g quark',
      '3 tbsp whole milk',
      '3 tbsp chopped chives',
      '3 tbsp chopped parsley',
      '1 tbsp lemon juice',
      '1/2 tsp salt, for the quark',
      '1/4 tsp black pepper',
      '30 g butter'
    ],
    st: [
      'Put the potatoes in a pan with cold salted water and bring to a simmer. Cook for 25 minutes until tender.',
      'Mix the quark with the milk, chives, parsley, lemon juice, salt and pepper. Let stand for 10 minutes.',
      'Drain the potatoes and return to the pot, covered, for 2 minutes to dry.',
      'Serve in their skins with the quark and the butter.'
    ],
    tips: [
      'Cook the potatoes in their skins.',
      'Start in cold water.',
      'Dry the potatoes in the pot before serving.'
    ],
    pair: ['Smoked fish', 'Linseed oil', 'Pickled herring', 'Boiled eggs'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [487, 22, 57, 19, 7, 7, 960]
  },

  'strammer-max': {
    d: 'Open sandwich of rye bread topped with ham and two fried eggs, ready in 15 minutes.',
    meta: 'Strammer Max, German open sandwich of rye bread, ham and fried eggs, cooked for 10 minutes. Two servings, ready in 15 minutes.',
    kw: ['strammer max', 'german ham and egg open sandwich', 'ham and fried egg on rye', 'strammer max recipe', 'german open sandwich with fried egg'],
    why: 'Butter the bread to the edges. That is the quick tip behind Strammer Max, an open sandwich of buttered dark bread, ham and a fried egg, which is the classic late supper in a German pub. It takes ten minutes and tastes better than it looks.\n\nUse a good rye or mixed grain bread, sliced about 1 cm thick, and butter it right to the corners. A thin film of butter keeps the juices of the egg out of the crumb. Lay slices of ham over the bread, folding them to make a thick layer. **Fry the eggs in butter over medium heat**, so the whites set and the edges crisp while the yolks stay runny. Cover the pan for 1 minute if the whites need help.\n\nSlide the eggs on the ham and finish with black pepper, chives and a few slices of gherkin on the side. Some cooks add a thin slice of raw onion under the ham. Eat with a knife and fork. The soft yolk runs into the bread, and the bread soaks it up.',
    ing: [
      '2 thick slices rye bread',
      '30 g butter, softened',
      '4 slices cured or cooked ham, 80 g',
      '4 eggs',
      '20 g butter, for frying',
      '2 tbsp chopped chives',
      '1/2 tsp black pepper',
      '60 g gherkins'
    ],
    st: [
      'Butter the bread to the edges and lay on the ham.',
      'Heat the frying butter in a pan over medium heat and fry the eggs for 3 minutes, covering for the last minute if the whites are not set.',
      'Slide 2 eggs onto each sandwich.',
      'Top with the chives and pepper and serve with the gherkins.'
    ],
    tips: [
      'Butter the bread to the edges.',
      'Fry the eggs gently so the yolks stay soft.',
      'Eat at once while the egg is warm.'
    ],
    pair: ['Gherkins', 'Beer', 'Pickled onions'],
    store: 'Best fresh.',
    nut: [473, 27, 17, 33, 1, 2, 1350]
  },

  'bauernfruhstuck': {
    d: 'Farmer\'s breakfast of fried potatoes, bacon, onions and eggs cooked together in a pan, ready in 35 minutes.',
    meta: 'Bauernfrühstück, German farmer\'s breakfast of fried potatoes, bacon, onion and eggs, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['bauernfruhstuck', 'german farmers breakfast', 'fried potatoes with bacon and egg', 'german potato omelette', 'bauernfruehstueck recipe'],
    why: 'Most home versions come out soft and pale, and the fix is to use cold, already boiled potatoes. Bauernfrühstück, the farmer\'s breakfast, is a skillet of fried potatoes, bacon and onion bound together with eggs, and it is best made with potatoes that were boiled the day before.\n\nCold boiled potatoes hold their shape and take colour. Fresh warm ones fall apart in the pan. Slice them 5 mm thick. Fry the bacon first to render its fat, then fry the potatoes in the fat in a single layer. **Leave them alone for 5 minutes** before turning, so they develop a golden crust instead of tearing. Add the onions halfway.\n\nBeat the eggs with salt, pepper and chives and pour them over the potatoes. Cover the pan and cook on low for 5 minutes until just set, with a soft surface. It can be flipped as an omelette or cut into wedges from the pan. Serve with a pickle and a mug of coffee. A Sunday breakfast, or a quick supper.',
    ing: [
      '800 g cold waxy potatoes, cooked the day before, in 5 mm slices',
      '150 g smoked bacon, diced',
      '2 tbsp butter',
      '1 large onion, sliced',
      '6 eggs',
      '3 tbsp chopped chives',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Fry the bacon in a large non stick pan for 5 minutes until the fat runs. Lift out, leaving the fat.',
      'Add the butter and the potatoes in a single layer. Fry for 5 minutes without moving, then turn and fry for 5 minutes more.',
      'Add the onion and bacon and fry for 5 minutes.',
      'Beat the eggs with the chives, salt and pepper and pour over. Cover and cook on low heat for 5 minutes until set.',
      'Cut into wedges and serve from the pan.'
    ],
    tips: [
      'Use cold boiled potatoes.',
      'Leave the potatoes alone until crisp.',
      'Cover the pan so the egg sets evenly.'
    ],
    pair: ['Gherkins', 'Coffee', 'Green salad'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [394, 20, 38, 18, 5, 3, 970]
  },

  'jagerschnitzel': {
    d: 'A breadcrumbed pork schnitzel topped with a creamy mushroom sauce with onion and parsley, ready in 45 minutes.',
    meta: 'Jägerschnitzel, German pork schnitzel with a creamy mushroom sauce, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['jagerschnitzel', 'german hunter schnitzel', 'pork schnitzel with mushroom sauce', 'schnitzel with creamy mushrooms', 'jaegerschnitzel recipe'],
    why: 'The first sign it is ready is the sound: a schnitzel sizzling in butter, then the soft hiss of mushrooms hitting a dry pan. Jägerschnitzel, the hunter\'s schnitzel, is a breaded pork cutlet with a rich mushroom sauce, and the sauce is spooned on at the table, not before.\n\nFlatten the pork between sheets of cling film to 5 mm, so it cooks in minutes and stays tender. Coat in flour, egg and breadcrumbs, pressing the crumbs on so they stay. **Fry in plenty of butter and oil at a medium heat**, shaking the pan so the fat washes over the top. The crumbs should puff up in waves and turn deep gold.\n\nFor the sauce, brown sliced mushrooms in a dry pan until the liquid is gone, add onion, then stock, tomato purée and cream, and simmer until it coats a spoon. Season with paprika and parsley. Serve the schnitzel on plates with the sauce beside, not on top, to keep the crumb crisp. Chips or buttered noodles are the usual partners.',
    ing: [
      '600 g pork loin steaks',
      '40 g plain flour',
      '2 eggs, beaten',
      '100 g dry breadcrumbs',
      '40 g butter',
      '60 ml rapeseed oil absorbed, from 150 ml for frying',
      '300 g mushrooms, sliced',
      '1 onion, chopped',
      '1 tbsp tomato purée',
      '200 ml beef stock',
      '100 ml double cream',
      '1/2 tsp paprika',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Flatten the pork between cling film to 5 mm. Season, then coat in the flour, egg and breadcrumbs.',
      'Fry the mushrooms in a dry pan for 8 minutes until golden. Add the onion and 10 g butter and cook for 3 minutes.',
      'Stir in the purée, stock and cream and simmer for 6 minutes. Add the paprika and parsley.',
      'Heat the rest of the butter and the oil in a wide pan and fry the schnitzel for 3 minutes on each side until deep gold.',
      'Drain and serve with the sauce beside.'
    ],
    tips: [
      'Flatten the pork evenly.',
      'Shake the pan so the fat washes over the crumbs.',
      'Serve the sauce on the side to keep the crust crisp.'
    ],
    pair: ['Chips', 'Buttered noodles', 'Green salad'],
    store: 'Best fresh. The sauce keeps for 2 days.',
    nut: [705, 43, 32, 45, 3, 5, 470]
  },

  'rahmschnitzel': {
    d: 'Pan fried pork escalopes in a cream sauce of onion, white wine and mustard, ready in 45 minutes.',
    meta: 'Rahmschnitzel, German pork escalopes in a creamy white wine and mustard sauce, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['rahmschnitzel', 'german pork in cream sauce', 'pork escalope with cream and mustard', 'schnitzel in cream sauce', 'rahmschnitzel recipe'],
    why: 'Sunday lunch for four with the minimum of fuss: rahmschnitzel is a plain pan fried pork escalope, finished in a cream sauce, and it asks only for fast cooking and a good pan. There is no breadcrumb coating, so it stays tender and soft.\n\nFlatten the pork lightly, to about 1 cm, and dust with flour so the sauce thickens as it cooks. Fry the escalopes in butter over a medium high heat for 2 minutes a side, until golden, and lift them out. **Do not cook them through at this stage**, because they return to the sauce and cook for 3 more minutes. That keeps them soft instead of dry.\n\nIn the same pan soften an onion, then add white wine, scrape up the browned bits and boil it for 2 minutes. Pour in the cream, stir in the mustard and simmer until it coats a spoon. Return the pork and cook for 3 minutes, turning once. Finish with parsley. Serve with noodles, spaetzle or rice to take up the sauce.',
    ing: [
      '600 g pork loin steaks',
      '30 g plain flour',
      '40 g butter',
      '1 onion, finely chopped',
      '100 ml dry white wine',
      '200 ml double cream',
      '1 tbsp sharp mustard',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Flatten the pork to 1 cm. Season and dust with the flour.',
      'Melt 30 g of the butter in a wide pan over medium high heat and fry the pork for 2 minutes on each side. Lift out.',
      'Melt the rest of the butter, soften the onion for 3 minutes, add the wine and boil for 2 minutes.',
      'Stir in the cream and mustard and simmer for 4 minutes.',
      'Return the pork to the pan for 3 minutes, turning once. Add the parsley and serve.'
    ],
    tips: [
      'Brown the pork quickly and finish in the sauce.',
      'Dust only lightly with flour.',
      'Do not let the cream boil hard.'
    ],
    pair: ['Egg noodles', 'Spaetzle', 'Green beans'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [504, 34, 11, 36, 1, 3, 730]
  },

  'thuringer-rostbratwurst': {
    d: 'Long, thin Thuringian bratwurst grilled over a high heat for 10 minutes and served in a roll with mustard.',
    meta: 'Thüringer Rostbratwurst, long thin grilled bratwurst served in a roll with mustard, cooked for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['thuringer rostbratwurst', 'thuringian bratwurst', 'german grilled sausage in a roll', 'thueringer bratwurst', 'rostbratwurst recipe'],
    why: 'What makes a Thüringer different from other bratwurst? It is long, thin and seasoned with marjoram, caraway and garlic, and it is grilled rather than fried. The sausage is sold across Germany and eaten from a street stall in a soft roll with mustard.\n\nGrill over charcoal if you can, or use a hot griddle pan. Do not prick the casing, as this lets the juices escape and the sausage dries out. **Start them over a medium heat and move them to a hotter spot at the end**, so the skin browns without splitting. They take about 10 minutes, turning every 2 minutes, until they are deep brown all over and firm to the touch.\n\nWarm the rolls on the grill for the last minute. Serve the sausage in the roll with a long stripe of mustard, which should be sharp and grainy. A little sauerkraut or fried onions make a fuller plate. Eat at once, since a grilled sausage goes rubbery when it cools. A lager is the usual drink.',
    ing: [
      '640 g Thüringer bratwurst',
      '4 crusty bread rolls',
      '4 tbsp sharp mustard',
      '1 tbsp vegetable oil',
      '200 g sauerkraut, to serve'
    ],
    st: [
      'Heat a grill or griddle pan to medium high and brush with the oil.',
      'Cook the sausages for 10 minutes, turning every 2 minutes, until brown all over.',
      'Warm the rolls on the grill for 1 minute.',
      'Serve the sausages in the rolls with the mustard and sauerkraut.'
    ],
    tips: [
      'Do not prick the casings.',
      'Turn often for an even colour.',
      'Serve at once.'
    ],
    pair: ['Sharp mustard', 'Sauerkraut', 'Lager'],
    store: 'Best fresh.',
    nut: [579, 25, 23, 43, 4, 4, 1920]
  },

  'nurnberger-rostbratwurst': {
    d: 'Small Nuremberg bratwurst grilled for 10 minutes, usually served six or twelve to a plate with sauerkraut and mustard.',
    meta: 'Nürnberger Rostbratwurst, small grilled bratwurst with marjoram served with sauerkraut, cooked for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['nurnberger rostbratwurst', 'nuremberg bratwurst', 'small german bratwurst sausages', 'nuernberger bratwurst with sauerkraut', 'nuremberg sausages recipe'],
    why: 'Most grilled sausages come out split or dry, and the fix is to watch the heat. Nürnberger Rostbratwurst are very small, thin sausages, only about 8 cm long, flavoured with marjoram, and they cook in minutes. This also means they burn in a moment if the grill is too fierce.\n\nUse a medium hot grill or a heavy frying pan with a little oil. Do not prick the sausages. **Roll them constantly for 8 to 10 minutes**, so the skin colours evenly and the fat inside does not burst the casing. They are done when they feel firm and are golden brown with darker marks.\n\nThe usual way to serve them is six or twelve to a plate, on a bed of warm sauerkraut with a spoonful of mustard and a slice of dark bread. Another way is three in a bun, a famous snack in Nuremberg. Warm the sauerkraut in a pan with a little lard and a few juniper berries while the sausages cook. Eat while still hot.',
    ing: [
      '450 g small Nürnberger bratwurst',
      '1 tbsp vegetable oil',
      '600 g sauerkraut',
      '1 tbsp lard',
      '1 g juniper berries',
      '4 tbsp sharp mustard',
      '4 slices dark bread'
    ],
    st: [
      'Warm the sauerkraut in a pan with the lard and juniper over low heat for 10 minutes.',
      'Heat the oil in a heavy pan over medium heat.',
      'Cook the sausages for 8 to 10 minutes, rolling constantly, until golden brown all over.',
      'Serve on the sauerkraut with the mustard and bread.'
    ],
    tips: [
      'Keep the heat at medium so the casings do not burst.',
      'Roll them often for an even colour.',
      'Warm the sauerkraut with a little lard.'
    ],
    pair: ['Sauerkraut', 'Sharp mustard', 'Dark bread', 'Lager'],
    store: 'Best fresh.',
    nut: [504, 19, 26, 36, 6, 5, 2200]
  },

  'bockwurst': {
    d: 'Smooth veal and pork sausages warmed in hot water for 10 minutes and served with mustard and a bread roll.',
    meta: 'Bockwurst, smooth German veal and pork sausages warmed in hot water and served with mustard, cooked for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['bockwurst', 'german boiled sausage', 'bockwurst with mustard', 'bockwurst in a roll', 'bockwurst recipe'],
    why: 'Pork, veal, salt, a little white pepper and paprika: that is the short list in a bockwurst, a pale, smooth, mild sausage already cooked when you buy it. It only needs warming through, and the way to do it is in hot water that is not boiling.\n\nBring water to the boil in a wide pan, then turn off the heat and wait for the bubbles to stop. Slide in the sausages and leave them for 10 minutes with the lid on. **Do not let the water boil again**, because a boiling sausage splits and loses its juice. The skin should be plump and shiny when they come out.\n\nServe them with sweet or sharp mustard, a soft roll and perhaps a potato salad. The roll is traditionally eaten with the sausage, not wrapped around it, so the bread is a side. In Germany bockwurst is sold at fairs and railway stations from a steaming metal pan. At home it is a fast supper, ready as soon as the water is hot. A lager goes well.',
    ing: [
      '8 bockwurst, about 640 g',
      '2 litres water',
      '4 bread rolls',
      '4 tbsp mustard',
      '400 g potato salad, to serve'
    ],
    st: [
      'Bring the water to the boil in a wide pan, then take it off the heat until the bubbles stop.',
      'Add the sausages, cover and leave for 10 minutes.',
      'Lift out with tongs and serve with the rolls, mustard and potato salad.'
    ],
    tips: [
      'Never let the water boil once the sausages are in.',
      'Serve at once.',
      'Offer both sweet and sharp mustard.'
    ],
    pair: ['Mustard', 'Bread rolls', 'Potato salad', 'Lager'],
    store: 'Best fresh.',
    nut: [622, 25, 36, 42, 3, 4, 1920]
  },

  'gansebraten': {
    d: 'A whole goose roasted for 3 hours with apples, onions and marjoram until the skin is crisp, the German Christmas roast.',
    meta: 'Gänsebraten, German Christmas roast goose with apples, onions and marjoram, cooked for 3 hours. Eight servings, ready in 3 hours 30 minutes.',
    kw: ['gansebraten', 'german roast goose', 'christmas goose with apples and marjoram', 'goose with red cabbage', 'gaensebraten recipe'],
    why: 'A table of eight at Christmas and a bird that does most of the work in the oven. Gänsebraten is the German Christmas goose, stuffed with apples, onions and marjoram, and the point is the crisp skin and the fat that runs off in the roasting tin.\n\nA goose is mostly fat under the skin, which needs to escape. Prick the skin all over with a fork, being careful not to cut the meat, and rub the bird with salt, pepper and marjoram inside and out. Fill the cavity with quartered apples, onions and more marjoram. **Roast it breast up on a rack** in a tin with a little water in it. Pour off the fat every 45 minutes and keep it, as it makes the best roast potatoes.\n\nRoast at 160C for about 3 hours, until the juices run clear when the thigh is pierced and the skin is deep brown. Turn the oven to 220C for the last 15 minutes to crisp the skin. Rest the goose for 30 minutes, covered loosely with foil. Make the gravy from the tin juices. Serve with red cabbage and potato dumplings.',
    ing: [
      '2.3 kg goose meat and skin, from a 4.5 kg bird',
      '3 tsp salt',
      '1 tsp black pepper',
      '3 tbsp dried marjoram',
      '3 apples, quartered',
      '2 onions, quartered',
      '300 ml water',
      '300 ml chicken stock',
      '1 tbsp cornflour'
    ],
    st: [
      'Heat the oven to 160C. Prick the goose skin all over. Rub inside and out with the salt, pepper and half the marjoram.',
      'Fill the cavity with the apples, onions and the remaining marjoram.',
      'Set breast up on a rack in a roasting tin with the water. Roast for 3 hours, pouring off the fat every 45 minutes.',
      'Turn the oven to 220C and roast for 15 minutes until the skin is crisp.',
      'Rest for 30 minutes under foil. Skim the tin juices, add the stock and cornflour mixed with water and simmer for 5 minutes for the gravy.'
    ],
    tips: [
      'Prick the skin without piercing the meat.',
      'Pour off the fat during roasting.',
      'Rest the goose for 30 minutes.'
    ],
    pair: ['Red cabbage', 'Potato dumplings', 'Roast potatoes', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Save the goose fat for roasting.',
    nut: [1072, 47, 14, 92, 3, 8, 1210]
  },

  'entenbrust-mit-rotkohl': {
    d: 'Pan roasted duck breast with crisp skin served on braised red cabbage with apple and cloves, in 1 hour 20 minutes.',
    meta: 'Entenbrust mit Rotkohl, pan roasted duck breast with braised red cabbage and apple, cooked for 1 hour. Four servings, ready in 1 hour 20 minutes.',
    kw: ['entenbrust mit rotkohl', 'german duck breast with red cabbage', 'duck breast with braised red cabbage', 'pan roasted duck breast', 'duck and red cabbage'],
    why: 'A dinner for four on a cold night, and a plate where the duck is quick and the cabbage is slow. Entenbrust mit Rotkohl pairs rich, crisp skinned duck with sweet and sour braised cabbage, and the cabbage can be made a day ahead.\n\nStart the cabbage first. Shred it, cook it with onion, apple, red wine, vinegar, sugar, cloves and a bay leaf, covered, over low heat for 50 minutes, until tender. For the duck, score the skin in a criss cross pattern and season with salt. **Start the breasts skin side down in a cold pan**, then turn on the heat. The fat melts slowly, and the skin crisps without the meat toughening.\n\nCook over a medium heat for 8 minutes, pouring off the fat as it collects, then turn and cook for 4 minutes on the flesh side for medium. Rest for 5 minutes under foil, then slice and fan on top of the cabbage. Duck fat that you have poured off is good for roasting potatoes. Cranberry or redcurrant jelly goes well on the side.',
    ing: [
      '4 duck breasts, about 700 g',
      '1 tsp salt',
      '1 red cabbage, about 800 g, shredded',
      '1 onion, sliced',
      '2 apples, peeled and grated',
      '150 ml red wine',
      '3 tbsp red wine vinegar',
      '2 tbsp caster sugar',
      '1 g cloves',
      '1 bay leaf',
      '1 tbsp duck fat or butter'
    ],
    st: [
      'Melt the fat in a large pan and soften the onion for 5 minutes. Add the cabbage, apples, wine, vinegar, sugar, cloves and bay.',
      'Cover and cook over low heat for 50 minutes, stirring now and then, until tender. Add water if it dries.',
      'Score the duck skin in a criss cross pattern and season with the salt.',
      'Put the breasts skin side down in a cold pan, turn the heat to medium and cook for 8 minutes, pouring off the fat. Turn and cook for 4 minutes.',
      'Rest for 5 minutes under foil, slice and serve on the cabbage.'
    ],
    tips: [
      'Start the duck in a cold pan.',
      'Pour off the fat as it collects.',
      'Cook the cabbage a day ahead if you like.'
    ],
    pair: ['Potato dumplings', 'Roast potatoes', 'Red wine'],
    store: 'The cabbage keeps for 4 days in the fridge. Eat the duck fresh.',
    nut: [765, 35, 37, 53, 7, 25, 770]
  },

  'wildschweinbraten': {
    d: 'A boned wild boar shoulder roasted for 2 hours 30 minutes on a bed of vegetables with red wine and juniper.',
    meta: 'Wildschweinbraten, German roast wild boar with red wine, juniper and root vegetables, cooked for 2 hours 30 minutes. Six servings, ready in 3 hours.',
    kw: ['wildschweinbraten', 'german roast wild boar', 'wild boar roast with red wine', 'boar shoulder with juniper', 'game roast german'],
    why: 'A table of six in the hunting season, and the roast that German families make in November. Wildschweinbraten is a roast of wild boar shoulder, lean and dark, cooked slowly with root vegetables, red wine and juniper until it is soft enough to cut with a spoon.\n\nBoar is leaner and denser than pork and dries out fast, so it needs moist, low heat. Rub the joint with salt, pepper and crushed juniper, and brown it all over in lard in a casserole. Lift it out, soften carrots, celery and onion in the same pot, add tomato purée and wine and boil for 3 minutes. **Add the stock to come a third of the way up the joint**, not more, and cover the pot with a tight lid.\n\nRoast at 160C for 2 hours 30 minutes, turning the meat once. A skewer should meet no resistance. Rest it for 15 minutes, then slice thick. Strain the juices, boil them to a gravy and finish with a spoonful of redcurrant jelly. Pork shoulder works if you cannot find boar. Serve with red cabbage and dumplings.',
    ing: [
      '1.5 kg wild boar or pork shoulder, boned',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '6 g juniper berries, crushed',
      '3 tbsp lard or oil',
      '2 carrots, chopped',
      '2 celery sticks, chopped',
      '2 onions, chopped',
      '2 tbsp tomato purée',
      '300 ml red wine',
      '300 ml beef stock',
      '1 tbsp redcurrant jelly'
    ],
    st: [
      'Heat the oven to 160C. Rub the meat with the salt, pepper and juniper and brown it in the lard in a casserole for 10 minutes. Lift out.',
      'Soften the carrots, celery and onions for 8 minutes. Stir in the purée, add the wine and boil for 3 minutes.',
      'Return the meat, add the stock and cover tightly.',
      'Roast for 2 hours 30 minutes, turning once.',
      'Rest the meat for 15 minutes. Strain the juices, boil to a gravy with the jelly and serve with the sliced meat.'
    ],
    tips: [
      'Cook boar slowly in a covered pot.',
      'Do not drown the joint in liquid.',
      'Rest before slicing.'
    ],
    pair: ['Red cabbage', 'Potato dumplings', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 2 months.',
    nut: [611, 46, 10, 43, 2, 5, 740]
  },

  'forelle-mullerin': {
    d: 'Whole trout dusted with flour, fried in butter until crisp and served with lemon, parsley and browned butter, in 25 minutes.',
    meta: 'Forelle Müllerin, whole trout in flour fried in butter with lemon and parsley, cooked for 15 minutes. Two servings, ready in 25 minutes.',
    kw: ['forelle mullerin', 'trout miller style', 'whole trout fried in butter', 'german pan fried trout', 'forelle muellerin recipe'],
    why: 'A dinner for two, and one of the quickest ways to cook a fish. Forelle Müllerin means trout, miller\'s wife style: a whole fish dusted with flour, fried in butter and finished with lemon and parsley. The flour is the miller\'s touch.\n\nBuy fresh whole trout, gutted, and pat them dry inside and out. Season the cavity with salt and a slice of lemon, dust the skin lightly with flour and shake off the excess. **Get the butter foaming before the fish goes in**, so that the flour sets at once instead of absorbing the fat. Use a pan large enough for both fish, or cook one at a time.\n\nFry over medium heat for 6 minutes on each side, until the skin is crisp and gold and the flesh comes away from the bone at the thickest part. Lift out. Add more butter to the pan, let it turn nut brown, then add lemon juice and parsley and pour it over the fish. Serve with boiled potatoes and a green salad.',
    ing: [
      '2 whole trout, about 700 g',
      '1 tsp salt',
      '4 slices lemon, plus wedges to serve',
      '40 g plain flour',
      '60 g butter',
      '2 tbsp lemon juice',
      '3 tbsp chopped parsley',
      '400 g boiled potatoes, to serve'
    ],
    st: [
      'Pat the trout dry. Season the cavities with half the salt and tuck in the lemon slices.',
      'Dust the fish with the flour and shake off the excess.',
      'Melt 30 g of the butter in a wide pan until foaming. Fry the trout for 6 minutes on each side until crisp. Lift out.',
      'Add the remaining butter and cook until nut brown. Stir in the lemon juice, parsley and remaining salt.',
      'Pour over the fish and serve with the potatoes.'
    ],
    tips: [
      'Dry the fish before flouring.',
      'Wait for the butter to foam.',
      'Serve at once while the skin is crisp.'
    ],
    pair: ['Boiled potatoes', 'Green salad', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [943, 78, 61, 43, 9, 5, 1380]
  },

  'backfisch': {
    d: 'Cod or haddock fillets in a light beer batter, fried until crisp and served with remoulade and potato salad.',
    meta: 'Backfisch, German beer battered fish fillets fried until crisp, with remoulade, cooked for 15 minutes. Four servings, ready in 35 minutes.',
    kw: ['backfisch', 'german battered fish', 'beer battered fish with remoulade', 'german fried fish fillets', 'backfisch recipe'],
    why: 'Backfisch is a plain German fried fish, and the name only describes the method: fish that is fried in batter. It is the dish of the lakeside and the fish stall, and the batter is a thin crisp coat, lighter than the English kind.\n\nUse firm white fish such as cod, haddock or pollock, cut into 3 cm thick pieces. Pat them dry, season with salt and a squeeze of lemon and dust with flour so the batter grips. Mix the batter from flour, beer, an egg yolk and salt, and fold in the whisked white at the end. **Do not overmix**, as a few lumps are better than a tough coat. Chill the batter for 10 minutes.\n\nDip each piece and let the excess run off, then fry in oil at 180C for 4 minutes, turning once, until deep gold. Drain on kitchen paper. Serve with remoulade, lemon and a cold potato salad. Fry in two batches so the oil stays hot, and eat the first batch while the second cooks.',
    ing: [
      '700 g cod or haddock fillets, in 3 cm pieces',
      '1 lemon, juice, plus wedges to serve',
      '1 tsp salt',
      '40 g plain flour, for dusting',
      '150 g plain flour, for the batter',
      '200 ml lager',
      '1 egg, separated',
      '90 ml rapeseed oil absorbed, from 1 litre for frying',
      '120 g remoulade, to serve'
    ],
    st: [
      'Pat the fish dry, sprinkle with the salt and lemon juice and dust with the 40 g flour.',
      'Whisk the 150 g flour, lager, yolk and a pinch of salt until just smooth. Whisk the white to stiff peaks and fold in. Chill for 10 minutes.',
      'Heat the oil to 180C in a deep pan.',
      'Dip the fish in the batter and fry in two batches for 4 minutes, turning once, until deep gold. Drain on kitchen paper.',
      'Serve with the remoulade and lemon wedges.'
    ],
    tips: [
      'Dust the fish with flour so the batter holds.',
      'Do not overmix the batter.',
      'Fry in batches to keep the oil hot.'
    ],
    pair: ['Potato salad', 'Remoulade', 'Lemon wedges', 'Lager'],
    store: 'Best fresh.',
    nut: [662, 38, 42, 38, 2, 2, 860]
  },

  'heringssalat': {
    d: 'A cold salad of pickled herring, apple, beetroot, gherkin and onion in a soured cream dressing, made in 20 minutes.',
    meta: 'Heringssalat, German herring salad with pickled beetroot, apple and soured cream: 20 minutes of work, no cooking, then 2 hours in the fridge.',
    kw: ['heringssalat', 'german herring salad', 'herring salad with beetroot and apple', 'pickled herring salad with sour cream', 'heringssalat recipe'],
    why: 'A table for six at New Year or Easter, and the salad that German families put out on a cold buffet. Heringssalat is a pink, tangy mix of pickled herring, beetroot, apple, gherkin and onion in a soured cream dressing, and it is made ahead because it tastes better after a night in the fridge.\n\nDrain the herring and cut it into small pieces. Dice the other ingredients to the same size, so that every forkful has a bit of each. **Add the beetroot last**, because it stains the whole salad pink and the colour then spreads to everything. The dressing is soured cream thinned with a splash of the beetroot pickling liquid, with a little mustard, sugar and dill.\n\nFold everything together gently, taste, and adjust with vinegar or sugar. The salad should be sharp, with a sweet note from the apple. Cover and chill for at least 2 hours, ideally overnight. Serve on dark bread, or with boiled potatoes, as a fish course or a light lunch. It keeps for 3 days.',
    ing: [
      '400 g pickled herring fillets, drained and diced',
      '2 tart apples, diced',
      '200 g pickled beetroot, diced',
      '100 g gherkins, diced',
      '1 red onion, finely diced',
      '250 g soured cream',
      '100 g plain yoghurt',
      '3 tbsp beetroot pickling liquid',
      '1 tbsp sharp mustard',
      '1 tsp caster sugar',
      '3 tbsp chopped dill'
    ],
    st: [
      'Mix the soured cream, yoghurt, pickling liquid, mustard, sugar and dill.',
      'Fold in the herring, apples, gherkins and onion.',
      'Add the beetroot last and fold in gently.',
      'Cover and chill for at least 2 hours before serving.'
    ],
    tips: [
      'Cut everything to the same small size.',
      'Add the beetroot last.',
      'Let it stand overnight for the best flavour.'
    ],
    pair: ['Dark bread', 'Boiled potatoes', 'Boiled eggs'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [120, 'Chilling'],
    nut: [306, 13, 23, 18, 3, 17, 1010]
  },

  'nudelsalat-deutsch': {
    d: 'A cold German pasta salad of spirals, ham, peas, gherkins and a mayonnaise dressing, made in 25 minutes plus chilling.',
    meta: 'Nudelsalat, German pasta salad with ham, peas, gherkins and a creamy dressing, cooked for 10 minutes. Six servings, ready in 25 minutes plus chilling.',
    kw: ['nudelsalat deutsch', 'german pasta salad', 'pasta salad with ham and peas', 'creamy pasta salad with gherkins', 'nudelsalat recipe'],
    why: 'This is what to take to a barbecue in the first warm week of summer, since it feeds a crowd and gets better in the fridge. Nudelsalat is the German pasta salad, a creamy and slightly sharp mix of pasta, ham, peas and gherkins, and it appears at every garden party and school fete.\n\nCook the pasta until just tender and rinse it in cold water to stop it cooking and to wash off the surface starch. Drain it well. **Mix the dressing while the pasta cools**, from mayonnaise, soured cream, a spoonful of gherkin liquid, a little mustard and sugar. A dressing added to hot pasta is absorbed and the salad turns dry.\n\nFold in the diced ham, defrosted peas, chopped gherkins, sliced eggs and a little chopped onion. Taste and adjust the sharpness with more of the gherkin liquid. The salad should be quite wet when you make it, as the pasta absorbs the dressing while it stands. Chill for at least 1 hour. Serve with sausages or roast chicken.',
    ing: [
      '400 g fusilli',
      '200 g cooked ham, diced',
      '150 g frozen peas, defrosted',
      '100 g gherkins, diced',
      '4 hard boiled eggs, sliced',
      '1 small onion, finely chopped',
      '150 g mayonnaise',
      '150 g soured cream',
      '3 tbsp gherkin liquid',
      '1 tbsp mustard',
      '1 tsp caster sugar',
      '2 tbsp chopped chives'
    ],
    st: [
      'Boil the pasta in salted water for 10 minutes until just tender. Drain and rinse in cold water.',
      'Mix the mayonnaise, soured cream, gherkin liquid, mustard and sugar.',
      'Fold in the pasta, ham, peas, gherkins, eggs and onion.',
      'Chill for 1 hour. Stir, taste and scatter with the chives.'
    ],
    tips: [
      'Rinse the pasta in cold water.',
      'Make the dressing wetter than you think.',
      'Chill before serving.'
    ],
    pair: ['Sausages', 'Roast chicken', 'Green salad'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [590, 22, 58, 30, 4, 6, 920]
  },

  'frankfurter-wurstchen': {
    d: 'Thin pork sausages warmed in hot water for 10 minutes and served in pairs with mustard and bread, ready in 15 minutes.',
    meta: 'Frankfurter Würstchen, thin German pork sausages warmed in hot water, served in pairs with mustard, cooked for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['frankfurter wurstchen', 'frankfurt sausages', 'german frankfurters with mustard', 'frankfurter wuerstchen recipe', 'hot sausages in water'],
    why: 'It is the quickest supper in the German kitchen, and one of the oldest: a pair of thin pork sausages in a pot of hot water. Frankfurter Würstchen are lightly smoked, pale pink and cooked before they are sold, and the only job at home is to warm them through.\n\nThe water must be hot, not boiling, as a rolling boil splits the thin skins and washes out the fat. Bring the water to the boil, turn off the heat and let it settle for 2 minutes. **Lower the sausages in and cover the pan**, then leave them for 8 to 10 minutes. They plump up and the skin turns taut and glossy.\n\nServe a pair on each plate, with a pot of mustard, a bread roll and a spoonful of potato salad. In Frankfurt they are eaten with a dab of horseradish and a glass of the local apple wine. They are also good split and grilled for a minute to add a little colour. Eat at once.',
    ing: [
      '8 Frankfurter sausages, about 400 g',
      '2 litres water',
      '4 bread rolls',
      '4 tbsp mustard',
      '1 tbsp grated horseradish',
      '400 g potato salad, to serve'
    ],
    st: [
      'Bring the water to the boil in a wide pan, then take it off the heat for 2 minutes.',
      'Add the sausages, cover and leave for 10 minutes.',
      'Lift out and serve in pairs with the rolls, mustard, horseradish and potato salad.'
    ],
    tips: [
      'Never boil the sausages.',
      'Cover the pan to hold the heat.',
      'Serve at once.'
    ],
    pair: ['Mustard', 'Horseradish', 'Potato salad', 'Apple wine'],
    store: 'Best fresh.',
    nut: [450, 18, 36, 26, 4, 4, 1130]
  },

  'germknodel': {
    d: 'Fluffy steamed yeast dumplings filled with plum jam and topped with melted butter, poppy seeds and sugar, from a dough risen for 1 hour.',
    meta: 'Germknödel, Austrian steamed yeast dumplings filled with plum jam, with poppy seeds and butter, cooked for 20 minutes. Six servings, ready in 1 hour plus rising.',
    kw: ['germknodel', 'austrian yeast dumplings with plum jam', 'steamed yeast dumpling with poppy seeds', 'germknoedel recipe', 'tyrolean dumplings with plum jam'],
    why: 'Keep the lid on and do not peek. That is the tip every Austrian ski hut cook gives for germknödel, the big, soft, steamed yeast dumplings sold in the Alps, filled with plum jam and covered in melted butter and poppy seeds. Open the pan early and the steam escapes and the dumplings collapse.\n\nThe dough is soft and enriched, with flour, milk, egg, butter and yeast, and it rises for 1 hour. Divide it into six balls, flatten each, put a spoonful of thick plum jam in the middle and pinch the dough shut around it, smooth side up. **Let the filled dumplings rise for 20 minutes** on a floured cloth before they steam. Steam them over boiling water for 20 minutes without lifting the lid.\n\nTo serve, pour melted butter over each dumpling and scatter with poppy seeds mixed with icing sugar. Some cooks add vanilla sauce around the plate. They are best eaten at once, since a cold germknödel is stodgy. Cut one open and the hot jam runs out.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '50 g caster sugar',
      '1 tsp salt',
      '250 ml lukewarm milk',
      '1 egg',
      '60 g butter, softened',
      '180 g thick plum jam',
      '80 g butter, melted',
      '40 g ground poppy seeds',
      '40 g icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, milk, egg and softened butter and knead for 8 minutes. Cover and leave to rise for 1 hour.',
      'Divide into 6 and flatten each. Put 30 g of jam in the middle and pinch shut. Set smooth side up on a floured cloth and leave for 20 minutes.',
      'Set the dumplings on baking paper in a steamer over boiling water, cover and steam for 20 minutes without lifting the lid.',
      'Pour the melted butter over and scatter with the poppy seeds and icing sugar.'
    ],
    tips: [
      'Do not lift the lid while steaming.',
      'Pinch the dough tightly around the jam.',
      'Serve straight from the steamer.'
    ],
    pair: ['Vanilla sauce', 'Mulled wine', 'Hot chocolate'],
    store: 'Best fresh.',
    rest: [60, 'Rising'],
    nut: [621, 13, 86, 25, 5, 21, 430]
  },

  'marillenknodel': {
    d: 'Austrian dumplings of potato dough wrapped round whole apricots and rolled in buttered breadcrumbs, simmered for 15 minutes.',
    meta: 'Marillenknödel, Austrian apricot dumplings of potato dough rolled in buttered crumbs, cooked for 15 minutes. Six servings, ready in 55 minutes.',
    kw: ['marillenknodel', 'austrian apricot dumplings', 'apricot dumplings in potato dough', 'marillenknoedel recipe', 'wachau apricot dumplings'],
    why: 'Plain potatoes, a ripe apricot and a lump of sugar: three simple things become a famous Austrian summer dessert. Marillenknödel are dumplings made with a soft potato and flour dough wrapped around a whole apricot, simmered and rolled in buttered breadcrumbs.\n\nThe dough must be made with floury potatoes, boiled in their skins, peeled while hot and pressed through a ricer so they are dry. Mix with flour, semolina, an egg, butter and a pinch of salt just until it comes together. **Do not knead it**, as overworking makes a tough, rubbery dough. Wrap a flat disc of dough around each apricot, which has the stone replaced with a sugar cube.\n\nRoll them into smooth balls between wet hands, then slip them into barely simmering salted water and cook for 15 minutes. Meanwhile toast breadcrumbs in butter with sugar and cinnamon until golden. Lift the dumplings out with a slotted spoon and roll them in the crumbs. Serve hot, with a dusting of icing sugar.',
    ing: [
      '500 g floury potatoes',
      '150 g plain flour',
      '30 g semolina',
      '1 egg',
      '30 g butter, softened',
      '1 pinch salt',
      '6 ripe apricots, about 360 g',
      '24 g sugar cubes',
      '80 g butter, for the crumbs',
      '100 g dry breadcrumbs',
      '40 g caster sugar',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes. Peel while hot and press through a ricer. Cool.',
      'Mix with the flour, semolina, egg, softened butter and salt into a soft dough. Do not knead.',
      'Stone the apricots and replace each stone with a sugar cube. Wrap each in a disc of dough and roll smooth.',
      'Simmer the dumplings in salted water for 15 minutes.',
      'Fry the breadcrumbs in the 80 g butter with the sugar and cinnamon for 5 minutes until golden. Roll the dumplings in them.'
    ],
    tips: [
      'Use floury potatoes and press them dry.',
      'Do not knead the dough.',
      'Simmer, do not boil, so they stay whole.'
    ],
    pair: ['Icing sugar', 'Vanilla sauce', 'Apricot brandy'],
    store: 'Best fresh. Reheat in butter.',
    nut: [453, 9, 66, 17, 5, 18, 160]
  },

  'palatschinken': {
    d: 'Thin Austrian pancakes spread with apricot jam, rolled up and dusted with icing sugar, ready in 30 minutes.',
    meta: 'Palatschinken, thin Austrian pancakes rolled with apricot jam, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['palatschinken', 'austrian pancakes', 'palatschinken with apricot jam', 'thin austrian crepes', 'palatschinken recipe'],
    why: 'Pour in just enough batter to coat the pan, and swirl it at once. That is the short, sharp rule for Palatschinken, the thin Austrian pancakes that sit somewhere between a French crêpe and a Hungarian palacsinta. They are filled with jam and rolled, and eaten for dessert or for a light lunch.\n\nThe batter is flour, milk, eggs, a pinch of salt and a little melted butter, whisked smooth. Let it stand for 10 minutes so the flour swells. **Cook them in a hot, lightly buttered pan** and wipe the pan with a buttered paper towel between pancakes. Half a ladle of batter, swirled quickly, is enough for a 24 cm pan.\n\nCook for 1 minute until the edges lift and the underside is pale gold, flip and cook for 30 seconds. Stack them on a plate under a clean cloth. Spread each with apricot jam, roll up and dust with icing sugar. You can also fill them with sweet curd cheese or chocolate sauce, or cut them into strips for a soup.',
    ing: [
      '250 g plain flour',
      '500 ml whole milk',
      '3 eggs',
      '1 pinch salt',
      '30 g butter, melted',
      '20 g butter, for the pan',
      '200 g apricot jam',
      '2 tbsp icing sugar'
    ],
    st: [
      'Whisk the flour, milk, eggs, salt and melted butter to a smooth batter. Stand for 10 minutes.',
      'Heat a 24 cm pan and brush with a little of the pan butter.',
      'Pour in half a ladle of batter and swirl. Cook for 1 minute until the edges lift, flip and cook for 30 seconds. Repeat to make 10, stacking under a cloth.',
      'Spread each with a spoonful of jam and roll up. Dust with the icing sugar.'
    ],
    tips: [
      'Pour in only enough batter to coat the pan.',
      'Rest the batter for 10 minutes.',
      'Keep the pancakes warm under a cloth.'
    ],
    pair: ['Apricot jam', 'Chocolate sauce', 'Whipped cream'],
    store: 'Keeps for 2 days in the fridge, filled. The plain pancakes freeze for 2 months.',
    nut: [603, 15, 93, 19, 2, 43, 160]
  },

  'topfenstrudel': {
    d: 'A rolled strudel of thin pastry filled with sweet curd cheese, raisins and lemon, baked for 40 minutes and dusted with sugar.',
    meta: 'Topfenstrudel, Austrian strudel of thin pastry with sweet curd cheese and raisins, baked for 40 minutes. Eight servings, ready in 1 hour 20 minutes.',
    kw: ['topfenstrudel', 'austrian curd cheese strudel', 'quark strudel with raisins', 'sweet cheese strudel', 'topfenstrudel recipe'],
    why: 'Why does strudel pastry have to be stretched so thin? Because it bakes to a flaky, crisp shell only when you can read a newspaper through it. Topfenstrudel is the Austrian curd cheese strudel, and the filling is simple: curd cheese, eggs, sugar, lemon, raisins and a little semolina to absorb moisture.\n\nThe dough is flour, water, oil and a pinch of salt, kneaded for 10 minutes until it is smooth and elastic and left to rest under a warm bowl for 20 minutes. **Stretch it over the backs of your hands on a floured cloth**, working from the centre outwards until it is almost transparent. If you tear it, patch it with a scrap, because a hole or two will not matter once it is rolled.\n\nBrush the sheet with melted butter, spread the filling in a band along one edge, and roll it up using the cloth to lift. Set it on a tray seam side down, brush with butter and bake at 190C for 40 minutes, until the pastry is deep gold and crisp. Cool for 10 minutes, cut with a serrated knife and dust with icing sugar.',
    ing: [
      '250 g plain flour',
      '125 ml lukewarm water',
      '2 tbsp rapeseed oil',
      '1 pinch salt',
      '500 g curd cheese or quark',
      '2 eggs',
      '80 g caster sugar',
      '1 lemon, zest',
      '30 g semolina',
      '80 g raisins',
      '80 g butter, melted',
      '2 tbsp icing sugar'
    ],
    st: [
      'Knead the flour, water, oil and salt for 10 minutes until smooth. Rest under a warm bowl for 20 minutes.',
      'Mix the curd cheese, eggs, sugar, zest, semolina and raisins.',
      'Heat the oven to 190C. Stretch the dough very thin on a floured cloth. Brush with some of the butter.',
      'Spread the filling in a band along one edge and roll up using the cloth. Set seam side down on a lined tray and brush with butter.',
      'Bake for 40 minutes until deep gold. Cool for 10 minutes and dust with the icing sugar.'
    ],
    tips: [
      'Stretch the dough until it is nearly transparent.',
      'Use the cloth to lift and roll the strudel.',
      'Cut with a serrated knife.'
    ],
    pair: ['Vanilla sauce', 'Coffee', 'Whipped cream'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven.',
    nut: [423, 13, 50, 19, 2, 22, 60]
  },

  'backhendl': {
    d: 'Viennese fried chicken pieces in flour, egg and breadcrumbs fried until golden, served with lemon and potato salad.',
    meta: 'Backhendl, Viennese breaded fried chicken with lemon and parsley, cooked for 25 minutes. Four servings, ready in 50 minutes.',
    kw: ['backhendl', 'viennese fried chicken', 'austrian breaded chicken', 'backhendl with potato salad', 'wiener backhendl recipe'],
    why: 'Why does Austrian fried chicken stay juicy? Because the pieces are small, the coating is thin and the fry is fast. Backhendl is the Viennese fried chicken, a dish of breaded chicken joints cooked in hot fat until the crumbs are golden, and it is eaten with lemon and a cold salad.\n\nUse bone in chicken thighs and drumsticks, cut through the joint, or breast cut into thick strips. Season well with salt and pepper and a little lemon. Coat in flour, then beaten egg, then fine breadcrumbs, pressing the crumbs on firmly. **Rest the coated pieces for 10 minutes** so the crust sets and does not fall off in the pan.\n\nFry in oil at 160C for about 12 minutes, turning, until the crust is deep gold and the juices run clear. Do not hurry the oil, as too hot a pan burns the crumbs before the meat is cooked. Drain on kitchen paper and serve with lemon wedges, fried parsley and potato salad dressed with vinegar and oil.',
    ing: [
      '1.2 kg chicken thighs and drumsticks, bone in',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '60 g plain flour',
      '3 eggs, beaten',
      '150 g fine breadcrumbs',
      '100 ml rapeseed oil absorbed, from 1 litre for frying',
      '1 lemon, in wedges',
      '8 g parsley sprigs',
      '400 g potato salad, to serve'
    ],
    st: [
      'Season the chicken with the salt and pepper. Coat in the flour, the egg and then the breadcrumbs, pressing on firmly. Rest for 10 minutes.',
      'Heat the oil to 160C in a deep pan.',
      'Fry the chicken in 3 batches for 12 minutes each, turning, until deep gold and cooked through.',
      'Drain on kitchen paper. Fry the parsley sprigs for 20 seconds.',
      'Serve with the lemon, fried parsley and potato salad.'
    ],
    tips: [
      'Rest the coated chicken before frying.',
      'Keep the oil at 160C so the chicken cooks through.',
      'Fry in batches.'
    ],
    pair: ['Potato salad', 'Lemon wedges', 'Cucumber salad', 'Dry white wine'],
    store: 'Best fresh. Reheat in a hot oven.',
    nut: [894, 72, 57, 42, 5, 4, 1180]
  },

  'rindsuppe': {
    d: 'A clear Viennese beef broth made by simmering beef and bones with root vegetables for 2 hours 30 minutes, served with noodles.',
    meta: 'Rindsuppe, clear Viennese beef broth with root vegetables and noodles, cooked for 2 hours 30 minutes. Six servings, ready in 2 hours 50 minutes.',
    kw: ['rindsuppe', 'viennese beef broth', 'clear austrian beef soup', 'austrian beef consomme with noodles', 'rindsuppe recipe'],
    why: 'Most home beef broths come out cloudy and greasy, and the fix is to start with cold water, skim, and never let it boil. Rindsuppe is the clear, golden Viennese beef soup, the first course of the Sunday lunch, and it takes its flavour from slow simmering and a few well chosen vegetables.\n\nUse a mix of cuts: marrow bones for body, shin for flavour and a piece of brisket or tafelspitz for the meat to serve. Put them in cold water, bring slowly to a simmer and skim the grey foam that rises. **Keep the pot at a bare tremble**, with a bubble now and then. Add the onion halves, charred in a dry pan, which give the broth its amber colour, along with carrot, celeriac, leek and parsley stalks.\n\nSimmer for 2 hours 30 minutes, then strain through a cloth. Cook the noodles separately and add them to each bowl, with slices of the boiled beef, a little grated nutmeg and chives. The broth can be made ahead and chilled so the fat sets on top and can be lifted off. It freezes very well.',
    ing: [
      '800 g beef shin, on the bone',
      '600 g beef brisket',
      '500 g marrow bones',
      '3 litres cold water',
      '2 onions, halved and charred in a dry pan',
      '3 carrots, in chunks',
      '200 g celeriac, in chunks',
      '1 leek, halved',
      '10 g parsley stalks',
      '2 g black peppercorns',
      '1 bay leaf',
      '1 tsp salt',
      '150 g fine soup noodles',
      '3 tbsp chopped chives'
    ],
    st: [
      'Put the bones, shin and brisket in a large pot with the cold water and bring slowly to a simmer. Skim the foam for 10 minutes.',
      'Add the onions, carrots, celeriac, leek, parsley stalks, peppercorns and bay. Simmer at a bare tremble for 2 hours 30 minutes.',
      'Strain the broth through a cloth. Slice the brisket.',
      'Boil the noodles in salted water for 4 minutes and drain.',
      'Season the broth with the salt and serve with the noodles, sliced beef and chives.'
    ],
    tips: [
      'Start with cold water and skim.',
      'Char the onion for the colour.',
      'Never let the broth boil.'
    ],
    pair: ['Horseradish', 'Crusty bread', 'Boiled beef'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [623, 51, 35, 31, 4, 7, 610]
  }
};
