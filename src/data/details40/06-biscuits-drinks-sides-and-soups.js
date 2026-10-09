'use strict';

/**
 * Volume forty — biscuits, meringues, drinks, a few sides and a soup.
 *
 * The last fifteen recipes of the volume: two British biscuits, meringues,
 * two drinks, biltong, a tapas bite, four potato and vegetable sides, a bean
 * soup and a quiche. Times are the recipe's own; ovens differ, so each method
 * says when to check early. Nutrition is estimated from the ingredient list
 * by npm run calc.
 */

module.exports = {
  'jammy-dodgers': {
    d: 'Shortcrust biscuits sandwiched in pairs with raspberry jam, the top of each cut with a heart-shaped window.',
    meta: 'Jammy Dodgers: buttery shortcrust biscuits sandwiched with raspberry jam through a heart-shaped window. Makes sixteen, baked for 12 minutes.',
    kw: ['jammy dodgers', 'homemade jammy dodgers', 'jam sandwich biscuits', 'raspberry jam biscuits', 'jam and shortbread biscuits'],
    why: 'Ingredient lists do not get shorter than this: flour, butter, sugar, an egg yolk, and a jar of jam. The skill is in the dough.\n\nRub the cold butter into the flour and sugar until it looks like fine crumbs, then bring it together with the yolk and milk. **Chill the dough for 30 minutes.** Warm butter makes the biscuits spread and lose their sharp edges, and cold dough cuts cleanly.\n\nRoll the dough to 3 mm, cut 32 rounds with a 6 cm cutter, and cut a small heart from the middle of half of them. The windows are where the jam shows, and the offcuts can be rolled again.\n\nBake at 180°C for 12 minutes, until pale gold at the edges. If your oven runs hot, check at 9 minutes. Cool completely, spread the whole biscuits with jam and press the windowed ones on top. Use a good jam with a high fruit content, as thin jam soaks into the biscuit and makes it soft.',
    ing: [
      '250 g plain flour',
      '150 g cold butter, cubed',
      '75 g caster sugar',
      '1 egg yolk, about 20 g',
      '1 tbsp milk',
      '100 g raspberry jam',
      '1 tbsp icing sugar to dust'
    ],
    st: [
      'Rub the butter into the flour and sugar until fine crumbs. Mix in the egg yolk and milk to a dough. Wrap and chill for 30 minutes.',
      'Heat the oven to 180°C and line two trays. Roll the dough to 3 mm and cut 32 rounds with a 6 cm cutter. Cut a small heart from the centre of 16 of them.',
      'Bake for 12 minutes until pale gold at the edges. Cool on a rack.',
      'Spread the whole biscuits with jam, press a windowed biscuit on each and dust with icing sugar.'
    ],
    tips: [
      'Chill the dough before rolling.',
      'Roll it to an even 3 mm.',
      'If your oven runs hot, check at 9 minutes.',
      'Fill them just before serving to keep the biscuits crisp.'
    ],
    pair: ['Hot tea', 'Cold milk', 'Fresh berries', 'Hot chocolate'],
    store: 'Keeps in an airtight tin for 4 days. Fill them on the day you eat them.',
    nut: [168, 2, 22, 8, 1, 9, 5]
  },

  'oat-biscuits': {
    d: 'Crisp, golden oat biscuits sweetened with golden syrup and brown sugar, good with a cup of tea.',
    meta: 'Oat biscuits: crisp, golden oat biscuits with golden syrup and brown sugar. Makes sixteen, baked for 15 minutes.',
    kw: ['oat biscuits', 'easy oat biscuits', 'crunchy oat biscuits', 'golden syrup oat biscuits', 'homemade oat biscuits'],
    why: 'Oats, butter, sugar, flour, a spoon of syrup: five things you probably have. Two minutes of melting, a bowl, and a tray.\n\nMelt the butter with the sugar and golden syrup over low heat until smooth. Dissolve the bicarbonate of soda in a spoonful of hot water and stir it in, where it makes the mixture foam slightly and helps the biscuits spread thin and crisp. **Do not use instant oats.** They turn pasty, while rolled oats keep their shape and their bite.\n\nStir the flour and oats into the melted mixture and roll walnut-sized balls. Set them 5 cm apart on lined trays and flatten them lightly.\n\nBake at 170°C for 15 minutes, until deep gold. If your oven runs hot, check at 12 minutes. They are soft when they come out and crisp up on the tray over 5 minutes. They are good dunked in tea, and they stay crisp for days in a tin.',
    ing: [
      '100 g butter',
      '100 g soft light brown sugar',
      '1 tbsp golden syrup',
      '1/2 tsp bicarbonate of soda',
      '1 tbsp hot water',
      '100 g plain flour',
      '150 g rolled oats'
    ],
    st: [
      'Heat the oven to 170°C and line two trays. Melt the butter, sugar and golden syrup together over low heat, stirring until smooth.',
      'Stir the bicarbonate into the hot water and add it to the pan. Mix in the flour and oats.',
      'Roll 16 balls, set them 5 cm apart on the trays and flatten each lightly.',
      'Bake for 15 minutes until deep gold. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Use rolled oats.',
      'Space the biscuits apart.',
      'If your oven runs hot, check at 12 minutes.',
      'Leave them on the tray to crisp.'
    ],
    pair: ['Hot tea', 'Cold milk', 'Cheddar', 'Sliced apple'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [134, 2, 18, 6, 1, 7, 40]
  },

  'meringues': {
    d: 'Crisp white meringues with a soft marshmallow centre, made with egg whites and caster sugar and baked slowly.',
    meta: 'Meringues: crisp white meringues with a soft marshmallow centre, baked slowly for 90 minutes. Makes twelve.',
    kw: ['meringues', 'homemade meringues', 'crisp meringues', 'meringues with soft centre', 'egg white meringues'],
    why: 'For a table of twelve at a party, meringues look impressive and cost very little. They are egg whites and sugar, so nothing in the recipe can be skipped.\n\nA clean bowl matters most. Wipe it with a little lemon juice or vinegar before you start, because any grease stops the whites from whipping to peaks. Whisk the whites until stiff, then add the sugar one spoonful at a time, whisking for 5 minutes. **Rub a little mixture between your fingers.** If it feels gritty, the sugar has not dissolved and the meringue will weep.\n\nPipe or spoon 12 nests onto lined trays and bake at 100°C for 90 minutes. If your oven runs hot, check at 70 minutes. They should lift cleanly off the paper and sound hollow underneath.\n\nCool completely in the oven with the door closed. Serve them with whipped cream and fruit just before eating, so the shells stay crisp.',
    ing: [
      '4 egg whites, about 120 g',
      '220 g caster sugar',
      '1 tsp lemon juice'
    ],
    st: [
      'Heat the oven to 100°C and line two trays. Wipe the mixing bowl with the lemon juice.',
      'Whisk the egg whites to stiff peaks. Add the sugar a spoonful at a time, whisking for 5 minutes until glossy and smooth.',
      'Pipe or spoon 12 nests onto the trays.',
      'Bake for 90 minutes until crisp and easy to lift. Turn the oven off and cool them inside.'
    ],
    tips: [
      'Use a spotlessly clean bowl.',
      'Add the sugar slowly.',
      'If your oven runs hot, check at 70 minutes.',
      'Do not open the oven door while they cool.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Lemon curd', 'Sparkling wine'],
    store: 'Keeps in an airtight tin for 1 week, without cream.',
    nut: [76, 1, 18, 0, 0, 18, 20]
  },

  'soft-boiled-eggs': {
    d: 'Eggs boiled for 6 minutes so the white is set and the yolk still runs, served with buttered toast soldiers.',
    meta: 'Soft boiled eggs: eggs boiled for 6 minutes so the white is set and the yolk runs, with toast soldiers. Two servings.',
    kw: ['soft boiled eggs', 'perfect soft boiled eggs', 'soft boiled eggs with toast soldiers', 'runny yolk boiled eggs', 'how to soft boil eggs'],
    why: 'Four eggs, four slices of bread and six minutes. The quality of the egg is what you taste, and the timing is the only skill.\n\nLower the eggs gently into a pan of boiling water with a spoon, and start the clock once they are in. Six minutes gives a set white and a runny, golden yolk. **Time it exactly.** A minute over gives a thick, jammy yolk, and a minute under leaves the white wobbly.\n\nHave a bowl of cold water ready. When the six minutes are up, move the eggs into it for 30 seconds. This stops the cooking and cools the shell enough to handle.\n\nTap the top of each egg with a teaspoon and lift the cap off. Season the yolk with salt and pepper, and dip in fingers of hot buttered toast. If your eggs come straight from the fridge, add 30 seconds. Eat them straight away, since the yolk keeps cooking in the shell and thickens as it sits.',
    ing: [
      '4 eggs, about 200 g',
      '4 slices white bread, about 140 g',
      '20 g butter',
      '1/4 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Bring a pan of water to a boil. Lower the eggs in gently with a spoon and boil for 6 minutes.',
      'Meanwhile toast the bread, butter it and cut it into fingers.',
      'Move the eggs into a bowl of cold water for 30 seconds.',
      'Set each egg in an egg cup, slice off the top and season. Serve with the toast fingers.'
    ],
    tips: [
      'Start timing when the eggs go in.',
      'Cool them briefly in cold water.',
      'If the eggs are cold from the fridge, add 30 seconds.',
      'Use a spoon to lower them, not your fingers.'
    ],
    pair: ['Orange juice', 'Hot tea', 'Grilled tomatoes', 'Crisp bacon'],
    store: 'Best eaten at once. Boiled eggs can be kept in the fridge, but the yolk will not stay runny.',
    nut: [396, 19, 35, 20, 2, 4, 760]
  },

  'peanut-butter-smoothie': {
    d: 'A thick smoothie of banana, peanut butter, milk and honey, blended with ice until smooth.',
    meta: 'Peanut butter smoothie: a thick blend of banana, peanut butter, milk and honey with ice. Two servings, ready in a blender.',
    kw: ['peanut butter smoothie', 'banana peanut butter smoothie', 'thick peanut butter smoothie', 'peanut butter banana smoothie', 'easy peanut butter smoothie'],
    why: 'Put the ice in last. That one rule is the difference between a smooth drink and a gritty one, because ice at the bottom of the jug crushes poorly and hides under the other ingredients.\n\nPut the milk in first, then the peanut butter and honey, the banana in pieces, and the ice on top. The liquid drags the solids down into the blades. **Use a frozen banana for the thickest result.** Slice it before freezing, and it blends in seconds.\n\nBlend on high for 45 seconds. The smoothie should be thick enough to need a spoon but thin enough to drink through a wide straw. If it is too thick, add a splash of milk. If it is too thin, add a few more ice cubes.\n\nTaste it, add more honey if needed, and pour into two glasses at once. A pinch of cinnamon on top is a pleasant finish if you have some.',
    ing: [
      '2 bananas, about 240 g peeled',
      '60 g smooth peanut butter',
      '300 ml milk',
      '1 tbsp honey',
      '100 g ice cubes'
    ],
    st: [
      'Pour the milk into a blender, then add the peanut butter, honey and bananas in pieces.',
      'Add the ice on top and blend on high for 45 seconds until smooth.',
      'Pour into two glasses and serve at once.'
    ],
    tips: [
      'Add the ice last.',
      'Freeze the banana for a thicker drink.',
      'If it is too thick, add a splash of milk.',
      'Serve at once.'
    ],
    pair: ['Toast with honey', 'Porridge', 'Fresh berries', 'Granola'],
    store: 'Best drunk at once. Keeps in the fridge for 1 day; stir before drinking.',
    nut: [436, 14, 50, 20, 6, 32, 70]
  },

  'strawberry-lemonade': {
    d: 'Fresh lemon juice and sugar stirred with blended strawberries and cold water, served over ice.',
    meta: 'Strawberry lemonade: fresh lemon juice, sugar and blended strawberries with cold water, served over ice. Six servings, no cooking.',
    kw: ['strawberry lemonade', 'homemade strawberry lemonade', 'fresh strawberry lemonade', 'easy strawberry lemonade', 'strawberry lemonade for a crowd'],
    why: 'Strawberries, lemons, sugar and water: four things, a jug and ten minutes. The drink is only as good as its fruit, so use strawberries that smell sweet.\n\nBlend 400 g of strawberries with 100 ml of cold water until smooth and push the puree through a sieve, which removes the seeds and leaves a clear red syrup. **Do the sieving, or the drink is gritty.** It takes a minute and changes the texture.\n\nSqueeze 200 ml of lemon juice, about five lemons, and stir it with the sugar until the grains disappear. Add the strawberry puree and the rest of the cold water. Taste it and add more sugar or lemon juice until the balance is right for you.\n\nServe over plenty of ice with lemon slices. Stir the jug before pouring, as the puree settles to the bottom. Freeze a few strawberries and use them as ice cubes, so the drink does not water down.',
    ing: [
      '400 g strawberries, hulled',
      '200 ml lemon juice',
      '100 g caster sugar',
      '1.2 litres cold water',
      '200 g ice cubes',
      '1 lemon, sliced'
    ],
    st: [
      'Blend the strawberries with 100 ml of the water until smooth. Push through a sieve into a large jug.',
      'Stir in the lemon juice and sugar until the sugar dissolves.',
      'Add the remaining water and taste, adding more sugar or lemon if needed.',
      'Fill glasses with ice, pour the lemonade over and top with the lemon slices.'
    ],
    tips: [
      'Sieve the puree.',
      'Taste before serving.',
      'Stir the jug before pouring.',
      'Chill the jug in the fridge for a colder drink.'
    ],
    pair: ['Sandwiches', 'Barbecue food', 'Shortbread', 'Fresh mint'],
    store: 'Keeps in the fridge for 2 days. Stir before pouring.',
    nut: [104, 1, 25, 0, 2, 21, 5]
  },

  'biltong': {
    d: 'Strips of beef marinated in vinegar, coriander and pepper, then dried slowly in a low oven until firm and chewy.',
    meta: 'Biltong: strips of beef marinated in vinegar, coriander and pepper, then dried slowly in a low oven. Eight servings.',
    kw: ['biltong', 'homemade biltong', 'oven dried biltong', 'south african biltong', 'beef biltong recipe'],
    why: 'What do you get if you cure beef in vinegar, salt and spice and dry it slowly? Biltong, and the work is mostly waiting.\n\nStart with a lean cut such as silverside, and trim off the fat. Fat does not dry, and it turns rancid. Cut the beef along the grain into strips about 2 cm thick, so the finished pieces can be sliced across the grain. **Salt and vinegar do the curing, so measure them.** Too little and the meat may spoil, and too much makes it unpleasantly harsh.\n\nRub the strips with the salt, sugar, coriander and pepper and turn them in the vinegar. Leave them in the fridge for 6 hours, turning once.\n\nDry in the oven at its lowest setting, around 70°C, with the door propped open a little, for 4 hours. The strips should feel firm and dry outside and bend without snapping. Slice thinly.',
    ing: [
      '800 g beef silverside, trimmed of fat',
      '100 ml red wine vinegar',
      '3 tbsp coriander seeds, lightly crushed, about 20 g',
      '1 tbsp black pepper',
      '3 tbsp salt, about 54 g',
      '1 tbsp soft light brown sugar'
    ],
    st: [
      'Cut the beef along the grain into strips about 2 cm thick.',
      'Rub the strips with the salt, sugar, coriander and pepper. Turn them in the vinegar, cover and leave in the fridge for 6 hours, turning once.',
      'Heat the oven to its lowest setting, about 70°C. Pat the strips dry and hang them from the oven rack on skewers or lay them on a rack over a tray.',
      'Dry with the door propped open for 4 hours until the strips are firm and bend without snapping. Slice thinly across the grain.'
    ],
    tips: [
      'Trim the fat well.',
      'Measure the salt and vinegar.',
      'If the strips are very thick, check them later; thin ones dry sooner.',
      'Slice across the grain.'
    ],
    pair: ['Cold lager', 'Cheese', 'Rusks', 'Pickled onions'],
    store: 'Keeps in the fridge for 1 week in a paper bag.',
    rest: [360, 'Marinating'],
    nut: [137, 21, 2, 5, 0, 2, 2710]
  },

  'bacon-wrapped-dates': {
    d: 'Dates stuffed with an almond and wrapped in streaky bacon, roasted until the bacon is crisp and the dates are sticky.',
    meta: 'Bacon wrapped dates: dates stuffed with almonds and wrapped in streaky bacon, roasted for 15 minutes. Eight servings.',
    kw: ['bacon wrapped dates', 'bacon wrapped dates with almonds', 'tapas bacon wrapped dates', 'baked bacon wrapped dates', 'dates wrapped in bacon'],
    why: 'Salty bacon, sweet dates and a crunch of almond: three ingredients, and a tapas plate that disappears. The pairing works because each one corrects the others.\n\nBuy soft, plump Medjool dates, and slit each one with a knife to take out the stone. Press an almond into the gap. A dry or hard date will not soften in the time it takes to crisp the bacon. **Choose thin streaky bacon.** Thick rashers stay chewy.\n\nCut each rasher in half, wrap a half around each date and secure it with a cocktail stick if it will not stay. Lay them seam-side down on a rack so the fat drains.\n\nRoast at 200°C for 15 minutes, turning once, until the bacon is crisp and deep brown. If your oven runs hot, check at 12 minutes. Let them cool for 3 minutes, because the sugar in the dates is very hot. Serve them on a warm plate with a little extra black pepper if you like a savoury edge.',
    ing: [
      '16 Medjool dates, about 300 g, stoned',
      '16 whole almonds, about 20 g',
      '8 rashers streaky bacon, about 160 g, halved'
    ],
    st: [
      'Heat the oven to 200°C. Slit each date and press an almond inside.',
      'Wrap each date in half a rasher of bacon and secure with a cocktail stick if needed.',
      'Place seam-side down on a rack over a tray and roast for 15 minutes, turning once, until the bacon is crisp.',
      'Cool for 3 minutes and serve warm.'
    ],
    tips: [
      'Use soft dates.',
      'Choose thin bacon.',
      'If your oven runs hot, check at 12 minutes.',
      'Wait before biting; the sugar is very hot.'
    ],
    pair: ['Manchego', 'Dry sherry', 'Green olives', 'Crusty bread'],
    store: 'Best eaten warm on the day. Keeps in the fridge for 2 days and reheats in a hot oven.',
    nut: [172, 5, 29, 4, 3, 24, 300]
  },

  'potatoes-au-gratin': {
    d: 'Thin slices of potato baked in garlic cream and milk under a gruyere crust until tender and golden.',
    meta: 'Potatoes au gratin: thin potato slices baked in garlic cream under a gruyere crust. Six servings, baked for 60 minutes.',
    kw: ['potatoes au gratin', 'classic potatoes au gratin', 'creamy potatoes au gratin', 'potato gratin with gruyere', 'french potato gratin'],
    why: 'The name means "with a crust", and the crust is the whole idea. The potatoes underneath are only a vehicle for cream, garlic and cheese.\n\nSlice the potatoes 3 mm thick, as evenly as possible, and do not rinse them. The starch on the surface thickens the cream as the dish bakes. A mandoline makes this fast. **Uneven slices give both raw and mushy potato in the same dish.**\n\nWarm the cream and milk with the garlic and nutmeg, then pour over the layered potatoes, which should be barely covered. Cover the dish with foil and bake at 180°C for 40 minutes.\n\nUncover, scatter with the cheese and bake for 20 minutes more, until the top is deep gold and the cream is bubbling at the edges. If your oven runs hot, check at 50 minutes in all. Rest for 10 minutes before serving. If the top browns too fast, cover the dish loosely with foil for the rest of the time.',
    ing: [
      '1 kg floury potatoes, peeled and sliced 3 mm thick',
      '300 ml double cream',
      '150 ml milk',
      '2 cloves garlic, crushed',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '30 g butter',
      '100 g gruyere, grated'
    ],
    st: [
      'Heat the oven to 180°C and butter a 2 litre baking dish. Warm the cream, milk, garlic, nutmeg, salt and pepper in a pan.',
      'Layer the potato slices in the dish, dotting with the butter as you go. Pour over the warm cream mixture.',
      'Cover with foil and bake for 40 minutes.',
      'Uncover, scatter with the gruyere and bake for 20 minutes more until golden. Rest for 10 minutes.'
    ],
    tips: [
      'Slice the potatoes evenly.',
      'Do not rinse off the starch.',
      'If your oven runs hot, check at 50 minutes in all.',
      'Let the dish rest before serving.'
    ],
    pair: ['Roast chicken', 'Green beans', 'Lamb chops', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [420, 10, 32, 28, 4, 4, 480]
  },

  'duchess-potatoes': {
    d: 'Mashed potato enriched with butter and egg yolks, piped into rosettes and baked until the ridges turn golden.',
    meta: 'Duchess potatoes: buttery mashed potato piped into rosettes and baked until golden. Six servings, 35 minutes of cooking.',
    kw: ['duchess potatoes', 'piped duchess potatoes', 'classic duchess potatoes', 'baked duchess potato rosettes', 'french duchess potatoes'],
    why: 'Mash that stands up on a plate: that is the whole idea, and it starts with dry potato. Wet mash will not hold a ridge.\n\nBoil the potatoes for 15 minutes until a knife slides in, drain them and leave them in the colander for 5 minutes so the steam escapes. Then press them through a ricer or mash until smooth. **Lumps show in a piped swirl.** Beat in the butter and egg yolks, and season with salt and nutmeg.\n\nThe mixture should be stiff enough to hold its shape off a spoon. If it is soft, return it to the pan for a minute over low heat to dry it out.\n\nPipe 12 rosettes onto a lined tray with a large star nozzle, brush with beaten egg and bake at 220°C for 20 minutes. If your oven runs hot, check at 15 minutes. The ridges should be dark gold.',
    ing: [
      '800 g floury potatoes, peeled and cut into chunks',
      '40 g butter',
      '2 egg yolks, about 40 g',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '1 egg, beaten, for the glaze'
    ],
    st: [
      'Boil the potatoes in salted water for 15 minutes until tender. Drain and leave in the colander for 5 minutes.',
      'Heat the oven to 220°C and line a tray. Press the potatoes through a ricer or mash until smooth. Beat in the butter, egg yolks, nutmeg and salt.',
      'Pipe 12 rosettes onto the tray with a large star nozzle. Brush with the beaten egg.',
      'Bake for 20 minutes until the ridges are dark gold.'
    ],
    tips: [
      'Let the steam escape from the potatoes.',
      'Use floury potatoes for a dry mash.',
      'If your oven runs hot, check at 15 minutes.',
      'Pipe on a tray lined with paper.'
    ],
    pair: ['Roast beef', 'Roast chicken', 'Green beans', 'Red wine gravy'],
    store: 'Keeps in the fridge for 2 days. Reheat in a 200°C oven for 12 minutes.',
    nut: [184, 5, 23, 8, 3, 1, 420]
  },

  'crispy-smashed-potatoes': {
    d: 'Small potatoes boiled until tender, squashed flat and roasted in olive oil with garlic and rosemary until crisp.',
    meta: 'Crispy smashed potatoes: small potatoes boiled, squashed flat and roasted with garlic and rosemary. Four servings, 45 minutes.',
    kw: ['crispy smashed potatoes', 'easy smashed potatoes', 'smashed roast potatoes', 'crispy roasted smashed potatoes', 'smashed potatoes with garlic and rosemary'],
    why: 'The first sign they are ready is the sound: a sharp crackle when you press a fork into the edge. That crunch comes from the surface area, since smashing the potatoes multiplies the crisp edges.\n\nBoil the potatoes for 15 minutes until a knife slides in with no resistance. They should be soft enough to collapse. Drain them and let the steam rise for 3 minutes. **Dry potatoes crisp, wet ones steam.**\n\nSet them on an oiled tray, and press each one flat with the bottom of a glass until it is about 1 cm thick. Pour over the oil, scatter with the garlic, rosemary and salt.\n\nRoast at 220°C for 30 minutes, turning once, until deep gold and crackling. If your oven runs hot, check at 24 minutes. Serve straight away while the edges are crisp. Sprinkle with a little flaky salt as they come out, when it clings to the oil.',
    ing: [
      '800 g baby potatoes',
      '4 tbsp olive oil',
      '3 cloves garlic, sliced',
      '2 sprigs rosemary, about 4 g leaves',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the potatoes in salted water for 15 minutes until tender. Drain and leave to steam dry for 3 minutes.',
      'Heat the oven to 220°C. Set the potatoes on an oiled tray and press each flat with a glass to 1 cm thick.',
      'Drizzle with the oil, scatter with the garlic, rosemary, salt and pepper.',
      'Roast for 30 minutes, turning once, until deep gold and crisp.'
    ],
    tips: [
      'Let the potatoes steam dry.',
      'Smash them gently so they stay in one piece.',
      'If your oven runs hot, check at 24 minutes.',
      'Do not crowd the tray.'
    ],
    pair: ['Roast chicken', 'Grilled steak', 'Garlic mayonnaise', 'Green salad'],
    store: 'Best eaten at once. Reheat leftovers in a 220°C oven for 10 minutes.',
    nut: [286, 4, 36, 14, 5, 2, 600]
  },

  'mashed-cauliflower': {
    d: 'Cauliflower steamed until tender and blended with butter, garlic and a little cream into a smooth mash.',
    meta: 'Mashed cauliflower: cauliflower steamed until tender and blended with butter, garlic and cream. Four servings, 15 minutes.',
    kw: ['mashed cauliflower', 'creamy mashed cauliflower', 'garlic mashed cauliflower', 'cauliflower mash', 'easy mashed cauliflower'],
    why: 'For a Sunday table of four, or a weeknight with a piece of fish, mashed cauliflower is a plain side that earns its place. It is soft, mild and takes butter well.\n\nThe common problem is water. Cauliflower holds a lot, and a wet mash tastes of nothing. Steam the florets instead of boiling them, for 12 minutes, until a knife slides in. Then tip them into a colander and let them stand for 3 minutes. **Squeeze out the steam with a clean cloth if you can.**\n\nBlend with the butter, cream, garlic and salt until completely smooth. A food processor gives a silky mash, while a potato masher leaves it rustic.\n\nTaste, add salt as needed, and finish with chives. If the mash is too wet, return it to the pan for 2 minutes over low heat, stirring, to cook off the surplus. Add a spoonful of the cooking water only if the mash is too stiff, never more.',
    ing: [
      '800 g cauliflower florets',
      '30 g butter',
      '3 tbsp double cream',
      '1 clove garlic, crushed',
      '1/2 tsp salt',
      '1/4 tsp black pepper',
      '1 tbsp chopped chives'
    ],
    st: [
      'Steam the cauliflower for 12 minutes until a knife slides in easily.',
      'Leave to drain in a colander for 3 minutes.',
      'Blend with the butter, cream, garlic, salt and pepper until smooth.',
      'If wet, stir in a pan over low heat for 2 minutes. Scatter with the chives.'
    ],
    tips: [
      'Steam rather than boil.',
      'Drain it well.',
      'If the mash is runny, dry it out in a pan.',
      'Taste for salt before serving.'
    ],
    pair: ['Grilled fish', 'Roast chicken', 'Sausages', 'Steamed greens'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan with a splash of cream.',
    nut: [159, 4, 11, 11, 4, 4, 360]
  },

  'ratatouille-bake': {
    d: 'Aubergine, courgette, peppers and tomatoes baked in one dish with garlic, thyme and olive oil until soft and sweet.',
    meta: 'Ratatouille bake: aubergine, courgette, peppers and tomatoes baked with garlic and thyme. Four servings, baked for 50 minutes.',
    kw: ['ratatouille bake', 'baked ratatouille', 'oven baked ratatouille', 'roasted ratatouille', 'french ratatouille bake'],
    why: 'Most home versions come out watery, and the fix is to bake the vegetables in a wide dish where the liquid can evaporate.\n\nCut the aubergine, courgette and pepper into chunks of about 2 cm, so they cook at the same pace. Toss them in a bowl with the oil, garlic, thyme, salt and pepper, then spread them in a shallow baking dish. **A crowded deep dish steams, and a wide shallow one roasts.**\n\nPour the passata and chopped tomatoes over the top and stir lightly. Bake at 190°C for 50 minutes, stirring once at 25 minutes, until the vegetables are soft and the sauce has thickened. If your oven runs hot, check at 40 minutes.\n\nLeave it for 10 minutes before serving. The flavour deepens as it cools a little, and it is just as good lukewarm. Finish with torn basil and a little more olive oil just before serving.',
    ing: [
      '300 g aubergine, cut into 2 cm chunks',
      '300 g courgette, cut into 2 cm chunks',
      '200 g red pepper, cut into 2 cm chunks',
      '1 onion, about 150 g, cut into wedges',
      '3 cloves garlic, sliced',
      '3 tbsp olive oil',
      '1 tbsp thyme leaves',
      '200 g passata',
      '400 g tinned chopped tomatoes',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190°C. Toss the aubergine, courgette, pepper, onion and garlic with the oil, thyme, salt and pepper.',
      'Spread them in a wide, shallow baking dish.',
      'Pour over the passata and tomatoes and stir lightly.',
      'Bake for 50 minutes, stirring once at 25 minutes, until soft and thickened. Rest for 10 minutes.'
    ],
    tips: [
      'Use a wide, shallow dish.',
      'Cut the vegetables the same size.',
      'If your oven runs hot, check at 40 minutes.',
      'Stir once halfway.'
    ],
    pair: ['Crusty bread', 'Grilled chicken', 'Rice', 'Rose wine'],
    store: 'Keeps in the fridge for 4 days. It tastes better the next day.',
    nut: [199, 4, 21, 11, 7, 13, 660]
  },

  'tuscan-bean-soup': {
    d: 'A thick soup of cannellini beans, carrot, celery, tomato and kale simmered with rosemary and olive oil.',
    meta: 'Tuscan bean soup: cannellini beans, carrot, celery, tomato and kale simmered with rosemary. Four servings, 40 minutes.',
    kw: ['tuscan bean soup', 'italian bean soup', 'cannellini bean soup', 'tuscan white bean soup', 'bean and kale soup'],
    why: 'This is what to make in the first cold week, when the kitchen window steams up and a pan of something thick feels like the right answer.\n\nSoften the onion, carrot and celery in the olive oil for 10 minutes without colour. The slow start builds a sweet base, and a rushed one makes the whole soup taste raw. **Mash a third of the beans against the side of the pan.** They thicken the soup without any cream or flour.\n\nAdd the garlic, rosemary, tomatoes, stock and the rest of the beans, and simmer for 25 minutes. Stir in the kale for the last 5 minutes, so it softens and stays green.\n\nTaste for salt, which depends on the stock. Ladle into bowls, drizzle with a little more oil and eat with crusty bread. The soup thickens as it stands, so add a splash of water when you reheat it.',
    ing: [
      '2 tbsp olive oil',
      '1 onion, about 150 g, chopped',
      '2 carrots, about 150 g, diced',
      '2 sticks celery, about 100 g, diced',
      '3 cloves garlic, crushed',
      '1 tbsp rosemary leaves',
      '400 g tinned chopped tomatoes',
      '480 g drained tinned cannellini beans',
      '800 ml vegetable stock',
      '100 g kale, stalks removed',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Soften the onion, carrot and celery in the oil for 10 minutes over medium heat.',
      'Add the garlic and rosemary for 1 minute, then the tomatoes, beans and stock. Mash about a third of the beans against the side of the pan.',
      'Simmer for 25 minutes. Add the kale for the last 5 minutes.',
      'Season with the salt and pepper and serve with a drizzle of oil.'
    ],
    tips: [
      'Cook the vegetables slowly at the start.',
      'Mash some beans to thicken.',
      'If the soup is too thick, add water.',
      'Add the kale near the end.'
    ],
    pair: ['Crusty bread', 'Parmesan', 'Green salad', 'Red wine'],
    store: 'Keeps in the fridge for 4 days. Add a splash of water when reheating.',
    nut: [273, 13, 35, 9, 11, 8, 1380]
  },

  'ham-and-cheese-quiche': {
    d: 'A shortcrust quiche of diced ham, cheddar and a soft cream and egg custard, baked until golden and just set.',
    meta: 'Ham and cheese quiche: a shortcrust quiche of ham, cheddar and a soft egg custard. Six servings, baked for 40 minutes.',
    kw: ['ham and cheese quiche', 'classic ham and cheese quiche', 'ham and cheddar quiche', 'ham quiche', 'homemade ham and cheese quiche'],
    why: 'Blind-bake the case. That is most of the recipe, and the part people skip.\n\nLine a 23 cm tin with the pastry, prick the base, cover it with baking paper and beans and bake at 180°C for 10 minutes. Take the paper out and bake for 5 minutes more. **The case must be dry and set before the custard goes in.** Otherwise the base turns pale and soft.\n\nScatter the ham and cheese over the pastry. Whisk the eggs with the cream, milk, salt and pepper, and pour it over. The custard should reach the top of the case without spilling.\n\nBake for 25 minutes, until the top is golden and the middle has only a slight wobble. If your oven runs hot, check at 20 minutes. Rest the quiche for 10 minutes before cutting; it firms up as it cools, and warm slices hold together better. Choose a mature cheddar, as a mild cheese disappears into the custard.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '150 g cooked ham, diced',
      '100 g mature cheddar, grated',
      '3 eggs, about 150 g',
      '200 ml double cream',
      '100 ml milk',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180°C. Line a 23 cm tart tin with the pastry, prick the base, cover with baking paper and beans and bake for 10 minutes. Remove the paper and beans and bake for 5 minutes more.',
      'Scatter the ham and cheese over the case.',
      'Whisk the eggs with the cream, milk, salt and pepper and pour over.',
      'Bake for 25 minutes until golden and just set. Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Blind bake the pastry.',
      'Do not overfill the case.',
      'If your oven runs hot, check at 20 minutes.',
      'Rest before slicing.'
    ],
    pair: ['Green salad', 'Tomato salad', 'Chutney', 'Crisp white wine'],
    store: 'Keeps in the fridge for 3 days. Serve cold or reheat in a 160°C oven for 10 minutes.',
    nut: [496, 17, 26, 36, 1, 3, 970]
  }
};
