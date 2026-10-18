'use strict';

/**
 * Volume fifty-eight, first part: twenty-five French dishes. Canelés, a rabbit
 * in mustard, a fish and garlic stew, vegetable and potato sides, tarts, two
 * cakes, a soup and the classic restaurant plates. Waits of an hour or more
 * are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'canneles': {
    d: 'Small fluted cakes with a dark caramelised shell and a custard centre, made from a rum and vanilla batter rested overnight and baked for 60 minutes.',
    meta: 'Canelés with a dark crisp shell and soft custard centre, baked for 60 minutes. Twelve cakes, ready in 1 hour 15 minutes plus overnight resting.',
    kw: ['canneles de bordeaux', 'canneles recipe', 'french rum and vanilla cakes', 'fluted custard cakes'],
    why: 'Most home canelés come out pale and soft, and the fix is a long rest and a very hot start. The batter is thin, like a crêpe batter, and it needs a night in the fridge so the flour swells and the eggs settle. A batter used at once bakes into a cake with big holes instead of a dense, custardy middle.\n\nThe shell is the point. It turns almost black, and that dark colour is caramelised sugar, not burnt flour. **Start at 220C for 10 minutes**, then drop to 180C for the rest, so the outside sets before the middle has time to rise out of the mould. If the cakes puff above the rim in the first minutes, that is normal; they sink back as they cool.\n\nFill each mould to about a centimetre below the top, and butter the moulds well or use silicone ones that do not stick. Turn the cakes out while they are hot, because the sugar in the shell hardens as it cools and glues them in. Eat them the same day. The crisp shell softens overnight, and a few minutes in a hot oven brings it back.',
    ing: [
      '500 ml whole milk',
      '50 g butter',
      '2 g vanilla pod, split',
      '100 g plain flour',
      '200 g icing sugar',
      '1/4 tsp salt',
      '2 eggs',
      '2 egg yolks',
      '2 tbsp dark rum',
      '1 tbsp butter, melted, for the moulds'
    ],
    st: [
      'Warm the milk with the butter and vanilla pod until the butter melts, then take off the heat and leave for 10 minutes.',
      'Whisk the flour, icing sugar and salt in a bowl. Whisk in the eggs and egg yolks, then pour in the warm milk a little at a time, whisking, until smooth. Stir in the rum.',
      'Cover and chill the batter overnight.',
      'Heat the oven to 220C. Brush 12 canelé moulds with melted butter and stand them on a tray.',
      'Whisk the batter, remove the vanilla pod and fill the moulds to 1 cm below the rim.',
      'Bake for 10 minutes at 220C, then reduce to 180C and bake for 50 minutes until very dark brown. Turn out onto a rack at once.'
    ],
    tips: [
      'Rest the batter overnight and whisk it again before using.',
      'Butter the moulds thoroughly so the shells release.',
      'Turn the cakes out while hot, then cool them on a rack.'
    ],
    pair: ['Espresso', 'Dessert wine', 'Fresh berries'],
    store: 'Best on the day they are made. Crisp them for 5 minutes in a 180C oven the next day.',
    rest: [480, 'Resting the batter overnight'],
    nut: [179, 4, 25, 7, 0, 19, 90]
  },

  'lapin-a-la-moutarde': {
    d: 'Rabbit pieces browned and braised for 60 minutes in white wine, Dijon mustard and cream, until the meat is tender and the sauce coats a spoon.',
    meta: 'Rabbit in a mustard and cream sauce, cooked for 60 minutes. Four servings, ready in 1 hour 20 minutes.',
    kw: ['lapin a la moutarde', 'rabbit in mustard sauce', 'french braised rabbit', 'rabbit with dijon and cream', 'rabbit casserole'],
    why: 'What does the mustard actually do in a rabbit dish? It seasons the meat, thickens the sauce and cuts through the cream, and it does all three best when it goes on twice: brushed onto the pieces before they brown, and stirred into the sauce at the end.\n\nRabbit is lean, so it dries out if it is rushed. Brown the pieces gently in butter and oil, then braise them with white wine and stock, covered, over a low heat. **Keep the sauce at a bare simmer**, since a hard boil toughens the meat and splits the cream. The saddle cooks faster than the legs, so lift it out after 35 minutes if you want it very tender.\n\nThe finish matters. Take the rabbit out, boil the sauce down by a third, stir in the cream and the last spoonful of mustard off the heat, and taste. Mustard loses its bite when boiled for long, which is why it goes in last. Serve with boiled potatoes or buttered noodles to catch the sauce.',
    ing: [
      '1 rabbit, about 1.2 kg, jointed',
      '3 tbsp Dijon mustard',
      '1 tbsp butter',
      '1 tbsp rapeseed oil',
      '2 shallots, finely chopped',
      '150 ml dry white wine',
      '250 ml chicken stock',
      '150 ml double cream',
      '2 tsp fresh thyme leaves',
      '1/2 tsp salt'
    ],
    st: [
      'Brush the rabbit pieces with half the mustard and season with the salt.',
      'Heat the butter and oil in a casserole and brown the rabbit for 8 minutes, turning. Lift out.',
      'Cook the shallots in the same pot for 3 minutes. Pour in the wine and boil for 2 minutes, scraping the base.',
      'Add the stock and thyme, return the rabbit, cover and simmer very gently for 60 minutes until tender.',
      'Lift out the rabbit. Boil the sauce for 5 minutes, then take off the heat and stir in the cream and remaining mustard.',
      'Return the rabbit to the sauce and warm through for 2 minutes.'
    ],
    tips: [
      'Braise at a bare simmer so the lean meat stays tender.',
      'Add the last of the mustard off the heat so it keeps its bite.',
      'Lift out the saddle early if it looks done before the legs.'
    ],
    pair: ['Boiled potatoes', 'Buttered noodles', 'Green beans', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge. Reheat gently so the sauce does not split.',
    nut: [585, 66, 6, 33, 1, 3, 870]
  },

  'bourride': {
    d: 'A Provençal white fish stew thickened off the heat with garlic aioli and egg yolks, served over toasted bread, cooked for 30 minutes.',
    meta: 'Bourride, a fish stew finished with garlic aioli, cooked for 30 minutes. Four servings, ready in 1 hour.',
    kw: ['bourride', 'provencal fish stew with aioli', 'white fish stew with garlic mayonnaise', 'french fish stew', 'fish stew with aioli'],
    why: 'The first thing to learn about bourride is that it is not bouillabaisse. There is no tomato and no saffron-red broth here; the stew is pale, made from white fish poached in a leek and fennel stock, and it is thickened at the very end with garlic mayonnaise.\n\nThat last step is the one that goes wrong. Aioli stirred into a boiling pot scrambles the egg yolks and the sauce turns grainy. **Take the pan off the heat and let it stop bubbling** before you whisk a ladle of hot broth into the aioli, then pour the mixture back and stir over very low heat until it coats a spoon. If it steams but does not simmer, it is safe.\n\nUse firm white fish that holds together, such as monkfish, cod or haddock, and add the thicker pieces first. Overcooked fish falls apart; it is done when it turns opaque and flakes at the thickest point. Serve in wide bowls over toasted bread rubbed with garlic, and put extra aioli on the table for people to stir in.',
    ing: [
      '1 kg firm white fish fillets, in large pieces',
      '2 tbsp olive oil',
      '1 leek, sliced',
      '1 fennel bulb, sliced',
      '1 litre fish stock',
      '1 strip orange zest',
      '4 garlic cloves, crushed',
      '2 egg yolks',
      '100 ml olive oil, for the aioli',
      '1 tsp lemon juice',
      '8 slices baguette, toasted',
      '1 tsp salt'
    ],
    st: [
      'Heat the 2 tbsp oil in a wide pan and cook the leek and fennel for 8 minutes until soft. Add the stock and orange zest and simmer for 10 minutes.',
      'Lower in the fish, starting with the thickest pieces, and poach gently for 8 minutes until just opaque. Lift the fish onto a warm dish.',
      'Crush the garlic with the salt to a paste, then whisk in the egg yolks and lemon juice. Add the 100 ml oil a drop at a time, whisking, to make a thick aioli.',
      'Take the pan off the heat and wait for the broth to stop bubbling. Whisk a ladle of the hot broth into the aioli, then stir the mixture into the pan.',
      'Warm over very low heat for 2 minutes, stirring, without letting it simmer.',
      'Put the toast in bowls, lay the fish on top and ladle over the broth.'
    ],
    tips: [
      'Never let the stew simmer once the aioli is in.',
      'Add the oil to the aioli slowly, a drop at a time at first.',
      'Poach the fish gently; it should flake, not fall apart.'
    ],
    pair: ['Boiled potatoes', 'Green salad', 'Dry white wine'],
    store: 'Best eaten at once. Keep leftovers for 1 day in the fridge and reheat very gently.',
    nut: [756, 58, 50, 36, 5, 9, 2000]
  },

  'tian-provencal': {
    d: 'Overlapping slices of courgette, aubergine, tomato and onion baked in a dish with olive oil and thyme for 45 minutes.',
    meta: 'Tian provençal of sliced courgette, aubergine and tomato, baked for 45 minutes. Four servings, ready in 1 hour 5 minutes.',
    kw: ['tian provencal', 'provencal vegetable bake', 'courgette aubergine and tomato bake', 'sliced vegetable tian', 'french vegetable gratin'],
    why: 'Why does a tian look so much better than a pile of roast vegetables? Because the slices are stood on edge and overlapped, so every forkful has all four vegetables in it and the dish bakes in tidy, colourful rows.\n\nThe name comes from the shallow earthenware dish it is baked in, and any shallow dish of about 25 cm will do. Slice the vegetables to the same thickness, about 5 mm, with a sharp knife or a mandoline so the rows cook evenly. **Salt the aubergine and courgette for 15 minutes** and pat them dry, otherwise the dish weeps and bakes in a pool of water.\n\nA base of softened onion gives the tian its sweetness. Pack the slices tightly, because they shrink as they cook, then drizzle with oil and scatter over thyme. Cover with foil for the first 25 minutes so they soften, then uncover to colour the tops. It is as good warm as hot, and better the next day.',
    ing: [
      '4 tbsp olive oil',
      '2 onions, thinly sliced',
      '2 garlic cloves, sliced',
      '1 aubergine, about 300 g, sliced 5 mm thick',
      '2 courgettes, about 400 g, sliced 5 mm thick',
      '4 tomatoes, about 500 g, sliced 5 mm thick',
      '1 tbsp fresh thyme leaves',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190C. Cook the onions in 1 tbsp of the oil for 12 minutes until soft and golden, adding the garlic for the last minute. Spread in a 25 cm dish.',
      'Sprinkle the aubergine and courgette slices with half the salt, leave for 15 minutes and pat dry.',
      'Stand the aubergine, courgette and tomato slices on edge in the dish in alternating overlapping rows, packing them tightly.',
      'Drizzle with the remaining oil and scatter over the thyme, the rest of the salt and the pepper.',
      'Cover with foil and bake for 25 minutes, then uncover and bake for 20 minutes more until the edges are browned.'
    ],
    tips: [
      'Salt the aubergine and courgette and pat them dry first.',
      'Slice everything to the same thickness for even cooking.',
      'Pack the slices tightly; they shrink as they bake.'
    ],
    pair: ['Roast lamb', 'Grilled fish', 'Crusty bread', 'Goat cheese'],
    store: 'Keeps for 3 days in the fridge. Reheat at 180C for 10 minutes.',
    nut: [223, 4, 18, 15, 6, 11, 610]
  },

  'pommes-anna': {
    d: 'Thin potato slices layered with melted butter in a pan, baked until the base is golden and crisp, then turned out like a cake, 50 minutes.',
    meta: 'Pommes Anna, layered buttery potato slices baked into a crisp golden cake, baked for 50 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['pommes anna', 'layered potato cake', 'french buttered potato cake', 'crisp potato cake with butter', 'sliced potato side dish'],
    why: 'A Sunday dish for a table of four, and one that rewards patience more than skill. Pommes Anna is only potatoes, butter and salt, but the way they are layered and pressed turns them into a golden, tightly packed cake that holds together when it is turned out.\n\nThe slices must be very thin, about 2 mm, and they must not be washed after slicing. The starch on the surface is the glue that binds the layers. **Dry the slices in a cloth and keep them in order**, then brush each layer with clarified butter, which does not burn as ordinary butter can. Overlap the slices in neat circles so the top looks as good as the base.\n\nBake it in an ovenproof frying pan, pressing down on the cake halfway through with a second pan or a spatula. The base should be deep gold. Rest the pan for 5 minutes so the cake firms up, run a knife around the edge and turn it onto a plate. If any slices stick, press them back into place.',
    ing: [
      '800 g waxy potatoes, peeled',
      '100 g butter, melted and skimmed',
      '1 tsp salt',
      '1/4 tsp black pepper',
      '1 tsp fresh thyme leaves'
    ],
    st: [
      'Heat the oven to 200C. Slice the potatoes 2 mm thick on a mandoline and pat dry in a cloth without washing.',
      'Brush a 24 cm ovenproof frying pan with butter. Arrange a circle of overlapping slices in the base, brush with butter and season lightly.',
      'Repeat the layers, brushing each with butter and seasoning, until all the potatoes are used. Press down firmly.',
      'Cook over medium heat for 5 minutes until the base sizzles. Cover with buttered paper and put in the oven.',
      'Bake for 40 minutes, pressing down after 20 minutes, until the potatoes are tender and the base golden.',
      'Rest for 5 minutes, run a knife around the edge and turn out onto a plate.'
    ],
    tips: [
      'Slice thinly and evenly, and do not rinse the potato.',
      'Use skimmed, melted butter so the layers brown without burning.',
      'Press the cake down once during baking.'
    ],
    pair: ['Roast chicken', 'Steak', 'Green salad', 'Roast lamb'],
    store: 'Keeps for 2 days in the fridge. Crisp in a hot oven for 10 minutes.',
    nut: [332, 4, 34, 20, 4, 2, 600]
  },

  'pommes-dauphine': {
    d: 'Light, crisp potato croquettes made by folding mashed potato into choux pastry, shaped into balls and deep fried for about 20 minutes.',
    meta: 'Pommes dauphine, mashed potato mixed with choux pastry and fried, cooked for 20 minutes. Six servings, ready in 1 hour.',
    kw: ['pommes dauphine', 'potato and choux pastry puffs', 'french fried potato puffs', 'dauphine potatoes', 'crisp potato balls'],
    why: 'Keep the mashed potato dry. That is the single rule that decides whether these puff up light as air or collapse into greasy lumps. Pommes dauphine are mashed potato folded into choux pastry, and both halves of the mixture must be thick and free of extra water.\n\nBake or steam the potatoes rather than boiling them, then pass them through a ricer or sieve so there are no lumps. Make the choux in a pan, beating flour into hot water and butter until it forms a ball, then beating in the eggs one at a time. **Fold the two together while the potato is still warm**, with a pinch of nutmeg and plenty of salt.\n\nFry small spoonfuls in oil at 170C, in batches of five or six so the temperature holds. They swell and turn the colour of old gold in about 4 minutes. Too hot and they brown before the inside cooks; too cool and they soak up oil. Drain on paper and serve at once, because they lose their crispness within minutes.',
    ing: [
      '500 g floury potatoes, unpeeled',
      '60 ml water',
      '30 g butter',
      '40 g plain flour',
      '1 egg, plus 1 egg yolk',
      '1 pinch nutmeg',
      '1 tsp salt',
      '60 ml rapeseed oil absorbed, from 750 ml for frying'
    ],
    st: [
      'Bake the potatoes at 200C for 50 minutes until soft. Scoop out the flesh and pass it through a ricer. Leave to steam for 10 minutes.',
      'Heat the water and butter in a pan until the butter melts and the water boils. Tip in the flour and beat to a smooth paste that leaves the sides of the pan.',
      'Beat in the egg and the yolk, a little at a time, until glossy.',
      'Fold the choux into the potato with the nutmeg and salt.',
      'Heat the oil to 170C. Drop in heaped teaspoonfuls, five or six at a time, and fry for 4 minutes until puffed and golden.',
      'Drain on kitchen paper and serve at once.'
    ],
    tips: [
      'Keep the potato dry by baking it rather than boiling.',
      'Fry in small batches so the oil stays at 170C.',
      'Serve straight away; they soften as they cool.'
    ],
    pair: ['Roast beef', 'Roast chicken', 'Grilled steak'],
    store: 'Best eaten at once. Re-crisp in a 200C oven for 8 minutes.',
    nut: [214, 3, 19, 14, 2, 1, 410]
  },

  'petits-pois-a-la-francaise': {
    d: 'Peas braised with butter, lettuce and spring onions in a little stock until sweet and tender, ready in 30 minutes.',
    meta: 'Petits pois à la française, peas braised with lettuce and spring onions, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['petits pois a la francaise', 'french braised peas', 'peas with lettuce and spring onion', 'buttered peas with lettuce', 'french style peas'],
    why: 'The first signs of spring in a French kitchen are peas, and this is the way they were once cooked: not boiled, but braised with a head of lettuce and a few spring onions in butter and a splash of water. The lettuce wilts into a soft green sauce, and the peas turn out sweet rather than watery.\n\nThe idea is gentle cooking in very little liquid. Everything goes into one pan with a lid, and the steam does the work. **Cut the lettuce into wide ribbons** so it melts into the peas without leaving tough ribs. Use fresh peas in the pod if you have them, or good frozen ones, which are frozen soon after picking and are often sweeter than the shop-bought pods.\n\nA small pinch of sugar brings out the natural sweetness, and the butter, added at the end, gives the cooking liquid a glossy finish. Cook until the peas are tender and the liquid has almost gone, then stir in the mint or chervil. Serve with roast chicken, lamb or fish.',
    ing: [
      '30 g butter',
      '4 spring onions, sliced',
      '500 g frozen peas',
      '1 little gem lettuce, shredded',
      '100 ml chicken stock',
      '1/2 tsp caster sugar',
      '1/2 tsp salt',
      '1 tbsp chopped mint'
    ],
    st: [
      'Melt half the butter in a pan and cook the spring onions for 2 minutes without colouring.',
      'Add the peas, lettuce, stock, sugar and salt. Bring to a simmer, cover and cook for 12 minutes until the peas are tender.',
      'Remove the lid and cook for 4 minutes more until the liquid has nearly gone.',
      'Stir in the remaining butter and the mint, and taste for salt.'
    ],
    tips: [
      'Cover the pan so the lettuce steams down into the peas.',
      'Add the second piece of butter at the end for gloss.',
      'Do not overcook; the peas should stay bright green.'
    ],
    pair: ['Roast chicken', 'Grilled fish', 'Roast lamb', 'New potatoes'],
    store: 'Best served at once. Keeps for 2 days in the fridge.',
    nut: [195, 9, 24, 7, 10, 10, 400]
  },

  'haricots-verts-amandine': {
    d: 'Slim green beans boiled for 4 minutes, then tossed in browned butter with toasted flaked almonds and lemon.',
    meta: 'Haricots verts amandine, green beans in browned butter and almonds, cooked for 10 minutes. Four servings, ready in 15 minutes.',
    kw: ['haricots verts amandine', 'green beans with almonds', 'green beans in browned butter', 'french green beans with almonds', 'buttered green beans'],
    why: 'Salt the water like the sea. That is the first instruction, and it makes a bigger difference than anything else in this dish. Green beans cooked in plainly salted water taste faintly of grass; cooked in water that tastes properly salty, they taste of themselves.\n\nHaricots verts are thin French beans, and they cook in 4 minutes, so they need watching. Boil them in a wide pan, drain and, if you are not serving at once, run them under cold water to hold the colour. **Brown the butter until it smells of hazelnuts** and the milk solids turn the colour of toffee, which takes about 3 minutes, and add the almonds in the last minute so they toast without burning.\n\nToss the beans through the nutty butter over a medium heat to warm them, and finish with lemon juice, which cuts through the richness. Serve alongside fish, chicken or a simple steak. The dish takes minutes and is on the table while the main course rests.',
    ing: [
      '500 g haricots verts, trimmed',
      '1 tbsp salt, for the water',
      '50 g butter',
      '40 g flaked almonds',
      '1 tbsp lemon juice',
      '1/4 tsp black pepper'
    ],
    st: [
      'Bring a large pan of well-salted water to the boil and cook the beans for 4 minutes until just tender. Drain.',
      'Melt the butter in a wide pan over medium heat and cook for 3 minutes until it smells nutty and turns light brown.',
      'Add the almonds and cook for 1 minute, stirring, until golden.',
      'Add the beans and toss for 2 minutes to warm through. Add the lemon juice and pepper and serve.'
    ],
    tips: [
      'Salt the cooking water generously.',
      'Watch the butter closely; it burns quickly once it browns.',
      'Add the almonds near the end so they do not scorch.'
    ],
    pair: ['Pan-fried fish', 'Roast chicken', 'Steak', 'New potatoes'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [195, 4, 11, 15, 5, 5, 1780]
  },

  'tarte-aux-fraises': {
    d: 'A crisp sweet pastry case filled with vanilla crème pâtissière and topped with glazed strawberries, with the shell baked for 20 minutes.',
    meta: 'Tarte aux fraises, strawberries on vanilla custard in a crisp pastry case, baked for 20 minutes. Eight servings, ready in 1 hour plus chilling.',
    kw: ['tarte aux fraises', 'french strawberry tart', 'strawberry tart with custard', 'strawberry tart with pastry cream', 'summer strawberry tart'],
    why: 'It looks like a simple tart and behaves like three recipes: a pastry case, a custard and a glaze, each of which can be made ahead and assembled just before serving. The reason to assemble late is simple: strawberries on custard in a pastry case slowly soften the base, and a tart that sits for hours turns soft.\n\nBake the case blind until it is a deep gold, because pale pastry tastes of flour. **Brush the cooled case with melted white chocolate or jam** to seal it before the custard goes in; that thin layer keeps the pastry crisp for hours. The custard, crème pâtissière, is made from milk, egg yolks, sugar and cornflour, whisked over the heat until thick and glossy, then chilled with cling film pressed on the surface so a skin does not form.\n\nChoose small, ripe strawberries of the same size, hull them and stand them upright in tight circles. A warm glaze of apricot jam brushed over the top makes them shine and keeps them from drying. Serve the same day, cold from the fridge.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '50 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '300 ml whole milk',
      '3 egg yolks',
      '60 g caster sugar',
      '25 g cornflour',
      '1 tsp vanilla extract',
      '500 g small strawberries, hulled',
      '3 tbsp apricot jam'
    ],
    st: [
      'Rub the butter into the flour and icing sugar. Mix in the egg yolk and water to a dough, wrap and chill for 30 minutes.',
      'Heat the oven to 190C. Roll the pastry to fit a 23 cm tart tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans and bake for 8 minutes more until golden. Cool.',
      'Heat the milk until steaming. Whisk the egg yolks, caster sugar and cornflour, pour on the milk, whisking, and return to the pan.',
      'Cook over medium heat, whisking, for 3 minutes until thick. Stir in the vanilla, pour into a bowl, cover the surface with cling film and chill for 1 hour.',
      'Spread the custard in the case and arrange the strawberries on top.',
      'Warm the jam with a spoonful of water, sieve, and brush over the strawberries. Serve the same day.'
    ],
    tips: [
      'Bake the case until deep gold so it stays crisp.',
      'Press cling film onto the custard to stop a skin forming.',
      'Assemble within a few hours of serving.'
    ],
    pair: ['Whipped cream', 'Sweet wine', 'Coffee'],
    store: 'Best on the day. Keeps for 1 day in the fridge but the pastry softens.',
    rest: [90, 'Chilling the pastry and the custard'],
    nut: [338, 7, 46, 14, 2, 22, 50]
  },

  'tarte-aux-poireaux': {
    d: 'A shortcrust tart filled with leeks softened in butter and set with eggs and cream, baked for 40 minutes at 180C.',
    meta: 'Tarte aux poireaux, a leek and cream tart in shortcrust pastry, baked for 40 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['tarte aux poireaux', 'french leek tart', 'leek and cream tart', 'leek tart in shortcrust pastry', 'savoury leek tart'],
    why: 'Salt the leeks as they cook, and cook them slowly. Leeks hold a great deal of water, and a tart filled with watery leeks is the reason a savoury tart turns soggy. Sweated gently in butter with a lid on for 10 minutes and then uncovered to drive off the water, they turn soft, sweet and almost jammy.\n\nWash them well, because soil hides between the layers. Slice them into thin rings, then tip them into a bowl of cold water and lift them out, leaving the grit behind. **Blind bake the case first**, until it is pale gold, so the cream does not seep into raw pastry. The filling is eggs and cream with nutmeg, enough to set around the leeks without turning to custard.\n\nThe tart is ready when the filling is just set in the middle, with a slight wobble, and golden at the edges. Let it rest for 10 minutes before cutting. It is good warm for lunch with a green salad, and it travels well in a picnic. A handful of grated Gruyère in the filling adds depth.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '1 egg yolk',
      '3 tbsp cold water',
      '30 g butter, for the leeks',
      '800 g leeks, sliced',
      '3 eggs',
      '200 ml double cream',
      '50 g Gruyère, grated',
      '1 pinch nutmeg',
      '1 tsp salt'
    ],
    st: [
      'Rub the cold butter into the flour with a pinch of the salt. Mix in the egg yolk and water to a dough, wrap and chill for 20 minutes.',
      'Heat the oven to 190C. Roll out the pastry to fit a 24 cm tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans and bake for 5 minutes.',
      'Melt the 30 g butter, add the leeks and the rest of the salt, cover and cook for 10 minutes. Uncover and cook for 5 minutes until the liquid has gone.',
      'Beat the eggs with the cream and nutmeg. Reduce the oven to 180C.',
      'Spread the leeks in the case, scatter over the cheese and pour over the egg mixture.',
      'Bake for 40 minutes until just set and golden. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Wash the leeks well, then cook off all their water.',
      'Blind bake the case so it stays crisp.',
      'Rest the tart before cutting for cleaner slices.'
    ],
    pair: ['Green salad', 'Dijon vinaigrette', 'White wine'],
    store: 'Keeps for 3 days in the fridge. Reheat at 160C for 15 minutes.',
    nut: [556, 13, 45, 36, 3, 7, 500]
  },

  'tarte-a-loignon': {
    d: 'A shortcrust tart filled with onions cooked slowly until sweet and golden, set with eggs and cream and baked for 40 minutes.',
    meta: 'Tarte à l\'oignon, a sweet onion and cream tart in shortcrust pastry, baked for 40 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['tarte a l\'oignon', 'french onion tart', 'caramelised onion tart', 'onion and cream tart', 'savoury onion tart'],
    why: 'The smell of onions turning from white to gold in butter is the best part of this tart, and it cannot be hurried. Onions cooked slowly over a low heat for 30 minutes lose their sharpness and turn sweet and soft; cooked fast over a high heat they brown at the edges and stay raw in the middle.\n\nUse plain yellow onions, sliced thinly across the rings, and cook them in butter and a little oil with a lid on for the first 10 minutes so they steam and soften. **Take the lid off and stir often** as the liquid disappears, and add a splash of white wine or water if they begin to catch. They are ready when they are the colour of dark honey and almost jammy.\n\nThe custard is eggs and cream, lightly seasoned with salt and nutmeg. Pour it over the onions in a pre-baked case and bake until just set. A few thyme leaves add fragrance, and a handful of grated cheese gives a golden crust. Serve it warm with a crisp salad.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '1 egg yolk',
      '3 tbsp cold water',
      '1 tbsp butter, for the onions',
      '1 tbsp rapeseed oil',
      '800 g yellow onions, thinly sliced',
      '50 ml dry white wine',
      '3 eggs',
      '150 ml double cream',
      '1 tsp fresh thyme leaves',
      '1 tsp salt'
    ],
    st: [
      'Rub the cold butter into the flour. Mix in the egg yolk and water to a dough, wrap and chill for 20 minutes.',
      'Heat the oven to 190C. Roll the pastry to fit a 24 cm tin, line with paper and beans and bake for 12 minutes. Remove the paper and beans and bake for 5 minutes.',
      'Melt the butter with the oil, add the onions and half the salt, cover and cook over low heat for 10 minutes.',
      'Uncover and cook for 25 minutes, stirring often, until deep golden. Add the wine and cook until it evaporates.',
      'Beat the eggs with the cream, thyme and remaining salt. Reduce the oven to 180C.',
      'Spread the onions in the case, pour over the egg mixture and bake for 40 minutes until set and golden.'
    ],
    tips: [
      'Cook the onions slowly until they are the colour of dark honey.',
      'Add a splash of wine or water if the onions start to catch.',
      'Blind bake the case so the base stays crisp.'
    ],
    pair: ['Green salad', 'Cold cuts', 'Dry white wine'],
    store: 'Keeps for 3 days in the fridge. Reheat at 160C for 15 minutes.',
    nut: [466, 10, 39, 30, 3, 7, 450]
  },

  'gateau-de-savoie': {
    d: 'A light, airy sponge made with whisked eggs, sugar and a mix of flour and potato starch, baked for 40 minutes in a tall tin.',
    meta: 'Gâteau de Savoie, a tall light sponge cake made with whisked eggs, baked for 40 minutes. Ten servings, ready in 1 hour 5 minutes.',
    kw: ['gateau de savoie', 'french sponge cake', 'savoy sponge cake', 'light sponge without butter', 'whisked egg sponge'],
    why: 'A cake for a table of ten, and one of the lightest you can make, because it has no butter or oil. All the lift comes from air whisked into eggs, and the whole recipe is about not knocking that air out.\n\nSeparate the eggs and whisk the yolks with half the sugar until the mixture is pale and thick enough to leave a ribbon trail. Whisk the whites separately to soft peaks, adding the rest of the sugar a spoonful at a time. **Fold the flour and starch in with a metal spoon**, in three additions, using a gentle cutting motion rather than stirring. A single hard stir can lose a third of the volume.\n\nThe batter goes into a greased and sugared tin, which gives the sponge something to climb and a thin crisp crust. Do not open the oven in the first 30 minutes. The cake is ready when a skewer comes out clean and the top is golden. Cool it upside down on a rack if the tin has a central tube, which stops the cake from collapsing on itself.',
    ing: [
      '6 eggs, separated',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '60 g plain flour',
      '60 g potato starch',
      '1 tbsp butter, for the tin',
      '1 tbsp caster sugar, for the tin',
      '1 tbsp icing sugar, to dust'
    ],
    st: [
      'Heat the oven to 170C. Butter a 22 cm ring tin or deep cake tin and dust with the 1 tbsp caster sugar.',
      'Whisk the egg yolks with 75 g of the sugar and the vanilla for 5 minutes until pale and thick.',
      'Whisk the whites with the salt to soft peaks, then add the remaining sugar a spoonful at a time and whisk until glossy.',
      'Fold a third of the whites into the yolks. Sift over the flour and starch and fold in, then fold in the rest of the whites.',
      'Pour into the tin and bake for 40 minutes without opening the oven, until golden and a skewer comes out clean.',
      'Cool in the tin for 10 minutes, turn out onto a rack and dust with icing sugar.'
    ],
    tips: [
      'Fold the flour in gently to keep the air in the batter.',
      'Keep the oven door shut for the first 30 minutes.',
      'Dust the tin with sugar so the sponge climbs the sides.'
    ],
    pair: ['Fresh fruit', 'Whipped cream', 'Jam', 'Tea'],
    store: 'Keeps for 3 days in a tin. It dries quickly once cut.',
    nut: [148, 5, 23, 4, 0, 18, 50]
  },

  'fondant-au-chocolat': {
    d: 'Small dark chocolate cakes with a soft, molten centre, made from five ingredients and baked for 12 minutes at 200C.',
    meta: 'Fondant au chocolat, dark chocolate cakes with a molten centre, baked for 12 minutes. Four servings, ready in 27 minutes.',
    kw: ['fondant au chocolat', 'chocolate fondant', 'molten chocolate cakes', 'french chocolate lava cake', 'warm chocolate pudding with soft centre'],
    why: 'It looks like a small cake and eats like a warm chocolate sauce in a sponge shell, and the difference between the two is only about 2 minutes in the oven. A fondant is baked until the edges are set and the middle is still liquid, so the timing is everything.\n\nThe batter is dark chocolate and butter melted together, with eggs, sugar and a spoonful of flour. Use chocolate with at least 60 per cent cocoa, because it carries the flavour in a recipe this short. **Butter and flour the moulds very well** so the fondants turn out in one piece; a dusting of cocoa works too, and leaves no pale film.\n\nBake at 200C for 12 minutes. The tops should be set, and the centre should wobble when you shake the tray. Rest the moulds for 1 minute, run a knife around the edge and turn out onto warm plates. A fondant that has not been tested once is a gamble; if your oven runs hot, check at 10 minutes. Serve at once with cream or ice cream.',
    ing: [
      '150 g dark chocolate, 60 per cent cocoa',
      '100 g butter, plus extra for the moulds',
      '3 eggs',
      '80 g caster sugar',
      '30 g plain flour',
      '1 tbsp cocoa powder, for the moulds',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 200C. Butter four 150 ml ramekins and dust with the cocoa powder.',
      'Melt the chocolate and butter together in a bowl over a pan of barely simmering water, stirring. Take off the heat and cool for 3 minutes.',
      'Whisk the eggs, sugar and salt for 3 minutes until thick and pale. Fold in the chocolate mixture, then the flour.',
      'Divide between the ramekins and stand them on a tray.',
      'Bake for 12 minutes until the tops are set and the centres still wobble.',
      'Rest for 1 minute, run a knife around each, turn out onto plates and serve at once.'
    ],
    tips: [
      'Use chocolate with at least 60 per cent cocoa.',
      'Check at 10 minutes if your oven runs hot.',
      'Serve at once; the centre firms as it cools.'
    ],
    pair: ['Cream', 'Vanilla ice cream', 'Raspberries', 'Espresso'],
    store: 'Best eaten at once. The raw batter keeps for 1 day in the fridge.',
    nut: [561, 8, 49, 37, 4, 38, 90]
  },

  'savarin': {
    d: 'A ring-shaped yeast cake soaked in a warm rum syrup and filled with whipped cream and fruit, baked for 25 minutes.',
    meta: 'Savarin, a light yeast ring cake soaked in rum syrup, baked for 25 minutes. Eight servings, ready in 55 minutes plus rising.',
    kw: ['savarin', 'savarin au rhum', 'rum soaked yeast cake', 'french ring cake with syrup', 'savarin with cream and fruit'],
    why: 'Savarin is a yeast cake meant to be soaked, and everything about the recipe follows from that. The batter is closer to a thick batter than a dough, enriched with butter and eggs, and it bakes into a light, open crumb that drinks up syrup like a sponge.\n\nThe cake is baked in a ring mould, and it is the soaking that makes it. Make the syrup from sugar, water and orange zest, add the rum off the heat, and spoon it over the warm cake in stages until it is heavy but not collapsing. **Pour the syrup over the cake while it is still warm**, because a cold cake does not drink as much. Turn it onto a plate and keep spooning the syrup over for 15 minutes.\n\nBefore serving, brush with warm apricot jam for gloss and fill the centre with whipped cream and fruit, such as strawberries, raspberries or sliced peaches. It is a dessert for the day it is made. Leave out the rum and use orange juice for a version everyone can eat.',
    ing: [
      '250 g plain flour',
      '7 g fast action yeast',
      '1 tbsp caster sugar',
      '1/2 tsp salt',
      '4 tbsp whole milk, warm',
      '4 eggs',
      '100 g butter, softened',
      '200 g caster sugar, for the syrup',
      '400 ml water',
      '1 strip orange zest',
      '80 ml dark rum',
      '3 tbsp apricot jam',
      '200 ml whipping cream, whipped',
      '200 g strawberries, halved'
    ],
    st: [
      'Mix the flour, yeast, 1 tbsp sugar and salt in a bowl. Add the milk and eggs and beat for 5 minutes to a thick batter. Beat in the butter.',
      'Cover and leave in a warm place for 1 hour until doubled.',
      'Heat the oven to 190C. Grease a 22 cm ring mould, beat the batter briefly and spoon it in. Leave for 20 minutes.',
      'Bake for 25 minutes until golden and risen. Turn out onto a rack set over a tray.',
      'Boil the 200 g sugar, water and orange zest for 5 minutes. Take off the heat and stir in the rum.',
      'Spoon the warm syrup over the warm cake in stages for 15 minutes. Brush with warmed jam and fill the centre with cream and strawberries.'
    ],
    tips: [
      'Soak the cake while it is still warm.',
      'Spoon the syrup on in stages so it is absorbed evenly.',
      'Fill with cream and fruit just before serving.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Coffee'],
    store: 'Best on the day. Keeps for 1 day in the fridge once filled.',
    rest: [80, 'Rising'],
    nut: [470, 8, 60, 22, 2, 34, 190]
  },

  'veloute-de-champignons': {
    d: 'A smooth cream of mushroom soup made with butter, flour, stock and cream and blended until velvety, ready in 35 minutes.',
    meta: 'Velouté de champignons, smooth cream of mushroom soup, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['veloute de champignons', 'french cream of mushroom soup', 'smooth mushroom soup', 'mushroom soup with cream', 'creamy mushroom veloute'],
    why: 'Mushrooms, butter, stock and cream: four things, and a soup that tastes far richer than the shopping list suggests. The trick is how long the mushrooms are cooked before any liquid goes in.\n\nSlice the mushrooms and tip them into a hot pan with butter, in two batches if the pan is small. They give up a lot of water at first, and the soup will taste flat if you add stock while they are still pale. **Wait until the pan is dry and the mushrooms turn deep brown**, which takes about 10 minutes. That colour is where the savoury flavour comes from.\n\nA spoonful of flour stirred into the buttery mushrooms thickens the soup, in the way of a classic velouté, and the stock is added gradually so the soup stays smooth. Blend it until completely silky, then finish with cream and a squeeze of lemon, which lifts the earthy taste. Serve with a few sautéed mushroom slices on top and plenty of black pepper.',
    ing: [
      '40 g butter',
      '500 g chestnut mushrooms, sliced',
      '1 shallot, finely chopped',
      '1 garlic clove, crushed',
      '20 g plain flour',
      '600 ml chicken stock',
      '100 ml double cream',
      '1 tsp lemon juice',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Melt half the butter in a large pan and cook the mushrooms in two batches for 10 minutes each until deep golden and dry. Set a few slices aside.',
      'Return all the mushrooms to the pan with the remaining butter, the shallot and the garlic and cook for 3 minutes.',
      'Stir in the flour and cook for 1 minute, then add the stock gradually, stirring. Simmer for 10 minutes.',
      'Blend until completely smooth. Stir in the cream, lemon juice, salt and pepper and warm through.',
      'Serve with the reserved mushrooms on top.'
    ],
    tips: [
      'Cook the mushrooms until they are dry and deeply browned.',
      'Add the stock gradually so the soup stays smooth.',
      'Finish with lemon to lift the flavour.'
    ],
    pair: ['Crusty bread', 'Thyme croutons', 'Green salad'],
    store: 'Keeps for 3 days in the fridge. Reheat gently and do not boil.',
    nut: [238, 7, 12, 18, 2, 4, 810]
  },

  'joue-de-boeuf': {
    d: 'Beef cheeks braised for 3 hours in red wine, carrots and thyme until they can be cut with a spoon, with the sauce reduced to a glaze.',
    meta: 'Joue de boeuf, beef cheeks braised in red wine, cooked for 3 hours. Four servings, ready in 3 hours 20 minutes.',
    kw: ['joue de boeuf', 'braised beef cheeks in red wine', 'french beef cheeks', 'slow cooked beef cheeks', 'beef cheek braise'],
    why: 'The first cold week of the year is the time for beef cheeks: a cheap, hard-working muscle that turns meltingly soft when it is cooked low and slow. A cheek is mostly connective tissue, and the long braise melts it into a rich gelatine that thickens the sauce on its own.\n\nBrown the cheeks well, a few at a time, until they have a dark crust, because that colour flavours the whole pot. Then pour over red wine, stock and the vegetables, cover, and put the pot in a low oven. **Do not let the liquid boil**: it should barely tremble, around 150C in the oven. The meat is ready when a spoon pushes through it with no resistance.\n\nLift the cheeks out, strain the sauce and boil it down until it coats a spoon, then taste. A spoonful of redcurrant jelly or a little vinegar at the end balances the richness. Serve with mashed potato or buttery noodles. The dish is better made a day ahead, when the flavour has settled and the fat can be lifted off the surface.',
    ing: [
      '1.2 kg beef cheeks, trimmed',
      '1 tsp salt',
      '2 tbsp rapeseed oil',
      '2 carrots, chopped',
      '1 onion, chopped',
      '2 celery sticks, chopped',
      '3 garlic cloves',
      '2 tbsp tomato purée',
      '500 ml red wine',
      '400 ml beef stock',
      '6 g thyme sprigs',
      '2 bay leaves'
    ],
    st: [
      'Heat the oven to 150C. Season the cheeks with the salt. Brown them in the oil in a casserole in two batches, 4 minutes a side. Lift out.',
      'Cook the carrots, onion and celery in the same pot for 8 minutes. Add the garlic and tomato purée for 1 minute.',
      'Pour in the wine, boil for 3 minutes, then add the stock, thyme and bay leaves.',
      'Return the cheeks, cover and cook in the oven for 3 hours, until a spoon goes through the meat.',
      'Lift out the cheeks. Strain the sauce into a pan and boil for 12 minutes until it coats a spoon.',
      'Return the cheeks to the sauce and warm through for 3 minutes.'
    ],
    tips: [
      'Brown the cheeks well for a dark, flavourful sauce.',
      'Keep the oven low so the liquid barely moves.',
      'Make it a day ahead and lift the fat off the cold sauce.'
    ],
    pair: ['Mashed potatoes', 'Buttered noodles', 'Green beans', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [564, 65, 13, 28, 3, 4, 1190]
  },

  'paupiettes-de-veau': {
    d: 'Thin veal escalopes rolled around a pork and herb stuffing, tied, browned and braised for 60 minutes in white wine and stock.',
    meta: 'Paupiettes de veau, veal rolls with a herb stuffing braised in white wine, cooked for 1 hour. Four servings, ready in 1 hour 30 minutes.',
    kw: ['paupiettes de veau', 'stuffed veal rolls', 'veal rolls in white wine', 'french veal paupiettes', 'braised stuffed veal'],
    why: 'It is the bundle that makes the dish: a thin slice of veal rolled around a savoury stuffing and tied up like a small parcel, so each person gets a neat portion with a juicy centre. The cooking is simple, but the preparation takes patience.\n\nAsk the butcher for veal escalopes cut thin, and flatten them further with a rolling pin between two sheets of cling film, until they are about 3 mm thick. A stuffing of sausage meat, shallot, parsley and breadcrumbs keeps the rolls moist. **Roll the veal tightly and tie it with string** in two places, or secure it with cocktail sticks; a loose roll falls open in the pan and the stuffing escapes.\n\nBrown the rolls all over in butter and oil, then braise them with white wine and stock, covered, at a gentle simmer for an hour. The sauce reduces on the hob while they rest. Remove the string before serving, and spoon the sauce over. Mashed potato or buttered tagliatelle suits it well.',
    ing: [
      '4 veal escalopes, about 600 g, flattened thin',
      '200 g pork sausage meat',
      '1 shallot, finely chopped',
      '2 tbsp parsley, chopped',
      '30 g fresh breadcrumbs',
      '1 tsp salt',
      '1 tbsp butter',
      '1 tbsp rapeseed oil',
      '150 ml dry white wine',
      '300 ml chicken stock',
      '1 tbsp plain flour',
      '2 tbsp double cream'
    ],
    st: [
      'Mix the sausage meat, shallot, parsley, breadcrumbs and half the salt. Divide into four.',
      'Season the escalopes with the rest of the salt, put a portion of stuffing on each, roll up and tie with string.',
      'Heat the butter and oil in a casserole and brown the rolls for 8 minutes, turning. Lift out.',
      'Stir the flour into the pot, add the wine and boil for 2 minutes. Add the stock and return the rolls.',
      'Cover and simmer gently for 60 minutes, turning once, until tender.',
      'Lift out the rolls and remove the string. Boil the sauce for 5 minutes, stir in the cream and spoon over.'
    ],
    tips: [
      'Flatten the veal evenly so it rolls without tearing.',
      'Tie the rolls tightly so the stuffing stays inside.',
      'Simmer gently; a hard boil toughens the veal.'
    ],
    pair: ['Mashed potatoes', 'Buttered tagliatelle', 'Green beans'],
    store: 'Keeps for 3 days in the fridge. Reheat gently in the sauce.',
    nut: [442, 40, 12, 26, 1, 2, 1420]
  },

  'tournedos-rossini': {
    d: 'Thick fillet steak rounds seared in butter, set on fried bread and topped with foil-seared foie gras and a Madeira sauce, 15 minutes.',
    meta: 'Tournedos Rossini, fillet steak on fried bread with foie gras and Madeira sauce, cooked for 15 minutes. Two servings, ready in 35 minutes.',
    kw: ['tournedos rossini', 'fillet steak with foie gras', 'beef tournedos with madeira sauce', 'classic french steak dish', 'steak with foie gras and truffle'],
    why: 'A restaurant plate, and a dish for two on an occasion. Tournedos Rossini stacks three rich things on top of each other: a seared fillet steak, a slice of foie gras and a sauce made with Madeira, all set on a round of crisp fried bread so the juices do not spoil the plate.\n\nEverything depends on timing, because the steak and the foie gras both cook in a couple of minutes a side. Cut the bread into rounds the same size as the steaks and fry them in butter until crisp before you start. **Sear the foie gras last**, in a dry, very hot pan for 30 seconds a side, because it melts to nothing if left there longer. Dry both the steak and the liver well so they brown instead of steaming.\n\nThe sauce is built in the steak pan: shallot, Madeira, stock reduced by half, and a knob of butter whisked in at the end. Serve at once on hot plates, one tournedos per person, with the sauce around rather than over so the bread stays crisp. Season the steaks only just before they hit the pan.',
    ing: [
      '2 fillet steak rounds, about 150 g each',
      '1/2 tsp salt',
      '2 slices white bread, cut into rounds',
      '40 g butter',
      '1 tbsp rapeseed oil',
      '100 g foie gras, cut in 2 slices',
      '1 shallot, finely chopped',
      '80 ml Madeira',
      '150 ml beef stock',
      '1 tsp chopped parsley'
    ],
    st: [
      'Fry the bread rounds in half the butter for 2 minutes a side until golden. Keep warm on warm plates.',
      'Season the steaks with the salt. Heat the oil in a frying pan until very hot and sear the steaks for 3 minutes a side for medium-rare. Rest on a plate.',
      'Wipe out the pan, heat it until very hot and sear the foie gras for 30 seconds a side. Lift onto the steaks.',
      'Cook the shallot in the steak pan for 1 minute. Add the Madeira and boil for 2 minutes, then add the stock and reduce by half.',
      'Whisk in the remaining butter and the parsley. Set each steak on a bread round and spoon the sauce around.'
    ],
    tips: [
      'Dry the steaks and foie gras well so they sear.',
      'Cook the foie gras for 30 seconds a side only.',
      'Serve at once on hot plates.'
    ],
    pair: ['Green beans', 'Buttered spinach', 'Red wine', 'Pommes Anna'],
    store: 'Eat at once; this dish does not keep.',
    nut: [747, 41, 22, 55, 1, 5, 1430]
  },

  'foie-gras': {
    d: 'Slices of duck foie gras seared for a minute a side until crisp outside and soft within, served on toast with fig jam.',
    meta: 'Seared foie gras on toasted brioche with fig jam, cooked for 5 minutes. Two servings, ready in 15 minutes.',
    kw: ['foie gras', 'seared foie gras', 'pan seared foie gras with fig jam', 'foie gras on brioche', 'french foie gras starter'],
    why: 'The most common way this goes wrong is a pan that is not hot enough. Foie gras is mostly fat, and in a lukewarm pan it simply melts away into a puddle, leaving a small grey scrap. In a very hot, dry pan the surface sears in seconds and the inside stays soft.\n\nUse slices about 2 cm thick, cut cold from the block with a hot knife. Score them lightly in a crosshatch, season with salt and pepper and put them straight into the dry pan with no oil, because they release their own fat. **Sear for 45 seconds a side**, then lift them out onto toasted brioche before the middle liquefies. Pour off the fat and keep it; spooned over potatoes, it is a treat.\n\nA sweet, sharp partner is the other half of the dish. Fig jam is the classic, with a few drops of balsamic vinegar or a spoonful of sweet wine reduced in the pan after the slices come out. A pinch of flaky salt on top finishes it. Serve at once as a starter, in small portions, because it is very rich.',
    ing: [
      '140 g duck foie gras, cut in 2 slices',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '2 slices brioche, toasted',
      '2 tbsp fig jam',
      '1 tsp balsamic vinegar',
      '1 pinch flaky sea salt'
    ],
    st: [
      'Toast the brioche and spread with the fig jam. Put on two warm plates.',
      'Score the foie gras lightly in a crosshatch and season with the salt and pepper.',
      'Heat a frying pan until very hot with no oil. Sear the slices for 45 seconds a side until deep golden.',
      'Lift onto the brioche and pour off the fat from the pan. Add the vinegar to the pan for 10 seconds, then spoon over the foie gras.',
      'Finish with the flaky salt and serve at once.'
    ],
    tips: [
      'Use a very hot pan with no oil.',
      'Do not move the slices once they are down.',
      'Serve at once; the centre melts as it sits.'
    ],
    pair: ['Sauternes', 'Brioche', 'Fig jam', 'Green salad'],
    store: 'Eat at once. Keep the block wrapped in the fridge for no more than 2 days after opening.',
    nut: [434, 10, 22, 34, 1, 6, 980]
  },

  'tuiles-aux-amandes': {
    d: 'Thin, curved almond biscuits made from egg whites, sugar and flaked almonds and baked for 10 minutes until golden at the edges.',
    meta: 'Tuiles aux amandes, thin curved almond biscuits, baked for 10 minutes. Twenty biscuits, ready in 25 minutes.',
    kw: ['tuiles aux amandes', 'almond tuiles', 'french almond tile biscuits', 'thin curved almond biscuits', 'flaked almond tuile cookies'],
    why: 'Why do tuiles have to be shaped the moment they leave the oven? Because they are baked as thin, soft discs, and for about 30 seconds they are pliable; after that the sugar sets and they snap. A tuile is a wafer-thin biscuit that takes its curved shape from a rolling pin or the neck of a bottle.\n\nThe batter is simple: egg whites, sugar, flour, butter and flaked almonds. Spread it very thin on a lined tray, as thin as you can make it with the back of a spoon, since thick patches stay soft in the middle. **Bake only a few at a time**, three or four to a tray, so that you can shape them all before they set. Lift each with a palette knife, drape it over a rolling pin and let it cool.\n\nIf they harden before you can shape them, return the tray to the oven for 30 seconds. They should be golden at the edges and pale in the middle when they come out. Store them airtight, because they soften quickly in damp air. Serve with ice cream, mousse or coffee.',
    ing: [
      '2 egg whites',
      '60 g caster sugar',
      '30 g plain flour',
      '30 g butter, melted',
      '1/2 tsp vanilla extract',
      '60 g flaked almonds'
    ],
    st: [
      'Heat the oven to 180C and line two trays with baking paper.',
      'Whisk the egg whites and sugar together until foamy. Stir in the flour, melted butter and vanilla, then fold in the almonds.',
      'Put teaspoonfuls on the trays, 4 or 5 to a tray, and spread each into a very thin round.',
      'Bake one tray at a time for 10 minutes until golden at the edges.',
      'Lift each tuile with a palette knife straight away and drape over a rolling pin to cool and set.'
    ],
    tips: [
      'Spread the batter as thinly as you can.',
      'Bake only one tray at a time so you can shape them in time.',
      'Return stiff tuiles to the oven for 30 seconds to soften.'
    ],
    pair: ['Ice cream', 'Chocolate mousse', 'Coffee'],
    store: 'Keeps for 1 week in an airtight tin.',
    nut: [51, 1, 5, 3, 0, 3, 10]
  },

  'nougat-de-montelimar': {
    d: 'A soft white nougat of honey, sugar, whisked egg white, almonds and pistachios, cooked to hard ball stage and set overnight.',
    meta: 'Nougat de Montélimar with honey, almonds and pistachios, cooked for 25 minutes. Twenty-four pieces, ready in 45 minutes plus overnight setting.',
    kw: ['nougat de montelimar', 'french white nougat', 'honey and almond nougat', 'soft nougat with pistachios', 'homemade nougat'],
    why: 'What makes nougat soft rather than rock hard? The temperature of the sugar syrup, to the degree. Nougat is egg white whisked to stiff peaks, then beaten with a hot honey and sugar syrup, and the heat the syrup reaches decides how firm the finished sweet will be.\n\nThis is the part where a thermometer earns its keep. **Cook the honey to 125C and the sugar syrup to 145C**, then pour them in a thin stream onto the whisked whites while the mixer runs. Too cool and the nougat stays sticky; too hot and it sets like toffee. Work with a heatproof bowl and take care, because sugar syrup at this temperature burns badly.\n\nStir in warm toasted almonds and pistachios, and press the mixture into a tin lined with rice paper or baking paper. Weigh it down and leave it to set overnight. Cut it with an oiled knife into small bars. The result is chewy, fragrant with honey and studded with nuts. Wrap each piece in paper and keep it dry.',
    ing: [
      '300 g honey',
      '300 g caster sugar',
      '100 ml water',
      '2 egg whites',
      '150 g blanched almonds, toasted',
      '50 g pistachios',
      '1 tsp vanilla extract',
      '10 g rice paper, to line'
    ],
    st: [
      'Line a 20 cm square tin with rice paper. Warm the almonds and pistachios in a 150C oven for 10 minutes.',
      'Warm the honey in a heavy pan to 125C. In another pan, boil the sugar and water to 145C.',
      'Whisk the egg whites to stiff peaks. With the mixer running, pour in the honey in a thin stream, then the sugar syrup, whisking for 8 minutes until thick and glossy.',
      'Fold in the warm nuts and vanilla with an oiled spatula.',
      'Press into the tin, cover with rice paper and weigh down. Leave overnight to set.',
      'Cut into 24 pieces with an oiled knife.'
    ],
    tips: [
      'Use a thermometer; the temperature decides the texture.',
      'Pour the hot syrup in a thin stream with the mixer running.',
      'Oil the knife to cut cleanly.'
    ],
    pair: ['Coffee', 'Dessert wine', 'Fresh fruit'],
    store: 'Keeps for 3 weeks wrapped in paper in an airtight tin.',
    rest: [480, 'Setting overnight'],
    nut: [144, 2, 25, 4, 1, 23, 10]
  },

  'tarte-bourdaloue': {
    d: 'A pastry case filled with almond cream and poached pear halves, baked for 40 minutes and glazed with apricot jam.',
    meta: 'Tarte Bourdaloue, pears set in almond cream in a pastry case, baked for 40 minutes. Eight servings, ready in 1 hour 10 minutes.',
    kw: ['tarte bourdaloue', 'pear and almond cream tart', 'french pear frangipane tart', 'almond cream pear tart', 'pear tart with frangipane'],
    why: 'It looks like a pear tart and eats like an almond one, and it sits between a tarte aux poires and a frangipane. Poached pear halves are pressed into a soft almond cream, so the fruit stays juicy under a golden, nutty top, and the pastry underneath is crisp.\n\nThe almond cream is butter, sugar, ground almonds, eggs and a splash of rum or vanilla, beaten until smooth. Spread it into a blind-baked case, and it puffs around the pears as it bakes. **Drain the pears and pat them dry** before they go on top; wet fruit makes the filling sag in the middle. Tinned pear halves work well and save time, but poached fresh pears give a better flavour.\n\nSlice each pear half across without cutting through the top, press it gently to fan it, and lay it cut side down on the cream. Bake until the almond cream is golden and firm, and brush with warmed apricot jam while hot for a glossy finish. The tart is best warm, with a spoonful of cream.',
    ing: [
      '200 g plain flour',
      '100 g cold butter, cubed',
      '50 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '100 g butter, softened',
      '100 g caster sugar',
      '100 g ground almonds',
      '2 eggs',
      '1 tbsp dark rum',
      '4 poached pear halves, drained',
      '3 tbsp apricot jam'
    ],
    st: [
      'Rub the cold butter into the flour and icing sugar. Mix in the egg yolk and water, wrap and chill for 20 minutes.',
      'Heat the oven to 180C. Roll the pastry to fit a 23 cm tart tin, line with paper and beans and bake for 10 minutes. Remove the paper and beans.',
      'Beat the soft butter with the caster sugar until pale. Beat in the ground almonds, eggs and rum.',
      'Spread the almond cream in the case. Pat the pears dry, slice each across, fan slightly and lay on top.',
      'Bake for 40 minutes until the filling is golden and firm.',
      'Warm the jam with a spoonful of water and brush over the hot tart.'
    ],
    tips: [
      'Pat the pears dry so they do not make the filling soggy.',
      'Blind bake the case so it stays crisp.',
      'Glaze the tart while it is hot.'
    ],
    pair: ['Cream', 'Vanilla ice cream', 'Dessert wine'],
    store: 'Keeps for 2 days in the fridge. Warm at 160C for 10 minutes.',
    nut: [525, 8, 58, 29, 5, 32, 30]
  },

  'poire-belle-helene': {
    untimed: ['cooling'],
    d: 'Pears poached in vanilla syrup, served cold with vanilla ice cream and a warm dark chocolate sauce, ready in 35 minutes.',
    meta: 'Poire Belle Hélène, poached pears with ice cream and hot chocolate sauce, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['poire belle helene', 'poached pears with chocolate sauce', 'pears with ice cream and chocolate', 'french poached pear dessert', 'pear belle helene recipe'],
    why: 'The name has an unlikely meaning for a dessert this plain: it is a poached pear, ice cream and chocolate sauce, and the three parts are meant to be hot and cold at once. That contrast is why it works on a plate, and why it has stayed on menus.\n\nChoose firm pears that are ripe but not soft, such as Conference, and peel them with the stalk left on. Poach them in a sugar syrup scented with a vanilla pod and a strip of lemon zest, at a bare simmer for about 25 minutes. **Test with the point of a knife**: it should slide in with only slight resistance. Leave the pears to cool in the syrup, because they carry on cooking and absorb the flavour.\n\nThe chocolate sauce is dark chocolate melted into warm cream and a little of the poaching syrup, so it pours smoothly. Serve one pear per person, upright beside a scoop of ice cream, with the sauce poured over at the table. Poach the pears a day ahead and the dessert is ready in minutes.',
    ing: [
      '4 firm pears, peeled, stalks left on',
      '1 litre water',
      '200 g caster sugar',
      '2 g vanilla pod, split',
      '1 strip lemon zest',
      '150 g dark chocolate',
      '100 ml double cream',
      '200 g vanilla ice cream'
    ],
    st: [
      'Put the water, sugar, vanilla pod and lemon zest in a pan that holds the pears snugly and bring to a simmer.',
      'Lower in the pears and poach at a bare simmer for 25 minutes, turning once, until a knife slides in easily. Leave to cool in the syrup.',
      'Heat the cream until steaming, take off the heat and add the chocolate. Stir until smooth, thinning with 2 tbsp of the poaching syrup.',
      'Stand a pear in each dish with a scoop of ice cream and pour the warm sauce over.'
    ],
    tips: [
      'Use firm pears that are ripe but not soft.',
      'Cool the pears in their syrup for more flavour.',
      'Serve the sauce warm against the cold ice cream.'
    ],
    pair: ['Crisp biscuits', 'Dessert wine', 'Coffee'],
    store: 'The pears keep for 3 days in the syrup in the fridge. Make the sauce fresh.',
    nut: [728, 5, 114, 28, 10, 98, 50]
  },

  'soupe-aux-choux': {
    d: 'A thick winter soup of cabbage, potato, carrot and smoked bacon, simmered for 60 minutes in stock.',
    meta: 'Soupe aux choux, a hearty cabbage and bacon soup, cooked for 1 hour. Six servings, ready in 1 hour 15 minutes.',
    kw: ['soupe aux choux', 'french cabbage soup', 'cabbage and bacon soup', 'hearty winter cabbage soup', 'cabbage potato and bacon soup'],
    why: 'It looks like a pot of green leaves and behaves like a stew, and it is the proof that cabbage deserves better than it usually gets. A French country cook would make this in a big pot to last several days, and it tastes better on the second.\n\nStart with the bacon, cooked slowly in the pot until it gives up its fat, and then soften the onion and carrot in that fat. The smoked flavour runs through everything. **Add the cabbage in two stages**: half at the start so it melts into the broth, and half 20 minutes before the end so some leaves keep their shape and a little bite. Cut it into wide ribbons and discard the hard core.\n\nPotatoes give the soup body, and cooked until soft, a few can be crushed against the side of the pot to thicken it. Taste for salt only at the end, because the bacon and stock are already salty. Serve in deep bowls with a piece of bread and a spoonful of cream if you like.',
    ing: [
      '150 g smoked bacon lardons',
      '1 onion, chopped',
      '2 carrots, sliced',
      '2 garlic cloves, crushed',
      '600 g green cabbage, shredded',
      '400 g potatoes, diced',
      '1.5 litres chicken stock',
      '2 bay leaves',
      '1/4 tsp black pepper',
      '1 tbsp chopped parsley'
    ],
    st: [
      'Cook the bacon in a large pot for 6 minutes until the fat runs. Add the onion and carrots and cook for 8 minutes. Add the garlic for 1 minute.',
      'Add half the cabbage, the potatoes, stock, bay leaves and pepper. Bring to a simmer and cook for 35 minutes.',
      'Add the rest of the cabbage and cook for 20 minutes more until tender.',
      'Crush a few potatoes against the side of the pot to thicken, taste for salt and stir in the parsley.'
    ],
    tips: [
      'Add the cabbage in two stages for body and bite.',
      'Taste for salt only at the end; bacon is salty.',
      'Crush a few potatoes to thicken the soup.'
    ],
    pair: ['Crusty bread', 'Grated Gruyère', 'Red wine'],
    store: 'Keeps for 4 days in the fridge or 3 months in the freezer.',
    nut: [168, 10, 23, 4, 5, 6, 1240]
  },

  'salade-de-gesiers': {
    d: 'Warm salad of crisp duck gizzards and bacon on frisée, with a hot shallot and vinegar dressing and a poached egg, ready in 40 minutes.',
    meta: 'Salade de gésiers, warm duck gizzard salad with bacon and a sharp dressing, cooked for 20 minutes. Four servings, ready in 40 minutes.',
    kw: ['salade de gesiers', 'duck gizzard salad', 'warm gizzard salad with bacon', 'french warm salad with poached egg', 'frisee salad with gizzards'],
    why: 'Eat it warm, and dress it hot. That is the rule of this salad: crisp bacon and tender duck gizzards are tipped onto bitter leaves along with a sizzling dressing, so the leaves wilt just slightly and the flavours join in the bowl.\n\nGizzards are the duck\'s muscular stomach, and they are cheap and full of flavour, but they must be cooked gently to turn tender. Most shops sell them already confited in jars or tins, which makes this a dish for a weeknight. Slice them and fry them in a hot pan for 5 minutes until the edges crisp. **Do not salt them in advance**, because confit is already seasoned and the bacon adds more.\n\nThe dressing is made in the pan: shallot softened in the fat, red wine vinegar added until it sizzles, then mustard whisked in. Pour it over the leaves at once. Top each plate with a poached egg, whose yolk melts into the dressing, and serve with bread. Frisée has the right bite; a mix of bitter leaves works if you cannot find it.',
    ing: [
      '300 g confit duck gizzards, drained and sliced',
      '150 g smoked bacon lardons',
      '1 shallot, finely chopped',
      '2 tbsp red wine vinegar',
      '1 tsp Dijon mustard',
      '200 g frisée or curly endive',
      '4 eggs',
      '1 tbsp white vinegar, for poaching',
      '1/4 tsp black pepper'
    ],
    st: [
      'Cook the bacon in a frying pan for 6 minutes until crisp. Lift out, leaving the fat.',
      'Fry the gizzards in the bacon fat for 5 minutes until the edges are crisp. Lift out with the bacon.',
      'Add the shallot to the pan for 1 minute, then the red wine vinegar and mustard. Boil for 30 seconds.',
      'Poach the eggs in barely simmering water with the white vinegar for 3 minutes.',
      'Toss the leaves with the gizzards, bacon and hot dressing in a bowl. Divide between plates, top with an egg and add the pepper.'
    ],
    tips: [
      'Use confited gizzards and skip any extra salt.',
      'Pour the dressing over hot so the leaves just wilt.',
      'Poach the eggs just before serving.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Dry white wine'],
    store: 'Eat at once. The cooked gizzards keep for 2 days in the fridge.',
    nut: [318, 35, 4, 18, 2, 1, 1120]
  }
};
