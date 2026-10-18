'use strict';

/**
 * Volume fifty-one — the Americas, the Caribbean and the Pacific, fourth part.
 *
 * Twenty-five dishes: Creole okra and tomatoes, collard greens, tomato pie,
 * burgoo, three pickles, Frogmore stew, Charleston red rice and crawfish pie
 * from the American South; champurrado, atole, Mexican chocolate cake,
 * capirotada, flan de coco, cajeta, buñuelos, tres leches cupcakes, huevos
 * divorciados and salsa macha from Mexico; Brazilian pudim de leite and
 * romeu e julieta; and an Australian steak and cheese pie with two New
 * Zealand mussel dishes. Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'creole-okra-and-tomatoes': {
    d: 'Okra simmered with tomatoes, onion, green pepper and Creole spice until tender, with the sauce kept thick and free of sliminess.',
    meta: 'Creole okra and tomatoes: okra simmered with tomatoes, onion, green pepper and Creole spice until tender and not slimy. Four servings, cooked for 25 minutes.',
    kw: ['creole okra and tomatoes', 'okra and tomatoes recipe', 'southern okra and tomatoes', 'creole okra recipe', 'stewed okra with tomatoes'],
    why: 'Fry the okra first, in a hot pan, before it meets any liquid. The slime that puts people off okra comes from a gel inside the pods, and searing them in oil sets the surface and breaks the gel down, so what reaches the tomatoes is tender, not stringy.\n\nCreole cooking starts with onion, green pepper and celery softened in fat, and this dish follows that base. Tomatoes go in next, with garlic, thyme, cayenne and a bay leaf, and the whole lot is left to bubble until the juices thicken into a sauce that clings.\n\n**Leave the pods whole or cut them into thick rounds**, and do not stir more than you need. Constant stirring breaks them up and releases more gel. A splash of vinegar at the end brightens the sauce and helps keep the texture clean. Serve over rice, or as a side to fried fish or pork.',
    ing: [
      '400 g okra, trimmed and cut into 2 cm rounds',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '1 green pepper, about 150 g, chopped',
      '1 celery stick, chopped',
      '3 garlic cloves, crushed',
      '400 g tinned chopped tomatoes',
      '1 bay leaf',
      '1 tsp dried thyme',
      '1/2 tsp cayenne pepper',
      '1 tsp cider vinegar',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a wide pan over high heat. Fry the okra for 5 minutes until browned at the edges, then lift out onto a plate.',
      'Lower the heat to medium and cook the onion, green pepper and celery for 6 minutes until soft. Add the garlic and cook for 1 minute.',
      'Add the tomatoes, bay leaf, thyme, cayenne and salt. Simmer for 8 minutes.',
      'Return the okra to the pan and simmer for 5 minutes until tender and the sauce is thick. Stir in the vinegar and remove the bay leaf.'
    ],
    tips: [
      'Dry the okra thoroughly after washing; wet pods steam instead of frying.',
      'Do not stir more than you must, or the pods break and turn slimy.',
      'Taste the sauce before the okra goes back and adjust the salt and heat.'
    ],
    pair: ['Steamed rice', 'Fried catfish', 'Cornbread', 'Smoked sausage'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [160, 4, 18, 8, 6, 7, 320]
  },

  'collard-greens-with-ham-hock': {
    d: 'Collard greens simmered for two hours with a smoked ham hock, onion and a splash of vinegar until silky, with a rich, savoury broth.',
    meta: 'Collard greens with ham hock: greens simmered for two hours with smoked ham, onion and vinegar until silky. Six servings, cooked for 120 minutes.',
    kw: ['collard greens with ham hock', 'southern collard greens', 'collard greens recipe', 'slow simmered collards with smoked ham hock', 'collard greens with pot likker'],
    why: 'The first sign they are ready is the smell: smoke and onion drifting from the pot long before the greens are done. Collard greens are a tough, leathery leaf, and the long simmer in a smoked ham hock broth is what turns them from bitter to sweet and silky.\n\nThe broth is the other half of the dish. The ham hock gives up its smoke and its gelatin, the onion adds sweetness, and the liquid that is left at the bottom of the pot is called pot likker, which is traditionally sopped up with cornbread. A teaspoon of sugar and a splash of cider vinegar balance the bitterness.\n\n**Strip the leaves from the thick stems** and cut them into wide ribbons, then wash them well; collards hold grit. Cook them covered at a low simmer, stirring now and then. They are ready when a leaf can be cut with the side of a spoon.',
    ing: [
      '1 kg collard greens',
      '500 g smoked ham hock',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1.2 litres water',
      '2 tbsp cider vinegar',
      '1 tsp sugar',
      '1/2 tsp crushed chilli flakes',
      '1/2 tsp ground black pepper',
      '1/2 tsp salt'
    ],
    st: [
      'Put the ham hock, onion, garlic, water, chilli flakes and pepper in a large pot. Bring to a boil, then simmer for 30 minutes.',
      'Strip the collard leaves from the stems, stack and cut into 3 cm ribbons, then wash in several changes of water.',
      'Add the greens to the pot in batches, pressing them down as they wilt. Add the vinegar, sugar and salt.',
      'Cover and simmer for 90 minutes until the greens are silky. Lift out the hock, shred the meat, discard the bone and skin and return the meat to the pot.'
    ],
    tips: [
      'Wash the leaves in several changes of water; collards hide grit.',
      'Taste the broth near the end; the ham hock is salty, so add salt last.',
      'Keep the heat low; a hard boil makes the greens stringy.'
    ],
    pair: ['Cornbread', 'Black-eyed peas', 'Fried chicken', 'Hot pepper vinegar'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months. The flavour improves overnight.',
    nut: [217, 22, 12, 9, 7, 2, 1060]
  },

  'southern-tomato-pie': {
    d: 'A baked shortcrust shell layered with salted ripe tomatoes, a mayonnaise and cheddar topping and fresh basil.',
    meta: 'Southern tomato pie: a baked shortcrust shell layered with salted ripe tomatoes, basil and a mayonnaise and cheddar topping. Six servings, cooked for 35 minutes.',
    kw: ['southern tomato pie', 'tomato pie recipe', 'tomato pie with cheddar and mayonnaise', 'summer tomato pie', 'tomato and basil pie'],
    why: 'This is what to make when the tomatoes are at their best, in the height of summer, and you have more than you can eat raw. A tomato pie asks for ripe, juicy fruit and does very little to them, which is why it only works when the tomatoes taste of something.\n\nThe trick is to draw out the water. Sliced tomatoes are salted and left to drain on kitchen paper for 30 minutes, which removes enough liquid to keep the pastry crisp. A wet pie is a sad pie. The crust is blind baked first for the same reason.\n\nThe topping is the Southern signature: mayonnaise mixed with grated cheddar, spread thickly over the tomatoes, which browns in the heat into a savoury crust. **Let the pie stand for 15 minutes** before cutting so the juices settle. Eat it warm or at room temperature, never straight from the oven.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '800 g ripe tomatoes, sliced 1 cm thick',
      '1 tsp salt',
      '150 g mature cheddar, grated',
      '120 g mayonnaise',
      '1 spring onion, thinly sliced',
      '15 g fresh basil leaves',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Lay the tomato slices on kitchen paper, sprinkle with the salt and leave for 30 minutes. Pat dry.',
      'Heat the oven to 200°C. Roll out the pastry and line a 23 cm pie dish. Prick the base and blind bake with baking paper and beans for 15 minutes. Remove the paper and beans and bake for 5 minutes more.',
      'Layer the tomatoes and basil in the case and season with pepper.',
      'Mix the cheddar, mayonnaise and spring onion and spread over the top. Bake for 15 minutes until golden and bubbling. Stand for 15 minutes before cutting.'
    ],
    tips: [
      'Choose tomatoes that are ripe but firm.',
      'Pat the slices very dry after salting, or the pastry goes soft.',
      'If the edges brown too fast, cover them with strips of foil.'
    ],
    pair: ['Green salad', 'Fried chicken', 'Iced tea', 'Sliced cucumber'],
    store: 'Keeps in the fridge for 2 days. Reheat slices in a hot oven.',
    nut: [502, 11, 29, 38, 3, 5, 1000]
  },

  'kentucky-burgoo': {
    d: 'A thick Kentucky stew of chicken, pork and beef simmered with potatoes, corn, tomatoes and beans, finished with a splash of Worcestershire sauce.',
    meta: 'Kentucky burgoo: a thick stew of chicken, pork and beef simmered with potatoes, corn, tomatoes and beans for four hours. Ten servings, cooked for 240 minutes.',
    kw: ['kentucky burgoo', 'burgoo recipe', 'kentucky burgoo stew', 'three meat stew with corn and tomatoes', 'burgoo for a crowd'],
    why: 'Chicken, pork, beef, and a very big pot. Burgoo is a Kentucky stew built to feed a crowd, and the list of meats is deliberately mixed: chicken for lightness, pork for sweetness, beef for body. Together they make a broth that tastes deeper than any one of them would.\n\nThe vegetables go in at different stages. Onion, carrot and potato start the pot, tomatoes and corn follow, and the cabbage and beans arrive near the end. After four hours the meat has fallen apart and the potatoes have broken down and thickened the whole thing to a stew that stands a spoon.\n\n**Skim the fat off the surface** as the pot simmers, and stir from the bottom every so often so nothing catches. Worcestershire sauce, hot sauce and a little vinegar added at the end sharpen the richness. Burgoo is better the next day, and it is traditionally served with cornbread or crackers.',
    ing: [
      '500 g chicken thighs, on the bone',
      '500 g pork shoulder, cut into 4 cm chunks',
      '500 g beef shin, cut into 4 cm chunks',
      '2.5 litres water',
      '3 onions, chopped',
      '3 carrots, about 300 g, diced',
      '600 g potatoes, peeled and diced',
      '400 g tinned chopped tomatoes',
      '300 g sweetcorn kernels',
      '200 g green cabbage, shredded',
      '200 g lima beans',
      '3 tbsp Worcestershire sauce',
      '1 tbsp cider vinegar',
      '1 tsp hot pepper sauce',
      '2 tsp salt',
      '1 tsp ground black pepper'
    ],
    st: [
      'Put the chicken, pork, beef and water in a very large pot. Bring to a boil, skim, then simmer gently for 90 minutes.',
      'Lift out the chicken, remove the skin and bones and shred the meat. Return it to the pot.',
      'Add the onions, carrots, potatoes, tomatoes, salt and pepper and simmer for 90 minutes, stirring from the bottom now and then.',
      'Add the sweetcorn, cabbage and lima beans and simmer for 60 minutes until the stew is thick. Stir in the Worcestershire sauce, vinegar and hot sauce.'
    ],
    tips: [
      'Use a pot with a heavy base so the stew does not catch.',
      'Skim the fat from the top as it rises.',
      'Add water a cupful at a time if the stew reduces too far.'
    ],
    pair: ['Cornbread', 'Saltine crackers', 'Hot sauce', 'Coleslaw'],
    store: 'Keeps in the fridge for 5 days and freezes for up to 3 months. Better the next day.',
    nut: [397, 33, 28, 17, 5, 6, 720]
  },

  'pickled-okra': {
    d: 'Small okra pods pickled whole in a garlic, dill and chilli vinegar brine, crisp and tangy after a day in the jar.',
    meta: 'Pickled okra: small whole pods in a garlic, dill and chilli vinegar brine, crisp and tangy after a day in the jar. Eight servings, 24 hours standing.',
    kw: ['pickled okra', 'southern pickled okra', 'pickled okra recipe', 'okra pickles with dill and garlic', 'spicy pickled okra'],
    why: 'In the summer, when the okra comes in faster than you can eat it, pickling is how the Southern kitchen puts it by. The pods keep their crunch in a hot brine, and the dill, garlic and chilli give a sour, hot, savoury pickle that goes with everything from sandwiches to cocktails.\n\nChoose small pods, no longer than 8 cm, which are tender and have little fibre. Leave them whole with the cap trimmed, not cut off, so the brine cannot get inside and turn the centres soft. Pack them upright in the jar and add the garlic, dill and peppercorns before pouring the brine over.\n\n**Pour the brine boiling hot** so it flows around the pods and fills every gap. Cool the jar to room temperature, then close the lid and chill. The pickle is ready after 24 hours but keeps improving for days. Serve the spears cold, straight from the jar, with sandwiches, cheese or a drink.',
    ing: [
      '400 g small okra pods',
      '400 ml white wine vinegar',
      '400 ml water',
      '2 tbsp sea salt',
      '1 tbsp sugar',
      '4 garlic cloves, peeled',
      '4 sprigs fresh dill',
      '1 tsp black peppercorns',
      '1 tsp mustard seeds',
      '1 dried red chilli'
    ],
    st: [
      'Wash the okra and trim the stem ends without cutting into the pods. Pack them upright into a clean 1 litre jar with the garlic, dill, peppercorns, mustard seeds and chilli.',
      'Bring the vinegar, water, salt and sugar to a boil in a pan and stir until the salt dissolves. Boil for 2 minutes.',
      'Pour the hot brine over the okra to cover. Cool to room temperature, seal and refrigerate for 24 hours before eating.'
    ],
    tips: [
      'Choose pods of the same size so they pickle evenly.',
      'Use a clean, hot jar to keep the pickle fresh.',
      'Make sure the okra stays below the surface of the brine.'
    ],
    pair: ['Cheese board', 'Fried chicken', 'Bloody Mary', 'Sandwiches'],
    store: 'Keeps in the fridge for 1 month once opened.',
    nut: [32, 1, 7, 0, 2, 3, 1780],
    rest: [1440, 'Pickling']
  },

  'pickled-peaches': {
    d: 'Peach halves simmered briefly in a sweet vinegar syrup with cloves, cinnamon and ginger, then left to stand in the jar.',
    meta: 'Pickled peaches: peach halves simmered briefly in a sweet vinegar syrup with cloves, cinnamon and ginger. Eight servings, 24 hours standing.',
    kw: ['pickled peaches', 'southern pickled peaches', 'pickled peaches recipe', 'spiced peach pickles', 'peaches pickled in vinegar and cloves'],
    why: 'Peaches, vinegar, sugar and a handful of whole spices: that is the list, and it is all you need. Pickled peaches are a Southern table condiment that sit somewhere between preserved fruit and pickle. They are sweet first, then sharp, with warmth from cloves, cinnamon and ginger.\n\nChoose peaches that are just ripe. Soft fruit falls apart in the syrup, and hard fruit stays woody. Blanching in boiling water for a minute loosens the skins so they slip off, then the halves go into the syrup for a few minutes, only until they are tender at the centre but still keep their shape.\n\n**Pack the halves into the jar** cut side down and pour the syrup over. Boil the leftover syrup down for another 5 minutes to concentrate it before pouring. The flavour needs a full day to settle. Serve alongside ham, roast pork or on a cheese board. Slice them thinly onto a salad or serve whole beside roast meats, with a little syrup spooned over.',
    ing: [
      '1 kg firm ripe peaches',
      '400 ml cider vinegar',
      '400 g caster sugar',
      '200 ml water',
      '3 g cinnamon stick',
      '1 g cloves',
      '10 g fresh ginger, sliced'
    ],
    st: [
      'Blanch the peaches in boiling water for 1 minute, then plunge into cold water. Slip off the skins, halve and stone the fruit.',
      'Bring the vinegar, sugar, water, cinnamon, cloves and ginger to a boil in a wide pan, stirring until the sugar dissolves.',
      'Add the peaches and simmer gently for 8 minutes until just tender. Lift them into a clean 1.5 litre jar, cut side down.',
      'Boil the syrup for 5 minutes more, pour over the peaches to cover and cool. Seal and refrigerate for 24 hours before eating.'
    ],
    tips: [
      'Use firm peaches; very ripe fruit turns mushy in the syrup.',
      'Keep the peaches submerged in the syrup in the jar.',
      'Use the leftover syrup in a salad dressing or a glaze for ham.'
    ],
    pair: ['Roast ham', 'Pork chops', 'Cheese board', 'Cold cuts'],
    store: 'Keeps in the fridge for 3 weeks.',
    nut: [256, 1, 63, 0, 2, 61, 5],
    rest: [1440, 'Standing in the syrup']
  },

  'watermelon-rind-pickles': {
    d: 'Peeled watermelon rind brined overnight, then simmered in a spiced sugar and vinegar syrup until translucent and tender.',
    meta: 'Watermelon rind pickles: peeled rind brined overnight, then simmered in a spiced sugar and vinegar syrup until translucent. Ten servings, 8 hours brining.',
    kw: ['watermelon rind pickles', 'pickled watermelon rind', 'southern watermelon rind pickles', 'sweet watermelon rind pickle recipe', 'spiced pickled watermelon rind'],
    why: 'The smell of vinegar, cloves and cinnamon warming in a big pan is the sign that watermelon rind pickles are underway. The rind is the part of the melon most people throw away, and in the South it became a sweet pickle with a crisp, jewel-like bite.\n\nUse the white part of the rind only. Peel off the dark green skin and cut away the pink flesh, then cut the white into 2 cm cubes. A brine soak of 8 hours draws water from the cubes, which keeps them firm when they cook in the syrup.\n\n**Simmer them until translucent**, not soft: they should still have a slight resistance when you bite. The syrup, made with sugar, cider vinegar, cloves, cinnamon and ginger, thickens as it cooks. Pack the cubes in clean jars and cover them with syrup. Serve with ham, roast pork or a cheese board. Drain a few cubes onto a plate and serve them cold alongside barbecued meats or ham sandwiches.',
    ing: [
      '1 kg watermelon rind, white part only, cut into 2 cm cubes',
      '60 g sea salt',
      '2 litres water, for the brine',
      '400 g caster sugar',
      '300 ml cider vinegar',
      '200 ml water, for the syrup',
      '3 g cinnamon stick',
      '1 g cloves',
      '10 g fresh ginger, sliced'
    ],
    st: [
      'Dissolve the salt in the 2 litres of water. Add the rind cubes, cover and leave for 8 hours. Drain and rinse well.',
      'Cover the rind with fresh water in a pan and simmer for 10 minutes until slightly tender. Drain.',
      'Bring the sugar, vinegar, 200 ml water, cinnamon, cloves and ginger to a boil, stirring to dissolve the sugar.',
      'Add the rind and simmer for 20 minutes until translucent. Pack into clean jars, cover with syrup, cool and seal.'
    ],
    tips: [
      'Remove every trace of pink flesh, or the pickle goes soft.',
      'Rinse well after brining so the finished pickle is not salty.',
      'Stir gently so the cubes keep their shape.'
    ],
    pair: ['Roast ham', 'Fried chicken', 'Cheese board', 'Pork sandwiches'],
    store: 'Keeps in the fridge for 1 month.',
    nut: [196, 1, 48, 0, 1, 46, 2360],
    rest: [480, 'Brining the rind']
  },

  'frogmore-stew': {
    d: 'A one-pot boil of smoked sausage, new potatoes, sweetcorn and prawns in a seafood seasoned broth, served on newspaper.',
    meta: 'Frogmore stew: a one-pot boil of smoked sausage, new potatoes, sweetcorn and prawns in a seafood seasoned broth. Six servings, cooked for 30 minutes.',
    kw: ['frogmore stew', 'lowcountry boil', 'frogmore stew recipe', 'prawn and sausage boil', 'sausage corn and prawn boil'],
    why: 'Most home versions end up with rubbery prawns and raw potatoes, and the fix is to add each ingredient in the right order. Frogmore stew is not really a stew: it is a boil, and everything cooks in one pot of seasoned water at a different time.\n\nThe potatoes go in first, because they take the longest. Sausage and corn follow, so the sausage seasons the water, and the prawns go in last, for only 3 minutes. Old Bay or a similar seafood seasoning, plus a halved lemon and a spoonful of salt, is all the flavour the broth needs.\n\n**Drain the pot immediately** when the prawns turn pink and curl, because a few extra minutes make them tough. Tip everything out onto a table lined with newspaper and let people help themselves. Serve with melted butter, cocktail sauce and plenty of napkins. Set out bowls for the shells and plenty of napkins, and let everyone peel their own prawns at the table.',
    ing: [
      '800 g small new potatoes',
      '500 g smoked sausage, sliced into 5 cm lengths',
      '4 corn cobs, about 1.2 kg, halved',
      '900 g raw prawns in their shells',
      '3 litres water',
      '3 tbsp seafood seasoning',
      '1 lemon, halved',
      '1 tbsp salt',
      '60 g butter, melted'
    ],
    st: [
      'Put the water, seafood seasoning, lemon and salt in a large pot and bring to a boil.',
      'Add the potatoes and boil for 15 minutes.',
      'Add the sausage and corn and boil for 8 minutes more.',
      'Add the prawns and cook for 3 minutes until pink and curled. Drain at once and spread on a newspaper-lined table. Serve with the melted butter.'
    ],
    tips: [
      'Do not add the prawns early; they overcook within minutes.',
      'Cut the potatoes to the same size so they cook evenly.',
      'Taste the broth before you add anything else; seafood seasoning is salty.'
    ],
    pair: ['Melted butter', 'Cocktail sauce', 'Crusty bread', 'Cold beer'],
    store: 'Best eaten straight away. Leftovers keep in the fridge for 1 day.',
    nut: [756, 51, 66, 32, 8, 9, 3160]
  },

  'charleston-red-rice': {
    d: 'Long-grain rice baked with smoked sausage, bacon, tomato, onion and green pepper until the grains turn red and savoury.',
    meta: 'Charleston red rice: long-grain rice cooked with smoked sausage, bacon, tomato, onion and green pepper until red and savoury. Six servings, cooked for 45 minutes.',
    kw: ['charleston red rice', 'lowcountry red rice', 'red rice recipe', 'red rice with sausage and tomato', 'southern red rice'],
    why: 'It looks like Spanish rice and cooks like a pilaf, and it belongs to the Lowcountry. Charleston red rice gets its colour and tang from tomato, and its depth from rendered bacon fat and smoked sausage, which flavour the grains as they swell.\n\nThe cooking is done in stages. Bacon is fried first, then the sausage, then onion and green pepper in the fat, then the rice, which is toasted briefly so each grain is coated. Tomato paste and tinned tomatoes follow, with hot stock and a pinch of cayenne.\n\n**Do not lift the lid while it cooks.** The rice steams, and every peek lets out heat. A tight lid and a low flame are all it needs. Leave it covered off the heat for 10 minutes so the grains firm up, then fluff with a fork. It should be moist but separate, with a faint crust on the bottom.',
    ing: [
      '300 g long-grain rice',
      '100 g bacon, diced',
      '200 g smoked sausage, sliced',
      '1 onion, chopped',
      '1 green pepper, about 150 g, chopped',
      '2 tbsp tomato purée',
      '200 g tinned chopped tomatoes',
      '400 ml hot chicken stock',
      '1/2 tsp cayenne pepper',
      '1/2 tsp salt'
    ],
    st: [
      'Fry the bacon in a heavy pan with a tight lid for 5 minutes until crisp. Add the sausage and fry for 3 minutes.',
      'Add the onion and green pepper and cook for 5 minutes until soft. Stir in the rice and cook for 1 minute.',
      'Stir in the tomato purée, tomatoes, stock, cayenne and salt. Bring to a boil, cover tightly and cook on low heat for 20 minutes.',
      'Leave covered off the heat for 10 minutes. Fluff with a fork before serving.'
    ],
    tips: [
      'Toast the rice in the fat so the grains stay separate.',
      'Use a pan with a tight lid; steam does the cooking.',
      'Taste before salting; the bacon, sausage and stock are all salty.'
    ],
    pair: ['Fried chicken', 'Collard greens', 'Green salad', 'Hot sauce'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [331, 12, 46, 11, 2, 3, 940]
  },

  'louisiana-crawfish-pie': {
    untimed: ['cooling completely'],
    d: 'A double-crust pie filled with crawfish tails in a thick, peppery Creole sauce of onion, celery, green pepper and cream.',
    meta: 'Louisiana crawfish pie: a double-crust pie filled with crawfish tails in a thick, peppery Creole sauce. Six servings, cooked for 40 minutes.',
    kw: ['louisiana crawfish pie', 'crawfish pie recipe', 'cajun crawfish pie', 'creole crawfish pie', 'crawfish pie with pastry crust'],
    why: 'The sauce should be thick enough to hold its shape on a spoon. That is the test for a crawfish pie filling, because a loose sauce soaks the pastry and the pie collapses when cut. The roux and the gentle reduction both do that work.\n\nStart with butter and flour cooked together to a pale gold, then add the Creole trinity of onion, celery and green pepper. Garlic, cayenne, thyme and a little cream go in next. Crawfish tails are added last, only to warm through, because they are already cooked and turn rubbery with more heat.\n\nIf you cannot buy crawfish, cooked prawns work. **Cool the filling before it meets the pastry**, so the crust does not melt before it reaches the oven. Brush the top with beaten egg and cut a vent for the steam. Bake until the pastry is deep golden and the filling bubbles through the vent.',
    ing: [
      '500 g shortcrust pastry',
      '500 g cooked peeled crawfish tails',
      '50 g butter',
      '40 g plain flour',
      '1 onion, finely chopped',
      '2 celery sticks, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '250 ml double cream',
      '1 tsp dried thyme',
      '1/2 tsp cayenne pepper',
      '1/2 tsp salt',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Melt the butter in a large pan, stir in the flour and cook for 2 minutes. Add the onion, celery and green pepper and cook for 6 minutes.',
      'Add the garlic, thyme, cayenne and salt, then pour in the cream. Simmer for 5 minutes until thick, stir in the crawfish and cool completely.',
      'Roll out two thirds of the pastry and line a 23 cm pie dish. Fill with the cooled mixture.',
      'Cover with the remaining pastry, seal the edge, cut a vent and brush with egg. Bake for 25 minutes until deep golden.'
    ],
    tips: [
      'Cool the filling before assembling, or the base turns soggy.',
      'Do not overcook the crawfish; they are already cooked.',
      'Stand the pie for 10 minutes before cutting.'
    ],
    pair: ['Green salad', 'Cajun rice', 'Hot sauce', 'Cold lager'],
    store: 'Keeps in the fridge for 2 days. Reheat in a moderate oven.',
    nut: [693, 25, 47, 45, 3, 5, 860]
  },

  'champurrado': {
    d: 'A thick Mexican hot chocolate thickened with masa harina and sweetened with piloncillo, cinnamon and a little vanilla.',
    meta: 'Champurrado: a thick Mexican hot chocolate thickened with masa harina and sweetened with brown sugar and cinnamon. Four servings, cooked for 15 minutes.',
    kw: ['champurrado', 'mexican champurrado', 'champurrado recipe', 'thick mexican hot chocolate', 'masa harina hot chocolate'],
    why: 'What separates champurrado from ordinary hot chocolate? Masa harina. The corn flour is whisked into the milk, where it swells and turns the drink thick and velvety, almost like a thin custard, with a gentle, toasty taste of corn behind the chocolate.\n\nThe first step is to whisk the masa with cold water until completely smooth. Add it to the pan while whisking and no lumps form. Dark brown sugar stands in for piloncillo, the raw cane sugar that gives the drink a faint molasses taste, and cinnamon and vanilla complete it.\n\n**Whisk constantly as it heats**, because the masa catches on the base of the pan and the mixture thickens fast. It should coat the back of a spoon after about 10 minutes at a gentle simmer. Serve very hot, ideally in tall mugs, with a sweet bread or tamales beside it. Pour it into mugs while it is still steaming, and stir again if it settles, since the masa sinks to the bottom.',
    ing: [
      '40 g masa harina',
      '250 ml cold water',
      '750 ml whole milk',
      '60 g dark chocolate, chopped',
      '50 g dark brown sugar',
      '3 g cinnamon stick',
      '1 tsp vanilla extract',
      '1 pinch of salt'
    ],
    st: [
      'Whisk the masa harina with the cold water until completely smooth.',
      'Heat the milk with the cinnamon stick in a saucepan until steaming. Add the masa mixture, whisking constantly.',
      'Add the chocolate, sugar and salt and simmer gently for 10 minutes, whisking, until thick and smooth.',
      'Remove the cinnamon and stir in the vanilla. Serve hot.'
    ],
    tips: [
      'Whisk constantly once the masa goes in.',
      'Use real masa harina, not cornmeal; the texture is quite different.',
      'Thin with a splash of hot milk if it thickens too much on standing.'
    ],
    pair: ['Tamales', 'Pan dulce', 'Churros', 'Sweet bread'],
    store: 'Best drunk straight away. Keeps in the fridge for 2 days; reheat with milk.',
    nut: [296, 8, 39, 12, 2, 29, 130]
  },

  'atole': {
    d: 'A warm, lightly sweet Mexican drink of masa harina simmered with milk, cinnamon and vanilla until smooth and creamy.',
    meta: 'Atole: a warm, lightly sweet Mexican drink of masa harina simmered with milk, cinnamon and vanilla until smooth. Four servings, cooked for 15 minutes.',
    kw: ['atole', 'mexican atole', 'atole recipe', 'atole de vainilla', 'warm masa harina drink'],
    why: 'The first thing you notice is the warmth in your hands, then the soft, sweet smell of cinnamon and corn. Atole is one of the oldest Mexican drinks, a thin, creamy porridge that is sipped rather than spooned, and it is served at breakfast, on cold evenings and alongside tamales.\n\nThis is the simplest version, flavoured only with vanilla and cinnamon. Masa harina thickens the milk, but far less than in champurrado, so the drink flows easily from a ladle. The brown sugar is a modest amount, enough to bring out the corn.\n\nMix the masa with cold water first, and **pour it in a thin stream while whisking** so it cannot lump. If it does, strain it through a sieve. Simmer for 10 minutes to cook out the raw corn flavour, whisking often. The drink thickens as it cools, so keep a little hot milk nearby to thin it.',
    ing: [
      '50 g masa harina',
      '250 ml cold water',
      '750 ml whole milk',
      '60 g dark brown sugar',
      '3 g cinnamon stick',
      '1 tsp vanilla extract',
      '1 pinch of salt'
    ],
    st: [
      'Whisk the masa harina with the cold water until smooth.',
      'Heat the milk with the cinnamon stick in a saucepan until steaming. Pour in the masa mixture in a thin stream, whisking constantly.',
      'Add the sugar and salt and simmer gently for 10 minutes, whisking often, until slightly thick.',
      'Remove the cinnamon, stir in the vanilla and serve hot.'
    ],
    tips: [
      'Strain the mixture if any lumps appear.',
      'Taste and add sugar to suit; the drink should be gently sweet.',
      'Thin with hot milk if it has thickened by the time you serve it.'
    ],
    pair: ['Tamales', 'Pan dulce', 'Concha', 'Warm tortillas'],
    store: 'Best drunk straight away. Keeps in the fridge for 2 days; reheat with milk.',
    nut: [227, 7, 34, 7, 1, 24, 130]
  },

  'mexican-chocolate-cake': {
    d: 'A moist chocolate cake spiced with cinnamon and a touch of cayenne, finished with a glossy cinnamon chocolate glaze.',
    meta: 'Mexican chocolate cake: a moist chocolate cake spiced with cinnamon and a touch of cayenne, with a glossy glaze. Twelve servings, cooked for 35 minutes.',
    kw: ['mexican chocolate cake', 'mexican chocolate cake recipe', 'cinnamon chocolate cake', 'chocolate cake with cayenne', 'spiced chocolate cake'],
    why: 'Chocolate, cinnamon, cayenne and a cup of coffee: four ingredients that make an ordinary chocolate cake taste warm and slightly dangerous. Mexican chocolate is traditionally spiced with cinnamon, and a touch of chilli in the batter gives a gentle heat at the back of the throat that builds as you eat.\n\nThe batter is a simple one-bowl mixture, mixed with oil rather than butter, which keeps the crumb soft for days. Hot coffee goes in at the end and thins the batter to a pourable consistency. Do not worry about how runny it looks: that is what produces a moist cake.\n\nBake it until a skewer comes out with just a few damp crumbs, then cool the cake fully. **Pour the glaze on while it is warm** but not hot, so it sets in a smooth, shiny sheet. A pinch of salt in the glaze lifts the chocolate and tempers the sweetness.',
    ing: [
      '250 g plain flour',
      '300 g caster sugar',
      '75 g unsweetened cocoa powder',
      '2 tsp baking powder',
      '2 tsp ground cinnamon',
      '1/4 tsp cayenne pepper',
      '1/2 tsp salt',
      '2 eggs',
      '120 ml vegetable oil',
      '240 ml milk',
      '240 ml hot strong coffee',
      '# Glaze',
      '120 g dark chocolate, chopped',
      '120 ml double cream',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 180°C. Grease and line a 23 cm round cake tin.',
      'Mix the flour, sugar, cocoa, baking powder, cinnamon, cayenne and salt. Beat in the eggs, oil and milk until smooth, then stir in the hot coffee.',
      'Pour into the tin and bake for 35 minutes until a skewer comes out with a few damp crumbs. Cool in the tin for 15 minutes, then turn out.',
      'Heat the cream until steaming, pour over the chocolate and cinnamon and stir until smooth. Cool for 10 minutes and pour over the cake.'
    ],
    tips: [
      'The batter is thin by design; do not add more flour.',
      'Add the cayenne in small amounts if you are cautious about heat.',
      'Cool the cake completely before glazing.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Black coffee', 'Fresh raspberries'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [403, 6, 52, 19, 4, 31, 200]
  },

  'capirotada': {
    d: 'A Mexican bread pudding of toasted bread layered with cinnamon piloncillo syrup, raisins, peanuts and melting cheese.',
    meta: 'Capirotada: a Mexican bread pudding of toasted bread layered with cinnamon syrup, raisins, peanuts and melting cheese. Eight servings, cooked for 40 minutes.',
    kw: ['capirotada', 'mexican capirotada', 'capirotada recipe', 'mexican bread pudding with cheese', 'capirotada with piloncillo syrup'],
    why: 'Sweet and salty in one bite. That is the surprise of capirotada, a Mexican bread pudding in which a piloncillo and cinnamon syrup soaks into toasted bread and a layer of cheese melts through it. The combination sounds odd and works like caramel with salty cheese.\n\nThe bread must be dry and toasted. Soft bread turns to paste in the syrup, while toast holds its shape and drinks up the liquid. Cut a baguette or bolillos into 2 cm slices and dry them in the oven until hard. The syrup is brown sugar, water, cinnamon and cloves boiled together for 10 minutes.\n\n**Layer the bread, syrup, raisins, peanuts and cheese** in a deep dish, finishing with a layer of cheese. Cover with foil to steam the bread through, then bake uncovered so the top turns golden and the cheese bubbles. Serve warm. Eat it warm, with a cup of coffee, in a spoonful that has bread, syrup and cheese in it.',
    ing: [
      '300 g stale baguette, sliced 2 cm thick',
      '300 g dark brown sugar',
      '600 ml water',
      '3 g cinnamon stick',
      '1 g cloves',
      '60 g raisins',
      '60 g roasted peanuts',
      '200 g Monterey Jack or mozzarella, grated',
      '40 g butter, melted'
    ],
    st: [
      'Heat the oven to 180°C. Brush the bread with the melted butter and toast on a tray for 10 minutes until crisp.',
      'Boil the sugar, water, cinnamon and cloves for 10 minutes until syrupy. Remove the spices.',
      'Layer half the bread in a 23 x 33 cm dish, then half the raisins, peanuts and cheese. Repeat. Pour the syrup slowly over the top.',
      'Cover with foil and bake for 15 minutes. Uncover and bake for 15 minutes more until the top is golden. Serve warm.'
    ],
    tips: [
      'Toast the bread until it is hard, or it will collapse.',
      'Pour the syrup in stages so it soaks in evenly.',
      'Stand the dish for 10 minutes before serving.'
    ],
    pair: ['Hot coffee', 'Cinnamon tea', 'Vanilla ice cream', 'Fresh fruit'],
    store: 'Keeps in the fridge for 3 days. Reheat in the oven.',
    nut: [452, 12, 65, 16, 2, 42, 390]
  },

  'flan-de-coco': {
    d: 'A baked coconut flan with a caramel top, made from condensed milk, evaporated milk, coconut milk and eggs, then chilled until set.',
    meta: 'Flan de coco: a baked coconut flan with a caramel top, made from condensed milk, coconut milk and eggs, then chilled. Eight servings, cooked for 60 minutes.',
    kw: ['flan de coco', 'coconut flan', 'mexican coconut flan', 'flan de coco recipe', 'coconut flan with caramel'],
    why: 'Bake it slowly. That is most of the recipe, and the part people skip. A flan cooked in a hot oven sets too fast, curdles and fills with tiny holes, while one baked in a water bath at a moderate heat sets to a smooth, silky texture with a tremble in the middle.\n\nThe custard is made from condensed milk, evaporated milk, coconut milk and eggs, blended until smooth and strained to catch any threads of egg. Coconut gives it a gentle perfume, and desiccated coconut folded in adds a soft, chewy texture. The caramel goes in the bottom of the dish first.\n\n**Chill it for at least 4 hours**, preferably overnight, before turning it out. The caramel melts into a sauce as it sits. Run a knife around the edge, place a plate on top and invert in one confident movement. The flan should slide out whole. Slice it cold and spoon the caramel from the dish over each portion, with some toasted coconut on top.',
    ing: [
      '150 g caster sugar',
      '3 tbsp water',
      '4 eggs',
      '400 g condensed milk',
      '370 ml evaporated milk',
      '200 ml coconut milk',
      '40 g desiccated coconut',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 160°C. Heat the sugar and water in a small pan without stirring until it turns a deep amber. Pour into a 23 cm round dish and tilt to coat the base.',
      'Blend the eggs, condensed milk, evaporated milk, coconut milk and vanilla until smooth. Stir in the desiccated coconut.',
      'Strain the mixture into the dish. Stand the dish in a roasting tin and pour in boiling water to come halfway up the sides.',
      'Bake for 60 minutes until set with a slight wobble. Cool, cover and chill for 4 hours. Run a knife round the edge and invert onto a plate.'
    ],
    tips: [
      'Strain the custard for a smooth texture.',
      'Do not let the caramel go dark brown, or it will taste bitter.',
      'Check the flan at 50 minutes; it should wobble gently, not slosh.'
    ],
    pair: ['Fresh mango', 'Toasted coconut', 'Black coffee', 'Whipped cream'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [409, 11, 53, 17, 1, 52, 150],
    rest: [240, 'Chilling']
  },

  'cajeta': {
    d: 'A thick Mexican caramel sauce made by simmering goat milk with sugar and cinnamon until dark, glossy and spoonable.',
    meta: 'Cajeta: a thick Mexican caramel sauce made by simmering goat milk with sugar and cinnamon until dark, glossy and spoonable. Twelve servings, cooked for 90 minutes.',
    kw: ['cajeta', 'cajeta recipe', 'mexican goat milk caramel', 'homemade cajeta', 'cajeta de cabra'],
    why: 'Cajeta means "little box", after the wooden boxes it was once sold in. It is Mexico\'s answer to dulce de leche, made from goat milk instead of cow milk, which gives it a slightly tangy, almost nutty edge that cuts through the sweetness.\n\nThe method is patience. Goat milk, sugar, a stick of cinnamon and a pinch of baking soda are simmered over low heat for 90 minutes, stirring often. The baking soda reduces the acidity in the milk and helps the sugars brown. The mixture slowly turns from white to tan to a deep, burnished brown.\n\n**Stir continuously in the last 20 minutes**, scraping the base, because the thickened milk catches quickly. To test, drop a spoonful on a cold plate: it should cool to a thick, spreadable sauce. Cajeta thickens as it cools, so stop when it still seems slightly loose. Spoon it over ice cream, pancakes or fruit, or eat it from the jar with a spoon, as many cooks do.',
    ing: [
      '1.5 litres goat milk',
      '300 g caster sugar',
      '3 g cinnamon stick',
      '1/4 tsp bicarbonate of soda',
      '1 tsp vanilla extract'
    ],
    st: [
      'Put the milk, sugar and cinnamon in a wide, heavy pan. Heat gently, stirring until the sugar dissolves.',
      'Stir in the bicarbonate of soda; the milk will foam. Bring to a gentle simmer.',
      'Simmer for 90 minutes, stirring often, until the cajeta is dark brown and coats a spoon. Stir constantly for the last 20 minutes.',
      'Remove the cinnamon, stir in the vanilla and pour into a clean jar. It thickens as it cools.'
    ],
    tips: [
      'Use a wide, heavy pan so the milk reduces evenly.',
      'Watch the pan closely at the end; it can scorch in seconds.',
      'Stir in a splash of warm milk if it sets too thick.'
    ],
    pair: ['Ice cream', 'Crepes', 'Apple slices', 'Churros'],
    store: 'Keeps in the fridge in a sealed jar for 2 weeks.',
    nut: [176, 4, 31, 4, 0, 31, 80]
  },

  'bunuelos-mexicanos': {
    d: 'Thin, crisp Mexican fritters fried from a yeast-free dough, dusted with cinnamon sugar or served with a piloncillo syrup.',
    meta: 'Buñuelos mexicanos: thin, crisp fritters fried from a simple dough, dusted with cinnamon sugar or served with syrup. Twelve servings, cooked for 20 minutes.',
    kw: ['buñuelos mexicanos', 'bunuelos recipe', 'mexican buñuelos', 'crispy mexican fritters', 'buñuelos with cinnamon sugar'],
    why: 'Buñuelos are the sweet that comes out at Christmas and fiestas, fried until they shatter. They are not doughnuts or churros but thin, flat discs, like fried crackers, with bubbles on the surface that crunch and flake.\n\nThe dough is flour, baking powder, a little sugar, salt, an egg, butter and warm milk. Knead it for a few minutes until smooth, then rest it for 30 minutes so the gluten relaxes and the discs roll very thin. Divide it into 12 pieces, roll each as thin as you can, and the thinner the dough, the crisper the result.\n\n**Fry in oil at 180°C** for 40 seconds a side. They puff and blister at once, and go from pale to golden within moments. Drain on paper and dust with cinnamon sugar straight away, so it sticks. Serve with a syrup of brown sugar and cinnamon if you like. Pile them on a platter and serve them while they are warm, with a cup of hot chocolate beside them.',
    ing: [
      '300 g plain flour',
      '1 tsp baking powder',
      '2 tbsp caster sugar',
      '1/2 tsp salt',
      '1 egg',
      '30 g butter, melted',
      '120 ml warm milk',
      '300 ml vegetable oil, for frying',
      '# To finish',
      '60 g caster sugar',
      '2 tsp ground cinnamon'
    ],
    st: [
      'Mix the flour, baking powder, 2 tbsp sugar and salt. Add the egg, butter and milk and knead for 5 minutes into a smooth dough. Cover and rest for 30 minutes.',
      'Divide into 12 pieces and roll each into a very thin disc about 15 cm across.',
      'Heat the oil to 180°C. Fry the discs one at a time for 40 seconds on each side until puffed and golden. Drain on kitchen paper.',
      'Mix the 60 g sugar and cinnamon and dust over the warm buñuelos.'
    ],
    tips: [
      'Roll the dough as thin as you can without tearing it.',
      'Keep the oil at 180°C; cooler oil makes them greasy.',
      'Dust with cinnamon sugar while they are still hot.'
    ],
    pair: ['Hot chocolate', 'Champurrado', 'Piloncillo syrup', 'Strong coffee'],
    store: 'Best eaten within 1 day. Keep in an airtight tin.',
    nut: [354, 3, 27, 26, 1, 8, 150]
  },

  'tres-leches-cupcakes': {
    d: 'Light vanilla cupcakes soaked in a mixture of three milks and topped with whipped cream and a dusting of cinnamon.',
    meta: 'Tres leches cupcakes: light vanilla cupcakes soaked in three milks and topped with whipped cream and cinnamon. Twelve cupcakes, chilled for 2 hours.',
    kw: ['tres leches cupcakes', 'tres leches cupcake recipe', 'three milk cupcakes', 'mexican tres leches cupcakes', 'cupcakes soaked in three milks'],
    why: 'Why does a cake that soaks up a whole can of liquid not fall apart? Because the sponge is light and full of air. Tres leches cake depends on a batter with plenty of beaten egg, which gives a firm structure that holds the liquid like a sponge, and the same applies in cupcake form.\n\nThe three milks are condensed, evaporated and double cream, whisked together with a little vanilla. Poke holes in each warm cupcake with a skewer and spoon the milk over slowly, giving it time to sink in. Pour a little more after a few minutes until all the liquid is gone.\n\n**Chill for 2 hours** so the milk spreads evenly. Top with whipped cream just before serving, and dust with cinnamon. The cupcakes should feel heavy and damp, with a tender crumb that gives under the fork, and they are best eaten cold. Make the cupcakes a day ahead and add the cream just before you serve them, so the topping stays fresh.',
    ing: [
      '150 g plain flour',
      '1 1/2 tsp baking powder',
      '4 eggs, separated',
      '150 g caster sugar',
      '60 ml milk',
      '1 tsp vanilla extract',
      '# Three milks',
      '200 g condensed milk',
      '170 ml evaporated milk',
      '100 ml double cream',
      '# Topping',
      '200 ml double cream',
      '2 tbsp icing sugar',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 180°C and line a 12-hole muffin tin with paper cases. Whisk the egg yolks with 100 g of the sugar until thick and pale. Stir in the milk and vanilla, then fold in the flour and baking powder.',
      'Whisk the egg whites to soft peaks, adding the remaining 50 g sugar. Fold into the batter in three additions.',
      'Divide between the cases and bake for 25 minutes until golden. Cool for 5 minutes.',
      'Stir the condensed milk, evaporated milk and 100 ml cream together. Prick the cupcakes all over and spoon the milk over slowly. Chill for 2 hours.',
      'Whip the 200 ml cream with the icing sugar to soft peaks. Pile on top and dust with cinnamon.'
    ],
    tips: [
      'Pour the milk in stages so the sponge absorbs it evenly.',
      'Fold the egg whites gently to keep the air in.',
      'Serve cold; the texture is best straight from the fridge.'
    ],
    pair: ['Fresh strawberries', 'Black coffee', 'Cinnamon tea', 'Sliced mango'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [285, 6, 36, 13, 0, 26, 130],
    rest: [120, 'Chilling']
  },

  'pudim-de-leite': {
    untimed: ['cooling'],
    d: 'A Brazilian condensed milk pudding with a deep caramel top, baked in a water bath until set and silky, with no holes.',
    meta: 'Pudim de leite: a Brazilian condensed milk pudding with a deep caramel top, baked in a water bath until silky. Eight servings, 6 hours chilling.',
    kw: ['pudim de leite', 'brazilian pudim', 'pudim de leite condensado', 'brazilian condensed milk pudding', 'pudim recipe with caramel'],
    why: 'Pudim de leite means "milk pudding", and the Brazilian version is made with condensed milk, which gives it a dense, creamy, almost fudge-like texture compared with a lighter flan. It is a table staple at birthdays and family lunches across Brazil.\n\nThe mixture is just three things: a tin of condensed milk, the same measure of whole milk, and three eggs. Blend them smooth, but do not whisk in too much air, because bubbles become holes. Straining the custard twice before pouring is the usual trick for a smooth, flawless slice.\n\n**Cover the dish tightly with foil** before it goes into the water bath, so no steam condenses and drips onto the surface. Bake until the custard is set but still trembles in the centre, then chill for at least 6 hours. Run a knife around the edge, invert and let the caramel pour over. Slice it cold and spoon plenty of the caramel over each portion, so every bite has sauce on it.',
    ing: [
      '150 g caster sugar',
      '3 tbsp water',
      '400 g condensed milk',
      '400 ml whole milk',
      '3 eggs',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 160°C. Heat the sugar and water in a small pan without stirring until it turns a deep amber. Pour into a 1.2 litre pudding mould and tilt to coat the base and sides.',
      'Blend the condensed milk, milk, eggs and vanilla for 30 seconds, then strain through a fine sieve into the mould.',
      'Cover the mould tightly with foil. Stand it in a roasting tin and pour in boiling water to come halfway up the sides.',
      'Bake for 60 minutes until set with a slight wobble. Cool, then chill for 6 hours. Run a knife round the edge and invert onto a plate.'
    ],
    tips: [
      'Blend briefly so the custard does not fill with air.',
      'Strain twice for the smoothest texture.',
      'Do not let the water in the tin boil hard.'
    ],
    pair: ['Fresh strawberries', 'Black coffee', 'Whipped cream', 'Passion fruit'],
    store: 'Keeps in the fridge, covered, for 5 days.',
    nut: [291, 8, 49, 7, 0, 49, 110],
    rest: [360, 'Chilling']
  },

  'romeu-e-julieta': {
    d: 'A Brazilian pairing of firm white cheese and guava paste, served as slices stacked together, sweet and salty at once.',
    meta: 'Romeu e Julieta: a Brazilian pairing of firm white cheese and guava paste, served as stacked slices, sweet and salty. Four servings, no cooking.',
    kw: ['romeu e julieta', 'romeo and juliet dessert', 'guava paste and cheese', 'brazilian cheese and guava dessert', 'romeu e julieta recipe'],
    why: 'Two ingredients, no cooking, and a dessert that Brazilians eat after lunch. Romeu e Julieta pairs a mild, creamy cheese with goiabada, a firm sliceable guava paste, and the name refers to the couple who belong together. Neither is complete without the other.\n\nThe cheese is traditionally queijo minas, which is fresh, soft and lightly salted. Mozzarella or a mild, fresh white cheese works in its place. The guava paste is dense, sweet and slightly tart, and it is sold in blocks in Latin supermarkets. Cut both into slices of the same thickness, around 1 cm.\n\n**Bring both to room temperature** before serving, because cold cheese is rubbery and cold paste is hard. Stack a slice of cheese on a slice of paste and eat them together, in one bite if you can. A few salted crackers are a good addition. For a warm version, grill the stack for a minute until the cheese softens.',
    ing: [
      '200 g guava paste',
      '200 g mozzarella or fresh white cheese',
      '40 g salted crackers'
    ],
    st: [
      'Cut the guava paste and cheese into slices about 1 cm thick.',
      'Leave both at room temperature for a few minutes.',
      'Stack a slice of cheese on each slice of paste and arrange on a plate with the crackers. Serve at once.'
    ],
    tips: [
      'Use a sharp knife dipped in hot water to cut the paste.',
      'Match the slices in size so they sit together neatly.',
      'Try it with a fresh mild cheese if you cannot find queijo minas.'
    ],
    pair: ['Black coffee', 'Salted crackers', 'Fresh figs', 'Sliced apple'],
    store: 'Best made fresh. Wrap the guava paste and cheese separately and store in the fridge.',
    nut: [328, 12, 43, 12, 1, 31, 380]
  },

  'huevos-divorciados': {
    d: 'Two fried eggs on crisp tortillas, one under red salsa and the other under green, with refried beans between them.',
    meta: 'Huevos divorciados: two fried eggs on crisp tortillas, one under red salsa and one under green, with refried beans. Two servings, cooked for 15 minutes.',
    kw: ['huevos divorciados', 'divorced eggs', 'huevos divorciados recipe', 'mexican eggs with red and green salsa', 'huevos with two salsas'],
    why: 'Divorced eggs get their name from the plate: two eggs, kept apart by a strip of refried beans, one wearing red salsa and the other green. They are an everyday Mexican breakfast, and the cook\'s job is mainly to keep the elements hot and the yolks soft.\n\nThe tortillas are crisped lightly in oil, so they stay firm enough to carry the eggs, not so hard that they shatter. The red salsa is tomato and chilli, the green salsa tomatillo and coriander, and both should be warm. If you are using ready-made salsas, heat them in a small pan for a few minutes first.\n\n**Fry the eggs in a little oil** over medium heat until the whites are set and the yolks are still runny, and slide each onto a tortilla. Spoon salsa over, keeping the colours apart, and add refried beans in a line between. Finish with crumbled cheese and coriander.',
    ing: [
      '4 corn tortillas',
      '4 eggs',
      '2 tbsp vegetable oil',
      '200 g refried beans',
      '100 ml red salsa',
      '100 ml green salsa',
      '40 g crumbled queso fresco',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat 1 tbsp of the oil in a frying pan and fry the tortillas for 1 minute on each side until crisp at the edges. Keep warm.',
      'Warm the refried beans, red salsa and green salsa separately, 3 minutes each.',
      'Heat the remaining oil in the pan and fry the eggs for 3 minutes until the whites are set and the yolks runny.',
      'Put 2 tortillas on each plate with an egg on each. Spoon red salsa over one egg and green over the other. Add a line of beans between and finish with cheese and coriander.'
    ],
    tips: [
      'Warm the salsas so they do not chill the eggs.',
      'Use a spatula to keep the whites from spreading.',
      'Serve at once, while the tortillas are still crisp.'
    ],
    pair: ['Black coffee', 'Fresh orange juice', 'Sliced avocado', 'Fried plantain'],
    store: 'Best eaten straight away.',
    nut: [563, 26, 45, 31, 10, 7, 1430]
  },

  'steak-and-cheese-pie': {
    untimed: ['cooling completely'],
    d: 'A golden Australian pie of diced steak in rich gravy with melted cheese, baked in shortcrust with a puff pastry lid.',
    meta: 'Steak and cheese pie: diced steak in rich gravy with melted cheddar, baked in shortcrust with a puff pastry lid. Six servings, cooked for 45 minutes.',
    kw: ['steak and cheese pie', 'australian steak and cheese pie', 'steak and cheese pie recipe', 'meat pie with melted cheddar', 'pie with steak gravy and cheese'],
    why: 'What stops the cheese turning greasy in a steak pie? Mixing it into the hot gravy, not scattering it on top. The cheddar melts into the sauce as the filling cooks, thickening it and adding a savoury, slightly sharp note that makes it different from a plain steak pie.\n\nThe steak must be diced small, around 1 cm, so it cooks through in a short simmer and does not need the long stewing of a larger cut. Choose rump or a similar tender cut. Brown it well, then add onion, flour, beef stock and Worcestershire sauce, and cook until the gravy is thick enough to hold on a spoon.\n\n**Cool the filling before it meets the pastry**, or the base steams and goes soft. Line a pie dish with shortcrust, add the filling, and cover with puff pastry for a flaky lid. Brush with egg and bake until golden and puffed. Serve with tomato sauce in the Australian way.',
    ing: [
      '500 g rump steak, diced into 1 cm pieces',
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '2 tbsp plain flour',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '100 g mature cheddar, grated',
      '1/2 tsp salt',
      '1/2 tsp ground black pepper',
      '250 g ready-made shortcrust pastry',
      '250 g ready-made puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Heat the oil in a pan and brown the steak and onion for 4 minutes. Stir in the flour.',
      'Add the stock, Worcestershire sauce, salt and pepper and simmer for 10 minutes until thick. Stir in the cheddar until it melts. Cool completely.',
      'Line a 23 cm pie dish with the shortcrust pastry. Fill with the cooled mixture.',
      'Cover with the puff pastry, seal the edge, cut a vent and brush with egg. Bake for 30 minutes until deep golden.'
    ],
    tips: [
      'Cool the filling before assembling.',
      'Cut the steak small so it cooks in the short simmer.',
      'Stand the pie for 10 minutes before slicing.'
    ],
    pair: ['Tomato sauce', 'Mushy peas', 'Mashed potato', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [583, 29, 38, 35, 2, 3, 1050]
  },

  'green-lipped-mussels': {
    d: 'New Zealand green lipped mussels steamed open in white wine, garlic and parsley, served in their broth with crusty bread.',
    meta: 'Green lipped mussels: New Zealand mussels steamed open in white wine, garlic and parsley, served in their broth. Four servings, cooked for 10 minutes.',
    kw: ['green lipped mussels', 'new zealand green lipped mussels', 'steamed green lipped mussels', 'green mussels in white wine', 'green lipped mussels recipe'],
    why: 'Mussels, garlic, wine, parsley and a hot pan. That is all this takes, and the mussels do the rest, opening in their own juices and making the sauce as they go. New Zealand green lipped mussels are larger and plumper than the common blue mussel, with a sweet, mild flavour.\n\nThe shells are edged with green, which is where the name comes from. If they arrive in a net or a bag, wash them and pull off the hairy beards. Discard any open mussels that do not close when tapped, because those are no longer alive, and any with broken shells.\n\n**Cover the pan and steam for about 5 minutes**, shaking it now and then. The mussels are done when the shells have opened wide. Throw away any that stay shut. Spoon the mussels and broth into bowls, scatter with parsley and serve with plenty of crusty bread for the juices.',
    ing: [
      '1 kg green lipped mussels in the shell',
      '30 g butter',
      '4 garlic cloves, finely chopped',
      '150 ml dry white wine',
      '2 tbsp chopped fresh parsley',
      '1 lemon'
    ],
    st: [
      'Scrub the mussels, pull off the beards and discard any that stay open when tapped.',
      'Melt the butter in a large pan with a lid. Cook the garlic for 1 minute without browning.',
      'Add the wine and bring to a boil. Add the mussels, cover and steam for 5 minutes, shaking the pan, until the shells are open.',
      'Discard any shells that stay closed. Add the parsley and a squeeze of lemon and serve in bowls with the broth.'
    ],
    tips: [
      'Do not overcook; the mussels turn tough.',
      'Use a pan big enough for the mussels to open freely.',
      'Taste the broth before salting; the mussels are naturally salty.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Chips', 'Dry white wine'],
    store: 'Best eaten straight away. Do not store cooked mussels.',
    nut: [275, 31, 13, 11, 1, 1, 750]
  },

  'chilli-mussels': {
    d: 'Mussels steamed open in a hot tomato broth of chilli, garlic and ginger, finished with coriander and a squeeze of lime.',
    meta: 'Chilli mussels: mussels steamed open in a hot tomato broth of chilli, garlic and ginger, finished with coriander and lime. Four servings, cooked for 12 minutes.',
    kw: ['chilli mussels', 'new zealand chilli mussels', 'chilli mussels recipe', 'mussels in tomato and chilli sauce', 'spicy mussels with coriander'],
    why: 'Make the sauce first. Chilli mussels are a quick dish, but the broth needs a few minutes to come together before the shellfish go in, and they should only spend about five minutes in it. Tomatoes, garlic, ginger and fresh chilli are simmered until they break down and the kitchen smells of heat.\n\nThe mussels give their own liquor to the sauce as they open, so the broth gets richer and saltier in the pot. Because of that, taste before adding any salt, and add it only at the end. A splash of fish sauce can stand in for it.\n\n**Add the mussels all at once** and cover the pan, so they steam evenly. Shake it two or three times and check after 5 minutes. Discard any that have not opened. Finish with lime juice and a handful of coriander, and serve straight from the pan with bread or rice to soak up the sauce.',
    ing: [
      '1 kg mussels in the shell',
      '1 tbsp vegetable oil',
      '4 garlic cloves, finely chopped',
      '1 tbsp grated fresh ginger',
      '2 red chillies, sliced',
      '400 g tinned chopped tomatoes',
      '100 ml water',
      '1 lime',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Scrub the mussels, pull off the beards and discard any that stay open when tapped.',
      'Heat the oil in a large pan with a lid. Cook the garlic, ginger and chillies for 1 minute. Add the tomatoes and water and simmer for 5 minutes.',
      'Add the mussels, cover and steam for 5 minutes, shaking the pan, until the shells are open.',
      'Discard any that stay shut. Squeeze in the lime, stir in the coriander and serve in bowls.'
    ],
    tips: [
      'Cut the chillies finer or deseed them for a milder dish.',
      'Do not salt until you have tasted the finished broth.',
      'Serve at once; the mussels toughen on standing.'
    ],
    pair: ['Crusty bread', 'Steamed rice', 'Garlic bread', 'Cold lager'],
    store: 'Best eaten straight away. Do not store cooked mussels.',
    nut: [273, 31, 17, 9, 2, 3, 760]
  },

  'salsa-macha': {
    d: 'A Mexican chilli oil of dried chillies, peanuts, sesame seeds and garlic fried in oil until fragrant and crunchy.',
    meta: 'Salsa macha: a Mexican chilli oil of dried chillies, peanuts, sesame seeds and garlic fried in oil until fragrant and crunchy. Ten servings, cooked for 15 minutes.',
    kw: ['salsa macha', 'salsa macha recipe', 'mexican chilli oil', 'peanut and chilli salsa', 'dried chilli and peanut oil'],
    why: 'Flour, butter, sugar? No: chillies, peanuts, sesame and oil, which are four things you probably already own, and about fifteen minutes. Salsa macha is a Mexican condiment from Veracruz, and it is closer to a crunchy chilli oil than a sauce, spooned onto tacos, eggs, grilled meat, noodles and almost anything else.\n\nThe oil must be warm, not smoking. Dried chillies burn easily and turn bitter, so heat the oil gently with the garlic and peanuts until the peanuts take on colour, then add the sesame seeds and chillies off the heat. The chillies darken in the residual warmth and release their flavour without scorching.\n\n**Pour it into a clean jar** and let it cool before covering. The flavour deepens over a day or two, and the peanuts soften slightly as they absorb oil. Stir before every use, since the solids settle to the bottom. A spoonful stirred into soup or mayonnaise, or spooned onto avocado on toast, is a quick way to use it up.',
    ing: [
      '250 ml vegetable oil',
      '60 g dried chillies, stems and seeds removed, torn',
      '80 g roasted peanuts',
      '3 tbsp sesame seeds',
      '4 garlic cloves, thinly sliced',
      '2 tbsp cider vinegar',
      '1 tsp salt',
      '1 tsp sugar'
    ],
    st: [
      'Heat the oil in a saucepan over low heat. Add the garlic and peanuts and cook for 5 minutes until the peanuts are golden.',
      'Remove from the heat and stir in the sesame seeds, chillies, vinegar, salt and sugar. The chillies will sizzle.',
      'Leave to cool in the pan for 10 minutes, stirring now and then, then transfer to a clean jar.'
    ],
    tips: [
      'Keep the heat low; burnt chillies taste bitter.',
      'Use a mix of dried chillies for depth of flavour.',
      'Stir before using, as the solids sink.'
    ],
    pair: ['Tacos', 'Fried eggs', 'Grilled meat', 'Noodles'],
    store: 'Keeps in a sealed jar in the fridge for 1 month. Use a clean spoon each time.',
    nut: [276, 3, 3, 28, 1, 1, 240]
  }
};
