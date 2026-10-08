'use strict';

/**
 * Volume thirty-nine — fish, seafood and vegetable mains.
 *
 * Salmon, white fish, prawns and mussels cooked simply, curries and a lasagne
 * without meat, and a few chicken dishes people search by flavour. Times are
 * the recipe's own; hobs and ovens differ, so each method says when to check
 * early. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'lamb-meatballs': {
    d: 'Lamb mince with cumin, mint and breadcrumbs shaped into small meatballs and fried for 12 minutes, served in a tomato and chickpea sauce.',
    meta: 'Lamb meatballs: lamb mince with cumin, mint and breadcrumbs fried until browned, then simmered in a tomato and chickpea sauce. Four servings.',
    kw: ['lamb meatballs', 'spiced lamb meatballs', 'lamb meatballs in tomato sauce', 'middle eastern lamb meatballs', 'easy lamb meatballs'],
    why: 'Lamb makes a more fragrant meatball than beef: it is richer and sweeter, and it takes cumin, mint and garlic the way few meats do. A tomato and chickpea sauce makes the dish a full meal.\n\nMix the mince with the breadcrumbs, egg, onion and spices, but only until combined. **Overworked mince goes tight and rubbery.** Wet your hands to roll the mixture into 24 balls about the size of a walnut.\n\nBrown the meatballs in a hot pan, in two batches, for about 4 minutes each, turning to colour every side. They do not need to cook through, since they finish in the sauce.\n\nTip in the tomatoes, chickpeas and a splash of water, and simmer gently for 8 minutes until the sauce thickens and the meatballs are cooked through. If your hob runs hot, check at 6 minutes. Scatter with mint and serve with couscous or warm flatbread. Serve them hot from the pan, as lamb fat sets firm and greasy as it cools.',
    ing: [
      '500 g lamb mince',
      '40 g breadcrumbs',
      '1 egg',
      '1 small onion, grated',
      '3 garlic cloves, grated',
      '2 tsp ground cumin',
      '2 tbsp chopped mint',
      '1 tsp salt',
      '2 tbsp olive oil',
      '400 g tinned chopped tomatoes',
      '400 g tinned chickpeas, drained',
      '100 ml water'
    ],
    st: [
      'Mix the lamb, breadcrumbs, egg, onion, half the garlic, cumin, half the mint and the salt until combined. Roll into 24 balls.',
      'Brown the meatballs in the oil in two batches for 4 minutes each. Set aside.',
      'Add the remaining garlic, tomatoes, chickpeas and water to the pan and return the meatballs.',
      'Simmer for 8 minutes until the meatballs are cooked through. Scatter with the remaining mint.'
    ],
    tips: [
      'Do not overwork the mince.',
      'Brown in batches.',
      'If your hob runs hot, check at 6 minutes.',
      'Wet your hands for rolling.'
    ],
    pair: ['Couscous', 'Flatbread', 'Yoghurt', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat gently in the sauce.',
    nut: [580, 33, 31, 36, 7, 7, 1070]
  },

  'lemon-butter-salmon': {
    d: 'Salmon fillets pan-fried for 10 minutes and finished with a sauce of butter, lemon juice and garlic.',
    meta: 'Lemon butter salmon: salmon fillets pan-fried until crisp-skinned and finished with a sauce of butter, lemon and garlic. Four servings in 20 minutes.',
    kw: ['lemon butter salmon', 'pan fried lemon butter salmon', 'salmon with lemon butter sauce', 'easy lemon butter salmon', 'garlic lemon butter salmon'],
    why: 'Three ingredients make a restaurant sauce: butter, lemon and garlic. The salmon needs nothing more, and the pan does the rest. This is one of the quickest ways to a good fish dinner.\n\nPat the fillets dry, season them and put them in a hot, lightly oiled pan skin-side down. **Do not move them for 5 minutes**, so the skin crisps and releases from the pan on its own. If you force it, it tears.\n\nTurn the fillets, lower the heat and add the butter and garlic. As the butter foams, spoon it over the fish for 3 minutes. If your pan runs hot, check at 2 minutes and take the garlic off before it browns.\n\nThe salmon is done when it flakes at the thickest part but is still a little translucent in the centre. Add the lemon juice to the pan at the end, swirl, and pour the sauce over the fish.',
    ing: [
      '4 salmon fillets, skin on, about 150 g each',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '50 g butter',
      '3 garlic cloves, sliced',
      '2 lemons, 1 juiced and 1 cut into wedges',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Pat the salmon dry and season with the salt and pepper.',
      'Heat the oil in a frying pan over medium-high heat and lay in the fillets skin-side down. Cook for 5 minutes without moving them.',
      'Turn the fillets, lower the heat and add the butter and garlic. Spoon the butter over the fish for 3 minutes.',
      'Add the lemon juice, swirl, scatter with the parsley and serve with the wedges.'
    ],
    tips: [
      'Dry the skin and do not move the fish.',
      'Lower the heat before adding butter.',
      'If your pan runs hot, check at 2 minutes.',
      'Add the lemon last.'
    ],
    pair: ['New potatoes', 'Asparagus', 'Green beans', 'Rice'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [437, 31, 4, 33, 1, 1, 360]
  },

  'cajun-salmon': {
    d: 'Salmon fillets coated in a smoky Cajun spice rub and pan-seared for 10 minutes until the crust is dark and the middle is pink.',
    meta: 'Cajun salmon: salmon fillets coated in a smoky Cajun spice rub and seared until the crust is dark. Four servings in 20 minutes.',
    kw: ['cajun salmon', 'blackened cajun salmon', 'pan seared cajun salmon', 'cajun spiced salmon', 'easy cajun salmon'],
    why: 'Salmon is rich enough to carry a lot of spice, and a Cajun rub gives it a dark, savoury, slightly smoky crust. The spice blend is easy to mix from the cupboard, so there is no need to buy a pot.\n\nMix the paprika, garlic powder, onion powder, thyme, oregano, cayenne, salt and pepper. **Taste a little of the rub on its fingertip**: if it is too hot, cut back the cayenne, since the heat concentrates as it sears.\n\nPat the fish dry, brush with oil and press the rub onto the flesh side. Heat a heavy pan until it is very hot. The spice will blacken, and that is the point, but it should be dark red-brown, not burnt black.\n\nCook the fillets spice-side down for 4 minutes, turn and cook for 4 minutes more. If your pan runs hot, check at 3 minutes. Open a window, as the pan will smoke. Serve with lime and a cool dressing to balance the heat.',
    ing: [
      '4 salmon fillets, about 150 g each',
      '1 tbsp vegetable oil',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp dried thyme',
      '1 tsp dried oregano',
      '1/2 tsp cayenne pepper',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '2 limes, cut into wedges'
    ],
    st: [
      'Mix the paprika, garlic powder, onion powder, thyme, oregano, cayenne, salt and pepper.',
      'Pat the salmon dry, brush with the oil and press the spice mix onto the flesh side.',
      'Heat a heavy frying pan over high heat. Cook the salmon spice-side down for 4 minutes, turn and cook for 4 minutes more.',
      'Serve with the lime wedges.'
    ],
    tips: [
      'Adjust the cayenne to taste.',
      'Use a very hot pan.',
      'If your pan runs hot, check at 3 minutes.',
      'Open a window for the smoke.'
    ],
    pair: ['Dirty rice', 'Coleslaw', 'Corn on the cob', 'Avocado salad'],
    store: 'Keeps in the fridge for 1 day. Flake into salads.',
    nut: [351, 31, 5, 23, 2, 1, 660]
  },

  'haddock-chowder': {
    d: 'Smoked haddock simmered with potatoes, leeks and sweetcorn in milk for 25 minutes into a thick, creamy chowder.',
    meta: 'Haddock chowder: smoked haddock simmered with potatoes, leeks and sweetcorn in milk into a thick, creamy chowder. Four servings.',
    kw: ['haddock chowder', 'smoked haddock chowder', 'creamy haddock chowder', 'fish chowder with haddock', 'british haddock chowder'],
    why: 'Smoked haddock lends a chowder its character: salty, smoky and deep, in a way that no amount of herbs can do. The milk and potato do the rest, giving the thick, comforting body.\n\nPoach the haddock gently in the milk for 6 minutes, then lift it out and flake it. **Keep the poaching milk**, since it is full of smoke and salt and becomes the base of the soup.\n\nSoften the leeks and potatoes in butter, add the poaching milk and a little stock, and simmer for 12 minutes until the potato is tender. Mash a few pieces against the side of the pan to thicken the broth.\n\nReturn the haddock with the sweetcorn and warm through for 3 minutes. If your hob runs hot, keep the heat low, since milk catches and splits. Season with pepper, and with salt only if needed, as the fish is already salty. Finish with parsley.',
    ing: [
      '400 g smoked haddock fillet',
      '600 ml milk',
      '30 g butter',
      '2 leeks, sliced',
      '500 g potatoes, diced',
      '300 ml vegetable stock',
      '200 g sweetcorn',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Poach the haddock in the milk for 6 minutes over low heat. Lift out, flake and keep the milk.',
      'Soften the leeks and potatoes in the butter for 5 minutes. Add the poaching milk and stock and simmer for 12 minutes.',
      'Mash a few pieces of potato against the pan to thicken. Stir in the haddock and sweetcorn and warm for 3 minutes.',
      'Season with the pepper and scatter with the parsley.'
    ],
    tips: [
      'Keep the poaching milk.',
      'Mash a little potato to thicken.',
      'If your hob runs hot, keep the heat low.',
      'Taste before adding salt.'
    ],
    pair: ['Crusty bread', 'Cheese scones', 'Green salad', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently without boiling.',
    nut: [429, 29, 49, 13, 5, 13, 410]
  },

  'trout-almondine': {
    d: 'Trout fillets pan-fried for 6 minutes and finished with a brown butter sauce of toasted almonds, lemon and parsley.',
    meta: 'Trout almondine: trout fillets pan-fried until crisp and finished with a brown butter sauce of toasted almonds, lemon and parsley. Two servings.',
    kw: ['trout almondine', 'trout amandine', 'pan fried trout with almonds', 'classic trout almondine', 'trout with brown butter and almonds'],
    why: 'Almondine means with almonds, and the French classic is trout in a nutty brown butter. It is a dish that looks like effort and takes about twelve minutes, because the work is all in the timing of the butter.\n\nDust the trout lightly with seasoned flour and fry skin-side down in a little oil for 3 minutes, then turn for 2 minutes more. Lift it onto warm plates. Wipe the pan clean of burnt flour before the sauce.\n\nMelt the butter over medium heat and add the almonds. **Watch the butter closely**: it foams, then turns a nut brown and smells toasty, and the next stage is burnt. That moment takes about 2 minutes.\n\nIf your pan runs hot, take it off the heat as soon as the colour turns amber. Add the lemon juice, which will spit, then the parsley. Spoon the almonds and butter over the fish. Serve with boiled potatoes and green beans.',
    ing: [
      '2 trout fillets, skin on, about 150 g each',
      '2 tbsp plain flour',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp vegetable oil',
      '50 g butter',
      '40 g flaked almonds',
      '1 lemon, juiced',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Mix the flour, salt and pepper and dust the trout lightly.',
      'Fry the fillets in the oil, skin-side down, for 3 minutes. Turn and cook for 2 minutes more. Lift onto warm plates.',
      'Wipe the pan, melt the butter over medium heat, add the almonds and cook for 2 minutes until nut brown.',
      'Add the lemon juice and parsley and spoon over the fish.'
    ],
    tips: [
      'Dust with flour lightly.',
      'Watch the butter as it browns.',
      'If your pan runs hot, take it off the heat at amber.',
      'Wipe out the pan before the sauce.'
    ],
    pair: ['Boiled potatoes', 'Green beans', 'Buttered spinach', 'White wine'],
    store: 'Best eaten at once.',
    nut: [605, 36, 14, 45, 4, 2, 670]
  },

  'prawn-curry': {
    d: 'Raw king prawns simmered for 8 minutes in a tomato, coconut and ginger sauce with garam masala and a squeeze of lime.',
    meta: 'Prawn curry: raw king prawns simmered in a tomato, coconut and ginger sauce with garam masala and a squeeze of lime. Four servings in 30 minutes.',
    kw: ['prawn curry', 'easy prawn curry', 'coconut prawn curry', 'indian prawn curry', 'prawn curry with coconut milk'],
    why: 'A prawn curry is quick in a way a chicken curry cannot be, since the prawns cook in minutes and the sauce is the only part that needs time. The sauce here takes 15, and it is worth being patient with it.\n\nSoften the onion in oil until golden, about 8 minutes, then add garlic, ginger and the spices and stir for 1 minute. **Cook the tomatoes until the oil separates at the edges.** This is the sign the raw taste has gone and the sauce has deepened.\n\nPour in the coconut milk, simmer for 5 minutes, and taste. It should be balanced between sweet, sour and hot, so add salt, a pinch of sugar or lime juice as needed.\n\nAdd the prawns last, and cook for 3 to 4 minutes until they curl and turn pink. If your hob runs hot, check at 2 minutes. Overcooked prawns are rubbery. Finish with coriander and a little lime.',
    ing: [
      '500 g raw king prawns, peeled',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '3 garlic cloves, grated',
      '1 tbsp grated ginger',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '200 ml coconut milk',
      '1 tsp garam masala',
      '1 tsp salt',
      '1 lime, juiced',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Soften the onion in the oil for 8 minutes until golden. Add the garlic, ginger, coriander, turmeric and chilli powder and stir for 1 minute.',
      'Add the tomatoes and cook for 8 minutes until the oil separates. Pour in the coconut milk and simmer for 5 minutes.',
      'Add the prawns and garam masala and cook for 3 to 4 minutes until pink and curled.',
      'Stir in the salt and lime juice and scatter with the coriander.'
    ],
    tips: [
      'Cook the onion until golden.',
      'Add the prawns at the end.',
      'If your hob runs hot, check the prawns at 2 minutes.',
      'Taste and adjust with lime.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Poppadoms'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat gently.',
    nut: [313, 28, 12, 17, 3, 5, 800]
  },

  'prawn-linguine': {
    d: 'Linguine tossed with prawns, garlic, chilli, white wine and parsley in a light, glossy sauce, ready in 25 minutes.',
    meta: 'Prawn linguine: linguine tossed with prawns, garlic, chilli, white wine and parsley in a light, glossy sauce. Four servings in 25 minutes.',
    kw: ['prawn linguine', 'garlic prawn linguine', 'chilli prawn linguine', 'prawn linguine with white wine', 'easy prawn linguine'],
    why: 'A good prawn linguine tastes of the sea and the stove in equal measure, and it comes together in the time it takes to boil the pasta. The sauce is a trick of timing and starch.\n\nBoil the linguine in well-salted water for 1 minute less than the packet says. Keep a mug of the water. **The pasta water is the sauce**: its starch binds the oil, wine and prawn juices into something glossy.\n\nFry the garlic and chilli in olive oil for 30 seconds, until fragrant but not coloured. Add the prawns and cook for 2 minutes, turning once, until pink. Pour in the wine and let it bubble for 2 minutes.\n\nTip in the drained pasta, a splash of the water and the parsley, and toss over the heat for 1 minute until the sauce clings to the strands. If your hob runs hot, work quickly. Finish with lemon zest and a little more olive oil.',
    ing: [
      '350 g linguine',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1 red chilli, sliced',
      '400 g raw king prawns, peeled',
      '120 ml white wine',
      '3 tbsp chopped parsley',
      '1 lemon, zest only',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the linguine in salted water for 1 minute less than the packet says. Keep a mug of the water and drain.',
      'Warm half the oil with the garlic and chilli for 30 seconds. Add the prawns and cook for 2 minutes.',
      'Pour in the wine and bubble for 2 minutes.',
      'Add the pasta, a splash of the water, the parsley, lemon zest, salt and remaining oil and toss for 1 minute.'
    ],
    tips: [
      'Keep the pasta water.',
      'Do not let the garlic brown.',
      'If your hob runs hot, work quickly.',
      'Do not overcook the prawns.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Dry white wine'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [548, 32, 69, 16, 3, 3, 450]
  },

  'mussels-marinara': {
    d: 'Mussels steamed open for 5 minutes in a garlicky tomato and white wine sauce and served with crusty bread.',
    meta: 'Mussels marinara: mussels steamed open in a garlicky tomato and white wine sauce and served with crusty bread. Two servings.',
    kw: ['mussels marinara', 'mussels in tomato sauce', 'mussels in tomato and wine', 'italian mussels marinara', 'steamed mussels in tomato sauce'],
    why: 'Mussels are cheap, fast and a little intimidating, and none of that is warranted. They need a good scrub, a hot lidded pot and about five minutes, and the cooking liquor makes the sauce.\n\nScrub the shells under cold water and pull away the beards. Discard any that are cracked or stay open when tapped, since a mussel that does not close was already dead. **After cooking, throw out any that stay shut**, because they were not alive to begin with.\n\nMake the sauce first: soften garlic and chilli in olive oil, add the wine and tomatoes and simmer for 8 minutes until thick.\n\nTip in the mussels, cover tightly and cook over high heat for 5 minutes, shaking the pot once or twice. If your hob runs hot, check at 4 minutes. They are done when the shells open. Add parsley, give the pot a shake and serve in bowls with plenty of bread for the sauce.',
    ing: [
      '1 kg mussels',
      '3 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1 red chilli, sliced',
      '120 ml white wine',
      '400 g tinned chopped tomatoes',
      '1/2 tsp salt',
      '3 tbsp chopped parsley',
      '1 loaf crusty bread, 200 g'
    ],
    st: [
      'Scrub the mussels and pull off the beards. Discard any that are cracked or stay open when tapped.',
      'Soften the garlic and chilli in the oil for 1 minute. Add the wine and tomatoes and simmer for 8 minutes.',
      'Tip in the mussels, cover and cook over high heat for 5 minutes, shaking the pot, until they open. Discard any that stay shut.',
      'Stir in the salt and parsley and serve with the bread.'
    ],
    tips: [
      'Discard cracked or open mussels before cooking.',
      'Discard any that stay shut after cooking.',
      'If your hob runs hot, check at 4 minutes.',
      'Serve with plenty of bread.'
    ],
    pair: ['Crusty bread', 'Chips', 'Green salad', 'White wine'],
    store: 'Eat at once. Do not keep or reheat cooked mussels.',
    nut: [700, 64, 39, 32, 3, 7, 2180]
  },

  'seafood-paella': {
    d: 'Bomba rice cooked in a wide pan with saffron, prawns, mussels and squid until the base crisps into a golden crust.',
    meta: 'Seafood paella: bomba rice cooked in a wide pan with saffron, prawns, mussels and squid until the base forms a golden crust. Six servings.',
    kw: ['seafood paella', 'spanish seafood paella', 'paella with prawns and mussels', 'homemade seafood paella', 'paella de marisco'],
    why: 'Paella is a method more than a recipe: rice cooked in a wide, shallow pan so that it forms a thin layer, with a golden crust at the bottom called socarrat. Seafood paella adds the sea to the mix.\n\nUse short-grain paella rice, which absorbs liquid without going sticky. Start with a sofrito of onion, garlic, pepper and tomato cooked down to a jammy paste. **The flavour of the whole dish starts here**, so give it 10 minutes.\n\nAdd the rice, stir for a minute to coat, then pour in hot stock with saffron. Spread the rice level and do not stir again. Simmer for 12 minutes, then nestle the prawns, mussels and squid into the rice.\n\nCook for 10 minutes more, turning the heat up for the last minute to crisp the base. If your hob runs hot, check at 8 minutes. Discard any mussels that do not open. Cover with foil, rest for 5 minutes and serve from the pan.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, finely chopped',
      '1 red pepper, diced',
      '4 garlic cloves, chopped',
      '2 tomatoes, grated',
      '1 tsp smoked paprika',
      '300 g paella rice',
      '900 ml fish stock, hot',
      '0.2 g saffron strands',
      '300 g raw prawns',
      '300 g mussels, cleaned',
      '200 g squid rings',
      '100 g frozen peas',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide paella pan. Soften the onion and pepper for 6 minutes, add the garlic, tomatoes and paprika and cook for 10 minutes until jammy.',
      'Stir in the rice for 1 minute. Pour in the hot stock with the saffron, spread level and simmer without stirring for 12 minutes.',
      'Nestle in the prawns, mussels, squid and peas and cook for 10 minutes more, turning the heat up for the last minute.',
      'Discard any mussels that stayed shut. Cover with foil for 5 minutes and serve with the lemon.'
    ],
    tips: [
      'Cook the sofrito for 10 minutes.',
      'Do not stir the rice once the stock is in.',
      'If your hob runs hot, check at 8 minutes.',
      'Crisp the base at the end.'
    ],
    pair: ['Lemon wedges', 'Aioli', 'Green salad', 'Dry white wine'],
    store: 'Best eaten at once. Seafood rice should not be reheated.',
    nut: [432, 28, 53, 12, 3, 4, 740]
  },

  'vegetable-curry': {
    d: 'Potatoes, cauliflower, carrots and peas simmered for 25 minutes in a coconut and tomato curry sauce with ginger and garlic.',
    meta: 'Vegetable curry: potatoes, cauliflower, carrots and peas simmered in a coconut and tomato curry sauce with ginger and garlic. Four servings.',
    kw: ['vegetable curry', 'easy vegetable curry', 'coconut vegetable curry', 'mixed vegetable curry', 'vegan vegetable curry'],
    why: 'A vegetable curry lives or dies by its sauce, since the vegetables can only be as good as what they soak up. The method is the same as for any curry: build the base slowly, then let the vegetables finish in it.\n\nSoften the onion for 10 minutes until it begins to colour, then add garlic, ginger and curry powder and stir for a minute. **Toast the spices briefly**, so the raw taste cooks off and the flavours open.\n\nAdd the tomatoes and coconut milk, then the hard vegetables first: potato and carrot take about 15 minutes. Cauliflower goes in 10 minutes before the end and the peas in the last 3, so nothing turns to mush.\n\nSimmer gently, partly covered, for 25 minutes in all. If your hob runs hot, check at 20 minutes. Season with salt and lemon, and scatter with coriander before serving over rice. Frozen peas and cauliflower work as well as fresh ones, so the dish can be made from the freezer and cupboard.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, grated',
      '1 tbsp grated ginger',
      '3 tbsp curry powder',
      '400 g tinned chopped tomatoes',
      '400 ml coconut milk',
      '400 g potatoes, cubed',
      '2 carrots, sliced',
      '300 g cauliflower florets',
      '150 g frozen peas',
      '1 tsp salt',
      '1 lemon, juiced'
    ],
    st: [
      'Soften the onion in the oil for 10 minutes. Add the garlic, ginger and curry powder and stir for 1 minute.',
      'Add the tomatoes, coconut milk, potatoes and carrots and simmer partly covered for 12 minutes.',
      'Add the cauliflower and simmer for 10 minutes, then the peas for 3 minutes.',
      'Season with the salt and lemon juice.'
    ],
    tips: [
      'Cook the onion until it colours.',
      'Add the vegetables in order of firmness.',
      'If your hob runs hot, check at 20 minutes.',
      'Finish with lemon.'
    ],
    pair: ['Basmati rice', 'Naan', 'Mango chutney', 'Cucumber raita'],
    store: 'Keeps in the fridge for 4 days and improves overnight. Reheat gently.',
    nut: [441, 10, 44, 25, 11, 12, 670]
  },

  'spinach-lasagna': {
    d: 'Lasagne sheets layered with spinach, ricotta, tomato sauce and mozzarella and cooked for 45 minutes until bubbling.',
    meta: 'Spinach lasagna: lasagne sheets layered with spinach, ricotta, tomato sauce and mozzarella and baked until bubbling. Six servings.',
    kw: ['spinach lasagna', 'spinach and ricotta lasagna', 'vegetarian spinach lasagna', 'cheesy spinach lasagna', 'meatless lasagna'],
    why: 'A lasagne without meat can feel like a lesser thing, but spinach and ricotta give it its own character: green, creamy, and lighter on the stomach. It also takes half the effort of a meat ragù.\n\nThe filling is where care is needed. Wilt the spinach, then squeeze it as dry as you possibly can. **Wet spinach is the cause of a watery lasagne**, and no amount of baking will rescue it. Mix with ricotta, parmesan, an egg, nutmeg and plenty of pepper.\n\nThe tomato sauce can be a jar or a quick simmer of tinned tomatoes with garlic, which takes 15 minutes.\n\nLayer sauce, pasta, filling and mozzarella three times, finishing with sauce and cheese. Cover with foil and cook at 190°C for 30 minutes, then uncover and cook for 15 minutes more, until browned. If your oven runs hot, check at 38 minutes. Stand for 15 minutes before cutting, which firms the layers.',
    ing: [
      '500 g fresh spinach',
      '500 g ricotta',
      '1 egg',
      '40 g parmesan, grated',
      '1/4 tsp ground nutmeg',
      '1/2 tsp black pepper',
      '700 g tomato pasta sauce',
      '9 dried lasagne sheets, about 200 g',
      '250 g mozzarella, grated',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 190°C. Wilt the spinach in a pan, cool and squeeze very dry. Chop and mix with the ricotta, egg, parmesan, nutmeg, pepper and salt.',
      'Spread a little sauce in a dish. Layer sheets, a third of the filling, sauce and mozzarella. Repeat twice, finishing with sauce and mozzarella.',
      'Cover with foil and cook for 30 minutes. Uncover and cook for 15 minutes more until browned.',
      'Stand for 15 minutes before cutting.'
    ],
    tips: [
      'Squeeze the spinach completely dry.',
      'Cover for the first 30 minutes.',
      'If your oven runs hot, check at 38 minutes.',
      'Let it stand before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted tomatoes', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. Reheat portions covered in the oven.',
    nut: [480, 30, 36, 24, 4, 5, 900]
  },

  'eggplant-curry': {
    d: 'Aubergine cubes fried until golden and simmered for 20 minutes in a tomato and onion curry sauce with cumin and turmeric.',
    meta: 'Eggplant curry: aubergine cubes fried until golden and simmered in a tomato and onion curry sauce with cumin and turmeric. Four servings.',
    kw: ['eggplant curry', 'aubergine curry', 'easy eggplant curry', 'indian eggplant curry', 'vegan eggplant curry'],
    why: 'Aubergine in a curry can be creamy and sweet, or it can be oily and grey. The difference lies in two steps: how the aubergine is cooked first, and how long the sauce is given.\n\nCut the aubergine into 3 cm cubes and fry in a good amount of hot oil until golden on all sides, about 8 minutes. **Do not crowd the pan**, since the cubes will steam and turn to mush. They will soak up oil at first and then give it back.\n\nIn the same pan, soften the onion, then add garlic, ginger, cumin, coriander and turmeric. Cook the tomatoes down for 8 minutes until the oil separates at the edges.\n\nReturn the aubergine with a splash of water, cover and simmer for 20 minutes until completely soft. If your hob runs hot, check at 15 minutes. Stir in a little sugar and lemon juice to balance the sauce, and finish with coriander. It is best served with rice or flatbread.',
    ing: [
      '2 large aubergines, about 700 g, cubed',
      '5 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, grated',
      '1 tbsp grated ginger',
      '2 tsp ground cumin',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '400 g tinned chopped tomatoes',
      '150 ml water',
      '1 tsp salt',
      '1 tsp sugar',
      '1 lemon, juiced'
    ],
    st: [
      'Fry the aubergine in 4 tbsp of the oil in batches for 8 minutes until golden. Set aside.',
      'Soften the onion in the remaining oil for 8 minutes. Add the garlic, ginger and spices and stir for 1 minute.',
      'Add the tomatoes and cook for 8 minutes until the oil separates. Return the aubergine with the water.',
      'Cover and simmer for 20 minutes until soft. Stir in the salt, sugar and lemon juice.'
    ],
    tips: [
      'Do not crowd the pan.',
      'Cook the tomatoes until the oil separates.',
      'If your hob runs hot, check at 15 minutes.',
      'Balance with sugar and lemon.'
    ],
    pair: ['Basmati rice', 'Chapati', 'Plain yoghurt', 'Mango chutney'],
    store: 'Keeps in the fridge for 4 days. Reheat gently.',
    nut: [266, 4, 22, 18, 8, 11, 610]
  },

  'pumpkin-gnocchi': {
    d: 'Light gnocchi made from roasted pumpkin, ricotta and flour, boiled for 2 minutes and tossed in sage butter.',
    meta: 'Pumpkin gnocchi: light gnocchi made from roasted pumpkin, ricotta and flour, boiled briefly and tossed in sage butter. Four servings.',
    kw: ['pumpkin gnocchi', 'homemade pumpkin gnocchi', 'pumpkin ricotta gnocchi', 'pumpkin gnocchi with sage butter', 'butternut gnocchi'],
    why: 'Homemade gnocchi has a reputation for being difficult, and a pumpkin version is more forgiving than potato. The trick is to keep the dough dry and to handle it as little as possible.\n\nRoast the pumpkin until the edges brown, then mash and leave it to cool. **Squeeze the mash in a clean cloth** to remove water, since the more water there is, the more flour the dough takes, and the heavier the gnocchi will be.\n\nMix the pumpkin with ricotta, parmesan, egg, nutmeg and salt, then fold in the flour until just combined. The dough will be soft and slightly sticky, and that is right. Dust the surface, roll into ropes and cut into 2 cm pieces.\n\nBoil in batches in salted water for 2 minutes, until they float. If your hob runs hot, lift them out the moment they rise. Brown the butter with sage leaves and toss the gnocchi gently in it.',
    ing: [
      '600 g pumpkin, peeled and cubed',
      '1 tbsp olive oil',
      '150 g ricotta',
      '40 g parmesan, grated',
      '1 egg',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '200 g plain flour',
      '60 g butter',
      '12 sage leaves'
    ],
    st: [
      'Heat the oven to 200°C. Roast the pumpkin with the oil for 25 minutes until soft and browned. Mash and cool, then squeeze in a clean cloth.',
      'Mix the pumpkin, ricotta, parmesan, egg, nutmeg and salt. Fold in the flour until just combined.',
      'Roll into ropes on a floured surface, cut into 2 cm pieces and boil in batches for 2 minutes until they float.',
      'Brown the butter with the sage and toss the gnocchi gently in it.'
    ],
    tips: [
      'Squeeze the pumpkin dry.',
      'Handle the dough as little as possible.',
      'Lift the gnocchi as soon as they float.',
      'Brown the butter gently.'
    ],
    pair: ['Green salad', 'Parmesan shavings', 'Toasted hazelnuts', 'White wine'],
    store: 'Best eaten at once. Uncooked gnocchi freeze well on a tray.',
    nut: [505, 16, 54, 25, 5, 5, 800]
  },

  'honey-sriracha-salmon-bites': {
    d: 'Salmon cubes tossed in honey, sriracha, soy sauce and garlic and cooked for 10 minutes until sticky and caramelised.',
    meta: 'Honey sriracha salmon bites: salmon cubes tossed in honey, sriracha, soy sauce and garlic and cooked until sticky and caramelised. Four servings.',
    kw: ['honey sriracha salmon bites', 'sriracha salmon bites', 'honey sriracha salmon', 'sticky salmon bites', 'salmon bites with honey'],
    why: 'Sweet, hot and sticky: the honey and sriracha glaze is a trick of balance, and salmon is a fish that can carry it. Cut into bites, the fish takes more sauce per mouthful, and it cooks in minutes.\n\nCut skinless salmon into 3 cm cubes, which are large enough not to dry out and small enough to cook quickly. Whisk the honey, sriracha, soy sauce, garlic and lime juice. **Toss the salmon in half of the sauce** and keep the rest for the end.\n\nSpread the bites on a lined tray with space between them and cook at 220°C for 8 minutes. Brush with the remaining sauce and cook for 2 minutes more, until the edges catch and darken. If your oven runs hot, check at 7 minutes.\n\nThe sugar can scorch quickly, so watch the tray at the end. Scatter with sesame seeds and spring onion and serve on skewers or over rice.',
    ing: [
      '600 g skinless salmon fillet, cut into 3 cm cubes',
      '3 tbsp honey',
      '2 tbsp sriracha',
      '2 tbsp soy sauce',
      '2 garlic cloves, grated',
      '1 lime, juiced',
      '1 tbsp sesame seeds',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Whisk the honey, sriracha, soy sauce, garlic and lime juice.',
      'Toss the salmon in half of the sauce and spread out on the tray.',
      'Cook for 8 minutes, brush with the remaining sauce and cook for 2 minutes more.',
      'Scatter with the sesame seeds and spring onions.'
    ],
    tips: [
      'Cut the cubes evenly.',
      'Keep half the sauce for the end.',
      'If your oven runs hot, check at 7 minutes.',
      'Watch the tray at the end as honey burns.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Edamame', 'Noodles'],
    store: 'Keeps in the fridge for 2 days. Good cold over salad.',
    nut: [377, 31, 16, 21, 1, 13, 660]
  },

  'cheesy-ranch-chicken': {
    d: 'Chicken breasts topped with ranch seasoning, bacon and cheddar and cooked for 25 minutes until bubbling.',
    meta: 'Cheesy ranch chicken: chicken breasts topped with ranch seasoning, crisp bacon and cheddar and baked until bubbling. Four servings.',
    kw: ['cheesy ranch chicken', 'baked cheesy ranch chicken', 'ranch chicken with bacon and cheese', 'ranch chicken bake', 'cheddar ranch chicken'],
    why: 'Ranch, bacon and cheddar are a flavour trio that Americans reach for without thinking, and chicken is the blank canvas that takes all three. It is a dish that is quick to assemble and needs very little from the cook.\n\nButterfly the chicken breasts or slice them in half horizontally, so they cook through in 25 minutes. **Even thickness is what keeps the meat from drying out** at the thin end while the thick end is still raw.\n\nRub with oil and the ranch seasoning, lay in a dish and cook at 200°C for 15 minutes. Meanwhile, fry the bacon until crisp.\n\nScatter the bacon and cheddar over the chicken and return it to the oven for 10 minutes more, until the cheese has melted and is bubbling at the edges. If your oven runs hot, check at 20 minutes. The chicken is done when the juices run clear. Rest it for 5 minutes and add chopped chives.',
    ing: [
      '4 chicken breasts, about 700 g, sliced in half horizontally',
      '2 tbsp olive oil',
      '3 tbsp ranch seasoning',
      '180 g streaky bacon',
      '150 g cheddar, grated',
      '2 tbsp chopped chives'
    ],
    st: [
      'Heat the oven to 200°C. Rub the chicken with the oil and ranch seasoning and lay in a dish. Cook for 15 minutes.',
      'Fry the bacon for 8 minutes until crisp and crumble.',
      'Scatter the bacon and cheddar over the chicken and cook for 10 minutes more until melted and bubbling.',
      'Rest for 5 minutes and scatter with the chives.'
    ],
    tips: [
      'Slice the chicken to an even thickness.',
      'Crisp the bacon separately.',
      'If your oven runs hot, check at 20 minutes.',
      'Rest before serving.'
    ],
    pair: ['Mashed potato', 'Green beans', 'Roasted broccoli', 'Garlic bread'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [514, 57, 4, 30, 1, 1, 1200]
  },

  'chicken-bacon-avocado-salad': {
    d: 'Grilled chicken, crisp bacon, avocado, tomato and egg on crisp lettuce with a creamy ranch-style dressing.',
    meta: 'Chicken bacon avocado salad: grilled chicken, crisp bacon, avocado, tomato and egg on crisp lettuce with a creamy dressing. Four servings.',
    kw: ['chicken bacon avocado salad', 'cobb style chicken salad', 'chicken bacon avocado salad with ranch', 'loaded chicken salad', 'chicken avocado bacon salad'],
    why: 'A big salad can be a satisfying dinner if every part of it has a job: protein, fat, crunch and something sharp. This one has all four, and each component is cooked and cut separately.\n\nGrill or pan-fry the chicken for 6 minutes a side, rest it for 5 minutes and slice it across the grain, so it stays juicy rather than stringy. **Resting is not optional**: sliced straight away, the juice runs onto the board.\n\nFry the bacon until crisp and crumble it. Boil the eggs for 9 minutes, cool them in cold water and quarter them.\n\nShake the dressing in a jar: yoghurt, mayonnaise, lemon juice, garlic powder and chives. Arrange the lettuce on a large platter or in four bowls. Lay the chicken, bacon, egg, tomato and avocado in rows on top and spoon over the dressing at the table. Slice the avocado last, as it browns.',
    ing: [
      '2 chicken breasts, about 500 g',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '180 g streaky bacon',
      '4 eggs',
      '1 cos lettuce, chopped',
      '250 g cherry tomatoes, halved',
      '2 avocados, sliced',
      '4 tbsp plain yoghurt',
      '2 tbsp mayonnaise',
      '1 tbsp lemon juice',
      '1/2 tsp garlic powder',
      '1 tbsp chopped chives'
    ],
    st: [
      'Brush the chicken with the oil, season with the salt and cook for 6 minutes per side. Rest for 5 minutes and slice.',
      'Fry the bacon for 8 minutes until crisp and crumble. Boil the eggs for 9 minutes, cool and quarter.',
      'Shake the yoghurt, mayonnaise, lemon juice, garlic powder and chives in a jar.',
      'Arrange the lettuce, chicken, bacon, eggs, tomatoes and avocado on a platter and spoon over the dressing.'
    ],
    tips: [
      'Rest the chicken before slicing.',
      'Crisp the bacon fully.',
      'If your pan runs hot, check the chicken at 5 minutes.',
      'Slice the avocado last.'
    ],
    pair: ['Crusty bread', 'Corn on the cob', 'Lemonade', 'Sweet potato fries'],
    store: 'Keeps in the fridge for 2 days with the avocado and dressing added just before serving.',
    nut: [545, 47, 15, 33, 8, 5, 1150]
  },

  'honey-lime-chicken-tacos': {
    d: 'Chicken thighs marinated in honey, lime and chilli, seared for 12 minutes and piled into warm tortillas with a crunchy slaw.',
    meta: 'Honey lime chicken tacos: chicken thighs marinated in honey, lime and chilli, seared and piled into warm tortillas with a crunchy slaw. Four servings.',
    kw: ['honey lime chicken tacos', 'honey lime chicken', 'lime chicken tacos', 'sticky chicken tacos', 'chicken tacos with slaw'],
    why: 'The marinade works hard here: honey for sweetness, lime for tang, garlic and chilli for heat. Chicken thighs soak it up and stay juicy in a hot pan where breast would dry out.\n\nCut the thighs into thin strips so every piece gets some char. Toss with the marinade and leave for 20 minutes, or up to a few hours in the fridge. **Do not leave it overnight**: the lime starts to cook the surface and the texture goes mealy.\n\nHeat a heavy pan until very hot and cook the chicken in two batches for 6 minutes each, without stirring too often. The honey will caramelise at the edges. If your pan runs hot, check at 5 minutes and lower the heat if it darkens too fast.\n\nMeanwhile, toss shredded cabbage and carrot with lime juice and a pinch of salt for a slaw that crunches. Warm the tortillas and fill with chicken, slaw, soured cream and coriander.',
    ing: [
      '600 g boneless chicken thighs, sliced into strips',
      '3 tbsp honey',
      '2 limes, juiced',
      '3 garlic cloves, grated',
      '1 tsp chilli flakes',
      '1 tsp ground cumin',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '150 g red cabbage, shredded',
      '1 carrot, grated',
      '8 small flour tortillas',
      '4 tbsp soured cream',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Mix the honey, juice of 1 lime, garlic, chilli flakes, cumin and half the salt. Toss with the chicken and leave for 20 minutes.',
      'Heat the oil in a heavy pan over high heat. Cook the chicken in two batches for 6 minutes each until charred at the edges.',
      'Toss the cabbage and carrot with the juice of the second lime and remaining salt.',
      'Warm the tortillas and fill with the chicken, slaw, soured cream and coriander.'
    ],
    tips: [
      'Slice the chicken thin.',
      'Do not marinate overnight.',
      'If your pan runs hot, check at 5 minutes.',
      'Warm the tortillas before filling.'
    ],
    pair: ['Mexican rice', 'Black beans', 'Guacamole', 'Lime wedges'],
    store: 'The chicken keeps in the fridge for 3 days. Assemble tacos fresh.',
    nut: [587, 37, 58, 23, 4, 18, 1230]
  }
};
