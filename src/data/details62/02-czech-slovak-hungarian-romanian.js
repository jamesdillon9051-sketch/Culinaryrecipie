'use strict';

/**
 * Volume sixty-two, second part: the Czech honey cake, Slovak sauerkraut
 * soup and cheese dumplings, the Hungarian stews, stuffed cabbage, chimney
 * cake, trifle and pasta, then the Romanian soups, spreads and pies, the first
 * Bulgarian dishes and the Croatian burek. Waits of an hour or more are
 * declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'medovnik': {
    d: 'A Czech honey cake of eight thin honey sponge layers sandwiched with soured cream and caramel, softened overnight.',
    meta: 'Medovník, Czech honey layer cake with soured cream and caramel, baked for 45 minutes. Twelve servings, ready in 1 hour 25 minutes plus chilling.',
    kw: ['medovnik', 'czech honey cake', 'layered honey cake with soured cream', 'medovnik recipe', 'honey sponge layer cake'],
    why: 'A cake for a table of twelve at a big occasion, and one that needs a whole night to become itself. Medovník is the Czech honey cake, a stack of thin, honeyed sponge layers sandwiched with a soured cream and caramel filling, and the layers go from crisp to soft overnight as they absorb the cream.\n\nThe dough is made by melting butter, honey and sugar in a bowl over simmering water, whisking in eggs and then baking soda, which foams as it hits the warm mixture. Stir in flour to a soft, pliable dough. **Divide the dough into 8 portions and roll each as thin as a coin**, on baking paper, with a 22 cm circle as a guide. Bake each at 180C for 5 minutes until deep gold and crisp. They harden as they cool.\n\nFor the filling, beat soured cream with sugar and a spoon of dulce de leche or caramel until thick. Stack the layers with the cream between them, press down and cover the sides and the top. Crush the offcuts into crumbs and press them on the sides. Chill overnight, so that the layers soften, and cut into slim wedges the next day.',
    ing: [
      '120 g butter',
      '150 g honey',
      '200 g caster sugar',
      '3 eggs',
      '1 tsp baking soda',
      '500 g plain flour',
      '900 g soured cream',
      '150 g icing sugar',
      '200 g dulce de leche',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the butter, honey and sugar in a bowl over simmering water, stirring, until melted. Whisk in the eggs, then the baking soda, which will foam.',
      'Stir in the flour to a soft dough. Divide into 8 pieces.',
      'Heat the oven to 180C. Roll each piece as thin as a coin on baking paper to a 22 cm circle and bake for 5 minutes until deep gold. Cool and trim the edges, saving the offcuts.',
      'Beat the soured cream with the icing sugar, dulce de leche and vanilla until thick.',
      'Stack the layers with the cream between, cover the cake and press crushed offcuts on the sides. Chill overnight and cut the next day.'
    ],
    tips: [
      'Roll the layers as thin as possible.',
      'Chill overnight so the layers soften.',
      'Cut thin wedges.'
    ],
    pair: ['Coffee', 'Tea', 'Dessert wine'],
    store: 'Keeps for 4 days in the fridge.',
    rest: [480, 'Chilling'],
    nut: [606, 9, 84, 26, 1, 52, 170]
  },

  'kapustnica': {
    d: 'A Slovak Christmas soup of sauerkraut, smoked sausage, dried mushrooms and prunes, simmered for 1 hour.',
    meta: 'Kapustnica, Slovak Christmas sauerkraut soup with smoked sausage, mushrooms and prunes, cooked for 1 hour. Six servings, ready in 1 hour 20 minutes.',
    kw: ['kapustnica', 'slovak sauerkraut soup', 'christmas cabbage soup with sausage', 'kapustnica recipe', 'sauerkraut soup with prunes'],
    why: 'Most sauerkraut soups come out too sharp, and the fix is to rinse the cabbage and to balance it with prunes. Kapustnica is the Slovak Christmas Eve soup, made with sauerkraut, smoked pork, dried mushrooms and sausage, and the prunes give it a surprising sweetness that rounds off the sour.\n\nSoak the dried mushrooms in warm water for 20 minutes and keep the liquid. Fry smoked bacon in a large pot, add onion and garlic and cook for 5 minutes. Stir in sweet paprika off the heat, then the rinsed sauerkraut, the mushrooms with their liquid, stock, a bay leaf and a few allspice berries. **Rinse the sauerkraut only if it is very sharp**, and taste it first. Simmer for 40 minutes.\n\nAdd sliced smoked sausage and the stoned prunes, and cook for 15 minutes more. Thicken with a roux or a little cream if you like a heavier soup. Taste for salt and sharpness, and add a little sugar if needed. The soup is better on the second day, and is served with rye bread and a spoonful of soured cream.',
    ing: [
      '15 g dried mushrooms',
      '100 g smoked bacon, diced',
      '1 onion, chopped',
      '3 garlic cloves',
      '1 tbsp sweet paprika',
      '600 g sauerkraut',
      '1.2 litres stock',
      '1 bay leaf',
      '2 g allspice berries',
      '300 g smoked sausage, sliced',
      '80 g stoned prunes',
      '150 g soured cream'
    ],
    st: [
      'Soak the mushrooms in 200 ml of warm water for 20 minutes. Keep the liquid and chop the mushrooms.',
      'Fry the bacon for 5 minutes, add the onion and garlic and cook for 5 minutes.',
      'Take off the heat and stir in the paprika. Add the sauerkraut, mushrooms and their liquid, stock, bay and allspice. Simmer for 40 minutes.',
      'Add the sausage and prunes and cook for 15 minutes more.',
      'Taste, then serve with the soured cream.'
    ],
    tips: [
      'Taste the sauerkraut before rinsing it.',
      'Add the paprika off the heat.',
      'Leave it a day for a deeper flavour.'
    ],
    pair: ['Rye bread', 'Soured cream', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [316, 14, 20, 20, 5, 9, 1980]
  },

  'slovak-bryndzove-pirohy': {
    d: 'Slovak potato dumplings filled with sharp sheep cheese, boiled for 10 minutes and topped with crisp bacon and soured cream.',
    meta: 'Slovak bryndzové pirohy, potato dumplings filled with sheep cheese, topped with bacon, cooked for 25 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['slovak bryndzove pirohy', 'slovak cheese dumplings', 'potato dumplings with sheep cheese', 'bryndzove pirohy recipe', 'slovak pierogi with bryndza'],
    why: 'Most home versions come out with a leaking filling, and the fix is a stiff cheese and well sealed edges. Bryndzové pirohy are the Slovak dumplings filled with bryndza, a tangy sheep cheese, and are served with bacon and soured cream. They are the cousin of the Slovak national dish, bryndzové halušky.\n\nIf you cannot find bryndza, use a mix of crumbled feta and cream cheese, which gives a similar sharpness and creaminess. Mash the cheese with an egg yolk and a pinch of pepper until smooth but stiff. **Chill the filling for 20 minutes** so it holds its shape. The dough is made from mashed potato, flour, an egg and salt, kneaded briefly to a soft dough and rolled 3 mm thick.\n\nCut rounds with a cutter, put a teaspoon of filling in each, fold and seal firmly with a fork. Boil in salted water for 4 minutes after they float. Meanwhile fry diced bacon until crisp. Drain the dumplings and serve topped with the bacon, its fat and a generous spoonful of soured cream. They are best eaten at once, hot, with a glass of cold beer.',
    ing: [
      '600 g floury potatoes',
      '250 g plain flour',
      '1 egg',
      '1 tsp salt',
      '250 g bryndza, or 150 g feta and 100 g cream cheese',
      '1 egg yolk',
      '1/2 tsp black pepper',
      '150 g smoked bacon, diced',
      '200 g soured cream'
    ],
    st: [
      'Boil the potatoes in their skins for 25 minutes. Peel, mash and cool. Mix with the flour, egg and salt to a soft dough.',
      'Mash the cheese with the yolk and pepper. Chill for 20 minutes.',
      'Roll the dough 3 mm thick and cut 8 cm rounds. Fill each with a teaspoon of cheese, fold and seal firmly.',
      'Boil in salted water for 4 minutes after they float.',
      'Fry the bacon for 8 minutes until crisp. Serve the dumplings with the bacon, its fat and the soured cream.'
    ],
    tips: [
      'Chill the filling until stiff.',
      'Seal the edges firmly.',
      'Serve at once while hot.'
    ],
    pair: ['Soured cream', 'Beer', 'Pickles'],
    store: 'Best fresh. Freeze uncooked for 2 months.',
    nut: [506, 16, 52, 26, 3, 4, 930]
  },

  'halaszle': {
    d: 'A Hungarian fisherman\'s soup of river fish simmered with onion and plenty of sweet and hot paprika, ready in 1 hour 10 minutes.',
    meta: 'Halászlé, Hungarian fisherman\'s soup of carp or catfish with onion and paprika, cooked for 50 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['halaszle', 'hungarian fisherman soup', 'fish soup with paprika', 'halaszle recipe', 'carp soup with paprika'],
    why: 'Ingredients are few and the flavour is huge. Halászlé, the Hungarian fisherman\'s soup, is made with river fish, a mountain of onions and a great deal of paprika, and the soup it makes is a deep red, spicy broth that is eaten by the bowl with bread. Traditionally it is cooked over a wood fire in a cauldron on the riverbank.\n\nCarp is the classic fish but catfish, pike perch or cod work as well. Use a mix of fish heads and bones to make the stock, and pieces of fillet to eat. **Do not stir once the fish pieces are in**, but shake the pot instead, as the fillets break up easily. Cook the onions in a little water, not oil, for 15 minutes until soft, then add the paprika off the heat.\n\nPour in the water and fish trimmings, simmer for 20 minutes, strain, and return the broth to the pot. Add the fillet pieces, a hot green pepper and a tomato, and cook for 10 minutes. Season with salt and serve at once with crusty bread, or with fine noodles and soured cream on the side for a richer meal. The soup will not keep, so cook only what you will eat.',
    ing: [
      '1.2 kg carp or catfish, with heads and bones',
      '600 g onions, sliced',
      '3 tbsp sweet paprika',
      '1 tsp hot paprika',
      '1.2 litres water',
      '1 hot green pepper',
      '1 tomato, 150 g, sliced',
      '1 tsp salt',
      '200 g fine noodles, to serve',
      '150 g soured cream'
    ],
    st: [
      'Separate the fillets from the heads and bones and cut the fillets into 5 cm pieces.',
      'Cook the onions in 100 ml water in a large pot for 15 minutes until soft. Take off the heat and stir in both paprikas.',
      'Add the water, heads and bones and simmer for 20 minutes. Strain and return the broth to the pot.',
      'Add the fillets, hot pepper, tomato and salt and simmer for 10 minutes without stirring, shaking the pot.',
      'Serve with the noodles and soured cream.'
    ],
    tips: [
      'Add the paprika off the heat.',
      'Shake the pot rather than stirring.',
      'Cook only what you will eat.'
    ],
    pair: ['Crusty bread', 'Soured cream', 'White wine'],
    store: 'Best fresh.',
    nut: [424, 39, 40, 12, 5, 8, 510]
  },

  'porkolt': {
    d: 'A Hungarian stew of pork or beef with onions and sweet paprika, with no flour or stock, simmered for 1 hour.',
    meta: 'Pörkölt, Hungarian paprika stew of meat and onions with no flour, cooked for 1 hour. Four servings, ready in 1 hour 15 minutes.',
    kw: ['porkolt', 'hungarian paprika stew', 'pork porkolt with onions', 'porkolt recipe', 'hungarian stew with dumplings'],
    why: 'What separates a pörkölt from a goulash? It is thicker, with less liquid, and it is made with onions and paprika and nothing else: no flour, no stock and no vegetables. Pörkölt is the Hungarian meat stew, and its name comes from the word for roasting, because the meat is cooked in its own juices.\n\nCook a pile of chopped onions in lard until they are soft and golden, about 15 minutes, as they are the sauce. Take the pan off the heat and stir in a great deal of sweet paprika, then add garlic and the meat. **Do not let the paprika burn**: it turns bitter in seconds. Return to a low heat and add diced pepper, tomato and a splash of water.\n\nCover and simmer for 1 hour, stirring now and then, until the meat is tender and the onions have melted into a thick, rust red sauce. Add a spoonful of water if it sticks. The dish is traditionally eaten with nokedli, little egg dumplings, or with bread and a pickled salad. It is better the next day, reheated gently.',
    ing: [
      '800 g pork shoulder, in 3 cm cubes',
      '3 tbsp lard',
      '600 g onions, finely chopped',
      '3 tbsp sweet paprika',
      '3 garlic cloves',
      '1 green pepper, diced',
      '1 tomato, 150 g, chopped',
      '100 ml water',
      '1 tsp salt',
      '400 g egg noodles, to serve'
    ],
    st: [
      'Cook the onions in the lard over low heat for 15 minutes until golden.',
      'Take the pan off the heat, stir in the paprika, then add the garlic and pork. Return to the heat and stir for 3 minutes.',
      'Add the pepper, tomato, water and salt. Cover and simmer for 1 hour, stirring now and then.',
      'Boil the noodles and serve with the stew.'
    ],
    tips: [
      'Cook the onions until they melt.',
      'Add the paprika off the heat.',
      'Add water only if it sticks.'
    ],
    pair: ['Egg noodles', 'Bread', 'Pickled salad', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [980, 53, 93, 44, 9, 12, 740]
  },

  'toltott-kaposzta': {
    d: 'Hungarian stuffed cabbage of minced pork and rice rolled in pickled cabbage leaves and simmered with smoked pork and sauerkraut for 90 minutes.',
    meta: 'Töltött káposzta, Hungarian stuffed cabbage with pork and rice cooked on sauerkraut, cooked for 90 minutes. Six servings, ready in 2 hours 10 minutes.',
    kw: ['toltott kaposzta', 'hungarian stuffed cabbage', 'cabbage rolls with sauerkraut and smoked pork', 'toltott kaposzta recipe', 'hungarian cabbage rolls with paprika'],
    why: 'Do not cook them too fast. That is the quick tip for töltött káposzta, the Hungarian stuffed cabbage, because the rolls need long, gentle heat to turn tender and sweet. They are made with pickled cabbage leaves, so the dish is tangy, and are cooked on a bed of sauerkraut with smoked pork.\n\nIf you cannot find whole pickled cabbage leaves, use savoy leaves that have been blanched. Mix minced pork with rice, onion, an egg, paprika, marjoram, salt and pepper. **Use less rice than you think**, about 2 tablespoons per roll, since it swells as it cooks and bursts the leaf. Roll each leaf around a spoonful of the filling and fold in the sides.\n\nSpread half the sauerkraut in a pot, lay the smoked pork on top, then the rolls, then more sauerkraut. Add water to just cover, with a spoonful of tomato purée. Cover and simmer for 90 minutes. Make a roux of lard, flour and paprika, stir in a ladle of the liquid and add it to the pot for the last 10 minutes. Serve with soured cream and a slice of rye bread.',
    ing: [
      '1 savoy cabbage, about 1 kg',
      '600 g minced pork',
      '80 g long grain rice',
      '1 onion, grated',
      '1 egg',
      '2 tsp sweet paprika',
      '1 tsp dried marjoram',
      '1 tsp salt',
      '800 g sauerkraut',
      '300 g smoked pork ribs',
      '1 tbsp tomato purée',
      '1 litre water',
      '2 tbsp lard',
      '2 tbsp plain flour',
      '150 g soured cream'
    ],
    st: [
      'Blanch the cabbage leaves for 5 minutes, peel off 12 leaves and trim the ribs.',
      'Mix the pork, rice, onion, egg, 1 teaspoon of the paprika, marjoram and salt.',
      'Roll a spoonful of filling in each leaf, tucking in the sides.',
      'Spread half the sauerkraut in a pot, add the ribs, rolls and rest of the sauerkraut. Add the purée and water, cover and simmer for 90 minutes.',
      'Cook the lard and flour for 2 minutes, stir in the remaining paprika off the heat and a ladle of liquid, and add to the pot for the last 10 minutes. Serve with the soured cream.'
    ],
    tips: [
      'Use little rice in each roll.',
      'Simmer gently for the full time.',
      'Serve with soured cream.'
    ],
    pair: ['Soured cream', 'Rye bread', 'Red wine'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [603, 31, 32, 39, 9, 10, 1420]
  },

  'kurtoskalacs': {
    d: 'Hungarian chimney cake of sweet yeast dough wound round a roller, rolled in sugar and baked for 25 minutes until caramelised.',
    meta: 'Kürtőskalács, Hungarian chimney cake rolled in sugar and cinnamon, baked for 25 minutes. Eight servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['kurtoskalacs', 'hungarian chimney cake', 'transylvanian chimney cake', 'kurtoskalacs recipe', 'spit cake with cinnamon sugar'],
    why: 'Most home chimney cakes come out dry, and the fix is a soft dough and a caramel of sugar and butter. Kürtőskalács, the chimney cake, is a hollow cylinder of sweet yeast dough that is rolled in sugar and baked on a spit until the sugar melts into a crisp, shiny, mahogany shell. It is Transylvanian in origin and sold at every fair.\n\nThe dough is flour, milk, eggs, butter, sugar and yeast, kneaded for 10 minutes and left to rise for 1 hour. Roll it out into a long strip about 1 cm thick and cut a ribbon 2 cm wide. **Wrap the ribbon around a buttered cylinder**, such as a rolling pin wrapped in foil, overlapping the edges, with the ends supported on two tins. Press the dough to join the layers.\n\nBrush with melted butter and roll in a plate of sugar and cinnamon, then bake at 200C for 25 minutes, turning every 5 minutes and brushing with more butter. The sugar caramelises into a hard crust. Slide the cake off the roller while hot and roll it in more sugar or ground nuts. Eat warm, pulling off strips of the soft, spiralled dough.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '80 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '2 eggs',
      '60 g butter, softened',
      '60 g butter, melted',
      '150 g caster sugar, for rolling',
      '2 tsp ground cinnamon'
    ],
    st: [
      'Mix the flour, yeast, 80 g sugar, salt, milk, eggs and softened butter and knead for 10 minutes. Leave to rise for 1 hour.',
      'Roll the dough 1 cm thick and cut a ribbon 2 cm wide and 3 metres long, in pieces if needed.',
      'Wrap the ribbon around a foil covered, buttered rolling pin, overlapping the edges. Brush with butter and roll in the sugar and cinnamon.',
      'Heat the oven to 200C. Set the pin across two tins and bake for 25 minutes, turning every 5 minutes and brushing with butter.',
      'Slide off the roller while hot and roll in the remaining sugar.'
    ],
    tips: [
      'Overlap the edges so the layers join.',
      'Turn and brush with butter often.',
      'Eat while warm.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Vanilla ice cream'],
    store: 'Best the day it is made.',
    rest: [60, 'Rising'],
    nut: [424, 9, 61, 16, 2, 33, 630]
  },

  'somloi-galuska': {
    d: 'A Hungarian trifle of three coloured sponges soaked in rum syrup, with vanilla custard, chocolate sauce and whipped cream.',
    meta: 'Somlói galuska, Hungarian trifle of sponge, rum syrup, vanilla custard and chocolate, baked for 20 minutes. Eight servings, ready in 50 minutes.',
    kw: ['somloi galuska', 'hungarian sponge trifle', 'somlói galuska', 'hungarian rum trifle', 'chocolate sponge trifle dessert'],
    why: 'It looks like a bowl of mixed cake and tastes like three desserts in one. Somlói galuska is the Hungarian trifle of sponge cake, with layers of vanilla, chocolate and walnut sponge, soaked in rum syrup, and covered with custard, chocolate sauce and whipped cream. It is the dessert of Gundel restaurant in Budapest, and of every Hungarian celebration.\n\nBake a vanilla sponge, a chocolate sponge and a walnut sponge, thin ones, in a lined tin at 180C for 20 minutes, and cool them. Cut each into chunks. For the syrup, simmer sugar, water, rum and orange zest for 5 minutes and cool. **Soak the sponge pieces very briefly in the syrup**, since too long and they turn to mush. Layer the three sponges in a large glass dish, with raisins and chopped walnuts between.\n\nPour over a vanilla custard and cover with whipped cream. Make a chocolate sauce from melted chocolate and cream and pour it over the top just before serving. The trifle is best served well chilled, and it keeps for 2 days. Use a large spoon to dig down through all the layers.',
    ing: [
      '4 eggs',
      '120 g caster sugar',
      '120 g plain flour',
      '20 g cocoa powder',
      '40 g ground walnuts',
      '100 g caster sugar, for the syrup',
      '100 ml water',
      '60 ml dark rum',
      '40 g raisins',
      '500 ml vanilla custard',
      '200 ml double cream, whipped',
      '100 g dark chocolate',
      '80 ml double cream, for the sauce'
    ],
    st: [
      'Heat the oven to 180C. Whisk the eggs and 120 g sugar for 8 minutes until tripled. Fold in the flour in three goes. Divide in three: leave one plain, fold cocoa into one and walnuts into one.',
      'Bake each in a lined tin for 20 minutes. Cool and cut into chunks.',
      'Simmer the syrup sugar, water and rum for 5 minutes and cool.',
      'Dip the sponge chunks briefly in the syrup and layer them in a dish with the raisins.',
      'Pour over the custard and top with the whipped cream.',
      'Melt the chocolate with 80 ml cream and pour over just before serving.'
    ],
    tips: [
      'Dip the sponge briefly.',
      'Serve well chilled.',
      'Add the chocolate sauce at the last moment.'
    ],
    pair: ['Coffee', 'Tokaji wine', 'Fresh berries'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [479, 7, 61, 23, 3, 45, 50]
  },

  'hortobagyi-palacsinta': {
    d: 'Thin pancakes filled with paprika veal or chicken stew and covered in a creamy paprika sauce, baked for 20 minutes.',
    meta: 'Hortobágyi palacsinta, Hungarian pancakes filled with paprika meat in a cream sauce, baked for 20 minutes. Six servings, ready in 50 minutes.',
    kw: ['hortobagyi palacsinta', 'hungarian meat filled pancakes', 'hortobagy pancakes with paprika sauce', 'savoury hungarian pancakes', 'hortobagyi palacsinta recipe'],
    why: 'Compare these with sweet pancakes and you find the same wrappers hiding a rich meat filling under a red paprika cream sauce. Hortobágyi palacsinta, named for the Hortobágy plain in eastern Hungary, is a savoury dish served at the start or end of the meal, and it is a way of using leftover stew.\n\nMake thin pancakes from flour, eggs, milk and a pinch of salt, and cook about 12 of them in a lightly oiled pan. For the filling, simmer chicken or veal with onion, paprika and stock until tender, then shred it and mix with a spoonful of its sauce. **Make the filling quite thick**, so it holds in the pancake and does not soak through. Add a little soured cream for richness.\n\nPut a spoonful of the filling in each pancake and roll it up. Lay the rolls side by side in a dish. For the sauce, whisk soured cream and a little paprika into the cooking liquid and simmer for 3 minutes. Pour over the pancakes and bake at 190C for 20 minutes, until bubbling and lightly browned. Serve hot, with a scatter of parsley and a spoonful of extra soured cream.',
    ing: [
      '200 g plain flour',
      '3 eggs',
      '400 ml whole milk',
      '1 pinch salt',
      '20 g butter, for the pan',
      '600 g chicken thighs, boneless',
      '2 tbsp lard',
      '1 onion, finely chopped',
      '2 tsp sweet paprika',
      '250 ml chicken stock',
      '200 g soured cream',
      '1 tsp salt, for the filling',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Whisk the flour, eggs, milk and pinch of salt. Rest for 15 minutes. Cook 12 thin pancakes in the buttered pan.',
      'Soften the onion in the lard for 8 minutes. Take off the heat, stir in the paprika, add the chicken and stock and simmer for 20 minutes. Lift out and shred the chicken.',
      'Boil the sauce down to 200 ml. Mix half with the chicken and 60 g soured cream to make a thick filling.',
      'Heat the oven to 190C. Fill and roll the pancakes and lay them in a dish.',
      'Whisk the remaining soured cream into the sauce, pour over the pancakes and bake for 20 minutes. Scatter with the parsley.'
    ],
    tips: [
      'Make the filling thick.',
      'Add the paprika off the heat.',
      'Serve with extra soured cream.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Pickled peppers'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven.',
    nut: [468, 30, 33, 24, 2, 6, 720]
  },

  'turos-csusza': {
    d: 'Wide egg noodles tossed with cottage cheese, soured cream and crisp bacon, a Hungarian supper ready in 30 minutes.',
    meta: 'Túrós csusza, Hungarian noodles with cottage cheese, soured cream and bacon, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['turos csusza', 'hungarian cottage cheese noodles', 'noodles with cottage cheese and bacon', 'turos csusza recipe', 'hungarian pasta with curd cheese'],
    why: 'Fry the bacon until crisp, and do not drain the fat. That is the short rule for túrós csusza, the Hungarian noodle dish with cottage cheese, because the bacon fat is what coats the noodles and carries the flavour. It is a national favourite, cheap, quick and hearty, and a plate of it takes no more than half an hour.\n\nUse wide egg noodles, or tagliatelle, and boil them in salted water until tender. Cut the bacon into small cubes and fry over medium heat for 8 minutes until deeply crisp and the fat has run clear. **Toss the hot, drained noodles in the bacon and fat at once**, so each strand takes up the flavour. Turn off the heat.\n\nCrumble in the cottage cheese or curd cheese, in large lumps, and add a spoonful of soured cream. Toss gently, so the cheese stays chunky and does not melt into a paste. Taste for salt and add black pepper. Serve at once on warm plates with an extra spoonful of soured cream and a few pieces of the crisp bacon on top. Some like a sprinkle of dill.',
    ing: [
      '400 g wide egg noodles',
      '200 g smoked bacon, diced',
      '300 g cottage cheese or curd cheese',
      '150 g soured cream',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '2 tbsp chopped dill'
    ],
    st: [
      'Boil the noodles in salted water until tender. Drain.',
      'Fry the bacon in a wide pan over medium heat for 8 minutes until crisp.',
      'Toss the noodles in the bacon and fat, off the heat.',
      'Fold in the cheese in large lumps, with half the soured cream, the salt and pepper.',
      'Serve with the remaining soured cream and the dill.'
    ],
    tips: [
      'Keep the bacon fat.',
      'Toss the noodles while hot.',
      'Leave the cheese in lumps.'
    ],
    pair: ['Pickled cucumbers', 'Green salad', 'Beer'],
    store: 'Best fresh.',
    nut: [625, 32, 77, 21, 3, 7, 1380]
  },

  'segedinsky-gulas': {
    d: 'Pork stewed with sauerkraut, paprika and caraway, finished with soured cream, a Hungarian Szeged style goulash ready in 1 hour 20 minutes.',
    meta: 'Segedínský guláš, Szeged style pork and sauerkraut goulash with soured cream, cooked for 1 hour. Four servings, ready in 1 hour 20 minutes.',
    kw: ['segedinsky gulas', 'szeged goulash', 'pork and sauerkraut goulash', 'szegedi gulyas recipe', 'szeged style pork stew'],
    why: 'It looks like a red stew, and the surprise is the sour note in the sauce: sauerkraut. Segedínský guláš is the Szeged style goulash, which is popular in Czechia and Slovakia as much as in Hungary, and it combines pork, sauerkraut, paprika and caraway under a finishing cream.\n\nCook chopped onions in lard until golden, about 10 minutes. Take the pan off the heat before adding the paprika and garlic, and stir in the pork, cut into 3 cm cubes. Return to the heat and brown for 5 minutes. **Add the sauerkraut with its juice**, a little water and the caraway, and simmer, covered, for 1 hour. The pork is ready when it breaks under a fork.\n\nStir in a spoonful of flour mixed with water if the sauce is too thin, then finish with soured cream off the heat. Taste for sharpness: a pinch of sugar will tame the sourness if needed. Serve the stew with bread dumplings, or with plain boiled potatoes, and a spoonful of soured cream. It is better the second day, when the flavours have blended.',
    ing: [
      '700 g pork shoulder, in 3 cm cubes',
      '3 tbsp lard',
      '2 onions, chopped',
      '2 garlic cloves',
      '2 tbsp sweet paprika',
      '600 g sauerkraut, with its juice',
      '200 ml water',
      '1 tsp caraway seeds',
      '1 pinch caster sugar',
      '150 g soured cream',
      '600 g boiled potatoes, to serve'
    ],
    st: [
      'Cook the onions in the lard for 10 minutes until golden.',
      'Take the pan off the heat, stir in the garlic and paprika, add the pork and return to the heat to brown for 5 minutes.',
      'Add the sauerkraut with its juice, the water and caraway. Cover and simmer for 1 hour.',
      'Take off the heat, stir in the soured cream and sugar and taste.',
      'Serve with the potatoes.'
    ],
    tips: [
      'Add the paprika off the heat.',
      'Add the cream off the heat too.',
      'A pinch of sugar tames the sourness.'
    ],
    pair: ['Boiled potatoes', 'Bread dumplings', 'Beer'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months without the cream.',
    nut: [716, 38, 42, 44, 10, 8, 1120]
  },

  'ciorba-de-burta': {
    d: 'A Romanian sour soup of tripe simmered for 2 hours 30 minutes and finished with sour cream, egg yolk, garlic and vinegar.',
    meta: 'Ciorbă de burtă, Romanian tripe soup with sour cream, garlic and vinegar, cooked for 2 hours 30 minutes. Six servings, ready in 3 hours.',
    kw: ['ciorba de burta', 'romanian tripe soup', 'sour tripe soup with garlic and sour cream', 'ciorba de burta recipe', 'tripe and cream soup'],
    why: 'Compare it to the Florentine trippa and you find a soup, not a stew, and a sharper flavour, from the cream and vinegar. Ciorbă de burtă, the Romanian tripe soup, is a famous dish served at weddings and in restaurants across the country, and it is also eaten to cure the morning after a party.\n\nBlanch the tripe and a cow\'s foot in water for 10 minutes, drain and rinse. Cover with fresh water, add an onion, a carrot, a parsnip, a celery root and a bay leaf and simmer for 2 hours 30 minutes, until the tripe is tender. **Skim the foam diligently** in the first 30 minutes. Lift out the tripe and cut it into thin strips and strain the broth.\n\nReturn the strips to the broth and bring to a simmer. Whisk egg yolks with soured cream and a ladle of the hot broth, a little at a time, and stir into the soup off the heat. Add crushed garlic mixed with vinegar, which is the signature of the dish, and taste. The soup should be sour, creamy and garlicky. Serve with hot chilli, extra cream and bread.',
    ing: [
      '1 kg cleaned beef tripe',
      '500 g pig trotter',
      '3 litres water',
      '1 onion',
      '2 carrots',
      '150 g parsnip',
      '200 g celeriac',
      '1 bay leaf',
      '2 egg yolks',
      '250 g soured cream',
      '6 garlic cloves, crushed',
      '4 tbsp white wine vinegar',
      '1 tsp salt',
      '1 fresh hot chilli, sliced'
    ],
    st: [
      'Blanch the tripe and foot in boiling water for 10 minutes. Drain and rinse.',
      'Cover with the 3 litres of fresh water, add the onion, carrots, parsnip, celeriac and bay and simmer for 2 hours 30 minutes, skimming.',
      'Lift out the tripe, cut into thin strips and strain the broth. Return the strips to the broth.',
      'Whisk the yolks and soured cream with a ladle of hot broth. Stir into the soup off the heat.',
      'Stir in the garlic mixed with the vinegar and the salt. Serve with the chilli.'
    ],
    tips: [
      'Skim the foam in the first half hour.',
      'Add the cream and egg off the heat.',
      'Add the garlic and vinegar at the end.'
    ],
    pair: ['Hot chilli', 'Crusty bread', 'Tuica'],
    store: 'Keeps for 2 days in the fridge. Reheat gently.',
    nut: [485, 41, 15, 29, 3, 5, 680]
  },

  'ciorba-de-perisoare': {
    d: 'A sour Romanian soup of vegetables and rice and pork and rice meatballs, soured with borș or lemon and finished with herbs, in 1 hour 5 minutes.',
    meta: 'Ciorbă de perișoare, sour Romanian meatball soup with vegetables, cooked for 40 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['ciorba de perisoare', 'romanian meatball soup', 'sour vegetable soup with meatballs', 'ciorba de perisoare recipe', 'romanian sour soup with lovage'],
    why: 'Short and sharp: the sourness is the point. Ciorbă de perișoare is the Romanian meatball soup, a clear, tangy broth with vegetables and small meatballs, and it takes its sourness from borș, a fermented wheat bran liquid. If you cannot find borș, lemon juice or sauerkraut juice are good substitutes.\n\nDice an onion, carrots, a parsnip, celery and a pepper and simmer them in water for 15 minutes. Mix minced pork, rice, onion, egg, parsley and dill, and shape into walnut sized balls. **Drop the meatballs into the simmering soup, not the boiling**, so they stay whole. Cook for 20 minutes, until they are firm and float.\n\nAdd the sour liquid a little at a time, tasting after each spoonful, until the soup is tangy but still pleasant. Add chopped lovage or parsley, the traditional herb, and salt. Stir in a spoonful of soured cream in each bowl, with a pinch of chilli. The soup is eaten with a slice of bread and a fresh hot pepper on the side. It keeps for 3 days.',
    ing: [
      '1 onion, diced',
      '2 carrots, diced',
      '150 g parsnip, diced',
      '2 celery sticks, diced',
      '1 red pepper, diced',
      '2 litres water',
      '400 g minced pork',
      '60 g long grain rice',
      '1 small onion, grated',
      '1 egg',
      '3 tbsp chopped dill',
      '3 tbsp chopped parsley',
      '1 tsp salt',
      '150 ml borș, lemon juice or sauerkraut juice',
      '150 g soured cream'
    ],
    st: [
      'Simmer the onion, carrots, parsnip, celery and pepper in the water for 15 minutes.',
      'Mix the pork, rice, grated onion, egg, half the dill and parsley and half the salt. Shape into 24 small balls.',
      'Lower the meatballs into the simmering soup and cook for 20 minutes.',
      'Add the sour liquid a little at a time, tasting. Stir in the remaining herbs and salt.',
      'Serve with a spoonful of soured cream in each bowl.'
    ],
    tips: [
      'Drop the meatballs into simmering soup.',
      'Add the sour liquid gradually.',
      'Finish with fresh herbs.'
    ],
    pair: ['Crusty bread', 'Hot peppers', 'Soured cream'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [314, 15, 23, 18, 3, 7, 480]
  },

  'zacusca': {
    d: 'A Romanian vegetable spread of roasted aubergines, peppers and tomatoes cooked down slowly with onion and oil for 90 minutes.',
    meta: 'Zacuscă, Romanian roasted aubergine and pepper spread cooked slowly with onion, cooked for 90 minutes. Twelve servings, ready in 1 hour 50 minutes.',
    kw: ['zacusca', 'romanian aubergine and pepper spread', 'roasted vegetable spread', 'zacusca recipe', 'romanian vegetable relish'],
    why: 'Be patient with the stirring. That is the one demand zacuscă makes, because this Romanian vegetable spread must cook for a long time, in a heavy pan, with frequent stirring, to turn thick, dark and rich. It is made in late summer when aubergines and peppers are cheap, and eaten all winter on bread.\n\nRoast the aubergines and peppers whole at 220C for 40 minutes, until the skins are black and the flesh is soft. Cool them in a covered bowl, then peel and chop them finely. Soften chopped onion in oil until golden, add the tomato purée and cook for 5 minutes. **Add the vegetables and cook on very low heat for 90 minutes**, stirring every 10 minutes, as it catches on the base. The spread is ready when a spoon drawn across the pan leaves a trail.\n\nSeason with salt, pepper and a bay leaf, and stir in a spoonful of sugar if the tomatoes are sour. Cool and spoon into clean jars. It keeps for a week in the fridge, covered with a layer of oil. Serve on bread with a slice of onion and a glass of palinca or white wine.',
    ing: [
      '1.2 kg aubergines',
      '800 g red peppers',
      '5 tbsp sunflower oil',
      '2 onions, finely chopped',
      '3 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1 bay leaf',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '1 tbsp caster sugar'
    ],
    st: [
      'Heat the oven to 220C. Roast the aubergines and peppers whole on trays for 40 minutes until blackened and soft. Cool in a covered bowl.',
      'Peel and chop the vegetables finely, draining off any bitter juice.',
      'Soften the onions in the oil for 10 minutes. Add the purée and cook for 5 minutes.',
      'Add the vegetables, tomatoes, bay, salt, pepper and sugar and cook over very low heat for 90 minutes, stirring every 10 minutes.',
      'Cool and store in clean jars under a layer of oil.'
    ],
    tips: [
      'Roast until the skins are black.',
      'Drain the bitter juice.',
      'Stir often so the base does not catch.'
    ],
    pair: ['Crusty bread', 'Raw onion', 'Feta', 'Palinca'],
    store: 'Keeps for 1 week in the fridge under a layer of oil.',
    nut: [118, 2, 14, 6, 5, 9, 400]
  },

  'salata-de-vinete': {
    d: 'Aubergines roasted over a flame or in the oven until smoky, then chopped by hand with oil and onion into a Romanian spread.',
    meta: 'Salată de vinete, Romanian smoky roasted aubergine salad with onion and oil, cooked for 40 minutes. Six servings, ready in 1 hour.',
    kw: ['salata de vinete', 'romanian aubergine salad', 'smoky roasted aubergine spread', 'salata de vinete recipe', 'romanian eggplant spread'],
    why: 'Use a wooden spoon, never metal. That is a famous tip for salată de vinete, the Romanian aubergine salad, because the flesh darkens when it touches metal, and the traditional method is to chop and mix it with wood. The result is a pale, creamy spread, with a deep smoky flavour.\n\nRoast the aubergines whole over a gas flame, turning, for about 20 minutes, until the skin is black and the flesh has collapsed. If you have no flame, roast them in a 220C oven for 40 minutes. Place them in a colander to drain for 20 minutes, as the juice is bitter. **Peel off the skin and scrape out the flesh**, and chop it finely with a wooden knife or a spoon on a wooden board.\n\nStir in sunflower oil a spoonful at a time, whisking, until the mix is pale, creamy and thick, as if making mayonnaise. Add salt, a squeeze of lemon and a finely chopped onion or a little grated one. Serve on bread with tomatoes and a few olives. The salad is best on the day it is made, and tastes better after an hour.',
    ing: [
      '1 kg aubergines',
      '100 ml sunflower oil',
      '1 small onion, finely chopped',
      '1 tbsp lemon juice',
      '1 tsp salt',
      '2 tomatoes, sliced, to serve',
      '60 g black olives',
      '6 slices crusty bread'
    ],
    st: [
      'Roast the aubergines over a flame, turning, for 20 minutes, or in a 220C oven for 40 minutes, until the skins are black and the flesh is soft.',
      'Drain in a colander for 20 minutes. Peel and scrape out the flesh.',
      'Chop finely on a wooden board with a wooden knife or spoon.',
      'Stir in the oil a spoonful at a time until pale and creamy. Stir in the onion, lemon juice and salt.',
      'Serve with the tomatoes, olives and bread.'
    ],
    tips: [
      'Use wood, not metal, for chopping.',
      'Drain off the bitter juice.',
      'Add the oil gradually.'
    ],
    pair: ['Crusty bread', 'Tomatoes', 'Olives', 'Feta'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [294, 5, 28, 18, 7, 9, 700]
  },

  'placinta': {
    d: 'A Romanian folded pie of thin pastry filled with grated apple, sugar and cinnamon, baked for 40 minutes until golden.',
    meta: 'Plăcintă, Romanian folded apple pie of thin pastry with cinnamon and sugar, baked for 40 minutes. Eight servings, ready in 1 hour 20 minutes.',
    kw: ['placinta', 'romanian apple pie', 'placinta cu mere', 'folded apple pastry', 'romanian pastry with apples'],
    why: 'Compare it to an apple pie and you find a thinner, crisper pastry folded like a parcel round the fruit. Plăcintă is the Romanian pie, and the sweet version with apples and cinnamon is the one most often made at home, especially at religious fasts when no dairy is used.\n\nThe dough is flour, oil, water and a pinch of salt, kneaded for 5 minutes and rested for 20 minutes. Roll it very thin, almost like strudel, and cut into squares. For the filling, grate tart apples, toss them with sugar, cinnamon, lemon juice and a spoonful of breadcrumbs. **Squeeze out the juice from the apples**, as a wet filling makes the pastry soggy.\n\nPut a heap of filling in the centre of each square, brush the edges with water and fold the corners to the middle, pinching the seams. Brush the tops with oil, set them on a lined tray and bake at 190C for 40 minutes, until the pastry is deep gold. Dust with icing sugar and serve warm. The pies keep for 2 days and can be reheated in the oven.',
    ing: [
      '400 g plain flour',
      '5 tbsp sunflower oil',
      '180 ml water',
      '1/2 tsp salt',
      '800 g tart apples, peeled and grated',
      '80 g caster sugar',
      '2 tsp ground cinnamon',
      '1 lemon, juice',
      '2 tbsp dry breadcrumbs',
      '3 tbsp sunflower oil, for brushing',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, 5 tablespoons of oil, water and salt and knead for 5 minutes. Rest for 20 minutes.',
      'Toss the apples with the sugar, cinnamon, lemon juice and breadcrumbs. Squeeze out the juice.',
      'Heat the oven to 190C. Roll the dough very thin and cut into 8 squares of 15 cm.',
      'Put a heap of filling in each square, brush the edges with water and fold the corners into the middle, pinching the seams.',
      'Brush with the oil and bake for 40 minutes until deep gold. Dust with the icing sugar.'
    ],
    tips: [
      'Squeeze the juice from the apples.',
      'Roll the dough very thin.',
      'Pinch the seams firmly.'
    ],
    pair: ['Tea', 'Coffee', 'Vanilla ice cream'],
    store: 'Keeps for 2 days. Reheat in the oven.',
    nut: [427, 6, 67, 15, 4, 24, 160]
  },

  'ciorba-de-legume': {
    d: 'A sour Romanian vegetable soup of carrots, celery, potatoes and green beans with fresh herbs and lemon, in 55 minutes.',
    meta: 'Ciorbă de legume, sour Romanian vegetable soup with herbs and lemon, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['ciorba de legume', 'romanian vegetable soup', 'sour vegetable soup with lemon and herbs', 'ciorba de legume recipe', 'romanian summer soup'],
    why: 'Keep it short and sharp: the soup must be sour. Ciorbă de legume is the Romanian vegetable ciorbă, the simplest and most common of the sour soups, made all summer from whatever is in the garden, and soured with lemon juice, borș or vinegar.\n\nDice an onion, carrots, parsnip, celery, a pepper and potatoes, and cut green beans into short lengths. Soften the onion, carrot and celery in oil for 8 minutes. Add the water, potatoes and a bay leaf and simmer for 15 minutes. **Add the green beans, pepper and tomatoes later**, so that they stay bright and tender. Cook for 15 minutes more.\n\nSeason with salt, and add the sour element little by little, tasting. Lemon juice is the easiest substitute for borș. Finish with a generous handful of chopped fresh dill, parsley and lovage if available, and serve with a spoonful of soured cream. A fresh hot green pepper on the side is traditional. The soup is better on the second day, and keeps for 3 days.',
    ing: [
      '3 tbsp sunflower oil',
      '1 onion, diced',
      '2 carrots, diced',
      '150 g parsnip, diced',
      '2 celery sticks, diced',
      '300 g potatoes, diced',
      '2 litres water',
      '1 bay leaf',
      '200 g green beans, in 2 cm lengths',
      '1 red pepper, diced',
      '2 tomatoes, 250 g, diced',
      '1 tsp salt',
      '3 tbsp lemon juice',
      '4 tbsp chopped dill and parsley',
      '150 g soured cream'
    ],
    st: [
      'Soften the onion, carrots, parsnip and celery in the oil for 8 minutes.',
      'Add the potatoes, water and bay and simmer for 15 minutes.',
      'Add the green beans, pepper and tomatoes and simmer for 15 minutes more.',
      'Season with the salt and add the lemon juice a spoonful at a time, tasting.',
      'Stir in the herbs and serve with the soured cream.'
    ],
    tips: [
      'Add the quick cooking vegetables later.',
      'Add the sour element gradually.',
      'Finish with fresh herbs.'
    ],
    pair: ['Crusty bread', 'Hot peppers', 'Soured cream'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [224, 4, 25, 12, 6, 8, 440]
  },

  'ciorba-radauteana': {
    d: 'A chicken soup from Rădăuți with vegetables, thickened with egg yolk and soured cream and finished with garlic and vinegar.',
    meta: 'Ciorbă rădăuțeană, Romanian chicken soup with soured cream, egg yolk and garlic, cooked for 40 minutes. Six servings, ready in 1 hour.',
    kw: ['ciorba radauteana', 'romanian chicken and cream soup', 'radauti chicken soup', 'ciorba radauteana recipe', 'chicken soup with garlic and soured cream'],
    why: 'The first sign it is ready is the colour: a pale golden broth, thickened with cream and egg yolks, and a strong smell of garlic. Ciorbă rădăuțeană is the chicken soup of the Rădăuți region in northern Romania, and it differs from the plain chicken soup in its creamy, sharp finish: garlic and vinegar are stirred in at the end.\n\nSimmer chicken pieces in water with an onion, carrot, celery and parsnip for 40 minutes, until tender. Lift out the chicken, shred it and strain the broth. Return the broth to the pot with diced vegetables from the stock, or a few fresh ones. Whisk egg yolks with soured cream in a bowl and add a ladle of hot broth a little at a time. **Pour the mixture into the soup off the heat**, stirring, so that it thickens without curdling.\n\nCrush garlic to a paste with salt and stir into the soup with a splash of white vinegar. Return the shredded chicken. The soup should be creamy, tangy and sharp with garlic. Serve at once in deep bowls with chopped parsley and bread. Do not let it boil after the egg is added.',
    ing: [
      '1 kg chicken pieces, bone in',
      '2 litres water',
      '1 onion',
      '2 carrots',
      '150 g parsnip',
      '2 celery sticks',
      '1 tsp salt',
      '3 egg yolks',
      '250 g soured cream',
      '6 garlic cloves, crushed',
      '3 tbsp white wine vinegar',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Simmer the chicken, onion, carrots, parsnip, celery and salt in the water for 40 minutes. Lift out the chicken and vegetables.',
      'Strain the broth. Shred the chicken, discarding skin and bones, and dice the carrots and parsnip.',
      'Whisk the yolks and soured cream with a ladle of hot broth. Pour into the broth off the heat, stirring.',
      'Stir in the garlic and vinegar. Return the chicken and diced vegetables.',
      'Serve with the parsley.'
    ],
    tips: [
      'Add the egg and cream off the heat.',
      'Do not boil the soup after that.',
      'Add the garlic and vinegar last.'
    ],
    pair: ['Crusty bread', 'Hot peppers', 'White wine'],
    store: 'Keeps for 2 days in the fridge. Reheat very gently.',
    nut: [493, 37, 12, 33, 3, 5, 590]
  },

  'fasole-cu-carnati': {
    d: 'Romanian white beans slowly baked with smoked sausage, onions, tomato and paprika until thick, in 1 hour 15 minutes.',
    meta: 'Fasole cu cârnați, Romanian beans with smoked sausage, onion and paprika, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['fasole cu carnati', 'romanian beans with sausage', 'white bean and sausage stew', 'fasole cu carnati recipe', 'romanian bean stew with paprika'],
    why: 'Short and sharp: use good smoked sausage, and let it release its fat. That is the foundation of fasole cu cârnați, the Romanian beans with sausage, a plain, filling stew eaten with bread and pickles in homes and in the army. The beans are tinned here, to save the usual soaking.\n\nSlice the sausage into thick coins and fry it in a casserole over medium heat for 6 minutes, until it browns and the fat runs. Lift out. In the same fat, soften chopped onion and carrot for 8 minutes. **Stir in the paprika and tomato purée off the heat**, then add the beans and a little water. Return the sausage and add a bay leaf and a pinch of thyme.\n\nSimmer, covered, for 40 minutes, stirring now and then, until the sauce is thick and glossy and the beans are soft. Mash a few against the pan to help it along. Taste for salt, as the sausage varies. Serve in deep bowls with raw onion, pickled peppers and rye bread. The stew keeps for 4 days and is better on the second day.',
    ing: [
      '400 g smoked sausage, sliced',
      '2 tbsp sunflower oil',
      '2 onions, chopped',
      '1 carrot, diced',
      '1 tbsp sweet paprika',
      '2 tbsp tomato purée',
      '1 kg tinned white beans, drained',
      '300 ml water',
      '1 bay leaf',
      '1/2 tsp dried thyme',
      '1 tsp salt',
      '1 onion, sliced raw, to serve'
    ],
    st: [
      'Fry the sausage in the oil in a casserole for 6 minutes. Lift out.',
      'Soften the onions and carrot in the fat for 8 minutes.',
      'Take off the heat and stir in the paprika and purée. Add the beans, water, bay and thyme and return the sausage.',
      'Cover and simmer for 40 minutes, mashing a few beans, until thick.',
      'Season and serve with the raw onion.'
    ],
    tips: [
      'Brown the sausage first.',
      'Add the paprika off the heat.',
      'Mash a few beans to thicken the sauce.'
    ],
    pair: ['Raw onion', 'Pickled peppers', 'Rye bread'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [414, 20, 34, 22, 10, 5, 1440]
  },

  'placinta-cu-branza': {
    d: 'A Romanian cheese pie of thin pastry filled with salty cheese, egg and dill and baked until crisp, in 1 hour 15 minutes.',
    meta: 'Plăcintă cu brânză, Romanian cheese pie of thin pastry with salty cheese and dill, baked for 40 minutes. Eight servings, ready in 1 hour 15 minutes.',
    kw: ['placinta cu branza', 'romanian cheese pie', 'cheese pie with dill', 'placinta cu branza recipe', 'romanian savoury cheese pastry'],
    why: 'Go lightly on the salt. That is the quick tip for plăcintă cu brânză, the Romanian cheese pie, because the cheese is salty already. The filling is made from a fresh sheep or cow cheese, such as feta or telemea, mixed with an egg, dill and a little soured cream, and baked in a thin, crisp pastry.\n\nThe dough is a simple oil and water dough, or you can use bought sheets of phyllo. If you make it yourself, knead for 5 minutes, rest for 20 minutes, and roll it very thin. Crumble the cheese and mix it with eggs, soured cream, chopped dill and pepper. **Taste the mixture before baking**, and add salt only if the cheese is mild. Spread it over the pastry.\n\nFold the pastry over the filling in a long roll, or in squares, and brush with oil. Bake at 190C for 40 minutes, until deep gold and crisp. Cut into squares while still warm. The pie is good hot, or cold the next day in a lunchbox, and it is served with yoghurt or soured cream and pickled peppers. A light salad of cucumber goes well.',
    ing: [
      '400 g plain flour',
      '5 tbsp sunflower oil',
      '180 ml water',
      '1/2 tsp salt',
      '500 g feta or telemea, crumbled',
      '3 eggs',
      '150 g soured cream',
      '4 tbsp chopped dill',
      '1/2 tsp black pepper',
      '3 tbsp sunflower oil, for brushing'
    ],
    st: [
      'Mix the flour, 5 tablespoons of oil, water and salt and knead for 5 minutes. Rest for 20 minutes.',
      'Heat the oven to 190C. Mix the cheese, eggs, soured cream, dill and pepper.',
      'Roll the dough very thin into a rectangle. Spread the filling along one long side and roll up.',
      'Coil the roll into a spiral on a lined tray and brush with the oil.',
      'Bake for 40 minutes until deep gold. Cut into squares.'
    ],
    tips: [
      'Taste the filling before adding salt.',
      'Roll the dough very thin.',
      'Serve warm or cold.'
    ],
    pair: ['Yoghurt', 'Pickled peppers', 'Cucumber salad'],
    store: 'Keeps for 3 days in the fridge. Reheat in the oven.',
    nut: [533, 17, 42, 33, 2, 4, 870]
  },

  'kavarma': {
    d: 'A Bulgarian pork and vegetable stew with onions, peppers and tomatoes, slowly cooked in a clay pot with white wine for 40 minutes.',
    meta: 'Kavarma, Bulgarian pork stew with onions, peppers and white wine, cooked for 40 minutes. Four servings, ready in 1 hour.',
    kw: ['kavarma', 'bulgarian pork stew', 'bulgarian clay pot stew with peppers', 'kavarma recipe', 'bulgarian meat and vegetable stew'],
    why: 'A dish for a table of four on a cold day, from a country where pork and peppers are as basic as bread. Kavarma is the Bulgarian stew, often made at weekends and holidays in a clay pot, and the sauce is formed by the vegetables and wine, with no thickening.\n\nCut the pork into 3 cm cubes and brown them in a hot pan in two batches, since crowding steams the meat. Lift out and soften onions in the fat for 10 minutes, then add sliced red and green peppers, mushrooms if you like, and garlic. **Stir in the paprika off the heat**, then add tomatoes and a splash of white wine. A bay leaf and a few peppercorns round it out.\n\nReturn the pork to the pot and cover. Simmer or bake at 180C for 40 minutes, until the meat is tender and the vegetables have collapsed into a thick sauce. Many cooks crack an egg on top for the last 5 minutes. Scatter with parsley and serve with bread or a mound of rice. Kavarma tastes better the next day, when the flavours have deepened.',
    ing: [
      '700 g pork shoulder, in 3 cm cubes',
      '3 tbsp sunflower oil',
      '2 onions, sliced',
      '2 red peppers, sliced',
      '1 green pepper, sliced',
      '200 g mushrooms, halved',
      '3 garlic cloves',
      '2 tsp sweet paprika',
      '400 g tinned chopped tomatoes',
      '100 ml dry white wine',
      '1 bay leaf',
      '1 tsp salt',
      '3 tbsp chopped parsley',
      '4 eggs'
    ],
    st: [
      'Brown the pork in the oil in 2 batches for 8 minutes each. Lift out.',
      'Soften the onions in the fat for 10 minutes. Add the peppers, mushrooms and garlic for 5 minutes.',
      'Take off the heat and stir in the paprika, then add the tomatoes, wine, bay and salt. Return the pork.',
      'Cover and simmer for 40 minutes.',
      'Crack the eggs on top for the last 5 minutes. Scatter with the parsley.'
    ],
    tips: [
      'Brown the pork in batches.',
      'Add the paprika off the heat.',
      'Crack the eggs on at the end.'
    ],
    pair: ['Crusty bread', 'Rice', 'Red wine', 'Shopska salad'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [617, 42, 20, 41, 5, 11, 770]
  },

  'kebapche': {
    d: 'Bulgarian finger shaped grilled sausages of minced pork and beef seasoned with cumin and salt, cooked for 15 minutes.',
    meta: 'Kebapche, Bulgarian grilled sausages of minced pork and beef with cumin, cooked for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['kebapche', 'bulgarian grilled minced meat sausages', 'kebapche recipe', 'bulgarian kebab sausages', 'cumin minced meat grill'],
    why: 'Ground meat, cumin, salt: that is all the seasoning, and the finish is a grill and a pinch of patience. Kebapche is the Bulgarian grilled meat finger, one of the national dishes of grill houses and festivals, and the lack of spices is what lets the flavour of the meat show. They are not sausages and have no casing.\n\nMix minced pork and beef in a ratio of about 2 to 1, with a good proportion of fat, since lean meat comes out dry. Add salt, black pepper, cumin, a little sparkling water and baking soda. **Knead the mixture for 5 minutes and chill it for 30 minutes**, because the kneading binds the mince and the chilling makes it easier to shape. With wet hands, roll into fingers about 10 cm long and 3 cm thick.\n\nGrill over a medium high heat, or on a ridged pan, for 12 to 15 minutes, turning, until browned and cooked through. Serve with fries, a grilled pepper, sliced onion and a pinch of savory or cumin, and a bowl of lyutenitsa. They are best eaten as they come off the grill, with a glass of cold beer.',
    ing: [
      '500 g minced pork',
      '300 g minced beef',
      '2 tsp salt',
      '1/2 tsp black pepper',
      '2 tsp ground cumin',
      '60 ml sparkling water',
      '1/2 tsp baking soda',
      '1 tbsp vegetable oil',
      '2 onions, sliced, to serve',
      '4 flatbreads'
    ],
    st: [
      'Mix the pork, beef, salt, pepper, cumin, sparkling water and baking soda and knead for 5 minutes. Chill for 30 minutes.',
      'With wet hands, shape into 12 fingers, 10 cm long.',
      'Heat a ridged pan or grill to medium high and brush with the oil.',
      'Cook for 12 to 15 minutes, turning, until browned and cooked through.',
      'Serve with the onions and flatbreads.'
    ],
    tips: [
      'Use mince with some fat.',
      'Knead and chill before shaping.',
      'Turn often on a medium high heat.'
    ],
    pair: ['Chips', 'Grilled pepper', 'Lyutenitsa', 'Cold beer'],
    store: 'Keeps for 2 days in the fridge.',
    nut: [651, 43, 41, 35, 3, 4, 1820]
  },

  'lyutenitsa': {
    d: 'A Bulgarian relish of roasted red peppers, aubergine and tomato cooked down for 1 hour with garlic and oil.',
    meta: 'Lyutenitsa, Bulgarian roasted pepper, aubergine and tomato relish, cooked for 1 hour. Twelve servings, ready in 1 hour 15 minutes.',
    kw: ['lyutenitsa', 'bulgarian roasted pepper relish', 'lyutenitsa recipe', 'red pepper and tomato spread', 'bulgarian vegetable relish'],
    why: 'Most home relishes come out watery, and the fix is to roast the vegetables first and to cook them down for a full hour. Lyutenitsa is the Bulgarian pepper and tomato relish, spread on bread at breakfast or served with meat, and it is made in late summer, when peppers are plentiful.\n\nRoast red peppers and aubergines at 220C for 40 minutes, until the skins are blackened and the flesh is soft. Cool them under a cloth, and peel. Grate or chop the tomatoes. **Pass all the vegetables through a mincer or blitz them briefly**, so there is texture and not a purée. Cook the mix in a heavy pan with oil, a little sugar, salt and a pinch of ground chilli, stirring often.\n\nSimmer for 1 hour, until the relish is as thick as jam and the oil begins to separate. Add crushed garlic for the last 5 minutes. Taste and adjust with salt and sugar. Cool and spoon into clean jars. It keeps for 2 weeks in the fridge, with a layer of oil on top. Spread on bread with white cheese for a quick lunch.',
    ing: [
      '1.2 kg red peppers',
      '500 g aubergines',
      '800 g ripe tomatoes',
      '100 ml sunflower oil',
      '1 tbsp caster sugar',
      '2 tsp salt',
      '1/4 tsp ground chilli',
      '4 garlic cloves, crushed'
    ],
    st: [
      'Heat the oven to 220C. Roast the peppers and aubergines for 40 minutes until blackened. Cool under a cloth, then peel.',
      'Grate the tomatoes. Chop the peppers and aubergines and blitz briefly with the tomatoes.',
      'Cook in a heavy pan with the oil, sugar, salt and chilli over medium low heat for 1 hour, stirring often.',
      'Add the garlic for the last 5 minutes.',
      'Cool and store in clean jars under a layer of oil.'
    ],
    tips: [
      'Roast the vegetables until blackened.',
      'Cook until the oil separates.',
      'Keep some texture.'
    ],
    pair: ['Bread', 'White cheese', 'Grilled meat', 'Kebapche'],
    store: 'Keeps for 2 weeks in the fridge under a layer of oil.',
    nut: [128, 2, 12, 8, 4, 8, 400]
  },

  'bulgarian-bean-soup': {
    d: 'A thick Bulgarian soup of white beans with onion, carrot, tomato and savory, served with dried mint and chilli, in 1 hour 15 minutes.',
    meta: 'Bulgarian bean soup, bob chorba, thick white bean soup with tomato and savory, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['bulgarian bean soup', 'bob chorba', 'white bean soup with savory', 'bulgarian soup recipe', 'bean soup with mint and chilli'],
    why: 'A table for six on a Wednesday or a Friday, which are the traditional fasting days when the soup is eaten without meat. Bob chorba is the Bulgarian white bean soup, thick with beans and vegetables and flavoured with savory, a herb that is as typical in Bulgaria as parsley. It is eaten with chilli flakes, dried mint and bread.\n\nSoften onion, carrot and a pepper in oil for 10 minutes. Stir in the tomato purée and paprika off the heat, add water, the beans and a bay leaf. **Cook the soup for the full hour**, even with tinned beans, because the long simmer blends them into the broth. Crush a ladleful against the side of the pot to thicken it.\n\nAdd the savory and salt towards the end. Serve in deep bowls with a drizzle of oil, a sprinkle of dried mint and a pinch of chilli flakes, and a slice of bread on the side. Some people eat a raw onion with it, biting off pieces between spoonfuls. The soup keeps for 4 days and tastes better the next day.',
    ing: [
      '3 tbsp sunflower oil',
      '1 onion, chopped',
      '2 carrots, diced',
      '1 red pepper, diced',
      '1 tbsp tomato purée',
      '1 tsp sweet paprika',
      '1.2 kg tinned white beans, drained',
      '1.5 litres water',
      '1 bay leaf',
      '2 tsp dried savory',
      '1 tsp salt',
      '1 tsp dried mint',
      '1/2 tsp chilli flakes'
    ],
    st: [
      'Soften the onion, carrots and pepper in the oil for 10 minutes.',
      'Take off the heat and stir in the purée and paprika. Add the beans, water and bay.',
      'Simmer for 1 hour, crushing a ladleful of the beans against the pot to thicken.',
      'Add the savory and salt for the last 10 minutes.',
      'Serve with the dried mint and chilli flakes.'
    ],
    tips: [
      'Simmer for the full hour.',
      'Crush a ladleful to thicken.',
      'Finish with mint and chilli.'
    ],
    pair: ['Crusty bread', 'Raw onion', 'Pickled peppers'],
    store: 'Keeps for 4 days in the fridge. Freeze for 3 months.',
    nut: [272, 14, 36, 8, 12, 4, 1010]
  },

  'burek': {
    d: 'A Croatian spiral pie of paper thin pastry filled with spiced minced beef and onion, baked for 40 minutes until crisp.',
    meta: 'Burek, Croatian spiral pie of thin pastry filled with spiced minced beef, baked for 40 minutes. Eight servings, ready in 1 hour 20 minutes.',
    kw: ['burek', 'croatian meat burek', 'balkan meat pie in phyllo', 'burek recipe', 'spiral pie with minced beef'],
    why: 'Burek is the pie of the whole Balkans and every country claims it as its own. In Croatia it is eaten for breakfast or lunch, bought from a bakery by weight and served with a tub of yoghurt, and the meat version is the most common one. Its pastry is the thing: paper thin, flaky and shiny with oil.\n\nThe filling is minced beef cooked with onion, garlic, salt and black pepper until dry. **Cool it completely before filling**, because hot meat steams the pastry and makes it gummy. Use ready made phyllo for ease. Brush each sheet with oil, lay a line of the filling along the long edge and roll it into a tight rope.\n\nCoil the ropes into a spiral in an oiled round tin, starting from the centre. Brush the top with oil and bake at 200C for 40 minutes, until deep gold and crisp. Pour over a little water or sparkling water for the last 5 minutes, which makes the layers soft inside and crisp on top. Cut into wedges. It is best warm, with yoghurt.',
    ing: [
      '500 g minced beef',
      '2 onions, finely chopped',
      '2 garlic cloves',
      '2 tbsp sunflower oil',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '400 g phyllo pastry, 8 sheets',
      '100 ml sunflower oil, for brushing',
      '100 ml sparkling water',
      '300 g plain yoghurt, to serve'
    ],
    st: [
      'Soften the onions and garlic in the 2 tablespoons of oil for 8 minutes. Add the beef and cook for 10 minutes until dry. Season with the salt and pepper and cool completely.',
      'Heat the oven to 200C and oil a 28 cm round tin.',
      'Lay a phyllo sheet, brush with oil, spoon a line of the filling along the long edge and roll into a rope. Repeat with the other sheets.',
      'Coil the ropes into a spiral in the tin and brush with oil.',
      'Bake for 40 minutes, pouring the sparkling water over for the last 5 minutes. Serve in wedges with the yoghurt.'
    ],
    tips: [
      'Cool the filling completely.',
      'Brush every sheet with oil.',
      'Add water at the end for a soft inside.'
    ],
    pair: ['Yoghurt', 'Ayran', 'Pickled peppers'],
    store: 'Keeps for 2 days in the fridge. Reheat in the oven.',
    nut: [419, 21, 32, 23, 2, 4, 500]
  }
};
