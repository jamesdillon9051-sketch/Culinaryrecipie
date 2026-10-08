'use strict';

/**
 * Volume thirty-five — vegetable curries, rice, soups and bakes.
 *
 * Potatoes, cauliflower, pumpkin, lentils, rice and seasonal squash are the
 * cheapest food in most shops, and these are the dishes that make a full meal
 * from them. Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'potato-curry': {
    d: 'Chunks of potato simmered in a tomato and onion sauce with cumin, turmeric and garam masala. Four servings in 40 minutes.',
    meta: 'Potato curry: potatoes simmered in a spiced tomato and onion sauce with cumin, turmeric and garam masala. A cheap curry for four in 40 minutes.',
    kw: ['potato curry', 'easy aloo curry', 'budget potato dinner', 'simple indian potato curry', 'cheap curry for four'],
    why: 'Potato curry begins with the onions and ends with the potatoes, and the order matters. Onions cooked for 10 minutes until golden give the sauce its sweetness; potatoes added too early turn to mash before the sauce has body.\n\nCut the potatoes into 3 cm pieces. They should be tender but still keep their corners after 15 minutes of simmering. Floury potatoes such as Maris Piper collapse slightly and thicken the sauce, which suits this dish.\n\nCook the dry spices in the oil first. Cumin seeds crackle in a few seconds, and ground spices need only 30 seconds before the tomatoes go in.\n\n**Stir gently once the potatoes are in.** Rough stirring breaks them up. A squeeze of lemon at the end brightens the whole pot. Potato curry is a dish that tastes better on the second day, when the sauce has soaked into the pieces. It is easy to double, and the leftovers fill a flatbread or sit on top of a baked potato for another meal.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '2 onions, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '1 tsp ground turmeric',
      '2 tsp ground coriander',
      '400 g tin chopped tomatoes',
      '800 g potatoes, peeled and cut into 3 cm pieces',
      '400 ml water',
      '1 tsp salt',
      '2 tsp garam masala',
      '1 tbsp lemon juice',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large pan over medium heat. Add the cumin seeds and let them crackle for 20 seconds.',
      'Add the onions and cook for 10 minutes, stirring, until golden. Add the garlic, ginger, turmeric and ground coriander and cook for 1 minute.',
      'Stir in the tomatoes, potatoes, water and salt. Bring to a boil, cover and simmer for 20 minutes, stirring gently once or twice, until the potatoes are tender.',
      'Stir in the garam masala and cook uncovered for 3 minutes to thicken. Add the lemon juice and coriander.'
    ],
    tips: [
      'Take your time with the onions; golden onions make a sweeter sauce.',
      'If the sauce is too thin, crush a few potato pieces against the side of the pan.',
      'Add a splash of water if it catches on the base.'
    ],
    pair: ['Basmati rice', 'Flatbread', 'Plain yogurt', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 3 days; the flavour improves overnight. Reheat until steaming throughout. Freezing makes the potatoes grainy.',
    nut: [307, 6, 46, 11, 8, 7, 610]
  },

  'cauliflower-curry': {
    d: 'Cauliflower florets and potato simmered in a curry sauce of onion, tomato and ground spices. Four servings in 35 minutes.',
    meta: 'Cauliflower curry: cauliflower and potato simmered in an onion and tomato curry sauce with ground spices. A cheap curry for four in 35 minutes.',
    kw: ['cauliflower curry', 'easy cauliflower and potato curry', 'budget cauliflower dinner', 'simple aloo gobi', 'cheap curry for four'],
    why: 'Cauliflower is cheap when it is in season and bland when it is not cooked well. The curry gives it something to hold on to: a sauce of onion, garlic, ginger and tomato that clings to every floret.\n\nCut the florets to the same size, about 4 cm, so none are raw when the others are mush. Cut the stalk too; it is sweet and tender once simmered.\n\nCook the spices in the oil before the tomatoes go in. Ground spices burn easily, so keep the heat at medium and the spoon moving.\n\n**Add the cauliflower for the last 12 minutes only.** Cooked longer it breaks down and the curry turns grey. The sauce should cling, not pool. If it is too wet, uncover for the final 5 minutes. A whole head of cauliflower is one of the best-value vegetables in the shop, and the leaves can be sliced and cooked in the same pot. The curry is mild, and chili can be added at the table.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, finely chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '2 tsp ground coriander',
      '1 tsp ground turmeric',
      '1/2 tsp chili powder',
      '400 g tin chopped tomatoes',
      '400 g potatoes, peeled and cut into 2 cm pieces',
      '200 ml water',
      '1 tsp salt',
      '700 g cauliflower florets',
      '2 tsp garam masala'
    ],
    st: [
      'Heat the oil in a large pan over medium heat and add the cumin seeds for 20 seconds. Add the onion and cook for 8 minutes until soft and golden.',
      'Add the garlic, ginger, coriander, turmeric and chili powder and cook for 1 minute.',
      'Stir in the tomatoes, potatoes, water and salt, cover and simmer for 8 minutes.',
      'Add the cauliflower, cover and cook for 12 minutes until tender. Uncover and cook for 3 minutes more, then stir in the garam masala.'
    ],
    tips: [
      'Cut the florets evenly so they cook at the same pace.',
      'Do not stir hard once the cauliflower is in, or it breaks up.',
      'Taste for salt at the end; cauliflower soaks up a lot.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Lime pickle'],
    store: 'Keeps in the fridge for up to 3 days. Reheat gently until steaming throughout.',
    nut: [276, 7, 35, 12, 8, 8, 660]
  },

  'tarka-dal': {
    d: 'Split red lentils cooked until soft, then finished with a sizzling tarka of garlic, cumin and chili in hot oil. Four servings in 40 minutes.',
    meta: 'Tarka dal: red lentils simmered until creamy and finished with a hot tarka of garlic, cumin and chili. A very cheap dinner for four in 40 minutes.',
    kw: ['tarka dal', 'red lentil dal', 'budget lentil dinner', 'easy dal with rice', 'cheap lentil curry for four'],
    why: 'The sizzle is the signal. When the garlic hits hot oil and the pan starts to spit, the dal is minutes from the table. That tarka, poured over at the end, is what turns a pot of plain lentils into a dish.\n\nRed lentils need no soaking and cook in 20 minutes. Rinse them until the water runs clearer, and skim the foam that rises when they first boil.\n\nSimmer until they collapse into a soft porridge. **Stir often toward the end**, because the lentils sink and catch on the base.\n\nThe tarka must be hot. Heat the oil until a cumin seed sizzles at once, add the garlic and chili and take the pan off the heat the moment the garlic turns pale gold. Brown garlic is bitter. Dal keeps for several days and can be frozen in portions, so a double batch is sensible. The tarka is best made fresh at the last minute, since it is the part that fades fastest as it sits.',
    ing: [
      '250 g split red lentils, rinsed',
      '900 ml water',
      '1 onion, finely chopped',
      '1 tsp ground turmeric',
      '1 tsp salt',
      '400 g tin chopped tomatoes',
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '4 garlic cloves, thinly sliced',
      '1 tsp dried chili flakes',
      '2 tbsp chopped coriander',
      '1 tbsp lemon juice'
    ],
    st: [
      'Put the lentils, water, onion, turmeric and salt in a large pot. Bring to a boil, skim off any foam, then simmer for 15 minutes.',
      'Add the tomatoes and simmer for 10 minutes more, stirring often, until the lentils are soft and creamy.',
      'For the tarka, heat the oil in a small pan over medium-high heat. Add the cumin seeds and, when they sizzle, the garlic and chili flakes. Cook for 1 minute until the garlic is pale gold.',
      'Pour the sizzling oil over the dal, stir in the lemon juice and coriander and serve at once.'
    ],
    tips: [
      'Take the tarka off the heat as soon as the garlic turns pale gold.',
      'If the dal is too thick, loosen it with hot water.',
      'Add the salt early; it seasons the lentils as they cook.'
    ],
    pair: ['Basmati rice', 'Flatbread', 'Plain yogurt', 'Pickle'],
    store: 'Keeps in the fridge for up to 4 days and thickens; loosen with water when reheating. Freezes for up to 3 months.',
    nut: [360, 17, 46, 12, 9, 5, 600]
  },

  'vegetable-pulao': {
    d: 'Basmati rice cooked with peas, carrots, onion and whole spices in a single pot. Four servings in 40 minutes.',
    meta: 'Vegetable pulao: basmati rice cooked with peas, carrots, onion and whole spices in one pot. A cheap, fragrant supper for four in 40 minutes.',
    kw: ['vegetable pulao', 'veg pulao', 'budget rice dinner', 'easy basmati rice with vegetables', 'cheap spiced rice for four'],
    why: 'Pulao is rice cooked in its seasoning, so the grains pick up flavour as they swell. Whole spices go into the hot oil first: cinnamon, cloves, cardamom and a bay leaf, each releasing its oil in the first minute.\n\nRinse the rice in several changes of water, until it runs nearly clear. Soak it for 15 minutes if you can; soaked grains cook evenly and stay long.\n\nThe water measure is 1.5 times the volume of rice. **Once the lid goes on, do not lift it** for 12 minutes. The steam does the cooking.\n\nLeave the pot to stand, covered, for 10 minutes off the heat. The grains firm up and separate, and the pulao comes out fluffy. Fluff with a fork, not a spoon. Whole spices infuse the rice but are not meant to be eaten, so warn guests to leave them on the side. The dish is a good partner to a simple dal or a vegetable curry, and carries its own flavour without sauce.',
    ing: [
      '3 tbsp vegetable oil',
      '3 g whole spices (1 cinnamon stick, 4 cloves, 4 cardamom pods)',
      '1 bay leaf',
      '1 onion, thinly sliced',
      '2 carrots, diced',
      '150 g frozen peas',
      '300 g basmati rice, rinsed and drained',
      '450 ml water',
      '1 tsp salt',
      '1 tsp ground cumin'
    ],
    st: [
      'Heat the oil in a heavy pot over medium heat. Add the whole spices and bay leaf and cook for 30 seconds until fragrant.',
      'Add the onion and cook for 6 minutes until golden. Add the carrots and cook for 2 minutes.',
      'Stir in the rice and cumin for 1 minute. Pour in the water, add the salt and peas and bring to a boil.',
      'Cover tightly, lower the heat to the minimum and cook for 12 minutes without lifting the lid. Turn off the heat and leave covered for 10 minutes. Fluff with a fork.'
    ],
    tips: [
      'Rinse the rice well to remove surface starch and keep the grains separate.',
      'Use a tight-fitting lid or put a tea towel under it.',
      'Leave the whole spices on the side of the plate; they are not for eating.'
    ],
    pair: ['Plain yogurt', 'Cucumber raita', 'Lentil dal', 'Mango chutney'],
    store: 'Cool quickly and keep in the fridge for up to 1 day. Reheat until steaming throughout. Do not leave cooked rice out for more than an hour.',
    nut: [419, 8, 72, 11, 5, 5, 620]
  },

  'vegetable-fried-rice': {
    d: 'Day-old rice fried with egg, peas, carrot and spring onion in soy sauce and sesame oil. Four servings in 20 minutes.',
    meta: 'Vegetable fried rice: day-old rice fried with egg, peas, carrot and spring onion in soy and sesame. A cheap supper for four in 20 minutes.',
    kw: ['vegetable fried rice', 'egg fried rice with vegetables', 'budget fried rice', 'easy fried rice with leftover rice', 'cheap quick rice dinner'],
    why: 'Fried rice made with fresh rice turns to mush. The grains are too soft and too wet and clump into a paste in the pan. Day-old rice from the fridge has dried out and firmed up, so the grains stay separate.\n\nIf you have no leftover rice, spread freshly cooked rice on a tray, put it in the fridge for an hour, and break up any clumps with your fingers.\n\nThe pan has to be very hot. **Add the oil only when the pan is smoking** and keep the rice moving. Each grain should touch the metal.\n\nCook the egg separately in the same pan and chop it into the rice. It stays tender and does not coat the grains in a layer of scramble. Soy sauce goes in last, around the edge of the pan. Frozen mixed vegetables are a fine shortcut here, and need no thawing. Add them straight from the freezer to the hot pan and they warm through in the time the rice takes to crisp.',
    ing: [
      '3 tbsp vegetable oil',
      '3 eggs, beaten',
      '3 spring onions, whites and greens separated and sliced',
      '2 garlic cloves, chopped',
      '2 carrots, finely diced',
      '150 g frozen peas',
      '500 g cooked day-old rice',
      '3 tbsp soy sauce',
      '1 tsp sesame oil',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat 1 tablespoon of the oil in a wok or large frying pan over high heat. Scramble the eggs for 1 minute until just set, then tip onto a plate.',
      'Add 1 tablespoon of oil, the spring onion whites, garlic and carrots and stir-fry for 3 minutes. Add the peas and cook for 1 minute.',
      'Add the remaining oil and the rice and press it into the pan. Fry for 4 minutes, tossing, until hot and some grains are crisp.',
      'Add the soy sauce around the edge of the pan, return the egg, and toss. Finish with the sesame oil, pepper and spring onion greens.'
    ],
    tips: [
      'Use cold, day-old rice so the grains stay separate.',
      'Keep the pan very hot and the rice moving.',
      'Break up any clumps of rice with your fingers before it goes in.'
    ],
    pair: ['Chili sauce', 'Cucumber salad', 'Prawn crackers', 'Egg drop soup'],
    store: 'Cool within an hour and keep in the fridge for up to 1 day. Reheat until steaming throughout; rice should not be reheated more than once.',
    nut: [376, 12, 46, 16, 4, 4, 740]
  },

  'egg-biryani': {
    d: 'Boiled eggs and spiced rice layered with fried onions and cooked together under a tight lid. Four servings in 55 minutes.',
    meta: 'Egg biryani: boiled eggs layered with spiced rice, fried onions and yogurt, cooked under a tight lid. A cheap biryani for four in 55 minutes.',
    kw: ['egg biryani', 'anda biryani', 'budget biryani with eggs', 'indian egg biryani', 'cheap rice dinner for four'],
    why: 'Biryani is built in layers: a spiced base, par-cooked rice, fried onions and a lid sealed tight. The eggs here make it affordable, and they take up the spices as they sit in the base.\n\nThe rice is boiled until about 70 per cent cooked, then drained. It still has a firm core, which finishes cooking in the steam under the lid.\n\nFry the onions slowly until deeply golden. They are the sweetness in the dish and are used twice: half in the base and half scattered on top.\n\n**Seal the pot with foil or a tea towel under the lid.** Escaping steam is the usual reason for a biryani with a hard layer at the bottom. Leave it undisturbed for 10 minutes after the heat is off. Biryani looks like a grand dish but the steps are simple, and the layers do the work. The fried onions can be made ahead and kept in an airtight container, which saves time on the day.',
    ing: [
      '300 g basmati rice, rinsed',
      '6 eggs',
      '4 tbsp vegetable oil',
      '3 onions, thinly sliced',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '2 tbsp biryani spice mix',
      '1 tsp ground turmeric',
      '150 g plain yogurt',
      '2 tomatoes, chopped',
      '1 tsp salt',
      '2 tbsp chopped coriander',
      '2 tbsp chopped mint'
    ],
    st: [
      'Hard-boil the eggs for 9 minutes, cool in cold water, peel and make a few shallow cuts in each. Boil the rice in plenty of salted water for 6 minutes, then drain.',
      'Heat the oil in a wide heavy pot and fry the onions for 15 minutes until deep golden. Lift out half and set aside.',
      'To the pot add the garlic, ginger, spice mix, turmeric, yogurt, tomatoes and salt and cook for 8 minutes until thick. Add the eggs and turn to coat.',
      'Spread the rice over the eggs and sprinkle with the reserved onions, coriander and mint. Cover with foil and a tight lid and cook on the lowest heat for 15 minutes.',
      'Turn off the heat, leave for 10 minutes, then fluff gently and serve.'
    ],
    tips: [
      'Stop boiling the rice while the grains still have a firm core.',
      'Seal the lid well so the steam stays in.',
      'Stir the base before layering to stop it catching.'
    ],
    pair: ['Cucumber raita', 'Sliced onion and lemon', 'Mango pickle', 'Papadums'],
    store: 'Cool quickly and keep in the fridge for up to 1 day. Reheat until steaming throughout. Do not leave rice and eggs out for more than an hour.',
    nut: [591, 21, 75, 23, 4, 7, 710]
  },

  'pumpkin-curry': {
    d: 'Chunks of pumpkin simmered with chickpeas in a coconut and tomato curry sauce. Four servings in 40 minutes.',
    meta: 'Pumpkin curry: pumpkin and chickpeas simmered in a coconut and tomato curry sauce. A cheap, filling dinner for four in 40 minutes.',
    kw: ['pumpkin curry', 'pumpkin and chickpea curry', 'budget pumpkin dinner', 'easy coconut pumpkin curry', 'cheap curry for four'],
    why: 'Pumpkin is cheap in autumn and winter, and sold by the wedge or whole. It is mild and sweet, which is the point: the curry sauce brings the heat and the pumpkin takes the edge off it.\n\nCut the pumpkin into 3 cm cubes, skin on if the skin is thin. Butternut and Kent pumpkin are good; the big carving type is watery and best avoided.\n\nThe pumpkin cooks in about 15 minutes. **It is done when a knife goes in with no push** but the cubes still hold their shape. Past that it falls apart, which thickens the sauce but loses the chunks.\n\nChickpeas add protein and bulk, and soak up the sauce. Coconut milk goes in once the pumpkin is nearly tender. Pumpkin is cheapest in season, and any variety of firm orange squash substitutes. The skin of some types is soft enough to eat, and leaving it on saves the effort of peeling.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, grated',
      '2 tsp grated fresh ginger',
      '2 tbsp mild curry paste',
      '800 g pumpkin or butternut squash, peeled and cut into 3 cm cubes',
      '400 g tinned chickpeas, drained',
      '400 g tin chopped tomatoes',
      '400 ml tin coconut milk',
      '1 tsp salt',
      '2 tbsp chopped coriander'
    ],
    st: [
      'Heat the oil in a large pot over medium heat and cook the onion for 6 minutes. Add the garlic, ginger and curry paste and cook for 2 minutes.',
      'Add the pumpkin, chickpeas and tomatoes. Bring to a boil, cover and simmer for 12 minutes.',
      'Stir in the coconut milk and salt and simmer uncovered for 12 minutes until the pumpkin is tender and the sauce thickens.',
      'Scatter with the coriander and serve.'
    ],
    tips: [
      'Cut the pumpkin into even cubes so it cooks at the same rate.',
      'If the sauce is too thick, loosen with a splash of water.',
      'Add a squeeze of lime at the end for brightness.'
    ],
    pair: ['Basmati rice', 'Naan', 'Plain yogurt', 'Mango chutney'],
    store: 'Keeps in the fridge for up to 3 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [516, 13, 53, 28, 11, 14, 1030]
  },

  'sweet-potato-soup': {
    d: 'Sweet potato, onion and carrot simmered in stock and blended until smooth, with a pinch of cumin. Four servings in 40 minutes.',
    meta: 'Sweet potato soup: sweet potato, onion and carrot simmered in stock and blended with cumin. A cheap, smooth soup for four in 40 minutes.',
    kw: ['sweet potato soup', 'easy sweet potato and carrot soup', 'budget blended soup', 'simple sweet potato soup', 'cheap soup for four'],
    why: 'The colour tells you when it is ready: a deep, even orange, with no pale patches left in the pot. The soup is blended smooth, so a lump of raw potato would show.\n\nRoast or simmer? Simmering is quicker and gives a clean, sweet flavour; roasting adds a toasted edge but takes longer. This recipe simmers, and a pinch of smoked paprika adds the toasted note back.\n\nCut the vegetables into similar-sized pieces so they soften together.\n\n**Blend in batches, with the lid held down by a cloth.** Hot soup expands in a blender and will lift the lid and scald. Thin with extra stock or water to the thickness you like; it thickens as it stands. A bowl of this soup with bread is a meal, and the batch freezes well in portions. For a smoother finish, blend for a little longer than seems necessary, until no flecks remain.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '2 carrots, chopped',
      '800 g sweet potatoes, peeled and cut into 3 cm chunks',
      '2 garlic cloves, chopped',
      '1 tsp ground cumin',
      '1/2 tsp smoked paprika',
      '900 ml vegetable stock',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion and carrots for 6 minutes. Add the garlic, cumin and paprika and cook for 1 minute.',
      'Add the sweet potatoes and stock. Bring to a boil, cover and simmer for 20 minutes, until the sweet potato is very soft.',
      'Blend in batches until smooth, returning the soup to the pot.',
      'Season with the salt and pepper, thin with water if you like, and reheat gently before serving.'
    ],
    tips: [
      'Blend in batches and hold the lid down firmly.',
      'Stir in a spoon of peanut butter or yogurt for a richer soup.',
      'If the soup tastes flat, add a squeeze of lime.'
    ],
    pair: ['Crusty bread', 'Cheese toastie', 'Seeds on top', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat gently, stirring.',
    nut: [256, 6, 49, 4, 8, 11, 1170]
  },

  'sweet-potato-chili': {
    d: 'Sweet potato cubes, black beans and tomatoes simmered with chili powder and cumin. Six servings in 50 minutes.',
    meta: 'Sweet potato chili: sweet potato, black beans and tomatoes simmered with chili powder and cumin. A cheap pot for six in 50 minutes.',
    kw: ['sweet potato chili', 'sweet potato and black bean chili', 'budget bean chili', 'easy meatless chili', 'cheap chili for six'],
    why: 'Sweet potato is a good fit for chili because it brings sweetness to balance the spice, and it thickens the pot as the outer cubes break down.\n\nCut the cubes to 2 cm. Larger pieces take longer than the 25 minutes of simmering, and smaller ones vanish into the sauce.\n\nFry the spices with the onion before the liquid goes in. Chili powder and cumin taste raw when they are stirred into tomatoes, and deepen when cooked in oil for a minute.\n\nBlack beans are cheap and keep their shape in a long simmer. **Rinse them thoroughly** to remove the tin liquid, which is salty and can taste metallic. The chili is ready when the sweet potato is soft and the sauce clings to a spoon. This is a good dish for those cooking without meat, since the sweet potato adds body and the beans provide protein. It holds well on the hob for a gathering, and a bowl of toppings on the side lets people choose.',
    ing: [
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '2 tbsp chili powder',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '600 g sweet potatoes, peeled and cut into 2 cm cubes',
      '2 x 400 g tins chopped tomatoes',
      '480 g tinned black beans, drained and rinsed',
      '200 ml water',
      '1 tsp salt',
      '1 lime, juiced'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onion for 6 minutes. Add the garlic, chili powder, cumin and paprika and cook for 1 minute.',
      'Add the sweet potatoes, tomatoes, beans, water and salt. Bring to a boil.',
      'Lower the heat, cover and simmer for 25 minutes, stirring now and then, until the sweet potato is tender.',
      'Uncover and cook for 8 minutes to thicken. Stir in the lime juice and serve.'
    ],
    tips: [
      'Cut the sweet potato to the same size so it cooks evenly.',
      'Mash a few cubes against the side of the pot to thicken the chili.',
      'Taste for salt at the end; beans and tomatoes vary.'
    ],
    pair: ['Rice', 'Baked potatoes', 'Grated cheddar', 'Soured cream', 'Tortilla chips'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat until steaming throughout.',
    nut: [238, 8, 38, 6, 10, 7, 740]
  },

  'roast-pumpkin-soup': {
    d: 'Pumpkin roasted until caramelised with onion and garlic, then blended with stock into a smooth soup. Four servings in 55 minutes.',
    meta: 'Roast pumpkin soup: roasted pumpkin, onion and garlic blended with stock into a smooth, sweet soup. A cheap soup for four in 55 minutes.',
    kw: ['roast pumpkin soup', 'australian pumpkin soup', 'budget pumpkin soup', 'easy blended pumpkin soup', 'cheap soup for four'],
    why: 'Roasting does what simmering cannot. The edges of the pumpkin catch and caramelise, the onion goes sweet and soft, and the whole pan smells of toast and sugar before it ever meets the stock.\n\nCut the pumpkin into 4 cm pieces, skin on if it is thin; the skin softens and blends away. Spread everything in one layer on a tray with space between the pieces, because crowded pumpkin steams instead of browning.\n\n**Leave the tray alone for 25 minutes.** Turning too early breaks the caramelised surface.\n\nBlend the roasted vegetables with hot stock and no more. Add the liquid gradually; you can always thin the soup, but you cannot thicken it without reducing. A small pinch of nutmeg suits pumpkin. The roasting tray takes the bulk of the effort, and the soup finishes in a single pot. A swirl of cream or yogurt on top looks good, and a few toasted pumpkin seeds add a crunch against the smooth texture.',
    ing: [
      '1.2 kg pumpkin, peeled, seeded and cut into 4 cm pieces',
      '1 onion, cut into wedges',
      '4 garlic cloves, unpeeled',
      '3 tbsp vegetable oil',
      '1 tsp salt',
      '800 ml vegetable stock',
      '1/4 tsp ground nutmeg',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan). Toss the pumpkin, onion and garlic with the oil and salt on a large tray in one layer.',
      'Roast for 40 minutes, turning once after 25, until soft and browned at the edges.',
      'Squeeze the garlic from its skins. Blend the roasted vegetables with the stock in batches until smooth.',
      'Return to the pot, add the nutmeg and pepper and heat through for 5 minutes. Thin with water if needed.'
    ],
    tips: [
      'Use two trays rather than crowding one.',
      'Add stock gradually so the soup does not end up thin.',
      'Blend in batches and hold the lid down with a cloth.'
    ],
    pair: ['Crusty bread', 'Cheese scones', 'Toasted seeds', 'Green salad'],
    store: 'Keeps in the fridge for up to 4 days. Freezes for up to 3 months. Reheat gently, stirring.',
    nut: [263, 6, 35, 11, 7, 10, 1260]
  },

  'butternut-squash-pasta': {
    d: 'Pasta in a sauce of roasted butternut squash, garlic and sage, finished with parmesan. Four servings in 40 minutes.',
    meta: 'Butternut squash pasta: pasta in a sauce of roasted butternut squash, garlic and sage, finished with parmesan. A cheap dinner for four, 40 minutes.',
    kw: ['butternut squash pasta', 'roasted squash pasta', 'budget squash pasta', 'easy butternut and sage pasta', 'cheap autumn pasta'],
    why: 'The sauce is the squash itself. Roasted until soft and caramelised, then mashed into the pasta with a splash of the cooking water, it becomes a thick orange coat that clings to every piece.\n\nRoast the squash in small cubes, 2 cm, so they brown and soften in 25 minutes. Larger pieces need longer and stay pale.\n\nSage fried in oil until crisp is the finishing touch. **It takes under a minute**, so watch it: sage that goes from green to brown has turned bitter.\n\nStir the pasta with the squash over low heat and add the water a splash at a time. The starch emulsifies the squash into a sauce. A grating of parmesan adds salt and a savoury note. Squash cooked this way is naturally sweet, and the sage and garlic keep it from tasting like dessert. If sage is not to hand, a pinch of dried thyme or a little rosemary serves in its place.',
    ing: [
      '800 g butternut squash, peeled and cut into 2 cm cubes',
      '3 tbsp olive oil',
      '1 tsp salt',
      '3 garlic cloves, sliced',
      '300 g pasta shells',
      '10 sage leaves',
      '1/2 tsp black pepper',
      '50 g grated parmesan'
    ],
    st: [
      'Heat the oven to 210°C (190°C fan). Toss the squash with 2 tablespoons of the oil and half the salt on a tray. Roast for 25 minutes until soft and browned.',
      'Boil the pasta in well-salted water until just tender. Keep a mug of the water, then drain.',
      'Heat the remaining oil in a large pan over medium heat. Fry the sage for 40 seconds until crisp and lift it out. Add the garlic to the oil for 30 seconds.',
      'Add the squash and mash roughly with a fork. Add the pasta, half the cheese, the remaining salt, pepper and a splash of the water. Toss until the sauce coats the pasta. Top with the sage and remaining cheese.'
    ],
    tips: [
      'Cut the squash small so it caramelises in the time given.',
      'Add the pasta water a spoonful at a time.',
      'Watch the sage closely; it burns in seconds.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed greens'],
    store: 'Keeps in the fridge for up to 3 days. Reheat with a splash of water.',
    nut: [523, 16, 81, 15, 7, 7, 790]
  },

  'zucchini-pasta': {
    d: 'Spaghetti tossed with grated zucchini cooked down with garlic, olive oil and lemon. Four servings in 20 minutes.',
    meta: 'Zucchini pasta: spaghetti tossed with grated zucchini cooked down with garlic, olive oil and lemon. A very cheap supper for four in 20 minutes.',
    kw: ['zucchini pasta', 'courgette pasta', 'budget zucchini spaghetti', 'easy summer pasta', 'cheap pasta dinner'],
    why: 'What do you do with a glut of zucchini? Grate it. Cooked down in olive oil for 10 minutes, it loses its water and collapses into a soft green sauce that coats the spaghetti.\n\nGrate it on the coarse side of a box grater, and salt it lightly. Leave it for 5 minutes, then squeeze out the liquid in a clean towel. The squeezing matters, because wet zucchini boils in its own water and never browns.\n\nCook it in a wide pan over medium heat, stirring only now and then. **Let it catch lightly**; golden edges are where the flavour comes from.\n\nThe pasta water brings the sauce together, and lemon zest at the end gives it freshness. Zucchini cooked down in oil is a trick worth knowing, because it turns a bulky vegetable into a sauce. The dish is light, so a green salad and bread are plenty alongside it.',
    ing: [
      '350 g spaghetti',
      '700 g zucchini, coarsely grated',
      '1 tsp salt',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1/2 tsp dried chili flakes',
      '1 lemon, zest and juice',
      '40 g grated parmesan'
    ],
    st: [
      'Toss the zucchini with half the salt and leave for 5 minutes. Squeeze out the liquid in a clean tea towel.',
      'Heat the oil in a wide pan over medium heat. Add the garlic and chili for 30 seconds, then the zucchini, and cook for 10 minutes, stirring now and then, until soft and golden in places.',
      'Meanwhile, boil the spaghetti in salted water. Keep a mug of the water, then drain.',
      'Toss the spaghetti into the zucchini with a splash of the water, the lemon zest, juice, remaining salt and half the cheese. Serve with the rest of the cheese.'
    ],
    tips: [
      'Squeeze the zucchini dry so it browns instead of boiling.',
      'Do not let the garlic colour before the zucchini goes in.',
      'Add pasta water a spoonful at a time.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Tomato salad'],
    store: 'Keeps in the fridge for up to 2 days. Reheat with a splash of water.',
    nut: [535, 17, 74, 19, 5, 7, 760]
  },

  'zucchini-bake': {
    d: 'Sliced zucchini layered with bacon, onion, eggs and cheese and baked until set. Four servings in 55 minutes.',
    meta: 'Zucchini bake: sliced zucchini baked with bacon, onion, egg and cheese until set. A cheap Australian-style supper for four in 55 minutes.',
    kw: ['zucchini bake', 'zucchini slice bake', 'budget zucchini dinner', 'easy zucchini and bacon bake', 'cheap egg bake'],
    why: 'A zucchini bake is a way of using up a garden glut, and it works with whatever is in the fridge. Grated or sliced zucchini, a handful of bacon, some cheese and a few eggs are the basis.\n\nThe filling must be dry. Salt the zucchini, leave it for 10 minutes and squeeze out the liquid, or the bake turns watery and will not slice.\n\nBacon and onion go in cooked. They add flavour, and raw bacon would leave a pool of fat in the dish.\n\n**Bake it until the centre is firm to the touch.** A knife should come out clean. Jiggly in the middle means it needs another 5 minutes. It is good hot, warm or cold, which makes it useful for lunch boxes the next day. The bake can be cut into squares and packed into lunch boxes, where it keeps well at room temperature for the morning. Replace the bacon with chopped mushrooms or extra cheese for a meat-free version.',
    ing: [
      '700 g zucchini, coarsely grated',
      '1 tsp salt',
      '150 g bacon, chopped',
      '1 onion, finely chopped',
      '1 tbsp vegetable oil',
      '6 eggs',
      '100 g self-raising flour',
      '150 g grated cheddar',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and grease a 23 cm square dish. Toss the zucchini with half the salt, leave for 10 minutes and squeeze out the liquid in a tea towel.',
      'Fry the bacon in the oil for 5 minutes. Add the onion and cook for 4 minutes. Cool for 5 minutes.',
      'Whisk the eggs in a large bowl. Stir in the flour, cheese, pepper and remaining salt, then fold in the zucchini, bacon and onion.',
      'Pour into the dish and bake for 35 minutes until golden and firm in the middle. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Squeeze the zucchini very dry for a bake that slices cleanly.',
      'Cool the bacon mixture before adding it to the eggs.',
      'A knife in the centre should come out clean.'
    ],
    pair: ['Green salad', 'Tomato relish', 'Crusty bread', 'Coleslaw'],
    store: 'Keeps in the fridge for up to 3 days. Serve cold or reheat at 160°C for 15 minutes. Slices freeze for up to 2 months.',
    nut: [484, 30, 28, 28, 3, 6, 1500]
  },

  'marrow-bake': {
    d: 'Marrow rings baked in a tomato and onion sauce under a crisp cheese and breadcrumb topping. Four servings in 55 minutes.',
    meta: 'Marrow bake: marrow baked in a tomato and onion sauce under a cheese and breadcrumb crust. A cheap way to use a garden marrow, four servings in 55 minutes.',
    kw: ['marrow bake', 'baked marrow with cheese', 'budget marrow dinner', 'easy marrow and tomato bake', 'cheap vegetable bake'],
    why: 'Marrow is mostly water, which is why it needs help. On its own it is bland and wet; in a tomato sauce under a crisp topping it turns sweet and tender.\n\nPeel it, scoop out the seeds and cut into 2 cm chunks. The skin of a large marrow is tough and does not soften in the oven.\n\nSalt the chunks and drain them for 15 minutes. **Squeezing out the water first** is what keeps the bake from becoming a soup.\n\nThe sauce is onion, garlic and tinned tomatoes simmered for 10 minutes. It should be thick, because the marrow still gives up liquid as it bakes. The topping of cheese and crumbs gives crunch against the soft base. Marrows have a mild taste that suits strong flavours, so the tomato, garlic and cheese are not wasted. A glut from the garden is the usual reason to make a dish like this, and it uses a lot in one go.',
    ing: [
      '1 kg marrow, peeled, deseeded and cut into 2 cm chunks',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, chopped',
      '400 g tin chopped tomatoes',
      '1 tsp dried oregano',
      '60 g grated cheddar',
      '40 g dried breadcrumbs',
      '15 g butter'
    ],
    st: [
      'Toss the marrow with half the salt and leave in a colander for 15 minutes. Pat dry.',
      'Heat the oven to 190°C (170°C fan). Heat the oil in a pan and cook the onion for 6 minutes. Add the garlic, tomatoes, oregano and remaining salt and simmer for 10 minutes.',
      'Mix the marrow into the sauce and tip into a 2 litre baking dish.',
      'Mix the cheese and crumbs, scatter over the top and dot with the butter. Bake for 30 minutes until the marrow is tender and the top golden.'
    ],
    tips: [
      'Draining the salted marrow stops the bake going watery.',
      'If the topping browns too quickly, cover with foil.',
      'Use young marrow if you can; it is more tender.'
    ],
    pair: ['Mashed potato', 'Grilled sausages', 'Crusty bread', 'Green salad'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 15 minutes.',
    nut: [260, 8, 21, 16, 5, 9, 770]
  },

  'vegetable-stew': {
    d: 'Potatoes, carrots, parsnips and onion simmered in a seasoned stock until tender. Four servings in 55 minutes.',
    meta: 'Vegetable stew: potatoes, carrots, parsnips and onion simmered in a thickened stock. A cheap, hearty one-pot dinner for four in 55 minutes.',
    kw: ['vegetable stew', 'hearty root vegetable stew', 'budget vegetable dinner', 'easy winter stew', 'cheap stew for four'],
    why: 'A winter stew should not need a recipe so much as a list. Root vegetables, stock, an onion and some herbs, left to simmer until the kitchen smells of dinner.\n\nCut everything to the same size, about 3 cm, so the carrots do not end up raw while the potatoes collapse. Parsnips go in with the carrots; they sweeten the stock.\n\nA spoon of tomato purée and a spoon of flour, cooked with the onion for 2 minutes, give the liquid body. Without them the stock stays thin and watery.\n\n**Do not boil it hard.** A steady simmer keeps the vegetables whole. Season at the end. Stock cubes vary a lot in salt, and the stew reduces as it cooks. Dumplings dropped on top for the last part of the cooking turn this stew into something more substantial. Use whatever roots are cheapest at the time, since turnip or swede replace the parsnips without changing the method.',
    ing: [
      '2 tbsp vegetable oil',
      '2 onions, chopped',
      '2 tbsp plain flour',
      '1 tbsp tomato purée',
      '800 ml vegetable stock',
      '500 g potatoes, peeled and cut into 3 cm chunks',
      '3 carrots, cut into 3 cm chunks',
      '300 g parsnips, cut into 3 cm chunks',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tsp salt',
      '150 g frozen peas'
    ],
    st: [
      'Heat the oil in a large pot over medium heat. Cook the onions for 6 minutes. Stir in the flour and purée and cook for 2 minutes.',
      'Add the stock gradually, stirring, then the potatoes, carrots, parsnips, bay leaves, thyme and salt.',
      'Bring to a boil, then lower to a gentle simmer. Cover and cook for 30 minutes until the vegetables are tender.',
      'Add the peas and cook for 3 minutes. Remove the bay leaves, taste and adjust the salt.'
    ],
    tips: [
      'Cut the vegetables to a similar size so they finish together.',
      'If the stew is too thin, mash a few potato pieces into it.',
      'Add the peas last to keep them green.'
    ],
    pair: ['Crusty bread', 'Dumplings', 'Mustard', 'Green cabbage'],
    store: 'Keeps in the fridge for up to 4 days and thickens overnight. Freezes for up to 3 months, though the potatoes soften.',
    nut: [328, 9, 55, 8, 11, 12, 1310]
  },

  'vegetable-pot-pie': {
    d: 'Potato, carrot, peas and sweetcorn in a creamy sauce under a pastry crust. Six servings in 1 hour 5 minutes.',
    meta: 'Vegetable pot pie: potato, carrot, peas and sweetcorn in a creamy sauce under a pastry crust. A cheap meatless pie for six, 1 hour 5 minutes.',
    kw: ['vegetable pot pie', 'meatless pot pie', 'budget vegetable pie', 'shortcrust vegetable pot pie', 'cheap family pie'],
    why: 'A pot pie lives or dies by its sauce. Too thin and the crust sinks, too thick and the pie is like paste. The right texture is a custard that coats the back of a spoon and still pours.\n\nCook the vegetables in the sauce rather than separately, so their starch thickens it. Potatoes cut into 1.5 cm cubes are tender in 10 minutes of simmering.\n\nButter and flour make the roux. **Cook it for a full minute** before the milk goes in, or the sauce tastes of raw flour.\n\nCool the filling for 15 minutes. A hot filling melts the pastry from beneath and the crust bakes pale and soft. A single crust on top is enough and keeps the cost down. The filling may be cooked and frozen, then thawed and topped with pastry for a quick weeknight pie. A pastry lid alone cuts the cost and effort, and the sauce is rich enough that a base is not missed.',
    ing: [
      '50 g butter',
      '1 onion, chopped',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '50 g plain flour',
      '500 ml vegetable stock',
      '200 ml milk',
      '400 g potatoes, peeled and cut into 1.5 cm cubes',
      '150 g frozen peas',
      '165 g tinned sweetcorn, drained',
      '1 tsp dried thyme',
      '1 tsp salt',
      '320 g ready-rolled shortcrust pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Melt the butter in a large pot over medium heat and cook the onion, carrots and celery for 8 minutes.',
      'Stir in the flour for 1 minute, then add the stock and milk gradually, stirring, until thick.',
      'Add the potatoes, thyme and salt and simmer for 10 minutes. Stir in the peas and sweetcorn. Tip into a 2 litre pie dish and cool for 15 minutes.',
      'Lay the pastry over the filling, trim, press the edge and cut a slit. Brush with the egg.',
      'Bake for 30 minutes until the crust is deep golden.'
    ],
    tips: [
      'Cool the filling before topping or the crust will not crisp.',
      'If the sauce is too thick, thin it with a splash of milk.',
      'Cut a slit in the crust so steam can escape.'
    ],
    pair: ['Green salad', 'Gravy', 'Steamed greens', 'Pickled beetroot'],
    store: 'Keeps in the fridge for up to 3 days. Reheat at 180°C for 20 minutes.',
    nut: [484, 11, 56, 24, 6, 8, 1050]
  }
};
