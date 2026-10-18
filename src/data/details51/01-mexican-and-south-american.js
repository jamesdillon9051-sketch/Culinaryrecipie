'use strict';

/**
 * Volume fifty-one — the Americas, the Caribbean and the Pacific, first part.
 *
 * Twenty-five dishes: Mexican enchiladas suizas, three egg dishes, chile
 * colorado, mole verde, two kinds of tamales, tlayudas, squash blossom
 * quesadillas, frijoles de la olla, salsa roja and Mexican hot chocolate;
 * Peruvian causa and arroz chaufa; Colombian aborrajados and buñuelos;
 * Venezuelan reina pepiada arepas and tequeños; Ecuadorian locro and
 * encebollado; Bolivian salteñas; an Argentine asado; a Uruguayan chivito;
 * Brazilian vatapá; and Cuban lechón asado. Waits of an hour or more are
 * declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'enchiladas-suizas': {
    d: 'Shredded chicken rolled in corn tortillas, covered with a creamy green tomatillo sauce and melted cheese, and baked until bubbling.',
    meta: 'Enchiladas suizas: shredded chicken rolled in corn tortillas, covered with creamy green sauce and melted cheese. Four servings, cooked for 30 minutes.',
    kw: ['enchiladas suizas', 'enchiladas suizas recipe', 'swiss enchiladas', 'creamy green chicken enchiladas', 'mexican enchiladas with cream and cheese'],
    why: 'The name means Swiss, and the Swiss in question is the dairy: this is a Mexican dish in which cream and melted cheese turn a bright green sauce pale and silky. Enchiladas suizas became popular in Mexico City in the middle of the last century, and they are still on every family restaurant menu.\n\nThe sauce is the thing. Boil tomatillos, jalapeños, garlic and a few coriander stalks together for 8 minutes, then blend with the cooking water and salt until smooth. Fry the sauce in a spoonful of oil for 3 minutes. This cooks off the raw edge and deepens the colour. Stir in Mexican crema or soured cream. **Taste before pouring it over.** It should be tangy and balanced, not harsh.\n\nThe filling is shredded chicken, poached in salted water with onion and garlic and shredded fine. For the tortillas, warm them briefly in hot oil for 10 seconds, which keeps them from splitting when rolled. Fill, roll, and lay seam-side down in a baking dish.\n\nPour over the sauce, cover with grated cheese, and bake at 200°C for 15 minutes, until the cheese has melted and spotted brown at the edges. Serve with rice and beans.',
    ing: [
      '# Sauce',
      '500 g tomatillos, husked and rinsed',
      '2 jalapeños',
      '2 garlic cloves',
      '1 small handful fresh coriander, with stalks',
      '1 tbsp vegetable oil',
      '150 ml soured cream',
      '1/2 tsp salt',
      '# Enchiladas',
      '500 g cooked shredded chicken',
      '12 corn tortillas',
      '3 tbsp vegetable oil, for softening the tortillas',
      '150 g Oaxaca, mozzarella or Monterey Jack cheese, grated',
      '1/4 onion, finely sliced, to serve'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Boil the tomatillos, jalapeños and garlic in water for 8 minutes. Drain, keeping 100 ml of the water, and blend with the coriander and salt until smooth.',
      'Heat the 1 tbsp oil in a pan and cook the sauce for 3 minutes. Stir in the soured cream and simmer for 2 minutes.',
      'Heat the 3 tbsp oil in a small pan. Dip each tortilla for 10 seconds, drain on kitchen paper, fill with chicken and roll up. Lay seam-side down in a baking dish.',
      'Pour the sauce over, scatter with the cheese and bake for 15 minutes until bubbling and spotted brown.',
      'Top with the sliced onion and serve.'
    ],
    tips: [
      'Do not soak the tortillas in the oil; 10 seconds is enough.',
      'Use warm tortillas so they do not crack.',
      'Mexican crema is thinner than soured cream; thin the cream with a spoonful of milk if needed.'
    ],
    pair: ['Mexican rice', 'Refried beans', 'Lime wedges', 'Shredded lettuce'],
    store: 'Keeps in the fridge for 2 days. Reheat in a moderate oven.',
    nut: [782, 49, 43, 46, 7, 8, 670]
  },

  'huevos-a-la-mexicana': {
    d: 'Scrambled eggs cooked with diced tomato, onion and serrano chilli, whose red, white and green recall the Mexican flag.',
    meta: 'Huevos a la mexicana: scrambled eggs cooked with diced tomato, onion and serrano chilli. Two servings, cooked for 10 minutes.',
    kw: ['huevos a la mexicana', 'mexican scrambled eggs', 'huevos a la mexicana recipe', 'scrambled eggs with tomato and chilli', 'mexican breakfast eggs'],
    why: 'Red, white and green: that is the flag, and that is the breakfast. Huevos a la mexicana are scrambled eggs with the same three colours on the plate, tomato, onion and chilli, and it is what you order in Mexico when you want something quick, hot and filling for breakfast.\n\nThe skill is in the order. Start with a little oil in a pan over a medium heat. Cook the onion and chilli first, for 3 minutes, until soft but not coloured. Then add the tomato and cook for another 2 minutes, until it just starts to collapse and release its juice. **Do not let the tomato cook to a sauce.** It should stay in distinct pieces.\n\nPour in the eggs, beaten with a pinch of salt, and stir gently with a spatula over a medium-low heat for 2 or 3 minutes. Pull the eggs from the edge to the centre in slow folds, until they are creamy and just set. Take them off the heat while they still look slightly wet, since they continue to cook on the plate.\n\nServe with warm tortillas, refried beans and a spoonful of salsa. A slice of avocado on the side is traditional.',
    ing: [
      '1 tbsp vegetable oil',
      '1/2 onion, about 80 g, finely diced',
      '1 serrano chilli, finely chopped',
      '2 tomatoes, about 200 g, diced',
      '4 eggs',
      '1/4 tsp salt',
      '4 corn tortillas, warmed',
      '1/2 avocado, sliced'
    ],
    st: [
      'Heat the oil in a non-stick pan over a medium heat. Cook the onion and chilli for 3 minutes until soft.',
      'Add the tomatoes and cook for 2 minutes.',
      'Beat the eggs with the salt and pour into the pan. Stir slowly with a spatula for 2 to 3 minutes until just set but still creamy.',
      'Serve at once with the warm tortillas and avocado.'
    ],
    tips: [
      'Take the eggs off the heat while they are still creamy.',
      'Use ripe tomatoes.',
      'Add a handful of chopped coriander at the end.'
    ],
    pair: ['Refried beans', 'Warm tortillas', 'Avocado', 'Fresh salsa'],
    store: 'Best eaten straight away.',
    nut: [407, 17, 33, 23, 7, 6, 450]
  },

  'machaca-con-huevo': {
    d: 'Shredded dried beef scrambled with eggs, onion, tomato and green chilli, a northern Mexican breakfast usually eaten in a flour tortilla.',
    meta: 'Machaca con huevo: shredded dried beef scrambled with eggs, onion, tomato and green chilli. Two servings, cooked for 10 minutes.',
    kw: ['machaca con huevo', 'machaca con huevo recipe', 'mexican dried beef and eggs', 'northern mexican machaca breakfast', 'machaca burrito filling'],
    why: 'Machaca is meat that has been dried in the sun, a method developed in the north of Mexico long before refrigerators were common, and then pounded and shredded. Sonora and Chihuahua are the home of it, and breakfast tacos and burritos stuffed with machaca and eggs are the typical morning meal. The flavour is deeply beefy, salty and a little smoky.\n\nTrue machaca is sold dried, in bags, at Mexican grocers. Good beef jerky, unsweetened and plain, shredded by hand, makes a convenient stand-in. Check the label: sweet teriyaki jerky is not suitable. Soak the shredded jerky in warm water for 10 minutes and squeeze it dry. **Soaking softens the meat and removes some of the salt.** Without it, the machaca is tough and over-seasoned.\n\nCook the onion, chilli and tomato in a pan until soft, about 5 minutes. Add the machaca and stir for 2 minutes. Pour in beaten eggs and scramble gently for 2 minutes, until just set.\n\nServe in warm flour tortillas, with refried beans and a spoonful of salsa. For a heartier breakfast, roll it into a burrito and add a sprinkling of melted cheese.',
    ing: [
      '100 g plain unsweetened beef jerky, shredded',
      '2 tbsp vegetable oil',
      '1/2 onion, about 80 g, finely diced',
      '1 green chilli, finely chopped',
      '1 tomato, about 100 g, diced',
      '4 eggs',
      '1/4 tsp ground black pepper',
      '4 flour tortillas, warmed'
    ],
    st: [
      'Soak the shredded jerky in warm water for 10 minutes. Squeeze dry.',
      'Heat the oil in a pan and cook the onion, chilli and tomato for 5 minutes until soft.',
      'Add the jerky and stir for 2 minutes.',
      'Beat the eggs with the pepper, pour in and scramble gently for 2 minutes until just set.',
      'Serve in the warm tortillas.'
    ],
    tips: [
      'Taste before adding salt; the jerky is salty.',
      'Shred the jerky finely.',
      'Wrap in a tortilla for a burrito.'
    ],
    pair: ['Refried beans', 'Flour tortillas', 'Salsa', 'Black coffee'],
    store: 'Best eaten straight away.',
    nut: [796, 39, 61, 44, 5, 11, 1670]
  },

  'chile-colorado': {
    d: 'Beef stewed slowly in a deep red sauce of dried guajillo and ancho chillies, garlic, cumin and oregano.',
    meta: 'Chile colorado: beef stewed slowly in a deep red sauce of dried guajillo and ancho chillies, garlic, cumin and oregano. Six servings, cooked for 2 hours.',
    kw: ['chile colorado', 'chile colorado recipe', 'mexican red chile beef stew', 'chile colorado with guajillo', 'beef in red chile sauce'],
    why: 'The sauce is made from chillies and nothing else, and it should be dark red, thick and smooth, not hot but rich. Chile colorado is a northern Mexican stew, and it takes its name from the colour. The dried chillies, guajillo for flavour, ancho for body and a handful of árbol for heat, are the whole sauce.\n\nThe key step is toasting. Remove the stems and seeds of the chillies, and press them flat in a dry hot pan for 20 seconds on each side, just until they smell fruity. **Don\'t let them blacken**, or the sauce turns bitter. Soak in hot water for 20 minutes until soft.\n\nBlend the soaked chillies with garlic, cumin, oregano, a splash of vinegar and a little of the soaking water until completely smooth. Strain the sauce through a sieve if you can bear the effort. It removes the tough skins, and the result is silkier.\n\nBrown the beef chuck in batches, add the sauce, and simmer with a lid ajar for 2 hours, until the meat is tender and the sauce has thickened to coat a spoon. Serve with rice, beans and warm flour tortillas.',
    ing: [
      '6 dried guajillo chillies',
      '3 dried ancho chillies',
      '2 g dried chiles de árbol',
      '500 ml hot water',
      '4 garlic cloves',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '2 tbsp white vinegar',
      '1 tsp salt',
      '4 tbsp vegetable oil',
      '1 kg beef chuck, cut into 3 cm cubes',
      '1 onion, about 150 g, finely chopped',
      '300 ml beef stock'
    ],
    st: [
      'Remove the stems and seeds from the chillies. Toast in a dry pan for 20 seconds on each side. Soak in the hot water for 20 minutes.',
      'Blend the chillies with 250 ml of the soaking water, the garlic, cumin, oregano, vinegar and salt until smooth. Strain.',
      'Heat the oil in a heavy pot and brown the beef in batches for 10 minutes. Remove. Cook the onion in the same pot for 5 minutes.',
      'Return the beef, add the sauce and stock, and bring to a simmer. Cook with the lid ajar for 2 hours, stirring now and then, until the beef is tender and the sauce is thick.'
    ],
    tips: [
      'Toast the chillies briefly.',
      'Strain the sauce for a smooth texture.',
      'It tastes even better the next day.'
    ],
    pair: ['Mexican rice', 'Refried beans', 'Flour tortillas', 'Lime wedges'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [435, 34, 5, 31, 1, 2, 670]
  },

  'mole-verde': {
    untimed: ['cooling'],
    d: 'Chicken simmered in a thick green sauce of pumpkin seeds, tomatillos, green chillies and fresh herbs, a lighter cousin of mole poblano.',
    meta: 'Mole verde: chicken simmered in a thick green sauce of pumpkin seeds, tomatillos, green chillies and fresh herbs. Six servings, cooked for 60 minutes.',
    kw: ['mole verde', 'mole verde recipe', 'green mole with chicken', 'mexican green mole with pumpkin seeds', 'mole verde de pepita'],
    why: 'It is a mole that is bright rather than dark, and herbs rather than chocolate are its signature. Mole verde is made with raw pumpkin seeds, called pepitas, which give the sauce its body and a nutty richness, and with a large handful of fresh green things: coriander, parsley, lettuce, radish leaves or epazote. The sauce is the colour of grass, and the flavour is fresh, tangy and mild.\n\nToast the pumpkin seeds in a dry pan, stirring, until they swell and begin to pop, about 3 minutes. Don\'t let them brown, or the sauce loses its green colour. **Colour is the thing to protect.** Cool them, then grind to a fine powder in a blender before adding anything else.\n\nSimmer tomatillos, serrano chillies, garlic and onion for 8 minutes, then blend with the herbs and ground seeds, adding stock until the mixture is smooth and pourable. Strain if you wish.\n\nFry the sauce in lard or oil for 10 minutes, stirring constantly. It will thicken, darken a little and smell cooked. Add the poached chicken and simmer for 15 minutes more. The final sauce should coat the back of a spoon. Serve with rice and tortillas.',
    ing: [
      '150 g raw pumpkin seeds (pepitas)',
      '500 g tomatillos, husked',
      '3 serrano chillies',
      '1/2 onion, about 80 g',
      '3 garlic cloves',
      '1 large bunch fresh coriander, about 60 g',
      '1 handful fresh parsley, about 30 g',
      '4 romaine lettuce leaves',
      '500 ml chicken stock',
      '3 tbsp lard or vegetable oil',
      '1 tsp salt',
      '8 chicken thighs on the bone, poached, about 1 kg'
    ],
    st: [
      'Toast the pumpkin seeds in a dry pan for 3 minutes until they swell and pop. Cool, then grind to a fine powder.',
      'Boil the tomatillos, chillies, onion and garlic in water for 8 minutes. Drain and blend with the coriander, parsley, lettuce, ground seeds and 250 ml of the stock until smooth.',
      'Heat the lard in a wide pot and fry the sauce for 10 minutes, stirring constantly, until thickened.',
      'Add the remaining stock, salt and the chicken and simmer for 15 minutes until the sauce coats a spoon.'
    ],
    tips: [
      'Stir the sauce constantly while it fries.',
      'Do not overcook the herbs.',
      'Add water if the sauce is too thick.'
    ],
    pair: ['White rice', 'Warm tortillas', 'Refried beans', 'Pickled onions'],
    store: 'Keeps in the fridge for 3 days. The colour dulls but the taste holds.',
    nut: [541, 47, 23, 29, 12, 9, 860]
  },

  'chicken-tamales': {
    d: 'Steamed parcels of soft corn masa filled with chicken in a red chilli sauce, wrapped in corn husks.',
    meta: 'Chicken tamales: steamed parcels of soft corn masa filled with chicken in a red chilli sauce, wrapped in corn husks. Makes twelve, steamed for 90 minutes.',
    kw: ['chicken tamales', 'red chile chicken tamales', 'tamales recipe', 'mexican chicken tamales', 'homemade tamales with corn husks'],
    why: 'It is a day of work for a dozen parcels, and it is best done with friends. Tamales are traditionally made in assembly lines, one person spreading masa, another adding filling, another folding, and the work is part of the celebration. They are eaten at Christmas and on special days across Mexico and Central America.\n\nThe dough is masa harina, a special corn flour treated with lime, mixed with warm stock, baking powder, salt and whipped lard. The lard is whipped until pale and fluffy for 3 minutes before the flour goes in; this makes the tamales light. **Test the masa by dropping a small ball into a cup of cold water.** If it floats, it has enough air and is ready.\n\nThe filling is shredded chicken in a red chilli sauce made from guajillo and ancho chillies, garlic and cumin. It should be moist but not wet, otherwise the tamales leak.\n\nSoak the corn husks in hot water for 30 minutes. Spread a thin layer of masa on each, put a spoonful of filling in the centre, fold the sides over and fold the tail up. Stand them upright in a steamer and steam for 90 minutes, until the masa pulls away from the husk.',
    ing: [
      '# Filling',
      '4 dried guajillo chillies',
      '2 dried ancho chillies',
      '2 garlic cloves',
      '1 tsp ground cumin',
      '250 ml chicken stock',
      '500 g cooked shredded chicken',
      '1/2 tsp salt',
      '# Masa',
      '125 g lard',
      '400 g masa harina',
      '1 tsp baking powder',
      '1 1/2 tsp salt',
      '600 ml warm chicken stock',
      '# To assemble',
      '24 dried corn husks'
    ],
    st: [
      'Toast the chillies, soak in hot water for 20 minutes, and blend with the garlic, cumin and 250 ml stock. Simmer for 5 minutes. Mix with the chicken and salt.',
      'Soak the corn husks in hot water for 30 minutes. Drain.',
      'Whip the lard for 3 minutes until fluffy. Mix the masa harina, baking powder and salt, and beat into the lard alternately with the warm stock until a soft, spreadable dough forms.',
      'Spread 3 tablespoons of masa on the wide end of a husk, add 2 tablespoons of filling down the centre, fold in the sides and fold up the tail. Make 12.',
      'Stand the tamales upright in a steamer and steam over boiling water for 90 minutes. Rest for 10 minutes before unwrapping.'
    ],
    tips: [
      'Do not overfill the husks.',
      'Keep the water topped up in the steamer.',
      'Tamales freeze well for 3 months.'
    ],
    pair: ['Salsa verde', 'Mexican hot chocolate', 'Atole', 'Crema'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months. Re-steam to reheat.',
    nut: [603, 24, 84, 19, 8, 10, 750]
  },

  'sweet-tamales': {
    d: 'Soft, cake-like corn tamales sweetened with sugar and cinnamon, studded with raisins and steamed in husks, a Mexican breakfast and holiday treat.',
    meta: 'Sweet tamales: soft, cake-like corn tamales sweetened with sugar and cinnamon, studded with raisins. Makes twelve, steamed for 75 minutes.',
    kw: ['sweet tamales', 'tamales dulces', 'mexican sweet tamales recipe', 'pink sweet tamales with raisins', 'cinnamon corn tamales'],
    why: 'Pink or white, with raisins or without, sweet tamales are served at breakfast, for merienda with a cup of atole, and on Christmas Eve. They are the same shape as savoury tamales, but the filling and the flavour are an altogether different matter: the masa is sweetened and enriched, and the result tastes like a soft, moist cornbread.\n\nThe dough is built on lard or butter, whipped until pale, with sugar added at the same time so it dissolves in the fat. Mix in masa harina, baking powder, cinnamon, a splash of vanilla and warm milk to make a soft, spreadable batter. A drop of red food colour gives the traditional pink tint. **Whip the fat and sugar for a full 3 minutes.** The air makes the tamales light.\n\nA handful of raisins soaked in hot water for 10 minutes goes into the middle of each tamal. Pineapple or coconut are also common.\n\nSpread masa on a soaked corn husk, add raisins, fold, and stand the tamales upright in a steamer. Steam for 75 minutes, until the masa is firm and separates cleanly from the husk. Cool for 10 minutes, since they firm up as they stand. Serve warm.',
    ing: [
      '125 g butter or lard, softened',
      '150 g caster sugar',
      '300 g masa harina',
      '1 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '500 ml warm whole milk',
      '80 g raisins, soaked in hot water for 10 minutes and drained',
      '24 dried corn husks, soaked in hot water for 30 minutes'
    ],
    st: [
      'Beat the butter and sugar for 3 minutes until pale and fluffy.',
      'Mix the masa harina, baking powder, cinnamon and salt. Beat into the butter alternately with the vanilla and milk to make a soft, spreadable batter.',
      'Spread 3 tablespoons of batter on each husk, add a few raisins in the centre and fold the husk around. Make 12.',
      'Stand upright in a steamer over boiling water. Steam for 75 minutes.',
      'Cool for 10 minutes before unwrapping.'
    ],
    tips: [
      'Add a few drops of red colouring for pink tamales.',
      'Check the water level in the steamer.',
      'Serve with atole or hot chocolate.'
    ],
    pair: ['Atole', 'Mexican hot chocolate', 'Coffee', 'Fresh fruit'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [571, 13, 96, 15, 8, 28, 160]
  },

  'tlayudas': {
    d: 'A large, crisp Oaxacan tortilla spread with black bean paste and topped with stringy cheese, shredded cabbage, avocado, meat and salsa.',
    meta: 'Tlayudas: a large, crisp Oaxacan tortilla spread with bean paste and topped with cheese, cabbage, avocado and salsa. Two servings, cooked for 15 minutes.',
    kw: ['tlayudas', 'tlayuda oaxaca', 'tlayudas recipe', 'oaxacan pizza', 'crispy oaxacan tortilla with beans and cheese'],
    why: 'Often called the Mexican pizza, the tlayuda is neither Mexican nor Italian in character but pure Oaxaca. A big, thin, dry-baked tortilla, 30 cm across, is spread with a paste of black beans, covered with a mountain of stringy white cheese and toasted on a grill until the edges snap. Then come the toppings: shredded cabbage, avocado, tomato, a meat of some kind and salsa.\n\nThe tortilla is traditionally made from heirloom corn and cooked until it dries and curls at the edges. In a home kitchen, large flour tortillas or thick corn tortillas, pan-toasted on both sides for 2 minutes, come close. **The base must be crisp before the toppings go on.** A soft base turns the whole thing into a wrap.\n\nThe bean spread is made by mashing black beans with a little of their liquid and a spoonful of lard, cooked down for 5 minutes. It should be thick enough to spread.\n\nSpread the beans on the toasted tortilla, scatter with Oaxaca cheese or mozzarella, and put under a hot grill for 3 minutes until the cheese melts. Add cabbage, avocado, tomato, chorizo or grilled meat, and a spoonful of salsa. Eat folded in half.',
    ing: [
      '2 large flour tortillas, 30 cm across, about 140 g',
      '200 g tinned black beans, drained',
      '2 tbsp lard or vegetable oil',
      '100 ml water',
      '150 g Oaxaca cheese or mozzarella, shredded',
      '100 g chorizo, fried and crumbled',
      '1/4 white cabbage, about 100 g, shredded',
      '1 avocado, sliced',
      '1 tomato, about 100 g, sliced',
      '4 tbsp salsa roja',
      '1 lime, cut into wedges'
    ],
    st: [
      'Mash the beans with the lard and water in a pan. Cook for 5 minutes until thick and spreadable.',
      'Toast each tortilla in a dry pan over a medium-high heat for 2 minutes on each side until crisp.',
      'Heat the grill to high. Spread the beans over the tortillas, cover with the cheese and grill for 3 minutes until melted.',
      'Top with the chorizo, cabbage, avocado, tomato and salsa. Serve with lime and fold to eat.'
    ],
    tips: [
      'Toast the tortillas until crisp.',
      'Use Oaxaca cheese if you can find it.',
      'Add tasajo (thin salted beef) for the classic version.'
    ],
    pair: ['Mezcal', 'Fresh salsa', 'Lime wedges', 'Cold beer'],
    store: 'Best eaten straight away.',
    nut: [959, 39, 68, 59, 16, 9, 1840]
  },

  'quesadillas-de-flor-de-calabaza': {
    d: 'Folded tortillas filled with melted cheese and sautéed squash blossoms, onion and chilli, cooked on a hot griddle.',
    meta: 'Quesadillas de flor de calabaza: folded tortillas filled with melted cheese and sautéed squash blossoms, onion and chilli. Four servings, cooked for 10 minutes.',
    kw: ['quesadillas de flor de calabaza', 'squash blossom quesadillas', 'flor de calabaza quesadilla recipe', 'courgette flower quesadillas', 'mexican squash blossom quesadilla'],
    why: 'In midsummer Mexican markets are full of bunches of orange squash blossoms, and the first thing a cook thinks of is a quesadilla. The flowers are delicate and nearly sweet, with a faint flavour of courgette, and they wilt in a pan in a minute. Combined with melted cheese, they make the best of the season.\n\nCourgette flowers, available from farm shops and grocers in summer, work well. Clean them by removing the stamens and the green sepals at the base. Rinse carefully, pat dry, and tear into strips. **Don\'t cook them for more than 2 minutes.** They collapse and turn watery with overcooking.\n\nSoften chopped onion and a small chilli in oil for 3 minutes, add the strips of blossom, and cook for 2 minutes, with a pinch of salt. A sprig of epazote adds a distinctive, herby note if you have it; coriander is a fair replacement.\n\nSpread a handful of Oaxaca cheese or mozzarella over half a corn tortilla, add a spoonful of the squash mixture, fold, and cook on a hot dry griddle for 2 minutes on each side, until the tortilla is blistered and the cheese has melted. Serve with salsa verde and lime.',
    ing: [
      '12 courgette flowers, about 150 g, cleaned',
      '2 tbsp vegetable oil',
      '1/2 onion, about 80 g, finely chopped',
      '1 serrano chilli, finely chopped',
      '1/4 tsp salt',
      '8 corn tortillas',
      '200 g Oaxaca cheese or mozzarella, shredded',
      '2 tbsp chopped fresh coriander',
      '1 lime, cut into wedges'
    ],
    st: [
      'Tear the flowers into strips. Heat the oil and cook the onion and chilli for 3 minutes.',
      'Add the flowers and salt and cook for 2 minutes. Stir in the coriander.',
      'Heat a dry griddle over a medium-high heat. Lay a tortilla on it, cover half with cheese and a spoonful of the filling, and fold over.',
      'Cook for 2 minutes on each side until blistered and the cheese has melted. Repeat with the rest. Serve with the lime.'
    ],
    tips: [
      'Use fresh flowers the day you buy them.',
      'Do not overfill the tortillas.',
      'Add a little epazote if you can find it.'
    ],
    pair: ['Salsa verde', 'Crema', 'Refried beans', 'Lime wedges'],
    store: 'Best eaten straight away.',
    nut: [339, 15, 27, 19, 4, 3, 470]
  },

  'frijoles-de-la-olla': {
    d: 'Pinto beans simmered slowly in a pot with onion, garlic and herbs until creamy, served in their own broth.',
    meta: 'Frijoles de la olla: pinto beans simmered slowly in a pot with onion, garlic and herbs until creamy, served in their broth. Six servings, cooked for 2 hours.',
    kw: ['frijoles de la olla', 'frijoles de olla recipe', 'mexican pot beans', 'mexican pinto beans from dried', 'beans cooked in a pot mexico'],
    why: 'It is the easiest dish in this book and probably the most important in Mexico. Frijoles de la olla, pot beans, is simply beans cooked slowly in water with onion and garlic until they are soft and the liquid has turned into a thick, savoury broth. It is served as a soup, mashed into refried beans, spooned onto tacos, and sits on the stove most days of the week.\n\nUse dry pinto beans, picked over for stones and rinsed. Soaking is optional. Without soaking, they take about 2 hours; with an overnight soak, they take 1 hour 15 minutes. Both work, and the unsoaked beans make the better broth. **Don\'t add salt at the start.** Salt added early makes the skins tough, and the beans stay firm. Add it once they have begun to soften, after about an hour.\n\nCover the beans with plenty of water, about 5 cm above, add half an onion, 3 cloves of garlic and a sprig of epazote or a bay leaf, and bring to the boil. Skim, then reduce to the lowest simmer. Keep the pot partly covered and top up with hot water if the level drops.\n\nThe beans are ready when they crush easily between the fingers. Season with salt and simmer for another 15 minutes.',
    ing: [
      '400 g dried pinto beans, rinsed and picked over',
      '2 litres water',
      '1/2 onion, about 80 g',
      '3 garlic cloves, peeled',
      '1 bay leaf',
      '1 tbsp lard or vegetable oil',
      '1 1/2 tsp salt'
    ],
    st: [
      'Put the beans, water, onion, garlic, bay leaf and lard in a large heavy pot. Bring to a boil and skim.',
      'Lower the heat to a gentle simmer, partly cover, and cook for 1 hour, adding hot water if the level drops.',
      'Add the salt and continue to simmer for 1 hour more, until the beans are completely soft and the broth is thick.',
      'Remove the onion and bay leaf. Serve in bowls with the broth.'
    ],
    tips: [
      'Top up with hot water, not cold.',
      'Keep the heat at a bare simmer.',
      'Mash leftover beans in a pan with lard for refried beans.'
    ],
    pair: ['Warm tortillas', 'Rice', 'Chopped onion and coriander', 'Lime'],
    store: 'Keeps in the fridge for 5 days and freezes for up to 3 months.',
    nut: [255, 15, 42, 3, 10, 2, 600]
  },

  'salsa-roja': {
    untimed: ['cooling'],
    d: 'A cooked table salsa of roasted tomatoes, dried or fresh chillies, garlic and onion blended and simmered briefly.',
    meta: 'Salsa roja: a cooked table salsa of roasted tomatoes, dried or fresh chillies, garlic and onion, blended and simmered briefly. Eight servings, cooked for 15 minutes.',
    kw: ['salsa roja', 'salsa roja recipe', 'mexican red salsa', 'roasted tomato salsa', 'restaurant style salsa roja'],
    why: 'Roasting the tomatoes is the flavour. A table salsa made from raw tomatoes tastes fresh and sharp; one made from tomatoes blistered in a hot pan or under a grill is deeper, sweeter and slightly smoky, and it is the salsa you get with tortilla chips in a good Mexican restaurant. It takes 15 minutes.\n\nPut whole tomatoes, a few chillies (jalapeños, serranos or árbol, depending on heat), half an onion and 2 unpeeled garlic cloves on a hot dry pan or under the grill. Cook for 10 minutes, turning, until the tomato skins have blackened in patches and the tomatoes have collapsed. **The black spots add the smoke, so let them happen.**\n\nPeel the garlic, and put everything, with the juices from the pan, into a blender with salt and a handful of coriander. Pulse for a coarse sauce, or blend for a smooth one. Taste and add more salt, a squeeze of lime or a pinch of sugar if the tomatoes are sharp.\n\nFor a deeper flavour, fry the blended salsa in a spoonful of oil for 5 minutes. Cool before serving. It will keep in the fridge for a week.',
    ing: [
      '600 g ripe tomatoes',
      '2 jalapeños or serranos',
      '2 g dried chiles de árbol',
      '1/2 onion, about 80 g',
      '2 garlic cloves, unpeeled',
      '1 tsp salt',
      '2 tbsp chopped fresh coriander',
      '1 tbsp lime juice',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Heat a heavy dry pan over a high heat. Roast the tomatoes, jalapeños, onion and garlic, turning, for 10 minutes until blackened in patches. Toast the dried chillies for 20 seconds.',
      'Peel the garlic. Blend everything with the salt, coriander and lime juice to the texture you like.',
      'Heat the oil in a pan, add the salsa and simmer for 5 minutes. Cool before serving.'
    ],
    tips: [
      'Roast in batches if the pan is small.',
      'Remove the seeds from the chillies for less heat.',
      'Add more lime or salt to taste.'
    ],
    pair: ['Tortilla chips', 'Tacos', 'Eggs', 'Grilled meat'],
    store: 'Keeps in the fridge for 1 week or freezes for 2 months.',
    nut: [42, 1, 5, 2, 1, 3, 300]
  },

  'mexican-hot-chocolate': {
    d: 'Milk simmered with dark chocolate, cinnamon and a pinch of chilli, whisked until frothy for a thick, spiced drink.',
    meta: 'Mexican hot chocolate: milk simmered with dark chocolate, cinnamon and a pinch of chilli, whisked until frothy. Two servings, ready in 15 minutes.',
    kw: ['mexican hot chocolate', 'mexican hot chocolate recipe', 'spiced hot chocolate with cinnamon', 'abuelita style hot chocolate', 'authentic mexican hot chocolate'],
    why: 'It is thicker, grainier and more cinnamon-scented than the hot chocolate of Europe, and the foam is the point. Mexican chocolate is sold in discs, made from roasted cacao ground with sugar and cinnamon, which gives it a coarse texture. It is melted into hot milk and whisked, traditionally with a wooden molinillo, until a layer of froth rises.\n\nIf you cannot find the discs, a mix of good dark chocolate with a stick of cinnamon in the milk does a decent job. Heat 500 ml of milk with the cinnamon stick until steaming, not boiling, for 5 minutes, which draws out the spice. **Don\'t let the milk boil**, because a skin forms and the flavour turns flat.\n\nAdd 60 g of chopped dark chocolate, a spoonful of sugar to taste and a tiny pinch of chilli powder or cayenne. Whisk with a balloon whisk or an electric frother for a full minute, until the chocolate melts and the froth builds.\n\nThe chilli should be barely perceptible: it adds warmth at the back of the throat, not heat. Pour into mugs, discard the cinnamon, and serve at once. A churro on the side is the classic accompaniment.',
    ing: [
      '500 ml whole milk',
      '3 g cinnamon stick',
      '60 g dark chocolate, 70 per cent, chopped',
      '1 tbsp caster sugar',
      '1/4 tsp ground cinnamon',
      '0.2 g cayenne pepper'
    ],
    st: [
      'Warm the milk and cinnamon stick in a pan over a medium heat for 5 minutes until steaming, not boiling.',
      'Add the chocolate, sugar, ground cinnamon and cayenne and whisk until the chocolate melts.',
      'Whisk hard for 1 minute until frothy. Remove the cinnamon stick and pour into mugs.'
    ],
    tips: [
      'Do not let the milk boil.',
      'Whisk vigorously for the froth.',
      'Use Mexican chocolate discs if you have them.'
    ],
    pair: ['Churros', 'Sweet bread (pan dulce)', 'Tamales', 'Biscuits'],
    store: 'Best drunk straight away.',
    nut: [359, 10, 37, 19, 3, 33, 110]
  },

  'causa-rellena': {
    d: 'A cold Peruvian terrine of lime-spiked yellow potato layered with a filling of chicken, avocado and mayonnaise.',
    meta: 'Causa rellena: a cold Peruvian terrine of lime-spiked yellow potato layered with chicken, avocado and mayonnaise. Six servings, cooked for 20 minutes.',
    kw: ['causa rellena', 'causa limena', 'peruvian causa rellena recipe', 'peruvian layered potato terrine', 'causa with chicken and avocado'],
    why: 'It looks like a cake and is made of potatoes, which is part of its charm. Causa rellena is a Peruvian dish of mashed yellow potato seasoned with lime and ají amarillo, pressed into layers around a filling and served cold. The yellow potato is the heart of it, buttery and dense, and the seasoning is bright with lime.\n\nUse a yellow-fleshed variety, such as Yukon Gold or Maris Piper in the UK. Boil whole in their skins for 20 minutes, until soft, then peel while hot and press through a ricer or mash until perfectly smooth. **Mash while the potatoes are hot.** Cold potato will not become smooth.\n\nSeason with ají amarillo paste, lime juice, oil and salt, working it in with your hands until the mixture feels like a soft dough. Taste and adjust: the lime should be clear and sharp.\n\nThe filling is chicken salad: poached chicken, shredded and mixed with mayonnaise, diced avocado, a little finely chopped onion and a squeeze of lime. Layer half the potato in a lined tin, add the filling and press the rest on top. Chill for 1 hour, turn out, and decorate with olives, sliced egg and more mayonnaise.',
    ing: [
      '# Potato layers',
      '800 g yellow-fleshed potatoes',
      '3 tbsp ají amarillo paste',
      '4 tbsp lime juice',
      '4 tbsp vegetable oil',
      '1 tsp salt',
      '# Filling',
      '300 g cooked chicken, shredded',
      '4 tbsp mayonnaise',
      '1 avocado, diced',
      '2 tbsp finely chopped red onion',
      '1 tbsp lime juice',
      '1/4 tsp salt',
      '# To serve',
      '2 eggs, boiled and sliced',
      '8 black olives'
    ],
    st: [
      'Boil the potatoes whole for 20 minutes until soft. Peel while hot and mash until completely smooth.',
      'Work in the ají amarillo, 4 tbsp lime juice, oil and 1 tsp salt with your hands until the mixture is a smooth, soft dough.',
      'Mix the chicken, mayonnaise, avocado, onion, 1 tbsp lime juice and 1/4 tsp salt.',
      'Line a loaf tin with cling film. Press half the potato into the base, spread over the chicken filling, and top with the remaining potato. Chill for 1 hour.',
      'Turn out, cut into slices, and decorate with the egg and olives.'
    ],
    tips: [
      'Press the layers firmly.',
      'Chill well before slicing.',
      'Use a hot knife to cut cleanly.'
    ],
    pair: ['Lime wedges', 'Pisco sour', 'Green salad', 'Fried yuca'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [427, 19, 27, 27, 5, 2, 740],
    rest: [60, 'Chilling']
  },

  'arroz-chaufa': {
    d: 'Peruvian-Chinese fried rice with chicken, egg, spring onion and ginger, seasoned with soy sauce and a splash of sesame oil.',
    meta: 'Arroz chaufa: Peruvian-Chinese fried rice with chicken, egg, spring onion and ginger, seasoned with soy sauce. Four servings, cooked for 15 minutes.',
    kw: ['arroz chaufa', 'peruvian chaufa', 'arroz chaufa recipe', 'peruvian chinese rice with chicken', 'chifa rice with chicken'],
    why: 'In Lima, the Chinese restaurants are called chifas, and they have been cooking for Peruvians since the 1800s. Their fried rice, chaufa, is on every menu and in many homes, and it has its own local character: the rice is smoky, the egg is cooked as a thin omelette and sliced, and the seasoning is strong on ginger and soy.\n\nCold cooked rice is essential. Rice that has been cooked the day before and chilled has dried out and fries in separate grains. Fresh rice sticks. **Break up the clumps with wet hands before it goes in the pan.** It makes stir-frying simpler.\n\nCook the egg first. Beat 2 eggs and pour them into an oiled hot wok, tilt to make a thin sheet, cook for 30 seconds and lift out. Slice into ribbons. In the same wok, cook sliced chicken for 3 minutes, then ginger and garlic for 30 seconds, then add the rice and toss over a high heat for 4 minutes.\n\nThe seasoning is soy sauce and a little oyster sauce, with a final splash of sesame oil. Fold in the egg ribbons and the spring onions, and serve at once. A thin strip of chilli is optional.',
    ing: [
      '3 tbsp vegetable oil',
      '2 eggs, beaten',
      '300 g chicken breast, thinly sliced',
      '1 tbsp fresh ginger, grated',
      '2 garlic cloves, crushed',
      '500 g cooked and cooled long-grain rice',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp sesame oil',
      '4 spring onions, sliced'
    ],
    st: [
      'Heat 1 tbsp of the oil in a wok and make a thin omelette with the eggs, 30 seconds per side. Lift out, roll up and slice into ribbons.',
      'Heat another tablespoon of oil, add the chicken and cook for 3 minutes. Add the ginger and garlic for 30 seconds.',
      'Add the remaining oil and the rice. Toss over a high heat for 4 minutes until hot and starting to crisp.',
      'Add the soy sauce, oyster sauce and sesame oil and toss. Fold in the egg ribbons and spring onions.'
    ],
    tips: [
      'Use day-old rice.',
      'Keep the wok very hot.',
      'Add shrimp or char siu for variations.'
    ],
    pair: ['Wonton soup', 'Aji sauce', 'Lime wedges', 'Inca Kola'],
    store: 'Keeps in the fridge for 1 day. Reheat thoroughly.',
    nut: [685, 30, 103, 17, 2, 1, 830]
  },

  'aborrajados': {
    d: 'Ripe plantain slices filled with cheese, coated in a light batter and cooked until crisp outside and soft and melted within.',
    meta: 'Aborrajados: ripe plantain slices filled with cheese, coated in batter and cooked until crisp outside and melted within. Four servings, cooked for 15 minutes.',
    kw: ['aborrajados', 'colombian aborrajados', 'aborrajados recipe', 'plantain with cheese colombia', 'cali aborrajados'],
    why: 'The plantain must be very ripe, almost black, because that is when it is sweetest, and the sweetness against the salty cheese is the idea. An aborrajado is a Colombian snack from Cali, a sandwich of two slices of soft plantain around a slab of cheese, dipped in batter and cooked in oil until crisp and golden.\n\nPeel two very ripe plantains, and cut each lengthways into thick slices, 1 cm thick, to give 8 slices. Cook them gently in oil, 2 minutes on each side, until softened and golden. Drain. **This first cooking sweetens and softens them.** A raw plantain is too hard to fold.\n\nThe cheese is a fresh, salty white one, such as queso fresco, halloumi or mozzarella, cut into thin slabs. Place a slab between two plantain slices, press them together, and secure with a toothpick if needed.\n\nThe batter is flour, a beaten egg, a splash of milk and a pinch of salt, thick enough to coat the back of a spoon. Dip each sandwich in the batter and cook in oil at 170°C for 2 to 3 minutes per side, until deep gold. Drain and serve hot with guava paste on the side, if you like, or a squeeze of lime.',
    ing: [
      '2 very ripe plantains, about 500 g',
      '200 ml vegetable oil, for frying',
      '120 g queso fresco or mozzarella, cut into 4 thin slabs',
      '80 g plain flour',
      '1 egg, beaten',
      '60 ml milk',
      '1/4 tsp salt'
    ],
    st: [
      'Peel the plantains and slice each lengthways into 4 slices, 1 cm thick.',
      'Heat the oil in a deep frying pan over a medium heat and cook the plantain slices for 2 minutes on each side. Drain on kitchen paper.',
      'Sandwich a slab of cheese between two plantain slices and press together. Make 4.',
      'Whisk the flour, egg, milk and salt into a thick batter. Dip each sandwich and fry in the hot oil for 2 to 3 minutes on each side until deep golden. Drain and serve hot.'
    ],
    tips: [
      'Use plantains that are almost black.',
      'Press the sandwiches together firmly.',
      'Serve with a slice of guava paste.'
    ],
    pair: ['Guava paste', 'Lime wedges', 'Hogao', 'Colombian coffee'],
    store: 'Best eaten straight away.',
    nut: [767, 11, 57, 55, 3, 20, 380]
  },

  'colombian-bunuelos': {
    d: 'Crisp, golden balls of salty white cheese, cornflour and egg, light and puffy inside, a Colombian breakfast and Christmas treat.',
    meta: 'Colombian buñuelos: crisp, golden balls of salty white cheese, cornflour and egg, light and puffy inside. Makes twenty, cooked for 20 minutes.',
    kw: ['colombian bunuelos', 'buñuelos colombianos', 'colombian bunuelos recipe', 'cheese buñuelos', 'colombian cheese fritters'],
    why: 'They are round, golden and no bigger than a ping-pong ball, and they are eaten at Christmas in Colombia with natilla, a thick milk pudding. The inside is soft and slightly sweet, the outside is crisp, and the cheese gives them a savoury salty tang.\n\nThe cheese is queso costeño, a salty crumbly white cheese. Outside Colombia, a mix of feta and a firm unsalted cheese like mozzarella or cottage cheese does a similar job. Grate it finely, since lumps prevent a smooth dough. Mix with cornflour, a little plain flour, sugar, baking powder, an egg and a splash of milk. **The dough should be soft and just hold together.** It is sticky, and wet hands help with shaping.\n\nThe oil temperature is the other critical factor. It needs to be at 160°C, lower than for most deep-frying. At that temperature the buñuelos sink to the bottom, rise slowly, and expand as the centre cooks. Too hot and the outside browns before the inside has set.\n\nRoll into balls, drop in carefully, and cook for 5 minutes, turning, until deep golden. They puff dramatically. Drain on kitchen paper and serve warm.',
    ing: [
      '250 g queso fresco or a mix of feta and mozzarella, finely grated',
      '120 g cornflour',
      '60 g plain flour',
      '2 tbsp caster sugar',
      '1 tsp baking powder',
      '1 egg',
      '3 tbsp milk',
      '400 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the cheese, cornflour, plain flour, sugar and baking powder. Add the egg and milk and mix to a soft, sticky dough.',
      'With wet hands, roll into 20 balls the size of a ping-pong ball.',
      'Heat the oil to 160°C in a deep pan.',
      'Fry the balls in 3 batches for 5 minutes each, turning, until deep golden and puffed.',
      'Drain on kitchen paper and serve warm.'
    ],
    tips: [
      'Keep the oil at a low temperature.',
      'Wet your hands for rolling.',
      'Do not overcrowd the pan.'
    ],
    pair: ['Hot chocolate', 'Natilla', 'Coffee', 'Hogao'],
    store: 'Best eaten warm. Keeps for 1 day and reheats in a hot oven.',
    nut: [241, 3, 10, 21, 0, 2, 120]
  },

  'reina-pepiada-arepas': {
    d: 'Grilled maize cakes split open and filled with a creamy salad of shredded chicken, avocado and mayonnaise, the most famous Venezuelan arepa.',
    meta: 'Reina pepiada arepas: maize cakes split open and filled with a creamy salad of shredded chicken, avocado and mayonnaise. Four servings, cooked for 25 minutes.',
    kw: ['reina pepiada arepas', 'reina pepiada', 'arepas reina pepiada recipe', 'venezuelan chicken avocado arepas', 'arepas with chicken salad'],
    why: 'The name means curvy queen, and it has a story attached: it was given in 1955 to honour Susana Duijm, a Venezuelan Miss World. The arepa that carries it is a split maize cake stuffed with chicken and avocado, and it is the most popular filling in arepa bars in Caracas and in every Venezuelan restaurant abroad.\n\nThe arepa itself is a thick patty of pre-cooked maize flour, known as masarepa, mixed with warm water and salt. The dough should feel like soft play dough, smooth and not sticky. Let it rest for 5 minutes, divide into 8 balls and flatten to discs 10 cm across and 1.5 cm thick. **Smooth the edges so there are no cracks.** Cracks open in the pan.\n\nCook the arepas on a lightly oiled griddle over a medium heat for 5 minutes on each side, until they have a golden crust and sound hollow when tapped. Finish them in a 180°C oven for 10 minutes, which cooks the middle.\n\nThe filling is simple: shredded cooked chicken mixed with mashed avocado, mayonnaise, lime juice, chopped coriander and salt. It should be creamy and mild. Split the arepas, scoop out a little of the crumb, and fill generously.',
    ing: [
      '# Arepas',
      '300 g pre-cooked maize flour (masarepa)',
      '500 ml warm water',
      '1 tsp salt',
      '1 tbsp vegetable oil, for the griddle',
      '# Filling',
      '400 g cooked chicken, shredded',
      '2 ripe avocados',
      '4 tbsp mayonnaise',
      '2 tbsp lime juice',
      '2 tbsp chopped fresh coriander',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan). Mix the maize flour, warm water and salt to a soft dough. Rest for 5 minutes.',
      'Divide into 8 balls and flatten to smooth discs 10 cm across and 1.5 cm thick.',
      'Cook on a lightly oiled griddle over a medium heat for 5 minutes on each side until golden. Transfer to a tray and bake for 10 minutes.',
      'Mash the avocados with the mayonnaise, lime juice, coriander and salt and mix with the chicken.',
      'Split the arepas, scoop out a little crumb and fill with the chicken salad.'
    ],
    tips: [
      'Use pre-cooked maize flour only.',
      'Smooth the edges of the discs.',
      'Serve at once while the arepas are warm.'
    ],
    pair: ['Hot sauce', 'Black beans', 'Fried plantain', 'Fresh juice'],
    store: 'Best eaten straight away. The filling keeps in the fridge for 1 day.',
    nut: [697, 36, 64, 33, 7, 1, 1060]
  },

  'tequenos': {
    d: 'Sticks of salty white cheese wrapped in thin dough and cooked until golden and crisp, a Venezuelan party snack.',
    meta: 'Tequeños: sticks of salty white cheese wrapped in thin dough and cooked until golden and crisp. Makes twenty, cooked for 10 minutes.',
    kw: ['tequenos', 'tequeños', 'venezuelan tequenos recipe', 'cheese sticks in pastry', 'tequenos with guasacaca'],
    why: 'No Venezuelan party is complete without them, and they are the snack that emigrants ask visitors to bring. Tequeños are sticks of firm white cheese wrapped in a thin, tender dough and cooked until the pastry blisters and the cheese oozes. They are eaten hot, dipped in garlic sauce or guasacaca, an herby avocado salsa.\n\nThe cheese is queso blanco, a firm, salty, mildly squeaky cheese that holds its shape. Halloumi is the nearest alternative in many shops, and mozzarella works if it is a firm block rather than fresh. Cut into sticks about 8 cm long and 1 cm thick. **Freeze the cheese for 15 minutes before wrapping.** Cold cheese stays in its shape as the pastry cooks.\n\nThe dough is flour, an egg, butter, a pinch of sugar and salt, and a little water, kneaded smooth and rested for 20 minutes. Roll very thin, 1 mm, and cut into strips 3 cm wide. Wrap each strip around a cheese stick in a spiral, sealing the ends with water.\n\nCook in oil at 180°C for 2 minutes, turning, until golden. The pastry must be sealed; any gap lets the cheese escape. Drain and serve hot.',
    ing: [
      '300 g plain flour',
      '1 egg',
      '40 g butter, softened',
      '1 tbsp caster sugar',
      '1/2 tsp salt',
      '100 ml water',
      '400 g firm white cheese (halloumi or queso blanco), cut into 20 sticks',
      '400 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, egg, butter, sugar, salt and water and knead to a smooth dough. Wrap and rest for 20 minutes.',
      'Roll the dough very thin, about 1 mm. Cut into 20 strips, 3 cm wide and 25 cm long.',
      'Wrap each strip around a cheese stick in a spiral, sealing the ends with a dab of water.',
      'Heat the oil to 180°C. Fry the tequeños in batches for 2 minutes, turning, until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Seal the ends properly.',
      'Freeze the cheese sticks for 15 minutes first.',
      'Freeze uncooked tequeños for up to 1 month.'
    ],
    pair: ['Guasacaca', 'Garlic sauce', 'Cold beer', 'Pink sauce'],
    store: 'Best eaten hot. Uncooked tequeños freeze for 1 month.',
    nut: [306, 6, 12, 26, 0, 1, 300]
  },

  'locro-de-papa': {
    d: 'A thick Ecuadorian potato soup with cheese, milk and achiote, served with avocado, a boiled egg and a spoonful of aji.',
    meta: 'Locro de papa: a thick Ecuadorian potato soup with cheese, milk and achiote, served with avocado. Four servings, cooked for 30 minutes.',
    kw: ['locro de papa', 'ecuadorian potato soup', 'locro de papa recipe', 'ecuadorian potato and cheese soup', 'andean potato soup with avocado'],
    why: 'Altitude is what this soup is built for: it comes from the Andes, where the evenings are cold and potatoes are the main crop. Locro de papa is a thick, comforting soup of potatoes cooked until they fall apart and thicken the broth, enriched with fresh cheese and milk, and coloured a pale orange with achiote.\n\nThe flavour starts with a refrito, a base of onion, garlic and cumin cooked in oil with achiote (annatto) for 5 minutes. The oil takes on the orange colour. Add potatoes, peeled and cut into small chunks, and stock or water. Floury potatoes are best, since they break down. **Mash about half the potatoes against the side of the pot** to thicken the soup, and leave the rest in pieces.\n\nSimmer for 20 minutes, until the potatoes are soft. Add milk and a handful of fresh white cheese, such as queso fresco or mild feta, and warm through without boiling. Boiling the milk can cause it to curdle.\n\nServe in wide bowls, topped with sliced avocado, a quartered boiled egg and chopped coriander. A spoonful of aji, the fresh Ecuadorian hot sauce, lifts every spoonful.',
    ing: [
      '2 tbsp vegetable oil',
      '1 tsp ground achiote or paprika',
      '1 onion, about 150 g, finely chopped',
      '2 garlic cloves, crushed',
      '1/2 tsp ground cumin',
      '800 g floury potatoes, peeled and cut into 3 cm pieces',
      '750 ml water or vegetable stock',
      '1 tsp salt',
      '250 ml whole milk',
      '150 g queso fresco or mild feta, crumbled',
      '1 avocado, sliced',
      '2 eggs, boiled and quartered',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil with the achiote and cook the onion, garlic and cumin for 5 minutes.',
      'Add the potatoes, water and salt. Bring to a boil and simmer for 20 minutes until the potatoes are soft. Mash half of them against the side of the pot.',
      'Stir in the milk and cheese and warm through for 3 minutes without boiling.',
      'Serve in bowls topped with the avocado, egg and coriander.'
    ],
    tips: [
      'Use floury potatoes.',
      'Do not boil once the milk is in.',
      'Serve with aji on the side.'
    ],
    pair: ['Aji sauce', 'Toasted corn (tostado)', 'Popcorn', 'Fresh juice'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [489, 19, 47, 25, 8, 7, 1550]
  },

  'encebollado': {
    d: 'An Ecuadorian fish soup of albacore tuna and cassava in a clear, spiced broth, topped with pickled red onion and served with popcorn.',
    meta: 'Encebollado: an Ecuadorian soup of tuna and cassava in a clear spiced broth, topped with pickled onion. Four servings, cooked for 35 minutes.',
    kw: ['encebollado', 'ecuadorian encebollado', 'encebollado recipe', 'ecuadorian tuna and yuca soup', 'encebollado de pescado'],
    why: 'It is the hangover cure of Ecuador, and the whole coast eats it for breakfast. Encebollado is a soup of albacore tuna and yuca in a tangy, cumin-scented broth, topped with a heap of pickled onion. It is served with lime and aji, and a bowl of popcorn or fried plantain chips on the side for crunch.\n\nThe broth is built from a sofrito of tomatoes, onions, green pepper, garlic and cumin, simmered in water with whole fish. Fresh tuna steaks are used in Ecuador; a thick tuna or similar firm fish works. Poach the tuna in the broth for 10 minutes, then lift it out and shred it. Leave the broth to cook with the cassava for 15 minutes. **Don\'t overcook the tuna.** It becomes dry and stringy.\n\nThe topping is thinly sliced red onion mixed with lime juice, salt, coriander and a pinch of cumin, and left for 15 minutes so it turns pink and soft. Without it, the soup would lack its character.\n\nTo assemble, put cassava and tuna in a bowl, ladle the broth over, and top with a good pile of onion and coriander. Serve with popcorn, lime wedges and aji.',
    ing: [
      '600 g fresh tuna steak',
      '1.2 litres water',
      '2 tomatoes, about 200 g, chopped',
      '1 onion, about 150 g, chopped',
      '1 green pepper, about 150 g, chopped',
      '4 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp salt',
      '500 g cassava (yuca), peeled and cut into 5 cm pieces',
      '# Pickled onion',
      '2 red onions, about 300 g, thinly sliced',
      '4 tbsp lime juice',
      '1/2 tsp salt',
      '2 tbsp chopped fresh coriander',
      '# To serve',
      '2 limes, cut into wedges',
      '100 g popcorn'
    ],
    st: [
      'Toss the sliced red onions with the lime juice, 1/2 tsp salt and coriander and leave for 15 minutes.',
      'Put the water, tomatoes, onion, green pepper, garlic, cumin and 1 tsp salt in a pot. Bring to a boil and simmer for 10 minutes.',
      'Add the tuna and poach for 10 minutes. Lift out and shred.',
      'Add the cassava to the broth and simmer for 15 minutes until tender.',
      'Divide the tuna and cassava between 4 bowls, ladle over the broth and top with the pickled onion. Serve with the lime and popcorn.'
    ],
    tips: [
      'Poach the tuna gently.',
      'Pickle the onions ahead.',
      'Serve with aji for heat.'
    ],
    pair: ['Popcorn', 'Lime wedges', 'Aji sauce', 'Plantain chips'],
    store: 'Best eaten straight away. The broth keeps in the fridge for 2 days.',
    nut: [539, 42, 86, 3, 10, 11, 970]
  },

  'saltenas': {
    d: 'Bolivian baked pastries filled with a sweet, spicy, juicy stew of beef or chicken that sets to a jelly when chilled, with potato, peas and olive.',
    meta: 'Salteñas: Bolivian baked pastries filled with a sweet, spicy, juicy stew of beef that sets to a jelly when chilled. Makes ten, baked for 35 minutes.',
    kw: ['saltenas', 'salteñas', 'bolivian saltenas recipe', 'bolivian juicy empanadas', 'saltenas with beef filling'],
    why: 'The soup inside is the trick, and the way to hold it there is gelatine. A salteña is a baked pastry with a filling so juicy that you have to eat it carefully, leaning over a plate. The filling is a thick stew, sweet and mildly hot, which is mixed with gelatine and chilled until it sets solid. Once the stew is wrapped in pastry and baked, the gelatine melts and the stew turns back into liquid inside the pastry.\n\nThe stew, called jigote, is made with beef cut into small cubes, onion, garlic, aji amarillo, cumin, oregano, sugar and a little vinegar, simmered until the beef is tender and the sauce is rich, about 30 minutes. Stir in gelatine dissolved in warm water, then mix in cooked potato, peas and sliced olives and raisins. **Chill the filling for at least 2 hours until firmly set.** Warm filling leaks.\n\nThe pastry is flour, butter, sugar, egg yolks and a little water, coloured orange with annatto-infused oil. It is rolled out thin, cut into 15 cm circles, and filled with 2 tablespoons of the jellied stew. Fold and crimp with a decorative twisted seam.\n\nBake at 220°C for 25 minutes, until golden. Eat hot, holding the tail, and sip the juices first.',
    ing: [
      '# Filling',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '2 tbsp aji amarillo paste',
      '500 g beef chuck, finely diced',
      '1 tsp ground cumin',
      '1 tsp dried oregano',
      '1 tbsp sugar',
      '1 tbsp white vinegar',
      '1 tsp salt',
      '300 ml water',
      '10 g powdered gelatine',
      '100 g cooked potato, diced',
      '60 g peas',
      '30 g raisins',
      '8 olives, sliced',
      '# Pastry',
      '500 g plain flour',
      '100 g butter, softened',
      '2 egg yolks',
      '2 tbsp sugar',
      '1 tsp salt',
      '150 ml warm water',
      '1 tsp paprika',
      '1 egg, beaten, for brushing'
    ],
    st: [
      'Heat the oil and cook the onion and garlic for 5 minutes. Add the aji amarillo, beef, cumin, oregano, sugar, vinegar, salt and water. Cover and simmer for 30 minutes until the beef is tender.',
      'Stir in the gelatine until dissolved. Fold in the potato, peas, raisins and olives. Chill for at least 2 hours until set.',
      'Mix the flour, butter, egg yolks, sugar, salt, paprika and water into a smooth dough. Rest for 20 minutes.',
      'Heat the oven to 220°C (200°C fan). Roll the dough thin and cut 10 circles, 15 cm across. Place 2 tablespoons of filling on each, fold over, and crimp the edges with a twisted seam.',
      'Brush with the beaten egg and bake on a lined tray for 25 minutes until golden.'
    ],
    tips: [
      'Chill the filling until firmly set.',
      'Seal the edges carefully.',
      'Eat carefully; the filling is hot and juicy.'
    ],
    pair: ['Llajua (hot sauce)', 'Fresh juice', 'Black tea', 'Salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [452, 19, 49, 20, 3, 7, 590],
    rest: [140, 'Setting the filling']
  },

  'argentine-asado': {
    d: 'Beef short ribs and sausages cooked slowly over low coals with only salt, served with chimichurri, a Sunday ritual in Argentina.',
    meta: 'Argentine asado: beef short ribs and sausages cooked slowly with only salt, served with chimichurri. Eight servings, cooked for 2 and a half hours.',
    kw: ['argentine asado', 'asado argentino', 'argentine bbq', 'asado recipe', 'argentinian barbecue with chimichurri'],
    why: 'An asado is not a barbecue in the quick sense of the word. It is an event, an afternoon, and the cook is called the asador, and the whole point is time. Argentine beef cooked slowly over low heat, rather than fast over a flame, is tender, smoky and full of fat. The only seasoning is coarse salt.\n\nThe most typical cut is tira de asado, short ribs cut across the bone in strips 2 cm thick. Ask the butcher for a whole rack cut this way. Salt it generously with coarse salt an hour before cooking. The embers should be low and glowing, with a thin coat of white ash. **If you can hold your hand over the grill for 5 seconds, the heat is right.** Any hotter and the fat flares up.\n\nCook the ribs bone-side down for 1 hour 30 minutes, then turn and cook for 40 minutes. The sausages, chorizo and morcilla, go on for the last 30 minutes. At home, a charcoal grill, or an oven at 150°C followed by a hot grill, is a reasonable substitute.\n\nServe with chimichurri: parsley, garlic, oregano, red wine vinegar, chilli flakes and oil. Slice the ribs across the bone and eat with bread.',
    ing: [
      '2 kg beef short ribs (tira de asado), cut across the bone into strips 2 cm thick',
      '2 tbsp coarse salt',
      '400 g chorizo sausages',
      '# Chimichurri',
      '1 large bunch fresh flat-leaf parsley, about 60 g',
      '4 garlic cloves',
      '1 tbsp dried oregano',
      '1/2 tsp chilli flakes',
      '4 tbsp red wine vinegar',
      '120 ml olive oil',
      '1/2 tsp salt',
      '# To serve',
      '8 bread rolls'
    ],
    st: [
      'Salt the ribs with the coarse salt and leave at room temperature for 1 hour.',
      'Make the chimichurri: chop the parsley and garlic finely and mix with the oregano, chilli flakes, vinegar, oil and salt. Leave for 30 minutes.',
      'Prepare a charcoal grill with low, glowing coals. Cook the ribs bone-side down, covered, for 1 hour 30 minutes, then turn and cook for 40 minutes.',
      'Add the chorizo for the last 30 minutes, turning once.',
      'Rest the meat for 10 minutes, then carve across the bone. Serve with the chimichurri and bread rolls.'
    ],
    tips: [
      'Keep the coals low and steady.',
      'Do not sauce the meat during cooking.',
      'Serve with a simple tomato and onion salad.'
    ],
    pair: ['Chimichurri', 'Provoleta', 'Malbec', 'Tomato and onion salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [1053, 45, 18, 89, 2, 2, 2620],
    rest: [90, 'Salting the ribs and resting the chimichurri']
  },

  'chivito': {
    d: 'A towering Uruguayan steak sandwich of thin beef, ham, bacon, mozzarella, a fried egg, lettuce, tomato and olives on a soft roll.',
    meta: 'Chivito: a towering Uruguayan steak sandwich of thin beef, ham, bacon, mozzarella, a fried egg, lettuce and tomato. Two servings, cooked for 15 minutes.',
    kw: ['chivito', 'uruguayan chivito', 'chivito sandwich', 'chivito recipe', 'uruguayan steak sandwich with egg'],
    why: 'It is Uruguay\'s national sandwich, and it is not for the fainthearted. A chivito is a tall, loaded steak sandwich, with every topping you can think of, built on a soft roll and sold from stands, cafés and hotels across the country. The name means little goat, although there is no goat in it; it is said to come from an old customer\'s request.\n\nThe beef is thin, tender steak, such as sirloin or fillet, sliced into 1 cm steaks and flattened until about 5 mm. Season with salt and pepper and sear in a very hot pan for 1 minute on each side. **Don\'t cook it longer.** It is going to sit in a sandwich, and overcooked steak turns tough.\n\nIn another pan, cook the bacon until crisp and fry the eggs in the fat. Warm the ham on the plancha for 30 seconds. Toast the rolls.\n\nBuild the layers: mayonnaise on the base, lettuce, tomato, steak, ham, bacon, mozzarella (melted briefly under the grill), a fried egg and olives. Press the top gently on. Cut in half and eat with chips. A chivito is a lunch for a full afternoon.',
    ing: [
      '2 soft bread rolls',
      '300 g beef sirloin, cut into 2 thin steaks and flattened to 5 mm',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper',
      '2 tbsp vegetable oil',
      '60 g streaky bacon',
      '2 eggs',
      '2 slices ham, about 40 g',
      '100 g mozzarella, sliced',
      '2 tbsp mayonnaise',
      '2 lettuce leaves',
      '1 tomato, about 100 g, sliced',
      '6 green olives, sliced'
    ],
    st: [
      'Season the steaks with the salt and pepper. Heat 1 tbsp of the oil in a very hot pan and sear the steaks for 1 minute on each side. Remove.',
      'Cook the bacon in the pan until crisp, 5 minutes. Fry the eggs in the remaining oil for 2 minutes.',
      'Heat the grill. Split and toast the rolls, then lay the mozzarella on the steaks and grill for 1 minute until melted.',
      'Spread the rolls with the mayonnaise. Layer the lettuce, tomato, steak, ham, bacon, egg and olives. Close and cut in half.'
    ],
    tips: [
      'Flatten the steak thin.',
      'Do not overcook the steak.',
      'Serve with chips.'
    ],
    pair: ['Chips', 'Cold beer', 'Pickled peppers', 'Salad'],
    store: 'Best eaten straight away.',
    nut: [851, 61, 19, 59, 2, 4, 2140]
  },

  'vatapa': {
    d: 'A thick, creamy Brazilian purée of bread, coconut milk, peanuts, cashews, ginger and palm oil with prawns, from Bahia.',
    meta: 'Vatapá: a thick, creamy Brazilian purée of bread, coconut milk, peanuts, cashews and palm oil with prawns, from Bahia. Six servings, cooked for 35 minutes.',
    kw: ['vatapa', 'vatapá', 'bahian vatapa', 'vatapa recipe', 'brazilian shrimp and coconut puree'],
    why: 'Bread is the unexpected thickener, and the dish is a Bahian classic. Vatapá is a creamy paste of stale bread soaked in coconut milk, ground with peanuts, cashews, ginger and dried shrimp, then cooked with palm oil until it forms a thick, golden, spoonable mass. Prawns are stirred through at the end.\n\nThe flavour is a combination of sweet coconut, nutty peanuts, a trace of heat and the deep savour of dried shrimp. The dendê, or red palm oil, gives the sauce its orange colour and an earthy richness that is the signature of Afro-Brazilian cooking. It can be bought in jars at Latin American and African shops. **Add the palm oil toward the end of cooking.** It loses its character if boiled for too long.\n\nSoak 6 slices of stale bread in coconut milk for 10 minutes. Blend with the nuts, onion, garlic, ginger, a tomato and a chilli to a smooth paste. Cook in a wide pot over a low heat, stirring constantly, for 20 minutes until thick. Add the prawns and simmer for 5 minutes.\n\nTaste for salt and lime. Serve over white rice, or as a filling for acarajé.',
    ing: [
      '6 slices stale white bread, about 180 g, crusts removed',
      '400 ml coconut milk',
      '50 g roasted unsalted peanuts',
      '30 g roasted cashew nuts',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves',
      '2 cm piece fresh ginger',
      '1 tomato, about 100 g',
      '1 malagueta or red chilli',
      '30 g dried shrimp',
      '300 ml water',
      '3 tbsp red palm oil',
      '1 tsp salt',
      '400 g raw prawns, peeled',
      '2 tbsp lime juice',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the bread in the coconut milk for 10 minutes.',
      'Blend the soaked bread, peanuts, cashews, onion, garlic, ginger, tomato, chilli, dried shrimp and water to a smooth paste.',
      'Pour into a wide pot and cook over a low heat, stirring constantly, for 20 minutes until thick.',
      'Stir in the palm oil, salt and prawns and cook for 5 minutes. Add the lime juice and coriander and serve.'
    ],
    tips: [
      'Stir constantly to avoid sticking.',
      'Add the palm oil near the end.',
      'Serve over white rice.'
    ],
    pair: ['White rice', 'Farofa', 'Malagueta pepper sauce', 'Fried acarajé'],
    store: 'Keeps in the fridge for 2 days. Reheat gently with a splash of water.',
    nut: [418, 22, 24, 26, 2, 5, 660]
  },

  'lechon-asado': {
    d: 'Pork shoulder marinated overnight in sour orange, garlic and oregano mojo, then roasted slowly until the meat falls apart and the skin crackles.',
    meta: 'Lechón asado: pork shoulder marinated overnight in sour orange, garlic and oregano mojo, then roasted slowly until the skin crackles. Eight servings, cooked for 4 hours.',
    kw: ['lechon asado', 'cuban lechon asado', 'lechon asado recipe', 'cuban roast pork with mojo', 'nochebuena roast pork'],
    why: 'On Christmas Eve, Cuban families gather for a roast pig. At home, a pork shoulder does the job. Lechón asado is pork marinated in mojo criollo, a bright, sharp mixture of garlic, sour orange juice, oregano and cumin, and then roasted low and slow. The meat turns soft and shreds with a fork, and the skin on top is brittle and salty.\n\nThe mojo is the whole recipe. Sour orange (naranja agria) is a Seville-type orange with an acidic flavour, hard to find outside Latin shops. A mix of equal parts orange juice and lime juice is a good substitute. Crush 10 cloves of garlic with salt, oregano and cumin in a mortar, then stir in the citrus juice and olive oil. **Poke the pork deeply all over with a knife and pour the mojo into the cuts.** The acid works as a tenderiser and carries the garlic in.\n\nMarinate overnight, or for up to 24 hours. Roast at 150°C for 3 hours 30 minutes, covered with foil, basting every hour. Remove the foil and increase the heat to 220°C for 30 minutes, to crisp the skin.\n\nRest for 20 minutes, shred, and serve with black beans, white rice and fried plantains.',
    ing: [
      '2.5 kg pork shoulder, skin on, bone in',
      '10 garlic cloves, peeled',
      '2 tsp salt',
      '2 tsp dried oregano',
      '2 tsp ground cumin',
      '250 ml orange juice',
      '100 ml lime juice',
      '4 tbsp olive oil',
      '1 onion, sliced into rings'
    ],
    st: [
      'Crush the garlic with the salt, oregano and cumin to a paste. Stir in the orange juice, lime juice and oil.',
      'Poke the pork all over with a knife and pour the marinade into the cuts and over the surface. Cover and refrigerate overnight.',
      'Heat the oven to 150°C (130°C fan). Lay the onion rings in a roasting tin and set the pork on top. Cover with foil.',
      'Roast for 3 hours 30 minutes, basting every hour.',
      'Remove the foil, raise the oven to 220°C (200°C fan) and roast for 30 minutes more until the skin is crisp. Rest for 20 minutes and shred.'
    ],
    tips: [
      'Marinate for at least 12 hours.',
      'Baste often with the juices.',
      'Crackle the skin at the end.'
    ],
    pair: ['Black beans', 'White rice', 'Fried plantains', 'Yuca con mojo'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [715, 57, 7, 51, 1, 3, 780],
    rest: [500, 'Marinating overnight']
  }
};
