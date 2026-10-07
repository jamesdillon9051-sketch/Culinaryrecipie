'use strict';

/**
 * Volume thirty-four — egg white sandwiches, stir-fries and bowls, and a
 * chicken patty for the breakfast plate.
 *
 * Same rules as the other egg white file: no added salt, citrus and herbs for
 * flavour, and low-potassium vegetables (cabbage, peppers, onion, cucumber).
 * Where a bread or tortilla is needed the choice is the one with the least
 * sodium and phosphorus per serving: a small English muffin, corn tortillas,
 * white rice.
 */

module.exports = {
  'egg-white-english-muffin-sandwich': {
    d: 'A thin egg white omelette folded around a slice of Swiss cheese and layered into a toasted English muffin with cucumber. Two servings in 13 minutes.',
    meta: 'Egg white English muffin sandwich: a folded egg white omelette with Swiss cheese and cucumber in a toasted muffin. Kidney friendly. Two servings.',
    kw: ['egg white english muffin sandwich', 'kidney friendly breakfast sandwich', 'egg white breakfast sandwich with swiss cheese', 'egg white sandwich without yolk', 'quick egg white breakfast sandwich for two'],
    why: 'Can an egg white sandwich fill you up without the yolk? Yes. It needs enough whites and something else with protein beside them. Here that something is Swiss cheese, one of the lower-sodium cheeses, so a slice adds protein without piling on salt.\n\nCook the whites as one thin sheet, not scrambled. Thin is the point. **Fold it around the cheese** while the pan is still warm, and it becomes a neat square that fits the muffin. A sheet takes about 2 minutes and stays tender. It also reheats better than a scramble. Scrambled whites fall out of the sides and toughen as they wait.\n\nThe muffin is the salty part of the plate, which is why it is a small one. Toast it lightly and keep the cucumber for the end. It adds a cool crunch and no sodium. Black pepper is the only seasoning the eggs need. Split the muffin before you start cooking so that it toasts while the eggs set.',
    ing: [
      '2 small English muffins, about 45 g each, split',
      '220 g egg whites (about 6 large egg whites)',
      '1 tsp olive oil',
      '50 g Swiss cheese, in 2 slices',
      '40 g baby cucumber, thinly sliced',
      '¼ tsp black pepper'
    ],
    st: [
      'Split the muffins and toast them until golden.',
      'Heat half the oil in a 15 to 18 cm non-stick frying pan over medium heat. Pour in half the egg whites and tilt the pan so they cover the base. Cook for 2 minutes, until almost set.',
      'Lay a slice of cheese on one side of the egg, sprinkle with pepper and fold the egg over it, then fold it in half again to make a square. Slide it onto the bottom half of a muffin.',
      'Repeat with the remaining oil, egg whites and cheese. Top each sandwich with the cucumber and the muffin tops and serve warm.'
    ],
    tips: [
      'Use a pan the width of the muffin so that the folded egg fits without trimming.',
      'If the egg sheet sticks, add a drop more oil and loosen the edge with a spatula before folding.',
      'Press the sandwich gently, not hard; whites squeak out from under a firm squeeze.'
    ],
    pair: ['Fresh apple slices', 'A bowl of berries', 'A cup of tea'],
    store: 'Best eaten straight away. The cooked egg keeps in the fridge for 2 days; reheat it gently before assembling.',
    nut: [274, 23, 23, 10, 2, 4, 430],
    kp: [290, 210],
  },

  'egg-white-fried-rice': {
    d: 'Cold cooked rice stir-fried with scrambled egg whites, peas, carrot and spring onions, seasoned with a little low-sodium soy sauce. Two servings in 20 minutes.',
    meta: 'Egg white fried rice: cold rice, scrambled whites, peas and carrot with a little low-sodium soy sauce. Kidney friendly. Two servings in 20 minutes.',
    kw: ['egg white fried rice', 'kidney friendly fried rice', 'low salt egg fried rice', 'quick egg white fried rice for two', 'egg white fried rice with peas and carrot'],
    why: 'Cold cooked rice, egg whites, peas, carrot and a little soy sauce make up the whole dish. It takes 20 minutes. Rice that has been cooked and chilled has dried out on the surface, so the grains stay separate in the pan instead of clumping into a paste.\n\nScramble the whites first and set them aside. **Cook them loosely**, in large soft curds, because they go back into the pan at the end and finish cooking there. The vegetables come next, then the rice, which needs a few minutes of steady heat so that it warms through and picks up a little colour.\n\nSoy sauce is the main source of sodium in fried rice, so the amount here is small and the low-sodium kind. Ginger, garlic, rice vinegar and a few drops of sesame oil add the flavour that salt would. Taste before you add more. A splash of vinegar is usually what the dish is missing.',
    ing: [
      '300 g egg whites (about 9 large egg whites)',
      '1 tbsp olive oil',
      '250 g cooked white rice, cold',
      '80 g frozen peas',
      '60 g carrot, finely diced',
      '40 g spring onions, sliced',
      '2 garlic cloves, minced',
      '1 tsp grated fresh ginger',
      '1 tsp low-sodium soy sauce',
      '1 tsp rice vinegar',
      '1 tsp sesame oil',
      '¼ tsp white pepper'
    ],
    st: [
      'Heat half the oil in a large frying pan or wok over high heat. Pour in the egg whites and stir for 1 minute, until they form soft curds. Tip them onto a plate.',
      'Add the remaining oil, the carrot and the peas and stir-fry for 3 minutes. Add the garlic, ginger and spring onions and cook for 30 seconds.',
      'Add the rice, breaking up any clumps, and stir-fry for 3 minutes, until hot and starting to colour.',
      'Return the egg whites to the pan. Add the soy sauce, rice vinegar and white pepper and toss for 1 minute. Drizzle with the sesame oil and serve.'
    ],
    tips: [
      'Spread cooked rice on a tray to cool before chilling it, and use it within a day.',
      'If the rice sticks, add a splash of water rather than more oil.',
      'Cut the carrot into small dice so that it softens in the time the rice takes to heat.'
    ],
    pair: ['Steamed cabbage', 'Sliced cucumber', 'Fresh pineapple'],
    store: 'Cool quickly and keep in the fridge for up to 1 day. Reheat until piping hot.',
    nut: [370, 23, 47, 10, 4, 5, 370],
    kp: [570, 150],
  },

  'egg-and-cabbage-stir-fry': {
    d: 'Whole eggs and egg whites scrambled in large curds, then tossed with fast-cooked cabbage, garlic and ginger. Two servings in 20 minutes.',
    meta: 'Egg and cabbage stir-fry: soft curds of egg and egg white tossed with crisp cabbage, garlic and ginger. Kidney friendly. Two servings in 20 minutes.',
    kw: ['egg and cabbage stir fry', 'kidney friendly cabbage stir fry', 'egg and cabbage stir fry for two', 'easy egg stir fry with cabbage', 'dairy free egg and cabbage stir fry'],
    why: 'What keeps cabbage from going soggy in a stir-fry? Heat. Cabbage is mostly water, so it needs high heat to drive off the steam before it stews, and it needs to be cut thin so that it wilts in 4 minutes.\n\nCook the eggs first. **Set them aside**, then add them back at the end, so that they stay in soft curds instead of breaking up into crumbs while the cabbage cooks. Two whole eggs bring richness, and the whites bring the protein without extra phosphorus.\n\nThe seasoning is light: garlic, ginger, a teaspoon of low-sodium soy sauce and rice vinegar. Cabbage is a low-potassium vegetable, which makes it a good base. Onion and carrot would raise the potassium, so they are left out. Toss it all together over high heat for a minute. Serve it fast. The cabbage gives up its crunch within minutes. A teaspoon of sesame oil at the end adds a nutty finish.',
    ing: [
      '2 large eggs',
      '250 g egg whites (about 7 large egg whites)',
      '1 tbsp olive oil',
      '300 g green cabbage, shredded',
      '40 g spring onions, sliced',
      '2 garlic cloves, minced',
      '1 tsp grated fresh ginger',
      '1 tsp low-sodium soy sauce',
      '1 tsp rice vinegar',
      '1 tsp sesame oil',
      '¼ tsp white pepper'
    ],
    st: [
      'Beat the eggs and egg whites together. Heat half the oil in a wok or large frying pan over medium-high heat. Pour in the eggs and stir for 1 minute into large soft curds. Tip onto a plate.',
      'Return the pan to high heat with the remaining oil. Add the cabbage and stir-fry for 4 minutes, until it wilts but still has some bite.',
      'Add the garlic, ginger and spring onions and cook for 1 minute.',
      'Return the eggs to the pan. Add the soy sauce, vinegar and white pepper and toss for 1 minute. Drizzle with the sesame oil and serve.'
    ],
    tips: [
      'Cook the cabbage in two batches if the pan looks crowded; a crowded pan steams it.',
      'Shred the cabbage no thicker than 5 mm so that it cooks in the time given.',
      'If the eggs overcook, they turn rubbery; take them off the heat while they are still glossy.'
    ],
    pair: ['Steamed white rice', 'Sliced cucumber', 'A bowl of fresh pineapple'],
    store: 'Best eaten at once. Keeps in the fridge for up to 1 day; the cabbage softens as it stands.',
    nut: [296, 25, 13, 16, 4, 6, 410],
    kp: [630, 200],
  },

  'egg-white-wraps': {
    d: 'Thin, flexible egg white wraps made in a frying pan and filled with cabbage, cucumber, carrot and mint. Two servings in 20 minutes.',
    meta: 'Egg white wraps: thin egg white sheets rolled around cabbage, cucumber, carrot and mint with lime. Kidney friendly. Two servings in 20 minutes.',
    kw: ['egg white wraps', 'kidney friendly lunch wraps', 'gluten free egg white wraps', 'dairy free egg white wraps', 'egg white wraps with cabbage and cucumber'],
    why: 'Think crepe, not tortilla. An egg white wrap is a thin sheet of cooked egg white, and a spoonful of cornflour makes it strong enough to roll without tearing. It is gluten free.\n\nWhisk the cornflour with a little of the whites first, so that no lumps form, then add the rest. **Pour thin layers** into a lightly oiled pan, because a thick layer turns spongy and cracks when it bends. Cook until the top is no longer wet, then flip for a few seconds. That is all each sheet needs. Egg whites set fast, so keep the pan at medium and work one wrap at a time.\n\nThe filling is a cold crunch: shredded cabbage, cucumber, carrot, mint and lime juice. Eat it with your hands. Roll the wrap while it is warm and pliable, and eat it at once, because the cucumber leaks into the egg within the hour. Pat the vegetables dry first so the lime juice does not run out of the roll.',
    ing: [
      '360 g egg whites (about 11 large egg whites)',
      '1 tbsp cornflour',
      '2 tsp olive oil',
      '60 g green cabbage, finely shredded',
      '80 g cucumber, cut into sticks',
      '40 g carrot, grated',
      '10 g fresh mint, torn',
      '1 tbsp lime juice',
      '¼ tsp black pepper'
    ],
    st: [
      'Whisk the cornflour with 3 tablespoons of the egg whites until smooth, then whisk in the rest with the pepper.',
      'Brush a 24 cm non-stick frying pan with a little of the oil and heat it over medium heat. Pour in a quarter of the batter and tilt the pan to coat it thinly. Cook for 1 to 2 minutes, until set, then flip for 20 seconds. Slide onto a plate.',
      'Repeat to make 4 wraps, oiling the pan lightly between them.',
      'Toss the cabbage, cucumber, carrot and mint with the lime juice. Divide between the wraps, roll up and serve.'
    ],
    tips: [
      'Use a non-stick pan; egg white sheets tear when they stick.',
      'If a wrap cracks, patch it with a spoonful of fresh batter and cook for 20 seconds more.',
      'Pat the vegetables dry so that the lime juice does not run out of the roll.'
    ],
    pair: ['Fresh pineapple', 'A bowl of berries', 'Steamed rice'],
    store: 'Best eaten at once. The unfilled wraps keep in the fridge for 2 days; fill them when you serve.',
    nut: [173, 21, 11, 5, 2, 4, 320],
    kp: [490, 60],
  },

  'egg-white-quesadilla': {
    d: 'Corn tortillas folded around scrambled egg whites, red pepper and a little Monterey Jack, crisped in a dry pan. Two servings in 18 minutes.',
    meta: 'Egg white quesadilla: crisp corn tortillas folded around scrambled whites, red pepper and a little Monterey Jack. Kidney friendly. Two servings.',
    kw: ['egg white quesadilla', 'kidney friendly quesadilla', 'corn tortilla egg white quesadilla', 'egg white quesadilla with red pepper', 'easy egg white quesadilla for two'],
    why: 'A fast lunch for two that tastes bigger than it is. Soft scrambled whites, sweet red pepper and a little melting cheese are folded into corn tortillas and crisped until the edges brown. It needs one pan and about 20 minutes.\n\nCook the filling first and keep it dry. **Scramble the whites firmly**, then drain off any water, because a wet filling makes the tortillas soggy and they tear when folded. Monterey Jack melts well and brings enough flavour that a small handful is plenty. It is the only salty ingredient, which is why it is kept to 40 g for the whole dish.\n\nCrisp each quesadilla in a dry pan over medium heat. Do not press hard. The cheese melts and holds the fold together, and the corn turns toasty at the edges. Skip jarred salsa; it is salty and tomato-based, and lime does the same job. Cut into wedges and eat while hot.',
    ing: [
      '300 g egg whites (about 9 large egg whites)',
      '1 tsp olive oil',
      '4 corn tortillas, 18 cm across',
      '40 g Monterey Jack cheese, grated',
      '80 g red bell pepper, diced',
      '40 g onion, finely diced',
      '10 g fresh cilantro, chopped',
      '½ tsp ground cumin',
      '¼ tsp black pepper'
    ],
    st: [
      'Warm the oil in a frying pan over medium heat. Cook the bell pepper and onion for 3 minutes, until soft.',
      'Add the egg whites with the cumin and pepper and stir for 2 minutes, until just set. Spoon into a bowl and stir in the cilantro. Wipe out the pan.',
      'Lay the tortillas on a board. Sprinkle the cheese over half of each, add the egg filling and fold over.',
      'Cook in the dry pan, two at a time, for 3 minutes, turning once, until golden and crisp. Cut into wedges and serve.'
    ],
    tips: [
      'Warm corn tortillas for a few seconds before filling them so they fold without cracking.',
      'If the filling looks wet, tip it into a sieve for a moment before you assemble.',
      'Keep the heat at medium; corn tortillas scorch quickly on a hot pan.'
    ],
    pair: ['Sliced cucumber', 'Shredded cabbage with lime', 'Fresh pineapple'],
    store: 'Best eaten straight away. Keeps in the fridge for up to 1 day; crisp in a dry pan to reheat.',
    nut: [298, 25, 27, 10, 4, 4, 400],
    kp: [490, 220],
  },

  'egg-white-burrito-bowl': {
    d: 'Warm rice topped with ribbons of fried egg white, sweet peppers and onion, corn, lettuce and lime. Two servings in 22 minutes.',
    meta: 'Egg white burrito bowl: rice with egg white ribbons, spiced peppers and onion, corn, lettuce and lime. Kidney friendly. Two servings in 22 minutes.',
    kw: ['egg white burrito bowl', 'kidney friendly burrito bowl', 'gluten free egg white burrito bowl', 'dairy free egg white bowl with rice', 'egg white burrito bowl for two'],
    why: 'Cook the whites in a thin layer. Then slice them into ribbons. A thin sheet cooks evenly in about 3 minutes, and ribbons sit in a bowl like noodles, so every forkful has some. Scrambled whites tend to clump together and go rubbery. Whites cook in minutes, so have everything else ready first.\n\nThe vegetables come first and go into the same pan. **Spice the peppers and onion** with cumin and smoked paprika as they soften, so that the pan carries the flavour into the whites. Rice is the base. Plain white rice suits this bowl because it is lighter in potassium and phosphorus than brown.\n\nBuild the bowl in layers: warm rice, then lettuce, corn, the pepper mixture and the egg ribbons, finished with cilantro and lime. The warm rice softens the lettuce just enough. Lime juice replaces salt and wakes up the whole bowl. Squeeze it on at the last minute.',
    ing: [
      '330 g egg whites (about 10 large egg whites)',
      '1 tbsp olive oil',
      '300 g cooked white rice',
      '80 g red bell pepper, diced',
      '40 g red onion, finely diced',
      '40 g sweetcorn kernels',
      '40 g shredded lettuce',
      '10 g fresh cilantro, chopped',
      '2 tbsp lime juice',
      '1 tsp ground cumin',
      '½ tsp smoked paprika'
    ],
    st: [
      'Warm the rice in the microwave or a covered pan with 2 tablespoons of water until steaming.',
      'Heat half the oil in a large non-stick frying pan over medium heat. Cook the bell pepper and onion with the cumin and paprika for 5 minutes, until soft. Spoon into a bowl.',
      'Add the remaining oil and pour in the egg whites in a thin layer. Cook for 3 minutes, until set, then flip and cook for 1 minute. Slide onto a board and slice into ribbons.',
      'Divide the rice between two bowls. Top with the lettuce, corn, pepper mixture and egg ribbons, then scatter over the cilantro and add the lime juice.'
    ],
    tips: [
      'Use a pan at least 28 cm wide so that the whites spread thin.',
      'If the egg sheet tears when you flip it, cut it into ribbons in the pan instead.',
      'Add the lime juice at the table so the lettuce stays crisp.'
    ],
    pair: ['Fresh pineapple', 'Sliced cucumber', 'A glass of water'],
    store: 'Best eaten at once. Keep the components apart in the fridge for up to 2 days and assemble when serving.',
    nut: [393, 24, 54, 9, 3, 5, 290],
    kp: [600, 140],
  },

  'apple-chicken-sausage': {
    d: 'Baked chicken patties seasoned like breakfast sausage with sage, fennel and smoked paprika, with grated apple for sweetness and moisture. Twelve patties, six servings, in 27 minutes.',
    meta: 'Apple chicken sausage patties: ground chicken with sage, fennel, paprika and apple, baked with no added salt. Kidney friendly. Six servings.',
    kw: ['apple chicken sausage', 'kidney friendly breakfast sausage', 'homemade chicken sausage patties without salt', 'gluten free apple chicken sausage', 'baked chicken breakfast patties'],
    why: 'Can homemade chicken sausage taste like sausage without the salt? It can. The flavours people recognise as sausage are sage, fennel, black pepper and paprika, and salt is not among them. Shop-bought sausage is salty and often made with phosphate additives, which is what this recipe avoids.\n\nLean chicken dries out fast, so the apple matters. **Grate the apple finely** and mix it in, because it keeps the patties juicy and adds a gentle sweetness that works like the sugar in a breakfast sausage. A little maple syrup rounds it out. Mix with a fork until just combined. Overworking the meat makes the patties tough.\n\nShape twelve patties, two to a serving, and bake them on a tray rather than frying, so that no oil is needed beyond a brush. They are done when the centres are cooked through and the juices run clear. Serve with eggs. Or tuck one into a muffin.',
    ing: [
      '720 g ground chicken',
      '150 g apple, peeled and finely grated',
      '1 tbsp finely chopped fresh sage',
      '1 tsp fennel seeds, lightly crushed',
      '1 tsp smoked paprika',
      '½ tsp garlic powder',
      '½ tsp black pepper',
      '2 tsp maple syrup',
      '1 tbsp olive oil, for the tray'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan). Line a baking tray with parchment paper and brush it with the oil.',
      'Mix the chicken, apple, sage, fennel, paprika, garlic powder, pepper and maple syrup in a bowl with a fork until just combined.',
      'Shape into 12 patties about 6 cm across and 2 cm thick and set them on the tray.',
      'Bake for 12 minutes, turning halfway, until the centres reach 74°C and the juices run clear.'
    ],
    tips: [
      'Wet your hands before shaping so that the mixture does not stick to them.',
      'If you have time, chill the shaped patties for 15 minutes; they hold together better.',
      'Check the centre of the thickest patty with a thermometer before serving.'
    ],
    pair: ['Egg white scramble', 'Fresh apple slices', 'A slice of white toast'],
    store: 'Keeps in the fridge for up to 3 days. Freeze the cooked patties for up to 2 months and reheat from frozen in a hot oven.',
    nut: [225, 21, 6, 13, 1, 4, 90],
    kp: [330, 210],
  }
};
