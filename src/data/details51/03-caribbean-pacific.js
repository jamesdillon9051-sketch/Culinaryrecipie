'use strict';

/**
 * Volume fifty-one — the Americas, the Caribbean and the Pacific, third part.
 *
 * Twenty-five dishes: Barbadian macaroni pie and fish cakes; Guyanese
 * pepperpot and metemgee; conch fritters, coconut rice and rum punch; the
 * Pacific table from Samoa, Tonga, Fiji and the Cook Islands; Hawaiian lau
 * lau and macaroni salad; and L&P cake, barbecued prawns, Newfoundland fish
 * cakes and Cajun boudin. Waits of an hour or more are declared as rest.
 * Nutrition is estimated by npm run calc.
 */

module.exports = {
  'bajan-macaroni-pie': {
    d: 'A firm, sliceable baked macaroni and cheese from Barbados, bound with eggs and evaporated milk and sharpened with mustard and ketchup.',
    meta: 'Bajan macaroni pie: a firm, sliceable baked macaroni and cheese with mature cheddar, eggs, mustard and ketchup. Six servings, cooked for 40 minutes.',
    kw: ['bajan macaroni pie', 'barbadian macaroni pie', 'macaroni pie recipe', 'baked macaroni and cheese barbados', 'caribbean macaroni pie'],
    why: 'Why does a Bajan macaroni pie hold its shape when most macaroni cheese slumps? Eggs. The cheese sauce is not a roux but a custard of eggs and evaporated milk, so it sets as it bakes and cuts into neat squares, the way it is served beside fried fish and salad.\n\nThe flavour comes from three things that sound odd together: mature cheddar for depth, yellow mustard for a gentle tang and ketchup for a touch of sweetness and colour. Grated onion melts into the custard and is never seen. Stop the macaroni when it still has a firm bite, because it carries on cooking in the oven.\n\nStir the eggs and milk into the hot pasta only after it has been drained and has stopped steaming, or the eggs will scramble. **Bake until the top is deep gold** and the centre barely moves when the dish is shaken. Let it stand before cutting; the pie firms up as it cools.',
    ing: [
      '300 g macaroni',
      '40 g butter',
      '300 g mature cheddar, grated',
      '400 ml evaporated milk',
      '2 eggs',
      '2 tbsp ketchup',
      '1 tbsp yellow mustard',
      '80 g onion, grated',
      '1/2 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Heat the oven to 180°C. Boil the macaroni in salted water for 10 minutes until just tender, then drain well.',
      'Return the pasta to the pot off the heat and stir in the butter until it melts. Let it stand for 2 minutes.',
      'Beat the eggs with the evaporated milk, ketchup, mustard, onion, salt and pepper. Stir into the pasta with two thirds of the cheese.',
      'Spoon into a greased 23 cm baking dish and scatter with the remaining cheese. Bake for 30 minutes until golden and set. Stand for 10 minutes before cutting.'
    ],
    tips: [
      'Undercook the macaroni slightly, because it softens further in the oven.',
      'If the top browns before the centre sets, cover with foil for the last 10 minutes.',
      'Grate the cheese yourself; packet cheese is coated and melts less smoothly.'
    ],
    pair: ['Fried fish', 'Green salad', 'Coleslaw', 'Baked chicken'],
    store: 'Keeps in the fridge for 4 days. Reheat slices in the oven or microwave.',
    nut: [566, 26, 48, 30, 2, 10, 690]
  },

  'bajan-fish-cakes': {
    d: 'Crisp little fritters of flaked white fish in a thyme and spring onion batter, spiced with a little scotch bonnet and fried until golden.',
    meta: 'Bajan fish cakes: crisp fritters of flaked white fish in a thyme and spring onion batter with a little scotch bonnet. Six servings, cooked in 15 minutes.',
    kw: ['bajan fish cakes', 'barbadian fish cakes', 'caribbean fish cakes', 'fish cake fritters with thyme', 'bajan fish cakes recipe'],
    why: 'Fish cakes in Barbados are not the breaded patties of a British chip shop. They are fritters: flaked fish folded into a thick, seasoned batter and dropped into hot oil by the spoonful, which puffs them into rough, crisp-edged rounds.\n\nThe seasoning does the work. Fresh thyme, spring onions and a very small amount of scotch bonnet go in with the fish, along with garlic, so every bite is savoury and a little hot. Seed the chilli if you want warmth without the burn.\n\nPoach the fish briefly and flake it while it is still warm. The batter should be thick enough to hold on the spoon and fall in a clump, not run. **Fry at 175°C** and turn them once; if the oil is too cool they absorb it, and if it is too hot they brown outside before the middle cooks. Serve them hot, with a wedge of lime and a spoonful of pepper sauce for anyone who wants more heat.',
    ing: [
      '250 g cod fillet',
      '200 g plain flour',
      '1 tsp baking powder',
      '1 egg',
      '150 ml water',
      '4 spring onions, finely sliced',
      '2 garlic cloves, crushed',
      '1 tbsp fresh thyme leaves',
      '1/4 scotch bonnet chilli, seeded and finely chopped',
      '1/2 tsp salt',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Poach the cod in simmering water for 5 minutes until it flakes. Drain, cool for a few minutes and flake it finely.',
      'Mix the flour, baking powder and salt. Beat the egg with the water and stir in to a thick batter.',
      'Fold in the fish, spring onions, garlic, thyme and scotch bonnet.',
      'Heat the oil to 175°C. Drop in tablespoons of batter and fry for 3 minutes on each side until deep golden. Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Keep the batter thick so it falls from the spoon in a clump.',
      'Fry a test spoonful first to check the salt and heat.',
      'Wear gloves when chopping scotch bonnet and wash the board afterwards.'
    ],
    pair: ['Hot pepper sauce', 'Lime wedges', 'Tartare sauce', 'Green salad'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and crisps up again in a hot oven.',
    nut: [372, 12, 27, 24, 1, 0, 310]
  },

  'guyanese-pepperpot': {
    d: 'A dark, glossy stew of beef and pork simmered for three hours in cassareep with cinnamon, cloves and scotch bonnet.',
    meta: 'Guyanese pepperpot: beef and pork simmered slowly in cassareep with cinnamon, cloves and scotch bonnet until dark and tender. Six servings, cooked for 180 minutes.',
    kw: ['guyanese pepperpot', 'guyana pepperpot', 'pepperpot recipe', 'cassareep beef stew', 'pepperpot with cassareep'],
    why: 'Beef, pork, cassareep and patience: that is the whole list that matters. Cassareep is a thick, bittersweet syrup boiled down from cassava juice, and it gives pepperpot its near-black colour and its savoury, slightly caramel taste. Nothing else in a kitchen is quite like it.\n\nThe stew is spiced rather than hot. Cinnamon, cloves, thyme and brown sugar sit alongside a whole scotch bonnet that is left unbroken, which gives fruity heat without burning. Cassareep also preserves, so the pot has long been reheated daily and eaten for days afterwards.\n\n**Simmer for the full 3 hours** with the lid slightly ajar. The meat should pull apart without effort and the sauce should coat a spoon. Each reheating deepens the flavour, so a pot made today eats best tomorrow, with bread to mop it up. Keep the pot away from damp spoons and it keeps well, and the dish is traditionally served at Christmas with plaited bread.',
    ing: [
      '800 g beef shin, cut into 4 cm cubes',
      '400 g pork shoulder, cut into 4 cm cubes',
      '120 ml cassareep',
      '1 litre water',
      '1 onion, chopped',
      '4 garlic cloves, crushed',
      '3 g cinnamon stick',
      '1 g cloves',
      '4 sprigs fresh thyme',
      '1 scotch bonnet chilli, whole',
      '2 tbsp soft brown sugar',
      '1 tsp salt'
    ],
    st: [
      'Put the beef, pork, onion, garlic, cinnamon, cloves, thyme and scotch bonnet in a heavy pot. Add the water, cassareep, sugar and salt.',
      'Bring to a boil, skim off the foam, then reduce to a bare simmer. Partly cover and cook for 3 hours, stirring now and then.',
      'Remove the scotch bonnet, cinnamon and thyme stalks. If the sauce is thin, simmer uncovered for the last 15 minutes. Taste and add salt if needed.'
    ],
    tips: [
      'Do not let the scotch bonnet burst, or the stew becomes very hot.',
      'Add a splash of water if the sauce reduces too far.',
      'Cool completely and chill before reheating; the flavour improves overnight.'
    ],
    pair: ['Plait bread', 'Boiled rice', 'Roti', 'Steamed greens'],
    store: 'Keeps in the fridge for 5 days if brought to a boil each time it is reheated. Freezes for up to 3 months.',
    nut: [463, 39, 16, 27, 1, 13, 1020]
  },

  'metemgee': {
    d: 'A Guyanese stew of root vegetables, green plantain and spinner dumplings simmered in coconut milk with thyme and scotch bonnet.',
    meta: 'Metemgee: a Guyanese stew of cassava, sweet potato, taro, green plantain and dumplings in coconut milk with thyme. Six servings, cooked for 60 minutes.',
    kw: ['metemgee', 'guyanese metemgee', 'metemgee recipe', 'guyana root vegetable stew', 'coconut milk provision stew'],
    why: 'Add the vegetables in order of hardness, because that is the whole technique. Metemgee is a pot of provisions, the Guyanese word for starchy roots and plantain, cooked in coconut milk, and the pieces are different sizes and densities. Put them in together and some turn to mush while others stay chalky.\n\nStart with the cassava and taro, which need the longest, then the sweet potato and plantain, then the spinners. Spinners are small dumplings of flour and water rolled between the palms; they thicken the broth as they cook.\n\nThyme, spring onions, garlic and one whole scotch bonnet flavour the coconut milk. **Do not stir hard after the spinners go in**, or they break up. The finished pot should be thick and creamy, with every root soft but still in its own shape. Salt the broth at the end, once the roots have soaked up some of the flavour, because it reduces as it cooks.',
    ing: [
      '300 g cassava, peeled and cut into chunks',
      '300 g taro, peeled and cut into chunks',
      '300 g sweet potato, peeled and cut into chunks',
      '400 g green plantain, peeled and sliced',
      '400 ml coconut milk',
      '600 ml water',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '4 sprigs fresh thyme',
      '2 spring onions, sliced',
      '1 scotch bonnet chilli, whole',
      '1 tsp salt',
      '# Spinners',
      '150 g plain flour',
      '80 ml water'
    ],
    st: [
      'Put the cassava, taro, onion, garlic, thyme, scotch bonnet, coconut milk, 600 ml water and salt in a large pot. Bring to a boil and simmer for 20 minutes.',
      'Add the sweet potato and plantain and simmer for 15 minutes.',
      'Mix the flour with 80 ml water to a firm dough. Roll small pieces between your palms into thin spinners.',
      'Drop in the spinners and spring onions and simmer for 15 minutes without stirring hard until the broth is thick. Remove the thyme stalks and scotch bonnet before serving.'
    ],
    tips: [
      'Cut the roots to a similar size so they cook at the same pace.',
      'Add boiling water, not cold, if the pot needs more liquid.',
      'Leave the chilli whole for flavour without fierce heat.'
    ],
    pair: ['Fried fish', 'Salted fish', 'Pepper sauce', 'Steamed greens'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water, as the roots absorb the broth.',
    nut: [484, 7, 87, 12, 7, 16, 450]
  },

  'conch-fritters': {
    d: 'Crisp fritters of minced conch, peppers and onion in a seasoned batter, deep fried and served with a hot, tangy dipping sauce.',
    meta: 'Conch fritters: crisp deep fried fritters of minced conch, peppers and onion in a seasoned batter, with a tangy dip. Six servings, cooked in 15 minutes.',
    kw: ['conch fritters', 'bahamian conch fritters', 'conch fritters recipe', 'caribbean conch fritters', 'conch fritters with dipping sauce'],
    why: 'Most home versions come out rubbery or greasy, and the fix is to mince the conch as finely as you can bear. Conch is a tough, sweet shellfish, and large pieces stay chewy no matter how long they cook. Fine mince disappears into the batter and leaves only flavour.\n\nThe batter is thick, closer to a drop scone than a coating. Flour, an egg, milk, a little baking powder, finely diced pepper, onion and celery bind everything, with hot sauce and lime for lift. If you cannot buy conch, chopped raw prawns work with the same method.\n\nDrop the batter by the tablespoon into oil at 175°C. **Keep the oil there**, because a drop in temperature turns fritters oily and a rise burns the outside. They are done when deep golden and a skewer comes out clean, which takes about 3 minutes a side. Serve them hot from the oil with the dip alongside, and give each batch a minute on paper to shed the excess fat.',
    ing: [
      '250 g conch meat, very finely minced, or raw prawns',
      '150 g plain flour',
      '1 tsp baking powder',
      '1 egg',
      '100 ml milk',
      '1 small onion, about 80 g, finely diced',
      '1 celery stick, finely diced',
      '1/2 green pepper, about 70 g, finely diced',
      '1 tsp hot pepper sauce',
      '1 tbsp lime juice',
      '1/2 tsp salt',
      '150 ml vegetable oil, for frying',
      '# Dipping sauce',
      '4 tbsp mayonnaise',
      '1 tbsp ketchup',
      '1 tsp hot pepper sauce',
      '1 tsp lime juice'
    ],
    st: [
      'Mix the flour, baking powder and salt. Beat the egg with the milk and stir in to a thick batter.',
      'Fold in the conch, onion, celery, green pepper, hot sauce and lime juice. Rest for 5 minutes.',
      'Stir the mayonnaise, ketchup, hot sauce and lime juice together for the dip.',
      'Heat the oil to 175°C. Drop in tablespoons of batter and fry in batches for 3 minutes on each side until deep golden. Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Mince the conch finely, or it stays chewy.',
      'Fry one fritter first to test the seasoning and the oil.',
      'Keep cooked fritters in a low oven while you finish the rest.'
    ],
    pair: ['Lime wedges', 'Cold lager', 'Coleslaw', 'Sweet chilli sauce'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and crisps up in a hot oven.',
    nut: [436, 13, 24, 32, 1, 3, 440]
  },

  'caribbean-coconut-rice': {
    d: 'Long-grain rice cooked in coconut milk with thyme, garlic and spring onions until fragrant, creamy and fluffy.',
    meta: 'Caribbean coconut rice: long-grain rice cooked in coconut milk with thyme, garlic and spring onions until fragrant and fluffy. Four servings, cooked in 30 minutes.',
    kw: ['caribbean coconut rice', 'coconut rice recipe', 'coconut rice with thyme', 'rice cooked in coconut milk', 'caribbean rice side dish'],
    why: 'Why does coconut rice so often turn out gluey or bland? Usually the liquid is wrong. Coconut milk is thick, so rice cooked in it alone is heavy and sticky; thinning it with water gives creamy grains that still separate.\n\nThe flavour here is simple and savoury rather than sweet. Garlic, spring onions and fresh thyme go in with the rice, along with plenty of salt, which coconut needs more of than water does. The thyme sprigs are removed at the end.\n\nWash the rice until the water runs nearly clear, because loose surface starch is what makes it clump. **Do not lift the lid** once it is simmering; the steam does the cooking. Resting off the heat for 10 minutes lets the grains finish and dry out, and a fork fluffs them without breaking them. Season the finished rice with a little extra salt if it tastes flat, since coconut milk mutes it more than you expect.',
    ing: [
      '300 g long-grain rice',
      '400 ml coconut milk',
      '200 ml water',
      '2 spring onions, sliced',
      '2 garlic cloves, crushed',
      '3 sprigs fresh thyme',
      '1 tsp salt',
      '1 tbsp vegetable oil'
    ],
    st: [
      'Wash the rice in cold water until it runs nearly clear. Drain well.',
      'Heat the oil in a heavy pan and cook the garlic and spring onions for 1 minute. Add the rice and stir for 1 minute.',
      'Pour in the coconut milk and water, add the thyme and salt, and bring to a boil. Cover tightly, turn the heat to its lowest and cook for 20 minutes.',
      'Leave covered off the heat for 10 minutes. Remove the thyme stalks and fluff with a fork.'
    ],
    tips: [
      'Use a pan with a tight lid; steam escaping makes the rice dry.',
      'If the rice is still firm at the end, add 3 tablespoons of hot water and cover for 5 minutes.',
      'Season well, because coconut mutes salt.'
    ],
    pair: ['Jerk chicken', 'Curry goat', 'Fried fish', 'Stewed beans'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [477, 8, 64, 21, 1, 2, 610]
  },

  'caribbean-rum-punch': {
    d: 'A rum punch built on the old Caribbean rhyme of one part sour, two sweet, three strong and four weak, served over ice with nutmeg.',
    meta: 'Caribbean rum punch: dark rum, lime juice, sugar syrup and water in the old one sour, two sweet, three strong, four weak ratio. Six servings, no cooking.',
    kw: ['caribbean rum punch', 'rum punch recipe', 'one sour two sweet three strong four weak', 'planters punch style rum punch', 'rum punch with nutmeg'],
    why: 'One of sour, two of sweet, three of strong, four of weak. That is the rhyme, and it is the whole recipe. Every Caribbean rum punch is a version of it, from the fresh lime to the sugar syrup to the rum and the water or juice that stretches it into a long drink.\n\nUse a good dark rum, since there is nowhere for a poor one to hide. Fresh lime juice matters just as much; bottled juice is flat and bitter. Sugar syrup, which is simply sugar dissolved in an equal volume of water, mixes in cold without any grittiness.\n\nGive the jug at least 30 minutes in the fridge before serving, which lets the flavours join. Pour over plenty of ice and **finish with fresh grated nutmeg**, the traditional topping, which adds warm spice to the first sip. A dash of bitters is optional. Make a second jug in advance if guests are staying long, because the first one rarely lasts and ice dilutes what is left.',
    ing: [
      '60 ml lime juice',
      '120 ml sugar syrup',
      '180 ml dark rum',
      '240 ml cold water',
      '1/2 tsp freshly grated nutmeg',
      '300 g ice',
      '1 lime, sliced'
    ],
    st: [
      'Stir the lime juice, sugar syrup, rum and water together in a jug.',
      'Chill the jug in the fridge for at least 30 minutes.',
      'Fill 6 glasses with ice. Pour over the punch and grate nutmeg on top. Garnish with lime slices.'
    ],
    tips: [
      'Taste before serving and add more water if the punch is too strong.',
      'Use fresh lime juice, not bottled.',
      'Keep a second jug chilled so the ice does not dilute the first.'
    ],
    pair: ['Jerk chicken', 'Fish cakes', 'Plantain chips', 'Grilled prawns'],
    store: 'The mixed punch keeps in the fridge, without ice, for 2 days.',
    nut: [72, 0, 18, 0, 0, 17, 5]
  },

  'samoan-palusami': {
    d: 'Spinach or taro leaves and onion wrapped in foil with coconut cream and baked until the leaves are soft and the cream has thickened.',
    meta: 'Samoan palusami: spinach or taro leaves and onion wrapped in foil with coconut cream and baked until soft. Six servings, cooked for 60 minutes.',
    kw: ['samoan palusami', 'palusami recipe', 'taro leaves in coconut cream', 'palusami in foil', 'pacific coconut cream parcels'],
    why: 'Two ingredients, and one of them is cream. Palusami is leaves, onion and coconut cream, wrapped and cooked until the leaves lose their edge and the cream turns thick and faintly sweet. It is simple on paper and rich on the plate.\n\nTraditionally the leaves are young taro, and the parcel goes into an earth oven. This version uses spinach and a home oven and foil, which gives a similar tender result. Sliced onion in the middle adds sweetness that balances the greens, and a little salt is all else it needs.\n\nBuild each parcel with a double layer of foil and fold the edges tightly, because the cream leaks otherwise. **Bake for the full 60 minutes** at 180°C. The cream should be set and slightly golden in places, and the leaves almost melted into it. Open the parcels carefully, as the steam is hot. Serve it as a side to roast meat or fish, or with plain boiled root vegetables to soak up the cream.',
    ing: [
      '600 g spinach, or taro leaves',
      '400 ml coconut cream',
      '1 large onion, thinly sliced',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 180°C. Tear off 6 pieces of foil, each about 30 cm square, and double them.',
      'Divide the spinach between the foil pieces, making a nest in the centre of each. Scatter the onion over and sprinkle with salt.',
      'Spoon the coconut cream into the nests. Pull up the edges and fold tightly to seal each parcel.',
      'Put the parcels on a baking tray and bake for 60 minutes. Open carefully and serve hot.'
    ],
    tips: [
      'Seal the foil well so the cream cannot leak out.',
      'If you use real taro leaves, remove the thick stalks and cook the parcels a little longer.',
      'Stir the contents of each parcel before serving.'
    ],
    pair: ['Boiled taro', 'Steamed rice', 'Grilled fish', 'Roast pork'],
    store: 'Keeps in the fridge for 2 days. Reheat gently in a covered pan.',
    nut: [213, 5, 10, 17, 3, 4, 480]
  },

  'samoan-pani-popo': {
    d: 'Soft yeasted buns baked in a sweet coconut cream sauce until the cream has soaked in and the tops are glossy and golden.',
    meta: 'Samoan pani popo: soft yeasted buns baked in sweet coconut cream until the sauce has soaked in. Twelve buns, 60 minutes proving, cooked for 25 minutes.',
    kw: ['samoan pani popo', 'pani popo recipe', 'samoan coconut buns', 'coconut cream buns', 'pani popo with coconut sauce'],
    why: 'Pour the sauce over before the buns go in the oven, not after. Pani popo are baked sitting in a sweetened coconut cream, and the buns drink it up as they cook, which turns the bottoms soft and custardy and keeps the tops glossy.\n\nThe dough is an ordinary enriched dough, with flour, yeast, sugar, butter, milk and an egg, kneaded until smooth and left to double in size. It should feel soft and slightly tacky. Shaped into 12 balls, the buns are tightly packed in the dish so they rise upwards and into each other.\n\nThe sauce is just coconut cream and sugar, whisked until the sugar dissolves. **Bake until deep golden**, with the cream bubbling around the edges. Eat the buns warm, pulling them apart and spooning up the sauce left in the dish. Leave a gap between the dough and the rim of the dish, because the buns will puff up and swell as they absorb the sauce.',
    ing: [
      '400 g strong white flour',
      '7 g dried yeast',
      '50 g caster sugar',
      '1/2 tsp salt',
      '40 g butter, softened',
      '220 ml warm milk',
      '1 egg',
      '# Coconut sauce',
      '400 ml coconut cream',
      '80 g caster sugar'
    ],
    st: [
      'Mix the flour, yeast, 50 g sugar and salt. Add the butter, egg and warm milk and knead for 10 minutes into a soft, smooth dough.',
      'Cover and leave in a warm place for 60 minutes until doubled in size.',
      'Heat the oven to 180°C. Divide the dough into 12 pieces and roll each into a ball. Pack them into a greased 30 x 20 cm baking dish.',
      'Whisk the coconut cream with 80 g sugar until dissolved and pour over the buns. Bake for 25 minutes until deep golden. Serve warm.'
    ],
    tips: [
      'Warm the milk to blood heat only; hot milk kills the yeast.',
      'Pack the buns closely so they rise upwards.',
      'If the tops brown too quickly, cover loosely with foil for the last 10 minutes.'
    ],
    pair: ['Hot tea', 'Fresh pineapple', 'Papaya', 'Black coffee'],
    store: 'Best eaten warm on the day. Keeps for 2 days and reheats in a low oven.',
    nut: [288, 6, 39, 12, 1, 13, 120],
    rest: [60, 'Proving the dough']
  },

  'samoan-chop-suey': {
    d: 'A quick stir-fry of chicken, glass noodles, cabbage and carrot in a soy and ginger sauce, the way it is served at Samoan gatherings.',
    meta: 'Samoan chop suey: a quick stir-fry of chicken, glass noodles, cabbage and carrot in a soy and ginger sauce. Four servings, cooked in 20 minutes.',
    kw: ['samoan chop suey', 'samoan chop suey recipe', 'pacific chop suey with glass noodles', 'chicken and glass noodle stir fry', 'island style chop suey'],
    why: 'The smell hits first: ginger and garlic frying in hot oil, then soy sauce catching on the base of the pan. Samoan chop suey is a Pacific cousin of Chinese-style stir-fries, built around glass noodles that soak up the sauce rather than a thick, starchy gravy.\n\nChicken thighs stay juicy in the heat, and cabbage and carrot give crunch and sweetness. The noodles are soaked in hot water until just soft, then tossed in at the end so they absorb the flavoured liquid and turn glossy.\n\nCut everything small and have it ready before the pan is hot, because the cooking is fast. **Keep the heat high** until the noodles go in, then lower it. The finished dish should be moist but not soupy, with each strand coated in sauce. Add a splash of water if it sticks. Serve it straight from the wok, with rice on the side if you want to stretch it further.',
    ing: [
      '400 g boneless chicken thighs, sliced thinly',
      '100 g glass noodles',
      '300 g white cabbage, shredded',
      '2 carrots, about 200 g, cut into matchsticks',
      '1 onion, sliced',
      '3 garlic cloves, crushed',
      '1 tbsp grated fresh ginger',
      '4 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tbsp vegetable oil',
      '150 ml water'
    ],
    st: [
      'Soak the glass noodles in hot water for 8 minutes, then drain and cut into shorter lengths.',
      'Heat the oil in a wok over high heat. Stir-fry the chicken for 5 minutes until browned. Add the onion, garlic and ginger and stir-fry for 2 minutes.',
      'Add the carrots and cabbage and stir-fry for 3 minutes. Pour in the soy sauce, oyster sauce and water.',
      'Add the noodles, toss for 2 minutes until they absorb the sauce, and serve at once.'
    ],
    tips: [
      'Cut the chicken against the grain so it stays tender.',
      'Do not soak the noodles for longer than the packet says, or they turn mushy.',
      'Taste before serving; the soy may be enough salt.'
    ],
    pair: ['Boiled rice', 'Fried bananas', 'Taro', 'Hot chilli sauce'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan with a splash of water.',
    nut: [313, 26, 32, 9, 5, 7, 1120]
  },

  'samoan-panikeke': {
    d: 'Sweet banana fritters from Samoa, made from ripe bananas and flour, fried until golden and crisp at the edges.',
    meta: 'Samoan panikeke: sweet banana fritters made from ripe bananas and a simple batter, fried until golden. Six servings, cooked in 15 minutes.',
    kw: ['samoan panikeke', 'panikeke recipe', 'samoan banana fritters', 'pacific banana pancakes', 'panikeke with ripe bananas'],
    why: 'Panikeke are the sound of a Samoan morning: batter hissing as it hits hot oil. They sit between a pancake and a doughnut, with a crisp edge, a soft middle and enough banana to be sweet without a pile of sugar.\n\nThe bananas must be properly ripe, with brown-flecked skins, because that is where the sweetness and the soft texture come from. Mash them well, then mix with flour, sugar, baking powder and a little milk. The batter should be thick, like soft cake mix, and drop from a spoon.\n\nFry in about 1 cm of oil at medium heat. **Too hot and the outside burns** before the middle sets; too cool and they absorb oil. Turn once when the edges look dry and the underside is deep gold. Eat them warm, dusted with sugar or with a spoonful of coconut cream. They are best eaten within minutes of leaving the pan, while the edges are still crisp and the centres soft.',
    ing: [
      '3 ripe bananas, about 330 g peeled',
      '200 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '100 ml milk',
      '1/4 tsp salt',
      '150 ml vegetable oil, for frying'
    ],
    st: [
      'Mash the bananas in a large bowl until smooth.',
      'Stir in the flour, sugar, baking powder, salt and milk to a thick, dropping batter.',
      'Heat the oil in a deep frying pan over medium heat. Drop in heaped tablespoons of batter and fry for 3 minutes on each side until deep golden.',
      'Drain on kitchen paper and serve warm.'
    ],
    tips: [
      'Choose bananas with spotted skins; green ones make a bland fritter.',
      'Fry one fritter first and check that the middle is cooked.',
      'Keep the oil at medium heat and adjust between batches.'
    ],
    pair: ['Coconut cream', 'Icing sugar', 'Hot tea', 'Fresh pineapple'],
    store: 'Best eaten warm. Keeps for 1 day and reheats in a hot oven.',
    nut: [404, 4, 43, 24, 2, 12, 270]
  },

  'samoan-koko-alaisa': {
    d: 'A warming Samoan breakfast of rice simmered in water and coconut milk with cocoa until soft and thick, then sweetened.',
    meta: 'Samoan koko alaisa: a warming breakfast of rice simmered in coconut milk and cocoa until soft and thick. Four servings, cooked in 25 minutes.',
    kw: ['samoan koko alaisa', 'koko alaisa recipe', 'samoan cocoa rice', 'chocolate rice pudding with coconut milk', 'pacific cocoa rice porridge'],
    why: 'Most home versions come out too thick or too thin, and the fix is to treat it as a porridge, not a pudding. Koko alaisa is rice cooked in water until it breaks down, then enriched with coconut milk and cocoa. It should pour slowly from a spoon, like loose custard.\n\nCocoa gives it a dark, bitter backbone, and the sugar goes in at the end to balance it. In Samoa the cocoa is traditionally ground from local beans; unsweetened cocoa powder is the nearest equivalent. Stir it into a little cold water first so that it does not clump.\n\nStir often, especially after the coconut milk goes in, because the rice settles and catches on the base. **Simmer gently** and add a splash of hot water if it thickens too much. It continues to thicken as it cools, so serve it while it is still loose and steaming. Eat it from a bowl with a spoon, and top with sliced banana if you want a fresh contrast to the cocoa.',
    ing: [
      '150 g short-grain rice',
      '600 ml water',
      '400 ml coconut milk',
      '30 g unsweetened cocoa powder',
      '60 g caster sugar',
      '1/4 tsp salt'
    ],
    st: [
      'Put the rice and 600 ml water in a heavy pan. Bring to a boil, then simmer for 15 minutes, stirring often, until the rice is very soft.',
      'Whisk the cocoa with 4 tablespoons of cold water to a smooth paste.',
      'Stir the cocoa paste, coconut milk and salt into the rice and simmer for 8 minutes, stirring, until thick.',
      'Stir in the sugar until dissolved. Serve hot.'
    ],
    tips: [
      'Stir often, especially once the coconut milk goes in.',
      'Whisk the cocoa to a paste first so it does not form lumps.',
      'Loosen with hot water if the porridge sets too firmly.'
    ],
    pair: ['Sliced banana', 'Toasted coconut', 'Hot tea', 'Buttered bread'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water or coconut milk.',
    nut: [394, 6, 52, 18, 3, 17, 170]
  },

  'tongan-lu-pulu': {
    d: 'Tinned corned beef and onion in coconut cream, wrapped in spinach and foil and baked until the leaves are tender.',
    meta: 'Tongan lu pulu: corned beef and onion in coconut cream, wrapped in spinach and foil and baked until tender. Six servings, cooked for 90 minutes.',
    kw: ['tongan lu pulu', 'lu pulu recipe', 'corned beef in coconut cream', 'lu pulu parcels', 'tongan corned beef parcels'],
    why: 'Lu pulu is a Tongan dish that often turns up at big family meals, and its appeal is the contrast between salty corned beef and the rich, sweet coconut cream that surrounds it. Each parcel is a little pot of both.\n\nThe corned beef is tinned, and its saltiness means no extra salt is needed. Onion softens in the cream, and the spinach leaves hold the parcel together and turn silky as they bake. In Tonga the wrapping would be taro leaves and the cooking an underground oven; the oven version works on the same principle.\n\nLayer the spinach in a wide bowl of foil so the filling cannot escape. **Wrap each parcel twice** in foil, folding the edges tightly. Bake long and gently, at 170°C, until the cream is thick and the leaves have almost dissolved. Open the parcels with care, because hot steam escapes. Serve it hot with plain boiled roots to balance the rich beef, and spoon any juices over the top.',
    ing: [
      '400 g tinned corned beef, roughly chopped',
      '500 g spinach',
      '2 onions, sliced',
      '400 ml coconut cream',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Heat the oven to 170°C. Cut 6 pieces of foil, each about 35 cm square, and double them.',
      'Line each piece with spinach leaves, leaving the ends overhanging. Divide the corned beef and onion between them and season with pepper.',
      'Pour the coconut cream into each parcel. Fold the spinach over the filling and wrap the foil tightly, twice if you can.',
      'Place the parcels on a baking tray and bake for 90 minutes. Open carefully and serve.'
    ],
    tips: [
      'Do not add salt; the corned beef is already salty.',
      'Seal the foil well so the cream stays in.',
      'Stir the contents before serving so the cream coats the beef.'
    ],
    pair: ['Boiled taro', 'Boiled cassava', 'Steamed rice', 'Sweet potato'],
    store: 'Keeps in the fridge for 2 days. Reheat gently, covered, in a low oven.',
    nut: [357, 22, 11, 25, 3, 5, 710]
  },

  'tongan-otai': {
    d: 'A cold Tongan drink of blended watermelon, pineapple and mango with coconut milk, served over ice.',
    meta: 'Tongan otai: a cold drink of blended watermelon, pineapple and mango with coconut milk, served over ice. Six servings, no cooking.',
    kw: ['tongan otai', 'otai drink', 'otai recipe', 'watermelon and coconut drink', 'tropical fruit coconut drink'],
    why: 'Otai is what a Tongan cook makes when the day is hot and the fruit is ripe. It sits between a smoothie and a juice, thin enough to drink and thick enough with fruit pulp to feel like a snack.\n\nWatermelon provides the body and sweetness, pineapple a sharp edge, and mango a rounder, perfumed note. Coconut milk softens everything and gives the drink a pale, creamy colour. Choose fruit that smells sweet at the stalk end, and taste it before you start: very ripe fruit needs little sugar.\n\nBlend in short bursts so the fruit stays slightly textured; a long blend turns it to foam. **Serve it very cold** over plenty of ice, since the flavour fades once it warms. Stir the jug before pouring, as the pulp settles to the bottom within minutes. Serve it in tall glasses with a spoon, so the pulp at the bottom can be eaten along with the drink.',
    ing: [
      '600 g watermelon flesh, seeded',
      '200 g fresh pineapple',
      '150 g mango flesh',
      '200 ml coconut milk',
      '100 ml cold water',
      '2 tbsp caster sugar',
      '300 g ice'
    ],
    st: [
      'Cut the watermelon, pineapple and mango into chunks.',
      'Blend the fruit with the coconut milk, water and sugar in short bursts until mostly smooth but still a little textured.',
      'Taste and add more sugar if the fruit is not sweet enough.',
      'Fill 6 glasses with ice and pour the otai over. Stir and serve at once.'
    ],
    tips: [
      'Chill the fruit beforehand so you need less ice.',
      'Stir the jug before every pour, because the pulp settles.',
      'Serve within an hour; the colour and flavour fade as it stands.'
    ],
    pair: ['Grilled fish', 'Barbecued chicken', 'Coconut buns', 'Fresh papaya'],
    store: 'Best drunk the day it is made. Keeps in the fridge for 1 day; stir well.',
    nut: [146, 2, 21, 6, 1, 18, 10]
  },

  'fijian-kokoda': {
    d: 'Raw white fish cured in lime juice, then mixed with coconut cream, tomato, cucumber and chilli and served very cold.',
    meta: 'Fijian kokoda: raw white fish cured in lime juice, then mixed with coconut cream, tomato, cucumber and chilli. Four servings, no cooking.',
    kw: ['fijian kokoda', 'kokoda recipe', 'fiji ceviche with coconut', 'raw fish in lime and coconut cream', 'kokoda fish salad'],
    why: 'Cure the fish in lime juice for 15 minutes, then stop. Kokoda is a ceviche-style dish from Fiji in which the acid turns the surface of the raw fish opaque and firm, and the longer it sits, the chalkier it gets. Fifteen minutes is enough; the middle stays tender.\n\nUse very fresh, firm white fish from a source you trust, such as mahi-mahi or snapper, cut into 2 cm cubes so the lime reaches every side. Then squeeze out the juice and fold in the coconut cream, which turns the sharp, citrusy base into something soft and rounded.\n\nTomato, cucumber, onion and a little chilli add crunch and heat. **Serve it straight away**, cold, in a bowl or in coconut shells. If the dish stands, the cucumber waters the sauce, so add the vegetables last, just before it reaches the table. Pile it into small bowls or hollowed coconut shells and eat it with a spoon alongside boiled cassava or taro.',
    ing: [
      '500 g skinless, boneless mahi-mahi or snapper fillet, cut into 2 cm cubes',
      '120 ml lime juice',
      '200 ml coconut cream',
      '2 tomatoes, about 250 g, seeded and diced',
      '1/2 cucumber, about 150 g, diced',
      '1/2 red onion, about 60 g, finely diced',
      '1 red chilli, seeded and finely chopped',
      '2 tbsp chopped fresh coriander',
      '1/2 tsp salt'
    ],
    st: [
      'Put the fish in a bowl with the lime juice and salt. Stir, cover and chill for 15 minutes until the fish turns opaque.',
      'Drain off most of the lime juice and discard it.',
      'Stir in the coconut cream, tomatoes, cucumber, onion, chilli and coriander.',
      'Taste and add salt or lime if needed. Serve immediately in small bowls.'
    ],
    tips: [
      'Use fish that was very fresh and kept cold from purchase to plate.',
      'Cut the cubes evenly so they cure at the same speed.',
      'Add the vegetables just before serving to keep them crisp.'
    ],
    pair: ['Boiled cassava', 'Steamed rice', 'Crisp lettuce', 'Cold lager'],
    store: 'Best eaten straight away. Do not store.',
    nut: [282, 28, 11, 14, 1, 6, 380]
  },

  'fijian-rourou': {
    d: 'Spinach or taro leaves stewed in coconut milk with onion, garlic and ginger until thick, creamy and tender.',
    meta: 'Fijian rourou: spinach or taro leaves stewed in coconut milk with onion, garlic and ginger until thick and creamy. Four servings, cooked for 40 minutes.',
    kw: ['fijian rourou', 'rourou recipe', 'taro leaves in coconut milk', 'fiji rourou stew', 'spinach in coconut milk fijian'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Rourou is made from the leaves of the taro plant, simmered in coconut milk until they lose their texture and merge with the sauce into a thick, dark green dish.\n\nThis version uses spinach in place of taro leaves, which are hard to find fresh outside the Pacific. Onion, garlic and a little ginger go in first for savoury depth, and a chopped chilli is optional. The coconut milk should barely bubble, because a hard boil splits it into oily droplets and leaves the greens tough.\n\n**Cook it uncovered for the last 15 minutes** so the liquid reduces and thickens. Stir only occasionally. The finished rourou is spoonable, glossy and mild, and it is meant to be eaten with something plain and starchy to soak up the sauce. Serve it with boiled cassava, taro or rice, and a little chilli sauce on the side for anyone who likes it hot.',
    ing: [
      '800 g spinach',
      '400 ml coconut milk',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1 tbsp grated fresh ginger',
      '1 green chilli, chopped',
      '1 tbsp vegetable oil',
      '1 tsp salt',
      '100 ml water'
    ],
    st: [
      'Heat the oil in a large pot and cook the onion for 5 minutes until soft. Add the garlic, ginger and chilli and cook for 1 minute.',
      'Add the spinach in handfuls, stirring until each batch wilts. Pour in the coconut milk, water and salt.',
      'Cover and simmer on low heat for 20 minutes.',
      'Uncover and simmer for 14 minutes more, stirring now and then, until thick. Taste and adjust the salt.'
    ],
    tips: [
      'Simmer, never boil hard, or the coconut milk splits.',
      'Squeeze any extra water out of the spinach if it was washed, or the dish turns thin.',
      'Add more water in small amounts if it reduces too quickly.'
    ],
    pair: ['Boiled cassava', 'Boiled taro', 'Steamed rice', 'Grilled fish'],
    store: 'Keeps in the fridge for 3 days. Reheat gently with a splash of water.',
    nut: [277, 8, 14, 21, 5, 4, 760]
  },

  'fijian-lovo': {
    d: 'A Fijian feast of marinated chicken and pork, cassava and sweet potato, wrapped in foil and cooked slowly in the oven.',
    meta: 'Fijian lovo: a feast of marinated chicken and pork with cassava and sweet potato, wrapped and cooked slowly in the oven. Eight servings, cooked for 120 minutes.',
    kw: ['fijian lovo', 'lovo recipe', 'fijian feast in the oven', 'lovo chicken and pork', 'fiji earth oven feast'],
    why: 'What do you do when you want a lovo and have no earth oven? You wrap everything tightly and cook it in a home oven, which keeps in the steam the way the underground pit does. A lovo is a Fijian feast cooked on hot stones, and the smoke and the long, slow heat are the point.\n\nHere, chicken thighs and pork shoulder are marinated in garlic, ginger and soy, then parcelled with cassava and sweet potato. Foil seals in the moisture, and the long cooking at 160°C breaks the pork down until it falls from the bone. It will not taste smoky; a pinch of smoked paprika in the marinade helps.\n\n**Seal every parcel twice** in foil and place them on a deep tray with the folds upward. Open them at the table so the steam and juices are shared. Tender meat and soft roots are the signs that the 2 hours are done.',
    ing: [
      '800 g bone-in chicken thighs',
      '800 g pork shoulder, cut into 6 cm pieces',
      '600 g cassava, peeled and cut into chunks',
      '600 g sweet potato, peeled and cut into chunks',
      '4 garlic cloves, crushed',
      '2 tbsp grated fresh ginger',
      '4 tbsp soy sauce',
      '2 tbsp vegetable oil',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '400 ml coconut milk'
    ],
    st: [
      'Mix the garlic, ginger, soy sauce, oil, paprika and salt. Rub it over the chicken and pork.',
      'Heat the oven to 160°C. Make 8 foil parcels, each with a piece of pork, a chicken thigh and a share of cassava and sweet potato. Pour over the coconut milk.',
      'Seal each parcel tightly in a double layer of foil.',
      'Put the parcels on a deep baking tray and cook for 2 hours until the meat is falling apart. Open at the table.'
    ],
    tips: [
      'Seal the foil twice so the juices cannot escape.',
      'Cut the cassava into chunks no bigger than the meat.',
      'Rest the parcels for 10 minutes before opening.'
    ],
    pair: ['Steamed rice', 'Palusami', 'Fresh pineapple', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Reheat covered in a 160°C oven until hot throughout.',
    nut: [718, 39, 46, 42, 4, 6, 940]
  },

  'fijian-curry': {
    d: 'A mild, golden chicken and potato curry in the Fijian style, with curry powder, ginger and tomato.',
    meta: 'Fijian curry: a mild, golden chicken and potato curry with curry powder, ginger, garlic and tomato. Four servings, cooked for 35 minutes.',
    kw: ['fijian curry', 'fijian chicken curry', 'fiji curry recipe', 'chicken and potato curry', 'fijian style curry with potatoes'],
    why: 'Cook the curry powder in the oil before anything else goes in. Fijian curry is usually mild and rounded, built on a ready-mixed curry powder rather than a long list of whole spices, and the powder needs a minute or two in hot oil to lose its raw, dusty taste.\n\nChicken thighs stay tender in the sauce, and potatoes soak up the liquid and thicken it a little as they cook. Onion, garlic, ginger and tomato supply the base. The dish is closer to a home-cooked stew than a restaurant curry, which makes it an easy weeknight meal.\n\n**Do not add the water until the paste smells toasted.** Then simmer gently and stir occasionally so the potatoes do not catch. The sauce should be thick enough to coat the back of a spoon. Serve it with plain rice or roti. Serve it with rice or flatbread, and a squeeze of lime or a spoon of chutney on the side lifts the whole plate.',
    ing: [
      '700 g chicken thighs, skinned and cut into pieces',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '3 garlic cloves, crushed',
      '1 tbsp grated fresh ginger',
      '2 tbsp mild curry powder',
      '2 tomatoes, about 250 g, chopped',
      '300 g potatoes, cut into 3 cm chunks',
      '300 ml water',
      '1 tsp salt'
    ],
    st: [
      'Heat the oil in a heavy pan and cook the onion for 5 minutes until soft. Add the garlic and ginger and cook for 1 minute.',
      'Stir in the curry powder and cook for 1 minute. Add the tomatoes and cook for 3 minutes.',
      'Add the chicken and brown for 5 minutes. Pour in the water, add the potatoes and salt, and bring to a boil.',
      'Simmer for 20 minutes until the chicken and potatoes are tender and the sauce is thick.'
    ],
    tips: [
      'Brown the chicken before adding the water for more flavour.',
      'If the sauce gets too thick, add a splash of hot water.',
      'Check the potatoes with a knife; they should break easily.'
    ],
    pair: ['Steamed rice', 'Roti', 'Cucumber salad', 'Mango chutney'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [367, 37, 21, 15, 4, 3, 760]
  },

  'cook-islands-ika-mata': {
    d: 'Raw tuna cured briefly in lime juice, then tossed with coconut cream, cucumber, carrot and spring onion.',
    meta: 'Cook Islands ika mata: raw tuna cured briefly in lime juice, then tossed with coconut cream, cucumber, carrot and spring onion. Four servings, no cooking.',
    kw: ['cook islands ika mata', 'ika mata recipe', 'raw tuna in coconut cream', 'cook islands raw fish salad', 'tuna and lime with coconut'],
    why: 'It looks like a fish salad and eats like a cold, creamy poke. Ika mata means "raw fish", and the Cook Islands version is made with tuna that is dressed in lime juice, then softened with coconut cream just before serving.\n\nThe tuna should be a deep red, firm and very fresh. Cut it into neat 2 cm cubes and leave it in the lime for 10 minutes only; any longer and it turns pale and dry. Drain the lime, then fold in the coconut cream with thin matchsticks of cucumber and carrot, which add a clean crunch.\n\nMix gently so the cubes keep their edges. **Serve it at once** in bowls over crushed ice, if you like, because the coconut cream thickens in the cold and the vegetables lose their snap if they sit. A pinch of salt and a few thin slices of chilli finish it. Keep the tuna cold at every stage, from the fishmonger to the bowl, because that is what keeps raw fish safe and sweet.',
    ing: [
      '500 g sushi-grade tuna, cut into 2 cm cubes',
      '80 ml lime juice',
      '150 ml coconut cream',
      '1/2 cucumber, about 150 g, cut into matchsticks',
      '1 carrot, about 100 g, cut into matchsticks',
      '3 spring onions, thinly sliced',
      '1 red chilli, thinly sliced',
      '1/2 tsp salt'
    ],
    st: [
      'Put the tuna in a bowl with the lime juice and salt. Stir and chill for 10 minutes.',
      'Drain the lime juice from the tuna and discard it.',
      'Gently fold in the coconut cream, cucumber, carrot and spring onions.',
      'Spoon into bowls, scatter with chilli and serve immediately.'
    ],
    tips: [
      'Buy tuna from a fishmonger and say it is for eating raw.',
      'Cut the vegetables into similar-sized sticks so they mix evenly.',
      'Chill the bowls beforehand for the best texture.'
    ],
    pair: ['Boiled taro', 'Steamed rice', 'Fresh papaya', 'Cold beer'],
    store: 'Best eaten straight away. Do not store.',
    nut: [259, 31, 9, 11, 1, 4, 370]
  },

  'hawaiian-lau-lau': {
    d: 'Pork shoulder and salmon wrapped in spinach and foil, then steamed for four hours until the meat is meltingly soft.',
    meta: 'Hawaiian lau lau: pork shoulder and salmon wrapped in spinach and foil, then steamed for four hours until meltingly soft. Six servings, cooked for 240 minutes.',
    kw: ['hawaiian lau lau', 'lau lau recipe', 'steamed pork and fish parcels', 'hawaiian pork and salmon parcels', 'lau lau wrapped in leaves'],
    why: 'Salt the pork the night before? No. Salt it at the time of wrapping, generously, because lau lau is seasoned only with salt and the leaves. Hawaiian lau lau is made by wrapping pork and a piece of fatty fish in leaves, traditionally taro and ti, and steaming for hours until the filling surrenders.\n\nThis kitchen version uses spinach for taro leaves and foil for the ti leaf wrapping, and salmon in place of butterfish. The pork shoulder is cut into 5 cm cubes; it should have some fat, which melts into the leaves as it cooks and keeps the filling juicy.\n\n**Wrap every parcel in a double layer of foil** and keep the water in the steamer topped up, since a dry pot scorches the base. After 4 hours the pork should be tender enough to shred with a spoon. Unwrap the parcels and eat the greens along with the meat, which is rich and savoury, and the juices that collect in the foil.',
    ing: [
      '600 g pork shoulder, cut into 5 cm cubes',
      '300 g salmon fillet, cut into 6 pieces',
      '800 g spinach',
      '2 tsp coarse sea salt',
      '1 litre boiling water, to top up the steamer'
    ],
    st: [
      'Sprinkle the pork and salmon with the sea salt. Divide the spinach into 6 piles on double-layered squares of foil.',
      'Put 100 g of pork and 1 piece of salmon on each pile. Fold the spinach over the filling, then wrap tightly in the foil, twice.',
      'Place the parcels in a steamer set over simmering water. Cover and steam for 4 hours, topping up the water from the kettle when it runs low.',
      'Rest the parcels for 10 minutes. Unwrap and serve hot with the juices.'
    ],
    tips: [
      'Top up the steamer with boiling water; cold water stops the cooking.',
      'Choose pork shoulder with fat running through it.',
      'Open a parcel after 3.5 hours to check the pork is nearly tender.'
    ],
    pair: ['Steamed rice', 'Poi or mashed taro', 'Macaroni salad', 'Sliced tomato'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months. Reheat in a steamer.',
    nut: [337, 32, 5, 21, 3, 1, 970]
  },

  'hawaiian-mac-salad': {
    d: 'A creamy Hawaiian plate lunch side of soft macaroni, mayonnaise, grated carrot and onion, with a little vinegar for tang.',
    meta: 'Hawaiian mac salad: soft macaroni in a creamy mayonnaise dressing with grated carrot, onion and a little vinegar. Eight servings, chilled for 2 hours.',
    kw: ['hawaiian mac salad', 'hawaiian macaroni salad', 'plate lunch mac salad', 'creamy macaroni salad with carrot', 'mac salad recipe'],
    why: 'This is the scoop that sits beside the rice on a Hawaiian plate lunch, next to the grilled meat, and it is meant to be soft. Overcook the macaroni on purpose: 12 minutes, past al dente, so the pasta soaks up the dressing as it chills and the salad turns creamy rather than dry.\n\nThe dressing is mostly mayonnaise, loosened with a little milk and sharpened with cider vinegar. Grated carrot and finely chopped onion give sweetness and a gentle crunch, and the lot is seasoned with salt and pepper. There is no celery, no mustard and no sugar.\n\nStir the dressing into the pasta while it is still slightly warm, which helps it absorb. **Chill for at least 2 hours**, then stir again, because the pasta drinks up the mayonnaise and the salad can look dry. Add a spoonful of milk to loosen it before serving. It is a side dish, so keep the flavours mild and let the grilled meats it sits beside take the spotlight.',
    ing: [
      '400 g macaroni',
      '200 g mayonnaise',
      '100 ml milk',
      '2 tbsp cider vinegar',
      '2 carrots, about 200 g, grated',
      '1/2 onion, about 60 g, finely chopped',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Boil the macaroni in salted water for 12 minutes until very soft. Drain and rinse briefly under cold water, then leave to drain for 5 minutes.',
      'Stir the mayonnaise, milk, vinegar, salt and pepper together.',
      'Fold the dressing into the macaroni with the carrots and onion until evenly coated.',
      'Cover and chill for 2 hours. Stir in a splash of milk to loosen before serving.'
    ],
    tips: [
      'Cook the pasta longer than the packet says.',
      'Grate the carrot finely so it blends into the salad.',
      'Taste after chilling and add salt if the flavour has dulled.'
    ],
    pair: ['Steamed rice', 'Grilled chicken', 'Kalua pork', 'Teriyaki beef'],
    store: 'Keeps in the fridge for 3 days. Stir in a splash of milk before serving.',
    nut: [376, 7, 42, 20, 2, 4, 470],
    rest: [120, 'Chilling']
  },

  'l-p-cake': {
    d: 'A light New Zealand cake made with lemon soft drink in the batter, finished with a sharp lemon glaze.',
    meta: 'L&P cake: a light New Zealand cake made with lemon soft drink in the batter and finished with a sharp lemon glaze. Ten servings, cooked for 40 minutes.',
    kw: ['l&p cake', 'lemon and paeroa cake', 'new zealand soft drink cake', 'lemon soft drink cake', 'l&p cake recipe'],
    why: 'What does a fizzy drink do in a cake? It lightens it. Carbonation adds a few extra bubbles to the batter, and the sweetness and lemon flavour of the drink stand in for part of the sugar and lemon juice. L&P is a lemon soft drink from New Zealand; any clear lemonade with a strong lemon taste will do.\n\nThe cake is a plain butter sponge with self-raising flour, eggs and lemon zest. Cream the butter and sugar for a full 4 minutes, because that incorporates the air that makes the crumb tender. Add the eggs one at a time, then the flour and the drink.\n\n**Fold in the soft drink last** and bake at once, since the fizz fades within minutes. The cake is ready when it springs back and a skewer comes out clean. Cool it fully before icing with a simple lemon glaze, which sets into a thin, sharp shell.',
    ing: [
      '250 g self-raising flour',
      '200 g caster sugar',
      '150 g butter, softened',
      '2 eggs',
      '200 ml lemon soft drink',
      '1 lemon, zested',
      '# Lemon glaze',
      '150 g icing sugar',
      '2 tbsp lemon juice'
    ],
    st: [
      'Heat the oven to 170°C. Grease and line a 20 cm round cake tin.',
      'Beat the butter, sugar and lemon zest for 4 minutes until pale and fluffy. Beat in the eggs one at a time.',
      'Fold in the flour alternately with the soft drink until just combined. Spoon into the tin and level the top.',
      'Bake for 40 minutes until golden and a skewer comes out clean. Cool in the tin for 10 minutes, then turn out onto a rack.',
      'Mix the icing sugar with the lemon juice and spread over the cooled cake.'
    ],
    tips: [
      'Use the soft drink straight from a freshly opened bottle.',
      'If the top browns too quickly, cover with foil for the last 10 minutes.',
      'Wait until the cake is completely cold before icing, or the glaze runs off.'
    ],
    pair: ['Hot tea', 'Whipped cream', 'Fresh berries', 'Black coffee'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [361, 4, 57, 13, 1, 36, 20]
  },

  'barbecued-prawns': {
    d: 'Large prawns grilled in their shells over hot coals and tossed in garlic butter with lemon and parsley.',
    meta: 'Barbecued prawns: large prawns grilled in their shells over a hot barbecue and tossed in garlic butter with lemon. Four servings, cooked in 8 minutes.',
    kw: ['barbecued prawns', 'bbq prawns', 'australian barbecue prawns', 'garlic butter prawns on the barbecue', 'barbecued king prawns recipe'],
    why: 'A barbecue on a warm evening is the natural home for this dish, and prawns are about the fastest thing you can put on one. They need only 3 or 4 minutes a side over a hot grill, and the shell protects the meat from the fierce heat, keeping it sweet and juicy.\n\nBuy large raw prawns in the shell, and if you can, with the heads on; both add flavour. Cut along the back and remove the dark vein, but leave the shell, so the garlic butter can get in. Brush with oil so they do not stick.\n\n**Take them off the moment they turn pink and opaque.** An extra minute makes them rubbery. Melt the butter with garlic and lemon in a small pan at the side of the grill and spoon it over as they come off. Serve with plenty of napkins, because they are best eaten with the fingers.',
    ing: [
      '700 g large raw prawns in their shells',
      '1 tbsp olive oil',
      '60 g butter',
      '3 garlic cloves, crushed',
      '1 lemon',
      '2 tbsp chopped fresh parsley',
      '1/2 tsp salt'
    ],
    st: [
      'Cut along the back of each prawn with scissors and pull out the dark vein, leaving the shell on. Toss with the oil and salt.',
      'Heat the barbecue until the coals are glowing and ash-grey. Cook the prawns for 3 minutes on one side, then turn and cook for 3 minutes until pink and opaque.',
      'Melt the butter with the garlic in a small pan beside the grill for 2 minutes. Add the juice of half the lemon and the parsley.',
      'Toss the hot prawns in the garlic butter and serve with the remaining lemon, cut into wedges.'
    ],
    tips: [
      'Do not leave the prawns on the grill longer than they need.',
      'Soak bamboo skewers for 30 minutes if you thread the prawns.',
      'Keep a spoon of butter back for dipping.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Potato salad', 'Cold white wine'],
    store: 'Best eaten straight away. Leftover prawns keep in the fridge for 1 day and are best eaten cold.',
    nut: [309, 36, 3, 17, 1, 0, 560]
  },

  'newfoundland-fish-cakes': {
    d: 'Pan-fried cakes of flaked cod and mashed potato seasoned with onion and savory, crisp outside and soft within.',
    meta: 'Newfoundland fish cakes: pan-fried cakes of flaked cod and mashed potato seasoned with onion and savory. Four servings, cooked in 15 minutes.',
    kw: ['newfoundland fish cakes', 'canadian cod fish cakes', 'newfoundland cod cakes', 'fish cakes with savory', 'fish cake recipe with cod and potato'],
    why: 'What goes into a Newfoundland fish cake besides fish? Potatoes, onion, and above all savory. This dried herb, sold as summer savory, is the seasoning of Newfoundland cooking and gives the cakes a peppery, slightly piney note that parsley or thyme cannot quite match.\n\nThe cakes are mostly cod. The fish is poached with small potatoes, then mashed together with the onion, the herb and an egg, which binds without making the cakes heavy. A higher proportion of fish than potato gives a flaky texture and a clean taste.\n\nShape the mixture into patties about 2 cm thick and fry them in butter. **Do not move them for the first 3 minutes**, or the base will not form a crust and the cakes may crumble. If the mixture feels too wet to shape, chill it for half an hour. Serve with pickles or relish. Serve them hot with a pot of pickles or a spoonful of relish, which cuts through the richness of the butter.',
    ing: [
      '400 g cod fillet',
      '400 g potatoes, peeled and cut into small cubes',
      '1 small onion, about 80 g, finely chopped',
      '1 tsp dried savory',
      '1 egg',
      '40 g butter',
      '1/2 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Boil the potatoes in salted water for 8 minutes. Lay the cod on top and cook for 4 minutes until it flakes. Drain thoroughly.',
      'Mash the potatoes and fish together roughly. Stir in the onion, savory, egg, salt and pepper.',
      'Shape into 8 patties about 2 cm thick.',
      'Heat the butter in a large frying pan over medium heat. Fry the cakes for 3 minutes on each side until golden. Serve hot.'
    ],
    tips: [
      'Drain the fish and potatoes well; excess water makes the cakes fall apart.',
      'Chill the shaped cakes for 20 minutes if the mixture is soft.',
      'Fry in two batches so the pan does not cool.'
    ],
    pair: ['Pickled beetroot', 'Green salad', 'Mustard pickles', 'Tartare sauce'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot pan.',
    nut: [254, 22, 19, 10, 3, 2, 370]
  },

  'cajun-boudin': {
    d: 'Louisiana sausage of pork, liver and rice seasoned with cayenne, onion and green pepper, poached until firm.',
    meta: 'Cajun boudin: Louisiana sausage of pork, liver and rice seasoned with cayenne, onion and green pepper. Eight servings, cooked for 60 minutes.',
    kw: ['cajun boudin', 'boudin recipe', 'louisiana boudin sausage', 'pork and rice sausage', 'cajun rice sausage'],
    why: 'Boudin is a sausage you eat with a spoon as often as a knife. The filling of pork, liver and rice is soft, spicy and moist rather than firm and sliceable, and it is traditionally squeezed straight from the casing.\n\nThe pork shoulder and the liver are simmered together with onion, green pepper and celery until tender, then ground coarsely. Liver gives a mineral depth and should be about a fifth of the meat; any more and it dominates. The meat is mixed with cooked rice, cayenne and fresh spring onions and parsley, which keep it from tasting heavy.\n\n**Taste the mixture before stuffing.** It should be seasoned more strongly than seems sensible, since the rice dilutes it. Poach the finished sausages gently in water just below a simmer for 15 minutes; a boil splits the casings. Keep any filling left over to eat from a bowl. Serve it warm with crackers, mustard and a cold drink, and eat any broken pieces straight from a spoon.',
    ing: [
      '800 g pork shoulder, cut into 4 cm cubes',
      '200 g pork liver, cut into cubes',
      '2 onions, quartered',
      '1 green pepper, about 150 g, chopped',
      '3 celery sticks, chopped',
      '400 g cooked long-grain rice',
      '1 tsp cayenne pepper',
      '4 garlic cloves, crushed',
      '4 spring onions, finely sliced',
      '3 tbsp chopped fresh parsley',
      '2 tsp salt',
      '1 tsp ground black pepper',
      '150 g sausage casings, rinsed'
    ],
    st: [
      'Put the pork, liver, onions, green pepper, celery and garlic in a large pot. Cover with water and simmer for 45 minutes until the pork is very tender. Drain, keeping 100 ml of the liquid.',
      'Grind the meat and vegetables through a coarse mincer disc. Mix with the rice, cayenne, spring onions, parsley, salt and pepper, loosening with the reserved liquid.',
      'Taste and adjust the seasoning. Stuff loosely into the casings using a sausage stuffer and tie off at 15 cm lengths.',
      'Poach in water just below a simmer for 15 minutes. Serve hot.'
    ],
    tips: [
      'Do not overstuff the casings; the rice expands as it warms.',
      'Keep the water below a simmer so the casings do not burst.',
      'Pierce any air pockets with a pin before poaching.'
    ],
    pair: ['Saltine crackers', 'Pickled okra', 'Hot sauce', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 2 months. Reheat in simmering water.',
    nut: [488, 30, 47, 20, 2, 3, 840]
  }
};
