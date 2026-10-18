'use strict';

/**
 * Volume sixty-one, fourth part: the rest of the Greek dishes (octopus,
 * pies, rolls, stews, dips, cakes and the Easter soup), then the Maltese and
 * Cypriot dishes and the first two Polish ones. Waits of an hour or more are
 * declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'htapodi-krasato': {
    d: 'Octopus slowly stewed in red wine with onions, bay and tomato for 70 minutes until it falls apart, a Greek meze.',
    meta: 'Htapodi krasato, Greek octopus stewed in red wine with onions and bay, cooked for 70 minutes. Four servings, ready in 1 hour 30 minutes.',
    kw: ['htapodi krasato', 'greek octopus in red wine', 'octopus stewed in wine', 'htapodi krasato recipe', 'octopus with onions and bay'],
    why: 'Why does octopus turn out like rubber? Because it was cooked too fast. Htapodi krasato is the Greek way of stewing octopus in red wine, very slowly, in its own juices, so that the flesh breaks down until it is almost tender enough to cut with a spoon.\n\nA frozen octopus is fine, even better, since freezing breaks down the fibres. Defrost it, rinse it and cut it into large pieces. Put it in a heavy pot over low heat with no liquid, and cover. In about 15 minutes the octopus releases its own water and turns pink. **Keep the lid on and the heat low** as it sweats. Add the onions, bay, a few peppercorns and a splash of red wine vinegar.\n\nPour in the red wine, add the tomatoes and simmer very gently, partly covered, for 55 minutes more, until a knife slides in with no effort. The sauce will have reduced to a dark, glossy coating. Serve warm or at room temperature with the sauce, chopped parsley, a drizzle of olive oil and plenty of bread. The flavour is stronger the next day.',
    ing: [
      '1.5 kg octopus, cleaned and cut in pieces',
      '3 tbsp olive oil',
      '3 onions, sliced',
      '2 bay leaves',
      '2 g black peppercorns',
      '2 tbsp red wine vinegar',
      '250 ml red wine',
      '200 g tinned chopped tomatoes',
      '3 tbsp chopped parsley',
      '4 slices crusty bread'
    ],
    st: [
      'Put the octopus in a heavy pot over low heat, cover and cook for 15 minutes until it releases its water.',
      'Add the oil, onions, bay, peppercorns and vinegar and cook for 5 minutes.',
      'Pour in the wine and tomatoes, bring to a bare simmer, partly cover and cook for 50 minutes until a knife slides in easily.',
      'Uncover for the last 10 minutes to reduce the sauce.',
      'Scatter with the parsley and serve with the bread.'
    ],
    tips: [
      'Keep the heat low throughout.',
      'Use frozen octopus, defrosted.',
      'Let it stand for an hour for a deeper flavour.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Ouzo'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [515, 61, 34, 15, 3, 7, 1020]
  },

  'kolokithopita': {
    d: 'A Greek pie of grated courgette, feta, dill and rice in layers of phyllo, baked for 50 minutes until crisp and golden.',
    meta: 'Kolokithopita, Greek courgette and feta pie in phyllo, baked for 50 minutes. Six servings, ready in 1 hour 15 minutes.',
    kw: ['kolokithopita', 'greek courgette pie', 'zucchini and feta phyllo pie', 'kolokithopita recipe', 'greek vegetable pie with dill'],
    why: 'Compare it with a spanakopita and you find a milder, sweeter pie, with the courgette taking the place of the spinach. Kolokithopita is a Greek pie of grated courgette, feta and herbs in crisp layers of phyllo, and it is eaten warm or at room temperature as a light meal.\n\nGrate the courgettes, salt them and leave them for 15 minutes in a colander. Squeeze them as dry as you can in a clean cloth. **Squeeze them twice**, since they are mostly water, and a wet filling makes the bottom of the pie soggy. Mix with crumbled feta, a handful of cooked rice to take up moisture, spring onions, dill, mint and eggs.\n\nBrush a tin with olive oil and layer 8 sheets of phyllo, brushing each with oil. Spread over the filling and cover with 8 more oiled sheets, tucking in the edges. Score the top, brush with oil and sprinkle with a little water to stop the edges curling. Bake at 180C for 50 minutes, until deep gold and crisp. Rest for 10 minutes before cutting into squares.',
    ing: [
      '800 g courgettes, coarsely grated',
      '1 tsp salt',
      '250 g feta, crumbled',
      '100 g cooked rice',
      '4 spring onions, sliced',
      '3 tbsp chopped dill',
      '2 tbsp chopped mint',
      '3 eggs',
      '1/2 tsp black pepper',
      '350 g phyllo pastry, 16 sheets',
      '100 ml olive oil'
    ],
    st: [
      'Toss the courgettes with the salt and leave for 15 minutes. Squeeze them dry twice in a clean cloth.',
      'Heat the oven to 180C. Mix the courgettes with the feta, rice, spring onions, dill, mint, eggs and pepper.',
      'Brush a 30 x 25 cm tin with oil. Layer 8 sheets of phyllo, brushing each with oil. Spread over the filling.',
      'Cover with 8 more oiled sheets and tuck in the edges. Score the top into squares and brush with oil.',
      'Bake for 50 minutes until deep gold. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Squeeze the courgettes dry twice.',
      'Oil every sheet of phyllo.',
      'Score the top before baking.'
    ],
    pair: ['Greek salad', 'Tzatziki', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [492, 16, 44, 28, 3, 7, 1070]
  },

  'hortopita': {
    d: 'A Greek pie of mixed wild or garden greens, herbs and feta in crisp homemade or bought phyllo, baked for 50 minutes.',
    meta: 'Hortopita, Greek pie of wild greens, herbs and feta in crisp phyllo, baked for 50 minutes. Eight servings, ready in 1 hour 30 minutes.',
    kw: ['hortopita', 'greek wild greens pie', 'mixed greens and feta pie', 'hortopita recipe', 'greek greens in phyllo'],
    why: 'What is horta? It is the word for the wild and garden greens that Greeks pick on hillsides in spring, from dandelion and chicory to sorrel and nettle, and hortopita is the pie made of them. Any mix of leafy greens will do, and the more kinds you use, the better the flavour.\n\nWash the greens thoroughly, chop them roughly and toss them with salt in a large bowl. Leave them for 10 minutes, and squeeze them very hard in a cloth. **Use at least three kinds of greens**, a mix of bitter, sweet and mild: chard, spinach, rocket, dandelion or sorrel. Fry spring onions in oil for 2 minutes, then add the greens and cook for 5 minutes to drive off more water.\n\nMix with feta, dill, parsley, mint and eggs. Layer oiled phyllo in a tin, spread over the filling and cover with more oiled sheets, tucking in the edges. Score and bake at 180C for 50 minutes until deep gold. Cool for 10 minutes and cut into squares. It is eaten warm or cold, and is traditionally a Lenten dish without the cheese.',
    ing: [
      '1.2 kg mixed greens such as chard, spinach, rocket and sorrel',
      '1 tsp salt',
      '4 tbsp olive oil',
      '6 spring onions, sliced',
      '250 g feta, crumbled',
      '3 tbsp chopped dill',
      '3 tbsp chopped parsley',
      '2 tbsp chopped mint',
      '3 eggs',
      '350 g phyllo pastry, 16 sheets',
      '100 ml olive oil, for the phyllo'
    ],
    st: [
      'Chop the greens and toss with the salt. Leave for 10 minutes, then squeeze very dry in a cloth.',
      'Fry the spring onions in the 4 tablespoons of oil for 2 minutes. Add the greens and cook for 5 minutes. Cool.',
      'Heat the oven to 180C. Mix the greens with the feta, herbs and eggs.',
      'Layer 8 oiled phyllo sheets in a 30 x 25 cm tin, spread over the filling and cover with 8 more oiled sheets. Score the top.',
      'Bake for 50 minutes until deep gold. Cool for 10 minutes and cut into squares.'
    ],
    tips: [
      'Use at least three kinds of greens.',
      'Squeeze the greens very dry.',
      'Oil every layer of phyllo.'
    ],
    pair: ['Greek salad', 'Yoghurt', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [424, 12, 31, 28, 4, 4, 810]
  },

  'lahanodolmades': {
    d: 'Cabbage leaves rolled around a minced meat and rice filling and simmered in an egg and lemon sauce, in 1 hour 40 minutes.',
    meta: 'Lahanodolmades, Greek cabbage rolls with meat and rice in egg and lemon sauce, cooked for 1 hour. Six servings, ready in 1 hour 40 minutes.',
    kw: ['lahanodolmades', 'greek stuffed cabbage rolls', 'cabbage rolls with egg lemon sauce', 'lahanodolmades recipe', 'greek cabbage dolmades with avgolemono'],
    why: 'It looks like a pot of neat green parcels, and the surprise is the sauce: smooth, pale and sharp with lemon. Lahanodolmades are Greek cabbage rolls, made in winter when cabbages are heavy and sweet, and they are finished with avgolemono, the egg and lemon sauce that is the signature of Greek cooking.\n\nBoil the whole cabbage for 5 minutes and peel off the softened leaves, trimming the thick ribs. Mix minced pork and beef with rice, onion, dill, parsley and a little oil. **Use only 3 tablespoons of rice for each roll**, as it swells and will split the leaf. Roll each leaf around a spoonful of the filling, tucking in the sides, and pack the rolls seam side down in a pot.\n\nPour over water and oil to cover, set a plate on top to keep the rolls down and simmer for 1 hour. For the sauce, whisk eggs with lemon juice, add a ladle of hot broth gradually, whisking, and pour back into the pot off the heat, shaking the pan. Do not let it boil or the eggs scramble. Serve hot, with a spoonful of the sauce.',
    ing: [
      '1 savoy cabbage, about 1.2 kg',
      '400 g minced pork',
      '200 g minced beef',
      '100 g long grain rice',
      '1 onion, grated',
      '3 tbsp chopped dill',
      '3 tbsp chopped parsley',
      '5 tbsp olive oil',
      '1 tsp salt',
      '600 ml water',
      '3 eggs',
      '3 lemons, juice'
    ],
    st: [
      'Boil the whole cabbage for 5 minutes, then peel off 18 leaves and trim the thick ribs.',
      'Mix the pork, beef, rice, onion, dill, parsley, 2 tablespoons of the oil and the salt.',
      'Roll a spoonful of the filling in each leaf. Pack seam side down in a pot and add the water and remaining oil. Set a plate on top.',
      'Simmer for 1 hour.',
      'Whisk the eggs and lemon juice, whisk in a ladle of hot broth, and pour into the pot off the heat, shaking the pan. Serve hot.'
    ],
    tips: [
      'Use a small amount of rice in each roll.',
      'Weigh the rolls down with a plate.',
      'Add the egg and lemon sauce off the heat.'
    ],
    pair: ['Crusty bread', 'Yoghurt', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge. Reheat gently.',
    nut: [485, 26, 30, 29, 6, 8, 530]
  },

  'spetsofai': {
    d: 'A stew from Mount Pelion of sausages, peppers, tomato and onion simmered for 40 minutes, served with bread.',
    meta: 'Spetsofai, Greek stew of sausages, peppers and tomato from Pelion, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['spetsofai', 'greek sausage and pepper stew', 'pelion sausage stew', 'spetsofai recipe', 'greek sausages in tomato sauce'],
    why: 'Compare it with an Italian sausage and peppers, and you find a thicker, deeper tomato sauce and a more herbal sausage. Spetsofai is a stew from the villages of Mount Pelion, in central Greece, made with local sausage and the green and red peppers the villages grow in summer.\n\nIf you cannot find a Greek sausage, use a coarse pork sausage with fennel or orange peel. Slice it into thick pieces and fry it in a little oil in a wide pan over medium heat for 8 minutes, until browned. Lift it out. In the same fat, soften onions and peppers for 12 minutes until they begin to colour. **Add the peppers in two stages**, half at the start and half later, so some melt into the sauce and some stay in pieces.\n\nStir in garlic, tomatoes, a pinch of sugar and oregano, return the sausage and simmer gently for 25 minutes, until the sauce is thick and the oil rises to the top. Taste and add salt if needed. Serve in the pan, with plenty of crusty bread, and a glass of red wine. It tastes better the next day, reheated gently.',
    ing: [
      '600 g Greek or coarse pork sausages, in 3 cm pieces',
      '4 tbsp olive oil',
      '2 onions, sliced',
      '3 green peppers, sliced',
      '1 red pepper, sliced',
      '4 garlic cloves',
      '500 g ripe tomatoes, chopped',
      '1 tsp dried oregano',
      '1 pinch caster sugar',
      '1/2 tsp salt'
    ],
    st: [
      'Brown the sausages in 2 tablespoons of the oil in a wide pan for 8 minutes. Lift out.',
      'Add the remaining oil, the onions and half the peppers and cook for 12 minutes.',
      'Add the garlic, tomatoes, oregano, sugar and remaining peppers.',
      'Return the sausages and simmer for 25 minutes until the sauce is thick and the oil rises.',
      'Taste for salt and serve with bread.'
    ],
    tips: [
      'Brown the sausage well first.',
      'Add the peppers in two stages.',
      'Let the oil rise to the surface.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Feta'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [651, 23, 25, 51, 6, 14, 1510]
  },

  'bifteki': {
    d: 'Greek beef burgers seasoned with oregano and onion, stuffed with feta and grilled for 15 minutes.',
    meta: 'Bifteki, Greek beef burgers stuffed with feta and flavoured with oregano, cooked for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['bifteki', 'greek burgers stuffed with feta', 'greek beef patties', 'bifteki recipe', 'greek burger with oregano'],
    why: 'A Sunday dish for a table of four, and one of the best known of the Greek grill: bifteki is a burger without a bun, made from minced beef seasoned with onion, parsley and oregano, and stuffed with a piece of feta that melts in the middle. It is served with chips, tomato and tzatziki.\n\nMix the minced beef with grated onion, a spoonful of breadcrumbs, parsley, oregano, salt and pepper. Use a coarse mince with some fat, since lean mince gives a dry burger. **Do not overwork the meat**, as it makes the patties tough. Shape into four patties and press a thumb into the middle of each, pushing in a cube of feta and sealing the meat over it.\n\nGrill or fry over a medium high heat for about 6 minutes on each side, until browned and cooked through. The feta softens inside and may leak, which is part of the pleasure. Rest for 3 minutes. Serve with lemon, a Greek salad, chips, warm pitta and tzatziki. Some cooks wrap the patties in bacon for the grill.',
    ing: [
      '700 g minced beef',
      '1 onion, grated',
      '3 tbsp dry breadcrumbs',
      '3 tbsp chopped parsley',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '120 g feta, in 4 cubes',
      '1 tbsp olive oil',
      '200 g tzatziki',
      '1 lemon, in wedges'
    ],
    st: [
      'Mix the beef, onion, breadcrumbs, parsley, oregano, salt and pepper lightly.',
      'Shape into 4 patties. Press a cube of feta into the middle of each and seal the meat over it.',
      'Heat the oil in a wide pan or a grill to medium high. Cook the patties for 6 minutes on each side.',
      'Rest for 3 minutes. Serve with the tzatziki and lemon.'
    ],
    tips: [
      'Use mince with some fat.',
      'Do not overwork the meat.',
      'Seal the feta in completely.'
    ],
    pair: ['Chips', 'Greek salad', 'Warm pitta', 'Tzatziki'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [486, 42, 12, 30, 2, 5, 1200]
  },

  'soutzoukakia': {
    d: 'Cumin scented oval meatballs simmered in a thick tomato sauce for 40 minutes, a Greek taverna dish.',
    meta: 'Soutzoukakia, Greek cumin meatballs in tomato sauce, cooked for 40 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['soutzoukakia', 'greek cumin meatballs', 'greek meatballs in tomato sauce', 'soutzoukakia smyrneika', 'soutzoukakia recipe'],
    why: 'The first sign they are ready is the smell: cumin, warm and earthy, and the sweet tang of tomato. Soutzoukakia are Greek meatballs shaped like short sausages, flavoured with cumin and garlic, and cooked in a tomato sauce. They came to Greece with the refugees from Smyrna, and are often called soutzoukakia smyrneika.\n\nThe mix is minced beef and pork, soaked bread, garlic, cumin, red wine vinegar, an egg, parsley and salt. Soak the bread in a little wine, squeeze it, then work it into the mince by hand. **Chill the mixture for 30 minutes** before shaping, so that it holds together in the pan. Roll into ovals about 6 cm long, dust with flour and fry in a little oil until browned on all sides.\n\nFor the sauce, soften onion and garlic, add tomatoes, a pinch of cinnamon, sugar and bay and simmer for 10 minutes. Add the meatballs and cook gently for 20 minutes. Serve over rice or chips with the sauce, a squeeze of lemon and plenty of bread. The sauce thickens as it stands.',
    ing: [
      '400 g minced beef',
      '300 g minced pork',
      '2 slices white bread, 60 g, soaked in 50 ml red wine',
      '4 garlic cloves, crushed',
      '1 tbsp ground cumin',
      '1 tbsp red wine vinegar',
      '1 egg',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '40 g plain flour',
      '4 tbsp olive oil',
      '1 onion, chopped',
      '600 g tinned chopped tomatoes',
      '1 bay leaf',
      '1/4 tsp ground cinnamon',
      '1 tsp caster sugar'
    ],
    st: [
      'Squeeze the bread and mix by hand with the beef, pork, half the garlic, cumin, vinegar, egg, parsley and salt. Chill for 30 minutes.',
      'Shape into 16 ovals, dust with the flour and brown in 2 tablespoons of the oil for 6 minutes.',
      'Soften the onion and remaining garlic in the remaining oil for 5 minutes. Add the tomatoes, bay, cinnamon and sugar and simmer for 10 minutes.',
      'Add the meatballs and cook gently for 20 minutes.',
      'Serve over rice or chips.'
    ],
    tips: [
      'Chill the mix before shaping.',
      'Brown the meatballs before the sauce.',
      'Simmer gently so they stay whole.'
    ],
    pair: ['Rice', 'Chips', 'Crusty bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [615, 39, 27, 39, 3, 7, 800]
  },

  'tirokafteri': {
    d: 'A spicy Greek dip of feta blended with roasted red peppers, chilli and olive oil, made in 10 minutes.',
    meta: 'Tirokafteri, spicy Greek feta and red pepper dip with chilli, ready in 10 minutes. Six servings, no cooking.',
    kw: ['tirokafteri', 'greek spicy feta dip', 'feta and pepper dip', 'tirokafteri recipe', 'hot feta spread'],
    why: 'Most home versions come out too salty, and the fix is to use a milder, creamy feta and balance it with yoghurt. Tirokafteri is the spicy cheese dip of Greece, served at the start of a meal with bread and raw vegetables, and it is made by blending feta with peppers and chilli until it forms a smooth, bright pink paste.\n\nChoose a soft, creamy feta, not a hard dry one, and crumble it into the blender. Add roasted red peppers from a jar, a small chilli or a pinch of chilli flakes, a spoonful of Greek yoghurt and a good glug of olive oil. **Start with a little chilli and taste**, as the heat grows after sitting. Blend in short pulses, so the dip stays a little coarse.\n\nA splash of red wine vinegar sharpens it. Taste before adding salt, since feta is salty already. Spoon into a bowl, drizzle with oil and a pinch of dried oregano, and serve with pitta, cucumber and carrot sticks. The dip keeps for 4 days in the fridge, and the heat mellows after the first day.',
    ing: [
      '250 g soft feta, crumbled',
      '120 g roasted red peppers from a jar, drained',
      '1 fresh red chilli, deseeded',
      '3 tbsp Greek yoghurt',
      '3 tbsp olive oil',
      '1 tsp red wine vinegar',
      '1 pinch dried oregano',
      '4 pitta breads, in wedges'
    ],
    st: [
      'Put the feta, peppers, chilli, yoghurt, 2 tablespoons of the oil and vinegar in a blender.',
      'Pulse until nearly smooth, leaving a little texture. Taste and adjust the heat and salt.',
      'Spoon into a bowl and drizzle with the remaining oil. Scatter with the oregano.',
      'Serve with the pitta.'
    ],
    tips: [
      'Start with a little chilli.',
      'Use a soft feta.',
      'Pulse so a little texture remains.'
    ],
    pair: ['Warm pitta', 'Raw vegetables', 'Ouzo'],
    store: 'Keeps for 4 days in the fridge.',
    nut: [241, 9, 13, 17, 1, 4, 560]
  },

  'bamies': {
    d: 'Okra stewed in a tomato and onion sauce with garlic and olive oil for 35 minutes, a Greek summer dish.',
    meta: 'Bamies, Greek okra stewed in tomato, onion and olive oil, cooked for 35 minutes. Four servings, ready in 1 hour 15 minutes.',
    kw: ['bamies', 'greek okra stew', 'okra in tomato sauce', 'bamies lathera', 'greek okra recipe'],
    why: 'Short and sharp: do not cut the okra. If you keep the pods whole, with only the cap trimmed, they will not release their slime into the sauce, and the dish stays glossy instead of sticky. Bamies is the Greek okra stew, one of the most loved summer dishes, cooked in plenty of olive oil and tomato.\n\nTrim the cone shaped caps from the pods with a knife, shaving off a thin layer but not cutting into the pod. Toss them with a splash of vinegar and leave them in the sun, or in a warm room, for 30 minutes, which helps to reduce the slime. **Rinse them well afterwards and pat dry**, then fry them gently in olive oil for 5 minutes.\n\nIn another pan, soften onion and garlic, add tomatoes and a pinch of sugar, then add the okra and enough water to half cover. Simmer, covered, for 25 minutes without stirring, shaking the pan. The okra should be tender but still whole. Serve warm or at room temperature with feta and bread. A squeeze of lemon freshens the dish.',
    ing: [
      '600 g okra',
      '2 tbsp white wine vinegar',
      '5 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves',
      '500 g tomatoes, grated',
      '1 pinch caster sugar',
      '1 tsp salt',
      '100 ml water',
      '1 lemon, juice',
      '100 g feta, to serve'
    ],
    st: [
      'Trim the caps from the okra without cutting the pods. Toss with the vinegar and leave for 30 minutes. Rinse and pat dry.',
      'Fry the okra in 3 tablespoons of the oil for 5 minutes. Lift out.',
      'Soften the onion and garlic in the remaining oil for 5 minutes. Add the tomatoes, sugar, salt and water and simmer for 5 minutes.',
      'Return the okra, cover and cook gently for 25 minutes, shaking the pan.',
      'Add the lemon juice and serve with the feta.'
    ],
    tips: [
      'Trim but do not cut into the pods.',
      'Shake the pan rather than stirring.',
      'Serve warm or at room temperature.'
    ],
    pair: ['Feta', 'Crusty bread', 'Grilled fish'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [327, 8, 22, 23, 7, 8, 880]
  },

  'revithia': {
    d: 'Chickpeas baked slowly in a clay pot with onion, olive oil, lemon and bay, a Greek island dish ready in 45 minutes.',
    meta: 'Revithia, Greek chickpea stew with onion, olive oil, lemon and bay, cooked for 35 minutes. Four servings, ready in 45 minutes.',
    kw: ['revithia', 'greek chickpea stew', 'revithia with bay leaf', 'greek chickpeas with lemon', 'revithia recipe'],
    why: 'Most home chickpea dishes come out dry, and the fix is plenty of olive oil and a lid. Revithia is the Greek chickpea stew, a dish from the islands, where it is baked in a clay pot overnight in the village oven after bread is taken out. At home you can make it on the hob in 35 minutes if you use tinned chickpeas.\n\nSoften onion and garlic in olive oil for 8 minutes, until sweet. Add a bay leaf, a spoonful of tomato purée and a pinch of oregano, then the drained chickpeas and enough stock to cover by 1 cm. **Cook with the lid on for the first 20 minutes**, so the chickpeas absorb flavour, then uncover to reduce the liquid to a thick, creamy sauce.\n\nSome of the chickpeas break down as they cook and thicken the stew. Stir in the lemon juice and chopped parsley at the end, with a good drizzle of oil, as the lemon must go in off the heat to keep its freshness. Serve with bread, olives and feta. Revithia is better the next day, when the flavours have deepened.',
    ing: [
      '800 g tinned chickpeas, drained',
      '5 tbsp olive oil',
      '2 onions, sliced',
      '4 garlic cloves',
      '1 tbsp tomato purée',
      '2 bay leaves',
      '1 tsp dried oregano',
      '600 ml vegetable stock',
      '1 lemon, juice',
      '3 tbsp chopped parsley',
      '1 tsp salt'
    ],
    st: [
      'Soften the onions and garlic in 3 tablespoons of the oil for 8 minutes.',
      'Add the purée, bay, oregano, chickpeas and stock and bring to a simmer. Cover and cook for 20 minutes.',
      'Uncover and cook for 10 minutes to thicken. Crush a few chickpeas against the pan.',
      'Off the heat, stir in the lemon juice, parsley, salt and the remaining oil.'
    ],
    tips: [
      'Use plenty of olive oil.',
      'Cook covered first, then uncovered.',
      'Add the lemon off the heat.'
    ],
    pair: ['Crusty bread', 'Feta', 'Olives', 'Greek salad'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [447, 17, 43, 23, 12, 9, 1690]
  },

  'domatokeftedes': {
    d: 'Santorini tomato fritters of chopped tomatoes, onion, mint and flour fried until crisp at the edge, in 30 minutes.',
    meta: 'Domatokeftedes, Greek tomato fritters with mint and onion from Santorini, cooked for 15 minutes. Six servings, ready in 30 minutes.',
    kw: ['domatokeftedes', 'greek tomato fritters', 'santorini tomato balls', 'domatokeftedes recipe', 'tomato fritters with mint'],
    why: 'Fry them in very hot oil. That is the short instruction for domatokeftedes, the tomato fritters of Santorini, because they are made from a loose, wet batter, and cold oil makes them greasy and heavy. They are a taverna favourite, crisp at the edge and soft and tangy in the middle.\n\nSanturini\'s small, sweet tomatoes are the original. Elsewhere, use ripe tomatoes, chopped small and drained for 10 minutes in a sieve. The mix needs onion, mint, parsley, a spoonful of oregano, salt and pepper, and enough flour to make a thick batter. **Add the flour a spoonful at a time**, stopping when the mix drops thickly from a spoon. Too much flour makes the fritters dense.\n\nDrop spoonfuls into hot olive oil and fry for 2 to 3 minutes on each side, until deep golden. Drain on kitchen paper and serve at once, with feta and a squeeze of lemon. The fritters are fragile when hot, so lift them carefully with a slotted spoon. They are good with tzatziki and cold white wine.',
    ing: [
      '500 g ripe tomatoes, finely chopped and drained',
      '1 onion, finely chopped',
      '2 tbsp chopped fresh mint',
      '2 tbsp chopped parsley',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '120 g plain flour',
      '1 tsp baking powder',
      '70 ml olive oil absorbed, from 200 ml for frying',
      '100 g feta, to serve'
    ],
    st: [
      'Drain the chopped tomatoes in a sieve for 10 minutes.',
      'Mix the tomatoes, onion, mint, parsley, oregano, salt and pepper. Stir in the flour and baking powder a spoonful at a time to a thick batter.',
      'Heat the oil in a wide pan until very hot. Drop in spoonfuls of the batter.',
      'Fry for 2 to 3 minutes on each side until deep gold. Drain on kitchen paper.',
      'Serve at once with the feta.'
    ],
    tips: [
      'Drain the tomatoes first.',
      'Fry in very hot oil.',
      'Add the flour a spoonful at a time.'
    ],
    pair: ['Feta', 'Tzatziki', 'Ouzo', 'Lemon wedges'],
    store: 'Best fresh.',
    nut: [239, 5, 21, 15, 2, 4, 470]
  },

  'karidopita': {
    d: 'A moist Greek walnut cake of eggs, spices and breadcrumbs, baked for 50 minutes and soaked in a cooled lemon syrup.',
    meta: 'Karidopita, moist Greek walnut cake soaked in lemon and cinnamon syrup, baked for 50 minutes. Twelve servings, ready in 1 hour 10 minutes.',
    kw: ['karidopita', 'greek walnut cake', 'walnut cake with syrup', 'karidopita recipe', 'greek syrup cake with cinnamon'],
    why: 'The first sign it is ready is the smell: cinnamon, cloves and toasted walnuts rising from the oven, then the hiss of syrup poured on a hot cake. Karidopita is a Greek walnut cake soaked in syrup, one of the most common of the syrup cakes, and it is made with ground walnuts, some breadcrumbs and no butter.\n\nBeat the egg yolks with sugar until pale and thick. Fold in the ground walnuts, breadcrumbs, flour, baking powder, cinnamon and cloves. **Whisk the egg whites to stiff peaks separately** and fold them in, in two goes, since they raise the cake and keep it light. A heavy hand turns the cake into a brick.\n\nBake in a lined tin at 180C for 50 minutes, until deep gold and a skewer comes out clean. While it bakes, simmer sugar, water, a strip of lemon peel and a cinnamon stick for 8 minutes and cool. Pour the cool syrup over the hot cake, slowly, so that it soaks in. Leave it for a few hours, and cut into diamonds. It keeps for a week.',
    ing: [
      '6 eggs, separated',
      '150 g caster sugar',
      '250 g ground walnuts',
      '60 g dry breadcrumbs',
      '60 g plain flour',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/4 tsp ground cloves',
      '300 g caster sugar, for the syrup',
      '300 ml water',
      '1 strip lemon peel',
      '3 g cinnamon stick'
    ],
    st: [
      'Heat the oven to 180C and line a 30 x 25 cm tin.',
      'Beat the yolks and 150 g sugar for 5 minutes. Fold in the walnuts, breadcrumbs, flour, baking powder, cinnamon and cloves.',
      'Whisk the whites to stiff peaks and fold into the batter in two goes.',
      'Pour into the tin and bake for 50 minutes until a skewer comes out clean.',
      'Simmer the syrup sugar, water, peel and cinnamon stick for 8 minutes. Cool. Pour over the hot cake slowly, then cut into diamonds when cool.'
    ],
    tips: [
      'Fold in the whites gently.',
      'Pour cool syrup over the hot cake.',
      'Leave for a few hours so the syrup soaks in.'
    ],
    pair: ['Greek coffee', 'Vanilla ice cream', 'Yoghurt'],
    store: 'Keeps for 1 week in the fridge or a cool place.',
    nut: [372, 8, 49, 16, 2, 39, 150]
  },

  'portokalopita': {
    d: 'A Greek orange cake made from torn pieces of dried phyllo, yoghurt, eggs and orange juice, baked for 45 minutes.',
    meta: 'Portokalopita, Greek orange phyllo cake with yoghurt and orange syrup, baked for 45 minutes. Twelve servings, ready in 1 hour.',
    kw: ['portokalopita', 'greek orange phyllo cake', 'orange cake with phyllo and yoghurt', 'portokalopita recipe', 'greek orange syrup cake'],
    why: 'What do you make with leftover phyllo? Portokalopita, the Greek orange cake, which is made from phyllo pastry torn in pieces and mixed with a custard of yoghurt, oil, eggs and orange, and baked until crisp on top and soft underneath. It is a modern favourite on the Greek table.\n\nTear the phyllo sheets into pieces about 3 cm wide and spread them on a tray for 30 minutes, until they dry and become brittle. This is not strictly necessary, but drying stops them going soggy. Whisk together the yoghurt, eggs, sugar, oil, orange zest and baking powder, and fold in the phyllo until every piece is coated. **Do not squash the pieces**, because the cake needs the air between them to rise.\n\nPour into a tin and bake at 180C for 45 minutes until deep gold. While it bakes, simmer sugar, orange juice and water for 8 minutes into a syrup and cool. Pour the cool syrup over the hot cake, a little at a time, so that it soaks in without flooding. Cool and serve with a spoonful of Greek yoghurt.',
    ing: [
      '400 g phyllo pastry, torn into pieces',
      '4 eggs',
      '200 g caster sugar',
      '250 g Greek yoghurt',
      '120 ml olive oil',
      '2 oranges, zest',
      '2 tsp baking powder',
      '300 g caster sugar, for the syrup',
      '250 ml orange juice',
      '150 ml water',
      '150 g Greek yoghurt, to serve'
    ],
    st: [
      'Heat the oven to 180C and oil a 30 x 25 cm tin. Tear the phyllo into pieces and leave on a tray for 30 minutes.',
      'Whisk the eggs, 200 g sugar, yoghurt, oil, zest and baking powder.',
      'Fold in the phyllo until coated, without squashing it. Pour into the tin.',
      'Bake for 45 minutes until deep gold.',
      'While the cake bakes, simmer the syrup sugar, orange juice and water for 8 minutes and leave it to cool. Pour the cooled syrup slowly over the hot cake.',
      'Cool and serve with the yoghurt.'
    ],
    tips: [
      'Dry the phyllo pieces first.',
      'Do not squash the pieces.',
      'Pour cool syrup over the hot cake.'
    ],
    pair: ['Greek yoghurt', 'Greek coffee', 'Orange slices'],
    store: 'Keeps for 4 days in the fridge.',
    nut: [413, 8, 66, 13, 1, 48, 210]
  },

  'rizogalo': {
    d: 'A Greek rice pudding of short grain rice, milk, sugar and vanilla simmered for 45 minutes until creamy and dusted with cinnamon.',
    meta: 'Rizogalo, Greek rice pudding with vanilla and cinnamon, cooked for 45 minutes. Six servings, ready in 55 minutes.',
    kw: ['rizogalo', 'greek rice pudding', 'rizogalo with cinnamon', 'creamy greek rice pudding', 'rizogalo recipe'],
    why: 'Most home rice puddings come out stodgy, and the fix is to stir often and add the sugar late. Rizogalo is the Greek rice pudding, a creamy, pale dessert that is served cold in small bowls with a dusting of cinnamon, and it is made on the hob in just over 45 minutes.\n\nStart with a small amount of rice, and simmer it in water for 10 minutes, to soften it before the milk goes in. Rice cooked directly in milk stays hard, because milk toughens the grain. Add the milk, a strip of lemon peel and a vanilla pod. **Keep the heat low and stir every few minutes**, scraping the base, for 30 minutes, until the rice is creamy and thick.\n\nAdd the sugar only at the end, for the last 5 minutes. Taste for sweetness. Remove the lemon peel and vanilla pod and spoon into bowls. The pudding thickens a good deal as it cools, so it should be looser than you want it to be when it comes off the heat. Dust with ground cinnamon. It is served cold, and keeps for 3 days in the fridge.',
    ing: [
      '120 g short grain rice',
      '250 ml water',
      '1 litre whole milk',
      '1 strip lemon peel',
      '2 g vanilla pod, split',
      '100 g caster sugar',
      '1 pinch salt',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Simmer the rice in the water in a heavy pan for 10 minutes.',
      'Add the milk, lemon peel, vanilla and salt and bring to a gentle simmer.',
      'Cook over low heat for 30 minutes, stirring every few minutes, until thick and creamy.',
      'Stir in the sugar and cook for 5 minutes more. Remove the peel and vanilla.',
      'Spoon into bowls, cool and dust with the cinnamon.'
    ],
    tips: [
      'Soften the rice in water first.',
      'Stir often over low heat.',
      'Add the sugar late.'
    ],
    pair: ['Cinnamon', 'Stewed fruit', 'Honey'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [250, 7, 42, 6, 1, 25, 100]
  },

  'freddo-cappuccino': {
    d: 'A Greek iced coffee of a double espresso shaken over ice, topped with a cold milk foam, ready in 5 minutes.',
    meta: 'Freddo cappuccino, Greek iced cappuccino with cold milk foam over a double espresso, ready in 5 minutes. Two servings, no cooking.',
    kw: ['freddo cappuccino', 'greek iced cappuccino', 'iced cappuccino with cold foam', 'freddo cappuccino recipe', 'greek iced coffee'],
    why: 'This is what to drink on a hot afternoon in Athens, in a cafe with the shutters down and the fan on. Freddo cappuccino is the Greek iced coffee: a double espresso shaken with ice and sugar until it is cold and frothy, then topped with a thick, cold milk foam.\n\nPull a double espresso for each glass. Put the hot coffee in a cocktail shaker, or a jar with a tight lid, with plenty of ice and a spoonful of sugar. **Shake hard for 20 seconds** until the outside of the shaker is frosted and the coffee has foamed. Strain it into a tall glass over fresh ice, since the first ice will have melted.\n\nFor the foam, use very cold milk, and whisk it in a jar or with a handheld frother for 30 seconds, until it holds a thick, glossy froth. Spoon it on top of the coffee, which will keep it separate in two layers. Serve with a straw. Greek cafes also make freddo espresso without the foam, with just the shaken coffee over ice.',
    ing: [
      '120 ml double espresso, 2 shots',
      '2 tsp caster sugar',
      '200 g ice cubes',
      '150 ml very cold whole milk'
    ],
    st: [
      'Shake the espresso, sugar and half the ice in a shaker or jar for 20 seconds until frosted.',
      'Strain over fresh ice into 2 tall glasses.',
      'Whisk the cold milk with a frother for 30 seconds to a thick foam.',
      'Spoon the foam over the coffee and serve with a straw.'
    ],
    tips: [
      'Shake hard so the coffee foams.',
      'Strain over fresh ice.',
      'Use very cold milk for the foam.'
    ],
    pair: ['Sesame bread ring', 'Cheese pie', 'Biscuits'],
    store: 'Serve at once.',
    nut: [71, 3, 8, 3, 0, 8, 30]
  },

  'greek-easter-soup-magiritsa': {
    d: 'The Greek Easter soup of lamb liver and heart with dill, spring onions and lettuce, finished with egg and lemon, in 1 hour 20 minutes.',
    meta: 'Greek Easter soup magiritsa, lamb offal soup with dill, lettuce and egg and lemon sauce, cooked for 1 hour. Six servings, ready in 1 hour 20 minutes.',
    kw: ['greek easter soup magiritsa', 'magiritsa', 'greek lamb liver easter soup', 'easter soup with avgolemono', 'magiritsa recipe'],
    why: 'Most people who dislike offal have not eaten this one, and the fix is to simmer it slowly and finish it with lemon. Magiritsa is the Greek soup eaten after the midnight Easter service, to break the Lenten fast, and it uses the liver, heart and other parts of the Easter lamb. The result is a delicate, dill scented soup, thickened with egg and lemon.\n\nRinse the lamb liver and heart and simmer them in water for 20 minutes to remove the strong taste. Drain and chop them finely. Fry spring onions in olive oil until soft, add the chopped offal and cook for 5 minutes. **Add the rice and hot water slowly**, and simmer for 25 minutes, with the shredded lettuce and dill going in for the last 10 minutes.\n\nFinish with avgolemono: whisk the eggs with lemon juice, add a ladle of hot broth a little at a time, whisking, then pour back into the pot off the heat, shaking the pan. The soup should be creamy and pale yellow. Serve at once, with a sprinkling of dill and a slice of Easter bread. Do not let it boil after adding the egg.',
    ing: [
      '400 g lamb liver',
      '200 g lamb heart',
      '2 tbsp olive oil',
      '8 spring onions, sliced',
      '120 g short grain rice',
      '1.5 litres water',
      '1 cos lettuce, 300 g, shredded',
      '6 tbsp chopped dill',
      '1 tsp salt',
      '3 eggs',
      '2 lemons, juice'
    ],
    st: [
      'Simmer the liver and heart in water for 20 minutes. Drain, cool and chop finely.',
      'Fry the spring onions in the oil for 5 minutes. Add the offal and fry for 5 minutes.',
      'Add the rice, water and salt and simmer for 25 minutes. Add the lettuce and half the dill for the last 10 minutes.',
      'Whisk the eggs and lemon juice, whisk in a ladle of hot broth, and pour back into the pot off the heat, shaking the pan.',
      'Serve with the remaining dill.'
    ],
    tips: [
      'Simmer the offal first to mellow the taste.',
      'Add the egg and lemon off the heat.',
      'Never boil the soup after the egg is in.'
    ],
    pair: ['Easter bread', 'Dry white wine', 'Feta'],
    store: 'Keeps for 2 days in the fridge. Reheat very gently.',
    nut: [317, 26, 24, 13, 3, 2, 520]
  },

  'maltese-pastizzi': {
    d: 'Flaky Maltese pastries of puff pastry filled with ricotta or mushy peas, baked for 25 minutes, the street snack of Malta.',
    meta: 'Maltese pastizzi, flaky pastry diamonds filled with ricotta or peas, baked for 25 minutes. Twelve servings, ready in 1 hour 5 minutes.',
    kw: ['maltese pastizzi', 'pastizzi ricotta', 'maltese ricotta pastries', 'pastizzi recipe', 'maltese pea pastry'],
    why: 'Most home pastizzi come out dry or flat, and the fix is to keep the pastry cold and the filling thick. Pastizzi are the best known snack of Malta, sold from small shops called pastizzerias, and they are crisp, flaky diamonds filled with either ricotta or a mushy pea mixture, eaten hot from a paper bag.\n\nUse a ready made puff pastry, or make a quick rough puff from flour, butter and water. Roll it out and cut it into rectangles. For the filling, beat ricotta with an egg, black pepper and a pinch of salt until smooth, or mash cooked peas with onion and curry spice. **Make the filling stiff and cold**, as a wet one leaks and a warm one melts the pastry. Put a spoonful in the middle of each rectangle.\n\nFold the pastry over and seal the edges, then make a short slit in the top, so that the filling shows in a diamond shape. Brush with egg and bake at 200C for 25 minutes, until puffed and deep gold. Eat them warm, within the hour, since the pastry softens as it cools. A cup of tea is the usual partner.',
    ing: [
      '640 g ready rolled puff pastry, 2 sheets',
      '500 g ricotta',
      '1 egg, for the filling',
      '1/2 tsp black pepper',
      '1/2 tsp salt',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Heat the oven to 200C and line two trays. Beat the ricotta with the filling egg, pepper and salt until smooth.',
      'Cut the pastry into 12 rectangles, 10 x 12 cm.',
      'Put 2 tablespoons of filling in the middle of each. Fold the pastry over to make a half moon and seal the edges. Make a short slit in the top.',
      'Brush with the beaten egg and bake for 25 minutes until puffed and deep gold.',
      'Serve warm.'
    ],
    tips: [
      'Keep the pastry and filling cold.',
      'Seal the edges firmly.',
      'Eat while warm.'
    ],
    pair: ['Tea', 'Coffee', 'Kinnie'],
    store: 'Best fresh. Reheat in a hot oven.',
    nut: [300, 9, 21, 20, 1, 2, 460]
  },

  'maltese-rabbit-stew': {
    d: 'Rabbit simmered for 90 minutes in red wine, tomato, garlic and bay, the national dish of Malta known as stuffat tal-fenek.',
    meta: 'Maltese rabbit stew, rabbit simmered in red wine, tomato and garlic with peas and potatoes, cooked for 90 minutes. Four servings, ready in 1 hour 50 minutes.',
    kw: ['maltese rabbit stew', 'stuffat tal fenek', 'maltese rabbit in wine and tomato', 'national dish of malta', 'rabbit stew with peas'],
    why: 'The first sign it is ready is the smell: garlic, bay and red wine reducing in a pot, and the dark, sweet scent of tomato. Stuffat tal-fenek is the national dish of Malta, a slow stew of rabbit in red wine and tomato that is traditionally served in two courses, with the sauce over spaghetti first, and the rabbit afterwards.\n\nMarinate the rabbit overnight in red wine with garlic and bay, if you can. Drain it, pat it dry and fry it in olive oil until it is browned on all sides. **Do not skip the browning**, as it gives the sauce its colour. Add onion, garlic, tomato purée, the wine from the marinade, tomatoes and a spoonful of sugar to balance the acidity.\n\nSimmer, covered, for 60 minutes. Add the potatoes and peas and cook for 30 minutes more, until the rabbit is falling from the bone and the sauce is thick. Taste, season and add chopped parsley. In the Maltese way, serve the sauce over spaghetti first, and the rabbit and vegetables as the second course with bread. If rabbit is hard to find, use chicken.',
    ing: [
      '1.2 kg rabbit, jointed',
      '300 ml red wine',
      '6 garlic cloves',
      '2 bay leaves',
      '4 tbsp olive oil',
      '2 onions, chopped',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1 tsp caster sugar',
      '500 g potatoes, in chunks',
      '150 g frozen peas',
      '1 tsp salt',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Marinate the rabbit in the wine with half the garlic and the bay overnight if you can. Drain, keeping the wine, and pat dry.',
      'Brown the rabbit in the oil in batches for 10 minutes. Lift out.',
      'Soften the onions and remaining garlic for 5 minutes. Add the purée, wine, tomatoes and sugar and return the rabbit.',
      'Cover and simmer for 60 minutes. Add the potatoes and cook for 25 minutes, then the peas for 5 minutes.',
      'Season with the salt and scatter with the parsley.'
    ],
    tips: [
      'Brown the rabbit well.',
      'Add the potatoes late so they stay whole.',
      'Serve the sauce over spaghetti as a first course.'
    ],
    pair: ['Spaghetti', 'Crusty bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [678, 70, 41, 26, 7, 10, 750]
  },

  'timpana': {
    d: 'Baked macaroni in a rich meat and tomato sauce with eggs and cheese, enclosed in shortcrust pastry and baked for 45 minutes.',
    meta: 'Timpana, Maltese baked pasta pie of macaroni, meat sauce and eggs in pastry, baked for 45 minutes. Eight servings, ready in 1 hour 25 minutes.',
    kw: ['timpana', 'maltese baked macaroni pie', 'timpana recipe', 'pasta pie in pastry', 'maltese macaroni timbale'],
    why: 'Flour, pasta, mince, eggs: four pantry things that become a feast dish of Malta, eaten on Sundays and at weddings. Timpana is a baked pasta pie, macaroni in a rich meat sauce enclosed in a shell of shortcrust pastry, and it is cut at the table like a cake.\n\nMake the meat sauce first. Fry onion, minced beef, garlic and a little tomato purée, add tinned tomatoes and a splash of red wine, and simmer for 25 minutes until thick. **Cool the sauce before it is mixed with the pasta**, as hot sauce melts the pastry and the pie leaks. Boil the macaroni for 2 minutes less than the packet says, since it cooks again in the oven.\n\nMix the pasta with the sauce, beaten eggs and grated cheese. Line a deep dish with pastry, pour in the mixture, cover with a lid of pastry and seal the edges. Brush with egg and bake at 190C for 45 minutes, until the crust is golden. Rest for 15 minutes before cutting. The eggs bind the filling so it holds in neat slices.',
    ing: [
      '300 g plain flour',
      '150 g cold butter, cubed',
      '1 egg yolk',
      '3 tbsp cold water',
      '3 tbsp olive oil',
      '1 onion, chopped',
      '500 g minced beef',
      '3 garlic cloves',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '100 ml red wine',
      '300 g macaroni',
      '3 eggs',
      '80 g grated Parmesan',
      '1 egg, for glazing'
    ],
    st: [
      'Rub the butter into the flour, add the yolk and water and form a dough. Chill for 20 minutes.',
      'Soften the onion in the oil for 5 minutes. Add the beef and garlic and brown for 10 minutes. Add the purée, tomatoes and wine and simmer for 25 minutes. Cool.',
      'Heat the oven to 190C. Boil the macaroni for 2 minutes less than the packet says. Drain.',
      'Mix the pasta with the sauce, 3 eggs and the Parmesan.',
      'Line a deep 24 cm dish with two thirds of the pastry, fill with the pasta and cover with the rest. Seal and brush with the egg.',
      'Bake for 45 minutes until golden. Rest for 15 minutes.'
    ],
    tips: [
      'Cool the sauce before mixing.',
      'Under cook the pasta.',
      'Rest the pie before cutting.'
    ],
    pair: ['Green salad', 'Red wine', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [670, 30, 61, 34, 3, 4, 240]
  },

  'lampuki-pie': {
    d: 'A Maltese pie of mahi mahi or firm white fish baked in pastry with spinach, cauliflower, olives and raisins, in 1 hour 20 minutes.',
    meta: 'Lampuki pie, Maltese fish pie with spinach, cauliflower, olives and raisins in pastry, baked for 50 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['lampuki pie', 'maltese fish pie', 'torta tal lampuki', 'mahi mahi pie with olives', 'maltese fish and spinach pie'],
    why: 'It looks like a plain double crust pie and tastes like the Mediterranean, because the filling is made of fish, cauliflower, olives, spinach, raisins and capers. Lampuki pie, or torta tal-lampuki, is a Maltese autumn dish, made when the lampuki, the fish known as dorado or mahi mahi, arrives in September.\n\nThe lampuki can be replaced by any firm white fish, such as cod or haddock. Poach it for 8 minutes in water with a bay leaf, then flake it. Boil the cauliflower florets for 5 minutes. Soften onion and garlic in olive oil, then add tomato purée, chopped spinach, olives, capers, raisins and a splash of white wine. **Cook the vegetables until dry**, so that the pie does not leak, and cool them before filling.\n\nMix the fish into the vegetables gently. Line a deep dish with pastry, add the filling and cover with a lid. Seal, brush with egg and cut two slits in the top. Bake at 190C for 50 minutes, until deep gold. Rest for 15 minutes before cutting. It is good warm or cold, and is eaten with a green salad.',
    ing: [
      '300 g plain flour',
      '150 g cold butter, cubed',
      '1 egg yolk',
      '3 tbsp cold water',
      '700 g firm white fish or mahi mahi',
      '1 bay leaf',
      '300 g cauliflower florets',
      '3 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves',
      '1 tbsp tomato purée',
      '200 g spinach, chopped',
      '60 g black olives',
      '2 tbsp capers',
      '40 g raisins',
      '100 ml dry white wine',
      '1 egg, for glazing'
    ],
    st: [
      'Rub the butter into the flour, add the yolk and water and form a dough. Chill for 20 minutes.',
      'Poach the fish with the bay in water for 8 minutes. Flake it. Boil the cauliflower for 5 minutes and drain.',
      'Soften the onion and garlic in the oil for 5 minutes. Add the purée, spinach, olives, capers, raisins and wine and cook for 10 minutes until dry. Cool.',
      'Heat the oven to 190C. Mix the fish and cauliflower into the vegetables.',
      'Line a deep 24 cm dish with two thirds of the pastry, fill and cover with the rest. Seal, brush with the egg and slit the top.',
      'Bake for 50 minutes until deep gold. Rest for 15 minutes.'
    ],
    tips: [
      'Cook the vegetable mix until dry.',
      'Flake the fish gently.',
      'Rest before cutting.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Lemon wedges'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [612, 31, 50, 32, 4, 6, 350]
  },

  'imqaret': {
    untimed: ['cooling completely'],
    d: 'Fried Maltese pastry diamonds filled with a spiced date paste, dough rested for 1 hour and fried in hot oil for 20 minutes.',
    meta: 'Imqaret, Maltese fried pastry diamonds filled with spiced date paste, fried for 20 minutes. Twenty servings, ready in 1 hour plus resting.',
    kw: ['imqaret', 'maltese date pastries', 'fried date filled pastry diamonds', 'imqaret recipe', 'maltese street dessert'],
    why: 'Most home versions come out greasy, and the fix is to fry them in oil that is hot enough and to drain them well. Imqaret are fried diamonds of pastry filled with a paste of dates, flavoured with aniseed, orange and clove, and eaten hot in the streets of Valletta, usually with ice cream.\n\nThe dough is flour, butter, a little sugar and water, mixed to a soft paste and rested for 1 hour. The filling needs dates, which are cooked with a little water, orange zest, aniseed and ground cloves until soft and then mashed to a thick paste. **Let the paste cool completely** so that it does not melt the dough and does not leak in the oil. Roll the dough into long, thin strips.\n\nPut a line of paste along each strip, fold the dough over, press the edges, and cut into diamonds about 6 cm long. Seal well. Fry in hot oil at 180C for 3 minutes on each side, until deep gold and crisp, then drain on kitchen paper. Eat hot, with a scoop of vanilla ice cream. They are best on the day.',
    ing: [
      '300 g plain flour',
      '60 g butter, softened',
      '1 tbsp caster sugar',
      '120 ml water',
      '300 g stoned dates',
      '100 ml water, for the dates',
      '1 orange, zest',
      '1 tsp ground aniseed',
      '1/4 tsp ground cloves',
      '120 ml olive oil absorbed, from 1 litre for frying',
      '300 ml vanilla ice cream, to serve'
    ],
    st: [
      'Mix the flour, butter, sugar and 120 ml water to a soft dough. Rest for 1 hour.',
      'Simmer the dates with the 100 ml water, zest, aniseed and cloves for 10 minutes. Mash to a paste and cool completely.',
      'Roll the dough thin into strips 10 cm wide. Put a line of date paste along each, fold over, press the edges and cut into 20 diamonds. Seal well.',
      'Heat the oil to 180C and fry in batches for 3 minutes on each side until deep gold.',
      'Drain on kitchen paper and serve hot with the ice cream.'
    ],
    tips: [
      'Cool the date paste before filling.',
      'Seal the edges firmly.',
      'Eat while hot.'
    ],
    pair: ['Vanilla ice cream', 'Coffee', 'Tea'],
    store: 'Best fresh the same day.',
    rest: [60, 'Resting'],
    nut: [210, 2, 28, 10, 2, 14, 10]
  },

  'cypriot-souvla': {
    d: 'Large pieces of marinated pork or chicken grilled slowly on a long skewer over charcoal, a Cypriot Sunday feast, in 50 minutes.',
    meta: 'Cypriot souvla, large chunks of marinated meat grilled slowly on a skewer with lemon and oregano, cooked for 30 minutes. Four servings, ready in 1 hour 20 minutes.',
    kw: ['cypriot souvla', 'cyprus souvla', 'large skewered grilled pork', 'souvla recipe', 'charcoal grilled meat cyprus'],
    why: 'Pork, lemon, oregano, charcoal: four things, and a Sunday in a Cypriot village garden. Souvla is the Cypriot barbecue of large chunks of meat, much bigger than a kebab, threaded onto a long skewer and grilled slowly over charcoal for an hour or more, so the outside chars and the inside stays juicy.\n\nCut pork shoulder or chicken thighs into 6 cm chunks, which are far bigger than a kebab, since small pieces dry out. Marinate them for 30 minutes in olive oil, lemon juice, crushed garlic, dried oregano, salt and a little red wine. **Thread them tightly on a metal skewer** with a few pieces of fat or onion between them to keep them moist. Leave a small gap at each end of the skewer for handling.\n\nGrill over medium coals, turning every few minutes, for about 30 minutes for chicken and a little longer for pork, until the meat is cooked through and charred in places. Rest for 5 minutes, then slide the pieces off the skewer onto a board. Serve with pitta, tomatoes, onions, lemon and a bowl of tzatziki. Season with salt and a squeeze of lemon at the table.',
    ing: [
      '900 g pork shoulder or chicken thighs, in 6 cm chunks',
      '4 tbsp olive oil',
      '2 lemons, juice',
      '4 garlic cloves, crushed',
      '2 tsp dried oregano',
      '1 tsp salt',
      '50 ml red wine',
      '4 pitta breads',
      '2 tomatoes, sliced',
      '1 red onion, sliced',
      '200 g tzatziki'
    ],
    st: [
      'Mix the oil, lemon juice, garlic, oregano, salt and wine. Toss the meat in it and marinate for 30 minutes.',
      'Thread the meat tightly onto 2 metal skewers.',
      'Grill over medium coals for 30 minutes, turning every few minutes, until cooked through and charred.',
      'Rest for 5 minutes, slide off the skewers and serve with the pitta, tomatoes, onion and tzatziki.'
    ],
    tips: [
      'Cut the meat into large chunks.',
      'Thread the pieces tightly.',
      'Turn often over medium coals.'
    ],
    pair: ['Pitta', 'Tzatziki', 'Greek salad', 'Red wine'],
    store: 'Best fresh. Keeps for 2 days in the fridge.',
    nut: [729, 46, 26, 49, 3, 7, 1000]
  },

  'cypriot-tahini-pies': {
    d: 'Spiral bread rolls of yeast dough rolled around a sweet tahini and cinnamon filling, risen for 1 hour and baked for 25 minutes.',
    meta: 'Cypriot tahini pies, spiral rolls of yeast dough with a sweet tahini and cinnamon filling, baked for 25 minutes. Eight servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['cypriot tahini pies', 'tahinopita', 'tahini and cinnamon rolls', 'cypriot tahini bread', 'tahini spiral rolls'],
    why: 'It comes from the tradition of Lent, when meat and dairy are not eaten, and tahini pies are the sweet treat of the Cypriot fasting days. Tahinopites are small spiral rolls of yeast dough, spread with tahini, sugar and cinnamon, and sold in bakeries all over the island.\n\nThe dough is flour, yeast, olive oil, sugar and warm water, kneaded for 8 minutes and left to rise for 1 hour until doubled. For the filling, mix tahini with sugar and cinnamon into a thick, spreadable paste. **Stir the tahini well first**, as the oil separates in the jar and the thick layer at the bottom should be mixed back in. Add a spoonful of orange zest if you like.\n\nRoll the dough out into a thin rectangle, spread it evenly with the filling, roll it up tightly from the long side and cut into 8 slices. Lay them cut side up in a lined tray and leave for 20 minutes. Brush with oil and bake at 200C for 25 minutes, until golden and puffed. Cool for 10 minutes. The rolls keep for 3 days and are good with coffee.',
    ing: [
      '400 g strong bread flour',
      '7 g instant yeast',
      '40 g caster sugar',
      '1 tsp salt',
      '60 ml olive oil',
      '220 ml lukewarm water',
      '150 g tahini',
      '100 g caster sugar, for the filling',
      '2 tsp ground cinnamon',
      '1 orange, zest',
      '1 tbsp olive oil, for brushing'
    ],
    st: [
      'Mix the flour, yeast, 40 g sugar, salt, oil and water and knead for 8 minutes. Cover and leave to rise for 1 hour.',
      'Mix the tahini, 100 g sugar, cinnamon and zest to a thick paste.',
      'Roll the dough into a 30 x 40 cm rectangle, spread with the paste, roll up tightly from the long side and cut into 8 slices.',
      'Lay the slices cut side up in a lined tray and leave for 20 minutes. Heat the oven to 200C.',
      'Brush with the oil and bake for 25 minutes until golden.'
    ],
    tips: [
      'Stir the tahini well before using it.',
      'Roll the dough up tightly.',
      'Cool for 10 minutes before eating.'
    ],
    pair: ['Coffee', 'Tea', 'Orange juice'],
    store: 'Keeps for 3 days wrapped. Freeze for 2 months.',
    rest: [80, 'Rising'],
    nut: [408, 8, 49, 20, 4, 22, 560]
  },

  'kotlet-schabowy': {
    d: 'A Polish breaded pork loin cutlet beaten thin and fried in lard until deep gold, served with potatoes and cucumber salad.',
    meta: 'Kotlet schabowy, Polish breaded pork cutlet fried in lard until golden, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['kotlet schabowy', 'polish breaded pork cutlet', 'polish pork schnitzel', 'schabowy recipe', 'breaded pork loin with potatoes'],
    why: 'What do you eat in Poland on a Sunday? In most homes, kotlet schabowy: a pork loin chop beaten thin, coated in egg and breadcrumbs and fried in lard until the crust crackles. It is served with mashed or boiled potatoes dressed with dill, and a salad of cucumbers in soured cream.\n\nAsk the butcher for pork loin with a thin rim of fat. Cut it into 1.5 cm slices and beat each between sheets of cling film to 5 mm, evenly, because uneven slices cook unevenly. Season with salt and pepper and dip in flour, beaten egg and fine breadcrumbs. **Press the crumbs on firmly and rest the cutlets for 10 minutes** so the crust sets and stays on in the pan.\n\nMelt lard in a wide pan to a depth of 1 cm and fry the cutlets over medium high heat for 3 to 4 minutes on each side, until deep gold. Drain on kitchen paper. Serve at once with potatoes, the cucumber salad, and lemon wedges. The Polish way is to eat them with a knife and fork and the dill potatoes soaking up the lard.',
    ing: [
      '600 g pork loin chops',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '40 g plain flour',
      '2 eggs, beaten',
      '100 g fine dry breadcrumbs',
      '60 g lard absorbed, from 150 g for frying',
      '800 g potatoes, boiled',
      '3 tbsp chopped dill',
      '30 g butter',
      '1 cucumber, sliced',
      '150 g soured cream',
      '1 lemon, in wedges'
    ],
    st: [
      'Beat the chops between cling film to 5 mm. Season with the salt and pepper.',
      'Coat in the flour, egg and breadcrumbs, pressing the crumbs on firmly. Rest for 10 minutes.',
      'Boil the potatoes for 20 minutes. Drain and toss with the butter and dill. Mix the cucumber with the soured cream.',
      'Melt the lard in a wide pan and fry the cutlets over medium high heat for 3 to 4 minutes on each side until deep gold.',
      'Drain on kitchen paper and serve with the potatoes, cucumber salad and lemon.'
    ],
    tips: [
      'Beat the pork evenly thin.',
      'Rest the coated cutlets.',
      'Fry in lard for the best flavour.'
    ],
    pair: ['Dill potatoes', 'Cucumber salad', 'Sauerkraut', 'Beer'],
    store: 'Best fresh. Reheat in a hot oven.',
    nut: [804, 45, 66, 40, 7, 6, 910]
  },

  'krupnik': {
    d: 'A thick Polish barley soup with root vegetables and smoked meat or chicken, simmered for 1 hour.',
    meta: 'Krupnik, thick Polish barley soup with carrots, potato and smoked meat, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['krupnik', 'polish barley soup', 'barley soup with vegetables and smoked meat', 'krupnik recipe', 'pearl barley soup polish'],
    why: 'Flour, water and a handful of barley: three things you already own, though the soup is rich enough to feed a table. Krupnik is the Polish barley soup, a thick, comforting one, flavoured with root vegetables, a smoked bone or sausage and a handful of dried mushrooms. It is found in every Polish home in winter.\n\nSoak the dried mushrooms in hot water for 20 minutes, and strain the liquid. Put the smoked bone or bacon in a pot with water, bring to a simmer and cook for 20 minutes to make a broth. **Rinse the pearl barley well before adding it**, since the starch on the grains clouds the soup. Add the carrots, parsnip, celery, leek and potato, the barley and the mushroom liquid.\n\nSimmer for 40 minutes, until the barley is tender and the soup has thickened. It will thicken further as it stands, so add hot water when you reheat it. Finish with chopped dill, salt, pepper and a spoonful of soured cream. Serve with dark rye bread. The flavour deepens overnight.',
    ing: [
      '15 g dried porcini mushrooms',
      '300 g smoked bacon or smoked ham hock',
      '2 litres water',
      '150 g pearl barley, rinsed',
      '3 carrots, diced',
      '150 g parsnip, diced',
      '1 celery stick, diced',
      '1 leek, sliced',
      '400 g potatoes, diced',
      '2 bay leaves',
      '3 tbsp chopped dill',
      '1 tsp salt',
      '150 g soured cream'
    ],
    st: [
      'Soak the mushrooms in 200 ml of hot water for 20 minutes. Strain, keeping the liquid, and chop the mushrooms.',
      'Simmer the smoked meat in the 2 litres of water for 20 minutes.',
      'Add the barley, carrots, parsnip, celery, leek, bay, mushrooms and their liquid. Simmer for 25 minutes.',
      'Add the potatoes and cook for 15 minutes more, until the barley is tender.',
      'Remove the bay, shred the meat and return it. Stir in the dill and salt and serve with the soured cream.'
    ],
    tips: [
      'Rinse the barley first.',
      'Add water when reheating, as it thickens.',
      'Use the mushroom liquid for flavour.'
    ],
    pair: ['Rye bread', 'Soured cream', 'Vodka'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [339, 16, 44, 11, 8, 6, 940]
  }
};
