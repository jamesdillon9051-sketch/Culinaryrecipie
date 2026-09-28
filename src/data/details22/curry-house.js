'use strict';

/**
 * Volume twenty-two — the British curry house.
 *
 * The catalogue had chicken tikka masala and korma, but not the rest of the
 * menu a British curry house prints: jalfrezi, madras, balti, dhansak, bhuna,
 * pathia, and the sides ordered with them. They are not the same curry with the
 * chilli turned up. Each has its own method — a stir-fried vegetable finish, a
 * tamarind sourness, a lentil base, a sauce fried until the oil separates.
 */

module.exports = {
  'chicken-jalfrezi': {
    d: 'Chicken in a thick, sharp onion and tomato masala, finished with peppers, onion and green chillies stir-fried separately for crunch. One hour.',
    meta: 'Chicken jalfrezi: tender chicken in a thick onion and tomato masala, topped with charred, crunchy peppers, onion and fresh green chillies.',
    kw: ['chicken jalfrezi', 'chicken jalfrezi recipe', 'restaurant style chicken jalfrezi', 'jalfrezi curry sauce', 'chicken jalfrezi with peppers'],
    why: 'A jalfrezi is a stir-fry as much as a curry. The sauce is a plain, sharp onion and tomato masala, cooked thick enough to coat, and the vegetables are fried separately and added at the end so the peppers and onion keep their bite and their char instead of dissolving into it. That contrast, a rich soft sauce against crunchy, fiery pieces, is the dish. Fresh green chillies give a bright, immediate heat, unlike the deep, dried-chilli heat of a madras.',
    ing: [
      '# For the sauce',
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '2 onions, finely chopped',
      '4 garlic cloves, minced',
      '4 cm fresh ginger, grated',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp Kashmiri chilli powder',
      '400 g tin chopped tomatoes',
      '1 tbsp tomato purée',
      '1 tsp sugar',
      '1 tsp fine sea salt',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '# For the finish',
      '1 tbsp vegetable oil',
      '1 red pepper, cut into 3 cm pieces',
      '1 green pepper, cut into 3 cm pieces',
      '1 large onion, cut into petals',
      '2 green chillies, slit lengthways',
      '1 tsp garam masala',
      '3 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large deep pan over medium heat, add the cumin seeds and let them sizzle for 20 seconds.',
      'Add the chopped onions and cook 12 minutes, stirring, until deep golden. Add the garlic and ginger and cook 2 minutes.',
      'Stir in the ground cumin, coriander, turmeric and chilli powder and cook 1 minute.',
      'Add the tomatoes, purée, sugar and salt and simmer 10 minutes, until thick and the oil begins to separate at the edges.',
      'Add the chicken, cover and simmer 15 minutes, stirring now and then, until cooked through and 74°C / 165°F.',
      'Meanwhile heat the tablespoon of oil in a frying pan over high heat and stir-fry the peppers, onion petals and green chillies for 4 minutes, until charred at the edges but still crunchy.',
      'Fold the vegetables into the curry with the garam masala and half the coriander.',
      'Serve scattered with the rest of the coriander.'
    ],
    tips: [
      'Cook the peppers and onion separately. In the sauce they turn soft and lose the point of the dish.',
      'Take the onions to deep golden. That colour is the base of the sauce.',
      'Slit the green chillies and leave the seeds in for more heat.'
    ],
    pair: ['Basmati rice', 'Peshwari naan', 'A cold lager'],
    store: 'Refrigerate up to 4 days and reheat gently, adding the vegetables fresh if you can. Freeze the sauce and chicken for 3 months.',
    nut: [432, 36, 18, 24, 5, 10, 900]
  },

  'chicken-madras': {
    d: 'A hot, sour, deep-red curry of chicken in tomato and tamarind, built on toasted mustard seeds and madras curry powder. Sixty-five minutes.',
    meta: 'Chicken madras: a hot, tangy, deep-red curry of chicken in a tomato and tamarind sauce, with toasted mustard seeds and madras curry powder.',
    kw: ['chicken madras', 'chicken madras recipe', 'hot chicken madras curry', 'madras curry sauce', 'chicken madras with tamarind'],
    why: 'Madras is the hot one on the British menu, and its heat is only part of it: the sauce is sour as well, with tamarind or lemon supplying the tang that a korma or a tikka masala lacks. The curry powder is fried in the oil with mustard seeds first, which releases the oils in the spices and takes off the raw, dusty edge. A madras should be dark red, thin enough to pour but never soupy, and hot enough to make you sweat without covering the spices.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp black mustard seeds',
      '2 onions, finely chopped',
      '4 garlic cloves, minced',
      '4 cm fresh ginger, grated',
      '2 tbsp madras curry powder',
      '1 tsp hot chilli powder',
      '1 tsp ground turmeric',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tbsp tamarind paste',
      '300 ml water',
      '1 tsp sugar',
      '1 tsp fine sea salt',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '2 dried red chillies',
      '3 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large deep pan over medium heat and add the mustard seeds. When they pop, add the onions and cook 12 minutes until deep golden.',
      'Add the garlic and ginger and cook 2 minutes.',
      'Stir in the curry powder, chilli powder and turmeric and cook 1 minute, stirring, so they toast without burning.',
      'Add the tomatoes, purée, tamarind, water, sugar and salt and simmer 10 minutes, until it darkens and thickens.',
      'Add the chicken and dried chillies and simmer, partly covered, 20 minutes, until the chicken is tender and 74°C / 165°F.',
      'Taste and adjust the salt, sugar and tamarind: it should be hot, sour and slightly sweet.',
      'Scatter with the coriander and serve.'
    ],
    tips: [
      'Toast the curry powder in the oil. Raw curry powder tastes dusty.',
      'Taste for sourness at the end. Add tamarind a little at a time.',
      'Use dried chillies for the depth of heat and fresh ones for freshness.'
    ],
    pair: ['Plain basmati rice', 'Cooling raita', 'Poppadoms'],
    store: 'Refrigerate up to 4 days. The flavour improves overnight. Freeze for 3 months.',
    nut: [406, 36, 16, 22, 4, 9, 880]
  },

  'chicken-balti': {
    d: 'The Birmingham curry: chicken cooked fast and hot in a deep pan with lots of ginger, garlic, fenugreek leaves and coriander. Forty-five minutes.',
    meta: 'Chicken balti: the Birmingham curry cooked fast and hot in a deep pan with plenty of ginger, garlic, dried fenugreek leaves and fresh coriander.',
    kw: ['chicken balti', 'chicken balti recipe', 'birmingham balti curry', 'balti curry sauce', 'chicken balti with fenugreek'],
    why: 'A balti is defined by speed and the vessel. It is cooked at a high heat in a thin, deep pan, so the sauce is fresh and sharp rather than long-simmered, and the spices stay bright. The flavour comes from three things: lots of fresh ginger and garlic, a large handful of coriander, and dried fenugreek leaves crushed in at the end, which give the characteristic bitter, maple-like scent. It is served in the pan it is cooked in, and eaten by tearing naan and scooping.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '2 onions, finely sliced',
      '5 garlic cloves, minced',
      '5 cm fresh ginger, grated',
      '1 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '400 g tin chopped tomatoes',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '1 tsp fine sea salt',
      '2 tsp garam masala',
      '1 tbsp dried fenugreek leaves',
      '2 green chillies, sliced',
      '5 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a wide, deep pan or karahi over high heat and fry the cumin seeds for 15 seconds.',
      'Add the onions and cook 6 minutes, stirring, until golden at the edges.',
      'Add the garlic and ginger and cook 1 minute.',
      'Stir in the ground cumin, coriander, turmeric and chilli powder and cook 30 seconds.',
      'Tip in the tomatoes and salt and cook 5 minutes over high heat, stirring, until thick.',
      'Add the chicken and cook 12 minutes over medium-high heat, stirring often, until cooked through and the sauce clings.',
      'Rub the fenugreek leaves between your palms into the pan and add the garam masala, green chillies and coriander.',
      'Serve straight from the pan with naan.'
    ],
    tips: [
      'Keep the heat high. A balti is fast and fresh, not slow-simmered.',
      'Crush the dried fenugreek leaves between your palms as you add them.',
      'Serve in the pan and eat with torn naan.'
    ],
    pair: ['Garlic naan', 'Peshwari naan', 'A cold lager'],
    store: 'Refrigerate up to 4 days and reheat quickly over high heat. Freeze for 3 months.',
    nut: [398, 36, 14, 22, 4, 8, 850]
  },

  'chicken-dhansak': {
    d: 'Chicken in a lentil-thickened curry, hot, sweet and sour at once, with a little pineapple. The Parsi dish as the British menu prints it. Seventy minutes.',
    meta: 'Chicken dhansak: chicken simmered in a red lentil curry that is hot, sweet and sour at once, with pineapple and lemon. A Parsi dish, British style.',
    kw: ['chicken dhansak', 'chicken dhansak recipe', 'lentil curry with chicken', 'dhansak curry sauce', 'chicken dhansak with pineapple'],
    why: 'Dhansak is the one curry on the menu that is thickened by lentils rather than by onion or cream. Red lentils cook down to a purée that gives the sauce its body and a slight sweetness, and the dish balances three flavours against each other, heat from chilli, sweetness from pineapple or jaggery and sourness from lemon or tamarind. The lentils go into the pot separately and are added later, so the chicken cooks in a spiced tomato sauce first and is not overcooked while the lentils soften.',
    ing: [
      '150 g red lentils, rinsed',
      '750 ml water',
      '1 tsp ground turmeric',
      '3 tbsp vegetable oil',
      '1 onion, finely chopped',
      '4 garlic cloves, minced',
      '4 cm fresh ginger, grated',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp chilli powder',
      '2 tsp garam masala',
      '1 tbsp tomato purée',
      '200 g tinned chopped tomatoes',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '1 tsp fine sea salt',
      '100 g tinned pineapple chunks, drained',
      'Juice of 1 lemon',
      '3 tbsp chopped coriander'
    ],
    st: [
      'Put the lentils, water and turmeric in a pan, bring to a boil and simmer 20 minutes, stirring, until the lentils have broken down to a thick purée. Set aside.',
      'Meanwhile heat the oil in a large pan over medium heat and cook the onion for 10 minutes until golden.',
      'Add the garlic and ginger for 2 minutes, then the cumin, coriander, chilli powder and 1 teaspoon of the garam masala for 1 minute.',
      'Stir in the tomato purée and tomatoes and simmer 5 minutes.',
      'Add the chicken and salt and cook, covered, 15 minutes until tender.',
      'Stir in the lentil purée and the pineapple and simmer 10 minutes more, adding a splash of water if it is too thick.',
      'Take off the heat and stir in the lemon juice, remaining garam masala and coriander. Taste for balance: hot, sweet and sour.'
    ],
    tips: [
      'Cook the lentils until they collapse. That is the thickener.',
      'Balance the three flavours at the end with lemon, salt and a pinch of sugar.',
      'Add the pineapple late, or it disappears into the sauce.'
    ],
    pair: ['Pilau rice', 'A cold lager', 'Poppadoms'],
    store: 'Refrigerate up to 4 days. It thickens as it sits, so loosen with water. Freeze for 3 months.',
    nut: [432, 40, 32, 16, 8, 14, 850]
  },

  'chicken-bhuna': {
    d: 'Chicken in a thick, dry masala made by frying onions and tomatoes down until the oil separates, with hardly any liquid added. Seventy-five minutes.',
    meta: 'Chicken bhuna: chicken in a thick, intense masala made by cooking onions and tomatoes down until the oil separates, with almost no added liquid.',
    kw: ['chicken bhuna', 'chicken bhuna recipe', 'bhuna curry', 'dry chicken curry with thick masala', 'chicken bhuna gosht style'],
    why: 'Bhuna is a technique before it is a curry: the word means to fry the spices and the masala until the water has gone and the oil separates out at the edges, then to keep adding small splashes of water and frying again. The result is a sauce with no free liquid, intensely concentrated and clinging to the chicken. It takes patience rather than skill: the onions must be cooked down for twenty minutes, the tomatoes must be reduced until they are jammy, and the chicken cooks in what is left.',
    ing: [
      '4 tbsp vegetable oil',
      '3 onions, finely chopped',
      '5 garlic cloves, minced',
      '5 cm fresh ginger, grated',
      '2 tsp ground coriander',
      '2 tsp ground cumin',
      '1 tsp ground turmeric',
      '1.5 tsp Kashmiri chilli powder',
      '400 g tin chopped tomatoes',
      '1 tsp fine sea salt',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '2 green chillies, sliced',
      '2 tsp garam masala',
      '4 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large heavy pan over medium heat, add the onions and cook 20 minutes, stirring often, until deep brown and reduced to a paste.',
      'Add the garlic and ginger and cook 2 minutes.',
      'Add the coriander, cumin, turmeric and chilli powder with a splash of water and fry 2 minutes.',
      'Add the tomatoes and salt and cook 12 minutes, stirring, until the mixture is thick and jammy and the oil separates at the edges.',
      'Add the chicken and stir to coat. Cook, covered, 10 minutes.',
      'Uncover and cook 10 minutes more over medium-high heat, adding water a tablespoon at a time and frying again, until the sauce is thick and clinging.',
      'Stir in the green chillies, garam masala and half the coriander.',
      'Serve scattered with the remaining coriander.'
    ],
    tips: [
      'Cook the onions down for the full 20 minutes. They are the sauce.',
      'Add water only a spoonful at a time. Bhuna is meant to be dry.',
      'You know the masala is ready when the oil separates and pools at the edges.'
    ],
    pair: ['Chapatis', 'Plain basmati rice', 'Cucumber raita'],
    store: 'Refrigerate up to 4 days and reheat gently with a splash of water. Freeze for 3 months.',
    nut: [428, 37, 16, 24, 4, 9, 840]
  },

  'chicken-pathia': {
    d: 'A hot, sweet and sour curry of chicken in a thick tomato sauce, sharpened with lemon and tamarind and sweetened with sugar. Fifty-five minutes.',
    meta: 'Chicken pathia: a hot, sweet and sour Parsi-style curry of chicken in a thick tomato sauce, sharpened with lemon and tamarind and balanced with sugar.',
    kw: ['chicken pathia', 'chicken pathia recipe', 'hot sweet and sour chicken curry', 'pathia curry sauce', 'parsi style chicken pathia'],
    why: 'Pathia sits between a madras and a sweet and sour: it is as hot as the first, but it has a pronounced sweetness and a sharp acidity from lemon and tamarind, and a thick sauce rather than a thin one. The trick is the balance, which is why the tomato purée goes in early to cook down and sweeten, and the sugar and the sour elements are adjusted at the end by taste. It is a dish for people who like curry with a bite of acid.',
    ing: [
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '4 garlic cloves, minced',
      '4 cm fresh ginger, grated',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1.5 tsp hot chilli powder',
      '3 tbsp tomato purée',
      '200 g tinned chopped tomatoes',
      '200 ml water',
      '1 tbsp tamarind paste',
      '2 tbsp sugar',
      '1 tsp fine sea salt',
      '700 g boneless skinless chicken thighs, cut into 3 cm pieces',
      'Juice of 1 lemon',
      '3 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large pan over medium heat and cook the onions 10 minutes until golden. Add the garlic and ginger for 2 minutes.',
      'Stir in the cumin, coriander, turmeric and chilli powder and cook 1 minute.',
      'Add the tomato purée and cook 3 minutes, stirring, until it darkens and smells sweet.',
      'Add the tomatoes, water, tamarind, sugar and salt and simmer 10 minutes.',
      'Add the chicken and simmer, partly covered, 20 minutes, until tender and 74°C / 165°F, and the sauce is thick.',
      'Stir in the lemon juice and taste: it should be hot, sweet and sour in balance. Adjust with sugar, lemon or salt.',
      'Scatter with the coriander and serve.'
    ],
    tips: [
      'Cook the purée until it darkens. Raw purée is sharp and metallic.',
      'Adjust sugar and lemon at the end. The balance is the point.',
      'Add water gradually. Pathia should be thick.'
    ],
    pair: ['Basmati rice', 'Plain naan', 'Poppadoms'],
    store: 'Refrigerate up to 4 days and freeze for 3 months.',
    nut: [426, 37, 20, 22, 4, 14, 870]
  },

  'saag-aloo': {
    d: 'Potatoes and spinach fried with cumin, garlic and ginger in a dry, spiced pan curry. The side dish that is a meal. Forty minutes.',
    meta: 'Saag aloo: cubed potatoes and spinach fried with cumin seeds, garlic, ginger, turmeric and chilli into a dry, vibrant vegan curry. Ready in 40 minutes.',
    kw: ['saag aloo', 'saag aloo recipe', 'spinach and potato curry', 'vegan saag aloo', 'dry potato and spinach curry'],
    why: 'The potatoes are parboiled first so they are just tender, which lets them brown in the pan instead of stewing, and the spinach goes in at the end so it wilts in the heat of the potatoes and keeps its colour. It is a dry curry, so the seasoning has to be in the fat: cumin seeds crackled in the oil, then onion, garlic, ginger and ground spices fried before the vegetables go in. The lemon at the end is not garnish, it is what lifts the spinach.',
    ing: [
      '600 g waxy potatoes, cut into 2 cm cubes',
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, finely chopped',
      '3 garlic cloves, minced',
      '3 cm fresh ginger, grated',
      '1 tsp ground turmeric',
      '1 tsp ground coriander',
      '0.5 tsp chilli powder',
      '1 green chilli, sliced',
      '400 g fresh spinach, washed',
      '1 tsp fine sea salt',
      '1 tsp garam masala',
      'Juice of 1 lemon'
    ],
    st: [
      'Boil the potatoes in salted water for 6 minutes, until just tender at the edges. Drain and let them steam-dry for a few minutes.',
      'Heat the oil in a large deep pan over medium-high heat and add the cumin seeds. When they sizzle, add the onion and cook 6 minutes until golden.',
      'Add the garlic, ginger and green chilli for 1 minute, then the turmeric, coriander and chilli powder for 30 seconds.',
      'Add the potatoes and salt and cook 5 minutes, turning, until browned in places.',
      'Add the spinach in handfuls, turning it into the potatoes until it wilts, about 3 minutes.',
      'Stir in the garam masala and lemon juice and cook 1 minute more.',
      'Serve hot.'
    ],
    tips: [
      'Parboil the potatoes so they brown instead of stewing.',
      'Add the spinach last so it keeps its colour.',
      'Finish with lemon. It lifts the whole dish.'
    ],
    pair: ['Chapatis', 'Dal', 'Chicken bhuna'],
    store: 'Refrigerate up to 3 days and reheat in a pan. Freeze for 2 months, though the potatoes soften.',
    nut: [238, 7, 30, 10, 6, 3, 620]
  },

  'bombay-potatoes': {
    d: 'Tender potatoes tossed in mustard seeds, turmeric, chilli and tomato until they are coated in a dry, golden masala. Forty-five minutes.',
    meta: 'Bombay potatoes: tender waxy potatoes tossed in toasted mustard and cumin seeds, turmeric, chilli and tomato, coated in a dry golden masala.',
    kw: ['bombay potatoes', 'bombay potatoes recipe', 'bombay aloo', 'spiced potatoes side dish', 'curry house bombay potatoes'],
    why: 'The potatoes are boiled until tender and the spices are cooked separately in the pan, so that the potatoes can be added to a hot, fragrant base and tossed just long enough to take on colour. Mustard seeds are the sign of a good one: they pop in the hot oil and release a nutty, sharp flavour, and the turmeric turns the whole pan golden. A tomato breaks down to a light coating instead of a sauce, and the dish is dry, which is what separates it from a potato curry.',
    ing: [
      '800 g waxy potatoes, cut into 3 cm chunks',
      '3 tbsp vegetable oil',
      '1 tsp black mustard seeds',
      '1 tsp cumin seeds',
      '1 onion, finely chopped',
      '3 garlic cloves, minced',
      '2 cm fresh ginger, grated',
      '1 tsp ground turmeric',
      '1 tsp ground coriander',
      '0.5 tsp chilli powder',
      '2 tomatoes, chopped',
      '1 tsp fine sea salt',
      '1 tsp garam masala',
      '3 tbsp chopped coriander',
      'Juice of 0.5 lemon'
    ],
    st: [
      'Boil the potatoes in salted water for 10 to 12 minutes, until tender but holding their shape. Drain and let them steam-dry.',
      'Heat the oil in a large frying pan over medium-high heat and add the mustard seeds. When they pop, add the cumin seeds for 10 seconds.',
      'Add the onion and cook 6 minutes until soft and golden, then the garlic and ginger for 1 minute.',
      'Stir in the turmeric, ground coriander and chilli powder for 30 seconds.',
      'Add the tomatoes and salt and cook 4 minutes until they have broken down into a thick paste.',
      'Add the potatoes and toss gently for 5 minutes, until coated and lightly crisp in places.',
      'Stir in the garam masala, coriander and lemon juice and serve.'
    ],
    tips: [
      'Pop the mustard seeds in hot oil. They give the dish its nutty depth.',
      'Boil the potatoes until just tender. Overcooked ones break up in the pan.',
      'Toss gently so the potatoes stay whole and take on the golden colour.'
    ],
    pair: ['Chicken madras', 'Chapatis', 'Cucumber raita'],
    store: 'Refrigerate up to 3 days and reheat in a hot pan or the oven at 200°C for 10 minutes. Freeze for 2 months.',
    nut: [244, 5, 38, 8, 5, 4, 580]
  },

  'onion-bhajis': {
    d: 'Sliced onion bound with spiced gram flour batter and fried into crisp, lacy golden clusters. The curry house starter, in forty minutes.',
    meta: 'Onion bhajis: thinly sliced onion in a spiced gram flour batter with cumin, nigella and chilli, fried until crisp, lacy and golden. Vegan and gluten-free.',
    kw: ['onion bhajis', 'onion bhaji recipe', 'crispy onion bhajis', 'gram flour onion fritters', 'curry house onion bhaji'],
    why: 'The batter is barely a batter: just enough gram flour and water to glue slices of onion together, with salt drawn into the onion first so that it releases its own liquid and the mixture needs almost no added water. That is what keeps the bhaji crisp rather than doughy, since the thin coating fries into a lattice around loose strands of onion. Fried at a steady 175°C they are cooked through and crisp in about five minutes, and no hotter.',
    ing: [
      '3 large onions, halved and thinly sliced',
      '1 tsp fine sea salt',
      '150 g gram flour (besan)',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp nigella seeds',
      '1 green chilli, finely chopped',
      '3 tbsp chopped coriander',
      '1 tsp baking powder',
      '3 to 5 tbsp cold water',
      '750 ml vegetable oil, for frying',
      'Mango chutney and raita, to serve'
    ],
    st: [
      'Toss the sliced onions with the salt in a large bowl and leave for 15 minutes, until they release their liquid.',
      'Add the gram flour, cumin, ground coriander, turmeric, chilli powder, nigella seeds, green chilli, fresh coriander and baking powder and mix with your hands.',
      'Add the water a tablespoon at a time until the onions are just held together by a thick, sticky batter. Do not make it wet.',
      'Heat the oil to 175°C / 350°F in a deep pan.',
      'Drop in heaped tablespoons of the mixture, 5 or 6 at a time, and fry 4 to 5 minutes, turning once, until deep golden and crisp.',
      'Drain on a rack and season with a pinch of salt.',
      'Serve hot with mango chutney and raita.'
    ],
    tips: [
      'Salt the onions first. They release water, so you need little in the batter.',
      'Keep the batter thick and sticky. A wet batter fries into a doughy ball.',
      'Fry at 175°C. Hotter browns the outside before the onions cook.'
    ],
    pair: ['Mango chutney', 'Cucumber raita', 'A cold lager'],
    store: 'Best eaten hot. Refrigerate up to 2 days and re-crisp at 200°C for 8 minutes. Freeze cooked bhajis for 2 months.',
    nut: [212, 6, 20, 12, 4, 6, 480]
  },

  'peshwari-naan': {
    d: 'A soft yeast naan stuffed with coconut, almonds and sultanas and cooked in a hot pan until blistered. Forty-five minutes, plus rising.',
    meta: 'Peshwari naan: soft yeasted flatbread stuffed with a sweet filling of coconut, ground almonds and sultanas, cooked in a hot pan until blistered.',
    kw: ['peshwari naan', 'peshwari naan recipe', 'sweet coconut naan bread', 'stuffed naan with coconut and sultanas', 'homemade peshwari naan'],
    why: 'The dough is a yogurt-and-milk dough, soft and slightly sticky, because that is what makes the naan puff and stay tender. The sweet filling of coconut, almonds and sultanas sits inside it, and the trick is sealing it completely and rolling gently so it does not break through. Cooked on a very hot, dry pan or a stone, the naan blisters and chars in patches, and brushing it with ghee straight after keeps it soft.',
    ing: [
      '# For the dough',
      '350 g strong white bread flour',
      '7 g instant yeast',
      '1 tsp sugar',
      '0.75 tsp fine sea salt',
      '1 tsp baking powder',
      '100 g plain yogurt',
      '120 ml warm milk',
      '1 tbsp vegetable oil',
      '# For the filling',
      '40 g desiccated coconut',
      '40 g ground almonds',
      '40 g sultanas',
      '2 tbsp sugar',
      '2 tbsp milk',
      '# To finish',
      '2 tbsp ghee or melted butter'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt and baking powder. Add the yogurt, milk and oil and mix to a soft dough, then knead 8 minutes until smooth.',
      'Cover and leave to rise for 1 hour, until doubled.',
      'Mix the coconut, ground almonds, sultanas, sugar and milk into a thick paste.',
      'Divide the dough into 6 pieces. Flatten each, put a spoonful of filling in the middle, gather the edges over it and pinch to seal.',
      'Roll each stuffed ball out gently to a teardrop about 5 mm thick.',
      'Heat a heavy frying pan over high heat until very hot. Cook each naan 2 minutes until it puffs and blisters, then flip and cook 1 to 2 minutes.',
      'Brush with the ghee and serve warm.'
    ],
    tips: [
      'Seal the filling well and roll gently. Pressing hard splits the dough.',
      'Use a very hot dry pan. A cooler one dries the naan instead of blistering it.',
      'Brush with ghee straight away. It keeps the naan soft.'
    ],
    pair: ['Chicken balti', 'Chicken korma', 'Lamb bhuna'],
    store: 'Best fresh. Keep wrapped 1 day and warm in a dry pan. Freeze for 2 months.',
    nut: [312, 9, 42, 12, 3, 9, 380],
    rest: [60, 'rising the dough']
  },

  'chip-shop-curry-sauce': {
    d: 'The mild, sweet, golden sauce poured over chips at every British chippy, thickened with flour and lifted with apple. Forty minutes.',
    meta: 'Chip shop curry sauce: the mild, sweet, golden British takeaway sauce made with onion, apple, curry powder and a little sugar. Vegan.',
    kw: ['chip shop curry sauce', 'chip shop curry sauce recipe', 'british chippy curry sauce', 'mild curry sauce for chips', 'takeaway curry sauce'],
    why: 'This is not an Indian curry and is not meant to be. It is a British invention, a smooth, sweet, mild sauce built on a roux, curry powder, sweetness from apple and sugar and a savoury depth from stock, whose job is to make chips taste better. The onion is cooked very soft and blended, so the sauce is glossy rather than gritty, and the curry powder is fried in the fat first to bring out the flavour. Sugar and a splash of vinegar at the end finish the sweet-and-savoury balance.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '1 eating apple, peeled and grated',
      '2 garlic cloves, minced',
      '2 tbsp mild curry powder',
      '1 tsp ground turmeric',
      '2 tbsp plain flour',
      '500 ml vegetable stock',
      '1 tbsp tomato purée',
      '1 tbsp sugar',
      '1 tsp cider vinegar',
      '0.75 tsp fine sea salt'
    ],
    st: [
      'Heat the oil in a saucepan over medium heat and cook the onion and apple for 8 minutes until very soft.',
      'Add the garlic and cook 1 minute.',
      'Stir in the curry powder and turmeric and cook 1 minute, then the flour and cook 1 minute more.',
      'Gradually whisk in the stock, then add the tomato purée, sugar and salt.',
      'Simmer 15 minutes, stirring often, until thick and glossy.',
      'Blend until completely smooth with a stick blender and stir in the vinegar.',
      'Serve hot over chips, with rice or with fried chicken.'
    ],
    tips: [
      'Cook the onion and apple until very soft. They give the sweetness and body.',
      'Fry the curry powder for a minute so it loses its raw taste.',
      'Blend it smooth. A chippy sauce is glossy and silky.'
    ],
    pair: ['Chips', 'Fried chicken', 'Steamed rice'],
    store: 'Refrigerate up to 5 days and reheat until steaming. Freeze in portions for 3 months.',
    nut: [113, 3, 14, 5, 2, 8, 480]
  }
};
