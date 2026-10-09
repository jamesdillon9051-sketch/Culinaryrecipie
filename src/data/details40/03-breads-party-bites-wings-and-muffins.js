'use strict';

/**
 * Volume forty — scones, breads, party bites, wings and muffins.
 *
 * Things to bake for a tea table or a party: scones and focaccia, pull-apart
 * breads, cocktail bites and wings, and a run of fruit muffins. Times are
 * the recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'fruit-scones': {
    d: 'Tall, tender scones studded with sultanas, split and eaten warm with butter or jam.',
    meta: 'Fruit scones: tall, tender scones studded with sultanas, baked for 15 minutes and eaten warm with butter or jam. Makes eight.',
    kw: ['fruit scones', 'easy fruit scones', 'sultana scones', 'british fruit scones', 'homemade fruit scones'],
    why: 'A scone is a quick bread, and the secret to the rise is cold butter and a light hand. Rubbing the butter into the flour until it looks like fine crumbs coats the flour in fat, which keeps the crumb tender.\n\nStir in the milk with a knife, just until the dough comes together. **Handle it as little as possible.** Kneading makes scones tough and low.\n\nPat the dough out to 3 cm thick, not thinner, and cut straight down with a floured cutter. Do not twist the cutter, because a twisted edge cannot rise evenly. Turn the scones upside down on the tray if you want the straightest sides.\n\nGlaze the tops with beaten egg, taking care not to let it run down the sides, and bake at 220°C for 15 minutes. If your oven runs hot, check at 12 minutes. They should be risen and golden, and sound hollow when tapped underneath.',
    ing: [
      '350 g self-raising flour',
      '1 tsp baking powder',
      '85 g cold butter, cubed',
      '3 tbsp caster sugar',
      '100 g sultanas',
      '175 ml milk',
      '1 egg, beaten, for the glaze',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Rub the butter into the flour, baking powder, salt and sugar until the mixture looks like fine crumbs.',
      'Stir in the sultanas, then add the milk and mix with a knife until it just forms a dough.',
      'Pat the dough to 3 cm thick on a floured surface. Cut eight rounds with a 6 cm cutter, pressing straight down.',
      'Set the scones on the tray, brush the tops with egg and bake for 15 minutes until risen and golden.'
    ],
    tips: [
      'Keep the butter cold.',
      'Cut straight down and do not twist the cutter.',
      'If your oven runs hot, check at 12 minutes.',
      'Let them stand for 5 minutes before splitting.'
    ],
    pair: ['Strawberry jam', 'Clotted cream', 'Salted butter', 'Hot tea'],
    store: 'Best on the day. Keeps in a tin for 2 days and warms through in a 160°C oven for 5 minutes.',
    nut: [310, 6, 49, 10, 2, 13, 150]
  },

  'herb-focaccia': {
    d: 'A high, olive-oil-rich Italian flatbread with a dimpled top, fresh rosemary and thyme, and flaky salt.',
    meta: 'Herb focaccia: a high, oily, dimpled Italian flatbread with rosemary, thyme and flaky salt. Eight servings, baked for 25 minutes.',
    kw: ['herb focaccia', 'rosemary focaccia', 'homemade focaccia bread', 'italian herb focaccia', 'focaccia with olive oil'],
    why: 'The first cold weeks of autumn are when focaccia earns its place: a warm oven, the smell of rosemary, and bread that needs very little from you.\n\nThe dough is wet, much wetter than a loaf, which is where the open, airy crumb comes from. Do not add flour to make it easier to handle. **Oiled hands are the tool, not flour.** Stir it for 2 minutes in the bowl, cover, and let time do the kneading.\n\nPour most of the oil into the tin, tip the dough in and stretch it to the corners. If it springs back, rest it for 10 minutes and try again. Dimple the surface firmly with your fingertips, right down to the tin.\n\nScatter the herbs and flaky salt, and bake at 220°C for 25 minutes until deep gold. If your oven runs hot, check at 20 minutes. Tip it onto a rack, because a hot tin steams the base.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action yeast',
      '10 g salt',
      '400 ml warm water',
      '6 tbsp olive oil',
      '1 tbsp rosemary leaves',
      '1 tbsp thyme leaves',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Mix the flour, yeast and salt in a large bowl. Add the water and 2 tbsp of the oil and stir for 2 minutes into a wet, shaggy dough. Cover and leave for 1 hour.',
      'Pour 3 tbsp of the oil into a 23 by 33 cm tin. Tip the dough in, stretch it towards the corners, cover and leave for 30 minutes.',
      'Heat the oven to 220°C. Dimple the dough firmly with oiled fingers, drizzle with the last oil and scatter over the herbs and flaky salt.',
      'Bake for 25 minutes until deep gold. Turn out onto a rack.'
    ],
    tips: [
      'Use oiled hands, not flour.',
      'Dimple right down to the tin.',
      'If your oven runs hot, check at 20 minutes.',
      'Cool on a rack so the base stays crisp.'
    ],
    pair: ['Balsamic vinegar', 'Olive oil for dipping', 'Tomato soup', 'Red wine'],
    store: 'Best on the day. Keeps wrapped for 2 days and crisps up again in a 180°C oven for 5 minutes.',
    rest: [90, 'Rising'],
    nut: [260, 6, 32, 12, 2, 3, 1090]
  },

  'garlic-pull-apart-bread': {
    d: 'Balls of pizza dough tossed in garlic butter and parsley, baked in a loaf tin and torn apart at the table.',
    meta: 'Garlic pull apart bread: balls of dough tossed in garlic butter and parsley, baked for 25 minutes. Eight servings.',
    kw: ['garlic pull apart bread', 'easy garlic pull apart bread', 'garlic butter pull apart', 'garlic dough balls', 'baked garlic bread bites'],
    why: 'Garlic bread for a crowd, without a loaf to slice. A table of eight reaches in and tears off a piece, so nobody needs a knife.\n\nStart with 500 g of ready-made pizza dough, cut into 24 pieces and rolled into balls. Each ball gets coated in garlic butter, so the garlic reaches every layer instead of only the top. **Use melted butter, not cold, so it coats evenly.**\n\nStir the crushed garlic and parsley into the butter and toss the balls until each is glossy. Pack them snugly in a lined loaf tin, because they rise into each other and form the layers you pull apart.\n\nBake at 190°C for 25 minutes. If your oven runs hot, check at 20 minutes. The top should be deep gold and the gaps between the balls cooked through. Brush any butter left in the bowl over the top. Set the loaf tin on the table with a stack of napkins and let everyone tear off their own.',
    ing: [
      '500 g ready-made pizza dough',
      '80 g butter, melted',
      '4 cloves garlic, crushed',
      '2 tbsp chopped parsley',
      '100 g mozzarella, grated',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 190°C and line a 23 cm loaf tin. Cut the dough into 24 pieces and roll each into a ball.',
      'Mix the butter, garlic, parsley and salt. Toss the dough balls in the butter until coated.',
      'Pack the balls into the tin, scattering the mozzarella between the layers.',
      'Bake for 25 minutes until deep gold. Brush with any remaining butter and serve hot.'
    ],
    tips: [
      'Coat every ball in the butter.',
      'Pack the tin snugly.',
      'If your oven runs hot, check at 20 minutes.',
      'Serve it hot, straight from the tin.'
    ],
    pair: ['Marinara sauce', 'Green salad', 'Tomato soup', 'Cold lager'],
    store: 'Best hot. Keeps in the fridge for 2 days and reheats in a 160°C oven for 10 minutes.',
    nut: [281, 9, 32, 13, 2, 2, 540]
  },

  'sausage-pull-apart': {
    d: 'Pizza dough balls wrapped around cooked sausage slices and cheddar, baked together into one tear-and-share loaf.',
    meta: 'Sausage pull apart: pizza dough balls wrapped around sausage slices and cheddar, baked for 25 minutes. Eight servings.',
    kw: ['sausage pull apart', 'sausage pull apart bread', 'sausage and cheese pull apart', 'sausage dough balls', 'tear and share sausage bread'],
    why: 'This is a Sunday dish for a table of eight, or the thing to put out at a party. A loaf of bread with sausage in every piece is hard to improve on for a hungry crowd.\n\nThe filling is cooked sausage, sliced thin, with cheddar and a spoonful of mustard. Use sausages that are already cooked, because the bread only bakes for 25 minutes and raw meat would not be safe in that time. **Slice the sausage thin so it fits inside the dough.**\n\nFlatten each piece of dough, put a slice of sausage and a little cheese in the middle, and pinch it closed. Seal the seams well, or the cheese leaks.\n\nPack the balls in a loaf tin, brush with butter and bake at 190°C for 25 minutes. If your oven runs hot, check at 20 minutes. The loaf is done when it is deep gold and the cheese is bubbling in the gaps.',
    ing: [
      '500 g ready-made pizza dough',
      '300 g cooked pork sausages, thinly sliced',
      '150 g mature cheddar, grated',
      '2 tsp wholegrain mustard',
      '40 g butter, melted',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 190°C and line a 23 cm loaf tin. Divide the dough into 20 pieces.',
      'Flatten each piece, spread with a little mustard and top with a slice of sausage and some cheddar. Pinch the edges together to seal.',
      'Pack the balls into the tin, seam-side down, and brush with the melted butter.',
      'Bake for 25 minutes until deep gold. Scatter with the parsley.'
    ],
    tips: [
      'Use sausages that are already cooked.',
      'Seal each ball properly.',
      'If your oven runs hot, check at 20 minutes.',
      'Serve while the cheese is still molten.'
    ],
    pair: ['Brown sauce', 'Coleslaw', 'Pickles', 'Cold lager'],
    store: 'Best hot. Keeps in the fridge for 2 days and reheats in a 160°C oven for 10 minutes.',
    nut: [390, 15, 33, 22, 2, 2, 760]
  },

  'pizza-pull-apart': {
    d: 'Pizza dough balls tossed with pepperoni, mozzarella cubes and tomato sauce, baked in a ring and served with extra sauce.',
    meta: 'Pizza pull apart: pizza dough balls baked with pepperoni, mozzarella and tomato sauce, tear-and-share style. Eight servings, 25 minutes.',
    kw: ['pizza pull apart', 'pizza pull apart bread', 'pepperoni pull apart', 'pizza bites pull apart', 'tear and share pizza'],
    why: 'Most home pizza bites come out dry because the sauce goes on the outside and runs off. The fix is to put the sauce in the middle of the bread.\n\nCut 500 g of ready-made dough into 20 pieces and flatten each one. Put a pinch of mozzarella, a slice of pepperoni and half a teaspoon of sauce in the middle, and seal. **Less sauce inside is better than more**, because a leaking ball makes the neighbours soggy.\n\nPack the balls into a loaf tin and top with the rest of the mozzarella and pepperoni. Brush with oil and sprinkle with oregano.\n\nBake at 190°C for 25 minutes, until the top is deep gold and the cheese is spotted brown. If your oven runs hot, check at 20 minutes. Warm the remaining sauce for dipping at the table. Cut any balls that leaked in half before serving, as the crisp edges are the part people fight over.',
    ing: [
      '500 g ready-made pizza dough',
      '150 g pepperoni slices',
      '200 g mozzarella, grated',
      '150 g tomato pizza sauce',
      '1 tbsp olive oil',
      '1 tsp dried oregano'
    ],
    st: [
      'Heat the oven to 190°C and line a 23 cm loaf tin. Cut the dough into 20 pieces and flatten each into a disc.',
      'Put a pinch of the mozzarella, a pepperoni slice and half a teaspoon of the sauce on each disc, then fold up and pinch shut.',
      'Pack into the tin and top with the remaining mozzarella and pepperoni. Brush with the oil and sprinkle with the oregano.',
      'Bake for 25 minutes until deep gold. Warm the rest of the sauce to serve alongside.'
    ],
    tips: [
      'Go easy on the sauce inside the balls.',
      'Pinch the seams shut.',
      'If your oven runs hot, check at 20 minutes.',
      'Serve with warm sauce for dipping.'
    ],
    pair: ['Marinara dip', 'Green salad', 'Garlic mayonnaise', 'Cold lemonade'],
    store: 'Best hot. Keeps in the fridge for 2 days and reheats in a 160°C oven for 10 minutes.',
    nut: [358, 16, 33, 18, 2, 3, 800]
  },

  'pretzel-bites': {
    d: 'Bite-sized pretzels made from a two-ingredient yoghurt dough, dipped in bicarbonate water and baked until dark and glossy.',
    meta: 'Pretzel bites: a two-ingredient yoghurt dough dipped in bicarbonate water and baked for 8 minutes until glossy. Six servings.',
    kw: ['pretzel bites', 'homemade pretzel bites', 'yoghurt dough pretzel bites', 'soft pretzel bites', 'pretzel bites with salt'],
    why: 'Bake them hot. That is most of the recipe, and the part people skip.\n\nThe dough is self-raising flour and Greek yoghurt, nothing else, so there is no yeast and no waiting. Mix it into a shaggy ball, knead for 2 minutes until it is smooth, and roll it into ropes as thick as a finger. Cut the ropes into 2 cm pieces.\n\nThe pretzel flavour comes from the bath. Drop the pieces into boiling water with bicarbonate of soda for 30 seconds, which changes the surface so it browns deeply in the oven. **Do not skip the bath, or you have a bread roll.** Lift them out with a slotted spoon and drain.\n\nBrush with beaten egg, scatter with coarse salt and bake at 220°C for 8 minutes. If your oven runs hot, check at 6 minutes. They should be dark gold. Offer them warm, because a pretzel cooled for an hour loses the chew that makes it worth the bath.',
    ing: [
      '300 g self-raising flour',
      '300 g Greek yoghurt',
      '1/2 tsp salt',
      '30 g bicarbonate of soda',
      '1.5 litres water',
      '1 egg, beaten',
      '1 tsp coarse sea salt'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Mix the flour, yoghurt and salt into a dough and knead for 2 minutes.',
      'Roll the dough into ropes the thickness of a finger and cut them into 2 cm pieces.',
      'Bring the water and bicarbonate to the boil. Drop in the pieces in batches for 30 seconds each and lift out with a slotted spoon.',
      'Set on the tray, brush with egg, scatter with the coarse salt and bake for 8 minutes until dark gold.'
    ],
    tips: [
      'Do not skip the bicarbonate bath.',
      'Cut the pieces to the same size.',
      'If your oven runs hot, check at 6 minutes.',
      'Serve warm with mustard or cheese sauce.'
    ],
    pair: ['Grainy mustard', 'Cheese dip', 'Cold lager', 'Sliced apple'],
    store: 'Best on the day. Keeps in a tin for 1 day and reheats in a 180°C oven for 4 minutes.',
    nut: [240, 11, 40, 4, 2, 2, 1990]
  },

  'bacon-cheeseburger-bites': {
    d: 'Mini baked meatballs of beef, bacon and cheddar, seasoned like a cheeseburger and served with ketchup and mustard.',
    meta: 'Bacon cheeseburger bites: mini baked meatballs of beef, bacon and cheddar. Twelve servings of two bites, baked for 18 minutes.',
    kw: ['bacon cheeseburger bites', 'cheeseburger meatballs', 'baked bacon cheeseburger bites', 'mini cheeseburger bites', 'cheeseburger bites for parties'],
    why: 'A cheeseburger is beef, bacon, cheese and a squeeze of ketchup. Here those ingredients are rolled into one mouthful, and baked rather than fried.\n\nThe mixture works because the bacon is chopped fine. Big pieces of raw bacon stay chewy, and fine ones melt into the beef. **Do not overwork the mixture.** Mix until just combined, as a firm squeeze makes the bites dense.\n\nShape them to the size of a walnut, about 25 g each, so they cook through at the same pace. Wet your hands to stop the mixture sticking.\n\nBake at 200°C for 18 minutes on a lined tray, until browned and cooked through. If your oven runs hot, check at 14 minutes. Cut one open to check there is no pink left inside. Serve with ketchup, mustard and a pot of pickle slices. Spear each one with a cocktail stick and put the sauces in small bowls so people can dip as they like.',
    ing: [
      '500 g beef mince',
      '120 g streaky bacon, finely chopped',
      '80 g mature cheddar, grated',
      '1 tsp garlic powder',
      '1 tbsp ketchup',
      '1 tsp mustard',
      '1 tsp Worcestershire sauce',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C and line a tray. Mix the mince, bacon, cheddar, garlic powder, ketchup, mustard, Worcestershire sauce, salt and pepper until just combined.',
      'Shape the mixture into 24 balls, each about 25 g, with damp hands.',
      'Set the balls on the tray and bake for 18 minutes until browned and cooked through.',
      'Rest for 3 minutes and serve with ketchup and mustard.'
    ],
    tips: [
      'Chop the bacon finely.',
      'Mix lightly.',
      'If your oven runs hot, check at 14 minutes.',
      'Cut one open to be sure it is cooked.'
    ],
    pair: ['Ketchup', 'Mustard', 'Pickle slices', 'Cold lemonade'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 8 minutes.',
    nut: [138, 11, 1, 10, 0, 0, 340]
  },

  'cocktail-sausages': {
    d: 'Small sausages roasted until browned and tossed in a sticky honey and wholegrain mustard glaze.',
    meta: 'Cocktail sausages: small sausages roasted and tossed in a sticky honey and mustard glaze. Eight servings, 20 minutes in the oven.',
    kw: ['cocktail sausages', 'honey mustard cocktail sausages', 'glazed cocktail sausages', 'party sausages', 'sticky cocktail sausages'],
    why: 'A table of eight at a party, and a tray of sausages that vanishes in ten minutes. That is the job of cocktail sausages.\n\nThe glaze is honey, mustard and soy sauce, and it needs to go on in two stages. Roast the sausages plain for 10 minutes so they brown and release their fat, then toss them in the glaze and roast for 10 minutes more. **Glaze that goes on too early burns before the sausages are cooked.**\n\nUse a roasting tin with a rim so the sticky juices stay with the sausages, and stir them once or twice in the second stage so each one is coated.\n\nThey are ready at 200°C after 20 minutes in all, when the glaze has turned thick and glossy. If your oven runs hot, check at 15 minutes. Serve warm with cocktail sticks. Keep a bowl for the sticks on the table, since people will return for a third and a fourth.',
    ing: [
      '400 g cocktail sausages',
      '2 tbsp honey',
      '1 tbsp wholegrain mustard',
      '1 tbsp soy sauce',
      '1 tsp sunflower oil'
    ],
    st: [
      'Heat the oven to 200°C. Toss the sausages with the oil in a rimmed roasting tin and roast for 10 minutes.',
      'Mix the honey, mustard and soy sauce. Pour over the sausages and toss to coat.',
      'Roast for 10 minutes more, stirring once, until the glaze is thick and glossy.',
      'Serve warm with cocktail sticks.'
    ],
    tips: [
      'Glaze in the second half only.',
      'Stir once so every sausage is coated.',
      'If your oven runs hot, check at 15 minutes.',
      'Use a tin with a rim.'
    ],
    pair: ['Mustard dip', 'Mini pickles', 'Cherry tomatoes', 'Sparkling wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 8 minutes.',
    nut: [169, 7, 6, 13, 0, 5, 550]
  },

  'teriyaki-wings': {
    d: 'Baked chicken wings brushed with a glossy homemade teriyaki sauce of soy, honey, ginger and garlic, scattered with sesame seeds.',
    meta: 'Teriyaki wings: baked chicken wings brushed with a glossy sauce of soy, honey, ginger and garlic. Four servings, 40 minutes in the oven.',
    kw: ['teriyaki wings', 'easy teriyaki chicken wings', 'baked teriyaki wings', 'sticky teriyaki wings', 'homemade teriyaki wings'],
    why: 'The first sign they are ready is the smell: soy and honey catching on the edge of the tin. By then the sauce has gone from thin to sticky, and the wings are lacquered.\n\nBake the wings plain for 25 minutes first, so the skin renders and crisps. Teriyaki sauce is mostly sugar, and sugar burns, so it goes on late. **Add the sauce for the last 15 minutes only.**\n\nMeanwhile simmer the soy sauce, honey, mirin, ginger, garlic and sesame oil in a small pan for 4 minutes, until it coats the back of a spoon. It will thicken further as it cools.\n\nBrush the wings, return them to the oven and brush again after 7 minutes. If your oven runs hot, check at 30 minutes in all. Finish with sesame seeds and sliced spring onion. Put out a bowl of wet wipes and a second bowl for the bones, because these are sticky.',
    ing: [
      '1 kg chicken wings',
      '1/2 tsp salt',
      '80 ml soy sauce',
      '3 tbsp honey',
      '1 tbsp mirin',
      '10 g fresh ginger, grated',
      '2 cloves garlic, crushed',
      '1 tsp sesame oil',
      '1 tbsp sesame seeds',
      '2 spring onions, sliced'
    ],
    st: [
      'Heat the oven to 220°C. Dry the wings, toss with the salt and spread on a lined tray. Bake for 25 minutes.',
      'Meanwhile simmer the soy sauce, honey, mirin, ginger, garlic and sesame oil for 4 minutes until it coats a spoon.',
      'Brush the wings with the sauce and bake for 7 minutes. Brush again and bake for 8 minutes more.',
      'Scatter with the sesame seeds and spring onions and serve hot.'
    ],
    tips: [
      'Dry the wings thoroughly.',
      'Add the sauce in the last 15 minutes.',
      'If your oven runs hot, check at 30 minutes in all.',
      'Line the tray; the sauce is difficult to scrub off.'
    ],
    pair: ['Steamed rice', 'Cucumber salad', 'Pickled ginger', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 200°C oven for 10 minutes.',
    nut: [612, 45, 18, 40, 1, 15, 1670]
  },

  'garlic-parmesan-chicken-wings': {
    d: 'Crisp baked chicken wings tossed in melted garlic butter and grated parmesan with parsley.',
    meta: 'Garlic parmesan chicken wings: crisp baked wings tossed in garlic butter and parmesan. Four servings, 40 minutes in the oven.',
    kw: ['garlic parmesan chicken wings', 'baked garlic parmesan wings', 'crispy garlic parmesan wings', 'parmesan wings', 'garlic butter chicken wings'],
    why: 'Wings come out of the oven crisp only if the skin is dry, and baking powder helps. A teaspoon of it raises the pH of the skin, so it browns and blisters like fried chicken.\n\nPat the wings very dry with kitchen paper. Toss them with the baking powder and salt, and spread them out on a rack set over a tray, not touching, so the hot air reaches every side. **Do not use baking soda in place of baking powder.** It leaves a soapy taste.\n\nBake at 220°C for 40 minutes, turning once at 20 minutes, until the skin is deep gold and crackling. If your oven runs hot, check at 30 minutes.\n\nMelt the butter with the garlic, toss the hot wings in it, then add the parmesan and parsley. The cheese should cling and melt a little. Eat them while they are hot. A squeeze of lemon over the plate at the end freshens the richness of the butter and cheese.',
    ing: [
      '1 kg chicken wings',
      '1 tbsp baking powder',
      '1 tsp salt',
      '50 g butter',
      '4 cloves garlic, crushed',
      '60 g parmesan, finely grated',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 220°C. Dry the wings and toss with the baking powder and salt. Arrange on a rack over a tray without touching.',
      'Bake for 40 minutes, turning once, until the skin is deep gold and crisp.',
      'Melt the butter with the garlic for 1 minute without browning.',
      'Toss the hot wings in the garlic butter, then the parmesan and parsley. Serve at once.'
    ],
    tips: [
      'Dry the wings well.',
      'Use baking powder, not bicarbonate of soda.',
      'If your oven runs hot, check at 30 minutes.',
      'Toss in the butter while the wings are hot.'
    ],
    pair: ['Celery sticks', 'Ranch dip', 'Coleslaw', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 200°C oven for 10 minutes.',
    nut: [668, 48, 2, 52, 0, 0, 1410]
  },

  'hot-honey-chicken': {
    d: 'Crisp oven-baked chicken thigh pieces tossed in a sticky hot honey glaze of honey, chilli flakes, hot sauce and vinegar.',
    meta: 'Hot honey chicken: crisp baked chicken thigh pieces tossed in a sticky glaze of honey, chilli and hot sauce. Four servings, 25 minutes.',
    kw: ['hot honey chicken', 'crispy hot honey chicken', 'baked hot honey chicken', 'sweet and spicy hot honey chicken', 'hot honey chicken thighs'],
    why: 'Hot honey is a name that stands for what it is: honey, heat and a little acid. In recent years it has been drizzled on pizza and chicken, and the mix works because the sweetness takes the sting out of the chilli while the vinegar keeps it from cloying.\n\nThe chicken must be crisp or the glaze turns it soggy. Coat the thigh pieces in cornflour and egg, then in seasoned flour, and bake on a hot tray at 220°C for 20 minutes. **Flip once at 10 minutes.** Both sides should be crunchy and deep gold.\n\nWhile it bakes, simmer the honey, chilli flakes, hot sauce, vinegar and butter for 2 minutes. If your oven runs hot, check at 16 minutes.\n\nToss the hot chicken in the glaze just before serving, and leave nothing standing in it. Taste the glaze before it goes on the chicken and add a little more chilli if you want it hotter.',
    ing: [
      '700 g boneless chicken thighs, cut into 4 cm pieces',
      '2 tbsp cornflour',
      '1 egg, beaten',
      '80 g plain flour',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '2 tbsp sunflower oil',
      '4 tbsp honey',
      '1 tsp chilli flakes',
      '1 tbsp hot sauce',
      '1 tbsp white wine vinegar',
      '15 g butter'
    ],
    st: [
      'Heat the oven to 220°C with a tray inside. Toss the chicken in the cornflour, then the egg, then the flour mixed with the paprika and salt.',
      'Brush the hot tray with the oil, spread the chicken on it and bake for 20 minutes, turning once at 10 minutes.',
      'Meanwhile simmer the honey, chilli flakes, hot sauce, vinegar and butter for 2 minutes.',
      'Toss the hot chicken in the glaze and serve at once.'
    ],
    tips: [
      'Bake on a preheated tray.',
      'Turn the chicken once.',
      'If your oven runs hot, check at 16 minutes.',
      'Glaze just before serving so the coating stays crisp.'
    ],
    pair: ['Coleslaw', 'Steamed rice', 'Cornbread', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 200°C oven for 10 minutes.',
    nut: [471, 38, 37, 19, 1, 17, 840]
  },

  'lemon-chicken-bites': {
    d: 'Pan-fried cubes of chicken breast in a light cornflour crust, tossed in a sharp lemon and honey glaze.',
    meta: 'Lemon chicken bites: pan-fried chicken breast cubes in a light crust with a lemon and honey glaze. Four servings, 12 minutes of cooking.',
    kw: ['lemon chicken bites', 'easy lemon chicken bites', 'honey lemon chicken bites', 'pan fried lemon chicken', 'lemon chicken appetizer'],
    why: 'Spring is when this dish belongs: lemons in the bowl, a little warmth in the air, and food to eat with the fingers. Bright and sharp, it suits a table of snacks.\n\nCut the chicken breast into 2 cm cubes, as even as you can make them. Small cubes cook in minutes and stay juicy. Toss them with cornflour and salt, which makes a thin crust that holds the glaze. **Do not crowd the pan.** Crowded pieces steam instead of brown.\n\nFry in hot oil for 8 minutes, turning, until golden on every side. Remove one and cut it open to be sure it is cooked.\n\nTurn the heat down, add the garlic, lemon zest and juice, honey and water, and simmer for 2 minutes until sticky. Toss the chicken in the pan to coat. If your pan runs hot, take it off the heat for a moment before adding the lemon.',
    ing: [
      '500 g chicken breast, cut into 2 cm cubes',
      '3 tbsp cornflour',
      '1/2 tsp salt',
      '2 tbsp sunflower oil',
      '1 clove garlic, crushed',
      '1 lemon, zest and juice',
      '2 tbsp honey',
      '50 ml water',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Toss the chicken with the cornflour and salt.',
      'Heat the oil in a large frying pan over medium-high heat. Fry the chicken for 8 minutes, turning, until golden and cooked through.',
      'Turn the heat down. Add the garlic, lemon zest and juice, honey and water and simmer for 2 minutes until sticky.',
      'Toss the chicken in the glaze, scatter with the parsley and serve with cocktail sticks.'
    ],
    tips: [
      'Cut the cubes evenly.',
      'Fry in a single layer.',
      'If the pan smokes, lower the heat.',
      'Cut one open to check it is cooked.'
    ],
    pair: ['Steamed rice', 'Green beans', 'Lemon wedges', 'Sparkling water'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in a pan with a splash of water.',
    nut: [266, 28, 16, 10, 1, 9, 350]
  },

  'apple-muffins': {
    d: 'Tender muffins with diced apple and cinnamon in the batter and a crunchy cinnamon sugar top.',
    meta: 'Apple muffins: tender muffins with diced apple and cinnamon and a crunchy sugar top. Makes twelve, baked for 20 minutes.',
    kw: ['apple muffins', 'easy apple muffins', 'apple cinnamon muffins', 'homemade apple muffins', 'apple muffins with cinnamon sugar'],
    why: 'Muffin batter is simple. Wet goes into dry, a few strokes, and into the tin. The trap is that the more you stir, the tougher the crumb.\n\nMix the dry ingredients in one bowl and the eggs, milk and melted butter in another. Pour one into the other and fold with a spatula for no more than ten strokes. **Lumps are good.** They mean the gluten has not been overworked.\n\nFold in the diced apple last, about 300 g, cut small so it bakes through. Fill each paper case to the top, because the muffins rise up, not out, and a full case makes a domed top.\n\nSprinkle with the cinnamon sugar and bake at 190°C for 20 minutes. If your oven runs hot, check at 16 minutes. A skewer should come out clean. A cooling rack matters more than it seems, because muffins left in the tin steam and the paper cases turn damp.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '120 g caster sugar',
      '2 eggs, about 100 g',
      '240 ml milk',
      '100 g butter, melted',
      '2 apples, about 300 g, peeled and diced',
      '1 tsp ground cinnamon',
      '2 tbsp caster sugar for the topping',
      '1/2 tsp ground cinnamon for the topping'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin with paper cases.',
      'Stir the flour, baking powder, salt, sugar and cinnamon together. In another bowl whisk the eggs, milk and melted butter.',
      'Pour the wet into the dry and fold with a few strokes until just mixed. Fold in the apple.',
      'Divide between the cases, sprinkle with the topping and bake for 20 minutes until a skewer comes out clean.'
    ],
    tips: [
      'Stop mixing while the batter is lumpy.',
      'Dice the apple small.',
      'If your oven runs hot, check at 16 minutes.',
      'Cool in the tin for 5 minutes.'
    ],
    pair: ['Hot tea', 'Butter', 'Natural yoghurt', 'Warm milk'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [241, 4, 36, 9, 1, 16, 200]
  },

  'berry-muffins': {
    d: 'Domed muffins full of mixed berries, with a sugar-crusted top and a soft, tender crumb.',
    meta: 'Berry muffins: domed muffins full of mixed berries, with a sugar crust and a soft crumb. Makes twelve, baked for 22 minutes.',
    kw: ['berry muffins', 'mixed berry muffins', 'easy berry muffins', 'fresh berry muffins', 'homemade berry muffins'],
    why: 'Muffin is a name that covers a lot, but a good one has a tall dome and a moist crumb. Berry muffins get both from a hot start and a gentle hand.\n\nUse 200 g of mixed berries, and toss them in a spoonful of the flour before they go into the batter. **Flour-coated berries stay suspended instead of sinking.** Frozen berries can go in without thawing, and thawed ones stain the batter.\n\nFold the wet mixture into the dry with a spatula in a few strokes. The batter should be thick and lumpy, almost like a cake mix.\n\nFill the cases right to the top and sprinkle with coarse sugar. Bake at 190°C for 22 minutes, until domed and golden. If your oven runs hot, check at 18 minutes. A skewer should come out with a few damp crumbs, not wet batter. Peel the case away gently while they are still slightly warm, as the berries stick when cold.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '130 g caster sugar',
      '2 eggs, about 100 g',
      '240 ml milk',
      '100 g butter, melted',
      '1 tsp vanilla extract',
      '200 g mixed berries',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin.',
      'Mix the flour, baking powder, salt and sugar. Toss the berries with a spoonful of this mixture.',
      'Whisk the eggs, milk, butter and vanilla, then fold into the dry mixture with a few strokes. Fold in the berries.',
      'Fill the cases to the top, sprinkle with coarse sugar and bake for 22 minutes until domed and golden.'
    ],
    tips: [
      'Toss the berries in flour first.',
      'Fill the cases fully.',
      'If your oven runs hot, check at 18 minutes.',
      'Use frozen berries straight from the freezer bag.'
    ],
    pair: ['Hot coffee', 'Greek yoghurt', 'Butter', 'Cold milk'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [237, 4, 35, 9, 1, 15, 200]
  },

  'carrot-muffins': {
    d: 'Moist spiced muffins with grated carrot, sultanas and walnuts, baked until risen and golden.',
    meta: 'Carrot muffins: moist spiced muffins with grated carrot, sultanas and walnuts. Makes twelve, baked for 22 minutes.',
    kw: ['carrot muffins', 'easy carrot muffins', 'carrot cake muffins', 'spiced carrot muffins', 'carrot and walnut muffins'],
    why: 'Carrot, oil, eggs and sugar: a handful of ingredients and about forty minutes. The carrot does the work, because it is full of water and keeps the crumb moist for days.\n\nGrate it on the fine side of the grater, about 200 g, so it melts into the batter. Coarse shreds make wet pockets. **Use oil, not butter, for the softest crumb.** Oil stays liquid when cold, so the muffins do not firm up as they cool.\n\nWhisk the oil, eggs, sugar and milk, add the carrot, then fold in the flour, spices, sultanas and walnuts. Stop as soon as no dry flour is left.\n\nFill the cases to the top and bake at 190°C for 22 minutes. If your oven runs hot, check at 18 minutes. The tops should spring back when pressed gently. They taste even better the next day, once the spices have had time to settle into the crumb.',
    ing: [
      '280 g plain flour',
      '2 tsp baking powder',
      '1 tsp ground cinnamon',
      '1/2 tsp ground nutmeg',
      '1/2 tsp salt',
      '150 g soft light brown sugar',
      '2 eggs, about 100 g',
      '120 ml sunflower oil',
      '120 ml milk',
      '200 g carrot, finely grated',
      '60 g sultanas',
      '50 g walnuts, chopped'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin.',
      'Whisk the sugar, eggs, oil and milk until smooth. Stir in the carrot.',
      'Fold in the flour, baking powder, spices and salt until no dry flour shows, then the sultanas and walnuts.',
      'Spoon into the cases and bake for 22 minutes until the tops spring back.'
    ],
    tips: [
      'Grate the carrot finely.',
      'Use oil, not butter.',
      'If your oven runs hot, check at 18 minutes.',
      'Cool in the tin for 5 minutes.'
    ],
    pair: ['Cream cheese', 'Hot tea', 'Butter', 'Cold milk'],
    store: 'Keeps in a tin for 3 days.',
    nut: [285, 5, 37, 13, 2, 17, 210]
  },

  'raspberry-muffins': {
    d: 'Soft lemon-scented muffins dotted with raspberries and finished with a crackle of sugar on top.',
    meta: 'Raspberry muffins: soft lemon-scented muffins dotted with raspberries. Makes twelve, baked for 22 minutes.',
    kw: ['raspberry muffins', 'fresh raspberry muffins', 'lemon raspberry muffins', 'easy raspberry muffins', 'homemade raspberry muffins'],
    why: 'A Sunday brunch for a table of six, with something left over for Monday. Raspberry muffins suit that rhythm, because they are good warm and still good the next day.\n\nRaspberries are fragile and break into the batter, so fold them in last and gently, with a spatula, in as few strokes as you can manage. **Use 150 g, no more.** More berries make the muffins wet in the middle.\n\nLemon zest in the batter keeps the sweetness in check and goes well with the tart fruit. Rub it into the sugar with your fingers first to release the oils.\n\nFill the cases to the top and sprinkle with coarse sugar. Bake at 190°C for 22 minutes. If your oven runs hot, check at 18 minutes. Let the muffins cool in the tin for 5 minutes so the soft berries set. For a neat finish, press a single raspberry into the top of each batter before it goes in the oven.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '130 g caster sugar',
      '1 lemon, zest only',
      '2 eggs, about 100 g',
      '240 ml milk',
      '100 g butter, melted',
      '150 g raspberries',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin.',
      'Rub the lemon zest into the caster sugar. Stir in the flour, baking powder and salt.',
      'Whisk the eggs, milk and butter, pour into the dry mixture and fold with a few strokes. Fold in the raspberries gently.',
      'Fill the cases, sprinkle with coarse sugar and bake for 22 minutes until golden. Cool in the tin for 5 minutes.'
    ],
    tips: [
      'Fold in the raspberries last.',
      'Rub the zest into the sugar.',
      'If your oven runs hot, check at 18 minutes.',
      'Do not use more than 150 g of fruit.'
    ],
    pair: ['Hot coffee', 'Natural yoghurt', 'Butter', 'Orange juice'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [241, 5, 35, 9, 2, 15, 200]
  },

  'peach-muffins': {
    d: 'Soft muffins with chunks of ripe peach and a hint of vanilla, baked with a sugared top.',
    meta: 'Peach muffins: soft muffins with chunks of ripe peach and a hint of vanilla. Makes twelve, baked for 22 minutes.',
    kw: ['peach muffins', 'fresh peach muffins', 'easy peach muffins', 'homemade peach muffins', 'peach and vanilla muffins'],
    why: 'Most peach muffins turn out wet in the middle, and the fix is to dice the fruit small and blot it. Ripe peaches carry a lot of juice, which turns the crumb gummy around each chunk.\n\nPeel two peaches, about 300 g, cut them into 1 cm pieces and press them on kitchen paper for a minute. **Dry fruit bakes into the crumb instead of leaving a hole.** Toss the pieces in a spoonful of flour before folding them in.\n\nMix the wet and dry separately, then combine with a few light strokes. The batter should be thick.\n\nFill the cases to the top, sprinkle with sugar and bake at 190°C for 22 minutes. If your oven runs hot, check at 18 minutes. The muffins are done when a skewer comes out clean, bar a streak of peach. Underripe peaches stay firm and bland, so wait until the fruit gives a little when pressed.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '130 g caster sugar',
      '2 eggs, about 100 g',
      '220 ml milk',
      '100 g butter, melted',
      '1 tsp vanilla extract',
      '2 peaches, about 300 g, peeled and diced',
      '2 tbsp caster sugar for the topping'
    ],
    st: [
      'Heat the oven to 190°C and line a 12-hole muffin tin.',
      'Blot the diced peach on kitchen paper and toss in a spoonful of the flour.',
      'Mix the dry ingredients; whisk the eggs, milk, butter and vanilla. Combine with a few strokes and fold in the peach.',
      'Divide between the cases, sprinkle with the topping sugar and bake for 22 minutes until a skewer comes out clean.'
    ],
    tips: [
      'Blot the peach pieces.',
      'Use ripe but firm fruit.',
      'If your oven runs hot, check at 18 minutes.',
      'Cool the muffins in the tin for 5 minutes.'
    ],
    pair: ['Hot tea', 'Vanilla yoghurt', 'Butter', 'Cold milk'],
    store: 'Best on the day. Keeps in a tin for 2 days.',
    nut: [232, 4, 36, 8, 1, 16, 200]
  }
};
