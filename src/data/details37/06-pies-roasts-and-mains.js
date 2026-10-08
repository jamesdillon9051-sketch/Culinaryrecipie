'use strict';

/**
 * Volume thirty-seven — pies, roasts and the mains people search by name.
 *
 * Pastry-topped pies of Britain and Australia, the Sunday roast, and a few
 * plain suppers that come up again and again in search. Times are the
 * recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'beef-and-guinness-pie': {
    d: 'Beef chuck stewed for 2 hours in stout, onions and carrots, topped with puff pastry and cooked for 30 minutes. Six servings in 3 hours.',
    meta: 'Beef and Guinness pie: beef stewed for 2 hours in stout with onions and carrots, topped with puff pastry. Six servings in 3 hours.',
    kw: ['beef and guinness pie', 'steak and stout pie', 'beef and ale pie', 'guinness pie with puff pastry', 'homemade beef pie'],
    why: 'The mistake with a pie is a thin filling under a pastry lid that has gone soft. The cure is a stew that is thick enough to hold a spoon upright before it ever sees the pastry.\n\nBrown the beef in batches, which gives the stew its colour and depth. Stout adds a dark, slightly bitter note that balances the sweetness of the onions and carrots, and 2 hours of gentle simmering turns chuck from chewy to tender.\n\nThe filling must be **cool before the pastry goes on**, or the pastry melts and the lid sinks. Spoon it into the dish, let it sit for 20 minutes, then top.\n\nBrush the pastry with egg and cut a small slit in the middle so steam can escape. Cook at 200°C for 30 minutes, until the pastry is deep gold and risen. If your oven runs hot, check at 25 minutes. The stew improves if made a day ahead and kept in the fridge, which also makes it easy to top and cook on the day.',
    ing: [
      '1 kg beef chuck, cubed',
      '2 tbsp plain flour',
      '2 tbsp vegetable oil',
      '2 onions, chopped',
      '2 carrots, sliced',
      '3 garlic cloves, chopped',
      '440 ml stout',
      '300 ml beef stock',
      '1 tbsp tomato puree',
      '2 thyme sprigs',
      '1 tsp salt',
      '320 g puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Toss the beef in the flour. Heat the oil in a large casserole and brown the beef in batches, then set aside.',
      'Fry the onions and carrots for 5 minutes, add the garlic and tomato puree, then pour in the stout and stock. Return the beef with the thyme and salt.',
      'Cover and simmer gently for 2 hours, until the beef is tender and the sauce is thick. Cool for 20 minutes.',
      'Heat the oven to 200°C. Spoon the filling into a pie dish, cover with the pastry, press the edges down, cut a slit and brush with egg.',
      'Cook for 30 minutes, until golden.'
    ],
    tips: [
      'Cool the filling before the pastry goes on.',
      'Brown the beef in batches.',
      'If your oven runs hot, check at 25 minutes.',
      'Cut a slit so the steam escapes.'
    ],
    pair: ['Mashed potato', 'Buttered cabbage', 'Peas', 'Gravy'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in the oven so the pastry stays crisp.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'party-pies': {
    d: 'Small shortcrust cases filled with spiced beef mince and gravy, topped with puff pastry lids and cooked for 25 minutes. Twelve pies in 65 minutes.',
    meta: 'Party pies: small shortcrust cases filled with beef mince and gravy, topped with puff pastry and cooked for 25 minutes. Twelve pies in 65 minutes.',
    kw: ['party pies', 'australian party pies', 'mini meat pies', 'beef mince party pies', 'cocktail meat pies'],
    why: 'Party pies are a small version of the Australian meat pie, made to be eaten in two bites with a dab of tomato sauce. The trick is the right size and a filling that is not runny.\n\nCook the mince with onion, then add flour and stock and simmer until it is thick enough to hold on a spoon. A loose filling leaks out of the case and softens the base.\n\nUse a muffin tin and cut the cases from the shortcrust with a round cutter. **Do not overfill**: a heaped teaspoon is enough, because the filling spreads as it heats.\n\nTop with puff pastry lids, pinch the edges and brush with egg. Cook at 200°C for 25 minutes until the tops are puffed and golden. If your oven runs hot, check at 20 minutes. Cool in the tin for 5 minutes before lifting out. They freeze well before cooking, so a double batch is worth making ahead of a party, and they cook from frozen with a few extra minutes.',
    ing: [
      '500 g beef mince',
      '1 onion, finely chopped',
      '1 tbsp vegetable oil',
      '2 tbsp plain flour',
      '250 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '400 g shortcrust pastry',
      '250 g puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oil and fry the onion for 5 minutes. Add the mince and brown for 8 minutes.',
      'Stir in the flour, then the stock, Worcestershire sauce, salt and pepper. Simmer for 10 minutes until thick, then cool.',
      'Heat the oven to 200°C. Cut 12 rounds from the shortcrust and press them into a muffin tin.',
      'Fill with the mince, top with rounds of puff pastry, pinch the edges, brush with egg and cut a small slit.',
      'Cook for 25 minutes, until golden. Cool for 5 minutes in the tin.'
    ],
    tips: [
      'Cook the filling until it is thick.',
      'Fill with a heaped teaspoon, no more.',
      'If your oven runs hot, check at 20 minutes.',
      'Cool in the tin before lifting out.'
    ],
    pair: ['Tomato sauce', 'Mushy peas', 'Sausage rolls', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven to crisp the pastry.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'steak-and-kidney-pie': {
    d: 'Stewing steak and ox kidney simmered for 2 hours in stock and onions, topped with shortcrust pastry and cooked for 30 minutes. Six servings in 3 hours.',
    meta: 'Steak and kidney pie: stewing steak and ox kidney simmered for 2 hours with onions, topped with shortcrust pastry. Six servings in 3 hours.',
    kw: ['steak and kidney pie', 'traditional steak and kidney pie', 'british steak and kidney pie', 'beef and kidney pie', 'steak and kidney pie with shortcrust'],
    why: 'Why does a steak and kidney pie taste so different from a plain beef one? Kidney has a rich, mineral depth that gives the gravy its character, and it is the part people either love or avoid.\n\nPrepare the kidney by cutting out the white core and soaking the pieces in cold water for 10 minutes. This removes the sharpest taste and leaves the savoury part.\n\nThe filling must be thick, so use flour to coat the meat and simmer with the lid slightly off for the last 20 minutes. **A pie dish with a wide rim** helps the pastry sit properly.\n\nCool the filling before the lid goes on, then brush with egg and cook at 200°C for 30 minutes. If your oven runs hot, check at 25 minutes. Serve with plenty of gravy and something green. If you are unsure about kidney, start with 100 g and increase the amount next time once you know how it suits your table.',
    ing: [
      '800 g stewing steak, cubed',
      '250 g ox kidney, cored and chopped',
      '2 tbsp plain flour',
      '2 tbsp vegetable oil',
      '2 onions, chopped',
      '400 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '320 g shortcrust pastry',
      '1 egg, beaten'
    ],
    st: [
      'Soak the kidney in cold water for 10 minutes, then drain. Toss the steak and kidney in the flour.',
      'Brown the meat in the oil in batches. Fry the onions for 5 minutes, then return the meat with the stock, Worcestershire sauce, salt and pepper.',
      'Cover and simmer gently for 2 hours until tender. Cool for 20 minutes.',
      'Heat the oven to 200°C. Spoon the filling into a pie dish, cover with the pastry, press down the edges and brush with egg.',
      'Cook for 30 minutes, until golden.'
    ],
    tips: [
      'Soak the kidney to soften its taste.',
      'Make sure the filling is thick and cool.',
      'If your oven runs hot, check at 25 minutes.',
      'Brush the pastry with egg for colour.'
    ],
    pair: ['Mashed potato', 'Cabbage', 'Carrots', 'Peas'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in the oven until hot all the way through.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'cheese-and-potato-pie': {
    d: 'Mashed potato, grated cheddar and onion folded together and baked under a golden crust for 45 minutes. Six servings in 1 hour 15 minutes.',
    meta: 'Cheese and potato pie: mashed potato, cheddar and onion in a shortcrust case, cooked for 45 minutes until golden. Six servings in 1 hour 15 minutes.',
    kw: ['cheese and potato pie', 'cheese and onion potato pie', 'lancashire style cheese and potato pie', 'potato and cheese pie', 'cheese potato pie'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. A pie of potato and cheese is plain by design, so every part has to be right.\n\nBoil the potatoes until just tender, drain them well and let the steam escape for a few minutes. Wet potato makes a wet filling, and a wet filling makes a soggy base.\n\nMash coarsely, not smooth, then fold in the cheddar, softened onion and seasoning. **Pepper matters more than you think**, since the filling is mild.\n\nLine a pie dish with shortcrust, fill, cover with the second sheet and crimp the edges. Cut a slit, brush with egg and cook at 190°C for 45 minutes until the top is deep gold. If your oven runs hot, check at 35 minutes. Let it stand for 10 minutes before cutting. A spoonful of mustard in the mash adds a gentle sharpness that suits the cheese, and a handful of chives makes it fresher.',
    ing: [
      '900 g floury potatoes, peeled and cut up',
      '200 g mature cheddar, grated',
      '1 onion, finely chopped',
      '30 g butter',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '500 g shortcrust pastry',
      '1 egg, beaten'
    ],
    st: [
      'Boil the potatoes for 15 minutes until tender, drain and leave to steam dry. Mash coarsely.',
      'Melt the butter and soften the onion for 8 minutes. Fold into the potato with the cheddar, salt and pepper.',
      'Heat the oven to 190°C. Line a pie dish with half the pastry, fill with the mixture and cover with the rest. Crimp, cut a slit and brush with egg.',
      'Cook for 45 minutes, until golden. Stand for 10 minutes before cutting.'
    ],
    tips: [
      'Let the drained potato steam dry.',
      'Mash coarsely rather than smooth.',
      'If your oven runs hot, check at 35 minutes.',
      'Season well, as the filling is mild.'
    ],
    pair: ['Baked beans', 'Pickled red cabbage', 'Green salad', 'Brown sauce'],
    store: 'Keeps in the fridge for up to 3 days. Good cold or reheated in the oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'cheese-and-egg-pie': {
    d: 'A shortcrust pie of hard-boiled egg, cheddar and bacon set in a creamy custard and cooked for 40 minutes. Six servings in 1 hour 5 minutes.',
    meta: 'Cheese and egg pie: shortcrust filled with hard-boiled egg, cheddar and bacon in a creamy custard, cooked for 40 minutes. Six servings in 1 hour 5 minutes.',
    kw: ['cheese and egg pie', 'egg and bacon pie', 'cheese and egg pie with bacon', 'picnic egg pie', 'savoury egg pie'],
    why: 'Most home versions come out watery, and the fix is to cook the filling in two stages. The base needs to be set before the custard goes in, or the pastry turns pale and damp.\n\nBlind-bake the case for 10 minutes with a layer of baking beans, then scatter in the bacon, chopped egg and cheddar. The eggs are already cooked, so they only need to be warmed through.\n\nThe custard is eggs, cream and a good pinch of pepper. Pour it slowly over the filling, and **stop an inch from the top** so it does not spill over the rim as it puffs.\n\nCook at 180°C for 30 minutes until the custard is just set, with a slight wobble in the middle. If your oven runs hot, check at 25 minutes. It eats well hot, warm or cold, which is why it travels to picnics. Cut it with a sharp knife in a sawing motion, which keeps the pastry from cracking and the custard neat on the plate.',
    ing: [
      '320 g shortcrust pastry',
      '4 eggs, hard-boiled and chopped',
      '150 g mature cheddar, grated',
      '120 g bacon, cooked and chopped',
      '3 eggs',
      '200 ml double cream',
      '1/2 tsp black pepper',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Line a 23 cm tin with the pastry and cook blind for 10 minutes with baking beans.',
      'Lower the oven to 180°C. Scatter the bacon, chopped egg and cheddar over the base.',
      'Whisk the raw eggs with the cream, salt and pepper and pour over.',
      'Cook for 30 minutes until the custard is just set.',
      'Cool for 10 minutes before slicing.'
    ],
    tips: [
      'Cook the base blind first.',
      'Leave a gap at the top of the tin for the custard.',
      'If your oven runs hot, check at 25 minutes.',
      'Cool before slicing.'
    ],
    pair: ['Green salad', 'Piccalilli', 'Tomato chutney', 'New potatoes'],
    store: 'Keeps in the fridge for up to 3 days. Serve cold or warm it gently.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'sunday-roast-beef': {
    d: 'A topside of beef seared and roasted for 90 minutes at 180°C, rested and carved, with a gravy made from the pan juices. Six servings in 1 hour 50 minutes.',
    meta: 'Sunday roast beef: a topside joint roasted for 90 minutes at 180°C, rested and carved, with gravy made from the pan juices. Six servings in 1 hour 50 minutes.',
    kw: ['sunday roast beef', 'roast topside of beef', 'roast beef with gravy', 'traditional roast beef dinner', 'how to roast beef'],
    why: 'It looks like a lot of work and is mostly waiting. Beef roast is a long, calm cook with two steps that matter: how you season it and how long you let it rest.\n\nTake the joint out of the fridge an hour before it goes in, so it cooks evenly. Rub with oil, salt and pepper, and set it on a bed of sliced onion, which flavours the gravy and keeps the meat off the tin.\n\nStart at 220°C for 15 minutes to colour the outside, then turn down to 180°C for the rest of the 90 minutes. A thermometer reads 55°C for rare, 60°C for medium and 70°C for well done. If your oven runs hot, check at 70 minutes.\n\n**Rest it for at least 20 minutes** under foil. The juices redistribute, and the slices stay moist instead of weeping onto the board. Use the pan juices, flour and stock for the gravy. A joint with a layer of fat on top will baste itself, so leave the fat on and trim it at the table if you prefer.',
    ing: [
      '1.5 kg beef topside',
      '2 tbsp vegetable oil',
      '1 tsp salt',
      '1 tsp black pepper',
      '2 onions, sliced',
      '2 tbsp plain flour',
      '500 ml beef stock'
    ],
    st: [
      'Take the beef out of the fridge an hour before cooking. Heat the oven to 220°C.',
      'Rub the beef with oil, salt and pepper and set it on the onions in a roasting tin. Roast for 15 minutes.',
      'Lower the oven to 180°C and roast for 75 minutes more. Rest under foil for 20 minutes.',
      'Pour off the fat, stir the flour into the tin juices over heat, whisk in the stock and simmer for 5 minutes. Strain.',
      'Carve thinly across the grain.'
    ],
    tips: [
      'Bring the beef to room temperature first.',
      'Use a thermometer to judge doneness.',
      'If your oven runs hot, check at 70 minutes.',
      'Rest before carving.'
    ],
    pair: ['Roast potatoes', 'Yorkshire puddings', 'Carrots', 'Horseradish'],
    store: 'Keeps in the fridge for up to 3 days. Slice thinly for sandwiches.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'roast-chicken-legs': {
    d: 'Chicken legs rubbed with paprika, garlic and thyme and roasted over potatoes for 45 minutes until crisp. Four servings in 55 minutes.',
    meta: 'Roast chicken legs: chicken legs rubbed with paprika, garlic and thyme, roasted for 45 minutes over potatoes until crisp. Four servings in 55 minutes.',
    kw: ['roast chicken legs', 'oven roast chicken legs', 'crispy roast chicken legs with potatoes', 'easy roast chicken legs', 'chicken leg quarters'],
    why: 'The first sign it is ready is the smell: paprika and garlic turning savoury in the heat, and chicken fat starting to crackle in the tin. A leg quarter is forgiving, with dark meat that stays juicy even if you leave it a little long.\n\nPat the skin dry with kitchen paper, because wet skin steams instead of crisping. Rub with oil, paprika, garlic, thyme and salt, working some under the skin where you can.\n\nSet the legs on top of potato chunks. The fat drips down and crisps the potatoes, and the legs sit off the base so the skin does not stew.\n\n**Do not crowd the tin**: use a large one, or two. Roast at 200°C for 45 minutes, turning the potatoes once, until the skin is deep golden and the juices run clear. If your oven runs hot, check at 35 minutes. Squeeze a lemon over the legs as they come out of the oven, and spoon the juices from the tin over the potatoes.',
    ing: [
      '4 chicken leg quarters',
      '800 g potatoes, cut into chunks',
      '3 tbsp olive oil',
      '2 tsp smoked paprika',
      '3 garlic cloves, grated',
      '1 tsp dried thyme',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Pat the chicken dry and mix the oil, paprika, garlic, thyme, salt and pepper.',
      'Toss the potatoes in half of the mixture in a large roasting tin and rub the rest over the chicken.',
      'Set the chicken on the potatoes and roast for 45 minutes, turning the potatoes once, until crisp.',
      'Rest for 5 minutes before serving.'
    ],
    tips: [
      'Pat the skin completely dry.',
      'Use a large tin so nothing steams.',
      'If your oven runs hot, check at 35 minutes.',
      'Turn the potatoes halfway.'
    ],
    pair: ['Green beans', 'Coleslaw', 'Gravy', 'Garlic bread'],
    store: 'Keeps in the fridge for up to 3 days. Reheat in a hot oven to crisp the skin.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'country-fried-chicken': {
    d: 'Chicken pieces soaked in buttermilk, coated in seasoned flour and fried for 25 minutes until crisp, with a pan gravy. Four servings in 45 minutes.',
    meta: 'Country fried chicken: chicken soaked in buttermilk, coated in seasoned flour and fried for 25 minutes, served with pan gravy. Four servings in 45 minutes.',
    kw: ['country fried chicken', 'southern style fried chicken', 'buttermilk fried chicken with gravy', 'crispy fried chicken', 'fried chicken and gravy'],
    why: 'It looks like a fried chicken recipe and eats like a Sunday supper, because the pan gravy is half the dish. Both depend on a crust that sticks and a pan that stays at a steady heat.\n\nSoak the chicken in buttermilk with salt and pepper for 20 minutes while you prepare the flour. The acid softens the meat, and the thick liquid gives the coating something to cling to.\n\nSeason the flour well with paprika, garlic powder and pepper. Press each piece into it and shake off the extra. **Let the coated pieces sit for 10 minutes** so the flour hydrates and stays on in the pan.\n\nFry in about 2 cm of hot oil, turning once, for 25 minutes in total. The chicken is cooked when the juices run clear. If your oil runs hot, check at 18 minutes. Stir a little flour into the pan fat, whisk in milk and season for the gravy. A thermometer reads 75°C in the thickest part, which is the surest way to know a big piece is cooked through to the bone.',
    ing: [
      '1.2 kg chicken pieces',
      '300 ml buttermilk',
      '200 g plain flour',
      '2 tsp paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1 tsp black pepper',
      '400 ml vegetable oil',
      '2 tbsp plain flour',
      '300 ml milk'
    ],
    st: [
      'Soak the chicken in the buttermilk for 20 minutes. Mix the 200 g flour with the paprika, garlic powder, salt and pepper.',
      'Dredge the chicken in the flour and rest the pieces for 10 minutes.',
      'Heat the oil in a deep frying pan over medium heat and fry the chicken for 25 minutes, turning once, until deep golden and cooked through.',
      'Pour off all but 2 tbsp of the oil, stir in the 2 tbsp flour for 1 minute, then whisk in the milk and simmer until thick. Season and serve with the chicken.'
    ],
    tips: [
      'Rest the coated chicken before frying.',
      'Keep the heat steady and never crowd the pan.',
      'If your oil runs hot, check at 18 minutes.',
      'Season the gravy at the end.'
    ],
    pair: ['Mashed potato', 'Coleslaw', 'Green beans', 'Biscuits'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days; reheat in a hot oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'lamb-cutlets-with-mint-sauce': {
    d: 'Lamb cutlets grilled for 10 minutes and served with a sharp mint sauce of vinegar, sugar and fresh mint. Four servings in 20 minutes.',
    meta: 'Lamb cutlets with mint sauce: cutlets grilled for 10 minutes and served with a sharp sauce of fresh mint, vinegar and sugar. Four servings in 20 minutes.',
    kw: ['lamb cutlets with mint sauce', 'grilled lamb cutlets', 'lamb cutlets', 'homemade mint sauce', 'easy lamb cutlets'],
    why: 'Most mint sauce is too sweet, and the fix is to make your own: it takes minutes and tastes of vinegar and mint, as it should.\n\nChop the mint finely and pour over a little boiling water with the sugar to dissolve it, then add the vinegar. Leave it while the lamb cooks and the flavours come together.\n\nLamb cutlets have a bone to hold and a rim of fat that crisps. Season them with salt and pepper and cook in a hot pan or under the grill. **Do not move them for the first 4 minutes**, so a proper crust forms.\n\nTurn once and cook for 4 minutes more for pink, a little longer for well done. If your grill runs hot, check at 7 minutes. Rest for 3 minutes on a warm plate. Spoon the sauce over just before serving, not before. Cutlets cook quickly, so have the potatoes and vegetables ready first, and bring everything to the table together.',
    ing: [
      '12 lamb cutlets',
      '1 tbsp olive oil',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '3 tbsp chopped fresh mint',
      '2 tsp caster sugar',
      '2 tbsp boiling water',
      '3 tbsp white wine vinegar'
    ],
    st: [
      'Stir the sugar into the boiling water, add the mint and vinegar and leave to stand.',
      'Rub the cutlets with oil, salt and pepper.',
      'Heat a heavy pan or the grill to high and cook the cutlets for 10 minutes in total, turning once.',
      'Rest for 3 minutes and serve with the mint sauce.'
    ],
    tips: [
      'Make the sauce first so it can stand.',
      'Leave the cutlets undisturbed to brown.',
      'If your grill runs hot, check at 7 minutes.',
      'Rest briefly before serving.'
    ],
    pair: ['Roast potatoes', 'Peas', 'Green beans', 'Crushed new potatoes'],
    store: 'Eat straight away. Mint sauce keeps in the fridge for 3 days.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'lamb-shanks': {
    d: 'Lamb shanks browned and braised for 2 hours 30 minutes in red wine, tomatoes and rosemary until falling off the bone. Four servings in 2 hours 50 minutes.',
    meta: 'Lamb shanks: shanks browned and braised for 2 hours 30 minutes in red wine, tomatoes and rosemary until falling off the bone. Four servings in 2 hours 50 minutes.',
    kw: ['lamb shanks', 'braised lamb shanks in red wine', 'oven braised lamb shanks', 'lamb shanks with rosemary', 'slow cooked lamb shanks'],
    why: 'Lamb, red wine, tomatoes, rosemary: four things that turn a tough cut into something you can pull apart with a spoon. A shank is mostly connective tissue, and long, slow, moist heat is what turns it tender.\n\nBrown the shanks well on all sides first. Do not rush this, because the colour on the meat becomes the colour and the savour of the sauce.\n\nFry the onion, carrot and garlic in the same pot, add the tomatoes, wine and stock and bring to a simmer. **The shanks should sit about two thirds under the liquid**, not completely covered.\n\nCover and cook in a 160°C oven for 2 hours 30 minutes, turning once. They are done when the meat pulls from the bone at a touch. If your oven runs hot, check at 2 hours. Boil the sauce down for a few minutes if it is thin. The dish tastes even better the next day, so cook it ahead for guests and reheat gently while you carry on with other things.',
    ing: [
      '4 lamb shanks',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 carrots, chopped',
      '4 garlic cloves, sliced',
      '400 g tinned chopped tomatoes',
      '250 ml red wine',
      '250 ml beef stock',
      '3 rosemary sprigs',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 160°C. Brown the shanks in the oil in a large casserole on all sides, then set aside.',
      'Fry the onion, carrot and garlic for 6 minutes. Add the tomatoes, wine, stock, rosemary and salt and bring to a simmer.',
      'Return the shanks, cover and cook for 2 hours 30 minutes, turning once, until the meat falls from the bone.',
      'Lift out the shanks and boil the sauce for a few minutes if thin. Serve the shanks with the sauce spooned over.'
    ],
    tips: [
      'Brown the shanks properly.',
      'Keep the liquid below the top of the meat.',
      'If your oven runs hot, check at 2 hours.',
      'Reduce the sauce at the end if it is thin.'
    ],
    pair: ['Mashed potato', 'Creamy polenta', 'Green beans', 'Crusty bread'],
    store: 'Keeps in the fridge for up to 3 days in the sauce. Reheat gently.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'beef-chow-mein': {
    d: 'Egg noodles tossed with sliced beef, cabbage, carrot and spring onion in a soy and oyster sauce, ready in 25 minutes. Four servings.',
    meta: 'Beef chow mein: egg noodles tossed with sliced beef, cabbage, carrot and spring onion in soy and oyster sauce, ready in 25 minutes. Four servings.',
    kw: ['beef chow mein', 'homemade beef chow mein', 'chow mein noodles with beef', 'beef chow mein stir fry', '25 minute beef chow mein'],
    why: 'Keep the heat high. That is most of the recipe, and the part people skip. Chow mein is a stir fry, so it cooks in minutes and everything depends on having it all ready before the pan is hot.\n\nSlice the beef thinly across the grain and toss it in a spoonful of soy sauce and cornflour. This coats the strips and keeps them tender as they sear. Cook it in a single layer, in two batches if the pan is small.\n\nBoil the noodles for 2 minutes only, then drain and toss in a little oil so they do not clump. They finish cooking in the wok.\n\n**Add the sauce last**, once the vegetables are tender-crisp, and toss for 1 minute until everything is glossy and coated. If your hob runs hot, work faster, and keep a lid ready for the splatter. A splash of chilli oil or a spoonful of chilli sauce at the table lets everyone set the heat to their own taste.',
    ing: [
      '350 g beef sirloin, thinly sliced',
      '3 tbsp soy sauce',
      '1 tsp cornflour',
      '300 g egg noodles',
      '2 tbsp vegetable oil',
      '2 carrots, cut into matchsticks',
      '200 g white cabbage, shredded',
      '4 spring onions, sliced',
      '3 garlic cloves, sliced',
      '2 tbsp oyster sauce',
      '1 tsp sesame oil'
    ],
    st: [
      'Toss the beef with 1 tbsp of the soy sauce and the cornflour. Boil the noodles for 2 minutes, drain and toss with the sesame oil.',
      'Heat half the oil in a wok over high heat and stir-fry the beef for 2 minutes. Remove.',
      'Add the rest of the oil and stir-fry the carrots, cabbage and garlic for 3 minutes.',
      'Return the beef and add the noodles, spring onions, oyster sauce and remaining soy sauce. Toss for 1 minute.'
    ],
    tips: [
      'Have everything cut before you start.',
      'Cook the beef in a single layer.',
      'Boil the noodles for only 2 minutes.',
      'Add the sauce at the end.'
    ],
    pair: ['Prawn crackers', 'Pickled vegetables', 'Spring rolls', 'Hot chilli oil'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan with a splash of water.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'tuna-casserole-with-peas': {
    d: 'Pasta, tinned tuna, peas and a creamy mushroom sauce topped with breadcrumbs and cooked for 35 minutes. Four servings in 50 minutes.',
    meta: 'Tuna casserole with peas: pasta, tinned tuna, peas and a creamy mushroom sauce topped with crumbs and cooked for 35 minutes. Four servings in 50 minutes.',
    kw: ['tuna casserole with peas', 'tuna noodle casserole', 'tuna pasta casserole', 'creamy tuna casserole', 'easy tuna casserole'],
    why: 'Why does a tuna casserole so often come out dry? The pasta keeps drinking sauce as it cooks, and by the time it is done there is nothing left to coat it.\n\nCook the pasta for 2 minutes less than the packet says, since it carries on softening in the oven. Make the sauce looser than you think it should be: it should pour easily.\n\nThe sauce is butter, flour, milk and sliced mushrooms, with a little mustard for bite. **Fold in the tuna and peas gently** at the end, so the fish stays in chunks and does not turn to paste.\n\nTop with breadcrumbs and grated cheddar. Cook at 190°C for 35 minutes until the crumbs are golden and the edges bubble. If your oven runs hot, check at 28 minutes. Let it stand for 5 minutes before serving. Choose tuna in oil or spring water, drained well, and avoid anything with brine, which adds more salt than the sauce needs.',
    ing: [
      '250 g macaroni',
      '30 g butter',
      '30 g plain flour',
      '500 ml milk',
      '200 g mushrooms, sliced',
      '1 tsp mustard',
      '1/2 tsp salt',
      '320 g tinned tuna, drained',
      '150 g frozen peas',
      '60 g mature cheddar, grated',
      '40 g breadcrumbs'
    ],
    st: [
      'Heat the oven to 190°C. Boil the macaroni for 2 minutes less than the packet says, then drain.',
      'Melt the butter, fry the mushrooms for 5 minutes, stir in the flour for 1 minute, then whisk in the milk, mustard and salt. Simmer for 5 minutes.',
      'Fold in the macaroni, tuna and peas and tip into a baking dish.',
      'Scatter with the cheddar and breadcrumbs and cook for 35 minutes, until golden.',
      'Stand for 5 minutes.'
    ],
    tips: [
      'Undercook the pasta slightly.',
      'Keep the sauce loose.',
      'If your oven runs hot, check at 28 minutes.',
      'Fold in the tuna gently.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli', 'Tomato salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat with a splash of milk.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'pumpkin-risotto': {
    d: 'Arborio rice stirred with roasted pumpkin, white wine and parmesan, ready in 40 minutes. Four servings.',
    meta: 'Pumpkin risotto: arborio rice stirred with roasted pumpkin, white wine and parmesan until creamy, ready in 40 minutes. Four servings.',
    kw: ['pumpkin risotto', 'creamy pumpkin risotto', 'roasted pumpkin risotto', 'pumpkin and parmesan risotto', 'pumpkin risotto with sage'],
    why: 'Salt the pumpkin first, roast it until the edges catch, and stir half of it into the rice as it cooks. That is the whole trick, since the pumpkin melts into the risotto and turns it a deep gold.\n\nRoast half the pumpkin at 200°C for 20 minutes until browned. Keep the rest to fold in at the end, so you have both a smooth base and pieces you can see.\n\nRisotto asks for attention more than skill. Toast the rice in butter, add the wine and let it vanish, then add hot stock a ladle at a time. **Stir often, but not constantly**, and wait for each ladle to be absorbed before the next.\n\nIt is ready after about 20 minutes, when the rice is tender with a trace of bite and the sauce flows when you tilt the pan. Off the heat, stir in the parmesan and a knob of butter and rest for 2 minutes. Crispy sage leaves fried in a little butter make a fine topping, and a squeeze of lemon brightens the sweetness of the pumpkin.',
    ing: [
      '600 g pumpkin, peeled and cubed',
      '2 tbsp olive oil',
      '1 litre hot vegetable stock',
      '30 g butter',
      '1 onion, finely chopped',
      '300 g arborio rice',
      '100 ml white wine',
      '50 g parmesan, grated',
      '8 sage leaves',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Toss the pumpkin with the oil and salt and roast for 20 minutes.',
      'Melt half the butter and soften the onion for 5 minutes. Add the rice and stir for 1 minute, then pour in the wine.',
      'Add the stock a ladle at a time, stirring often, for about 20 minutes, adding half the pumpkin when the rice is half done.',
      'Off the heat, stir in the parmesan, the rest of the butter and the remaining pumpkin. Scatter with sage and rest for 2 minutes.'
    ],
    tips: [
      'Keep the stock hot.',
      'Add the stock gradually.',
      'If your hob runs hot, check the rice at 15 minutes.',
      'Rest the risotto before serving.'
    ],
    pair: ['Rocket salad', 'Crusty bread', 'White wine', 'Roasted hazelnuts'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; reheat with a splash of stock.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'cheese-grits': {
    d: 'Stone-ground grits simmered for 20 minutes in milk and water, then stirred with butter and sharp cheddar. Four servings in 25 minutes.',
    meta: 'Cheese grits: stone-ground grits simmered for 20 minutes in milk and water, then stirred with butter and sharp cheddar. Four servings in 25 minutes.',
    kw: ['cheese grits', 'creamy cheese grits', 'southern cheese grits', 'cheddar grits', 'easy cheese grits'],
    why: 'The smell of corn cooking slowly is the sign they are going well: sweet, a little toasty, like popcorn. Grits are coarse ground corn, and the coarser they are the more time they take.\n\nWhisk the grits into cold liquid, not boiling, or lumps form at once. Bring to a gentle simmer while stirring, then lower the heat and cook for 20 minutes, stirring every few minutes.\n\nUse half milk and half water. Milk makes the grits rich, and water keeps them from being heavy. **Add the salt at the start**, since the grain needs it to swell properly.\n\nThey are ready when they are thick and creamy and the grain is soft, with no gritty centre. If they thicken too much, stir in a splash of hot water. Off the heat, add the butter and cheddar and stir until melted. Serve at once, as they stiffen quickly. Sharp cheddar gives the best flavour, because mild cheese disappears into the corn, while a little hot sauce lifts the whole bowl.',
    ing: [
      '160 g stone-ground grits',
      '500 ml water',
      '500 ml milk',
      '1 tsp salt',
      '30 g butter',
      '120 g sharp cheddar, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Whisk the grits, water, milk and salt together in a heavy pan. Bring to a simmer, stirring.',
      'Lower the heat and cook for 20 minutes, stirring every few minutes, until thick and creamy.',
      'Off the heat, stir in the butter, cheddar and pepper until melted.',
      'Serve at once.'
    ],
    tips: [
      'Whisk the grits into cold liquid.',
      'Stir every few minutes as they cook.',
      'If your hob runs hot, check at 15 minutes.',
      'Loosen with hot water if they stiffen.'
    ],
    pair: ['Fried eggs', 'Crispy bacon', 'Grilled prawns', 'Hot sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat with milk, stirring, as grits set firm when cold.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'potato-bake-with-cream': {
    d: 'Thin slices of potato layered with cream, garlic and nutmeg and cooked for 60 minutes until golden on top. Six servings in 1 hour 15 minutes.',
    meta: 'Potato bake with cream: thin potato slices layered with cream, garlic and nutmeg and cooked for 60 minutes until golden. Six servings in 1 hour 15 minutes.',
    kw: ['potato bake with cream', 'creamy potato bake', 'australian potato bake', 'potato bake with garlic and nutmeg', 'cream potato bake'],
    why: 'Slice the potatoes thin and even, and everything else follows. Thin slices cook at the same rate, soak up the cream and set into layers that hold when you cut them.\n\nUse a mandoline or a sharp knife and aim for slices about 3 mm thick. Do not rinse them after slicing, as the starch on the surface helps thicken the cream.\n\nHeat the cream with the garlic and nutmeg until it just steams. Warm cream is absorbed quickly and does not split in the oven. **Season each layer**, not only the top, since potatoes soak up salt.\n\nPress the slices down so they sit under the cream, then cover the dish with foil for the first 40 minutes and uncover for the last 20 to brown. Cook at 180°C. If your oven runs hot, check at 50 minutes. Rest for 10 minutes so the bake sets before it is cut. The bake keeps its shape well, so it suits a buffet or a barbecue table where the main dish is carved at the side.',
    ing: [
      '1.2 kg potatoes, peeled and thinly sliced',
      '400 ml double cream',
      '150 ml milk',
      '3 garlic cloves, crushed',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '60 g gruyere, grated',
      '15 g butter'
    ],
    st: [
      'Heat the oven to 180°C and butter a baking dish. Warm the cream, milk, garlic, nutmeg, salt and pepper in a pan until steaming.',
      'Layer the potatoes in the dish, seasoning and spooning over a little of the cream mixture between layers. Pour over the rest and press down.',
      'Cover with foil and cook for 40 minutes. Remove the foil, scatter with gruyere and cook for 20 minutes more until golden.',
      'Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Slice the potatoes evenly and thinly.',
      'Do not rinse off the starch.',
      'If your oven runs hot, check at 50 minutes.',
      'Rest before cutting.'
    ],
    pair: ['Roast lamb', 'Grilled steak', 'Green salad', 'Roast chicken'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered in the oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'black-pudding-hash': {
    d: 'Diced potato fried until crisp with black pudding, onion and a fried egg on top, in 30 minutes. Two servings.',
    meta: 'Black pudding hash: diced potato fried until crisp with black pudding and onion, topped with a fried egg, in 30 minutes. Two servings.',
    kw: ['black pudding hash', 'black pudding and potato hash', 'breakfast hash with black pudding', 'black pudding breakfast', 'fried potato hash'],
    why: 'What do you do with a slice of black pudding beyond the fry-up plate? Crumble it into a hash, where it breaks down into dark, savoury crumbs that coat the potatoes.\n\nPar-boil the diced potatoes for 5 minutes first. This cooks the inside, so the pan only has to crisp the outside. Drain and let them steam dry before frying, because wet potatoes will not brown.\n\nFry them in a wide pan without moving them for the first few minutes. **Resist stirring**, as the crust forms only on contact with the pan.\n\nAdd the onion, then the black pudding in chunks, and keep turning until everything is crisp at the edges. Crack the eggs on top or fry them in a separate pan. Serve with brown sauce, or a splash of malt vinegar if you prefer the sharpness. Choose a black pudding with a good texture and a peppery flavour, since a soft, bland one turns to paste in the pan.',
    ing: [
      '500 g potatoes, diced',
      '2 tbsp vegetable oil',
      '1 onion, sliced',
      '200 g black pudding, chopped',
      '2 eggs',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Boil the potatoes for 5 minutes, drain and leave to steam dry.',
      'Heat the oil in a wide frying pan over medium-high heat and fry the potatoes for 10 minutes, turning only now and then, until crisp.',
      'Add the onion and fry for 4 minutes, then the black pudding and cook for 5 minutes more.',
      'Fry the eggs in a second pan, season the hash with salt and pepper and top with the eggs and parsley.'
    ],
    tips: [
      'Let the par-boiled potatoes steam dry.',
      'Do not stir for the first few minutes.',
      'If your pan runs hot, check at 8 minutes.',
      'Add the black pudding late.'
    ],
    pair: ['Brown sauce', 'Grilled tomatoes', 'Baked beans', 'Buttered toast'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat in a hot pan.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  },

  'yorkshire-pudding-wraps': {
    d: 'Large Yorkshire puddings cooked for 25 minutes in a hot tin and filled with sliced roast beef, gravy and horseradish. Four servings in 40 minutes.',
    meta: 'Yorkshire pudding wraps: large Yorkshire puddings cooked for 25 minutes and filled with roast beef, gravy and horseradish. Four servings in 40 minutes.',
    kw: ['yorkshire pudding wraps', 'beef yorkshire pudding wraps', 'yorkshire pudding wraps with roast beef', 'yorkshire wraps', 'giant yorkshire pudding wrap'],
    why: 'Keep the oven hot and the batter rested. That is most of the recipe, and the part people skip. A Yorkshire pudding rises because the batter hits very hot fat, so everything depends on the heat.\n\nMake the batter first: equal volumes of egg, flour and milk, with salt. Whisk until smooth and leave for 20 minutes, while the oven and tin heat up.\n\nPut a little oil in each hole of a tin and heat it at 220°C until it smokes. **Pour in the batter quickly** and shut the door at once. Opening it early lets the heat out and the puddings sink.\n\nThey are ready after 25 minutes, puffed, deep gold and crisp. If your oven runs hot, check at 20 minutes. While they cook, slice the beef and warm the gravy. Spread each pudding with horseradish, fill with beef and fold over like a wrap. They are a good way to use leftover roast beef, and the puddings can be cooked ahead and warmed for 5 minutes in a hot oven.',
    ing: [
      '4 eggs',
      '140 g plain flour',
      '200 ml milk',
      '1/2 tsp salt',
      '4 tbsp vegetable oil',
      '300 g sliced roast beef',
      '200 ml beef gravy',
      '2 tbsp horseradish sauce',
      '40 g rocket'
    ],
    st: [
      'Whisk the eggs, flour, milk and salt until smooth and leave for 20 minutes. Heat the oven to 220°C.',
      'Divide the oil among 4 wide, shallow holes of a tin or 4 small round tins and heat in the oven for 5 minutes until smoking.',
      'Pour in the batter, shut the door and cook for 25 minutes without opening it.',
      'Warm the gravy. Spread each pudding with horseradish, fill with beef and rocket, and fold. Serve with the gravy.'
    ],
    tips: [
      'Rest the batter before cooking.',
      'Heat the oil until it smokes.',
      'If your oven runs hot, check at 20 minutes.',
      'Do not open the door while they rise.'
    ],
    pair: ['Roast vegetables', 'Extra gravy', 'Pickled red cabbage', 'Mustard'],
    store: 'Best eaten at once. Cooked puddings keep in the fridge for 1 day; crisp in a hot oven.',
    nut: [0, 0, 0, 0, 0, 0, 0]
  }
};
