'use strict';

/**
 * Volume fifty-seven, second part: twelve gluten-free dishes, from chicken
 * nuggets to meatloaf. Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'gluten-free-chicken-nuggets': {
    d: 'Chicken breast pieces coated in a cornflour, egg and gluten-free breadcrumb crust and baked for 15 minutes at 220C until crisp.',
    meta: 'Gluten-free chicken nuggets in a crisp breadcrumb crust, baked for 15 minutes at 220C. Four servings, ready in 35 minutes.',
    kw: ['gluten free chicken nuggets', 'baked gluten free nuggets', 'gluten free breadcrumb chicken', 'homemade chicken nuggets without wheat', 'gluten free kids dinner'],
    why: 'A batch for four, made while the oven heats and the tray gets hot. Home-made nuggets are only chicken, a coating and an egg, so there is nothing in them that has to be swapped except the crumbs. Gluten-free breadcrumbs behave much like ordinary ones as long as they are packed well and kept dry.\n\nThree layers do the work. Cornflour on the chicken dries the surface so the egg grips. The egg is the glue. The crumbs, mixed with a little oil, brown in the oven rather than staying pale. **Preheat the tray** so the base of each nugget starts crisping the moment it lands.\n\nCut the chicken into pieces of about the same size, around 3 cm, so they cook through together. Pat them dry first. If the crust slides off, the chicken was wet or the cornflour step was skipped. At 15 minutes the juices should run clear and the crumbs should be deep golden.',
    ing: [
      '500 g chicken breast, cut into 3 cm pieces',
      '30 g cornflour',
      '1 egg, beaten',
      '80 g gluten-free breadcrumbs',
      '2 tbsp rapeseed oil',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 220C and put a baking tray inside to heat.',
      'Pat the chicken dry. Toss it with the cornflour and salt in a bowl until lightly coated.',
      'Mix the breadcrumbs with the oil, paprika and garlic powder on a plate.',
      'Dip each piece in the beaten egg, then press into the crumbs on all sides.',
      'Lay the nuggets on the hot tray and bake for 15 minutes, turning once, until golden and cooked through with no pink inside.'
    ],
    tips: [
      'Dry the chicken before coating, or the crust will slide off.',
      'If your nuggets are bigger than 3 cm, add 3 minutes and check one.',
      'Press the crumbs on firmly with the flat of your hand.'
    ],
    pair: ['Ketchup', 'Sweet potato wedges', 'Green beans', 'Honey mustard dip'],
    store: 'Keeps for 2 days in the fridge. Reheat on a tray at 200C for 8 minutes.',
    nut: [328, 33, 22, 12, 1, 1, 510]
  },

  'gluten-free-cinnamon-rolls': {
    d: 'Soft yeasted rolls spiralled with cinnamon sugar, made with a gluten-free flour blend and psyllium husk and finished with a cream cheese icing.',
    meta: 'Gluten-free cinnamon rolls with cream cheese icing, cooked for 25 minutes. Nine rolls, ready in 55 minutes plus 1 hour 30 minutes of rising.',
    kw: ['gluten free cinnamon rolls', 'cinnamon rolls without wheat', 'gluten free yeast rolls', 'cream cheese iced cinnamon buns', 'gluten free breakfast bakes'],
    why: 'A cinnamon roll is a sheet of enriched dough rolled around buttery cinnamon sugar, sliced, and baked in a single tin. That structure is what makes it a good gluten-free project: the rolls support each other as they rise, so the dough does not need to stand alone.\n\nPsyllium husk takes the place of gluten. It forms a flexible gel when mixed with the milk, which holds the gas from the yeast and lets the dough be rolled out without cracking. The dough will be softer and stickier than a wheat dough. Dust it lightly and roll between sheets of baking paper if it clings.\n\n**Do not skip the second rise.** The cut rolls need 30 minutes to puff up and fill the tin; skipping it gives dense, tight spirals. Bake until the tops are golden and the centre roll feels springy, then ice while they are still warm so the topping softens into the crevices.\n\nIf the rolls start to brown too fast, cover the tin loosely with foil.',
    ing: [
      '400 g gluten-free flour blend with xanthan gum',
      '10 g psyllium husk powder',
      '7 g fast action yeast',
      '50 g caster sugar',
      '1/2 tsp salt',
      '250 ml whole milk, warm',
      '60 g butter, melted',
      '1 egg',
      '50 g butter, softened, for the filling',
      '80 g light brown sugar',
      '2 tbsp ground cinnamon',
      '100 g icing sugar',
      '100 g cream cheese',
      '1 tbsp whole milk'
    ],
    st: [
      'Mix the flour, psyllium husk, yeast, caster sugar and salt in a large bowl. Add the warm milk, melted butter and egg and beat to a soft, sticky dough.',
      'Cover and leave to rise for 1 hour until puffy.',
      'Roll the dough out on a floured sheet of baking paper into a rectangle about 30 x 40 cm. Spread with the softened butter and scatter over the brown sugar and cinnamon.',
      'Roll up from the long edge and cut into 9 slices. Place cut side up in a lined 23 cm square tin and leave to rise for 30 minutes.',
      'Heat the oven to 180C. Bake for 25 minutes until golden.',
      'Beat the icing sugar, cream cheese and milk until smooth. Spread over the warm rolls.'
    ],
    tips: [
      'Roll the dough on baking paper if it is sticky.',
      'Use a length of thread to cut the roll cleanly.',
      'Ice the rolls while they are warm, not hot.'
    ],
    pair: ['Hot coffee', 'Fresh berries', 'Warm milk'],
    store: 'Keeps for 2 days covered. Warm for 15 seconds in the microwave before eating.',
    rest: [90, 'Rising'],
    nut: [424, 7, 63, 16, 3, 27, 190]
  },

  'gluten-free-crackers': {
    d: 'Thin, crisp rosemary and sesame crackers made from a gluten-free flour blend and olive oil, baked for 20 minutes at 180C.',
    meta: 'Gluten-free crackers with rosemary and sesame, baked for 20 minutes at 180C. Makes about 40, ready in 35 minutes.',
    kw: ['gluten free crackers', 'homemade crackers without wheat', 'rosemary sesame crackers', 'gluten free cheese board crackers', 'baked gluten free crackers'],
    why: 'For a cheese board, a batch of home-made crackers is made in the time it takes the oven to heat. This one is flour, oil, water and seasoning, so there is nothing in the cupboard that has to be bought specially except the flour blend.\n\nThe point is thinness. A cracker rolled to 2 mm snaps; one rolled to 5 mm is a biscuit. **Roll between two sheets of baking paper** so the dough does not stick and does not need extra flour, which would toughen it. Score the sheet into squares before baking, then break along the lines when cool.\n\nWatch the edges. They brown first and the middle lags behind, so if the tray has darker rims after 15 minutes, pull the outer crackers off and give the rest a few minutes more. Crackers crisp further as they cool, so if one is a little soft straight from the oven, wait.',
    ing: [
      '150 g gluten-free flour blend',
      '3 tbsp olive oil',
      '80 ml cold water',
      '2 tbsp sesame seeds',
      '1 tsp dried rosemary',
      '1/2 tsp salt',
      '1 tsp flaky sea salt, to finish'
    ],
    st: [
      'Heat the oven to 180C. Mix the flour, sesame seeds, rosemary and salt in a bowl.',
      'Add the oil and water and mix to a firm dough.',
      'Roll the dough between two sheets of baking paper to 2 mm thick. Peel off the top sheet and score into 4 cm squares with a knife.',
      'Slide the paper onto a tray, sprinkle with the flaky salt and bake for 20 minutes until golden at the edges.',
      'Cool on the tray, then snap along the lines.'
    ],
    tips: [
      'Roll as thin as you can.',
      'If the edges brown first, remove those and bake the rest for a few minutes more.',
      'Cool completely on the tray; they crisp as they cool.'
    ],
    pair: ['Hard cheese', 'Hummus', 'Smoked salmon', 'Soup'],
    store: 'Keeps for 1 week in an airtight tin.',
    nut: [122, 2, 15, 6, 1, 0, 440]
  },

  'gluten-free-crepes': {
    d: 'Thin, flexible French-style crepes made from a gluten-free flour batter, rested for 30 minutes and cooked in a hot pan.',
    meta: 'Gluten-free crepes from a rested batter, cooked for 15 minutes in a hot pan. Four servings, ready in 25 minutes plus 30 minutes of resting.',
    kw: ['gluten free crepes', 'gluten free thin pancakes', 'crepes without wheat flour', 'gluten free crepes with lemon and sugar', 'french style gluten free pancakes'],
    why: 'Why do gluten-free crepes tear when wheat ones fold so easily? Gluten gives a batter its stretch, and without it the thin sheet is brittle. The fix is a looser batter, a rested batter, and a pan that is hot but not smoking.\n\nResting does the heavy lifting. The flour absorbs the milk over **30 minutes**, so the batter loses its grittiness and the crepes cook up smooth. A batter that is made and used at once gives lacy holes and rips when flipped. If the batter thickens in the bowl, whisk in a splash of milk until it coats the back of a spoon like single cream.\n\nUse a non-stick pan and a little butter on a paper towel to grease it between crepes. Pour a small ladle in, tilt to spread, and flip when the edges lift and the surface looks matt. They need only about a minute on each side. The first one is usually a test, so do not judge the batter by it.',
    ing: [
      '120 g gluten-free flour blend',
      '2 eggs',
      '300 ml whole milk',
      '20 g butter, melted, plus extra for the pan',
      '1 tbsp caster sugar',
      '1 pinch salt',
      '1 lemon, juiced',
      '2 tbsp caster sugar, to serve'
    ],
    st: [
      'Whisk the flour, sugar and salt with the eggs and half the milk until smooth. Whisk in the remaining milk and the melted butter.',
      'Rest the batter for 30 minutes at room temperature.',
      'Heat a non-stick frying pan over medium heat and grease lightly with butter.',
      'Pour in a small ladle of batter, tilt to coat the pan thinly and cook for 1 minute until the edges lift. Flip and cook for 30 seconds.',
      'Repeat with the rest of the batter, stacking the crepes on a plate. Serve with the lemon juice and sugar.'
    ],
    tips: [
      'Rest the batter, or the crepes tear.',
      'Thin the batter with milk if it is thicker than single cream.',
      'Grease the pan lightly between crepes, not every time.'
    ],
    pair: ['Lemon and sugar', 'Maple syrup', 'Berries', 'Chocolate spread'],
    store: 'Keeps for 2 days layered with paper in the fridge. Reheat in a dry pan.',
    nut: [265, 9, 37, 9, 1, 14, 100]
  },

  'gluten-free-dumplings': {
    d: 'Fluffy gluten-free dumplings steamed on top of a chicken and vegetable stew, ready in 40 minutes.',
    meta: 'Gluten-free dumplings steamed on a chicken and vegetable stew, cooked for 20 minutes. Six servings, ready in 40 minutes.',
    kw: ['gluten free dumplings', 'gluten free chicken and dumplings', 'dumplings for stew without wheat', 'gluten free stew dumplings', 'gluten free comfort food'],
    why: 'This is what to make when the weather turns and a plain pot of stew needs something to soak it up. Dumplings sit on the surface of the stew and steam in its heat, so they come out light on top and soft underneath.\n\nGrated cold butter stands in for the suet of a traditional dumpling. It melts as the dumplings cook, leaving tiny pockets that make the crumb open. Baking powder lifts the dough as it steams. **Keep the lid on for the full 12 minutes**, because lifting it lets the steam out and the tops stay raw.\n\nThe stew underneath should be at a gentle simmer, and there should be enough liquid to come about halfway up the dumplings. If it looks too thick, add a splash of stock before the dumplings go in. Spoon the dough on in rough mounds rather than shaping them; smooth balls cook up dense.',
    ing: [
      '2 tbsp rapeseed oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, sliced',
      '300 g cooked chicken, shredded',
      '700 ml gluten-free chicken stock',
      '150 g gluten-free flour blend',
      '2 tsp baking powder',
      '60 g butter, cold, grated',
      '2 tbsp parsley, chopped',
      '80 ml cold water',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onion, carrots and celery for 8 minutes until soft.',
      'Add the chicken and stock, bring to a simmer and cook for 5 minutes.',
      'Mix the flour, baking powder, butter, parsley and salt in a bowl, then stir in the water to a soft dough.',
      'Drop spoonfuls of dough onto the simmering stew, cover with a lid and cook for 12 minutes without lifting the lid, until puffed and cooked through.',
      'Serve in bowls with the stew spooned around the dumplings.'
    ],
    tips: [
      'Keep the lid on while the dumplings cook.',
      'Spoon the dough on loosely; do not roll it into balls.',
      'If the stew is thick, thin it with stock before the dumplings go on.'
    ],
    pair: ['Peas', 'Crusty gluten-free bread', 'Steamed cabbage'],
    store: 'Keeps for 2 days in the fridge. Reheat gently with a splash of stock.',
    nut: [325, 18, 25, 17, 2, 2, 810]
  },

  'gluten-free-fried-chicken': {
    d: 'Boneless chicken thighs soaked in buttermilk and coated in a seasoned gluten-free flour crust, shallow fried for 25 minutes.',
    meta: 'Gluten-free fried chicken in a buttermilk and seasoned flour crust, cooked for 25 minutes. Four servings, ready in 1 hour.',
    kw: ['gluten free fried chicken', 'buttermilk fried chicken without wheat', 'crispy gluten free chicken thighs', 'gluten free southern fried chicken', 'shallow fried chicken thighs'],
    why: 'It looks like a battered chicken and cooks like a roast, which is why the oil has to be hotter than you expect and the chicken has to be given room. Fried chicken is a simple method: a soak, a dredge and hot oil. Gluten-free flour does the dredging well, as long as it is seasoned properly.\n\nThe buttermilk does two jobs. Its acidity makes the meat tender, and its thickness gives the flour something to cling to. Leave the chicken in it for at least 15 minutes. Shake off the excess before dredging so the coating is thin and crisp rather than thick and pasty. A little cornflour in the blend improves the crunch.\n\n**Fry in batches and keep the oil near 170C.** Too hot and the crust burns before the chicken cooks; too cool and it soaks up oil. Thighs are forgiving, but cut the thick ones in half so they cook in the same time. Drain on a rack, not on paper, so the underside stays crisp.',
    ing: [
      '700 g boneless chicken thighs, halved',
      '200 ml buttermilk',
      '100 g gluten-free flour blend',
      '30 g cornflour',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '300 ml rapeseed oil, for shallow frying'
    ],
    st: [
      'Put the chicken in a bowl with the buttermilk and half the salt and leave for 15 minutes.',
      'Mix the flour, cornflour, paprika, garlic powder, the remaining salt and the pepper in a shallow dish.',
      'Heat the oil in a wide, deep pan to 170C.',
      'Lift each piece out of the buttermilk, let the excess drip off and press into the flour mix to coat well.',
      'Fry in batches for 12 minutes, turning once, until deep golden and the juices run clear.',
      'Drain on a wire rack for 5 minutes before serving.'
    ],
    tips: [
      'Keep the oil at 170C; use a thermometer if you have one.',
      'Do not crowd the pan or the temperature will drop.',
      'Drain on a rack to keep the underside crisp.'
    ],
    pair: ['Coleslaw', 'Corn on the cob', 'Mashed potatoes', 'Hot sauce'],
    store: 'Keeps for 2 days in the fridge. Reheat on a rack at 200C for 12 minutes.',
    nut: [978, 39, 30, 78, 1, 3, 800]
  },

  'gluten-free-gnocchi': {
    d: 'Soft potato gnocchi bound with gluten-free flour and an egg, boiled for 3 minutes and finished in sage butter.',
    meta: 'Gluten-free potato gnocchi with sage butter, cooked for 30 minutes. Four servings, ready in 1 hour.',
    kw: ['gluten free gnocchi', 'potato gnocchi without wheat', 'homemade gluten free gnocchi', 'gnocchi with sage butter', 'gluten free italian pasta'],
    why: 'Why does gnocchi turn out heavy? Almost always because the dough was handled too much, or the potatoes were wet. Gnocchi is the easiest pasta to make gluten-free because the potato does most of the work, and the flour only needs to bind it.\n\nUse floury potatoes such as Maris Piper or Russet, boiled whole in their skins so they do not take on water. Peel them while hot and press through a ricer or mash until completely smooth. **Let the potato steam off for 5 minutes** before mixing, since steam is water and water means extra flour and a tougher gnocchi.\n\nMix the flour and egg in with your hands until the dough just holds together. It should be soft and slightly tacky, not stiff. Roll into ropes, cut into pieces of about 2 cm and mark with a fork if you like. Test one in boiling water; if it falls apart, work in a spoonful more flour. They are done a minute after they float.',
    ing: [
      '800 g floury potatoes, unpeeled',
      '120 g gluten-free flour blend',
      '1 egg yolk',
      '1/2 tsp salt',
      '1 pinch nutmeg',
      '40 g butter',
      '8 sage leaves',
      '30 g parmesan, grated'
    ],
    st: [
      'Boil the whole potatoes in salted water for 25 minutes until tender. Drain, peel while hot and mash until completely smooth.',
      'Spread the mash on a tray and leave to steam off for 5 minutes.',
      'Mix in the flour, egg yolk, salt and nutmeg to a soft dough. Do not knead.',
      'Roll into ropes, cut into 2 cm pieces and mark with a fork.',
      'Boil in batches in salted water for 3 minutes, until they float.',
      'Melt the butter with the sage in a wide pan, add the gnocchi and toss for 1 minute. Serve with the parmesan.'
    ],
    tips: [
      'Boil the potatoes whole, in their skins.',
      'Test one gnocchi in boiling water before shaping the rest.',
      'Handle the dough lightly for a soft gnocchi.'
    ],
    pair: ['Green salad', 'Roasted tomatoes', 'Tomato sauce', 'Grilled chicken'],
    store: 'Shape and freeze raw on a tray, then bag. Cook from frozen for 4 minutes.',
    nut: [380, 11, 57, 12, 5, 2, 440]
  },

  'gluten-free-gravy': {
    d: 'A smooth brown gravy thickened with cornflour instead of wheat flour, ready in 15 minutes.',
    meta: 'Gluten-free gravy thickened with cornflour and flavoured with onion and tamari, cooked for 10 minutes. Six servings, ready in 15 minutes.',
    kw: ['gluten free gravy', 'cornflour gravy', 'gravy without wheat flour', 'gluten free roast dinner gravy', 'brown onion gravy'],
    why: 'Most home versions come out thin or lumpy, and the fix is to mix the cornflour with cold water before it goes near the pan. Cornflour clumps instantly in a hot liquid, so it has to be dissolved first, then stirred in.\n\nThe flavour comes from the onion, cooked slowly in butter until it is deep golden, and from the stock. A spoonful of tamari adds savoury depth and colour without the wheat found in soy sauce. Check that the stock is labelled gluten-free, since many stock cubes contain wheat.\n\n**Add the cornflour mix off the boil.** Pour it in a stream while stirring, then return to a simmer. Cornflour thickens at the point the liquid bubbles and goes glossy, within a minute or so. It does not need long cooking, and it will keep thickening a little as it sits, so stop when it coats the back of a spoon with room to spare.',
    ing: [
      '30 g butter',
      '1 onion, finely diced',
      '500 ml gluten-free beef stock',
      '1 tsp tamari',
      '20 g cornflour',
      '3 tbsp cold water',
      '1/4 tsp black pepper'
    ],
    st: [
      'Melt the butter in a pan and cook the onion for 6 minutes until deep golden.',
      'Add the stock and tamari, bring to a simmer and cook for 4 minutes.',
      'Mix the cornflour with the cold water until smooth.',
      'Take the pan off the heat, stir in the cornflour mix, then return to a simmer, stirring, until glossy and thick.',
      'Season with the pepper and taste for salt.'
    ],
    tips: [
      'Always dissolve cornflour in cold water first.',
      'If the gravy is too thin, add another teaspoon of cornflour mixed with water.',
      'Check the stock label for gluten.'
    ],
    pair: ['Roast chicken', 'Mashed potatoes', 'Sausages', 'Yorkshire puddings'],
    store: 'Keeps for 3 days in the fridge. Reheat gently and add a splash of water.',
    nut: [60, 1, 5, 4, 0, 1, 330]
  },

  'gluten-free-lasagna': {
    d: 'Layers of beef ragu, white sauce thickened with cornflour and gluten-free pasta sheets, baked for 40 minutes at 190C.',
    meta: 'Gluten-free lasagna with beef ragu and cornflour white sauce, cooked for 50 minutes. Eight servings, ready in 1 hour 20 minutes.',
    kw: ['gluten free lasagna', 'gluten free lasagne with beef', 'lasagna without wheat', 'cornflour white sauce lasagna', 'gluten free pasta bake'],
    why: 'Gluten-free lasagna fails when the sheets turn to paste, and the cure is more liquid than you would use for the wheat version, not less. Gluten-free sheets drink up the sauce as they bake, so the ragu should be looser than feels right.\n\nThe white sauce is thickened with cornflour instead of a flour roux. It is quicker, smoother and cannot go lumpy if the cornflour is mixed with a little cold milk first. **Cover the dish with foil for the first 25 minutes** so the sheets steam rather than dry out, then uncover to brown the cheese.\n\nLeave the lasagna to sit for 15 minutes after it comes out of the oven. This sets the layers so they slice cleanly instead of sliding apart. If you use no-boil gluten-free sheets, check the packet, since some brands do need pre-soaking. Layer thin, with sauce reaching right to the corners. Dry corners are where sheets stay hard, so spread the ragu and white sauce right to the edge of the dish each time.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 garlic cloves, crushed',
      '500 g beef mince',
      '500 g passata',
      '1 tsp dried oregano',
      '600 ml whole milk',
      '40 g butter',
      '40 g cornflour',
      '250 g lasagne sheets made from rice or corn',
      '125 g mozzarella, grated',
      '30 g parmesan, grated',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a pan and cook the onion for 5 minutes. Add the garlic and mince and cook for 5 minutes until browned.',
      'Add the passata, oregano and half the salt and simmer for 10 minutes. The sauce should be fairly loose.',
      'Melt the butter in a pan, stir in the cornflour, then whisk in the milk a little at a time. Simmer, whisking, for 5 minutes until thick. Season with the remaining salt.',
      'Heat the oven to 190C. In a large dish layer ragu, pasta sheets and white sauce, ending with white sauce. Scatter with the cheeses.',
      'Cover with foil and bake for 25 minutes, then uncover and bake for 15 minutes until golden.',
      'Rest for 15 minutes before cutting.'
    ],
    tips: [
      'Keep the ragu looser than usual; the sheets absorb liquid.',
      'Cover with foil for the first part of baking.',
      'Rest the lasagna for 15 minutes before slicing.'
    ],
    pair: ['Green salad', 'Garlic bread made with gluten-free loaf', 'Steamed greens'],
    store: 'Keeps for 3 days in the fridge. Freeze portions for 2 months.',
    nut: [451, 24, 37, 23, 2, 8, 590]
  },

  'gluten-free-mac-and-cheese': {
    d: 'Gluten-free macaroni in a cheddar sauce thickened with cornflour, boiled and stirred together in 30 minutes.',
    meta: 'Gluten-free mac and cheese with a smooth cheddar sauce, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['gluten free mac and cheese', 'gluten free macaroni cheese', 'cornflour cheese sauce', 'gluten free pasta with cheddar sauce', 'gluten free dinner for kids'],
    why: 'Take the pasta out of the water a minute before the packet says. Gluten-free pasta goes from just right to mushy very quickly, and it keeps cooking in the hot sauce.\n\nThe sauce starts as a thin white sauce, thickened with cornflour. Cornflour makes a glossy, smooth sauce that does not turn grainy when reheated, which is a common problem with flour-based sauces on gluten-free pasta. Whisk the cornflour into the melted butter, then add the milk a little at a time.\n\n**Take the pan off the heat before adding the cheese.** Cheese that is boiled turns stringy and oily. Stir it in a handful at a time and let the residual heat melt it. A teaspoon of mustard powder sharpens the flavour without tasting of mustard. If the sauce tightens when the pasta goes in, loosen it with a splash of the pasta water, which carries starch that helps it cling.',
    ing: [
      '300 g macaroni made from rice or corn',
      '40 g butter',
      '30 g cornflour',
      '500 ml whole milk',
      '200 g mature cheddar, grated',
      '1 tsp mustard powder',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the macaroni in salted water for 1 minute less than the packet says. Drain, keeping a mugful of the water.',
      'Melt the butter in a large pan, whisk in the cornflour and mustard powder, then whisk in the milk a little at a time.',
      'Simmer, stirring, for 5 minutes until the sauce coats the back of a spoon.',
      'Take the pan off the heat and stir in the cheddar until melted.',
      'Fold in the macaroni, loosening with a splash of the pasta water if needed. Serve at once.'
    ],
    tips: [
      'Under-cook the pasta by a minute.',
      'Add the cheese off the heat.',
      'Keep some pasta water to loosen the sauce.'
    ],
    pair: ['Steamed broccoli', 'Green salad', 'Crispy bacon'],
    store: 'Keeps for 2 days in the fridge. Reheat with a splash of milk.',
    nut: [658, 27, 70, 30, 3, 9, 680]
  },

  'gluten-free-meatballs': {
    d: 'Beef meatballs bound with gluten-free breadcrumbs and egg, browned and simmered in tomato passata for 25 minutes.',
    meta: 'Gluten-free meatballs simmered in tomato passata, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['gluten free meatballs', 'meatballs in tomato sauce', 'gluten free beef meatballs', 'meatballs without wheat breadcrumbs', 'gluten free spaghetti and meatballs'],
    why: 'Keep the mixture loose. That is most of the recipe, and the part people skip. Meatballs that are squeezed hard turn out dense and rubbery, because pressing the meat tightens the proteins.\n\nThe breadcrumbs are soaked in milk first, which makes a soft paste that holds moisture in the meat as it cooks. Gluten-free crumbs soak up more liquid than wheat ones, so do not drain them. Grated onion melts into the mixture rather than leaving crunchy bits. **Wet your hands before rolling** so the mince does not stick, and aim for balls of about 4 cm.\n\nBrown them in a pan first, since the browned surface adds flavour to the sauce, then finish them in the passata. They are cooked when the centre is no longer pink and the sauce has thickened slightly. Serve over gluten-free spaghetti, polenta or mash. Meatballs also freeze well in the sauce, so doubling the batch costs little extra effort.',
    ing: [
      '500 g beef mince',
      '40 g gluten-free breadcrumbs',
      '3 tbsp whole milk',
      '1 egg',
      '1 onion, grated',
      '2 garlic cloves, crushed',
      '2 tbsp parsley, chopped',
      '1 tsp salt',
      '1 tbsp olive oil',
      '500 g passata',
      '1 tsp dried oregano'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 5 minutes.',
      'Mix the mince, soaked crumbs, egg, onion, garlic, parsley and half the salt with your hands until just combined. Roll into 16 balls.',
      'Heat the oil in a wide pan and brown the meatballs for 8 minutes, turning, then pour in the passata and add the oregano and remaining salt.',
      'Cover and simmer for 12 minutes until the meatballs are cooked through and the sauce has thickened.',
      'Serve with the sauce spooned over.'
    ],
    tips: [
      'Mix lightly; overworked meat is tough.',
      'Wet your hands when rolling.',
      'Brown the meatballs before adding the sauce.'
    ],
    pair: ['Gluten-free spaghetti', 'Mashed potatoes', 'Polenta', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Freeze in the sauce for 2 months.',
    nut: [400, 29, 17, 24, 3, 8, 890]
  },

  'gluten-free-meatloaf': {
    d: 'A beef meatloaf bound with gluten-free breadcrumbs and glazed with ketchup, baked for 55 minutes at 180C.',
    meta: 'Gluten-free meatloaf with a ketchup glaze, cooked for 55 minutes at 180C. Six servings, ready in 1 hour 10 minutes.',
    kw: ['gluten free meatloaf', 'beef meatloaf without wheat', 'meatloaf with ketchup glaze', 'gluten free comfort food dinner', 'baked meatloaf'],
    why: 'A cold evening and a hot oven call for meatloaf, a loaf of seasoned mince that bakes into something sliceable and savoury. It is one of the more forgiving gluten-free dinners, since the usual binder, breadcrumbs, swaps one for one.\n\nSoak the crumbs in milk before mixing so they hold moisture. Dry crumbs pull juice out of the meat and make the loaf crumble. Add the egg for structure and the grated onion for sweetness. **Mix with a light hand**, only until the ingredients come together, because pressing the meat makes it dense.\n\nShape the mixture into a loaf on a lined tray rather than in a tin, so the fat can run off and the sides brown. The glaze goes on twice: half at the start and the rest for the last 15 minutes, which keeps it from catching. Rest the loaf for 10 minutes before slicing; this lets the juices settle and gives clean slices.',
    ing: [
      '700 g beef mince',
      '60 g gluten-free breadcrumbs',
      '100 ml whole milk',
      '2 eggs',
      '1 onion, grated',
      '2 garlic cloves, crushed',
      '1 tsp tamari',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '60 g ketchup, for the glaze'
    ],
    st: [
      'Heat the oven to 180C and line a tray. Soak the breadcrumbs in the milk for 5 minutes.',
      'Mix the mince, crumbs, eggs, onion, garlic, tamari, salt and pepper until just combined.',
      'Shape into a loaf about 22 cm long on the tray. Brush with half the ketchup.',
      'Bake for 40 minutes, brush with the remaining ketchup and bake for 15 minutes more until the centre reaches 70C.',
      'Rest for 10 minutes before slicing.'
    ],
    tips: [
      'Soak the crumbs in the milk first.',
      'Add the glaze in two layers.',
      'Rest the loaf before slicing.'
    ],
    pair: ['Mashed potatoes', 'Green beans', 'Roasted carrots', 'Gravy'],
    store: 'Keeps for 3 days in the fridge. Slices reheat well in a pan.',
    nut: [340, 27, 13, 20, 1, 4, 710]
  }
};
