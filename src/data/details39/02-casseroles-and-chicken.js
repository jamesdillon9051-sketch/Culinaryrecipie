'use strict';

/**
 * Volume thirty-nine — casseroles, sandwiches and everyday chicken.
 *
 * American casseroles and skillets, sandwiches that make a dinner, and the
 * glazed and herbed chicken dishes people search by flavour. Times are the
 * recipe's own; ovens and hobs differ, so each method says when to check
 * early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'cheeseburger-casserole': {
    d: 'Seasoned beef mince, macaroni and cheddar in a tomato sauce, topped with more cheese and cooked for 20 minutes until bubbling.',
    meta: 'Cheeseburger casserole: seasoned beef mince, macaroni and cheddar in a tomato sauce, topped with cheese and baked until bubbling. Six servings.',
    kw: ['cheeseburger casserole', 'easy cheeseburger casserole', 'hamburger casserole', 'cheeseburger pasta bake', 'beef and cheese casserole'],
    why: 'It tastes like a cheeseburger because it is built from the same parts: browned beef, onion, pickles, mustard and ketchup, with melted cheese to bring them together. The macaroni stands in for the bun.\n\nBrown the mince hard, until the pan is dry and the meat has dark edges. Pale, steamed beef is the usual reason these casseroles taste flat. **Season boldly**, since pasta and cheese soak up salt.\n\nCook the macaroni for 2 minutes less than the packet says, because it will keep absorbing sauce in the oven. Stir the pasta into the beef with tomato sauce, a spoon of mustard and chopped pickles for tang.\n\nTip into a dish, cover with the cheddar and cook at 200°C for 20 minutes until the cheese is bubbling and browned at the edges. If your oven runs hot, check at 15 minutes. Stand for 5 minutes, so the sauce settles before it is spooned out.',
    ing: [
      '500 g beef mince',
      '1 onion, finely chopped',
      '250 g macaroni',
      '400 g tinned chopped tomatoes',
      '3 tbsp ketchup',
      '1 tbsp mustard',
      '3 tbsp chopped dill pickles',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '200 g cheddar, grated'
    ],
    st: [
      'Heat the oven to 200°C. Boil the macaroni for 2 minutes less than the packet says and drain.',
      'Brown the mince and onion in a large pan for 10 minutes until the pan is dry. Stir in the tomatoes, ketchup, mustard, pickles, salt and pepper and simmer for 5 minutes.',
      'Stir in the macaroni and half the cheddar and tip into a baking dish. Scatter with the rest of the cheddar.',
      'Cook for 20 minutes until bubbling and browned. Stand for 5 minutes.'
    ],
    tips: [
      'Brown the mince until the pan is dry.',
      'Undercook the macaroni slightly.',
      'If your oven runs hot, check at 15 minutes.',
      'Rest before serving.'
    ],
    pair: ['Green salad', 'Coleslaw', 'Sliced pickles', 'Garlic bread'],
    store: 'Keeps in the fridge for 3 days. Reheat covered with a splash of water.',
    nut: [492, 31, 38, 24, 3, 6, 860]
  },

  'enchilada-casserole': {
    d: 'Layers of corn tortillas, spiced beef and black beans, enchilada sauce and cheese, cooked for 30 minutes like a lasagne.',
    meta: 'Enchilada casserole: layers of corn tortillas, spiced beef, black beans, enchilada sauce and cheese, baked like a lasagne. Six servings.',
    kw: ['enchilada casserole', 'easy enchilada casserole', 'layered enchilada casserole', 'beef enchilada casserole', 'mexican casserole'],
    why: 'Enchiladas without the rolling: the tortillas are layered like lasagne sheets, so there is nothing to tear and nothing to fold. It is a good dish for a crowd, because it cuts into tidy squares and holds up on a plate.\n\nBrown the beef with onion, cumin and chilli powder, then stir in the beans and half the sauce. **Keep the filling thick**, not sloppy, or the layers slide apart when you cut them.\n\nSpread a spoon of sauce over the dish, add a layer of tortillas (cut to fit if needed), then filling and cheese, and repeat. End with sauce and a thick layer of cheese.\n\nCook at 190°C for 30 minutes, until bubbling at the sides and browned on top. If your oven runs hot, check at 24 minutes. Stand for 10 minutes, then cut into squares and top with soured cream, coriander and sliced spring onion. Leftover portions reheat well, which makes it a good dish to cook ahead for a busy week.',
    ing: [
      '500 g beef mince',
      '1 onion, chopped',
      '2 tsp ground cumin',
      '2 tbsp chilli powder',
      '400 g tinned black beans, drained',
      '600 g enchilada sauce',
      '8 corn tortillas',
      '250 g cheddar, grated',
      '1/2 tsp salt',
      '4 tbsp soured cream',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oven to 190°C. Brown the mince and onion for 8 minutes. Stir in the cumin, chilli powder, beans, salt and half the sauce.',
      'Spread a little sauce in a baking dish. Layer in half the tortillas, half the beef mixture and a third of the cheddar. Repeat.',
      'Finish with the remaining sauce and cheddar.',
      'Cook for 30 minutes until bubbling and browned. Stand for 10 minutes, then top with the soured cream and coriander.'
    ],
    tips: [
      'Keep the filling thick.',
      'Cut the tortillas to fit the dish.',
      'If your oven runs hot, check at 24 minutes.',
      'Rest before cutting.'
    ],
    pair: ['Green salad', 'Guacamole', 'Mexican rice', 'Lime wedges'],
    store: 'Keeps in the fridge for 4 days. Reheat portions covered in the oven.',
    nut: [559, 35, 35, 31, 9, 6, 1290]
  },

  'chicken-broccoli-rice-casserole': {
    d: 'Chicken, broccoli and rice in a creamy cheese sauce, covered and cooked for 40 minutes, then browned under a cheesy top.',
    meta: 'Chicken broccoli rice casserole: chicken, broccoli and rice in a creamy cheese sauce, baked until tender and golden. Six servings.',
    kw: ['chicken broccoli rice casserole', 'easy chicken broccoli rice casserole', 'chicken and rice casserole', 'cheesy chicken broccoli casserole', 'broccoli chicken casserole'],
    why: 'A good casserole is a complete meal in one dish, and this one is easy to scale up for a table of six. The rice cooks right in the dish, soaking up the sauce, so you will not need a second pan.\n\nUse long-grain rice and measure the liquid carefully. Too much and the rice turns to porridge; too little and it stays hard. **Cover the dish tightly with foil**, since the steam is what cooks the rice.\n\nChicken thighs or breast both work, cut into 2 cm pieces so they cook through in the time the rice needs. Add the broccoli florets for the last 10 minutes, as they go grey and soft if cooked from the start.\n\nCook at 190°C for 40 minutes covered, then uncover, add the cheese and cook for 10 minutes more. If your oven runs hot, check at 32 minutes. Fluff the rice with a fork, rest for 5 minutes and serve.',
    ing: [
      '500 g chicken breast, cut into 2 cm pieces',
      '250 g long-grain rice',
      '500 ml chicken stock',
      '250 ml milk',
      '2 tbsp plain flour',
      '30 g butter',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '300 g broccoli florets',
      '150 g cheddar, grated'
    ],
    st: [
      'Heat the oven to 190°C. Melt the butter, stir in the flour for 1 minute, then whisk in the milk and simmer for 3 minutes. Add the garlic powder, salt and pepper.',
      'Mix the rice, stock, chicken and sauce in a large dish. Cover tightly with foil and cook for 30 minutes.',
      'Stir in the broccoli, cover and cook for 10 minutes.',
      'Scatter with the cheddar and cook uncovered for 10 minutes. Rest for 5 minutes.'
    ],
    tips: [
      'Cover the dish tightly.',
      'Add the broccoli late.',
      'If your oven runs hot, check at 32 minutes.',
      'Fluff the rice before serving.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Crusty bread', 'Steamed carrots'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [449, 32, 42, 17, 2, 3, 910]
  },

  'poppy-seed-chicken': {
    d: 'Shredded chicken in a creamy sauce topped with buttery cracker crumbs and poppy seeds, cooked for 35 minutes.',
    meta: 'Poppy seed chicken: shredded chicken in a creamy sauce topped with buttery cracker crumbs and poppy seeds, baked until golden. Six servings.',
    kw: ['poppy seed chicken', 'southern poppy seed chicken', 'poppy seed chicken casserole', 'creamy poppy seed chicken', 'chicken casserole with crackers'],
    why: 'It is a staple of church suppers in the American South: a creamy chicken filling under a crunchy, buttery topping. The topping is where the interest is, and it takes only crackers, butter and poppy seeds.\n\nCook the chicken first, either by poaching it for 15 minutes or by using leftover roast chicken, and shred it with two forks. **Shred it coarsely**, not to a paste, so that you can taste it.\n\nThe sauce is soured cream, a thick white sauce and a spoon of mustard, which stops it being heavy. Season well with salt, pepper and a pinch of garlic powder.\n\nCrush the crackers and toss with melted butter and the seeds until every crumb is coated, or the topping will go pale. Spread it over the chicken. Cook at 180°C for 35 minutes, until the sauce bubbles at the edges and the top is golden. If your oven runs hot, check at 28 minutes.',
    ing: [
      '600 g cooked chicken, shredded',
      '30 g butter',
      '30 g plain flour',
      '300 ml milk',
      '200 g soured cream',
      '1 tsp mustard',
      '1/2 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '150 g butter crackers, crushed',
      '60 g butter, melted',
      '2 tbsp poppy seeds'
    ],
    st: [
      'Heat the oven to 180°C. Melt the 30 g butter, stir in the flour for 1 minute, then whisk in the milk and simmer for 3 minutes. Off the heat, stir in the soured cream, mustard, garlic powder, salt and pepper.',
      'Fold in the chicken and tip into a baking dish.',
      'Toss the crackers with the melted butter and poppy seeds and scatter over the top.',
      'Cook for 35 minutes until bubbling and golden.'
    ],
    tips: [
      'Shred the chicken coarsely.',
      'Coat every crumb in butter.',
      'If your oven runs hot, check at 28 minutes.',
      'Season the sauce well.'
    ],
    pair: ['Green beans', 'Rice', 'Green salad', 'Mashed potatoes'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven to keep the topping crisp.',
    nut: [533, 33, 26, 33, 2, 4, 690]
  },

  'million-dollar-spaghetti': {
    d: 'Spaghetti layered with a cream cheese and cottage cheese filling, meat sauce and mozzarella, then baked for 30 minutes.',
    meta: 'Million dollar spaghetti: spaghetti layered with a cream cheese and cottage cheese filling, meat sauce and mozzarella. Eight servings.',
    kw: ['million dollar spaghetti', 'million dollar spaghetti casserole', 'baked spaghetti with cream cheese', 'cheesy baked spaghetti', 'layered spaghetti bake'],
    why: 'The name is a claim about richness: this is spaghetti with a layer of creamy cheese in the middle, in between two layers of meat sauce. It sits somewhere between a pasta bake and a lasagne.\n\nThe filling is cream cheese, cottage cheese, a little parmesan and parsley, beaten until it spreads. **Soften the cream cheese first**, or you will be left with white lumps in the middle of the dish.\n\nCook the spaghetti for 2 minutes less than the packet says, then toss with a little of the sauce so it does not stick. Half the pasta goes in the dish, then the filling, then the rest of the pasta, then the remaining sauce.\n\nCover with mozzarella and cook at 190°C for 30 minutes, until the top is spotted with brown. If your oven runs hot, check at 24 minutes. Stand for 10 minutes before cutting, or the layers will slide.',
    ing: [
      '350 g spaghetti',
      '500 g beef mince',
      '1 onion, chopped',
      '700 g passata',
      '2 garlic cloves, chopped',
      '1 tsp dried oregano',
      '1 tsp salt',
      '150 g cream cheese, softened',
      '200 g cottage cheese',
      '30 g parmesan, grated',
      '2 tbsp chopped parsley',
      '200 g mozzarella, grated'
    ],
    st: [
      'Heat the oven to 190°C. Brown the mince and onion for 8 minutes, add the garlic, passata, oregano and salt and simmer for 10 minutes.',
      'Boil the spaghetti for 2 minutes less than the packet says, drain and toss with a third of the sauce.',
      'Beat the cream cheese, cottage cheese, parmesan and parsley together.',
      'Layer half the spaghetti in a dish, spread over the cheese mixture, then add the rest of the spaghetti and sauce. Top with the mozzarella and cook for 30 minutes. Stand for 10 minutes.'
    ],
    tips: [
      'Soften the cream cheese.',
      'Undercook the spaghetti slightly.',
      'If your oven runs hot, check at 24 minutes.',
      'Rest before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted broccoli', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. Reheat slices covered.',
    nut: [500, 30, 41, 24, 3, 7, 790]
  },

  'chicken-parmesan-sub': {
    d: 'Breaded chicken cutlets in a toasted sub roll with marinara and melted mozzarella, finished under the grill.',
    meta: 'Chicken parmesan sub: breaded chicken cutlets in a toasted sub roll with marinara and melted mozzarella. Four servings in 30 minutes.',
    kw: ['chicken parmesan sub', 'chicken parm sub', 'chicken parmigiana sandwich', 'chicken parmesan sandwich', 'hot chicken parm sub'],
    why: 'It is the dinner version of a sandwich: a crisp chicken cutlet, a sharp tomato sauce and a lid of melted cheese, all inside a roll that has to hold up to the lot.\n\nSlice the chicken breasts in half horizontally, then pound them to 1 cm. Thin cutlets cook through in the time the crumb takes to colour. Coat in flour, egg and seasoned breadcrumbs, pressing firmly.\n\nFry in a shallow layer of oil for 3 minutes a side, until golden. **Do not cover the cutlet with sauce until the last moment**, since the crumb softens quickly once it is wet.\n\nSplit and toast the rolls, spoon a little marinara into each, add the cutlet, more sauce and a slice of mozzarella. Grill for 3 minutes, until the cheese melts and spots. If your grill runs hot, watch from 2 minutes. A long, crusty roll holds up best, since a soft one turns to mush under the sauce.',
    ing: [
      '2 chicken breasts, about 600 g',
      '3 tbsp plain flour',
      '1 egg, beaten',
      '100 g breadcrumbs',
      '2 tbsp grated parmesan',
      '1 tsp dried oregano',
      '4 tbsp vegetable oil',
      '4 sub rolls',
      '250 g marinara sauce',
      '200 g mozzarella, sliced',
      '1/2 tsp salt'
    ],
    st: [
      'Slice each chicken breast in half horizontally, pound to 1 cm and season with the salt.',
      'Coat in the flour, then the egg, then the breadcrumbs mixed with the parmesan and oregano.',
      'Fry in the oil for 3 minutes per side until golden. Heat the grill and toast the split rolls.',
      'Fill the rolls with a spoon of marinara, a cutlet, more marinara and the mozzarella. Grill for 3 minutes until melted.'
    ],
    tips: [
      'Pound the chicken to an even 1 cm.',
      'Press the crumbs on firmly.',
      'If your grill runs hot, watch from 2 minutes.',
      'Sauce the cutlet at the last moment.'
    ],
    pair: ['Green salad', 'Oven chips', 'Pickled peppers', 'Coleslaw'],
    store: 'Best eaten at once. The cooked cutlets keep in the fridge for 2 days.',
    nut: [826, 59, 71, 34, 5, 9, 1350]
  },

  'fried-chicken-sandwich': {
    d: 'Buttermilk-soaked chicken thighs coated in seasoned flour and fried for 12 minutes, in a soft bun with pickles and mayonnaise.',
    meta: 'Fried chicken sandwich: buttermilk chicken thighs in seasoned flour fried until crisp, in a soft bun with pickles and mayonnaise. Four servings.',
    kw: ['fried chicken sandwich', 'crispy fried chicken sandwich', 'homemade fried chicken sandwich', 'buttermilk fried chicken sandwich', 'chicken sandwich with pickles'],
    why: 'Fast-food chains made this sandwich famous, and the home version is better for two reasons: the chicken is fresher, and the crust is thicker. The key is the double dip.\n\nSoak boneless thighs in buttermilk with salt and a spoon of hot sauce. Buttermilk tenderises the meat and gives the flour something to grip. **Soak for at least 30 minutes**, or overnight in the fridge for a more tender result.\n\nSeason the flour with paprika, garlic powder and pepper. Lift each thigh out, let the excess drip off, press into the flour, dip back into the buttermilk and press into the flour again. That second coat gives the craggy crust.\n\nFry in 2 cm of oil at 170°C for 6 minutes a side, until deep gold and cooked to 74°C in the centre. If your oil runs hot, check at 5 minutes. Drain on a rack and assemble in a toasted bun with pickles and mayonnaise.',
    ing: [
      '4 boneless chicken thighs, about 600 g',
      '300 ml buttermilk',
      '1 tbsp hot sauce',
      '1 tsp salt',
      '150 g plain flour',
      '2 tsp paprika',
      '1 tsp garlic powder',
      '1/2 tsp black pepper',
      '4 tbsp vegetable oil, absorbed from about 300 ml of frying oil',
      '4 soft burger buns',
      '4 tbsp mayonnaise',
      '60 g dill pickle slices'
    ],
    st: [
      'Mix the buttermilk, hot sauce and salt, add the chicken and leave for at least 30 minutes.',
      'Mix the flour, paprika, garlic powder and pepper. Lift out each thigh, press into the flour, dip back in the buttermilk and press into the flour again.',
      'Fry in 2 cm of oil at 170°C for 6 minutes per side until deep gold. Drain on a rack.',
      'Toast the buns, spread with the mayonnaise and fill with the chicken and pickles.'
    ],
    tips: [
      'Soak the chicken for at least 30 minutes.',
      'Double dip for a craggy crust.',
      'If your oil runs hot, check at 5 minutes.',
      'Drain on a rack.'
    ],
    pair: ['Coleslaw', 'Oven chips', 'Pickles', 'Milkshake'],
    store: 'Best eaten at once. Cooked chicken keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [706, 41, 59, 34, 3, 8, 1390]
  },

  'mediterranean-bowl': {
    d: 'Quinoa topped with chickpeas, cucumber, tomato, olives, feta and hummus, with a lemon and oregano dressing.',
    meta: 'Mediterranean bowl: quinoa topped with chickpeas, cucumber, tomato, olives, feta and hummus, with a lemon and oregano dressing. Four servings.',
    kw: ['mediterranean bowl', 'mediterranean quinoa bowl', 'mediterranean chickpea bowl', 'greek style grain bowl', 'healthy mediterranean bowl'],
    why: 'A bowl like this is as good as its dressing and its crunch. The ingredients are ordinary, and they are good because each is cut to the right size and seasoned separately rather than all at once.\n\nRinse the quinoa under cold water, which washes away the bitter coating, then simmer it for 15 minutes. **Let it steam, covered, for 5 minutes off the heat** so the grains separate and fluff.\n\nWhile it cools, dice the cucumber and tomato to the same size and salt them lightly. Drain the chickpeas and warm them in a pan with a little oil and smoked paprika for 5 minutes, so they are not cold and flabby.\n\nShake the dressing in a jar: olive oil, lemon juice, oregano, garlic and a pinch of salt. Layer the quinoa in four bowls and arrange the toppings in sections, finishing with feta, olives and a big spoonful of hummus.',
    ing: [
      '200 g quinoa',
      '400 g tinned chickpeas, drained',
      '1 tbsp olive oil',
      '1 tsp smoked paprika',
      '1 cucumber, diced',
      '250 g cherry tomatoes, halved',
      '80 g black olives',
      '120 g feta, crumbled',
      '120 g hummus',
      '4 tbsp olive oil, for the dressing',
      '2 tbsp lemon juice',
      '1 tsp dried oregano',
      '1/2 tsp salt'
    ],
    st: [
      'Rinse the quinoa and simmer it covered in 400 ml water for 15 minutes. Rest covered for 5 minutes and fluff.',
      'Warm the chickpeas in the 1 tbsp oil with the paprika for 5 minutes.',
      'Shake the dressing oil, lemon juice, oregano and salt in a jar.',
      'Divide the quinoa between four bowls and top with the chickpeas, cucumber, tomatoes, olives, feta and hummus. Drizzle with the dressing.'
    ],
    tips: [
      'Rinse the quinoa first.',
      'Dice the vegetables evenly.',
      'Warm the chickpeas.',
      'Dress the bowls just before serving.'
    ],
    pair: ['Warm pitta', 'Grilled chicken', 'Lemon wedges', 'Tzatziki'],
    store: 'Keeps in the fridge for 3 days with the dressing kept separate.',
    nut: [674, 22, 61, 38, 12, 8, 1350]
  },

  'coconut-chicken': {
    d: 'Chicken tenders coated in coconut and breadcrumbs, cooked for 20 minutes until golden and served with a sweet chilli dip.',
    meta: 'Coconut chicken: chicken strips coated in desiccated coconut and breadcrumbs and baked until golden, with a sweet chilli dip. Four servings.',
    kw: ['coconut chicken', 'coconut crusted chicken', 'baked coconut chicken', 'coconut chicken tenders', 'coconut chicken with sweet chilli'],
    why: 'Coconut gives chicken a sweet, toasty crust that crisps in the oven without any frying. It is a favourite for children and for parties, and it takes very little effort.\n\nCut the chicken into strips about 2 cm wide. Coat in flour, dip in beaten egg and press into a mix of desiccated coconut and panko. **Press the coating on firmly**, because coconut is dry and slides off if it is only sprinkled.\n\nLay the strips on a lined tray, spaced apart, and spray or brush lightly with oil. Cook at 200°C for 20 minutes, turning once, until the coating is deep gold. Coconut browns quickly and can burn, so watch the edges. If your oven runs hot, check at 15 minutes.\n\nThe chicken is cooked when there is no pink in the middle and the juices run clear. Serve hot, with a sweet chilli sauce mixed with lime juice for dipping.',
    ing: [
      '600 g chicken breast, cut into strips',
      '3 tbsp plain flour',
      '2 eggs, beaten',
      '80 g desiccated coconut',
      '60 g panko breadcrumbs',
      '1 tsp salt',
      '1/2 tsp garlic powder',
      '2 tbsp vegetable oil',
      '4 tbsp sweet chilli sauce',
      '1 lime, juiced'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Season the chicken with the salt and garlic powder.',
      'Coat each strip in the flour, then the egg, then the coconut and panko mixed together, pressing firmly.',
      'Lay on the tray, brush with the oil and cook for 20 minutes, turning once, until golden.',
      'Stir the sweet chilli sauce and lime juice and serve for dipping.'
    ],
    tips: [
      'Press the coating on firmly.',
      'Turn halfway through.',
      'If your oven runs hot, check at 15 minutes.',
      'Watch the coconut so it does not scorch.'
    ],
    pair: ['Rice', 'Mango salad', 'Sweet potato fries', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [522, 41, 31, 26, 4, 10, 890]
  },

  'hawaiian-chicken': {
    d: 'Chicken thighs baked for 30 minutes in a sweet and sour sauce of pineapple juice, soy sauce and ginger with pineapple chunks.',
    meta: 'Hawaiian chicken: chicken thighs baked in a sweet and sour sauce of pineapple juice, soy sauce and ginger with pineapple chunks. Four servings.',
    kw: ['hawaiian chicken', 'baked hawaiian chicken', 'pineapple chicken bake', 'hawaiian chicken with rice', 'sweet and sour hawaiian chicken'],
    why: 'It is a dish that rests on a simple idea: the sweetness of pineapple against the saltiness of soy. Together with garlic and ginger they make a glaze that sticks to the chicken and turns shiny in the oven.\n\nUse bone-in, skin-on thighs for the best result, since the skin crisps and the bone keeps the meat moist. **Brown the skin side first**, in a hot pan for 5 minutes, so that the fat renders and the skin takes colour.\n\nMix the pineapple juice from the tin with soy sauce, ginger, garlic and a spoon of cornflour. Pour it over the chicken in a roasting dish and add the pineapple chunks.\n\nCook at 190°C for 30 minutes, basting once, until the sauce is thick and the chicken juices run clear. If your oven runs hot, check at 24 minutes. Spoon the sauce over steamed rice and add sliced spring onion.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '1 tbsp vegetable oil',
      '400 g tinned pineapple chunks in juice',
      '3 tbsp soy sauce',
      '2 garlic cloves, grated',
      '1 tbsp grated ginger',
      '1 tbsp cornflour',
      '1 red pepper, chopped',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oven to 190°C. Brown the chicken skin-side down in the oil for 5 minutes and transfer to a baking dish.',
      'Drain the pineapple and keep the juice. Whisk the juice with the soy sauce, garlic, ginger and cornflour and pour over the chicken.',
      'Add the pineapple and pepper, cook for 30 minutes basting once, until the sauce is thick and the chicken is cooked through.',
      'Scatter with the spring onions.'
    ],
    tips: [
      'Brown the skin first.',
      'Baste once during cooking.',
      'If your oven runs hot, check at 24 minutes.',
      'Use pineapple in juice, not syrup.'
    ],
    pair: ['Steamed rice', 'Green beans', 'Coconut rice', 'Stir-fried greens'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [415, 51, 19, 15, 3, 12, 890]
  },

  'tuscan-chicken': {
    d: 'Pan-fried chicken breasts in a garlicky cream sauce with sun-dried tomatoes and spinach, ready in 30 minutes.',
    meta: 'Tuscan chicken: pan-fried chicken breasts in a garlicky cream sauce with sun-dried tomatoes and spinach. Four servings in 30 minutes.',
    kw: ['tuscan chicken', 'creamy tuscan chicken', 'tuscan chicken with sun dried tomatoes', 'easy tuscan chicken', 'tuscan chicken and spinach'],
    why: 'The sauce is the point: cream, garlic, parmesan and sun-dried tomatoes, which bring a sweet, savoury tang. The chicken is simply a way to carry it to the plate.\n\nSlice the breasts in half horizontally so they cook in 6 minutes a side and stay juicy. Season and fry in oil until golden, then set aside. **Leave the browned bits in the pan**: they dissolve into the sauce and give it depth.\n\nSoften the garlic in the same pan for 30 seconds, then add the sun-dried tomatoes, stock and cream. Simmer for 4 minutes, until the sauce coats a spoon.\n\nStir in the parmesan and spinach and wait for the spinach to wilt, about 2 minutes. If your hob runs hot, keep the heat medium so the cream does not split. Return the chicken to the pan for a minute to warm through, then serve with pasta or mash. A squeeze of lemon at the end brightens the cream and stops the sauce tasting heavy.',
    ing: [
      '2 chicken breasts, about 600 g',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp olive oil',
      '3 garlic cloves, chopped',
      '80 g sun-dried tomatoes, sliced',
      '100 ml chicken stock',
      '200 ml double cream',
      '40 g parmesan, grated',
      '100 g baby spinach'
    ],
    st: [
      'Slice the chicken breasts in half horizontally and season. Fry in the oil for 6 minutes per side until golden, then set aside.',
      'Soften the garlic in the pan for 30 seconds, add the tomatoes, stock and cream and simmer for 4 minutes.',
      'Stir in the parmesan and spinach until wilted.',
      'Return the chicken to the pan for 1 minute and serve.'
    ],
    tips: [
      'Slice the chicken thin.',
      'Keep the browned bits in the pan.',
      'If your hob runs hot, keep the heat at medium.',
      'Add the spinach last.'
    ],
    pair: ['Pasta', 'Mashed potato', 'Crusty bread', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently with a splash of stock.',
    nut: [516, 42, 15, 32, 3, 9, 1030]
  },

  'rosemary-chicken': {
    d: 'Chicken thighs roasted for 40 minutes with rosemary, garlic, lemon and olive oil until the skin is crisp.',
    meta: 'Rosemary chicken: chicken thighs roasted with rosemary, garlic, lemon and olive oil until the skin is crisp and the juices run clear. Four servings.',
    kw: ['rosemary chicken', 'roast rosemary chicken', 'rosemary and garlic chicken', 'easy rosemary chicken', 'lemon rosemary chicken thighs'],
    why: 'Rosemary and chicken are an old pairing, and for good reason: the resin in the herb stands up to roasting heat in a way that softer herbs do not, and it perfumes the fat as it renders.\n\nChop the rosemary finely, then mash it into the oil with the garlic and salt. **Work the mixture under the skin** as well as over it, so the flavour reaches the meat. Pat the chicken dry beforehand, since wet skin steams.\n\nSet the thighs skin-side up in a roasting tin with halved lemons cut-side down. The lemons caramelise and the juices make a sharp little sauce.\n\nRoast at 200°C for 40 minutes, without turning. The skin should be deep gold and the juices should run clear when you pierce the thickest part. If your oven runs hot, check at 32 minutes. Rest the chicken for 5 minutes, then squeeze the roasted lemon over the top.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1 kg',
      '3 tbsp olive oil',
      '3 tbsp finely chopped rosemary',
      '4 garlic cloves, grated',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 lemons, halved'
    ],
    st: [
      'Heat the oven to 200°C. Pat the chicken dry. Mash the oil, rosemary, garlic, salt and pepper together.',
      'Work the mixture under and over the skin of each thigh. Set them skin-side up in a roasting tin with the lemons cut-side down.',
      'Roast for 40 minutes until the skin is deep gold and the juices run clear.',
      'Rest for 5 minutes and squeeze the roasted lemon over the chicken.'
    ],
    tips: [
      'Pat the skin dry.',
      'Work the herbs under the skin.',
      'If your oven runs hot, check at 32 minutes.',
      'Rest before serving.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Roasted carrots', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Good cold in sandwiches.',
    nut: [422, 50, 6, 22, 2, 1, 820]
  },

  'pulled-pork-tacos': {
    d: 'Cooked pulled pork warmed with barbecue sauce and lime, piled into warm corn tortillas with pickled onion and coriander.',
    meta: 'Pulled pork tacos: cooked pulled pork warmed with barbecue sauce and lime, piled into warm tortillas with pickled onion and coriander. Six servings.',
    kw: ['pulled pork tacos', 'bbq pulled pork tacos', 'easy pulled pork tacos', 'pulled pork tacos with pickled onion', 'leftover pulled pork tacos'],
    why: 'Pulled pork is the perfect leftover, and tacos are the best use of it: soft tortillas, tender meat and something sharp to cut the richness. The work was done when the pork cooked; this is the assembly.\n\nWarm the pork in a pan with a splash of water, the barbecue sauce and a squeeze of lime. **Let it sizzle for the last minute** so some of the edges crisp and catch, which gives texture against the tender meat.\n\nQuick-pickle the red onion while it heats: slice it thin, cover with lime juice, vinegar and a pinch of salt and sugar, and leave for 10 minutes. It turns pink and loses its harsh bite.\n\nWarm the tortillas, one at a time, in a dry pan for 20 seconds a side until pliable and speckled. Spoon the pork onto the tortillas and top with the pickled onion, coriander and a little soured cream or hot sauce.',
    ing: [
      '600 g cooked pulled pork',
      '100 ml barbecue sauce',
      '4 tbsp water',
      '2 limes, juiced',
      '1 red onion, thinly sliced',
      '2 tbsp white wine vinegar',
      '1 tsp sugar',
      '1/2 tsp salt',
      '12 small corn tortillas',
      '2 tbsp chopped coriander',
      '4 tbsp soured cream'
    ],
    st: [
      'Cover the onion with the juice of 1 lime, the vinegar, sugar and salt and leave for 10 minutes.',
      'Warm the pork in a pan with the barbecue sauce, water and the juice of the second lime for 8 minutes, letting it sizzle for the last minute.',
      'Warm the tortillas in a dry pan for 20 seconds per side.',
      'Fill with the pork, pickled onion, coriander and soured cream.'
    ],
    tips: [
      'Let the pork crisp at the end.',
      'Pickle the onion while the pork heats.',
      'Warm the tortillas to make them pliable.',
      'Add the lime to taste.'
    ],
    pair: ['Black beans', 'Mexican rice', 'Corn salsa', 'Lime wedges'],
    store: 'The pork keeps in the fridge for 3 days. Assemble the tacos at the table.',
    nut: [359, 30, 26, 15, 3, 7, 730]
  },

  'gammon-steak': {
    d: 'A thick gammon steak pan-fried for 12 minutes and served with a fried egg, pineapple rings and chips.',
    meta: 'Gammon steak: a thick gammon steak pan-fried until the fat is golden, served with a fried egg and grilled pineapple rings. Two servings.',
    kw: ['gammon steak', 'pan fried gammon steak', 'gammon steak with egg and pineapple', 'easy gammon steak', 'gammon steak and chips'],
    why: 'Gammon is cured pork, and it already tastes of a day in the salt and smoke. That makes it one of the easiest cuts to cook, with nothing to season and no need for a sauce.\n\nSnip the rind at 2 cm intervals so the steak does not curl as the fat shrinks. Pat it dry and fry in a little oil over medium heat for 5 minutes a side. **Stand it on its fat edge for the last minute** to crisp and brown it.\n\nFry the pineapple rings in the same pan for 2 minutes a side so they caramelise, and fry the eggs in a second pan, with the whites set and the yolks soft.\n\nIf your pan runs hot, check the steak at 4 minutes. It is cooked when the meat is pale pink all through, with no raw look. Serve with chips, or with peas and mustard on the side, and let the egg yolk run into the meat.',
    ing: [
      '2 gammon steaks, about 250 g each',
      '1 tbsp vegetable oil',
      '4 tinned pineapple rings in juice',
      '2 eggs',
      '1 tsp butter',
      '300 g oven chips',
      '1/2 tsp black pepper'
    ],
    st: [
      'Snip the rind of the gammon at 2 cm intervals. Pat dry.',
      'Heat the oil in a frying pan over medium heat and fry the steaks for 5 minutes per side, standing them on their fat edge for the last minute.',
      'Fry the pineapple rings in the pan for 2 minutes per side. Fry the eggs in the butter in a second pan.',
      'Serve the gammon topped with the egg and pineapple, with the pepper and chips.'
    ],
    tips: [
      'Snip the rind so it lies flat.',
      'Crisp the fat edge.',
      'If your pan runs hot, check at 4 minutes.',
      'Cook the egg last.'
    ],
    pair: ['Chips', 'Peas', 'Mustard', 'Parsley sauce'],
    store: 'Best eaten at once. Cooked gammon keeps in the fridge for 3 days.',
    nut: [814, 62, 65, 34, 7, 17, 2960]
  },

  'bacon-mac-and-cheese': {
    d: 'Macaroni in a thick cheddar sauce with crisp bacon, topped with breadcrumbs and cooked for 20 minutes.',
    meta: 'Bacon mac and cheese: macaroni in a thick cheddar sauce with crisp bacon, topped with breadcrumbs and baked until golden. Six servings.',
    kw: ['bacon mac and cheese', 'baked bacon mac and cheese', 'creamy bacon mac and cheese', 'mac and cheese with bacon', 'bacon macaroni cheese'],
    why: 'Bacon does for mac and cheese what salt does for chips: it sharpens everything. The fat in the pan can start the sauce, which is a good use of something you would otherwise discard.\n\nFry the bacon until crisp, then pour off all but a spoonful of the fat. Melt the butter into it, stir in the flour and cook for a minute, then whisk in warm milk a little at a time. **Warm milk goes in smoothly**; cold milk makes lumps.\n\nSimmer the sauce for 5 minutes until it coats a spoon, then take it off the heat and stir in the cheddar a handful at a time. Add mustard powder, pepper and a pinch of nutmeg.\n\nFold in the macaroni, cooked 2 minutes short of tender, and the bacon. Tip into a dish and top with the breadcrumbs and a little more cheese. Cook at 200°C for 20 minutes until golden. If your oven runs hot, check at 15 minutes.',
    ing: [
      '300 g macaroni',
      '200 g streaky bacon, chopped',
      '40 g butter',
      '40 g plain flour',
      '600 ml milk, warmed',
      '250 g mature cheddar, grated',
      '1 tsp mustard powder',
      '1/2 tsp black pepper',
      '1 pinch ground nutmeg',
      '40 g breadcrumbs'
    ],
    st: [
      'Heat the oven to 200°C. Boil the macaroni for 2 minutes less than the packet says and drain.',
      'Fry the bacon for 8 minutes until crisp, drain on paper and pour off all but 1 tbsp of the fat.',
      'Melt the butter in the pan, stir in the flour for 1 minute, whisk in the milk and simmer for 5 minutes. Off the heat, stir in 200 g of the cheddar, the mustard powder, pepper and nutmeg.',
      'Fold in the macaroni and bacon, tip into a dish and top with the breadcrumbs and remaining cheddar. Cook for 20 minutes until golden.'
    ],
    tips: [
      'Warm the milk before whisking it in.',
      'Take the sauce off the heat before the cheese.',
      'If your oven runs hot, check at 15 minutes.',
      'Undercook the macaroni.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Coleslaw', 'Pulled pork'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of milk.',
    nut: [576, 28, 53, 28, 2, 7, 870]
  },

  'beef-kebabs': {
    d: 'Beef sirloin cubes marinated in olive oil, lemon, garlic and oregano and grilled on skewers with peppers and onion for 10 minutes.',
    meta: 'Beef kebabs: beef sirloin cubes marinated in olive oil, lemon, garlic and oregano and grilled on skewers with peppers and onion. Four servings.',
    kw: ['beef kebabs', 'grilled beef kebabs', 'beef skewers with peppers', 'easy beef kebabs', 'marinated beef kebabs'],
    why: 'The best kebab is a piece of meat that is both charred outside and pink inside, and that depends on the cut and the size. Use sirloin, which is tender enough to grill, and cut it into 3 cm cubes.\n\nThe marinade is olive oil, lemon, garlic, oregano and a little salt. Lemon juice tenderises, but too long turns the surface chalky. **Leave the beef in it for 30 minutes to 2 hours**, not overnight.\n\nThread the beef onto skewers with pieces of pepper and red onion, packing them loosely. Gaps let the heat in, and crowded kebabs steam.\n\nGrill over high heat for 10 minutes, turning every 2 to 3 minutes, until the edges are charred and the beef is medium. If your grill runs hot, check at 7 minutes. Rest for 3 minutes, then serve in warm flatbread with yoghurt sauce and salad. Metal skewers are the safest choice, because wooden ones can scorch before the beef is done.',
    ing: [
      '700 g beef sirloin, cut into 3 cm cubes',
      '4 tbsp olive oil',
      '2 tbsp lemon juice',
      '3 garlic cloves, grated',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1 red pepper, cut into chunks',
      '1 green pepper, cut into chunks',
      '1 red onion, cut into wedges'
    ],
    st: [
      'Mix the oil, lemon juice, garlic, oregano and salt, add the beef and leave for at least 30 minutes.',
      'Thread the beef, peppers and onion onto skewers, leaving small gaps.',
      'Heat the grill to high and cook the kebabs for 10 minutes, turning every 2 to 3 minutes.',
      'Rest for 3 minutes.'
    ],
    tips: [
      'Cut the beef into even cubes.',
      'Do not marinate overnight.',
      'If your grill runs hot, check at 7 minutes.',
      'Leave gaps between the pieces.'
    ],
    pair: ['Flatbread', 'Tzatziki', 'Greek salad', 'Rice pilaf'],
    store: 'Keeps in the fridge for 3 days. Eat cold in wraps.',
    nut: [440, 38, 9, 28, 2, 5, 690]
  },

  'lamb-stew': {
    d: 'Lamb shoulder simmered for 2 hours with carrots, potatoes, onion and thyme in a thick, savoury gravy.',
    meta: 'Lamb stew: lamb shoulder simmered for 2 hours with carrots, potatoes, onion and thyme in a thick, savoury gravy. Six servings.',
    kw: ['lamb stew', 'traditional lamb stew', 'slow simmered lamb stew', 'lamb and vegetable stew', 'british lamb stew'],
    why: 'A lamb stew is about patience: a cut with a good deal of fat and connective tissue, and enough time for both to dissolve. Shoulder is the right choice, as it is rich and forgiving.\n\nTrim off thick pieces of fat but leave some, since it flavours the gravy. Brown the lamb in batches. **Overcrowding the pan makes the meat steam**, not brown, and you lose the colour that gives a stew its depth.\n\nSoften the onion and carrot, stir in the flour, then add the stock, thyme and bay and bring to a simmer. Return the lamb, cover and cook at a bare simmer for 1 hour 15 minutes.\n\nAdd the potatoes and simmer for 45 minutes more, until the lamb is tender and the potatoes hold their shape. If your hob runs hot, check at 1 hour 30 minutes. Skim off any fat, taste, and season with salt and a splash of vinegar.',
    ing: [
      '1 kg boneless lamb shoulder, cubed',
      '2 tbsp vegetable oil',
      '2 onions, chopped',
      '3 carrots, thickly sliced',
      '2 tbsp plain flour',
      '800 ml lamb or beef stock',
      '2 g thyme sprigs',
      '2 bay leaves',
      '600 g potatoes, cut into chunks',
      '1 tsp salt',
      '1 tsp white wine vinegar'
    ],
    st: [
      'Brown the lamb in the oil in batches and set aside.',
      'Soften the onions and carrots for 6 minutes. Stir in the flour for 1 minute, then add the stock, thyme and bay and bring to a simmer.',
      'Return the lamb, cover and simmer very gently for 1 hour 15 minutes.',
      'Add the potatoes and simmer for 45 minutes more. Skim off the fat and season with the salt and vinegar.'
    ],
    tips: [
      'Brown the lamb in batches.',
      'Keep to a bare simmer.',
      'Add the potatoes later so they hold their shape.',
      'If your hob runs hot, check at 1 hour 30 minutes.'
    ],
    pair: ['Crusty bread', 'Buttered cabbage', 'Mashed swede', 'Mint sauce'],
    store: 'Keeps in the fridge for 4 days and improves overnight. Reheat gently.',
    nut: [582, 33, 27, 38, 4, 4, 980]
  }
};
