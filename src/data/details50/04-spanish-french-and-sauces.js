'use strict';

/**
 * Volume fifty — Europe, Africa and Jewish cooking, fourth part.
 *
 * Twenty-five dishes: Spanish cachopo, huevos rotos, berenjenas con miel,
 * rabo de toro, paella mixta, clams, baby squid in ink, salt cod croquetas,
 * patatas a lo pobre and bacalao al pil pil; a slow cooker beef ragu and
 * rice pudding, skillet gnocchi, sourdough focaccia and a honey glazed
 * gammon; French cherries jubilee, mussels in cream, trout with almonds,
 * pain d'épices, a cheese soufflé and a ratatouille tart; and four sauces.
 * Waits of an hour or more are declared as rest. Nutrition is estimated by
 * npm run calc.
 */

module.exports = {
  'cachopo': {
    d: 'Two thin veal or beef escalopes sandwiching ham and cheese, coated in breadcrumbs and cooked until crisp, the huge speciality of Asturias.',
    meta: 'Cachopo: two thin veal or beef escalopes sandwiching ham and cheese, coated in breadcrumbs and cooked until crisp. Three servings, cooked for 20 minutes.',
    kw: ['cachopo', 'cachopo asturiano', 'cachopo recipe', 'asturian stuffed breaded steak', 'spanish cachopo with ham and cheese'],
    why: 'In Asturias, a cachopo is designed to be shared, and it is almost impossible to finish alone. Two big escalopes of veal or beef, pounded thin, are laid around slices of serrano ham and cheese, then breaded and fried until crisp. The result is something between a schnitzel, a cordon bleu and a challenge, and it arrives at the table the size of a plate.\n\nThe meat is critical. Ask the butcher for two 150 g slices of veal or beef topside, cut thin, and flatten them between sheets of cling film with a rolling pin until they are about 4 mm. **If the meat tears, patch it; the filling will hold it together.**\n\nLay one slice on a board, season it, and cover with two slices of ham and two slices of a melting cheese such as Cabrales for a strong flavour or Emmental for a mild one. Top with the second slice and press the edges together, using a toothpick if needed to hold them shut.\n\nCoat in flour, beaten egg and breadcrumbs, pressing hard, and chill for 15 minutes. Fry in 1 cm of hot oil for 5 minutes on each side, until golden, and drain. Serve with chips and green peppers.',
    ing: [
      '300 g beef topside, cut into 2 thin escalopes and flattened to 4 mm',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper',
      '4 slices serrano ham, about 40 g',
      '80 g gruyère cheese, sliced',
      '3 tbsp plain flour',
      '2 eggs, beaten',
      '100 g fine breadcrumbs',
      '150 ml olive oil or sunflower oil, for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Season one escalope with half the salt and pepper. Lay the ham and cheese slices over it, leaving a 1 cm border. Cover with the second escalope and press the edges together.',
      'Coat in the flour, then the beaten egg, then the breadcrumbs, pressing the crumbs on firmly. Chill for 15 minutes.',
      'Heat the oil in a wide frying pan over a medium heat. Fry the cachopo for 5 minutes on each side until deep golden and the cheese has melted.',
      'Drain on kitchen paper, rest for 2 minutes and cut into wedges. Serve with the lemon.'
    ],
    tips: [
      'Flatten the meat evenly.',
      'Keep the heat at medium so the filling heats through.',
      'Serve with chips and fried green peppers.'
    ],
    pair: ['Chips', 'Padrón peppers', 'Asturian cider', 'Green salad'],
    store: 'Best eaten straight away.',
    nut: [868, 41, 32, 64, 2, 3, 970]
  },

  'huevos-rotos': {
    d: 'Fried eggs broken over golden fried potatoes and slices of Spanish ham, so the yolk runs through everything.',
    meta: 'Huevos rotos: fried eggs broken over golden fried potatoes and Spanish ham so the yolk runs through. Two servings, cooked for 25 minutes.',
    kw: ['huevos rotos', 'huevos rotos recipe', 'spanish broken eggs', 'huevos estrellados', 'eggs on potatoes with jamon'],
    why: 'The name means broken eggs, and the breaking is the point. This is a dish found in every bar from Madrid to the south, a pile of golden potatoes with eggs on top, which you crush at the table so that the yolks coat every chip. It is simple, and the only difficulty is getting the potatoes right.\n\nThe Spanish method is to cook the potatoes in a lot of olive oil, in a shallow pool, over a medium heat. Slice floury potatoes thin, about 5 mm, and cook for 15 minutes, turning, until they are golden outside and soft inside. They should not be too crisp, because they will absorb the egg. **Don\'t use too hot an oil.** The potatoes would brown before they cooked through.\n\nLift the potatoes out onto a warm plate, scatter with sea salt, and top with slices of jamón serrano. In the same oil, fry the eggs. Spoon the hot oil over the whites to set the tops, and cook for 2 minutes until the edges are lacy and brown, with a runny yolk.\n\nSlide the eggs onto the potatoes and bring to the table. Break the yolks with a fork, mix, and eat at once with bread.',
    ing: [
      '500 g floury potatoes, peeled and sliced 5 mm thick',
      '150 ml olive oil',
      '1 tsp flaky salt',
      '4 slices serrano ham, about 40 g',
      '4 eggs',
      '1/4 tsp smoked paprika'
    ],
    st: [
      'Heat the oil in a wide frying pan over a medium heat. Add the potatoes and cook for 15 minutes, turning, until golden and tender.',
      'Lift out onto a warm plate, drain on kitchen paper and season with half the salt. Top with the ham.',
      'Pour off all but 3 tablespoons of the oil. Fry the eggs over a medium-high heat for 2 minutes, spooning the oil over the whites, until the edges are crisp and the yolks runny.',
      'Slide the eggs over the potatoes, sprinkle with the remaining salt and the paprika, and serve at once. Break the yolks at the table.'
    ],
    tips: [
      'Use floury potatoes.',
      'Keep the oil at a gentle heat.',
      'Serve at once.'
    ],
    pair: ['Crusty bread', 'Tomato salad', 'Red wine', 'Padrón peppers'],
    store: 'Best eaten straight away.',
    nut: [980, 21, 44, 80, 6, 2, 1560]
  },

  'berenjenas-con-miel': {
    d: 'Thin batons of aubergine in a light batter, cooked until crisp and drizzled with dark cane honey, an Andalusian tapas favourite.',
    meta: 'Berenjenas con miel: thin batons of aubergine in a light batter, cooked until crisp and drizzled with honey. Four servings, cooked for 15 minutes.',
    kw: ['berenjenas con miel', 'aubergine with honey', 'berenjenas con miel recipe', 'andalusian aubergine tapas', 'crispy aubergine with cane honey'],
    why: 'Sweet and salty at once: the honey on top of crisp, salted aubergine is the combination that people remember from a first trip to Cordoba or Granada. Berenjenas con miel is a tapas bar standard, and the right way to make it is to keep the aubergine thin and the batter thinner.\n\nCut the aubergine into batons, about 1 cm thick and 7 cm long. Salt them well and leave in a colander for 20 minutes to draw out the bitter juices, then pat dry. Soak in milk for 10 minutes if you want a milder taste. **The aubergine must be dry before it is coated.** Wet pieces make the coating slide off.\n\nThe coating is only flour, seasoned with salt. Some cooks use a light batter of flour, sparkling water and a pinch of salt. Dredge the batons in flour, shake off the excess, and cook in 2 cm of hot olive oil at 180°C for 3 minutes, until golden and crisp. Drain on kitchen paper.\n\nPile on a plate and drizzle with miel de caña, the dark sugarcane molasses of Andalusia. Ordinary honey, warmed until runny, works well too. Serve at once, with a cold fino sherry.',
    ing: [
      '2 aubergines, about 600 g, cut into batons 1 cm thick',
      '2 tsp salt',
      '100 g plain flour',
      '200 ml olive oil, for frying',
      '4 tbsp cane molasses or runny honey',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Toss the aubergine with the 2 tsp salt in a colander and leave for 20 minutes. Rinse and pat dry.',
      'Toss the batons in the flour, shaking off the excess.',
      'Heat the oil to 180°C in a deep pan. Cook the aubergine in 3 batches for 3 minutes each, until golden and crisp. Drain on kitchen paper.',
      'Pile onto a plate, drizzle with the molasses or honey and scatter with the flaky salt. Serve at once.'
    ],
    tips: [
      'Dry the aubergine thoroughly.',
      'Cook in small batches.',
      'Drizzle with honey just before serving.'
    ],
    pair: ['Fino sherry', 'Manchego', 'Jamón', 'Olives'],
    store: 'Best eaten straight away.',
    nut: [595, 4, 39, 47, 5, 17, 1780]
  },

  'rabo-de-toro': {
    d: 'Oxtail braised slowly in red wine with onions, carrots, tomatoes and bay until the meat falls from the bone in a thick, glossy sauce.',
    meta: 'Rabo de toro: oxtail braised slowly in red wine with onions, carrots, tomatoes and bay until falling from the bone. Six servings, cooked for 3 hours.',
    kw: ['rabo de toro', 'rabo de toro recipe', 'spanish oxtail stew', 'cordoba oxtail braise', 'rabo de toro in red wine'],
    why: 'It is the classic stew of Cordoba, and it is built around a bullfighter\'s tail, although today it is made with oxtail from cattle. The meat is gelatinous and rich, and it demands a slow braise. After 3 hours, it will fall away from the bone at a touch, and the sauce will be thick, dark and glossy from the collagen.\n\nBrowning comes first. Dust the oxtail pieces in seasoned flour and brown them well in olive oil, in batches, until deeply coloured on every side. It takes about 15 minutes. **Don\'t crowd the pan.** Crowding steams the meat and robs the sauce of its colour.\n\nIn the same pot, cook onions, carrots, leeks and garlic for 10 minutes, then add tomato purée, a bottle of full-bodied red wine, bay leaves, thyme and enough stock to cover. Bring to a boil, return the oxtail, cover, and braise in a 160°C oven for 3 hours.\n\nLift out the meat, skim the fat from the top of the sauce, and reduce it for 10 minutes if it is thin. Return the meat and serve with chips, potatoes or rice. The dish tastes better the next day.',
    ing: [
      '1.5 kg oxtail, cut into pieces',
      '3 tbsp plain flour',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '4 tbsp olive oil',
      '2 onions, about 300 g, chopped',
      '2 carrots, about 200 g, diced',
      '1 leek, about 150 g, sliced',
      '4 garlic cloves, crushed',
      '2 tbsp tomato purée',
      '500 ml full-bodied red wine',
      '500 ml beef stock',
      '2 bay leaves',
      '3 sprigs fresh thyme'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan). Toss the oxtail with the flour, salt and pepper. Brown in the oil in batches for 15 minutes. Transfer to a casserole.',
      'Cook the onions, carrots, leek and garlic in the same pan for 10 minutes. Stir in the tomato purée for 1 minute.',
      'Pour in the wine and bring to a boil, scraping the pan. Add to the casserole with the stock, bay leaves and thyme.',
      'Cover and braise for 3 hours until the meat falls from the bone.',
      'Lift out the oxtail, skim the fat, and reduce the sauce if thin. Return the meat and serve.'
    ],
    tips: [
      'Chill the stew overnight to make skimming the fat easy.',
      'Use a wine you would drink.',
      'Serve with potatoes.'
    ],
    pair: ['Chips', 'Mashed potato', 'Rioja', 'Crusty bread'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [650, 50, 18, 42, 3, 5, 880]
  },

  'paella-mixta': {
    d: 'Rice cooked in a wide pan with chicken, prawns, mussels and green beans in a saffron stock until it forms a toasted crust.',
    meta: 'Paella mixta: rice cooked in a wide pan with chicken, prawns, mussels and green beans in saffron stock. Six servings, cooked for 45 minutes.',
    kw: ['paella mixta', 'mixed paella', 'paella mixta recipe', 'chicken and seafood paella', 'spanish mixed paella'],
    why: 'Purists in Valencia say that seafood and meat do not belong together, and the rest of Spain makes paella mixta anyway. It is the paella of beach restaurants and family parties, with chicken and prawns and mussels in one pan, and it tastes good enough to defend itself.\n\nThe pan matters, but a wide, shallow frying pan will do. The rice should be no more than 1.5 cm deep, so it cooks evenly. Use paella rice or any short-grain: it absorbs three times its volume of stock without turning creamy. **Never stir the rice after the stock goes in.** Stirring releases starch and makes a risotto, which is a different dish.\n\nStart by browning the chicken in olive oil, then the peppers, then a sofrito of tomato, garlic and paprika. Add the rice, toast it for 1 minute, then pour in the hot stock with saffron and green beans. Bring to a boil, lower to a simmer, and cook for 10 minutes.\n\nPress the prawns and mussels into the rice, and cook for 8 minutes more. For the last minute, turn up the heat to form the socarrat, a thin crust of toasted rice at the base. You will hear it crackle. Rest for 5 minutes, covered with foil.',
    ing: [
      '5 tbsp olive oil',
      '500 g chicken thighs, boned and cut into 4 cm pieces',
      '1 red pepper, about 150 g, sliced',
      '4 garlic cloves, crushed',
      '2 tomatoes, about 200 g, grated',
      '2 tsp smoked paprika',
      '350 g paella rice',
      '1 litre hot chicken stock',
      '1 pinch saffron strands',
      '150 g green beans, halved',
      '1 tsp salt',
      '300 g raw king prawns',
      '500 g mussels, scrubbed',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide paella pan and brown the chicken for 8 minutes. Add the pepper and garlic for 3 minutes, then the tomatoes and paprika for 5 minutes.',
      'Add the rice and stir for 1 minute. Pour in the hot stock, saffron, green beans and salt. Bring to a boil and do not stir again.',
      'Simmer for 10 minutes. Press the prawns and mussels into the rice.',
      'Cook for 8 minutes more, then turn up the heat for 1 minute to form a crust. Discard any unopened mussels.',
      'Cover with foil, rest for 5 minutes and serve with the lemon.'
    ],
    tips: [
      'Do not stir after adding the stock.',
      'Use a wide, shallow pan.',
      'Listen for the crackle to know the crust has formed.'
    ],
    pair: ['Lemon wedges', 'Green salad', 'Alioli', 'Sangria'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [570, 44, 58, 18, 3, 3, 1350]
  },

  'almejas-a-la-marinera': {
    d: 'Clams steamed open in a sauce of garlic, white wine, parsley and a pinch of paprika, served with plenty of bread.',
    meta: 'Almejas a la marinera: clams steamed open in a sauce of garlic, white wine, parsley and paprika. Four servings, cooked for 12 minutes.',
    kw: ['almejas a la marinera', 'clams marinera', 'spanish clams in white wine', 'almejas a la marinera recipe', 'garlic wine clams tapas'],
    why: 'Fast cooking, big flavour: a pan of clams steamed in white wine takes ten minutes, and it is among the best things to eat in a Spanish bar. The sauce is garlic, parsley, wine and the briny liquor from the clams themselves. The shells are the only mess.\n\nThe clams need soaking first. Put them in a bowl of cold salted water for 30 minutes, so they spit out any sand. Lift them out rather than pouring them into a colander, or the grit will settle back on them. **Discard any clams that are open and do not close when tapped.** They are dead.\n\nSoften garlic in olive oil for 1 minute without browning, add a spoonful of flour to thicken, then a pinch of sweet paprika and a glass of dry white wine. Bring to a boil and add the clams. Cover and cook for 5 to 6 minutes, shaking the pan, until the shells open. Discard any that remain closed.\n\nFinish with a handful of chopped parsley and a squeeze of lemon. Serve in the pan, with crusty bread to soak up the sauce.',
    ing: [
      '1 kg clams, scrubbed',
      '1 tsp salt, for soaking',
      '3 tbsp olive oil',
      '4 garlic cloves, finely chopped',
      '1 tbsp plain flour',
      '1/2 tsp sweet paprika',
      '150 ml dry white wine',
      '3 tbsp chopped fresh parsley',
      '1 lemon, cut into wedges',
      '200 g crusty bread, to serve'
    ],
    st: [
      'Soak the clams in cold water with the salt for 30 minutes. Lift out and drain.',
      'Heat the oil in a wide pan and cook the garlic for 1 minute. Stir in the flour and paprika for 30 seconds.',
      'Add the wine and bring to a boil. Add the clams, cover and cook for 5 to 6 minutes, shaking the pan, until the shells open.',
      'Discard any unopened clams. Scatter with the parsley and serve with the lemon and bread.'
    ],
    tips: [
      'Do not cook the clams for longer than necessary.',
      'Discard any that do not open.',
      'Use a wine you would drink.'
    ],
    pair: ['Crusty bread', 'Albariño', 'Lemon wedges', 'Green salad'],
    store: 'Best eaten straight away.',
    nut: [434, 40, 37, 14, 2, 3, 2340]
  },

  'chipirones-en-su-tinta': {
    d: 'Baby squid stewed in their own ink with onion, green pepper and white wine until the sauce is black, glossy and rich.',
    meta: 'Chipirones en su tinta: baby squid stewed in their own ink with onion, green pepper and white wine in a black sauce. Four servings, cooked for 35 minutes.',
    kw: ['chipirones en su tinta', 'baby squid in ink', 'basque squid in ink sauce', 'chipirones recipe', 'calamares en su tinta'],
    why: 'In the Basque country, they cook squid in the ink that came with it, and the sauce is nearly black, with the briny depth of the sea. Chipirones are small squid, 10 cm long, tender and sweet, and each one comes with its own tiny ink sac. If the fishmonger can clean them but keep the sacs, you are halfway there; otherwise, use sachets of squid ink.\n\nThe sauce starts with a sofrito: finely chopped onion, green pepper and garlic cooked slowly in olive oil for 20 minutes, until they melt into a sweet jam. This is the base, and it needs time. **Don\'t hurry the sofrito.** A rushed one tastes sharp and raw.\n\nAdd a glass of white wine, a spoonful of flour and the ink, dissolved in a little hot water, and simmer for 10 minutes. Blend the sauce smooth, strain it through a sieve, and return it to the pan.\n\nThe squid go in at the end and cook for only 10 minutes, until they are tender. Overcooked squid is rubbery, so this timing matters. Serve with white rice and fried bread triangles, the traditional garnish.',
    ing: [
      '4 tbsp olive oil',
      '2 onions, about 300 g, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '4 garlic cloves, crushed',
      '1 tbsp plain flour',
      '150 ml dry white wine',
      '6 g squid ink',
      '200 ml fish stock',
      '1/2 tsp salt',
      '600 g baby squid, cleaned',
      '200 g cooked white rice, to serve',
      '2 slices bread, cut into triangles and fried'
    ],
    st: [
      'Heat the oil in a wide pan and cook the onions, pepper and garlic over a low heat for 20 minutes until very soft.',
      'Stir in the flour for 1 minute, then add the wine and bubble for 3 minutes.',
      'Dissolve the squid ink in the stock and add with the salt. Simmer for 10 minutes. Blend until smooth and return to the pan.',
      'Add the squid and cook gently for 10 minutes until tender.',
      'Serve with the rice and the fried bread triangles.'
    ],
    tips: [
      'Cook the squid for no more than 10 minutes.',
      'Strain the sauce for a silky finish.',
      'Serve with white rice.'
    ],
    pair: ['White rice', 'Fried bread', 'Txakoli', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [425, 29, 39, 17, 3, 6, 610]
  },

  'croquetas-de-bacalao': {
    d: 'Crisp, breadcrumbed croquettes with a creamy filling of cod, béchamel and parsley, a Spanish tapas bar staple.',
    meta: 'Croquetas de bacalao: crisp, breadcrumbed croquettes with a creamy filling of cod, béchamel and parsley. Makes about twenty, cooked in 10 minutes.',
    kw: ['croquetas de bacalao', 'cod croquettes', 'spanish cod croquetas', 'croquetas de bacalao recipe', 'bechamel and cod croquettes'],
    why: 'The filling should be so soft that it nearly flows, and the coating should be so crisp that it cracks. Spanish croquetas are made from a very thick béchamel that sets overnight in the fridge until it can be shaped, and the contrast between the thin crust and the molten centre is what makes them addictive.\n\nCook the fish first. Poach 300 g of skinless cod fillet in milk with a bay leaf for 8 minutes, flake it, and keep the milk. Salt cod, soaked for 24 hours, is the traditional choice and gives a more intense flavour. The poaching milk becomes the base of the béchamel. **Use the milk, not water.** It carries the flavour of the fish.\n\nMelt butter, stir in the flour, then add the warm milk gradually, stirring until you have a very thick paste, almost like mashed potato. This takes 10 minutes. Fold in the flaked cod, parsley and a pinch of nutmeg. Spread in a dish and chill for at least 4 hours, ideally overnight.\n\nShape into small cylinders with floured hands, coat in flour, egg and breadcrumbs, and cook in oil at 180°C for 1 to 2 minutes, until deep golden. Drain, and serve hot.',
    ing: [
      '300 g cod fillet, skinless',
      '600 ml whole milk',
      '1 bay leaf',
      '60 g butter',
      '80 g plain flour',
      '3 tbsp chopped fresh parsley',
      '1/4 tsp grated nutmeg',
      '1/2 tsp salt',
      '100 g plain flour, for coating',
      '2 eggs, beaten',
      '150 g fine breadcrumbs',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Poach the cod in the milk with the bay leaf for 8 minutes. Lift out and flake. Strain the milk.',
      'Melt the butter, stir in the 80 g flour and cook for 2 minutes. Add the warm milk gradually, stirring, and cook for 10 minutes until very thick.',
      'Fold in the cod, parsley, nutmeg and salt. Spread in a dish, cover the surface and chill for at least 4 hours.',
      'With floured hands, shape into about 20 small cylinders. Coat in the 100 g flour, then egg, then breadcrumbs.',
      'Heat the oil to 180°C and cook in batches for 1 to 2 minutes until deep golden. Drain.'
    ],
    tips: [
      'Chill the mixture well.',
      'Coat twice for a thicker crust.',
      'Do not overcrowd the oil.'
    ],
    pair: ['Alioli', 'Lemon wedges', 'Fino sherry', 'Green salad'],
    store: 'Uncooked croquetas freeze for 1 month. Cooked ones keep in the fridge for 2 days.',
    nut: [242, 6, 14, 18, 1, 2, 140],
    rest: [240, 'Chilling the filling']
  },

  'patatas-a-lo-pobre': {
    d: 'Potatoes, onions and green peppers cooked slowly together in plenty of olive oil until soft, golden and sweet, a Spanish poor man\'s dish.',
    meta: 'Patatas a lo pobre: potatoes, onions and green peppers cooked slowly together in olive oil until soft and golden. Four servings, cooked for 35 minutes.',
    kw: ['patatas a lo pobre', 'poor man\'s potatoes', 'spanish potatoes with onions and peppers', 'patatas a lo pobre recipe', 'andalusian potato side dish'],
    why: 'Patience, not skill. The name means poor man\'s potatoes, and the recipe asks for the cheapest ingredients in the kitchen and a lot of time on a low heat. Slices of potato, onion and green pepper are slowly poached in olive oil, then lifted out and sometimes briefly crisped, and the result is soft, sweet and richly flavoured.\n\nThe amount of oil is what surprises people. You need enough to come halfway up the potatoes: about 150 ml for 4 servings. This is not deep frying but a gentle confit. **Keep the heat low, so the oil barely bubbles.** Hot oil browns the outside and leaves the middle raw.\n\nSlice the potatoes 4 mm thick and the onions thinner. Cut the green peppers into strips. Cook them together in the oil in the pan, with a few cloves of garlic left whole, for 30 minutes, turning occasionally. The potatoes should be tender but not falling apart.\n\nLift out with a slotted spoon, season with salt, and finish with a splash of sherry vinegar. Strain the oil and keep it for another use, as it is full of flavour. Serve as a side with grilled meat or a fried egg.',
    ing: [
      '800 g potatoes, peeled and sliced 4 mm thick',
      '2 onions, about 300 g, thinly sliced',
      '2 green peppers, about 300 g, cut into strips',
      '4 garlic cloves, whole',
      '150 ml olive oil',
      '1 tsp salt',
      '1 tsp sherry vinegar'
    ],
    st: [
      'Heat the oil in a wide, deep frying pan over a low heat. Add the potatoes, onions, peppers and garlic.',
      'Cook for 30 minutes, turning gently every 5 minutes, until the potatoes are tender and golden.',
      'Lift out with a slotted spoon onto a plate and season with the salt.',
      'Sprinkle with the vinegar and serve warm.'
    ],
    tips: [
      'Keep the heat low.',
      'Turn gently so the potatoes stay whole.',
      'Reuse the flavoured oil.'
    ],
    pair: ['Fried egg', 'Grilled meat', 'Fish', 'Red wine'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days.',
    nut: [523, 6, 46, 35, 7, 8, 610]
  },

  'bacalao-al-pil-pil': {
    d: 'Cod cooked gently in olive oil flavoured with garlic and chilli, then swirled until the cod\'s gelatine forms a thick, creamy emulsion.',
    meta: 'Bacalao al pil pil: cod cooked gently in olive oil with garlic and chilli, then swirled until it forms a creamy emulsion. Four servings, cooked for 20 minutes.',
    kw: ['bacalao al pil pil', 'cod al pil pil', 'basque cod in garlic emulsion', 'bacalao al pil pil recipe', 'pil pil cod sauce'],
    why: 'It is a sauce made from oil and fish, and it works because of gelatine. The Basque pil pil, named after the sound of the bubbling oil, is an emulsion: as the cod cooks in warm olive oil, it releases collagen from its skin and flesh, and when the pan is swirled in slow circles, the collagen bonds with the oil and forms a thick, pale, creamy sauce, with no cream, butter or flour.\n\nThe traditional fish is salt cod, soaked for 48 hours in changes of water. A fresh cod fillet with the skin on also works, and the skin is what gives the gelatine. Choose thick fillets of about 200 g, and salt them lightly 30 minutes before cooking. **Keep the oil warm, never hot.** At 60°C the oil is barely too hot to touch. Above that, the emulsion will not form.\n\nHeat 200 ml of olive oil with sliced garlic and a dried chilli until the garlic is pale gold, then lift them out. Cool the oil for 5 minutes. Add the cod, skin-side up, and cook very gently for 8 minutes, then turn it skin-side down.\n\nNow the work: lift the fish out, and swirl the pan slowly, in circles, for 5 to 8 minutes. The oil turns cloudy, then thickens into a mayonnaise-like sauce. Return the fish and spoon over the sauce.',
    ing: [
      '4 fresh cod fillets with skin, about 800 g',
      '1 tsp salt',
      '200 ml extra virgin olive oil',
      '5 garlic cloves, thinly sliced',
      '2 dried chillies',
      '2 tbsp chopped fresh parsley'
    ],
    st: [
      'Salt the cod and leave for 30 minutes. Pat dry.',
      'Heat the oil in a wide, shallow pan with the garlic and chillies over a low heat for 4 minutes until the garlic is pale gold. Lift out and keep. Cool the oil for 5 minutes.',
      'Lay the cod in the oil skin-side up. Cook very gently over the lowest heat for 8 minutes, then turn and cook for 6 minutes. Lift out and keep warm.',
      'Take the pan off the heat and swirl it slowly in circles for 5 to 8 minutes until the oil turns cloudy and thickens into a creamy sauce.',
      'Return the cod, spoon over the sauce, and scatter with the garlic, chillies and parsley.'
    ],
    tips: [
      'Keep the oil warm, not hot.',
      'Swirl the pan in slow, steady circles.',
      'Use fish with skin on for the gelatine.'
    ],
    pair: ['Crusty bread', 'Boiled potatoes', 'Txakoli', 'Green salad'],
    store: 'Best eaten straight away.',
    nut: [575, 36, 2, 47, 0, 0, 700]
  },

  'slow-cooker-beef-ragu': {
    d: 'Beef shin cooked slowly in a slow cooker with tomatoes, red wine, carrots and herbs until it falls into a rich, thick sauce for pasta.',
    meta: 'Slow cooker beef ragu: beef shin cooked slowly with tomatoes, red wine, carrots and herbs into a thick sauce for pasta. Six servings, cooked for 7 hours.',
    kw: ['slow cooker beef ragu', 'slow cooker ragu', 'beef ragu in the slow cooker', 'slow cooked beef ragu with pappardelle', 'crockpot beef ragu'],
    why: 'Does a ragu have to be stirred? Not this one. Beef shin goes into a slow cooker with the vegetables, wine and tomatoes, and 7 hours later it falls apart into a thick, glossy sauce that coats pasta. The effort is at the start, and the payoff is a house that smells like an Italian grandmother\'s kitchen.\n\nThe browning is the one step not to skip. Brown the beef in a hot pan, in batches, until it has a dark crust on every side, then transfer it to the slow cooker. In the same pan, cook the onion, carrot and celery, and deglaze with red wine, scraping up the sticky bits. **The browned bits are the flavour.** A slow cooker does not brown anything on its own.\n\nAdd tinned tomatoes, tomato purée, a bay leaf, a sprig of rosemary and a little salt, and cook on low for 7 hours. The meat should break apart at the touch of a spoon. Shred it directly in the sauce, discard the bay and rosemary, and cook uncovered on high for 20 minutes to thicken.\n\nToss with pappardelle, tagliatelle or rigatoni, and finish with parmesan. The ragu freezes beautifully in portions.',
    ing: [
      '3 tbsp olive oil',
      '1 kg beef shin or chuck, cut into 5 cm pieces',
      '1 tsp salt',
      '1 onion, about 150 g, finely chopped',
      '2 carrots, about 200 g, finely chopped',
      '2 celery sticks, finely chopped',
      '4 garlic cloves, crushed',
      '200 ml red wine',
      '400 g tinned chopped tomatoes',
      '2 tbsp tomato purée',
      '1 bay leaf',
      '1 sprig fresh rosemary',
      '400 g pappardelle',
      '40 g parmesan, grated'
    ],
    st: [
      'Heat the oil in a large pan and brown the beef in batches for 10 minutes. Season with half the salt and transfer to the slow cooker.',
      'Cook the onion, carrot and celery in the same pan for 8 minutes. Add the garlic for 1 minute, then the wine, scraping the pan. Boil for 3 minutes.',
      'Tip into the slow cooker with the tomatoes, tomato purée, bay, rosemary and remaining salt. Cook on low for 7 hours.',
      'Remove the bay and rosemary. Shred the beef in the sauce and cook uncovered on high for 20 minutes to thicken.',
      'Cook the pappardelle according to the packet, drain, and toss with the ragu. Serve with the parmesan.'
    ],
    tips: [
      'Brown the meat well.',
      'Thicken the sauce with the lid off.',
      'Freeze leftover ragu in portions.'
    ],
    pair: ['Pappardelle', 'Crusty bread', 'Green salad', 'Red wine'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [708, 45, 60, 32, 5, 7, 650]
  },

  'slow-cooker-rice-pudding': {
    d: 'Pudding rice cooked very slowly with milk, cream, sugar and nutmeg until thick, creamy and with a lightly golden skin.',
    meta: 'Slow cooker rice pudding: pudding rice cooked very slowly with milk, cream, sugar and nutmeg until thick and creamy. Six servings, cooked for 3 hours.',
    kw: ['slow cooker rice pudding', 'slow cooker rice pudding recipe', 'creamy slow cooker rice pudding', 'crockpot rice pudding', 'old fashioned rice pudding in a slow cooker'],
    why: 'The first cold evening of autumn calls for this, and the slow cooker does the stirring. Rice pudding has always been made slowly, in a low oven for 2 hours, and the slow cooker uses the same principle: gentle, even heat and plenty of time for the starch to thicken the milk.\n\nUse short-grain pudding rice, not basmati or long-grain, which stay separate. Pudding rice releases starch and becomes creamy. Rinse it briefly, add it to the slow cooker with milk, cream, sugar, a knob of butter and a pinch of salt, and stir once. **Don\'t add all the milk at once if your cooker runs hot.** Keep 100 ml back and add it if the pudding looks dry.\n\nCook on low for 3 hours, stirring once after the first hour. The pudding is ready when the rice is tender and the milk has thickened to the texture of custard. It will continue to thicken as it cools.\n\nGrate nutmeg over the top and serve hot, with a spoonful of jam, stewed fruit or just a swirl of cream. Leftovers are good cold, from the fridge, the next day.',
    ing: [
      '120 g pudding rice',
      '1 litre whole milk',
      '250 ml double cream',
      '80 g caster sugar',
      '30 g butter',
      '1 pinch salt',
      '1 tsp vanilla extract',
      '1/2 tsp grated nutmeg',
      '4 tbsp raspberry jam'
    ],
    st: [
      'Rinse the rice briefly. Put in the slow cooker with the milk, cream, sugar, butter, salt and vanilla and stir once.',
      'Cover and cook on low for 3 hours, stirring once after the first hour, until the rice is tender and the pudding is thick and creamy.',
      'Grate over the nutmeg and serve hot with the jam.'
    ],
    tips: [
      'Use short-grain pudding rice.',
      'Add a splash of milk if it thickens too much.',
      'Stir in a spoonful of cream for extra richness.'
    ],
    pair: ['Jam', 'Stewed fruit', 'Cream', 'Cinnamon'],
    store: 'Keeps in the fridge for 3 days. Loosen with milk when reheating.',
    nut: [428, 8, 45, 24, 0, 29, 120]
  },

  'skillet-gnocchi-with-spinach': {
    d: 'Shop-bought gnocchi crisped in a frying pan, then tossed with garlic, spinach, cream and parmesan.',
    meta: 'Skillet gnocchi with spinach: shop-bought gnocchi crisped in a frying pan, then tossed with garlic, spinach, cream and parmesan. Four servings, cooked in 15 minutes.',
    kw: ['skillet gnocchi with spinach', 'crispy gnocchi with spinach', 'pan gnocchi with cream', 'gnocchi and spinach recipe', 'quick gnocchi dinner'],
    why: 'Salt the pan, not the gnocchi, and the whole thing comes together in 15 minutes. The trick is to treat shop-bought gnocchi not as something to boil but as something to brown. In a dry, hot non-stick pan with a little oil, they develop a crisp golden shell and stay pillowy inside, and the contrast is the best thing about them.\n\nVacuum-packed gnocchi go straight from the pack to the pan without boiling. Heat 2 tablespoons of olive oil over a medium-high heat and add the gnocchi in a single layer. **Leave them untouched for 3 minutes.** Moving them too soon stops the crust forming. Turn and cook for another 3 minutes.\n\nPush the gnocchi to the side, add the garlic to the oil for 30 seconds, then the spinach in handfuls. It wilts in 2 minutes. Pour in the cream, a splash of water and a pinch of nutmeg, bring to a bubble, and toss everything together for 2 minutes until the sauce coats the gnocchi.\n\nOff the heat, stir in the parmesan and a squeeze of lemon. The sauce should be loose and creamy, not thick. Serve straight from the pan.',
    ing: [
      '500 g shop-bought potato gnocchi',
      '2 tbsp olive oil',
      '3 garlic cloves, sliced',
      '200 g baby spinach',
      '150 ml double cream',
      '50 ml water',
      '1 pinch grated nutmeg',
      '50 g parmesan, grated',
      '1 tbsp lemon juice',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oil in a large non-stick pan over a medium-high heat. Add the gnocchi in a single layer and cook for 3 minutes without moving. Turn and cook for 3 minutes more.',
      'Push the gnocchi aside, add the garlic for 30 seconds, then the spinach in handfuls until wilted, about 2 minutes.',
      'Pour in the cream, water, nutmeg and salt. Bubble for 2 minutes, tossing, until the sauce coats the gnocchi.',
      'Off the heat, stir in the parmesan and lemon juice and serve.'
    ],
    tips: [
      'Cook the gnocchi in two batches if the pan is small.',
      'Do not boil the gnocchi first.',
      'Add crumbled goat cheese or bacon for variations.'
    ],
    pair: ['Green salad', 'Garlic bread', 'White wine', 'Roasted tomatoes'],
    store: 'Best eaten straight away.',
    nut: [453, 12, 45, 25, 4, 3, 1030]
  },

  'sourdough-focaccia': {
    d: 'A dimpled, olive oil-rich focaccia made with a sourdough starter and fermented overnight for flavour and an open, airy crumb.',
    meta: 'Sourdough focaccia: a dimpled, olive oil-rich focaccia made with a sourdough starter and fermented overnight. Eight servings, baked for 30 minutes.',
    kw: ['sourdough focaccia', 'sourdough focaccia recipe', 'overnight sourdough focaccia', 'focaccia with sourdough starter', 'olive oil sourdough focaccia'],
    why: 'It needs time but hardly any work, and the time is what does the job. A sourdough focaccia is mixed in 5 minutes in the evening, folded a few times over the next hours, and left in the fridge overnight, and the next day it bakes into a loaf that is chewy, tangy and full of holes. The long, cool fermentation develops flavour that a quick yeast bread cannot match.\n\nThe dough is wet, about 80 per cent hydration, which is why it is mixed with a spoon and folded in the bowl rather than kneaded. Use an active starter, one that has doubled in size within 6 hours of feeding. **Handle the dough with wet hands.** It sticks to dry ones, and flour changes the hydration.\n\nAfter mixing, fold the dough four times at 30-minute intervals, then put it in the fridge overnight in an oiled tray. In the morning, let it warm for 1 hour, dimple it with oiled fingers, and drizzle with olive oil. Dimples, pushed to the base of the tray, keep the bread from puffing up into a dome.\n\nBake at 220°C for 30 minutes, until deeply golden. Brush with more oil as it comes out, and add flaky salt and rosemary.',
    ing: [
      '500 g strong white bread flour',
      '100 g active sourdough starter',
      '10 g salt',
      '420 ml water',
      '6 tbsp olive oil',
      '2 sprigs fresh rosemary',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Mix the flour, starter, salt and water to a wet, shaggy dough. Rest for 30 minutes.',
      'Add 2 tbsp of the oil. Fold the dough over itself four times, 30 minutes apart, wetting your hands each time.',
      'Pour 2 tbsp of the oil into a 30 by 40 cm tray, put in the dough, turn to coat, cover and refrigerate overnight.',
      'Bring to room temperature for 1 hour. Heat the oven to 220°C (200°C fan). Dimple the dough with oiled fingers and drizzle with the remaining oil.',
      'Scatter with the rosemary and flaky salt and bake for 30 minutes until deep golden.'
    ],
    tips: [
      'Use an active starter.',
      'Dimple firmly to the base of the tray.',
      'Be generous with the olive oil.'
    ],
    pair: ['Olive oil for dipping', 'Soup', 'Antipasti', 'Cheese'],
    store: 'Best the day it is baked. Keeps wrapped for 2 days and freezes for 2 months.',
    nut: [293, 7, 37, 13, 2, 4, 1150],
    rest: [510, 'Fermenting overnight']
  },

  'honey-glazed-gammon': {
    d: 'A gammon joint boiled gently until tender, then scored, studded with cloves and glazed with honey and mustard in a hot oven.',
    meta: 'Honey glazed gammon: a gammon joint boiled gently until tender, then scored, studded with cloves and glazed with honey and mustard. Eight servings, cooked for 2 and a half hours.',
    kw: ['honey glazed gammon', 'honey glazed gammon joint', 'christmas gammon', 'honey mustard glazed gammon recipe', 'boiled and baked gammon'],
    why: 'Boil it first, then glaze it: those are the two stages, and each does a job. The boiling cooks the meat gently and removes some of the salt of the cure. The glaze gives the outside a sticky, lacquered crust with the bite of mustard and the sweetness of honey. Together they make the centrepiece of a Christmas Eve table.\n\nA gammon is a cured, uncooked leg of pork, and unlike ham it must be cooked. Check the weight and the cure on the label, and soak overnight in cold water if the packet advises it. Place the joint in a large pot, cover with cold water, add an onion, bay leaves, peppercorns and a splash of cider vinegar, and bring to a boil. **Skim, then simmer gently, allowing 20 minutes per 500 g.** A 1.5 kg joint takes 1 hour 30 minutes.\n\nLift out, cool a little, and peel off the skin with a knife, leaving a thin layer of fat. Score the fat in a diamond pattern and press a clove into each diamond.\n\nMix honey, wholegrain mustard and brown sugar, spread over the fat, and roast at 200°C for 30 minutes, basting twice, until deep amber. Rest for 20 minutes before carving.',
    ing: [
      '1.5 kg unsmoked gammon joint',
      '1 onion, quartered',
      '2 bay leaves',
      '2 g black peppercorns',
      '2 tbsp cider vinegar',
      '2 g cloves',
      '4 tbsp runny honey',
      '2 tbsp wholegrain mustard',
      '2 tbsp soft brown sugar'
    ],
    st: [
      'Put the gammon in a large pot, cover with cold water and add the onion, bay leaves, peppercorns and vinegar. Bring to a boil, skim, then simmer gently for 90 minutes.',
      'Heat the oven to 200°C (180°C fan). Lift out the gammon, cool for 15 minutes, then peel off the skin, leaving a thin layer of fat.',
      'Score the fat in diamonds and press a clove into each. Mix the honey, mustard and sugar and spread over the fat.',
      'Roast on a tray for 30 minutes, basting twice, until glossy and deep amber. Rest for 20 minutes before carving.'
    ],
    tips: [
      'Soak the gammon if the label says so.',
      'Reserve the cooking stock for soup.',
      'Baste often during roasting.'
    ],
    pair: ['Roast potatoes', 'Pineapple', 'Parsley sauce', 'Piccalilli'],
    store: 'Keeps in the fridge for 5 days. Good cold.',
    nut: [298, 38, 14, 10, 1, 13, 2140]
  },

  'cherries-jubilee': {
    d: 'Dark cherries warmed in a sweet sauce of sugar, butter and orange juice, flamed with kirsch and spooned over vanilla ice cream.',
    meta: 'Cherries jubilee: dark cherries warmed in a sweet sauce of sugar, butter and orange juice, flamed with kirsch and spooned over ice cream. Four servings, cooked for 10 minutes.',
    kw: ['cherries jubilee', 'cherries jubilee recipe', 'flambe cherries with ice cream', 'classic cherries jubilee', 'cherry jubilee dessert'],
    why: 'It is a dessert to be finished at the table, with a lid, a lighter and a bit of showmanship. Cherries jubilee is a dish of hot cherries in a sauce, set alight with spirit, and poured over cold vanilla ice cream. The contrast of hot and cold, sweet and tart, is its appeal, and a pan of flames is the cherry on the cake.\n\nThe sauce is simple. Melt the butter and sugar in a wide pan, add the orange juice and zest, and cook for 3 minutes until the sugar dissolves into a syrup. Add the cherries, pitted and halved if fresh, or drained if tinned, and warm them for 3 minutes. They should be hot and glossy but not collapsed.\n\nThe flambé needs care. Warm the kirsch in a ladle or small pan, then pour it over the cherries. Light it with a long match or lighter, tilting the pan away from you. **Keep a lid and a tea towel to hand**, and don\'t pour spirit from the bottle near the flame. The flames die down in 30 seconds, leaving a smoother, cherry-scented sauce.\n\nSpoon over the ice cream immediately and serve.',
    ing: [
      '40 g butter',
      '60 g caster sugar',
      '100 ml orange juice',
      '1 orange, zest only',
      '500 g dark cherries, pitted and halved',
      '4 tbsp kirsch or brandy',
      '1/2 tsp cornflour mixed with 1 tbsp cold water',
      '400 g vanilla ice cream'
    ],
    st: [
      'Melt the butter and sugar in a wide pan. Add the orange juice and zest and simmer for 3 minutes until syrupy.',
      'Add the cherries and warm them for 3 minutes. Stir in the cornflour mixture and cook for 1 minute.',
      'Warm the kirsch in a small pan. Pour it over the cherries and ignite with a long match, standing back. Let the flames die down.',
      'Spoon over the ice cream and serve at once.'
    ],
    tips: [
      'Warm the spirit before igniting.',
      'Keep a lid nearby.',
      'Use frozen cherries if fresh ones are out of season.'
    ],
    pair: ['Vanilla ice cream', 'Shortbread', 'Coffee', 'Sparkling wine'],
    store: 'Best eaten straight away. The cherry sauce keeps in the fridge for 2 days.',
    nut: [455, 5, 66, 19, 4, 57, 80]
  },

  'moules-a-la-creme': {
    d: 'Mussels steamed open in white wine with shallots and garlic, finished with a splash of double cream and a handful of parsley.',
    meta: 'Moules à la crème: mussels steamed open in white wine with shallots and garlic, finished with double cream and parsley. Two servings, cooked for 15 minutes.',
    kw: ['moules a la creme', 'mussels in cream sauce', 'moules a la creme recipe', 'creamy french mussels', 'mussels in white wine and cream'],
    why: 'It is the same bowl of mussels you would eat on a quay in Normandy, and it takes a quarter of an hour. Moules à la crème is a variation on moules marinière with a small addition of cream at the end, and the cream mellows the wine and the sea salt into a sauce that begs for bread.\n\nBuy about 1 kg of mussels for two as a main course. Scrub the shells under cold water, pull off the beards, and discard any that are open and don\'t close when tapped, or any with broken shells. **Cook them the day you buy them.** Mussels are best when they are fresh and alive.\n\nCook shallots and garlic in butter for 3 minutes, until soft. Add a glass of dry white wine and a sprig of thyme and boil for 1 minute. Tip in the mussels, cover tightly, and cook over a high heat for 5 minutes, shaking the pan twice, until the shells have opened.\n\nLift the mussels into bowls, discarding any that stayed shut. Add double cream to the pan juices, bubble for 1 minute, add parsley and pour over. Serve with bread or chips.',
    ing: [
      '1 kg mussels, scrubbed and debearded',
      '30 g butter',
      '2 shallots, about 50 g, finely chopped',
      '2 garlic cloves, crushed',
      '150 ml dry white wine',
      '2 sprigs fresh thyme',
      '100 ml double cream',
      '3 tbsp chopped fresh parsley',
      '1/4 tsp ground black pepper',
      '200 g crusty bread, to serve'
    ],
    st: [
      'Melt the butter in a large pot and cook the shallots and garlic for 3 minutes. Add the wine and thyme and boil for 1 minute.',
      'Tip in the mussels, cover tightly, and cook over a high heat for 5 minutes, shaking the pan twice, until the shells open.',
      'Lift the mussels into warm bowls, discarding any that stayed shut.',
      'Add the cream to the pan juices, bubble for 1 minute, and stir in the parsley and pepper. Pour over the mussels and serve with the bread.'
    ],
    tips: [
      'Use a pot with a tight lid.',
      'Discard any mussels that do not open.',
      'Serve in warm bowls.'
    ],
    pair: ['Crusty bread', 'Chips', 'Muscadet', 'Green salad'],
    store: 'Best eaten straight away. Do not reheat.',
    nut: [983, 71, 78, 43, 4, 9, 2020]
  },

  'truite-aux-amandes': {
    d: 'Trout fillets cooked in browned butter and topped with toasted flaked almonds, lemon juice and parsley.',
    meta: 'Truite aux amandes: trout fillets cooked in browned butter and topped with toasted almonds, lemon juice and parsley. Two servings, cooked for 15 minutes.',
    kw: ['truite aux amandes', 'trout almondine', 'trout with almonds', 'truite aux amandes recipe', 'french trout with brown butter and almonds'],
    why: 'Browned butter is the sauce, and it is made in the pan the trout was cooked in. Truite aux amandes is a French bistro classic: a simple trout fillet dusted in flour, cooked in butter until golden, and topped with the same butter, now nutty and fragrant, with toasted almonds and a squeeze of lemon. The elegance lies in having only five ingredients.\n\nSeason the fillets and dust them with flour on the skin side only. Cook in a mix of butter and oil in a hot pan, skin-side down, for 4 minutes without moving, until crisp. Turn and cook for 1 minute more. Lift out onto warm plates. **The oil prevents the butter from burning during the first stage.**\n\nWipe out any burnt flour from the pan. Add fresh butter and heat until it foams, then turns golden brown and smells of toasted hazelnuts. Add the flaked almonds and cook for 1 minute. Remove from the heat at once, as the butter can burn in seconds.\n\nAdd lemon juice, which will foam, and parsley. Pour over the fish and serve immediately with boiled potatoes and green beans.',
    ing: [
      '2 trout fillets, about 300 g',
      '1/2 tsp salt',
      '2 tbsp plain flour',
      '1 tbsp olive oil',
      '50 g butter, plus 20 g for cooking the fish',
      '30 g flaked almonds',
      '1 lemon, juice of half, the rest in wedges',
      '2 tbsp chopped fresh parsley'
    ],
    st: [
      'Season the trout and dust the skin sides lightly with flour.',
      'Heat the oil and the 20 g butter in a large pan. Cook the fillets skin-side down for 4 minutes until crisp, then turn and cook for 1 minute. Lift onto warm plates.',
      'Wipe out the pan. Melt the 50 g butter until foaming and golden brown, add the almonds and cook for 1 minute.',
      'Take off the heat, add the lemon juice and parsley and pour over the fish. Serve with the lemon wedges.'
    ],
    tips: [
      'Do not move the fish while the skin crisps.',
      'Watch the butter closely.',
      'Serve at once.'
    ],
    pair: ['Boiled new potatoes', 'Green beans', 'White burgundy', 'Lemon wedges'],
    store: 'Best eaten straight away.',
    nut: [566, 35, 12, 42, 3, 1, 670]
  },

  'pain-depices': {
    d: 'A dense French spice loaf of honey, rye flour, ginger, cinnamon and aniseed, even better after a few days wrapped in paper.',
    meta: 'Pain d\'épices: a dense French spice loaf of honey, rye flour, ginger, cinnamon and aniseed. Ten servings, baked for 55 minutes.',
    kw: ['pain d\'epices', 'pain d\'épices', 'french spice bread', 'french honey spice loaf', 'pain d\'epices recipe'],
    why: 'It is a cake that gets better with age, which is unusual and useful. Pain d\'épices, spiced bread, comes from Dijon and Alsace, and it is made with honey, rye flour and a mix of warm spices. When it is baked, it is good. After three days, wrapped in greaseproof paper, it is moist, sticky and much more complex.\n\nHoney is the main ingredient and the main sweetener. A mild honey such as acacia or clover gives a gentle flavour, while chestnut or buckwheat honey are darker and more bitter. Warm it gently with the sugar and milk until just dissolved, not boiling. **Cool the honey mixture to lukewarm before adding the flour.** Hot honey cooks the flour into lumps.\n\nThe flours are rye and plain wheat. Rye gives the loaf its dense, close texture and a faint earthy note. The spices are ground ginger, cinnamon, aniseed, cloves and nutmeg, with the zest of an orange. Bicarbonate of soda and baking powder lift the batter slightly.\n\nPour the batter into a lined loaf tin and bake at 160°C for 55 minutes, until a skewer comes out clean. Cool in the tin, wrap in paper, and leave it for 2 days before slicing thin and spreading with butter.',
    ing: [
      '250 g runny honey',
      '100 ml whole milk',
      '50 g soft light brown sugar',
      '150 g rye flour',
      '100 g plain flour',
      '2 tsp ground ginger',
      '2 tsp ground cinnamon',
      '1 tsp ground aniseed',
      '1/2 tsp ground cloves',
      '1/4 tsp grated nutmeg',
      '1 tsp bicarbonate of soda',
      '1 tsp baking powder',
      '1 orange, zest only',
      '1 egg'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan) and line a 900 g loaf tin.',
      'Warm the honey, milk and sugar gently until the sugar dissolves. Cool to lukewarm.',
      'Mix the rye flour, plain flour, spices, bicarbonate of soda and baking powder. Stir in the honey mixture, orange zest and egg until smooth.',
      'Pour into the tin and bake for 55 minutes until a skewer comes out clean.',
      'Cool in the tin, wrap in greaseproof paper and keep for 2 days before slicing.'
    ],
    tips: [
      'Wait for the flavour to mature.',
      'Cool the honey mixture before adding the flour.',
      'Serve in thin slices with butter or foie gras.'
    ],
    pair: ['Salted butter', 'Soft cheese', 'Hot tea', 'Jam'],
    store: 'Keeps wrapped in paper for 2 weeks.',
    nut: [213, 4, 47, 1, 1, 27, 190]
  },

  'souffle-au-fromage': {
    d: 'A light, risen cheese soufflé of béchamel, egg yolks, gruyère and whisked egg whites, served straight from the oven.',
    meta: 'Soufflé au fromage: a light, risen cheese soufflé of béchamel, egg yolks, gruyère and whisked egg whites. Four servings, baked for 30 minutes.',
    kw: ['souffle au fromage', 'cheese souffle', 'classic french cheese souffle', 'souffle au fromage recipe', 'gruyere souffle'],
    why: 'The soufflé will not wait for the guests, and neither can you. A cheese soufflé is at its peak for about five minutes after it comes out of the oven, tall and golden and trembling, before it begins to settle. Everything about the recipe follows from that rule: have the table laid, the guests seated and the plates warm before the oven door opens.\n\nThere are four stages, none hard. The first is the béchamel, made with butter, flour and milk and cooked until thick, then taken off the heat. The second is egg yolks, beaten in one by one, and a generous amount of grated gruyère with a pinch of nutmeg and cayenne. This base can be made two hours ahead.\n\nThe third stage is the whites. Whisk 5 egg whites with a pinch of salt in a spotless bowl to stiff peaks, not dry. **Fold in a third of the whites to loosen the base, then fold in the rest gently.** Stirring knocks out the air that makes it rise.\n\nPour into a buttered, parmesan-dusted dish, run a thumb round the inside edge so it rises straight, and bake at 190°C for 30 minutes. Do not open the oven before 25 minutes. Serve at once.',
    ing: [
      '40 g butter, plus extra for greasing',
      '2 tbsp grated parmesan, for the dish',
      '40 g plain flour',
      '300 ml whole milk',
      '4 egg yolks',
      '150 g gruyère, grated',
      '1/2 tsp salt',
      '1 pinch cayenne pepper',
      '1 pinch grated nutmeg',
      '5 egg whites',
      '1 pinch salt, for the whites'
    ],
    st: [
      'Heat the oven to 190°C (170°C fan) and put a baking tray on the middle shelf. Butter a 1.5-litre soufflé dish and dust with the parmesan.',
      'Melt the 40 g butter, stir in the flour and cook for 1 minute. Gradually add the milk, whisking, and cook for 5 minutes until very thick. Take off the heat.',
      'Beat in the egg yolks one at a time, then the gruyère, 1/2 tsp salt, cayenne and nutmeg.',
      'Whisk the egg whites with the pinch of salt to stiff peaks. Fold a third into the base, then fold in the rest.',
      'Pour into the dish, run a thumb round the rim, and bake on the hot tray for 30 minutes without opening the door. Serve at once.'
    ],
    tips: [
      'Use a spotless bowl for the whites.',
      'Do not open the oven early.',
      'Serve the moment it comes out.'
    ],
    pair: ['Green salad', 'White burgundy', 'Crusty bread', 'Dressed leaves'],
    store: 'Best eaten at once. It collapses within minutes.',
    nut: [404, 26, 12, 28, 0, 4, 650]
  },

  'ratatouille-tart': {
    d: 'A buttery shortcrust tart filled with thin spirals of aubergine, courgette and tomato over a layer of mustard and caramelised onions.',
    meta: 'Ratatouille tart: a buttery shortcrust tart filled with thin spirals of aubergine, courgette and tomato over mustard and onions. Six servings, baked for 40 minutes.',
    kw: ['ratatouille tart', 'provencal vegetable tart', 'ratatouille tart recipe', 'french vegetable tart with aubergine and courgette', 'rustic ratatouille tart'],
    why: 'It looks like a work of art, and it is a pastry case with vegetables arranged in a circle. The slices of aubergine, courgette and tomato are cut thin and arranged in tight overlapping spirals, and as they bake, the edges brown and the centre softens, so that it looks complicated when it is not.\n\nStart with the pastry, a butter shortcrust that is rolled thin, lined in a 24 cm tart tin, and blind-baked for 15 minutes until the base is dry. **Blind-baking is essential here**, because vegetables release plenty of liquid, and a raw base would stay soggy.\n\nSpread the baked case with a thin layer of Dijon mustard and a spoonful of slowly cooked onions, which add a sharp sweetness. Then slice the vegetables 3 mm thick. A mandoline gives an even slice, but a sharp knife works if you are patient.\n\nArrange the slices in concentric circles, alternating the colours: purple, green, red. Pack them tightly. They shrink as they bake. Brush with olive oil, season, and scatter with thyme. Bake at 190°C for 40 minutes, until the edges char slightly and the vegetables are soft. Cool for 15 minutes.',
    ing: [
      '# Pastry',
      '200 g plain flour',
      '100 g cold butter, diced',
      '1 egg yolk',
      '3 tbsp cold water',
      '1/4 tsp salt',
      '# Filling',
      '2 tbsp olive oil',
      '2 onions, about 300 g, thinly sliced',
      '1 tbsp Dijon mustard',
      '1 aubergine, about 250 g, thinly sliced',
      '2 courgettes, about 300 g, thinly sliced',
      '3 tomatoes, about 300 g, thinly sliced',
      '3 tbsp olive oil, for brushing',
      '1 tsp dried thyme',
      '1/2 tsp salt',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Rub the butter into the flour and salt, then mix in the egg yolk and water. Wrap and chill for 30 minutes.',
      'Heat the oven to 190°C (170°C fan). Roll out the pastry, line a 24 cm tart tin, and blind bake with paper and beans for 15 minutes. Remove the paper and beans and bake for 5 minutes more.',
      'Cook the onions in the 2 tbsp oil over a low heat for 20 minutes until soft and golden.',
      'Spread the mustard over the pastry base, then the onions. Arrange the vegetables in tight overlapping circles, alternating aubergine, courgette and tomato.',
      'Brush with the olive oil, season with the salt, pepper and thyme, and bake for 40 minutes until the vegetables are soft and the edges charred. Cool for 15 minutes.'
    ],
    tips: [
      'Slice the vegetables evenly and thinly.',
      'Pack the circles tightly.',
      'Serve warm or at room temperature.'
    ],
    pair: ['Green salad', 'Goat cheese', 'Rosé wine', 'Olives'],
    store: 'Keeps in the fridge for 3 days. Reheat in a moderate oven.',
    nut: [415, 7, 36, 27, 4, 6, 360]
  },

  'peri-peri-sauce': {
    d: 'A hot, garlicky Portuguese-African sauce of red chillies, lemon, paprika and oil, blended smooth and simmered briefly.',
    meta: 'Peri peri sauce: a hot, garlicky sauce of red chillies, lemon, paprika and oil, blended smooth and simmered briefly. Eight servings, cooked for 15 minutes.',
    kw: ['peri peri sauce', 'homemade peri peri sauce', 'peri peri sauce recipe', 'african bird\'s eye chilli sauce', 'peri peri marinade'],
    why: 'Peri peri means pepper pepper in Swahili, and the sauce came to Portugal from Mozambique and Angola, where the African bird\'s eye chilli is grown. The sauce is simple: chillies, garlic, lemon juice and vinegar, paprika and oil, blended to a bright red paste. It works as a marinade, a basting sauce and a table condiment.\n\nThe chillies set the heat. Fresh African bird\'s eye chillies are used traditionally, but any hot red chillies will do. Use 8 for a medium sauce, more for a fierce one. Remove the stems and, for a milder result, the seeds. **Wear gloves, and avoid touching your eyes.** The oils linger on skin.\n\nRoast the chillies, garlic and a red pepper first. This is optional but worth the extra 10 minutes: roasting mellows the bitterness of the garlic and gives the sauce a smoky, fruity base. Blend with lemon juice, red wine vinegar, smoked paprika, oregano, salt and olive oil until smooth.\n\nSimmer the sauce for 5 minutes in a small pan, which melds the flavours and removes the raw edge. Cool and store in a jar. It tastes better the next day.',
    ing: [
      '8 red bird\'s eye or other hot red chillies',
      '1 red pepper, about 150 g',
      '6 garlic cloves, unpeeled',
      '4 tbsp lemon juice',
      '2 tbsp red wine vinegar',
      '1 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp salt',
      '4 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Roast the chillies, pepper and garlic on a tray for 10 minutes. Peel the garlic and the pepper.',
      'Blend all the ingredients except the oil until smooth. With the motor running, add the oil in a thin stream.',
      'Simmer in a small pan for 5 minutes, stirring. Cool and pour into a clean jar.'
    ],
    tips: [
      'Wear gloves to handle the chillies.',
      'Adjust the chillies to taste.',
      'Use as a marinade for chicken.'
    ],
    pair: ['Grilled chicken', 'Chips', 'Prawns', 'Burgers'],
    store: 'Keeps in a clean jar in the fridge for 2 weeks.',
    nut: [83, 1, 4, 7, 1, 2, 300]
  },

  'beurre-blanc-sauce': {
    d: 'A warm, buttery white sauce made by whisking cold butter into a reduction of shallots, white wine and vinegar, served with fish.',
    meta: 'Beurre blanc sauce: a warm, buttery white sauce made by whisking cold butter into a reduction of shallots, wine and vinegar. Four servings, cooked for 15 minutes.',
    kw: ['beurre blanc', 'beurre blanc sauce', 'beurre blanc recipe', 'french butter sauce for fish', 'classic white butter sauce'],
    why: 'Cold butter, a reduction and a low heat: the whole technique of beurre blanc in three phrases. This is the classic French sauce for poached or grilled fish, from the Loire, and it is an emulsion of butter and acid held together by gentle heat and constant whisking. It tastes of butter, with a pleasant sharpness.\n\nThe reduction is the base. Finely chopped shallots are simmered in white wine and white wine vinegar until nearly all the liquid has gone, leaving only 2 tablespoons of syrupy shallots. **Reduce until the pan looks almost dry.** Too much liquid at this point will thin the sauce and prevent it from thickening.\n\nTake the pan to the lowest heat. Whisk in cold butter, a cube at a time, waiting until each piece has nearly melted before adding the next. The butter does not melt into oil but forms a pale, creamy sauce. If the pan gets too hot, the sauce splits into a greasy mess; lift it off the heat, whisk and try again.\n\nStrain, or leave the shallots in for a rustic look. Season with salt, white pepper and a few drops of lemon juice. Serve at once, as it can\'t be held for more than 15 minutes.',
    ing: [
      '3 shallots, about 75 g, very finely chopped',
      '100 ml dry white wine',
      '3 tbsp white wine vinegar',
      '200 g cold unsalted butter, diced',
      '1/2 tsp salt',
      '1 pinch white pepper',
      '1 tsp lemon juice'
    ],
    st: [
      'Put the shallots, wine and vinegar in a small pan and simmer for 8 minutes until reduced to about 2 tablespoons.',
      'Lower the heat to the minimum. Whisk in the butter a piece at a time, adding the next only when the last has almost melted, until the sauce is pale and creamy.',
      'Season with the salt, pepper and lemon juice. Strain if you like and serve at once.'
    ],
    tips: [
      'Use cold butter.',
      'Keep the heat low and whisk constantly.',
      'Hold the sauce in a warm flask for up to 15 minutes.'
    ],
    pair: ['Poached salmon', 'Grilled sole', 'Scallops', 'Asparagus'],
    store: 'Best eaten straight away. Do not reheat.',
    nut: [389, 1, 4, 41, 1, 2, 300]
  },

  'vegetarian-gravy': {
    d: 'A rich, dark gravy of caramelised onions, mushrooms, soy sauce and yeast extract thickened with flour, made without meat juices.',
    meta: 'Vegetarian gravy: a rich, dark gravy of caramelised onions, mushrooms, soy sauce and yeast extract thickened with flour. Six servings, cooked for 20 minutes.',
    kw: ['vegetarian gravy', 'vegetarian gravy recipe', 'rich vegetarian onion gravy', 'meat free gravy', 'mushroom and onion gravy for roast dinner'],
    why: 'It is possible to make a gravy as rich as the one from the roasting tin without a speck of meat. The dark flavour of a good gravy comes from browned sugar and fermented savour, and plant-based cooking has plenty of both. Caramelised onions bring the sweetness; mushrooms and soy sauce bring the savouriness; and a small spoonful of yeast extract adds the depth that people associate with meat.\n\nStart with a lot of sliced onions, cooked in oil over a medium heat for 15 minutes, stirring often, until they are the colour of dark toffee. This is the key to the whole gravy. **Be patient with the onions.** Pale onions give a pale, thin gravy.\n\nAdd sliced chestnut mushrooms and cook until their liquid has gone, then a spoonful of flour to make a paste. Stir in a splash of red wine, then add a litre of vegetable stock gradually. Add soy sauce, a teaspoon of yeast extract, a few thyme sprigs and a bay leaf, and simmer for 10 minutes.\n\nStrain for a smooth gravy, or leave it rustic. Taste: it should be deep, salty and faintly sweet. Serve hot over roast potatoes, nut roast and all the trimmings.',
    ing: [
      '3 tbsp vegetable oil',
      '3 onions, about 450 g, thinly sliced',
      '200 g chestnut mushrooms, sliced',
      '3 tbsp plain flour',
      '100 ml red wine',
      '750 ml vegetable stock',
      '2 tbsp soy sauce',
      '1 tsp yeast extract',
      '3 sprigs fresh thyme',
      '1 bay leaf',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Heat the oil in a large pan and cook the onions over a medium heat for 15 minutes, stirring, until dark golden brown.',
      'Add the mushrooms and cook for 5 minutes until their liquid has gone.',
      'Stir in the flour and cook for 1 minute. Add the wine and bubble for 2 minutes. Gradually stir in the stock.',
      'Add the soy sauce, yeast extract, thyme, bay leaf and pepper. Simmer for 10 minutes. Remove the thyme and bay and strain, if you like.'
    ],
    tips: [
      'Brown the onions well.',
      'Add the stock slowly to avoid lumps.',
      'Make a day ahead; it improves.'
    ],
    pair: ['Roast potatoes', 'Nut roast', 'Mashed potatoes', 'Yorkshire puddings'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [131, 4, 13, 7, 2, 4, 740]
  },

  'lemon-butter-sauce': {
    d: 'A quick pan sauce of butter, lemon juice and zest, garlic and capers with a splash of white wine, spooned over fish, chicken or vegetables.',
    meta: 'Lemon butter sauce: a quick pan sauce of butter, lemon juice and zest, garlic and capers with white wine. Four servings, cooked in 10 minutes.',
    kw: ['lemon butter sauce', 'lemon butter sauce for fish', 'lemon butter sauce recipe', 'quick lemon caper butter sauce', 'lemon garlic butter pan sauce'],
    why: 'Make it in the pan you cooked the fish in. That is the practical advice and the most flavourful one: the browned bits left behind by seared chicken or fish dissolve into the sauce and give it a depth no fresh pan can match. In 10 minutes, a spoonful of butter, a squeeze of lemon and a splash of wine turn plain protein into a restaurant plate.\n\nRemove the cooked fish and keep it warm. Pour off any excess oil, add the garlic, and cook for 30 seconds. Then pour in the white wine and bubble for 2 minutes, scraping the base, until reduced by half. **Add the lemon juice off the heat,** otherwise the acid turns bitter and the butter splits.\n\nWhisk in cold cubes of butter one at a time over a low heat. The sauce thickens slightly and turns glossy. Add a spoonful of capers, lemon zest and chopped parsley, then taste. It needs salt, a pinch of pepper, and maybe a few extra drops of lemon.\n\nThis is a looser sauce than beurre blanc, simpler and faster. Spoon it straight over pan-fried fish, chicken breast, steamed asparagus or boiled new potatoes.',
    ing: [
      '1 tbsp olive oil',
      '2 garlic cloves, finely chopped',
      '100 ml dry white wine',
      '60 g cold unsalted butter, diced',
      '2 tbsp lemon juice',
      '1 lemon, zest only',
      '1 tbsp capers, drained',
      '2 tbsp chopped fresh parsley',
      '1/4 tsp salt',
      '1/4 tsp ground black pepper'
    ],
    st: [
      'Heat the oil in the pan and cook the garlic for 30 seconds.',
      'Add the wine and bubble for 2 minutes until reduced by half, scraping the base.',
      'Lower the heat and whisk in the butter, a cube at a time, until glossy.',
      'Off the heat, stir in the lemon juice, zest, capers, parsley, salt and pepper. Spoon over the food and serve.'
    ],
    tips: [
      'Add the butter cold, and a cube at a time.',
      'Keep the heat low.',
      'Taste and adjust the lemon.'
    ],
    pair: ['Pan-fried fish', 'Chicken breast', 'Asparagus', 'New potatoes'],
    store: 'Best made fresh. Do not reheat.',
    nut: [160, 1, 3, 16, 1, 1, 200]
  }
};
