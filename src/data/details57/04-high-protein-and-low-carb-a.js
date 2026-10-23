'use strict';

/**
 * Volume fifty-seven, fourth part: six high-protein dishes (chili, meal prep
 * bowls, overnight oats, pancakes, pasta, waffles) and seven low-carb dishes
 * (breakfast casserole, chicken casserole, chicken parmesan, chili, egg
 * muffins, granola, meatballs). The overnight oats are not heated at all.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'high-protein-chili': {
    d: 'A thick beef and bean chili built on lean mince, kidney beans and black beans, simmered for 40 minutes and high in protein.',
    meta: 'High-protein beef and bean chili with lean mince, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['high protein chili', 'lean beef and bean chili', 'high protein dinner', 'chili with kidney beans and black beans', 'protein packed beef chili'],
    why: 'Chili with two kinds of beans and lean beef is a pot that does a lot of work for a small effort. The meat brings most of the protein, the beans add more along with fibre, and the long simmer turns a few cupboard staples into something deep and rich.\n\nChoose mince with 5 per cent fat or less. It gives a leaner pot, but it dries out more easily than fattier mince, so brown it in batches over a high heat and do not stir it constantly. Colour on the meat is where much of the flavour comes from. **Toast the chilli powder and cumin in the pan for 1 minute** before adding the tomatoes, since heat wakes up the spices.\n\nBeans go in tinned, drained and rinsed, which also removes the starchy liquid that would cloud the sauce. Simmer with the lid slightly ajar so the chili thickens instead of staying watery. It is ready when a spoon dragged across the base leaves a trail that fills slowly. Like most chilis, it tastes better the next day.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '3 garlic cloves, crushed',
      '700 g lean beef mince',
      '2 tbsp chilli powder',
      '2 tsp ground cumin',
      '400 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '240 g tinned kidney beans, drained and rinsed',
      '240 g tinned black beans, drained and rinsed',
      '200 ml beef stock',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a large pot and cook the onion for 5 minutes. Add the garlic and cook for 1 minute.',
      'Add the mince in two batches and brown for 6 minutes, breaking it up.',
      'Stir in the chilli powder, cumin and tomato purée and cook for 1 minute.',
      'Add the tomatoes, beans, stock and salt. Bring to a simmer, partly cover and cook for 40 minutes, stirring now and then, until thick.',
      'Taste and add salt if needed.'
    ],
    tips: [
      'Brown the mince in batches so it colours instead of steaming.',
      'Toast the spices before adding the liquid.',
      'Leave the lid slightly open so the chili thickens.'
    ],
    pair: ['Rice', 'Greek yoghurt', 'Grated cheddar', 'Sliced avocado'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [285, 32, 19, 9, 7, 4, 880]
  },

  'high-protein-meal-prep-bowls': {
    d: 'Lean turkey mince seasoned with taco spices, served on quinoa with black beans, sweetcorn and peppers, for four lunches.',
    meta: 'High-protein meal prep bowls with turkey, quinoa and black beans, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['high protein meal prep bowls', 'turkey and quinoa bowls', 'meal prep lunch bowls', 'turkey taco bowls with black beans', 'high protein lunch'],
    why: 'The first thing to get right is the quinoa, because everything else sits on it. Rinse it well, cook it with a little less water than the packet suggests, and fluff it with a fork: it should be separate and just chewy, not wet.\n\nThe turkey is cooked in a hot pan with taco spices and a spoonful of tomato purée, which gives a savoury, slightly sticky coating. Lean turkey mince dries out if it is left, so stir it often and take it off the heat as soon as no pink remains. **Season the beans and corn lightly** instead of leaving them plain; unseasoned beans taste flat in a cold lunch.\n\nPack the parts side by side in four boxes rather than mixed together, so the quinoa does not soak up everything. Add fresh toppings such as lime and coriander only when you eat. The bowls are also good warmed through, with the cheese melted on top.',
    ing: [
      '160 g quinoa',
      '320 ml water',
      '1 tbsp olive oil',
      '600 g turkey mince',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tbsp tomato purée',
      '240 g tinned black beans, drained and rinsed',
      '160 g tinned sweetcorn, drained',
      '2 red peppers, diced',
      '60 g mature cheddar, grated',
      '1 lime, juiced',
      '1/2 tsp salt'
    ],
    st: [
      'Rinse the quinoa, put it in a pan with the water and salt, bring to the boil, cover and simmer for 12 minutes. Rest for 5 minutes and fluff with a fork.',
      'Heat the oil in a large pan and cook the turkey for 8 minutes, breaking it up, until no pink remains.',
      'Stir in the cumin, paprika, garlic powder and tomato purée and cook for 2 minutes.',
      'Add the peppers, beans and sweetcorn and cook for 3 minutes until just softened.',
      'Divide the quinoa between 4 boxes, spoon over the turkey mix and top with the cheddar. Squeeze over the lime juice.'
    ],
    tips: [
      'Rinse the quinoa before cooking.',
      'Season the beans and corn.',
      'Add fresh toppings only when serving.'
    ],
    pair: ['Salsa', 'Sliced avocado', 'Soured cream', 'Fresh coriander'],
    store: 'Keeps for 4 days in the fridge in sealed boxes.',
    nut: [623, 45, 50, 27, 10, 5, 700]
  },

  'high-protein-overnight-oats': {
    d: 'Rolled oats soaked with thick Greek yoghurt, milk, chia seeds and almonds in a jar overnight, with about 30 g of protein per serving.',
    meta: 'High-protein overnight oats with Greek yoghurt and chia, chilled overnight. Two servings, ready in 5 minutes plus overnight soaking.',
    kw: ['high protein overnight oats', 'overnight oats with greek yoghurt', 'chia and almond overnight oats', 'high protein breakfast jar', 'no cook oats'],
    why: 'Why do oats left in a jar overnight turn soft and creamy without any heat? The oats drink the liquid slowly as they sit, and the chia seeds swell into a gel that holds everything together. By morning it is a spoonable porridge that was never near a stove.\n\nThe protein comes mostly from the yoghurt, so choose a thick, plain Greek-style one with no added sugar. The milk loosens it, and the ratio matters: too little milk gives a stiff paste, too much gives a soup. If the jar looks thick in the morning, a splash of milk stirred in fixes it. **Stir everything once, then again after 10 minutes**, so the chia does not clump at the bottom.\n\nA spoonful of honey or a few berries on top adds sweetness without changing the result. Use rolled oats, not instant, which turn to mush, or steel-cut, which stay hard. Keep the jar covered in the fridge. It is best eaten within 3 days.',
    ing: [
      '60 g rolled oats',
      '450 g plain fat-free Greek yoghurt',
      '200 ml whole milk',
      '20 g chia seeds',
      '20 g flaked almonds',
      '1 tbsp honey',
      '1 pinch salt',
      '100 g blueberries, to top'
    ],
    st: [
      'Stir the oats, yoghurt, milk, chia seeds, honey and salt together in a bowl until smooth.',
      'Stir again after 10 minutes so the chia does not clump.',
      'Divide between 2 jars, cover and chill overnight.',
      'In the morning, loosen with a splash of milk if needed and top with the blueberries and flaked almonds.'
    ],
    tips: [
      'Use rolled oats, not instant.',
      'Stir twice in the first 10 minutes.',
      'Add a splash of milk in the morning if it is stiff.'
    ],
    pair: ['Fresh berries', 'Sliced banana', 'Nut butter', 'Cinnamon'],
    store: 'Keeps for 3 days in the fridge in a covered jar.',
    rest: [480, 'Soaking overnight'],
    nut: [577, 32, 56, 25, 9, 28, 220]
  },

  'high-protein-pancakes': {
    d: 'Blended oat pancakes made with eggs, cottage cheese and Greek yoghurt, cooked in a pan for about 15 minutes.',
    meta: 'High-protein pancakes of oats, eggs and cottage cheese, cooked for 15 minutes in a pan. Three servings, ready in 25 minutes.',
    kw: ['high protein pancakes', 'cottage cheese pancakes', 'oat and egg pancakes', 'protein pancakes for breakfast', 'blended oat pancakes'],
    why: 'Why do high-protein pancakes so often turn out rubbery or scrambled? Too much egg and too hot a pan. The fix here is to blend the batter smooth, rest it for a couple of minutes and cook over a lower heat than you would for ordinary pancakes.\n\nThe cottage cheese is blended in rather than left in curds, so it reads as a creamy base instead of a lumpy one. The oats are blended too, and act as the flour. Greek yoghurt adds tang and helps the pancakes stay tender. **Keep them small, about 8 cm across**, since large ones are hard to flip when they contain this much egg.\n\nCook on medium-low heat in a lightly oiled non-stick pan. The pancakes are ready to turn when the surface looks set and the edges have dried, which takes 2 minutes or so. They stay softer than a regular pancake, closer to a thick crepe, and eat well with fruit and a spoonful of yoghurt.',
    ing: [
      '100 g rolled oats',
      '300 g cottage cheese',
      '6 eggs',
      '150 g plain Greek yoghurt',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '1 tbsp rapeseed oil, for the pan',
      '150 g strawberries, sliced, to serve'
    ],
    st: [
      'Blend the oats, cottage cheese, eggs, half the yoghurt, baking powder, vanilla and salt until smooth. Rest for 2 minutes.',
      'Heat a non-stick pan over medium-low heat and brush with oil.',
      'Pour in 3 tablespoons of batter for each pancake. Cook for 2 minutes until set and dry at the edges, then flip and cook for 1 minute.',
      'Repeat, oiling the pan lightly between batches. Serve with the strawberries and remaining yoghurt.'
    ],
    tips: [
      'Cook over medium-low heat.',
      'Make small pancakes so they are easy to flip.',
      'Blend the batter until completely smooth.'
    ],
    pair: ['Berries', 'Greek yoghurt', 'Sliced banana', 'Peanut butter'],
    store: 'Keeps for 2 days in the fridge. Reheat in a toaster.',
    nut: [471, 33, 33, 23, 4, 8, 760]
  },

  'high-protein-pasta': {
    d: 'Pasta with chicken breast and a creamy blended cottage cheese and parmesan sauce, with spinach, on the table in 25 minutes.',
    meta: 'High-protein pasta with chicken and a blended cottage cheese sauce, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['high protein pasta', 'chicken pasta with cottage cheese sauce', 'high protein dinner', 'creamy chicken and spinach pasta', 'cottage cheese pasta sauce'],
    why: 'The smell of garlic hitting hot oil is the signal to move fast, because the whole dish comes together in the time it takes the pasta to boil. This is a chicken and spinach pasta with a sauce that gets its creaminess from cottage cheese, not from cream.\n\nBlend the cottage cheese with the parmesan, garlic and a splash of the pasta water until completely smooth. Left in curds, it looks grainy; blended, it is as smooth as a white sauce, with a tang and a lot of protein. **Add the sauce off the heat, or on the lowest setting**, because cottage cheese splits and turns grainy if it is boiled.\n\nSlice the chicken into thin strips so it cooks in 6 or 7 minutes and stays tender. Season it well before it goes in the pan. Keep a mugful of the pasta water: its starch loosens the sauce and helps it cling to the pasta. If the sauce tightens as it sits, loosen it with a little more water.',
    ing: [
      '240 g penne',
      '1 tbsp olive oil',
      '400 g chicken breast, sliced into strips',
      '3 garlic cloves, crushed',
      '250 g cottage cheese',
      '40 g parmesan, grated',
      '120 g baby spinach',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the penne in salted water for 10 minutes until al dente. Keep a mugful of the water, then drain.',
      'Meanwhile heat the oil in a large pan, season the chicken with half the salt and cook for 7 minutes until golden and cooked through. Add the garlic for the last minute.',
      'Blend the cottage cheese, parmesan, remaining salt, pepper and 4 tablespoons of the pasta water until smooth.',
      'Add the spinach to the chicken and stir for 1 minute until wilted. Reduce the heat to low.',
      'Add the pasta and the sauce and toss for 1 minute, loosening with pasta water. Serve at once.'
    ],
    tips: [
      'Add the sauce on low heat so it does not split.',
      'Slice the chicken thinly so it cooks quickly.',
      'Keep some pasta water to loosen the sauce.'
    ],
    pair: ['Green salad', 'Cherry tomatoes', 'Crusty bread'],
    store: 'Best eaten at once. Keeps for 2 days in the fridge; reheat with a splash of water.',
    nut: [481, 42, 49, 13, 3, 4, 1060]
  },

  'high-protein-waffles': {
    d: 'Waffles made from blended oats, eggs, Greek yoghurt, cottage cheese and ground almonds, cooked in a waffle iron.',
    meta: 'High-protein waffles of oats, eggs and Greek yoghurt, cooked for 15 minutes in a waffle iron. Three servings, ready in 25 minutes.',
    kw: ['high protein waffles', 'oat and yoghurt waffles', 'protein waffles for breakfast', 'waffle iron oat waffles', 'cottage cheese waffles'],
    why: 'Oats, eggs, Greek yoghurt, cottage cheese and ground almonds: five ingredients, and between them they hold more than 30 g of protein in a serving. Everything goes into a blender, and the batter is ready as soon as it is smooth.\n\nThe oats act as the flour, and blending them finely matters. Coarse oats leave a gritty waffle that stays soft and does not crisp. The ground almonds add fat, which helps the waffles brown. **Let the batter stand for 5 minutes** so the oats absorb the liquid and thicken it. A thick batter makes a waffle that holds its shape in the iron.\n\nGrease the plates well, as egg-rich batters stick. Cook until the steam slows right down and the waffle releases easily; opening the iron too soon tears it. These waffles are a little softer than classic ones. Toast them for a minute if you want them crisper.',
    ing: [
      '120 g rolled oats',
      '5 eggs',
      '250 g plain Greek yoghurt',
      '200 g cottage cheese',
      '30 g ground almonds',
      '2 tsp baking powder',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '1 tbsp rapeseed oil, for the iron'
    ],
    st: [
      'Blend the oats, eggs, yoghurt, cottage cheese, ground almonds, baking powder, vanilla and salt until completely smooth. Let stand for 5 minutes.',
      'Heat the waffle iron and brush the plates with oil.',
      'Pour in enough batter to cover the plates and cook for 5 minutes until golden and the steam slows.',
      'Lift onto a rack and repeat. Toast for 1 minute if you want them crisper.'
    ],
    tips: [
      'Blend the oats until fine.',
      'Grease the iron well each time.',
      'Do not open the iron early.'
    ],
    pair: ['Berries', 'Maple syrup', 'Greek yoghurt', 'Banana'],
    store: 'Keeps for 2 days in the fridge. Freeze for 1 month and toast from frozen.',
    nut: [528, 33, 36, 28, 5, 6, 780]
  },

  'low-carb-breakfast-casserole': {
    d: 'Eggs, sausage, cheddar, spinach and red pepper baked in a dish for 35 minutes, with almost no carbohydrate.',
    meta: 'Low-carb breakfast casserole of eggs, sausage and cheddar, cooked for 40 minutes at 190C. Eight servings, ready in 55 minutes.',
    kw: ['low carb breakfast casserole', 'egg and sausage casserole', 'low carb egg bake', 'breakfast bake without bread', 'sausage and cheddar egg casserole'],
    why: 'Brown the sausage first and leave it alone while it colours. That is the one instruction that decides how good the casserole tastes, because the browned meat flavours all the egg around it.\n\nThere is no bread, potato or hash brown base here, so the carbohydrate comes only from the vegetables and a little cream. The eggs set around the sausage, spinach and pepper into a soft, sliceable bake. Squeeze the spinach dry after wilting, since any water left in it pools in the dish and leaves the base wet. **Whisk the eggs with the cream thoroughly** so the casserole is even and not streaky.\n\nBake until the centre is set and no longer wobbles when you shake the dish, and the top is golden. It will puff as it cooks and settle as it cools, which is normal. Rest it for 5 minutes before cutting so it holds together. It reheats well, which makes it a good dish for a week of breakfasts.',
    ing: [
      '1 tbsp rapeseed oil',
      '400 g pork sausages, casings removed',
      '1 red pepper, diced',
      '100 g baby spinach',
      '10 eggs',
      '100 ml double cream',
      '150 g mature cheddar, grated',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190C and grease a 23 x 33 cm dish.',
      'Heat the oil in a pan and cook the sausage meat for 6 minutes until browned, breaking it up. Add the pepper and cook for 3 minutes.',
      'Add the spinach and stir for 1 minute until wilted. Squeeze out any liquid and spread the mixture in the dish.',
      'Whisk the eggs, cream, half the cheddar, salt and pepper, and pour over.',
      'Scatter with the remaining cheddar and bake for 35 minutes until set and golden.',
      'Rest for 5 minutes before cutting.'
    ],
    tips: [
      'Drain the sausage fat if there is a lot.',
      'Squeeze the cooked spinach dry.',
      'Rest the casserole for 5 minutes before cutting.'
    ],
    pair: ['Sliced tomatoes', 'Avocado', 'Hot sauce', 'Fresh fruit'],
    store: 'Keeps for 4 days in the fridge. Reheat slices in the microwave.',
    nut: [366, 20, 4, 30, 1, 2, 910]
  },

  'low-carb-chicken-casserole': {
    d: 'Chicken thighs, broccoli and onion in a cream cheese and mustard sauce, topped with cheddar and baked for 35 minutes.',
    meta: 'Low-carb chicken casserole with broccoli and a cream cheese sauce, cooked for 35 minutes. Six servings, ready in 50 minutes.',
    kw: ['low carb chicken casserole', 'chicken and broccoli casserole', 'cream cheese chicken bake', 'low carb dinner bake', 'chicken thigh casserole without pasta'],
    why: 'Chicken thighs, broccoli, cream cheese, mustard and cheddar: five things, and about 15 minutes of work before the oven does the rest. With no pasta, rice or potato under the sauce, nearly all the carbohydrate falls away.\n\nThighs suit a casserole better than breast, since they stay juicy during the longer bake and do not dry out. Brown them first for a few minutes a side; the colour adds flavour to a sauce that would otherwise be mild. **Stir the cream cheese into the hot stock off the heat** until smooth, and add the mustard, which cuts through the richness.\n\nThe broccoli goes in raw and cooks in the sauce, so cut it into small florets that will be tender when the chicken is done. If the sauce looks thin when it comes out, it will thicken as it stands for 5 minutes. Serve straight from the dish, with the cheese bubbling and spotted brown on top.',
    ing: [
      '1 tbsp olive oil',
      '800 g boneless chicken thighs',
      '1 onion, sliced',
      '2 garlic cloves, crushed',
      '150 g cream cheese',
      '200 ml chicken stock',
      '1 tbsp wholegrain mustard',
      '300 g broccoli florets',
      '100 g mature cheddar, grated',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 190C. Heat the oil in a large ovenproof pan and brown the seasoned chicken for 3 minutes a side. Lift out.',
      'Cook the onion for 4 minutes, add the garlic for 1 minute, then take off the heat.',
      'Stir in the stock, cream cheese and mustard until smooth.',
      'Return the chicken, add the broccoli and spoon the sauce over. Scatter with the cheddar.',
      'Bake for 25 minutes until the chicken is cooked through and the cheese is golden.',
      'Rest for 5 minutes before serving.'
    ],
    tips: [
      'Brown the chicken for flavour.',
      'Cut the broccoli into small florets.',
      'Rest the casserole so the sauce thickens.'
    ],
    pair: ['Green salad', 'Steamed green beans', 'Cauliflower mash'],
    store: 'Keeps for 3 days in the fridge. Reheat covered at 180C.',
    nut: [371, 34, 7, 23, 2, 2, 870]
  },

  'low-carb-chicken-parmesan': {
    d: 'Chicken cutlets coated in parmesan and ground almonds instead of breadcrumbs, topped with passata and mozzarella.',
    meta: 'Low-carb chicken parmesan with a parmesan and almond crust, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['low carb chicken parmesan', 'chicken parmigiana without breadcrumbs', 'almond crusted chicken parmesan', 'low carb italian chicken', 'chicken with mozzarella and passata'],
    why: 'Cut the chicken thin. That is most of the recipe, and the part people skip. A breast sliced in half horizontally cooks in minutes and stays tender, while a whole thick one burns on the outside before the middle is done.\n\nThe usual breadcrumb crust is replaced by a mix of grated parmesan and ground almonds. Both brown well, and the parmesan makes it salty and crisp, so there is no need for much extra seasoning. Dip the cutlets in beaten egg first so the crumb sticks, and press it on firmly. **Fry them for just 3 minutes a side**, enough to set the crust but not to cook the chicken through, since the oven finishes the job.\n\nSpoon a little passata over each cutlet, not a flood, or the crust turns soft. Top with mozzarella and bake until the cheese bubbles and begins to brown. Serve with a green salad or courgette noodles. Basil leaves at the end add freshness.',
    ing: [
      '2 large chicken breasts (about 600 g), sliced in half horizontally',
      '1 egg, beaten',
      '40 g parmesan, finely grated',
      '40 g ground almonds',
      '1 tsp dried oregano',
      '1/2 tsp salt',
      '2 tbsp olive oil',
      '200 g passata',
      '120 g mozzarella, sliced',
      '8 basil leaves'
    ],
    st: [
      'Heat the oven to 200C. Season the cutlets with the salt.',
      'Mix the parmesan, ground almonds and oregano on a plate. Dip each cutlet in the egg, then press into the crumb.',
      'Heat the oil in a large ovenproof pan and fry the cutlets for 3 minutes a side until golden.',
      'Spoon over the passata and lay the mozzarella on top.',
      'Bake for 12 minutes until the chicken is cooked through and the cheese bubbles. Scatter with the basil.'
    ],
    tips: [
      'Slice the breasts thin for even cooking.',
      'Go light on the passata so the crust stays crisp.',
      'Press the crumb on firmly.'
    ],
    pair: ['Green salad', 'Courgette noodles', 'Steamed broccoli'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven to keep the crust crisp.',
    nut: [459, 48, 6, 27, 2, 3, 760]
  },

  'low-carb-chili': {
    d: 'A bean-free beef chili with tomatoes, peppers and celery, simmered for 40 minutes.',
    meta: 'Low-carb chili with beef, peppers and tomatoes and no beans, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['low carb chili', 'chili without beans', 'beef chili with peppers', 'low carb beef dinner', 'bean free chili'],
    why: 'Most home versions come out watery, and the fix is the same here as anywhere else: cook the onions for longer than feels reasonable, then let the chili simmer with the lid off. Without beans, the pot depends on the meat and the sauce, and a sauce that is thin tastes thin.\n\nBeans normally bulk out chili and carry most of its carbohydrate. Here the bulk comes from diced peppers and celery, which soften into the sauce and add sweetness without much starch. Use a mince with a little fat, around 15 per cent, so it keeps its flavour through a long simmer. **Toast the spices in the fat for a minute** before adding the tomatoes, so their flavour fills the whole pot.\n\nTomato purée adds depth and body. Simmer for 40 minutes with the lid slightly off so the liquid reduces; the chili is ready when a spoon dragged across the base leaves a clear path. Serve in a bowl with soured cream, grated cheddar and fresh coriander.',
    ing: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 celery sticks, diced',
      '2 red peppers, diced',
      '3 garlic cloves, crushed',
      '700 g beef mince',
      '2 tbsp chilli powder',
      '2 tsp ground cumin',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '150 ml beef stock',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a large pot and cook the onion, celery and peppers for 8 minutes until soft. Add the garlic for 1 minute.',
      'Add the mince and brown for 6 minutes, breaking it up.',
      'Stir in the chilli powder, cumin and tomato purée and cook for 1 minute.',
      'Add the tomatoes, stock and salt. Bring to a simmer and cook, lid slightly off, for 40 minutes until thick.',
      'Taste and adjust the salt.'
    ],
    tips: [
      'Cook the vegetables until soft before adding the meat.',
      'Toast the spices in the fat for a minute.',
      'Leave the lid slightly off to reduce the sauce.'
    ],
    pair: ['Soured cream', 'Grated cheddar', 'Sliced avocado', 'Cauliflower rice'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [325, 24, 10, 21, 3, 5, 620]
  },

  'low-carb-egg-muffins': {
    d: 'Egg muffins baked in a tin with ham, feta, red pepper and spring onion for 20 minutes at 180C.',
    meta: 'Low-carb egg muffins with ham, feta and pepper, baked for 20 minutes at 180C. Six servings, ready in 30 minutes.',
    kw: ['low carb egg muffins', 'baked egg cups with ham and feta', 'egg muffins for breakfast', 'low carb breakfast on the go', 'ham and feta egg bites'],
    why: 'The first sign they are ready is the puff: the tops rise above the tin and turn the colour of pale gold, then settle as they cool. Egg muffins are small baked omelettes, set in a muffin tin so each one is a portion.\n\nGrease the tin generously, even a non-stick one, as egg sticks stubbornly to metal. Silicone cases work well too. Fill each hole about two-thirds full, since the eggs rise. **Pat the vegetables and ham dry** before adding; wet fillings weep into the egg and leave a watery base. Feta is salty, so you need little added salt.\n\nBake until the centres are set and spring back when pressed. Overbaked egg turns rubbery and starts to shrink away from the sides of the tin. Let them rest for 3 minutes before lifting them out with a knife around the edge. They are a good packed breakfast and reheat in under a minute.',
    ing: [
      '10 eggs',
      '100 g cooked ham, diced',
      '100 g red pepper, diced',
      '100 g feta, crumbled',
      '4 spring onions, sliced',
      '1 tbsp rapeseed oil, for the tin',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180C and grease a 12-hole muffin tin well.',
      'Beat the eggs with the pepper.',
      'Divide the ham, red pepper, feta and spring onions between the holes.',
      'Pour the egg over to fill each hole two-thirds full.',
      'Bake for 20 minutes until puffed, set and lightly golden.',
      'Rest for 3 minutes, then run a knife round each and lift out.'
    ],
    tips: [
      'Grease the tin well.',
      'Dry the fillings before adding.',
      'Fill the holes only two-thirds full.'
    ],
    pair: ['Sliced avocado', 'Cherry tomatoes', 'Hot sauce', 'Green salad'],
    store: 'Keeps for 4 days in the fridge. Freeze for 2 months.',
    nut: [202, 16, 3, 14, 1, 2, 490]
  },

  'low-carb-granola': {
    untimed: ['cooling completely'],
    d: 'A crunchy granola of almonds, pecans, seeds and unsweetened coconut, bound with egg white and lightly sweetened with maple syrup.',
    meta: 'Low-carb granola with nuts, seeds and coconut, baked for 25 minutes at 160C. Ten servings, ready in 35 minutes, plus cooling.',
    kw: ['low carb granola', 'nut and seed granola', 'granola without oats', 'baked nut granola', 'crunchy coconut granola'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Nuts and coconut go from golden to burnt in a minute or two, and a slow bake at 160C gives them time to dry out and crisp evenly.\n\nThere are no oats here, so the crunch comes from chopped almonds and pecans, pumpkin and sunflower seeds, and flaked coconut. A beaten egg white is the secret to clusters: it dries into a thin, crisp glaze that holds the pieces together. Mix it into the nuts thoroughly. A small amount of maple syrup adds flavour and colour; with ten servings it contributes little carbohydrate. **Stir the granola once, halfway through**, and press it down afterwards to form larger pieces.\n\nIt will feel soft when it comes out of the oven and crisp as it cools, so leave it alone on the tray until completely cold. Breaking it up before it has cooled gives crumbs, not clusters. Store in a jar and eat with yoghurt or milk.',
    ing: [
      '100 g almonds, roughly chopped',
      '100 g pecans, roughly chopped',
      '60 g pumpkin seeds',
      '60 g sunflower seeds',
      '50 g unsweetened desiccated coconut',
      '20 g ground flaxseed',
      '1 egg white',
      '3 tbsp coconut oil, melted',
      '2 tbsp maple syrup',
      '2 tsp ground cinnamon',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 160C and line a tray with baking paper.',
      'Mix the almonds, pecans, seeds, coconut, flaxseed, cinnamon and salt in a bowl.',
      'Whisk the egg white until frothy, then stir in the coconut oil and maple syrup. Pour over the nuts and mix well.',
      'Spread in an even layer on the tray and press down firmly.',
      'Bake for 25 minutes, stirring once halfway and pressing flat again, until golden.',
      'Cool completely on the tray, then break into clusters.'
    ],
    tips: [
      'Bake low and slow.',
      'Press the granola down to form clusters.',
      'Let it cool completely before breaking it up.'
    ],
    pair: ['Greek yoghurt', 'Fresh berries', 'Milk'],
    store: 'Keeps for 2 weeks in an airtight jar.',
    nut: [302, 7, 10, 26, 5, 4, 130]
  },

  'low-carb-meatballs': {
    d: 'Beef meatballs bound with parmesan and ground almonds, browned and simmered in passata, with almost no carbohydrate.',
    meta: 'Low-carb meatballs with parmesan and almonds in tomato sauce, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['low carb meatballs', 'meatballs without breadcrumbs', 'parmesan and almond meatballs', 'meatballs in tomato sauce', 'low carb italian dinner'],
    why: 'A weeknight dinner for four, made in one pan and ready in 35 minutes. The meatballs are bound with grated parmesan and ground almonds instead of breadcrumbs, which keeps the carbohydrate close to nothing and adds a savoury depth.\n\nThe almonds take up the juices as the meatballs cook, as breadcrumbs would, and the egg holds everything together. Use mince with some fat in it, about 15 per cent, so the meatballs stay tender. Mix with a light hand, only until combined. **Roll them to about the size of a walnut**, which cooks in 8 minutes and fits several to a spoonful of sauce.\n\nBrown the meatballs in the pan first, turning them gently, then pour in the passata and let them finish in the sauce. The sauce picks up the browned flavour from the base of the pan. They are done when there is no pink in the centre of one cut open. Serve over courgette noodles or cauliflower mash, with extra parmesan.',
    ing: [
      '500 g beef mince',
      '40 g parmesan, finely grated',
      '30 g ground almonds',
      '1 egg',
      '2 garlic cloves, crushed',
      '2 tbsp parsley, chopped',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1 tbsp olive oil',
      '300 g passata'
    ],
    st: [
      'Mix the mince, parmesan, almonds, egg, garlic, parsley, oregano and half the salt with your hands until just combined. Roll into 20 balls.',
      'Heat the oil in a wide pan and brown the meatballs for 8 minutes, turning gently.',
      'Pour in the passata and remaining salt, cover and simmer for 12 minutes until cooked through.',
      'Serve with the sauce spooned over.'
    ],
    tips: [
      'Mix lightly and do not squeeze the meat.',
      'Keep the meatballs about walnut-sized.',
      'Cut one open to check it is cooked.'
    ],
    pair: ['Courgette noodles', 'Cauliflower mash', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Freeze in the sauce for 2 months.',
    nut: [422, 32, 6, 30, 2, 4, 910]
  }
};
