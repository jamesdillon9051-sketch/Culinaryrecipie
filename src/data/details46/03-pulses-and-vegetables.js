'use strict';

/**
 * Volume forty-six — pulses and vegetables, first part.
 *
 * Twenty dishes from lentils, chickpeas, cabbage, carrots, cauliflower and
 * potatoes: a cauliflower and pea dry curry, fritters, dal, tomato rice,
 * curd rice, a gram flour pancake, stir-fried and roast vegetables, potato
 * salad, jacket potatoes, and two quick pizzas on flatbread. Times are the
 * recipe's own; hobs and ovens differ, so each method says what to look for.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'gobi-matar': {
    d: 'A dry North Indian curry of cauliflower and green peas cooked with onion, tomato, ginger and ground spices.',
    meta: 'Gobi matar: cauliflower and green peas cooked with onion, tomato, ginger and ground spices. Four servings, cooked for 25 minutes.',
    kw: ['gobi matar', 'cauliflower and pea curry', 'gobi matar sabzi', 'aloo gobi matar without potato', 'dry cauliflower and peas curry'],
    why: 'Cauliflower, peas, an onion, a tomato and a few spices from the cupboard: that is the entire shopping list, and it makes a dry curry that goes with rice, bread or both.\n\nCut the cauliflower into small, even florets. They cook faster and soak up more of the masala. Large pieces stay hard in the middle while the outside turns mushy. **Do not add water at the start.** Let the cauliflower cook in its own steam under a lid, which keeps the flavour concentrated.\n\nThe masala is built in stages. Cook the onion until golden, then the ginger, then the tomato and the dry spices until the oil starts to separate. That sequence gives depth that a quick stir-fry cannot.\n\nAdd the peas near the end. Frozen ones need only a couple of minutes, and they keep their colour. Leftovers make a fine filling for a wrap or a paratha the next day. Add a squeeze of lemon when reheating to brighten the flavours.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger, grated',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1/2 tsp salt',
      '500 g cauliflower florets',
      '150 g frozen peas',
      '1/2 tsp garam masala',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oil in a wide pan and fry the cumin seeds for 30 seconds. Add the onion and cook for 6 minutes until golden.',
      'Add the ginger and cook for 1 minute, then the tomatoes, ground coriander, turmeric, chilli powder and salt. Cook for 4 minutes until the oil separates.',
      'Add the cauliflower, stir to coat, cover and cook on a low heat for 10 minutes, stirring twice.',
      'Add the peas and cook for 3 minutes. Stir in the garam masala and fresh coriander.'
    ],
    tips: [
      'Cut the florets to a similar size.',
      'Keep the lid on so the cauliflower cooks in its own steam.',
      'If the pan sticks, add a splash of water rather than more oil.',
      'Stir in the garam masala at the end, as it loses its scent if cooked for long.'
    ],
    pair: ['Chapati', 'Steamed basmati rice', 'Dal', 'Cucumber raita'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [168, 6, 18, 8, 6, 8, 350]
  },

  'lentil-fritters': {
    d: 'Crisp fritters of cooked brown lentils, grated onion, garlic, cumin and parsley, bound with flour and fried.',
    meta: 'Lentil fritters: cooked brown lentils with onion, garlic, cumin and parsley, shallow-fried until crisp. Four servings, cooked for 15 minutes.',
    kw: ['lentil fritters', 'lentil patties', 'crispy lentil fritters', 'lentil fritters with cumin', 'lentil cakes'],
    why: 'Why do lentil fritters fall apart in the pan? The mix is usually too wet, and the fix is to mash the lentils partway so they hold together, then add enough flour to bind them.\n\nTinned or cooked lentils work well. Drain them very thoroughly and pat them dry. **Mash about half the lentils.** The mashed half acts as glue and the whole ones give the texture.\n\nGrate the onion and squeeze out the juice, or the mixture turns slushy. A tablespoon of flour is enough to bind, and an egg brings it together.\n\nFry in a thin layer of oil over a medium heat. Turn the fritters only once, after the underside has formed a golden crust. Moving them early tears them apart. Serve with yoghurt mixed with chopped mint and a pinch of salt. The cool sauce balances the cumin and the crisp edges. Tinned lentils are cheap, but dried lentils boiled until soft and drained work just as well and cost even less.',
    ing: [
      '480 g tinned brown lentils, drained',
      '1 small onion, about 80 g, grated',
      '2 garlic cloves, crushed',
      '1 tsp ground cumin',
      '15 g fresh parsley, chopped',
      '1 egg, about 50 g',
      '3 tbsp plain flour',
      '1/2 tsp salt',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Drain the lentils well and pat dry. Mash half of them roughly with a fork.',
      'Squeeze the grated onion in a clean cloth and add it to the lentils with the garlic, cumin, parsley, egg, flour and salt. Mix well.',
      'Heat the oil in a frying pan over a medium heat. Drop in spoonfuls of the mix and flatten slightly.',
      'Fry for 4 minutes on each side until crisp and golden. Drain on kitchen paper.'
    ],
    tips: [
      'Dry the lentils well before mixing.',
      'Mash half the lentils for a mix that holds together.',
      'Leave the fritters alone until the base is golden.',
      'Chill the mix for 10 minutes if it feels sticky.'
    ],
    pair: ['Plain yoghurt', 'Green salad', 'Lemon wedges', 'Flatbread'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp them again.',
    nut: [565, 33, 79, 13, 14, 3, 320]
  },

  'chickpea-tomato-stew': {
    d: 'Tinned chickpeas simmered with onion, garlic, tomatoes, cumin and paprika into a thick, spoonable stew.',
    meta: 'Chickpea tomato stew: chickpeas simmered with onion, garlic, tomatoes, cumin and paprika. Four servings, cooked for 25 minutes.',
    kw: ['chickpea tomato stew', 'chickpea and tomato stew', 'tomato chickpea stew', 'spiced chickpea stew', 'chickpea stew with cumin'],
    why: 'It looks like a thin curry and eats like a rich stew, which is a sign that the sauce has cooked for long enough. Chickpeas are cheap and filling, and tinned ones need only enough time to take on the flavour of the sauce.\n\nCook the onion in oil until soft and golden before anything else goes in. It sweetens the whole pot. Then add the garlic and spices for 30 seconds so they bloom in the hot oil. **Do not burn the garlic.** It turns bitter within seconds and cannot be rescued.\n\nThe tomatoes and chickpeas simmer together for about 20 minutes. During that time the sauce thickens and some of the chickpeas break, which gives the stew body without any flour.\n\nFinish with a squeeze of lemon and some fresh coriander or parsley. Taste for salt just before serving. A spoonful of plain yoghurt on each bowl cools the spices. The stew is just as good the next day, reheated gently with a splash of water.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '400 g tinned chopped tomatoes',
      '480 g tinned chickpeas, drained',
      '200 ml water',
      '1/2 tsp salt',
      '1 tbsp lemon juice',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion for 6 minutes until soft and golden. Add the garlic, cumin and paprika for 30 seconds.',
      'Add the tomatoes, chickpeas, water and salt and bring to the boil.',
      'Lower the heat and simmer for 18 minutes, stirring now and then, until the sauce is thick.',
      'Crush a few chickpeas against the side of the pan. Stir in the lemon juice and parsley.'
    ],
    tips: [
      'Cook the onion until golden for a sweeter base.',
      'Keep the heat low once the garlic goes in.',
      'Crush some chickpeas to thicken the stew.',
      'Finish with the lemon juice so it stays bright.'
    ],
    pair: ['Rice', 'Flatbread', 'Plain yoghurt', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [246, 10, 29, 10, 8, 8, 660]
  },

  'jeera-aloo': {
    d: 'Potatoes fried with cumin seeds, turmeric and chilli until golden and tender, finished with coriander and lemon.',
    meta: 'Jeera aloo: potatoes fried with cumin seeds, turmeric and chilli until golden, finished with lemon. Four servings, cooked for 20 minutes.',
    kw: ['jeera aloo', 'cumin potatoes', 'jeera aloo recipe', 'indian cumin potatoes', 'dry potato curry with cumin'],
    why: 'Jeera is the Hindi word for cumin, and aloo means potato. The name is the recipe: potatoes, cumin and not much else. That is why the technique matters so much.\n\nBoil the potatoes first, then let them cool and cut them into cubes. Potatoes that have been boiled and chilled hold their shape in the pan instead of crumbling. **Cut them while they are cool.** Hot potatoes are soft and fall apart under the knife.\n\nFry the cumin seeds in hot oil for 20 seconds. They crackle and release a warm, nutty scent. If they turn dark brown they have burned, so lower the heat or start again.\n\nToss the potatoes in the spiced oil until they take on a golden crust at the edges. A squeeze of lemon at the end brings the whole dish into focus. Leftover boiled potatoes are ideal here. In fact, cold potatoes from the day before fry better than freshly boiled ones.',
    ing: [
      '600 g potatoes, unpeeled',
      '3 tbsp vegetable oil',
      '2 tsp cumin seeds',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1/2 tsp salt',
      '1 tbsp lemon juice',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Boil the potatoes in salted water for 12 minutes until just tender. Drain, cool for 10 minutes, then peel and cut into 2 cm cubes.',
      'Heat the oil in a wide pan and fry the cumin seeds for 20 seconds until they crackle.',
      'Add the potatoes, turmeric, chilli powder and salt. Fry for 8 minutes, turning now and then, until golden.',
      'Squeeze over the lemon juice and scatter with the coriander.'
    ],
    tips: [
      'Cool the potatoes before cutting them.',
      'Watch the cumin seeds, because they burn fast.',
      'Turn the potatoes only now and then so a crust can form.',
      'Add a pinch of chaat masala for extra tang.'
    ],
    pair: ['Dal', 'Chapati', 'Plain yoghurt', 'Pickle'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot pan to crisp it up.',
    nut: [219, 3, 27, 11, 4, 1, 310]
  },

  'masoor-dal': {
    d: 'Red lentils simmered with turmeric until soft, finished with a sizzling tempering of garlic, cumin and chilli.',
    meta: 'Masoor dal: red lentils simmered with turmeric and finished with a tempering of garlic, cumin and chilli. Four servings, cooked for 25 minutes.',
    kw: ['masoor dal', 'red lentil dal', 'masoor dal tadka', 'indian red lentil dal', 'red lentil curry'],
    why: 'The first sign it is ready is the smell of the tadka: garlic and cumin hitting hot oil and filling the room with a toasted, nutty scent. Pour it over the dal while it still sizzles.\n\nRed lentils need no soaking. They collapse in about 20 minutes into a soft, golden dal, as long as they are covered with plenty of water and stirred now and then. Rinse them first and skim off any foam that rises to the top.\n\nThe dal itself is plain: lentils, water, turmeric and salt. All the flavour that makes it special lives in the tadka. **Heat the oil before the garlic goes in.** Cold oil lets the garlic stew instead of crisp.\n\nStir the tadka into the dal at the last moment and serve at once. The contrast between soft lentils and sharp, crisp seasoning is the point. A squeeze of lemon at the table lifts the flavour. Leftover dal thickens in the fridge, so add a splash of water when you reheat it.',
    ing: [
      '200 g red lentils, rinsed',
      '800 ml water',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '4 garlic cloves, sliced',
      '2 dried red chillies',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Put the lentils, water and turmeric in a pan. Bring to the boil, skim off the foam and lower the heat.',
      'Simmer for 20 minutes, stirring now and then, until the lentils are soft and the dal is thick. Stir in the salt.',
      'Heat the oil in a small pan. Add the cumin seeds for 20 seconds, then the garlic and chillies for 1 minute until the garlic is golden.',
      'Pour the sizzling mixture over the dal, stir in the coriander and serve.'
    ],
    tips: [
      'Rinse the lentils and skim any foam from the surface.',
      'Heat the oil properly before the garlic goes in.',
      'Do not let the garlic go dark, or it turns bitter.',
      'Loosen the dal with hot water if it thickens as it stands.'
    ],
    pair: ['Steamed basmati rice', 'Chapati', 'Cucumber raita', 'Pickle'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months. Add water when reheating.',
    nut: [248, 12, 32, 8, 6, 1, 300]
  },

  'tomato-rice': {
    d: 'Basmati rice cooked with onion, fresh tomatoes, ginger, garlic and ground spices in a single pot.',
    meta: 'Tomato rice: basmati rice cooked with onion, tomatoes, ginger, garlic and spices in one pot. Four servings, cooked for 25 minutes.',
    kw: ['tomato rice', 'indian tomato rice', 'tomato bath', 'spiced tomato rice', 'tomato rice with basmati'],
    why: 'Rinse the rice and cook the tomatoes until they break down. Those two steps decide whether tomato rice is fragrant and loose or sticky and pink.\n\nThe tomatoes go in with the spices and cook to a thick paste before the rice goes anywhere near the pan. That paste coats each grain and gives the dish its colour and tang. **Measure the water carefully.** Tomatoes release liquid as they cook, so you need slightly less water than for plain rice.\n\nRice and masala are stirred together briefly so the grains are glossy. Then the water goes in, the lid goes on and the heat goes down.\n\nResist lifting the lid. Steam is what cooks the rice. Let it rest off the heat for 5 minutes before fluffing with a fork. Ripe tomatoes give the best colour and sweetness. If yours are pale, a spoonful of tomato paste in the masala helps.',
    ing: [
      '250 g basmati rice',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, sliced',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, about 300 g, chopped',
      '1 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '1/2 tsp garam masala',
      '1 tsp salt',
      '400 ml water',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Rinse the rice until the water runs clear, then soak for 10 minutes and drain.',
      'Heat the oil in a pan with a lid and fry the cumin seeds for 20 seconds. Add the onion and cook for 5 minutes until golden.',
      'Add the ginger and garlic paste, the tomatoes, chilli powder, turmeric and salt. Cook for 6 minutes until thick.',
      'Stir in the rice, garam masala and water and bring to the boil. Cover, lower the heat and cook for 12 minutes.',
      'Rest off the heat for 5 minutes, fluff with a fork and scatter with the coriander.'
    ],
    tips: [
      'Rinse the rice until the water runs clear.',
      'Cook the tomato paste down until thick before the rice goes in.',
      'Keep the lid on while the rice steams.',
      'Use slightly less water if the tomatoes are very juicy.'
    ],
    pair: ['Cucumber raita', 'Papad', 'Boiled eggs', 'Pickle'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [328, 6, 58, 8, 3, 4, 610]
  },

  'curd-rice': {
    d: 'Soft cooked rice mixed with yoghurt and milk, finished with a tempering of mustard seeds, ginger, chilli and curry leaves.',
    meta: 'Curd rice: soft cooked rice mixed with yoghurt and milk, finished with mustard seeds, ginger and curry leaves. Two servings, cooked for 10 minutes.',
    kw: ['curd rice', 'south indian curd rice', 'thayir sadam', 'yoghurt rice', 'curd rice with tempering'],
    why: 'Most home versions come out gluey, or sour, or both, and the fix is to mash the rice while it is warm and to add the yoghurt only after it has cooled. Hot rice splits the yoghurt, and the result is grainy and sharp.\n\nThis is a cooling dish, eaten across southern India on hot days and at the end of a meal. It needs rice cooked a little past al dente, so the grains give way when pressed. **Mash the rice lightly with the back of a spoon.** That is what makes it creamy.\n\nStir in the yoghurt and a splash of milk. The milk softens the sourness and keeps the rice from drying as it stands.\n\nThe tempering goes on at the end. Mustard seeds should pop, the ginger and chilli sizzle briefly and the curry leaves crackle. Pour it over the rice and stir it through. Serve it cold or at room temperature on a hot day. A little pomegranate or grated carrot on top adds colour and crunch.',
    ing: [
      '250 g cooked white rice',
      '200 g plain yoghurt',
      '80 ml whole milk',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '1/2 tsp mustard seeds',
      '1 tsp ginger, finely chopped',
      '1 green chilli, chopped',
      '1 g curry leaves'
    ],
    st: [
      'Mash the warm rice lightly with the back of a spoon and leave to cool for 10 minutes.',
      'Stir in the yoghurt, milk and salt until creamy.',
      'Heat the oil in a small pan. Add the mustard seeds, and when they pop add the ginger, chilli and curry leaves for 30 seconds.',
      'Pour the tempering over the rice and stir through.'
    ],
    tips: [
      'Cool the rice before the yoghurt goes in.',
      'Add the milk gradually until the rice is as creamy as you like.',
      'Wait for the mustard seeds to pop before adding the other ingredients.',
      'Serve it at room temperature or cold.'
    ],
    pair: ['Mango pickle', 'Fried papad', 'Potato fry', 'Sliced cucumber'],
    store: 'Best eaten fresh. Keeps in the fridge for 1 day; the rice absorbs the yoghurt, so loosen with milk.',
    nut: [323, 15, 41, 11, 1, 6, 660]
  },

  'besan-chilla': {
    d: 'Savoury pancakes of gram flour batter with onion, tomato, green chilli and coriander, cooked on a hot pan.',
    meta: 'Besan chilla: gram flour pancakes with onion, tomato, green chilli and coriander. Four servings, cooked for 15 minutes.',
    kw: ['besan chilla', 'gram flour pancakes', 'besan cheela', 'savoury chickpea flour pancakes', 'indian gram flour pancake'],
    why: 'Whisk the batter well. Gram flour clumps the moment it meets water, and a lumpy batter makes patchy chilla that tear when you turn them.\n\nAdd the water a little at a time, whisking after each splash. The batter should be about the thickness of single cream, thin enough to spread but thick enough to hold the vegetables. **Rest the batter for 5 minutes before cooking.** The flour absorbs water as it stands and thickens slightly, so you can judge the texture more accurately.\n\nSpread each pancake with the back of a ladle, working from the centre outwards in a circle. A thin chilla crisps at the edges and cooks through in a couple of minutes.\n\nTurn it once. Moving it early tears it, and a second turn makes it soggy. Serve it hot with green chutney or ketchup. Fill with grated paneer or cheese for a heartier version. The pancakes are best hot, so serve each one as it comes off the pan.',
    ing: [
      '200 g gram flour',
      '350 ml water',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1/2 tsp salt',
      '1 onion, about 150 g, finely chopped',
      '1 tomato, about 100 g, finely chopped',
      '1 green chilli, finely chopped',
      '10 g fresh coriander, chopped',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Whisk the gram flour, turmeric, chilli powder and salt in a bowl. Add the water slowly, whisking until smooth. Rest for 5 minutes.',
      'Stir in the onion, tomato, chilli and coriander.',
      'Heat a non-stick pan over a medium heat and brush with a little of the oil. Pour in a ladleful of batter and spread it thin.',
      'Cook for 2 minutes until golden underneath, brush the top with oil, flip and cook for 1 minute more. Repeat with the rest.'
    ],
    tips: [
      'Add the water gradually for a lump-free batter.',
      'Spread the batter thin for a crisp edge.',
      'Flip once, after the underside has set.',
      'Add a little grated paneer or cheese on top for a richer version.'
    ],
    pair: ['Green chutney', 'Tomato ketchup', 'Plain yoghurt', 'Masala chai'],
    store: 'Best eaten straight away. The batter keeps in the fridge for 1 day.',
    nut: [295, 6, 43, 11, 3, 3, 310]
  },

  'cabbage-stir-fry-with-garlic': {
    d: 'Shredded cabbage stir-fried over a high heat with garlic, soy sauce and a pinch of sugar until just tender.',
    meta: 'Cabbage stir fry with garlic: shredded cabbage cooked fast over a high heat with garlic and soy sauce. Four servings, cooked for 8 minutes.',
    kw: ['cabbage stir fry with garlic', 'chinese garlic cabbage', 'stir fried cabbage', 'garlic cabbage stir fry', 'cabbage with soy sauce'],
    why: 'When the cabbage hits the pan it should hiss, so heat the pan first. A hot wok or wide frying pan cooks the cabbage in minutes, leaving it sweet and tender with charred edges. A cool pan makes it steam, and steamed cabbage goes limp and smells strongly of sulphur.\n\nCut the cabbage into thin strips, no wider than a pencil. Thin pieces cook fast and absorb the sauce. **Do not overload the pan.** Cook in two batches if needed, because crowding drops the temperature.\n\nAdd the garlic after the cabbage has started to soften. If it goes in first, it burns before the cabbage is ready.\n\nSoy sauce and a pinch of sugar go in at the end. Toss for 30 seconds and serve straight away, while the cabbage still has a slight bite. Add a few dried chillies with the garlic for warmth. The stir fry takes only minutes, so have everything chopped and ready before the pan is hot.',
    ing: [
      '2 tbsp vegetable oil',
      '600 g white cabbage, thinly shredded',
      '4 garlic cloves, sliced',
      '2 tbsp soy sauce',
      '1 tsp sugar',
      '1/2 tsp sesame oil',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oil in a wok or large frying pan over a high heat until it shimmers.',
      'Add the cabbage and stir fry for 4 minutes until it starts to soften and colour at the edges.',
      'Add the garlic and stir fry for 1 minute.',
      'Add the soy sauce, sugar and pepper and toss for 30 seconds. Finish with the sesame oil and serve.'
    ],
    tips: [
      'Heat the pan well before the cabbage goes in.',
      'Cook in two batches if the pan is crowded.',
      'Add the garlic late so it does not burn.',
      'Stop cooking while the cabbage still has some bite.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Noodles', 'Braised tofu'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; the cabbage softens when reheated.',
    nut: [128, 3, 11, 8, 4, 6, 470]
  },

  'cabbage-fritters': {
    d: 'Shredded cabbage and spring onion bound in a thin batter and fried until crisp, in the style of a savoury pancake.',
    meta: 'Cabbage fritters: shredded cabbage and spring onion in a light batter, shallow-fried until crisp. Four servings, cooked for 15 minutes.',
    kw: ['cabbage fritters', 'crispy cabbage fritters', 'cabbage pancakes', 'shredded cabbage fritters', 'savoury cabbage pancakes'],
    why: 'Most home versions come out soggy, and the fix is to salt the cabbage first and squeeze it dry. Cabbage is mostly water, and if that water stays in, it leaks into the batter and the fritters steam instead of crisp.\n\nShred the cabbage finely, toss it with the salt and leave it for 10 minutes. Then squeeze out the liquid with your hands. **Be firm.** The cabbage should look noticeably smaller and feel almost dry.\n\nThe batter is plain flour, egg and a splash of water, enough to coat the cabbage rather than drown it. Too much batter makes a heavy fritter; too little and it falls apart.\n\nFry in a thin layer of oil over a medium heat. Press each fritter flat with a spatula so it cooks evenly. Serve with soy sauce or sweet chilli sauce. A drizzle of mayonnaise and a sprinkle of sesame seeds finish the fritters nicely. Eat them while they are still crisp.',
    ing: [
      '400 g white cabbage, finely shredded',
      '1/2 tsp salt',
      '3 spring onions, about 40 g, sliced',
      '100 g plain flour',
      '2 eggs, about 100 g',
      '80 ml water',
      '1/4 tsp black pepper',
      '4 tbsp vegetable oil',
      '2 tbsp soy sauce'
    ],
    st: [
      'Toss the cabbage with the salt and leave for 10 minutes. Squeeze out as much liquid as you can.',
      'Mix the cabbage, spring onions, flour, eggs, water and pepper to a thick batter.',
      'Heat 2 tbsp of the oil in a frying pan over a medium heat. Drop in 4 spoonfuls of the mix and press flat.',
      'Fry for 3 minutes on each side until golden and crisp. Repeat with the rest of the oil and batter. Serve with the soy sauce.'
    ],
    tips: [
      'Squeeze the salted cabbage firmly.',
      'Keep the batter just thick enough to coat the cabbage.',
      'Press the fritters flat so they cook through.',
      'Serve at once, while they are crisp.'
    ],
    pair: ['Soy sauce', 'Sweet chilli sauce', 'Steamed rice', 'Sliced cucumber'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them again.',
    nut: [289, 8, 26, 17, 4, 4, 790]
  },

  'carrot-salad-with-lemon': {
    d: 'Grated carrots dressed with lemon juice, olive oil, cumin and parsley, served cold.',
    meta: 'Carrot salad with lemon: grated carrots dressed with lemon, olive oil, cumin and parsley. Four servings, no cooking needed.',
    kw: ['carrot salad with lemon', 'moroccan carrot salad', 'grated carrot salad', 'carrot and lemon salad', 'carrot salad with cumin'],
    why: 'Carrots are cheap all year, but this salad belongs to the first warm days, when cold, sharp food starts to appeal and the oven can stay off. It takes about 10 minutes and uses a box grater.\n\nGrate the carrots coarsely. Fine grating turns them to a wet mush, while coarse strands stay crisp and take up the dressing evenly. **Dress the salad at least 10 minutes before serving.** The lemon and salt soften the carrots slightly and pull out their sweetness.\n\nThe dressing is simple: lemon juice, olive oil, ground cumin, a pinch of sugar and salt. Taste after mixing. If it is too sharp, add a little more oil; if it is flat, add more lemon.\n\nFinish with parsley and, if you like, a few raisins for sweetness. It keeps well in the fridge, and the flavour improves overnight. Orange juice can replace some of the lemon for a sweeter salad. Toasted cumin seeds, if you have them, give a deeper flavour.',
    ing: [
      '500 g carrots, coarsely grated',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '1 tsp ground cumin',
      '1 tsp sugar',
      '1/2 tsp salt',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Put the grated carrots in a large bowl.',
      'Whisk the lemon juice, olive oil, cumin, sugar and salt together and pour over the carrots.',
      'Toss well and leave for 10 minutes.',
      'Stir in the parsley, taste and adjust the lemon or salt.'
    ],
    tips: [
      'Grate the carrots coarsely so they stay crisp.',
      'Leave the salad to stand before serving.',
      'Taste and adjust the lemon and salt at the end.',
      'Add raisins or chopped dates for sweetness.'
    ],
    pair: ['Grilled chicken', 'Flatbread', 'Hummus', 'Falafel'],
    store: 'Keeps in the fridge for 3 days. Drain any liquid before serving.',
    nut: [159, 1, 14, 11, 4, 7, 380]
  },

  'carrot-fritters': {
    d: 'Grated carrots, spring onion and cheddar bound with egg and flour, pan-fried into small crisp patties.',
    meta: 'Carrot fritters: grated carrots, spring onion and cheddar bound with egg and flour, pan-fried until golden. Four servings, cooked for 15 minutes.',
    kw: ['carrot fritters', 'carrot and cheddar fritters', 'carrot patties', 'crispy carrot fritters', 'grated carrot fritters'],
    why: 'Carrot is sweeter than most vegetables, and that sweetness is why a fritter made from it needs a little salt and sharp cheese. Without them, the fritters taste more like a dessert than a snack.\n\nGrate the carrots, then squeeze out the water in a clean tea towel. Carrots hold less liquid than courgettes, but enough that the batter turns loose if you skip this step. **Squeeze, then squeeze again.** Dry shreds fry crisp.\n\nThe binder is an egg and three spoonfuls of flour. Add the cheese and spring onion and mix just until combined. Overmixing makes a dense fritter.\n\nFry over a medium heat so the carrot cooks through before the outside burns. Flatten each spoonful in the pan. Thin fritters crisp; thick ones stay raw in the middle. Serve them with a spoonful of sour cream or yoghurt and a handful of leaves. They also work well in a packed lunch.',
    ing: [
      '400 g carrots, coarsely grated',
      '3 spring onions, about 40 g, sliced',
      '60 g cheddar, grated',
      '1 egg, about 50 g',
      '3 tbsp plain flour',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '3 tbsp vegetable oil'
    ],
    st: [
      'Squeeze the grated carrots in a clean tea towel to remove the liquid.',
      'Mix the carrots with the spring onions, cheese, egg, flour, salt and pepper.',
      'Heat the oil in a frying pan over a medium heat. Drop in spoonfuls of the mix and flatten to about 1 cm thick.',
      'Fry for 4 minutes on each side until golden and cooked through. Drain on kitchen paper.'
    ],
    tips: [
      'Squeeze the carrots dry before mixing.',
      'Flatten the fritters so they cook through.',
      'Keep the heat medium so they do not burn.',
      'Serve with a spoonful of yoghurt and herbs.'
    ],
    pair: ['Plain yoghurt', 'Green salad', 'Sweet chilli sauce', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [241, 7, 15, 17, 3, 5, 480]
  },

  'roast-carrots-with-cumin': {
    d: 'Whole carrots roasted with olive oil and ground cumin until sweet and browned at the edges.',
    meta: 'Roast carrots with cumin: carrots roasted with olive oil and ground cumin until sweet and browned. Four servings, cooked for 35 minutes.',
    kw: ['roast carrots with cumin', 'cumin roasted carrots', 'oven roasted carrots', 'roasted carrots with spices', 'roast carrots side dish'],
    why: 'A Sunday dish for a table of four, and one of the cheapest sides you can put on it. Roasting concentrates a carrot: water leaves, sugars brown and the flavour turns sweet and nutty.\n\nCut the carrots into batons of similar thickness so they cook at the same pace. Thick ones need longer than thin ones, and a mixed tray gives you both raw and burnt pieces. **Spread them in a single layer.** Crowded carrots steam and stay pale.\n\nCumin is the only spice here. Its earthy warmth suits the sweetness of the carrots, and it gets stronger as it roasts. Toss it with the oil so it clings to every piece.\n\nTurn the tray once halfway. The carrots are done when a knife slides in easily and the edges are dark. Finish with lemon juice and parsley. Older, larger carrots roast especially well because they are sweeter. Peel them only if the skin is tough or bitter.',
    ing: [
      '700 g carrots, cut into batons',
      '2 tbsp olive oil',
      '2 tsp ground cumin',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp lemon juice',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan).',
      'Toss the carrots with the oil, cumin, salt and pepper on a large tray and spread in a single layer.',
      'Roast for 35 minutes, turning once halfway, until tender and browned at the edges.',
      'Squeeze over the lemon juice and scatter with the parsley.'
    ],
    tips: [
      'Cut the carrots to a similar thickness.',
      'Use a large tray so the carrots do not overlap.',
      'If your oven runs hot, check at 25 minutes.',
      'Add a spoonful of honey for the last 10 minutes for a glaze.'
    ],
    pair: ['Roast chicken', 'Couscous', 'Plain yoghurt', 'Lamb chops'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven or eat cold in a salad.',
    nut: [152, 2, 18, 8, 5, 8, 420]
  },

  'roast-cabbage-wedges': {
    d: 'Thick wedges of white cabbage brushed with oil and roasted until the edges char and the centre turns sweet and tender.',
    meta: 'Roast cabbage wedges: white cabbage wedges roasted with olive oil until the edges char and the middle turns tender. Four servings, cooked for 30 minutes.',
    kw: ['roast cabbage wedges', 'oven roasted cabbage', 'roasted cabbage steaks', 'roast cabbage with olive oil', 'charred cabbage wedges'],
    why: 'What do you do with half a cabbage that has sat in the fridge all week? Roast it. Cut into thick wedges and cooked at a high heat, cabbage turns sweet and crisp at the edges, with a soft, silky middle.\n\nLeave the core in each wedge. It holds the leaves together, so the wedge does not fall apart when you turn it. **Cut the wedges about 3 cm thick.** Thinner slices dry out and burn before the centre softens.\n\nBrush all the cut sides with oil and season well. The oil carries heat to the leaves and encourages browning. Lay the wedges on a hot tray, cut-side down, so they colour straight away.\n\nTurn once halfway. The cabbage is ready when the outer leaves are dark and crisp and a knife slides through the middle with little resistance. The outer leaves become crisp, almost like chips, while the centre stays soft. A drizzle of mustard dressing or tahini is excellent over the top.',
    ing: [
      '1 white cabbage, about 800 g',
      '3 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tsp smoked paprika',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) and put a large tray inside to heat.',
      'Cut the cabbage into 8 wedges, leaving the core in each. Brush all over with the oil and sprinkle with the salt, pepper and paprika.',
      'Lay the wedges cut-side down on the hot tray and roast for 15 minutes. Turn and roast for 15 minutes more until the edges are dark and the middle is tender.',
      'Squeeze over the lemon juice before serving.'
    ],
    tips: [
      'Keep the core in so the wedges hold together.',
      'Preheat the tray for better browning.',
      'Check the wedges at 25 minutes if your oven runs hot.',
      'Serve with a dollop of yoghurt or mustard mayonnaise.'
    ],
    pair: ['Sausages', 'Roast potatoes', 'Grilled chicken', 'Mustard'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [159, 3, 12, 11, 5, 7, 330]
  },

  'roast-cauliflower-with-garlic': {
    d: 'Cauliflower florets roasted with whole garlic cloves and olive oil until golden, finished with lemon and parsley.',
    meta: 'Roast cauliflower with garlic: florets roasted with whole garlic cloves and olive oil until golden. Four servings, cooked for 30 minutes.',
    kw: ['roast cauliflower with garlic', 'garlic roasted cauliflower', 'oven roasted cauliflower', 'roasted cauliflower with lemon', 'cauliflower side dish'],
    why: 'Most home roast cauliflower comes out pale and soft, and the fix is a hotter oven and more space on the tray. Cauliflower holds a lot of water, so a crowded tray steams the florets instead of browning them.\n\nCut the cauliflower into florets with a flat side, since a flat face meets the tray and browns deeply. Toss with oil and salt in a bowl, not on the tray, so every piece is coated. **Do not skip the preheated tray.** A hot surface starts the browning the moment the florets land.\n\nThe garlic cloves roast whole, in their skins, and turn soft and sweet. Squeeze them out over the cauliflower at the end and mash them into the oil on the tray.\n\nLemon juice and parsley finish the dish. The sharpness lifts the nutty roasted flavour. Leftovers are good tossed through pasta or stirred into a grain salad. Add a spoonful of capers if you have them.',
    ing: [
      '1 cauliflower, about 800 g, in florets',
      '3 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '6 garlic cloves, unpeeled',
      '1 tbsp lemon juice',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a large tray inside.',
      'Toss the florets with the oil, salt and pepper in a bowl.',
      'Tip onto the hot tray in a single layer and add the garlic. Roast for 30 minutes, turning once, until golden and tender.',
      'Squeeze the garlic from its skins and mash it into the oil on the tray. Toss with the lemon juice and parsley.'
    ],
    tips: [
      'Use a big tray so the florets do not touch.',
      'Preheat the tray for faster browning.',
      'Turn once, not constantly.',
      'Add chilli flakes before roasting for a hot version.'
    ],
    pair: ['Roast chicken', 'Rice', 'Plain yoghurt', 'Flatbread'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [163, 4, 12, 11, 4, 4, 360]
  },

  'cauliflower-fritters': {
    d: 'Small cauliflower florets in a spiced batter of flour, egg and cumin, fried until golden and crisp.',
    meta: 'Cauliflower fritters: small florets coated in a spiced batter and shallow-fried until crisp. Four servings, cooked for 15 minutes.',
    kw: ['cauliflower fritters', 'crispy cauliflower fritters', 'fried cauliflower bites', 'cauliflower fritters with cumin', 'cauliflower pakora style fritters'],
    why: 'Par-boil the cauliflower. Raw florets fried in batter stay hard inside, while the batter burns around them. A short dip in boiling water makes them tender enough to finish cooking in the pan.\n\nCut small florets, about the size of a walnut. They cook evenly and give the fritter more batter surface. Boil them for 3 minutes, drain well and let them steam dry for a couple of minutes. **Wet florets spit in the oil and dilute the batter.**\n\nThe batter is flour, egg, milk, cumin, turmeric and salt. It should coat a spoon thickly without running off. Too thin and the fritter is bare in places; too thick and it is doughy.\n\nFry in about 1 cm of hot oil, turning once. Drain well, season while hot and eat soon after. Do not skip the draining. Wet florets spit in the hot oil and make the batter slide off, leaving patchy fritters.',
    ing: [
      '1 cauliflower, about 500 g, in small florets',
      '120 g plain flour',
      '1 egg, about 50 g',
      '120 ml whole milk',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Boil the florets in salted water for 3 minutes. Drain well and leave to steam dry for 5 minutes.',
      'Whisk the flour, egg, milk, cumin, turmeric and salt into a thick batter.',
      'Heat the oil in a deep frying pan over a medium-high heat. Dip the florets in the batter and lower them into the oil in batches.',
      'Fry for 3 minutes, turning once, until golden. Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Dry the boiled florets well before dipping.',
      'Fry in batches so the oil stays hot.',
      'Test the oil with a drop of batter: it should sizzle at once.',
      'Serve with a yoghurt dip with herbs.'
    ],
    pair: ['Plain yoghurt dip', 'Sweet chilli sauce', 'Lemon wedges', 'Green chutney'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them again.',
    nut: [498, 8, 31, 38, 4, 4, 360]
  },

  'potato-salad-with-mustard-dressing': {
    d: 'Waxy potatoes tossed while warm with a dressing of wholegrain mustard, vinegar and oil, with red onion and chives.',
    meta: 'Potato salad with mustard dressing: warm potatoes tossed in wholegrain mustard, vinegar and oil. Six servings, cooked for 20 minutes.',
    kw: ['potato salad with mustard dressing', 'mustard potato salad', 'potato salad without mayo', 'warm potato salad with mustard', 'wholegrain mustard potato salad'],
    why: 'Most potato salads taste bland because the dressing goes on cold potatoes, and cold potatoes do not take it in. Dress them while they are still warm, and the vinegar and mustard soak into the flesh.\n\nChoose waxy potatoes such as salad or new potatoes. They hold their shape when boiled and slice cleanly. Floury varieties break apart and turn the salad to mash. **Salt the cooking water well.** It is the only chance to season the potatoes from the inside.\n\nBoil until a knife slides in with just a little resistance, then drain and let them steam for a minute. Slice while warm and toss with the dressing straight away.\n\nThe dressing has no mayonnaise, so the salad is sharp and fresh and keeps well at a picnic. Add red onion and chives once the potatoes have cooled a little. A few capers or chopped gherkins add sharpness. This version travels well, since there is no mayonnaise to worry about in warm weather.',
    ing: [
      '900 g waxy potatoes, unpeeled',
      '3 tbsp wholegrain mustard',
      '3 tbsp white wine vinegar',
      '4 tbsp olive oil',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1/2 red onion, about 50 g, finely sliced',
      '10 g chives, chopped'
    ],
    st: [
      'Boil the potatoes in well-salted water for 20 minutes until a knife slides in with a little resistance. Drain and leave to steam for 2 minutes.',
      'Whisk the mustard, vinegar, oil, salt and pepper in a large bowl.',
      'Slice the warm potatoes into thick rounds and toss with the dressing.',
      'Cool for 10 minutes, then stir in the onion and chives.'
    ],
    tips: [
      'Choose waxy potatoes.',
      'Dress the potatoes while they are warm.',
      'Salt the water generously.',
      'Taste after cooling, as cold food needs more seasoning.'
    ],
    pair: ['Grilled sausages', 'Cold ham', 'Barbecue chicken', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [214, 4, 27, 10, 4, 2, 350]
  },

  'cheesy-jacket-potatoes': {
    d: 'Baked potatoes with crisp skins, split and filled with butter and melted cheddar.',
    meta: 'Cheesy jacket potatoes: baked potatoes with crisp skins, split and filled with butter and cheddar. Four servings, baked for 60 minutes.',
    kw: ['cheesy jacket potatoes', 'cheese jacket potato', 'baked potato with cheese', 'jacket potato with cheddar', 'oven baked jacket potatoes'],
    why: 'The first sign they are ready is the sound: a crisp skin that crackles when you press it, and a soft middle that gives way. Both come from the same method.\n\nPrick the potatoes all over with a fork so steam can escape. Rub them with oil and a little salt, and bake them directly on the oven rack. **Do not wrap them in foil.** Foil traps steam and gives soft, pale skins.\n\nChoose floury potatoes, about 250 g each. They fluff up when baked, and the flesh takes up butter and cheese. Waxy potatoes stay dense.\n\nSplit each potato open and press the ends gently to break up the flesh. Butter goes in first, then salt, pepper and a generous handful of cheese. The heat of the potato melts everything. Eat at once. A spoonful of baked beans, coleslaw or tuna mayonnaise turns the potato into a full meal. Choose large floury potatoes for the fluffiest middle.',
    ing: [
      '4 baking potatoes, about 1 kg',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '40 g butter',
      '150 g cheddar, grated',
      '1/4 tsp black pepper',
      '10 g chives, chopped'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan).',
      'Prick the potatoes all over with a fork, rub with the oil and salt and place directly on the oven rack.',
      'Bake for 60 minutes until the skins are crisp and the middle is soft when squeezed.',
      'Split each potato, add the butter and the cheese and season with the pepper. Scatter with the chives.'
    ],
    tips: [
      'Prick the skins so steam can escape.',
      'Bake without foil for crisp skins.',
      'If your oven runs hot, check at 50 minutes.',
      'Put the filled potatoes back in the oven for 5 minutes for extra-melted cheese.'
    ],
    pair: ['Baked beans', 'Coleslaw', 'Green salad', 'Tuna mayonnaise'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven or microwave.',
    nut: [448, 15, 43, 24, 6, 2, 560]
  },

  'tortilla-pizza': {
    d: 'A flour tortilla topped with tomato sauce, mozzarella and oregano, baked until crisp and bubbling.',
    meta: 'Tortilla pizza: a flour tortilla topped with tomato sauce, mozzarella and oregano, baked until crisp. Two servings, baked for 10 minutes.',
    kw: ['tortilla pizza', 'pizza on a tortilla', 'tortilla pizza with mozzarella', 'quick tortilla pizza', 'thin crust tortilla pizza'],
    why: 'Bake the tortilla bare first. Keep that in mind and everything else about this pizza is simple. A tortilla topped straight away goes soggy under the sauce, while one baked for 2 minutes first stays crisp.\n\nThe tortilla is your base, so choose a large one and lay it on a baking tray. Spread the sauce thinly, to the edge but not over it. **Go light on the toppings.** Too much weight and moisture turns the centre soft, and a thin pizza needs just enough to flavour it.\n\nMozzarella is the usual cheese, and the low-moisture grated kind melts best. If you use the soft ball type, drain and pat it dry first.\n\nBake on the top shelf of a hot oven. The pizza is ready when the cheese bubbles and the edge of the tortilla turns golden brown. Make one per person and let everyone add their own toppings. Two tortillas stacked and baked together give a thicker base.',
    ing: [
      '2 large flour tortillas, about 120 g',
      '4 tbsp tomato passata',
      '1/2 tsp dried oregano',
      '120 g mozzarella, grated',
      '1 tbsp olive oil',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Lay the tortillas on 2 baking trays and bake for 2 minutes.',
      'Mix the passata with the oregano and salt and spread thinly over the tortillas.',
      'Scatter with the mozzarella and drizzle with the oil.',
      'Bake for 8 minutes until the cheese bubbles and the edges are golden. Cut into wedges.'
    ],
    tips: [
      'Bake the tortillas bare first for a crisp base.',
      'Keep the sauce and toppings light.',
      'Use the top shelf of the oven for a crisp finish.',
      'Add sliced peppers or olives, if you have them.'
    ],
    pair: ['Green salad', 'Cherry tomatoes', 'Garlic dip', 'Sliced cucumber'],
    store: 'Best eaten straight away. Reheat leftovers in a hot oven.',
    nut: [429, 19, 32, 25, 2, 4, 1070]
  },

  'naan-pizza': {
    d: 'A naan bread topped with tomato sauce, mozzarella and red onion, baked until bubbling.',
    meta: 'Naan pizza: naan bread topped with tomato sauce, mozzarella and red onion, baked until bubbling. Two servings, baked for 10 minutes.',
    kw: ['naan pizza', 'naan bread pizza', 'pizza on naan', 'naan pizza with mozzarella', 'mini naan pizza'],
    why: 'Why use naan for pizza? Because it is already a flat, soft, slightly chewy bread, ready to take toppings without any dough to prove or roll.\n\nPlain or garlic naan both work. A garlic one adds a layer of flavour for free. Choose a naan about 20 cm across, so the topping spreads evenly and the middle does not stay raw. **Brush the naan with oil first.** It crisps the surface and stops the sauce soaking in.\n\nSpread the sauce thinly, scatter the cheese and add the onion. Thin slices cook through in the heat of the oven; thick ones stay crunchy.\n\nBake on a hot tray so the base crisps from underneath. Check at 8 minutes: the cheese should have melted and started to colour at the edges. A garlic naan gives extra flavour. Keep the toppings thin, because the bread is already thick and a heavy load will not crisp.',
    ing: [
      '2 naan breads, about 160 g',
      '1 tbsp olive oil',
      '4 tbsp tomato passata',
      '1/2 tsp dried oregano',
      '120 g mozzarella, grated',
      '1/4 red onion, about 30 g, thinly sliced'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan) with a baking tray inside.',
      'Brush the naan with the oil. Spread with the passata and sprinkle with the oregano.',
      'Top with the mozzarella and onion.',
      'Slide onto the hot tray and bake for 10 minutes until the cheese is bubbling and golden at the edges.'
    ],
    tips: [
      'Brush the naan with oil before saucing it.',
      'Preheat the tray for a crisp base.',
      'Slice the onion very thin.',
      'Add cooked chicken or sweetcorn if you have some left over.'
    ],
    pair: ['Green salad', 'Raita', 'Mango chutney', 'Sliced cucumber'],
    store: 'Best eaten straight away. Reheat leftovers in a hot oven.',
    nut: [467, 21, 44, 23, 3, 7, 780]
  }
};
