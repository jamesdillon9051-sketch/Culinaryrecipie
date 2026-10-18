'use strict';

/**
 * Volume sixty-one, third part: the rest of the Portuguese dishes (bread
 * soups, clams, fish stew, sweets, bread, pork and rice) and the first Greek
 * ones (a one pot lamb, halva, Christmas biscuits, fritters, phyllo custard,
 * sesame rings and baked fish). Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'acorda-alentejana': {
    d: 'A thick Alentejo bread soup of garlic, coriander and olive oil with an egg poached in each bowl, ready in 30 minutes.',
    meta: 'Açorda alentejana, Alentejo bread soup with garlic, coriander and poached egg, cooked for 15 minutes. Four servings, ready in 30 minutes.',
    kw: ['acorda alentejana', 'portuguese bread soup', 'alentejo garlic and coriander soup', 'acorda recipe', 'bread soup with poached egg'],
    why: 'What does a poor farm family do with stale bread, a head of garlic and a bunch of coriander? It makes açorda alentejana, the thick bread soup of the Alentejo, the plain, comforting and famous dish of the south of Portugal. It is made in minutes, in a bowl, with boiling water.\n\nPound the garlic with coarse salt and a large handful of fresh coriander in a mortar until you have a green paste, then stir in a few spoonfuls of olive oil. Tear thick slices of day old country bread into the bottom of a deep dish. **Pour the boiling water over the bread slowly**, enough to soak it but not to drown it, and cover with a plate for 3 minutes.\n\nPoach the eggs in simmering water with a splash of vinegar for 3 minutes, so the whites are set and the yolks are soft. Stir the paste into the soaked bread, divide among bowls and set an egg on each. Finish with a stream of olive oil. The soup should be thick, almost porridge. Some cooks add prawns or cod. The dish is good as it stands.',
    ing: [
      '8 garlic cloves',
      '1 tsp coarse salt',
      '30 g fresh coriander',
      '6 tbsp olive oil',
      '300 g stale country bread, in pieces',
      '800 ml boiling water',
      '4 eggs',
      '1 tbsp white wine vinegar'
    ],
    st: [
      'Pound the garlic, salt and coriander to a paste in a mortar. Stir in 3 tablespoons of the oil.',
      'Put the bread in a deep dish. Pour over the boiling water, cover with a plate and leave for 3 minutes.',
      'Poach the eggs in simmering water with the vinegar for 3 minutes.',
      'Stir the paste into the bread. Divide among 4 bowls and top each with an egg.',
      'Finish with the remaining oil.'
    ],
    tips: [
      'Use stale country bread.',
      'Pour the water on slowly.',
      'Poach the eggs just before serving.'
    ],
    pair: ['Green salad', 'Vinho verde', 'Cured ham'],
    store: 'Best fresh.',
    nut: [468, 14, 40, 28, 2, 4, 1020]
  },

  'ameijoas-a-bulhao-pato': {
    d: 'Clams steamed open with garlic, olive oil, white wine, lemon and fresh coriander, a Lisbon classic ready in 20 minutes.',
    meta: 'Amêijoas à Bulhão Pato, Lisbon clams steamed with garlic, white wine, lemon and coriander, cooked for 10 minutes. Four servings, ready in 20 minutes.',
    kw: ['ameijoas a bulhao pato', 'portuguese clams with garlic and coriander', 'lisbon clams in white wine', 'bulhao pato clams', 'clams with lemon and coriander'],
    why: 'How do you tell a clam is alive? Tap it: if the shell is open, it should close. If it stays open, throw it away. Amêijoas à Bulhão Pato are Lisbon\'s best known clam dish, and the whole recipe is clams, garlic, oil, wine and herbs, steamed for a few minutes until the shells open.\n\nPurge the clams for 30 minutes in cold salted water to remove sand, then scrub and rinse them. Warm olive oil with plenty of sliced garlic over low heat until fragrant but not coloured. **Add the clams and wine at once and cover the pan**, shaking it, since steaming them together makes them all open at the same time. The clams are done in 3 to 5 minutes.\n\nDiscard any that stay shut. Add a big handful of chopped coriander and a squeeze of lemon, toss and pour into a wide bowl with all the juices. Serve with crusty bread for dipping, which is half the dish. The liquid is salty, so taste before adding salt. The dish is named for a poet, Bulhão Pato, who is said to have loved it.',
    ing: [
      '1 kg clams, purged and scrubbed',
      '5 tbsp olive oil',
      '6 garlic cloves, sliced',
      '150 ml dry white wine',
      '40 g fresh coriander, chopped',
      '1 lemon, juice',
      '4 slices crusty bread'
    ],
    st: [
      'Purge the clams in cold salted water for 30 minutes. Rinse and scrub.',
      'Warm the oil and garlic in a wide pan over low heat for 3 minutes until fragrant.',
      'Add the clams and wine, cover and cook over high heat for 4 minutes, shaking the pan, until the shells open. Discard any that stay shut.',
      'Add the coriander and lemon juice, toss and serve with the bread.'
    ],
    tips: [
      'Purge the clams to remove sand.',
      'Cover the pan so they open together.',
      'Taste before adding salt.'
    ],
    pair: ['Crusty bread', 'Vinho verde', 'Lemon wedges'],
    store: 'Best fresh.',
    nut: [449, 38, 27, 21, 2, 2, 1650]
  },

  'caldeirada-de-peixe': {
    d: 'A Portuguese fish stew of layered potatoes, onions, peppers, tomatoes and mixed fish, simmered for 40 minutes without stirring.',
    meta: 'Caldeirada de peixe, Portuguese fish stew with potatoes, peppers and tomato, cooked for 40 minutes. Six servings, ready in 1 hour.',
    kw: ['caldeirada de peixe', 'portuguese fish stew', 'caldeirada recipe', 'fish and potato stew portuguese', 'layered fish stew with tomato'],
    why: 'Do not stir it. That is the quick tip for caldeirada, the Portuguese fish stew built in layers in a wide pot: the pot is shaken, not stirred, so the fish stays whole. The stew gets its name from the caldeira, the pot the fishermen used, and it is made with whatever is in the net.\n\nSlice onions, peppers, tomatoes and potatoes and lay them in layers in a wide pot, with the potatoes at the bottom. Add garlic, bay and parsley. Lay the fish pieces on top, firm fish first, then softer ones, and season with salt and a pinch of paprika. **Pour in the wine and olive oil and add just enough water to reach the top of the potatoes**, no more. The fish steams above.\n\nCover and bring to a simmer, then cook gently for about 40 minutes, shaking the pot now and then. The potatoes should be tender and the fish just cooked. Serve in deep dishes, lifting the layers carefully, with a splash of piri piri if you like heat. Use at least three kinds of fish for flavour: a firm white fish, an oily fish and a few prawns.',
    ing: [
      '800 g potatoes, sliced 5 mm',
      '2 onions, sliced',
      '2 green peppers, sliced',
      '600 g ripe tomatoes, sliced',
      '4 garlic cloves',
      '2 bay leaves',
      '10 g parsley sprigs',
      '500 g firm white fish, in chunks',
      '400 g mackerel or sardines, in pieces',
      '300 g raw prawns',
      '1 tsp smoked paprika',
      '1 tsp salt',
      '100 ml dry white wine',
      '100 ml olive oil',
      '200 ml water'
    ],
    st: [
      'Layer the potatoes, onions, peppers and tomatoes in a wide pot, scattering the garlic, bay and parsley between the layers.',
      'Lay the white fish and mackerel on top, then the prawns. Season with the paprika and salt.',
      'Pour over the wine, oil and water.',
      'Cover, bring to a simmer and cook gently for 40 minutes, shaking the pot now and then, without stirring.',
      'Serve in deep dishes with bread.'
    ],
    tips: [
      'Do not stir, shake the pot.',
      'Use at least three kinds of fish.',
      'Add only enough water to reach the potatoes.'
    ],
    pair: ['Crusty bread', 'Vinho verde', 'Piri piri'],
    store: 'Best fresh.',
    nut: [542, 42, 35, 26, 6, 8, 600]
  },

  'pao-de-lo': {
    d: 'A Portuguese sponge cake of eggs, sugar and a little flour, baked until the centre is still creamy, in 1 hour 10 minutes.',
    meta: 'Pão de ló, Portuguese sponge cake with a creamy centre, baked for 40 minutes at 180C. Ten servings, ready in 1 hour 10 minutes.',
    kw: ['pao de lo', 'portuguese sponge cake', 'creamy centre sponge cake', 'pao de lo recipe', 'portuguese egg sponge'],
    why: 'Why is the middle still wet? Because that is how it is meant to be. Pão de ló is the Portuguese sponge cake, made from eggs, sugar and a very little flour, baked so that the outside sets but the centre stays creamy, almost like a custard, and it is served at Easter and Christmas.\n\nUse a lot of eggs, ideally at room temperature. Whisk whole eggs and extra yolks with the sugar for at least 10 minutes with an electric mixer, until the mixture is pale, thick and has tripled in volume. It should leave a ribbon trail on the surface. **Fold in the flour in three goes** with a large spatula, as the air is the only raising agent, and a heavy hand deflates the foam.\n\nPour into a lined tin, bake at 180C for about 40 minutes, until the top is golden and the centre still wobbles slightly. Check at 35 minutes if your oven runs hot. Cool in the tin, where the cake sinks a little, and turn it out. It is dusted with sugar and eaten with a glass of sweet wine. It keeps for 3 days.',
    ing: [
      '6 eggs',
      '6 egg yolks',
      '250 g caster sugar',
      '120 g plain flour',
      '1 lemon, zest',
      '1 pinch salt',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180C and line a 24 cm tin.',
      'Whisk the eggs, yolks, sugar, zest and salt for 10 minutes until pale and tripled in volume.',
      'Sift over the flour in three goes and fold in gently.',
      'Pour into the tin and bake for 40 minutes until golden and still creamy at the centre.',
      'Cool in the tin and dust with the icing sugar.'
    ],
    tips: [
      'Whisk the eggs until tripled.',
      'Fold in the flour in three goes.',
      'Check early if your oven runs hot.'
    ],
    pair: ['Sweet wine', 'Port', 'Coffee'],
    store: 'Keeps for 3 days in a tin.',
    nut: [234, 9, 36, 6, 1, 27, 90]
  },

  'pao-de-deus': {
    d: 'Soft, sweet Portuguese bread rolls covered with a coconut topping, risen for 90 minutes and baked for 25 minutes.',
    meta: 'Pão de Deus, soft sweet Portuguese bread rolls with a coconut topping, baked for 25 minutes. Ten servings, ready in 1 hour 5 minutes plus rising.',
    kw: ['pao de deus', 'portuguese coconut buns', 'bread of god portuguese sweet rolls', 'pao de deus recipe', 'coconut topped sweet buns'],
    why: 'This is what to bake on All Saints\' Day, the first of November, when it is traditional in Portugal to eat pão de Deus, God\'s bread. The name describes how soft the rolls are, and they are covered with a sweet coconut paste that browns in the oven.\n\nThe dough is an enriched bread dough with eggs, butter, milk and sugar. Knead it for 10 minutes until smooth, then let it rise for 90 minutes until doubled. Divide it into ten balls and let them rise again on a tray for 30 minutes. **Make the topping while the buns rise**: mix desiccated coconut, sugar, eggs and a splash of milk into a thick paste.\n\nSpread a generous spoonful on each bun, being careful not to press the dough down. Bake at 180C for 25 minutes, until the buns are puffed and the coconut is a deep gold. Brush them with warm apricot jam if you want a glaze. They are best fresh from the oven, split and buttered, and are also good the next day toasted.',
    ing: [
      '500 g strong bread flour',
      '7 g instant yeast',
      '80 g caster sugar',
      '1 tsp salt',
      '200 ml lukewarm milk',
      '2 eggs',
      '70 g butter, softened',
      '1 lemon, zest',
      '150 g desiccated coconut',
      '100 g caster sugar, for the topping',
      '2 eggs, for the topping',
      '3 tbsp milk, for the topping'
    ],
    st: [
      'Mix the flour, yeast, 80 g sugar, salt, lukewarm milk, 2 eggs, butter and zest and knead for 10 minutes. Leave to rise for 90 minutes.',
      'Divide into 10 balls and set on lined trays. Leave to rise for 30 minutes.',
      'Heat the oven to 180C. Mix the coconut, 100 g sugar, 2 eggs and milk into a thick paste.',
      'Spread a spoonful over each bun without pressing the dough down.',
      'Bake for 25 minutes until puffed and deep gold.'
    ],
    tips: [
      'Knead until smooth and elastic.',
      'Spread the topping lightly.',
      'Eat while fresh.'
    ],
    pair: ['Butter', 'Coffee', 'Hot chocolate'],
    store: 'Best the day they are made.',
    rest: [120, 'Rising'],
    nut: [399, 9, 48, 19, 4, 23, 520]
  },

  'broa-de-milho': {
    d: 'A dense Portuguese cornbread of maize flour and rye with a cracked crust, risen for 1 hour and baked for 35 minutes.',
    meta: 'Broa de milho, dense Portuguese cornbread of maize and rye flour, baked for 35 minutes at 220C. Eight servings, ready in 55 minutes plus rising.',
    kw: ['broa de milho', 'portuguese cornbread', 'maize and rye bread', 'broa recipe', 'dense yeast cornbread'],
    why: 'Scald the cornmeal first. That is the quick tip behind broa de milho, the Portuguese cornbread, because dry maize flour will not absorb water well, and a bread made without scalding tastes gritty and crumbles. Pouring boiling water over the cornmeal softens it and makes the loaf moist.\n\nMix the cornmeal and salt in a large bowl and pour the boiling water over, stirring to a thick porridge. Cool until just warm. **Add the yeast, rye flour and wheat flour to the cooled mix**, because hot dough kills the yeast. Knead until it comes together into a soft, slightly sticky dough. It will not be as elastic as a wheat dough.\n\nShape into a round, set it on a floured tray and leave it to rise for 1 hour, until the surface cracks. Dust with cornmeal and slash the top. Bake at 220C for 35 minutes, until the crust is deep brown and the loaf sounds hollow when tapped. Cool on a rack. Broa is eaten with soup or sardines, or sliced and toasted with butter.',
    ing: [
      '250 g fine cornmeal',
      '300 ml boiling water',
      '1 tsp salt',
      '7 g instant yeast',
      '150 g rye flour',
      '150 g strong white flour',
      '2 tbsp olive oil',
      '1 tbsp cornmeal, for dusting'
    ],
    st: [
      'Put the 250 g cornmeal and salt in a bowl, pour over the boiling water and stir to a thick porridge. Cool until just warm.',
      'Mix in the yeast, rye flour, white flour and oil and knead for 8 minutes to a soft dough.',
      'Shape into a round on a floured tray and leave to rise for 1 hour until cracked.',
      'Heat the oven to 220C. Dust with the cornmeal, slash the top and bake for 35 minutes until deep brown.',
      'Cool on a rack.'
    ],
    tips: [
      'Scald the cornmeal first.',
      'Cool the porridge before adding the yeast.',
      'Bake until the base sounds hollow.'
    ],
    pair: ['Soup', 'Grilled sardines', 'Butter', 'Cheese'],
    store: 'Keeps for 4 days wrapped. Freeze for 2 months.',
    rest: [60, 'Rising'],
    nut: [285, 6, 54, 5, 4, 1, 300]
  },

  'ovos-moles': {
    untimed: ['cooling completely'],
    d: 'A sweet Portuguese cream of egg yolks and sugar syrup, spooned into small wafer shells, ready in 45 minutes.',
    meta: 'Ovos moles, Portuguese sweet egg yolk cream in wafer shells, cooked for 20 minutes. Twelve servings, ready in 45 minutes.',
    kw: ['ovos moles', 'portuguese egg yolk sweet', 'aveiro ovos moles', 'egg yolk cream in wafers', 'ovos moles recipe'],
    why: 'Short and sharp: egg yolks and sugar, and nothing else. Ovos moles, soft eggs, is the famous sweet of Aveiro in Portugal, a thick golden cream of egg yolks cooked in a sugar syrup, and traditionally it is served in thin wafer shells shaped like shells or barrels.\n\nBoil sugar and water together for about 8 minutes until the syrup reaches 110C, the thread stage. Meanwhile whisk the egg yolks gently, without making them foam, and strain them through a sieve. **Pour the hot syrup into the yolks in a thin stream, whisking all the time**, so they warm slowly and do not scramble. Return the mix to the pan.\n\nStir over a low heat for 8 to 10 minutes, until it thickens enough for the spoon to leave a trail and you can see the base of the pan. Do not let it boil. Pour into a bowl and cool. Spoon into wafer shells, or serve in a small glass with a spoon. The cream is very sweet and rich, and small servings are enough. It keeps for a week in the fridge.',
    ing: [
      '250 g caster sugar',
      '150 ml water',
      '10 egg yolks',
      '30 g small wafer shells'
    ],
    st: [
      'Boil the sugar and water for 8 minutes until the syrup reaches 110C.',
      'Whisk the yolks gently and strain through a sieve into a bowl.',
      'Pour the hot syrup into the yolks in a thin stream, whisking.',
      'Return the mixture to the pan and stir over low heat for 8 to 10 minutes until thick, without boiling.',
      'Cool completely and spoon into the wafer shells.'
    ],
    tips: [
      'Strain the yolks.',
      'Add the syrup in a thin stream.',
      'Never let the cream boil.'
    ],
    pair: ['Coffee', 'Port', 'Fresh fruit'],
    store: 'Keeps for 1 week in the fridge. Fill the wafers just before serving.',
    nut: [152, 6, 23, 4, 0, 21, 50]
  },

  'toucinho-do-ceu': {
    d: 'A dense Portuguese cake of ground almonds, egg yolks and sugar syrup, baked for 40 minutes at 180C until golden.',
    meta: 'Toucinho do céu, dense Portuguese almond and egg yolk cake, baked for 40 minutes at 180C. Ten servings, ready in 1 hour.',
    kw: ['toucinho do ceu', 'portuguese almond cake', 'bacon from heaven cake', 'almond and egg yolk cake', 'toucinho do ceu recipe'],
    why: 'The name means bacon from heaven, and the cake has no bacon, though in old convent recipes pork fat was used. Toucinho do céu is a dense, moist Portuguese cake, rich in almonds and egg yolks, made in the convents where nuns had egg whites for starching their habits, and so cooked many yolks.\n\nBoil sugar and water together for 5 minutes until the syrup is thick, then stir in the ground almonds and let the mixture cool for 10 minutes. **Do not add the yolks while the mixture is hot**, because they scramble in an instant. Beat the egg yolks and whole eggs together, then stir them in with a little lemon zest and a pinch of cinnamon.\n\nPour into a well buttered and floured tin and bake at 180C for 40 minutes, until the top is a deep gold and the cake has begun to pull away from the sides. It should still be very moist inside. Cool in the tin, turn out, and dust with icing sugar. Serve in thin slices, since it is very rich. It keeps for a week and tastes better after two days.',
    ing: [
      '300 g caster sugar',
      '150 ml water',
      '250 g ground almonds',
      '8 egg yolks',
      '2 eggs',
      '1 lemon, zest',
      '1/2 tsp ground cinnamon',
      '20 g butter, for the tin',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180C and butter and flour a 22 cm tin.',
      'Boil the sugar and water for 5 minutes until thick. Stir in the almonds and cool for 10 minutes.',
      'Beat the yolks and eggs together and stir into the almond mix with the zest and cinnamon.',
      'Pour into the tin and bake for 40 minutes until deep gold.',
      'Cool in the tin, turn out and dust with the icing sugar.'
    ],
    tips: [
      'Cool the syrup mix before adding the eggs.',
      'Cut in thin slices.',
      'Leave for two days for the best flavour.'
    ],
    pair: ['Coffee', 'Port', 'Whipped cream'],
    store: 'Keeps for 1 week in a tin.',
    nut: [371, 12, 38, 19, 3, 33, 60]
  },

  'arroz-de-tomate': {
    d: 'Portuguese tomato rice, soft and red, cooked in a savoury tomato broth with onion and garlic, the standard side for fried fish.',
    meta: 'Arroz de tomate, Portuguese tomato rice with onion and garlic, cooked for 35 minutes. Four servings, ready in 50 minutes.',
    kw: ['arroz de tomate', 'portuguese tomato rice', 'tomato rice side dish', 'arroz de tomate recipe', 'red rice portuguese'],
    why: 'Does the rice taste of tomato, or of the pan? It tastes of both, and that is the reason this is one of the great side dishes of Portugal. Arroz de tomate is a soft, red, slightly wet rice, cooked in a tomato and onion base and served with fried fish, grilled meat and roast chicken.\n\nStart with a sofrito: onion and garlic softened slowly in olive oil, then a grated or chopped tomato, a bay leaf and a spoonful of tomato purée. **Cook the base until the oil separates**, about 12 minutes, because that is when the sweetness appears. Add the rice and stir for a minute so every grain is coated.\n\nPour in hot water or stock, using 2 parts to 1 part of rice, and bring to a simmer. Cover and cook gently for 15 minutes, then rest for 5 minutes off the heat without opening the lid. Fluff with a fork and stir in chopped parsley. The rice should be moist, not dry or sticky. Serve it with fried fish and a wedge of lemon.',
    ing: [
      '3 tbsp olive oil',
      '1 onion, finely chopped',
      '3 garlic cloves',
      '500 g ripe tomatoes, grated',
      '1 tbsp tomato purée',
      '1 bay leaf',
      '300 g long grain rice',
      '600 ml hot water or stock',
      '1 tsp salt',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Soften the onion and garlic in the oil for 8 minutes. Add the tomatoes, purée and bay and cook for 12 minutes until the oil separates.',
      'Stir in the rice for 1 minute.',
      'Add the hot water and salt, bring to a simmer, cover and cook gently for 15 minutes.',
      'Rest off the heat for 5 minutes with the lid on. Fluff and stir in the parsley.'
    ],
    tips: [
      'Cook the base until the oil separates.',
      'Use two parts liquid to one of rice.',
      'Rest, covered, before serving.'
    ],
    pair: ['Fried fish', 'Grilled chicken', 'Lemon wedges'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [424, 9, 70, 12, 3, 5, 1100]
  },

  'bolinhos-de-bacalhau': {
    cookMax: 45,
    untimed: ['cooling completely'],
    d: 'Oval fritters of salt cod, potato, onion and parsley fried until golden, after a 24 hour soak, a Portuguese snack.',
    meta: 'Bolinhos de bacalhau, Portuguese salt cod fritters with potato and parsley, fried in batches. Eight servings, ready in 35 minutes plus soaking.',
    kw: ['bolinhos de bacalhau', 'portuguese salt cod fritters', 'bacalhau fritters', 'pasteis de bacalhau', 'salt cod and potato croquettes'],
    why: 'Bolinhos de bacalhau, also called pastéis de bacalhau, are made in every Portuguese home, and some say that there are a thousand ways to cook salt cod and these are the most popular. Their name just means little cod cakes. Crisp outside, they are soft and salty inside.\n\nSoak the cod for 24 hours, changing the water three times. Poach it in water or milk for 10 minutes, drain, and flake it, taking out the skin and bones. Boil floury potatoes, mash them dry, and mix with the cod, finely chopped onion, parsley, an egg and black pepper. **Let the mixture cool completely**, as a warm one is too soft to shape. Taste before adding salt, as the cod may still be salty.\n\nShape the mix into ovals with two tablespoons, dipping them in water so the mixture does not stick. Fry in oil at 175C for 3 minutes on each side, until deep gold. Drain on kitchen paper. They are served warm or at room temperature, with a salad of tomatoes, or as a starter with a glass of green wine.',
    ing: [
      '400 g salt cod, in pieces',
      '400 g floury potatoes, peeled and cut up',
      '1 onion, finely chopped',
      '4 tbsp chopped parsley',
      '2 eggs',
      '1/2 tsp black pepper',
      '100 ml rapeseed oil absorbed, from 800 ml for frying'
    ],
    st: [
      'Soak the cod in cold water in the fridge for 24 hours, changing the water 3 times.',
      'Poach the cod in water for 10 minutes. Flake it, discarding skin and bones.',
      'Meanwhile, boil the potatoes for 20 minutes. Drain well and mash dry. Cool completely.',
      'Mix the cod, potato, onion, parsley, eggs and pepper. Shape into 16 ovals with wet spoons.',
      'Heat the oil to 175C and fry in batches for 3 minutes on each side. Drain on kitchen paper.'
    ],
    tips: [
      'Soak the cod for a full day.',
      'Cool the mix before shaping.',
      'Fry in small batches.'
    ],
    pair: ['Tomato salad', 'Vinho verde', 'Lemon wedges'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot oven.',
    rest: [1440, 'Soaking'],
    nut: [169, 3, 10, 13, 1, 1, 19670]
  },

  'chourico-assado': {
    d: 'Sliced Portuguese chouriço grilled over a clay dish of burning spirit until blistered, a tapas bar classic ready in 25 minutes.',
    meta: 'Chouriço assado, Portuguese smoked sausage grilled over flames in a clay dish, cooked for 15 minutes. Six servings, ready in 25 minutes.',
    kw: ['chourico assado', 'flaming portuguese chorizo', 'chouriço assado', 'chourico on a clay dish', 'portuguese chorizo appetizer'],
    why: 'Most home versions come out dry or burnt, and the fix is to slit the sausage and keep the flame low. Chouriço assado is a Portuguese smoked sausage cooked over a small flame in a clay dish, called an assador, which holds a little aguardente that burns beneath it. The sausage gets blistered and crisp and drips with fat.\n\nSlit the chouriço lengthways almost to the end, and open it out like a book. Lay it on the rack of the assador, or on a grill rack over a baking tin. Pour a little aguardente, or any strong clear spirit, into the dish below and light it carefully with a long match. **Keep the flame small** and turn the sausage after 5 minutes, since it chars if the heat is too high.\n\nCook for about 15 minutes, until the casing is blistered, and the fat is dripping and sizzling. If you have no assador, grill the slit sausage under a high heat for 10 minutes. Slice and serve on bread with a glass of red wine. Take great care with the spirit and never pour it on while the flame is lit.',
    ing: [
      '600 g chouriço, slit lengthways',
      '100 ml aguardente or other strong clear spirit',
      '6 slices crusty bread',
      '1 tbsp olive oil',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Slit the chouriço lengthways, almost to the end, and open it out.',
      'Pour the aguardente into the dish of an assador, set the sausage on the rack and light the spirit with a long match.',
      'Cook for 15 minutes, turning once, until the casing is blistered and the fat sizzles.',
      'Slice, scatter with the parsley and serve with the bread brushed with the oil.'
    ],
    tips: [
      'Keep the flame small.',
      'Turn the sausage after 5 minutes.',
      'Never add spirit while the flame is lit.'
    ],
    pair: ['Crusty bread', 'Red wine', 'Olives'],
    store: 'Best fresh.',
    nut: [379, 16, 18, 27, 1, 3, 950]
  },

  'migas-portuguesas': {
    d: 'Shredded bread fried in olive oil with garlic and coriander into a savoury mash, served with pork or fried eggs.',
    meta: 'Migas portuguesas, Portuguese bread mash fried with garlic and coriander, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['migas portuguesas', 'portuguese fried bread migas', 'migas with garlic and coriander', 'alentejo migas', 'migas recipe'],
    why: 'Use bread that is at least two days old. That is the quick tip for migas, the Portuguese dish of bread crumbs fried in oil, because fresh bread turns to paste and stale bread keeps a little firmness and soaks up the flavour. Migas means crumbs, and in the Alentejo the dish is served as a side with pork.\n\nTear or cut stale rustic bread into small pieces and pour over some boiling water, just enough to dampen it. Cover and leave it for 10 minutes. In a wide pan, fry sliced garlic in olive oil and a little lard until pale gold. **Add the damp bread and press it down**, then stir and mash with a wooden spoon until it forms a coarse, glossy mass. Keep turning it so that the edges crisp.\n\nAdd chopped coriander, salt and pepper and fry for 10 minutes more, until the migas are golden and crisp underneath. Serve hot with fried pork, sausages or a fried egg on top. Some versions are made with asparagus or with cabbage. A drizzle of oil at the end makes it glossy.',
    ing: [
      '400 g stale country bread, torn small',
      '200 ml boiling water',
      '5 tbsp olive oil',
      '1 tbsp lard',
      '5 garlic cloves, sliced',
      '30 g fresh coriander, chopped',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '4 eggs'
    ],
    st: [
      'Put the bread in a bowl, sprinkle with the boiling water, cover and leave for 10 minutes.',
      'Warm 4 tablespoons of the oil and the lard in a wide pan and fry the garlic for 2 minutes.',
      'Add the bread, press down and mash with a wooden spoon, then fry for 10 minutes, turning, until golden and crisp at the edges.',
      'Stir in the coriander, salt and pepper.',
      'Fry the eggs in the remaining oil and serve on the migas.'
    ],
    tips: [
      'Use bread at least two days old.',
      'Mash and press the bread as it fries.',
      'Let a crust form underneath before turning.'
    ],
    pair: ['Fried pork', 'Grilled sausages', 'Green salad'],
    store: 'Best fresh.',
    nut: [529, 16, 51, 29, 3, 5, 1140]
  },

  'carne-de-porco-a-alentejana': {
    d: 'Cubes of pork marinated in wine and paprika paste, fried and finished with clams, fried potatoes and coriander.',
    meta: 'Carne de porco à alentejana, Portuguese pork with clams, paprika paste and fried potatoes, cooked for 40 minutes. Four servings, ready in 1 hour 30 minutes.',
    kw: ['carne de porco a alentejana', 'portuguese pork and clams', 'alentejo pork with clams', 'pork and clams recipe', 'carne de porco alentejana'],
    why: 'Pork and clams in one pan seems odd until you taste it. Carne de porco à alentejana is a famous Portuguese dish from the Alentejo, where land and sea meet on a single plate: cubes of marinated pork, fried and cooked with clams, and served with golden potatoes.\n\nMarinate the pork cubes in white wine, garlic, bay and a spoonful of massa de pimentão, a paste of red peppers, for at least 30 minutes. Drain them and pat dry, because wet meat does not brown. **Fry the pork in a hot pan in batches** until each piece is crusted. Lift out and keep warm. Fry the potato cubes in oil until golden and crisp at the edges.\n\nIn the same pan, soften onion and garlic, add the marinade and the clams, cover and cook for 4 minutes, until the shells open. Throw away any that stay shut. Return the pork and potatoes to the pan, toss with the juices and scatter with coriander and lemon juice. Serve at once from the pan. The salt from the clams seasons the pork.',
    ing: [
      '700 g pork shoulder, in 3 cm cubes',
      '150 ml dry white wine',
      '4 garlic cloves, crushed',
      '1 bay leaf',
      '1 tbsp red pepper paste',
      '4 tbsp olive oil',
      '500 g potatoes, in 2 cm cubes',
      '1 onion, chopped',
      '500 g clams, purged and scrubbed',
      '30 g fresh coriander, chopped',
      '1 lemon, juice'
    ],
    st: [
      'Mix the pork with the wine, 2 of the garlic cloves, bay and pepper paste. Marinate for 30 minutes. Drain, keeping the marinade, and pat the pork dry.',
      'Fry the pork in 2 tablespoons of the oil in a wide pan in batches for 8 minutes until crusted. Lift out.',
      'Fry the potatoes in the remaining oil for 10 minutes until golden. Lift out.',
      'Soften the onion and remaining garlic for 3 minutes. Add the marinade and clams, cover and cook for 4 minutes until open.',
      'Return the pork and potatoes, toss and finish with the coriander and lemon juice.'
    ],
    tips: [
      'Pat the pork dry before frying.',
      'Cook the pork in batches.',
      'Discard any clams that stay shut.'
    ],
    pair: ['Green salad', 'Vinho verde', 'Crusty bread'],
    store: 'Best fresh.',
    nut: [696, 52, 32, 40, 4, 3, 870]
  },

  'bacalhau-com-grao': {
    d: 'Salt cod flaked over warm chickpeas with onion, garlic, coriander and boiled egg, dressed with olive oil and vinegar.',
    meta: 'Bacalhau com grão, Portuguese salt cod with chickpeas, onion and egg, cooked for 25 minutes. Four servings, ready in 40 minutes plus soaking.',
    kw: ['bacalhau com grao', 'portuguese salt cod and chickpeas', 'cod and chickpea salad', 'bacalhau com grao recipe', 'warm cod and chickpea dish'],
    why: 'Compare it with a bean salad and you find a warmer, more savoury cousin, with salt cod instead of tuna. Bacalhau com grão is a Portuguese dish of flaked salt cod and chickpeas, dressed with olive oil and vinegar, and eaten at lunch on a Friday or as a light dinner.\n\nSoak the cod for 24 hours in the fridge, changing the water 3 times, then poach it for 10 minutes in water. Flake it into large pieces, discarding the skin and bones. Warm the chickpeas gently, or cook your own, with a bay leaf. **Dress the chickpeas while they are warm**, as they absorb the oil and vinegar better than cold ones.\n\nSoften the onion in olive oil with garlic, stir in the chickpeas and cod, and toss over a low heat for 5 minutes. Add chopped coriander, black pepper and the halved boiled eggs, and finish with a generous dribble of oil and a splash of vinegar. Taste before adding salt. The salad is also good cold the next day, with the flavours deepened.',
    ing: [
      '500 g salt cod, in pieces',
      '800 g tinned chickpeas, drained',
      '5 tbsp olive oil',
      '1 onion, thinly sliced',
      '3 garlic cloves, sliced',
      '1 bay leaf',
      '2 tbsp red wine vinegar',
      '30 g fresh coriander, chopped',
      '3 hard boiled eggs, halved',
      '1/2 tsp black pepper'
    ],
    st: [
      'Soak the salt cod in cold water in the fridge for 24 hours, changing the water 3 times.',
      'Poach the cod in water for 10 minutes. Flake it, discarding skin and bones.',
      'Soften the onion and garlic in 3 tablespoons of the oil for 5 minutes. Add the chickpeas and bay and warm for 5 minutes.',
      'Fold in the cod, coriander and pepper.',
      'Top with the eggs and dress with the remaining oil and the vinegar.'
    ],
    tips: [
      'Soak the cod for a full 24 hours.',
      'Dress the chickpeas while warm.',
      'Taste before adding salt.'
    ],
    pair: ['Crusty bread', 'Vinho verde', 'Green salad'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [1440, 'Soaking'],
    nut: [462, 19, 38, 26, 11, 7, 49780]
  },

  'arroz-de-cabidela': {
    d: 'Portuguese chicken rice cooked in a stock thickened with the chicken\'s blood and vinegar, an old dish of the north.',
    meta: 'Arroz de cabidela, northern Portuguese chicken rice thickened with blood and vinegar, cooked for 1 hour. Six servings, ready in 1 hour 25 minutes.',
    kw: ['arroz de cabidela', 'portuguese chicken and blood rice', 'chicken rice with vinegar', 'cabidela recipe', 'minho chicken rice'],
    why: 'It is not for everyone, and it should be said plainly: arroz de cabidela is made with the fresh blood of the chicken. It is a dish of the Minho, in the north of Portugal, eaten at family Sunday lunches, and the blood is what gives the rice its dark colour and rich, glossy sauce. Ask the butcher for fresh chicken blood mixed with vinegar to stop it clotting.\n\nSimmer a whole jointed chicken in water with onion and bay for 40 minutes, until the meat is cooked through and tender. Lift out the chicken and keep the broth. Fry onion and garlic in olive oil and add the rice, then enough of the hot broth to cook it, about 700 ml. **Do not add the blood until the rice is nearly tender**, and then take the pan off the heat.\n\nStir the blood and vinegar mixture in, stirring constantly for 2 minutes so it thickens without scrambling. Return the chicken. The rice should be moist, almost soupy. Serve at once, with a sprinkle of parsley and a glass of red wine. Always cook the blood through, and use only blood from a trusted source.',
    ing: [
      '1.5 kg whole chicken, jointed',
      '1 onion, halved',
      '1 bay leaf',
      '2 litres water',
      '4 tbsp olive oil',
      '1 onion, chopped',
      '3 garlic cloves',
      '350 g long grain rice',
      '200 ml chicken blood, mixed with 3 tbsp vinegar',
      '1 tsp salt',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Simmer the chicken with the halved onion, bay and water for 40 minutes. Lift out the chicken and keep the broth hot.',
      'Soften the chopped onion and garlic in the oil for 5 minutes. Add the rice and stir for 1 minute.',
      'Add 700 ml of the broth and the salt and simmer for 12 minutes until the rice is nearly tender. Return the chicken.',
      'Take the pan off the heat and stir in the blood and vinegar for 2 minutes until thick. Return briefly to a low heat.',
      'Scatter with the parsley and serve at once.'
    ],
    tips: [
      'Buy fresh blood from a trusted butcher.',
      'Add the blood off the heat.',
      'Serve at once while it is moist.'
    ],
    pair: ['Green salad', 'Red wine', 'Crusty bread'],
    store: 'Best fresh.',
    nut: [814, 58, 51, 42, 1, 2, 640]
  },

  'leitao-da-bairrada': {
    d: 'A suckling pig rubbed with garlic, lard and pepper and roasted for 4 hours until the skin is crisp, the Bairrada roast.',
    meta: 'Leitão da Bairrada, roast suckling pig rubbed with garlic and pepper, cooked for 4 hours. Six servings, ready in 4 hours 35 minutes.',
    kw: ['leitao da bairrada', 'portuguese roast suckling pig', 'bairrada roast pig', 'leitao assado recipe', 'crispy suckling pig portugal'],
    why: 'Compare it to the Segovia roast and you find a different method: a rub of garlic and pepper, and a dry roast without water. Leitão da Bairrada is the suckling pig of central Portugal, roasted in a wood oven in restaurants along the old road from Lisbon to Porto, and the skin comes out thin, brittle and the colour of amber.\n\nA young pig has little fat, and the skin must be kept moist at first. Rub the pig inside and out with a paste of crushed garlic, black pepper, salt and lard, and leave it in the fridge overnight if you can. **Brush the skin with lard before and during roasting**, as this is what makes it blister and crisp. Lay the pig on a rack in a large tin, and roast at 160C for 3 hours.\n\nRaise the heat to 220C for the last 40 minutes and baste with the pan fat every 10 minutes until the skin is golden. Rest for 15 minutes. Carve into pieces with the skin on. Serve with sliced oranges, which cut the richness, and roast potatoes. The classic accompaniment is a glass of sparkling Bairrada wine.',
    ing: [
      '2.4 kg suckling pig',
      '1 head garlic, 60 g, crushed',
      '2 tsp black pepper',
      '2 tsp salt',
      '80 g lard',
      '800 g potatoes, in wedges',
      '3 oranges, sliced',
      '2 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 160C. Mix the garlic, pepper, salt and half the lard and rub inside and out. Set on a rack in a tin.',
      'Brush the skin with the remaining melted lard. Roast for 3 hours, basting every 30 minutes.',
      'Add the potatoes tossed in the oil for the last hour.',
      'Turn the oven to 220C for 40 minutes, basting every 10 minutes, until the skin is crisp.',
      'Rest for 15 minutes, carve and serve with the oranges.'
    ],
    tips: [
      'Rub the pig the night before if you can.',
      'Baste with lard to crisp the skin.',
      'Finish at a high heat.'
    ],
    pair: ['Orange slices', 'Roast potatoes', 'Sparkling red wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [878, 67, 31, 54, 5, 7, 1030]
  },

  'sopa-de-feijao-verde': {
    d: 'A Portuguese green bean soup with potatoes, onion, garlic and olive oil, simmered for 40 minutes and blended or left rustic.',
    meta: 'Sopa de feijão verde, Portuguese green bean soup with potatoes and olive oil, cooked for 40 minutes. Six servings, ready in 55 minutes.',
    kw: ['sopa de feijao verde', 'portuguese green bean soup', 'green bean and potato soup', 'sopa de feijao verde recipe', 'portuguese vegetable soup'],
    why: 'This is what to make in late summer, when the garden beans are at their best and a soup is the easiest way to use a glut. Sopa de feijão verde is a simple Portuguese soup of green beans and potatoes with garlic and olive oil, and it is served at the start of nearly every lunch in the country.\n\nSimmer sliced onion, garlic and diced potatoes in water for 15 minutes, until the potatoes are soft. Add the green beans, cut into short lengths, and a good pinch of salt, and cook for 15 minutes more. **Stir in the olive oil at the end**, off the heat, because raw oil tastes fresh and fruity, and cooked oil goes flat. A bay leaf and a little coriander are optional.\n\nThe soup can be served as it is, rustic, with pieces of potato and bean. Or blend about half of it for a creamier texture, and keep the rest chunky. In some regions a slice of chouriço is added, or a spoonful of rice. Taste for salt and pepper, and serve hot with a drizzle of oil on top and a piece of broa.',
    ing: [
      '1 onion, sliced',
      '3 garlic cloves',
      '600 g potatoes, diced',
      '1.5 litres water',
      '500 g green beans, in 2 cm lengths',
      '1 tsp salt',
      '5 tbsp olive oil',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the onion, garlic, potatoes and water in a pot and bring to the boil. Simmer for 15 minutes.',
      'Add the beans and salt and simmer for 15 minutes more.',
      'Blend about half of the soup with a hand blender, leaving the rest chunky.',
      'Take off the heat and stir in 3 tablespoons of the oil and the pepper. Serve with the rest of the oil on top.'
    ],
    tips: [
      'Add the oil at the end.',
      'Blend only part of the soup for texture.',
      'Taste for salt before serving.'
    ],
    pair: ['Broa de milho', 'Crusty bread', 'Cheese'],
    store: 'Keeps for 3 days in the fridge. Freeze for 3 months.',
    nut: [224, 4, 25, 12, 5, 4, 410]
  },

  'giouvetsi': {
    d: 'Lamb or beef baked in a clay dish with tomato, cinnamon and orzo pasta, which cooks in the sauce, ready in 1 hour 50 minutes.',
    meta: 'Giouvetsi, Greek lamb baked with tomato, cinnamon and orzo in one dish, cooked for 90 minutes. Six servings, ready in 1 hour 50 minutes.',
    kw: ['giouvetsi', 'greek lamb with orzo', 'greek baked lamb and pasta', 'giouvetsi recipe', 'lamb and orzo clay pot'],
    why: 'Lamb, tomatoes, orzo: three simple things, and one baking dish. Giouvetsi is the Greek roast in a clay pot, in which the meat is cooked first in a tomato sauce, and the orzo, a rice shaped pasta, goes in for the last half hour so it cooks in the juices and takes on their flavour.\n\nUse lamb shoulder, cut into large chunks on the bone. Brown it in olive oil in a pan, then place it in a deep baking dish with onion, garlic, tomato, a cinnamon stick, bay and a splash of red wine. **Cover tightly with foil and roast at 180C for 1 hour**, so the meat cooks in its own steam. The cinnamon gives a warm fragrance.\n\nStir in the orzo and extra hot stock, and roast uncovered for 30 minutes more, stirring once or twice, until the pasta is tender and the sauce has thickened. Top with grated kefalotyri or Parmesan. The orzo should be soft but not mushy, so check at 25 minutes. Serve straight from the dish, with a Greek salad, bread and red wine.',
    ing: [
      '1.2 kg lamb shoulder on the bone, in large chunks',
      '4 tbsp olive oil',
      '1 onion, chopped',
      '4 garlic cloves',
      '400 g tinned chopped tomatoes',
      '100 ml red wine',
      '3 g cinnamon stick',
      '2 bay leaves',
      '600 ml hot stock',
      '300 g orzo',
      '1 tsp salt',
      '50 g grated kefalotyri or Parmesan'
    ],
    st: [
      'Heat the oven to 180C. Brown the lamb in the oil in a pan for 8 minutes. Transfer to a deep baking dish.',
      'Soften the onion and garlic in the pan for 5 minutes, add the tomatoes and wine and pour over the lamb with the cinnamon and bay.',
      'Cover tightly with foil and roast for 1 hour.',
      'Stir in the orzo, hot stock and salt and roast uncovered for 30 minutes, stirring once or twice.',
      'Scatter with the cheese and serve from the dish.'
    ],
    tips: [
      'Cover tightly for the first hour.',
      'Check the orzo at 25 minutes.',
      'Stir the orzo once or twice so it does not stick.'
    ],
    pair: ['Greek salad', 'Crusty bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [837, 46, 44, 53, 3, 4, 1000]
  },

  'halva': {
    d: 'A Greek semolina halva toasted in olive oil and cooked with a cinnamon and clove syrup, set in a mould in 35 minutes.',
    meta: 'Halva, Greek semolina halva cooked in olive oil and spiced syrup, cooked for 25 minutes. Twelve servings, ready in 35 minutes.',
    kw: ['halva', 'greek semolina halva', 'halvas me simigdali', 'semolina halva with cinnamon', 'greek halva recipe'],
    why: 'Oil, semolina, sugar, water: these are the four things that make halva, and the proportions are easy to remember: 1, 2, 3, 4. One part oil, two parts semolina, three parts sugar and four parts water, by volume, give a perfect halva every time. This is the Greek Lenten pudding, and it needs no eggs and no milk.\n\nWarm the oil in a wide pan and stir in the semolina over medium heat. **Toast the semolina for 10 to 12 minutes until it turns the colour of a hazelnut**, stirring all the time, as it burns if left. At the same time, simmer the water, sugar, cinnamon stick and cloves for 5 minutes into a syrup.\n\nAdd the almonds to the toasted semolina, then take it off the heat and pour in the hot syrup, standing back as it spits. Stir over low heat for 3 to 4 minutes until it thickens and pulls from the sides. Press into a mould, cool and turn out. Dust with cinnamon. It keeps for a week in a cool place and is cut in slices, eaten at room temperature.',
    ing: [
      '125 ml olive oil',
      '250 g coarse semolina',
      '375 g caster sugar',
      '500 ml water',
      '3 g cinnamon stick',
      '2 g cloves',
      '40 g flaked almonds',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Simmer the water, sugar, cinnamon stick and cloves for 5 minutes. Keep hot.',
      'Warm the oil in a wide pan, stir in the semolina and toast over medium heat for 10 to 12 minutes, stirring, until hazelnut brown.',
      'Add the almonds for 1 minute. Take off the heat and carefully pour in the hot syrup, standing back.',
      'Stir over low heat for 3 to 4 minutes until thick and pulling away from the sides.',
      'Press into a mould, cool and turn out. Dust with the ground cinnamon.'
    ],
    tips: [
      'Remember the 1, 2, 3, 4 proportions.',
      'Stir the semolina constantly while toasting.',
      'Stand back when the syrup goes in.'
    ],
    pair: ['Greek coffee', 'Vanilla ice cream', 'Walnuts'],
    store: 'Keeps for 1 week in a cool place.',
    nut: [308, 3, 47, 12, 1, 32, 5]
  },

  'melomakarona': {
    d: 'Greek Christmas biscuits made with olive oil, orange and cinnamon, baked for 30 minutes and soaked in honey syrup with walnuts.',
    meta: 'Melomakarona, Greek honey-dipped Christmas biscuits with olive oil and walnuts, baked for 30 minutes. Thirty biscuits, ready in 55 minutes.',
    kw: ['melomakarona', 'greek honey cookies', 'greek christmas biscuits', 'melomakarona recipe', 'olive oil and honey cookies'],
    why: 'Do not overwork the dough. It is the single most useful tip for melomakarona, the Greek honey dipped Christmas biscuits, because they come out heavy and hard if the dough has been kneaded. They are made with olive oil and orange juice, no eggs and no butter, and are soft inside after soaking.\n\nMix the olive oil with orange juice, sugar, brandy and a little baking soda, then stir in the semolina and flour until just combined. The dough is soft and slightly sticky. **Shape it into ovals with your fingertips**, as little as possible, and press the top with a fork to make marks. Bake at 180C for 25 to 30 minutes, until golden.\n\nWhile the biscuits are still warm, dip them in a cooled honey syrup made from honey, sugar, water and a strip of orange peel. Leave them in it for 20 seconds, then lift them out and sprinkle with chopped walnuts and cinnamon. The syrup should be cool and the biscuits warm, so that they absorb it. They improve over three days and last two weeks in a tin.',
    ing: [
      '125 ml olive oil',
      '125 ml orange juice',
      '100 g caster sugar',
      '3 tbsp brandy',
      '1 tsp baking soda',
      '1 orange, zest',
      '250 g fine semolina',
      '250 g plain flour',
      '200 g honey',
      '150 g caster sugar, for the syrup',
      '200 ml water',
      '100 g walnuts, chopped',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 180C and line two trays. Whisk the oil, orange juice, 100 g sugar, brandy, baking soda and zest.',
      'Stir in the semolina and flour until just combined. Shape into 30 ovals and press with a fork.',
      'Bake for 25 to 30 minutes until golden.',
      'Simmer the honey, syrup sugar and water for 5 minutes and cool.',
      'Dip the warm biscuits in the cool syrup for 20 seconds. Lift out and sprinkle with the walnuts and cinnamon.'
    ],
    tips: [
      'Do not knead the dough.',
      'Dip warm biscuits in cool syrup.',
      'Leave for a few days to soften.'
    ],
    pair: ['Greek coffee', 'Mulled wine', 'Tea'],
    store: 'Keeps for 2 weeks in a tin.',
    nut: [174, 2, 28, 6, 1, 15, 40]
  },

  'kourabiedes': {
    d: 'Greek butter and almond shortbread crescents baked for 20 minutes and buried in icing sugar.',
    meta: 'Kourabiedes, Greek butter almond shortbread crescents covered in icing sugar, baked for 20 minutes. Thirty biscuits, ready in 45 minutes.',
    kw: ['kourabiedes', 'greek butter cookies', 'greek almond shortbread', 'kourabiedes recipe', 'greek christmas butter biscuits'],
    why: 'The first sign they are ready is the smell: butter and toasted almonds, a little brandy, and a first dusting of snow. Kourabiedes are Greek butter biscuits, crumbly and rich, covered in icing sugar and served at Christmas and weddings. Their texture comes from a great deal of butter, beaten until white.\n\nBeat the softened butter, ideally clarified, with icing sugar for 10 minutes, until it is almost white and doubled in volume. This is the secret of their lightness. Add an egg yolk, brandy and the toasted ground almonds, then fold in the flour just until a soft dough forms. **Do not overwork the dough**, as warmth from your hands melts the butter and the biscuits spread.\n\nShape into small crescents or rounds, press a whole clove in the top of each if you like, and bake at 170C for 20 minutes until pale and just golden at the base. While they are still warm, sift icing sugar generously over them, and again when they are cool. Handle them gently as they are very fragile, and store them in a single layer.',
    ing: [
      '250 g butter, softened',
      '80 g icing sugar',
      '1 egg yolk',
      '2 tbsp brandy',
      '100 g toasted almonds, finely ground',
      '350 g plain flour',
      '1 tsp baking powder',
      '150 g icing sugar, for dusting'
    ],
    st: [
      'Heat the oven to 170C and line two trays.',
      'Beat the butter and 80 g icing sugar for 10 minutes until almost white. Beat in the yolk and brandy.',
      'Fold in the almonds, flour and baking powder to a soft dough.',
      'Shape into 30 crescents and set on the trays. Bake for 20 minutes until pale and gold at the base.',
      'Sift half the dusting sugar over the warm biscuits and the rest when cool.'
    ],
    tips: [
      'Beat the butter until almost white.',
      'Handle the dough lightly.',
      'Dust with sugar twice.'
    ],
    pair: ['Greek coffee', 'Tea', 'Brandy'],
    store: 'Keeps for 3 weeks in a tin, in a single layer.',
    nut: [157, 2, 17, 9, 1, 8, 20]
  },

  'kolokithokeftedes': {
    d: 'Greek courgette fritters with feta, mint and dill, pan fried for 20 minutes until crisp and served with tzatziki.',
    meta: 'Kolokithokeftedes, Greek courgette and feta fritters with mint and dill, cooked for 20 minutes. Six servings, ready in 40 minutes.',
    kw: ['kolokithokeftedes', 'greek courgette fritters', 'zucchini and feta fritters', 'kolokithokeftedes recipe', 'courgette fritters with tzatziki'],
    why: 'A table for six on a hot day in July, when courgettes are plentiful and nobody wants a long cook. Kolokithokeftedes are Greek courgette fritters, flavoured with feta, mint and dill, and fried until crisp outside and moist inside. They are a staple of the taverna menu.\n\nGrate the courgettes on the coarse side and toss them with a teaspoon of salt. Leave them for 10 minutes in a colander, then squeeze hard, wrapped in a clean cloth, until no more water runs out. **This is the step that decides whether the fritters crisp or fall apart**, since the courgettes are nearly all water. Mix with crumbled feta, spring onion, herbs, an egg and enough flour to bind.\n\nFry spoonfuls of the mixture in a pan of hot olive oil for 3 to 4 minutes on each side, pressing them gently flat. They should be deep gold and hold together. Drain on kitchen paper and serve warm with tzatziki and lemon. The feta is salty, so taste the mixture before adding more salt. They also reheat well in a hot oven.',
    ing: [
      '700 g courgettes, coarsely grated',
      '1 tsp salt',
      '150 g feta, crumbled',
      '4 spring onions, finely sliced',
      '2 tbsp chopped fresh mint',
      '2 tbsp chopped fresh dill',
      '1 egg',
      '60 g plain flour',
      '1/2 tsp black pepper',
      '60 ml olive oil absorbed, from 150 ml for frying',
      '200 g tzatziki, to serve'
    ],
    st: [
      'Toss the courgettes with the salt in a colander and leave for 10 minutes. Squeeze very dry in a clean cloth.',
      'Mix the courgettes with the feta, spring onions, mint, dill, egg, flour and pepper.',
      'Heat the oil in a wide pan over medium heat. Drop in spoonfuls and press gently flat.',
      'Fry for 3 to 4 minutes on each side in batches until deep gold. Drain on kitchen paper.',
      'Serve warm with the tzatziki.'
    ],
    tips: [
      'Squeeze the courgettes very dry.',
      'Taste before adding salt, as feta is salty.',
      'Press the fritters flat in the pan.'
    ],
    pair: ['Tzatziki', 'Lemon wedges', 'Greek salad', 'Ouzo'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot oven.',
    nut: [245, 8, 15, 17, 2, 5, 770]
  },

  'bougatsa': {
    d: 'Layers of crisp phyllo pastry around a warm semolina custard, baked for 35 minutes and dusted with icing sugar and cinnamon.',
    meta: 'Bougatsa, Greek phyllo pastry filled with semolina custard, baked for 35 minutes. Eight servings, ready in 1 hour 15 minutes.',
    kw: ['bougatsa', 'greek custard phyllo pie', 'thessaloniki bougatsa', 'bougatsa recipe', 'semolina custard in phyllo'],
    why: 'A breakfast from the streets of Thessaloniki, eaten at dawn from a paper plate with icing sugar on top. Bougatsa is a Greek pastry of paper thin phyllo wrapped around a semolina custard, and the contrast between crisp layers and soft cream is what makes it so good.\n\nThe custard is made with milk, sugar, semolina, butter, eggs and vanilla. Bring the milk to a simmer, whisk in the semolina and sugar, and stir over low heat for about 8 minutes until thick. Take it off the heat, stir in the butter, vanilla and lightly beaten eggs, and cool for 10 minutes. **Do not add the eggs while the custard is boiling hot**, or they scramble. Lay out the phyllo and cover it with a damp cloth to stop it drying.\n\nBrush each sheet with melted butter, stacking 6 sheets in the tin. Spread the custard over, cover with 6 more buttered sheets and tuck in the edges. Score the top into squares and bake at 180C for 35 minutes, until the pastry is deep gold and crisp. Dust generously with icing sugar and cinnamon and cut into squares while it is still warm.',
    ing: [
      '1 litre whole milk',
      '150 g caster sugar',
      '120 g fine semolina',
      '60 g butter, for the custard',
      '3 eggs, beaten',
      '1 tsp vanilla extract',
      '300 g phyllo pastry, 12 sheets',
      '100 g butter, melted',
      '3 tbsp icing sugar',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the milk to a simmer, whisk in the semolina and sugar and stir over low heat for 8 minutes until thick. Off the heat, stir in the butter and vanilla and cool for 10 minutes. Beat in the eggs.',
      'Heat the oven to 180C. Brush a 30 x 25 cm tin with butter. Layer 6 phyllo sheets in the tin, brushing each with melted butter.',
      'Spread the custard over the phyllo. Cover with 6 more buttered sheets and tuck in the edges.',
      'Score the top into squares and brush with butter. Bake for 35 minutes until deep gold.',
      'Dust with the icing sugar and cinnamon and cut into squares.'
    ],
    tips: [
      'Cover the phyllo with a damp cloth.',
      'Cool the custard before adding eggs.',
      'Score the top before baking.'
    ],
    pair: ['Greek coffee', 'Tea', 'Orange juice'],
    store: 'Best fresh, the same day.',
    nut: [499, 12, 61, 23, 1, 31, 190]
  },

  'koulouri': {
    d: 'Greek sesame bread rings, risen for 1 hour, dipped in sesame seeds and baked for 25 minutes, the Thessaloniki street snack.',
    meta: 'Koulouri, Greek sesame bread rings from Thessaloniki, baked for 25 minutes at 220C. Six servings, ready in 50 minutes plus rising.',
    kw: ['koulouri', 'greek sesame bread ring', 'koulouri thessalonikis', 'sesame bread rings recipe', 'greek street bread'],
    why: 'What do you buy for breakfast in Thessaloniki? A koulouri, a ring of bread covered with sesame seeds and sold from carts at every corner. It is chewy, lightly sweet and savoury at once, and eaten with a coffee on the walk to work.\n\nThe dough is simple: flour, water, yeast, a little sugar and salt, kneaded for 8 minutes until smooth, then left to rise for 1 hour. Divide it into six pieces and roll each into a rope about 50 cm long. **Roll the two halves of the rope together, twisting**, then join the ends into a ring, pinching firmly so the ring does not come apart in the oven.\n\nMake a dip of grape molasses or honey mixed with water. Dip each ring in it, then press the wet ring into a tray of sesame seeds, coating both sides. Leave the rings to rise for 15 minutes on a tray, then bake at 220C for 25 minutes, until deep gold. Eat them warm, plain or with a piece of feta.',
    ing: [
      '500 g strong bread flour',
      '300 ml lukewarm water',
      '7 g instant yeast',
      '1 tbsp caster sugar',
      '1 tsp salt',
      '2 tbsp olive oil',
      '3 tbsp honey or grape molasses',
      '3 tbsp water',
      '100 g sesame seeds'
    ],
    st: [
      'Mix the flour, lukewarm water, yeast, sugar, salt and oil and knead for 8 minutes. Cover and leave to rise for 1 hour.',
      'Divide into 6 and roll each into a 50 cm rope. Fold in half, twist the halves together and join the ends into a ring, pinching firmly.',
      'Mix the honey and 3 tablespoons of water. Dip each ring in it and press into the sesame seeds on both sides.',
      'Set on lined trays and leave for 15 minutes. Heat the oven to 220C.',
      'Bake for 25 minutes until deep gold.'
    ],
    tips: [
      'Pinch the ends of the ring tightly.',
      'Coat both sides with sesame seeds.',
      'Eat while warm.'
    ],
    pair: ['Feta', 'Greek coffee', 'Olives'],
    store: 'Best the day they are made. Freeze for 1 month.',
    rest: [75, 'Rising'],
    nut: [400, 11, 53, 16, 5, 12, 810]
  },

  'psari-plaki': {
    d: 'White fish baked on a bed of tomatoes, onions, garlic, potatoes and parsley with olive oil and lemon, ready in 1 hour.',
    meta: 'Psari plaki, Greek fish baked with tomatoes, onions, garlic and lemon, cooked for 40 minutes. Four servings, ready in 1 hour.',
    kw: ['psari plaki', 'greek baked fish', 'baked fish with tomatoes and onions', 'plaki fish recipe', 'greek fish in tomato sauce'],
    why: 'Short and sharp: layer the vegetables, lay the fish on top and bake. Psari plaki, Greek baked fish, is one of the easiest and most common of Greek family dishes, a dish of fish baked on a layer of vegetables with olive oil and lemon, and everything cooks in the same dish.\n\nSlice the onions and potatoes thinly and spread them in the dish with the garlic and tomatoes. Season well and pour over a generous amount of olive oil. **Bake the vegetables for 15 minutes before adding the fish**, so the potatoes have a head start. They take longer than the fish, and the dish is spoiled if the fish is cooked and the potatoes are hard.\n\nLay the fish fillets or steaks on top, spoon the vegetables around, squeeze lemon over and bake at 200C for 20 to 25 minutes more, until the fish flakes at the thickest part. Scatter with parsley. Use a firm white fish such as cod, haddock, sea bass or hake. Serve in the dish, with bread to mop up the oil and tomato juices.',
    ing: [
      '700 g firm white fish fillets',
      '4 tbsp olive oil',
      '2 onions, thinly sliced',
      '400 g potatoes, thinly sliced',
      '4 garlic cloves, sliced',
      '500 g ripe tomatoes, sliced',
      '1 tsp dried oregano',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, juice',
      '4 tbsp chopped parsley'
    ],
    st: [
      'Heat the oven to 200C. Spread the onions, potatoes, garlic and tomatoes in a large baking dish. Season with the oregano, salt and pepper and pour over the oil.',
      'Bake for 15 minutes.',
      'Lay the fish on top, spoon over some of the vegetables and squeeze over the lemon juice.',
      'Bake for 20 to 25 minutes more until the fish flakes.',
      'Scatter with the parsley and serve from the dish.'
    ],
    tips: [
      'Give the potatoes a head start.',
      'Use a firm white fish.',
      'Serve with bread for the juices.'
    ],
    pair: ['Crusty bread', 'Greek salad', 'Dry white wine'],
    store: 'Keeps for 1 day in the fridge.',
    nut: [408, 36, 30, 16, 5, 7, 710]
  }
};
