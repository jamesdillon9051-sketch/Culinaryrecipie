'use strict';

/**
 * Volume forty-four — seafood and cupcakes, fourth part.
 *
 * Fish and chips, sea bass, sea bream, monkfish curry and mackerel, then
 * prawn risotto and skewers, crab cakes and bisque, lobster mac and
 * cheese, scallop risotto, clam chowder bread bowls and mussels in cider,
 * and the first bakes: a lemon drizzle traybake, Victoria and coffee
 * cupcakes and red velvet whoopie pies. Times are the recipe's own; ovens
 * differ, so each method says when to check early. Nutrition is estimated
 * by npm run calc.
 */

module.exports = {
  'fish-and-chips-with-mushy-peas': {
    d: 'Battered cod fillets fried until crisp, with oven chips and mushy peas made from marrowfat peas.',
    meta: 'Fish and chips with mushy peas: battered cod, oven chips and mushy peas. Four servings, cooked for 30 minutes.',
    kw: ['fish and chips with mushy peas', 'homemade fish and chips', 'battered cod and chips', 'british fish and chips with mushy peas', 'fish and chips recipe'],
    why: 'What keeps a batter crisp instead of greasy? Cold liquid, a hot pan and a coating of flour on the fish first. The flour gives the batter something to hold onto, and the cold makes it puff up and set quickly.\n\nStir the batter just until it comes together, with a few lumps left in. Overmixing makes it tough. Use ice-cold sparkling water and keep it in the fridge until the last second. Dry the cod, dust it with flour, dip it in the batter and lower it into the hot oil gently, away from you. **Do not crowd the pan.** Two fillets at a time keep the oil hot enough to crisp the batter.\n\nFry for 5 to 6 minutes, turning once, until deep golden and crisp, and drain on a rack. Paper holds steam against the underside.\n\nThe chips roast in a hot oven while the fish fries, and the peas simmer with a pinch of sugar and a knob of butter. Serve with salt, vinegar and tartare sauce.',
    ing: [
      '800 g potatoes, cut into thick chips',
      '2 tbsp vegetable oil',
      '1 tsp salt',
      '4 cod fillets, about 600 g',
      '40 g plain flour, for dusting',
      '150 g plain flour, for the batter',
      '1/2 tsp baking powder',
      '1/2 tsp salt, for the batter',
      '200 ml ice-cold sparkling water',
      '100 ml vegetable oil, for frying',
      '400 g frozen peas',
      '20 g butter',
      '1 tsp sugar',
      '2 tbsp malt vinegar'
    ],
    st: [
      'Heat the oven to 230°C. Toss the chips with the 2 tbsp of oil and 1 tsp of salt and roast on a tray for 30 minutes, turning once.',
      'Simmer the peas in a little water with the butter and sugar for 6 minutes, then mash roughly and keep warm.',
      'Whisk the 150 g of flour, baking powder and 1/2 tsp of salt with the sparkling water just until combined.',
      'Heat the frying oil in a wide pan until a drop of batter sizzles at once. Dry the cod, dust with the 40 g of flour and dip in the batter.',
      'Fry two fillets at a time for 5 to 6 minutes, turning once, until deep golden. Drain on a rack.',
      'Serve with the chips, peas and vinegar.'
    ],
    tips: [
      'Keep the batter ice cold.',
      'Do not overmix it.',
      'Fry two fillets at a time.',
      'Drain on a rack, not paper.'
    ],
    pair: ['Tartare sauce', 'Lemon wedges', 'Pickled onions', 'Curry sauce'],
    store: 'Best eaten straight away. Reheat leftovers in a hot oven.',
    nut: [828, 41, 85, 36, 12, 9, 1050]
  },

  'sea-bass-with-lemon-butter': {
    d: 'Pan-fried sea bass fillets with crisp skin, finished with a sauce of browned butter, lemon juice and capers.',
    meta: 'Sea bass with lemon butter: crisp-skinned sea bass with a browned butter, lemon and caper sauce. Two servings, cooked for 10 minutes.',
    kw: ['sea bass with lemon butter', 'pan seared sea bass with lemon butter', 'sea bass with lemon and capers', 'crispy skin sea bass with butter sauce', 'sea bass fillets with lemon butter'],
    why: 'It looks like a restaurant dish and cooks like a fried egg, which is why it is such a good one to learn. A thin fillet, a hot pan and a few minutes are the whole method.\n\nPat the skin as dry as you can with kitchen paper and season just before cooking. A damp skin steams instead of crisping. Lay the fillets skin-side down in a hot pan with the oil and press each one flat with a spatula for 20 seconds, because the skin curls and lifts away from the heat. **Cook it nearly all the way on the skin side.** The fish is done when the flesh has turned opaque about four-fifths of the way up.\n\nTurn for 20 seconds, lift out, and wipe the pan. Melt the butter until it smells nutty, then add the capers and lemon juice, which will foam.\n\nSpoon over the fish and serve at once.',
    ing: [
      '2 sea bass fillets, skin on, about 300 g',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '40 g butter',
      '1 tbsp capers, drained',
      '2 tbsp lemon juice',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Pat the fish dry and season the flesh with the salt.',
      'Lay the fillets skin-side down in the hot oil and press flat for 20 seconds. Cook for 4 minutes until the flesh is opaque most of the way up.',
      'Turn for 20 seconds and lift onto warm plates. Wipe the pan.',
      'Melt the butter over a medium heat for 1 to 2 minutes until it smells nutty, add the capers and lemon juice and spoon over the fish with the parsley.'
    ],
    tips: [
      'Dry the skin well.',
      'Press the fillets flat at first.',
      'Cook mostly on the skin side.',
      'Take the butter off the heat at nutty, not brown.'
    ],
    pair: ['New potatoes', 'Steamed asparagus', 'Green beans', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [367, 29, 2, 27, 0, 0, 790]
  },

  'sea-bream-with-fennel': {
    d: 'Whole sea bream roasted on a bed of sliced fennel, lemon and cherry tomatoes with white wine and olive oil.',
    meta: 'Sea bream with fennel: sea bream roasted on fennel, lemon and cherry tomatoes with white wine. Two servings, baked for 25 minutes.',
    kw: ['sea bream with fennel', 'roast sea bream with fennel', 'whole sea bream with fennel and lemon', 'baked sea bream with fennel and tomatoes', 'italian sea bream with fennel'],
    why: 'Score the skin, and stuff the cavity. Those are the two steps, and they take a minute. The cuts let heat in so that the thick part of the fish cooks as quickly as the tail.\n\nMake three diagonal slashes on each side of the fish and rub it with oil and salt. Stuff the cavity with lemon slices and a few fennel fronds. Slice the fennel thinly and lay it in a roasting tin with the tomatoes and garlic, pour in the wine and set the fish on top. **Do not skip the fennel base.** It keeps the fish off the tin and flavours the juices.\n\nRoast at 200°C for 25 minutes. If your oven runs hot, check at 20 minutes. The flesh should lift away from the bone when pressed with a knife at the thickest part.\n\nServe straight from the tin with the juices spooned over. Lift the top fillet off and then remove the backbone to get the lower one.',
    ing: [
      '2 whole sea bream, about 800 g, gutted and scaled',
      '1 tsp salt',
      '2 tbsp olive oil',
      '1 lemon, about 100 g, sliced',
      '2 fennel bulbs, about 500 g, thinly sliced',
      '200 g cherry tomatoes',
      '2 cloves garlic, sliced',
      '100 ml dry white wine',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Cut three slashes in each side of the fish and rub with half the oil and the salt. Put lemon slices in each cavity.',
      'Toss the fennel, tomatoes and garlic with the remaining oil and pepper in a roasting tin and pour in the wine.',
      'Set the fish on top and roast for 25 minutes until the flesh lifts easily from the bone.',
      'Serve from the tin with the juices.'
    ],
    tips: [
      'Slash the skin.',
      'Stuff the cavity with lemon.',
      'If your oven runs hot, check at 20 minutes.',
      'Remove the backbone to reach the lower fillet.'
    ],
    pair: ['Boiled new potatoes', 'Green salad', 'Crusty bread', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [510, 49, 29, 22, 11, 14, 1480]
  },

  'monkfish-curry': {
    d: 'Chunks of monkfish simmered in a coconut and tomato curry sauce with ginger, garlic, mustard seeds and curry leaves.',
    meta: 'Monkfish curry: monkfish in a coconut and tomato sauce with ginger, garlic and mustard seeds. Four servings, cooked for 25 minutes.',
    kw: ['monkfish curry', 'coconut monkfish curry', 'monkfish curry with tomatoes', 'indian style monkfish curry', 'monkfish curry with curry leaves'],
    why: 'This is what to make on a cold weeknight, when you want a curry that takes under half an hour and still feels like a treat. Monkfish is firm and meaty, and it holds together in a sauce where other fish would fall apart.\n\nTrim off any grey membrane, because it shrinks and turns rubbery. Cut the tail into chunks of about 4 cm. Pop the mustard seeds in hot oil until they stop jumping, then add the curry leaves and onion and cook until golden. Stir in the garlic, ginger, turmeric and chilli, then the tomatoes and coconut milk. **Simmer the sauce before the fish goes in.** Ten minutes concentrates it and lets the spices settle.\n\nAdd the monkfish, cover and cook on a low heat for 6 to 8 minutes, until it is opaque and firm.\n\nFinish with lime juice and coriander, and serve with rice. Ask the fishmonger to trim the tail, which saves a fiddly job at home.',
    ing: [
      '600 g monkfish tail, trimmed and cut into 4 cm chunks',
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '10 fresh curry leaves, about 3 g',
      '1 onion, about 150 g, sliced',
      '3 cloves garlic, crushed',
      '15 g fresh ginger, grated',
      '1 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '200 g tinned chopped tomatoes',
      '400 ml coconut milk',
      '1/2 tsp salt',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oil and fry the mustard seeds until they stop popping, then add the curry leaves and onion and cook for 8 minutes until golden.',
      'Add the garlic, ginger, turmeric and chilli for 2 minutes, then the tomatoes, coconut milk and salt. Simmer for 10 minutes.',
      'Add the monkfish, cover and cook on a low heat for 6 to 8 minutes until opaque and firm.',
      'Stir in the lime juice and serve.'
    ],
    tips: [
      'Trim the grey membrane.',
      'Simmer the sauce first.',
      'Do not overcook the fish.',
      'Shake the pan rather than stirring.'
    ],
    pair: ['Basmati rice', 'Naan bread', 'Cucumber raita', 'Lime wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently so the fish stays tender.',
    nut: [378, 25, 11, 26, 2, 5, 360]
  },

  'mackerel-with-gooseberry-sauce': {
    d: 'Pan-fried mackerel fillets served with a tart gooseberry sauce sweetened with a little sugar and softened with butter.',
    meta: 'Mackerel with gooseberry sauce: pan-fried mackerel with a tart gooseberry and butter sauce. Four servings, cooked for 20 minutes.',
    kw: ['mackerel with gooseberry sauce', 'pan fried mackerel with gooseberry sauce', 'british mackerel with gooseberry sauce', 'mackerel fillets with gooseberries', 'mackerel with gooseberries'],
    why: 'Mackerel is rich and oily, and gooseberries are sharp and sour, and that is the pairing. The sourness cuts through the fish like lemon, with more body.\n\nSimmer the gooseberries with the sugar and water for 8 minutes, until they burst and the sauce is thick, then stir in the butter. Taste it, because gooseberries vary a lot in tartness and you may want a little more sugar. **Do not make the sauce too sweet.** The point is a sharp edge against the rich fish.\n\nPat the mackerel dry, score the skin lightly and season. Fry skin-side down in a hot pan for 4 minutes without moving, until the skin is crisp and blistered, then turn for 1 minute.\n\nMackerel goes off quickly, so buy it on the day and cook it within hours. Serve straight away with the warm sauce and boiled potatoes. Frozen gooseberries work well, and need an extra 2 minutes in the pan.',
    ing: [
      '4 mackerel fillets, about 400 g',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '250 g gooseberries, topped and tailed',
      '2 tbsp sugar',
      '3 tbsp water',
      '20 g butter',
      '600 g new potatoes, boiled'
    ],
    st: [
      'Simmer the gooseberries with the sugar and water for 8 minutes until they burst. Stir in the butter and keep warm.',
      'Pat the mackerel dry, score the skin lightly and season with the salt.',
      'Fry skin-side down in the oil for 4 minutes without moving until crisp, then turn for 1 minute.',
      'Serve with the warm sauce and the potatoes.'
    ],
    tips: [
      'Buy the fish fresh.',
      'Taste the sauce for sweetness.',
      'Dry the skin well.',
      'Do not move the fillets while they crisp.'
    ],
    pair: ['New potatoes', 'Green beans', 'Watercress salad', 'Crusty bread'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day. The sauce keeps for 3 days.',
    nut: [442, 23, 38, 22, 6, 10, 390]
  },

  'prawn-risotto': {
    d: 'Arborio rice cooked slowly in prawn-flavoured stock with white wine, finished with raw prawns, lemon and parsley.',
    meta: 'Prawn risotto: arborio rice in prawn-flavoured stock and white wine with prawns, lemon and parsley. Four servings, cooked for 30 minutes.',
    kw: ['prawn risotto', 'creamy prawn risotto', 'prawn risotto with lemon', 'prawn and parsley risotto', 'italian prawn risotto'],
    why: 'Make the stock from the prawn shells. That is the most useful instruction, because shells are free, and the stock they make is what turns an ordinary risotto into a seafood one.\n\nFry the shells in a little oil for 3 minutes until they turn pink and smell sweet, add the stock and simmer for 10 minutes, then strain. Soften the onion in the butter, stir in the rice for 2 minutes, add the wine and let it vanish. **Add the hot stock a ladle at a time.** The rice releases its starch slowly as you stir, and that is what makes it creamy.\n\nAfter about 18 minutes the rice should be tender with a slight bite. Stir in the raw prawns and cook for 3 minutes, until they are pink and just firm.\n\nOff the heat, add the butter, lemon zest and parsley, and rest for 2 minutes. Cheese is not usual with seafood, so leave it off.',
    ing: [
      '400 g raw prawns in their shells',
      '1 tbsp olive oil',
      '900 ml chicken stock',
      '30 g butter',
      '1 onion, about 150 g, finely chopped',
      '300 g arborio rice',
      '100 ml dry white wine',
      '20 g cold butter, to finish',
      '1 lemon, zested',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Peel the prawns and keep them in the fridge. Fry the shells in the oil for 3 minutes, add the stock and simmer for 10 minutes. Strain and keep hot.',
      'Soften the onion in the 30 g of butter for 6 minutes, then stir in the rice for 2 minutes.',
      'Add the wine and let it bubble away, then add the hot stock a ladle at a time for about 18 minutes.',
      'Stir in the prawns and salt for 3 minutes until pink.',
      'Off the heat stir in the cold butter, lemon zest and parsley and rest for 2 minutes.'
    ],
    tips: [
      'Use the shells for stock.',
      'Add the stock slowly.',
      'Add the prawns at the end.',
      'Rest it before serving.'
    ],
    pair: ['Rocket salad', 'Crusty bread', 'Lemon wedges', 'Dry white wine'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [515, 28, 67, 15, 2, 2, 1200]
  },

  'prawn-skewers-with-chimichurri': {
    d: 'Raw prawns threaded on skewers and grilled for a few minutes, served with a sharp parsley, garlic and vinegar chimichurri.',
    meta: 'Prawn skewers with chimichurri: grilled prawns with a parsley, garlic and vinegar sauce. Four servings, cooked for 6 minutes.',
    kw: ['prawn skewers with chimichurri', 'grilled prawn skewers with chimichurri', 'chimichurri prawns', 'prawn skewers with parsley sauce', 'argentinian style prawn skewers'],
    why: 'It looks like a barbecue dish and cooks in six minutes, which is why it suits a night when no one wants to wait. The chimichurri is the work, and it takes only a few minutes of chopping.\n\nChop the parsley, garlic and chilli by hand, not in a blender, so the sauce stays coarse and fresh and does not turn into a green paste. Stir in the vinegar, oil, oregano and salt and leave it to stand while the prawns cook. Salt draws out the flavours as it sits. **Chop by hand if you can.** A blender bruises the herbs and makes the sauce muddy.\n\nThread the prawns onto skewers, curling each one into a C, and brush with oil. Grill over a high heat for 2 to 3 minutes a side until pink and just firm. The curls tighten as they cook.\n\nSpoon some of the sauce over the skewers and serve the rest alongside.',
    ing: [
      '500 g raw king prawns, peeled',
      '1 tbsp olive oil',
      '30 g flat-leaf parsley, finely chopped',
      '3 cloves garlic, finely chopped',
      '1 red chilli, about 10 g, finely chopped',
      '3 tbsp red wine vinegar',
      '80 ml olive oil, for the sauce',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Stir the parsley, garlic, chilli, vinegar, 80 ml of oil, oregano and salt together and leave to stand.',
      'Heat the grill to high. Thread the prawns onto skewers, curling each into a C, and brush with the 1 tbsp of oil.',
      'Grill for 2 to 3 minutes a side until pink and just firm.',
      'Spoon over some of the chimichurri and serve the rest on the side with the lemon wedges.'
    ],
    tips: [
      'Chop the herbs by hand.',
      'Let the sauce stand.',
      'Do not overcook the prawns.',
      'Soak wooden skewers for 20 minutes.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Grilled corn', 'Lemon wedges'],
    store: 'Best eaten straight away. The sauce keeps in the fridge for 3 days.',
    nut: [323, 26, 3, 23, 1, 1, 490]
  },

  'crab-cakes-with-remoulade': {
    d: 'Crab meat bound with breadcrumbs, mayonnaise and mustard, shaped into cakes and pan-fried, served with a tangy remoulade.',
    meta: 'Crab cakes with remoulade: crab bound with breadcrumbs and mayonnaise, pan-fried, with a tangy remoulade. Six servings, cooked for 10 minutes.',
    kw: ['crab cakes with remoulade', 'homemade crab cakes with remoulade', 'maryland style crab cakes', 'pan fried crab cakes with remoulade', 'crab cakes with tangy sauce'],
    why: 'The first sign it is right is the look of the mixture: mostly crab, with just enough binder to hold it, and not a paste. A good crab cake is almost all crab, and the binder is only there so it does not fall apart.\n\nPick through the crab meat for any bits of shell, and squeeze it gently in a tea towel to remove surplus liquid. Fold it with the breadcrumbs, mayonnaise, egg, mustard, Old Bay and lemon juice with a spoon, not your hands. **Do not break up the crab.** The lumps are what you are paying for.\n\nShape into six cakes and chill them for 20 minutes. They firm up and hold together much better in the pan. Fry in the oil for 4 to 5 minutes a side, until deep gold.\n\nStir the mayonnaise with the mustard, pickles, capers, lemon and hot sauce for the remoulade. Serve the cakes hot with a spoonful of it.',
    ing: [
      '400 g white crab meat',
      '60 g dried breadcrumbs',
      '2 tbsp mayonnaise',
      '1 egg, about 50 g',
      '1 tsp Dijon mustard',
      '1 tsp seafood seasoning',
      '1 tbsp lemon juice',
      '2 tbsp vegetable oil',
      '100 g mayonnaise, for the remoulade',
      '1 tsp Dijon mustard, for the remoulade',
      '1 tbsp chopped dill pickles',
      '1 tbsp capers, chopped',
      '1 tsp hot sauce',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Pick over the crab for shell and squeeze gently in a tea towel.',
      'Fold the crab with the breadcrumbs, 2 tbsp of mayonnaise, egg, mustard, seasoning and lemon juice. Shape into six cakes and chill for 20 minutes.',
      'Stir the 100 g of mayonnaise with the mustard, pickles, capers and hot sauce for the remoulade.',
      'Fry the cakes in the oil for 4 to 5 minutes a side until deep gold. Serve with the remoulade and lemon wedges.'
    ],
    tips: [
      'Check for shell.',
      'Fold, do not stir.',
      'Chill the cakes before frying.',
      'Turn them once.'
    ],
    pair: ['Green salad', 'Corn on the cob', 'Lemon wedges', 'Coleslaw'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [303, 15, 9, 23, 1, 1, 630]
  },

  'crab-bisque': {
    d: 'A smooth, rich soup of crab, tomato, cream and sherry, thickened with rice and finished with a spoonful of cream.',
    meta: 'Crab bisque: a smooth soup of crab, tomato, cream and sherry thickened with rice. Four servings, cooked for 35 minutes.',
    kw: ['crab bisque', 'creamy crab bisque', 'homemade crab bisque', 'crab bisque with sherry', 'smooth crab bisque with cream'],
    why: 'Bisque is a smooth, creamy shellfish soup, and the classic way to thicken it is with rice. A few spoonfuls, cooked soft and blended, give it body without flour.\n\nSoften the onion, carrot and celery in the butter for 8 minutes, add the tomato purée and cook for 2 minutes, then pour in the sherry and let it bubble for a minute. Add the stock, rice and half the crab, then simmer for 20 minutes until the rice is very soft. **Blend until completely smooth.** A bisque with bits in it is a chunky soup, and the silkiness is what makes it feel special.\n\nPass the soup through a sieve if you want it as fine as a restaurant version. Stir in the cream and the rest of the crab and warm through without boiling.\n\nSeason with salt, cayenne and lemon juice. It should taste of crab first and cream second.',
    ing: [
      '30 g butter',
      '1 onion, about 150 g, chopped',
      '1 carrot, about 100 g, chopped',
      '1 stick celery, about 50 g, chopped',
      '2 tbsp tomato purée',
      '60 ml dry sherry',
      '800 ml fish stock',
      '40 g long-grain rice',
      '300 g white crab meat',
      '150 ml double cream',
      '1/4 tsp cayenne pepper',
      '1 tbsp lemon juice',
      '1/2 tsp salt'
    ],
    st: [
      'Soften the onion, carrot and celery in the butter for 8 minutes, then stir in the tomato purée for 2 minutes.',
      'Add the sherry and bubble for 1 minute. Add the stock, rice and half the crab and simmer for 20 minutes until the rice is very soft.',
      'Blend until completely smooth, then sieve if you like.',
      'Return to the pan, stir in the cream and remaining crab and warm gently without boiling.',
      'Season with the cayenne, lemon juice and salt.'
    ],
    tips: [
      'Cook the rice until very soft.',
      'Blend until smooth.',
      'Do not boil once the cream is in.',
      'Taste for salt at the end.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Dry sherry', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and do not boil.',
    nut: [333, 18, 18, 21, 2, 5, 1230]
  },

  'lobster-mac-and-cheese': {
    d: 'Macaroni in a creamy cheddar and gruyere sauce with chunks of lobster meat, topped with buttered breadcrumbs and baked.',
    meta: 'Lobster mac and cheese: macaroni in a cheddar and gruyere sauce with lobster, baked under breadcrumbs. Six servings, baked for 30 minutes.',
    kw: ['lobster mac and cheese', 'baked lobster mac and cheese', 'creamy lobster mac and cheese', 'lobster macaroni and cheese', 'lobster mac and cheese with breadcrumbs'],
    why: 'Fold the lobster in at the end. That is the most useful instruction, because lobster is already cooked and expensive, and ten more minutes in a hot oven turns it to rubber.\n\nUse cooked lobster meat from the fishmonger or freezer, cut into bite-sized pieces. Boil the macaroni 2 minutes under the packet time, since it will go on cooking in the sauce and the oven. Make a white sauce from butter, flour and milk, and take it off the heat before stirring in the cheeses. **Do not boil the cheese sauce.** It splits into grease and grains.\n\nStir the pasta and sauce together, fold in the lobster, tip into a dish and scatter over the buttered crumbs.\n\nBake at 200°C for 30 minutes until the top is golden and the sauce bubbles at the edges. If your oven runs hot, check at 25 minutes. Rest for 5 minutes before serving.',
    ing: [
      '350 g macaroni',
      '40 g butter',
      '40 g plain flour',
      '700 ml whole milk',
      '150 g mature cheddar, grated',
      '100 g gruyere, grated',
      '1 tsp Dijon mustard',
      '1/2 tsp salt',
      '300 g cooked lobster meat, in chunks',
      '50 g dried breadcrumbs',
      '20 g butter, melted'
    ],
    st: [
      'Heat the oven to 200°C. Boil the macaroni for 6 minutes, 2 minutes under the packet time, and drain.',
      'Melt the 40 g of butter, stir in the flour for 1 minute and whisk in the milk. Simmer for 5 minutes until thick.',
      'Take off the heat and stir in the cheddar, gruyere, mustard and salt. Mix in the macaroni, then fold in the lobster.',
      'Tip into a baking dish. Mix the breadcrumbs with the melted butter and scatter over.',
      'Bake for 30 minutes until golden and bubbling. Rest for 5 minutes.'
    ],
    tips: [
      'Undercook the pasta.',
      'Take the sauce off the heat before adding cheese.',
      'Fold in the lobster last.',
      'If your oven runs hot, check at 25 minutes.'
    ],
    pair: ['Green salad', 'Steamed asparagus', 'Garlic bread', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat covered, gently.',
    nut: [623, 34, 61, 27, 2, 8, 690]
  },

  'scallop-risotto': {
    d: 'Creamy parmesan-free risotto finished with pan-seared scallops, lemon zest and chives.',
    meta: 'Scallop risotto: a creamy white wine risotto topped with seared scallops, lemon and chives. Four servings, cooked for 35 minutes.',
    kw: ['scallop risotto', 'seared scallop risotto', 'creamy scallop risotto', 'scallop risotto with lemon', 'scallop and chive risotto'],
    why: 'Shallots, rice, wine, stock and scallops: five things, and the scallops are the only ones that must be cooked at the last minute. Everything else can wait for them.\n\nStart the risotto 25 minutes before you want to eat. Soften the shallots in butter, stir in the rice for 2 minutes, add the wine and let it vanish. Add hot stock a ladle at a time, stirring, until the rice is creamy and tender with a slight bite, about 18 minutes. **Keep the risotto loose.** It tightens as it sits, so stop while it still flows.\n\nWhen the rice is nearly ready, pat the scallops very dry and sear them in a very hot pan for 90 seconds on each side without moving them. They should have a deep golden crust and be just opaque inside.\n\nStir the butter, lemon zest and chives into the rice, and serve the scallops on top.',
    ing: [
      '12 large scallops, about 400 g',
      '900 ml hot fish stock',
      '30 g butter',
      '2 shallots, about 80 g, finely chopped',
      '300 g arborio rice',
      '100 ml dry white wine',
      '1 tbsp vegetable oil',
      '20 g cold butter, to finish',
      '1 lemon, zested',
      '10 g chives, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Soften the shallots in the 30 g of butter for 4 minutes, then stir in the rice for 2 minutes.',
      'Add the wine and let it bubble away, then add the hot stock a ladle at a time for about 18 minutes until creamy.',
      'Pat the scallops very dry and season with the salt. Sear in the very hot oil for 90 seconds a side without moving.',
      'Stir the cold butter, lemon zest and half the chives into the risotto and spoon onto warm plates.',
      'Top with the scallops and the remaining chives.'
    ],
    tips: [
      'Keep the risotto loose.',
      'Dry the scallops thoroughly.',
      'Do not move them while they sear.',
      'Serve at once on warm plates.'
    ],
    pair: ['Rocket salad', 'Lemon wedges', 'Dry white wine', 'Steamed asparagus'],
    store: 'Best eaten straight away. Do not keep seafood leftovers.',
    nut: [515, 25, 70, 15, 2, 2, 1250]
  },

  'clam-chowder-bread-bowls': {
    d: 'Creamy clam chowder with potatoes and bacon, served in hollowed-out crusty bread rolls.',
    meta: 'Clam chowder bread bowls: creamy clam chowder with potatoes and bacon in crusty bread rolls. Four servings, cooked for 40 minutes.',
    kw: ['clam chowder bread bowls', 'clam chowder in bread bowls', 'creamy clam chowder bread bowls', 'new england clam chowder bread bowls', 'clam chowder with bacon in bread bowls'],
    why: 'Why does a chowder in a bread bowl taste so good? Because the bread soaks up the broth as you eat, and by the end the bowl is the best part. The crust holds, and the inside turns into a sponge.\n\nChoose round crusty rolls with a firm crust and a dense crumb. Cut a lid off the top, scoop out the soft middle and toast the rolls in a 180°C oven for 8 minutes until the inside is dry and the edges are golden. A bowl that is not toasted goes soggy within minutes. **Toast the bowls before filling.** Dry crumb soaks slowly, and wet crumb collapses.\n\nFor the chowder, fry the bacon, soften the onion and celery in its fat, stir in the flour, then add the clam juice, potatoes and milk. Simmer for 15 minutes until the potatoes are tender, then add the cream and clams for 3 minutes. Do not boil, or the clams turn tough.\n\nLadle into the bowls and serve with the lids on the side.',
    ing: [
      '4 round crusty rolls, about 480 g',
      '100 g streaky bacon, diced',
      '1 onion, about 150 g, chopped',
      '2 sticks celery, about 100 g, chopped',
      '2 tbsp plain flour',
      '300 ml bottled clam juice',
      '500 g potatoes, peeled and diced',
      '400 ml whole milk',
      '150 ml double cream',
      '400 g tinned clams, drained',
      '1/2 tsp white pepper',
      '10 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oven to 180°C. Cut a lid from each roll, scoop out the middle and toast the hollowed rolls and lids on a tray for 8 minutes.',
      'Fry the bacon for 6 minutes until crisp, lift out and soften the onion and celery in the fat for 6 minutes.',
      'Stir in the flour for 1 minute, then add the clam juice, potatoes and milk and simmer for 15 minutes until the potatoes are tender.',
      'Add the cream, clams and pepper and warm for 3 minutes without boiling.',
      'Ladle into the bread bowls and scatter with the bacon and parsley.'
    ],
    tips: [
      'Toast the bowls first.',
      'Choose dense, crusty rolls.',
      'Do not boil once the clams are in.',
      'Serve with the lids on the side.'
    ],
    pair: ['Green salad', 'Lemon wedges', 'Oyster crackers', 'Dry white wine'],
    store: 'Keep the chowder in the fridge for 2 days and reheat gently. Fill fresh bread bowls to serve.',
    nut: [825, 47, 103, 25, 7, 15, 2110]
  },

  'mussels-in-cider': {
    d: 'Mussels steamed open in dry cider with shallots, garlic, thyme and cream, served with crusty bread.',
    meta: 'Mussels in cider: mussels steamed in dry cider with shallots, garlic, thyme and cream. Four servings, cooked for 12 minutes.',
    kw: ['mussels in cider', 'mussels in cider and cream', 'normandy style mussels in cider', 'mussels with cider and thyme', 'mussels in cider with thyme'],
    why: 'What happens when mussels meet cider? The sweetness and gentle acidity of the apples softens the brine of the shellfish, and it is a standard pairing in the north of France. The broth is as much the dish as the mussels.\n\nSoften the shallots in the butter for 4 minutes with the garlic and thyme. Pour in the cider, bring it to the boil and add the mussels. Cover and cook on a high heat for 5 minutes, shaking the pan every minute or so. **Do not stir.** The mussels open by themselves, and stirring only breaks the shells.\n\nThey are ready when the shells have opened wide. Discard any that stay shut, and any that were cracked or open before cooking.\n\nLift the mussels into bowls, stir the cream into the pan juices and pour over, then scatter with parsley. Serve with plenty of bread. A splash of Calvados in the pan, if you keep it, adds an apple note that is typical of the region.',
    ing: [
      '1.2 kg fresh mussels, cleaned',
      '30 g butter',
      '3 shallots, about 120 g, finely chopped',
      '2 cloves garlic, crushed',
      '4 sprigs thyme, about 5 g',
      '250 ml dry cider',
      '100 ml double cream',
      '15 g flat-leaf parsley, chopped',
      '1/4 tsp black pepper'
    ],
    st: [
      'Soften the shallots in the butter with the garlic and thyme for 4 minutes in a large lidded pan.',
      'Pour in the cider, bring to the boil and add the mussels. Cover and cook for 5 minutes, shaking the pan, until the shells open.',
      'Lift the mussels into bowls and discard any that stayed shut.',
      'Stir the cream and pepper into the pan juices, warm for 1 minute and pour over the mussels with the parsley.'
    ],
    tips: [
      'Discard cracked mussels.',
      'Shake the pan, do not stir.',
      'Discard any that stay shut.',
      'Serve with bread for the broth.'
    ],
    pair: ['Crusty bread', 'Chips', 'Green salad', 'Dry cider'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [429, 38, 22, 21, 2, 5, 920]
  },

  'lemon-drizzle-traybake': {
    d: 'A soft lemon sponge baked in a tray, soaked with a lemon and sugar syrup while warm and finished with a crisp sugar crust.',
    meta: 'Lemon drizzle traybake: a lemon sponge soaked with lemon and sugar syrup, baked for 35 minutes. Sixteen squares.',
    kw: ['lemon drizzle traybake', 'easy lemon drizzle traybake', 'lemon drizzle cake traybake', 'lemon traybake with drizzle', 'british lemon drizzle traybake'],
    why: 'Pour the syrup over while the cake is still warm. That is the most useful instruction, because a warm sponge drinks it in and a cold one lets it run off the top.\n\nBeat the butter and sugar until pale and fluffy, which takes about 3 minutes. Add the eggs one at a time with a spoonful of flour to stop the mixture curdling, then fold in the rest of the flour, the lemon zest and the milk. The batter should drop off the spoon rather than pour. **Prick the cake all over with a skewer.** The holes carry the syrup to the middle.\n\nBake at 180°C for 35 minutes until golden and a skewer comes out clean. If your oven runs hot, check at 30 minutes.\n\nStir the lemon juice with the sugar, without heating it, so that the sugar stays gritty. Spoon it over the warm cake and leave it in the tin until cold. The sugar sets into a thin crisp crust.',
    ing: [
      '225 g butter, softened',
      '225 g caster sugar',
      '4 eggs, about 200 g',
      '225 g self-raising flour',
      '2 lemons, about 200 g, zested',
      '3 tbsp whole milk',
      '3 tbsp lemon juice',
      '100 g caster sugar, for the syrup'
    ],
    st: [
      'Heat the oven to 180°C and line a 23 x 33 cm tin. Beat the butter and the 225 g of sugar for 3 minutes until pale.',
      'Beat in the eggs one at a time, adding a spoonful of flour with each, then fold in the remaining flour, lemon zest and milk.',
      'Spread in the tin and bake for 35 minutes until golden and a skewer comes out clean.',
      'Prick all over with a skewer. Stir the lemon juice with the 100 g of sugar and spoon it over the warm cake.',
      'Leave in the tin until cold, then cut into sixteen squares.'
    ],
    tips: [
      'Soften the butter first.',
      'Prick the cake all over.',
      'If your oven runs hot, check at 30 minutes.',
      'Pour the syrup over while warm.'
    ],
    pair: ['Tea', 'Whipped cream', 'Fresh berries', 'Lemon curd'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [261, 3, 33, 13, 1, 21, 20]
  },

  'victoria-sandwich-cupcakes': {
    d: 'Small vanilla sponge cakes sandwiched with raspberry jam and buttercream, finished with a dusting of icing sugar.',
    meta: 'Victoria sandwich cupcakes: vanilla sponge cupcakes split and filled with raspberry jam and buttercream. Twelve cupcakes, baked for 20 minutes.',
    kw: ['victoria sandwich cupcakes', 'victoria sponge cupcakes', 'jam and cream cupcakes', 'raspberry jam victoria cupcakes', 'victoria sandwich cupcakes with buttercream'],
    why: 'A cake for a birthday tea, a bring-and-share table or just a Sunday afternoon, made small so that every guest gets the same amount of jam. The classic is equal weights of butter, sugar, flour and eggs.\n\nBeat the butter and sugar until pale and fluffy, about 3 minutes. Add the eggs one at a time with a spoonful of the flour, which stops the mixture from curdling, then fold in the rest of the flour and the vanilla. The batter should drop off the spoon. **Do not open the oven in the first 15 minutes.** The cakes rise and then sink if the heat drops.\n\nBake at 180°C for 20 minutes until golden and springy. If your oven runs hot, check at 17 minutes. Cool on a rack.\n\nCut a lid off each cake and cut it in half to make two wings. Pipe or spoon on buttercream, add a teaspoon of jam, and set the wings on top like butterflies. Dust with icing sugar.',
    ing: [
      '175 g butter, softened',
      '175 g caster sugar',
      '3 eggs, about 150 g',
      '175 g self-raising flour',
      '1 tsp vanilla extract',
      '100 g butter, for the buttercream',
      '200 g icing sugar',
      '1 tbsp whole milk',
      '100 g raspberry jam',
      '1 tbsp icing sugar, for dusting'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole tin with cases. Beat the 175 g of butter and the sugar for 3 minutes until pale.',
      'Beat in the eggs one at a time with a spoonful of flour each, then fold in the remaining flour and the vanilla.',
      'Divide between the cases and bake for 20 minutes until golden and springy. Cool on a rack.',
      'Beat the 100 g of butter with the 200 g of icing sugar and the milk until fluffy.',
      'Cut a lid from each cake, halve it, spread the cake with buttercream and jam and set the two halves on top. Dust with the icing sugar.'
    ],
    tips: [
      'Use soft butter.',
      'Do not open the oven early.',
      'If your oven runs hot, check at 17 minutes.',
      'Cool fully before filling.'
    ],
    pair: ['Tea', 'Fresh strawberries', 'Whipped cream', 'Lemonade'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [388, 3, 49, 20, 0, 38, 20]
  },

  'coffee-and-walnut-cupcakes': {
    d: 'Coffee-flavoured sponge cupcakes with chopped walnuts, topped with coffee buttercream and a walnut half.',
    meta: 'Coffee and walnut cupcakes: coffee sponge cupcakes with walnuts and coffee buttercream. Twelve cupcakes, baked for 20 minutes.',
    kw: ['coffee and walnut cupcakes', 'coffee walnut cupcakes', 'coffee and walnut cupcakes with buttercream', 'walnut and coffee sponge cupcakes', 'british coffee and walnut cupcakes'],
    why: 'This is what to make in the first cold week, when a pot of tea and a cake in the afternoon feels like an event. Coffee and walnut is a classic British pairing, bitter against sweet.\n\nDissolve the instant coffee in a spoonful of hot water, and cool it before it goes in the mixture. Hot coffee would start cooking the eggs. Beat the butter and sugar until pale, add the eggs and flour in turns as for any sponge, then fold in the coffee and chopped walnuts. **Chop the walnuts small.** Large pieces sink and leave the cakes uneven.\n\nBake at 180°C for 20 minutes until risen and springy. If your oven runs hot, check at 17 minutes. Cool on a rack.\n\nBeat the buttercream with a little coffee until it holds a soft peak, pipe or spread it on top and finish each cake with a walnut half.',
    ing: [
      '175 g butter, softened',
      '175 g soft light brown sugar',
      '3 eggs, about 150 g',
      '175 g self-raising flour',
      '2 tbsp instant coffee',
      '2 tbsp hot water',
      '60 g walnuts, finely chopped',
      '125 g butter, for the buttercream',
      '250 g icing sugar',
      '1 tbsp instant coffee, for the buttercream',
      '1 tbsp hot water, for the buttercream',
      '12 walnut halves, about 30 g'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole tin with cases. Dissolve the 2 tbsp of coffee in the 2 tbsp of hot water and cool.',
      'Beat the 175 g of butter and the brown sugar for 3 minutes until pale. Beat in the eggs with a spoonful of flour each, then fold in the remaining flour, cooled coffee and chopped walnuts.',
      'Divide between the cases and bake for 20 minutes until springy. Cool on a rack.',
      'Dissolve the 1 tbsp of coffee in the 1 tbsp of hot water and cool. Beat with the 125 g of butter and the icing sugar until fluffy.',
      'Top each cake with buttercream and a walnut half.'
    ],
    tips: [
      'Cool the coffee before adding.',
      'Chop the nuts small.',
      'If your oven runs hot, check at 17 minutes.',
      'Cool the cakes before icing.'
    ],
    pair: ['Tea', 'Coffee', 'Fresh pears', 'Warm milk'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [450, 5, 49, 26, 1, 35, 20]
  },

  'red-velvet-whoopie-pies': {
    d: 'Soft red cocoa cake rounds sandwiched with a cream cheese filling.',
    meta: 'Red velvet whoopie pies: soft red cocoa cake rounds sandwiched with cream cheese filling. Twelve pies, baked for 12 minutes.',
    kw: ['red velvet whoopie pies', 'red velvet whoopie pies with cream cheese filling', 'soft red velvet whoopie pies', 'whoopie pies with cream cheese', 'red velvet cake sandwiches'],
    why: 'This is what to make in the week of Valentine\'s Day, or any time you want something red on the table. A whoopie pie is a soft, cake-like round sandwiched with filling, and red velvet is a natural fit.\n\nMix the butter, sugar and egg until smooth, then stir in the buttermilk, vanilla, vinegar and red food colouring. Sift the flour, cocoa, bicarbonate of soda and salt together and fold them in until just combined. **Do not overmix the batter.** Whoopie pies should be soft and tender, and a stiff batter makes dry ones.\n\nDrop 24 even mounds onto lined trays, spaced apart, and bake at 180°C for 12 minutes. If your oven runs hot, check at 10 minutes. They should spring back when pressed.\n\nCool completely, then beat the cream cheese, butter, icing sugar and vanilla together. Sandwich a generous spoonful between pairs. Gel food colouring gives a stronger red than liquid, and needs far less of it.',
    ing: [
      '80 g butter, softened',
      '150 g caster sugar',
      '1 egg, about 50 g',
      '120 ml buttermilk',
      '1 tsp vanilla extract',
      '1 tsp white vinegar',
      '2 g red food colouring',
      '250 g plain flour',
      '2 tbsp cocoa powder',
      '1 tsp bicarbonate of soda',
      '1/2 tsp salt',
      '120 g cream cheese',
      '60 g butter, for the filling',
      '200 g icing sugar',
      '1/2 tsp vanilla extract, for the filling'
    ],
    st: [
      'Heat the oven to 180°C and line two trays. Beat the 80 g of butter, sugar and egg until smooth, then stir in the buttermilk, vanilla, vinegar and colouring.',
      'Sift the flour, cocoa, bicarbonate of soda and salt and fold in until just combined.',
      'Drop 24 mounds onto the trays, spaced apart, and bake for 12 minutes until they spring back. Cool completely.',
      'Beat the cream cheese, the 60 g of butter, icing sugar and the 1/2 tsp of vanilla until smooth.',
      'Sandwich a spoonful of filling between pairs of cakes.'
    ],
    tips: [
      'Do not overmix the batter.',
      'Drop even mounds.',
      'If your oven runs hot, check at 10 minutes.',
      'Cool fully before filling.'
    ],
    pair: ['Milk', 'Fresh raspberries', 'Coffee', 'Hot chocolate'],
    store: 'Keeps in the fridge for 3 days. Bring to room temperature before eating.',
    nut: [330, 4, 47, 14, 1, 30, 250]
  }
};
