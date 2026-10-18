'use strict';

/**
 * Volume fifty-nine, first part: Italian puddings and festival sweets, snacks
 * and fried dough, then pasta, gnocchi and risotto. Waits of an hour or more
 * are declared as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'bonet': {
    d: 'A Piedmont baked custard of eggs, milk, cocoa and crushed amaretti, set over a caramel and chilled for 4 hours before turning out.',
    meta: 'Bonet, Piedmont chocolate and amaretti pudding set over caramel, baked for 45 minutes. Eight servings, ready in 1 hour 5 minutes plus chilling.',
    kw: ['bonet', 'piedmont chocolate pudding', 'bonet amaretti pudding', 'italian chocolate caramel custard', 'amaretti chocolate pudding'],
    why: 'Bonet is a pudding named, it is said, after a hat, because the mould it sets in is round and dome shaped. It is the Piedmont answer to crème caramel, with cocoa and crushed amaretti biscuits in the custard.\n\nThe custard is made by whisking eggs and sugar, then stirring in warm milk, cocoa and the biscuits. **Bake it in a water bath**, standing the mould in a roasting tin of hot water, because direct heat curdles eggs and leaves holes. Pour the caramel into the mould first and swirl it to coat the base before the custard goes in.\n\nIt is ready when the edges are set and the centre still wobbles like a jelly. Cool it, then chill for at least 4 hours so it firms enough to hold its shape. Run a knife round the edge, put a plate over the mould and turn both over together. The caramel runs down the sides. Serve in slices with a little cream.',
    ing: [
      '150 g caster sugar, for the caramel',
      '4 eggs',
      '100 g caster sugar',
      '500 ml whole milk',
      '30 g cocoa powder',
      '80 g amaretti biscuits, crushed',
      '2 tbsp rum or strong coffee',
      '100 ml double cream, to serve'
    ],
    st: [
      'Heat the oven to 160C. Melt the 150 g sugar in a pan until amber and pour it into a 1.2 litre mould, swirling to coat the base.',
      'Whisk the eggs and 100 g sugar until pale. Warm the milk and whisk it in with the cocoa, amaretti and rum.',
      'Pour into the mould and stand it in a roasting tin. Pour in hot water to come halfway up the sides.',
      'Bake for 45 minutes until set at the edges with a slight wobble in the centre.',
      'Cool, then chill for 4 hours.',
      'Run a knife round, turn out onto a plate and serve in slices with the cream.'
    ],
    tips: [
      'Bake in a water bath so the custard stays smooth.',
      'Chill for at least 4 hours before turning out.',
      'Swirl the caramel quickly, as it sets fast.'
    ],
    pair: ['Pouring cream', 'Espresso', 'Sweet wine'],
    store: 'Keeps for 3 days in the fridge, covered.',
    rest: [240, 'Chilling'],
    nut: [303, 7, 44, 11, 2, 40, 70]
  },

  'frittelle-di-carnevale': {
    d: 'Small Italian fritters of a thick batter with raisins and lemon, fried until puffed and golden and rolled in sugar, in 35 minutes.',
    meta: 'Frittelle di carnevale, fried batter fritters with raisins and lemon, cooked for 15 minutes. Six servings, ready in 55 minutes.',
    kw: ['frittelle di carnevale', 'italian carnival fritters', 'raisin fritters with lemon', 'italian fried sweet fritters', 'carnival fritters recipe'],
    why: 'Frittelle di carnevale means carnival fritters, and that is all the recipe says about them: they are made in the weeks before Lent, from a simple batter, and eaten hot with sugar. The batter is thick, closer to a drop scone mixture than a pancake, and the raisins are plumped in rum or warm water first.\n\nMix the flour, sugar, eggs, milk and yeast or baking powder, add the lemon zest and the drained raisins, and rest the batter for 20 minutes. **Keep the oil at about 170C**, hot enough to puff the fritters in 3 minutes but not so hot that the outsides burn before the middles are done. Drop in tablespoons and turn them once.\n\nThey are ready when they are deep gold all over and feel light for their size. Drain on kitchen paper and roll them in sugar while they are warm. Eat them at once. If you break one open and the centre is doughy, the oil was too hot, so turn it down for the next batch.',
    ing: [
      '250 g plain flour',
      '50 g caster sugar',
      '2 eggs',
      '200 ml milk',
      '2 tsp baking powder',
      '80 g raisins, soaked in warm water for 10 minutes',
      '1 lemon, zest',
      '1 pinch salt',
      '50 ml rapeseed oil absorbed, from 700 ml for frying',
      '60 g caster sugar, for rolling'
    ],
    st: [
      'Mix the flour, sugar, baking powder and salt. Whisk in the eggs and milk to a thick batter, then stir in the drained raisins and lemon zest. Rest for 20 minutes.',
      'Heat the oil to 170C in a deep pan.',
      'Drop in tablespoons of batter, 5 at a time, and fry for 3 minutes, turning once, until deep gold.',
      'Drain on kitchen paper and roll in the caster sugar while warm.'
    ],
    tips: [
      'Hold the oil near 170C for fritters that cook through.',
      'Fry in small batches so the oil stays hot.',
      'Roll in sugar straight after draining.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Vin santo'],
    store: 'Best fresh. They keep a few hours at room temperature.',
    nut: [387, 8, 64, 11, 2, 28, 220]
  },

  'chiacchiere': {
    d: 'Thin ribbons of sweet dough fried until they blister and crisp, then dusted with icing sugar, in 50 minutes.',
    meta: 'Chiacchiere, crisp fried carnival pastry ribbons dusted with icing sugar, cooked for 10 minutes. Eight servings, ready in 1 hour 10 minutes.',
    kw: ['chiacchiere', 'italian carnival pastry', 'fried pastry ribbons', 'angel wings pastry italian', 'chiacchiere recipe'],
    why: 'It looks like a ribbon of pastry and shatters like glass, which is the whole appeal. Chiacchiere, whose name means chatter, are the thin fried ribbons of dough sold across Italy at carnival time, and what makes them good is how thin they are rolled.\n\nThe dough is flour, sugar, eggs, butter and a splash of grappa or white wine, which helps it blister in the oil. Knead it for 5 minutes until smooth, then rest it for 20 minutes so it rolls easily. **Roll it until you can see the work surface through it**, a little over 1 mm, using a pasta machine if you have one. Thick dough comes out hard and bready.\n\nCut it into strips, make a slit in the middle of each and fry in oil at 170C for about 1 minute a side. They colour fast, so do not leave the pan. Drain on kitchen paper, cool, and dust heavily with icing sugar just before you serve them.',
    ing: [
      '300 g plain flour',
      '40 g caster sugar',
      '2 eggs',
      '40 g butter, softened',
      '2 tbsp grappa or white wine',
      '1 pinch salt',
      '40 ml rapeseed oil absorbed, from 700 ml for frying',
      '40 g icing sugar'
    ],
    st: [
      'Mix the flour, sugar, salt, eggs, butter and grappa and knead for 5 minutes into a smooth dough. Rest for 20 minutes.',
      'Roll the dough very thin in batches and cut into strips 3 cm wide and 12 cm long. Make a slit in the middle of each.',
      'Heat the oil to 170C. Fry 4 or 5 strips at a time for 1 minute on each side until pale gold and blistered.',
      'Drain on kitchen paper and cool completely.',
      'Dust with the icing sugar just before serving.'
    ],
    tips: [
      'Roll the dough very thin for a crisp ribbon.',
      'Watch the pan, as thin dough browns in seconds.',
      'Add the icing sugar at the last moment.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Sweet wine'],
    store: 'Keeps for 3 days in a tin, undusted.',
    nut: [266, 5, 39, 10, 1, 10, 40]
  },

  'castagnole': {
    d: 'Little round Italian doughnuts of a soft batter with lemon and orange zest, fried for 15 minutes and rolled in sugar.',
    meta: 'Castagnole, little fried carnival doughnuts with citrus zest rolled in sugar, cooked for 15 minutes. Eight servings, ready in 1 hour.',
    kw: ['castagnole', 'italian carnival doughnuts', 'fried dough balls rolled in sugar', 'castagnole recipe', 'italian dough balls'],
    why: 'Why do these puff up round and hollow? Because the batter has just enough egg to steam inside while the outside sets. Castagnole are small fried dough balls, so called because they are said to look like chestnuts, and they are among the easiest of the carnival sweets.\n\nThe dough is soft and slightly sticky, made with flour, sugar, eggs, butter and baking powder, and flavoured with lemon and orange zest. Do not add extra flour, as it makes them dense. **Chill the dough for 20 minutes** so that it is firm enough to roll into walnut sized balls with floured hands.\n\nFry them in oil at 170C for about 3 minutes, turning them often, until deep gold and puffed. If the oil is too hot, they brown outside while the centre is raw. Drain and roll in caster sugar while warm. A spoonful of rum in the dough is traditional, and a dusting of icing sugar will do in place of the caster sugar.',
    ing: [
      '250 g plain flour',
      '50 g caster sugar',
      '2 eggs',
      '50 g butter, melted',
      '2 tsp baking powder',
      '1 lemon, zest',
      '1 orange, zest',
      '1 tbsp rum',
      '50 ml rapeseed oil absorbed, from 700 ml for frying',
      '60 g caster sugar, for rolling'
    ],
    st: [
      'Mix the flour, sugar, baking powder and zests. Add the eggs, butter and rum and stir to a soft dough. Chill for 20 minutes.',
      'Roll the dough into 24 balls the size of a walnut, with floured hands.',
      'Heat the oil to 170C in a deep pan. Fry 6 at a time for 3 minutes, turning, until deep gold.',
      'Drain on kitchen paper and roll in the caster sugar while warm.'
    ],
    tips: [
      'Do not add extra flour, or the balls turn heavy.',
      'Keep the oil near 170C so the middle cooks.',
      'Turn the balls often for an even colour.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Vin santo'],
    store: 'Best the day they are made. Keep 1 day in a tin.',
    nut: [292, 5, 41, 12, 2, 16, 140]
  },

  'torrone': {
    d: 'A chewy Italian nougat of honey, sugar, egg whites and almonds, set between wafer sheets for 6 hours and cut into slices.',
    meta: 'Torrone, chewy Italian nougat with honey and almonds between wafer sheets, cooked for 25 minutes. Sixteen servings, ready in 55 minutes plus setting.',
    kw: ['torrone', 'italian nougat', 'homemade torrone', 'honey almond nougat', 'torrone recipe'],
    why: 'A recipe for patient people, and a good one for a gift. Torrone is the Italian nougat made at Christmas, a pale, chewy slab of honey, sugar and whipped egg white packed with whole almonds, and cut into thick slices.\n\nIt calls for a sugar thermometer. Boil the honey and sugar separately to the right temperatures, 120C for the honey and 145C for the sugar syrup, and beat them into whisked egg whites in turn. **The temperatures decide the texture**, as a lower sugar syrup gives a soft nougat that will not set, and a higher one gives something you could break a tooth on. Stir in the warm almonds and vanilla.\n\nPress the mixture between two sheets of wafer paper in a lined tin, weigh it down and leave it for at least 6 hours to set. Cut it with a large, oiled knife. It keeps for weeks wrapped in baking paper, and the flavour mellows with a few days.',
    ing: [
      '300 g honey',
      '300 g caster sugar',
      '100 ml water',
      '2 egg whites',
      '400 g whole blanched almonds, warmed',
      '1 tsp vanilla extract',
      '40 g rice paper or wafer paper'
    ],
    st: [
      'Line a 20 cm square tin with a sheet of wafer paper (or rice paper).',
      'Warm the honey in a heatproof bowl over simmering water, stirring, until it reaches 120C.',
      'Boil the sugar and water in a pan to 145C.',
      'Whisk the egg whites to stiff peaks, whisk in the hot honey in a thin stream, then the sugar syrup, and beat for 8 minutes until thick and glossy.',
      'Fold in the almonds and vanilla and pack into the tin. Cover with the second sheet of wafer paper (or rice paper) and press with a weight.',
      'Leave to set for 6 hours, then cut in thick slices with an oiled knife.'
    ],
    tips: [
      'Use a sugar thermometer for the two temperatures.',
      'Warm the almonds so they do not cool the mixture.',
      'Oil the knife for clean slices.'
    ],
    pair: ['Espresso', 'Dessert wine', 'A gift box'],
    store: 'Keeps for 4 weeks wrapped in baking paper in a cool place.',
    rest: [360, 'Setting'],
    nut: [309, 6, 42, 13, 3, 36, 10]
  },

  'brutti-ma-buoni': {
    d: 'Rough Italian hazelnut meringue biscuits, chewy inside and crisp outside, baked for 30 minutes at 150C.',
    meta: 'Brutti ma buoni, Italian hazelnut meringue biscuits, baked for 30 minutes at 150C. Twenty servings, ready in 40 minutes.',
    kw: ['brutti ma buoni', 'italian hazelnut meringues', 'ugly but good biscuits', 'hazelnut meringue cookies', 'brutti ma buoni recipe'],
    why: 'Brutti ma buoni means ugly but good, and the name tells you what to expect: lumpy, uneven biscuits that taste far better than they look. They are made from only four ingredients, egg whites, sugar, hazelnuts and vanilla, and contain no flour or butter.\n\nToast the hazelnuts first until their skins loosen, rub off what skin you can and chop them roughly, not fine. A mix of coarse and fine pieces gives the chew. Whisk the egg whites with the sugar until thick and glossy but not stiff. **Fold the nuts in gently**, then spoon heaps onto lined trays with a gap between them.\n\nBake at 150C for 30 minutes, until the outsides are dry and the biscuits lift off the paper easily. They will still be soft inside, and they firm as they cool. Leave them on the tray for 10 minutes before moving. Stored airtight, they stay chewy for a week.',
    ing: [
      '200 g whole hazelnuts',
      '3 egg whites',
      '150 g caster sugar',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Heat the oven to 150C and line two trays. Toast the hazelnuts on a tray for 8 minutes, rub off the skins and chop roughly.',
      'Whisk the egg whites and salt to soft peaks, then whisk in the sugar a spoonful at a time until thick and glossy. Add the vanilla.',
      'Fold in the nuts and spoon 20 heaps onto the trays, well apart.',
      'Bake for 30 minutes until dry outside and lifting off the paper easily.',
      'Cool on the trays for 10 minutes.'
    ],
    tips: [
      'Chop the nuts coarsely for a better chew.',
      'Do not whisk the whites to stiff peaks.',
      'Leave the biscuits to firm up on the tray.'
    ],
    pair: ['Espresso', 'Dessert wine', 'Vanilla ice cream'],
    store: 'Keeps for 1 week airtight.',
    nut: [98, 2, 9, 6, 1, 8, 20]
  },

  'fave-e-cicoria': {
    d: 'A Puglian purée of dried split broad beans with bitter wild or garden chicory and olive oil, simmered for 45 minutes after an overnight soak.',
    meta: 'Fave e cicoria, Puglian broad bean purée with chicory and olive oil, cooked for 45 minutes. Four servings, ready in 55 minutes plus soaking.',
    kw: ['fave e cicoria', 'puglian broad bean puree', 'broad beans with chicory', 'fava bean puree with greens', 'italian dried fava recipe'],
    why: 'Most home versions come out gritty, and the fix is to soak the beans overnight and cook them until they fall apart. Fave e cicoria is a southern Italian dish of dried split broad beans mashed to a smooth purée and served with bitter greens, and it is simple, cheap and filling.\n\nUse peeled split broad beans, which are the kind sold as fave secche. Drain them after soaking and simmer in fresh water with a potato, which makes the purée creamier. **Skim the foam that rises in the first 10 minutes**, as it can taste harsh. They are done when you can crush them against the side of the pan with a spoon.\n\nBoil the chicory separately in salted water for 5 minutes, until tender but still a little bitter. Beat the beans smooth with a whisk and a good glug of olive oil, season with salt, and serve in a bowl with the chicory beside it and more oil on top. Fried bread or raw onion is common on the side.',
    ing: [
      '300 g dried split peeled broad beans',
      '1 potato, 150 g, peeled and diced',
      '800 g chicory or dandelion leaves',
      '5 tbsp olive oil',
      '1 tsp salt',
      '2 garlic cloves, sliced',
      '1/4 tsp chilli flakes'
    ],
    st: [
      'Soak the beans overnight in plenty of cold water. Drain.',
      'Put the beans and potato in a pan with 1.2 litres of fresh water and bring to the boil. Skim, then simmer for 45 minutes until the beans fall apart.',
      'Boil the chicory in salted water for 5 minutes. Drain well.',
      'Beat the beans and potato smooth with a whisk, adding 3 tablespoons of the oil and the salt.',
      'Fry the garlic and chilli in the remaining oil for 1 minute and spoon over the chicory. Serve beside the purée.'
    ],
    tips: [
      'Skim the foam from the beans.',
      'Add a potato for a creamier purée.',
      'Leave the chicory slightly bitter, as that balances the beans.'
    ],
    pair: ['Fried bread', 'Raw onion', 'Roasted peppers', 'Olives'],
    store: 'Keeps for 3 days in the fridge. The purée thickens, so loosen with water.',
    rest: [480, 'Soaking'],
    nut: [290, 8, 24, 18, 11, 3, 650]
  },

  'burrata-with-tomatoes': {
    d: 'A ball of creamy burrata on ripe tomatoes with basil, olive oil and flaky salt, put together in 10 minutes with no cooking.',
    meta: 'Burrata with tomatoes, creamy burrata on ripe tomatoes with basil and olive oil, ready in 10 minutes. Four servings, no cooking.',
    kw: ['burrata with tomatoes', 'burrata and tomato salad', 'burrata with basil and olive oil', 'italian burrata starter', 'simple burrata salad'],
    why: 'Burrata means buttered in Italian, and that describes the filling: a shell of fresh mozzarella wrapped around soft stracciatella and cream. When you cut it open, the inside spills over the plate, and the tomatoes soak it up.\n\nThe whole dish rests on the tomatoes, so buy the best you can find, ripe and fragrant, and never keep them in the fridge, which makes them mealy. Slice them thick, lay them on a plate and salt them well. **Leave the salted tomatoes for 10 minutes**, so they release their juice, which becomes the dressing. Taste one: it should be sweet and a little savoury.\n\nTake the burrata out of its brine and let it come to room temperature, as it tastes of more. Drain it on kitchen paper, set it in the middle, tear it open at the table and spoon the cream over. Finish with torn basil, good olive oil and black pepper. Eat with crusty bread.',
    ing: [
      '600 g ripe tomatoes, sliced',
      '2 burrata, about 125 g each',
      '1 tsp flaky salt',
      '4 tbsp extra virgin olive oil',
      '10 g basil leaves',
      '1/2 tsp black pepper',
      '4 slices crusty bread'
    ],
    st: [
      'Slice the tomatoes thickly and lay them on a large plate. Sprinkle with the salt and leave for 10 minutes.',
      'Drain the burrata on kitchen paper and set them in the middle of the tomatoes.',
      'Tear the burrata open, spoon the cream over the tomatoes and drizzle with the oil.',
      'Scatter with the basil and pepper and serve with the bread.'
    ],
    tips: [
      'Never chill the tomatoes.',
      'Let the burrata reach room temperature before serving.',
      'Add the basil at the last moment so it stays green.'
    ],
    pair: ['Crusty bread', 'Cured ham', 'Dry white wine'],
    store: 'Eat on the day it is made.',
    nut: [405, 14, 22, 29, 3, 6, 930]
  },

  'pizza-fritta': {
    d: 'Pizza dough pressed into discs, fried until puffed and topped with tomato, mozzarella and basil, after a 1 hour rise.',
    meta: 'Pizza fritta, Neapolitan fried pizza discs with tomato, mozzarella and basil, cooked for 10 minutes. Four servings, ready in 50 minutes plus rising.',
    kw: ['pizza fritta', 'neapolitan fried pizza', 'fried pizza dough', 'fried pizza with tomato and mozzarella', 'pizza fritta recipe'],
    why: 'Fried pizza is the street food of Naples, and the name does not hide what it is: a disc of pizza dough fried in oil instead of baked. The dough puffs into a soft, blistered pillow with a crisp skin, and the topping goes on afterwards, because it would slide off in the pan.\n\nUse a soft, well risen dough made from flour, water, yeast and salt, and let it double, about an hour in a warm room. Divide it into four, rest the balls for 10 minutes and stretch them by hand to about 20 cm. **Do not roll them out**, as a rolling pin knocks the air out and they come out flat. They should feel light and springy.\n\nFry one at a time in oil at 180C for about 2 minutes a side, until gold and puffed. Drain, then spoon on hot tomato sauce, tear over mozzarella, sprinkle with Parmesan and basil. The cheese melts from the heat of the dough. Serve at once, with a fork and knife or folded in two.',
    ing: [
      '300 g strong bread flour',
      '190 ml lukewarm water',
      '1 tsp salt',
      '3 g instant yeast',
      '80 ml rapeseed oil absorbed, from 1 litre for frying',
      '200 g tomato passata, seasoned and warmed',
      '150 g mozzarella, torn',
      '20 g grated Parmesan',
      '8 g basil leaves'
    ],
    st: [
      'Mix the flour, water, salt and yeast and knead for 8 minutes until smooth. Cover and leave for 1 hour until doubled.',
      'Divide into 4 balls and rest for 10 minutes. Stretch each by hand to 20 cm.',
      'Heat the oil to 180C in a wide deep pan. Fry one at a time for 2 minutes on each side until puffed and gold. Drain.',
      'Top each with the warm passata, mozzarella, Parmesan and basil and serve at once.'
    ],
    tips: [
      'Stretch by hand rather than rolling.',
      'Fry one at a time so the oil stays hot.',
      'Add the cheese straight from the pan so it melts.'
    ],
    pair: ['Green salad', 'Cold beer', 'Cured ham'],
    store: 'Best eaten at once.',
    rest: [60, 'Rising'],
    nut: [515, 18, 41, 31, 3, 6, 1310]
  },

  'pinsa-romana': {
    d: 'An oval Roman flatbread with a light crisp crust, from a wet dough risen for 2 hours, baked for 15 minutes with a simple topping.',
    meta: 'Pinsa romana, oval Roman flatbread with a light crisp crust and a simple topping, baked for 15 minutes. Four servings, ready in 35 minutes plus rising.',
    kw: ['pinsa romana', 'roman pinsa', 'pinsa dough', 'oval italian flatbread pizza', 'pinsa recipe at home'],
    why: 'Flour, water, yeast, salt: four things, a very wet dough and a long wait. Pinsa romana is an oval flatbread that is lighter than pizza and crisper than focaccia, and the character comes from how much water goes into the dough.\n\nA pinsa dough is about 80 per cent water to flour, which is why it is airy inside. Mix it with a spoon, fold it over itself every 30 minutes, then let it rise for 2 hours. **Handle it with wet or oiled hands**, as it will stick to anything dry. Stretch it gently into ovals about 25 cm long without pressing the air out.\n\nBake at the highest setting your oven allows, on a preheated tray or stone, for about 15 minutes at 250C, until the crust is blistered and the base is crisp. Add toppings sparingly. Burrata and cherry tomatoes, or mortadella and pistachios, are common and they go on after baking so the base stays crisp.',
    ing: [
      '400 g strong bread flour',
      '320 ml cold water',
      '8 g salt',
      '2 g instant yeast',
      '3 tbsp olive oil',
      '200 g cherry tomatoes, halved',
      '125 g burrata',
      '10 g basil leaves'
    ],
    st: [
      'Stir the flour, water, salt and yeast together with a spoon for 3 minutes. Cover.',
      'Leave the dough to rise for 2 hours, folding it over itself with a wet hand every 30 minutes.',
      'Heat the oven with a tray inside to 250C. Divide the dough into 4 and stretch each into an oval about 25 cm long.',
      'Brush with the oil, lay on the hot tray and bake for 15 minutes until blistered and crisp at the base.',
      'Top with the tomatoes, burrata and basil.'
    ],
    tips: [
      'Use wet hands, as the dough is very sticky.',
      'Stretch gently so you keep the air.',
      'Add wet toppings after baking.'
    ],
    pair: ['Rocket salad', 'Prosciutto', 'Cold beer'],
    store: 'Best fresh. Reheat in a hot oven for 5 minutes.',
    rest: [120, 'Rising'],
    nut: [444, 14, 52, 20, 4, 7, 1370]
  },

  'gnocco-fritto': {
    d: 'Puffed diamonds of fried dough from Emilia, eaten hot with cured ham and soft cheese, ready in 55 minutes.',
    meta: 'Gnocco fritto, puffed fried dough diamonds from Emilia served with cured meat, cooked for 15 minutes. Six servings, ready in 55 minutes.',
    kw: ['gnocco fritto', 'fried dough diamonds emilia', 'gnocco fritto with prosciutto', 'italian fried bread puffs', 'emilian fried dough'],
    why: 'A table of six, a plate of cured ham and a basket of hot gnocco fritto: that is how this is eaten in Emilia, as the starter of a meal and the first thing to disappear. It is a diamond of dough fried until it puffs into a hollow pillow.\n\nThe dough is flour, water, a little lard, yeast and salt, left to rest for 20 minutes. Roll it to about 3 mm thick, as thin dough fries crisp and thick dough stays doughy. **Cut it into diamonds with a knife or a wheel**, then fry in oil at 180C for about 1 minute a side. They puff within seconds and turn pale gold.\n\nDrain them on kitchen paper and sprinkle with salt. They are eaten at once, while they are hot enough to melt the slices of prosciutto or salami laid on top, with soft cheese or pickled vegetables beside. If they go cold they turn tough, so fry in batches and serve as you go.',
    ing: [
      '400 g plain flour',
      '200 ml lukewarm water',
      '40 g lard or butter, softened',
      '5 g instant yeast',
      '1 tsp salt',
      '60 ml rapeseed oil absorbed, from 800 ml for frying',
      '150 g prosciutto',
      '150 g stracchino or soft cheese'
    ],
    st: [
      'Mix the flour, water, lard, yeast and salt and knead for 5 minutes. Rest for 20 minutes.',
      'Roll out 3 mm thick and cut into diamonds about 6 cm across.',
      'Heat the oil to 180C. Fry 5 or 6 diamonds at a time for 1 minute on each side until puffed and pale gold.',
      'Drain on kitchen paper and sprinkle with salt. Serve at once with the prosciutto and cheese.'
    ],
    tips: [
      'Roll the dough thin so it puffs and crisps.',
      'Fry in small batches to keep the oil hot.',
      'Serve at once, as they toughen when cold.'
    ],
    pair: ['Prosciutto', 'Salami', 'Soft cheese', 'Pickled vegetables'],
    store: 'Best fresh. The dough keeps for 1 day in the fridge.',
    nut: [505, 18, 52, 25, 2, 1, 1020]
  },

  'spaghetti-alla-nerano': {
    d: 'Spaghetti with fried courgette slices and provolone del Monaco melted into the pasta water, made in 35 minutes.',
    meta: 'Spaghetti alla nerano, spaghetti with fried courgettes and melted provolone, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['spaghetti alla nerano', 'courgette and provolone spaghetti', 'zucchini spaghetti with provolone', 'amalfi coast pasta', 'spaghetti with fried courgettes'],
    why: 'Fry the courgettes in batches and do not crowd the pan. That one instruction is the difference between golden, sweet slices and grey, watery ones, and it is the main skill in spaghetti alla nerano.\n\nSlice the courgettes into thin coins, salt them and leave them for 10 minutes to shed water, then pat them dry. Fry in olive oil until they are deep gold at the edges, in two or three batches. **Set a few slices aside for the top**, and mash the rest into the sauce as they cook down with basil.\n\nBoil the spaghetti until a minute short of done and finish it in the pan with the courgettes and a ladle of pasta water. Off the heat, stir in grated provolone and Parmesan, which melt into a glossy cream. The cheese is the point of the dish. If it clumps, a splash more water will loosen it. Serve at once, as the sauce tightens as it stands.',
    ing: [
      '400 g spaghetti',
      '700 g courgettes, thinly sliced',
      '60 ml olive oil absorbed, from 120 ml for frying',
      '2 garlic cloves',
      '15 g basil leaves',
      '80 g provolone, grated',
      '40 g grated Parmesan',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Salt the courgettes and leave for 10 minutes. Pat dry.',
      'Fry the courgettes in the oil in 3 batches over medium high heat for 4 minutes each, until golden. Drain.',
      'Boil the spaghetti in salted water until 1 minute short of done. Keep 250 ml of the water.',
      'Toss the spaghetti in a wide pan with most of the courgettes, the garlic, half the basil and 100 ml of the water.',
      'Off the heat stir in the provolone and Parmesan, adding water until creamy. Top with the reserved courgettes, basil and pepper.'
    ],
    tips: [
      'Fry the courgettes in batches for colour.',
      'Take the pan off the heat before adding the cheese.',
      'Loosen the sauce with pasta water if it clumps.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Crusty bread'],
    store: 'Best fresh. Reheat with a splash of water.',
    nut: [640, 24, 82, 24, 5, 8, 900]
  },

  'pasta-con-le-zucchine': {
    d: 'Short pasta tossed with sweet softened courgettes, garlic, basil and Parmesan, ready in 30 minutes.',
    meta: 'Pasta con le zucchine, short pasta with softened courgettes, garlic, basil and Parmesan, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['pasta con le zucchine', 'courgette pasta', 'zucchini pasta italian', 'pasta with courgettes and parmesan', 'summer courgette pasta'],
    why: 'Cook the courgettes longer than you think. That is the secret of pasta con le zucchine, a dish that works only when the vegetable has gone past crisp, to soft, sweet and almost jammy.\n\nCut the courgettes into small cubes, so they cook evenly, and fry them in olive oil with garlic over a medium heat for 12 minutes. **Do not stir all the time**, since the pieces need to touch the pan to colour. Add a splash of the pasta water and crush some pieces with a spoon, which makes a sauce without cream.\n\nBoil the pasta until just tender and finish it in the pan with the courgettes and a ladle of cooking water. Take it off the heat, add a handful of grated Parmesan and torn basil and toss until glossy. The dish is a family weekday supper and is best the moment it is cooked. A little lemon zest sharpens it.',
    ing: [
      '400 g short pasta, such as penne',
      '700 g courgettes, diced',
      '4 tbsp olive oil',
      '2 garlic cloves, sliced',
      '10 g basil leaves, torn',
      '60 g grated Parmesan',
      '1 lemon, zest',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oil in a wide pan over medium heat and fry the courgettes with the garlic and half the salt for 12 minutes, until soft and golden at the edges.',
      'Boil the pasta in salted water until tender. Keep 200 ml of the water, then drain.',
      'Add the pasta to the courgettes with 100 ml of the water and crush some of the courgettes with a spoon.',
      'Off the heat add the Parmesan, basil, lemon zest and pepper and toss, adding water to loosen.'
    ],
    tips: [
      'Let the courgettes colour before stirring.',
      'Crush some pieces to make a sauce.',
      'Add the cheese off the heat.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Dry white wine'],
    store: 'Best fresh. Keeps for 2 days in the fridge.',
    nut: [596, 21, 83, 20, 6, 8, 840]
  },

  'pasta-ai-quattro-formaggi': {
    d: 'Pasta in a quick sauce of four Italian cheeses melted with cream, in 20 minutes.',
    meta: 'Pasta ai quattro formaggi, pasta in a quick sauce of four Italian cheeses and cream, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['pasta ai quattro formaggi', 'four cheese pasta', 'italian four cheese sauce', 'creamy four cheese pasta', 'quattro formaggi pasta sauce'],
    why: 'Why does a cheese sauce turn stringy or grainy? Because it was heated too hard. Pasta ai quattro formaggi is a sauce of four cheeses melted into a little cream, and it stays smooth only on a low heat.\n\nUse four cheeses that melt differently: a soft one such as Gorgonzola for flavour, a semi hard one like Fontina for stretch, mozzarella or taleggio for body, and Parmesan for salt. Grate or crumble them small, so they melt quickly. **Keep the sauce below a simmer**, stirring, and take it off the heat once the cheeses have melted. Pasta water loosens it without making it thin.\n\nBoil the pasta until just tender, drain, keeping a cup of the water, and toss it in the sauce. Add a few tablespoons of water if it looks tight. Finish with black pepper and, if you like, a few chopped walnuts to cut the richness. Serve at once, because the sauce thickens as it cools.',
    ing: [
      '400 g penne or rigatoni',
      '150 ml double cream',
      '80 g Gorgonzola, crumbled',
      '80 g Fontina, grated',
      '80 g taleggio, rind removed, diced',
      '40 g grated Parmesan',
      '1/2 tsp black pepper',
      '30 g walnuts, chopped'
    ],
    st: [
      'Boil the pasta in salted water until just tender. Keep 200 ml of the water, then drain.',
      'Warm the cream in a wide pan over low heat. Add the Gorgonzola, Fontina and taleggio a handful at a time, stirring, until melted.',
      'Stir in the Parmesan and pepper off the heat.',
      'Toss in the pasta, adding the cooking water until the sauce is glossy. Scatter with the walnuts.'
    ],
    tips: [
      'Melt the cheeses over a low heat.',
      'Keep some pasta water to loosen the sauce.',
      'Serve at once, as the sauce tightens.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Roasted pears'],
    store: 'Best fresh.',
    nut: [800, 32, 78, 40, 4, 4, 770]
  },

  'pasta-al-forno': {
    d: 'Baked pasta layered with tomato sauce, ham, mozzarella and Parmesan, baked for 40 minutes at 200C until bubbling and crisp on top.',
    meta: 'Pasta al forno, baked pasta with tomato, ham and mozzarella, baked for 40 minutes at 200C. Six servings, ready in 1 hour.',
    kw: ['pasta al forno', 'italian baked pasta', 'baked pasta with mozzarella', 'baked pasta with ham and tomato', 'pasta al forno recipe'],
    why: 'Pasta al forno means pasta from the oven, and it covers any dish of pasta baked under cheese. This one is a family version with tomato sauce, cooked ham and plenty of mozzarella, and it is made for a crowd.\n\nBoil the pasta for 3 minutes less than the packet says, because it keeps cooking in the oven and will turn soft if you do not. Toss it with the sauce, ham and cubes of mozzarella while still warm, so the cheese begins to melt. **Layer it in the dish and press it down gently**, so the top is even and browns well. A thin layer of sauce on the base stops it sticking.\n\nScatter the Parmesan over the top and bake at 200C for 40 minutes, until bubbling at the edges and golden. Rest it for 10 minutes before serving, which lets the layers set so it cuts in squares. A few spoons of béchamel on top is an alternative, but the tomato version is lighter. It reheats well.',
    ing: [
      '500 g penne or rigatoni',
      '700 g tomato passata',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves',
      '150 g cooked ham, diced',
      '250 g mozzarella, diced',
      '60 g grated Parmesan',
      '10 g basil leaves',
      '1 tsp salt'
    ],
    st: [
      'Heat the oven to 200C. Soften the onion in the oil for 5 minutes, add the garlic, passata and salt and simmer for 10 minutes.',
      'Boil the pasta in salted water for 3 minutes less than the packet says. Drain.',
      'Toss the pasta with the sauce, ham, mozzarella and basil.',
      'Spoon into a baking dish, level and sprinkle with the Parmesan.',
      'Bake for 40 minutes until bubbling and golden. Rest for 10 minutes before serving.'
    ],
    tips: [
      'Under cook the pasta by 3 minutes.',
      'Rest the dish before cutting.',
      'If the top browns too soon, cover with foil.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [579, 30, 72, 19, 5, 9, 1220]
  },

  'pasta-alla-carrettiera': {
    d: 'Spaghetti with raw tomatoes, garlic, chilli, basil and crisp breadcrumbs, made in 25 minutes.',
    meta: 'Pasta alla carrettiera, spaghetti with tomatoes, garlic, chilli and crisp breadcrumbs, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['pasta alla carrettiera', 'carter style pasta', 'spaghetti with garlic and chilli tomato', 'spaghetti with breadcrumbs', 'sicilian tomato pasta'],
    why: 'This is what to make in high summer, when the tomatoes are ripe and nobody wants a long cook. Pasta alla carrettiera is a plain dish of spaghetti, tomatoes, garlic and chilli, topped with breadcrumbs fried in oil, and the name is said to refer to the cart drivers who ate it.\n\nSoften the garlic and chilli in plenty of olive oil, add chopped tomatoes and cook them for 10 minutes until they collapse into a loose sauce. **Fry the breadcrumbs separately** in a dry pan or a little oil until they are deep gold, since they go in last. They give a crunch where other recipes would add cheese.\n\nBoil the spaghetti until a minute short of done and finish it in the sauce with a ladle of the water. Take it off the heat, add the basil and scatter the breadcrumbs. Taste before adding salt, as the pasta water is salty already. A little pecorino is optional, and the dish is good without it.',
    ing: [
      '400 g spaghetti',
      '4 tbsp olive oil',
      '3 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '600 g ripe tomatoes, chopped',
      '60 g coarse breadcrumbs',
      '10 g basil leaves',
      '1 tsp salt'
    ],
    st: [
      'Fry the breadcrumbs in 1 tablespoon of the oil for 3 minutes until golden. Set aside.',
      'Soften the garlic and chilli in the remaining oil for 1 minute, add the tomatoes and salt and cook for 10 minutes until loose.',
      'Boil the spaghetti in salted water until 1 minute short of done. Keep a cup of the water.',
      'Toss the spaghetti in the sauce with a splash of the water for 1 minute.',
      'Off the heat add the basil and scatter with the breadcrumbs.'
    ],
    tips: [
      'Fry the breadcrumbs separately until deep gold.',
      'Use ripe tomatoes, or the sauce tastes thin.',
      'Taste before adding salt.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Grilled courgettes'],
    store: 'Best fresh. Keep the breadcrumbs apart.',
    nut: [584, 17, 93, 16, 6, 8, 710]
  },

  'spaghetti-al-tonno': {
    d: 'Spaghetti with tinned tuna, tomato, garlic, capers and parsley, a store cupboard supper ready in 20 minutes.',
    meta: 'Spaghetti al tonno, spaghetti with tinned tuna, tomato, capers and parsley, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['spaghetti al tonno', 'tuna spaghetti italian', 'spaghetti with tinned tuna and tomato', 'tuna and caper pasta', 'tuna pasta recipe'],
    why: 'The first sign it is ready is the smell: garlic turning pale gold in olive oil and the tomatoes starting to break down. Spaghetti al tonno is the dish Italians make from the cupboard, with tinned tuna, tinned tomatoes, capers and parsley.\n\nUse tuna packed in olive oil, which has more flavour and stays soft. Drain it and flake it. **Add the tuna at the end**, off the heat, stirring in gently, because tinned fish cooks to dry crumbs if it simmers. The sauce itself needs only 10 minutes: garlic, a pinch of chilli, tomatoes and capers.\n\nBoil the spaghetti until a minute short of done and finish it in the pan with the sauce and a ladle of the cooking water. The starch in the water gives the sauce a gloss. Finish with chopped parsley and a squeeze of lemon. It goes on the table in 20 minutes and uses things most kitchens already have.',
    ing: [
      '400 g spaghetti',
      '3 tbsp olive oil',
      '2 garlic cloves, sliced',
      '1/4 tsp chilli flakes',
      '400 g tinned chopped tomatoes',
      '2 tbsp capers, drained',
      '200 g tuna in olive oil, drained',
      '3 tbsp chopped parsley',
      '1/2 lemon, juice'
    ],
    st: [
      'Soften the garlic and chilli in the oil for 1 minute. Add the tomatoes and capers and simmer for 10 minutes.',
      'Boil the spaghetti in salted water until 1 minute short of done. Keep a cup of the water.',
      'Toss the spaghetti in the sauce with a splash of the water for 1 minute.',
      'Off the heat, fold in the flaked tuna, parsley and lemon juice.'
    ],
    tips: [
      'Choose tuna in olive oil for flavour.',
      'Add the tuna off the heat so it stays moist.',
      'Use pasta water to give the sauce a gloss.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Crusty bread'],
    store: 'Best fresh. Keeps for 1 day in the fridge.',
    nut: [576, 27, 81, 16, 5, 6, 280]
  },

  'spaghetti-alla-bottarga': {
    d: 'Spaghetti with garlic, chilli, olive oil and grated bottarga, the cured grey mullet roe, ready in 17 minutes.',
    meta: 'Spaghetti alla bottarga, spaghetti with garlic, chilli, oil and grated cured mullet roe, cooked for 12 minutes. Four servings, ready in 17 minutes.',
    kw: ['spaghetti alla bottarga', 'bottarga pasta', 'spaghetti with cured fish roe', 'sardinian bottarga spaghetti', 'bottarga di muggine pasta'],
    why: 'A dish for two or four, and the quickest of all the Italian pasta suppers: the cooking takes the time of a pan of spaghetti. Bottarga is cured, pressed grey mullet roe, sold in a firm amber block or ready grated, and it tastes of the sea, salty and rich.\n\nThe recipe is a simple garlic and chilli sauce, with the bottarga grated over at the end. **Grate it off the heat**, because heat turns it hard and dry, and it should melt into the oil rather than cook. Start with a tablespoon of grated bottarga and add more to taste.\n\nSoften the garlic in olive oil with the chilli, add some pasta water and the drained spaghetti and toss. Take the pan off the heat, add lemon zest and the bottarga and toss again until the oil is glossy and golden. The roe is salty, so do not add salt to the pasta water until you taste. Add chopped parsley and serve at once.',
    ing: [
      '400 g spaghetti',
      '5 tbsp olive oil',
      '2 garlic cloves, sliced',
      '1/2 tsp chilli flakes',
      '50 g bottarga di muggine, grated',
      '1 lemon, zest',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Boil the spaghetti in lightly salted water until 1 minute short of done. Keep a cup of the water.',
      'Soften the garlic and chilli in the oil for 1 minute over low heat.',
      'Add the spaghetti and 100 ml of the water and toss for 1 minute.',
      'Off the heat add the lemon zest and most of the bottarga and toss until glossy.',
      'Serve at once with the parsley and the rest of the bottarga.'
    ],
    tips: [
      'Grate the bottarga off the heat.',
      'Salt the water lightly, as the roe is salty.',
      'Toss until the oil turns glossy and golden.'
    ],
    pair: ['Dry white wine', 'Green salad', 'Lemon wedges'],
    store: 'Best fresh.',
    nut: [569, 18, 77, 21, 4, 3, 450]
  },

  'spaghetti-con-le-cozze': {
    d: 'Spaghetti with mussels steamed open in white wine, garlic, tomato and parsley, ready in 35 minutes.',
    meta: 'Spaghetti con le cozze, spaghetti with mussels in white wine, garlic and tomato, cooked for 20 minutes. Four servings, ready in 35 minutes.',
    kw: ['spaghetti con le cozze', 'spaghetti with mussels', 'mussel pasta in white wine', 'italian mussel spaghetti', 'mussels and tomato pasta'],
    why: 'Why do mussels sometimes taste of grit? Because they were not cleaned, or because they were cooked too long. Spaghetti con le cozze is simple, but it only works if the mussels are fresh and just opened.\n\nScrub them under cold water, pull off the beards and throw away any that stay open when tapped. Steam them in a covered pan with wine and garlic for about 4 minutes, shaking the pan, until the shells open. **Throw away any that stay shut**, as they were dead before cooking. Strain the juice through a fine sieve to catch grit and keep it for the sauce.\n\nSoften more garlic with chilli, add tomatoes and the mussel liquor and simmer for 8 minutes. Take most of the mussels from their shells, keeping a few whole for show. Toss the spaghetti in the sauce with the mussels and parsley. Do not add cheese, which is not eaten with seafood pasta.',
    ing: [
      '400 g spaghetti',
      '1 kg mussels',
      '150 ml dry white wine',
      '4 garlic cloves, sliced',
      '4 tbsp olive oil',
      '1/4 tsp chilli flakes',
      '400 g tinned chopped tomatoes',
      '4 tbsp chopped parsley'
    ],
    st: [
      'Scrub the mussels and pull off the beards. Throw away any that stay open when tapped.',
      'Put the mussels, wine and half the garlic in a large covered pan and steam for 4 minutes, shaking, until the shells open. Strain, keeping the liquid, and discard any unopened mussels.',
      'Soften the remaining garlic and chilli in the oil for 1 minute. Add the tomatoes and mussel liquid and simmer for 10 minutes.',
      'Boil the spaghetti in salted water until 1 minute short of done. Drain.',
      'Take most of the mussels from their shells. Toss the spaghetti in the sauce with the mussels and parsley for 1 minute.'
    ],
    tips: [
      'Discard any open mussels that do not close when tapped.',
      'Strain the cooking liquid to catch grit.',
      'Do not cook the mussels again for long.'
    ],
    pair: ['Dry white wine', 'Crusty bread', 'Green salad'],
    store: 'Best fresh. Do not reheat the mussels.',
    nut: [729, 44, 91, 21, 5, 6, 770]
  },

  'linguine-allo-scoglio': {
    d: 'Linguine with mussels, clams, prawns and squid in a garlic and tomato sauce, ready in 45 minutes.',
    meta: 'Linguine allo scoglio, linguine with mussels, clams, prawns and squid in tomato, cooked for 25 minutes. Four servings, ready in 45 minutes.',
    kw: ['linguine allo scoglio', 'seafood linguine', 'italian mixed seafood pasta', 'linguine with clams and mussels', 'allo scoglio pasta'],
    why: 'Add the seafood in the order it cooks, and not all at once. That is the one rule of linguine allo scoglio, whose name means of the rocks, a mixed shellfish pasta of the Italian coast.\n\nThe sauce begins with garlic, chilli and a little tomato, and goes into a wide pan with wine. The clams and mussels go in first, covered, and open in about 4 minutes. **Add the squid and prawns last**, for only 2 minutes, since both turn rubbery quickly. Lift the shellfish out as they open and leave the sauce to reduce slightly.\n\nBoil the linguine until a minute short of done and finish it in the sauce with a ladle of the cooking water. Return the seafood to the pan, toss gently and add parsley. Discard any shells that did not open. Serve in wide bowls with a bowl on the table for the shells. Do not add cheese, as the flavour of the sea is the point.',
    ing: [
      '400 g linguine',
      '500 g mussels, cleaned',
      '500 g clams, cleaned',
      '200 g squid, cut in rings',
      '8 raw king prawns, about 200 g',
      '4 tbsp olive oil',
      '4 garlic cloves, sliced',
      '1/4 tsp chilli flakes',
      '150 ml dry white wine',
      '300 g cherry tomatoes, halved',
      '4 tbsp chopped parsley'
    ],
    st: [
      'Soften the garlic and chilli in the oil in a large pan for 1 minute. Add the tomatoes and cook for 5 minutes.',
      'Add the wine, mussels and clams, cover and cook for 4 minutes until open. Lift out the shellfish and discard any unopened.',
      'Add the squid and prawns and cook for 2 minutes. Return the shellfish.',
      'Boil the linguine in salted water until 1 minute short of done. Keep a cup of the water.',
      'Toss the linguine into the pan with a splash of water and the parsley for 1 minute.'
    ],
    tips: [
      'Add the squid and prawns last.',
      'Discard any shell that does not open.',
      'Do not add cheese to seafood pasta.'
    ],
    pair: ['Dry white wine', 'Crusty bread', 'Green salad'],
    store: 'Best fresh. Do not store.',
    nut: [804, 65, 91, 20, 4, 5, 1240]
  },

  'cavatelli-con-broccoli': {
    d: 'Small shell shaped pasta with broccoli cooked soft in the same water, with garlic, anchovy and chilli, ready in 30 minutes.',
    meta: 'Cavatelli con broccoli, small pasta shells with soft broccoli, garlic, anchovy and chilli, cooked for 20 minutes. Four servings, ready in 30 minutes.',
    kw: ['cavatelli con broccoli', 'cavatelli and broccoli', 'broccoli pasta with anchovy and chilli', 'puglian broccoli pasta', 'cavatelli broccoli recipe'],
    why: 'This is what to make when the broccoli is at its best, in the cold months, and when you have nothing but a bag of pasta and an anchovy tin. Cavatelli con broccoli is a southern Italian dish where the broccoli is cooked until it falls apart and becomes the sauce.\n\nCut the broccoli into small florets and slice the stalk, then boil it with the pasta. Put the cavatelli in first, and add the broccoli for the last 8 minutes, so both are done together. **Overcook the broccoli on purpose**, because bright green and crisp is wrong here, and soft and army green makes a sauce.\n\nIn a wide pan, melt the anchovies into olive oil with garlic and chilli. Drain the pasta and broccoli, keeping a cup of water, and toss them in the pan, crushing the broccoli with a fork. Add water until it clings. Finish with grated pecorino and serve hot, with more oil on top.',
    ing: [
      '350 g dried pasta shells',
      '600 g broccoli, in small florets',
      '5 tbsp olive oil',
      '3 garlic cloves, sliced',
      '30 g anchovy fillets',
      '1/2 tsp chilli flakes',
      '40 g grated pecorino',
      '1 tsp salt'
    ],
    st: [
      'Boil the pasta in a large pan of salted water. Add the broccoli for the last 8 minutes of cooking.',
      'Melt the anchovies in the oil with the garlic and chilli over low heat for 2 minutes.',
      'Drain the pasta and broccoli, keeping 200 ml of the water, and tip into the pan.',
      'Toss over the heat for 2 minutes, crushing the broccoli with a fork and adding water until it clings.',
      'Stir in the pecorino and serve.'
    ],
    tips: [
      'Cook the broccoli until soft, not bright green.',
      'Crush the broccoli with a fork into the sauce.',
      'Use pasta water to bring it together.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Grilled sausage'],
    store: 'Keeps for 2 days in the fridge. Reheat with a splash of water.',
    nut: [599, 21, 77, 23, 7, 5, 1100]
  },

  'gnocchi-alla-romana': {
    d: 'Discs of baked semolina gnocchi enriched with egg yolk and Parmesan, set for 1 hour and baked for 40 minutes under butter.',
    meta: 'Gnocchi alla romana, baked semolina gnocchi with egg yolk, Parmesan and butter, baked for 40 minutes. Four servings, ready in 55 minutes plus chilling.',
    kw: ['gnocchi alla romana', 'roman semolina gnocchi', 'baked semolina gnocchi', 'semolina gnocchi with parmesan', 'gnocchi alla romana recipe'],
    why: 'Gnocchi alla romana is made with semolina, not potato, and that is the difference you will taste and see: a flat, golden disc rather than a pillow. It comes from Rome, and it is a dish for a table of four on a cold evening.\n\nThe semolina is stirred into hot milk until it is as thick as a paste, then beaten with butter, egg yolks and Parmesan. Spread it 1.5 cm thick on a wet tray. **Let it cool and set for at least 1 hour**, as the gnocchi must be firm before you cut it. Warm paste tears and sticks to the cutter.\n\nCut rounds with a 5 cm cutter, overlap them in a buttered dish and dot with butter and Parmesan. Bake at 220C for 40 minutes, until the tops are golden and crisp at the edge and the dish is bubbling. They are soft inside and crisp outside. Serve straight from the dish with a green salad, since they are rich.',
    ing: [
      '1 litre whole milk',
      '250 g fine semolina',
      '100 g butter',
      '3 egg yolks',
      '100 g grated Parmesan',
      '1 tsp salt',
      '1/4 tsp ground nutmeg'
    ],
    st: [
      'Heat the milk with the salt and nutmeg to a gentle simmer. Rain in the semolina, whisking, and stir over low heat for 10 minutes until very thick.',
      'Off the heat, beat in 40 g butter, the egg yolks and half the Parmesan.',
      'Spread 1.5 cm thick on a wet tray. Leave to set for 1 hour.',
      'Heat the oven to 220C. Cut 5 cm rounds and overlap in a buttered dish.',
      'Dot with the remaining butter, scatter with the rest of the Parmesan and bake for 40 minutes until golden.'
    ],
    tips: [
      'Cool the semolina completely before cutting.',
      'Wet the tray so the paste lifts off.',
      'Serve at once, as the crust softens.'
    ],
    pair: ['Green salad', 'Roast chicken', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge. Reheat in a hot oven.',
    rest: [60, 'Setting'],
    nut: [712, 30, 58, 40, 3, 13, 1120]
  },

  'malfatti': {
    d: 'Soft dumplings of spinach and ricotta, poorly shaped by design, boiled for 5 minutes and served in sage butter, in 40 minutes.',
    meta: 'Malfatti, soft spinach and ricotta dumplings in sage butter, cooked for 10 minutes. Four servings, ready in 1 hour.',
    kw: ['malfatti', 'spinach and ricotta malfatti', 'italian ricotta dumplings', 'naked ravioli', 'malfatti with sage butter'],
    why: 'Malfatti means badly made, and it describes the shape on purpose: they are rough dumplings, not neat parcels. They are the filling of spinach ravioli without the pasta, which is why they are sometimes called naked ravioli.\n\nThe mixture must be dry, or the dumplings fall apart in the water. Squeeze the cooked spinach until no more water comes out, chop it very fine and beat it with drained ricotta, egg, Parmesan and nutmeg. **Stir in the flour last and no more than needed**, only enough to hold the shape. Chill the mixture for 20 minutes to firm it.\n\nRoll teaspoons of the mix in flour into short sausages. Test one in simmering water: if it holds, carry on, and if it breaks, add a spoon of flour. Simmer gently for 5 minutes, until they float. Lift them out with a slotted spoon, toss in melted butter with sage, and add a little Parmesan.',
    ing: [
      '500 g baby spinach',
      '250 g ricotta, drained',
      '1 egg',
      '60 g grated Parmesan',
      '50 g plain flour, plus extra for rolling',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '60 g butter',
      '12 g sage leaves'
    ],
    st: [
      'Wilt the spinach in a covered pan for 3 minutes. Cool, squeeze very dry in a cloth and chop fine.',
      'Mix the spinach with the ricotta, egg, half the Parmesan, the nutmeg and salt. Stir in the flour. Chill for 20 minutes.',
      'Roll teaspoons of the mix in flour into short sausages.',
      'Simmer in salted water in two batches for 5 minutes until they float. Lift out with a slotted spoon.',
      'Melt the butter with the sage for 2 minutes and toss the dumplings in it. Serve with the remaining Parmesan.'
    ],
    tips: [
      'Squeeze the spinach until dry.',
      'Test one dumpling in water first.',
      'Simmer gently, as a hard boil breaks them.'
    ],
    pair: ['Sage butter', 'Green salad', 'Dry white wine'],
    store: 'Keeps for 2 days in the fridge. Freeze uncooked for 1 month.',
    nut: [374, 19, 16, 26, 3, 1, 980]
  },

  'risotto-alla-pescatora': {
    d: 'Risotto with prawns, mussels and squid stirred into rice cooked in fish stock, white wine and tomato, in 50 minutes.',
    meta: 'Risotto alla pescatora, seafood risotto with prawns, mussels and squid in fish stock, cooked for 30 minutes. Four servings, ready in 50 minutes.',
    kw: ['risotto alla pescatora', 'italian seafood risotto', 'fisherman style risotto', 'risotto with prawns and mussels', 'seafood risotto recipe'],
    why: 'Flour, butter, sugar, an egg: no. Rice, stock, wine, and the sea: that is the short list for risotto alla pescatora, the fisherman style rice with mixed shellfish. The rice does the work, and the seafood goes in at the end.\n\nStart with a soffritto of onion and garlic, toast the rice in the oil for 2 minutes until the grains turn translucent at the edge, then add wine. Keep a pan of hot fish stock beside the risotto and add it a ladle at a time. **Stir often and wait for each ladle to be absorbed** before adding the next. The rice is ready after about 18 minutes, when it is creamy but still firm in the centre.\n\nAdd the squid 5 minutes before the end, and the prawns and mussels for the last 3 to 4 minutes so they cook gently. Take it off the heat and let it rest, covered, for 2 minutes. No cheese and no butter at the end: the sea provides the richness. Scatter with parsley.',
    ing: [
      '320 g arborio rice',
      '1.2 litres fish stock, hot',
      '3 tbsp olive oil',
      '1 onion, finely chopped',
      '2 garlic cloves',
      '120 ml dry white wine',
      '200 g tinned chopped tomatoes',
      '200 g squid, cut in rings',
      '8 raw king prawns, about 200 g',
      '500 g mussels, cleaned',
      '3 tbsp chopped parsley'
    ],
    st: [
      'Soften the onion in the oil for 5 minutes. Add the garlic and rice and stir for 2 minutes.',
      'Add the wine and stir until absorbed. Add the tomatoes.',
      'Add the stock a ladle at a time, stirring, for 18 minutes, waiting until each is absorbed.',
      'Add the squid 5 minutes before the end, then the prawns and mussels for the last 4 minutes. Discard any mussels that stay shut.',
      'Rest covered for 2 minutes, scatter with the parsley and serve.'
    ],
    tips: [
      'Keep the stock hot so the rice cooks evenly.',
      'Add the seafood late.',
      'Do not add cheese to seafood risotto.'
    ],
    pair: ['Dry white wine', 'Green salad', 'Lemon wedges'],
    store: 'Best fresh. Do not reheat seafood.',
    nut: [623, 43, 79, 15, 2, 3, 1470]
  },

  'risotto-al-radicchio': {
    d: 'Creamy risotto with red radicchio softened in butter and red wine, finished with Parmesan, in 40 minutes.',
    meta: 'Risotto al radicchio, creamy risotto with red radicchio, red wine and Parmesan, cooked for 30 minutes. Four servings, ready in 40 minutes.',
    kw: ['risotto al radicchio', 'radicchio risotto', 'red chicory risotto', 'risotto with red wine and radicchio', 'veneto radicchio risotto'],
    why: 'Most home versions come out bitter, and the fix is to cook the radicchio in two stages. Risotto al radicchio, from the Veneto, is a pink risotto where the leaf softens into the rice, and where a little bitterness balances the creaminess.\n\nShred half the radicchio and soften it in butter with the onion, so it melts into the base. The other half is shredded and stirred in at the end, with a splash of wine, to keep a trace of its sharp, fresh flavour and colour. **Add the second half in the last 3 minutes**, and no earlier, or it turns brown and dull.\n\nToast the rice, add red wine, then stock a ladle at a time for about 18 minutes, stirring often. The rice should be creamy and flow slowly when the pan is tilted. Take it off the heat, beat in cold butter and the Parmesan and rest it for 2 minutes. Serve straight away in warm bowls.',
    ing: [
      '320 g arborio rice',
      '1.2 litres vegetable stock, hot',
      '60 g butter',
      '1 onion, finely chopped',
      '400 g radicchio, shredded',
      '150 ml red wine',
      '60 g grated Parmesan',
      '1/2 tsp black pepper'
    ],
    st: [
      'Melt half the butter in a wide pan and soften the onion for 5 minutes. Add half the radicchio and cook for 3 minutes.',
      'Add the rice and stir for 2 minutes. Pour in the wine and stir until absorbed.',
      'Add the stock a ladle at a time, stirring, for 18 minutes.',
      'Stir in the rest of the radicchio for the last 3 minutes.',
      'Off the heat, beat in the remaining butter and the Parmesan. Rest for 2 minutes and season with the pepper.'
    ],
    tips: [
      'Add the second half of the radicchio at the end.',
      'Keep the stock hot.',
      'Beat in cold butter off the heat for a glossy finish.'
    ],
    pair: ['Grilled sausage', 'Red wine', 'Green salad'],
    store: 'Best fresh. Reheat with a splash of stock.',
    nut: [522, 16, 74, 18, 5, 2, 1250]
  }
};
