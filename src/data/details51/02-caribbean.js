'use strict';

/**
 * Volume fifty-one — the Americas, the Caribbean and the Pacific, second part.
 *
 * Twenty-five dishes: Cuban yuca con mojo and flan; Puerto Rican pasteles,
 * alcapurrias and tembleque; the Dominican bandera and mangú; Haitian griot,
 * pikliz and rice with black mushrooms; nine Jamaican dishes, from curry
 * chicken and brown stew to festival, bun and cheese, rum cake and three
 * soups; and Trinidadian dhalpuri roti, pelau, curry duck, aloo pie and bake
 * and shark, with Barbadian cou-cou. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'yuca-con-mojo': {
    d: 'Boiled cassava served with a warm, garlicky mojo of olive oil, sour orange and sweet onion, a Cuban staple.',
    meta: 'Yuca con mojo: boiled cassava served with a warm, garlicky mojo of olive oil, sour orange and sweet onion. Four servings, cooked for 30 minutes.',
    kw: ['yuca con mojo', 'cuban yuca con mojo', 'yuca con mojo recipe', 'cassava with garlic mojo', 'cuban boiled yuca with garlic sauce'],
    why: 'The sauce is warm, not cold, and the garlic is just barely cooked. Yuca con mojo is a plate of tender boiled cassava with a dressing made from the best things in a Cuban kitchen: olive oil heated just enough to soften a lot of garlic, then mixed with sour orange juice and thinly sliced onion. The cassava is mild and starchy, and the mojo is sharp and aromatic.\n\nBuy fresh cassava, sold in many supermarkets in the exotics section. It has a rough brown skin and a white flesh. Peel it, cut it into chunks, and remove the woody core that runs through the centre of each piece. Boil in salted water for 20 minutes, until a fork passes through without resistance and the chunks have begun to split. **Don\'t overboil.** They fall apart and become waterlogged.\n\nFor the mojo, warm 100 ml of olive oil with 8 sliced garlic cloves over a medium-low heat for 3 minutes, until the garlic smells sweet but has not coloured. Take it off the heat and stir in the sour orange juice (or a mix of orange and lime), salt and oregano. The mixture sizzles and releases its aroma.\n\nDrain the yuca, pile it on a plate, and pour the warm mojo over the top with slices of raw onion. Eat at once.',
    ing: [
      '1 kg fresh cassava (yuca), peeled and cut into 6 cm chunks',
      '1 tsp salt, for the water',
      '100 ml olive oil',
      '8 garlic cloves, thinly sliced',
      '4 tbsp orange juice',
      '2 tbsp lime juice',
      '1/2 tsp salt',
      '1/2 tsp dried oregano',
      '1/2 onion, about 80 g, thinly sliced'
    ],
    st: [
      'Boil the cassava in salted water for 20 minutes until tender. Drain well.',
      'Warm the olive oil and garlic in a small pan over a medium-low heat for 3 minutes, without letting the garlic colour.',
      'Take off the heat and stir in the orange juice, lime juice, salt and oregano.',
      'Pile the cassava on a plate, pour over the warm mojo and scatter with the onion.'
    ],
    tips: [
      'Remove the woody core of the cassava.',
      'Do not brown the garlic.',
      'Serve at once while the mojo is warm.'
    ],
    pair: ['Roast pork', 'Black beans', 'White rice', 'Fried plantains'],
    store: 'Best eaten straight away. Leftovers keep in the fridge for 2 days.',
    nut: [636, 4, 101, 24, 5, 7, 920]
  },

  'cuban-flan': {
    untimed: ['cooling'],
    d: 'A dense, silky caramel custard of condensed and evaporated milk, eggs and vanilla, baked in a water bath and chilled.',
    meta: 'Cuban flan: a dense, silky caramel custard of condensed and evaporated milk, eggs and vanilla, baked in a water bath. Eight servings, baked for 60 minutes.',
    kw: ['cuban flan', 'flan de leche cubano', 'cuban flan recipe', 'caramel custard with condensed milk', 'cuban caramel flan'],
    why: 'Smooth, heavy and sweet: a Cuban flan has the texture of a firm cream cheese, rather than a wobbly French crème caramel. The reason is the milk. Two tins, one of sweetened condensed milk and one of evaporated, replace the fresh milk, and the custard bakes slowly into a thick, close-textured slice with a deep caramel on top.\n\nThe caramel is first. Heat 150 g of sugar with 2 tablespoons of water in a pan, without stirring, until it turns the colour of dark amber, about 8 minutes. **Pour it into the mould as soon as it reaches colour**, tilting the tin to coat the base. A pale caramel is too sweet and a dark one bitter.\n\nBlend the eggs, condensed milk, evaporated milk, vanilla and a pinch of salt for 30 seconds. Don\'t whisk in air. Strain through a sieve to remove any threads. Pour into the caramel-lined tin.\n\nStand the tin in a roasting pan and add boiling water to halfway. Bake at 160°C for 60 minutes. It should wobble slightly in the centre. Cool, then chill for at least 4 hours or overnight. To serve, run a knife round the edge and invert onto a plate, letting the caramel flood over.',
    ing: [
      '150 g caster sugar',
      '2 tbsp water',
      '4 eggs',
      '397 g tin sweetened condensed milk',
      '410 g tin evaporated milk',
      '2 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan). Heat the sugar and water in a pan without stirring for about 8 minutes until deep amber. Pour into a 22 cm cake tin, tilting to coat the base.',
      'Blend the eggs, condensed milk, evaporated milk, vanilla and salt for 30 seconds. Strain into the tin.',
      'Stand the tin in a roasting pan and pour in boiling water to come halfway up. Bake for 60 minutes until set with a slight wobble.',
      'Cool, then chill for at least 4 hours. Run a knife round the edge and invert onto a plate.'
    ],
    tips: [
      'Blend gently; avoid making froth.',
      'Cover with foil if the top browns too fast.',
      'Chill overnight for the cleanest slices.'
    ],
    pair: ['Cuban coffee', 'Fresh fruit', 'Whipped cream', 'Rum'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [334, 10, 51, 10, 0, 51, 170],
    rest: [240, 'Chilling']
  },

  'puerto-rican-pasteles': {
    d: 'Parcels of grated green banana and plantain dough filled with seasoned pork, wrapped in banana leaf and parchment and boiled.',
    meta: 'Puerto Rican pasteles: parcels of grated green banana and plantain dough filled with seasoned pork, wrapped and boiled. Makes twelve, boiled for 60 minutes.',
    kw: ['puerto rican pasteles', 'pasteles recipe', 'pasteles puertorriquenos', 'christmas pasteles with pork', 'green banana pasteles'],
    why: 'Making pasteles is a family project that takes a whole afternoon, and it is the dish that comes out at Christmas in Puerto Rico. The dough is grated, never pounded: green bananas, green plantain and yautía (taro root) are peeled and grated by hand or in a food processor into a coarse, pale paste, then thinned with the oil that has been coloured with annatto. The filling is spiced pork, stewed with sofrito, tomato, olives and raisins.\n\nWith ingredients like these, preparation is slow. Peel the green bananas under running water, since the sap stains. Grate the lot, mix in the annatto oil, salt and a splash of the pork cooking liquid, and mix until the masa is smooth, thick and spreadable. **Taste the masa for salt.** It is difficult to season once wrapped.\n\nBanana leaves, softened over a gas flame, and a sheet of parchment paper make each parcel. Spread 4 tablespoons of masa on the leaf, spoon 2 tablespoons of filling in the middle, fold, and tie with kitchen string, in pairs. They are traditionally boiled joined in pairs.\n\nDrop into a large pot of boiling salted water and simmer for 60 minutes. Drain, unwrap and eat hot, with hot sauce.',
    ing: [
      '# Filling',
      '2 tbsp vegetable oil',
      '600 g pork shoulder, finely diced',
      '4 tbsp sofrito',
      '2 tbsp tomato purée',
      '8 pimiento-stuffed olives, sliced',
      '40 g raisins',
      '200 ml water',
      '1 tsp salt',
      '# Masa',
      '500 g green bananas, peeled',
      '300 g green plantain, peeled',
      '300 g yautía (taro), peeled',
      '4 tbsp annatto-infused oil',
      '1 1/2 tsp salt',
      '# To wrap',
      '12 pieces banana leaf or baking paper, 25 cm square'
    ],
    st: [
      'For the filling, brown the pork in the oil for 8 minutes. Add the sofrito and tomato purée and cook for 3 minutes. Add the olives, raisins, water and salt. Simmer for 30 minutes until the liquid has reduced. Cool.',
      'Grate the bananas, plantain and yautía finely. Mix with the annatto oil and salt to a smooth, thick paste.',
      'Soften the banana leaves over a flame. Spread 4 tablespoons of masa on each, add 2 tablespoons of filling, fold the leaf into a parcel and tie with string. Make 12.',
      'Boil in salted water for 60 minutes. Drain and unwrap to serve.'
    ],
    tips: [
      'Wear gloves when peeling green bananas.',
      'Make the pasteles in bulk and freeze them.',
      'Serve with hot sauce.'
    ],
    pair: ['Hot sauce', 'Rice with pigeon peas', 'Coquito', 'Roast pork'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [403, 12, 55, 15, 6, 26, 580]
  },

  'puerto-rican-alcapurrias': {
    untimed: ['cooling completely'],
    d: 'Fritters of grated green banana and taro dough, stuffed with seasoned beef and cooked until crisp, a Puerto Rican street food.',
    meta: 'Puerto Rican alcapurrias: fritters of grated green banana and taro dough stuffed with seasoned beef and cooked until crisp. Makes twelve, cooked for 10 minutes.',
    kw: ['puerto rican alcapurrias', 'alcapurrias', 'alcapurrias recipe', 'banana and yautia fritters with picadillo', 'puerto rican street food fritters'],
    why: 'They are the street food of the beach kiosks at Piñones, sold from stalls in a crisp, cylindrical shape, with the hot beef inside a dough of green banana and taro. The outside is slightly sticky and the crust brown, and the filling is a savoury beef picadillo.\n\nThe dough is similar to that for pasteles. Grate green bananas and yautía together until you have a coarse pulp, then mix with annatto oil and salt until smooth. The dough must be sticky but hold its shape when pressed. **Add a spoonful of masa harina if it is too wet.** The fritters will fall apart in the oil otherwise.\n\nThe picadillo is minced beef cooked with sofrito, tomato, olives and a little cumin, until the liquid has gone. Cool it completely. Warm filling melts the dough.\n\nWith oiled hands, take a 5 cm ball of dough, flatten it in your palm, put a spoonful of picadillo in the centre and close the dough around, rolling it into a fat sausage. Oil prevents sticking. Cook in oil at 175°C for 4 minutes, turning, until deep brown and crisp. Drain. Serve hot with hot sauce.',
    ing: [
      '# Filling',
      '1 tbsp vegetable oil',
      '250 g minced beef',
      '3 tbsp sofrito',
      '1 tbsp tomato purée',
      '6 pimiento-stuffed olives, chopped',
      '1/2 tsp ground cumin',
      '1/2 tsp salt',
      '# Dough',
      '400 g green bananas, peeled',
      '300 g yautía (taro), peeled',
      '3 tbsp annatto-infused oil',
      '1 tsp salt',
      '2 tbsp masa harina, optional',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Heat the 1 tbsp oil and cook the beef for 6 minutes. Add the sofrito, tomato purée, olives, cumin and salt and cook for 4 minutes until dry. Cool completely.',
      'Grate the bananas and yautía finely. Mix with the annatto oil, salt and masa harina to a smooth, sticky dough.',
      'With oiled hands, flatten 5 cm balls of dough, add a spoonful of picadillo and close the dough around it, shaping into 12 fat sausages.',
      'Heat the frying oil to 175°C. Fry the alcapurrias in 3 batches for 4 minutes, turning, until deep brown and crisp. Drain.'
    ],
    tips: [
      'Oil your hands to shape the dough.',
      'Cool the filling before using it.',
      'Do not overcrowd the oil.'
    ],
    pair: ['Hot sauce', 'Fresh lime', 'Cold beer', 'Coconut water'],
    store: 'Best eaten hot. Uncooked alcapurrias freeze for 1 month.',
    nut: [255, 5, 16, 19, 2, 4, 350]
  },

  'puerto-rican-tembleque': {
    d: 'A wobbly white pudding of coconut milk set with cornflour, topped with ground cinnamon, a Puerto Rican Christmas dessert.',
    meta: 'Puerto Rican tembleque: a wobbly white pudding of coconut milk set with cornflour, topped with ground cinnamon. Eight servings, chilled for 3 hours.',
    kw: ['puerto rican tembleque', 'tembleque', 'tembleque recipe', 'coconut pudding with cornstarch', 'coconut milk tembleque with cinnamon'],
    why: 'Tembleque means trembling, and it describes the way the pudding moves on the plate. It has only a handful of ingredients: coconut milk, cornflour, sugar and a pinch of salt. No eggs, no gelatine, no dairy. The set is due entirely to cornflour, and the right proportion produces a pudding that is firm enough to unmould and soft enough to melt on the tongue.\n\nStir 50 g of cornflour with 100 ml of cold coconut milk until it is lump-free. Heat the rest of the coconut milk with the sugar and salt until it begins to steam, then pour in the cornflour mixture and stir over a medium heat. **Stir constantly for about 8 minutes.** The mixture thickens suddenly, from thin liquid to heavy custard, and it will stick to the base if left.\n\nPour into a lightly oiled mould or individual ramekins, smooth the top, and cool before chilling. A pinch of ground anise or a strip of lime zest is sometimes added for fragrance.\n\nChill for at least 3 hours. Unmould by running a knife around the edge, placing a plate over the top, and inverting. Dust with cinnamon, or sprinkle with toasted coconut.',
    ing: [
      '800 ml coconut milk',
      '100 g caster sugar',
      '1/4 tsp salt',
      '50 g cornflour',
      '1 tsp ground cinnamon',
      '2 tbsp toasted coconut flakes'
    ],
    st: [
      'Mix the cornflour with 100 ml of the coconut milk until smooth.',
      'Heat the remaining coconut milk with the sugar and salt until steaming. Pour in the cornflour mixture and stir constantly over a medium heat for 8 minutes until very thick.',
      'Pour into a lightly oiled 1-litre mould or 8 ramekins and cool for 20 minutes, then chill for at least 3 hours.',
      'Run a knife around the edge, invert onto a plate and dust with the cinnamon and coconut flakes.'
    ],
    tips: [
      'Stir constantly while it thickens.',
      'Oil the mould lightly.',
      'Serve cold.'
    ],
    pair: ['Fresh fruit', 'Coquito', 'Coffee', 'Toasted coconut'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [267, 2, 22, 19, 1, 15, 90],
    rest: [200, 'Cooling and chilling']
  },

  'la-bandera-dominicana': {
    d: 'The Dominican lunch plate: white rice, stewed red beans and braised chicken with salad and fried plantain, the colours of the flag.',
    meta: 'La bandera dominicana: the Dominican lunch plate of white rice, stewed red beans, braised chicken, salad and fried plantain. Four servings, cooked for 60 minutes.',
    kw: ['la bandera dominicana', 'dominican la bandera', 'la bandera recipe', 'dominican rice beans and chicken', 'dominican flag meal'],
    why: 'Between noon and two o\'clock in the Dominican Republic, nearly everyone eats the same thing: rice, beans and meat. The plate is called La Bandera, the flag, because its parts are the same shape as the national flag, rice for the white cross, beans for the red, and meat and salad for the rest. It is simple, inexpensive and eaten in family kitchens and market stalls alike.\n\nThe beans are red kidney or habichuelas rojas, stewed with sofrito, pumpkin and tomato sauce until the liquid is thick and savoury. Tinned beans are an acceptable shortcut. Add a cube of pumpkin to the pot, and mash it against the side to thicken the sauce naturally. **Simmer the beans for at least 20 minutes after the pumpkin goes in.** It needs time to dissolve.\n\nThe chicken, pollo guisado, is browned with a sugar caramel for colour, then simmered in a tomato and onion sauce flavoured with oregano and vinegar for 30 minutes, until the sauce is rich and thick.\n\nServe on one plate: a mound of white rice, a ladle of beans over it, the chicken beside, a green salad of lettuce, tomato and avocado, and fried green plantain on the side.',
    ing: [
      '# Rice',
      '300 g long-grain rice',
      '500 ml water',
      '1 tsp salt',
      '1 tbsp vegetable oil',
      '# Beans',
      '1 tbsp vegetable oil',
      '3 tbsp sofrito',
      '1 tbsp tomato purée',
      '480 g tinned red kidney beans, drained',
      '100 g pumpkin, cubed',
      '300 ml water',
      '1 tsp salt',
      '# Chicken',
      '1 tbsp sugar',
      '3 tbsp vegetable oil',
      '1 kg chicken thighs on the bone, skinned',
      '1 onion, about 150 g, sliced',
      '3 garlic cloves, crushed',
      '1 tsp dried oregano',
      '2 tbsp tomato purée',
      '250 ml water',
      '1 tbsp white vinegar',
      '1 tsp salt'
    ],
    st: [
      'Cook the rice with the water, salt and oil in a covered pan for 15 minutes. Rest for 10 minutes.',
      'At the same time, make the beans: heat the oil and cook the sofrito and tomato purée for 2 minutes. Add the beans, pumpkin, water and salt and simmer for 25 minutes, mashing some beans and the pumpkin.',
      'Meanwhile, make the chicken: heat the sugar with 1 tbsp of the oil in a wide pot until dark amber. Add the chicken and the remaining oil and brown for 8 minutes.',
      'Add the onion, garlic, oregano and tomato purée for 3 minutes, then the water, vinegar and salt. Cover and simmer for 30 minutes.',
      'Serve the rice with the beans over it and the chicken on the side.'
    ],
    tips: [
      'Mash a little of the pumpkin to thicken the beans.',
      'Cook the sugar to dark amber, not black.',
      'Serve with a simple salad.'
    ],
    pair: ['Green salad', 'Fried plantain', 'Avocado', 'Fresh juice'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [882, 64, 89, 30, 10, 8, 2400]
  },

  'dominican-mangu': {
    d: 'Boiled green plantains mashed with butter and a little of their cooking water, topped with pickled red onions, a Dominican breakfast.',
    meta: 'Dominican mangú: boiled green plantains mashed with butter and cooking water, topped with pickled red onions. Four servings, cooked for 25 minutes.',
    kw: ['dominican mangu', 'mangu recipe', 'mangú dominicano', 'mashed plantains with pickled onions', 'mangu tres golpes'],
    why: 'Dominicans eat mangú every morning, and they eat it in a very particular way: with a mound of pickled red onions, a fried egg, fried cheese and fried salami, a combination called los tres golpes, the three hits. Mangú is mashed green plantain, smooth and slightly sweet, and it is thick and warm like mashed potato but with a flavour all its own.\n\nBuy green plantains, those with dark green skin and no yellow. Peel them under cold running water, which stops the sap staining. Cut into chunks, cover with water, add salt, and boil for 20 minutes until completely tender. **Keep about 250 ml of the cooking water.** It is added back to loosen the mash.\n\nDrain, return to the pot, and mash with a fork or masher while hot. Add butter and 4 tablespoons of the reserved water, beating until smooth and creamy. It should be soft enough to heap on a plate and thick enough to hold its shape.\n\nThe topping is essential. Slice red onions thin and cook them gently in oil with vinegar, salt and a pinch of oregano for 5 minutes, until pink and soft. Spoon over the mangú.',
    ing: [
      '4 green plantains, about 1 kg, peeled',
      '1 tsp salt',
      '40 g butter',
      '# Pickled onions',
      '1 tbsp vegetable oil',
      '2 red onions, about 300 g, thinly sliced',
      '3 tbsp white vinegar',
      '1/2 tsp salt',
      '1/2 tsp dried oregano',
      '# To serve',
      '4 eggs',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Cut the plantains into chunks, cover with water, add the 1 tsp salt and boil for 20 minutes until tender. Drain, keeping 250 ml of the water.',
      'Mash the plantains with the butter and about 4 tablespoons of the reserved water until smooth and creamy.',
      'Heat the 1 tbsp oil and cook the onions for 3 minutes. Add the vinegar, 1/2 tsp salt and oregano and cook for 2 minutes.',
      'Fry the eggs in the remaining oil. Serve the mangú topped with the onions and fried eggs.'
    ],
    tips: [
      'Mash while hot.',
      'Add the cooking water gradually.',
      'Serve with fried cheese and salami for the full tres golpes.'
    ],
    pair: ['Fried egg', 'Fried cheese', 'Dominican salami', 'Coffee'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [581, 10, 88, 21, 7, 41, 960]
  },

  'haitian-griot': {
    d: 'Cubes of pork shoulder marinated in sour orange, scotch bonnet and epis, simmered until tender and then browned until crisp at the edges.',
    meta: 'Haitian griot: cubes of pork shoulder marinated in sour orange, scotch bonnet and epis, simmered until tender and browned. Six servings, cooked for 75 minutes.',
    kw: ['haitian griot', 'griot recipe', 'griyo haitian pork', 'haitian fried pork with pikliz', 'epis marinated pork'],
    why: 'Pork is cooked twice in Haitian griot: first simmered until soft, then browned in hot fat until crisp. The first stage tenderises and cooks the marinade into the meat, the second stage gives the outside its crunch, and the result is meat that is juicy inside, caramelised outside and full of citrus and spice. It is the dish served at weddings and Sunday lunches, and it always comes with pikliz.\n\nThe marinade is epis, the green seasoning blend that is the backbone of Haitian cooking: spring onions, garlic, parsley, thyme, peppers and a splash of citrus, blended to a coarse paste. Add sour orange juice, or an equal mix of orange and lime. Cut the pork into 4 cm cubes, toss with the marinade and leave for at least 4 hours. **The longer the pork sits, the better the flavour.** Overnight is ideal.\n\nTransfer the pork and marinade to a pot with a little water and simmer, covered, for 60 minutes, until the liquid has nearly gone. Lift out the cubes and wipe off the excess marinade.\n\nFry them in oil at 180°C for about 5 minutes, until the surface turns dark brown and crisp. Serve with pikliz, fried plantains and rice with beans.',
    ing: [
      '1 kg pork shoulder, cut into 4 cm cubes',
      '# Epis marinade',
      '6 spring onions',
      '6 garlic cloves',
      '1 handful fresh parsley',
      '4 sprigs fresh thyme',
      '1 scotch bonnet chilli, deseeded',
      '1 onion, about 150 g, chopped',
      '100 ml orange juice',
      '50 ml lime juice',
      '1 1/2 tsp salt',
      '# To cook',
      '250 ml water',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Blend the spring onions, garlic, parsley, thyme, scotch bonnet, onion, orange juice, lime juice and salt to a coarse paste. Toss with the pork, cover and refrigerate for at least 4 hours, or overnight.',
      'Put the pork and marinade in a pot with the water. Cover and simmer for 60 minutes until tender and the liquid has nearly gone.',
      'Lift out the pork cubes and wipe off the excess marinade.',
      'Heat the oil to 180°C and fry the pork in batches for 5 minutes each until deep brown and crisp. Drain on kitchen paper.'
    ],
    tips: [
      'Wipe the cubes before frying to avoid spitting.',
      'Use less scotch bonnet for a milder dish.',
      'Serve with pikliz to cut the richness.'
    ],
    pair: ['Pikliz', 'Fried plantains', 'Rice and beans', 'Lime wedges'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [566, 31, 7, 46, 1, 3, 700],
    rest: [240, 'Marinating']
  },

  'haitian-pikliz': {
    d: 'A fiery relish of shredded cabbage, carrot and scotch bonnet pickled in vinegar and lime, served with fried meats.',
    meta: 'Haitian pikliz: a fiery relish of shredded cabbage, carrot and scotch bonnet pickled in vinegar and lime. Ten servings, pickled for 1 day.',
    kw: ['haitian pikliz', 'pikliz recipe', 'haitian pickled cabbage and scotch bonnet', 'pikliz slaw', 'spicy haitian relish'],
    why: 'Nothing on a Haitian plate cuts through fried pork like pikliz does. It is a pickled slaw, sharp, fiery and crunchy, kept in a jar on every table and eaten with griot, fried fish, plantains, and anything else that is rich. A forkful is hot first, and then it is tart, and then it is a relief.\n\nThe cabbage, carrots and onion are shredded fine and packed into a jar with whole scotch bonnet chillies, sliced thin. Add peppercorns, cloves and a few whole garlic cloves. Pour over a mix of white vinegar and lime juice, with a pinch of salt. **Wear gloves when slicing the scotch bonnets**, and keep your hands away from your eyes. The heat lingers on skin for hours.\n\nPress everything down so the vegetables are covered with liquid. Cover and leave in the fridge for at least 24 hours before eating. The vegetables soften slightly but stay crisp, and the heat spreads through the whole jar.\n\nPikliz improves for a week and keeps for a month. The longer it sits, the hotter it gets. Add a spoonful of the pickling liquid to rice and beans for a kick.',
    ing: [
      '1/4 white cabbage, about 250 g, finely shredded',
      '2 carrots, about 200 g, grated',
      '1 onion, about 150 g, thinly sliced',
      '2 scotch bonnet chillies, thinly sliced',
      '4 garlic cloves, whole',
      '2 g black peppercorns',
      '1 g cloves',
      '250 ml white vinegar',
      '4 tbsp lime juice',
      '1 tsp salt'
    ],
    st: [
      'Pack the cabbage, carrots, onion, scotch bonnets and garlic into a clean 1-litre jar. Add the peppercorns and cloves.',
      'Mix the vinegar, lime juice and salt and pour over until the vegetables are covered.',
      'Press down, seal and refrigerate for at least 24 hours before serving.'
    ],
    tips: [
      'Wear gloves for the chillies.',
      'Use a clean jar.',
      'Use less chilli for a milder pikliz.'
    ],
    pair: ['Griot', 'Fried fish', 'Plantains', 'Rice and beans'],
    store: 'Keeps in the fridge for 1 month.',
    nut: [28, 1, 6, 0, 2, 3, 260],
    rest: [1440, 'Pickling']
  },

  'diri-ak-djon-djon': {
    d: 'Haitian rice cooked in the inky black broth of dried djon djon mushrooms with butter, thyme and sometimes prawns or lima beans.',
    meta: 'Diri ak djon djon: Haitian rice cooked in the inky black broth of dried djon djon mushrooms with butter and thyme. Six servings, cooked for 45 minutes.',
    kw: ['diri ak djon djon', 'haitian black mushroom rice', 'djon djon rice recipe', 'haitian black rice with mushrooms', 'diri djon djon'],
    why: 'The mushrooms give it its colour, and they are impossible to substitute exactly. Djon djon are tiny black mushrooms found in northern Haiti, and when they are soaked in hot water they release a deep grey-black liquid with an earthy, woody flavour. The rice that cooks in this water turns black, scented and savoury, and the dish is served at parties and Sunday lunches.\n\nOutside Haiti the dried mushrooms are sold in Caribbean shops. If you cannot find them, dried shiitake mushrooms, soaked and used with their liquid, make a decent approximation, with slightly more brown than black. **Soak the mushrooms in boiling water for 20 minutes** and strain the liquid through a fine sieve to catch grit.\n\nThe rice is cooked like pilaf. Fry onion, garlic, thyme, a scotch bonnet (whole, to give flavour without heat) and a spoonful of butter. Add the rice, stir for a minute, and add the mushroom liquid, salt and a bay leaf. The liquid needs to be 1.5 times the volume of rice.\n\nCover tightly and cook on the lowest heat for 20 minutes. Fold in lima beans or sautéed prawns, if you like, and the soaked mushrooms. Rest for 5 minutes.',
    ing: [
      '30 g dried djon djon mushrooms or dried shiitake',
      '700 ml boiling water',
      '3 tbsp butter',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '4 sprigs fresh thyme',
      '1 scotch bonnet chilli, whole',
      '400 g long-grain rice, rinsed',
      '1 bay leaf',
      '1 1/2 tsp salt',
      '200 g cooked lima beans or butter beans'
    ],
    st: [
      'Soak the mushrooms in the boiling water for 20 minutes. Strain through a fine sieve, keeping 650 ml of the liquid and the mushrooms.',
      'Melt the butter and cook the onion, garlic, thyme and scotch bonnet for 5 minutes.',
      'Add the rice and stir for 1 minute. Pour in the mushroom liquid, add the bay leaf and salt, and bring to a boil.',
      'Cover tightly and cook on the lowest heat for 20 minutes. Fold in the mushrooms and beans and rest for 5 minutes. Remove the scotch bonnet and bay leaf.'
    ],
    tips: [
      'Strain the soaking liquid well.',
      'Keep the scotch bonnet whole.',
      'Serve with griot or fried fish.'
    ],
    pair: ['Griot', 'Fried plantains', 'Pikliz', 'Stewed fish'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [334, 8, 62, 6, 3, 1, 700]
  },

  'jamaican-curry-chicken': {
    d: 'Chicken marinated and simmered in a Jamaican curry sauce of curry powder, thyme, allspice and scotch bonnet with potatoes.',
    meta: 'Jamaican curry chicken: chicken simmered in a curry sauce of curry powder, thyme, allspice and scotch bonnet with potatoes. Four servings, cooked for 45 minutes.',
    kw: ['jamaican curry chicken', 'jamaican curry chicken recipe', 'caribbean curry chicken with potatoes', 'curry chicken jamaican style', 'jamaican curry with allspice'],
    why: 'Jamaican curry powder is not Indian curry powder, and the difference is allspice. The Jamaican blend uses plenty of turmeric for colour, with coriander, cumin, fenugreek and a significant amount of ground pimento (allspice), which gives it an unmistakably Caribbean warmth. Buy a Jamaican brand if you can, since the standard supermarket curry powder will not taste the same.\n\nThe chicken is marinated with a few spoonfuls of the curry powder, thyme, garlic, spring onion and salt for at least an hour. Chicken thighs on the bone give the best flavour and stay juicy. Brown them in a little oil, then set aside. **Fry the rest of the curry powder in the pot oil for a minute before adding liquid.** It removes the raw taste of the spices.\n\nCook onion, garlic, a whole scotch bonnet and fresh thyme in the same pot, add the chicken back, and cover with water or coconut milk. Add the potatoes, cut into chunks. Cover and simmer for 35 minutes. The potatoes thicken the sauce as they soften.\n\nLeave the scotch bonnet whole, so it gives its perfume but not its fire. Serve with rice and peas, fried plantain and a cabbage salad.',
    ing: [
      '1 kg chicken thighs on the bone, skinned',
      '3 tbsp Jamaican curry powder',
      '4 sprigs fresh thyme',
      '3 garlic cloves, crushed',
      '2 spring onions, chopped',
      '1 1/2 tsp salt',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 scotch bonnet chilli, whole',
      '400 g potatoes, cut into 3 cm chunks',
      '500 ml water'
    ],
    st: [
      'Mix the chicken with 2 tbsp of the curry powder, the thyme, garlic, spring onions and salt. Cover and leave for 1 hour.',
      'Heat the oil in a heavy pot and brown the chicken for 8 minutes. Remove.',
      'Add the onion and cook for 4 minutes. Add the remaining curry powder and cook for 1 minute.',
      'Return the chicken, add the scotch bonnet, potatoes and water. Cover and simmer for 35 minutes until the chicken and potatoes are tender and the sauce is thick.',
      'Remove the scotch bonnet before serving.'
    ],
    tips: [
      'Keep the scotch bonnet whole.',
      'Use a Jamaican curry powder.',
      'Add a splash of coconut milk for richness.'
    ],
    pair: ['Rice and peas', 'Fried plantain', 'Roti', 'Cabbage salad'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [510, 53, 25, 22, 5, 3, 1120],
    rest: [60, 'Marinating']
  },

  'jamaican-brown-stew-chicken': {
    d: 'Chicken seasoned and browned in caramelised sugar, then stewed with onions, tomatoes, carrots and thyme in a dark, glossy gravy.',
    meta: 'Jamaican brown stew chicken: chicken seasoned and browned in caramelised sugar, then stewed with onions, tomatoes and thyme. Four servings, cooked for 50 minutes.',
    kw: ['jamaican brown stew chicken', 'brown stew chicken recipe', 'jamaican brown stew chicken with carrots', 'caribbean brown stew chicken', 'brown stew chicken with browning'],
    why: 'The colour is from caramel, not from the soy sauce or gravy browning that cooks reach for. The authentic technique is to heat sugar in a dry pan until it melts and darkens to the colour of coffee, then stir in the seasoned chicken. The sugar clings to the meat and gives it a deep, rich brown colour and a faint bitterness that is the heart of the dish.\n\nThe chicken is marinated first with onion, garlic, thyme, allspice, black pepper, salt and a dash of soy sauce for at least 1 hour. It is then ready to go into the pot. Heat a heavy pot with 2 tablespoons of sugar and let it melt, without stirring, until it foams and turns dark brown, about 4 minutes. **Add the chicken as soon as the sugar is a deep mahogany**, and stand back: it spits.\n\nStir for 5 minutes until the chicken is coated and browned. Add onion, tomato, carrot, a whole scotch bonnet and a spoonful of ketchup, then water to half-cover the meat. Cover and simmer for 30 minutes.\n\nThe gravy should be rich and coat a spoon. Serve with rice and peas.',
    ing: [
      '1 kg chicken thighs on the bone, skinned',
      '1 onion, about 150 g, chopped',
      '4 garlic cloves, crushed',
      '4 sprigs fresh thyme',
      '1 tsp ground allspice',
      '1/2 tsp ground black pepper',
      '1 tsp salt',
      '1 tbsp soy sauce',
      '2 tbsp brown sugar',
      '2 tbsp vegetable oil',
      '2 tomatoes, about 200 g, chopped',
      '2 carrots, about 200 g, sliced',
      '1 scotch bonnet chilli, whole',
      '1 tbsp tomato ketchup',
      '400 ml water'
    ],
    st: [
      'Mix the chicken with the onion, garlic, thyme, allspice, pepper, salt and soy sauce. Cover and leave for 1 hour.',
      'Heat the sugar and oil in a heavy pot until the sugar melts, foams and turns dark brown, about 4 minutes.',
      'Add the chicken and stir for 5 minutes until browned and coated. Add the tomatoes, carrots, scotch bonnet, ketchup and water.',
      'Cover and simmer for 30 minutes until the chicken is tender and the gravy is thick. Remove the scotch bonnet.'
    ],
    tips: [
      'Stand back when adding the chicken to the caramel.',
      'Do not burn the sugar.',
      'Keep the scotch bonnet whole.'
    ],
    pair: ['Rice and peas', 'Fried plantain', 'Steamed cabbage', 'Festival'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [446, 51, 20, 18, 3, 13, 1110],
    rest: [60, 'Marinating']
  },

  'jamaican-festival': {
    d: 'Slender, lightly sweet cornmeal dumplings cooked until golden, crisp outside and soft inside, served with jerk and fried fish.',
    meta: 'Jamaican festival: slender, lightly sweet cornmeal dumplings cooked until golden and crisp outside. Eight servings, cooked for 15 minutes.',
    kw: ['jamaican festival', 'festival dumplings', 'jamaican festival recipe', 'sweet cornmeal dumplings', 'festival with jerk chicken'],
    why: 'They are sweet bread sticks, and they go with the most savoury food in the Caribbean. Festival is the side that arrives with jerk chicken, jerk pork and fried fish at every Jamaican roadside stall: elongated, golden dumplings with a touch of sugar, a crisp skin and a soft, close crumb. The sweetness is a counterpoint to the heat of the jerk.\n\nThe dough is plain flour, fine cornmeal, sugar, baking powder, a pinch of salt and a little nutmeg or cinnamon, mixed with a spoonful of butter and enough milk or water to make a soft dough. It should be smooth and slightly sticky, a bit softer than a bread dough. **Rest the dough for 20 minutes** before shaping, which lets the cornmeal soften.\n\nDivide it into 8 pieces and roll each into a log about 12 cm long and 2 cm thick, with tapered ends. Wetting the hands helps with the shaping.\n\nCook in oil at 175°C, in batches of three or four, for about 4 minutes, turning, until golden. They puff slightly and darken. Drain on kitchen paper and serve straight away, hot, with plenty of black pepper on your jerk.',
    ing: [
      '200 g plain flour',
      '100 g fine cornmeal',
      '3 tbsp caster sugar',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '1/4 tsp ground nutmeg',
      '30 g butter, softened',
      '150 ml milk',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, cornmeal, sugar, baking powder, salt and nutmeg. Rub in the butter.',
      'Add the milk gradually and knead to a soft dough. Rest for 20 minutes.',
      'Divide into 8 pieces and roll each into a log 12 cm long with tapered ends.',
      'Heat the oil to 175°C. Fry in batches for 4 minutes, turning, until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Rest the dough before shaping.',
      'Keep the oil at 175°C.',
      'Serve hot.'
    ],
    pair: ['Jerk chicken', 'Fried fish', 'Escovitch fish', 'Ginger beer'],
    store: 'Best eaten warm. Keeps for 1 day and reheats in a hot oven.',
    nut: [350, 4, 34, 22, 2, 6, 220]
  },

  'jamaican-fry-dumplings': {
    d: 'Round flat dumplings of plain flour dough, shallow-fried until golden and eaten with saltfish and ackee or for breakfast.',
    meta: 'Jamaican fry dumplings: round flat dumplings of plain flour dough, shallow-fried until golden, for breakfast with saltfish. Six servings, cooked for 15 minutes.',
    kw: ['jamaican fry dumplings', 'fried dumplings jamaican', 'johnny cakes jamaican', 'jamaican dumplings recipe', 'fry dumplings with saltfish'],
    why: 'The most basic bread in Jamaica takes five minutes to mix and ten to cook, and is served for breakfast on the same plate as ackee and saltfish. Fry dumplings, sometimes called Johnny cakes, are made from flour, baking powder, salt and water, shaped by hand into rounds, and cooked in a shallow pan of oil.\n\nThe dough should be firm and smooth, a little firmer than for biscuits. Rub a tablespoon of butter or shortening into the flour for a more tender crumb, then add cold water a spoonful at a time. **Knead for just 1 minute.** A well-worked dough turns tough.\n\nDivide into 6 balls and flatten each by hand to a disc about 8 cm across and 1 cm thick. Prick the surface once with a fork to stop the dumplings puffing too much. Rest for 10 minutes.\n\nHeat 1 cm of oil in a frying pan over a medium heat. Slide in the dumplings and cook for 3 to 4 minutes on each side, until deep golden brown. Drain on kitchen paper and serve hot with butter, or split open and filled with scrambled egg, cheese or saltfish. Thin ones are crisp; thicker ones stay soft.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1 tsp salt',
      '1 tbsp butter or vegetable shortening',
      '150 ml cold water',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, baking powder and salt. Rub in the butter.',
      'Add the water gradually and knead for 1 minute to a smooth dough. Divide into 6 balls and flatten each to a disc 8 cm across.',
      'Prick each with a fork. Rest for 10 minutes.',
      'Heat the oil in a frying pan over a medium heat. Cook the dumplings for 3 to 4 minutes on each side until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Do not overwork the dough.',
      'Keep the oil at medium heat.',
      'Serve hot, split and buttered.'
    ],
    pair: ['Ackee and saltfish', 'Scrambled eggs', 'Butter', 'Jamaican hot chocolate'],
    store: 'Best eaten warm. Keeps for 1 day.',
    nut: [406, 5, 38, 26, 2, 0, 560]
  },

  'jamaican-bun-and-cheese': {
    d: 'A dense, dark Easter spice bun of molasses, raisins and mixed spice, sliced and eaten with a wedge of processed cheese.',
    meta: 'Jamaican bun and cheese: a dense, dark Easter spice bun of molasses, raisins and mixed spice, eaten with processed cheese. Ten servings, baked for 45 minutes.',
    kw: ['jamaican bun and cheese', 'jamaican easter bun', 'jamaican spice bun recipe', 'bun and cheese easter', 'jamaican bun with raisins and molasses'],
    why: 'At Easter, every Jamaican bakery and supermarket sells out of spice bun, and the question is always the same: which cheese. The traditional pairing is bun with a slice of processed cheese, bright orange, plain and unashamedly soft. The salty cheese against the sweet, spiced loaf is what makes it, and anyone who tries it finds that it works.\n\nThe bun is a dense, moist loaf coloured almost black by molasses and browning. Beyond the molasses, it has raisins, currants, mixed peel, cinnamon, nutmeg, allspice and a splash of stout or Guinness. It is nearer to a fruit cake than a bun. Soak the dried fruit overnight in stout or in rum if you like. **Mix the batter just until combined.** It is a heavy batter, and over-mixing makes a tough crumb.\n\nThe yeast makes it rise: a spoonful in warm milk, left for 10 minutes until foamy, and the dough is left to rise for 1 hour. In many bakeries the bun is made without yeast, with baking powder.\n\nBake in a loaf tin at 170°C for 45 minutes. The top should be dark, glossy and cracked. Cool, brush with sugar syrup and slice thickly. Serve with cheese.',
    ing: [
      '300 g plain flour',
      '1 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp ground allspice',
      '1/4 tsp salt',
      '120 g dark brown sugar',
      '3 tbsp molasses',
      '100 g butter, melted',
      '1 egg',
      '150 ml stout',
      '150 g raisins',
      '50 g currants',
      '30 g mixed peel',
      '2 tbsp sugar syrup, for brushing',
      '200 g processed cheese slices, to serve'
    ],
    st: [
      'Heat the oven to 170°C (150°C fan) and line a 900 g loaf tin.',
      'Mix the flour, baking powder, spices and salt.',
      'Whisk the sugar, molasses, butter, egg and stout. Stir into the dry mixture until just combined, then fold in the raisins, currants and peel.',
      'Pour into the tin and bake for 45 minutes until a skewer comes out clean.',
      'Brush with the syrup and cool in the tin. Slice thickly and serve with the cheese.'
    ],
    tips: [
      'Soak the fruit in stout for extra flavour.',
      'Do not overmix.',
      'Serve with a mild processed or cheddar cheese.'
    ],
    pair: ['Processed cheese', 'Butter', 'Hot tea', 'Ginger beer'],
    store: 'Keeps wrapped for 1 week or freezes for up to 2 months.',
    nut: [398, 8, 60, 14, 2, 33, 390]
  },

  'jamaican-rum-cake': {
    untimed: ['cooling the fruit'],
    rest: [1440, 'resting before slicing'],
    d: 'A dense Christmas cake of dried fruit soaked in rum and wine, baked, then drenched in rum syrup while still warm.',
    meta: 'Jamaican rum cake: a dense Christmas cake of dried fruit soaked in rum and wine, baked and drenched in rum syrup. Twelve servings, baked for 60 minutes.',
    kw: ['jamaican rum cake', 'jamaican black cake', 'jamaican rum cake recipe', 'caribbean christmas rum cake', 'rum soaked fruit cake'],
    why: 'It tastes of rum, port and burnt sugar, and it is deliberately dark. The Jamaican Christmas cake, also called black cake, starts with dried fruit chopped finely and soaked for weeks in white rum and port wine. The fruit is then puréed into a dark paste, giving the cake its colour, its moisture and its deep flavour.\n\nA full recipe requires a three-week soak, but a fast one can be made by simmering the fruit with the rum and wine for 15 minutes, then leaving it overnight. **Blend the soaked fruit to a rough purée.** It disperses through the batter and gives the cake its dense, even crumb.\n\nThe batter is built on butter and brown sugar creamed for 5 minutes, with eggs, flour, baking powder, mixed spice and a spoonful of burnt sugar syrup (browning) for colour. Fold in the fruit purée and a splash of rum.\n\nBake in a lined tin at 160°C for 1 hour, until a skewer comes out clean. Pierce the top while warm and brush generously with rum. Wrap tightly and leave for a day or two before cutting; the flavour deepens.',
    ing: [
      '# Fruit',
      '250 g raisins',
      '150 g currants',
      '100 g glacé cherries',
      '100 g mixed peel',
      '150 ml white rum',
      '100 ml port wine',
      '# Cake',
      '200 g butter, softened',
      '200 g dark brown sugar',
      '4 eggs',
      '250 g plain flour',
      '1 tsp baking powder',
      '2 tsp mixed spice',
      '2 tbsp burnt sugar syrup (browning)',
      '1 tsp vanilla extract',
      '# To finish',
      '4 tbsp white rum'
    ],
    st: [
      'Simmer the raisins, currants, cherries and peel with the 150 ml rum and the port for 15 minutes. Cool, then blend to a rough purée.',
      'Heat the oven to 160°C (140°C fan) and line a 20 cm round tin.',
      'Beat the butter and sugar for 5 minutes until pale. Beat in the eggs one at a time.',
      'Fold in the flour, baking powder and mixed spice, then the fruit purée, browning and vanilla.',
      'Bake for 60 minutes until a skewer comes out clean. Prick the top and brush with the 4 tbsp rum. Cool, wrap and leave for a day before slicing.'
    ],
    tips: [
      'Line the tin well.',
      'Cover with foil if the top darkens too fast.',
      'The cake improves over several days.'
    ],
    pair: ['Hot tea', 'Coffee', 'Sorrel drink', 'Brandy butter'],
    store: 'Keeps wrapped for 2 weeks or freezes for up to 3 months.',
    nut: [456, 5, 73, 16, 3, 51, 80]
  },

  'gungo-peas-soup': {
    d: 'A thick Jamaican soup of pigeon peas, salted meat, pumpkin, yam and spinners, flavoured with thyme, scallion and scotch bonnet.',
    meta: 'Gungo peas soup: a thick Jamaican soup of pigeon peas, salted meat, pumpkin, yam and dumplings with thyme and scotch bonnet. Six servings, cooked for 60 minutes.',
    kw: ['gungo peas soup', 'jamaican gungo peas soup', 'pigeon pea soup jamaican', 'gungo peas soup recipe', 'jamaican soup with spinners'],
    why: 'Gungo peas, or pigeon peas, are a Christmas crop in Jamaica, and a pot of soup made with them is a December tradition. The peas are nutty and earthy, a little like chickpeas, and the soup is thickened with pumpkin and yam into a heavy, comforting pot. It is a meal in a bowl, and it feeds a family for two days.\n\nThe flavour comes from salted pig tail or beef, soaked overnight to remove some of the salt, and then simmered with the peas for 40 minutes. In the UK, a smoked ham hock does the same job. Aromatics are spring onions, thyme and a whole scotch bonnet, which adds fruity heat without too much fire. **Keep the scotch bonnet whole.** If it bursts, the soup becomes very hot.\n\nWhen the peas are tender, add cubes of pumpkin, yam and carrot and simmer for 15 minutes. The pumpkin dissolves and thickens the broth. Stir in coconut milk if you wish.\n\nThe finishing touch is spinners, small dumplings of flour and water rolled between the palms into thin tapers. Drop them in for the last 10 minutes. They turn the soup chewy and filling. Season with salt, black pepper and a dash of allspice.',
    ing: [
      '200 g dried pigeon peas, soaked overnight, or 2 x 400 g tins',
      '300 g smoked ham hock or salted pork',
      '2 litres water',
      '4 spring onions, chopped',
      '4 sprigs fresh thyme',
      '1 scotch bonnet chilli, whole',
      '300 g pumpkin, cubed',
      '300 g yam, peeled and cubed',
      '2 carrots, about 200 g, sliced',
      '150 g plain flour, for spinners',
      '80 ml water, for spinners',
      '1/2 tsp ground allspice',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Put the peas, ham hock, 2 litres water, spring onions, thyme and scotch bonnet in a large pot. Bring to a boil and simmer for 40 minutes.',
      'Add the pumpkin, yam and carrots and simmer for 15 minutes.',
      'Mix the flour with the 80 ml water to a firm dough. Roll small pieces between your palms into spinners.',
      'Drop the spinners into the soup and simmer for 10 minutes.',
      'Remove the scotch bonnet and thyme stalks. Stir in the allspice, salt and pepper and serve.'
    ],
    tips: [
      'Soak the peas overnight.',
      'Leave the scotch bonnet whole.',
      'The soup thickens as it stands.'
    ],
    pair: ['Hard dough bread', 'Hot sauce', 'Fried dumplings', 'Ginger beer'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [306, 16, 47, 6, 7, 6, 930],
    rest: [480, 'Soaking the peas']
  },

  'jamaican-pepper-pot-soup': {
    d: 'A thick Jamaican soup of callaloo, okra, salted meat, yam and coconut milk, seasoned with thyme, pimento and scotch bonnet.',
    meta: 'Jamaican pepper pot soup: a thick soup of callaloo, okra, salted meat, yam and coconut milk with thyme and scotch bonnet. Six servings, cooked for 60 minutes.',
    kw: ['jamaican pepper pot soup', 'pepper pot soup', 'jamaican callaloo soup', 'pepper pot soup recipe', 'callaloo and okra soup'],
    why: 'It is a green soup with a name that has nothing to do with pepper, and a mild one at that. The name Pepper Pot belongs to a family of Caribbean stews of greens, meat and root vegetables, and in Jamaica, the green is callaloo, a leafy plant whose leaves are cooked down to a soft, silky mass with okra and coconut milk.\n\nCanned callaloo is the practical choice outside the Caribbean, and works well when drained. Fresh spinach with a handful of kale is a good substitute. Cook the salted meat first, pig tail or ham hock, soaked overnight, in water for 40 minutes, until just tender. **Skim the surface as the meat cooks.** It clears the broth.\n\nAdd yam and sweet potato, cut into cubes, and simmer for 15 minutes. Then add the callaloo, sliced okra, spring onions, thyme and a whole scotch bonnet. Cook for 15 minutes, until the vegetables are soft. Pour in the coconut milk, bring to a gentle simmer, and add allspice, salt and pepper.\n\nThe soup should be thick, rich and green. Remove the scotch bonnet and serve hot with bread or dumplings.',
    ing: [
      '300 g smoked ham hock or salted pork',
      '1.5 litres water',
      '300 g yam, peeled and cubed',
      '200 g sweet potato, peeled and cubed',
      '500 g tinned callaloo, drained, or spinach and kale',
      '150 g okra, sliced',
      '4 spring onions, chopped',
      '4 sprigs fresh thyme',
      '1 scotch bonnet chilli, whole',
      '400 ml coconut milk',
      '1/2 tsp ground allspice',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Simmer the ham hock in the water for 40 minutes, skimming the surface.',
      'Add the yam and sweet potato and simmer for 15 minutes.',
      'Add the callaloo, okra, spring onions, thyme and scotch bonnet and simmer for 15 minutes.',
      'Stir in the coconut milk, allspice, salt and pepper and simmer gently for 5 minutes. Remove the scotch bonnet and thyme stalks.'
    ],
    tips: [
      'Soak salted meat overnight.',
      'Do not burst the scotch bonnet.',
      'Serve with dumplings.'
    ],
    pair: ['Fried dumplings', 'Bread', 'Rice', 'Ginger beer'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [333, 16, 29, 17, 6, 4, 1000]
  },

  'jamaican-red-pea-soup': {
    d: 'A rich Jamaican soup of red kidney beans, salted meat, yam, coconut milk and flour dumplings, a Saturday tradition.',
    meta: 'Jamaican red pea soup: a rich soup of red kidney beans, salted meat, yam, coconut milk and flour dumplings. Six servings, cooked for 90 minutes.',
    kw: ['jamaican red pea soup', 'red pea soup', 'jamaican kidney bean soup', 'red pea soup with dumplings', 'saturday soup jamaica'],
    why: 'It is Saturday soup in Jamaica, simmered all afternoon and eaten in the evening. Red peas, which are what Jamaicans call kidney beans, make a rich, red-brown broth thickened with coconut milk and mashed beans, and full of the flavour of salted pig tail or beef.\n\nThe beans cook first. Soak dried kidney beans overnight and boil them hard for 10 minutes to destroy the toxins, then simmer with the salted meat for 1 hour, until the beans are soft. **Never skip the 10-minute hard boil**, because undercooked kidney beans are harmful. Tinned beans are already safe and can go in later.\n\nAdd coconut milk, spring onion, thyme, garlic, a whole scotch bonnet and pimento berries. Cubes of yam and carrot go in for the last 20 minutes. Mash a few beans against the pot to thicken the soup.\n\nThe spinners and chunks of dumpling are added for the final 10 minutes. They are made from flour, a pinch of salt and water, formed into thin ropes and rolled into balls. The soup is ready when it is thick and the dumplings are tender. Remove the scotch bonnet before serving.',
    ing: [
      '250 g dried red kidney beans, soaked overnight and drained',
      '300 g smoked ham hock or salted beef',
      '2 litres water',
      '400 ml coconut milk',
      '4 spring onions, chopped',
      '4 sprigs fresh thyme',
      '4 garlic cloves, crushed',
      '1 scotch bonnet chilli, whole',
      '2 g pimento berries (allspice)',
      '300 g yam, peeled and cubed',
      '2 carrots, about 200 g, sliced',
      '150 g plain flour',
      '80 ml water',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Boil the kidney beans hard in fresh water for 10 minutes, then drain.',
      'Put the beans, ham hock and 2 litres water in a large pot with the spring onions, thyme, garlic, scotch bonnet and pimento. Simmer for 1 hour.',
      'Add the coconut milk, yam and carrots and simmer for 20 minutes. Mash a few beans against the pot.',
      'Mix the flour with the 80 ml water and a pinch of salt, roll into small dumplings and add to the soup. Simmer for 10 minutes.',
      'Remove the scotch bonnet. Season with salt and pepper.'
    ],
    tips: [
      'Always boil dried kidney beans hard for 10 minutes.',
      'Mash some beans to thicken.',
      'Leave the scotch bonnet whole.'
    ],
    pair: ['Hard dough bread', 'Hot sauce', 'Ginger beer', 'Fried plantain'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [409, 18, 46, 17, 7, 4, 1060],
    rest: [480, 'Soaking the beans']
  },

  'dhalpuri-roti': {
    d: 'Soft Trinidadian flatbreads filled with a layer of ground, spiced split peas, cooked on a griddle and served with curry.',
    meta: 'Dhalpuri roti: soft Trinidadian flatbreads filled with a layer of ground, spiced split peas, cooked on a griddle. Makes six, cooked for 25 minutes.',
    kw: ['dhalpuri roti', 'dhalpuri recipe', 'trinidad dhal puri', 'trinidadian roti with split peas', 'dhal puri roti with curry'],
    why: 'It is the roti that wraps the curry in Trinidad, and the filling is the reason. Dhalpuri is a thin flatbread filled with a dry paste of ground yellow split peas, seasoned with cumin and garlic, then rolled out and cooked on a hot tawa. It is soft, pliable and slightly nutty, the way a roti should be, and the filling adds a savoury interest of its own.\n\nThe dough is flour, baking powder, salt and a spoonful of oil, kneaded with warm water until smooth and soft, then rested under a damp cloth for 30 minutes. For the filling, boil 200 g of yellow split peas in water with turmeric until just tender, about 25 minutes, drain thoroughly and grind with roasted cumin, garlic and salt to a coarse crumb. **The filling must be as dry as possible.** A damp filling tears the dough.\n\nDivide the dough into 6 balls. Flatten each, put a spoonful of filling in the centre, pinch the edges closed and flatten again. Roll gently to 20 cm without letting the filling break through.\n\nCook on a hot dry tawa for 1 minute on one side, flip, brush with oil, and cook for 1 minute more. Clap the roti between your hands to loosen the layers. Wrap in a cloth to keep warm.',
    ing: [
      '# Dough',
      '350 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '180 ml warm water',
      '# Filling',
      '200 g yellow split peas',
      '1/2 tsp ground turmeric',
      '700 ml water',
      '2 tsp ground roasted cumin',
      '2 garlic cloves, crushed',
      '1 tsp salt',
      '3 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Knead the flour, baking powder, salt, 1 tbsp oil and warm water into a smooth dough. Cover and rest for 30 minutes.',
      'Boil the split peas with the turmeric in the water for 25 minutes until just tender. Drain thoroughly and grind with the cumin, garlic and salt to a coarse dry crumb.',
      'Divide the dough into 6 balls. Flatten each, add 2 tablespoons of filling, pinch closed and flatten again. Roll gently to 20 cm.',
      'Cook on a hot dry griddle for 1 minute on one side. Flip, brush with oil and cook for 1 minute more. Clap between your hands and wrap in a cloth.'
    ],
    tips: [
      'Dry the split peas thoroughly after boiling.',
      'Roll gently so the filling does not break through.',
      'Keep wrapped to stay soft.'
    ],
    pair: ['Curry chicken', 'Channa and aloo', 'Pumpkin curry', 'Pepper sauce'],
    store: 'Best eaten fresh. Keeps wrapped for 1 day and reheats on a griddle.',
    nut: [406, 14, 65, 10, 11, 3, 680]
  },

  'trinidadian-pelau': {
    d: 'Chicken browned in caramelised sugar and cooked with rice, pigeon peas, carrots and coconut milk into a one-pot Sunday dish.',
    meta: 'Trinidadian pelau: chicken browned in caramelised sugar and cooked with rice, pigeon peas, carrots and coconut milk. Six servings, cooked for 45 minutes.',
    kw: ['trinidadian pelau', 'pelau recipe', 'trinidad chicken pelau', 'caribbean pelau with pigeon peas', 'caramelised chicken and rice trinidad'],
    why: 'Pelau is the dish that appears at lunches, fetes and church events in Trinidad, because it feeds a crowd from a single pot. The meat is browned in caramel, the rice cooks in the same pot with coconut milk and pigeon peas, and everything ends up the colour of toffee and tastes of thyme and burnt sugar.\n\nThe key is the browning. Heat 3 tablespoons of sugar with a little oil in a heavy pot until it melts, bubbles and turns dark amber, 3 to 4 minutes. Add the seasoned chicken at once, stand back from the spitting, and stir to coat. **The sugar must be dark, but not black.** Black is bitter.\n\nThe chicken is marinated beforehand in green seasoning, a blend of culantro (chadon beni), spring onion, thyme, garlic and pepper, with salt. Add carrots, a whole scotch bonnet and tinned pigeon peas, then the washed rice, and pour in coconut milk and stock to cover by 1 cm.\n\nCover tightly, bring to a boil, then cook on the lowest heat for 25 minutes, without lifting the lid. The rice should be tender and separate, with each grain tinted brown. Fluff and serve with coleslaw.',
    ing: [
      '1 kg chicken thighs on the bone, skinned',
      '3 tbsp green seasoning',
      '1 tsp salt',
      '3 tbsp brown sugar',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 garlic cloves, crushed',
      '2 carrots, about 200 g, diced',
      '1 scotch bonnet chilli, whole',
      '400 g tinned pigeon peas, drained',
      '400 g long-grain rice, rinsed',
      '400 ml coconut milk',
      '350 ml chicken stock',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Mix the chicken with the green seasoning and salt and leave for 30 minutes.',
      'Heat the sugar and oil in a heavy pot until it melts and turns dark amber, 3 to 4 minutes. Add the chicken and stir for 8 minutes until browned.',
      'Add the onion, garlic and carrots and cook for 3 minutes. Stir in the scotch bonnet, pigeon peas and rice for 1 minute.',
      'Pour in the coconut milk and stock, bring to a boil, cover tightly and cook on the lowest heat for 25 minutes. Rest for 5 minutes.',
      'Remove the scotch bonnet, fluff, and scatter with the coriander.'
    ],
    tips: [
      'Do not lift the lid during cooking.',
      'Stand back when adding chicken to the sugar.',
      'Serve with coleslaw.'
    ],
    pair: ['Coleslaw', 'Fried plantain', 'Pepper sauce', 'Sorrel drink'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [735, 44, 79, 27, 6, 15, 780]
  },

  'trinidadian-curry-duck': {
    d: 'Duck pieces marinated in green seasoning and cooked slowly in a rich curry of Trinidad curry powder, garlic and culantro.',
    meta: 'Trinidadian curry duck: duck pieces marinated in green seasoning and cooked slowly in a rich curry with garlic and culantro. Six servings, cooked for 75 minutes.',
    kw: ['trinidadian curry duck', 'curry duck recipe', 'trinidad curry duck', 'caribbean duck curry', 'curry duck with chadon beni'],
    why: 'Trinidadians cook duck on special occasions, usually curried, and always in a way that uses the fat. Curry duck is rich, aromatic and a little oily, in a good way. The duck is cut into pieces, bone-in, marinated overnight, and slow-cooked until tender in a thick sauce.\n\nThe Trinidad curry powder is sold in Caribbean shops, and is made from turmeric, coriander, cumin, mustard seed and fenugreek, sometimes with a hint of chilli. For the marinade, it is combined with green seasoning, garlic, thyme and salt. **Marinate the duck for at least 4 hours, ideally overnight.** The duck is fatty and needs the flavour to go all the way through.\n\nIn the pot, make a paste of curry powder and water, called burning the curry, and fry it in hot oil for a minute until it darkens and smells toasty. Add the duck and cook it in the paste for 10 minutes, to brown. Then add water, garlic, onion and a scotch bonnet and simmer, covered, for 45 minutes.\n\nSkim the fat from the surface as it rises. Add potatoes, if you like, for the final 20 minutes, and cook uncovered until the sauce is thick.',
    ing: [
      '1.2 kg duck, cut into 8 pieces, skinned if you like',
      '3 tbsp green seasoning',
      '3 garlic cloves, crushed',
      '1 tsp salt',
      '3 tbsp Trinidad curry powder',
      '4 tbsp water',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 scotch bonnet chilli, whole',
      '500 ml water',
      '400 g potatoes, cut into chunks',
      '2 tbsp chopped fresh culantro or coriander'
    ],
    st: [
      'Mix the duck with the green seasoning, garlic and salt. Cover and refrigerate for at least 4 hours.',
      'Mix the curry powder with the 4 tbsp water to a paste. Heat the oil in a heavy pot and fry the paste for 1 minute until dark.',
      'Add the duck and brown for 10 minutes. Add the onion, scotch bonnet and 500 ml water. Cover and simmer for 45 minutes, skimming off excess fat.',
      'Add the potatoes and simmer uncovered for 20 minutes until the sauce is thick. Scatter with the culantro.'
    ],
    tips: [
      'Skim the fat during cooking.',
      'Leave the scotch bonnet whole.',
      'Serve with roti or rice.'
    ],
    pair: ['Dhalpuri roti', 'Rice', 'Pumpkin choka', 'Pepper sauce'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [771, 34, 17, 63, 3, 2, 540],
    rest: [240, 'Marinating']
  },

  'aloo-pie': {
    untimed: ['cooling completely'],
    d: 'A soft yeasted dough pocket filled with spiced mashed potato and cooked until puffed and golden, a Trinidadian street snack.',
    meta: 'Aloo pie: a soft yeasted dough pocket filled with spiced mashed potato and cooked until puffed and golden. Makes eight, cooked for 15 minutes.',
    kw: ['aloo pie', 'trinidad aloo pie', 'aloo pie recipe', 'trinidadian potato pie', 'aloo pie with tamarind chutney'],
    why: 'It is a snack from roadside stalls in Trinidad, sold in paper bags with a dollop of tamarind chutney and a splash of hot pepper sauce. Aloo pie is a fried pocket of soft dough around a filling of spiced mashed potato, shaped like a half-moon, and the best ones are puffy, crisp and slightly chewy.\n\nThe dough is a basic yeasted dough: flour, yeast, sugar, salt and warm water, kneaded for 8 minutes and left to rise for 1 hour until doubled. Add a spoonful of oil to keep it soft. It should be tacky but not sticky. **Don\'t add too much flour while kneading.** A soft dough makes a light pie.\n\nThe filling is simple: boiled potatoes mashed with cumin, garlic, turmeric, a little scotch bonnet and chopped coriander. Cook the spices in oil for a minute before stirring in the potato, and season well. Cool the filling completely before using.\n\nRoll the risen dough into 8 balls and flatten each to a 12 cm circle. Put 2 tablespoons of filling in the centre, fold over and press the edges with a fork. Fry in oil at 175°C for 3 minutes on each side, until deep gold. Drain and serve hot.',
    ing: [
      '# Dough',
      '400 g plain flour',
      '7 g fast-action dried yeast',
      '1 tbsp caster sugar',
      '1 tsp salt',
      '1 tbsp vegetable oil',
      '240 ml warm water',
      '# Filling',
      '2 tbsp vegetable oil',
      '3 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1/2 scotch bonnet chilli, deseeded and finely chopped',
      '500 g potatoes, boiled and mashed',
      '1 tsp salt',
      '2 tbsp chopped fresh coriander',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the 1 tbsp oil and the water and knead for 8 minutes. Cover and leave to rise for 1 hour until doubled.',
      'Heat the 2 tbsp oil and cook the garlic, cumin, turmeric and chilli for 1 minute. Stir in the mashed potato, salt and coriander. Cool completely.',
      'Divide the dough into 8 balls and roll each into a 12 cm circle. Put 2 tablespoons of filling in the centre, fold over and press the edges with a fork.',
      'Heat the frying oil to 175°C. Fry the pies in batches for 3 minutes on each side until deep golden. Drain.'
    ],
    tips: [
      'Cool the filling before using.',
      'Seal the edges firmly.',
      'Serve with tamarind chutney.'
    ],
    pair: ['Tamarind chutney', 'Pepper sauce', 'Ginger beer', 'Channa'],
    store: 'Best eaten hot. Keeps for 1 day and reheats in a hot oven.',
    nut: [439, 7, 51, 23, 3, 2, 600],
    rest: [60, 'Proving the dough']
  },

  'bake-and-shark': {
    d: 'A puffy fried bread split and filled with seasoned fried fish, then topped from a table of sauces, a Trinidadian beach classic.',
    meta: 'Bake and shark: a puffy fried bread split and filled with seasoned fried fish, then topped with sauces, a Trinidadian beach classic. Four servings, cooked for 15 minutes.',
    kw: ['bake and shark', 'trinidad bake and shark', 'bake and shark recipe', 'maracas beach bake and shark', 'fried bake with fish sandwich'],
    why: 'On Maracas Bay, the queues stretch back from the stalls, and the dish is bake and shark. A bake is a round piece of dough that puffs up into a hollow pillow when fried. Shark, or the fish used in its place, is coated in seasoning and flour and fried until crisp. The sandwich is built at the stand, and then the toppings are added from a long table of sauces.\n\nThe bake dough is flour, baking powder, a pinch of sugar and salt, a spoonful of butter and enough water to make a soft dough. Knead for 3 minutes and rest for 20. Roll into 4 balls and flatten each to 12 cm. **Fry them at 175°C, and spoon hot oil over the tops** to help them puff. They swell into hollow rounds within 30 seconds.\n\nShark is less common now for sustainability reasons, and the dish is often made with firm white fish. Use cod, haddock or dogfish, seasoned with green seasoning, garlic and salt, coated in flour and fried for 3 minutes on each side.\n\nSplit the bake, fill with fish, then add toppings: lettuce, tomato, cucumber, pineapple chunks, garlic sauce, tamarind sauce, chadon beni sauce and pepper sauce. Eat at once.',
    ing: [
      '# Bakes',
      '300 g plain flour',
      '1 1/2 tsp baking powder',
      '1 tsp sugar',
      '1/2 tsp salt',
      '1 tbsp butter',
      '160 ml water',
      '# Fish',
      '500 g firm white fish fillets (cod, haddock or dogfish)',
      '2 tbsp green seasoning',
      '2 garlic cloves, crushed',
      '1/2 tsp salt',
      '100 g plain flour',
      '150 ml vegetable oil, for frying',
      '# To serve',
      '4 lettuce leaves',
      '1 tomato, about 100 g, sliced',
      '1/4 cucumber, sliced',
      '4 tbsp garlic sauce',
      '4 tbsp tamarind sauce',
      '2 tbsp hot pepper sauce'
    ],
    st: [
      'Mix the flour, baking powder, sugar and salt. Rub in the butter, add the water and knead for 3 minutes. Rest for 20 minutes.',
      'Mix the fish with the green seasoning, garlic and salt and leave for 15 minutes. Coat in the flour.',
      'Heat the oil to 175°C. Fry the fish in batches for 3 minutes on each side until golden. Drain.',
      'Divide the dough into 4 balls and roll to 12 cm rounds. Fry in the oil for about 1 minute on each side, spooning hot oil over the top, until puffed and golden.',
      'Split the bakes, fill with the fish, lettuce, tomato, cucumber and sauces.'
    ],
    tips: [
      'Use fresh, firm fish.',
      'Spoon oil over the bakes so they puff.',
      'Offer plenty of sauces.'
    ],
    pair: ['Sea moss drink', 'Cold beer', 'Lime juice', 'Pepper sauce'],
    store: 'Best eaten straight away.',
    nut: [876, 34, 95, 40, 5, 13, 860]
  },

  'cou-cou-with-flying-fish': {
    d: 'The national dish of Barbados: a smooth cornmeal and okra cou-cou served with steamed fish in a spiced tomato gravy.',
    meta: 'Cou-cou with flying fish: the national dish of Barbados, a smooth cornmeal and okra cou-cou with steamed fish in a spiced tomato gravy. Four servings, cooked for 35 minutes.',
    kw: ['cou-cou with flying fish', 'barbados cou cou and flying fish', 'cou cou recipe', 'bajan cou cou with fish', 'cornmeal and okra cou cou'],
    why: 'No other national dish depends so heavily on a wooden stick. Cou-cou, the cornmeal and okra half of the Bajan national dish, is stirred with a special flat paddle called a cou-cou stick, which beats the mixture smooth and shapes it into a ball. A wooden spoon will do, but the movement is the same: fast, energetic and in one direction.\n\nThe okra goes into boiling water first, sliced and simmered for 10 minutes until tender. This water becomes the liquid for the cornmeal. Whisk fine cornmeal with cold water to a smooth paste, then add it to the okra water, stirring all the time. **Keep stirring for 10 minutes as it thickens.** Stop, and lumps form. The cou-cou is ready when it is thick, shiny, comes away from the sides and can be shaped.\n\nThe fish is flying fish, the symbol of Barbados. Outside the island, use small, delicate white fish fillets, such as sole or whiting. Season with lime, garlic, thyme and salt, and steam over the sauce, which is a tomato, onion and thyme gravy flavoured with scotch bonnet and a hint of Bajan seasoning.\n\nShape the cou-cou into balls with a buttered bowl, and serve with the fish and a ladle of gravy.',
    ing: [
      '# Cou-cou',
      '200 g okra, sliced',
      '700 ml water',
      '1/2 tsp salt',
      '150 g fine cornmeal',
      '100 ml cold water',
      '30 g butter',
      '# Fish and gravy',
      '600 g small white fish fillets',
      '2 tbsp lime juice',
      '2 garlic cloves, crushed',
      '1/2 tsp salt',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '3 tomatoes, about 300 g, chopped',
      '2 sprigs fresh thyme',
      '1/2 scotch bonnet chilli, deseeded and chopped',
      '150 ml water'
    ],
    st: [
      'Mix the fish with the lime juice, garlic and salt and leave for 15 minutes.',
      'Heat the oil and cook the onion for 4 minutes. Add the tomatoes, thyme, scotch bonnet and water and simmer for 10 minutes.',
      'Lay the fish in the gravy, cover and steam gently for 8 minutes until opaque.',
      'Boil the okra in the 700 ml water with the salt for 10 minutes. Whisk the cornmeal with the cold water and stir into the okra, beating constantly, for 10 minutes until thick and shiny. Beat in the butter.',
      'Shape the cou-cou into balls using a buttered bowl and serve with the fish and gravy.'
    ],
    tips: [
      'Stir the cou-cou constantly.',
      'Butter the bowl for shaping.',
      'Use the freshest fish.'
    ],
    pair: ['Lime wedges', 'Hot pepper sauce', 'Rum punch', 'Green salad'],
    store: 'Best eaten straight away.',
    nut: [432, 32, 40, 16, 6, 5, 690]
  }
};
