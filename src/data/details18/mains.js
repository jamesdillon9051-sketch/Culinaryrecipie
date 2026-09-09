'use strict';

/**
 * Volume eighteen — Chinese mains.
 *
 * Eighteen, spread deliberately across the regions rather than concentrated in
 * Sichuan and Guangdong. Six chickens, and each is cooked by a completely
 * different method — poached, red-braised, salt-baked, clay-wrapped, stir-fried
 * with dried chillies, simmered in wine and sesame oil — which is a fair
 * illustration of what "Chinese food" is covering for.
 *
 * The braises are the other theme. Red-braising, hong shao, is the Jiangnan
 * technique of cooking meat in soy, sugar and wine until the sauce reduces to a
 * glaze, and three of these are variations on it from three provinces.
 */

module.exports = {
  'dongpo-rou': {
    d: 'Squares of pork belly tied with string and braised in Shaoxing wine and soy for three hours, until the fat is translucent and the meat holds its shape only just.',
    meta: 'Hangzhou braised pork belly: squares of belly tied with string, braised slowly in Shaoxing wine, soy and rock sugar, then steamed.',
    kw: ['dongpo rou', 'dongpo pork recipe', 'hangzhou braised pork belly', 'chinese red braised pork', 'shaoxing wine pork'],
    why: 'The string is not decoration. Three hours of braising turns the connective tissue to gelatine and the squares would collapse into the pot without it — tied, each piece keeps its shape and can be lifted out whole. The other difference from ordinary red-braised pork is that the liquid is almost entirely Shaoxing wine rather than water, which is expensive and is the reason it tastes as it does. Lay a bed of spring onion and ginger under the pork so it never touches the base and cannot catch.',
    ing: [
      '1.2 kg pork belly, skin on, in 6 cm squares',
      '8 spring onions, whole',
      '60 g ginger, thickly sliced',
      '# For the braise',
      '600 ml Shaoxing wine',
      '5 tbsp light soy sauce',
      '2 tbsp dark soy sauce',
      '100 g rock sugar',
      '200 ml water',
      '# To finish',
      '2 spring onions, finely sliced'
    ],
    st: [
      'Blanch the pork squares in boiling water 5 minutes, then drain and rinse them.',
      'Tie each square around its middle in both directions with butcher\'s string, like a parcel.',
      'Lay the whole spring onions and ginger slices across the base of a heavy pot to make a raft.',
      'Set the pork squares on top, skin side down, in a single layer.',
      'Pour in the Shaoxing wine, both soy sauces, the rock sugar and the water. The liquid should nearly cover the pork.',
      'Bring to a simmer, cover tightly, and cook over the lowest heat 2 hours 30 minutes.',
      'Turn each square skin side up and cook uncovered 30 minutes, basting, until the sauce is syrupy.',
      'Lift the squares carefully into bowls, skin up, and steam them 20 minutes to finish.',
      'Strain the sauce, reduce it if thin, and spoon it over. Scatter with spring onion and snip the strings at the table.'
    ],
    tips: [
      'Tie every square. Untied pork falls apart in the pot.',
      'A raft of spring onion and ginger so nothing touches the base.',
      'Mostly wine, not water. It is the whole flavour.'
    ],
    pair: ['Steamed rice', 'Blanched greens', 'A pot of green tea'],
    store: 'Refrigerated for 4 days and better on the second. Freezes 3 months.',
    nut: [720, 32, 22, 54, 0, 18, 1290]
  },

  'yuxiang-rousi': {
    d: 'Shredded pork in a sweet, sour and hot sauce that contains no fish at all — the name refers to the seasonings normally used to cook fish in Sichuan.',
    meta: 'Sichuan shredded pork stir-fried with wood ear and bamboo shoots in a pickled chilli sauce balanced sweet, sour and salty.',
    kw: ['yuxiang rousi', 'fish fragrant pork', 'yu xiang rou si recipe', 'sichuan shredded pork', 'pickled chilli pork stir fry'],
    why: 'Mix the sauce in a bowl before you light the wok. The whole dish takes about ninety seconds from the pork hitting the oil, and measuring soy, vinegar and sugar while it cooks guarantees an overcooked, unbalanced result. Pickled chillies — paojiao — are what makes it yuxiang rather than merely spicy; doubanjiang alone gives heat without the sourness. And velvet the pork in cornflour and water first, which is what keeps thin shreds tender through high heat.',
    ing: [
      '# For the pork',
      '400 g pork loin or shoulder, in fine shreds',
      '1 tbsp Shaoxing wine',
      '1 tbsp light soy sauce',
      '1 tbsp cornflour',
      '2 tbsp cold water',
      '# For the sauce',
      '2 tbsp light soy sauce',
      '3 tbsp Chinkiang black vinegar',
      '2 tbsp caster sugar',
      '1 tbsp Shaoxing wine',
      '2 tsp cornflour',
      '4 tbsp water',
      '# For the wok',
      '4 tbsp vegetable oil',
      '3 tbsp pickled chillies, chopped, or 2 tbsp doubanjiang',
      '4 garlic cloves, chopped',
      '20 g ginger, chopped',
      '80 g wood ear mushrooms, soaked and shredded',
      '150 g bamboo shoots, shredded',
      '4 spring onions, in 3 cm lengths'
    ],
    st: [
      'Mix the pork shreds with the wine, soy sauce, cornflour and water and leave 15 minutes.',
      'Whisk all the sauce ingredients together in a bowl and keep it beside the wok.',
      'Heat 3 tbsp of the oil in a wok until it shimmers.',
      'Add the pork, spread it out, and leave 20 seconds before stirring. Cook 90 seconds, until just white. Lift it out.',
      'Add the last tablespoon of oil and fry the pickled chillies 30 seconds, until the oil turns red.',
      'Add the garlic and ginger for 20 seconds, then the wood ear and bamboo shoots for 1 minute.',
      'Return the pork, pour in the sauce and toss until it thickens and coats, about 30 seconds.',
      'Throw in the spring onions, toss once and serve at once with rice.'
    ],
    tips: [
      'Mix the sauce before you light the wok.',
      'Pickled chillies, not just chilli paste. That is the yuxiang.',
      'Velvet the pork in cornflour or the shreds go tough.'
    ],
    pair: ['Steamed rice', 'Smashed cucumber', 'A cold beer'],
    store: 'Refrigerated for 2 days. Reheat fast in a hot wok, never a microwave.',
    nut: [430, 28, 22, 25, 3, 10, 1290]
  },

  'zhajiangmian': {
    d: 'Thick wheat noodles under a dark salty pork sauce and a heap of raw shredded vegetables that you mix in yourself at the table.',
    meta: 'Beijing noodles with a slow-fried sauce of pork belly and fermented bean pastes, served over thick wheat noodles with raw vegetable shreds.',
    kw: ['zhajiangmian', 'zha jiang mian recipe', 'noodles with fried bean sauce', 'beijing noodles pork', 'chinese bean paste noodles'],
    why: 'The sauce is fried, hard, for a good twenty minutes — that is what zhajiang means. The bean pastes are raw and harsh out of the jar and only long frying in plenty of oil drives off the harshness and turns the sauce dark and glossy; ten minutes is not enough and you will taste the difference. Rinse the pastes with a little water first if they are very salty. The raw vegetables are not a garnish either: the sauce is deliberately too salty to eat alone and the cucumber and radish are its other half.',
    ing: [
      '# For the sauce',
      '400 g pork belly, finely diced',
      '5 tbsp vegetable oil',
      '4 tbsp sweet bean sauce, tianmianjiang',
      '3 tbsp yellow soybean paste, huangdoujiang',
      '1 onion, finely diced',
      '4 garlic cloves, chopped',
      '20 g ginger, chopped',
      '2 tbsp Shaoxing wine',
      '1 tbsp caster sugar',
      '250 ml water',
      '4 spring onions, chopped',
      '# For the noodles',
      '500 g thick fresh wheat noodles',
      '# To serve',
      '1 cucumber, in matchsticks',
      '150 g bean sprouts, blanched',
      '1 carrot, in matchsticks',
      '100 g radish, in matchsticks',
      '150 g edamame beans, cooked'
    ],
    st: [
      'Mix the two bean pastes with 100 ml of the water to loosen them.',
      'Fry the diced pork belly in the oil over medium heat 10 minutes, until the fat has run and the meat is browned.',
      'Add the onion, garlic and ginger and cook 5 minutes.',
      'Add the loosened bean pastes and fry, stirring almost constantly, 20 minutes over medium-low heat, until very dark, thick and glossy.',
      'Add the wine, sugar and the remaining water and simmer 10 minutes more, until the oil separates and rises.',
      'Stir in the spring onions and take it off the heat.',
      'Boil the noodles until just tender, drain and rinse briefly in cold water so they stay springy.',
      'Divide the noodles between bowls, spoon the sauce into the centre and pile the raw vegetables around.',
      'Mix everything together at the table before eating.'
    ],
    tips: [
      'Twenty minutes of frying the paste. Anything less tastes raw.',
      'The sauce is meant to be too salty alone. The vegetables fix it.',
      'Rinse the noodles so they stay springy under the sauce.'
    ],
    pair: ['Raw garlic cloves, traditionally', 'A cold beer', 'Smashed cucumber'],
    store: 'The sauce refrigerates 5 days and freezes 3 months. Cook noodles to order.',
    nut: [720, 30, 82, 30, 6, 12, 1490]
  },

  'la-zi-ji': {
    d: 'Fried chicken pieces buried in a wok of dried chillies and Sichuan pepper, from which you hunt out the chicken. Chongqing, and the chillies are not eaten.',
    meta: 'Chongqing chicken: marinated chicken cubes double-fried until crisp, then tossed through a wok of toasted dried chillies and Sichuan peppercorns.',
    kw: ['la zi ji', 'la zi ji recipe', 'chongqing chicken chillies', 'sichuan dry fried chicken', 'chongqing dried chilli chicken'],
    why: 'The chillies are toasted in oil below smoking point, and if they go black the whole wok turns acrid and cannot be saved — pull the pan off the heat the moment they darken a shade and smell fragrant. Fry the chicken twice: once at 160C to cook it through and once at 190C to crisp it, which keeps it crunchy under the tossing. And use whole dried chillies snipped in half rather than flakes, because the point is aroma released slowly, not raw heat.',
    ing: [
      '# For the chicken',
      '600 g boneless chicken thigh, in 3 cm cubes',
      '2 tbsp Shaoxing wine',
      '1 tbsp light soy sauce',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 egg white',
      '4 tbsp cornflour',
      '1 litre vegetable oil, for frying',
      '# For the wok',
      '60 g whole dried red chillies, snipped in half, seeds shaken out',
      '2 tbsp Sichuan peppercorns',
      '6 garlic cloves, sliced',
      '30 g ginger, sliced',
      '1 tbsp caster sugar',
      '1 tsp fine sea salt',
      '2 tsp sesame oil',
      '3 tbsp toasted sesame seeds',
      '4 spring onions, in 3 cm lengths'
    ],
    st: [
      'Mix the chicken with the wine, soy sauce, salt, white pepper and egg white and leave 20 minutes.',
      'Toss the chicken in the cornflour until every piece is coated, shaking off the excess.',
      'Heat the oil to 160C and fry the chicken in batches 4 minutes, until pale gold. Lift out onto a rack.',
      'Raise the oil to 190C and fry the chicken again, in batches, 90 seconds, until deep gold and crisp. Drain.',
      'Pour off all but 4 tbsp of the oil.',
      'Over medium heat, add the dried chillies and Sichuan peppercorns and toast 60 seconds, until fragrant and a shade darker. Take the pan off the heat if they threaten to blacken.',
      'Add the garlic and ginger for 30 seconds.',
      'Return the chicken, add the sugar and salt, and toss hard over high heat 1 minute.',
      'Finish with the sesame oil, sesame seeds and spring onions. Serve, and eat around the chillies.'
    ],
    tips: [
      'Pull the pan the second the chillies darken. Burnt chillies are unfixable.',
      'Fry twice — 160C then 190C.',
      'Whole chillies, not flakes. It is aroma, not raw heat.'
    ],
    pair: ['Steamed rice', 'A cold beer', 'Something cooling alongside'],
    store: 'Best immediately. Refrigerated 2 days and re-crisped in a hot oven.',
    nut: [540, 38, 22, 33, 3, 5, 1390]
  },

  'duo-jiao-yu-tou': {
    d: 'A split fish head steamed under a mound of chopped salted red chillies. Hunan\'s signature, and it uses fresh pickled chilli rather than Sichuan\'s dried.',
    meta: 'A Hunanese dish of split fish head steamed under chopped salted chillies with ginger, garlic and fermented black beans, finished with hot oil.',
    kw: ['duo jiao yu tou', 'chopped chilli fish head', 'hunan fish head recipe', 'steamed fish head chilli', 'hunan steamed fish'],
    why: 'Twelve minutes and not a minute more. Fish head has a great deal of collagen and very little muscle, and it goes from silky to dry with almost no warning; the cheek should slip off the bone under a chopstick. The chopped chillies are salted and fermented rather than fresh, which is the difference between Hunan heat and Sichuan heat — bright and sour rather than numbing. And the smoking oil poured over at the end is not a flourish: it blooms the aromatics on the surface in the last five seconds.',
    ing: [
      '1 fish head, about 800 g, split in half but joined at the base',
      '2 tbsp Shaoxing wine',
      '1 tsp fine sea salt',
      '6 slices ginger',
      '4 spring onions, whole',
      '# For the topping',
      '8 tbsp duo jiao — chopped salted red chillies',
      '2 tbsp fermented black beans, rinsed and chopped',
      '6 garlic cloves, chopped',
      '30 g ginger, chopped',
      '2 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tbsp caster sugar',
      '# To finish',
      '5 tbsp vegetable oil',
      '4 spring onions, finely sliced',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Rub the fish head inside and out with the wine and salt and leave 10 minutes, then rinse and pat dry.',
      'Lay the whole spring onions and ginger slices on a heatproof plate and set the fish head on top, cut side up and opened flat.',
      'Mix the chopped chillies, black beans, garlic, chopped ginger, soy sauce, wine and sugar.',
      'Spread the mixture right across the fish head in an even layer.',
      'Steam over rapidly boiling water 12 minutes, until the flesh at the thickest part comes away from the bone easily.',
      'Pour off any watery liquid that has collected on the plate.',
      'Scatter the sliced spring onions and coriander over.',
      'Heat the oil until it just smokes and pour it over the top in one go — it should hiss loudly. Serve immediately.'
    ],
    tips: [
      'Twelve minutes. Fish head dries out with no warning.',
      'Salted chopped chillies, not fresh. Bright and sour is the point.',
      'Pour off the watery liquid before the hot oil goes on.'
    ],
    pair: ['Steamed rice', 'Plain noodles in the sauce afterwards', 'A cold beer'],
    store: 'Best immediately. Refrigerated 1 day at most.',
    nut: [380, 42, 8, 20, 2, 5, 1590]
  },

  'beggars-chicken': {
    d: 'A whole chicken wrapped in lotus leaves, sealed in clay and baked for three hours, then broken open at the table with a mallet.',
    meta: 'A whole stuffed chicken wrapped in lotus leaves and encased in salt dough, baked three hours and cracked open at the table.',
    kw: ['beggars chicken', 'beggars chicken recipe', 'clay baked chicken', 'lotus leaf chicken', 'hangzhou whole chicken'],
    why: 'The clay casing has to be completely sealed with no cracks, because the whole method depends on the chicken cooking in trapped steam — one gap and the moisture escapes and you get a dry roast bird in an expensive shell. Patch any splits with more dough before it goes in. The lotus leaves are the layer that actually matters for flavour: they perfume the meat in a way nothing else does, and the clay is there to hold everything shut. Rest it thirty minutes in the shell before breaking it.',
    ing: [
      '1 chicken, about 1.6 kg',
      '# For the marinade',
      '3 tbsp Shaoxing wine',
      '2 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '2 tsp fine sea salt',
      '1 tbsp caster sugar',
      '1 tsp five-spice powder',
      '0.5 tsp white pepper',
      '# For the stuffing',
      '8 dried shiitake mushrooms, soaked and sliced',
      '100 g pork belly, diced',
      '80 g pickled mustard greens, chopped',
      '30 g ginger, shredded',
      '4 spring onions, in lengths',
      '2 tbsp vegetable oil',
      '# For wrapping',
      '4 dried lotus leaves, soaked in hot water',
      '2 sheets baking paper',
      '# For the clay',
      '1 kg plain flour',
      '400 g coarse salt',
      '450 ml water'
    ],
    st: [
      'Rub the chicken inside and out with all the marinade ingredients and refrigerate 4 hours.',
      'Soak the shiitake and the lotus leaves separately in hot water 30 minutes.',
      'Fry the pork belly in the oil until its fat runs, then add the shiitake, mustard greens, ginger and spring onions and cook 5 minutes. Cool.',
      'Pack the stuffing into the chicken\'s cavity and truss the legs.',
      'Wrap the chicken tightly in the soaked lotus leaves, then in baking paper.',
      'Mix the flour, salt and water into a stiff dough and roll it out to 1 cm thick.',
      'Encase the wrapped chicken completely in the dough, sealing every join and patching any cracks.',
      'Bake at 180C fan / 200C / gas 6 for 3 hours.',
      'Rest 30 minutes in the shell, then crack it open at the table with a mallet and peel back the leaves.'
    ],
    rest: [300, 'soaking the leaves, marinating the chicken and resting it in its shell'],
    tips: [
      'Seal every crack in the clay. A leak dries the bird out.',
      'The lotus leaves are the flavour; the clay just holds it shut.',
      'Rest it half an hour before breaking it open.'
    ],
    pair: ['Steamed rice', 'Blanched greens', 'Shaoxing wine'],
    store: 'The cooked chicken refrigerates 3 days. Do not attempt to re-seal it.',
    nut: [560, 52, 14, 32, 2, 6, 1490]
  },

  'white-cut-chicken': {
    d: 'A whole chicken poached below a simmer and plunged into ice, served cold with a ginger and scallion oil. The most Cantonese thing there is.',
    meta: 'A whole chicken poached gently and shocked in iced water so the skin sets, chopped on the bone and served with ginger and scallion oil.',
    kw: ['white cut chicken', 'bai qie ji recipe', 'cantonese poached chicken', 'ginger scallion oil chicken', 'chinese white chicken'],
    why: 'The ice bath is the technique. Straight from the poaching liquid into iced water, the skin contracts and sets into the taut, faintly gelatinous layer that defines the dish, and the temperature shock also stops the meat cooking on. Skip it and the skin is flabby. The water must also never actually boil — bubbles tear the skin and toughen the breast, so hold it at a bare tremble and let the residual heat do most of the work with the pan off the heat.',
    ing: [
      '1 chicken, about 1.5 kg',
      '# For poaching',
      '3 litres water',
      '60 g ginger, sliced',
      '6 spring onions, whole',
      '2 tbsp fine sea salt',
      '2 tbsp Shaoxing wine',
      '# For the ice bath',
      '2 litres iced water',
      '# For the ginger scallion oil',
      '60 g ginger, very finely chopped',
      '8 spring onions, very finely chopped',
      '1.5 tsp fine sea salt',
      '150 ml vegetable oil',
      '# To serve',
      '2 tbsp sesame oil, for rubbing',
      'Coriander sprigs'
    ],
    st: [
      'Bring the water to the boil with the ginger, spring onions, salt and wine.',
      'Lower the chicken in breast down, bring back to a bare tremble and hold it there 15 minutes without ever boiling.',
      'Cover, take the pan off the heat and leave the chicken in the liquid 30 minutes.',
      'Check that the juices at the thigh run clear, then lift the chicken straight into the iced water and leave 10 minutes.',
      'Drain it, pat it dry and rub the skin all over with the sesame oil.',
      'For the sauce, mix the chopped ginger, spring onion and salt in a heatproof bowl.',
      'Heat the vegetable oil until it just smokes and pour it over — it will hiss and sizzle. Stir and let it cool.',
      'Chop the chicken through the bone into 2 cm pieces and reassemble it on the plate.',
      'Serve at room temperature with the ginger scallion oil and coriander.'
    ],
    tips: [
      'Never let it boil. A tremble, then off the heat.',
      'Straight into iced water. That is what sets the skin.',
      'Smoking oil over the raw ginger and scallion, not the other way round.'
    ],
    pair: ['Steamed rice', 'Blanched choy sum', 'A clear soup'],
    store: 'Refrigerated for 3 days and eaten cold. The oil keeps 2 weeks.',
    nut: [520, 48, 4, 35, 1, 2, 1290]
  },

  'soy-sauce-chicken': {
    d: 'A whole chicken poached in a dark soy master stock until the skin is mahogany and glossy. The stock is kept and reused, and improves for years.',
    meta: 'A whole chicken simmered and steeped in a spiced dark soy master stock until deeply coloured, then chopped and served with the reduced sauce.',
    kw: ['soy sauce chicken', 'see yau gai recipe', 'cantonese soy chicken', 'master stock chicken', 'chinese braised whole chicken'],
    why: 'The chicken is turned every ten minutes so it colours evenly, and the pot must be only just wide enough — in a large pan you need twice the stock to cover the bird, which is wasteful given how much soy sauce and rock sugar goes into it. Most of the cooking happens off the heat, steeping in the hot stock, which colours the skin deeply without overcooking the breast. Strain the stock, chill it, lift the fat off and keep it: a master stock genuinely gets better every time it is used.',
    ing: [
      '1 chicken, about 1.5 kg',
      '# For the master stock',
      '400 ml light soy sauce',
      '150 ml dark soy sauce',
      '250 ml Shaoxing wine',
      '150 g rock sugar',
      '1.5 litres water',
      '60 g ginger, sliced',
      '6 spring onions, whole',
      '4 star anise',
      '2 cinnamon sticks',
      '6 cloves',
      '1 tbsp fennel seeds',
      '2 strips dried tangerine peel',
      '2 bay leaves',
      '1 tsp Sichuan peppercorns',
      '# To finish',
      '2 tbsp sesame oil',
      '3 spring onions, sliced',
      'Coriander sprigs'
    ],
    st: [
      'Bring all the master stock ingredients to a simmer in a deep pot just wide enough to hold the chicken, and cook 20 minutes.',
      'Lower the chicken in breast down. The stock should nearly cover it.',
      'Simmer very gently 20 minutes, turning the bird every 10 minutes so it colours evenly.',
      'Cover, take the pot off the heat and steep the chicken 40 minutes, turning it once.',
      'Check the thigh juices run clear, then lift the chicken out and brush it with the sesame oil.',
      'Ladle 250 ml of the stock into a small pan and reduce it by half to a pouring sauce.',
      'Chop the chicken through the bone into 2 cm pieces and reassemble it on the plate.',
      'Pour the reduced sauce over and finish with spring onion and coriander.',
      'Strain the remaining stock, chill it, lift off the fat and freeze it for next time.'
    ],
    tips: [
      'A narrow pot. A wide one needs twice the soy sauce.',
      'Turn it every ten minutes so the colour is even.',
      'Keep the master stock. It improves each time you use it.'
    ],
    pair: ['Steamed rice', 'Blanched greens', 'Ginger scallion oil'],
    store: 'The chicken refrigerates 3 days. The strained stock freezes indefinitely.',
    nut: [540, 50, 12, 32, 1, 10, 1890]
  },

  'three-cup-chicken': {
    d: 'Chicken cooked down in equal parts sesame oil, soy sauce and rice wine until the sauce is a glaze, with a great handful of basil thrown in at the end.',
    meta: 'Taiwanese chicken simmered with sesame oil, soy sauce and rice wine in equal measure with ginger and garlic, finished with Thai basil.',
    kw: ['three cup chicken', 'san bei ji recipe', 'taiwanese chicken basil', 'sesame oil soy rice wine chicken', 'chinese clay pot chicken'],
    why: 'The ginger is fried in the sesame oil first, on its own, until the slices curl and go slightly crisp at the edges — that takes a few minutes and it is where most of the depth comes from. Black sesame oil is worth seeking out and it must not be allowed to smoke, because it burns bitter faster than any other oil. The basil goes in at the very end, off the heat, and it should still be bright green when the pot reaches the table; anything more than thirty seconds and it turns black.',
    ing: [
      '800 g chicken thighs and drumsticks, chopped through the bone',
      '80 ml toasted sesame oil, preferably black',
      '60 g ginger, thickly sliced',
      '10 garlic cloves, whole and peeled',
      '4 dried red chillies',
      '# For the sauce',
      '80 ml light soy sauce',
      '80 ml rice wine or Shaoxing wine',
      '1 tbsp rock sugar or caster sugar',
      '# To finish',
      '40 g Thai basil leaves',
      '2 spring onions, in lengths'
    ],
    st: [
      'Blanch the chicken pieces in boiling water 3 minutes, then drain and dry them well.',
      'Heat the sesame oil in a clay pot or heavy pan over medium heat — never let it smoke.',
      'Fry the ginger slices alone 4 minutes, until curled and lightly crisped at the edges.',
      'Add the whole garlic cloves and the dried chillies and cook 2 minutes more.',
      'Add the chicken and turn it in the oil until every piece is coated and lightly browned, 5 minutes.',
      'Pour in the soy sauce and the rice wine and add the sugar.',
      'Cover and simmer over medium-low heat 15 minutes, turning the chicken twice.',
      'Take the lid off and cook 5 minutes more, until the sauce has reduced to a thick glaze clinging to the pieces.',
      'Take the pot off the heat, throw in the basil and spring onions, cover for 30 seconds, then serve straight from the pot.'
    ],
    tips: [
      'Fry the ginger alone until it curls. That is the depth.',
      'Sesame oil must never smoke — it goes bitter instantly.',
      'Basil off the heat, thirty seconds, lid on.'
    ],
    pair: ['Steamed rice', 'A cold beer', 'Stir-fried greens'],
    store: 'Refrigerated for 3 days. Reheat gently and add fresh basil.',
    nut: [620, 44, 12, 44, 1, 8, 1390]
  },

  'salt-baked-chicken': {
    d: 'A chicken buried in three kilos of hot coarse salt and baked until it is cooked through by conducted heat alone. Hakka, and the salt is reusable.',
    meta: 'A Hakka whole chicken wrapped in paper and buried in a pot of hot coarse salt, baked until cooked through and served hand-torn.',
    kw: ['salt baked chicken', 'salt baked chicken recipe', 'hakka chicken', 'yan ju gai', 'whole chicken in salt'],
    why: 'The chicken is wrapped in paper before it goes into the salt, so almost none of the salt actually reaches the meat — the salt is a heat medium, not a seasoning, and an unwrapped bird comes out inedible. Heat the salt in the empty pot until it is genuinely hot and moving freely before the chicken goes in, because cold salt takes far too long to come up and the bird stews. And the meat is torn by hand rather than carved, which is how it is served in Hakka restaurants and does keep it juicier.',
    ing: [
      '1 chicken, about 1.4 kg',
      '# For the rub',
      '2 tbsp Shaoxing wine',
      '1 tbsp fine sea salt',
      '2 tsp salt-baked chicken powder, or 1 tsp ground turmeric plus 1 tsp five-spice',
      '0.5 tsp white pepper',
      '30 g ginger, sliced',
      '4 spring onions, whole',
      '# For baking',
      '3 kg coarse rock salt',
      '2 large sheets baking paper',
      '# For the dipping sauce',
      '30 g ginger, finely chopped',
      '4 spring onions, finely chopped',
      '1 tsp fine sea salt',
      '4 tbsp vegetable oil, heated until smoking'
    ],
    st: [
      'Rub the chicken inside and out with the wine, salt, chicken powder and white pepper, and push the ginger and spring onions into the cavity.',
      'Leave it uncovered in the fridge 2 hours to dry the skin.',
      'Wrap the chicken tightly in two layers of baking paper, tucking the ends under so no salt can get in.',
      'Heat the rock salt in a large dry casserole over high heat 15 minutes, stirring, until it is very hot and pours freely.',
      'Scoop out two thirds of the salt, set the wrapped chicken in the pot, and bury it completely with the salt you removed.',
      'Cover and bake at 200C fan / 220C / gas 7 for 75 minutes.',
      'Lift the parcel out, brush the salt off and let it rest 15 minutes before unwrapping.',
      'Mix the chopped ginger, spring onion and salt in a bowl and pour the smoking oil over.',
      'Tear the chicken into pieces by hand and serve with the sauce.'
    ],
    rest: [120, 'drying the skin uncovered in the fridge'],
    tips: [
      'Wrap it properly. The salt is heat, not seasoning.',
      'Heat the salt until it pours freely before the chicken goes in.',
      'Tear it by hand. It stays juicier than carving.'
    ],
    pair: ['Steamed rice', 'Ginger scallion oil', 'Blanched greens'],
    store: 'Refrigerated for 3 days. The salt can be cooled, sieved and reused several times.',
    nut: [500, 50, 3, 32, 0, 1, 1490]
  },

  'da-pan-ji': {
    d: 'Chicken, potatoes and peppers stewed with beer and chilli in one enormous plate, with wide hand-pulled noodles slid underneath at the end to soak up the sauce.',
    meta: 'A Xinjiang stew of chicken on the bone with potatoes, peppers and beer, spiced with dried chilli and Sichuan pepper, served over wide noodles.',
    kw: ['da pan ji', 'big plate chicken recipe', 'xinjiang chicken', 'chicken potato stew chinese', 'chinese chicken noodles stew'],
    why: 'The potatoes are added halfway through and are meant to break down at the edges — they are the thickener, and there is no cornflour in this dish. Cut them in large chunks so they hold some shape while the outsides dissolve into the sauce. The noodles go in only at the very end, underneath the finished stew rather than cooked in it, because noodles simmered in the sauce swell, go soft and drink all the liquid. Beer rather than stock is standard in Xinjiang and it does make a difference.',
    ing: [
      '1.2 kg chicken, chopped through the bone into 4 cm pieces',
      '3 tbsp vegetable oil',
      '2 tbsp caster sugar',
      '8 dried red chillies',
      '1 tbsp Sichuan peppercorns',
      '3 star anise',
      '1 cinnamon stick',
      '2 bay leaves',
      '60 g ginger, sliced',
      '8 garlic cloves, sliced',
      '2 tbsp doubanjiang',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '330 ml lager',
      '400 ml water',
      '1.5 tsp fine sea salt',
      '# Added later',
      '600 g potatoes, in large chunks',
      '2 green peppers, in large pieces',
      '1 red pepper, in large pieces',
      '# To serve',
      '400 g wide fresh noodles',
      '4 spring onions, sliced',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Blanch the chicken pieces in boiling water 3 minutes, then drain and dry them.',
      'Heat the oil in a wide pot, add the sugar and let it melt to a caramel, 2 minutes.',
      'Add the chicken and turn it in the caramel until glossy and browned, 6 minutes.',
      'Add the dried chillies, Sichuan peppercorns, star anise, cinnamon, bay, ginger and garlic and fry 2 minutes.',
      'Stir in the doubanjiang and cook 1 minute, then add both soy sauces, the beer, water and salt.',
      'Cover and simmer 25 minutes.',
      'Add the potatoes, cover again and cook 20 minutes, until they are soft and beginning to break at the edges.',
      'Add the peppers and cook uncovered 8 minutes, until the sauce has thickened.',
      'Boil the noodles separately, drain them and lay them on a large platter.',
      'Tip the stew over the noodles and scatter with spring onion and coriander.'
    ],
    tips: [
      'The potatoes are the thickener. Let them break at the edges.',
      'Noodles under the stew, never cooked in it.',
      'Beer, not stock. It is what Xinjiang uses.'
    ],
    pair: ['More of the beer', 'Pickled garlic', 'Nothing else — it is enormous'],
    store: 'Refrigerated for 3 days without the noodles. Freezes 2 months.',
    nut: [720, 42, 62, 32, 6, 10, 1490]
  },

  'braised-beef-brisket': {
    d: 'Brisket and daikon braised for three hours in a chu hou and bean paste sauce until the tendon has gone to jelly. The clay pot on every Cantonese menu.',
    meta: 'Cantonese braised beef brisket and tendon with daikon in a chu hou paste and fermented bean curd sauce, cooked three hours.',
    kw: ['braised beef brisket', 'chinese beef brisket recipe', 'cantonese beef stew', 'beef brisket daikon', 'chu hou paste beef'],
    why: 'Buy brisket with the tendon and connective tissue still attached, or ask for a piece of shin alongside — the gelatine those release is what makes the sauce cling, and lean brisket gives a thin, watery braise however long it cooks. The daikon goes in for the last forty minutes only: added at the start it disintegrates completely and turns the sauce cloudy. And blanch the beef first and rinse the pot, because scum trapped in the sauce makes it grey.',
    ing: [
      '1.2 kg beef brisket with tendon, in 4 cm cubes',
      '3 tbsp vegetable oil',
      '60 g ginger, sliced',
      '6 garlic cloves, crushed',
      '4 spring onions, in lengths',
      '# For the sauce',
      '3 tbsp chu hou paste',
      '1 tbsp fermented bean curd, mashed',
      '2 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '3 tbsp Shaoxing wine',
      '1 tbsp rock sugar',
      '2 star anise',
      '1 cinnamon stick',
      '2 strips dried tangerine peel',
      '1.2 litres water',
      '1 tsp fine sea salt',
      '# Added later',
      '600 g daikon, in 4 cm chunks',
      '# To finish',
      '3 spring onions, sliced',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Put the beef in cold water, bring to the boil and blanch 5 minutes. Drain, rinse the beef and wash out the pot.',
      'Heat the oil and fry the ginger, garlic and spring onions 2 minutes.',
      'Add the chu hou paste and mashed bean curd and fry 1 minute.',
      'Add the beef and turn it in the paste until coated.',
      'Add both soy sauces, the wine, rock sugar, star anise, cinnamon, tangerine peel, water and salt.',
      'Bring to a simmer, cover, and cook over the lowest heat 2 hours 20 minutes.',
      'Add the daikon and cook a further 40 minutes, until the beef is completely tender and the daikon translucent.',
      'Take the lid off and reduce the sauce if it is thin.',
      'Scatter with spring onion and coriander and serve from the pot with rice.'
    ],
    tips: [
      'Brisket with the tendon on. Lean brisket gives a watery sauce.',
      'Daikon in for the last forty minutes only.',
      'Blanch the beef and wash the pot, or the sauce goes grey.'
    ],
    pair: ['Steamed rice', 'Noodles in the sauce', 'Blanched greens'],
    store: 'Refrigerated for 4 days and better on the second. Freezes 3 months.',
    nut: [610, 48, 18, 38, 3, 8, 1390]
  },

  'sweet-sour-spare-ribs': {
    d: 'Short ribs braised in Chinkiang vinegar and rock sugar until the sauce reduces to a lacquer. Shanghai, and it is served at room temperature as often as hot.',
    meta: 'Shanghai spare ribs braised in black vinegar, Shaoxing wine and rock sugar, then reduced hard until the sauce coats them like lacquer.',
    kw: ['sweet and sour spare ribs', 'tang cu pai gu recipe', 'shanghai ribs', 'chinese black vinegar ribs', 'sticky pork ribs chinese'],
    why: 'Two additions of vinegar, and the second is the whole point. Chinkiang vinegar loses most of its aroma to long cooking, so half goes in at the start for its acidity and half goes in during the final reduction for its smell. Reduce the sauce hard at the end over high heat, turning the ribs constantly — at that stage it goes from syrup to lacquer in about ninety seconds and from lacquer to burnt sugar not long after, so it needs watching rather than a timer.',
    ing: [
      '900 g pork spare ribs, cut into 5 cm pieces',
      '2 tbsp vegetable oil',
      '4 slices ginger',
      '3 spring onions, in lengths',
      '# For the braise',
      '4 tbsp Chinkiang black vinegar',
      '3 tbsp Shaoxing wine',
      '2 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '80 g rock sugar',
      '2 star anise',
      '500 ml water',
      '1 tsp fine sea salt',
      '# To finish',
      '2 tbsp Chinkiang black vinegar',
      '2 tbsp toasted white sesame seeds'
    ],
    st: [
      'Blanch the ribs in boiling water 5 minutes, then drain and rinse them.',
      'Brown them in the oil with the ginger and spring onions, 8 minutes.',
      'Add 4 tbsp of the vinegar, the wine, both soy sauces, the rock sugar, star anise, water and salt.',
      'Bring to a simmer, cover, and cook 45 minutes, until the meat pulls easily from the bone.',
      'Take the lid off, fish out the ginger, spring onion and star anise, and turn the heat to high.',
      'Reduce hard, turning the ribs constantly, 5 minutes, until the sauce is syrupy.',
      'Add the final 2 tbsp of vinegar and keep turning 90 seconds more, until the sauce coats each rib like lacquer.',
      'Take them off the heat immediately and scatter with sesame seeds. Serve hot or at room temperature.'
    ],
    tips: [
      'Vinegar in two stages. The second is for the aroma.',
      'The last ninety seconds needs watching, not a timer.',
      'Just as good at room temperature the next day.'
    ],
    pair: ['Steamed rice', 'Smashed cucumber', 'Green tea'],
    store: 'Refrigerated for 4 days and excellent cold. Freezes 2 months.',
    nut: [640, 38, 26, 42, 1, 22, 1390]
  },

  'steamed-ribs-black-bean': {
    d: 'Bite-sized ribs marinated with fermented black beans and garlic, steamed for twenty-five minutes on a plate. Easier than any other dim sum and just as good.',
    meta: 'Pork ribs cut small, marinated with rinsed fermented black beans, garlic and cornflour, and steamed on a plate until tender.',
    kw: ['steamed pork ribs', 'black bean ribs recipe', 'dim sum steamed ribs', 'chinese black bean spare ribs', 'steamed ribs garlic'],
    why: 'Rinse the fermented black beans before you use them. They are packed in a great deal of salt and unrinsed they will make the whole plate inedible; a quick rinse leaves the funky, savoury flavour behind and takes the harshness away. The ribs also need to be soaked in cold water for half an hour and dried, which draws out blood and gives the pale, clean-tasting result you get in dim sum restaurants rather than a grey, slightly livery one.',
    ing: [
      '600 g pork ribs, chopped into 3 cm pieces',
      '# For the marinade',
      '3 tbsp fermented black beans, rinsed and roughly chopped',
      '6 garlic cloves, chopped',
      '20 g ginger, grated',
      '1 red chilli, chopped',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp Shaoxing wine',
      '2 tsp caster sugar',
      '1 tbsp cornflour',
      '2 tbsp vegetable oil',
      '0.5 tsp white pepper',
      '# To finish',
      '2 spring onions, sliced',
      '1 red chilli, sliced'
    ],
    st: [
      'Soak the rib pieces in cold water 30 minutes, changing the water once, then drain and dry them thoroughly.',
      'Rinse the black beans under running water and shake them dry, then chop them roughly.',
      'Mix the ribs with the black beans, garlic, ginger, chopped chilli, soy sauce, oyster sauce, wine, sugar, cornflour, oil and white pepper.',
      'Leave to marinate 20 minutes.',
      'Spread the ribs in a single layer on a heatproof plate, no more than one deep.',
      'Steam over rapidly boiling water 25 minutes, until the meat comes away from the bone.',
      'Pour off any excess liquid if it is thin, and scatter with spring onion and sliced chilli.'
    ],
    tips: [
      'Rinse the black beans. Unrinsed they are far too salty.',
      'Soak the ribs first — it is what keeps them pale.',
      'One layer only on the plate, or the top ones stay raw.'
    ],
    pair: ['Steamed rice', 'Har gow', 'Jasmine tea'],
    store: 'Refrigerated for 3 days. Re-steam 8 minutes.',
    nut: [480, 34, 12, 32, 1, 5, 1290]
  },

  'siu-yuk': {
    d: 'Roast pork belly with skin blistered into a crackling you can hear from across the room, cut into cubes. Cantonese, and it is entirely about drying the skin.',
    meta: 'Cantonese roast pork belly: skin pricked and salted, meat seasoned with five-spice, dried overnight and roasted hot until the skin blisters into crackling.',
    kw: ['siu yuk', 'crispy roast pork belly', 'siu yuk recipe', 'cantonese roast pork', 'chinese crackling pork'],
    why: 'Prick the skin until it is covered in holes — hundreds of them, with a meat pricker or a clean needle — because those holes are where the fat renders out and the steam escapes, and skin without them puffs unevenly into hard bubbles. Then a full day uncovered in the fridge, and salt only on the skin, never the meat side. The oven goes moderate first to cook the meat, then to maximum for the last twenty minutes to blister the skin; the reverse order gives leather over raw pork.',
    ing: [
      '1.5 kg pork belly, in one thick piece, skin on',
      '# For the meat side',
      '2 tsp fine sea salt',
      '2 tsp five-spice powder',
      '1 tsp caster sugar',
      '1 tsp white pepper',
      '1 tbsp Shaoxing wine',
      '1 tbsp fermented bean curd, mashed, optional',
      '# For the skin',
      '2 tbsp coarse sea salt',
      '1 tbsp rice vinegar',
      '# To serve',
      'English mustard',
      'Caster sugar'
    ],
    st: [
      'Blanch the pork skin side down in boiling water 4 minutes, then lift it out and dry it thoroughly.',
      'Prick the skin all over, hundreds of times, with a meat pricker or clean needle, going through the skin but not into the meat.',
      'Score the meat side in a shallow lattice and rub in the fine salt, five-spice, sugar, white pepper, wine and bean curd.',
      'Turn it skin up, brush the skin with the vinegar and rub the coarse salt over.',
      'Refrigerate it uncovered on a rack 24 hours.',
      'Brush the salt off the skin and pat it completely dry.',
      'Roast skin up at 160C fan / 180C / gas 4 for 70 minutes.',
      'Raise the oven to 250C fan / 270C / gas 10 and roast 20 minutes more, until the skin has blistered right across and crackles.',
      'Rest 15 minutes, then cut into 2 cm cubes with a heavy cleaver, skin side up.',
      'Serve with mustard and a small dish of sugar for dipping.'
    ],
    rest: [1440, 'drying the skin uncovered in the fridge'],
    tips: [
      'Hundreds of holes in the skin, and not one into the meat.',
      'A full day uncovered. Damp skin cannot crackle.',
      'Moderate first, maximum last.'
    ],
    pair: ['Steamed rice', 'Mustard and sugar', 'Blanched greens'],
    store: 'Refrigerated for 3 days. Re-crisp in a very hot oven, never a microwave.',
    nut: [680, 40, 4, 56, 0, 2, 1590]
  },

  'mei-cai-kou-rou': {
    d: 'Pork belly fried, sliced, packed face-down over preserved mustard greens and steamed for two hours, then turned out as a dome. Hakka, and worth every step.',
    meta: 'Hakka steamed pork belly: belly blanched, coloured, fried, sliced and packed skin down over rinsed preserved mustard greens, steamed two hours and inverted.',
    kw: ['mei cai kou rou', 'mei cai kou rou recipe', 'hakka pork belly', 'preserved mustard greens pork', 'steamed pork belly dish'],
    why: 'Rinse and soak the mei cai in several changes of water. It is preserved in a great deal of salt and sand both, and unwashed it is inedible and gritty — thirty minutes and three changes is the minimum. The pork is fried after being coloured with dark soy, and it will spit violently, so use a lid. Packing the slices skin down and steaming for two hours is what lets the fat render into the greens below; the greens are arguably the better half of the dish by the end.',
    ing: [
      '1 kg pork belly, in one piece, skin on',
      '200 g mei cai — preserved mustard greens',
      '# For colouring and frying',
      '2 tbsp dark soy sauce',
      '1 tbsp rice vinegar',
      '500 ml vegetable oil, for frying',
      '# For the sauce',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '3 tbsp Shaoxing wine',
      '2 tbsp caster sugar',
      '2 tbsp fermented bean curd, mashed',
      '6 garlic cloves, chopped',
      '30 g ginger, chopped',
      '2 star anise',
      '200 ml water',
      '# To finish',
      '2 spring onions, sliced',
      '1 tbsp cornflour, slaked in 2 tbsp water'
    ],
    st: [
      'Rinse the mei cai thoroughly, then soak it in warm water 30 minutes with three changes of water, until no grit remains. Squeeze dry and chop.',
      'Simmer the pork belly whole in water 30 minutes, then lift it out and dry it well.',
      'Rub the skin with the dark soy sauce and vinegar and leave 10 minutes to dry.',
      'Heat the oil in a deep pan and lower the pork in skin down, with a lid ready. Fry 4 minutes, until the skin blisters. Lift it out.',
      'Plunge the pork into cold water 10 minutes, which makes the skin wrinkle, then dry it and cut into 1 cm slices.',
      'Fry the chopped mei cai with the garlic, ginger and star anise in 2 tbsp of the oil 5 minutes.',
      'Add both soy sauces, the wine, sugar, bean curd and water and simmer 5 minutes.',
      'Pack the pork slices skin down in a deep heatproof bowl, overlapping, and pile the mei cai and its sauce on top.',
      'Steam 2 hours, topping the pan up with boiling water.',
      'Pour the collected liquid into a pan, thicken it with the slaked cornflour, then invert the bowl onto a plate, lift it off and pour the sauce over.'
    ],
    tips: [
      'Three changes of water on the mei cai. It is salty and gritty.',
      'A lid ready when the pork goes in the oil — it spits hard.',
      'Skin down in the bowl. It comes out on top.'
    ],
    pair: ['Steamed rice', 'Blanched greens', 'A pot of tea'],
    store: 'Refrigerated for 4 days in its bowl. Re-steam 30 minutes.',
    nut: [720, 38, 20, 55, 3, 12, 1690]
  },

  'crab-ginger-scallion': {
    d: 'Whole crab chopped through the shell, dusted in cornflour, flash-fried and tossed with a mountain of ginger and spring onion. Eaten with fingers and a lot of napkins.',
    meta: 'Cantonese wok-fried crab: crab chopped through the shell, dusted and fried, then tossed with ginger, spring onion and a light wine sauce.',
    kw: ['ginger scallion crab', 'chinese crab recipe', 'wok fried crab', 'cantonese crab ginger', 'stir fried whole crab'],
    why: 'Dust the cut faces of the crab in cornflour before frying. The exposed meat at each cut would otherwise leak straight into the wok and be lost, and the cornflour seals it in and browns into a light crust. Fry the ginger long enough to lose its raw edge — a full minute, until the shreds go pale and fragrant — and add the spring onion at the very end, because it only needs to wilt. The shells go into the wok too, since most of the flavour in the sauce comes from them.',
    ing: [
      '2 live or very fresh crabs, about 800 g each',
      '4 tbsp cornflour',
      '5 tbsp vegetable oil',
      '# For the wok',
      '80 g ginger, in fine shreds',
      '8 garlic cloves, sliced',
      '10 spring onions, in 4 cm lengths, white and green separated',
      '2 red chillies, sliced',
      '# For the sauce',
      '3 tbsp Shaoxing wine',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp caster sugar',
      '0.5 tsp white pepper',
      '150 ml water',
      '1 tbsp cornflour, slaked in 2 tbsp water',
      '1 tsp sesame oil'
    ],
    st: [
      'Clean the crabs, remove the top shells and the gills, and chop each body into 4 pieces through the shell. Crack the claws.',
      'Dust all the cut faces in the cornflour.',
      'Heat 4 tbsp of the oil in a large wok until it shimmers and fry the crab pieces, cut side down first, 3 minutes, until the shells turn red. Lift them out.',
      'Add the last tablespoon of oil and fry the ginger 1 minute, until pale and fragrant.',
      'Add the garlic, the white parts of the spring onions and the chilli for 30 seconds.',
      'Return the crab, pour in the wine around the edge of the wok and let it steam for 20 seconds.',
      'Add the soy sauce, oyster sauce, sugar, white pepper and water, cover and cook 4 minutes.',
      'Stir in the slaked cornflour to thicken, add the green parts of the spring onions and the sesame oil, and toss once.',
      'Tip onto a warm platter and serve with finger bowls.'
    ],
    tips: [
      'Cornflour on every cut face or the meat leaks out.',
      'Fry the ginger a full minute before anything else joins it.',
      'The shells go in the wok. That is where the sauce comes from.'
    ],
    pair: ['Steamed rice', 'A cold beer', 'Plenty of napkins'],
    store: 'None. Cook and eat.',
    nut: [420, 40, 18, 20, 1, 4, 1490]
  },

  'steamed-whole-fish': {
    d: 'A whole fish steamed for twelve minutes and finished with smoking oil poured over raw ginger and spring onion. The dish that shows whether the fish was any good.',
    meta: 'A whole white fish steamed briefly on ginger and spring onion, dressed with sweetened soy and finished with smoking hot oil poured over raw aromatics.',
    kw: ['steamed whole fish', 'cantonese steamed fish recipe', 'chinese steamed fish ginger', 'whole fish soy scallion', 'steamed sea bass chinese'],
    why: 'Everything about this dish is timing: roughly twelve minutes for a fish of about seven hundred grams, and the flesh should be opaque at the bone and no more. The other essential step is pouring off the liquid that collects on the plate before the sauce goes on. That liquid is fishy and slightly bitter, and leaving it in is the single most common reason a home-steamed fish tastes muddier than a restaurant one. Then smoking oil over raw ginger and scallion, which cooks them in place in about two seconds.',
    ing: [
      '1 whole sea bass, bream or grey mullet, about 700 g, scaled and gutted',
      '0.5 tsp fine sea salt',
      '1 tbsp Shaoxing wine',
      '# For the steamer',
      '4 spring onions, whole',
      '30 g ginger, sliced',
      '# For the sauce',
      '3 tbsp light soy sauce',
      '2 tbsp water',
      '1 tsp caster sugar',
      '0.5 tsp white pepper',
      '# To finish',
      '30 g ginger, in fine shreds',
      '4 spring onions, in fine shreds',
      '1 red chilli, in fine shreds',
      '4 tbsp vegetable oil',
      '3 tbsp coriander sprigs'
    ],
    st: [
      'Score the fish twice on each side down to the bone, then rub it inside and out with the salt and wine.',
      'Lay the whole spring onions and ginger slices on a heatproof plate and set the fish on top, so it sits clear of the plate.',
      'Steam over rapidly boiling water 12 minutes, until the flesh at the thickest part is just opaque at the bone.',
      'Warm the soy sauce, water, sugar and white pepper together until the sugar dissolves.',
      'Lift the plate out and pour off all the liquid that has collected. Discard the cooked spring onion and ginger from underneath.',
      'Scatter the shredded ginger, spring onion and chilli over the fish.',
      'Heat the oil until it just begins to smoke and pour it slowly over the aromatics — it should hiss and sizzle.',
      'Pour the warm soy sauce around the fish, not over it, and finish with coriander.'
    ],
    tips: [
      'Twelve minutes for a 700 g fish. Check at the bone.',
      'Pour off the collected liquid. It is the usual culprit.',
      'Smoking oil over raw shreds, and sauce around the fish, not over it.'
    ],
    pair: ['Steamed rice', 'Blanched choy sum', 'Green tea'],
    store: 'Best immediately. Refrigerated 1 day at most.',
    nut: [330, 38, 6, 17, 1, 3, 1290]
  }
};
