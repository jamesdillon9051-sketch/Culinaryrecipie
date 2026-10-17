'use strict';

/**
 * Volume sixty-two, third part: the Croatian stews, risotto, fritters and
 * cream slice, the Slovenian nut roll, soup, sausage, pastries and
 * dumplings, and the first Swedish dishes (potato, soup and meat, buns,
 * biscuits, cakes and the crayfish party). Waits of an hour or more are
 * declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'pasticada': {
    d: 'Dalmatian beef braised for 2 hours 30 minutes in red wine, prunes and spices until tender, the classic dish for feast days.',
    meta: 'Pašticada, Dalmatian beef braised in red wine with prunes and spices, cooked for 2 hours 30 minutes. Six servings, ready in 3 hours.',
    kw: ['pasticada', 'dalmatian braised beef with prunes', 'croatian pasticada', 'pasticada with gnocchi', 'beef stewed in red wine and prunes'],
    why: 'Short and sharp: stud the beef with garlic and bacon, and let it cook slowly. Pašticada is the Dalmatian feast day beef, a great piece of meat braised in red wine, prunes and spices, and it is served on Easter Sunday and at weddings along the Adriatic coast. The sauce is dark, sweet and sour at once.\n\nUse a piece of beef topside or silverside of about 1.5 kg. Make deep cuts in it with a knife and push in slivers of garlic, bacon and clove. Brown the meat in oil on all sides, then lift it out. Soften a large amount of chopped onion, carrot, celery and parsnip in the same pot, and add tomato purée, red wine, wine vinegar, bay and a handful of prunes. **Return the meat and add water to come halfway up**, then cover and cook at a bare simmer for 2 hours 30 minutes.\n\nThe beef is ready when a knife slides in easily. Lift it out and slice. Blend half of the vegetables in the pot into a smooth sauce, or pass through a sieve, and boil it down until it coats a spoon. Serve the slices with the sauce and potato gnocchi, which are the classic partner.',
    ing: [
      '1.5 kg beef topside',
      '4 garlic cloves, in slivers',
      '60 g smoked bacon, in strips',
      '1 g cloves',
      '4 tbsp olive oil',
      '2 onions, chopped',
      '2 carrots, chopped',
      '2 celery sticks, chopped',
      '150 g parsnip, chopped',
      '2 tbsp tomato purée',
      '300 ml red wine',
      '3 tbsp wine vinegar',
      '2 bay leaves',
      '100 g stoned prunes',
      '300 ml water',
      '1 tsp salt',
      '600 g potato gnocchi, to serve'
    ],
    st: [
      'Make deep cuts in the beef and push in the garlic, bacon and cloves.',
      'Brown the beef in the oil on all sides for 12 minutes. Lift out.',
      'Soften the onions, carrots, celery and parsnip in the pot for 10 minutes. Stir in the purée, then the wine, vinegar, bay and prunes.',
      'Return the beef, add the water and salt, cover and simmer very gently for 2 hours 30 minutes, turning once.',
      'Lift out the beef. Blend the sauce smooth and boil to a coating consistency. Slice the beef and serve with the sauce and gnocchi.'
    ],
    tips: [
      'Stud the beef so it is flavoured through.',
      'Simmer gently for the full time.',
      'Blend the vegetables into the sauce.'
    ],
    pair: ['Potato gnocchi', 'Red wine', 'Green salad'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [684, 60, 57, 24, 6, 12, 1130]
  },

  'crni-rizot': {
    d: 'Croatian black risotto coloured with squid ink, with squid pieces and garlic, cooked for 35 minutes.',
    meta: 'Crni rižot, Croatian black risotto with squid ink and squid, cooked for 35 minutes. Four servings, ready in 50 minutes.',
    kw: ['crni rizot', 'croatian black risotto', 'cuttlefish ink risotto', 'squid ink rice croatian', 'crni rizot recipe'],
    why: 'It looks like a pot of dark mud and tastes of the sea, which is why it is the first dish many visitors order on the Dalmatian coast. Crni rižot, the Croatian black risotto, is a rice dish coloured and flavoured with the ink of cuttlefish or squid, and it is finished with pieces of the tender seafood.\n\nBuy cleaned squid with its ink sac, or small sachets of ink from a fishmonger. Cut the squid into small pieces. Soften onion and garlic in olive oil, add the squid and cook for 10 minutes, until it turns opaque and the liquid has gone. **Do not salt the squid until the end**, as salt toughens it. Add the rice and stir for 1 minute, then pour in white wine and let it bubble away.\n\nAdd hot fish stock a ladle at a time, stirring, for about 18 minutes. Stir in the ink after 10 minutes, dissolved in a ladle of stock, so that the colour spreads evenly. The rice should be creamy but loose. Finish with parsley and a squeeze of lemon, never cheese. Teeth and lips will be black after eating, which is part of the fun.',
    ing: [
      '500 g cleaned squid, in pieces',
      '4 tbsp olive oil',
      '1 onion, finely chopped',
      '4 garlic cloves',
      '320 g arborio rice',
      '120 ml dry white wine',
      '1.2 litres hot fish stock',
      '8 g squid ink, 2 sachets',
      '1 tsp salt',
      '3 tbsp chopped parsley',
      '1 lemon, in wedges'
    ],
    st: [
      'Soften the onion and garlic in the oil for 5 minutes. Add the squid and cook for 10 minutes until opaque.',
      'Add the rice and stir for 1 minute. Add the wine and stir until absorbed.',
      'Add the stock a ladle at a time, stirring, for 18 minutes. After 10 minutes, stir in the ink dissolved in a ladle of stock.',
      'Season with the salt. Rest for 2 minutes.',
      'Scatter with the parsley and serve with the lemon.'
    ],
    tips: [
      'Salt the squid at the end.',
      'Dissolve the ink in stock first.',
      'Serve without cheese.'
    ],
    pair: ['Dry white wine', 'Lemon wedges', 'Green salad'],
    store: 'Best fresh. Do not reheat seafood.',
    nut: [577, 30, 76, 17, 2, 2, 1640]
  },

  'brudet': {
    d: 'A Dalmatian fish stew of mixed fish simmered with tomatoes, onions, garlic and white wine, served with polenta.',
    meta: 'Brudet, Dalmatian mixed fish stew in tomato and white wine, served with polenta, cooked for 40 minutes. Four servings, ready in 55 minutes.',
    kw: ['brudet', 'dalmatian fish stew', 'croatian brodet with polenta', 'brudet recipe', 'adriatic fish stew with tomato'],
    why: 'Short and sharp: layer the fish, add the sauce and do not stir. Brudet is the Dalmatian fish stew, also spelled brodet, a dish the fishermen of the Adriatic make in a wide pot from the day\'s catch, and it needs a good selection of fish and very little else.\n\nUse at least three kinds of firm fish, such as monkfish, cod, hake or sea bass, and some shellfish if you like. Cut them into thick pieces. Soften onions and garlic in a generous amount of olive oil, add tomatoes, white wine, a bay leaf and parsley, and simmer for 15 minutes to make a thick sauce. **Lay the fish in the sauce in order of firmness** and cover. Do not stir, but shake the pot, so the pieces stay whole.\n\nCook for 15 minutes, until the fish is opaque and flakes. Serve in deep bowls with soft polenta, which soaks up the sauce, and a drizzle of oil. Some cooks stir in a little vinegar at the end. The stew is also served with bread. It is best eaten at once.',
    ing: [
      '4 tbsp olive oil',
      '2 onions, sliced',
      '5 garlic cloves',
      '600 g ripe tomatoes, chopped',
      '150 ml dry white wine',
      '1 bay leaf',
      '4 tbsp chopped parsley',
      '800 g firm white fish, in thick pieces',
      '1 tsp salt',
      '1 tbsp white wine vinegar',
      '200 g instant polenta',
      '1 litre water'
    ],
    st: [
      'Soften the onions and garlic in the oil for 8 minutes. Add the tomatoes, wine, bay and half the parsley and simmer for 15 minutes.',
      'Lay the firmest fish in the sauce, then the softer pieces. Season with half the salt. Cover and cook for 15 minutes, shaking the pot.',
      'Meanwhile boil the water with the rest of the salt and stir in the polenta for 5 minutes.',
      'Stir the vinegar into the stew and scatter with the rest of the parsley.',
      'Serve in deep bowls with the polenta.'
    ],
    tips: [
      'Use at least three kinds of fish.',
      'Shake the pot instead of stirring.',
      'Serve with soft polenta.'
    ],
    pair: ['Soft polenta', 'Dry white wine', 'Crusty bread'],
    store: 'Best fresh.',
    nut: [538, 42, 52, 18, 6, 7, 730]
  },

  'fritule': {
    d: 'Small Croatian fried dough balls with raisins, rum and lemon zest, rolled in icing sugar, ready in 25 minutes.',
    meta: 'Fritule, Croatian small fried dough balls with raisins and rum dusted with sugar, cooked for 10 minutes. Twelve servings, ready in 25 minutes.',
    kw: ['fritule', 'croatian fried dough balls', 'dalmatian doughnut bites', 'fritule recipe', 'raisin and rum fritters'],
    why: 'Use two spoons, one to scoop and one to push. That is the quick tip for fritule, the little Croatian doughnuts of the Adriatic coast, because the batter is sticky and will cling to your fingers. They are the sweet of Christmas and carnival, and sold at every winter market.\n\nSoak the raisins in rum for at least 10 minutes. Mix the flour, sugar, baking powder and lemon zest in a bowl, then add eggs, milk and the raisins with the rum. The batter should be thick, like a very soft dough, and will hold a shape on a spoon. **Heat the oil to 170C**, hot enough to cook the middle before the outside burns, and test with a pinch of batter, which should sizzle and rise in about 30 seconds.\n\nDrop spoonfuls into the oil, 6 at a time, and fry for 3 to 4 minutes, turning, until deep gold all over. Drain on kitchen paper and dust with icing sugar while warm. They are best eaten the same day. A little orange zest or grated apple in the dough is a popular variation.',
    ing: [
      '40 g raisins',
      '3 tbsp dark rum',
      '250 g plain flour',
      '40 g caster sugar',
      '2 tsp baking powder',
      '1 lemon, zest',
      '2 eggs',
      '150 ml whole milk',
      '1 pinch salt',
      '60 ml sunflower oil absorbed, from 600 ml for frying',
      '3 tbsp icing sugar'
    ],
    st: [
      'Soak the raisins in the rum for 10 minutes.',
      'Mix the flour, sugar, baking powder, zest and salt. Beat in the eggs, milk and the raisins with the rum to a thick batter.',
      'Heat the oil to 170C. Using two spoons, drop in spoonfuls of batter, 6 at a time.',
      'Fry for 3 to 4 minutes, turning, until deep gold. Drain on kitchen paper.',
      'Dust with the icing sugar and serve warm.'
    ],
    tips: [
      'Use two spoons to shape the balls.',
      'Keep the oil at 170C.',
      'Eat them the same day.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Mulled wine'],
    store: 'Best the day they are made.',
    nut: [174, 4, 26, 6, 1, 9, 110]
  },

  'kremsnita': {
    d: 'A Croatian cream slice of crisp puff pastry layered with vanilla custard and whipped cream, chilled for 1 hour.',
    meta: 'Kremšnita, Croatian vanilla cream slice with puff pastry and whipped cream, baked for 25 minutes. Twelve servings, ready in 1 hour 5 minutes plus chilling.',
    kw: ['kremsnita', 'croatian cream slice', 'samobor kremsnita', 'vanilla custard and cream pastry', 'kremšnita recipe'],
    why: 'The name kremšnita simply means cream slice, and the best known one comes from the town of Samobor near Zagreb, where it is sold in every cafe. It is a simple pastry: a crisp base, a thick layer of vanilla custard and whipped cream, and a top of puff pastry dusted with icing sugar. The art is in the proportions.\n\nBake two sheets of puff pastry between trays, so they stay flat, at 200C for about 25 minutes, until deep gold. Cool them. For the custard, cook milk, egg yolks, sugar and cornflour for 5 minutes, until thick, then add vanilla and cool. **Fold in whipped cream only when the custard is completely cold**, or the cream melts and the filling runs. Spread the filling in a tall layer on the base.\n\nTrim the second sheet of pastry, cut it into 12 portions, and set it on top before dusting with icing sugar. Chill for at least 1 hour, so the filling sets. Cut with a serrated knife using a sawing motion, as the pastry is brittle. Eat within a day, or the pastry softens.',
    ing: [
      '640 g ready rolled puff pastry, 2 sheets',
      '600 ml whole milk',
      '5 egg yolks',
      '130 g caster sugar',
      '50 g cornflour',
      '1 tsp vanilla extract',
      '300 ml double cream',
      '3 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 200C. Bake the pastry sheets between two trays for 25 minutes until gold. Cool.',
      'Whisk the yolks, sugar and cornflour with a little milk. Warm the rest of the milk, pour on, return to the pan and stir for 5 minutes until thick. Add the vanilla and cool completely.',
      'Whip the cream to soft peaks and fold into the cold custard.',
      'Lay one pastry sheet in a lined 25 x 35 cm tin. Spread over the filling and level.',
      'Cut the second sheet into 12 portions and set on top. Chill for 1 hour. Dust with the icing sugar and cut with a serrated knife.'
    ],
    tips: [
      'Bake the pastry between trays.',
      'Cool the custard completely.',
      'Cut with a sawing motion.'
    ],
    pair: ['Coffee', 'Tea', 'Dessert wine'],
    store: 'Best within 1 day.',
    rest: [60, 'Chilling'],
    nut: [426, 8, 40, 26, 1, 19, 380]
  },

  'punjene-paprike': {
    d: 'Croatian peppers stuffed with minced meat and rice and simmered in a sweet tomato sauce for 1 hour.',
    meta: 'Punjene paprike, Croatian stuffed peppers with meat and rice in tomato sauce, cooked for 1 hour. Six servings, ready in 1 hour 30 minutes.',
    kw: ['punjene paprike', 'croatian stuffed peppers', 'peppers stuffed with meat and rice in tomato sauce', 'punjene paprike recipe', 'balkan stuffed peppers'],
    why: 'Pork, beef, rice, onion: four things in a bowl, and peppers waiting to be filled. Punjene paprike are the Croatian stuffed peppers, a Sunday dish common across the Balkans, and the unusual part is the sauce, a sweet tomato one, in which the peppers are slowly simmered, and which is thickened with a little flour.\n\nUse green or red peppers of equal size, cut off the tops, and remove the seeds. Mix minced pork and beef with raw rice, grated onion, an egg, paprika, salt and pepper. **Fill the peppers only two thirds full**, as the rice swells as it cooks and bursts them. Put the caps back on the peppers.\n\nStand the peppers upright in a pot, pack them close so they do not tip over, and pour in a sauce of tomato passata, water, sugar and a bay leaf. Cover and simmer gently for 1 hour, until the rice and the meat are cooked and the peppers are soft. Thicken the sauce with a little flour and water in the last 10 minutes. Serve with mashed potato and the sauce.',
    ing: [
      '6 green or red peppers, about 900 g',
      '400 g minced pork',
      '300 g minced beef',
      '80 g long grain rice',
      '1 onion, grated',
      '1 egg',
      '1 tsp sweet paprika',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '700 g tomato passata',
      '400 ml water',
      '1 tbsp caster sugar',
      '1 bay leaf',
      '1 tbsp plain flour'
    ],
    st: [
      'Cut the tops off the peppers and remove the seeds.',
      'Mix the pork, beef, rice, onion, egg, paprika, salt and pepper. Fill the peppers two thirds full and replace the caps.',
      'Stand the peppers upright in a pot. Pour in the passata, water, sugar and bay.',
      'Cover and simmer gently for 1 hour.',
      'Mix the flour with a little water, stir into the sauce and simmer for 5 minutes. Serve with mashed potato.'
    ],
    tips: [
      'Fill the peppers only two thirds full.',
      'Pack them upright and close together.',
      'Simmer gently for the full hour.'
    ],
    pair: ['Mashed potato', 'Crusty bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [394, 27, 31, 18, 5, 14, 600]
  },

  'potica': {
    d: 'A Slovenian rolled yeast cake with a walnut and honey filling, risen for 1 hour and baked for 60 minutes in a loaf tin.',
    meta: 'Potica, Slovenian rolled yeast nut cake with walnut and honey filling, baked for 60 minutes. Twelve servings, ready in 1 hour 40 minutes plus rising.',
    kw: ['potica', 'slovenian nut roll', 'walnut potica', 'potica recipe', 'slovenian rolled yeast cake'],
    why: 'Stretch the dough until it is as thin as paper. That is the quick tip for potica, the Slovenian nut roll, because a thin dough gives many spiral layers when rolled up, and the pattern is the beauty of the cake. It is the national festive cake, made at Christmas and Easter, and every family has its own recipe.\n\nThe dough is a soft, enriched yeast dough with milk, butter, egg yolks, sugar and a splash of rum. Knead for 10 minutes, then let it rise for 1 hour. Roll it out on a floured cloth, stretching it with the backs of your hands until almost transparent, about 50 x 70 cm. **Spread the filling to the very edges**, so that every layer has nuts. The filling is ground walnuts, honey, cream, butter, sugar and cinnamon.\n\nRoll it up from the long side using the cloth to lift, then lay it in a greased loaf tin in a spiral or fold it in half. Leave for 20 minutes. Bake at 180C for 60 minutes, covered with foil for the last 20, until deep brown. Cool in the tin and slice. It keeps for a week and is better on the second day.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '60 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '60 g butter, softened',
      '3 egg yolks',
      '2 tbsp dark rum',
      '400 g ground walnuts',
      '150 g honey',
      '100 ml double cream',
      '60 g butter, melted',
      '60 g caster sugar, for the filling',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Mix the flour, yeast, 60 g sugar, salt, milk, butter, yolks and rum and knead for 10 minutes. Leave to rise for 1 hour.',
      'Mix the walnuts, honey, cream, melted butter, 60 g sugar and cinnamon into a paste.',
      'Roll the dough on a floured cloth to a 50 x 70 cm sheet, stretching with the backs of your hands. Spread with the filling to the edges.',
      'Roll up from the long side using the cloth. Coil into a greased tin and leave for 20 minutes. Heat the oven to 180C.',
      'Bake for 60 minutes, covering with foil for the last 20. Cool in the tin.'
    ],
    tips: [
      'Stretch the dough paper thin.',
      'Spread the filling to the edges.',
      'Cool before slicing.'
    ],
    pair: ['Coffee', 'Tea', 'Dessert wine'],
    store: 'Keeps for 1 week wrapped. Freeze for 2 months.',
    rest: [60, 'Rising'],
    nut: [595, 12, 58, 35, 4, 23, 230]
  },

  'jota-soup': {
    d: 'A thick Slovenian soup of beans, sauerkraut, potatoes and smoked pork simmered for 1 hour with garlic and bay.',
    meta: 'Jota soup, thick Slovenian soup of beans, sauerkraut, potatoes and smoked pork, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['jota soup', 'slovenian bean and sauerkraut soup', 'istrian jota', 'jota recipe', 'sauerkraut bean and potato soup'],
    why: 'Does a soup need a thickener? Not when the potatoes and beans do the work. Jota is the Slovenian bean and sauerkraut soup, of the Karst and Istria, and it is a thick, sharp, smoky bowl made on the first cold days of the year with smoked pork ribs and bacon.\n\nSoften onion and garlic in lard, add the smoked pork and cover with water. Bring to a simmer and cook for 20 minutes. Add the beans, tinned for speed, and diced potatoes, a bay leaf and the sauerkraut. **Rinse the sauerkraut only lightly**, because its sharpness is wanted here. Simmer for 40 minutes, until the potatoes have started to fall apart and thicken the broth.\n\nMake a roux of lard, flour and crushed garlic and stir it in for the last 10 minutes, which gives the soup its body. Lift out the pork, shred it and return it to the pot. Taste for salt, and add a pinch of caraway. Serve hot in deep bowls, with a slice of bread, and a drizzle of oil. The soup is better the day after, and keeps for 4 days.',
    ing: [
      '2 tbsp lard',
      '1 onion, chopped',
      '4 garlic cloves',
      '400 g smoked pork ribs',
      '1.5 litres water',
      '800 g tinned white beans, drained',
      '400 g potatoes, diced',
      '1 bay leaf',
      '500 g sauerkraut',
      '1 tbsp lard, for the roux',
      '1 tbsp plain flour',
      '1 tsp caraway seeds',
      '1 tsp salt'
    ],
    st: [
      'Soften the onion and half the garlic in the 2 tablespoons of lard for 5 minutes. Add the ribs and water and simmer for 20 minutes.',
      'Add the beans, potatoes, bay and sauerkraut and simmer for 40 minutes.',
      'Cook the remaining lard, flour and crushed remaining garlic for 2 minutes. Stir into the soup for the last 10 minutes.',
      'Lift out the ribs, shred the meat and return it. Add the caraway and salt.'
    ],
    tips: [
      'Rinse the sauerkraut lightly.',
      'Add the roux for body.',
      'Leave it a day for a deeper flavour.'
    ],
    pair: ['Rye bread', 'Teran wine', 'Pickled peppers'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [447, 21, 39, 23, 11, 4, 1390]
  },

  'kranjska-klobasa': {
    d: 'Carniolan pork sausages heated gently in water and served with mustard, horseradish and sauerkraut, ready in 25 minutes.',
    meta: 'Kranjska klobasa, Carniolan pork sausages served with mustard, horseradish and sauerkraut, cooked for 20 minutes. Four servings, ready in 25 minutes.',
    kw: ['kranjska klobasa', 'carniolan sausage', 'slovenian pork sausage with horseradish', 'kranjska klobasa recipe', 'slovenian sausage and sauerkraut'],
    why: 'Pierce the casing with a fork, and heat the sausages gently. That is the quick tip for the Kranjska klobasa, the Carniolan sausage of Slovenia, a pork sausage with a coarse texture, lightly smoked and seasoned with garlic and pepper. It is the most famous Slovenian food and is served in a roll or on a plate with mustard and horseradish.\n\nBring a pan of water to the boil, take it off the heat and lower in the sausages. **Keep them below a simmer**, at about 80C, for 15 minutes. This warms them through and keeps them juicy. Prick each sausage once or twice with a fork, so the skin does not burst. If you prefer, brown them afterwards in a hot pan for 3 minutes.\n\nWarm sauerkraut with a little lard and caraway for 10 minutes. Serve the sausages on the sauerkraut with a spoonful of grated horseradish and a dab of sharp mustard, and a slice of rye bread on the side. A glass of local white wine or beer goes well. The sausages are also good thickly sliced in a roll.',
    ing: [
      '600 g Kranjska klobasa or smoked pork sausages',
      '2 litres water',
      '600 g sauerkraut',
      '1 tbsp lard',
      '1 tsp caraway seeds',
      '4 tbsp grated horseradish',
      '4 tbsp sharp mustard',
      '4 slices rye bread'
    ],
    st: [
      'Bring the water to the boil, take it off the heat and add the sausages, pricked once with a fork. Cover and leave for 15 minutes.',
      'Warm the sauerkraut with the lard and caraway for 10 minutes.',
      'Brown the sausages in a hot dry pan for 3 minutes if you like.',
      'Serve on the sauerkraut with the horseradish, mustard and bread.'
    ],
    tips: [
      'Keep the water below a simmer.',
      'Prick the casing only lightly.',
      'Serve with horseradish and mustard.'
    ],
    pair: ['Horseradish', 'Mustard', 'Rye bread', 'Beer'],
    store: 'Best fresh.',
    nut: [586, 24, 28, 42, 7, 7, 2570]
  },

  'prekmurska-gibanica': {
    d: 'A Slovenian layer cake of thin pastry with poppy seed, walnut, apple and curd cheese fillings, baked for 50 minutes.',
    meta: 'Prekmurska gibanica, Slovenian layer pastry with poppy seed, walnut, apple and curd cheese, baked for 50 minutes. Twelve servings, ready in 1 hour 50 minutes.',
    kw: ['prekmurska gibanica', 'slovenian layered pastry cake', 'prekmurje layer cake with poppy seeds', 'gibanica recipe', 'slovenian four filling cake'],
    why: 'The first thing you notice is the number of layers: 4 fillings, up to 10 layers of pastry, and a cake that you can see in cross section like the pages of a book. Prekmurska gibanica is the layered pastry of Prekmurje, the north east corner of Slovenia, and is a festive dessert for weddings and holidays. It is rich, so serve small pieces.\n\nMake or buy 12 sheets of thin pastry, such as phyllo. The fillings are poppy seed cooked in sweet milk, ground walnuts with sugar and cinnamon, grated apple with sugar, and sweet curd cheese with soured cream and raisins. Prepare each in a bowl and cool them. **Soak the sheets of pastry in a mixture of melted butter and milk**, or brush generously, as the layers must be damp for the cake to be soft.\n\nLayer 2 sheets, then poppy seed, 2 sheets, walnuts, 2 sheets, apple, 2 sheets, curd cheese, repeating until you finish with sheets. Pour over a mixture of soured cream and melted butter, and bake at 180C for 50 minutes, until the top is golden. Cool in the tin for 30 minutes and cut into squares. It keeps for 4 days.',
    ing: [
      '400 g phyllo pastry, 12 sheets',
      '100 g butter, melted',
      '100 ml whole milk',
      '150 g poppy seeds, ground',
      '200 ml milk, for the poppy seed',
      '60 g caster sugar, for the poppy seed',
      '150 g ground walnuts',
      '60 g caster sugar, for the walnuts',
      '1 tsp ground cinnamon',
      '500 g apples, peeled and grated',
      '50 g caster sugar, for the apples',
      '400 g curd cheese',
      '150 g soured cream',
      '60 g caster sugar, for the cheese',
      '2 eggs',
      '50 g raisins'
    ],
    st: [
      'Simmer the poppy seeds with the 200 ml milk and 60 g sugar for 5 minutes until thick. Mix the walnuts with 60 g sugar and the cinnamon. Mix the apples with 50 g sugar. Mix the cheese with the soured cream, 60 g sugar, eggs and raisins.',
      'Heat the oven to 180C. Mix the melted butter with the 100 ml milk.',
      'Layer 2 sheets of phyllo in a buttered tin, brushed with the butter mix. Spread with the poppy seed. Repeat with 2 sheets and the walnuts, 2 sheets and the apple, 2 sheets and the cheese.',
      'Finish with 2 sheets and pour over the rest of the butter mix.',
      'Bake for 50 minutes until golden. Cool for 30 minutes and cut into squares.'
    ],
    tips: [
      'Cool each filling before layering.',
      'Brush each pair of sheets with the butter mix.',
      'Cut small squares, as it is rich.'
    ],
    pair: ['Coffee', 'Sweet wine', 'Tea'],
    store: 'Keeps for 4 days in the fridge.',
    nut: [524, 13, 55, 28, 5, 30, 140]
  },

  'zlikrofi': {
    d: 'Small Slovenian dumplings from Idrija, shaped like little hats and filled with potato, bacon and marjoram, boiled for 5 minutes.',
    meta: 'Žlikrofi, small Idrija dumplings filled with potato, bacon and marjoram, cooked for 20 minutes. Six servings, ready in 1 hour 20 minutes.',
    kw: ['zlikrofi', 'idrija dumplings', 'slovenian filled dumplings', 'zlikrofi recipe', 'potato and bacon dumplings'],
    why: 'Compare them with pierogi and you find a smaller, finer dumpling shaped like a tiny hat. Žlikrofi are the dumplings of Idrija in western Slovenia, filled with potato, bacon and herbs, and they are protected as a regional speciality. They are served with a rich meat sauce, or with butter and sage.\n\nThe dough is flour, eggs, water and a pinch of salt, kneaded for 10 minutes until smooth and rested for 30 minutes. For the filling, boil floury potatoes and mash them dry. Fry diced bacon and onion until golden and mix into the potato with marjoram, chives, salt and pepper. **Chill the filling until it is stiff**, then roll it into small balls the size of a hazelnut.\n\nRoll the dough out as thin as you can and cut into 4 cm squares. Put a ball in the centre of each square, fold the dough over diagonally to a triangle, pinch the edges and then fold the corners back to shape the hat. Boil in salted water for 5 minutes after they float. Serve with sage butter, or a meat sauce made from beef and tomato.',
    ing: [
      '300 g plain flour',
      '2 eggs',
      '60 ml water',
      '1 pinch salt',
      '500 g floury potatoes',
      '100 g smoked bacon, diced',
      '1 onion, finely chopped',
      '1 tsp dried marjoram',
      '2 tbsp chopped chives',
      '1 tsp salt, for the filling',
      '1/2 tsp black pepper',
      '60 g butter',
      '10 g sage leaves'
    ],
    st: [
      'Knead the flour, eggs, water and pinch of salt for 10 minutes. Rest for 30 minutes.',
      'Boil the potatoes for 25 minutes, peel and mash dry. Fry the bacon and onion for 8 minutes and mix into the potato with the marjoram, chives, salt and pepper. Chill until stiff.',
      'Roll the filling into 40 small balls. Roll the dough very thin and cut into 4 cm squares.',
      'Put a ball on each square, fold to a triangle, pinch the edges and fold the corners back.',
      'Boil in salted water for 5 minutes after they float. Toss in the butter fried with the sage.'
    ],
    tips: [
      'Chill the filling until stiff.',
      'Roll the dough very thin.',
      'Pinch the edges firmly.'
    ],
    pair: ['Meat sauce', 'Sage butter', 'Red wine'],
    store: 'Freeze uncooked for 2 months. Keeps 1 day in the fridge.',
    nut: [372, 12, 54, 12, 4, 2, 700]
  },

  'janssons-frestelse': {
    d: 'A Swedish gratin of sliced potatoes, onions and anchovy fillets baked in cream for 50 minutes, the Christmas table classic.',
    meta: 'Janssons frestelse, Swedish potato and anchovy gratin baked in cream, baked for 50 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['janssons frestelse', 'janssons temptation', 'swedish potato and anchovy gratin', 'janssons frestelse recipe', 'swedish christmas potato bake'],
    why: 'Does the dish need Swedish anchovies? It does, because these are not the same as the Mediterranean kind. Swedish anchovies, sold as ansjovis, are sprats cured with sugar and spices, sweeter and milder, and the flavour is the point of Janssons frestelse, the potato gratin of the Swedish Christmas table. Look for them in tins marked ansjovis, or use regular anchovies in smaller quantity.\n\nCut potatoes into thin matchsticks, about 5 mm, and soften sliced onions in butter for 10 minutes. Layer the potatoes, onions and fish in a buttered dish, starting and finishing with potatoes. **Pour over the cream and the fish brine slowly**, so that it seeps down. Dot with butter and sprinkle with breadcrumbs.\n\nBake at 200C for 50 minutes, until the top is deep golden and the potatoes are soft when pierced. Rest for 10 minutes before serving. Serve hot with cold meats, fish and bread on the julbord, or alone with a green salad. The dish is better the next day, reheated, as the flavours have mingled and the cream has set into the potato.',
    ing: [
      '800 g waxy potatoes, in 5 mm matchsticks',
      '2 onions, thinly sliced',
      '40 g butter',
      '100 g Swedish anchovy fillets (ansjovis), with the brine',
      '300 ml double cream',
      '100 ml whole milk',
      '1/4 tsp white pepper',
      '3 tbsp dry breadcrumbs',
      '1 tbsp butter, to dot'
    ],
    st: [
      'Heat the oven to 200C. Soften the onions in the 40 g butter for 10 minutes.',
      'Layer half the potatoes in a buttered dish, add the onions and fish, and cover with the remaining potatoes.',
      'Mix the cream, milk, fish brine and pepper and pour over slowly.',
      'Scatter with the breadcrumbs and dot with butter. Bake for 50 minutes until deep golden.',
      'Rest for 10 minutes before serving.'
    ],
    tips: [
      'Look for Swedish anchovies in tins.',
      'Pour the cream slowly.',
      'Rest before serving.'
    ],
    pair: ['Ham', 'Green salad', 'Aquavit', 'Crisp bread'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [613, 15, 46, 41, 6, 8, 1010]
  },

  'kroppkakor': {
    d: 'Swedish potato dumplings filled with diced smoked pork and onion, flavoured with allspice and boiled for 25 minutes.',
    meta: 'Kroppkakor, Swedish potato dumplings filled with smoked pork and onion, cooked for 25 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['kroppkakor', 'swedish potato dumplings', 'dumplings filled with pork and onion', 'kroppkakor recipe', 'oland potato dumplings'],
    why: 'The first sign it is ready is the smell: onion and allspice frying in butter, and then the damp, earthy steam of potato. Kroppkakor are the potato dumplings of Småland and Öland in Sweden, as big as a tennis ball and filled with smoked pork, and they are served with melted butter and lingonberry jam.\n\nBoil floury potatoes, peel them while hot and mash dry. Mix half the potatoes with flour and an egg to form the dough, keeping the other half raw and grated, as is done in some regions. Use boiled potatoes only for a softer dumpling. Fry diced smoked pork and onion in butter until golden and season with ground allspice. **Cool the filling so it does not melt the dough**, and chill for 20 minutes.\n\nDivide the dough into 12 pieces, flatten each, put a spoonful of filling in the middle and seal it into a ball. Lower the dumplings into simmering salted water in batches and cook for 25 minutes, until they float and feel firm. Lift out with a slotted spoon. Serve with melted butter, lingonberry jam and a spoonful of cream. Leftover dumplings are sliced and fried the next day.',
    ing: [
      '1 kg floury potatoes',
      '150 g plain flour',
      '1 egg',
      '1 tsp salt',
      '200 g smoked pork collar, diced',
      '1 onion, finely chopped',
      '20 g butter',
      '1/2 tsp ground allspice',
      '60 g butter, melted',
      '150 g lingonberry jam'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes. Peel while hot, mash dry and cool. Mix with the flour, egg and salt to a soft dough.',
      'Fry the pork and onion in the 20 g butter for 8 minutes until golden. Stir in the allspice, cool and chill for 20 minutes.',
      'Divide the dough into 12, flatten each, put a spoonful of filling in the centre and seal into a ball.',
      'Simmer in salted water in batches for 25 minutes until they float and are firm. Lift out.',
      'Serve with the melted butter and lingonberry jam.'
    ],
    tips: [
      'Cool and chill the filling.',
      'Seal the dumplings completely.',
      'Slice and fry leftovers.'
    ],
    pair: ['Lingonberry jam', 'Melted butter', 'Cream'],
    store: 'Keeps for 3 days in the fridge. Slice and fry.',
    nut: [460, 14, 65, 16, 5, 17, 820]
  },

  'pytt-i-panna': {
    d: 'Diced potatoes, onion and leftover meat fried until crisp in one pan and served with a fried egg and pickled beetroot.',
    meta: 'Pytt i panna, Swedish hash of diced potatoes, meat and onion with fried egg and pickled beetroot, cooked for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['pytt i panna', 'swedish potato hash', 'swedish hash with fried egg and beetroot', 'pytt i panna recipe', 'diced potato and meat hash'],
    why: 'Short and sharp: dice everything small and the same size. That is the rule for pytt i panna, which means bits in a pan, the Swedish hash of diced potatoes, onion and leftover meat. It is the plainest and most common of all Swedish supper dishes and the usual end of the Sunday roast.\n\nCut the cold boiled potatoes, the onion and the meat or sausage into cubes about 1 cm across. Use a mix of ham, sausage and roast beef or pork. **Fry the potatoes first, in butter and oil, on a high heat**, in two batches so the pan is not crowded. Let them sit for 4 minutes before stirring, until a crust forms. Lift out, then fry the onion and meat in the same pan.\n\nReturn the potatoes, season with salt, white pepper and a little thyme, and fry for 3 minutes more. Fry the eggs in a separate pan and set one on each plate, with a mound of the hash. Serve with pickled beetroot and a spoonful of mustard or ketchup. The beetroot juice runs into the hash, which is how it is meant to be eaten.',
    ing: [
      '600 g cold waxy potatoes, cooked the day before, diced',
      '2 tbsp butter',
      '1 tbsp rapeseed oil',
      '1 onion, diced',
      '300 g cooked ham, sausage or roast beef, diced',
      '1/2 tsp dried thyme',
      '1/2 tsp salt',
      '1/4 tsp white pepper',
      '4 eggs',
      '200 g pickled beetroot, sliced'
    ],
    st: [
      'Heat half the butter and the oil in a large pan. Fry the potatoes in 2 batches for 8 minutes each without stirring for the first 4, until crisp. Lift out.',
      'Fry the onion and meat in the remaining butter for 5 minutes.',
      'Return the potatoes, add the thyme, salt and pepper and fry for 3 minutes.',
      'Fry the eggs in a separate pan.',
      'Serve the hash topped with the eggs and with the beetroot on the side.'
    ],
    tips: [
      'Dice everything the same size.',
      'Fry the potatoes in batches.',
      'Serve with pickled beetroot.'
    ],
    pair: ['Pickled beetroot', 'Mustard', 'Beer'],
    store: 'Best fresh.',
    nut: [389, 25, 34, 17, 5, 6, 1310]
  },

  'artsoppa': {
    d: 'A thick Swedish soup of yellow split peas and salt pork simmered for 90 minutes after an overnight soak, served with mustard.',
    meta: 'Ärtsoppa, thick Swedish yellow pea soup with pork and mustard, cooked for 90 minutes. Six servings, ready in 1 hour 40 minutes plus soaking.',
    kw: ['artsoppa', 'swedish yellow pea soup', 'swedish thursday pea soup', 'artsoppa recipe', 'yellow split pea soup with pork'],
    why: 'What do Swedes eat on Thursday? Pea soup, followed by pancakes, a tradition so strong that it is on school and army menus all over the country. Ärtsoppa is made from dried yellow peas, a little salt pork or ham, onion and thyme, and the soup is thick and mild.\n\nSoak the peas overnight in plenty of cold water, and drain them. The soaking cuts the cooking time and makes the peas easier to digest. Put them in a pot with the pork, an onion, a bay leaf and a litre and a half of water, and bring slowly to a simmer. **Skim off the husks and foam** as they rise in the first 15 minutes. Add thyme or marjoram.\n\nSimmer for about 90 minutes, stirring now and then, until the peas have broken down and the soup has thickened. Lift out the pork, cut it into pieces and return it. Taste for salt, since the pork is salty. Serve in bowls with sharp Swedish mustard stirred in, and a thin pancake with jam and cream to follow. A small glass of punsch is the traditional drink.',
    ing: [
      '400 g dried yellow split peas, soaked overnight',
      '400 g smoked pork collar',
      '1.5 litres water',
      '1 onion, chopped',
      '1 bay leaf',
      '2 tsp dried marjoram',
      '1 tsp salt',
      '4 tbsp sharp mustard'
    ],
    st: [
      'Drain the soaked peas and put them in a pot with the pork, onion, bay and water. Bring slowly to a simmer and skim.',
      'Simmer for 90 minutes, stirring now and then, until the peas have broken down.',
      'Lift out the pork, cut into pieces and return it. Add the marjoram.',
      'Season with the salt and serve with the mustard.'
    ],
    tips: [
      'Soak the peas overnight.',
      'Skim the foam and husks.',
      'Taste before salting, as the pork is salty.'
    ],
    pair: ['Sharp mustard', 'Thin pancakes', 'Rye crispbread', 'Punsch'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    rest: [480, 'Soaking'],
    nut: [373, 30, 43, 9, 18, 6, 1310]
  },

  'biff-a-la-lindstrom': {
    d: 'Swedish beef patties mixed with chopped beetroot, capers and onion and fried until browned, ready in 40 minutes.',
    meta: 'Biff à la Lindström, Swedish beef patties with beetroot, capers and onion, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['biff a la lindstrom', 'swedish beef patties with beetroot', 'lindstrom burger', 'biff a la lindstrom recipe', 'beetroot and caper meat patties'],
    why: 'The surprising ingredient here is the beetroot, and the reason it works is the sweetness, with the capers adding a sharp salty note. Biff à la Lindström is the Swedish beef patty, a dish said to come from a Swedish cook called Henrik Lindström, who is said to have brought it back from Russia, and it has been on Swedish tables for over a century.\n\nMix minced beef with finely chopped pickled beetroot, capers, onion, a little of the pickling liquid, an egg and breadcrumbs. Use a lean beef mince, as the beetroot adds moisture. **Do not mix too long**, as it makes the patties tough and also turns them completely pink. Shape into four patties and chill for 15 minutes.\n\nFry in butter over medium high heat for about 5 minutes on each side, until browned and cooked through. Deglaze the pan with a splash of stock and cream. Serve with boiled potatoes, a spoonful of the pan sauce and a fried egg on top if you like. Some people add a teaspoon of mustard to the mince.',
    ing: [
      '600 g minced beef',
      '80 g pickled beetroot, finely chopped',
      '2 tbsp capers, chopped',
      '1 small onion, finely chopped',
      '1 egg',
      '40 g dry breadcrumbs',
      '2 tbsp beetroot pickling liquid',
      '1/2 tsp salt',
      '1/2 tsp white pepper',
      '40 g butter',
      '100 ml beef stock',
      '60 ml double cream',
      '600 g boiled potatoes, to serve'
    ],
    st: [
      'Mix the beef, beetroot, capers, onion, egg, breadcrumbs, pickling liquid, salt and pepper briefly. Shape into 4 patties and chill for 15 minutes.',
      'Melt the butter in a wide pan over medium high heat and fry the patties for 5 minutes on each side. Lift out.',
      'Add the stock and cream to the pan and boil for 3 minutes.',
      'Serve the patties with the sauce and the potatoes.'
    ],
    tips: [
      'Mix briefly.',
      'Chill the patties before frying.',
      'Use the pan juices for the sauce.'
    ],
    pair: ['Boiled potatoes', 'Fried egg', 'Pickled cucumber'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [570, 37, 38, 30, 5, 5, 690]
  },

  'kardemummabullar': {
    d: 'Swedish cardamom buns of sweet yeast dough rolled with butter, sugar and cardamom, twisted into knots and baked for 20 minutes.',
    meta: 'Kardemummabullar, Swedish cardamom buns twisted into knots, baked for 20 minutes. Twelve servings, ready in 1 hour plus rising.',
    kw: ['kardemummabullar', 'swedish cardamom buns', 'cardamom knots', 'kardemummabullar recipe', 'swedish fika buns'],
    why: 'What is fika? It is the Swedish coffee break, a ritual taken at least twice a day, and it is not complete without a cardamom bun. Kardemummabullar are the sweet yeast buns, twisted into knots or rolled into spirals, and their flavour is the warm, floral spice of freshly ground cardamom.\n\nThe dough is enriched with milk, butter, egg and sugar and flavoured with ground cardamom, ideally from seeds you have crushed yourself. Knead for 10 minutes, then let it rise for 1 hour. Roll it into a large rectangle and spread it with soft butter, sugar and more cardamom. **Fold the dough in three like a letter**, then cut it into strips 2 cm wide and twist each strip into a knot, tucking the ends under.\n\nSet the knots on lined trays and let them rise for 30 minutes until puffy. Brush with beaten egg and scatter with pearl sugar. Bake at 220C for 20 minutes, until deep gold. Cool for 10 minutes. The buns are best on the day, but freeze very well. Serve with strong coffee, and a friend.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '70 g caster sugar',
      '1 tsp salt',
      '2 tsp ground cardamom',
      '250 ml lukewarm milk',
      '1 egg',
      '70 g butter, softened',
      '60 g butter, softened, for the filling',
      '60 g caster sugar, for the filling',
      '2 tsp ground cardamom, for the filling',
      '1 egg, beaten, for glazing',
      '2 tbsp pearl sugar'
    ],
    st: [
      'Mix the flour, yeast, 70 g sugar, salt, 2 tsp cardamom, milk, egg and 70 g butter and knead for 10 minutes. Leave to rise for 1 hour.',
      'Roll into a 30 x 50 cm rectangle. Spread with the soft butter, 60 g sugar and 2 tsp cardamom. Fold in three and cut into 12 strips.',
      'Twist each strip into a knot, tucking the ends under. Set on lined trays and leave for 30 minutes.',
      'Heat the oven to 220C. Brush with the egg, scatter with the pearl sugar and bake for 20 minutes.'
    ],
    tips: [
      'Grind fresh cardamom for the best flavour.',
      'Tuck the ends under so the knots hold.',
      'Freeze extras on the day.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Best the day they are made. Freeze for 2 months.',
    rest: [90, 'Rising'],
    nut: [272, 6, 35, 12, 2, 16, 420]
  },

  'semla': {
    d: 'Swedish cardamom buns split and filled with almond paste and whipped cream, the Shrove Tuesday treat, in 1 hour 5 minutes plus rising.',
    meta: 'Semla, Swedish cardamom buns filled with almond paste and whipped cream, baked for 20 minutes. Ten servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['semla', 'swedish semla buns', 'cream and almond paste buns', 'fettisdagsbulle', 'semla recipe'],
    why: 'Hollow out the bun, and mix the crumbs with the almond paste. That is the quick tip for a semla, the Swedish Lent bun, because the inside of the bun makes the filling and the lid sits over it like a hat. Semlor are eaten on Shrove Tuesday, and in Sweden the shops start to sell them in January.\n\nThe buns are a soft cardamom dough, rich with butter, egg and milk. Knead for 10 minutes and rise for 1 hour, shape into 10 smooth round buns, rise again for 30 minutes and bake at 220C for 20 minutes, until golden. Cool completely. Slice the top off each bun and scoop out some of the centre. **Mix the scooped crumbs with grated almond paste and a spoon of milk** into a thick, sweet filling.\n\nSpoon the filling into the hollows. Whip the cream until it holds stiff peaks and pipe a swirl on top of each. Set the lids on at an angle and dust with icing sugar. The traditional way to eat a semla is in a bowl of hot milk, as hetvägg. Eat within a few hours, as the bun softens.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '70 g caster sugar',
      '1 tsp salt',
      '2 tsp ground cardamom',
      '250 ml lukewarm milk',
      '1 egg',
      '80 g butter, softened',
      '1 egg, beaten, for glazing',
      '200 g almond paste',
      '100 ml whole milk',
      '400 ml double cream',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, cardamom, lukewarm milk, egg and butter and knead for 10 minutes. Leave to rise for 1 hour.',
      'Shape into 10 round buns, set on lined trays and leave for 30 minutes. Heat the oven to 220C.',
      'Brush with the beaten egg and bake for 20 minutes until golden. Cool completely.',
      'Slice the tops off and scoop out some of the centres. Mix the crumbs with the grated almond paste and 100 ml milk.',
      'Fill the buns with the paste, pipe on whipped cream and set the lids on. Dust with the icing sugar.'
    ],
    tips: [
      'Cool the buns before filling.',
      'Whip the cream until stiff.',
      'Eat within a few hours.'
    ],
    pair: ['Hot milk', 'Coffee', 'Tea'],
    store: 'Best fresh. Unfilled buns freeze for 1 month.',
    rest: [90, 'Rising'],
    nut: [522, 12, 42, 34, 4, 16, 520]
  },

  'kladdkaka': {
    d: 'A Swedish sticky chocolate cake that is crisp on top and gooey inside, baked for 20 minutes in one bowl.',
    meta: 'Kladdkaka, Swedish sticky chocolate cake with a gooey middle, baked for 20 minutes at 175C. Eight servings, ready in 30 minutes.',
    kw: ['kladdkaka', 'swedish sticky chocolate cake', 'gooey chocolate cake', 'kladdkaka recipe', 'swedish mud cake'],
    why: 'Most home chocolate cakes come out dry, and the fix is to underbake this one on purpose. Kladdkaka, the Swedish sticky cake, is a dense, fudgy chocolate cake with a crisp crust and a gooey middle, and it is mixed in one bowl in about 10 minutes. The name means sticky cake.\n\nMelt the butter, then stir in sugar, eggs, flour, cocoa, vanilla and a pinch of salt. There is no raising agent at all, so the cake stays flat and dense. **Pull the cake out when the top is set but the middle still wobbles**, about 20 minutes at 175C in a 20 cm tin. It will look underdone, and that is the point. It firms as it cools.\n\nBake it in a tin that is buttered and dusted with breadcrumbs or cocoa, not flour, because flour leaves a pale film. Cool for 10 minutes, and serve warm with whipped cream or vanilla ice cream and fresh berries. Cold from the fridge, it turns into a dense, chewy fudge. It keeps for 3 days, and it is the first cake most Swedish children learn to make.',
    ing: [
      '150 g butter',
      '250 g caster sugar',
      '2 eggs',
      '100 g plain flour',
      '40 g cocoa powder',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '1 tbsp butter, for the tin',
      '1 tbsp dry breadcrumbs, for the tin',
      '200 ml double cream, whipped, to serve'
    ],
    st: [
      'Heat the oven to 175C. Butter a 20 cm tin and dust with the breadcrumbs.',
      'Melt the butter and stir in the sugar, then the eggs one at a time.',
      'Stir in the flour, cocoa, vanilla and salt just until combined.',
      'Pour into the tin and bake for 20 minutes until the top is set and the middle still wobbles.',
      'Cool for 10 minutes and serve with the whipped cream.'
    ],
    tips: [
      'Underbake it on purpose.',
      'Dust the tin with crumbs, not flour.',
      'Serve warm with cream.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Vanilla ice cream'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [443, 5, 45, 27, 2, 32, 50]
  },

  'lussekatter': {
    d: 'Swedish saffron buns shaped into S curls with a raisin in each coil, risen for 90 minutes and baked for 15 minutes for St Lucia\'s Day.',
    meta: 'Lussekatter, Swedish saffron buns shaped into S curls for St Lucia, baked for 15 minutes. Fourteen servings, ready in 55 minutes plus rising.',
    kw: ['lussekatter', 'swedish saffron buns', 'st lucia buns', 'lussebullar recipe', 'saffron s shaped buns with raisins'],
    why: 'The colour is the first thing you notice: a deep golden yellow, from saffron, and the smell, warm and honeyed, that fills the house on the thirteenth of December. Lussekatter are the Swedish saffron buns of St Lucia\'s Day, shaped into S curls with a raisin in each coil, and they are eaten at dawn with coffee and mulled wine.\n\nCrush the saffron with a pinch of sugar and steep it in a little warm milk for 15 minutes. Mix the flour, yeast, sugar and salt, then add the milk, quark, egg and butter and knead for 10 minutes. **Use a good pinch of saffron, about 0.5 g**, as the colour and flavour are the point. Leave to rise for 90 minutes.\n\nDivide into 14 pieces, roll each into a rope about 30 cm long and curl the ends in opposite directions to make an S. Press a raisin into the centre of each curl. Leave for 30 minutes, brush with egg and bake at 225C for 15 minutes, until golden. Cool on a rack. The buns are best the day they are baked, but also freeze well.',
    ing: [
      '0.5 g saffron threads',
      '1 tbsp caster sugar',
      '250 ml lukewarm milk',
      '500 g strong bread flour',
      '7 g instant yeast',
      '100 g caster sugar',
      '1 tsp salt',
      '150 g quark',
      '1 egg',
      '100 g butter, softened',
      '30 g raisins',
      '1 egg, beaten, for glazing'
    ],
    st: [
      'Crush the saffron with the 1 tablespoon of sugar and steep in 2 tablespoons of the milk for 15 minutes.',
      'Mix the flour, yeast, 100 g sugar and salt. Add the rest of the milk, the saffron milk, quark, egg and butter and knead for 10 minutes. Leave to rise for 90 minutes.',
      'Divide into 14 and roll into 30 cm ropes. Curl the ends in opposite directions into an S. Press a raisin into each curl.',
      'Leave for 30 minutes. Heat the oven to 225C.',
      'Brush with the beaten egg and bake for 15 minutes until golden. Cool on a rack.'
    ],
    tips: [
      'Steep the saffron in warm milk first.',
      'Use a generous pinch.',
      'Brush with egg for the shine.'
    ],
    pair: ['Coffee', 'Mulled wine', 'Gingerbread'],
    store: 'Best the day they are made. Freeze for 2 months.',
    rest: [120, 'Rising'],
    nut: [221, 6, 29, 9, 1, 12, 370]
  },

  'pepparkakor': {
    d: 'Thin, crisp Swedish gingerbread biscuits cut into shapes with cinnamon, ginger and cloves, chilled for 1 hour and baked for 10 minutes.',
    meta: 'Pepparkakor, thin crisp Swedish gingerbread biscuits with cinnamon, ginger and cloves, baked for 10 minutes. Forty biscuits, ready in 40 minutes plus chilling.',
    kw: ['pepparkakor', 'swedish gingerbread biscuits', 'thin ginger biscuits', 'pepparkakor recipe', 'swedish christmas biscuits'],
    why: 'Roll the dough as thin as you dare. That is the key instruction for pepparkakor, the thin, crisp Swedish gingerbread, because the thinner the dough, the more snap in the biscuit. They are cut into hearts, goats, pigs and stars and are the Christmas biscuit of Sweden, hung on trees and eaten by the hundred.\n\nBeat butter with sugar, then add the syrup, egg and the dry mix of flour, baking soda, cinnamon, ginger, cloves and a pinch of white pepper. The dough will be soft and sticky. **Chill it for at least 1 hour**, or overnight, and it becomes firm enough to roll. Work with a small piece of dough at a time and keep the rest in the fridge.\n\nRoll on a well floured surface to 2 mm thick, cut shapes with cutters and lift on to lined trays. Bake at 200C for 8 to 10 minutes, until the edges are a shade darker. They crisp as they cool on the tray. Decorate with white icing. They keep for 4 weeks in a tin, and they get more spiced over time.',
    ing: [
      '125 g butter, softened',
      '150 g caster sugar',
      '150 g golden syrup',
      '1 egg',
      '400 g plain flour',
      '1 tsp baking soda',
      '2 tsp ground cinnamon',
      '2 tsp ground ginger',
      '1/2 tsp ground cloves',
      '1/4 tsp white pepper',
      '100 g icing sugar',
      '1 tbsp water'
    ],
    st: [
      'Beat the butter and sugar until pale. Beat in the syrup and egg.',
      'Mix in the flour, baking soda and spices to a soft dough. Wrap and chill for 1 hour.',
      'Heat the oven to 200C and line trays. Roll small pieces of dough 2 mm thick and cut shapes.',
      'Bake for 8 to 10 minutes until the edges darken. Cool on the tray.',
      'Mix the icing sugar and water and pipe on decorations.'
    ],
    tips: [
      'Roll the dough very thin.',
      'Chill the dough firm.',
      'Cool on the tray to crisp.'
    ],
    pair: ['Mulled wine', 'Coffee', 'Hot chocolate'],
    store: 'Keeps for 4 weeks in a tin.',
    rest: [60, 'Chilling'],
    nut: [99, 1, 17, 3, 0, 9, 40]
  },

  'chokladbollar': {
    d: 'Swedish no bake chocolate balls of oats, butter, sugar, cocoa and coffee rolled in coconut, ready in 15 minutes.',
    meta: 'Chokladbollar, Swedish no bake chocolate oat balls rolled in coconut, ready in 15 minutes. Twenty servings, no baking.',
    kw: ['chokladbollar', 'swedish chocolate balls', 'no bake oat and cocoa balls', 'chokladbollar recipe', 'swedish chocolate oat balls with coconut'],
    why: 'Soft butter, oats, sugar, cocoa: mix them, roll them and roll them in coconut. Chokladbollar are the Swedish chocolate balls and the first sweet treat that children there learn to make, with no oven and no real recipe, and found in every cafe beside the coffee.\n\nThe butter must be properly soft, not melted, so that it mixes into a thick paste. Mix it with the sugar, vanilla and cocoa first, then add the oats and a splash of cold strong coffee. **Use rolled oats, not instant**, which are too fine, for the chewy texture. Knead with your hands until the mixture holds together when pressed.\n\nRoll into balls the size of a walnut, about 25 g each, and roll each in desiccated coconut or pearl sugar. Chill for 30 minutes so they firm up. They keep for a week in the fridge. Pop a little rum in the mix for the adult version, a rumboll. Serve with coffee, as the Swedes do.',
    ing: [
      '100 g butter, softened',
      '100 g caster sugar',
      '2 tbsp cocoa powder',
      '1 tsp vanilla extract',
      '250 g rolled oats',
      '50 ml strong cold coffee',
      '80 g desiccated coconut'
    ],
    st: [
      'Beat the butter, sugar, cocoa and vanilla in a bowl until smooth.',
      'Stir in the oats and cold coffee, then knead by hand until the mix holds together.',
      'Roll into 20 balls of about 25 g.',
      'Roll each in the coconut and chill for 30 minutes.'
    ],
    tips: [
      'Use soft, not melted, butter.',
      'Use rolled oats.',
      'Chill so they firm up.'
    ],
    pair: ['Coffee', 'Tea', 'Milk'],
    store: 'Keeps for 1 week in the fridge.',
    nut: [131, 2, 15, 7, 2, 5, 5]
  },

  'rabarberpaj': {
    d: 'A Swedish rhubarb pie with a buttery oat crumble topping, baked for 40 minutes and served with vanilla sauce.',
    meta: 'Rabarberpaj, Swedish rhubarb pie with oat crumble topping, baked for 40 minutes at 200C. Six servings, ready in 1 hour.',
    kw: ['rabarberpaj', 'swedish rhubarb pie', 'rhubarb crumble pie with oats', 'rabarberpaj recipe', 'rhubarb pie with vanilla sauce'],
    why: 'Most rhubarb pies come out watery, and the fix is to coat the fruit in sugar and cornflour. Rabarberpaj is the Swedish rhubarb pie, though it is more like a crumble: a layer of tart rhubarb under a thick, buttery, golden topping of oats, flour and sugar, baked in a dish and eaten warm with vanilla sauce.\n\nCut the rhubarb into 2 cm pieces and toss it with sugar, a spoonful of cornflour and a little vanilla. **Do not peel the rhubarb unless it is old and stringy**, because the skin gives it a pretty pink colour. Spread it in a buttered dish. For the topping, rub cold butter into the flour, rolled oats and sugar until it looks like coarse crumbs, and press it over the fruit.\n\nBake at 200C for 40 minutes, until the topping is deep gold and the fruit is bubbling at the edges. Let it stand for 10 minutes. Serve warm in deep bowls with vanilla sauce, vanilla ice cream or cold cream poured over. In Sweden the pie is made all through the spring and summer, from the first stalks of rhubarb until July.',
    ing: [
      '700 g rhubarb, in 2 cm pieces',
      '100 g caster sugar',
      '1 tbsp cornflour',
      '1 tsp vanilla extract',
      '120 g cold butter, cubed',
      '120 g plain flour',
      '100 g rolled oats',
      '100 g caster sugar, for the topping',
      '400 ml vanilla sauce, to serve'
    ],
    st: [
      'Heat the oven to 200C and butter a 1.5 litre dish. Toss the rhubarb with 100 g sugar, the cornflour and vanilla and spread in the dish.',
      'Rub the cold butter into the flour, oats and 100 g sugar until crumbly.',
      'Spread the crumble over the rhubarb.',
      'Bake for 40 minutes until deep gold and bubbling. Stand for 10 minutes.',
      'Serve warm with the vanilla sauce.'
    ],
    tips: [
      'Toss the fruit with cornflour.',
      'Leave the skin on young rhubarb.',
      'Let it stand before serving.'
    ],
    pair: ['Vanilla sauce', 'Vanilla ice cream', 'Cream'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven.',
    nut: [478, 5, 74, 18, 4, 42, 10]
  },

  'princess-cake': {
    d: 'A Swedish dome cake of sponge layers, raspberry jam, vanilla custard and whipped cream wrapped in pale green marzipan.',
    meta: 'Princess cake, Swedish dome cake with raspberry jam, custard and cream under green marzipan, baked for 35 minutes. Twelve servings, ready in 1 hour 35 minutes plus chilling.',
    kw: ['princess cake', 'swedish princess cake', 'prinsesstarta', 'green marzipan dome cake', 'princess cake recipe'],
    why: 'Does a cake need to look like a hat? This one does. The Swedish princess cake, prinsesstårta, is a tall dome of sponge, jam and cream, covered with smooth green marzipan and topped with a pink marzipan rose, and it is the birthday cake of a thousand Swedish parties. It is said to have been named for the princesses taught by the cookery writer who first published it.\n\nBake a sponge in a 24 cm tin: eggs and sugar whisked to ribbon stage, with flour folded in, baked at 180C for 35 minutes. Cool and split it into three layers. For the custard, cook milk, yolks, sugar and cornflour for 5 minutes until thick, and cool. **Fold the cold custard into whipped cream only when it is cold**, so the cream does not melt. Spread the base with raspberry jam and a layer of custard.\n\nRepeat for the second layer, set the third on top and cover the dome with a thick layer of whipped cream, piling it high in the middle. Chill for 1 hour. Roll out the green marzipan 3 mm thick, lay it over the dome, smooth it gently and trim. Dust with icing sugar and decorate with a rose. Chill until serving.',
    ing: [
      '5 eggs',
      '150 g caster sugar',
      '120 g plain flour',
      '30 g potato starch',
      '1 tsp baking powder',
      '4 tbsp raspberry jam',
      '500 ml whole milk',
      '4 egg yolks',
      '100 g caster sugar, for the custard',
      '40 g cornflour',
      '1 tsp vanilla extract',
      '600 ml double cream',
      '500 g green marzipan',
      '2 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180C and line a 24 cm tin. Whisk the eggs and 150 g sugar for 8 minutes until tripled, fold in the flour, starch and baking powder and bake for 35 minutes. Cool and split in three.',
      'Whisk the yolks, 100 g sugar and cornflour with a little milk. Warm the rest of the milk, pour on and cook for 5 minutes until thick. Add the vanilla and cool.',
      'Whip 200 ml of the cream and fold into the cold custard.',
      'Spread the first layer with jam and custard cream, add the second layer and repeat. Add the third layer on top.',
      'Whip the remaining cream stiff and pile over the dome. Chill for 1 hour.',
      'Roll out the marzipan, drape over the dome, smooth and trim. Dust with the icing sugar and chill.'
    ],
    tips: [
      'Cool the custard before the cream.',
      'Pile the cream high in the middle.',
      'Smooth the marzipan gently.'
    ],
    pair: ['Coffee', 'Tea', 'Sparkling wine'],
    store: 'Keeps for 3 days in the fridge.',
    rest: [60, 'Chilling'],
    nut: [593, 12, 62, 33, 3, 50, 130]
  },

  'swedish-crayfish-boil': {
    d: 'Raw crayfish boiled in a dill and salt brine for 10 minutes and chilled in the liquid overnight, the Swedish August party dish.',
    meta: 'Swedish crayfish boil, crayfish cooked in a dill and salt brine and served cold, cooked for 10 minutes. Six servings, ready in 20 minutes plus chilling.',
    kw: ['swedish crayfish boil', 'kraftskiva crayfish party', 'crayfish with dill brine', 'swedish crayfish recipe', 'cold crayfish with dill'],
    why: 'Wear a paper bib, put on a funny hat and eat with your fingers: that is the kräftskiva, the Swedish crayfish party of August, and it is one of the most cheerful meals of the year. The crayfish are boiled in a brine of salt, sugar, beer and a large amount of crown dill, then cooled in their liquid so they absorb flavour.\n\nUse raw freshwater crayfish, either live or frozen and defrosted. Bring a large pot of water to a rolling boil with the salt, sugar, beer, caraway and a whole bunch of dill. **Add the crayfish in batches** so the water stays at a boil, and cook for 5 to 8 minutes, until the shells are bright red. Take the pot off the heat and add more dill.\n\nLeave the crayfish to cool in the brine for 1 hour, then chill them in it overnight so they are cold and full of flavour. Serve in a big bowl with some of the brine, in a mound of dill, with crisp bread, strong cheese, such as västerbotten pie, and chilled aquavit. Suck the claws and the head for the juice, and shell the tail.',
    ing: [
      '2 kg raw crayfish',
      '4 litres water',
      '120 g coarse salt',
      '2 tbsp caster sugar',
      '330 ml pale beer',
      '1 tsp caraway seeds',
      '60 g fresh dill, with flower heads',
      '8 slices crisp bread',
      '200 g mature cheddar'
    ],
    st: [
      'Bring the water, salt, sugar, beer, caraway and half the dill to a rolling boil.',
      'Add the crayfish in 3 batches, returning to the boil each time, and cook for 5 to 8 minutes until bright red.',
      'Take the pot off the heat, add the rest of the dill and leave to cool for 1 hour. Chill in the brine overnight.',
      'Serve cold in a bowl with some of the brine and dill, with the crisp bread and cheese.'
    ],
    tips: [
      'Add the crayfish in batches.',
      'Chill them in the brine overnight.',
      'Serve with aquavit and cheese.'
    ],
    pair: ['Aquavit', 'Strong cheese', 'Crisp bread', 'Lager'],
    store: 'Keeps for 2 days in the fridge in the brine.',
    rest: [540, 'Cooling and chilling'],
    nut: [528, 69, 27, 16, 1, 6, 8780]
  }
};
