'use strict';

/**
 * Volume twenty-one — the American-Chinese takeaway, shrimp, and the one-pan
 * weeknight dinner.
 *
 * Orange chicken, sesame chicken and General Tso's were already here; sweet and
 * sour chicken, Mongolian beef, egg rolls and crab rangoon were the rest of the
 * takeaway menu. The shrimp and the one-pot and sheet-pan dinners fill the
 * other gap: food made in the time it takes to set the table.
 */

module.exports = {
  'sweet-and-sour-chicken': {
    d: 'Crisp-coated chicken tossed in a glossy red sauce with pineapple and peppers, the takeaway way. Forty-five minutes.',
    meta: 'Sweet and sour chicken: crisp cornflour-coated chicken in a glossy sweet-tart sauce with pineapple and peppers. Better than the takeaway.',
    kw: ['sweet and sour chicken', 'sweet and sour chicken recipe', 'chinese takeaway sweet and sour chicken', 'crispy sweet and sour chicken', 'sweet and sour sauce for chicken'],
    why: 'The two things that go wrong are a soggy coating and a sauce that tastes only of sugar. Cornflour with a little plain flour gives a coating that stays crisp for the half-minute it takes to toss, and the sauce goes on off the heat at the very last moment, so the chicken is glazed rather than soaked. The vinegar matters as much as the sugar: at nearly equal weights the sauce is bright rather than cloying, and the pineapple juice rounds it out.',
    ing: [
      '# For the chicken',
      '600 g boneless skinless chicken breasts, cut into 3 cm pieces',
      '1 egg, beaten',
      '60 g cornflour',
      '30 g plain flour',
      '0.5 tsp fine sea salt',
      '0.25 tsp white pepper',
      '500 ml vegetable oil, for frying',
      '# For the sauce',
      '100 g caster sugar',
      '80 ml rice vinegar',
      '80 ml pineapple juice, from the tin',
      '60 ml tomato ketchup',
      '1 tbsp soy sauce',
      '1 tbsp cornflour',
      '2 tbsp cold water',
      '# For the vegetables',
      '1 tbsp vegetable oil',
      '1 red pepper, cut into chunks',
      '1 green pepper, cut into chunks',
      '1 small onion, cut into wedges',
      '200 g tinned pineapple chunks in juice, drained',
      '2 garlic cloves, minced'
    ],
    st: [
      'Toss the chicken with the salt, pepper and egg, then add the cornflour and plain flour and mix until every piece is coated.',
      'Whisk the sugar, vinegar, pineapple juice, ketchup and soy sauce in a small pan and bring to a simmer. Stir in the cornflour mixed with the water and simmer 1 minute until thick and glossy. Keep warm.',
      'Heat the frying oil to 180°C / 350°F in a wok or deep pan.',
      'Fry the chicken in two batches for 4 to 5 minutes each, until golden and cooked through. Drain on a rack.',
      'Heat the tablespoon of oil in a clean wok over high heat and stir-fry the peppers and onion for 3 minutes until they blister but stay crunchy.',
      'Add the garlic and pineapple and stir-fry 30 seconds.',
      'Return the chicken, pour over the sauce and toss for 30 seconds until everything is glazed.',
      'Serve immediately over rice.'
    ],
    tips: [
      'Toss with the sauce at the last moment. The coating stays crisp for about a minute.',
      'Fry at 180°C. Cooler oil makes a heavy, greasy coating.',
      'Cut the peppers into big chunks so they stay crunchy against the soft pineapple.'
    ],
    pair: ['Steamed jasmine rice', 'Egg fried rice', 'A cold lager'],
    store: 'Best eaten straight away. Refrigerate up to 2 days and re-crisp the chicken in a 200°C oven for 8 minutes, keeping the sauce apart. Not suitable for freezing.',
    nut: [564, 34, 62, 20, 3, 40, 1150]
  },

  'mongolian-beef': {
    d: 'Flank steak sliced thin, coated in cornflour, seared fast and tossed in a dark garlic-ginger soy glaze with spring onions. Thirty minutes.',
    meta: 'Mongolian beef: thin flank steak coated in cornflour, seared quickly and glazed in a sweet, savoury garlic-ginger soy sauce with spring onions.',
    kw: ['mongolian beef', 'mongolian beef recipe', 'better than takeout mongolian beef', 'mongolian beef sauce', 'mongolian beef with flank steak'],
    why: 'Slicing the steak across the grain, and very thin, is what makes flank tender, and a cornflour coating protects it in the hot oil and gives the sauce something to cling to. The sauce is mostly soy sauce and brown sugar, cooked briefly with garlic and ginger until it thickens, and the beef goes back in only at the end. Two minutes in the sauce is enough; any longer and the coating goes soft and the meat tough.',
    ing: [
      '500 g flank steak',
      '3 tbsp cornflour',
      '4 tbsp vegetable oil, divided',
      '4 garlic cloves, minced',
      '1 tbsp grated ginger',
      '120 ml soy sauce',
      '120 ml water',
      '100 g light brown sugar',
      '1 tsp cornflour, mixed with 1 tbsp cold water',
      '4 spring onions, cut into 4 cm lengths',
      '1 tsp toasted sesame oil',
      'Cooked rice, to serve'
    ],
    st: [
      'Slice the steak across the grain into strips 5 mm thick and toss with the cornflour until lightly coated.',
      'Whisk the soy sauce, water and sugar together.',
      'Heat 3 tablespoons of the oil in a wok over high heat until smoking. Fry the beef in two batches for 1 to 2 minutes, until browned at the edges but still pink in the middle. Lift out.',
      'Wipe out the wok, add the remaining oil and cook the garlic and ginger over medium heat for 30 seconds.',
      'Pour in the soy mixture and simmer 3 minutes until slightly reduced. Stir in the cornflour mixture and cook 1 minute until glossy.',
      'Return the beef with the spring onions and toss for 1 to 2 minutes, until glazed.',
      'Take off the heat, stir in the sesame oil and serve over rice.'
    ],
    tips: [
      'Freeze the steak for 20 minutes first and it slices thinner and cleaner.',
      'Cook the beef in two batches so it browns instead of stewing.',
      'Return it to the sauce for no more than two minutes.'
    ],
    pair: ['Steamed rice', 'Stir-fried broccoli', 'Egg drop soup'],
    store: 'Refrigerate up to 3 days and reheat quickly in a hot pan. Freeze cooked beef for 2 months, though the coating softens.',
    nut: [478, 34, 36, 22, 1, 28, 1400]
  },

  'egg-rolls': {
    d: 'Cabbage, carrot and pork wrapped in a thick wonton skin and fried until blistered and crisp. The takeaway starter, in sixty minutes.',
    meta: 'Egg rolls filled with seasoned pork, cabbage and carrot, wrapped in egg roll wrappers and deep-fried until blistered, golden and crisp.',
    kw: ['egg rolls', 'egg rolls recipe', 'chinese takeout egg rolls', 'pork egg rolls', 'homemade egg rolls with cabbage'],
    why: 'The filling has to be dry. The pork is cooked until its liquid has gone and the cabbage is cooked until the pan is dry, because any moisture turns to steam inside the wrapper and splits it or leaves it soggy. Egg roll wrappers are thicker than spring roll ones, which is why they blister into a crisp, bubbly shell rather than a shattering thin one. Rolling them tight and sealing the last corner with flour paste keeps the oil out.',
    ing: [
      '# For the filling',
      '250 g minced pork',
      '1 tbsp vegetable oil',
      '4 garlic cloves, minced',
      '1 tbsp grated ginger',
      '400 g finely shredded white cabbage',
      '2 carrots, grated',
      '4 spring onions, finely sliced',
      '2 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp toasted sesame oil',
      '0.5 tsp white pepper',
      '1 tsp sugar',
      '# To assemble and fry',
      '16 egg roll wrappers',
      '1 tbsp plain flour, mixed with 2 tbsp water',
      '1 litre vegetable oil, for frying',
      'Sweet chilli sauce or hot mustard, to serve'
    ],
    st: [
      'Heat the oil in a large wok over high heat and cook the pork for 4 minutes, breaking it up, until no pink remains.',
      'Add the garlic and ginger for 30 seconds, then the cabbage and carrots, and stir-fry 4 minutes until the cabbage wilts.',
      'Stir in the soy sauce, oyster sauce, sesame oil, pepper and sugar and cook 2 minutes until the pan is dry.',
      'Stir in the spring onions, tip onto a tray, spread out and cool completely.',
      'Place a wrapper with one corner towards you and put 3 tablespoons of filling just below the centre. Fold the bottom corner over the filling, fold in both sides and roll up tightly, sealing the last corner with the flour paste.',
      'Heat the frying oil to 180°C / 350°F in a deep pan.',
      'Fry 4 rolls at a time for 3 to 4 minutes, turning, until blistered and deep golden.',
      'Drain on a rack and rest 3 minutes before serving with sweet chilli sauce.'
    ],
    tips: [
      'Cool the filling completely before rolling, or steam splits the wrappers.',
      'Roll tight and seal the last corner with the paste so oil cannot get in.',
      'Keep the oil at 180°C and fry in small batches so the temperature stays up.'
    ],
    pair: ['Sweet chilli sauce', 'Hot and sour soup', 'Egg fried rice'],
    store: 'Refrigerate cooked rolls up to 3 days and re-crisp at 200°C for 8 minutes. Freeze uncooked rolls on a tray, then in a bag, for 2 months and fry from frozen for 6 minutes.',
    nut: [337, 12, 34, 17, 3, 4, 620]
  },

  'crab-rangoon': {
    d: 'Wonton wrappers pinched around cream cheese, crab and spring onion and fried until the corners blister. Thirty-seven minutes.',
    meta: 'Crab rangoon: crisp fried wontons filled with cream cheese, crab and spring onion, with sweet chilli sauce for dipping.',
    kw: ['crab rangoon', 'crab rangoon recipe', 'crab rangoon wontons', 'cream cheese wontons', 'homemade crab rangoon'],
    why: 'Cream cheese is the reason it works: it stays soft and molten inside the crisp skin while the crab supplies sweetness, and a little garlic powder and Worcestershire sauce stand in for the seasoning takeaways rely on. Squeezing every drop of water out of the crab keeps the filling from weeping into the wrapper, and folding the wonton into a sealed pouch, with water on the seams, stops it bursting in the oil.',
    ing: [
      '225 g cream cheese, softened',
      '170 g white crab meat, well drained, or imitation crab, finely chopped',
      '3 spring onions, finely sliced',
      '1 tsp Worcestershire sauce',
      '0.5 tsp garlic powder',
      '0.25 tsp fine sea salt',
      '24 wonton wrappers',
      'Water, for sealing',
      '750 ml vegetable oil, for frying',
      'Sweet chilli sauce, to serve'
    ],
    st: [
      'Squeeze the crab in a clean tea towel until dry, then mix with the cream cheese, spring onions, Worcestershire sauce, garlic powder and salt until smooth.',
      'Put a wrapper on the counter with 2 teaspoons of filling in the centre and wet the edges with a fingertip of water.',
      'Fold the wrapper into a triangle, pressing out the air, then bring the two long corners together over the filling and pinch to seal into a pouch. Repeat with the rest.',
      'Heat the oil to 175°C / 350°F in a deep pan.',
      'Fry 5 or 6 at a time for 2 minutes, turning, until golden and blistered. Drain on a rack.',
      'Rest 2 minutes, since the filling is very hot, and serve with sweet chilli sauce.'
    ],
    tips: [
      'Dry the crab thoroughly. A wet filling splits the wrappers.',
      'Press out the air and seal every seam or the oil gets in.',
      'Fry at 175°C. Hotter burns the wrapper before the cheese melts.'
    ],
    pair: ['Sweet chilli sauce', 'Egg rolls', 'Hot and sour soup'],
    store: 'Best eaten hot. Refrigerate up to 2 days and re-crisp at 200°C for 6 minutes. Freeze uncooked filled wontons for 2 months and fry from frozen for 3 minutes.',
    nut: [281, 10, 22, 17, 1, 1, 420]
  },

  'cajun-shrimp': {
    d: 'Large shrimp tossed in a smoky homemade Cajun seasoning and seared in garlic butter with lemon. Eighteen minutes.',
    meta: 'Cajun shrimp: large shrimp coated in a smoky homemade Cajun spice blend and seared in garlic butter with lemon. On the table in eighteen minutes.',
    kw: ['cajun shrimp', 'cajun shrimp recipe', 'cajun garlic butter shrimp', 'homemade cajun seasoning for shrimp', 'cajun shrimp skillet'],
    why: 'Shrimp cook in two or three minutes, which is exactly why they are so easy to ruin: as soon as they curl from a C into an O they are overdone. The seasoning has to be fierce because there is no time to build flavour in the pan, so the blend leans on smoked paprika and cayenne with garlic and onion powder, oregano and thyme. Finishing with the butter off the heat turns the spices into a sauce instead of scorching them.',
    ing: [
      '700 g large raw shrimp, peeled and deveined',
      '# For the Cajun seasoning',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp dried oregano',
      '1 tsp dried thyme',
      '1 tsp fine sea salt',
      '0.5 tsp cayenne pepper',
      '0.5 tsp black pepper',
      '# For the pan',
      '1 tbsp olive oil',
      '3 tbsp unsalted butter',
      '4 garlic cloves, minced',
      '1 lemon, half juiced, half cut into wedges',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Mix the seasoning ingredients in a small bowl.',
      'Pat the shrimp very dry and toss with the seasoning.',
      'Heat the oil in a large skillet over high heat until it shimmers.',
      'Add the shrimp in a single layer and sear 90 seconds without moving, until pink and browned underneath.',
      'Turn, add half the butter and the garlic and cook 60 seconds, until the shrimp are pink and curled into loose C shapes.',
      'Take off the heat and stir in the remaining butter, the lemon juice and the parsley until the butter melts into a sauce.',
      'Serve straight away with lemon wedges.'
    ],
    tips: [
      'Dry the shrimp. Wet shrimp steam and turn rubbery.',
      'Pull them the moment they form a loose C. A tight O means overcooked.',
      'Add the second spoon of butter off the heat so the sauce stays creamy.'
    ],
    pair: ['Cheesy grits', 'Steamed rice', 'A crisp lager'],
    store: 'Best eaten immediately. Refrigerate up to 2 days and warm gently, or eat cold in a salad. Freezing spoils the texture.',
    nut: [287, 35, 3, 15, 1, 1, 1100]
  },

  'coconut-shrimp': {
    d: 'Shrimp dredged in flour, dipped in egg and rolled in panko and coconut, then fried until crisp and golden. Thirty-seven minutes.',
    meta: 'Coconut shrimp: large shrimp in a crisp panko and coconut crust, fried until golden and served with a sweet chilli or pineapple dipping sauce.',
    kw: ['coconut shrimp', 'coconut shrimp recipe', 'crispy coconut shrimp', 'fried coconut shrimp with sweet chili sauce', 'panko coconut shrimp'],
    why: 'Coconut burns faster than breadcrumbs because of its sugar and fat, which is why the coating is mostly panko with the coconut as the accent, and why the oil should stay at 175°C. The three-stage coating of flour, then egg, then crumbs gives each layer something to grip; leaving out the flour is the usual reason a coating slides off in the oil. Shrimp this size need only two minutes a side, so the coating and the shrimp finish together.',
    ing: [
      '500 g large raw shrimp, peeled and deveined, tails left on',
      '60 g plain flour',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper',
      '2 large eggs, beaten',
      '100 g panko breadcrumbs',
      '60 g unsweetened desiccated coconut',
      '750 ml vegetable oil, for frying',
      'Sweet chilli sauce or pineapple salsa, to serve'
    ],
    st: [
      'Pat the shrimp very dry. Set out three shallow dishes: the flour mixed with the salt and pepper, the beaten eggs, and the panko mixed with the coconut.',
      'Hold each shrimp by the tail and dredge in the flour, dip in the egg and press firmly into the panko and coconut. Set on a tray.',
      'Heat the oil to 175°C / 350°F in a deep pan.',
      'Fry the shrimp in batches of 6 for 2 minutes a side, until golden brown.',
      'Drain on a rack and season with a pinch of salt.',
      'Serve hot with the dipping sauce.'
    ],
    tips: [
      'Do not skip the flour. It is what makes the crumb stick.',
      'Keep the oil at 175°C, since coconut scorches above that.',
      'Fry small batches so the oil stays hot and the shrimp do not steam.'
    ],
    pair: ['Sweet chilli sauce', 'Mango salsa', 'Coconut rice'],
    store: 'Best eaten hot. Refrigerate up to 2 days and re-crisp at 200°C for 5 minutes. Freeze the breaded, uncooked shrimp for 2 months and fry from frozen for 3 minutes a side.',
    nut: [410, 31, 31, 18, 4, 3, 950]
  },

  'one-pot-chili-mac': {
    d: 'Chili and macaroni cheese in one pot: beef, beans and spices, with the pasta cooked right in the sauce. Forty minutes.',
    meta: 'One-pot chili mac: ground beef, beans, tomatoes and chili spices with macaroni cooked in the sauce and finished with melted cheddar.',
    kw: ['chili mac', 'chili mac recipe', 'one pot chili mac', 'chili mac and cheese', 'beef and bean chili macaroni'],
    why: 'The macaroni cooks straight in the chili, so its starch thickens the sauce and it takes its flavour from the broth instead of from water poured away. The trick is the ratio: enough stock that the pasta is covered while it simmers and no more, so the sauce is thick by the time the pasta is done. The cheddar goes in off the heat, so it melts smooth instead of splitting into oil.',
    ing: [
      '1 tbsp olive oil',
      '500 g beef mince',
      '1 onion, diced',
      '1 green pepper, diced',
      '3 garlic cloves, minced',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp fine sea salt',
      '2 tbsp tomato purée',
      '1 tin (400 g) chopped tomatoes',
      '1 tin (400 g) kidney beans, drained and rinsed',
      '600 ml beef stock',
      '250 g macaroni',
      '200 g sharp cheddar, grated',
      'Sliced spring onions and soured cream, to serve'
    ],
    st: [
      'Heat the oil in a large deep pot over medium-high heat and brown the beef with the onion and pepper for 8 minutes, breaking up the meat.',
      'Add the garlic, chili powder, cumin, paprika, oregano and salt and cook 1 minute.',
      'Stir in the tomato purée and cook 1 minute.',
      'Add the tomatoes, beans and stock and bring to a boil.',
      'Stir in the macaroni, cover and simmer 12 to 14 minutes, stirring every few minutes so it does not stick, until the pasta is tender and the sauce has thickened. Everything cooks in the one pot.',
      'Take off the heat, stir in three quarters of the cheddar until melted and rest 5 minutes.',
      'Top with the rest of the cheddar, the spring onions and soured cream.'
    ],
    tips: [
      'Stir often once the pasta goes in. Macaroni catches on the base.',
      'Add the cheese off the heat so it melts smooth.',
      'If it looks dry before the pasta is tender, add a splash of stock.'
    ],
    pair: ['Cornbread', 'A crisp green salad', 'A cold beer'],
    store: 'Refrigerate up to 4 days. It thickens as it sits, so loosen with stock when reheating. Freeze for 2 months, though the pasta softens.',
    nut: [518, 30, 50, 22, 8, 7, 1150]
  },

  'sheet-pan-chicken-and-vegetables': {
    d: 'Bone-in chicken thighs, potatoes, carrots and broccoli roasted together on one tray with lemon and garlic. Fifty-five minutes.',
    meta: 'Sheet pan chicken and vegetables: bone-in thighs, potatoes, carrots and broccoli roasted on one tray with lemon, garlic and herbs.',
    kw: ['sheet pan chicken and vegetables', 'sheet pan chicken thighs', 'one pan chicken and vegetables', 'sheet pan dinner', 'roasted chicken thighs with potatoes and broccoli'],
    why: 'Different vegetables need different times, so they are cut to different sizes and added in stages: potatoes and carrots go in with the chicken, and the broccoli joins for the last fifteen minutes so it browns instead of turning to mush. A hot oven crisps the skin while the potatoes cook in the rendered chicken fat, which is what makes the tray taste better than its parts. Use a large rimmed tray, since crowding steams everything.',
    ing: [
      '8 bone-in skin-on chicken thighs, about 1.2 kg',
      '600 g baby potatoes, halved',
      '3 carrots, cut into 2 cm chunks',
      '1 red onion, cut into wedges',
      '300 g broccoli florets',
      '4 tbsp olive oil, divided',
      '4 garlic cloves, minced',
      '1 lemon, zest and juice',
      '2 tsp dried oregano',
      '1 tsp smoked paprika',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 220°C / 425°F with a large rimmed tray inside.',
      'Toss the potatoes, carrots and onion in 2 tablespoons of the oil, half the salt and a pinch of pepper.',
      'Mix the remaining oil with the garlic, lemon zest, oregano, paprika, remaining salt and pepper and rub all over the chicken.',
      'Carefully spread the vegetables over the hot tray and nestle the chicken skin side up between them. Everything roasts on the one tray.',
      'Roast 25 minutes.',
      'Toss the broccoli with a little oil and tuck it around the chicken. Roast 15 minutes more, until the skin is crisp and the chicken reaches 74°C / 165°F.',
      'Squeeze the lemon juice over the tray and scatter with parsley.'
    ],
    tips: [
      'Preheat the tray so the vegetables sizzle when they land.',
      'Add the broccoli late or it burns before the potatoes are done.',
      'Do not overcrowd. Use two trays if needed, or the vegetables steam.'
    ],
    pair: ['A green salad', 'Garlic yogurt sauce', 'A dry white wine'],
    store: 'Refrigerate up to 3 days and reheat in a 200°C oven for 15 minutes. Freeze cooked chicken for 2 months.',
    nut: [558, 42, 30, 30, 6, 5, 850]
  }
};
