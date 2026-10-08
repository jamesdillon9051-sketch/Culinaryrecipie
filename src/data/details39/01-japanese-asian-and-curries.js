'use strict';

/**
 * Volume thirty-nine — Japanese, South-East Asian, Indian and Caribbean dinners.
 *
 * Variations on dishes that cooks look up by name. Times are the recipe's own;
 * hobs and ovens differ, so each method says when to check early. Nutrition
 * is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'katsu-sando': {
    d: 'A breadcrumbed pork cutlet fried for 8 minutes and pressed between soft white bread with a sweet, tangy sauce and shredded cabbage.',
    meta: 'Katsu sando: a breadcrumbed pork cutlet fried until crisp and pressed between soft white bread with tonkatsu-style sauce and shredded cabbage.',
    kw: ['katsu sando', 'japanese katsu sandwich', 'pork katsu sando', 'tonkatsu sandwich', 'katsu sando with cabbage'],
    why: 'The sandwich is soft on the outside and loud on the inside: pillowy white bread around a cutlet that crackles. It is a convenience-store classic in Japan, and the way to get it right is in the order of the layers.\n\nPound the pork to an even 1 cm so it cooks through in the time the crumb takes to colour. Season it, then coat it in flour, egg and panko, pressing the crumbs on. **Panko gives the shatter**; ordinary breadcrumbs go dense and dark.\n\nFry in about 1 cm of hot oil for 4 minutes a side, until deep gold, and drain on a rack rather than paper so the underside stays crisp. If your pan runs hot, check at 3 minutes.\n\nSpread the bread with butter and mustard, add a handful of shredded cabbage, then the warm cutlet brushed with sauce. Press down gently and trim the crusts. Cut the sandwich in half with a sharp knife, in one clean stroke, so the crumb stays whole.',
    ing: [
      '2 boneless pork loin steaks, about 250 g',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '2 tbsp plain flour',
      '1 egg, beaten',
      '60 g panko breadcrumbs',
      '3 tbsp vegetable oil, absorbed from about 200 ml of frying oil',
      '4 slices soft white bread',
      '20 g butter, softened',
      '1 tsp mustard',
      '60 g white cabbage, finely shredded',
      '3 tbsp tonkatsu sauce'
    ],
    st: [
      'Pound the pork to 1 cm thick and season with the salt and pepper.',
      'Coat each cutlet in the flour, then the egg, then the panko, pressing the crumbs on.',
      'Heat the oil in a frying pan over medium heat and fry the cutlets for 4 minutes per side until deep gold. Drain on a rack.',
      'Spread the bread with the butter and mustard. Fill with the cabbage and cutlets brushed with the sauce, press gently and trim the crusts.',
      'Cut each sandwich in half.'
    ],
    tips: [
      'Pound the pork to an even thickness.',
      'Use panko for the crispest crumb.',
      'If your pan runs hot, check at 3 minutes.',
      'Drain the cutlets on a rack.'
    ],
    pair: ['Pickled cucumber', 'Miso soup', 'Potato salad', 'Green tea'],
    store: 'Best eaten within the hour. Wrapped, it keeps in the fridge for 1 day, though the crumb softens.',
    nut: [819, 40, 68, 43, 4, 11, 1540]
  },

  'beef-udon': {
    d: 'Thick udon noodles in a soy and mirin broth with thin slices of beef, spring onion and a soft egg, ready in 25 minutes.',
    meta: 'Beef udon: thick udon noodles in a soy and mirin broth with thinly sliced beef, spring onion and a soft egg. Two servings.',
    kw: ['beef udon', 'beef udon noodle soup', 'japanese beef udon', 'easy beef udon', 'niku udon'],
    why: 'Udon is the comforting end of Japanese noodles: thick, soft and chewy, in a broth that tastes of soy, mirin and a little sugar. Beef turns it from a snack into a meal, and it is a bowl that can be made in about as long as it takes to boil the noodles.\n\nThe broth is dashi, soy sauce and mirin, brought to a simmer. Slice the beef as thin as you can, which is easiest when it is half frozen. **Add it to the simmering broth for 1 minute only**, so it stays pink and tender rather than grey.\n\nBoil the udon separately for the time on the packet, then rinse in cold water to remove the starch that would cloud the broth.\n\nLower a whole egg into the simmering water for 6 minutes for a soft yolk, then peel it under cold water. Pile the noodles in a bowl, ladle over the broth and beef, and finish with the sliced egg and spring onion.',
    ing: [
      '300 g frozen udon noodles',
      '500 ml dashi stock',
      '3 tbsp soy sauce',
      '2 tbsp mirin',
      '1 tsp sugar',
      '200 g thinly sliced beef sirloin',
      '2 eggs',
      '3 spring onions, sliced',
      '1 tsp grated ginger'
    ],
    st: [
      'Lower the eggs into a pan of simmering water for 6 minutes, cool in cold water and peel.',
      'Boil the udon for the time on the packet, drain and rinse.',
      'Simmer the dashi, soy sauce, mirin, sugar and ginger for 5 minutes. Slip in the beef for 1 minute.',
      'Divide the noodles between two bowls, ladle over the broth and beef and top with the halved eggs and spring onions.'
    ],
    tips: [
      'Slice the beef very thin.',
      'Add the beef for 1 minute only.',
      'Rinse the noodles before serving.',
      'If your hob runs hot, check the eggs at 5 minutes.'
    ],
    pair: ['Pickled ginger', 'Tempura', 'Edamame', 'Green tea'],
    store: 'Best eaten at once. The broth keeps in the fridge for 2 days; cook fresh noodles to serve.',
    nut: [458, 36, 47, 14, 2, 11, 2490]
  },

  'tempura-prawns': {
    d: 'Large prawns dipped in an ice-cold batter and fried for 3 minutes until pale and crisp, with a soy and ginger dipping sauce.',
    meta: 'Tempura prawns: large prawns in an ice-cold batter fried until pale and crisp, served with a soy, mirin and ginger dipping sauce.',
    kw: ['tempura prawns', 'prawn tempura', 'japanese tempura prawns', 'crispy tempura prawns', 'tempura prawns with dipping sauce'],
    why: 'Tempura should be so light it barely seems to be there: a lacework of batter that shatters and gives way to a juicy prawn. Heat and temperature are everything, and the batter needs to stay cold.\n\nUse iced water, and mix the batter just before you fry, with chopsticks and no more than a few strokes. **Leave the lumps in.** Overmixing develops gluten, and gluten makes the batter heavy and chewy.\n\nPeel the prawns but leave the tails on. Make three shallow cuts along the belly and press flat so they do not curl, and pat them dry so the batter clings.\n\nHeat the oil to 180°C. Fry only 4 prawns at a time, for about 3 minutes, turning once, until the batter is pale gold. If your oil runs hot, check at 2 minutes. Lift onto a rack, not paper, and serve at once with the dipping sauce. Serve it the moment it is out of the oil, because tempura is at its best for only a few minutes.',
    ing: [
      '320 g large raw prawns (16), peeled with tails left on',
      '100 g plain flour',
      '40 g cornflour',
      '200 ml ice-cold sparkling water',
      '20 g egg yolk',
      '4 tbsp vegetable oil, absorbed from about 500 ml of frying oil',
      '3 tbsp soy sauce',
      '2 tbsp mirin',
      '100 ml dashi stock',
      '1 tsp grated ginger'
    ],
    st: [
      'Simmer the soy sauce, mirin and dashi for 2 minutes, cool and stir in the ginger.',
      'Cut three shallow slits along the belly of each prawn, press flat and pat dry.',
      'Heat the oil to 180°C. Whisk the flour, cornflour, sparkling water and egg yolk with chopsticks for a few strokes, leaving lumps.',
      'Dip the prawns in the batter and fry in batches of 4 for 3 minutes, turning once, until pale gold. Drain on a rack and serve with the sauce.'
    ],
    tips: [
      'Keep the batter ice cold.',
      'Leave the lumps in the batter.',
      'If your oil runs hot, check at 2 minutes.',
      'Fry in small batches.'
    ],
    pair: ['Steamed rice', 'Pickled ginger', 'Soba noodles', 'Cold beer'],
    store: 'Eat straight away; tempura goes soft within minutes.',
    nut: [360, 21, 33, 16, 1, 4, 870]
  },

  'salmon-teriyaki': {
    d: 'Salmon fillets pan-fried for 8 minutes and glazed with a homemade soy, mirin and honey teriyaki sauce.',
    meta: 'Salmon teriyaki: salmon fillets pan-fried until crisp-skinned and glazed with a homemade soy, mirin and honey teriyaki sauce. Two servings.',
    kw: ['salmon teriyaki', 'teriyaki salmon', 'easy salmon teriyaki', 'pan fried salmon teriyaki', 'japanese salmon teriyaki'],
    why: 'Salmon takes teriyaki well: the sweet, salty glaze sticks to the flesh and caramelises in the pan, and the fish stays soft. The sauce is only three ingredients and is made in the same pan, so the washing up is small.\n\nPat the skin dry and start skin-side down in a little oil over medium heat. **Press the fillets flat for the first 20 seconds**, so the skin does not curl and crisps evenly. Cook for 5 minutes without moving them.\n\nTurn the fillets, pour in the soy sauce, mirin and honey, and let it bubble for 3 minutes, spooning the sauce over the fish as it thickens to a glossy glaze. If your pan runs hot, check at 2 minutes.\n\nThe salmon should be just opaque in the middle. Take it off the heat promptly, as it carries on cooking. Serve over rice with the sauce from the pan.',
    ing: [
      '2 salmon fillets, skin on, about 150 g each',
      '1 tbsp vegetable oil',
      '3 tbsp soy sauce',
      '3 tbsp mirin',
      '1 tbsp honey',
      '1 tsp grated ginger',
      '2 spring onions, sliced',
      '1 tsp sesame seeds'
    ],
    st: [
      'Pat the salmon dry. Heat the oil in a frying pan over medium heat and lay the fillets in skin-side down, pressing flat for 20 seconds.',
      'Cook for 5 minutes without moving, until the skin is crisp. Turn.',
      'Pour in the soy sauce, mirin, honey and ginger and bubble for 3 minutes, spooning the sauce over, until glossy.',
      'Scatter with the spring onions and sesame seeds and serve with the sauce.'
    ],
    tips: [
      'Dry the skin well.',
      'Press the fillets flat at the start.',
      'If your pan runs hot, check at 2 minutes.',
      'Take the fish off as soon as it turns opaque.'
    ],
    pair: ['Steamed rice', 'Pak choi', 'Cucumber salad', 'Miso soup'],
    store: 'Keeps in the fridge for 1 day. Eat cold over rice, or reheat very gently.',
    nut: [467, 33, 23, 27, 1, 20, 1390]
  },

  'miso-glazed-salmon': {
    d: 'Salmon fillets brushed with white miso, mirin and a little sugar and grilled for 10 minutes until the top is burnished.',
    meta: 'Miso glazed salmon: salmon fillets brushed with white miso, mirin and sugar and grilled for 10 minutes until burnished. Two servings.',
    kw: ['miso glazed salmon', 'miso salmon', 'easy miso glazed salmon', 'grilled miso salmon', 'white miso salmon'],
    why: 'Miso is salty, savoury and a little sweet, and under a hot grill it caramelises into a dark, sticky crust. The fish needs nothing else, which is why this works for a weeknight with almost no effort.\n\nWhisk the miso, mirin, sugar and a splash of water until smooth. White (shiro) miso is the mildest and sweetest, and it is the safest choice. **Brush the glaze on thickly** and leave the fillets for 15 minutes while the grill heats; the salt starts to season the flesh.\n\nGrill about 12 cm from the heat for 10 minutes, without turning. The top should darken in patches. If it browns too fast, move the tray lower, because the sugar burns quickly.\n\nIf your grill runs hot, check at 7 minutes. The fish is done when it flakes into large pieces. Serve with steamed rice and something green and crisp to cut the richness.',
    ing: [
      '2 salmon fillets, skin on, about 150 g each',
      '3 tbsp white miso paste',
      '2 tbsp mirin',
      '1 tbsp caster sugar',
      '1 tbsp water',
      '2 spring onions, sliced',
      '1 tsp sesame seeds'
    ],
    st: [
      'Whisk the miso, mirin, sugar and water until smooth. Brush over the salmon and leave for 15 minutes.',
      'Heat the grill to high and line a tray with foil.',
      'Grill the salmon 12 cm from the heat for 10 minutes, until the top is dark in patches and the fish flakes.',
      'Scatter with the spring onions and sesame seeds.'
    ],
    tips: [
      'Choose white miso for a mild flavour.',
      'Brush the glaze on thickly.',
      'If your grill runs hot, check at 7 minutes.',
      'Line the tray with foil for easy cleaning.'
    ],
    pair: ['Steamed rice', 'Greens with sesame', 'Pickled radish', 'Green tea'],
    store: 'Keeps in the fridge for 1 day. Good cold flaked over rice.',
    nut: [414, 33, 21, 22, 2, 15, 900]
  },

  'chirashi-bowl': {
    d: 'Sushi rice seasoned with vinegar and topped with raw salmon, tuna, cucumber, avocado and pickled ginger.',
    meta: 'Chirashi bowl: seasoned sushi rice topped with sashimi-grade salmon and tuna, cucumber, avocado and pickled ginger. Two servings.',
    kw: ['chirashi bowl', 'chirashi sushi bowl', 'japanese chirashi', 'sashimi rice bowl', 'homemade chirashi'],
    why: 'Chirashi means scattered, and the bowl is sushi without the rolling: seasoned rice with raw fish laid on top. It looks impressive and asks for no technique beyond slicing, but it does ask for good fish.\n\nBuy sashimi-grade fish from a fishmonger who sells it for eating raw, and keep it cold until the last moment. **Do not use fish that has not been sold for raw use.** Cook the rice with care, then fold in the vinegar, sugar and salt while it is hot, using a cutting motion so the grains do not mash.\n\nCool the rice to just above room temperature. Hot rice cooks the fish; cold rice is hard.\n\nSlice the fish across the grain in pieces about 1 cm thick, with a long, smooth stroke of a sharp knife. Fan them over the rice with the cucumber and avocado. Finish with pickled ginger, a little soy sauce and wasabi, and eat straight away.',
    ing: [
      '250 g sushi rice',
      '3 tbsp rice vinegar',
      '1 tbsp caster sugar',
      '1/2 tsp salt',
      '150 g sashimi-grade salmon',
      '150 g sashimi-grade tuna',
      '1/2 cucumber, thinly sliced',
      '1 avocado, sliced',
      '2 tbsp pickled ginger',
      '2 tbsp soy sauce',
      '1 tsp wasabi',
      '1 tsp sesame seeds'
    ],
    st: [
      'Rinse the rice until the water runs clear. Simmer it covered in 300 ml water for 12 minutes, then rest covered for 10 minutes.',
      'Warm the vinegar, sugar and salt until dissolved, fold into the rice with a cutting motion and cool.',
      'Slice the fish across the grain into pieces 1 cm thick.',
      'Divide the rice between two bowls, top with the fish, cucumber and avocado, and add the pickled ginger, soy sauce, wasabi and sesame seeds.'
    ],
    tips: [
      'Buy sashimi-grade fish and keep it cold.',
      'Cool the rice before adding the fish.',
      'Cut the fish with one long stroke.',
      'Eat straight away.'
    ],
    pair: ['Miso soup', 'Edamame', 'Seaweed salad', 'Green tea'],
    store: 'Best eaten at once. Raw fish should not be kept.',
    nut: [859, 45, 118, 23, 7, 8, 1550]
  },

  'drunken-noodles': {
    d: 'Wide rice noodles stir-fried over high heat with chicken, holy basil, chilli, garlic and a dark soy and oyster sauce.',
    meta: 'Drunken noodles: wide rice noodles stir-fried with chicken, basil, chilli, garlic and a dark soy and oyster sauce. Two servings in 20 minutes.',
    kw: ['drunken noodles', 'pad kee mao', 'thai drunken noodles', 'spicy thai noodles', 'easy drunken noodles'],
    why: 'Drunken noodles are named for the drinker, not the drink: they are hot enough, savoury enough and fast enough to sober up on. The noodle is wide and chewy, and it picks up the dark, smoky sauce like a sponge.\n\nSoak the dried noodles in warm water until bendy but not soft, then drain. They finish in the wok, and fully soft noodles tear. Mix the sauce before you start: soy, dark soy, oyster sauce and a pinch of sugar.\n\nGet the wok as hot as it will go. **The cooking is quick, so everything must be ready beside the hob.** Fry the garlic and chilli for 15 seconds, add the chicken and cook for 3 minutes, then the noodles and sauce.\n\nToss for 3 minutes until the noodles take on colour and a few catch and char at the edges. If your hob runs hot, work faster. Stir in a large handful of basil leaves at the end and serve.',
    ing: [
      '200 g wide dried rice noodles',
      '250 g chicken breast, thinly sliced',
      '2 tbsp vegetable oil',
      '4 garlic cloves, chopped',
      '2 red chillies, sliced',
      '1 red pepper, sliced',
      '3 tbsp oyster sauce',
      '1 tbsp dark soy sauce',
      '1 tbsp light soy sauce',
      '1 tsp sugar',
      '1 large handful Thai basil leaves'
    ],
    st: [
      'Soak the noodles in warm water for 15 minutes until bendy, then drain. Mix the oyster sauce, soy sauces and sugar.',
      'Heat the oil in a wok over high heat. Fry the garlic and chillies for 15 seconds, add the chicken and fry for 3 minutes.',
      'Add the pepper, noodles and sauce and toss for 3 minutes until the noodles take on colour.',
      'Stir in the basil and serve at once.'
    ],
    tips: [
      'Soak the noodles until just bendy.',
      'Have everything ready before the wok heats.',
      'If your hob runs hot, work faster.',
      'Add the basil last.'
    ],
    pair: ['Cucumber slices', 'Chilli flakes', 'Fried egg', 'Lime wedges'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat in a hot pan with a splash of water.',
    nut: [682, 37, 93, 18, 3, 7, 1530]
  },

  'vietnamese-caramel-pork': {
    d: 'Pork belly in a dark caramel and fish sauce braise, simmered for 1 hour until sticky, with eggs and spring onion.',
    meta: 'Vietnamese caramel pork: pork belly braised for 1 hour in a dark caramel and fish sauce until tender and sticky. Four servings.',
    kw: ['vietnamese caramel pork', 'thit kho', 'caramelised pork belly', 'vietnamese braised pork', 'caramel pork with eggs'],
    why: 'This is the pot of pork that sits on a family table in Vietnam beside a bowl of plain rice: salty, sweet, dark and rich, and better the next day. The only skill is the caramel, and it is easy to ruin and easy to fix.\n\nMelt the sugar in a dry pan over medium heat without stirring until it turns the colour of dark tea. **Stop at amber, not black.** Burnt sugar is bitter, and nothing later will hide it. Take the pan off the heat and add the pork, then the fish sauce, water and shallots.\n\nThe pork should sit in the liquid, not drown in it. Simmer gently, partly covered, for 1 hour, stirring now and then. If your hob runs hot, check at 45 minutes.\n\nAdd the peeled boiled eggs for the last 15 minutes so they colour and take up the sauce. The braise is ready when the pork is tender and the sauce coats the spoon. Serve with rice and a sharp pickle.',
    ing: [
      '700 g pork belly, cut into 3 cm cubes',
      '4 tbsp caster sugar',
      '4 tbsp fish sauce',
      '500 ml water',
      '3 shallots, sliced',
      '3 garlic cloves, chopped',
      '4 eggs, hard-boiled and peeled',
      '2 spring onions, sliced',
      '1/2 tsp black pepper'
    ],
    st: [
      'Melt the sugar in a heavy pan over medium heat, without stirring, until it turns dark amber. Take it off the heat.',
      'Add the pork, fish sauce, water, shallots and garlic and bring to a simmer.',
      'Cover partly and simmer gently for 45 minutes. Add the eggs and simmer for 15 minutes more, until the pork is tender and the sauce is sticky.',
      'Add the pepper and spring onions and serve.'
    ],
    tips: [
      'Stop the caramel at amber.',
      'Keep the simmer gentle.',
      'If your hob runs hot, check at 45 minutes.',
      'Add the eggs near the end.'
    ],
    pair: ['Steamed jasmine rice', 'Pickled mustard greens', 'Cucumber slices', 'Blanched greens'],
    store: 'Keeps in the fridge for up to 4 days and improves on the second day. Reheat gently.',
    nut: [1058, 24, 20, 98, 1, 16, 1190]
  },

  'mee-goreng': {
    d: 'Yellow egg noodles stir-fried with a sweet soy and chilli sauce, egg, prawns and vegetables, ready in 20 minutes.',
    meta: 'Mee goreng: yellow egg noodles stir-fried with a sweet soy and chilli sauce, egg, prawns and greens. Two servings in 20 minutes.',
    kw: ['mee goreng', 'malaysian mee goreng', 'fried noodles malaysian', 'easy mee goreng', 'mee goreng with prawns'],
    why: 'Mee goreng is the street-food answer to what to do with a packet of noodles: fry them with a sweet, salty, hot sauce and whatever else is to hand. The kecap manis, a thick sweet soy sauce, gives the dark colour and the glossy finish.\n\nBlanch the noodles in boiling water for 1 minute and drain. Fresh yellow noodles need only loosening, and they can turn gluey if boiled. Mix the sauce first so you can add it in one go.\n\nHeat the wok until it smokes, fry the garlic and shallot for 30 seconds, then add the prawns. **Push the ingredients to one side to scramble the egg** in the cleared space, then fold everything together.\n\nAdd the noodles, greens and sauce and toss for 3 minutes until everything is coated and a few strands char. If your hob runs hot, work quickly. Squeeze lime over the top and serve with sliced chilli and fried shallots.',
    ing: [
      '300 g fresh yellow egg noodles',
      '2 tbsp vegetable oil',
      '3 garlic cloves, chopped',
      '1 shallot, sliced',
      '150 g raw prawns, peeled',
      '2 eggs',
      '100 g choi sum, chopped',
      '3 tbsp kecap manis',
      '1 tbsp soy sauce',
      '1 tbsp chilli sauce',
      '1 lime, cut into wedges'
    ],
    st: [
      'Blanch the noodles in boiling water for 1 minute, drain and loosen. Mix the kecap manis, soy sauce and chilli sauce.',
      'Heat the oil in a wok over high heat. Fry the garlic and shallot for 30 seconds, add the prawns and fry for 2 minutes.',
      'Push to one side, scramble the eggs in the space, then fold everything together.',
      'Add the noodles, choi sum and sauce and toss for 3 minutes. Serve with the lime wedges.'
    ],
    tips: [
      'Blanch the noodles only briefly.',
      'Mix the sauce before you start.',
      'If your hob runs hot, work quickly.',
      'Finish with lime.'
    ],
    pair: ['Fried shallots', 'Sliced chilli', 'Cucumber', 'Iced tea'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat in a hot pan.',
    nut: [949, 45, 136, 25, 6, 23, 1410]
  },

  'steamed-fish-with-ginger': {
    d: 'A white fish fillet steamed for 10 minutes over ginger and spring onion, then finished with hot oil and soy sauce.',
    meta: 'Steamed fish with ginger: a white fish fillet steamed with ginger and spring onion, finished with hot oil and soy sauce. Two servings.',
    kw: ['steamed fish with ginger', 'chinese steamed fish', 'ginger and spring onion fish', 'steamed fish with soy sauce', 'easy steamed fish'],
    why: 'It is one of the cleanest ways to cook fish, and a Cantonese table staple: fish steamed until it is just done, with a spoonful of smoking oil poured over at the end to wake up the ginger and spring onion.\n\nUse a thick, firm white fish such as cod, haddock or sea bass. Lay it on a heatproof plate on a rack above simmering water, with sliced ginger underneath. **Do not let the water touch the plate.** The fish should be cooked by steam, not by boiling water.\n\nSteam, covered, for 10 minutes for fillets about 2.5 cm thick. If your steamer runs hot, check at 8 minutes. The flesh should turn opaque and flake at the thickest point.\n\nPour away any liquid on the plate, as it can be fishy. Scatter shredded ginger and spring onion over the top and spoon over the soy sauce. Heat the oil until it shimmers and pour it over the greens, where it will hiss and release their fragrance.',
    ing: [
      '2 white fish fillets, about 200 g each',
      '30 g fresh ginger, half sliced and half shredded',
      '4 spring onions, shredded',
      '3 tbsp light soy sauce',
      '1 tsp sugar',
      '3 tbsp vegetable oil',
      '1 tbsp coriander leaves'
    ],
    st: [
      'Lay the sliced ginger on a heatproof plate, set the fish on top and steam, covered, over simmering water for 10 minutes.',
      'Tip away the liquid from the plate. Scatter the shredded ginger and spring onion over the fish.',
      'Stir the soy sauce and sugar and spoon over.',
      'Heat the oil in a small pan until shimmering and pour it over the greens. Add the coriander and serve.'
    ],
    tips: [
      'Keep the plate above the water.',
      'If your steamer runs hot, check at 8 minutes.',
      'Pour off the cooking liquid.',
      'Heat the oil until it shimmers.'
    ],
    pair: ['Steamed rice', 'Stir-fried greens', 'Pickled cucumber', 'Jasmine tea'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day, though it loses its delicacy.',
    nut: [395, 39, 8, 23, 1, 3, 1450]
  },

  'beef-madras': {
    d: 'Beef simmered for 90 minutes in a hot, tangy sauce of tomatoes, chilli, ginger and madras curry powder until tender.',
    meta: 'Beef madras: stewing beef simmered for 90 minutes in a hot, tangy sauce of tomatoes, chilli, ginger and madras curry powder. Four servings.',
    kw: ['beef madras', 'beef madras curry', 'homemade beef madras', 'hot beef curry', 'british takeaway beef madras'],
    why: 'A madras is the hotter, tangier cousin of the everyday curry, and beef gives it body that chicken cannot. The heat comes from chilli, the tang from tomato and a splash of vinegar, and the depth from a long, slow simmer.\n\nUse stewing beef such as chuck, cut into 3 cm cubes. Lean steak turns dry and stringy. Brown it in batches, so the pan stays hot, and set it aside. **Brown onions are the base of the sauce**, so cook them slowly for 10 minutes until deep gold.\n\nAdd the garlic, ginger and spices and stir for 1 minute. Tip in the tomatoes, return the beef and add enough water to just cover.\n\nSimmer, partly covered, for 90 minutes, stirring every 20 minutes. It is ready when a cube yields to a fork. If your hob runs hot, check at 70 minutes. Finish with a little vinegar and salt, and let it stand for 10 minutes.',
    ing: [
      '700 g stewing beef, cubed',
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '4 garlic cloves, crushed',
      '1 tbsp grated ginger',
      '3 tbsp madras curry powder',
      '2 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '300 ml water',
      '1 tbsp white wine vinegar',
      '1 tsp salt'
    ],
    st: [
      'Brown the beef in 1 tbsp of the oil in batches, then set aside.',
      'Fry the onions in the remaining oil for 10 minutes until deep gold. Add the garlic, ginger, curry powder and chilli powder and stir for 1 minute.',
      'Add the tomatoes, water and beef and bring to a simmer. Cook partly covered for 90 minutes, stirring now and then, until tender.',
      'Stir in the vinegar and salt and leave for 10 minutes.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Cook the onions until deep gold.',
      'If your hob runs hot, check at 70 minutes.',
      'Add vinegar at the end.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 4 days and improves overnight. Reheat gently.',
    nut: [424, 38, 14, 24, 4, 5, 730]
  },

  'chicken-tikka-skewers': {
    d: 'Chicken thigh pieces marinated in yoghurt, ginger, garlic and spices, then grilled on skewers for 12 minutes.',
    meta: 'Chicken tikka skewers: chicken thighs marinated in yoghurt, garlic, ginger and spices and grilled on skewers for 12 minutes. Four servings.',
    kw: ['chicken tikka skewers', 'chicken tikka', 'grilled chicken tikka', 'easy chicken tikka skewers', 'tikka chicken kebabs'],
    why: 'Tikka is a method as much as a dish: yoghurt and spices tenderise the chicken, and a hot grill chars the edges and keeps the middle juicy. The marinade does most of the work, so the cooking is the easy part.\n\nUse boneless thighs, which stay moist where breast goes dry. Cut them into 3 cm pieces and toss with the yoghurt, lemon juice, ginger, garlic, garam masala, cumin and paprika. **Leave them for at least 30 minutes**, and up to a day in the fridge for a deeper flavour.\n\nThread the chicken onto skewers, leaving small gaps so the heat reaches every side. Soak wooden skewers first so they do not burn.\n\nGrill over high heat for 12 minutes, turning every 3 minutes, until charred in places and cooked through. If your grill runs hot, check at 9 minutes. Squeeze lemon over the top and serve with onion, mint raita and warm flatbread.',
    ing: [
      '700 g boneless chicken thighs, cut into 3 cm pieces',
      '150 g plain yoghurt',
      '1 lemon, juiced',
      '1 tbsp grated ginger',
      '3 garlic cloves, grated',
      '2 tsp garam masala',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '1 tsp salt',
      '1 tbsp vegetable oil',
      '1 red onion, cut into wedges'
    ],
    st: [
      'Mix the yoghurt, lemon juice, ginger, garlic, garam masala, cumin, paprika, salt and oil. Stir in the chicken and leave for at least 30 minutes.',
      'Thread the chicken and onion wedges onto skewers.',
      'Heat the grill to high and cook the skewers for 12 minutes, turning every 3 minutes, until charred and cooked through.',
      'Rest for 3 minutes and serve.'
    ],
    tips: [
      'Choose thighs rather than breast.',
      'Marinate for at least 30 minutes.',
      'If your grill runs hot, check at 9 minutes.',
      'Soak wooden skewers first.'
    ],
    pair: ['Mint raita', 'Flatbread', 'Sliced onion salad', 'Basmati rice'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot pan or eat cold in wraps.',
    nut: [292, 39, 7, 12, 2, 3, 760]
  },

  'cheese-enchiladas': {
    d: 'Corn tortillas rolled around melted cheese and onion, covered with red chilli sauce and baked for 25 minutes until bubbling.',
    meta: 'Cheese enchiladas: corn tortillas rolled around cheese and onion, covered with red chilli sauce and baked until bubbling. Four servings.',
    kw: ['cheese enchiladas', 'easy cheese enchiladas', 'mexican cheese enchiladas', 'vegetarian enchiladas', 'baked cheese enchiladas'],
    why: 'They are the simplest enchiladas, and the kind that disappear first at a table: rolled tortillas stuffed with cheese, covered with a sauce that is spicy and smoky, and baked until the edges crisp.\n\nThe sauce makes the dish. Fry flour and chilli powder in oil for a minute, then whisk in stock and tomato puree and simmer for 10 minutes. **Season it properly**, with cumin, garlic and oregano, because the tortillas and cheese are mild.\n\nSoften the corn tortillas in hot sauce or a dry pan for a few seconds so they roll without cracking. Fill each with cheese and a little onion, roll tightly and pack them seam-side down in a dish.\n\nPour the rest of the sauce over, scatter on more cheese and bake at 200°C for 25 minutes, until bubbling at the edges. If your oven runs hot, check at 20 minutes. Let them stand for 5 minutes, then serve with soured cream.',
    ing: [
      '8 corn tortillas',
      '250 g cheddar, grated',
      '1 small onion, finely chopped',
      '2 tbsp vegetable oil',
      '2 tbsp plain flour',
      '2 tbsp chilli powder',
      '1 tsp ground cumin',
      '500 ml vegetable stock',
      '2 tbsp tomato puree',
      '1/2 tsp salt',
      '4 tbsp soured cream'
    ],
    st: [
      'Heat the oven to 200°C. Warm the oil, stir in the flour, chilli powder and cumin for 1 minute, then whisk in the stock and tomato puree and simmer for 10 minutes. Add the salt.',
      'Dip each tortilla in the sauce to soften. Fill with the cheese and onion, roll up and pack seam-side down in a dish.',
      'Pour over the rest of the sauce and scatter with the remaining cheese.',
      'Cook for 25 minutes until bubbling. Stand for 5 minutes and serve with the soured cream.'
    ],
    tips: [
      'Soften the tortillas in the sauce.',
      'Pack the rolls tightly.',
      'If your oven runs hot, check at 20 minutes.',
      'Rest before serving.'
    ],
    pair: ['Mexican rice', 'Refried beans', 'Green salad', 'Guacamole'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven.',
    nut: [505, 21, 31, 33, 5, 3, 1210]
  },

  'roti-with-chicken-curry': {
    d: 'Soft flatbreads served with a Caribbean-style chicken curry of potato, thyme, scotch bonnet and a roasted spice blend.',
    meta: 'Roti with chicken curry: soft flatbreads served with a Caribbean-style chicken and potato curry with thyme and a roasted spice blend. Four servings.',
    kw: ['roti with chicken curry', 'caribbean chicken curry roti', 'trinidad chicken curry', 'chicken curry with roti', 'caribbean curry with flatbread'],
    why: 'In Trinidad a roti is both the bread and the plate: a soft flatbread wrapped around curry and potato, eaten with the hands. The curry is milder than its Indian cousins and heady with thyme and garlic.\n\nThe flavour starts with a dry rub. Coat the chicken with curry powder, garlic and salt and leave it for 20 minutes. **Fry the curry powder in oil for a minute** before adding anything else, because raw powder tastes dusty and cooked powder tastes round.\n\nBrown the chicken, add the onion and thyme, then potatoes and enough water to come halfway up. Add a whole scotch bonnet, unpricked, for fruity warmth without too much heat.\n\nSimmer for 40 minutes, stirring now and then, until the potato is soft and the sauce thick. If your hob runs hot, check at 30 minutes. For the roti, knead flour, water and salt, rest, roll thin and cook on a hot dry pan.',
    ing: [
      '800 g chicken thighs, bone in',
      '3 tbsp Caribbean curry powder',
      '4 garlic cloves, grated',
      '1 tsp salt',
      '3 tbsp vegetable oil',
      '1 onion, chopped',
      '2 g thyme sprigs',
      '500 g potatoes, cubed',
      '1 whole scotch bonnet chilli',
      '600 ml water',
      '300 g plain flour',
      '170 ml water, for the dough'
    ],
    st: [
      'Rub the chicken with 2 tbsp of the curry powder, the garlic and half the salt and leave for 20 minutes.',
      'Heat the oil, fry the remaining curry powder for 1 minute, then brown the chicken. Add the onion, thyme, potatoes, scotch bonnet and 600 ml water.',
      'Simmer for 40 minutes until the potatoes are soft and the sauce is thick.',
      'Knead the flour, remaining salt and 170 ml water to a soft dough and rest for 10 minutes. Divide into 4, roll thin and cook on a hot dry pan for 1 minute per side. Serve with the curry.'
    ],
    tips: [
      'Fry the curry powder first.',
      'Leave the scotch bonnet whole.',
      'If your hob runs hot, check at 30 minutes.',
      'Rest the dough before rolling.'
    ],
    pair: ['Mango chutney', 'Cucumber slices', 'Pepper sauce', 'Fried plantain'],
    store: 'The curry keeps in the fridge for 3 days. Cook the roti fresh.',
    nut: [733, 51, 85, 21, 7, 3, 780]
  },

  'kebab-wraps': {
    d: 'Spiced beef and lamb mince shaped around skewers and grilled for 12 minutes, wrapped in flatbread with salad and garlic sauce.',
    meta: 'Kebab wraps: spiced beef and lamb mince grilled on skewers for 12 minutes, wrapped in flatbread with salad and garlic yoghurt. Four servings.',
    kw: ['kebab wraps', 'homemade kebab wraps', 'easy kebab wraps', 'lamb kebab wraps', 'kebab wraps with garlic sauce'],
    why: 'The takeaway wrap done at home is fresher and cheaper, and it is just spiced mince, a hot grill and a garlic sauce. It tastes better when you cook the meat so it chars at the edges.\n\nMix the mince with onion, garlic, cumin, coriander and paprika, and knead it for 2 minutes. **Kneading makes the mixture sticky enough to stay on the skewer.** Dampen your hands and mould it around flat skewers in long sausage shapes about 2 cm thick.\n\nChill for 15 minutes, which helps them hold together. Grill over high heat for 12 minutes, turning every 3 minutes, until browned all over and cooked through. If your grill runs hot, check at 9 minutes.\n\nFor the sauce, stir crushed garlic, lemon juice and salt into yoghurt. Warm the flatbreads, pull the meat off the skewers and fill with lettuce, tomato and red onion. Pour the garlic sauce over and roll tightly.',
    ing: [
      '350 g beef mince',
      '350 g lamb mince',
      '1 small onion, grated',
      '4 garlic cloves, grated',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp paprika',
      '1 tsp salt',
      '4 flatbreads',
      '150 g plain yoghurt',
      '1 lemon, juiced',
      '2 tomatoes, sliced',
      '1/2 red onion, sliced',
      '4 lettuce leaves'
    ],
    st: [
      'Mix the beef, lamb, onion, half the garlic, cumin, coriander, paprika and half the salt and knead for 2 minutes. Mould around 4 flat skewers and chill for 15 minutes.',
      'Heat the grill to high and cook the kebabs for 12 minutes, turning every 3 minutes.',
      'Stir the yoghurt, remaining garlic, lemon juice and remaining salt.',
      'Warm the flatbreads, fill with the meat, lettuce, tomato and onion, pour over the sauce and roll up.'
    ],
    tips: [
      'Knead the mince until sticky.',
      'Chill the shaped kebabs.',
      'If your grill runs hot, check at 9 minutes.',
      'Warm the flatbreads before filling.'
    ],
    pair: ['Chips', 'Pickled chillies', 'Hummus', 'Tabbouleh'],
    store: 'Keeps in the fridge for 3 days. Reheat the meat in a hot pan.',
    nut: [662, 43, 46, 34, 4, 6, 1080]
  },

  'chorizo-and-potatoes': {
    d: 'Small potatoes and sliced chorizo roasted together for 25 minutes with paprika, garlic and thyme until the potatoes are crisp and orange.',
    meta: 'Chorizo and potatoes: small potatoes and sliced chorizo roasted together with paprika, garlic and thyme until crisp and orange. Four servings.',
    kw: ['chorizo and potatoes', 'spanish chorizo and potatoes', 'roasted chorizo potatoes', 'easy chorizo and potatoes', 'chorizo potato traybake'],
    why: 'Chorizo does two jobs here: it adds salt and smoke, and it releases a bright orange fat that cooks the potatoes. It is a tray of very few ingredients that tastes like a lot more.\n\nParboil the potatoes for 8 minutes first. This cooks the inside, so the oven only has to crisp the outside, and shaking the drained pan roughens the edges, which then catch and crisp. **Roughed-up edges are the secret.**\n\nToss the potatoes in the oil, paprika and garlic and roast on a large tray at 220°C. Add the chorizo after 10 minutes, since cured sausage burns if it goes in too early, and roast for 15 minutes more, turning once. If your oven runs hot, check at 20 minutes.\n\nThe potatoes should be golden and the chorizo darkened at the edges. Scatter with parsley and serve with a lemon wedge to cut through the rich fat.',
    ing: [
      '800 g small waxy potatoes, halved',
      '3 tbsp olive oil',
      '2 tsp smoked paprika',
      '3 garlic cloves, sliced',
      '200 g cooking chorizo, sliced',
      '2 g thyme sprigs',
      '1/2 tsp salt',
      '2 tbsp chopped parsley',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 220°C. Boil the potatoes for 8 minutes, drain and shake in the pan to roughen the edges.',
      'Toss the potatoes with the oil, paprika, garlic, thyme and salt on a large tray and roast for 10 minutes.',
      'Add the chorizo, turn everything and roast for 15 minutes more until golden.',
      'Scatter with the parsley and serve with the lemon.'
    ],
    tips: [
      'Rough up the parboiled potatoes.',
      'Add the chorizo partway through.',
      'If your oven runs hot, check at 20 minutes.',
      'Use a large tray so nothing steams.'
    ],
    pair: ['Fried egg', 'Green salad', 'Aioli', 'Roasted peppers'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the potatoes.',
    nut: [407, 11, 39, 23, 6, 3, 710]
  },

  'salmon-fish-cakes': {
    d: 'Flaked salmon mixed with mashed potato, dill and lemon, shaped into patties, breadcrumbed and fried for 12 minutes.',
    meta: 'Salmon fish cakes: flaked salmon mixed with mashed potato, dill and lemon, breadcrumbed and fried until golden. Four servings.',
    kw: ['salmon fish cakes', 'homemade salmon fish cakes', 'salmon and potato fish cakes', 'easy salmon fish cakes', 'british fish cakes'],
    why: 'Fish cakes have a bad name when they are mostly potato. These lean the other way: more salmon than mash, with enough potato to hold the mixture together and enough lemon and dill to make it taste fresh.\n\nPoach the salmon in simmering water for 8 minutes, until it flakes, then cool it. Overcooked fish turns chalky in the cakes. **Dry the potato**: after mashing, return it to the hot pan for a minute to steam off the moisture, because wet mash makes soft, hard-to-handle cakes.\n\nFold the flaked salmon, potato, dill, lemon zest and spring onion together gently, so some pieces stay whole. Shape into eight patties, coat in flour, egg and crumbs and chill for 20 minutes.\n\nFry in a little oil over medium heat for 6 minutes a side, until crisp and golden. If your pan runs hot, check at 4 minutes. Serve with tartare sauce and peas.',
    ing: [
      '400 g salmon fillet',
      '400 g potatoes, boiled and mashed',
      '3 tbsp chopped dill',
      '1 lemon, zest and juice',
      '3 spring onions, sliced',
      '1/2 tsp salt',
      '2 tbsp plain flour',
      '1 egg, beaten',
      '80 g breadcrumbs',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Poach the salmon in simmering water for 8 minutes, drain, cool and flake.',
      'Dry the mash in the hot pan for 1 minute. Fold in the salmon, dill, lemon zest and juice, spring onions and salt. Shape into 8 patties.',
      'Coat in the flour, egg and breadcrumbs and chill for 20 minutes.',
      'Heat the oil in a frying pan over medium heat and fry the cakes for 6 minutes per side until golden.'
    ],
    tips: [
      'Dry the mash.',
      'Fold gently to keep flakes.',
      'If your pan runs hot, check at 4 minutes.',
      'Chill before frying.'
    ],
    pair: ['Tartare sauce', 'Peas', 'Green salad', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven so the crumb crisps.',
    nut: [481, 27, 37, 25, 4, 3, 500]
  }
};
