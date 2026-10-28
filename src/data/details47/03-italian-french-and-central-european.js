'use strict';

/**
 * Volume forty-seven — Italian, French, German, Hungarian and Polish
 * everyday dishes.
 *
 * Nineteen dishes: lentil, potato and pea pasta, breadcrumb, lemon and
 * butter-and-sage spaghetti, cauliflower, chickpea, sausage and cabbage
 * sauces, fried polenta, ricotta gnocchi, garlic bread, parsley potatoes,
 * baked eggs, fried potatoes, cheese noodles, a Hungarian potato stew, small
 * dumplings and a Polish cucumber salad. Times are the recipe's own; hobs
 * differ, so each method says what to look for. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'pasta-e-lenticchie': {
    d: 'Small pasta cooked with brown lentils, tomato, carrot and celery into a thick Italian soup-stew.',
    meta: 'Pasta e lenticchie: small pasta cooked with brown lentils, tomato, carrot and celery into a thick Italian stew. Four servings, cooked for 30 minutes.',
    kw: ['pasta e lenticchie', 'italian pasta and lentil soup', 'pasta with lentils', 'lentil and pasta stew', 'lentil pasta soup'],
    why: 'Most home versions come out one of two ways, either too thin or gluey, and the fix is to decide what you want before you start. A loose soup needs more stock; a thick stew needs less, and the pasta will drink up what is there as it stands.\n\nPasta e lenticchie is the Italian pairing of pasta and lentils, and it is a dish of the poor kitchen: two cheap dry goods, a few vegetables and good olive oil. The lentils should be brown or green, which hold their shape. **Cook the lentils before the pasta goes in.** Lentils take about 20 minutes, and pasta needs only the last 8.\n\nStart with a soffritto of onion, carrot and celery, cooked slowly in oil until soft and sweet. Add garlic, a spoonful of tomato paste and a rosemary sprig. Add the lentils and stock, simmer until tender, then add the small pasta.\n\nCrush a few lentils to thicken the broth. A drizzle of oil at the table finishes the bowl.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1 carrot, about 100 g, finely diced',
      '1 celery stick, about 50 g, finely diced',
      '2 garlic cloves, sliced',
      '2 tbsp tomato paste',
      '200 g brown lentils, rinsed',
      '1 litre vegetable stock',
      '1 sprig fresh rosemary',
      '120 g small dried pasta',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat 2 tbsp of the oil in a large pan and cook the onion, carrot and celery over a low heat for 8 minutes until soft. Add the garlic and tomato paste for 1 minute.',
      'Add the lentils, stock and rosemary and bring to the boil. Simmer for 15 minutes.',
      'Stir in the pasta and cook for 8 minutes, stirring now and then, until tender. Add water if the stew is too thick.',
      'Remove the rosemary. Season with the salt and pepper and serve with the remaining oil trickled over.'
    ],
    tips: [
      'Cook the lentils before adding the pasta.',
      'Stir often once the pasta goes in.',
      'Crush a few lentils to thicken the broth.',
      'Add hot water, not cold, when loosening the dish.'
    ],
    pair: ['Crusty bread', 'Grated parmesan', 'Green salad', 'Chilli oil'],
    store: 'Keeps in the fridge for 3 days. The pasta soaks up the broth, so add water when reheating.',
    nut: [440, 20, 63, 12, 8, 6, 1160]
  },

  'pasta-e-patate': {
    d: 'Small pasta cooked with diced potatoes, onion, tomato and a rind of parmesan into a creamy, thick Neapolitan-style dish.',
    meta: 'Pasta e patate: small pasta cooked with diced potatoes, onion and tomato until creamy and thick. Four servings, cooked for 30 minutes.',
    kw: ['pasta e patate', 'pasta and potatoes', 'italian pasta and potato soup', 'neapolitan pasta e patate', 'creamy pasta and potato'],
    why: 'Potatoes, pasta, an onion and a tomato: four things, and the surprise is that together they make something creamy without any cream. The starch from the potatoes and the pasta thickens the broth into a silky sauce.\n\nCut the potatoes into small cubes, about 1 cm, so they break down as they cook. Larger pieces stay in lumps and never melt into the sauce. Cook the onion slowly in oil, add the tomato and potatoes, then cover with water. **Add the pasta when the potatoes are nearly soft.** Both finish together.\n\nThe traditional trick is a rind of parmesan simmered in the pot. It flavours the broth with a savoury, nutty depth and costs next to nothing. Fish it out before serving.\n\nThe texture should be thick enough for a spoon to stand up, not a soup. If it thickens too much, add a splash of hot water. Serve hot with black pepper and a drizzle of oil.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 tbsp tomato paste',
      '500 g potatoes, peeled and cut into 1 cm cubes',
      '800 ml water',
      '1 parmesan rind, about 20 g',
      '150 g small dried pasta',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat 2 tbsp of the oil in a large pan and cook the onion over a low heat for 8 minutes until soft. Stir in the tomato paste for 1 minute.',
      'Add the potatoes, water and parmesan rind and bring to the boil. Simmer for 10 minutes.',
      'Add the pasta and cook for 10 minutes, stirring often, until the pasta and potatoes are tender and the broth is thick.',
      'Remove the rind. Season with the salt and pepper and serve with the remaining oil.'
    ],
    tips: [
      'Cut the potatoes small so they melt into the sauce.',
      'Stir often so the pasta does not stick.',
      'Add hot water if the dish gets too thick.',
      'Save parmesan rinds in the freezer for dishes like this.'
    ],
    pair: ['Grated parmesan', 'Green salad', 'Crusty bread', 'Chilli flakes'],
    store: 'Keeps in the fridge for 2 days. It thickens as it cools, so loosen with hot water.',
    nut: [377, 10, 55, 13, 5, 5, 390]
  },

  'pasta-e-piselli': {
    d: 'Small pasta cooked with sweet peas, onion and a little tomato in a creamy, brothy Italian pot.',
    meta: 'Pasta e piselli: small pasta cooked with peas, onion and tomato in a creamy, brothy Italian dish. Four servings, cooked for 25 minutes.',
    kw: ['pasta e piselli', 'pasta and peas', 'italian pasta with peas', 'pasta with peas and parmesan', 'pasta e piselli soup'],
    why: 'Does a bowl of pasta and frozen peas really count as dinner? In Italy it does, and pasta e piselli is the proof: sweet peas, a soft onion base and tiny pasta shapes, cooked together until the broth turns creamy.\n\nThe base is a soffritto of onion cooked slowly in oil. Add a spoonful of tomato paste for depth and a little water or stock. Frozen peas are fine here, and cheaper than fresh most of the year. **Mash a quarter of the peas.** The mashed peas thicken the broth, while the others stay whole and sweet.\n\nPasta goes in near the end, so it keeps a slight bite. Short shapes, such as ditalini, small shells or broken spaghetti, work best, since they sit nicely on a spoon.\n\nFinish with grated parmesan and a good drizzle of olive oil. The dish should be moist, not dry, so add hot water if it tightens while you are eating.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp tomato paste',
      '400 g frozen peas',
      '800 ml water',
      '150 g small dried pasta',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '30 g parmesan, grated'
    ],
    st: [
      'Heat 2 tbsp of the oil in a large pan and cook the onion over a low heat for 8 minutes until soft. Stir in the tomato paste for 1 minute.',
      'Add the peas and water and bring to the boil. Simmer for 5 minutes.',
      'Mash about a quarter of the peas against the side of the pan. Add the pasta and cook for 10 minutes, stirring often, until tender.',
      'Season with the salt and pepper. Serve with the parmesan and the remaining oil.'
    ],
    tips: [
      'Cook the onion slowly until sweet.',
      'Mash a few peas to thicken the broth.',
      'Stir often once the pasta goes in.',
      'Add hot water if the dish is too thick.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Grated parmesan', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Add hot water when reheating.',
    nut: [370, 14, 47, 14, 8, 9, 420]
  },

  'spaghetti-with-breadcrumbs': {
    d: 'Spaghetti tossed with garlic, chilli and olive oil and topped with toasted breadcrumbs instead of cheese.',
    meta: 'Spaghetti with breadcrumbs: spaghetti tossed with garlic, chilli and olive oil, topped with toasted breadcrumbs. Four servings, cooked for 15 minutes.',
    kw: ['spaghetti with breadcrumbs', 'pasta with toasted breadcrumbs', 'pasta mollicata', 'spaghetti with garlic breadcrumbs', 'poor mans parmesan pasta'],
    why: 'The first sign it is ready is the sound and smell: breadcrumbs crackling in the oil and turning from pale to the colour of toast, with garlic perfuming the pan. That crumb takes the place of grated cheese, which in many Italian kitchens was once too dear to use freely.\n\nStale bread makes the best crumbs. Blitz it in a processor, or grate it by hand, and toast it slowly in olive oil over a medium heat. Stir all the time. **Do not walk away from the pan.** Crumbs go from golden to burnt in seconds, and a scorched batch cannot be rescued.\n\nCook the spaghetti in salted water until just firm. Keep a cup of the cooking water. Warm garlic and chilli in oil for a minute, add the pasta with a splash of the water and toss until glossy.\n\nScatter the crumbs over each plate at the table, so they stay crisp. Eat at once.',
    ing: [
      '350 g spaghetti',
      '4 tbsp olive oil',
      '60 g stale breadcrumbs',
      '4 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt',
      '15 g fresh parsley, chopped'
    ],
    st: [
      'Cook the spaghetti in a large pan of well-salted boiling water according to the packet. Keep a cup of the water, then drain.',
      'Heat 2 tbsp of the oil in a frying pan over a medium heat. Add the breadcrumbs and toast, stirring, for 4 minutes until golden. Tip onto a plate.',
      'Add the remaining oil, garlic and chilli to the pan and warm over a low heat for 1 minute without browning.',
      'Toss the spaghetti into the pan with a splash of the pasta water and the salt. Serve topped with the breadcrumbs and parsley.'
    ],
    tips: [
      'Use stale bread for crisp crumbs.',
      'Stir the crumbs constantly while they toast.',
      'Keep the garlic pale.',
      'Add the crumbs at the table so they stay crisp.'
    ],
    pair: ['Green salad', 'Tomato salad', 'Roast vegetables', 'A glass of white wine'],
    store: 'Best eaten straight away. Keep the toasted crumbs in a jar for 3 days.',
    nut: [512, 14, 78, 16, 4, 4, 410]
  },

  'pasta-al-limone': {
    d: 'Spaghetti tossed in a sauce of lemon zest, lemon juice, butter and parmesan, bright and creamy without cream.',
    meta: 'Pasta al limone: spaghetti tossed in a sauce of lemon zest, juice, butter and parmesan. Four servings, cooked for 15 minutes.',
    kw: ['pasta al limone', 'lemon pasta', 'italian lemon spaghetti', 'lemon and parmesan pasta', 'pasta with lemon and butter'],
    why: 'Most home versions come out sharp or greasy, and the fix is to build the sauce off the heat. Lemon juice and butter in a boiling pan split into an oily mess, but stirred together in a warm bowl with starchy pasta water, they turn into a smooth, glossy emulsion.\n\nCook the pasta in well-salted water and keep a cup of the water. The starch in it is what binds the sauce. Grate the lemon zest with a fine grater, avoiding the bitter white pith. **Add the juice a little at a time and taste.** Lemons vary a lot, and a sauce that is too sharp cannot be corrected.\n\nMelt the butter with the zest in the pan, add the pasta and a splash of water, then the parmesan, and toss quickly over a low heat. The cheese melts into the butter and clings to every strand.\n\nFinish with black pepper and a little more zest for fragrance.',
    ing: [
      '350 g spaghetti',
      '50 g butter',
      '2 lemons, about 200 g, zest and juice',
      '60 g parmesan, grated',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Cook the spaghetti in a large pan of well-salted boiling water according to the packet. Keep a cup of the water, then drain.',
      'Melt the butter in a wide pan over a low heat with the lemon zest for 1 minute.',
      'Add the spaghetti, half the lemon juice and a splash of the pasta water and toss.',
      'Take the pan off the heat, add the parmesan and toss until glossy. Add more juice to taste and season with the salt and pepper.'
    ],
    tips: [
      'Zest the lemons before juicing them.',
      'Add the cheese off the heat.',
      'Use pasta water to loosen the sauce.',
      'Taste the sauce before adding all the juice.'
    ],
    pair: ['Green salad', 'Grilled fish', 'Steamed asparagus', 'Crusty bread'],
    store: 'Best eaten straight away. The sauce tightens as it stands.',
    nut: [492, 17, 70, 16, 4, 4, 530]
  },

  'pasta-burro-e-salvia': {
    d: 'Pasta tossed with butter melted until nutty and golden, crisp sage leaves and parmesan.',
    meta: 'Pasta burro e salvia: pasta tossed with browned butter, crisp sage leaves and parmesan. Two servings, cooked for 12 minutes.',
    kw: ['pasta burro e salvia', 'butter and sage pasta', 'pasta with sage butter', 'brown butter sage pasta', 'italian butter and sage pasta'],
    why: 'Keep the heat low. Butter takes only a minute to go from pale to nut brown, and another 30 seconds from brown to burnt, so a low flame and your full attention are worth more than any other ingredient.\n\nMelt the butter slowly. At first it foams, then the foam settles and flecks of milk solids on the bottom turn golden. The smell goes from creamy to nutty. **Add the sage when the foam begins to subside.** The leaves crisp in the butter within a minute and release their scent.\n\nCook the pasta in salted water until firm to the bite and keep some of the cooking water. Toss the pasta in the butter with a splash of the water so it emulsifies into a light sauce, not a greasy puddle.\n\nParmesan goes on last, and plenty of pepper. Short pasta such as penne or fresh filled shapes suit the sauce well.',
    ing: [
      '200 g penne',
      '60 g butter',
      '12 fresh sage leaves',
      '1/4 tsp salt',
      '30 g parmesan, grated',
      '1/4 tsp black pepper'
    ],
    st: [
      'Cook the penne in a large pan of well-salted boiling water according to the packet. Keep a cup of the water, then drain.',
      'Melt the butter in a wide pan over a low heat for 4 minutes until it foams and turns golden-brown. Add the sage for 1 minute until crisp.',
      'Add the pasta, the salt and a splash of the pasta water and toss over the heat for 1 minute.',
      'Take the pan off the heat, add the parmesan and pepper and toss until glossy.'
    ],
    tips: [
      'Stay beside the pan while the butter browns.',
      'Add the sage once the foam starts to settle.',
      'Use pasta water to bind the sauce.',
      'Serve at once on warm plates.'
    ],
    pair: ['Green salad', 'Roast squash', 'Steamed greens', 'A glass of white wine'],
    store: 'Best eaten straight away.',
    nut: [650, 19, 76, 30, 3, 3, 530]
  },

  'pasta-with-cauliflower': {
    d: 'Short pasta tossed with cauliflower cooked until soft, garlic, chilli, anchovy and olive oil, crushed into a rough sauce.',
    meta: 'Pasta with cauliflower: short pasta tossed with soft cauliflower, garlic, chilli and olive oil. Four servings, cooked for 25 minutes.',
    kw: ['pasta with cauliflower', 'cauliflower pasta', 'italian cauliflower pasta', 'pasta con cavolfiore', 'cauliflower pasta with garlic and chilli'],
    why: 'It looks like a vegetable side and cooks like a sauce, which is why the cauliflower has to be cooked much longer than you would for eating plain. It should lose its firmness and fall apart until it clings to the pasta like a rough cream.\n\nBreak the cauliflower into small florets and simmer them in the pasta water for 8 minutes before the pasta goes in. Both finish in the same pot, so the cauliflower is soft by the time the pasta is ready. **Do not drain it too well.** A little of the starchy cooking water is what turns the broken cauliflower into a sauce.\n\nIn a separate pan, warm garlic, chilli and an anchovy in oil until the anchovy melts. It adds savoury depth without tasting fishy. Leave it out for a vegetarian version.\n\nToss everything together and crush the cauliflower with the back of a spoon. Finish with parmesan, if you have it, and plenty of black pepper.',
    ing: [
      '1 cauliflower, about 600 g, in small florets',
      '350 g penne',
      '4 tbsp olive oil',
      '3 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '4 anchovy fillets, about 12 g',
      '1/2 tsp salt',
      '30 g parmesan, grated'
    ],
    st: [
      'Boil the cauliflower in a large pan of well-salted water for 8 minutes. Add the pasta to the same water and cook according to the packet. Keep a cup of the water, then drain loosely.',
      'Meanwhile, warm the oil, garlic, chilli and anchovies in a large pan over a low heat for 3 minutes until the anchovies melt.',
      'Add the pasta and cauliflower with a splash of the water and the salt. Toss over the heat for 2 minutes, crushing the cauliflower with a spoon.',
      'Serve with the parmesan.'
    ],
    tips: [
      'Cook the cauliflower until soft, not firm.',
      'Keep some pasta water for the sauce.',
      'Crush the cauliflower to coat the pasta.',
      'Leave out the anchovies for a vegetarian dish.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Lemon wedges', 'Grated parmesan'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [530, 18, 74, 18, 6, 6, 570]
  },

  'pasta-with-chickpeas': {
    d: 'Short pasta tossed with tinned chickpeas, garlic, rosemary, tomato and olive oil in a thick, rustic sauce.',
    meta: 'Pasta with chickpeas: short pasta tossed with tinned chickpeas, garlic, rosemary and tomato. Four servings, cooked for 25 minutes.',
    kw: ['pasta with chickpeas', 'pasta e ceci', 'chickpea pasta', 'pasta and chickpeas with rosemary', 'italian pasta with chickpeas'],
    why: 'A Sunday dish for four, which is also just as good on a Monday: chickpeas that have been simmered with garlic and rosemary taste far better than the ones in the tin, and pasta cooked in the same sauce draws it all together.\n\nStart by frying the garlic and rosemary in olive oil, gently, until fragrant. Add the tomato and half the chickpeas. Crush the other half roughly with a fork and stir them in. **Mashed chickpeas make the sauce creamy.** They release starch and thicken the liquid without cream or flour.\n\nCook the pasta in its own pot until nearly ready, and finish it in the chickpea sauce for the last 2 minutes with a ladle of its cooking water. That brings the sauce and pasta together.\n\nShort shapes, such as ditalini, tubetti or small shells, suit best. Finish with a thread of good olive oil and black pepper.',
    ing: [
      '300 g penne',
      '4 tbsp olive oil',
      '3 garlic cloves, sliced',
      '1 sprig fresh rosemary',
      '400 g tinned chopped tomatoes',
      '480 g tinned chickpeas, drained',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '30 g parmesan, grated'
    ],
    st: [
      'Cook the pasta in a large pan of well-salted boiling water until 2 minutes short of the packet time. Keep a cup of the water, then drain.',
      'Meanwhile, warm 3 tbsp of the oil in a wide pan with the garlic and rosemary for 2 minutes. Add the tomatoes and simmer for 8 minutes.',
      'Add the chickpeas and crush half with a fork. Simmer for 5 minutes.',
      'Add the pasta, salt, pepper and a ladle of pasta water and cook for 2 minutes. Serve with the parmesan and remaining oil.'
    ],
    tips: [
      'Crush half the chickpeas to thicken the sauce.',
      'Finish the pasta in the sauce.',
      'Remove the rosemary before serving.',
      'Add pasta water if the sauce is too thick.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Grated parmesan', 'A glass of red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [592, 22, 81, 20, 10, 8, 780]
  },

  'pasta-with-sausage-and-peppers': {
    d: 'Short pasta with pork sausage, sliced red peppers, onion and garlic in a quick tomato sauce.',
    meta: 'Pasta with sausage and peppers: short pasta with pork sausage, red peppers and onion in a tomato sauce. Four servings, cooked for 25 minutes.',
    kw: ['pasta with sausage and peppers', 'sausage and pepper pasta', 'italian sausage and peppers pasta', 'penne with sausage and peppers', 'sausage pepper pasta'],
    why: 'Take the sausage out of its skin. That is the short, sharp trick behind this pasta, and it turns a whole sausage into a spoonable, savoury crumble that coats every piece of pasta. Chopped whole, the sausage stays in bulky pieces and the sauce stays thin.\n\nSlit the casing with a knife and squeeze the meat into a hot pan. Break it up with a wooden spoon and let it brown for several minutes. **Do not stir too early.** The browned bits on the base are what give the sauce its flavour.\n\nAdd the onion and peppers once the fat has rendered. Cook them until they soften and catch a little colour, then add the garlic, tomatoes and a splash of water.\n\nCook the pasta until firm and finish it in the sauce for the last minute. Fennel seed in the sausage, if present, gives a faint aniseed note that goes well with the sweetness of the peppers.',
    ing: [
      '300 g penne',
      '1 tbsp olive oil',
      '300 g pork sausages',
      '1 onion, about 150 g, sliced',
      '2 red peppers, about 300 g, sliced',
      '3 garlic cloves, crushed',
      '400 g tinned chopped tomatoes',
      '1/2 tsp dried oregano',
      '1/2 tsp salt',
      '30 g parmesan, grated'
    ],
    st: [
      'Cook the penne in a large pan of well-salted boiling water according to the packet. Keep a cup of the water, then drain.',
      'Squeeze the sausage meat out of the skins into a wide pan with the oil and brown for 6 minutes, breaking it up.',
      'Add the onion and peppers and cook for 6 minutes. Add the garlic for 1 minute, then the tomatoes, oregano and salt. Simmer for 8 minutes.',
      'Toss in the pasta with a splash of the water. Serve with the parmesan.'
    ],
    tips: [
      'Squeeze the sausage from its skin.',
      'Let the meat brown before stirring.',
      'Slice the peppers thin so they soften.',
      'Use pasta water to loosen the sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Grated parmesan', 'Crusty bread'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [605, 24, 71, 25, 6, 10, 1020]
  },

  'pasta-with-cabbage': {
    d: 'Short pasta tossed with cabbage cooked until soft and sweet, with garlic, chilli, bacon and parmesan.',
    meta: 'Pasta with cabbage: short pasta tossed with soft, sweet cabbage, garlic, chilli, bacon and parmesan. Four servings, cooked for 20 minutes.',
    kw: ['pasta with cabbage', 'cabbage pasta', 'italian cabbage and pasta', 'pasta with savoy cabbage', 'cabbage and bacon pasta'],
    why: 'The first sign it is ready is the smell: sweet, almost buttery cabbage, rendered bacon fat and garlic warming together. It is not the sulphurous smell of boiled cabbage, which comes from cooking it for too long in water.\n\nShred the cabbage thinly and cook it in a wide pan with bacon fat and a little oil, covered, over a medium heat. It softens in about 10 minutes and turns sweet as it browns slightly at the edges. **Do not add water.** The cabbage releases enough of its own liquid, and extra water makes it soggy.\n\nCook the pasta separately until just firm. Toss it into the cabbage with a splash of the pasta water, which loosens the mixture and carries the flavour onto every piece.\n\nGarlic and chilli flakes added near the end give the dish brightness, and parmesan finishes it. It works with Savoy, white or hispi cabbage.',
    ing: [
      '300 g penne',
      '100 g bacon, diced',
      '2 tbsp olive oil',
      '500 g Savoy cabbage, finely shredded',
      '3 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '1/2 tsp salt',
      '30 g parmesan, grated'
    ],
    st: [
      'Cook the pasta in a large pan of well-salted boiling water according to the packet. Keep a cup of the water, then drain.',
      'Cook the bacon in a wide pan with the oil for 4 minutes until crisp. Add the cabbage, cover and cook for 8 minutes, stirring twice, until soft.',
      'Add the garlic, chilli flakes and salt for 1 minute.',
      'Toss in the pasta with a splash of the water and serve with the parmesan.'
    ],
    tips: [
      'Shred the cabbage thin so it cooks fast.',
      'Cover the pan for the first part to soften the cabbage.',
      'Do not add water.',
      'Leave out the bacon for a vegetarian dish.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Grated parmesan', 'A glass of white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [445, 18, 64, 13, 6, 6, 810]
  },

  'fried-polenta': {
    d: 'Cooled polenta cut into fingers or squares and fried until golden and crisp outside, soft inside.',
    meta: 'Fried polenta: set polenta cut into fingers and fried until golden and crisp outside. Six servings, cooked for 20 minutes.',
    kw: ['fried polenta', 'crispy fried polenta', 'polenta fingers', 'fried polenta squares', 'pan fried polenta'],
    why: 'It looks like a chip and eats like a cross between a roast potato and a corn cake, which is why it deserves a place beside a stew or under a fried egg. Fried polenta is a way of using polenta that has already set, and the leftovers of one dinner become the base of the next.\n\nMake the polenta the day before, or at least 2 hours ahead, and pour it into a tin lined with paper. It sets firm as it cools. **Chill it fully before cutting.** Warm polenta is soft and sticks to the knife.\n\nCut into fingers about 2 cm thick. Dry them on kitchen paper, because wet surfaces fry unevenly. Fry in a generous layer of oil over a medium heat, leaving them alone for 4 minutes before turning.\n\nThe crust forms as the starch toasts. Drain on paper, season with salt while hot and eat at once, with a dip or a stew.',
    ing: [
      '200 g quick-cook polenta',
      '1 litre water',
      '1 tsp salt',
      '30 g parmesan, grated',
      '100 ml vegetable oil, for frying'
    ],
    rest: [120, 'Setting'],
    st: [
      'Bring the water and salt to the boil. Whisk in the polenta in a thin stream and cook for 5 minutes, stirring, until thick. Stir in the parmesan.',
      'Pour into a lined 20 cm square tin and leave to set for 2 hours.',
      'Turn out, cut into fingers about 2 cm thick and pat dry.',
      'Heat the oil in a large frying pan over a medium heat. Fry the fingers for 4 minutes on each side until golden. Drain on kitchen paper.'
    ],
    tips: [
      'Let the polenta set fully before cutting.',
      'Pat the fingers dry before frying.',
      'Leave them alone until a crust forms.',
      'Salt them while they are hot.'
    ],
    pair: ['Tomato sauce', 'Fried eggs', 'Mushroom stew', 'Aioli'],
    store: 'Set polenta keeps in the fridge for 3 days. Fry fresh for the best crust.',
    nut: [282, 4, 26, 18, 2, 0, 470]
  },

  'ricotta-gnocchi': {
    d: 'Light dumplings of ricotta, flour, egg and parmesan, simmered in water and tossed in browned butter.',
    meta: 'Ricotta gnocchi: light dumplings of ricotta, flour, egg and parmesan, simmered and tossed in butter. Four servings, cooked for 10 minutes.',
    kw: ['ricotta gnocchi', 'ricotta and parmesan gnocchi', 'italian ricotta dumplings', 'gnocchi di ricotta', 'homemade ricotta gnocchi'],
    why: 'Drain the ricotta. That is the single most useful instruction for these gnocchi, because wet ricotta needs more flour, and more flour makes them heavy. Left to drain in a sieve for 30 minutes, the cheese loses its whey and the dumplings stay light.\n\nMix the ricotta with the egg, parmesan and salt, then fold in the flour gently. The dough should be soft and slightly sticky, not firm like pasta. **Handle it as little as possible.** Kneaded dough turns tough and chewy, while a light touch keeps the gnocchi delicate.\n\nRoll the dough into ropes on a floured board and cut into 2 cm pieces. There is no need to shape them with a fork.\n\nSimmer gently in salted water. They sink at first and rise to the surface when cooked, usually within 3 minutes. Lift them out with a slotted spoon and finish in butter, to brown the outsides slightly.',
    ing: [
      '250 g ricotta, drained',
      '1 egg, about 50 g',
      '40 g parmesan, grated',
      '1/2 tsp salt',
      '120 g plain flour',
      '50 g butter',
      '1/4 tsp black pepper'
    ],
    st: [
      'Mix the ricotta, egg, parmesan and salt in a bowl. Fold in the flour gently to a soft dough.',
      'Roll into ropes on a floured board and cut into 2 cm pieces.',
      'Simmer in a large pan of salted water for 3 minutes until they rise to the surface. Lift out with a slotted spoon.',
      'Melt the butter in a wide pan until foaming, add the gnocchi and cook for 2 minutes. Season with the pepper.'
    ],
    tips: [
      'Drain the ricotta for 30 minutes first.',
      'Add the flour gradually and handle lightly.',
      'Test one gnocco in the water before cooking the rest.',
      'Do not let the water boil hard.'
    ],
    pair: ['Tomato sauce', 'Green salad', 'Fried sage', 'Grated parmesan'],
    store: 'Best eaten straight away. Freeze the uncooked gnocchi on a tray, then cook from frozen.',
    nut: [367, 15, 25, 23, 1, 0, 510]
  },

  'fettunta': {
    d: 'Thick slices of country bread toasted, rubbed with raw garlic and soaked in good olive oil with salt.',
    meta: 'Fettunta: thick slices of toasted bread rubbed with garlic and drizzled with olive oil and salt. Four servings, cooked for 5 minutes.',
    kw: ['fettunta', 'tuscan garlic bread', 'garlic toast with olive oil', 'italian garlic bread with olive oil', 'bread rubbed with garlic'],
    why: 'Fettunta means oiled slice, and the name tells you what matters: the bread and the oil. It is the plainest of Italian toasts, eaten in Tuscany when the new olive oil comes out in autumn, and it needs very little except the best oil you can find.\n\nChoose bread with a firm crust and an open crumb. Slices about 2 cm thick are right. Thin slices toast hard, while thicker ones stay soft in the middle. Grill or toast them until golden on both sides. **Rub the garlic on while the toast is hot.** The rough surface grates the clove like a microplane and leaves a thin film of garlic.\n\nOne clove is enough for four slices. Cut it in half and rub the cut side across the bread. Raw garlic is strong, so go lightly if you are not used to it.\n\nDrizzle the oil generously and add a good pinch of sea salt. Eat at once, while the toast is warm.',
    ing: [
      '4 thick slices country bread, about 200 g',
      '1 garlic clove, halved',
      '4 tbsp extra virgin olive oil',
      '1/4 tsp sea salt'
    ],
    st: [
      'Toast or grill the bread for 2 minutes on each side until golden and crisp.',
      'Rub one side of each slice with the cut side of the garlic while still hot.',
      'Drizzle with the olive oil and sprinkle with the salt. Serve at once.'
    ],
    tips: [
      'Use the best olive oil you can afford.',
      'Rub the garlic on hot toast.',
      'Use one clove for four slices.',
      'Top with chopped tomato for a variation.'
    ],
    pair: ['Bean soup', 'Tomato salad', 'Cured meats', 'Red wine'],
    store: 'Best eaten straight away.',
    nut: [255, 5, 25, 15, 1, 3, 390]
  },

  'pommes-persillade': {
    d: 'Potatoes fried in oil until golden and crisp, then tossed with chopped garlic and parsley.',
    meta: 'Pommes persillade: potatoes fried until golden and tossed with garlic and parsley. Four servings, cooked for 25 minutes.',
    kw: ['pommes persillade', 'french parsley potatoes', 'persillade potatoes', 'garlic and parsley potatoes', 'sauteed potatoes with parsley and garlic'],
    why: 'Parsley and garlic chopped together make a persillade, and the French use it to finish everything from potatoes to lamb. In this dish, it goes on at the last moment, so the garlic stays sharp and the parsley stays green.\n\nCut the potatoes into 2 cm cubes and parboil them for 5 minutes before frying. That softens the middle and speeds up the browning. Drain them well and let them steam dry for a couple of minutes. **Dry potatoes crisp; wet ones stew.** Tip them into the hot oil in a single layer.\n\nLeave them alone for several minutes at a time. A crust forms when the potato touches the pan without being moved. Turn them with a spatula and repeat on the other sides.\n\nThe persillade goes in off the heat, with a pinch of salt. Chop the garlic very fine, or it will taste raw and harsh. Serve them with steak or a roast chicken, or under a fried egg for a cheap supper.',
    ing: [
      '800 g waxy potatoes, peeled and cut into 2 cm cubes',
      '4 tbsp vegetable oil',
      '1 tbsp butter',
      '1/2 tsp salt',
      '3 garlic cloves, very finely chopped',
      '20 g fresh parsley, finely chopped'
    ],
    st: [
      'Boil the potatoes in salted water for 5 minutes. Drain and steam dry for 2 minutes.',
      'Heat the oil in a large frying pan over a medium-high heat. Add the potatoes in a single layer and cook for 15 minutes, turning now and then, until golden and crisp.',
      'Add the butter and salt and cook for 1 minute.',
      'Take the pan off the heat and toss through the garlic and parsley.'
    ],
    tips: [
      'Steam the potatoes dry after boiling.',
      'Fry in a single layer so they crisp.',
      'Add the garlic and parsley off the heat.',
      'Chop the garlic very fine.'
    ],
    pair: ['Grilled steak', 'Roast chicken', 'Fried eggs', 'Green salad'],
    store: 'Best eaten straight away. Reheat in a hot oven to crisp them again.',
    nut: [309, 4, 35, 17, 5, 2, 310]
  },

  'oeufs-en-cocotte': {
    d: 'Eggs baked in ramekins with cream and chives until the whites are just set and the yolks stay runny.',
    meta: 'Oeufs en cocotte: eggs baked in ramekins with cream and chives until the whites are just set. Two servings, baked for 12 minutes.',
    kw: ['oeufs en cocotte', 'baked eggs in ramekins', 'french baked eggs with cream', 'eggs en cocotte', 'baked eggs with cream and chives'],
    why: 'Oeufs en cocotte means eggs in a small dish, and that is exactly what this is: one egg per ramekin, with a spoonful of cream, baked in a bath of hot water until the white is set and the yolk still runs.\n\nThe water bath is the key. Standing the ramekins in hot water in a deep tray means the heat reaches the eggs gently from every side, and the whites set softly instead of turning rubbery. **Pour the water in after the ramekins are on the tray.** It is much easier than carrying a full tray to the oven.\n\nButter the ramekins well. A spoonful of cream at the bottom and another over the top keeps the eggs moist and adds richness.\n\nCheck at 10 minutes. The whites should be milky and just set, and the yolks should wobble. They carry on cooking in the hot ramekin, so take them out a little early.',
    ing: [
      '1 tbsp butter, for the ramekins',
      '4 tbsp double cream',
      '2 eggs, about 100 g',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '5 g chives, chopped',
      '2 slices bread, about 60 g'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan). Butter 2 ramekins well.',
      'Put a tablespoon of cream in each ramekin, crack in an egg, and top with another tablespoon of cream, the salt and the pepper.',
      'Stand the ramekins in a deep tray and pour hot water around them to come halfway up the sides.',
      'Bake for 12 minutes until the whites are just set. Scatter with the chives and serve with toasted bread.'
    ],
    tips: [
      'Butter the ramekins generously.',
      'Use a water bath for even heat.',
      'Take the eggs out while the yolks still wobble.',
      'Serve in the ramekins with toast to dip.'
    ],
    pair: ['Toast soldiers', 'Smoked salmon', 'Green salad', 'Black coffee'],
    store: 'Best eaten straight away.',
    nut: [302, 10, 16, 22, 1, 3, 510]
  },

  'bratkartoffeln': {
    d: 'German fried potatoes: boiled potatoes sliced and fried with onion and bacon until crisp and golden.',
    meta: 'Bratkartoffeln: German fried potatoes with onion and bacon, sliced and fried until crisp. Four servings, cooked for 30 minutes.',
    kw: ['bratkartoffeln', 'german fried potatoes', 'german fried potatoes with bacon and onion', 'pan fried potatoes with bacon', 'german skillet potatoes'],
    why: 'In the first cold week of autumn, when the potatoes are plentiful and the kitchen is the warmest room in the house, bratkartoffeln is the dish to make. It is a German method of using boiled potatoes, sliced and fried until crisp, with bacon and onion added for flavour.\n\nCold, pre-cooked potatoes are the key. Boil them in their skins the day before, or at least a few hours ahead, then chill them. Cold potatoes hold their shape when sliced and fried, and warm ones fall apart. **Slice them while they are cold.** The slices should be about 5 mm thick.\n\nFry in a wide pan with a good layer of fat, in a single layer if you can. Leave the slices alone for 5 minutes before turning, so a golden crust forms.\n\nAdd the bacon and onion towards the end, when the potatoes are nearly done. That keeps the onion sweet and soft, not burnt. Season with salt and plenty of black pepper.',
    ing: [
      '800 g waxy potatoes, boiled in their skins and chilled',
      '3 tbsp vegetable oil',
      '100 g bacon, diced',
      '1 onion, about 150 g, sliced',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Peel the cold potatoes and slice them about 5 mm thick.',
      'Heat the oil in a large frying pan over a medium-high heat. Add the potatoes in a single layer and cook for 10 minutes without turning too often, until golden underneath.',
      'Turn, add the bacon and onion and cook for 12 minutes, stirring now and then, until crisp and golden.',
      'Season with the salt and pepper and scatter with the parsley.'
    ],
    tips: [
      'Boil the potatoes a day ahead and chill them.',
      'Do not turn the slices too early.',
      'Add the onion late so it stays sweet.',
      'Use two pans if the potatoes will not fit in one layer.'
    ],
    pair: ['Fried eggs', 'Sausages', 'Pickled cucumbers', 'Green salad'],
    store: 'Best eaten straight away. Reheat leftovers in a hot pan to crisp them again.',
    nut: [314, 9, 38, 14, 5, 3, 680]
  },

  'kaesespaetzle': {
    d: 'Soft egg noodles layered with grated cheese and sweet fried onions, a German cheese noodle bake from the pan.',
    meta: 'Kaesespaetzle: German egg noodles layered with melted cheese and fried onions. Four servings, cooked for 25 minutes.',
    kw: ['kaesespaetzle', 'kasespatzle', 'german cheese noodles', 'cheese spaetzle with fried onions', 'german mac and cheese'],
    why: 'The first sign it is ready is the smell: onions turning deep brown and sweet in the butter, with cheese melting between the noodles. It is the German answer to macaroni cheese, and it is made from a handful of kitchen basics.\n\nThe spaetzle batter is flour, eggs, milk and salt, mixed until thick and elastic, a little like a sticky dough. Beat it well, for about 2 minutes, until it forms bubbles. **Rest the batter for 10 minutes before cooking.** It relaxes, and the noodles come out smoother.\n\nPush the batter through a colander or a spaetzle press into a pan of simmering salted water. The noodles are ready when they float, in about 2 minutes. Lift them out with a slotted spoon.\n\nLayer the hot noodles with grated cheese so it melts between each portion. Top with onions fried slowly in butter until dark and sweet. A little grated nutmeg in the batter is traditional and gives a faint warmth.',
    ing: [
      '300 g plain flour',
      '4 eggs, about 200 g',
      '150 ml whole milk',
      '1 tsp salt',
      '2 onions, about 300 g, sliced',
      '3 tbsp butter',
      '200 g Emmental or cheddar, grated',
      '1/4 tsp black pepper'
    ],
    st: [
      'Beat the flour, eggs, milk and half the salt for 2 minutes into a thick, bubbly batter. Rest for 10 minutes.',
      'Fry the onions in 2 tbsp of the butter for 15 minutes until deep brown and sweet.',
      'Bring a wide pan of salted water to a simmer. Press the batter through a colander into the water in batches. Cook for 2 minutes until they float, then lift out.',
      'Layer the noodles in a warm dish with the cheese and the remaining butter. Season with the pepper and top with the onions.'
    ],
    tips: [
      'Beat the batter until it forms bubbles.',
      'Cook the noodles in small batches.',
      'Layer the noodles with cheese while they are hot.',
      'Brown the onions slowly.'
    ],
    pair: ['Green salad', 'Apple sauce', 'Pickled cucumbers', 'Sausages'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan until the cheese melts again.',
    nut: [668, 28, 67, 32, 4, 6, 1000]
  },

  'hungarian-potato-paprikash': {
    d: 'Potatoes simmered with onion, sweet paprika and sausage in a thick, red broth, a Hungarian one-pot stew.',
    meta: 'Hungarian potato paprikash: potatoes simmered with onion, sweet paprika and sausage in a thick red broth. Four servings, cooked for 30 minutes.',
    kw: ['hungarian potato paprikash', 'paprikas krumpli', 'hungarian potato stew', 'potato stew with paprika and sausage', 'potatoes with paprika'],
    why: 'Flour is not the thickener; the potatoes are. That is what sets this Hungarian stew apart from most paprika dishes: as the potatoes cook, they shed starch into the broth and turn it from a thin red soup into a thick, velvety sauce.\n\nSoften the onion in oil until golden, then take the pan off the heat before the paprika goes in. **Paprika burns in seconds and turns bitter.** Off the heat, it dissolves into the hot fat and releases its colour and sweetness without scorching. Then return the pan to the heat and add the water.\n\nSausage adds smoke and salt. A smoked sausage such as kielbasa is traditional, cut into thick coins. Leave it out for a vegetarian stew, and add a pinch of smoked paprika instead.\n\nPotatoes go in cut into 3 cm chunks. Simmer until they are tender but not collapsed, and serve with a spoonful of sour cream.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 tbsp sweet paprika',
      '2 garlic cloves, crushed',
      '800 g potatoes, peeled and cut into 3 cm chunks',
      '600 ml water',
      '1/2 tsp salt',
      '200 g smoked sausage, sliced',
      '4 tbsp sour cream'
    ],
    st: [
      'Heat the oil in a large pan and cook the onion for 8 minutes until golden. Take the pan off the heat.',
      'Stir in the paprika and garlic for 30 seconds, then return to the heat.',
      'Add the potatoes, water, salt and sausage and bring to the boil. Cover and simmer for 20 minutes until the potatoes are tender and the broth is thick.',
      'Serve in bowls with the sour cream.'
    ],
    tips: [
      'Take the pan off the heat before adding the paprika.',
      'Cut the potatoes into even chunks.',
      'Mash a few potatoes to thicken the stew further.',
      'Leave out the sausage for a vegetarian dish.'
    ],
    pair: ['Crusty bread', 'Pickled cucumbers', 'Sour cream', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Add water when reheating.',
    nut: [423, 12, 42, 23, 7, 5, 720]
  },

  'nokedli': {
    d: 'Small, soft Hungarian dumplings of flour, egg and water dropped into boiling water and tossed in butter.',
    meta: 'Nokedli: small soft Hungarian dumplings of flour, egg and water, boiled and tossed in butter. Four servings, cooked for 10 minutes.',
    kw: ['nokedli', 'hungarian nokedli', 'hungarian egg dumplings', 'hungarian dumplings', 'nokedli with butter'],
    why: 'Why does a dough this wet work? Because nokedli are not shaped, they are scraped. The batter is soft and sticky, close to a thick pancake mix, and it is pushed through holes or scraped off a board into boiling water, where it sets into small, tender dumplings.\n\nMix the flour, eggs, water and salt to a thick batter and beat it with a wooden spoon until it comes away from the bowl in strings. This develops the gluten that gives the dumplings spring. **Rest the batter for 10 minutes.** Without the rest, the dumplings are heavy and chewy.\n\nBoil a large pan of salted water. Wet a board or plate and scrape thin pieces of batter into the water with a knife, or push through a colander. The dumplings float when cooked, in about 2 minutes.\n\nDrain and toss in butter. Nokedli is a side for a stew, such as paprikash, and it is the Hungarian answer to rice.',
    ing: [
      '300 g plain flour',
      '2 eggs, about 100 g',
      '150 ml water',
      '1 tsp salt',
      '2 tbsp butter',
      '10 g fresh parsley, chopped'
    ],
    st: [
      'Beat the flour, eggs, water and half the salt into a thick, sticky batter until it comes away from the bowl in strings. Rest for 10 minutes.',
      'Bring a large pan of water with the remaining salt to the boil.',
      'Press the batter through a colander into the water in batches. Cook for 2 minutes until the dumplings float.',
      'Lift out with a slotted spoon, toss in the butter and scatter with the parsley.'
    ],
    tips: [
      'Beat the batter well to build spring.',
      'Cook in small batches.',
      'Rinse the colander between batches.',
      'Serve beside a stew with plenty of sauce.'
    ],
    pair: ['Paprikash', 'Goulash', 'Chicken stew', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan with butter.',
    nut: [353, 11, 57, 9, 2, 0, 620]
  },

  'polish-cucumber-salad': {
    d: 'Thinly sliced cucumber in sour cream with dill, a little sugar and vinegar, served cold.',
    meta: 'Polish cucumber salad: thinly sliced cucumber in sour cream with dill, sugar and vinegar. Four servings, no cooking needed.',
    kw: ['polish cucumber salad', 'mizeria', 'cucumber salad with sour cream and dill', 'creamy cucumber salad', 'polish cucumber salad with dill'],
    why: 'Cucumbers, sour cream, dill, a little sugar and vinegar: that is the whole list, and a salad that goes with almost any grilled or fried dish. Mizeria is the Polish name, and it is eaten at summer lunches with new potatoes and meat.\n\nSlice the cucumbers as thin as you can, ideally with a mandoline or a very sharp knife. Thin slices soak up the dressing. Salt them lightly and leave for 10 minutes, then squeeze out the liquid. **Do not skip the squeezing.** Cucumber is mostly water, and the dressing turns thin and pale if you leave it in.\n\nThe dressing is sour cream thinned with a splash of vinegar and a pinch of sugar. Taste it before mixing it in, since sour cream varies in sharpness.\n\nChopped dill goes in at the last moment so it stays bright. The salad is best the same day, as it releases water on standing.',
    ing: [
      '2 cucumbers, about 600 g, thinly sliced',
      '1/2 tsp salt',
      '200 g sour cream',
      '1 tbsp white wine vinegar',
      '1/2 tsp sugar',
      '15 g fresh dill, chopped',
      '1/4 tsp black pepper'
    ],
    st: [
      'Toss the cucumber with the salt and leave for 10 minutes. Squeeze out the liquid with your hands.',
      'Mix the sour cream, vinegar, sugar and pepper in a bowl.',
      'Fold in the cucumber and dill.',
      'Taste and adjust the salt and vinegar. Serve cold.'
    ],
    tips: [
      'Slice the cucumber very thin.',
      'Squeeze out the liquid after salting.',
      'Add the dill just before serving.',
      'Use plain yoghurt if you have no sour cream.'
    ],
    pair: ['New potatoes', 'Grilled sausages', 'Fried fish', 'Pork chops'],
    store: 'Best eaten the same day. It releases water as it stands.',
    nut: [134, 2, 9, 10, 1, 5, 310]
  }
};
