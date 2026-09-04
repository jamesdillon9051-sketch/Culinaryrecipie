/** High-protein, low-carbohydrate recipe details, volume five.
    See ../details2/italian.js for the schema.

    Every carbohydrate figure here is per serving and worked from the ingredient
    list at the stated yield. It is the number that earns the Low-Carb tag and
    the number a reader counting carbohydrate will use, so it is the one to get
    right — more so than the calorie figure, which nobody acts on as precisely. */

module.exports = {
  'egg-cottage-cheese-muffins': {
    d: 'Baked egg muffins bound with cottage cheese and packed with spinach and cheddar — six to a batch, 42 g of protein a serving and 6 g of carbohydrate.',
    meta: 'Egg and cottage cheese muffins with spinach — 42 g protein, 6 g carbohydrate a serving.',
    kw: ['egg muffins', 'high protein breakfast', 'low carb breakfast', 'cottage cheese eggs'],
    why: 'Egg muffins collapse and weep because spinach is mostly water and nobody squeezes it. Wilting it first and wringing it out in a cloth is the difference between a set muffin and a wet one. Cottage cheese gives them a softer, less rubbery set than eggs alone, because the extra moisture is held in curd rather than free in the tin.',
    ing: [
      '8 large eggs',
      '200 g cottage cheese',
      '200 g spinach',
      '60 g mature cheddar, grated',
      '4 spring onions, sliced',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '0.25 tsp grated nutmeg',
      '1 tsp butter, for the tin'
    ],
    st: [
      'Heat the oven to 175C fan and butter a six-hole muffin tin thoroughly, corners included.',
      'Wilt the spinach in a dry pan for 2 minutes, then tip it into a sieve and press hard. When it stops dripping, wring it in a clean cloth. You should be left with a tight ball.',
      'Chop the squeezed spinach roughly.',
      'Whisk the eggs with the salt, pepper and nutmeg until completely uniform — streaks of white set differently and show as pale patches.',
      'Stir in the cottage cheese, spinach, spring onions and most of the cheddar.',
      'Divide between the holes, filling each about three-quarters. Scatter the last of the cheddar over.',
      'Bake 20 to 22 minutes, until risen and just set in the middle. They will sink a little as they cool, which is normal.',
      'Run a knife round each and lift them out after 5 minutes.'
    ],
    tips: [
      'Wring the spinach properly. Every failed batch of these is a wet-spinach batch.',
      'Do not fill the holes to the top. They rise like a souffle and then settle, and an overfilled tin makes a joined-up sheet.',
      'A silicone tin saves a lot of scraping — egg sticks to metal however well you grease it.'
    ],
    pair: ['Hot sauce or harissa', 'Sliced avocado', 'Strong coffee'],
    store: 'Refrigerate up to 4 days and freeze 2 months. Reheat from chilled in a 160C oven for 8 minutes; a microwave makes them weep and go rubbery.',
    nut: [446, 42, 6, 28, 2, 4, 880]
  },

  'grilled-halloumi-salad': {
    d: 'Halloumi griddled until it blisters, over a salad of herbs, cucumber and tomato with lemon and olive oil — vegetarian, 33 g of protein and 10 g of carbohydrate.',
    meta: 'Grilled halloumi and herb salad — vegetarian, 33 g protein and 10 g carbohydrate a serving.',
    kw: ['grilled halloumi salad', 'high protein vegetarian', 'low carb salad', 'halloumi recipe'],
    why: 'Halloumi squeaks and stays rubbery when it is cooked gently; it needs a genuinely hot dry pan and about ninety seconds a side, so the outside browns before the inside has time to tighten. It is also very salty, which is why nothing else in this salad is salted until the end — season it after the cheese goes on or it will be inedible.',
    ing: [
      '300 g halloumi, in 1 cm slices',
      '200 g cucumber, in half-moons',
      '250 g ripe tomatoes, in wedges',
      '20 g flat-leaf parsley, roughly chopped',
      '15 g mint leaves',
      '0.5 small red onion, finely sliced',
      '3 tbsp extra virgin olive oil',
      '2 tbsp lemon juice',
      '1 tsp dried oregano',
      '0.5 tsp black pepper',
      '1 pinch chilli flakes',
      '1 pinch flaky sea salt, to finish only'
    ],
    st: [
      'Soak the sliced onion in the lemon juice while you prepare everything else.',
      'Pat the halloumi slices dry on paper. Surface water steams and prevents browning.',
      'Heat a dry griddle or heavy frying pan over high heat for 3 minutes. No oil in the pan — the cheese has enough fat.',
      'Lay the slices down and leave them 90 seconds without moving them, until dark bars appear, then turn and give them 60 to 90 seconds more.',
      'Toss the cucumber, tomatoes, herbs and the onion with its lemon juice, the olive oil, oregano, pepper and chilli.',
      'Lay the hot halloumi over the salad.',
      'Taste now, and only now add salt. Often it needs none at all.'
    ],
    tips: [
      'Serve it the moment it comes off the heat. Halloumi turns squeaky and firm within a few minutes of cooling and does not come back.',
      'Dry the slices. Wet halloumi will not take a mark however hot the pan is.',
      'Salt at the end, if at all. The cheese carries around 1,200 mg of sodium a serving on its own.'
    ],
    pair: ['A cold dry rosé', 'Warm flatbread, for anyone not counting carbohydrate', 'Olives and pickled chillies'],
    store: 'Best eaten immediately. The salad keeps a day undressed; halloumi does not keep once cooked and is better griddled fresh.',
    nut: [512, 33, 10, 38, 4, 7, 1420]
  },

  'smoked-mackerel-pate': {
    d: 'Smoked mackerel beaten with cottage cheese, lemon and horseradish into a coarse pâté — twelve minutes, no cooking, 37 g of protein and 4 g of carbohydrate.',
    meta: 'Smoked mackerel pâté with lemon and horseradish — 37 g protein, 4 g carbohydrate, no cooking.',
    kw: ['smoked mackerel pate', 'high protein snack', 'low carb pate', 'mackerel recipe'],
    why: 'Most mackerel pâté is a third cream cheese, which softens the flavour and adds fat without protein. Swapping most of it for cottage cheese, blitzed smooth, keeps the texture and roughly doubles the protein. Beating rather than blending leaves flakes of fish in it, which is what separates a pâté worth eating from a paste.',
    ing: [
      '300 g smoked mackerel fillets, skin and any bones removed',
      '150 g cottage cheese',
      '60 g full-fat cream cheese',
      '2 tbsp lemon juice, plus zest of 1 lemon',
      '2 tsp creamed horseradish',
      '2 tbsp chopped dill',
      '2 spring onions, very finely sliced',
      '0.5 tsp black pepper',
      '1 pinch cayenne',
      '# To serve',
      '2 heads chicory, leaves separated',
      '150 g cucumber batons'
    ],
    st: [
      'Blend the cottage cheese alone for 30 seconds until completely smooth. Left in curds it makes the pâté grainy.',
      'Beat in the cream cheese, lemon zest and juice, horseradish, pepper and cayenne by hand.',
      'Flake the mackerel into the bowl in pieces roughly the size of a thumbnail.',
      'Fold with a fork, pressing about a third of the fish against the side of the bowl to break it down and leaving the rest in flakes.',
      'Stir in the dill and spring onions.',
      'Taste for lemon and heat. Smoked mackerel varies a great deal in saltiness, so season last and probably not with salt.',
      'Chill 30 minutes to firm up, and serve with the chicory leaves and cucumber for scooping.'
    ],
    tips: [
      'Check for pin bones with your fingers as you flake. There are always a few and they are unpleasant to find later.',
      'Do not blend the fish. A smooth pâté tastes of nothing but smoke; the flakes are where the flavour is.',
      'Peppered mackerel works well and means you can skip the cayenne.'
    ],
    pair: ['Rye toast, for anyone not counting carbohydrate', 'A cold pale ale', 'Pickled cucumber'],
    store: 'Refrigerate up to 3 days with the surface pressed flat and covered. It firms considerably when cold; take it out 15 minutes before serving. Does not freeze — the cottage cheese splits.',
    nut: [468, 37, 4, 34, 1, 3, 920]
  },

  'spiced-lamb-lettuce-cups': {
    d: 'Lamb mince fried hard with cumin, cinnamon and Aleppo pepper, spooned into cold lettuce cups with pickled onion — 31 g of protein and 9 g of carbohydrate.',
    meta: 'Spiced lamb lettuce cups with cumin and Aleppo pepper — 31 g protein, 9 g carbohydrate a serving.',
    kw: ['lamb lettuce cups', 'low carb lamb', 'high protein dinner', 'spiced lamb mince'],
    why: 'Mince steams instead of browning because the pan is crowded and the meat is stirred. Spreading it out and leaving it alone for four minutes gets a proper crust on the underside, and that crust is most of the flavour. The spices go in after the browning, not before, or they scorch in the time the meat needs.',
    ing: [
      '# For the lamb',
      '600 g lamb mince, 20% fat',
      '1 tbsp olive oil',
      '1 large onion, finely diced',
      '4 garlic cloves, crushed',
      '2 tsp ground cumin',
      '1 tsp ground coriander',
      '0.5 tsp ground cinnamon',
      '2 tsp Aleppo pepper',
      '1.25 tsp fine sea salt',
      '2 tbsp tomato purée',
      '2 tbsp lemon juice',
      '# For the cups',
      '2 baby gem lettuces, leaves separated',
      '0.5 red onion, finely sliced',
      '2 tbsp red wine vinegar',
      '30 g pine nuts, toasted',
      '20 g flat-leaf parsley, chopped',
      '4 tbsp thick Greek yoghurt, to serve'
    ],
    st: [
      'Put the sliced red onion in the vinegar with a pinch of salt and leave it while you cook.',
      'Heat the oil in a wide frying pan over high heat and add the lamb in one layer. Leave it 4 minutes without touching it.',
      'Break it up, turn it and cook another 3 minutes until most of it has browned. Pour off the fat if there is more than a tablespoon.',
      'Add the diced onion and cook 5 minutes over medium, scraping the browned bits off the base as it releases water.',
      'Add the garlic, cumin, coriander, cinnamon, Aleppo pepper and salt and stir 1 minute until fragrant.',
      'Stir in the tomato purée and fry 2 minutes until it darkens, then add the lemon juice and take it off the heat.',
      'Spoon into cold lettuce leaves and top with the pickled onion, pine nuts, parsley and a little yoghurt.'
    ],
    tips: [
      'Leave the mince alone for the first four minutes. Stirring straight away is why home-cooked mince is grey.',
      'Keep the lettuce in the fridge until the moment you serve. The contrast of cold crisp leaf against hot lamb is the dish.',
      '20% fat mince, not lean. Lean lamb mince goes dry and grainy at this heat.'
    ],
    pair: ['A glass of Lebanese red', 'Cucumber and mint salad', 'Warm flatbread, for anyone not counting carbohydrate'],
    store: 'Refrigerate the lamb up to 3 days and freeze 3 months. Assemble only what you are eating — leaves wilt within minutes of being filled. Reheat the lamb in a pan rather than a microwave to keep some crust.',
    nut: [392, 31, 9, 26, 3, 5, 680]
  },

  'chicken-caesar-lettuce-cups': {
    d: 'Caesar without the croutons: chicken breast seared hard, tossed in an anchovy and Parmesan dressing and served in cos leaves — 52 g of protein and 7 g of carbohydrate.',
    meta: 'Chicken Caesar lettuce cups — anchovy and Parmesan dressing, 52 g protein and 7 g carbohydrate.',
    kw: ['chicken caesar lettuce cups', 'low carb caesar', 'high protein lunch', 'caesar without croutons'],
    why: 'A Caesar dressing is an emulsion, and it splits when the oil goes in too fast — the anchovy and egg yolk need it added in a thin thread while you whisk. Anchovy is not optional and is not a garnish: it is the salt and the savour of the dressing, and a Caesar without it tastes like mayonnaise with cheese in.',
    ing: [
      '# For the chicken',
      '350 g chicken breast, in two fillets',
      '1 tbsp olive oil',
      '0.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the dressing',
      '4 anchovy fillets in oil',
      '1 egg yolk',
      '1 small garlic clove',
      '1 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '5 tbsp extra virgin olive oil',
      '30 g Parmesan, finely grated',
      '0.25 tsp black pepper',
      '# To serve',
      '2 cos or romaine hearts, leaves separated',
      '20 g Parmesan shavings'
    ],
    st: [
      'Pat the chicken dry, rub with the oil, salt and pepper, and sear in a hot pan 5 minutes on the first side and 4 on the second, until it reads 68C.',
      'Rest it 5 minutes on a board while you make the dressing. It carries on to 74C as it sits.',
      'Mash the anchovies and garlic to a paste with the flat of a knife.',
      'Whisk the paste with the egg yolk, lemon juice and mustard in a bowl.',
      'Add the olive oil a few drops at a time to begin with, whisking constantly, then in a thin steady thread once it starts to thicken.',
      'Stir in the grated Parmesan and pepper. It should coat a spoon; loosen with a teaspoon of water if it is stiffer than that.',
      'Slice the chicken across the grain, toss it through half the dressing, and pile it into the cos leaves with the rest spooned over and the Parmesan shavings on top.'
    ],
    tips: [
      'Add the oil slowly at the start. Almost every split Caesar dressing splits in the first tablespoon.',
      'Use a raw yolk you are happy to eat raw, or shop-bought mayonnaise as the base if you would rather not.',
      'The dressing is better made an hour ahead and left in the fridge — the garlic and anchovy settle down.'
    ],
    pair: ['A cold Chablis', 'A soft-boiled egg on the side', 'Sourdough, for anyone not counting carbohydrate'],
    store: 'Dressing refrigerates 2 days in a sealed jar; chicken 3 days. Do not dress the leaves ahead — they collapse within twenty minutes.',
    nut: [486, 52, 7, 27, 2, 3, 940]
  },

  'garlic-prawn-courgette-noodles': {
    d: 'Prawns cooked hard in garlic, chilli and olive oil, tossed through courgette ribbons that never see a pan — 38 g of protein and 12 g of carbohydrate.',
    meta: 'Garlic prawns with courgette noodles — 38 g protein and 12 g carbohydrate, on the table in 25 minutes.',
    kw: ['garlic prawns courgette noodles', 'low carb pasta alternative', 'high protein prawns', 'courgetti recipe'],
    why: 'Courgette noodles turn to water because people cook them. They do not need it — tossed raw through something hot they soften in about a minute and keep their bite, and any longer than that and you have soup. Salting and draining them first pulls out most of the water before it can reach the pan.',
    ing: [
      '400 g raw king prawns, peeled and deveined',
      '3 medium courgettes, about 600 g',
      '0.5 tsp fine sea salt, for the courgettes',
      '4 tbsp extra virgin olive oil',
      '6 garlic cloves, thinly sliced',
      '1 red chilli, sliced, or 1 tsp chilli flakes',
      '0.5 tsp fine sea salt',
      '1 lemon, zest and juice',
      '20 g flat-leaf parsley, chopped',
      '0.5 tsp black pepper'
    ],
    st: [
      'Spiralise or julienne the courgettes, toss with the half teaspoon of salt and leave them in a colander for 15 minutes.',
      'Squeeze them gently in a cloth. A surprising amount of water comes out, and all of it would otherwise end up in the pan.',
      'Pat the prawns completely dry.',
      'Heat 3 tablespoons of the oil in a wide pan over medium heat and add the garlic and chilli. Cook 2 minutes until the garlic is pale gold — take it off the moment it colours, because it goes bitter in seconds after that.',
      'Turn the heat to high, add the prawns in one layer and cook 90 seconds a side, until just opaque and curled into a loose C. A tight O means overcooked.',
      'Take the pan off the heat and add the lemon zest and juice, the remaining salt and pepper.',
      'Add the courgette and the last tablespoon of oil and toss for 1 minute in the residual heat only. Do not put it back on the hob.',
      'Fold through the parsley and serve at once.'
    ],
    tips: [
      'Salt and squeeze the courgette. This is the whole difference between a plate of noodles and a puddle.',
      'A loose C, not a tight O. Prawns go from perfect to rubbery in about thirty seconds.',
      'Take the pan off the heat before the courgette goes in. Residual heat is all it needs.'
    ],
    pair: ['A cold Picpoul or Vinho Verde', 'A green salad with plenty of vinegar', 'Bread to mop the oil, for anyone not counting carbohydrate'],
    store: 'Best immediately; the courgette softens within the hour. The prawns keep 2 days refrigerated and are good cold over a salad, but the assembled dish does not hold.',
    nut: [368, 38, 12, 18, 4, 8, 1100]
  },

  'smoked-salmon-scrambled-eggs': {
    d: 'Eggs scrambled slowly over low heat until barely set, with smoked salmon folded in off the heat and plenty of dill — 36 g of protein and 3 g of carbohydrate.',
    meta: 'Smoked salmon scrambled eggs with dill — 36 g protein, 3 g carbohydrate, ready in thirteen minutes.',
    kw: ['smoked salmon scrambled eggs', 'high protein breakfast', 'low carb breakfast', 'creamy scrambled eggs'],
    why: 'Scrambled eggs are ruined by heat and rescued by patience. Low heat and constant movement keeps the curds small and the texture custardy, and taking the pan off while they still look slightly underdone accounts for the cooking that carries on afterwards. The salmon goes in at the very end because it only needs warming; cooked, it goes firm and loses its silkiness.',
    ing: [
      '6 large eggs',
      '150 g smoked salmon, torn into pieces',
      '20 g butter',
      '2 tbsp crème fraîche',
      '2 tbsp chopped dill',
      '0.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '2 spring onions, finely sliced',
      '# To serve',
      '1 lemon, in wedges'
    ],
    st: [
      'Beat the eggs with the salt until uniform — no ribbons of white left.',
      'Melt the butter in a non-stick pan over LOW heat. If it foams hard the pan is too hot.',
      'Pour in the eggs and wait 20 seconds, then start moving them slowly and continuously with a spatula, pushing from the edges into the middle.',
      'Keep going for 4 to 6 minutes. It will look like nothing is happening and then thicken all at once.',
      'When they are set but still glossy and slightly loose, take the pan off the heat entirely.',
      'Fold in the crème fraîche, then the smoked salmon, dill and spring onions. The residual heat finishes the eggs and warms the fish.',
      'Grind pepper over and serve immediately with lemon.'
    ],
    tips: [
      'Low heat, and take them off early. Eggs left in a hot pan keep cooking and turn to rubber on the plate.',
      'The crème fraîche off the heat is a temperature brake as much as a flavour — it stops the carry-over cooking dead.',
      'Do not salt smoked salmon. It is already at around 1,000 mg of sodium in this quantity.'
    ],
    pair: ['Buttered rye toast, for anyone not counting carbohydrate', 'A glass of cold Champagne, if the morning warrants it', 'Strong coffee'],
    store: 'Eat immediately. Scrambled eggs do not keep and reheating them is uniformly bad. Nothing here takes more than thirteen minutes, so make them fresh.',
    nut: [432, 36, 3, 31, 0, 2, 1250]
  },

  'seared-tuna-nicoise': {
    d: 'Tuna steak seared rare, over green beans, egg, olives and tomato with an anchovy vinaigrette — the Niçoise without the potatoes, at 41 g of protein and 14 g of carbohydrate.',
    meta: 'Seared tuna Niçoise with anchovy vinaigrette — 41 g protein, 14 g carbohydrate, no potatoes.',
    kw: ['seared tuna nicoise', 'low carb salad', 'high protein salad', 'tuna steak recipe'],
    why: 'Tuna steak is a different fish from tinned tuna and wants treating like beef: a very hot pan, ninety seconds a side, and a raw ruby centre. Cooked through it is dry and grey and there is no way back. Leaving out the potatoes is not a compromise here — the classic Niçoise from Nice has no cooked vegetables in it at all, potatoes included.',
    ing: [
      '# For the salad',
      '300 g tuna steak, about 2.5 cm thick',
      '1 tbsp olive oil',
      '0.5 tsp flaky sea salt',
      '1 tsp coarsely cracked black pepper',
      '200 g fine green beans, trimmed',
      '2 large eggs',
      '200 g ripe tomatoes, in wedges',
      '60 g Niçoise or Kalamata olives',
      '2 handfuls small salad leaves',
      '2 tbsp capers, rinsed',
      '# For the vinaigrette',
      '3 anchovy fillets in oil',
      '1 small garlic clove',
      '1 tbsp red wine vinegar',
      '1 tsp Dijon mustard',
      '4 tbsp extra virgin olive oil',
      '0.25 tsp black pepper'
    ],
    st: [
      'Boil the eggs 7 minutes for a set white and a soft, bright yolk, then cool them under running water and peel.',
      'Boil the green beans 3 minutes in the same water, then drop them into cold water so they keep their colour and bite.',
      'Mash the anchovies and garlic to a paste, then whisk in the vinegar, mustard, oil and pepper.',
      'Pat the tuna dry and press the cracked pepper and salt into both faces.',
      'Heat a heavy pan with the tablespoon of oil until it is just beginning to smoke.',
      'Sear the tuna 90 seconds on each side. The outside should be brown and the centre still deep red.',
      'Rest it 3 minutes, then slice across the grain into 1 cm slices.',
      'Toss the leaves, beans, tomatoes, olives and capers with most of the vinaigrette, lay the tuna and halved eggs over, and spoon the rest across.'
    ],
    tips: [
      'Ninety seconds a side and no more. If the pan is not almost smoking, wait — a lukewarm pan cooks the tuna through before it browns.',
      'Buy the thickest steak you can. A thin one is grey before it has a crust.',
      'Cool the beans in cold water the moment they come out, or they carry on cooking and go khaki.'
    ],
    pair: ['A cold Provençal rosé', 'Bread and butter, for anyone not counting carbohydrate', 'A ripe peach afterwards'],
    store: 'Assemble to serve. Components keep separately 2 days; the tuna is good cold the next day but never reheat it. Dressed leaves are finished within the hour.',
    nut: [498, 41, 14, 28, 6, 6, 820]
  },

  'cauliflower-chicken-fried-rice': {
    d: 'Cauliflower blitzed to rice grains and fried hard with chicken thigh, egg and spring onion — the wok dish without the rice, at 41 g of protein and 14 g of carbohydrate.',
    meta: 'Chicken cauliflower fried rice — 41 g protein and 14 g carbohydrate, done in under half an hour.',
    kw: ['cauliflower fried rice', 'low carb fried rice', 'high protein chinese', 'chicken cauliflower rice'],
    why: 'Cauliflower rice goes soggy for the same reason ordinary fried rice does: too much moisture and not enough heat. Blitzed cauliflower holds a lot of water, so it goes into a dry, very hot wok first and is cooked alone for a few minutes to drive that off before anything else joins it. Crowding the pan at any stage undoes the whole thing.',
    ing: [
      '1 large cauliflower, about 800 g, in florets',
      '350 g boneless chicken thighs, in 2 cm pieces',
      '2 large eggs, beaten',
      '3 tbsp neutral oil',
      '4 garlic cloves, minced',
      '20 g fresh ginger, minced',
      '6 spring onions, whites and greens separated',
      '100 g frozen peas',
      '2 tbsp light soy sauce',
      '1 tbsp toasted sesame oil',
      '1 tbsp rice vinegar',
      '0.5 tsp white pepper',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Pulse the cauliflower in a food processor in two batches until it is the size of rice grains. Do not over-process or it turns to paste.',
      'Heat a wok or the widest pan you own over high heat, dry, and add the cauliflower. Cook 4 to 5 minutes, stirring, until it stops steaming and starts to smell nutty. Tip it out.',
      'Add 1 tablespoon of oil and the beaten egg, scramble it hard for 30 seconds and tip it out with the cauliflower.',
      'Add another tablespoon of oil and the chicken in one layer. Leave it 3 minutes, then stir-fry 3 minutes more until cooked through and browned at the edges.',
      'Add the last tablespoon of oil, the garlic, ginger and spring onion whites and stir-fry 45 seconds.',
      'Return the cauliflower and egg, add the peas, and toss over high heat for 2 minutes.',
      'Add the soy sauce, sesame oil, vinegar, white pepper and salt, toss for 30 seconds, and finish with the spring onion greens.'
    ],
    tips: [
      'Dry-fry the cauliflower first, alone. Every soggy version of this dish skips that step.',
      'Thigh rather than breast — it survives wok heat, and breast does not.',
      'Have everything chopped before the wok goes on. This dish moves quickly once it starts.'
    ],
    pair: ['Chilli crisp on top', 'A cold light lager', 'Cucumber in rice vinegar'],
    store: 'Refrigerate up to 3 days. Reheat hard in a dry pan rather than a microwave — steam is what makes it watery on the second day.',
    nut: [472, 41, 14, 26, 6, 7, 1150]
  },

  'baked-eggs-spinach-feta': {
    d: 'Eggs baked into a bed of garlicky spinach with feta crumbled over, straight from oven to table in the pan — 34 g of protein and 9 g of carbohydrate.',
    meta: 'Baked eggs with spinach and feta — 34 g protein and 9 g carbohydrate, cooked and served in one pan.',
    kw: ['baked eggs spinach feta', 'high protein breakfast', 'low carb brunch', 'baked eggs recipe'],
    why: 'Baked eggs are usually overcooked because the whole dish goes in until the whites are set, by which time the yolks are chalky. Making wells in hot spinach means the whites are already surrounded by heat and set from the sides in, so eight to ten minutes is enough. Feta is added before baking rather than after, so it softens without melting into the spinach.',
    ing: [
      '8 large eggs',
      '400 g spinach',
      '150 g feta, crumbled',
      '2 tbsp olive oil',
      '1 onion, finely sliced',
      '4 garlic cloves, sliced',
      '1 tsp ground cumin',
      '0.5 tsp Aleppo pepper or chilli flakes',
      '0.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '0.25 tsp grated nutmeg',
      '2 tbsp chopped dill'
    ],
    st: [
      'Heat the oven to 190C fan.',
      'Heat the oil in a wide ovenproof frying pan and cook the onion over medium heat for 8 minutes until soft and just golden.',
      'Add the garlic, cumin and Aleppo pepper and cook 1 minute.',
      'Add the spinach in handfuls, letting each wilt before the next goes in. Cook 3 minutes more, then tip the pan and spoon out any pooled liquid — wet spinach makes watery baked eggs.',
      'Season with the salt, pepper and nutmeg and spread the spinach level.',
      'Make eight wells with the back of a spoon and crack an egg into each.',
      'Scatter the feta between the eggs, not over the yolks.',
      'Bake 8 to 10 minutes, until the whites are just set and the yolks still move when you shake the pan. Scatter with dill and serve straight from the pan.'
    ],
    tips: [
      'Pour off the spinach liquid before the eggs go in. It is the single most common reason these come out watery.',
      'Check at eight minutes. The whites go from translucent to set very quickly and two minutes is the difference between a runny yolk and a hard one.',
      'The pan carries on cooking on the table — serve it fast, or move the eggs onto plates.'
    ],
    pair: ['Flatbread, for anyone not counting carbohydrate', 'A spoonful of thick yoghurt', 'Strong black tea'],
    store: 'Best straight from the oven. The spinach base keeps 3 days refrigerated and can be reheated and used for fresh eggs, which is the better way to make this again.',
    nut: [458, 34, 9, 32, 3, 5, 1080]
  }
};
