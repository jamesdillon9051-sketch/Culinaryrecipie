'use strict';

/**
 * Volume sixty-two, fourth part: a Swedish fish gratin, the Danish roasts,
 * pancakes, pastries and biscuits, the Finnish bakes, bread, casseroles and
 * reindeer, and the three Irish bakes and desserts. Waits of an hour or more
 * are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'fiskgratang': {
    d: 'A Swedish gratin of white fish, prawns and dill in a cream sauce under a layer of breadcrumbs, baked for 35 minutes.',
    meta: 'Fiskgratäng, Swedish fish gratin with prawns, dill and cream, baked for 35 minutes at 200C. Four servings, ready in 55 minutes.',
    kw: ['fiskgratang', 'swedish fish gratin', 'fish and prawn gratin with dill', 'fiskgratäng recipe', 'baked fish in cream sauce'],
    why: 'Watery fish is the usual problem, and the fix is to pat it dry and make the sauce thick. Fiskgratäng is the Swedish fish gratin, a family dish of white fish and prawns baked in a creamy dill sauce, and it is one of the most common weeknight dinners in Sweden.\n\nCut the fish into 3 cm chunks, season them and leave them for 10 minutes, then dry them well on kitchen paper. Make a béchamel from butter, flour and milk, simmer it for 8 minutes and stir in the cream, dill and a spoonful of mustard. **Make the sauce thicker than you would for pouring**, because the fish gives off juice as it bakes and thins it. Fold in the fish and the peeled prawns.\n\nSpoon the mixture into a buttered dish, scatter with breadcrumbs and grated cheese, and dot with butter. Bake at 200C for 35 minutes, until bubbling and golden. Rest for 5 minutes. Serve with boiled potatoes and a salad of lettuce and cucumber dressed with vinegar. A spoonful of red lumpfish roe on top makes it festive.',
    ing: [
      '600 g cod or haddock fillets, in 3 cm chunks',
      '200 g cooked peeled prawns',
      '1 tsp salt',
      '50 g butter',
      '50 g plain flour',
      '500 ml whole milk',
      '100 ml double cream',
      '4 tbsp chopped dill',
      '1 tbsp mustard',
      '3 tbsp dry breadcrumbs',
      '40 g grated Gruyère',
      '800 g boiled potatoes, to serve'
    ],
    st: [
      'Salt the fish and leave for 10 minutes. Pat dry on kitchen paper.',
      'Heat the oven to 200C. Melt the butter, stir in the flour for 1 minute and whisk in the milk. Simmer for 8 minutes. Stir in the cream, dill and mustard.',
      'Fold in the fish and prawns and spoon into a buttered dish.',
      'Scatter with the breadcrumbs and cheese and bake for 35 minutes until golden and bubbling.',
      'Rest for 5 minutes and serve with the potatoes.'
    ],
    tips: [
      'Dry the fish well.',
      'Make the sauce thick.',
      'Rest before serving.'
    ],
    pair: ['Boiled potatoes', 'Cucumber salad', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven.',
    nut: [676, 51, 55, 28, 5, 9, 940]
  },

  'stegt-flaesk': {
    cookMax: 45,
    d: 'Thick slices of pork belly fried until crisp and served with potatoes and a creamy parsley sauce, a Danish national dish.',
    meta: 'Stegt flæsk, Danish crisp fried pork belly with potatoes and parsley sauce, cooked for 40 minutes. Four servings, ready in 50 to 55 minutes.',
    kw: ['stegt flaesk', 'danish fried pork belly', 'stegt flæsk med persillesovs', 'crispy pork belly with parsley sauce', 'danish national dish'],
    why: 'Most home fried pork belly comes out chewy or burnt, and the fix is a cold pan and patience. Stegt flæsk med persillesovs, fried pork with parsley sauce, was voted the national dish of Denmark, and it is nothing more than thin slices of fatty pork fried until crisp and eaten with boiled potatoes and a white sauce.\n\nUse thin slices of fresh pork belly, about 5 mm thick, with the rind removed or left on. Lay them in a cold, dry, wide pan, then turn on a medium heat. **Let the fat melt out slowly for 12 minutes** before turning, so that the slices crisp from the inside. Turn and fry for 8 minutes more, until the pork is deep brown and brittle at the edges. Drain on kitchen paper.\n\nFor the sauce, melt butter, stir in flour, whisk in milk and simmer for 8 minutes, then add a large handful of chopped parsley, salt and white pepper. Boil the potatoes and serve everything together, with the sauce poured over the potatoes and a mound of pickled beetroot at the side. Fry in two batches to avoid crowding.',
    ing: [
      '500 g pork belly, in 5 mm slices',
      '1 kg new potatoes',
      '40 g butter',
      '40 g plain flour',
      '500 ml whole milk',
      '6 tbsp chopped parsley',
      '1/2 tsp salt',
      '1/4 tsp white pepper',
      '200 g pickled beetroot, to serve'
    ],
    st: [
      'Boil the potatoes in salted water for 20 minutes.',
      'While the potatoes boil, lay the pork in a cold dry pan, in 2 batches, and turn on a medium heat. Fry for 12 minutes, turn and fry for 8 minutes more until crisp. Drain.',
      'Meanwhile, melt the butter, stir in the flour for 1 minute, then whisk in the milk and simmer for 8 minutes. Stir in the parsley, salt and pepper.',
      'Serve the pork with the potatoes, sauce and beetroot.'
    ],
    tips: [
      'Start in a cold pan.',
      'Do not turn too soon.',
      'Fry in batches.'
    ],
    pair: ['Pickled beetroot', 'Rye bread', 'Beer'],
    store: 'Best fresh.',
    nut: [1047, 23, 61, 79, 7, 12, 460]
  },

  'aebleskiver': {
    d: 'Danish round pancake balls cooked in a special pan, turned with a skewer and served with jam and icing sugar.',
    meta: 'Æbleskiver, Danish round pancake balls with jam and icing sugar, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['aebleskiver', 'danish pancake balls', 'danish christmas pancake balls', 'æbleskiver recipe', 'round pancakes in a special pan'],
    why: 'What is an æbleskive? It is a round, puffy pancake ball, crisp outside and almost hollow within, and the name means apple slices because, in the old days, slices of apple were put into the batter. Today the batter is plain, and the æbleskiver are eaten at Christmas in Denmark, dipped in jam and dusted with icing sugar.\n\nA special pan with round hollows is needed, though a cast iron one is best. The batter is a thin, eggy mix of flour, buttermilk, eggs, baking powder and cardamom, with the egg whites whisked and folded in. **Fold in the whites last and gently**, because they make the balls light. Butter each hollow and fill to three quarters.\n\nWhen the underside has set, after about 2 minutes, turn each ball a quarter turn with a knitting needle or a skewer, tilting the raw batter into the hollow to form a sphere. Keep turning every minute for about 6 minutes, until the ball is round and deep gold. Dust with icing sugar and serve hot with raspberry jam, and a cup of mulled wine.',
    ing: [
      '250 g plain flour',
      '2 tsp baking powder',
      '1/2 tsp ground cardamom',
      '1 pinch salt',
      '500 ml buttermilk',
      '3 eggs, separated',
      '2 tbsp caster sugar',
      '40 g butter, melted',
      '30 g butter, for the pan',
      '4 tbsp raspberry jam',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, baking powder, cardamom and salt. Whisk in the buttermilk, yolks, sugar and melted butter to a smooth batter.',
      'Whisk the whites to stiff peaks and fold in gently.',
      'Heat an æbleskiver pan over medium heat and butter each hollow. Fill to three quarters with batter.',
      'Cook for 2 minutes, then turn each ball a quarter turn with a skewer. Keep turning every minute for 6 minutes until round and gold.',
      'Dust with the icing sugar and serve hot with the jam.'
    ],
    tips: [
      'Fold in the whites gently.',
      'Turn each ball with a skewer.',
      'Serve at once.'
    ],
    pair: ['Raspberry jam', 'Mulled wine', 'Coffee'],
    store: 'Best fresh.',
    nut: [548, 15, 77, 20, 2, 28, 470]
  },

  'boller-i-karry': {
    d: 'Danish pork meatballs simmered in a mild curry sauce with apple and cream, served with rice, ready in 50 minutes.',
    meta: 'Boller i karry, Danish pork meatballs in a mild curry sauce with apple, cooked for 25 minutes. Four servings, ready in 50 minutes.',
    kw: ['boller i karry', 'danish curry meatballs', 'meatballs in mild curry sauce', 'boller i karry recipe', 'danish meatballs with rice'],
    why: 'It sounds odd to a visitor and makes sense to a Dane: pork meatballs in a mild, sweet, yellow curry sauce with apple, eaten with rice and a spoonful of chutney. Boller i karry is one of the most common home dishes in Denmark, and it is a regular on school and canteen menus.\n\nMix minced pork with a grated onion, an egg, flour, milk, salt and pepper, and leave it for 10 minutes. The mixture is soft and wet, which gives light meatballs. **Dip two tablespoons in water to shape them**, and drop spoonfuls into simmering stock, not browning them first. They cook through in 12 minutes and keep a pale colour. Lift out and keep the stock.\n\nFor the sauce, soften a chopped onion and an apple in butter, add curry powder and flour, and cook for 2 minutes. Whisk in the stock to a smooth sauce, and simmer for 8 minutes. Stir in cream, and return the meatballs. Season and serve over rice with mango chutney and a green salad. Add a pinch of sugar if the sauce is sharp.',
    ing: [
      '600 g minced pork',
      '1 onion, grated',
      '1 egg',
      '40 g plain flour',
      '100 ml whole milk',
      '1 tsp salt',
      '1/2 tsp white pepper',
      '800 ml chicken stock',
      '30 g butter',
      '1 onion, chopped',
      '1 apple, peeled and diced',
      '1 tbsp curry powder',
      '30 g plain flour, for the sauce',
      '100 ml double cream',
      '300 g long grain rice',
      '4 tbsp mango chutney'
    ],
    st: [
      'Mix the pork, grated onion, egg, 40 g flour, milk, salt and pepper. Rest for 10 minutes.',
      'Bring the stock to a simmer. Using two wet spoons, drop in spoonfuls of the mixture and simmer for 12 minutes. Lift out and keep the stock.',
      'Soften the chopped onion and apple in the butter for 5 minutes. Stir in the curry powder and 30 g flour for 2 minutes.',
      'Whisk in 500 ml of the stock and simmer for 8 minutes. Stir in the cream and return the meatballs.',
      'Boil the rice and serve with the meatballs and chutney.'
    ],
    tips: [
      'Poach the meatballs in stock.',
      'Dip the spoons in water.',
      'Add the cream at the end.'
    ],
    pair: ['Rice', 'Mango chutney', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [944, 39, 98, 44, 4, 16, 1470]
  },

  'kringle': {
    d: 'A Danish pretzel shaped pastry of laminated yeast dough filled with almond butter cream and raisins, baked for 35 minutes.',
    meta: 'Kringle, Danish pretzel shaped pastry with almond filling, baked for 35 minutes. Ten servings, ready in 1 hour 20 minutes plus chilling.',
    kw: ['kringle', 'danish pretzel pastry', 'danish almond kringle', 'kringle recipe', 'laminated almond pastry'],
    why: 'The first sign it is right is the sight of the layers: thin, flaky and golden, rising in sheets round a sticky almond filling. Kringle is the Danish pastry shaped like a pretzel, and it is the symbol of Danish bakers, whose guild still uses a pretzel on its sign. This is a simplified version of the laminated dough.\n\nMake a yeast dough with flour, milk, egg and sugar, roll it out into a rectangle and put cold, flat butter on two thirds of it. Fold it in thirds, turn it, and chill for 30 minutes. **Repeat the rolling and folding twice more**, chilling in between, so that the butter stays cold and in layers. If it melts, the pastry goes greasy, so work quickly and use flour sparingly.\n\nFor the remonce, beat butter with sugar, ground almonds and marzipan to a paste. Roll the dough out, spread it with remonce, scatter with raisins, roll up and shape into a pretzel. Let it rise for 30 minutes, brush with egg and bake at 200C for 35 minutes. Drizzle with icing and scatter with flaked almonds once it is cool.',
    ing: [
      '400 g strong bread flour',
      '7 g instant yeast',
      '40 g caster sugar',
      '1 tsp salt',
      '150 ml lukewarm milk',
      '1 egg',
      '200 g cold butter, flattened',
      '100 g butter, softened',
      '100 g caster sugar, for the filling',
      '60 g ground almonds',
      '60 g marzipan, grated',
      '50 g raisins',
      '1 egg, for glazing',
      '80 g icing sugar',
      '2 tbsp water',
      '30 g flaked almonds'
    ],
    st: [
      'Mix the flour, yeast, 40 g sugar, salt, milk and egg and knead for 5 minutes. Chill for 30 minutes.',
      'Roll out to a rectangle, put the flat cold butter on two thirds, fold in thirds and chill for 30 minutes. Roll and fold twice more, chilling between.',
      'Beat the softened butter with 100 g sugar, the almonds and marzipan to a paste.',
      'Roll the dough out to 30 x 60 cm, spread with the filling, scatter with the raisins, roll up and shape into a pretzel on a lined tray. Leave for 30 minutes.',
      'Heat the oven to 200C. Brush with the egg and bake for 35 minutes. Cool, drizzle with the icing sugar mixed with the water and scatter with the flaked almonds.'
    ],
    tips: [
      'Keep the butter cold between folds.',
      'Work quickly with little flour.',
      'Ice it only when cool.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Best the day it is made. Keeps for 2 days in a tin.',
    rest: [90, 'Chilling and rising'],
    nut: [537, 8, 52, 33, 3, 31, 460]
  },

  'leverpostej': {
    d: 'A Danish liver pâté of pork liver, bacon and onion, blended smooth and baked in a water bath for 1 hour, served on rye bread.',
    meta: 'Leverpostej, Danish baked pork liver pâté served on rye bread, baked for 1 hour. Ten servings, ready in 8 hours 30 minutes, soaking included.',
    kw: ['leverpostej', 'danish liver pate', 'danish pork liver pate on rye', 'leverpostej recipe', 'baked liver spread'],
    why: 'It is the filling of the Danish lunch, spread thickly on rye bread with pickled beetroot or cucumber, and it has a mild flavour. Leverpostej is a baked pork liver pâté, creamy and pale brown, made with onions, anchovy and cream, and one of the foods Danes miss most when they move abroad.\n\nSoak the pork liver in milk for 1 hour to mellow its flavour. Drain and pat dry. Put the liver, pork back fat or bacon, onion, anchovies, flour, cream, an egg, salt, pepper and allspice in a food processor and blend until completely smooth. **Chill the mixture before blending**, as warmth makes it split. The mix should be like thick batter.\n\nPour into a lined loaf tin, cover with foil and stand the tin in a roasting dish. Add boiling water to come halfway up the tin. Bake at 160C for 1 hour, until firm and a skewer comes out clean. Cool in the tin, then chill for at least 6 hours. Slice and serve on buttered rye bread with crisp bacon, pickled beetroot and mushrooms fried in butter.',
    ing: [
      '500 g pork liver',
      '300 ml whole milk, for soaking',
      '300 g pork back fat or fatty bacon',
      '1 onion, chopped',
      '15 g anchovy fillets',
      '40 g plain flour',
      '200 ml double cream',
      '1 egg',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '1/2 tsp ground allspice',
      '10 slices rye bread',
      '200 g pickled beetroot, to serve'
    ],
    st: [
      'Soak the liver in the milk for 1 hour. Drain and pat dry.',
      'Heat the oven to 160C and line a 1.5 litre loaf tin. Blend the liver, fat, onion, anchovies, flour, cream, egg, salt, pepper and allspice until completely smooth.',
      'Pour into the tin, cover with foil and stand in a roasting dish. Add boiling water to come halfway up.',
      'Bake for 1 hour until firm. Cool in the tin and chill for 6 hours.',
      'Slice and serve on the rye bread with the beetroot.'
    ],
    tips: [
      'Soak the liver in milk.',
      'Blend until completely smooth.',
      'Bake in a water bath.'
    ],
    pair: ['Rye bread', 'Pickled beetroot', 'Crisp bacon', 'Beer'],
    store: 'Keeps for 5 days in the fridge. Freeze for 2 months.',
    rest: [420, 'Soaking and chilling'],
    nut: [319, 22, 24, 15, 2, 5, 1210]
  },

  'flaeskesteg': {
    d: 'A Danish roast of pork loin with crackling, scored and salted and roasted for 1 hour 40 minutes, the Christmas favourite.',
    meta: 'Flæskesteg, Danish roast pork with crisp crackling and bay, roasted for 1 hour 40 minutes. Six servings, ready in 2 hours 15 minutes.',
    kw: ['flaeskesteg', 'danish roast pork with crackling', 'danish christmas pork roast', 'flæskesteg recipe', 'pork roast with bay and crackling'],
    why: 'A Danish Christmas table without flæskesteg is unthinkable, and no Dane would call it roast pork. The best known version is a joint of pork loin with the rind on, roasted so that the crackling is hard and bubbled and the meat is moist, and served with red cabbage, caramelised potatoes and gravy.\n\nStart a day ahead if you can: score the rind with a very sharp knife in lines 1 cm apart, pour boiling water over it and dry it with kitchen paper. Leave it uncovered in the fridge overnight. **A dry rind is the secret of crackling.** Rub it with salt and set it on a rack in a tin with bay leaves and a splash of water.\n\nRoast at 160C for 1 hour 20 minutes, until the meat reaches 68C. Turn the oven to 250C for 20 minutes, watching the rind, until it blisters all over. Rest for 15 minutes before carving. Make gravy from the tin juices, thickened with flour and cream. If the crackling is not crisp enough, put it under a hot grill for 5 minutes. Serve with red cabbage and brunede kartofler.',
    ing: [
      '2 kg pork loin, rind on',
      '2 tsp salt',
      '4 bay leaves',
      '200 ml water',
      '30 g plain flour',
      '300 ml hot stock',
      '100 ml double cream',
      '800 g braised red cabbage, to serve'
    ],
    st: [
      'Score the rind in lines 1 cm apart, pour over boiling water and dry well. Chill uncovered overnight if you can.',
      'Heat the oven to 160C. Rub the rind with the salt and set the pork on a rack in a tin with the bay and water.',
      'Roast for 1 hour 20 minutes until the meat reaches 68C.',
      'Turn the oven to 250C and roast for 20 minutes until the rind blisters. Rest for 15 minutes.',
      'Whisk the flour into the tin juices, add the stock and cream and simmer for 5 minutes. Carve and serve with the cabbage.'
    ],
    tips: [
      'Dry the rind well.',
      'Finish at a high heat for the crackling.',
      'Rest before carving.'
    ],
    pair: ['Red cabbage', 'Caramelised potatoes', 'Gravy', 'Beer'],
    store: 'Keeps for 3 days in the fridge. Reheat the crackling in a hot oven.',
    nut: [618, 73, 14, 30, 3, 6, 1180]
  },

  'brunede-kartofler': {
    untimed: ['cooling'],
    d: 'Small boiled potatoes glazed in melted sugar and butter until golden and sticky, the sweet side of the Danish Christmas dinner.',
    meta: 'Brunede kartofler, Danish caramelised potatoes in sugar and butter, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['brunede kartofler', 'danish caramelised potatoes', 'sugar browned potatoes', 'danish christmas potatoes', 'brunede kartofler recipe'],
    why: 'Sugar, butter, potatoes: three things, and a side dish that confuses visitors, who find it sweet and then cannot stop. Brunede kartofler are the caramelised potatoes of Denmark, always on the table beside the roast pork at Christmas, where they are the counterpart to the salty crackling and the sour red cabbage.\n\nUse small, waxy potatoes, boiled in their skins, cooled and peeled. Cold potatoes hold their shape and take the caramel better than warm ones. Melt the sugar in a wide, heavy pan over medium heat, without stirring, until it is a pale golden brown. **Add the butter when the sugar is deep amber**, stirring in until combined. The mixture will bubble violently, so do it carefully.\n\nTip in the potatoes and toss to coat them, over a low heat, for about 5 minutes, until they are glossy and golden brown all over. Do not let the caramel go dark, or it will taste bitter. Serve hot, with a pinch of salt. They are best made at the last minute, as the caramel softens on standing.',
    ing: [
      '800 g small waxy potatoes',
      '80 g caster sugar',
      '40 g butter',
      '1/2 tsp salt'
    ],
    st: [
      'Boil the potatoes in their skins for 20 minutes. Cool, then peel.',
      'Melt the sugar in a wide heavy pan over medium heat, without stirring, until amber.',
      'Add the butter and stir until combined, standing back.',
      'Add the potatoes and toss over low heat for 5 minutes until glossy and golden. Season with the salt.'
    ],
    tips: [
      'Use cold, peeled potatoes.',
      'Do not stir the sugar as it melts.',
      'Stop before the caramel turns dark.'
    ],
    pair: ['Roast pork', 'Red cabbage', 'Goose', 'Gravy'],
    store: 'Best fresh.',
    nut: [304, 4, 54, 8, 4, 22, 310]
  },

  'risalamande': {
    untimed: ['cooling completely'],
    d: 'Danish cold rice pudding mixed with whipped cream and chopped almonds and served with warm cherry sauce, chilled for 3 hours.',
    meta: 'Risalamande, Danish cold rice pudding with almonds and cherry sauce, cooked for 40 minutes. Six servings, ready in 55 minutes plus chilling.',
    kw: ['risalamande', 'danish christmas rice pudding', 'rice pudding with almonds and cherry sauce', 'risalamande recipe', 'danish cold rice pudding'],
    why: 'Compare it to the rice pudding in the pan, and this one is cold, fluffy and full of cream. Risalamande, the Danish Christmas dessert, is a plain rice pudding stirred with whipped cream, chopped almonds and vanilla, and served with a warm cherry sauce. There is a game that goes with it: one whole almond is hidden in the bowl, and whoever finds it wins a prize.\n\nSimmer short grain rice in milk with a vanilla pod for 35 minutes, until thick and creamy, stirring often. Cool it completely, spread out in a bowl, and then chill. **Do not fold in the cream until the rice is cold**, otherwise the cream melts and the pudding is runny. Whip the cream with a little sugar and fold it in, with chopped blanched almonds.\n\nChill the pudding for at least 3 hours. For the sauce, simmer cherries with sugar and a splash of water for 10 minutes, and thicken with a little cornflour. Serve the cold pudding in bowls and pour over the warm cherry sauce. Hide a whole almond in one bowl for the prize.',
    ing: [
      '150 g short grain rice',
      '750 ml whole milk',
      '2 g vanilla pod, split',
      '60 g caster sugar',
      '60 g blanched almonds, chopped',
      '300 ml double cream',
      '400 g cherries, stoned',
      '80 g caster sugar, for the sauce',
      '100 ml water',
      '1 tbsp cornflour'
    ],
    st: [
      'Simmer the rice in the milk with the vanilla pod and 60 g sugar for 35 minutes, stirring, until thick and creamy. Remove the pod. Cool completely.',
      'Whip the cream to soft peaks and fold into the cold rice with the almonds.',
      'Chill for 3 hours.',
      'Simmer the cherries, 80 g sugar and water for 10 minutes. Stir in the cornflour mixed with a little water and cook for 2 minutes.',
      'Serve the pudding in bowls with the warm sauce.'
    ],
    tips: [
      'Cool the rice completely before adding cream.',
      'Chill for at least 3 hours.',
      'Hide a whole almond for the prize.'
    ],
    pair: ['Cherry sauce', 'Coffee', 'Mulled wine'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [180, 'Chilling'],
    nut: [543, 10, 65, 27, 3, 40, 70]
  },

  'kransekage': {
    untimed: ['cooling completely'],
    d: 'A tower of marzipan rings baked until chewy and glazed with white icing, the Danish celebration cake for New Year and weddings.',
    meta: 'Kransekage, Danish marzipan ring tower with white icing: the dough is chilled for an hour, then the rings are baked for 25 minutes. Serves twelve.',
    kw: ['kransekage', 'danish marzipan ring cake', 'almond ring tower cake', 'kransekage recipe', 'new year ring cake'],
    why: 'Compare it with a layer cake and you find a different idea of celebration: a tower of marzipan rings, stacked from the largest at the bottom to the smallest at the top, and broken apart with the fingers. Kransekage is the Danish cake for New Year, weddings and other big events, made of almonds, sugar and egg white and nothing else.\n\nGrind blanched almonds finely, mix them with icing sugar, and knead in the egg whites to a thick, sticky dough. The dough should be firm enough to roll but slightly tacky. **Rest it in the fridge for 1 hour** so it is easier to handle, and roll it between floured hands into ropes of different lengths. Join each rope into a ring with a dab of water, graded in size from 8 cm to 25 cm.\n\nBake the rings on lined trays at 180C for about 20 to 25 minutes, until pale gold. They should be chewy in the middle, so do not overbake. Cool completely. Mix icing sugar with egg white and lemon juice, pipe it in zigzags over each ring and stack them into a tower, with the largest on the bottom. Serve by breaking off the rings.',
    ing: [
      '500 g blanched almonds, finely ground',
      '500 g icing sugar',
      '3 egg whites',
      '2 tbsp plain flour, for dusting',
      '150 g icing sugar, for the icing',
      '1 egg white, for the icing',
      '1 tsp lemon juice'
    ],
    st: [
      'Mix the almonds and 500 g icing sugar. Knead in the 3 egg whites to a firm, slightly sticky dough. Chill for 1 hour.',
      'Heat the oven to 180C and line trays. With floured hands roll the dough into ropes and join them into 12 rings of graded sizes from 8 to 25 cm.',
      'Bake for 20 to 25 minutes until pale gold. Cool completely on the trays.',
      'Mix the 150 g icing sugar, the egg white and lemon juice and pipe in zigzags over each ring.',
      'Stack the rings into a tower, largest at the bottom, and serve by breaking them apart.'
    ],
    tips: [
      'Chill the dough for an hour.',
      'Do not overbake the rings.',
      'Cool them fully before icing.'
    ],
    pair: ['Sparkling wine', 'Coffee', 'Tea'],
    store: 'Keeps for 2 weeks in a tin.',
    rest: [60, 'Chilling'],
    nut: [485, 10, 64, 21, 5, 56, 20]
  },

  'danish-butter-cookies': {
    d: 'Small buttery Danish biscuits piped into rings and swirls and baked for 12 minutes until pale gold, the blue tin classic.',
    meta: 'Danish butter cookies, small piped butter biscuits with vanilla, baked for 12 minutes at 190C. Thirty biscuits, ready in 35 minutes.',
    kw: ['danish butter cookies', 'danish piped butter biscuits', 'blue tin butter cookies', 'danish butter cookie recipe', 'butter biscuits with vanilla'],
    why: 'What is in the blue tin? Butter cookies, of course, and the secret of them is the quantity of butter and the way the dough is beaten. Danish butter cookies are small, crisp, sugar dusted biscuits piped into wreaths and swirls, and they are the biscuit that is eaten at Christmas around the world, usually from a tin that ends up holding sewing supplies.\n\nBeat the butter and sugar for at least 5 minutes, until almost white and fluffy. Add the egg and vanilla, then fold in the flour and a pinch of salt. **The dough should be soft enough to pipe through a star nozzle**, but stiff enough to hold its pattern. If it is too stiff, add a teaspoon of milk. Beat a minute longer if the dough looks curdled.\n\nPipe rings and S shapes, about 4 cm across, onto cold lined trays, spacing them 2 cm apart. Sprinkle with coarse sugar. Bake at 190C for 12 minutes, until the edges are pale gold. Cool on the tray, then store in a tin with a sheet of baking paper between the layers. They keep for 3 weeks.',
    ing: [
      '250 g butter, softened',
      '120 g caster sugar',
      '1 egg',
      '2 tsp vanilla extract',
      '350 g plain flour',
      '1 pinch salt',
      '2 tbsp coarse sugar'
    ],
    st: [
      'Heat the oven to 190C and line two cold trays.',
      'Beat the butter and caster sugar for 5 minutes until almost white. Beat in the egg and vanilla.',
      'Fold in the flour and salt to a soft dough.',
      'Spoon into a piping bag with a star nozzle and pipe 30 rings and swirls. Sprinkle with the coarse sugar.',
      'Bake for 12 minutes until pale gold at the edges. Cool on the trays.'
    ],
    tips: [
      'Beat the butter until almost white.',
      'Pipe onto cold trays.',
      'Keep the biscuits in a tin.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Keeps for 3 weeks in a tin.',
    nut: [123, 1, 14, 7, 0, 5, 10]
  },

  'korvapuusti': {
    d: 'Finnish cinnamon rolls of cardamom dough, twisted into pinched rolls with butter and cinnamon sugar and baked for 20 minutes.',
    meta: 'Korvapuusti, Finnish cardamom cinnamon rolls, baked for 20 minutes at 225C. Twelve servings, ready in 1 hour plus rising.',
    kw: ['korvapuusti', 'finnish cinnamon rolls', 'finnish cardamom cinnamon buns', 'korvapuusti recipe', 'slapped ears cinnamon rolls'],
    why: 'Does a cinnamon roll have to be a spiral? Not in Finland, where korvapuusti, the Finnish cinnamon roll, is cut into wedges and pinched, so that it looks like an ear, which is what the name means: a slap on the ear. It is baked on every Finnish weekend, with cardamom in the dough and cinnamon in the filling.\n\nMake an enriched yeast dough with milk, egg, butter, sugar and ground cardamom, and knead it for 10 minutes until smooth. Leave it to rise for 1 hour. Roll it out into a large rectangle, spread with soft butter and sprinkle with cinnamon and sugar. **Roll it up from the long side and cut triangular wedges**, alternately from either side, so the wedges taper to a point. Press down the middle of each wedge with a finger, which makes the roll flare into a ruffle.\n\nSet on a lined tray and leave for 30 minutes. Brush with egg, sprinkle with pearl sugar and bake at 225C for 20 minutes until golden. Cool for 10 minutes. They are at their best warm, with strong coffee, and they freeze well.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '90 g caster sugar',
      '1 tsp salt',
      '2 tsp ground cardamom',
      '250 ml lukewarm milk',
      '1 egg',
      '80 g butter, softened',
      '60 g butter, softened, for the filling',
      '60 g caster sugar, for the filling',
      '2 tbsp ground cinnamon',
      '1 egg, beaten, for glazing',
      '2 tbsp pearl sugar'
    ],
    st: [
      'Mix the flour, yeast, 90 g sugar, salt, cardamom, milk, egg and 80 g butter and knead for 10 minutes. Leave to rise for 1 hour.',
      'Roll into a 30 x 50 cm rectangle. Spread with the soft butter and sprinkle with the 60 g sugar and cinnamon.',
      'Roll up from the long side and cut into 12 triangular wedges. Press down the centre of each with a finger.',
      'Set on lined trays and leave for 30 minutes. Heat the oven to 225C.',
      'Brush with the egg, sprinkle with the pearl sugar and bake for 20 minutes until golden.'
    ],
    tips: [
      'Cut the wedges at alternate angles.',
      'Press the centre down to make the ruffle.',
      'Eat warm.'
    ],
    pair: ['Coffee', 'Tea', 'Hot chocolate'],
    store: 'Best the day they are made. Freeze for 2 months.',
    rest: [90, 'Rising'],
    nut: [280, 6, 37, 12, 2, 18, 420]
  },

  'ruisleipa': {
    d: 'A Finnish sour rye bread of rye flour, water and a starter, with a chewy crumb and a cracked crust, risen for 90 minutes and baked for 40 minutes.',
    meta: 'Ruisleipä, Finnish sour rye bread with a chewy crumb, baked for 40 minutes. Ten servings, ready in 1 hour plus rising.',
    kw: ['ruisleipa', 'finnish rye bread', 'finnish sour rye loaf', 'ruisleipä recipe', 'dark sour rye bread'],
    why: 'Compare it to the German vollkornbrot, and you find a flatter, chewier, more sour loaf, the daily bread of Finland, eaten with butter, cheese or fish three times a day. Ruisleipä is made of rye flour, water and a sour starter, with no wheat, and a good one has a deep, dark flavour and a sticky crumb.\n\nMix rye flour with warm water, yeast and a spoonful of sour starter or a little plain yoghurt for the tang, and let the mix stand for 30 minutes. Add salt and more flour to make a thick dough. It is too sticky to knead, so stir it with a wet spoon. **Wet your hands and shape the dough into a flat round**, about 4 cm thick, and cover it with a cloth.\n\nLeave it to rise for 90 minutes until puffy and cracked on top. Prick the surface all over with a fork, brush with water and bake at 220C for 40 minutes, until the crust is dark and the loaf sounds hollow. Wrap it in a damp cloth while cooling, which keeps the crust soft. Cut into thin slices only after it is completely cold.',
    ing: [
      '500 g wholemeal rye flour',
      '400 ml lukewarm water',
      '7 g instant yeast',
      '2 tbsp plain yoghurt',
      '1 tbsp honey',
      '2 tsp salt',
      '100 g strong white flour',
      '1 tbsp rye flour, for dusting'
    ],
    st: [
      'Mix 300 g of the rye flour, the lukewarm water, yeast, yoghurt and honey and leave to stand for 30 minutes.',
      'Stir in the remaining rye flour, the white flour and the salt to a thick, sticky dough.',
      'With wet hands shape into a flat round on a lined tray. Cover and leave to rise for 90 minutes.',
      'Heat the oven to 220C. Prick the surface with a fork, brush with water and dust with rye flour.',
      'Bake for 40 minutes until the loaf sounds hollow. Wrap in a damp cloth to cool.'
    ],
    tips: [
      'Do not knead the sticky dough.',
      'Wet your hands to shape it.',
      'Slice only when completely cold.'
    ],
    pair: ['Butter and cheese', 'Smoked salmon', 'Pea soup'],
    store: 'Keeps for 5 days wrapped. Freeze sliced for 2 months.',
    rest: [120, 'Standing and rising'],
    nut: [229, 7, 48, 1, 2, 2, 470]
  },

  'mustikkapiirakka': {
    d: 'A Finnish blueberry pie of a soft shortcrust base and a thick layer of fresh or frozen blueberries under a vanilla custard topping.',
    meta: 'Mustikkapiirakka, Finnish blueberry pie with custard topping, baked for 35 minutes at 200C. Eight servings, ready in 1 hour 5 minutes.',
    kw: ['mustikkapiirakka', 'finnish blueberry pie', 'blueberry pie with custard topping', 'mustikkapiirakka recipe', 'finnish summer berry pie'],
    why: 'Finland is the land of blueberries, and this is the pie where they are the star, picked by the bucket in the forest in July and August and eaten warm with vanilla ice cream. Mustikkapiirakka is the simplest of the berry pies: a soft, short base, a heap of berries and a thin custard poured over before baking.\n\nThe base is flour, butter, sugar and an egg yolk, pressed into the tin without rolling. Bake it blind for 10 minutes to set it. Toss the blueberries with a spoonful of potato starch, which keeps their juice from soaking the pastry, and pile them in a thick layer. **Use blueberries straight from frozen**, not defrosted, because defrosted ones release juice and make the pie soggy.\n\nWhisk the custard from egg, sugar, soured cream and a little vanilla and pour it over the berries. Bake at 200C for 35 minutes, until the custard is set and golden at the edges. Cool for 15 minutes. Serve warm or cold, with a dollop of whipped cream or vanilla ice cream. The pie keeps for 2 days in the fridge and can also be made with bilberries.',
    ing: [
      '250 g plain flour',
      '125 g cold butter, cubed',
      '60 g caster sugar',
      '1 egg yolk',
      '600 g blueberries, frozen',
      '1 tbsp potato starch',
      '2 eggs',
      '80 g caster sugar, for the custard',
      '200 g soured cream',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 200C. Rub the butter into the flour and 60 g sugar, mix in the yolk and press into a 24 cm tin. Bake blind for 10 minutes.',
      'Toss the frozen blueberries with the starch and spread over the base.',
      'Whisk the eggs, 80 g sugar, soured cream and vanilla and pour over the berries.',
      'Bake for 35 minutes until set and golden at the edges. Cool for 15 minutes.'
    ],
    tips: [
      'Use frozen berries straight from the freezer.',
      'Toss them with starch.',
      'Serve warm or cold.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Coffee'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [424, 7, 54, 20, 3, 26, 30]
  },

  'kalakukko': {
    d: 'A Finnish fish pie baked inside a rye crust with small fish and pork belly for 3 hours, a speciality of Savonia.',
    meta: 'Kalakukko, Finnish fish and pork pie sealed in a rye crust, baked for 3 hours. Six servings, ready in 4 hours 10 minutes.',
    kw: ['kalakukko', 'finnish fish pie in rye crust', 'savonian fish bread', 'kalakukko recipe', 'rye crust fish and pork loaf'],
    why: 'This is a dish from a time when a loaf had to carry a meal into the forest. Kalakukko is the fish bread of Savonia in eastern Finland: a loaf of rye dough filled with small freshwater fish, vendace or perch, and strips of pork belly, sealed and baked for hours until everything has melted into a rich, moist filling. The crust is not eaten in the same way, but cut away and kept for dipping.\n\nThe dough is a stiff mix of rye flour, wheat flour, water and salt. Roll it into an oval. Layer the filling in the centre: cleaned fish, thin slices of pork belly and sprinkled salt, in layers. **Fold the dough over and seal every edge with water**, so the steam cannot escape. Press the seams with a fork and brush with melted butter.\n\nBake at 150C for 3 hours, covered with foil, until the crust is dark and the filling is fully cooked. Remove the foil for the last 15 minutes. Cool for 20 minutes, then cut off the lid. The fish bones soften and are edible. Serve in wedges with butter, buttermilk, and boiled potatoes. A traditional Savonian lunch.',
    ing: [
      '400 g wholemeal rye flour',
      '200 g strong white flour',
      '350 ml lukewarm water',
      '1 tsp salt',
      '600 g herring, cleaned',
      '300 g pork belly, in thin slices',
      '1 tsp salt, for the filling',
      '40 g butter, melted',
      '400 ml buttermilk, to serve'
    ],
    st: [
      'Mix the rye flour, white flour, water and 1 teaspoon salt to a stiff dough and knead for 5 minutes.',
      'Heat the oven to 150C. Roll the dough into a 40 cm oval.',
      'Layer the fish and pork belly in the centre, salting each layer with the filling salt.',
      'Fold the dough over the filling and seal the edges with water. Press with a fork and brush with the butter. Set on a tray.',
      'Cover with foil and bake for 3 hours, removing the foil for the last 15 minutes.',
      'Cool for 20 minutes, cut off the lid and serve in wedges with the buttermilk.'
    ],
    tips: [
      'Seal every seam so the steam stays in.',
      'Cover with foil for most of the bake.',
      'Rest before cutting.'
    ],
    pair: ['Buttermilk', 'Butter', 'Boiled potatoes'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [870, 35, 79, 46, 3, 4, 980]
  },

  'porkkanalaatikko': {
    d: 'A Finnish Christmas casserole of mashed carrots, rice, cream and egg flavoured with nutmeg and baked for 1 hour.',
    meta: 'Porkkanalaatikko, Finnish Christmas carrot and rice casserole, baked for 1 hour. Six servings, ready in 1 hour 45 minutes.',
    kw: ['porkkanalaatikko', 'finnish carrot casserole', 'carrot and rice bake', 'finnish christmas carrot dish', 'porkkanalaatikko recipe'],
    why: 'Sweet, creamy and fragrant with nutmeg, it is the dish that sits on the Finnish Christmas table beside the ham and the herring, and it is the one that children eat first. Porkkanalaatikko is a baked casserole of mashed carrots and rice, held together by egg and cream, and it can be made a day ahead.\n\nBoil the carrots until very soft, about 20 minutes, and mash them. Cook the rice separately in milk for 25 minutes until it is very soft and thick, like a rice pudding. Mix the two together with cream, eggs, a spoonful of golden syrup, salt and nutmeg. **Mash the carrots thoroughly**, since the texture should be smooth with no stringy bits. Taste the mixture: it should be gently sweet.\n\nPour into a buttered dish, scatter with breadcrumbs and dot with butter. Bake at 175C for 1 hour, until set and golden brown on top and slightly puffed. Rest for 10 minutes. Serve warm with the Christmas ham, or on its own with lingonberry jam. Leftovers reheat well and can be sliced and fried in butter the next day.',
    ing: [
      '800 g carrots, peeled and sliced',
      '100 g pudding rice',
      '500 ml whole milk',
      '3 eggs',
      '150 ml double cream',
      '2 tbsp golden syrup',
      '1 tsp salt',
      '1/2 tsp ground nutmeg',
      '3 tbsp dry breadcrumbs',
      '30 g butter, for dotting',
      '150 g lingonberry jam, to serve'
    ],
    st: [
      'Boil the carrots in salted water for 20 minutes until very soft. Drain and mash smooth.',
      'While the carrots boil, simmer the rice in the milk for 25 minutes, stirring, until very soft and thick.',
      'Heat the oven to 175C. Mix the carrots, rice, eggs, cream, syrup, salt and nutmeg.',
      'Pour into a buttered 2 litre dish, scatter with the breadcrumbs and dot with butter.',
      'Bake for 1 hour until set and golden. Rest for 10 minutes and serve with the jam.'
    ],
    tips: [
      'Mash the carrots until smooth.',
      'Cook the rice until very soft.',
      'Make it a day ahead.'
    ],
    pair: ['Christmas ham', 'Lingonberry jam', 'Rye bread'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [414, 9, 54, 18, 4, 30, 600]
  },

  'makaronilaatikko': {
    d: 'A Finnish baked macaroni casserole of minced beef, onion, milk and egg, baked for 45 minutes and served with ketchup and lingonberries.',
    meta: 'Makaronilaatikko, Finnish macaroni and minced beef casserole baked in an egg and milk custard, baked for 45 minutes. Six servings, ready in 1 hour 15 minutes.',
    kw: ['makaronilaatikko', 'finnish macaroni casserole', 'macaroni and mince bake with egg custard', 'makaronilaatikko recipe', 'finnish comfort food casserole'],
    why: 'Hot, golden and comforting, this is the dish that Finnish children remember from school lunches and grandmothers\' kitchens. Makaronilaatikko is a macaroni casserole with minced beef and onions, set in an egg and milk custard and baked until the top is browned and crisp at the edges. It is plain and filling, and it is served with ketchup and lingonberry jam.\n\nBoil the macaroni for 3 minutes less than the packet says, so that it finishes cooking in the oven. Fry the onion in butter until soft, add the minced beef and brown for 10 minutes, then season with salt, pepper and a pinch of allspice. **Mix the meat and macaroni together in the dish before adding the custard**, so that the pasta is evenly spread. Whisk eggs with milk and pour over.\n\nBake at 200C for 45 minutes, until the custard is set and the top is browned. Rest for 10 minutes before cutting into squares. It is often cut into big portions and eaten with ketchup, pickled cucumbers and a spoon of lingonberry jam, which gives a sweet and sour contrast. Leftovers are good fried in butter the next day.',
    ing: [
      '300 g macaroni',
      '30 g butter',
      '1 onion, chopped',
      '500 g minced beef',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1/4 tsp ground allspice',
      '3 eggs',
      '500 ml whole milk',
      '3 tbsp dry breadcrumbs',
      '150 g lingonberry jam, to serve',
      '4 tbsp ketchup, to serve'
    ],
    st: [
      'Heat the oven to 200C. Boil the macaroni for 3 minutes less than the packet says. Drain.',
      'While the macaroni boils, fry the onion in the butter for 5 minutes. Add the beef and brown for 10 minutes. Season with the salt, pepper and allspice.',
      'Mix the beef and macaroni in a buttered 2 litre dish.',
      'Whisk the eggs and milk and pour over. Scatter with the breadcrumbs.',
      'Bake for 45 minutes until set and browned. Rest for 10 minutes and serve with the jam and ketchup.'
    ],
    tips: [
      'Under cook the macaroni.',
      'Mix the meat and pasta before the custard.',
      'Rest before cutting.'
    ],
    pair: ['Lingonberry jam', 'Ketchup', 'Pickled cucumbers'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [542, 30, 65, 18, 2, 24, 640]
  },

  'runeberg-tart': {
    d: 'Finnish almond and raspberry jam cakes, soaked in rum syrup and topped with sugar icing, baked for 25 minutes in small tins.',
    meta: 'Runeberg tart, Finnish almond cakes with raspberry jam and rum icing, baked for 25 minutes. Eight servings, ready in 50 minutes.',
    kw: ['runeberg tart', 'finnish runebergin torttu', 'almond and raspberry jam cakes', 'runeberg cakes recipe', 'finnish rum almond cake'],
    why: 'Eat these on 5 February, the birthday of Johan Ludvig Runeberg, the national poet of Finland. The story goes that his wife made the first cake from what she had in the kitchen: crumbs, almonds and a little rum. Runeberg tarts are small cylindrical cakes with a sugar ring on top and a dab of raspberry jam in the middle.\n\nThe batter is butter, sugar, egg, almonds, gingersnap crumbs and flour, mixed with cream and a little rum. The ground gingersnaps give a mild spice and a moist crumb. Butter the tins well, and fill them two thirds full. **Do not overfill**, as the batter rises and spills over. Bake at 200C for 25 minutes, until golden, and cool in the tins for 5 minutes.\n\nWhile the cakes are warm, soak them with a syrup of sugar, water and rum. Cool completely. Make an icing from icing sugar and a few drops of water, pipe a ring on each cake and fill the centre with raspberry jam. Serve with coffee. The cakes keep for 4 days and taste better on the second day, when the syrup has soaked in.',
    ing: [
      '100 g butter, softened',
      '100 g caster sugar',
      '1 egg',
      '60 g ground almonds',
      '60 g gingersnap crumbs',
      '60 g plain flour',
      '1 tsp baking powder',
      '100 ml double cream',
      '2 tbsp dark rum',
      '50 g caster sugar, for the syrup',
      '50 ml water',
      '2 tbsp dark rum, for the syrup',
      '100 g icing sugar',
      '1 tbsp water',
      '4 tbsp raspberry jam'
    ],
    st: [
      'Heat the oven to 200C and butter 8 small tins. Beat the butter and 100 g sugar until pale. Beat in the egg.',
      'Fold in the almonds, gingersnap crumbs, flour and baking powder, then the cream and 2 tablespoons of rum.',
      'Fill the tins two thirds full and bake for 25 minutes until golden. Cool in the tins for 5 minutes.',
      'Simmer the syrup sugar and water for 3 minutes, add the rum and brush over the warm cakes.',
      'Mix the icing sugar with the 1 tablespoon of water, pipe a ring on each cake and fill with the jam.'
    ],
    tips: [
      'Butter the tins well.',
      'Fill them two thirds full.',
      'Soak the cakes while warm.'
    ],
    pair: ['Coffee', 'Tea', 'Rum'],
    store: 'Keeps for 4 days in a tin.',
    nut: [396, 4, 50, 20, 1, 39, 110]
  },

  'poronkaristys': {
    d: 'Thin slices of reindeer or venison sautéed with onion and served over mashed potatoes with lingonberries. The meat spends an hour in the freezer first so it slices thinly.',
    meta: 'Poronkäristys, Finnish sautéed reindeer or venison with lingonberries and mash: the meat is part-frozen to slice thinly, then cooked for 20 minutes.',
    kw: ['poronkaristys', 'finnish sauteed reindeer', 'lapland reindeer stew', 'poronkäristys recipe', 'venison with lingonberries and mash'],
    why: 'Short and sharp: freeze the meat first, slice it thin and fry it hot. That is the instruction for poronkäristys, the Lapland dish of sautéed reindeer, which is thinly sliced meat, fried quickly with onion and finished with cream. It is served over mashed potatoes with lingonberry jam, and is the most famous meal of northern Finland.\n\nReindeer meat is lean and dark. If you cannot get it, use venison, or even beef sirloin. Freeze the meat for an hour until it is firm, as it is then easy to slice into thin shavings. Melt the butter in a large heavy pan until it foams. **Fry the meat in two batches over a very high heat**, only 2 minutes each, so that it browns and does not stew in its juices. Lift out.\n\nIn the same pan, fry a sliced onion until golden, then add water, juniper, allspice and a splash of cream. Return the meat and simmer for 5 minutes, until the sauce coats it. Season with salt. Serve over a mound of butter rich mashed potato with a spoonful of lingonberry jam and pickled cucumber on the side.',
    ing: [
      '600 g reindeer, venison or beef sirloin, thinly sliced',
      '50 g butter',
      '1 onion, sliced',
      '150 ml water',
      '2 g juniper berries, crushed',
      '1 g allspice berries, crushed',
      '100 ml double cream',
      '1 tsp salt',
      '800 g mashed potato, to serve',
      '150 g lingonberry jam, to serve'
    ],
    st: [
      'Freeze the meat for 1 hour and slice thinly.',
      'Melt half the butter in a large pan until foaming. Fry the meat in 2 batches over very high heat for 2 minutes each. Lift out.',
      'Melt the remaining butter and fry the onion for 5 minutes until golden. Add the water, juniper and allspice and boil for 3 minutes.',
      'Add the cream, return the meat and simmer for 5 minutes. Season with the salt.',
      'Serve over the mashed potato with the lingonberry jam.'
    ],
    tips: [
      'Slice the meat thin while half frozen.',
      'Fry in two batches over high heat.',
      'Serve with lingonberries.'
    ],
    pair: ['Mashed potato', 'Lingonberry jam', 'Pickled cucumber', 'Beer'],
    store: 'Best fresh.',
    rest: [60, 'Freezing'],
    nut: [675, 37, 62, 31, 5, 26, 710]
  },

  'pulla': {
    d: 'A Finnish braided cardamom coffee bread, soft and slightly sweet, risen for 90 minutes and baked for 25 minutes.',
    meta: 'Pulla, Finnish braided cardamom coffee bread with pearl sugar, baked for 25 minutes. Twelve servings, ready in 55 minutes plus rising.',
    kw: ['pulla', 'finnish cardamom bread', 'finnish braided coffee bread', 'pulla recipe', 'nisu cardamom loaf'],
    why: 'Do not bake pulla when you are in a hurry. It is the Finnish coffee bread, and like most good things it needs time to rise, twice. Pulla is the loaf you are given when you visit a Finnish home, sliced and buttered, with a cup of strong coffee, and its scent of cardamom is the taste of every Finnish childhood.\n\nThe dough is milk, yeast, sugar, egg, butter and ground cardamom, and the more butter you add, the softer the bread. Knead for 10 minutes, then leave it to rise for 90 minutes until doubled. **Grind the cardamom seeds fresh**, because they lose their fragrance as soon as they are ground. Divide into three, roll into ropes and braid, or make two small braids for neat slices.\n\nLet the braid rise for 30 minutes on a lined tray. Brush with beaten egg and scatter with pearl sugar and flaked almonds. Bake at 200C for 25 minutes, until deep gold. Cool on a rack. The loaf is at its best on the day, but it can be sliced and frozen, and then toasted. Serve with butter and a good cup of coffee.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '100 g caster sugar',
      '1 tsp salt',
      '2 tsp ground cardamom',
      '250 ml lukewarm milk',
      '1 egg',
      '100 g butter, softened',
      '1 egg, beaten, for glazing',
      '2 tbsp pearl sugar',
      '2 tbsp flaked almonds'
    ],
    st: [
      'Mix the flour, yeast, sugar, salt, cardamom, milk, egg and butter and knead for 10 minutes. Leave to rise for 90 minutes.',
      'Divide into 3 and roll into 50 cm ropes. Braid and tuck the ends under on a lined tray. Leave for 30 minutes.',
      'Heat the oven to 200C. Brush with the beaten egg and scatter with the pearl sugar and almonds.',
      'Bake for 25 minutes until deep gold. Cool on a rack.'
    ],
    tips: [
      'Grind the cardamom fresh.',
      'Let the braid rise before baking.',
      'Serve with butter and coffee.'
    ],
    pair: ['Coffee', 'Butter', 'Tea'],
    store: 'Best fresh. Freeze sliced for 2 months.',
    rest: [120, 'Rising'],
    nut: [246, 6, 33, 10, 2, 14, 420]
  },

  'munkki': {
    d: 'Finnish ring doughnuts of cardamom dough, fried until golden and rolled in sugar, a May Day treat.',
    meta: 'Munkki, Finnish cardamom doughnuts rolled in sugar, fried for 15 minutes. Sixteen servings, ready in 35 minutes plus rising.',
    kw: ['munkki', 'finnish doughnuts', 'finnish may day doughnuts', 'munkki recipe', 'cardamom doughnuts rolled in sugar'],
    why: 'It is the smell that gives the day away: hot oil, cardamom and sugar, rising from a stall on the first of May. Munkki, the Finnish doughnut, is the treat of Vappu, the spring festival, and it is eaten outdoors with a cup of sima, a mead like lemonade, in the first sun of the year.\n\nThe dough is enriched with milk, eggs, butter and sugar, and flavoured with ground cardamom. Knead for 10 minutes, then leave it to rise for 1 hour until doubled. Roll it out 1 cm thick and cut rounds, with a small hole in the middle. **Rest the cut rings for 20 minutes** before frying, so that they puff and float. Do not overfill the pan.\n\nHeat the oil to 175C and fry 3 or 4 doughnuts at a time for about 2 minutes on each side, until golden brown. Drain on kitchen paper and roll in sugar while still hot. A white ring should show round the middle, which means they were fried at the right heat. Eat them the same day, fresh, with sima or coffee.',
    ing: [
      '500 g plain flour',
      '7 g instant yeast',
      '80 g caster sugar',
      '1 tsp salt',
      '2 tsp ground cardamom',
      '250 ml lukewarm milk',
      '2 eggs',
      '60 g butter, softened',
      '80 ml sunflower oil absorbed, from 1 litre for frying',
      '100 g caster sugar, for rolling'
    ],
    st: [
      'Mix the flour, yeast, 80 g sugar, salt, cardamom, milk, eggs and butter and knead for 10 minutes. Leave to rise for 1 hour.',
      'Roll out 1 cm thick and cut 16 rings with a 8 cm cutter and a 2 cm hole. Rest for 20 minutes.',
      'Heat the oil to 175C and fry 3 or 4 at a time for 2 minutes on each side until golden.',
      'Drain on kitchen paper and roll in the 100 g sugar while hot.'
    ],
    tips: [
      'Rest the rings before frying.',
      'Keep the oil at 175C.',
      'Roll in sugar while hot.'
    ],
    pair: ['Sima', 'Coffee', 'Hot chocolate'],
    store: 'Best the day they are made.',
    rest: [80, 'Rising'],
    nut: [245, 5, 36, 9, 1, 12, 160]
  },

  'finnish-pancake-pannukakku': {
    d: 'A Finnish oven baked pancake of eggs, milk and flour, baked in a tin for 30 minutes until puffed, golden and custardy.',
    meta: 'Finnish pannukakku, oven baked pancake with a custardy centre, baked for 30 minutes at 225C. Six servings, ready in 40 minutes.',
    kw: ['finnish pancake pannukakku', 'finnish oven pancake', 'baked finnish pancake', 'pannukakku recipe', 'oven baked custard pancake'],
    why: 'Compare it with a Yorkshire pudding and you find the same eggy batter, but a thicker, sweeter, more custardy result, baked in a rectangular tin and cut into squares. Pannukakku is the Finnish oven pancake, a school and family dish that takes five minutes to mix and goes into the oven while you lay the table.\n\nWhisk eggs with milk, sugar, flour, salt and a spoonful of vanilla, and let the batter stand for 10 minutes. **Heat the buttered tin in the oven first** for 5 minutes, so the batter sizzles on contact and puffs at the edges. Pour the batter into the hot tin and return it to the oven at once.\n\nBake at 225C for 30 minutes, until the top is puffed, golden and speckled with brown. It will sink as it cools, which is normal. Cut into squares and serve warm with strawberry jam, whipped cream or fresh berries. A little cardamom in the batter gives it a Finnish note. Leftovers can be eaten cold with jam, and they keep for 2 days in the fridge.',
    ing: [
      '4 eggs',
      '750 ml whole milk',
      '150 g plain flour',
      '2 tbsp caster sugar',
      '1/2 tsp salt',
      '1 tsp vanilla extract',
      '1/2 tsp ground cardamom',
      '40 g butter',
      '150 g strawberry jam, to serve'
    ],
    st: [
      'Whisk the eggs, milk, flour, sugar, salt, vanilla and cardamom until smooth. Stand for 10 minutes.',
      'Heat the oven to 225C. Put the butter in a 25 x 35 cm tin and warm in the oven for 5 minutes until melted.',
      'Pour the batter into the hot tin and return it to the oven at once.',
      'Bake for 30 minutes until puffed and golden. Cut into squares and serve with the jam.'
    ],
    tips: [
      'Heat the buttered tin first.',
      'Rest the batter for 10 minutes.',
      'Serve while puffed and warm.'
    ],
    pair: ['Strawberry jam', 'Whipped cream', 'Fresh berries'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [345, 11, 46, 13, 1, 26, 300]
  },

  'irish-whiskey-cake': {
    d: 'A rich Irish fruit cake of dried fruit soaked in whiskey and tea, baked slowly for 1 hour and fed with more whiskey.',
    meta: 'Irish whiskey cake, rich fruit cake with whiskey soaked fruit, baked for 1 hour at 160C. Twelve servings, ready in 1 hour 20 minutes plus soaking.',
    kw: ['irish whiskey cake', 'irish whiskey fruit cake', 'whiskey soaked fruit cake', 'irish christmas cake', 'whiskey cake recipe'],
    why: 'A cake for the cold nights of November, when the fruit has been soaking since the evening before, and the kitchen smells of whiskey and spice. The Irish whiskey cake is a rich fruit cake, with raisins, sultanas and currants soaked in tea and whiskey, mixed with butter, sugar, eggs and mixed spice, and baked slowly until it is dark and moist.\n\nSoak the dried fruit in hot black tea and whiskey for at least 8 hours or overnight, until plump. Drain it, keeping the liquid. Cream the butter and brown sugar, add the eggs one at a time, then fold in the flour, spice and the fruit. **Add a spoonful of the soaking liquid if the batter is stiff**, but it should be thick, not runny. Line the tin with two layers of baking paper, which stops the edges from burning.\n\nBake at 160C for 1 hour, until a skewer comes out clean. Prick the warm cake all over and spoon over a few tablespoons of whiskey. Cool in the tin, wrap in baking paper and foil, and store. Feed it with more whiskey each week until Christmas. The cake keeps for 6 weeks and the flavour deepens over time.',
    ing: [
      '250 g raisins',
      '250 g sultanas',
      '100 g currants',
      '250 ml hot black tea',
      '100 ml Irish whiskey',
      '175 g butter, softened',
      '175 g soft brown sugar',
      '3 eggs',
      '250 g plain flour',
      '2 tsp mixed spice',
      '1 tsp baking powder',
      '4 tbsp Irish whiskey, for feeding'
    ],
    st: [
      'Soak the raisins, sultanas and currants in the tea and 100 ml whiskey overnight. Drain, keeping the liquid.',
      'Heat the oven to 160C and double line a 20 cm tin.',
      'Cream the butter and sugar for 5 minutes. Beat in the eggs one at a time.',
      'Fold in the flour, spice, baking powder and the drained fruit, adding a spoon of liquid if stiff.',
      'Bake for 1 hour until a skewer comes out clean. Prick the warm cake and spoon over 2 tablespoons of whiskey. Cool in the tin and wrap.'
    ],
    tips: [
      'Soak the fruit overnight.',
      'Double line the tin.',
      'Feed the cake with whiskey weekly.'
    ],
    pair: ['Tea', 'Irish coffee', 'Cheddar'],
    store: 'Keeps for 6 weeks wrapped, fed with whiskey.',
    rest: [480, 'Soaking'],
    nut: [417, 5, 70, 13, 3, 45, 70]
  },

  'baileys-cheesecake': {
    d: 'A no bake cheesecake of biscuit base, cream cheese and Irish cream liqueur, topped with chocolate and set for 6 hours.',
    meta: 'Baileys cheesecake, no bake cheesecake with Irish cream liqueur and chocolate, no baking. Ten servings, ready in 30 minutes plus chilling.',
    kw: ['baileys cheesecake', 'irish cream cheesecake', 'no bake baileys cheesecake', 'baileys cheesecake recipe', 'irish cream liqueur dessert'],
    why: 'Does a cheesecake need an oven? Not this one. A Baileys cheesecake is a no bake dessert of cream cheese and double cream flavoured with Irish cream liqueur, on a crunchy chocolate biscuit base, and it is one of the most common Irish pub desserts. It takes 30 minutes of work and 6 hours of chilling.\n\nCrush the chocolate biscuits to fine crumbs, mix with softened butter and press into the base of a lined tin. Chill for 20 minutes. Beat the cream cheese with icing sugar until smooth, then whisk in the liqueur and the double cream until the mixture holds soft peaks. **Do not overbeat the cream**, as it turns grainy and the filling splits. Taste: it should be creamy and gently boozy.\n\nSpread over the base, smooth the top and chill for at least 6 hours, ideally overnight, until firm enough to slice. Decorate with whipped cream, grated chocolate and a drizzle of chocolate sauce. Cut with a knife dipped in hot water. The cheesecake keeps for 3 days in the fridge, and freezes well for a month. Serve small slices, as it is rich.',
    ing: [
      '250 g chocolate digestive biscuits, crushed',
      '100 g butter, softened',
      '500 g full fat cream cheese',
      '100 g icing sugar',
      '100 ml Irish cream liqueur',
      '300 ml double cream',
      '100 ml double cream, whipped, to decorate',
      '30 g dark chocolate, grated'
    ],
    st: [
      'Mix the biscuit crumbs with the soft butter and press into the base of a 23 cm springform tin. Chill for 20 minutes.',
      'Beat the cream cheese and icing sugar until smooth. Whisk in the liqueur.',
      'Whip the 300 ml cream to soft peaks and fold into the cheese mixture.',
      'Spread over the base, smooth the top and chill for 6 hours.',
      'Decorate with the whipped cream and grated chocolate and cut with a hot knife.'
    ],
    tips: [
      'Do not overbeat the cream.',
      'Chill for at least 6 hours.',
      'Cut with a knife dipped in hot water.'
    ],
    pair: ['Irish coffee', 'Tea', 'Raspberries'],
    store: 'Keeps for 3 days in the fridge. Freeze for 1 month.',
    rest: [380, 'Chilling'],
    nut: [583, 6, 34, 47, 1, 23, 270]
  },

  'irish-scones': {
    d: 'Light, tall Irish scones with a crumbly texture and a few sultanas, baked for 15 minutes and served with jam and cream.',
    meta: 'Irish scones, tall light scones with sultanas served with jam and cream, baked for 15 minutes at 220C. Eight servings, ready in 30 minutes.',
    kw: ['irish scones', 'traditional irish scones', 'irish scones with jam and cream', 'tall light scones', 'irish scones recipe'],
    why: 'The first sign they are ready is the smell: butter and flour and a hint of vanilla, rising out of a hot oven. Irish scones are lighter and fluffier than most, and what makes them tall and tender is a cold, quick, light hand. They are served warm at any hour with butter, jam and whipped cream, and they are on the menu of every hotel tea in Ireland.\n\nRub cold butter into the flour, baking powder, sugar and salt with your fingertips until it looks like breadcrumbs. Stir in the sultanas, then pour in an egg beaten with cold milk, keeping a little to glaze. Mix with a knife until the dough just comes together. **Do not knead it**: overworking makes the scones tough. Pat it out gently to 3 cm thick.\n\nCut rounds with a floured 6 cm cutter, pressing straight down without twisting, as twisting seals the edges and stops them rising. Set on a floured tray, brush the tops with milk and bake at 220C for 15 minutes, until risen and golden. Cool for 5 minutes on a rack. Split and spread with butter, jam and whipped cream. They are best eaten on the day, but freeze very well.',
    ing: [
      '450 g plain flour',
      '4 tsp baking powder',
      '1/2 tsp salt',
      '60 g caster sugar',
      '100 g cold butter, cubed',
      '80 g sultanas',
      '1 egg',
      '200 ml cold whole milk',
      '1 tbsp milk, for glazing',
      '150 g strawberry jam',
      '150 ml double cream, whipped'
    ],
    st: [
      'Heat the oven to 220C and flour a tray. Rub the butter into the flour, baking powder, sugar and salt until like breadcrumbs. Stir in the sultanas.',
      'Beat the egg into the cold milk, keeping 1 tablespoon aside for glazing, and mix into the dry ingredients with a knife until just combined.',
      'Pat the dough out 3 cm thick on a floured surface. Cut 8 rounds with a 6 cm cutter, pressing straight down.',
      'Set on the tray, brush the tops with the milk and bake for 15 minutes until risen and golden.',
      'Cool for 5 minutes and serve split with the jam and cream.'
    ],
    tips: [
      'Do not knead the dough.',
      'Press the cutter straight down.',
      'Serve warm.'
    ],
    pair: ['Tea', 'Strawberry jam', 'Whipped cream'],
    store: 'Best the day they are made. Freeze for 2 months.',
    nut: [495, 8, 73, 19, 2, 27, 420]
  }
};
