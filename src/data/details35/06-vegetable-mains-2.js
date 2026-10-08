'use strict';

/**
 * Volume thirty-five — vegetable soups, pasta, beans, eggs and rice.
 *
 * The last sixteen dishes of the volume: soups that feed a family from a bag
 * of dried beans or peas, pasta and rice suppers built on vegetables and
 * lentils, and two Italian egg dishes that cost almost nothing. Nutrition is
 * estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'vegetable-lasagna': {
    d: 'Lasagne sheets layered with a lentil and vegetable tomato sauce, white sauce and cheese. Six servings in 1 hour 15 minutes.',
    meta: 'Vegetable lasagna: lasagne sheets layered with a lentil and vegetable tomato sauce, white sauce and cheese. A cheap bake for six in 1 hour 15 minutes.',
    kw: ['vegetable lasagna', 'budget vegetable lasagne', 'lentil and vegetable lasagna', 'meatless lasagna for six', 'cheap family lasagna'],
    why: 'Most vegetable lasagnas turn out watery because the vegetables release liquid as they bake. The answer is to cook them down in the sauce first, until the pan is nearly dry.\n\nGrated carrot and courgette disappear into the sauce and thicken it. Red lentils collapse and add body that would normally come from mince, at a fraction of the price.\n\nThe white sauce is a simple roux and milk, stirred until it coats a spoon. **Season it well**: bland white sauce makes a bland lasagna.\n\nBuild the layers from sauce, pasta, white sauce, and repeat, finishing with white sauce and cheese. The bottom layer should always be sauce so the pasta does not stick. Rest it for 15 minutes before cutting, or it slides apart. Lasagna improves after a rest in the fridge, so a day-ahead assembly suits a weekend dinner. Cut it into squares and freeze individual portions wrapped well, and a single serving heats quickly when needed.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 carrots, grated',
      '1 courgette, grated',
      '3 garlic cloves, chopped',
      '100 g split red lentils, rinsed',
      '2 x 400 g tins chopped tomatoes',
      '200 ml water',
      '1 tsp dried oregano',
      '1 tsp salt',
      '50 g butter',
      '50 g plain flour',
      '700 ml milk',
      '9 lasagne sheets, about 200 g',
      '150 g grated cheddar'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion, carrots and courgette for 8 minutes. Add the garlic, lentils, tomatoes, water, oregano and half the salt. Simmer for 20 minutes until thick and the lentils are soft.',
      'For the white sauce, melt the butter, stir in the flour for 1 minute, then add the milk gradually, whisking, and simmer for 4 minutes. Season with the remaining salt.',
      'Heat the oven to 190°C (170°C fan). Spread a quarter of the tomato sauce in a 3 litre dish, then add 3 pasta sheets and a quarter of the white sauce. Repeat twice.',
      'Finish with the remaining white sauce and the cheese. Bake for 35 minutes until golden and bubbling. Rest for 15 minutes.'
    ],
    tips: [
      'Simmer the tomato sauce until thick or the lasagna will be watery.',
      'Use no-pre-cook sheets as they are, and add a little extra water to the sauce.',
      'Rest the lasagna before cutting so it holds its shape.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 3 days. Reheat covered at 180°C for 25 minutes. Freezes for up to 3 months.',
    nut: [529, 21, 55, 25, 5, 11, 630]
  },

  'vegetable-noodle-soup': {
    d: 'Carrots, celery, onion and egg noodles in a seasoned vegetable stock. Four servings in 35 minutes.',
    meta: 'Vegetable noodle soup: carrots, celery, onion and egg noodles in a seasoned stock. A cheap, comforting soup for four in 35 minutes.',
    kw: ['vegetable noodle soup', 'easy noodle soup', 'budget vegetable soup', 'simple soup with egg noodles', 'cheap soup for four'],
    why: 'It is a soup for a day when you want something warm and plain. Carrots, celery and onion are softened in oil before the stock goes in, which gives the broth a sweet base that stock cubes alone cannot supply.\n\nCut the vegetables small, about 1 cm, so they cook in the 12 minutes it takes to simmer the broth, and so each spoonful has a bit of everything.\n\nThe noodles go in at the end and cook in the soup. **Add them only when you are about to eat.** Left to stand, they swell and drink the broth, leaving a stew.\n\nA bay leaf and a pinch of thyme are enough. Finish with plenty of black pepper and, if you have it, a handful of chopped parsley. Soup like this is gentle and quick, and suits days when appetite is low. The stock cube can be replaced by homemade stock from vegetable scraps saved in the freezer, which costs nothing.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '3 garlic cloves, chopped',
      '1.2 litres vegetable stock',
      '1 bay leaf',
      '1 tsp dried thyme',
      '1/2 tsp salt',
      '100 g egg noodles',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion, carrots and celery for 8 minutes. Add the garlic and cook for 1 minute.',
      'Add the stock, bay leaf, thyme and salt. Bring to a boil, then simmer for 12 minutes.',
      'Add the noodles and cook for 5 minutes, until tender.',
      'Remove the bay leaf, add the parsley and plenty of pepper, and serve.'
    ],
    tips: [
      'Cut the vegetables small so the soup eats easily.',
      'Add the noodles just before serving for the best texture.',
      'If you reheat it, add extra stock because the noodles absorb liquid.'
    ],
    pair: ['Crusty bread', 'Cheese toastie', 'Crackers'],
    store: 'Keeps in the fridge for up to 3 days, though the noodles soften. For leftovers, cook the noodles separately. The soup without noodles freezes for up to 3 months.',
    nut: [233, 8, 30, 9, 3, 5, 1350]
  },

  'vegetable-rice-soup': {
    d: 'Rice simmered with carrot, celery, tomatoes and onion in stock until the soup is thick and filling. Four servings in 40 minutes.',
    meta: 'Vegetable rice soup: rice simmered with carrot, celery, tomatoes and onion in stock until thick. A cheap, filling soup for four in 40 minutes.',
    kw: ['vegetable rice soup', 'tomato and rice soup', 'budget soup with rice', 'easy rice and vegetable soup', 'cheap hearty soup'],
    why: 'Rice thickens a soup in a way noodles cannot. As it simmers it releases starch, and the broth turns from thin and clear to something close to a stew.\n\nA small amount goes a long way: 100 g of rice for four bowls. More would make a risotto.\n\nThe vegetables are cut small and cooked in oil first. Tinned tomatoes go in with the stock, giving the broth colour and a gentle sharpness.\n\n**Simmer the rice in the soup, not separately.** It soaks up flavour from the broth, and the starch is what gives the body. The soup thickens as it stands. Thin it with hot water or stock when you reheat it, and taste again for salt. A small amount of rice goes a long way, and the soup becomes more filling as it stands. Add a squeeze of lemon when serving to lift the flavour and make the tomato taste fresher.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '400 g tin chopped tomatoes',
      '1 litre vegetable stock',
      '100 g long-grain rice, rinsed',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion, carrots and celery for 8 minutes. Add the garlic and cook for 1 minute.',
      'Add the tomatoes, stock, rice, oregano, salt and pepper and bring to a boil.',
      'Lower the heat, cover partly and simmer for 20 minutes, stirring now and then, until the rice is tender and the soup has thickened.',
      'Stir in the parsley, taste for salt and serve.'
    ],
    tips: [
      'Rinse the rice to wash off excess starch so the soup is not gluey.',
      'The soup thickens as it stands, so thin it with water when reheating.',
      'Stir occasionally; rice settles and catches on the base.'
    ],
    pair: ['Crusty bread', 'Grated cheese', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days and thickens; add water when reheating. Freezes for up to 2 months, though the rice softens.',
    nut: [228, 6, 33, 8, 4, 6, 1170]
  },

  'vegetable-chili': {
    d: 'Tinned beans, sweetcorn, peppers and tomatoes simmered with chili powder and cumin. Six servings in 50 minutes.',
    meta: 'Vegetable chili: kidney beans, sweetcorn, peppers and tomatoes simmered with chili powder and cumin. A cheap pot for six in 50 minutes.',
    kw: ['vegetable chili', 'three bean chili', 'budget bean chili', 'easy meatless chili', 'cheap chili for six'],
    why: 'A chili without meat needs more attention to texture, not less. Beans, peppers and sweetcorn each supply a different bite, and cooking them in the right order is what keeps the pot from turning into one soft mass.\n\nThe peppers go in with the onion and soften for 8 minutes. The beans, which are already tender, go in with the tomatoes. The sweetcorn goes in for the last 10 minutes so it stays sweet.\n\nChili powder and cumin are fried in the oil first. **Do not skip that minute**, because raw spice tastes dusty and bitter.\n\nA spoon of tomato purée adds the savoury depth that meat would provide, and a splash of vinegar at the end sharpens the whole pot. This is a pot that rewards a little time at the stove, since the flavours deepen as it simmers. Cooked beans freeze well, so any left over can be kept for another meal.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 red peppers, diced',
      '3 garlic cloves, chopped',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '2 x 400 g tins chopped tomatoes',
      '1 tbsp tomato purée',
      '480 g tinned kidney beans, drained and rinsed',
      '480 g tinned black beans, drained and rinsed',
      '165 g tinned sweetcorn, drained',
      '200 ml water',
      '1 tsp salt',
      '1 tbsp cider vinegar'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion and peppers for 8 minutes. Add the garlic, chili powder, cumin and paprika and cook for 1 minute.',
      'Add the tomatoes, purée, both beans, water and salt. Bring to a boil, then simmer uncovered for 30 minutes, stirring now and then.',
      'Add the sweetcorn and cook for 10 minutes more.',
      'Stir in the vinegar, taste for salt and serve.'
    ],
    tips: [
      'Rinse the beans well to remove the tin liquid.',
      'Mash a few beans to thicken the chili naturally.',
      'The flavour deepens overnight, so make it a day ahead if you can.'
    ],
    pair: ['Rice', 'Baked potatoes', 'Grated cheddar', 'Soured cream', 'Cornbread'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [271, 14, 38, 7, 13, 6, 930]
  },

  'roasted-vegetable-pasta': {
    d: 'Courgette, pepper, onion and tomato roasted until sweet and tossed with pasta, garlic and a little pasta water. Four servings in 40 minutes.',
    meta: 'Roasted vegetable pasta: courgette, pepper, onion and tomato roasted until sweet, then tossed with pasta. A cheap supper for four in 40 minutes.',
    kw: ['roasted vegetable pasta', 'roast vegetable pasta bake', 'budget vegetable pasta', 'easy roast veg pasta', 'cheap pasta supper'],
    why: 'The oven does the work. Vegetables spread out on a hot tray and left alone for 25 minutes turn sweet and soft with dark edges, and the tray juices become the sauce.\n\nCut everything to a similar size, about 2.5 cm. Courgette gives off water, so give it the most room, and put the pepper and onion around it.\n\nThe tomatoes go in whole or halved, and they burst in the heat to make a loose sauce on the tray. Scrape up every bit with the pasta.\n\n**Do not crowd the tray.** Crowded vegetables steam and turn grey. Use two trays if the one you have is full. Tossed with hot pasta and a splash of the cooking water, the sauce clings. Roasted vegetables are sweeter than boiled or fried ones, and the technique works with almost any mix from the vegetable drawer. Leftover roasted vegetables are good cold the next day, tossed with oil and vinegar.',
    ing: [
      '2 courgettes, cut into 2.5 cm pieces',
      '2 red peppers, cut into 2.5 cm pieces',
      '1 red onion, cut into wedges',
      '300 g cherry tomatoes',
      '4 garlic cloves, unpeeled',
      '4 tbsp olive oil',
      '1 tsp salt',
      '1 tsp dried oregano',
      '350 g penne',
      '40 g grated parmesan'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Spread the courgettes, peppers, onion, tomatoes and garlic on two trays and toss with the oil, salt and oregano.',
      'Roast for 25 minutes until soft and browned at the edges, stirring once.',
      'Meanwhile, boil the penne in salted water until just tender. Keep a mug of the water, then drain.',
      'Squeeze the garlic out of its skins and mash into the vegetables. Toss with the pasta and a splash of the water until glossy, and top with the parmesan.'
    ],
    tips: [
      'Use two trays so the vegetables brown rather than steam.',
      'Mash the roasted garlic into the juices for a better sauce.',
      'Add pasta water a splash at a time.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Crusty bread'],
    store: 'Keeps in the fridge for up to 3 days. Eat it cold as a pasta salad or reheat with a splash of water.',
    nut: [563, 18, 80, 19, 7, 11, 760]
  },

  'lentil-bolognese': {
    d: 'Green lentils, carrot and tomato simmered into a rich ragu and served over spaghetti. Four servings in 45 minutes.',
    meta: 'Lentil bolognese: green lentils, carrot and tomato simmered into a rich ragu over spaghetti. A very cheap, meatless dinner for four in 45 minutes.',
    kw: ['lentil bolognese', 'lentil ragu', 'budget bolognese without meat', 'easy lentil spaghetti sauce', 'cheap pasta dinner for four'],
    why: 'Lentils make a bolognese that stands up to the real thing, and they cost a fraction of mince. Green or brown lentils hold their shape in a long simmer and give the sauce a savoury, meaty bite.\n\nThe flavour starts with the soffritto: onion, carrot and celery, chopped small and cooked slowly in oil for 10 minutes. This is where the sweetness comes from.\n\nA spoon of tomato purée fried in the pan until it darkens adds depth. Add a splash of soy sauce, too, for a savoury note that meat would otherwise provide.\n\n**Simmer, partly covered, for 30 minutes.** The lentils drink the liquid as they soften, so check the pot and add water if it looks dry. The sauce is ready when the lentils are tender and it clings to a spoon. The sauce freezes well in portions, and tastes even better after a night in the fridge. It also makes a good filling for jacket potatoes or a base for a lasagna, which stretches the batch over several meals.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, finely chopped',
      '2 carrots, finely chopped',
      '2 celery sticks, finely chopped',
      '3 garlic cloves, chopped',
      '2 tbsp tomato purée',
      '200 g green lentils, rinsed',
      '400 g tin chopped tomatoes',
      '500 ml water',
      '1 tbsp soy sauce',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '350 g spaghetti'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion, carrots and celery for 10 minutes, stirring often. Add the garlic and cook for 1 minute.',
      'Stir in the purée and cook for 2 minutes until it darkens.',
      'Add the lentils, tomatoes, water, soy sauce, oregano and salt. Bring to a boil, then simmer partly covered for 30 minutes, adding water if it dries out.',
      'Boil the spaghetti in salted water until just tender, drain and serve topped with the sauce.'
    ],
    tips: [
      'Chop the vegetables small so they melt into the sauce.',
      'Add water if the sauce thickens too much before the lentils are tender.',
      'Taste for salt at the end.'
    ],
    pair: ['Grated parmesan', 'Green salad', 'Garlic bread', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat with a splash of water.',
    nut: [653, 26, 108, 13, 12, 10, 580]
  },

  'bean-and-rice-burrito': {
    d: 'Tortillas filled with spiced rice, refried beans, cheese and salsa, rolled and toasted in a pan. Four servings in 25 minutes.',
    meta: 'Bean and rice burrito: tortillas filled with seasoned rice, refried beans, cheese and salsa, then toasted. A cheap meal for four in 25 minutes.',
    kw: ['bean and rice burrito', 'easy bean burritos', 'budget burrito', 'rice and refried bean burrito', 'cheap mexican style dinner'],
    why: 'A burrito is a way of making rice and beans portable. The filling is plain on purpose: a scoop of seasoned rice, a spoon of refried beans, some cheese and salsa.\n\nWarm the tortillas before filling. Cold tortillas crack when rolled; a minute in a dry pan or 20 seconds in the microwave makes them supple.\n\nDo not overfill. **Two heaped spoons is enough** for each. Too much and the burrito splits when you fold it.\n\nFold in the sides first, then roll from the bottom, tucking as you go. Toast the rolled burritos seam side down in a pan for 2 minutes per side, so the seam seals and the outside crisps. Wrapped in foil, they hold for lunch boxes. Burritos are a good way to use up leftover rice and make a very cheap filling for a hungry household. Wrapped tightly in foil, they hold their shape and are easy to take to work or school.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '2 garlic cloves, chopped',
      '1 tsp ground cumin',
      '1 tsp chili powder',
      '200 g cooked rice',
      '400 g refried beans',
      '100 g salsa',
      '120 g grated cheddar',
      '4 large flour tortillas'
    ],
    st: [
      'Heat the oil in a pan over medium heat and cook the onion for 5 minutes. Add the garlic, cumin and chili powder and cook for 1 minute.',
      'Stir in the rice and cook for 2 minutes. Warm the refried beans in a separate pan or the microwave.',
      'Warm the tortillas. Spread a quarter of the beans down the middle of each, then add the rice, salsa and cheese.',
      'Fold in the sides, roll up tightly and toast seam side down in a dry pan for 2 minutes per side.'
    ],
    tips: [
      'Warm the tortillas first so they do not crack.',
      'Do not overfill; fold in the ends before rolling.',
      'Use leftover rice, cooked and cooled quickly.'
    ],
    pair: ['Soured cream', 'Guacamole', 'Green salad', 'Hot sauce'],
    store: 'Keeps in the fridge for up to 2 days wrapped in foil. Reheat in a pan or oven at 180°C for 12 minutes. Freezes for up to 2 months.',
    nut: [532, 21, 67, 20, 8, 5, 1200]
  },

  'black-bean-and-rice-skillet': {
    d: 'Rice, black beans, tomatoes and sweetcorn cooked together in a spiced skillet and topped with cheese. Four servings in 35 minutes.',
    meta: 'Black bean and rice skillet: rice cooked with black beans, tomatoes and sweetcorn in one pan under cheese. A cheap supper for four in 35 minutes.',
    kw: ['black bean and rice skillet', 'beans and rice skillet', 'budget rice and beans', 'easy mexican rice skillet', 'cheap rice dinner'],
    why: 'The rice cooks in the pan with everything else, which is why this works as a skillet dish: it soaks up the tomato and spice as it swells.\n\nToast the rice in the oil for a minute before the liquid goes in. It coats each grain in fat, keeps them separate and gives a faint nuttiness.\n\nThe liquid is the tin of tomatoes plus water, in exactly the right proportion. **Do not lift the lid** once it is on, for 15 minutes. The steam cooks the rice, and every peek lets it out.\n\nBeans and sweetcorn go in with the liquid and warm through as the rice finishes. Cheese on top melts in the residual heat. A lid for 2 minutes does the job. A skillet dish like this is endlessly adaptable: pour in a spoon of chipotle for smoke or stir through some chopped coriander at the end. The tin of beans is the main cost, and one tin feeds the pan well.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '1 green pepper, diced',
      '3 garlic cloves, chopped',
      '250 g long-grain rice, rinsed',
      '2 tsp ground cumin',
      '1 tsp chili powder',
      '400 g tin chopped tomatoes',
      '350 ml water',
      '480 g tinned black beans, drained and rinsed',
      '165 g tinned sweetcorn, drained',
      '1 tsp salt',
      '100 g grated cheddar'
    ],
    st: [
      'Heat the oil in a large lidded pan over medium heat. Cook the onion and pepper for 5 minutes. Add the garlic and rice and stir for 1 minute. Add the cumin and chili powder.',
      'Pour in the tomatoes and water, add the beans, sweetcorn and salt and bring to a boil.',
      'Cover and cook on the lowest heat for 15 minutes without lifting the lid, until the rice is tender.',
      'Scatter with the cheese, cover for 2 minutes until melted, and serve.'
    ],
    tips: [
      'Rinse the rice so the grains stay separate.',
      'Keep the lid on tight; steam cooks the rice.',
      'If the rice is firm after 15 minutes, add a splash of water and cook for 5 more.'
    ],
    pair: ['Soured cream', 'Lime wedges', 'Avocado', 'Green salad'],
    store: 'Cool quickly and keep in the fridge for up to 2 days. Reheat until steaming throughout. Do not leave cooked rice out for more than an hour.',
    nut: [585, 22, 86, 17, 12, 7, 1140]
  },

  'eggs-in-purgatory': {
    d: 'Eggs poached in a spicy tomato sauce with garlic and chili, served with bread. Two servings in 25 minutes.',
    meta: 'Eggs in purgatory: eggs poached in a spicy tomato and garlic sauce, served with crusty bread. A very cheap supper for two in 25 minutes.',
    kw: ['eggs in purgatory', 'italian eggs in tomato sauce', 'budget egg dinner', 'easy poached eggs in tomato sauce', 'cheap supper for two'],
    why: 'A good version has a sauce that is thick enough to hold the eggs and a little hot enough to make you notice. Garlic and chili cooked in oil for a minute, then tinned tomatoes simmered until they darken, take about 12 minutes.\n\nThe sauce must be thick. Thin sauce lets the eggs float around and the whites spread out.\n\nMake a small well for each egg with the back of a spoon, crack the egg in, and cover the pan. **The lid is what sets the tops**: without it the whites are done but the yolks stay raw on top.\n\nThree to four minutes gives a set white and a runny yolk. Longer gives a hard yolk, which suits some people. Serve straight from the pan, with bread for the sauce. The sauce can be made earlier and warmed when needed, and the eggs go in at the last minute. A pinch more chili makes the purgatory of the name more convincing, so adjust to taste.',
    ing: [
      '2 tbsp olive oil',
      '3 garlic cloves, thinly sliced',
      '1/2 tsp dried chili flakes',
      '400 g tin chopped tomatoes',
      '1/2 tsp salt',
      '1/2 tsp dried oregano',
      '4 eggs',
      '2 tbsp chopped parsley',
      '4 slices crusty bread'
    ],
    st: [
      'Heat the oil in a wide pan over medium heat. Cook the garlic and chili for 1 minute.',
      'Add the tomatoes, salt and oregano and simmer for 12 minutes until thick.',
      'Make four wells in the sauce, crack an egg into each, cover and cook on low heat for 4 minutes until the whites are set and the yolks still soft.',
      'Scatter with the parsley and serve with the bread.'
    ],
    tips: [
      'Simmer the sauce until thick before the eggs go in.',
      'Keep the heat low so the bottoms of the eggs do not toughen.',
      'Cook for 6 minutes for firm yolks.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Grated parmesan', 'Olives'],
    store: 'Best eaten straight away. The sauce alone keeps in the fridge for up to 3 days.',
    nut: [474, 20, 40, 26, 5, 9, 1020]
  },

  'potato-frittata': {
    d: 'Thin-sliced potato and onion cooked in olive oil, set in eggs and finished in the oven. Four servings in 30 minutes.',
    meta: 'Potato frittata: sliced potato and onion cooked in olive oil and set in eggs, finished in the oven. A cheap supper for four in 30 minutes.',
    kw: ['potato frittata', 'potato and onion frittata', 'budget egg dinner', 'easy frittata with potatoes', 'cheap supper for four'],
    why: 'The potatoes are the dish, so cook them properly. Thin slices, about 3 mm, fried slowly in olive oil until soft and just golden, take 12 minutes. Skip that and you get raw potato in set egg.\n\nOnion goes in with the potato. It softens and sweetens alongside it.\n\nBeat the eggs with salt and pour them over the hot potatoes. **Let them sit for 2 minutes** before the pan goes into the oven, so the base begins to set and the potatoes are suspended in egg.\n\nA frittata finishes in the oven rather than flipped. Eight minutes at 200°C sets the top without drying it. It is just as good warm or cold, so it works for a packed lunch. Frittata is a forgiving dish and ideal for using up the end of the vegetable drawer. It is as good cold as warm, so a slice in a lunch box with a salad is an easy meal.',
    ing: [
      '4 tbsp olive oil',
      '500 g potatoes, peeled and sliced 3 mm thick',
      '1 onion, thinly sliced',
      '1 tsp salt',
      '6 eggs',
      '1/2 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Heat the oil in a 24 cm ovenproof frying pan over medium heat. Add the potatoes, onion and half the salt and cook for 12 minutes, turning, until soft.',
      'Whisk the eggs with the remaining salt, pepper and parsley.',
      'Pour over the potatoes, shake the pan to settle, and leave on the heat for 2 minutes.',
      'Transfer to the oven for 8 minutes until the top is set and lightly golden. Rest for 5 minutes, then slide out and cut into wedges.'
    ],
    tips: [
      'Cook the potato until completely tender before the eggs go in.',
      'If you have no ovenproof pan, cover with a lid and cook on low heat for 8 minutes.',
      'Rest it before cutting so it holds together.'
    ],
    pair: ['Green salad', 'Tomato salad', 'Crusty bread', 'Pickles'],
    store: 'Keeps in the fridge for up to 3 days. Serve cold, or reheat at 160°C for 12 minutes.',
    nut: [337, 12, 25, 21, 3, 2, 690]
  },

  'spaghetti-frittata': {
    d: 'Leftover cooked spaghetti mixed with eggs, cheese and parsley and set into a round cake in a pan. Four servings in 30 minutes.',
    meta: 'Spaghetti frittata: cooked spaghetti mixed with eggs, cheese and parsley and set in a pan. A cheap way to use leftover pasta, four servings in 30 minutes.',
    kw: ['spaghetti frittata', 'leftover pasta frittata', 'budget egg and pasta dinner', 'easy spaghetti omelette', 'cheap supper for four'],
    why: 'Leftover spaghetti is the best start, as cold pasta has dried slightly and soaks up egg without going soggy. If you are starting from scratch, boil it, drain it, and let it cool for 20 minutes.\n\nThe egg mixture is simple: eggs, grated parmesan, parsley and black pepper. The cheese adds salt and seasoning, so little else is needed.\n\nMix everything in a bowl and let it sit for 5 minutes so the pasta takes up the egg.\n\n**Cook it over medium-low heat and do not rush.** The base should set and turn golden before the top is finished, about 8 minutes. Slide it onto a plate, flip it back in and cook for 4 minutes more, or finish under a hot grill. The dish uses pasta that might otherwise be thrown away. A spoon of any leftover tomato sauce stirred into the egg adds colour and a little extra flavour.',
    ing: [
      '250 g cooked spaghetti',
      '6 eggs',
      '60 g grated parmesan',
      '2 tbsp chopped parsley',
      '1/2 tsp black pepper',
      '1/2 tsp salt',
      '2 tbsp olive oil'
    ],
    st: [
      'Whisk the eggs with the parmesan, parsley, pepper and salt. Stir in the spaghetti and leave for 5 minutes.',
      'Heat the oil in a 24 cm non-stick frying pan over medium-low heat. Pour in the mixture and press flat.',
      'Cook for 8 minutes until the base is golden and the top is nearly set.',
      'Slide onto a plate, invert back into the pan and cook for 4 minutes more. Rest for 3 minutes and cut into wedges.'
    ],
    tips: [
      'Use a non-stick pan so the frittata slides out.',
      'Finish under a hot grill instead of flipping if you prefer.',
      'Let the mixture rest so the pasta absorbs the egg.'
    ],
    pair: ['Green salad', 'Tomato sauce', 'Crusty bread', 'Roasted peppers'],
    store: 'Keeps in the fridge for up to 3 days. Eat cold or reheat in a pan.',
    nut: [327, 19, 20, 19, 1, 1, 610]
  },

  'cheese-and-broccoli-pasta': {
    d: 'Pasta and broccoli cooked together and tossed in a quick cheese sauce. Four servings in 20 minutes.',
    meta: 'Cheese and broccoli pasta: pasta and broccoli cooked together and tossed in a quick cheddar sauce. A cheap supper for four in 20 minutes.',
    kw: ['cheese and broccoli pasta', 'broccoli cheddar pasta', 'budget cheesy pasta', 'easy broccoli pasta', 'cheap quick supper'],
    why: 'One pot of boiling water does both jobs. The broccoli goes in with the pasta for the last 3 minutes, so it is bright green and tender-crisp when the pasta is ready.\n\nThe cheese sauce is a short cut: butter, flour, milk and cheddar, made in the pan while the pasta cooks. Whisk the milk in a little at a time, and take the pan off the heat before adding the cheese. **Cheese melted into boiling sauce goes grainy.**\n\nA spoon of mustard sharpens the sauce, and a pinch of nutmeg or paprika adds depth. Neither will be noticed on their own.\n\nPasta water loosens the sauce if it tightens. Add a spoonful at a time. Broccoli stalks are as good as the florets if peeled and sliced thin, and cost nothing extra. A little grated nutmeg in the sauce is a classic touch, though the dish is good without it.',
    ing: [
      '350 g macaroni',
      '400 g broccoli florets',
      '40 g butter',
      '40 g plain flour',
      '600 ml milk',
      '200 g grated cheddar',
      '1 tsp Dijon mustard',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the macaroni in well-salted water for 3 minutes less than the packet says. Add the broccoli and cook for 3 minutes more. Keep a mug of water, then drain.',
      'In the same pan melt the butter, stir in the flour for 1 minute, then add the milk gradually, whisking, and simmer for 3 minutes.',
      'Take off the heat, stir in the cheese, mustard, salt and pepper until smooth.',
      'Return the pasta and broccoli to the pan and toss, loosening with the pasta water if needed.'
    ],
    tips: [
      'Take the sauce off the heat before adding the cheese.',
      'Cut the broccoli into small florets so they cook in 3 minutes.',
      'Add pasta water if the sauce thickens as it stands.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Baked tomatoes'],
    store: 'Keeps in the fridge for up to 2 days. Reheat with a splash of milk.',
    nut: [772, 33, 88, 32, 6, 12, 750]
  },

  'broccoli-cheese-rice': {
    d: 'Rice and chopped broccoli cooked in milk and stock and finished with melted cheddar. Four servings in 35 minutes.',
    meta: 'Broccoli cheese rice: rice and chopped broccoli cooked in stock and finished with melted cheddar. A cheap one-pan side or supper for four, 35 minutes.',
    kw: ['broccoli cheese rice', 'cheesy broccoli rice', 'budget rice and broccoli', 'easy cheesy rice dinner', 'cheap rice supper'],
    why: 'Rice cooked in stock instead of water absorbs the flavour right through, and finishing it with cheese turns a side dish into a meal.\n\nThe broccoli is chopped small, about 1 cm, so it cooks with the rice and does not need a separate pan. Stalks included: peeled and diced, they are sweet and tender.\n\nCook the rice with the lid on and leave the lid alone. **Peeking releases steam** and the top layer stays hard while the bottom catches.\n\nThe cheese goes in at the end, off the heat, stirred through in handfuls. It melts into the steam and coats the grains. If you add it earlier it turns oily. A squeeze of lemon sharpens the whole dish. The dish works as a side for roast chicken or sausages, or as a light supper on its own. Frozen broccoli can replace fresh, and needs no thawing before it goes into the pot.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '2 garlic cloves, chopped',
      '250 g long-grain rice, rinsed',
      '500 ml vegetable stock',
      '300 g broccoli, finely chopped',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '150 g grated cheddar',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat the oil in a lidded pan over medium heat. Cook the onion for 5 minutes, add the garlic and rice and stir for 1 minute.',
      'Pour in the stock, add the broccoli, salt and pepper and bring to a boil.',
      'Cover and cook on the lowest heat for 15 minutes without lifting the lid. Remove from the heat and leave covered for 5 minutes.',
      'Stir in the cheese and lemon juice until melted and serve.'
    ],
    tips: [
      'Chop the broccoli small so it cooks in the same time as the rice.',
      'Add the cheese off the heat so it melts without turning oily.',
      'If the rice is firm after 15 minutes, add a splash of water and cover for 5.'
    ],
    pair: ['Grilled chicken', 'Fried egg', 'Green salad', 'Roasted tomatoes'],
    store: 'Cool quickly and keep in the fridge for up to 2 days. Reheat until steaming throughout.',
    nut: [465, 18, 60, 17, 3, 3, 980]
  },

  'cheesy-rice-casserole': {
    d: 'Rice baked with cheese, milk, onion and a little butter until golden on top. Six servings in 50 minutes.',
    meta: 'Cheesy rice casserole: rice baked with cheddar, milk and onion until golden. A cheap side or supper for six in 50 minutes.',
    kw: ['cheesy rice casserole', 'baked cheese and rice', 'budget rice bake', 'easy rice casserole', 'cheap family side dish'],
    why: 'Rice and cheese baked together is a dish of the simplest things, and it works because of how the starch behaves. The rice swells in milk and stock, releasing starch that thickens the liquid into a creamy sauce, with cheese melted through.\n\nUse long-grain rice and rinse it. Rinsed grains stay separate; unrinsed ones clump into a heavy mass.\n\nThe liquid is milk and stock in equal parts, measured exactly. **Too much liquid and the casserole is soup**, too little and the rice stays hard in the middle.\n\nCover with foil for the first 30 minutes so the rice steams, then uncover so the cheese on top browns. Let it rest for 10 minutes before serving. It is a good partner for roast chicken or sausages. A large batch is easy to make and keeps its heat for some time after it comes out of the oven. Leftover portions can be reheated in the microwave with a splash of milk to loosen the rice.',
    ing: [
      '300 g long-grain rice, rinsed',
      '20 g butter',
      '1 onion, finely chopped',
      '300 ml milk',
      '450 ml vegetable stock',
      '250 g grated cheddar',
      '1 tsp mustard powder',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan). Melt the butter in a pan and cook the onion for 5 minutes.',
      'Mix the rice, onion, milk, stock, mustard powder, salt, pepper and two thirds of the cheese in a 2.5 litre baking dish.',
      'Cover tightly with foil and bake for 30 minutes.',
      'Uncover, stir once, scatter with the remaining cheese and bake for 10 minutes more until golden and the rice is tender. Rest for 10 minutes.'
    ],
    tips: [
      'Measure the liquid exactly; it controls the texture.',
      'Cover tightly with foil so the rice steams.',
      'If the rice is firm at the end, add a splash of hot stock and bake for 10 minutes more.'
    ],
    pair: ['Roast chicken', 'Sausages', 'Green beans', 'Side salad'],
    store: 'Cool quickly and keep in the fridge for up to 2 days. Reheat with a splash of milk until steaming throughout.',
    nut: [423, 17, 46, 19, 1, 3, 740]
  },

  'navy-bean-soup': {
    d: 'Dried navy beans simmered with onion, carrot, celery and a ham hock until thick and creamy. Six servings in 1 hour 40 minutes.',
    meta: 'Navy bean soup: dried navy beans simmered with onion, carrot, celery and ham until thick and creamy. A very cheap soup for six, 1 hour 40.',
    kw: ['navy bean soup', 'ham and bean soup', 'budget dried bean soup', 'easy navy bean and ham soup', 'cheap soup for six'],
    why: 'A bag of dried beans costs a few coins and makes a pot of soup for six. The work is in the waiting, not the doing.\n\nSoak the beans overnight in plenty of cold water. They double in size, so use a large bowl. Drain and rinse before cooking; the soaking water carries some of the compounds that cause wind.\n\nA piece of smoked ham gives the soup its flavour. Ham hocks and bacon ends are among the cheapest cuts, and a small piece flavours a whole pot.\n\n**Do not add salt until the beans are tender.** Early salt can leave the skins tough. Ham brings plenty anyway. The soup is ready when the beans crush easily against the pot. Mash a few to thicken it. Dried beans are a cheap, shelf-stable ingredient, and a bag makes several meals. The soup thickens as it stands, so keep a kettle nearby to loosen leftovers with a splash of hot water.',
    ing: [
      '400 g dried navy beans, soaked overnight and drained',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, chopped',
      '1 ham hock, about 400 g',
      '1.8 litres water',
      '2 bay leaves',
      '1/2 tsp black pepper',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion, carrots and celery for 8 minutes. Add the garlic and cook for 1 minute.',
      'Add the beans, ham hock, water, bay leaves and pepper. Bring to a boil, skim off any foam, then simmer, partly covered, for 1 hour 15 minutes until the beans are tender.',
      'Lift out the ham hock, shred the meat and return it to the pot, discarding the skin and bones. Crush a few beans against the side of the pot.',
      'Season with the salt, taste, and simmer for 5 minutes more.'
    ],
    tips: [
      'Soak the beans overnight and drain them before cooking.',
      'Add salt only once the beans are soft.',
      'Check the water level and top up if the soup gets too thick.'
    ],
    pair: ['Cornbread', 'Crusty bread', 'Green salad', 'Hot sauce'],
    store: 'Keeps in the fridge for up to 4 days and thickens. Freezes for up to 3 months. Reheat with a splash of water.',
    rest: [480, 'Soaking the beans'],
    nut: [404, 29, 45, 12, 11, 3, 1100]
  },

  'quebec-pea-soup': {
    d: 'Dried yellow split peas simmered with ham, onion and carrot into a thick soup. Six servings in 1 hour 40 minutes.',
    meta: 'Quebec pea soup: dried yellow split peas simmered with smoked ham, onion and carrot into a thick soup. A very cheap pot for six, 1 hour 40.',
    kw: ['quebec pea soup', 'canadian split pea soup', 'budget split pea soup', 'easy pea and ham soup', 'cheap soup for six'],
    why: 'Yellow split peas need no soaking, which is what makes this soup cheap in time as well as money. They break down completely as they simmer, thickening the pot into something close to a purée without any blending.\n\nA piece of smoked ham gives it its flavour. A ham hock or an end of bacon is plenty, and the meat shreds into the pot at the end.\n\nSkim the foam when it first boils. It is the starch and impurities coming off the peas, and it makes the soup cloudy if left.\n\n**Stir often in the last 30 minutes.** The peas settle at the bottom and catch, and a scorched layer ruins the pot. If the soup gets too thick, add hot water. It thickens a lot as it cools. A pot like this feeds a family for several days and freezes well, so it is a sensible batch to make. Serve it with plenty of bread and a little mustard on the side for the ham.',
    ing: [
      '400 g dried yellow split peas, rinsed',
      '1 ham hock, about 400 g',
      '2 litres water',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1/2 tsp black pepper',
      '1 tsp salt'
    ],
    st: [
      'Put the peas, ham hock, water, onion, carrots, celery, bay leaves and thyme in a large pot. Bring to a boil and skim off the foam.',
      'Lower the heat, cover partly and simmer for 1 hour 15 minutes, stirring often toward the end, until the peas have broken down into a thick soup.',
      'Lift out the ham hock. Shred the meat and return it to the pot, discarding the skin and bones.',
      'Season with the pepper and the salt, remove the bay leaves, and simmer for 5 minutes more.'
    ],
    tips: [
      'Skim the foam early for a cleaner soup.',
      'Stir often near the end so the peas do not catch.',
      'Thin with hot water when you reheat it.'
    ],
    pair: ['Rye bread', 'Crusty bread', 'Mustard', 'Pickles'],
    store: 'Keeps in the fridge for up to 4 days and thickens a lot; thin with water. Freezes for up to 3 months.',
    nut: [372, 30, 45, 8, 19, 7, 1100]
  }
};
