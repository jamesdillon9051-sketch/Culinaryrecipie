'use strict';

/**
 * Volume forty-three — bakes, curries, fish and sides, second part.
 *
 * A cheeseburger pie, two cheesy bakes, a rolled chicken roulade, chicken
 * with sausage, stroganoff, a vindaloo and a Chinese stir fry, cod and
 * corned beef in parsley sauce, cornflake chicken, creamed leeks, duck fat
 * potatoes, buttered noodles, Filipino spaghetti, focaccia pizza and garlic
 * butter pasta. Times are the recipe's own; ovens differ, so each method
 * says when to check early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'cheeseburger-pie': {
    d: 'Seasoned beef mince and cheddar baked in a pastry case under a second sheet of pastry, cut into wedges.',
    meta: 'Cheeseburger pie: seasoned beef mince and cheddar under golden pastry. Six servings, baked for 30 minutes.',
    kw: ['cheeseburger pie', 'homemade cheeseburger pie', 'beef and cheese pie', 'cheeseburger pie with pastry', 'cheeseburger pie for six'],
    why: 'Drain the beef well before it goes in the pie, and everything else follows. Mince that still holds its fat and juice turns a pastry base soft and grey, however long it bakes.\n\nBrown the mince with the onion until the pan is dry, then stir in the ketchup, mustard and Worcestershire sauce. Let the mixture cool for a few minutes before it goes into the case, because hot filling melts the pastry. **Add the cheese on top of the meat, not mixed in.** That way it melts into a layer and does not vanish.\n\nCover with the second sheet, press the edges and cut two slits for steam. Brush with beaten egg. Bake at 200°C for 30 minutes until deep golden. If your oven runs hot, check at 25 minutes.\n\nLeave the pie for 10 minutes before cutting, so the filling sets into clean wedges. Serve with pickles and chips.',
    ing: [
      '500 g beef mince',
      '1 onion, about 150 g, chopped',
      '2 tbsp tomato ketchup',
      '1 tbsp yellow mustard',
      '1 tbsp Worcestershire sauce',
      '150 g cheddar, grated',
      '450 g ready-rolled shortcrust pastry, in two sheets',
      '1 egg, about 50 g, beaten',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Fry the mince and onion in a wide pan for 10 minutes until browned and dry, pouring off any fat.',
      'Stir in the ketchup, mustard, Worcestershire sauce, salt and pepper and cook for 2 minutes, then cool for 5 minutes.',
      'Line a 23 cm pie dish with one sheet of pastry. Spoon in the meat and scatter over the cheese.',
      'Cover with the second sheet, press the edges together, cut two slits and brush with egg.',
      'Bake for 30 minutes until deep golden, then leave to stand for 10 minutes before cutting.'
    ],
    tips: [
      'Drain the mince well.',
      'Let the filling cool before it goes in the case.',
      'If your oven runs hot, check at 25 minutes.',
      'Rest the pie for 10 minutes so it cuts cleanly.'
    ],
    pair: ['Oven chips', 'Dill pickles', 'Coleslaw', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat slices in a hot oven to crisp the pastry.',
    nut: [638, 28, 37, 42, 2, 4, 970]
  },

  'cheesy-chicken-bake': {
    d: 'Chicken breasts baked in a creamy garlic sauce with a layer of melted mozzarella and cheddar on top.',
    meta: 'Cheesy chicken bake: chicken breasts in a creamy garlic sauce under melted cheese. Four servings, baked for 30 minutes.',
    kw: ['cheesy chicken bake', 'baked cheesy chicken', 'cheesy chicken breast bake', 'creamy cheesy chicken bake', 'cheesy chicken bake in the oven'],
    why: 'The first sign it is ready is the sound: the sauce blips at the edges of the dish and the cheese starts to spit and brown. Listen for that, and look for spots of deep gold on top.\n\nThe sauce is cream, garlic and a spoonful of mustard, poured round the chicken, not over it. That way the meat roasts and the cheese stays on top where it can brown. Slice the breasts in half through their thickness so they are thin and cook evenly. Thick breasts stay pink in the middle while the top burns.\n\n**Check the middle with a knife.** There should be no pink and the juices should run clear.\n\nBake at 200°C for 30 minutes. If your oven runs hot, check at 25 minutes. Rest for 5 minutes before serving so the sauce thickens slightly. Spoon it over rice or mash. Season the cream well, because the chicken and cheese soak up more salt than you expect.',
    ing: [
      '4 chicken breasts, about 600 g',
      '200 ml double cream',
      '3 cloves garlic, crushed',
      '1 tsp Dijon mustard',
      '100 g mozzarella, grated',
      '60 g cheddar, grated',
      '1 tsp paprika',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Slice each breast in half through its thickness and lay the pieces in a baking dish.',
      'Season with the paprika, salt and pepper.',
      'Stir the cream with the garlic and mustard and pour it round the chicken.',
      'Scatter over the mozzarella and cheddar. Bake for 30 minutes until the cheese is golden and the chicken has no pink.',
      'Rest for 5 minutes before serving.'
    ],
    tips: [
      'Slice the breasts thin so they cook evenly.',
      'Pour the sauce round the chicken, not over it.',
      'If your oven runs hot, check at 25 minutes.',
      'Cut into the thickest piece to check it.'
    ],
    pair: ['Steamed rice', 'Mashed potato', 'Green beans', 'Garlic bread'],
    store: 'Keeps in the fridge for 2 days. Reheat gently, covered, until hot all the way through.',
    nut: [480, 44, 4, 32, 0, 2, 650]
  },

  'cheesy-pasta-bake': {
    d: 'Pasta in a cheddar and tomato sauce, topped with more cheese and baked until bubbling.',
    meta: 'Cheesy pasta bake: pasta in a tomato and cheddar sauce, topped with cheese and baked for 25 minutes. Four servings.',
    kw: ['cheesy pasta bake', 'cheese and tomato pasta bake', 'baked cheesy pasta', 'cheesy tomato pasta bake', 'pasta bake with cheddar'],
    why: 'A Sunday dish for a table of four, and one that survives being made in advance. Everything goes in the dish and the oven does the last part.\n\nCook the pasta for 2 minutes less than the packet says. It carries on softening in the sauce while it bakes, and pasta that starts soft ends up mushy. Drain it, tip it back into the pan and stir in the tomato sauce, half the cheese and the seasoning. A splash of the pasta water loosens the sauce if it looks tight.\n\n**Keep half the cheese for the top.** The cheese stirred in makes the sauce rich, and the cheese on top makes the crust.\n\nBake at 200°C for 25 minutes. If your oven runs hot, check at 20 minutes. The top should be gold and the edges should bubble. Leave for 5 minutes to settle before serving. Use a sharp cheddar if you can, since mild cheese loses its flavour in the heat of the oven.',
    ing: [
      '300 g penne',
      '400 g passata',
      '1 onion, about 150 g, finely chopped',
      '2 cloves garlic, crushed',
      '1 tbsp olive oil',
      '200 g cheddar, grated',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Boil the penne for 8 minutes, 2 minutes under the packet time, and drain, keeping a mugful of the water.',
      'Fry the onion in the oil for 5 minutes, add the garlic for 1 minute, then the passata, oregano, salt and pepper and simmer for 5 minutes.',
      'Stir the pasta and half the cheese into the sauce, adding a splash of the pasta water if it is tight.',
      'Tip into a baking dish, scatter over the rest of the cheese and bake for 25 minutes until bubbling and golden.',
      'Leave for 5 minutes before serving.'
    ],
    tips: [
      'Undercook the pasta by 2 minutes.',
      'Split the cheese between the sauce and the top.',
      'If your oven runs hot, check at 20 minutes.',
      'A splash of pasta water loosens a tight sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted broccoli', 'Cucumber salad'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in the oven or in the microwave until hot all the way through.',
    nut: [549, 24, 66, 21, 5, 9, 730]
  },

  'chicken-roulade': {
    d: 'Flattened chicken breasts rolled round spinach, mozzarella and sun-dried tomatoes, tied and roasted, then sliced into rounds.',
    meta: 'Chicken roulade: flattened breasts rolled round spinach, mozzarella and sun-dried tomatoes, roasted for 35 minutes. Four servings.',
    kw: ['chicken roulade', 'stuffed chicken roulade', 'chicken roulade with spinach', 'spinach and mozzarella chicken roulade', 'chicken roulade recipe'],
    why: 'Roulade comes from the French for "rolled", and that is the whole method: flatten, fill, roll, roast. The skill is in the flattening.\n\nPut each breast between two sheets of baking paper and beat it with a rolling pin until it is an even 1 cm thick. Thin patches tear and thick patches stay raw. Season, then spread the filling to within 2 cm of the edges. A filling that reaches the edge squeezes out as the roll cooks.\n\nRoll up firmly from the short end and tie with string in two places, or secure with cocktail sticks. **Roll tightly, or the filling falls out.** Brown the rolls in the pan for 5 minutes, turning, then roast at 200°C for 30 minutes. If your oven runs hot, check at 25 minutes.\n\nRest for 5 minutes. Cut away the string and slice into thick rounds, which show the spiral of the filling.',
    ing: [
      '4 chicken breasts, about 700 g',
      '100 g baby spinach, wilted and squeezed dry',
      '100 g mozzarella, sliced',
      '40 g sun-dried tomatoes, chopped',
      '1 tbsp olive oil',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Beat each breast between baking paper to 1 cm thick and season with the salt, pepper and oregano.',
      'Spread the spinach, mozzarella and sun-dried tomatoes over each, leaving a 2 cm border.',
      'Roll up tightly from the short end and tie with string in two places.',
      'Brown the rolls in the oil in an ovenproof pan for 5 minutes, turning.',
      'Roast for 30 minutes until no pink remains, rest for 5 minutes, remove the string and slice.'
    ],
    tips: [
      'Beat the chicken to an even thickness.',
      'Squeeze the spinach dry.',
      'If your oven runs hot, check at 25 minutes.',
      'Tie the rolls in two places.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Creamy mash', 'Tomato salad'],
    store: 'Keeps in the fridge for 2 days. Slice and reheat gently, covered, or serve cold in a sandwich.',
    nut: [342, 47, 7, 14, 2, 4, 740]
  },

  'chicken-sausage-pasta': {
    d: 'Sliced chicken sausages, spinach and garlic tossed through pasta with a splash of cream and parmesan.',
    meta: 'Chicken sausage pasta: sliced chicken sausages, spinach and garlic in a creamy parmesan sauce. Four servings, cooked for 25 minutes.',
    kw: ['chicken sausage pasta', 'chicken sausage and spinach pasta', 'creamy chicken sausage pasta', 'pasta with chicken sausage', 'chicken sausage pasta with parmesan'],
    why: 'The first sign it is ready is the smell: sausage slices browning in the pan until their edges turn deep gold. Do not rush that stage, because the browned bits are the base of the sauce.\n\nSlice the sausages into coins and fry them first, with no oil, until they colour. Add the garlic for 30 seconds, then the cream. Scrape the pan with a wooden spoon so the browned bits dissolve into it. That is the flavour.\n\nBoil the pasta while this happens and keep a mugful of the water. **Add the spinach last, off the heat.** It wilts in the heat of the pasta in seconds, and stays green.\n\nToss everything together with the parmesan and a splash of pasta water. The sauce should coat the pasta in a glossy film, not pool in the bowl. Serve straight away. Choose sausages with a good meat content, as cheap ones shed water and will not brown.',
    ing: [
      '300 g penne',
      '4 chicken sausages, about 300 g, sliced',
      '2 cloves garlic, crushed',
      '150 ml double cream',
      '100 g baby spinach',
      '40 g parmesan, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the penne for 10 minutes, drain and keep a mugful of the water.',
      'Meanwhile fry the sliced sausages in a wide dry pan for 6 minutes until browned.',
      'Add the garlic for 30 seconds, then the cream, and simmer for 2 minutes, scraping the pan.',
      'Toss in the pasta, spinach, parmesan and pepper off the heat, loosening with pasta water until glossy.',
      'Serve straight away.'
    ],
    tips: [
      'Brown the sausages properly before adding anything.',
      'Keep some pasta water.',
      'Stir in the spinach off the heat.',
      'Serve at once, because the sauce tightens as it cools.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Cherry tomato salad', 'Sparkling water with lemon'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water or milk to loosen the sauce.',
    nut: [582, 26, 61, 26, 3, 4, 710]
  },

  'chicken-stroganoff': {
    d: 'Strips of chicken breast and mushrooms in a paprika and soured cream sauce, served over rice or noodles.',
    meta: 'Chicken stroganoff: strips of chicken and mushrooms in a paprika and soured cream sauce. Four servings, cooked for 20 minutes.',
    kw: ['chicken stroganoff', 'creamy chicken stroganoff', 'chicken and mushroom stroganoff', 'chicken stroganoff with soured cream', 'chicken stroganoff with paprika'],
    why: 'The first thing you notice is the colour: mushrooms that have gone from pale and wet to deep brown and dry. If they are still pale, they are not ready, and the sauce will taste thin.\n\nCook the mushrooms alone in a hot pan first, without stirring for the first 3 minutes, until the water has gone. Then take them out, brown the chicken strips in the same pan, and return everything together. Crowding the pan steams the meat instead of browning it.\n\nStir in the paprika for 30 seconds before the stock goes in, so it cooks without burning. **Take the pan off the heat before adding the soured cream.** Boiled soured cream splits into grains.\n\nStir it in gently and the sauce turns pale orange and glossy. Serve over rice or buttered noodles with chopped parsley. Cut the chicken into strips of an even size, so every piece is cooked at the same moment.',
    ing: [
      '500 g chicken breast, cut into strips',
      '250 g mushrooms, sliced',
      '1 onion, about 150 g, sliced',
      '2 tbsp butter',
      '2 tsp smoked paprika',
      '150 ml chicken stock',
      '150 ml soured cream',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Fry the mushrooms in half the butter in a hot pan for 6 minutes until browned and dry, then set aside.',
      'Add the rest of the butter and brown the chicken strips for 5 minutes, then add the onion for 3 minutes.',
      'Stir in the paprika for 30 seconds, then the stock, and simmer for 3 minutes.',
      'Return the mushrooms, take the pan off the heat and stir in the soured cream, salt and pepper.',
      'Scatter over the parsley and serve.'
    ],
    tips: [
      'Cook the mushrooms until dry.',
      'Brown the chicken in a single layer.',
      'Take the pan off the heat before adding the soured cream.',
      'If the sauce is thick, add a splash of stock.'
    ],
    pair: ['Steamed rice', 'Buttered noodles', 'Green beans', 'Pickled cucumber'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and do not let it boil.',
    nut: [313, 32, 8, 17, 2, 4, 490]
  },

  'chicken-vindaloo': {
    d: 'Chicken thighs simmered in a hot vinegar and chilli curry sauce with onions, garlic and ginger.',
    meta: 'Chicken vindaloo: chicken thighs in a hot vinegar and chilli sauce with garlic and ginger. Four servings, cooked for 40 minutes.',
    kw: ['chicken vindaloo', 'hot chicken vindaloo', 'homemade chicken vindaloo', 'chicken vindaloo curry', 'chicken vindaloo with vinegar'],
    why: 'What makes a vindaloo different from other hot curries? The vinegar. It gives a sharp edge that heat alone cannot, and it is what keeps the sauce from tasting flat.\n\nFry the onions slowly for 10 minutes until they are soft and golden, because they form the body of the sauce. Add the garlic, ginger and the spice paste of chilli powder, cumin, coriander and turmeric, and stir for a minute. **Keep the pan moving while the spices fry.** Burnt spices turn the whole pot bitter.\n\nStir in the vinegar and tomatoes, add the chicken and cover. Simmer gently for 40 minutes until the sauce is thick and the chicken is tender. If it catches on the base, add a splash of water.\n\nThis is a hot dish. Cut the chilli powder in half for a milder one. Serve with rice and cooling yoghurt. Thighs suit a long simmer better than breast, which dries out and turns stringy in the sauce.',
    ing: [
      '800 g boneless chicken thighs, cut into chunks',
      '2 onions, about 300 g, sliced',
      '4 cloves garlic, crushed',
      '20 g fresh ginger, grated',
      '2 tbsp vegetable oil',
      '2 tsp chilli powder',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp ground turmeric',
      '3 tbsp malt vinegar',
      '400 g tinned chopped tomatoes',
      '1 tsp salt'
    ],
    st: [
      'Fry the onions in the oil for 10 minutes until soft and golden.',
      'Add the garlic and ginger for 1 minute, then the chilli, cumin, coriander and turmeric for 1 minute, stirring all the time.',
      'Stir in the vinegar, tomatoes and salt, then add the chicken.',
      'Cover and simmer gently for 40 minutes, stirring now and then, until the chicken is tender and the sauce is thick.',
      'Check the seasoning and serve.'
    ],
    tips: [
      'Fry the onions slowly.',
      'Keep the spices moving in the pan.',
      'If it is too hot, halve the chilli next time.',
      'Add a splash of water if the sauce catches.'
    ],
    pair: ['Basmati rice', 'Natural yoghurt', 'Naan bread', 'Cucumber raita'],
    store: 'Keeps in the fridge for 3 days. It often tastes better the next day. Reheat until hot all the way through.',
    nut: [377, 42, 14, 17, 4, 6, 810]
  },

  'chinese-chicken-and-broccoli': {
    d: 'Sliced chicken and broccoli florets stir-fried in a garlic, ginger and soy sauce glaze.',
    meta: 'Chinese chicken and broccoli: sliced chicken and broccoli in a garlic, ginger and soy glaze. Four servings, cooked for 12 minutes.',
    kw: ['chinese chicken and broccoli', 'chicken and broccoli stir fry', 'chinese chicken broccoli stir fry', 'chicken and broccoli in garlic sauce', 'chicken and broccoli with rice'],
    why: 'Why does the chicken in takeaway stir fries feel so soft? It is coated in cornflour before it hits the pan. That thin coating protects the meat from the heat and keeps it tender, and it thickens the sauce later.\n\nSlice the chicken across the grain into thin strips and toss with cornflour and a spoonful of soy sauce. Heat the wok until it smokes lightly before the oil goes in. **Cook in two batches if the wok is small.** A crowded wok drops in temperature and the chicken stews.\n\nBlanch the broccoli in the pan for 2 minutes with a splash of water and the lid on, so it steams to bright green and stays firm. Then add the sauce of soy, oyster sauce, garlic and ginger and toss for a minute until it clings.\n\nServe straight away over rice. Stir fries do not wait. Cut the broccoli into florets of an even size, so the stems and the heads soften together.',
    ing: [
      '500 g chicken breast, thinly sliced',
      '1 tbsp cornflour',
      '3 tbsp soy sauce',
      '300 g broccoli florets',
      '2 tbsp vegetable oil',
      '3 cloves garlic, sliced',
      '15 g fresh ginger, grated',
      '2 tbsp oyster sauce',
      '60 ml water'
    ],
    st: [
      'Toss the chicken with the cornflour and 1 tbsp of the soy sauce.',
      'Heat half the oil in a wok until smoking and stir-fry the chicken for 4 minutes until browned, then set aside.',
      'Add the rest of the oil, the broccoli and the water, cover and steam for 2 minutes.',
      'Add the garlic and ginger for 30 seconds, then return the chicken with the remaining soy sauce and the oyster sauce.',
      'Toss for 1 minute until glossy and serve.'
    ],
    tips: [
      'Coat the chicken in cornflour first.',
      'Heat the wok until it smokes.',
      'Cook in batches if the wok is small.',
      'Have everything chopped before you start.'
    ],
    pair: ['Steamed rice', 'Egg fried rice', 'Egg noodles', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan or the microwave until hot all the way through.',
    nut: [258, 32, 10, 10, 2, 2, 940]
  },

  'cod-in-parsley-sauce': {
    d: 'Cod fillets poached in milk and served with a smooth white sauce made from the poaching milk and plenty of parsley.',
    meta: 'Cod in parsley sauce: cod fillets poached in milk and served with a parsley white sauce. Four servings, cooked for 20 minutes.',
    kw: ['cod in parsley sauce', 'poached cod in parsley sauce', 'cod with parsley sauce', 'british cod in parsley sauce', 'cod parsley sauce recipe'],
    why: 'How do you get a white sauce that tastes of fish, not just of flour? You make it from the milk the fish was poached in. That is the whole trick, and it costs nothing.\n\nPoach the cod in the milk with a bay leaf for 8 minutes, at a bare simmer. Boiling toughens the fish and curdles the milk. The fillets are ready when the flesh turns opaque and flakes under a fork. Lift them out gently and keep them warm.\n\nMelt the butter, stir in the flour for a minute, then add the strained milk a little at a time, whisking out lumps. **Add the parsley at the end.** It stays bright green and tastes fresh. Cook the parsley for too long and it turns grey.\n\nPour over the fish and serve with boiled potatoes and peas. Choose thick, even fillets, as thin tail ends overcook before the rest of the fish is ready.',
    ing: [
      '4 cod fillets, about 600 g',
      '500 ml whole milk',
      '1 bay leaf',
      '30 g butter',
      '30 g plain flour',
      '20 g flat-leaf parsley, finely chopped',
      '1/2 tsp salt',
      '1/2 tsp white pepper'
    ],
    st: [
      'Put the cod, milk and bay leaf in a wide pan and heat to a bare simmer. Poach for 8 minutes until the fish flakes.',
      'Lift out the fish with a slotted spoon and keep warm. Strain the milk into a jug.',
      'Melt the butter, stir in the flour for 1 minute, then whisk in the milk a little at a time and simmer for 5 minutes until thick.',
      'Stir in the parsley, salt and pepper and pour over the cod.'
    ],
    tips: [
      'Poach at a bare simmer.',
      'Whisk the milk in slowly to avoid lumps.',
      'Add the parsley at the end.',
      'If the sauce is thin, simmer it for another 2 minutes.'
    ],
    pair: ['Boiled new potatoes', 'Peas', 'Buttered carrots', 'Crusty bread'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, reheated gently.',
    nut: [275, 32, 12, 11, 0, 6, 430]
  },

  'corned-beef-with-parsley-sauce': {
    d: 'A joint of salted beef simmered gently for two hours and sliced, with a parsley white sauce and boiled potatoes.',
    meta: 'Corned beef with parsley sauce: salted beef simmered for 2 hours and served with a parsley white sauce. Six servings.',
    kw: ['corned beef with parsley sauce', 'boiled corned beef', 'corned beef and parsley sauce', 'simmered corned beef joint', 'corned beef with potatoes'],
    why: 'Why does boiled beef need two hours of such gentle heat? Salted beef is a tough cut, and only a long, slow simmer breaks the connective tissue down into something you can cut with a fork.\n\nPut the joint in a large pan, cover with cold water and bring it to the boil. Skim off the grey scum, then turn the heat down until the surface just shivers. **Never let it boil hard.** Boiling toughens the meat and turns the outside stringy.\n\nAdd the onion, carrots and bay leaf, cover and simmer for 2 hours. If the water drops, top it up with boiling water from the kettle. The beef is ready when a knife slides in with no resistance.\n\nMake the sauce with butter, flour and milk, finish with parsley, and slice the beef across the grain. Serve with boiled potatoes and cabbage. If the joint is very salty, rinse it under cold water before it goes in the pan.',
    ing: [
      '1.2 kg salted beef brisket joint',
      '1 onion, about 150 g, halved',
      '2 carrots, about 200 g, chopped',
      '1 bay leaf',
      '40 g butter',
      '40 g plain flour',
      '500 ml whole milk',
      '20 g flat-leaf parsley, chopped',
      '800 g potatoes, peeled and halved',
      '1/2 tsp black pepper'
    ],
    st: [
      'Cover the beef with cold water in a large pan, bring to the boil and skim off the scum.',
      'Add the onion, carrots and bay leaf, cover and simmer very gently for 2 hours.',
      'Add the potatoes for the last 20 minutes of cooking.',
      'Melt the butter, stir in the flour for 1 minute and whisk in the milk a little at a time. Simmer for 5 minutes, then stir in the parsley and pepper.',
      'Lift out the beef, rest for 10 minutes, slice across the grain and serve with the sauce.'
    ],
    tips: [
      'Keep the water at a shiver, never a rolling boil.',
      'Top up with boiling water, not cold.',
      'Slice across the grain.',
      'Keep the cooking liquid for soup.'
    ],
    pair: ['Boiled cabbage', 'Mustard', 'Buttered carrots', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Slice cold for sandwiches or reheat in a little of the cooking liquid.',
    nut: [711, 43, 38, 43, 5, 8, 190]
  },

  'cornflake-chicken': {
    d: 'Chicken pieces dipped in egg and crushed cornflakes, baked until the coating is crisp and deep gold.',
    meta: 'Cornflake chicken: chicken pieces coated in crushed cornflakes and baked for 25 minutes until crisp. Four servings.',
    kw: ['cornflake chicken', 'baked cornflake chicken', 'cornflake crusted chicken', 'cornflake chicken tenders', 'chicken in a cornflake coating'],
    why: 'A weeknight dish for a table of four, and one that children tend to eat without argument. The coating is the whole point: it crunches like fried chicken without the oil.\n\nUse plain, unsweetened cornflakes and crush them by hand in a bag, leaving some pieces the size of a coin. Fine crumbs go soft. Coarse flakes stay crisp. Dip the chicken in seasoned flour, then beaten egg, then press it into the flakes. **Press, do not just roll.** The flakes need to stick.\n\nSet the pieces on a rack over a tray so the heat reaches underneath. Spray or drizzle with a little oil. Bake at 200°C for 25 minutes. If your oven runs hot, check at 20 minutes, because cornflakes brown fast and the edges can scorch.\n\nThe chicken is ready when the coating is deep gold and the juices run clear. Season the flour as well as the chicken, since the coating is where most of the flavour sits.',
    ing: [
      '600 g chicken breast, cut into strips',
      '80 g plain cornflakes',
      '40 g plain flour',
      '2 eggs, about 100 g, beaten',
      '1 tbsp vegetable oil',
      '1 tsp paprika',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C and put a rack over a tray. Crush the cornflakes by hand in a bag, leaving some coarse pieces.',
      'Mix the flour with the paprika, salt and pepper on a plate.',
      'Dip the chicken strips in flour, then egg, then press firmly into the cornflakes.',
      'Set on the rack, drizzle with the oil and bake for 25 minutes until deep gold and no pink remains.'
    ],
    tips: [
      'Leave the flakes coarse.',
      'Press the coating on.',
      'If your oven runs hot, check at 20 minutes.',
      'Bake on a rack so the base stays crisp.'
    ],
    pair: ['Honey mustard dip', 'Coleslaw', 'Corn on the cob', 'Oven chips'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to restore the crunch.',
    nut: [346, 39, 25, 10, 1, 2, 530]
  },

  'creamed-leeks': {
    d: 'Sliced leeks softened in butter and finished in a little cream, with nutmeg and black pepper.',
    meta: 'Creamed leeks: sliced leeks softened in butter and finished in cream with nutmeg. Four servings, cooked for 15 minutes.',
    kw: ['creamed leeks', 'creamy leeks', 'leeks in cream sauce', 'braised creamed leeks', 'creamed leeks with nutmeg'],
    why: 'Leeks belong to the onion family, and like onions they turn sweet and soft when cooked slowly in butter. That is the fact the recipe rests on.\n\nWash the sliced leeks in a bowl of water, not under the tap, because grit sinks to the bottom and the leeks float. Lift them out and drain well. Wet leeks steam and go grey, and dry ones soften in the butter.\n\nMelt the butter over a low heat, add the leeks with the salt and cover for 8 minutes. Stir now and then. **Do not let them brown.** The point is a pale, silky texture, not a roast flavour.\n\nPour in the cream and simmer uncovered for 3 minutes until it thickens and coats the leeks. Add the nutmeg and pepper at the end. It is a side dish that sits beside roast chicken, fish or a pie. Slice the leeks into rings of an even thickness, so that they soften together in the pan.',
    ing: [
      '600 g leeks, trimmed and sliced',
      '30 g butter',
      '150 ml double cream',
      '1/4 tsp ground nutmeg',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Wash the sliced leeks in a bowl of cold water, lift out and drain well.',
      'Melt the butter over a low heat, add the leeks and salt, cover and cook for 8 minutes, stirring now and then.',
      'Pour in the cream and simmer uncovered for 3 minutes until thick.',
      'Season with the nutmeg and pepper and serve hot.'
    ],
    tips: [
      'Wash the leeks in a bowl, not under the tap.',
      'Keep the heat low so they stay pale.',
      'If the cream looks thin, simmer it for another minute.',
      'Grate the nutmeg fresh if you can.'
    ],
    pair: ['Roast chicken', 'Baked fish', 'Chicken and leek pie', 'Mashed potato'],
    store: 'Keeps in the fridge for 2 days. Reheat gently on the hob with a splash of milk.',
    nut: [280, 3, 22, 20, 3, 7, 340]
  },

  'duck-fat-roast-potatoes': {
    d: 'Parboiled potatoes roughed up and roasted in hot duck fat until the edges are glassy and crisp.',
    meta: 'Duck fat roast potatoes: parboiled, shaken and roasted in hot duck fat for 60 minutes until crisp. Six servings.',
    kw: ['duck fat roast potatoes', 'crispy duck fat potatoes', 'roast potatoes in duck fat', 'duck fat roasties', 'duck fat roast potatoes for six'],
    why: 'A Sunday dish for a table of six, and the one people argue about. Duck fat is the reason: it takes a higher heat than butter or olive oil and leaves a thin glassy crust.\n\nCut the potatoes into large, even pieces and boil them for 10 minutes until the edges are soft. Drain, then shake the colander hard. **Roughen the edges completely.** Those scuffed surfaces catch the fat and become the crunchiest parts.\n\nPut the duck fat in a roasting tin in the oven at 220°C for 10 minutes until it shimmers, then add the potatoes. They should sizzle as they land. Turn them once after 30 minutes and roast for 60 minutes in total until deep gold. If your oven runs hot, check at 50 minutes.\n\nSprinkle with salt as they come out. Serve at once, because roast potatoes soften as they stand. Leftover duck fat from a roast keeps well in the fridge, and can be used for the next batch.',
    ing: [
      '1.5 kg floury potatoes, peeled and cut into large pieces',
      '120 g duck fat',
      '1 tsp salt',
      '4 sprigs thyme, about 5 g'
    ],
    st: [
      'Heat the oven to 220°C. Boil the potatoes in salted water for 10 minutes, then drain and shake in the colander to roughen the edges.',
      'Put the duck fat in a roasting tin and heat in the oven for 10 minutes until shimmering.',
      'Tip in the potatoes carefully so they sizzle and turn to coat in the fat.',
      'Roast for 60 minutes, turning once after 30 minutes, until deep gold and crisp.',
      'Season with the salt, add the thyme and serve at once.'
    ],
    tips: [
      'Roughen the edges after boiling.',
      'Heat the fat before the potatoes go in.',
      'If your oven runs hot, check at 50 minutes.',
      'Do not crowd the tin.'
    ],
    pair: ['Roast chicken', 'Roast beef', 'Gravy', 'Steamed greens'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days; reheat in a hot oven to crisp them.',
    nut: [372, 5, 43, 20, 6, 2, 410]
  },

  'egg-noodles-with-butter': {
    d: 'Egg noodles tossed with butter, a little pasta water, salt and black pepper.',
    meta: 'Egg noodles with butter: egg noodles tossed with butter and black pepper. Two servings, ready in 10 minutes.',
    kw: ['egg noodles with butter', 'buttered egg noodles', 'buttered noodles', 'egg noodles butter and pepper', 'simple buttered egg noodles'],
    why: 'This is what to make in the first cold week, when the fridge is nearly empty and you want something warm in the bowl within ten minutes.\n\nBoil the noodles in plenty of well-salted water. They take 4 to 5 minutes, and the packet will say which. Scoop out a small cup of the cooking water before you drain, because the starch in it helps the butter cling.\n\nDrain, tip the noodles back into the hot pan and add the butter at once. **Toss off the heat.** The butter should melt into a glossy coat, not turn into a pool of oil. A splash of the water loosens it if the noodles seem dry.\n\nFinish with plenty of black pepper. It is a side for stroganoff or goulash, or a bowl on its own with a fried egg on top. Use good butter here, since there is nothing else in the bowl to hide behind.',
    ing: [
      '200 g egg noodles',
      '30 g butter',
      '2 tbsp pasta water',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the noodles in well-salted water for 5 minutes. Scoop out a small cup of the water, then drain.',
      'Tip the noodles back into the hot pan and add the butter.',
      'Toss off the heat, adding the pasta water and salt until glossy.',
      'Season with the pepper and serve hot.'
    ],
    tips: [
      'Salt the water well.',
      'Keep a cup of the cooking water.',
      'Add the butter off the heat.',
      'Serve at once, before the noodles stick.'
    ],
    pair: ['Chicken stroganoff', 'Goulash', 'Fried egg', 'Steamed greens'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat with a splash of water.',
    nut: [488, 14, 72, 16, 3, 3, 610]
  },

  'filipino-spaghetti': {
    d: 'Spaghetti in a sweet banana ketchup and tomato sauce with sliced hot dogs, minced pork and cheese.',
    meta: 'Filipino spaghetti: spaghetti in a sweet tomato and banana ketchup sauce with hot dogs and pork. Six servings, cooked for 25 minutes.',
    kw: ['filipino spaghetti', 'filipino style spaghetti', 'sweet filipino spaghetti', 'filipino spaghetti with hot dogs', 'filipino party spaghetti'],
    why: 'Spaghetti, banana ketchup, sliced hot dogs and pork mince: four things that look odd together and make a loved party dish. It is sweet by design, closer to a sauce for children than an Italian ragu.\n\nBrown the pork and sliced hot dogs together until the fat renders and the edges colour. Fry the onion and garlic with them, then add the tomato sauce, banana ketchup and a little sugar. Simmer for 15 minutes, stirring now and then, until the sauce is thick and glossy. **Taste it before the pasta goes in.** It should be sweet first and savoury after.\n\nBoil the spaghetti until just soft, drain and toss through the sauce. Top with a thick layer of grated cheese that melts into the heat.\n\nIt feeds a crowd and holds well on a buffet. Banana ketchup is sold in Asian shops, and regular tomato ketchup is the nearest substitute.',
    ing: [
      '400 g spaghetti',
      '300 g pork mince',
      '4 hot dogs, about 200 g, sliced',
      '1 onion, about 150 g, chopped',
      '3 cloves garlic, crushed',
      '400 g tomato sauce',
      '100 g banana ketchup',
      '1 tbsp sugar',
      '100 g cheddar, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Fry the pork and hot dogs in a wide pan for 8 minutes until browned.',
      'Add the onion and garlic for 4 minutes until soft.',
      'Stir in the tomato sauce, banana ketchup, sugar and salt and simmer for 15 minutes until thick.',
      'Meanwhile boil the spaghetti for 10 minutes and drain.',
      'Toss the spaghetti through the sauce and top with the cheese.'
    ],
    tips: [
      'Brown the meat before the sauce goes in.',
      'Taste the sauce for sweetness.',
      'Stir the pasta through the sauce hot.',
      'Add the cheese last so it melts on top.'
    ],
    pair: ['Garlic bread', 'Fried chicken', 'Green salad', 'Fruit salad'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [571, 27, 64, 23, 4, 12, 820]
  },

  'focaccia-pizza': {
    d: 'A thick focaccia base topped with tomato sauce, mozzarella and basil, baked until the edges are crisp.',
    meta: 'Focaccia pizza: a shop-bought focaccia base with tomato sauce, mozzarella and basil, baked for 20 minutes. Four servings.',
    kw: ['focaccia pizza', 'pizza on focaccia', 'focaccia pizza with mozzarella', 'focaccia bread pizza', 'tomato and mozzarella focaccia pizza'],
    why: 'Most home pizzas come out soggy in the middle, and the fix is to bake the base on its own for a few minutes before anything goes on it. Focaccia is already thick and oily, which helps, but it still holds moisture from a wet topping.\n\nHeat the oven to 220°C. Set the focaccia on a baking tray and bake it for 5 minutes until it firms. Then spread a thin layer of tomato sauce, because too much makes it wet. **Drain the mozzarella on kitchen paper first.** The water it sheds is the usual cause of a soggy centre.\n\nTear the cheese over the sauce, then bake for 15 minutes more until the edges are crisp and the cheese is spotted gold. If your oven runs hot, check at 12 minutes.\n\nScatter with basil after baking, so it stays green. Cut into squares. A plain base without herbs works best, so the toppings keep their own flavour.',
    ing: [
      '1 focaccia base, about 400 g',
      '150 g passata',
      '1 clove garlic, crushed',
      '1 tsp dried oregano',
      '250 g mozzarella, torn',
      '1 tbsp olive oil',
      '10 g fresh basil leaves'
    ],
    st: [
      'Heat the oven to 220°C. Bake the focaccia on a tray for 5 minutes.',
      'Mix the passata with the garlic and oregano and spread a thin layer over the base.',
      'Tear the drained mozzarella over the top and drizzle with the oil.',
      'Bake for 15 minutes until the edges are crisp and the cheese is golden.',
      'Scatter with basil and cut into squares.'
    ],
    tips: [
      'Bake the base first.',
      'Use a thin layer of sauce.',
      'If your oven runs hot, check at 12 minutes.',
      'Add the basil after baking.'
    ],
    pair: ['Rocket salad', 'Cherry tomato salad', 'Olives', 'Sparkling water with lemon'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the base.',
    nut: [531, 23, 49, 27, 3, 4, 1010]
  },

  'garlic-butter-pasta': {
    d: 'Spaghetti tossed in melted butter, garlic and parsley with a little pasta water and parmesan.',
    meta: 'Garlic butter pasta: spaghetti in melted butter, garlic, parsley and parmesan. Four servings, ready in 17 minutes.',
    kw: ['garlic butter pasta', 'garlic butter spaghetti', 'spaghetti with garlic butter', 'garlic butter pasta with parmesan', 'garlic and parsley pasta'],
    why: 'It looks like aglio e olio and cooks like a quick butter sauce, which is why the order matters. Where the Italian version uses oil, this one uses butter, and butter burns far more easily.\n\nSoften the garlic over a low heat for 1 to 2 minutes. You want it pale gold and fragrant. **If it turns brown, start again.** Brown garlic is bitter and no amount of butter will cover it.\n\nBoil the spaghetti for 10 minutes and keep a mugful of the water. Tip the pasta into the garlic butter with a splash of water and toss hard. The starch in the water joins the butter into a glossy sauce, instead of a greasy pool.\n\nOff the heat, add the parsley and parmesan. Serve straight away in warm bowls, with extra pepper. Slice the garlic rather than crushing it, as slices soften in the butter without scorching. Warm the bowls first.',
    ing: [
      '400 g spaghetti',
      '60 g butter',
      '4 cloves garlic, thinly sliced',
      '20 g flat-leaf parsley, chopped',
      '40 g parmesan, grated',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the spaghetti in salted water for 10 minutes. Scoop out a mugful of the water, then drain.',
      'Melt the butter over a low heat, add the garlic and cook for 2 minutes until pale gold.',
      'Add the spaghetti and 4 tbsp of the water and toss for 1 minute until glossy.',
      'Off the heat, stir in the parsley, parmesan, salt and pepper and serve at once.'
    ],
    tips: [
      'Keep the heat low for the garlic.',
      'Keep a mugful of pasta water.',
      'Toss hard to make the sauce glossy.',
      'Serve in warm bowls.'
    ],
    pair: ['Green salad', 'Roasted tomatoes', 'Grilled chicken', 'Garlic bread'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, reheated with a splash of water.',
    nut: [525, 17, 76, 17, 3, 3, 460]
  }
};
