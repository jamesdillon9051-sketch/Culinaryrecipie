'use strict';

/**
 * Volume forty — tarts, pies, pasties, croissants, danishes and rolls.
 *
 * Savoury pastry from Britain and France, a few quick fried and toasted
 * things, and the bakery side of puff pastry and enriched dough. Times are
 * the recipe's own; ovens differ, so each method says when to check early.
 * Nutrition is estimated from the ingredient list by npm run calc.
 */

module.exports = {
  'mushroom-tart': {
    d: 'A crisp puff pastry tart of garlicky browned mushrooms, thyme and melted cheddar, served warm or at room temperature.',
    meta: 'Mushroom tart: crisp puff pastry topped with garlicky browned mushrooms, thyme and cheddar. Six servings, 50 minutes in all.',
    kw: ['mushroom tart', 'easy mushroom tart', 'puff pastry mushroom tart', 'garlic mushroom tart', 'mushroom and thyme tart'],
    why: 'Mushrooms, pastry, thyme, cheese: four things you already own, and about fifty minutes. The only skill involved is getting the water out of the mushrooms before they meet the pastry.\n\nFry them in a dry, wide pan with no oil at first. They release their liquid, it boils away, and only then do they brown. **Add the butter and garlic at the end.** Garlic added early burns before the mushrooms are done and turns the whole tart bitter.\n\nScore a border 2 cm in from the edge of the pastry and prick the middle with a fork, so the centre stays flat while the border puffs. Spread the mushrooms inside the border and scatter over the cheese.\n\nBake at 200°C for 30 minutes, until the border is deep gold and the underside is crisp. If your oven runs hot, check at 22 minutes. Rest the tart for 5 minutes before cutting.',
    ing: [
      '320 g ready-rolled puff pastry',
      '500 g chestnut mushrooms, sliced',
      '30 g butter',
      '3 cloves garlic, crushed',
      '1 tbsp thyme leaves',
      '100 g mature cheddar, grated',
      '1 egg, beaten',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Unroll the pastry onto a lined tray, score a border 2 cm in from the edge and prick the middle with a fork.',
      'Fry the mushrooms in a dry pan over high heat for 8 minutes until the liquid has gone and they are browned. Add the butter, garlic, thyme, salt and pepper and cook for 1 minute.',
      'Spread the mushrooms inside the border, scatter over the cheese and brush the border with egg.',
      'Bake for 30 minutes until the border is golden and the base is crisp. Rest for 5 minutes.'
    ],
    tips: [
      'Start the mushrooms in a dry pan.',
      'Add the garlic last so it does not burn.',
      'If your oven runs hot, check at 22 minutes.',
      'Cut the tart with a sharp knife, not a saw.'
    ],
    pair: ['Rocket salad', 'Tomato soup', 'Poached egg', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat in a 180°C oven for 10 minutes to crisp the base.',
    nut: [352, 11, 23, 24, 2, 3, 640]
  },

  'mini-quiches': {
    d: 'Twelve small shortcrust cases filled with an egg and cream custard, ham and cheddar, baked until just set.',
    meta: 'Mini quiches: twelve shortcrust cases filled with egg custard, ham and cheddar. Makes twelve, baked for 20 minutes.',
    kw: ['mini quiches', 'ham and cheese mini quiche', 'party mini quiches', 'quiche cups', 'mini quiche lorraine'],
    why: 'Small and neat. A mini quiche is a quiche with the sliced-wedge problem solved, and it suits a buffet or a lunchbox.\n\nThe pastry is the part to get right. Roll it thin, about 3 mm, and press it into the tin without stretching, because stretched pastry shrinks in the oven and the cases come out short. Chill the lined tin for 15 minutes if the kitchen is warm.\n\nThe custard is two eggs for every 100 ml of cream, and that ratio sets softly without turning rubbery. **Fill the cases only two-thirds full.** The custard puffs as it cooks, then settles as it cools.\n\nBake at 190°C for 20 minutes, until the centres have a slight wobble. If your oven runs hot, check at 15 minutes. Leave the quiches in the tin for 5 minutes before lifting them out. Serve them warm or cold, which is why they travel so well to a picnic or a party table.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '4 eggs, about 200 g',
      '200 ml double cream',
      '100 g smoked ham, finely chopped',
      '80 g mature cheddar, grated',
      '1 tbsp chopped chives',
      '1/4 tsp salt',
      '1/4 tsp black pepper',
      '1 tsp butter for the tin'
    ],
    st: [
      'Heat the oven to 190°C and grease a 12-hole tin. Roll the pastry to 3 mm, cut 12 circles of 8 cm and press them into the holes.',
      'Whisk the eggs with the cream, salt and pepper. Divide the ham, cheese and chives between the cases.',
      'Pour in the custard until each case is two-thirds full.',
      'Bake for 20 minutes until set with a slight wobble. Cool in the tin for 5 minutes.'
    ],
    tips: [
      'Roll the pastry thin and do not stretch it.',
      'Fill the cases two-thirds full only.',
      'If your oven runs hot, check at 15 minutes.',
      'Loosen each case with a knife before lifting.'
    ],
    pair: ['Green salad', 'Cherry tomatoes', 'Chutney', 'Sparkling water'],
    store: 'Keeps in the fridge for 2 days. Serve cold or warm for 8 minutes in a 160°C oven.',
    nut: [229, 7, 12, 17, 1, 1, 380]
  },

  'halloumi-fries': {
    d: 'Sticks of halloumi dusted in seasoned flour and fried until golden, with a lemon and mint yoghurt dip.',
    meta: 'Halloumi fries: golden fried sticks of halloumi in a light flour coating with a lemon and mint yoghurt dip. Four servings.',
    kw: ['halloumi fries', 'easy halloumi fries', 'fried halloumi sticks', 'halloumi chips', 'halloumi with yoghurt dip'],
    why: 'Halloumi fries go wrong in one way: they stick. Squeaky wet cheese meets a hot pan, welds itself to it, and tears.\n\nPat the sticks dry with kitchen paper first. Then toss them in flour, paprika and pepper until every side is dusted. **Dry cheese and a hot pan are the whole technique.** The flour forms a thin crust that fries rather than steams.\n\nUse enough oil to come about 5 mm up the side of the pan and heat it for 2 minutes. A pinch of flour should sizzle at once. Cook the sticks in two batches, turning them as each side turns gold, about 4 minutes a batch.\n\nHalloumi stays firm when hot but goes rubbery as it cools, so eat these straight away. The yoghurt dip is cold and sharp, which suits the salt. Squeeze lemon over them at the table and add a little more salt only if the cheese tastes mild.',
    ing: [
      '250 g halloumi, cut into 12 sticks',
      '3 tbsp plain flour',
      '1 tsp smoked paprika',
      '1/4 tsp black pepper',
      '4 tbsp sunflower oil',
      '150 g Greek yoghurt',
      '1 tbsp lemon juice',
      '1 tbsp chopped mint'
    ],
    st: [
      'Mix the yoghurt, lemon juice and mint in a small bowl.',
      'Pat the halloumi dry. Toss the sticks in the flour, paprika and pepper until coated.',
      'Heat the oil in a frying pan for 2 minutes over medium-high heat.',
      'Fry half the sticks for 4 minutes, turning, until golden on every side. Drain on kitchen paper and repeat with the rest.'
    ],
    tips: [
      'Dry the cheese before it meets the flour.',
      'Check the oil is hot with a pinch of flour.',
      'If the pan smokes, lower the heat.',
      'Serve at once, as the cheese firms up when it cools.'
    ],
    pair: ['Lemon wedges', 'Sweet chilli sauce', 'Cucumber salad', 'Cold lager'],
    store: 'Best eaten at once. Leftovers keep in the fridge for 1 day and are best reheated in a hot oven.',
    nut: [392, 18, 8, 32, 0, 2, 770]
  },

  'halloumi-burgers': {
    d: 'Thick slabs of seared halloumi in a toasted bun with tomato, lettuce, red onion and a garlic mayonnaise.',
    meta: 'Halloumi burgers: seared halloumi slabs in a toasted bun with tomato, lettuce and garlic mayonnaise. Four burgers for 10 minutes of cooking.',
    kw: ['halloumi burger', 'easy halloumi burger', 'vegetarian halloumi burger', 'halloumi burger with garlic mayo', 'halloumi sandwich'],
    why: 'Can a burger without meat still feel like a burger? With halloumi, it can, because the cheese does not melt. It sears, goes crisp and golden outside, and stays chewy inside.\n\nCut the halloumi into four slabs about 1 cm thick, the size of the bun. Thinner slabs go hard, and thicker ones do not brown before the middle is warm. **Dry the slabs well and use no oil in the pan.** Halloumi releases enough fat of its own.\n\nSear for 3 minutes on each side over medium-high heat, until deep gold with dark stripes. Toast the buns in the same pan for 1 minute so they take up what is left behind.\n\nBuild quickly: garlic mayonnaise on both halves, lettuce to shield the bun from the heat, then tomato, onion and the cheese. Eat it hot. A squeeze of lemon in the mayonnaise cuts through the richness of the cheese and keeps the burger from feeling heavy.',
    ing: [
      '450 g halloumi, cut into 4 slabs',
      '4 burger buns, about 280 g',
      '4 tbsp mayonnaise',
      '1 clove garlic, crushed',
      '2 tomatoes, about 240 g, sliced',
      '4 lettuce leaves',
      '1/2 red onion, thinly sliced',
      '1 tsp lemon juice'
    ],
    st: [
      'Stir the mayonnaise with the garlic and lemon juice.',
      'Pat the halloumi dry. Heat a dry non-stick frying pan over medium-high heat.',
      'Sear the slabs for 3 minutes on each side until deep gold. Toast the cut sides of the buns in the pan for 1 minute.',
      'Spread the buns with the mayonnaise. Add lettuce, tomato, onion and halloumi and serve at once.'
    ],
    tips: [
      'Cut the slabs about 1 cm thick.',
      'Use a dry pan and no oil.',
      'If the cheese sticks, wait; it releases once it has browned.',
      'Put the lettuce next to the bun to keep it crisp.'
    ],
    pair: ['Oven chips', 'Coleslaw', 'Pickled red onion', 'Cold lager'],
    store: 'Best eaten at once. Cooked halloumi keeps in the fridge for 1 day but turns firm.',
    nut: [683, 32, 42, 43, 3, 7, 1790]
  },

  'welsh-cheese-and-leek-pie': {
    d: 'A shortcrust pie of soft leeks in a mustardy cheese sauce, with a crisp top and bottom and a glossy egg-washed lid.',
    meta: 'Welsh cheese and leek pie: shortcrust filled with soft leeks in a mustardy cheese sauce. Six servings, baked for 40 minutes.',
    kw: ['welsh cheese and leek pie', 'cheese and leek pie', 'leek and cheese pie', 'vegetarian leek pie', 'welsh leek pie'],
    why: 'Salt the sauce lightly and the cheese does the rest. Salt the leeks hard and the pie is too much. That is the first thing to know about this one.\n\nLeeks hold a surprising amount of water. Cook them gently in butter for 10 minutes with the lid on, then for 3 minutes without it, so the liquid steams away. **A wet filling is the main cause of a pale, soggy base.** Stir in the flour, then the milk a little at a time, until you have a thick sauce.\n\nOff the heat, add the cheese and mustard. Leave the filling to cool before it goes into the pastry, or the base turns to paste.\n\nBake at 200°C for 40 minutes, until the top is deep gold. If your oven runs hot, check at 30 minutes. Put the pie dish on a hot tray to crisp the base. Serve it in thick wedges with something green, as the pie itself is rich and wants a sharp side.',
    ing: [
      '500 g ready-made shortcrust pastry',
      '600 g leeks, sliced',
      '40 g butter',
      '25 g plain flour',
      '250 ml milk',
      '200 g mature cheddar, grated',
      '1 tsp English mustard',
      '1 egg, beaten',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C with a tray inside. Melt the butter, add the leeks and cook with the lid on for 10 minutes, then 3 minutes with it off.',
      'Stir in the flour, then add the milk a little at a time and simmer for 3 minutes until thick.',
      'Off the heat, stir in the cheese, mustard, salt and pepper. Leave to cool.',
      'Line a 23 cm pie dish with two-thirds of the pastry, fill it and cover with the rest. Seal, brush with egg and cut a steam hole.',
      'Bake on the hot tray for 40 minutes until deep gold.'
    ],
    tips: [
      'Cook the leeks until the pan is dry.',
      'Cool the filling before it meets the pastry.',
      'If your oven runs hot, check at 30 minutes.',
      'Bake on a preheated tray for a crisp base.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'Pickled onions', 'Apple cider'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 15 minutes.',
    nut: [665, 18, 56, 41, 4, 8, 970]
  },

  'game-pie': {
    d: 'A deep pie of venison, pheasant and bacon, slowly simmered in red wine and stock under a golden shortcrust lid.',
    meta: 'Game pie: venison, pheasant and bacon simmered in red wine and stock under a golden shortcrust lid. Eight servings, 2 hours of cooking.',
    kw: ['game pie', 'venison and pheasant pie', 'traditional game pie', 'british game pie', 'game pie with red wine'],
    why: 'Game is lean, and lean meat dries out if you hurry it. This pie is built around that.\n\nBrown the venison and pheasant in batches, so the pan stays hot and the meat colours instead of stewing. Then simmer everything with the bacon, onion, juniper, wine and stock for 60 minutes with the lid on. **The meat should give way to a spoon, not a knife.** If it is still firm, give it 15 minutes more.\n\nThe filling must be thick, so reduce the liquid until it coats the back of a spoon, then let it cool before the pastry goes on. Hot filling melts the lid.\n\nCover the pie, seal the edges, brush with egg and bake at 200°C for 50 minutes. If your oven runs hot, check at 40 minutes. The pastry should be a deep gold and the gravy bubbling at the vent. Serve it in thick slices with a spoonful of redcurrant jelly, which cuts the richness of the meat.',
    ing: [
      '600 g venison, diced',
      '400 g pheasant breast, diced',
      '200 g streaky bacon, chopped',
      '1 onion, about 150 g, chopped',
      '2 tbsp plain flour',
      '2 tbsp sunflower oil',
      '150 ml red wine',
      '300 ml beef stock',
      '2 g juniper berries, crushed',
      '1 tbsp thyme leaves',
      '500 g ready-made shortcrust pastry',
      '1 egg, beaten',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Toss the venison and pheasant in the flour. Brown them in the oil in batches for 10 minutes in all and set aside.',
      'Fry the bacon and onion in the same pan for 5 minutes. Add the wine, stock, juniper, thyme, salt, pepper and the meat.',
      'Cover and simmer for 60 minutes until the meat is tender. Uncover for the last 10 minutes to thicken the gravy, then cool.',
      'Heat the oven to 200°C. Fill a 1.5 litre pie dish, cover with the pastry, seal, brush with egg and cut a steam hole.',
      'Bake for 50 minutes until the pastry is deep gold and the gravy is bubbling.'
    ],
    tips: [
      'Brown the meat in batches.',
      'Cool the filling before the pastry goes on.',
      'If your oven runs hot, check at 40 minutes.',
      'Test the meat with a spoon; it should fall apart.',
      'Rest the pie for 10 minutes before serving.'
    ],
    pair: ['Mashed potato', 'Buttered cabbage', 'Redcurrant jelly', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 25 minutes.',
    nut: [532, 38, 32, 28, 2, 2, 1240]
  },

  'vegetable-pasties': {
    d: 'Hand-sized shortcrust pasties filled with potato, swede, carrot and onion, baked until crisp and golden.',
    meta: 'Vegetable pasties: shortcrust parcels of potato, swede, carrot and onion, baked for 45 minutes. Makes six.',
    kw: ['vegetable pasties', 'vegetarian pasties', 'veg pasty', 'potato and swede pasty', 'homemade vegetable pasty'],
    why: 'A pasty is a pastry parcel with the filling sealed inside, and it cooks in its own steam. That is the reason the vegetables go in raw.\n\nCut them small, about 5 mm, because they have to cook through in the time it takes the pastry to brown. Potato, swede and carrot are all firm and cook at much the same rate. **Season the filling more than feels sensible.** Raw vegetables inside pastry taste mild once cooked.\n\nCut six circles of pastry about 20 cm across, pile the filling in the middle and add a knob of butter. Bring the edges together over the top and crimp tightly. A loose seam leaks.\n\nBake at 200°C for 15 minutes, then at 180°C for 30 minutes more. If your oven runs hot, check at 35 minutes. A skewer into the centre should meet no resistance. Eat them warm from the oven, or cold the next day in a packed lunch, which is what a pasty was always for.',
    ing: [
      '600 g ready-made shortcrust pastry',
      '250 g potato, peeled and diced',
      '150 g swede, peeled and diced',
      '150 g carrot, peeled and diced',
      '1 onion, about 150 g, finely chopped',
      '30 g butter',
      '1 tbsp plain flour',
      '1 egg, beaten',
      '1 tsp salt',
      '1 tsp black pepper'
    ],
    st: [
      'Heat the oven to 200°C. Mix the potato, swede, carrot and onion with the flour, salt and pepper.',
      'Roll the pastry to 3 mm and cut six circles of about 20 cm.',
      'Pile the filling on one half of each circle and top with the butter. Fold over, crimp the edges tightly and brush with egg.',
      'Bake for 15 minutes, then lower the oven to 180°C and bake for 30 minutes more.'
    ],
    tips: [
      'Cut the vegetables small and even.',
      'Season the filling firmly.',
      'If your oven runs hot, check at 35 minutes.',
      'Crimp the edge tightly so it does not leak.'
    ],
    pair: ['Brown sauce', 'Baked beans', 'Mushy peas', 'Hot tea'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 15 minutes.',
    nut: [556, 9, 58, 32, 5, 6, 1030]
  },

  'egg-and-bacon-tart': {
    d: 'A shortcrust tart of streaky bacon and whole eggs set in a light custard, baked until just firm.',
    meta: 'Egg and bacon tart: shortcrust filled with streaky bacon and eggs set in a light custard. Six servings, baked for 35 minutes.',
    kw: ['egg and bacon tart', 'bacon and egg tart', 'egg and bacon pie', 'bacon and egg flan', 'bacon egg tart'],
    why: 'Most home versions come out with a pale, soft base, and the fix is a short blind bake before anything goes in.\n\nPress the pastry into a 23 cm tin, prick it, line it with baking paper and beans and bake at 190°C for 10 minutes. Take the paper out and give it 2 minutes more to dry. **A dry base is what holds a wet custard.**\n\nScatter the chopped bacon over the pastry and break in the eggs whole, so each yolk sits in the custard like a sun. Pour the milk and cream around them.\n\nBake for 25 minutes more, until the white is set and the yolks still look soft. If your oven runs hot, check at 20 minutes. Rest for 10 minutes, as the custard continues to firm. Cut it into thick slices and serve it warm with a salad, or pack it cold for a picnic.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '200 g streaky bacon, chopped',
      '4 eggs, about 200 g',
      '3 eggs for the custard, about 150 g',
      '100 ml milk',
      '100 ml double cream',
      '1 tbsp chopped chives',
      '1/4 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 190°C. Line a 23 cm tart tin with the pastry, prick the base, cover with baking paper and beans and bake for 10 minutes.',
      'Remove the paper and beans and bake for 2 minutes more.',
      'Whisk the 3 eggs with the milk, cream, salt and pepper. Scatter the bacon over the pastry and break the 4 eggs on top.',
      'Pour in the custard and scatter with the chives. Bake for 25 minutes until the white is set. Rest for 10 minutes.'
    ],
    tips: [
      'Blind bake the base first.',
      'Break each egg into a cup before adding it.',
      'If your oven runs hot, check at 20 minutes.',
      'Rest the tart before slicing.'
    ],
    pair: ['Tomato salad', 'Baked beans', 'Brown sauce', 'Strong tea'],
    store: 'Keeps in the fridge for 2 days. Eat cold or warm for 10 minutes in a 160°C oven.',
    nut: [438, 17, 25, 30, 1, 3, 1000]
  },

  'irish-potato-cakes': {
    d: 'Soft pan-fried cakes of cold mashed potato, flour and butter, golden outside and fluffy within.',
    meta: 'Irish potato cakes: cold mashed potato mixed with flour and butter and fried until golden. Four servings for 10 minutes of cooking.',
    kw: ['irish potato cakes', 'easy irish potato cakes', 'potato cakes from leftover mash', 'fried potato cakes', 'irish potato farls'],
    why: 'Short on time? Potato cakes ask only for the mash left from last night.\n\nThe potato must be cold. Warm mash is sticky and takes up too much flour, which makes the cakes heavy. Cold mash holds together on a light touch. **Work the dough as little as you can.** Stir in the flour, butter and salt until just combined, then stop.\n\nTip the dough onto a floured surface and pat it into a round about 1.5 cm thick. Cut it into eight wedges. A thinner cake turns crisp, and a thicker one stays raw in the middle.\n\nFry in a dry, medium-hot pan with a little butter for about 4 minutes on each side, until the surface is spotted brown. Eat them hot, with butter melting on top. Leftover cakes can be split and fried again the next morning until crisp, which many cooks prefer to the first round.',
    ing: [
      '500 g cold mashed potato',
      '60 g plain flour',
      '30 g butter, melted',
      '1/2 tsp salt',
      '1 tbsp butter for frying'
    ],
    st: [
      'Mix the mash, flour, melted butter and salt until just combined.',
      'Pat the dough into a round 1.5 cm thick on a floured surface and cut it into 8 wedges.',
      'Melt the frying butter in a pan over medium heat.',
      'Fry the wedges for 4 minutes on each side until golden brown. Serve hot.'
    ],
    tips: [
      'Use cold mash.',
      'Handle the dough lightly.',
      'If the pan is too hot, the outside burns before the inside warms; lower the heat.',
      'Flour the surface well so the cakes do not stick.'
    ],
    pair: ['Fried eggs', 'Grilled bacon', 'Grilled tomatoes', 'Strong tea'],
    store: 'Keeps in the fridge for 2 days. Reheat in a dry pan for 3 minutes on each side.',
    nut: [229, 4, 33, 9, 3, 1, 300]
  },

  'potato-cakes': {
    d: 'Thin slices of potato dipped in a light batter and fried until crisp outside and soft within, salted while hot.',
    meta: 'Potato cakes: potato slices in a light batter, fried until crisp outside and soft within. Four servings for 10 minutes of cooking.',
    kw: ['potato cakes', 'easy potato cakes', 'battered potato slices', 'australian potato cakes', 'fried potato scallops'],
    why: 'Thin slices, light batter, hot oil. This is a chip shop side with the chips swapped for rounds of potato.\n\nCut the potatoes about 3 mm thick, as even as you can make them, and dry them well on a tea towel. Wet potato makes the batter slide off. **The batter should be cold and thick enough to coat the slice.** Mix flour, baking powder, salt and cold water just until smooth.\n\nHeat 300 ml of oil to a depth of about 2 cm and test it with a drop of batter, which should sizzle and rise at once. Dip each slice, let the extra drip off and lower it in gently.\n\nFry in two batches for 4 minutes each, turning once, until the batter is pale gold and the potato is soft when pressed. Salt them as they come out. Add the salt while the surface is still glossy with oil, because that is when it sticks best.',
    ing: [
      '600 g potatoes, peeled and sliced 3 mm thick',
      '100 g plain flour',
      '1 tsp baking powder',
      '150 ml cold water',
      '1/2 tsp salt',
      '40 ml sunflower oil absorbed in frying',
      '1/2 tsp sea salt to finish'
    ],
    st: [
      'Dry the potato slices on a tea towel. Whisk the flour, baking powder and salt with the water until smooth.',
      'Heat the oil in a deep frying pan to about 2 cm depth over medium-high heat.',
      'Dip the slices in the batter and fry half of them for 4 minutes, turning once, until pale gold. Drain on kitchen paper.',
      'Repeat with the rest. Sprinkle with the sea salt and serve hot.'
    ],
    tips: [
      'Dry the slices well.',
      'Keep the batter cold.',
      'If the oil smokes, take it off the heat for a minute.',
      'Fry in two batches so the oil does not cool.'
    ],
    pair: ['Tomato ketchup', 'Vinegar', 'Fried fish', 'Cold lemonade'],
    store: 'Best eaten at once. Reheat leftovers in a hot oven for 8 minutes.',
    nut: [294, 6, 45, 10, 4, 1, 720]
  },

  'spaghetti-toasties': {
    d: 'Two toasted sandwiches filled with tinned spaghetti and melted cheddar, crisp outside and molten inside.',
    meta: 'Spaghetti toasties: toasted sandwiches filled with tinned spaghetti and cheddar. Two servings for 6 minutes of cooking.',
    kw: ['spaghetti toastie', 'easy spaghetti toastie', 'spaghetti on toast sandwich', 'tinned spaghetti toastie', 'cheese and spaghetti toastie'],
    why: 'It looks like a cheese toastie and cooks like one, but the spaghetti inside is the whole reason to make it.\n\nThe common mistake is too much filling. Tinned spaghetti is wet, and wet filling leaks out and steams the bread. Drain the sauce for 1 minute in a sieve, then use about 3 tablespoons a sandwich. **Cheese goes against the bread, spaghetti in the middle.** The cheese forms a seal that keeps the sauce off the toast.\n\nButter the outside of the bread generously, edge to edge. This is what gives the crisp, even gold.\n\nCook in a pan over medium heat, pressing down with a spatula, for 3 minutes on each side. The cheese should be oozing and the bread the colour of a digestive biscuit. Rest it for 1 minute, because the middle is hot. Cut the toastie diagonally and serve it with a bowl of soup if you want something more filling.',
    ing: [
      '4 slices white bread, about 140 g',
      '400 g tin spaghetti in tomato sauce, drained',
      '60 g mature cheddar, grated',
      '20 g butter, softened'
    ],
    st: [
      'Butter one side of each slice. Turn two slices butter-side down and top each with half the cheese.',
      'Spoon the drained spaghetti onto the cheese and cover with the other slices, butter-side up.',
      'Cook in a pan over medium heat for 3 minutes on each side, pressing down, until golden. Rest for 1 minute before cutting.'
    ],
    tips: [
      'Drain the spaghetti first.',
      'Put the cheese against the bread.',
      'If the bread browns too fast, turn the heat down.',
      'Wait a minute before biting; the filling is very hot.'
    ],
    pair: ['Tomato soup', 'Green salad', 'Pickles', 'Hot tea'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats in a dry pan.',
    nut: [437, 17, 45, 21, 5, 13, 740]
  },

  'tomato-soup-with-grilled-cheese': {
    d: 'Smooth tomato soup with garlic and a splash of cream, served with golden cheddar grilled cheese sandwiches for dipping.',
    meta: 'Tomato soup with grilled cheese: smooth tomato soup with garlic and cream beside golden cheddar sandwiches. Four servings, 35 minutes in all.',
    kw: ['tomato soup with grilled cheese', 'tomato soup and grilled cheese sandwich', 'creamy tomato soup', 'tomato soup with cheese toastie', 'homemade tomato soup'],
    why: 'Salt the onions as they soften and the soup tastes like itself from the start. That is the quick tip for this pairing.\n\nCook the onion in butter for 5 minutes until soft and translucent, then add the garlic for 30 seconds. Tip in the tinned tomatoes and the stock, and simmer for 15 minutes. **Blend until perfectly smooth, then add the cream off the heat.** Cream added to a boiling soup can split.\n\nWhile the soup simmers, make the sandwiches. Butter the outside of the bread, put the cheddar in the middle and cook over medium heat for 3 minutes on each side, pressing down. Keep the heat moderate so the cheese melts before the bread browns.\n\nCut each sandwich in strips for dipping. If the soup tastes sharp, a pinch of salt usually fixes it before sugar does. A few torn basil leaves on top of the soup add colour, and a crack of black pepper finishes it.',
    ing: [
      '1 onion, about 150 g, chopped',
      '30 g butter',
      '2 cloves garlic, crushed',
      '800 g tinned chopped tomatoes',
      '500 ml vegetable stock',
      '100 ml double cream',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '8 slices white bread, about 280 g',
      '150 g mature cheddar, sliced',
      '30 g butter, softened, for the bread'
    ],
    st: [
      'Melt 30 g butter in a pan and cook the onion for 5 minutes. Add the garlic for 30 seconds.',
      'Add the tomatoes, stock, salt and pepper. Simmer for 15 minutes.',
      'Meanwhile butter the bread, fill four sandwiches with the cheddar and cook each for 3 minutes on each side over medium heat.',
      'Blend the soup until smooth, stir in the cream and reheat gently. Serve with the sandwiches cut into strips.'
    ],
    tips: [
      'Add the cream after blending, off the heat.',
      'Cook the sandwiches over medium heat.',
      'If the soup tastes sharp, add a pinch of salt.',
      'Cut the sandwiches into strips for dipping.'
    ],
    pair: ['Crisp apple', 'Green salad', 'Pickles', 'Hot chocolate'],
    store: 'Soup keeps in the fridge for 3 days. Sandwiches are best made fresh.',
    nut: [596, 20, 48, 36, 5, 11, 1610]
  },

  'cheese-and-ham-croissant': {
    d: 'Warm croissants split and filled with ham, gruyere-style cheese and Dijon mustard, heated until the cheese melts.',
    meta: 'Cheese and ham croissant: warm croissants filled with ham, cheddar and Dijon mustard. Two servings for 8 minutes in the oven.',
    kw: ['cheese and ham croissant', 'ham and cheese croissant', 'easy ham and cheese croissant', 'baked ham croissant', 'breakfast croissant with ham'],
    why: 'Split the croissant only three-quarters of the way through, and the filling stays put. That is the single most useful tip for this breakfast.\n\nA shop-bought croissant, a little ham and some cheese is all it takes, but the order matters. Spread the mustard on the inside of the top half, where it will not make the base damp. **Put the cheese on the ham, not under it.** The cheese melts into the folds and glues the sandwich together.\n\nWrap the filled croissants loosely in foil, which keeps the flaky top from burning while the middle warms.\n\nHeat at 180°C for 8 minutes, then open the foil for the last 2 minutes if you want the crust crisp. If your oven runs hot, check at 6 minutes. Let them cool for 1 minute before eating. A handful of rocket tucked in after baking adds a fresh, peppery bite against the melted cheese.',
    ing: [
      '2 croissants, about 130 g',
      '4 slices ham, about 80 g',
      '60 g cheddar, grated',
      '2 tsp Dijon mustard'
    ],
    st: [
      'Heat the oven to 180°C. Split each croissant three-quarters of the way through and spread the top halves with mustard.',
      'Fill with the ham and top with the cheese. Close and wrap loosely in foil.',
      'Bake for 8 minutes, opening the foil for the last 2 minutes to crisp the top. Cool for 1 minute.'
    ],
    tips: [
      'Split the croissant but do not cut it right through.',
      'Put the cheese on top of the ham.',
      'If your oven runs hot, check at 6 minutes.',
      'Open the foil near the end for a crisp crust.'
    ],
    pair: ['Orange juice', 'Fresh fruit', 'Scrambled eggs', 'Hot coffee'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and reheats in a 160°C oven.',
    nut: [438, 21, 30, 26, 2, 5, 1060]
  },

  'almond-croissant': {
    d: 'Day-old croissants soaked in sugar syrup, filled with almond cream and topped with flaked almonds, baked until golden.',
    meta: 'Almond croissant: croissants brushed with syrup, filled with almond cream and baked until golden. Six servings, 15 minutes of cooking.',
    kw: ['almond croissant', 'homemade almond croissant', 'almond croissants from day old croissants', 'frangipane croissant', 'bakery style almond croissant'],
    why: 'Butter, sugar, an egg, ground almonds: four ingredients make the filling, and a stale croissant is the container. In fact, an almond croissant is the best use for one that has gone dry.\n\nA fresh croissant would collapse under the syrup. A dry one drinks it in and comes back soft inside and crisp outside. **Day-old is not a compromise, it is the method.**\n\nBeat the butter and sugar until pale, then the egg, ground almonds, flour and almond extract. The cream should be spreadable, not runny.\n\nSplit the croissants lengthways, brush the cut sides with the syrup, spread the almond cream inside and on top, and press on the flaked almonds. Bake at 180°C for 12 minutes until the top is browned and puffed. If your oven runs hot, check at 9 minutes. The tops should look craggy and deeply browned, because the edges of the almond cream caramelise and taste the best.',
    ing: [
      '6 day-old croissants, about 390 g',
      '75 g butter, softened',
      '75 g caster sugar',
      '1 egg, about 50 g',
      '75 g ground almonds',
      '2 tbsp plain flour',
      '1/2 tsp almond extract',
      '40 g flaked almonds',
      '2 tbsp caster sugar for the syrup',
      '2 tbsp water',
      '1 tbsp icing sugar to finish'
    ],
    st: [
      'Heat the oven to 180°C. Warm the syrup sugar and water in a small pan for 2 minutes until dissolved, then cool.',
      'Beat the butter and caster sugar until pale. Beat in the egg, then the ground almonds, flour and almond extract.',
      'Split the croissants lengthways and brush the cut sides with syrup. Spread almond cream inside, close, and spread more on top.',
      'Press on the flaked almonds and bake on a lined tray for 12 minutes until puffed and browned. Dust with icing sugar.'
    ],
    tips: [
      'Use croissants that are a day old.',
      'Do not overfill; the cream spreads as it bakes.',
      'If your oven runs hot, check at 9 minutes.',
      'Cool for 5 minutes before dusting with icing sugar.'
    ],
    pair: ['Flat white', 'Fresh raspberries', 'Orange juice', 'Hot tea'],
    store: 'Best the day they are baked. Keeps in a tin for 1 day and reheats in a 160°C oven for 5 minutes.',
    nut: [566, 11, 54, 34, 4, 25, 300]
  },

  'cream-cheese-danish': {
    d: 'Squares of puff pastry folded around a sweet cream cheese filling, baked until golden and finished with a thin icing.',
    meta: 'Cream cheese danish: puff pastry squares folded around a sweet cream cheese filling and baked until golden. Eight servings, 20 minutes.',
    kw: ['cream cheese danish', 'puff pastry cream cheese danish', 'cream cheese danish recipe', 'cheese danish pastry', 'cream cheese pastries'],
    why: 'Why does a puff pastry danish look so complicated and take so little work? Because the pastry is already made, and layers do the rest.\n\nBeat the cream cheese with the sugar, egg yolk and vanilla until smooth. It should hold its shape on a spoon. **Cold cream cheese will lump, so leave it out for 20 minutes first.** Lumps do not vanish in the oven.\n\nCut the pastry into eight squares and spoon the filling in the middle. Fold two opposite corners to the centre and press them down, which stops the filling spilling.\n\nBrush with beaten egg and bake at 200°C for 18 minutes, until the pastry has risen and gone deep gold. If your oven runs hot, check at 14 minutes. Let the danishes cool before the icing goes on, or it runs straight off. A little lemon zest in the filling gives a clean edge to the sweetness, if you have a lemon to hand.',
    ing: [
      '320 g ready-rolled puff pastry',
      '200 g cream cheese, at room temperature',
      '40 g caster sugar',
      '1 egg yolk, about 20 g',
      '1 tsp vanilla extract',
      '1 egg, beaten, for the glaze',
      '50 g icing sugar',
      '2 tsp milk'
    ],
    st: [
      'Heat the oven to 200°C. Beat the cream cheese, caster sugar, egg yolk and vanilla until smooth.',
      'Cut the pastry into 8 squares. Spoon the filling into the middle of each and fold two opposite corners to the centre, pressing them down.',
      'Brush with beaten egg and bake on a lined tray for 18 minutes until deep gold.',
      'Cool for 10 minutes. Stir the icing sugar with the milk and drizzle it over the danishes.'
    ],
    tips: [
      'Soften the cream cheese first.',
      'Press the folded corners down firmly.',
      'If your oven runs hot, check at 14 minutes.',
      'Wait for the pastries to cool before icing.'
    ],
    pair: ['Fresh berries', 'Hot coffee', 'Orange juice', 'Warm milk'],
    store: 'Best the day they are baked. Keeps in the fridge for 2 days.',
    nut: [308, 5, 27, 20, 1, 13, 320]
  },

  'apple-danish': {
    d: 'Puff pastry squares filled with cinnamon apples, folded and baked until crisp and gold, with a thin sugar glaze.',
    meta: 'Apple danish: puff pastry squares filled with cinnamon apples and baked until golden. Eight servings, 20 minutes in the oven.',
    kw: ['apple danish', 'apple danish recipe', 'puff pastry apple danish', 'cinnamon apple pastries', 'apple danish pastry'],
    why: 'Where does the apple filling go wrong? It goes in raw, the juice runs, and the pastry sits in a puddle.\n\nCook the apples first. Dice two apples small, and cook them with butter, sugar and cinnamon for 6 minutes, until the juice has reduced to a sticky syrup. **Cool the filling before it goes near the pastry.** Warm filling melts the butter in the layers and the danish will not rise.\n\nCut the pastry into eight squares and put a spoonful of the apple in the middle of each. Fold the corners to the centre and press them down.\n\nBrush with beaten egg and bake at 200°C for 18 minutes, until risen and golden. If your oven runs hot, check at 14 minutes. Brush with a thin icing while they are still slightly warm. A pinch of salt in the apple mixture sharpens the flavour, so do not leave it out.',
    ing: [
      '320 g ready-rolled puff pastry',
      '2 apples, about 300 g, peeled and diced',
      '15 g butter',
      '30 g caster sugar',
      '1 tsp ground cinnamon',
      '1 egg, beaten, for the glaze',
      '50 g icing sugar',
      '2 tsp milk'
    ],
    st: [
      'Cook the apples with the butter, caster sugar and cinnamon over medium heat for 6 minutes until syrupy. Cool completely.',
      'Heat the oven to 200°C. Cut the pastry into 8 squares and spoon the apple into the middle of each.',
      'Fold the corners to the centre and press them down. Brush with beaten egg and bake on a lined tray for 18 minutes.',
      'Stir the icing sugar with the milk and drizzle it over the warm danishes.'
    ],
    tips: [
      'Cook the apples before filling.',
      'Cool the filling completely.',
      'If your oven runs hot, check at 14 minutes.',
      'Choose a firm apple so it keeps some shape.'
    ],
    pair: ['Vanilla ice cream', 'Hot coffee', 'Custard', 'Spiced tea'],
    store: 'Best the day they are baked. Keeps in a tin for 2 days.',
    nut: [240, 3, 30, 12, 2, 15, 250]
  },

  'orange-rolls': {
    d: 'Soft yeasted rolls swirled with orange zest and sugar, baked until golden and glazed with orange icing.',
    meta: 'Orange rolls: soft yeasted rolls swirled with orange zest and sugar and finished with orange icing. Makes twelve, baked for 25 minutes.',
    kw: ['orange rolls', 'homemade orange rolls', 'orange sweet rolls', 'orange zest rolls', 'iced orange rolls'],
    why: 'Keep the dough soft. That is most of the recipe, and the part people skip.\n\nThe dough should feel tacky but not stick to your hands, so add flour a spoonful at a time and stop early. Knead for 8 minutes until it springs back when pressed. **Warm milk, not hot, wakes the yeast.** Hot milk kills it, and the dough will not rise.\n\nLeave it for 1 hour until doubled. Roll it into a rectangle, spread it with softened butter and a mix of sugar and orange zest, and roll it up tightly from the long side. Cut it into twelve slices and set them in a lined tin.\n\nLet the rolls rise again for 30 minutes, then bake at 180°C for 25 minutes. If your oven runs hot, check at 20 minutes. Ice them while still warm. Grate the zest before squeezing the oranges, as a squeezed orange is nearly impossible to zest.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action yeast',
      '60 g caster sugar',
      '1 tsp salt',
      '250 ml warm milk',
      '1 egg, about 50 g',
      '60 g butter, melted',
      '80 g butter, softened, for the filling',
      '100 g caster sugar for the filling',
      '2 oranges, zest only',
      '150 g icing sugar',
      '3 tbsp orange juice'
    ],
    st: [
      'Mix the flour, yeast, 60 g sugar and salt. Add the warm milk, egg and melted butter and mix to a soft dough.',
      'Knead for 8 minutes until smooth and elastic. Cover and leave for 1 hour until doubled.',
      'Roll the dough into a 30 by 40 cm rectangle. Spread with the softened butter, then the filling sugar mixed with the zest.',
      'Roll up from the long side, cut into 12 slices and set them in a lined 25 by 35 cm tin. Cover and leave for 30 minutes.',
      'Heat the oven to 180°C and bake for 25 minutes until golden. Mix the icing sugar and juice and spread over the warm rolls.'
    ],
    tips: [
      'Use warm milk, not hot.',
      'Stop adding flour while the dough is still tacky.',
      'If your oven runs hot, check at 20 minutes.',
      'Cut the roll with thread or a sharp knife for neat slices.'
    ],
    pair: ['Hot coffee', 'Fresh orange segments', 'Warm milk', 'Hot tea'],
    store: 'Best the day they are baked. Keeps in a tin for 2 days.',
    rest: [90, 'Rising'],
    nut: [336, 6, 51, 12, 2, 31, 420]
  }
};
