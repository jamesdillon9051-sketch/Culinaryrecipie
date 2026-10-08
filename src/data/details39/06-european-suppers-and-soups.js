'use strict';

/**
 * Volume thirty-nine — European suppers, soups and weeknight pasta.
 *
 * Meatballs and stews from Turkey, Greece and Germany, French and Italian
 * soups and salads, and four quick suppers that cooks reach for midweek.
 * Times are the recipe's own; hobs and ovens differ, so each method says
 * when to check early. Nutrition is estimated from the ingredient list by
 * npm run calc.
 */

module.exports = {
  'turkish-meatballs': {
    d: 'Lamb and beef kofte flavoured with cumin, paprika and parsley, grilled for 12 minutes and served with yoghurt and flatbread.',
    meta: 'Turkish meatballs: lamb and beef kofte flavoured with cumin, paprika and parsley, grilled until charred and served with yoghurt. Four servings.',
    kw: ['turkish meatballs', 'turkish kofte', 'izgara kofte', 'grilled turkish meatballs', 'turkish meatballs with yoghurt'],
    why: 'Kofte are the signature of Turkish grilling: oval meatballs of spiced mince, charred on the outside and juicy within. They are quick to make and honest in flavour, with nothing to hide behind.\n\nThe mince should be about a fifth fat, which is what keeps the kofte moist on a hot grill. Mix it with grated onion, parsley, cumin, paprika, salt and a little breadcrumb. **Squeeze the grated onion in a cloth first**, so the mixture is not wet.\n\nKnead for 2 minutes until sticky, then chill for 20 minutes. Shape into ovals about 8 cm long, pressing them a little flat so they cook evenly.\n\nGrill over high heat for 12 minutes, turning every 3 minutes, until charred in places and cooked through. If your grill runs hot, check at 9 minutes. Serve in flatbread with sliced tomato, red onion and sumac, and a spoonful of yoghurt with a little garlic stirred in.',
    ing: [
      '350 g lamb mince',
      '350 g beef mince',
      '1 onion, grated and squeezed',
      '4 tbsp chopped parsley',
      '2 tsp ground cumin',
      '2 tsp paprika',
      '2 tbsp breadcrumbs',
      '1 tsp salt',
      '4 flatbreads',
      '150 g plain yoghurt',
      '1 garlic clove, grated',
      '2 tomatoes, sliced',
      '1/2 red onion, sliced',
      '1 tsp sumac'
    ],
    st: [
      'Mix the lamb, beef, grated onion, parsley, cumin, paprika, breadcrumbs and salt and knead for 2 minutes. Chill for 20 minutes.',
      'Shape into 12 ovals and press slightly flat.',
      'Heat the grill to high and cook the kofte for 12 minutes, turning every 3 minutes.',
      'Stir the garlic into the yoghurt. Serve the kofte in the flatbreads with the tomato, onion, sumac and yoghurt.'
    ],
    tips: [
      'Squeeze the grated onion dry.',
      'Chill the mixture before shaping.',
      'If your grill runs hot, check at 9 minutes.',
      'Do not press them too thin.'
    ],
    pair: ['Rice pilaf', 'Shepherd salad', 'Grilled peppers', 'Ayran'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot pan.',
    nut: [670, 44, 47, 34, 4, 7, 1110]
  },

  'greek-lamb-stew': {
    d: 'Lamb shoulder simmered for 2 hours with tomatoes, oregano, lemon and potatoes in a Greek-style casserole.',
    meta: 'Greek lamb stew: lamb shoulder simmered with tomatoes, oregano, lemon and potatoes in a Greek-style casserole. Six servings.',
    kw: ['greek lamb stew', 'greek lamb casserole', 'lamb stew with lemon and oregano', 'lamb and potato stew greek style', 'greek lamb with tomatoes'],
    why: 'A Greek lamb stew tastes of the Mediterranean in a way that an English one does not: tomato and oregano in place of thyme and stock, with lemon to lift the whole dish at the end.\n\nChoose lamb shoulder on the bone if you can, since the bone adds body. Cut it into big pieces, about 5 cm, which hold together through a long cook. **Brown it well**, in batches, until deeply coloured on every side.\n\nSoften onion and garlic in the pan, add the wine and let it bubble for 2 minutes, then tip in the tomatoes, oregano, bay and cinnamon. Return the lamb, cover and simmer very gently for 1 hour 15 minutes.\n\nAdd the potatoes and simmer for 45 minutes more, uncovered, so that the sauce thickens. If your hob runs hot, check at 1 hour 30 minutes. Finish with lemon juice and a handful of chopped parsley, and serve with crusty bread.',
    ing: [
      '1.2 kg lamb shoulder, cut into 5 cm pieces',
      '3 tbsp olive oil',
      '2 onions, chopped',
      '4 garlic cloves, chopped',
      '120 ml white wine',
      '800 g tinned chopped tomatoes',
      '1 tbsp dried oregano',
      '2 bay leaves',
      '2 g cinnamon stick',
      '700 g potatoes, cut into chunks',
      '1 tsp salt',
      '1 lemon, juiced',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Brown the lamb in batches in the hot oil, then lift it out.',
      'Soften the onions and garlic for 6 minutes, add the wine and bubble for 2 minutes. Add the tomatoes, oregano, bay and cinnamon.',
      'Put the lamb back, cover the pan and simmer very gently for 1 hour 15 minutes.',
      'Add the potatoes and salt, uncover and simmer for 45 minutes. Stir in the lemon juice and parsley.'
    ],
    tips: [
      'Brown the lamb in batches.',
      'Use large pieces of meat.',
      'If your hob runs hot, check at 1 hour 30 minutes.',
      'Finish with lemon.'
    ],
    pair: ['Crusty bread', 'Greek salad', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 4 days and improves overnight. Reheat gently.',
    nut: [699, 38, 31, 47, 6, 6, 550]
  },

  'italian-sausage-soup': {
    d: 'Italian sausage, potatoes, kale and white beans simmered for 25 minutes in a garlicky broth with a splash of cream.',
    meta: 'Italian sausage soup: Italian sausage, potatoes, kale and white beans simmered in a garlicky broth with a splash of cream. Six servings.',
    kw: ['italian sausage soup', 'italian sausage and kale soup', 'sausage and white bean soup', 'tuscan style sausage soup', 'hearty italian sausage soup'],
    why: 'This is a soup that works for dinner: sausage gives it salt, fennel and fat, potatoes give it body, and kale gives it colour and chew. It takes about half an hour, and the flavour tastes like it took hours.\n\nSquash the sausage out of its skins into a hot pot and break it up as it browns, for 8 minutes. **Leave a spoonful of fat in the pot** and pour the rest off, since it flavours the broth without making it greasy.\n\nSoften the onion and garlic in the same pot, then add the stock, potatoes and a pinch of chilli, and simmer for 12 minutes until the potato is just tender. Stir in the white beans and kale for the last 5 minutes.\n\nIf your hob runs hot, check the potatoes at 10 minutes, since they break up if overcooked. Stir in the cream off the heat, taste for salt, and serve with parmesan and crusty bread.',
    ing: [
      '500 g Italian pork sausages',
      '1 onion, chopped',
      '4 garlic cloves, chopped',
      '1.5 litres chicken stock',
      '500 g potatoes, diced',
      '1/2 tsp chilli flakes',
      '400 g tinned cannellini beans, drained',
      '150 g kale, stalks removed and chopped',
      '100 ml double cream',
      '30 g parmesan, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Squeeze the sausage meat from its skins into a hot pot and brown for 8 minutes, breaking it up. Pour off all but 1 tbsp of fat.',
      'Soften the onion and garlic for 4 minutes. Add the stock, potatoes and chilli and simmer for 12 minutes.',
      'Add the beans and kale and simmer for 5 minutes.',
      'Off the heat, stir in the cream and salt and serve with the parmesan.'
    ],
    tips: [
      'Pour off excess fat.',
      'Add the kale near the end.',
      'If your hob runs hot, check the potatoes at 10 minutes.',
      'Add the cream off the heat.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Parmesan', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat gently without boiling.',
    nut: [480, 23, 34, 28, 7, 4, 1980]
  },

  'tuscan-white-bean-salad': {
    d: 'Cannellini beans dressed with olive oil, lemon, red onion, sage and tomatoes, served at room temperature.',
    meta: 'Tuscan white bean salad: cannellini beans dressed with olive oil, lemon, red onion, sage and tomatoes, served at room temperature. Four servings.',
    kw: ['tuscan white bean salad', 'italian white bean salad', 'cannellini bean salad', 'tuscan bean salad with sage', 'white bean and tomato salad'],
    why: 'A bean salad is only as good as the dressing and the patience: the beans soak up what they are given while warm. In Tuscany it is a staple, and it takes ten minutes of work.\n\nWarm the drained beans in a pan with a little oil, garlic and a few sage leaves for 4 minutes. **Dress them while still warm**: they absorb the oil and lemon like sponges, and the flavour goes right through.\n\nCool them for 10 minutes, then fold in the red onion, which you have soaked in cold water for 5 minutes to take off the sharpest bite, the cherry tomatoes and parsley.\n\nSeason well. Beans need plenty of salt, pepper and acid, and tinned ones are bland until they get it. Finish with a good olive oil and let the salad sit for 20 minutes before serving. Serve on toasted bread with a little more oil, or alongside grilled meat or fish.',
    ing: [
      '800 g tinned cannellini beans, drained',
      '4 tbsp olive oil',
      '2 garlic cloves, sliced',
      '6 sage leaves',
      '1/2 red onion, thinly sliced',
      '250 g cherry tomatoes, halved',
      '3 tbsp chopped parsley',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Warm the beans in a pan with 1 tbsp of the oil, the garlic and sage for 4 minutes. Tip into a bowl.',
      'Dress the warm beans with the lemon juice, remaining oil, salt and pepper and cool for 10 minutes.',
      'Soak the onion in cold water for 5 minutes and drain.',
      'Fold the onion, tomatoes and parsley into the beans and leave for 20 minutes before serving.'
    ],
    tips: [
      'Dress the beans while warm.',
      'Soak the onion to take off the bite.',
      'Season generously.',
      'Let the salad stand before serving.'
    ],
    pair: ['Toasted bread', 'Grilled fish', 'Roast lamb', 'Prosciutto'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before serving.',
    nut: [331, 14, 35, 15, 11, 3, 900]
  },

  'spanish-garlic-soup': {
    d: 'Garlic, stale bread, paprika and stock simmered for 25 minutes and finished with a poached egg in each bowl.',
    meta: 'Spanish garlic soup: garlic, stale bread, paprika and stock simmered and finished with a poached egg in each bowl. Four servings.',
    kw: ['spanish garlic soup', 'sopa de ajo', 'castilian garlic soup', 'garlic and bread soup with egg', 'traditional spanish garlic soup'],
    why: 'Sopa de ajo is a poor kitchen\'s soup that happens to be extraordinary: a few cloves of garlic, stale bread, paprika and stock. It is the kind of dish that people in Castile make when there is nothing else in the house.\n\nSlice the garlic thinly and fry it gently in olive oil. **Do not let it brown past pale gold**, since burnt garlic makes the whole soup bitter. Add the bread and fry until it has soaked up the oil, then stir in the paprika off the heat, since it burns in seconds.\n\nPour in the stock, bring to the boil and simmer for 20 minutes, until the bread has dissolved into a thick, silky soup. If your hob runs hot, check at 15 minutes and add water if it thickens too much.\n\nCrack the eggs into the simmering soup, or into the bowls, and poach them for 3 minutes until the whites are set and the yolks still run. Serve with a drizzle of oil.',
    ing: [
      '4 tbsp olive oil',
      '8 garlic cloves, sliced',
      '150 g stale country bread, torn',
      '2 tsp smoked paprika',
      '1 litre chicken stock',
      '1/2 tsp salt',
      '4 eggs',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Fry the garlic in the oil over low heat for 2 minutes until pale gold. Add the bread and fry for 3 minutes.',
      'Off the heat, stir in the paprika, then pour in the stock and salt.',
      'Simmer for 20 minutes until the bread dissolves.',
      'Crack in the eggs and poach for 3 minutes. Scatter with the parsley.'
    ],
    tips: [
      'Do not brown the garlic.',
      'Add the paprika off the heat.',
      'If your hob runs hot, check at 15 minutes.',
      'Poach the eggs gently.'
    ],
    pair: ['Crusty bread', 'Jamon', 'Green salad', 'Dry sherry'],
    store: 'Best eaten at once. The soup base keeps in the fridge for 2 days; poach fresh eggs when serving.',
    nut: [324, 13, 23, 20, 2, 2, 1370]
  },

  'french-onion-chicken': {
    d: 'Chicken breasts browned and finished with slow-cooked onions, white wine, thyme and melted gruyere.',
    meta: 'French onion chicken: chicken breasts browned and finished with slow-cooked onions, white wine, thyme and melted gruyere. Four servings.',
    kw: ['french onion chicken', 'french onion chicken bake', 'chicken with caramelised onions and gruyere', 'french onion soup chicken', 'cheesy french onion chicken'],
    why: 'French onion soup has a flavour everyone knows: sweet, dark onions, wine and a lid of melted cheese. This borrows the idea and puts it on a chicken breast, which is a good surface for it.\n\nThe onions are the whole thing, and they take time. Slice them thinly and cook them in butter over medium-low heat for 25 minutes, stirring often, until deep brown and jammy. **Do not hurry them with high heat**, since scorched onions are bitter, not sweet.\n\nBrown the chicken in a separate pan for 4 minutes a side and set it in an ovenproof dish. Add the wine and thyme to the onions and let it bubble for 2 minutes, then spoon over the chicken.\n\nTop with gruyere and cook at 200°C for 15 minutes, until the cheese is bubbling and brown. If your oven runs hot, check at 12 minutes. Serve with the onion sauce from the dish.',
    ing: [
      '4 chicken breasts, about 700 g',
      '1 tsp salt',
      '2 tbsp olive oil',
      '40 g butter',
      '4 onions, thinly sliced',
      '120 ml dry white wine',
      '2 g thyme sprigs',
      '150 g gruyere, grated'
    ],
    st: [
      'Heat the oven to 200°C. Melt the butter and cook the onions over medium-low heat for 25 minutes, stirring often, until deep brown.',
      'Season the chicken with the salt and brown in the oil for 4 minutes per side. Set in an ovenproof dish.',
      'Add the wine and thyme to the onions and bubble for 2 minutes. Spoon over the chicken and top with the gruyere.',
      'Cook for 15 minutes until bubbling and browned.'
    ],
    tips: [
      'Cook the onions slowly.',
      'Brown the chicken before baking.',
      'If your oven runs hot, check at 12 minutes.',
      'Use a good melting cheese.'
    ],
    pair: ['Green beans', 'Crusty bread', 'Mashed potato', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [540, 52, 11, 32, 2, 5, 790]
  },

  'french-lentils': {
    d: 'Green Puy-style lentils simmered for 30 minutes with carrot, onion, thyme and garlic and finished with Dijon and red wine vinegar.',
    meta: 'French lentils: green lentils simmered with carrot, onion, thyme and garlic and finished with Dijon mustard and red wine vinegar. Four servings.',
    kw: ['french lentils', 'french green lentils', 'puy lentils with dijon', 'lentils with thyme and garlic', 'french style lentils'],
    why: 'The French way with lentils is to keep them whole, with a little bite, and to dress them well. Green Puy-style lentils hold their shape in a way that red ones never do, and that makes them good for a side or a salad.\n\nSoften a finely diced carrot, onion and celery in olive oil for 8 minutes to build a base. Add the garlic, thyme and bay, then the rinsed lentils and cold water to cover by 3 cm. **Do not salt at the start**: salt can toughen the skins and slow the cooking.\n\nSimmer gently for 30 minutes, until tender but still holding their shape. If your hob runs hot, check at 22 minutes. Drain off any excess liquid.\n\nWhile the lentils are still warm, toss with Dijon mustard, red wine vinegar, olive oil and salt. The warm lentils drink the dressing. Serve warm with sausages or fish, or cold in a salad with goat cheese.',
    ing: [
      '250 g green lentils, rinsed',
      '3 tbsp olive oil',
      '1 carrot, finely diced',
      '1 onion, finely diced',
      '1 celery stick, finely diced',
      '3 garlic cloves, crushed',
      '2 g thyme sprigs',
      '2 bay leaves',
      '2 tsp Dijon mustard',
      '1 tbsp red wine vinegar',
      '1 tsp salt',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Soften the carrot, onion and celery in 1 tbsp of the oil for 8 minutes. Add the garlic, thyme and bay.',
      'Add the lentils and cold water to cover by 3 cm. Simmer gently for 30 minutes until tender. Drain.',
      'Toss the warm lentils with the mustard, vinegar, remaining oil and salt.',
      'Remove the thyme and bay and stir in the parsley.'
    ],
    tips: [
      'Do not salt at the start.',
      'Simmer gently so they keep their shape.',
      'If your hob runs hot, check at 22 minutes.',
      'Dress the lentils while warm.'
    ],
    pair: ['Sausages', 'Grilled salmon', 'Goat cheese', 'Roast chicken'],
    store: 'Keeps in the fridge for 4 days. Good warm or cold.',
    nut: [339, 17, 43, 11, 8, 3, 660]
  },

  'german-meatballs': {
    d: 'Pork and beef meatballs poached for 15 minutes in broth and served in a creamy caper sauce, Königsberger Klopse style.',
    meta: 'German meatballs: pork and beef meatballs poached in broth and served in a creamy caper and lemon sauce. Four servings.',
    kw: ['german meatballs', 'konigsberger klopse', 'german meatballs in caper sauce', 'klopse with capers', 'german poached meatballs'],
    why: 'These are Klopse, poached meatballs in a white sauce sharpened with capers and lemon, and they are one of the great comfort dishes of northern Germany. They are not browned, so they are soft and pale and very tender.\n\nSoak a slice of stale bread in milk, squeeze it out and mix it into the pork and beef with onion, an egg, anchovy and lemon zest. **The soaked bread is what makes them light.** Shape into balls the size of a golf ball with wet hands.\n\nLower them into barely simmering stock and poach for 15 minutes. Do not boil, which toughens them and breaks them up. They are done when they float and the centre is no longer pink.\n\nFor the sauce, make a roux from butter and flour, whisk in 400 ml of the poaching stock and simmer for 5 minutes. Add cream, capers and lemon juice. Serve with boiled potatoes and beetroot.',
    ing: [
      '300 g pork mince',
      '300 g beef mince',
      '1 slice white bread, about 30 g',
      '60 ml milk',
      '1 small onion, grated',
      '1 egg',
      '10 g anchovy fillets, chopped',
      '1 lemon, zest and juice',
      '1 tsp salt',
      '1.2 litres chicken stock',
      '30 g butter',
      '30 g plain flour',
      '100 ml double cream',
      '3 tbsp capers'
    ],
    st: [
      'Soak the bread in the milk, squeeze out and mix with the pork, beef, onion, egg, anchovy, lemon zest and salt. Roll into 16 balls with wet hands.',
      'Poach the balls in the barely simmering stock for 15 minutes. Lift out and keep warm.',
      'Melt the butter, stir in the flour for 1 minute and whisk in 400 ml of the stock. Simmer for 5 minutes.',
      'Stir in the cream, capers and lemon juice, add the meatballs and warm through.'
    ],
    tips: [
      'Squeeze the soaked bread.',
      'Poach, do not boil.',
      'If your hob runs hot, keep the heat low.',
      'Balance the sauce with lemon.'
    ],
    pair: ['Boiled potatoes', 'Beetroot', 'Green beans', 'Pickled cucumber'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [586, 35, 17, 42, 1, 3, 1970]
  },

  'german-red-cabbage': {
    d: 'Red cabbage braised for 1 hour with apple, onion, cider vinegar and cloves until soft, sweet and sour.',
    meta: 'German red cabbage: red cabbage braised with apple, onion, cider vinegar and cloves until soft, sweet and sour. Six servings.',
    kw: ['german red cabbage', 'rotkohl', 'german braised red cabbage', 'sweet and sour red cabbage with apple', 'red cabbage with cloves'],
    why: 'Rotkohl is the side dish that comes with a German Sunday roast, and it is a lesson in patience: the long cooking turns a crunchy, bitter cabbage into something silky and sweet-sour.\n\nShred the cabbage finely, which is easiest with a sharp knife or a food processor. Soften a chopped onion in butter, then add the cabbage, a grated apple, the sugar, vinegar, cloves and a bay leaf. **The vinegar is not optional**: it keeps the cabbage a bright red and stops it turning blue-grey.\n\nCover and simmer very gently for 1 hour, stirring every 15 minutes and adding a splash of water if the pan looks dry. If your hob runs hot, check at 45 minutes.\n\nThe cabbage is ready when it is tender and glossy, with most of the liquid absorbed. Taste and adjust, with more vinegar for sharpness or sugar for sweetness. Stir in a spoon of redcurrant jelly at the end for a shine.',
    ing: [
      '1 kg red cabbage, finely shredded',
      '30 g butter',
      '1 onion, chopped',
      '2 apples, peeled and grated',
      '3 tbsp brown sugar',
      '4 tbsp cider vinegar',
      '1 g whole cloves',
      '2 bay leaves',
      '1 tsp salt',
      '100 ml water',
      '20 g redcurrant jelly'
    ],
    st: [
      'Melt the butter and soften the onion for 5 minutes.',
      'Add the cabbage, apples, sugar, vinegar, cloves, bay, salt and water and stir well.',
      'Cover and simmer very gently for 1 hour, stirring every 15 minutes, until tender.',
      'Remove the cloves and bay and stir in the redcurrant jelly.'
    ],
    tips: [
      'Shred the cabbage fine.',
      'Keep the vinegar in.',
      'If your hob runs hot, check at 45 minutes.',
      'Adjust the sweet and sour at the end.'
    ],
    pair: ['Roast pork', 'Sausages', 'Dumplings', 'Roast duck'],
    store: 'Keeps in the fridge for 5 days and improves on reheating. It also freezes well.',
    nut: [181, 3, 31, 5, 5, 22, 440]
  },

  'hamburger-helper-style-pasta': {
    d: 'Beef mince, macaroni, cheddar and a creamy seasoned sauce cooked together in one pan for 20 minutes.',
    meta: 'Hamburger helper style pasta: beef mince, macaroni, cheddar and a creamy seasoned sauce cooked together in one pan. Four servings in 25 minutes.',
    kw: ['hamburger helper style pasta', 'homemade hamburger helper', 'cheeseburger macaroni skillet', 'beef and macaroni skillet', 'beef and cheese pasta skillet'],
    why: 'The boxed version is a pantry classic, and the homemade one is better in every way: fewer additives, a real cheese sauce and a flavour that tastes of beef instead of powder. It is also quick to make.\n\nBrown the mince in a large, deep pan until no pink remains, drain off any excess fat and season with garlic powder, onion powder and paprika. **Brown it properly**, until it takes some colour, since grey mince makes a dull dinner.\n\nPour in the milk and stock, bring to a simmer and add the macaroni. Cook, stirring often, for 12 minutes, until the pasta is tender and the liquid has reduced to a creamy sauce. If your hob runs hot, check at 10 minutes, as the sauce catches easily.\n\nStir in the cheddar until melted, and add mustard and ketchup if you like a tangier flavour. Let it stand for 3 minutes. The sauce thickens as it cools.',
    ing: [
      '500 g beef mince',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp paprika',
      '1 tsp salt',
      '500 ml milk',
      '500 ml beef stock',
      '250 g macaroni',
      '200 g cheddar, grated',
      '1 tbsp mustard',
      '2 tbsp ketchup'
    ],
    st: [
      'Brown the mince in a deep pan for 8 minutes, draining off excess fat. Stir in the garlic powder, onion powder, paprika and salt.',
      'Pour in the milk and stock, bring to a simmer and add the macaroni.',
      'Cook for 12 minutes, stirring often, until the pasta is tender and the sauce is creamy.',
      'Stir in the cheddar, mustard and ketchup. Stand for 3 minutes.'
    ],
    tips: [
      'Brown the mince properly.',
      'Stir often so the pasta does not stick.',
      'If your hob runs hot, check at 10 minutes.',
      'Rest before serving.'
    ],
    pair: ['Green beans', 'Garlic bread', 'Coleslaw', 'Sweetcorn'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [801, 50, 58, 41, 2, 10, 1580]
  },

  'beef-and-mushroom-stroganoff-bake': {
    d: 'Beef strips, mushrooms and egg noodles in a soured cream and paprika sauce, topped with breadcrumbs and cooked for 20 minutes.',
    meta: 'Beef and mushroom stroganoff bake: beef strips, mushrooms and egg noodles in a soured cream and paprika sauce, baked with a crumb topping. Four servings.',
    kw: ['beef and mushroom stroganoff bake', 'baked beef stroganoff', 'beef stroganoff casserole', 'stroganoff bake with noodles', 'beef and mushroom stroganoff'],
    why: 'Stroganoff is a Russian dish of beef in a soured cream sauce, and the bake version gives it a golden lid. It trades the stove-top finish for a casserole that can be made ahead.\n\nSlice the beef thinly across the grain, which keeps it tender, and brown it quickly in a very hot pan in two batches. **Overcrowding the pan makes the meat stew and turn grey**, so be patient. Set it aside.\n\nCook the mushrooms in the same pan for 6 minutes until they have released their water and begun to brown. Add the onion, garlic and paprika, then a spoonful of flour, and pour in the stock.\n\nOff the heat, stir in the soured cream and mustard. Boiling it would split the sauce. Fold in the beef and noodles, tip into a dish, top with the breadcrumbs and cook at 190°C for 20 minutes. If your oven runs hot, check at 15 minutes. Scatter with parsley.',
    ing: [
      '500 g beef sirloin, thinly sliced',
      '2 tbsp vegetable oil',
      '300 g mushrooms, sliced',
      '1 onion, chopped',
      '2 garlic cloves, chopped',
      '2 tsp paprika',
      '1 tbsp plain flour',
      '300 ml beef stock',
      '200 g soured cream',
      '1 tsp mustard',
      '250 g egg noodles',
      '1 tsp salt',
      '40 g breadcrumbs',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 190°C. Brown the beef in the oil in two batches for 3 minutes each and set aside.',
      'Cook the mushrooms and onion in the pan for 8 minutes. Add the garlic, paprika and flour for 1 minute, then the stock, and simmer for 5 minutes.',
      'Off the heat, stir in the soured cream, mustard and salt. Fold in the beef and the noodles, boiled for 2 minutes less than the packet says.',
      'Tip into a dish, top with the breadcrumbs and cook for 20 minutes. Scatter with the parsley.'
    ],
    tips: [
      'Slice the beef thin.',
      'Brown the beef in batches.',
      'If your oven runs hot, check at 15 minutes.',
      'Add the soured cream off the heat.'
    ],
    pair: ['Green beans', 'Buttered peas', 'Green salad', 'Pickled gherkins'],
    store: 'Keeps in the fridge for 3 days. Reheat covered.',
    nut: [686, 41, 63, 30, 4, 7, 1020]
  },

  'chicken-with-mushroom-sauce': {
    d: 'Chicken breasts pan-fried for 12 minutes and served in a creamy sauce of mushrooms, garlic, thyme and white wine.',
    meta: 'Chicken with mushroom sauce: chicken breasts pan-fried and served in a creamy sauce of mushrooms, garlic, thyme and white wine. Four servings.',
    kw: ['chicken with mushroom sauce', 'creamy mushroom chicken', 'chicken in mushroom cream sauce', 'chicken and mushrooms in white wine', 'chicken breasts with mushroom sauce'],
    why: 'A pan sauce is the quickest way to dress a plain chicken breast: while the meat rests, the pan is already full of flavour. Mushrooms, wine and cream make a classic bistro dish in 25 minutes.\n\nSlice the breasts in half horizontally so they cook evenly and fast. Season and brown in a hot pan for 5 minutes a side, then set aside to rest. **The golden bits in the pan are the flavour**, so do not wash it before the sauce.\n\nCook the mushrooms in the same pan in a single layer for 6 minutes, until deeply brown. Mushrooms release water first, so wait for it to evaporate before they colour.\n\nAdd garlic and thyme, pour in the wine and let it bubble until nearly gone, then add the cream and simmer for 3 minutes. If your hob runs hot, lower the heat so the cream does not split. Return the chicken and any resting juices to the pan for a minute.',
    ing: [
      '2 chicken breasts, about 600 g',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp olive oil',
      '300 g chestnut mushrooms, sliced',
      '2 garlic cloves, chopped',
      '2 g thyme sprigs',
      '100 ml dry white wine',
      '150 ml double cream',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Slice the chicken breasts in half horizontally and season. Brown in 1 tbsp of the oil for 5 minutes per side. Set aside.',
      'Cook the mushrooms in the remaining oil for 6 minutes until deep brown. Add the garlic and thyme for 30 seconds.',
      'Pour in the wine and bubble until nearly gone, then add the cream and simmer for 3 minutes.',
      'Return the chicken and its juices for 1 minute. Scatter with the parsley.'
    ],
    tips: [
      'Slice the chicken thin.',
      'Do not wash the pan before the sauce.',
      'If your hob runs hot, lower the heat for the cream.',
      'Brown the mushrooms properly.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Rice', 'Crusty bread'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [384, 37, 5, 24, 1, 3, 670]
  },

  'chicken-thighs-with-potatoes': {
    d: 'Chicken thighs roasted for 45 minutes on a bed of potatoes with garlic, lemon and thyme.',
    meta: 'Chicken thighs with potatoes: chicken thighs roasted for 45 minutes on a bed of potatoes with garlic, lemon and thyme. Four servings.',
    kw: ['chicken thighs with potatoes', 'roast chicken thighs and potatoes', 'chicken and potato traybake', 'lemon garlic chicken thighs and potatoes', 'chicken thighs and potatoes in the oven'],
    why: 'There is not much to this dish, and that is what makes it good. The chicken fat runs down into the potatoes and crisps them, and the lemon and garlic season everything as they cook.\n\nCut the potatoes into wedges about 3 cm thick, so that they take the same 45 minutes as the thighs. Toss them in the oil, garlic, thyme and salt on a large tray. **Spread them in one layer**, and use two trays if you need to, since crowded potatoes steam instead of roasting.\n\nSet the chicken, skin-side up, on top of the potatoes and add the halved lemon, cut-side up, to the tray.\n\nRoast at 210°C for 45 minutes, turning the potatoes once after 25 minutes, until the chicken skin is deep gold and the potatoes are crisp. If your oven runs hot, check at 35 minutes. Squeeze the roasted lemon over the whole tray and serve straight from it.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '800 g potatoes, cut into wedges',
      '3 tbsp olive oil',
      '5 garlic cloves, left whole in their skins',
      '2 g thyme sprigs',
      '1.5 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, halved'
    ],
    st: [
      'Heat the oven to 210°C. Toss the potatoes with the oil, garlic, thyme and half the salt on a large tray in one layer.',
      'Season the chicken with the remaining salt and the pepper and set it skin-side up on the potatoes. Add the lemon.',
      'Roast for 45 minutes, turning the potatoes once after 25 minutes.',
      'Squeeze the roasted lemon over everything.'
    ],
    tips: [
      'Spread the potatoes in one layer.',
      'Keep the chicken skin-side up.',
      'If your oven runs hot, check at 35 minutes.',
      'Turn the potatoes once.'
    ],
    pair: ['Green beans', 'Green salad', 'Roasted carrots', 'Garlic yoghurt'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [562, 54, 37, 22, 5, 2, 1120]
  },

  'brown-sugar-glazed-ham-steaks': {
    d: 'Ham steaks pan-fried for 8 minutes and glazed with brown sugar, mustard and a little pineapple juice.',
    meta: 'Brown sugar glazed ham steaks: ham steaks pan-fried and glazed with brown sugar, mustard and pineapple juice. Four servings in 17 minutes.',
    kw: ['brown sugar glazed ham steaks', 'glazed ham steaks', 'brown sugar mustard ham steak', 'easy ham steaks', 'quick glazed ham steaks'],
    why: 'Ham steak is already cooked, so what you are doing is heating it and giving it a glaze. It is one of the fastest dinners there is, and the sweet and salty combination suits it well.\n\nHeat a little butter in a wide pan and brown the ham steaks for 3 minutes a side. **Score the edges** with a few shallow cuts so they do not curl as they shrink. Lift the steaks out and set them on a plate.\n\nIn the same pan, stir together the brown sugar, mustard and pineapple juice and let it bubble for 3 minutes, until it thickens to a syrup. If your hob runs hot, watch it closely, since sugar catches quickly and can turn bitter.\n\nReturn the ham to the pan and turn it in the glaze for 1 minute. Serve with the sauce spooned over, along with eggs, potatoes or pineapple rings if you like.',
    ing: [
      '4 ham steaks, about 700 g',
      '1 tbsp butter',
      '4 tbsp brown sugar',
      '2 tbsp Dijon mustard',
      '4 tbsp pineapple juice',
      '1/2 tsp black pepper'
    ],
    st: [
      'Score the edges of the ham steaks. Melt the butter in a wide pan and brown the steaks for 3 minutes per side. Lift out.',
      'Stir the sugar, mustard and pineapple juice into the pan and bubble for 3 minutes until syrupy.',
      'Return the ham and turn in the glaze for 1 minute.',
      'Season with the pepper and spoon the glaze over.'
    ],
    tips: [
      'Score the edges so they lie flat.',
      'Watch the sugar closely.',
      'If your hob runs hot, lower the heat for the glaze.',
      'Do not overcook the ham.'
    ],
    pair: ['Fried eggs', 'Mashed potatoes', 'Green beans', 'Pineapple rings'],
    store: 'Keeps in the fridge for 3 days. Good cold in sandwiches.',
    nut: [307, 34, 18, 11, 1, 15, 2250]
  },

  'penne-arrabbiata-bake': {
    d: 'Penne tossed in a hot garlic and chilli tomato sauce, topped with mozzarella and parmesan and cooked for 20 minutes.',
    meta: 'Penne arrabbiata bake: penne tossed in a hot garlic and chilli tomato sauce, topped with mozzarella and parmesan and baked. Six servings.',
    kw: ['penne arrabbiata bake', 'baked penne arrabbiata', 'spicy tomato pasta bake', 'arrabbiata pasta bake', 'penne arrabbiata with mozzarella'],
    why: 'Arrabbiata means angry, and the sauce is: garlic, chilli and tomato, cooked fast and left sharp. Baking it under cheese tames it a little, but it keeps its bite.\n\nSoften the garlic and chilli in plenty of olive oil, but only for 30 seconds, until they smell fragrant and are still pale. **Brown garlic is bitter**, and in a sauce this simple there is nothing to hide it. Add the tomatoes and simmer for 15 minutes until the sauce is thick and the oil shines on top.\n\nBoil the penne for 2 minutes less than the packet says. It will finish cooking in the oven, and fully cooked pasta turns soft and mushy in a bake.\n\nFold the pasta into the sauce with half the mozzarella and a handful of basil. Tip into a dish, top with the rest of the mozzarella and parmesan, and cook at 200°C for 20 minutes. If your oven runs hot, check at 15 minutes. Stand for 5 minutes.',
    ing: [
      '350 g penne',
      '4 tbsp olive oil',
      '5 garlic cloves, sliced',
      '1 tsp chilli flakes',
      '800 g tinned chopped tomatoes',
      '1 tsp sugar',
      '1 tsp salt',
      '10 basil leaves',
      '200 g mozzarella, grated',
      '40 g parmesan, grated'
    ],
    st: [
      'Heat the oven to 200°C. Boil the penne for 2 minutes short of the packet time, then drain.',
      'Warm the oil with the garlic and chilli for 30 seconds. Add the tomatoes, sugar and salt and simmer for 15 minutes until thick.',
      'Fold the penne, basil and half the mozzarella into the sauce and tip into a dish. Top with the remaining mozzarella and the parmesan.',
      'Bake for 20 minutes until golden and bubbling, then stand for 5 minutes.'
    ],
    tips: [
      'Do not let the garlic brown.',
      'Undercook the pasta.',
      'If your oven runs hot, check at 15 minutes.',
      'Adjust the chilli to taste.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted vegetables', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat covered.',
    nut: [460, 19, 51, 20, 4, 6, 700]
  }
};
