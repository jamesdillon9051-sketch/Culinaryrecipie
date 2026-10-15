'use strict';

/**
 * Volume fifty-seven, seventh part: the last eight vegan dishes (ramen,
 * burritos, shortbread, stew, stuffing, sushi, tikka masala, waffles).
 * Waits of an hour or more are declared as rest. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'vegan-ramen': {
    d: 'A miso and mushroom broth with wheat noodles, tofu, pak choi and sweetcorn, simmered for 15 minutes and ready in 35.',
    meta: 'Vegan ramen with miso broth, mushrooms, tofu and noodles, cooked for 25 minutes. Two servings, ready in 35 minutes.',
    kw: ['vegan ramen', 'miso ramen with tofu', 'mushroom ramen', 'vegetable ramen noodle soup', 'plant based ramen'],
    why: 'Stir the miso in last, off the boil. That one rule keeps the broth tasting rich and savoury instead of flat, because miso loses its flavour if it is cooked hard. Everything else in this bowl is built around that spoonful of paste.\n\nThe broth starts with garlic, ginger and sliced mushrooms simmered in vegetable stock for 15 minutes with a splash of tamari. The mushrooms add the savoury weight that bones or meat would give an ordinary ramen. **Fry the tofu first** in a hot pan until golden on the outside, then add it to the bowl at the end so it does not go soft in the soup.\n\nCook the noodles in a separate pan of water, drain and divide them between two bowls, because noodles left in the broth swell and soak it up. Pour the broth over, then add the pak choi, sweetcorn and tofu. A few drops of sesame oil and the spring onions finish the bowl. Chilli oil is welcome on the side.',
    ing: [
      '1 tbsp rapeseed oil',
      '150 g firm tofu, pressed and cubed',
      '2 garlic cloves, crushed',
      '1 tsp fresh ginger, grated',
      '150 g mushrooms, sliced',
      '800 ml vegetable stock',
      '1 tbsp tamari',
      '2 tbsp white miso paste',
      '200 g dried wheat ramen noodles',
      '150 g pak choi, halved',
      '80 g tinned sweetcorn, drained',
      '2 spring onions, sliced',
      '1 tsp sesame oil'
    ],
    st: [
      'Heat the oil in a pan and fry the tofu for 6 minutes until golden. Lift out.',
      'In the same pan cook the garlic and ginger for 30 seconds, add the mushrooms and cook for 4 minutes.',
      'Add the stock and tamari, bring to a simmer and cook for 15 minutes.',
      'Meanwhile boil the noodles for 4 minutes in a separate pan of water, adding the pak choi for the last minute. Drain.',
      'Take the broth off the heat and whisk in the miso.',
      'Divide the noodles and pak choi between 2 bowls, ladle over the broth and top with the tofu, sweetcorn, spring onions and sesame oil.'
    ],
    tips: [
      'Add the miso off the heat.',
      'Cook the noodles separately.',
      'Brown the tofu before it goes in the bowl.'
    ],
    pair: ['Chilli oil', 'Sesame seeds', 'Pickled ginger', 'Seaweed'],
    store: 'Keep the broth for 3 days in the fridge, separate from the noodles. Reheat gently.',
    nut: [679, 32, 95, 19, 7, 8, 2410]
  },

  'vegan-burritos': {
    d: 'Flour tortillas filled with roasted sweet potato, black beans, rice, sweetcorn and avocado, with lime and smoked paprika.',
    meta: 'Vegan burritos with roasted sweet potato, black beans and rice, cooked for 20 minutes. Four burritos, ready in 40 minutes.',
    kw: ['vegan burritos', 'sweet potato and black bean burritos', 'bean burritos with rice', 'dairy free burritos', 'plant based burrito recipe'],
    why: 'What stops a burrito from falling apart in the hand? A filling that is not wet, tortillas that are warm and a tight fold, in that order. The sweet potato is roasted, not boiled, which dries it out and concentrates its flavour, so the filling stays together instead of leaking.\n\nCut the sweet potato into 1 cm cubes and roast at 220C with oil, cumin and smoked paprika. At 20 minutes the edges should be blistered and the middle soft. Black beans are warmed with a little of the spice and mashed lightly, so they act as a glue between the other fillings. **Warm each tortilla before filling**, for 15 seconds in a dry pan, because cold ones crack at the fold.\n\nPlace the filling in a line across the lower third, keeping a 4 cm margin on each side. Fold the sides in over the filling, then roll away from you, tucking in as you go. Toast the burrito seam side down in the pan for a minute to seal it. Avocado, lime and salsa go in last.',
    ing: [
      '300 g sweet potato, cut into 1 cm cubes',
      '2 tbsp rapeseed oil',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '240 g tinned black beans, drained and rinsed',
      '300 g cooked white rice',
      '120 g tinned sweetcorn, drained',
      '240 g large flour tortillas',
      '1 avocado, sliced',
      '1 lime, juiced',
      '4 tbsp salsa',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 220C. Toss the sweet potato with the oil, half the cumin, half the paprika and the salt and roast for 20 minutes until soft and blistered.',
      'Warm the black beans with the remaining cumin and paprika in a pan for 4 minutes, mashing about a third of them.',
      'Warm the rice and sweetcorn together for 3 minutes.',
      'Warm each tortilla in a dry pan for 15 seconds.',
      'Fill each with the sweet potato, beans, rice, avocado, lime juice and salsa. Fold in the sides and roll up tightly.',
      'Toast the burritos seam side down in a dry pan for 1 minute.'
    ],
    tips: [
      'Roast the sweet potato; do not boil it.',
      'Warm the tortillas before filling.',
      'Leave a margin of tortilla at each side.'
    ],
    pair: ['Guacamole', 'Salsa', 'Lime wedges', 'Green salad'],
    store: 'Wrap in foil and keep for 2 days in the fridge. Reheat in a hot pan.',
    nut: [566, 15, 86, 18, 12, 7, 1020]
  },

  'vegan-shortbread': {
    d: 'Buttery-tasting shortbread fingers made with coconut oil, flour and cornflour, baked for 20 minutes at 160C.',
    meta: 'Vegan shortbread made with coconut oil, baked for 20 minutes at 160C. Sixteen fingers, ready in 35 minutes plus 30 minutes of chilling.',
    kw: ['vegan shortbread', 'dairy free shortbread biscuits', 'coconut oil shortbread', 'egg free shortbread fingers', 'baked shortbread without butter'],
    why: 'Keep the dough cold. That is the whole trick, and the part people skip. Coconut oil is solid when cool and runny when warm, so if the dough warms in your hands the biscuits spread and lose their sandy bite.\n\nShortbread is only flour, fat and sugar, and each does a clear job. The cornflour makes the crumb finer and more tender than flour alone. Use refined coconut oil, which has no coconut taste, and rub it in with cool fingertips until the mixture looks like damp sand. **Chill the shaped dough for 30 minutes** before it goes in the oven so the fat firms up again.\n\nBake low, at 160C, until the biscuits are pale gold at the edges. They should not brown. They will feel soft on the tray and firm up as they cool, so leave them for 10 minutes before moving them. Sprinkle with caster sugar while they are still warm so it clings. Prick the tops with a fork for the traditional pattern.',
    ing: [
      '250 g plain flour',
      '50 g cornflour',
      '75 g caster sugar',
      '170 g refined coconut oil, solid',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Mix the flour, cornflour, sugar and salt. Rub in the coconut oil with cool fingertips until like damp sand, then add the vanilla and press into a dough.',
      'Press into a lined 20 cm square tin, prick all over with a fork and score into 16 fingers. Chill for 30 minutes.',
      'Heat the oven to 160C. Bake for 20 minutes until pale gold at the edges.',
      'Sprinkle with the sugar while warm and re-cut along the lines. Cool in the tin for 10 minutes, then move to a rack.'
    ],
    tips: [
      'Keep the dough cool.',
      'Chill before baking.',
      'Cut while warm; it crumbles once cold.'
    ],
    pair: ['Tea', 'Coffee', 'Fresh berries'],
    store: 'Keeps for 1 week in an airtight tin.',
    nut: [187, 2, 20, 11, 0, 6, 40]
  },

  'vegan-stew': {
    d: 'Potatoes, carrots, parsnips and butter beans simmered for 45 minutes in a thyme and tomato broth.',
    meta: 'Vegan stew of potatoes, parsnips, carrots and butter beans, cooked for 45 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['vegan stew', 'vegetable and butter bean stew', 'dairy free winter stew', 'hearty plant based stew', 'root vegetable stew'],
    why: 'Why does a vegetable stew so often taste thin? Because the vegetables are simmered in plain water and nothing in the pot has been browned. The fix is to colour the onion and mushrooms first, add tomato purée and tamari for depth, and let the broth reduce slightly.\n\nCut the vegetables into similar-sized chunks, about 3 cm, so they finish together. Potatoes and parsnips go in first with the stock; the beans are added near the end since they are already cooked and only need to warm through. **Cook the flour in the oil for a minute** before adding the stock, which thickens the broth to a light gravy and stops it tasting watery.\n\nSimmer gently with the lid slightly off. A hard boil breaks the potatoes into mush. The stew is ready when the vegetables are soft but still hold their shape and the liquid has thickened enough to coat a spoon. Taste for salt at the end, then add thyme and bay leaves for the last 10 minutes. It is better the next day.',
    ing: [
      '2 tbsp rapeseed oil',
      '1 onion, diced',
      '200 g mushrooms, quartered',
      '2 celery sticks, sliced',
      '20 g plain flour',
      '2 tbsp tomato purée',
      '800 ml vegetable stock',
      '600 g potatoes, cut into 3 cm chunks',
      '3 carrots, cut into 3 cm chunks',
      '300 g parsnips, cut into 3 cm chunks',
      '240 g tinned butter beans, drained',
      '1 tbsp tamari',
      '1 tsp dried thyme',
      '2 bay leaves'
    ],
    st: [
      'Heat the oil in a large pot and cook the onion, mushrooms and celery for 10 minutes until golden.',
      'Stir in the flour and tomato purée and cook for 1 minute.',
      'Add the stock gradually, then the potatoes, carrots, parsnips, tamari, thyme and bay leaves.',
      'Bring to a simmer and cook with the lid slightly off for 35 minutes until the vegetables are tender.',
      'Add the butter beans and heat through for 5 minutes. Remove the bay leaves and taste for salt.'
    ],
    tips: [
      'Brown the onion and mushrooms before adding liquid.',
      'Simmer; do not boil hard.',
      'Add the beans near the end.'
    ],
    pair: ['Crusty bread', 'Dumplings', 'Steamed greens', 'Mustard'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [262, 9, 43, 6, 9, 7, 760]
  },

  'vegan-stuffing': {
    d: 'Cubes of dried bread with onion, celery, sage and chestnuts, bound with vegetable stock and baked for 30 minutes.',
    meta: 'Vegan stuffing with sage, celery and chestnuts, cooked for 40 minutes at 180C. Eight servings, ready in 1 hour.',
    kw: ['vegan stuffing', 'sage and onion stuffing without butter', 'chestnut stuffing', 'dairy free christmas stuffing', 'bread stuffing with vegetable stock'],
    why: 'Bread, onion, celery, sage and stock are the five things that make a stuffing, and the chestnuts here add a sweet, earthy note. Stuffing is built on the same few ideas wherever it appears, and none of them needs an animal product.\n\nThe butter is replaced by rapeseed oil, which cooks the onions and celery gently until sweet. Cut the bread into 2 cm cubes and dry them in a low oven so they soak up the stock evenly, rather than collapsing. **Add the stock a little at a time** and toss, stopping when the cubes are moist but not swimming. Too much stock gives a dense, soggy bake.\n\nChop the chestnuts roughly and add them last so they keep some bite. Sage is the defining herb; use fresh leaves if you can and chop them finely. Bake uncovered until the top is crisp and golden, and the middle is soft. For extra crunch, spoon the stuffing into a shallow dish rather than a deep one, which gives more surface area.',
    ing: [
      '300 g bread, cut into 2 cm cubes',
      '3 tbsp rapeseed oil',
      '1 onion, finely diced',
      '2 celery sticks, finely diced',
      '1 tbsp fresh sage, chopped',
      '1 tsp fresh thyme leaves',
      '100 g cooked chestnuts, roughly chopped',
      '350 ml vegetable stock',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180C. Spread the bread on a tray and dry in the oven for 10 minutes. Tip into a large bowl.',
      'Heat the oil and cook the onion and celery for 10 minutes until soft. Add the sage and thyme for 1 minute.',
      'Add the vegetables, chestnuts, salt and pepper to the bread.',
      'Pour the stock over a little at a time, tossing, until the cubes are moist but not soggy.',
      'Tip into an oiled shallow dish and bake for 30 minutes until the top is crisp and golden.'
    ],
    tips: [
      'Dry the bread before using it.',
      'Add the stock gradually.',
      'Use a shallow dish for more crisp top.'
    ],
    pair: ['Nut roast', 'Gravy', 'Cranberry sauce', 'Roast vegetables'],
    store: 'Keeps for 3 days in the fridge. Reheat covered at 180C for 15 minutes.',
    nut: [183, 4, 26, 7, 2, 4, 480]
  },

  'vegan-sushi': {
    d: 'Nori rolls filled with seasoned sushi rice, cucumber, avocado and carrot, cut into rounds and served with tamari.',
    meta: 'Vegan sushi rolls with cucumber, avocado and carrot, cooked for 20 minutes. Four servings, ready in 1 hour.',
    kw: ['vegan sushi', 'cucumber and avocado sushi rolls', 'vegetable maki rolls', 'plant based sushi at home', 'sushi rolls with nori'],
    why: 'A platter for a table of four, and the best part of it is the rolling. Sushi is made in stages: cook the rice, season it, let it cool, then fill and roll. None of it is difficult, but each stage rewards patience.\n\nRinse the sushi rice until the water runs nearly clear, which removes the surface starch that makes it gluey. Simmer, then rest it covered for 10 minutes. While it is warm, fold in a seasoning of rice vinegar, sugar and salt with a cutting motion, rather than stirring, which would crush the grains. **Let the rice cool to room temperature** before it touches the nori, or the sheet turns chewy and tears.\n\nPlace a nori sheet shiny side down on a bamboo mat, spread rice over it leaving a 2 cm strip at the far edge, and lay the cucumber, avocado and carrot in a line at the near edge. Roll tightly, wet the bare strip to seal and cut with a sharp, wet knife into eight pieces. Serve with tamari for dipping.',
    ing: [
      '300 g sushi rice',
      '360 ml water',
      '3 tbsp rice vinegar',
      '1 tbsp caster sugar',
      '1 tsp salt',
      '12 g nori sheets (4 sheets)',
      '1/2 cucumber, cut into matchsticks',
      '1 avocado, sliced',
      '1 carrot, cut into matchsticks',
      '2 tbsp sesame seeds',
      '4 tbsp tamari, for dipping'
    ],
    st: [
      'Rinse the rice in cold water until it runs nearly clear. Put it in a pan with the water, bring to the boil, cover and simmer for 15 minutes. Rest for 10 minutes without lifting the lid.',
      'Warm the vinegar, sugar and salt together until dissolved. Fold into the rice with a cutting motion and spread out to cool to room temperature.',
      'Place a nori sheet shiny side down on a bamboo mat. Spread a quarter of the rice over it, leaving a 2 cm strip at the far edge.',
      'Lay the cucumber, avocado and carrot along the near edge and sprinkle with the sesame seeds.',
      'Roll tightly, wet the bare edge to seal and cut each roll into 8 with a sharp, wet knife.',
      'Serve with the tamari.'
    ],
    tips: [
      'Rinse the rice well.',
      'Cool the rice before rolling.',
      'Wet the knife between cuts.'
    ],
    pair: ['Pickled ginger', 'Wasabi', 'Edamame', 'Miso soup'],
    store: 'Best eaten the day they are made. Keeps for 1 day in the fridge but the rice hardens.',
    nut: [400, 10, 72, 8, 6, 5, 1550]
  },

  'vegan-tikka-masala': {
    d: 'Cauliflower marinated in spiced coconut cream, roasted until charred and simmered in a tomato and coconut sauce with chickpeas.',
    meta: 'Vegan tikka masala with roasted cauliflower and chickpeas, cooked for 30 minutes. Four servings, ready in 45 minutes.',
    kw: ['vegan tikka masala', 'cauliflower tikka masala', 'chickpea tikka masala', 'dairy free tikka masala', 'plant based curry with coconut'],
    why: 'Roast the cauliflower first and the flavour of the curry doubles. A tray at 220C chars the edges of the florets and turns the spiced coating into something close to the smoky crust that tikka gets from a tandoor.\n\nThe marinade is coconut cream with garam masala, cumin, turmeric, paprika and lemon juice. Coat the florets well and leave them for as long as you have; even 10 minutes helps. Roast without crowding, so the pieces roast instead of steaming. **Do not skip the char**: the dark edges are where much of the flavour is.\n\nWhile the cauliflower roasts, build the sauce from onion, garlic and ginger, tomato purée and tinned tomatoes, and simmer it for 15 minutes. Stir in the coconut milk to soften and round it, then fold in the chickpeas and the roasted cauliflower. Simmer for a few minutes only, so the cauliflower keeps its shape. Rice, naan and a squeeze of lime make a full meal.',
    ing: [
      '400 g cauliflower florets',
      '60 g coconut cream',
      '2 tsp garam masala',
      '1 tsp ground cumin',
      '1 tsp ground turmeric',
      '2 tsp smoked paprika',
      '1 tbsp lemon juice',
      '2 tbsp rapeseed oil',
      '1 onion, finely diced',
      '3 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '2 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '200 ml coconut milk',
      '240 g tinned chickpeas, drained and rinsed',
      '1 tsp salt',
      '2 tbsp coriander, chopped'
    ],
    st: [
      'Heat the oven to 220C. Mix the coconut cream with half the garam masala, cumin, turmeric, half the paprika and the lemon juice. Coat the cauliflower and spread on a lined tray.',
      'Roast for 20 minutes, turning once, until charred at the edges.',
      'Meanwhile heat the oil and cook the onion for 8 minutes. Add the garlic and ginger for 1 minute.',
      'Stir in the remaining spices and the tomato purée, then add the tomatoes and salt. Simmer for 15 minutes.',
      'Stir in the coconut milk and chickpeas, then fold in the cauliflower and simmer for 3 minutes.',
      'Scatter with the coriander.'
    ],
    tips: [
      'Give the cauliflower space on the tray.',
      'Roast until the edges char.',
      'Fold the cauliflower in at the end.'
    ],
    pair: ['Basmati rice', 'Naan', 'Lime wedges', 'Cucumber salad'],
    store: 'Keeps for 3 days in the fridge. The cauliflower softens on reheating.',
    nut: [346, 10, 27, 22, 8, 10, 830]
  },

  'vegan-waffles': {
    d: 'Crisp waffles made with plain flour, soy milk and oil, with no eggs or dairy, cooked in a waffle iron.',
    meta: 'Vegan waffles with soy milk and rapeseed oil, cooked for 20 minutes in a waffle iron. Four servings, ready in 30 minutes.',
    kw: ['vegan waffles', 'egg free waffles', 'dairy free waffles', 'crisp waffles with soy milk', 'waffle iron breakfast'],
    why: 'A Sunday breakfast for a table of four, and a waffle iron that gets used for something other than collecting dust. The batter takes five minutes to mix and has no eggs, which is why the secret to the crisp crust lies in the fat and the cornflour.\n\nThe oil in the batter is what makes the outside crisp: a waffle with enough fat fries slightly against the hot plates. A spoonful of cornflour replaces some of the flour, which gives a lighter, crunchier shell. Baking powder lifts the batter, and a splash of vanilla does the flavouring. **Preheat the iron fully and grease it** before the first waffle. A cold or dry iron means the batter sticks.\n\nPour in enough batter to cover most of the plate and close the lid without pressing. Cook for about 5 minutes, until the steam slows and the waffle releases without resistance. Move cooked waffles to a rack in a warm oven, not a plate, so steam can escape and the crust stays crisp.',
    ing: [
      '200 g plain flour',
      '1 tbsp cornflour',
      '2 tsp baking powder',
      '1 tbsp caster sugar',
      '1/4 tsp salt',
      '300 ml unsweetened soy milk',
      '60 ml rapeseed oil',
      '1 tsp vanilla extract',
      '4 tbsp maple syrup, to serve'
    ],
    st: [
      'Heat the waffle iron and grease it lightly.',
      'Whisk the flour, cornflour, baking powder, sugar and salt in a bowl.',
      'Stir the soy milk, oil and vanilla together and pour into the dry mix. Whisk until just smooth.',
      'Pour batter over the plates and cook for 5 minutes until golden and the steam slows.',
      'Lift onto a rack and keep warm in a low oven. Serve with the maple syrup.'
    ],
    tips: [
      'Preheat and grease the iron.',
      'Rest waffles on a rack.',
      'Do not press the lid down.'
    ],
    pair: ['Maple syrup', 'Fresh berries', 'Plant yoghurt', 'Sliced banana'],
    store: 'Keeps for 2 days. Freeze for 1 month and toast from frozen.',
    nut: [383, 5, 57, 15, 2, 16, 440]
  }
};
