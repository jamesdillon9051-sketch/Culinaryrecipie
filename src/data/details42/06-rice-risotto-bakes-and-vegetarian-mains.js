'use strict';

/**
 * Volume forty-two — rice dishes, risottos, bakes and vegetarian mains.
 *
 * Pilau and mujaddara, two risottos, stuffed squash, two pasta bakes, a
 * roasted vegetable tart, two Wellingtons, buffalo cauliflower, two
 * burgers, sweet potato gnocchi and air fryer vegetables. Times are the
 * recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'vegetable-pilau': {
    d: 'Basmati rice cooked with whole spices, onion, carrot and peas in a single covered pan.',
    meta: 'Vegetable pilau: basmati rice cooked with whole spices, onion, carrot and peas in one pan. Four servings, cooked for 25 minutes.',
    kw: ['vegetable pilau', 'vegetable pilau rice', 'indian vegetable pilau', 'vegetable pilau with whole spices', 'pilau rice with vegetables'],
    why: 'Wash the rice first. That is the quick tip for any pilau, and the reason the grains stay separate instead of clumping into a block.\n\nRinse the basmati under cold water, swirling with your fingers, until the water runs nearly clear. This removes the surface starch. Soak it for 10 minutes if you have time, though it is not essential. **Fry the whole spices in the oil first.** The cinnamon, cardamom, cloves and cumin release their scent into the fat, and the whole rice absorbs it.\n\nSoften the onion with the spices for 6 minutes until golden, add the carrot and rice, and stir for 1 minute. Pour in the water and salt, bring to the boil, then reduce to the lowest heat, cover and cook for 12 minutes.\n\nAdd the peas for the last 3 minutes. Take the pan off the heat and leave it covered for 5 minutes, then fluff with a fork. Do not lift the lid during cooking, since the steam does the work. If your hob runs hot, use the lowest setting.',
    ing: [
      '250 g basmati rice',
      '2 tbsp sunflower oil',
      '1 onion, about 150 g, sliced',
      '1 cinnamon stick, about 3 g',
      '4 cardamom pods, about 2 g',
      '4 whole cloves, about 1 g',
      '1 tsp cumin seeds',
      '1 carrot, about 80 g, diced',
      '150 g frozen peas',
      '500 ml water',
      '1 tsp salt'
    ],
    st: [
      'Rinse the rice under cold water until nearly clear and drain.',
      'Fry the cinnamon, cardamom, cloves and cumin in the oil for 30 seconds, then the onion for 6 minutes until golden.',
      'Add the carrot and rice and stir for 1 minute. Pour in the water, add the salt and bring to the boil.',
      'Cover, reduce to the lowest heat and cook for 12 minutes, adding the peas for the last 3 minutes. Rest covered off the heat for 5 minutes, then fluff.'
    ],
    tips: [
      'Rinse the rice.',
      'Fry the whole spices first.',
      'Do not lift the lid.',
      'If your hob runs hot, use the lowest setting.'
    ],
    pair: ['Dal', 'Natural yoghurt', 'Mango chutney', 'Poppadoms'],
    store: 'Keeps in the fridge for 2 days. Cool quickly and reheat until steaming hot.',
    nut: [348, 7, 62, 8, 5, 5, 610]
  },

  'mujaddara': {
    d: 'Lentils and rice cooked together with cumin and topped with deeply browned onions.',
    meta: 'Mujaddara: lentils and rice cooked together with cumin and topped with deeply browned onions. Four servings, cooked for 40 minutes.',
    kw: ['mujaddara', 'lebanese mujaddara', 'lentils and rice with crispy onions', 'middle eastern lentil and rice', 'mujadara'],
    why: 'Lentils, rice, onions, cumin: four ingredients that you probably already own, and a dish that many cooks regard as the best thing they can make from a bag of pulses.\n\nThe onions are what make it. Slice three large onions thinly and fry them in the oil over medium heat for about 20 minutes, until they are dark brown and crisp at the edges. **Do not rush them.** High heat burns the outsides and leaves the insides raw, and the bitter taste spoils the dish.\n\nWhile they cook, simmer the lentils in the water with the cumin for 15 minutes, until they are half cooked. Add the rice and salt, cover, and cook for 15 minutes more, until both are tender and the water has been absorbed.\n\nTake out half the onions for the top and stir the rest through the lentils and rice. Cover and rest for 5 minutes, then pile onto a plate and scatter with the reserved onions. Serve with yoghurt and a simple salad. If your hob runs hot, keep the heat low during the rice stage.',
    ing: [
      '200 g green or brown lentils, rinsed',
      '150 g long-grain rice, rinsed',
      '3 onions, about 450 g, thinly sliced',
      '4 tbsp sunflower oil',
      '1 tsp ground cumin',
      '700 ml water',
      '1 tsp salt'
    ],
    st: [
      'Fry the onions in the oil over medium heat for 20 minutes, stirring often, until dark brown and crisp at the edges.',
      'Meanwhile simmer the lentils with the cumin in the water for 15 minutes.',
      'Add the rice and salt, cover and cook on low heat for 15 minutes until both are tender and the water is absorbed.',
      'Stir half the onions through the lentils and rice, rest for 5 minutes and top with the rest.'
    ],
    tips: [
      'Cook the onions slowly.',
      'Stir often.',
      'If your hob runs hot, keep the heat low.',
      'Rest before serving.'
    ],
    pair: ['Natural yoghurt', 'Cucumber salad', 'Pickled turnips', 'Flatbread'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [483, 16, 71, 15, 8, 6, 600]
  },

  'pea-risotto': {
    d: 'Creamy Arborio risotto with white wine, parmesan and peas stirred in at the end with a little mint.',
    meta: 'Pea risotto: creamy Arborio risotto with white wine, parmesan, peas and mint. Four servings, cooked for 30 minutes.',
    kw: ['pea risotto', 'creamy pea risotto', 'pea and parmesan risotto', 'risotto with peas and mint', 'spring pea risotto'],
    why: 'Does a risotto really need constant stirring? It needs frequent stirring, because the movement rubs starch off the rice and makes the dish creamy. You can step away for a minute to chop, but not for ten.\n\nKeep the stock hot in a pan beside the risotto, and add it a ladle at a time. Cold stock stops the cooking each time it goes in. Toast the rice in the butter for 2 minutes, until the edges turn translucent, then add the wine and let it bubble away. **Add stock only when the last ladle has been absorbed.** Too much liquid at once makes soup, not risotto.\n\nAfter about 18 minutes the rice should be tender with a slight bite at the centre. Stir in the peas for the last 3 minutes, so that they stay bright.\n\nOff the heat, beat in the butter and parmesan vigorously. This is called mantecare, and it gives the glossy, creamy finish. Fold in the mint, cover and rest for 2 minutes, then serve in warm bowls. If your hob runs hot, keep the heat at a lively simmer, not a boil.',
    ing: [
      '300 g Arborio rice',
      '1 onion, about 150 g, finely chopped',
      '30 g butter',
      '150 ml dry white wine',
      '1 litre vegetable stock, hot',
      '300 g frozen peas',
      '50 g parmesan, grated',
      '20 g butter to finish',
      '2 tbsp chopped mint',
      '1/2 tsp salt'
    ],
    st: [
      'Soften the onion in the 30 g butter for 5 minutes. Add the rice and stir for 2 minutes until translucent at the edges.',
      'Add the wine and stir until absorbed. Add the hot stock a ladle at a time, stirring, for about 18 minutes until the rice is creamy with a slight bite.',
      'Stir in the peas for the last 3 minutes.',
      'Off the heat, beat in the 20 g butter, the parmesan, mint and salt. Cover and rest for 2 minutes.'
    ],
    tips: [
      'Keep the stock hot.',
      'Add it a ladle at a time.',
      'If your hob runs hot, keep a lively simmer.',
      'Beat in the butter and cheese off the heat.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Crusty bread', 'Grilled prawns'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats with a splash of stock.',
    nut: [511, 17, 77, 15, 6, 6, 1320]
  },

  'lemon-risotto': {
    d: 'Creamy Arborio risotto finished with lemon zest and juice, parmesan and parsley.',
    meta: 'Lemon risotto: creamy Arborio risotto finished with lemon zest and juice, parmesan and parsley. Four servings, cooked for 30 minutes.',
    kw: ['lemon risotto', 'creamy lemon risotto', 'lemon and parmesan risotto', 'risotto al limone', 'lemon risotto with parsley'],
    why: 'Short and sharp, like the flavour: that is a lemon risotto. The rice stays rich and creamy and the lemon cuts through it.\n\nThe lemon goes in at the end, in two forms. The zest brings the aroma, and the juice brings the sharpness. **Add the juice off the heat.** Cooked lemon juice loses its freshness and can make the risotto taste flat, while a late addition tastes bright.\n\nToast the rice in the butter and oil for 2 minutes, add the wine, and then the hot stock a ladle at a time, stirring often. After about 18 minutes the rice should be creamy and just tender. If it is stiff, add a last splash of stock.\n\nTake the pan off the heat and beat in the butter, the parmesan, the zest and half the juice. Taste, and add more juice a spoonful at a time until the balance is right, as lemons vary. Cover for 2 minutes and serve with parsley and extra parmesan. If your hob runs hot, keep the heat to a lively simmer.',
    ing: [
      '300 g Arborio rice',
      '1 onion, about 150 g, finely chopped',
      '20 g butter',
      '1 tbsp olive oil',
      '120 ml dry white wine',
      '1 litre vegetable stock, hot',
      '2 lemons, zest of 2 and juice of 1, about 30 ml',
      '50 g parmesan, grated',
      '30 g butter to finish',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Soften the onion in the 20 g butter and oil for 5 minutes. Add the rice and stir for 2 minutes.',
      'Add the wine until absorbed, then the hot stock a ladle at a time, stirring often, for about 18 minutes.',
      'Off the heat, beat in the 30 g butter, the parmesan, the zest and half the lemon juice. Taste and add more juice if needed.',
      'Cover for 2 minutes and serve scattered with the parsley.'
    ],
    tips: [
      'Add the juice off the heat.',
      'Taste before adding more lemon.',
      'If your hob runs hot, keep a lively simmer.',
      'Serve in warm bowls.'
    ],
    pair: ['Green salad', 'Grilled fish', 'Dry white wine', 'Roasted asparagus'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [482, 13, 67, 18, 2, 2, 1020]
  },

  'stuffed-butternut-squash': {
    d: 'Roasted butternut squash halves filled with quinoa, spinach, feta, dried cranberries and pecans.',
    meta: 'Stuffed butternut squash: roasted squash halves filled with quinoa, spinach, feta, cranberries and pecans. Four servings, cooked for 60 minutes.',
    kw: ['stuffed butternut squash', 'quinoa stuffed butternut squash', 'butternut squash stuffed with feta', 'roasted stuffed butternut squash', 'vegetarian stuffed squash'],
    why: 'How do you know when a squash is done? A knife slides in with no resistance and the cut flesh is deep gold at the edges. That is the whole test, and it takes about 45 minutes.\n\nHalve the squash lengthways, scoop out the seeds, and score the flesh in a criss-cross pattern without cutting through the skin. Brush with oil, season, and roast cut-side down at 200°C. **Turn them over for the last 10 minutes.** The flesh caramelises on the tray and the cavity dries out.\n\nWhile the squash roasts, cook the quinoa in 200 ml of water for 15 minutes, and wilt the spinach with the onion in a pan. Mix together with the feta, cranberries and pecans. If your oven runs hot, check the squash at 38 minutes.\n\nPile the filling into the cavities, pressing down gently, and return to the oven for 10 minutes to warm through. The squash is both bowl and side dish. Serve with a green salad.',
    ing: [
      '1 butternut squash, about 1 kg, halved and seeded',
      '2 tbsp olive oil',
      '75 g quinoa',
      '200 ml water',
      '1 onion, about 100 g, chopped',
      '120 g spinach',
      '100 g feta, crumbled',
      '40 g dried cranberries',
      '40 g pecans, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Score the squash flesh, brush with half the oil and the salt and roast cut-side down for 35 minutes. Turn over and roast for 10 minutes more.',
      'Rinse the quinoa and simmer it in the water, covered, for 15 minutes.',
      'Cook the onion in the remaining oil for 5 minutes. Wilt the spinach in the pan for 2 minutes.',
      'Mix the quinoa, onion, spinach, feta, cranberries and pecans. Pile into the squash cavities and bake for 10 minutes.'
    ],
    tips: [
      'Score the flesh.',
      'Roast cut-side down first.',
      'If your oven runs hot, check at 38 minutes.',
      'Do not overfill the cavities.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Crusty bread', 'Cranberry sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 15 minutes.',
    nut: [457, 11, 56, 21, 9, 15, 610]
  },

  'vegetable-lasagne': {
    d: 'Layers of pasta, roasted courgette, pepper and mushroom in tomato sauce and white sauce, topped with mozzarella and parmesan.',
    meta: 'Vegetable lasagne: pasta layered with courgette, pepper and mushroom in tomato and white sauce. Eight servings, baked for 50 minutes.',
    kw: ['vegetable lasagne', 'roasted vegetable lasagne', 'lasagne with white sauce and vegetables', 'vegetable lasagna', 'cheesy vegetable lasagne'],
    why: 'It is a dish for a table of eight on a Sunday, or for a freezer on a Monday. A vegetable lasagne has a reputation for being watery, and the cause is always the vegetables.\n\nCut the courgettes, peppers and mushrooms into 1 cm pieces and fry them in a hot pan for 10 minutes until they have lost their water and begun to colour. **Cook the vegetables first, never raw.** Raw courgette and mushroom release a surprising amount of liquid in the oven, and the lasagne collapses on the plate.\n\nStir the vegetables into the tomato sauce. Make the white sauce in a separate pan, with butter, flour and milk, stirring until it coats a spoon. Layer the sheets with the vegetable sauce and white sauce, finishing with a layer of white sauce and the cheeses.\n\nBake at 180°C for 40 minutes, until the top is golden and the sauce bubbles at the edges. If your oven runs hot, check at 32 minutes. Rest for 15 minutes before cutting, so that the layers set.',
    ing: [
      '200 g lasagne sheets',
      '2 courgettes, about 400 g, diced',
      '2 red peppers, about 300 g, diced',
      '250 g mushrooms, diced',
      '2 tbsp olive oil',
      '700 g tomato pasta sauce',
      '50 g butter',
      '50 g plain flour',
      '600 ml milk',
      '150 g mozzarella, grated',
      '40 g parmesan, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C. Fry the courgettes, peppers and mushrooms in the oil in a large pan for 10 minutes until the water has gone. Stir into the tomato sauce.',
      'Melt the butter, stir in the flour for 1 minute, add the milk gradually and stir for 5 minutes until thick. Season with the salt.',
      'In a large dish layer the vegetable sauce, lasagne sheets and white sauce three times, ending with white sauce. Top with the mozzarella and parmesan.',
      'Bake for 40 minutes until golden and bubbling. Rest for 15 minutes before cutting.'
    ],
    tips: [
      'Cook the vegetables first.',
      'Make the white sauce thick.',
      'If your oven runs hot, check at 32 minutes.',
      'Rest before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine', 'Rocket'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [366, 15, 36, 18, 4, 10, 380]
  },

  'spinach-and-ricotta-cannelloni': {
    d: 'Pasta tubes filled with spinach, ricotta and parmesan, baked in tomato sauce under melted mozzarella.',
    meta: 'Spinach and ricotta cannelloni: pasta tubes filled with spinach and ricotta, baked in tomato sauce. Six servings, baked for 40 minutes.',
    kw: ['spinach and ricotta cannelloni', 'ricotta and spinach cannelloni', 'baked spinach cannelloni', 'cannelloni with ricotta', 'cannelloni with tomato sauce'],
    why: 'Short, sharp advice: use a piping bag for the filling. Spooning ricotta into a narrow tube is slow, and a bag with the corner cut off does it in a few seconds.\n\nWilt the spinach in a pan, then squeeze it out in a clean tea towel until it is very dry. Wet spinach is the commonest reason that cannelloni turn out soggy. **Squeeze it until no more water comes out.** Chop it fine and mix it with the ricotta, egg, parmesan and a grating of nutmeg.\n\nUse dried cannelloni tubes straight from the packet. They soften in the sauce as they bake, and there is no need to precook them. Fill each one, lay them in a single layer in a baking dish and cover them completely with tomato sauce, since any exposed tube stays hard.\n\nScatter over the mozzarella and cover with foil. Bake at 180°C for 30 minutes, then uncover and bake for 10 minutes more, until the cheese is golden. If your oven runs hot, check at 32 minutes in all.',
    ing: [
      '18 dried cannelloni tubes, about 200 g',
      '300 g spinach',
      '500 g ricotta',
      '1 egg, about 50 g',
      '40 g parmesan, grated',
      '1/4 tsp ground nutmeg',
      '1/2 tsp salt',
      '700 g tomato pasta sauce',
      '150 g mozzarella, grated'
    ],
    st: [
      'Heat the oven to 180°C. Wilt the spinach in a dry pan for 3 minutes, cool and squeeze very dry in a tea towel. Chop finely.',
      'Mix the spinach with the ricotta, egg, parmesan, nutmeg and salt. Pipe or spoon into the cannelloni tubes.',
      'Spread a third of the sauce in a baking dish, lay the tubes in a single layer and cover with the rest of the sauce. Scatter with the mozzarella.',
      'Cover with foil and bake for 30 minutes. Uncover and bake for 10 minutes more until golden.'
    ],
    tips: [
      'Squeeze the spinach very dry.',
      'Use a piping bag for the filling.',
      'Cover all the tubes with sauce.',
      'If your oven runs hot, check at 32 minutes in all.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine', 'Rocket'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [420, 25, 35, 20, 4, 5, 570]
  },

  'roasted-vegetable-tart': {
    d: 'A puff pastry tart spread with pesto and topped with courgette, pepper, red onion, tomatoes and goat cheese.',
    meta: 'Roasted vegetable tart: puff pastry spread with pesto and topped with courgette, pepper, onion, tomatoes and goat cheese. Six servings, baked for 40 minutes.',
    kw: ['roasted vegetable tart', 'puff pastry vegetable tart', 'mediterranean vegetable tart', 'roasted vegetable and goat cheese tart', 'vegetable tart with pesto'],
    why: 'It looks like a pizza and eats like a tart, and it is a way of using the vegetables that are left at the end of the week. The pastry is bought, and the oven does the rest.\n\nCut the vegetables into thin slices, about 5 mm, so that they cook in the time that the pastry takes. Thick pieces stay raw in the middle. Spread the pesto over the pastry, leaving a 2 cm border, and arrange the vegetables in rows. **Do not pile the vegetables on top of each other.** One layer lets them roast, and a pile makes them steam.\n\nScore the border with a knife, brush it with beaten egg, and prick the middle with a fork so that the base does not puff up. Bake at 200°C for 35 minutes, until the border is deep gold and the vegetables are tinged at the edges. If your oven runs hot, check at 28 minutes.\n\nCrumble the goat cheese over the tart for the last 5 minutes. Cool for 5 minutes before slicing, and serve warm or at room temperature with a green salad.',
    ing: [
      '320 g ready-rolled puff pastry',
      '2 tbsp green pesto, about 30 g',
      '1 courgette, about 200 g, thinly sliced',
      '1 red pepper, about 150 g, thinly sliced',
      '1 red onion, about 120 g, thinly sliced',
      '200 g cherry tomatoes, halved',
      '1 tbsp olive oil',
      '80 g goat cheese',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Unroll the pastry onto a lined tray, score a border 2 cm in from the edge and prick the middle with a fork. Brush the border with egg.',
      'Spread the pesto inside the border and arrange the courgette, pepper, onion and tomatoes in rows. Drizzle with the oil.',
      'Bake for 30 minutes until the border is deep gold. Crumble over the goat cheese and bake for 5 minutes more.',
      'Cool for 5 minutes before slicing.'
    ],
    tips: [
      'Slice the vegetables thin.',
      'Keep them in one layer.',
      'If your oven runs hot, check at 28 minutes.',
      'Add the cheese late.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Tomato soup', 'Rocket'],
    store: 'Keeps in the fridge for 2 days. Reheat in a 180°C oven for 10 minutes.',
    nut: [339, 8, 25, 23, 3, 5, 460]
  },

  'vegetable-wellington': {
    d: 'Roasted butternut squash, mushrooms, spinach and chestnuts wrapped in puff pastry and baked until golden.',
    meta: 'Vegetable Wellington: roasted butternut squash, mushrooms, spinach and chestnuts in puff pastry. Six servings, cooked for 40 minutes.',
    kw: ['vegetable wellington', 'vegetarian wellington', 'butternut squash wellington', 'christmas vegetable wellington', 'chestnut and squash wellington'],
    why: 'A Wellington is a dish for an occasion, and a vegetable one is the centrepiece for a table where not everyone eats meat. It is also one of the hardest vegetarian dishes to get right, because the filling is wet and the pastry is delicate.\n\nCook the squash and the mushrooms until dry before they go anywhere near the pastry. Roast the squash cubes at 200°C for 20 minutes and fry the mushrooms with the onion for 10 minutes until the pan is dry. **Squeeze the wilted spinach very dry.** Any moisture left in the filling turns the base of the pastry to paste.\n\nMix the filling with the chestnuts and thyme, and let it cool completely. A warm filling melts the pastry. Roll the pastry out, pile the filling down the middle, brush the edges with egg, and fold over. Seal, trim, and score the top.\n\nBake at 200°C for 30 minutes on a hot tray, until deep gold. If your oven runs hot, check at 24 minutes. Rest for 10 minutes before slicing with a serrated knife.',
    ing: [
      '500 g ready-rolled puff pastry',
      '400 g butternut squash, diced',
      '2 tbsp olive oil',
      '200 g mushrooms, chopped',
      '1 onion, about 150 g, chopped',
      '150 g spinach',
      '100 g cooked chestnuts, chopped',
      '1 tbsp thyme leaves',
      '1/2 tsp salt',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Roast the squash with half the oil for 20 minutes.',
      'Fry the mushrooms and onion in the remaining oil for 10 minutes until dry. Wilt the spinach for 2 minutes, then squeeze it very dry and chop.',
      'Mix the squash, mushrooms, spinach, chestnuts, thyme and salt. Cool completely.',
      'Pile the filling down the middle of the pastry on a lined tray, brush the edges with egg, fold over, seal and score the top. Brush with egg.',
      'Bake on a hot tray for 30 minutes until deep gold. Rest for 10 minutes.'
    ],
    tips: [
      'Cook the filling until dry.',
      'Cool it completely.',
      'If your oven runs hot, check at 24 minutes.',
      'Slice with a serrated knife.'
    ],
    pair: ['Roast potatoes', 'Cranberry sauce', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [479, 9, 50, 27, 6, 8, 730]
  },

  'mushroom-wellington': {
    d: 'A savoury mushroom, chestnut and thyme filling wrapped in puff pastry and baked until deep gold.',
    meta: 'Mushroom Wellington: a savoury mushroom, chestnut and thyme filling in puff pastry. Six servings, cooked for 40 minutes.',
    kw: ['mushroom wellington', 'vegetarian mushroom wellington', 'chestnut mushroom wellington', 'mushroom and chestnut wellington', 'christmas mushroom wellington'],
    why: 'Short and sharp: dry the mushrooms. That is most of the recipe, and the part people skip, then wonder why the pastry is pale and wet.\n\nChop the mushrooms very fine, nearly to a paste, and cook them in a dry pan over high heat for 10 minutes, with the shallots and garlic. They release a great deal of liquid, which evaporates, and the mushrooms darken and shrink to a thick, savoury mixture. This is called a duxelles. **Cook until the pan is dry and the mixture holds a trail.** A wet filling soaks into the pastry.\n\nStir in the breadcrumbs, chestnuts, thyme and soy sauce, which gives depth. Cool completely, since warm filling melts the pastry. Shape into a log on the pastry, brush the edge with egg, fold over, and seal.\n\nBake at 200°C for 30 minutes on a hot tray, until the pastry is deep gold. If your oven runs hot, check at 24 minutes. Rest for 10 minutes before slicing, so the filling sets.',
    ing: [
      '500 g chestnut mushrooms, very finely chopped',
      '2 shallots, about 100 g, finely chopped',
      '3 cloves garlic, crushed',
      '1 tbsp olive oil',
      '100 g cooked chestnuts, chopped',
      '60 g breadcrumbs',
      '1 tbsp thyme leaves',
      '2 tbsp soy sauce',
      '500 g ready-rolled puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Cook the mushrooms, shallots and garlic in the oil in a wide pan over high heat for 10 minutes until the pan is dry and the mixture is thick.',
      'Stir in the chestnuts, breadcrumbs, thyme and soy sauce. Cool completely.',
      'Shape the filling into a log down the middle of the pastry on a lined tray. Brush the edges with egg, fold over, seal and score the top. Brush with egg.',
      'Bake on a hot tray for 30 minutes until deep gold. Rest for 10 minutes.'
    ],
    tips: [
      'Chop the mushrooms finely.',
      'Cook until the pan is dry.',
      'Cool the filling.',
      'If your oven runs hot, check at 24 minutes.'
    ],
    pair: ['Roast potatoes', 'Red wine gravy', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [473, 11, 51, 25, 5, 8, 880]
  },

  'buffalo-cauliflower': {
    d: 'Battered cauliflower florets baked until crisp and tossed in hot sauce and butter, served with a cool dip.',
    meta: 'Buffalo cauliflower: battered cauliflower florets baked until crisp and tossed in hot sauce and butter. Four servings, baked for 25 minutes.',
    kw: ['buffalo cauliflower', 'baked buffalo cauliflower', 'buffalo cauliflower bites', 'crispy buffalo cauliflower', 'buffalo cauliflower wings'],
    why: 'Buffalo sauce was invented for chicken wings, and cauliflower takes it surprisingly well. The vegetable has a mild flavour and a firm texture that holds up under a thick, hot, buttery coating.\n\nThe batter is flour, water and garlic powder, and it should be thin, like single cream. Toss the florets in it until each is thinly coated, and shake off the excess. **A thick batter makes a heavy crust that goes soft.** Thin is crisp.\n\nSpread the florets in a single layer on a lined tray and bake at 220°C for 20 minutes, turning once. If your oven runs hot, check at 16 minutes. They should be golden and dry before the sauce goes on.\n\nWarm the hot sauce and butter together until smooth, toss the hot florets in it and return them to the oven for 5 minutes, so that the sauce sets into a sticky glaze. Serve at once with ranch or blue cheese dressing, and celery sticks for the bite.',
    ing: [
      '600 g cauliflower florets',
      '60 g plain flour',
      '120 ml water',
      '1 tsp garlic powder',
      '1/2 tsp salt',
      '120 ml hot sauce',
      '30 g butter',
      '100 g ranch dressing',
      '2 sticks celery, about 80 g'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Whisk the flour, water, garlic powder and salt to a thin batter. Toss the florets in it and shake off the excess.',
      'Spread in a single layer and bake for 20 minutes, turning once, until golden.',
      'Warm the hot sauce and butter until smooth. Toss the hot florets in it and return to the oven for 5 minutes.',
      'Serve with the ranch dressing and celery sticks.'
    ],
    tips: [
      'Keep the batter thin.',
      'Bake until dry before saucing.',
      'If your oven runs hot, check at 16 minutes.',
      'Serve at once.'
    ],
    pair: ['Ranch dressing', 'Celery sticks', 'Cold lager', 'Blue cheese dip'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats in a hot oven.',
    nut: [238, 5, 23, 14, 4, 4, 1160]
  },

  'beet-burgers': {
    d: 'Burgers made from grated beetroot, black beans and oats, baked until firm and served in a bun with yoghurt sauce.',
    meta: 'Beet burgers: burgers of grated beetroot, black beans and oats, baked until firm. Six servings, baked for 20 minutes.',
    kw: ['beet burgers', 'beetroot burgers', 'black bean and beet burgers', 'baked beet burgers', 'vegetarian beet burgers'],
    why: 'It looks like a meat burger and cooks like a rissole, which is why the mixture has to be firm. Beetroot is wet, and a wet mixture slumps in the oven.\n\nGrate the cooked beetroot on the coarse side of a grater, then squeeze it in a clean tea towel to remove as much juice as you can. Mash the black beans roughly, leaving some whole for texture, and mix with the beetroot, oats, egg, cumin and salt. **Chill the mixture for 15 minutes before shaping.** The oats absorb the moisture and the burgers hold together.\n\nShape into 6 patties about 2 cm thick, with damp hands. Set them on a lined tray and bake at 200°C for 20 minutes, turning once, until firm and slightly crisp at the edges. If your oven runs hot, check at 16 minutes.\n\nServe in toasted buns with lettuce, red onion and a spoonful of yoghurt mixed with lemon juice. Beetroot stains, so expect a pink bun. Wear an apron.',
    ing: [
      '300 g cooked beetroot, grated',
      '240 g drained tinned black beans',
      '80 g rolled oats',
      '1 egg, about 50 g',
      '1 tsp ground cumin',
      '1/2 tsp salt',
      '6 burger buns, about 300 g',
      '60 g lettuce',
      '1/2 red onion, about 60 g, sliced',
      '100 g plain yoghurt',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Squeeze the grated beetroot dry in a tea towel. Mash the black beans roughly.',
      'Mix the beetroot, beans, oats, egg, cumin and salt. Chill for 15 minutes.',
      'Shape into 6 patties, 2 cm thick, and bake for 20 minutes, turning once.',
      'Stir the yoghurt with the lemon juice. Serve the burgers in toasted buns with the lettuce, onion and yoghurt sauce.'
    ],
    tips: [
      'Squeeze the beetroot dry.',
      'Chill the mixture.',
      'If your oven runs hot, check at 16 minutes.',
      'Use damp hands to shape.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Pickles', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [276, 13, 47, 4, 7, 8, 620]
  },

  'vegan-burgers': {
    d: 'Burgers made from kidney beans, oats and walnuts seasoned with smoked paprika and soy sauce, fried until crisp.',
    meta: 'Vegan burgers: burgers of kidney beans, oats and walnuts with smoked paprika, fried until crisp. Six servings, cooked for 15 minutes.',
    kw: ['vegan burgers', 'kidney bean burgers', 'vegan bean and walnut burgers', 'homemade vegan burgers', 'vegan bean burgers'],
    why: 'Kidney beans, oats, walnuts, onion: four things from the cupboard, and a burger that holds together on a grill pan and in a bun. The beans give the bulk and the oats bind it.\n\nDrain the beans well and pat them dry, since wet beans make a mixture that sticks to the pan. Pulse them in a food processor with the oats and walnuts until the mixture is coarse and holds together when squeezed. **Leave some texture.** A smooth purée makes a paste and not a burger.\n\nCook the onion and garlic first for 5 minutes, so that the raw bite goes, and stir them in with the soy sauce, tomato puree and paprika. The soy gives a savoury depth that replaces meat.\n\nShape into 6 patties and chill for 15 minutes. Fry in a little oil over medium heat for 7 minutes on each side, until deep brown and crisp. If your pan runs hot, lower the heat. Handle them gently when flipping, as they are tender until they cool.',
    ing: [
      '240 g drained tinned kidney beans',
      '100 g rolled oats',
      '60 g walnuts',
      '1 onion, about 100 g, finely chopped',
      '2 cloves garlic, crushed',
      '1 tbsp soy sauce',
      '1 tbsp tomato puree',
      '1 tsp smoked paprika',
      '2 tbsp sunflower oil',
      '6 burger buns, about 300 g'
    ],
    st: [
      'Cook the onion and garlic in 1 tbsp of the oil for 5 minutes. Pat the beans dry.',
      'Pulse the beans, oats and walnuts until coarse. Stir in the onion mixture, soy sauce, tomato puree and paprika.',
      'Shape into 6 patties and chill for 15 minutes.',
      'Fry in the remaining oil over medium heat for 7 minutes on each side until deep brown. Serve in the buns.'
    ],
    tips: [
      'Pat the beans dry.',
      'Leave some texture.',
      'If your pan runs hot, lower the heat.',
      'Chill before frying.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Pickles', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan or hot oven.',
    nut: [367, 12, 46, 15, 7, 5, 520]
  },

  'sweet-potato-gnocchi': {
    d: 'Soft pillows of sweet potato and flour, boiled until they float and tossed in sage brown butter and parmesan.',
    meta: 'Sweet potato gnocchi: soft pillows of sweet potato and flour tossed in sage brown butter. Four servings, cooked for 20 minutes.',
    kw: ['sweet potato gnocchi', 'homemade sweet potato gnocchi', 'sweet potato gnocchi with sage butter', 'sweet potato gnocchi with brown butter', 'sweet potato gnocchi with parmesan'],
    why: 'It is autumn food: soft, orange, scented with sage. Sweet potato gnocchi is harder than the potato kind, because the sweet potato holds more water and makes a stickier dough.\n\nBoil the cubes for 12 minutes until a knife slides in, then drain and let them steam dry in the colander for 5 minutes. **Dry potato is the key.** Mash it while hot until completely smooth, then spread it out to cool, so that the steam can leave. Wet potato takes up too much flour and makes heavy gnocchi.\n\nMix in the egg yolk, salt and nutmeg, then add the flour a little at a time, stopping as soon as the dough comes together. It will be soft and slightly sticky. Overworking makes it tough.\n\nRoll into ropes, cut into 2 cm pieces and boil in batches in salted water for 2 to 3 minutes, until they float. Toss in butter that has been browned with sage for 3 minutes. Scatter with parmesan and serve at once.',
    ing: [
      '500 g sweet potato, peeled and cubed',
      '150 g plain flour',
      '1 egg yolk, about 20 g',
      '1/2 tsp salt',
      '1/4 tsp ground nutmeg',
      '50 g butter',
      '8 sage leaves',
      '30 g parmesan, grated'
    ],
    st: [
      'Boil the sweet potato for 12 minutes until tender. Drain and steam dry in the colander for 5 minutes, then mash until smooth and spread out to cool.',
      'Mix in the egg yolk, salt and nutmeg, then add the flour a little at a time until a soft dough forms.',
      'Roll into ropes, cut into 2 cm pieces and boil in batches in salted water for 2 to 3 minutes until they float. Lift out with a slotted spoon.',
      'Brown the butter with the sage for 3 minutes, toss the gnocchi in it and scatter with the parmesan.'
    ],
    tips: [
      'Dry the potato.',
      'Add the flour gradually.',
      'Do not overwork the dough.',
      'Boil in small batches.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Roast pumpkin', 'Crispy sage'],
    store: 'Best eaten at once. Uncooked gnocchi keep in the fridge for 1 day.',
    nut: [378, 9, 54, 14, 5, 5, 480]
  },

  'air-fryer-vegetables': {
    d: 'Broccoli, cauliflower, carrots and peppers tossed with oil, garlic powder and salt and cooked in an air fryer until browned.',
    meta: 'Air fryer vegetables: broccoli, cauliflower, carrots and peppers cooked with oil and garlic powder. Four servings, cooked for 15 minutes.',
    kw: ['air fryer vegetables', 'air fryer roasted vegetables', 'mixed air fryer vegetables', 'crispy air fryer vegetables', 'easy air fryer vegetables'],
    why: 'Compare it to an oven and the difference is speed: an air fryer is a small, fast oven with a fan, and vegetables brown in about 15 minutes instead of 35. The size of the pieces matters more than usual.\n\nCut everything to about the same size, 2 cm, so that the broccoli does not burn while the carrot is raw. Carrots are the hardest, so cut them a little smaller. Toss with the oil, garlic powder and salt, and spread in the basket in a single layer. **Do not overfill the basket.** Hot air has to move around each piece, and a full basket steams the vegetables.\n\nCook at 200°C for 15 minutes, shaking the basket every 5 minutes. The edges should be brown and the stems tender. If your air fryer runs hot, check at 12 minutes. Cook in two batches if the basket is small.\n\nSqueeze a little lemon juice over the top and taste for salt. The vegetables are best straight from the basket. They go soft within half an hour.',
    ing: [
      '250 g broccoli florets',
      '200 g cauliflower florets',
      '150 g carrots, cut into 1.5 cm pieces',
      '150 g red pepper, cut into 2 cm pieces',
      '1 tbsp sunflower oil',
      '1 tsp garlic powder',
      '1/2 tsp salt',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the air fryer to 200°C. Toss the vegetables with the oil, garlic powder and salt.',
      'Spread in a single layer in the basket, in two batches if needed.',
      'Cook for 15 minutes, shaking every 5 minutes, until browned at the edges and tender.',
      'Squeeze over the lemon juice and serve at once.'
    ],
    tips: [
      'Cut the pieces evenly.',
      'Do not overfill the basket.',
      'If your air fryer runs hot, check at 12 minutes.',
      'Shake every 5 minutes.'
    ],
    pair: ['Grilled chicken', 'Roast salmon', 'Rice', 'Hummus'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days.',
    nut: [108, 4, 14, 4, 4, 5, 360]
  }
};
