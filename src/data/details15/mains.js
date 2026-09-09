'use strict';

/**
 * Volume fifteen — French mains.
 *
 * Thirty-two dishes, weighted towards what people actually cook rather than
 * what appears on tasting menus. The braises are here because they are how
 * cheap cuts become worth eating, and the offal because France has never
 * shared the English squeamishness about it — foie de veau and rognons à la
 * moutarde are both fifteen-minute weeknight dishes.
 */

module.exports = {
  'hachis-parmentier': {
    d: 'Braised beef minced by hand under a potato purée and baked. The French version predates the English one and is made from leftover pot-au-feu rather than raw mince.',
    meta: 'Slow-braised beef chopped by hand under a buttery potato purée and baked until the top is deeply browned.',
    kw: ['hachis parmentier', 'french shepherds pie', 'hachis parmentier recipe', 'beef potato bake', 'parmentier'],
    why: 'The meat is braised and then chopped, not fried from raw mince, and the difference is total: braised beef has already given up its collagen and tastes of the wine and stock it cooked in, where raw mince browned in a pan tastes of browned mince. This is the dish that leftover pot-au-feu was invented for. The purée wants an alarming amount of butter — a quarter of the potato weight — because it has to stay soft over an hour in the oven.',
    ing: [
      '# For the beef',
      '900 g beef shin or cheek, in large pieces',
      '2 onions, chopped',
      '2 carrots, chopped',
      '3 tbsp olive oil',
      '2 tbsp tomato purée',
      '400 ml red wine',
      '500 ml beef stock',
      '3 bay leaves',
      '4 thyme sprigs',
      '1.5 tsp fine sea salt',
      '# For the purée',
      '1.2 kg floury potatoes, peeled',
      '250 g butter, diced',
      '200 ml whole milk, warmed',
      '1.5 tsp fine sea salt',
      '0.25 tsp ground nutmeg',
      '# To finish',
      '60 g Gruyère, grated',
      '30 g breadcrumbs'
    ],
    st: [
      'Brown the beef hard in the oil, 8 minutes. Add the onions and carrots and cook 10 minutes.',
      'Stir in the tomato purée, then add the wine and boil 3 minutes. Add the stock, bay, thyme and salt.',
      'Cover and simmer 150 minutes, until the beef falls apart. Lift it out and reduce the liquid to about 200 ml.',
      'Chop the beef by hand on a board into a rough hash and moisten it with the reduced sauce. It should be damp, not wet.',
      'Boil the potatoes 25 minutes until soft, drain, and pass through a ricer or mouli.',
      'Beat in the butter a handful at a time, then the warm milk, salt and nutmeg, until glossy and soft.',
      'Heat the oven to 200°C / 400°F. Spread the beef in a dish, cover with the purée, fork the top into ridges, scatter with cheese and breadcrumbs, and bake 45 minutes until deeply browned.'
    ],
    tips: [
      'Braise then chop. Raw mince is a different, lesser dish.',
      'A quarter of the potato weight in butter. It is not a misprint.',
      'Fork ridges into the top — they are what browns.'
    ],
    pair: ['Green salad', 'A glass of Côtes du Rhône', 'Cornichons'],
    store: 'Refrigerated for 3 days. Reheat at 180°C for 25 minutes. It freezes assembled for 3 months.',
    nut: [685, 32, 48, 40, 5, 6, 820]
  },

  'poulet-basquaise': {
    d: 'Chicken braised with peppers, tomato and piment d\'Espelette from the Basque country. The peppers are cooked down to nothing, which is the whole flavour.',
    meta: 'Chicken braised with peppers, tomato and Espelette pepper until the peppers collapse entirely into the sauce.',
    kw: ['poulet basquaise', 'basque chicken', 'poulet basquaise recipe', 'chicken peppers tomato', 'piperade chicken'],
    why: 'The peppers need forty minutes before the chicken joins them, and most recipes rush this. Peppers cooked only until soft stay watery and taste raw against the tomato; cooked right down they collapse into a jammy base that is the actual sauce. Piment d\'Espelette is worth buying — it is fruity rather than merely hot, and paprika with cayenne is a poor substitute for the specific flavour this dish is built on.',
    ing: [
      '8 chicken thighs, bone in and skin on',
      '2 tsp fine sea salt',
      '4 tbsp olive oil',
      '3 red peppers, sliced',
      '3 green peppers, sliced',
      '2 onions, sliced',
      '6 garlic cloves, sliced',
      '150 g bayonne ham or prosciutto, diced',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '2 tsp piment d\'Espelette',
      '3 thyme sprigs',
      '2 bay leaves',
      '150 ml dry white wine',
      '# To finish',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Salt the chicken and brown it skin-side down in the oil, 8 minutes, until the skin is deep gold. Turn, give it 3 minutes, and lift out.',
      'Add the onions and peppers to the pan and cook over medium heat for 40 minutes, stirring occasionally, until they have collapsed and darkened. This is the sauce.',
      'Add the garlic and ham and cook 3 minutes.',
      'Stir in the tomato purée and cook 2 minutes, then the wine, and boil 2 minutes.',
      'Add the tomatoes, Espelette, thyme and bay.',
      'Return the chicken skin-side up, so the skin stays above the sauce, and simmer uncovered 35 minutes.',
      'Rest 10 minutes, scatter with parsley, and serve with rice or bread.'
    ],
    tips: [
      'Forty minutes on the peppers before anything else. They are the sauce.',
      'Skin above the sauce so it stays crisp.',
      'Real Espelette. Paprika and cayenne are not the same thing.'
    ],
    pair: ['Rice', 'Country bread', 'A glass of Irouléguy'],
    store: 'Refrigerated for 3 days and better on day two. It freezes for 3 months.',
    nut: [545, 40, 20, 33, 5, 10, 890]
  },

  'poule-au-pot': {
    d: 'A whole chicken stuffed and poached with vegetables, the broth served first and the meat after. Henri IV wanted every peasant to have one on a Sunday.',
    meta: 'A whole chicken stuffed with a bread and ham forcemeat and poached with vegetables, broth served first and meat after.',
    kw: ['poule au pot', 'french boiled chicken', 'poule au pot recipe', 'stuffed poached chicken', 'henri iv chicken'],
    why: 'A bare shiver, never a boil. Boiling shreds the chicken and clouds the broth irretrievably, and the broth is half the dish — it comes to the table first, as a course in its own right, and should be clear enough to read a newspaper through. Skim relentlessly for the first fifteen minutes, and sew the cavity shut rather than trusting the stuffing to stay put; it swells considerably and will otherwise cloud the pot.',
    ing: [
      '1 chicken, about 2 kg',
      '# For the stuffing',
      '150 g stale breadcrumbs',
      '150 ml whole milk',
      '150 g bayonne ham or gammon, finely chopped',
      'The chicken liver, chopped',
      '2 shallots, finely chopped',
      '2 garlic cloves, crushed',
      '30 g flat-leaf parsley, chopped',
      '1 egg',
      '1 tsp fine sea salt',
      '0.25 tsp ground nutmeg',
      '# For the pot',
      '4 carrots, halved',
      '4 leeks, tied in a bundle',
      '3 turnips, quartered',
      '4 celery sticks',
      '1 onion studded with 3 cloves',
      '3 bay leaves',
      '1 tbsp black peppercorns',
      '2 tsp fine sea salt',
      '3 litres water'
    ],
    st: [
      'Soak the breadcrumbs in the milk 10 minutes, then squeeze them out and mix with the ham, liver, shallots, garlic, parsley, egg, salt and nutmeg.',
      'Pack the stuffing into the chicken cavity, leaving room for it to swell, and sew or truss it shut firmly.',
      'Put the chicken in a large pot with the water, onion, bay, peppercorns and salt. Bring slowly to a bare shiver.',
      'Skim the grey foam off relentlessly for the first 15 minutes. Never let it boil.',
      'Simmer very gently 90 minutes, then add all the vegetables and cook a further 45 minutes.',
      'Lift the chicken out and let it rest. Strain a ladleful of broth per person and serve that first, as a course.',
      'Carve the chicken, slice the stuffing, and serve with the vegetables, coarse salt, mustard and cornichons.'
    ],
    tips: [
      'A bare shiver. Boiling ruins both the meat and the broth.',
      'Skim hard for the first fifteen minutes.',
      'Sew the cavity shut — the stuffing swells.'
    ],
    pair: ['Coarse salt and mustard', 'Cornichons', 'A glass of Jurançon'],
    store: 'Refrigerated for 3 days in the broth. The broth freezes for 3 months; the meat is best not frozen.',
    nut: [585, 48, 28, 30, 4, 8, 920]
  },

  'navarin-printanier': {
    d: 'Lamb braised with the first vegetables of spring, each added at its own moment. The vegetables are the point, not a garnish.',
    meta: 'Lamb braised until tender with spring vegetables added in sequence so each arrives at the table properly cooked.',
    kw: ["navarin d'agneau", 'navarin printanier', 'lamb spring stew', 'navarin recipe', 'french lamb stew'],
    why: 'Everything goes in at a different moment and the sequence is the recipe: turnips and carrots need twenty-five minutes, new potatoes fifteen, peas and beans four. Cooked together from the start, half of them are grey mush by the time the lamb is ready. Dusting the browned lamb with sugar before the flour is the small step people skip — it caramelises in the pan and gives the sauce its colour and a rounder flavour.',
    ing: [
      '1.2 kg lamb shoulder, cut into 5 cm pieces',
      '2 tsp fine sea salt',
      '3 tbsp olive oil',
      '1 tsp caster sugar',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '4 garlic cloves, crushed',
      '900 ml lamb or chicken stock',
      '3 bay leaves',
      '4 thyme sprigs',
      '# The vegetables, in order',
      '12 baby turnips, trimmed',
      '12 baby carrots, trimmed',
      '400 g new potatoes, halved',
      '150 g green beans, topped',
      '200 g peas, fresh or frozen',
      '# To finish',
      '30 g flat-leaf parsley, chopped'
    ],
    st: [
      'Salt the lamb and brown it hard in the oil in two batches, 8 minutes total.',
      'Return it all to the pan, sprinkle over the sugar and let it caramelise for 2 minutes, turning.',
      'Dust with the flour and cook 2 minutes, then stir in the tomato purée and garlic.',
      'Add the stock, bay and thyme, bring to a simmer, and cook covered 60 minutes.',
      'Add the turnips and carrots and cook 15 minutes.',
      'Add the potatoes and cook 15 minutes more.',
      'Add the beans and peas and cook a final 5 minutes, so they stay green. Rest 10 minutes, scatter with parsley and serve.'
    ],
    tips: [
      'The sugar before the flour. It is what colours the sauce.',
      'Vegetables in sequence, not all at once.',
      'Peas and beans for four minutes only.'
    ],
    pair: ['Country bread', 'A glass of Loire red', 'Green salad'],
    store: 'Refrigerated for 3 days, though the green vegetables dull. It freezes for 3 months.',
    nut: [595, 42, 38, 28, 8, 9, 880]
  },

  'daube-provencale': {
    d: 'Beef marinated in red wine with orange peel and cooked for three and a half hours. Provence rather than Burgundy — olives, orange and no bacon.',
    meta: 'Beef marinated overnight in red wine with orange peel and cooked slowly with olives until it falls apart.',
    kw: ['daube provencale', 'provencal beef stew', 'daube recipe', 'beef red wine orange', 'french daube'],
    why: 'Dried orange peel is the ingredient that makes a daube a daube rather than a bourguignon, and it goes in with the marinade so it has time to give up its oils. The marinating is not optional either — overnight in the wine both flavours the meat and, more usefully, means the wine has already lost its raw edge before the long cook begins. Do not brown the meat too hard after marinating: wet meat will not colour, so pat it genuinely dry first.',
    ing: [
      '1.4 kg beef shin or cheek, in large pieces',
      '# For the marinade',
      '750 ml red wine',
      '2 onions, sliced',
      '3 carrots, sliced',
      '6 garlic cloves, crushed',
      '2 strips dried orange peel',
      '4 bay leaves',
      '6 thyme sprigs',
      '1 tbsp black peppercorns',
      '# For the daube',
      '4 tbsp olive oil',
      '2 tbsp tomato purée',
      '400 ml beef stock',
      '2 tsp fine sea salt',
      '150 g black olives, pitted',
      '# To finish',
      '30 g flat-leaf parsley, chopped',
      '1 strip fresh orange zest'
    ],
    st: [
      'Combine the beef with all the marinade ingredients, cover, and refrigerate at least 720 minutes.',
      'Lift the meat out and pat it thoroughly dry. Strain the marinade, keeping both the liquid and the vegetables.',
      'Brown the dried beef hard in the oil in batches, 10 minutes total. Lift out.',
      'Fry the drained marinade vegetables 10 minutes, then stir in the tomato purée and cook 2 minutes.',
      'Return the beef, pour in the strained marinade and the stock, add the salt, and bring to a bare simmer.',
      'Cover and cook very gently 180 minutes, or in a 150°C oven, until the beef gives to a spoon.',
      'Add the olives and cook 20 minutes more. Skim the fat, scatter with parsley and fresh orange zest, and serve with potatoes or pasta.'
    ],
    rest: [720, 'marinating overnight'],
    tips: [
      'Dried orange peel. It is what separates this from a bourguignon.',
      'Pat the meat properly dry or it will not brown.',
      'Olives at the end — an hour in the pot makes them bitter.'
    ],
    pair: ['Buttered pasta', 'Country bread', 'A glass of Bandol'],
    store: 'Refrigerated for 4 days and much better on day two. It freezes for 3 months.',
    nut: [625, 48, 20, 36, 3, 7, 890]
  },

  'carbonade-flamande': {
    d: 'Beef braised in dark beer with a slice of mustard-spread bread laid on top, which dissolves and thickens the sauce. Sweet, sour and unmistakably northern.',
    meta: 'Beef braised in dark Belgian beer with mustard-spread bread laid on top to dissolve and thicken the sauce.',
    kw: ['carbonade flamande', 'flemish beef stew', 'carbonade recipe', 'beef beer stew', 'belgian beef'],
    why: 'The bread is the thickener and it must be laid on top rather than stirred in — it dissolves gradually from below over the two and a half hours, and the mustard on it disperses through the sauce as it goes. Stirred in at the start it simply becomes sludge. Use a genuinely dark beer and add the vinegar and sugar together at the end: the sweet-sour balance is the whole character of the dish and it is far easier to adjust once you can taste the reduced sauce.',
    ing: [
      '1.2 kg beef chuck, cut into large pieces',
      '2 tsp fine sea salt',
      '3 tbsp beef dripping or oil',
      '4 onions, sliced thinly',
      '2 tbsp plain flour',
      '500 ml dark Belgian beer, such as a dubbel',
      '300 ml beef stock',
      '3 bay leaves',
      '4 thyme sprigs',
      '# The lid',
      '2 thick slices country bread',
      '3 tbsp Dijon mustard',
      '# To finish',
      '2 tbsp red wine vinegar',
      '1 tbsp dark brown sugar',
      '0.5 tsp black pepper'
    ],
    st: [
      'Salt the beef and brown it hard in the dripping in two batches, 10 minutes. Lift out.',
      'Cook the onions in the same pan over medium heat for 20 minutes, until soft and well coloured.',
      'Dust with the flour and cook 2 minutes.',
      'Return the beef, pour in the beer and stock, and add the bay and thyme.',
      'Spread the bread thickly with the mustard and lay it mustard-side down on the surface. Do not stir it in.',
      'Cover and cook at a bare simmer, or in a 150°C oven, for 150 minutes. The bread will disappear.',
      'Stir the sauce to break up any remaining bread, then add the vinegar, sugar and pepper. Taste and balance the sweet against the sour before serving.'
    ],
    tips: [
      'Bread on top, mustard down, never stirred in.',
      'A properly dark beer — a lager gives you nothing.',
      'Balance the vinegar and sugar at the end, by taste.'
    ],
    pair: ['Chips', 'Buttered noodles', 'The same beer'],
    store: 'Refrigerated for 4 days and better on day two. It freezes for 3 months.',
    nut: [580, 45, 26, 31, 3, 8, 920]
  },

  'choucroute': {
    d: 'Sauerkraut cooked in riesling with a collection of pork and sausages piled on top. Alsace, and the sauerkraut should be rinsed before it goes near the pot.',
    meta: 'Sauerkraut rinsed and braised in riesling with juniper and a collection of smoked pork cuts and sausages.',
    kw: ['choucroute garnie', 'sauerkraut alsace', 'choucroute recipe', 'sauerkraut pork sausages', 'alsatian choucroute'],
    why: 'Rinsing the sauerkraut is what makes this palatable rather than punishing. Jarred kraut is packed in a brine far too sour to eat in quantity, and a rinse and a squeeze brings it back to something that can absorb the wine and fat over two hours. The meats go in by cooking time — smoked hock early, sausages in the last twenty minutes — because boiled sausage is a poor thing and they only need heating through.',
    ing: [
      '1.5 kg jarred sauerkraut',
      '150 g goose fat or lard',
      '2 onions, sliced',
      '500 ml dry riesling',
      '300 ml chicken stock',
      '15 juniper berries',
      '6 cloves',
      '3 bay leaves',
      '1 tbsp black peppercorns',
      '1 tsp caraway seeds',
      '# The meats, in order',
      '1 smoked pork hock, about 800 g',
      '400 g smoked pork belly in one piece',
      '6 Alsace sausages or frankfurters',
      '4 Toulouse sausages',
      '# To serve',
      '8 waxy potatoes, boiled',
      'Strong mustard'
    ],
    st: [
      'Tip the sauerkraut into a colander and rinse it thoroughly under cold running water, then squeeze it out hard in handfuls.',
      'Melt the fat and soften the onions 10 minutes. Tie the juniper, cloves, bay, peppercorns and caraway in a muslin bag.',
      'Add the sauerkraut, wine, stock and spice bag, and bury the hock and pork belly in it.',
      'Cover and cook at a bare simmer, or in a 160°C oven, for 90 minutes.',
      'Brown the Toulouse sausages in a separate pan and add them to the pot.',
      'Cook 20 minutes more, adding the Alsace sausages for the last 10 minutes only — they need warming, not cooking.',
      'Pile the sauerkraut on a warm platter with the meats sliced over it, the boiled potatoes around, and mustard on the table.'
    ],
    tips: [
      'Rinse and squeeze the kraut. Straight from the jar it is inedible in quantity.',
      'Meats by cooking time. Boiled sausage is a sad thing.',
      'A muslin bag for the spices, or you eat juniper berries whole.'
    ],
    pair: ['Boiled potatoes', 'Strong mustard', 'The rest of the riesling'],
    store: 'Refrigerated for 4 days and better reheated. The sauerkraut base freezes for 3 months; the sausages do not.',
    nut: [845, 52, 28, 58, 8, 6, 1980]
  },

  'magret-de-canard': {
    d: 'Duck breast started in a cold dry pan so the fat renders out slowly and the skin turns to glass. Fifteen minutes, and almost all of it is unattended.',
    meta: 'Duck breast started skin-down in a cold dry pan so the fat renders slowly and the skin crisps to glass before resting.',
    kw: ['magret de canard', 'duck breast', 'magret recipe', 'seared duck breast', 'french duck'],
    why: 'A cold pan is the entire technique. Duck skin carries a thick layer of fat that needs eight or nine minutes to render out, and a hot pan seizes the skin shut before that can happen, leaving a flabby fat layer under a browned surface. Starting cold and bringing the heat up slowly lets the fat run out and the skin dry and crisp in what it leaves behind. Score the skin but never cut into the meat, or the juices escape into the pan.',
    ing: [
      '2 duck breasts, about 350 g each',
      '1.5 tsp flaky sea salt',
      '0.5 tsp black pepper',
      '# For the sauce',
      '2 shallots, finely chopped',
      '150 ml red wine',
      '200 ml chicken stock',
      '1 tbsp redcurrant jelly',
      '1 tbsp red wine vinegar',
      '20 g cold butter, diced',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Score the skin in a close diamond pattern, cutting through the fat but never into the meat.',
      'Salt the skin generously and leave 20 minutes at room temperature.',
      'Pat the skin dry and lay the breasts skin-side down in a cold, dry frying pan. Now set it over medium-low heat.',
      'Render for 9 to 11 minutes as the fat runs out, pouring the fat off into a bowl two or three times. The skin should be deep brown and glassy.',
      'Turn and cook 3 minutes on the flesh side for pink. Lift onto a warm plate to rest for 8 minutes.',
      'Pour off all but a spoonful of fat, soften the shallots 2 minutes, add the wine and boil until nearly gone, then the stock, jelly and vinegar. Reduce by half.',
      'Whisk in the cold butter off the heat. Slice the duck across the grain and spoon the sauce around it.'
    ],
    tips: [
      'Cold pan, no oil. This is the whole method.',
      'Pour the fat off as it renders and keep it for potatoes.',
      'Rest it eight minutes, which is longer than feels necessary.'
    ],
    pair: ['Sarladaise potatoes', 'Green beans', 'A glass of Cahors'],
    store: 'Best immediately. Refrigerated for 2 days; excellent cold and sliced into a salad.',
    nut: [545, 42, 8, 37, 0, 6, 780]
  },

  'poulet-roti': {
    d: 'Roast chicken with butter under the skin and lemon inside, started on its side. The French method turns the bird twice so the breast is basted by its own legs.',
    meta: 'Roast chicken with butter worked under the skin, roasted on one side then the other before finishing breast up.',
    kw: ['poulet roti', 'french roast chicken', 'poulet roti recipe', 'roast chicken butter', 'perfect roast chicken'],
    why: 'Roasting the bird on each side before finishing it breast-up is what keeps the breast from drying: for the first two-thirds of the cook the breast is not facing the heat at all, and the leg above it bastes it as its fat renders. Butter under the skin rather than on it does the same job from the other direction. The bird also comes out at 70°C and rises to 74°C while resting, so pulling it at the target temperature overcooks it.',
    ing: [
      '1 chicken, about 1.6 kg',
      '100 g butter, softened',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '1 lemon, halved',
      '1 head garlic, halved across',
      '6 thyme sprigs',
      '# For the tray',
      '2 onions, thickly sliced',
      '150 ml white wine',
      '# To finish',
      '150 ml chicken stock',
      '20 g cold butter'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Work the softened butter under the breast skin with your fingers, pushing it as far back as it will go.',
      'Salt the bird inside and out and put the lemon, garlic and thyme in the cavity.',
      'Lay the onion slices in a roasting tin and sit the chicken on one side, on top of them. Pour the wine into the tin.',
      'Roast 25 minutes, then turn the bird onto its other side and roast 25 minutes more.',
      'Turn it breast-up and roast a final 25 minutes, until the thigh reads 70°C. It will rise as it rests.',
      'Lift the bird onto a warm plate and rest 20 minutes, breast down for the first 10.',
      'Skim the tin, add the stock, boil hard scraping the base, and whisk in the cold butter. Carve and serve with the juices.'
    ],
    tips: [
      'Butter under the skin, not on it.',
      'Turn it twice. The breast should face the heat last.',
      'Out at 70°C — it carries on cooking while it rests.'
    ],
    pair: ['Roast potatoes', 'Green salad', 'A glass of Burgundy'],
    store: 'Refrigerated for 3 days. The carcass makes stock. Cooked meat freezes for 2 months.',
    nut: [625, 48, 6, 45, 1, 2, 890]
  },

  'gigot-d-agneau': {
    d: 'Leg of lamb studded with garlic and anchovy and roasted pink over potatoes that catch the juices. The anchovy is not detectable as anchovy.',
    meta: 'Leg of lamb studded with garlic and anchovy and roasted over sliced potatoes that catch every drop of the juices.',
    kw: ["gigot d'agneau", 'roast leg of lamb', 'gigot recipe', 'lamb garlic anchovy', 'french roast lamb'],
    why: 'The anchovy dissolves completely during roasting and what it leaves is not fishiness but depth — it is doing the job salt does, with glutamates on top. Slit the meat and push a sliver of garlic and a scrap of anchovy right into each cut rather than laying them on the surface, where they simply burn. The potatoes underneath are half the reason to make it, so use a tray that fits them in one dense layer.',
    ing: [
      '1 leg of lamb, about 2.2 kg',
      '8 garlic cloves, cut into slivers',
      '8 anchovy fillets, each cut into 4',
      '3 tbsp olive oil',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '6 rosemary sprigs',
      '# For the potatoes',
      '1.5 kg waxy potatoes, sliced 5 mm thick',
      '2 onions, sliced',
      '4 garlic cloves, sliced',
      '400 ml chicken stock',
      '3 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '4 thyme sprigs'
    ],
    st: [
      'Heat the oven to 220°C / 425°F. Make 30 or so deep slits all over the lamb with a small sharp knife.',
      'Push a sliver of garlic and a scrap of anchovy deep into each slit, so nothing is left on the surface.',
      'Rub the lamb with the oil, salt and pepper.',
      'Toss the potatoes and onions with the sliced garlic, oil, salt and thyme and spread them in a large tray. Pour the stock over.',
      'Sit a rack over the potatoes and lay the lamb on it, with the rosemary tucked underneath, so the juices drip down.',
      'Roast 20 minutes at 220°C, then lower to 180°C / 350°F and roast 70 minutes for pink — 55°C at the thickest point.',
      'Rest the lamb 25 minutes on a warm plate while the potatoes go back into the oven to crisp. Carve and serve together.'
    ],
    tips: [
      'Push the garlic and anchovy right in. On the surface they burn.',
      'A rack over the potatoes so they catch everything.',
      'Twenty-five minutes of rest, minimum.'
    ],
    pair: ['Green beans', 'A glass of Bordeaux', 'Redcurrant jelly'],
    store: 'Refrigerated for 3 days. Cold lamb is excellent; reheating it is not. The bone makes stock.',
    nut: [745, 52, 42, 42, 5, 4, 920]
  },

  'epaule-d-agneau-confite': {
    d: 'Lamb shoulder cooked for seven hours until it can be served with a spoon. No knife on the table, which is the traditional test.',
    meta: 'Lamb shoulder cooked for seven hours at a low temperature until it can be pulled apart and served with a spoon.',
    kw: ['seven hour lamb', "épaule d'agneau", 'slow lamb shoulder', 'lamb confit recipe', 'french slow lamb'],
    why: 'Seven hours at 130°C is not an exaggeration for effect. Shoulder is full of connective tissue that only converts to gelatine after a very long time below simmering point, and at four hours it is merely well-done lamb — the transformation into something spoonable happens in the last two. Keep the dish tightly sealed so nothing evaporates; the small amount of liquid at the bottom is meant to steam the meat, not reduce.',
    ing: [
      '1 lamb shoulder on the bone, about 2 kg',
      '2 tbsp olive oil',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '# For the pot',
      '2 onions, thickly sliced',
      '4 carrots, thickly sliced',
      '1 head garlic, halved across',
      '400 ml white wine',
      '300 ml chicken stock',
      '4 bay leaves',
      '6 thyme sprigs',
      '4 rosemary sprigs',
      '# To finish',
      '2 tbsp flat-leaf parsley, chopped',
      'Flaky sea salt'
    ],
    st: [
      'Heat the oven to 130°C / 265°F.',
      'Rub the lamb with the oil, salt and pepper and brown it all over in a hot pan, 8 minutes.',
      'Lay the onions, carrots and garlic in a deep casserole and sit the lamb on top.',
      'Pour in the wine and stock — it should come no more than a third of the way up the meat — and tuck in the herbs.',
      'Cover with a sheet of baking paper pressed onto the meat and then the lid, or a double layer of foil crimped tightly.',
      'Cook 420 minutes without opening it, until the meat pulls away from the bone at a touch.',
      'Lift the lid, raise the oven to 220°C and give it 12 minutes to colour the top. Skim the juices, scatter with parsley and serve with a spoon.'
    ],
    tips: [
      'The full seven hours. At four it is merely well-done.',
      'Seal it tightly — the liquid should steam, not reduce.',
      'Twelve minutes at high heat at the end for colour.'
    ],
    pair: ['Boulangère potatoes', 'Flageolet beans', 'A glass of Languedoc red'],
    store: 'Refrigerated for 4 days and outstanding reheated. It freezes for 3 months.',
    nut: [685, 54, 12, 45, 3, 5, 890]
  },

  'steak-tartare': {
    d: 'Raw beef chopped by hand and seasoned at the table with capers, shallot, mustard and egg yolk. Chopped, never minced.',
    meta: 'Raw beef chopped by hand and seasoned with capers, shallot, mustard, Tabasco and an egg yolk folded through.',
    kw: ['steak tartare', 'beef tartare', 'steak tartare recipe', 'raw beef dish', 'french tartare'],
    why: 'Chopped by hand with a heavy knife, never minced. A mincer crushes the fibres and presses out the juices, giving a wet paste; a knife leaves clean-cut pieces that stay distinct and hold their texture. Everything must be cold, including the board and the knife, and the beef should go back into the fridge if it starts to warm. Buy fillet or rump from a butcher you trust and use it the day you buy it.',
    ing: [
      '600 g beef fillet or rump, very fresh, all sinew removed',
      '# To season',
      '2 shallots, very finely chopped',
      '3 tbsp capers, rinsed and chopped',
      '4 cornichons, finely chopped',
      '2 tbsp Dijon mustard',
      '2 tsp Worcestershire sauce',
      '1 tsp Tabasco, or to taste',
      '2 tbsp olive oil',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '30 g flat-leaf parsley, chopped',
      '# To finish',
      '4 egg yolks',
      'Toasted sourdough',
      'Chips'
    ],
    st: [
      'Chill the beef, a board and a heavy knife for 20 minutes.',
      'Slice the beef thinly, then cut the slices into strips and the strips across into a small dice. Work quickly and keep it cold.',
      'Do not use a mincer or a processor at any point.',
      'Fold in the shallots, capers, cornichons, mustard, Worcestershire, Tabasco, oil, salt, pepper and parsley with a fork.',
      'Taste and adjust — it should be sharp, salty and noticeably hot.',
      'Shape into four mounds on cold plates and make a hollow in the top of each.',
      'Sit an egg yolk in each hollow and serve immediately with toast and chips, to be mixed at the table.'
    ],
    tips: [
      'Hand-chopped. A mincer gives you paste.',
      'Everything cold — beef, board and knife.',
      'Buy the beef the day you eat it.'
    ],
    pair: ['Chips', 'Green salad', 'A glass of Beaujolais'],
    store: 'None. Make and eat within the hour.',
    nut: [420, 35, 6, 28, 1, 2, 890]
  },

  'entrecote-marchand-de-vin': {
    d: 'Sirloin with a red wine and shallot sauce built in the pan the steak came out of. Marchand de vin means wine merchant, who presumably had the wine to spare.',
    meta: 'Sirloin steak rested while a red wine and shallot sauce is built in the pan, finished with cold butter off the heat.',
    kw: ['entrecote marchand de vin', 'steak red wine sauce', 'marchand de vin recipe', 'french steak sauce', 'shallot wine sauce'],
    why: 'The butter goes in off the heat and cold, in pieces, and this is the difference between a glossy sauce and a greasy one. Cold butter whisked into a warm reduction emulsifies; butter melted into a hot pan simply splits into fat and liquid. The wine also has to be reduced almost to nothing — au sec, until the pan is nearly dry — before the stock goes in, or the sauce keeps a raw alcoholic edge.',
    ing: [
      '2 sirloin steaks, about 350 g each and 3 cm thick',
      '1.5 tsp flaky sea salt',
      '1 tsp black pepper',
      '1 tbsp sunflower oil',
      '# For the sauce',
      '4 shallots, very finely chopped',
      '300 ml red wine',
      '200 ml beef stock',
      '1 tsp red wine vinegar',
      '80 g cold butter, diced',
      '1 tbsp flat-leaf parsley, chopped',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Take the steaks out of the fridge 30 minutes ahead and salt them well.',
      'Get a heavy pan very hot with the oil. Sear the steaks 3 minutes a side for medium-rare, then stand them on the fat edge for 1 minute.',
      'Lift onto a warm plate and rest 8 minutes while you make the sauce.',
      'Pour off the fat, lower the heat, and soften the shallots in the pan for 3 minutes, scraping up the browned bits.',
      'Add the wine and boil until the pan is nearly dry — this takes about 6 minutes and is not optional.',
      'Add the stock and reduce by half, then add the vinegar and any juices from the resting plate.',
      'Take the pan off the heat and whisk in the cold butter a few pieces at a time until glossy. Add the parsley, slice the steak and spoon the sauce over.'
    ],
    tips: [
      'Reduce the wine until the pan is nearly dry.',
      'Cold butter, off the heat, in pieces.',
      'Add the resting juices to the sauce — they are the best of it.'
    ],
    pair: ['Chips', 'Watercress', 'The rest of the red'],
    store: 'Best immediately. The sauce can be made ahead to the stock stage and finished with butter to order.',
    nut: [685, 48, 8, 50, 1, 3, 920]
  },

  'cordon-bleu': {
    d: 'Chicken breast wrapped around ham and cheese, breaded and fried. Swiss in origin, French in execution, and the seal is the only difficult part.',
    meta: 'Chicken breast beaten thin, rolled around ham and Gruyère, double-breaded and fried until the cheese just runs.',
    kw: ['cordon bleu', 'chicken cordon bleu', 'cordon bleu recipe', 'stuffed chicken ham cheese', 'breaded chicken'],
    why: 'Double breading is what holds the cheese in. One coat of crumb cracks as the chicken swells in the pan and the cheese finds the gap; flour, egg, crumb, then egg and crumb again gives a shell that survives. Chilling the breaded rolls for half an hour firms everything and is the other half of the seal. Beat the breast thin enough to roll without cracking — 5 mm — and overlap the ham so no cheese touches the edge.',
    ing: [
      '4 large chicken breasts',
      '8 slices cooked ham',
      '200 g Gruyère, sliced',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tsp Dijon mustard',
      '# For the crumb',
      '100 g plain flour',
      '3 eggs, beaten',
      '200 g fine dried breadcrumbs',
      '# To fry',
      '150 ml sunflower oil',
      '50 g butter'
    ],
    st: [
      'Butterfly each chicken breast and open it out, then beat between sheets of cling film to an even 5 mm.',
      'Season the flesh and spread thinly with mustard.',
      'Lay two slices of ham on each, then the cheese, keeping everything 2 cm from the edges.',
      'Roll up tightly, tucking the ends in, and press the seam closed.',
      'Roll each in flour, then egg, then crumb — and then egg and crumb a second time. The double coat is what holds the cheese in.',
      'Chill 30 minutes to firm the crust.',
      'Fry in the oil and butter over medium heat, 5 minutes a side, turning carefully, until deep gold and cooked through. Rest 5 minutes before cutting.'
    ],
    tips: [
      'Double breading. A single coat cracks and leaks.',
      'Keep the filling 2 cm from every edge.',
      'Chill before frying so the crust sets.'
    ],
    pair: ['Green salad', 'Sautéed potatoes', 'Lemon wedges'],
    store: 'Refrigerated for 2 days; reheat at 190°C for 12 minutes. They freeze breaded and raw for 2 months.',
    nut: [745, 62, 42, 36, 2, 3, 1290]
  },

  'rognons-a-la-moutarde': {
    d: 'Lamb kidneys seared hard and finished in a mustard cream sauce. Fifteen minutes, and the kidneys must leave the pan while still pink.',
    meta: 'Lamb kidneys seared hard and finished in a mustard and cream sauce, returned to the pan only at the last moment.',
    kw: ['rognons a la moutarde', 'kidneys mustard cream', 'rognons recipe', 'french kidneys', 'lamb kidney dish'],
    why: 'Kidneys go from tender to rubber in about ninety seconds, so they are seared, removed, and returned only to warm through at the very end. Any liquid they release into the pan gets discarded rather than added to the sauce, because it is bitter — this is the step people skip and then wonder why the dish tastes of ammonia. The mustard goes in off the heat as well, since boiling destroys its pungency entirely.',
    ing: [
      '10 lamb kidneys, about 600 g',
      '300 ml whole milk, for soaking',
      '2 tbsp sunflower oil',
      '30 g butter',
      '3 shallots, finely chopped',
      '150 g button mushrooms, quartered',
      '100 ml brandy',
      '250 ml double cream',
      '2 tbsp Dijon mustard',
      '1 tbsp wholegrain mustard',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Halve the kidneys and snip out the white core with scissors. Soak them in the milk for 20 minutes, then drain and pat completely dry.',
      'Get the oil very hot in a heavy pan and sear the kidneys in one layer for 60 seconds a side, until browned outside and still pink within.',
      'Lift them onto a plate immediately. Pour away any liquid that collects under them — it is bitter.',
      'Add the butter to the pan and cook the shallots and mushrooms 5 minutes.',
      'Pour in the brandy and let it bubble away almost completely, 2 minutes.',
      'Add the cream and simmer 4 minutes until it thickens and coats a spoon. Season.',
      'Off the heat, stir in both mustards, return the kidneys with any juices, and warm through for 30 seconds only. Scatter with parsley and serve.'
    ],
    tips: [
      'Sixty seconds a side. They toughen almost instantly.',
      'Throw away the liquid they release. It is bitter.',
      'Mustard off the heat, or it loses everything.'
    ],
    pair: ['Rice', 'Sautéed potatoes', 'A glass of red Burgundy'],
    store: 'Best immediately. Kidneys do not reheat.',
    nut: [485, 32, 8, 36, 1, 4, 780]
  },

  'foie-de-veau': {
    d: 'Calf liver with onions cooked slowly to sweetness and a splash of vinegar at the end. Lyon does it best and does not overcomplicate it.',
    meta: 'Calf liver seared briefly over onions cooked slowly to sweetness, sharpened with a splash of vinegar off the heat.',
    kw: ['foie de veau', 'calf liver onions', 'liver lyonnaise', 'foie de veau recipe', 'french liver'],
    why: 'The onions take twenty-five minutes and the liver takes ninety seconds, so they cannot share a pan for long. Cook the onions right down to a sweet golden tangle first, set them aside, then sear the liver in a screaming pan. Liver must go in dry and unfloured for a real crust, and come out while the centre is still rosy — grey liver is grainy and slightly metallic, and no sauce will bring it back.',
    ing: [
      '600 g calf liver, sliced 1 cm thick',
      '3 large onions, sliced thinly',
      '50 g butter',
      '2 tbsp sunflower oil',
      '1 tsp caster sugar',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '3 tbsp red wine vinegar',
      '20 g butter',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Cook the onions in the butter over medium-low heat for 25 minutes with the sugar and a pinch of salt, until soft, golden and sweet. Scrape onto a plate.',
      'Pat the liver slices completely dry and season them just before cooking.',
      'Heat the oil in the same pan until it is genuinely smoking.',
      'Sear the liver in a single layer, in batches if needed, for 60 to 75 seconds a side. It should be browned outside and rosy within.',
      'Lift the liver out onto a warm plate.',
      'Return the onions to the pan, add the vinegar and let it bubble and reduce for 45 seconds, scraping the base.',
      'Whisk in the last of the butter, pile the onions over the liver, scatter with parsley and serve at once.'
    ],
    tips: [
      'Onions first and slowly, liver second and fast.',
      'Dry liver, smoking pan, no flour.',
      'Rosy in the middle. Grey liver is ruined liver.'
    ],
    pair: ['Mashed potato', 'Green salad', 'A glass of Beaujolais'],
    store: 'Best immediately. Liver does not reheat well at all.',
    nut: [420, 34, 18, 24, 2, 8, 720]
  },

  'boudin-noir-pommes': {
    d: 'Black pudding fried with apples cooked down in butter. Sweet against iron, and about as good as twenty minutes of cooking gets.',
    meta: 'Black pudding fried until crisp and served with apples cooked down in butter and a splash of cider vinegar.',
    kw: ['boudin noir aux pommes', 'black pudding apples', 'boudin noir recipe', 'french black pudding', 'blood sausage apple'],
    why: 'The boudin is cooked whole in its skin and split only at the table, because the filling is loose and will collapse into the pan if the skin is broken while it is hot. It also needs a gentle heat: high heat bursts the casing and the interior spits out. The apples want to keep some shape, so they go in cut into thick wedges rather than slices and are turned rarely — the flat faces should caramelise while the pieces stay whole.',
    ing: [
      '4 boudin noir sausages, about 500 g',
      '3 firm apples, such as Braeburn, cored and cut into thick wedges',
      '50 g butter',
      '1 tbsp sunflower oil',
      '1 tbsp caster sugar',
      '2 tbsp cider vinegar',
      '0.75 tsp fine sea salt',
      '0.25 tsp black pepper',
      '# To finish',
      '2 tbsp flat-leaf parsley, chopped',
      'Mashed potato, to serve'
    ],
    st: [
      'Melt half the butter in a frying pan and add the apple wedges in a single layer with the sugar.',
      'Cook over medium heat for 10 minutes, turning only twice, until the flat faces are caramelised and the wedges still hold their shape.',
      'Add the vinegar, let it bubble for 30 seconds, then scrape the apples onto a plate.',
      'Wipe the pan, add the oil and the rest of the butter, and set over medium-low heat.',
      'Prick each boudin once and fry them whole, turning gently, for 10 minutes, until the skins are crisp and they are hot through. Do not use high heat or the casings burst.',
      'Return the apples to warm through for a minute.',
      'Season, scatter with parsley, and serve the boudin whole over mashed potato with the apples alongside, splitting them at the table.'
    ],
    tips: [
      'Cook the sausages whole and split at the table.',
      'Gentle heat, or the casing bursts.',
      'Turn the apples twice, not constantly.'
    ],
    pair: ['Mashed potato', 'Cider', 'Dijon mustard'],
    store: 'Best immediately. Refrigerated for 2 days; reheat gently in a pan.',
    nut: [585, 24, 26, 44, 4, 18, 1180]
  },

  'endives-au-jambon': {
    d: 'Chicory braised, wrapped in ham, covered in béchamel and baked. The bitterness of the chicory is the point and is usually mishandled.',
    meta: 'Chicory braised in butter and lemon, wrapped in ham, covered in béchamel and baked until browned and bubbling.',
    kw: ['endives au jambon', 'chicory ham gratin', 'endives au jambon recipe', 'belgian endive bake', 'ham chicory bechamel'],
    why: 'The chicory has to be braised and then squeezed dry before it is wrapped, and skipping either step gives you a watery gratin swimming in liquid. Chicory holds a great deal of water and releases all of it in the oven. A pinch of sugar and a squeeze of lemon in the braising liquid tempers the bitterness without removing it — the aim is to make it pleasant, not to hide it, since bitterness is the reason the dish works against the ham and cream.',
    ing: [
      '8 heads chicory',
      '40 g butter',
      '1 tbsp caster sugar',
      '2 tbsp lemon juice',
      '1 tsp fine sea salt',
      '150 ml water',
      '8 slices cooked ham',
      '# For the béchamel',
      '60 g butter',
      '60 g plain flour',
      '700 ml whole milk',
      '0.5 tsp ground nutmeg',
      '1.25 tsp fine sea salt',
      '0.5 tsp white pepper',
      '# To finish',
      '120 g Gruyère, grated'
    ],
    st: [
      'Trim the chicory and cut a small cone out of the base of each, which is where most of the bitterness sits.',
      'Melt the butter in a wide pan, lay the chicory in it, and add the sugar, lemon, salt and water. Cover and braise 25 minutes, turning once, until completely tender.',
      'Lift them out and press them gently between two tea towels until they stop giving water. Be firm about this.',
      'Make the béchamel: melt the butter, stir in the flour, cook 3 minutes, then add the milk gradually, whisking. Cook 8 minutes until thick. Season with nutmeg, salt and pepper.',
      'Heat the oven to 200°C / 400°F. Wrap each chicory in a slice of ham and lay them in a buttered dish.',
      'Pour the béchamel over and scatter with the Gruyère.',
      'Bake 30 minutes, until browned and bubbling. Rest 5 minutes before serving.'
    ],
    tips: [
      'Cut the cone out of the base — that is where the bitterness concentrates.',
      'Press the braised chicory dry or the dish floods.',
      'Sugar and lemon temper the bitterness rather than removing it.'
    ],
    pair: ['Boiled potatoes', 'Green salad', 'A glass of Alsace white'],
    store: 'Refrigerated for 3 days. Reheat at 180°C for 20 minutes. It freezes for 2 months.',
    nut: [565, 32, 30, 36, 6, 12, 1420]
  },

  'quenelles-de-brochet': {
    d: 'Pike beaten with choux paste into weightless dumplings, poached and baked in a crayfish sauce. Lyon, and one of the last genuinely difficult things in the French repertoire.',
    meta: 'Pike beaten with choux paste and cream into light dumplings, poached gently and baked under a crayfish nantua sauce.',
    kw: ['quenelles de brochet', 'pike quenelles', 'quenelles recipe', 'lyon quenelles nantua', 'fish dumplings'],
    why: 'Everything is beaten cold over ice, because the mixture is an emulsion of fish protein, butter and cream and it will split the moment it warms. Bowl over ice, ingredients from the fridge, and stop the moment it comes together. The poaching water must not boil either — a shiver, no more — or the quenelles disintegrate. They double in size in the oven, so leave real space between them in the dish.',
    ing: [
      '# For the panade',
      '250 ml whole milk',
      '100 g butter',
      '150 g plain flour',
      '0.5 tsp fine sea salt',
      '3 eggs',
      '# For the quenelles',
      '500 g pike or other white fish fillet, skinned and boned',
      '150 g butter, softened',
      '3 egg whites',
      '150 ml double cream, very cold',
      '2 tsp fine sea salt',
      '0.5 tsp white pepper',
      '0.25 tsp ground nutmeg',
      '# For the sauce',
      '60 g butter',
      '40 g plain flour',
      '600 ml fish stock',
      '200 ml double cream',
      '3 tbsp tomato purée',
      '2 tbsp brandy',
      '150 g cooked crayfish tails',
      '1 tsp fine sea salt'
    ],
    st: [
      'Make the panade: boil the milk with the butter and salt, tip in the flour, beat to a ball, then beat over the heat 2 minutes. Cool, beat in the eggs one at a time, and chill until cold.',
      'Blitz the fish to a fine paste, then add the cold panade, the softened butter, egg whites, salt, pepper and nutmeg. Blitz again.',
      'Set the bowl over ice and beat in the very cold cream a little at a time. Stop as soon as it is smooth — it splits if it warms.',
      'Chill the mixture 60 minutes.',
      'Shape into ovals between two wet spoons and lower them into a wide pan of barely shivering salted water.',
      'Poach 12 minutes, turning once, until firm. Lift out onto a cloth to drain.',
      'For the sauce, make a roux with the butter and flour, add the stock and cream, then the tomato purée, brandy and salt. Simmer 8 minutes, add the crayfish. Sit the quenelles in a buttered dish with room to swell, pour the sauce over, and bake 20 minutes at 200°C until puffed and browned.'
    ],
    rest: [60, 'chilling the mixture'],
    tips: [
      'Everything cold, and the bowl over ice. Warmth splits it.',
      'A shiver, not a simmer, for the poaching.',
      'They double in the oven. Leave space.'
    ],
    pair: ['A glass of white Burgundy', 'Green salad', 'Rice'],
    store: 'Poached quenelles keep 2 days refrigerated and freeze for a month. Sauce and bake to order.',
    nut: [745, 32, 34, 55, 1, 5, 1180]
  },

  'bouchee-a-la-reine': {
    d: 'Puff pastry cases filled with chicken, sweetbreads and mushrooms in a cream sauce. Named for Queen Marie Leszczyńska, who is said to have needed cheering up.',
    meta: 'Puff pastry cases filled with chicken, mushrooms and sweetbreads in a white wine and cream sauce, baked briefly to serve.',
    kw: ['bouchee a la reine', 'vol au vent', 'bouchee a la reine recipe', 'chicken pastry case', 'french vol au vent'],
    why: 'The pastry cases are baked blind and empty, and filled only at the last minute — filling raises the steam that keeps puff pastry crisp, and a case that sits full for even ten minutes goes soft at the base. The filling must also be thick enough to hold its shape on a spoon, because a loose sauce goes straight through the pastry. Reduce it further than looks necessary; it loosens again as it warms in the oven.',
    ing: [
      '6 puff pastry vol-au-vent cases, or 500 g puff pastry',
      '1 egg, beaten',
      '# For the filling',
      '400 g chicken breast, diced',
      '200 g button mushrooms, quartered',
      '150 g veal sweetbreads, blanched and diced, or extra chicken',
      '60 g butter',
      '2 shallots, finely chopped',
      '40 g plain flour',
      '150 ml dry white wine',
      '400 ml chicken stock',
      '150 ml double cream',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '0.25 tsp ground nutmeg',
      '2 tbsp lemon juice',
      '# To finish',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Brush the pastry cases with beaten egg and bake them empty for 20 minutes, until risen and deep gold. Keep warm.',
      'Poach the diced chicken in the stock for 8 minutes, then lift it out with a slotted spoon and reserve the stock.',
      'Melt the butter and cook the shallots 3 minutes, then the mushrooms for 6 minutes until their water has gone.',
      'Stir in the flour and cook 2 minutes. Add the wine and boil 2 minutes, then the reserved stock gradually, whisking.',
      'Simmer 10 minutes until very thick, then add the cream and reduce a further 5 minutes. It should mound on a spoon.',
      'Return the chicken and sweetbreads, season with salt, pepper, nutmeg and lemon, and warm through.',
      'Fill the warm cases at the last possible moment, scatter with parsley, and serve immediately.'
    ],
    tips: [
      'Bake the cases empty. Filling them early softens the base.',
      'Reduce the filling further than feels right — it loosens in the oven.',
      'Fill at the last second.'
    ],
    pair: ['Green salad', 'A glass of white Burgundy', 'Buttered rice'],
    store: 'The filling keeps 2 days refrigerated. Cases keep 2 days in a tin. Assemble to order.',
    nut: [685, 34, 42, 41, 2, 4, 1090]
  },

  'moules-frites': {
    d: 'Mussels steamed open in white wine with shallots, and chips fried twice. The mussel liquor is the sauce and should not be thickened.',
    meta: 'Mussels steamed open in white wine with shallots and parsley, served with chips fried twice for a proper crust.',
    kw: ['moules frites', 'mussels and chips', 'moules mariniere frites', 'moules frites recipe', 'belgian mussels'],
    why: 'Chips are fried twice and the first fry is at a low temperature — 140°C — which cooks the potato through without colouring it. The second, at 190°C, does nothing but crisp the outside. One fry gives you either raw centres or burnt exteriors, and there is no way around it. For the mussels, the pan must be big enough that they are no more than three deep, or the ones at the bottom overcook while the top layer is still shut.',
    ing: [
      '# For the chips',
      '1.2 kg floury potatoes, cut into 1 cm chips',
      '1.5 litres sunflower oil',
      '1 tsp flaky sea salt',
      '# For the mussels',
      '2 kg mussels, scrubbed and debearded',
      '50 g butter',
      '4 shallots, finely chopped',
      '4 garlic cloves, sliced',
      '2 celery sticks, finely diced',
      '350 ml dry white wine',
      '3 bay leaves',
      '0.5 tsp black pepper',
      '# To finish',
      '100 ml double cream',
      '40 g flat-leaf parsley, chopped'
    ],
    st: [
      'Rinse the chips in cold water until it runs clear, then dry them thoroughly.',
      'Heat the oil to 140°C and fry the chips 8 minutes, until cooked through but still pale. Lift out and let them cool.',
      'Discard any mussels that are open and do not close when tapped.',
      'Melt the butter in a very large pan and cook the shallots, garlic and celery 5 minutes.',
      'Add the wine, bay and pepper and bring to a hard boil. Tip in the mussels, cover, and steam 4 to 5 minutes, shaking the pan twice, until they open. Discard any that stay shut.',
      'Lift the mussels into warm bowls. Add the cream to the liquor, boil 1 minute, stir in the parsley and pour over.',
      'Raise the oil to 190°C and fry the chips a second time for 3 minutes, until crisp and gold. Salt and serve immediately.'
    ],
    tips: [
      'Two fries: 140°C to cook, 190°C to crisp.',
      'A pan big enough that the mussels are three deep at most.',
      'Do not thicken the liquor. It is the sauce as it is.'
    ],
    pair: ['Mayonnaise', 'A cold Belgian beer', 'Bread for the liquor'],
    store: 'None. Mussels must be eaten immediately and chips do not keep.',
    nut: [745, 38, 68, 34, 6, 5, 1120]
  },

  'sole-normande': {
    d: 'Sole poached in cider and cream with mussels and prawns. Normandy, so cider and cream rather than wine and butter.',
    meta: 'Sole fillets poached in cider and finished in a cream sauce with mussels and prawns, glazed under the grill.',
    kw: ['sole normande', 'sole normandy', 'sole normande recipe', 'fish cider cream sauce', 'norman fish dish'],
    why: 'The sole poaches in the cider for four minutes and comes out; the sauce is finished afterwards. Fish left in a sauce while it reduces goes from delicate to woolly, and sole is the most delicate flat fish there is. The final glaze under a hot grill is what makes the dish look like itself — a spoonful of whipped cream folded into the sauce browns in ninety seconds and gives the glossy blistered top the classic version is known for.',
    ing: [
      '8 sole fillets, about 800 g',
      '1.25 tsp fine sea salt',
      '# For the poaching',
      '400 ml dry cider',
      '2 shallots, finely chopped',
      '30 g butter',
      '3 bay leaves',
      '# For the garnish',
      '500 g mussels, scrubbed',
      '200 g raw prawns, peeled',
      '150 g button mushrooms, sliced',
      '20 g butter',
      '# For the sauce',
      '40 g butter',
      '30 g plain flour',
      '200 ml double cream',
      '2 tbsp Calvados',
      '0.5 tsp white pepper',
      '# To glaze',
      '3 tbsp double cream, whipped to soft peaks'
    ],
    st: [
      'Steam the mussels open in 100 ml of the cider, 4 minutes. Shell them, keeping the liquor, and strain it.',
      'Fry the mushrooms in 20 g butter until dry, 6 minutes. Set aside with the prawns.',
      'Butter a wide pan, scatter in the shallots, lay the salted sole fillets on top and pour over the remaining cider and the mussel liquor. Add the bay.',
      'Cover with buttered paper and poach at a bare shiver 4 minutes, until just set. Lift the fillets out onto a warm gratin dish.',
      'Strain the poaching liquid. Make a roux with the 40 g butter and the flour, then whisk in the liquid and simmer 6 minutes.',
      'Add the cream, Calvados and pepper and reduce until it coats a spoon. Add the mussels, prawns and mushrooms and warm 2 minutes.',
      'Fold the whipped cream into the sauce, pour it over the sole and glaze under a hot grill for 90 seconds, until blistered and gold.'
    ],
    tips: [
      'Fish out of the pan before the sauce is reduced.',
      'Strain the poaching liquid — it is the base of everything.',
      'Whipped cream folded in at the end is what lets it glaze.'
    ],
    pair: ['Boiled potatoes', 'A glass of Norman cider', 'Green beans'],
    store: 'Best immediately. Do not reheat — the fish overcooks.',
    nut: [545, 42, 14, 34, 1, 6, 980]
  },

  'lotte-a-l-armoricaine': {
    d: 'Monkfish in a sauce of tomato, brandy and shellfish stock. Armoricaine after Brittany, though half of France still calls it américaine and argues about it.',
    meta: 'Monkfish poached in a flamed brandy, tomato and shellfish sauce, the fish removed while the sauce reduces.',
    kw: ["lotte a l'armoricaine", 'monkfish americaine', 'armoricaine sauce', 'lotte recipe', 'french monkfish'],
    why: 'The sauce is built on the trimmings — the monkfish bone and any prawn shells — browned hard before anything else goes in, and that is where the depth comes from. Skipping it leaves a thin tomato sauce with fish in it. The brandy is flamed rather than simmered off, which burns the alcohol away in seconds and leaves the aromatics behind; boiled off slowly it takes the perfume with it.',
    ing: [
      '1 kg monkfish tail, filleted, bone reserved',
      '1.5 tsp fine sea salt',
      '4 tbsp olive oil',
      '# For the sauce',
      '2 onions, chopped',
      '2 carrots, chopped',
      '4 garlic cloves, crushed',
      '100 ml brandy',
      '250 ml dry white wine',
      '3 tbsp tomato purée',
      '400 g tin chopped tomatoes',
      '500 ml fish stock',
      'Large pinch cayenne',
      '3 tarragon sprigs',
      '2 bay leaves',
      '# To finish',
      '30 g cold butter, diced',
      '20 g tarragon leaves, chopped',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Cut the monkfish into 4 cm medallions and salt them. Chop the bone into pieces.',
      'Brown the bone hard in 2 tbsp oil for 8 minutes, until it is properly coloured. This is the base of the sauce.',
      'Add the onions, carrots and garlic and cook 10 minutes.',
      'Pour in the brandy and set it alight, standing back. Let the flames die.',
      'Add the wine and boil 3 minutes, then the tomato purée, tomatoes, stock, cayenne, tarragon sprigs and bay. Simmer 25 minutes, then strain, pressing hard, and return the sauce to the pan.',
      'Sear the monkfish medallions in the remaining oil for 2 minutes a side, then slide them into the sauce and poach 6 minutes.',
      'Lift the fish out, reduce the sauce until it coats a spoon, whisk in the cold butter off the heat, and return the fish with the chopped herbs.'
    ],
    tips: [
      'Brown the bone. It is the whole depth of the sauce.',
      'Flame the brandy rather than boiling it off.',
      'Fish out while the sauce reduces.'
    ],
    pair: ['Rice', 'A glass of Muscadet', 'Crusty bread'],
    store: 'The sauce keeps 3 days refrigerated and freezes for 2 months. Cook the fish to order.',
    nut: [485, 44, 16, 24, 3, 8, 890]
  },

  'bar-en-croute-de-sel': {
    d: 'A whole fish buried in salt bound with egg white and baked. The crust sets hard, seals completely, and the fish steams in its own moisture.',
    meta: 'A whole sea bass buried in egg-white-bound salt and baked, so it steams inside a sealed crust that is cracked at the table.',
    kw: ['bar en croute de sel', 'salt crust fish', 'salt baked sea bass', 'croute de sel recipe', 'whole fish salt'],
    why: 'The fish is not gutted through the belly for this — or if it is, the cavity is packed with herbs and closed — because any opening lets salt into the flesh and the whole thing becomes inedible. Leave the scales on as well: they are a second barrier between the salt and the flesh, and they lift away with the skin when the crust comes off. Egg white is what makes the salt set into a solid shell rather than a heap.',
    ing: [
      '1 whole sea bass, about 1.5 kg, gutted through the gills if possible, scales left on',
      '# For the crust',
      '2 kg coarse sea salt',
      '4 egg whites',
      '100 ml water',
      '2 tbsp fennel seeds',
      '# For the cavity',
      '1 lemon, sliced',
      '6 thyme sprigs',
      '4 dill sprigs',
      '2 bay leaves',
      '# To serve',
      '4 tbsp olive oil',
      '2 tbsp lemon juice',
      '20 g dill, chopped'
    ],
    st: [
      'Heat the oven to 220°C / 425°F. Leave the scales on the fish and pack the cavity with the lemon, thyme, dill and bay.',
      'Mix the salt with the egg whites, water and fennel seeds until it feels like damp sand and holds together when squeezed.',
      'Spread a 1 cm layer of the salt on a baking tray, roughly the shape of the fish.',
      'Lay the fish on it and pack the remaining salt over the top and sides, pressing firmly so it is completely sealed with no gaps. Leave the head and tail poking out if you like.',
      'Bake 35 minutes for a 1.5 kg fish — roughly 22 minutes per kilo plus 10.',
      'Rest 5 minutes, then crack the crust open at the table with the back of a heavy knife and lift it away in pieces.',
      'Peel the skin and scales off with it, lift the fillets away from the bone, and dress with olive oil, lemon and dill.'
    ],
    tips: [
      'Scales on. They are a second barrier against the salt.',
      'Seal completely — any gap and the flesh goes salty.',
      'Crack it at the table. It is the best part of serving it.'
    ],
    pair: ['Boiled potatoes', 'Aïoli', 'A glass of Picpoul'],
    store: 'Best immediately. Leftover fish keeps a day and is good cold with mayonnaise.',
    nut: [385, 52, 2, 19, 0, 1, 620]
  },

  'fondue-savoyarde': {
    d: 'Three cheeses melted into white wine with garlic and kirsch. The cornflour is not cheating — it is what stops the whole thing splitting.',
    meta: 'Three Alpine cheeses melted into white wine with garlic and kirsch, stabilised with cornflour and kept barely simmering.',
    kw: ['fondue savoyarde', 'cheese fondue', 'fondue recipe', 'swiss french fondue', 'alpine cheese fondue'],
    why: 'Cheese and wine want to separate, and cornflour is the only thing holding them together — tossed through the grated cheese it coats every strand and keeps the fat emulsified as it melts. Add the cheese in handfuls over a low heat, waiting for each to melt before the next, and stir in a figure of eight rather than circles, which keeps the mixture moving without whipping air into it. Never let it boil.',
    ing: [
      '300 g Comté, grated',
      '300 g Beaufort, grated',
      '200 g Emmental, grated',
      '2 tbsp cornflour',
      '1 garlic clove, halved',
      '350 ml dry white wine, such as Apremont',
      '1 tbsp lemon juice',
      '3 tbsp kirsch',
      '0.5 tsp white pepper',
      '0.25 tsp ground nutmeg',
      '# To serve',
      '1 large country loaf, cut into cubes with crust on each',
      'Cornichons and pickled onions'
    ],
    st: [
      'Toss all the grated cheese with the cornflour until every strand is dusted.',
      'Rub the inside of a heavy fondue pot hard with the cut garlic, then leave the garlic in.',
      'Add the wine and lemon juice and bring to a bare simmer over medium-low heat.',
      'Add the cheese a handful at a time, stirring in a figure of eight, and wait for each addition to melt completely before adding the next.',
      'Once it is all in and smooth, stir in the kirsch, pepper and nutmeg.',
      'Do not let it boil at any point. It should be thick enough to coat bread heavily.',
      'Move to the burner at the table, keep it barely bubbling, and stir every time someone dips.'
    ],
    tips: [
      'Cornflour through the cheese, not into the wine.',
      'A handful at a time, waiting for each to melt.',
      'Figure of eight, and never let it boil.'
    ],
    pair: ['Cornichons', 'Cured ham', 'The rest of the white'],
    store: 'Leftovers set solid; melt gently with a splash of wine. It does not freeze.',
    nut: [845, 52, 18, 60, 1, 3, 1420]
  },

  'aligot': {
    d: 'Potato purée beaten with fresh tomme until it becomes elastic enough to lift in ropes. From the Aubrac, and the stretching is the entire performance.',
    meta: 'Potato purée beaten hard with young tomme cheese until it turns elastic enough to lift in long ropes from the pan.',
    kw: ['aligot', 'cheesy mashed potato', 'aligot recipe', 'aubrac aligot', 'stretchy potato cheese'],
    why: 'Only young, unripened tomme fraîche stretches — a mature cheese has broken down proteins that will not form the long strands aligot is made of, and Cheddar or Gruyère simply give you cheesy mash. The potatoes must also be riced rather than mashed and kept genuinely hot, because the beating has to be vigorous and sustained for several minutes and a cooling mixture will never come together.',
    ing: [
      '1.2 kg floury potatoes, peeled and cut into chunks',
      '2 tsp fine sea salt, for the water',
      '150 g butter, diced',
      '200 ml double cream, warmed',
      '600 g tomme fraîche, cut into thin strips',
      '3 garlic cloves, crushed to a paste',
      '1.25 tsp fine sea salt',
      '0.5 tsp white pepper'
    ],
    st: [
      'Boil the potatoes in salted water 25 minutes, until completely soft. Drain and steam dry for 2 minutes.',
      'Pass them through a ricer straight back into the hot pan. Never use a food processor.',
      'Beat in the butter over low heat until it disappears, then the warm cream and the garlic.',
      'Add the tomme a handful at a time over low heat, beating hard with a wooden spoon after each.',
      'Keep beating. After 4 or 5 minutes the mixture will change character and become elastic and glossy.',
      'Lift the spoon: it should draw long ropes that do not break. Beat in the salt and pepper.',
      'Serve immediately, straight from the pan, while it is still stretching.'
    ],
    tips: [
      'Young tomme fraîche only. Mature cheese will not stretch.',
      'A ricer, never a processor.',
      'Beat hard for several minutes. It changes suddenly.'
    ],
    pair: ['Toulouse sausage', 'A green salad', 'A glass of Marcillac'],
    store: 'Best immediately. It sets hard and loses its stretch permanently on reheating.',
    nut: [745, 26, 42, 55, 4, 4, 1120]
  },

  'truffade': {
    d: 'Sliced potatoes fried slowly in fat and folded with fresh tomme until they form a single cake. The Auvergne cousin of aligot, and much easier.',
    meta: 'Sliced potatoes fried slowly in duck fat and folded with fresh tomme until they set into a single browned cake.',
    kw: ['truffade', 'auvergne potato cheese', 'truffade recipe', 'potato tomme cake', 'french potato cheese'],
    why: 'The potatoes are sliced rather than diced and cooked slowly in a covered pan so they soften and stick together into a cake before the cheese goes in — this is not a fry-up. Once the cheese is added it should be folded through only two or three times and then left to set and brown on the bottom, undisturbed. Stirring after that point breaks the cake up and gives you cheesy potato pieces instead of a truffade.',
    ing: [
      '1 kg waxy potatoes, sliced 4 mm thick',
      '80 g duck fat or lard',
      '150 g smoked bacon lardons',
      '3 garlic cloves, crushed',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '400 g tomme fraîche, cut into strips',
      '# To finish',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Fry the lardons in a heavy 26 cm frying pan until crisp, 6 minutes, and lift out.',
      'Add the duck fat and the sliced potatoes, season with the salt and pepper, and cover.',
      'Cook over medium-low heat for 20 minutes, turning with a spatula every 5 minutes, until the slices are soft and beginning to break down and stick together.',
      'Uncover, raise the heat, and let the base brown for 5 minutes without moving the pan.',
      'Return the lardons and add the garlic, then scatter the tomme over the top.',
      'Fold the cheese through two or three times only, then stop and leave it alone.',
      'Cook 6 minutes more, until the cheese has melted and the underside is a deep brown crust. Slide onto a plate, scatter with parsley and cut into wedges.'
    ],
    tips: [
      'Sliced, not diced, and cooked covered so they soften.',
      'Fold the cheese through two or three times, then stop.',
      'Leave the base alone at the end so it crusts.'
    ],
    pair: ['Green salad', 'Cured ham', 'A glass of Auvergne red'],
    store: 'Refrigerated for 2 days. Reheat in a dry pan to bring the crust back.',
    nut: [685, 28, 42, 46, 4, 3, 1180]
  },

  'piperade': {
    d: 'Peppers, tomatoes and onions cooked down to a jam with Espelette, then eggs stirred through. Basque, and often eaten with ham on the side.',
    meta: 'Peppers, tomato and onion cooked to a jam with Espelette pepper, with eggs stirred through at the last moment.',
    kw: ['piperade', 'basque peppers eggs', 'piperade recipe', 'pepper tomato eggs', 'basque breakfast'],
    why: 'The vegetables are cooked down for a full forty minutes until there is no liquid left at all, and the eggs are stirred in off the heat. A wet pepper base plus eggs gives you scrambled eggs in a puddle; a properly reduced one binds with the egg into something closer to a loose omelette. The residual heat of the pan is enough to set the eggs — put it back on the flame and they curdle in seconds.',
    ing: [
      '4 green peppers, sliced',
      '2 red peppers, sliced',
      '2 onions, sliced',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '4 tomatoes, peeled and chopped',
      '2 tsp piment d\'Espelette',
      '1.25 tsp fine sea salt',
      '# For the eggs',
      '8 eggs',
      '0.5 tsp fine sea salt',
      '# To serve',
      '8 slices bayonne ham',
      'Country bread'
    ],
    st: [
      'Cook the onions and peppers in the oil over medium heat for 25 minutes, stirring occasionally, until soft and collapsing.',
      'Add the garlic and cook 2 minutes.',
      'Add the tomatoes, Espelette and salt and cook a further 15 minutes, until there is no free liquid in the pan at all.',
      'Beat the eggs with the 0.5 tsp salt.',
      'Take the pan off the heat completely and wait 30 seconds.',
      'Pour the eggs in and stir slowly and constantly with a wooden spoon. The residual heat will set them into soft curds in about a minute.',
      'While it is still slightly loose, spoon onto plates, lay the ham alongside, and serve with bread.'
    ],
    tips: [
      'Cook the vegetables until the pan is dry.',
      'Eggs off the heat. Back on the flame and they curdle.',
      'Serve it slightly looser than looks right — it keeps setting.'
    ],
    pair: ['Bayonne ham', 'Country bread', 'A glass of Irouléguy'],
    store: 'The pepper base keeps 4 days refrigerated and freezes for 3 months. Add eggs to order.',
    nut: [385, 20, 18, 26, 5, 11, 980]
  },

  'gratin-de-courgettes': {
    d: 'Courgettes cooked down with rice and bound with egg and cheese, from Provence. The rice is cooked in the courgette liquid, which is the trick.',
    meta: 'Courgettes cooked down with rice that absorbs their liquid, bound with egg and cheese and baked until browned.',
    kw: ['gratin de courgettes', 'courgette rice gratin', 'zucchini gratin recipe', 'provencal courgette bake', 'french vegetable gratin'],
    why: 'Courgettes are more than ninety per cent water and the rice is there to absorb it — added raw to the pan with the salted courgettes, it cooks in the liquid they release rather than in added stock. That is what stops the finished gratin being watery, which is the usual fate of this dish. Salt the courgettes first and give them ten minutes to weep before anything else happens.',
    ing: [
      '1.2 kg courgettes, coarsely grated',
      '1.5 tsp fine sea salt',
      '2 onions, finely chopped',
      '4 tbsp olive oil',
      '4 garlic cloves, crushed',
      '120 g long-grain rice, uncooked',
      '2 tsp thyme leaves',
      '0.5 tsp black pepper',
      '# To bind',
      '3 eggs',
      '150 ml double cream',
      '120 g Gruyère, grated',
      '0.25 tsp ground nutmeg',
      '# To finish',
      '40 g Gruyère, grated',
      '30 g breadcrumbs',
      '2 tbsp olive oil'
    ],
    st: [
      'Toss the grated courgettes with the 1.5 tsp salt in a colander and leave 10 minutes to weep. Do not squeeze them — the liquid is needed.',
      'Soften the onions in the oil for 8 minutes, then add the garlic and cook 2 minutes.',
      'Tip in the courgettes with all their liquid and cook 10 minutes over medium heat.',
      'Stir in the raw rice, thyme and pepper and cook 15 minutes, stirring often, until the rice has absorbed the liquid and is almost tender.',
      'Take off the heat and cool for 10 minutes, then beat in the eggs, cream, 120 g Gruyère and nutmeg.',
      'Heat the oven to 190°C / 375°F. Spread the mixture in an oiled dish and top with the remaining cheese, the breadcrumbs and the oil.',
      'Bake 50 minutes, until set, browned and firm at the centre. Rest 10 minutes before serving.'
    ],
    tips: [
      'Do not squeeze the courgettes. The rice needs their liquid.',
      'Raw rice into the pan — it cooks in what they release.',
      'Cool before the eggs go in, or they scramble.'
    ],
    pair: ['Roast lamb', 'Green salad', 'A glass of Provence rosé'],
    store: 'Refrigerated for 3 days and good cold. Reheat at 180°C for 20 minutes. It freezes for 2 months.',
    nut: [385, 16, 26, 24, 3, 8, 780]
  },

  'gratin-de-macaronis': {
    d: 'Macaroni in a nutmeg béchamel under Gruyère and breadcrumbs. The French version is looser and less cheesy than the English or American one, and better for it.',
    meta: 'Macaroni bound in a nutmeg-scented béchamel under Gruyère and breadcrumbs, baked until browned and still creamy inside.',
    kw: ['gratin de macaronis', 'french macaroni cheese', 'macaroni gratin recipe', 'bechamel pasta bake', 'gratin pasta'],
    why: 'The béchamel is deliberately looser than an English macaroni cheese, because the pasta goes in undercooked and continues to absorb it in the oven — sauced to the right consistency at the point of assembly, it comes out dry. Nutmeg is not optional in a French béchamel and should be grated fresh; the pre-ground kind is flat and slightly musty, which is very noticeable in a sauce this plain.',
    ing: [
      '400 g macaroni',
      '# For the béchamel',
      '70 g butter',
      '70 g plain flour',
      '900 ml whole milk',
      '0.5 tsp ground nutmeg, freshly grated',
      '1.5 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 bay leaf',
      '# To finish',
      '180 g Gruyère, grated',
      '40 g breadcrumbs',
      '20 g butter, diced'
    ],
    st: [
      'Boil the macaroni in well-salted water for 3 minutes less than the packet says. Drain.',
      'Melt the butter, stir in the flour and cook 3 minutes without colouring.',
      'Add the milk gradually, whisking, with the bay leaf. Cook 10 minutes, stirring, until it coats a spoon but is still pourable.',
      'Remove the bay and season with nutmeg, salt and pepper. It should taste slightly over-seasoned.',
      'Stir in two-thirds of the Gruyère and fold in the drained macaroni. It will look too loose — that is correct.',
      'Heat the oven to 200°C / 400°F. Tip into a buttered dish and top with the rest of the cheese, the breadcrumbs and the diced butter.',
      'Bake 30 minutes, until browned and bubbling at the edges. Rest 5 minutes.'
    ],
    tips: [
      'Undercook the pasta by three minutes.',
      'A loose sauce. It tightens considerably in the oven.',
      'Grate the nutmeg fresh.'
    ],
    pair: ['Green salad', 'Roast chicken', 'A glass of light red'],
    store: 'Refrigerated for 3 days. Reheat at 180°C with a splash of milk. It freezes for 2 months.',
    nut: [645, 28, 62, 32, 3, 10, 980]
  },

  'salade-frisee': {
    d: 'Curly endive with hot bacon, a vinegar-deglazed dressing and a poached egg on top. The dressing is made in the bacon pan and poured over hot.',
    meta: 'Curly endive dressed with hot bacon fat deglazed with vinegar, topped with croutons and a soft poached egg.',
    kw: ['frisee aux lardons', 'salade lyonnaise', 'frisee salad recipe', 'bacon egg salad french', 'warm bacon dressing'],
    why: 'The dressing is poured over the leaves boiling hot, straight from the pan, which half-wilts the frisée — that is the dish, and a cold vinaigrette makes it a completely different and much duller salad. Use only the pale inner leaves; the dark outer ones are tough and unpleasantly bitter. The egg should be poached to a completely liquid yolk, because the yolk is the second half of the dressing once it is broken.',
    ing: [
      '2 heads frisée, pale inner leaves only',
      '200 g smoked bacon lardons',
      '2 thick slices country bread, cut into cubes',
      '2 tbsp olive oil',
      '# For the dressing',
      '2 shallots, finely chopped',
      '3 tbsp red wine vinegar',
      '1 tbsp Dijon mustard',
      '3 tbsp olive oil',
      '0.5 tsp black pepper',
      '# For the eggs',
      '4 very fresh eggs',
      '2 tbsp white wine vinegar'
    ],
    st: [
      'Wash and dry the frisée thoroughly and pile it into a large bowl.',
      'Fry the lardons in a dry pan until crisp, 7 minutes. Lift out with a slotted spoon, leaving the fat.',
      'Fry the bread cubes in that fat with the 2 tbsp oil until golden, 4 minutes, and lift out.',
      'Poach the eggs in barely simmering water with the vinegar, 3 minutes, so the yolks stay completely liquid. Lift onto kitchen paper.',
      'Add the shallots to the bacon pan and cook 1 minute, then take it off the heat and whisk in the vinegar, mustard, oil and pepper.',
      'Return the pan to the heat for 20 seconds so the dressing is genuinely hot.',
      'Pour it boiling over the frisée and toss immediately. Add the lardons and croutons, divide between plates, and set an egg on each.'
    ],
    tips: [
      'The dressing goes on boiling hot. That is the dish.',
      'Pale inner leaves only.',
      'A liquid yolk — it becomes part of the dressing.'
    ],
    pair: ['Country bread', 'A glass of Beaujolais', 'Cornichons'],
    store: 'None. Assemble and eat immediately.',
    nut: [485, 22, 18, 37, 3, 3, 1090]
  },

  'omelette-aux-fines-herbes': {
    d: 'A French omelette: pale, rolled, and barely set inside. Two minutes of cooking and about a decade of getting it right.',
    meta: 'A pale rolled French omelette with chervil, chives, parsley and tarragon, taken from the pan while still soft inside.',
    kw: ['french omelette', 'omelette aux fines herbes', 'omelette recipe', 'rolled omelette', 'fines herbes'],
    why: 'A French omelette is not browned. The pan is at medium heat, not high, and the eggs are stirred constantly with the flat of a fork for the first thirty seconds so they set in tiny curds rather than a sheet. It comes off the heat while the centre is still visibly wet, because it keeps cooking on the plate — baveuse is the term and it is the whole standard. Fines herbes means four herbs specifically: chervil, chives, parsley and tarragon.',
    ing: [
      '3 eggs',
      '0.5 tsp fine sea salt',
      '0.25 tsp white pepper',
      '20 g butter',
      '# The fines herbes',
      '1 tbsp chervil, chopped',
      '1 tbsp chives, snipped',
      '1 tbsp flat-leaf parsley, chopped',
      '1 tsp tarragon, chopped',
      '# To finish',
      '5 g butter'
    ],
    st: [
      'Beat the eggs with the salt and pepper for 20 seconds, until just combined. Do not whisk in air.',
      'Stir in half the herbs.',
      'Melt the butter in a 20 cm non-stick pan over medium heat until it foams but does not colour.',
      'Pour in the eggs and stir constantly with the flat of a fork for 30 seconds, shaking the pan, so they set in fine curds.',
      'Stop stirring and let the base set for 15 seconds, then tilt the pan away from you and fold the far edge over with the fork.',
      'Roll it towards you, tipping it onto a warm plate so it lands seam-side down, still visibly soft in the middle.',
      'Rub the top with the last of the butter for shine, scatter with the remaining herbs, and eat immediately.'
    ],
    tips: [
      'Medium heat. A browned omelette is the wrong dish.',
      'Stir constantly for the first thirty seconds.',
      'Out of the pan while the middle is still wet.'
    ],
    pair: ['Green salad', 'Baguette', 'A glass of white'],
    store: 'None. Eat within a minute of leaving the pan.',
    nut: [345, 19, 2, 29, 0, 1, 780]
  }
};
