'use strict';

/**
 * Volume forty-nine — East and South-East Asia, the Middle East and Central
 * Asia, second part.
 *
 * Twenty-five dishes: a Vietnamese dessert, Malaysian curry mee, chicken curry
 * and two sambals, Singapore carrot cake, Indonesian sambal terasi, five
 * Filipino dishes, Korean pork belly and spinach, two Japanese sandwiches and
 * rolls with a ginger dressing, and Gulf, Egyptian, Moroccan and Libyan
 * dishes. Waits of an hour or more are declared as rest. Nutrition is
 * estimated by npm run calc.
 */

module.exports = {
  'che-chuoi': {
    d: 'Sliced bananas and tapioca pearls simmered in sweetened coconut milk, served warm and topped with toasted peanuts and sesame seeds.',
    meta: 'Che chuoi: bananas and tapioca pearls in sweetened coconut milk with toasted peanuts and sesame. Four servings, cooked for 20 minutes.',
    kw: ['che chuoi', 'vietnamese banana dessert', 'banana and tapioca in coconut milk', 'che chuoi recipe', 'vietnamese banana tapioca pudding'],
    why: 'The first sign it is ready is the smell: bananas warming in coconut milk, sweet and a little floral, like a pudding that has been waiting. Che chuoi is a Vietnamese dessert soup, served warm in a bowl, and it is among the simplest ways to turn a few spotty bananas into something people ask for again.\n\nChoose bananas that are ripe but still firm. Very soft ones fall apart in the pot and make the soup muddy. Cut them into thick slices, 2 cm, so they hold their shape. **Add the bananas for the last 5 minutes only.** Longer than that and they turn to mush.\n\nThe tapioca goes in first. Small pearls cook in simmering water for about 10 minutes, until they turn translucent, and then in the coconut milk with sugar and a pinch of salt. The salt is not optional: it keeps the dessert from tasting flat.\n\nThe topping matters. Roast the peanuts in a dry pan until golden, crush them roughly, and toast the sesame seeds in the same pan. Scatter both over each bowl just before serving, so they stay crisp.',
    ing: [
      '50 g small tapioca pearls',
      '200 ml water',
      '400 ml coconut milk',
      '80 g sugar',
      '1/4 tsp salt',
      '4 ripe but firm bananas, about 500 g, cut into 2 cm slices',
      '3 tbsp roasted peanuts, crushed',
      '1 tbsp sesame seeds, toasted'
    ],
    st: [
      'Bring the water to a boil in a pan. Add the tapioca pearls and simmer for 10 minutes, stirring, until translucent.',
      'Add the coconut milk, sugar and salt and bring to a gentle simmer.',
      'Add the banana slices and simmer for 5 minutes, without stirring much, until tender.',
      'Spoon into bowls and top with the peanuts and sesame seeds.'
    ],
    tips: [
      'Stir the tapioca early to stop the pearls sticking.',
      'Use firm bananas so they hold their shape.',
      'Serve warm; it thickens as it cools.'
    ],
    pair: ['Vietnamese iced coffee', 'Fresh mango', 'Jasmine tea', 'Toasted coconut'],
    store: 'Best eaten warm. Keeps in the fridge for 1 day; thin with a splash of milk when reheating.',
    nut: [478, 6, 64, 22, 4, 38, 170]
  },

  'curry-mee': {
    d: 'Yellow noodles in a spicy coconut curry broth with chicken, tofu puffs and prawns, topped with bean sprouts, mint and sambal.',
    meta: 'Curry mee: yellow noodles in a spicy coconut curry broth with chicken, tofu puffs and prawns. Four servings, cooked for 30 minutes.',
    kw: ['curry mee', 'malaysian curry mee', 'curry laksa mee', 'curry noodle soup malaysian', 'curry mee recipe'],
    why: 'The broth is the dish. Curry mee is a Malaysian noodle soup in which a rich, spicy coconut curry stands in for stock, and everything else is a topping. The flavour comes from a paste of dried chillies, shallots, garlic, lemongrass, galangal and turmeric, fried in oil until the kitchen smells of chilli and the oil turns red.\n\nCook the paste patiently. 8 minutes over a medium heat is the minimum, and the oil should separate at the edges. **Add the chicken stock and coconut milk only after the paste is cooked.** Otherwise the curry tastes raw and harsh.\n\nThe liquid is a mix of stock and coconut milk, about two parts to one, so the soup is rich but not heavy. Add chicken thighs and simmer for 15 minutes. Tofu puffs soak up the broth like sponges; put them in for the last 5 minutes, along with the prawns for 3.\n\nBlanch the noodles and bean sprouts for 1 minute. Divide between bowls, ladle the curry over, and finish with mint, a spoonful of sambal and a squeeze of lime.',
    ing: [
      '# Paste',
      '6 dried red chillies, soaked in hot water for 10 minutes',
      '4 shallots, about 100 g',
      '4 garlic cloves',
      '2 stalks lemongrass, white parts only',
      '10 g fresh galangal or ginger',
      '1 tsp ground turmeric',
      '1 tbsp coriander seeds, toasted',
      '# Curry',
      '3 tbsp vegetable oil',
      '500 g boneless chicken thighs, sliced',
      '600 ml chicken stock',
      '300 ml coconut milk',
      '2 tsp salt',
      '1 tsp sugar',
      '100 g fried tofu puffs, halved',
      '12 raw prawns, about 150 g, peeled',
      '# To serve',
      '300 g fresh yellow noodles',
      '100 g bean sprouts',
      '1 handful fresh mint',
      '4 tbsp sambal',
      '2 limes, cut into wedges'
    ],
    st: [
      'Blend the drained chillies, shallots, garlic, lemongrass, galangal, turmeric and coriander seeds to a smooth paste.',
      'Heat the oil in a large pan and fry the paste for 8 minutes over a medium heat until fragrant and the oil separates.',
      'Add the chicken and cook for 3 minutes. Pour in the stock and coconut milk, add the salt and sugar and simmer for 15 minutes.',
      'Add the tofu puffs for the last 5 minutes and the prawns for the last 3 minutes.',
      'Blanch the noodles and bean sprouts in boiling water for 1 minute, drain and divide between 4 bowls. Ladle over the curry and top with mint, sambal and lime.'
    ],
    tips: [
      'Do not rush the paste.',
      'Add the prawns last so they stay tender.',
      'Serve with extra sambal at the table.'
    ],
    pair: ['Lime wedges', 'Extra sambal', 'Iced tea', 'Cucumber slices'],
    store: 'The curry keeps in the fridge for 2 days. Cook fresh noodles each time.',
    nut: [633, 43, 41, 33, 4, 8, 2090]
  },

  'kari-ayam': {
    d: 'Malaysian-style chicken curry of potato and chicken simmered in a coconut milk sauce flavoured with curry powder, lemongrass and curry leaves.',
    meta: 'Kari ayam: Malaysian chicken and potato curry in a coconut milk sauce with curry powder, lemongrass and curry leaves. Four servings, cooked for 40 minutes.',
    kw: ['kari ayam', 'malaysian chicken curry', 'kari ayam recipe', 'malay chicken curry with potato', 'nyonya chicken curry'],
    why: 'Does every Malaysian home have its own curry? Close to it. Kari ayam is a mild, coconut-rich chicken curry made with curry powder, lemongrass and potatoes, and it is the one people grow up eating with a piece of bread or a plate of rice.\n\nThe curry powder here is a meat curry powder, a blend with coriander, fennel, cumin and chilli. It is mixed with water into a paste so it fries evenly without burning. **Fry the paste in oil until it smells toasty and separates.** That takes about 3 minutes and removes any raw taste from the spices.\n\nThe aromatics go in first: sliced shallots, garlic, ginger and lemongrass, along with a cinnamon stick, a star anise and a few curry leaves. Add the chicken, stir to coat, then the potatoes and the coconut milk.\n\nSimmer gently for 30 minutes. The potatoes thicken the sauce as they soften. A splash of water prevents catching. Taste for salt and add a spoonful of sugar to round off the spices. The curry is better the next day, when the flavours have settled.',
    ing: [
      '3 tbsp vegetable oil',
      '2 tbsp meat curry powder, mixed with 3 tbsp water',
      '4 shallots, about 100 g, sliced',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 stalks lemongrass, bruised',
      '3 g cinnamon stick',
      '1 g star anise',
      '1 sprig curry leaves',
      '700 g chicken thighs on the bone, skinned',
      '400 g potatoes, cut into 3 cm pieces',
      '400 ml coconut milk',
      '200 ml water',
      '1 tsp salt',
      '1 tsp sugar'
    ],
    st: [
      'Heat the oil in a wide pan. Fry the curry powder paste for 3 minutes until fragrant.',
      'Add the shallots, garlic, ginger, lemongrass, cinnamon, star anise and curry leaves and cook for 3 minutes.',
      'Add the chicken and stir to coat for 3 minutes.',
      'Add the potatoes, coconut milk, water, salt and sugar. Bring to a gentle simmer and cook for 30 minutes, stirring occasionally, until the chicken is tender and the sauce has thickened.'
    ],
    tips: [
      'Cut the potatoes into large pieces so they do not dissolve.',
      'Add a splash of water if the sauce becomes too thick.',
      'Keep the curry at a simmer, not a boil.'
    ],
    pair: ['Steamed rice', 'Roti canai', 'Cucumber pickle', 'Fried shallots'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [620, 40, 34, 36, 4, 6, 770]
  },

  'sambal-udang': {
    d: 'Prawns cooked in a sweet, sour and hot sambal of dried chillies, shallots, garlic and tamarind until the sauce clings.',
    meta: 'Sambal udang: prawns cooked in a sweet, sour and hot sambal of chilli, shallot, garlic and tamarind. Four servings, cooked for 15 minutes.',
    kw: ['sambal udang', 'sambal prawns', 'malaysian sambal prawns', 'sambal udang recipe', 'prawns in chilli sambal'],
    why: 'A dish for a table of four on a night when rice is already on, and the shopping is a bag of prawns. Sambal udang is a Malaysian standard, and the technique is the same as for any good sambal: grind the paste, fry it until the oil rises, then add the main ingredient for a short cook.\n\nThe paste is dried chillies (soaked), shallots, garlic and a small piece of belacan (shrimp paste) blended smooth. Belacan smells strong when raw but mellows into a deep savoury note once fried. Toast it in a dry pan first for 30 seconds if you can. **Fry the paste for at least 8 minutes, until it darkens and the oil floats.** Rushed sambal tastes sharp and raw.\n\nTamarind and sugar bring the sweet and sour. Stir in a spoonful of tamarind paste, a pinch of sugar and a little salt, and taste: the sambal should be hot, sour and slightly sweet.\n\nPrawns go in last, for only 3 or 4 minutes, until pink. Add a splash of water so the sauce coats rather than burns, and finish with sliced onion rings if you like.',
    ing: [
      '8 dried red chillies, soaked in hot water for 10 minutes',
      '5 shallots, about 125 g',
      '4 garlic cloves',
      '1 tsp belacan (shrimp paste), toasted',
      '4 tbsp vegetable oil',
      '1 tbsp tamarind paste',
      '1 tbsp sugar',
      '1/2 tsp salt',
      '100 ml water',
      '500 g raw king prawns, peeled',
      '1 onion, about 150 g, sliced into rings'
    ],
    st: [
      'Blend the drained chillies, shallots, garlic and belacan to a smooth paste.',
      'Heat the oil in a wide pan and fry the paste over a medium heat for 8 minutes until it darkens and the oil separates.',
      'Stir in the tamarind, sugar, salt and water and simmer for 2 minutes.',
      'Add the prawns and onion rings and cook for 4 minutes, turning once, until the prawns are pink and coated.'
    ],
    tips: [
      'Open a window when you fry the belacan; it is strong.',
      'Pat the prawns dry so the sambal stays thick.',
      'Reduce the chillies for a milder dish.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Cucumber slices', 'Sambal belacan'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [315, 27, 18, 15, 2, 11, 490]
  },

  'telur-sambal': {
    d: 'Boiled eggs cooked in oil until blistered, then simmered in a hot and sweet chilli sambal with onion and tomato.',
    meta: 'Telur sambal: boiled eggs blistered in oil and simmered in a hot and sweet chilli sambal. Four servings, cooked for 15 minutes.',
    kw: ['telur sambal', 'sambal eggs', 'malaysian egg sambal', 'telur belado', 'eggs in chilli sambal'],
    why: 'Boil the eggs hard, peel them, and blister them in hot oil first; that is the step that makes sambal eggs different from eggs in a sauce. The whites turn golden and wrinkled, and the skin grips the sambal.\n\nBoil the eggs for exactly 9 minutes from the moment the water boils, then put them in cold water. Peel under running water. They should be firm but not rubbery, with pale yellow yolks. **Pat each egg dry before it goes into the oil.** Wet eggs spit furiously.\n\nHeat 3 tablespoons of oil in a pan and cook the eggs for 3 to 4 minutes, rolling them around until the whites are blistered and golden. Lift them out. The same oil then cooks the sambal: a paste of chillies, shallot and garlic goes in for 5 minutes, and then tomato, sugar and tamarind.\n\nReturn the eggs to the sambal and roll them around for 2 minutes until coated. Everything is done in 15 minutes, from the saucepan to the plate. Serve with plain rice.',
    ing: [
      '8 eggs',
      '3 tbsp vegetable oil',
      '6 dried red chillies, soaked in hot water for 10 minutes',
      '4 shallots, about 100 g',
      '3 garlic cloves',
      '1 tomato, about 100 g, chopped',
      '1 tbsp tamarind paste',
      '2 tsp sugar',
      '1/2 tsp salt',
      '100 ml water'
    ],
    st: [
      'Boil the eggs for 9 minutes, cool in cold water and peel. Pat dry.',
      'Heat the oil in a pan and cook the eggs, turning, for 3 to 4 minutes until blistered and golden. Remove.',
      'Blend the drained chillies, shallots and garlic to a paste. Fry in the same oil for 5 minutes until the oil separates.',
      'Add the tomato, tamarind, sugar, salt and water and simmer for 3 minutes. Return the eggs and roll in the sauce for 2 minutes.'
    ],
    tips: [
      'Dry the eggs well to avoid spitting.',
      'Use a splatter guard if you have one.',
      'Add a handful of fried anchovies for extra savour.'
    ],
    pair: ['Steamed rice', 'Cucumber', 'Nasi lemak', 'Fried anchovies'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [288, 14, 13, 20, 2, 9, 430]
  },

  'chai-tow-kway': {
    d: 'Cubes of steamed radish and rice flour cake pan-fried with egg, preserved radish and garlic until crisp at the edges.',
    meta: 'Chai tow kway: cubes of steamed radish and rice flour cake pan-fried with egg and garlic. Six servings, steamed and fried in about 75 minutes.',
    kw: ['chai tow kway', 'singapore fried carrot cake', 'radish cake singapore', 'chai tow kway recipe', 'white carrot cake with egg'],
    why: 'It is called carrot cake, but there is no carrot in it. The "carrot" is white radish, daikon, grated and cooked down with rice flour into a firm, steamed cake, which is cooled, cubed and fried with egg. The result is crisp outside, soft inside and savoury all through.\n\nMake the cake a day ahead if you can, or at least 2 hours before frying. It has to cool and firm up completely. Fresh from the steamer it is soft and falls apart in the pan. **Chill it overnight and it cuts cleanly.**\n\nThe batter is made by cooking grated daikon in its own juices for 10 minutes, then mixing it with rice flour, cornflour, water and a little white pepper. Pour into a lined tin and steam for 45 minutes.\n\nTo finish, cut into 2 cm cubes. Heat oil in a wok, fry garlic and preserved radish for 30 seconds, add the cubes and leave them untouched for 2 minutes, until golden. Pour beaten egg over, let it set into a crust, then toss. Season with light soy sauce and, for the black version, a little sweet dark soy.',
    ing: [
      '# Cake',
      '600 g daikon, peeled and grated',
      '250 g rice flour',
      '2 tbsp cornflour',
      '500 ml water',
      '1 tsp salt',
      '1/2 tsp white pepper',
      '1 tsp sugar',
      '50 g dried shrimp, soaked and chopped',
      '# To fry',
      '4 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '2 tbsp preserved radish (chye poh), rinsed and chopped',
      '3 eggs, beaten',
      '1 tbsp light soy sauce',
      '3 spring onions, sliced',
      '1 red chilli, sliced'
    ],
    st: [
      'Cook the daikon in a pan with 100 ml of the water for 10 minutes until soft. Cool slightly.',
      'Whisk the rice flour, cornflour, remaining water, salt, pepper and sugar until smooth. Mix with the daikon and its liquid and the dried shrimp.',
      'Pour into a lined 20 cm square tin. Steam for 45 minutes until firm. Cool, then chill for at least 2 hours.',
      'Cut the cake into 2 cm cubes.',
      'Heat the oil in a wok over a high heat. Fry the garlic and preserved radish for 30 seconds. Add the cake cubes and leave for 2 minutes until golden, then turn.',
      'Pour the eggs over the cubes, let them set for 30 seconds and toss. Add the soy sauce, spring onions and chilli.'
    ],
    tips: [
      'Use a non-stick wok to stop the cake sticking.',
      'Chill the cake overnight for the cleanest cubes.',
      'Add a spoonful of sweet dark soy sauce for the black version.'
    ],
    pair: ['Sambal chilli', 'Hot tea', 'Kopi', 'Chilli sauce'],
    store: 'The steamed cake keeps in the fridge for 3 days. Fry fresh each time.',
    nut: [312, 10, 41, 12, 3, 4, 610],
    rest: [120, 'Cooling and setting the cake']
  },

  'sambal-terasi': {
    d: 'A fiery Indonesian chilli sambal of fresh chillies, shallots, garlic, tomato and toasted shrimp paste, pounded and cooked briefly in oil.',
    meta: 'Sambal terasi: Indonesian chilli sambal of fresh chillies, shallots, garlic, tomato and toasted shrimp paste. Eight servings, cooked for 10 minutes.',
    kw: ['sambal terasi', 'sambal terasi recipe', 'indonesian shrimp paste sambal', 'sambal belacan with tomato', 'indonesian chilli sambal'],
    why: 'The smell is the warning and the reward. Terasi, Indonesian shrimp paste, smells fierce when raw and turns into something savoury and nutty when it meets heat. Sambal terasi is the everyday table condiment of Indonesia, and a spoonful with rice and a fried egg is a meal.\n\nStart by toasting the terasi. Wrap a small block in foil and heat it in a dry pan for 2 minutes on each side, or crumble it directly into the pan. The smell fills the kitchen, so open a window. **Do not skip this step.** Raw terasi tastes sharp and fishy.\n\nPound or blend the fresh red chillies, shallots, garlic and tomato together with the toasted terasi to a coarse paste, not a smooth purée. The texture is part of the charm.\n\nCook the paste in oil over a medium heat for 8 minutes, until the oil separates and the raw smell gives way to a sweet, savoury aroma. Add sugar, salt and a squeeze of lime to balance. It keeps well in a jar in the fridge.',
    ing: [
      '8 red chillies, about 100 g',
      '6 shallots, about 150 g',
      '3 garlic cloves',
      '1 tomato, about 100 g',
      '1 tsp terasi (shrimp paste), toasted',
      '3 tbsp vegetable oil',
      '1 tsp sugar',
      '1/2 tsp salt',
      '1 tbsp lime juice'
    ],
    st: [
      'Blend the chillies, shallots, garlic, tomato and terasi to a coarse paste.',
      'Heat the oil in a pan and cook the paste over a medium heat for 8 minutes, stirring, until the oil separates.',
      'Add the sugar and salt and cook for 1 minute. Stir in the lime juice.'
    ],
    tips: [
      'Toast the shrimp paste with the window open.',
      'Deseed some chillies for a milder sambal.',
      'Store in a clean jar topped with a layer of oil.'
    ],
    pair: ['Steamed rice', 'Fried egg', 'Fried tempeh', 'Grilled fish'],
    store: 'Keeps in a clean jar in the fridge for 1 week.',
    nut: [73, 1, 6, 5, 1, 3, 150]
  },

  'pancit-bihon': {
    d: 'Thin rice vermicelli stir-fried with chicken, cabbage, carrot and green beans in soy sauce, finished with a squeeze of calamansi or lemon.',
    meta: 'Pancit bihon: thin rice vermicelli stir-fried with chicken, cabbage and carrot in soy sauce. Six servings, cooked for 20 minutes.',
    kw: ['pancit bihon', 'pancit bihon guisado', 'filipino rice noodle stir fry', 'pancit bihon recipe', 'filipino vermicelli noodles'],
    why: 'Pancit is a Filipino noodle dish with a long life: it is served at birthdays because long noodles mean long life, and no party table is complete without a platter. Bihon is the version made with thin rice vermicelli, which is lighter than the wheat-noodle pancit canton.\n\nThe noodles need only a soak. Cover them with warm water for 10 minutes until they are pliable but still firm. **Do not boil them.** They finish cooking in the pan, absorbing the broth, and soaked noodles do not clump.\n\nCook the chicken first, in thin strips, with garlic and onion. Add the vegetables in order: carrots first, then cabbage and green beans. Pour in chicken stock mixed with soy sauce and a spoonful of oyster sauce, bring to a simmer, then add the noodles and toss with tongs for 5 minutes until they have absorbed the liquid.\n\nThe squeeze of calamansi at the end is part of the dish, not a garnish. Its sharpness cuts through the soy sauce. Lemon is a fine substitute.',
    ing: [
      '250 g thin rice vermicelli (bihon)',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, thinly sliced',
      '4 garlic cloves, crushed',
      '300 g chicken breast, thinly sliced',
      '1 carrot, about 100 g, cut into matchsticks',
      '200 g white cabbage, shredded',
      '100 g green beans, sliced',
      '500 ml chicken stock',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1/2 tsp ground black pepper',
      '2 limes or lemons, cut into wedges',
      '2 spring onions, sliced'
    ],
    st: [
      'Soak the vermicelli in warm water for 10 minutes. Drain.',
      'Heat the oil in a large wok. Cook the onion and garlic for 2 minutes. Add the chicken and cook for 4 minutes.',
      'Add the carrot, cabbage and beans and stir-fry for 3 minutes.',
      'Pour in the stock, soy sauce, oyster sauce and pepper and bring to a simmer. Add the noodles and toss with tongs for 5 minutes until the liquid is absorbed.',
      'Serve with the spring onions and lime wedges.'
    ],
    tips: [
      'Do not boil the noodles first.',
      'Use tongs to toss; chopsticks break the noodles.',
      'Add prawns or sliced pork for a richer version.'
    ],
    pair: ['Calamansi or lime', 'Garlic bread rolls', 'Fish sauce', 'Hard-boiled egg'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan with a splash of water.',
    nut: [329, 17, 45, 9, 4, 4, 830]
  },

  'longganisa': {
    d: 'Sweet, garlicky Filipino pork sausages shaped without casings, simmered in water until it evaporates and then browned in their own fat.',
    meta: 'Longganisa: sweet, garlicky Filipino pork sausages shaped by hand and browned in their own fat. Four servings, cooked for 25 minutes.',
    kw: ['longganisa', 'filipino longganisa', 'sweet pork longganisa recipe', 'skinless longganisa', 'homemade longganisa'],
    why: 'No casing, no stuffer, no special equipment: skinless longganisa is shaped by hand into small logs and cooked in a pan, and the simple method is how most Filipino households make them. The sweet and garlicky flavour is closer to a spiced breakfast patty than to a European sausage.\n\nThe meat should be ground pork with a good proportion of fat, around 25 per cent. Lean pork gives dry sausages. Mix it with plenty of garlic, brown sugar, vinegar, paprika, black pepper and salt, and work the mixture with your hands for a minute until sticky. **Rest the mixture for 2 hours in the fridge.** The salt and sugar draw out moisture, then it is reabsorbed, so the sausages are tender and the flavour spreads through.\n\nShape into logs about 7 cm long. The cooking is unusual and useful: put the logs in a pan with a little water, cover, and cook for 10 minutes until the water has gone. Then fry them in their own fat for another 8 minutes, turning, until browned and glossy.\n\nServe with garlic rice, a fried egg and a dish of vinegar.',
    ing: [
      '500 g minced pork, with about 25 per cent fat',
      '4 garlic cloves, crushed',
      '3 tbsp brown sugar',
      '2 tbsp white vinegar',
      '1 tbsp paprika',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '100 ml water',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Mix the pork with the garlic, sugar, vinegar, paprika, salt and pepper. Work with your hands for 1 minute until sticky. Cover and chill for 2 hours.',
      'Shape into 12 small logs about 7 cm long.',
      'Put the sausages in a wide pan with the water. Cover and cook over a medium heat for 10 minutes until the water has evaporated.',
      'Add the oil and fry for 8 minutes, turning, until browned and glossy.'
    ],
    tips: [
      'Wet your hands when shaping to stop the mixture sticking.',
      'Freeze uncooked logs for up to 1 month.',
      'Serve with spiced vinegar for dipping.'
    ],
    pair: ['Garlic rice', 'Fried egg', 'Spiced vinegar', 'Sliced tomato'],
    store: 'Keeps in the fridge for 3 days or freezes uncooked for 1 month.',
    nut: [361, 22, 12, 25, 1, 10, 670],
    rest: [120, 'Chilling']
  },

  'tocino': {
    d: 'Thin slices of pork cured overnight in a sweet, salty and slightly sour pineapple marinade, then pan-cooked until caramelised.',
    meta: 'Tocino: thin pork slices cured overnight in a sweet, salty pineapple marinade and pan-cooked until caramelised. Four servings, cooked for 20 minutes.',
    kw: ['tocino', 'filipino tocino', 'pork tocino recipe', 'sweet cured pork filipino', 'tocino breakfast'],
    why: 'Overnight is the instruction that matters. Tocino is a cure as much as a marinade, and the sugar and salt need hours to work into the pork. Slices cooked after 30 minutes taste of sugar on the surface; slices left overnight taste sweet, savoury and slightly tangy all the way through.\n\nUse pork shoulder, sliced thin, about 5 mm thick. If you ask a butcher, ask for it sliced for hot pot or bacon-thin. At home, freeze the shoulder for 30 minutes and slice with a sharp knife. The marinade is brown sugar, salt, garlic, pineapple juice, a little soy sauce and pepper. A pinch of curing salt gives the traditional red colour, but it is optional and the pork is still delicious without it.\n\n**Cook it in a pan with a little oil over medium heat.** The sugar caramelises quickly and will blacken if the pan is too hot.\n\nThe cooking is two-stage: simmer the slices with a little water first for 8 minutes, so the pork cooks through, and let the water evaporate. Then fry in the leftover oil and marinade for 6 minutes until glossy and darkened at the edges. Serve with garlic rice.',
    ing: [
      '600 g pork shoulder, sliced 5 mm thick',
      '4 tbsp brown sugar',
      '1 tbsp salt',
      '4 garlic cloves, crushed',
      '100 ml pineapple juice',
      '1 tbsp soy sauce',
      '1/2 tsp ground black pepper',
      '100 ml water',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Mix the sugar, salt, garlic, pineapple juice, soy sauce and pepper. Add the pork, coat well, cover and refrigerate for at least 8 hours or overnight.',
      'Put the pork and marinade in a wide pan with the water. Bring to a simmer and cook for 8 minutes, until most of the liquid has gone.',
      'Add the oil and fry for 6 minutes, turning, until glossy and caramelised at the edges.'
    ],
    tips: [
      'Slice the pork thin and evenly.',
      'Watch the pan once the water has gone; the sugar burns quickly.',
      'Freeze the marinated pork in portions for easy breakfasts.'
    ],
    pair: ['Garlic rice', 'Fried egg', 'Spiced vinegar', 'Sliced tomato'],
    store: 'The marinated pork keeps in the fridge for 2 days or freezes for 1 month. Cooked tocino keeps for 2 days.',
    nut: [400, 28, 18, 24, 1, 16, 2080],
    rest: [480, 'Curing overnight']
  },

  'turon': {
    d: 'Banana halves rolled in brown sugar and spring roll wrappers, then cooked until the sugar melts into a crisp caramel shell.',
    meta: 'Turon: banana halves rolled in brown sugar and spring roll wrappers, cooked until the sugar caramelises. Eight servings, cooked for 10 minutes.',
    kw: ['turon', 'filipino turon', 'banana spring rolls', 'turon recipe', 'caramelised banana lumpia'],
    why: 'A merienda, or afternoon snack, for a table of eight: turon is cheap, quick and usually gone as soon as it comes out of the oil. The idea is simple: a banana half, a rolled sheet of brown sugar, and a thin wrapper, fried until the sugar melts and sets as a crisp, amber coating.\n\nBananas need to be ripe but firm. Saba bananas are traditional, but cooking bananas or firm ordinary ones work. Cut each in half lengthways, then crosswise. **Roll each piece in brown sugar first, then wrap.** The sugar melts in the oil and forms the caramel on the outside of the wrapper.\n\nUse spring roll wrappers kept under a damp cloth so they stay pliable. Place a banana piece on the corner, fold the sides over, roll, and seal with a dab of water. Add a slice of jackfruit if you can find it tinned.\n\nCook in oil heated to 170°C, not higher. The sugar burns before the wrapper crisps if the oil is too hot. Turn for 3 to 4 minutes, until deep gold and shiny.',
    ing: [
      '4 firm ripe bananas, about 500 g',
      '8 tbsp brown sugar',
      '100 g spring roll wrappers (8 sheets)',
      '1 tbsp water, for sealing',
      '150 ml vegetable oil, for frying',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Cut each banana in half lengthways, then in half crosswise to make 8 pieces. Roll each piece in about 1 tablespoon of brown sugar.',
      'Place a banana piece on the corner of a wrapper, fold in the sides, roll up tightly and seal the edge with a little water.',
      'Heat the oil to 170°C in a small, deep pan. Cook the turon in 2 batches for 3 to 4 minutes, turning, until deep gold and the sugar has caramelised.',
      'Drain on kitchen paper, sprinkle with the sesame seeds and serve warm.'
    ],
    tips: [
      'Keep the wrappers under a damp cloth.',
      'Do not let the oil get too hot.',
      'Seal the seams firmly so the sugar does not leak.'
    ],
    pair: ['Vanilla ice cream', 'Hot tea', 'Coconut milk', 'Jackfruit slices'],
    store: 'Best eaten warm. Keeps for 1 day and crisps in a hot oven.',
    nut: [310, 2, 35, 18, 2, 21, 50]
  },

  'sinangag': {
    d: 'Filipino garlic fried rice made with plenty of golden garlic and day-old rice, seasoned with salt and pepper.',
    meta: 'Sinangag: Filipino garlic fried rice with plenty of golden garlic and day-old rice. Four servings, cooked for 10 minutes.',
    kw: ['sinangag', 'filipino garlic rice', 'sinangag recipe', 'garlic rice filipino breakfast', 'garlic fried rice with day old rice'],
    why: 'Most home versions come out pale and clumpy, and the fix is rice that has been cooked the day before and plenty of garlic cooked until it is golden, not brown. Sinangag is the Filipino breakfast rice, served with tapa, longganisa or tocino and a fried egg, and the garlic is the whole flavour.\n\nUse eight or more cloves for four servings. It looks like too many and it is not. Slice them thinly or crush and chop them fine, and cook them in oil over a medium-low heat for 2 or 3 minutes, stirring, until they turn pale gold and start to smell sweet. **Take the pan off the heat the moment the garlic colours.** It carries on cooking in the oil and goes from golden to bitter in seconds.\n\nRemove half the garlic to use as a topping, add the cold rice, and break up the clumps with the back of a spoon. Toss for 4 minutes over medium-high heat until the grains are separate and hot all the way through. Season with salt and pepper and nothing else.\n\nServe with the crunchy garlic scattered over.',
    ing: [
      '3 tbsp vegetable oil',
      '8 garlic cloves, finely chopped',
      '500 g cooked and cooled long-grain rice',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oil in a wok or wide pan over a medium-low heat. Add the garlic and cook for 2 to 3 minutes, stirring, until pale gold. Remove half with a slotted spoon.',
      'Add the cold rice to the pan, breaking up the clumps. Toss over a medium-high heat for 4 minutes until hot and separate.',
      'Season with the salt and pepper. Top with the reserved garlic and the spring onions.'
    ],
    tips: [
      'Use rice cooked at least 6 hours earlier.',
      'Keep the heat moderate while the garlic cooks.',
      'Add a fried egg on top.'
    ],
    pair: ['Tapa', 'Longganisa', 'Tocino', 'Fried egg'],
    store: 'Keeps in the fridge for 1 day. Reheat until piping hot.',
    nut: [547, 9, 103, 11, 2, 0, 600]
  },

  'samgyeopsal': {
    d: 'Thick slices of pork belly cooked in a hot pan until crisp, wrapped in lettuce with garlic, ssamjang and kimchi, with a dip of sesame oil and salt.',
    meta: 'Samgyeopsal: thick pork belly slices cooked until crisp, wrapped in lettuce with garlic and ssamjang. Four servings, cooked for 15 minutes.',
    kw: ['samgyeopsal', 'korean pork belly', 'korean pork belly lettuce wraps', 'samgyeopsal recipe', 'korean bbq pork belly at home'],
    why: 'It is a meal, not a dish, and the preparation is mostly setting the table. Samgyeopsal is cooked in front of you at a Korean barbecue restaurant, and the pork belly slices are only the centre of a spread of leaves, sauces, pickles and side dishes that you assemble yourself, bite by bite.\n\nThe pork belly is cut thick, about 1 cm, and not marinated. That is the difference from bulgogi. The seasoning is salt and pepper, and the real flavour comes from the dips and wraps. Cook it in a hot, dry, heavy pan or a griddle until the fat renders and the edges turn crisp and gold, about 4 minutes per side. **Pour off the fat as it collects.** If it builds up, the pork fries instead of crisping.\n\nCut the cooked slices into bite-sized pieces with scissors, the Korean way, and set them on a platter.\n\nA wrap is built in the hand: a lettuce or perilla leaf, a piece of pork, a slice of raw garlic, a dab of ssamjang, a little kimchi, folded into a parcel and eaten whole. The sesame oil and salt dip is for the pork on its own.',
    ing: [
      '600 g pork belly, sliced 1 cm thick',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1 tbsp sesame oil',
      '1/2 tsp salt, for the dip',
      '1 lettuce, leaves separated',
      '6 garlic cloves, thinly sliced',
      '4 tbsp ssamjang',
      '150 g kimchi',
      '4 spring onions, shredded'
    ],
    st: [
      'Season the pork belly with the 1 tsp salt and pepper.',
      'Heat a heavy frying pan or griddle over a medium-high heat. Cook the pork in batches, without oil, for 4 minutes on each side until the edges are crisp. Pour off the fat as it collects.',
      'Mix the sesame oil and 1/2 tsp salt in a small dish for dipping.',
      'Cut the pork into pieces with scissors. Serve with the lettuce, garlic, ssamjang, kimchi and spring onions for wrapping.'
    ],
    tips: [
      'Open a window; the pan will smoke a little.',
      'Use scissors to cut the cooked pork.',
      'Serve with steamed rice and a soup.'
    ],
    pair: ['Steamed rice', 'Doenjang jjigae', 'Kimchi', 'Soju or cold beer'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days; reheat in a hot pan.',
    nut: [868, 17, 11, 84, 4, 4, 1450]
  },

  'sigeumchi-namul': {
    d: 'Spinach blanched for a minute, squeezed dry and tossed with sesame oil, garlic, soy sauce and toasted sesame seeds.',
    meta: 'Sigeumchi namul: spinach blanched, squeezed dry and tossed with sesame oil, garlic and soy sauce. Four servings, cooked in 5 minutes.',
    kw: ['sigeumchi namul', 'korean spinach side dish', 'korean seasoned spinach', 'sigeumchi namul recipe', 'spinach banchan'],
    why: 'Squeeze it as dry as you can: this is the whole technique. Sigeumchi namul is a Korean side dish, one of the small plates of banchan served with rice, and its character is a clean, fresh spinach flavour with a nutty, garlicky seasoning.\n\nBlanch the spinach in boiling water for 40 seconds, no longer. It should turn bright green and just wilt. Drain at once and plunge into cold water to stop the cooking. **Squeeze it with both hands until no more water drips out.** Wet spinach dilutes the seasoning and makes the dish watery.\n\nSeparate the clumps and cut roughly into 6 cm lengths. Toss with a minimum of seasoning: a little soy sauce, a crushed garlic clove, toasted sesame oil, and a pinch of salt. Use your hands. The Korean term for this, "muchim", means mixing by hand, and it spreads the seasoning gently without bruising the leaves.\n\nSprinkle with toasted sesame seeds to finish. Serve cold or at room temperature, the same day.',
    ing: [
      '400 g fresh spinach, washed',
      '2 tsp soy sauce',
      '1 garlic clove, crushed',
      '2 tsp toasted sesame oil',
      '1/4 tsp salt',
      '1 tsp sesame seeds, toasted',
      '1 spring onion, finely sliced'
    ],
    st: [
      'Bring a large pan of water to the boil. Blanch the spinach for 40 seconds. Drain and cool in cold water.',
      'Squeeze the spinach firmly by hand until dry. Cut into 6 cm lengths and loosen the clumps.',
      'Add the soy sauce, garlic, sesame oil, salt and spring onion and toss gently by hand.',
      'Sprinkle with the sesame seeds and serve.'
    ],
    tips: [
      'Do not blanch for more than a minute.',
      'Season sparingly; the spinach should taste fresh.',
      'Serve within a few hours.'
    ],
    pair: ['Steamed rice', 'Bibimbap', 'Samgyeopsal', 'Kimchi'],
    store: 'Best eaten the same day. Keeps in the fridge for 2 days.',
    nut: [55, 3, 4, 3, 2, 1, 370]
  },

  'tamago-sando': {
    d: 'A Japanese egg sandwich of soft white bread filled with a creamy, mashed egg salad seasoned with mayonnaise, mustard and a pinch of sugar.',
    meta: 'Tamago sando: soft white bread filled with creamy mashed egg, mayonnaise, mustard and a pinch of sugar. Two servings, ready in 25 minutes.',
    kw: ['tamago sando', 'japanese egg sandwich', 'tamago sando recipe', 'konbini egg sandwich', 'japanese egg salad sandwich'],
    why: 'The bread is the first thing to get right. Tamago sando uses soft, crustless white sandwich bread, similar to Japanese shokupan, a thick, milky loaf with a tight crumb. In its absence, choose the softest, plainest white sliced loaf you can buy, with no seeds and no crust worth keeping.\n\nBoil the eggs for 10 minutes, then cool in iced water so the yolks stay pale yellow with no grey ring. **Mash the eggs while they are still slightly warm.** They blend better with the mayonnaise and make a smooth, creamy filling.\n\nUse Japanese-style mayonnaise if you have it, which is made with egg yolks and rice vinegar and tastes richer and tangier. If not, regular mayonnaise with a tiny splash of rice vinegar is a good approximation. Add a teaspoon of sugar, a little milk and a pinch of salt, and mix to a spreadable paste.\n\nSpread butter on the bread first to block the moisture. Pile on the filling, press the top slice down gently, cut off the crusts, and slice in half. Wrap in cling film for 10 minutes before cutting so the filling settles.',
    ing: [
      '4 eggs',
      '3 tbsp mayonnaise',
      '1 tsp sugar',
      '1 tsp Dijon mustard',
      '1 tbsp milk',
      '1/4 tsp salt',
      '1 pinch white pepper',
      '4 slices soft white bread',
      '2 tbsp butter, softened'
    ],
    st: [
      'Boil the eggs for 10 minutes. Cool in iced water for 5 minutes, then peel.',
      'Mash the eggs in a bowl with the mayonnaise, sugar, mustard, milk, salt and pepper until creamy.',
      'Butter the bread. Spread the filling thickly over 2 slices and top with the others.',
      'Wrap tightly in cling film and rest for 10 minutes. Cut off the crusts and halve each sandwich.'
    ],
    tips: [
      'Do not overcook the eggs.',
      'Use butter on both slices of bread.',
      'Cut with a serrated knife and a light sawing motion.'
    ],
    pair: ['Green tea', 'Cucumber salad', 'Fruit sandwich', 'Miso soup'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [559, 19, 33, 39, 2, 6, 890]
  },

  'spicy-tuna-roll': {
    d: 'Sushi rice and nori rolled around diced sushi-grade tuna mixed with sriracha mayonnaise and sesame oil, sliced into eight pieces.',
    meta: 'Spicy tuna roll: sushi rice and nori rolled around diced sushi-grade tuna mixed with sriracha mayonnaise. Four servings, ready in 50 minutes.',
    kw: ['spicy tuna roll', 'spicy tuna roll recipe', 'homemade spicy tuna sushi', 'spicy tuna maki', 'sushi rolls with spicy tuna'],
    why: 'Buy the fish from someone who can tell you it is sushi-grade, and keep it cold until the moment it goes into the bowl. Spicy tuna roll is made with raw tuna, so the quality of the fish is a matter of safety as well as flavour. A reputable fishmonger will sell a block labelled for raw eating; if there is any doubt, do not use raw fish.\n\nThe rice is the other half. Short-grain sushi rice is rinsed until the water runs clear, cooked, and dressed while hot with a mixture of rice vinegar, sugar and salt. **Fan the rice as you fold in the dressing.** It cools quickly and takes on a glossy sheen. Cool it to room temperature before rolling, since warm rice cooks the fish and makes the nori go soft.\n\nDice the tuna into 5 mm cubes and mix with Japanese mayonnaise, sriracha, a few drops of sesame oil and chopped spring onion. The mixture should be creamy and bright orange-red.\n\nLay nori on a bamboo mat, spread rice over it with wet fingers, flip so the rice side is down, add the filling and roll tightly. Slice with a wet, sharp knife.',
    ing: [
      '300 g sushi rice',
      '400 ml water',
      '3 tbsp rice vinegar',
      '1 tbsp sugar',
      '1 tsp salt',
      '300 g sushi-grade tuna, finely diced',
      '3 tbsp Japanese mayonnaise',
      '1 tbsp sriracha',
      '1 tsp sesame oil',
      '2 spring onions, finely chopped',
      '10 g nori sheets',
      '1 tbsp sesame seeds'
    ],
    st: [
      'Rinse the rice until the water runs clear. Cook with the water in a covered pan for 15 minutes, then rest for 10 minutes.',
      'Warm the vinegar, sugar and salt until dissolved. Fold into the hot rice, fanning it, and cool to room temperature.',
      'Mix the tuna with the mayonnaise, sriracha, sesame oil and spring onions.',
      'Lay a nori sheet on a bamboo mat. Spread a quarter of the rice over it, sprinkle with sesame seeds, flip, add a quarter of the tuna along the edge and roll tightly.',
      'Slice each roll into 8 pieces with a wet, sharp knife.'
    ],
    tips: [
      'Keep the tuna chilled until the last minute.',
      'Wet your hands to handle the rice.',
      'Use a very sharp knife for clean slices.'
    ],
    pair: ['Miso soup', 'Pickled ginger and wasabi', 'Soy sauce', 'Edamame'],
    store: 'Best eaten within 1 hour. Do not keep raw fish rolls.',
    nut: [468, 24, 66, 12, 2, 3, 800]
  },

  'japanese-ginger-dressing': {
    d: 'A smooth, tangy dressing of onion, fresh ginger, soy sauce, rice vinegar and oil, blended until pale and creamy like a teppanyaki salad dressing.',
    meta: 'Japanese ginger dressing: onion, fresh ginger, soy sauce, rice vinegar and oil blended until pale and creamy. Six servings, ready in 10 minutes.',
    kw: ['japanese ginger dressing', 'hibachi ginger dressing', 'japanese ginger salad dressing', 'japanese steakhouse ginger dressing', 'ginger onion dressing'],
    why: 'If a salad has ever been the best part of a teppanyaki dinner, this was why. The dressing is pale orange, creamy without any cream, and sharp with ginger and onion. It looks complicated, and it is a blender job.\n\nThe ingredients are plain: a small onion, a good chunk of fresh ginger, a little carrot for sweetness and colour, soy sauce, rice vinegar, sugar, a spoonful of ketchup and oil. Ketchup sounds strange but it adds tomato body and a mild sweetness that smooths the edges. **Use a neutral oil and add it last, with the motor running.** It forms an emulsion, which is why the dressing turns pale and thick.\n\nPeel the ginger and cut it into thin coins so the blender can grind it, otherwise the dressing is stringy. If it is still textured, strain it through a sieve.\n\nBlend for a full minute, scraping down the sides. Taste and adjust: it should be sharp, a little sweet and strongly gingery. Chill for 30 minutes before serving, as the flavours deepen in the fridge.',
    ing: [
      '1 small onion, about 100 g, roughly chopped',
      '30 g fresh ginger, peeled and sliced',
      '1 small carrot, about 50 g, chopped',
      '3 tbsp soy sauce',
      '3 tbsp rice vinegar',
      '2 tbsp sugar',
      '1 tbsp tomato ketchup',
      '2 tbsp water',
      '100 ml vegetable oil'
    ],
    st: [
      'Put the onion, ginger, carrot, soy sauce, vinegar, sugar, ketchup and water in a blender and blend until smooth.',
      'With the motor running, pour in the oil in a thin stream until the dressing is pale and creamy.',
      'Taste and adjust. Chill for 30 minutes before using.'
    ],
    tips: [
      'Slice the ginger thin so it blends smoothly.',
      'Strain through a sieve for a perfectly smooth dressing.',
      'Shake before using; it separates in the fridge.'
    ],
    pair: ['Iceberg lettuce salad', 'Grilled chicken', 'Hibachi vegetables', 'Fried rice'],
    store: 'Keeps in the fridge for 1 week. Shake before using.',
    nut: [175, 1, 9, 15, 1, 6, 470]
  },

  'shuwa': {
    d: 'Omani festive lamb marinated in a paste of cumin, coriander, cinnamon, cardamom and vinegar, wrapped in banana leaf and cooked very slowly until it falls apart.',
    meta: 'Shuwa: Omani lamb marinated in a spice and vinegar paste, wrapped in banana leaf and cooked very slowly. Eight servings, cooked for 4 hours.',
    kw: ['shuwa', 'omani shuwa', 'shuwa lamb recipe', 'omani slow cooked lamb', 'oman festive lamb wrapped in banana leaf'],
    why: 'A dish for a table of eight on a holiday, and the one to start the day before. Shuwa is an Omani festival dish in which a spiced lamb is wrapped and cooked underground for a day or two. In a home oven it takes 4 hours and the result is still the most tender lamb you will cook.\n\nThe flavour begins with the paste. Cumin, coriander, black pepper, cinnamon, cardamom, cloves and dried chillies are toasted and ground, then mixed with garlic, ginger, vinegar and oil. Rub it into every surface of the meat and leave it overnight. **The marinade has 12 hours to work; do not shorten it.** The vinegar softens the meat and the spices penetrate the flesh.\n\nWrap the lamb in banana leaves, which give a faint smoky sweetness, and then in a double layer of foil, sealed at the edges. Nothing should leak. Banana leaves are sold frozen in many Asian shops; if you cannot find them, the foil alone still works.\n\nCook at 150°C for 4 hours without opening. The meat is ready when it can be pulled apart with a fork. Serve over fragrant rice with the juices spooned over.',
    ing: [
      '2 kg lamb shoulder on the bone',
      '2 tbsp cumin seeds, toasted',
      '2 tbsp coriander seeds, toasted',
      '1 tbsp black peppercorns',
      '3 g cinnamon stick',
      '2 g green cardamom pods',
      '1 g cloves',
      '4 dried red chillies',
      '8 garlic cloves',
      '2 tbsp fresh ginger, chopped',
      '4 tbsp white vinegar',
      '4 tbsp vegetable oil',
      '2 tsp salt',
      '2 banana leaves, softened over a flame (optional)'
    ],
    st: [
      'Grind the cumin, coriander, peppercorns, cinnamon, cardamom, cloves and chillies to a powder. Blend with the garlic, ginger, vinegar, oil and salt to a thick paste.',
      'Make deep cuts in the lamb and rub the paste into the cuts and all over the surface. Cover and refrigerate for 12 hours.',
      'Heat the oven to 150°C (130°C fan). Wrap the lamb in the banana leaves, then in two layers of foil, sealing the edges tightly.',
      'Cook on a tray for 4 hours, until the meat falls from the bone. Rest in the foil for 15 minutes before opening.'
    ],
    tips: [
      'Seal the foil well; steam must stay in.',
      'Do not open the parcel until the end.',
      'Spoon the juices over the rice.'
    ],
    pair: ['Spiced rice', 'Cucumber yoghurt', 'Flatbread', 'Dates'],
    store: 'Keeps in the fridge for 3 days. Reheat in its juices.',
    nut: [729, 44, 10, 57, 2, 4, 770],
    rest: [720, 'Marinating overnight']
  },

  'chicken-machboos': {
    d: 'A Gulf rice dish of chicken cooked with baharat, dried limes, tomatoes and saffron, with the rice steamed in the spiced stock.',
    meta: 'Chicken machboos: Gulf rice cooked with chicken, baharat, dried limes, tomatoes and saffron. Six servings, cooked for 50 minutes.',
    kw: ['chicken machboos', 'machboos', 'gulf chicken machboos', 'emirati chicken machboos', 'machboos rice with dried limes'],
    why: 'Dried limes are the clue to this one. Machboos, also spelled machbous, is a rice dish found around the Gulf, and its fragrance comes from loomi: whole dried limes pierced and simmered in the stock until they release a sour, smoky, almost fermented note. Nothing else tastes like them.\n\nStart with the chicken and the spices. Baharat, a mix of black pepper, cinnamon, cloves, cardamom and cumin, is rubbed on the chicken, which is then browned in oil with onions. Add garlic, ginger, tomatoes, tomato purée and the dried limes, pierced with a knife, and cook until the tomatoes collapse. **Pierce the limes before adding them, or they will not release flavour.**\n\nPour in the stock and simmer for 20 minutes until the chicken is tender. Lift out the chicken and keep it warm. Measure the stock: you need 1.5 parts stock to 1 part rice, and the rice is cooked in it.\n\nWhile the rice steams, grill or brown the chicken for crispness. Serve the rice on a platter with the chicken on top, saffron-soaked milk drizzled over, and fried onions.',
    ing: [
      '1.2 kg chicken thighs and drumsticks',
      '2 tsp baharat',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, finely sliced',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '3 tomatoes, about 300 g, chopped',
      '2 tbsp tomato purée',
      '10 g dried limes (loomi), pierced',
      '1 litre chicken stock',
      '2 tsp salt',
      '400 g basmati rice, rinsed and soaked for 20 minutes',
      '1 pinch saffron strands',
      '3 tbsp hot milk',
      '2 tbsp fried onions'
    ],
    st: [
      'Rub the chicken with 1 tsp of the baharat. Heat the oil in a large pot and brown the chicken for 6 minutes. Remove.',
      'Cook the onions in the same pot for 8 minutes until golden. Add the garlic, ginger and remaining baharat for 1 minute, then the tomatoes, tomato purée and dried limes. Cook for 5 minutes.',
      'Return the chicken, add the stock and salt, and simmer for 20 minutes. Lift out the chicken and keep warm.',
      'Measure 600 ml of the stock into the pot, add the drained rice, cover and cook over a low heat for 15 minutes. Rest for 10 minutes.',
      'Soak the saffron in the hot milk. Pile the rice on a platter, top with the chicken, drizzle with the saffron milk and scatter with the fried onions.'
    ],
    tips: [
      'Pierce the dried limes so they can release flavour.',
      'Remove the limes before serving if you prefer less sourness.',
      'Finish the chicken under the grill for colour.'
    ],
    pair: ['Tomato and cucumber salad', 'Daqus (chilli tomato sauce)', 'Yoghurt', 'Lime wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [597, 47, 64, 17, 3, 4, 1530]
  },

  'luqaimat': {
    d: 'Small, golden dough balls with a crisp shell and a soft centre, cooked in hot oil and drizzled with date syrup.',
    meta: 'Luqaimat: small golden dough balls with a crisp shell and soft centre, drizzled with date syrup. Six servings, cooked in 15 minutes.',
    kw: ['luqaimat', 'luqaimat recipe', 'emirati luqaimat', 'arabic sweet dumplings', 'luqaimat with date syrup'],
    why: 'Wet your spoon, always. Luqaimat batter is sticky and loose, and without a wet spoon or hands the dough clings to everything and slides off in uneven lumps. A dish of cold water beside the pan solves this, and it is the only trick in the recipe.\n\nThe batter is flour, cornflour, a little sugar, yeast, cardamom and a pinch of saffron, mixed with warm milk and water to a thick but pourable consistency. It must rest for 1 hour in a warm place, until bubbly and almost doubled. The bubbles are what give luqaimat a light inside and a crisp shell. **Stir the batter once before frying, gently.** Beating it flat knocks the air out.\n\nHeat the oil to 180°C. Scoop a spoonful of batter with a wet spoon and push it off with another wet spoon or your thumb. The dumplings sink for a second, then rise and turn golden. Fry in batches for 3 minutes, turning, until deep gold all over.\n\nDrain briefly and drizzle at once with warm date syrup, then top with sesame seeds. Eat them hot, in the first 10 minutes.',
    ing: [
      '200 g plain flour',
      '2 tbsp cornflour',
      '1 tbsp sugar',
      '1 tsp fast-action dried yeast',
      '1/2 tsp ground cardamom',
      '1 pinch saffron strands',
      '1/4 tsp salt',
      '150 ml warm milk',
      '100 ml warm water',
      '300 ml vegetable oil, for frying',
      '4 tbsp date syrup',
      '1 tbsp sesame seeds, toasted'
    ],
    st: [
      'Mix the flour, cornflour, sugar, yeast, cardamom, saffron and salt. Add the milk and water and beat to a thick, smooth batter.',
      'Cover and leave in a warm place for 1 hour until bubbly.',
      'Heat the oil to 180°C in a deep pan. Using a wet spoon, drop in spoonfuls of batter, 6 at a time.',
      'Cook for 3 minutes, turning, until deep golden. Drain on kitchen paper.',
      'Drizzle with the date syrup and sprinkle with the sesame seeds. Serve hot.'
    ],
    tips: [
      'Keep a bowl of water nearby to wet your spoons.',
      'Do not overcrowd the pan.',
      'Serve at once; they soften as they cool.'
    ],
    pair: ['Arabic coffee', 'Karak chai', 'Date syrup', 'Cinnamon'],
    store: 'Best eaten hot. Keeps for 1 day; re-crisp in a hot oven.',
    nut: [604, 5, 38, 48, 1, 10, 110],
    rest: [60, 'Proving the batter']
  },

  'fatta': {
    d: 'Layers of crisp toasted pitta and rice topped with tender lamb, a garlicky tomato sauce and a splash of vinegar, finished with the cooking broth.',
    meta: 'Fatta: toasted pitta and rice topped with tender lamb, garlic tomato sauce and vinegar, moistened with broth. Six servings, cooked for 2 hours.',
    kw: ['fatta', 'egyptian fatta', 'fatta recipe', 'egyptian fatta with lamb', 'eid fatta with rice and bread'],
    why: 'Fatta is built in layers, from the bottom up, and the order matters. First comes bread, torn and toasted until crisp. Then rice, then the meat, and over everything the sauce, a pungent mix of garlic, vinegar and tomato that turns the bread tender where it touches and leaves the top still crisp. It is a dish for celebration in Egypt, especially at Eid.\n\nThe lamb needs 90 minutes, so start there. Simmer lamb shoulder with an onion, cinnamon, cardamom and bay in water until it falls from the bone. The broth that results is the lifeblood of the dish. **Reserve it all.** Some goes into the rice, some moistens the bread, and the rest is poured over the top.\n\nToast torn pitta in the oven at 200°C for 10 minutes until golden and brittle. Cook the rice in the lamb broth. The sauce, taqliya, is the finish. Fry plenty of crushed garlic in butter until golden, add tomato purée and white vinegar, and let it bubble for a minute. It smells strong, and it should.\n\nAssemble just before serving, or the bread loses its crunch. Layer bread, rice, lamb; pour over broth and sauce.',
    ing: [
      '800 g lamb shoulder on the bone, cut into large pieces',
      '1 onion, about 150 g, halved',
      '3 g cinnamon stick',
      '2 g green cardamom pods',
      '1 bay leaf',
      '1 tsp salt',
      '1.2 litres water',
      '4 pitta breads, about 280 g, torn',
      '300 g short-grain rice',
      '3 tbsp butter',
      '8 garlic cloves, crushed',
      '3 tbsp tomato purée',
      '4 tbsp white vinegar',
      '200 ml lamb broth'
    ],
    st: [
      'Put the lamb, onion, cinnamon, cardamom, bay and salt in a pan with the water. Bring to a boil, skim, then simmer gently for 90 minutes until the lamb is very tender. Strain, keeping the lamb and broth.',
      'Heat the oven to 200°C (180°C fan). Spread the pitta on a tray and bake for 10 minutes until crisp.',
      'Cook the rice in 500 ml of the broth in a covered pan for 15 minutes.',
      'Melt the butter, fry the garlic for 1 minute, add the tomato purée and vinegar and bubble for 1 minute.',
      'Layer the bread, rice and lamb in a deep dish. Moisten with the 200 ml broth and pour over the garlic sauce.'
    ],
    tips: [
      'Assemble just before serving to keep the bread crisp.',
      'Fry the garlic gently; it should not brown.',
      'Add a handful of toasted pine nuts for extra crunch.'
    ],
    pair: ['Green salad', 'Pickled turnips', 'Yoghurt', 'Hot green chillies'],
    store: 'Keep the components separate in the fridge for 2 days. Assemble fresh.',
    nut: [706, 32, 68, 34, 3, 4, 840]
  },

  'beef-tagine-with-prunes': {
    d: 'Beef slowly braised with onion, ginger, cinnamon and saffron, finished with sweet, sticky prunes, honey and toasted almonds.',
    meta: 'Beef tagine with prunes: beef braised with onion, ginger, cinnamon and saffron, with prunes, honey and almonds. Six servings, cooked for 2 hours.',
    kw: ['beef tagine with prunes', 'moroccan beef and prune tagine', 'beef tagine recipe', 'moroccan beef tagine with almonds', 'sweet and savoury moroccan beef'],
    why: 'In the first cold week of autumn this is the pot to make: a tagine of beef in a thick sauce, sweet with prunes and scented with cinnamon. The sweet and savoury combination is Moroccan in character and works wonderfully with slow-cooked beef.\n\nStart with the meat. Beef shin or chuck, cut into big 4 cm pieces, gives the best texture after 2 hours. Season it, and cook it with onions, ginger, turmeric, pepper, saffron and a cinnamon stick, in just enough water to come halfway up. **Do not brown the beef first.** The traditional method is a gentle stew, not a sear, and the sauce stays pale golden.\n\nA heavy pot with a tight lid works as well as a clay tagine. Cook on the lowest heat so the liquid barely trembles. Check it after an hour and add a splash of water if needed.\n\nThe prunes go in for the last 30 minutes with honey and a pinch of cinnamon. They plump and sweeten the sauce. Meanwhile, toast the almonds in a dry pan. Scatter them over the top with sesame seeds, and serve with bread or couscous.',
    ing: [
      '1 kg beef shin or chuck, cut into 4 cm pieces',
      '2 onions, about 300 g, grated',
      '1 tsp ground ginger',
      '1 tsp ground turmeric',
      '1/2 tsp ground black pepper',
      '1 pinch saffron strands',
      '3 g cinnamon stick',
      '1 tsp salt',
      '2 tbsp olive oil',
      '400 ml water',
      '250 g pitted prunes',
      '3 tbsp honey',
      '1/2 tsp ground cinnamon',
      '50 g blanched almonds, toasted',
      '1 tbsp sesame seeds, toasted'
    ],
    st: [
      'Put the beef, onions, ginger, turmeric, pepper, saffron, cinnamon stick, salt, oil and water in a heavy pot. Bring to a simmer.',
      'Cover and cook over the lowest heat for 90 minutes, until the beef is nearly tender, adding a splash of water if needed.',
      'Add the prunes, honey and ground cinnamon and cook uncovered for 30 minutes until the sauce is thick and glossy.',
      'Scatter with the almonds and sesame seeds.'
    ],
    tips: [
      'Cook the tagine on the lowest heat.',
      'Choose soft, plump prunes.',
      'The dish tastes even better the next day.'
    ],
    pair: ['Couscous', 'Crusty bread', 'Moroccan orange salad', 'Mint tea'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [604, 36, 43, 32, 5, 27, 510]
  },

  'seven-vegetable-couscous': {
    d: 'Steamed couscous served with chicken and seven vegetables in a golden, gently spiced broth, with chickpeas and a spoon of harissa on the side.',
    meta: 'Seven-vegetable couscous: couscous with chicken and seven vegetables in a golden, gently spiced broth. Six servings, cooked for 60 minutes.',
    kw: ['seven vegetable couscous', 'moroccan seven vegetable couscous', 'couscous with seven vegetables', 'moroccan couscous with chicken', 'friday couscous moroccan'],
    why: 'Friday in Morocco is couscous day, and this is the version that fills the table. The number seven stands for good luck, and the vegetables are a mix: carrots, turnips, courgettes, pumpkin, cabbage, onions and tomatoes, with chickpeas as the pulse. Nobody counts too carefully, and neither should you.\n\nThe broth comes first. Chicken thighs are simmered with onions, ginger, turmeric, saffron, black pepper and cinnamon for 20 minutes. The vegetables then go in according to how long they take: carrots and turnips first, then pumpkin and cabbage, courgettes last. **Cut the vegetables in big pieces and add them in stages.** Everything should finish tender, not collapsed.\n\nCouscous is simpler than its reputation. Fine instant couscous only needs hot stock or water poured over it, with a spoonful of butter and a pinch of salt. Leave it covered for 5 minutes, then fluff with a fork, rubbing out any lumps with oiled fingers.\n\nPile the couscous on a large dish, arrange the chicken and vegetables over it, and ladle some broth over the top. A bowl of harissa and extra broth go on the side.',
    ing: [
      '# Broth',
      '800 g chicken thighs on the bone',
      '2 onions, about 300 g, quartered',
      '1 tsp ground ginger',
      '1 tsp ground turmeric',
      '1 pinch saffron strands',
      '1/2 tsp ground black pepper',
      '3 g cinnamon stick',
      '1.5 litres water',
      '2 tsp salt',
      '# Vegetables',
      '3 carrots, about 300 g, cut into large pieces',
      '2 turnips, about 200 g, quartered',
      '200 g pumpkin, cut into large pieces',
      '200 g white cabbage, cut into wedges',
      '2 courgettes, about 300 g, cut into chunks',
      '2 tomatoes, about 200 g, quartered',
      '200 g tinned chickpeas, drained',
      '# Couscous',
      '350 g fine couscous',
      '400 ml hot stock from the broth',
      '2 tbsp butter',
      '1/2 tsp salt'
    ],
    st: [
      'Put the chicken, onions, ginger, turmeric, saffron, pepper, cinnamon, water and salt in a large pot. Bring to a boil, skim, and simmer for 20 minutes.',
      'Add the carrots and turnips and cook for 10 minutes. Add the pumpkin, cabbage, tomatoes and chickpeas and cook for 10 minutes. Add the courgettes and cook for 8 minutes.',
      'Put the couscous in a bowl with the butter and salt. Pour over 400 ml of the hot broth, cover and leave for 5 minutes. Fluff with a fork, rubbing out any lumps.',
      'Pile the couscous on a large dish. Arrange the chicken and vegetables on top and ladle over some broth. Serve the rest in a bowl.'
    ],
    tips: [
      'Add the vegetables in stages so they all finish tender.',
      'Fluff the couscous with oiled fingers.',
      'Serve with harissa stirred into a ladle of broth.'
    ],
    pair: ['Harissa', 'Raisins and caramelised onions', 'Buttermilk', 'Mint tea'],
    store: 'Keep the couscous and stew separate. Both keep in the fridge for 2 days.',
    nut: [553, 40, 69, 13, 10, 12, 1500]
  },

  'bissara': {
    d: 'A thick, smooth Moroccan soup of dried split fava beans or peas blended with garlic and cumin, served with olive oil and paprika.',
    meta: 'Bissara: a thick, smooth Moroccan soup of split fava beans blended with garlic and cumin, with olive oil and paprika. Four servings, cooked for 45 minutes.',
    kw: ['bissara', 'moroccan bissara', 'fava bean soup moroccan', 'bissara recipe', 'moroccan split pea soup with cumin'],
    why: 'Olive oil is not a garnish here; it is half the dish. A bowl of bissara arrives with a pool of green oil in the middle, a dusting of cumin and paprika on top and a piece of warm bread alongside. It is a winter breakfast in Moroccan towns, sold from stalls, eaten standing up.\n\nThe base is dried split fava beans, which cook to a smooth purée without soaking. Skinned split peas are an easy substitute. Rinse them well, cover with water, add a few cloves of garlic and simmer for 45 minutes until they fall apart. **Skim the foam in the first 10 minutes.** It tastes bitter if left.\n\nBlend the cooked beans with their liquid, cumin and salt until completely smooth. The consistency should be thick, like a loose porridge. Add hot water if too stiff.\n\nLadle into bowls and make a well in the middle. Fill with olive oil, then sprinkle with cumin, paprika and a pinch of chilli. Serve at once with bread to dip, and with lemon wedges if you like.',
    ing: [
      '250 g dried split fava beans or split peas',
      '1.2 litres water',
      '4 garlic cloves, peeled',
      '1 tsp ground cumin',
      '1 tsp salt',
      '4 tbsp olive oil',
      '1 tsp paprika',
      '1/2 tsp ground cumin, to serve',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Rinse the beans well. Put them in a pan with the water and garlic. Bring to a boil, skim the foam, then simmer for 45 minutes until very soft.',
      'Blend with the cooking liquid, 1 tsp cumin and the salt until completely smooth, adding hot water if too thick.',
      'Ladle into bowls and make a well in each. Pour in the olive oil and sprinkle with the paprika and cumin.',
      'Serve with lemon wedges and bread.'
    ],
    tips: [
      'Use good olive oil; you will taste it.',
      'Stir the soup over a low heat if it thickens as it stands.',
      'A pinch of chilli flakes adds warmth.'
    ],
    pair: ['Crusty bread', 'Olives', 'Harissa', 'Mint tea'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months. It thickens; add water when reheating.',
    nut: [359, 16, 40, 15, 17, 5, 600]
  },

  'moroccan-orange-salad': {
    d: 'Sliced oranges with cinnamon, orange blossom water, mint and black olives, served chilled as a refreshing salad or dessert.',
    meta: 'Moroccan orange salad: sliced oranges with cinnamon, orange blossom water, mint and black olives. Four servings, no cooking.',
    kw: ['moroccan orange salad', 'orange and cinnamon salad', 'moroccan orange salad recipe', 'orange salad with olives', 'orange blossom water salad'],
    why: 'Does an orange salad belong in the dessert course or the main one? In Morocco, both. Sliced oranges dusted with cinnamon end a meal, and the same oranges with olives and red onion sit on the table beside a tagine. This version leans to the sweet side, with a light touch of salt from olives.\n\nPeel the oranges with a sharp knife, cutting away the pith as well as the skin, so that the flesh is exposed. Slice them into thin rounds across the segments. The slices look best overlapped on a wide plate. **Choose sweet, juicy oranges, such as navel or blood oranges.** Bitter ones need a lot of sugar.\n\nThe dressing is just a spoonful of orange blossom water, a pinch of sugar if the fruit is sharp, and the juice that runs from the slices. Cinnamon is dusted on top through a sieve. A few mint leaves bring a green freshness.\n\nChill for 30 minutes before serving. The flavours blend, and the oranges release more juice. Scatter a handful of black olives on top if you want a savoury note, and leave them out for dessert.',
    ing: [
      '4 large oranges, about 800 g',
      '1 tbsp orange blossom water',
      '1 tbsp icing sugar',
      '1/2 tsp ground cinnamon',
      '1 small handful fresh mint leaves',
      '12 black olives, optional'
    ],
    st: [
      'Cut the peel and pith from the oranges. Slice into thin rounds, discarding any pips.',
      'Overlap the slices on a wide plate. Pour over any juice and the orange blossom water.',
      'Dust with the icing sugar and cinnamon. Chill for 30 minutes.',
      'Scatter with the mint and olives, if using, before serving.'
    ],
    tips: [
      'Use a sharp knife to cut away every trace of pith.',
      'Add the cinnamon just before serving.',
      'A handful of pomegranate seeds makes it look festive.'
    ],
    pair: ['Tagine', 'Couscous', 'Mint tea', 'Almond pastries'],
    store: 'Best eaten within 2 hours of slicing. Keeps in the fridge for 1 day.',
    nut: [138, 2, 28, 2, 5, 22, 180]
  }
};
