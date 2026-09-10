'use strict';

/**
 * Volume twenty — the Philippines, Malaysia, Indonesia, Korea, Japan,
 * Thailand, Vietnam and Hong Kong.
 *
 * Twenty-two. The Philippines had six entries for a country of a hundred and
 * ten million and an enormous diaspora that cooks and searches in English:
 * kare-kare, lumpia, inasal and sisig were all missing. Malaysia had five and
 * no satay of its own, no hokkien mee.
 *
 * The rest are the second rank of famous dishes from countries the site
 * already covers reasonably: katsudon behind tonkatsu, khai jiao behind pad
 * thai, bánh cuốn and bún riêu behind phở. Second rank by fame, not by how
 * often people look them up.
 */

module.exports = {
  'kare-kare': {
    d: 'Oxtail simmered three hours and finished in a thick peanut sauce, eaten with salted shrimp paste on the side.',
    meta: 'Filipino oxtail stew in a thick peanut and toasted rice sauce with aubergine and pak choi, served with bagoong.',
    kw: ['kare kare', 'kare kare recipe', 'filipino oxtail stew', 'peanut stew filipino', 'bagoong kare kare'],
    why: 'The sauce is unsalted, and that is deliberate rather than an oversight — the bagoong on the side is the seasoning, and each mouthful gets as much as the person wants. Salt the sauce as well and the dish becomes overwhelming. Toasted ground rice thickens it without flour and gives the faint grittiness that tells you it is kare-kare and not a satay sauce.',
    ing: [
      '1.4 kg oxtail, in thick pieces',
      '2.5 litres water',
      '1 onion, halved',
      '6 garlic cloves',
      '2 tsp fine sea salt, for the stock',
      '4 tbsp uncooked rice',
      '3 tbsp annatto seeds',
      '4 tbsp vegetable oil',
      '1 onion, chopped',
      '6 garlic cloves, crushed',
      '200 g smooth peanut butter',
      '2 aubergines, in thick rounds',
      '250 g green beans, in 5 cm lengths',
      '1 head pak choi, quartered',
      '1 banana blossom, sliced, optional',
      '6 tbsp bagoong alamang (shrimp paste)'
    ],
    st: [
      'Simmer the oxtail with the water, halved onion, whole garlic and stock salt for 2 hours 30 minutes, skimming, until tender. Keep 1.2 litres of the broth.',
      'Toast the rice in a dry pan for 5 minutes, until deep gold, then grind to a powder.',
      'Fry the annatto seeds in 2 tbsp of the oil for 1 minute, until the oil turns orange, then strain the seeds out.',
      'Heat the annatto oil with the remaining oil and fry the chopped onion for 6 minutes.',
      'Add the crushed garlic and cook 1 minute.',
      'Whisk in the peanut butter and the reserved broth and bring to a simmer.',
      'Stir in the ground toasted rice and simmer 8 minutes, until thick enough to coat a spoon.',
      'Add the oxtail and simmer 10 minutes.',
      'Add the aubergine and beans and cook 8 minutes, then the pak choi and banana blossom for 3 minutes.',
      'Serve with the bagoong in a separate bowl, and do not salt the sauce.'
    ],
    tips: [
      'Do not salt the sauce. The bagoong is the seasoning.',
      'Toast the rice properly — deep gold, not pale.',
      'Strain the annatto seeds out after a minute.'
    ],
    pair: ['Steamed rice', 'Bagoong alamang', 'Calamansi'],
    store: 'Better the next day. Keeps 3 days refrigerated, freezes 3 months.',
    nut: [845, 52, 32, 58, 8, 11, 890]
  },

  'lumpia': {
    d: 'Thin pork and vegetable spring rolls, rolled pencil-thin and fried hard. Filipino parties are counted in these.',
    meta: 'Filipino lumpiang Shanghai of minced pork, carrot and water chestnut rolled thin in spring roll wrappers and deep fried.',
    kw: ['lumpia', 'lumpia recipe', 'lumpiang shanghai', 'filipino spring rolls', 'pork lumpia'],
    why: 'Roll them thin — no thicker than a finger — and seal with a flour and water paste rather than egg. A thick lumpia has a raw centre by the time the wrapper is golden, and egg-sealed edges pop open in the oil. Freeze them on a tray before frying if you have made a batch: they hold their shape better and the wrapper crisps harder from cold.',
    ing: [
      '500 g minced pork',
      '1 carrot, very finely diced',
      '6 water chestnuts, finely diced',
      '1 onion, very finely chopped',
      '4 garlic cloves, crushed',
      '2 spring onions, finely sliced',
      '2 tbsp light soy sauce',
      '1 tsp fine sea salt',
      '1 tsp ground black pepper',
      '1 egg',
      '30 spring roll wrappers, 15 cm square',
      '3 tbsp plain flour mixed with 4 tbsp water',
      '700 ml vegetable oil, for frying',
      '6 tbsp sweet chilli sauce'
    ],
    st: [
      'Mix the pork with the carrot, water chestnuts, onion, garlic, spring onions, soy sauce, salt, pepper and egg.',
      'Fry a teaspoon of the mixture to taste it, and correct the seasoning.',
      'Lay a wrapper as a diamond and put a thin line of filling across the lower third — about a tablespoon, no more.',
      'Fold the bottom corner up, fold both sides in tightly, and roll into a pencil-thin cylinder.',
      'Seal the last corner with the flour paste.',
      'Repeat with the rest, keeping the finished rolls covered.',
      'Heat the oil to 175C.',
      'Fry in batches of six for 5 minutes, turning, until deep gold and cooked through.',
      'Drain on a rack, not on paper.',
      'Cut each in half on the diagonal and serve with sweet chilli sauce.'
    ],
    tips: [
      'Pencil-thin. A fat lumpia is raw inside.',
      'Flour paste to seal, never egg.',
      'Freeze before frying if you are making a lot.'
    ],
    pair: ['Sweet chilli sauce', 'Banana ketchup', 'Cold beer'],
    store: 'Freeze unfried for 3 months and fry from frozen, adding 2 minutes.',
    nut: [385, 18, 32, 21, 2, 6, 890]
  },

  'chicken-inasal': {
    d: 'Chicken marinated in calamansi, lemongrass and vinegar, then grilled under a constant basting of annatto oil.',
    meta: 'Bacolod-style grilled chicken marinated in calamansi, vinegar, lemongrass and ginger, basted with annatto and butter oil.',
    kw: ['chicken inasal', 'chicken inasal recipe', 'filipino grilled chicken', 'bacolod inasal', 'annatto chicken'],
    why: 'The basting oil is made separately from annatto, margarine and some of the marinade, and it goes on every time you turn the chicken — five or six times over twenty-five minutes. That repeated painting is what builds the deep orange lacquer; brushed on once at the end it just sits there and burns. Use chicken with the bone in and the skin on or it dries out over the fire.',
    ing: [
      '1.2 kg chicken thighs and drumsticks, bone in',
      '120 ml cane vinegar or cider vinegar',
      '80 ml calamansi or lime juice',
      '3 lemongrass stalks, bruised and chopped',
      '6 garlic cloves, crushed',
      '5 cm ginger, grated',
      '3 tbsp light soy sauce, or tamari to keep it gluten-free',
      '2 tbsp dark brown sugar',
      '1.5 tsp fine sea salt',
      '1 tsp ground black pepper',
      '2 tbsp annatto seeds',
      '80 g margarine',
      '2 tbsp vegetable oil',
      '1 lime, in wedges'
    ],
    st: [
      'Mix the vinegar, calamansi juice, lemongrass, garlic, ginger, soy sauce, sugar, salt and pepper.',
      'Turn the chicken through it and refrigerate 3 hours.',
      'Fry the annatto seeds in the vegetable oil for 1 minute, until the oil turns deep orange, then strain the seeds out.',
      'Melt the margarine into the annatto oil with 4 tbsp of the marinade. This is the basting oil.',
      'Heat a charcoal grill until the coals are white, or a griddle pan until it smokes.',
      'Lift the chicken from the marinade and shake off the lemongrass.',
      'Grill 25 minutes, turning every 4 minutes.',
      'Brush generously with the basting oil at every turn.',
      'It is ready when the skin is deep orange and lacquered and the juices run clear.',
      'Rest 5 minutes and serve with lime wedges and any remaining basting oil.'
    ],
    tips: [
      'Baste at every turn, five or six times.',
      'Bone in, skin on.',
      'Strain the annatto seeds out or they catch and taste bitter.'
    ],
    pair: ['Garlic rice', 'Atchara pickle', 'Chicken oil for the rice'],
    store: 'Marinated raw chicken freezes 2 months. Cooked, it keeps 2 days.',
    nut: [620, 46, 12, 43, 1, 9, 1180],
    rest: [180, 'marinating']
  },

  'sisig': {
    d: 'Pork face and belly boiled, grilled, chopped fine and served on a plate hot enough to keep frying it at the table.',
    meta: 'Filipino sisig of pork belly and jowl simmered, grilled and chopped, dressed with calamansi, chilli and onion on a sizzling plate.',
    kw: ['sisig', 'sisig recipe', 'pork sisig', 'sizzling sisig', 'filipino pork dish'],
    why: 'Three cooking stages and each does a different job: boiling makes the meat tender, grilling gives it smoke and colour, chopping and frying on the hot plate crisps the edges. Skip the grill and it is a chopped pork stew. The plate must be preheated until it is genuinely dangerous — if it stops sizzling when the meat lands, the plate was not hot enough.',
    ing: [
      '600 g pork belly, in one piece',
      '300 g pork jowl or extra belly',
      '1.5 litres water',
      '1 onion, halved',
      '6 garlic cloves',
      '3 bay leaves',
      '1 tbsp black peppercorns',
      '2 tsp fine sea salt',
      '2 tbsp vegetable oil',
      '1 red onion, finely chopped',
      '4 red chillies, finely chopped',
      '4 tbsp calamansi or lime juice',
      '3 tbsp mayonnaise',
      '2 tbsp light soy sauce',
      '1 tsp ground black pepper',
      '2 tbsp margarine',
      '1 egg'
    ],
    st: [
      'Simmer both cuts of pork with the water, halved onion, garlic, bay, peppercorns and salt for 45 minutes.',
      'Drain, pat dry and cool for 10 minutes.',
      'Grill or griddle the pork over a high heat for 8 minutes a side, until charred and crisp at the edges.',
      'Chop it all into 5 mm pieces with a heavy knife.',
      'Heat a cast-iron plate or heavy pan until it is smoking.',
      'Heat the oil in a separate pan and fry the red onion and chillies for 2 minutes.',
      'Add the chopped pork and fry 4 minutes, until the edges crisp again.',
      'Stir in the calamansi juice, mayonnaise, soy sauce and pepper.',
      'Melt the margarine on the smoking plate, tip the sisig on — it should sizzle violently — and press it flat.',
      'Crack the egg on top and take it to the table, letting people stir the egg through.'
    ],
    tips: [
      'Boil, grill, chop. All three.',
      'The plate must be smoking before the meat touches it.',
      'Chop by hand — a processor gives you paste.'
    ],
    pair: ['Steamed rice', 'Cold beer', 'Extra calamansi'],
    store: 'Keeps 2 days refrigerated. Reheat on a very hot pan.',
    nut: [745, 34, 8, 66, 1, 3, 1290]
  },

  'ayam-goreng': {
    d: 'Chicken simmered in turmeric and lemongrass, then fried, with the spiced poaching liquid fried alongside into crisp golden crumbs.',
    meta: 'Indonesian fried chicken poached in turmeric, lemongrass and galangal, then deep fried and served with the fried aromatic crumbs.',
    kw: ['ayam goreng', 'ayam goreng recipe', 'indonesian fried chicken', 'kremes chicken', 'turmeric fried chicken'],
    why: 'The chicken is poached in the spice paste before frying, which seasons it all the way through — battered fried chicken is only seasoned on the surface. Then the leftover poaching liquid, reduced and dropped into the hot oil, sets into the crisp golden crumbs called kremes, which are scattered over. Most recipes throw that liquid away and lose the best part.',
    ing: [
      '1.2 kg chicken pieces, bone in',
      '6 shallots',
      '6 garlic cloves',
      '5 cm fresh turmeric, or 2 tsp ground',
      '3 cm galangal, sliced',
      '4 candlenuts or macadamias',
      '2 lemongrass stalks, bruised',
      '4 kaffir lime leaves',
      '2 tsp ground coriander',
      '2 tsp fine sea salt',
      '500 ml water',
      '2 tbsp vegetable oil, for the paste',
      '700 ml vegetable oil, for frying',
      '2 tbsp rice flour',
      '1 egg, beaten'
    ],
    st: [
      'Blend the shallots, garlic, turmeric, galangal and candlenuts to a paste.',
      'Fry the paste in the 2 tbsp of oil for 5 minutes, until fragrant and darker.',
      'Add the chicken, lemongrass, lime leaves, coriander, salt and water.',
      'Simmer covered for 25 minutes, until the chicken is cooked through.',
      'Lift the chicken out and leave it to dry on a rack for 15 minutes.',
      'Boil the poaching liquid down to about 150 ml, then whisk in the rice flour and beaten egg.',
      'Heat the frying oil to 180C.',
      'Fry the chicken in batches for 5 minutes, until deep gold. Drain on a rack.',
      'Drizzle the thickened liquid into the hot oil in a thin stream; it will set into crisp golden crumbs in about 40 seconds.',
      'Lift the crumbs out with a fine strainer and scatter them over the chicken.'
    ],
    tips: [
      'Poach first — that is how the seasoning gets inside.',
      'Dry the chicken on a rack before it goes in the oil.',
      'Do not throw the poaching liquid away. It becomes the kremes.'
    ],
    pair: ['Steamed rice', 'Sambal terasi', 'Raw cucumber and basil'],
    store: 'Keeps 2 days refrigerated. Re-crisp in a hot oven for 8 minutes.',
    nut: [685, 48, 18, 46, 2, 4, 1290]
  },

  'beef-satay': {
    d: 'Beef marinated in lemongrass and turmeric, threaded thin and grilled fast over charcoal, with a peanut sauce made from scratch.',
    meta: 'Malaysian beef satay marinated in lemongrass, galangal and turmeric, grilled on skewers and served with peanut sauce.',
    kw: ['beef satay', 'beef satay recipe', 'malaysian satay', 'satay peanut sauce', 'grilled beef skewers'],
    why: 'Thread the beef on the skewer in a flat ribbon rather than in cubes, so it grills in three minutes rather than eight. Satay is meant to be charred outside and barely done inside, and cubes cannot do that — by the time the middle is warm the outside is dry. Fry the peanut sauce paste until the oil splits out before the liquid goes in, exactly as with a curry.',
    ing: [
      '700 g beef rump, in thin 3 cm strips',
      '3 lemongrass stalks, tender part only, chopped',
      '4 shallots',
      '4 garlic cloves',
      '3 cm galangal',
      '2 tsp ground turmeric',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '3 tbsp caster sugar',
      '1.5 tsp fine sea salt',
      '3 tbsp vegetable oil',
      '20 bamboo skewers, soaked 30 minutes',
      '150 g roasted peanuts',
      '3 tbsp satay or red curry paste',
      '200 ml coconut milk',
      '2 tbsp tamarind paste',
      '2 tbsp palm sugar',
      '1 cucumber, in chunks',
      '1 red onion, in wedges'
    ],
    st: [
      'Pound or blend the lemongrass, shallots, garlic, galangal, turmeric, coriander and cumin to a paste.',
      'Mix half the paste with the caster sugar, salt and 1 tbsp of the oil and turn the beef through it.',
      'Marinate 2 hours refrigerated.',
      'Grind the peanuts coarsely, leaving some texture.',
      'Fry the remaining paste and the satay paste in the rest of the oil for 5 minutes, until the oil separates.',
      'Add the ground peanuts, coconut milk, tamarind and palm sugar and simmer 10 minutes, until thick.',
      'Thread the beef strips onto the soaked skewers in flat ribbons.',
      'Grill over white-hot charcoal or a smoking griddle for 3 minutes, turning once.',
      'Rest 2 minutes.',
      'Serve with the peanut sauce, cucumber chunks and raw onion wedges.'
    ],
    tips: [
      'Flat ribbons, not cubes.',
      'Three minutes on the fiercest heat you have.',
      'Split the oil out of the sauce paste before the liquid goes in.'
    ],
    pair: ['Nasi impit or rice cakes', 'Cucumber and raw onion', 'Cold beer'],
    store: 'The sauce keeps 5 days refrigerated. Marinated raw beef freezes 2 months.',
    nut: [620, 44, 26, 38, 5, 18, 1080],
    rest: [150, 'marinating and soaking the skewers']
  },

  'hokkien-mee': {
    d: 'Thick yellow noodles braised in dark soy with prawns, pork and cabbage until the sauce coats every strand. Kuala Lumpur\'s version, almost black.',
    meta: 'KL Hokkien mee of thick yellow noodles braised in dark caramel soy with prawns, pork, cabbage and crisp pork lard.',
    kw: ['hokkien mee', 'hokkien mee recipe', 'kl hokkien mee', 'dark soy noodles', 'malaysian fried noodles'],
    why: 'The crisp pork lard is not a garnish and there is no substitute — it is rendered slowly from diced back fat until the pieces are golden and hard, and both the fat and the crackling go into the dish. That fat is what carries the dark soy through the noodles. The wok must be as hot as it will go and the noodles left still for thirty seconds at a time so they catch.',
    ing: [
      '150 g pork back fat, in 1 cm dice',
      '600 g thick fresh yellow noodles',
      '200 g pork loin, thinly sliced',
      '200 g raw prawns, peeled',
      '150 g white cabbage, roughly chopped',
      '6 garlic cloves, finely chopped',
      '4 tbsp dark soy sauce',
      '1 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp caster sugar',
      '0.5 tsp ground white pepper',
      '250 ml chicken stock',
      '1 tbsp cornflour mixed with 3 tbsp water',
      '2 tbsp sambal, to serve'
    ],
    st: [
      'Render the diced pork fat in a dry wok over a low heat for 15 minutes, until the pieces are golden and crisp.',
      'Lift the crisp pieces out and keep them. Leave the rendered fat in the wok.',
      'Turn the heat to maximum and fry the garlic in the fat for 20 seconds.',
      'Add the pork loin and fry 2 minutes.',
      'Add the prawns and fry 90 seconds, then lift both out.',
      'Add the noodles and both soy sauces and toss, then leave still for 30 seconds so they catch. Repeat twice.',
      'Add the oyster sauce, sugar, white pepper and stock and bring to a hard boil.',
      'Add the cabbage and cook 2 minutes.',
      'Return the pork and prawns, stir the cornflour slurry in, and toss until the sauce clings.',
      'Scatter the crisp pork lard over and serve with sambal.'
    ],
    tips: [
      'Render your own lard. It is the dish.',
      'Leave the noodles still so they catch on the metal.',
      'Dark soy for colour, light soy for salt — both.'
    ],
    pair: ['Sambal belacan', 'Pickled green chillies', 'Chinese tea'],
    store: 'Best fresh. Keeps 1 day refrigerated; reheat in a very hot wok.',
    nut: [745, 38, 78, 32, 5, 8, 1680]
  },

  'tteok-galbi': {
    d: 'Short rib meat taken off the bone, chopped, seasoned and shaped back onto it, then grilled with a soy and pear glaze.',
    meta: 'Korean tteok galbi of minced short rib seasoned with soy, pear and sesame, shaped into patties and grilled with a glaze.',
    kw: ['tteok galbi', 'tteok galbi recipe', 'korean short rib patties', 'minced galbi', 'korean bbq patties'],
    why: 'Grated pear does two things at once and both matter: its enzymes tenderise the meat and its sugars help the glaze caramelise. Asian pear is traditional, but any hard pear works and apple does not — apple is too acidic and turns the surface of the meat mushy rather than tender. Knead the mixture until sticky so the patties hold on the grill.',
    ing: [
      '700 g minced beef short rib or chuck',
      '0.5 Asian pear, grated',
      '1 onion, very finely grated and squeezed dry',
      '6 garlic cloves, crushed',
      '4 tbsp light soy sauce',
      '3 tbsp caster sugar',
      '2 tbsp toasted sesame oil',
      '2 tbsp mirin',
      '1 tsp ground black pepper',
      '2 tbsp toasted sesame seeds',
      '4 spring onions, finely sliced',
      '3 tbsp soy sauce, for the glaze',
      '2 tbsp honey',
      '1 tbsp rice vinegar',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Mix the mince with the grated pear, onion, garlic, soy sauce, sugar, sesame oil, mirin, pepper and half the sesame seeds.',
      'Knead hard for 4 minutes, until the mixture turns sticky and holds together in one mass.',
      'Refrigerate 1 hour.',
      'Shape into 8 oval patties about 1.5 cm thick.',
      'Mix the glaze soy, honey and vinegar in a small bowl.',
      'Heat a griddle or heavy pan with the oil over a medium-high heat.',
      'Cook the patties 4 minutes on the first side without moving them.',
      'Turn and cook 3 minutes, brushing with the glaze.',
      'Turn once more, glaze again, and cook 2 minutes until lacquered and cooked through.',
      'Scatter the spring onions and remaining sesame seeds over and serve.'
    ],
    tips: [
      'Pear, not apple.',
      'Knead until sticky or they fall apart.',
      'Glaze on the last two turns only, or the sugar burns.'
    ],
    pair: ['Steamed rice', 'Lettuce leaves for wrapping', 'Kimchi'],
    store: 'Shaped raw patties freeze 2 months. Cooked, they keep 3 days.',
    nut: [545, 38, 22, 34, 2, 18, 1290],
    rest: [60, 'chilling the mixture']
  },

  'dubu-jorim': {
    d: 'Tofu slabs pan-fried until golden, then braised in soy and chilli until the sauce has almost gone. Thirty minutes.',
    meta: 'Korean braised tofu, pan-fried until golden then simmered in a soy, gochugaru and garlic sauce with spring onion.',
    kw: ['dubu jorim', 'dubu jorim recipe', 'korean braised tofu', 'soy braised tofu', 'korean tofu side dish'],
    why: 'Press the tofu and fry it hard before any liquid goes near it. A golden crust changes both texture and flavour and it stops the slabs disintegrating in the braise — untfried tofu goes to pieces and the dish becomes a soy soup with tofu in it. Fry it dry in a hot pan until it releases on its own; poking it before then tears the surface off.',
    ing: [
      '600 g firm tofu, in 1.5 cm slabs',
      '0.5 tsp fine sea salt',
      '3 tbsp vegetable oil',
      '4 tbsp light soy sauce',
      '1 tbsp gochugaru',
      '1 tbsp caster sugar',
      '1 tbsp mirin',
      '5 garlic cloves, finely chopped',
      '150 ml water',
      '1 tbsp toasted sesame oil',
      '4 spring onions, sliced',
      '1 tbsp toasted sesame seeds'
    ],
    st: [
      'Press the tofu between two boards under a weight for 15 minutes, then pat dry and salt lightly.',
      'Heat the vegetable oil in a wide non-stick pan over a medium-high heat.',
      'Lay the tofu in and fry 5 minutes without touching it, until it releases and the underside is golden.',
      'Turn and fry 4 minutes more.',
      'Mix the soy sauce, gochugaru, sugar, mirin, garlic and water.',
      'Pour it around the tofu, not over it.',
      'Simmer 8 minutes, spooning the sauce over every couple of minutes, until it has reduced to a glaze.',
      'Add half the spring onions and cook 1 minute.',
      'Drizzle the sesame oil over and take off the heat.',
      'Scatter the remaining spring onions and the sesame seeds over.'
    ],
    tips: [
      'Press it, then fry it dry and hard.',
      'Wait until it releases before turning.',
      'Sauce around the tofu, not over it, so the crust survives.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Doenjang jjigae'],
    store: 'Keeps 4 days refrigerated and is good cold from the fridge.',
    nut: [285, 20, 14, 18, 3, 8, 1290]
  },

  'ojingeo-bokkeum': {
    d: 'Squid scored, cut and stir-fried in gochujang with onion and courgette. Thirty-five minutes, and the squid cooks in three.',
    meta: 'Korean spicy stir-fried squid in a gochujang and gochugaru sauce with onion, carrot and courgette over a high heat.',
    kw: ['ojingeo bokkeum', 'ojingeo bokkeum recipe', 'korean spicy squid', 'stir fried squid korean', 'gochujang squid'],
    why: 'Score the squid on the inside in a diamond pattern before cutting it into pieces. The cuts make it curl decoratively, but more usefully they let heat in fast so it cooks in about three minutes — and squid has two acceptable states, three minutes or forty, with nothing but rubber between them. Have everything else finished before it goes in.',
    ing: [
      '700 g squid, cleaned',
      '3 tbsp gochujang',
      '1 tbsp gochugaru',
      '2 tbsp light soy sauce',
      '1 tbsp caster sugar',
      '1 tbsp mirin',
      '5 garlic cloves, crushed',
      '2.5 cm ginger, grated',
      '2 tbsp vegetable oil',
      '1 onion, thickly sliced',
      '1 carrot, sliced on the diagonal',
      '1 courgette, halved and sliced',
      '4 spring onions, in 4 cm lengths',
      '1 tbsp toasted sesame oil',
      '1 tbsp toasted sesame seeds'
    ],
    st: [
      'Open the squid tubes out flat and score the inside surface in a diamond pattern, cutting halfway through.',
      'Cut into 4 cm pieces and keep the tentacles whole.',
      'Mix the gochujang, gochugaru, soy sauce, sugar, mirin, garlic and ginger into a sauce.',
      'Heat the vegetable oil in a wok over the highest heat.',
      'Add the onion and carrot and stir-fry 2 minutes.',
      'Add the courgette and stir-fry 90 seconds.',
      'Pour in the sauce and let it bubble for 1 minute.',
      'Add the squid and stir-fry 3 minutes only, until it curls and turns opaque.',
      'Add the spring onions and toss once.',
      'Take off the heat, stir in the sesame oil, scatter the sesame seeds and serve at once.'
    ],
    tips: [
      'Score the inside, not the outside.',
      'Three minutes for the squid and not a second more.',
      'Vegetables finished before the squid goes in.'
    ],
    pair: ['Steamed rice', 'Cold noodles', 'Soju'],
    store: 'Best fresh. Reheating makes the squid tough.',
    nut: [345, 32, 24, 13, 4, 13, 1420]
  },

  'zosui': {
    d: 'Rice simmered in dashi with egg stirred through. Thirty minutes, and what Japanese households make from yesterday\'s rice and today\'s cold.',
    meta: 'Japanese zosui of cooked rice simmered in dashi with soy and mirin, finished with beaten egg and spring onion.',
    kw: ['zosui', 'zosui recipe', 'japanese rice soup', 'ojiya', 'rice porridge japanese'],
    why: 'Rinse the cooked rice under cold water before it goes into the dashi. It sounds odd and it is what stops zosui turning into porridge — washing off the surface starch means the grains stay separate in the broth rather than dissolving into it. The egg goes in off the heat in a thin stream and is stirred once; stirred hard it disappears into cloudiness.',
    ing: [
      '300 g cooked Japanese rice, cold',
      '700 ml dashi',
      '2 tbsp light soy sauce',
      '1 tbsp mirin',
      '0.5 tsp fine sea salt',
      '2 eggs, beaten',
      '4 shiitake mushrooms, sliced',
      '2 spring onions, finely sliced',
      '1 tsp grated ginger',
      '1 sheet toasted nori, torn',
      '1 tsp toasted sesame seeds'
    ],
    st: [
      'Put the cold rice in a sieve and rinse under cold running water for 20 seconds, then drain well.',
      'Bring the dashi to a simmer with the soy sauce, mirin and salt.',
      'Add the shiitake and simmer 4 minutes.',
      'Add the rinsed rice and simmer 6 minutes, until the grains have swelled but are still distinct.',
      'Stir in the grated ginger.',
      'Take the pan off the heat.',
      'Pour the beaten egg in slowly in a thin stream, moving in a circle.',
      'Stir once, gently, and cover for 1 minute so the egg sets in ribbons.',
      'Ladle into bowls.',
      'Scatter the spring onions, torn nori and sesame seeds over.'
    ],
    tips: [
      'Rinse the rice or you get porridge.',
      'Egg off the heat, one stir only.',
      'Cover for a minute so the ribbons set.'
    ],
    pair: ['Pickled vegetables', 'Green tea', 'A cold'],
    store: 'Eat immediately. It thickens to paste on standing.',
    nut: [345, 15, 52, 8, 2, 4, 1290]
  },

  'katsudon': {
    d: 'A pork cutlet simmered for ninety seconds in dashi and onion with egg poured over, slid onto rice. Forty minutes.',
    meta: 'Japanese katsudon of tonkatsu simmered briefly in a dashi, soy and mirin broth with onion and egg, served over rice.',
    kw: ['katsudon', 'katsudon recipe', 'pork cutlet rice bowl', 'japanese donburi', 'katsu don'],
    why: 'The egg goes in twice — two thirds first, then the rest thirty seconds later — and the pan comes off while the second addition is still visibly runny. That is the entire technique: the first egg sets into the broth and holds everything together, the second stays soft and glossy on top. Cook it until the egg is uniformly set and you have made a very different, much duller dish.',
    ing: [
      '2 tonkatsu, freshly fried or reheated',
      '1 onion, thinly sliced',
      '200 ml dashi',
      '3 tbsp light soy sauce',
      '3 tbsp mirin',
      '1 tbsp caster sugar',
      '4 eggs, beaten but not whisked smooth',
      '400 g cooked Japanese rice, hot',
      '2 spring onions, finely sliced',
      '1 pinch shichimi togarashi'
    ],
    st: [
      'Cut each tonkatsu across into 2 cm strips, keeping the shape.',
      'Bring the dashi, soy sauce, mirin and sugar to a simmer in a small frying pan.',
      'Add the sliced onion and simmer 5 minutes, until translucent.',
      'Lay the sliced tonkatsu on top of the onion in a single layer.',
      'Simmer 90 seconds so the underside takes up the broth but the crust stays crisp on top.',
      'Pour two thirds of the beaten egg over in a spiral and cover for 45 seconds.',
      'Pour the remaining egg over and cover for 30 seconds more.',
      'Take the pan off the heat while the top egg is still glossy and slightly runny.',
      'Slide the whole thing onto a bowl of hot rice, keeping the arrangement intact.',
      'Scatter the spring onions and shichimi over and eat at once.'
    ],
    tips: [
      'Egg in two additions.',
      'Off the heat while the top is still runny.',
      'Slide it on; do not spoon it, or you break the set.'
    ],
    pair: ['Miso soup', 'Pickled ginger', 'Green tea'],
    store: 'None. It has to be eaten within a minute or two.',
    nut: [845, 46, 92, 32, 4, 14, 1680]
  },

  'hiyayakko': {
    d: 'Cold tofu with ginger, spring onion and soy. Ten minutes, four ingredients, and it depends entirely on the tofu.',
    meta: 'Japanese chilled silken tofu topped with grated ginger, spring onion, bonito flakes and soy sauce.',
    kw: ['hiyayakko', 'hiyayakko recipe', 'cold tofu japanese', 'chilled tofu appetiser', 'silken tofu recipe'],
    why: 'There is nothing to hide behind, so buy the best silken tofu you can find and serve it very cold. Drain it on kitchen paper for ten minutes before plating — the water that pools around it otherwise dilutes the soy into something grey and weak. Grate the ginger just before serving; grated ginger loses its aroma within about half an hour.',
    ing: [
      '600 g silken tofu, very cold',
      '2.5 cm ginger, finely grated',
      '3 spring onions, very finely sliced',
      '4 tbsp light soy sauce, or tamari to keep it gluten-free',
      '4 tbsp bonito flakes',
      '1 tbsp toasted sesame seeds',
      '1 tsp toasted sesame oil',
      '2 shiso leaves, shredded, optional'
    ],
    st: [
      'Drain the tofu and cut it into 4 blocks.',
      'Sit the blocks on kitchen paper for 10 minutes to draw the surface water off.',
      'Chill 4 small bowls or plates in the freezer for 5 minutes.',
      'Grate the ginger just before serving.',
      'Lift each block onto a chilled plate with a fish slice.',
      'Top with grated ginger, then spring onion.',
      'Scatter the bonito flakes over — they will move in the heat rising from the plate.',
      'Add the sesame seeds and shiso if using.',
      'Pour the soy sauce and sesame oil over at the table, not before.'
    ],
    tips: [
      'Drain on paper for ten minutes.',
      'Chill the plates.',
      'Soy at the table so the tofu does not sit in it.'
    ],
    pair: ['Cold beer', 'Edamame', 'Grilled fish'],
    store: 'Assemble to order. Undressed tofu keeps as its packet says.',
    nut: [175, 15, 6, 10, 1, 2, 1080]
  },

  'khai-jiao': {
    d: 'A Thai omelette dropped into deep hot oil so it puffs and crisps at the edges. Thirteen minutes, and it goes on rice.',
    meta: 'Thai khai jiao omelette beaten with fish sauce and lime, poured into deep hot oil so it puffs, served over rice with chilli sauce.',
    kw: ['khai jiao', 'khai jiao recipe', 'thai omelette', 'thai deep fried omelette', 'omelette on rice'],
    why: 'This is not a French omelette and the oil must be deep and genuinely hot — about 190C, enough that the egg puffs violently the moment it lands. That is what gives the crisp lacy edges and the soufflé middle. A spoonful of rice flour in the beaten egg makes the crust hold, and beating it hard from a height introduces air the puffing depends on.',
    ing: [
      '4 eggs',
      '1 tbsp fish sauce',
      '1 tsp lime juice',
      '1 tbsp rice flour',
      '0.25 tsp ground white pepper',
      '200 ml vegetable oil, for frying',
      '300 g cooked jasmine rice, hot',
      '3 tbsp Sriracha or Thai chilli sauce',
      '1 spring onion, sliced'
    ],
    st: [
      'Beat the eggs hard with the fish sauce, lime juice, rice flour and white pepper for 1 minute.',
      'Keep beating, lifting the fork high so the mixture falls back in a ribbon and takes in air.',
      'Heat the oil in a small deep pan or wok to 190C — a drop of egg should sizzle and rise immediately.',
      'Pour the egg in from about 20 cm above the pan, in one movement.',
      'It will puff up at once. Leave it 90 seconds without touching it.',
      'Spoon hot oil over the top so the upper surface sets.',
      'Turn it once with two spatulas and cook 45 seconds more.',
      'Lift onto a rack to drain for 30 seconds.',
      'Slide onto hot rice, scatter the spring onion over and serve with chilli sauce.'
    ],
    tips: [
      'Deep oil at 190C. Shallow oil gives a flat omelette.',
      'Pour from a height so it spreads and puffs.',
      'Ninety seconds untouched.'
    ],
    pair: ['Jasmine rice', 'Sriracha', 'Nam pla prik'],
    store: 'None. It is crisp for about four minutes.',
    nut: [545, 18, 42, 34, 1, 6, 1180]
  },

  'pad-prik-king': {
    d: 'Green beans and pork stir-fried in red curry paste with no coconut milk at all. A dry curry, and thirty minutes.',
    meta: 'Thai pad prik king of green beans and pork stir-fried in red curry paste with kaffir lime, fish sauce and palm sugar.',
    kw: ['pad prik king', 'pad prik king recipe', 'thai dry curry', 'green bean curry stir fry', 'red curry paste stir fry'],
    why: 'No liquid goes into this at all, which is the whole identity of the dish and what makes people think their curry paste has failed. Fry the paste in oil until it darkens and smells cooked — about two minutes — and it will coat the beans as a dry, intensely flavoured crust. A splash of stock turns it into an ordinary red curry.',
    ing: [
      '400 g green beans, in 5 cm lengths',
      '300 g pork loin or chicken thigh, thinly sliced',
      '3 tbsp red curry paste',
      '4 tbsp vegetable oil',
      '2 tbsp fish sauce',
      '1 tbsp palm sugar',
      '6 kaffir lime leaves, very finely shredded',
      '2 red chillies, sliced',
      '3 garlic cloves, finely chopped',
      '2 tbsp water'
    ],
    st: [
      'Blanch the green beans in boiling water for 2 minutes, then drain and dry them thoroughly.',
      'Heat the oil in a wok over a medium-high heat.',
      'Add the curry paste and fry 2 minutes, pressing it against the wok, until it darkens and smells cooked.',
      'Add the garlic and cook 20 seconds.',
      'Add the pork and stir-fry 3 minutes, until cooked through and coated in paste.',
      'Add the beans and toss for 3 minutes over a high heat.',
      'Add the fish sauce, palm sugar and just the 2 tbsp of water — no more.',
      'Toss for 2 minutes, until the liquid has gone and the paste clings as a dry coating.',
      'Stir in most of the shredded lime leaves and the chillies.',
      'Scatter the remaining lime leaf over and serve with rice.'
    ],
    tips: [
      'No coconut milk and no stock. It is a dry curry.',
      'Dry the blanched beans or the paste slides off.',
      'Fry the paste until it darkens before anything else goes in.'
    ],
    pair: ['Jasmine rice', 'Fried egg', 'Nam pla prik'],
    store: 'Keeps 2 days refrigerated and is good cold.',
    nut: [385, 24, 18, 25, 6, 9, 1180]
  },

  'khanom-krok': {
    d: 'Coconut pancakes cooked in a dimpled pan, crisp underneath and molten in the middle, served two stuck together.',
    meta: 'Thai khanom krok coconut pancakes of a rice flour base and a sweet coconut cream top, cooked in a dimpled pan.',
    kw: ['khanom krok', 'khanom krok recipe', 'thai coconut pancakes', 'coconut pudding pancakes', 'thai street dessert'],
    why: 'Two batters, not one, and the order matters: a thin savoury rice flour batter goes in first and sets into the crisp shell, then a thick sweet coconut cream is spooned into the well it leaves. Poured together they merge and you get one soft cake. The pan must be very well oiled and properly hot or the shells tear when you lift them out.',
    ing: [
      '150 g rice flour',
      '2 tbsp cooked jasmine rice',
      '350 ml coconut milk, for the base',
      '0.75 tsp fine sea salt, for the base',
      '2 tbsp caster sugar, for the base',
      '200 ml coconut cream, for the top',
      '3 tbsp caster sugar, for the top',
      '0.5 tsp fine sea salt, for the top',
      '1 tbsp rice flour, for the top',
      '4 tbsp vegetable oil, for the pan',
      '3 spring onions, finely sliced',
      '3 tbsp sweetcorn kernels'
    ],
    st: [
      'Blend the rice flour, cooked rice, base coconut milk, base salt and base sugar until completely smooth. Rest 20 minutes.',
      'Whisk the coconut cream with the top sugar, top salt and the extra rice flour into a thick pouring cream.',
      'Heat a khanom krok pan or aebleskiver pan over a medium heat and brush every well generously with oil.',
      'Fill each well about two thirds with the thin base batter.',
      'Cook 2 minutes, until the edges set and pull away and a well forms in the middle.',
      'Spoon the thick coconut cream into each well, filling to the top.',
      'Scatter a few spring onions on half of them and sweetcorn on the other half.',
      'Cover and cook 3 minutes, until the base is crisp and brown and the top is just set but still wobbling.',
      'Lift each one out with a small spoon and press two together, tops facing.',
      'Serve warm, and repeat with the rest of the batter.'
    ],
    tips: [
      'Two batters, thin first then thick.',
      'Oil every well generously each time.',
      'The top should still wobble when you lift them.'
    ],
    pair: ['Thai iced tea', 'Fresh mango', 'A street market'],
    store: 'Eat warm. They soften within the hour.',
    nut: [265, 3, 32, 15, 2, 14, 380]
  },

  'banh-cuon': {
    d: 'Rice batter steamed into sheets thinner than paper, rolled around pork and wood ear, with fried shallots over.',
    meta: 'Vietnamese steamed rice rolls filled with minced pork and wood ear mushroom, topped with fried shallots and nuoc cham.',
    kw: ['banh cuon', 'banh cuon recipe', 'vietnamese steamed rice rolls', 'rice noodle rolls', 'vietnamese breakfast'],
    why: 'The batter must be thin as milk and rested at least half an hour, and the cloth or pan must be genuinely hot before each pour. The sheet sets in about forty seconds; longer and it toughens, shorter and it tears when you lift it. Oil the work surface rather than the sheet, and lift with a flat blade in one movement — hesitating is what tears them.',
    ing: [
      '200 g rice flour',
      '50 g tapioca starch',
      '1 tsp fine sea salt',
      '750 ml water',
      '2 tbsp vegetable oil, for the batter',
      '300 g minced pork',
      '20 g dried wood ear mushrooms, soaked and finely chopped',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '1 tbsp fish sauce',
      '0.5 tsp ground black pepper',
      '1 tbsp vegetable oil, for frying',
      '4 tbsp crispy fried shallots',
      '1 bunch coriander',
      '150 g beansprouts',
      '8 tbsp nuoc cham',
      '2 tbsp vegetable oil, for the surface'
    ],
    st: [
      'Whisk the rice flour, tapioca starch, salt, water and batter oil to a thin batter and rest 30 minutes.',
      'Fry the pork in the frying oil for 5 minutes, then add the onion and garlic for 4 minutes.',
      'Stir in the wood ear, fish sauce and pepper and cook 2 minutes. Set aside.',
      'Heat a wide non-stick frying pan over a medium heat and brush with oil.',
      'Stir the batter, ladle a thin layer in and swirl at once to coat the base.',
      'Cover and steam 40 seconds, until the sheet turns translucent and lifts at the edge.',
      'Slide it onto an oiled work surface in one movement.',
      'Put a spoonful of filling along one edge and roll it up loosely.',
      'Repeat with the rest, stacking the rolls without pressing them.',
      'Scatter the fried shallots and coriander over and serve with beansprouts and nuoc cham.'
    ],
    tips: [
      'Batter as thin as milk, rested.',
      'Forty seconds and lift in one movement.',
      'Oil the surface, not the sheet.'
    ],
    pair: ['Nuoc cham', 'Cha lua pork roll', 'Vietnamese coffee'],
    store: 'Best within the hour. The rolls harden in the fridge.',
    nut: [485, 22, 62, 17, 3, 6, 1290]
  },

  'bun-rieu': {
    d: 'A tomato and crab broth with floating clouds of crab and egg, over rice vermicelli. Sharper and lighter than phở.',
    meta: 'Vietnamese bún riêu of a tomato and crab paste broth with crab and egg curds, tofu and rice vermicelli.',
    kw: ['bun rieu', 'bun rieu recipe', 'vietnamese crab noodle soup', 'tomato crab soup', 'bun rieu cua'],
    why: 'The crab and egg mixture is poured into simmering broth and then left completely alone for two minutes. It rises and sets into soft clouds on its own; stir it and you get cloudy broth with crab dust in it and nothing to eat. Push it gently to the side once it has set and let the broth clear again before serving.',
    ing: [
      '200 g crab meat',
      '3 eggs',
      '2 tbsp minced pork',
      '3 tbsp fish sauce',
      '0.5 tsp ground black pepper',
      '1.5 litres chicken or pork stock',
      '6 tomatoes, in wedges',
      '3 tbsp vegetable oil',
      '4 shallots, sliced',
      '3 tbsp annatto seeds',
      '2 tbsp tamarind paste',
      '1 tbsp caster sugar',
      '200 g fried tofu puffs, halved',
      '400 g rice vermicelli',
      '1 bunch perilla or mint',
      '150 g beansprouts',
      '2 limes, in wedges',
      '3 tbsp shrimp paste, optional'
    ],
    st: [
      'Beat the crab meat, eggs, minced pork, 1 tbsp of the fish sauce and the pepper together. Set aside.',
      'Fry the annatto seeds in the oil for 1 minute until it runs orange, then strain the seeds out.',
      'Fry the shallots in the annatto oil for 4 minutes, then add the tomatoes and cook 5 minutes.',
      'Pour in the stock, add the tamarind, sugar and remaining fish sauce and bring to a simmer.',
      'Turn the heat down so the broth is barely moving.',
      'Pour the crab mixture in slowly across the surface.',
      'Leave it completely alone for 2 minutes, until it rises and sets into soft clouds.',
      'Push the clouds gently to one side and add the tofu puffs. Simmer 3 minutes.',
      'Soak or boil the vermicelli as the packet directs and divide between bowls.',
      'Ladle the broth over, lift the crab clouds on top, and serve with herbs, beansprouts and lime.'
    ],
    tips: [
      'Pour the crab mixture in and do not touch it.',
      'A bare simmer — a rolling boil breaks the clouds up.',
      'Annatto for the colour, strained out after a minute.'
    ],
    pair: ['Perilla leaves', 'Shrimp paste on the side', 'Lime and chilli'],
    store: 'The broth keeps 3 days refrigerated. Make the crab clouds fresh.',
    nut: [545, 32, 68, 16, 4, 9, 1780]
  },

  'goi-ga': {
    d: 'Poached chicken torn into shreds with cabbage, herbs and a sharp fish sauce dressing. Forty minutes, mostly cooling.',
    meta: 'Vietnamese chicken and cabbage salad with Vietnamese mint, fried shallots and a lime, fish sauce and chilli dressing.',
    kw: ['goi ga', 'goi ga recipe', 'vietnamese chicken salad', 'cabbage chicken salad', 'vietnamese salad dressing'],
    why: 'Salt the shredded cabbage and squeeze it before it meets the dressing, or the salad floods within ten minutes. And poach the chicken rather than roasting it: poached meat stays moist enough to tear into long shreds, which hold dressing in a way that chopped roast chicken does not. Cool it in its own broth so it does not dry as it sits.',
    ing: [
      '2 chicken breasts, on the bone if possible',
      '1 litre water',
      '5 cm ginger, sliced',
      '3 spring onions, halved',
      '1 tsp fine sea salt, for the poaching',
      '400 g white cabbage, very finely shredded',
      '1 tbsp fine sea salt, for drawing water',
      '1 carrot, in fine matchsticks',
      '1 red onion, very thinly sliced',
      '4 tbsp fish sauce',
      '4 tbsp lime juice',
      '2 tbsp caster sugar',
      '2 garlic cloves, crushed',
      '2 red chillies, finely chopped',
      '1 bunch Vietnamese mint or regular mint',
      '1 bunch coriander',
      '4 tbsp crispy fried shallots',
      '4 tbsp roasted peanuts, crushed'
    ],
    st: [
      'Simmer the chicken in the water with the ginger, spring onions and poaching salt for 15 minutes.',
      'Take the pan off the heat and leave the chicken in the broth to cool for 20 minutes.',
      'Toss the shredded cabbage with the drawing salt and leave 15 minutes, then rinse and squeeze dry in a cloth.',
      'Whisk the fish sauce, lime juice, sugar, garlic and chillies until the sugar dissolves.',
      'Lift the chicken out and tear it into long shreds with your fingers.',
      'Toss the cabbage, carrot and red onion with half the dressing.',
      'Add the chicken and the herbs and toss again with the rest of the dressing.',
      'Taste and correct — it should be sharp, salty and sweet in that order.',
      'Pile onto a platter.',
      'Scatter the fried shallots and crushed peanuts over and serve at once.'
    ],
    tips: [
      'Salt and squeeze the cabbage.',
      'Cool the chicken in its broth.',
      'Tear by hand, do not chop.'
    ],
    pair: ['Prawn crackers', 'Rice', 'Cold beer'],
    store: 'Dress to order. Undressed components keep 2 days refrigerated.',
    nut: [385, 34, 28, 15, 5, 18, 1780]
  },

  'lanzhou-beef-noodles': {
    d: 'A clear beef broth over hand-pulled noodles with white radish, coriander and a spoonful of chilli oil. Two and a half hours.',
    meta: 'Lanzhou beef noodle soup with a clear spiced beef broth, white radish, hand-pulled noodles, coriander and chilli oil.',
    kw: ['lanzhou beef noodle soup', 'lanzhou lamian', 'chinese beef noodle soup', 'clear beef broth noodles', 'hand pulled noodle soup'],
    why: 'Lanzhou beef noodles are judged on five things and the first is that the broth is clear — the Chinese rule is "one clear, two white, three green, four red, five yellow". Blanch the bones and throw the water away, then never let the pot boil. The white radish is not a garnish either: it goes in for the last forty minutes and sweetens and clarifies the broth.',
    ing: [
      '1.2 kg beef shin, in large pieces',
      '600 g beef bones',
      '3 litres cold water',
      '6 cm ginger, sliced',
      '4 spring onions, halved',
      '3 star anise',
      '1 cinnamon stick',
      '1 tsp fennel seeds',
      '1 tsp cumin seeds',
      '4 cloves',
      '2 bay leaves',
      '1 tsp Sichuan peppercorns',
      '2 tsp fine sea salt',
      '1 white mooli radish, in 5 mm slices',
      '400 g thick wheat noodles',
      '4 tbsp chilli oil',
      '4 tbsp chopped coriander leaves',
      '4 spring onions, finely sliced'
    ],
    st: [
      'Cover the beef and bones with cold water, bring to the boil, boil 5 minutes, then drain and rinse everything including the pan.',
      'Tie the star anise, cinnamon, fennel, cumin, cloves, bay and Sichuan peppercorns in a muslin bag.',
      'Return the meat and bones to the clean pan with the 3 litres of cold water, the ginger, halved spring onions and spice bag.',
      'Bring to a bare simmer and hold it there for 90 minutes. Never let it boil.',
      'Skim whatever rises in the first 15 minutes.',
      'Add the radish and the salt and simmer 40 minutes more.',
      'Lift the beef out, cool slightly and slice it thinly across the grain.',
      'Strain the broth through a fine sieve without pressing the solids.',
      'Boil the noodles as the packet directs and divide between bowls.',
      'Ladle the clear broth over, add the sliced beef and radish, and top with chilli oil, coriander and spring onion.'
    ],
    tips: [
      'Blanch and discard the first water.',
      'A bare simmer, never a boil — clarity is the point.',
      'Radish in for the last forty minutes only.'
    ],
    pair: ['Chilli oil', 'Pickled garlic', 'Cold Chinese tea'],
    store: 'The broth keeps 4 days refrigerated and freezes 3 months.',
    nut: [685, 52, 72, 18, 4, 6, 1680]
  },

  'pineapple-bun': {
    d: 'A soft milk bun under a crackled sweet crust that splits into a pattern in the oven. No pineapple in it anywhere.',
    meta: 'Hong Kong bo lo bao of enriched milk bread dough under a sweet cookie topping that cracks into a pineapple pattern.',
    kw: ['pineapple bun', 'pineapple bun recipe', 'bo lo bao', 'hong kong bakery bun', 'crackle top bun'],
    why: 'The topping is a cookie dough and it must be cold and rolled thin when it goes on the risen bun. It cracks because it sets before the bun finishes rising, and the expanding dough underneath tears it apart — warm topping stretches instead of cracking, and thick topping never sets in time. Chill it hard and roll it thinner than seems sensible.',
    ing: [
      '300 g strong white flour',
      '40 g caster sugar',
      '1 tsp fast-action yeast',
      '0.75 tsp fine sea salt',
      '150 ml warm whole milk',
      '1 egg',
      '40 g unsalted butter, softened',
      '80 g unsalted butter, for the topping',
      '80 g icing sugar',
      '1 egg yolk, for the topping',
      '120 g plain flour, for the topping',
      '2 tbsp custard powder',
      '0.25 tsp baking powder',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Mix the strong flour, caster sugar, yeast and salt, then work in the warm milk and egg to a soft dough.',
      'Knead 10 minutes, then work in the softened butter and knead 5 minutes more, until smooth and elastic.',
      'Prove covered in a warm place for 75 minutes, until doubled.',
      'Beat the topping butter with the icing sugar until pale, then beat in the egg yolk.',
      'Fold in the plain flour, custard powder and baking powder to a stiff dough. Wrap and chill 45 minutes.',
      'Knock the risen dough back, divide into 8 and shape into tight balls.',
      'Prove on a lined tray for 45 minutes.',
      'Divide the chilled topping into 8 and roll each between baking paper into a thin disc.',
      'Lay a disc over each bun, pressing lightly, and brush with beaten egg.',
      'Bake at 180C for 18 minutes, until the topping has cracked into a pattern and turned deep gold.'
    ],
    tips: [
      'Topping cold and rolled thin.',
      'Press it on lightly — pressing hard stops it cracking.',
      'Eat warm, split, with a slab of cold butter inside.'
    ],
    pair: ['Hong Kong milk tea', 'A slab of cold butter', 'Egg tarts'],
    store: 'Best the day they are baked. Freeze 1 month and refresh at 160C for 6 minutes.',
    nut: [385, 8, 54, 16, 2, 18, 280],
    rest: [165, 'proving and chilling']
  },

  'hong-kong-milk-tea': {
    d: 'Strong black tea pulled repeatedly through a cloth bag and mixed with evaporated milk. Twenty minutes and it should be almost bitter.',
    meta: 'Hong Kong silk stocking milk tea of Ceylon tea boiled and strained repeatedly through a cloth bag, mixed with evaporated milk.',
    kw: ['hong kong milk tea', 'hong kong milk tea recipe', 'silk stocking milk tea', 'cha chaan teng tea', 'evaporated milk tea'],
    why: 'The pulling — pouring the tea back and forth through the cloth bag six or seven times — is what makes it smooth. Each pass strains out tannin particles and aerates the liquid, so a tea brewed this strong stops being harsh and becomes velvety. Evaporated milk, not fresh: it has the concentration to stand up to tea this strong without turning the whole thing grey and weak.',
    ing: [
      '5 tbsp strong Ceylon black tea leaves, a mix of coarse and fine',
      '600 ml water',
      '150 ml evaporated milk',
      '3 tbsp condensed milk, or caster sugar to taste'
    ],
    st: [
      'Bring the water to the boil in a saucepan.',
      'Add the tea leaves and boil hard for 4 minutes.',
      'Set a cloth tea bag or fine muslin over a second pan and pour the tea through it.',
      'Pour the strained tea back through the bag into the first pan, from a height.',
      'Repeat this pulling 6 times in total, letting the leaves stay in the bag.',
      'Return the tea and the bag of leaves to the heat and simmer 3 minutes more.',
      'Pull it twice more through the bag.',
      'Warm the evaporated milk without boiling it.',
      'Put the condensed milk in the bottom of each cup and pour the hot tea in.',
      'Add the warm evaporated milk, stir once, and serve very hot.'
    ],
    tips: [
      'Pull it at least six times. That is the smoothness.',
      'Evaporated milk, not fresh.',
      'Brew it stronger than feels right — the milk takes the edge off.'
    ],
    pair: ['Pineapple bun', 'Egg tarts', 'A cha chaan teng at 3pm'],
    store: 'The tea base keeps 2 days refrigerated. Add milk to order.',
    nut: [185, 6, 26, 6, 0, 25, 90]
  }
};
