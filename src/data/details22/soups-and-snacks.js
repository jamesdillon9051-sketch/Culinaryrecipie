'use strict';

/**
 * Volume twenty-two — soups, sandwiches and the breakfast table.
 *
 * The British soup shelf that the catalogue skipped (carrot and coriander,
 * parsnip, Stilton and broccoli, pea and mint, cock-a-leekie), and the food
 * eaten standing up or in the first ten minutes of the morning: the chip
 * butty, the bacon sandwich, the fish finger sandwich, beans on toast, egg and
 * soldiers, porridge and drop scones. They are barely recipes and are searched
 * for constantly, which is the reason to get them exactly right.
 */

module.exports = {
  'carrot-and-coriander-soup': {
    d: 'Sweet carrots simmered with coriander seed and blended silky, finished with a bunch of fresh coriander leaf. Fifty minutes, no cream.',
    meta: 'Carrot and coriander soup: sweet carrots and onion simmered with ground coriander and blended velvety with fresh coriander. Vegan and cream-free.',
    kw: ['carrot and coriander soup', 'carrot and coriander soup recipe', 'homemade carrot soup', 'vegan carrot and coriander soup', 'carrot soup with fresh coriander'],
    why: 'Carrots are sweet and coriander is not, and the soup is the argument between them. Ground coriander seed is cooked in the oil with the onion so its warm, citrusy note runs through the whole base, and the fresh leaf goes in at the end, blended in, for the green, herby edge that would be lost if it cooked. The carrots give body and colour and nothing else is needed: blending for a couple of minutes, longer than seems necessary, is what makes it velvety without cream.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '2 tsp ground coriander',
      '0.5 tsp ground cumin',
      '800 g carrots, peeled and sliced',
      '1 litre vegetable stock',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '40 g fresh coriander, leaves and tender stems',
      'Juice of 0.5 lemon'
    ],
    st: [
      'Heat the oil in a large pot over medium heat and cook the onion for 8 minutes until soft.',
      'Add the garlic, ground coriander and cumin and cook 1 minute, stirring.',
      'Add the carrots, stock, salt and pepper and bring to a boil, then lower the heat and simmer 20 minutes, until the carrots are very soft.',
      'Add most of the fresh coriander and blend with a stick blender for 2 to 3 minutes, until completely smooth.',
      'Stir in the lemon juice and taste for salt.',
      'Ladle into bowls and top with the remaining coriander leaves.'
    ],
    tips: [
      'Simmer until the carrots are very soft. Firm ones leave the soup grainy.',
      'Blend longer than seems needed. It is what makes it silky without cream.',
      'Stir in the fresh coriander at the end. Cooking dulls its flavour.'
    ],
    pair: ['Crusty bread', 'A cheese scone', 'A green salad'],
    store: 'Refrigerate up to 4 days and reheat gently. Freeze for 3 months.',
    nut: [112, 3, 16, 4, 5, 9, 560]
  },

  'parsnip-soup': {
    d: 'Parsnips roasted until caramelised, then simmered and blended with a little mild curry powder. The autumn soup, in an hour.',
    meta: 'Parsnip soup: parsnips roasted until sweet and caramelised, then simmered with onion and mild curry spice and blended into a creamy, warming soup.',
    kw: ['parsnip soup', 'parsnip soup recipe', 'roasted parsnip soup', 'curried parsnip soup', 'creamy parsnip soup'],
    why: 'Parsnips are sweeter than any other root, and roasting them first is what turns that sweetness into something deeper: the edges caramelise, the flavour goes nutty and toasty, and the soup made from them tastes like more than boiled parsnip. A little mild curry powder is the traditional companion, since its warm spices sit well with the sweetness without making it a curry. A potato in the pot gives the soup body and a smooth texture, so it needs little or no cream.',
    ing: [
      '800 g parsnips, peeled and cut into 3 cm chunks',
      '3 tbsp olive oil, divided',
      '1 tsp fine sea salt, divided',
      '30 g unsalted butter',
      '1 onion, chopped',
      '2 garlic cloves, minced',
      '1 tbsp mild curry powder',
      '1 potato, about 200 g, peeled and diced',
      '1 litre vegetable stock',
      '150 ml whole milk',
      '0.5 tsp black pepper',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200°C / 400°F.',
      'Toss the parsnips with 2 tablespoons of the oil and half the salt on a baking tray and roast 25 minutes, turning once, until golden and caramelised at the edges.',
      'Meanwhile melt the butter with the remaining oil in a large pot and cook the onion 8 minutes until soft. Add the garlic and curry powder and cook 1 minute.',
      'Add the roasted parsnips, potato and stock and bring to a boil, then simmer 15 minutes until the potato is tender.',
      'Blend until smooth with a stick blender.',
      'Stir in the milk, the remaining salt and the pepper and warm through without boiling.',
      'Serve topped with the parsley.'
    ],
    tips: [
      'Roast the parsnips first. It is the difference between sweet and deep.',
      'Cut out any woody core from large parsnips before roasting.',
      'Blend well. A silky texture is the whole appeal.'
    ],
    pair: ['Crusty bread', 'Cheese scones', 'A crisp apple'],
    store: 'Refrigerate up to 4 days and reheat gently. Freeze without the milk for 3 months.',
    nut: [220, 5, 32, 8, 8, 12, 600]
  },

  'stilton-and-broccoli-soup': {
    d: 'Broccoli and potato simmered in stock and blended, then finished with crumbled Stilton off the heat. Thirty-five minutes.',
    meta: 'Stilton and broccoli soup: broccoli and potato simmered and blended smooth, finished with crumbled Stilton for a sharp, savoury, creamy blue cheese soup.',
    kw: ['stilton and broccoli soup', 'stilton and broccoli soup recipe', 'broccoli and stilton soup', 'blue cheese and broccoli soup', 'creamy stilton soup'],
    why: 'Stilton is the flavour and it goes in at the end, off the heat, so that it melts into the soup without going stringy or grainy and keeps its sharpness; cooked for long, blue cheese turns bitter. The broccoli is cooked only until tender, since overcooked broccoli goes grey and sulphurous, and a potato gives body without flour. Salt goes in last because Stilton is salty and it is impossible to judge the seasoning until the cheese has melted.',
    ing: [
      '1 tbsp unsalted butter',
      '1 onion, chopped',
      '1 potato, about 200 g, peeled and diced',
      '500 g broccoli, florets and stalks chopped',
      '800 ml vegetable stock',
      '150 g Stilton, crumbled',
      '100 ml double cream',
      '0.5 tsp black pepper',
      'Salt, to taste',
      '2 tbsp chives, snipped'
    ],
    st: [
      'Melt the butter in a large pot over medium heat and cook the onion for 6 minutes until soft.',
      'Add the potato and stock, bring to a boil and simmer 8 minutes.',
      'Add the broccoli and simmer 6 minutes more, until just tender and still bright green.',
      'Take off the heat and blend with a stick blender until smooth.',
      'Add the Stilton and stir until it melts, then stir in the cream and pepper.',
      'Taste and add salt if needed, since the cheese is salty.',
      'Serve topped with the chives and a little extra crumbled Stilton.'
    ],
    tips: [
      'Take the soup off the heat before adding the cheese. Boiled blue cheese turns bitter.',
      'Cook the broccoli only until tender. Grey broccoli tastes sulphurous.',
      'Salt at the end. Stilton is very salty.'
    ],
    pair: ['Crusty bread', 'Oatcakes', 'A crisp Bramley apple'],
    store: 'Refrigerate up to 3 days and reheat gently without boiling. Freeze without the cream for 2 months.',
    nut: [324, 14, 22, 20, 5, 6, 900]
  },

  'pea-and-mint-soup': {
    d: 'Frozen peas, a little potato and a handful of mint blended into a bright, sweet green soup. Twenty-five minutes.',
    meta: 'Pea and mint soup: frozen peas, onion and potato simmered briefly with vegetable stock and blended with fresh mint into a bright green vegan soup.',
    kw: ['pea and mint soup', 'pea and mint soup recipe', 'vegan pea and mint soup', 'fresh pea soup with mint', 'green pea soup'],
    why: 'The colour is the thing to protect, and it comes from cooking the peas for as little time as possible: a few minutes in hot stock and then straight to the blender, so the chlorophyll stays green rather than turning to olive. The mint is added to the blender rather than to the pot for the same reason, since heat kills its fresh flavour. Frozen peas are frozen within hours of picking and are usually sweeter than fresh peas from the market, so they are the right choice here.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, chopped',
      '1 small potato, about 150 g, peeled and diced',
      '700 ml vegetable stock',
      '500 g frozen peas',
      '15 g fresh mint leaves',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      'Juice of 0.5 lemon'
    ],
    st: [
      'Heat the oil in a saucepan over medium heat and cook the onion for 5 minutes until soft.',
      'Add the potato and stock, bring to a boil and simmer 8 minutes until the potato is tender.',
      'Add the peas and cook 2 to 3 minutes, just until heated through.',
      'Take off the heat, add the mint, salt, pepper and lemon juice and blend until completely smooth.',
      'Taste for salt and serve hot, or chill and serve cold.'
    ],
    tips: [
      'Do not overcook the peas. A few minutes is enough to keep the colour bright.',
      'Add the mint to the blender, not the pot. Heat dulls it.',
      'Serve hot or cold. It is good either way.'
    ],
    pair: ['Crusty bread', 'A poached egg', 'Crumbled feta'],
    store: 'Refrigerate up to 3 days and eat cold or reheat gently. The colour dulls after a day. Freeze for 3 months.',
    nut: [185, 9, 26, 5, 8, 8, 580]
  },

  'lentil-and-bacon-soup': {
    d: 'A thick, smoky soup of green lentils, carrots and celery, built on crisp bacon and a ham or chicken stock. One hour.',
    meta: 'Lentil and bacon soup: a thick, smoky, hearty soup of green lentils, carrots, celery and crisp bacon, with thyme and a splash of vinegar to lift it.',
    kw: ['lentil and bacon soup', 'lentil and bacon soup recipe', 'smoky lentil soup with bacon', 'hearty lentil soup', 'lentil soup with ham stock'],
    why: 'The bacon is the flavour foundation: rendered slowly, it leaves its fat and its smoke in the pan for the vegetables to cook in, and a few crisp pieces are kept back for the top. Green or brown lentils hold their shape through a long simmer, while red ones dissolve, so they are used here for a soup with body and bite; blending only a portion thickens it without turning it to purée. A splash of vinegar at the end is what lifts a soup that is otherwise all earth and smoke.',
    ing: [
      '150 g streaky bacon, diced',
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, minced',
      '1 tbsp tomato purée',
      '250 g green or brown lentils, rinsed',
      '1.5 litres ham or chicken stock',
      '2 bay leaves',
      '1 tsp dried thyme',
      '0.5 tsp black pepper',
      '1 tbsp red wine vinegar',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Cook the bacon in a large pot over medium heat for 8 minutes until the fat renders and it is crisp. Lift out half onto paper towels for serving.',
      'Add the oil, onion, carrots and celery to the pot and cook 8 minutes until softened. Add the garlic and tomato purée and cook 2 minutes.',
      'Add the lentils, stock, bay leaves, thyme and pepper and bring to a boil.',
      'Simmer 30 minutes, partly covered, until the lentils are tender.',
      'Remove the bay leaves. Blend about a third of the soup with a stick blender to thicken it and leave the rest chunky.',
      'Stir in the vinegar and taste for salt; the bacon and stock may already be salty enough.',
      'Serve topped with the crisp bacon and parsley.'
    ],
    tips: [
      'Use green or brown lentils. Red lentils dissolve to mush.',
      'Blend only a third for body and keep the rest chunky.',
      'Finish with vinegar. It lifts the smoke and earth.'
    ],
    pair: ['Crusty bread', 'A poached egg', 'A green salad'],
    store: 'Refrigerate up to 5 days. It thickens as it sits, so loosen with stock. Freeze for 3 months.',
    nut: [306, 20, 34, 10, 9, 5, 1000]
  },

  'cock-a-leekie-soup': {
    d: 'Scotland\'s national chicken soup: a golden broth of chicken and barley, with leeks added in two halves and a few prunes. Just under two hours.',
    meta: 'Cock-a-leekie soup: Scotland\'s chicken and leek broth, made with bone-in thighs, pearl barley and prunes, with the leeks added in two stages.',
    kw: ['cock a leekie soup', 'cock a leekie soup recipe', 'scottish chicken and leek soup', 'traditional cock a leekie with prunes', 'chicken leek and barley soup'],
    why: 'The leeks go in twice: half at the start, to dissolve into the broth and flavour it, and half near the end, cut in rings, so that a soup with leeks in it still has leeks that taste like leeks. The prunes are the peculiar part of the recipe and the oldest, a sweet-sour note against the savoury chicken that is best described as a seasoning rather than a fruit. Cooking on the bone gives a broth that sets to a light jelly when cold, which is the sign of a good one.',
    ing: [
      '700 g bone-in skinless chicken thighs',
      '1.5 litres chicken stock',
      '4 leeks, white and light green parts, cleaned',
      '60 g pearl barley, rinsed',
      '2 bay leaves',
      '1 tsp dried thyme',
      '8 stoned prunes, halved',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Put the chicken, stock, bay leaves, thyme and half the leeks, roughly chopped, in a large pot. Bring to a boil, skim off any scum, then simmer, partly covered, 40 minutes.',
      'Lift out the chicken, pull the meat from the bones in bite-sized pieces and discard the bones and the boiled leeks and bay leaves.',
      'Strain the broth back into the pot and add the barley. Simmer 25 minutes.',
      'Slice the remaining leeks into rings and add them with the prunes. Simmer 15 minutes more, until the barley and leeks are tender.',
      'Return the chicken to the pot, add the salt and pepper and warm through for 3 minutes.',
      'Ladle into bowls and scatter with the parsley.'
    ],
    tips: [
      'Add the leeks in two halves. The first flavours the broth and the second stays green.',
      'Do not skip the prunes. They are the traditional sweet-sour note.',
      'Skim the broth early for a clear soup.'
    ],
    pair: ['Oatcakes', 'Crusty bread', 'A dram of whisky'],
    store: 'Refrigerate up to 4 days. It sets to a light jelly when cold. Reheat gently. Freeze for 3 months.',
    nut: [232, 22, 18, 8, 4, 6, 850]
  },

  'chip-butty': {
    d: 'Thick, crisp oven chips piled into buttered white bread with ketchup or brown sauce. The best thing on a cold day, in forty minutes.',
    meta: 'Chip butty: thick, golden oven chips piled into soft buttered white bread and finished with ketchup or brown sauce. Simple, hot and filling.',
    kw: ['chip butty', 'chip butty recipe', 'chip sandwich', 'how to make a chip butty', 'chip butty with brown sauce'],
    why: 'A chip butty is defined by the contrast between the crisp, hot chips and the soft, cold, buttered bread, which is why the bread is fresh and thick-sliced and buttered generously, and why the chips go in hot, straight from the oven, so the butter melts into them. Fat chips are better than thin ones, because their fluffy insides steam into the bread and their crisp edges hold their crunch. Ketchup is the sauce in the south and brown sauce in the north, and both are right.',
    ing: [
      '600 g maincrop potatoes, cut into 1.5 cm thick chips',
      '3 tbsp vegetable oil',
      '1 tsp fine sea salt',
      '4 thick slices soft white bread, or 2 soft white rolls',
      '40 g salted butter, softened',
      'Tomato ketchup or brown sauce, to taste'
    ],
    st: [
      'Heat the oven to 220°C / 425°F with a large baking tray inside.',
      'Soak the cut potatoes in cold water for 10 minutes, then drain and dry thoroughly.',
      'Toss with the oil and half the salt and tip onto the hot tray in a single layer.',
      'Roast 30 to 35 minutes, turning once, until golden and crisp at the edges and fluffy inside.',
      'Butter the bread generously on one side of each slice.',
      'Pile half the hot chips over two of the slices, season with the remaining salt, add the ketchup or brown sauce and top with the other slices, butter side down.',
      'Press down gently and eat immediately.'
    ],
    tips: [
      'Butter the bread thickly. It melts into the hot chips.',
      'Use thick-cut chips. They stay fluffy inside against the soft bread.',
      'Eat it straight away. The contrast disappears in minutes.'
    ],
    pair: ['A mug of tea', 'Mushy peas', 'A pickled egg'],
    store: 'Best eaten at once. Leftover chips can be reheated at 200°C for 8 minutes, but the sandwich cannot be kept.',
    nut: [664, 12, 100, 24, 8, 8, 1050]
  },

  'bacon-sandwich': {
    d: 'Back bacon cooked until the edges are crisp and the fat has rendered, in thick buttered white bread with brown sauce or ketchup. Twelve minutes.',
    meta: 'Bacon sandwich, or bacon butty: back bacon cooked until crisp at the edges, in thick, soft, buttered white bread with brown sauce or ketchup.',
    kw: ['bacon sandwich', 'bacon butty', 'bacon sandwich recipe', 'how to make a bacon butty', 'best bacon sandwich'],
    why: 'The argument about the bacon butty is crisp against soft. Bacon cooked hard in a pan or under a grill has crisp edges, but the fat and the middle need to stay tender enough to bite through cleanly, which is why medium heat and patience beat a hot pan. The bread is thick-sliced, soft white, buttered edge to edge, since it has to soak up the bacon fat and juice as well as hold together. The sauce is a matter of party allegiance, brown or red.',
    ing: [
      '6 rashers back bacon',
      '1 tsp vegetable oil',
      '4 thick slices soft white bread, or 2 white rolls',
      '30 g salted butter, softened',
      'Brown sauce or tomato ketchup, to taste'
    ],
    st: [
      'Heat the oil in a large frying pan over medium heat, or heat the grill to medium-high.',
      'Lay the bacon in the pan without crowding and cook 4 minutes, turning once, until the fat is golden and the edges are crisp. Under the grill, cook 3 to 4 minutes a side.',
      'Butter the bread slices generously, edge to edge.',
      'Lay 3 rashers of hot bacon on each of two slices and add the sauce.',
      'Top with the other slices, press down and cut in half.',
      'Eat straight away.'
    ],
    tips: [
      'Cook the bacon at a medium heat. High heat curls it and burns the fat.',
      'Butter to the edges. Every bite needs it.',
      'Use soft white bread. Anything crusty fights back.'
    ],
    pair: ['A mug of tea', 'Fried eggs', 'A grilled tomato'],
    store: 'Best eaten immediately. Refrigerate cooked bacon up to 4 days and reheat in a pan.',
    nut: [430, 26, 32, 22, 2, 5, 1500]
  },

  'fish-finger-sandwich': {
    d: 'Homemade cod fingers in a crisp panko crumb, fried until golden and piled into buttered bread with tartare sauce and lettuce. Twenty-five minutes.',
    meta: 'Fish finger sandwich: cod strips in a crisp panko crumb, fried until golden and served in soft buttered bread with tartare sauce and crisp lettuce.',
    kw: ['fish finger sandwich', 'fish finger sandwich recipe', 'homemade fish fingers', 'fish finger butty', 'fish finger sandwich with tartare sauce'],
    why: 'A fish finger sandwich is one of the small triumphs of the British kitchen, and it turns on contrast: crisp panko crumb against soft bread, and the sharp, creamy tartare sauce against the bland, sweet fish. Making the fish fingers from scratch is barely more work than opening a box and gives a thicker, better crumb on real cod. The strips are cut thick, so the fish stays moist while the crumb browns, and they are fried in a shallow pool of oil that comes halfway up the fish so the crumb crisps on all sides.',
    ing: [
      '250 g skinless cod or haddock fillet, cut into 6 strips',
      '30 g plain flour',
      '0.25 tsp fine sea salt',
      '1 large egg, beaten',
      '60 g panko breadcrumbs',
      '4 tbsp vegetable oil',
      '4 thick slices soft white bread, or 2 soft rolls',
      '30 g salted butter, softened',
      '2 tbsp mayonnaise',
      '1 tbsp capers, chopped',
      '1 tsp lemon juice',
      '2 lettuce leaves',
      'Ketchup, to serve'
    ],
    st: [
      'Pat the fish dry. Mix the flour and salt in one dish, put the egg in a second and the panko in a third.',
      'Coat each strip in the flour, then the egg, then press firmly into the panko so it is completely covered.',
      'Mix the mayonnaise, capers and lemon juice for the tartare sauce.',
      'Heat the oil in a large frying pan over medium-high heat until shimmering.',
      'Fry the fish fingers 2 to 3 minutes a side, until deep golden and just cooked through. Drain on paper towels.',
      'Butter the bread. Spread half the slices with the tartare sauce and top with lettuce and the fish fingers.',
      'Add a squeeze of ketchup, close the sandwiches and press gently.'
    ],
    tips: [
      'Cut the fingers thick. Thin ones dry out before the crumb browns.',
      'Press the panko on firmly so it stays on in the pan.',
      'Make the tartare sharp. It cuts through the fried crumb.'
    ],
    pair: ['A mug of tea', 'Crisps', 'Mushy peas'],
    store: 'Best eaten immediately. Refrigerate cooked fish fingers up to 2 days and re-crisp at 200°C for 6 minutes.',
    nut: [592, 34, 60, 24, 4, 6, 1000]
  },

  'baked-beans-on-toast': {
    d: 'Haricot beans in a quick sweet-smoky tomato sauce, spooned over thick buttered toast. Fifteen minutes.',
    meta: 'Baked beans on toast: haricot beans in a quick, sweet and smoky homemade tomato sauce, spooned over thick buttered toast. Ready in fifteen minutes.',
    kw: ['baked beans on toast', 'beans on toast', 'homemade baked beans', 'beans on toast recipe', 'quick beans on toast'],
    why: 'The tinned beans are the shortcut and the sauce is the improvement: a few minutes of simmering with tomato purée, a little sugar, smoked paprika, mustard and vinegar makes a sauce that is sweeter, smokier and thicker than the one in the tin, and takes about as long as the toast. The beans are simmered only until the sauce clings, because cooked longer they burst. The toast has to be thick, properly toasted and buttered to the edges, since it is what carries the beans.',
    ing: [
      '1 tbsp olive oil',
      '2 garlic cloves, minced',
      '1 tbsp tomato purée',
      '200 ml tomato passata',
      '1 tbsp light brown sugar',
      '1 tsp malt vinegar',
      '0.5 tsp smoked paprika',
      '0.5 tsp English mustard',
      '1 tin (400 g) haricot beans, drained and rinsed',
      '0.5 tsp fine sea salt',
      '4 thick slices bread',
      '30 g salted butter',
      '40 g grated mature cheddar, optional'
    ],
    st: [
      'Heat the oil in a small saucepan over medium heat and cook the garlic for 30 seconds.',
      'Stir in the tomato purée for 1 minute, then add the passata, sugar, vinegar, paprika and mustard.',
      'Simmer 3 minutes until slightly thickened.',
      'Add the beans and salt and simmer 5 minutes, until the sauce clings to the beans.',
      'Meanwhile toast the bread until golden and butter it while hot.',
      'Spoon the beans over the toast and top with the cheddar if using.'
    ],
    tips: [
      'Simmer only until the sauce clings. Longer and the beans burst.',
      'Butter the toast while it is hot so it melts in.',
      'A little sugar and vinegar balance the tomato. Taste and adjust.'
    ],
    pair: ['A fried egg', 'A mug of tea', 'Grilled tomatoes'],
    store: 'Refrigerate the beans up to 4 days and reheat gently. Freeze for 2 months.',
    nut: [384, 16, 62, 8, 14, 16, 900]
  },

  'egg-and-soldiers': {
    d: 'A soft-boiled egg with a runny yolk in an egg cup, and fingers of buttered toast to dip. Eight minutes.',
    meta: 'Egg and soldiers: a soft-boiled egg with a runny yolk in an egg cup, served with fingers of hot buttered toast for dipping. Ready in eight minutes.',
    kw: ['egg and soldiers', 'dippy egg and soldiers', 'soft boiled egg and soldiers', 'boiled egg with toast fingers', 'how to make egg and soldiers'],
    why: 'The whole dish is the timing. Six minutes in boiling water sets the white all the way through and leaves the yolk runny, which is what you dip into, and each minute either way makes a real difference: five and the white is still slippery, seven and the yolk has begun to set. The toast is cut into soldiers, narrow fingers just the width of the yolk opening, and buttered while it is hot so it melts in. Salt goes on the egg, not in the water.',
    ing: [
      '2 large eggs, straight from the fridge',
      '2 slices bread',
      '20 g salted butter, softened',
      'Fine sea salt and black pepper, to taste'
    ],
    st: [
      'Bring a small pan of water to a boil, enough to cover the eggs by 2 cm.',
      'Lower the eggs in carefully with a spoon and set a timer.',
      'Boil gently for 6 minutes for a set white and a runny yolk, or 5 minutes for a very soft one.',
      'Meanwhile toast the bread, butter it while hot and cut into fingers.',
      'Lift the eggs into egg cups, small end down, and slice off the tops with a knife or tap with a spoon.',
      'Season with salt and pepper and serve straight away with the toast soldiers.'
    ],
    tips: [
      'Time it. Five, six or seven minutes give three quite different eggs.',
      'Take the tops off as soon as the eggs are out, or the yolk keeps cooking.',
      'Butter the toast while it is hot so it melts into the bread.'
    ],
    pair: ['A mug of tea', 'A glass of orange juice', 'Marmite on the soldiers'],
    store: 'Best eaten immediately. It cannot be made ahead.',
    nut: [260, 14, 24, 12, 1, 2, 480]
  },

  'porridge': {
    d: 'Oats stirred into milk and water with a pinch of salt until thick and creamy. Twelve minutes, one pan.',
    meta: 'How to make porridge: rolled oats stirred into milk and water with a pinch of salt for 8 minutes until thick, creamy and never lumpy.',
    kw: ['porridge', 'porridge recipe', 'how to make porridge', 'creamy porridge with milk', 'porridge oats'],
    why: 'Porridge is oats, liquid and salt, and the difference between a good bowl and a gluey one comes down to salt and stirring. Salt does for oats what it does for bread, drawing out the nuttiness, which is why the Scots have always insisted on it. Regular stirring releases the starch from the oats gradually so the porridge thickens evenly and creamy rather than sticking to the pan in lumps, and two minutes off the heat lets it thicken a final time. Half milk and half water gives richness without heaviness.',
    ing: [
      '80 g porridge oats',
      '250 ml whole milk',
      '250 ml water',
      '0.25 tsp fine sea salt',
      'Honey, berries or brown sugar, to serve'
    ],
    st: [
      'Put the oats, milk, water and salt in a saucepan and stir.',
      'Bring to a gentle boil over medium heat, stirring.',
      'Lower the heat and simmer 6 to 8 minutes, stirring often, until thick and creamy.',
      'Take off the heat and leave 2 minutes to thicken further.',
      'Spoon into bowls and top with honey, berries or brown sugar.'
    ],
    tips: [
      'Add the salt. Porridge without it is flat.',
      'Stir often so it thickens evenly and does not catch.',
      'Loosen with a splash of milk if it firms up as it sits.'
    ],
    pair: ['Honey', 'Fresh berries', 'A pot of tea'],
    store: 'Best fresh, though you can refrigerate it up to 3 days and reheat with a splash of milk.',
    nut: [300, 11, 46, 8, 6, 9, 190]
  },

  'drop-scones': {
    d: 'Small, thick pancakes dropped from a spoon onto a hot griddle and turned as soon as bubbles appear. Served warm with butter and jam. Twenty-five minutes.',
    meta: 'Drop scones, or Scotch pancakes: small, thick, fluffy griddle pancakes from a simple self-raising batter, served warm with butter, jam or syrup.',
    kw: ['drop scones', 'drop scones recipe', 'scotch pancakes', 'scottish drop scones', 'griddle pancakes with self raising flour'],
    why: 'Drop scones are thicker and smaller than a crêpe and slightly less airy than an American pancake, and the batter is stiff enough that it holds its shape when dropped from a spoon. Self-raising flour does the lifting, and a moderate griddle heat cooks them through without burning the outside. The signal to turn them is bubbles rising through the surface and popping, which means the underside has set; turn too soon and they tear, too late and they dry out.',
    ing: [
      '125 g self-raising flour',
      '1 tbsp caster sugar',
      '0.25 tsp fine sea salt',
      '1 large egg',
      '150 ml whole milk',
      'Butter, for the pan',
      'Butter, jam or golden syrup, to serve'
    ],
    st: [
      'Whisk the flour, sugar and salt in a bowl and make a well in the centre.',
      'Add the egg and half the milk and whisk to a thick, smooth batter, then whisk in the rest of the milk. It should be thick enough to drop from a spoon.',
      'Heat a griddle or heavy frying pan over medium heat and rub with a little butter.',
      'Drop tablespoons of batter onto the pan, well apart, to make rounds about 6 cm across.',
      'Cook 1 to 2 minutes, until bubbles rise and burst on the surface, then flip and cook 1 minute more, until golden on both sides.',
      'Keep warm wrapped in a clean tea towel while you cook the rest, buttering the pan between batches.',
      'Serve warm with butter, jam or golden syrup.'
    ],
    tips: [
      'Wait for bubbles to burst on the surface before flipping.',
      'Keep the heat moderate. Too hot and the outside burns before the inside cooks.',
      'Wrap them in a tea towel to keep them soft and warm.'
    ],
    pair: ['Butter and jam', 'Golden syrup', 'A pot of tea'],
    store: 'Best warm. Keep in an airtight container 2 days, or freeze for 2 months and warm in the toaster.',
    nut: [186, 5, 28, 6, 1, 6, 200]
  }
};
