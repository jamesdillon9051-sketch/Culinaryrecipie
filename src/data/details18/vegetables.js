'use strict';

/**
 * Volume eighteen — Chinese vegetables, noodles and rice.
 *
 * Fifteen. Chinese vegetable cooking is a great deal more interesting than the
 * "steamed greens with garlic" it usually gets reduced to in English, and
 * several of these — dry-frying, hand-torn cabbage, potato cut to slivers and
 * rinsed of its starch — are techniques rather than recipes and transfer
 * straight onto whatever is in the fridge.
 *
 * The noodles are the north: Wuhan's sesame paste, Xi'an's hand-slapped wide
 * belts. Both are eaten for breakfast in their own cities, which says something
 * about how much of Chinese cooking the takeaway menu never mentions.
 */

module.exports = {
  'dry-fried-green-beans': {
    d: 'Green beans fried until their skins blister and wrinkle, then tossed with minced pork, preserved vegetable and chilli. The blistering is the dish.',
    meta: 'Sichuan dry-fried green beans: beans fried until blistered and wrinkled, then wok-tossed with minced pork, ya cai and dried chillies.',
    kw: ['dry fried green beans', 'gan bian si ji dou', 'sichuan green beans recipe', 'blistered green beans', 'chinese green bean stir fry'],
    why: 'The beans must be bone dry before they meet the oil, and they need long enough in it — six or seven minutes — for the skins to shrivel and go leathery. That dehydration concentrates the flavour and is what "dry-frying" means; beans stir-fried for two minutes are simply green beans in a sauce. Ya cai, the Sichuan preserved mustard stem, is the other half and there is no real substitute: it supplies a salty, slightly sour depth that neither the pork nor the chilli can.',
    ing: [
      '500 g green beans, topped and thoroughly dried',
      '4 tbsp vegetable oil',
      '# For the wok',
      '150 g minced pork',
      '4 tbsp ya cai, or preserved mustard stem, chopped',
      '6 dried red chillies, snipped',
      '1 tsp Sichuan peppercorns',
      '6 garlic cloves, chopped',
      '20 g ginger, chopped',
      '1 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '1 tsp sesame oil',
      '3 spring onions, sliced'
    ],
    st: [
      'Dry the beans completely on a cloth — any water will make the oil spit and stop them blistering.',
      'Heat 3 tbsp of the oil in a wok until it shimmers and add the beans in one layer.',
      'Fry over medium-high heat 7 minutes, turning occasionally, until the skins are wrinkled, blistered and browned in patches. Lift them out.',
      'Add the last tablespoon of oil and fry the pork hard 3 minutes, breaking it up, until browned and slightly crisp.',
      'Add the ya cai, dried chillies and Sichuan peppercorns and fry 1 minute.',
      'Add the garlic and ginger for 20 seconds.',
      'Return the beans, add the soy sauce, wine, sugar and salt and toss hard 1 minute.',
      'Finish with the sesame oil and spring onions and serve at once.'
    ],
    tips: [
      'Bone dry beans, or they steam instead of blistering.',
      'Seven minutes of frying. Two minutes is not dry-frying.',
      'Ya cai is not optional. It is the savoury depth.'
    ],
    pair: ['Steamed rice', 'Mapo tofu', 'A cold beer'],
    store: 'Refrigerated for 2 days. Reheat in a hot wok, never a microwave.',
    nut: [280, 12, 14, 21, 5, 6, 1090]
  },

  'di-san-xian': {
    d: 'Potato, aubergine and green pepper each fried separately then brought together in a garlicky sauce. Dongbei, and the name means the three treasures of the earth.',
    meta: 'A north-eastern Chinese dish of potato, aubergine and green pepper fried separately, then combined in a garlic and soy sauce.',
    kw: ['di san xian', 'di san xian recipe', 'chinese potato aubergine pepper', 'dongbei vegetable dish', 'three earthly treasures'],
    why: 'Fry the three vegetables separately and in that order. They cook at completely different rates — potato needs several minutes, aubergine drinks oil and collapses, pepper wants barely a minute — and thrown in together you get raw potato with disintegrated aubergine. Salting the aubergine first and pressing it dry also cuts the amount of oil it absorbs by roughly half, which is the difference between this dish being good and being greasy.',
    ing: [
      '2 aubergines, about 500 g, in 4 cm chunks',
      '1 tbsp fine sea salt, for degorging',
      '400 g potatoes, in 3 cm chunks',
      '2 green peppers, in large pieces',
      '400 ml vegetable oil, for frying',
      '# For the sauce',
      '8 garlic cloves, chopped',
      '3 tbsp light soy sauce',
      '1 tsp dark soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tbsp caster sugar',
      '1 tsp fine sea salt',
      '150 ml water',
      '1 tbsp cornflour, slaked in 2 tbsp water',
      '1 tsp sesame oil',
      '3 spring onions, sliced'
    ],
    st: [
      'Toss the aubergine chunks with the salt and leave 20 minutes, then rinse and press them dry between cloths.',
      'Heat the oil in a wok to 180C.',
      'Fry the potato chunks 5 minutes, until golden and cooked through. Lift out onto a rack.',
      'Fry the aubergine 4 minutes, until browned and collapsing. Lift out.',
      'Fry the pepper 45 seconds only, until blistered but still crisp. Lift out.',
      'Pour off all but 2 tbsp of the oil and fry the garlic 20 seconds.',
      'Add both soy sauces, the wine, sugar, salt and water and bring to a simmer.',
      'Stir in the slaked cornflour, then return all three vegetables and toss until coated.',
      'Finish with the sesame oil and spring onions.'
    ],
    tips: [
      'Fry them separately: potato, aubergine, pepper, in that order.',
      'Salt and press the aubergine or it drinks twice the oil.',
      'Pepper for forty-five seconds only.'
    ],
    pair: ['Steamed rice', 'A cold beer', 'Vinegar cabbage'],
    store: 'Refrigerated for 2 days, though the vegetables soften. Do not freeze.',
    nut: [360, 6, 42, 20, 7, 10, 1290]
  },

  'stir-fried-water-spinach': {
    d: 'Water spinach thrown into a screaming wok with garlic and fermented bean curd, out again in ninety seconds. Hollow stems, crisp; leaves, wilted.',
    meta: 'Water spinach stir-fried very fast with garlic, chilli and fermented white bean curd so the stems stay crisp and the leaves just wilt.',
    kw: ['stir fried water spinach', 'kong xin cai recipe', 'ong choy stir fry', 'morning glory chinese', 'fermented bean curd greens'],
    why: 'Stems in first, leaves thirty seconds later. Water spinach has hollow stalks that stay crunchy and thin leaves that wilt almost instantly, and adding them together gives you either raw stems or grey leaves. The wok must also be as hot as your hob will manage before anything goes in — this dish is ninety seconds from start to plate and a cool pan makes the greens release water and stew. Fermented white bean curd is the traditional seasoning and does the job of both salt and umami.',
    ing: [
      '500 g water spinach, washed, stems and leaves separated',
      '3 tbsp vegetable oil',
      '6 garlic cloves, sliced',
      '2 red chillies, sliced',
      '2 cubes fermented white bean curd, mashed with 2 tbsp of its brine',
      '1 tbsp Shaoxing wine',
      '0.5 tsp caster sugar',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Cut the water spinach into 8 cm lengths, keeping the stems and leaves in separate piles. Shake them as dry as you can.',
      'Heat the wok until it is smoking, then add the oil.',
      'Add the garlic and chilli and stir for 10 seconds.',
      'Add the stems and stir-fry hard 30 seconds.',
      'Add the leaves, the mashed bean curd with its brine, the wine, sugar and salt.',
      'Toss constantly 45 seconds, until the leaves have just collapsed and the stems still snap.',
      'Tip straight onto a plate — it overcooks in the wok off the heat.'
    ],
    tips: [
      'Stems first, leaves thirty seconds later.',
      'A smoking wok. A cool one stews the greens.',
      'Onto the plate immediately or it keeps cooking.'
    ],
    pair: ['Steamed rice', 'Steamed fish', 'Braised pork'],
    store: 'None. It is limp within ten minutes.',
    nut: [140, 5, 8, 11, 3, 2, 690]
  },

  'choy-sum-oyster-sauce': {
    d: 'Choy sum blanched in oiled salted water and dressed in warmed oyster sauce. Three minutes, and the oil in the water is why restaurant greens gleam.',
    meta: 'Choy sum blanched in salted water with oil added, drained and dressed with warmed oyster sauce, soy and hot oil.',
    kw: ['choy sum', 'choy sum oyster sauce recipe', 'chinese blanched greens', 'cantonese vegetable side', 'restaurant style greens'],
    why: 'A tablespoon of oil in the blanching water is the restaurant trick — it coats each stem as it comes out and gives the glossy, lacquered look that greens dressed in sauce alone never have. Salt the water heavily as well, because greens cooked in unsalted water taste flat no matter what goes on top. Ninety seconds is enough for choy sum; drain it properly and dress it on the plate rather than tossing it in the pan, so the sauce sits on top instead of pooling.',
    ing: [
      '600 g choy sum, or pak choi, trimmed',
      '# For the water',
      '2 litres water',
      '1 tbsp fine sea salt',
      '1 tbsp vegetable oil',
      '0.5 tsp caster sugar',
      '# For the sauce',
      '3 tbsp oyster sauce',
      '1 tbsp light soy sauce',
      '2 tbsp water',
      '1 tsp caster sugar',
      '1 tsp sesame oil',
      '# To finish',
      '2 tbsp vegetable oil',
      '4 garlic cloves, sliced',
      '20 g ginger, in fine shreds'
    ],
    st: [
      'Bring the water to a rolling boil with the salt, the tablespoon of oil and the sugar.',
      'Drop the choy sum in, stems first, and blanch 90 seconds, until the stems are just tender and the leaves bright.',
      'Lift the greens out with tongs and drain them well, then lay them on a warm plate all facing the same way.',
      'Warm the oyster sauce, soy sauce, water, sugar and sesame oil together until just simmering, then pour it over the greens.',
      'Heat the 2 tbsp of oil in a small pan with the garlic and ginger until the garlic just turns pale gold, 60 seconds.',
      'Pour the hot garlic oil over the greens and serve at once.'
    ],
    tips: [
      'Oil in the blanching water. That is the gloss.',
      'Salt the water heavily.',
      'Dress on the plate, not in the pan.'
    ],
    pair: ['Steamed fish', 'Roast pork', 'Steamed rice'],
    store: 'None. Blanch to order — reheated greens go grey.',
    nut: [130, 4, 10, 9, 3, 5, 1090]
  },

  'home-style-tofu': {
    d: 'Tofu triangles fried until golden and puffed, then braised with pork and doubanjiang. What Sichuan households cook when they are not cooking mapo tofu.',
    meta: 'Firm tofu cut in triangles and shallow-fried until golden, then braised with pork belly, doubanjiang, peppers and black beans.',
    kw: ['home style tofu', 'jia chang dou fu recipe', 'sichuan braised tofu', 'fried tofu pork stir fry', 'chinese tofu triangles'],
    why: 'Fry the tofu before it goes anywhere near the sauce. Frying gives it a skin that holds it together through braising and gives the sauce something to cling to, and unfried tofu simply breaks into curds when you stir. Press it dry first and cut it into thick triangles rather than cubes, which gives more surface. And doubanjiang needs frying in the oil until the oil turns red before any liquid arrives — thirty seconds of that is worth more than any amount of simmering.',
    ing: [
      '600 g firm tofu, pressed and cut into 1 cm triangles',
      '5 tbsp vegetable oil',
      '# For the wok',
      '150 g pork belly, thinly sliced',
      '2 tbsp doubanjiang',
      '1 tbsp fermented black beans, rinsed and chopped',
      '5 garlic cloves, sliced',
      '20 g ginger, chopped',
      '1 green pepper, in squares',
      '1 leek, sliced diagonally',
      '# For the sauce',
      '2 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '200 ml water',
      '2 tsp cornflour, slaked in 2 tbsp water',
      '1 tsp sesame oil'
    ],
    st: [
      'Press the tofu between cloths under a weight for 20 minutes, then cut it into thick triangles.',
      'Heat 4 tbsp of the oil in a wok and fry the tofu in batches 3 minutes a side, until golden and slightly puffed. Lift out.',
      'Add the last tablespoon of oil and fry the pork belly 3 minutes, until its fat runs and the edges crisp.',
      'Add the doubanjiang and black beans and fry 30 seconds, until the oil turns red.',
      'Add the garlic and ginger for 20 seconds, then the green pepper and leek for 1 minute.',
      'Add the soy sauce, wine, sugar, salt and water and bring to a simmer.',
      'Return the tofu and simmer 3 minutes, turning gently, so it takes up the sauce.',
      'Stir in the slaked cornflour, finish with the sesame oil and serve.'
    ],
    tips: [
      'Fry the tofu first. Unfried tofu falls apart in the sauce.',
      'Fry the doubanjiang until the oil turns red.',
      'Turn gently once the tofu is back in.'
    ],
    pair: ['Steamed rice', 'Stir-fried greens', 'A cold beer'],
    store: 'Refrigerated for 3 days. Reheat in a pan with a splash of water.',
    nut: [440, 26, 16, 31, 3, 5, 1290]
  },

  'yong-tau-foo': {
    d: 'Tofu, peppers, aubergine and chillies stuffed with a fish and pork paste, fried and then simmered in a clear soup. Hakka, and endlessly adaptable.',
    meta: 'Hakka stuffed tofu and vegetables: a beaten fish and pork paste packed into tofu, peppers, aubergine and chillies, pan-fried and simmered in broth.',
    kw: ['yong tau foo', 'yong tau foo recipe', 'hakka stuffed tofu', 'stuffed vegetables chinese', 'fish paste stuffed peppers'],
    why: 'The fish paste has to be thrown against the side of the bowl repeatedly — twenty or thirty times — until it is elastic enough to hold a shape. That slapping develops the proteins into the springy texture the dish depends on; a paste that is merely stirred stays soft and falls straight out of the pepper in the pan. Dust the inside of each cavity with cornflour before filling as well, which glues the paste to the vegetable at the seam.',
    ing: [
      '# For the filling',
      '300 g white fish fillet, skinned',
      '200 g minced pork',
      '2 tbsp cornflour',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 tbsp light soy sauce',
      '1 tsp sesame oil',
      '3 tbsp ice-cold water',
      '3 spring onions, finely chopped',
      '2 tbsp coriander, chopped',
      '# For stuffing',
      '400 g firm tofu, in thick triangles',
      '2 green peppers, in wide pieces',
      '1 aubergine, in thick slices, split as pockets',
      '6 large mild green chillies, split lengthways',
      '3 tbsp cornflour, for dusting',
      '4 tbsp vegetable oil',
      '# For the broth',
      '1 litre chicken or vegetable stock',
      '20 g ginger, sliced',
      '2 tbsp light soy sauce',
      '1 tsp fine sea salt',
      '# To serve',
      '3 spring onions, sliced',
      'Chilli oil'
    ],
    st: [
      'Chop the fish to a paste and mix it with the pork, cornflour, salt, white pepper, soy sauce, sesame oil and cold water.',
      'Pick up the paste and throw it back against the side of the bowl 25 times, until it is visibly elastic and sticky.',
      'Fold in the spring onions and coriander.',
      'Hollow a pocket in each tofu triangle and dust the inside of every vegetable cavity with cornflour.',
      'Pack the filling into the tofu, peppers, aubergine pockets and chillies, mounding it slightly.',
      'Fry the stuffed pieces filling side down in the oil 3 minutes, until the paste is browned and sealed, then turn and fry 2 minutes more.',
      'Bring the stock to a simmer with the ginger, soy sauce and salt.',
      'Lower the fried pieces into the broth and simmer 12 minutes, until cooked through.',
      'Serve in bowls with the broth, scattered with spring onion, and chilli oil on the side.'
    ],
    tips: [
      'Throw the paste against the bowl 25 times. That is the spring.',
      'Cornflour inside every cavity so the filling grips.',
      'Fry the filling side first to seal it.'
    ],
    pair: ['Steamed rice', 'Chilli oil', 'Blanched greens'],
    store: 'Refrigerated for 3 days in the broth. Freezes 2 months before simmering.',
    nut: [420, 34, 20, 24, 3, 5, 1390]
  },

  'hot-dry-noodles': {
    d: 'Wuhan\'s breakfast: alkaline noodles blanched, oiled, cooled and then reheated to order under sesame paste, pickled radish and chilli oil. No soup at all.',
    meta: 'Wuhan re gan mian: alkaline noodles parboiled, oiled and cooled, then reheated and tossed with loosened sesame paste, pickled radish and chilli oil.',
    kw: ['hot dry noodles', 're gan mian recipe', 'wuhan noodles', 'sesame paste noodles', 'chinese dry noodles breakfast'],
    why: 'The noodles are cooked, oiled and cooled well before they are eaten, which is not a shortcut but the definition of the dish — the cooling firms them so that the second, very brief dip in boiling water leaves them chewy rather than soft. Sesame paste must also be loosened before it goes near the noodles, with warm water or sesame oil, until it pours; straight from the jar it seizes into lumps that never coat anything.',
    ing: [
      '500 g fresh alkaline wheat noodles',
      '3 tbsp sesame oil, for coating',
      '# For the sauce',
      '6 tbsp Chinese sesame paste',
      '5 tbsp warm water',
      '3 tbsp light soy sauce',
      '1 tbsp Chinkiang black vinegar',
      '1 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '# To finish',
      '4 tbsp chilli oil, with sediment',
      '6 tbsp pickled radish or preserved mustard stem, chopped',
      '4 spring onions, sliced',
      '4 tbsp coriander, chopped',
      '4 garlic cloves, crushed with 3 tbsp cold water',
      '2 tbsp toasted sesame seeds'
    ],
    st: [
      'Boil the noodles 90 seconds, until barely tender, then drain them.',
      'Spread them out on a wide tray, pour the sesame oil over and toss with chopsticks until every strand is coated.',
      'Fan or leave them to cool completely, 20 minutes, until firm and separate.',
      'Loosen the sesame paste with the warm water a spoonful at a time until it pours smoothly, then whisk in the soy sauce, vinegar, sugar and salt.',
      'Bring a pan of water back to the boil and dip the cooled noodles in a sieve for 20 seconds only, to heat through.',
      'Shake them dry and divide between bowls.',
      'Spoon the sesame sauce over, then the chilli oil, garlic water, pickled radish, spring onion, coriander and sesame seeds.',
      'Mix hard at the table before eating.'
    ],
    tips: [
      'Cook, oil and cool the noodles first. That is the dish.',
      'Twenty seconds in the boiling water on the second dip.',
      'Loosen the sesame paste until it pours, or it will lump.'
    ],
    pair: ['Soy milk', 'A tea egg', 'Eaten standing up before work'],
    store: 'Cooked oiled noodles keep refrigerated 2 days. Assemble to order.',
    nut: [640, 20, 78, 29, 5, 6, 1390]
  },

  'biang-biang-noodles': {
    d: 'Belt-wide noodles pulled by hand and slapped on the counter, under chilli, garlic and a ladle of smoking oil. Named for the noise the dough makes.',
    meta: 'Xi\'an hand-pulled wide noodles: a rested dough stretched and slapped into belts, boiled, and finished with chilli, garlic and smoking hot oil.',
    kw: ['biang biang noodles', 'biang biang noodles recipe', 'hand pulled wide noodles', 'xian noodles chilli oil', 'chinese belt noodles'],
    why: 'The dough needs two rests, and the second one — oiled, covered, at least an hour — is what makes it stretchable. Gluten that has not relaxed springs back the moment you pull it, and no amount of force will give you a belt; a properly rested dough pulls to a metre with almost no effort. Slapping the strip on the counter as you pull is not showmanship, it uses the dough\'s own weight to do the stretching. And the oil at the end must genuinely smoke, or the raw garlic and chilli on top stay raw.',
    ing: [
      '# For the dough',
      '400 g strong white flour',
      '1 tsp fine sea salt',
      '200 ml water',
      '3 tbsp vegetable oil, for coating',
      '# For the bowls',
      '4 tbsp coarse chilli flakes',
      '8 garlic cloves, finely chopped',
      '4 spring onions, sliced',
      '2 tsp ground Sichuan pepper',
      '1 tsp fine sea salt',
      '# For the dressing',
      '4 tbsp light soy sauce',
      '4 tbsp Chinkiang black vinegar',
      '1 tbsp caster sugar',
      '# To finish',
      '8 tbsp vegetable oil',
      '200 g pak choi or spinach, blanched',
      '4 tbsp coriander, chopped'
    ],
    st: [
      'Mix the flour, salt and water into a stiff dough and knead 8 minutes until smooth. Cover and rest 30 minutes.',
      'Divide into 8 pieces, roll each into an oval, coat generously in oil, and cover tightly.',
      'Rest 1 hour more at room temperature — this is the rest that makes them pull.',
      'Press a chopstick lengthways down the centre of each oval to make a groove.',
      'Hold both ends and pull, slapping the strip against the counter as you go, until it is about a metre long.',
      'Tear it in two along the groove and drop it straight into a large pan of rapidly boiling water.',
      'Boil 90 seconds, adding the blanched greens for the last 20 seconds, then lift into bowls.',
      'Top each bowl with chilli flakes, garlic, spring onion, Sichuan pepper and salt.',
      'Heat the oil until it smokes and pour it over each bowl — it must hiss loudly.',
      'Add the soy sauce, vinegar and sugar, scatter with coriander, and mix hard before eating.'
    ],
    rest: [90, 'resting the dough twice so it will stretch'],
    tips: [
      'The second, oiled rest is what makes them pull. Do not skip it.',
      'Slap as you pull — the weight does the work.',
      'The oil must actually smoke.'
    ],
    pair: ['Rou jia mo', 'A cold beer', 'Pickled garlic'],
    store: 'None. Pull and boil to order.',
    nut: [680, 16, 82, 32, 5, 6, 1490]
  },

  'yangzhou-fried-rice': {
    d: 'Fried rice with prawns, char siu and egg, where every grain is separate and coated in yolk. The version everything else is a shortcut from.',
    meta: 'The classic Yangzhou fried rice with prawns, char siu, egg and peas, made with cold day-old rice over very high heat.',
    kw: ['yangzhou fried rice', 'yangzhou fried rice recipe', 'chinese fried rice prawns', 'char siu fried rice', 'restaurant fried rice'],
    why: 'Day-old refrigerated rice, and there is no way around it. Fresh rice carries too much surface moisture, clumps the moment it hits the wok and steams into a sticky mass; a night uncovered in the fridge dries the outside of each grain. The other technique worth learning is coating the rice in beaten egg before it goes in, so every grain is sealed in yolk — that is what gives the golden, separate grains of proper Yangzhou rice rather than egg in visible lumps.',
    ing: [
      '700 g cooked long-grain rice, cold, from the day before',
      '4 eggs',
      '0.5 tsp fine sea salt, for the eggs',
      '4 tbsp vegetable oil',
      '# For the wok',
      '200 g raw prawns, peeled',
      '150 g char siu or cooked ham, diced',
      '120 g frozen peas',
      '1 carrot, finely diced',
      '4 spring onions, sliced, white and green separated',
      '20 g ginger, finely chopped',
      '# For seasoning',
      '1 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 tsp sesame oil'
    ],
    st: [
      'Break the cold rice up with your hands until there are no clumps left.',
      'Beat 2 of the eggs with the salt and pour them over the rice, turning until every grain is coated.',
      'Beat the other 2 eggs separately.',
      'Heat 2 tbsp of the oil in a wok until smoking, pour in the 2 beaten eggs, let them set for 15 seconds, then scramble and tip them out.',
      'Add another tablespoon of oil and fry the prawns 60 seconds, until just pink. Lift out.',
      'Add the last tablespoon of oil, then the carrot and the white parts of the spring onions with the ginger for 1 minute.',
      'Turn the heat to maximum, add the egg-coated rice and toss constantly 3 minutes, pressing it against the wok, until the grains are separate and steaming.',
      'Add the char siu, peas, prawns and scrambled egg and toss 1 minute.',
      'Season with the soy sauce, wine, salt and white pepper, add the sesame oil and the green spring onion, toss once and serve.'
    ],
    tips: [
      'Cold day-old rice, broken up by hand.',
      'Coat the rice in beaten egg first. That is the golden grain.',
      'Maximum heat and constant tossing once the rice is in.'
    ],
    pair: ['Hot and sour soup', 'Stir-fried greens', 'Chilli oil'],
    store: 'Refrigerated for 2 days. Reheat in a hot wok, never a microwave.',
    nut: [560, 30, 62, 22, 4, 5, 1290]
  },

  'claypot-rice': {
    d: 'Rice cooked in a clay pot with sausage and chicken laid on top, until a crisp golden crust forms on the base that you scrape up at the end.',
    meta: 'Cantonese bo zai fan: rice cooked in a clay pot with marinated chicken and lap cheong, finished over high heat to build a crisp base crust.',
    kw: ['claypot rice', 'bo zai fan recipe', 'chinese clay pot rice', 'lap cheong rice', 'crispy bottom rice chinese'],
    why: 'The crust — the guo ba — comes from the last few minutes over high heat with oil drizzled down the inside of the pot, and it will not form on low heat however long you wait. Rotate the pot a quarter turn every minute during that stage so the crust builds evenly rather than in one scorched patch. Soak the rice for thirty minutes first, which lets it cook through in the small amount of water this method uses without needing a longer time that would burn the base.',
    ing: [
      '300 g jasmine rice',
      '400 ml water',
      '# For the chicken',
      '400 g boneless chicken thigh, in 3 cm pieces',
      '2 tbsp light soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp Shaoxing wine',
      '2 tsp cornflour',
      '1 tsp caster sugar',
      '20 g ginger, shredded',
      '0.5 tsp white pepper',
      '1 tbsp sesame oil',
      '# For the pot',
      '2 lap cheong sausages, sliced diagonally',
      '4 dried shiitake mushrooms, soaked and sliced',
      '3 tbsp vegetable oil',
      '# For the sauce',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '2 tbsp water',
      '1 tbsp caster sugar',
      '1 tsp sesame oil',
      '# To finish',
      '200 g choy sum, blanched',
      '3 spring onions, sliced'
    ],
    st: [
      'Rinse the rice until the water runs clear, then soak it 30 minutes and drain.',
      'Marinate the chicken with the soy sauce, oyster sauce, wine, cornflour, sugar, ginger, white pepper and sesame oil for 20 minutes.',
      'Put the drained rice and the 400 ml water in a clay pot, cover, and bring to the boil over medium heat.',
      'As soon as the water level drops to the surface of the rice, about 8 minutes, lay the chicken, lap cheong and shiitake over the top.',
      'Cover and cook over low heat 12 minutes.',
      'Warm the sauce ingredients together until the sugar dissolves.',
      'Drizzle the vegetable oil down the inside edge of the pot, turn the heat to high and cook 5 minutes, rotating the pot a quarter turn every minute.',
      'Listen for a faint crackling — that is the crust forming. Take it off the heat.',
      'Lay the blanched choy sum over, pour the sauce across, scatter with spring onion, and scrape the crust up from the base as you serve.'
    ],
    tips: [
      'Oil down the inside edge and high heat at the end. That is the crust.',
      'Turn the pot a quarter turn every minute so it browns evenly.',
      'Soak the rice, or the base burns before the grain is done.'
    ],
    pair: ['Blanched choy sum', 'Chilli oil', 'A clear soup'],
    store: 'Refrigerated for 2 days, though the crust is lost. Reheat in a pan.',
    nut: [680, 34, 78, 26, 3, 8, 1390]
  },

  'zongzi': {
    d: 'Glutinous rice packed with pork belly and salted egg yolk into a bamboo-leaf pyramid, tied with string and boiled for four hours. Made for the Dragon Boat Festival.',
    meta: 'Savoury zongzi: soaked glutinous rice and marinated pork belly with salted egg yolk, folded into bamboo leaf cones, tied and boiled four hours.',
    kw: ['zongzi', 'zongzi recipe', 'sticky rice dumplings', 'bamboo leaf rice parcels', 'dragon boat festival food'],
    why: 'The parcel has to be tied tightly enough to compress the rice but not so tightly that it cannot expand — a loose zongzi lets water in and comes out as porridge, and an over-tight one splits along a seam. Fold a proper cone with no gap at the point, which is where leaks always start. Four hours at a steady simmer is not negotiable either: glutinous rice needs that long to go fully translucent, and undercooked zongzi have a chalky core.',
    ing: [
      '800 g glutinous rice',
      '40 dried bamboo leaves',
      '# For the pork',
      '600 g pork belly, in 3 cm pieces',
      '3 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '2 tbsp Shaoxing wine',
      '1 tbsp caster sugar',
      '1 tsp five-spice powder',
      '0.5 tsp white pepper',
      '# For the rice',
      '2 tbsp light soy sauce',
      '1 tbsp dark soy sauce',
      '2 tbsp vegetable oil',
      '1.5 tsp fine sea salt',
      '# Also',
      '10 salted duck egg yolks',
      '10 dried shiitake mushrooms, soaked and halved',
      '100 g dried shrimp, soaked, optional',
      'Kitchen string'
    ],
    st: [
      'Soak the glutinous rice in cold water 4 hours, then drain it well.',
      'Soak the bamboo leaves in hot water 2 hours, then simmer them 10 minutes, rinse each one and trim the hard stems.',
      'Marinate the pork with its soy sauces, wine, sugar, five-spice and white pepper for 2 hours.',
      'Toss the drained rice with its soy sauces, oil and salt until evenly coloured.',
      'Overlap two leaves, fold them into a tight cone with no gap at the point.',
      'Spoon in rice, then a piece of pork, an egg yolk, a mushroom and a few shrimp, then more rice to fill.',
      'Fold the leaf over the top, wrap the tail round and tie firmly with string — tight enough to compress, loose enough to expand.',
      'Repeat to make about 20 parcels.',
      'Lower them into a large pot of boiling water, weight them down with a plate, and simmer 4 hours, topping up with boiling water.',
      'Lift them out, drain, and let them stand 15 minutes before untying.'
    ],
    rest: [480, 'soaking the rice and leaves and marinating the pork'],
    tips: [
      'No gap at the point of the cone. That is where leaks start.',
      'Tie tight enough to compress, loose enough to expand.',
      'Four hours. Undercooked glutinous rice has a chalky core.'
    ],
    pair: ['Chilli oil', 'Strong tea', 'Eaten cold the next day'],
    store: 'Refrigerated for 5 days or frozen 3 months. Re-boil 20 minutes.',
    nut: [620, 24, 78, 24, 2, 4, 1290]
  },

  'vinegar-cabbage': {
    d: 'Cabbage torn by hand rather than cut, fried hard with dried chilli and finished with black vinegar. Five minutes, and the tearing genuinely matters.',
    meta: 'Chinese hand-torn cabbage stir-fried over high heat with dried chilli, garlic and Sichuan pepper, finished with black vinegar off the heat.',
    kw: ['vinegar cabbage', 'hand torn cabbage recipe', 'cu liu bai cai', 'chinese cabbage stir fry', 'sichuan cabbage vinegar'],
    why: 'Tear the cabbage into rough pieces instead of shredding it. Torn edges are ragged and porous and take up the vinegar and oil, while knife-cut edges are sealed and smooth and the dressing runs off — the same principle as the smashed cucumber. Add the vinegar at the very end, off the heat: Chinkiang vinegar is aromatic rather than merely sour and most of that aroma boils away within seconds in a hot wok.',
    ing: [
      '600 g pointed or flat cabbage, hand-torn into 4 cm pieces',
      '3 tbsp vegetable oil',
      '6 dried red chillies, snipped',
      '1 tsp Sichuan peppercorns',
      '5 garlic cloves, sliced',
      '20 g ginger, shredded',
      '1 tbsp light soy sauce',
      '1 tsp caster sugar',
      '0.75 tsp fine sea salt',
      '# To finish',
      '2 tbsp Chinkiang black vinegar',
      '1 tsp sesame oil'
    ],
    st: [
      'Tear the cabbage into rough pieces with your hands, discarding the thickest core. Shake it dry.',
      'Heat the wok until it smokes, then add the oil.',
      'Add the dried chillies and Sichuan peppercorns and toast 20 seconds, until fragrant.',
      'Add the garlic and ginger for 15 seconds.',
      'Add the cabbage all at once and toss hard over maximum heat 3 minutes, until the edges are charred in places and the stems still snap.',
      'Add the soy sauce, sugar and salt and toss 30 seconds more.',
      'Take the wok off the heat, add the vinegar and sesame oil, toss once and serve immediately.'
    ],
    tips: [
      'Tear it, do not shred it. Ragged edges hold the dressing.',
      'Maximum heat and keep it moving. It should char in places.',
      'Vinegar off the heat, or the aroma goes.'
    ],
    pair: ['Steamed rice', 'Braised pork', 'A cold beer'],
    store: 'Best immediately. Refrigerated 1 day and eaten cold.',
    nut: [150, 3, 12, 11, 4, 7, 890]
  },

  'lotus-root-stir-fry': {
    d: 'Lotus root sliced thin, rinsed of its starch and fried for barely two minutes, so it stays as crisp as an apple.',
    meta: 'Thinly sliced lotus root rinsed to remove surface starch, stir-fried fast with celery, garlic and chilli so it stays crisp.',
    kw: ['lotus root stir fry', 'stir fried lotus root recipe', 'crisp lotus root', 'chinese lotus root dish', 'lotus root celery'],
    why: 'Rinse the sliced lotus root under cold water until it stops going cloudy, then keep it in acidulated water until it goes in the wok. Surface starch makes the slices stick together and turns them gummy in the pan, and lotus root also browns very fast once cut, which the acid prevents. Two minutes of frying, no more — the whole appeal is the crunch, and lotus root cooked through goes floury like an overboiled potato.',
    ing: [
      '500 g lotus root, peeled and sliced 3 mm',
      '1 tbsp rice vinegar, for the soaking water',
      '3 tbsp vegetable oil',
      '4 garlic cloves, sliced',
      '20 g ginger, shredded',
      '2 dried red chillies, snipped',
      '2 celery sticks, sliced diagonally',
      '1 red pepper, in strips',
      '# For seasoning',
      '1 tbsp light soy sauce',
      '1 tbsp Shaoxing wine',
      '1 tsp caster sugar',
      '0.75 tsp fine sea salt',
      '1 tbsp rice vinegar',
      '1 tsp sesame oil',
      '2 spring onions, sliced'
    ],
    st: [
      'Rinse the lotus root slices under cold running water until the water stops turning cloudy.',
      'Keep them in a bowl of cold water with the tablespoon of vinegar until you are ready, then drain and shake dry.',
      'Heat the wok until smoking and add the oil.',
      'Fry the garlic, ginger and dried chillies 15 seconds.',
      'Add the celery and pepper and toss 45 seconds.',
      'Add the lotus root and toss hard over maximum heat 90 seconds.',
      'Add the soy sauce, wine, sugar and salt and toss 30 seconds more.',
      'Off the heat, add the vinegar, sesame oil and spring onions, toss once and serve.'
    ],
    tips: [
      'Rinse until the water runs clear. Starch makes it gummy.',
      'Acidulated water stops it browning.',
      'Ninety seconds. Cooked-through lotus root goes floury.'
    ],
    pair: ['Steamed rice', 'Braised pork', 'Steamed fish'],
    store: 'Refrigerated for 2 days, though it softens. Do not freeze.',
    nut: [220, 4, 28, 11, 5, 8, 890]
  },

  'wood-ear-salad': {
    d: 'Rehydrated wood ear fungus in black vinegar, garlic and chilli oil. Almost no calories, no cooking to speak of, and a texture nothing else has.',
    meta: 'Dried wood ear mushrooms soaked, blanched and chilled, dressed with black vinegar, garlic, coriander and chilli oil.',
    kw: ['wood ear salad', 'wood ear mushroom recipe', 'liang ban mu er', 'chinese cold mushroom salad', 'black fungus salad'],
    why: 'Blanch the soaked wood ear for a full minute and then plunge it into iced water. The blanching removes the faintly muddy taste that soaked-but-raw wood ear carries, and the ice bath is what makes it snap between the teeth rather than feeling rubbery. Soak in cold water rather than hot, over several hours if you can: hot water swells them fast but leaves them slack, and cold-soaked wood ear has noticeably better bite.',
    ing: [
      '40 g dried wood ear mushrooms',
      '# For the dressing',
      '4 tbsp Chinkiang black vinegar',
      '3 tbsp light soy sauce',
      '3 tbsp chilli oil, with sediment',
      '6 garlic cloves, finely chopped',
      '1 tbsp sesame oil',
      '2 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '0.5 tsp ground Sichuan pepper',
      '# To finish',
      '1 red chilli, sliced',
      '4 tbsp coriander, chopped',
      '3 spring onions, sliced',
      '2 tbsp toasted sesame seeds',
      '1 cucumber, in matchsticks'
    ],
    st: [
      'Soak the wood ear in plenty of cold water 4 hours, until fully swollen and soft.',
      'Rinse them thoroughly, trim off any hard stem nubs and tear the larger pieces in half.',
      'Blanch them in boiling water 60 seconds.',
      'Drain and plunge straight into iced water for 5 minutes, then drain thoroughly.',
      'Whisk the vinegar, soy sauce, chilli oil, garlic, sesame oil, sugar, salt and Sichuan pepper together.',
      'Toss the wood ear with the cucumber and the dressing.',
      'Leave 10 minutes for the dressing to take, then scatter with chilli, coriander, spring onion and sesame seeds.'
    ],
    rest: [240, 'soaking the dried wood ear in cold water'],
    tips: [
      'Cold soak, several hours. Hot water leaves them slack.',
      'Blanch a minute, then straight into iced water.',
      'Ten minutes in the dressing before it reaches the table.'
    ],
    pair: ['Smashed cucumber', 'Bang bang chicken', 'A cold beer'],
    store: 'Refrigerated for 3 days and it improves overnight.',
    nut: [160, 3, 12, 12, 5, 5, 1090]
  },

  'hot-and-sour-potato': {
    d: 'Potato cut into matchsticks, rinsed of starch and fried for ninety seconds so it stays crunchy. Sour, hot, and unlike anything most people expect potato to do.',
    meta: 'Potato cut into fine slivers, rinsed of surface starch, then flash-fried with dried chilli, Sichuan pepper and black vinegar so it stays crisp.',
    kw: ['hot and sour potato', 'suan la tu dou si', 'shredded potato stir fry', 'chinese crispy potato slivers', 'sichuan potato recipe'],
    why: 'Rinse the cut potato in several changes of cold water until it runs completely clear, then dry it. The surface starch is what makes potato go soft and sticky in a pan, and washed away the slivers stay separate and crunchy through the frying. Cut them as fine and even as you can, ideally on a mandolin then stacked and sliced, because uneven slivers cook unevenly and there is no time to correct it in ninety seconds.',
    ing: [
      '600 g waxy potatoes, peeled',
      '3 tbsp vegetable oil',
      '6 dried red chillies, snipped',
      '1 tsp Sichuan peppercorns',
      '4 garlic cloves, sliced',
      '20 g ginger, shredded',
      '1 green pepper, in fine strips',
      '# For seasoning',
      '2 tbsp Chinkiang black vinegar',
      '1 tbsp light soy sauce',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '# To finish',
      '1 tbsp Chinkiang black vinegar',
      '1 tsp sesame oil',
      '2 spring onions, sliced'
    ],
    st: [
      'Slice the potatoes 2 mm thick, stack the slices and cut them into fine matchsticks.',
      'Rinse them in three changes of cold water until it runs completely clear, then drain and spread them on a cloth to dry.',
      'Heat the wok until smoking and add the oil.',
      'Add the dried chillies and Sichuan peppercorns and toast 15 seconds.',
      'Add the garlic and ginger for 10 seconds, then the green pepper for 20 seconds.',
      'Add the potato slivers and toss hard over maximum heat 90 seconds.',
      'Add the 2 tbsp vinegar, the soy sauce, sugar and salt and toss 30 seconds more, until the slivers are just tender but still crunchy.',
      'Off the heat, add the final tablespoon of vinegar, the sesame oil and the spring onions, toss once and serve.'
    ],
    tips: [
      'Three changes of water until it runs clear.',
      'Dry them, or the wok will not stay hot enough.',
      'Ninety seconds. They should still crunch.'
    ],
    pair: ['Steamed rice', 'Braised meat', 'A cold beer'],
    store: 'Best immediately. It loses its crunch within the hour.',
    nut: [230, 4, 34, 10, 4, 5, 1090]
  }
};
