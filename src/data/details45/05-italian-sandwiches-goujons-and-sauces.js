'use strict';

/**
 * Volume forty-five — Italian dishes, sandwiches, goujons and sauces,
 * fifth part.
 *
 * Rigatoni alla vodka, orecchiette with sausage, cannelloni, lasagne
 * rolls, gnocchi with gorgonzola, polenta with mushrooms, ricotta crostini
 * and an antipasto platter, a pizza bianca, deviled ham and pinwheel
 * sandwiches, smoked salmon pate, fish and chicken goujons, and
 * bechamel and chocolate sauces. Times are the recipe's own; ovens differ,
 * so each method says when to check early. Nutrition is estimated by npm
 * run calc.
 */

module.exports = {
  'rigatoni-alla-vodka': {
    d: 'Rigatoni in a pink sauce of tomato, cream, parmesan and a splash of vodka, with a pinch of chilli.',
    meta: 'Rigatoni alla vodka: rigatoni in a creamy tomato sauce with vodka, parmesan and a pinch of chilli. Four servings, cooked for 25 minutes.',
    kw: ['rigatoni alla vodka', 'penne alla vodka style rigatoni', 'creamy vodka sauce rigatoni', 'rigatoni with vodka cream sauce', 'classic rigatoni alla vodka'],
    why: 'This is what to make in the first cold week, when a bowl of something rich and tomato-red is exactly right. The vodka does a quiet job: it helps the flavours in the tomato dissolve into the cream, which gives a smoother, rounder sauce.\n\nSoften the onion and garlic in the butter for 6 minutes, stir in the tomato purée and cook it for 2 minutes until it darkens. Pour in the vodka, step back, and let it bubble for a minute or two until the harsh smell has gone. Add the tomatoes and chilli and simmer for 10 minutes. **Add the vodka away from a flame.** The alcohol can ignite on a gas hob.\n\nStir in the cream and cook for 2 minutes more. Boil the rigatoni for 1 minute under the packet time and keep a mugful of the water.\n\nToss the pasta in the sauce with a splash of the water and most of the parmesan until glossy. Serve with the rest of the cheese.',
    ing: [
      '350 g rigatoni',
      '30 g butter',
      '1 onion, about 150 g, finely chopped',
      '3 cloves garlic, crushed',
      '2 tbsp tomato purée',
      '60 ml vodka',
      '400 g tinned chopped tomatoes',
      '1/2 tsp chilli flakes',
      '150 ml double cream',
      '50 g parmesan, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Soften the onion and garlic in the butter for 6 minutes, then stir in the tomato purée for 2 minutes.',
      'Pour in the vodka and bubble for 1 to 2 minutes, then add the tomatoes, chilli and salt and simmer for 10 minutes.',
      'Stir in the cream and cook for 2 minutes.',
      'Boil the rigatoni for 11 minutes, 1 minute under the packet time, and drain, keeping a mugful of the water.',
      'Toss the pasta in the sauce with a splash of the water and most of the parmesan. Serve with the rest.'
    ],
    tips: [
      'Cook the tomato purée first.',
      'Add the vodka off the flame.',
      'Keep some pasta water.',
      'Finish the pasta in the sauce.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Rocket', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water or milk.',
    nut: [588, 18, 75, 24, 5, 8, 510]
  },

  'orecchiette-with-sausage': {
    d: 'Little ear-shaped pasta with crumbled Italian sausage, broccoli, garlic and chilli, finished with pecorino.',
    meta: 'Orecchiette with sausage: ear-shaped pasta with Italian sausage, broccoli, garlic and chilli. Four servings, cooked for 25 minutes.',
    kw: ['orecchiette with sausage', 'orecchiette with sausage and broccoli', 'italian sausage orecchiette', 'orecchiette with broccoli and chilli', 'orecchiette with sausage and pecorino'],
    why: 'It looks like a plain bowl of pasta and eats like a stew, which is why the cupped shape matters. Orecchiette means little ears, and each one holds a bit of sausage and a bit of broccoli in the bowl of it.\n\nSqueeze the sausage meat from its skins and brown it in a wide pan for 8 minutes, breaking it into small crumbs. Small crumbs fit into the pasta. Add the garlic and chilli for a minute. Cook the broccoli in the same pot as the pasta for the last 3 minutes, so it is soft enough to break up and become part of the sauce. **Let some of the broccoli fall apart.** It thickens the sauce and clings to the sausage.\n\nDrain the pasta and broccoli, keeping a mugful of the water, and tip into the sausage pan. Toss with a splash of the water and most of the pecorino over a medium heat for a minute.\n\nServe with the remaining cheese and black pepper.',
    ing: [
      '350 g orecchiette',
      '400 g Italian sausages',
      '1 tbsp olive oil',
      '3 cloves garlic, sliced',
      '1/2 tsp chilli flakes',
      '300 g broccoli florets',
      '50 g pecorino, grated',
      '1/2 tsp black pepper'
    ],
    st: [
      'Squeeze the sausage meat from the skins and brown in the oil in a wide pan for 8 minutes, breaking it into crumbs.',
      'Add the garlic and chilli for 1 minute.',
      'Boil the orecchiette for 12 minutes, adding the broccoli for the last 3 minutes. Drain, keeping a mugful of the water.',
      'Tip the pasta and broccoli into the sausage and toss with a splash of the water and most of the pecorino for 1 minute.',
      'Serve with the rest of the pecorino and the pepper.'
    ],
    tips: [
      'Break the sausage into small crumbs.',
      'Boil the broccoli with the pasta.',
      'Let some of the broccoli break up.',
      'Keep some pasta water.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Roasted tomatoes', 'Red wine'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [717, 30, 75, 33, 5, 5, 1060]
  },

  'cannelloni': {
    d: 'Pasta tubes filled with ricotta and spinach, covered in tomato sauce and bechamel and baked until golden.',
    meta: 'Cannelloni: pasta tubes filled with ricotta and spinach under tomato sauce and bechamel. Six servings, baked for 40 minutes.',
    kw: ['cannelloni', 'ricotta and spinach cannelloni', 'baked cannelloni with tomato sauce', 'italian cannelloni with bechamel', 'spinach and ricotta cannelloni'],
    why: 'Pipe the filling in. That is the most useful instruction, because spooning ricotta into a narrow tube is slow and messy, and a piping bag, or a freezer bag with the corner cut off, fills each one in seconds.\n\nSqueeze the cooked spinach as dry as you can, since any water left in it leaks into the filling and makes the finished dish wet. Mix it with the ricotta, parmesan, egg, nutmeg and salt. Use dried tubes straight from the packet, with no pre-boiling. They soften in the sauce as they bake, provided they are fully covered. **Cover the tubes completely with sauce.** An uncovered end bakes hard.\n\nSpread a layer of tomato sauce in a baking dish, lay the filled tubes in a single layer, pour over the rest of the tomato sauce, then the bechamel, and scatter with the mozzarella.\n\nCover with foil and bake at 190°C for 25 minutes, then uncover for 15 minutes more until golden. If your oven runs hot, check at 35 minutes.',
    ing: [
      '250 g dried cannelloni tubes',
      '300 g spinach, cooked and squeezed dry',
      '500 g ricotta',
      '40 g parmesan, grated',
      '1 egg, about 50 g',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '600 g passata',
      '2 cloves garlic, crushed',
      '1 tsp dried oregano',
      '500 g bechamel sauce',
      '150 g mozzarella, grated'
    ],
    st: [
      'Heat the oven to 190°C. Mix the spinach with the ricotta, parmesan, egg, nutmeg and salt.',
      'Stir the passata with the garlic and oregano and spread a third over the base of a baking dish.',
      'Pipe the filling into the dried tubes and lay them in a single layer in the dish.',
      'Pour over the rest of the tomato sauce so that every tube is covered, then the bechamel, and scatter with the mozzarella.',
      'Cover with foil and bake for 25 minutes, then uncover and bake for 15 minutes more until golden.'
    ],
    tips: [
      'Pipe the filling in.',
      'Squeeze the spinach dry.',
      'Cover the tubes with sauce.',
      'If your oven runs hot, check at 35 minutes.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Roasted vegetables', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [520, 29, 47, 24, 4, 10, 950]
  },

  'lasagne-rolls': {
    d: 'Lasagne sheets spread with ricotta and spinach, rolled up, set in tomato sauce and baked under mozzarella.',
    meta: 'Lasagne rolls: lasagne sheets rolled round ricotta and spinach, baked in tomato sauce under mozzarella. Six servings, baked for 35 minutes.',
    kw: ['lasagne rolls', 'lasagna roll ups', 'ricotta and spinach lasagne rolls', 'baked lasagne roll ups with tomato sauce', 'lasagne roll ups with mozzarella'],
    why: 'Lasagne rolls are lasagne sheets rolled round a filling instead of layered, and the shape does something useful: each roll is one portion, so the dish serves itself, with no slicing and no collapse.\n\nBoil the sheets for 1 minute under the packet time, until pliable but not soft, and lay them out flat on a clean tea towel, because wet pasta sticks to itself. Spread each sheet with a thin layer of the ricotta mixture, leaving the last 2 cm bare, and roll it up from the short end. **Do not overfill the sheets.** The filling squeezes out of the ends in the oven.\n\nSpread half the tomato sauce in a baking dish, stand the rolls on their ends in the sauce with the spiral facing up, and spoon the rest over. Scatter with the mozzarella.\n\nBake at 190°C for 35 minutes, covered for the first 20, until bubbling and golden. If your oven runs hot, check at 30 minutes.',
    ing: [
      '12 dried lasagne sheets, about 200 g',
      '400 g ricotta',
      '150 g spinach, cooked and squeezed dry',
      '40 g parmesan, grated',
      '1 egg, about 50 g',
      '1/4 tsp ground nutmeg',
      '1/2 tsp salt',
      '700 g passata',
      '2 cloves garlic, crushed',
      '1 tsp dried oregano',
      '150 g mozzarella, grated'
    ],
    st: [
      'Heat the oven to 190°C. Boil the lasagne sheets for 8 minutes, 1 minute under the packet time, and lay them flat on a clean tea towel.',
      'Mix the ricotta with the spinach, parmesan, egg, nutmeg and salt. Spread thinly over each sheet, leaving 2 cm bare at one end, and roll up.',
      'Stir the passata with the garlic and oregano and spread half over the base of a baking dish.',
      'Stand the rolls on end in the sauce, spoon over the rest and scatter with the mozzarella.',
      'Cover with foil and bake for 20 minutes, uncover and bake for 15 minutes more until golden.'
    ],
    tips: [
      'Undercook the sheets by a minute.',
      'Do not overfill.',
      'Stand the rolls on end.',
      'If your oven runs hot, check at 30 minutes.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Rocket', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat covered until hot all the way through.',
    nut: [394, 23, 35, 18, 3, 7, 650]
  },

  'gnocchi-with-gorgonzola': {
    d: 'Potato gnocchi in a quick sauce of melted gorgonzola, cream and black pepper, finished with walnuts and sage.',
    meta: 'Gnocchi with gorgonzola: potato gnocchi in a gorgonzola and cream sauce with walnuts. Four servings, cooked for 12 minutes.',
    kw: ['gnocchi with gorgonzola', 'gnocchi in gorgonzola sauce', 'creamy gorgonzola gnocchi', 'gnocchi with gorgonzola and walnuts', 'gorgonzola cream gnocchi'],
    why: 'The first sign it is right is the smell: blue cheese melting into cream and turning sweet and sharp at the same time. It takes about two minutes in a warm pan, and then it is done.\n\nShop-bought gnocchi cooks in the time it takes to make the sauce. Drop it into boiling salted water, and it is ready when it floats, after 2 to 3 minutes. Warm the cream in a wide pan with the crumbled gorgonzola over a low heat, stirring until the cheese melts into a smooth sauce. **Keep the heat low.** Blue cheese turns grainy and oily if it boils.\n\nLift the gnocchi straight from the water into the sauce with a slotted spoon, which brings a little of the starchy water with it and loosens the sauce.\n\nToss gently, scatter with the toasted walnuts and sage, and finish with plenty of black pepper. It is rich, so a small plate with a sharp salad is plenty.',
    ing: [
      '500 g potato gnocchi',
      '150 ml double cream',
      '120 g gorgonzola, crumbled',
      '40 g walnuts, toasted and chopped',
      '8 fresh sage leaves, about 4 g',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the gnocchi in salted water for 2 to 3 minutes until they float.',
      'Meanwhile warm the cream and gorgonzola in a wide pan over a low heat for 3 minutes, stirring, until smooth.',
      'Lift the gnocchi into the sauce with a slotted spoon and toss gently.',
      'Scatter with the walnuts, sage and pepper and serve at once.'
    ],
    tips: [
      'Keep the heat low.',
      'Lift the gnocchi out with a slotted spoon.',
      'Taste before adding salt.',
      'Serve with a sharp salad.'
    ],
    pair: ['Rocket and pear salad', 'Crusty bread', 'Roasted squash', 'Dry white wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [497, 14, 45, 29, 3, 3, 930]
  },

  'polenta-with-mushrooms': {
    d: 'Creamy polenta made with stock, butter and parmesan, topped with garlicky mushrooms and thyme.',
    meta: 'Polenta with mushrooms: creamy polenta with butter and parmesan, topped with garlic and thyme mushrooms. Four servings, cooked for 30 minutes.',
    kw: ['polenta with mushrooms', 'creamy polenta with mushrooms', 'polenta with garlic mushrooms and thyme', 'soft polenta with mushroom topping', 'italian polenta and mushrooms'],
    why: 'Most home versions come out lumpy or gluey, and the fix is in how the polenta goes into the pan. Poured in all at once, the grains clump into balls that never dissolve, and poured in a thin steady stream while whisking, they spread evenly.\n\nBring the stock and milk to a simmer and rain in the polenta, whisking all the time. Turn the heat down as low as it goes and cook, stirring every few minutes, for 25 minutes for coarse polenta. It spits as it thickens, so use a deep pan and a long spoon. **Do not stop stirring in the first 2 minutes.** That is when lumps form.\n\nIt is ready when it is thick and creamy, with no gritty bite. Stir in the butter and parmesan.\n\nCook the mushrooms meanwhile in a hot pan until deeply browned, then add the garlic and thyme for a minute. Spoon the polenta into bowls, top with the mushrooms and finish with a drizzle of oil.',
    ing: [
      '700 ml vegetable stock',
      '300 ml whole milk',
      '200 g fine polenta',
      '40 g butter',
      '50 g parmesan, grated',
      '500 g mushrooms, sliced',
      '2 tbsp olive oil',
      '3 cloves garlic, crushed',
      '4 sprigs thyme, about 5 g',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Bring the stock and milk to a simmer and rain in the polenta, whisking all the time. Reduce the heat to low and cook for 25 minutes, stirring every few minutes.',
      'Stir in the butter, parmesan and half the salt.',
      'Meanwhile brown the mushrooms in the oil in a hot pan in two batches for 8 minutes each.',
      'Add the garlic, thyme, remaining salt and the pepper for 1 minute.',
      'Spoon the polenta into bowls and top with the mushrooms.'
    ],
    tips: [
      'Pour in the polenta slowly.',
      'Whisk at the start.',
      'Brown the mushrooms in batches.',
      'Add more stock if it gets too thick.'
    ],
    pair: ['Green salad', 'Roasted tomatoes', 'Crusty bread', 'Red wine'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days; reheat the polenta with milk.',
    nut: [476, 16, 49, 24, 5, 7, 1100]
  },

  'crostini-with-ricotta': {
    d: 'Slices of baguette baked until crisp and topped with whipped ricotta, honey and black pepper.',
    meta: 'Crostini with ricotta: crisp baguette slices topped with whipped ricotta, honey and pepper. Eight servings, baked for 8 minutes.',
    kw: ['crostini with ricotta', 'ricotta and honey crostini', 'whipped ricotta crostini', 'italian crostini with ricotta', 'ricotta crostini with honey and pepper'],
    why: 'It is a canape of crisp bread under a soft cream, and it fails if the bread is soft. Crostini means little toasts, and the crunch is the whole point.\n\nSlice the baguette on the diagonal into pieces about 1 cm thick, brush both sides with olive oil and spread them on a tray. Bake at 200°C for 8 minutes, turning once, until golden and crisp right through. If your oven runs hot, check at 6 minutes. **Cool them before topping.** Warm toasts melt the ricotta and go soft.\n\nWhip the ricotta with the lemon zest, salt and a splash of olive oil until light and creamy. Pushing it through a sieve first gives a smoother texture. It should hold its shape on a spoon.\n\nSpoon a generous dollop onto each toast, drizzle with honey and finish with black pepper and a few thyme leaves. Assemble just before serving. Day-old baguette slices crisp best, because they hold less moisture.',
    ing: [
      '1 baguette, about 250 g',
      '3 tbsp olive oil',
      '250 g ricotta',
      '1 lemon, about 100 g, zested',
      '1/4 tsp salt',
      '2 tbsp honey',
      '1/4 tsp black pepper',
      '2 sprigs thyme, about 2 g'
    ],
    st: [
      'Heat the oven to 200°C. Slice the baguette on the diagonal into 1 cm slices, brush both sides with 2 tbsp of the oil and spread on a tray.',
      'Bake for 8 minutes, turning once, until golden and crisp. Cool.',
      'Whip the ricotta with the lemon zest, salt and the remaining oil until light.',
      'Spoon onto the toasts and finish with the honey, pepper and thyme leaves.'
    ],
    tips: [
      'Bake until crisp right through.',
      'Cool the toasts before topping.',
      'If your oven runs hot, check at 6 minutes.',
      'Assemble at the last moment.'
    ],
    pair: ['Prosecco', 'Antipasto', 'Green olives', 'Fresh figs'],
    store: 'Keep the toasts in an airtight tin for 3 days, and the ricotta in the fridge for 2 days. Assemble when serving.',
    nut: [210, 6, 24, 10, 1, 6, 290]
  },

  'antipasto-platter': {
    d: 'A platter of cured meats, cheeses, olives, marinated artichokes, roasted peppers and breadsticks, arranged to share.',
    meta: 'Antipasto platter: cured meats, cheeses, olives, artichokes and peppers arranged to share. Eight servings, no cooking.',
    kw: ['antipasto platter', 'italian antipasto platter', 'antipasto board with cured meats and cheese', 'easy antipasto platter for a party', 'antipasto platter with olives and artichokes'],
    why: 'The most common mistake with an antipasto platter is to serve it straight from the fridge. Cold dulls cured meat and cheese, and a platter taken out 30 minutes beforehand tastes of much more.\n\nChoose a mix of textures and flavours: salty cured meats, a creamy cheese, a hard cheese, something briny, something sweet and something crisp. Fold or roll the meats rather than laying them flat, which gives the board height and makes them easy to pick up. Put the cheeses in whole wedges with a knife, or cut a few slices to start people off. **Keep wet items in small bowls.** Oil from the olives and artichokes runs across the board and makes everything greasy.\n\nFill the gaps with grapes, figs and breadsticks.\n\nPrepare it up to an hour ahead, cover it loosely and keep it in a cool room. Serve with a good loaf, napkins and plenty of small plates.',
    ing: [
      '100 g prosciutto',
      '100 g salami, sliced',
      '120 g parmesan, in chunks',
      '150 g mozzarella balls',
      '120 g green olives',
      '200 g marinated artichoke hearts, drained',
      '150 g roasted red peppers in oil, drained',
      '100 g breadsticks',
      '150 g seedless grapes',
      '2 tbsp olive oil',
      '10 g fresh basil leaves'
    ],
    st: [
      'Take the meats and cheeses out of the fridge 30 minutes ahead.',
      'Fold the prosciutto and salami and arrange them on a large board with the parmesan and mozzarella.',
      'Put the olives, artichokes and peppers in small bowls on the board.',
      'Fill the gaps with the breadsticks and grapes, drizzle the mozzarella with the oil and scatter with the basil.'
    ],
    tips: [
      'Serve at room temperature.',
      'Fold the meats.',
      'Keep wet items in bowls.',
      'Offer bread on the side.'
    ],
    pair: ['Prosecco', 'Crusty bread', 'Dry white wine', 'Green salad'],
    store: 'Best eaten on the day. Wrap leftovers separately and keep them in the fridge for 2 days.',
    nut: [325, 18, 16, 21, 2, 5, 1210]
  },

  'pizza-bianca': {
    d: 'A white pizza with no tomato sauce, topped with mozzarella, ricotta, garlic and rosemary on a flatbread base.',
    meta: 'Pizza bianca: a white pizza with mozzarella, ricotta, garlic and rosemary on a flatbread. Four servings, baked for 20 minutes.',
    kw: ['pizza bianca', 'white pizza with ricotta and mozzarella', 'pizza bianca with garlic and rosemary', 'italian white pizza', 'ricotta and mozzarella pizza bianca'],
    why: 'Pizza bianca means white pizza, and the name is literal: there is no tomato sauce, and the base is flavoured with oil, garlic and herbs. Without a sauce to hide behind, the base and the cheese have to be good.\n\nSpread the base with a thin coat of olive oil mixed with crushed garlic, and leave a clear rim. Dot the ricotta over it in spoonfuls, which makes pockets of creamy cheese between the melted mozzarella. Season with salt, pepper and a little chilli. **Drain the mozzarella well.** Its water is the usual cause of a soggy centre.\n\nBake at 230°C on a hot tray for 15 to 20 minutes, until the cheese is spotted with gold and the crust is crisp at the edges. If your oven runs hot, check at 12 minutes.\n\nFinish with rosemary, a drizzle of oil and a squeeze of lemon. A handful of rocket on top, added after baking, adds a fresh bite.',
    ing: [
      '4 flatbread pizza bases, about 400 g',
      '3 tbsp olive oil',
      '2 cloves garlic, crushed',
      '200 g mozzarella, drained and torn',
      '200 g ricotta',
      '1/2 tsp salt',
      '1/4 tsp chilli flakes',
      '2 sprigs rosemary, about 4 g',
      '1/2 lemon, juiced',
      '40 g rocket'
    ],
    st: [
      'Heat the oven to 230°C with a baking tray inside. Mix 2 tbsp of the oil with the garlic.',
      'Spread the garlic oil over the bases, leaving a rim. Top with the mozzarella and spoonfuls of ricotta and sprinkle with the salt and chilli.',
      'Bake on the hot tray for 15 to 20 minutes until golden and crisp.',
      'Scatter with the rosemary and rocket and finish with the remaining oil and the lemon juice.'
    ],
    tips: [
      'Drain the mozzarella.',
      'Heat the tray first.',
      'If your oven runs hot, check at 12 minutes.',
      'Add the rocket after baking.'
    ],
    pair: ['Green salad', 'Prosecco', 'Roasted tomatoes', 'Olives'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to crisp the base.',
    nut: [612, 26, 55, 32, 3, 4, 1140]
  },

  'deviled-ham-sandwiches': {
    d: 'A spread of finely chopped ham, mayonnaise, mustard and pickles on soft white bread, cut into triangles.',
    meta: 'Deviled ham sandwiches: chopped ham, mayonnaise, mustard and pickles on soft white bread. Four servings, no cooking.',
    kw: ['deviled ham sandwiches', 'devilled ham sandwiches', 'deviled ham spread sandwiches', 'ham salad sandwiches with pickles', 'old fashioned deviled ham sandwiches'],
    why: 'This is what to make in the first warm week, when a plate of sandwiches on a picnic rug is all the lunch anyone wants. Deviled ham is a spread, not a slice, and it is made by chopping and mixing.\n\nChop the ham very finely, or pulse it in a food processor in short bursts until it has the texture of coarse crumbs, taking care not to turn it to paste. Stir in the mayonnaise, mustard, pickles, a pinch of cayenne and a squeeze of lemon. "Deviled" means seasoned with something hot and sharp, and that is the cayenne and mustard. **Taste it before filling the bread.** The ham is salty, so you rarely need extra salt, and sometimes a little more mustard.\n\nChill the spread for 30 minutes so that it firms up and spreads cleanly. Butter the bread to its edges, which stops the filling soaking in, then spread generously.\n\nCut off the crusts if you like, slice into triangles and serve within a couple of hours.',
    ing: [
      '250 g cooked ham, very finely chopped',
      '3 tbsp mayonnaise',
      '1 tbsp yellow mustard',
      '2 tbsp finely chopped dill pickles',
      '1/4 tsp cayenne pepper',
      '1 tsp lemon juice',
      '20 g butter, softened',
      '8 slices soft white bread, about 320 g'
    ],
    st: [
      'Mix the ham with the mayonnaise, mustard, pickles, cayenne and lemon juice. Taste and adjust.',
      'Chill for 30 minutes.',
      'Butter the bread to the edges and spread the ham mixture over four slices.',
      'Top with the other slices, trim the crusts if you like, and cut into triangles.'
    ],
    tips: [
      'Chop the ham finely.',
      'Taste before assembling.',
      'Chill the spread.',
      'Butter the bread to the edges.'
    ],
    pair: ['Crisps', 'Pickles', 'Cucumber slices', 'Lemonade'],
    store: 'Best eaten within a few hours. The spread keeps in the fridge for 3 days.',
    nut: [393, 19, 41, 17, 2, 4, 1340]
  },

  'pinwheel-sandwiches': {
    d: 'Tortillas spread with cream cheese, ham and cheddar, rolled up tightly and sliced into spirals.',
    meta: 'Pinwheel sandwiches: tortillas spread with cream cheese, ham and cheddar, rolled and sliced. Twelve servings, no cooking.',
    kw: ['pinwheel sandwiches', 'cream cheese and ham pinwheel sandwiches', 'tortilla pinwheel sandwiches', 'party pinwheel sandwiches', 'ham and cheese pinwheels'],
    why: 'Most home versions come out with the filling squeezing out of the ends, and the fix is to spread a thin layer, leaving a clear border. A pinwheel is a roll, and a roll holds together only if the filling has room to move.\n\nSoften the cream cheese for half an hour so that it spreads easily, and mix it with the chives, a little mustard and salt. Spread it thinly over each tortilla to within 2 cm of the edge, and lay the ham and cheese on top in a single layer. **Roll as tightly as you can.** A loose roll falls apart when it is cut.\n\nWrap each roll in cling film and chill it for 30 minutes. This firms up the cream cheese so that it acts like glue, and makes the slicing clean.\n\nTrim the ends, then cut each roll into 2 cm slices with a sharp serrated knife, using a sawing motion. Arrange them cut-side up on a platter.',
    ing: [
      '4 large flour tortillas, about 240 g',
      '200 g cream cheese, softened',
      '10 g chives, chopped',
      '1 tsp yellow mustard',
      '1/4 tsp salt',
      '150 g sliced ham',
      '100 g cheddar, grated'
    ],
    st: [
      'Mix the cream cheese with the chives, mustard and salt.',
      'Spread thinly over each tortilla to within 2 cm of the edge. Lay the ham in a single layer and scatter with the cheddar.',
      'Roll each tortilla up tightly, wrap in cling film and chill for 30 minutes.',
      'Trim the ends and cut into 2 cm slices with a serrated knife.'
    ],
    tips: [
      'Spread the filling thin.',
      'Roll tightly.',
      'Chill before cutting.',
      'Use a serrated knife.'
    ],
    pair: ['Crisps', 'Carrot sticks', 'Grapes', 'Cucumber slices'],
    store: 'Keeps in the fridge for 2 days, wrapped.',
    nut: [171, 7, 11, 11, 1, 1, 440]
  },

  'smoked-salmon-pate': {
    d: 'A smooth pate of smoked salmon, cream cheese, lemon juice and dill, served with oatcakes or crackers.',
    meta: 'Smoked salmon pate: smoked salmon blended with cream cheese, lemon and dill. Six servings, no cooking.',
    kw: ['smoked salmon pate', 'easy smoked salmon pate', 'smoked salmon and cream cheese pate', 'smoked salmon pate with dill', 'creamy smoked salmon pate'],
    why: 'It looks like a restaurant starter and takes five minutes, which is why it is a dinner party favourite. Smoked salmon, cream cheese and lemon blend into something far more refined than the sum of its parts.\n\nUse offcuts if you can find them, because they are cheaper and make a perfectly good pate. Put the salmon, cream cheese, lemon juice and a little cream into a food processor and pulse until almost smooth, leaving a little texture. Overblending makes it pasty. **Pulse, do not run the motor.** A rough pate has more character than a smooth one.\n\nStir in the dill and black pepper by hand. Taste before adding any salt, because smoked salmon is already salty.\n\nPack the pate into a ramekin, smooth the top and chill for 20 minutes so that it firms. Serve with oatcakes, crackers or cucumber slices, and a wedge of lemon. A spoonful of horseradish stirred in gives the pate a little heat.',
    ing: [
      '200 g smoked salmon',
      '150 g cream cheese',
      '2 tbsp double cream',
      '1 tbsp lemon juice',
      '10 g fresh dill, chopped',
      '1/4 tsp black pepper',
      '100 g oatcakes'
    ],
    st: [
      'Pulse the salmon, cream cheese, cream and lemon juice in a food processor until almost smooth.',
      'Stir in the dill and pepper by hand and taste.',
      'Pack into a ramekin, smooth the top and chill for 20 minutes.',
      'Serve with the oatcakes and lemon wedges.'
    ],
    tips: [
      'Use salmon offcuts.',
      'Pulse, do not run the motor.',
      'Taste before adding salt.',
      'Chill before serving.'
    ],
    pair: ['Toast', 'Oatcakes', 'Cucumber slices', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days, covered.',
    nut: [206, 9, 11, 14, 1, 1, 630]
  },

  'fish-goujons': {
    d: 'Strips of white fish coated in flour, egg and breadcrumbs and baked until crisp, served with tartare sauce.',
    meta: 'Fish goujons: strips of white fish in a crisp breadcrumb coating, baked for 10 minutes. Four servings.',
    kw: ['fish goujons', 'crispy fish goujons', 'baked fish goujons', 'homemade fish goujons with tartare sauce', 'cod goujons'],
    why: 'Goujons are strips of fish coated in breadcrumbs, and the name comes from a small river fish. They are what fish fingers aspire to be: crisp outside and soft, moist and flaky within.\n\nCut firm white fish such as cod or haddock into strips about 2 cm wide and 8 cm long. Pat them dry, since a wet strip sheds its coating. Dip each in flour, then beaten egg, then breadcrumbs mixed with a little parmesan and paprika, pressing the crumbs on firmly. **Use panko if you have it.** Its large, airy flakes give a crunchier crust than fine breadcrumbs.\n\nSpread the goujons on a hot, oiled tray with space around each, drizzle with oil and bake at 220°C for 10 minutes, turning once. If your oven runs hot, check at 8 minutes. They should be golden and the fish should flake.\n\nServe straight away with tartare sauce and lemon.',
    ing: [
      '500 g cod fillet, cut into strips',
      '40 g plain flour',
      '2 eggs, about 100 g, beaten',
      '80 g panko breadcrumbs',
      '20 g parmesan, grated',
      '1/2 tsp smoked paprika',
      '1/2 tsp salt',
      '2 tbsp vegetable oil',
      '4 tbsp tartare sauce',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 220°C and put an oiled tray inside. Pat the fish dry.',
      'Mix the panko with the parmesan, paprika and salt.',
      'Dip the strips in the flour, then the egg, then the crumbs, pressing on firmly.',
      'Lay on the hot tray, drizzle with the oil and bake for 10 minutes, turning once, until golden.',
      'Serve with the tartare sauce and lemon wedges.'
    ],
    tips: [
      'Dry the fish first.',
      'Use panko.',
      'If your oven runs hot, check at 8 minutes.',
      'Preheat the tray.'
    ],
    pair: ['Oven chips', 'Peas', 'Tartare sauce', 'Lemon wedges'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; reheat in a hot oven.',
    nut: [381, 31, 26, 17, 1, 2, 630]
  },

  'chicken-goujons': {
    d: 'Strips of chicken breast coated in flour, egg and seasoned breadcrumbs and shallow-fried until golden and crisp.',
    meta: 'Chicken goujons: strips of chicken breast in a seasoned breadcrumb coating, fried for 12 minutes. Four servings.',
    kw: ['chicken goujons', 'crispy chicken goujons', 'homemade chicken goujons', 'breaded chicken goujons', 'chicken goujons with dipping sauce'],
    why: 'It looks like a nugget and eats like a proper piece of chicken, which is why the cut matters. Strips of whole breast stay juicy in a way that minced and reformed chicken does not.\n\nCut the breasts lengthways into strips about 2 cm wide. If one end is thick, press it flat so that all the strips are even. Season the flour with salt, pepper and paprika, which seasons the chicken itself, not only the crust. Dip each strip in flour, shaking off the extra, then in beaten egg, then in the crumbs, pressing firmly. **Rest the coated strips for 5 minutes.** The coating sets and stays on in the pan.\n\nHeat the oil in a wide pan until a crumb sizzles at once, and fry the goujons in two batches for 5 to 6 minutes, turning once, until deep golden and cooked through.\n\nDrain on kitchen paper and serve with a dip.',
    ing: [
      '600 g chicken breast, cut into strips',
      '50 g plain flour',
      '1/2 tsp smoked paprika',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '2 eggs, about 100 g, beaten',
      '100 g dried breadcrumbs',
      '60 ml vegetable oil, for shallow frying',
      '100 g honey mustard dip'
    ],
    st: [
      'Mix the flour with the paprika, salt and pepper on a plate.',
      'Dip the chicken strips in the flour, then the egg, then the breadcrumbs, pressing firmly. Rest for 5 minutes.',
      'Heat the oil in a wide pan until a crumb sizzles at once.',
      'Fry in two batches for 5 to 6 minutes, turning once, until deep golden and cooked through. Drain on kitchen paper.',
      'Serve with the dip.'
    ],
    tips: [
      'Cut the strips even.',
      'Rest the coated strips.',
      'Fry in two batches.',
      'Check the middle of the thickest one.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Green salad', 'Corn on the cob'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven.',
    nut: [482, 42, 29, 22, 2, 2, 840]
  },

  'bechamel-sauce': {
    d: 'A smooth white sauce of butter, flour and milk, flavoured with nutmeg and a bay leaf, for lasagne, gratins and pies.',
    meta: 'Bechamel sauce: butter, flour and milk cooked into a smooth white sauce with nutmeg. Six servings, cooked for 10 minutes.',
    kw: ['bechamel sauce', 'classic bechamel sauce', 'easy bechamel sauce for lasagne', 'french white sauce with nutmeg', 'smooth bechamel sauce'],
    why: 'Bechamel is one of the foundation sauces of French cooking, and it is also the white sauce on a lasagne and in a cauliflower cheese. It is made from three things, and its only difficulty is lumps.\n\nWarm the milk with the bay leaf and nutmeg until it is steaming but not boiling. Melt the butter in a separate pan, stir in the flour and cook for 1 minute, until it looks like wet sand and smells slightly nutty. Add the warm milk a ladle at a time, whisking after each, until each is fully absorbed. **Warm the milk first.** Cold milk poured onto a hot roux is the usual cause of lumps.\n\nSimmer for 8 minutes, stirring, until the sauce coats the back of a spoon. It should be thick enough to hold a line drawn through it with a finger.\n\nSeason with salt and white pepper. If lumps do form, whisk hard or pass it through a sieve.',
    ing: [
      '600 ml whole milk',
      '1 bay leaf',
      '1/4 tsp ground nutmeg',
      '40 g butter',
      '40 g plain flour',
      '1/2 tsp salt',
      '1/4 tsp white pepper'
    ],
    st: [
      'Warm the milk with the bay leaf and nutmeg until steaming. Do not boil.',
      'Melt the butter in a pan over a medium heat, stir in the flour and cook for 1 minute.',
      'Add the warm milk a ladle at a time, whisking until smooth after each.',
      'Simmer for 8 minutes, stirring, until it coats a spoon.',
      'Remove the bay leaf and season with the salt and pepper.'
    ],
    tips: [
      'Warm the milk first.',
      'Add it gradually.',
      'Whisk throughout.',
      'Sieve it if lumps form.'
    ],
    pair: ['Lasagne', 'Cauliflower', 'Ham and leek bake', 'Croque monsieur'],
    store: 'Keeps in the fridge for 3 days with cling film pressed onto the surface. Reheat gently with a splash of milk.',
    nut: [137, 4, 10, 9, 0, 5, 240]
  },

  'chocolate-sauce': {
    d: 'A glossy sauce of dark chocolate, cream, butter and a spoonful of golden syrup, for ice cream and puddings.',
    meta: 'Chocolate sauce: dark chocolate melted with cream, butter and golden syrup into a glossy sauce. Eight servings, cooked for 8 minutes.',
    kw: ['chocolate sauce', 'easy chocolate sauce', 'dark chocolate sauce with cream', 'glossy chocolate sauce for ice cream', 'homemade chocolate sauce'],
    why: 'Chop the chocolate small. That is the most useful instruction, because small pieces melt quickly and evenly in warm cream, and large chunks leave streaks and grains. Use a dark chocolate you would eat on its own.\n\nHeat the cream, butter and golden syrup in a small pan until the edges just start to bubble, then take the pan off the heat. Tip in the chocolate and leave it for 2 minutes without stirring. **Let the chocolate sit before stirring.** The heat of the cream does the melting, and stirring too early cools it and leaves lumps.\n\nWhisk gently from the middle outwards until the sauce is smooth and glossy, then stir in the vanilla and a pinch of salt.\n\nServe it warm. If it thickens as it cools, warm it for a few seconds in the microwave or stir in a spoonful of hot cream. It keeps well and sets into a spoonable ganache when cold.',
    ing: [
      '150 g dark chocolate, finely chopped',
      '150 ml double cream',
      '20 g butter',
      '1 tbsp golden syrup',
      '1/2 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the cream, butter and golden syrup in a small pan until the edges just start to bubble.',
      'Take off the heat, add the chocolate and leave for 2 minutes.',
      'Whisk gently from the middle outwards until smooth and glossy.',
      'Stir in the vanilla and salt and serve warm.'
    ],
    tips: [
      'Chop the chocolate small.',
      'Take the pan off the heat first.',
      'Let it sit before whisking.',
      'Reheat gently if it thickens.'
    ],
    pair: ['Vanilla ice cream', 'Profiteroles', 'Fresh strawberries', 'Waffles'],
    store: 'Keeps in the fridge for 1 week. Warm gently before serving.',
    nut: [191, 1, 13, 15, 2, 11, 30]
  }
};
