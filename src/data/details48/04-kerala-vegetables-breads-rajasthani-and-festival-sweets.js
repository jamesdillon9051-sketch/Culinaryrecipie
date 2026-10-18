'use strict';

/**
 * Volume forty-eight — Indian restaurant and regional favourites, fourth part.
 *
 * Twenty-five dishes: Kerala thoran, olan and erissery, meen pollichathu,
 * three aubergine and okra dishes, four stuffed and layered breads, Sindhi
 * kadhi, Rajasthani gatte and laal maas, pyaaz kachori and mirchi vada, and
 * the festival sweets and snacks: rabri, moong dal halwa, motichoor and
 * coconut ladoo, basundi, puran poli, modak, chakli and murukku. Waits of
 * an hour or more are declared as rest. Nutrition is estimated by npm run
 * calc.
 */

module.exports = {
  'thoran': {
    d: 'Finely shredded cabbage and carrot stir-cooked with mustard seeds, curry leaves, green chilli and a generous handful of fresh coconut.',
    meta: 'Thoran: shredded cabbage and carrot cooked quickly with mustard seeds, curry leaves and fresh coconut. Four servings, cooked for 10 minutes.',
    kw: ['thoran', 'cabbage thoran', 'kerala thoran', 'thoran recipe', 'kerala cabbage dry curry with coconut'],
    why: 'Cabbage, a carrot, a spoonful of coconut: thoran is what a Kerala kitchen makes when there is little time and half a cabbage in the fridge. It is a dry dish, with no sauce, and what clings to the vegetables is the coconut.\n\nShred the vegetables very fine. The pieces should be about the size of a grain of rice, small enough to cook in 5 minutes and to mix evenly with the coconut. A food processor with a shredding blade does it in seconds.\n\nThe coconut is ground with green chilli, garlic, cumin and turmeric to a coarse crumb, not a paste. **Pulse it, do not blend it.** A paste turns the dish wet and heavy.\n\nHeat coconut oil, crackle the mustard seeds, then add the urad dal and curry leaves until the dal turns golden. Add the vegetables, cover for 3 minutes, then uncover and fold in the coconut. Cook for 2 minutes more, stirring. The cabbage should keep a little bite and its colour.',
    ing: [
      '2 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      '1 dried red chilli',
      '1 sprig curry leaves',
      '400 g white cabbage, finely shredded',
      '1 carrot, about 100 g, grated',
      '1/2 tsp ground turmeric',
      '3/4 tsp salt',
      '60 g grated fresh coconut',
      '2 green chillies',
      '2 garlic cloves',
      '1/2 tsp cumin seeds'
    ],
    st: [
      'Pulse the coconut, green chillies, garlic and cumin together to a coarse crumb.',
      'Heat the oil in a wide pan. Add the mustard seeds until they pop, then the urad dal, dried chilli and curry leaves for 30 seconds.',
      'Add the cabbage, carrot, turmeric and salt. Cover and cook over a medium heat for 3 minutes.',
      'Uncover, fold in the coconut mixture and cook for 2 minutes, stirring, until the vegetables are just tender.'
    ],
    tips: [
      'Shred the cabbage finely and evenly.',
      'Do not add water; the cabbage releases enough.',
      'Serve at once, while the coconut is fresh.'
    ],
    pair: ['Steamed rice', 'Sambar', 'Fish curry', 'Pappadam'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [172, 3, 13, 12, 5, 6, 500]
  },

  'olan': {
    d: 'A pale, mild Kerala stew of ash gourd and black-eyed beans simmered in coconut milk, seasoned with green chilli and finished with coconut oil.',
    meta: 'Olan: ash gourd and black-eyed beans simmered in coconut milk with green chilli and coconut oil. Four servings, cooked for 20 minutes.',
    kw: ['olan', 'kerala olan', 'olan recipe', 'ash gourd and black eyed bean stew', 'coconut milk vegetable stew'],
    why: 'Olan comes with a Kerala feast, as the quietest dish on the leaf, and it should stay quiet. It has no turmeric, no mustard seeds, no spice at all except the heat of green chillies, and the whole point is a clean, mild coconut flavour.\n\nThe vegetable is ash gourd, a pale, watery winter melon sold in Asian shops. Courgette is the closest substitute and cooks even faster. Cut it into 3 cm pieces and simmer in a little water for 8 minutes, until just tender, with the green chillies and a pinch of salt. **Add the beans only once the gourd is nearly cooked.** Tinned black-eyed beans need only warming through.\n\nThe coconut milk goes in at the end, in two stages. Thin milk goes in first, to heat gently for 3 minutes. Thick milk follows, off the boil. If it boils hard, the coconut oil separates and the stew looks greasy.\n\nFinish with a spoonful of raw coconut oil and a few curry leaves stirred in off the heat.',
    ing: [
      '400 g ash gourd or courgette, peeled and cut into 3 cm pieces',
      '3 green chillies, slit',
      '150 ml water',
      '1 tsp salt',
      '200 g tinned black-eyed beans, drained',
      '200 ml thin coconut milk (coconut milk diluted with 100 ml water)',
      '100 ml thick coconut milk',
      '1 tbsp coconut oil',
      '1 sprig curry leaves'
    ],
    st: [
      'Put the gourd, chillies, water and salt in a pan. Cover and simmer for 8 minutes until just tender.',
      'Add the black-eyed beans and thin coconut milk and warm through gently for 3 minutes.',
      'Lower the heat and stir in the thick coconut milk. Warm for 2 minutes without letting it boil.',
      'Off the heat, stir in the coconut oil and curry leaves.'
    ],
    tips: [
      'Do not let the coconut milk boil.',
      'Slit the chillies rather than chop them for a mild heat.',
      'Taste for salt before the coconut oil goes in.'
    ],
    pair: ['Steamed rice', 'Avial', 'Pappadam', 'Kerala fish curry'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [237, 6, 15, 17, 4, 5, 760]
  },

  'erissery': {
    d: 'Pumpkin and black-eyed beans cooked soft in a turmeric and pepper broth, thickened with a ground coconut paste and topped with roasted coconut.',
    meta: 'Erissery: pumpkin and black-eyed beans in a turmeric and pepper broth with ground and roasted coconut. Four servings, cooked for 30 minutes.',
    kw: ['erissery', 'kerala erissery', 'mathanga erissery', 'pumpkin erissery recipe', 'pumpkin and bean curry with coconut'],
    why: 'It looks like a thick pumpkin stew and tastes of two kinds of coconut, which is why the dish has more depth than its ingredients suggest. Erissery is part of the Onam feast in Kerala, but it is simple enough for an ordinary Tuesday.\n\nThe pumpkin and beans cook together, with turmeric, chilli and pepper, until the pumpkin starts to collapse. Mash a few pieces against the side of the pan to thicken the stew. **Do not drain off the cooking water.** Some of it makes the base of the sauce.\n\nHalf the coconut is ground into a smooth paste with cumin, and stirred in to bind everything. The other half is roasted in coconut oil, with mustard seeds and curry leaves, until it is deep golden brown. That roasted coconut goes on top, and it is the best part: sweet, nutty and a little crunchy.\n\nWatch the coconut closely. It changes from golden to bitter in under a minute, so keep stirring and take it off the heat early.',
    ing: [
      '400 g pumpkin, peeled and cut into 3 cm pieces',
      '200 g tinned black-eyed beans, drained',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1/2 tsp ground black pepper',
      '1 tsp salt',
      '200 ml water',
      '60 g grated fresh coconut, for the paste',
      '1/2 tsp cumin seeds',
      '2 tbsp coconut oil',
      '1 tsp mustard seeds',
      '40 g grated fresh coconut, for roasting',
      '1 sprig curry leaves'
    ],
    st: [
      'Put the pumpkin, beans, turmeric, chilli powder, pepper, salt and water in a pan. Cover and simmer for 15 minutes until the pumpkin is soft. Mash a few pieces against the pan.',
      'Grind the 60 g coconut and the cumin with 3 tablespoons of water to a smooth paste. Stir into the pan and simmer for 5 minutes.',
      'Heat the oil in a small pan. Add the mustard seeds until they pop, then the 40 g coconut and curry leaves.',
      'Stir for 2 to 3 minutes until the coconut turns deep golden. Spoon over the erissery.'
    ],
    tips: [
      'Watch the coconut closely; it burns fast.',
      'Use a firm pumpkin such as butternut.',
      'Add a splash of water if the stew is too thick.'
    ],
    pair: ['Steamed rice', 'Pappadam', 'Thoran', 'Pickle'],
    store: 'Keeps in the fridge for 2 days. Add the roasted coconut after reheating.',
    nut: [260, 6, 23, 16, 8, 6, 770]
  },

  'meen-pollichathu': {
    d: 'Fish fillets smeared with a thick shallot and tomato masala, wrapped in banana leaf or foil and cooked until the parcel is tender and scented.',
    meta: 'Meen pollichathu: fish with a thick shallot and tomato masala, wrapped in banana leaf or foil. Four servings, cooked for 25 minutes.',
    kw: ['meen pollichathu', 'kerala fish pollichathu', 'fish in banana leaf', 'pollichathu fish recipe', 'kerala fish masala parcel'],
    why: 'Most home versions come out watery, and the fix is to cook the masala until it is almost dry before it ever touches the fish. Pollichathu means roasted in a wrapper. The masala is a thick paste of shallots, ginger, garlic, tomato and spices, and it stays on the fish as a coating rather than turning into a sauce.\n\nThe first step is to season the fish with salt, turmeric and lemon juice for 15 minutes. Then cook the masala in coconut oil for 12 minutes, until the oil rises. Let it cool a little before spreading it on the fish. **A hot masala starts to cook the fish before it is wrapped.**\n\nBanana leaves are used traditionally, softened over a flame so they do not crack. They give a faint, smoky sweetness, and they are available frozen in Asian shops. Foil works well too, and the result is nearly as good.\n\nParcels are cooked in a frying pan or the oven for 25 minutes. Open one at the table: the steam carries the scent. Firm white fish such as bream, cod or haddock suits the dish.',
    ing: [
      '600 g firm white fish fillets',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '1 tbsp lemon juice',
      '3 tbsp coconut oil',
      '1 sprig curry leaves',
      '10 shallots, about 200 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 green chillies, chopped',
      '1 tsp chilli powder',
      '1 tsp ground coriander',
      '2 tomatoes, about 200 g, chopped',
      '1/2 tsp salt',
      '4 pieces banana leaf or foil, about 25 cm square'
    ],
    st: [
      'Rub the fish with the turmeric, first 1/2 tsp salt and lemon juice and leave for 15 minutes.',
      'Heat the oil, add the curry leaves and shallots and cook for 6 minutes until golden. Add the ginger and garlic paste, green chillies and spices, then the tomatoes and second 1/2 tsp salt. Cook for 12 minutes until thick and the oil separates. Cool for 5 minutes.',
      'Heat the oven to 200°C (180°C fan). Spread half the masala over four pieces of leaf or foil, lay on the fish and cover with the rest.',
      'Fold into sealed parcels. Cook on a tray for 25 minutes until the fish flakes.'
    ],
    tips: [
      'Pass banana leaves over a flame for a few seconds so they do not crack.',
      'Cook the masala until nearly dry.',
      'Open the parcels at the table for the best scent.'
    ],
    pair: ['Steamed rice', 'Kerala parotta', 'Lemon wedges', 'Cucumber salad'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [397, 30, 40, 13, 6, 20, 700]
  },

  'baingan-masala': {
    d: 'Aubergine pieces cooked with onion, tomato, ginger and ground spices until soft, with a thick sauce that clings.',
    meta: 'Baingan masala: aubergine pieces cooked with onion, tomato and ground spices into a thick sauce. Four servings, cooked for 30 minutes.',
    kw: ['baingan masala', 'baingan masala recipe', 'aubergine masala', 'eggplant masala curry', 'indian aubergine curry'],
    why: 'Autumn is when aubergines are firm, glossy and cheap, and a pan of this is one of the best uses of them. Baingan masala is a plain, everyday curry: aubergine cooked in a spiced onion and tomato sauce until the pieces are soft and the sauce thick.\n\nThe usual fault is greasy, collapsed aubergine. Salting helps. Cut the aubergine into 3 cm pieces, toss with salt and leave for 15 minutes, then pat dry. The salt draws out water and bitterness, and the pieces take up less oil. **Cook them in a hot pan with enough oil, and leave them alone for the first 3 minutes.** That gives colour and stops them breaking up.\n\nBuild the masala separately: onion cooked golden, then ginger and garlic, then tomatoes and spices, simmered until the oil shows at the edges. Return the aubergine, add a splash of water, cover, and cook gently for 10 minutes.\n\nFinish with garam masala and fresh coriander. The sauce should cling to each piece without pooling.',
    ing: [
      '2 aubergines, about 600 g, cut into 3 cm pieces',
      '1 tsp salt, for salting',
      '4 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, about 300 g, chopped',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '100 ml water',
      '1 tsp garam masala',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Toss the aubergine with the 1 tsp salt and leave for 15 minutes. Pat dry.',
      'Heat 3 tbsp of the oil in a wide pan over a high heat. Add the aubergine and cook for 8 minutes, turning, until browned. Remove.',
      'Add the remaining oil and the cumin seeds, then the onion, and cook for 6 minutes. Add the ginger and garlic paste for 1 minute.',
      'Add the tomatoes, coriander, turmeric, chilli powder and 1/2 tsp salt. Cook for 8 minutes until thick.',
      'Return the aubergine with the water, cover and cook gently for 10 minutes. Stir in the garam masala and coriander.'
    ],
    tips: [
      'Do not skip salting if your aubergines are large.',
      'Keep the pieces even so they cook together.',
      'Add a splash of water if the sauce looks dry.'
    ],
    pair: ['Chapati', 'Steamed rice', 'Dal', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [215, 3, 17, 15, 7, 9, 910]
  },

  'bharwa-baingan': {
    d: 'Small aubergines slit and stuffed with a spiced paste of peanuts, sesame, coconut and tamarind, then simmered in a thick masala.',
    meta: 'Bharwa baingan: small aubergines stuffed with a spiced peanut, sesame and coconut paste, then simmered. Four servings, cooked for 30 minutes.',
    kw: ['bharwa baingan', 'stuffed aubergine curry', 'bharli vangi', 'stuffed baby aubergines indian', 'bharwa baingan recipe'],
    why: 'In the first warm days of summer, when small purple aubergines turn up in the shops, this is one of the dishes worth making. Bharwa baingan, or stuffed aubergine, is a dish in which the filling is also the sauce, so the flavour goes right through the vegetable.\n\nChoose small, round or oval aubergines about 8 cm long, with the stalk on. Slit each into four from the base, stopping 1 cm short of the stalk so it holds together like a flower. **Soak them in salted water while you make the filling.** This stops the cut surfaces from browning and helps remove any bitterness.\n\nThe filling is roasted peanuts, sesame seeds and coconut, ground with chilli powder, coriander, cumin, a little jaggery and tamarind. Roast the nuts and seeds in a dry pan first for a deeper flavour. The paste should be thick and crumbly.\n\nPack it into the slits. Cook the aubergines in oil, turning gently, add water and the leftover filling, and simmer with the lid on for 15 minutes.',
    ing: [
      '8 small aubergines, about 500 g',
      '1 tsp salt, for soaking',
      '50 g roasted peanuts',
      '2 tbsp sesame seeds',
      '30 g desiccated coconut',
      '1 tsp chilli powder',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1 tbsp jaggery or brown sugar',
      '1 tbsp tamarind paste',
      '1/2 tsp salt',
      '4 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '1 sprig curry leaves',
      '200 ml water'
    ],
    st: [
      'Slit each aubergine into four from the base, leaving the stalk end whole. Soak in cold water with the 1 tsp salt for 10 minutes. Drain and pat dry.',
      'Dry-roast the peanuts, sesame seeds and coconut for 3 minutes. Grind with the chilli powder, coriander, cumin, turmeric, jaggery, tamarind, 1/2 tsp salt and 2 tablespoons of water to a thick paste.',
      'Stuff the paste into the aubergines, keeping back 2 tablespoons.',
      'Heat the oil in a wide pan. Add the mustard seeds and curry leaves, then the aubergines. Cook for 5 minutes, turning gently.',
      'Add the water and the leftover paste. Cover and simmer for 15 minutes until the aubergines are tender.'
    ],
    tips: [
      'Do not cut right through the aubergines.',
      'Turn them carefully with a spoon so they stay whole.',
      'Use baby aubergines of the same size.'
    ],
    pair: ['Bhakri or chapati', 'Steamed rice', 'Dal', 'Raita'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [347, 6, 20, 27, 7, 11, 920]
  },

  'bhindi-fry': {
    d: 'Okra pieces cooked with sliced onion, turmeric and amchur in a hot pan until dry, tender and not slimy.',
    meta: 'Bhindi fry: okra cooked with sliced onion, turmeric and amchur in a hot pan until dry and tender. Four servings, cooked for 20 minutes.',
    kw: ['bhindi fry', 'bhindi fry recipe', 'okra fry indian', 'dry okra with onion', 'bhindi do pyaza style'],
    why: 'Bhindi is the Hindi word for okra, and this is the dry, pan-cooked way to make it. Okra has a reputation for sliminess, but the sliminess is easy to manage, and there are three rules.\n\nThe first is that the okra must be completely dry before it is cut. Wash it, then spread it on a clean cloth for an hour, or wipe each pod. Water on the surface activates the mucilage. The second is to cut it into rounds about 1 cm thick, and leave the cut surface untouched in the pan for the first minutes. **High heat dries the surface before the slime forms.** The third is not to add salt until the end, since salt draws out liquid.\n\nCook the onion first, until it browns at the edges, then the okra, over a medium-high heat for 12 minutes with only occasional stirring. Do not cover the pan. Steam makes the okra gluey.\n\nAmchur (dried mango powder) goes in at the end for a sour finish; lemon juice does the same job. Add the salt and a little chilli powder, and serve at once.',
    ing: [
      '500 g okra, washed, dried and cut into 1 cm rounds',
      '4 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '2 onions, about 300 g, thinly sliced',
      '1/2 tsp ground turmeric',
      '1 tsp ground coriander',
      '1/2 tsp chilli powder',
      '1 tsp amchur (dried mango powder)',
      '3/4 tsp salt'
    ],
    st: [
      'Heat 2 tbsp of the oil in a wide pan. Add the cumin seeds, then the onions, and cook for 6 minutes until golden at the edges. Remove.',
      'Add the remaining oil and the okra to the pan. Cook over a medium-high heat for 12 minutes, stirring only now and then, until the okra is browned and no longer sticky.',
      'Return the onions and add the turmeric, coriander and chilli powder. Cook for 1 minute.',
      'Stir in the amchur and salt and serve at once.'
    ],
    tips: [
      'Dry the okra thoroughly before cutting.',
      'Keep the pan uncovered.',
      'Use lemon juice if you do not have amchur.'
    ],
    pair: ['Chapati', 'Dal', 'Steamed rice', 'Plain yoghurt'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day, though the okra softens.',
    nut: [206, 3, 17, 14, 6, 5, 460]
  },

  'paneer-paratha': {
    d: 'Whole wheat flatbreads stuffed with grated paneer, green chilli, coriander and spices, cooked on a griddle with ghee.',
    meta: 'Paneer paratha: whole wheat flatbreads stuffed with grated paneer, chilli and coriander, cooked with ghee. Four servings, cooked for 20 minutes.',
    kw: ['paneer paratha', 'paneer paratha recipe', 'stuffed paneer paratha', 'punjabi paneer paratha', 'paneer stuffed flatbread'],
    why: 'Most home versions burst on the griddle, and the cause is always the same: too much filling or too wet a filling. Paneer should be grated fine, mixed dry with the spices, and kept to about a tablespoon and a half per paratha. Anything more strains the dough.\n\nMake the dough soft, softer than for chapati, with whole wheat flour, a pinch of salt, a spoonful of oil and warm water. Knead for 5 minutes and rest it for 20. **A rested dough rolls thin without tearing.**\n\nFor the filling, grate the paneer and mix it with finely chopped green chilli, fresh coriander, ajwain, chilli powder, amchur and salt. The amchur adds tang, and the ajwain brings a sharp, thyme-like note.\n\nRoll the dough into a small disc, add the filling, gather the edges up and pinch them closed. Press flat, dust with flour, and roll gently to 15 cm. Cook on a hot griddle with ghee for about 2 minutes a side, pressing gently, until golden with brown spots.',
    ing: [
      '250 g whole wheat flour (atta)',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '130 ml warm water',
      '200 g paneer, grated',
      '1 green chilli, finely chopped',
      '2 tbsp chopped fresh coriander',
      '1/2 tsp ajwain seeds',
      '1/2 tsp chilli powder',
      '1/2 tsp amchur (dried mango powder)',
      '1/2 tsp salt',
      '3 tbsp ghee, for cooking'
    ],
    st: [
      'Mix the flour, first 1/2 tsp salt and oil. Add the water and knead for 5 minutes to a soft dough. Rest for 20 minutes.',
      'Mix the paneer, chilli, coriander, ajwain, chilli powder, amchur and second 1/2 tsp salt.',
      'Divide the dough into 8 balls. Roll each to 10 cm, add about 1 1/2 tablespoons of filling, gather the edges and pinch closed. Press flat and roll to 15 cm.',
      'Cook each paratha on a hot griddle for 2 minutes on one side. Flip, brush with ghee and cook for 2 minutes more, pressing gently, until golden.'
    ],
    tips: [
      'Do not overfill the paratha.',
      'Seal the edges well so they do not open.',
      'Roll gently and evenly.'
    ],
    pair: ['Plain yoghurt', 'Mango pickle', 'Butter', 'Masala chai'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and reheats on a griddle.',
    nut: [483, 17, 43, 27, 7, 2, 620]
  },

  'methi-paratha': {
    d: 'Layered whole wheat flatbreads with fresh fenugreek leaves, ajwain and spices, folded into triangles and cooked with ghee.',
    meta: 'Methi paratha: layered whole wheat flatbreads with fresh fenugreek, ajwain and spices, folded into triangles. Four servings, cooked for 20 minutes.',
    kw: ['methi paratha', 'methi paratha recipe', 'fenugreek paratha', 'punjabi methi paratha', 'layered paratha with fenugreek'],
    why: 'A breakfast for a table of four on a morning with a bunch of fresh fenugreek in the fridge. Methi paratha is a layered flatbread, and what separates it from a thepla is the folding and the ghee: the dough is rolled, brushed with ghee, folded into a triangle, and rolled again.\n\nFresh fenugreek has a bitter, grassy flavour that mellows when cooked. Pick the leaves from the stems, wash them, and chop them fine. If they taste too sharp, sprinkle with a little salt and leave for 10 minutes before squeezing out the liquid. **Dry leaves also work, in a smaller amount.** Use 2 tablespoons of dried fenugreek in place of the fresh.\n\nKnead the dough with the leaves, a little oil, ajwain, cumin and chilli powder. Rest it for 20 minutes. Divide into balls, roll out thin, brush with ghee, fold in half and then in half again to make a triangle, and roll to 15 cm.\n\nCook on a hot griddle with ghee for 2 minutes a side. The layers puff slightly and the surface turns golden with brown spots.',
    ing: [
      '250 g whole wheat flour (atta)',
      '60 g fresh fenugreek leaves, finely chopped',
      '1/2 tsp ajwain seeds',
      '1/2 tsp ground cumin',
      '1/2 tsp chilli powder',
      '3/4 tsp salt',
      '1 tbsp vegetable oil',
      '120 ml warm water',
      '4 tbsp ghee'
    ],
    st: [
      'Mix the flour, fenugreek, ajwain, cumin, chilli powder, salt and oil. Add the water gradually and knead for 5 minutes to a soft dough. Rest for 20 minutes.',
      'Divide into 8 balls. Roll each to 12 cm, brush with ghee, fold in half, brush again and fold into a triangle. Roll to about 15 cm.',
      'Cook on a hot griddle for 2 minutes on one side. Flip, brush with ghee and cook for 2 minutes more until golden with brown spots.',
      'Wrap in a cloth to keep warm.'
    ],
    tips: [
      'Do not add too much flour when rolling; it dries the layers.',
      'Use the back of a spoon to press down any bubbles.',
      'Add a pinch of sugar to balance the bitterness.'
    ],
    pair: ['Plain yoghurt', 'Pickle', 'Butter', 'Aloo sabzi'],
    store: 'Keeps wrapped for 1 day. Reheat on a griddle.',
    nut: [425, 10, 49, 21, 11, 1, 460]
  },

  'lachha-paratha': {
    d: 'Flaky, spiral-layered whole wheat flatbreads, rolled thin, brushed with ghee, pleated and coiled, then cooked on a hot griddle.',
    meta: 'Lachha paratha: flaky, spiral-layered whole wheat flatbreads brushed with ghee and cooked on a griddle. Four servings, cooked for 20 minutes.',
    kw: ['lachha paratha', 'lachha paratha recipe', 'layered paratha', 'flaky whole wheat paratha', 'punjabi lachha paratha'],
    why: 'What makes lachha paratha lachha? The word means ribbons or layers, and each paratha is built from them. A thin sheet of dough is brushed with ghee, dusted with flour, pleated like a fan and coiled into a spiral. When the coil is rolled flat, every pleat becomes a separate layer.\n\nThe dough is whole wheat flour, salt, a little oil and warm water, kneaded until soft and smooth and rested for 30 minutes. **Do not skimp on the ghee.** It is the fat between the layers that makes them separate in the pan. Brush it on thickly and sprinkle the flour thinly.\n\nRoll each ball into a very thin round, almost see-through at the edges. Pleat it in 1 cm folds, lift the pleated strip, and coil it into a spiral. Press the spiral flat with your palm and roll lightly to 15 cm. Heavy rolling squashes the layers together.\n\nCook on a hot griddle with ghee for 2 minutes a side. Crush each paratha gently between your palms as it comes off, and the layers open.',
    ing: [
      '300 g whole wheat flour (atta)',
      '3/4 tsp salt',
      '1 tbsp vegetable oil',
      '150 ml warm water',
      '5 tbsp ghee, melted',
      '2 tbsp plain flour, for dusting'
    ],
    st: [
      'Mix the flour and salt, add the oil and water and knead for 5 minutes to a soft dough. Rest for 30 minutes.',
      'Divide into 6 balls. Roll each into a thin round about 18 cm across. Brush with ghee and dust lightly with flour.',
      'Pleat the dough into 1 cm folds like a fan, then coil the strip into a spiral and tuck the end underneath.',
      'Press the spiral flat and roll gently to 15 cm.',
      'Cook on a hot griddle for 2 minutes on each side, brushing with ghee, until golden with brown spots. Crush gently between your palms to open the layers.'
    ],
    tips: [
      'Roll the first sheet thin; the thinner it is, the more layers you get.',
      'Do not press hard when rolling the coil.',
      'Cook on a hot griddle, not a cool one.'
    ],
    pair: ['Butter chicken', 'Dal makhani', 'Raita', 'Pickle'],
    store: 'Best eaten warm. Keeps wrapped for 1 day and reheats on a griddle.',
    nut: [468, 10, 53, 24, 8, 1, 450]
  },

  'makki-di-roti': {
    d: 'Flat, rustic Punjabi bread of maize flour and warm water, patted by hand and cooked on a griddle, traditionally served with sarson da saag.',
    meta: 'Makki di roti: Punjabi maize flour flatbreads patted by hand and cooked on a griddle. Four servings, cooked for 20 minutes.',
    kw: ['makki di roti', 'makki di roti recipe', 'punjabi maize flour roti', 'makki roti', 'maize flour flatbread'],
    why: 'Maize flour has no gluten, which is why the dough behaves nothing like wheat and why makki di roti scares people. It cracks, it crumbles, and it will not roll. All of that is normal, and none of it matters if you work with it instead of against it.\n\nUse makki ka atta, a finely ground yellow maize flour sold in Indian shops. Cornmeal and polenta are too coarse. Mix the flour with salt and add warm water gradually, kneading for a full 5 minutes. **The dough should feel soft and smooth, like Play-Doh.** If it cracks at the edges when pressed flat, it needs more water.\n\nNo rolling pin: the roti is patted out by hand between your palms or pressed on a sheet of greaseproof paper. Make the discs about 12 cm across and 5 mm thick, thinner at the edge. Thin edges crack. Thick centres stay raw.\n\nCook on a hot griddle for 3 minutes a side, then finish directly over the flame if you can. Spread with butter or ghee and serve hot, because makki roti stiffens as it cools.',
    ing: [
      '250 g maize flour (makki ka atta)',
      '1/2 tsp salt',
      '180 ml warm water',
      '1 tbsp plain flour, for dusting',
      '4 tbsp ghee or butter'
    ],
    st: [
      'Mix the maize flour and salt. Add the water gradually and knead for 5 minutes to a smooth, soft dough with no cracks.',
      'Divide into 6 balls. Pat each between oiled palms or press on greaseproof paper to a disc about 12 cm across.',
      'Heat a griddle over a medium-high heat. Cook each roti for 3 minutes on one side, then flip and cook for 3 minutes more, until speckled and cooked through.',
      'Spread with ghee or butter and serve hot.'
    ],
    tips: [
      'Keep your palms damp when patting the dough.',
      'Use warm, not cold, water.',
      'If a roti cracks at the edges, press the cracks together with wet fingers.'
    ],
    pair: ['Sarson da saag', 'Butter', 'Jaggery', 'Plain yoghurt'],
    store: 'Best eaten hot. Keeps for 1 day; reheat on a griddle with a little ghee.',
    nut: [332, 7, 49, 12, 2, 0, 300]
  },

  'sindhi-kadhi': {
    d: 'A tangy, thin stew of toasted gram flour, tamarind, fenugreek and mixed vegetables with a mustard and curry leaf tempering.',
    meta: 'Sindhi kadhi: a tangy stew of toasted gram flour, tamarind and mixed vegetables with a mustard tempering. Four servings, cooked for 35 minutes.',
    kw: ['sindhi kadhi', 'sindhi kadhi recipe', 'sindhi style gram flour curry', 'kadhi with vegetables and tamarind', 'sindhi kadhi chawal'],
    why: 'The first sign it is ready is the smell: gram flour toasting in oil until it turns from raw and beany to warm and nutty. That step, which takes about 3 minutes, is what separates a good Sindhi kadhi from a floury one.\n\nUnlike the yoghurt kadhi of other regions, this one has no dairy at all. Its tang comes from tamarind, and its body from roasted gram flour whisked into water. **Add the flour to the oil slowly and stir without stopping.** It scorches in seconds if left, and the whole pot tastes bitter.\n\nWhisk the toasted flour into cold water so no lumps form, then bring it to a simmer with tamarind, turmeric, salt and chilli. The kadhi thickens as it cooks, but it should remain thinner than a sauce, closer to a soup.\n\nVegetables go in last. Okra, beans, potatoes and carrots, cut into similar sizes, cook in the liquid for 15 minutes, until just tender. A tempering of mustard seeds, fenugreek seeds and curry leaves over the top finishes it. Serve with plain rice.',
    ing: [
      '3 tbsp vegetable oil',
      '1/2 tsp mustard seeds',
      '1/2 tsp fenugreek seeds',
      '1 sprig curry leaves',
      '4 tbsp gram flour (besan)',
      '800 ml cold water',
      '1 tbsp tamarind paste',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp salt',
      '100 g okra, cut into 3 cm pieces',
      '100 g green beans, cut into 3 cm pieces',
      '1 carrot, about 100 g, sliced',
      '1 small potato, about 100 g, cubed',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a pan. Add the mustard seeds and fenugreek seeds until they pop, then the curry leaves.',
      'Add the gram flour and stir constantly over a medium heat for 3 minutes until nutty and pale gold.',
      'Slowly pour in the cold water, whisking, then add the tamarind, turmeric, chilli powder and salt. Bring to a simmer.',
      'Add the vegetables and simmer for 15 minutes until tender and the kadhi has thickened slightly.',
      'Stir in the coriander.'
    ],
    tips: [
      'Whisk constantly when adding the water.',
      'Taste for sourness and add more tamarind if needed.',
      'Use cold water to prevent lumps.'
    ],
    pair: ['Steamed rice', 'Aloo tuk', 'Papadums', 'Sliced onion'],
    store: 'Keeps in the fridge for 2 days. It thickens; add water when reheating.',
    nut: [191, 3, 20, 11, 4, 5, 630]
  },

  'gatte-ki-sabzi': {
    untimed: ['cooling'],
    d: 'Steamed gram flour dumplings sliced and simmered in a spiced yoghurt gravy, a Rajasthani dish made from pantry staples.',
    meta: 'Gatte ki sabzi: steamed gram flour dumplings sliced and simmered in a spiced yoghurt gravy. Four servings, cooked for 30 minutes.',
    kw: ['gatte ki sabzi', 'gatte ki sabzi recipe', 'rajasthani gatte curry', 'gram flour dumplings in yoghurt gravy', 'besan gatta curry'],
    why: 'Gram flour, yoghurt, spices: gatte ki sabzi is a Rajasthani dish for days when there are no vegetables in the house, and it makes a satisfying dinner from the cupboard.\n\nThe gatte are gram flour dough, flavoured with ajwain, chilli, turmeric, salt and a spoonful of yoghurt and oil, rolled into logs and boiled. Make the dough firm, not sticky. **The logs should be as thick as your thumb.** Thinner ones break; thicker ones stay raw in the centre.\n\nBoil them for 12 minutes in gently bubbling water, until they float and feel firm. Lift them out with a slotted spoon, keep the water, and cut into 2 cm slices once they have cooled enough to handle.\n\nThe gravy is built on whisked yoghurt cooked slowly with ginger, garlic, turmeric, coriander and chilli. Stir constantly while the yoghurt heats, until it reaches a gentle simmer, to avoid splitting. Add some of the gatte cooking water, then the slices, and simmer for 8 minutes. Finish with fresh coriander and a spoon of ghee.',
    ing: [
      '# Gatte',
      '150 g gram flour (besan)',
      '1/2 tsp ajwain seeds',
      '1/2 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '2 tbsp plain yoghurt',
      '2 tbsp water',
      '# Gravy',
      '3 tbsp ghee',
      '1 tsp cumin seeds',
      '1 tbsp ginger and garlic paste',
      '200 g plain yoghurt, whisked smooth',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '200 ml gatte cooking water',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Mix the gram flour, ajwain, chilli powder, turmeric, salt, oil and yoghurt, adding the water to make a firm dough. Divide into 4 logs about 2 cm thick.',
      'Boil the logs in a pan of simmering water for 12 minutes until they float and are firm. Lift out, keeping 200 ml of the water. Cool, then cut into 2 cm slices.',
      'Heat the ghee, add the cumin seeds and the ginger and garlic paste for 1 minute. Lower the heat and add the yoghurt with the coriander, turmeric, chilli powder and salt, stirring constantly for 5 minutes.',
      'Add the cooking water and the slices. Simmer for 8 minutes. Stir in the fresh coriander.'
    ],
    tips: [
      'Whisk the yoghurt smooth before adding.',
      'Keep the heat low when the yoghurt is in.',
      'Fry the gatte slices in ghee first for a richer version.'
    ],
    pair: ['Chapati', 'Steamed rice', 'Pickled onions', 'Bajra roti'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [325, 10, 33, 17, 2, 2, 630]
  },

  'laal-maas': {
    d: 'A fiery red Rajasthani mutton curry of dried red chillies, garlic and yoghurt, cooked slowly in ghee until the meat is tender.',
    meta: 'Laal maas: a fiery red Rajasthani mutton curry of dried chillies, garlic and yoghurt. Four servings, cooked for 90 minutes.',
    kw: ['laal maas', 'laal maas recipe', 'rajasthani laal maas', 'red mutton curry', 'spicy lamb curry rajasthan'],
    why: 'Most home versions come out hot but flat, and the reason is that the chillies are treated as a heat source rather than as a flavour. Laal maas gets its colour and character from dried red chillies, soaked and ground to a paste, and from a very large amount of garlic.\n\nUse a mild, deep red chilli, such as Kashmiri, for the colour. Soak 10 of them in hot water for 20 minutes, then grind with 10 garlic cloves to a paste. A few hot chillies can go in for heat, but too many make the dish impossible to eat. **Taste the paste on the tip of a spoon before it goes in.**\n\nMarinate the meat in the paste and whisked yoghurt for at least 1 hour. Brown it in ghee with whole spices, and cook it over a low heat with a tight lid for 90 minutes, adding water only when the pan is dry. The ghee separates and floats on top, which is how the dish should look.\n\nMutton is traditional. Lamb shoulder works well and cooks in a similar time.',
    ing: [
      '800 g mutton or lamb shoulder, cut into 4 cm pieces',
      '10 dried Kashmiri chillies, soaked in hot water for 20 minutes',
      '2 dried hot red chillies, soaked',
      '10 garlic cloves',
      '150 g plain yoghurt',
      '1 tsp salt',
      '4 tbsp ghee',
      '2 g green cardamom pods, crushed',
      '1 g cloves',
      '1 bay leaf',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger, grated',
      '1 tsp ground coriander',
      '1 tsp ground cumin',
      '400 ml water'
    ],
    st: [
      'Grind the drained chillies and garlic with a splash of water to a smooth paste. Mix half with the yoghurt and salt, coat the meat and leave for 1 hour.',
      'Heat the ghee in a heavy pan. Add the cardamom, cloves and bay leaf, then the onions, and cook for 10 minutes until deep golden. Add the ginger and cook for 1 minute.',
      'Add the meat with its marinade, the remaining chilli paste, coriander and cumin. Cook over a medium heat for 10 minutes, stirring.',
      'Add the water, cover tightly and cook over a low heat for 60 minutes, stirring every 15 minutes, until the meat is tender and the ghee floats on top.'
    ],
    tips: [
      'Wear gloves to handle the chillies.',
      'Remove the seeds for a milder dish.',
      'Keep the lid on tightly so the meat steams.'
    ],
    pair: ['Bajra roti or chapati', 'Steamed rice', 'Sliced onion with lemon', 'Cooling raita'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [724, 40, 15, 56, 2, 6, 750],
    rest: [80, 'Marinating']
  },

  'pyaaz-kachori': {
    untimed: ['cooling completely'],
    d: 'Crisp, puffed pastry rounds stuffed with a spiced onion filling and cooked slowly in hot oil, a Rajasthani street snack.',
    meta: 'Pyaaz kachori: crisp pastry rounds stuffed with a spiced onion filling and cooked in hot oil. Makes eight, cooked for 30 minutes.',
    kw: ['pyaaz kachori', 'pyaaz kachori recipe', 'onion kachori', 'rajasthani pyaaz kachori', 'jodhpur onion kachori'],
    why: 'In the first week of autumn, when the evenings start to cool, a plate of these with hot tea is the right thing. Pyaaz kachori is a crisp pastry filled with onions, and it is a Rajasthani snack that goes back to every roadside stall.\n\nThe filling is the part to get right. Onions are chopped fine and cooked slowly with fennel, coriander seeds, amchur, chilli powder and a pinch of asafoetida until the moisture has gone and the mixture is dry and golden. **If the filling is wet, the kachori will burst in the oil.** Spread it out on a plate to cool completely before using.\n\nThe pastry is flour, ghee, salt and just enough water, rubbed together until it looks like breadcrumbs, then brought into a firm dough. Rest it for 20 minutes. Divide into balls, flatten each, add a spoonful of filling, close and press into a flat disc.\n\nThe oil must be on the cool side, around 150°C. Fry the kachori slowly for 12 minutes, turning, until they puff up and turn pale gold. A hotter oil browns them before they cook through.',
    ing: [
      '# Filling',
      '2 tbsp vegetable oil',
      '1 tsp fennel seeds',
      '1 tsp coriander seeds, crushed',
      '1/4 tsp asafoetida',
      '3 onions, about 450 g, finely chopped',
      '1 tsp chilli powder',
      '1 tsp amchur (dried mango powder)',
      '1/2 tsp salt',
      '1 tsp sugar',
      '# Dough',
      '250 g plain flour',
      '60 g ghee',
      '1/2 tsp salt',
      '100 ml warm water',
      '# Frying',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'For the filling, heat the oil, add the fennel seeds, coriander seeds and asafoetida, then the onions. Cook over a medium heat for 15 minutes, stirring, until dry and golden. Stir in the chilli powder, amchur, salt and sugar. Spread on a plate and cool completely.',
      'Rub the ghee into the flour and salt. Add the water and knead to a firm dough. Rest for 20 minutes.',
      'Divide into 8 balls. Flatten each, add a spoonful of filling, pinch closed and press into a flat disc.',
      'Heat the frying oil to 150°C. Fry in 2 batches for 12 minutes each, turning, until puffed and pale gold.',
      'Drain on kitchen paper.'
    ],
    tips: [
      'Seal the edges well.',
      'Keep the oil at a low heat so they cook through.',
      'Serve warm with tamarind chutney.'
    ],
    pair: ['Tamarind chutney', 'Mint chutney', 'Masala chai', 'Aloo sabzi'],
    store: 'Keeps in an airtight tin for 2 days. Warm in a low oven to crisp.',
    nut: [550, 4, 30, 46, 2, 3, 300]
  },

  'mirchi-vada': {
    d: 'Large mild green chillies stuffed with spiced potato, dipped in a gram flour batter and cooked until crisp.',
    meta: 'Mirchi vada: large mild green chillies stuffed with spiced potato in a crisp gram flour batter. Six servings, cooked for 20 minutes.',
    kw: ['mirchi vada', 'mirchi vada recipe', 'rajasthani mirchi vada', 'stuffed chilli fritters', 'jodhpur mirchi bada'],
    why: 'It looks fierce and tastes mild, which is the surprise of mirchi vada. The chillies used are large, long and thin-skinned, a variety grown for its mildness, so a stuffed pepper bites back only a little. Banana peppers, Turkish long green peppers or Padron-sized chillies give the right idea.\n\nSlit each chilli along its length and take out the seeds and white pith, where most of the heat sits. **Rinse the inside with a spoonful of vinegar or salted water for a milder result.** If you want heat, leave some seeds in.\n\nThe filling is boiled potato mashed with fennel, amchur, coriander, chilli powder and salt. Press it firmly into each chilli so there are no gaps, and tidy the edges.\n\nThe batter is gram flour with a pinch of bicarbonate of soda, turmeric and ajwain, thick enough to coat a spoon. Dip each chilli, let the excess drip off, and lower it into oil at 180°C. Fry for 4 minutes, turning, until crisp and golden. Serve at once, split open, with a chutney.',
    ing: [
      '6 large mild green chillies, about 200 g',
      '300 g potatoes, boiled and mashed',
      '1 tsp fennel seeds, crushed',
      '1 tsp amchur (dried mango powder)',
      '1/2 tsp chilli powder',
      '2 tbsp chopped fresh coriander',
      '1/2 tsp salt',
      '100 g gram flour (besan)',
      '1/2 tsp ajwain seeds',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '1 pinch bicarbonate of soda',
      '120 ml cold water',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Slit each chilli lengthwise and remove the seeds and pith.',
      'Mix the potato with the fennel, amchur, chilli powder, coriander and first 1/2 tsp salt. Press the mixture firmly into each chilli.',
      'Whisk the gram flour, ajwain, turmeric, second 1/2 tsp salt, bicarbonate of soda and water to a thick batter.',
      'Heat the oil in a small, deep pan to 180°C. Dip each chilli in the batter and fry in batches for 4 minutes, turning, until crisp and golden.',
      'Drain on kitchen paper and serve split open.'
    ],
    tips: [
      'Wear gloves when you handle the chillies.',
      'Dry the chillies well before stuffing.',
      'Use a spoon to tidy the batter around each chilli.'
    ],
    pair: ['Tamarind chutney', 'Mint chutney', 'Masala chai', 'Pyaaz kachori'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and crisps in a hot oven.',
    nut: [319, 3, 25, 23, 2, 2, 420]
  },

  'rabri': {
    d: 'Milk simmered for an hour until it reduces to a thick, creamy layer, sweetened and flavoured with cardamom, saffron and pistachios.',
    meta: 'Rabri: milk simmered until thick and creamy, sweetened with sugar and flavoured with cardamom, saffron and pistachios. Six servings, cooked for 60 minutes.',
    kw: ['rabri', 'rabri recipe', 'rabdi', 'indian thickened milk dessert', 'rabri with saffron and pistachios'],
    why: 'A pan, a spoon and an hour: rabri is simple, and the only ingredient that matters is patience. The recipe is full-fat milk, boiled down to about a third of its volume, with a skin that is repeatedly scraped from the surface and folded back into the milk. Those layers of skin, called malai, are what give rabri its texture.\n\nUse the widest pan you have. A wide surface lets the milk evaporate faster and forms a bigger skin each time. **Keep the heat at medium-low and do not leave the pan.** Milk boils over in a moment, and it catches on the base if it is not stirred.\n\nEvery 5 minutes or so, when a skin forms, push it to the side of the pan with a spatula. After 50 minutes you will have a pile of malai at the edge, and the milk will be pale gold and thick.\n\nStir in the sugar, cardamom and saffron for the last 10 minutes. Break up the malai with the back of a spoon, so it blends into the milk in soft strands. Chill and serve in small bowls, with pistachios.',
    ing: [
      '1.5 litres full-fat milk',
      '70 g sugar',
      '1/2 tsp ground cardamom',
      '1 pinch saffron strands',
      '2 tbsp chopped pistachios',
      '1 tbsp chopped almonds'
    ],
    st: [
      'Bring the milk to a boil in a wide, heavy pan, then lower the heat to medium-low.',
      'Simmer for 50 minutes. Each time a skin forms on the surface, push it to the side of the pan, stirring the milk now and then.',
      'Add the sugar, cardamom and saffron and cook for 10 minutes more, until the milk has thickened to about a third of its original volume.',
      'Mix in the malai from the sides of the pan, breaking it into strands. Stir in the nuts.',
      'Serve warm or chill for 1 hour.'
    ],
    tips: [
      'Use full-fat milk; lower-fat milk does not form a good skin.',
      'Scrape the base occasionally so it does not catch.',
      'Add the sugar late, since it speeds up scorching.'
    ],
    pair: ['Jalebi', 'Malpua', 'Fresh fruit', 'Falooda'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [243, 10, 26, 11, 1, 24, 110]
  },

  'moong-dal-halwa': {
    d: 'Ground yellow moong dal slowly roasted in ghee until deep gold, then cooked with milk and sugar syrup into a rich, fragrant halwa.',
    meta: 'Moong dal halwa: ground moong dal roasted in ghee, then cooked with milk and sugar syrup. Eight servings, cooked for 45 minutes.',
    kw: ['moong dal halwa', 'moong dal halwa recipe', 'moong dal ka halwa', 'rajasthani moong dal halwa', 'moong dal dessert with ghee'],
    why: 'It is the sort of dessert a family makes for a wedding, a festival or a very good Sunday, because it takes patience and a lot of ghee. Moong dal halwa is made by roasting ground dal slowly in ghee for as long as it takes to turn the colour of caramel, and no shortcut changes the result.\n\nSoak the dal for 2 hours, then grind it coarsely, like fine semolina, with only a splash of water. Drain well. **Roast over a medium-low heat and stir without stopping for 25 minutes.** The dal goes from damp and pale to dry, nutty and golden brown, and the ghee separates around the edges.\n\nThe liquid is added in two stages. Hot milk goes in first and is absorbed over 5 minutes. A sugar syrup follows. Adding cold liquid to hot dal makes it spit, so keep both hot and stand back.\n\nCook for a final 10 minutes, until the halwa is glossy and leaves the pan in one mass. Cardamom and saffron go in at the end, with sliced almonds on top. Serve warm.',
    ing: [
      '150 g split yellow moong dal, soaked for 2 hours and drained',
      '150 g ghee',
      '300 ml whole milk, heated',
      '120 g sugar',
      '200 ml water',
      '1/2 tsp ground cardamom',
      '1 pinch saffron strands',
      '2 tbsp sliced almonds'
    ],
    st: [
      'Grind the soaked dal to a coarse, semolina-like texture with a splash of water. Drain well.',
      'Heat the ghee in a heavy pan over a medium-low heat. Add the dal and roast, stirring constantly, for 25 minutes until deep golden and fragrant.',
      'Meanwhile, heat the sugar and water in a small pan until the sugar dissolves, then add the saffron.',
      'Carefully add the hot milk to the dal, stirring, and cook for 5 minutes. Add the hot syrup and cook for 10 minutes more until the halwa is glossy and leaves the sides.',
      'Stir in the cardamom and scatter with the almonds. Serve warm.'
    ],
    tips: [
      'Stir all the time while roasting; the dal catches easily.',
      'Add the hot liquids carefully, as the dal spits.',
      'Do not rush the roasting; it is where the flavour comes from.'
    ],
    pair: ['Masala chai', 'Vanilla ice cream', 'Puri', 'Fresh fruit'],
    store: 'Keeps in the fridge for 5 days. Reheat gently.',
    nut: [329, 6, 29, 21, 3, 18, 20],
    rest: [120, 'Soaking the dal']
  },

  'motichoor-ladoo': {
    d: 'Tiny pearls of fried gram flour batter soaked in saffron sugar syrup and shaped into soft, orange ladoo.',
    meta: 'Motichoor ladoo: tiny gram flour pearls soaked in saffron sugar syrup and shaped into soft ladoo. Sixteen pieces, cooked for about 40 minutes.',
    kw: ['motichoor ladoo', 'motichoor ladoo recipe', 'motichur laddu', 'boondi ladoo', 'diwali motichoor laddu'],
    why: 'Why are the pearls so small? Because motichoor means crushed pearls, and the effect of tiny boondi in syrup is a ladoo that melts in the mouth instead of chewing. The batter is gram flour and water, dropped through a fine-holed ladle into hot oil in a stream of droplets.\n\nThe batter has to be the right consistency. It should be thin enough to fall in drops through the holes, but not so thin that the boondi turns out as streaks. Aim for something like double cream. **Test with a few drops in the oil.** They should sink briefly, then rise, round and dimpled.\n\nFry in small batches at 170°C for about 1 minute each, until the pearls are pale gold and crisp but not browned. Lift out with a slotted spoon, drain, and drop into the syrup while it is still warm.\n\nThe syrup is sugar and water cooked to a one-thread consistency, with saffron and cardamom. The boondi soaks for 10 minutes, until soft. Press the mixture into balls while still warm, using damp hands.',
    ing: [
      '150 g gram flour (besan)',
      '200 ml water',
      '1 pinch orange food colour or turmeric',
      '300 ml vegetable oil, for frying',
      '200 g sugar',
      '150 ml water, for syrup',
      '1 pinch saffron strands',
      '1/2 tsp ground cardamom',
      '2 tbsp chopped pistachios',
      '1 tbsp melon seeds'
    ],
    st: [
      'Whisk the gram flour, 200 ml water and colour to a smooth batter, like double cream.',
      'Heat the sugar and syrup water until the sugar dissolves, then simmer for 5 minutes until the syrup is slightly sticky between finger and thumb. Stir in the saffron and cardamom.',
      'Heat the oil to 170°C. Hold a fine-holed ladle over the oil and pour in some batter, tapping so drops fall. Fry for 1 minute until pale gold. Lift out and drain briefly.',
      'Drop the boondi into the warm syrup. Repeat with the rest of the batter.',
      'Soak for 10 minutes, then stir in the pistachios and melon seeds. With damp hands, press into 16 balls.'
    ],
    tips: [
      'Use a ladle with holes about 2 mm wide.',
      'Do not let the boondi brown.',
      'Shape the ladoo while the mixture is warm.'
    ],
    pair: ['Masala chai', 'Kaju katli', 'Saffron milk', 'Diwali sweets'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [246, 1, 20, 18, 1, 13, 5]
  },

  'coconut-ladoo': {
    d: 'Soft balls of desiccated coconut and condensed milk, cooked briefly with cardamom and rolled in more coconut.',
    meta: 'Coconut ladoo: soft balls of desiccated coconut and condensed milk with cardamom. Twelve pieces, cooked for 15 minutes.',
    kw: ['coconut ladoo', 'coconut ladoo recipe', 'nariyal ladoo', 'coconut ladoo with condensed milk', 'easy indian coconut sweets'],
    why: 'Coconut, condensed milk, cardamom: that is all, and it makes twelve soft sweets in less than half an hour. Coconut ladoo are what people make for Diwali, for a visitor, or for the sweet craving that needs satisfying in a hurry.\n\nCook the coconut and condensed milk together in a non-stick pan over a low heat. Stir constantly for about 10 minutes. The mixture starts sticky and loose, then thickens and pulls away from the sides into a single mass. **Stop when it holds together when pressed between your fingers.** Cooking it longer makes the ladoo dry and crumbly.\n\nCool until just warm, about 5 minutes, so you can handle it. Rub a little ghee on your palms and shape the mixture into walnut-sized balls. If it is too hot, it burns your hands, and if it is too cold, it will not stick.\n\nRoll each ball in a plate of desiccated coconut. A pinch of cardamom is stirred through the mix, and a pinch of salt balances the sweetness. They keep for a week, and they are good with tea.',
    ing: [
      '200 g desiccated coconut, plus 3 tbsp for rolling',
      '200 g sweetened condensed milk',
      '1/2 tsp ground cardamom',
      '1 pinch salt',
      '1 tbsp ghee, for greasing hands'
    ],
    st: [
      'Put the 200 g coconut and condensed milk in a non-stick pan over a low heat.',
      'Cook, stirring constantly, for 10 minutes until the mixture thickens and pulls away from the sides.',
      'Stir in the cardamom and salt. Cool for 5 minutes until warm enough to handle.',
      'With greased hands, shape into 12 balls. Roll each in the remaining coconut.'
    ],
    tips: [
      'Do not overcook; the ladoo firm up as they cool.',
      'Grease your hands lightly so the mixture does not stick.',
      'Chill for 15 minutes if the ladoo are too soft to hold.'
    ],
    pair: ['Masala chai', 'Coffee', 'Fresh fruit', 'Diwali sweets'],
    store: 'Keeps in an airtight tin for 5 days or in the fridge for 1 week.',
    nut: [177, 2, 13, 13, 3, 10, 40]
  },

  'basundi': {
    d: 'Milk simmered until it reduces to about two thirds, sweetened and flavoured with cardamom, nutmeg and saffron, served chilled.',
    meta: 'Basundi: milk simmered until reduced and thick, sweetened and flavoured with cardamom, nutmeg and saffron. Six servings, cooked for 60 minutes.',
    kw: ['basundi', 'basundi recipe', 'maharashtrian basundi', 'thickened sweet milk dessert', 'gujarati basundi'],
    why: 'The difference from rabri is in the milk. Rabri keeps the skin, folded into thick strands; basundi has none, and what you get is smooth, pourable, almost custard-like milk. The two share a method and not much else.\n\nStart with full-fat milk and a heavy, wide pan. Bring it to a boil, then lower the heat and simmer, stirring every few minutes and scraping the base. Skim and discard the skin as it forms, or whisk it back in with a spoon. The milk reduces by about a third in 55 minutes. **If you stop stirring, the milk catches on the base.** The brown flecks spoil the flavour.\n\nSugar goes in at the end, so it does not make the milk catch earlier. Cardamom, nutmeg and saffron are stirred in for the last 3 minutes, and a spoonful of chopped nuts brings texture.\n\nChill it for at least 2 hours. It thickens further in the fridge. Serve in small cups, cold, after a heavy meal, or with hot puris for a festive breakfast.',
    ing: [
      '1.5 litres full-fat milk',
      '90 g sugar',
      '1/2 tsp ground cardamom',
      '1/4 tsp ground nutmeg',
      '1 pinch saffron strands',
      '2 tbsp chopped almonds and pistachios'
    ],
    st: [
      'Bring the milk to a boil in a wide, heavy pan. Lower the heat to medium-low.',
      'Simmer for 55 minutes, stirring often and scraping the base, until reduced by about a third.',
      'Stir in the sugar, cardamom, nutmeg and saffron and simmer for 3 minutes.',
      'Cool, stir in the nuts and chill for 2 hours before serving.'
    ],
    tips: [
      'Use a wide pan so the milk evaporates faster.',
      'Scrape the base regularly.',
      'It thickens as it chills; add a splash of milk if needed.'
    ],
    pair: ['Puri', 'Fresh fruit', 'Jalebi', 'Chopped nuts'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [251, 9, 29, 11, 1, 28, 110],
    rest: [120, 'Chilling']
  },

  'puran-poli': {
    d: 'Soft flatbreads stuffed with a sweet filling of cooked chana dal, jaggery, cardamom and nutmeg, cooked on a griddle with ghee.',
    meta: 'Puran poli: soft flatbreads stuffed with sweet chana dal, jaggery and cardamom, cooked with ghee. Makes eight, cooked for 40 minutes.',
    kw: ['puran poli', 'puran poli recipe', 'maharashtrian puran poli', 'sweet stuffed flatbread', 'holige puran poli'],
    why: 'In the spring, around Holi and Gudi Padwa, a pile of puran poli appears in Maharashtrian kitchens, and it needs more patience than skill. The filling is chana dal cooked soft with jaggery, ground to a smooth paste, and the dough is a soft one that wraps around it without tearing.\n\nCook the dal in plenty of water until it can be crushed between two fingers, about 30 minutes, then drain well and keep the water: it makes a lovely clear soup called katachi amti. Mix the cooked dal with jaggery in a pan over a low heat, stirring, until the mixture thickens and no longer sticks to the spoon. **It must be thick and dry, like a soft dough.** Wet filling squeezes out when you roll.\n\nGrind it smooth, then add cardamom and nutmeg. Cool before using.\n\nThe dough is wheat flour, oil, turmeric and salt, kneaded until very soft and rested for an hour. Fill each ball with a filling ball of the same size, seal, flatten, and roll gently to 15 cm with a dusting of rice flour. Cook on a hot griddle with ghee for 2 minutes a side.',
    ing: [
      '# Filling',
      '150 g chana dal',
      '600 ml water',
      '150 g jaggery, grated',
      '1/2 tsp ground cardamom',
      '1/4 tsp ground nutmeg',
      '# Dough',
      '200 g plain flour',
      '2 tbsp vegetable oil',
      '1/4 tsp ground turmeric',
      '1/4 tsp salt',
      '100 ml warm water',
      '2 tbsp rice flour, for dusting',
      '4 tbsp ghee, for cooking'
    ],
    st: [
      'Cook the chana dal in the water for 30 minutes until very soft. Drain well, keeping the water for another use.',
      'Put the dal and jaggery in a pan over a low heat and cook for 10 minutes, stirring, until thick and dry. Grind to a smooth paste, stir in the cardamom and nutmeg, and cool.',
      'Mix the flour, oil, turmeric, salt and water and knead to a very soft dough. Cover and rest for 1 hour.',
      'Divide the dough and filling into 8 balls each. Flatten a dough ball, enclose a filling ball, seal and flatten. Dust with rice flour and roll gently to 15 cm.',
      'Cook on a hot griddle with ghee for 2 minutes on each side until golden.'
    ],
    tips: [
      'Keep the filling dry and thick.',
      'Roll very gently with plenty of rice flour.',
      'Serve with a spoonful of ghee on top.'
    ],
    pair: ['Ghee', 'Warm milk', 'Katachi amti', 'Coconut milk'],
    store: 'Keeps wrapped for 2 days or in the fridge for 5 days. Reheat on a griddle.',
    nut: [336, 7, 50, 12, 4, 19, 90],
    rest: [60, 'Resting the dough']
  },

  'modak': {
    d: 'Steamed rice flour dumplings pleated into a crown shape, filled with sweet coconut and jaggery and served with ghee.',
    meta: 'Modak: steamed rice flour dumplings filled with sweet coconut and jaggery. Makes twelve, steamed for 20 minutes.',
    kw: ['modak', 'ukadiche modak', 'modak recipe', 'steamed modak with coconut and jaggery', 'ganesh chaturthi modak'],
    why: 'Pleating is the whole difficulty with modak, and it is easier than it looks. The dumpling is a pocket of soft rice dough, shaped like a small closed flower, with a sweet filling inside. Most people manage a presentable one on the third attempt.\n\nThe dough is made in a pan: water, a little ghee, salt and rice flour, cooked together until it forms a ball. Cover and leave for 5 minutes, then knead it while warm until soft and smooth. **Keep the dough covered with a damp cloth while you work.** It dries and cracks in a few minutes.\n\nThe filling is fresh grated coconut cooked with jaggery until the liquid has gone, flavoured with cardamom and nutmeg. It should be moist but not wet, and cooled before shaping.\n\nPress a ball of dough into a thin cup with oiled fingers, add a spoonful of filling, and pleat the edge into 8 to 10 folds with your thumb and forefinger. Gather the pleats at the top and pinch into a point. Steam for 12 minutes, until the dough turns translucent and glossy.',
    ing: [
      '# Filling',
      '100 g grated fresh coconut',
      '80 g jaggery, grated',
      '1/2 tsp ground cardamom',
      '1/4 tsp ground nutmeg',
      '# Dough',
      '200 ml water',
      '1 tsp ghee',
      '1/4 tsp salt',
      '150 g fine rice flour',
      '2 tbsp ghee, to serve'
    ],
    st: [
      'For the filling, cook the coconut and jaggery in a pan over a low heat for 6 minutes, stirring, until the liquid has gone. Stir in the cardamom and nutmeg and cool.',
      'For the dough, bring the water, 1 tsp ghee and salt to a boil. Add the rice flour at once, stir well, cover and leave for 5 minutes.',
      'Knead the warm dough with oiled hands until smooth. Divide into 12 balls.',
      'Press each ball into a thin cup, fill with a spoonful of filling, pleat the edges and pinch the top closed.',
      'Steam over boiling water for 12 minutes, until glossy and translucent. Serve warm with the ghee.'
    ],
    tips: [
      'Keep your fingers oiled so the dough does not stick.',
      'Cover the dough that you are not working with.',
      'Use a modak mould if you find pleating difficult.'
    ],
    pair: ['Ghee', 'Warm milk', 'Masala chai', 'Fresh fruit'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and reheats by steaming.',
    nut: [130, 2, 17, 6, 1, 7, 50]
  },

  'chakli': {
    untimed: ['cooling completely'],
    d: 'Crisp spirals of rice flour and lentil flour dough, flavoured with cumin, sesame and chilli, shaped with a press and cooked in oil.',
    meta: 'Chakli: crisp spirals of rice and lentil flour dough flavoured with cumin, sesame and chilli. Makes about 20, cooked for 20 minutes.',
    kw: ['chakli', 'chakli recipe', 'diwali chakli', 'crispy rice flour spirals', 'chakli with rice flour and sesame'],
    why: 'Why does a chakli need a rest before it is pressed? The dough has to be soft enough to flow through the press, and a little dry so the spirals keep their shape in the oil. The balance is fine, and the answer is a dough made in stages, with water added only as needed.\n\nThe traditional flour is bhajani, a roasted blend of rice, lentil and gram flours. A mix of rice flour and roasted gram flour does the job. Steam the rice flour first for 10 minutes to cook the starch, which gives crisper chakli. **Pass the flour through a sieve to remove lumps.** Lumps clog the press.\n\nKnead the flour with butter, cumin seeds, sesame seeds, chilli powder, turmeric, salt and warm water into a soft dough. Fill the press fitted with a star disc, and press spirals onto a greased sheet of paper.\n\nSlide the spirals into oil at 170°C, a few at a time. Fry for 3 minutes on each side, until the bubbling stops and they are golden and crisp. Cool completely before storing.',
    ing: [
      '200 g fine rice flour',
      '50 g gram flour (besan)',
      '2 tbsp butter, softened',
      '1 tbsp sesame seeds',
      '1 tsp cumin seeds',
      '1 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '1 tsp salt',
      '150 ml warm water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Steam the rice flour in a cloth-lined steamer for 10 minutes. Cool and sieve with the gram flour.',
      'Mix in the butter, sesame seeds, cumin seeds, chilli powder, turmeric and salt. Add the warm water gradually and knead to a soft, smooth dough.',
      'Fill a chakli press fitted with a star disc. Press spirals about 6 cm across onto greased paper.',
      'Heat the oil to 170°C. Fry the spirals in batches, 3 minutes on each side, until golden and the bubbling stops.',
      'Drain on kitchen paper and cool completely.'
    ],
    tips: [
      'Keep the dough covered while you work.',
      'Do not make the dough too wet; chakli turn soft.',
      'Press the spirals directly onto the paper to slide them into the oil.'
    ],
    pair: ['Masala chai', 'Murukku', 'Mixture', 'Diwali sweets'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [179, 1, 10, 15, 1, 0, 120]
  },

  'murukku': {
    untimed: ['cooling completely'],
    d: 'Crisp, spiral snacks of rice flour and urad flour with cumin, sesame and butter, pressed into oil and cooked until golden.',
    meta: 'Murukku: crisp spiral snacks of rice and urad flour with cumin, sesame and butter. Makes about 20, cooked for 20 minutes.',
    kw: ['murukku', 'murukku recipe', 'rice flour murukku', 'diwali murukku', 'south indian murukku with urad flour'],
    why: 'Does murukku have to be difficult? No, but it has to be right in three small ways: the flour, the dough and the oil.\n\nThe flour is rice flour and roasted urad dal flour, in a ratio of about four to one. Urad flour makes the murukku crisp rather than hard, and roasting it in a dry pan for a few minutes until it smells nutty removes the raw flavour. Sieve both flours together so the dough is smooth.\n\nThe dough is the second point. Add butter, cumin seeds, sesame seeds and salt, then warm water a spoonful at a time. It should be soft and pliable, like a stiff play dough, and not sticky. **If it cracks when you press a spiral, add a little more water.** If it sticks to the press, add a little flour.\n\nPress the dough through the star disc in a spiral onto greased paper, then lower it gently into oil at 170°C. Fry in batches, turning once, for 4 minutes, until the sizzling slows down and the spirals are golden. Cool before storing.',
    ing: [
      '200 g fine rice flour',
      '50 g urad dal flour, dry-roasted',
      '2 tbsp butter, softened',
      '1 tbsp sesame seeds',
      '1 tsp cumin seeds',
      '1/2 tsp chilli powder',
      '1 tsp salt',
      '130 ml warm water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Sieve the rice flour and urad flour into a bowl. Mix in the butter, sesame seeds, cumin seeds, chilli powder and salt.',
      'Add the water a spoonful at a time and knead to a soft, smooth dough.',
      'Fill a murukku press fitted with a star disc and press spirals onto greased paper.',
      'Heat the oil to 170°C. Fry the spirals in batches, turning once, for 4 minutes each until golden and the bubbling stops.',
      'Drain on kitchen paper and cool completely before storing.'
    ],
    tips: [
      'Roast the urad flour in a dry pan until fragrant.',
      'Keep the dough covered with a damp cloth.',
      'Check that the oil is hot enough before adding murukku.'
    ],
    pair: ['Masala chai', 'Filter coffee', 'Chakli', 'Diwali sweets'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [179, 2, 9, 15, 1, 0, 120]
  }
};
