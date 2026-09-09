'use strict';

/**
 * Volume thirteen — Egyptian mains.
 *
 * Twelve dishes, and the split between them is historical. Hawawshi, kofta and
 * the Alexandrian liver belong to the street; macarona bechamel, goulash and
 * stuffed pigeon are the Ottoman and Italian inheritance of Cairo and
 * Alexandria, which is why one of them is essentially a lasagne and another is
 * essentially a filo pie.
 */

module.exports = {
  'hawawshi': {
    d: 'Flatbread stuffed with spiced minced beef and baked hard until the bread crisps and the fat soaks into it. Alexandria claims it; every Egyptian city sells it.',
    meta: 'Flatbread stuffed with raw spiced minced beef and baked hard, so the rendering fat crisps the bread from the inside.',
    kw: ['hawawshi', 'egyptian meat bread', 'hawawshi recipe', 'stuffed pita beef', 'egyptian street food'],
    why: 'Like arayes, the meat goes in raw so its fat renders into the bread rather than being lost in a pan first — but hawawshi is baked rather than griddled, and that means the oven has to be genuinely hot. At 240°C the bread crisps in the same fifteen minutes the thin layer of beef needs; any cooler and the bread goes leathery while it waits. Pricking the top lets steam out, without which the whole thing puffs and separates from its filling.',
    ing: [
      '500 g beef mince, 20 per cent fat',
      '1 onion, grated and squeezed dry',
      '1 green pepper, very finely diced',
      '2 green chillies, finely chopped',
      '40 g flat-leaf parsley, chopped',
      '3 garlic cloves, crushed',
      '1.5 tsp ground allspice',
      '1 tsp ground coriander',
      '0.5 tsp ground cinnamon',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To assemble',
      '4 large round flatbreads or baladi loaves',
      '3 tbsp butter, melted, or 3 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 240°C / 465°F with a heavy tray inside it.',
      'Mix the beef with the onion, pepper, chillies, parsley, garlic, spices, salt and pepper. Work it for a minute so it holds together.',
      'Split each flatbread around the edge into two discs, leaving one side joined.',
      'Spread a quarter of the raw filling inside each in an even layer no thicker than 8 mm, right to the edges, and press closed.',
      'Brush both faces with the melted butter and prick the top of each three or four times with a knife tip.',
      'Bake on the preheated tray 12 minutes, then turn and bake 10 to 13 minutes more, until both faces are crisp and deep brown and the juices run clear.',
      'Rest 5 minutes, cut into wedges and serve with tahina and lemon.'
    ],
    tips: [
      'Raw meat, hot oven. Both, or it does not work.',
      'A thin layer — 8 mm at most, or the middle stays raw.',
      'Prick the top or it balloons away from the filling.'
    ],
    pair: ['Egyptian tahina', 'Torshi', 'Salata baladi'],
    store: 'Refrigerated for 3 days. Re-crisp at 220°C for 8 minutes; a microwave ruins it. It freezes baked for 2 months.',
    nut: [560, 30, 44, 27, 4, 5, 880]
  },

  'macarona-bechamel': {
    d: 'Penne bound in béchamel over a layer of spiced mince, baked until the top sets into a sliceable crust. Egypt by way of the Ottoman kitchen, and every child’s favourite.',
    meta: 'Penne bound in thick béchamel over spiced minced beef, baked until the top sets firm enough to cut into squares.',
    kw: ['macarona bechamel', 'egyptian pasta bake', 'macarona bechamel recipe', 'egyptian lasagne', 'baked pasta bechamel'],
    why: 'The béchamel is made deliberately thicker than a sauce has any right to be, because it has to set firm enough to cut into squares rather than run across the plate. That means a full sixty grams of flour to a litre of milk, and cooking it out until it drops from the spoon in a heavy sheet. The pasta is also cooked several minutes short of al dente, since it keeps absorbing milk in the oven — cooked properly first it turns to porridge by the time the top has browned.',
    ing: [
      '500 g penne',
      '# For the meat layer',
      '600 g beef mince',
      '2 onions, finely chopped',
      '3 tbsp olive oil',
      '3 tbsp tomato purée',
      '1.5 tsp ground allspice',
      '0.5 tsp ground nutmeg',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '150 ml water',
      '# For the béchamel',
      '1 litre whole milk',
      '60 g plain flour',
      '60 g butter',
      '0.5 tsp ground nutmeg',
      '1.5 tsp fine sea salt',
      '2 eggs, beaten',
      '80 g hard cheese, grated'
    ],
    st: [
      'Boil the penne in well-salted water for 4 minutes less than the packet says. Drain and rinse under cold water to stop it cooking.',
      'Fry the onions in the oil 8 minutes, add the mince and cook 12 minutes until browned and dry.',
      'Stir in the tomato purée, allspice, nutmeg, salt, pepper and water and simmer 8 minutes until nearly dry. Set aside.',
      'For the béchamel, melt the butter, stir in the flour and cook 3 minutes. Add the milk gradually, whisking, then cook 10 minutes until very thick — it should fall from the spoon in a sheet.',
      'Take off the heat, season with nutmeg and salt, and cool for 5 minutes before beating in the eggs so they do not scramble.',
      'Heat the oven to 200°C / 400°F. Fold two-thirds of the béchamel through the pasta.',
      'Layer half the pasta in a deep dish, spread the meat over, then the rest of the pasta. Spread the remaining béchamel on top, scatter with cheese, and bake 45 minutes until set and deep gold. Rest 15 minutes before cutting.'
    ],
    tips: [
      'A very thick béchamel. It has to set, not pour.',
      'Undercook the pasta by 4 minutes.',
      'Cool the sauce before the eggs go in, or they scramble.'
    ],
    pair: ['Salata baladi', 'Torshi', 'A green salad'],
    store: 'Refrigerated for 4 days and it slices better cold. Reheat covered at 180°C for 25 minutes. It freezes for 3 months.',
    nut: [645, 33, 62, 29, 3, 9, 780]
  },

  'fattah': {
    d: 'Layers of fried bread, rice and slow-cooked lamb under a sharp garlic and vinegar tomato sauce. The dish of Eid and of every celebration that involves a whole animal.',
    meta: 'Fried bread layered with rice and slow-cooked lamb under a sharp garlic, vinegar and tomato sauce poured on at the table.',
    kw: ['fattah', 'egyptian fattah', 'fattah recipe', 'lamb rice bread dish', 'eid fattah'],
    why: 'The vinegar in the sauce is what makes fattah taste Egyptian rather than merely rich, and it goes in off the heat so it stays sharp. Cooked into the tomato it mellows to nothing, and the dish becomes a heavy plate of meat and starch with no relief. The assembly order matters too: bread on the bottom, then rice, then meat, with the sauce poured over at the last second so the bread is softened by it rather than dissolved in it.',
    ing: [
      '1.2 kg lamb on the bone, cut into large pieces',
      '2 onions, halved',
      '4 bay leaves',
      '1 tbsp black peppercorns',
      '3 cardamom pods',
      '2 tsp fine sea salt',
      '2.5 litres water',
      '# For the bread and rice',
      '4 pitta or baladi breads, torn into pieces',
      '4 tbsp olive oil',
      '400 g short-grain rice, cooked as for roz mermah',
      '# For the sauce',
      '10 garlic cloves, crushed',
      '4 tbsp olive oil',
      '3 tbsp tomato purée',
      '400 g tin chopped tomatoes',
      '4 tbsp white wine vinegar',
      '1 tsp fine sea salt',
      '0.5 tsp chilli flakes'
    ],
    st: [
      'Simmer the lamb with the onions, bay, peppercorns, cardamom, salt and water for 120 minutes, skimming the foam, until it falls from the bone. Lift the meat out and strain the broth.',
      'Fry the torn bread in 4 tbsp oil until crisp and deep gold, about 6 minutes, and drain.',
      'For the sauce, fry the garlic in 4 tbsp oil for 40 seconds until fragrant but not coloured.',
      'Add the tomato purée and cook 2 minutes, then the tomatoes, salt and chilli. Simmer 10 minutes.',
      'Take the sauce off the heat and stir in the vinegar. Taste — it should be assertively sharp.',
      'Layer a wide dish: fried bread first, moistened with a ladle of hot broth, then the rice, then the lamb.',
      'Pour the sauce over at the table, so the bread keeps some of its crispness under it.'
    ],
    tips: [
      'Vinegar off the heat. Cooked in, it disappears.',
      'Moisten the bread with broth, not sauce, or it collapses.',
      'Assemble at the last moment.'
    ],
    pair: ['Torshi', 'Salata baladi', 'Green chillies'],
    store: 'Keep the components separate; they last 3 days refrigerated. Assembled fattah does not keep.',
    nut: [720, 42, 62, 33, 3, 6, 890]
  },

  'mahshi-cromb': {
    d: 'Cabbage leaves rolled thin around a herb-heavy rice filling with no meat in it, packed flat and cooked in tomato. Rolled much smaller than the Levantine version — a finger thick.',
    meta: 'Cabbage leaves rolled finger-thin around a herb-heavy rice filling and packed flat to cook in a light tomato broth.',
    kw: ['mahshi cromb', 'egyptian stuffed cabbage', 'mahshi recipe', 'vegan stuffed cabbage', 'egyptian cabbage rolls'],
    why: 'Egyptian mahshi is rolled far thinner than its Levantine equivalent — a finger thick, not a thumb — and that changes the eating entirely: more leaf to filling, and a texture that stays distinct rather than turning into a rice parcel. It takes longer to roll and is worth it. The dill and coriander go into the raw filling in quantities that look excessive, because an hour of steaming under a lid flattens fresh herbs considerably.',
    ing: [
      '1 large white cabbage',
      '# For the filling',
      '350 g short-grain rice, rinsed',
      '2 onions, very finely chopped',
      '3 tomatoes, finely diced',
      '60 g dill, chopped',
      '60 g flat-leaf parsley, chopped',
      '40 g coriander, chopped',
      '6 tbsp olive oil',
      '1 tbsp tomato purée',
      '2 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the pot',
      '400 g tin chopped tomatoes',
      '6 garlic cloves, crushed',
      '3 tbsp lemon juice',
      '1 tsp fine sea salt',
      '700 ml water'
    ],
    st: [
      'Core the cabbage, lower the head into boiling water and peel off leaves as they soften, about 30 seconds each. Pare the thick ribs flat.',
      'Mix all the filling ingredients together. The rice stays raw.',
      'Cut the leaves into strips about 8 cm wide. Lay a thin line of filling along one edge and roll into a cigar no thicker than a finger.',
      'Line a wide heavy pot with torn outer leaves.',
      'Pack the rolls in tight flat layers, seam-side down, rather than standing them up.',
      'Whisk the tomatoes, garlic, lemon, salt and water and pour over. Weigh down with a plate.',
      'Bring to a simmer, cover, and cook gently 60 minutes, until the rice is tender. Rest 15 minutes off the heat before serving.'
    ],
    tips: [
      'Roll them finger-thin. That is what makes them Egyptian.',
      'More herbs than looks sensible — they cook down to nothing.',
      'Pack them flat in layers, not standing.'
    ],
    pair: ['Egyptian tahina', 'Torshi', 'Lemon wedges'],
    store: 'Refrigerated for 4 days and good cold. They freeze cooked for 3 months.',
    nut: [330, 7, 52, 11, 6, 8, 690]
  },

  'kofta-masreya': {
    d: 'Minced beef and lamb on skewers with onion, parsley and a lot of black pepper, grilled hard over coals or under a very hot grill. Charcoal helps; heat matters more.',
    meta: 'Minced beef and lamb worked with onion, parsley and black pepper, shaped onto skewers and grilled hard and fast.',
    kw: ['kofta masreya', 'egyptian kofta', 'kofta recipe', 'minced meat skewers', 'egyptian kebab'],
    why: 'Kofta falls off the skewer for one of two reasons: the meat was too lean, or it was not worked enough. Twenty per cent fat is the minimum, and the mixture has to be kneaded for a good three minutes until it turns tacky and starts clinging to the bowl — that is myosin developing, and it is the only binder in the recipe. Chilling the shaped skewers for half an hour firms them further. Grated onion must be squeezed bone dry, since its water is the other thing that loosens the mix.',
    ing: [
      '400 g beef mince, 20 per cent fat',
      '400 g lamb mince',
      '1 large onion, grated and squeezed very dry',
      '50 g flat-leaf parsley, very finely chopped',
      '4 garlic cloves, crushed',
      '1.5 tsp ground coriander',
      '1 tsp ground allspice',
      '2 tsp fine sea salt',
      '1.5 tsp black pepper',
      '0.5 tsp ground cinnamon',
      '# To serve',
      'Aish baladi',
      'Egyptian tahina',
      'Lemon wedges'
    ],
    st: [
      'Squeeze the grated onion in a cloth until it stops giving water. This step decides whether the kofta holds.',
      'Combine everything in a bowl and knead hard for 3 minutes, until the mixture turns tacky and clings to your hands and the sides of the bowl.',
      'Divide into 12 and mould each around a flat metal skewer into a sausage about 15 cm long, pressing firmly.',
      'Chill the skewers for 30 minutes to firm them.',
      'Heat a grill or coals until fiercely hot.',
      'Grill 10 to 12 minutes, turning every 3 minutes, until well charred outside and just cooked through.',
      'Rest 3 minutes, then slide off the skewers into warm bread with tahina and lemon.'
    ],
    tips: [
      'Knead until it goes tacky. That is the only thing holding it together.',
      'Squeeze the onion completely dry.',
      'Flat skewers, not round ones — round ones let the meat spin.'
    ],
    pair: ['Egyptian tahina', 'Salata baladi', 'Torshi'],
    store: 'Raw, shaped skewers keep refrigerated for a day and freeze for 2 months. Cooked, 3 days.',
    nut: [415, 33, 5, 29, 1, 2, 820]
  },

  'kebda-eskandarani': {
    d: "Alexandrian liver: beef liver cut into strips and cooked in seconds with chilli, garlic and cumin. The whole dish takes twelve minutes and eleven of them are preparation.",
    meta: 'Beef liver cut into thin strips and seared in seconds with garlic, chilli and cumin, finished with lemon off the heat.',
    kw: ['kebda eskandarani', 'alexandrian liver', 'egyptian liver recipe', 'beef liver strips', 'kebda recipe'],
    why: 'Liver goes from tender to grey and grainy in under a minute, so the pan has to be extremely hot and the liver has to go in dry and in batches. A crowded pan drops in temperature, the liver releases water, and it stews in it — which is exactly how most people ruin this dish. Salt at the end for the same reason: salted liver weeps in the pan before it ever sees the heat.',
    ing: [
      '600 g beef liver, trimmed and cut into 5 mm strips',
      '4 tbsp sunflower oil',
      '8 garlic cloves, finely chopped',
      '2 green chillies, sliced',
      '1 green pepper, cut into strips',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '3 tbsp lemon juice',
      '20 g flat-leaf parsley, chopped',
      'Aish baladi, to serve'
    ],
    st: [
      'Pat the liver strips completely dry on kitchen paper. Do not salt them yet.',
      'Heat 2 tbsp of the oil in a large frying pan until it is genuinely smoking.',
      'Sear half the liver in a single layer for 45 seconds, turn, and give it 30 seconds more. Lift it out while it is still pink inside. Repeat with the second batch.',
      'Add the remaining oil, then the garlic, chillies and pepper strips, and fry hard for 2 minutes.',
      'Stir in the cumin and ground coriander and cook 30 seconds.',
      'Return the liver to the pan, add the salt and black pepper, and toss for 45 seconds — no longer.',
      'Off the heat, add the lemon juice and parsley and serve immediately in bread.'
    ],
    tips: [
      'Dry liver, smoking pan, two batches. All three or it stews.',
      'Salt at the end. Early salt draws out water.',
      'Still pink when it leaves the pan — it finishes on the way to the table.'
    ],
    pair: ['Aish baladi', 'Torshi', 'Salata baladi'],
    store: 'Best immediately; liver reheats badly. Refrigerated for a day at most.',
    nut: [340, 34, 12, 17, 2, 3, 720]
  },

  'sayadeya-masreya': {
    d: 'The Egyptian fisherman’s rice: fish fried rather than poached, rice cooked in the frying oil and stock, and the whole thing heavy with cumin. Sharper and darker than the Lebanese version.',
    meta: 'Fish fried and set aside while its stock and frying oil cook cumin-heavy rice under deeply browned onions.',
    kw: ['sayadeya', 'egyptian fish rice', 'sayadeya masreya', 'sayadieh recipe egypt', 'cumin fish rice'],
    why: 'Frying the fish first rather than poaching it is the Egyptian difference, and the oil it leaves behind is not waste — it carries the flavour into the rice and is the reason this tastes markedly more of fish than its Lebanese cousin. Strain it, because the fried crumbs will burn in the twenty minutes the rice needs. Cumin goes in at a quantity that seems heavy-handed and is correct for the dish.',
    ing: [
      '1 kg firm white fish fillets, cut into large pieces',
      '2 tsp ground cumin',
      '1.5 tsp fine sea salt',
      '3 tbsp plain flour',
      '6 tbsp sunflower oil',
      '# For the rice',
      '3 large onions, sliced thinly',
      '400 g short-grain rice, rinsed',
      '2 tsp ground cumin',
      '0.5 tsp ground turmeric',
      '1.25 tsp fine sea salt',
      '850 ml hot fish or vegetable stock',
      '# To finish',
      '30 g coriander leaves, chopped',
      'Lemon wedges',
      'Egyptian tahina'
    ],
    st: [
      'Toss the fish with 2 tsp cumin, the salt and the flour.',
      'Fry in the oil over high heat, 3 minutes a side, until browned and just cooked. Lift out and set aside.',
      'Strain the oil through a sieve into a bowl to remove the burnt crumbs, then return 4 tbsp of it to the pan.',
      'Cook the onions in that oil over medium heat for 25 minutes, until deeply browned. This is where the colour comes from.',
      'Lift out a third of the onions for the top. Add the rice to the pan with the remaining onions and turn it for 2 minutes.',
      'Add the cumin, turmeric, salt and hot stock. Bring to the boil, cover, and cook on the lowest heat 18 minutes.',
      'Rest covered 8 minutes, fork through, and serve with the fish, reserved onions, coriander, lemon and tahina.'
    ],
    tips: [
      'Strain the frying oil before the rice goes in, or the crumbs burn.',
      'Take the onions genuinely dark.',
      'More cumin than feels right. That is the dish.'
    ],
    pair: ['Egyptian tahina', 'Salata baladi', 'Torshi'],
    store: 'Refrigerated for 2 days. Reheat covered at 170°C. Do not freeze.',
    nut: [615, 40, 62, 21, 3, 6, 720]
  },

  'hamam-mahshi': {
    d: 'Pigeon stuffed with freekeh and roasted, the most special-occasion dish in the Egyptian repertoire. Small birds, cooked twice: simmered first, then browned hard.',
    meta: 'Pigeon stuffed with green freekeh, simmered in aromatics and then roasted hard so the skin crisps over the grain.',
    kw: ['hamam mahshi', 'stuffed pigeon', 'egyptian pigeon recipe', 'freekeh stuffed pigeon', 'hamam recipe'],
    why: 'Pigeon is small, lean and unforgiving, and roasting it from raw gives you either raw legs or a dry breast. Simmering first in the aromatics cooks the bird and the stuffing through gently and gives you the stock the freekeh needs; the oven then does nothing but crisp the skin, which takes fifteen minutes. Stuff loosely — freekeh swells, and a tightly packed bird splits along the breastbone.',
    ing: [
      '4 pigeons, cleaned',
      '# For the stuffing',
      '200 g cracked freekeh, rinsed and picked over',
      '1 onion, finely chopped',
      '3 tbsp butter, or 3 tbsp olive oil',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1 tsp fine sea salt',
      '# For the poaching',
      '2 onions, halved',
      '4 cardamom pods',
      '2 cinnamon sticks',
      '3 bay leaves',
      '1 tbsp black peppercorns',
      '2 tsp fine sea salt',
      '1.5 litres water',
      '# To finish',
      '3 tbsp butter, melted, or 3 tbsp olive oil',
      '1 tsp ground cumin',
      'Lemon wedges'
    ],
    st: [
      'Soften the chopped onion in the butter 8 minutes, add the freekeh and turn it for 2 minutes, then stir in the allspice, cinnamon and salt. Take off the heat — the grain stays mostly raw.',
      'Stuff each pigeon about two-thirds full with the freekeh mixture. It expands, so do not pack it. Close the cavity with a cocktail stick.',
      'Put the birds in a pot with the poaching onions, whole spices, bay, peppercorns, salt and water.',
      'Bring to a bare simmer and poach gently 55 minutes, until the legs are tender and the freekeh inside has cooked through.',
      'Lift the birds out carefully and pat them dry. Reserve the broth for serving.',
      'Heat the oven to 230°C / 450°F. Brush the pigeons with the melted butter and the cumin.',
      'Roast 15 minutes until the skin is crisp and deep brown. Rest 5 minutes and serve with a little broth and lemon.'
    ],
    tips: [
      'Poach first, roast second. Roasting from raw dries the breast.',
      'Two-thirds full — freekeh swells and will split the bird.',
      'Dry the skin before it goes in the oven.'
    ],
    pair: ['Torshi', 'Salata baladi', 'A bowl of the broth'],
    store: 'Refrigerated for 2 days. Reheat at 200°C for 12 minutes. Do not freeze — the stuffing goes claggy.',
    nut: [685, 52, 41, 34, 7, 3, 810]
  },

  'ferakh-mashwi': {
    d: 'Chicken spatchcocked and grilled under a cumin, garlic and lemon paste until the skin blackens in patches. The marinade is thin on purpose so it burns rather than steams.',
    meta: 'Spatchcocked chicken grilled under a thin cumin, garlic and lemon paste until the skin chars in patches.',
    kw: ['ferakh mashwi', 'egyptian grilled chicken', 'cumin garlic chicken', 'ferakh recipe', 'spatchcock chicken egypt'],
    why: 'The marinade contains no yogurt and very little oil, which is deliberate: a thick coating insulates the skin and steams it, where a thin one burns in patches and gives the char this dish depends on. Spatchcocking is the other half — flattening the bird means the thighs and breast finally sit at the same height and cook in the same time, which a whole roasting chicken never manages under a grill.',
    ing: [
      '1.6 kg chicken, spatchcocked',
      '# For the marinade',
      '8 garlic cloves, crushed to a paste',
      '2 tbsp ground cumin',
      '1 tbsp ground coriander',
      '5 tbsp lemon juice',
      '3 tbsp olive oil',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '0.5 tsp chilli flakes',
      '# To finish',
      '2 tbsp lemon juice',
      '20 g coriander leaves, chopped'
    ],
    st: [
      'Cut down either side of the backbone with kitchen scissors and press the bird flat, cracking the breastbone.',
      'Slash the thighs and the thickest part of the breast twice each, down to the bone.',
      'Mix the marinade — it should be thin and pourable, not a paste. Rub it into the slashes and all over the skin.',
      'Leave for 60 minutes at cool room temperature.',
      'Heat a grill to high, or set coals up for indirect heat. Start the bird skin-side up, 20 cm from the element.',
      'Grill 25 minutes skin-side up, then turn and give it 20 minutes more, until the juices run clear at the thigh and the skin has blackened in patches.',
      'Rest 10 minutes, then squeeze over the last of the lemon and scatter with coriander.'
    ],
    rest: [60, 'marinating'],
    tips: [
      'A thin marinade. A thick one steams the skin.',
      'Slash to the bone or the thighs will not be done with the breast.',
      'Char in patches is correct. Uniform gold means the heat was too low.'
    ],
    pair: ['Batates mohammara', 'Salata baladi', 'Egyptian tahina'],
    store: 'Refrigerated for 3 days. Reheat at 200°C for 12 minutes. It freezes cooked for 2 months.',
    nut: [520, 46, 6, 35, 1, 2, 790]
  },

  'mombar': {
    d: 'Sausage casings filled with spiced rice and mince, boiled and then fried until they blister. Fiddly, cheap, and one of the things Egyptians abroad miss most.',
    meta: 'Sausage casings filled loosely with spiced rice and mince, boiled until the rice swells, then fried until blistered.',
    kw: ['mombar', 'egyptian stuffed sausage', 'mombar recipe', 'rice stuffed intestine', 'egyptian street food'],
    why: 'Fill them a third full and no more. The rice inside is raw and triples as it boils, and a casing packed even half full will burst along its length and empty into the water — which is the single failure mode of this dish and the reason it has a reputation for being difficult. It is not difficult, it is just counterintuitive. Prick each one before boiling as well, so steam has a route out that is not the seam.',
    ing: [
      '1.5 m sausage casings, rinsed thoroughly',
      '# For the filling',
      '250 g short-grain rice, rinsed',
      '300 g beef mince',
      '2 onions, very finely chopped',
      '3 tomatoes, finely diced',
      '40 g flat-leaf parsley, chopped',
      '30 g dill, chopped',
      '4 tbsp olive oil',
      '1.5 tsp ground allspice',
      '1 tsp ground coriander',
      '2 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For boiling',
      '2 bay leaves',
      '1 onion, halved',
      '1 tbsp white vinegar',
      '# To fry',
      '600 ml sunflower oil'
    ],
    st: [
      'Rinse the casings inside and out under running water, then soak them in water with the vinegar for 20 minutes and rinse again.',
      'Mix all the filling ingredients. The rice stays raw.',
      'Slide a casing onto a wide funnel and fill it no more than a third full, working along its length. Tie off in 15 cm lengths.',
      'Prick each length three or four times with a needle.',
      'Lower into simmering water with the bay and halved onion and cook 40 minutes, at a bare simmer — a rolling boil bursts them.',
      'Drain and pat dry. They can be cooled at this point and fried later.',
      'Heat the frying oil to 180°C and fry in batches 4 to 5 minutes, until dark and blistered. Serve with lemon.'
    ],
    tips: [
      'A third full. This is the whole trick.',
      'Prick them before boiling.',
      'Bare simmer, never a rolling boil.'
    ],
    pair: ['Egyptian tahina', 'Torshi', 'Lemon wedges'],
    store: 'Boiled, they keep refrigerated 2 days and freeze for 2 months; fry from chilled. Fried, eat immediately.',
    nut: [485, 20, 45, 25, 3, 5, 780]
  },

  'renga': {
    d: 'Smoked herring flaked and dressed with lemon, oil and raw onion, eaten at Sham el-Nessim with spring onions and bread. Powerfully strong and completely uncompromising.',
    meta: 'Smoked herring flaked and dressed with lemon, oil, onion and cumin, eaten with bread and spring onions at Sham el-Nessim.',
    kw: ['renga', 'egyptian smoked herring', 'renga recipe', 'sham el nessim food', 'smoked fish salad'],
    why: 'Soaking is not optional. Renga is cured hard and comes out of the packet far too salty to eat; twenty minutes in milk or water pulls enough of it out to leave something seasoned rather than punishing, and rinsing afterwards takes the surface salt with it. Everything else is raw and sharp on purpose — this is a dish designed to stand up to a very strong fish, and a gentle dressing would simply vanish underneath it.',
    ing: [
      '4 smoked herring fillets, about 400 g',
      '300 ml milk or water, for soaking',
      '# For the dressing',
      '1 large onion, finely sliced',
      '5 tbsp lemon juice',
      '5 tbsp olive oil',
      '1 tsp ground cumin',
      '0.5 tsp chilli flakes',
      '0.25 tsp black pepper',
      '# To serve',
      '30 g flat-leaf parsley, chopped',
      '6 spring onions',
      'Aish baladi',
      'Lemon wedges'
    ],
    st: [
      'Soak the herring fillets in the milk or water for 20 minutes to draw out the salt.',
      'Drain, rinse under cold water and pat completely dry.',
      'Pull the flesh off the skin in large flakes, checking for pin bones as you go.',
      'Soak the sliced onion in cold water for 10 minutes and drain — raw onion straight from the board is too aggressive even for this.',
      'Whisk the lemon juice, oil, cumin, chilli and pepper together.',
      'Fold the herring, onion and parsley through the dressing gently, keeping the flakes intact.',
      'Leave 15 minutes for the flavours to settle, then serve with whole spring onions, bread and more lemon.'
    ],
    tips: [
      'Soak it. Straight from the packet it is inedible.',
      'Large flakes, folded gently — do not shred it.',
      'Soak the onion too, briefly.'
    ],
    pair: ['Aish baladi', 'Spring onions', 'Torshi'],
    store: 'Refrigerated for 2 days, covered tightly — the smell travels. Do not freeze.',
    nut: [355, 24, 6, 27, 1, 3, 980]
  },

  'goulash-masri': {
    d: 'Filo layered over spiced mince and baked in a tray, cut into squares. Nothing to do with Hungarian goulash — the name arrived with the Ottomans and stayed.',
    meta: 'Layers of filo over spiced minced beef, brushed with butter and baked in a tray until shatteringly crisp, then cut into squares.',
    kw: ['goulash masri', 'egyptian goulash', 'filo meat pie', 'egyptian goulash recipe', 'minced beef filo bake'],
    why: 'Every single sheet gets brushed, and there is no shortcut. Filo layers that are not individually greased fuse into a pale leathery slab instead of separating into leaves, and the whole appeal of this dish is the shattering top. The other rule is cutting it before it bakes: filo that has crisped cannot be cut cleanly, and attempting it shatters the top into the filling. Score right through to the base while it is still soft.',
    ing: [
      '450 g filo pastry, about 18 sheets',
      '180 g butter, melted',
      '# For the filling',
      '700 g beef mince',
      '3 onions, finely chopped',
      '3 tbsp olive oil',
      '3 tbsp tomato purée',
      '2 tsp ground allspice',
      '0.5 tsp ground nutmeg',
      '0.5 tsp ground cinnamon',
      '2 tsp fine sea salt',
      '0.75 tsp black pepper',
      '150 ml water',
      '30 g flat-leaf parsley, chopped'
    ],
    st: [
      'Fry the onions in the olive oil 10 minutes, add the mince and cook 15 minutes until browned and completely dry.',
      'Stir in the tomato purée, spices, salt, pepper and water and simmer 8 minutes until the pan is dry again. Stir in the parsley and cool.',
      'Heat the oven to 190°C / 375°F and brush a 30 x 22 cm tin with butter.',
      'Layer half the filo sheets into the tin, brushing every single sheet with melted butter as you go and letting the edges hang over.',
      'Spread the cooled meat evenly over the base.',
      'Layer the remaining filo on top, again buttering each sheet, and tuck the overhanging edges down the sides.',
      'Score right through to the base in squares with a sharp knife, pour any remaining butter over the top, and bake 45 minutes until deep gold and crisp. Rest 10 minutes before cutting along the scored lines.'
    ],
    tips: [
      'Butter every sheet. Skipping any fuses the layers.',
      'Score before baking. You cannot cut it cleanly afterwards.',
      'The filling must be cool and dry, or the base goes soggy.'
    ],
    pair: ['Salata baladi', 'Torshi', 'A green salad'],
    store: 'Refrigerated for 3 days; re-crisp at 190°C for 12 minutes. It freezes unbaked for 2 months.',
    nut: [610, 26, 42, 38, 2, 4, 830]
  }
};
