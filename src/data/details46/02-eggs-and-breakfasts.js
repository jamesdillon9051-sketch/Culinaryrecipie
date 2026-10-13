'use strict';

/**
 * Volume forty-six — eggs and breakfasts.
 *
 * Twenty-two dishes built on eggs, the cheapest protein in most kitchens:
 * baked cups, Parsi scrambled eggs, Filipino omelettes, egg noodles, tacos,
 * tostadas, a Kerala roast, pulao, steamed and rolled eggs, a Greek
 * scramble, a chips omelette, then toast, fried rice, hash and two sweet
 * breakfast puddings. Times are the recipe's own; hobs differ, so each
 * method says what to look for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'egg-muffin-cups': {
    d: 'Beaten eggs baked in a muffin tin with ham, cheese and spring onion, ready to grab and reheat through the week.',
    meta: 'Egg muffin cups: beaten eggs baked in a muffin tin with ham, cheddar and spring onion. Six servings, cooked for 20 minutes.',
    kw: ['egg muffin cups', 'baked egg muffins', 'egg cups with ham and cheese', 'make ahead egg muffins', 'egg muffin tin breakfast'],
    why: 'A weekday breakfast for a household of six, made once and eaten across several mornings. Egg muffin cups reheat in under a minute, which makes them the opposite of a fiddly cooked breakfast.\n\nThe method is almost nothing: whisk the eggs, stir in the fillings, pour into a greased tin and bake. The care goes into two places. **Grease the tin well.** Eggs cling to bare metal, and a cup that tears when you lift it out is a lost cup.\n\nFill each hole about two thirds full. The eggs puff up as they bake, then settle as they cool. Overfilled cups spill over the edge and weld themselves to the tin.\n\nCheck them at 15 minutes. They are done when the centre is set and springs back when pressed. Let them rest for 2 minutes in the tin before you loosen the edges with a knife. Make a double batch on a Sunday and keep them in the fridge. They reheat quickly and are far cheaper than anything bought on the way to work.',
    ing: [
      '8 eggs, about 400 g',
      '50 ml whole milk',
      '100 g ham, diced',
      '60 g cheddar, grated',
      '2 spring onions, about 20 g, sliced',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp butter, for greasing the tin'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan). Grease a 12-hole muffin tin well with the butter.',
      'Whisk the eggs with the milk, salt and pepper. Divide the ham, cheese and spring onions between the holes.',
      'Pour in the egg mix until each hole is two thirds full.',
      'Bake for 20 minutes until set and springy. Rest for 2 minutes, then loosen the edges with a knife and lift out.'
    ],
    tips: [
      'Grease every hole properly, right up to the rim.',
      'If your oven runs hot, check the cups at 15 minutes.',
      'Fill the holes only two thirds full to leave room for puffing.',
      'Swap the ham for cooked mushrooms or spinach if you prefer.'
    ],
    pair: ['Toast', 'Sliced tomato', 'Fruit', 'Baked beans'],
    store: 'Keeps in the fridge for 4 days. Freezes for up to 2 months. Reheat in the microwave for 1 minute, or in the oven until hot through.',
    nut: [181, 14, 2, 13, 0, 1, 550]
  },

  'parsi-akuri': {
    d: 'Soft, spiced Parsi scrambled eggs with onion, tomato, green chilli and coriander, cooked slowly so they stay creamy.',
    meta: 'Parsi akuri: soft scrambled eggs with onion, tomato, green chilli and coriander. Two servings, cooked for 10 minutes.',
    kw: ['parsi akuri', 'akuri eggs', 'indian spiced scrambled eggs', 'parsi style scrambled eggs', 'akuri on toast'],
    why: 'It looks like scrambled eggs and cooks like them, with one difference that changes everything: the eggs sit on a layer of softened onion, tomato and spice, and the whole pan is moved gently over a low heat. The result is creamy, loose and savoury, not dry and rubbery.\n\nSoften the onion first, for about 4 minutes. Add the chilli, turmeric and tomato until the mixture is soft and the oil starts to separate at the edge. This is the base, and it holds the flavour of the dish.\n\nPour in the beaten eggs and stir slowly. **Take the pan off the heat while the eggs are still slightly wet.** They carry on cooking in the hot pan and finish softly set.\n\nServe on buttered toast. The soft eggs soak into the bread, which is the point. A slice of buttered toast under the eggs soaks up the juices, and a cup of sweet tea makes this a proper, quick breakfast.',
    ing: [
      '1 tbsp butter',
      '1 onion, about 150 g, finely chopped',
      '1 green chilli, deseeded and chopped',
      '1/4 tsp ground turmeric',
      '1 tomato, about 100 g, chopped',
      '4 eggs, about 200 g, beaten',
      '1/4 tsp salt',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Melt the butter in a frying pan and cook the onion for 4 minutes until soft. Add the chilli and turmeric for 30 seconds.',
      'Add the tomato and cook for 2 minutes until soft.',
      'Turn the heat to low. Pour in the eggs with the salt and stir slowly for 2 minutes.',
      'Take the pan off the heat while the eggs are still slightly wet. Stir in the coriander and serve on toast.'
    ],
    tips: [
      'Keep the heat low once the eggs go in.',
      'Take the pan off the heat before the eggs look finished.',
      'Deseed the chilli for a milder dish, or leave the seeds in for heat.',
      'Butter the toast before the eggs go on.'
    ],
    pair: ['Buttered toast', 'Pav buns', 'Masala chai', 'Sliced tomato'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat gently.',
    nut: [244, 14, 11, 16, 2, 5, 430]
  },

  'tortang-talong': {
    d: 'A Filipino omelette of whole grilled aubergine, flattened and dipped in beaten egg, then pan-fried until golden.',
    meta: 'Tortang talong: Filipino omelette of charred aubergine dipped in beaten egg and fried until golden. Two servings, cooked for 10 minutes.',
    kw: ['tortang talong', 'filipino eggplant omelette', 'aubergine omelette', 'eggplant omelette', 'tortang talong with garlic'],
    why: 'Tortang talong means aubergine omelette in Filipino, and the name is the recipe. A whole aubergine is cooked until the skin chars and the flesh turns soft, then flattened with a fork, dipped in egg and fried.\n\nCharring does the work. Cook the aubergines whole over a gas flame, under a hot grill or in a dry pan until the skin blackens and the flesh collapses. Peel off the skin while it is still warm, leaving the stem for a handle. **Keep the stem on.** It makes the aubergine easy to flip.\n\nFlatten the flesh gently with a fork. Dip it in the beaten egg so it is coated on both sides, then lower it into the hot oil.\n\nFry for about 3 minutes a side until golden. Serve with rice and banana ketchup or plain tomato ketchup. A squeeze of lime does no harm. Eat it hot, with plenty of rice. The soft, smoky aubergine and the crisp edge of the egg are at their best straight from the pan.',
    ing: [
      '2 aubergines, about 400 g, long and thin',
      '3 eggs, about 150 g',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '2 tbsp vegetable oil',
      '2 tbsp tomato ketchup'
    ],
    st: [
      'Char the aubergines whole under a hot grill for about 10 minutes, turning, until the skin blackens and the flesh is soft. Peel off the skin, leaving the stem on.',
      'Flatten each aubergine gently with a fork. Beat the eggs with the salt and pepper in a shallow dish.',
      'Heat the oil in a frying pan. Dip each aubergine in the egg, coating both sides.',
      'Fry for 3 minutes on each side until golden. Serve with the ketchup.'
    ],
    tips: [
      'Char the skin properly before peeling.',
      'Leave the stem on to flip the aubergine more easily.',
      'Flatten the flesh gently so it holds together.',
      'Use thin, long aubergines when you can, as they cook through faster.'
    ],
    pair: ['Steamed rice', 'Banana ketchup', 'Fried fish', 'Sliced tomato'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [305, 12, 17, 21, 6, 11, 530]
  },

  'tortang-giniling': {
    d: 'A Filipino omelette filled with minced beef, potato, carrot and onion, folded into a thick, savoury egg cake.',
    meta: 'Tortang giniling: Filipino beef omelette with potato, carrot and onion, fried in a pan. Four servings, cooked for 15 minutes.',
    kw: ['tortang giniling', 'filipino ground beef omelette', 'beef omelette with potato', 'giniling omelette', 'tortang giniling recipe'],
    why: 'This is what to make in a week when the fridge holds a little mince, a potato and a few eggs. Tortang giniling is a Filipino omelette packed with a savoury beef filling, and it feeds four with rice.\n\nCook the filling first. Brown the mince in a hot pan, then add the onion, garlic, potato and carrot, cut small so they soften quickly. Soy sauce seasons it. **Let the filling cool a little before the eggs go in.** Hot filling cooks the egg unevenly and turns it lumpy.\n\nStir the filling into the beaten eggs. The pan should be wide and non-stick, with a little oil over a medium heat.\n\nCook it for about 6 minutes on one side, until the base is golden and the top is mostly set. Flip with a plate. The second side needs only a few minutes. Serve the wedges with a big pile of rice and a spoonful of ketchup. Any leftover vegetables, such as peas or sweetcorn, can go into the filling.',
    ing: [
      '1 tbsp vegetable oil',
      '250 g beef mince',
      '1 onion, about 150 g, finely chopped',
      '2 garlic cloves, crushed',
      '1 potato, about 150 g, finely diced',
      '1 carrot, about 100 g, finely diced',
      '1 tbsp soy sauce',
      '6 eggs, about 300 g',
      '1/4 tsp black pepper',
      '1 tbsp vegetable oil, for the omelette'
    ],
    st: [
      'Heat the first measure of oil in a pan and brown the mince for 3 minutes. Add the onion, garlic, potato and carrot and cook for 6 minutes until soft.',
      'Stir in the soy sauce and cool for 5 minutes.',
      'Beat the eggs with the pepper and stir in the filling.',
      'Heat the second measure of oil in a wide non-stick pan. Pour in the mix and cook on a medium heat for 6 minutes until the base is golden.',
      'Flip with a plate and cook the second side for 3 minutes. Cut into wedges.'
    ],
    tips: [
      'Cut the potato and carrot small so they cook through in the pan.',
      'Cool the filling a little before adding it to the eggs.',
      'Slide the omelette onto a plate to flip it.',
      'If it browns too fast, lower the heat.'
    ],
    pair: ['Steamed rice', 'Banana ketchup', 'Sliced tomato', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan or eat cold.',
    nut: [364, 23, 14, 24, 2, 3, 380]
  },

  'egg-adobo': {
    d: 'Hard-boiled eggs simmered in the classic Filipino adobo sauce of soy sauce, vinegar, garlic and bay.',
    meta: 'Egg adobo: boiled eggs simmered in soy sauce, vinegar, garlic and bay until glossy. Four servings, cooked for 20 minutes.',
    kw: ['egg adobo', 'filipino egg adobo', 'adobong itlog', 'adobo eggs', 'boiled eggs in adobo sauce'],
    why: 'A weeknight dish for four, made when the meat has run out and the eggs have not. Egg adobo takes the sharp, salty sauce of Filipino adobo and puts hard-boiled eggs in it, which soak up the flavour while the sauce reduces to a glaze.\n\nThe sauce is soy sauce, vinegar, garlic, bay leaves and black pepper. **Do not stir the vinegar at the start.** Leave it undisturbed for the first couple of minutes so the sharp edge cooks off, then stir.\n\nBoil the eggs first for 10 minutes and peel them. Fry them briefly in oil so the whites blister, which gives the surface something for the sauce to cling to.\n\nSimmer until the liquid has reduced by about half and coats the eggs. Serve with plenty of steamed rice to catch the sauce. Make extra sauce by adding a little more water at the start. It is excellent spooned over rice, even without the eggs.',
    ing: [
      '6 eggs, about 300 g',
      '1 tbsp vegetable oil',
      '4 garlic cloves, crushed',
      '60 ml soy sauce',
      '60 ml white vinegar',
      '120 ml water',
      '2 bay leaves',
      '1/2 tsp black pepper',
      '1 tsp sugar'
    ],
    st: [
      'Boil the eggs for 10 minutes, cool in cold water and peel.',
      'Heat the oil in a pan and fry the eggs for 3 minutes, turning, until the whites blister. Add the garlic for 30 seconds.',
      'Add the soy sauce, vinegar, water, bay, pepper and sugar. Bring to the boil without stirring for 2 minutes.',
      'Stir, lower the heat and simmer for 10 minutes, turning the eggs, until the sauce is reduced by half and glossy.'
    ],
    tips: [
      'Peel the eggs under cold water for a clean surface.',
      'Leave the vinegar unstirred for the first couple of minutes.',
      'Turn the eggs now and then so the sauce coats them evenly.',
      'Taste the sauce before the end and add a pinch of sugar if it is sharp.'
    ],
    pair: ['Steamed rice', 'Sliced tomato', 'Fried fish', 'Pickled papaya'],
    store: 'Keeps in the fridge for 3 days. The eggs get more flavourful overnight.',
    nut: [159, 11, 4, 11, 0, 2, 970]
  },

  'egg-fried-noodles': {
    d: 'Wheat noodles stir-fried with scrambled egg, spring onion and soy sauce in a hot pan.',
    meta: 'Egg fried noodles: wheat noodles stir-fried with scrambled egg, spring onion and soy sauce. Two servings, cooked for 10 minutes.',
    kw: ['egg fried noodles', 'egg noodles stir fry', 'egg and noodle stir fry', 'fried noodles with egg and soy sauce', 'chinese egg fried noodles'],
    why: 'It looks like fried rice and cooks like it, but the noodles need more care. They are lighter, they clump and they break if you stir too hard. A hot pan and a gentle hand fix most of it.\n\nCook the noodles according to the packet, drain them well and toss them with a little oil so they do not stick. Dry noodles fry; wet ones steam. **Drain them thoroughly.** Leftover cooked noodles work even better, because they have dried out a little in the fridge.\n\nScramble the eggs first in a corner of the pan and push them aside. Then add the noodles and toss with the soy sauce. The heat should stay high so the noodles pick up a little colour.\n\nFinish with the spring onions, which should stay bright and crisp. A handful of frozen peas or some shredded cabbage thrown in with the noodles stretches the dish and adds colour at very little cost.',
    ing: [
      '200 g dried egg noodles',
      '1 tbsp vegetable oil',
      '3 eggs, about 150 g, beaten',
      '2 garlic cloves, crushed',
      '3 spring onions, about 40 g, sliced',
      '2 tbsp soy sauce',
      '1/2 tsp sesame oil',
      '1/4 tsp black pepper'
    ],
    st: [
      'Cook the noodles in boiling water according to the packet. Drain well and toss with a little of the oil.',
      'Heat the remaining oil in a wok or large frying pan over a high heat. Add the eggs and scramble for 1 minute. Push to the side.',
      'Add the garlic for 20 seconds, then the noodles and soy sauce. Toss for 3 minutes.',
      'Stir in the spring onions, sesame oil and pepper and serve straight away.'
    ],
    tips: [
      'Drain the noodles well, or they steam in the pan.',
      'Keep the heat high and the noodles moving.',
      'Use cold, leftover noodles if you have them.',
      'Add vegetables such as frozen peas or shredded cabbage to stretch the dish.'
    ],
    pair: ['Stir fried greens', 'Chilli sauce', 'Cucumber salad', 'Fried tofu'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat in a hot pan.',
    nut: [575, 25, 76, 19, 4, 4, 1000]
  },

  'egg-tacos': {
    d: 'Soft tortillas filled with creamy scrambled eggs, grated cheese and a spoonful of salsa.',
    meta: 'Egg tacos: soft tortillas filled with soft scrambled egg, cheese and salsa. Four servings, cooked for 10 minutes.',
    kw: ['egg tacos', 'breakfast egg tacos', 'scrambled egg tacos', 'egg and cheese tacos', 'egg tacos with salsa'],
    why: 'The first thing you notice is the sound: eggs just hitting a warm pan, a soft hiss rather than a roar. That is the heat you want, and it is why these tacos taste better than eggs scrambled hard and fast.\n\nCook the eggs over medium-low heat. Stir slowly with a spatula, pulling the set parts from the edge to the centre. **Stop while they still look slightly glossy.** They finish cooking in the pan and on the warm tortilla.\n\nWarm the tortillas in a dry pan for 20 seconds a side until they puff and soften. Cold tortillas crack and fall apart.\n\nPile the eggs inside, add the cheese so it melts a little, and finish with salsa. Fold and eat at once. They do not wait well. Keep the fillings simple. A spoonful of salsa and a little cheese are enough, and extra toppings only make the tortilla harder to fold.',
    ing: [
      '8 small flour tortillas, about 240 g',
      '6 eggs, about 300 g',
      '2 tbsp whole milk',
      '1 tbsp butter',
      '1/4 tsp salt',
      '60 g cheddar, grated',
      '120 g tomato salsa',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Warm the tortillas in a dry pan for 20 seconds on each side and wrap in a clean tea towel.',
      'Beat the eggs with the milk and salt.',
      'Melt the butter in a frying pan over a medium-low heat. Add the eggs and stir slowly for 3 minutes until just set but still glossy.',
      'Fill the tortillas with the eggs and cheese. Top with the salsa and coriander and fold.'
    ],
    tips: [
      'Keep the heat medium-low for creamy eggs.',
      'Take the pan off the heat while the eggs still look glossy.',
      'Warm the tortillas first, or they will crack when folded.',
      'Add sliced avocado if you have one.'
    ],
    pair: ['Refried beans', 'Sliced avocado', 'Hot sauce', 'Fresh fruit'],
    store: 'Best eaten straight away. The cooked egg keeps in the fridge for 1 day.',
    nut: [388, 19, 33, 20, 2, 4, 940]
  },

  'egg-tostadas': {
    d: 'Crisp corn tortillas topped with refried beans, fried eggs, salsa and cheese.',
    meta: 'Egg tostadas: crisp tortillas topped with refried beans, fried egg, salsa and cheese. Four servings, cooked for 10 minutes.',
    kw: ['egg tostadas', 'breakfast tostadas', 'tostadas with fried egg', 'refried bean tostadas', 'mexican egg tostadas'],
    why: 'Crisp first. A tostada is only as good as its crunch, and the crunch dies fast once toppings go on, so assemble at the last moment.\n\nBake the tortillas in the oven or crisp them in a dry pan until stiff and golden at the edges. They should snap, not bend. **Spread the beans while the tortillas are warm.** The heat softens the beans and helps them spread without tearing the tortilla.\n\nFry the eggs in a little oil until the whites are set and the yolks are still runny. A runny yolk acts as a sauce for the beans below.\n\nFinish with salsa, cheese and coriander. Eat with your hands, over a plate. A tostada always breaks a little, and that is part of the fun. Set out the toppings in bowls and let everyone build their own. The beans can be made a day ahead and warmed when needed.',
    ing: [
      '8 small corn tortillas, about 200 g',
      '1 tbsp vegetable oil',
      '400 g tinned refried beans',
      '4 eggs, about 200 g',
      '1 tbsp vegetable oil, for frying',
      '60 g feta, crumbled',
      '120 g tomato salsa',
      '10 g fresh coriander, chopped'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Brush the tortillas with the first measure of oil, lay them on a tray and bake for 8 minutes until crisp.',
      'Warm the beans in a small pan for 3 minutes.',
      'Fry the eggs in the second measure of oil until the whites are set and the yolks are runny.',
      'Spread the beans on the tortillas. Top with the eggs, feta, salsa and coriander. Serve at once.'
    ],
    tips: [
      'Bake the tortillas until they snap.',
      'Spread the beans while the tortillas are still warm.',
      'Add the toppings at the last moment.',
      'If you prefer firmer yolks, fry the eggs a minute longer.'
    ],
    pair: ['Sliced avocado', 'Hot sauce', 'Lime wedges', 'Black coffee'],
    store: 'Best eaten straight away. The baked tortillas keep in an airtight tin for 2 days.',
    nut: [390, 17, 40, 18, 9, 4, 860]
  },

  'kerala-egg-roast': {
    d: 'Boiled eggs coated in a thick, dark onion and tomato masala with fennel, chilli and curry leaves.',
    meta: 'Kerala egg roast: boiled eggs in a thick onion and tomato masala with fennel, chilli and curry leaves. Four servings, cooked for 25 minutes.',
    kw: ['kerala egg roast', 'egg roast', 'nadan mutta roast', 'kerala style egg masala', 'egg roast with onion and tomato'],
    why: 'Brown the onions properly. Most versions of egg roast fail here, because the onions go in, soften and are called done. The dark, jammy masala that makes this dish comes from onions cooked until they are deep golden brown, which takes at least 10 minutes.\n\nThe sauce is built on that base. Add the ginger, garlic and spices, then the tomato, and cook until the oil separates at the edge. **Stir often once the onions start to colour.** They burn quickly after they brown, and a scorched onion tastes bitter.\n\nThe eggs go in whole, boiled and peeled. Some cooks fry them first until the whites blister, so the surface holds more masala. This is worth the extra minute.\n\nCoat the eggs gently so they stay intact. Serve with rice, parotta or plain bread. The masala keeps well, so make a double batch and boil fresh eggs when you want a quick supper. Parotta is the traditional partner.',
    ing: [
      '6 eggs, about 300 g',
      '2 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '1 tbsp ginger, grated',
      '3 garlic cloves, crushed',
      '1 green chilli, slit',
      '1 tsp ground fennel seeds',
      '1 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '2 tomatoes, about 200 g, chopped',
      '2 g curry leaves',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the eggs for 10 minutes, cool in cold water and peel.',
      'Heat the oil in a wide pan and cook the onions over a medium heat for 10 minutes, stirring often, until deep golden.',
      'Add the ginger, garlic, green chilli and curry leaves for 1 minute, then the fennel, chilli powder and turmeric for 30 seconds.',
      'Add the tomatoes and salt and cook for 8 minutes until thick and the oil separates.',
      'Add the eggs and turn gently for 2 minutes until coated in the masala.'
    ],
    tips: [
      'Cook the onions slowly until deep golden.',
      'Stir often once the onions start to colour.',
      'Peel the eggs under cold water for a smooth surface.',
      'If the masala is dry, add a splash of water.'
    ],
    pair: ['Steamed rice', 'Parotta', 'Cucumber raita', 'Plain bread'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [218, 11, 12, 14, 2, 5, 410]
  },

  'egg-pulao': {
    d: 'Basmati rice cooked with whole spices, onion and halved boiled eggs in a single pot.',
    meta: 'Egg pulao: basmati rice cooked with whole spices, onion and halved boiled eggs in one pot. Four servings, cooked for 25 minutes.',
    kw: ['egg pulao', 'egg pulav', 'indian egg pulao', 'egg rice with whole spices', 'boiled egg pulao'],
    why: 'On a cold evening when rice and eggs are what the kitchen has, this is the dish to make. Egg pulao is a one-pot meal where the rice takes its flavour from whole spices, fried onion and a good stock or water, and the eggs sit on top like a topping.\n\nFry the whole spices in oil until they smell sweet. Cinnamon, cloves, cardamom and bay all go in together. They flavour the oil and, through it, every grain of rice. **Rinse the rice until the water runs clear.** It washes off the surface starch and stops the grains sticking.\n\nCook the rice with a measured amount of water, covered and on a low heat. Once the lid is on, leave it alone. Lifting it lets out the steam that cooks the rice.\n\nHalve the eggs and lay them on top for the last few minutes so they warm through. Serve with plain yoghurt or raita and a pickle on the side. The cool, sharp contrast suits the warm spices in the rice.',
    ing: [
      '250 g basmati rice',
      '2 tbsp vegetable oil',
      '3 g cinnamon stick',
      '1 g cloves',
      '2 g green cardamom pods',
      '1 bay leaf',
      '1 onion, about 150 g, sliced',
      '1 tbsp ginger and garlic paste',
      '1 green chilli, slit',
      '500 ml water',
      '1/2 tsp salt',
      '4 eggs, about 200 g'
    ],
    st: [
      'Rinse the rice until the water runs clear, then soak for 10 minutes and drain.',
      'Boil the eggs for 10 minutes, cool in cold water, peel and halve.',
      'Heat the oil in a wide pan with a lid and fry the cinnamon, cloves, cardamom and bay for 30 seconds. Add the onion and cook for 5 minutes until golden.',
      'Add the ginger and garlic paste and the chilli for 1 minute, then the rice, water and salt. Bring to the boil.',
      'Cover, lower the heat and cook for 12 minutes. Lay the eggs on top, cover again and rest for 5 minutes off the heat.'
    ],
    tips: [
      'Rinse the rice until the water runs clear.',
      'Do not lift the lid while the rice cooks.',
      'Count the water carefully, because too much makes the rice sticky.',
      'Warn guests about the whole spices, as they are not meant to be eaten.'
    ],
    pair: ['Cucumber raita', 'Pickle', 'Papad', 'Sliced onion'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [376, 11, 56, 12, 2, 2, 360]
  },

  'chinese-steamed-eggs': {
    d: 'Eggs beaten with warm water and steamed into a silky, wobbling custard, served with soy sauce and spring onion.',
    meta: 'Chinese steamed eggs: eggs beaten with warm water and steamed into a silky custard with soy sauce. Two servings, cooked for 12 minutes.',
    kw: ['chinese steamed eggs', 'chinese steamed egg custard', 'steamed egg with soy sauce', 'silky steamed eggs', 'steamed egg custard'],
    why: 'The surface should be smooth and the middle should wobble when you tilt the dish. Get that, and the eggs taste like a savoury custard, soft enough to eat with a spoon.\n\nThe ratio is what matters. Use about twice as much warm water as egg by volume. That sounds like too much, and it is what makes the texture silky rather than rubbery. Whisk gently and skim off any foam, since bubbles leave tiny holes on the top.\n\nCover the dish before steaming. A lid, a plate or a sheet of foil stops water dripping onto the surface and spoiling it. **Steam on a low heat.** A hard boil turns the custard into a honeycomb of air pockets.\n\nSoy sauce and spring onion go on at the end. A few drops of sesame oil add a rounded finish. Add the soy sauce only at the end. If it goes in before steaming, it can make the custard weep and lose its smooth surface.',
    ing: [
      '3 eggs, about 150 g',
      '150 ml warm water',
      '1/4 tsp salt',
      '2 spring onions, about 20 g, sliced',
      '1 tbsp soy sauce',
      '1/2 tsp sesame oil'
    ],
    st: [
      'Beat the eggs gently with the water and salt. Pour through a sieve into a shallow heatproof dish and skim off any bubbles.',
      'Cover the dish with a plate or foil. Set it on a rack in a pan over simmering water.',
      'Steam over a low heat for 12 minutes until just set with a slight wobble.',
      'Top with the spring onions, soy sauce and sesame oil. Serve at once.'
    ],
    tips: [
      'Strain the egg mix for a smooth surface.',
      'Cover the dish to keep drips off the top.',
      'Keep the heat low so the custard stays silky.',
      'Check at 10 minutes and watch for the wobble.'
    ],
    pair: ['Steamed rice', 'Stir fried greens', 'Chilli oil'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day, but the texture is best fresh.',
    nut: [120, 10, 2, 8, 0, 1, 830]
  },

  'gyeran-mari': {
    d: 'A Korean rolled omelette of beaten egg, carrot and spring onion, cooked in thin layers and sliced into rounds.',
    meta: 'Gyeran mari: Korean rolled omelette with carrot and spring onion, cooked in layers and sliced. Two servings, cooked for 10 minutes.',
    kw: ['gyeran mari', 'korean rolled omelette', 'korean egg roll', 'rolled egg omelette', 'korean rolled omelette with vegetables'],
    why: 'Eggs, a carrot and a spring onion: three ingredients, and a rolled omelette that turns plain breakfast into a banchan fit for any table. Gyeran mari is the Korean name, and it means rolled egg.\n\nThe trick is thin layers. Pour in about a third of the egg, let it set until the surface is just wet, then roll it to one end of the pan. Add more egg, lift the roll so the new layer runs under it, and roll again. **Use a non-stick pan.** Anything else will tear the omelette when you roll.\n\nChop the carrot and spring onion very finely so they roll in without tearing the egg. Season the egg with salt, and strain it for a smoother finish.\n\nRest the finished roll for a minute before slicing. It holds together better, and the layers show. Slice it while warm for a neat cross section, or cool it and slice for a lunchbox. Both ways work, and it tastes good cold.',
    ing: [
      '4 eggs, about 200 g',
      '1/4 tsp salt',
      '30 g carrot, finely chopped',
      '2 spring onions, about 20 g, finely chopped',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Beat the eggs with the salt and strain into a jug. Stir in the carrot and spring onions.',
      'Heat the oil in a non-stick pan over a low heat and wipe away the excess with kitchen paper.',
      'Pour in a third of the egg. When the top is just wet, roll it up to one end of the pan.',
      'Pour in half of what is left, lift the roll so the egg runs under it and roll again. Repeat with the rest.',
      'Rest the roll for 1 minute, then slice into rounds.'
    ],
    tips: [
      'Keep the heat low so the egg does not brown.',
      'Roll while the top is still slightly wet.',
      'Chop the vegetables very finely.',
      'Wipe the oil with kitchen paper so the omelette does not fry.'
    ],
    pair: ['Steamed rice', 'Kimchi', 'Miso soup', 'Seaweed'],
    store: 'Keeps in the fridge for 2 days. Serve cold or at room temperature.',
    nut: [208, 13, 3, 16, 1, 1, 430]
  },

  'thai-basil-fried-egg': {
    d: 'A crisp-edged fried egg served over rice with a quick sauce of garlic, chilli, soy and basil.',
    meta: 'Thai basil fried egg: crisp-edged fried eggs over rice with a garlic, chilli, soy and basil sauce. Two servings, cooked for 5 minutes.',
    kw: ['thai basil fried egg', 'kai kra pao', 'thai fried egg over rice', 'thai holy basil egg', 'fried egg with basil and chilli'],
    why: 'Hot oil. That is the whole recipe, and the part people skip. A thin layer of oil heated until it ripples turns an egg white to a crisp, lacy edge in about a minute, with the yolk still runny in the middle.\n\nThe sauce comes together in the same pan after the eggs come out. Garlic and chilli go in for a few seconds, then soy sauce and a pinch of sugar, then the basil. **Take the pan off the heat before adding the basil.** It wilts in seconds and turns black if cooked.\n\nThai holy basil is the traditional leaf. If you cannot find it, ordinary sweet basil works, with a different, softer flavour.\n\nSpoon the sauce over the rice and lay the eggs on top. Break the yolk and mix it through the rice. Add a thin slice of fresh chilli on top if you want more heat. The runny yolk acts as a sauce for the rice.',
    ing: [
      '4 tbsp vegetable oil',
      '4 eggs, about 200 g',
      '4 garlic cloves, crushed',
      '2 red chillies, chopped',
      '1 tbsp soy sauce',
      '1 tsp sugar',
      '1 tbsp water',
      '15 g fresh basil leaves',
      '300 g cooked jasmine rice'
    ],
    st: [
      'Heat 3 tbsp of the oil in a small frying pan until it ripples. Fry the eggs one at a time for 1 minute, until the edges are crisp and the yolk is runny. Lift out onto the rice.',
      'Pour off most of the oil. Add the garlic and chillies to the pan for 15 seconds.',
      'Add the soy sauce, sugar and water and stir for 20 seconds.',
      'Take the pan off the heat, stir in the basil and spoon the sauce over the eggs and rice.'
    ],
    tips: [
      'Heat the oil until it ripples before the egg goes in.',
      'Take the pan off the heat before adding the basil.',
      'Use cooked, cold rice if you have it.',
      'Deseed the chillies for a milder sauce.'
    ],
    pair: ['Jasmine rice', 'Cucumber slices', 'Stir fried vegetables', 'Fish sauce with chillies'],
    store: 'Best eaten straight away.',
    nut: [610, 18, 49, 38, 1, 3, 570]
  },

  'strapatsada': {
    d: 'A Greek tomato and egg scramble with feta, cooked until soft and jammy and served with bread.',
    meta: 'Strapatsada: Greek scrambled eggs with ripe tomatoes and feta, cooked until soft. Two servings, cooked for 10 minutes.',
    kw: ['strapatsada', 'greek scrambled eggs', 'greek tomato and egg scramble', 'strapatsada with feta', 'greek eggs with tomato'],
    why: 'Most home versions come out watery, and the fix is to cook the tomatoes down before the eggs go in. Strapatsada is a Greek dish of tomatoes and eggs, and the whole thing depends on losing the tomato juice first.\n\nGrate the tomatoes on a coarse grater and discard the skin. This is faster than chopping and gives a pulp that cooks to a sauce in about 5 minutes. **Wait until the pulp has thickened.** If it is still thin when the eggs go in, the dish will weep on the plate.\n\nPour in the beaten eggs and stir slowly. They should set into soft curds that blend with the tomato, giving a marbled look. Crumble the feta over at the end so it softens but does not vanish.\n\nServe with thick slices of bread to mop up the pan. Ripe tomatoes matter more than anything else here. In winter, use a tin of chopped tomatoes and cook the sauce a little longer to thicken it.',
    ing: [
      '2 tbsp olive oil',
      '3 ripe tomatoes, about 300 g, grated',
      '1/4 tsp salt',
      '1/2 tsp dried oregano',
      '4 eggs, about 200 g, beaten',
      '60 g feta, crumbled',
      '4 slices bread, about 120 g'
    ],
    st: [
      'Heat the oil in a frying pan. Add the grated tomato and the salt and cook for 5 minutes until thick.',
      'Turn the heat to low. Pour in the eggs and stir slowly for 2 minutes until softly set.',
      'Crumble in the feta and sprinkle with the oregano. Take the pan off the heat.',
      'Toast the bread and serve with the eggs.'
    ],
    tips: [
      'Cook the tomato down until thick before adding the eggs.',
      'Stir slowly and stop while the eggs are still soft.',
      'Go easy on the salt, as the feta is salty.',
      'Use ripe tomatoes, or add a pinch of sugar if they are pale.'
    ],
    pair: ['Crusty bread', 'Olives', 'Greek yoghurt', 'Black coffee'],
    store: 'Best eaten straight away.',
    nut: [532, 24, 37, 32, 4, 9, 1050]
  },

  'chipsi-mayai': {
    d: 'A chips omelette: fried potato chips folded into beaten egg and set in a pan, served with kachumbari-style salad.',
    meta: 'Chipsi mayai: chips folded into beaten egg and cooked in a pan as a thick omelette. Two servings, cooked for 20 minutes.',
    kw: ['chipsi mayai', 'chips omelette', 'chips and egg omelette', 'tanzanian chips omelette', 'potato chips omelette'],
    why: 'It looks like a pancake and cooks like an omelette, which is why the pan has to be hotter than you expect. Chipsi mayai is a chips and egg dish from East Africa, usually sold hot from a street stall, and it turns a pile of chips into a meal.\n\nThe chips can be fresh-fried or oven-baked. Either way they should be crisp when they hit the egg. **Add them to the pan first.** Pour the beaten egg over so it sets around each chip and holds the whole thing together.\n\nCook on a medium heat until the underside is golden, about 5 minutes. Slide the omelette onto a plate, then invert it back into the pan to cook the other side.\n\nServe with a salad of tomato, onion and chilli. The sharp, fresh salad cuts through the rich egg and potato. Frozen chips work well if you cook them first, and they make this a very quick supper. Cut-up leftover roast potatoes are another good option.',
    ing: [
      '400 g potatoes, peeled and cut into chips',
      '4 tbsp vegetable oil',
      '4 eggs, about 200 g',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tomato, about 100 g, diced',
      '1/2 red onion, about 50 g, finely sliced',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat 3 tbsp of the oil in a frying pan and fry the chips for 12 minutes, turning, until golden and cooked through. Drain on kitchen paper.',
      'Beat the eggs with half the salt and the pepper.',
      'Heat the remaining oil in the pan. Add the chips, then pour the egg over them. Cook on a medium heat for 4 minutes until the base is golden.',
      'Slide onto a plate, invert back into the pan and cook for 2 minutes more.',
      'Toss the tomato, onion, lemon juice and remaining salt together and serve with the omelette.'
    ],
    tips: [
      'Cut the chips thin and even so they cook through.',
      'Add the egg to the hot chips so it sets quickly.',
      'Flip with a plate rather than a spatula.',
      'Add chilli to the salad if you like heat.'
    ],
    pair: ['Tomato and onion salad', 'Chilli sauce', 'Ketchup', 'Sliced cabbage'],
    store: 'Best eaten straight away. The chips lose their crispness as it stands.',
    nut: [561, 17, 40, 37, 5, 5, 730]
  },

  'bread-omelette': {
    d: 'A street-food omelette of beaten egg with onion, chilli and coriander, cooked with slices of buttered bread.',
    meta: 'Bread omelette: beaten egg with onion, chilli and coriander cooked around buttered bread slices. Two servings, cooked for 8 minutes.',
    kw: ['bread omelette', 'indian bread omelette', 'egg bread omelette', 'bread omelette with onion and chilli', 'street style bread omelette'],
    why: 'A cold morning calls for something quick and filling. Bread omelette is exactly that: a spiced egg mixture, cooked in a hot pan with slices of bread pressed into it, ready in less than 10 minutes.\n\nThe egg is flavoured with finely chopped onion, green chilli and coriander. Chop them small so they cook quickly and blend in. **Add the salt to the egg just before cooking.** Salt left in raw egg for a long time makes it watery.\n\nPress the bread slices into the egg in the pan for a few seconds so they soak up the mixture, then flip. Both sides should turn golden.\n\nAdd a thin layer of butter to the pan between rounds. It crisps the bread, and it tastes right. Cut into triangles and serve hot with ketchup. Cut the omelette into triangles and eat it hot. A cup of sweet milky tea is the usual accompaniment.',
    ing: [
      '4 eggs, about 200 g',
      '1/2 onion, about 75 g, finely chopped',
      '1 green chilli, finely chopped',
      '10 g fresh coriander, chopped',
      '1/4 tsp salt',
      '2 tbsp butter',
      '4 slices white bread, about 120 g',
      '2 tbsp tomato ketchup'
    ],
    st: [
      'Beat the eggs with the onion, chilli, coriander and salt.',
      'Melt half the butter in a frying pan over a medium heat. Pour in half of the egg mix.',
      'Press 2 slices of bread into the egg for 10 seconds, then flip so both slices are coated. Cook for 2 minutes a side until golden.',
      'Repeat with the rest. Cut into triangles and serve with the ketchup.'
    ],
    tips: [
      'Chop the onion and chilli small so they cook through.',
      'Keep the heat medium so the egg sets before it browns.',
      'Use slightly stale bread if you can, as it holds together better.',
      'Skip the chilli for a milder version.'
    ],
    pair: ['Masala chai', 'Tomato ketchup', 'Green chutney', 'Sliced tomato'],
    store: 'Best eaten straight away.',
    nut: [435, 19, 38, 23, 3, 9, 850]
  },

  'masala-toast': {
    d: 'Buttered bread slices spread with a spiced mix of onion, tomato, green chilli and coriander, then toasted in a pan.',
    meta: 'Masala toast: bread spread with a spiced onion, tomato, chilli and coriander mix, toasted in a pan. Two servings, cooked for 10 minutes.',
    kw: ['masala toast', 'indian masala toast', 'masala bread toast', 'street style masala toast', 'masala toast with onion and tomato'],
    why: 'Salt the topping and leave it for a few minutes. That single step draws water from the tomato and onion, and a drier topping is what keeps the bread crisp instead of soggy.\n\nMasala toast is a snack from the Indian street, and the same mixture works as a quick lunch. Finely chop the onion, tomato, chilli and coriander, then season with chaat masala, chilli powder and salt. **Squeeze out the extra liquid before spreading.** A watery topping slides off and softens the bread.\n\nButter the bread on one side. Toast it buttered-side down in a hot pan for a minute, then flip, pile on the mixture and toast for 2 minutes more.\n\nCut into triangles and eat hot. The crisp base, the soft topping and the sharp spice all land together. Use any bread you have. Slightly stale slices crisp better than soft fresh ones, which can turn gummy under the topping.',
    ing: [
      '4 slices white bread, about 120 g',
      '2 tbsp butter',
      '1/2 onion, about 75 g, finely chopped',
      '1 tomato, about 100 g, finely chopped',
      '1 green chilli, finely chopped',
      '10 g fresh coriander, chopped',
      '1/2 tsp chaat masala',
      '1/4 tsp chilli powder',
      '1/4 tsp salt'
    ],
    st: [
      'Mix the onion, tomato, chilli, coriander, chaat masala, chilli powder and salt. Leave for 5 minutes and squeeze out the liquid.',
      'Butter one side of each slice of bread.',
      'Toast the bread buttered-side down in a hot frying pan for 1 minute until golden. Flip.',
      'Pile the topping on the toasted side and toast for 2 minutes more. Cut into triangles.'
    ],
    tips: [
      'Squeeze the liquid out of the topping before using.',
      'Use a hot pan so the bread crisps quickly.',
      'Add grated cheese on top for a richer version.',
      'Eat it straight away, as the crispness fades.'
    ],
    pair: ['Masala chai', 'Green chutney', 'Tomato ketchup', 'Fruit'],
    store: 'Best eaten straight away. The topping mix keeps in the fridge for 1 day.',
    nut: [298, 7, 36, 14, 3, 6, 600]
  },

  'savoury-french-toast': {
    d: 'Bread soaked in an egg and cheese custard seasoned with mustard and chives, then fried until golden and crisp.',
    meta: 'Savoury French toast: bread soaked in egg, cheese and mustard custard, fried until golden. Two servings, cooked for 10 minutes.',
    kw: ['savoury french toast', 'cheese french toast', 'french toast with cheese and chives', 'eggy bread with cheese', 'savory french toast'],
    why: 'The first sign it is ready is the smell: butter turning from yellow to nut brown and melting cheese catching at the edge of the pan. That is the signal to turn the slices.\n\nSweet French toast gets all the attention, but the same method works with salt and mustard, and the result is a hearty breakfast or a quick supper. The custard here is beaten egg, a little milk, mustard, grated cheese and chives.\n\nUse bread that is a day old if you can. It soaks up more custard without falling apart. **Give each slice a good 30 seconds per side in the custard.** A quick dip leaves the middle dry.\n\nFry over a medium heat. Too hot, and the outside burns before the egg inside sets; too cool, and the toast turns greasy. Serve straight from the pan. A little extra mustard in the custard goes a long way. Taste the egg mixture before dipping, because it should be properly seasoned.',
    ing: [
      '2 eggs, about 100 g',
      '50 ml whole milk',
      '1 tsp Dijon mustard',
      '40 g cheddar, grated',
      '5 g chives, chopped',
      '1/4 tsp black pepper',
      '4 slices bread, about 160 g',
      '1 tbsp butter'
    ],
    st: [
      'Beat the eggs with the milk, mustard, cheese, chives and pepper in a shallow dish.',
      'Soak each slice of bread in the custard for 30 seconds on each side.',
      'Melt the butter in a frying pan over a medium heat. Fry the slices for 3 minutes on each side until golden.',
      'Serve hot, with any custard left in the dish spooned over.'
    ],
    tips: [
      'Use slightly stale bread so it soaks up the custard.',
      'Keep the heat medium to cook the egg through.',
      'Add the butter just before the bread goes in.',
      'Serve with a fried tomato or bacon for a bigger breakfast.'
    ],
    pair: ['Grilled tomato', 'Crispy bacon', 'Baked beans', 'Tomato ketchup'],
    store: 'Best eaten straight away. Reheat any leftovers in a toaster.',
    nut: [433, 20, 41, 21, 2, 6, 640]
  },

  'breakfast-fried-rice': {
    d: 'Cold cooked rice fried with bacon, scrambled egg, frozen peas and spring onion.',
    meta: 'Breakfast fried rice: cold cooked rice fried with bacon, scrambled egg, peas and spring onion. Two servings, cooked for 10 minutes.',
    kw: ['breakfast fried rice', 'bacon and egg fried rice', 'fried rice for breakfast', 'egg fried rice with bacon', 'egg fried rice for breakfast'],
    why: 'Use cold rice. That is the single most useful instruction for any fried rice, and it applies here. Freshly cooked rice is too wet and clumps in the pan; rice that has been chilled overnight has dried out and separates into grains that fry.\n\nCook the bacon first until crisp, and leave the fat in the pan. It is the oil for everything that follows. Push the bacon aside, scramble the eggs, then add the rice and press it into the pan so it browns slightly. **Break up any lumps of rice with the back of a spoon.** They cook unevenly and stay cold in the middle.\n\nFrozen peas go in at the end and need only a minute to thaw and warm. A splash of soy sauce seasons the whole thing.\n\nTop with spring onions and, if you like, a fried egg. A fried egg on top turns this into a full meal. Keep the heat high throughout so the rice fries rather than steams.',
    ing: [
      '4 rashers streaky bacon, about 100 g, chopped',
      '1 tbsp vegetable oil',
      '3 eggs, about 150 g, beaten',
      '300 g cooked cold rice',
      '80 g frozen peas',
      '2 tbsp soy sauce',
      '2 spring onions, about 20 g, sliced',
      '1/4 tsp black pepper'
    ],
    st: [
      'Cook the bacon in a large frying pan for 4 minutes until crisp.',
      'Add the oil and heat. Push the bacon aside, pour in the eggs and scramble for 1 minute.',
      'Add the rice, breaking up any lumps, and fry for 3 minutes. Add the peas and fry for 1 minute.',
      'Stir in the soy sauce and pepper. Scatter with the spring onions and serve.'
    ],
    tips: [
      'Cook the rice a day ahead and chill it.',
      'Break up lumps of rice with the back of a spoon.',
      'Leave the rice to brown for a minute before stirring.',
      'Cool leftover rice quickly and use it within a day.'
    ],
    pair: ['Fried egg', 'Hot sauce', 'Sliced avocado', 'Orange juice'],
    store: 'Best eaten straight away. Cool leftovers quickly and keep in the fridge for 1 day; reheat until piping hot.',
    nut: [829, 32, 128, 21, 5, 3, 1730]
  },

  'sweet-potato-hash': {
    d: 'Diced sweet potato fried with onion and smoked paprika until crisp, topped with a fried egg.',
    meta: 'Sweet potato hash: diced sweet potato fried with onion and smoked paprika, topped with a fried egg. Two servings, cooked for 20 minutes.',
    kw: ['sweet potato hash', 'sweet potato breakfast hash', 'sweet potato hash with egg', 'sweet potato and onion hash', 'crispy sweet potato hash'],
    why: 'Sweet potato, onion, paprika and an egg: four things, and about half an hour. That is the whole shopping list for a hash that works as breakfast, brunch or a quick dinner.\n\nDice the sweet potato small, about the size of a sugar cube. Small pieces cook through and crisp at the edges. Large ones stay raw in the middle while the outside burns. **Do not stir too often.** Leave the potatoes alone for 3 or 4 minutes between turns so the bottom can brown.\n\nStart with a covered pan to soften the potato, then take the lid off to crisp it. The lid traps steam that cooks the middle; the open pan lets the moisture escape.\n\nAdd the onion and paprika halfway through. Fry the eggs in a separate pan and slide them on top. If the sweet potato is browning too fast, lower the heat and add a splash of water, cover for a minute, then uncover to crisp again.',
    ing: [
      '2 tbsp vegetable oil',
      '400 g sweet potatoes, peeled and diced',
      '1 onion, about 150 g, diced',
      '1 tsp smoked paprika',
      '1/2 tsp salt',
      '2 eggs, about 100 g',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat 1 tbsp of the oil in a large frying pan over a medium heat. Add the sweet potato, cover and cook for 8 minutes, stirring twice.',
      'Remove the lid. Add the onion, paprika and salt and cook for 8 minutes, stirring now and then, until crisp at the edges.',
      'Fry the eggs in the remaining oil in a second pan until the whites are set.',
      'Divide the hash between 2 plates and top with the eggs and pepper.'
    ],
    tips: [
      'Cut the sweet potato small so it cooks through.',
      'Leave the hash alone between turns so it can brown.',
      'If it sticks, add a splash of oil rather than water.',
      'Add a pinch of chilli flakes for heat.'
    ],
    pair: ['Sliced avocado', 'Hot sauce', 'Black beans', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan to crisp it again.',
    nut: [407, 11, 48, 19, 8, 12, 770]
  },

  'griessbrei': {
    d: 'A German semolina porridge cooked in milk with sugar and vanilla, served with cinnamon sugar and stewed fruit.',
    meta: 'Griessbrei: German semolina porridge cooked in milk with sugar and vanilla. Three servings, cooked for 15 minutes.',
    kw: ['griessbrei', 'german semolina porridge', 'semolina porridge', 'semolina pudding with milk', 'german semolina breakfast'],
    why: 'A cold morning, a pan of milk and a handful of semolina: this is a breakfast for a small household, and it is ready in about 20 minutes. Grießbrei is the German name for semolina porridge, and it is eaten by children and adults alike.\n\nThe key is how the semolina goes in. Pour it into the hot milk in a thin stream while stirring, not all at once. **Stir constantly for the first minute.** Semolina clumps the instant it hits hot liquid, and a whisk smooths out lumps before they set.\n\nOnce it thickens, lower the heat and cook for another 5 minutes, stirring often. It sticks easily, and the base of the pan scorches if you leave it alone.\n\nServe it hot with a spoonful of cinnamon sugar or some stewed fruit in the middle. Both are classic. Fruit compote, grated apple or a spoonful of jam all work well on top. Warm milk loosens the porridge if it thickens before you serve it.',
    ing: [
      '500 ml whole milk',
      '50 g fine semolina',
      '2 tbsp sugar',
      '1/2 tsp vanilla extract',
      '1 pinch salt',
      '1 tbsp butter',
      '1 tsp ground cinnamon',
      '1 tbsp sugar, for the topping'
    ],
    st: [
      'Heat the milk, first measure of sugar, vanilla and salt in a pan until it begins to steam.',
      'Pour in the semolina in a thin stream, whisking constantly for 1 minute.',
      'Lower the heat and cook for 5 minutes, stirring often, until thick and creamy. Stir in the butter.',
      'Mix the cinnamon with the second measure of sugar. Serve the porridge hot with the cinnamon sugar on top.'
    ],
    tips: [
      'Pour the semolina in slowly while whisking.',
      'Stir often so the base does not catch.',
      'Add milk if the porridge gets too thick.',
      'Top with stewed apples or plums for a fruit version.'
    ],
    pair: ['Stewed apples', 'Plum compote', 'Fresh berries', 'Cinnamon sugar'],
    store: 'Best eaten straight away. It thickens as it cools, so loosen with milk when reheating.',
    nut: [254, 8, 33, 10, 1, 21, 130]
  },

  'sheera': {
    d: 'A soft Indian semolina pudding roasted in ghee, cooked in milk and flavoured with cardamom, sugar and sultanas.',
    meta: 'Sheera: Indian semolina pudding roasted in ghee and cooked in milk with sugar, cardamom and sultanas. Four servings, cooked for 15 minutes.',
    kw: ['sheera', 'sooji sheera', 'indian semolina pudding', 'semolina halwa', 'sheera with cardamom'],
    why: 'Sheera is the Indian pudding that takes the least effort for the most reward. It is made from three pantry staples: semolina, ghee and sugar, with milk and a little cardamom. Nothing else is needed.\n\nThe flavour comes from roasting. Semolina cooked in ghee over a low heat goes from pale to light golden and smells like toasted nuts. **Do not skip this step, and do not rush it.** Raw semolina tastes pasty, and a pale pudding lacks depth.\n\nThe liquid goes in hot and carefully. It spits when it hits the roasted semolina, so stand back and pour slowly. Stir quickly, then lower the heat.\n\nThe pudding thickens in a couple of minutes and pulls away from the sides of the pan. At that point it is ready. Serve warm. Serve it warm, in small portions, because it is rich. Chopped pistachios or cashews fried briefly in ghee make a good garnish.',
    ing: [
      '4 tbsp ghee',
      '150 g fine semolina',
      '500 ml whole milk',
      '100 g sugar',
      '2 g green cardamom pods, crushed',
      '30 g sultanas',
      '20 g flaked almonds'
    ],
    st: [
      'Heat the ghee in a heavy pan over a low heat. Add the semolina and roast for 6 minutes, stirring, until light golden and fragrant.',
      'Warm the milk in a separate pan with the sugar and cardamom until the sugar dissolves.',
      'Pour the hot milk into the semolina in a slow stream, stirring fast. It will spit, so stand back.',
      'Add the sultanas and cook over a low heat for 3 minutes until thick and pulling away from the pan. Top with the almonds.'
    ],
    tips: [
      'Roast the semolina slowly until it smells nutty.',
      'Pour the hot milk in slowly, because it splutters.',
      'Stir continuously once the milk goes in.',
      'Add a splash of milk if the pudding sets too firmly.'
    ],
    pair: ['Hot milk tea', 'Fresh fruit', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 3 days. Warm with a splash of milk before serving.',
    nut: [502, 10, 66, 22, 3, 36, 60]
  }
};
