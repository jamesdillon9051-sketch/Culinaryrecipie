'use strict';

/**
 * Volume fifty-four — one pot dinners, sheet pan meals, slow cooker favourites
 * and weeknight classics, second part.
 *
 * Twenty-five dishes: a salmon salad, a sausage egg bake, sausage stuffing,
 * sausage and mash, two seafood pastas, nine sheet pan dinners (breakfast
 * hash, chicken parmesan, cod, fish tacos, honey mustard chicken, lemon
 * chicken, pork chops, quesadillas, roast chicken, steak, teriyaki chicken),
 * shrimp alfredo, shrimp fettuccine and six slow cooker dishes (baked beans,
 * brisket, chili mac, stroganoff, butter chicken, cacciatore). Nutrition is
 * estimated by npm run calc.
 */

module.exports = {
  'salmon-salad': {
    d: 'Pan-seared salmon fillets flaked over mixed leaves, cucumber, avocado and radishes with a lemon and dill dressing.',
    meta: 'Salmon salad with avocado, cucumber and a lemon dill dressing. Two servings, ready in 22 minutes.',
    kw: ['salmon salad', 'warm salmon salad', 'salmon salad with avocado', 'lemon dill salmon salad', 'seared salmon salad'],
    why: 'A lunch for two, and a good use of a salmon fillet that is too good to bury in a sandwich. The salmon is cooked simply, skin side down in a hot pan, and flaked over a salad while it is still warm. The contrast between warm fish and cold crisp leaves is what makes this more than a pile of lettuce.\n\nCook the fillets for about 5 minutes on the skin side, until the skin is crisp and the flesh has turned opaque about two thirds of the way up, then flip for 1 to 2 minutes. They should still be a touch translucent in the centre, because the heat carries on after they leave the pan. Overcooked salmon in a salad is dry and chalky.\n\n**Dress the leaves lightly and the salmon separately.** A thin, sharp dressing of lemon juice, olive oil, Dijon mustard and fresh dill coats the leaves without weighing them down. Spoon a little over the fish rather than tossing it, so the flakes stay whole.\n\nCucumber, radishes and spring onion supply crunch, and a ripe avocado brings creaminess. Serve right away, while the salmon is warm and the leaves are still firm, with crusty bread alongside.',
    ing: [
      '2 salmon fillets, about 300 g, skin on',
      '1/2 tsp salt',
      '1 tbsp olive oil',
      '120 g mixed salad leaves',
      '1/2 cucumber, sliced',
      '4 radishes, thinly sliced',
      '1 avocado, sliced',
      '2 spring onions, sliced',
      '3 tbsp olive oil, for the dressing',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tbsp fresh dill, chopped'
    ],
    st: [
      'Whisk the 3 tbsp olive oil, lemon juice, mustard and dill with a pinch of salt.',
      'Pat the salmon dry and season with the salt. Heat the 1 tbsp oil in a frying pan over medium-high heat.',
      'Cook the salmon skin side down for 5 minutes, then flip and cook for 2 minutes more. Rest for 2 minutes.',
      'Toss the leaves, cucumber, radishes and spring onions with two thirds of the dressing and divide between 2 plates.',
      'Top with the avocado, flake the salmon over the top and spoon over the remaining dressing.'
    ],
    tips: [
      'Cook the salmon until just opaque.',
      'Dress the leaves at the last moment.',
      'Flake the fish by hand to keep the pieces large.'
    ],
    pair: ['Crusty bread', 'New potatoes', 'Lemon wedges', 'Cold white wine'],
    store: 'Best eaten at once. Leftover salmon keeps for 2 days in the fridge.',
    nut: [706, 33, 13, 58, 7, 4, 720]
  },

  'sausage-egg-bake': {
    d: 'Sausage, bread cubes, cheddar and eggs soaked in milk and baked for 35 minutes until puffed and golden, a make-ahead brunch for six.',
    meta: 'Sausage egg bake with bread, cheddar and a mustard custard, baked for 35 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['sausage egg bake', 'sausage and egg breakfast casserole', 'make ahead breakfast bake', 'egg and sausage casserole', 'brunch egg bake'],
    why: 'Sausage and eggs have been breakfast partners in British and American kitchens for as long as either has had breakfast, and a bake is the way to feed a table of six without standing at the stove. Everything is assembled the night before, left to soak, and baked while you pour the coffee.\n\nThe structure is bread, sausage, cheese and an egg custard. Use day-old bread cut into 2 cm cubes, which holds its shape and soaks up the custard without turning to paste. Fresh bread collapses. Brown the sausage meat first, crumbling it into small pieces, and drain off any excess fat before layering.\n\n**Let it sit for at least 30 minutes before baking.** The bread needs time to absorb the custard, and in an overnight rest in the fridge it drinks in nearly all of it, giving a bake that is soft and set all the way through instead of eggy at the bottom.\n\nA spoonful of English mustard in the custard cuts through the richness of the cheese and sausage without tasting hot. Bake until puffed, golden at the edges and just firm in the middle, and rest for 5 minutes before cutting. Squares reheat well in the microwave.',
    ing: [
      '400 g pork sausages, casings removed',
      '1 tbsp olive oil',
      '300 g day-old white bread, cut into 2 cm cubes',
      '150 g cheddar, grated',
      '8 eggs',
      '500 ml milk',
      '1 tbsp English mustard',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '3 spring onions, sliced'
    ],
    st: [
      'Heat the oil in a pan and brown the sausage meat for 8 minutes, crumbling it. Drain off any fat.',
      'Spread the bread cubes in a greased 23 by 33 cm baking dish. Scatter over the sausage, spring onions and two thirds of the cheddar.',
      'Whisk the eggs, milk, mustard, salt and pepper. Pour evenly over the bread and press down. Leave for at least 30 minutes, or overnight in the fridge.',
      'Heat the oven to 180C. Scatter over the remaining cheddar.',
      'Bake for 35 minutes until puffed and golden and set in the middle. Rest for 5 minutes before cutting.'
    ],
    tips: [
      'Use day-old bread so the cubes hold their shape.',
      'Assemble the night before for the best texture.',
      'Check the centre with a knife: it should come out clean.'
    ],
    pair: ['Fresh fruit', 'Grilled tomatoes', 'Hot sauce', 'Orange juice'],
    store: 'Keeps for 3 days in the fridge. Reheat squares in the microwave for 1 minute.',
    nut: [585, 31, 32, 37, 2, 8, 1290]
  },

  'sausage-stuffing': {
    d: 'Cubes of toasted bread, sausage meat, onion, celery and sage baked at 180C for 45 minutes until crisp on top and moist within.',
    meta: 'Sausage stuffing with sage, celery and toasted bread, baked for 45 minutes. Eight servings, ready in 1 hour 5 minutes.',
    kw: ['sausage stuffing', 'sage and sausage stuffing', 'thanksgiving sausage stuffing', 'christmas sausage stuffing', 'sausage and bread stuffing'],
    why: 'Toast the bread first. That one instruction is the difference between stuffing that holds its shape and stuffing that turns to porridge, because dry, toasted cubes can absorb a lot of stock without falling apart, and soft fresh ones cannot.\n\nCut a day-old loaf into 2 cm cubes and dry them in a low oven for 25 minutes, until they feel like croutons. Meanwhile brown the sausage meat with onion, celery and plenty of sage in a large pan, using the sausage fat to soften the vegetables. Fresh sage is far better than dried here, and a handful is not too much.\n\n**Add the stock a little at a time.** Pour in about two thirds of it, toss, and wait for the bread to absorb it before deciding whether it needs more. The cubes should be damp all through but not sitting in liquid. An egg stirred in binds everything together.\n\nBake uncovered so that the top becomes crisp and golden, with soft, savoury stuffing underneath. A tray with a little more surface area than depth gives more crisp edges, which are what everyone fights over at the table.',
    ing: [
      '400 g day-old white bread, cut into 2 cm cubes',
      '450 g pork sausage meat',
      '1 tbsp butter',
      '2 onions, finely chopped',
      '3 celery sticks, finely chopped',
      '3 garlic cloves, crushed',
      '3 tbsp fresh sage, chopped',
      '1 tbsp fresh thyme leaves',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '400 ml chicken stock',
      '2 eggs, beaten'
    ],
    st: [
      'Heat the oven to 150C. Spread the bread cubes on 2 trays and dry them for 25 minutes. Raise the oven to 180C.',
      'Brown the sausage meat in a large pan for 8 minutes, breaking it up. Lift out. Add the butter, onions and celery and cook for 8 minutes. Add the garlic, sage, thyme, salt and pepper for 1 minute.',
      'Tip the bread and sausage into a large bowl with the vegetables. Add two thirds of the stock and the eggs and toss gently, adding more stock if the bread still seems dry.',
      'Spoon into a greased baking dish.',
      'Bake uncovered for 45 minutes until golden and crisp on top.'
    ],
    tips: [
      'Dry the bread cubes first.',
      'Add stock gradually.',
      'Bake uncovered for a crisp top.'
    ],
    pair: ['Roast turkey', 'Gravy', 'Cranberry sauce', 'Roast vegetables'],
    store: 'Keeps for 3 days in the fridge. Reheat covered at 170C for 15 minutes.',
    nut: [338, 14, 30, 18, 2, 4, 1180]
  },

  'sausage-and-mash': {
    d: 'Pork sausages browned and baked for 30 minutes alongside creamy mashed potato and a red onion gravy.',
    meta: 'Sausage and mash with onion gravy, baked sausages and buttery mashed potato. Four servings, ready in 45 minutes.',
    kw: ['sausage and mash', 'bangers and mash', 'sausages with onion gravy', 'creamy mashed potato', 'pub style sausage and mash'],
    why: 'It looks like a plain plate and tastes like home, which is why sausage and mash has survived on pub menus for as long as pubs have had menus. The sausages are cooked in the oven so that they brown without bursting, the mash is rich with butter, and the gravy ties them together.\n\nThe sausages should not be pricked. A pricked skin lets the juices run out into the pan and leaves the sausage dry. Roast them at 200C on a tray and turn them once. The fat that runs from the skin is what colours them, so give them space and no oil.\n\n**Pass the potatoes through a ricer, or mash them while they are still steaming.** Cold potato turns gluey if worked hard, but hot potato breaks into light crumbs. Use a floury variety such as Maris Piper, boil it in salted water until a knife slides through, and drain it well. Steam off for 2 minutes in the pot before mashing.\n\nWarm the milk and butter before they go in, which keeps the mash hot and smooth. The gravy is sliced onion cooked slowly in the sausage fat until it caramelises, then thickened with a spoonful of flour and beef stock.',
    ing: [
      '8 pork sausages, about 600 g',
      '1 kg floury potatoes, peeled and cut into chunks',
      '60 g butter',
      '100 ml milk, warmed',
      '1/2 tsp salt',
      '2 red onions, sliced',
      '1 tbsp plain flour',
      '300 ml beef stock',
      '1 tsp Worcestershire sauce',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Heat the oven to 200C. Place the sausages on a tray and roast for 30 minutes, turning once, until deep golden.',
      'Boil the potatoes in salted water for 18 minutes until tender. Drain and steam dry for 2 minutes.',
      'Mash the potatoes with the butter, warm milk and salt until smooth.',
      'Pour 1 tbsp of the sausage fat into a pan and cook the onions for 12 minutes until soft and golden. Stir in the flour, then the stock and Worcestershire sauce, and simmer for 6 minutes.',
      'Serve the sausages on the mash with the gravy and parsley.'
    ],
    tips: [
      'Do not prick the sausages.',
      'Warm the milk before adding it to the mash.',
      'Cook the onions slowly for a sweet gravy.'
    ],
    pair: ['Peas', 'Cabbage', 'Mustard', 'Brown sauce'],
    store: 'Keeps for 3 days in the fridge. Reheat the mash with a splash of milk.',
    nut: [773, 27, 56, 49, 7, 7, 1790]
  },

  'seafood-linguine': {
    d: 'Linguine tossed with prawns, mussels and squid in a garlic, white wine and cherry tomato sauce with chilli and parsley.',
    meta: 'Seafood linguine with prawns, mussels and squid in a garlic wine sauce. Four servings, ready in 35 minutes.',
    kw: ['seafood linguine', 'linguine with mixed seafood', 'linguine ai frutti di mare', 'prawn and mussel linguine', 'seafood pasta with white wine'],
    why: 'Why does seafood pasta so often taste of rubber? Because the fish is cooked for too long. Prawns need 2 minutes, squid needs 2 minutes, and mussels open in 4. If the seafood goes in at the wrong moment, or sits in the pan while the pasta finishes, it toughens quickly.\n\nStart the sauce while the linguine boils. Soften garlic and chilli in olive oil, add cherry tomatoes and cook until they burst and smell sweet, then pour in white wine and let it bubble for a minute. Mussels go in first, covered, so that they steam open in the wine and release their liquor into the sauce, which is the savoury heart of the dish.\n\n**Add the squid and prawns last, and take the pan off the heat as soon as they turn opaque.** They cook through in the residual heat while you toss the pasta in. Discard any mussels that stay closed.\n\nDrain the linguine 2 minutes early, and finish it in the sauce with a splash of pasta water, so it absorbs the flavours. Serve on warm plates with parsley and a drizzle of olive oil. Cheese is not traditional with seafood.',
    ing: [
      '350 g linguine',
      '3 tbsp olive oil',
      '4 garlic cloves, thinly sliced',
      '1/2 tsp chilli flakes',
      '300 g cherry tomatoes, halved',
      '150 ml dry white wine',
      '500 g mussels, cleaned',
      '200 g raw peeled prawns',
      '200 g squid, cleaned and sliced into rings',
      '1/2 tsp salt',
      '3 tbsp parsley, chopped',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Boil the linguine in salted water for 2 minutes less than the pack says. Reserve a mug of the cooking water, then drain.',
      'Heat the oil in a large wide pan. Cook the garlic and chilli for 1 minute. Add the tomatoes and cook for 5 minutes until they burst.',
      'Pour in the wine and bubble for 1 minute. Add the mussels, cover and cook for 4 minutes until they open. Discard any that stay shut.',
      'Add the prawns and squid and cook for 2 minutes until opaque. Add the salt.',
      'Toss in the pasta with a splash of the cooking water for 1 minute. Scatter with parsley and serve with lemon.'
    ],
    tips: [
      'Add the squid and prawns last.',
      'Discard any mussels that do not open.',
      'Finish the pasta in the sauce with some of its water.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Dry white wine'],
    store: 'Best eaten at once. Seafood pasta does not reheat well.',
    nut: [635, 46, 79, 15, 4, 5, 780]
  },

  'seafood-pasta': {
    d: 'Penne with white fish, prawns and scallops in a light creamy tomato and white wine sauce, finished with basil and lemon.',
    meta: 'Seafood pasta with fish, prawns and scallops in a creamy tomato sauce. Four servings, ready in 35 minutes.',
    kw: ['seafood pasta', 'creamy seafood pasta', 'pasta with prawns and scallops', 'seafood penne in tomato cream sauce', 'white fish and prawn pasta'],
    why: 'Seafood and pasta go together in Italian kitchens from Naples to Venice, usually with a tomato or a garlic oil sauce and a light hand. This version leans towards the creamy side, with a splash of cream stirred into a tomato base to soften the acidity and give the sauce body.\n\nThe seafood is a blend of firm white fish, such as cod or haddock, cut into 3 cm chunks, plus raw prawns and scallops. Each needs only a couple of minutes, so they are added to the sauce in the order of how long they take. The fish goes in first, the prawns a minute later and the scallops last, which keeps all of them tender.\n\n**Do not stir the fish too much.** White fish flakes easily, and rough stirring turns the chunks into small bits that disappear into the sauce. Fold gently with a spatula, and it will hold together.\n\nPenne works well, because its tubes catch the sauce and little pieces of seafood. Reserve some pasta water and use it to loosen the sauce. Finish with fresh basil and a squeeze of lemon, which cuts the cream and wakes up the sweetness of the shellfish.',
    ing: [
      '350 g penne',
      '2 tbsp olive oil',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '100 ml dry white wine',
      '400 g tinned chopped tomatoes',
      '120 ml double cream',
      '300 g cod fillet, cut into 3 cm chunks',
      '200 g raw peeled prawns',
      '150 g scallops, halved',
      '1/2 tsp salt',
      '3 tbsp basil, torn',
      '1 lemon, juiced'
    ],
    st: [
      'Boil the penne in salted water for 2 minutes less than the pack says. Reserve a mug of the cooking water, then drain.',
      'Heat the oil in a large pan. Cook the onion for 5 minutes, then the garlic for 1 minute. Pour in the wine and reduce by half.',
      'Add the tomatoes and simmer for 8 minutes. Stir in the cream and salt.',
      'Add the cod and cook for 2 minutes, then the prawns for 1 minute, then the scallops for 1 minute, folding gently.',
      'Add the pasta and a splash of the reserved water and toss gently. Finish with the basil and lemon juice.'
    ],
    tips: [
      'Add the seafood in order of cooking time.',
      'Fold gently so the fish stays in chunks.',
      'Finish with lemon to lift the cream.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Lemon wedges', 'White wine'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    nut: [660, 43, 77, 20, 5, 8, 510]
  },

  'sheet-pan-breakfast-hash': {
    d: 'Diced potatoes, peppers, onion and sausage roasted on one tray at 220C, with eggs baked into the hash for the last 8 minutes.',
    meta: 'Sheet pan breakfast hash with potatoes, sausage and baked eggs, roasted for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['sheet pan breakfast hash', 'sheet pan potatoes and eggs', 'oven breakfast hash', 'sausage and potato hash', 'tray bake breakfast'],
    why: 'A weekend dish for a table of four, and one that leaves the hob free. The hash roasts on a single tray, so the potatoes crisp in the dry heat of the oven while the sausage browns alongside, and the eggs finish in the last few minutes.\n\nCut the potatoes into small cubes, about 1.5 cm, because large ones will not soften in the time it takes the outsides to brown. Toss them with oil and paprika on a preheated tray, so the cubes sizzle on contact and do not stick. A hot tray gives you a crisp, brown base that a cold one never will.\n\n**Do not crowd the tray.** Potatoes spread in a single layer roast, and potatoes piled on top of each other steam. If the tray looks full, use two. Stir the hash once halfway through to turn the pieces and brown the other side.\n\nAfter 22 minutes, make four wells, crack in the eggs, and return the tray to the oven for 6 to 8 minutes. The whites should be set and the yolks jammy. Scatter with chives and serve straight from the tray, with hot sauce on the side.',
    ing: [
      '700 g potatoes, cut into 1.5 cm cubes',
      '3 tbsp olive oil',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '1 red pepper, diced',
      '1 onion, diced',
      '300 g breakfast sausages, sliced',
      '4 eggs',
      '2 tbsp chives, chopped'
    ],
    st: [
      'Heat the oven to 220C with a large tray inside. Toss the potatoes with 2 tbsp of the oil, paprika and salt.',
      'Tip the potatoes onto the hot tray and roast for 10 minutes.',
      'Add the pepper, onion, sausage and the remaining oil. Stir and roast for 12 minutes more, until the potatoes are golden.',
      'Make 4 wells in the hash and crack an egg into each. Roast for 6 to 8 minutes until the whites are set.',
      'Scatter with the chives and serve from the tray.'
    ],
    tips: [
      'Preheat the tray so the potatoes sizzle.',
      'Spread the hash in a single layer.',
      'Check the eggs at 6 minutes.'
    ],
    pair: ['Hot sauce', 'Toast', 'Fresh fruit', 'Coffee'],
    store: 'Best eaten at once. The hash keeps for 2 days in the fridge without the eggs.',
    nut: [529, 20, 38, 33, 6, 5, 1270]
  },

  'sheet-pan-chicken-parmesan': {
    d: 'Breaded chicken breasts baked on a tray at 220C for 25 minutes with tomato sauce and mozzarella, no frying required.',
    meta: 'Sheet pan chicken parmesan with a crisp crumb, tomato sauce and mozzarella. Four servings, ready in 45 minutes.',
    kw: ['sheet pan chicken parmesan', 'baked chicken parmesan', 'oven baked chicken parmigiana', 'chicken parmesan tray bake', 'crispy baked chicken parmesan'],
    why: 'This is what to make in the first cold week of the year, when you want comfort food without a stove covered in oil spatter. Baking the crumbed chicken on a tray in a hot oven gives a golden crust with a fraction of the mess of the traditional fried version.\n\nSlice each breast in half horizontally or pound it flat so that it is an even 1.5 cm thick. Thin cutlets cook through before the crumb burns, and an even thickness means every piece is ready at once. Season them, then flour, egg, and a crumb mix of panko and parmesan.\n\n**Bake the chicken before adding the sauce.** Put the breaded cutlets on a rack on the tray and bake for 15 minutes. Then add a spoonful of tomato sauce and a slice of mozzarella to each, and return them for the last 8 to 10 minutes, so the cheese melts and the crumb stays crisp underneath.\n\nA spoonful of sauce on each cutlet, not a flood, keeps the coating from going soft. Serve the remaining sauce warm on the side, with a scatter of basil and a handful of pasta or a green salad.',
    ing: [
      '2 chicken breasts, about 600 g, sliced in half horizontally',
      '1/2 tsp salt',
      '40 g plain flour',
      '2 eggs, beaten',
      '80 g panko breadcrumbs',
      '40 g parmesan, grated',
      '1 tsp dried oregano',
      '2 tbsp olive oil',
      '300 g tomato pasta sauce',
      '150 g mozzarella, sliced',
      '2 tbsp basil, torn'
    ],
    st: [
      'Heat the oven to 220C and set a rack over a tray. Season the chicken with the salt.',
      'Mix the panko, parmesan, oregano and olive oil. Coat each cutlet in flour, then egg, then press into the crumb mixture.',
      'Lay the cutlets on the rack and bake for 15 minutes.',
      'Spoon 2 tbsp of tomato sauce over each cutlet and top with mozzarella. Bake for 8 to 10 minutes until the cheese is melted and bubbling and the chicken reads 74C.',
      'Warm the rest of the sauce and serve with the chicken, scattered with basil.'
    ],
    tips: [
      'Pound the chicken to an even thickness.',
      'Add the sauce and cheese late to keep the crumb crisp.',
      'Use a rack so the underside crisps.'
    ],
    pair: ['Spaghetti', 'Green salad', 'Garlic bread', 'Roasted broccoli'],
    store: 'Keeps for 2 days in the fridge. Reheat in a 190C oven for 10 minutes.',
    nut: [545, 53, 27, 25, 2, 3, 830]
  },

  'sheet-pan-cod-and-vegetables': {
    d: 'Cod fillets roasted on one tray with new potatoes, green beans and cherry tomatoes, with lemon butter spooned over before serving.',
    meta: 'Sheet pan cod and vegetables roasted together with lemon butter. Four servings, ready in 35 minutes.',
    kw: ['sheet pan cod and vegetables', 'roasted cod with vegetables', 'cod tray bake', 'one tray fish dinner', 'lemon butter cod and potatoes'],
    why: 'It looks like a dinner party plate and cooks like a tray bake, which is why it works so well for a weeknight. The fish and vegetables share a tray, and everything comes out together, though they do not go in at the same time.\n\nNew potatoes, halved, need the longest. Roast them alone for 15 minutes at 220C, until their cut sides are golden. Green beans and cherry tomatoes go on the tray for the next 5 minutes, and the cod goes on top for the last 10, so that nothing is overcooked. The fish steams gently above the vegetables.\n\n**Season the cod and oil the tray.** Cod is a mild fish that depends on salt and fat for its flavour, so brush the fillets with a little oil and a generous pinch of salt. The thick centre-cut pieces are best, as thin tail ends dry out.\n\nThe fish is done when it flakes at the touch of a fork and has turned from glassy to white. Melt the butter with lemon zest and juice, garlic and parsley, and spoon it over everything on the tray at the end so the potatoes soak it up.',
    ing: [
      '500 g new potatoes, halved',
      '3 tbsp olive oil',
      '1 tsp salt',
      '200 g green beans, trimmed',
      '250 g cherry tomatoes',
      '4 cod fillets, about 600 g',
      '40 g butter, melted',
      '1 lemon, zested and juiced',
      '2 garlic cloves, crushed',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Heat the oven to 220C. Toss the potatoes with 2 tbsp of the oil and half the salt on a large tray. Roast for 15 minutes.',
      'Add the green beans and tomatoes with the remaining oil and stir. Roast for 5 minutes.',
      'Season the cod with the rest of the salt. Nestle the fillets among the vegetables and roast for 10 minutes until the fish flakes.',
      'Mix the butter, lemon zest and juice, garlic and parsley.',
      'Spoon the lemon butter over the tray and serve straight away.'
    ],
    tips: [
      'Add the ingredients in stages, longest first.',
      'Use thick fillets so they do not dry out.',
      'Spoon the butter on at the end.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Tartare sauce', 'White wine'],
    store: 'Best eaten fresh. Leftovers keep for 1 day in the fridge.',
    nut: [420, 31, 29, 20, 6, 5, 690]
  },

  'sheet-pan-fish-tacos': {
    d: 'White fish fillets seasoned with chilli and lime and roasted on a tray for 15 minutes, flaked into warm tortillas with slaw and crema.',
    meta: 'Sheet pan fish tacos with chilli lime fish, slaw and crema, roasted for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['sheet pan fish tacos', 'baked fish tacos', 'oven roasted fish tacos', 'chilli lime fish tacos', 'fish tacos with slaw'],
    why: 'A Friday dish for a table of four, with no pan to watch and no oil to clean up. The fish roasts on a tray with a rub of chilli, cumin and lime while you make the slaw and warm the tortillas, and by the time the table is laid it is ready to flake.\n\nChoose a firm white fish such as cod, haddock or pollock, in thick fillets about 2.5 cm. Pat them dry and rub them with oil, chilli powder, cumin, garlic powder and salt. Thinner pieces cook in minutes and fall apart when you handle them, while thick ones stay in large moist flakes.\n\n**Roast the fish on a very hot tray.** At 230C the outside of the fish colours and the juices stay inside. Twelve to fifteen minutes is enough, until the flesh is opaque and flakes when pressed. Squeeze lime over it as it comes out of the oven.\n\nThe slaw is shredded cabbage, red onion and coriander dressed in lime juice and a pinch of salt, and the crema is soured cream thinned with lime. Both are cold and sharp against the warm, spiced fish. Warm the tortillas in a dry pan for 20 seconds a side, then let everyone build their own.',
    ing: [
      '600 g cod fillets, about 2.5 cm thick',
      '2 tbsp olive oil',
      '2 tsp chilli powder',
      '1 tsp ground cumin',
      '1 tsp garlic powder',
      '1 tsp salt',
      '3 limes',
      '200 g white cabbage, finely shredded',
      '1/2 red onion, thinly sliced',
      '3 tbsp coriander, chopped',
      '120 g soured cream',
      '8 small corn tortillas'
    ],
    st: [
      'Heat the oven to 230C with a tray inside. Pat the fish dry and rub with the oil, chilli powder, cumin, garlic powder and half the salt.',
      'Toss the cabbage, red onion and coriander with the juice of 1 lime and the remaining salt. Mix the soured cream with the juice of 1 lime.',
      'Lay the fish on the hot tray and roast for 12 to 15 minutes until opaque and flaking.',
      'Warm the tortillas in a dry pan for 20 seconds a side.',
      'Flake the fish into the tortillas, top with the slaw and crema and serve with the remaining lime cut into wedges.'
    ],
    tips: [
      'Choose thick fillets for large flakes.',
      'Heat the tray before the fish goes on.',
      'Dress the slaw just before serving.'
    ],
    pair: ['Lime wedges', 'Avocado', 'Rice', 'Hot sauce'],
    store: 'Best eaten at once. Keep the components apart in the fridge for 1 day.',
    nut: [363, 31, 26, 15, 5, 4, 730]
  },

  'sheet-pan-honey-mustard-chicken': {
    d: 'Chicken thighs roasted with potatoes and green beans on one tray at 210C, glazed with honey and wholegrain mustard.',
    meta: 'Sheet pan honey mustard chicken with potatoes and green beans, roasted for 35 minutes. Four servings, ready in 45 minutes.',
    kw: ['sheet pan honey mustard chicken', 'honey mustard chicken and potatoes', 'one tray honey mustard chicken', 'roasted chicken thighs honey mustard', 'honey mustard tray bake'],
    why: 'Most tray bakes come out with pale chicken and burnt vegetables, and the fix is to treat them as two jobs on one tray. The potatoes need more time than the chicken, and the beans need less, so they go in at different moments, and the glaze goes on late so it does not scorch.\n\nStart the potatoes first. Cut them into 3 cm chunks and roast them at 210C for 10 minutes before the chicken goes on the tray. They develop a golden crust while the oven fills with heat. Use skin-on, bone-in thighs for the best flavour; they release fat that bastes the potatoes beneath.\n\n**Brush the glaze on twice.** Mix honey, wholegrain mustard, a splash of cider vinegar and crushed garlic. Spoon half over the chicken after 15 minutes in the oven and the rest in the last 5 minutes. A single heavy coat from the start would burn, but two lighter ones set into a glossy, sticky shell.\n\nAdd the green beans for the final 10 minutes, tossed with a little oil. They should be tender, with a few blistered spots. Serve straight from the tray with the pan juices spooned over.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1.2 kg',
      '600 g potatoes, cut into 3 cm chunks',
      '3 tbsp olive oil',
      '1 tsp salt',
      '3 tbsp honey',
      '3 tbsp wholegrain mustard',
      '1 tbsp cider vinegar',
      '3 garlic cloves, crushed',
      '250 g green beans, trimmed'
    ],
    st: [
      'Heat the oven to 210C. Toss the potatoes with 2 tbsp of the oil and half the salt on a large tray and roast for 10 minutes.',
      'Season the chicken with the remaining salt. Place it skin side up on the tray among the potatoes.',
      'Whisk the honey, mustard, vinegar and garlic. Roast the chicken for 15 minutes, then spoon over half the glaze.',
      'Toss the beans in the remaining oil and add to the tray. Roast for 5 minutes, spoon over the rest of the glaze and roast for 5 minutes more.',
      'Check that the chicken reads 80C. Rest for 5 minutes and serve.'
    ],
    tips: [
      'Glaze twice so the honey does not burn.',
      'Start the potatoes before the chicken.',
      'Add the beans for the last 10 minutes only.'
    ],
    pair: ['Green salad', 'Rice', 'Coleslaw', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Reheat in a 190C oven for 12 minutes.',
    nut: [657, 64, 44, 25, 6, 16, 1090]
  },

  'sheet-pan-lemon-chicken': {
    d: 'Chicken thighs, lemon slices, red onion and baby potatoes roasted on one tray with oregano and garlic until crisp and golden.',
    meta: 'Sheet pan lemon chicken with potatoes, onion and oregano, roasted for 35 minutes. Four servings, ready in 1 hour 15 minutes.',
    kw: ['sheet pan lemon chicken', 'lemon chicken tray bake', 'greek style lemon chicken and potatoes', 'lemon oregano chicken', 'roast lemon chicken thighs'],
    why: 'This is what to make in late spring, when the evenings are long enough to eat at the table and the oven is the only thing you want to switch on. Lemon, garlic and oregano is the flavour of Greek roast chicken, and on a single tray it makes a dinner with almost no washing up.\n\nThe lemon plays two roles. The juice goes into the marinade, where it tenderises the chicken and carries the garlic and oregano into the meat. The sliced lemon goes on the tray, where it caramelises at the edges, softens and turns sweet. A roasted slice can be squeezed over everything at the table for a mellower flavour than raw juice.\n\n**Marinate for at least 30 minutes.** The acid does its work quickly on thigh meat, and a longer soak of up to 4 hours gives deeper flavour. Leave it longer, though, and the surface of the meat begins to go soft.\n\nRoast the chicken skin side up, with the potatoes and red onion wedges around it, so the fat renders over the vegetables. Turn the vegetables once halfway. The finished tray should have crisp chicken skin, golden potatoes and soft, sticky lemon.',
    ing: [
      '8 chicken thighs, bone in and skin on, about 1.2 kg',
      '3 lemons',
      '4 tbsp olive oil',
      '5 garlic cloves, crushed',
      '2 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '600 g baby potatoes, halved',
      '1 red onion, cut into wedges',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Mix the juice of 2 lemons with the oil, garlic, oregano, salt and pepper. Coat the chicken and marinate for at least 30 minutes.',
      'Heat the oven to 210C. Slice the third lemon thinly.',
      'Spread the potatoes and onion on a large tray. Place the chicken skin side up on top with the lemon slices. Pour over the marinade.',
      'Roast for 35 minutes, turning the potatoes once, until the chicken skin is crisp and a thermometer reads 80C.',
      'Rest for 5 minutes, scatter with the parsley and serve with the roasted lemon slices.'
    ],
    tips: [
      'Marinate for at least 30 minutes.',
      'Turn the potatoes halfway for even browning.',
      'Squeeze the roasted lemon over the chicken.'
    ],
    pair: ['Greek salad', 'Tzatziki', 'Pitta bread', 'Green beans'],
    store: 'Keeps for 3 days in the fridge. Reheat in a 190C oven for 12 minutes.',
    nut: [640, 63, 34, 28, 6, 4, 870]
  },

  'sheet-pan-pork-chops': {
    d: 'Bone-in pork chops roasted with apple wedges, red onion and sweet potato on one tray for 25 minutes with thyme and mustard.',
    meta: 'Sheet pan pork chops with apples, sweet potato and onion, roasted for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['sheet pan pork chops', 'pork chops with apples tray bake', 'roasted pork chops and sweet potato', 'one tray pork chop dinner', 'pork chops with apple and onion'],
    why: 'This is what to make in the first cold week of autumn, when apples are crisp and the oven starts to feel like a friend. Pork and apple is one of the oldest pairings in European cooking, and roasting the two together on a tray makes the fruit soften and caramelise in the pork fat.\n\nThe sweet potato is cut small, about 2 cm, so that it is done in the same time as the chops. Larger chunks stay hard. Toss it with oil and salt and give it a 10 minute head start in a hot oven, then add the chops, apples and onion. Choose firm apples that keep their shape, such as Braeburn or Cox.\n\n**Rub the chops with mustard and thyme, not just salt.** Wholegrain mustard forms a lightly sharp crust that browns well in the oven, and the thyme gives an herbal, savoury note. Chops 2.5 cm thick take about 20 minutes at 210C, so they stay juicy.\n\nPull the chops at 63C and rest them on the tray for 5 minutes while the vegetables finish. Spoon the roasted apple and onion over the pork, and drizzle with the juices left on the tray.',
    ing: [
      '4 bone-in pork chops, about 1 kg, 2.5 cm thick',
      '2 tbsp wholegrain mustard',
      '1 tbsp fresh thyme leaves',
      '3 tbsp olive oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '500 g sweet potatoes, cut into 2 cm chunks',
      '2 firm apples, cut into wedges',
      '1 red onion, cut into wedges'
    ],
    st: [
      'Heat the oven to 210C. Toss the sweet potato with 1 tbsp of the oil and half the salt on a large tray. Roast for 10 minutes.',
      'Mix the mustard, thyme, 1 tbsp oil, pepper and remaining salt. Rub over the chops.',
      'Add the chops, apples and onion to the tray with the remaining oil and stir the vegetables.',
      'Roast for 15 minutes, turning the vegetables once, until the chops read 63C.',
      'Rest for 5 minutes and spoon the apple and onion over the chops to serve.'
    ],
    tips: [
      'Choose firm apples that hold their shape.',
      'Cut the sweet potato small so it cooks in time.',
      'Cook the chops to 63C and rest.'
    ],
    pair: ['Green beans', 'Cabbage', 'Mustard', 'Cider'],
    store: 'Keeps for 3 days in the fridge. Reheat in a 180C oven for 10 minutes.',
    nut: [682, 53, 41, 34, 7, 15, 940]
  },

  'sheet-pan-quesadillas': {
    d: 'Flour tortillas layered with cheese, black beans and peppers on a tray, baked for 15 minutes and cut into wedges to feed six.',
    meta: 'Sheet pan quesadillas with cheese, beans and peppers, baked for 15 minutes. Six servings, ready in 25 minutes.',
    kw: ['sheet pan quesadillas', 'baked quesadillas', 'oven quesadillas for a crowd', 'black bean quesadillas', 'tray bake quesadillas'],
    why: 'This is what to make on a busy Friday in autumn, when the whole family is hungry at once and there is only one tray. Quesadillas made in a pan have to be cooked one at a time, but on a sheet pan they all cook together, with the tortillas forming a single large crisp parcel.\n\nThe method is to line the tray with large tortillas overhanging the edges, fill the middle, and then fold the edges back over the top and cover with a second tray or a sheet of baking paper. Press down gently so everything compacts. The weight makes the quesadilla crisp evenly instead of puffing up in the middle.\n\n**Spread the filling thin and edge to edge.** A thick pile of beans and cheese gives a lumpy quesadilla that cooks unevenly. Mashing half the beans gives a paste that holds the filling together as it bakes. Add diced peppers, spring onions and a pinch of cumin.\n\nBake at 220C for 15 minutes, flipping the whole thing halfway if you can. The result should be crisp and golden outside and molten within. Rest for 2 minutes, then cut into wedges with a pizza wheel and serve with soured cream, salsa and guacamole.',
    ing: [
      '6 large flour tortillas, about 420 g',
      '400 g tinned black beans, drained',
      '1 tsp ground cumin',
      '1 red pepper, finely diced',
      '3 spring onions, sliced',
      '250 g cheddar and mozzarella mix, grated',
      '2 tbsp olive oil',
      '120 g soured cream',
      '120 g salsa',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Heat the oven to 220C. Mash half the black beans with the cumin and stir in the remaining whole beans.',
      'Brush a large tray with a little oil. Lay 4 tortillas overlapping to cover the base, with edges hanging over.',
      'Spread the beans over the tortillas, then add the pepper, spring onions and cheese. Fold the edges in and top with the remaining 2 tortillas.',
      'Brush the top with the rest of the oil. Cover with baking paper and a second tray and bake for 15 minutes.',
      'Rest for 2 minutes, cut into wedges and serve with the soured cream, salsa and coriander.'
    ],
    tips: [
      'Press the layers down with a second tray.',
      'Spread the filling thin and even.',
      'Use a pizza wheel to cut the wedges.'
    ],
    pair: ['Guacamole', 'Soured cream', 'Salsa', 'Green salad'],
    store: 'Best eaten fresh. Reheat wedges in a hot pan for 2 minutes a side.',
    nut: [500, 21, 50, 24, 7, 6, 1050]
  },

  'sheet-pan-roast-chicken': {
    d: 'A spatchcocked chicken roasted at 220C on a tray with root vegetables, cooked for 45 minutes instead of the usual 90.',
    meta: 'Sheet pan roast chicken with root vegetables, spatchcocked and roasted for 45 minutes. Six servings, ready in 1 hour.',
    kw: ['sheet pan roast chicken', 'tray roasted chicken with vegetables', 'spatchcock chicken on a tray', 'roast chicken and root vegetables', 'roast chicken dinner'],
    why: 'Spatchcock is thought to be an old Irish term for a bird split quickly for cooking, and the technique remains the fastest way to roast a whole chicken. Remove the backbone, press the bird flat, and it cooks in 45 minutes, with crisp skin over the whole surface.\n\nCut along both sides of the backbone with strong kitchen scissors, flip the chicken over, and press hard on the breastbone until it cracks flat. Save the backbone for stock. A flat bird cooks evenly, so the breast does not dry out while the thighs finish. Pat it dry and rub with softened butter, lemon zest, garlic and thyme.\n\n**Put the vegetables underneath the chicken, not around it.** Carrots, parsnips and red onion wedges tossed in oil go on the tray first and the bird sits on top, dripping its juices and fat over them as it roasts. The vegetables get gravy-like richness without competing for oven space.\n\nRoast at 220C until the skin is deep golden and a thermometer in the thickest part of the thigh reads 75C. Rest for 10 minutes on a board before carving, and serve with the roasted vegetables and pan juices.',
    ing: [
      '1.6 kg whole chicken',
      '50 g butter, softened',
      '1 lemon, zested',
      '4 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '1.5 tsp salt',
      '1/2 tsp black pepper',
      '4 carrots, cut into chunks',
      '450 g parsnips, cut into chunks',
      '2 red onions, cut into wedges',
      '2 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 220C. Cut out the backbone of the chicken with scissors, flip it and press the breastbone flat. Pat dry.',
      'Mix the butter, lemon zest, garlic, thyme, salt and pepper and rub it under and over the skin.',
      'Toss the carrots, parsnips and onions with the oil on a large tray. Set the chicken on top, skin side up.',
      'Roast for 45 minutes until the skin is deep golden and a thermometer reads 75C in the thigh. Turn the vegetables once.',
      'Rest the chicken for 10 minutes, then carve and serve with the vegetables and pan juices.'
    ],
    tips: [
      'Use strong scissors to remove the backbone.',
      'Dry the skin well before the butter goes on.',
      'Rest the chicken for 10 minutes.'
    ],
    pair: ['Gravy', 'Green beans', 'Roast potatoes', 'Bread sauce'],
    store: 'Keeps for 3 days in the fridge. Use the carcass for stock.',
    nut: [718, 53, 23, 46, 6, 8, 820]
  },

  'sheet-pan-steak-and-vegetables': {
    d: 'Sirloin steak strips roasted on a tray with broccoli, peppers and red onion at 230C for 20 minutes with garlic and soy.',
    meta: 'Sheet pan steak and vegetables with garlic and soy, roasted for 20 minutes. Four servings, ready in 50 minutes.',
    kw: ['sheet pan steak and vegetables', 'steak and broccoli tray bake', 'roasted steak bites with vegetables', 'garlic soy steak sheet pan', 'one tray steak dinner'],
    why: 'Hot oven, hot tray. Those four words are the whole recipe, because steak and vegetables only brown properly if the tray is already searing when they go on. A cold tray steams them and gives you grey meat and limp broccoli.\n\nCut the sirloin into 3 cm cubes. Small pieces cook in a few minutes, so the steak and the vegetables finish together, and every cube gets a browned crust. Toss the beef with soy sauce, garlic, a spoonful of olive oil and black pepper, and leave it for 15 minutes while the oven heats.\n\n**Add the steak for the last 8 minutes only.** Broccoli florets, pepper chunks and red onion wedges go on the tray first and roast for 12 minutes. Then the beef is scattered over and everything returns to the oven. The steak cooks to medium in 8 minutes and stays tender.\n\nA squeeze of lime and a drizzle of honey and sesame oil over the finished tray add a glaze that clings to the vegetables. Serve with rice, or straight from the tray with chopsticks or a fork.',
    ing: [
      '600 g beef sirloin, cut into 3 cm cubes',
      '3 tbsp soy sauce',
      '4 garlic cloves, crushed',
      '3 tbsp olive oil',
      '1/2 tsp black pepper',
      '400 g broccoli florets',
      '2 peppers, cut into chunks',
      '1 red onion, cut into wedges',
      '1 tbsp honey',
      '1 tsp sesame oil',
      '1 lime, cut into wedges'
    ],
    st: [
      'Toss the beef with 2 tbsp of the soy sauce, the garlic, 1 tbsp oil and the pepper. Leave for 15 minutes.',
      'Heat the oven to 230C with a large tray inside. Toss the broccoli, peppers and onion with the remaining oil.',
      'Spread the vegetables on the hot tray and roast for 12 minutes.',
      'Scatter the beef over the vegetables and roast for 8 minutes until browned and medium.',
      'Mix the remaining soy sauce, honey and sesame oil, drizzle over the tray and serve with the lime.'
    ],
    tips: [
      'Preheat the tray for a proper sear.',
      'Add the steak late so it stays tender.',
      'Do not crowd the tray.'
    ],
    pair: ['Steamed rice', 'Noodles', 'Sesame seeds', 'Chilli sauce'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot pan for 3 minutes.',
    nut: [448, 37, 21, 24, 5, 11, 780]
  },

  'sheet-pan-teriyaki-chicken': {
    d: 'Chicken thighs, broccoli and carrots roasted on one tray with a soy, honey and ginger teriyaki glaze for 30 minutes.',
    meta: 'Sheet pan teriyaki chicken with broccoli and carrots in a sticky glaze. Four servings, ready in 40 minutes.',
    kw: ['sheet pan teriyaki chicken', 'teriyaki chicken and broccoli tray bake', 'oven teriyaki chicken', 'teriyaki chicken thighs sheet pan', 'one tray teriyaki dinner'],
    why: 'Why does homemade teriyaki so often taste thin? Because the sauce was never reduced. A teriyaki glaze is soy sauce, sugar and mirin boiled down until it clings, and a quick simmer before it hits the chicken is what turns a runny marinade into a sticky coat.\n\nMix soy sauce, honey, mirin, garlic, ginger and rice vinegar in a small pan. Simmer for 5 minutes until it coats the back of a spoon, then stir in a spoon of cornflour mixed with water for a gloss. Set a third aside for serving, and use the rest to coat the chicken.\n\n**Roast the chicken first and the vegetables later.** Thighs need 30 minutes at 200C, but broccoli only needs 12. Add the florets and carrot batons after the chicken has had 18 minutes, tossed in a little oil and the reserved glaze. They come out charred at the tips and tender in the middle.\n\nFinish with sesame seeds and sliced spring onions, and serve over steamed rice with the leftover glaze drizzled on top. The tray should look lacquered and slightly burnt at the edges.',
    ing: [
      '8 chicken thighs, boneless and skinless, about 900 g',
      '5 tbsp soy sauce',
      '3 tbsp honey',
      '3 tbsp mirin',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '1 tbsp rice vinegar',
      '1 tbsp cornflour',
      '400 g broccoli florets',
      '3 carrots, cut into batons',
      '1 tbsp vegetable oil',
      '1 tbsp sesame seeds',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oven to 200C. Simmer the soy sauce, honey, mirin, garlic, ginger and vinegar for 5 minutes. Stir the cornflour into 2 tbsp cold water and add. Simmer for 1 minute until glossy.',
      'Toss the chicken with two thirds of the glaze and lay on a large lined tray. Roast for 18 minutes.',
      'Toss the broccoli and carrots with the oil and the rest of the glaze, minus 2 tbsp. Add to the tray.',
      'Roast for 12 minutes more until the chicken is cooked through and the vegetables are charred at the edges.',
      'Drizzle with the reserved glaze, scatter with the sesame seeds and spring onions and serve.'
    ],
    tips: [
      'Reduce the glaze before using it.',
      'Add the vegetables partway through.',
      'Line the tray: the sugar will burn on bare metal.'
    ],
    pair: ['Steamed rice', 'Noodles', 'Pickled cucumber', 'Edamame'],
    store: 'Keeps for 3 days in the fridge. Reheat in a hot pan.',
    nut: [479, 50, 36, 15, 5, 23, 1380]
  },

  'shrimp-alfredo': {
    d: 'Fettuccine in a cream, butter and parmesan sauce with garlic-seared prawns, ready in 30 minutes.',
    meta: 'Shrimp Alfredo: fettuccine in a rich parmesan cream sauce with seared prawns. Four servings, ready in 30 minutes.',
    kw: ['shrimp alfredo', 'shrimp fettuccine alfredo', 'creamy shrimp alfredo', 'prawn alfredo pasta', 'garlic shrimp alfredo'],
    why: 'What makes a good Alfredo sauce cling instead of pooling at the bottom of the bowl? Starch and fat, in the right balance. The pasta water brings the starch, the butter and cream bring the fat, and the parmesan melts the two into a glossy coat that sticks to each strand.\n\nGrate the parmesan yourself on the fine side of the grater. Pre-grated cheese is dusted with anti-caking agent and refuses to melt smoothly. Take the pan off the heat before the cheese goes in, because a boiling cream sauce makes it clump into stringy lumps rather than melting.\n\n**Sear the prawns first and set them aside.** Pat them dry, season them with salt and paprika and cook them in a hot pan for 90 seconds a side, until pink and just opaque. Overcooked prawns turn rubbery in the sauce, and removing them stops that.\n\nDrain the fettuccine 1 minute early and finish it in the sauce with a splash of pasta water. The pasta absorbs some of the cream as it finishes. Return the prawns at the end, scatter with parsley and black pepper, and serve straight away on warm plates.',
    ing: [
      '350 g fettuccine',
      '400 g raw peeled prawns',
      '1/2 tsp salt',
      '1/2 tsp paprika',
      '2 tbsp olive oil',
      '40 g butter',
      '4 garlic cloves, crushed',
      '200 ml double cream',
      '80 g parmesan, finely grated',
      '1/4 tsp nutmeg',
      '3 tbsp parsley, chopped',
      '1/4 tsp black pepper'
    ],
    st: [
      'Boil the fettuccine in salted water for 1 minute less than the pack says. Reserve a mug of the water, then drain.',
      'Pat the prawns dry and season with the salt and paprika. Heat the oil in a large pan and sear the prawns for 90 seconds per side. Remove.',
      'Melt the butter in the same pan. Cook the garlic for 30 seconds, pour in the cream and simmer gently for 4 minutes.',
      'Take off the heat. Whisk in the parmesan and nutmeg until smooth. Add the pasta and a splash of the pasta water and toss until glossy.',
      'Return the prawns, scatter with the parsley and pepper and serve.'
    ],
    tips: [
      'Grate the parmesan fresh.',
      'Take the pan off the heat before adding the cheese.',
      'Use pasta water to loosen the sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Lemon wedges'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    nut: [796, 40, 69, 40, 3, 4, 770]
  },

  'shrimp-fettuccine': {
    d: 'Fettuccine tossed with garlic prawns, cherry tomatoes, white wine and lemon in a light sauce, without cream.',
    meta: 'Shrimp fettuccine with garlic, white wine and cherry tomatoes. Four servings, ready in 30 minutes.',
    kw: ['shrimp fettuccine', 'garlic shrimp fettuccine', 'fettuccine with prawns and tomatoes', 'lemon garlic prawn pasta', 'light shrimp pasta'],
    why: 'Most home versions of shrimp pasta come out heavy and one-note, and the fix is to use acid and a light hand with fat. This one has no cream. The sauce is built from olive oil, garlic, cherry tomatoes, white wine and lemon, and its sharpness makes the sweetness of the prawns stand out.\n\nCook the garlic gently in plenty of olive oil. It should turn pale gold and smell sweet in about a minute, not brown, because browned garlic turns bitter and takes over the dish. The cherry tomatoes follow, and they burst and collapse in the oil within 5 minutes into a jammy sauce.\n\n**Add the wine, then the prawns last.** White wine reduces for a couple of minutes to remove the raw alcohol note, leaving fruit and acidity. The prawns need just 2 to 3 minutes in the simmering sauce, until they are pink and curled into a loose C. Remove the pan from the heat the moment they turn.\n\nToss the drained fettuccine in with a ladle of the starchy pasta water, which emulsifies the oil and wine into a sauce that clings. Finish with lemon zest, plenty of parsley and a pinch of chilli flakes if you like some heat.',
    ing: [
      '350 g fettuccine',
      '4 tbsp olive oil',
      '5 garlic cloves, thinly sliced',
      '1/2 tsp chilli flakes',
      '300 g cherry tomatoes, halved',
      '120 ml dry white wine',
      '500 g raw peeled prawns',
      '1 lemon, zested and juiced',
      '1/2 tsp salt',
      '3 tbsp parsley, chopped'
    ],
    st: [
      'Boil the fettuccine in salted water for 1 minute less than the pack says. Reserve a mug of the water, then drain.',
      'Heat the oil in a large pan over medium heat. Cook the garlic and chilli for 1 minute until pale gold.',
      'Add the tomatoes and cook for 5 minutes until they burst. Pour in the wine and simmer for 2 minutes.',
      'Add the prawns and salt and cook for 3 minutes until pink. Take off the heat.',
      'Toss in the pasta, a splash of the water, the lemon zest and juice and the parsley. Serve at once.'
    ],
    tips: [
      'Cook the garlic gently so it stays sweet.',
      'Add the prawns last and do not overcook them.',
      'Use pasta water to bring the sauce together.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Dry white wine'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge.',
    nut: [584, 38, 72, 16, 4, 5, 500]
  },

  'slow-cooker-baked-beans': {
    d: 'Dried haricot beans cooked on low for 8 hours in a molasses, tomato and mustard sauce with bacon until soft, sticky and sweet.',
    meta: 'Slow cooker baked beans with bacon and a molasses sauce, cooked for 8 hours. Ten servings, ready in 8 hours 15 minutes.',
    kw: ['slow cooker baked beans', 'crockpot baked beans', 'baked beans from dried beans', 'bacon baked beans', 'molasses baked beans'],
    why: 'Soak the beans overnight. That is the one thing to do the evening before, because dried beans cooked straight in a slow cooker with acid and sugar can stay hard for hours. Soaked beans swell and soften evenly, and the long, gentle heat does the rest.\n\nUse haricot beans, also sold as navy beans, which have a creamy texture and hold their shape. Drain the soaking water, rinse them, and put them in the cooker with the bacon, onion and the sauce. Sugar and acid slow down softening, so some cooks add the sweet ingredients only for the last hour. If your beans are old, do the same.\n\n**Do not lift the lid.** A slow cooker loses heat each time it is opened, and adds 20 minutes to the cooking time. Leave it alone for the first 6 hours, then check the beans for tenderness. They should be soft all the way through and the sauce thick enough to coat a spoon.\n\nIf the sauce is thin at the end, take the lid off, switch to high and let it reduce for 30 minutes. The beans improve overnight in the fridge, and are excellent on toast, with a jacket potato or alongside sausages.',
    ing: [
      '500 g dried haricot beans, soaked overnight and drained',
      '200 g smoked bacon, diced',
      '1 onion, finely chopped',
      '400 g tinned chopped tomatoes',
      '3 tbsp tomato purée',
      '4 tbsp black treacle',
      '3 tbsp light brown sugar',
      '2 tbsp English mustard',
      '2 tbsp Worcestershire sauce',
      '2 tbsp cider vinegar',
      '500 ml water',
      '1 tsp salt',
      '1 tsp smoked paprika'
    ],
    st: [
      'Put the beans, bacon and onion in the slow cooker.',
      'Mix the tomatoes, tomato purée, treacle, sugar, mustard, Worcestershire sauce, vinegar, water, salt and paprika. Pour over the beans and stir.',
      'Cover and cook on low for 8 hours, without lifting the lid, until the beans are completely tender.',
      'If the sauce is thin, uncover, switch to high and cook for 30 minutes.',
      'Stir and taste for seasoning before serving.'
    ],
    tips: [
      'Soak the beans overnight.',
      'Do not lift the lid during cooking.',
      'Reduce the sauce with the lid off if it is too thin.'
    ],
    pair: ['Buttered toast', 'Jacket potatoes', 'Sausages', 'Fried eggs'],
    store: 'Keeps for 5 days in the fridge or 3 months in the freezer.',
    rest: [480, 'Soaking overnight'],
    nut: [255, 15, 42, 3, 8, 11, 620]
  },

  'slow-cooker-beef-brisket': {
    d: 'A beef brisket cooked on low for 8 hours with onions, garlic and a tangy tomato sauce until tender enough to slice or shred.',
    meta: 'Slow cooker beef brisket with onions in a tangy sauce, cooked for 8 hours. Eight servings, ready in 8 hours 15 minutes.',
    kw: ['slow cooker beef brisket', 'crockpot brisket', 'tender braised brisket', 'brisket with onions', 'slow cooked beef brisket'],
    why: 'The smell of brisket as it slowly turns tender is the best reason to own a slow cooker. The cut is tough, lean and full of connective tissue, and it needs hours of low heat to relax, which is exactly what this appliance gives you.\n\nA 1.5 kg flat brisket fits most cookers. Rub it with salt, pepper, smoked paprika and garlic powder the night before if you can, to season it more deeply. Sear it hard on both sides in a hot pan for 4 minutes per side. The crust adds depth that the slow cooker cannot produce, and the browned bits dissolve into the sauce.\n\n**Cook it fat side up on a bed of sliced onions.** The fat bastes the meat as it softens, and the onions lift the brisket off the base so that it does not stew in its own juices. Pour in a measure of stock, Worcestershire sauce, ketchup and a splash of vinegar.\n\nAfter 8 hours on low, the meat should yield to a fork. Lift it out, rest it for 20 minutes, and slice against the grain. Skim the fat from the cooking liquid, reduce it in a pan for 10 minutes, and pour over the meat.',
    ing: [
      '1.5 kg beef brisket, flat cut',
      '2 tsp salt',
      '1 tsp black pepper',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '2 tbsp vegetable oil',
      '3 onions, sliced',
      '4 garlic cloves, sliced',
      '250 ml beef stock',
      '4 tbsp ketchup',
      '2 tbsp Worcestershire sauce',
      '2 tbsp cider vinegar',
      '1 tbsp light brown sugar'
    ],
    st: [
      'Mix the salt, pepper, paprika and garlic powder and rub it over the brisket. Heat the oil and sear the brisket for 4 minutes on each side.',
      'Spread the onions and garlic in the slow cooker. Set the brisket on top, fat side up.',
      'Mix the stock, ketchup, Worcestershire sauce, vinegar and sugar and pour around the meat.',
      'Cover and cook on low for 8 hours until fork tender.',
      'Rest the meat for 20 minutes, slice against the grain, and serve with the reduced cooking juices.'
    ],
    tips: [
      'Sear the brisket for flavour.',
      'Slice against the grain.',
      'Reduce the juices for a richer sauce.'
    ],
    pair: ['Mashed potatoes', 'Coleslaw', 'Pickles', 'Buttered carrots'],
    store: 'Keeps for 4 days in the fridge in its juices, or 3 months in the freezer.',
    nut: [440, 38, 9, 28, 1, 6, 920]
  },

  'slow-cooker-beef-chili-mac': {
    d: 'Beef mince, beans and tomatoes slow cooked on low for 5 hours, then stirred with macaroni and cheddar for the last 30 minutes.',
    meta: 'Slow cooker beef chili mac with beans, macaroni and cheddar, cooked for 5 hours. Six servings, ready in 5 hours 15 minutes.',
    kw: ['slow cooker beef chili mac', 'chili mac and cheese', 'crockpot chili macaroni', 'beef chili with macaroni', 'chili mac recipe'],
    why: 'Keep the pasta out until the end. That is the rule for every pasta dish in a slow cooker, because macaroni added at the start turns to paste after hours of heat. Add it in the last 30 minutes, and it cooks to tender in the chili liquid and thickens the whole pot.\n\nBrown the mince with onion and garlic first, in a pan, and drain off the fat. Slow cookers do not brown meat, and unbrowned mince cooks to a grey, crumbly texture and tastes flat. Spend 8 minutes in a frying pan with the spices, and the chili will taste of something.\n\n**Use a generous spice mix.** Chili powder, cumin, smoked paprika, oregano and a little cocoa all go into the meat before it hits the cooker. The slow heat dulls spices over a long cook, so more is needed than for a quick stovetop chili. Taste at the end and adjust.\n\nWhen the macaroni goes in, switch the cooker to high and stir well. Thirty minutes later, stir in a handful of grated cheddar until it melts into the sauce. Serve in bowls with extra cheese, soured cream and sliced spring onions.',
    ing: [
      '1 tbsp vegetable oil',
      '600 g beef mince',
      '1 onion, diced',
      '3 garlic cloves, crushed',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp salt',
      '800 g tinned chopped tomatoes',
      '400 g tinned kidney beans, drained',
      '400 g tinned black beans, drained',
      '500 ml beef stock',
      '200 g macaroni',
      '150 g cheddar, grated'
    ],
    st: [
      'Heat the oil in a pan and brown the mince for 8 minutes. Add the onion, garlic, chili powder, cumin, paprika, oregano and salt and cook for 3 minutes. Drain off the fat.',
      'Tip the mince into the slow cooker with the tomatoes, beans and stock.',
      'Cover and cook on low for 4 hours 30 minutes.',
      'Switch to high, stir in the macaroni, cover and cook for 30 minutes until tender.',
      'Stir in half of the cheddar until melted and serve with the rest on top.'
    ],
    tips: [
      'Add the macaroni at the end.',
      'Brown the mince before it goes in.',
      'Stir in extra stock if the chili is too thick.'
    ],
    pair: ['Cornbread', 'Green salad', 'Soured cream', 'Hot sauce'],
    store: 'Keeps for 4 days in the fridge. The pasta softens, so add stock when reheating.',
    nut: [640, 42, 55, 28, 12, 7, 1350]
  },

  'slow-cooker-beef-stroganoff': {
    d: 'Beef chuck and mushrooms slow cooked on low for 6 hours in a savoury sauce, finished with soured cream and served over egg noodles.',
    meta: 'Slow cooker beef stroganoff with mushrooms and soured cream, cooked for 6 hours. Six servings, ready in 6 hours 20 minutes.',
    kw: ['slow cooker beef stroganoff', 'crockpot beef stroganoff', 'beef stroganoff with egg noodles', 'tender beef stroganoff', 'creamy mushroom beef stroganoff'],
    why: 'A different method to the usual stroganoff, which is made from quick-cooking steak strips. This one uses braising beef, which turns meltingly tender over several hours and gives a deeper, richer sauce than the fast version. It suits a day when you want to come home to dinner.\n\nCut chuck steak into 3 cm cubes, toss in seasoned flour and sear in batches. The flour helps the crust form and thickens the sauce as it cooks. Add the mushrooms, onion and garlic to the cooker raw, with beef stock, Worcestershire sauce and a spoon of Dijon mustard. The mushrooms release a lot of liquid as they cook and turn the sauce dark.\n\n**Stir in the soured cream right at the end, off the heat.** Added to a hot cooker, the cream curdles and becomes grainy. Turn the cooker off, lift the lid, and stir in the cream with a little hot sauce from the pot first to temper it. The sauce turns pale, glossy and silky.\n\nServe over buttered egg noodles, with parsley scattered over and a spoon of extra soured cream. A dash of paprika on top is traditional.',
    ing: [
      '900 g beef chuck, cut into 3 cm cubes',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp vegetable oil',
      '1 onion, sliced',
      '300 g mushrooms, sliced',
      '3 garlic cloves, crushed',
      '400 ml beef stock',
      '2 tbsp Worcestershire sauce',
      '1 tbsp Dijon mustard',
      '1 tbsp tomato purée',
      '200 g soured cream',
      '300 g egg noodles',
      '2 tbsp parsley, chopped'
    ],
    st: [
      'Toss the beef with the flour, salt and pepper. Heat the oil and brown the beef in 3 batches for 4 minutes each.',
      'Put the beef, onion, mushrooms and garlic in the slow cooker.',
      'Whisk the stock, Worcestershire sauce, mustard and tomato purée and pour over.',
      'Cover and cook on low for 6 hours until the beef is tender.',
      'Cook the noodles. Turn off the cooker, stir in the soured cream, and serve over the noodles with the parsley.'
    ],
    tips: [
      'Brown the beef for flavour.',
      'Add the soured cream off the heat.',
      'Serve over buttered noodles.'
    ],
    pair: ['Buttered noodles', 'Green beans', 'Rye bread', 'Pickles'],
    store: 'Keeps for 4 days in the fridge. Reheat gently without boiling.',
    nut: [641, 40, 46, 33, 3, 5, 840]
  },

  'slow-cooker-butter-chicken': {
    d: 'Chicken thighs in a spiced tomato and butter sauce cooked on low for 5 hours, finished with cream and fenugreek.',
    meta: 'Slow cooker butter chicken in a spiced tomato sauce, cooked for 5 hours. Six servings, ready in 5 hours 15 minutes.',
    kw: ['slow cooker butter chicken', 'crockpot butter chicken', 'butter chicken recipe', 'murgh makhani', 'creamy butter chicken'],
    why: 'It looks like a restaurant dish and cooks like a stew, which is why butter chicken suits the slow cooker so well. The sauce, a blend of tomato, butter, cream and mild spices, is one of the signature dishes of Punjabi cooking, and long, slow heat marries the flavours until the whole pot tastes rounded and mellow.\n\nMarinate the chicken in yogurt, ginger, garlic, garam masala, turmeric and chilli for at least an hour, or overnight. The yogurt tenderises the thighs and the spices penetrate deeper than they would in a quick marinade. Put the chicken and marinade in the cooker with tomato purée, passata and a spoon of sugar to balance the acid.\n\n**Add the cream and butter at the end.** Dairy cooked for hours separates and goes grainy in a slow cooker. After 5 hours on low, lift the lid, stir in the butter cut into cubes and the cream, and let the sauce stand for 10 minutes with the heat off. It turns silky.\n\nCrush a spoonful of dried fenugreek leaves between your palms and scatter over the top, which adds the faintly bitter, maple-like fragrance of a good butter chicken. Serve with basmati rice and warm naan.',
    ing: [
      '900 g chicken thighs, boneless, cut into chunks',
      '150 g plain yogurt',
      '1 tbsp fresh ginger, grated',
      '4 garlic cloves, crushed',
      '2 tsp garam masala',
      '1 tsp turmeric',
      '1 tsp chilli powder',
      '1 tsp salt',
      '2 tbsp tomato purée',
      '400 g passata',
      '1 tbsp light brown sugar',
      '50 g butter, cubed',
      '150 ml double cream',
      '1 tsp dried fenugreek leaves',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Mix the chicken with the yogurt, ginger, garlic, garam masala, turmeric, chilli and salt. Marinate for at least 1 hour.',
      'Put the chicken and marinade in the slow cooker. Stir in the tomato purée, passata and sugar.',
      'Cover and cook on low for 5 hours until the chicken is very tender.',
      'Turn off the heat. Stir in the butter and cream and leave for 10 minutes.',
      'Crush the fenugreek over the top, scatter with the coriander and serve.'
    ],
    tips: [
      'Marinate the chicken for the best flavour.',
      'Add the dairy at the end.',
      'Crush the fenugreek leaves before adding.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Poppadoms'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    rest: [60, 'Marinating'],
    nut: [383, 34, 10, 23, 2, 7, 630]
  },

  'slow-cooker-chicken-cacciatore': {
    d: 'Chicken thighs slow cooked on low for 5 hours with peppers, mushrooms, tomatoes and red wine in a rustic Italian hunter-style stew.',
    meta: 'Slow cooker chicken cacciatore with peppers, mushrooms and tomato, cooked for 5 hours. Six servings, ready in 5 hours 15 minutes.',
    kw: ['slow cooker chicken cacciatore', 'crockpot chicken cacciatore', 'chicken cacciatore with peppers', 'italian hunter style chicken', 'cacciatore chicken stew'],
    why: 'The smell of tomatoes, wine and herbs drifting through the house by mid-afternoon is the real reward of this dish. Cacciatore means hunter in Italian, and the idea is a rustic stew of chicken braised with whatever the hunter would have gathered: onions, peppers, mushrooms, herbs and wine.\n\nThe slow cooker suits the dish because thighs cook best at a low temperature. They turn silky and flavourful over 5 hours, while breast meat would have dried to string. Brown the thighs skin side down before they go in, if you have a few minutes. The colour adds a deeper, roasted flavour, and any fat that renders can be tipped away.\n\n**Add the peppers late.** Peppers cooked for 5 hours lose their shape and flavour. Stir them in for the last 90 minutes, so they soften but stay sweet and slightly firm. Mushrooms can go in from the start since they shrink and release their liquid into the sauce.\n\nThe finished sauce is thin from the juices of the chicken. Lift out the thighs, turn the cooker to high with the lid off, and reduce the liquid for 20 minutes. Add the olives and basil last and serve over polenta, pasta or crusty bread.',
    ing: [
      '8 chicken thighs, bone in, about 1.2 kg',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 onion, sliced',
      '250 g mushrooms, quartered',
      '4 garlic cloves, crushed',
      '150 ml red wine',
      '800 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp dried oregano',
      '1 bay leaf',
      '2 peppers, sliced',
      '60 g black olives',
      '2 tbsp basil, torn'
    ],
    st: [
      'Season the chicken with the salt. Brown in the oil in a pan for 5 minutes, skin side down. Transfer to the slow cooker.',
      'Add the onion, mushrooms, garlic, wine, tomatoes, tomato purée, oregano and bay leaf.',
      'Cover and cook on low for 3 hours 30 minutes. Stir in the peppers and cook for 1 hour 30 minutes more.',
      'Lift out the chicken. Cook the sauce on high with the lid off for 20 minutes to thicken.',
      'Return the chicken, stir in the olives and basil and serve.'
    ],
    tips: [
      'Add the peppers for the last 90 minutes.',
      'Reduce the sauce at the end.',
      'Use thighs: they stay moist over a long cook.'
    ],
    pair: ['Polenta', 'Crusty bread', 'Pasta', 'Green salad'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [368, 43, 13, 16, 4, 8, 740]
  }
};
