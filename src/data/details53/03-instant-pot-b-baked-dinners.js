'use strict';

/**
 * Volume fifty-three — air fryer, Instant Pot and oven dinners, third part.
 *
 * Twenty-five dishes: fifteen more Instant Pot recipes (meatballs, minestrone,
 * Mongolian beef, orange chicken, osso buco, pad Thai, pho, ramen, salmon,
 * shrimp scampi, stuffed peppers, taco soup, teriyaki chicken, white chicken
 * chili, a whole chicken) and ten oven dishes (chicken legs, halibut, baked
 * penne, pork chops, baked rigatoni, sea bass, trout, battered fish, a beef
 * casserole, beef nachos). Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'instant-pot-meatballs': {
    d: 'Beef and pork meatballs with parmesan and herbs, browned and then simmered under pressure in tomato sauce for 15 minutes.',
    meta: 'Instant Pot meatballs in a rich tomato sauce, tender after 15 minutes under pressure. Four servings, ready in 35 minutes.',
    kw: ['instant pot meatballs', 'pressure cooker meatballs', 'italian meatballs in tomato sauce', 'beef and pork meatballs', 'meatballs and marinara'],
    why: 'Soak the breadcrumbs in milk first. That single step is what keeps a meatball soft, because the wet crumbs hold moisture inside the meat while it cooks and stop the proteins from squeezing tight. Dry crumbs stirred in straight from the packet pull the juices out instead.\n\nUse equal parts beef and pork mince, which gives you flavour from the beef and tenderness from the fat in the pork. Mix with your hands until the ingredients are just combined, and no longer. Overworking the meat makes the meatballs dense and bouncy.\n\n**Brown the meatballs before the sauce goes in.** A few minutes on the sauté setting builds a crust that adds depth to the sauce. They will still be raw in the middle, which is fine, because the pressure cooker finishes them in 15 minutes.\n\nPour the passata over the top and do not stir. Let the meatballs sit on the sauce, not in it, so none of them sticks to the base and the burn warning stays quiet. Serve over spaghetti with a little more parmesan.',
    ing: [
      '250 g beef mince',
      '250 g pork mince',
      '40 g breadcrumbs',
      '60 ml milk',
      '1 egg',
      '40 g parmesan, finely grated',
      '2 garlic cloves, crushed',
      '2 tbsp parsley, chopped',
      '1 tsp salt',
      '1 tbsp olive oil',
      '700 g passata',
      '1 tsp dried oregano'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes. Mix with the beef, pork, egg, parmesan, garlic, parsley and salt until just combined.',
      'Roll into 16 meatballs, each about the size of a golf ball.',
      'Set the Instant Pot to sauté. Heat the oil and brown the meatballs in 2 batches for 4 minutes each. Remove them.',
      'Pour in the passata and oregano, scraping the base. Add the meatballs on top without stirring.',
      'Seal and cook on high pressure for 15 minutes. Release naturally for 5 minutes and serve.'
    ],
    tips: [
      'Mix the meat gently: overmixing makes it tough.',
      'Do not stir the meatballs into the sauce before cooking.',
      'Wet your hands to stop the mix sticking as you roll.'
    ],
    pair: ['Spaghetti', 'Garlic bread', 'Green salad', 'Grated parmesan'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer in their sauce.',
    nut: [461, 32, 18, 29, 3, 9, 1090]
  },

  'instant-pot-minestrone': {
    d: 'A chunky Italian vegetable soup of beans, small pasta and tomato, cooked under pressure in 15 minutes and finished with parmesan.',
    meta: 'Instant Pot minestrone with beans, vegetables and pasta. Six servings, ready in 30 minutes.',
    kw: ['instant pot minestrone', 'minestrone soup', 'pressure cooker minestrone', 'italian vegetable soup', 'minestrone with beans and pasta'],
    why: 'Minestrone means big soup in Italian, and the name explains a lot: it is a pot of whatever vegetables the season offers, thickened with beans and pasta. There is no single correct version, only a good balance of soft, sweet vegetables and something starchy to hold it together.\n\nStart with a base of onion, carrot and celery cooked in olive oil until they smell sweet, then add garlic, tomato purée and herbs. This takes about 8 minutes and gives the soup its flavour, so do not hurry it. A parmesan rind dropped into the pot adds savouriness without any extra salt.\n\n**Add the pasta after pressure cooking.** If it goes in with the vegetables it overcooks into mush. Simmer small pasta in the soup on the sauté setting for 8 minutes instead, and it will be tender but still slightly firm.\n\nStir in a handful of spinach just before serving so that it wilts without losing its colour, and finish with a spoonful of pesto or a drizzle of good olive oil.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1.2 litres vegetable stock',
      '1 courgette, diced',
      '400 g tinned cannellini beans, drained',
      '1 tsp dried oregano',
      '30 g parmesan rind',
      '100 g small pasta',
      '100 g spinach',
      '30 g parmesan, grated'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and cook the onion, carrots and celery for 8 minutes. Add the garlic and tomato purée and stir for 1 minute.',
      'Add the tomatoes, stock, courgette, beans, oregano and parmesan rind.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Select sauté, add the pasta and simmer for 8 minutes until tender.',
      'Stir in the spinach until wilted. Remove the rind and serve with the grated parmesan.'
    ],
    tips: [
      'Add the pasta only after releasing the pressure.',
      'Keep the rind from a parmesan block to freeze for soups.',
      'Cut the vegetables to the same size for even cooking.'
    ],
    pair: ['Crusty bread', 'Pesto', 'Parmesan', 'Green salad'],
    store: 'Keeps for 4 days in the fridge. The pasta softens, so add a splash of stock when reheating.',
    nut: [269, 14, 33, 9, 7, 6, 1060]
  },

  'instant-pot-mongolian-beef': {
    d: 'Flank steak strips coated in cornflour and cooked under pressure in a sweet soy and ginger sauce, with spring onions to finish.',
    meta: 'Instant Pot Mongolian beef in a sticky soy and brown sugar sauce. Four servings, ready in 25 minutes.',
    kw: ['instant pot mongolian beef', 'mongolian beef recipe', 'pressure cooker mongolian beef', 'sticky soy beef', 'beef and spring onions'],
    why: 'Flank steak, soy sauce, brown sugar and spring onions: four things, and a sticky, savoury sauce that is better than any takeaway tub. Mongolian beef is not Mongolian at all but a Chinese American restaurant dish, and the sauce is sweeter and thicker than most traditional recipes.\n\nSlice the steak across the grain, as thinly as you can, and toss it in cornflour. The cornflour coat protects the meat under pressure, gives the slices a velvet surface and helps the sauce stick. Without it, the slices tend to turn stringy.\n\n**Pressure cook for 5 minutes only.** Thin strips overcook fast. Release the pressure at once and the beef stays tender, with the sauce still loose enough to reduce. Then switch to sauté and simmer for a few minutes until the sauce clings to a spoon.\n\nBe generous with the spring onions. Add half to the sauce, where they soften and sweeten it, and scatter the rest over the top raw for a fresh, sharp contrast. Serve over steamed rice or noodles.',
    ing: [
      '600 g flank steak, sliced thinly across the grain',
      '3 tbsp cornflour',
      '2 tbsp vegetable oil',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '120 ml soy sauce',
      '120 ml water',
      '100 g light brown sugar',
      '1 tbsp rice vinegar',
      '1 tsp sesame oil',
      '6 spring onions, cut into 4 cm lengths'
    ],
    st: [
      'Toss the beef with 2 tbsp of the cornflour until evenly coated.',
      'Set the Instant Pot to sauté. Heat the oil and brown the beef in 2 batches for 2 minutes each. Add the garlic and ginger and stir for 30 seconds.',
      'Add the soy sauce, water, sugar and vinegar. Scatter half of the spring onions on top.',
      'Seal and cook on high pressure for 5 minutes. Release the pressure quickly.',
      'Select sauté. Mix the remaining cornflour with 2 tbsp cold water, stir it in and simmer for 2 minutes. Add the sesame oil and the rest of the spring onions.'
    ],
    tips: [
      'Slice the steak thinly across the grain.',
      'Do not cook longer than 5 minutes under pressure.',
      'Taste the sauce and add more sugar or soy to suit.'
    ],
    pair: ['Steamed rice', 'Stir-fried noodles', 'Broccoli', 'Sesame seeds'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of water.',
    nut: [420, 35, 34, 16, 1, 25, 1860]
  },

  'instant-pot-orange-chicken': {
    d: 'Crisp-coated chicken pieces in a sticky orange sauce made from juice, zest, soy and honey, thickened in the pot after pressure cooking.',
    meta: 'Instant Pot orange chicken in a sticky citrus sauce. Four servings, ready in 35 minutes.',
    kw: ['instant pot orange chicken', 'orange chicken recipe', 'pressure cooker orange chicken', 'sticky orange chicken', 'chinese orange chicken'],
    why: 'Most home versions come out with a sauce that tastes of sweet squash, and the fix is real orange: both the juice and the zest. The zest holds the aromatic oils that give orange chicken its fresh, slightly bitter edge, which juice alone cannot supply.\n\nThe restaurant version is deep fried and then coated in sauce. This one skips the fryer and cooks the chicken pieces in the sauce under pressure, so the coating is soft rather than crisp, but the flavour is the same. Toss the chicken in cornflour first so that the sauce clings in a glossy layer.\n\n**Thicken the sauce at the end, and thin it with orange juice, not water.** After pressure cooking, the liquid looks watery. A cornflour slurry on the sauté setting brings it to a syrupy glaze in two minutes, and a last squeeze of juice brightens the flavour.\n\nGarnish with sesame seeds and spring onions, and add a pinch of chilli flakes if you like a little heat against the sweetness.',
    ing: [
      '600 g chicken thighs, boneless, cut into 3 cm pieces',
      '3 tbsp cornflour, plus 1 tbsp for the sauce',
      '1 tbsp vegetable oil',
      '200 ml orange juice',
      '1 orange, zested',
      '3 tbsp soy sauce',
      '3 tbsp honey',
      '2 tbsp rice vinegar',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '1/2 tsp chilli flakes',
      '2 spring onions, sliced',
      '1 tsp sesame seeds'
    ],
    st: [
      'Toss the chicken in 3 tbsp cornflour. Set the Instant Pot to sauté and brown the chicken in the oil for 4 minutes.',
      'Add the orange juice, zest, soy sauce, honey, vinegar, garlic, ginger and chilli flakes and stir, scraping the base.',
      'Seal and cook on high pressure for 6 minutes. Release the pressure quickly.',
      'Select sauté. Mix 1 tbsp cornflour with 2 tbsp cold water, stir it in and simmer for 2 minutes until thick and glossy.',
      'Scatter with the spring onions and sesame seeds and serve.'
    ],
    tips: [
      'Use fresh orange juice and zest for the best flavour.',
      'Thicken only with the lid off.',
      'Reduce the sauce a little longer for a stickier glaze.'
    ],
    pair: ['Steamed rice', 'Broccoli', 'Egg fried rice', 'Stir-fried greens'],
    store: 'Keeps for 3 days in the fridge. Reheat with a splash of orange juice.',
    nut: [347, 32, 30, 11, 2, 20, 800]
  },

  'instant-pot-osso-buco': {
    d: 'Veal shanks braised under pressure in white wine, tomato and stock with gremolata sprinkled over the top before serving.',
    meta: 'Instant Pot osso buco in white wine and tomato with a lemon gremolata. Four servings, ready in 1 hour 15 minutes.',
    kw: ['instant pot osso buco', 'pressure cooker osso buco', 'osso buco recipe', 'braised veal shanks', 'osso buco with gremolata'],
    why: 'This is what to make in the first cold week, when a dish that smells of wine and lemon peel feels like the right thing to bring to the table. Osso buco means bone with a hole in Italian, and the hole holds the marrow, which melts into the sauce and is the best part.\n\nChoose cross-cut veal shanks about 4 cm thick, and tie a piece of string around each one so the meat holds to the bone as it cooks. Dust them lightly with flour and brown them in the pot until deeply golden. The flour helps the crust form and thickens the sauce slightly.\n\n**Do not skip the gremolata.** This mix of chopped parsley, lemon zest and garlic is stirred over the finished dish, and it cuts through the richness with a sharp, fresh note. Without it the dish tastes heavy.\n\nTraditionally osso buco is served with saffron risotto, but mashed potato or soft polenta soaks up the sauce just as well. Scoop the marrow out of the bone with a small spoon and spread it on bread.',
    ing: [
      '1.4 kg veal shanks, cross cut',
      '1 tsp salt',
      '3 tbsp plain flour',
      '2 tbsp olive oil',
      '1 onion, finely chopped',
      '1 carrot, finely chopped',
      '1 celery stick, finely chopped',
      '3 garlic cloves, crushed',
      '150 ml dry white wine',
      '400 g tinned chopped tomatoes',
      '250 ml chicken stock',
      '2 bay leaves',
      '3 tbsp parsley, chopped',
      '1 lemon, zested',
      '1 garlic clove, finely chopped, for the gremolata'
    ],
    st: [
      'Tie string around each shank. Season with the salt and dust with the flour. Set the Instant Pot to sauté and brown the shanks in the oil for 4 minutes per side. Remove them.',
      'Cook the onion, carrot and celery for 6 minutes. Add the 3 garlic cloves and stir for 1 minute.',
      'Pour in the wine, scrape the base and reduce for 4 minutes. Add the tomatoes, stock and bay leaves.',
      'Return the shanks. Seal and cook on high pressure for 45 minutes. Release naturally for 15 minutes.',
      'Mix the parsley, lemon zest and chopped garlic. Reduce the sauce on sauté for 5 minutes, spoon over the shanks and scatter with the gremolata.'
    ],
    tips: [
      'Tie the shanks so the meat stays on the bone.',
      'Do not skip the gremolata.',
      'Keep a small spoon on the table for the marrow.'
    ],
    pair: ['Saffron risotto', 'Soft polenta', 'Mashed potatoes', 'Green beans'],
    store: 'Keeps for 3 days in the fridge in the sauce. Reheat gently.',
    nut: [454, 56, 17, 18, 3, 6, 1140]
  },

  'instant-pot-pad-thai': {
    d: 'Rice noodles, chicken and egg cooked together under pressure in a tamarind, fish sauce and sugar sauce, topped with peanuts and lime.',
    meta: 'Instant Pot pad Thai with chicken, rice noodles and peanuts. Four servings, ready in 25 minutes.',
    kw: ['instant pot pad thai', 'pad thai recipe', 'pressure cooker pad thai', 'chicken pad thai', 'thai rice noodles'],
    why: 'Early summer, when limes are cheap and beansprouts are crisp, is when pad Thai tastes best. It is a plate of noodles with a balance of sour, sweet, salty and hot, and the balance is the whole recipe. Taste the sauce before you cook, and adjust it until all four flavours are in line.\n\nTamarind provides the sour note, and fish sauce the salt. Palm sugar gives a caramel sweetness, but light brown sugar does the same job. Mix the sauce in a jug before it goes into the pot so you can taste it. It should seem a little too strong, as the noodles absorb a lot.\n\n**Cook the noodles for 2 minutes only.** Rice noodles soften fast under pressure, and the pot keeps cooking them as the pressure comes off. Break them in half, lay them over the chicken and sauce, and do not stir until after cooking.\n\nScramble the eggs in the pot afterwards, push them to the side, and toss everything together. Finish with beansprouts, crushed peanuts, spring onions and a squeeze of lime.',
    ing: [
      '200 g flat rice noodles',
      '2 tbsp vegetable oil',
      '400 g chicken breast, sliced thinly',
      '3 garlic cloves, crushed',
      '3 tbsp tamarind paste',
      '3 tbsp fish sauce',
      '3 tbsp light brown sugar',
      '1 tbsp soy sauce',
      '1/2 tsp chilli flakes',
      '300 ml water',
      '2 eggs, beaten',
      '100 g beansprouts',
      '3 spring onions, sliced',
      '40 g roasted peanuts, crushed',
      '2 limes, cut into wedges'
    ],
    st: [
      'Mix the tamarind, fish sauce, sugar, soy sauce and chilli flakes in a jug with the water. Taste and adjust.',
      'Set the Instant Pot to sauté. Heat the oil and cook the chicken for 4 minutes. Add the garlic and stir for 30 seconds.',
      'Break the noodles in half and lay them over the chicken. Pour the sauce over and press the noodles under the liquid. Do not stir.',
      'Seal and cook on high pressure for 2 minutes. Release the pressure quickly.',
      'Select sauté. Push the noodles aside, pour in the eggs and scramble for 1 minute, then toss everything. Add the beansprouts and spring onions and serve with the peanuts and lime.'
    ],
    tips: [
      'Taste the sauce before it goes in the pot.',
      'Do not stir before cooking or the noodles clump.',
      'Squeeze the lime over at the table.'
    ],
    pair: ['Lime wedges', 'Chilli flakes', 'Crushed peanuts', 'Cucumber slices'],
    store: 'Best eaten at once. Noodles stiffen in the fridge; reheat in a pan with a splash of water.',
    nut: [553, 34, 66, 17, 4, 20, 1100]
  },

  'instant-pot-pho': {
    d: 'Beef broth simmered under pressure with charred onion, ginger and star anise, served over rice noodles with thin raw beef and herbs.',
    meta: 'Instant Pot pho with a fragrant beef broth, rice noodles and herbs. Four servings, ready in 55 minutes.',
    kw: ['instant pot pho', 'pho bo recipe', 'pressure cooker pho', 'vietnamese beef noodle soup', 'beef pho broth'],
    why: 'Pho is usually said to have developed in northern Vietnam in the early twentieth century, and its beef broth is the heart of the dish. A good bowl is clear, fragrant with star anise and cinnamon, and tastes of long cooking. The pressure cooker produces that depth in about 40 minutes.\n\nChar the onion and ginger first, either under the grill or directly on a gas flame, until the surface is blackened. This gives the broth a faint smokiness and sweetens it. Toast the whole spices in a dry pan for a minute until they smell warm, then tie them in a muslin bag or tea ball to lift out easily.\n\n**Parboil the bones for 5 minutes and rinse them.** This removes the scum that otherwise clouds the stock and leaves a murky broth. The marrow bones add body, and a few slices of beef brisket give flavour and can be sliced into the finished bowl.\n\nAdd fish sauce and a little sugar to finish the broth. Pour it boiling hot over raw, thinly sliced sirloin placed on the noodles, so the meat cooks in the bowl, and serve with lime, chilli, basil and beansprouts.',
    ing: [
      '1 kg beef marrow bones',
      '300 g beef brisket',
      '1 onion, halved',
      '60 g fresh ginger, halved lengthways',
      '4 g star anise',
      '5 g cinnamon stick',
      '1 g whole cloves',
      '1 tsp coriander seeds',
      '1.8 litres water',
      '3 tbsp fish sauce',
      '1 tbsp light brown sugar',
      '200 g rice noodles',
      '200 g beef sirloin, sliced paper thin',
      '100 g beansprouts',
      '1 handful Thai basil',
      '1 lime, cut into wedges',
      '2 spring onions, sliced'
    ],
    st: [
      'Cover the bones with water in a large pan, boil for 5 minutes, drain and rinse. Char the onion and ginger under a hot grill for 8 minutes. Toast the star anise, cinnamon, cloves and coriander seeds in a dry pan for 1 minute.',
      'Put the bones, brisket, onion, ginger, spices and 1.8 litres of water in the Instant Pot. Seal and cook on high pressure for 40 minutes. Release naturally for 15 minutes.',
      'Strain the broth, shred the brisket and discard the bones. Stir in the fish sauce and sugar and taste.',
      'Soak the noodles in hot water for 8 minutes, then drain. Divide between 4 bowls with the brisket and raw sirloin.',
      'Ladle over the boiling broth. Top with beansprouts, basil, spring onions and a squeeze of lime.'
    ],
    tips: [
      'Parboil and rinse the bones for a clear broth.',
      'Slice the raw beef paper thin so it cooks in the bowl.',
      'Season the broth at the end by taste.'
    ],
    pair: ['Lime wedges', 'Hoisin sauce', 'Sriracha', 'Fresh chilli'],
    store: 'The broth keeps for 4 days in the fridge or 3 months in the freezer. Store the noodles separately.',
    nut: [503, 32, 60, 15, 6, 12, 880]
  },

  'instant-pot-ramen': {
    d: 'A rich pork and miso broth with ramen noodles, soft-boiled eggs and sweetcorn, built in one pot in 15 minutes.',
    meta: 'Instant Pot ramen with miso broth, noodles and soft eggs. Four servings, ready in 25 minutes.',
    kw: ['instant pot ramen', 'homemade ramen', 'pressure cooker ramen', 'miso ramen', 'ramen with soft boiled egg'],
    why: 'Ramen began as a Chinese noodle soup adopted in Japan, and it has since become a cuisine of its own. This is a quick home version, built on a miso and garlic broth and finished with the toppings that make a bowl feel proper: soft eggs, corn and spring onion.\n\nStart by frying pork mince with garlic and ginger until it browns, then stir in the miso paste, soy and sesame oil. The pork adds fat and savoury depth that a stock cube cannot, and the miso gives the broth its cloudy, rounded body.\n\n**Cook the noodles in the broth, not separately.** Fresh ramen noodles need only 2 minutes, and dried ones 4 to 5 minutes, so choose according to your pack. They release starch into the soup, which thickens it slightly.\n\nSoft-boiled eggs steam on the trivet while the pot builds pressure. They need exactly 6 minutes at a gentle simmer, and then straight into iced water, so that the yolks stay jammy and the shells peel cleanly. Cut them in half just before serving.',
    ing: [
      '4 eggs',
      '1 tbsp sesame oil',
      '250 g pork mince',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '3 tbsp white miso paste',
      '2 tbsp soy sauce',
      '1.2 litres chicken stock',
      '4 portions fresh ramen noodles, about 400 g',
      '100 g sweetcorn',
      '2 spring onions, sliced',
      '2 g nori, cut into strips'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the sesame oil and brown the pork for 5 minutes. Add the garlic and ginger and stir for 1 minute.',
      'Stir in the miso, soy sauce and stock, scraping the base. Seal and cook on high pressure for 6 minutes with the eggs on a trivet above the liquid.',
      'Release the pressure quickly. Lift out the eggs and put them in iced water for 5 minutes, then peel and halve.',
      'Select sauté, add the noodles and sweetcorn and simmer for 3 minutes until the noodles are tender.',
      'Ladle into bowls and top with the eggs, spring onions and nori.'
    ],
    tips: [
      'Chill the eggs in iced water so the shells peel easily.',
      'Cook the noodles in the broth for the best flavour.',
      'Do not boil the miso hard: it loses its flavour.'
    ],
    pair: ['Chilli oil', 'Pickled ginger', 'Gyoza', 'Cucumber salad'],
    store: 'Best eaten straight away. Keep the broth in the fridge for 2 days and cook fresh noodles when reheating.',
    nut: [709, 37, 84, 25, 5, 5, 1980]
  },

  'instant-pot-salmon': {
    d: 'Salmon fillets steamed over lemon and herbs on a trivet for 3 minutes under pressure, flaking easily and staying moist.',
    meta: 'Instant Pot salmon steamed with lemon and dill. Two servings, ready in 15 minutes with 5 minutes of prep.',
    kw: ['instant pot salmon', 'pressure cooker salmon', 'salmon fillets recipe', 'lemon dill salmon', 'salmon in instant pot'],
    why: 'Three minutes is enough. That is the whole recipe, and also the part most people get wrong. Salmon fillets steam under pressure so quickly that an extra two minutes will turn them from silky to dry and chalky, with white albumin seeping out on the surface.\n\nThe fish does not touch the liquid. A cup of water sits in the bottom of the pot with lemon slices and dill, and the fillets sit on the trivet above it. The steam carries the lemon and herb scent up into the fish as it cooks.\n\n**Use the thickness of the fillet to set the time.** A fillet about 3 cm thick takes 3 minutes. A thinner one, about 2 cm, needs just 2. Frozen fillets work too, with 2 extra minutes.\n\nRelease the pressure straight away. Leaving the pot sealed continues the cooking, and the salmon overshoots. Lift the fillets onto a plate with a fish slice, because they are fragile, and top them with a little melted butter, more lemon and chopped dill.',
    ing: [
      '2 salmon fillets, about 300 g, skin on',
      '250 ml water',
      '1 lemon, half sliced and half in wedges',
      '4 sprigs dill',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '15 g butter, melted',
      '1 tbsp fresh dill, chopped'
    ],
    st: [
      'Pour the water into the Instant Pot. Add the lemon slices and dill sprigs and set the trivet on top.',
      'Season the salmon with the salt and pepper. Place the fillets skin side down on the trivet.',
      'Seal and cook on high pressure for 3 minutes. Release the pressure immediately.',
      'Lift the fillets onto plates with a fish slice. Spoon over the melted butter and scatter with the chopped dill.',
      'Serve with the lemon wedges.'
    ],
    tips: [
      'Release the pressure at once to stop the cooking.',
      'Adjust the time for thin or very thick fillets.',
      'Use a fish slice to lift the fillets.'
    ],
    pair: ['Steamed asparagus', 'New potatoes', 'Green salad', 'Rice'],
    store: 'Keeps for 2 days in the fridge and is good cold in salads.',
    nut: [370, 31, 3, 26, 1, 1, 660]
  },

  'instant-pot-shrimp-scampi': {
    d: 'Prawns and linguine cooked in garlic, white wine and lemon in one pot, finished with butter and parsley after 2 minutes under pressure.',
    meta: 'Instant Pot shrimp scampi with linguine, garlic and lemon. Four servings, ready in 20 minutes.',
    kw: ['instant pot shrimp scampi', 'shrimp scampi linguine', 'pressure cooker scampi', 'garlic butter shrimp pasta', 'lemon garlic shrimp'],
    why: 'Scampi is the Italian word for langoustines, and the American dish named after it is made with shrimp, garlic, white wine, lemon and butter. It was traditionally a stovetop dish, but the pressure cooker lets the pasta cook in the sauce, which means the starch thickens it for you.\n\nCook the linguine first, with the liquid, for just 4 minutes under pressure. Prawns go in afterwards. If they are cooked with the pasta they turn rubbery and tight, but 2 minutes in the hot sauce after the pressure is released is enough to turn them pink and keep them tender.\n\n**Add the butter in cubes at the end**, off the heat, stirring until it melts. The butter emulsifies with the starchy liquid and makes a glossy sauce that coats the pasta, in the way a risotto finishes with butter.\n\nBe generous with the lemon juice and zest, and add a pinch of chilli flakes if you like. Parsley goes in last so it stays green. Serve immediately, as the pasta continues to absorb the sauce.',
    ing: [
      '300 g linguine, broken in half',
      '500 ml chicken stock',
      '100 ml dry white wine',
      '4 garlic cloves, thinly sliced',
      '1/2 tsp chilli flakes',
      '1 tsp salt',
      '400 g raw peeled prawns',
      '50 g butter, cubed',
      '1 lemon, zested and juiced',
      '3 tbsp parsley, chopped'
    ],
    st: [
      'Put the linguine, stock, wine, garlic, chilli flakes and salt in the Instant Pot. Press the pasta under the liquid and do not stir.',
      'Seal and cook on high pressure for 4 minutes. Release the pressure quickly.',
      'Select sauté. Stir the pasta well, add the prawns and simmer for 2 minutes until pink.',
      'Switch off the heat. Stir in the butter, lemon zest and juice until the sauce is glossy.',
      'Scatter with the parsley and serve straight away.'
    ],
    tips: [
      'Add the prawns after the pressure release to keep them tender.',
      'Swirl in the butter off the heat.',
      'Serve at once: the pasta keeps absorbing sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Chilled white wine'],
    store: 'Best eaten at once. Keeps for 1 day in the fridge but the prawns toughen on reheating.',
    nut: [480, 32, 61, 12, 3, 3, 1160]
  },

  'instant-pot-stuffed-peppers': {
    d: 'Pepper halves filled with beef, rice and tomato, stood on a trivet and steamed under pressure for 20 minutes, topped with cheese.',
    meta: 'Instant Pot stuffed peppers with beef, rice and cheese. Four servings, ready in 40 minutes.',
    kw: ['instant pot stuffed peppers', 'pressure cooker stuffed peppers', 'stuffed bell peppers beef and rice', 'stuffed peppers recipe', 'pressure cooked stuffed peppers'],
    why: 'Keep the peppers upright. That is most of the recipe, and the part people skip. Stuffed peppers topple in the pot unless they are packed together tightly on the trivet, with the filling facing up, and a tipped pepper loses its filling into the water.\n\nThe filling is browned beef mince with onion and garlic, cooked rice, tomato and a sprinkle of cumin. Brown the beef properly before filling, because it will not colour once the pot is sealed. Use rice that has already been cooked, so that it does not absorb the juices from the beef and turn the filling dry.\n\n**Do not overfill the peppers.** The filling swells as it heats, and an overfilled pepper splits at the seam. Fill it level with the cut edge, and top it with cheese after pressure cooking, not before.\n\nPressure cooking softens the pepper without making it limp, which usually takes 20 minutes for medium peppers. Release the pressure naturally for 5 minutes, then lift each pepper out with a spatula and a spoon, supporting it from underneath.',
    ing: [
      '4 large peppers, tops cut off and seeds removed',
      '1 tbsp olive oil',
      '1 onion, finely chopped',
      '2 garlic cloves, crushed',
      '400 g beef mince',
      '200 g cooked rice',
      '400 g tinned chopped tomatoes',
      '1 tsp ground cumin',
      '1 tsp salt',
      '250 ml water',
      '100 g mozzarella, grated'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil, cook the onion for 4 minutes, add the garlic and beef and brown for 6 minutes. Drain off excess fat.',
      'Mix the beef with the rice, half of the tomatoes, cumin and salt. Spoon the filling into the peppers.',
      'Pour the water and remaining tomatoes into the pot and set the trivet inside. Stand the peppers upright on it.',
      'Seal and cook on high pressure for 20 minutes. Release naturally for 5 minutes.',
      'Top the peppers with the mozzarella, put the lid back on loosely for 3 minutes until melted, and serve.'
    ],
    tips: [
      'Pack the peppers tightly so they stay upright.',
      'Use cooked rice in the filling.',
      'Lift the peppers out from underneath with a spatula and spoon.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Soured cream', 'Crusty bread'],
    store: 'Keeps for 3 days in the fridge. Reheat in the microwave for 2 minutes.',
    nut: [473, 29, 33, 25, 6, 12, 820]
  },

  'instant-pot-taco-soup': {
    d: 'Beef mince, beans, sweetcorn and tomatoes simmered with taco spices under pressure into a thick, warming soup, topped with cheese.',
    meta: 'Instant Pot taco soup with beef, beans, corn and tomato. Six servings, ready in 35 minutes.',
    kw: ['instant pot taco soup', 'taco soup recipe', 'pressure cooker taco soup', 'beef and bean taco soup', 'mexican beef soup'],
    why: 'Tacos are a handheld dish, but the flavours all work just as well in a bowl. The Tex-Mex idea of taco soup takes seasoned mince, beans and sweetcorn and turns them into a stew you can ladle, with all the usual toppings on top.\n\nBrown the beef properly in the pot, breaking it into small pieces as it cooks. Drain off any excess fat, then add the onion and garlic and stir in the spices: cumin, chilli, paprika, oregano and a little salt. Cooking the spices for a minute in the hot pot releases their oils.\n\n**Do not drain the tinned vegetables.** The liquid from the sweetcorn and tomatoes provides much of the soup base. Add them as they are, along with drained beans and a measure of stock, and give the pot a good stir before sealing.\n\nA quick 10 minutes under pressure is enough to meld the flavours. Serve the soup in bowls, with grated cheese, a spoon of soured cream, crushed tortilla chips and a squeeze of lime. The cold toppings against the hot soup are the best part.',
    ing: [
      '500 g beef mince',
      '1 onion, diced',
      '3 garlic cloves, crushed',
      '2 tsp ground cumin',
      '2 tsp chilli powder',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp salt',
      '400 g tinned chopped tomatoes',
      '400 g tinned black beans, drained',
      '400 g tinned kidney beans, drained',
      '200 g tinned sweetcorn',
      '500 ml beef stock',
      '100 g cheddar, grated',
      '4 tbsp soured cream',
      '1 lime, cut into wedges'
    ],
    st: [
      'Set the Instant Pot to sauté. Brown the beef for 6 minutes, breaking it up. Drain off excess fat.',
      'Add the onion and garlic and cook for 3 minutes. Stir in the cumin, chilli, paprika, oregano and salt for 1 minute.',
      'Add the tomatoes, beans, sweetcorn and stock and stir well.',
      'Seal and cook on high pressure for 10 minutes. Release naturally for 10 minutes.',
      'Ladle into bowls and top with the cheddar, soured cream and lime wedges.'
    ],
    tips: [
      'Cook the spices briefly in the pot before adding liquid.',
      'Mash a few beans to thicken the soup.',
      'Offer the toppings at the table.'
    ],
    pair: ['Tortilla chips', 'Avocado', 'Soured cream', 'Cornbread'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [466, 33, 34, 22, 11, 5, 1260]
  },

  'instant-pot-teriyaki-chicken': {
    d: 'Chicken thighs cooked under pressure in soy, mirin, sake and sugar, then reduced to a thick, glossy teriyaki glaze.',
    meta: 'Instant Pot teriyaki chicken in a glossy soy and mirin glaze. Four servings, ready in 30 minutes.',
    kw: ['instant pot teriyaki chicken', 'teriyaki chicken recipe', 'pressure cooker teriyaki chicken', 'homemade teriyaki sauce', 'teriyaki chicken bowl'],
    why: 'Soy sauce, mirin, sugar and a little ginger: four things, and the beginning of a sauce that tastes nothing like the thick, sweet bottles in the supermarket. Teriyaki means glossy grill in Japanese, and the shine is as important as the flavour.\n\nThe glaze is made from equal measures of soy sauce and mirin, with sugar to deepen the sweetness and a splash of sake or water. Make it in the pot, simmer the chicken in it under pressure, and then boil it down on sauté until it coats a spoon. The reduction gives the shine.\n\n**Use boneless thighs.** They stay juicy under pressure and soak up the glaze, while breast meat would go dry. Brown them lightly first, skin side down if the skin is on, to add a roasted note.\n\nThe pot needs only 8 minutes. Lift out the chicken, boil the sauce for 5 to 8 minutes until it turns syrupy, then return the chicken and turn it so each piece is lacquered. Serve with steamed rice and greens, and finish with sesame seeds.',
    ing: [
      '700 g chicken thighs, boneless',
      '1 tbsp vegetable oil',
      '80 ml soy sauce',
      '80 ml mirin',
      '3 tbsp light brown sugar',
      '60 ml water',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '1 tbsp cornflour',
      '1 tsp sesame seeds',
      '2 spring onions, sliced'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and brown the chicken for 3 minutes per side.',
      'Add the soy sauce, mirin, sugar, water, garlic and ginger and stir, scraping the base.',
      'Seal and cook on high pressure for 8 minutes. Release naturally for 5 minutes.',
      'Lift out the chicken. Select sauté, mix the cornflour with 1 tbsp cold water and stir it in. Simmer for 5 minutes until syrupy.',
      'Return the chicken, turn in the glaze and serve scattered with the sesame seeds and spring onions.'
    ],
    tips: [
      'Reduce the sauce until it coats the back of a spoon.',
      'Use thighs for juicy results.',
      'Add a squeeze of lime for balance.'
    ],
    pair: ['Steamed rice', 'Broccoli', 'Pickled cucumber', 'Edamame'],
    store: 'Keeps for 4 days in the fridge.',
    nut: [356, 37, 25, 12, 1, 20, 1340]
  },

  'instant-pot-white-chicken-chili': {
    d: 'Chicken, white beans and green chillies simmered under pressure into a creamy chilli, finished with cream cheese and lime.',
    meta: 'Instant Pot white chicken chili with beans, green chillies and cream cheese. Six servings, ready in 45 minutes.',
    kw: ['instant pot white chicken chili', 'white chicken chili', 'pressure cooker white chili', 'creamy white chicken chili', 'green chilli chicken chili'],
    why: 'The smell of cumin and green chillies warming in oil is the first sign this is going to be good. White chicken chili swaps the red tomato base of a classic chilli for a pale, creamy one made of stock, white beans and mild green chillies, and the result is gentler but just as satisfying.\n\nUse chicken breast or thighs, whole, and shred them after cooking. They stay moist when cooked in one piece and soak up the broth. Add the beans straight from the tin, with half of them mashed in the pot at the end. The mashed beans thicken the chili naturally and give it a creamy body.\n\n**Stir in the cream cheese at the end**, cut into cubes, over the sauté setting until it melts. Added too early, it can split under pressure and leave the soup grainy.\n\nFinish with the juice of a lime and a handful of fresh coriander, which brighten the dish. Set out bowls of soured cream, grated cheese, sliced jalapeno and tortilla chips for people to add as they like.',
    ing: [
      '700 g chicken breast, whole',
      '1 tbsp olive oil',
      '1 onion, diced',
      '3 garlic cloves, crushed',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '1 tsp salt',
      '800 g tinned cannellini beans, drained',
      '220 g tinned diced green chillies',
      '750 ml chicken stock',
      '100 g cream cheese, cubed',
      '1 lime, juiced',
      '3 tbsp fresh coriander, chopped'
    ],
    st: [
      'Set the Instant Pot to sauté. Heat the oil and cook the onion for 5 minutes. Add the garlic, cumin and oregano and stir for 1 minute.',
      'Add the chicken, beans, green chillies, salt and stock.',
      'Seal and cook on high pressure for 12 minutes. Release naturally for 10 minutes.',
      'Lift out the chicken and shred it. Mash about half the beans against the side of the pot.',
      'Return the chicken, select sauté, stir in the cream cheese until melted, then add the lime juice and coriander.'
    ],
    tips: [
      'Mash some beans to thicken the chili.',
      'Add the cream cheese only at the end.',
      'Cook the chicken whole, then shred.'
    ],
    pair: ['Tortilla chips', 'Soured cream', 'Cornbread', 'Sliced jalapenos'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [372, 38, 28, 12, 8, 4, 1310]
  },

  'instant-pot-whole-chicken': {
    d: 'A whole chicken rubbed with paprika and garlic, cooked under pressure for 25 minutes and crisped under the grill for 5.',
    meta: 'Instant Pot whole chicken with a paprika rub and crisp skin, cooked for 55 minutes. Six servings.',
    kw: ['instant pot whole chicken', 'pressure cooker whole chicken', 'whole chicken in instant pot', 'juicy whole chicken', 'paprika roast chicken'],
    why: 'Check the weight. That is the first step with a whole chicken in an Instant Pot, because a 1.6 kg bird fits in a 6 litre pot with room for the lid, while a larger one will not. Weigh it, and set the cooking time by weight: about 6 minutes per 500 g, plus 5 minutes of natural release.\n\nRub the chicken all over with paprika, garlic powder, thyme, salt and pepper, and push some under the skin of the breast. Brown it breast down on the sauté setting for 5 minutes, which colours the skin and builds the flavour in the base of the pot.\n\n**Cook it breast side up on the trivet** with a cup of stock below it. The stock steams and becomes a thin gravy. Use a sling of foil to lift the bird out afterwards, because it falls apart when handled.\n\nThe skin will be pale and soft after pressure cooking. Transfer the chicken to a tray, brush it with oil, and put it under a hot grill for 5 minutes until it browns and crisps. The juices left in the pot make a gravy once skimmed and thickened.',
    ing: [
      '1.6 kg whole chicken',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp dried thyme',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp olive oil',
      '250 ml chicken stock',
      '1 onion, quartered',
      '1 lemon, halved'
    ],
    st: [
      'Mix the paprika, garlic powder, thyme, salt and pepper. Rub it all over the chicken and under the breast skin. Put the lemon halves inside the cavity.',
      'Set the Instant Pot to sauté. Heat the olive oil and brown the chicken breast side down for 5 minutes. Remove it.',
      'Add the stock and onion, set the trivet in the pot and place the chicken on it, breast side up.',
      'Seal and cook on high pressure for 25 minutes. Release naturally for 15 minutes. Check that the thickest part of the thigh reads 74C.',
      'Transfer to a tray and brush with oil. Grill under a hot grill for 5 minutes until the skin is crisp, then rest for 10 minutes before carving.'
    ],
    tips: [
      'Weigh the chicken to set the cooking time.',
      'Use a foil sling to lift the bird out whole.',
      'Do not skip the grill: the skin needs it.'
    ],
    pair: ['Mashed potatoes', 'Green beans', 'Gravy', 'Roast carrots'],
    store: 'Keeps for 3 days in the fridge. Use the carcass for stock.',
    nut: [557, 52, 4, 37, 1, 1, 1110]
  },

  'baked-chicken-legs': {
    d: 'Chicken drumsticks and thighs baked at 220C for 45 minutes with garlic, paprika and olive oil until the skin is crisp and golden.',
    meta: 'Baked chicken legs with garlic and paprika, crisp skin and juicy meat. Four servings, ready in 55 minutes.',
    kw: ['baked chicken legs', 'oven baked chicken legs', 'chicken leg quarters', 'crispy baked chicken legs', 'roast chicken legs'],
    why: 'It looks like a roast chicken dinner and cooks like a tray bake, which is the attraction. Whole chicken legs, thigh and drumstick still joined, have more meat than wings and more flavour than breast, and they stay moist because the bone and skin protect them.\n\nPat the legs completely dry with kitchen paper. Skin that goes into the oven wet will steam, not crisp. Rub with olive oil, paprika, garlic powder, salt and pepper, working some under the skin where the meat is thickest.\n\n**Start the oven hot at 220C and leave the legs alone.** Turning them too often tears the skin and releases juices. Roast skin side up on a rack set over a tray, so the heat can circulate and the fat drips away. A rack makes more difference than any seasoning.\n\nThe legs are done when the skin is mahogany and the juices from the thickest part run clear. A thermometer should read 75C. Rest them for 5 minutes, which lets the juices settle back into the meat, and serve with whatever roasted the tray below.',
    ing: [
      '1.2 kg chicken legs, thigh and drumstick',
      '2 tbsp olive oil',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 220C. Pat the chicken legs dry with kitchen paper.',
      'Mix the olive oil, paprika, garlic powder, thyme, salt and pepper. Rub over the legs and under the skin.',
      'Set a rack over a roasting tray and lay the legs on it, skin side up, not touching.',
      'Roast for 45 minutes until the skin is deep golden and a thermometer reads 75C.',
      'Rest for 5 minutes and serve with the lemon wedges.'
    ],
    tips: [
      'Dry the skin well for the crispest finish.',
      'Roast on a rack so the heat reaches underneath.',
      'Check the temperature at the thickest part of the thigh.'
    ],
    pair: ['Roast potatoes', 'Green salad', 'Coleslaw', 'Corn on the cob'],
    store: 'Keeps for 3 days in the fridge. Reheat in a 200C oven for 12 minutes.',
    nut: [568, 49, 3, 40, 1, 1, 860]
  },

  'baked-halibut': {
    d: 'Halibut fillets baked at 200C for 15 minutes with butter, garlic and lemon until opaque and flaking in large moist pieces.',
    meta: 'Baked halibut with garlic butter and lemon, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['baked halibut', 'oven baked halibut', 'halibut with garlic butter', 'lemon butter halibut', 'halibut fillets recipe'],
    why: 'Pull the fish out when it is still slightly translucent in the centre. Halibut is lean, with very little fat to protect it, and overcooked fillets go dry and chalky within a minute or two. Residual heat will finish the middle as the fish rests on the tray.\n\nChoose fillets of even thickness, about 3 cm, so that they cook at the same speed. Thin tail pieces cook faster than thick centre cuts, so fold the thin ends under or choose pieces from the middle. Pat the fillets dry before seasoning, which helps the butter coat the surface rather than sliding off.\n\n**Butter is the insurance.** A spoonful of melted garlic butter spooned over the fish adds fat to a lean fillet and bastes it as it bakes. A splash of lemon juice goes into the butter, so the flavour is a sauce, not a garnish.\n\nCheck at 12 minutes by sliding a knife into the thickest part and looking at the colour. It should be white and opaque on the outside, with the faintest translucence at the very centre. Serve right away with spoonfuls of the pan juices.',
    ing: [
      '4 halibut fillets, about 600 g',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '50 g butter, melted',
      '3 garlic cloves, crushed',
      '1 lemon, juiced, plus wedges to serve',
      '1 tbsp parsley, chopped',
      '1/2 tsp paprika'
    ],
    st: [
      'Heat the oven to 200C. Pat the halibut dry and season with the salt, pepper and paprika.',
      'Mix the melted butter, garlic and lemon juice.',
      'Place the fillets in a baking dish and spoon over half of the garlic butter.',
      'Bake for 15 minutes, spooning over the rest of the butter halfway, until the fish is opaque and flakes with a fork.',
      'Scatter with the parsley and serve with the pan juices and lemon wedges.'
    ],
    tips: [
      'Check at 12 minutes: halibut overcooks fast.',
      'Fold thin ends under for even cooking.',
      'Spoon the butter over midway for moisture.'
    ],
    pair: ['New potatoes', 'Asparagus', 'Green beans', 'Rice pilaf'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge.',
    nut: [253, 32, 2, 13, 1, 0, 390]
  },

  'baked-penne': {
    d: 'Penne tossed with a tomato and Italian sausage sauce, layered with mozzarella and parmesan and baked for 30 minutes until bubbling.',
    meta: 'Baked penne with sausage, tomato and melted mozzarella, baked for 30 minutes. Six servings, ready in 50 minutes.',
    kw: ['baked penne', 'baked penne with sausage', 'penne pasta bake', 'baked penne with mozzarella', 'tomato baked pasta'],
    why: 'Undercook the pasta by 2 minutes. This is the one rule of any baked pasta dish, because the penne carries on softening in the oven and absorbs sauce while it bakes. Pasta cooked to the end on the hob turns soft and bloated by the time the cheese is golden.\n\nThe sauce is built on Italian sausage meat, squeezed from its casings and browned until crumbly. The fat that runs out from the sausage flavours the onions and garlic, and the tomatoes cook down into a thick, rich coating. A pinch of chilli flakes lifts it.\n\n**Keep the sauce slightly looser than you want it.** Baked pasta absorbs liquid, and a sauce that looks thick in the pan often turns dry in the oven. Stir through a ladle of the pasta cooking water if the mix seems stiff.\n\nLayer half the pasta, a scatter of mozzarella, the rest of the pasta, then cheese and parmesan on top. Bake uncovered until the cheese is bubbling and freckled with brown at the edges, then rest for 5 minutes before serving.',
    ing: [
      '350 g penne',
      '1 tbsp olive oil',
      '400 g Italian sausages, casings removed',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '800 g tinned chopped tomatoes',
      '1 tsp dried oregano',
      '1/2 tsp chilli flakes',
      '1 tsp salt',
      '250 g mozzarella, grated',
      '40 g parmesan, grated',
      '2 tbsp basil, torn'
    ],
    st: [
      'Heat the oven to 200C. Boil the penne in salted water for 8 minutes, 2 minutes short of the packet time. Drain.',
      'Heat the oil in a large pan. Brown the sausage meat for 8 minutes, breaking it up. Add the onion and cook for 4 minutes, then the garlic.',
      'Add the tomatoes, oregano, chilli flakes and salt. Simmer for 10 minutes until thickened.',
      'Mix the pasta into the sauce. Spoon half into a baking dish, scatter over half the mozzarella, add the rest of the pasta and top with the remaining mozzarella and parmesan.',
      'Bake for 30 minutes until golden and bubbling. Rest for 5 minutes and scatter with basil.'
    ],
    tips: [
      'Cook the pasta short: it finishes in the oven.',
      'Keep the sauce a little loose.',
      'Rest the dish before cutting.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roast vegetables', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 2 months in the freezer.',
    nut: [611, 29, 54, 31, 4, 7, 1290]
  },

  'baked-pork-chops': {
    d: 'Bone-in pork chops seasoned with paprika and garlic and baked at 200C for 25 minutes until juicy with a light crust.',
    meta: 'Baked pork chops with paprika and garlic, juicy and tender after 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['baked pork chops', 'oven baked pork chops', 'juicy pork chops', 'bone in pork chops', 'pork chops with garlic'],
    why: 'Pork, an oven and 25 minutes: those are the three things this recipe needs, and the most important is the thermometer. Pork chops dry out the moment they pass 63C, which is the temperature at which they are safe and still juicy.\n\nChoose chops 2.5 to 3 cm thick, with the bone in. The bone slows the cooking at the edge and keeps the meat tender. Thin, boneless chops cook in seconds and tend to turn leathery. Take them out of the fridge 20 minutes ahead so that they cook evenly.\n\n**Salt them half an hour ahead for better moisture.** A teaspoon of salt rubbed over the chops and left for 30 minutes seasons the meat all the way through and helps it hold onto its juices. Pat away any beads of moisture before the rub goes on.\n\nA rub of paprika, garlic powder, brown sugar and thyme gives the chops a mahogany crust in the oven. Start them hot at 200C, then check at 20 minutes. Rest for 5 minutes under foil before serving, and spoon the pan juices over.',
    ing: [
      '4 bone-in pork chops, about 1 kg, 3 cm thick',
      '1 tsp salt, for salting ahead',
      '2 tbsp olive oil',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp light brown sugar',
      '1 tsp dried thyme',
      '1/2 tsp black pepper'
    ],
    st: [
      'Rub the chops with the salt and leave them for 30 minutes. Pat away any moisture with kitchen paper.',
      'Heat the oven to 200C. Mix the paprika, garlic powder, sugar, thyme and pepper.',
      'Brush the chops with the olive oil and press the rub onto both sides. Place on a rack set over a tray.',
      'Bake for 25 minutes, turning once, until a thermometer reads 63C at the thickest part.',
      'Rest under foil for 5 minutes, then serve with the juices.'
    ],
    tips: [
      'Cook to 63C and no further.',
      'Pat dry after salting for a better crust.',
      'Use bone-in chops for the juiciest result.'
    ],
    pair: ['Mashed potatoes', 'Apple sauce', 'Green beans', 'Roast carrots'],
    store: 'Keeps for 3 days in the fridge. Slice and use cold in sandwiches.',
    nut: [482, 50, 3, 30, 1, 1, 730]
  },

  'baked-rigatoni': {
    d: 'Rigatoni tossed with a slow-cooked beef ragu and ricotta, topped with mozzarella and baked for 35 minutes until bubbling.',
    meta: 'Baked rigatoni with beef ragu, ricotta and mozzarella, baked for 35 minutes. Six servings, about 1 hour 40 minutes start to finish.',
    kw: ['baked rigatoni', 'baked rigatoni with meat sauce', 'rigatoni bake', 'rigatoni with ricotta', 'baked pasta with mozzarella'],
    why: 'A Sunday dish for a table of six, and better on Monday. Baked rigatoni is a family centrepiece that feeds a crowd from one dish, and it improves overnight as the sauce soaks into the tubes.\n\nRigatoni is the right pasta because of its wide, ridged tubes. The sauce gets inside them and clings to the ridges outside, so every mouthful is evenly coated. Penne would work, but the wider tube holds more filling. Cook it for 2 minutes less than the packet says.\n\n**Stir ricotta through the sauce rather than dolloping it on top.** Mixed in, it melts into a creamy pink coating that carries through the whole dish. Left in lumps, it can turn grainy and dry in the oven.\n\nThe ragu needs 30 minutes at a simmer, long enough for the mince to soften and the tomatoes to reduce. Use a mix of beef and pork for flavour. Top with mozzarella and parmesan, cover with foil for 20 minutes, then uncover to brown. The foil keeps the pasta moist while the cheese gets golden after.',
    ing: [
      '400 g rigatoni',
      '1 tbsp olive oil',
      '400 g beef mince',
      '1 onion, finely chopped',
      '3 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '800 g tinned chopped tomatoes',
      '1 tsp dried oregano',
      '1 tsp salt',
      '250 g ricotta',
      '200 g mozzarella, grated',
      '40 g parmesan, grated',
      '2 tbsp basil, torn'
    ],
    st: [
      'Heat the oven to 190C. Boil the rigatoni in salted water for 10 minutes, then drain.',
      'Heat the oil in a large pan. Brown the beef for 8 minutes, add the onion for 4 minutes, then the garlic and tomato purée for 1 minute.',
      'Add the tomatoes, oregano and salt. Simmer for 30 minutes until thick.',
      'Stir the ricotta and pasta into the sauce. Spoon into a baking dish and top with the mozzarella and parmesan.',
      'Cover with foil and bake for 20 minutes. Remove the foil and bake for 15 minutes more until golden. Scatter with basil.'
    ],
    tips: [
      'Cook the pasta short because it finishes in the oven.',
      'Stir the ricotta through the sauce.',
      'Cover with foil first to keep the pasta moist.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roast vegetables', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 2 months in the freezer.',
    nut: [640, 37, 60, 28, 4, 7, 790]
  },

  'baked-sea-bass': {
    d: 'Whole or fillet sea bass baked at 200C with lemon, thyme and olive oil for 20 minutes until the flesh is white and just flaking.',
    meta: 'Baked sea bass with lemon and thyme, cooked for 20 minutes. Two servings, ready in 30 minutes.',
    kw: ['baked sea bass', 'oven baked sea bass', 'sea bass with lemon and thyme', 'whole baked sea bass', 'sea bass recipe'],
    why: 'Sea bass fillets, a lemon, a few thyme sprigs: three things, and about thirty minutes. Sea bass has a delicate, slightly sweet flavour, and the best way to cook it is simply, with lemon, olive oil and herbs doing the supporting work.\n\nOne whole fish of about 600 g serves two. Ask the fishmonger to gut and scale it. Slash the sides in three places with a sharp knife, which lets the heat reach the thickest parts and the lemon and herbs penetrate. Stuff the cavity with lemon slices and thyme.\n\n**Bake on a bed of sliced fennel or lemon.** This lifts the fish off the tray so that the heat circulates and the bottom does not stew in its own juices. It also gives you a flavoured base to serve it on.\n\nThe fish is ready when the flesh near the backbone has turned white and opaque, and the eye has gone pale. Insert a knife near the backbone and check. Rest for 3 minutes, then lift the fillets off the bone with a spoon and fork and drizzle with the juices from the tray.',
    ing: [
      '1 whole sea bass, about 600 g, gutted and scaled',
      '1 lemon, half sliced and half in wedges',
      '6 sprigs thyme',
      '2 tbsp olive oil',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 fennel bulb, thinly sliced',
      '2 garlic cloves, sliced'
    ],
    st: [
      'Heat the oven to 200C. Spread the fennel and garlic on a baking tray and drizzle with half of the olive oil.',
      'Slash the sea bass three times on each side. Season inside and out with the salt and pepper.',
      'Fill the cavity with the lemon slices and thyme. Place the fish on the fennel and drizzle with the rest of the oil.',
      'Bake for 20 minutes until the flesh near the backbone is white and opaque.',
      'Rest for 3 minutes, then lift off the fillets and serve with the fennel and lemon wedges.'
    ],
    tips: [
      'Slash the skin so the heat reaches the middle.',
      'Check near the backbone for doneness.',
      'Use fillets at 12 minutes if you prefer.'
    ],
    pair: ['New potatoes', 'Green beans', 'Tomato salad', 'Crusty bread'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge.',
    nut: [494, 59, 15, 22, 6, 6, 870]
  },

  'baked-trout': {
    d: 'Whole trout stuffed with lemon, parsley and butter and baked at 190C for 20 minutes until the skin is crisp and the flesh is tender.',
    meta: 'Baked trout stuffed with lemon, parsley and butter, cooked for 20 minutes. Two servings, ready in 30 minutes.',
    kw: ['baked trout', 'oven baked whole trout', 'trout with lemon and parsley', 'stuffed whole trout', 'whole trout in the oven'],
    why: 'Trout has been caught in British rivers and lochs for as long as anyone has fished them, and it remains one of the simplest and best ways to eat fresh fish. The flesh is pink, delicate and quick to cook, with a mild flavour that suits lemon and herbs.\n\nBuy whole trout, gutted, each about 350 g, which is a good serving for one person. Rinse them inside and pat them dry. The skin crisps beautifully in the oven if it is dry, so take the time to wipe the outside too. Season generously with salt.\n\n**Stuff the cavity with butter, lemon and herbs.** As the butter melts it bastes the fish from inside, keeping the flesh moist, and the lemon and parsley scent every mouthful. Close the cavity with a cocktail stick if you like.\n\nBake in a hot oven for 20 minutes. The trout is ready when the flesh flakes at the thickest point and the dorsal fin pulls out easily. To serve, run a knife along the backbone, lift off the top fillet, remove the bone, and lift off the lower fillet.',
    ing: [
      '2 whole trout, about 700 g, gutted',
      '40 g butter, softened',
      '1 lemon, half sliced and half in wedges',
      '3 tbsp parsley, chopped',
      '2 garlic cloves, crushed',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp olive oil',
      '30 g flaked almonds'
    ],
    st: [
      'Heat the oven to 190C. Rinse the trout and pat them dry inside and out.',
      'Mix the butter, parsley, garlic, salt and pepper. Spread it inside the cavities and add the lemon slices.',
      'Place the fish on an oiled tray and rub the skin with the olive oil. Scatter the almonds on the tray.',
      'Bake for 20 minutes until the flesh flakes and the skin is crisp.',
      'Serve with the toasted almonds and lemon wedges.'
    ],
    tips: [
      'Pat the skin dry for a crisp finish.',
      'Check the thickest part near the head.',
      'Serve whole at the table for a better presentation.'
    ],
    pair: ['New potatoes', 'Green beans', 'Cucumber salad', 'Brown bread'],
    store: 'Best eaten fresh. Keeps for 1 day in the fridge.',
    nut: [760, 74, 8, 48, 3, 1, 770]
  },

  'battered-fish': {
    d: 'White fish fillets dipped in a light beer batter and fried in hot oil for 5 minutes until crisp, golden and puffed.',
    meta: 'Battered fish with a light, crisp beer batter, fried for 5 minutes a side. Four servings, ready in 30 minutes.',
    kw: ['battered fish', 'beer battered fish', 'crispy fish batter', 'fried battered cod', 'fish and chips batter'],
    why: 'Cold batter, hot oil. That pairing is the whole of the technique, and it is why a thin, almost lacy crust forms around the fish. The shock of cold batter hitting hot fat makes the water in it flash into steam, which puffs the coating before it has time to turn greasy.\n\nUse chilled sparkling water or lager and mix the batter just before frying. Whisk it only until the lumps disappear, because overmixing develops gluten and makes the batter tough. A little cornflour in the mix gives a crisper, lighter result than plain flour, and baking powder helps it puff.\n\n**Dust the fish in flour before it goes into the batter.** The dry flour gives the wet batter something to cling to, so it does not slide off in the pan. Shake off any excess.\n\nHeat the oil to 180C and fry the fish in batches of two so the oil temperature holds. The fish is done when the coating is a deep gold and rigid. Drain on a rack, not on kitchen paper, which traps steam against the underside and softens the crust.',
    ing: [
      '600 g cod or haddock fillets, cut into 4 pieces',
      '50 g plain flour, for dusting',
      '150 g plain flour',
      '50 g cornflour',
      '1 tsp baking powder',
      '1 tsp salt',
      '250 ml cold sparkling water',
      '60 ml vegetable oil, plus extra for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Pat the fish dry and season. Dust each piece in the 50 g flour. Heat the oil in a deep pan to 180C.',
      'Mix the 150 g flour, cornflour, baking powder and salt. Whisk in the cold sparkling water until just combined.',
      'Dip the fish in the batter, let the excess drip off, and lower it gently into the oil.',
      'Fry in 2 batches for 5 minutes, turning once, until deep golden and crisp.',
      'Drain on a wire rack and serve at once with the lemon wedges.'
    ],
    tips: [
      'Keep the batter cold and mix it at the last minute.',
      'Do not overcrowd the pan.',
      'Drain on a rack, not paper.'
    ],
    pair: ['Chips', 'Mushy peas', 'Tartare sauce', 'Malt vinegar'],
    store: 'Best eaten straight away. Crisp leftovers in a hot oven for 8 minutes.',
    nut: [467, 32, 51, 15, 2, 1, 800]
  },

  'beef-casserole': {
    d: 'Diced braising steak slow cooked in the oven for 2 hours with carrots, onions, mushrooms and stock until tender in a rich gravy.',
    meta: 'Beef casserole with carrots, onions and mushrooms in a rich gravy. Six servings, oven cooked for 2 hours.',
    kw: ['beef casserole', 'classic beef casserole', 'oven beef casserole', 'beef and vegetable casserole', 'braising steak casserole'],
    why: 'Why does a casserole need 2 hours when the meat is already in small pieces? The answer is collagen. Braising beef is full of connective tissue, which is tough when raw but dissolves into gelatin with long, gentle heat, and that gelatin is what makes the gravy glossy and the meat soft.\n\nBrown the beef in batches, and do not crowd the pan. Pieces that touch steam instead of searing, and lose the dark crust that gives a casserole its flavour. Dust the meat lightly in seasoned flour before browning, which helps the crust form and thickens the gravy as it cooks.\n\n**Keep the oven low, at 160C**, and leave the lid on. A casserole that bubbles furiously will toughen the meat, while one that barely trembles turns it tender. Check after an hour, and add a splash of water if the gravy is getting thick.\n\nAdd the mushrooms halfway through so they hold their shape. A spoonful of Worcestershire sauce and a bay leaf deepen the flavour. Serve in wide bowls with mashed potato, because the gravy needs something to soak into.',
    ing: [
      '900 g braising steak, cut into 4 cm cubes',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '3 tbsp vegetable oil',
      '2 onions, sliced',
      '3 carrots, thickly sliced',
      '3 garlic cloves, crushed',
      '1 tbsp tomato purée',
      '600 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '2 bay leaves',
      '1 tsp dried thyme',
      '250 g mushrooms, halved'
    ],
    st: [
      'Heat the oven to 160C. Toss the beef with the flour, salt and pepper.',
      'Heat the oil in a casserole dish. Brown the beef in 3 batches for 4 minutes each. Remove it.',
      'Cook the onions and carrots for 6 minutes. Add the garlic and tomato purée for 1 minute. Pour in the stock and Worcestershire sauce, scraping the base.',
      'Return the beef, add the bay leaves and thyme, cover and cook in the oven for 1 hour.',
      'Stir in the mushrooms and cook for another hour until the beef is tender. Remove the bay leaves and serve.'
    ],
    tips: [
      'Brown the beef in batches.',
      'Keep the oven low for tender meat.',
      'Add mushrooms halfway through.'
    ],
    pair: ['Mashed potatoes', 'Crusty bread', 'Green cabbage', 'Dumplings'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [336, 35, 13, 16, 2, 4, 860]
  },

  'beef-nachos': {
    d: 'Tortilla chips layered with spiced beef mince, black beans and cheese, baked for 15 minutes and finished with salsa and soured cream.',
    meta: 'Beef nachos with spiced mince, beans and melted cheese, baked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['beef nachos', 'loaded beef nachos', 'nachos with mince', 'baked nachos with cheese', 'tex mex nachos'],
    why: 'Nachos are said to have been invented in a border town in northern Mexico, and the name comes from the cook who first put them together. What matters now is the layering: cheese on every chip, not a pile on top and bare chips underneath.\n\nSpread the chips on a large tray in two layers, adding half of the meat and cheese to each layer. That way the bottom chips get covered too, and every mouthful has a topping. Sturdy, thick-cut tortilla chips hold the weight of the beef; thin ones go limp.\n\n**Season the beef well and cook it dry.** Brown the mince with onion, garlic, cumin, smoked paprika and chilli until the pan is dry and the meat has darkened. A wet filling makes the chips soggy within minutes of coming out of the oven.\n\nGrate your own cheese. Pre-grated cheese is coated in starch and melts less smoothly. Bake until the cheese is molten and just starting to brown at the edges, and add the cold toppings afterwards: salsa, soured cream, guacamole, jalapenos and coriander.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '2 garlic cloves, crushed',
      '400 g beef mince',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '200 g tortilla chips',
      '200 g tinned black beans, drained',
      '200 g cheddar, grated',
      '100 g salsa',
      '100 g soured cream',
      '30 g pickled jalapeno slices',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Heat the oven to 200C. Heat the oil in a pan, cook the onion for 4 minutes, then add the garlic and beef and cook for 8 minutes until browned and dry.',
      'Stir in the cumin, paprika, chilli and salt and cook for 1 minute.',
      'Spread half the chips on a large tray. Top with half the beef, beans and cheese. Repeat with a second layer.',
      'Bake for 15 minutes until the cheese is melted and golden at the edges.',
      'Top with the salsa, soured cream, jalapenos and coriander and serve immediately.'
    ],
    tips: [
      'Layer the chips so every one is covered.',
      'Cook the beef until dry to avoid soggy chips.',
      'Add cold toppings after baking.'
    ],
    pair: ['Guacamole', 'Lime wedges', 'Pickled jalapenos', 'Cold beer'],
    store: 'Best eaten at once. They do not store well.',
    nut: [816, 40, 47, 52, 7, 5, 1280]
  }
};
