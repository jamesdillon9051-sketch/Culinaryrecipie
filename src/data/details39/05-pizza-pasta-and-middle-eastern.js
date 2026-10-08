'use strict';

/**
 * Volume thirty-nine — pizza, pasta and Middle Eastern suppers.
 *
 * Stuffed and topped chicken, pizzas on ready-made bases, pasta bakes and
 * quick pasta suppers, and North African and Persian dishes. Times are the
 * recipe's own; ovens and hobs differ, so each method says when to check
 * early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'spinach-stuffed-chicken': {
    d: 'Chicken breasts filled with spinach, cream cheese and garlic, wrapped in nothing but their own skin of seasoning and cooked for 30 minutes.',
    meta: 'Spinach stuffed chicken: chicken breasts filled with spinach, cream cheese and garlic and baked until golden. Four servings.',
    kw: ['spinach stuffed chicken', 'spinach and cream cheese stuffed chicken', 'stuffed chicken breast with spinach', 'baked spinach stuffed chicken', 'creamy spinach chicken'],
    why: 'Stuffing a chicken breast makes a plain piece of meat into something that looks as though it took effort. In truth it takes a sharp knife and five minutes, and the filling does the rest.\n\nCut a deep pocket into the side of each breast, slicing from the thick edge toward the other side without cutting through. **Keep the opening small**, so the filling stays inside as it melts.\n\nWilt the spinach with garlic, squeeze it dry and mix it with cream cheese, parmesan and pepper. Dry spinach is important: wet filling floods the pocket and the chicken steams from the inside.\n\nSpoon the mix into the pockets and secure with cocktail sticks. Season the outside, brown in a pan for 3 minutes a side, then finish in a 190°C oven for 22 minutes. If your oven runs hot, check at 18 minutes. The chicken is done when the juices run clear. Rest for 5 minutes before slicing.',
    ing: [
      '4 chicken breasts, about 700 g',
      '200 g baby spinach',
      '2 garlic cloves, chopped',
      '1 tbsp olive oil',
      '150 g cream cheese',
      '30 g parmesan, grated',
      '1/2 tsp black pepper',
      '1 tsp salt',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Heat the oven to 190°C. Wilt the spinach with the garlic and olive oil, cool, squeeze dry and chop. Mix with the cream cheese, parmesan and pepper.',
      'Cut a deep pocket in each breast, fill with the spinach mixture and secure with cocktail sticks. Season with the salt.',
      'Brown the chicken in the vegetable oil in an ovenproof pan for 3 minutes per side.',
      'Cook in the oven for 22 minutes. Rest for 5 minutes and remove the sticks.'
    ],
    tips: [
      'Squeeze the spinach dry.',
      'Keep the pocket opening small.',
      'If your oven runs hot, check at 18 minutes.',
      'Rest before slicing.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Rice', 'Garlic mushrooms'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [443, 46, 4, 27, 1, 1, 930]
  },

  'caprese-chicken': {
    d: 'Chicken breasts seared and topped with tomato, mozzarella and basil, finished in the oven and drizzled with balsamic.',
    meta: 'Caprese chicken: chicken breasts seared and topped with tomato, mozzarella and basil, baked until melted and drizzled with balsamic. Four servings.',
    kw: ['caprese chicken', 'baked caprese chicken', 'chicken caprese', 'chicken with mozzarella and tomato', 'balsamic caprese chicken'],
    why: 'Caprese is a salad of tomato, mozzarella and basil, and it makes a good topping for chicken: the cheese melts, the tomato softens and the basil perfumes the dish. A drizzle of balsamic gives the sharpness it needs.\n\nBrown the chicken in a hot, ovenproof pan for 4 minutes a side. Season it well, because the toppings are mild. **Do not slice the tomatoes thickly**: thin slices heat through in the time the cheese takes to melt.\n\nLay a slice of mozzarella and two of tomato on each breast and slide the pan into a 200°C oven for 8 to 10 minutes, until the cheese has melted and begun to blister. If your oven runs hot, check at 6 minutes.\n\nWhile it cooks, simmer the balsamic vinegar until it is syrupy, which takes about 5 minutes. Tear the basil over the top and drizzle with the reduced balsamic. Cherry tomatoes halved and roasted alongside work as well when the slicing tomatoes are poor.',
    ing: [
      '4 chicken breasts, about 700 g',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp olive oil',
      '2 tomatoes, thinly sliced',
      '200 g mozzarella, sliced',
      '120 ml balsamic vinegar',
      '1 handful basil leaves'
    ],
    st: [
      'Heat the oven to 200°C. Season the chicken with the salt and pepper and brown in the oil in an ovenproof pan for 4 minutes per side.',
      'Top each breast with the mozzarella and tomato slices and cook in the oven for 8 to 10 minutes until melted.',
      'Simmer the balsamic vinegar for 5 minutes until syrupy.',
      'Tear the basil over the chicken and drizzle with the balsamic.'
    ],
    tips: [
      'Season the chicken well.',
      'Slice the tomatoes thin.',
      'If your oven runs hot, check at 6 minutes.',
      'Reduce the balsamic slowly.'
    ],
    pair: ['Pasta', 'Green salad', 'Roasted potatoes', 'Garlic bread'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [447, 51, 9, 23, 1, 7, 980]
  },

  'bbq-chicken-pizza': {
    d: 'A ready-made pizza base spread with barbecue sauce and topped with chicken, red onion, mozzarella and coriander, cooked for 12 minutes.',
    meta: 'BBQ chicken pizza: a pizza base spread with barbecue sauce and topped with chicken, red onion, mozzarella and coriander. Four servings.',
    kw: ['bbq chicken pizza', 'barbecue chicken pizza', 'homemade bbq chicken pizza', 'bbq chicken pizza with red onion', 'chicken pizza with bbq sauce'],
    why: 'The base is barbecue sauce rather than tomato, which gives the pizza a sweet, smoky edge. With red onion and chicken it is a favourite from American pizzerias, and it is easy to make at home.\n\nUse cooked chicken: leftovers, a shop rotisserie bird, or breast poached for 15 minutes. Toss it in a spoon of sauce so it is moist and flavoured before it goes on the pizza. **Preheat the oven and tray**, so the base starts crisping the moment it goes in.\n\nSpread a thin layer of barbecue sauce over the base, leaving a border. A thick layer makes the middle soggy. Add half the cheese, then the chicken and onion, and finish with the remaining cheese.\n\nCook at 240°C for 12 minutes, until the cheese is bubbling and the edge has browned. If your oven runs hot, check at 9 minutes. Scatter with coriander and a drizzle of extra sauce, and let it rest for 2 minutes before cutting.',
    ing: [
      '2 ready-made pizza bases, about 600 g',
      '120 g barbecue sauce',
      '300 g cooked chicken, shredded',
      '1 red onion, thinly sliced',
      '250 g mozzarella, grated',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oven to 240°C with a tray inside. Toss the chicken in 2 tbsp of the sauce.',
      'Spread the remaining sauce over the bases, leaving a border. Scatter with half the mozzarella, then the chicken and onion, then the remaining cheese.',
      'Cook for 12 minutes until bubbling and browned at the edge.',
      'Scatter with the coriander and rest for 2 minutes before cutting.'
    ],
    tips: [
      'Preheat the tray.',
      'Use a thin layer of sauce.',
      'If your oven runs hot, check at 9 minutes.',
      'Rest before cutting.'
    ],
    pair: ['Green salad', 'Coleslaw', 'Ranch dip', 'Cold lemonade'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [786, 48, 90, 26, 4, 15, 1490]
  },

  'meat-lovers-pizza': {
    d: 'A pizza base loaded with pepperoni, sausage, bacon and ham under melted mozzarella, cooked for 12 minutes.',
    meta: 'Meat lovers pizza: a pizza base loaded with pepperoni, sausage, bacon and ham under melted mozzarella and tomato sauce. Four servings.',
    kw: ['meat lovers pizza', 'homemade meat lovers pizza', 'meat lover pizza with sausage and bacon', 'loaded meat pizza', 'four meat pizza'],
    why: 'The meat lovers pizza is a pile-up of everything cured and smoked, and the cooking has a single problem: the more topping there is, the more grease and water ends up on the base. Dealing with that is the whole skill.\n\nCook the sausage and bacon first, for 6 to 8 minutes, until nearly done, and drain on paper. **Pre-cooking removes the fat and water** that would otherwise leave the pizza wet in the middle.\n\nSpread a thin layer of tomato sauce on the base. Scatter half the cheese, then the meats, then the rest of the cheese, which locks the toppings in place.\n\nCook on a hot tray at 240°C for 12 minutes, until the edges are deeply browned and the cheese is spotted. If your oven runs hot, check at 9 minutes. Blot any pools of fat with paper, rest for 2 minutes, and cut into wedges with a rocking pizza cutter.',
    ing: [
      '2 ready-made pizza bases, about 600 g',
      '150 g tomato pizza sauce',
      '250 g mozzarella, grated',
      '120 g pork sausage meat',
      '120 g streaky bacon, chopped',
      '80 g pepperoni slices',
      '100 g sliced ham, torn',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 240°C with a tray inside. Fry the sausage meat and bacon for 7 minutes until nearly cooked and drain on paper.',
      'Spread the sauce over the bases and scatter with half the mozzarella. Add the sausage, bacon, pepperoni and ham, then the remaining cheese and the oregano.',
      'Cook for 12 minutes until the edges are browned and the cheese is spotted.',
      'Blot any fat, rest for 2 minutes and cut into wedges.'
    ],
    tips: [
      'Pre-cook the sausage and bacon.',
      'Use a thin layer of sauce.',
      'If your oven runs hot, check at 9 minutes.',
      'Blot the fat before cutting.'
    ],
    pair: ['Green salad', 'Garlic dip', 'Pickled peppers', 'Cold beer'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days.',
    nut: [873, 46, 80, 41, 5, 7, 2480]
  },

  'white-pizza': {
    d: 'A pizza base with a garlic and ricotta spread, mozzarella and parmesan, cooked for 12 minutes with no tomato sauce.',
    meta: 'White pizza: a pizza base with a garlic and ricotta spread, mozzarella and parmesan, baked without tomato sauce. Four servings.',
    kw: ['white pizza', 'white pizza with ricotta and garlic', 'pizza bianca with garlic', 'homemade white pizza', 'ricotta and mozzarella white pizza'],
    why: 'Without a tomato sauce, the pizza depends on cheese and garlic, and the cheese has to be good. A white pizza is rich, creamy and fragrant, and one of the simplest pizzas to get right.\n\nThe base is a spread of ricotta, grated garlic, olive oil, lemon zest and a pinch of salt, beaten until smooth. **The lemon zest is not optional**: it cuts through the richness and keeps the pizza from feeling heavy.\n\nSpread it over the base, leaving a border, and scatter with mozzarella and parmesan. Add a little black pepper and some fresh thyme or oregano.\n\nCook on a preheated tray at 240°C for 12 minutes, until the cheese is bubbling and freckled with brown. If your oven runs hot, check at 9 minutes, since white sauces scorch more quickly than red. Finish with a drizzle of olive oil and a handful of rocket if you like.',
    ing: [
      '2 ready-made pizza bases, about 600 g',
      '250 g ricotta',
      '3 garlic cloves, grated',
      '2 tbsp olive oil',
      '1 lemon, zest only',
      '1/2 tsp salt',
      '200 g mozzarella, grated',
      '40 g parmesan, grated',
      '1/2 tsp black pepper',
      '2 g thyme sprigs'
    ],
    st: [
      'Heat the oven to 240°C with a tray inside. Beat the ricotta, garlic, half the oil, the lemon zest and salt until smooth.',
      'Spread over the bases, leaving a border. Scatter with the mozzarella, parmesan, pepper and thyme leaves.',
      'Cook for 12 minutes until bubbling and freckled with brown.',
      'Drizzle with the remaining oil.'
    ],
    tips: [
      'Add lemon zest to the ricotta.',
      'Preheat the tray.',
      'If your oven runs hot, check at 9 minutes.',
      'Do not overload the base.'
    ],
    pair: ['Rocket salad', 'Cherry tomatoes', 'Prosciutto', 'Dry white wine'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days.',
    nut: [779, 35, 81, 35, 4, 6, 1550]
  },

  'sausage-and-broccoli-rabe-pasta': {
    d: 'Orecchiette tossed with crumbled Italian sausage, bitter broccoli rabe, garlic, chilli and parmesan, ready in 30 minutes.',
    meta: 'Sausage and broccoli rabe pasta: orecchiette tossed with crumbled Italian sausage, bitter broccoli rabe, garlic, chilli and parmesan. Four servings.',
    kw: ['sausage and broccoli rabe pasta', 'orecchiette with sausage and broccoli rabe', 'italian sausage and rapini pasta', 'sausage broccoli rabe orecchiette', 'puglian sausage pasta'],
    why: 'It is a dish from Puglia that Italian-American kitchens made their own: pasta, sausage and a bitter green. The bitterness is the point, and it balances the richness of the pork perfectly.\n\nBlanch the broccoli rabe in the boiling pasta water for 2 minutes before the pasta goes in, which takes the harsh edge off. Lift it out and chop it. **Cook the pasta in the same water**, so it picks up a faint, green flavour.\n\nSquash the sausage out of its skin into a cold pan, and break it into pieces as it browns, for 8 minutes. Add garlic and chilli for the last minute.\n\nToss the drained pasta, the broccoli rabe and a ladle of cooking water through the sausage for 2 minutes, until a light sauce forms. If your hob runs hot, keep the heat medium so the garlic stays golden. Finish with parmesan and a trickle of olive oil.',
    ing: [
      '350 g orecchiette',
      '300 g broccoli rabe, trimmed',
      '400 g Italian pork sausages',
      '4 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '2 tbsp olive oil',
      '40 g parmesan, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the broccoli rabe in salted water for 2 minutes, lift out and chop. In the same water, cook the orecchiette for the time on the packet. Keep a mug of the water and drain.',
      'Squeeze the sausage meat from its skins into a cold pan and brown for 8 minutes, breaking it up. Add the garlic and chilli for 1 minute.',
      'Toss in the pasta, broccoli rabe and a ladle of the water for 2 minutes.',
      'Finish with the parmesan, oil and salt.'
    ],
    tips: [
      'Blanch the broccoli rabe first.',
      'Brown the sausage until crisp at the edges.',
      'If your hob runs hot, keep the heat at medium.',
      'Loosen with pasta water.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Red wine', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [735, 30, 75, 35, 5, 5, 1280]
  },

  'four-cheese-pasta-bake': {
    d: 'Penne in a sauce of cheddar, mozzarella, parmesan and cream cheese, topped with more cheese and cooked for 20 minutes.',
    meta: 'Four cheese pasta bake: penne in a sauce of cheddar, mozzarella, parmesan and cream cheese, topped with more cheese and baked. Six servings.',
    kw: ['four cheese pasta bake', '4 cheese pasta bake', 'cheesy baked penne', 'four cheese baked pasta', 'creamy cheese pasta bake'],
    why: 'Each of the four cheeses does something different: cheddar gives bite, mozzarella gives stretch, parmesan gives salt and depth, and cream cheese gives a smooth, tangy base. Together they make a pasta bake that is better than the sum of its parts.\n\nMake a white sauce first: butter, flour and warm milk, simmered for 5 minutes. **Take the pan off the heat before adding the cheese**, because cheese that is boiled turns grainy and oily. Stir in the cream cheese, then the cheddar and parmesan, a handful at a time.\n\nBoil the penne for 2 minutes less than the packet says, since it will keep cooking in the oven. Fold the pasta into the sauce with half the mozzarella.\n\nTip into a dish, top with the remaining mozzarella, and cook at 200°C for 20 minutes until golden and bubbling. If your oven runs hot, check at 15 minutes. Stand for 5 minutes before serving.',
    ing: [
      '350 g penne',
      '40 g butter',
      '40 g plain flour',
      '600 ml milk, warmed',
      '100 g cream cheese',
      '150 g cheddar, grated',
      '40 g parmesan, grated',
      '200 g mozzarella, grated',
      '1/2 tsp mustard powder',
      '1/2 tsp black pepper',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Heat the oven to 200°C. Boil the penne for 2 minutes less than the packet says and drain.',
      'Melt the butter, stir in the flour for 1 minute, whisk in the milk and simmer for 5 minutes. Off the heat, stir in the cream cheese, cheddar, parmesan, mustard powder, pepper and nutmeg.',
      'Fold in the penne and half the mozzarella and tip into a dish. Top with the remaining mozzarella.',
      'Cook for 20 minutes until golden and bubbling. Stand for 5 minutes.'
    ],
    tips: [
      'Take the sauce off the heat before adding cheese.',
      'Undercook the pasta.',
      'If your oven runs hot, check at 15 minutes.',
      'Rest before serving.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted tomatoes', 'Steamed broccoli'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [637, 29, 56, 33, 2, 8, 560]
  },

  'chicken-carbonara': {
    d: 'Spaghetti with chicken, bacon, egg yolks and parmesan in a glossy sauce that sets from the heat of the pasta, ready in 30 minutes.',
    meta: 'Chicken carbonara: spaghetti with chicken, bacon, egg yolks and parmesan in a glossy sauce that sets from the heat of the pasta. Four servings.',
    kw: ['chicken carbonara', 'chicken carbonara pasta', 'creamy chicken carbonara', 'spaghetti chicken carbonara', 'chicken and bacon carbonara'],
    why: 'A carbonara is a sauce of egg, cheese and cured pork, and it needs no cream. The heat of the pasta cooks the egg into a silky coating, and the whole skill is in how you do it.\n\nWhisk the eggs, yolks, parmesan and plenty of black pepper in a bowl and set it aside. Fry the bacon until crisp, then cook the chicken strips in the same pan for 6 minutes, until golden and cooked through.\n\nDrain the pasta, keeping a mug of the water. **Take the pan off the heat** before the egg goes in, then tip in the pasta, the egg mixture and a splash of the water, tossing quickly. The residual heat thickens the egg; direct heat scrambles it.\n\nIf your hob runs hot, wait 30 seconds before adding the egg. If the sauce looks stiff, loosen it with a little more pasta water. It should be glossy and cling to every strand. Serve at once with more parmesan.',
    ing: [
      '350 g spaghetti',
      '2 chicken breasts, about 400 g, sliced into strips',
      '150 g streaky bacon, chopped',
      '1 tbsp olive oil',
      '2 eggs',
      '40 g egg yolks',
      '60 g parmesan, grated',
      '1 tsp black pepper',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the spaghetti in salted water, keep a mug of the water and drain. Whisk the eggs, yolks, parmesan and pepper.',
      'Fry the bacon in the oil for 6 minutes until crisp. Add the chicken and cook for 6 minutes until golden and cooked through.',
      'Take the pan off the heat. Tip in the pasta, then the egg mixture and a splash of the pasta water, tossing for 1 minute until glossy.',
      'Season with the salt and serve at once.'
    ],
    tips: [
      'Take the pan off the heat before the egg.',
      'Keep the pasta water.',
      'If your hob runs hot, wait 30 seconds first.',
      'Serve immediately.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted tomatoes', 'White wine'],
    store: 'Best eaten at once. Reheating can scramble the sauce.',
    nut: [657, 50, 67, 21, 3, 3, 1170]
  },

  'creamy-pesto-gnocchi': {
    d: 'Shop-bought gnocchi pan-fried until golden and tossed with a creamy basil pesto sauce, peas and parmesan in 12 minutes.',
    meta: 'Creamy pesto gnocchi: gnocchi pan-fried until golden and tossed with a creamy basil pesto sauce, peas and parmesan. Four servings in 17 minutes.',
    kw: ['creamy pesto gnocchi', 'pesto gnocchi', 'pan fried pesto gnocchi', 'quick pesto gnocchi', 'gnocchi with pesto cream sauce'],
    why: 'Gnocchi from a packet is one of the best shortcuts in the supermarket, and the trick is not to boil it. Pan-frying gives it a golden, crisp crust that contrasts with the soft inside.\n\nHeat a spoon of butter and oil in a wide pan and add the gnocchi straight from the packet in a single layer. **Leave them alone for 4 minutes** so they colour underneath, then turn and cook for 3 minutes more.\n\nStir the pesto into the cream in a small bowl, which stops it separating, and pour it over the gnocchi with the peas and a splash of water. Simmer for 2 minutes until everything is coated and the peas are warm. If your hob runs hot, lower the heat so the cream does not boil hard.\n\nFinish with parmesan, black pepper and a squeeze of lemon, which stops the sauce from tasting heavy. Serve straight from the pan.',
    ing: [
      '600 g potato gnocchi',
      '1 tbsp butter',
      '1 tbsp olive oil',
      '100 g basil pesto',
      '120 ml double cream',
      '150 g frozen peas',
      '30 g parmesan, grated',
      '1/2 tsp black pepper',
      '1/2 lemon, juiced'
    ],
    st: [
      'Heat the butter and oil in a wide pan and fry the gnocchi in a single layer for 4 minutes without moving. Turn and cook for 3 minutes more.',
      'Stir the pesto into the cream and pour over with the peas and a splash of water. Simmer for 2 minutes.',
      'Stir in the parmesan, pepper and lemon juice.',
      'Serve straight from the pan.'
    ],
    tips: [
      'Do not boil the gnocchi first.',
      'Leave them to brown.',
      'If your hob runs hot, lower the heat for the sauce.',
      'Add lemon to lift the cream.'
    ],
    pair: ['Rocket salad', 'Cherry tomatoes', 'Garlic bread', 'White wine'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [572, 13, 58, 32, 6, 5, 910]
  },

  'tahini-chicken': {
    d: 'Chicken thighs roasted for 40 minutes in a lemon, garlic and tahini marinade, served with a drizzle of tahini sauce.',
    meta: 'Tahini chicken: chicken thighs roasted in a lemon, garlic and tahini marinade, served with a drizzle of tahini sauce. Four servings.',
    kw: ['tahini chicken', 'roast tahini chicken', 'lemon tahini chicken', 'middle eastern tahini chicken', 'tahini and garlic chicken thighs'],
    why: 'Tahini does an unexpected thing to chicken: its fat and its sesame flavour make the meat taste richer, and in the oven it browns into a nutty, golden crust. It is a simple marinade with a lot of character.\n\nWhisk the tahini with lemon juice, garlic, cumin and salt. The mixture will seize and turn thick at first, then loosen as you add a little water. **Keep adding water, a spoon at a time,** until it is pourable like single cream.\n\nCoat the chicken in half of the sauce and leave it for at least 30 minutes. Keep the other half clean for serving.\n\nRoast skin-side up at 200°C for 40 minutes, until the skin is dark gold and the juices run clear. If your oven runs hot, check at 32 minutes. Spoon the reserved tahini sauce over the hot chicken and finish with parsley, toasted sesame seeds and a squeeze of lemon.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '100 g tahini',
      '3 tbsp lemon juice',
      '3 garlic cloves, grated',
      '1 tsp ground cumin',
      '1 tsp salt',
      '80 ml water',
      '1 tbsp sesame seeds',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200°C. Whisk the tahini, lemon juice, garlic, cumin and salt, then whisk in the water until pourable.',
      'Coat the chicken in half of the sauce and leave for at least 30 minutes.',
      'Roast skin-side up for 40 minutes until dark gold and cooked through.',
      'Spoon the remaining sauce over the chicken and scatter with the sesame seeds and parsley.'
    ],
    tips: [
      'Thin the tahini with water gradually.',
      'Keep half the sauce back.',
      'If your oven runs hot, check at 32 minutes.',
      'Finish with lemon.'
    ],
    pair: ['Rice pilaf', 'Cucumber salad', 'Flatbread', 'Roasted aubergine'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [482, 54, 8, 26, 3, 0, 850]
  },

  'zaatar-chicken': {
    d: 'Chicken thighs rubbed with za\'atar, olive oil and lemon and roasted for 40 minutes with red onion until crisp.',
    meta: 'Za\'atar chicken: chicken thighs rubbed with za\'atar, olive oil and lemon and roasted with red onion until crisp. Four servings.',
    kw: ['za\'atar chicken', 'zaatar roast chicken', 'roasted za\'atar chicken thighs', 'lemon za\'atar chicken', 'middle eastern za\'atar chicken'],
    why: 'Za\'atar is a blend of thyme, sesame, sumac and salt, and it is one of the best things to rub on a chicken: it is herby, tangy and nutty all at once. It needs very little else.\n\nMix it with olive oil and lemon juice to make a loose paste, and work it under and over the skin. **Rub it in thoroughly**, since the herbs need contact with the meat. If you have time, leave the chicken for an hour in the fridge.\n\nSet the thighs on a bed of sliced red onion in a roasting tin. The onion softens and sweetens in the chicken fat, and it becomes a side dish in its own right.\n\nRoast at 200°C for 40 minutes, until the skin is crisp and the juices run clear. If your oven runs hot, check at 32 minutes. Za\'atar can darken quickly. Sprinkle with a little more za\'atar and serve with the onions, labneh or yoghurt and flatbread.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '4 tbsp za\'atar',
      '4 tbsp olive oil',
      '1 lemon, juiced',
      '1 tsp salt',
      '2 red onions, sliced',
      '150 g plain yoghurt'
    ],
    st: [
      'Heat the oven to 200°C. Mix 3 tbsp of the za\'atar with the oil, lemon juice and salt and rub over and under the chicken skin.',
      'Spread the onions in a roasting tin and set the chicken on top, skin-side up.',
      'Roast for 40 minutes until crisp and cooked through.',
      'Sprinkle with the remaining za\'atar and serve with the onions and yoghurt.'
    ],
    tips: [
      'Rub the paste under the skin.',
      'Roast on a bed of onions.',
      'If your oven runs hot, check at 32 minutes.',
      'Add fresh za\'atar at the end.'
    ],
    pair: ['Flatbread', 'Hummus', 'Tabbouleh', 'Rice'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [494, 54, 11, 26, 3, 4, 830]
  },

  'moroccan-meatballs': {
    d: 'Spiced beef and lamb meatballs simmered for 25 minutes in a tomato sauce with cumin, cinnamon and preserved lemon.',
    meta: 'Moroccan meatballs: spiced beef and lamb meatballs simmered in a tomato sauce with cumin, cinnamon and preserved lemon. Four servings.',
    kw: ['moroccan meatballs', 'moroccan meatballs in tomato sauce', 'kefta tagine', 'spiced moroccan meatballs', 'moroccan lamb meatballs'],
    why: 'In Morocco they are called kefta, and a pot of them in a spiced tomato sauce is a family staple. The spices are warm rather than hot: cumin, paprika, cinnamon and coriander, with plenty of fresh herbs.\n\nMix the mince with grated onion, parsley, coriander and the spices, and knead it for a minute until it feels sticky. **Chill the mixture for 20 minutes**, which firms it enough to roll into neat balls.\n\nThe sauce starts with onion and garlic softened in oil, then tomatoes, a stick of cinnamon and a little preserved lemon. Simmer for 10 minutes, until it is rich and reduced.\n\nLower the meatballs in gently, cover and simmer for 15 minutes, turning once. If your hob runs hot, check at 12 minutes. Do not stir hard, or they will break up. Serve from the pot with couscous or bread, and scatter with coriander. A spoonful of harissa in the sauce turns it hotter for anyone who wants a stronger kick.',
    ing: [
      '350 g beef mince',
      '350 g lamb mince',
      '1 onion, grated',
      '3 tbsp chopped parsley',
      '3 tbsp chopped coriander',
      '2 tsp ground cumin',
      '2 tsp paprika',
      '1 tsp ground cinnamon',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '800 g tinned chopped tomatoes',
      '2 g cinnamon stick',
      '1 tbsp chopped preserved lemon rind'
    ],
    st: [
      'Mix the beef, lamb, grated onion, parsley, coriander, cumin, paprika, ground cinnamon and salt and knead for 1 minute. Chill for 20 minutes, then roll into 24 balls.',
      'Soften the chopped onion and garlic in the oil for 5 minutes. Add the tomatoes, cinnamon stick and preserved lemon and simmer for 10 minutes.',
      'Lower in the meatballs, cover and simmer for 15 minutes, turning once.',
      'Serve with a scatter of coriander.'
    ],
    tips: [
      'Chill the mixture before rolling.',
      'Do not stir hard once the meatballs are in.',
      'If your hob runs hot, check at 12 minutes.',
      'Use the preserved lemon rind only.'
    ],
    pair: ['Couscous', 'Flatbread', 'Harissa', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [555, 35, 16, 39, 4, 8, 730]
  },

  'moroccan-chickpea-stew': {
    d: 'Chickpeas, carrots and tomatoes simmered for 30 minutes with ras el hanout, cinnamon and apricots, served with couscous.',
    meta: 'Moroccan chickpea stew: chickpeas, carrots and tomatoes simmered with ras el hanout, cinnamon and apricots, served with couscous. Four servings.',
    kw: ['moroccan chickpea stew', 'moroccan chickpea tagine', 'chickpea stew with apricots', 'vegan moroccan chickpea stew', 'ras el hanout chickpea stew'],
    why: 'A good chickpea stew relies on spice and contrast: warm spices, sweet apricots, sharp tomato and creamy chickpeas. It makes a satisfying meal without any meat.\n\nSoften the onion in oil for 8 minutes, then add garlic, ginger and the spices, ras el hanout, cumin and cinnamon, and stir for a minute. **The spices must cook briefly in the fat**, which releases their oils and takes away any raw, dusty taste.\n\nAdd the carrots, tomatoes, stock, chickpeas and apricots, bring to the boil and simmer, partly covered, for 30 minutes. If your hob runs hot, check at 25 minutes. The carrots should be soft and the sauce thick enough to coat a spoon.\n\nTaste and add salt and a squeeze of lemon. The apricots add sweetness, so the lemon balances them. Serve over couscous, with chopped coriander, toasted almonds and a spoonful of yoghurt or harissa. Leftovers thicken overnight, so loosen the stew with a little water or stock when you reheat it.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves, grated',
      '1 tbsp grated ginger',
      '2 tsp ras el hanout',
      '1 tsp ground cumin',
      '1/2 tsp ground cinnamon',
      '3 carrots, sliced',
      '400 g tinned chopped tomatoes',
      '300 ml vegetable stock',
      '800 g tinned chickpeas, drained',
      '80 g dried apricots, chopped',
      '1 lemon, juiced',
      '1 tsp salt',
      '2 tbsp chopped coriander',
      '200 g couscous'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes. Add the garlic, ginger, ras el hanout, cumin and cinnamon and stir for 1 minute.',
      'Add the carrots, tomatoes, stock, chickpeas and apricots and simmer partly covered for 30 minutes.',
      'Stir in the lemon juice and salt. Soak the couscous in 200 ml boiling water for 5 minutes and fluff.',
      'Serve the stew over the couscous with the coriander.'
    ],
    tips: [
      'Cook the spices briefly in the oil.',
      'Simmer until the carrots are soft.',
      'If your hob runs hot, check at 25 minutes.',
      'Balance with lemon.'
    ],
    pair: ['Couscous', 'Toasted almonds', 'Harissa', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 4 days and improves overnight. Reheat gently.',
    nut: [574, 24, 88, 14, 17, 15, 1490]
  },

  'chermoula-fish': {
    d: 'White fish fillets coated in a chermoula of coriander, parsley, garlic, cumin and lemon and roasted for 15 minutes.',
    meta: 'Chermoula fish: white fish fillets coated in a chermoula of coriander, parsley, garlic, cumin and lemon and roasted. Four servings.',
    kw: ['chermoula fish', 'moroccan chermoula fish', 'baked chermoula fish', 'fish with chermoula marinade', 'easy chermoula fish'],
    why: 'Chermoula is a North African herb sauce, and it is made for fish: bright with coriander and parsley, sharp with lemon, and warm with cumin and paprika. It works as a marinade, a crust and a sauce, all at the same time.\n\nBlitz the herbs, garlic, spices, lemon juice and oil to a rough paste. **Keep it coarse**, not a purée, so that it clings to the fish and browns slightly in the oven.\n\nSpread most of the paste on the fillets and leave them for 15 minutes. Any longer and the acid begins to turn the surface firm and chalky.\n\nRoast on a lined tray at 200°C for 15 minutes, until the fish flakes at the thickest part. If your oven runs hot, check at 11 minutes. Thin fillets cook in less time. Spoon the reserved paste over the fish when it comes out of the oven, so that part of the sauce is fresh and green.',
    ing: [
      '4 white fish fillets, about 600 g',
      '1 large bunch coriander, about 40 g',
      '1 bunch parsley, about 30 g',
      '4 garlic cloves',
      '2 tsp ground cumin',
      '1 tsp paprika',
      '1 lemon, juiced',
      '5 tbsp olive oil',
      '1/2 tsp chilli flakes',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Blitz the coriander, parsley, garlic, cumin, paprika, lemon juice, oil, chilli and salt to a coarse paste.',
      'Spread two thirds of the chermoula over the fish and leave for 15 minutes.',
      'Roast for 15 minutes until the fish flakes.',
      'Spoon the remaining chermoula over the hot fish.'
    ],
    tips: [
      'Keep the paste coarse.',
      'Marinate for no more than 15 minutes.',
      'If your oven runs hot, check at 11 minutes.',
      'Keep some fresh chermoula for serving.'
    ],
    pair: ['Couscous', 'Roasted tomatoes', 'Green beans', 'Flatbread'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [299, 28, 4, 19, 1, 1, 690]
  },

  'lebanese-lentil-soup': {
    d: 'Red lentils simmered with onion, cumin and carrot for 30 minutes, blended and finished with a squeeze of lemon.',
    meta: 'Lebanese lentil soup: red lentils simmered with onion, cumin and carrot, blended and finished with a squeeze of lemon. Four servings.',
    kw: ['lebanese lentil soup', 'shorbet adas', 'lebanese red lentil soup', 'lentil soup with cumin and lemon', 'easy lebanese lentil soup'],
    why: 'Shorbet adas is the soup that Lebanese families cook in winter, and one of the cheapest and most comforting things you can make. It is thick, golden and warmly spiced, and a squeeze of lemon makes it sing.\n\nSoften the onion and carrot in oil for 8 minutes, until sweet. Add garlic and cumin and stir for 30 seconds. **Rinse the lentils well**, since the cloudy water that comes off carries dust and makes the soup foam.\n\nAdd the lentils and stock, bring to the boil and skim off any foam. Simmer for 25 minutes until the lentils collapse into a soft mush. If your hob runs hot, check at 20 minutes and stir often.\n\nBlend about half the soup, which gives a body that is creamy but not smooth. Season with salt and plenty of lemon juice, and serve with a drizzle of olive oil, a pinch of cumin and warm flatbread.',
    ing: [
      '250 g red lentils',
      '3 tbsp olive oil',
      '1 onion, chopped',
      '1 carrot, diced',
      '3 garlic cloves, chopped',
      '2 tsp ground cumin',
      '1.2 litres vegetable stock',
      '1 tsp salt',
      '2 lemons, juiced',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Rinse the lentils. Soften the onion and carrot in 2 tbsp of the oil for 8 minutes, add the garlic and cumin for 30 seconds.',
      'Add the lentils and stock, bring to the boil, skim and simmer for 25 minutes.',
      'Blend about half the soup. Stir in the salt and lemon juice.',
      'Serve with the remaining oil and the coriander.'
    ],
    tips: [
      'Rinse the lentils.',
      'Blend only half.',
      'If your hob runs hot, check at 20 minutes.',
      'Add lemon at the end.'
    ],
    pair: ['Flatbread', 'Fattoush', 'Lemon wedges', 'Olives'],
    store: 'Keeps in the fridge for 4 days, or freezes for 3 months. Thin with water when reheating.',
    nut: [376, 19, 48, 12, 9, 4, 1600]
  },

  'persian-chicken': {
    d: 'Chicken thighs braised for 45 minutes in a saffron, onion and tomato sauce with turmeric and a squeeze of lime.',
    meta: 'Persian chicken: chicken thighs braised in a saffron, onion and tomato sauce with turmeric and lime, served over rice. Four servings.',
    kw: ['persian chicken', 'persian saffron chicken', 'persian braised chicken', 'chicken with saffron and tomato', 'iranian chicken with saffron'],
    why: 'Saffron and chicken is a classic Persian pairing: the golden colour, the floral aroma and the faint bitterness lift a plain piece of meat. This version is a braise, where the chicken cooks slowly in its sauce.\n\nGrind a pinch of saffron with a little sugar and soak it in 3 tablespoons of hot water for 10 minutes. **This brings out the colour and the scent**, which would otherwise stay locked in the threads.\n\nBrown the chicken in oil, then set it aside. Cook the onions in the same pot for 10 minutes until deep gold, since they are the base of the sauce. Stir in turmeric, then the tomato puree and a little water.\n\nReturn the chicken, add the saffron liquid and simmer, covered, for 45 minutes. If your hob runs hot, check at 35 minutes. The sauce should be thick and the meat tender. Finish with lime juice and serve over rice.',
    ing: [
      '8 chicken thighs, bone in, about 1 kg',
      '1 tsp salt',
      '3 tbsp vegetable oil',
      '3 onions, thinly sliced',
      '1 tsp ground turmeric',
      '2 tbsp tomato puree',
      '300 ml water',
      '0.3 g saffron strands',
      '1 tsp sugar',
      '1 lime, juiced',
      '300 g basmati rice'
    ],
    st: [
      'Grind the saffron with the sugar and soak in 3 tbsp hot water for 10 minutes. Season the chicken with the salt.',
      'Brown the chicken in the oil in a heavy pot for 8 minutes. Set aside.',
      'Cook the onions in the pot for 10 minutes until deep gold. Stir in the turmeric and tomato puree, then add the water.',
      'Return the chicken, add the saffron liquid and simmer covered for 45 minutes. Add the lime juice and serve with boiled basmati rice.'
    ],
    tips: [
      'Soak the saffron first.',
      'Cook the onions until deep gold.',
      'If your hob runs hot, check at 35 minutes.',
      'Add lime at the end.'
    ],
    pair: ['Basmati rice', 'Yoghurt with cucumber', 'Grilled tomatoes', 'Flatbread'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [702, 56, 70, 22, 3, 5, 830]
  },

  'persian-meatballs': {
    d: 'Large beef and rice meatballs simmered for 40 minutes in a tomato and saffron sauce with split peas and herbs.',
    meta: 'Persian meatballs: large beef and rice meatballs simmered in a tomato and saffron sauce with split peas and herbs. Four servings.',
    kw: ['persian meatballs', 'koofteh tabrizi', 'persian rice meatballs', 'persian meatballs in tomato sauce', 'iranian meatballs'],
    why: 'Persian meatballs are about the size of a tennis ball, filled with rice, split peas and herbs, and cooked in a gentle, saffron-scented sauce. They are soft inside, almost like a dumpling, and they are a dish for a long table.\n\nSoak the rice and split peas, then cook them until half-tender, about 15 minutes. They finish inside the meatball. **Mix the meat by hand for a good 3 minutes** until it is very sticky, which is what holds the large meatball together.\n\nShape into 4 large balls, pressing a hard-boiled egg or a few prunes into the centre if you like. Handle them gently, since they are soft.\n\nSimmer the tomato and saffron sauce for 10 minutes, then lower the meatballs in. Cover and cook very gently for 40 minutes, turning once with great care. If your hob runs hot, check at 30 minutes and keep the heat low. Serve with the sauce, yoghurt and flatbread.',
    ing: [
      '500 g beef mince',
      '80 g basmati rice',
      '60 g yellow split peas',
      '1 onion, grated',
      '4 tbsp chopped parsley',
      '2 tbsp chopped mint',
      '1 tsp ground turmeric',
      '1 tsp salt',
      '1 egg',
      '2 tbsp vegetable oil',
      '1 onion, sliced',
      '400 g tinned chopped tomatoes',
      '0.3 g saffron strands',
      '300 ml water'
    ],
    st: [
      'Boil the rice and split peas for 15 minutes until half-tender and drain.',
      'Mix the beef, grated onion, rice, split peas, parsley, mint, turmeric, salt and egg and knead for 3 minutes. Shape into 4 large balls.',
      'Soften the sliced onion in the oil for 6 minutes. Add the tomatoes, saffron and water and simmer for 10 minutes.',
      'Lower in the meatballs, cover and simmer very gently for 40 minutes, turning once.'
    ],
    tips: [
      'Knead the meat until sticky.',
      'Handle the meatballs gently.',
      'If your hob runs hot, keep the heat low.',
      'Turn them only once.'
    ],
    pair: ['Flatbread', 'Plain yoghurt', 'Fresh herbs', 'Pickled cucumber'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [520, 32, 35, 28, 7, 6, 700]
  }
};
