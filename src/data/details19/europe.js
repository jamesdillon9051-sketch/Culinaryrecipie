'use strict';

/**
 * Volume nineteen — Italy, Greece, Turkey, Spain and one British tray bake.
 *
 * Nineteen, and the smallest group in the volume for a reason: almost every
 * European classic tried against the catalogue was already published. Beef
 * wellington, coq au vin, quiche lorraine, borscht, goulash, pierogi,
 * schnitzel, ceviche, feijoada — forty-eight of fifty-eight candidates in one
 * batch turned out to be here already.
 *
 * What was left divides into two kinds. The Italian entries are the plain
 * weeknight things a site full of regional cooking had somehow skipped:
 * garlic bread, pesto pasta, spaghetti and meatballs, a bolognese written as
 * the long ragù rather than the twenty-minute mince sauce. And Turkey, at
 * fourteen entries, was missing its headline dishes outright — adana, manti,
 * karnıyarık, şakşuka.
 */

module.exports = {
  'garlic-bread': {
    d: 'A baguette split, packed with garlic and parsley butter and baked until the edges crisp and the middle stays soft.',
    meta: 'Baguette split and filled with a garlic, parsley and butter paste, wrapped in foil and baked, then finished uncovered to crisp.',
    kw: ['garlic bread', 'garlic bread recipe', 'homemade garlic bread', 'garlic butter bread', 'easy garlic bread'],
    why: 'Bake it wrapped in foil first and only uncover for the last five minutes. Wrapped, the butter melts through the crumb and steams the middle soft; uncovered from the start, the outside is dark before the inside has taken up anything. Grate the garlic rather than chopping it — pieces of chopped garlic scorch and turn acrid in the oven, and a paste distributes evenly.',
    ing: [
      '1 baguette',
      '120 g unsalted butter, softened',
      '6 garlic cloves, finely grated',
      '25 g flat-leaf parsley, finely chopped',
      '30 g Parmesan, finely grated',
      '0.5 tsp fine sea salt',
      '0.25 tsp ground black pepper',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 200C.',
      'Beat the butter with the grated garlic, parsley, Parmesan, salt and pepper until completely combined.',
      'Cut the baguette almost through at 3 cm intervals, leaving the base attached.',
      'Push the butter into every cut with a knife, and spread whatever is left over the top.',
      'Drizzle the olive oil over the crust.',
      'Wrap the loaf loosely in foil and bake 10 minutes.',
      'Open the foil back and bake 5 minutes more, until the exposed edges are crisp and browned.',
      'Rest 2 minutes, then tear apart at the cuts and serve.'
    ],
    tips: [
      'Grate the garlic — chopped pieces burn.',
      'Foil on for ten minutes, off for five.',
      'Cut almost through so it stays one loaf until it reaches the table.'
    ],
    pair: ['Spaghetti and meatballs', 'Minestrone', 'A green salad'],
    store: 'Assemble unbaked and freeze 2 months; bake from frozen, adding 8 minutes.',
    nut: [345, 8, 32, 21, 2, 2, 620]
  },

  'pesto-pasta': {
    d: 'Basil pounded with pine nuts and cheese, loosened with pasta water and tossed off the heat. Twenty-two minutes.',
    meta: 'Fresh basil pesto with pine nuts, garlic and hard cheese, tossed with hot pasta and starchy cooking water off the heat.',
    kw: ['pesto pasta', 'pesto pasta recipe', 'homemade pesto', 'basil pesto', 'quick pasta recipe'],
    why: 'Pesto is never cooked. Add it to the pasta off the heat and loosen it with the starchy cooking water, which emulsifies the oil into a sauce that clings — heat it in the pan and the basil turns khaki and bitter and the cheese goes stringy. Keep a mugful of the cooking water back before you drain; it is the only thing that turns pesto from a paste into a sauce.',
    ing: [
      '400 g trofie or fusilli',
      '80 g basil leaves',
      '40 g pine nuts',
      '2 garlic cloves',
      '60 g vegetarian hard cheese, finely grated',
      '120 ml extra virgin olive oil',
      '1 tsp fine sea salt, for the pesto',
      '1 tbsp fine sea salt, for the pasta water',
      '0.25 tsp ground black pepper',
      '1 tbsp lemon juice'
    ],
    st: [
      'Toast the pine nuts in a dry pan for 3 minutes, until pale gold. Cool completely.',
      'Pound the garlic and pesto salt to a paste in a mortar.',
      'Add the pine nuts and pound to a rough paste.',
      'Add the basil a handful at a time and grind it against the sides until it breaks down.',
      'Work in the cheese, then trickle in the olive oil, stirring rather than pounding.',
      'Stir in the lemon juice and pepper.',
      'Boil the pasta in well-salted water until al dente, then reserve a mugful of the water and drain.',
      'Tip the pasta into a warm bowl, off the heat.',
      'Add the pesto and 4 tbsp of the cooking water and toss hard for 30 seconds, adding more water until it coats every piece.',
      'Serve at once, with more cheese at the table.'
    ],
    tips: [
      'Never heat the pesto.',
      'Keep a mug of pasta water back before draining.',
      'Cool the pine nuts or they turn the basil dark.'
    ],
    pair: ['Garlic bread', 'A tomato salad', 'Cold white wine'],
    store: 'Pesto keeps 5 days refrigerated under a film of oil, and freezes 3 months.',
    nut: [685, 18, 76, 34, 5, 4, 890]
  },

  'minestrone': {
    d: 'Whatever vegetables are about, cooked long and slow with beans and a little pasta. Under an hour, and it improves overnight.',
    meta: 'Italian vegetable soup with a soffritto base, borlotti beans, tomato and small pasta, finished with olive oil.',
    kw: ['minestrone', 'minestrone recipe', 'italian vegetable soup', 'minestrone soup', 'vegetable bean soup'],
    why: 'Give the soffritto — onion, carrot and celery — a full twelve minutes over a low heat before anything else goes in. It should collapse and sweeten rather than colour, and it is the whole foundation: rushed for four minutes, the soup tastes of stock and vegetables sitting separately in it rather than of one thing. The pasta goes in for the last eight minutes only.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, finely diced',
      '2 carrots, finely diced',
      '3 celery sticks, finely diced',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1.5 litres vegetable stock',
      '1 courgette, in 1 cm dice',
      '150 g green beans, in 2 cm lengths',
      '400 g tinned borlotti beans, drained',
      '100 g small pasta such as ditalini',
      '100 g cavolo nero, shredded',
      '1 Parmesan rind, optional',
      '2 sprigs rosemary',
      '1 bay leaf',
      '1.5 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '3 tbsp extra virgin olive oil, to finish'
    ],
    st: [
      'Heat the olive oil in a large pan and add the onion, carrot and celery.',
      'Cook over a low heat for 12 minutes, until completely soft and sweet but not coloured.',
      'Stir in the garlic and tomato purée and cook 2 minutes.',
      'Add the tinned tomatoes and cook 5 minutes.',
      'Pour in the stock and add the rosemary, bay leaf, Parmesan rind if using, salt and pepper.',
      'Simmer 15 minutes.',
      'Add the courgette, green beans and borlotti beans and simmer 8 minutes.',
      'Add the pasta and simmer 8 minutes more.',
      'Stir in the cavolo nero and cook 3 minutes, until it wilts.',
      'Fish out the rosemary, bay and rind, and serve with the extra virgin olive oil poured over each bowl.'
    ],
    tips: [
      'Twelve minutes on the soffritto. It is the foundation.',
      'Pasta for the last eight minutes only.',
      'A Parmesan rind in the pot is free depth if you have one.'
    ],
    pair: ['Crusty bread', 'Grated hard cheese', 'A glass of Chianti'],
    store: 'Better the next day. Keeps 4 days refrigerated; the pasta swells, so add stock.',
    nut: [365, 13, 48, 14, 10, 11, 980]
  },

  'puttanesca': {
    d: 'Anchovy, olive, caper and tomato cooked hard for twenty minutes. Nothing in it is fresh and it is one of the best pasta sauces there is.',
    meta: 'Spaghetti in a sauce of anchovies melted in oil with garlic, chilli, olives, capers and tomatoes, cooked fast and finished with parsley.',
    kw: ['puttanesca', 'puttanesca recipe', 'spaghetti alla puttanesca', 'anchovy pasta sauce', 'olive caper pasta'],
    why: 'Melt the anchovies into the warm oil until they disappear completely — two or three minutes over a low heat, pressing them with a spoon. Left as pieces they are salty lumps that people pick out; dissolved, they are invisible and the sauce simply tastes deeper. Do not add salt until the very end: anchovies, olives and capers between them usually make it unnecessary.',
    ing: [
      '400 g spaghetti',
      '5 tbsp olive oil',
      '8 anchovy fillets in oil',
      '4 garlic cloves, thinly sliced',
      '1 tsp dried chilli flakes',
      '100 g black olives, pitted and torn',
      '3 tbsp capers, rinsed',
      '400 g tinned chopped tomatoes',
      '1 tbsp tomato purée',
      '0.5 tsp ground black pepper',
      '25 g flat-leaf parsley, chopped',
      '1 tbsp fine sea salt, for the pasta water'
    ],
    st: [
      'Put the olive oil and anchovies in a cold wide pan and set it over a low heat.',
      'Cook 3 minutes, pressing the anchovies with a wooden spoon until they dissolve completely into the oil.',
      'Add the garlic and chilli flakes and cook 90 seconds, until the garlic is pale gold.',
      'Add the olives and capers and cook 1 minute.',
      'Stir in the tomato purée, then the tinned tomatoes.',
      'Simmer briskly for 15 minutes, until the sauce thickens and darkens.',
      'Meanwhile boil the spaghetti in well-salted water until al dente, reserving a mugful of the water.',
      'Drain the pasta and add it to the sauce with 4 tbsp of the cooking water.',
      'Toss over the heat for 1 minute, until the sauce clings.',
      'Stir in the parsley and pepper, taste for salt, and serve.'
    ],
    tips: [
      'Start the anchovies in cold oil so they melt rather than fry.',
      'No salt until the end.',
      'Toss the pasta in the sauce, never sauce on top.'
    ],
    pair: ['A green salad', 'Crusty bread', 'A robust red'],
    store: 'The sauce keeps 4 days refrigerated and freezes 3 months.',
    nut: [545, 17, 82, 17, 6, 8, 1180]
  },

  'ragu-bolognese': {
    d: 'Minced beef and pork cooked three hours in milk, wine and a little tomato. Not the red mince sauce, and worth the afternoon.',
    meta: 'A long-cooked Bolognese ragù of beef and pork with soffritto, milk, white wine and a small amount of tomato, served with tagliatelle.',
    kw: ['ragu alla bolognese', 'bolognese recipe', 'authentic bolognese', 'slow cooked ragu', 'tagliatelle bolognese'],
    why: 'The milk goes in before the wine and before the tomato, and it must be absorbed completely before anything else joins it. The lactose and the fat tenderise the meat and round off the acidity that comes later — a ragù made without it is sharper and grainier. The tomato is a spoonful of purée and half a tin, not a whole one: this is a meat sauce, not a tomato one.',
    ing: [
      '400 g minced beef',
      '200 g minced pork',
      '100 g pancetta, finely diced',
      '3 tbsp olive oil',
      '30 g unsalted butter',
      '1 onion, very finely diced',
      '1 carrot, very finely diced',
      '2 celery sticks, very finely diced',
      '300 ml whole milk',
      '250 ml dry white wine',
      '2 tbsp tomato purée',
      '200 g tinned chopped tomatoes',
      '400 ml beef stock',
      '1 bay leaf',
      '0.25 tsp grated nutmeg',
      '1.5 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '500 g tagliatelle',
      '60 g Parmesan, grated'
    ],
    st: [
      'Heat the oil and butter in a heavy pan and cook the pancetta for 5 minutes, until the fat runs.',
      'Add the onion, carrot and celery and cook over a low heat for 12 minutes, until soft and sweet.',
      'Raise the heat, add both minces and cook 10 minutes, breaking them up, until browned and no liquid remains.',
      'Pour in the milk and simmer 20 minutes, stirring occasionally, until it has been completely absorbed.',
      'Add the nutmeg, then the wine, and simmer 15 minutes until that too has gone.',
      'Stir in the tomato purée and the chopped tomatoes and cook 5 minutes.',
      'Add the stock, bay leaf, salt and pepper and bring to the barest simmer.',
      'Cook uncovered on the lowest heat for 2 hours, stirring every 20 minutes. Add a splash of water if it catches.',
      'Boil the tagliatelle in well-salted water until al dente and drain, keeping a little water.',
      'Toss the pasta with the ragù and a splash of the water, and serve with the Parmesan.'
    ],
    tips: [
      'Milk first, and let it go completely before the wine.',
      'Very fine dice on the soffritto — it should disappear.',
      'Two hours at a bare simmer, uncovered.'
    ],
    pair: ['Tagliatelle, not spaghetti', 'A green salad', 'Sangiovese'],
    store: 'Much better the next day. Keeps 4 days refrigerated, freezes 3 months.',
    nut: [780, 42, 78, 32, 5, 10, 1120]
  },

  'spaghetti-meatballs': {
    d: 'Meatballs browned and finished in the sauce, over spaghetti. Italian-American, and none the worse for it.',
    meta: 'Beef and pork meatballs bound with a milk-soaked bread panade, browned and simmered in tomato sauce, served with spaghetti.',
    kw: ['spaghetti and meatballs', 'meatballs recipe', 'italian meatballs', 'spaghetti meatballs', 'homemade meatballs'],
    why: 'Soak the breadcrumbs in milk to a paste before they go into the meat. That panade holds water through cooking and is the difference between a tender meatball and a dense one — breadcrumbs added dry absorb the meat\'s own moisture instead. Brown them for colour only and finish them in the sauce, where they cook gently and give the sauce their fat.',
    ing: [
      '400 g minced beef',
      '200 g minced pork',
      '80 g fresh white breadcrumbs',
      '120 ml whole milk',
      '1 egg',
      '50 g Parmesan, grated, plus more to serve',
      '3 garlic cloves, crushed',
      '25 g flat-leaf parsley, chopped',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '3 tbsp olive oil',
      '1 onion, finely diced',
      '2 x 400 g tins chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp dried oregano',
      '1 tsp caster sugar',
      '400 g spaghetti',
      '10 basil leaves'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes, then mash to a paste.',
      'Mix the paste with both minces, the egg, Parmesan, two thirds of the garlic, the parsley, salt and pepper. Do not overwork it.',
      'Roll into 20 balls and refrigerate 15 minutes.',
      'Heat 2 tbsp of the oil in a wide pan and brown the meatballs in two batches, 4 minutes a batch, turning. Lift out.',
      'Add the remaining oil and the onion and cook 6 minutes.',
      'Stir in the remaining garlic and the tomato purée and cook 1 minute.',
      'Add the tomatoes, oregano and sugar and simmer 10 minutes.',
      'Return the meatballs, cover, and simmer 20 minutes, turning once.',
      'Boil the spaghetti in well-salted water until al dente and drain.',
      'Serve the meatballs and sauce over the spaghetti with basil torn over and Parmesan at the table.'
    ],
    tips: [
      'A milk-soaked panade, always.',
      'Handle the mixture as little as possible.',
      'Brown for colour, then finish in the sauce.'
    ],
    pair: ['Garlic bread', 'A green salad', 'Chianti'],
    store: 'Meatballs in sauce keep 3 days refrigerated and freeze 3 months.',
    nut: [820, 48, 88, 30, 7, 14, 1290]
  },

  'kleftiko': {
    d: 'Lamb shoulder sealed in parchment with lemon, oregano and potatoes and cooked three and a half hours. The parcel is not opened until the table.',
    meta: 'Greek lamb shoulder marinated with lemon, garlic and oregano, sealed in parchment with potatoes and slow-roasted until falling apart.',
    kw: ['kleftiko', 'lamb kleftiko', 'kleftiko recipe', 'greek slow roast lamb', 'lamb in parchment'],
    why: 'The parcel must be genuinely sealed, and paper alone will not do it — line it with foil. Everything about kleftiko depends on the steam staying in: it is what cooks the lamb to falling apart without drying, and what makes the potatoes taste of lemon and lamb fat rather than of oven. If steam escapes you have a roast, which is a fine thing but not this.',
    ing: [
      '1.6 kg lamb shoulder, on the bone',
      '6 garlic cloves, halved',
      '2 lemons, 1 juiced and 1 sliced',
      '4 tbsp olive oil',
      '2 tbsp dried oregano',
      '2 tsp fine sea salt',
      '1 tsp ground black pepper',
      '1 kg waxy potatoes, in 4 cm chunks',
      '2 onions, thickly sliced',
      '2 bay leaves',
      '150 g feta, in thick slabs',
      '150 ml white wine'
    ],
    st: [
      'Heat the oven to 160C.',
      'Make 12 deep incisions in the lamb and push a garlic half into each.',
      'Rub the lamb all over with the lemon juice, half the olive oil, the oregano, salt and pepper.',
      'Lay a large sheet of foil in a roasting tin and a sheet of baking parchment on top.',
      'Pile the potatoes, onions, bay leaves and lemon slices onto the parchment and toss with the remaining oil.',
      'Sit the lamb on top and pour the wine around it.',
      'Tuck the feta in among the potatoes.',
      'Bring the parchment up over the lamb, then seal the foil tightly over it, crimping every edge.',
      'Roast 3 hours 15 minutes.',
      'Open the parcel at the table, and pull the lamb apart with two forks.'
    ],
    tips: [
      'Foil under the parchment. Paper alone leaks.',
      'Crimp every edge — steam is the whole method.',
      'Open it in front of people. That is the dish.'
    ],
    pair: ['Horiatiki salad', 'Tzatziki', 'A robust Greek red'],
    store: 'Keeps 3 days refrigerated. Reheat covered at 160C for 25 minutes.',
    nut: [745, 52, 42, 42, 5, 6, 1290]
  },

  'tiropita': {
    d: 'Feta and egg between layers of filo, baked until the top shatters. Cut it before it goes in the oven, not after.',
    meta: 'Greek cheese pie of feta, ricotta and egg layered between buttered filo sheets and baked until crisp and golden.',
    kw: ['tiropita', 'tiropita recipe', 'greek cheese pie', 'feta filo pie', 'greek filo pastry'],
    why: 'Score the pie into portions before baking, cutting down through the top layers of filo but not into the filling. Baked whole and cut afterwards, the crisp top shatters and slides off in pieces as the knife goes through. Scored first, each portion keeps its lid. Keep the unused filo under a damp cloth: it dries to uselessness in about three minutes uncovered.',
    ing: [
      '400 g feta, crumbled',
      '250 g ricotta',
      '3 eggs',
      '3 tbsp chopped dill',
      '3 tbsp chopped mint',
      '0.5 tsp ground black pepper',
      '0.25 tsp grated nutmeg',
      '12 sheets filo pastry',
      '150 g unsalted butter, melted',
      '2 tbsp sesame seeds'
    ],
    st: [
      'Heat the oven to 180C and butter a 30 x 20 cm tin.',
      'Mash the feta with the ricotta, then beat in the eggs, dill, mint, pepper and nutmeg.',
      'Keep the filo under a damp cloth and work with one sheet at a time.',
      'Lay 6 sheets in the tin, brushing each with melted butter and letting the edges overhang.',
      'Spread the cheese filling evenly over.',
      'Cover with the remaining 6 sheets, buttering each one.',
      'Fold the overhanging edges in and brush the top generously with butter.',
      'Score the pie into 8 pieces, cutting through the top layers only.',
      'Sprinkle the sesame seeds over and flick a little cold water across the top.',
      'Bake 40 minutes, until deep gold and crisp. Rest 15 minutes before cutting through.'
    ],
    tips: [
      'Score before baking, not after.',
      'Damp cloth over the filo at all times.',
      'A flick of cold water on top helps it blister.'
    ],
    pair: ['Horiatiki salad', 'Greek yoghurt', 'Strong coffee'],
    store: 'Keeps 3 days refrigerated. Re-crisp at 180C for 10 minutes.',
    nut: [520, 20, 34, 34, 2, 4, 1180]
  },

  'youvetsi': {
    d: 'Beef baked with orzo in a cinnamon-scented tomato sauce until the pasta has drunk the lot. One dish, ninety minutes.',
    meta: 'Greek beef and orzo baked together in a tomato and cinnamon sauce until the orzo absorbs the liquid, topped with kefalotyri.',
    kw: ['youvetsi', 'youvetsi recipe', 'greek beef orzo', 'baked orzo', 'greek pasta bake'],
    why: 'The orzo goes in raw and cooks in the sauce, absorbing it, so the liquid has to be measured — about three parts liquid to one part orzo by volume. Boiled separately and stirred in, it tastes of nothing and the sauce stays thin. Stir once at the halfway point and no more, or the starch releases and the dish turns claggy.',
    ing: [
      '900 g braising beef, in 4 cm chunks',
      '3 tbsp olive oil',
      '2 onions, finely chopped',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '150 ml red wine',
      '1 cinnamon stick',
      '3 allspice berries',
      '2 bay leaves',
      '1 litre beef stock',
      '1.5 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '350 g orzo',
      '100 g kefalotyri or pecorino, grated',
      '2 tbsp chopped flat-leaf parsley'
    ],
    st: [
      'Heat the oven to 180C.',
      'Heat the oil in a casserole and brown the beef in two batches, 5 minutes a batch. Lift out.',
      'Add the onions and cook 8 minutes, until golden.',
      'Stir in the garlic and tomato purée and cook 2 minutes.',
      'Pour in the wine and let it bubble 2 minutes.',
      'Return the beef with the tomatoes, cinnamon, allspice, bay, salt, pepper and 600 ml of the stock.',
      'Cover and cook in the oven for 60 minutes.',
      'Stir in the orzo and the remaining 400 ml of stock.',
      'Return uncovered to the oven for 25 minutes, stirring once at the halfway point only.',
      'Scatter the cheese over and rest 10 minutes before serving with the parsley.'
    ],
    tips: [
      'Orzo raw into the sauce, never boiled first.',
      'Stir once, at the halfway point.',
      'Rest ten minutes — the orzo keeps absorbing.'
    ],
    pair: ['Horiatiki salad', 'Crusty bread', 'A Greek red'],
    store: 'Keeps 3 days refrigerated. The orzo swells; add stock when reheating.',
    nut: [745, 52, 68, 26, 5, 9, 1290]
  },

  'adana-kebab': {
    d: 'Hand-minced lamb with tail fat and red pepper, pressed onto flat skewers and grilled over charcoal. Named for the city, and protected there.',
    meta: 'Turkish minced lamb kebab with red pepper flakes and fat, kneaded and pressed onto flat skewers, grilled and served with sumac onions.',
    kw: ['adana kebab', 'adana kebab recipe', 'turkish lamb kebab', 'minced lamb skewers', 'sumac onion salad'],
    why: 'The mince needs to be at least twenty per cent fat and it must be kneaded hard for five minutes until it turns sticky and pulls away from the bowl in one mass. That is what makes it cling to a flat skewer over a fire instead of falling into it. Chill the kneaded mixture before shaping — cold fat holds, warm fat slides.',
    ing: [
      '800 g minced lamb, 20 per cent fat',
      '1 red pepper, very finely chopped',
      '1 onion, grated and squeezed dry',
      '4 garlic cloves, crushed',
      '2 tbsp Turkish red pepper flakes (pul biber)',
      '1.5 tsp fine sea salt',
      '1 tsp ground cumin',
      '0.5 tsp ground black pepper',
      '2 tbsp chopped flat-leaf parsley',
      '2 red onions, finely sliced',
      '2 tbsp sumac',
      '1 tbsp olive oil',
      '4 flatbreads',
      '2 tomatoes, halved',
      '4 long green peppers'
    ],
    st: [
      'Mix the lamb with the chopped red pepper, grated onion, garlic, pepper flakes, salt, cumin and black pepper.',
      'Knead hard for 5 minutes, until the mixture turns sticky and comes away from the bowl in one mass.',
      'Cover and refrigerate 1 hour.',
      'Toss the sliced red onions with the sumac, parsley and olive oil and set aside.',
      'Divide the meat into 4 and press each portion along a flat metal skewer, squeezing it into a long flat strip.',
      'Heat a charcoal grill until the coals are white, or a griddle pan until it smokes.',
      'Grill 12 minutes, turning every 3 minutes, until well charred and cooked through.',
      'Warm the flatbreads on the edge of the grill and char the tomatoes and green peppers alongside.',
      'Slide the kebabs off onto the flatbreads.',
      'Top with the sumac onions and serve with the charred vegetables.'
    ],
    tips: [
      'Twenty per cent fat, and knead until it is sticky.',
      'An hour in the fridge before shaping.',
      'Flat skewers, or it rolls and falls off.'
    ],
    pair: ['Sumac onion salad', 'Ayran', 'Charred green peppers'],
    store: 'Shaped raw kebabs freeze 2 months. Cooked, they keep 2 days.',
    nut: [645, 42, 42, 34, 5, 8, 1180],
    rest: [60, 'chilling the mince']
  },

  'manti': {
    d: 'Dumplings the size of a fingernail under garlic yoghurt and paprika butter. Eighty minutes, most of it folding.',
    meta: 'Tiny Turkish lamb dumplings boiled and served under garlic yoghurt with a paprika and mint butter poured over.',
    kw: ['manti', 'manti recipe', 'turkish dumplings', 'turkish manti', 'yoghurt dumplings'],
    why: 'Manti are meant to be tiny — the traditional test is forty in a spoon — and small is not just for show: the ratio of thin dough to filling is what makes them delicate, and a large manti is a heavy thing. Roll the dough as thin as you can see your hand through. Bring the yoghurt to room temperature before it meets the hot dumplings or it splits.',
    ing: [
      '300 g plain flour',
      '1 egg',
      '140 ml water',
      '0.5 tsp fine sea salt, for the dough',
      '250 g minced lamb',
      '1 onion, very finely grated and squeezed dry',
      '1 tsp fine sea salt, for the filling',
      '0.5 tsp ground black pepper',
      '1 tsp Turkish red pepper flakes',
      '400 g thick natural yoghurt, at room temperature',
      '4 garlic cloves, crushed',
      '0.5 tsp fine sea salt, for the yoghurt',
      '80 g unsalted butter',
      '1 tbsp tomato purée',
      '1 tsp sweet paprika',
      '1 tsp dried mint',
      '1 tsp sumac'
    ],
    st: [
      'Mix the flour, dough salt, egg and water into a firm dough and knead 10 minutes until smooth.',
      'Wrap and rest 30 minutes.',
      'Mix the lamb with the grated onion, filling salt, black pepper and pepper flakes.',
      'Beat the yoghurt with the crushed garlic and yoghurt salt and leave at room temperature.',
      'Roll the dough out as thin as you possibly can and cut into 3 cm squares.',
      'Put a pea-sized piece of filling on each, bring the four corners up and pinch them together at the top.',
      'Bring a large pan of salted water to the boil and cook the manti for 8 minutes, until they float and the dough is translucent.',
      'Melt the butter with the tomato purée and paprika and cook 1 minute, until it turns red.',
      'Drain the manti and divide between warm bowls.',
      'Spoon the garlic yoghurt over, pour the paprika butter across that, and scatter the dried mint and sumac.'
    ],
    tips: [
      'Tiny. Roll the dough until you can nearly see through it.',
      'Room-temperature yoghurt, or it splits on contact.',
      'Freeze them raw on a tray if you make a big batch.'
    ],
    pair: ['A cucumber salad', 'Ayran', 'Pickled chillies'],
    store: 'Freeze uncooked on a tray for 2 months; boil from frozen, adding 3 minutes.',
    nut: [720, 32, 68, 36, 4, 9, 1420]
  },

  'karniyarik': {
    d: 'Aubergines fried whole, split down the middle and filled with spiced lamb, then baked in tomato. The name means split belly.',
    meta: 'Turkish aubergines fried whole, split and stuffed with minced lamb, onion and tomato, then baked with peppers and tomato sauce.',
    kw: ['karniyarik', 'karniyarik recipe', 'turkish stuffed aubergine', 'stuffed eggplant recipe', 'lamb stuffed aubergine'],
    why: 'Peel the aubergines in stripes rather than fully or not at all. Left whole-skinned they are tough to cut on the plate; peeled completely they collapse in the pan. Alternating stripes hold the shape together while letting the flesh soften. Salt them for twenty minutes first — it draws water out so they absorb far less oil in the frying.',
    ing: [
      '4 medium aubergines',
      '1 tbsp fine sea salt, for drawing water',
      '6 tbsp olive oil',
      '400 g minced lamb',
      '2 onions, finely chopped',
      '4 garlic cloves, crushed',
      '3 tomatoes, 2 chopped and 1 sliced',
      '2 tbsp tomato purée',
      '1 tsp ground cumin',
      '1 tsp Turkish red pepper flakes',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '3 tbsp chopped flat-leaf parsley',
      '4 long green peppers',
      '300 ml hot water'
    ],
    st: [
      'Peel the aubergines in stripes, leaving alternating bands of skin.',
      'Rub them with the drawing salt and leave 20 minutes, then rinse and pat dry.',
      'Heat 4 tbsp of the oil in a wide pan and fry the aubergines whole for 8 minutes, turning, until browned all over and softening. Lift into a baking dish.',
      'Heat the oven to 190C.',
      'Add the remaining oil to the pan and fry the lamb for 6 minutes, until browned.',
      'Add the onions and cook 6 minutes, then the garlic for 1 minute.',
      'Stir in the chopped tomatoes, half the tomato purée, the cumin, pepper flakes, salt and pepper and cook 5 minutes.',
      'Stir in the parsley and take off the heat.',
      'Split each aubergine down the middle without cutting through, press the sides open and pack the filling in.',
      'Lay a tomato slice and a green pepper on each, whisk the remaining purée into the hot water and pour it round, then bake 35 minutes.'
    ],
    tips: [
      'Stripes, not full peeling.',
      'Salt for twenty minutes so they drink less oil.',
      'Split without cutting through, or the filling escapes.'
    ],
    pair: ['Turkish pilav', 'Cacık', 'Flatbread'],
    store: 'Keeps 3 days refrigerated and is good at room temperature.',
    nut: [495, 24, 26, 34, 9, 14, 1090]
  },

  'sakshuka-turkish': {
    d: 'Fried aubergine and courgette under a garlicky tomato sauce, served cold. Nothing to do with the egg dish of a similar name.',
    meta: 'Turkish meze of fried aubergine, courgette and pepper in a garlic and tomato sauce, served at room temperature.',
    kw: ['saksuka', 'saksuka recipe', 'turkish saksuka', 'fried aubergine meze', 'turkish vegetable meze'],
    why: 'Fry the vegetables separately and drain them properly on paper before the sauce goes anywhere near. Cooked together they steam and turn to a wet mush, and şakşuka is meant to be distinct pieces sitting in sauce. It is also served at room temperature, not hot — the flavours only come together as it cools, so make it an hour ahead.',
    ing: [
      '2 aubergines, in 2 cm dice',
      '2 courgettes, in 2 cm dice',
      '1 green pepper, in 2 cm pieces',
      '1 tbsp fine sea salt, for drawing water',
      '150 ml olive oil, for frying',
      '4 garlic cloves, thinly sliced',
      '400 g tinned chopped tomatoes',
      '1 tbsp tomato purée',
      '1 tsp Turkish red pepper flakes',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '3 tbsp chopped flat-leaf parsley',
      '4 tbsp thick natural yoghurt, optional'
    ],
    st: [
      'Toss the diced aubergine with the drawing salt and leave 20 minutes, then rinse and pat completely dry.',
      'Heat the olive oil in a wide pan and fry the aubergine in two batches for 6 minutes each, until deep gold. Drain on paper.',
      'Fry the courgette for 4 minutes and drain on paper.',
      'Fry the green pepper for 3 minutes and drain.',
      'Pour off all but 2 tbsp of the oil.',
      'Fry the garlic for 30 seconds, then add the tomato purée and cook 1 minute.',
      'Add the tomatoes, pepper flakes, sugar and salt and simmer 12 minutes, until thick.',
      'Arrange the fried vegetables on a serving plate and spoon the sauce over.',
      'Cool to room temperature, at least 1 hour.',
      'Scatter the parsley over and serve with yoghurt if you like.'
    ],
    tips: [
      'Fry each vegetable separately and drain each one.',
      'Room temperature, never hot.',
      'An hour standing is part of the recipe.'
    ],
    pair: ['Flatbread', 'Other meze', 'Rakı'],
    store: 'Keeps 4 days refrigerated and improves. Bring back to room temperature.',
    nut: [325, 5, 22, 25, 7, 13, 890],
    rest: [60, 'cooling to room temperature']
  },

  'turkish-pilav': {
    d: 'Rice and orzo cooked in butter until every grain is separate. Thirty minutes, and it goes with almost everything Turkish.',
    meta: 'Turkish rice pilav with orzo toasted in butter, rice soaked and rinsed, cooked with stock and rested under a cloth.',
    kw: ['turkish pilav', 'turkish rice recipe', 'sehriyeli pilav', 'orzo rice pilaf', 'buttery rice pilaf'],
    why: 'Soak the rice in warm salted water for fifteen minutes and then rinse it until the water runs clear. That removes the surface starch that makes grains stick, which is the entire difference between pilav and a sticky pan of rice. Rest it under a cloth at the end: the cloth absorbs the steam that would otherwise condense on the lid and drip back in.',
    ing: [
      '300 g long-grain rice',
      '1 tbsp fine sea salt, for soaking',
      '500 ml warm water, for soaking',
      '60 g unsalted butter',
      '1 tbsp vegetable oil',
      '60 g orzo',
      '560 ml hot chicken or vegetable stock',
      '1 tsp fine sea salt'
    ],
    st: [
      'Soak the rice in the warm water with the soaking salt for 15 minutes.',
      'Drain and rinse under cold running water until the water runs completely clear. Drain well.',
      'Melt the butter with the oil in a heavy pan over a medium heat.',
      'Add the orzo and stir for 3 minutes, until it turns golden brown.',
      'Add the drained rice and stir for 2 minutes, until every grain is coated and slightly translucent at the edge.',
      'Pour in the hot stock and add the salt. Stir once.',
      'Bring to the boil, then cover and cook on the lowest heat for 12 minutes.',
      'Take off the heat, lift the lid and lay a clean cloth across the pan, then replace the lid.',
      'Rest 10 minutes.',
      'Fork through gently and serve.'
    ],
    tips: [
      'Rinse until the water is clear. That is the whole technique.',
      'Toast the orzo brown before the rice goes in.',
      'A cloth under the lid for the rest.'
    ],
    pair: ['Adana kebab', 'Karnıyarık', 'Cacık'],
    store: 'Keeps 3 days refrigerated. Steam to reheat rather than microwaving.',
    nut: [420, 8, 68, 13, 2, 1, 720]
  },

  'albondigas': {
    d: 'Small pork and beef meatballs in an almond and saffron sauce. A tapas plate, and the sauce is thickened with bread and nuts rather than flour.',
    meta: 'Spanish meatballs of pork and beef in a tomato, almond and saffron sauce thickened with fried bread and almonds.',
    kw: ['albondigas', 'albondigas recipe', 'spanish meatballs', 'tapas meatballs', 'almond sauce meatballs'],
    why: 'The sauce is thickened with a picada — fried bread and almonds pounded together — rather than with flour. It is the classic Spanish method and it does two jobs at once: it gives body and it adds a toasted, nutty flavour that flour cannot. Fry the bread and almonds until properly golden, because that colour is the flavour.',
    ing: [
      '300 g minced pork',
      '200 g minced beef',
      '50 g fresh breadcrumbs',
      '4 tbsp milk',
      '1 egg',
      '3 garlic cloves, crushed',
      '2 tbsp chopped flat-leaf parsley',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '0.5 tsp grated nutmeg',
      '4 tbsp olive oil',
      '1 slice white bread, crusts off',
      '40 g blanched almonds',
      '1 onion, finely chopped',
      '400 g tinned chopped tomatoes',
      '150 ml white wine',
      '250 ml chicken stock',
      '1 pinch saffron threads',
      '1 tsp sweet smoked paprika'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes, then mash to a paste.',
      'Mix with both minces, the egg, two thirds of the garlic, the parsley, salt, pepper and nutmeg.',
      'Roll into 24 small balls and chill 15 minutes.',
      'Heat 2 tbsp of the oil and fry the slice of bread and the almonds for 3 minutes, until both are deep gold. Lift out.',
      'Pound the fried bread and almonds to a coarse paste in a mortar with the saffron. This is the picada.',
      'Brown the meatballs in the same pan in two batches, 4 minutes a batch. Lift out.',
      'Add the remaining oil and the onion and cook 8 minutes.',
      'Stir in the remaining garlic and the paprika, then the wine, and bubble 2 minutes.',
      'Add the tomatoes and stock and simmer 10 minutes, then stir in the picada.',
      'Return the meatballs and simmer 15 minutes, until the sauce is thick. Serve with bread.'
    ],
    tips: [
      'The picada, not flour. Fry the bread and nuts properly golden.',
      'Small meatballs — this is a tapa, not a main.',
      'Chill them before browning so they hold.'
    ],
    pair: ['Crusty bread', 'Patatas bravas', 'A glass of Rioja'],
    store: 'Better the next day. Keeps 3 days refrigerated, freezes 2 months.',
    nut: [525, 32, 24, 33, 4, 7, 1020]
  },

  'pollo-al-ajillo': {
    d: 'Chicken pieces fried hard with a great deal of garlic and finished with sherry. Fifty minutes and five ingredients that matter.',
    meta: 'Spanish chicken browned in olive oil with whole garlic cloves and finished with dry sherry, bay and parsley.',
    kw: ['pollo al ajillo', 'pollo al ajillo recipe', 'spanish garlic chicken', 'garlic chicken sherry', 'spanish chicken tapas'],
    why: 'The garlic cloves go in whole and unpeeled, fried gently in the oil before the chicken and then returned at the end. Whole, they turn sweet and creamy inside their skins; sliced or crushed at that heat they burn black in ninety seconds and make the whole pan bitter. Squeeze them out of their skins onto the bread at the table.',
    ing: [
      '1.2 kg chicken thighs and drumsticks',
      '120 ml olive oil',
      '2 whole garlic bulbs, cloves separated and left unpeeled',
      '2 bay leaves',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '1 tsp sweet smoked paprika',
      '150 ml dry fino sherry',
      '100 ml chicken stock',
      '3 tbsp chopped flat-leaf parsley',
      '1 lemon, in wedges'
    ],
    st: [
      'Season the chicken all over with the salt and pepper.',
      'Heat the olive oil in a wide heavy pan over a medium heat.',
      'Add the unpeeled garlic cloves and the bay leaves and fry gently for 4 minutes, until the skins colour. Lift the garlic out.',
      'Raise the heat and brown the chicken in the flavoured oil for 12 minutes, turning, until deep gold all over.',
      'Sprinkle the paprika over and turn the chicken once.',
      'Pour in the sherry and let it bubble hard for 3 minutes, scraping the base.',
      'Return the garlic cloves, add the stock, and cover.',
      'Simmer 15 minutes, until the chicken is cooked through and the sauce has reduced and gone glossy.',
      'Uncover and cook 3 minutes more to thicken.',
      'Scatter the parsley over and serve with lemon and bread, squeezing the garlic from its skins.'
    ],
    tips: [
      'Whole unpeeled cloves. Anything else burns.',
      'Fino sherry, not cooking wine.',
      'Squeeze the garlic onto bread at the table.'
    ],
    pair: ['Crusty bread', 'Patatas bravas', 'Chilled fino'],
    store: 'Keeps 3 days refrigerated and reheats well, covered.',
    nut: [640, 48, 8, 44, 1, 2, 890]
  },

  'tarta-de-santiago': {
    d: 'An almond cake with no flour in it, stencilled with the cross of Saint James. Fifty minutes and four ingredients.',
    meta: 'Galician almond cake made with ground almonds, eggs, sugar and citrus zest, baked and dusted through a cross stencil.',
    kw: ['tarta de santiago', 'tarta de santiago recipe', 'spanish almond cake', 'flourless almond cake', 'gluten free almond cake'],
    why: 'Whisk the eggs and sugar for a full five minutes until they hold a ribbon on the surface. There is no flour and no raising agent, so every bit of the cake\'s lift comes from air beaten into the eggs — undermixed, it bakes into a dense almond slab. Fold the almonds in gently and stop the moment they disappear.',
    ing: [
      '250 g ground almonds',
      '250 g caster sugar',
      '4 eggs',
      '1 lemon, zested',
      '1 orange, zested',
      '1 tsp ground cinnamon',
      '0.5 tsp almond extract',
      '0.25 tsp fine sea salt',
      '2 tbsp icing sugar, for dusting',
      '1 tbsp unsalted butter, for the tin'
    ],
    st: [
      'Heat the oven to 180C and butter and line a 23 cm springform tin.',
      'Whisk the eggs and caster sugar with an electric whisk for 5 minutes, until pale, thick and holding a ribbon on the surface.',
      'Whisk in the lemon and orange zest, the cinnamon, almond extract and salt.',
      'Fold in the ground almonds in three additions, stopping as soon as each disappears.',
      'Scrape into the tin and level the top.',
      'Bake 35 minutes, until golden and a skewer comes out with a few moist crumbs.',
      'Cool in the tin for 20 minutes, then turn out onto a rack and cool completely.',
      'Cut a cross of Saint James from paper and lay it on the cake.',
      'Dust heavily with icing sugar, then lift the stencil straight up.',
      'Serve at room temperature.'
    ],
    tips: [
      'Five minutes of whisking. It is the only lift the cake gets.',
      'Fold the almonds in, do not beat them.',
      'Lift the stencil straight up or you smudge the cross.'
    ],
    pair: ['A glass of sweet sherry', 'Strong coffee', 'Fresh orange segments'],
    store: 'Keeps 5 days in a tin and improves after a day. Freezes 2 months.',
    nut: [385, 11, 38, 22, 4, 34, 90]
  },

  'flapjacks': {
    d: 'Oats bound with butter, golden syrup and sugar, baked in a tray and cut while warm. Thirty-five minutes and impossible to get wrong except in one way.',
    meta: 'British oat flapjacks made with butter, golden syrup and light brown sugar, baked until golden at the edges and cut while warm.',
    kw: ['flapjacks', 'flapjack recipe', 'oat flapjacks', 'golden syrup flapjacks', 'chewy flapjacks'],
    why: 'Cut them while they are still warm and leave them in the tin to cool completely. Cut cold, they shatter; lifted out warm, they fall apart. Score them at about ten minutes out of the oven and then do not touch them for an hour. Underbaking by three minutes gives chewy flapjacks and overbaking by three gives crunchy ones — both are correct, so decide which you want.',
    ing: [
      '250 g rolled oats',
      '175 g unsalted butter',
      '125 g light brown soft sugar',
      '4 tbsp golden syrup',
      '0.5 tsp fine sea salt',
      '0.5 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 180C and line a 20 cm square tin with baking paper.',
      'Melt the butter, sugar and golden syrup together in a pan over a low heat, stirring, until the sugar has dissolved.',
      'Take off the heat and stir in the salt and vanilla.',
      'Tip in the oats and stir until every flake is coated.',
      'Scrape into the tin and press down firmly and evenly with the back of a spoon.',
      'Bake 25 minutes for chewy flapjacks, or 28 for crisp ones. The edges should be deep gold and the middle still pale.',
      'Cool in the tin for 10 minutes.',
      'Score into 12 squares with a sharp knife, cutting right through.',
      'Leave in the tin for a further 1 hour, until completely cold.',
      'Lift out by the paper and separate along the score lines.'
    ],
    tips: [
      'Score warm, lift out cold.',
      'Press the mixture down hard or they crumble.',
      'Twenty-five minutes chewy, twenty-eight crisp. Pick one.'
    ],
    pair: ['A mug of tea', 'A flask on a walk', 'Greek yoghurt'],
    store: 'Keeps 1 week in a tin and freezes 3 months.',
    nut: [305, 4, 38, 15, 3, 20, 110],
    rest: [60, 'cooling in the tin']
  },

  'greek-chicken-traybake': {
    d: 'Chicken thighs, potatoes, lemon and oregano in one tin for forty-five minutes. The tin does the work.',
    meta: 'Greek chicken thighs roasted with potatoes, lemon, garlic, oregano and olives in a single tin with stock.',
    kw: ['greek chicken traybake', 'greek chicken and potatoes', 'lemon oregano chicken', 'greek chicken tray bake', 'greek roast chicken'],
    why: 'Pour a little stock into the tin rather than roasting dry. The potatoes need liquid to cook through in the same time the chicken takes, and the stock reduces with the lemon and chicken fat into a sauce that is the point of the dish. Start the potatoes ten minutes before the chicken goes in — they are the slower of the two.',
    ing: [
      '8 chicken thighs, skin on and bone in',
      '1 kg waxy potatoes, in 4 cm wedges',
      '2 lemons, 1 juiced and 1 cut in wedges',
      '6 garlic cloves, crushed',
      '5 tbsp olive oil',
      '2 tbsp dried oregano',
      '1.5 tsp fine sea salt',
      '0.75 tsp ground black pepper',
      '250 ml chicken stock',
      '100 g Kalamata olives',
      '1 red onion, in wedges',
      '2 tbsp chopped flat-leaf parsley'
    ],
    st: [
      'Heat the oven to 200C.',
      'Toss the potatoes and red onion with 2 tbsp of the oil, half the oregano and half the salt in a large roasting tin.',
      'Roast 10 minutes.',
      'Meanwhile rub the chicken with the remaining oil, oregano, salt, pepper, the crushed garlic and the lemon juice.',
      'Take the tin out, push the potatoes to the edges and sit the chicken skin-side up in the middle.',
      'Tuck the lemon wedges and olives in around it.',
      'Pour the stock into the tin, around the food and not over the chicken skin.',
      'Roast 45 minutes, until the skin is deep gold and the potatoes are tender at the edges of the tin.',
      'Rest 8 minutes in the tin.',
      'Scatter the parsley over and spoon the pan juices across everything.'
    ],
    tips: [
      'Potatoes ten minutes ahead of the chicken.',
      'Stock around the food, never over the skin.',
      'Rest in the tin so the juices settle.'
    ],
    pair: ['Horiatiki salad', 'Tzatziki', 'Crusty bread'],
    store: 'Keeps 3 days refrigerated. Reheat at 200C for 15 minutes to re-crisp the skin.',
    nut: [685, 45, 48, 34, 6, 5, 1180]
  }
};
