'use strict';

/**
 * Volume forty-seven — pulses, rice and potatoes from East Africa, the
 * Middle East, Turkey and Greece.
 *
 * Twenty-two dishes: a Kenyan bean stew and mashed greens, South African
 * fried dough, maize bread and meatballs, a Moroccan egg dish, Egyptian rice
 * and a bean sandwich, a Lebanese cabbage salad and garlic potatoes, Persian
 * eggs and tomatoes, a potato kuku and lentil rice, Turkish bulgur, white
 * beans, fritters and lentil kofte, then Greek fried potatoes, spinach rice,
 * green beans and baked chickpeas, with a pasta frittata. Times are the
 * recipe's own; hobs differ, so each method says what to look for. Nutrition
 * is estimated by npm run calc.
 */

module.exports = {
  'mchuzi-wa-maharage': {
    d: 'A Kenyan stew of red kidney beans simmered with onion, tomato, garlic and coriander until thick and savoury.',
    meta: 'Mchuzi wa maharage: Kenyan red kidney bean stew with onion, tomato, garlic and coriander. Four servings, cooked for 35 minutes.',
    kw: ['mchuzi wa maharage', 'kenyan bean stew', 'kenyan red kidney bean stew', 'maharagwe ya nazi style beans', 'beans in tomato and onion sauce'],
    why: 'Mash a few beans. That is the short, sharp trick behind this stew, because it thickens the sauce without any flour or cream, and the beans are what give the dish its body. Mchuzi wa maharage is a Swahili name for a bean stew, and it is eaten across Kenya with rice, chapati or ugali.\n\nThe base is onion, cooked until soft and golden in oil, then garlic and tomato, simmered until the tomato collapses and the oil rises around the edge. Add a little ground coriander and cumin for warmth. **Cook the tomato properly before the beans go in.** Raw tomato leaves a sharp, tinny taste that no amount of simmering fully removes.\n\nTinned beans save hours and cost little. Rinse them and add them with enough water to just cover. Simmer for about 20 minutes so they take on the flavour of the sauce.\n\nFinish with fresh coriander, which wilts into the stew and adds a clean, green note against the rich beans.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp ground coriander',
      '1/2 tsp ground cumin',
      '720 g tinned red kidney beans, drained',
      '300 ml water',
      '1/2 tsp salt',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oil in a pan and cook the onion for 6 minutes until golden. Add the garlic for 1 minute.',
      'Add the tomatoes, ground coriander and cumin and cook for 6 minutes until the tomatoes collapse and the oil separates.',
      'Add the beans, water and salt and bring to the boil. Simmer for 20 minutes, stirring now and then.',
      'Mash a few beans against the pan to thicken the stew. Stir in the fresh coriander.'
    ],
    tips: [
      'Cook the tomatoes until the oil separates.',
      'Mash some beans to thicken the stew.',
      'Rinse the tinned beans before adding them.',
      'Add water if the stew gets too thick as it stands.'
    ],
    pair: ['Steamed rice', 'Chapati', 'Ugali', 'Sliced tomato and onion'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [264, 14, 34, 8, 12, 5, 840]
  },

  'mukimo': {
    d: 'A Kenyan mash of potatoes, peas and sweetcorn with greens, mashed together and seasoned with salt and pepper.',
    meta: 'Mukimo: Kenyan mash of potatoes, peas, sweetcorn and greens, mashed together until green-flecked. Four servings, cooked for 30 minutes.',
    kw: ['mukimo', 'kenyan mukimo', 'kenyan mashed potatoes with peas and corn', 'mukimo with greens', 'kikuyu mash'],
    why: 'Why does mukimo look green? Because the greens go into the pot and are mashed straight into the potatoes, so each forkful carries flecks of leaf, kernels of corn and the sweetness of peas. It is a Kenyan comfort food, hearty enough to be a meal on its own.\n\nBoil the potatoes until completely tender, then drain and keep a cup of the cooking water. Dry potatoes mash into a stiff paste; water loosens it. Add the peas, corn and chopped greens to the pot for the last few minutes of cooking so they soften together. **Mash everything while it is still hot.** Cold potatoes turn gluey and will not blend with the vegetables.\n\nPumpkin leaves are traditional, but spinach, kale or any soft green works. Chop them finely so they blend in.\n\nA spoonful of butter makes it richer. Serve the mukimo hot, with a stew such as beef or beans poured over the top.',
    ing: [
      '800 g potatoes, peeled and cut into chunks',
      '150 g frozen peas',
      '150 g tinned sweetcorn, drained',
      '150 g spinach, finely chopped',
      '2 tbsp butter',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the potatoes in a pan of cold salted water, bring to the boil and cook for 15 minutes.',
      'Add the peas, sweetcorn and spinach and cook for 5 minutes more until the potatoes are completely tender.',
      'Drain, keeping a cup of the water. Return to the pan, add the butter, salt and pepper.',
      'Mash everything together while hot, adding a splash of the cooking water until smooth and green-flecked.'
    ],
    tips: [
      'Mash while the vegetables are hot.',
      'Use the cooking water, not milk, for a lighter mash.',
      'Chop the greens finely.',
      'Taste and add salt at the end.'
    ],
    pair: ['Beef stew', 'Bean stew', 'Sliced tomato salad', 'Fried fish'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [287, 8, 48, 7, 8, 5, 340]
  },

  'vetkoek': {
    d: 'South African fried bread: a soft yeast dough deep-fried into golden balls and split open to fill with curried mince.',
    meta: 'Vetkoek: South African fried bread dough fried until golden and filled with curried mince. Eight servings, cooked for 15 minutes.',
    kw: ['vetkoek', 'south african vetkoek', 'vetkoek with mince', 'fried bread dough', 'vetkoek recipe'],
    why: 'It looks like a doughnut and eats like a roll, which is why it works as either a savoury meal or a sweet treat. Vetkoek is the Afrikaans word for fat cake, and the name describes it well: a ball of dough fried in oil until deep golden and puffed.\n\nThe dough is a simple yeast one: flour, yeast, a little sugar and salt, mixed with warm water until soft and slightly sticky. Knead it briefly and leave it to rise until doubled. **Do not add extra flour if the dough feels sticky.** A wet dough puffs and stays light; a stiff one fries into a dense lump.\n\nHeat the oil until a small piece of dough sizzles and rises at once. Too hot, and the outside burns before the middle cooks; too cool, and the dough soaks up oil. Fry a few at a time and turn them often.\n\nSplit them open while warm and fill with curried mince, cheese or jam.',
    ing: [
      '400 g plain flour',
      '7 g dried yeast',
      '1 tbsp sugar',
      '1 tsp salt',
      '280 ml warm water',
      '400 ml vegetable oil, for frying',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '300 g beef mince',
      '1 tbsp curry powder',
      '100 ml water, for the mince'
    ],
    rest: [60, 'Rising'],
    st: [
      'Mix the flour, yeast, sugar and salt in a bowl. Add the warm water and mix to a soft, sticky dough. Cover and leave to rise for 1 hour.',
      'Meanwhile, heat the tablespoon of oil and cook the onion for 5 minutes. Add the mince and brown for 5 minutes. Stir in the curry powder, add the water and simmer for 10 minutes until thick.',
      'Heat the frying oil in a deep pan. Drop in spoonfuls of dough and fry for 4 minutes, turning, until deep golden and cooked through.',
      'Drain on kitchen paper, split open and fill with the mince.'
    ],
    tips: [
      'Keep the dough soft and slightly sticky.',
      'Test the oil with a piece of dough before frying.',
      'Fry a few at a time so the oil stays hot.',
      'Split one open to check it is cooked inside.'
    ],
    pair: ['Chutney', 'Grated cheese', 'Salad', 'Hot tea'],
    store: 'Best eaten the same day. Keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [706, 13, 42, 54, 2, 3, 320]
  },

  'mielie-bread': {
    d: 'A moist South African sweetcorn bread made with creamed corn, flour, eggs and milk, baked in a loaf tin.',
    meta: 'Mielie bread: South African sweetcorn bread with creamed corn, flour, eggs and milk, baked in a loaf tin. Eight servings, baked for 45 minutes.',
    kw: ['mielie bread', 'south african sweetcorn bread', 'mealie bread', 'creamed corn bread', 'baked corn loaf'],
    why: 'Mielie is the Afrikaans word for maize, and mielie bread is a loaf built on sweetcorn, with kernels in the crumb and a golden, slightly sweet crust. It is a staple of South African braai tables, served warm with butter alongside grilled meat.\n\nThe batter is closer to a cake mix than a bread dough. Combine the dry ingredients, then stir in the eggs, milk and corn until just mixed. There is no kneading, and no waiting for yeast. **Do not overmix.** A few streaks of flour are fine, and a heavily beaten batter bakes into a tough loaf.\n\nCreamed sweetcorn gives moisture and a soft crumb. Whole kernels add texture and little bursts of sweetness. If you only have one type of tin, blitz half the corn in a blender.\n\nBake in a well-greased loaf tin until a skewer comes out clean. Cool for 10 minutes in the tin before turning out, or it may break.',
    ing: [
      '250 g plain flour',
      '3 tsp baking powder',
      '1 tsp salt',
      '2 tbsp sugar',
      '2 eggs, about 100 g',
      '250 ml whole milk',
      '400 g tinned creamed sweetcorn',
      '200 g tinned sweetcorn, drained',
      '60 g butter, melted'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and grease a 900 g loaf tin.',
      'Mix the flour, baking powder, salt and sugar in a large bowl.',
      'Whisk the eggs, milk, creamed corn, whole corn and melted butter together and fold into the dry mix until just combined.',
      'Pour into the tin and bake for 45 minutes until golden and a skewer comes out clean. Cool for 10 minutes in the tin before turning out.'
    ],
    tips: [
      'Mix until only just combined.',
      'Grease the tin well.',
      'If your oven runs hot, check at 35 minutes.',
      'Wait for the loaf to cool before slicing.'
    ],
    pair: ['Butter', 'Grilled sausages', 'Soup', 'Cheese'],
    store: 'Keeps in an airtight tin for 3 days. Freezes well, sliced, for up to 2 months.',
    nut: [294, 8, 43, 10, 2, 7, 520]
  },

  'frikkadels': {
    d: 'South African spiced meatballs of beef mince, bread, onion and a touch of nutmeg, pan-fried and finished in a tomato sauce.',
    meta: 'Frikkadels: South African meatballs of beef mince, bread, onion and nutmeg, fried and simmered in tomato sauce. Four servings, cooked for 25 minutes.',
    kw: ['frikkadels', 'south african meatballs', 'frikkadel recipe', 'afrikaans meatballs', 'frikkadels in tomato sauce'],
    why: 'Frikkadel is the Afrikaans word for a meatball, and these are plain, savoury and quick to make. Beef mince, an onion, soaked bread and a little nutmeg are shaped into balls and browned in a pan, then finished in a simple tomato sauce.\n\nThe bread is the key to tender meatballs. Soak it in milk, squeeze out the excess and mash it into the mince. It holds moisture inside the meat and stops the balls turning dense. **Mix gently, and only until combined.** Overworked mince is firm and rubbery.\n\nShape them into balls about the size of a golf ball. Wet hands stop the mixture sticking. Brown them in oil over a medium heat, turning often, until crusty on all sides. They do not need to cook through yet.\n\nAdd the tomato sauce and simmer for 10 minutes. The meatballs finish cooking in the sauce and soak up its flavour.',
    ing: [
      '2 slices white bread, about 60 g',
      '100 ml whole milk',
      '500 g beef mince',
      '1 onion, about 150 g, grated',
      '1 egg, about 50 g',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp vegetable oil',
      '400 g tinned chopped tomatoes',
      '1 tbsp chutney'
    ],
    st: [
      'Soak the bread in the milk for 5 minutes, then squeeze it out and mash it.',
      'Mix the bread with the mince, onion, egg, nutmeg, salt and pepper. Shape into 16 balls with wet hands.',
      'Heat the oil in a wide pan and brown the meatballs for 6 minutes, turning, until crusted all over.',
      'Add the tomatoes and chutney, bring to a simmer and cook for 10 minutes until the meatballs are cooked through and the sauce is thick.'
    ],
    tips: [
      'Squeeze the soaked bread well.',
      'Mix lightly to keep the meatballs tender.',
      'Wet your hands to shape the balls.',
      'Cut one open to check it is cooked through.'
    ],
    pair: ['Mashed potato', 'Rice', 'Green beans', 'Bread rolls'],
    store: 'Keeps in the fridge for 3 days. Freezes well for up to 2 months.',
    nut: [440, 29, 18, 28, 2, 8, 800]
  },

  'moroccan-eggs': {
    d: 'Eggs cooked in a spiced tomato and pepper sauce with cumin and paprika, served with bread.',
    meta: 'Moroccan eggs: eggs poached in a spiced tomato and pepper sauce with cumin, paprika and coriander. Two servings, cooked for 15 minutes.',
    kw: ['moroccan eggs', 'moroccan eggs in tomato sauce', 'moroccan breakfast eggs', 'eggs with tomato and pepper sauce', 'spiced eggs in tomato sauce'],
    why: 'It looks like shakshuka and cooks like it, which is no accident, because the dish belongs to the same North African family of eggs poached in a spiced tomato sauce. The Moroccan version leans on cumin, paprika and fresh coriander and is often served for a late breakfast.\n\nThe sauce comes first. Soften the pepper and onion in oil, add the garlic and spices for a minute, then the tomatoes. Cook until thick enough to hold a dip made with the back of a spoon. **Reduce the sauce before the eggs go in.** A watery sauce lets the whites run and never set.\n\nCrack each egg into a small cup first, then slide it into a dip in the sauce. That way a broken yolk or a bit of shell does not ruin the pan.\n\nCover and cook gently for about 5 minutes, until the whites are firm and the yolks still wobble. Serve in the pan with plenty of bread.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '1 red pepper, about 150 g, diced',
      '2 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp paprika',
      '400 g tinned chopped tomatoes',
      '1/2 tsp salt',
      '4 eggs, about 200 g',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion and pepper for 6 minutes until soft. Add the garlic, cumin and paprika for 1 minute.',
      'Add the tomatoes and salt and simmer for 5 minutes until thick.',
      'Make 4 dips in the sauce and crack an egg into each. Cover and cook gently for 5 minutes until the whites are set and the yolks still wobble.',
      'Scatter with the coriander and serve from the pan.'
    ],
    tips: [
      'Thicken the sauce before the eggs go in.',
      'Crack each egg into a cup first.',
      'Cook on a low heat so the whites set gently.',
      'Check at 4 minutes if you prefer runny yolks.'
    ],
    pair: ['Crusty bread', 'Olives', 'Feta', 'Mint tea'],
    store: 'Best eaten straight away. The sauce keeps in the fridge for 3 days; poach fresh eggs when serving.',
    nut: [372, 17, 22, 24, 6, 12, 730]
  },

  'egyptian-rice-with-vermicelli': {
    d: 'Short grain rice cooked with golden-fried vermicelli pasta in stock, fluffy and savoury.',
    meta: 'Egyptian rice with vermicelli: short grain rice cooked with golden fried vermicelli in stock. Four servings, cooked for 25 minutes.',
    kw: ['egyptian rice with vermicelli', 'rice with vermicelli', 'egyptian vermicelli rice', 'roz bel shaghria style rice', 'rice with fried noodles'],
    why: 'Most home versions come out sticky or bland, and the fix is the vermicelli. Fried in butter or oil until deep golden brown, the broken pasta gives the rice a toasted, nutty flavour that plain rice cannot match.\n\nBreak the vermicelli into short lengths and fry it in the fat, stirring all the time. It goes from pale to gold to burnt very quickly, so watch it closely and stop at the colour of dark honey. **Do not walk away from the pan.** Burnt vermicelli tastes bitter and cannot be saved.\n\nRinse the rice until the water runs clear, then add it to the pan with the vermicelli and stir for a minute so every grain is coated in fat. Add hot stock or water, with salt, and bring to the boil.\n\nCover tightly, lower the heat to the minimum and leave for 15 minutes. Rest off the heat for 5 minutes, then fluff with a fork.',
    ing: [
      '3 tbsp butter',
      '60 g dried vermicelli, broken into short pieces',
      '250 g short grain rice, rinsed',
      '500 ml hot chicken stock',
      '1/2 tsp salt'
    ],
    st: [
      'Melt the butter in a heavy pan over a medium heat. Add the vermicelli and fry for 3 minutes, stirring, until deep golden.',
      'Add the rice and stir for 1 minute to coat in the butter.',
      'Pour in the stock and salt and bring to the boil. Cover, lower the heat to the minimum and cook for 15 minutes.',
      'Rest off the heat, covered, for 5 minutes. Fluff with a fork.'
    ],
    tips: [
      'Stir the vermicelli constantly while it browns.',
      'Rinse the rice until the water runs clear.',
      'Keep the lid on while the rice cooks.',
      'Use water instead of stock for a plainer rice.'
    ],
    pair: ['Roast chicken', 'Grilled fish', 'Tomato salad', 'Stewed vegetables'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [370, 8, 62, 10, 1, 0, 710]
  },

  'egyptian-bean-sandwich': {
    d: 'Warm spiced fava beans mashed with garlic, lemon and cumin, packed into pitta with tomato and parsley.',
    meta: 'Egyptian bean sandwich: warm mashed fava beans with garlic, lemon and cumin in pitta with tomato. Four servings, cooked for 10 minutes.',
    kw: ['egyptian bean sandwich', 'ful medames sandwich', 'fava bean sandwich', 'mashed fava beans in pitta', 'egyptian ful in pitta bread'],
    why: 'Warm the beans and mash them roughly. That is the single most useful instruction for this sandwich, because it turns tinned fava beans from firm and bland into something creamy and rich enough to fill a pitta.\n\nTinned fava beans, also sold as ful medames, are cheap and already cooked. Drain them, tip them into a pan with a splash of the liquid and heat gently. Mash about two thirds against the side of the pan and leave the rest whole. **Season at the end.** Garlic, cumin, lemon and salt all vary in strength, and tasting is the only reliable guide.\n\nOlive oil stirred in at the end gives a glossy finish. Chopped tomato and parsley add freshness and a little acidity.\n\nSplit the pitta and warm it in a dry pan, then spoon in the beans while they are hot. The bread should be soft, with the filling steaming inside.',
    ing: [
      '800 g tinned fava beans',
      '2 garlic cloves, crushed',
      '1 tsp ground cumin',
      '3 tbsp lemon juice',
      '3 tbsp olive oil',
      '1/2 tsp salt',
      '2 tomatoes, about 200 g, diced',
      '15 g fresh parsley, chopped',
      '4 pitta breads, about 240 g'
    ],
    st: [
      'Tip the beans and their liquid into a pan and heat gently for 5 minutes.',
      'Mash about two thirds of the beans against the side of the pan. Stir in the garlic, cumin, lemon juice, half the oil and the salt.',
      'Warm the pittas in a dry pan for 1 minute on each side and split them open.',
      'Fill with the beans, tomatoes and parsley and drizzle with the rest of the oil.'
    ],
    tips: [
      'Mash only part of the beans for texture.',
      'Taste before serving and adjust the lemon and salt.',
      'Warm the pitta so it folds without cracking.',
      'Add a pinch of chilli flakes for heat.'
    ],
    pair: ['Pickled turnips', 'Green salad', 'Boiled eggs', 'Mint tea'],
    store: 'The bean mix keeps in the fridge for 3 days. Reheat gently before filling the pitta.',
    nut: [413, 17, 57, 13, 13, 7, 1190]
  },

  'lebanese-cabbage-salad': {
    d: 'Finely shredded white cabbage tossed with lemon juice, olive oil, garlic, dried mint and salt.',
    meta: 'Lebanese cabbage salad: finely shredded white cabbage tossed with lemon, olive oil, garlic and dried mint. Four servings, no cooking needed.',
    kw: ['lebanese cabbage salad', 'cabbage salad with lemon and mint', 'lebanese malfouf salad', 'cabbage salad with garlic and mint', 'raw cabbage salad with lemon'],
    why: 'The first sign it is ready is the smell: sharp lemon, raw garlic and the cool scent of dried mint rising from the bowl. It is a salad that announces itself before the first forkful.\n\nCabbage is tough, so the cut matters. Slice it as thin as you can with a sharp knife, so the strands are almost like hair. Thick pieces stay chewy. Then add the salt and rub the cabbage with your hands for a minute until it starts to soften and release a little water. **Let it stand for 10 minutes before eating.** The lemon and salt tenderise the cabbage and mellow its sharpness.\n\nGarlic should be crushed with a pinch of salt into a paste, so it spreads evenly. One clove is enough for the whole bowl.\n\nDried mint is traditional, and it has a deeper flavour than fresh. Serve alongside grilled meat, falafel or rice dishes.',
    ing: [
      '500 g white cabbage, very finely shredded',
      '1/2 tsp salt',
      '1 garlic clove, crushed',
      '4 tbsp lemon juice',
      '3 tbsp olive oil',
      '2 tsp dried mint'
    ],
    st: [
      'Put the cabbage in a large bowl with the salt and rub it with your hands for 1 minute until it softens.',
      'Whisk the garlic, lemon juice, olive oil and mint together and pour over the cabbage.',
      'Toss well and leave for 10 minutes.',
      'Taste and add more lemon or salt if needed.'
    ],
    tips: [
      'Slice the cabbage as thin as you can.',
      'Rub the salt in to soften the leaves.',
      'Leave the salad to stand before serving.',
      'Use a single clove of garlic, since it is raw.'
    ],
    pair: ['Grilled chicken', 'Falafel', 'Rice dishes', 'Flatbread'],
    store: 'Keeps in the fridge for 2 days, getting softer and sharper as it stands.',
    nut: [143, 2, 9, 11, 3, 4, 320]
  },

  'lebanese-garlic-potatoes': {
    d: 'Cubed potatoes roasted or fried until golden, then tossed with raw garlic, lemon juice, olive oil and coriander.',
    meta: 'Lebanese garlic potatoes: cubed potatoes fried until golden and tossed with garlic, lemon and coriander. Four servings, cooked for 25 minutes.',
    kw: ['lebanese garlic potatoes', 'batata harra style potatoes', 'garlic and lemon potatoes', 'potatoes with garlic and coriander', 'lebanese fried potatoes with garlic'],
    why: 'Most home versions come out pale and limp, and the fix is the order of events. Fry the potatoes first until crisp and deep golden, and only then add the garlic. Garlic that goes in early burns before the potatoes brown and turns the dish bitter.\n\nCut the potatoes into 2 cm cubes and dry them well after rinsing off the surface starch. Water on the cubes lowers the oil temperature and makes them steam. **Cook in a single layer.** If the pan is crowded, fry in two batches.\n\nOnce the potatoes are crisp, take the pan off the heat for a moment, then stir in the garlic, lemon juice and coriander. The residual heat softens the garlic without scorching it. A pinch of chilli flakes makes it closer to the spicy, tangy version served in Lebanese restaurants.\n\nEat while hot. The crust softens as the lemon soaks in. Waxy potatoes hold their shape and crisp well, while floury ones crumble, so choose accordingly.',
    ing: [
      '800 g potatoes, peeled and cut into 2 cm cubes',
      '4 tbsp olive oil',
      '1/2 tsp salt',
      '4 garlic cloves, crushed',
      '3 tbsp lemon juice',
      '1/2 tsp chilli flakes',
      '15 g fresh coriander, chopped'
    ],
    st: [
      'Rinse the potato cubes, then dry them well on a clean tea towel.',
      'Heat the oil in a large frying pan over a medium-high heat. Add the potatoes in a single layer with the salt and cook for 20 minutes, turning now and then, until deep golden and crisp.',
      'Take the pan off the heat. Stir in the garlic, lemon juice and chilli flakes for 1 minute.',
      'Toss through the coriander and serve hot.'
    ],
    tips: [
      'Dry the potatoes before frying.',
      'Cook in one layer so they crisp.',
      'Add the garlic off the heat to avoid bitterness.',
      'Serve right away, while the edges are still crisp.'
    ],
    pair: ['Grilled chicken', 'Flatbread', 'Plain yoghurt', 'Green salad'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them again.',
    nut: [286, 4, 36, 14, 5, 2, 310]
  },

  'iranian-eggs-and-tomatoes': {
    d: 'Eggs scrambled into softened tomatoes and onion, seasoned with turmeric and salt, a common Persian breakfast.',
    meta: 'Iranian eggs and tomatoes: eggs scrambled into softened tomatoes and onion with turmeric. Two servings, cooked for 15 minutes.',
    kw: ['iranian eggs and tomatoes', 'persian eggs and tomatoes', 'persian tomato and egg breakfast', 'eggs with tomatoes and turmeric', 'persian omelette with tomato'],
    why: 'It looks like a loose scramble and eats like a savoury jam with eggs folded through, which is why the tomatoes have to cook right down before the eggs go in. Iranian eggs and tomatoes is a breakfast and a quick supper, served with flatbread and a pot of tea.\n\nSoften the onion in oil with the turmeric until golden. Add the tomatoes, cut into small pieces, and cook until they collapse into a thick sauce, which takes about 8 minutes. **Do not add the eggs until the pan is nearly dry.** Excess liquid makes the eggs watery and pale.\n\nBeat the eggs with a pinch of salt and pour them over the tomatoes. Leave for 30 seconds, then stir gently so the eggs set in large, soft folds. Take the pan off the heat while they are still glossy.\n\nTraditionally eaten from the pan with bread, in a family setting, with fresh herbs and sliced cucumber on the side.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '1/2 tsp ground turmeric',
      '400 g ripe tomatoes, chopped',
      '1/2 tsp salt',
      '4 eggs, about 200 g, beaten',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oil in a frying pan and cook the onion with the turmeric for 6 minutes until golden.',
      'Add the tomatoes and half the salt and cook for 8 minutes until thick and nearly dry.',
      'Beat the eggs with the rest of the salt and pour over the tomatoes. Leave for 30 seconds.',
      'Stir gently for 1 minute so the eggs set in soft folds. Season with the pepper and serve from the pan.'
    ],
    tips: [
      'Cook the tomatoes until the pan is nearly dry.',
      'Stir gently to keep the eggs in soft folds.',
      'Take the pan off the heat while the eggs look glossy.',
      'Use ripe tomatoes, or add a pinch of sugar if they are pale.'
    ],
    pair: ['Flatbread', 'Fresh herbs', 'Sliced cucumber', 'Black tea'],
    store: 'Best eaten straight away.',
    nut: [340, 15, 16, 24, 4, 9, 730]
  },

  'kookoo-sibzamini': {
    d: 'A Persian potato kuku: mashed potatoes mixed with egg, turmeric, onion and herbs and pan-fried into a thick, golden cake.',
    meta: 'Kookoo sibzamini: Persian potato cake of mashed potato, egg, onion and turmeric, fried until golden. Four servings, cooked for 25 minutes.',
    kw: ['kookoo sibzamini', 'persian potato kuku', 'persian potato cake', 'potato kookoo', 'persian potato omelette'],
    why: 'It looks like a thick omelette and eats like a savoury cake, and it is a dish for the end of autumn, when potatoes are cheap and heavy and the nights are cold. Kookoo sibzamini is a Persian potato dish that sits somewhere between a mash, a fritter and a frittata.\n\nBoil the potatoes until soft, drain them very well and mash them while hot. Wet potatoes make a runny cake, so let them steam dry for a couple of minutes. Mix in the egg, grated onion, turmeric and salt. **Keep the mix thick.** It should hold a shape on a spoon, not drip off it.\n\nCook the cakes slowly in a well-oiled pan, over a medium-low heat. A high heat browns the outside before the egg in the middle sets. Press each cake down gently with a spatula so it cooks evenly.\n\nTurn once, when the underside is deep golden and releases from the pan without sticking.',
    ing: [
      '700 g potatoes, peeled and cut into chunks',
      '2 eggs, about 100 g',
      '1 small onion, about 80 g, grated',
      '1/2 tsp ground turmeric',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '15 g fresh parsley, chopped',
      '4 tbsp vegetable oil'
    ],
    st: [
      'Boil the potatoes for 15 minutes until soft. Drain well, steam dry for 2 minutes and mash.',
      'Squeeze the grated onion in a cloth and mix with the potatoes, eggs, turmeric, salt, pepper and parsley.',
      'Heat half the oil in a frying pan over a medium-low heat. Spoon in 4 mounds of the mix and press flat to about 2 cm thick.',
      'Cook for 5 minutes on each side until deep golden. Repeat with the rest of the oil and mix.'
    ],
    tips: [
      'Steam the potatoes dry after draining.',
      'Squeeze the grated onion before using it.',
      'Keep the heat medium-low so the middle cooks through.',
      'Flip with a wide spatula to keep the cakes whole.'
    ],
    pair: ['Plain yoghurt', 'Flatbread', 'Pickled cucumber', 'Fresh herbs'],
    store: 'Keeps in the fridge for 3 days. Eat cold or reheat in a pan.',
    nut: [300, 7, 32, 16, 4, 2, 630]
  },

  'persian-lentil-rice': {
    d: 'Basmati rice layered with cooked brown lentils, golden onions and warm spices, steamed until tender.',
    meta: 'Persian lentil rice: basmati rice layered with brown lentils, golden onions and warm spices. Six servings, cooked for 45 minutes.',
    kw: ['persian lentil rice', 'adas polo', 'lentil rice with onions', 'persian rice with lentils', 'rice and lentils with caramelised onions'],
    why: 'Why does this rice take so long when most rice dishes are quick? Because it is steamed in layers, and the long cooking is what makes it so soft and fragrant. Adas polo is a Persian dish of rice and lentils, and the onions are fried slowly until deep brown.\n\nParboil the rice first for about 7 minutes in plenty of salted water. The grains should be soft on the outside but still firm in the middle. Drain them. **Do not stir the layers once they go back in the pot.** Mixing breaks the grains and makes the rice sticky.\n\nCook the lentils separately until just tender, drain them and mix with the rice in the pot. Dribble a little oil down the side, cover the pot with a clean cloth under the lid and cook over a low heat. The cloth absorbs steam and keeps the rice dry and fluffy.\n\nServe with the browned onions scattered on top, and a spoonful of yoghurt on the side.',
    ing: [
      '300 g basmati rice',
      '150 g brown lentils, rinsed',
      '1 litre water',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, thinly sliced',
      '1 tsp ground cinnamon',
      '1/2 tsp ground turmeric',
      '1 tsp salt'
    ],
    st: [
      'Boil the lentils in the water for 20 minutes until tender, drain and set aside.',
      'Heat 2 tbsp of the oil in a pan and fry the onions for 15 minutes over a medium heat, stirring often, until deep brown. Stir in the cinnamon and turmeric.',
      'Boil the rice in plenty of salted water for 7 minutes, drain, and mix with the lentils and half the onions.',
      'Put the rice and lentils in a heavy pan with the remaining oil. Cover with a clean cloth and the lid and cook on the lowest heat for 20 minutes. Serve with the rest of the onions on top.'
    ],
    tips: [
      'Parboil the rice, then drain it well.',
      'Do not stir the rice once it is in the pot.',
      'Brown the onions slowly.',
      'Use a cloth under the lid to catch steam.'
    ],
    pair: ['Plain yoghurt', 'Salad Shirazi', 'Grilled chicken', 'Pickles'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [352, 10, 60, 8, 4, 3, 400]
  },

  'turkish-bulgur-pilaf': {
    d: 'Coarse bulgur wheat toasted in butter with onion, tomato paste and stock, cooked until tender and fluffy.',
    meta: 'Turkish bulgur pilaf: bulgur toasted in butter with onion and tomato paste, cooked in stock. Four servings, cooked for 20 minutes.',
    kw: ['turkish bulgur pilaf', 'bulgur pilavi', 'bulgur pilaf with tomato', 'turkish bulgur with tomato paste', 'bulgur wheat pilaf'],
    why: 'Toast the bulgur in the fat. That is the single most useful instruction for any pilaf, and it matters most here, because bulgur that goes straight into the water turns soft and a little gluey, while bulgur coated in butter first cooks into separate, nutty grains.\n\nStart by softening the onion in butter, then stir in the tomato paste and let it darken for a minute. It gives the pilaf a rich colour and a gentle savoury edge. **Add the bulgur and stir for 2 minutes before any liquid goes in.** You should smell a toasted, wheaty aroma.\n\nUse coarse bulgur for pilaf. Fine bulgur is sold for salads and turns to mush with long cooking. The usual ratio is one part bulgur to about two parts of hot stock.\n\nCover and leave the pot undisturbed for 12 minutes, then rest off the heat for 5 minutes before fluffing with a fork.',
    ing: [
      '2 tbsp butter',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp tomato paste',
      '250 g coarse bulgur wheat',
      '500 ml hot vegetable stock',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Melt the butter in a pan and cook the onion for 5 minutes until soft. Stir in the tomato paste for 1 minute.',
      'Add the bulgur and stir for 2 minutes until coated and fragrant.',
      'Pour in the hot stock, salt and pepper and bring to the boil. Cover, lower the heat and cook for 12 minutes.',
      'Rest off the heat, covered, for 5 minutes, then fluff with a fork.'
    ],
    tips: [
      'Toast the bulgur in the butter first.',
      'Use coarse bulgur, not the fine grade.',
      'Do not lift the lid while it steams.',
      'Rest the pilaf before serving.'
    ],
    pair: ['Plain yoghurt', 'Grilled chicken', 'Stuffed peppers', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [311, 9, 53, 7, 8, 2, 720]
  },

  'kuru-fasulye': {
    d: 'Turkish white bean stew simmered with onion, tomato paste, pepper paste and butter until the beans are soft and the broth is thick.',
    meta: 'Kuru fasulye: Turkish white bean stew simmered with onion, tomato paste and butter until thick. Six servings, cooked for 60 minutes.',
    kw: ['kuru fasulye', 'turkish white bean stew', 'turkish white beans', 'kuru fasulye recipe', 'white bean stew with tomato paste'],
    why: 'In the first cold week, when turning the oven on starts to feel like a treat and a pot on the hob does the same job, this is the dish Turkish households reach for. Kuru fasulye means dried beans, and it is served with rice and a plate of pickles.\n\nTinned beans make a quick version, but the stew improves with an hour of simmering. The long cooking lets the beans soften and the sauce thicken. Cook the onion in butter and oil, add the tomato paste and fry it until it darkens, then add the beans and water. **Do not add salt at the start of cooking dried beans.** Tinned beans are already salted, so season at the end.\n\nSimmer gently with the lid slightly ajar. Boiling hard breaks the skins and clouds the broth.\n\nThe stew is ready when the beans are creamy and the broth coats a spoon. Serve with plain rice and pickled peppers.',
    ing: [
      '2 tbsp butter',
      '1 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 tbsp tomato paste',
      '1 tbsp red pepper paste',
      '960 g tinned white beans, drained',
      '700 ml water',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tsp dried mint'
    ],
    st: [
      'Heat the butter and oil in a large pan and cook the onion for 8 minutes until soft.',
      'Stir in the tomato paste and pepper paste and fry for 2 minutes until dark.',
      'Add the beans and water and bring to the boil. Lower the heat, partly cover and simmer for 45 minutes, stirring now and then.',
      'Stir in the salt, pepper and mint. Add water if the stew gets too thick.'
    ],
    tips: [
      'Fry the tomato paste until it darkens.',
      'Simmer gently so the beans stay whole.',
      'Add water if the stew thickens too much.',
      'Taste before salting, as tinned beans are salty.'
    ],
    pair: ['Plain rice', 'Pickled peppers', 'Sliced onion', 'Bread'],
    store: 'Keeps in the fridge for 4 days. Freezes well for up to 3 months.',
    nut: [219, 11, 28, 7, 9, 3, 680]
  },

  'mucver': {
    d: 'Turkish courgette fritters with feta, dill, spring onion and flour, fried until golden and served with yoghurt.',
    meta: 'Mucver: Turkish courgette fritters with feta, dill and spring onion, fried until golden. Four servings, cooked for 15 minutes.',
    kw: ['mucver', 'turkish courgette fritters', 'turkish zucchini fritters', 'courgette and feta fritters', 'mucver with dill'],
    why: 'Squeeze the courgette hard. This is the advice that matters most, and the step most often skipped. Courgettes are mostly water, and any left in the mix turns the batter loose and the fritters limp.\n\nGrate the courgettes on the coarse side of the grater, sprinkle with salt and leave them for 10 minutes. Then wrap them in a clean tea towel and twist until no more liquid comes out. **Keep squeezing until the shreds feel like damp straw.** You will be surprised how much liquid comes out of two courgettes.\n\nFeta, dill and spring onion bring the flavour. Feta is salty, so go gently with the extra salt. A few tablespoons of flour and an egg bind the mix without making it stodgy.\n\nFry spoonfuls in a thin layer of oil over a medium heat. Flatten each fritter slightly and leave it alone until golden underneath. Dill is the usual herb, but parsley or mint are fine substitutes if that is what you have.',
    ing: [
      '2 courgettes, about 400 g, coarsely grated',
      '1/2 tsp salt',
      '100 g feta, crumbled',
      '3 spring onions, about 40 g, sliced',
      '15 g fresh dill, chopped',
      '2 eggs, about 100 g',
      '4 tbsp plain flour',
      '1/4 tsp black pepper',
      '4 tbsp vegetable oil'
    ],
    st: [
      'Toss the courgettes with the salt and leave for 10 minutes. Squeeze very hard in a clean tea towel.',
      'Mix with the feta, spring onions, dill, eggs, flour and pepper.',
      'Heat half the oil in a frying pan over a medium heat. Drop in spoonfuls of the mix and flatten slightly.',
      'Fry for 3 minutes on each side until golden. Repeat with the rest of the oil and mix.'
    ],
    tips: [
      'Squeeze the courgettes until almost dry.',
      'Go easy on the salt, because feta is salty.',
      'Flatten each fritter so it cooks through.',
      'Serve with thick plain yoghurt.'
    ],
    pair: ['Plain yoghurt', 'Green salad', 'Flatbread', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp them.',
    nut: [278, 9, 11, 22, 2, 4, 610]
  },

  'red-lentil-kofte': {
    d: 'Turkish red lentil and bulgur balls with spring onion, tomato paste and cumin, shaped by hand and served cold in lettuce.',
    meta: 'Red lentil kofte: Turkish red lentil and bulgur balls with spring onion and tomato paste, served in lettuce. Eight servings, cooked for 25 minutes.',
    kw: ['red lentil kofte', 'mercimek koftesi', 'turkish lentil balls', 'lentil and bulgur kofte', 'red lentil balls with bulgur'],
    why: 'Why do these hold together with no egg and no flour? Because the red lentils cook down to a sticky paste, and the bulgur swells in the hot liquid, so that when the mixture cools it can be shaped like dough.\n\nSimmer the lentils in water until they collapse, which takes about 15 minutes. Stir in the fine bulgur, take the pan off the heat and cover it. The bulgur soaks up the remaining water in 10 minutes. **Add the bulgur off the heat.** Cooked on the hob it turns gluey and sets hard.\n\nIn a separate pan, soften onion in oil, stir in tomato paste and chilli flakes, and mix it all into the lentils. Season boldly with cumin, salt and lemon juice. The mixture should taste slightly over-seasoned, since it mellows as it cools.\n\nLet it cool until you can handle it, then shape into small ovals with damp hands. Serve cold on lettuce leaves with extra lemon.',
    ing: [
      '200 g red lentils, rinsed',
      '500 ml water',
      '150 g fine bulgur',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '2 tbsp tomato paste',
      '1 tsp ground cumin',
      '1/2 tsp chilli flakes',
      '1 tsp salt',
      '2 tbsp lemon juice',
      '3 spring onions, about 40 g, sliced',
      '15 g fresh parsley, chopped',
      '1 round lettuce, about 200 g'
    ],
    st: [
      'Simmer the lentils in the water for 15 minutes, stirring, until soft and thick.',
      'Stir in the bulgur, take the pan off the heat, cover and leave for 10 minutes.',
      'Heat the oil, cook the onion for 5 minutes, stir in the tomato paste, cumin and chilli flakes and add to the lentils with the salt and lemon juice.',
      'Cool until you can handle it. Mix in the spring onions and parsley and shape into small ovals with damp hands. Serve on lettuce leaves.'
    ],
    tips: [
      'Add the bulgur off the heat.',
      'Season boldly, as the flavour mellows as it cools.',
      'Wet your hands to shape the kofte.',
      'Serve with plenty of lemon.'
    ],
    pair: ['Lettuce leaves', 'Lemon wedges', 'Pomegranate molasses', 'Flatbread'],
    store: 'Keeps in the fridge for 3 days. Serve cold.',
    nut: [204, 9, 33, 4, 6, 2, 310]
  },

  'greek-fried-potatoes': {
    d: 'Potatoes cut into thick wedges and fried in olive oil until golden, then seasoned with salt and dried oregano.',
    meta: 'Greek fried potatoes: thick potato wedges fried in olive oil until golden and seasoned with oregano. Four servings, cooked for 25 minutes.',
    kw: ['greek fried potatoes', 'patates tiganites', 'greek potatoes fried in olive oil', 'greek potato chips with oregano', 'fried potatoes with oregano'],
    why: 'Why do Greek fried potatoes taste so much better than ordinary chips? Because they are cooked in olive oil, in a pan, over a medium heat, so the outsides turn golden and slightly crisp while the middle stays soft and almost creamy.\n\nCut thick wedges, about 2 cm across. Thin chips dry out, and chunks cook unevenly. Rinse the wedges to wash off surface starch, then dry them thoroughly. **Dry potatoes fry; wet potatoes steam.** Spend a minute with a clean tea towel.\n\nUse a generous amount of oil, about 1 cm deep in a wide pan, and add the potatoes when the oil is warm but not smoking. Turn them only once or twice, so a crust can form.\n\nSalt and oregano go on straight from the pan, while they are hot. Many cooks add a squeeze of lemon at the table. Feta crumbled over the top turns them into a meal.',
    ing: [
      '900 g potatoes, cut into thick wedges',
      '150 ml olive oil',
      '1 tsp salt',
      '1 tsp dried oregano',
      '1 lemon, about 80 g, cut into wedges'
    ],
    st: [
      'Rinse the potato wedges, then dry them thoroughly in a clean tea towel.',
      'Heat the oil in a wide, deep frying pan over a medium heat until a wedge sizzles gently.',
      'Add the potatoes in a single layer and fry for 20 minutes, turning only once or twice, until deep golden and soft in the middle.',
      'Lift out onto kitchen paper, season with the salt and oregano and serve with the lemon wedges.'
    ],
    tips: [
      'Dry the potatoes thoroughly before frying.',
      'Fry in a single layer, or in two batches.',
      'Turn them only once or twice.',
      'Season while they are hot.'
    ],
    pair: ['Feta', 'Fried eggs', 'Grilled chicken', 'Tomato salad'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them.',
    nut: [495, 5, 40, 35, 6, 2, 600]
  },

  'spanakorizo': {
    d: 'A Greek one-pot dish of rice and spinach cooked with onion, spring onion, dill and lemon.',
    meta: 'Spanakorizo: Greek one-pot spinach rice with onion, spring onion, dill and lemon. Four servings, cooked for 30 minutes.',
    kw: ['spanakorizo', 'greek spinach rice', 'spinach and rice greek style', 'spanakorizo with dill and lemon', 'greek rice with spinach'],
    why: 'It looks like a pilaf and cooks like a stew, which is why a wide pan with a lid works better than a tall pot. Spanakorizo is a classic Greek dish of spinach and rice, cooked together in olive oil with onion, dill and lemon, and eaten during Lent or on any quiet weeknight.\n\nSoften the onions and spring onions in olive oil. The oil is generous, and it is part of the flavour. Add the spinach in handfuls so it wilts without crowding the pan. **Do not drain the spinach liquid.** It adds flavour to the rice and some of the water the rice needs.\n\nThe rice goes in raw, with hot water and a little tomato paste for colour. Cook gently, covered, until the rice is tender and the liquid is absorbed. The dish should be moist but not soupy.\n\nDill and lemon juice stirred in at the end give it a bright finish. Serve warm or at room temperature with feta.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '4 spring onions, about 60 g, sliced',
      '500 g fresh spinach',
      '1 tbsp tomato paste',
      '200 g long grain rice',
      '450 ml hot water',
      '1/2 tsp salt',
      '15 g fresh dill, chopped',
      '3 tbsp lemon juice'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion and spring onions for 6 minutes until soft.',
      'Add the spinach in handfuls, stirring until it wilts, about 4 minutes.',
      'Stir in the tomato paste and rice, then the hot water and salt. Bring to the boil.',
      'Cover, lower the heat and cook for 15 minutes until the rice is tender and the liquid absorbed. Stir in the dill and lemon juice.'
    ],
    tips: [
      'Add the spinach gradually.',
      'Keep the spinach liquid in the pan.',
      'Cook over a low heat so the rice does not catch.',
      'Add the lemon at the end so it stays fresh.'
    ],
    pair: ['Feta', 'Olives', 'Crusty bread', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Good warm or cold.',
    nut: [371, 8, 51, 15, 5, 3, 410]
  },

  'fasolakia': {
    d: 'Greek green beans braised slowly in olive oil with tomatoes, onion and potatoes until soft and sweet.',
    meta: 'Fasolakia: Greek green beans braised in olive oil with tomatoes, onion and potatoes. Four servings, cooked for 45 minutes.',
    kw: ['fasolakia', 'fasolakia lathera', 'greek green beans in tomato sauce', 'greek braised green beans', 'green beans with potatoes and tomatoes'],
    why: 'Cook them far longer than you think you should. That is the opposite of most green bean advice, and the key to fasolakia, where the beans are braised until they are silky and sweet, not crisp.\n\nThe Greek dish is a stew of green beans, potatoes, tomatoes and onion, with olive oil in generous amounts. The oil is not a garnish; it carries the flavour and gives the sauce its body. **Do not trim the oil.** The dish is traditionally called lathera, meaning cooked in oil.\n\nStart with the onion and garlic, add the tomatoes and a little water, then the beans and potatoes. Simmer gently, with the lid slightly open so the sauce thickens. After 40 minutes the beans should collapse when pressed and the potatoes should be soft enough to break.\n\nServe warm, not hot, with crumbled feta and bread. It is even better the next day. Flat or round green beans both work, and older, larger beans suit the long cooking best.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, sliced',
      '400 g tinned chopped tomatoes',
      '300 ml water',
      '500 g green beans, trimmed',
      '400 g potatoes, peeled and cut into chunks',
      '1/2 tsp salt',
      '1/2 tsp dried oregano',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion for 6 minutes. Add the garlic for 1 minute.',
      'Add the tomatoes and water and bring to a simmer.',
      'Add the beans, potatoes, salt and oregano. Cover and cook gently for 30 minutes.',
      'Uncover and cook for 10 minutes more until the sauce is thick and the beans are very soft. Stir in the parsley.'
    ],
    tips: [
      'Cook the beans until completely soft.',
      'Use plenty of olive oil.',
      'Uncover the pan at the end to thicken the sauce.',
      'Let the dish cool a little before serving.'
    ],
    pair: ['Feta', 'Crusty bread', 'Olives', 'Grilled fish'],
    store: 'Keeps in the fridge for 4 days. Good warm or cold.',
    nut: [286, 6, 34, 14, 9, 9, 320]
  },

  'revithada': {
    d: 'Greek chickpeas slow-baked with onion, olive oil, bay and lemon until soft and creamy in a rich broth.',
    meta: 'Revithada: Greek chickpeas slow-baked with onion, olive oil, bay and lemon until creamy. Six servings, cooked for 60 minutes.',
    kw: ['revithada', 'greek baked chickpeas', 'greek chickpea stew', 'revithia in the oven', 'chickpeas baked with lemon and olive oil'],
    why: 'Most home versions come out watery or dry, and the fix is to bake the chickpeas covered and uncover them for the last stretch. A covered dish traps steam so the chickpeas stay moist, while an uncovered finish lets the broth thicken and the top brown.\n\nTinned chickpeas make this quick, and the long, slow bake does the rest. Drain them, tip them into a deep dish with the onion, oil, bay and water, and put them in the oven. **Add the lemon at the end.** Acid added early can keep chickpeas firm; lemon at the end brightens the dish without slowing the cooking.\n\nOlive oil is important here, about 4 tablespoons for six servings. It should float on top and enrich the broth, and it is part of what makes the dish taste Greek.\n\nThe finished revithada has soft, creamy chickpeas in a thick, golden broth. Serve warm with bread and a salad.',
    ing: [
      '960 g tinned chickpeas, drained',
      '2 onions, about 300 g, sliced',
      '4 tbsp olive oil',
      '2 bay leaves',
      '1 tsp dried oregano',
      '500 ml water',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '3 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan).',
      'Put the chickpeas, onions, oil, bay, oregano, water, salt and pepper in a deep ovenproof dish and stir.',
      'Cover with foil and bake for 40 minutes.',
      'Uncover and bake for 20 minutes more until the broth is thick and the top is golden. Stir in the lemon juice.'
    ],
    tips: [
      'Keep the dish covered for the first part.',
      'Stir in the lemon at the end.',
      'Use good olive oil; it is a main flavour.',
      'Add hot water if the broth cooks away too fast.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Feta', 'Olives'],
    store: 'Keeps in the fridge for 4 days. Good warm or cold.',
    nut: [297, 12, 33, 13, 9, 7, 680]
  }
};
