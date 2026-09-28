'use strict';

/**
 * Volume twenty-two — roasts and pub food.
 *
 * The catalogue had the Sunday roast's beef and its pudding and none of its
 * other centrepieces: no roast shoulder of lamb, no roast duck, no turkey
 * crown. And it had no pub menu — no gammon, egg and chips, no scampi, no pie
 * and mash, no liver and onions, no hunter's chicken. Those are the dishes a
 * British kitchen is asked for most, and they are made from a joint and a
 * pan rather than from a recipe book.
 */

module.exports = {
  'roast-lamb-shoulder': {
    d: 'A bone-in shoulder roasted low for hours until it pulls apart with a spoon, with garlic and rosemary pushed into the meat. Four hours.',
    meta: 'Slow-roast lamb shoulder: bone-in shoulder studded with garlic and rosemary, roasted low under foil until it falls apart, then crisped at the end.',
    kw: ['roast lamb shoulder', 'slow roast lamb shoulder', 'slow roasted shoulder of lamb', 'shoulder of lamb recipe', 'pull apart roast lamb'],
    why: 'Shoulder is a hard-working muscle laced with connective tissue, which is why it is cheap and why it repays a long cook: at 160°C over three or four hours the collagen melts into gelatin and the meat goes from tough to something you can pull apart with a spoon. Covering it for the first three hours steams it and keeps it moist, and uncovering it for the last half hour at a higher heat browns and crisps the fat. Garlic and rosemary pushed into slits season it from inside, and the onions beneath it become the base of the gravy.',
    ing: [
      '2 kg bone-in lamb shoulder',
      '6 garlic cloves, halved',
      '4 sprigs rosemary, plus 2 tbsp chopped leaves',
      '3 tbsp olive oil',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '3 onions, thickly sliced',
      '300 ml lamb or chicken stock'
    ],
    st: [
      'Heat the oven to 160°C / 320°F.',
      'Score the fat of the lamb in a diamond pattern. Cut about 12 deep slits all over the meat and push a piece of garlic and a small sprig of rosemary into each.',
      'Rub the oil, salt, pepper and chopped rosemary all over the shoulder.',
      'Spread the onions in a roasting tin, set the lamb on top and pour the stock around it.',
      'Cover the tin tightly with foil and roast 3 hours 15 minutes, until the meat is very tender.',
      'Raise the oven to 210°C / 410°F, remove the foil and roast 30 minutes more, until the fat is browned and crisp.',
      'Lift the lamb onto a board, cover loosely and rest 20 minutes.',
      'Skim the fat from the tin juices and simmer them 5 minutes with the onions for a gravy.',
      'Pull the meat into large pieces with two forks and serve with the gravy.'
    ],
    tips: [
      'Seal the tin tightly with foil. The trapped steam is what makes it tender.',
      'Do not rush it. If it resists a fork, it needs longer.',
      'Uncover for the last half hour to brown and crisp the fat.'
    ],
    pair: ['Roast potatoes', 'Minted peas', 'Mint sauce'],
    store: 'Refrigerate up to 4 days and reheat in the gravy. Freeze pulled meat with its juices for 3 months.',
    nut: [458, 42, 5, 30, 1, 3, 620]
  },

  'roast-duck': {
    d: 'A whole duck dried in the fridge, pricked and roasted slowly so the fat renders and the skin turns glass-crisp. About three hours, most of it unattended.',
    meta: 'Roast duck with crisp skin: a whole duck dried in the fridge, pricked, salted and roasted low so the fat renders, then finished hot for shatter-crisp skin.',
    kw: ['roast duck', 'roast duck recipe', 'crispy skin roast duck', 'whole roast duck with orange', 'how to cook a whole duck'],
    why: 'A duck has as much fat as meat, sitting under the skin, and the whole job is to get rid of it and leave the skin dry and crisp. So the bird is left uncovered in the fridge to dry the skin, pricked all over so the fat can escape, salted, and roasted low for two hours while that fat renders out into the tin and is poured off twice. Only at the end does the heat go up to crisp the skin. Cooked like a chicken, a duck comes out flabby and greasy.',
    ing: [
      '1 whole duck, about 2.2 kg',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '1 orange, halved',
      '4 sprigs thyme',
      '1 onion, quartered',
      '2 tsp flaky sea salt, to finish'
    ],
    st: [
      'Remove the giblets and trim any loose fat from the cavity. Pat the duck very dry and leave it uncovered on a rack in the fridge for at least 4 hours.',
      'Heat the oven to 170°C / 340°F. Prick the skin all over with a skewer, especially over the breast and thighs, taking care not to pierce the meat.',
      'Rub the fine salt and pepper over the skin and inside the cavity, then stuff the cavity with the orange, thyme and onion.',
      'Set the duck breast side up on a rack in a roasting tin and roast 1 hour.',
      'Carefully pour the fat from the tin into a heatproof jar, turn the duck breast side down and roast 1 hour more.',
      'Pour off the fat again, turn the duck breast side up, raise the oven to 220°C / 425°F and roast 20 to 25 minutes, until the skin is deep golden and crisp and the thigh reaches 74°C / 165°F.',
      'Rest 20 minutes, sprinkle with the flaky salt and carve.'
    ],
    tips: [
      'Dry the skin uncovered in the fridge. It is the biggest single help for crispness.',
      'Prick the skin, not the meat, so the fat can drain.',
      'Keep the rendered fat. It makes the best roast potatoes.'
    ],
    pair: ['Roast potatoes in duck fat', 'Red cabbage', 'Orange sauce'],
    store: 'Refrigerate carved meat up to 4 days and reheat covered at 160°C for 15 minutes. Freeze for 3 months.',
    nut: [536, 42, 2, 40, 0, 1, 700],
    rest: [240, 'drying the skin in the fridge']
  },

  'roast-turkey-crown': {
    d: 'A bone-in turkey breast roasted under herb butter and bacon until the juices run clear, with no dark meat to overcook. Two hours.',
    meta: 'Roast turkey crown: a bone-in breast under sage and herb butter and streaky bacon, roasted until juicy. Easier and quicker than a whole bird.',
    kw: ['roast turkey crown', 'roast turkey crown recipe', 'how long to cook a turkey crown', 'christmas turkey crown', 'turkey crown with bacon and herb butter'],
    why: 'A whole turkey is a compromise, because its breast is cooked through long before its legs, so the breast is dry by the time the thighs are done. A crown, the breast alone on the bone, has no such problem: one meat, one time, one temperature. Butter under the skin bastes it from within, bacon over the top protects the exposed breast and adds savoury flavour, and pulling it at 70°C, with a rest that carries it to a safe 74°C, is what keeps it juicy.',
    ing: [
      '1 bone-in turkey crown, about 3 kg',
      '100 g unsalted butter, softened',
      '2 tbsp chopped sage',
      '1 tbsp chopped thyme',
      '2 garlic cloves, grated',
      'Zest of 1 lemon',
      '1.5 tsp fine sea salt',
      '1 tsp black pepper',
      '8 rashers streaky bacon',
      '250 ml chicken stock'
    ],
    st: [
      'Take the crown out of the fridge an hour before roasting. Heat the oven to 190°C / 375°F.',
      'Mix the butter with the sage, thyme, garlic, lemon zest, salt and pepper.',
      'Loosen the skin over the breast with your fingers and push about two thirds of the butter underneath. Rub the rest over the skin.',
      'Lay the bacon over the breast and set the crown in a roasting tin with the stock.',
      'Roast 1 hour 30 minutes to 1 hour 45 minutes, basting with the tin juices twice, until the thickest part of the breast reads 70°C / 158°F.',
      'Remove the bacon for the last 15 minutes if you want the skin to colour.',
      'Cover loosely with foil and rest for 30 minutes, when the temperature will reach 74°C / 165°F.',
      'Carve into thick slices and serve with the pan juices.'
    ],
    tips: [
      'Use a thermometer. Turkey breast is done in the narrowest of margins.',
      'Rest it for the full 30 minutes. The carry-over heat finishes the cooking.',
      'Butter under the skin, not just on top. It bastes the meat from within.'
    ],
    pair: ['Roast potatoes', 'Pigs in blankets', 'Cranberry sauce'],
    store: 'Refrigerate up to 4 days and eat cold in sandwiches or reheat sliced in stock. Freeze cooked slices in stock for 3 months.',
    nut: [380, 58, 1, 16, 0, 0, 420]
  },

  'gammon-egg-and-chips': {
    d: 'A pan-fried gammon steak with a fried egg and a ring of pineapple, on a plate of golden oven chips and peas. The pub classic, in fifty-five minutes.',
    meta: 'Gammon, egg and chips: pan-fried gammon steaks with fried eggs and caramelised pineapple rings, served with crisp homemade oven chips and peas.',
    kw: ['gammon egg and chips', 'gammon egg and chips recipe', 'gammon steak with pineapple', 'pub style gammon egg and chips', 'homemade oven chips'],
    why: 'It is a plate of contrasts, all cooked in one sequence: the chips go in the oven first because they take longest, the gammon is fried while they finish, and the eggs and pineapple share the same pan so they pick up its flavour. Gammon is cured and salty, and needs only a fast fry, so it stays tender; a long cook makes it tough and saltier still. Snipping the fat rind at intervals stops the steak curling up in the pan and lets it lie flat and brown evenly.',
    ing: [
      '# For the chips',
      '800 g maincrop potatoes, cut into 1.5 cm chips',
      '3 tbsp vegetable oil',
      '1 tsp fine sea salt',
      '# For the plate',
      '4 gammon steaks, about 200 g each',
      '1 tbsp vegetable oil',
      '1 tbsp unsalted butter',
      '4 pineapple rings, tinned in juice, drained',
      '4 large eggs',
      '300 g frozen peas',
      'Pepper, to finish'
    ],
    st: [
      'Heat the oven to 220°C / 425°F with a large baking tray inside.',
      'Pat the potatoes dry, toss with the oil and salt and tip onto the hot tray in a single layer. Roast 35 to 40 minutes, turning once, until golden and crisp.',
      'Snip the fat rind of each gammon steak in three or four places so it lies flat, and pat the steaks dry.',
      'Heat the oil in a large frying pan over medium-high heat and fry the steaks 4 minutes a side, until browned and cooked through. Move to a warm plate.',
      'Add the pineapple rings to the pan and cook 2 minutes a side until caramelised at the edges. Set on the gammon.',
      'Add the butter and fry the eggs to your liking, about 3 minutes.',
      'Cook the peas in boiling water for 3 minutes and drain.',
      'Plate the gammon with the pineapple, egg, chips and peas and finish with pepper.'
    ],
    tips: [
      'Snip the fat rind so the steak stays flat in the pan.',
      'Do not overcook gammon. It is cured and turns tough and salty.',
      'Preheat the tray. Chips that hit hot metal crisp instead of steaming.'
    ],
    pair: ['English mustard', 'Mushy peas', 'A pint of bitter'],
    store: 'Best eaten immediately. Refrigerate cooked gammon up to 3 days and eat cold in sandwiches.',
    nut: [630, 42, 48, 30, 5, 8, 1900]
  },

  'scampi-and-chips': {
    d: 'Prawns in a crisp golden breadcrumb coat, fried and served with chips, peas and a sharp homemade tartare sauce. Fifty-five minutes.',
    meta: 'Scampi and chips: prawns in a crisp golden crumb coat, fried and served with thick chips and a homemade tartare sauce. The pub favourite.',
    kw: ['scampi and chips', 'scampi and chips recipe', 'breaded scampi', 'pub style scampi with tartare sauce', 'homemade breaded prawns'],
    why: 'Real scampi are langoustine tails, and because they are hard to find fresh, most home cooks use large raw king prawns, which take the same coat. The three-stage breading, flour, egg, crumbs, is repeated for the crispest result: a second dip in egg and crumbs gives a thicker crust that seals the delicate flesh so it steams inside the coating instead of drying out. The tartare sauce is not a garnish. Its capers and gherkin acidity are what cut through the fried richness.',
    ing: [
      '# For the chips',
      '800 g maincrop potatoes, cut into 1.5 cm chips',
      '1.5 litres vegetable oil, for frying',
      '# For the scampi',
      '400 g raw peeled king prawns or langoustine tails',
      '50 g plain flour',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper',
      '2 large eggs, beaten',
      '100 g fine dry breadcrumbs',
      '# For the tartare sauce',
      '120 g mayonnaise',
      '1 tbsp capers, chopped',
      '2 gherkins, finely chopped',
      '1 tbsp chopped parsley',
      '2 tsp lemon juice',
      '# To serve',
      '200 g peas',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Soak the chips in cold water for 15 minutes, then drain and dry thoroughly.',
      'Mix the tartare sauce ingredients in a bowl and chill.',
      'Heat the oil to 160°C / 320°F in a deep pan. Fry the chips in two batches for 6 minutes, until soft and pale, and drain on a rack.',
      'Pat the prawns dry. Mix the flour with the salt and pepper. Coat each prawn in the flour, then the egg, then the breadcrumbs, and repeat the egg and crumbs once more for a thicker coat.',
      'Raise the oil to 190°C / 375°F. Fry the chips again in two batches for 3 to 4 minutes until deep golden. Drain and salt.',
      'Lower the oil to 180°C / 350°F and fry the scampi in two batches for 2 to 3 minutes, until golden and crisp. Drain on a rack.',
      'Cook the peas in boiling water for 3 minutes and drain.',
      'Serve the scampi and chips with the peas, tartare sauce and lemon wedges.'
    ],
    tips: [
      'Double-crumb the scampi for a thick coat that seals in the moisture.',
      'Fry the scampi for no more than 3 minutes, or they go rubbery.',
      'Make the tartare sauce sharp. It cuts through the fried richness.'
    ],
    pair: ['Mushy peas', 'A pint of lager', 'Lemon wedges'],
    store: 'Best straight away. Refrigerate up to 1 day and re-crisp scampi at 200°C for 6 minutes. Freeze uncooked, breaded scampi for 2 months and fry from frozen.',
    nut: [656, 29, 63, 32, 6, 4, 1100]
  },

  'cheese-and-onion-pie': {
    d: 'A Lancashire pie of soft onion, potato and crumbly cheese in a cream-set filling, under a golden shortcrust. Eighty minutes.',
    meta: 'Cheese and onion pie: soft onion, potato and crumbly Lancashire or mature cheddar in a creamy filling, baked in golden shortcrust pastry.',
    kw: ['cheese and onion pie', 'cheese and onion pie recipe', 'lancashire cheese and onion pie', 'vegetarian cheese and onion pie', 'cheese onion and potato pie'],
    why: 'It is a very simple pie whose success depends on cooking the onions properly: slowly in butter until they are soft and sweet and have given up their water, so the filling is rich rather than sharp and does not steam the pastry. The diced potato gives it body, and a little cream and egg bind the cheese into a filling that sets and slices rather than running. Lancashire cheese is traditional because it is crumbly and melts creamily; a mature cheddar with a spoonful of mustard does nearly as well.',
    ing: [
      '# For the pastry',
      '350 g plain flour',
      '0.5 tsp fine sea salt',
      '175 g cold unsalted butter, cubed',
      '5 to 6 tbsp ice water',
      '1 egg, beaten, for glazing',
      '# For the filling',
      '2 tbsp unsalted butter',
      '3 large onions, finely sliced',
      '1 large waxy potato, about 150 g, cut into 5 mm dice',
      '250 g Lancashire or mature cheddar, crumbled or grated',
      '100 ml double cream',
      '1 large egg',
      '1 tsp English mustard',
      '2 tbsp chopped parsley',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Rub the butter into the flour and salt until it looks like breadcrumbs, then stir in the water until the dough holds. Divide into two discs, one a little larger, wrap and chill 30 minutes.',
      'Melt the butter for the filling in a large pan over medium-low heat and cook the onions with a pinch of salt for 20 minutes, until very soft and golden. Cool.',
      'Boil the diced potato for 5 minutes until just tender and drain.',
      'Heat the oven to 200°C / 400°F with a baking tray on the lower shelf.',
      'Mix the onions, potato, cheese, cream, egg, mustard, parsley, salt and pepper.',
      'Roll the larger disc and line a 23 cm pie dish. Fill with the mixture.',
      'Roll the smaller disc, cover the pie, trim, crimp, cut a steam vent and brush with the egg.',
      'Bake on the hot tray 35 to 40 minutes, until deep golden.',
      'Rest 15 minutes before serving hot or cold.'
    ],
    tips: [
      'Cook the onions slowly until sweet. Raw or half-cooked onions turn the filling watery.',
      'Cool the filling before it goes into the pastry so the butter does not melt.',
      'Serve it warm or cold. It slices best after resting.'
    ],
    pair: ['Baked beans', 'Brown sauce', 'A green salad'],
    store: 'Refrigerate up to 4 days and eat cold or reheat at 170°C for 20 minutes. Freeze baked for 3 months.',
    nut: [566, 16, 40, 38, 3, 5, 700]
  },

  'pie-and-mash': {
    d: 'The London cockney plate: minced beef pie in crisp pastry, creamy mash and a bright green parsley liquor. Two hours, plus chilling.',
    meta: 'London pie and mash: a minced beef pie in crisp shortcrust and puff, with buttery mash and the bright green parsley liquor poured over.',
    kw: ['pie and mash', 'pie and mash recipe', 'london pie and mash', 'cockney pie and mash with liquor', 'minced beef pie and mash'],
    why: 'It is three simple things done properly. The pie is a savoury minced beef filling, cooked down until it is thick and dark and then cooled, because a hot or runny filling steams the pastry into a soggy base. The mash is smooth and buttery, and it is the vehicle for the liquor, the parsley sauce that makes it London: green, thin, made with a stock and a lot of parsley and poured over the lot. In the pie shops the liquor is made with the water eels were cooked in; a chicken or fish stock works as a home version.',
    ing: [
      '# For the pie',
      '300 g plain flour',
      '150 g cold unsalted butter, cubed',
      '1 egg, beaten',
      '1 sheet ready-rolled puff pastry',
      '1 tbsp vegetable oil',
      '1 onion, finely diced',
      '500 g beef mince',
      '1 tbsp plain flour',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the mash',
      '1 kg floury potatoes, peeled and quartered',
      '60 g unsalted butter',
      '100 ml whole milk',
      '# For the liquor',
      '30 g unsalted butter',
      '30 g plain flour',
      '300 ml chicken stock',
      '4 tbsp chopped parsley'
    ],
    st: [
      'Rub the butter into the 300 g flour until crumbly, then stir in about 5 tablespoons of cold water until the dough holds. Wrap and chill 30 minutes.',
      'Heat the oil in a pan and cook the onion 5 minutes, then the mince 8 minutes until browned. Sprinkle over the 1 tablespoon of flour and stir 1 minute.',
      'Add the stock, Worcestershire sauce, salt and pepper and simmer 20 minutes, until very thick. Cool completely, about 30 minutes.',
      'Heat the oven to 200°C / 400°F. Roll the shortcrust and cut four rounds to line 4 individual pie tins. Fill with the cooled mince.',
      'Cut four lids from the puff pastry, brush the rims with egg, press on, trim and brush the tops with egg. Cut a steam vent in each.',
      'Bake 25 to 30 minutes, until deep golden.',
      'Meanwhile boil the potatoes in salted water for 20 minutes, until tender. Drain, mash with the butter and milk and season.',
      'For the liquor, melt the butter, stir in the flour for 1 minute, then whisk in the stock and simmer 4 minutes. Add the parsley, blend until bright green and season.',
      'Serve each pie with a heap of mash and the liquor poured over.'
    ],
    tips: [
      'Cool the filling completely. Hot filling steams the pastry.',
      'Blend the liquor to a bright green. It is the signature of the dish.',
      'Use floury potatoes for the mash. They mash light and take butter.'
    ],
    pair: ['Chilli vinegar', 'A mug of tea', 'Mushy peas'],
    store: 'Refrigerate pies up to 3 days and reheat at 180°C for 20 minutes. Freeze baked pies for 3 months. The liquor is best fresh.',
    nut: [786, 32, 70, 42, 5, 3, 1100],
    rest: [60, 'chilling the dough and cooling the filling']
  },

  'liver-and-onions': {
    d: 'Thin slices of lamb\'s liver fried for two minutes and served on caramelised onions, bacon and onion gravy. Forty minutes.',
    meta: 'Liver and onions: thin lamb\'s liver fried fast so it stays tender, with slowly caramelised onions, crisp bacon and a rich onion gravy. Serve with mash.',
    kw: ['liver and onions', 'liver and onions recipe', 'lambs liver and onions with bacon', 'how to cook liver so it is tender', 'liver and onion gravy'],
    why: 'Liver is unforgiving: it is done in two minutes and ruined in three, going from tender and rosy to grey and grainy. That is why it is sliced thin, dusted in flour to brown quickly, fried in a hot pan for a minute or so a side, and taken out and left alone while the sauce is made. Soaking it in milk beforehand softens the stronger flavour. The onions are the counterpoint, cooked slowly until sweet and jammy, so every mouthful has the mineral richness of the liver against their sweetness.',
    ing: [
      '500 g lamb\'s liver, trimmed and sliced 1 cm thick',
      '200 ml whole milk',
      '3 large onions, thinly sliced',
      '2 tbsp unsalted butter',
      '1 tbsp vegetable oil',
      '4 rashers streaky bacon, chopped',
      '30 g plain flour',
      '0.5 tsp fine sea salt',
      '0.25 tsp black pepper',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '1 tsp fresh thyme leaves',
      'Mashed potato, to serve'
    ],
    st: [
      'Put the liver in a bowl with the milk and leave for 15 minutes, then drain and pat dry.',
      'Melt half the butter with half the oil in a large frying pan over medium heat, add the bacon and cook 4 minutes. Add the onions and cook 20 minutes, stirring, until soft and deep golden.',
      'Sprinkle the onions with 1 tablespoon of the flour, cook 1 minute, then pour in the stock and Worcestershire sauce and simmer 5 minutes until thickened. Add the thyme and keep warm.',
      'Mix the rest of the flour with the salt and pepper and dust over the liver.',
      'Heat the remaining butter and oil in a second pan over high heat and fry the liver 1 to 2 minutes a side, until browned and still faintly pink in the middle.',
      'Serve the liver on mashed potato with the onion gravy spooned over.'
    ],
    tips: [
      'Fry the liver hot and fast. More than two minutes a side and it turns grainy.',
      'Cook the onions slowly. The sweetness is what balances the liver.',
      'Slice it evenly, about 1 cm, so every piece cooks at the same rate.'
    ],
    pair: ['Creamy mashed potato', 'Peas', 'Cabbage'],
    store: 'Best eaten immediately. Refrigerate the onion gravy up to 3 days. Reheated liver toughens.',
    nut: [436, 38, 26, 20, 3, 8, 900]
  },

  'sausage-casserole': {
    d: 'Browned pork sausages simmered with carrots, mushrooms, butter beans and tomato in a rich, savoury gravy. Seventy-five minutes.',
    meta: 'Sausage casserole: browned pork sausages simmered with carrots, mushrooms and butter beans in a rich tomato and onion gravy. Serve with mash.',
    kw: ['sausage casserole', 'sausage casserole recipe', 'sausage and bean casserole', 'british sausage casserole', 'sausage casserole with butter beans'],
    why: 'Sausages do not need long, but the gravy does, so the sausages are browned first to build flavour in the pan and then finish cooking in the sauce, where they release their seasoning into it. Tomato purée cooked for a couple of minutes gives depth, Worcestershire sauce adds savour, and the beans, added late, thicken the gravy as they break down. It is a dish that gets better the longer it sits, which makes it a good one to cook a day early.',
    ing: [
      '2 tbsp vegetable oil',
      '8 good pork sausages',
      '1 onion, sliced',
      '2 carrots, cut into chunks',
      '2 celery sticks, sliced',
      '200 g chestnut mushrooms, halved',
      '3 garlic cloves, minced',
      '2 tbsp tomato purée',
      '1 tbsp plain flour',
      '400 g tin chopped tomatoes',
      '300 ml beef stock',
      '1 tbsp Worcestershire sauce',
      '2 bay leaves',
      '1 tsp dried thyme',
      '1 tin (400 g) butter beans, drained',
      '2 tbsp chopped parsley'
    ],
    st: [
      'Heat the oil in a large flameproof casserole over medium-high heat and brown the sausages for 6 minutes, turning. Set aside.',
      'In the same pot cook the onion, carrots and celery for 8 minutes, then the mushrooms for 5 minutes.',
      'Add the garlic and tomato purée and cook 2 minutes, then stir in the flour for 1 minute.',
      'Pour in the tomatoes, stock and Worcestershire sauce and add the bay leaves and thyme. Bring to a simmer, scraping up the browned bits.',
      'Return the sausages, cover and simmer 30 minutes.',
      'Add the beans, uncover and simmer 10 minutes more, until the gravy is thick.',
      'Remove the bay leaves, taste for salt and scatter with parsley.'
    ],
    tips: [
      'Brown the sausages hard. It builds the flavour of the whole pot.',
      'Add the beans late so they thicken the gravy without disintegrating.',
      'It is better the next day, so make it ahead.'
    ],
    pair: ['Creamy mashed potato', 'Crusty bread', 'Steamed cabbage'],
    store: 'Refrigerate up to 4 days and reheat gently. Freeze for 3 months.',
    nut: [586, 30, 40, 34, 10, 12, 1250]
  },

  'hunters-chicken': {
    d: 'Chicken breasts wrapped in bacon, coated in barbecue sauce and baked under melted cheddar. The pub favourite, in forty-five minutes.',
    meta: 'Hunter\'s chicken: bacon-wrapped chicken breasts baked in smoky barbecue sauce under melted cheddar. A pub classic, ready in 45 minutes.',
    kw: ['hunters chicken', 'hunter\'s chicken', 'hunters chicken recipe', 'bbq chicken with bacon and cheese', 'pub style hunters chicken'],
    why: 'The bacon does the work that skin would: wrapped tightly around the breast it bastes the meat in its own fat, keeps it juicy through the bake and adds smoky savour, and the barbecue sauce brushed on top caramelises into a glaze. The cheese goes on for the last few minutes only, so it melts and browns without going rubbery. Baked chicken breast is done at 74°C and dries out beyond it, which is why the bacon wrap and the thermometer matter.',
    ing: [
      '4 boneless skinless chicken breasts, about 200 g each',
      '8 rashers streaky bacon',
      '0.5 tsp black pepper',
      '1 tsp smoked paprika',
      '120 ml barbecue sauce',
      '150 g mature cheddar, grated',
      '2 tbsp chopped chives or parsley'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Pat the chicken dry, season with the pepper and paprika and wrap each breast tightly in 2 rashers of bacon, tucking the ends underneath.',
      'Set the chicken on the tray, seam side down, and brush generously with half the barbecue sauce.',
      'Bake 20 minutes.',
      'Brush with the remaining sauce and bake 8 minutes more, until the bacon is crisp and the chicken reaches 72°C / 162°F.',
      'Scatter the cheddar over the top and bake 4 to 5 minutes, until melted and bubbling.',
      'Rest 5 minutes and scatter with chives.'
    ],
    tips: [
      'Wrap the bacon tightly and tuck the ends under so it holds.',
      'Add the cheese at the end. Baked for the whole time it goes rubbery.',
      'Use a thermometer. Chicken breast dries out fast beyond 74°C.'
    ],
    pair: ['Chips or wedges', 'Coleslaw', 'Sweetcorn'],
    store: 'Refrigerate up to 3 days and reheat at 180°C for 15 minutes. Freeze for 2 months.',
    nut: [504, 52, 20, 24, 0, 16, 1250]
  },

  'corned-beef-pie': {
    d: 'Chunks of corned beef, onion and potato in a thick gravy under a golden shortcrust lid. The Northern working-week classic, in seventy minutes.',
    meta: 'Corned beef pie: chunks of corned beef, onion and diced potato in a thick savoury gravy, baked between golden shortcrust pastry.',
    kw: ['corned beef pie', 'corned beef pie recipe', 'northern corned beef and potato pie', 'corned beef and onion pie', 'old fashioned corned beef pie'],
    why: 'It is a pie made from the cupboard: tinned corned beef needs no cooking, only warming through, so the whole trick is in the filling. Onion and potato are cooked first until soft, and the gravy is made thick, thick enough to hold the chunks together when the pie is cut, since corned beef breaks into flakes and a thin gravy would leave the slice a heap. Keep the beef in chunks. Stirred to a paste it loses everything that makes the pie what it is.',
    ing: [
      '# For the pastry',
      '350 g plain flour',
      '175 g cold unsalted butter, cubed',
      '0.5 tsp fine sea salt',
      '5 to 6 tbsp ice water',
      '1 egg, beaten, for glazing',
      '# For the filling',
      '2 tbsp vegetable oil',
      '2 large onions, chopped',
      '400 g waxy potatoes, cut into 1 cm dice',
      '2 tins (340 g each) corned beef, cut into 2 cm chunks',
      '2 tbsp plain flour',
      '350 ml beef stock',
      '1 tbsp brown sauce',
      '1 tsp Worcestershire sauce',
      '0.5 tsp black pepper'
    ],
    st: [
      'Rub the butter into the flour and salt, stir in the water until the dough holds, divide into two discs, wrap and chill 30 minutes.',
      'Heat the oil in a large pan and cook the onions 8 minutes until soft. Add the potatoes and cook 5 minutes.',
      'Sprinkle over the flour, stir 1 minute, then add the stock, brown sauce, Worcestershire sauce and pepper.',
      'Simmer 10 minutes, until the potatoes are just tender and the gravy is very thick. Fold in the corned beef and cool 15 minutes.',
      'Heat the oven to 200°C / 400°F with a baking tray on the lower shelf.',
      'Roll the larger disc and line a 23 cm pie dish. Fill with the mixture.',
      'Roll the second disc, cover the pie, trim, crimp, cut a steam vent and brush with the egg.',
      'Bake on the hot tray 35 to 40 minutes, until deep golden.',
      'Rest 10 minutes and serve.'
    ],
    tips: [
      'Keep the corned beef in chunks. Mashed, it loses its texture.',
      'Make the gravy very thick so the slice holds together.',
      'Cool the filling for a few minutes so it does not melt the pastry.'
    ],
    pair: ['Baked beans', 'Brown sauce', 'Mushy peas'],
    store: 'Refrigerate up to 4 days and eat cold or reheat at 170°C for 20 minutes. Freeze for 2 months.',
    nut: [526, 22, 42, 30, 3, 3, 1400]
  },

  'sausage-plait': {
    d: 'Sausage meat with onion and sage rolled in puff pastry, cut into strips and plaited. The buffet showpiece, in an hour.',
    meta: 'Sausage plait: seasoned sausage meat with onion and sage wrapped in puff pastry, cut and plaited, glazed and baked until golden.',
    kw: ['sausage plait', 'sausage plait recipe', 'sausage meat plait', 'puff pastry sausage plait', 'party sausage plait'],
    why: 'A plait looks harder than it is: it is a sheet of puff pastry with a log of filling down the middle and diagonal strips cut down the sides, folded over one another. The filling is sausage meat seasoned with sage and softened onion, which gives moisture and keeps the meat loose. What matters most is temperature: cold pastry stays crisp and puffs, so the plait is shaped and chilled briefly before baking, and it goes into a very hot oven so the pastry sets before the fat in it melts away.',
    ing: [
      '1 tbsp vegetable oil',
      '1 onion, finely chopped',
      '500 g pork sausage meat',
      '2 tbsp chopped sage',
      '1 tbsp wholegrain mustard',
      '0.5 tsp black pepper',
      '1 sheet (375 g) ready-rolled puff pastry',
      '1 egg, beaten, for glazing',
      '1 tbsp sesame or poppy seeds'
    ],
    st: [
      'Heat the oil in a small pan and cook the onion 6 minutes until soft. Cool completely.',
      'Mix the onion with the sausage meat, sage, mustard and pepper.',
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Unroll the pastry onto the paper. Shape the filling into a long log down the centre third of the pastry.',
      'Cut diagonal strips about 2 cm wide down each side, from the filling to the edge.',
      'Fold the top flap over the filling, then fold the strips over it alternately, left then right, to make a plait, tucking the ends under.',
      'Chill 15 minutes, then brush all over with the egg and scatter with the seeds.',
      'Bake 35 minutes, until deep golden and the sausage reaches 74°C / 165°F.',
      'Cool 10 minutes and slice.'
    ],
    tips: [
      'Cool the onions first. Hot filling melts the pastry.',
      'Chill the plait before baking so the layers puff.',
      'Slice it with a serrated knife and it stays neat.'
    ],
    pair: ['Brown sauce', 'A green salad', 'Piccalilli'],
    store: 'Refrigerate up to 3 days and eat cold or reheat at 180°C for 10 minutes. Freeze baked for 2 months.',
    nut: [362, 14, 18, 26, 1, 2, 620]
  }
};
