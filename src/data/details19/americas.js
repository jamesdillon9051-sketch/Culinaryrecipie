'use strict';

/**
 * Volume nineteen — Mexico and the United States.
 *
 * Twenty-four, and mostly unglamorous. These are the dishes with the highest
 * search volume of anything in this volume and they were missing precisely
 * because they are ordinary: potato salad, coleslaw, egg salad, scrambled
 * eggs, a grilled cheese sandwich. Nobody writes those first, and everybody
 * looks them up.
 *
 * The Mexican side fills real gaps rather than ordinary ones. The site had
 * thirty-nine Mexican recipes and neither fajitas, carne asada, pico de gallo
 * nor a tomatillo salsa — the four things most likely to be wanted by
 * somebody cooking Mexican food at home for the first time.
 *
 * Menudo is here with the tripe intact and three hours of simmering, because
 * shortening it would make it something else.
 */

module.exports = {
  'chicken-fajitas': {
    d: 'Marinated chicken and peppers cooked hard in a dry pan and brought to the table still spitting. The sizzle is the point.',
    meta: 'Chicken thigh marinated in lime, cumin and smoked paprika, seared with peppers and onion and served with warm tortillas.',
    kw: ['chicken fajitas', 'chicken fajitas recipe', 'fajita marinade', 'fajita seasoning', 'sizzling fajitas'],
    why: 'Cook the chicken and the vegetables separately and combine them at the end. Together in one pan they release enough water to stew, and fajitas that have stewed are grey and limp — the whole appeal is char. Get the pan properly hot, work in two batches, and do not stir for the first ninety seconds of either.',
    ing: [
      '700 g chicken thigh, in 1.5 cm strips',
      '3 tbsp lime juice',
      '3 tbsp vegetable oil',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp garlic powder',
      '0.5 tsp cayenne pepper',
      '1.5 tsp fine sea salt',
      '2 red peppers, in thick strips',
      '1 green pepper, in thick strips',
      '2 onions, thickly sliced',
      '8 flour tortillas',
      '1 lime, in wedges',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Mix the lime juice, 2 tbsp of the oil, cumin, paprika, oregano, garlic powder, cayenne and salt.',
      'Turn the chicken through it and leave 20 minutes at room temperature.',
      'Heat a heavy frying pan over the highest heat for 4 minutes, until it smokes.',
      'Add the remaining oil and the peppers and onions and cook 5 minutes, stirring only twice, until blackened at the edges but still firm. Tip onto a plate.',
      'Add the chicken in a single layer and leave it untouched for 90 seconds.',
      'Turn and cook 4 minutes more, until charred and cooked through.',
      'Return the vegetables to the pan and toss for 1 minute.',
      'Warm the tortillas in a dry pan for 20 seconds a side.',
      'Scatter the coriander over the fajita mixture and take the pan straight to the table.',
      'Serve with lime wedges and let people fill their own.'
    ],
    tips: [
      'Two batches. Together they stew.',
      'Do not stir for the first ninety seconds.',
      'The pan must smoke before anything goes in.'
    ],
    pair: ['Guacamole', 'Soured cream', 'Pico de gallo'],
    store: 'Keeps 2 days refrigerated. Reheat in a hot dry pan, never a microwave.',
    nut: [545, 42, 46, 22, 5, 8, 1180]
  },

  'carne-asada': {
    d: 'Skirt steak in a lime and orange marinade, grilled fast over the fiercest heat and sliced across the grain. Twenty minutes of cooking, and it is all in the cut.',
    meta: 'Skirt steak marinated in lime, orange, garlic and cumin, grilled over high heat, rested and sliced across the grain.',
    kw: ['carne asada', 'carne asada recipe', 'carne asada marinade', 'grilled skirt steak', 'mexican grilled beef'],
    why: 'Skirt steak has coarse fibres running in one obvious direction and everything depends on cutting across them. Sliced with the grain it is inedibly chewy no matter how well it was cooked; across, the same steak is tender. Find the direction before you cook, because char makes it harder to see afterwards.',
    ing: [
      '900 g skirt steak',
      '6 tbsp lime juice',
      '4 tbsp orange juice',
      '6 garlic cloves, crushed',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '1 tsp ground black pepper',
      '2 tbsp vegetable oil',
      '1 jalapeño, finely chopped',
      '3 tbsp chopped coriander leaves',
      '2 tsp fine sea salt',
      '1 lime, in wedges'
    ],
    st: [
      'Look at the steak and note which way the fibres run.',
      'Mix the lime and orange juice, garlic, cumin, oregano, pepper, oil, jalapeño and coriander.',
      'Turn the steak through it and marinate 1 hour at room temperature. No longer — the acid starts to cure it.',
      'Lift the steak out, wipe most of the marinade off and season heavily with the salt.',
      'Heat a charcoal grill or a griddle pan until it is too hot to hold a hand over.',
      'Grill 3 minutes on the first side without moving it.',
      'Turn and grill 3 minutes more, for medium rare.',
      'Rest on a warm plate for 8 minutes.',
      'Slice thinly across the grain you identified at the start.',
      'Serve with lime wedges and the resting juices poured over.'
    ],
    tips: [
      'Across the grain, always. Nothing else matters as much.',
      'One hour in the marinade, not overnight.',
      'Rest eight minutes before the knife goes near it.'
    ],
    pair: ['Warm corn tortillas', 'Pico de gallo', 'Grilled spring onions'],
    store: 'Keeps 2 days refrigerated and is very good cold in a torta.',
    nut: [365, 44, 6, 18, 1, 3, 890],
    rest: [60, 'marinating']
  },

  'pico-de-gallo': {
    d: 'Tomato, onion, chilli, coriander and lime, chopped small and salted. Fifteen minutes, no cooking, and it improves everything it touches.',
    meta: 'Fresh Mexican salsa of diced tomato, white onion, jalapeño, coriander and lime juice, salted and drained briefly.',
    kw: ['pico de gallo', 'pico de gallo recipe', 'fresh tomato salsa', 'salsa fresca', 'mexican salsa recipe'],
    why: 'Salt the diced tomato on its own for ten minutes and pour off what collects. Tomato is mostly water and unsalted pico turns into a watery bowl within half an hour — drained, it stays a salsa. Rinse the diced onion under cold water too: it takes the raw sulphurous bite off without losing the crunch.',
    ing: [
      '600 g ripe tomatoes, deseeded and in 5 mm dice',
      '1 tsp fine sea salt',
      '1 white onion, in 5 mm dice',
      '2 jalapeños, finely chopped',
      '40 g coriander leaves, chopped',
      '3 tbsp lime juice',
      '0.25 tsp ground black pepper'
    ],
    st: [
      'Toss the diced tomato with the salt in a sieve set over a bowl.',
      'Leave 10 minutes, then discard the liquid that collects.',
      'Rinse the diced onion under cold running water for 20 seconds and pat dry.',
      'Combine the drained tomato, onion, jalapeños and coriander in a bowl.',
      'Add the lime juice and black pepper and stir.',
      'Taste and add more salt and lime until it is sharp and clearly seasoned.',
      'Rest 15 minutes before serving so the flavours meet.'
    ],
    tips: [
      'Salt and drain the tomato, or it floods.',
      'Rinse the onion to take the raw bite off.',
      'Season harder than feels right — it dilutes on the plate.'
    ],
    pair: ['Tortilla chips', 'Carne asada', 'Grilled fish'],
    store: 'Best within 4 hours. Keeps 2 days refrigerated but softens.',
    nut: [50, 2, 9, 1, 2, 6, 400]
  },

  'salsa-verde-mexican': {
    d: 'Tomatillos and green chilli charred under a grill and blitzed with coriander and lime. Twenty-five minutes and sharper than any red salsa.',
    meta: 'Mexican green salsa of tomatillos, serrano chillies, onion and garlic charred under a grill and blended with coriander and lime.',
    kw: ['salsa verde', 'salsa verde recipe', 'tomatillo salsa', 'green salsa mexican', 'roasted tomatillo salsa'],
    why: 'Char the tomatillos rather than boiling them. Boiled, they are sour and one-dimensional; blistered black in patches under a hot grill, the sugars caramelise and the whole thing gains a smoky sweetness that balances the acid. Blend it only briefly — a salsa blitzed smooth goes pale and foamy, and it should stay a little coarse and dark green.',
    ing: [
      '600 g tomatillos, husked and rinsed',
      '3 serrano or 2 jalapeño chillies',
      '0.5 white onion, in thick wedges',
      '4 garlic cloves, unpeeled',
      '40 g coriander leaves and stalks',
      '2 tbsp lime juice',
      '1.25 tsp fine sea salt',
      '0.5 tsp caster sugar'
    ],
    st: [
      'Heat the grill to its highest setting.',
      'Spread the tomatillos, chillies, onion wedges and unpeeled garlic on a foil-lined tray.',
      'Grill 8 minutes, until blistered and blackened in patches on top.',
      'Turn everything over and grill 5 minutes more.',
      'Squeeze the garlic out of its skins and discard the skins.',
      'Tip everything into a blender with any juices from the tray.',
      'Add the coriander, lime juice, salt and sugar.',
      'Pulse — do not blend smooth — until it is coarse and dark green, about 8 short pulses.',
      'Taste and correct the salt and lime, then cool before serving.'
    ],
    tips: [
      'Char, do not boil.',
      'Pulse, do not blend, or it goes pale and foamy.',
      'Keep the tray juices — they are concentrated flavour.'
    ],
    pair: ['Tortilla chips', 'Chilaquiles', 'Grilled pork'],
    store: 'Keeps 5 days refrigerated and freezes 3 months.',
    nut: [55, 2, 10, 1, 3, 6, 490]
  },

  'chile-relleno': {
    d: 'A poblano stuffed with cheese, dipped in whipped egg and fried, then sat in a thin tomato broth. The hardest easy dish in Mexican cooking.',
    meta: 'Poblano chillies charred and peeled, stuffed with cheese, coated in whipped egg batter and fried, served in a light tomato broth.',
    kw: ['chile relleno', 'chile relleno recipe', 'stuffed poblano peppers', 'mexican stuffed chillies', 'egg battered chillies'],
    why: 'Whip the whites to firm peaks and fold the yolks in rather than beating them together. A whole-egg batter runs off the chilli and fries into a thin skin; a whipped one clings in a thick puffed jacket that is the entire character of the dish. Dust the chilli with cornflour first — the batter needs something to grip on a surface as slippery as a peeled poblano.',
    ing: [
      '4 large poblano chillies',
      '250 g Monterey Jack or mild Cheddar, in thick batons',
      '4 tbsp cornflour, for dusting',
      '4 eggs, separated',
      '0.25 tsp fine sea salt, for the batter',
      '400 ml vegetable oil, for frying',
      '400 g tinned chopped tomatoes',
      '0.5 onion, roughly chopped',
      '2 garlic cloves',
      '250 ml vegetable stock',
      '0.5 tsp dried oregano',
      '1 tsp fine sea salt',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Char the poblanos directly over a flame or under a hot grill for 8 minutes, turning, until blackened all over.',
      'Seal them in a bowl under a plate for 10 minutes, then rub the skins off.',
      'Cut a slit down one side of each and pull the seeds out, keeping the stem and the shape.',
      'Push the cheese batons in and press the slit closed.',
      'Blend the tomatoes, onion and garlic, then simmer with the stock, oregano and salt for 12 minutes. Keep warm.',
      'Whip the egg whites with the batter salt to firm peaks, then fold in the yolks one at a time.',
      'Dust each stuffed chilli all over with cornflour, patting off the excess.',
      'Heat the oil to 175C.',
      'Hold a chilli by the stem, turn it through the batter until thickly coated, and lower it into the oil.',
      'Fry 3 minutes, spooning oil over the top, until puffed and golden. Drain, then serve in a shallow pool of the tomato broth with coriander scattered over.'
    ],
    tips: [
      'Whites to firm peaks, yolks folded in after.',
      'Cornflour dust or the batter slides off.',
      'Spoon hot oil over the top as it fries so the upper side sets.'
    ],
    pair: ['Mexican red rice', 'Refried beans', 'Warm corn tortillas'],
    store: 'Eat immediately. The batter softens within minutes.',
    nut: [590, 26, 22, 45, 4, 8, 1090]
  },

  'sopa-de-fideo': {
    d: 'Thin noodles toasted golden in oil, then simmered in a tomato broth. Thirty minutes, and it is what Mexican children come home to.',
    meta: 'Mexican soup of fideo noodles toasted in oil and simmered in a blended tomato, onion and garlic broth.',
    kw: ['sopa de fideo', 'sopa de fideo recipe', 'mexican noodle soup', 'fideo soup', 'tomato noodle soup'],
    why: 'Toast the noodles in oil until they are the colour of a digestive biscuit before any liquid goes near them. It takes about four minutes of constant stirring and it changes the entire flavour from bland to nutty — untoasted fideo makes a soup that tastes of tomato and nothing else. They go from golden to burnt in about twenty seconds, so do not walk away.',
    ing: [
      '200 g fideo or vermicelli noodles, broken',
      '3 tbsp vegetable oil',
      '400 g tinned chopped tomatoes',
      '0.5 onion, roughly chopped',
      '2 garlic cloves',
      '1.2 litres vegetable stock',
      '1 tsp fine sea salt',
      '0.5 tsp ground cumin',
      '1 bay leaf',
      '3 tbsp chopped coriander leaves',
      '1 lime, in wedges',
      '1 avocado, sliced'
    ],
    st: [
      'Blend the tomatoes, onion and garlic to a smooth purée and set aside.',
      'Heat the oil in a heavy pan over a medium heat.',
      'Add the broken noodles and stir constantly for 4 minutes, until they are golden brown all over. Watch them closely.',
      'Pour in the tomato purée — it will spit — and cook 4 minutes, until it darkens.',
      'Add the stock, salt, cumin and bay leaf and bring to a simmer.',
      'Simmer 8 minutes, until the noodles are tender.',
      'Fish out the bay leaf and taste for salt.',
      'Stir in half the coriander.',
      'Serve with the remaining coriander, avocado slices and lime wedges.'
    ],
    tips: [
      'Toast to biscuit-brown and do not look away.',
      'Stand back when the tomato hits the hot oil.',
      'Lime at the table is not optional.'
    ],
    pair: ['Warm bolillo rolls', 'Avocado', 'Crumbled queso fresco'],
    store: 'Keeps 2 days refrigerated. The noodles swell; add stock when reheating.',
    nut: [340, 8, 52, 12, 5, 7, 890]
  },

  'arroz-con-leche': {
    d: 'Rice simmered slowly in milk with a cinnamon stick and a strip of lime peel. Forty-five minutes, mostly unattended.',
    meta: 'Mexican rice pudding simmered on the hob with whole milk, condensed milk, cinnamon and lime peel, served warm or cold.',
    kw: ['arroz con leche', 'arroz con leche recipe', 'mexican rice pudding', 'cinnamon rice pudding', 'creamy rice pudding'],
    why: 'Cook the rice in water with the cinnamon and lime peel first, until the water has gone, and only then add the milk. Rice started in milk takes twice as long and scorches on the bottom before the grains are through, because milk conducts heat badly and its sugars catch. This way the grain is already soft when the milk arrives and it only has to thicken.',
    ing: [
      '200 g short-grain pudding rice',
      '500 ml water',
      '1 cinnamon stick',
      '2 strips lime peel, pared with no pith',
      '1 litre whole milk',
      '200 g condensed milk',
      '60 g caster sugar',
      '0.5 tsp fine sea salt',
      '1 tsp vanilla extract',
      '50 g raisins',
      '1 tsp ground cinnamon, for dusting'
    ],
    st: [
      'Rinse the rice, then simmer it with the water, cinnamon stick and lime peel for 12 minutes, until the water has been absorbed.',
      'Pour in the milk and bring to a bare simmer.',
      'Cook 25 minutes on the lowest heat, stirring every 3 minutes and scraping the bottom.',
      'Stir in the condensed milk, sugar and salt.',
      'Cook 8 minutes more, until it coats the back of a spoon but is still loose — it thickens a great deal as it cools.',
      'Take off the heat and stir in the vanilla and raisins.',
      'Fish out the cinnamon stick and lime peel.',
      'Rest 10 minutes, then serve warm dusted with ground cinnamon, or chill and serve cold.'
    ],
    tips: [
      'Water first, milk second.',
      'Scrape the bottom every few minutes or it catches.',
      'Take it off looser than you want it — it sets as it cools.'
    ],
    pair: ['Café de olla', 'Churros', 'A dusting of cinnamon'],
    store: 'Keeps 4 days refrigerated. Loosen with milk when reheating.',
    nut: [385, 11, 64, 10, 1, 44, 240]
  },

  'menudo': {
    d: 'Tripe simmered three hours with hominy in a red chilli broth. Mexico\'s Sunday morning cure, and there is no fast version.',
    meta: 'Mexican tripe and hominy soup in a guajillo and ancho chilli broth, simmered three hours and served with lime, onion and oregano.',
    kw: ['menudo', 'menudo recipe', 'mexican tripe soup', 'menudo rojo', 'hominy soup'],
    why: 'Scrub and blanch the tripe twice, discarding the water each time, before it goes anywhere near the chillies. Tripe carries a strong smell that will otherwise dominate everything, and two changes of water takes it out completely. After that it is only time: three hours at a bare simmer turns it from rubber to something that yields between the teeth.',
    ing: [
      '1.5 kg honeycomb tripe, cleaned',
      '2 tbsp fine sea salt, for scrubbing',
      '1 onion, halved',
      '1 whole garlic bulb, halved across',
      '3 bay leaves',
      '4 litres water',
      '6 guajillo chillies, stemmed and deseeded',
      '3 ancho chillies, stemmed and deseeded',
      '1 tbsp dried oregano',
      '1 tbsp ground cumin',
      '800 g tinned hominy, drained',
      '2 tsp fine sea salt',
      '1 white onion, finely diced',
      '3 limes, in wedges',
      '2 tbsp dried oregano, for the table',
      '2 tbsp chilli flakes, for the table'
    ],
    st: [
      'Scrub the tripe with the scrubbing salt, rinse, and cut into 4 cm squares.',
      'Cover with cold water, bring to the boil, boil 10 minutes, then drain and rinse.',
      'Repeat the blanching once more with fresh water and drain again.',
      'Put the tripe in a large pot with the 4 litres of water, the halved onion, garlic bulb and bay leaves.',
      'Simmer gently for 2 hours, skimming occasionally.',
      'Meanwhile toast the guajillo and ancho chillies in a dry pan for 40 seconds a side, then soak them in hot water for 20 minutes.',
      'Blend the soaked chillies with a ladleful of their soaking water, the oregano and cumin, then strain into the pot.',
      'Add the hominy and the 2 tsp of salt and simmer 1 hour more, until the tripe is tender.',
      'Taste and correct the salt.',
      'Serve with diced onion, lime wedges, oregano and chilli flakes for people to add themselves.'
    ],
    tips: [
      'Two blanches, both discarded. That is what takes the smell out.',
      'Strain the chilli purée or the broth is gritty.',
      'The table condiments are part of the dish, not a garnish.'
    ],
    pair: ['Warm corn tortillas', 'Bolillo rolls', 'Cold beer'],
    store: 'Better the next day. Keeps 4 days refrigerated, freezes 3 months.',
    nut: [385, 38, 32, 12, 5, 4, 1290]
  },

  'pot-roast': {
    d: 'A whole chuck joint browned and cooked three and a half hours with carrots and potatoes until it falls into pieces under a fork.',
    meta: 'Beef chuck browned and slow-braised with onion, carrot, potato and stock until fork-tender, with a thickened pan gravy.',
    kw: ['pot roast', 'pot roast recipe', 'beef chuck roast', 'slow cooked beef', 'sunday pot roast'],
    why: 'Chuck, and only chuck. It is the cut with enough connective tissue to turn to gelatin over three hours, which is what makes a pot roast sticky and rich rather than dry — a leaner joint like topside will be stringy at the same temperature for the same time and there is nothing to be done about it. Add the vegetables in the last hour or they dissolve.',
    ing: [
      '1.8 kg beef chuck, in one piece',
      '2 tsp fine sea salt',
      '1 tsp ground black pepper',
      '3 tbsp vegetable oil',
      '2 onions, thickly sliced',
      '4 garlic cloves, crushed',
      '3 tbsp tomato purée',
      '250 ml red wine',
      '750 ml beef stock',
      '3 sprigs thyme',
      '2 bay leaves',
      '4 carrots, in 5 cm chunks',
      '700 g small potatoes, halved',
      '2 tbsp cornflour mixed with 4 tbsp cold water'
    ],
    st: [
      'Heat the oven to 150C.',
      'Season the beef all over with the salt and pepper.',
      'Heat the oil in a casserole and brown the joint hard on every side, about 10 minutes in total. Lift out.',
      'Add the onions and cook 6 minutes, until softening and browning at the edges.',
      'Stir in the garlic and tomato purée and cook 2 minutes.',
      'Pour in the wine and let it bubble for 3 minutes, scraping the base.',
      'Return the beef, add the stock, thyme and bay, and bring to a simmer.',
      'Cover and cook in the oven for 2 hours 30 minutes.',
      'Add the carrots and potatoes and cook a further 1 hour, uncovered for the last 20 minutes.',
      'Lift the meat and vegetables out, stir the cornflour slurry into the bubbling liquid to thicken, and serve the gravy over the pulled beef.'
    ],
    tips: [
      'Chuck. A leaner joint will be stringy however long you give it.',
      'Vegetables in for the last hour only.',
      'Uncover for the last twenty minutes to reduce the gravy.'
    ],
    pair: ['Buttered greens', 'Horseradish', 'Crusty bread for the gravy'],
    store: 'Better the next day. Keeps 3 days refrigerated, freezes 3 months.',
    nut: [620, 52, 38, 27, 5, 8, 1080]
  },

  'sloppy-joe-mix': {
    d: 'Minced beef in a sweet-sharp tomato sauce, spooned onto soft buns. Thirty minutes, one pan, and no packet mix.',
    meta: 'Minced beef simmered with onion, pepper, tomato, brown sugar and Worcestershire into a thick sandwich filling.',
    kw: ['sloppy joe', 'sloppy joe recipe', 'sloppy joe skillet', 'homemade sloppy joes', 'ground beef sandwich'],
    why: 'Brown the mince properly before any liquid goes in — spread it out, leave it four minutes, and only then break it up. Mince stirred from the moment it hits the pan releases water and simmers grey, and no amount of sauce afterwards puts back the flavour that browning would have made. The sauce wants to be thick enough to sit on a bun, not run off it.',
    ing: [
      '600 g minced beef',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '1 green pepper, finely chopped',
      '3 garlic cloves, crushed',
      '3 tbsp tomato purée',
      '400 g tinned chopped tomatoes',
      '2 tbsp dark brown sugar',
      '2 tbsp Worcestershire sauce',
      '1 tbsp yellow mustard',
      '1 tbsp cider vinegar',
      '1 tsp smoked paprika',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '4 soft burger buns'
    ],
    st: [
      'Heat the oil in a wide frying pan over a high heat.',
      'Add the mince in a single layer and leave it 4 minutes without touching it.',
      'Break it up and brown 3 minutes more, then tip off any excess fat.',
      'Add the onion and pepper and cook 5 minutes.',
      'Stir in the garlic and tomato purée and cook 2 minutes.',
      'Add the tomatoes, sugar, Worcestershire, mustard, vinegar, paprika, salt and pepper.',
      'Simmer 10 minutes, stirring, until thick enough to hold its shape on a spoon.',
      'Taste and add more vinegar if it is too sweet.',
      'Toast the buns cut-side down in a dry pan for 1 minute.',
      'Spoon the mixture onto the buns and serve at once.'
    ],
    tips: [
      'Four minutes untouched before you break the mince up.',
      'Thick enough to hold on a spoon, or it soaks the bun.',
      'Vinegar at the end balances the sugar.'
    ],
    pair: ['Coleslaw', 'Dill pickles', 'Crisps'],
    store: 'The filling keeps 3 days refrigerated and freezes 2 months.',
    nut: [610, 36, 52, 28, 5, 18, 1240]
  },

  'potato-salad': {
    d: 'Waxy potatoes dressed while still warm with mayonnaise, mustard and egg. Forty minutes, and it wants an hour in the fridge afterwards.',
    meta: 'Waxy potatoes boiled, dressed warm with vinegar then mayonnaise, mustard, egg, celery and chives.',
    kw: ['potato salad', 'potato salad recipe', 'creamy potato salad', 'american potato salad', 'best potato salad'],
    why: 'Splash the vinegar over the potatoes while they are still hot, before the mayonnaise. Warm potato absorbs it; cold potato does not, and a salad dressed only when cool tastes of mayonnaise sitting on top of bland potato. Use a waxy variety — floury ones break down into a mash the moment you fold them.',
    ing: [
      '1 kg waxy potatoes such as Charlotte, in 3 cm chunks',
      '1 tbsp fine sea salt, for the water',
      '3 tbsp cider vinegar',
      '4 eggs',
      '180 g mayonnaise',
      '2 tbsp yellow mustard',
      '2 celery sticks, finely diced',
      '4 spring onions, finely sliced',
      '3 tbsp chopped chives',
      '2 tbsp chopped dill pickles',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '0.5 tsp smoked paprika'
    ],
    st: [
      'Put the potatoes in cold salted water, bring to the boil and simmer 12 minutes, until a knife goes in with slight resistance.',
      'Boil the eggs in a separate pan for 9 minutes, then cool under cold water, peel and chop.',
      'Drain the potatoes and tip them into a wide bowl.',
      'Splash the vinegar over while they are still steaming and turn them gently. Leave 10 minutes.',
      'Mix the mayonnaise, mustard, salt and pepper.',
      'Fold the dressing through the warm potatoes.',
      'Fold in the celery, spring onions, pickles and most of the chopped egg.',
      'Refrigerate at least 1 hour.',
      'Scatter the remaining egg, the chives and the paprika over before serving.'
    ],
    tips: [
      'Vinegar on hot potatoes. That is the step everyone skips.',
      'Waxy, not floury.',
      'An hour in the fridge — it needs to settle.'
    ],
    pair: ['Barbecued chicken', 'Pulled pork', 'Corn on the cob'],
    store: 'Keeps 3 days refrigerated. Do not freeze.',
    nut: [420, 9, 36, 27, 4, 5, 780],
    rest: [60, 'chilling']
  },

  'coleslaw': {
    d: 'Cabbage and carrot salted, drained and dressed. Fifteen minutes of work and it is the draining that makes it good.',
    meta: 'Shredded white cabbage and carrot salted and drained, then dressed with mayonnaise, cider vinegar, mustard and sugar.',
    kw: ['coleslaw', 'coleslaw recipe', 'creamy coleslaw', 'homemade coleslaw', 'cabbage salad'],
    why: 'Salt the shredded cabbage and let it drain for thirty minutes, then squeeze it. Cabbage is about ninety per cent water and undrained coleslaw turns into a pool within the hour — this is why shop-bought slaw sits in liquid. Squeezed, it stays crisp for days and the dressing coats instead of being diluted.',
    ing: [
      '600 g white cabbage, very finely shredded',
      '2 carrots, coarsely grated',
      '1 tbsp fine sea salt, for drawing water',
      '150 g mayonnaise',
      '2 tbsp soured cream',
      '2 tbsp cider vinegar',
      '1 tbsp Dijon mustard',
      '1 tbsp caster sugar',
      '0.5 small onion, very finely chopped',
      '0.5 tsp celery salt',
      '0.5 tsp ground black pepper',
      '2 tbsp chopped chives'
    ],
    st: [
      'Toss the shredded cabbage and grated carrot with the drawing salt in a colander.',
      'Leave over a bowl for 30 minutes.',
      'Rinse briefly under cold water, then squeeze the vegetables hard in a clean cloth until no more liquid comes out.',
      'Whisk the mayonnaise, soured cream, vinegar, mustard, sugar, celery salt and pepper.',
      'Fold the dressing through the squeezed vegetables with the onion.',
      'Taste and correct the vinegar and sugar — it should be sharp before it is sweet.',
      'Refrigerate 30 minutes.',
      'Fold in the chives just before serving.'
    ],
    tips: [
      'Salt, drain and squeeze. That is the whole difference.',
      'Sharp before sweet.',
      'Chives at the end so they stay green.'
    ],
    pair: ['Pulled pork', 'Fried chicken', 'A hot dog'],
    store: 'Keeps 4 days refrigerated and stays crisp because it was drained.',
    nut: [235, 2, 12, 20, 3, 9, 720],
    rest: [60, 'drawing water from the cabbage']
  },

  'egg-salad': {
    d: 'Hard-boiled eggs chopped rough with mayonnaise, mustard and chives. Twenty minutes, and the texture depends entirely on the knife.',
    meta: 'Hard-boiled eggs chopped and folded with mayonnaise, Dijon mustard, chives and celery for sandwiches.',
    kw: ['egg salad', 'egg salad recipe', 'egg mayonnaise', 'egg salad sandwich', 'best egg salad'],
    why: 'Chop the eggs by hand and leave the pieces uneven. Mashed with a fork it becomes a paste and tastes of mayonnaise; chopped, you get whole pieces of white and crumbled yolk, and the yolk is what thickens the dressing while the white gives it something to bite. Nine minutes gives a yolk that is set but still bright yellow rather than grey.',
    ing: [
      '8 eggs',
      '5 tbsp mayonnaise',
      '1 tbsp Dijon mustard',
      '1 celery stick, very finely diced',
      '3 tbsp chopped chives',
      '2 spring onions, finely sliced',
      '1 tsp lemon juice',
      '0.75 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '0.25 tsp smoked paprika',
      '8 slices bread'
    ],
    st: [
      'Lower the eggs into boiling water and cook 9 minutes.',
      'Drain and cool under cold running water for 3 minutes.',
      'Peel and chop by hand into rough pieces — not a fine mash.',
      'Mix the mayonnaise, mustard, lemon juice, salt and pepper in a bowl.',
      'Fold in the chopped egg, celery, chives and spring onions.',
      'Taste and correct the salt and lemon.',
      'Chill 15 minutes.',
      'Spread thickly on bread and dust with the paprika.'
    ],
    tips: [
      'Chop, never mash.',
      'Nine minutes for a yellow yolk, not a grey one.',
      'Cool them properly or the shells will not come off cleanly.'
    ],
    pair: ['Soft white bread', 'Watercress', 'A cup of tea'],
    store: 'Keeps 2 days refrigerated, covered. Do not freeze.',
    nut: [415, 21, 30, 24, 3, 4, 830]
  },

  'tuna-salad': {
    d: 'Tinned tuna with celery, red onion and mayonnaise. Ten minutes, and the celery is not optional.',
    meta: 'Tinned tuna flaked and mixed with mayonnaise, celery, red onion, lemon and dill for sandwiches or salad.',
    kw: ['tuna salad', 'tuna salad recipe', 'tuna mayo', 'tuna sandwich filling', 'canned tuna recipe'],
    why: 'Drain the tuna thoroughly and press it in the tin lid — every spoonful of oil or brine left in makes the finished salad looser and blander, and you cannot correct it by adding more mayonnaise. Celery diced small is what stops the whole thing being one soft texture, and it is the difference between a good tuna salad and a paste.',
    ing: [
      '3 tins tuna in spring water, about 400 g drained',
      '5 tbsp mayonnaise',
      '2 celery sticks, finely diced',
      '0.5 red onion, very finely chopped',
      '2 tbsp chopped dill',
      '2 tbsp chopped flat-leaf parsley',
      '1 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '2 tbsp capers, chopped',
      '0.5 tsp fine sea salt',
      '0.5 tsp ground black pepper'
    ],
    st: [
      'Open the tins and press the lid down hard to drain every drop of liquid.',
      'Tip the tuna into a bowl and flake it with a fork, leaving some larger pieces.',
      'Add the celery, red onion, dill, parsley and capers.',
      'Mix the mayonnaise, lemon juice, mustard, salt and pepper separately.',
      'Fold the dressing through the tuna.',
      'Taste and correct the lemon and salt.',
      'Rest 10 minutes before serving so the onion softens slightly.'
    ],
    tips: [
      'Press the tin lid down hard. Every drop matters.',
      'Leave some flakes large.',
      'Capers do the same job as pickle, with more edge.'
    ],
    pair: ['Sourdough toast', 'Little gem lettuce', 'Sliced tomato'],
    store: 'Keeps 2 days refrigerated. Do not freeze.',
    nut: [285, 30, 4, 17, 1, 2, 780]
  },

  'chicken-salad': {
    d: 'Poached or leftover chicken with grapes, celery and toasted pecans in a light mayonnaise dressing. Fifteen minutes if the chicken is already cooked.',
    meta: 'Shredded cooked chicken folded with mayonnaise, yoghurt, celery, grapes and toasted pecans, seasoned with lemon and tarragon.',
    kw: ['chicken salad', 'chicken salad recipe', 'creamy chicken salad', 'chicken salad sandwich', 'leftover chicken recipe'],
    why: 'Shred the chicken along the grain rather than dicing it. Shreds hold dressing in their fibres and read as chicken; neat cubes shed it and taste like something from a packet. Half yoghurt and half mayonnaise keeps the dressing light enough that you can still taste the meat, which a full-mayonnaise version buries.',
    ing: [
      '600 g cooked chicken, shredded',
      '4 tbsp mayonnaise',
      '4 tbsp thick Greek yoghurt',
      '2 celery sticks, finely diced',
      '150 g seedless red grapes, halved',
      '60 g pecans, toasted and roughly chopped',
      '3 spring onions, finely sliced',
      '2 tbsp chopped tarragon',
      '1 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper'
    ],
    st: [
      'Toast the pecans in a dry pan for 3 minutes, until they smell nutty. Cool and chop.',
      'Shred the chicken along the grain with two forks or your fingers.',
      'Whisk the mayonnaise, yoghurt, lemon juice, mustard, salt and pepper.',
      'Fold the dressing through the chicken.',
      'Fold in the celery, grapes, spring onions and tarragon.',
      'Add the pecans last and fold once, so they stay in pieces.',
      'Taste and correct the lemon and salt.',
      'Chill 20 minutes before serving.'
    ],
    tips: [
      'Shred along the grain, do not dice.',
      'Half yoghurt keeps it light enough to taste the chicken.',
      'Pecans in last or they go soft.'
    ],
    pair: ['Croissants', 'Little gem lettuce cups', 'Iced tea'],
    store: 'Keeps 2 days refrigerated. The pecans soften after a day.',
    nut: [415, 38, 12, 24, 2, 8, 790]
  },

  'fudge-brownies': {
    d: 'Dense, dark and barely set in the middle, with a papery crackled top. Forty minutes, and the whole thing turns on when you take them out.',
    meta: 'Fudge brownies made with melted dark chocolate and butter, whisked eggs and sugar for a crackled top, baked until barely set.',
    kw: ['fudge brownies', 'brownie recipe', 'fudgy brownies', 'chewy brownies', 'crackle top brownies'],
    why: 'The papery crackled top comes from dissolving the sugar into the eggs before the chocolate goes in — whisk them for four minutes until pale and thick, and a thin meringue-like layer forms on top during baking. Take the tin out when the middle still wobbles; brownies carry on cooking in the tin for another ten minutes and one baked until a skewer comes out clean is a chocolate cake.',
    ing: [
      '200 g dark chocolate, 70 per cent, chopped',
      '175 g unsalted butter',
      '3 eggs',
      '250 g caster sugar',
      '1 tsp vanilla extract',
      '90 g plain flour',
      '30 g cocoa powder',
      '0.5 tsp fine sea salt',
      '100 g dark chocolate chunks'
    ],
    st: [
      'Heat the oven to 180C and line a 20 cm square tin with baking paper.',
      'Melt the chopped chocolate and butter together in a bowl over simmering water, then cool 5 minutes.',
      'Whisk the eggs, sugar and vanilla with an electric whisk for 4 minutes, until pale, thick and doubled.',
      'Pour the cooled chocolate mixture down the side of the bowl and fold it in gently.',
      'Sift the flour, cocoa and salt over and fold until just combined, with no dry streaks.',
      'Fold in the chocolate chunks.',
      'Scrape into the tin and level the top.',
      'Bake 25 minutes. The edges should be set and the middle should still wobble when you shake the tin.',
      'Cool completely in the tin, at least 2 hours.',
      'Lift out by the paper and cut into 12 with a hot dry knife.'
    ],
    tips: [
      'Four minutes of whisking makes the crackled top.',
      'Out while the middle wobbles.',
      'Cool completely in the tin or they fall apart.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Strong coffee'],
    store: 'Keeps 5 days in a tin and freezes 3 months. Better on the second day.',
    nut: [385, 5, 44, 22, 3, 33, 130],
    rest: [120, 'cooling in the tin']
  },

  'fluffy-pancakes': {
    d: 'Thick American pancakes that rise in the pan. Twenty-five minutes, and the batter must be lumpy.',
    meta: 'Thick American buttermilk pancakes raised with baking powder and soda, rested briefly and cooked on a medium griddle.',
    kw: ['fluffy pancakes', 'pancake recipe', 'american pancakes', 'buttermilk pancakes', 'fluffy pancake batter'],
    why: 'Stop mixing while the batter still has lumps in it. Every stir past the point where the flour is just wet develops gluten, and gluten makes pancakes chewy and flat — the lumps hydrate on their own during the rest and disappear in the pan. A rested batter also gives the raising agents a head start, which is where the height comes from.',
    ing: [
      '250 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '0.5 tsp bicarbonate of soda',
      '0.5 tsp fine sea salt',
      '350 ml buttermilk',
      '2 eggs',
      '50 g unsalted butter, melted and cooled',
      '1 tsp vanilla extract',
      '2 tbsp unsalted butter, for the pan',
      '4 tbsp maple syrup'
    ],
    st: [
      'Whisk the flour, sugar, baking powder, bicarbonate of soda and salt together.',
      'Beat the buttermilk, eggs, melted butter and vanilla in a separate bowl.',
      'Pour the wet into the dry and fold about 10 times only. The batter should still be visibly lumpy.',
      'Rest 10 minutes without stirring again.',
      'Heat a heavy frying pan over a medium heat — not high — and wipe it with a little butter.',
      'Drop in 3 tbsp of batter per pancake, well apart.',
      'Cook 2 minutes 30 seconds, until bubbles rise and burst across the surface and the edges look dry.',
      'Flip once and cook 90 seconds more.',
      'Keep warm in a low oven while you cook the rest.',
      'Serve stacked with butter and maple syrup.'
    ],
    tips: [
      'Lumpy batter. Ten folds, then stop.',
      'Medium heat — high heat browns them before they rise.',
      'One flip only.'
    ],
    pair: ['Streaky bacon', 'Blueberries', 'Strong coffee'],
    store: 'Best fresh. Cooked pancakes freeze 1 month; reheat in a toaster.',
    nut: [455, 12, 62, 18, 2, 20, 780]
  },

  'grilled-cheese': {
    d: 'Bread buttered on the outside, cheese in the middle, cooked slowly until the crust is deep gold and the inside has gone. Thirteen minutes.',
    meta: 'A grilled cheese sandwich with mayonnaise and butter on the outside, two cheeses inside, cooked slowly over a medium-low heat.',
    kw: ['grilled cheese', 'grilled cheese sandwich', 'best grilled cheese', 'cheese toastie recipe', 'melted cheese sandwich'],
    why: 'Cook it far more slowly than instinct suggests — medium-low, four minutes a side. High heat browns the bread in ninety seconds and leaves the cheese solid in the middle, which is the single most common failure. Mayonnaise on the outside as well as butter sounds wrong and browns more evenly than butter alone, because it contains egg and oil rather than water.',
    ing: [
      '4 slices white sourdough or good white bread',
      '2 tbsp unsalted butter, softened',
      '1 tbsp mayonnaise',
      '80 g mature Cheddar, grated',
      '80 g Gruyère or Monterey Jack, grated',
      '0.25 tsp Dijon mustard',
      '0.25 tsp ground black pepper'
    ],
    st: [
      'Mix the two grated cheeses together with the mustard and pepper.',
      'Spread the butter thinly over one face of each slice, then the mayonnaise over the same face.',
      'Turn two slices butter-side down and pile the cheese on, right to the edges.',
      'Top with the other slices, butter-side up.',
      'Heat a heavy frying pan over a medium-low heat for 2 minutes.',
      'Lay the sandwiches in and press lightly with a spatula.',
      'Cook 4 minutes, until deep gold underneath.',
      'Flip and cook 4 minutes more, pressing once.',
      'Rest 1 minute on a board, then cut on the diagonal.'
    ],
    tips: [
      'Medium-low and four minutes a side.',
      'Mayonnaise as well as butter browns more evenly.',
      'Cheese to the edges, so you get some crisped against the pan.'
    ],
    pair: ['Tomato soup', 'Dill pickles', 'Hot English mustard'],
    store: 'None. This is a dish that lasts ten minutes.',
    nut: [590, 23, 42, 37, 2, 4, 1020]
  },

  'scrambled-eggs': {
    d: 'Eggs cooked slowly with butter until they set in soft curds. Eleven minutes and there is nothing else in them.',
    meta: 'Eggs cooked over a low heat with butter, stirred constantly into soft curds and taken off the heat while still glossy.',
    kw: ['scrambled eggs', 'perfect scrambled eggs', 'creamy scrambled eggs', 'how to scramble eggs', 'soft scrambled eggs'],
    why: 'Take the pan off the heat while the eggs still look slightly underdone and glossy. They carry on cooking in their own heat for another thirty seconds, and eggs that looked right in the pan are dry on the plate. Salt at the end, not the beginning: salt added early breaks down the proteins and the eggs weep water as they cook.',
    ing: [
      '4 eggs',
      '25 g unsalted butter',
      '1 tbsp double cream',
      '0.5 tsp fine sea salt',
      '0.25 tsp ground black pepper',
      '1 tbsp chopped chives',
      '2 slices buttered toast'
    ],
    st: [
      'Beat the eggs thoroughly with a fork until the whites and yolks are completely combined. Do not salt them.',
      'Melt the butter in a non-stick pan over a low heat.',
      'Pour the eggs in and leave them 30 seconds.',
      'Stir slowly and continuously with a spatula, scraping the base, for 4 minutes.',
      'Keep the heat low. If the pan gets ahead of you, lift it off for 10 seconds and keep stirring.',
      'When the eggs are set in soft curds but still glossy and slightly loose, take the pan off the heat.',
      'Stir in the cream, salt and pepper.',
      'Pile onto the buttered toast, scatter the chives over and eat immediately.'
    ],
    tips: [
      'Low heat, constant stirring, and lift the pan when it runs ahead.',
      'Off the heat while still glossy.',
      'Salt at the end.'
    ],
    pair: ['Buttered sourdough toast', 'Smoked salmon', 'Black coffee'],
    store: 'None. Eat within a minute of leaving the pan.',
    nut: [385, 20, 16, 27, 1, 2, 720]
  },

  'banana-pancakes': {
    d: 'Ripe banana mashed into pancake batter, which makes them sweeter and denser than plain ones. Twenty-five minutes.',
    meta: 'American pancakes with mashed ripe banana folded into the batter, cooked on a medium griddle and served with banana slices.',
    kw: ['banana pancakes', 'banana pancake recipe', 'easy banana pancakes', 'ripe banana recipe', 'banana breakfast'],
    why: 'The bananas must be properly overripe — skins going black, flesh almost liquid. An underripe banana is starchy rather than sweet and it makes the batter heavy without adding any flavour, so people end up adding sugar to compensate. Mash it thoroughly before it meets the flour, because lumps of banana in the batter turn to wet pockets in the finished pancake.',
    ing: [
      '3 very ripe bananas, 2 mashed and 1 sliced',
      '220 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '0.5 tsp bicarbonate of soda',
      '0.5 tsp fine sea salt',
      '0.5 tsp ground cinnamon',
      '300 ml buttermilk',
      '2 eggs',
      '50 g unsalted butter, melted and cooled',
      '1 tsp vanilla extract',
      '2 tbsp unsalted butter, for the pan',
      '4 tbsp maple syrup'
    ],
    st: [
      'Mash the two bananas thoroughly with a fork until almost smooth.',
      'Whisk the flour, sugar, baking powder, bicarbonate of soda, salt and cinnamon together.',
      'Beat the buttermilk, eggs, melted butter and vanilla, then stir in the mashed banana.',
      'Pour the wet into the dry and fold about 12 times. The batter should still be lumpy.',
      'Rest 10 minutes.',
      'Heat a heavy pan over a medium heat and wipe with a little butter.',
      'Drop in 3 tbsp of batter per pancake.',
      'Cook 3 minutes, until bubbles rise and burst and the edges dry.',
      'Flip once and cook 2 minutes more.',
      'Serve stacked with the sliced banana and maple syrup.'
    ],
    tips: [
      'Blackening bananas, not yellow ones.',
      'Mash smooth before the flour goes in.',
      'They colour faster than plain pancakes because of the sugar — keep the heat moderate.'
    ],
    pair: ['Greek yoghurt', 'Toasted walnuts', 'Strong coffee'],
    store: 'Best fresh. Freeze 1 month and reheat in a toaster.',
    nut: [485, 12, 72, 17, 3, 26, 760]
  },

  'corn-chowder': {
    d: 'Sweetcorn simmered in a thin broth with potato and finished with cream. Forty-five minutes, and the cobs go in the pot.',
    meta: 'A creamy sweetcorn and potato chowder built on a stock made from the stripped corn cobs, finished with cream and chives.',
    kw: ['corn chowder', 'corn chowder recipe', 'sweetcorn soup', 'creamy corn chowder', 'summer corn soup'],
    why: 'Simmer the stripped cobs in the stock for twenty minutes and then throw them away. The cobs hold a great deal of starch and sweetness that the kernels do not, and it is the single cheapest thing you can do to make a corn chowder taste of corn rather than of cream. Blend a ladleful and stir it back in — that thickens it without flour.',
    ing: [
      '6 corn cobs, kernels stripped and cobs kept',
      '1.2 litres vegetable stock',
      '40 g unsalted butter',
      '1 onion, finely diced',
      '2 celery sticks, finely diced',
      '3 garlic cloves, crushed',
      '2 potatoes, in 1.5 cm dice',
      '2 sprigs thyme',
      '1 bay leaf',
      '150 ml double cream',
      '1.25 tsp fine sea salt',
      '0.5 tsp ground white pepper',
      '3 tbsp chopped chives'
    ],
    st: [
      'Snap the stripped cobs in half and simmer them in the stock for 20 minutes.',
      'Lift the cobs out and discard them, keeping the stock.',
      'Melt the butter in a heavy pan and cook the onion and celery for 8 minutes, until soft but not coloured.',
      'Add the garlic and cook 1 minute.',
      'Add the potato, thyme, bay leaf and the corn stock and simmer 12 minutes, until the potato is tender.',
      'Add the corn kernels and simmer 5 minutes.',
      'Fish out the thyme and bay.',
      'Blend one ladleful of the soup until smooth and stir it back into the pot.',
      'Stir in the cream, salt and white pepper and warm through without boiling.',
      'Serve with the chives scattered over.'
    ],
    tips: [
      'The cobs make the stock. Do not skip it.',
      'Blend a ladleful back in rather than adding flour.',
      'Do not boil once the cream is in.'
    ],
    pair: ['Crusty bread', 'Crisp bacon', 'A green salad'],
    store: 'Keeps 3 days refrigerated. Freezes poorly once the cream is in.',
    nut: [420, 9, 48, 22, 6, 12, 890]
  },

  'loaded-baked-potato': {
    d: 'A potato baked until the skin is crisp and the inside floury, split and filled with butter, cheese, bacon and soured cream.',
    meta: 'Baking potatoes rubbed with oil and salt, baked at high heat until the skin crisps, split and loaded with cheese, bacon and soured cream.',
    kw: ['loaded baked potato', 'baked potato recipe', 'jacket potato', 'crispy skin baked potato', 'loaded potato toppings'],
    why: 'Rub the skin with oil and coarse salt and bake it directly on the oven shelf with nothing wrapped round it. Foil traps steam and gives you a soft, damp skin, which is the opposite of the point — dry heat all round is what makes the skin crackle. Prick it first, and split it the moment it comes out so the steam escapes and the inside stays floury rather than turning waxy.',
    ing: [
      '4 large baking potatoes, about 300 g each',
      '2 tbsp vegetable oil',
      '2 tsp coarse sea salt',
      '60 g unsalted butter',
      '150 g mature Cheddar, grated',
      '150 ml soured cream',
      '6 spring onions, finely sliced',
      '0.5 tsp ground black pepper',
      '2 tbsp chopped chives'
    ],
    st: [
      'Heat the oven to 220C.',
      'Scrub the potatoes and dry them thoroughly.',
      'Prick each one 6 times with a fork.',
      'Rub all over with the oil and then the coarse salt.',
      'Put them straight onto the oven shelf, with a tray underneath to catch drips. Do not wrap them.',
      'Bake 75 minutes, until the skin is dry and crisp and a skewer slides through with no resistance.',
      'Split each one open along the top the moment it comes out and let the steam escape.',
      'Fluff the inside with a fork and add a knob of butter, letting it melt in.',
      'Pile in the cheese, then the soured cream, spring onions, pepper and chives.',
      'Serve at once, while the skin is still crisp.'
    ],
    tips: [
      'No foil. Ever.',
      'Straight onto the shelf, so hot air reaches all sides.',
      'Split immediately or the inside goes waxy.'
    ],
    pair: ['Baked beans', 'Coleslaw', 'A green salad'],
    store: 'Best fresh. Reheat in a 200C oven for 15 minutes to bring the skin back.',
    nut: [620, 19, 62, 34, 7, 6, 1080]
  },

  'chicken-caesar-wrap': {
    d: 'Griddled chicken, cos lettuce and parmesan rolled in a warm tortilla with a proper anchovy dressing. Under half an hour.',
    meta: 'Griddled chicken, cos lettuce and parmesan in a tortilla wrap with a Caesar dressing of anchovy, garlic, lemon and mayonnaise.',
    kw: ['chicken caesar wrap', 'caesar wrap recipe', 'chicken caesar salad wrap', 'caesar dressing recipe', 'chicken lunch wrap'],
    why: 'Dress the lettuce and roll the wrap at the last possible moment. Cos leaves collapse within about ten minutes of meeting a creamy dressing and a wrap made in advance is a wet parcel. The anchovies are not optional and they do not taste of fish in the finished dressing — they are where the savoury depth comes from, and a Caesar without them tastes like mayonnaise.',
    ing: [
      '4 chicken breasts, about 180 g each',
      '1 tbsp olive oil',
      '1 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '6 anchovy fillets in oil',
      '2 garlic cloves',
      '5 tbsp mayonnaise',
      '2 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tsp Worcestershire sauce',
      '50 g Parmesan, finely grated, plus 30 g in shavings',
      '2 cos lettuces, shredded',
      '4 large flour tortillas'
    ],
    st: [
      'Bat the chicken breasts to an even thickness and rub with the oil, salt and pepper.',
      'Heat a griddle pan until it smokes and cook the chicken 6 minutes a side, until charred and cooked through.',
      'Rest the chicken 5 minutes, then slice thickly.',
      'Pound the anchovies and garlic to a paste in a mortar.',
      'Whisk the paste with the mayonnaise, lemon juice, mustard, Worcestershire and grated Parmesan.',
      'Warm the tortillas in a dry pan for 20 seconds a side.',
      'Toss the shredded lettuce with just enough dressing to coat it.',
      'Lay the lettuce down the middle of each tortilla, add the sliced chicken and the Parmesan shavings.',
      'Fold the bottom up, then roll tightly from one side.',
      'Cut each in half on the diagonal and serve straight away.'
    ],
    tips: [
      'Dress and roll at the last minute.',
      'Anchovies are the dressing, not an option.',
      'Warm the tortilla or it cracks as you roll.'
    ],
    pair: ['Salt and vinegar crisps', 'A wedge of lemon', 'Iced tea'],
    store: 'Assemble to order. The dressing keeps 4 days refrigerated.',
    nut: [690, 52, 46, 34, 4, 4, 1420]
  },

  'beef-tacos': {
    d: 'Minced beef cooked with real spices rather than a sachet, in corn tortillas with whatever you have. Twenty-five minutes.',
    meta: 'Minced beef browned and simmered with cumin, chilli and oregano into a taco filling, served in warm corn tortillas.',
    kw: ['beef tacos', 'ground beef tacos', 'taco meat recipe', 'homemade taco seasoning', 'easy beef tacos'],
    why: 'Bloom the ground spices in the hot fat for thirty seconds before any liquid goes in. Ground spice added to a wet pan tastes dusty and stays on the surface of the meat; heated in fat first, it dissolves and coats everything. A splash of water at the end and two minutes of simmering makes the difference between dry crumbles and a filling that holds together in the tortilla.',
    ing: [
      '600 g minced beef',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '4 garlic cloves, crushed',
      '2 tsp ground cumin',
      '2 tsp smoked paprika',
      '1 tsp dried oregano',
      '1 tsp ground coriander',
      '0.5 tsp cayenne pepper',
      '2 tbsp tomato purée',
      '150 ml water',
      '1.25 tsp fine sea salt',
      '12 corn tortillas',
      '0.25 white cabbage, finely shredded',
      '1 lime, in wedges',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil in a wide frying pan over a high heat.',
      'Add the mince in a single layer and leave 4 minutes without stirring.',
      'Break it up and brown 3 minutes more.',
      'Add the onion and cook 4 minutes.',
      'Stir in the garlic and cook 30 seconds.',
      'Add the cumin, paprika, oregano, coriander and cayenne and stir in the hot fat for 30 seconds.',
      'Stir in the tomato purée and cook 1 minute.',
      'Add the water and salt and simmer 2 minutes, until it clings rather than runs.',
      'Warm the tortillas in a dry pan for 20 seconds a side.',
      'Fill with the beef, top with shredded cabbage and coriander, and serve with lime wedges.'
    ],
    tips: [
      'Bloom the spices in fat for thirty seconds.',
      'Four minutes untouched to brown the mince.',
      'A splash of water at the end so the filling holds together.'
    ],
    pair: ['Pico de gallo', 'Salsa verde', 'Soured cream'],
    store: 'The filling keeps 3 days refrigerated and freezes 2 months.',
    nut: [545, 34, 48, 24, 6, 5, 1080]
  }
};
