'use strict';

/**
 * Volume forty-five — grills, vegetarian mains and pasta, fourth part.
 *
 * Halloumi skewers, grilled romaine, a vegetable platter and garlic
 * prawns from the grill, then a veggie chilli, vegetarian lasagne, a
 * tagine, paella and samosas, a mushroom bourguignon, chickpea tikka
 * masala, two tofu dishes and baked feta, and three pastas: arrabbiata,
 * amatriciana and linguine al limone. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * by npm run calc.
 */

module.exports = {
  'grilled-halloumi-skewers': {
    d: 'Halloumi cubes threaded on skewers with peppers, courgette and red onion, grilled until golden and brushed with lemon and oregano.',
    meta: 'Grilled halloumi skewers: halloumi, peppers, courgette and onion grilled with lemon and oregano. Four servings, cooked for 8 minutes.',
    kw: ['grilled halloumi skewers', 'halloumi and vegetable skewers', 'halloumi kebabs with peppers', 'barbecue halloumi skewers', 'halloumi skewers with lemon and oregano'],
    why: 'Halloumi is a Cypriot cheese with a high melting point, which is why it can go straight onto a hot grill and come out golden, not in a puddle. It squeaks against the teeth when freshly cooked, and it is at its best straight away.\n\nCut the halloumi into 3 cm cubes and the vegetables into pieces the same size, so that they cook together. Thread them in an alternating pattern on the skewers, leaving a little space between pieces. Soak wooden skewers in water for 20 minutes first so they do not burn. Brush with the oil, lemon juice, oregano and pepper. **Do not salt them.** The cheese is already salty.\n\nGrill over a high heat for 8 minutes, turning every 2 minutes, until the halloumi is golden brown on every side and the vegetables are charred at the edges.\n\nServe at once, as the cheese firms up and turns rubbery as it cools.',
    ing: [
      '250 g halloumi, cut into 3 cm cubes',
      '2 peppers, about 300 g, cut into 3 cm pieces',
      '1 courgette, about 200 g, cut into thick slices',
      '1 red onion, about 150 g, cut into chunks',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tsp dried oregano',
      '1/4 tsp black pepper'
    ],
    st: [
      'Soak 8 wooden skewers in water for 20 minutes.',
      'Heat the grill to high. Thread the halloumi and vegetables onto the skewers, leaving a little space between pieces.',
      'Whisk the oil, lemon juice, oregano and pepper and brush over the skewers.',
      'Grill for 8 minutes, turning every 2 minutes, until golden and charred. Serve at once.'
    ],
    tips: [
      'Cut everything the same size.',
      'Do not add salt.',
      'Soak wooden skewers.',
      'Serve at once.'
    ],
    pair: ['Tzatziki', 'Pitta bread', 'Green salad', 'Lemon wedges'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; the halloumi turns firm.',
    nut: [355, 16, 12, 27, 3, 6, 760]
  },

  'grilled-romaine-salad': {
    d: 'Halved romaine hearts charred on a grill and dressed with a Caesar-style dressing, parmesan and lemon.',
    meta: 'Grilled romaine salad: charred romaine hearts with a creamy Caesar-style dressing and parmesan. Four servings, cooked for 6 minutes.',
    kw: ['grilled romaine salad', 'grilled caesar salad', 'charred romaine hearts with caesar dressing', 'grilled romaine with parmesan', 'barbecued romaine lettuce salad'],
    why: 'Grill it hard and grill it briefly. That is the short, sharp rule, because romaine is mostly water, and a few minutes on a very hot grill chars the outside while the heart stays crisp.\n\nCut each heart in half lengthways, keeping the root so that the leaves hold together. Rinse and dry them well, since wet lettuce steams and never chars. Brush the cut side with oil and lay them cut-side down on a very hot grill for 2 to 3 minutes, until the leaves are blackened at the edges. Turn and grill for 1 minute more. **Do not walk away.** Lettuce goes from charred to cinders in seconds.\n\nWhile it grills, stir the mayonnaise, lemon juice, garlic, anchovy and parmesan into a creamy dressing, thinned with a spoonful of water.\n\nSet the lettuce on plates with the char facing up, spoon over the dressing, and finish with shaved parmesan and black pepper.',
    ing: [
      '4 romaine hearts, about 500 g',
      '2 tbsp olive oil',
      '60 g mayonnaise',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '2 anchovy fillets, about 10 g, finely chopped',
      '20 g parmesan, grated',
      '1 tbsp water',
      '30 g parmesan, shaved',
      '1/4 tsp black pepper'
    ],
    st: [
      'Halve the romaine hearts lengthways, keeping the root. Rinse and dry very well and brush the cut sides with the oil.',
      'Stir the mayonnaise, lemon juice, garlic, anchovy, grated parmesan and water into a dressing.',
      'Heat a grill or griddle pan until very hot. Lay the lettuce cut-side down for 2 to 3 minutes until charred, then turn for 1 minute.',
      'Plate with the char facing up, spoon over the dressing and finish with the shaved parmesan and pepper.'
    ],
    tips: [
      'Dry the lettuce well.',
      'Use a very hot grill.',
      'Keep the root intact.',
      'Dress at the last moment.'
    ],
    pair: ['Grilled chicken', 'Grilled steak', 'Garlic bread', 'Cold white wine'],
    store: 'Best eaten straight away.',
    nut: [246, 7, 5, 22, 3, 2, 380]
  },

  'grilled-vegetable-platter': {
    d: 'Aubergine, courgette, peppers and red onion grilled until charred and tender, dressed with olive oil, lemon and basil.',
    meta: 'Grilled vegetable platter: aubergine, courgette, peppers and onion grilled and dressed with lemon and basil. Six servings, cooked for 12 minutes.',
    kw: ['grilled vegetable platter', 'italian grilled vegetable platter', 'chargrilled vegetable platter', 'grilled aubergine courgette and pepper platter', 'mixed grilled vegetables with basil'],
    why: 'Slice them thick. That is the short, sharp rule, because thin slices of aubergine and courgette collapse on a grill, and thick ones char outside and stay tender in the middle. Aim for about 1 cm.\n\nSalt the aubergine slices and leave them for 15 minutes, then pat them dry. This draws out bitter moisture and stops them soaking up oil like a sponge. Brush all the vegetables lightly with oil, rather than pouring it on, because dripping oil flares up and burns. **Oil the vegetables, not the grill.** A little goes a long way.\n\nGrill over a high heat in batches, 3 to 4 minutes a side, until marked with dark stripes and soft. The peppers take longest, about 6 minutes a side, and can be quartered to speed them up.\n\nArrange everything on a platter while still warm, and dress with the olive oil, lemon, garlic, basil and a pinch of salt.',
    ing: [
      '1 aubergine, about 300 g, sliced 1 cm thick',
      '1/2 tsp salt',
      '2 courgettes, about 400 g, sliced lengthways',
      '2 peppers, about 300 g, quartered',
      '1 red onion, about 150 g, cut into thick rounds',
      '3 tbsp olive oil, for brushing',
      '3 tbsp extra virgin olive oil',
      '2 tbsp lemon juice',
      '1 clove garlic, crushed',
      '10 g fresh basil leaves'
    ],
    st: [
      'Sprinkle the aubergine with the salt, leave for 15 minutes and pat dry.',
      'Heat a grill or griddle pan to high. Brush the vegetables lightly with the brushing oil.',
      'Grill in batches for 3 to 4 minutes a side, the peppers for 6, until marked and tender.',
      'Arrange on a platter while warm and dress with the extra virgin oil, lemon juice, garlic and torn basil.'
    ],
    tips: [
      'Slice the vegetables thick.',
      'Salt the aubergine.',
      'Brush on a little oil.',
      'Dress while warm.'
    ],
    pair: ['Crusty bread', 'Mozzarella', 'Grilled fish', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Serve at room temperature.',
    nut: [178, 2, 11, 14, 4, 7, 210]
  },

  'grilled-garlic-prawns': {
    d: 'Large prawns marinated in garlic, lemon and parsley, grilled for a few minutes until pink and served with lemon.',
    meta: 'Grilled garlic prawns: large prawns grilled with garlic, lemon and parsley. Four servings, cooked for 6 minutes.',
    kw: ['grilled garlic prawns', 'australian garlic prawns on the barbecue', 'barbecued garlic prawns', 'garlic butter grilled prawns', 'garlic prawns on the grill'],
    why: 'Leave the shells on. That is the most useful instruction here, because the shell protects the flesh from the heat and keeps it sweet and juicy, where peeled prawns dry out in seconds on a hot grill.\n\nSplit the shells down the back with kitchen scissors and take out the dark vein, which leaves the prawn open so that the garlic butter runs in. Mix the melted butter with the crushed garlic, parsley, lemon juice and a pinch of salt and spoon it into each prawn. Marinate for just 10 minutes, because lemon begins to firm the flesh. **Do not marinate for long.** The acid cooks the prawn before it reaches the grill.\n\nGrill over a high heat for 2 to 3 minutes a side, shell-side down first, until they turn pink and the flesh is opaque and firm.\n\nPile onto a platter, pour over any remaining butter and serve with lemon wedges and a bowl for the shells.',
    ing: [
      '800 g large raw prawns, in their shells',
      '60 g butter, melted',
      '4 cloves garlic, crushed',
      '15 g flat-leaf parsley, chopped',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Split the prawn shells down the back with scissors and remove the dark vein.',
      'Mix the butter, garlic, parsley, lemon juice and salt and spoon into the prawns. Leave for 10 minutes.',
      'Heat the grill to high and cook the prawns for 2 to 3 minutes a side, shell-side down first, until pink and firm.',
      'Pour over any remaining butter and serve with the lemon wedges.'
    ],
    tips: [
      'Leave the shells on.',
      'Marinate only for 10 minutes.',
      'Use a very hot grill.',
      'Do not overcook them.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Lemon wedges', 'Cold white wine'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [293, 41, 3, 13, 1, 1, 600]
  },

  'veggie-chilli': {
    d: 'Kidney beans, black beans, peppers, sweetcorn and sweet potato simmered in a smoky tomato and chilli sauce.',
    meta: 'Veggie chilli: kidney beans, black beans, peppers and sweet potato in a smoky tomato and chilli sauce. Six servings, cooked for 40 minutes.',
    kw: ['veggie chilli', 'vegetable chilli with beans', 'smoky veggie chilli', 'three bean veggie chilli', 'sweet potato veggie chilli'],
    why: 'A dish for a big table on a cold evening, and one that suits making ahead. The beans and sweet potato give it body, and the smoked paprika and cumin give it the flavour that meat would otherwise bring.\n\nSoften the onion and peppers in the oil for 8 minutes until sweet, then add the garlic, cumin, paprika and chilli powder and cook them for a minute so that they release their aroma. Add the diced sweet potato, tomatoes and stock, bring to a simmer and cook for 20 minutes. **Add the beans in the last 15 minutes.** Beans cooked too long turn to mush, and the chilli loses its texture.\n\nStir in the sweetcorn at the end for 3 minutes and a squeeze of lime to lift everything.\n\nThe chilli is ready when the sweet potato is soft and the sauce is thick enough to coat the back of a spoon. It is better the next day.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 peppers, about 300 g, diced',
      '3 cloves garlic, crushed',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '1 tsp chilli powder',
      '400 g sweet potato, peeled and diced',
      '400 g tinned chopped tomatoes',
      '400 ml vegetable stock',
      '240 g drained tinned kidney beans',
      '240 g drained tinned black beans',
      '150 g sweetcorn',
      '1 lime, juiced',
      '1 tsp salt'
    ],
    st: [
      'Soften the onion and peppers in the oil for 8 minutes, then add the garlic, cumin, paprika and chilli for 1 minute.',
      'Add the sweet potato, tomatoes, stock and salt, bring to a simmer and cook for 20 minutes.',
      'Stir in the kidney and black beans and cook for 15 minutes more.',
      'Stir in the sweetcorn for 3 minutes, then the lime juice.'
    ],
    tips: [
      'Cook the spices briefly first.',
      'Add the beans late.',
      'Dice the sweet potato small.',
      'Make it a day ahead.'
    ],
    pair: ['Steamed rice', 'Soured cream', 'Grated cheddar', 'Tortilla chips'],
    store: 'Keeps in the fridge for 4 days. Reheat until piping hot all the way through.',
    nut: [258, 10, 41, 6, 10, 9, 910]
  },

  'vegetarian-lasagne': {
    d: 'Layers of pasta, roasted aubergine, courgette and pepper in tomato sauce, with ricotta and a golden cheese topping.',
    meta: 'Vegetarian lasagne: pasta layered with roasted vegetables, tomato sauce, ricotta and cheese. Eight servings, baked for 60 minutes.',
    kw: ['vegetarian lasagne', 'roasted vegetable lasagne', 'vegetable lasagne with ricotta', 'aubergine and courgette lasagne', 'meat free lasagne with vegetables'],
    why: 'Most home versions come out watery, and the fix is to roast the vegetables first. Aubergine, courgette and pepper are mostly water, and raw slices layered in a lasagne weep into the sauce and turn it to soup.\n\nCut the vegetables into chunks of about 2 cm, toss them with the oil and salt and roast at 220°C for 25 minutes, until they are soft and the edges are browned. This concentrates the flavour and removes most of the liquid. Mix them into the tomato sauce. Stir the ricotta with the egg, nutmeg and a handful of the cheese, so that it sets into a firm layer. **Make the sauce thick.** A runny sauce makes a runny lasagne.\n\nLayer the sauce, pasta and ricotta mix in a deep dish, finishing with sauce and the rest of the cheese.\n\nBake at 190°C for 35 minutes until bubbling and golden. If your oven runs hot, check at 28 minutes. Rest for 10 minutes before cutting.',
    ing: [
      '1 aubergine, about 300 g, cut into chunks',
      '2 courgettes, about 400 g, cut into chunks',
      '2 peppers, about 300 g, cut into chunks',
      '3 tbsp olive oil',
      '1 tsp salt',
      '700 g passata',
      '3 cloves garlic, crushed',
      '1 tsp dried oregano',
      '250 g ricotta',
      '1 egg, about 50 g',
      '1/4 tsp ground nutmeg',
      '250 g dried lasagne sheets',
      '200 g mozzarella, grated',
      '40 g parmesan, grated'
    ],
    st: [
      'Heat the oven to 220°C. Toss the aubergine, courgettes and peppers with the oil and half the salt on two trays and roast for 25 minutes. Lower the oven to 190°C.',
      'Stir the roasted vegetables into the passata with the garlic, oregano and remaining salt.',
      'Mix the ricotta with the egg, nutmeg and a handful of the mozzarella.',
      'Layer the sauce, lasagne sheets and ricotta mixture in a deep dish, finishing with sauce, the rest of the mozzarella and the parmesan.',
      'Bake for 35 minutes until golden and bubbling. Rest for 10 minutes.'
    ],
    tips: [
      'Roast the vegetables first.',
      'Keep the sauce thick.',
      'If your oven runs hot, check at 28 minutes.',
      'Rest it before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Rocket', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [378, 18, 36, 18, 5, 9, 650]
  },

  'vegetable-tagine': {
    d: 'Carrots, sweet potato, chickpeas and apricots simmered with ras el hanout, cinnamon and saffron, served over couscous.',
    meta: 'Vegetable tagine: carrots, sweet potato, chickpeas and apricots with warm spices, over couscous. Four servings, cooked for 45 minutes.',
    kw: ['vegetable tagine', 'moroccan vegetable tagine', 'vegetable tagine with chickpeas and apricots', 'sweet potato and chickpea tagine', 'vegetable tagine with couscous'],
    why: 'What makes a tagine taste like a tagine? The spices and the slow, covered cook. The name belongs to the clay pot as much as the stew, and the method works in any heavy pan with a lid.\n\nSoften the onion in the oil for 8 minutes, then add the garlic, ginger, cumin, cinnamon, ras el hanout and a pinch of saffron for 2 minutes, stirring. Warm spices need that minute in the fat to release their flavour. Add the carrots, sweet potato, tomatoes and stock, cover and simmer for 25 minutes. **Add the chickpeas and apricots later.** They need only 10 minutes, and the apricots turn to jam if they cook too long.\n\nUncover for the last 5 minutes if the sauce looks thin. It should be thick enough to coat the vegetables.\n\nPrepare the couscous by pouring boiling stock over it, covering for 5 minutes and fluffing with a fork. Serve the tagine on top, with coriander and toasted almonds.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, sliced',
      '3 cloves garlic, crushed',
      '10 g fresh ginger, grated',
      '1 tsp ground cumin',
      '1 tsp ground cinnamon',
      '2 tsp ras el hanout',
      '1 pinch saffron, about 0.2 g',
      '3 carrots, about 300 g, cut into chunks',
      '1 sweet potato, about 300 g, cubed',
      '400 g tinned chopped tomatoes',
      '300 ml vegetable stock',
      '240 g drained tinned chickpeas',
      '80 g dried apricots, halved',
      '200 g couscous',
      '250 ml boiling vegetable stock',
      '15 g coriander leaves',
      '30 g flaked almonds, toasted'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes, then add the garlic, ginger, cumin, cinnamon, ras el hanout and saffron for 2 minutes.',
      'Add the carrots, sweet potato, tomatoes and the 300 ml of stock, cover and simmer for 25 minutes.',
      'Add the chickpeas and apricots and simmer for 10 minutes, uncovered for the last 5.',
      'Pour the boiling stock over the couscous, cover for 5 minutes and fluff with a fork.',
      'Serve the tagine over the couscous with the coriander and almonds.'
    ],
    tips: [
      'Cook the spices in the oil first.',
      'Add the apricots late.',
      'Cut the vegetables the same size.',
      'Uncover at the end to thicken.'
    ],
    pair: ['Flatbread', 'Natural yoghurt', 'Harissa', 'Mint tea'],
    store: 'Keeps in the fridge for 4 days. Reheat gently.',
    nut: [534, 18, 84, 14, 14, 15, 740]
  },

  'vegetable-paella': {
    d: 'Paella rice cooked in saffron stock with peppers, green beans, artichokes and tomatoes, finished with lemon and parsley.',
    meta: 'Vegetable paella: paella rice in saffron stock with peppers, green beans, artichokes and tomatoes. Four servings, cooked for 40 minutes.',
    kw: ['vegetable paella', 'spanish vegetable paella', 'vegetable paella with saffron', 'vegetarian style paella with artichokes', 'paella with green beans and peppers'],
    why: 'Most home versions come out soft and sticky, and the fix is to leave the rice alone. Paella is not a risotto, and stirring it releases starch and turns it creamy. The prize is a crust of toasted rice at the base, called socarrat.\n\nUse paella rice or another short-grain rice that absorbs liquid without breaking up. Fry the peppers, beans and artichokes in a wide, shallow pan, add the garlic and tomatoes, and cook until the tomatoes have broken into a thick sauce. Stir in the rice and paprika for a minute. **Stir once, then leave it.** After the stock goes in, do not touch the rice again.\n\nPour in the hot saffron stock, level the rice, and simmer for 18 minutes, rotating the pan over the heat to cook it evenly. For the last minute, turn the heat up to toast the base. You should hear a faint crackle.\n\nRest for 5 minutes with a cloth over the pan, then serve with lemon.',
    ing: [
      '3 tbsp olive oil',
      '2 peppers, about 300 g, sliced',
      '150 g green beans, trimmed and halved',
      '240 g tinned artichoke hearts, drained and quartered',
      '3 cloves garlic, crushed',
      '2 tomatoes, about 250 g, grated',
      '1 tsp smoked paprika',
      '300 g paella rice',
      '900 ml hot vegetable stock',
      '1 pinch saffron, about 0.2 g',
      '1 tsp salt',
      '15 g flat-leaf parsley, chopped',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Fry the peppers, green beans and artichokes in the oil in a 36 cm paella pan for 8 minutes.',
      'Add the garlic and grated tomatoes and cook for 5 minutes until thick, then stir in the rice and paprika for 1 minute.',
      'Pour in the hot stock mixed with the saffron and salt, level the rice and simmer for 18 minutes without stirring, turning the pan.',
      'Turn up the heat for the last minute to toast the base.',
      'Rest for 5 minutes under a cloth, scatter with the parsley and serve with the lemon.'
    ],
    tips: [
      'Use paella rice.',
      'Do not stir after the stock.',
      'Use a wide, shallow pan.',
      'Listen for the crackle of the crust.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Cool within an hour and reheat until piping hot.',
    nut: [460, 11, 77, 12, 6, 7, 1530]
  },

  'vegetable-samosas': {
    d: 'Spiced potato, pea and carrot wrapped in folded filo triangles, brushed with oil and baked until crisp.',
    meta: 'Vegetable samosas: spiced potato, pea and carrot in folded filo triangles, baked for 25 minutes. Twelve samosas.',
    kw: ['vegetable samosas', 'baked vegetable samosas', 'potato and pea samosas', 'spiced vegetable samosas with filo', 'indian vegetable samosas'],
    why: 'What makes the filling of a samosa work? It is dry, well seasoned and cool. A wet filling steams the pastry from inside, a bland one tastes of potato, and a hot one melts the pastry as it is folded.\n\nBoil the potatoes until just tender, drain well and crush them roughly, leaving some lumps. Fry the onion, ginger and spices in the oil until the raw edge has gone, then stir in the potato, peas, carrot and lemon juice and cook for 5 minutes, until no liquid is left. Spread it on a plate to cool for 20 minutes. **Season the filling well.** Pastry dilutes flavour, and a filling that tastes right on the spoon tastes bland in the samosa.\n\nCut the filo into strips about 8 cm wide, spoon filling at one end, fold the corner over to make a triangle, and keep folding along the strip. Brush with oil and seal the end.\n\nBake at 200°C for 25 minutes, turning once, until crisp and golden.',
    ing: [
      '400 g potatoes, peeled and cubed',
      '1 onion, about 100 g, finely chopped',
      '10 g fresh ginger, grated',
      '1 tbsp vegetable oil',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '100 g frozen peas',
      '1 carrot, about 100 g, finely diced',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '250 g filo pastry',
      '40 ml vegetable oil, for brushing'
    ],
    st: [
      'Boil the potatoes for 12 minutes, drain well and crush roughly.',
      'Fry the onion and ginger in the 1 tbsp of oil for 5 minutes, add the cumin, coriander, garam masala, chilli and salt for 1 minute, then stir in the potato, peas, carrot and lemon juice for 5 minutes. Cool on a plate for 20 minutes. Heat the oven to 200°C.',
      'Cut the filo into 8 cm strips. Spoon a little filling at the end of each strip, fold the corner over into a triangle and keep folding along the strip, sealing with a dab of oil.',
      'Brush with the 40 ml of oil and bake on a lined tray for 25 minutes, turning once, until golden.'
    ],
    tips: [
      'Cook off the moisture.',
      'Cool the filling first.',
      'Season it well.',
      'If your oven runs hot, check at 20 minutes.'
    ],
    pair: ['Mint chutney', 'Tamarind chutney', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven to crisp the pastry.',
    nut: [141, 3, 21, 5, 2, 2, 210]
  },

  'mushroom-bourguignon': {
    d: 'Mushrooms and shallots braised in red wine with carrots, thyme and tomato purée, served over mashed potato.',
    meta: 'Mushroom bourguignon: mushrooms braised in red wine with shallots, carrots and thyme. Four servings, cooked for 50 minutes.',
    kw: ['mushroom bourguignon', 'vegetarian mushroom bourguignon', 'mushroom bourguignon with red wine', 'mushroom bourguignon with mash', 'meat free beef bourguignon with mushrooms'],
    why: 'Bourguignon means from Burgundy, and the dish is a stew braised in the red wine of that region. Mushrooms stand in for the beef, and they bring a deep savoury flavour of their own.\n\nBrown the mushrooms hard in batches, in a wide, hot pan, until deeply browned and dry. This is the longest part, and the most important. Pale mushrooms give a stew that tastes of wine and nothing else. Soften the shallots and carrots in the same pan, stir in the flour and tomato purée, and pour in the wine. **Boil the wine for 5 minutes before adding anything else.** Raw wine tastes sharp and thin.\n\nAdd the stock, thyme, bay and soy sauce for depth, return the mushrooms and simmer for 30 minutes until the sauce is glossy and thick.\n\nServe over buttery mashed potato, with the parsley scattered over. Chestnut mushrooms hold their shape best, and a few dried porcini add a deeper flavour.',
    ing: [
      '800 g mushrooms, halved',
      '3 tbsp olive oil',
      '200 g shallots, peeled',
      '2 carrots, about 200 g, sliced',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '300 ml red wine',
      '300 ml vegetable stock',
      '2 tbsp soy sauce',
      '4 sprigs thyme, about 5 g',
      '1 bay leaf',
      '800 g potatoes, boiled and mashed',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Brown the mushrooms in the oil in batches for 8 minutes each until dark and dry. Set aside.',
      'Soften the shallots and carrots in the same pan for 6 minutes, then stir in the flour and tomato purée for 1 minute.',
      'Pour in the wine and boil for 5 minutes. Add the stock, soy sauce, thyme and bay leaf and return the mushrooms.',
      'Simmer for 30 minutes until glossy and thick.',
      'Serve over the mash with the parsley.'
    ],
    tips: [
      'Brown the mushrooms in batches.',
      'Boil the wine first.',
      'Use a good red wine.',
      'Serve on creamy mash.'
    ],
    pair: ['Buttery mash', 'Crusty bread', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. It tastes better the next day.',
    nut: [408, 14, 61, 12, 10, 13, 760]
  },

  'chickpea-tikka-masala': {
    d: 'Chickpeas simmered in a creamy tomato and tikka masala sauce with onion, garlic and ginger, finished with coriander.',
    meta: 'Chickpea tikka masala: chickpeas in a creamy tomato and tikka masala sauce. Four servings, cooked for 25 minutes.',
    kw: ['chickpea tikka masala', 'vegetarian chickpea tikka masala', 'chickpea tikka masala with cream', 'creamy chickpea tikka masala', 'chana tikka masala'],
    why: 'This is what to make on a wet autumn evening, when you want a curry that is on the table in under half an hour. Tinned chickpeas do the work that meat would, and the sauce is where the interest is.\n\nSoften the onion in the oil for 8 minutes until golden, add the garlic and ginger for a minute, then fry the tikka paste for 2 minutes. Fried paste loses its raw edge and tastes rounder. Pour in the tomatoes and simmer for 10 minutes until thick and darker in colour. **Do not skip the simmering.** A sauce that has not reduced tastes sharp and thin.\n\nAdd the drained chickpeas and cook for 5 minutes. Take the pan off the heat and stir in the cream, which would split if boiled.\n\nSeason with salt and a squeeze of lemon, and scatter with fresh coriander. Serve with rice or naan.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 cloves garlic, crushed',
      '15 g fresh ginger, grated',
      '3 tbsp tikka masala paste',
      '400 g tinned chopped tomatoes',
      '480 g drained tinned chickpeas',
      '100 ml double cream',
      '1/2 tsp salt',
      '1 tbsp lemon juice',
      '10 g coriander leaves'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes, then add the garlic and ginger for 1 minute.',
      'Fry the tikka paste for 2 minutes, then pour in the tomatoes and simmer for 10 minutes until thick.',
      'Add the chickpeas and salt and cook for 5 minutes.',
      'Take off the heat, stir in the cream and lemon juice and scatter with the coriander.'
    ],
    tips: [
      'Fry the paste first.',
      'Reduce the sauce.',
      'Add the cream off the heat.',
      'Drain and rinse the chickpeas.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for 4 days. Reheat gently.',
    nut: [357, 11, 31, 21, 8, 9, 900]
  },

  'teriyaki-tofu': {
    d: 'Firm tofu pan-fried until golden and glazed with a sticky teriyaki sauce of soy sauce, mirin and honey.',
    meta: 'Teriyaki tofu: firm tofu pan-fried until golden and glazed with soy, mirin and honey. Four servings, cooked for 12 minutes.',
    kw: ['teriyaki tofu', 'pan fried teriyaki tofu', 'sticky teriyaki tofu', 'teriyaki tofu with rice', 'crispy teriyaki tofu'],
    why: 'This is what to make in the first cold week, when a quick supper that is not too heavy is a relief. Tofu takes on whatever it is cooked with, so the sauce does most of the work.\n\nPress the tofu for 10 minutes between kitchen paper under a heavy pan, which squeezes out the water and lets it brown. Cut it into cubes, toss in cornflour and fry in a hot, oiled pan for 8 minutes, turning, until crisp on all sides. **Do not stir the tofu for the first 3 minutes.** Moved too early, it sticks and breaks.\n\nWhisk the soy sauce, mirin, honey and garlic and pour it into the pan. It bubbles and thickens in about 2 minutes, coating the tofu in a glaze. Take the pan off the heat before the sugar scorches.\n\nServe over rice with sesame seeds, spring onions and steamed greens. Extra-firm tofu holds together best, and silken tofu will fall apart in the pan.',
    ing: [
      '400 g firm tofu, pressed and cubed',
      '2 tbsp cornflour',
      '3 tbsp vegetable oil',
      '4 tbsp soy sauce',
      '3 tbsp mirin',
      '2 tbsp honey',
      '2 cloves garlic, crushed',
      '1 tbsp sesame seeds',
      '2 spring onions, about 30 g, sliced',
      '300 g cooked rice'
    ],
    st: [
      'Press the tofu between kitchen paper under a heavy pan for 10 minutes, then cut into cubes and toss in the cornflour.',
      'Fry in the oil in a hot pan for 8 minutes, turning, until crisp on all sides.',
      'Whisk the soy sauce, mirin, honey and garlic and pour into the pan. Bubble for 2 minutes until it coats the tofu.',
      'Serve over the rice with the sesame seeds and spring onions.'
    ],
    tips: [
      'Press the tofu.',
      'Do not stir it early.',
      'Take the pan off the heat before the sugar burns.',
      'Use firm tofu.'
    ],
    pair: ['Steamed rice', 'Steamed broccoli', 'Pak choi', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [364, 12, 43, 16, 2, 15, 890]
  },

  'crispy-tofu-bites': {
    d: 'Cubes of tofu tossed in cornflour and baked until crisp, served with a sweet chilli dipping sauce.',
    meta: 'Crispy tofu bites: cornflour-coated tofu cubes baked until crisp, with sweet chilli sauce. Four servings, baked for 25 minutes.',
    kw: ['crispy tofu bites', 'baked crispy tofu bites', 'crispy baked tofu cubes', 'crunchy tofu bites with dipping sauce', 'oven crispy tofu bites'],
    why: 'Press the tofu, dry it and coat it. That is the whole of the method, and each step has a reason. Water is the enemy of crispness, and the cornflour is what forms the shell.\n\nWrap the tofu in a clean tea towel and put a heavy pan on top for 15 minutes, which draws out a surprising amount of water. Cut it into 2 cm cubes and toss with the soy sauce, which seasons it. Then toss with the cornflour, paprika and garlic powder until each cube has a dry, even coat. **Use cornflour, not flour.** It forms a thin, brittle crust and does not go gluey.\n\nSpread the cubes on a lined tray with room between them, drizzle with the oil and bake at 220°C for 25 minutes, turning once. If your oven runs hot, check at 20 minutes. They should be golden and crisp on the outside, and chewy in the middle.\n\nServe straight away with the sweet chilli sauce.',
    ing: [
      '400 g firm tofu, pressed',
      '2 tbsp soy sauce',
      '4 tbsp cornflour',
      '1 tsp smoked paprika',
      '1/2 tsp garlic powder',
      '2 tbsp vegetable oil',
      '100 g sweet chilli sauce'
    ],
    st: [
      'Press the tofu in a tea towel under a heavy pan for 15 minutes. Heat the oven to 220°C.',
      'Cut into 2 cm cubes and toss with the soy sauce, then with the cornflour, paprika and garlic powder.',
      'Spread on a lined tray, drizzle with the oil and bake for 25 minutes, turning once, until golden and crisp.',
      'Serve at once with the sweet chilli sauce.'
    ],
    tips: [
      'Press the tofu well.',
      'Use cornflour for the crust.',
      'If your oven runs hot, check at 20 minutes.',
      'Do not crowd the tray.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Steamed greens', 'Peanut sauce'],
    store: 'Best eaten straight away. Reheat in a hot oven to re-crisp.',
    nut: [244, 9, 25, 12, 1, 13, 700]
  },

  'baked-feta-tomatoes': {
    d: 'A block of feta baked among cherry tomatoes, garlic and olive oil until soft and jammy, served with bread.',
    meta: 'Baked feta tomatoes: a block of feta baked with cherry tomatoes, garlic and olive oil. Four servings, baked for 25 minutes.',
    kw: ['baked feta tomatoes', 'baked feta with cherry tomatoes', 'baked feta and tomato dip', 'baked feta with garlic and oregano', 'oven baked feta tomatoes'],
    why: 'This is what to make when the tomatoes are at their best, and the cooking is no more than putting a few things in a dish. The feta softens without melting, and the tomatoes burst into a sweet, jammy sauce.\n\nChoose the best cherry tomatoes you can find, since they are the dish. Put them in a small baking dish with the garlic, oil, oregano, chilli flakes and a little pepper and toss them. Nestle the block of feta in the middle and drizzle it with oil. **Do not add salt.** The feta is salty enough, and the tomatoes release their own juice.\n\nBake at 200°C for 25 minutes, until the tomatoes have burst and the feta is soft and golden at the edges. If your oven runs hot, check at 20 minutes.\n\nStir the tomatoes into the feta with a fork, so that it forms a sauce, and scatter over the basil. Serve straight from the dish with crusty bread, or toss through hot pasta.',
    ing: [
      '200 g feta, in one block',
      '500 g cherry tomatoes',
      '3 cloves garlic, sliced',
      '3 tbsp olive oil',
      '1 tsp dried oregano',
      '1/2 tsp chilli flakes',
      '1/4 tsp black pepper',
      '10 g fresh basil leaves',
      '200 g crusty bread, sliced'
    ],
    st: [
      'Heat the oven to 200°C. Toss the tomatoes with the garlic, 2 tbsp of the oil, oregano, chilli flakes and pepper in a small baking dish.',
      'Nestle the feta in the middle and drizzle with the remaining oil.',
      'Bake for 25 minutes until the tomatoes have burst and the feta is soft and golden.',
      'Stir the tomatoes into the feta with a fork, tear over the basil and serve with the bread.'
    ],
    tips: [
      'Use ripe tomatoes.',
      'Do not add salt.',
      'If your oven runs hot, check at 20 minutes.',
      'Mash the feta into the tomatoes.'
    ],
    pair: ['Crusty bread', 'Pasta', 'Green salad', 'Roasted vegetables'],
    store: 'Keeps in the fridge for 2 days. Reheat gently or toss through cold pasta.',
    nut: [391, 13, 33, 23, 3, 8, 800]
  },

  'pasta-arrabbiata': {
    d: 'Penne in a spicy tomato sauce of garlic, chilli and olive oil, finished with parsley.',
    meta: 'Pasta arrabbiata: penne in a spicy tomato, garlic and chilli sauce with parsley. Four servings, cooked for 20 minutes.',
    kw: ['pasta arrabbiata', 'penne arrabbiata', 'spicy arrabbiata pasta', 'italian arrabbiata sauce with pasta', 'arrabbiata pasta with chilli and garlic'],
    why: 'This is what to make on a warm evening when you want something with heat and not much else. Arrabbiata means angry in Italian, and the anger is the chilli.\n\nWarm the oil with the garlic and chilli over a low heat for 2 minutes, until the garlic is pale gold and the oil is orange. Do not let the garlic colour more, because brown garlic is bitter. **Add the tomatoes before the garlic burns.** They cool the pan and stop the cooking.\n\nPour in the tomatoes, add the salt, and simmer for 12 minutes, stirring now and then, until the sauce is thick and the oil has separated slightly at the edges.\n\nBoil the penne for 1 minute under the packet time and keep a mugful of the water. Toss the pasta in the sauce for a minute, loosening it with a splash of the water, and finish with parsley. Cheese is not traditional here, so leave it off or add very little.',
    ing: [
      '350 g penne',
      '4 tbsp olive oil',
      '4 cloves garlic, sliced',
      '2 tsp chilli flakes',
      '800 g tinned chopped tomatoes',
      '1 tsp salt',
      '15 g flat-leaf parsley, chopped'
    ],
    st: [
      'Warm the oil with the garlic and chilli over a low heat for 2 minutes until the garlic is pale gold.',
      'Pour in the tomatoes and salt and simmer for 12 minutes until thick.',
      'Boil the penne for 9 minutes, 1 minute under the packet time, and drain, keeping a mugful of the water.',
      'Toss the pasta in the sauce for 1 minute with a splash of pasta water, then scatter with the parsley.'
    ],
    tips: [
      'Do not let the garlic brown.',
      'Add the tomatoes quickly.',
      'Adjust the chilli to taste.',
      'Keep some pasta water.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Rocket', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [500, 14, 75, 16, 6, 8, 610]
  },

  'pasta-allamatriciana': {
    d: 'Bucatini in a tomato sauce with crisp pancetta, onion, chilli and pecorino.',
    meta: 'Pasta all\'amatriciana: bucatini in a tomato sauce with crisp pancetta, onion and pecorino. Four servings, cooked for 25 minutes.',
    kw: ['pasta all amatriciana', 'bucatini all amatriciana', 'amatriciana sauce with pancetta', 'classic pasta all amatriciana', 'spicy tomato and pancetta pasta'],
    why: 'Render the pancetta slowly. That is the single most useful instruction here, because the fat that runs from it is the base of the sauce, and the crisp little cubes that are left are what the dish is about.\n\nCut the pancetta into small cubes and put it in a cold pan with a splash of oil. Heat gently for 8 minutes, so that the fat melts out and the pieces turn golden and crisp. Take them out and soften the onion in the fat for 5 minutes, adding the chilli flakes. Pour in the tomatoes and simmer for 12 minutes. **Return the pancetta to the sauce only at the end.** If it cooks in the sauce it turns soft and chewy.\n\nBoil the bucatini for 1 minute under the packet time and keep a mugful of the water. Toss it in the sauce with a splash of the water, so that it finishes cooking in the sauce and takes it up.\n\nOff the heat, stir in most of the pecorino and the pancetta, and serve with the rest.',
    ing: [
      '150 g pancetta, cut into small cubes',
      '1 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1/2 tsp chilli flakes',
      '800 g tinned chopped tomatoes',
      '350 g bucatini',
      '60 g pecorino, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Put the pancetta and oil in a cold pan and heat gently for 8 minutes until the fat has run and the cubes are crisp. Lift out and keep.',
      'Soften the onion in the fat for 5 minutes with the chilli flakes.',
      'Add the tomatoes and simmer for 12 minutes until thick.',
      'Boil the bucatini for 1 minute under the packet time, drain and keep a mugful of the water. Toss in the sauce with a splash of the water.',
      'Off the heat, stir in most of the pecorino and the pancetta. Serve with the rest and the pepper.'
    ],
    tips: [
      'Start the pancetta in a cold pan.',
      'Add the pancetta back at the end.',
      'Finish the pasta in the sauce.',
      'Use pecorino, not parmesan.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Roasted fennel', 'Red wine'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [629, 24, 77, 25, 6, 9, 920]
  },

  'linguine-al-limone': {
    d: 'Linguine tossed in a sauce of lemon juice and zest, butter, parmesan and pasta water, with black pepper and parsley.',
    meta: 'Linguine al limone: linguine in a lemon, butter and parmesan sauce. Four servings, cooked for 15 minutes.',
    kw: ['linguine al limone', 'lemon linguine', 'creamy lemon linguine', 'linguine with lemon and parmesan', 'italian lemon pasta'],
    why: 'Zest the lemons before you juice them. That is the short, sharp rule, because a juiced lemon is almost impossible to zest, and the zest has the most flavour of all.\n\nBoil the linguine for 1 minute under the packet time and keep a big mugful of the water. While it cooks, melt the butter in a wide pan over a low heat with the lemon zest and most of the juice. The sauce is made in the pan, in the minute after the pasta goes in. Add the pasta with a good splash of its water and toss hard over a low heat for 1 minute. **Take the pan off the heat before adding the cheese.** Cheese added to a hot pan clumps into rubbery strings.\n\nStir in the parmesan and another splash of water, tossing until the sauce turns glossy and creamy. The starch in the water is what makes it cling.\n\nFinish with black pepper, parsley and the remaining lemon juice.',
    ing: [
      '350 g linguine',
      '2 lemons, about 200 g, zested and juiced',
      '50 g butter',
      '60 g parmesan, grated',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Boil the linguine for 9 minutes, 1 minute under the packet time, and drain, keeping a big mugful of the water.',
      'Melt the butter in a wide pan over a low heat with the lemon zest and two thirds of the juice.',
      'Add the pasta with a splash of the water and toss hard for 1 minute.',
      'Take off the heat, stir in the parmesan and another splash of water until glossy.',
      'Finish with the remaining lemon juice, salt, pepper and parsley.'
    ],
    tips: [
      'Zest before juicing.',
      'Keep plenty of pasta water.',
      'Add the cheese off the heat.',
      'Serve at once.'
    ],
    pair: ['Rocket salad', 'Grilled prawns', 'Roasted asparagus', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [496, 18, 70, 16, 4, 4, 530]
  }
};
