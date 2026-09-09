'use strict';

/**
 * Volume seventeen — British vegetables, sides and light meals.
 *
 * Fourteen, and five of them are potatoes, which is roughly the correct
 * proportion for these islands. Three are the leftover dishes — bubble and
 * squeak, rumbledethumps, champ — which exist because Sunday produced more
 * potato and cabbage than anyone could eat and Monday had to do something
 * about it. They are better than the meals they came from.
 *
 * The two cold ones, potted cheese and cucumber sandwiches, belong to the tea
 * table rather than dinner, and both are considerably more particular than
 * they look.
 */

module.exports = {
  'bubble-and-squeak': {
    d: 'Cold mash and cold greens pressed into a pan and fried until a crust forms on both sides. Named for the noise it makes doing it.',
    meta: 'Leftover mashed potato and cooked cabbage or sprouts pressed into a hot pan and fried undisturbed until a dark crust forms on both sides.',
    kw: ['bubble and squeak', 'bubble and squeak recipe', 'leftover potato cabbage', 'fried potato cake british', 'boxing day leftovers'],
    why: 'Cold leftovers, and leave it alone. Fresh mash carries too much moisture and will never crust; a day in the fridge dries it out and firms it. Once it is in the pan the whole method is patience — press it down, then do not touch it for eight full minutes, because every stir breaks the crust that is forming and you end up with hot mash instead. Turning it is the only difficult part, and the honest answer is to slide it onto a plate and invert the pan over it.',
    ing: [
      '600 g cold mashed potato',
      '400 g cooked cabbage, sprouts or greens, roughly chopped',
      '1 onion, finely chopped',
      '1 tsp fine sea salt',
      '0.75 tsp black pepper',
      '0.25 tsp grated nutmeg',
      '40 g butter, or 3 tbsp dripping',
      '2 tbsp vegetable oil'
    ],
    st: [
      'Fry the onion in half the butter over medium heat 8 minutes, until soft and golden. Let it cool.',
      'Mix the cold mash, greens, cooked onion, salt, pepper and nutmeg. Do not beat it — it should stay lumpy.',
      'Heat the remaining butter and the oil in a heavy 24 cm frying pan until it foams.',
      'Tip the mixture in and press it flat with a spatula, right to the edges.',
      'Fry over medium heat 8 minutes without touching it at all, until a dark crust has formed underneath.',
      'Slide it onto a plate, invert the pan over the plate and turn the whole thing back over.',
      'Fry the second side 8 minutes, again without moving it.',
      'Slide onto a board and cut into wedges.'
    ],
    tips: [
      'Cold leftovers only. Fresh mash will not crust.',
      'Eight minutes untouched. Every stir destroys the crust.',
      'Turn it with a plate, not a spatula.'
    ],
    pair: ['A fried egg', 'Cold cuts', 'Brown sauce'],
    store: 'Refrigerated for 2 days. Re-crisp in a hot dry pan, not a microwave.',
    nut: [290, 6, 34, 15, 6, 6, 780]
  },

  'mushy-peas': {
    d: 'Marrowfat peas soaked overnight with bicarbonate of soda and cooked to a thick green pool. The correct thing next to fish and chips and not negotiable.',
    meta: 'Dried marrowfat peas soaked overnight with bicarbonate of soda, then simmered with salt until they collapse into a thick purée.',
    kw: ['mushy peas', 'mushy peas recipe', 'marrowfat peas', 'chip shop mushy peas', 'british pea side dish'],
    why: 'The bicarbonate of soda in the soaking water is what makes them mushy — it raises the pH, which breaks down the pectin in the pea skins so they collapse instead of staying whole. Without it you can boil marrowfats for three hours and still have peas. Rinse them very thoroughly afterwards, though, because any bicarbonate left in tastes soapy. And salt only at the end: salt during cooking toughens the skins and works directly against everything the bicarbonate is doing.',
    ing: [
      '400 g dried marrowfat peas',
      '2 tsp bicarbonate of soda',
      '1.5 litres cold water, for soaking',
      '# For cooking',
      '1 litre water',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp caster sugar',
      '2 tbsp olive oil, or 30 g butter'
    ],
    st: [
      'Put the peas in a large bowl with the bicarbonate of soda and pour the 1.5 litres of cold water over. Soak 12 hours.',
      'Drain and rinse the peas thoroughly under running water for a full minute, until the water runs clear.',
      'Put them in a pan with the litre of fresh water and bring to the boil.',
      'Skim the foam, then simmer, half covered, 45 minutes, stirring occasionally, until they have collapsed.',
      'If they are still holding shape, cook 15 minutes more and crush them against the side of the pan.',
      'Take off the heat and beat in the salt, pepper, sugar and oil.',
      'They should be thick enough to hold a spoon upright. Loosen with a splash of water if not.'
    ],
    rest: [720, 'soaking the peas with bicarbonate of soda overnight'],
    tips: [
      'Bicarbonate in the soak. Without it they never break down.',
      'Rinse for a full minute or they taste of soap.',
      'Salt at the end only. Early salt toughens the skins.'
    ],
    pair: ['Fish and chips', 'Faggots', 'Mint sauce'],
    store: 'Refrigerated for 4 days. Freezes 3 months. Loosen with water on reheating.',
    nut: [230, 14, 34, 5, 12, 4, 620]
  },

  'braised-red-cabbage': {
    d: 'Red cabbage cooked down for over an hour with apple, vinegar and spice until it is sweet, sharp and dark. Better made two days ahead.',
    meta: 'Red cabbage slowly braised with cooking apple, onion, vinegar, brown sugar and warm spices until soft and glossy.',
    kw: ['braised red cabbage', 'braised red cabbage recipe', 'christmas red cabbage', 'sweet and sour cabbage', 'british vegetable side'],
    why: 'Vinegar at the start, not the end. Red cabbage owes its colour to anthocyanins, which turn a dull blue-grey in alkaline conditions and stay vivid purple in acid — so the acid goes in with everything else, and cabbage cooked without it comes out the colour of a bruise. Cook it low and long, at least an hour and a quarter, with the lid on for the first hour so it steams and then off so the liquid reduces to a glaze.',
    ing: [
      '1 red cabbage, about 1 kg, quartered, cored and finely shredded',
      '3 tbsp olive oil, or 50 g butter',
      '1 onion, sliced',
      '2 Bramley apples, peeled and chopped',
      '4 tbsp red wine vinegar',
      '80 g dark brown sugar',
      '150 ml red wine or apple juice',
      '0.5 tsp ground cinnamon',
      '0.25 tsp ground cloves',
      '0.25 tsp grated nutmeg',
      '2 bay leaves',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '1 tbsp red wine vinegar'
    ],
    st: [
      'Heat the oil in a large heavy pan and soften the onion 8 minutes.',
      'Add the shredded cabbage, apple, the 4 tbsp vinegar, the sugar, wine, spices, bay, salt and pepper. Stir well.',
      'Cover and cook over the lowest heat 60 minutes, stirring every 20 minutes, until the cabbage is completely soft.',
      'Take the lid off and cook 15 minutes more, until the liquid has reduced to a syrupy glaze.',
      'Stir in the final tablespoon of vinegar off the heat and check the balance of sweet and sharp.',
      'Remove the bay leaves before serving.'
    ],
    tips: [
      'Vinegar in at the start. It is what keeps the colour.',
      'Lid on for an hour, off for the last fifteen.',
      'Make it two days ahead. It improves markedly.'
    ],
    pair: ['Roast pork', 'Goose', 'Sausages and mash'],
    store: 'Refrigerated for 6 days and better on the third. Freezes 3 months.',
    nut: [165, 3, 28, 6, 6, 21, 620]
  },

  'honey-roast-parsnips': {
    d: 'Parsnips parboiled, roughed up and roasted in honey until the edges go almost black. The best thing on the Christmas table and it is not close.',
    meta: 'Parsnips parboiled and roughed up, then roasted in butter and honey with thyme until caramelised at the edges.',
    kw: ['honey roast parsnips', 'roast parsnips recipe', 'christmas parsnips', 'caramelised parsnip side', 'british roast vegetable'],
    why: 'Parboil and then rough them up in the colander, exactly as you would for roast potatoes. The scuffed surface gives the honey and fat something to catch on and is where all the crisp edges come from; smooth parsnips roast to something closer to steamed. The honey goes on for the last fifteen minutes only — put it on at the start and it burns to a bitter black tar long before the parsnip is cooked through. Cut out the woody core from any large ones.',
    ing: [
      '1 kg parsnips, peeled, quartered lengthways, woody cores removed',
      '2 tsp fine sea salt, for the water',
      '4 tbsp vegetable oil, or 60 g beef dripping',
      '40 g butter',
      '4 sprigs thyme',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the last fifteen minutes',
      '3 tbsp runny honey',
      '1 tsp English mustard'
    ],
    st: [
      'Bring a pan of water to the boil with the 2 tsp salt and cook the parsnips 5 minutes.',
      'Drain them well and shake them hard in the colander until the edges look scuffed and fluffy.',
      'Heat the oil in a roasting tin at 200C fan / 220C / gas 7 for 5 minutes, until it is properly hot.',
      'Tip the parsnips in, turn them in the fat, and add the butter, thyme, salt and pepper.',
      'Roast 30 minutes, turning once, until golden.',
      'Mix the honey with the mustard and pour it over, turning to coat.',
      'Roast a final 15 minutes, until sticky and dark at the edges. Serve at once.'
    ],
    tips: [
      'Rough them up in the colander. That is where the crisp edges come from.',
      'Honey for the last fifteen minutes only, or it burns.',
      'Cut the woody core out of anything thicker than your thumb.'
    ],
    pair: ['Roast beef', 'Christmas dinner', 'Roast potatoes'],
    store: 'Refrigerated for 3 days. Re-crisp in a hot oven, never a microwave.',
    nut: [270, 3, 34, 14, 8, 16, 590]
  },

  'pease-pudding': {
    d: 'Yellow split peas boiled to a purée in ham stock and set firm enough to slice. Tyneside eats it cold in a stottie with ham, and is right to.',
    meta: 'Yellow split peas simmered in ham stock in a cloth or basin until collapsed, beaten smooth with butter and set firm.',
    kw: ['pease pudding', 'pease pudding recipe', 'split pea pudding', 'geordie pease pudding', 'traditional british side'],
    why: 'Cooked in ham stock, not water, and that is the whole flavour of the dish — pease pudding made in water is a bowl of plain split peas. If you are not boiling a ham, use a stock cube and a piece of bacon. Beat it hard when it comes off the heat, for a good two minutes, because that is what turns a pan of soft peas into something smooth enough to slice cold. And salt only at the end, since ham stock brings its own and the amount is unpredictable.',
    ing: [
      '500 g yellow split peas',
      '1.5 litres ham stock, from boiling a gammon',
      '1 onion, halved',
      '1 bay leaf',
      '# To finish',
      '50 g butter',
      '1 egg, beaten',
      '0.5 tsp black pepper',
      '0.25 tsp grated nutmeg',
      'Fine sea salt, to taste'
    ],
    st: [
      'Soak the split peas in cold water 12 hours, then drain and rinse them.',
      'Put them in a pan with the ham stock, onion and bay and bring to a simmer.',
      'Skim the foam, then simmer, half covered, 90 minutes, stirring occasionally, until the peas have completely collapsed.',
      'Discard the onion and bay. If the mixture is loose, cook uncovered until it is thick enough to hold a trail.',
      'Take it off the heat and beat hard for 2 minutes with a wooden spoon, until smooth.',
      'Beat in the butter, the egg, the pepper and the nutmeg, and only now taste for salt.',
      'Spoon into a buttered basin, level the top and bake at 170C fan / 190C / gas 5 for 25 minutes to set.',
      'Serve hot in spoonfuls, or cool completely and slice.'
    ],
    rest: [720, 'soaking the split peas overnight'],
    tips: [
      'Ham stock, always. Water gives you nothing.',
      'Beat it hard for two minutes off the heat.',
      'Salt last. The stock decides how much it needs.'
    ],
    pair: ['Boiled ham', 'A stottie cake', 'Mustard'],
    store: 'Refrigerated for 5 days and excellent cold. Freezes 3 months.',
    nut: [340, 21, 45, 9, 17, 4, 980]
  },

  'rumbledethumps': {
    d: 'Potato, swede and cabbage mashed together, topped with cheese and baked. The Scottish Borders answer to what to do with a Sunday.',
    meta: 'A Scottish Borders bake of mashed potato and swede folded with buttered cabbage, topped with cheddar and baked until browned.',
    kw: ['rumbledethumps', 'rumbledethumps recipe', 'scottish potato cabbage bake', 'borders potato dish', 'cheesy potato cabbage'],
    why: 'Cook the cabbage separately in butter and keep it well drained. Boiled into the potato it releases water that turns the whole dish loose and grey, whereas cabbage fried in butter until it squeaks stays in distinct green ribbons through the mash. Mash the potato and swede while both are very hot and steaming dry, then fold — do not beat — the cabbage through, so the two textures stay separate under the cheese.',
    ing: [
      '800 g floury potatoes, peeled and chunked',
      '400 g swede, peeled and chunked',
      '2 tsp fine sea salt, for the water',
      '400 g savoy cabbage, finely shredded',
      '80 g butter',
      '4 spring onions, sliced',
      '1.25 tsp fine sea salt',
      '0.75 tsp black pepper',
      '0.25 tsp grated nutmeg',
      '# For the top',
      '120 g mature cheddar, grated',
      '20 g butter'
    ],
    st: [
      'Boil the potatoes and swede in separate pans of salted water, 20 minutes for the potato and 25 for the swede, until both are tender.',
      'Drain both and return them to their dry pans over low heat for 1 minute to steam off, then mash them together with 50 g of the butter.',
      'Melt the remaining 30 g butter in a wide pan and fry the cabbage over medium heat 6 minutes, until it is wilted but still bright and squeaks against the spoon.',
      'Add the spring onions and cook 1 minute more, then drain off any liquid.',
      'Fold the cabbage through the mash with the salt, pepper and nutmeg. Do not beat it.',
      'Spread into a buttered baking dish, rough the surface with a fork and scatter the cheddar over.',
      'Dot with the 20 g butter and bake at 190C fan / 210C / gas 6 for 30 minutes, until browned and bubbling.'
    ],
    tips: [
      'Fry the cabbage in butter, never boil it into the potato.',
      'Steam the potato and swede dry before mashing.',
      'Fold, do not beat. The textures should stay separate.'
    ],
    pair: ['Sausages', 'Cold ham', 'Pickled beetroot'],
    store: 'Refrigerated for 3 days. Reheat covered at 180C. Freezes 2 months.',
    nut: [400, 14, 42, 21, 8, 9, 1010]
  },

  'champ': {
    d: 'Mashed potato beaten with spring onions steeped in hot milk, served with a well of butter melting in the middle. Ulster, and deceptively exact.',
    meta: 'Irish mashed potato beaten with milk in which spring onions have been steeped, served in a mound with a well of melted butter.',
    kw: ['champ', 'champ recipe', 'irish mashed potato', 'spring onion mash', 'ulster champ potatoes'],
    why: 'Steep the spring onions in the milk rather than stirring them in raw. Two minutes in hot milk takes the raw allium bite off and pushes the flavour through the whole bowl instead of leaving it in green flecks, and it is what separates champ from mash with something scattered over it. The milk must be hot when it goes in as well — cold milk into hot potato makes it claggy — and the potatoes want to be steamed dry in the pan for a minute after draining.',
    ing: [
      '1.2 kg floury potatoes, such as Kerr\'s Pink or Maris Piper, peeled and chunked',
      '2 tsp fine sea salt, for the water',
      '250 ml whole milk',
      '8 spring onions, finely sliced, white and green kept separate',
      '100 g butter',
      '1.25 tsp fine sea salt',
      '0.5 tsp white pepper',
      '# To serve',
      '60 g butter, in a piece'
    ],
    st: [
      'Boil the potatoes in salted water 20 minutes, until a knife slides in with no resistance.',
      'Meanwhile bring the milk almost to the boil, add the white parts of the spring onions and take it off the heat. Leave 2 minutes, then add the green parts.',
      'Drain the potatoes and return them to the dry pan over low heat for 1 minute, shaking, to steam them dry.',
      'Mash them thoroughly, or push them through a ricer.',
      'Beat in the 100 g butter, then the hot milk with all the spring onions, the salt and the white pepper.',
      'Beat until light. It should be softer than an ordinary mash.',
      'Pile into a warm dish, make a deep well in the centre and drop the piece of butter into it.'
    ],
    tips: [
      'Steep the onions in the hot milk. Raw ones stay as flecks.',
      'Hot milk into hot potato, always.',
      'Softer than ordinary mash, and the well of butter is the dish.'
    ],
    pair: ['Boiled bacon', 'Sausages', 'A glass of buttermilk'],
    store: 'Refrigerated for 2 days. Reheat with a splash of milk. Do not freeze.',
    nut: [430, 8, 46, 24, 5, 5, 890]
  },

  'pan-haggerty': {
    d: 'Potato, onion and cheese layered in a frying pan, cooked on the hob and finished under the grill. Northumberland, three ingredients, forty-five minutes.',
    meta: 'A Northumbrian dish of thinly sliced potato and onion layered with cheddar in a heavy pan, cooked slowly on the hob and browned under the grill.',
    kw: ['pan haggerty', 'pan haggerty recipe', 'northumberland potato dish', 'potato onion cheese pan', 'british potato bake'],
    why: 'Slice the potatoes on a mandolin at two millimetres and do not rinse them. The starch on the cut surfaces is the only thing binding the layers together — rinsed potatoes slide apart when you cut into it. It cooks on the hob under a lid for most of its time, which steams the layers soft while the base fries, and only goes under the grill for the last five minutes. Grilling it from the start browns the top over raw potato.',
    ing: [
      '800 g waxy potatoes, peeled and sliced 2 mm, unrinsed',
      '2 large onions, thinly sliced',
      '40 g butter',
      '2 tbsp beef dripping or vegetable oil',
      '150 g mature cheddar, grated',
      '1.25 tsp fine sea salt',
      '0.75 tsp black pepper',
      '2 tbsp flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the butter and dripping in a heavy 24 cm frying pan until foaming.',
      'Lay in a third of the potato slices in overlapping circles, then half the onion, a third of the cheese, and a third of the salt and pepper.',
      'Repeat with another third of the potato, the rest of the onion, another third of the cheese and seasoning.',
      'Finish with the last of the potato, pressed down firmly, and keep the final third of cheese back.',
      'Cover and cook over low heat 35 minutes, until a knife goes through easily and the base has browned.',
      'Scatter the remaining cheese over the top.',
      'Put the pan under a hot grill 6 minutes, until the cheese is blistered and brown.',
      'Rest 5 minutes, scatter with parsley and cut into wedges in the pan.'
    ],
    tips: [
      'Do not rinse the potatoes. The starch is the glue.',
      'Hob first under a lid, grill only at the end.',
      'Press each layer down firmly as you build it.'
    ],
    pair: ['A green salad', 'Cold ham', 'Brown sauce'],
    store: 'Refrigerated for 3 days. Re-crisp in a dry pan or a hot oven.',
    nut: [420, 16, 40, 23, 5, 5, 1080]
  },

  'laverbread-and-bacon': {
    d: 'Welsh seaweed fried in bacon fat with oatmeal, on toast. Called Welshman\'s caviar, which sounds like a joke until you have eaten it.',
    meta: 'Laverbread beaten with oatmeal and fried in bacon fat until crusted, served with streaky bacon on hot buttered toast.',
    kw: ['laverbread', 'laverbread recipe', 'welsh laverbread bacon', 'seaweed breakfast wales', 'laver oatmeal cakes'],
    why: 'Laverbread comes ready cooked and carries a lot of water, so the oatmeal is not a filler — it absorbs that water and is the only reason the mixture holds together in the pan. Give it five minutes to swell before frying. Then fry it hot and briefly in bacon fat: laverbread held over heat for too long dries out and turns bitter and metallic, and the difference is about ninety seconds either way.',
    ing: [
      '8 rashers streaky bacon',
      '300 g laverbread',
      '100 g medium oatmeal',
      '0.5 tsp black pepper',
      '1 tbsp lemon juice',
      '# To serve',
      '4 slices bread, toasted',
      '2 tbsp olive oil, for the toast',
      '1 lemon, in wedges'
    ],
    st: [
      'Beat the laverbread with the oatmeal and pepper and leave it 5 minutes for the oatmeal to swell.',
      'Fry the bacon in a dry pan over medium heat until crisp, 8 minutes. Lift it out and keep it warm.',
      'Spoon the laverbread mixture into the hot bacon fat in four flat cakes.',
      'Fry 3 minutes a side over medium-high heat, until crusted and hot through. Do not cook it longer.',
      'Add the lemon juice to the pan and shake it through.',
      'Brush the toast with the olive oil and set a laver cake on each slice with two rashers of bacon.',
      'Serve at once with lemon.'
    ],
    tips: [
      'Give the oatmeal five minutes to swell before it goes in the pan.',
      'Three minutes a side. Overcooked laverbread turns bitter.',
      'Bacon fat, not butter or oil.'
    ],
    pair: ['Cockles', 'Streaky bacon', 'Strong tea'],
    store: 'The mixture keeps refrigerated 2 days. Fry to order.',
    nut: [380, 20, 32, 20, 5, 2, 1180]
  },

  'stuffed-marrow': {
    d: 'A marrow hollowed out, filled with spiced mince and baked with cheese on top. What the allotment demands every September, and it is better than its reputation.',
    meta: 'A marrow halved and hollowed, filled with beef mince cooked with tomato and herbs, topped with cheese and breadcrumbs and baked.',
    kw: ['stuffed marrow', 'stuffed marrow recipe', 'baked marrow mince', 'allotment marrow dish', 'british vegetable bake'],
    why: 'Salt the hollowed halves and leave them upside down for half an hour. Marrow is almost entirely water and, unsalted, it floods the filling and you serve mince in a puddle — this one step is the whole difference between a good stuffed marrow and the soggy version everyone remembers. Cook the filling down until it is genuinely dry too, drier than you would want to eat on its own, because the marrow will give back plenty as it bakes.',
    ing: [
      '1 marrow, about 1.5 kg',
      '2 tsp fine sea salt, for degorging',
      '# For the filling',
      '2 tbsp olive oil',
      '1 onion, chopped',
      '2 garlic cloves, chopped',
      '500 g minced beef',
      '1 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '1 tsp dried oregano',
      '1 tsp Worcestershire sauce',
      '1.25 tsp fine sea salt',
      '0.5 tsp black pepper',
      '60 g breadcrumbs',
      '# For the top',
      '100 g mature cheddar, grated',
      '40 g breadcrumbs',
      '20 g butter'
    ],
    st: [
      'Halve the marrow lengthways and scoop out the seeds and soft core with a spoon.',
      'Rub the cavities with the 2 tsp salt, set the halves cut side down on a rack and leave 30 minutes.',
      'Meanwhile, soften the onion in the oil 8 minutes, add the garlic for 1 minute, then brown the mince hard, 8 minutes.',
      'Stir in the tomato purée, tomatoes, oregano, Worcestershire sauce, salt and pepper and simmer 20 minutes, until very thick and almost dry.',
      'Stir the 60 g breadcrumbs into the filling.',
      'Rinse the marrow halves, pat them thoroughly dry and set them in a roasting dish.',
      'Pack the filling into the cavities and press it down.',
      'Mix the cheddar with the 40 g breadcrumbs, scatter over and dot with the butter.',
      'Bake at 180C fan / 200C / gas 6 for 40 minutes, until the marrow is tender and the top is browned.'
    ],
    tips: [
      'Salt the cavities for half an hour. Everything depends on it.',
      'Cook the filling until it is drier than seems right.',
      'Dry the marrow properly before filling it.'
    ],
    pair: ['Buttered new potatoes', 'A green salad', 'Brown sauce'],
    store: 'Refrigerated for 3 days. Reheat covered at 180C. Do not freeze.',
    nut: [420, 32, 26, 22, 4, 10, 1080]
  },

  'watercress-soup': {
    d: 'Watercress cooked for ninety seconds and blended immediately, which is what keeps it the colour of a wet lawn instead of the colour of pond water.',
    meta: 'A vivid British soup of potato and onion base with watercress added at the last moment and blended straight away to keep the colour.',
    kw: ['watercress soup', 'watercress soup recipe', 'green vegetable soup', 'british watercress', 'peppery cress soup'],
    why: 'The watercress goes in for ninety seconds at the very end and the soup is blended immediately after. Green leaves lose their colour to heat and to acid over time, so every extra minute in the pan takes the soup a shade further towards khaki. Build the whole base first — onion, potato, stock, fully cooked — then wilt the cress into it and blend at once. Cooling it fast under a cold tap holds the colour if you are serving it later.',
    ing: [
      '2 bunches watercress, about 200 g, thick stalks removed',
      '40 g butter, or 3 tbsp olive oil',
      '1 onion, chopped',
      '1 leek, sliced and washed',
      '250 g floury potatoes, diced',
      '900 ml vegetable stock',
      '1.25 tsp fine sea salt',
      '0.25 tsp white pepper',
      '0.25 tsp grated nutmeg',
      '# To finish',
      '100 ml double cream',
      '1 tsp lemon juice'
    ],
    st: [
      'Melt the butter and sweat the onion and leek, covered, over low heat 8 minutes, without colouring.',
      'Add the potato and turn it in the butter for 2 minutes.',
      'Pour in the stock with the salt and simmer 15 minutes, until the potato is completely soft.',
      'Turn the heat up, add all the watercress at once and push it under.',
      'Cook 90 seconds only, until it has just wilted.',
      'Blend immediately until completely smooth, then add the white pepper, nutmeg and lemon juice.',
      'Stir in the cream and serve at once, or cool the pan fast in cold water if serving later.'
    ],
    tips: [
      'Ninety seconds for the cress, then blend at once.',
      'Build the base completely before the leaves go anywhere near it.',
      'Cool it fast if you are not serving straight away.'
    ],
    pair: ['Crusty bread', 'A poached egg on top', 'Smoked salmon on the side'],
    store: 'Refrigerated for 2 days, though the colour dulls. Freezes 1 month.',
    nut: [260, 6, 24, 16, 4, 5, 980]
  },

  'potted-cheese': {
    d: 'Hard cheese beaten with butter, mace and port and sealed under more butter. Eighteenth-century, requires no cooking, and outclasses every shop-bought cheese spread ever made.',
    meta: 'Mature cheddar beaten smooth with butter, mace, mustard and port, packed into pots and sealed under clarified butter.',
    kw: ['potted cheese', 'potted cheese recipe', 'british cheese spread', 'georgian potted cheese', 'cheddar butter pot'],
    why: 'Everything must be at proper room temperature — cheese, butter, the lot, given an hour out of the fridge. Cold butter will not take up the cheese and you get a grainy, streaky paste that no amount of beating will bring together. Grate the cheese finely rather than cubing it, so it breaks down under the beating instead of staying in shards. Mace is traditional and correct here for the same reason as in potted shrimps: warm without being sweet.',
    ing: [
      '350 g mature cheddar, or a mixture with stilton, finely grated',
      '150 g butter, softened',
      '3 tbsp ruby port or dry sherry',
      '1 tsp English mustard',
      '0.5 tsp ground mace',
      '0.25 tsp cayenne pepper',
      '0.25 tsp fine sea salt',
      '# For sealing',
      '80 g butter, clarified'
    ],
    st: [
      'Leave the cheese and butter at room temperature 1 hour before you start.',
      'Beat the softened butter alone until pale and light, 2 minutes.',
      'Add the grated cheese a handful at a time, beating until each addition disappears.',
      'Beat in the port, mustard, mace, cayenne and salt until completely smooth.',
      'Check the seasoning — it should be noticeably peppery — and pack into small pots, pressing out air pockets.',
      'Level the surfaces and pour the clarified butter over to seal each pot.',
      'Refrigerate 2 hours to firm, then bring back to room temperature for 30 minutes before serving.'
    ],
    rest: [180, 'bringing the ingredients to room temperature and firming the pots'],
    tips: [
      'Everything at room temperature. Cold butter gives a grainy paste.',
      'Grate finely, never cube.',
      'Serve it at room temperature, not fridge cold.'
    ],
    pair: ['Oatcakes', 'Celery', 'A glass of the port'],
    store: 'Refrigerated under the butter seal for 3 weeks. Once broken, 5 days.',
    nut: [480, 18, 2, 44, 0, 1, 1010]
  },

  'coronation-chicken': {
    d: 'Cold chicken in a curried, apricot-sweetened mayonnaise, invented for the 1953 coronation lunch. Ruined by every sandwich shop since and worth reclaiming.',
    meta: 'Poached chicken in a lightly curried mayonnaise with apricot purée, cream and lemon, finished with flaked almonds.',
    kw: ['coronation chicken', 'coronation chicken recipe', 'curried chicken mayonnaise', 'chicken salad british', 'apricot chicken salad'],
    why: 'The curry powder must be cooked before it goes anywhere near the mayonnaise — fried with the onion, then simmered with wine and apricot and blitzed. Raw curry powder stirred into mayonnaise is exactly what makes the sandwich-shop version taste dusty and flat. Poach the chicken and let it cool in its liquid rather than roasting it, so it stays moist when cold, and cut it into decent pieces: shredded chicken turns the whole thing to paste.',
    ing: [
      '# For the chicken',
      '4 chicken breasts, on the bone if possible',
      '1 onion, halved',
      '2 bay leaves',
      '1 tsp black peppercorns',
      '1 tsp fine sea salt',
      '800 ml water',
      '# For the sauce',
      '1 tbsp vegetable oil',
      '1 small onion, finely chopped',
      '1 tbsp mild curry powder',
      '1 tsp tomato purée',
      '100 ml red wine',
      '1 bay leaf',
      'Juice of 1 lemon',
      '4 tbsp apricot jam or 100 g dried apricots, simmered and puréed',
      '250 g mayonnaise',
      '100 ml double cream, lightly whipped',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To finish',
      '50 g flaked almonds, toasted',
      '3 tbsp coriander, chopped'
    ],
    st: [
      'Poach the chicken with the onion, bay, peppercorns, salt and water at a bare simmer 20 minutes.',
      'Leave it to cool completely in its liquid, 1 hour.',
      'Meanwhile, soften the small onion in the oil 6 minutes.',
      'Add the curry powder and tomato purée and fry 1 minute, stirring, until fragrant.',
      'Add the wine, bay leaf, lemon juice and apricot jam and simmer 8 minutes, until reduced and thick.',
      'Discard the bay leaf, blend the mixture smooth and let it cool completely.',
      'Beat the cooled curry base into the mayonnaise, then fold in the whipped cream, salt and pepper.',
      'Cut the cold chicken into large bite-sized pieces, discarding skin and bone, and fold it through the sauce.',
      'Scatter with the toasted almonds and coriander before serving.'
    ],
    rest: [60, 'cooling the chicken in its poaching liquid'],
    tips: [
      'Cook the curry powder. Raw powder in mayonnaise tastes of dust.',
      'Let the chicken cool in its liquid, then cut it in decent pieces.',
      'Cool the curry base fully before it meets the mayonnaise.'
    ],
    pair: ['Cold rice salad', 'Watercress', 'Soft white bread'],
    store: 'Refrigerated for 2 days. Do not freeze.',
    nut: [530, 38, 16, 35, 2, 12, 1010]
  },

  'cucumber-sandwiches': {
    d: 'Thin white bread, salted cucumber, good butter, no crusts. Four ingredients, and every single one of them has to be right.',
    meta: 'Afternoon tea cucumber sandwiches: cucumber salted and drained, laid on thin buttered white bread and cut into fingers with the crusts removed.',
    kw: ['cucumber sandwiches', 'cucumber sandwiches recipe', 'afternoon tea sandwiches', 'british tea sandwich', 'crustless cucumber sandwich'],
    why: 'Salt the cucumber and drain it for twenty minutes, then dry it. Cucumber is ninety-six per cent water and unsalted slices will soak through the bread within ten minutes, which is why the sandwiches at bad afternoon teas are always slightly damp. The butter is the second defence: spread right to the edges, it waterproofs the crumb. Slice the cucumber on a mandolin as thin as you can — the texture should be barely there, not a chunk of salad in bread.',
    ing: [
      '1 cucumber',
      '1 tsp fine sea salt',
      '8 slices soft white bread, thinly cut',
      '100 g good salted butter, softened',
      '1 tsp white wine vinegar',
      '0.25 tsp white pepper',
      '# Optional',
      '2 tbsp mint or dill, very finely chopped'
    ],
    st: [
      'Peel the cucumber in stripes and slice it as thinly as you can on a mandolin or with a peeler.',
      'Layer the slices in a colander with the salt and leave 20 minutes over the sink.',
      'Rinse briefly, then press the slices dry between two clean tea towels until they no longer feel wet.',
      'Toss them with the vinegar and white pepper, and the herbs if using.',
      'Spread the butter on all eight slices of bread, right to the edges and into the corners.',
      'Lay the cucumber over four slices in overlapping rows, two layers deep, and close the sandwiches.',
      'Press gently, cut the crusts off with a sharp knife, and cut each sandwich into three fingers.',
      'Cover with a damp cloth until served, within the hour.'
    ],
    tips: [
      'Salt and dry the cucumber. It is the whole thing.',
      'Butter to the very edges — it waterproofs the bread.',
      'Cut the crusts after filling, not before.'
    ],
    pair: ['A pot of Darjeeling', 'Scones after', 'A very hot afternoon'],
    store: 'Under a damp cloth for 2 hours at most. Never refrigerate — the bread goes stale and hard.',
    nut: [290, 6, 30, 17, 2, 3, 720]
  }
};
