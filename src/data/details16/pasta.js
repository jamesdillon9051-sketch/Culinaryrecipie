'use strict';

/**
 * Volume sixteen — Italian pasta and rice.
 *
 * Twenty-one, chosen so that no two share a shape or a technique. Four are
 * filled, four are hand-rolled without a machine, three are risotti and one is
 * a bread dumpling from a region that speaks German. What they have in common
 * is that almost none of them is made outside the province it comes from,
 * which is the whole argument for a regional volume.
 */

module.exports = {
  'tagliatelle-al-ragu': {
    d: 'The Bologna ragù, which contains almost no tomato and cooks for three hours. Served on fresh egg tagliatelle and never on spaghetti.',
    meta: 'The authentic Bolognese ragù, built on milk and wine with barely any tomato, cooked three hours and served on egg tagliatelle.',
    kw: ['tagliatelle al ragu', 'bolognese ragu', 'ragu alla bolognese', 'tagliatelle recipe', 'authentic bolognese'],
    why: 'Milk goes in before the wine and is cooked away completely, which is the step that separates a Bolognese ragù from every other meat sauce. The lactose tenderises the meat and rounds off the acidity that follows. Tomato is a seasoning here, not a base — two spoonfuls of purée, not a tin — and the sauce should end up the colour of terracotta rather than red. Three hours at a bare blip; anything faster gives you mince in gravy.',
    ing: [
      '# For the ragù',
      '400 g beef mince, coarsely ground',
      '200 g pork mince',
      '150 g pancetta, finely diced',
      '1 onion, very finely chopped',
      '1 carrot, very finely chopped',
      '2 celery sticks, very finely chopped',
      '3 tbsp olive oil',
      '30 g butter',
      '300 ml whole milk',
      '300 ml dry white wine',
      '3 tbsp tomato purée',
      '400 ml beef stock',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '0.25 tsp ground nutmeg',
      '# For the pasta',
      '400 g "00" flour',
      '4 eggs',
      '# To serve',
      '80 g Parmigiano Reggiano, grated'
    ],
    st: [
      'Cook the pancetta in the oil and butter until its fat runs, 6 minutes. Add the onion, carrot and celery and sweat 15 minutes over low heat without colouring.',
      'Add both minces and cook 15 minutes over medium heat, breaking them up, until browned and the pan is dry.',
      'Pour in the milk and simmer until it has completely evaporated, about 20 minutes. Do not skip or shorten this.',
      'Add the wine and reduce it away entirely, another 15 minutes.',
      'Stir in the tomato purée, the stock, salt, pepper and nutmeg. Bring to the barest blip.',
      'Cook uncovered 150 minutes, stirring occasionally and topping up with a little water if it dries. It should end up terracotta-coloured and glossy.',
      'Make the pasta: work the flour and eggs to a firm dough, knead 10 minutes, rest 30 minutes, roll thin and cut into 8 mm ribbons. Boil 90 seconds and toss with the ragù and parmesan.'
    ],
    tips: [
      'Milk first, cooked away completely. It is the whole difference.',
      'Two spoons of purée, not a tin of tomatoes.',
      'Three hours at a blip. There is no fast version.'
    ],
    pair: ['A glass of Sangiovese', 'Green salad', 'More parmesan'],
    store: 'The ragù keeps 4 days refrigerated and is better on day two. It freezes for 3 months.',
    nut: [620, 30, 62, 27, 4, 8, 780]
  },

  'tortellini-in-brodo': {
    d: 'Tiny filled pasta in clear capon broth, and nothing else. Emilia at Christmas, and the broth matters as much as the tortellini.',
    meta: 'Tiny meat-filled tortellini served in a clarified capon broth, with nothing added but a little parmesan.',
    kw: ['tortellini in brodo', 'tortellini broth', 'tortellini in brodo recipe', 'emilia romagna pasta', 'christmas tortellini'],
    why: 'The broth must be clear, which means starting the meat in cold water and never letting it boil — a rolling boil emulsifies the fat into the liquid and clouds it permanently. Skim for the first twenty minutes and then leave it alone at a bare shiver. The tortellini are rolled thin enough to see your hand through, because in a broth there is nothing to hide a thick edge behind.',
    ing: [
      '# For the broth',
      '1 capon or large chicken, about 2 kg',
      '500 g beef shin',
      '2 onions, halved',
      '3 carrots',
      '3 celery sticks',
      '2 bay leaves',
      '1 tbsp black peppercorns',
      '2 tsp fine sea salt',
      '4 litres cold water',
      '# For the filling',
      '150 g pork loin, diced',
      '100 g mortadella',
      '100 g prosciutto crudo',
      '2 tbsp butter',
      '80 g Parmigiano Reggiano, grated',
      '1 egg',
      '0.25 tsp ground nutmeg',
      '0.5 tsp fine sea salt',
      '# For the pasta',
      '300 g "00" flour',
      '3 eggs'
    ],
    st: [
      'Put the capon and beef in a large pot with the cold water, vegetables, bay, peppercorns and salt. Bring very slowly to a bare shiver.',
      'Skim the grey foam relentlessly for the first 20 minutes, then simmer without ever boiling for 180 minutes. Strain and chill, then lift the fat off.',
      'Brown the diced pork in the butter, cool, then mince it finely with the mortadella and prosciutto.',
      'Mix with the parmesan, egg, nutmeg and salt into a stiff paste.',
      'Work the flour and eggs into a firm dough, knead 10 minutes and rest 30 minutes.',
      'Roll it thin enough to read through, cut 4 cm squares, put a pea of filling on each, fold to a triangle, then wrap the two points around your finger and pinch.',
      'Bring the broth to a gentle simmer, drop the tortellini in for 3 minutes, and serve in bowls with a little parmesan.'
    ],
    tips: [
      'Start in cold water and never boil, or the broth clouds.',
      'Roll the pasta until you can see your hand through it.',
      'A pea of filling. Overfilled tortellini burst in the broth.'
    ],
    pair: ['A glass of Lambrusco', 'Grated parmesan', 'Nothing else'],
    store: 'The broth keeps 4 days refrigerated and freezes for 3 months. Tortellini freeze raw on a tray for 2 months.',
    nut: [445, 26, 48, 16, 3, 4, 890]
  },

  'agnolotti': {
    d: 'Piedmontese filled pasta pinched shut along a single strip, so a row of them comes off the sheet in one go. Plin means pinch.',
    meta: 'Piedmontese pasta filled with roast meat and pinched along a single strip, then cut into a row of small parcels.',
    kw: ['agnolotti del plin', 'piedmont pasta', 'agnolotti recipe', 'pinched filled pasta', 'italian stuffed pasta'],
    why: 'The filling is made from meat that has already been roasted and is traditionally the leftovers of a Sunday joint — braised or roasted meat has lost its water and its collagen has set, so it minces into something dry enough to pipe, where raw meat would leak and steam the pasta open. The plin, the pinch between each mound, is what seals them; done properly you cut a whole row apart with a wheel in one pass.',
    ing: [
      '# For the filling',
      '300 g roast beef or braised veal, cooked and cooled',
      '150 g roast pork',
      '100 g spinach, wilted and squeezed dry',
      '80 g Parmigiano Reggiano, grated',
      '1 egg',
      '0.25 tsp ground nutmeg',
      '0.75 tsp fine sea salt',
      '2 tbsp of the roasting juices',
      '# For the pasta',
      '400 g "00" flour',
      '4 eggs',
      '# To dress',
      '100 g butter',
      '8 sage leaves',
      '60 g Parmigiano Reggiano, grated'
    ],
    st: [
      'Mince the cooked meats finely with the squeezed spinach, then mix with the parmesan, egg, nutmeg, salt and roasting juices into a stiff paste. Chill.',
      'Work the flour and eggs into a firm dough, knead 10 minutes, and rest 30 minutes.',
      'Roll a long strip of pasta as thin as you can and lay it in front of you.',
      'Pipe small mounds of filling in a line along the lower half, 2 cm apart.',
      'Fold the top half over and, working along the row, pinch firmly between each mound with finger and thumb — the plin.',
      'Cut along the folded edge and between each pinch with a fluted wheel.',
      'Boil 3 minutes. Melt the butter with the sage until it foams and smells nutty, toss the agnolotti through it, and serve with parmesan.'
    ],
    tips: [
      'Cooked meat only. Raw filling leaks and steams the seal open.',
      'Pinch hard between each mound — that is the seal.',
      'Butter and sage. Anything heavier buries them.'
    ],
    pair: ['A glass of Nebbiolo', 'Green salad', 'More parmesan'],
    store: 'Freeze raw on a floured tray for 2 months and cook from frozen. Refrigerated, use within a day.',
    nut: [545, 26, 52, 25, 3, 3, 720]
  },

  'culurgiones': {
    d: 'Sardinian parcels of potato, mint and pecorino, closed with a pleat that looks like an ear of wheat. The pleat takes practice and nothing else about it is hard.',
    meta: 'Sardinian pasta filled with potato, mint and pecorino and closed with a wheat-ear pleat, served in simple tomato sauce.',
    kw: ['culurgiones', 'sardinian pasta', 'culurgiones recipe', 'potato mint pasta', 'wheat ear pleat pasta'],
    why: 'The potatoes are baked rather than boiled, because boiled potato carries water that turns the filling slack and bursts the pleat. Bake them in their skins, scoop the flesh and rice it while hot. Mint rather than basil is what makes this Sardinian, and it goes in at a quantity that seems excessive — a whole large bunch to a kilo of potato — because the pecorino is assertive and mint is the only thing that stands up to it.',
    ing: [
      '# For the filling',
      '1 kg floury potatoes',
      '150 g aged pecorino sardo, grated',
      '50 g fresh mint leaves, finely chopped',
      '4 garlic cloves, crushed',
      '4 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the pasta',
      '400 g semola rimacinata',
      '200 ml warm water',
      '1 tsp fine sea salt',
      '# For the sauce',
      '400 g tin chopped tomatoes',
      '3 tbsp olive oil',
      '2 garlic cloves, crushed',
      '10 basil leaves',
      '0.75 tsp fine sea salt'
    ],
    st: [
      'Bake the potatoes whole at 200°C for 60 minutes until soft. Scoop out the flesh while hot and pass it through a ricer.',
      'Mix with the pecorino, mint, garlic, oil, salt and pepper. Cool completely.',
      'Knead the semola, water and salt into a firm smooth dough, 10 minutes, and rest 30 minutes.',
      'Roll thin and cut 9 cm discs. Put a walnut of filling on each.',
      'Hold a disc in your palm, fold the sides up around the filling, and pleat alternately from one side then the other, working up the seam, so it closes in a zigzag like an ear of wheat.',
      'Simmer the tomatoes with the oil, garlic, basil and salt for 20 minutes.',
      'Boil the culurgiones 4 minutes, until they float and the pasta is tender, then dress lightly with the tomato sauce.'
    ],
    tips: [
      'Bake the potatoes. Boiled ones make a wet filling.',
      'A whole bunch of mint. It has to stand up to the pecorino.',
      'Pleat alternately, side to side, up the seam.'
    ],
    pair: ['A glass of Cannonau', 'Green salad', 'Grated pecorino'],
    store: 'Freeze raw on a floured tray for 2 months. Refrigerated, cook within a day.',
    nut: [520, 20, 62, 21, 5, 4, 690]
  },

  'malloreddus': {
    d: 'Ridged saffron gnocchetti with a sausage and tomato sauce. Sardinia\'s everyday pasta, and the ridges exist to hold the sauce.',
    meta: 'Ridged Sardinian semolina gnocchetti in a sausage, saffron and tomato sauce finished with aged pecorino.',
    kw: ['malloreddus', 'sardinian gnocchetti', 'malloreddus campidanese', 'saffron pasta sardinia', 'sausage tomato pasta'],
    why: 'Saffron goes into the sauce rather than the pasta in the Campidanese version, and it needs to be bloomed in a little warm stock for ten minutes first — thrown in dry it stays as red threads and gives colour to almost nothing. The sausage is skinned and crumbled rather than sliced, so it disperses through the sauce and seasons all of it; sliced sausage stays as separate lumps and leaves the tomato bland.',
    ing: [
      '500 g malloreddus, or gnocchetti sardi',
      '# For the sauce',
      '400 g Italian pork sausage, skinned and crumbled',
      '1 onion, finely chopped',
      '3 tbsp olive oil',
      'Large pinch saffron threads',
      '100 ml warm stock or water',
      '150 ml dry white wine',
      '700 g passata',
      '1 tsp fennel seeds, crushed',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '80 g aged pecorino sardo, grated',
      '10 basil leaves'
    ],
    st: [
      'Steep the saffron in the warm stock for 10 minutes.',
      'Soften the onion in the oil for 8 minutes, then add the crumbled sausage and brown it hard for 10 minutes, breaking it up small.',
      'Add the fennel seeds and cook 1 minute.',
      'Pour in the wine and let it reduce away almost completely.',
      'Add the passata, the saffron with its liquid, the salt and pepper. Simmer 40 minutes until thick and darkened.',
      'Boil the malloreddus in well-salted water until al dente, about 12 minutes, and drain, keeping a cup of the water.',
      'Toss the pasta through the sauce with a splash of the water and half the pecorino, then serve with the rest of the cheese and the basil.'
    ],
    tips: [
      'Bloom the saffron in warm liquid first.',
      'Crumble the sausage, never slice it.',
      'The ridges hold the sauce — do not substitute a smooth shape.'
    ],
    pair: ['A glass of Cannonau', 'Green salad', 'Crusty bread'],
    store: 'The sauce keeps 4 days refrigerated and freezes for 3 months. Cook the pasta fresh.',
    nut: [585, 26, 72, 21, 4, 7, 820]
  },

  'strozzapreti': {
    d: 'Hand-rolled twists in a boscaiola of mushrooms, sausage and cream. The name means priest-stranglers and nobody has a convincing explanation.',
    meta: 'Hand-rolled Romagnol pasta twists in a woodsman sauce of mushrooms, sausage and a little cream.',
    kw: ['strozzapreti', 'boscaiola sauce', 'strozzapreti recipe', 'mushroom sausage pasta', 'romagna pasta'],
    why: 'The mushrooms go into a dry pan first with no fat at all and are left alone until they squeak and then brown. Mushrooms are mostly water, and adding oil at the start means they stew in it and never colour — dry-frying drives the water off first, and the oil goes in once they have already browned. The cream is a small amount stirred in at the very end, not a base: boscaiola is a woodsman\'s sauce, not a cream sauce.',
    ing: [
      '# For the pasta',
      '400 g "00" flour',
      '200 ml warm water',
      '1 tsp fine sea salt',
      '# For the sauce',
      '400 g mixed mushrooms, torn',
      '300 g Italian pork sausage, skinned and crumbled',
      '3 tbsp olive oil',
      '2 shallots, finely chopped',
      '3 garlic cloves, sliced',
      '150 ml dry white wine',
      '200 g passata',
      '100 ml double cream',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '60 g Parmigiano Reggiano, grated',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Knead the flour, water and salt into a firm dough, 10 minutes, and rest 30 minutes. Roll it out and cut into 2 cm strips, then tear each into 6 cm lengths and roll them between your palms into rough twists.',
      'Put the mushrooms into a large dry pan over high heat with no fat. Leave them alone until they squeak, release their water and then start to brown, about 8 minutes.',
      'Only now add 2 tbsp of the oil, along with the shallots and garlic, and cook 3 minutes. Scrape them out.',
      'Brown the crumbled sausage in the remaining oil for 8 minutes.',
      'Add the wine and reduce it away, then the passata, salt and pepper. Simmer 10 minutes.',
      'Return the mushrooms and stir in the cream. Simmer 3 minutes only.',
      'Boil the strozzapreti 4 minutes until they float and are tender, then toss through the sauce with the parmesan and parsley.'
    ],
    tips: [
      'Dry pan for the mushrooms. Oil first means they stew.',
      'A splash of cream at the end, not a base.',
      'Roll the twists loosely — tight ones stay raw in the middle.'
    ],
    pair: ['A glass of Sangiovese', 'Green salad', 'Crusty bread'],
    store: 'The sauce keeps 3 days refrigerated. Fresh pasta freezes raw for 2 months.',
    nut: [625, 24, 68, 28, 4, 5, 780]
  },

  'pici-cacio-e-pepe': {
    d: 'Fat hand-rolled Tuscan spaghetti in a sauce of nothing but garlic, tomato and oil. Aglione is a giant sweet garlic; ordinary garlic works with a lighter hand.',
    meta: 'Fat hand-rolled Tuscan pici in a sauce of slowly softened garlic and tomato, with no cheese and nothing else.',
    kw: ['pici', "pici all'aglione", 'tuscan hand rolled pasta', 'pici recipe', 'garlic tomato pasta'],
    why: 'The garlic is softened in oil over very low heat for a full fifteen minutes before the tomato goes in, until it collapses to a sweet paste — this is a sauce with three ingredients and garlic browned even slightly turns the whole thing acrid. Aglione, the Tuscan giant garlic, is mild enough to use in the quantities the dish calls for; with ordinary garlic use half as much and poach it in milk first if you have the time.',
    ing: [
      '# For the pici',
      '400 g "00" flour',
      '200 ml warm water',
      '2 tbsp olive oil',
      '1 tsp fine sea salt',
      '# For the aglione',
      '1 whole head aglione, or 8 ordinary garlic cloves',
      '8 tbsp olive oil',
      '800 g ripe tomatoes, peeled and chopped, or 2 tins',
      '1 dried chilli',
      '1.25 tsp fine sea salt',
      '# To finish',
      '2 tbsp olive oil',
      '10 basil leaves'
    ],
    st: [
      'Knead the flour, water, oil and salt into a firm dough, 10 minutes. Rest 30 minutes under a cloth.',
      'Roll the dough 1 cm thick, cut into strips, and roll each strip under your palms into a long fat noodle about the thickness of a pencil. They will be uneven, which is correct.',
      'Slice the garlic thinly and put it in a wide pan with the 8 tbsp oil over the lowest possible heat.',
      'Cook 15 minutes, stirring, until it has collapsed into a sweet paste. It must not take any colour at all.',
      'Add the tomatoes, chilli and salt and simmer 30 minutes, crushing the tomatoes against the pan, until thick.',
      'Boil the pici for 5 to 7 minutes — they are thick and take longer than they look.',
      'Toss through the sauce with a splash of pasta water, finish with the oil and basil, and serve without cheese.'
    ],
    tips: [
      'Fifteen minutes of very low heat on the garlic. No colour at all.',
      'Roll them uneven. Machine-perfect pici are not pici.',
      'No cheese. The sauce is three things and that is the point.'
    ],
    pair: ['A glass of Chianti', 'Crusty bread', 'Green salad'],
    store: 'The sauce keeps 4 days refrigerated and freezes for 3 months. Fresh pici freeze raw for 2 months.',
    nut: [545, 16, 92, 13, 6, 8, 620]
  },

  'pappardelle-al-cinghiale': {
    d: 'Wild boar marinated in red wine and stewed for three hours, on wide ribbons. Tuscany, and juniper is what makes it taste of the animal rather than of stew.',
    meta: 'Wild boar marinated overnight in red wine and juniper, stewed three hours and served on wide pappardelle ribbons.',
    kw: ['pappardelle al cinghiale', 'wild boar ragu', 'cinghiale recipe', 'tuscan boar pasta', 'game ragu'],
    why: 'Boar is strongly flavoured and can be muddy, and the overnight marinade in red wine with juniper and bay is what draws that off — the marinade is then discarded rather than used, which surprises people but is the point of it. Juniper goes back in fresh for the cooking. If using farmed boar or pork shoulder instead, keep the juniper and shorten the marinade, since the muddiness is not there to remove.',
    ing: [
      '# For the marinade',
      '1 kg wild boar shoulder, cut into 3 cm pieces',
      '750 ml red wine',
      '2 onions, sliced',
      '3 bay leaves',
      '15 juniper berries, crushed',
      '1 tbsp black peppercorns',
      '4 rosemary sprigs',
      '# For the ragù',
      '4 tbsp olive oil',
      '1 onion, finely chopped',
      '1 carrot, finely chopped',
      '2 celery sticks, finely chopped',
      '3 garlic cloves, crushed',
      '3 tbsp tomato purée',
      '400 ml red wine',
      '500 ml beef stock',
      '10 juniper berries, crushed',
      '1.75 tsp fine sea salt',
      '# To serve',
      '500 g pappardelle'
    ],
    st: [
      'Combine the boar with all the marinade ingredients, cover, and refrigerate at least 720 minutes.',
      'Drain the meat, discard the marinade entirely, and pat the pieces thoroughly dry.',
      'Brown the boar hard in the oil in batches, 10 minutes. Lift out.',
      'Soften the chopped onion, carrot and celery in the same pan 12 minutes, then add the garlic and tomato purée and cook 2 minutes.',
      'Return the meat, add the fresh wine, stock, juniper and salt, and bring to a bare simmer.',
      'Cook covered 180 minutes, until the boar shreds under a fork. Break it up in the sauce and reduce uncovered if loose.',
      'Boil the pappardelle, drain, and toss through the ragù with a splash of the pasta water.'
    ],
    rest: [720, 'marinating overnight'],
    tips: [
      'Throw the marinade away. Its job was to draw the muddiness out.',
      'Fresh juniper for the cooking.',
      'Dry the meat properly or it will not brown.'
    ],
    pair: ['A glass of Brunello', 'Grilled bread', 'Green salad'],
    store: 'Refrigerated for 4 days and better on day two. The ragù freezes for 3 months.',
    nut: [665, 38, 66, 27, 4, 6, 810]
  },

  'trofie-al-pesto': {
    d: 'Ligurian twists with potato and green beans cooked in the same water, all dressed in pesto. The potato is not a garnish — it thickens the sauce.',
    meta: 'Ligurian trofie boiled with potato and green beans and dressed in pesto loosened with the starchy cooking water.',
    kw: ['trofie al pesto', 'ligurian pesto pasta', 'trofie recipe', 'pesto potatoes green beans', 'genovese pasta'],
    why: 'Everything cooks in one pot and the starch from the potato is what lets the pesto cling — a pesto tossed through plain pasta slides off, where the same pesto loosened with potato-starchy water becomes a coating. The pesto itself is never heated. Take the pan off the heat, let it stop steaming for thirty seconds, then stir the pesto in; heat turns basil khaki and makes the cheese stringy.',
    ing: [
      '400 g trofie',
      '250 g waxy potatoes, cut into 1 cm dice',
      '200 g green beans, cut into 3 cm lengths',
      '1 tbsp fine sea salt, for the water',
      '# For the pesto',
      '80 g basil leaves',
      '2 garlic cloves',
      '30 g pine nuts',
      '50 g Parmigiano Reggiano, grated',
      '30 g pecorino sardo, grated',
      '120 ml mild olive oil',
      '0.5 tsp fine sea salt',
      '# To finish',
      '2 tbsp olive oil'
    ],
    st: [
      'Pound the garlic, pine nuts and salt to a paste in a mortar, then add the basil a handful at a time and grind against the sides until it is a green paste.',
      'Work in both cheeses, then trickle in the oil, stirring rather than pounding. Keep it cool.',
      'Bring a large pan of well-salted water to the boil and add the diced potato. Cook 5 minutes.',
      'Add the trofie and cook 8 minutes.',
      'Add the green beans for the last 4 minutes, so everything finishes together.',
      'Reserve two cups of the cooking water, then drain.',
      'Take the pan off the heat, wait 30 seconds, then return everything to it with the pesto and enough of the hot water to make it flow. Toss hard and serve immediately.'
    ],
    tips: [
      'One pot. The potato starch is what makes the pesto cling.',
      'Pesto off the heat, always. Basil goes khaki in seconds.',
      'Keep back plenty of the cooking water.'
    ],
    pair: ['A glass of Vermentino', 'Focaccia', 'Green salad'],
    store: 'The pesto keeps 4 days under oil and freezes for 3 months. The dish itself does not keep.',
    nut: [685, 22, 82, 30, 7, 5, 720]
  },

  'pizzoccheri': {
    d: 'Buckwheat ribbons layered with cabbage, potato and melting cheese under browned butter and sage. Alpine food, and unapologetically heavy.',
    meta: 'Buckwheat pasta ribbons boiled with cabbage and potato, layered with valtellina cheese and finished with sage butter.',
    kw: ['pizzoccheri', 'buckwheat pasta', 'pizzoccheri valtellina', 'pizzoccheri recipe', 'alpine italian pasta'],
    why: 'The cheese is layered in rather than stirred through, and the dish is assembled in a warm bowl in alternating layers so it melts from the residual heat rather than in the pan. Stirred into hot pasta it goes stringy and gathers into a single lump. Buckwheat has no gluten, so the pasta is fragile and must be lifted with a slotted spoon rather than poured into a colander, which breaks it.',
    ing: [
      '# For the pasta',
      '300 g buckwheat flour',
      '100 g "00" flour',
      '220 ml warm water',
      '1 tsp fine sea salt',
      '# For the pot',
      '300 g savoy cabbage, shredded',
      '300 g waxy potatoes, sliced 5 mm thick',
      '1 tbsp fine sea salt, for the water',
      '# To layer',
      '300 g valtellina casera or fontina, diced',
      '80 g Parmigiano Reggiano, grated',
      '# For the butter',
      '150 g butter',
      '4 garlic cloves, sliced',
      '12 sage leaves',
      '0.5 tsp black pepper'
    ],
    st: [
      'Knead both flours with the water and salt into a firm dough, 8 minutes, and rest 30 minutes. Roll 2 mm thick and cut into ribbons 1 cm wide and 7 cm long.',
      'Bring a large pan of salted water to the boil and add the potato slices. Cook 8 minutes.',
      'Add the cabbage and cook 5 minutes.',
      'Add the pizzoccheri and cook 5 minutes more, until tender.',
      'Meanwhile melt the butter with the garlic and sage over medium heat until the butter foams and turns nut brown and the sage crisps.',
      'Lift everything out of the water with a slotted spoon — do not pour it into a colander, the pasta breaks.',
      'Layer in a warm bowl: pasta and vegetables, then diced cheese and parmesan, repeated three times. Pour the hot sage butter over, add the pepper, and leave 2 minutes before tossing at the table.'
    ],
    tips: [
      'Layer the cheese, never stir it in.',
      'Lift the pasta out with a spoon. Buckwheat breaks in a colander.',
      'Brown the butter properly — pale butter leaves it flat.'
    ],
    pair: ['A glass of Sassella', 'Green salad', 'A cold evening'],
    store: 'Refrigerated for 2 days. Reheat at 180°C covered. It does not freeze well.',
    nut: [645, 26, 62, 33, 7, 5, 890]
  },

  'pasta-alla-genovese': {
    d: 'Naples\' onion ragù, in which four kilos of onions cook down for four hours with a piece of beef until they turn brown and sweet. No tomato at all.',
    meta: 'A Neapolitan ragù of onions cooked down for four hours with beef until they collapse into a sweet brown sauce, with no tomato.',
    kw: ['pasta alla genovese', 'neapolitan onion ragu', 'genovese recipe', 'onion beef pasta', 'naples pasta sauce'],
    why: 'The onions are cooked with the lid on for the first two hours, which sounds wrong for something meant to brown and is exactly right: they need to collapse and release all their water before any colouring can happen. Take the lid off too early and they catch. The quantity also looks absurd — a kilo of onions per two people — and reduces to about a fifth of its volume, so it is not absurd at all.',
    ing: [
      '1.5 kg white onions, sliced thinly',
      '600 g beef shin or chuck, in one piece',
      '100 g pancetta, diced',
      '4 tbsp olive oil',
      '2 carrots, chopped',
      '2 celery sticks, chopped',
      '200 ml dry white wine',
      '3 bay leaves',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To serve',
      '500 g ziti or paccheri, broken',
      '80 g Parmigiano Reggiano, grated'
    ],
    st: [
      'Brown the beef and pancetta in the oil in a heavy pot, 10 minutes.',
      'Add all the onions, the carrot, celery, bay and salt. They will fill the pot to the brim.',
      'Cover and cook over low heat 120 minutes, stirring occasionally. The onions collapse and release a great deal of liquid.',
      'Take the lid off and continue for a further 90 minutes, stirring more often now, until the liquid has gone and the onions are a deep golden brown.',
      'Add the wine and let it reduce away completely, about 20 minutes, scraping the base.',
      'Lift out the beef, shred it, and return it to the onions. Season with the pepper.',
      'Boil the pasta, drain, and toss through the sauce with a splash of the water and the parmesan.'
    ],
    tips: [
      'Lid on for the first two hours. They have to collapse before they can brown.',
      'The quantity of onions is not a mistake.',
      'No tomato. This is the point of the dish.'
    ],
    pair: ['A glass of Aglianico', 'Green salad', 'Crusty bread'],
    store: 'Refrigerated for 4 days and better on day two. It freezes for 3 months.',
    nut: [625, 32, 68, 24, 6, 16, 780]
  },

  'pasta-e-ceci': {
    d: 'Chickpeas and broken pasta cooked into a thick soup with rosemary. Roman, cheap, and better than the sum of its parts if you blend part of it.',
    meta: 'Chickpeas and broken pasta cooked together into a thick soup with rosemary, part of it blended for body.',
    kw: ['pasta e ceci', 'chickpea pasta soup', 'pasta e ceci recipe', 'roman chickpea soup', 'italian bean pasta'],
    why: 'A third of the chickpeas is blended and returned to the pot, which is what gives the dish its body — otherwise it is chickpeas and pasta sitting in water. The pasta also cooks in the soup rather than separately, so its starch thickens things further; drained pasta added at the end leaves a thin broth. Rosemary goes in as a whole sprig and comes out, since chopped rosemary in a soup is unpleasantly woody.',
    ing: [
      '2 x 400 g tins chickpeas, liquid reserved',
      '200 g small pasta, such as ditalini or broken spaghetti',
      '4 tbsp olive oil',
      '1 onion, finely chopped',
      '2 garlic cloves, crushed',
      '2 anchovy fillets, optional',
      '1 tbsp tomato purée',
      '2 rosemary sprigs',
      '1 dried chilli',
      '1.25 tsp fine sea salt',
      '900 ml water or vegetable stock',
      '# To finish',
      '3 tbsp olive oil',
      '0.5 tsp black pepper'
    ],
    st: [
      'Soften the onion in the oil 8 minutes, then add the garlic, the anchovies if using, and the chilli, and cook 2 minutes.',
      'Stir in the tomato purée and cook 2 minutes.',
      'Add the chickpeas with their liquid, the whole rosemary sprigs, the salt and the water. Simmer 20 minutes.',
      'Fish out the rosemary. Blend a third of the soup until smooth and stir it back in.',
      'Add the pasta and cook it directly in the soup, stirring often so it does not catch, until al dente — usually 10 minutes.',
      'Let it stand 5 minutes off the heat; it thickens considerably.',
      'Serve with a generous pour of raw olive oil and plenty of black pepper.'
    ],
    tips: [
      'Blend a third of it. That is the body.',
      'Cook the pasta in the soup, not separately.',
      'Whole rosemary sprigs, removed before serving.'
    ],
    pair: ['Crusty bread', 'A glass of Frascati', 'Green salad'],
    store: 'Refrigerated for 3 days; it thickens enormously. Loosen with water. It freezes without the pasta.',
    nut: [445, 18, 62, 14, 11, 5, 680]
  },

  'pasta-con-le-sarde': {
    d: 'Sardines, wild fennel, raisins, pine nuts and saffron. Sicily\'s Arab inheritance on a plate, and the toasted breadcrumbs replace cheese.',
    meta: 'Sardines cooked with wild fennel, saffron, raisins and pine nuts, finished with toasted breadcrumbs instead of cheese.',
    kw: ['pasta con le sarde', 'sicilian sardine pasta', 'pasta con le sarde recipe', 'fennel sardine pasta', 'sicilian pasta'],
    why: 'The fennel is boiled first and its cooking water is then used for the pasta, which carries the flavour through the whole dish rather than leaving it in the sauce — this is the step that makes it taste Sicilian rather than merely fishy. Breadcrumbs stand in for cheese, as they do in most Sicilian fish pastas, and they must be toasted dry and added at the table so they stay crisp.',
    ing: [
      '400 g bucatini',
      '# For the sauce',
      '400 g wild fennel fronds, or the fronds of 3 fennel bulbs plus 1 tsp fennel seeds',
      '500 g fresh sardines, filleted',
      '6 tbsp olive oil',
      '1 large onion, finely chopped',
      '6 anchovy fillets',
      'Large pinch saffron threads',
      '60 g raisins, soaked',
      '50 g pine nuts',
      '1.25 tsp fine sea salt',
      '# For the breadcrumbs',
      '80 g coarse breadcrumbs',
      '2 tbsp olive oil'
    ],
    st: [
      'Boil the fennel fronds in a large pan of well-salted water for 10 minutes. Lift them out, chop them, and keep the water — the pasta cooks in it.',
      'Steep the saffron in a little of the hot fennel water.',
      'Toast the breadcrumbs in 2 tbsp oil in a dry pan until deep gold and crisp. Tip out and reserve.',
      'Soften the onion in 6 tbsp oil for 10 minutes, then melt the anchovies into it.',
      'Add half the sardines and break them up so they dissolve into the sauce. Add the chopped fennel, saffron liquid, drained raisins, pine nuts and salt, and cook 10 minutes.',
      'Lay the remaining sardine fillets on top and cook 5 minutes more without stirring, so they stay whole.',
      'Cook the bucatini in the fennel water, drain, and fold through the sauce. Serve with the toasted breadcrumbs scattered over at the table.'
    ],
    tips: [
      'Cook the pasta in the fennel water. That is the whole flavour.',
      'Half the sardines dissolve, half stay whole.',
      'Breadcrumbs instead of cheese, added at the table.'
    ],
    pair: ['A glass of Grillo', 'Green salad', 'Lemon wedges'],
    store: 'Best immediately. The sauce keeps 2 days refrigerated; toast fresh breadcrumbs.',
    nut: [585, 26, 72, 21, 6, 12, 720]
  },

  'busiate-trapanese': {
    d: 'Trapani\'s pesto: almonds instead of pine nuts, raw tomato instead of just basil. Made in a mortar and never cooked.',
    meta: 'A raw Trapanese pesto of almonds, tomato, basil and garlic pounded in a mortar and tossed through spiral busiate.',
    kw: ['pesto trapanese', 'busiate', 'sicilian pesto recipe', 'almond tomato pesto', 'trapani pasta'],
    why: 'The tomatoes are peeled and deseeded before they go in, and skipping that gives you a watery pink sauce rather than a pesto — the seeds and their jelly carry most of the liquid and none of the flavour. Almonds are blanched and raw, not toasted, which keeps the sauce pale and sweet. Everything is pounded rather than blitzed, because a processor emulsifies the tomato into a smoothie.',
    ing: [
      '400 g busiate, or fusilli',
      '# For the pesto',
      '100 g blanched almonds',
      '4 garlic cloves',
      '600 g ripe tomatoes, peeled and deseeded',
      '60 g basil leaves',
      '60 g pecorino, grated',
      '120 ml olive oil',
      '1.25 tsp fine sea salt',
      '0.25 tsp chilli flakes',
      '# To finish',
      '2 tbsp olive oil',
      '20 g basil leaves'
    ],
    st: [
      'Score and blanch the tomatoes for 30 seconds, peel them, halve them and scoop out every seed and all the jelly.',
      'Pound the almonds, garlic and salt in a mortar to a coarse paste.',
      'Add the basil a handful at a time, grinding it against the sides.',
      'Add the deseeded tomato flesh and pound until it breaks down into a rough, thick sauce with visible texture.',
      'Work in the pecorino and the chilli, then trickle in the oil, stirring rather than pounding.',
      'Cook the busiate in well-salted water until al dente.',
      'Toss the drained pasta through the raw pesto with a splash of the cooking water. Do not heat it. Finish with oil and basil.'
    ],
    tips: [
      'Deseed the tomatoes completely or the sauce is watery.',
      'Raw almonds, not toasted — it should stay pale.',
      'Never heat it. This is a raw sauce.'
    ],
    pair: ['A glass of Grillo', 'Green salad', 'Grilled aubergine'],
    store: 'The pesto keeps 3 days refrigerated under oil. It does not freeze — the tomato weeps.',
    nut: [665, 20, 82, 29, 6, 7, 620]
  },

  'anelletti-al-forno': {
    d: 'Little pasta rings baked with ragù, peas and cheese into something you can cut in slices. Palermo eats it at room temperature on the beach.',
    meta: 'Small pasta rings baked with ragù, peas, aubergine and cheese into a firm timballo that can be cut into slices.',
    kw: ['anelletti al forno', 'palermo baked pasta', 'anelletti recipe', 'sicilian pasta timballo', 'baked ring pasta'],
    why: 'The tin is lined with toasted breadcrumbs rather than greased, which does two things: it stops the timballo sticking, and it forms a crust that lets you turn it out whole and cut it in slices. Undercook the pasta by four minutes as well — it keeps absorbing sauce in the oven, and pasta boiled to al dente first will be soft and shapeless by the time the top has browned.',
    ing: [
      '500 g anelletti, or small rings',
      '# For the ragù',
      '500 g beef mince',
      '1 onion, finely chopped',
      '4 tbsp olive oil',
      '150 ml red wine',
      '3 tbsp tomato purée',
      '700 g passata',
      '200 g frozen peas',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To layer',
      '1 aubergine, diced and fried',
      '250 g caciocavallo or provola, diced',
      '80 g Parmigiano Reggiano, grated',
      '# For the tin',
      '3 tbsp olive oil',
      '60 g coarse breadcrumbs, toasted'
    ],
    st: [
      'Soften the onion in the oil, add the mince and brown it hard, 12 minutes. Add the wine and reduce away.',
      'Stir in the tomato purée, then the passata, salt and pepper. Simmer 45 minutes until thick. Add the peas for the last 5 minutes.',
      'Boil the anelletti for 4 minutes less than the packet says and drain.',
      'Fold the pasta through the ragù with the fried aubergine and half the diced cheese.',
      'Oil a deep 24 cm cake tin and coat the inside thickly with the toasted breadcrumbs, including the sides.',
      'Pack half the pasta in, scatter the rest of the cheese over, then the remaining pasta. Press down firmly and top with parmesan and more breadcrumbs.',
      'Bake at 190°C / 375°F for 40 minutes until browned. Rest 20 minutes before turning out and slicing.'
    ],
    tips: [
      'Breadcrumb the tin, not grease it. That is the crust.',
      'Undercook the pasta by four minutes.',
      'Rest twenty minutes before turning out or it collapses.'
    ],
    pair: ['A glass of Nero d\'Avola', 'Green salad', 'A beach'],
    store: 'Refrigerated for 4 days and genuinely good cold. It freezes baked for 2 months.',
    nut: [565, 26, 58, 25, 4, 8, 820]
  },

  'fregola': {
    d: 'Toasted Sardinian pasta pearls cooked like a risotto with clams. The toasting is what separates fregola from couscous.',
    meta: 'Toasted Sardinian fregola cooked risotto-style in clam liquor and tomato until it absorbs the broth and thickens.',
    kw: ['fregola', 'fregola con arselle', 'sardinian pasta clams', 'fregola recipe', 'toasted pasta pearls'],
    why: 'Fregola is toasted in the oven during manufacture, which is why it holds its shape through fifteen minutes of simmering when couscous would dissolve — and why it needs a real broth to cook in rather than plain water. The clam liquor is that broth. Strain it carefully through muslin, since clams carry sand and one gritty mouthful ruins the dish for everybody.',
    ing: [
      '300 g fregola sarda',
      '1 kg clams, purged in salted water',
      '5 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1 dried chilli',
      '200 ml dry white wine',
      '400 g cherry tomatoes, halved',
      '700 ml fish stock or water, hot',
      '1 tsp fine sea salt',
      '# To finish',
      '30 g flat-leaf parsley, chopped',
      '2 tbsp olive oil',
      '1 lemon, zested'
    ],
    st: [
      'Soak the clams in heavily salted cold water for 60 minutes to purge them, then rinse. Discard any that stay open when tapped.',
      'Heat 2 tbsp oil in a wide pan with 2 garlic cloves, add the clams and the wine, cover, and steam 4 minutes until they open.',
      'Lift the clams out, shell two-thirds of them, and strain the liquor through muslin to catch the sand.',
      'In the same pan, soften the remaining garlic and the chilli in 3 tbsp oil, then add the tomatoes and cook 8 minutes until collapsing.',
      'Add the fregola and turn it in the pan for 2 minutes.',
      'Add the strained clam liquor and the hot stock a ladleful at a time, as for a risotto, stirring, for 15 minutes until the fregola is tender and the liquid thick.',
      'Return all the clams, season, and finish off the heat with parsley, oil and lemon zest.'
    ],
    rest: [60, 'purging the clams'],
    tips: [
      'Strain the clam liquor through muslin. Sand ruins it.',
      'Cook it like a risotto, adding liquid gradually.',
      'Shell two-thirds and leave a third in the shell for the look.'
    ],
    pair: ['A glass of Vermentino', 'Crusty bread', 'Green salad'],
    store: 'Best immediately. Refrigerated for a day; the fregola softens considerably.',
    nut: [485, 26, 62, 14, 3, 3, 780]
  },

  'risotto-ai-funghi': {
    d: 'Rice cooked in mushroom stock made from the soaking water of dried porcini. That water is the flavour and pouring it away is the common mistake.',
    meta: 'Risotto built on the strained soaking liquid of dried porcini as well as the mushrooms themselves, finished with butter and parmesan.',
    kw: ['risotto ai funghi', 'mushroom risotto', 'risotto funghi porcini', 'porcini risotto recipe', 'italian mushroom rice'],
    why: 'Dried porcini soaking liquid is the most intensely mushroom-flavoured thing in any kitchen and most recipes throw it away. Strain it through muslin to catch the grit and use it as a third of the stock. The mantecatura at the end — cold butter and parmesan beaten in off the heat, hard, for a full minute — is what makes a risotto creamy without cream, and it only works if the pan is off the flame.',
    ing: [
      '30 g dried porcini',
      '400 ml hot water, for soaking',
      '300 g arborio or carnaroli rice',
      '300 g fresh mushrooms, sliced',
      '1 onion, very finely chopped',
      '3 tbsp olive oil',
      '30 g butter',
      '150 ml dry white wine',
      '800 ml vegetable stock, hot',
      '1.25 tsp fine sea salt',
      '# For the mantecatura',
      '80 g cold butter, diced',
      '80 g Parmigiano Reggiano, grated',
      '# To finish',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Soak the dried porcini in the hot water for 20 minutes. Lift them out, chop them, and strain the liquid through muslin. Keep it.',
      'Brown the fresh mushrooms in a dry pan first, 8 minutes, then add 2 tbsp of the oil and cook 2 minutes more. Set aside.',
      'Soften the onion in the remaining oil and the 30 g butter for 8 minutes without colouring.',
      'Add the rice and toast it for 2 minutes until the grains are translucent at the edges.',
      'Add the wine and stir until absorbed. Then add the strained porcini liquid a ladleful at a time, followed by the hot stock, stirring, for 18 minutes.',
      'Stir in both lots of mushrooms and the salt for the last 3 minutes. The risotto should ripple when you shake the pan.',
      'Take it off the heat, add the cold butter and parmesan, and beat hard for a full minute. Rest 2 minutes, then serve with parsley.'
    ],
    tips: [
      'Never throw away the porcini soaking water.',
      'Brown the fresh mushrooms dry before any fat.',
      'Mantecatura off the heat, beaten hard for a minute.'
    ],
    pair: ['A glass of Barbaresco', 'Green salad', 'More parmesan'],
    store: 'Best immediately. Leftovers make supplì. It does not reheat well.',
    nut: [545, 14, 68, 24, 3, 3, 820]
  },

  'risotto-al-nero': {
    d: 'Rice blackened with cuttlefish ink, the cuttlefish itself cooked into it. Venice, and it should be genuinely black rather than grey.',
    meta: 'Risotto blackened with cuttlefish ink and cooked with the cuttlefish itself, finished with oil rather than butter and cheese.',
    kw: ['risotto al nero di seppia', 'squid ink risotto', 'black risotto recipe', 'venetian risotto', 'cuttlefish ink rice'],
    why: 'The ink goes in in two stages — most of it early so it cooks into the rice, and a spoonful at the very end for the colour, which dulls with heat. And this risotto is finished with olive oil rather than butter and parmesan, because in Venice cheese does not go near fish; the creaminess comes from beating the rice hard off the heat with oil and a little of the cooking liquid instead.',
    ing: [
      '600 g cuttlefish or squid, cleaned, ink sacs reserved, or 4 sachets of ink',
      '300 g carnaroli rice',
      '1 onion, very finely chopped',
      '5 tbsp olive oil',
      '4 garlic cloves, crushed',
      '150 ml dry white wine',
      '2 tbsp tomato purée',
      '1 litre fish stock, hot',
      '1.25 tsp fine sea salt',
      '0.25 tsp chilli flakes',
      '# To finish',
      '3 tbsp olive oil',
      '20 g flat-leaf parsley, chopped',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Cut the cuttlefish into 1 cm strips. Keep the ink sacs whole in a small bowl, or open the sachets.',
      'Soften the onion in 5 tbsp oil for 8 minutes, then add the garlic and cook 1 minute.',
      'Add the cuttlefish and cook 5 minutes over high heat, then the tomato purée for 2 minutes.',
      'Add the rice and toast it 2 minutes, then the wine, stirring until absorbed.',
      'Stir in three-quarters of the ink, then add the hot stock a ladleful at a time for 16 minutes, stirring, until the rice is al dente.',
      'Add the salt, chilli and the last of the ink and cook 2 minutes more — this final addition is what keeps it black rather than grey.',
      'Off the heat, beat in the 3 tbsp olive oil hard for a minute. No butter and no cheese. Serve with parsley and lemon.'
    ],
    tips: [
      'Ink in two stages. The last spoonful is the colour.',
      'No cheese with fish. Olive oil does the mantecatura.',
      'Cuttlefish is either two minutes or forty. Aim for the short end.'
    ],
    pair: ['A glass of Soave', 'Grilled bread', 'Lemon wedges'],
    store: 'Best immediately. It does not reheat or freeze well.',
    nut: [495, 22, 66, 15, 2, 2, 780]
  },

  'risi-e-bisi': {
    d: 'Venetian rice and peas, looser than a risotto and eaten with a spoon. Served to the Doge every 25 April and still made when peas are new.',
    meta: 'A loose Venetian rice and pea dish, wetter than a risotto, built on a stock made from the empty pea pods.',
    kw: ['risi e bisi', 'venetian rice peas', 'risi e bisi recipe', 'italian pea rice', 'venice spring dish'],
    why: 'The stock is made from the pea pods, which are otherwise thrown away and carry more pea flavour than the peas do. Simmer them for twenty minutes and strain. The dish is also deliberately looser than a risotto — all\'onda, wavy, and eaten with a spoon rather than a fork — so it takes more liquid and is served the moment it is ready, before it tightens.',
    ing: [
      '1 kg fresh peas in the pod, or 400 g podded peas plus 200 g pods',
      '1.2 litres chicken or vegetable stock',
      '250 g vialone nano or carnaroli rice',
      '1 onion, very finely chopped',
      '100 g pancetta, finely diced',
      '3 tbsp olive oil',
      '30 g butter',
      '1.25 tsp fine sea salt',
      '# To finish',
      '40 g butter',
      '80 g Parmigiano Reggiano, grated',
      '30 g flat-leaf parsley, chopped'
    ],
    st: [
      'Pod the peas. Simmer the empty pods in the stock for 20 minutes, then strain and discard them, keeping the stock hot.',
      'Cook the pancetta in the oil and 30 g butter until its fat runs, 5 minutes.',
      'Add the onion and sweat 8 minutes without colouring.',
      'Add the rice and toast it 2 minutes.',
      'Add the pea-pod stock a ladleful at a time, stirring, for 14 minutes.',
      'Add the podded peas and the salt and cook 4 minutes more. Keep it noticeably wetter than a risotto — it should ripple like a wave.',
      'Off the heat, beat in the 40 g butter and the parmesan, add the parsley, and serve immediately in bowls with spoons.'
    ],
    tips: [
      'Make the stock from the pods. That is where the flavour is.',
      'Looser than a risotto. It is eaten with a spoon.',
      'Peas in for the last four minutes only.'
    ],
    pair: ['A glass of Soave', 'Green salad', 'Grissini'],
    store: 'Best immediately. It tightens to a solid mass on standing.',
    nut: [445, 16, 62, 14, 6, 6, 720]
  },

  'canederli': {
    d: 'Bread dumplings with speck, from the Alto Adige, served in broth or with butter. The bread must be properly stale, not merely a day old.',
    meta: 'Tyrolean bread dumplings with speck and parsley, bound with milk and egg and simmered gently in broth.',
    kw: ['canederli', 'knodel', 'bread dumplings italian', 'canederli recipe', 'alto adige dumplings'],
    why: 'Genuinely stale bread — three or four days, dry all the way through — is the only kind that works. Fresh bread turns to paste when the milk hits it and the dumplings dissolve in the pot. Test one dumpling before committing the batch: if it falls apart, work a little flour into the mix; if it is heavy, add a splash more milk. The pot must never boil, only shiver.',
    ing: [
      '300 g stale white bread, cut into 1 cm cubes',
      '300 ml warm whole milk',
      '150 g speck or smoked bacon, finely diced',
      '1 onion, finely chopped',
      '30 g butter',
      '3 eggs',
      '60 g plain flour',
      '40 g flat-leaf parsley, chopped',
      '1.25 tsp fine sea salt',
      '0.25 tsp ground nutmeg',
      '# To serve',
      '1.5 litres beef broth',
      '40 g butter',
      '60 g Parmigiano Reggiano, grated',
      '20 g chives, snipped'
    ],
    st: [
      'Pour the warm milk over the bread cubes and leave 20 minutes, turning once, until evenly damp.',
      'Fry the speck in the butter until its fat runs, add the onion and cook 8 minutes. Cool.',
      'Beat the eggs into the soaked bread, then add the speck mixture, flour, parsley, salt and nutmeg. Work it with your hands until it holds together.',
      'Shape one test dumpling and simmer it 12 minutes. If it disintegrates, work in more flour; if it is dense, add a splash of milk.',
      'Shape the rest into balls the size of a small apple with wet hands.',
      'Bring the broth to a bare shiver — never a boil — and lower the canederli in.',
      'Simmer 15 minutes, until they float and are cooked through. Serve in the broth, or drained with melted butter, parmesan and chives.'
    ],
    tips: [
      'Properly stale bread, dry all the way through.',
      'Test one dumpling before committing the batch.',
      'A shiver, never a boil.'
    ],
    pair: ['A glass of Lagrein', 'Green salad', 'Sauerkraut'],
    store: 'Refrigerated for 2 days; reheat in broth. They freeze raw for 2 months.',
    nut: [385, 16, 42, 17, 3, 4, 890]
  },

  'testaroli': {
    d: 'A thin pancake cooked on a hot stone, cut into diamonds and dipped in boiling water. Arguably the oldest pasta in Italy and barely known outside Lunigiana.',
    meta: 'Thin batter pancakes cooked on a hot pan, cut into diamonds and softened in boiling water before dressing with pesto.',
    kw: ['testaroli', 'lunigiana pasta', 'testaroli recipe', 'ancient italian pasta', 'pancake pasta pesto'],
    why: 'Testaroli are cooked twice and the second cooking is barely a cooking at all — the cut diamonds go into water that has been brought to the boil and then taken off the heat, for about a minute. Water still boiling will disintegrate them completely. The pancake itself is cooked on one side only and should stay pale and slightly spongy, since it needs to absorb the water and then the pesto.',
    ing: [
      '# For the batter',
      '300 g "00" flour',
      '600 ml water',
      '1.25 tsp fine sea salt',
      '2 tbsp olive oil',
      '# For the pesto',
      '60 g basil leaves',
      '2 garlic cloves',
      '25 g pine nuts',
      '50 g Parmigiano Reggiano, grated',
      '100 ml olive oil',
      '0.5 tsp fine sea salt',
      '# To finish',
      '30 g Parmigiano Reggiano, grated',
      '2 tbsp olive oil'
    ],
    st: [
      'Whisk the flour, water, salt and oil into a thin, smooth batter, about the consistency of single cream. Rest 30 minutes.',
      'Pound the pesto ingredients in a mortar: garlic and pine nuts first, then basil, then cheese, then the oil trickled in.',
      'Heat a heavy 26 cm pan over medium heat and wipe it with oil.',
      'Pour in a thin ladle of batter, swirl to coat, and cook on one side only for 3 minutes, until the top is set and dry and the base is pale gold with brown spots. Do not turn it.',
      'Stack the cooked testaroli under a cloth and repeat. Cut them into 5 cm diamonds.',
      'Bring a pan of salted water to the boil and then take it off the heat completely.',
      'Drop the diamonds in for 60 seconds, lift them out with a slotted spoon, and dress immediately with pesto, parmesan and oil.'
    ],
    tips: [
      'One side only. A turned testarolo goes tough.',
      'Water off the heat for the second cooking, or they dissolve.',
      'Sixty seconds, no more.'
    ],
    pair: ['A glass of Vermentino', 'Green salad', 'More pesto'],
    store: 'The cooked pancakes keep 3 days refrigerated and freeze for a month. Finish to order.',
    nut: [465, 14, 62, 18, 4, 3, 620]
  }
};
