'use strict';

/**
 * Volume thirty-six — sandwiches, toasties and wraps.
 *
 * Cheap lunches built from bread, tortillas, eggs, tinned fish, beans and
 * chickpeas, with a pasta supper from a tin of baked beans at the end.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'fried-egg-sandwich': {
    d: 'A fried egg with a runny yolk, melted cheese and a leaf of lettuce between two slices of toasted bread. One serving in 9 minutes.',
    meta: 'Fried egg sandwich: a fried egg with melted cheese and lettuce between toasted bread. A very cheap lunch for one in 9 minutes.',
    kw: ['fried egg sandwich', 'egg and cheese sandwich', 'budget egg lunch', 'easy fried egg sandwich', 'cheap lunch for one'],
    why: 'Toast the bread. A fried egg sandwich on soft bread turns into a damp mess in about two minutes, while toast holds its edges and keeps the yolk where it belongs.\n\nCook the egg in butter over medium heat, with the lid on for the last minute. That sets the white on top without flipping, which would break the yolk.\n\nPut the cheese on the hot egg in the pan. **It melts in the time it takes to lift the egg out**, with no grill needed.\n\nA slice of tomato or a smear of mayonnaise adds moisture. Dry bread, egg and cheese is a tight mouthful. Press the sandwich closed with your palm and cut it in half so the yolk runs in a controlled way. A fried egg sandwich is a staple of the quick meal, and it works as breakfast, lunch or a late snack. Add a rasher of bacon or a slice of tomato if they are to hand, and use a toasted bun in place of sliced bread if you prefer.',
    ing: [
      '2 slices white bread',
      '15 g butter',
      '1 egg',
      '1 pinch salt',
      '1 slice cheddar cheese, about 20 g',
      '1 tbsp mayonnaise',
      '1 lettuce leaf'
    ],
    st: [
      'Toast the bread and spread one slice with the mayonnaise.',
      'Melt the butter in a small pan over medium heat and crack in the egg. Season with the salt, cover and cook for 3 minutes.',
      'Lay the cheese on the egg, cover for 30 seconds until it melts.',
      'Lift the egg onto the mayonnaise slice, add the lettuce and close with the second slice. Cut in half.'
    ],
    tips: [
      'Cover the pan to set the top of the egg without flipping.',
      'Add cheese straight after the egg is done to melt it.',
      'Cook for 1 minute more if you prefer a firm yolk.'
    ],
    pair: ['Crisps', 'Sliced tomato', 'Pickles', 'Fresh fruit'],
    store: 'Best eaten straight away.',
    nut: [621, 24, 48, 37, 13, 10, 770]
  },

  'egg-and-cheese-toastie': {
    d: 'Scrambled egg and grated cheddar sealed between buttered bread and toasted in a pan until golden. One serving in 13 minutes.',
    meta: 'Egg and cheese toastie: scrambled egg and cheddar sealed between buttered bread and toasted in a pan. A very cheap lunch for one in 13 minutes.',
    kw: ['egg and cheese toastie', 'scrambled egg toastie', 'budget toasted sandwich', 'easy egg toastie', 'cheap lunch for one'],
    why: 'Butter the outside of the bread, not the inside. The fat is what browns in the pan, and the inside needs the egg and cheese to be sealed against dry bread.\n\nScramble the egg soft first. It will cook more inside the sandwich, and starting with a dry scramble leaves a rubbery filling.\n\nThe cheese goes between the egg and the bread on both sides. **That layer melts into the bread and holds it all together**, so the egg does not squeeze out of the back when you bite.\n\nCook in a pan over medium-low heat for 3 minutes per side, pressing down with a spatula. High heat burns the bread before the cheese has melted. Cut diagonally and eat hot. A toastie maker does the job well, but a heavy frying pan with a plate or second pan pressed on top gives a very similar result. Cut it while it is still warm, since a cold toastie loses the crispness that makes it enjoyable.',
    ing: [
      '2 eggs',
      '1 pinch salt',
      '10 g butter, for the eggs',
      '2 slices white bread',
      '15 g butter, for the bread',
      '40 g grated cheddar'
    ],
    st: [
      'Whisk the eggs with the salt. Melt the 10 g butter in a small pan over medium heat and scramble the eggs for 1 minute, keeping them soft. Tip onto a plate.',
      'Butter one side of each slice of bread. Lay one slice butter side down in a frying pan and cover with half the cheese, the egg and the rest of the cheese.',
      'Top with the other slice, butter side up. Cook over medium-low heat for 3 minutes, pressing down, until golden.',
      'Flip and cook for 3 minutes more. Cut in half and serve.'
    ],
    tips: [
      'Scramble the eggs soft; they finish in the sandwich.',
      'Press gently while cooking to seal the cheese.',
      'Lower the heat if the bread browns before the cheese melts.'
    ],
    pair: ['Tomato soup', 'Pickles', 'Salad leaves'],
    store: 'Best eaten straight away.',
    nut: [641, 28, 31, 45, 2, 4, 840]
  },

  'beans-and-cheese-toastie': {
    d: 'Baked beans and grated cheddar toasted between buttered bread until crisp and molten. One serving in 11 minutes.',
    meta: 'Beans and cheese toastie: baked beans and cheddar toasted between buttered bread until crisp. A very cheap lunch for one in 11 minutes.',
    kw: ['beans and cheese toastie', 'bean and cheese toastie', 'budget toasted sandwich', 'easy cheese and bean toastie', 'cheap lunch for one'],
    why: 'What is the problem with beans in a sandwich? Sauce. A runny spoonful turns bread soggy and leaks out of the sides as you eat.\n\nDrain the beans first. Spoon them into a sieve for 30 seconds and let most of the tomato sauce drip away; what clings is plenty for flavour.\n\nPut the cheese down first, then the beans, then more cheese. **Cheese on both sides acts as a seal**, holding the beans in place and keeping the bread dry.\n\nCook in a pan over medium-low heat. Press down with a spatula for the first minute to bind the layers, then leave it alone. It is done when both sides are deep golden and the cheese oozes at the edges. This is one of the cheapest lunches there is, and the filling stays hot for a long time inside the bread. Let it cool slightly before biting in, since the beans and cheese trap the heat and can burn the mouth.',
    ing: [
      '2 slices white bread',
      '15 g butter',
      '60 g tinned beans in tomato sauce, drained',
      '40 g grated cheddar',
      '1 pinch black pepper'
    ],
    st: [
      'Butter one side of each slice of bread.',
      'Lay one slice butter side down in a frying pan. Cover with half the cheese, the drained beans, the pepper and the rest of the cheese.',
      'Top with the second slice, butter side up. Cook over medium-low heat for 3 minutes, pressing down, until golden.',
      'Flip and cook for 3 minutes more until crisp and the cheese has melted. Cool for 1 minute before eating.'
    ],
    tips: [
      'Drain the beans so the sandwich does not turn soggy.',
      'Let it cool for a minute; the filling is very hot.',
      'Use a lid to help the cheese melt if the bread browns quickly.'
    ],
    pair: ['Tomato soup', 'Side salad', 'Crisps'],
    store: 'Best eaten straight away.',
    nut: [471, 18, 39, 27, 4, 6, 800]
  },

  'tuna-toastie': {
    d: 'Tinned tuna mixed with mayonnaise and sweetcorn, topped with cheese and toasted between buttered bread. Two servings in 11 minutes.',
    meta: 'Tuna toastie: tinned tuna with mayonnaise and sweetcorn, topped with cheese and toasted until crisp. A very cheap lunch for two in 11 minutes.',
    kw: ['tuna toastie', 'tuna melt toastie', 'budget tuna sandwich', 'easy toasted tuna sandwich', 'cheap lunch for two'],
    why: 'Drain the tuna very well. Squeeze it in a sieve until no more liquid comes out, because wet tuna is the usual reason a toastie goes soggy and leaks.\n\nMix it with mayonnaise to a thick, spreadable paste. Too much mayonnaise makes the filling slide out as the cheese melts, and too little leaves it dry.\n\nSweetcorn adds sweetness and a little crunch. A teaspoon of finely chopped onion or spring onion cuts through the richness.\n\n**Spread the filling thinly** and edge to edge. A thick pile sits in the middle, the edges stay empty and the first bite is all bread. Grated cheese goes on top of the filling. Toast in a pan over medium-low heat for 3 minutes a side. Tuna melts keep well wrapped, so one can be made in the morning and eaten cold at lunch if the toaster is not nearby. A little finely chopped celery or red onion in the filling adds crunch and a fresher flavour.',
    ing: [
      '110 g tinned tuna in water, drained',
      '2 tbsp mayonnaise',
      '40 g tinned sweetcorn, drained',
      '1 spring onion, finely sliced',
      '4 slices white bread',
      '20 g butter',
      '60 g grated cheddar'
    ],
    st: [
      'Mix the tuna, mayonnaise, sweetcorn and spring onion in a bowl.',
      'Butter one side of each slice of bread. Lay two slices butter side down in a large frying pan and spread with the tuna mixture, then the cheese.',
      'Top with the other slices, butter side up. Cook over medium-low heat for 3 minutes, pressing down.',
      'Flip and cook for 3 minutes more until golden and the cheese has melted. Cut in half.'
    ],
    tips: [
      'Drain the tuna thoroughly to keep the toastie crisp.',
      'Spread the filling to the edges.',
      'Cover the pan for the first minute to help the cheese melt.'
    ],
    pair: ['Tomato soup', 'Side salad', 'Crisps'],
    store: 'Best eaten straight away. The filling keeps in the fridge for up to 1 day.',
    nut: [527, 28, 34, 31, 2, 4, 740]
  },

  'sausage-sandwich': {
    d: 'Pan-fried sausages split lengthways and tucked into buttered white bread with brown sauce. Two servings in 20 minutes.',
    meta: 'Sausage sandwich: pan-fried sausages split lengthways in buttered bread with brown sauce. A very cheap lunch for two in 20 minutes.',
    kw: ['sausage sandwich', 'bacon and sausage butty', 'budget sausage lunch', 'easy sausage butty', 'cheap lunch for two'],
    why: 'The smell of sausage skins crisping in a pan is the cue that this lunch is nearly ready. They need patience and a medium heat, because a hot pan splits the skins and burns the outside before the middle is cooked.\n\nPrick nothing. Pricking lets the fat out and leaves a dry sausage; a gentle fry means the skin does not burst.\n\nCook for 12 minutes, turning every few minutes, until they are evenly brown. **Split them lengthways** once cooked, with a sharp knife, so they lie flat in the bread and do not roll out on the first bite.\n\nSoft white bread, buttered generously, is the classic wrapper. Brown sauce or ketchup goes on last. Fried onions are a worthy addition. Cooked sausages can be sliced thinly if you prefer a neater sandwich, which also makes them go further. A few pickled onions or a spoon of chutney on the side suits the rich, salty meat well.',
    ing: [
      '4 pork sausages, about 230 g',
      '1 tbsp vegetable oil',
      '4 slices soft white bread',
      '20 g butter',
      '2 tsp brown sauce'
    ],
    st: [
      'Heat the oil in a frying pan over medium heat. Add the sausages and cook for 12 minutes, turning every few minutes, until evenly browned and cooked through.',
      'Butter the bread.',
      'Split the sausages in half lengthways and lay them on two slices of bread.',
      'Spoon over the brown sauce, close with the remaining slices and cut in half.'
    ],
    tips: [
      'Cook slowly over medium heat so the skins do not burst.',
      'Check there is no pink in the middle before serving.',
      'Add fried onion for a fuller sandwich.'
    ],
    pair: ['Crisps', 'Pickles', 'Mug of tea'],
    store: 'Best eaten straight away. Cooked sausages keep in the fridge for up to 2 days.',
    nut: [612, 20, 34, 44, 2, 5, 1280]
  },

  'egg-mayo': {
    d: 'Hard-boiled eggs mashed with mayonnaise, mustard and salt and spread on buttered bread. Two servings in 15 minutes.',
    meta: 'Egg mayo: hard-boiled eggs mashed with mayonnaise, mustard and salt for sandwiches. A very cheap lunch for two in 15 minutes.',
    kw: ['egg mayo', 'egg mayonnaise sandwich', 'budget egg sandwich', 'easy egg salad', 'cheap lunch for two'],
    why: 'Boil the eggs for 9 minutes, no longer. Beyond that the yolks go grey-green at the edges and smell of sulphur, which no amount of mayonnaise will hide.\n\nCool them in cold water right away. Peeling is easier from a cold egg, and the shells come away in large pieces instead of tearing the white.\n\nMash them with a fork, not a blender, so the texture stays coarse. Add the mayonnaise a spoonful at a time. **Stop when the mixture just holds together**, since runny egg mayo soaks the bread.\n\nA small spoon of mustard gives sharpness, and a pinch of salt and pepper sorts the rest. Spread it thick on buttered bread. Cress or lettuce adds freshness. Egg mayo is a simple filling that works equally well in sandwiches, on toast, in jacket potatoes or tucked into lettuce cups. Chopped chives or spring onion add freshness, and a pinch of curry powder takes it in a different direction.',
    ing: [
      '4 eggs',
      '3 tbsp mayonnaise',
      '1 tsp Dijon mustard',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '4 slices white bread',
      '20 g butter'
    ],
    st: [
      'Lower the eggs into boiling water and cook for 9 minutes. Cool in cold water for 5 minutes, then peel.',
      'Mash the eggs roughly with a fork. Stir in the mayonnaise, mustard, salt and pepper.',
      'Butter the bread. Spread the egg mixture over two slices and close with the others.',
      'Cut in half and serve.'
    ],
    tips: [
      'Cool the eggs in cold water before peeling.',
      'Add the mayonnaise gradually to control the texture.',
      'Make it just before serving so the bread stays fresh.'
    ],
    pair: ['Salad cress', 'Crisps', 'Sliced tomato', 'Cup of tea'],
    store: 'The filling keeps in the fridge for up to 2 days. Assemble the sandwiches fresh.',
    nut: [511, 18, 31, 35, 2, 4, 890]
  },

  'cheese-and-pickle-sandwich': {
    d: 'Slices of mature cheddar and a layer of sweet pickle on buttered white bread. Two servings in 5 minutes.',
    meta: 'Cheese and pickle sandwich: mature cheddar and sweet pickle on buttered bread. A very cheap, classic lunch for two in 5 minutes.',
    kw: ['cheese and pickle sandwich', 'classic cheese and pickle', 'budget sandwich', 'easy cheese sandwich', 'cheap packed lunch'],
    why: 'It is two things on bread, and every decision counts. Mature cheddar, because mild cheese disappears behind the pickle, and a pickle with some texture, because a smooth one is just sweetness.\n\nButter both slices to the edges. It stops the pickle from soaking the bread, which is the usual way a packed lunch ends in a damp sandwich.\n\nSlice the cheese rather than grating it. Slices lie flat and give a clean bite; grated cheese falls out of the sides.\n\n**Spread the pickle thinly and evenly.** A heavy spoonful in the middle makes one bite too sharp and the rest dry. Press the sandwich together firmly and cut it in half. Wrapped in paper, it keeps for a few hours. The pickle can be a branded one or a homemade chutney, and a dry, crumbly cheese holds it best. Thin slices of apple or cucumber alongside give the sandwich a fresh edge that suits a packed lunch.',
    ing: [
      '4 slices white bread',
      '20 g butter',
      '120 g mature cheddar, sliced',
      '2 tbsp sweet pickle'
    ],
    st: [
      'Butter all four slices of bread to the edges.',
      'Lay the cheese over two slices in an even layer.',
      'Spread the pickle thinly over the cheese.',
      'Top with the other slices, press together and cut in half.'
    ],
    tips: [
      'Butter the bread to the edges to protect it from the pickle.',
      'Slice the cheese thin and even.',
      'Add lettuce or sliced tomato for a fresher sandwich.'
    ],
    pair: ['Crisps', 'Apple', 'Pickled onions', 'Cup of tea'],
    store: 'Best eaten fresh. Wrapped, it keeps in a cool bag for a few hours.',
    nut: [498, 21, 36, 30, 2, 8, 810]
  },

  'ham-and-cheese-sandwich': {
    d: 'Sliced ham and cheddar on buttered bread with mustard and lettuce. One serving in 5 minutes.',
    meta: 'Ham and cheese sandwich: sliced ham and cheddar on buttered bread with mustard and lettuce. A very cheap lunch for one in 5 minutes.',
    kw: ['ham and cheese sandwich', 'classic ham sandwich', 'budget sandwich', 'easy packed lunch sandwich', 'cheap lunch for one'],
    why: 'The sandwich is simple, so build it with some care. Layer the ham in folds rather than flat, so it holds air and tastes more generous than it is.\n\nButter both slices all the way to the crust. The butter keeps the mustard and any moisture from the lettuce from reaching the bread, and it is why a good sandwich stays fresh for hours.\n\nMustard is better than mayonnaise here. It cuts through the ham and cheese without making things slippery. **A thin smear on one slice is enough.**\n\nPut the lettuce between the ham and the cheese, and not against the bread, where it makes the slice limp. Cut in half on the diagonal. A sandwich like this is easily improved by the quality of the bread and the butter, so spend a little there. Toasting it in a pan turns it into a croque-style sandwich, with the cheese melted into the ham.',
    ing: [
      '2 slices bread',
      '10 g butter',
      '1 tsp Dijon mustard',
      '40 g sliced ham',
      '30 g cheddar, sliced',
      '1 lettuce leaf'
    ],
    st: [
      'Butter both slices of bread to the edges and spread one with the mustard.',
      'Fold the ham over the mustard slice, then add the lettuce and the cheese.',
      'Close with the second slice, press down gently and cut in half.'
    ],
    tips: [
      'Fold the ham for a fuller sandwich.',
      'Keep the lettuce away from the bread.',
      'Wrap in baking paper for a packed lunch.'
    ],
    pair: ['Crisps', 'Apple', 'Pickles', 'Glass of milk'],
    store: 'Best eaten fresh. In a cool bag it keeps for a few hours.',
    nut: [520, 27, 49, 24, 13, 10, 1110]
  },

  'bean-wraps': {
    d: 'Flour tortillas spread with mashed beans and filled with cheese, lettuce and salsa. Four servings in 13 minutes.',
    meta: 'Bean wraps: flour tortillas spread with spiced mashed beans and filled with cheese, lettuce and salsa. A very cheap lunch for four in 13 minutes.',
    kw: ['bean wraps', 'easy bean tortilla wraps', 'budget lunch wraps', 'mashed bean wrap', 'cheap lunch for four'],
    why: 'Mash the beans. Whole beans roll out of a wrap as you lift it, but mashed ones act as a paste that holds the filling in and gives the whole thing body.\n\nA fork is enough, and you can leave some beans whole for texture. Stir in cumin, a pinch of salt and a squeeze of lime, and the mixture tastes like it came from somewhere.\n\nWarm the tortillas for 20 seconds in the microwave or a dry pan. **Cold tortillas crack** when rolled; warm ones bend like cloth.\n\nSpread the beans over most of the tortilla, then add cheese, lettuce and salsa in a line down the middle. Keep the line narrow, and leave a 3 cm border at each end. Fold the ends in, then roll up tightly and cut in half. The filling keeps well in the fridge, so make a batch and fill the wraps as needed. For a version that travels, wrap each tightly in foil, and the filling stays put until it is time to eat.',
    ing: [
      '480 g tinned black beans, drained and rinsed',
      '1 tsp ground cumin',
      '1/4 tsp salt',
      '1 tbsp lime juice',
      '4 large flour tortillas',
      '100 g grated cheddar',
      '4 lettuce leaves, shredded',
      '4 tbsp salsa'
    ],
    st: [
      'Mash the beans roughly with a fork, leaving some whole. Stir in the cumin, salt and lime juice.',
      'Warm the tortillas for 20 seconds each in a dry pan or the microwave.',
      'Spread a quarter of the beans over each tortilla, leaving a border. Add the cheese, lettuce and salsa in a line down the middle.',
      'Fold in the ends, roll up tightly and cut in half.'
    ],
    tips: [
      'Warm the tortillas so they do not crack.',
      'Keep the filling in a narrow line so the wrap closes.',
      'Wrap in foil for packed lunches.'
    ],
    pair: ['Tortilla chips', 'Soured cream', 'Sliced avocado', 'Fresh fruit'],
    store: 'Wrapped, keeps in the fridge for up to 1 day. The bean mix keeps for 3 days.',
    nut: [418, 21, 52, 14, 10, 3, 1200]
  },

  'tuna-wraps': {
    d: 'Tinned tuna mixed with mayonnaise, sweetcorn and cucumber, rolled in a tortilla with lettuce. Two servings in 8 minutes.',
    meta: 'Tuna wraps: tinned tuna mixed with mayonnaise, sweetcorn and cucumber, rolled in a tortilla with lettuce. A very cheap lunch for two in 8 minutes.',
    kw: ['tuna wraps', 'easy tuna mayo wrap', 'budget lunch wrap', 'tuna and sweetcorn wrap', 'cheap lunch for two'],
    why: 'Short, sharp: drain the tuna. A tuna wrap lives or dies by how dry the tuna is, and ten seconds with a fork pressed on a sieve is worth more than any spice.\n\nMix the tuna with mayonnaise, sweetcorn and a squeeze of lemon. Keep the proportions loose: more tuna than mayonnaise, so each forkful tastes of fish and not dressing.\n\nCucumber adds crunch. Cut it into thin sticks rather than slices, as it rolls up neatly and does not slide.\n\n**Lay the lettuce down first**, as a barrier between the filling and the tortilla. It keeps the wrap from going damp. Roll tightly, tucking the sides in, and slice on the diagonal. A wrap suits a cold filling because there is no need for a toaster or a pan. Add shredded carrot or a handful of rocket if you have it, and roll the wrap tightly so the filling stays inside until lunch.',
    ing: [
      '110 g tinned tuna in water, drained',
      '2 tbsp mayonnaise',
      '40 g tinned sweetcorn, drained',
      '1 tsp lemon juice',
      '1/4 tsp black pepper',
      '2 large flour tortillas',
      '2 lettuce leaves',
      '1/4 cucumber, cut into sticks'
    ],
    st: [
      'Mix the tuna, mayonnaise, sweetcorn, lemon juice and pepper.',
      'Lay a lettuce leaf on each tortilla, leaving a border. Spoon the tuna mixture down the middle and add the cucumber.',
      'Fold in the sides, roll up tightly and cut in half on the diagonal.'
    ],
    tips: [
      'Drain the tuna thoroughly.',
      'Use lettuce as a barrier against the filling.',
      'Wrap in baking paper and chill for 30 minutes to make slicing easier.'
    ],
    pair: ['Crisps', 'Apple', 'Cherry tomatoes'],
    store: 'Keeps wrapped in the fridge for up to 1 day. The filling alone keeps for 1 day.',
    nut: [389, 21, 38, 17, 3, 3, 670]
  },

  'pizza-toast': {
    d: 'Bread topped with tomato sauce, cheese and any scraps, toasted under the grill until bubbling. Two servings in 13 minutes.',
    meta: 'Pizza toast: bread topped with tomato sauce, cheese and oregano, grilled until bubbling. A very cheap Australian-style lunch for two in 13 minutes.',
    kw: ['pizza toast', 'cheese and tomato toast', 'budget pizza lunch', 'easy grilled pizza toast', 'cheap lunch for two'],
    why: 'Toast the bread first, before anything goes on top. Raw bread under tomato sauce goes soft and pale, but bread toasted on one side keeps a crisp base that holds the toppings up.\n\nThe sauce is a spoonful of tomato purée and a spoonful of water, stirred with oregano. It spreads thin and tastes like pizza, which a tin of chopped tomatoes poured on top does not.\n\nSpread it to the edge. **Cheese goes right to the edges as well**, because bare crust burns while the middle melts.\n\nUnder a hot grill, 3 minutes is enough. Watch it: cheese goes from melted to scorched quickly. A slice of ham, some sliced mushroom or a few olives turns it into a different lunch. It is an easy lunch to make with children, who can add their own toppings. Keep the amounts modest so the toast does not become soggy, and use a good melting cheese for the best result.',
    ing: [
      '4 slices white bread',
      '2 tbsp tomato purée',
      '2 tbsp water',
      '1/2 tsp dried oregano',
      '120 g grated mozzarella',
      '30 g sliced ham, torn',
      '1 pinch salt'
    ],
    st: [
      'Heat the grill to high. Toast the bread on one side for 1 minute.',
      'Mix the purée, water, oregano and salt.',
      'Spread the sauce over the untoasted sides, top with the ham and cheese, right to the edges.',
      'Grill for 3 to 4 minutes until the cheese is bubbling and spotted brown.'
    ],
    tips: [
      'Toast one side of the bread first for a crisp base.',
      'Take the cheese to the edges so the crust does not burn.',
      'Watch the grill; it takes only minutes.'
    ],
    pair: ['Green salad', 'Tomato soup', 'Cucumber sticks'],
    store: 'Best eaten straight away.',
    nut: [360, 22, 32, 16, 2, 4, 930]
  },

  'baked-bean-pasta': {
    d: 'Pasta stirred into baked beans with onion, garlic and a little cheese for a one-pan supper. Four servings in 20 minutes.',
    meta: 'Baked bean pasta: pasta stirred into baked beans with onion, garlic and cheese. A very cheap supper for four from the cupboard in 20 minutes.',
    kw: ['baked bean pasta', 'beans and pasta supper', 'budget cupboard pasta', 'easy pasta with beans', 'cheap supper for four'],
    why: 'Baked beans are already a sauce. The tomato and bean mix is sweet, a little salty and thick, and with a bit of help it coats pasta as well as any jar.\n\nFry an onion and a clove or two of garlic in oil to start, since they add the savoury depth the tin lacks. Add a spoon of mustard or Worcestershire sauce for edge, and a pinch of chili for warmth.\n\nBoil the pasta and keep a mug of the water. **The starch in it makes the sauce cling** instead of pooling, and a splash loosens beans that have thickened in the pan.\n\nStir everything together for a minute over low heat, so the pasta takes up some of the sauce. Cheese on top finishes the dish. A tin of beans in tomato sauce turns into dinner when it meets a bag of pasta, and both are sold cheaply everywhere. A scatter of black pepper on top and a slice of buttered bread make a full plate.',
    ing: [
      '350 g penne',
      '1 tbsp vegetable oil',
      '1 onion, chopped',
      '2 garlic cloves, chopped',
      '800 g tinned beans in tomato sauce',
      '1 tsp Worcestershire sauce',
      '1/2 tsp dried chili flakes',
      '1/2 tsp black pepper',
      '60 g grated cheddar'
    ],
    st: [
      'Boil the penne in salted water until just tender. Keep a mug of the water, then drain.',
      'Meanwhile, heat the oil in a large pan over medium heat and cook the onion for 6 minutes. Add the garlic for 1 minute.',
      'Stir in the beans, Worcestershire sauce, chili flakes and pepper and simmer for 5 minutes.',
      'Add the pasta and a splash of the water and toss for 1 minute. Top with the cheese.'
    ],
    tips: [
      'Keep a mug of pasta water to loosen the beans.',
      'Cook the onion until soft so it adds sweetness.',
      'Add a dash of hot sauce for more heat.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Steamed broccoli'],
    store: 'Keeps in the fridge for up to 2 days. Reheat with a splash of water.',
    nut: [595, 25, 99, 11, 11, 14, 920]
  },

  'coronation-chickpea-sandwich': {
    d: 'Mashed chickpeas in a mild curry mayonnaise with raisins and spring onion, piled into bread. Four servings in 10 minutes, no cooking.',
    meta: 'Coronation chickpea sandwich: mashed chickpeas in a mild curry mayonnaise with raisins and spring onion. A cheap, no-cook lunch for four in 10 minutes.',
    kw: ['coronation chickpea sandwich', 'coronation chickpea salad', 'budget chickpea lunch', 'easy curried chickpea sandwich', 'cheap no cook lunch'],
    why: 'Coronation chicken is a mild curried chicken salad. This swaps the chicken for chickpeas, which cost less and mash into a filling with a similar texture.\n\nMash roughly: about two thirds of the chickpeas, with the rest left whole. Use a fork or a potato masher rather than a blender, as a smooth paste loses the bite.\n\nThe dressing is mayonnaise, curry powder, a little mango chutney and lemon juice. Mix it separately and taste before it goes in. **Curry powder tastes raw if used by the spoonful**, so use a small amount and let it stand for 5 minutes.\n\nRaisins add pockets of sweetness, and spring onion gives crunch. Pile onto bread with lettuce, and press the sandwich together firmly. The filling is a vegetable-based take on a sandwich classic, and keeps well in the fridge. It also works in a jacket potato or scooped into lettuce leaves, and the curry mayonnaise holds the chickpeas together without cooking.',
    ing: [
      '480 g tinned chickpeas, drained and rinsed',
      '4 tbsp mayonnaise',
      '2 tsp mild curry powder',
      '1 tbsp mango chutney',
      '1 tbsp lemon juice',
      '40 g raisins',
      '2 spring onions, finely sliced',
      '1/4 tsp salt',
      '8 slices bread',
      '4 lettuce leaves'
    ],
    st: [
      'Mash two thirds of the chickpeas roughly with a fork and leave the rest whole.',
      'Stir together the mayonnaise, curry powder, chutney and lemon juice and leave for 5 minutes.',
      'Fold the dressing into the chickpeas with the raisins, spring onions and salt.',
      'Spread over four slices of bread, add the lettuce and close with the rest.'
    ],
    tips: [
      'Leave some chickpeas whole for texture.',
      'Let the dressing stand to mellow the curry powder.',
      'Add chopped apple for crunch and sweetness.'
    ],
    pair: ['Crisps', 'Cucumber sticks', 'Fresh fruit', 'Cup of tea'],
    store: 'The filling keeps in the fridge for up to 3 days. Assemble the sandwiches fresh.',
    nut: [452, 15, 62, 16, 9, 15, 910]
  }
};
