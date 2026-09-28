'use strict';

/**
 * Volume twenty-one — soups, salads and the Southern side dishes.
 *
 * The everyday soup shelf (chicken and rice, taco, ham and bean, cabbage, cream
 * of mushroom) and the potluck table: macaroni salad, pasta salad, broccoli
 * salad, twice-baked potatoes, and the Southern trio of collards, fried okra
 * and hush puppies. All of them were missing from a catalogue that had the
 * mains they are served with.
 */

module.exports = {
  'chicken-and-rice-soup': {
    d: 'Chicken poached in a herby broth with carrots, celery and rice, shredded back in with lemon and dill. One hour.',
    meta: 'Chicken and rice soup with bone-in thighs poached in a herby broth, carrots, celery and long-grain rice, finished with lemon and dill.',
    kw: ['chicken and rice soup', 'chicken and rice soup recipe', 'homemade chicken rice soup', 'chicken rice soup with vegetables', 'comforting chicken soup with rice'],
    why: 'Poaching the chicken in the soup does two jobs at once. It cooks the meat gently, so it stays tender, and the bones flavour the broth so a carton of stock tastes homemade. The rice goes in late and cooks only until tender, since rice keeps swelling in hot liquid and will turn the soup to porridge if it goes in early. Lemon at the end is the difference between a soup that tastes flat and one that tastes bright.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, diced',
      '3 carrots, sliced',
      '3 celery sticks, sliced',
      '4 garlic cloves, minced',
      '1.75 litres chicken stock',
      '700 g bone-in skinless chicken thighs',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '150 g long-grain rice',
      '100 g frozen peas',
      'Juice of 1 lemon',
      '3 tbsp chopped dill or parsley'
    ],
    st: [
      'Heat the oil in a large pot over medium heat and cook the onion, carrots and celery for 8 minutes until softened.',
      'Add the garlic and cook 1 minute.',
      'Pour in the stock and add the chicken, bay leaves, thyme, salt and pepper. Bring to a boil, then cover and simmer 20 minutes, until the chicken is cooked through and 74°C / 165°F.',
      'Lift out the chicken, pull the meat off the bones in bite-sized pieces and discard the bones and bay leaves.',
      'Add the rice to the broth and simmer 12 to 15 minutes, until tender.',
      'Return the chicken with the peas and cook 2 minutes.',
      'Take off the heat and stir in the lemon juice and dill. Taste for salt.'
    ],
    tips: [
      'Add the rice late. It keeps swelling and turns the soup to porridge.',
      'Finish with lemon. It brightens a broth that tastes flat.',
      'Use thighs, not breasts. They stay tender and give the broth body.'
    ],
    pair: ['Crusty bread', 'A green salad', 'Saltine crackers'],
    store: 'Refrigerate up to 4 days. The rice keeps absorbing broth, so add stock when reheating. Freeze the soup without the rice for 3 months.',
    nut: [272, 26, 24, 8, 2, 4, 900]
  },

  'cream-of-mushroom-soup': {
    d: 'Mushrooms browned hard, simmered in stock and cream and blended half-smooth, so it is velvety with pieces in it. Forty minutes.',
    meta: 'Cream of mushroom soup made from scratch: mushrooms browned hard, simmered with thyme and stock, then blended half-smooth with cream.',
    kw: ['cream of mushroom soup', 'cream of mushroom soup recipe', 'homemade cream of mushroom soup', 'creamy mushroom soup', 'mushroom soup from scratch'],
    why: 'Mushrooms are mostly water and taste of very little until it has gone, so they are browned in a hot pan, in batches, until they have released their liquid and started to colour. That is where the flavour is. A little flour gives the soup its velvet body without needing more than a splash of cream, and blending only half of it leaves pieces that make it a soup instead of a purée. Thyme and a squeeze of lemon lift the earthiness.',
    ing: [
      '30 g unsalted butter',
      '1 tbsp olive oil',
      '500 g chestnut mushrooms, sliced',
      '1 onion, finely diced',
      '3 garlic cloves, minced',
      '30 g plain flour',
      '700 ml vegetable stock',
      '240 ml whole milk',
      '120 ml double cream',
      '2 tsp fresh thyme leaves',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      'A squeeze of lemon juice'
    ],
    st: [
      'Heat the butter and oil in a large pot over high heat and cook the mushrooms in two batches for 8 minutes each, until their liquid has gone and they are browned. Set aside a quarter for serving.',
      'Turn the heat to medium, add the onion to the same pot and cook 5 minutes until soft, then the garlic and thyme for 1 minute.',
      'Stir in the flour and cook 1 minute.',
      'Whisk in the stock and milk, return the mushrooms and simmer 10 minutes.',
      'Blend roughly half the soup with a stick blender until velvety, leaving the rest chunky.',
      'Stir in the cream, salt and pepper and warm through without boiling.',
      'Finish with the lemon juice and serve topped with the reserved mushrooms.'
    ],
    tips: [
      'Brown the mushrooms in batches. Crowding steams them and they stay grey.',
      'Blend only half, so there are still pieces to bite.',
      'Do not boil once the cream is in, or it can split.'
    ],
    pair: ['Toasted sourdough', 'A green salad', 'A dry sherry'],
    store: 'Refrigerate up to 4 days and reheat gently without boiling. Freeze without the cream for 3 months and stir it in when reheating.',
    nut: [286, 7, 15, 22, 2, 6, 700]
  },

  'taco-soup': {
    d: 'Beef, beans, corn and tomatoes simmered with taco spices and served with cheese, avocado and crushed tortilla chips. Forty minutes.',
    meta: 'Taco soup with ground beef, black and kidney beans, corn and tomatoes in a chili-cumin broth, topped with cheese, avocado and crushed chips.',
    kw: ['taco soup', 'taco soup recipe', 'ground beef taco soup', 'easy taco soup', 'taco soup with beans and corn'],
    why: 'It is a taco filling loosened into a broth, so the seasoning is the whole game: chili powder, cumin, smoked paprika, garlic and oregano, cooked into the beef first so they bloom in the fat instead of tasting dusty. The two kinds of bean give different textures, one holding its shape and one breaking down slightly to thicken the broth. Everything at the end, the cheese, avocado, lime and crushed chips, is what turns a pot of beef and beans into tacos in a bowl.',
    ing: [
      '1 tbsp olive oil',
      '500 g beef mince',
      '1 onion, diced',
      '3 garlic cloves, minced',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp fine sea salt',
      '1 tin (400 g) chopped tomatoes',
      '1 tin (400 g) kidney beans, drained and rinsed',
      '1 tin (400 g) black beans, drained and rinsed',
      '200 g sweetcorn',
      '2 tins (110 g each) mild diced green chillies',
      '750 ml beef stock',
      '# To serve',
      '150 g grated cheddar',
      '2 avocados, diced',
      'Tortilla chips, soured cream, coriander and lime wedges'
    ],
    st: [
      'Heat the oil in a large pot over medium-high heat and brown the beef with the onion for 8 minutes, breaking it up. Drain off excess fat.',
      'Add the garlic, chili powder, cumin, paprika, oregano and salt and cook 1 minute.',
      'Add the tomatoes, both beans, the sweetcorn, green chillies and stock and bring to a boil.',
      'Lower the heat and simmer 20 minutes, until slightly thickened.',
      'Taste for salt and ladle into bowls.',
      'Top with the cheddar, avocado, crushed tortilla chips, soured cream, coriander and a squeeze of lime.'
    ],
    tips: [
      'Cook the spices in the beef for a minute so they bloom and lose the raw taste.',
      'Crush the chips over the top at the table so they stay crisp.',
      'A squeeze of lime at the end brightens the whole pot.'
    ],
    pair: ['Cornbread', 'A simple green salad', 'A cold lager'],
    store: 'Refrigerate up to 4 days and freeze without the toppings for 3 months. It thickens as it sits, so loosen with stock when reheating.',
    nut: [376, 26, 32, 16, 9, 6, 1100]
  },

  'ham-and-bean-soup': {
    d: 'Navy beans and a smoked ham hock simmered until the broth turns creamy, with the meat pulled back in. Soak overnight, then two hours.',
    meta: 'Ham and bean soup: navy beans soaked overnight and simmered with a smoked ham hock, carrots and celery until the broth turns creamy.',
    kw: ['ham and bean soup', 'ham and bean soup recipe', 'ham hock and bean soup', 'navy bean soup with ham', 'slow simmered ham and bean soup'],
    why: 'The beans and the hock do each other a favour: the hock gives up smoke, salt and gelatin that turns the broth silky, and the beans, cooked gently in it, release starch that thickens it into something creamy without a spoonful of cream. Soaking overnight makes the cooking time predictable and the beans more evenly tender. Salt goes in only at the end, because the ham is already salty and a broth that reduces gets saltier still.',
    ing: [
      '450 g dried navy or haricot beans',
      '1 smoked ham hock, about 700 g',
      '2 tbsp olive oil',
      '1 onion, diced',
      '3 carrots, diced',
      '3 celery sticks, diced',
      '4 garlic cloves, minced',
      '2 litres water',
      '2 bay leaves',
      '1 tsp dried thyme',
      '0.5 tsp black pepper',
      '1 tbsp cider vinegar',
      'Fine sea salt, to taste',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Put the beans in a large bowl, cover with three times their volume of cold water and soak overnight.',
      'Drain and rinse the beans.',
      'Heat the oil in a large pot over medium heat and cook the onion, carrots and celery for 8 minutes, then the garlic for 1 minute.',
      'Add the beans, ham hock, water, bay leaves, thyme and pepper and bring to a boil.',
      'Lower the heat, partly cover and simmer 90 to 100 minutes, stirring now and then, until the beans are completely tender.',
      'Lift out the hock, pull the meat from the bone and shred it, discarding the skin and fat.',
      'Mash about a cupful of the beans against the side of the pot to thicken the soup, and return the meat.',
      'Stir in the vinegar, taste and add salt if needed, then finish with the parsley.'
    ],
    tips: [
      'Salt at the end. The ham is salty and the broth concentrates as it simmers.',
      'Mash some beans against the pot to thicken it, with no flour or cream.',
      'A spoonful of cider vinegar at the end wakes up the smoke and fat.'
    ],
    pair: ['Cornbread', 'A green salad', 'A cold pale ale'],
    store: 'Refrigerate up to 5 days. It thickens as it sits, so add water or stock when reheating. Freeze for 3 months.',
    nut: [344, 28, 40, 8, 12, 4, 1050],
    rest: [480, 'soaking the beans overnight']
  },

  'cabbage-soup': {
    d: 'A pot of cabbage, carrots, tomatoes and peppers simmered in vegetable stock until sweet and soft. Fifty minutes, about a hundred calories a bowl.',
    meta: 'Cabbage soup with carrots, celery, peppers and tomatoes simmered in vegetable stock with paprika and thyme. Light, filling and about 100 calories.',
    kw: ['cabbage soup', 'cabbage soup recipe', 'vegetable cabbage soup', 'homemade cabbage soup', 'cabbage soup with tomatoes'],
    why: 'Cabbage tastes sweet and mellow when it is cooked slowly and sulphurous when it is not, so the trick is to let it simmer long enough to soften completely and to start the soup by softening the other vegetables first, which builds a base for the cabbage to cook in. Smoked paprika supplies the depth that meat would, and a splash of vinegar at the end lifts a pot that otherwise tastes sweet and flat.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '3 carrots, sliced',
      '3 celery sticks, sliced',
      '1 green pepper, diced',
      '4 garlic cloves, minced',
      '1 tsp smoked paprika',
      '1 tsp dried thyme',
      '1 tin (400 g) chopped tomatoes',
      '1.5 litres vegetable stock',
      '1 small green cabbage, about 700 g, cored and chopped',
      '2 bay leaves',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp cider vinegar'
    ],
    st: [
      'Heat the oil in a large pot over medium heat and cook the onion, carrots, celery and pepper for 8 minutes until softened.',
      'Add the garlic, paprika and thyme and cook 1 minute.',
      'Stir in the tomatoes, stock, cabbage, bay leaves, salt and pepper.',
      'Bring to a boil, then lower the heat and simmer 25 minutes, until the cabbage is completely soft.',
      'Remove the bay leaves, stir in the vinegar and taste for salt.',
      'Serve hot.'
    ],
    tips: [
      'Simmer until the cabbage is properly soft. Half-cooked cabbage tastes sulphurous.',
      'Smoked paprika gives a savoury depth without any meat.',
      'Add the vinegar at the end so it stays bright.'
    ],
    pair: ['Crusty bread', 'A grilled cheese sandwich', 'Baked potatoes'],
    store: 'Refrigerate up to 5 days. The flavour improves overnight. Freeze for 3 months.',
    nut: [99, 4, 14, 3, 5, 8, 620]
  },

  'macaroni-salad': {
    d: 'Elbow macaroni in a tangy mayonnaise dressing with celery, pepper and onion. The picnic classic, thirty minutes plus chilling.',
    meta: 'Classic macaroni salad: elbow pasta in a creamy, tangy mayonnaise dressing with celery, pepper and red onion, chilled until the flavours meld.',
    kw: ['macaroni salad', 'macaroni salad recipe', 'classic macaroni salad', 'creamy macaroni salad', 'macaroni salad for a crowd'],
    why: 'Pasta absorbs dressing as it sits, which is why a macaroni salad that looks right when mixed is dry two hours later. The answer is to dress it while the pasta is only just cooled and to make the dressing looser than seems right; a splash of the vinegar and a little milk keep it creamy through the chill. Cooking the macaroni a couple of minutes past al dente helps too, because firm pasta stays hard and chalky once it is cold.',
    ing: [
      '450 g elbow macaroni',
      '200 g mayonnaise',
      '2 tbsp cider vinegar',
      '2 tbsp yellow mustard',
      '1 tbsp sugar',
      '2 tbsp whole milk',
      '0.5 tsp celery seeds',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 celery sticks, finely diced',
      '1 green pepper, finely diced',
      '0.5 red onion, finely diced',
      '1 carrot, grated',
      'Paprika, to finish'
    ],
    st: [
      'Boil the macaroni in well-salted water for 2 minutes longer than the packet says, about 10 minutes, until soft. Drain and rinse under cold water until cool.',
      'Whisk the mayonnaise, vinegar, mustard, sugar, milk, celery seeds, salt and pepper in a large bowl.',
      'Add the macaroni, celery, pepper, onion and carrot and stir until everything is coated.',
      'Cover and chill at least 1 hour so the flavours settle.',
      'Stir in a splash of milk if it has thickened, taste for salt and dust with paprika before serving.'
    ],
    tips: [
      'Overcook the pasta slightly. Firm macaroni turns chalky when cold.',
      'Make the dressing looser than looks right. The pasta soaks it up.',
      'Stir in a splash of milk before serving if it has tightened up.'
    ],
    pair: ['Barbecued chicken', 'Pulled pork sandwiches', 'Sliced tomatoes'],
    store: 'Refrigerate up to 4 days and loosen with a spoonful of mayonnaise or milk before serving. Not suitable for freezing.',
    nut: [356, 7, 37, 20, 2, 5, 480],
    rest: [60, 'chilling']
  },

  'pasta-salad': {
    d: 'Rotini tossed in a sharp Italian dressing with tomatoes, cucumber, olives, peppers and mozzarella. Thirty minutes.',
    meta: 'Italian pasta salad: rotini tossed in a red wine vinaigrette with cherry tomatoes, cucumber, olives, peppers and mozzarella. Serve cold.',
    kw: ['pasta salad', 'pasta salad recipe', 'italian pasta salad', 'cold pasta salad with italian dressing', 'pasta salad for a crowd'],
    why: 'A pasta salad is served cold, and cold mutes seasoning, so the dressing has to taste too sharp on its own: a two-to-one ratio of oil to vinegar with mustard to emulsify it, garlic and oregano. Dressing the pasta while it is still slightly warm lets it absorb the vinaigrette instead of just wearing it. The vegetables and cheese go in once the pasta has cooled, so the tomatoes keep their shape and the mozzarella does not melt into the oil.',
    ing: [
      '400 g rotini or fusilli',
      '250 g cherry tomatoes, halved',
      '1 cucumber, deseeded and diced',
      '1 red pepper, diced',
      '0.5 red onion, thinly sliced',
      '100 g pitted black olives, halved',
      '200 g mozzarella pearls',
      '3 tbsp chopped basil or parsley',
      '# For the dressing',
      '120 ml olive oil',
      '60 ml red wine vinegar',
      '1 tsp Dijon mustard',
      '1 garlic clove, grated',
      '1 tsp dried oregano',
      '1 tsp sugar',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Boil the pasta in well-salted water until just tender, about 10 minutes. Drain and rinse briefly under cool water.',
      'Whisk the dressing ingredients together in a large bowl until emulsified.',
      'Add the slightly warm pasta and toss so it soaks up the dressing.',
      'Let the pasta cool for 15 minutes, then add the tomatoes, cucumber, pepper, onion, olives, mozzarella and herbs.',
      'Toss, taste for salt and serve at room temperature or chilled.'
    ],
    tips: [
      'Dress the pasta while it is warm. It soaks up the vinaigrette.',
      'Make the dressing sharper than you would for a green salad. Cold dulls flavour.',
      'Add the tomatoes and cheese once the pasta has cooled.'
    ],
    pair: ['Grilled chicken', 'Barbecued sausages', 'Garlic bread'],
    store: 'Refrigerate up to 4 days and add a splash of vinegar or oil before serving if it has dried. Not suitable for freezing.',
    nut: [380, 10, 40, 20, 3, 5, 560]
  },

  'broccoli-salad': {
    d: 'Raw broccoli florets tossed with bacon, red onion, cheddar and dried cranberries in a sweet-tangy mayonnaise dressing. Twenty-three minutes.',
    meta: 'Broccoli salad: raw florets with crisp bacon, red onion, cheddar, cranberries and sunflower seeds in a sweet, tangy creamy dressing.',
    kw: ['broccoli salad', 'broccoli salad recipe', 'broccoli salad with bacon', 'creamy broccoli salad', 'broccoli salad with cranberries and sunflower seeds'],
    why: 'The broccoli is raw, so the size of the pieces decides the eating: cut the florets small enough to fit on a fork with the other ingredients, and the stems peeled and diced small or left out. The dressing does the seasoning and also gently softens the florets as they sit, which is why the salad is better after half an hour in the fridge than immediately. Sugar and vinegar in the dressing balance the bitterness of raw broccoli and the salt of the bacon.',
    ing: [
      '500 g broccoli, cut into small florets',
      '6 rashers streaky bacon',
      '0.5 red onion, finely diced',
      '100 g sharp cheddar, cubed',
      '60 g dried cranberries',
      '40 g roasted sunflower seeds',
      '# For the dressing',
      '120 g mayonnaise',
      '60 g Greek yogurt',
      '2 tbsp cider vinegar',
      '2 tbsp sugar',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper'
    ],
    st: [
      'Cook the bacon in a frying pan over medium heat for 8 minutes until crisp, drain on paper towels and crumble.',
      'Whisk the mayonnaise, yogurt, vinegar, sugar, salt and pepper until the sugar dissolves.',
      'Put the broccoli, onion, cheddar and cranberries in a large bowl and pour over the dressing.',
      'Toss until everything is coated and chill for 30 minutes.',
      'Stir in the bacon and sunflower seeds just before serving so they stay crisp.'
    ],
    tips: [
      'Cut the florets small so every forkful holds a bit of everything.',
      'Add the bacon and seeds at the last moment, or they go soft in the dressing.',
      'It improves after 30 minutes chilled as the dressing softens the broccoli.'
    ],
    pair: ['Barbecued ribs', 'Grilled chicken', 'A burger'],
    store: 'Refrigerate up to 3 days, adding the bacon and seeds fresh. Not suitable for freezing.',
    nut: [354, 10, 20, 26, 4, 12, 480]
  },

  'twice-baked-potatoes': {
    d: 'Baked potatoes scooped out, mashed with butter, sour cream and cheddar, refilled and baked again until the tops brown. Nearly two hours.',
    meta: 'Twice-baked potatoes: crisp-skinned russets scooped and mashed with butter, soured cream, cheddar and bacon, then refilled and baked until golden.',
    kw: ['twice baked potatoes', 'twice baked potatoes recipe', 'loaded twice baked potatoes', 'twice baked potatoes with bacon and cheddar', 'make ahead twice baked potatoes'],
    why: 'The first bake is for the potato and the second is for the skin. A russet baked directly on the rack for an hour has a dry, fluffy middle that mashes light and a skin that is crisp enough to stand up to being refilled, which is why boiling the potatoes or microwaving them will not do. The filling is mashed while the potatoes are hot, since cold flesh does not absorb the butter and dairy, and it is over-filled and mounded so the tops brown in the second bake.',
    ing: [
      '4 large russet potatoes, about 350 g each',
      '1 tbsp olive oil',
      '1 tsp coarse sea salt',
      '60 g unsalted butter',
      '120 g soured cream',
      '60 ml whole milk',
      '150 g sharp cheddar, grated, divided',
      '6 rashers streaky bacon, cooked and crumbled',
      '3 tbsp chopped chives',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C / 400°F.',
      'Scrub the potatoes, prick them all over with a fork, rub with the oil and coarse salt and bake directly on the oven rack for 60 minutes, until tender.',
      'Cool 10 minutes, then halve lengthways and scoop out the flesh into a bowl, leaving a 5 mm wall so the skins hold their shape.',
      'Mash the hot flesh with the butter, soured cream, milk, two thirds of the cheddar, the salt and pepper until smooth but still a little rustic. Stir in the bacon and chives.',
      'Pile the filling back into the skins, mounding it, and set them on a tray.',
      'Scatter over the remaining cheddar.',
      'Bake 20 to 25 minutes, until the tops are golden and the cheese is bubbling.'
    ],
    tips: [
      'Bake on the rack for a crisp skin that holds the filling.',
      'Mash the flesh while it is hot so it takes up the butter.',
      'Leave a thin wall of potato in each skin so it does not tear.'
    ],
    pair: ['Steak', 'A crisp green salad', 'Roast chicken'],
    store: 'Refrigerate assembled, unbaked potatoes up to 2 days and bake from cold, adding 10 minutes. Freeze wrapped for 2 months and bake from frozen at 190°C for 40 minutes.',
    nut: [644, 20, 60, 36, 6, 4, 780]
  },

  'fried-okra': {
    d: 'Sliced okra dipped in buttermilk, rolled in seasoned cornmeal and fried until crisp. Thirty minutes, and no slime.',
    meta: 'Southern fried okra: sliced okra dipped in buttermilk and coated in seasoned cornmeal, fried until crisp, golden and never slimy.',
    kw: ['fried okra', 'fried okra recipe', 'southern fried okra', 'crispy fried okra with cornmeal', 'how to fry okra without slime'],
    why: 'Okra has a reputation for slime, which comes from mucilage released when the pods are cut and heated wet. Coating the slices in cornmeal and frying them hot and fast seals the surface before it can leak, so the inside steams tender while the outside turns crisp. Cornmeal alone, rather than flour, gives the coarse, sandy crust that is traditional in the South and it is naturally gluten-free. Frying in small batches keeps the oil hot enough to do it quickly.',
    ing: [
      '450 g fresh okra, trimmed and sliced 1 cm thick',
      '120 ml buttermilk',
      '150 g fine yellow cornmeal',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '0.5 tsp smoked paprika',
      '0.25 tsp cayenne pepper',
      '500 ml vegetable oil, for frying',
      'Hot sauce or ranch dressing, to serve'
    ],
    st: [
      'Toss the sliced okra with the buttermilk in a bowl until coated.',
      'Mix the cornmeal, salt, pepper, paprika and cayenne in a shallow dish.',
      'Lift the okra out of the buttermilk a handful at a time, letting the excess drip off, and toss in the cornmeal until well coated.',
      'Heat the oil to 180°C / 350°F in a deep pan.',
      'Fry the okra in three batches for 3 to 4 minutes each, stirring once, until golden and crisp.',
      'Drain on a rack, season with a pinch of salt and serve hot with hot sauce.'
    ],
    tips: [
      'Keep the oil at 180°C. Cool oil lets the okra go soft and greasy.',
      'Dry, fresh okra is less slimy than wet or frozen okra.',
      'Fry in small batches so the temperature does not drop.'
    ],
    pair: ['Fried chicken', 'Coleslaw', 'A cold sweet tea'],
    store: 'Best eaten immediately. Refrigerate up to 2 days and re-crisp at 200°C for 6 minutes. Not suitable for freezing.',
    nut: [302, 5, 30, 18, 5, 3, 620]
  },

  'hush-puppies': {
    d: 'Cornmeal batter spiked with onion and spooned into hot oil, where it puffs into golden fritters, crisp outside and steamy within. Thirty minutes.',
    meta: 'Hush puppies: cornmeal and buttermilk batter with onion, dropped into hot oil until puffed, golden and crisp. Serve with fried fish or barbecue.',
    kw: ['hush puppies', 'hush puppies recipe', 'southern hush puppies', 'cornmeal hush puppies with onion', 'fried hush puppies'],
    why: 'The batter is thick enough to hold on a spoon, which is why it puffs into a ball rather than spreading into a pancake, and the baking powder makes it fry light and hollow inside. Fine cornmeal gives a tender crumb, while coarse cornmeal makes gritty ones. The oil temperature is critical: too cool and they soak up fat and stay heavy, too hot and the outside browns before the middle cooks. A steady 175°C gives them about three minutes to puff and colour through.',
    ing: [
      '200 g fine yellow cornmeal',
      '60 g plain flour',
      '2 tsp baking powder',
      '1 tsp sugar',
      '1 tsp fine sea salt',
      '0.25 tsp cayenne pepper',
      '240 ml buttermilk',
      '1 large egg',
      '1 small onion, finely grated',
      '2 spring onions, finely sliced',
      '750 ml vegetable oil, for frying'
    ],
    st: [
      'Whisk the cornmeal, flour, baking powder, sugar, salt and cayenne in a large bowl.',
      'Whisk the buttermilk and egg together, stir in the onion and spring onions, and pour into the dry ingredients.',
      'Stir just until combined into a thick batter. Do not overmix.',
      'Heat the oil to 175°C / 350°F in a deep pan.',
      'Drop tablespoons of batter into the oil, 6 at a time, and fry 3 minutes, turning once, until deep golden and puffed.',
      'Drain on a rack and season with a pinch of salt.',
      'Serve hot.'
    ],
    tips: [
      'Keep the oil at 175°C and check between batches.',
      'Grate the onion so it melts into the batter and flavours every bite.',
      'Do not overmix. A few lumps make a lighter hush puppy.'
    ],
    pair: ['Fried catfish', 'Coleslaw', 'Tartar sauce'],
    store: 'Best eaten hot. Refrigerate up to 2 days and re-crisp at 190°C for 6 minutes. Freeze cooked hush puppies for 2 months.',
    nut: [252, 6, 30, 12, 2, 4, 520]
  },

  'collard-greens': {
    d: 'Collards simmered with a smoked ham hock, onion and vinegar until silky, in a broth you soak up with cornbread. Ninety-five minutes.',
    meta: 'Southern collard greens simmered with smoked ham hock, onion, garlic and cider vinegar until silky, with a savoury pot liquor for cornbread.',
    kw: ['collard greens', 'collard greens recipe', 'southern collard greens', 'collard greens with smoked ham hock', 'soul food collard greens'],
    why: 'Collards are tough, and the answer is time and a gentle simmer in something savoury: the ham hock supplies smoke, salt and gelatin, and after an hour the leaves are silky rather than chewy. The broth left in the pot, the pot liquor, is prized in the South and is full of flavour and nutrients that leach from the greens, so it is served with them. A splash of cider vinegar and a pinch of sugar at the end balance the smoke and the bitterness.',
    ing: [
      '1 kg collard greens',
      '1 smoked ham hock, about 500 g',
      '1 tbsp vegetable oil',
      '1 onion, diced',
      '4 garlic cloves, minced',
      '1 litre chicken stock',
      '500 ml water',
      '1 tsp sugar',
      '0.5 tsp crushed red pepper flakes',
      '0.5 tsp black pepper',
      '2 tbsp cider vinegar',
      'Fine sea salt, to taste'
    ],
    st: [
      'Wash the collards thoroughly in several changes of water, strip the leaves from the tough stems and stack and roll them. Slice into 2 cm ribbons.',
      'Heat the oil in a large pot over medium heat and cook the onion 6 minutes, then the garlic for 1 minute.',
      'Add the stock, water, ham hock, sugar, pepper flakes and black pepper and bring to a boil. Simmer 20 minutes to flavour the broth.',
      'Add the collards in batches, stirring as they wilt, and return to a simmer.',
      'Cover and cook 45 to 50 minutes, until the leaves are silky and completely tender.',
      'Lift out the hock, shred the meat and return it to the pot.',
      'Stir in the vinegar, taste for salt and serve with plenty of the pot liquor.'
    ],
    tips: [
      'Wash the leaves well. Collards hold grit in their veins.',
      'Cook them until silky. Undercooked collards are tough and bitter.',
      'Serve the pot liquor with cornbread. It is half the point.'
    ],
    pair: ['Cornbread', 'Fried chicken', 'Black-eyed peas'],
    store: 'Refrigerate up to 5 days. They taste better the next day. Freeze with their liquid for 3 months.',
    nut: [151, 12, 10, 7, 5, 2, 800]
  }
};
