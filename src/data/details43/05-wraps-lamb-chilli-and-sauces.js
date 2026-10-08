'use strict';

/**
 * Volume forty-three — wraps, lamb, seafood and sauces, fifth part.
 *
 * Ranch chicken wraps, a red wine gravy, rice pilaf, romesco, salmon with
 * dill sauce, sausage and cheese pasta, scallops, a seafood stew, slow
 * lamb shoulder, steak fried rice and tacos, sticky wings, a sun-dried
 * tomato pesto, two flavoured mayonnaises and a lemon vinaigrette. Times
 * are the recipe's own; ovens differ, so each method says when to check
 * early. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'ranch-chicken-wraps': {
    d: 'Cooked chicken, lettuce, tomato and cheddar rolled in flour tortillas with a ranch dressing.',
    meta: 'Ranch chicken wraps: sliced chicken, lettuce, tomato and cheddar in tortillas with ranch dressing. Four servings, cooked for 10 minutes.',
    kw: ['ranch chicken wraps', 'chicken ranch wraps', 'chicken and ranch wrap', 'ranch chicken tortilla wraps', 'chicken wraps with ranch dressing'],
    why: 'Season first, fill last. Chicken that has been cooked plain tastes of very little, and a wrap with a cold, wet filling goes soggy within minutes.\n\nCut the chicken into strips and fry it in a hot pan with the paprika, garlic powder, salt and pepper for 8 to 10 minutes, until golden and cooked all the way through. Let it cool for a few minutes, because hot chicken wilts the lettuce and warms the dressing to a runny sauce. **Dry the lettuce well.** Wet leaves make a wrap soft and limp.\n\nWarm the tortillas for 15 seconds in a dry pan so they bend without cracking. Spread ranch down the middle, add lettuce, tomato, cheese and chicken, fold in the ends and roll tightly.\n\nCut in half on the diagonal. Wrap in foil or paper for a lunchbox. Chicken thighs work as well as breast, and stay juicier if you are cooking ahead.',
    ing: [
      '500 g chicken breast, cut into strips',
      '1 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '4 flour tortillas, about 240 g',
      '100 ml ranch dressing',
      '80 g lettuce, shredded',
      '2 tomatoes, about 200 g, sliced',
      '80 g cheddar, grated'
    ],
    st: [
      'Toss the chicken with the paprika, garlic powder, salt and pepper and fry in the oil for 8 minutes until golden and cooked through. Cool for 5 minutes.',
      'Warm the tortillas in a dry pan for 15 seconds each.',
      'Spread the ranch down the middle of each, then add the lettuce, tomato, cheese and chicken.',
      'Fold in the ends, roll up tightly and cut in half.'
    ],
    tips: [
      'Cool the chicken before filling.',
      'Dry the lettuce.',
      'Warm the tortillas so they bend.',
      'Roll tightly.'
    ],
    pair: ['Carrot sticks', 'Crisps', 'Coleslaw', 'Apple slices'],
    store: 'Keeps wrapped in the fridge for 1 day. Fill and roll fresh for the best texture.',
    nut: [530, 39, 35, 26, 3, 4, 1070]
  },

  'red-wine-gravy': {
    d: 'A gravy of onion, flour, red wine and beef stock, simmered until glossy and finished with a little butter.',
    meta: 'Red wine gravy: onion, red wine and beef stock reduced to a glossy gravy. Six servings, cooked for 15 minutes.',
    kw: ['red wine gravy', 'beef red wine gravy', 'red wine gravy for roast beef', 'red wine and onion gravy', 'homemade red wine gravy'],
    why: 'Gravy is a sauce built on the cooking juices from the pan, and this one adds wine for depth. The wine gives acidity and a rounded, savoury edge that stock alone cannot.\n\nSoften the onion in butter for 5 minutes, then stir in the flour and cook for a minute until it smells nutty. Pour in the wine and let it bubble for 3 minutes, so the harsh alcohol smell cooks away. Add the stock a little at a time, whisking, and simmer for 8 minutes until it coats a spoon. **Do not skip simmering the wine.** Raw wine tastes sharp and thin.\n\nSeason with the Worcestershire sauce, salt and pepper. For a smooth gravy, strain it through a sieve. For a rustic one, leave the onion in.\n\nAdd any resting juices from the roast, and finish with a small knob of cold butter. Use a dry red wine you would be happy to drink, as cheap sweet wine makes a cloying gravy.',
    ing: [
      '1 onion, about 150 g, finely chopped',
      '30 g butter',
      '30 g plain flour',
      '250 ml red wine',
      '500 ml beef stock',
      '1 tsp Worcestershire sauce',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '10 g cold butter, to finish'
    ],
    st: [
      'Soften the onion in the butter over a medium heat for 5 minutes.',
      'Stir in the flour for 1 minute, then pour in the wine and bubble for 3 minutes.',
      'Add the stock a little at a time, whisking, and simmer for 8 minutes until it coats a spoon.',
      'Season with the Worcestershire sauce, salt and pepper, strain if you like, and whisk in the cold butter.'
    ],
    tips: [
      'Cook the flour for a minute.',
      'Simmer the wine before adding stock.',
      'Add the stock slowly to avoid lumps.',
      'Add any resting juices from the roast.'
    ],
    pair: ['Roast beef', 'Mashed potato', 'Yorkshire puddings', 'Sausages'],
    store: 'Keeps in the fridge for 3 days. Reheat gently and add a splash of stock if it has thickened.',
    nut: [94, 2, 8, 6, 1, 1, 480]
  },

  'rice-pilaf': {
    d: 'Long-grain rice toasted in butter with onion and vermicelli, then cooked in stock with a bay leaf.',
    meta: 'Rice pilaf: long-grain rice toasted in butter with onion and vermicelli and cooked in stock. Four servings, cooked for 25 minutes.',
    kw: ['rice pilaf', 'rice pilaf with vermicelli', 'buttery rice pilaf', 'middle eastern rice pilaf', 'stovetop rice pilaf'],
    why: 'The first sign it is going well is the smell: vermicelli and rice turning nutty and golden in the butter. Toasting them for a few minutes before the stock goes in is the step that separates a pilaf from plain boiled rice.\n\nSoften the onion in the butter, then add the vermicelli, broken into short pieces, and stir until it turns the colour of toast. Add the rice and stir for another minute so every grain is coated. **Watch the vermicelli closely.** It goes from gold to burnt quickly.\n\nPour in the hot stock, add the bay leaf and salt, bring to a boil, then cover and cook on the lowest heat for 15 minutes without lifting the lid. Leave off the heat for 5 minutes.\n\nFluff with a fork. The grains should be separate and tender, not sticky. Rinse the rice until the water runs nearly clear, which stops the grains clumping together.',
    ing: [
      '250 g long-grain rice, rinsed',
      '40 g butter',
      '1 onion, about 100 g, finely chopped',
      '50 g vermicelli, broken',
      '500 ml hot chicken stock',
      '1 bay leaf',
      '1/2 tsp salt'
    ],
    st: [
      'Melt the butter in a lidded pan and soften the onion for 4 minutes.',
      'Add the vermicelli and stir for 2 minutes until golden, then stir in the rice for 1 minute.',
      'Pour in the hot stock, add the bay leaf and salt and bring to the boil.',
      'Cover and cook on the lowest heat for 15 minutes without lifting the lid, then leave off the heat for 5 minutes.',
      'Fluff with a fork and remove the bay leaf.'
    ],
    tips: [
      'Rinse the rice first.',
      'Toast the vermicelli to a rich gold.',
      'Do not lift the lid.',
      'Rest it for 5 minutes before fluffing.'
    ],
    pair: ['Grilled chicken', 'Lamb kebabs', 'Roast vegetables', 'Yoghurt sauce'],
    store: 'Keeps in the fridge for 3 days. Cool within an hour and reheat until hot all the way through.',
    nut: [365, 8, 63, 9, 2, 1, 710]
  },

  'romesco-sauce': {
    d: 'A thick sauce of roasted red peppers, almonds, tomatoes, garlic, smoked paprika, sherry vinegar and olive oil.',
    meta: 'Romesco sauce: roasted red peppers, almonds, tomato, garlic and smoked paprika. Six servings, cooked for 20 minutes.',
    kw: ['romesco sauce', 'spanish romesco sauce', 'red pepper and almond romesco', 'romesco sauce with smoked paprika', 'homemade romesco sauce'],
    why: 'It looks like a pesto and tastes like a roasted pepper dip, which is why it is so useful. Romesco is thicker than most sauces and sits on grilled fish, chicken, vegetables or bread.\n\nRoast the peppers, tomatoes and garlic together at 220°C for 20 minutes until the skins blister and darken. Put the peppers in a bowl, cover them, and leave them for 10 minutes so the skins loosen. Peel the peppers and the garlic. **Toast the almonds in a dry pan until they smell nutty.** Raw almonds make a bland sauce.\n\nBlend the vegetables with the almonds, bread, paprika and sherry vinegar, then pour in the oil slowly until the sauce is thick but spoonable. Season with salt.\n\nIt keeps well, and tastes better the day after it is made. A jarred roasted pepper can replace fresh ones if you are short of time, drained and patted dry.',
    ing: [
      '2 red peppers, about 300 g',
      '2 tomatoes, about 200 g',
      '3 cloves garlic, unpeeled',
      '60 g blanched almonds, toasted',
      '30 g bread, torn',
      '2 tsp smoked paprika',
      '2 tbsp sherry vinegar',
      '100 ml olive oil',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 220°C. Roast the peppers, tomatoes and garlic on a tray for 20 minutes until blistered.',
      'Put the peppers in a bowl, cover and leave for 10 minutes, then peel them and the garlic.',
      'Blend with the almonds, bread, paprika and vinegar until rough.',
      'With the blender running, pour in the oil slowly, then season with the salt.'
    ],
    tips: [
      'Toast the almonds.',
      'Cover the peppers so the skins slip off.',
      'If your oven runs hot, check at 15 minutes.',
      'Add the oil slowly.'
    ],
    pair: ['Grilled fish', 'Grilled chicken', 'Roast vegetables', 'Crusty bread'],
    store: 'Keeps in the fridge for 5 days under a layer of oil. Bring to room temperature before serving.',
    nut: [245, 4, 10, 21, 3, 4, 230]
  },

  'salmon-fillet-with-dill-sauce': {
    d: 'Pan-fried salmon fillets served with a cool sauce of soured cream, dill, lemon and a little mustard.',
    meta: 'Salmon fillet with dill sauce: pan-fried salmon with a soured cream, dill and lemon sauce. Four servings, cooked for 15 minutes.',
    kw: ['salmon fillet with dill sauce', 'salmon with creamy dill sauce', 'pan fried salmon with dill sauce', 'salmon and dill sauce', 'salmon with lemon dill sauce'],
    why: 'Most home versions come out dry, and the fix is to take the salmon off the heat a minute earlier than feels right. It keeps cooking in its own heat on the plate.\n\nPat the fillets dry, season them and place them skin-side down in a hot pan with the oil. Do not move them for 5 minutes, until the skin is crisp and the flesh has turned opaque about two-thirds of the way up. Turn and cook for 2 minutes more. **The middle should still be just translucent.** Fully opaque all through means it has gone too far.\n\nWhile the fish cooks, stir the soured cream with the dill, lemon juice, mustard and a pinch of salt. The sauce is cold on purpose, so that it cuts the richness of the fish.\n\nServe the salmon with a spoonful of sauce and boiled potatoes or greens. Skin-on fillets hold together better in the pan, and the crisp skin is worth eating.',
    ing: [
      '4 salmon fillets, about 600 g',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '150 ml soured cream',
      '15 g fresh dill, chopped',
      '1 tbsp lemon juice',
      '1 tsp Dijon mustard'
    ],
    st: [
      'Stir the soured cream, dill, lemon juice, mustard and a pinch of the salt together and chill.',
      'Pat the salmon dry and season with the remaining salt and the pepper.',
      'Fry skin-side down in the oil over a medium-high heat for 5 minutes without moving.',
      'Turn and cook for 2 minutes more, then serve with the dill sauce.'
    ],
    tips: [
      'Pat the fish dry.',
      'Do not move the fillets while the skin crisps.',
      'Take it off the heat while the middle is just translucent.',
      'Chill the sauce.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'Cucumber salad', 'Steamed asparagus'],
    store: 'Keeps in the fridge for 2 days. Flake cold into a salad, with the sauce on the side.',
    nut: [411, 31, 2, 31, 0, 2, 400]
  },

  'sausage-and-cheese-pasta': {
    d: 'Pork sausage, pasta and a creamy cheese sauce, cooked in one pan and finished with extra cheddar.',
    meta: 'Sausage and cheese pasta: pork sausage and pasta in a creamy cheddar sauce. Four servings, cooked for 15 minutes.',
    kw: ['sausage and cheese pasta', 'cheesy sausage pasta', 'sausage pasta with cheddar', 'creamy sausage and cheese pasta', 'pasta with sausage and cheese'],
    why: 'Sausage, pasta, milk and cheddar: four things, and about twenty minutes. The sausage fat flavours the sauce and the pasta water thickens it.\n\nSqueeze the sausage meat from its skins into a wide pan and break it into small pieces as it browns. Small pieces brown faster and spread through the sauce. Drain off most of the fat once it has coloured, but leave a spoonful. **Add the cheese off the heat.** Cheese in a bubbling sauce goes stringy.\n\nBoil the pasta for 2 minutes less than the packet says. Add the milk to the sausage and bring it to a simmer, then toss in the drained pasta and let it finish cooking in the sauce for 2 minutes. Take the pan off the heat and stir in two thirds of the cheese.\n\nScatter over the rest and serve at once. A mature cheddar gives the strongest flavour, so a smaller handful goes a long way.',
    ing: [
      '300 g penne',
      '400 g pork sausages',
      '1 tbsp vegetable oil',
      '2 cloves garlic, crushed',
      '250 ml whole milk',
      '150 g cheddar, grated',
      '1 tsp mustard powder',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the penne for 8 minutes, 2 minutes under the packet time, and drain, keeping a mugful of the water.',
      'Squeeze the sausage meat from the skins into the oil in a wide pan and brown for 6 minutes, breaking it up.',
      'Add the garlic and mustard powder for 30 seconds, then the milk, and simmer for 2 minutes.',
      'Tip in the pasta for 2 minutes, then take off the heat and stir in two thirds of the cheese.',
      'Loosen with pasta water, scatter over the rest of the cheese and serve.'
    ],
    tips: [
      'Break the sausage meat small.',
      'Undercook the pasta.',
      'Add the cheese off the heat.',
      'Loosen with pasta water.'
    ],
    pair: ['Green salad', 'Steamed broccoli', 'Garlic bread', 'Peas'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of milk.',
    nut: [779, 34, 64, 43, 3, 7, 1080]
  },

  'scallops-with-pea-puree': {
    d: 'Seared scallops on a smooth pea puree made with butter, mint and a little cream.',
    meta: 'Scallops with pea puree: seared scallops on a smooth butter and mint pea puree. Two servings, cooked for 12 minutes.',
    kw: ['scallops with pea puree', 'seared scallops with pea puree', 'scallops and pea puree', 'pan seared scallops with peas', 'scallops with mint pea puree'],
    why: 'Dry the scallops, heat the pan until it smokes and then leave them alone. That is the whole technique, and it is where most attempts go wrong.\n\nPat each scallop dry with kitchen paper, because a wet scallop steams in the pan and turns pale and rubbery. Season just before cooking. Heat the oil until it shimmers, add the scallops with space between them and cook for 90 seconds without moving, until a deep gold crust forms. **Do not poke them.** Turn, add the butter and cook for another 60 seconds.\n\nFor the puree, boil the peas for 3 minutes, drain, and blend with the butter, mint, cream and salt until smooth. Warm it before serving.\n\nSpoon the puree on warm plates and set the scallops on top. They wait for no one. Ask the fishmonger for dry-packed scallops, as those soaked in water release liquid and refuse to brown.',
    ing: [
      '6 large scallops, about 200 g',
      '1 tbsp vegetable oil',
      '15 g butter',
      '250 g frozen peas',
      '15 g butter, for the puree',
      '5 g fresh mint leaves',
      '2 tbsp double cream',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the peas for 3 minutes, drain and blend with the butter for the puree, mint, cream and half the salt until smooth. Keep warm.',
      'Pat the scallops very dry and season with the remaining salt.',
      'Heat the oil until shimmering and sear the scallops for 90 seconds without moving.',
      'Turn, add the butter and cook for 60 seconds more.',
      'Spoon the puree onto warm plates and top with the scallops.'
    ],
    tips: [
      'Dry the scallops thoroughly.',
      'Use a very hot pan.',
      'Do not move them while they sear.',
      'Serve at once on warm plates.'
    ],
    pair: ['Crispy bacon', 'Lemon wedges', 'Rocket salad', 'Dry white wine'],
    store: 'Best eaten straight away. Do not keep seafood leftovers.',
    nut: [414, 24, 21, 26, 7, 8, 800]
  },

  'seafood-stew': {
    d: 'Cod, prawns and mussels simmered in a tomato, fennel and white wine broth, served with crusty bread.',
    meta: 'Seafood stew: cod, prawns and mussels in a tomato, fennel and white wine broth. Four servings, cooked for 25 minutes.',
    kw: ['seafood stew', 'italian seafood stew', 'tomato seafood stew', 'seafood stew with white wine', 'cod prawn and mussel stew'],
    why: 'A dish for a table of four on a cold evening, with a loaf in the middle for mopping up. The broth is made first, and the fish goes in at the end.\n\nSoften the onion and fennel in the oil for 8 minutes, add the garlic and tomato purée, then pour in the wine, tomatoes and stock. Simmer for 10 minutes so the flavours settle. The broth is the stew. **Taste and season it before the seafood goes in.** Once the fish is cooked there is no more time for the broth to deepen.\n\nAdd the cod, in chunks, for 3 minutes, then the prawns and mussels. Cover and cook for 4 minutes until the prawns are pink and the mussels open. Discard any that stay shut.\n\nScatter over the parsley and serve in wide bowls. Swap the cod for any firm white fish, such as haddock, and keep the same timing.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '1 fennel bulb, about 200 g, sliced',
      '3 cloves garlic, sliced',
      '1 tbsp tomato purée',
      '150 ml dry white wine',
      '400 g tinned chopped tomatoes',
      '300 ml fish stock',
      '300 g cod fillet, cut into chunks',
      '200 g raw peeled prawns',
      '500 g fresh mussels, cleaned',
      '15 g flat-leaf parsley, chopped',
      '1/2 tsp salt'
    ],
    st: [
      'Soften the onion and fennel in the oil for 8 minutes, then add the garlic and tomato purée for 1 minute.',
      'Pour in the wine, tomatoes, stock and salt and simmer for 10 minutes.',
      'Add the cod and simmer for 3 minutes.',
      'Add the prawns and mussels, cover and cook for 4 minutes until the prawns are pink and the mussels open. Discard any that stay shut.',
      'Scatter over the parsley and serve.'
    ],
    tips: [
      'Season the broth before the fish goes in.',
      'Add the fish in stages.',
      'Discard mussels that stay shut.',
      'Serve with bread for the broth.'
    ],
    pair: ['Crusty bread', 'Garlic toast', 'Green salad', 'Dry white wine'],
    store: 'Best eaten straight away. Do not keep shellfish leftovers.',
    nut: [343, 42, 19, 11, 4, 7, 1070]
  },

  'slow-cooked-lamb-shoulder': {
    d: 'A lamb shoulder roasted gently for four hours with garlic, rosemary and stock until it pulls apart with a spoon.',
    meta: 'Slow cooked lamb shoulder: lamb roasted gently with garlic and rosemary until it falls apart. Six servings, baked for 4 hours.',
    kw: ['slow cooked lamb shoulder', 'slow roast lamb shoulder', 'falling apart lamb shoulder', 'lamb shoulder with garlic and rosemary', 'four hour lamb shoulder'],
    why: 'It looks like a roast and cooks like a stew, which is why it asks so little of you. A lamb shoulder is full of connective tissue that turns tender only after hours at a low heat.\n\nMake deep cuts across the skin and push slivers of garlic and sprigs of rosemary into them. Season well with salt and pepper. Set the joint on a bed of onions in a deep tin, pour in the stock and cover tightly with foil. **Seal the foil all round.** Steam is what does the work, and a loose lid lets it escape.\n\nRoast at 150°C for 3 hours 30 minutes, then take off the foil and raise the heat to 200°C for 30 minutes to brown the top. If your oven runs hot, check the meat at 3 hours.\n\nThe lamb is ready when a spoon pulls it apart. Rest for 15 minutes and serve with the juices.',
    ing: [
      '2 kg lamb shoulder, bone in',
      '6 cloves garlic, sliced',
      '4 sprigs rosemary, about 10 g',
      '2 onions, about 300 g, thickly sliced',
      '300 ml lamb stock',
      '2 tsp salt',
      '1 tsp black pepper'
    ],
    st: [
      'Heat the oven to 150°C. Cut deep slits in the lamb and push in the garlic and half the rosemary. Rub with the salt and pepper.',
      'Set on the onions in a deep tin, pour in the stock and cover tightly with foil.',
      'Roast for 3 hours 30 minutes, then remove the foil, raise the oven to 200°C and roast for 30 minutes more to brown.',
      'Rest for 15 minutes, then pull apart and serve with the juices.'
    ],
    tips: [
      'Seal the foil tightly.',
      'Cut deep slits for the garlic.',
      'If your oven runs hot, check at 3 hours.',
      'Rest the meat for 15 minutes.'
    ],
    pair: ['Roast potatoes', 'Mint sauce', 'Buttered carrots', 'Green beans'],
    store: 'Keeps in the fridge for 3 days. Reheat in the juices until hot all the way through.',
    nut: [863, 58, 7, 67, 2, 2, 1190]
  },

  'steak-fried-rice': {
    d: 'Thin strips of steak stir-fried with cold cooked rice, egg, peas and spring onions in soy sauce.',
    meta: 'Steak fried rice: strips of steak stir-fried with cold rice, egg, peas and soy sauce. Four servings, cooked for 12 minutes.',
    kw: ['steak fried rice', 'beef steak fried rice', 'fried rice with steak', 'steak and egg fried rice', 'steak fried rice with peas'],
    why: 'It looks like a takeaway fried rice and cooks like a steak dinner, which is why the order matters. The steak goes in first, and is only on the heat for a few minutes.\n\nSlice the steak thin against the grain and sear it in a very hot wok for 90 seconds, then take it out. It goes back at the end to warm through. Overcooked steak in fried rice turns to leather. **Use cold, day-old rice.** Fresh rice is wet and steams into a mush, and cold rice fries into separate grains.\n\nFry the rice in the oil for 3 minutes, pushing it against the wok to crisp. Push it aside, scramble the egg in the gap, then mix in the peas, soy sauce and spring onions.\n\nReturn the steak, toss for 30 seconds and serve at once. Leftover roast beef, thinly sliced, works too, but only needs warming through for 30 seconds.',
    ing: [
      '300 g sirloin steak, thinly sliced',
      '2 tbsp vegetable oil',
      '600 g cooked rice, cold',
      '2 eggs, about 100 g, beaten',
      '100 g frozen peas',
      '3 tbsp soy sauce',
      '3 spring onions, about 45 g, sliced',
      '2 cloves garlic, crushed',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat half the oil in a wok until smoking, sear the steak for 90 seconds and set aside.',
      'Add the rest of the oil and the garlic for 15 seconds, then the cold rice, and fry for 3 minutes.',
      'Push the rice aside, scramble the egg in the gap, then stir everything together with the peas for 2 minutes.',
      'Add the soy sauce, spring onions and pepper, return the steak and toss for 30 seconds.'
    ],
    tips: [
      'Use cold, day-old rice.',
      'Sear the steak first and take it out.',
      'Keep the wok very hot.',
      'Cool cooked rice quickly and refrigerate it within an hour.'
    ],
    pair: ['Cucumber salad', 'Steamed pak choi', 'Chilli sauce', 'Spring rolls'],
    store: 'Keeps in the fridge for 1 day. Reheat until piping hot all the way through.',
    nut: [440, 26, 48, 16, 3, 2, 740]
  },

  'steak-tacos': {
    d: 'Marinated and seared steak sliced thin and piled into warm corn tortillas with onion, coriander and lime.',
    meta: 'Steak tacos: seared steak in warm corn tortillas with onion, coriander and lime. Four servings, cooked for 10 minutes.',
    kw: ['steak tacos', 'seared steak tacos', 'mexican steak tacos', 'street style steak tacos', 'steak tacos with lime'],
    why: 'Slice the steak across the grain and as thin as you can. That is the single most useful instruction, because a thin slice of seared steak is tender and a thick one is chewy.\n\nMix the lime juice, oil, garlic, cumin and chilli powder and rub it into the steak. Leave it for 15 minutes while you chop the onion and coriander. A short marinade is enough, because acid toughens meat if it stays too long. **Get the pan very hot.** The steak should sizzle loudly when it hits, and develop a dark crust in 3 minutes a side.\n\nRest the steak for 5 minutes, then slice. Warm the tortillas on a dry pan for 20 seconds a side so that they are soft and a little charred.\n\nPile the meat onto the tortillas and top with the onion, coriander, a squeeze of lime and a spoonful of salsa. Skirt steak has the most flavour, though flank or sirloin are fine if sliced just as thin.',
    ing: [
      '500 g skirt steak',
      '3 tbsp lime juice',
      '2 tbsp vegetable oil',
      '3 cloves garlic, crushed',
      '1 tsp ground cumin',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '12 small corn tortillas, about 300 g',
      '1 onion, about 100 g, finely chopped',
      '15 g coriander leaves',
      '100 g salsa'
    ],
    st: [
      'Mix the lime juice, oil, garlic, cumin, chilli powder and salt and rub over the steak. Leave for 15 minutes.',
      'Sear the steak in a very hot pan for 3 minutes a side. Rest for 5 minutes, then slice thin across the grain.',
      'Warm the tortillas in a dry pan for 20 seconds a side.',
      'Fill with the steak, onion, coriander and salsa, and serve with lime.'
    ],
    tips: [
      'Slice thin across the grain.',
      'Keep the marinade short.',
      'Rest the steak before slicing.',
      'Warm the tortillas until pliable.'
    ],
    pair: ['Lime wedges', 'Refried beans', 'Guacamole', 'Mexican rice'],
    store: 'Keeps in the fridge for 2 days. Reheat the steak briefly in a hot pan.',
    nut: [432, 32, 40, 16, 6, 3, 590]
  },

  'sticky-chicken-wings': {
    d: 'Chicken wings baked until crisp, then coated in a sticky glaze of soy sauce, honey, garlic and ginger.',
    meta: 'Sticky chicken wings: wings baked until crisp and coated in a soy, honey, garlic and ginger glaze. Four servings, baked for 45 minutes.',
    kw: ['sticky chicken wings', 'baked sticky chicken wings', 'honey soy sticky wings', 'sticky asian chicken wings', 'oven sticky chicken wings'],
    why: 'Wings are mostly skin and bone, which is why they need a long, hot bake to turn crisp. The glaze goes on after that, not before, because sugar burns long before the skin is done.\n\nDry the wings well, toss them with the oil, salt and pepper and spread them in one layer on a rack. Bake at 220°C for 40 minutes, turning once, until the skin is deep gold. If your oven runs hot, check at 35 minutes. **Do not glaze them early.** Honey and soy blacken in the oven.\n\nWhile they bake, simmer the soy sauce, honey, garlic and ginger in a small pan for 4 minutes until it thickens to a syrup. Toss the hot wings in it, then return them to the oven for 5 minutes so the glaze sets sticky.\n\nFinish with sesame seeds and sliced spring onion. Have napkins ready. Use a rack if you can, since wings sitting in their own fat stay pale underneath.',
    ing: [
      '1 kg chicken wings',
      '1 tbsp vegetable oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '4 tbsp soy sauce',
      '3 tbsp honey',
      '3 cloves garlic, crushed',
      '15 g fresh ginger, grated',
      '1 tbsp sesame seeds',
      '2 spring onions, about 30 g, sliced'
    ],
    st: [
      'Heat the oven to 220°C. Dry the wings, toss with the oil, salt and pepper and spread on a rack over a tray.',
      'Bake for 40 minutes, turning once, until deep gold.',
      'Simmer the soy sauce, honey, garlic and ginger in a small pan for 4 minutes until syrupy.',
      'Toss the hot wings in the glaze, return to the oven for 5 minutes, then scatter with the sesame seeds and spring onions.'
    ],
    tips: [
      'Dry the wings well.',
      'Glaze only at the end.',
      'If your oven runs hot, check at 35 minutes.',
      'Line the tray to make washing up easier.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Coleslaw', 'Celery sticks'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [622, 45, 16, 42, 1, 13, 1380]
  },

  'sun-dried-tomato-pesto': {
    d: 'A blended sauce of sun-dried tomatoes, basil, pine nuts, garlic, parmesan and olive oil.',
    meta: 'Sun dried tomato pesto: sun-dried tomatoes, basil, pine nuts, garlic and parmesan blended with olive oil. Six servings, no cooking.',
    kw: ['sun dried tomato pesto', 'red pesto', 'sun dried tomato and basil pesto', 'homemade sun dried tomato pesto', 'pesto rosso'],
    why: 'Pesto traditionally means a sauce pounded in a mortar, and this red version is the same idea made in a blender. Sun-dried tomatoes replace some of the basil, and they bring a deeper, sweeter flavour.\n\nUse tomatoes packed in oil, and drain them well, keeping a spoonful of the oil. Dry ones need soaking in hot water for 10 minutes first. Toast the pine nuts in a dry pan until golden. **Blend in short pulses.** A long blend heats the basil and turns the sauce dull and bitter.\n\nPulse the tomatoes, basil, pine nuts, garlic and parmesan until coarse, then pour in the olive oil with the blender running until it loosens to a spoonable paste. Season with the salt and lemon juice.\n\nStir it through pasta with a splash of the cooking water, spread it on bread, or spoon it over roast chicken. Walnuts or almonds can stand in for pine nuts, which are expensive and sometimes hard to find.',
    ing: [
      '120 g sun-dried tomatoes in oil, drained',
      '20 g fresh basil leaves',
      '40 g pine nuts, toasted',
      '2 cloves garlic',
      '40 g parmesan, grated',
      '80 ml olive oil',
      '1 tbsp lemon juice',
      '1/4 tsp salt'
    ],
    st: [
      'Pulse the tomatoes, basil, pine nuts, garlic and parmesan in short bursts until coarse.',
      'With the blender running, pour in the oil until the pesto is a spoonable paste.',
      'Stir in the lemon juice and salt and taste.'
    ],
    tips: [
      'Toast the pine nuts.',
      'Blend in short pulses.',
      'Drain the tomatoes well.',
      'Add the salt last, as the tomatoes and parmesan are salty.'
    ],
    pair: ['Pasta', 'Crusty bread', 'Grilled chicken', 'Mozzarella'],
    store: 'Keeps in the fridge for 5 days under a layer of oil.',
    nut: [247, 6, 13, 19, 3, 8, 600]
  },

  'sriracha-mayo': {
    d: 'Mayonnaise stirred with sriracha, lime juice and a little garlic powder into a pale orange, spicy dip.',
    meta: 'Sriracha mayo: mayonnaise stirred with sriracha, lime juice and garlic powder. Eight servings, no cooking.',
    kw: ['sriracha mayo', 'spicy sriracha mayo', 'sriracha mayonnaise', 'sriracha mayo dip', 'homemade sriracha mayo'],
    why: 'The first sign it is right is the colour: a pale, even orange with no streaks of white. Stir until you cannot see any, because the sauce looks and tastes better when it is smooth.\n\nStart with the mayonnaise in a bowl and add the sriracha a spoonful at a time. Taste after each spoonful, because brands vary a lot in heat and salt. **Add the lime juice last.** It thins the mayo, so add it a little at a time until the sauce drizzles from a spoon.\n\nA pinch of garlic powder adds depth without the raw bite of fresh garlic. If you want it sweeter, a small spoon of honey rounds it off.\n\nLeave it in the fridge for 15 minutes so the flavours join. Use it as a dip for fries and chicken, in sushi rolls, or spread inside a burger bun. Swap half the mayonnaise for Greek yoghurt for a lighter and tangier dip.',
    ing: [
      '200 g mayonnaise',
      '3 tbsp sriracha',
      '1 tbsp lime juice',
      '1/2 tsp garlic powder',
      '1 tsp honey'
    ],
    st: [
      'Put the mayonnaise in a bowl and stir in the sriracha, a spoonful at a time, tasting as you go.',
      'Add the garlic powder and honey and stir until smooth and evenly orange.',
      'Stir in the lime juice, a little at a time, until the sauce drizzles from a spoon.',
      'Chill for 15 minutes before serving.'
    ],
    tips: [
      'Add the sriracha slowly.',
      'Taste after each spoonful.',
      'Add the lime juice last.',
      'Use a squeezy bottle for drizzling.'
    ],
    pair: ['Fries', 'Fried chicken', 'Sushi rolls', 'Burgers'],
    store: 'Keeps in the fridge for 5 days in a covered jar.',
    nut: [179, 0, 2, 19, 0, 1, 260]
  },

  'chipotle-mayo': {
    d: 'Mayonnaise blended with chipotle peppers in adobo, lime juice and garlic into a smoky, mildly hot sauce.',
    meta: 'Chipotle mayo: mayonnaise blended with chipotle in adobo, lime juice and garlic. Eight servings, no cooking.',
    kw: ['chipotle mayo', 'smoky chipotle mayo', 'chipotle mayonnaise', 'chipotle mayo dip', 'homemade chipotle mayo'],
    why: 'A sauce for a taco night or a burger evening, made in two minutes and tastier than anything from a bottle. The chipotle in adobo does all the work.\n\nChipotles are smoked jalapeños, and the tin comes with a rich red sauce. Both are used here. Chop one pepper finely, or blend it, and add a spoon of the adobo sauce for colour and smoke. Start with less than you think you need. **Add chipotle a little at a time.** The heat builds as the sauce stands.\n\nStir the pepper into the mayonnaise with the lime juice and garlic until the sauce is evenly speckled and orange-brown. Taste, and add more adobo or salt if it needs it.\n\nLet it stand in the fridge for 30 minutes. Serve with sweet potato fries, in a burger, over grilled corn, or spread in a wrap. Freeze leftover chipotles from the tin in a spoonful of their sauce, so the rest of the tin is not wasted.',
    ing: [
      '200 g mayonnaise',
      '1 chipotle pepper in adobo, about 15 g, finely chopped',
      '1 tbsp adobo sauce from the tin',
      '1 tbsp lime juice',
      '1 clove garlic, crushed',
      '1/4 tsp salt'
    ],
    st: [
      'Stir the chipotle, adobo sauce, lime juice, garlic and salt into the mayonnaise until evenly mixed.',
      'Taste and add more adobo sauce or salt if it needs it.',
      'Chill for 30 minutes to let the flavours settle.'
    ],
    tips: [
      'Start with a little chipotle.',
      'Chop the pepper finely.',
      'Let it stand, as the heat builds.',
      'Use the leftover tin in a stew or marinade.'
    ],
    pair: ['Sweet potato fries', 'Grilled corn', 'Burgers', 'Fish tacos'],
    store: 'Keeps in the fridge for 5 days in a covered jar.',
    nut: [175, 0, 1, 19, 0, 0, 250]
  },

  'lemon-vinaigrette': {
    d: 'A dressing of lemon juice, olive oil, Dijon mustard, honey and a pinch of salt, shaken until creamy.',
    meta: 'Lemon vinaigrette: lemon juice, olive oil, Dijon mustard and honey shaken together. Six servings, no cooking.',
    kw: ['lemon vinaigrette', 'simple lemon vinaigrette', 'lemon vinaigrette dressing', 'lemon and olive oil vinaigrette', 'homemade lemon vinaigrette'],
    why: 'This is what to make in the first warm week, when the salad bowl comes out again. It takes a minute and keeps for days.\n\nThe mustard is the secret to a vinaigrette that does not split. It acts as an emulsifier, holding the oil and lemon juice together in a thick, creamy dressing. Put the lemon juice, mustard, honey and salt in a jar first, and add the oil last. **Shake hard for 20 seconds.** The dressing should look pale and slightly thick, not like two layers.\n\nUse a good olive oil, since there is little else in the jar to hide behind. The usual ratio is three parts oil to one part lemon juice, but lemons vary, so taste and adjust. Add a pinch more honey if it is too sharp.\n\nDress the salad just before serving, as acid wilts the leaves. A spoonful of finely chopped shallot or fresh herbs turns it into a different dressing every time.',
    ing: [
      '60 ml lemon juice',
      '120 ml olive oil',
      '2 tsp Dijon mustard',
      '1 tbsp honey',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the lemon juice, mustard, honey, salt and pepper in a jar.',
      'Add the olive oil, close the lid and shake hard for 20 seconds until pale and creamy.',
      'Taste, adjust with a little more honey or salt, and use at once or chill.'
    ],
    tips: [
      'Add the oil last.',
      'Shake hard to emulsify.',
      'Taste on a leaf, not from the spoon.',
      'Dress the salad just before serving.'
    ],
    pair: ['Green salad', 'Roast vegetables', 'Grilled fish', 'Grain salad'],
    store: 'Keeps in the fridge for 5 days in a jar. Shake before using, and let it warm a few minutes if the oil has set.',
    nut: [187, 0, 4, 19, 0, 3, 230]
  }
};
