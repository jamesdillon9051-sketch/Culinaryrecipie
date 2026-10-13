'use strict';

/**
 * Volume forty-seven — everyday vegetable, rice and pulse dishes, first part.
 *
 * Twenty dishes from Chinese, Indian, Nigerian, Ethiopian and Kenyan home
 * cooking: green beans, sweet potato curry, pumpkin pancakes, potato dishes,
 * poriyal, pongal, tamarind rice, gourd and pumpkin sabzi, gobi paratha, bisi
 * bele bath, Nigerian fried rice, plantain and beans, fried yam and three
 * pulse stews. Times are the recipe's own; hobs differ, so each method says
 * what to look for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'green-bean-stir-fry': {
    d: 'Fresh green beans stir-fried over a high heat with garlic, soy sauce and a pinch of sugar until blistered but still crisp.',
    meta: 'Green bean stir fry: green beans cooked fast over a high heat with garlic and soy sauce until blistered. Four servings, cooked for 8 minutes.',
    kw: ['green bean stir fry', 'garlic green bean stir fry', 'stir fried green beans', 'green beans with soy sauce', 'chinese style green beans'],
    why: 'Most home versions come out limp and olive-grey, and the fix is to cook them hotter and for less time than feels natural. Green beans turn from bright to dull when they steam in a crowded, cool pan, so start with a hot wok or large frying pan and cook them in two batches if needed.\n\nTrim the stalk ends and cut the beans into pieces about 5 cm long, so they fit on a spoon. Dry them well after washing, because water on the surface makes the oil spit and the beans steam rather than blister. **Let the beans sit untouched for 1 minute at a time.** That is how the skin blisters and picks up a little char.\n\nGarlic goes in late, once the beans have started to wrinkle. Added early, it burns and turns bitter.\n\nSoy sauce and a pinch of sugar finish the dish. Taste before adding more salt, since soy sauce is already salty. Serve at once, while the beans still snap.',
    ing: [
      '2 tbsp vegetable oil',
      '500 g green beans, trimmed and halved',
      '4 garlic cloves, sliced',
      '2 tbsp soy sauce',
      '1 tsp sugar',
      '2 tbsp water',
      '1/2 tsp sesame oil'
    ],
    st: [
      'Heat the oil in a wok or large frying pan over a high heat until it shimmers.',
      'Add the beans and cook for 4 minutes, stirring only now and then, until blistered in places.',
      'Add the garlic for 30 seconds, then the soy sauce, sugar and water.',
      'Cover for 1 minute so the beans cook through, then uncover and toss for 30 seconds. Finish with the sesame oil.'
    ],
    tips: [
      'Dry the beans after washing.',
      'Cook in two batches if the pan looks crowded.',
      'Leave the beans alone for a minute at a time to let them blister.',
      'Add chilli flakes with the garlic for a hotter dish.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Braised tofu', 'Noodles'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, though the beans lose their snap.',
    nut: [128, 3, 11, 8, 4, 5, 450]
  },

  'sweet-potato-curry': {
    d: 'Cubes of sweet potato simmered in a mild curry sauce of onion, tomato, ginger and ground spices, finished with coriander.',
    meta: 'Sweet potato curry: sweet potato cubes simmered in an onion, tomato, ginger and spice sauce. Four servings, cooked for 25 minutes.',
    kw: ['sweet potato curry', 'indian sweet potato curry', 'sweet potato curry with tomato', 'easy sweet potato curry', 'sweet potato and spinach curry'],
    why: 'The first sign it is ready is the smell: onions turning golden in the oil, then ginger and spices releasing a warm, sweet scent that fills the kitchen. That moment, before any liquid goes in, is what gives the curry its depth.\n\nCook the onion until properly golden, about 8 minutes, not just soft. Add the ginger, garlic and spices and fry them for a minute so the raw edge goes. Then add the tomatoes and let them break down. **Wait for the oil to separate at the edge.** It is the sign that the masala is cooked.\n\nSweet potato cooks faster than ordinary potato and breaks down easily, so cut it into 3 cm cubes and add it with just enough water to cover half of it. Too much water and the pieces turn to mash.\n\nSimmer gently with the lid on, and stir only once or twice. A squeeze of lemon at the end balances the sweetness of the potato.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger, grated',
      '3 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '700 g sweet potatoes, peeled and cut into 3 cm cubes',
      '200 ml water',
      '1/2 tsp salt',
      '1 tbsp lemon juice',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion for 8 minutes until golden.',
      'Add the ginger, garlic, cumin, ground coriander, turmeric and chilli powder and cook for 1 minute.',
      'Add the tomatoes and cook for 5 minutes until the oil starts to separate.',
      'Add the sweet potatoes, water and salt, cover and simmer for 12 minutes until tender, stirring once or twice.',
      'Stir in the lemon juice and fresh coriander.'
    ],
    tips: [
      'Cook the onion until golden before adding the spices.',
      'Cut the sweet potato in even cubes.',
      'Add water sparingly, as sweet potato releases moisture as it cooks.',
      'Taste at the end and add lemon juice until the sweetness balances.'
    ],
    pair: ['Steamed rice', 'Chapati', 'Plain yoghurt', 'Mango chutney'],
    store: 'Keeps in the fridge for 3 days. Freezes for up to 2 months. Reheat gently with a splash of water.',
    nut: [272, 5, 45, 8, 8, 12, 410]
  },

  'pumpkin-pancakes': {
    d: 'Fluffy pancakes made with pumpkin purée, flour, milk and cinnamon, cooked in a pan and served with syrup.',
    meta: 'Pumpkin pancakes: fluffy pancakes of pumpkin purée, flour, milk and cinnamon, cooked in a pan. Four servings, cooked for 15 minutes.',
    kw: ['pumpkin pancakes', 'fluffy pumpkin pancakes', 'pumpkin puree pancakes', 'pumpkin spice pancakes', 'pancakes with pumpkin and cinnamon'],
    why: 'Stir the batter as little as you can. That is the short, sharp advice for every pancake, and it matters more here, because pumpkin purée makes the mixture heavy and a hard-worked batter turns rubbery.\n\nUse plain tinned pumpkin purée, not pie filling, which already contains sugar and spice. If you roast and mash your own pumpkin, drain it through a sieve first, since homemade purée holds more water than the tinned kind. **Stop mixing while the batter is still lumpy.** The lumps cook out, and the pancakes stay tender.\n\nThe pan should be medium heat and lightly greased. Pour in a ladleful, and wait until bubbles break on the surface and stay open before flipping. If you flip too soon, the middle is raw and the pancake tears.\n\nPumpkin pancakes brown faster than plain ones, because of the sugar in the purée. Lower the heat after the first batch if they colour too quickly.',
    ing: [
      '200 g plain flour',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/2 tsp salt',
      '2 tbsp sugar',
      '250 ml whole milk',
      '120 g pumpkin purée',
      '1 egg, about 50 g',
      '2 tbsp melted butter',
      '1 tbsp vegetable oil, for the pan',
      '4 tbsp maple syrup'
    ],
    st: [
      'Mix the flour, baking powder, cinnamon, salt and sugar in a large bowl.',
      'Whisk the milk, pumpkin, egg and melted butter together and pour into the dry mix. Stir just until combined, leaving some lumps.',
      'Heat a frying pan over a medium heat and brush with a little of the oil. Pour in a ladleful of batter for each pancake.',
      'Cook for 2 minutes until bubbles appear and stay open, flip and cook for 1 minute more. Repeat with the rest of the oil and batter. Serve with the syrup.'
    ],
    tips: [
      'Leave the lumps in the batter.',
      'Wait for bubbles that stay open before flipping.',
      'Lower the heat if the pancakes brown too fast.',
      'Use tinned purée, not pie filling.'
    ],
    pair: ['Maple syrup', 'Butter', 'Bacon', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 2 days. Freezes for up to 2 months. Reheat in a toaster.',
    nut: [413, 9, 65, 13, 2, 23, 580]
  },

  'aloo-tikki': {
    d: 'Spiced mashed potato patties with green chilli, coriander and cumin, shallow-fried until crisp and golden.',
    meta: 'Aloo tikki: spiced mashed potato patties with chilli, coriander and cumin, shallow-fried until golden. Eight servings, cooked for 15 minutes.',
    kw: ['aloo tikki', 'indian potato patties', 'aloo tikki recipe', 'spiced potato patties', 'crispy aloo tikki'],
    why: 'Cold, dry potato is the secret. This is the dish for a rainy afternoon, when a cup of tea needs something hot and crisp beside it, and the way it works is that mashed potato, left to cool and dry, holds a shape that warm, wet potato never does.\n\nBoil the potatoes in their skins, which keeps them from soaking up water. Peel and mash them while still warm, then let the mash cool completely. **Do not add milk or butter.** The patties need a firm, dry mixture, or they collapse in the pan.\n\nCornflour or breadcrumbs bind the mix without making it heavy. Add the spices, chilli and coriander, and mix until the dough comes together.\n\nShape into flat discs about 2 cm thick. Fry them in a thin layer of oil until deep golden. They should sit undisturbed for 3 minutes, so a crust forms before you turn them.',
    ing: [
      '700 g floury potatoes, unpeeled',
      '2 tbsp cornflour',
      '1 green chilli, finely chopped',
      '1 tsp cumin seeds',
      '1/2 tsp garam masala',
      '1/2 tsp salt',
      '10 g fresh coriander, chopped',
      '4 tbsp vegetable oil'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes until tender. Drain, peel and mash. Leave to cool completely.',
      'Mix the mash with the cornflour, chilli, cumin, garam masala, salt and coriander.',
      'Shape into 8 flat patties about 2 cm thick.',
      'Heat the oil in a frying pan over a medium heat. Fry the patties for 3 minutes on each side until deep golden. Drain on kitchen paper.'
    ],
    tips: [
      'Cool the mashed potato fully before shaping.',
      'Do not add butter or milk to the mash.',
      'Leave the patties alone for the first 3 minutes.',
      'Serve with green chutney or tamarind chutney.'
    ],
    pair: ['Green chutney', 'Tamarind chutney', 'Plain yoghurt', 'Masala chai'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven or pan to crisp them again.',
    nut: [139, 2, 17, 7, 2, 1, 150]
  },

  'aloo-matar': {
    d: 'Potatoes and green peas in a spiced onion and tomato gravy, a North Indian home-style curry.',
    meta: 'Aloo matar: potatoes and green peas in a spiced onion and tomato gravy. Four servings, cooked for 25 minutes.',
    kw: ['aloo matar', 'potato and peas curry', 'aloo matar curry', 'indian potato and pea curry', 'aloo mutter'],
    why: 'A Sunday dish for four, and one that belongs on the table with rice, bread and a bowl of yoghurt. Aloo matar is among the plainest and most satisfying of the everyday North Indian curries.\n\nThe gravy is a thin masala built on onion, tomato and the spices you already own. Cook the onion until golden, not just soft, then add the ginger, garlic and spices and let them fry for a minute. **Add a little water to stop the spices catching.** If the pan looks dry, a splash prevents scorching without cooling the masala.\n\nPotatoes go in cut into 3 cm cubes. Too small, and they dissolve; too large, and they stay hard in the middle. Simmer them in the gravy with the lid on.\n\nThe peas go in last. Frozen ones need only 3 minutes. They stay bright and sweet, which balances the warm spices. Make the gravy a little thinner than you think necessary, because the potatoes thicken it as they stand.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger and garlic paste',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '500 g potatoes, peeled and cut into 3 cm cubes',
      '350 ml water',
      '1/2 tsp salt',
      '150 g frozen peas',
      '1/2 tsp garam masala'
    ],
    st: [
      'Heat the oil in a wide pan and fry the cumin seeds for 20 seconds. Add the onion and cook for 8 minutes until golden.',
      'Add the ginger and garlic paste, tomatoes, coriander, turmeric and chilli powder and cook for 5 minutes until the oil separates.',
      'Add the potatoes, water and salt, bring to the boil, cover and simmer for 12 minutes until tender.',
      'Add the peas and cook for 3 minutes. Stir in the garam masala.'
    ],
    tips: [
      'Cook the onion until golden before adding the spices.',
      'Cut the potatoes into even cubes.',
      'Add the peas late so they stay bright.',
      'Mash a few potatoes against the pan to thicken the gravy.'
    ],
    pair: ['Chapati', 'Steamed basmati rice', 'Cucumber raita', 'Pickle'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [232, 6, 34, 8, 7, 6, 320]
  },

  'aloo-methi': {
    d: 'Potatoes cooked with fresh fenugreek leaves, cumin, turmeric and green chilli in a dry North Indian style.',
    meta: 'Aloo methi: potatoes cooked with fresh fenugreek leaves, cumin, turmeric and green chilli. Four servings, cooked for 20 minutes.',
    kw: ['aloo methi', 'potato and fenugreek curry', 'aloo methi sabzi', 'methi aloo', 'dry potato curry with fenugreek leaves'],
    why: 'The first sign it is ready is the smell: a bitter, almost maple scent from the fenugreek leaves as they wilt in the hot oil. That aroma is distinctive, a little like celery and curry combined, and it is what the whole dish is built around.\n\nFresh fenugreek can be bitter. Wash the leaves well, pick them from the stems and chop them roughly. A sprinkle of salt on the chopped leaves, left for 10 minutes, draws out some bitterness. **Squeeze them gently before using.** The liquid that comes out carries a lot of the sharpest flavour.\n\nPotatoes go in cut small, about 2 cm, so they cook quickly in the spiced oil. Cover the pan for the first part, to steam them soft, then uncover to dry the dish out. Aloo methi should be dry, not saucy.\n\nIf you cannot find fresh fenugreek, use a handful of spinach with a pinch of dried fenugreek leaves instead.',
    ing: [
      '200 g fresh fenugreek leaves, chopped',
      '1/2 tsp salt',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 green chilli, slit',
      '500 g potatoes, peeled and cut into 2 cm cubes',
      '1/2 tsp ground turmeric',
      '1/2 tsp ground coriander',
      '100 ml water',
      '1/4 tsp salt, to finish'
    ],
    st: [
      'Toss the fenugreek with the first measure of salt and leave for 10 minutes. Squeeze gently and set aside.',
      'Heat the oil in a wide pan and fry the cumin seeds for 20 seconds. Add the chilli and potatoes and cook for 3 minutes.',
      'Add the turmeric, coriander and water, cover and cook for 10 minutes until the potatoes are nearly tender.',
      'Add the fenugreek and the second measure of salt, uncover and cook for 5 minutes until dry and the potatoes are soft.'
    ],
    tips: [
      'Salt and squeeze the fenugreek to reduce bitterness.',
      'Cut the potatoes small and even.',
      'Cook uncovered at the end so the dish dries out.',
      'Use spinach with a pinch of dried fenugreek if fresh is unavailable.'
    ],
    pair: ['Chapati', 'Dal', 'Plain yoghurt', 'Steamed rice'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan with a splash of water.',
    nut: [319, 8, 47, 11, 18, 3, 470]
  },

  'dahi-aloo': {
    d: 'Boiled potatoes simmered gently in a spiced yoghurt sauce with cumin, turmeric and ginger.',
    meta: 'Dahi aloo: boiled potatoes in a spiced yoghurt sauce with cumin, turmeric and ginger. Four servings, cooked for 20 minutes.',
    kw: ['dahi aloo', 'potato yoghurt curry', 'dahi wale aloo', 'aloo in yoghurt gravy', 'indian potato curry with yoghurt'],
    why: 'It looks like a creamy curry and behaves like a delicate sauce, which is why the yoghurt has to be handled with care. Add cold yoghurt to a boiling pan, and it curdles into grainy lumps.\n\nWhisk the yoghurt with the spices in a bowl before it goes anywhere near the heat. A spoonful of gram flour stirred into the yoghurt helps keep it from splitting. **Lower the heat before adding the yoghurt, and keep it there.** A gentle simmer is all the dish needs.\n\nBoil the potatoes first, in their skins, then peel and cut them into 3 cm pieces. Fry them briefly in the spiced oil so the outsides take on a little colour. That step adds flavour that plain boiled potatoes cannot give.\n\nThe sauce should be creamy, not thick. Add a splash of water if it tightens, and finish with fresh coriander. Use full-fat yoghurt if you can, as low-fat versions split more easily when heated.',
    ing: [
      '600 g potatoes, unpeeled',
      '250 g plain yoghurt',
      '1 tbsp gram flour',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1 tsp ground coriander',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 tbsp ginger, grated',
      '150 ml water',
      '1/2 tsp salt',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Boil the potatoes for 20 minutes until tender. Drain, cool, peel and cut into 3 cm pieces.',
      'Whisk the yoghurt, gram flour, turmeric, chilli powder, ground coriander and salt until smooth.',
      'Heat the oil in a pan and fry the cumin seeds for 20 seconds. Add the ginger and potatoes and fry for 3 minutes.',
      'Lower the heat, pour in the yoghurt mix and water, and simmer gently for 8 minutes, stirring often. Scatter with the fresh coriander.'
    ],
    tips: [
      'Whisk the yoghurt with the spices before cooking.',
      'Lower the heat before adding it.',
      'Stir often to stop the sauce splitting.',
      'Add water if the sauce gets too thick.'
    ],
    pair: ['Chapati', 'Steamed rice', 'Pickle', 'Cucumber slices'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and do not boil.',
    nut: [245, 10, 31, 9, 4, 4, 330]
  },

  'bread-pakora': {
    d: 'Slices of bread filled with spiced mashed potato, dipped in a gram flour batter and fried until crisp.',
    meta: 'Bread pakora: bread slices filled with spiced mashed potato, dipped in gram flour batter and fried. Six servings, cooked for 15 minutes.',
    kw: ['bread pakora', 'indian bread pakora', 'bread pakora with potato filling', 'stuffed bread pakora', 'bread fritters with gram flour'],
    why: 'Why does the bread not fall apart when it hits the batter? Because the batter is thick enough to cling, and you dip the bread for only a second. Soaked bread turns to paste, while a quick dip leaves it crisp on the outside and soft within.\n\nThe filling is mashed potato spiced with cumin, chilli and coriander. Spread it thickly but not to the edges, so it does not squeeze out. Press the second slice on top and cut each sandwich into triangles. **Make the batter the thickness of double cream.** If it runs off the spoon in a thin stream, add more gram flour.\n\nHeat the oil until a drop of batter sizzles and rises at once. Fry a few pieces at a time, turning once, until golden and crisp. Crowd the pan, and the oil temperature drops, leaving soggy pakoras.\n\nDrain on kitchen paper and serve straight away with chutney.',
    ing: [
      '300 g potatoes, boiled and mashed',
      '1 green chilli, chopped',
      '1 tsp cumin seeds',
      '10 g fresh coriander, chopped',
      '1/2 tsp salt',
      '8 slices white bread, about 240 g',
      '150 g gram flour',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '180 ml water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the potato, chilli, cumin, coriander and half the salt.',
      'Spread the filling on 4 slices of bread, top with the other 4 and cut each into 2 triangles.',
      'Whisk the gram flour, turmeric, chilli powder and remaining salt with the water into a thick batter.',
      'Heat the oil in a deep pan. Dip the triangles in the batter, lift out and fry in batches for 3 minutes, turning once, until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Keep the batter thick enough to cling.',
      'Dip the bread for a second only.',
      'Fry in small batches to hold the oil temperature.',
      'Serve while hot and crisp.'
    ],
    pair: ['Green chutney', 'Tomato ketchup', 'Masala chai', 'Tamarind chutney'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them again.',
    nut: [652, 7, 48, 48, 3, 3, 400]
  },

  'cabbage-poriyal': {
    d: 'A South Indian dry stir-fry of shredded cabbage with mustard seeds, curry leaves, urad dal and grated coconut.',
    meta: 'Cabbage poriyal: South Indian dry stir-fry of shredded cabbage with mustard seeds, curry leaves and coconut. Four servings, cooked for 10 minutes.',
    kw: ['cabbage poriyal', 'south indian cabbage stir fry', 'cabbage poriyal with coconut', 'cabbage thoran style stir fry', 'cabbage stir fry with mustard seeds'],
    why: 'This is what to make in the middle of the week when there is half a cabbage in the fridge and nothing planned. A poriyal is a dry-cooked vegetable dish from South India, and cabbage is among the quickest to make.\n\nThe flavour comes from the tempering. Hot oil, mustard seeds that pop, a spoonful of urad dal that turns golden, dried chillies and curry leaves: together they take about a minute and give the dish its character. **Wait for the mustard seeds to pop before adding the rest.** Unpopped seeds taste bitter and raw.\n\nShred the cabbage finely so it cooks in a few minutes. Cooked for too long, it turns watery and loses its sweetness.\n\nGrated coconut goes in at the end. It adds a gentle sweetness and a soft texture, and it absorbs any extra moisture. Keep a pinch of sugar to hand: a little rounds off the sweetness if the cabbage is sharp.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '1 tbsp urad dal',
      '2 dried red chillies',
      '1 g curry leaves',
      '500 g white cabbage, finely shredded',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '40 g grated coconut'
    ],
    st: [
      'Heat the oil in a wide pan. Add the mustard seeds and wait for them to pop.',
      'Add the urad dal, chillies and curry leaves and fry for 30 seconds until the dal turns golden.',
      'Add the cabbage, turmeric and salt and stir fry for 6 minutes until just tender.',
      'Stir in the coconut and cook for 1 minute.'
    ],
    tips: [
      'Wait for the mustard seeds to pop.',
      'Shred the cabbage fine so it cooks fast.',
      'Do not add water, since cabbage releases its own.',
      'Use desiccated coconut if fresh is not available.'
    ],
    pair: ['Steamed rice', 'Sambar', 'Rasam', 'Curd rice'],
    store: 'Keeps in the fridge for 2 days. Best eaten fresh.',
    nut: [150, 3, 12, 10, 5, 5, 330]
  },

  'beans-poriyal': {
    d: 'A South Indian dry stir-fry of chopped green beans with mustard seeds, curry leaves and grated coconut.',
    meta: 'Beans poriyal: South Indian dry stir-fry of chopped green beans with mustard seeds, curry leaves and coconut. Four servings, cooked for 10 minutes.',
    kw: ['beans poriyal', 'green beans poriyal', 'south indian green bean stir fry', 'beans poriyal with coconut', 'green beans with mustard seeds and coconut'],
    why: 'Poriyal is a Tamil word for a dry vegetable dish, stir-fried with spices and often finished with coconut. It is served with rice and a pulse dish, and beans poriyal is one of the most common versions on a home table.\n\nChop the beans into small pieces, no longer than the tip of your thumb. They cook quickly and pick up the seasoning in every bite. A dull knife crushes them rather than slicing, so use a sharp one. **Do not cover the pan.** Steam turns green beans a dull olive colour and softens the snap.\n\nThe tempering of mustard seeds, urad dal, chilli and curry leaves goes in first. Wait for the seeds to pop, and the dal to turn golden, then add the beans.\n\nA splash of water and a lid for 2 minutes at most helps the beans cook through. Coconut goes in last for sweetness. Frozen beans work well here, and they need no thawing, only a minute or two longer in the pan.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '1 tbsp urad dal',
      '2 dried red chillies',
      '1 g curry leaves',
      '400 g green beans, finely chopped',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '3 tbsp water',
      '40 g grated coconut'
    ],
    st: [
      'Warm the oil in a wide, heavy pan and drop in the mustard seeds. Wait until they crackle and jump.',
      'Stir in the urad dal, dried chillies and curry leaves and fry for 30 seconds, until the dal is golden.',
      'Add the beans, turmeric and salt and stir fry for 3 minutes, then splash in the water and put the lid on for 2 minutes.',
      'Take off the lid, scatter in the coconut and toss for 1 minute until the pan is dry.'
    ],
    tips: [
      'Chop the beans small and even.',
      'Keep the cooking time short to save their colour.',
      'Cover for no more than 2 minutes.',
      'Stir in the coconut at the end for sweetness.'
    ],
    pair: ['Steamed rice', 'Sambar', 'Rasam', 'Curd rice'],
    store: 'Keeps in the fridge for 2 days. Best eaten fresh.',
    nut: [155, 3, 11, 11, 5, 4, 320]
  },

  'pongal': {
    d: 'A South Indian porridge of rice and split yellow lentils cooked until soft, with black pepper, cumin, ginger and ghee.',
    meta: 'Pongal: South Indian porridge of rice and split yellow lentils with black pepper, cumin, ginger and ghee. Four servings, cooked for 25 minutes.',
    kw: ['pongal', 'ven pongal', 'south indian pongal', 'rice and lentil pongal', 'savoury pongal with ghee'],
    why: 'In Tamil, pongal means boiling over, and the name describes the way a pot of rice and milk rises as it cooks. This savoury version, called ven pongal, is a soft, comforting breakfast of rice and lentils, cooked until they nearly melt into each other.\n\nRoast the lentils in a dry pan for 2 minutes before cooking. They turn a pale golden colour and smell nutty, and that small step deepens the flavour. Rinse the rice and lentils together until the water runs clear. **Add plenty of water.** The porridge thickens as it stands, and a dry pongal sets almost solid.\n\nThe tempering, poured over at the end, is what makes it special. Ghee, whole black peppercorns, cumin seeds, ginger and curry leaves sizzle together for a minute and fill the kitchen with fragrance.\n\nServe hot with coconut chutney and sambar. Loosen with hot water if it stiffens. Warm milk stirred in at the end makes it creamier, though water alone is traditional and cheaper.',
    ing: [
      '150 g basmati rice',
      '75 g split yellow moong dal',
      '800 ml water',
      '1/2 tsp salt',
      '3 tbsp ghee',
      '1 tsp black peppercorns, lightly crushed',
      '1 tsp cumin seeds',
      '1 tbsp ginger, finely chopped',
      '1 g curry leaves'
    ],
    st: [
      'Dry roast the moong dal in a pan for 2 minutes until pale golden. Rinse with the rice until the water runs clear.',
      'Put the rice, dal, water and salt in a heavy pan. Bring to the boil, cover and simmer for 20 minutes, stirring now and then, until very soft.',
      'Mash lightly with the back of a spoon.',
      'Heat the ghee in a small pan. Fry the pepper, cumin, ginger and curry leaves for 1 minute and pour over the pongal.'
    ],
    tips: [
      'Roast the dal before rinsing.',
      'Use plenty of water for a soft porridge.',
      'Stir now and then so the base does not catch.',
      'Loosen with hot water if it thickens as it stands.'
    ],
    pair: ['Coconut chutney', 'Sambar', 'Plain yoghurt', 'Pickle'],
    store: 'Best eaten fresh. Keeps in the fridge for 2 days; add hot water when reheating.',
    nut: [308, 7, 43, 12, 4, 1, 300]
  },

  'tamarind-rice': {
    d: 'Cooked rice tossed with a tangy tamarind paste, mustard seeds, peanuts, chilli and curry leaves.',
    meta: 'Tamarind rice: cooked rice tossed with a tangy tamarind paste, mustard seeds, peanuts and curry leaves. Four servings, cooked for 20 minutes.',
    kw: ['tamarind rice', 'south indian tamarind rice', 'puliyodarai', 'pulihora', 'tamarind rice with peanuts'],
    why: 'Cook the paste, not the rice. That is the short and sharp rule for tamarind rice, because the rice is just a canvas, and the work is in the tangy, spiced paste that coats it.\n\nSoak a lump of tamarind in hot water for 15 minutes and squeeze out the pulp, or use a good ready-made paste. Cook it with turmeric, salt and a little jaggery or sugar until the raw sourness disappears and the oil starts to separate. **Cool the rice before mixing.** Hot rice turns mushy, while cooled grains stay separate and take up the paste evenly.\n\nThe tempering is crunchy and aromatic. Peanuts, mustard seeds, urad dal, chillies and curry leaves go into hot oil in turn, each a few seconds before the next.\n\nMix gently with a fork so the grains do not break. The flavour improves as it stands, and the rice is good cold, which makes it a favourite for packed lunches.',
    ing: [
      '300 g cooked basmati rice, cooled',
      '3 tbsp vegetable oil',
      '40 g peanuts',
      '1 tsp mustard seeds',
      '1 tbsp urad dal',
      '3 dried red chillies',
      '1 g curry leaves',
      '2 tbsp tamarind paste',
      '1/2 tsp ground turmeric',
      '1 tsp sugar',
      '1/2 tsp salt',
      '100 ml water'
    ],
    st: [
      'Heat the oil in a wide pan. Fry the peanuts for 1 minute until golden and lift out.',
      'Add the mustard seeds and wait for them to pop. Add the urad dal, chillies and curry leaves and fry for 30 seconds.',
      'Add the tamarind paste, turmeric, sugar, salt and water and simmer for 8 minutes until thick and the oil separates.',
      'Fold the paste gently through the cooled rice with a fork, then stir in the peanuts.'
    ],
    tips: [
      'Cook the paste until the oil separates.',
      'Use cooled rice so the grains stay apart.',
      'Fold gently with a fork, not a spoon.',
      'Leave it for 10 minutes so the rice absorbs the flavour.'
    ],
    pair: ['Papad', 'Plain yoghurt', 'Fried potatoes', 'Pickle'],
    store: 'Keeps in the fridge for 2 days. Tastes good cold or at room temperature.',
    nut: [296, 6, 32, 16, 2, 6, 320]
  },

  'lauki-sabzi': {
    d: 'Bottle gourd cooked with onion, tomato, cumin and turmeric in a light dry curry, finished with coriander.',
    meta: 'Lauki sabzi: bottle gourd cooked with onion, tomato, cumin and turmeric in a light curry. Four servings, cooked for 20 minutes.',
    kw: ['lauki sabzi', 'bottle gourd curry', 'lauki ki sabzi', 'indian bottle gourd sabzi', 'dudhi sabzi'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Bottle gourd is mild and watery, and a gentle simmer lets it release its own juice and cook in it, with no added water at all.\n\nPeel the gourd and scoop out any large seeds. Cut it into 2 cm cubes. If the gourd tastes bitter when raw, throw it away, since bitterness in this vegetable can make people ill. **Taste a tiny piece before cooking.** It should be mild and slightly sweet.\n\nThe masala is quick: cumin seeds in hot oil, then onion, ginger and tomato, cooked until soft. Turmeric and coriander add colour and warmth. The gourd goes in, and the lid goes on.\n\nStir now and then. After 12 minutes the pieces should be translucent and soft, but not collapsed. Finish with garam masala and fresh coriander. Choose a pale, firm gourd without soft patches. A slightly smaller one is usually less seedy.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger, grated',
      '2 tomatoes, about 200 g, chopped',
      '1/2 tsp ground turmeric',
      '1 tsp ground coriander',
      '1/2 tsp chilli powder',
      '700 g bottle gourd, peeled and cut into 2 cm cubes',
      '1/2 tsp salt',
      '1/2 tsp garam masala',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oil in a wide pan and fry the cumin seeds for 20 seconds. Add the onion and cook for 5 minutes.',
      'Add the ginger, tomatoes, turmeric, ground coriander and chilli powder and cook for 4 minutes until soft.',
      'Add the gourd and salt, cover and cook on a low heat for 12 minutes, stirring now and then, until tender.',
      'Stir in the garam masala and fresh coriander.'
    ],
    tips: [
      'Taste a raw piece of gourd for bitterness before cooking.',
      'Keep the lid on so the gourd cooks in its own juice.',
      'Do not add water unless the pan is dry.',
      'Serve it while the gourd still holds its shape.'
    ],
    pair: ['Chapati', 'Dal', 'Steamed rice', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [123, 2, 13, 7, 3, 7, 310]
  },

  'kaddu-ki-sabzi': {
    d: 'Cubed pumpkin cooked with fenugreek seeds, ginger, chilli and a touch of jaggery in a sweet-and-sour North Indian curry.',
    meta: 'Kaddu ki sabzi: cubed pumpkin cooked with fenugreek seeds, ginger and chilli, with a touch of sugar. Four servings, cooked for 25 minutes.',
    kw: ['kaddu ki sabzi', 'indian pumpkin curry', 'kaddu sabzi', 'sweet and sour pumpkin curry', 'pumpkin sabzi'],
    why: 'This is what to make when the pumpkins come into the shops in autumn and a whole one is cheaper than a few slices. Kaddu ki sabzi is a sweet-and-sour North Indian dish that treats pumpkin as a spiced vegetable, not a dessert.\n\nThe seasoning is unusual. Fenugreek seeds and fennel go into hot oil, followed by ginger and dried chilli. They are strong, so use them sparingly. **Do not let the fenugreek seeds go dark brown.** They turn bitter very quickly.\n\nCut the pumpkin into 3 cm pieces and leave the skin on if it is thin, as it holds the pieces together. Cook with a lid on, over a low heat, with just a splash of water.\n\nA little sugar and a squeeze of lemon at the end bring in the sweet and sour balance. Mash a few pieces against the pan to thicken the sauce. Butternut squash can replace the pumpkin, and it gives a sweeter, smoother result.',
    ing: [
      '2 tbsp vegetable oil',
      '1/2 tsp fenugreek seeds',
      '1 tsp fennel seeds',
      '2 dried red chillies',
      '1 tbsp ginger, grated',
      '800 g pumpkin, peeled and cut into 3 cm cubes',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '100 ml water',
      '1 tbsp sugar',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oil in a wide pan. Add the fenugreek and fennel seeds for 15 seconds, then the chillies and ginger for 30 seconds.',
      'Add the pumpkin, turmeric, chilli powder, salt and water and stir.',
      'Cover and cook over a low heat for 18 minutes, stirring now and then, until the pumpkin is soft.',
      'Mash a few pieces against the pan. Stir in the sugar and lemon juice and cook for 2 minutes.'
    ],
    tips: [
      'Watch the fenugreek seeds, because they turn bitter when dark.',
      'Cook with the lid on over a low heat.',
      'Mash some pumpkin to thicken the sauce.',
      'Adjust the sugar and lemon to your taste.'
    ],
    pair: ['Puri', 'Chapati', 'Steamed rice', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [171, 2, 25, 7, 5, 10, 310]
  },

  'gobi-paratha': {
    d: 'Flatbreads of whole wheat dough stuffed with a spiced grated cauliflower filling, cooked on a hot pan with ghee.',
    meta: 'Gobi paratha: wholemeal flatbreads stuffed with spiced grated cauliflower, cooked on a pan with ghee. Six servings, cooked for 20 minutes.',
    kw: ['gobi paratha', 'cauliflower paratha', 'stuffed cauliflower paratha', 'indian stuffed flatbread with cauliflower', 'gobi paratha with ghee'],
    why: 'Squeeze the cauliflower dry. That is the single most useful piece of advice for stuffed parathas, because a wet filling is the main reason they tear when you roll them. Cauliflower holds a lot of water, and salt draws it out.\n\nGrate the cauliflower on the fine side of the grater, mix it with the salt and spices, and leave it for 10 minutes. Then wrap it in a clean cloth and squeeze hard. **The filling should feel almost dry.** If it still sticks to your hands, squeeze again.\n\nThe dough is wholemeal flour and water, kneaded until soft and rested for 15 minutes. Roll a ball into a small round, place a spoonful of filling in the middle, pinch the edges together to seal and roll out again gently.\n\nCook on a hot dry pan, turning once, then brush with ghee and cook until golden spots appear. Press with a spatula to puff the bread.',
    ing: [
      '300 g wholemeal flour',
      '1/2 tsp salt',
      '180 ml water',
      '300 g cauliflower, finely grated',
      '1/2 tsp salt, for the filling',
      '1 green chilli, finely chopped',
      '1 tsp cumin seeds',
      '1/2 tsp garam masala',
      '10 g fresh coriander, chopped',
      '3 tbsp ghee'
    ],
    st: [
      'Mix the flour, first measure of salt and water into a soft dough. Knead for 5 minutes and rest for 15 minutes.',
      'Toss the cauliflower with the second measure of salt, leave for 10 minutes, then squeeze it dry in a clean cloth. Mix with the chilli, cumin, garam masala and coriander.',
      'Divide the dough into 6 balls. Roll each into a small round, add a spoonful of filling, pinch closed and roll out again to about 15 cm.',
      'Cook each paratha on a hot dry pan for 1 minute, flip, brush with ghee and cook for 1 minute on each side until golden.'
    ],
    tips: [
      'Squeeze the cauliflower until the filling is almost dry.',
      'Rest the dough before rolling.',
      'Roll gently so the filling stays inside.',
      'Cook on a hot pan, pressing lightly with a spatula.'
    ],
    pair: ['Plain yoghurt', 'Pickle', 'Butter', 'Masala chai'],
    store: 'Best eaten fresh. Keeps in the fridge for 2 days; reheat on a hot pan.',
    nut: [257, 8, 36, 9, 6, 2, 410]
  },

  'bisi-bele-bath': {
    d: 'A Karnataka one-pot dish of rice, lentils and mixed vegetables cooked with tamarind and a ground spice blend.',
    meta: 'Bisi bele bath: one-pot rice, lentils and mixed vegetables with tamarind and spice powder. Four servings, cooked for 35 minutes.',
    kw: ['bisi bele bath', 'karnataka bisi bele bath', 'bisi bele bath rice and lentils', 'bisi bele bhath', 'south indian lentil and rice dish'],
    why: 'Bisi bele bath means hot lentil rice in Kannada, and it is a dish of rice, lentils and vegetables cooked together until soft, with a tangy, spiced sauce running through it. It is eaten hot, loose and spoonable, and a spoonful of ghee on top is traditional.\n\nCook the rice and lentils until very soft, past the point where you would normally stop. They should nearly dissolve into each other. **Add more water than for plain rice.** The dish thickens as it stands, and a stiff one is dry and heavy.\n\nThe flavour comes from a spice powder made of dry-roasted chilli, coriander, cumin and lentils, ground to a coarse powder. A shop-bought bisi bele bath mix works well when you are short of time.\n\nTamarind pulp gives a gentle sourness. Add it to the vegetables, and simmer so the raw taste cooks out before everything is combined. A handful of roasted cashews or peanuts scattered on top adds crunch against the soft rice.',
    ing: [
      '150 g basmati rice',
      '100 g split pigeon peas or yellow split peas',
      '1.2 litres water',
      '200 g mixed vegetables, such as carrot, green beans and peas',
      '1/2 tsp ground turmeric',
      '2 tbsp tamarind paste',
      '3 tbsp spice powder',
      '1 tsp salt',
      '3 tbsp ghee',
      '1 tsp mustard seeds',
      '1 g curry leaves'
    ],
    st: [
      'Rinse the rice and lentils together. Cook with 900 ml of the water and the turmeric in a heavy pan for 25 minutes until very soft.',
      'Boil the vegetables in the remaining water with the tamarind paste for 8 minutes until tender. Stir in the spice powder and salt.',
      'Mix the vegetables into the rice and lentils and simmer for 5 minutes, adding hot water if too thick.',
      'Heat the ghee in a small pan, fry the mustard seeds and curry leaves for 30 seconds and pour over the dish.'
    ],
    tips: [
      'Cook the rice and lentils until very soft.',
      'Add hot water if the dish thickens as it stands.',
      'Use a ready-made spice mix if you have one.',
      'Serve it with a spoonful of ghee on top.'
    ],
    pair: ['Plain yoghurt', 'Papad', 'Boondi', 'Pickle'],
    store: 'Keeps in the fridge for 2 days. Add hot water when reheating, as it thickens.',
    nut: [380, 11, 57, 12, 11, 8, 630]
  },

  'nigerian-fried-rice': {
    d: 'Parboiled long grain rice fried with mixed vegetables, curry powder, thyme and stock, a party-style Nigerian rice dish.',
    meta: 'Nigerian fried rice: parboiled long grain rice fried with vegetables, curry powder, thyme and stock. Six servings, cooked for 30 minutes.',
    kw: ['nigerian fried rice', 'nigerian party fried rice', 'fried rice with mixed vegetables nigerian style', 'nigerian fried rice with curry powder', 'african fried rice'],
    why: 'A dish for a table of six at a celebration, and it appears at many Nigerian parties. It is not the Chinese-style fried rice most people picture. The rice is cooked in a stock with curry powder and thyme first, then fried with vegetables, which gives it a golden colour and a savoury, aromatic taste.\n\nParboil the rice in seasoned stock until just tender, then drain. **Do not overcook the rice at this stage.** It finishes in the pan, and soft rice turns to mush when stirred.\n\nThe vegetables are diced small and cooked briefly so they keep their colour. Carrots, green beans, peas and sweetcorn make the classic mixture, with a little onion for sweetness.\n\nFry everything together over a medium-high heat, tossing often. The rice should be loose, with each grain coated and no wet spots. Serve it at a gathering with a spoonful of coleslaw and fried plantain on the side, as is common at parties.',
    ing: [
      '400 g long grain rice',
      '800 ml chicken stock',
      '2 tsp curry powder',
      '1 tsp dried thyme',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, diced',
      '2 carrots, about 150 g, finely diced',
      '100 g green beans, finely chopped',
      '100 g frozen peas',
      '100 g tinned sweetcorn, drained',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Rinse the rice. Cook it in the stock with 1 tsp of the curry powder and the thyme for 12 minutes until just tender. Drain and spread out to steam dry.',
      'Heat the oil in a large pan and cook the onion and carrots for 5 minutes.',
      'Add the green beans, peas and sweetcorn and cook for 3 minutes. Add the remaining curry powder, the salt and the pepper.',
      'Add the rice and toss over a medium-high heat for 5 minutes until hot and evenly coloured.'
    ],
    tips: [
      'Parboil the rice and stop while it is firm.',
      'Spread the rice out to dry before frying.',
      'Dice the vegetables small and even.',
      'Toss, rather than stir, to keep the grains whole.'
    ],
    pair: ['Fried plantain', 'Roast chicken', 'Coleslaw', 'Moi moi'],
    store: 'Keeps in the fridge for 2 days. Cool quickly, and reheat until piping hot.',
    nut: [368, 8, 66, 8, 4, 4, 660]
  },

  'plantain-and-beans': {
    d: 'Brown beans cooked until soft with onion and palm oil, with ripe plantain simmered in the pot, a Nigerian one-pot dish.',
    meta: 'Plantain and beans: brown beans cooked until soft with onion and palm oil, with ripe plantain added. Four servings, cooked for 40 minutes.',
    kw: ['plantain and beans', 'nigerian beans and plantain', 'ewa and dodo', 'beans and ripe plantain porridge', 'african beans and plantain'],
    why: 'It tastes of the end of a long week, when the pot goes on slowly and the kitchen smells of onion and slightly sweet plantain. Beans and plantain is a Nigerian combination that costs little and feeds a household well.\n\nCook the beans first, on their own, in plenty of water. Tinned beans are quicker and perfectly good. The pot then gets onion, a little palm oil and ground crayfish or stock for savour. **Add the plantain late.** Ripe plantain cooks quickly, and if it goes in too early, it dissolves into the sauce.\n\nChoose plantain that is yellow with black patches. It is sweeter and softer than green, and the sweetness is what balances the earthy beans and the heat of the pepper.\n\nPalm oil gives the dish its colour and flavour. If you cannot find it, use vegetable oil with a pinch of paprika for colour. A spoonful of garri or a slice of bread on the side makes the meal more filling.',
    ing: [
      '960 g tinned black-eyed beans, drained',
      '3 tbsp palm oil',
      '1 onion, about 150 g, chopped',
      '1 scotch bonnet or red chilli, chopped',
      '500 ml vegetable stock',
      '2 ripe plantains, about 400 g, peeled and cut into 2 cm slices',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the palm oil in a large pan and cook the onion for 5 minutes until soft. Add the chilli.',
      'Add the beans and stock, bring to the boil and simmer for 15 minutes.',
      'Add the plantain, salt and pepper, cover and simmer for 15 minutes until the plantain is soft.',
      'Mash a few of the beans against the pan to thicken the stew. Taste and adjust the seasoning.'
    ],
    tips: [
      'Choose yellow plantain with black patches.',
      'Add the plantain after the beans have started to soften.',
      'Handle scotch bonnet chilli with care.',
      'Mash some beans to thicken the stew.'
    ],
    pair: ['Rice', 'Fried fish', 'Garri', 'Bread'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [496, 20, 77, 12, 17, 22, 1430]
  },

  'fried-yam': {
    d: 'Thick slices of yam parboiled in salted water and fried until golden and crisp outside, soft within.',
    meta: 'Fried yam: thick slices of yam parboiled in salted water, then fried until golden. Four servings, cooked for 15 minutes.',
    kw: ['fried yam', 'nigerian fried yam', 'yam chips', 'fried yam slices', 'crispy fried yam'],
    why: 'Salt the water. That short, sharp instruction is the whole difference between bland fried yam and the good kind, because the yam takes up flavour from the cooking water and the frying cannot supply it later.\n\nPeel the yam with a sharp knife, then cut it into thick slices or batons about 2 cm across. Rinse off the sticky starch under cold water. **Do not boil it until soft.** It should still hold firm when pierced, about 5 minutes, or it falls apart in the oil.\n\nDrain the yam and pat it very dry. Water on the surface makes the oil spit and the yam steam rather than crisp. Fry in batches, so the pieces do not touch.\n\nGolden brown outside and soft and starchy inside, fried yam is eaten with a pepper sauce or an egg sauce. A sprinkle of salt over the top while still hot finishes it.',
    ing: [
      '700 g white yam, peeled and cut into batons',
      '1 tsp salt',
      '1 litre water',
      '250 ml vegetable oil, for frying',
      '1 tomato, about 100 g, chopped',
      '1/2 onion, about 75 g, chopped',
      '1 red chilli, finely chopped'
    ],
    st: [
      'Boil the yam in the water with half the salt for 5 minutes until just firm. Drain and pat very dry.',
      'Heat the oil in a deep pan until a piece of yam sizzles at once.',
      'Fry the yam in batches for 5 minutes each, turning, until golden. Drain on kitchen paper and sprinkle with the rest of the salt.',
      'Mix the tomato, onion and chilli into a quick relish and serve alongside.'
    ],
    tips: [
      'Rinse the cut yam to remove sticky starch.',
      'Parboil only until firm.',
      'Pat the pieces very dry before frying.',
      'Fry in small batches to keep the oil hot.'
    ],
    pair: ['Pepper sauce', 'Egg sauce', 'Fried fish', 'Tomato relish'],
    store: 'Best eaten straight away, while crisp.',
    nut: [742, 3, 52, 58, 8, 2, 610]
  },

  'atkilt-wat': {
    d: 'An Ethiopian stew of cabbage, carrots and potatoes cooked gently with onion, garlic, ginger and turmeric.',
    meta: 'Atkilt wat: Ethiopian stew of cabbage, carrots and potatoes cooked with onion, garlic, ginger and turmeric. Four servings, cooked for 30 minutes.',
    kw: ['atkilt wat', 'ethiopian cabbage stew', 'ethiopian cabbage potato and carrot', 'atkilt wot', 'ethiopian vegetable stew'],
    why: 'It looks like a plain vegetable braise and eats like a mild, savoury stew, which is the point: atkilt wat is a gentle dish. It sits on a table beside spicier stews and offers cool relief, with soft cabbage, sweet carrots and potatoes in a golden sauce.\n\nCook the onion first, dry or with a little oil, until soft and translucent. Do not brown it, as the dish should stay pale and yellow. Add the garlic and ginger and then the turmeric. **Keep the heat medium-low throughout.** Turmeric burns easily and tastes bitter.\n\nCut the carrots and potatoes into 2 cm pieces and the cabbage into wide strips. Add the vegetables in layers with a splash of water, then cover and cook until all are tender.\n\nThe dish is ready when the vegetables are soft but not mushy. Serve with injera or rice. Leftovers taste better the next day and make a good filling for a wrap or flatbread.',
    ing: [
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '1 tbsp ginger, grated',
      '1 tsp ground turmeric',
      '300 g potatoes, peeled and cut into 2 cm pieces',
      '2 carrots, about 150 g, cut into 2 cm pieces',
      '300 g white cabbage, cut into wide strips',
      '150 ml water',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oil in a wide pan over a medium-low heat and cook the onion for 8 minutes until soft but not brown.',
      'Add the garlic, ginger and turmeric and cook for 1 minute.',
      'Add the potatoes, carrots, water and salt, cover and cook for 10 minutes.',
      'Add the cabbage and pepper, cover and cook for 10 minutes until all the vegetables are tender.'
    ],
    tips: [
      'Keep the heat low so the turmeric does not burn.',
      'Add the cabbage after the potatoes and carrots have started to soften.',
      'Do not stir too often, or the vegetables break up.',
      'Serve with injera or rice.'
    ],
    pair: ['Injera', 'Steamed rice', 'Lentil stew', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [215, 3, 26, 11, 5, 6, 340]
  },

  'kik-alicha': {
    d: 'A mild Ethiopian split pea stew cooked with onion, garlic, ginger and turmeric until thick and golden.',
    meta: 'Kik alicha: mild Ethiopian split pea stew cooked with onion, garlic, ginger and turmeric. Four servings, cooked for 40 minutes.',
    kw: ['kik alicha', 'ethiopian split pea stew', 'kik alicha wat', 'yellow split pea stew', 'ethiopian yellow split peas'],
    why: 'The first sign it is ready is the colour: a deep, even gold, with a thick, creamy texture that holds a spoon. Kik alicha is a mild Ethiopian stew of yellow split peas, made without the berbere spice that colours many other Ethiopian dishes red.\n\nRinse the peas until the water runs clear, then cook them in water until they begin to fall apart. They take about 30 minutes. Skim off any foam. **Stir often towards the end.** Split peas settle and scorch easily, and a burnt base spoils the whole stew.\n\nThe seasoning is cooked separately in oil: onion softened slowly, then garlic, ginger and turmeric. Stir it into the peas just before serving. This keeps the aromas fresh and the flavour bright.\n\nThe stew should be thick but pourable. Add hot water if it stiffens. Serve on injera, or with rice or flatbread. A spoonful of the sizzling onion mixture on top of each bowl looks and tastes good.',
    ing: [
      '250 g yellow split peas, rinsed',
      '1 litre water',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '1 tbsp ginger, grated',
      '1 tsp ground turmeric',
      '1/2 tsp salt'
    ],
    st: [
      'Put the split peas and water in a pan, bring to the boil, skim, and simmer for 30 minutes, stirring often, until soft and thick.',
      'Meanwhile, heat the oil in a small pan and cook the onion for 8 minutes until soft but not brown.',
      'Add the garlic, ginger and turmeric and cook for 2 minutes.',
      'Stir the onion mix and salt into the peas and simmer for 5 minutes. Add hot water if too thick.'
    ],
    tips: [
      'Rinse the peas until the water runs clear.',
      'Stir often at the end so the stew does not catch.',
      'Cook the onion gently without browning it.',
      'Loosen the stew with hot water as needed.'
    ],
    pair: ['Injera', 'Steamed rice', 'Cabbage stew', 'Green salad'],
    store: 'Keeps in the fridge for 4 days. It thickens as it cools, so add hot water when reheating.',
    nut: [331, 16, 42, 11, 17, 7, 310]
  }
};
