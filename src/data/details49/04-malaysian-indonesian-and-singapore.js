'use strict';

/**
 * Volume forty-nine — East and South-East Asia, the Middle East and Central
 * Asia, fourth part.
 *
 * Twenty-five dishes: an Instant Pot congee, salted egg yolk chicken and
 * prawns, Singapore black pepper crab and chilli prawns, Malaysian roti john,
 * murtabak, nasi kandar, ayam percik, apam balik and onde-onde, Indonesian
 * rice dishes, rawon, gudeg, sate Padang, klepon, cendol, pisang goreng,
 * bubur ayam, mie ayam, siomay, perkedel and sambal matah, and a Yemeni
 * zhoug. Waits of an hour or more are declared as rest. Nutrition is
 * estimated by npm run calc.
 */

module.exports = {
  'instant-pot-chicken-congee': {
    d: 'Rice cooked to a thick, creamy porridge with chicken thighs, ginger and spring onion in a pressure cooker, finished with soy sauce and sesame oil.',
    meta: 'Instant Pot chicken congee: rice cooked to a thick porridge with chicken thighs, ginger and spring onion. Four servings, cooked in 35 minutes.',
    kw: ['instant pot chicken congee', 'chicken congee in the instant pot', 'chinese rice porridge with chicken', 'instant pot jook', 'instant pot congee recipe'],
    why: 'Congee is the comfort food of half of Asia, and the pressure cooker turns a two-hour simmer into a 20-minute job. The rice breaks down completely under pressure, giving a smooth, creamy porridge without the stirring a pan demands. A bowl is breakfast, a cure for a cold, or a plain supper.\n\nThe ratio is the point. One part rice to about eight parts water gives a thick, spoonable congee; less water makes a stodgy porridge, more makes a thin soup. Rinse the rice first and, for a silkier texture, rub it with a teaspoon of oil and a pinch of salt before it goes in. **Add the water first and the rice on top, and do not stir.** Rice at the base can trigger the burn warning.\n\nChicken thighs cook in the same pot, on the bone, with sliced ginger. After 20 minutes, lift them out, shred the meat and return it to the pot. The congee will have thickened further as it rests.\n\nSeason at the end with soy sauce and white pepper, and add toppings: spring onion, fried shallots, a drizzle of sesame oil, a soft egg or crisp youtiao. Every bowl is slightly different.',
    ing: [
      '150 g jasmine rice, rinsed',
      '1 tsp vegetable oil',
      '1.4 litres water',
      '500 g chicken thighs on the bone',
      '5 cm piece fresh ginger, sliced',
      '1 tsp salt',
      '2 tbsp soy sauce',
      '1/2 tsp white pepper',
      '1 tsp sesame oil',
      '3 spring onions, sliced',
      '2 tbsp fried shallots'
    ],
    st: [
      'Toss the rice with the oil and a pinch of the salt. Pour the water into the pot, then add the rice, chicken, ginger and the rest of the salt. Do not stir.',
      'Lock the lid and cook at high pressure for 20 minutes. Release naturally for 15 minutes.',
      'Lift out the chicken, remove the skin and bones and shred the meat. Stir the congee well, adding hot water if too thick.',
      'Return the chicken, stir in the soy sauce and white pepper and serve topped with the sesame oil, spring onions and fried shallots.'
    ],
    tips: [
      'Add hot water to adjust the thickness.',
      'Use natural release for the creamiest result.',
      'Top with a soft-boiled egg for a more filling bowl.'
    ],
    pair: ['Soy-pickled egg', 'Youtiao', 'Pickled vegetables', 'Chilli oil'],
    store: 'Keeps in the fridge for 3 days. It thickens; add water when reheating.',
    nut: [328, 29, 35, 8, 1, 1, 1150]
  },

  'salted-egg-yolk-chicken': {
    d: 'Crisp chicken pieces tossed in a foaming butter sauce made from mashed salted egg yolks, curry leaves and chilli.',
    meta: 'Salted egg yolk chicken: crisp chicken pieces tossed in a foaming butter sauce of salted egg yolks, curry leaves and chilli. Four servings, cooked for 20 minutes.',
    kw: ['salted egg yolk chicken', 'salted egg chicken', 'salted egg yolk chicken recipe', 'malaysian salted egg chicken', 'crispy salted egg chicken'],
    why: 'The sauce should foam. That is how you know it is right. Salted egg yolks are cured and cooked, so when they meet hot butter they melt into a fine, sandy froth that coats the chicken in a pale gold crust. The flavour is rich, salty and nutty, with a hint of sweetness from the yolk.\n\nBuy cooked salted duck eggs, sold in Asian shops, or cure and steam your own. Use only the yolks, which are firm and orange. Steam them for 5 minutes, then mash to a fine paste with a fork. **Do not stir the yolk mixture hard in the pan.** Whisking it breaks the foam; let it bubble and swirl the pan instead.\n\nThe chicken is cut small, marinated for 15 minutes in rice wine, soy and white pepper, coated in cornflour and fried in oil at 180°C for 4 minutes per batch, until crisp and golden. Drain well.\n\nIn a clean pan, melt the butter, fry curry leaves and chopped chillies until crackling, add the mashed yolks, and stir for 30 seconds until bubbling and foamy. Tip in the chicken, toss for 30 seconds, and serve at once, before it softens.',
    ing: [
      '600 g boneless chicken thighs, cut into 3 cm pieces',
      '1 tbsp Shaoxing wine',
      '1 tbsp soy sauce',
      '1/2 tsp white pepper',
      '5 tbsp cornflour',
      '200 ml vegetable oil, for frying',
      '60 g salted egg yolks (about 4), steamed and mashed',
      '40 g butter',
      '2 sprigs curry leaves',
      '2 red chillies, chopped',
      '1 tsp sugar'
    ],
    st: [
      'Mix the chicken with the wine, soy sauce and white pepper and leave for 15 minutes. Coat with the cornflour.',
      'Heat the oil to 180°C. Fry the chicken in 2 batches for 4 minutes each, until crisp and golden. Drain on kitchen paper.',
      'Pour off all but a film of oil. Melt the butter over a medium heat and cook the curry leaves and chillies for 30 seconds.',
      'Add the mashed yolks and sugar and stir for 30 seconds until the mixture bubbles and foams.',
      'Add the chicken and toss for 30 seconds to coat. Serve at once.'
    ],
    tips: [
      'Mash the yolks very fine for a smooth sauce.',
      'Keep the heat medium so the butter does not brown.',
      'Serve immediately; the coating softens quickly.'
    ],
    pair: ['Steamed rice', 'Stir-fried greens', 'Cucumber salad', 'Chilli sauce'],
    store: 'Best eaten straight away.',
    nut: [730, 32, 11, 62, 0, 1, 380]
  },

  'salted-egg-prawns': {
    d: 'Prawns in a light crisp coating tossed in a foaming sauce of salted egg yolk, butter, chilli and curry leaves.',
    meta: 'Salted egg prawns: prawns in a light crisp coating tossed in a foaming salted egg yolk and butter sauce. Four servings, cooked for 10 minutes.',
    kw: ['salted egg prawns', 'salted egg yolk prawns', 'salted egg prawns recipe', 'golden sand prawns', 'singapore salted egg prawns'],
    why: 'Prawns with their shells on stay juicy, and the shell crisps into something you can eat whole. This is the Singapore and Malaysian way: large prawns, cut along the back and cooked with the shells intact, then tossed in a sandy golden coating. If you prefer to peel them, leave the tails on for a handhold.\n\nSnip along the back of each prawn with kitchen scissors, take out the dark thread, and pat completely dry. **Dry prawns crisp; wet ones spit.** Dust them lightly in cornflour and fry in hot oil, 170°C, for 2 minutes in two batches, until the shells are bright orange and slightly curled. Drain.\n\nThe sauce is the same as for salted egg chicken, built on the mashed cooked yolks. Melt butter in a clean pan, add curry leaves and a sliced chilli, cook until the leaves crackle, then tip in the yolks and stir. It froths up and turns into a thick, grainy sauce that clings.\n\nThe prawns go in for 20 seconds only. Longer than that and they toughen in the pan. Serve with rice and a squeeze of lime, and expect to lick your fingers.',
    ing: [
      '500 g raw king prawns, shell on, back slit and deveined',
      '3 tbsp cornflour',
      '200 ml vegetable oil, for frying',
      '60 g salted egg yolks (about 4), steamed and mashed',
      '40 g butter',
      '2 sprigs curry leaves',
      '2 red chillies, sliced',
      '1 tsp sugar',
      '1 lime, cut into wedges'
    ],
    st: [
      'Pat the prawns completely dry and dust with the cornflour.',
      'Heat the oil to 170°C. Fry the prawns in 2 batches for 2 minutes each, until bright orange. Drain.',
      'Pour off all but a film of oil. Melt the butter and cook the curry leaves and chillies for 30 seconds.',
      'Add the mashed yolks and sugar and stir until foaming, about 30 seconds.',
      'Add the prawns, toss for 20 seconds and serve with the lime.'
    ],
    tips: [
      'Keep the prawn shells on for flavour.',
      'Dry the prawns thoroughly.',
      'Serve with finger bowls and napkins.'
    ],
    pair: ['Steamed rice', 'Stir-fried greens', 'Lime wedges', 'Cold beer'],
    store: 'Best eaten straight away.',
    nut: [644, 27, 8, 56, 0, 2, 210]
  },

  'black-pepper-crab': {
    d: 'Crab pieces stir-fried in a sticky butter sauce with a heavy hand of coarsely cracked black pepper, garlic and oyster sauce.',
    meta: 'Black pepper crab: crab pieces stir-fried in butter with cracked black pepper, garlic and oyster sauce. Four servings, cooked for 20 minutes.',
    kw: ['black pepper crab', 'singapore black pepper crab', 'black pepper crab recipe', 'crab with black pepper sauce', 'black pepper crab stir fry'],
    why: 'Crack the pepper yourself, coarsely, just before cooking. Pre-ground pepper from a tin is dust, and the sharp, floral heat of freshly cracked black pepper is exactly what this dish is built on. Use a mortar, or the flat of a knife, and aim for pieces the size of a sesame seed.\n\nThe crab matters, but the method suits many. Mud crab is the Singapore choice. In the UK, brown crab or large swimmer crabs work, and the Atlantic and Dungeness crabs of North America and Canada are good too. Ask the fishmonger to kill, clean and cut the crab into pieces, cracking the claws. **Dust the cut surfaces with cornflour.** It seals the flesh and thickens the sauce.\n\nStir-fry the crab pieces in hot oil for 4 minutes until the shells turn red. Remove. In the same wok, melt the butter, cook garlic and shallots, then the pepper for 30 seconds until it smells strong. Add oyster sauce, soy sauce and sugar with a splash of water.\n\nReturn the crab to the wok, cover, and cook for 8 minutes, shaking the pan. The sauce reduces and clings. Eat with your hands and a lot of napkins.',
    ing: [
      '1.2 kg raw crab, cleaned and cut into pieces, claws cracked',
      '3 tbsp cornflour',
      '3 tbsp vegetable oil',
      '50 g butter',
      '6 garlic cloves, finely chopped',
      '3 shallots, about 75 g, finely chopped',
      '2 tbsp black peppercorns, coarsely cracked',
      '2 tbsp oyster sauce',
      '1 tbsp soy sauce',
      '1 tbsp sugar',
      '100 ml water',
      '3 spring onions, cut into 4 cm lengths'
    ],
    st: [
      'Dust the crab pieces with the cornflour.',
      'Heat the oil in a large wok over a high heat. Stir-fry the crab for 4 minutes until the shells turn red. Remove.',
      'Lower the heat to medium. Melt the butter and cook the garlic and shallots for 2 minutes. Add the pepper and cook for 30 seconds.',
      'Add the oyster sauce, soy sauce, sugar and water and bring to a boil. Return the crab, cover and cook for 8 minutes, shaking the wok.',
      'Uncover, add the spring onions and cook for 2 minutes until the sauce clings.'
    ],
    tips: [
      'Crack the pepper just before cooking.',
      'Use a large wok or lidded casserole.',
      'Provide crab crackers and finger bowls.'
    ],
    pair: ['Steamed rice', 'Fried mantou buns', 'Lime wedges', 'Cold lager'],
    store: 'Best eaten straight away.',
    nut: [508, 56, 17, 24, 2, 5, 1320]
  },

  'singapore-chilli-prawns': {
    d: 'Prawns in a glossy sweet and hot tomato chilli sauce with ginger, garlic and ribbons of egg, a quick take on chilli crab.',
    meta: 'Singapore chilli prawns: prawns in a glossy sweet and hot tomato chilli sauce with ginger, garlic and egg ribbons. Four servings, cooked for 12 minutes.',
    kw: ['singapore chilli prawns', 'chilli prawns singapore style', 'singapore chilli prawns recipe', 'prawns in chilli crab sauce', 'sweet chilli tomato prawns'],
    why: 'The sauce is what people actually love about chilli crab, and the crab is just the vehicle. This version keeps the sauce and swaps the crab for prawns, which cook in 5 minutes and need no cracking. It is a reliable weeknight dish with a party feel.\n\nThe sauce is tomato-based: tomato ketchup, chilli sauce, a spoonful of sugar, rice vinegar, soy sauce and water, cooked with fried garlic, ginger and fresh red chilli. It should be glossy, sweet, sour and hot in that order. **Taste it before the egg goes in.** Once the egg is stirred in, adjustments are harder.\n\nA beaten egg is the traditional finish. Pour it slowly into the simmering sauce while stirring in one direction, and it sets into soft ribbons that give the sauce body and a silky look. Do this on a medium heat. A hard boil makes the egg rubbery.\n\nPrawns go in at the end for 3 or 4 minutes only. Keep the shells on for flavour or peel them and leave the tails. Serve with steamed rice or fried mantou buns, and a stack of napkins.',
    ing: [
      '3 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '1 tbsp fresh ginger, finely chopped',
      '2 red chillies, finely chopped',
      '4 tbsp tomato ketchup',
      '2 tbsp chilli sauce',
      '1 tbsp sugar',
      '1 tbsp rice vinegar',
      '1 tbsp soy sauce',
      '150 ml water',
      '1 tsp cornflour mixed with 1 tbsp cold water',
      '600 g raw king prawns, shell on, back slit',
      '1 egg, beaten',
      '3 spring onions, sliced'
    ],
    st: [
      'Heat the oil in a wok over a medium heat. Cook the garlic, ginger and chillies for 1 minute.',
      'Add the ketchup, chilli sauce, sugar, vinegar, soy sauce and water. Simmer for 3 minutes. Stir in the cornflour mixture.',
      'Add the prawns and cook for 4 minutes, turning, until pink.',
      'Lower the heat, pour in the egg in a thin stream, stirring gently until it forms ribbons. Scatter with the spring onions.'
    ],
    tips: [
      'Use less chilli sauce for a milder dish.',
      'Pour the egg slowly.',
      'Serve at once with plenty of rice.'
    ],
    pair: ['Steamed rice', 'Fried mantou', 'Stir-fried greens', 'Lime'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [284, 33, 11, 12, 1, 7, 600]
  },

  'roti-john': {
    d: 'A baguette split lengthways and cooked on a hot griddle with a layer of spiced egg, onion and minced meat, served with chilli and mayonnaise.',
    meta: 'Roti john: a split baguette griddled with a layer of spiced egg, onion and minced meat, with chilli and mayonnaise. Two servings, cooked in 10 minutes.',
    kw: ['roti john', 'roti john recipe', 'malaysian roti john', 'singapore roti john', 'egg and minced meat baguette sandwich'],
    why: 'A hawker favourite and a sandwich with a name that nobody can fully explain, roti john is bread cooked in the egg that goes inside it. A baguette is split lengthways, the cut sides pressed into a pan of beaten egg, minced meat and onion, and cooked until the egg sets into a golden layer on the bread.\n\nThe filling is simple: minced beef or lamb, chopped onion, a pinch of curry powder, salt and pepper, mixed into two beaten eggs. The mixture should be loose enough to pour. **Pour it into the pan before the bread goes in.** Spread it thin so it sets in 2 minutes and sticks firmly to the crumb.\n\nUse a long, soft baguette, cut into two 20 cm pieces and each split along one side. Lay the bread cut-side down in the egg, press it with a spatula, and cook for 3 minutes until the egg is set and the bread is toasted.\n\nFlip, so the egg side faces up, and drizzle with chilli sauce and mayonnaise. Cut into pieces and eat hot. Sliced cucumber and onion are the traditional sides.',
    ing: [
      '1 baguette, about 250 g, cut into 2 pieces and split open',
      '2 tbsp vegetable oil',
      '1/2 onion, about 80 g, finely chopped',
      '120 g minced beef',
      '1 tsp curry powder',
      '2 eggs, beaten',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper',
      '2 tbsp chilli sauce',
      '2 tbsp mayonnaise',
      '1/2 cucumber, sliced'
    ],
    st: [
      'Heat 1 tbsp of the oil in a frying pan. Cook the onion for 2 minutes, add the beef and curry powder and cook for 4 minutes until browned. Cool slightly and mix with the eggs, salt and pepper.',
      'Heat the remaining oil in a wide pan over a medium heat. Pour in half the egg mixture and spread it to the size of a baguette piece.',
      'Press a baguette piece, cut side down, onto the egg. Cook for 3 minutes until the egg is set. Flip, and repeat with the second piece.',
      'Serve with the chilli sauce and mayonnaise drizzled over, with the cucumber on the side.'
    ],
    tips: [
      'Cook the meat first so it is not raw in the middle.',
      'Press the bread firmly.',
      'Use a griddle plate if you have one.'
    ],
    pair: ['Sliced cucumber', 'Pickled onions', 'Iced tea', 'Extra chilli sauce'],
    store: 'Best eaten straight away.',
    nut: [773, 31, 79, 37, 5, 8, 1530]
  },

  'murtabak': {
    d: 'A thin, folded flatbread stuffed with spiced minced lamb, egg and onion and cooked on a griddle until crisp.',
    meta: 'Murtabak: a thin, folded flatbread stuffed with spiced minced lamb, egg and onion, cooked on a griddle. Four servings, cooked in 15 minutes.',
    kw: ['murtabak', 'murtabak recipe', 'malaysian murtabak', 'stuffed flatbread with minced lamb', 'martabak telur'],
    why: 'The dough is the stage that decides everything. A murtabak wrapper has to be stretched so thin that you can see the pattern of your table through it, and it can only be stretched if it has rested for long enough in oil. Flour, water, salt and a little oil are kneaded smooth, divided into balls, coated with oil and rested for an hour. **Do not skip the oil.** It prevents drying and makes the dough supple enough to stretch.\n\nThe filling is cooked first: minced lamb with onion, ginger, garlic, curry powder, turmeric, salt and a handful of coriander, cooked until dry. Mix in beaten eggs and a chopped spring onion. It should be thick enough to sit on the dough and not run off.\n\nOil the work surface and stretch one ball by hand into a square as thin as you can, about 30 cm across. Pour a quarter of the filling in the centre and fold the four sides over like an envelope. Slide onto a hot, oiled griddle.\n\nCook for 3 minutes on each side, pressing lightly, until crisp and golden. Cut into squares and serve with a curry sauce or pickled onions.',
    ing: [
      '# Dough',
      '300 g plain flour',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '180 ml water',
      '3 tbsp vegetable oil, for coating',
      '# Filling',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '1 tsp ginger and garlic paste',
      '250 g minced lamb',
      '2 tsp curry powder',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '2 tbsp chopped fresh coriander',
      '4 eggs, beaten',
      '2 spring onions, sliced',
      '3 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Knead the flour, salt, 1 tbsp oil and water into a smooth dough. Divide into 4 balls, coat with the 3 tbsp oil, cover and rest for 1 hour.',
      'For the filling, heat the 2 tbsp oil and cook the onion and ginger and garlic paste for 4 minutes. Add the lamb, curry powder, turmeric and salt and cook for 8 minutes until dry. Cool slightly, then mix with the coriander, eggs and spring onions.',
      'Stretch each dough ball on an oiled surface into a very thin square about 30 cm across. Spoon a quarter of the filling in the centre and fold in the sides to make a square parcel.',
      'Cook each parcel on an oiled griddle over a medium heat for 3 minutes on each side, until crisp and golden. Cut into squares.'
    ],
    tips: [
      'Oil your hands and work surface well.',
      'Stretch the dough gently to avoid holes.',
      'Cool the filling before sealing the parcels.'
    ],
    pair: ['Curry sauce', 'Pickled onions', 'Sliced cucumber', 'Teh tarik'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and reheats in a pan.',
    nut: [789, 25, 62, 49, 4, 2, 700],
    rest: [60, 'Resting the dough']
  },

  'nasi-kandar': {
    d: 'Steamed rice served with a spiced chicken curry, a mild vegetable curry and okra, the Penang way, with curry sauces poured over the rice.',
    meta: 'Nasi kandar: steamed rice with a spiced chicken curry, a mild vegetable curry and okra, with the curry sauces poured over. Four servings, cooked for 45 minutes.',
    kw: ['nasi kandar', 'penang nasi kandar', 'nasi kandar recipe', 'malaysian rice with curries', 'nasi kandar curry sauce'],
    why: 'It is a plate of rice with a lot of sauce on it, and that is how the dish is judged. Nasi kandar comes from Penang, where it began as a street meal sold from baskets carried on a shoulder pole. The rice is the base, and the toppings are whatever the cook has made that day: curried chicken, fish roe, squid, okra, aubergine, boiled eggs.\n\nThe key is the kuah campur, the mixed curry sauce. Two or three curries are ladled over the rice together, and they run into each other, so the sauces combine on the plate. For a home version, make one rich chicken curry, and a lighter vegetable curry, and pour a ladleful of each. **Do not drain the rice of its sauces.** It should be properly wet and a little messy.\n\nThe chicken curry is made with a spice paste of shallots, garlic, ginger and chilli, fried with curry powder and star anise, then simmered with coconut milk and tamarind. The vegetable curry uses the same base but more water and okra and aubergine in place of the chicken.\n\nServe the rice on a plate, with the chicken to one side, the okra on top and sauce poured generously over everything.',
    ing: [
      '# Chicken curry',
      '3 tbsp vegetable oil',
      '4 shallots, about 100 g, sliced',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tbsp meat curry powder, mixed with 3 tbsp water',
      '1 g star anise',
      '3 g cinnamon stick',
      '600 g chicken thighs on the bone, skinned',
      '2 tomatoes, about 200 g, chopped',
      '200 ml coconut milk',
      '300 ml water',
      '1 tbsp tamarind paste',
      '1 tsp salt',
      '1 tsp sugar',
      '# Okra and eggs',
      '200 g okra, trimmed',
      '2 eggs, boiled and halved',
      '# Rice',
      '300 g basmati rice',
      '500 ml water'
    ],
    st: [
      'Cook the rice with the water in a covered pan for 15 minutes. Rest for 10 minutes.',
      'Heat the oil, cook the shallots, garlic and ginger for 5 minutes. Add the curry powder paste, star anise and cinnamon and cook for 3 minutes.',
      'Add the chicken and tomatoes, cook for 3 minutes. Add the coconut milk, water, tamarind, salt and sugar and simmer for 25 minutes.',
      'Add the okra for the last 8 minutes of cooking.',
      'Serve the rice with the chicken, okra and boiled eggs, and pour the curry sauce generously over everything.'
    ],
    tips: [
      'Make the sauce slightly thin so it runs into the rice.',
      'Add a second vegetable curry if you have time.',
      'Serve with papadams and sambal.'
    ],
    pair: ['Papadams', 'Sambal', 'Pickled vegetables', 'Teh tarik'],
    store: 'Keeps in the fridge for 3 days. Reheat the curry and cook the rice fresh.',
    nut: [745, 42, 79, 29, 6, 8, 780]
  },

  'nasi-kuning': {
    d: 'Turmeric and coconut rice cooked with lemongrass, pandan and bay leaves into a fragrant yellow mound, the centrepiece of Indonesian celebrations.',
    meta: 'Nasi kuning: turmeric and coconut rice cooked with lemongrass, pandan and bay leaves. Six servings, cooked for 35 minutes.',
    kw: ['nasi kuning', 'indonesian yellow rice', 'nasi kuning recipe', 'turmeric coconut rice indonesian', 'indonesian celebration rice'],
    why: 'At a birthday or a blessing in Indonesia, nasi kuning is moulded into a cone, a golden mountain topped with sliced omelette, fried shallots and chilli. The yellow colour stands for gratitude and good fortune, and the rice is eaten at the beginning of a celebration.\n\nThe flavour is built from coconut milk, fresh turmeric (or ground), lemongrass, pandan leaves and bay leaves, which flavour the rice as it cooks. Rinse the rice well, then soak it for 30 minutes before cooking. This helps the grains cook evenly and absorb the coconut milk without clumping. **Use the full measure of liquid, and use a thick coconut milk.** The grains swell and need the fat.\n\nBring the rice, coconut milk, water, turmeric, aromatics and salt to a boil, stir once, cover and cook on the lowest heat for 15 minutes. Then rest for 10 minutes without opening the lid. The rice should be soft, separate and a little glossy.\n\nTo serve in the traditional way, press the rice into a cone mould or a bowl and turn it out onto a plate, then decorate with strips of omelette, cucumber and fried shallots.',
    ing: [
      '400 g jasmine rice, rinsed and soaked for 30 minutes',
      '400 ml thick coconut milk',
      '300 ml water',
      '1 tsp ground turmeric',
      '2 stalks lemongrass, bruised',
      '3 g pandan leaf, tied in a knot',
      '2 bay leaves',
      '1 tsp salt',
      '2 eggs, beaten',
      '1 tbsp vegetable oil',
      '2 tbsp fried shallots',
      '1 cucumber, sliced'
    ],
    st: [
      'Drain the rice. Put it in a pan with the coconut milk, water, turmeric, lemongrass, pandan, bay leaves and salt. Bring to a boil, stir once, cover and cook on the lowest heat for 15 minutes.',
      'Rest, covered, for 10 minutes. Remove the aromatics and fluff with a fork.',
      'Heat the oil and make a thin omelette with the eggs. Roll up and slice into ribbons.',
      'Press the rice into a bowl, turn out onto a plate and decorate with the omelette, shallots and cucumber.'
    ],
    tips: [
      'Use thick coconut milk for a richer result.',
      'Do not lift the lid while cooking.',
      'Fresh turmeric gives a more fragrant rice.'
    ],
    pair: ['Fried chicken', 'Sambal', 'Fried tempeh', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [428, 9, 62, 16, 2, 3, 430]
  },

  'nasi-uduk': {
    d: 'Coconut rice cooked with lemongrass, galangal and bay leaves, a Jakarta breakfast served with fried shallots, egg and sambal.',
    meta: 'Nasi uduk: coconut rice cooked with lemongrass, galangal and bay leaves, served with fried shallots, egg and sambal. Four servings, cooked for 30 minutes.',
    kw: ['nasi uduk', 'nasi uduk recipe', 'indonesian coconut rice', 'betawi nasi uduk', 'jakarta coconut rice breakfast'],
    why: 'Early in the morning in Jakarta, a street cook ladles steaming coconut rice into a paper cone and tops it with fried shallots, a spoonful of sambal and whatever else is going. Nasi uduk is the capital\'s breakfast, plainer than nasi kuning and made every day.\n\nThe rice is cooked in coconut milk with aromatics: lemongrass bruised along its length, a slice of galangal, a couple of bay leaves and a pinch of salt. No turmeric. The colour is cream and the flavour gentle. **Rinse the rice three times and drain it well.** Excess water thins the coconut milk and the rice turns sticky rather than fluffy.\n\nThe method is absorption: rice and coconut milk in a pan, brought to the boil, stirred once, then covered and cooked on the lowest heat for 15 minutes. Rest, then fluff gently. The best nasi uduk is slightly oily and perfumed, with grains that fall apart on the spoon.\n\nServe with fried shallots, a fried egg, a spoonful of sambal and some sliced cucumber. In Jakarta, fried tempeh, anchovies and peanuts join the plate.',
    ing: [
      '300 g jasmine rice, rinsed',
      '250 ml coconut milk',
      '250 ml water',
      '2 stalks lemongrass, bruised',
      '3 slices galangal',
      '2 bay leaves',
      '1/2 tsp salt',
      '2 tbsp fried shallots',
      '2 eggs',
      '1 tbsp vegetable oil',
      '2 tbsp sambal',
      '1/2 cucumber, sliced'
    ],
    st: [
      'Put the rice, coconut milk, water, lemongrass, galangal, bay leaves and salt in a pan. Bring to a boil, stir once, cover and cook on the lowest heat for 15 minutes.',
      'Rest for 10 minutes without lifting the lid. Remove the aromatics and fluff with a fork.',
      'Heat the oil in a small pan and cook the eggs sunny-side up.',
      'Serve the rice topped with the egg, shallots, sambal and cucumber.'
    ],
    tips: [
      'Use full-fat coconut milk.',
      'Keep the heat low once covered.',
      'Add fried anchovies for a traditional touch.'
    ],
    pair: ['Fried tempeh', 'Fried anchovies and peanuts', 'Sambal', 'Sweet soy sauce'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [502, 11, 74, 18, 2, 3, 460]
  },

  'indonesian-rawon': {
    d: 'A dark East Javanese beef soup coloured and flavoured with black keluak nuts and a paste of shallots, garlic, turmeric and lemongrass.',
    meta: 'Indonesian rawon: a dark East Javanese beef soup flavoured with keluak and a paste of shallots, garlic, turmeric and lemongrass. Six servings, cooked for 2 hours.',
    kw: ['rawon', 'indonesian rawon', 'rawon recipe', 'east javanese black beef soup', 'rawon with keluak'],
    why: 'It looks nearly black, which surprises everyone who sees it for the first time, and the colour has a name: keluak. Rawon is an East Javanese soup flavoured with the nut of the kepayang tree, which is black, earthy and faintly sweet once the poison is leached out. It is sold ready-prepared in jars and cans in Asian shops, and its flavour has no equal.\n\nIf you cannot find keluak, a substitute works well enough: roasted black sesame seeds ground with a spoonful of dark soy and a few cloves. It is not the same, but it gets close to the right colour and a similar, toasty bitterness. **Grind it into the spice paste so it dissolves into the broth.**\n\nThe paste is shallots, garlic, ginger, turmeric, candlenuts (or macadamias), coriander seeds and keluak, fried in oil until the oil darkens and smells nutty. Add lemongrass, galangal, lime leaves and bay leaves and the beef, in 4 cm cubes. Beef shin or brisket is best.\n\nSimmer for 90 minutes, until the beef is soft. Serve with rice, bean sprouts, salted duck egg, sambal and krupuk, and squeeze over lime.',
    ing: [
      '800 g beef shin, cut into 4 cm cubes',
      '2 litres water',
      '2 tbsp vegetable oil',
      '8 shallots, about 200 g',
      '6 garlic cloves',
      '2 cm piece fresh ginger',
      '1 tsp ground turmeric',
      '4 candlenuts or macadamia nuts, about 20 g',
      '1 tbsp coriander seeds, toasted',
      '2 tbsp keluak paste or 2 tbsp ground black sesame seeds with 1 tbsp dark soy sauce',
      '2 stalks lemongrass, bruised',
      '3 slices galangal',
      '4 kaffir lime leaves',
      '2 bay leaves',
      '2 tsp salt',
      '150 g bean sprouts',
      '2 limes, cut into wedges'
    ],
    st: [
      'Put the beef and water in a large pot, bring to a boil, skim, and simmer for 30 minutes.',
      'Blend the shallots, garlic, ginger, turmeric, candlenuts, coriander seeds and keluak with a splash of water to a paste. Fry in the oil for 8 minutes until the oil darkens.',
      'Add the paste to the pot with the lemongrass, galangal, lime leaves, bay leaves and salt. Simmer gently for 90 minutes until the beef is tender.',
      'Serve with the bean sprouts, rice, lime wedges and sambal.'
    ],
    tips: [
      'Fry the paste thoroughly; raw paste tastes harsh.',
      'Skim the surface early for a clean broth.',
      'The soup is better the next day.'
    ],
    pair: ['Steamed rice', 'Salted duck egg', 'Sambal', 'Prawn crackers'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [430, 29, 20, 26, 4, 5, 880]
  },

  'indonesian-gudeg': {
    d: 'Young jackfruit stewed for hours in coconut milk, palm sugar and spices until sweet, soft and golden-brown, a Yogyakarta speciality.',
    meta: 'Indonesian gudeg: young jackfruit stewed in coconut milk, palm sugar and spices until sweet, soft and golden-brown. Six servings, cooked for 2 and a half hours.',
    kw: ['gudeg', 'indonesian gudeg', 'gudeg jogja', 'young jackfruit stew indonesian', 'gudeg recipe'],
    why: 'Sweet is the surprise. A plate of gudeg is not a spicy Indonesian dish but a sweet and savoury one, brown with palm sugar and soy sauce, soft with coconut milk and long cooking. It comes from Yogyakarta, and one portion arrives with rice, a boiled egg, chicken and a fiery sambal krecek that keeps the sweetness in check.\n\nThe base is young jackfruit, sold in tins (in brine, not syrup) in Asian shops. Drain it, rinse it well, and squeeze it out. The pieces take up flavour like a sponge. Without bay leaves, galangal, shallots, garlic and coriander the dish would be sweet and nothing else. **Add teak leaves if you can find them.** They give the traditional colour; strong black tea is a practical substitute.\n\nThe jackfruit simmers in coconut milk and water with the aromatics, palm sugar and a little salt. The chicken thighs and eggs join it after an hour. Cook gently with the lid ajar for 2 hours, stirring only occasionally. The liquid reduces and the jackfruit turns a dark, glossy brown.\n\nServe with the rice, chicken, egg, a spoon of the thick cooking sauce and a little sambal.',
    ing: [
      '800 g young green jackfruit in brine, drained and rinsed',
      '1 litre coconut milk',
      '300 ml water',
      '2 tbsp strong black tea',
      '8 shallots, about 200 g, sliced',
      '6 garlic cloves, crushed',
      '1 tbsp coriander seeds, toasted and ground',
      '3 slices galangal',
      '4 bay leaves',
      '80 g palm sugar or dark brown sugar',
      '2 tbsp dark soy sauce',
      '2 tsp salt',
      '500 g chicken thighs on the bone',
      '4 eggs, boiled and peeled'
    ],
    st: [
      'Put the jackfruit, coconut milk, water, tea, shallots, garlic, coriander, galangal, bay leaves, sugar, soy sauce and salt in a heavy pot.',
      'Bring to a simmer, then cook with the lid slightly open for 60 minutes, stirring occasionally.',
      'Add the chicken and eggs. Continue to simmer for 80 minutes, until the chicken is tender, the liquid has reduced and the jackfruit is dark brown and soft.',
      'Serve with rice, a spoon of the thick sauce and sambal.'
    ],
    tips: [
      'Rinse the canned jackfruit well to remove the brine.',
      'Stir gently to keep the jackfruit pieces whole.',
      'Serve with something hot and sour to balance the sweetness.'
    ],
    pair: ['Steamed rice', 'Sambal krecek', 'Fried tofu', 'Boiled egg'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [568, 28, 33, 36, 4, 20, 1500]
  },

  'sate-padang': {
    d: 'Sliced beef simmered in spices, threaded on skewers and grilled, served with a thick, hot sauce thickened with rice flour and spiced with turmeric and chilli.',
    meta: 'Sate Padang: sliced beef simmered in spices, grilled on skewers, served with a thick turmeric and chilli sauce. Four servings, cooked for 90 minutes.',
    kw: ['sate padang', 'sate padang recipe', 'padang beef satay', 'beef satay with yellow sauce', 'west sumatran beef satay'],
    why: 'The sauce is not peanut. That is the first thing people notice about sate Padang, which comes from West Sumatra and uses a thick, yellow-brown, spicy gravy where Javanese satay uses nuts. The sauce is made from the beef cooking stock, thickened with rice flour and spiced with turmeric, ginger, galangal and chilli. It has a rich, savoury flavour and an orange sheen from the oil.\n\nThe beef is cooked first, then grilled. Beef topside or flank is simmered in water with lemongrass, galangal, bay leaves and salt for 60 minutes, until it is tender. Keep the stock. **Cool the beef before slicing.** Warm beef shreds; cold beef cuts into clean 2 cm cubes that thread easily.\n\nThe sauce is made from a paste of shallots, garlic, ginger, turmeric, coriander seeds and chilli, fried in oil, then simmered with the beef stock and thickened with a rice flour slurry for 15 minutes, stirring all the time.\n\nThread the beef on skewers, brush with oil and grill for 5 minutes, until charred at the edges. Pour the hot sauce over the skewers and serve with rice cakes or steamed rice.',
    ing: [
      '# Beef',
      '700 g beef topside or flank',
      '1.2 litres water',
      '2 stalks lemongrass, bruised',
      '3 slices galangal',
      '2 bay leaves',
      '1 tsp salt',
      '# Sauce',
      '3 tbsp vegetable oil',
      '8 shallots, about 200 g',
      '5 garlic cloves',
      '2 cm piece fresh ginger',
      '1 tsp ground turmeric',
      '1 tbsp coriander seeds, toasted',
      '4 red chillies',
      '500 ml beef stock from the beef',
      '3 tbsp rice flour mixed with 100 ml cold water',
      '1 tsp salt',
      '1 tbsp vegetable oil, for brushing'
    ],
    st: [
      'Simmer the beef in the water with the lemongrass, galangal, bay leaves and first measure of salt for 60 minutes. Lift out, cool, and cut into 2 cm cubes. Keep 500 ml of the stock.',
      'Blend the shallots, garlic, ginger, turmeric, coriander seeds and chillies to a paste. Fry in the 3 tbsp oil for 8 minutes.',
      'Add the stock and simmer for 10 minutes. Stir in the rice flour mixture and the second measure of salt and cook for 5 minutes until thick.',
      'Thread the beef on skewers, brush with oil and grill for 5 minutes, turning, until charred. Pour the hot sauce over.'
    ],
    tips: [
      'Stir the sauce all the time when thickening.',
      'Use a hot grill or griddle for the skewers.',
      'Serve at once while the sauce is hot.'
    ],
    pair: ['Rice cakes (lontong)', 'Steamed rice', 'Fried shallots', 'Cucumber'],
    store: 'Keeps in the fridge for 2 days. Reheat the sauce gently.',
    nut: [451, 40, 21, 23, 3, 5, 1710]
  },

  'indonesian-klepon': {
    d: 'Small green glutinous rice dumplings filled with melted palm sugar, boiled and rolled in fresh grated coconut.',
    meta: 'Indonesian klepon: small green glutinous rice dumplings filled with melted palm sugar, boiled and rolled in fresh coconut. Makes about twenty, cooked in 15 minutes.',
    kw: ['klepon', 'indonesian klepon', 'klepon recipe', 'pandan glutinous rice balls with palm sugar', 'kuih ondeh-ondeh klepon'],
    why: 'Bite carefully. Klepon are small, bright green balls with a pocket of liquid palm sugar inside that bursts when you eat them, and the first-time eater always ends up with a sticky chin. The sensation, a chewy dumpling, a rush of caramel and a sweet, grassy pandan perfume, is why klepon sells out at every market in Java.\n\nThe dough is glutinous rice flour mixed with pandan juice and a little warm water. Pandan paste or extract works if you cannot find fresh leaves. Mix to a soft dough that does not stick to the fingers. **Add the water gradually.** The right texture is like earlobe: soft, smooth and a bit springy.\n\nBreak a small piece of dough, flatten it into a disc in your palm, put a small piece of palm sugar in the centre, and pinch it closed. Roll between your hands to make a smooth ball. If the seam is not sealed, the sugar will leak out in the water.\n\nDrop them into boiling water in batches. They sink first, then float after 3 minutes. Boil for 1 minute more, lift out with a slotted spoon, drain and roll in fresh grated coconut mixed with a pinch of salt. Eat the same day.',
    ing: [
      '200 g glutinous rice flour',
      '150 ml warm water',
      '1 tsp pandan extract or paste',
      '80 g palm sugar, chopped into small pieces',
      '100 g grated fresh coconut',
      '1/4 tsp salt'
    ],
    st: [
      'Mix the glutinous rice flour, water and pandan extract to a soft, smooth dough.',
      'Take a walnut-sized piece of dough, flatten it, add a piece of palm sugar and pinch closed. Roll into a smooth ball. Make about 20.',
      'Steam the coconut with the salt for 5 minutes and cool.',
      'Boil the balls in batches in simmering water for 3 minutes until they float, then boil for 1 minute more. Lift out, drain and roll in the coconut.'
    ],
    tips: [
      'Seal the dough well or the sugar will leak.',
      'Do not overcrowd the pot.',
      'Serve at room temperature on a banana leaf.'
    ],
    pair: ['Black tea', 'Fresh fruit', 'Coffee', 'Other kuih'],
    store: 'Best eaten the same day. Keeps for 1 day at room temperature.',
    nut: [70, 1, 12, 2, 1, 4, 30]
  },

  'cendol': {
    d: 'Green pandan rice flour jelly noodles served in a glass with coconut milk, palm sugar syrup and shaved ice.',
    meta: 'Cendol: green pandan rice flour jelly noodles in coconut milk and palm sugar syrup over shaved ice. Four servings, cooked for 20 minutes.',
    kw: ['cendol', 'cendol recipe', 'pandan cendol', 'cendol with coconut milk and palm sugar', 'iced cendol dessert'],
    why: 'Does the ice always melt before you finish it? In Southeast Asia, it does, and it does not matter. Cendol is a drink and a dessert at once, a tall glass of green jelly worms, coconut milk, dark syrup and crushed ice, eaten with a long spoon and a straw in the heat of the afternoon.\n\nThe jelly is made from rice flour, tapioca starch, pandan juice and water, cooked in a pan until it thickens into a sticky, translucent green paste. **Keep stirring from the moment it starts to thicken.** It sets fast and lumps if left. When glossy, it is pressed through a colander or ricer into a bowl of iced water, where it sets into short green strands.\n\nPandan juice is made by blitzing leaves with water and straining. If you cannot find fresh pandan, use paste or extract with a drop of green colouring.\n\nThe syrup is gula melaka (palm sugar) melted with water and a pandan leaf until thick. The coconut milk is thinned slightly and given a pinch of salt. Build the glass with cendol, ice, coconut milk and syrup, in that order, and serve at once.',
    ing: [
      '50 g rice flour',
      '2 tbsp tapioca starch',
      '300 ml pandan juice or water with 2 tsp pandan extract',
      '1 pinch salt',
      '100 g palm sugar, chopped',
      '100 ml water',
      '200 ml coconut milk',
      '1/4 tsp salt',
      '400 g crushed ice'
    ],
    st: [
      'Whisk the rice flour, tapioca starch, pandan juice and first pinch of salt until smooth. Cook over a medium heat, stirring constantly, for 6 minutes until thick and glossy.',
      'Press the hot mixture through a colander or potato ricer into a bowl of iced water. Leave for 5 minutes to set, then drain.',
      'Heat the palm sugar and water until dissolved and syrupy, about 5 minutes. Cool.',
      'Mix the coconut milk with the 1/4 tsp salt.',
      'Divide the cendol and ice between 4 glasses, pour over the coconut milk and drizzle with the palm sugar syrup.'
    ],
    tips: [
      'Stir the jelly all the time as it cooks.',
      'Use ice-cold water to set the strands.',
      'Add red beans or sweetcorn for extra texture.'
    ],
    pair: ['Red beans', 'Sweetcorn', 'Fresh durian', 'Black glutinous rice'],
    store: 'Best made fresh. The cendol keeps in cold water in the fridge for 1 day.',
    nut: [249, 2, 40, 9, 0, 26, 190]
  },

  'pisang-goreng': {
    d: 'Ripe bananas coated in a light, crisp batter and cooked in hot oil until golden, eaten warm as a street snack.',
    meta: 'Pisang goreng: ripe bananas in a light, crisp batter cooked in hot oil until golden. Six servings, cooked in 10 minutes.',
    kw: ['pisang goreng', 'pisang goreng recipe', 'indonesian banana fritters', 'crispy banana fritters', 'malaysian pisang goreng'],
    why: 'Fry them in small batches and leave the oil alone: the two rules of banana fritters. Pisang goreng is sold from carts at the side of the road in the late afternoon, still hot from the pan, wrapped in paper. The coating is thin and crisp, and the banana inside has softened to a sweet, steaming pulp.\n\nThe bananas should be ripe but firm, with some black freckles on the skin. Plantains, called pisang raja or pisang kepok, are traditional and hold together best, but ordinary bananas also work if they are not over-ripe. Cut each in half lengthways, then crosswise. **Choose bananas that give when pressed but are not mushy.**\n\nThe batter is plain flour, rice flour, a pinch of sugar, salt, a little turmeric for colour and enough cold water to make a thick coating consistency. The rice flour makes it crisp. Dip each banana piece in the batter and let the excess run off.\n\nHeat the oil to 175°C. Fry for 3 to 4 minutes, turning once, until deep golden. Drain on kitchen paper and sprinkle with a little sugar or serve with palm sugar syrup.',
    ing: [
      '4 ripe but firm bananas, about 500 g',
      '80 g plain flour',
      '40 g rice flour',
      '2 tbsp sugar',
      '1/4 tsp salt',
      '1/4 tsp ground turmeric',
      '130 ml cold water',
      '200 ml vegetable oil, for frying',
      '1 tbsp icing sugar, to serve'
    ],
    st: [
      'Whisk the plain flour, rice flour, sugar, salt and turmeric with the water to a thick batter.',
      'Peel the bananas and cut each in half lengthways, then crosswise.',
      'Heat the oil to 175°C in a deep pan.',
      'Dip each banana piece in the batter and fry in 2 batches for 3 to 4 minutes, turning once, until deep golden.',
      'Drain on kitchen paper and dust with the icing sugar. Serve warm.'
    ],
    tips: [
      'Do not overcrowd the pan.',
      'Serve while still warm.',
      'Add a spoonful of grated coconut to the batter for extra flavour.'
    ],
    pair: ['Black tea', 'Palm sugar syrup', 'Vanilla ice cream', 'Coffee'],
    store: 'Best eaten warm. Keeps for 1 day and crisps up in a hot oven.',
    nut: [455, 3, 41, 31, 3, 17, 100]
  },

  'indonesian-bubur-ayam': {
    d: 'Rice porridge with a turmeric chicken broth, shredded chicken, fried soybeans, crullers, celery and spring onion, served with sweet soy sauce and sambal.',
    meta: 'Indonesian bubur ayam: rice porridge in a turmeric chicken broth with shredded chicken, crullers, celery and sweet soy sauce. Four servings, cooked for 45 minutes.',
    kw: ['bubur ayam', 'indonesian bubur ayam', 'bubur ayam recipe', 'indonesian chicken porridge', 'bubur ayam with turmeric broth'],
    why: 'The bowl is assembled from many parts, and the pleasure is in the mix. Bubur ayam is an Indonesian breakfast of smooth rice porridge, sold from a cart that arrives before work and sells out by nine. The chicken is shredded, the broth is yellow, and the toppings are strewn over the top: crisp crullers, fried shallots, celery leaf, spring onion, a spoonful of sambal.\n\nThe porridge is rice cooked until it breaks down. Rinse 200 g of rice, add 1.5 litres of chicken stock, a bay leaf, a lemongrass stalk and a piece of ginger, and simmer for 45 minutes, stirring often. It should reach the consistency of thick custard. **Stir the bottom of the pot often.** The starch settles and catches.\n\nThe chicken is poached whole in the same stock for 30 minutes, then shredded. The yellow gravy is made by frying a paste of shallot, garlic, turmeric and candlenuts, then thinning it with the stock.\n\nTo assemble: a ladleful of porridge in a bowl, a handful of chicken on top, a spoonful of yellow sauce, and the toppings. Add sweet soy sauce and sambal at the table. Do not stir it until you are ready to eat.',
    ing: [
      '200 g jasmine rice, rinsed',
      '1.5 litres chicken stock',
      '2 bay leaves',
      '1 stalk lemongrass, bruised',
      '2 cm piece fresh ginger, sliced',
      '500 g chicken thighs on the bone',
      '1 tsp salt',
      '# Yellow gravy',
      '2 tbsp vegetable oil',
      '4 shallots, about 100 g',
      '3 garlic cloves',
      '1 tsp ground turmeric',
      '2 candlenuts or macadamia nuts, about 10 g',
      '200 ml stock from the pot',
      '# To serve',
      '2 tbsp fried shallots',
      '2 spring onions, sliced',
      '1 celery stick, finely sliced',
      '4 tbsp sweet soy sauce (kecap manis)',
      '4 tsp sambal'
    ],
    st: [
      'Put the rice, stock, bay leaves, lemongrass, ginger and chicken in a large pot. Bring to a boil, then simmer, stirring often, for 45 minutes until the rice is broken down and thick. Lift out the chicken, shred and discard the bones.',
      'Season the porridge with the salt.',
      'Blend the shallots, garlic, turmeric and candlenuts. Fry in the oil for 5 minutes. Add 200 ml of the stock and simmer for 5 minutes.',
      'Ladle the porridge into 4 bowls. Top with the chicken, spoon over the yellow gravy and scatter with the fried shallots, spring onions and celery.',
      'Serve with the sweet soy sauce and sambal.'
    ],
    tips: [
      'Stir the porridge often.',
      'Add boiled egg or crackers for a fuller bowl.',
      'Do not stir the bowl before you eat; eat from the side.'
    ],
    pair: ['Prawn crackers', 'Fried soybeans', 'Boiled egg', 'Iced tea'],
    store: 'Keeps in the fridge for 3 days. It thickens; add water when reheating.',
    nut: [512, 36, 56, 16, 3, 4, 3080]
  },

  'onde-onde': {
    d: 'Chewy glutinous rice and sweet potato balls filled with liquid palm sugar and rolled in sesame seeds, then cooked in hot oil until crisp.',
    meta: 'Onde-onde: chewy glutinous rice and sweet potato balls filled with palm sugar, rolled in sesame seeds and cooked in hot oil. Makes about twenty, cooked in 15 minutes.',
    kw: ['onde onde', 'onde-onde recipe', 'sesame palm sugar balls', 'glutinous rice sesame balls with palm sugar', 'malaysian onde onde'],
    why: 'Sweet potato in the dough is the clue to the texture: it makes the shell soft and moist inside, and it makes it easier to handle than glutinous rice flour alone. Onde-onde is a Malaysian and Indonesian snack, a ball rolled in sesame seeds with a pocket of palm sugar that melts as it cooks.\n\nBoil or steam the sweet potato until soft, mash it smooth, and mix it into the glutinous rice flour while still warm. Add a spoonful of water at a time until the dough is soft and not sticky. **Do not let the dough dry out.** Cover it with a cloth while you work.\n\nTake a lump the size of a walnut, flatten it in your palm, add a small piece of palm sugar and seal it carefully. Roll into a ball between your hands. Press the seam closed. If there is a gap, the sugar leaks into the oil and sprays.\n\nRoll in sesame seeds, pressing them in. Heat oil to 160°C, a little lower than for most frying. Cook for 5 minutes in small batches, turning, until golden and floating. Drain and eat warm, within the hour.',
    ing: [
      '200 g sweet potato, peeled and cut into chunks',
      '150 g glutinous rice flour',
      '3 tbsp water',
      '60 g palm sugar, chopped into small pieces',
      '4 tbsp sesame seeds',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Steam the sweet potato for 15 minutes until soft. Mash smooth.',
      'Mix the warm mash with the glutinous rice flour and water to a soft, smooth dough.',
      'Take walnut-sized pieces, flatten, add a piece of palm sugar and seal. Roll into smooth balls. Make about 20.',
      'Roll the balls in the sesame seeds, pressing them in.',
      'Heat the oil to 160°C. Cook the balls in 3 batches for 5 minutes each, turning, until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Seal the seam completely.',
      'Do not overcrowd the oil.',
      'Eat warm, as the sugar sets when cold.'
    ],
    pair: ['Black tea', 'Fresh fruit', 'Coffee', 'Kuih'],
    store: 'Best eaten warm on the day. Keeps for 1 day at room temperature.',
    nut: [183, 1, 11, 15, 1, 3, 10]
  },

  'apam-balik': {
    d: 'A thick, soft Malaysian pancake folded over crushed peanuts, sugar and sweetcorn, crisp on the edges and tender in the middle.',
    meta: 'Apam balik: a thick, soft Malaysian pancake folded over crushed peanuts, sugar and sweetcorn. Four servings, cooked in 20 minutes.',
    kw: ['apam balik', 'apam balik recipe', 'malaysian peanut pancake', 'martabak manis', 'turnover pancake with peanuts and sugar'],
    why: 'The pancake is cooked on one side only, and that is the point. A leavened batter goes into a pan with a lid on, and as it cooks, the underside turns crisp and golden while the top sets in a mass of tiny bubbles, giving a soft, honeycombed crumb. The filling is added while the surface is still wet and the pancake is folded in half.\n\nThe batter is flour, a little sugar, bicarbonate of soda, baking powder, an egg, coconut milk and water, left to rest for 15 minutes. The bicarbonate is the secret to the bubbles. **Cook over a low heat with the lid on.** High heat sets the top before it can bubble, and the pancake turns out flat and dense.\n\nPour in a ladle of batter to make a thick round, 18 cm across. Cover and cook for 3 to 4 minutes, until the surface is set and covered in holes. Spread with butter, scatter crushed roasted peanuts, a spoonful of sugar and a spoonful of sweetcorn, fold in half, and cut into wedges.\n\nEat it hot. The crisp edge and the soft, buttery middle are best in the first five minutes.',
    ing: [
      '200 g plain flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '1 egg',
      '100 ml coconut milk',
      '200 ml water',
      '30 g butter, plus extra for spreading',
      '4 tbsp roasted peanuts, crushed',
      '4 tbsp sugar',
      '4 tbsp tinned sweetcorn, drained'
    ],
    st: [
      'Whisk the flour, 2 tbsp sugar, baking powder, bicarbonate of soda and salt. Add the egg, coconut milk and water and whisk to a smooth batter. Rest for 15 minutes.',
      'Heat a lightly buttered non-stick pan over a low heat. Pour in a quarter of the batter, cover and cook for 3 to 4 minutes until the surface is set and covered in bubbles.',
      'Spread with butter, scatter with a quarter of the peanuts, sugar and sweetcorn, and fold in half.',
      'Cut into wedges and serve hot. Repeat with the remaining batter.'
    ],
    tips: [
      'Keep the heat low and the lid on.',
      'Do not flip the pancake.',
      'Add chocolate chips or grated cheese for variations.'
    ],
    pair: ['Hot tea', 'Coffee', 'Fresh fruit', 'Condensed milk'],
    store: 'Best eaten hot. Keeps for 1 day and reheats in a pan.',
    nut: [441, 10, 62, 17, 3, 20, 450]
  },

  'ayam-percik': {
    d: 'Chicken marinated in a coconut, lemongrass and chilli paste, grilled until charred, and basted with a rich coconut sauce.',
    meta: 'Ayam percik: chicken marinated in a coconut, lemongrass and chilli paste, grilled until charred and basted with coconut sauce. Four servings, cooked for 30 minutes.',
    kw: ['ayam percik', 'ayam percik recipe', 'kelantan ayam percik', 'malaysian grilled chicken with coconut sauce', 'percik chicken'],
    why: 'Smoke is the point, but an oven grill does a fair job. Ayam percik comes from Kelantan on the east coast of Malaysia, where chicken is grilled over coals and brushed with a spicy coconut sauce called percik. The sauce caramelises on the hot meat and coats it in a thick, glossy, red-gold layer.\n\nThe marinade and the sauce share a base. Blend shallots, garlic, ginger, lemongrass, fresh red chillies, turmeric and a little belacan to a paste. Rub half over the chicken and leave it for 30 minutes. Cook the rest in oil for 6 minutes until the oil separates, then add coconut milk, tamarind and sugar and simmer for 8 minutes until thick. **The sauce should coat the back of a spoon.**\n\nUse chicken thighs and drumsticks, which stay juicy, and slash them twice so the paste can get in. Grill at a high heat for 25 minutes, turning, and brush with the sauce from time to time. The edges blacken slightly.\n\nServe the chicken with the remaining sauce spooned over, and rice or lemang (glutinous rice in bamboo).',
    ing: [
      '8 shallots, about 200 g',
      '6 garlic cloves',
      '3 cm piece fresh ginger',
      '2 stalks lemongrass, white parts only',
      '4 red chillies',
      '1 tsp ground turmeric',
      '1 tsp belacan (shrimp paste), toasted',
      '1 kg chicken thighs and drumsticks on the bone, slashed',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '300 ml coconut milk',
      '1 tbsp tamarind paste',
      '1 tbsp sugar'
    ],
    st: [
      'Blend the shallots, garlic, ginger, lemongrass, chillies, turmeric and belacan to a paste. Rub half over the chicken with the salt and leave for 30 minutes.',
      'Heat the oil and cook the remaining paste for 6 minutes until the oil separates. Add the coconut milk, tamarind and sugar and simmer for 8 minutes until thick.',
      'Heat the grill to high. Grill the chicken for 25 minutes, turning every 6 minutes and brushing with the sauce, until charred at the edges and cooked through.',
      'Serve with the remaining sauce spooned over.'
    ],
    tips: [
      'Slash the chicken so the paste gets in.',
      'Brush with sauce only in the last 15 minutes to avoid burning.',
      'Cook over charcoal for the authentic flavour.'
    ],
    pair: ['Steamed rice', 'Lemang', 'Cucumber slices', 'Sambal'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [591, 53, 25, 31, 2, 11, 840]
  },

  'mie-ayam': {
    d: 'Egg noodles topped with a savoury-sweet soy-braised minced chicken, greens and fried shallots, served with a bowl of clear broth.',
    meta: 'Mie ayam: egg noodles topped with soy-braised minced chicken, greens and fried shallots, with a bowl of clear broth. Four servings, cooked in 25 minutes.',
    kw: ['mie ayam', 'mie ayam recipe', 'indonesian chicken noodles', 'mie ayam bakso', 'indonesian chicken noodles with soy sauce'],
    why: 'It is a bowl with no soup in it, at least not in the first mouthfuls. The noodles are tossed in a little oil and sauce, topped with the chicken, and the broth arrives in a separate bowl on the side. You eat the noodles first, then sip the broth.\n\nThe chicken topping is minced thigh meat cooked with garlic, ginger, kecap manis (sweet soy), light soy sauce, white pepper and a little water until the liquid cooks off and the mixture is dark, sticky and sweet. **Cook it until dry and glossy.** A wet topping makes the noodles soggy.\n\nFor the noodles, use thin fresh egg noodles. Boil for 2 minutes only, drain well, and toss at once with a spoonful of garlic oil and a dash of soy sauce, so the strands do not clump.\n\nThe broth is chicken stock simmered with garlic, ginger and a pinch of white pepper, seasoned at the end with salt. Blanch a handful of choy sum in the noodle water for the last 30 seconds. Assemble: noodles in the bowl, greens, a spoonful of chicken, fried shallots and spring onions. Serve with chilli sauce and extra sweet soy.',
    ing: [
      '# Chicken topping',
      '2 tbsp vegetable oil',
      '3 garlic cloves, finely chopped',
      '1 tbsp fresh ginger, grated',
      '400 g minced chicken thigh',
      '3 tbsp sweet soy sauce (kecap manis)',
      '1 tbsp light soy sauce',
      '1/2 tsp white pepper',
      '100 ml water',
      '# Noodles and broth',
      '300 g thin fresh egg noodles',
      '2 tbsp garlic oil or vegetable oil',
      '1 tbsp light soy sauce',
      '150 g choy sum',
      '800 ml chicken stock',
      '1/2 tsp salt',
      '# To serve',
      '2 tbsp fried shallots',
      '2 spring onions, sliced',
      '2 tbsp chilli sauce'
    ],
    st: [
      'Heat the 2 tbsp oil and cook the garlic and ginger for 1 minute. Add the chicken and cook for 5 minutes, breaking it up. Add the sweet soy, light soy, pepper and water and cook for 8 minutes until the liquid has gone and the chicken is dark and glossy.',
      'Heat the stock with the salt and keep warm.',
      'Boil the noodles for 2 minutes, adding the choy sum for the last 30 seconds. Drain well and toss with the garlic oil and 1 tbsp soy sauce.',
      'Divide the noodles and greens between 4 bowls, top with the chicken, shallots and spring onions. Serve with the stock in small bowls and the chilli sauce.'
    ],
    tips: [
      'Drain the noodles very well.',
      'Cook the chicken until dry.',
      'Add bakso (meatballs) to the bowl for the classic version.'
    ],
    pair: ['Chicken broth', 'Fried wontons', 'Pickled green chillies', 'Iced tea'],
    store: 'Keeps in the fridge for 2 days (chicken and broth). Cook fresh noodles each time.',
    nut: [606, 32, 61, 26, 3, 4, 2170]
  },

  'siomay': {
    d: 'Steamed fish dumplings served with steamed potato, cabbage, tofu and boiled egg, all covered in a warm peanut sauce.',
    meta: 'Siomay: steamed fish dumplings with potato, cabbage, tofu and boiled egg, covered in warm peanut sauce. Six servings, cooked for 30 minutes.',
    kw: ['siomay', 'siomay bandung', 'siomay recipe', 'indonesian fish dumplings with peanut sauce', 'steamed fish dumplings with peanut sauce'],
    why: 'The dumpling is a steamed ball, not a folded one, and the surprise is how much fish goes in it. Siomay in Bandung, where it originated, is mostly fish paste, with a little tapioca starch to bind it, and it tastes of the sea more than of wheat. The peanut sauce, sweet and spicy and thick as paste, is poured over the lot.\n\nUse a firm white fish: cod, haddock or pollock. Pulse it in a food processor with garlic, spring onion, white pepper, salt, tapioca starch, an egg white and a little ice water until it forms a smooth, springy paste. **Chill the fish mixture for 15 minutes.** A cold paste holds its shape and has a bouncier texture.\n\nShape the mixture into balls the size of a walnut, wet your hands to stop sticking, and steam them in a single layer for 15 minutes. Steam the other parts in the same basket: halved boiled eggs, cubes of fried tofu, potato halves and cabbage wedges.\n\nThe peanut sauce is made from fried peanuts, garlic, chillies, palm sugar, tamarind and water, ground and simmered for 8 minutes. Cut the steamed pieces into bite-sized chunks and serve with the sauce poured over, and a squeeze of lime.',
    ing: [
      '# Dumplings',
      '400 g firm white fish fillet',
      '2 garlic cloves',
      '2 spring onions, sliced',
      '1 egg white',
      '4 tbsp tapioca starch',
      '1/2 tsp white pepper',
      '1 tsp salt',
      '3 tbsp iced water',
      '# To steam',
      '2 potatoes, about 300 g, peeled and halved',
      '200 g white cabbage, cut into wedges',
      '150 g firm tofu, cut into cubes',
      '3 eggs, boiled and halved',
      '# Peanut sauce',
      '150 g roasted peanuts',
      '3 garlic cloves',
      '3 red chillies',
      '3 tbsp palm sugar or brown sugar',
      '1 tbsp tamarind paste',
      '1 tsp salt',
      '300 ml water',
      '1 lime, cut into wedges'
    ],
    st: [
      'Pulse the fish, garlic, spring onions, egg white, tapioca starch, pepper, salt and iced water to a smooth, springy paste. Chill for 15 minutes.',
      'Blend the peanuts, garlic, chillies, sugar, tamarind and salt with the water to a smooth sauce. Simmer for 8 minutes.',
      'Shape the fish mixture into 18 balls with wet hands. Steam the potato for 10 minutes, then add the cabbage, tofu, eggs and fish balls to the basket and steam for 15 minutes.',
      'Cut the potato, cabbage and tofu into bite-sized pieces. Serve everything with the warm peanut sauce poured over, with the lime.'
    ],
    tips: [
      'Keep the fish mixture cold.',
      'Do not overcrowd the steamer.',
      'Make the sauce thinner or thicker with water.'
    ],
    pair: ['Lime wedges', 'Sweet soy sauce', 'Sambal', 'Iced tea'],
    store: 'Best eaten the day it is made. The sauce keeps in the fridge for 3 days.',
    nut: [381, 26, 31, 17, 5, 11, 890]
  },

  'perkedel': {
    d: 'Mashed potato patties flavoured with spring onion, celery, nutmeg and white pepper, dipped in egg and cooked until golden.',
    meta: 'Perkedel: mashed potato patties with spring onion, celery, nutmeg and white pepper, dipped in egg and cooked until golden. Six servings, cooked in 15 minutes.',
    kw: ['perkedel', 'perkedel kentang', 'indonesian potato patties', 'perkedel recipe', 'indonesian potato fritters with egg'],
    why: 'Dry mash is the whole trick. Perkedel is the Indonesian potato patty, a soft, golden disc found on every rice table and in every lunchbox, and it only works if the potato is dry. Wet mash makes patties that fall apart in the oil.\n\nBoil the potatoes whole, in their skins, if you can. They absorb less water that way. Peel them while hot and mash them thoroughly, then return them to the dry pan for a minute over a low heat to drive off any remaining moisture. **Let the mash cool for 10 minutes before mixing in anything.** Egg added to hot mash scrambles.\n\nThe flavouring is simple: fried shallots, spring onion, celery leaf, a pinch of nutmeg, white pepper and salt. A little minced beef, cooked and drained, is a common addition. Mix in one beaten egg to bind.\n\nShape into discs about 6 cm across and 1.5 cm thick. Dip each one in a second beaten egg, then cook in 1 cm of hot oil for 2 minutes on each side. The egg forms a thin golden crust.',
    ing: [
      '600 g potatoes, boiled and peeled',
      '3 shallots, about 75 g, finely chopped',
      '2 spring onions, finely sliced',
      '1 celery stick, finely chopped',
      '1/4 tsp ground nutmeg',
      '1/2 tsp white pepper',
      '1 tsp salt',
      '1 egg, beaten, for the mixture',
      '2 eggs, beaten, for dipping',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Mash the potatoes thoroughly and cook in a dry pan over a low heat for 1 minute to dry. Cool for 10 minutes.',
      'Mix in the shallots, spring onions, celery, nutmeg, pepper, salt and the 1 egg.',
      'Shape into 12 discs about 6 cm across and 1.5 cm thick.',
      'Heat the oil in a frying pan. Dip each disc in the beaten eggs and cook in batches for 2 minutes on each side until golden.',
      'Drain on kitchen paper and serve warm.'
    ],
    tips: [
      'Dry the mash well.',
      'Wet your hands when shaping.',
      'Chill the patties for 15 minutes if the mixture is soft.'
    ],
    pair: ['Steamed rice', 'Sambal', 'Soto ayam', 'Sweet soy sauce'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [338, 6, 20, 26, 3, 2, 440]
  },

  'balinese-sambal-matah': {
    d: 'A raw Balinese relish of finely sliced shallots, lemongrass, chillies and kaffir lime leaf, dressed with hot coconut oil and lime juice.',
    meta: 'Balinese sambal matah: a raw relish of sliced shallots, lemongrass, chillies and kaffir lime leaf, dressed with hot coconut oil and lime. Six servings, ready in 10 minutes.',
    kw: ['sambal matah', 'balinese sambal matah', 'sambal matah recipe', 'raw indonesian sambal', 'bali shallot and lemongrass sambal'],
    why: 'It is the only sambal that is not cooked, and its freshness is the point. Matah means raw in Balinese, and sambal matah is a pile of finely sliced shallots, lemongrass, chillies and lime leaf, all raw, dressed with hot coconut oil and lime juice. The hot oil wilts the shallots a little and carries the aromatics through the mix.\n\nThe cutting is the work. Slice the shallots paper-thin. Use only the soft, pale lower part of the lemongrass, sliced as thin as you can: any thicker and it is like chewing a stick. Slice the kaffir lime leaves in very fine ribbons after removing the central rib. **Take the time to cut small.** A coarse sambal matah is chewy and unpleasant.\n\nMix the sliced ingredients with the chillies, sliced fresh red chilli and bird\'s eye chilli, a good pinch of salt and a spoonful of shrimp paste, toasted and crumbled, if you like. Heat the coconut oil until it shimmers, pour it over the top, and stir. It sizzles and releases a strong aroma.\n\nAdd the lime juice at the end. Serve at once, as it softens and loses its fragrance after an hour. It goes with grilled fish, chicken or fried tofu.',
    ing: [
      '6 shallots, about 150 g, very thinly sliced',
      '2 stalks lemongrass, white parts only, very thinly sliced',
      '3 kaffir lime leaves, central rib removed, finely shredded',
      '3 red chillies, thinly sliced',
      '2 bird\'s eye chillies, thinly sliced',
      '1/2 tsp salt',
      '1 tsp shrimp paste, toasted and crumbled, optional',
      '3 tbsp coconut oil',
      '2 tbsp lime juice'
    ],
    st: [
      'Put the shallots, lemongrass, lime leaves, chillies, salt and shrimp paste in a heatproof bowl.',
      'Heat the coconut oil in a small pan until it shimmers. Pour it over the mixture and stir.',
      'Add the lime juice, taste and adjust the salt. Serve at once.'
    ],
    tips: [
      'Slice everything as fine as you can.',
      'Use a sharp knife.',
      'Serve within an hour for the best aroma.'
    ],
    pair: ['Grilled fish', 'Grilled chicken', 'Steamed rice', 'Fried tofu'],
    store: 'Best eaten within 1 hour. Keeps in the fridge for 1 day.',
    nut: [111, 1, 11, 7, 1, 3, 200]
  },

  'zhoug': {
    d: 'A fiery Yemeni sauce of green chillies, coriander, parsley, garlic, cumin and cardamom blended with olive oil.',
    meta: 'Zhoug: a fiery Yemeni sauce of green chillies, coriander, parsley, garlic, cumin and cardamom blended with olive oil. Eight servings, ready in 10 minutes.',
    kw: ['zhoug', 'zhoug recipe', 'yemeni zhoug', 'spicy green herb sauce', 'zhug hot sauce'],
    why: 'One spoonful goes a long way. Zhoug, also spelled zhug or schug, is a green chilli sauce from Yemen and a staple of Israeli street food. It is made from a mountain of fresh herbs, a handful of green chillies, garlic and spices, blended with oil, and the result is hot, herby, citrusy and almost cooling at the edges.\n\nThe herbs are coriander and flat-leaf parsley, with stalks, which carry plenty of flavour. The chillies determine the heat, and the quantity depends on taste. Use long green chillies for a medium sauce, or bird\'s eye for a fierce one. Remove the seeds for less heat. **Taste the sauce before adding salt.** The chillies have a lot of bite already.\n\nThe spices are what turn it from a herb sauce to a zhoug. Cumin, cardamom and coriander seeds, toasted in a dry pan for a minute and ground, give a warm, floral background. Garlic adds sharpness and lemon juice brightens everything.\n\nPulse in a food processor with olive oil. Do not purée it completely; a little texture is right. It keeps for a week in the fridge under a thin layer of oil.',
    ing: [
      '1 large bunch fresh coriander, about 60 g',
      '1 bunch fresh flat-leaf parsley, about 40 g',
      '4 green chillies',
      '4 garlic cloves',
      '1 tsp cumin seeds, toasted',
      '1/2 tsp cardamom seeds, toasted',
      '1/2 tsp salt',
      '3 tbsp lemon juice',
      '5 tbsp olive oil'
    ],
    st: [
      'Roughly chop the coriander and parsley, including the tender stalks.',
      'Put the herbs, chillies, garlic, toasted spices, salt and lemon juice in a food processor.',
      'Pulse to a coarse paste, adding the olive oil in a stream. Taste and adjust.'
    ],
    tips: [
      'Wear gloves when handling hot chillies.',
      'Pulse rather than purée for the right texture.',
      'Top with a film of oil to keep it green.'
    ],
    pair: ['Falafel', 'Grilled meat', 'Eggs', 'Hummus'],
    store: 'Keeps in a jar in the fridge for 1 week under a film of oil. Freezes well.',
    nut: [93, 1, 2, 9, 1, 1, 150]
  }
};
