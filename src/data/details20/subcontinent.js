'use strict';

/**
 * Volume twenty — India, Pakistan and Sri Lanka.
 *
 * Twenty-four. India had seventy-six entries after volume nineteen and still
 * almost nothing from two whole categories: the mithai counter and the drinks
 * trolley. No rasgulla, no mysore pak, no kaju katli, no besan ladoo — the
 * sweets an Indian household actually buys and makes for festivals. And not a
 * single Indian drink: no thandai, no aam panna, no jaljeera, no chaas, no
 * filter coffee, which between them are what people drink from March to
 * September across most of the country.
 *
 * The chaat is the other gap. Samosa chaat, aloo chaat, dahi vada, dabeli and
 * masala pav are street food with enormous search volume and none were here.
 *
 * Pakistan had four entries and Sri Lanka four. What is added is small but it
 * is the headline: karahi and keema, pol sambol and a coconut dhal.
 */

module.exports = {
  'chicken-karahi': {
    d: 'Chicken cooked hard in a wok with tomato, ginger and green chilli, and almost nothing else. No onion, no cream, no long list.',
    meta: 'Pakistani chicken karahi cooked fast in a wok with tomato, ginger, garlic and green chilli, finished with ginger julienne.',
    kw: ['chicken karahi', 'chicken karahi recipe', 'karahi gosht', 'pakistani chicken curry', 'restaurant style karahi'],
    why: 'There is no onion in a real karahi and adding one changes the dish completely — it turns a sharp, tomato-led curry into a sweet, thick gravy. The tomatoes go in whole or halved and are pressed against the side of the pan as they collapse, so the skins can be lifted out. Everything happens over a high heat in about thirty-five minutes; a karahi that has simmered gently is a different, duller thing.',
    ing: [
      '1 kg bone-in chicken pieces',
      '6 tbsp ghee or vegetable oil',
      '700 g ripe tomatoes, halved',
      '2 tbsp ginger and garlic paste',
      '6 green chillies, 4 slit and 2 sliced',
      '1 tbsp coriander seeds, coarsely crushed',
      '1 tsp cumin seeds, coarsely crushed',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp garam masala',
      '1.5 tsp fine sea salt',
      '5 cm ginger, cut into fine julienne',
      '3 tbsp chopped coriander leaves',
      '1 tbsp dried fenugreek leaves (kasuri methi)'
    ],
    st: [
      'Heat the ghee in a wok or karahi over a high heat until it shimmers.',
      'Add the chicken and fry 8 minutes, turning, until browned at the edges.',
      'Stir in the ginger and garlic paste and the slit chillies and cook 2 minutes.',
      'Add the crushed coriander and cumin, the chilli powder and turmeric and cook 30 seconds.',
      'Add the halved tomatoes cut-side down and the salt.',
      'Cover and cook 12 minutes, until the tomatoes collapse.',
      'Uncover, press the tomatoes against the side of the pan and lift out the loose skins.',
      'Cook uncovered over a high heat for 10 minutes, until the oil separates and pools red at the edge.',
      'Stir in the garam masala and crush the fenugreek leaves between your palms into the pan.',
      'Scatter the ginger julienne, sliced chillies and coriander over and serve from the pan.'
    ],
    tips: [
      'No onion. That is what makes it a karahi.',
      'Lift the tomato skins out as they loosen.',
      'High heat throughout — it is a fried curry, not a stewed one.'
    ],
    pair: ['Tandoori roti', 'Sliced onion with lemon', 'Salted lassi'],
    store: 'Keeps 3 days refrigerated. The gravy thickens; loosen with a splash of water.',
    nut: [545, 46, 14, 34, 4, 8, 1080]
  },

  'aloo-keema': {
    d: 'Minced lamb and potato cooked down together until the mince is dry and catching. A Pakistani weeknight standard.',
    meta: 'Pakistani minced lamb cooked with potato, onion, tomato and whole spice until the mince browns and the potato is tender.',
    kw: ['aloo keema', 'aloo keema recipe', 'keema aloo', 'pakistani mince curry', 'lamb mince and potato'],
    why: 'Cook the mince past the point where it looks done. It releases a great deal of water first, and while that water is in the pan the meat is boiling rather than browning — keep going until the pan is dry and the mince starts to stick and catch, and the whole dish changes flavour. That takes about twelve minutes and it is the step people cut short.',
    ing: [
      '600 g minced lamb',
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '2 tbsp ginger and garlic paste',
      '3 tomatoes, chopped',
      '3 potatoes, in 2.5 cm dice',
      '3 green chillies, slit',
      '1 tsp cumin seeds',
      '2 tsp ground coriander',
      '1 tsp Kashmiri chilli powder',
      '0.5 tsp ground turmeric',
      '1 tsp garam masala',
      '1.5 tsp fine sea salt',
      '300 ml water',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil in a heavy pan and fry the cumin seeds for 30 seconds.',
      'Add the onions and fry 10 minutes, until deep golden.',
      'Stir in the ginger and garlic paste and the chillies and cook 2 minutes.',
      'Add the mince and cook 12 minutes, breaking it up, until the pan is dry and the meat starts to catch.',
      'Add the ground coriander, chilli powder and turmeric and cook 30 seconds.',
      'Add the tomatoes and salt and cook 6 minutes, until the oil separates.',
      'Add the potatoes and the water and bring to a simmer.',
      'Cover and cook 20 minutes, until the potato is tender and most of the liquid has gone.',
      'Uncover and cook 3 minutes to dry it out.',
      'Stir in the garam masala, rest 5 minutes and scatter the coriander over.'
    ],
    tips: [
      'Twelve minutes on the mince, until it catches.',
      'Dice the potato big enough to hold its shape.',
      'It should be dry, not saucy.'
    ],
    pair: ['Chapati', 'Plain yoghurt', 'Sliced onion and lemon'],
    store: 'Keeps 3 days refrigerated and freezes 2 months.',
    nut: [520, 32, 34, 28, 5, 7, 1020]
  },

  'pol-sambol': {
    d: 'Fresh coconut pounded with dried chilli, red onion and lime until it turns coral pink. Fifteen minutes and no cooking.',
    meta: 'Sri Lankan coconut sambol of grated coconut pounded with dried chilli flakes, red onion, Maldive fish and lime.',
    kw: ['pol sambol', 'pol sambol recipe', 'coconut sambol', 'sri lankan coconut relish', 'sri lankan sambol'],
    why: 'Pound it rather than blending it. A blender chops and aerates and gives you damp pink confetti; a mortar bruises the onion and chilli into the coconut so the oils release and the colour goes right through. If you must use a machine, pulse four times and no more. Add the lime at the very end — early, it starts to cook the onion and the texture softens.',
    ing: [
      '200 g fresh or frozen grated coconut, thawed',
      '3 tbsp Kashmiri chilli flakes',
      '1 red onion, roughly chopped',
      '2 tbsp Maldive fish flakes, optional',
      '1.5 tsp fine sea salt',
      '2 tbsp lime juice',
      '10 curry leaves, finely chopped',
      '0.5 tsp ground black pepper'
    ],
    st: [
      'Pound the chilli flakes, red onion and salt to a rough paste in a large mortar.',
      'Add the Maldive fish, if using, and pound it in.',
      'Add the coconut a handful at a time and pound and grind it against the sides.',
      'Keep working until the whole mixture turns an even coral pink, about 4 minutes.',
      'Work in the curry leaves and black pepper.',
      'Squeeze the lime juice in and stir it through.',
      'Taste and correct the salt and lime — it should be sharp, hot and salty at once.',
      'Serve at room temperature, pressed into a mound.'
    ],
    tips: [
      'Pound, do not blend.',
      'Keep going until the colour is even — that is the sign it is done.',
      'Lime last.'
    ],
    pair: ['Egg hoppers', 'Rice and curry', 'String hoppers'],
    store: 'Keeps 3 days refrigerated. The colour dulls but the flavour holds.',
    nut: [175, 4, 10, 14, 5, 3, 620]
  },

  'dhal-curry': {
    d: 'Red lentils simmered with coconut milk, turmeric and a curry leaf tempering. The dish that appears at every Sri Lankan meal.',
    meta: 'Sri Lankan red lentil curry cooked with coconut milk, turmeric, pandan and curry leaves, finished with a mustard seed tempering.',
    kw: ['sri lankan dhal curry', 'parippu curry', 'coconut dhal', 'sri lankan lentil curry', 'red lentil coconut curry'],
    why: 'The tempering goes on at the end and is poured over rather than stirred in during cooking. Mustard seeds, curry leaves, dried chilli and onion fried in oil for thirty seconds carry aromatics that are destroyed by twenty minutes of simmering — added last, they sit on the surface and you get them in the first spoonful. Coconut milk goes in at the end too, and must not boil hard or it splits.',
    ing: [
      '250 g red lentils',
      '600 ml water',
      '1 tsp ground turmeric',
      '1 piece pandan leaf, or 1 bay leaf',
      '2.5 cm cinnamon stick',
      '1 tsp fine sea salt',
      '200 ml coconut milk',
      '3 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 tsp cumin seeds',
      '1 onion, finely sliced',
      '20 curry leaves',
      '3 dried red chillies, broken',
      '3 garlic cloves, sliced',
      '0.5 tsp fine sea salt, for the tempering'
    ],
    st: [
      'Rinse the lentils until the water runs clear.',
      'Simmer them with the water, turmeric, pandan and cinnamon for 18 minutes, until collapsed and soft.',
      'Stir in the salt and the coconut milk and warm through for 3 minutes without letting it boil hard.',
      'Fish out the pandan and cinnamon.',
      'Heat the coconut oil in a small pan and pop the mustard seeds for 30 seconds.',
      'Add the cumin seeds, curry leaves and dried chillies and fry 15 seconds.',
      'Add the onion and garlic and fry 4 minutes, until the onion is golden at the edges.',
      'Stir in the tempering salt.',
      'Pour the whole tempering over the dhal and do not stir it in.',
      'Bring it to the table with the tempering still sitting on the surface.'
    ],
    tips: [
      'Temper last and pour it over.',
      'Coconut milk warmed, never boiled.',
      'A pandan leaf if you can get one — it is the Sri Lankan note.'
    ],
    pair: ['Steamed rice', 'Pol sambol', 'Papadums'],
    store: 'Keeps 3 days refrigerated. It thickens; loosen with water and re-temper.',
    nut: [385, 17, 42, 17, 9, 4, 720]
  },

  'paneer-tikka-masala': {
    d: 'Paneer charred under a grill first, then folded into a tomato gravy. The char is what separates it from every other paneer curry.',
    meta: 'Paneer marinated in spiced yoghurt and charred under a grill, then simmered in a tomato, cashew and cream gravy.',
    kw: ['paneer tikka masala', 'paneer tikka masala recipe', 'grilled paneer curry', 'restaurant paneer tikka', 'paneer masala gravy'],
    why: 'Grill the marinated paneer and peppers before they go into the sauce, and let them take real colour — black at the corners, not merely warm. That char is the entire difference between paneer tikka masala and paneer butter masala, and it survives the gravy. Paneer added raw makes a perfectly good curry that is simply a different dish.',
    ing: [
      '400 g paneer, in 3 cm cubes',
      '1 red pepper, in 3 cm squares',
      '1 onion, in petals',
      '150 g thick natural yoghurt',
      '1 tbsp ginger and garlic paste',
      '1.5 tsp Kashmiri chilli powder',
      '1 tsp garam masala',
      '0.5 tsp ground turmeric',
      '1 tbsp gram flour',
      '1 tbsp lemon juice',
      '1.5 tsp fine sea salt',
      '3 tbsp vegetable oil',
      '2 onions, finely chopped',
      '400 g tinned chopped tomatoes',
      '50 g cashew nuts, soaked in hot water 15 minutes',
      '1 tsp ground coriander',
      '100 ml double cream',
      '1 tsp dried fenugreek leaves',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Toast the gram flour in a dry pan for 2 minutes and cool.',
      'Whisk the yoghurt with the toasted gram flour, ginger and garlic paste, 1 tsp of the chilli powder, the garam masala, turmeric, lemon juice and 0.5 tsp of the salt.',
      'Fold in the paneer, pepper and onion petals and marinate 20 minutes.',
      'Heat the grill to its highest setting and spread the marinated pieces on a foil-lined tray.',
      'Grill 10 minutes, turning once, until charred black at the corners. Set aside.',
      'Heat the oil in a pan and fry the chopped onions for 10 minutes, until deep golden.',
      'Add the ground coriander and remaining chilli powder and cook 30 seconds.',
      'Add the tomatoes and remaining salt and cook 8 minutes, until the oil separates.',
      'Blend the drained cashews with 100 ml water and stir into the pan. Simmer 5 minutes.',
      'Fold in the grilled paneer and vegetables, take off the heat, stir in the cream and crushed fenugreek, and scatter the coriander over.'
    ],
    tips: [
      'Char it properly. Black corners, not golden.',
      'Grill the peppers and onion with the paneer, not separately.',
      'Cream off the heat.'
    ],
    pair: ['Garlic naan', 'Jeera rice', 'Onion salad'],
    store: 'Keeps 3 days refrigerated. The char softens but the flavour stays.',
    nut: [545, 22, 26, 40, 4, 12, 940]
  },

  'dal-palak': {
    d: 'Yellow lentils cooked soft and finished with spinach and a garlic tempering. Forty-five minutes and it is a whole meal with rice.',
    meta: 'Yellow moong or toor dal simmered soft, folded with spinach and finished with a garlic, cumin and chilli tempering.',
    kw: ['dal palak', 'dal palak recipe', 'spinach dal', 'palak dal', 'lentil spinach curry'],
    why: 'The spinach goes in for the last three minutes only. Cooked longer it turns olive and loses both its colour and any distinct flavour, leaving a dal that is merely green. Chop it coarsely rather than finely so it stays identifiable, and stir it through the hot dal off the direct heat if you want the brightest colour.',
    ing: [
      '200 g toor dal or yellow moong dal',
      '900 ml water',
      '0.5 tsp ground turmeric',
      '250 g spinach, coarsely chopped',
      '1.25 tsp fine sea salt',
      '3 tbsp vegetable oil, or ghee if you are not keeping it vegan',
      '1 tsp cumin seeds',
      '1 pinch asafoetida',
      '6 garlic cloves, sliced',
      '2 dried red chillies, broken',
      '2 green chillies, slit',
      '1 onion, finely chopped',
      '2 tomatoes, chopped',
      '1 tsp Kashmiri chilli powder',
      '1 tbsp lemon juice',
      '2 tbsp chopped coriander leaves'
    ],
    st: [
      'Rinse the dal and simmer it with the water and turmeric for 25 minutes, until completely soft. Whisk it smooth.',
      'Heat 2 tbsp of the oil in a separate pan and fry the cumin seeds and asafoetida for 30 seconds.',
      'Add the onion and cook 6 minutes, until golden.',
      'Add the green chillies and tomatoes and cook 5 minutes, until pulpy.',
      'Stir this into the cooked dal with the salt and simmer 5 minutes.',
      'Fold in the spinach and cook 3 minutes only, until just wilted.',
      'Heat the remaining oil in a small pan and fry the sliced garlic and dried chillies for 45 seconds, until the garlic is pale gold.',
      'Stir in the chilli powder off the heat.',
      'Pour the tempering over the dal.',
      'Stir in the lemon juice, scatter the coriander over and serve.'
    ],
    tips: [
      'Three minutes for the spinach.',
      'Whisk the cooked dal smooth before anything else goes in.',
      'Garlic to pale gold, not brown.'
    ],
    pair: ['Steamed rice', 'Chapati', 'Mango pickle'],
    store: 'Keeps 3 days refrigerated. The spinach dulls; the flavour improves.',
    nut: [340, 16, 38, 14, 9, 5, 720]
  },

  'veg-kolhapuri': {
    d: 'Mixed vegetables in a dark, fiercely hot masala of roasted coconut and dried chilli from western Maharashtra.',
    meta: 'Maharashtrian mixed vegetable curry in a dark roasted masala of dried coconut, sesame and Kashmiri and byadgi chillies.',
    kw: ['veg kolhapuri', 'veg kolhapuri recipe', 'kolhapuri masala', 'spicy mixed vegetable curry', 'maharashtrian curry'],
    why: 'The masala is dry-roasted almost to the point of burning, and that is deliberate — the darkness is where the colour and the smoky depth come from. Roast the dried coconut last and separately, because it goes from nutty to acrid faster than anything else in the pan. Grind it all while still warm and it comes out as a paste rather than a powder.',
    ing: [
      '400 g mixed carrot, cauliflower, French beans and potato, in 2 cm pieces',
      '100 g frozen peas',
      '4 tbsp desiccated coconut',
      '2 tbsp sesame seeds',
      '1 tbsp coriander seeds',
      '1 tsp cumin seeds',
      '6 dried Kashmiri chillies',
      '4 cloves',
      '2.5 cm cinnamon stick',
      '1 tsp black peppercorns',
      '4 tbsp vegetable oil',
      '2 onions, sliced',
      '2 tbsp ginger and garlic paste',
      '3 tomatoes, chopped',
      '0.5 tsp ground turmeric',
      '1.5 tsp fine sea salt',
      '400 ml water',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Toast the coriander seeds, cumin, chillies, cloves, cinnamon and peppercorns in a dry pan for 2 minutes.',
      'Add the sesame seeds and toast 45 seconds more.',
      'Tip those out, then toast the desiccated coconut alone for 90 seconds, until deep brown but not black.',
      'Grind everything together while still warm, adding 3 tbsp water, to a dark paste.',
      'Heat 2 tbsp of the oil and fry one sliced onion for 8 minutes, until browned. Blend it into the masala paste.',
      'Heat the remaining oil and fry the second onion for 6 minutes.',
      'Add the ginger and garlic paste and cook 2 minutes, then the tomatoes, turmeric and salt for 6 minutes.',
      'Stir in the ground masala and fry 4 minutes, until the oil separates.',
      'Add the vegetables and the water, cover, and simmer 18 minutes.',
      'Add the peas, simmer 3 minutes uncovered, and scatter the coriander over.'
    ],
    tips: [
      'Roast the coconut separately and last.',
      'Grind the masala warm, with a little water.',
      'It is meant to be dark and very hot.'
    ],
    pair: ['Bhakri or chapati', 'Steamed rice', 'Plain yoghurt'],
    store: 'Keeps 3 days refrigerated and improves overnight.',
    nut: [385, 9, 34, 25, 9, 10, 890]
  },

  'tawa-pulao': {
    d: 'Cooked rice fried on a griddle with pav bhaji masala and vegetables. Twenty minutes and unmistakably Bombay.',
    meta: 'Mumbai street rice tossed on a hot griddle with pav bhaji masala, butter, peas, peppers and lemon.',
    kw: ['tawa pulao', 'tawa pulao recipe', 'mumbai tawa pulao', 'pav bhaji masala rice', 'street style pulao'],
    why: 'Use rice that is cold and slightly dry, and cook it on the widest pan you own over a high flame. The dish is defined by the contact between rice and hot metal — a deep saucepan steams it instead, and the whole point is the slightly scorched grains and the butter catching. Mash a little of the vegetables into the masala so the colour goes through the rice.',
    ing: [
      '600 g cooked basmati rice, cold',
      '60 g unsalted butter',
      '1 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, finely chopped',
      '2 tbsp ginger and garlic paste',
      '2 tomatoes, finely chopped',
      '1 green pepper, finely diced',
      '1 carrot, finely diced and parboiled',
      '100 g frozen peas',
      '2 tbsp pav bhaji masala',
      '1 tsp Kashmiri chilli powder',
      '1.25 tsp fine sea salt',
      '2 green chillies, finely chopped',
      '3 tbsp chopped coriander leaves',
      '1 lemon, in wedges'
    ],
    st: [
      'Break up the cold rice with wet fingers so no lumps remain.',
      'Heat the widest frying pan you have with the oil and half the butter over a high heat.',
      'Fry the cumin seeds for 20 seconds, then the onion for 4 minutes.',
      'Add the ginger and garlic paste and the green chillies and cook 1 minute.',
      'Add the tomatoes and cook 4 minutes, pressing them down, until pulpy.',
      'Add the pav bhaji masala and chilli powder and cook 1 minute.',
      'Add the pepper, carrot and peas and cook 3 minutes, mashing about a third of them into the masala.',
      'Tip in the rice and the salt and toss for 4 minutes, pressing it against the metal and lifting.',
      'Dot the remaining butter over and toss once more.',
      'Scatter the coriander over and serve with lemon wedges.'
    ],
    tips: [
      'The widest pan you own, on the highest heat.',
      'Mash a third of the vegetables so the colour spreads.',
      'Butter twice — some at the start, some at the end.'
    ],
    pair: ['Pav bhaji', 'Cucumber and onion salad', 'Masala chaas'],
    store: 'Keeps 2 days refrigerated. Reheat in a hot pan, not a microwave.',
    nut: [445, 9, 66, 17, 6, 7, 890]
  },

  'masala-pav': {
    d: 'Soft rolls split and griddled in butter with a spiced onion and tomato mixture pressed into them. Twenty-five minutes.',
    meta: 'Mumbai masala pav of soft rolls griddled in butter with a pav bhaji masala onion and tomato mixture pressed in.',
    kw: ['masala pav', 'masala pav recipe', 'mumbai masala pav', 'butter pav recipe', 'street food pav'],
    why: 'Press the split rolls face down into the masala on the griddle and hold them there for a minute. The bread takes up the butter and the spice at the cut face and stays soft in the middle — dabbing masala on afterwards gives you a topping rather than a masala pav. Use soft white rolls, not crusty ones: the whole thing depends on the bread giving way.',
    ing: [
      '8 soft white rolls (pav)',
      '80 g unsalted butter',
      '2 onions, finely chopped',
      '3 tomatoes, finely chopped',
      '1 green pepper, finely chopped',
      '2 tbsp ginger and garlic paste',
      '2 tbsp pav bhaji masala',
      '1 tsp Kashmiri chilli powder',
      '1 tsp fine sea salt',
      '2 green chillies, finely chopped',
      '3 tbsp chopped coriander leaves',
      '1 lemon, in wedges'
    ],
    st: [
      'Melt half the butter on a wide griddle or frying pan over a medium heat.',
      'Fry the onions for 5 minutes, until soft.',
      'Add the ginger and garlic paste and green chillies and cook 1 minute.',
      'Add the green pepper and cook 3 minutes.',
      'Add the tomatoes and salt and cook 5 minutes, pressing them down to a pulp.',
      'Stir in the pav bhaji masala and chilli powder and cook 2 minutes.',
      'Push the masala to one side of the pan and add the rest of the butter to the clear space.',
      'Split the rolls almost through, press them cut-side down into the butter, then into the masala.',
      'Hold each roll against the pan for 1 minute, then turn and press the other face in.',
      'Scatter the coriander over and serve hot with lemon wedges.'
    ],
    tips: [
      'Press the cut face into the masala and hold it there.',
      'Soft rolls only — crusty bread will not work.',
      'More butter than feels reasonable is correct.'
    ],
    pair: ['Masala chai', 'Sliced onion', 'Extra lemon'],
    store: 'Eat immediately. The masala keeps 2 days refrigerated.',
    nut: [385, 8, 48, 18, 4, 8, 940]
  },

  'dabeli': {
    d: 'A spiced potato filling in a buttered roll with pomegranate, roasted peanuts and sev. Gujarat\'s answer to the vada pav.',
    meta: 'Kutchi dabeli of spiced mashed potato in a griddled buttered roll with dabeli masala, pomegranate, peanuts and sev.',
    kw: ['dabeli', 'dabeli recipe', 'kutchi dabeli', 'gujarati street food', 'dabeli masala'],
    why: 'The three textures are the dish and each has to stay separate: soft potato, crunchy roasted peanuts and crisp sev. Assemble at the last moment and press the sev on rather than mixing it in — sev folded into the filling is soft within a minute and you have lost a third of the point. The pomegranate is not decoration either; it is the sweet-sharp note against the masala.',
    ing: [
      '4 potatoes, boiled and mashed',
      '3 tbsp dabeli masala or 2 tbsp pav bhaji masala with 1 tsp ground cinnamon',
      '2 tbsp tamarind chutney',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '2 tbsp vegetable oil',
      '8 soft white rolls (pav)',
      '60 g unsalted butter',
      '4 tbsp roasted peanuts',
      '4 tbsp pomegranate seeds',
      '1 red onion, finely chopped',
      '80 g fine sev',
      '4 tbsp coriander and mint chutney',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil in a wide pan and stir in the dabeli masala for 30 seconds.',
      'Add the mashed potato, tamarind chutney, sugar and salt and mix thoroughly.',
      'Cook 4 minutes, pressing the mixture flat, then spread it in the pan and level the top.',
      'Scatter half the pomegranate, half the peanuts and half the coriander over the surface and press them in.',
      'Split the rolls almost through.',
      'Spread green chutney on one cut face and tamarind chutney on the other.',
      'Pack a thick layer of the potato mixture into each roll.',
      'Melt the butter on a griddle and press the filled rolls in, turning, for 2 minutes until golden on both sides.',
      'Dip the open edges of each roll in the sev so it sticks all round.',
      'Top with the remaining pomegranate, peanuts, red onion and coriander and eat at once.'
    ],
    tips: [
      'Sev pressed on at the end, never mixed in.',
      'Both chutneys, one on each cut face.',
      'Griddle the filled roll — it is not a cold sandwich.'
    ],
    pair: ['Masala chai', 'Extra sev', 'Cold water'],
    store: 'The filling keeps 2 days refrigerated. Assemble to order.',
    nut: [465, 11, 66, 18, 6, 12, 980]
  },

  'samosa-chaat': {
    d: 'A samosa crushed under chickpea curry, yoghurt and three chutneys. Twenty-five minutes if the samosas are bought.',
    meta: 'Crushed samosas topped with chole, yoghurt, tamarind and mint chutneys, onion, sev and chaat masala.',
    kw: ['samosa chaat', 'samosa chaat recipe', 'crushed samosa chole', 'indian street chaat', 'samosa chole chaat'],
    why: 'Crush the samosa, do not slice it. The dish depends on ragged edges catching the chole and the chutneys, and a neatly cut samosa keeps its layers sealed so the sauces sit on top and slide off. Press down with the back of a spoon until the pastry cracks in several places, then build on top of the wreckage.',
    ing: [
      '4 samosas, shop-bought or homemade',
      '400 g tinned chickpeas, drained',
      '2 tbsp vegetable oil',
      '1 onion, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 tomatoes, chopped',
      '1 tbsp chole masala or garam masala',
      '1 tsp Kashmiri chilli powder',
      '1 tsp fine sea salt',
      '200 ml water',
      '200 g thick natural yoghurt, whisked',
      '4 tbsp tamarind chutney',
      '4 tbsp coriander and mint chutney',
      '1 red onion, finely chopped',
      '60 g fine sev',
      '2 tsp chaat masala',
      '3 tbsp chopped coriander leaves'
    ],
    st: [
      'Heat the oil and fry the chopped onion for 6 minutes, until golden.',
      'Add the ginger and garlic paste and cook 1 minute.',
      'Add the tomatoes, chole masala, chilli powder and salt and cook 6 minutes.',
      'Add the chickpeas and water and simmer 8 minutes, mashing a few against the side to thicken it.',
      'Warm the samosas through in a hot oven for 5 minutes if they are not fresh.',
      'Put one samosa in each shallow bowl and crush it with the back of a spoon until the pastry cracks open.',
      'Spoon the hot chole over the top.',
      'Add a spoonful of whisked yoghurt, then both chutneys.',
      'Scatter the red onion, sev, chaat masala and coriander over.',
      'Serve immediately, while the samosa is still hot and the sev still crisp.'
    ],
    tips: [
      'Crush, never slice.',
      'The chole should be thick enough to sit on the samosa, not run off.',
      'Assemble one bowl at a time and hand it over.'
    ],
    pair: ['Masala chai', 'Cold lassi', 'Extra green chutney'],
    store: 'The chole keeps 3 days refrigerated. Assemble to order.',
    nut: [545, 15, 68, 24, 10, 14, 1290]
  },

  'aloo-chaat': {
    d: 'Potato cubes fried until the corners shatter, tossed with chaat masala, lime and coriander. Thirty minutes.',
    meta: 'Indian potato chaat of parboiled potato cubes fried crisp and tossed with chaat masala, chilli, lime and coriander.',
    kw: ['aloo chaat', 'aloo chaat recipe', 'crispy potato chaat', 'indian potato snack', 'chaat masala potatoes'],
    why: 'Parboil the potatoes, then dry them completely and let them cool before frying. Wet or warm potato steams in the oil and comes out soft; dry and cool, the outside dehydrates fast and shatters. Rough the cubes up in the colander after draining — the fluffed surfaces are what crisp, and smooth-cut cubes never get there.',
    ing: [
      '800 g waxy potatoes, in 3 cm cubes',
      '1 tbsp fine sea salt, for the water',
      '5 tbsp vegetable oil',
      '2 tsp chaat masala',
      '1 tsp Kashmiri chilli powder',
      '1 tsp roasted cumin powder',
      '0.5 tsp black salt',
      '1 red onion, finely chopped',
      '2 green chillies, finely chopped',
      '2 tbsp tamarind chutney',
      '2 tbsp lime juice',
      '4 tbsp chopped coriander leaves',
      '2 tbsp pomegranate seeds'
    ],
    st: [
      'Boil the potato cubes in salted water for 7 minutes, until a knife meets slight resistance.',
      'Drain hard and leave in the colander for 10 minutes to steam dry.',
      'Shake the colander so the cubes rough up at the edges.',
      'Heat the oil in a wide frying pan over a high heat.',
      'Add the potatoes in a single layer and leave them 4 minutes without moving.',
      'Turn and fry 8 minutes more, turning occasionally, until every side is deep gold and the corners are crisp.',
      'Tip into a bowl and add the chaat masala, chilli powder, cumin powder and black salt while still hot.',
      'Add the red onion, green chillies, tamarind chutney and lime juice and toss.',
      'Fold through the coriander.',
      'Scatter the pomegranate over and serve at once.'
    ],
    tips: [
      'Dry and cool before frying.',
      'Rough the cubes up in the colander.',
      'Season the moment they come out of the pan, while they are hot.'
    ],
    pair: ['Masala chai', 'Cold beer', 'Extra lime'],
    store: 'Eat immediately. The crispness goes within ten minutes.',
    nut: [345, 6, 48, 16, 6, 8, 1080]
  },

  'dahi-vada': {
    d: 'Lentil dumplings soaked soft, squeezed and drowned in sweetened yoghurt with two chutneys. Cold, and best made a few hours ahead.',
    meta: 'Urad dal dumplings deep fried, soaked in warm water and squeezed, then dressed in whisked sweetened yoghurt with chutneys.',
    kw: ['dahi vada', 'dahi vada recipe', 'dahi bhalla', 'yoghurt lentil dumplings', 'indian cold chaat'],
    why: 'Soak the fried vada in warm water for twenty minutes and then squeeze each one gently between your palms. It sounds destructive and it is the whole technique: it pushes out the frying oil and leaves the vada able to drink yoghurt instead. Skipped, they stay heavy and greasy and the yoghurt sits around them rather than in them.',
    ing: [
      '250 g split urad dal',
      '2.5 cm ginger, chopped',
      '2 green chillies',
      '1.25 tsp fine sea salt',
      '600 ml vegetable oil, for frying',
      '1 litre warm water, for soaking',
      '700 g thick natural yoghurt',
      '3 tbsp caster sugar',
      '1 tsp fine sea salt, for the yoghurt',
      '5 tbsp tamarind chutney',
      '4 tbsp coriander and mint chutney',
      '2 tsp chaat masala',
      '1 tsp roasted cumin powder',
      '1 tsp Kashmiri chilli powder',
      '3 tbsp chopped coriander leaves',
      '3 tbsp pomegranate seeds'
    ],
    st: [
      'Soak the urad dal in cold water for 4 hours, then drain.',
      'Grind with the ginger and chillies to a thick fluffy paste, using as little water as possible.',
      'Beat in the salt and whip the batter hard for 4 minutes, until a spoonful floats in water.',
      'Heat the oil to 170C and fry spoonfuls of batter in batches for 4 minutes, until deep gold. Drain.',
      'Put the fried vada in the warm water and soak 20 minutes.',
      'Lift each one out and squeeze it gently between your palms to press the water and oil out.',
      'Whisk the yoghurt with the sugar and yoghurt salt until smooth and pourable.',
      'Arrange the squeezed vada in a shallow dish and pour the yoghurt over to cover.',
      'Refrigerate 2 hours.',
      'Spoon both chutneys over, dust with chaat masala, cumin and chilli powder, and scatter the coriander and pomegranate over.'
    ],
    tips: [
      'Soak and squeeze. It is not optional.',
      'The float test decides whether they will be light.',
      'Two hours in the yoghurt at least; overnight is better.'
    ],
    pair: ['Samosa chaat', 'Masala chai', 'Extra tamarind chutney'],
    store: 'Keeps 2 days refrigerated in the yoghurt and improves overnight.',
    nut: [420, 18, 52, 16, 7, 22, 1150],
    rest: [360, 'soaking the dal and chilling']
  },

  'rasgulla': {
    d: 'Balls of fresh cheese boiled in thin syrup until they double and turn spongy. Bengal\'s sweet, and the texture is everything.',
    meta: 'Bengali rasgulla of homemade chenna kneaded smooth, rolled into balls and boiled in a thin sugar syrup until doubled and spongy.',
    kw: ['rasgulla', 'rasgulla recipe', 'bengali rasgulla', 'spongy rasgulla', 'chenna sweet'],
    why: 'The syrup must be thin — one part sugar to four parts water — and at a hard rolling boil the whole time. A thick syrup cannot get inside the ball, so the rasgulla stays dense and small; a thin one at a full boil drives in and inflates it. Keep the lid on and do not open it for the first ten minutes, and never let the boil drop.',
    ing: [
      '2 litres whole milk',
      '4 tbsp lemon juice mixed with 4 tbsp water',
      '1 tsp fine semolina',
      '400 g caster sugar',
      '1.6 litres water',
      '4 green cardamom pods, lightly crushed',
      '1 tsp rose water'
    ],
    st: [
      'Bring the milk to the boil, take it off the heat and stir in the diluted lemon juice until it splits cleanly.',
      'Strain through muslin, rinse thoroughly under cold water to remove all sourness, and hang 45 minutes.',
      'Knead the chenna with the semolina on a work surface for 8 minutes, until smooth and slightly greasy.',
      'Roll into 16 crack-free balls, keeping them covered.',
      'Boil the sugar, water and cardamom in a wide pan with a tight lid.',
      'When it is at a hard rolling boil, slide the balls in and cover at once.',
      'Boil hard for 15 minutes without lifting the lid for the first 10.',
      'Add a splash of hot water if the boil ever slackens.',
      'Take off the heat and leave the rasgulla in the syrup to cool for 3 hours.',
      'Stir in the rose water and serve chilled, in their syrup.'
    ],
    tips: [
      'Thin syrup, hard boil, lid on.',
      'Rinse the chenna well or the sweet tastes sour.',
      'They double — leave room in the pan.'
    ],
    pair: ['A cup of strong chai', 'Sandesh', 'Chilled cream'],
    store: 'Keeps 5 days refrigerated in their syrup.',
    nut: [225, 6, 46, 3, 0, 44, 60],
    rest: [225, 'draining the chhena and cooling in syrup']
  },

  'mysore-pak': {
    d: 'Gram flour cooked with ghee and sugar until it sets porous and melts on contact. Forty-five minutes, and the pour is a race.',
    meta: 'South Indian mysore pak of gram flour cooked with hot ghee and sugar syrup to a porous set, cut while warm.',
    kw: ['mysore pak', 'mysore pak recipe', 'ghee mysore pak', 'south indian sweet', 'besan fudge'],
    why: 'The ghee has to be genuinely hot when it goes in, added a ladleful at a time, and it must be absorbed before the next goes in. That repeated absorption is what creates the honeycomb — the texture is aerated fat, not a solid fudge. Once the mixture starts frothing and rising up the pan you have about twenty seconds to pour it out, so have the tin ready and greased before you start.',
    ing: [
      '200 g gram flour (besan), sifted',
      '400 g caster sugar',
      '150 ml water',
      '350 g ghee, plus 1 tbsp for the tin',
      '0.25 tsp ground cardamom'
    ],
    st: [
      'Grease a 20 cm square tin with the extra ghee and set it beside the hob.',
      'Sift the gram flour twice so there are no lumps at all.',
      'Melt the ghee in a small pan and keep it hot over a low heat.',
      'Boil the sugar and water to a one-thread consistency, about 6 minutes.',
      'Turn the heat low and whisk the gram flour into the syrup in a thin stream, stirring hard.',
      'Add the hot ghee one ladleful at a time, stirring constantly and waiting until each is absorbed.',
      'Continue for about 15 minutes. The mixture will darken, then start to froth and rise.',
      'Stir in the cardamom.',
      'The moment it froths up and stops absorbing ghee, pour it into the tin and level the surface.',
      'Cool 8 minutes, then cut into squares while still warm. Cool completely before lifting out.'
    ],
    tips: [
      'Hot ghee, one ladle at a time, fully absorbed.',
      'Tin greased and ready before you start.',
      'Cut warm, lift out cold.'
    ],
    pair: ['South Indian filter coffee', 'A festival', 'Salted cashews'],
    store: 'Keeps 10 days in an airtight tin at room temperature.',
    nut: [385, 4, 38, 25, 2, 33, 15]
  },

  'kaju-katli': {
    d: 'Cashews ground to a paste, cooked with sugar and rolled into diamonds. Four ingredients and no room for error.',
    meta: 'Indian kaju katli of ground cashews cooked with sugar syrup to a dough, rolled thin and cut into diamonds.',
    kw: ['kaju katli', 'kaju katli recipe', 'cashew barfi', 'indian diwali sweet', 'kaju burfi'],
    why: 'Grind the cashews in short pulses and stop the moment they are powder. A few seconds too long and the oil comes out, and oily cashew paste will not set — it stays sticky whatever you do afterwards. Chilling the nuts first buys you a few more seconds of margin. The dough is ready when it comes away from the pan in one mass and holds a fingerprint.',
    ing: [
      '300 g cashew nuts, chilled',
      '150 g caster sugar',
      '75 ml water',
      '1 tbsp ghee',
      '0.25 tsp ground cardamom',
      '1 sheet edible silver leaf, optional'
    ],
    st: [
      'Pulse the chilled cashews in a grinder in 5-second bursts until they are a fine powder. Stop before any oil appears.',
      'Sift the powder and re-grind any large pieces.',
      'Boil the sugar and water for 4 minutes, to a one-thread consistency.',
      'Turn the heat to its lowest and add the cashew powder all at once, stirring hard.',
      'Cook 6 minutes, stirring constantly, until the mixture thickens and comes away from the sides in one mass.',
      'Add the ghee and cardamom and stir 1 minute more.',
      'Tip onto a sheet of baking paper and let it cool for 3 minutes, until handleable.',
      'Knead it warm for 2 minutes until completely smooth.',
      'Roll out between two sheets of baking paper to 5 mm thick.',
      'Lay the silver leaf on if using, and cut into diamonds while still warm.'
    ],
    tips: [
      'Chill the cashews and pulse in bursts.',
      'Stop cooking when it leaves the pan in one mass.',
      'Knead it warm — that is what makes it smooth.'
    ],
    pair: ['Masala chai', 'Diwali', 'Besan ladoo'],
    store: 'Keeps 2 weeks in an airtight tin.',
    nut: [175, 4, 18, 10, 1, 14, 5]
  },

  'besan-ladoo': {
    d: 'Gram flour roasted slowly in ghee until it smells of biscuits, then rolled into balls with sugar. Forty minutes, thirty of them stirring.',
    meta: 'North Indian besan ladoo of gram flour roasted in ghee until nut-brown, mixed with icing sugar and cardamom and rolled into balls.',
    kw: ['besan ladoo', 'besan ladoo recipe', 'gram flour laddu', 'indian sweet balls', 'diwali ladoo'],
    why: 'Roast the gram flour on the lowest heat for a full twenty-five minutes. It changes colour three times — pale, then sandy, then a deep nut brown — and it is only at the third stage that the raw bean flavour has gone. There is no way to hurry it: raised heat scorches the outside while the inside is still raw, and the ladoo tastes bitter and chalky.',
    ing: [
      '300 g gram flour (besan), coarse if you can get it',
      '200 g ghee',
      '180 g icing sugar',
      '0.5 tsp ground cardamom',
      '40 g pistachios, chopped',
      '30 g almonds, chopped',
      '2 tbsp melon seeds, optional'
    ],
    st: [
      'Melt the ghee in a heavy pan over a low heat.',
      'Add the gram flour and stir it in until it is completely coated.',
      'Roast on the lowest heat for 25 minutes, stirring almost constantly.',
      'Watch for the colour: pale, then sandy, then deep nut brown, and the smell turns biscuity.',
      'Stir in the chopped nuts and melon seeds and roast 2 minutes more.',
      'Take off the heat and tip into a wide bowl.',
      'Cool for 15 minutes, until warm rather than hot — sugar added to a hot mixture melts and the ladoo will not hold.',
      'Sift in the icing sugar with the cardamom and mix thoroughly.',
      'Take walnut-sized amounts and press firmly between your palms into balls.',
      'Cool completely on a tray before storing.'
    ],
    tips: [
      'Twenty-five minutes on the lowest heat. Nothing else works.',
      'Cool to warm before the sugar goes in.',
      'Press firmly — loose ladoo fall apart.'
    ],
    pair: ['Masala chai', 'Diwali', 'Kaju katli'],
    store: 'Keeps 2 weeks in an airtight tin at room temperature.',
    nut: [265, 5, 24, 17, 2, 15, 10]
  },

  'malpua': {
    d: 'Small fried pancakes of flour and reduced milk, soaked in cardamom syrup. Crisp at the edge, soft in the middle.',
    meta: 'Indian malpua of plain flour and milk batter fried in ghee and steeped in cardamom and saffron sugar syrup.',
    kw: ['malpua', 'malpua recipe', 'indian fried pancakes', 'malpua rabri', 'holi sweet'],
    why: 'Rest the batter for at least half an hour and fry it in shallow ghee rather than deep oil. The lacy, frilled edge that defines a malpua comes from batter spreading thin in fat that is only about a centimetre deep — in a deep fryer it stays a puffy round and you lose it entirely. Dip them in warm, not hot, syrup or they go soggy.',
    ing: [
      '150 g plain flour',
      '3 tbsp fine semolina',
      '400 ml whole milk',
      '3 tbsp caster sugar, for the batter',
      '0.5 tsp fennel seeds, crushed',
      '0.25 tsp ground cardamom',
      '1 pinch baking powder',
      '200 g caster sugar, for the syrup',
      '150 ml water',
      '0.5 tsp saffron threads',
      '4 green cardamom pods, crushed',
      '250 ml ghee, for frying',
      '3 tbsp pistachios, slivered'
    ],
    st: [
      'Whisk the flour, semolina, batter sugar, fennel, cardamom and baking powder with the milk into a smooth batter the thickness of double cream.',
      'Rest 30 minutes.',
      'Boil the syrup sugar, water, saffron and cardamom pods for 5 minutes, then keep it warm rather than hot.',
      'Heat the ghee in a wide shallow pan to about 1 cm deep, over a medium heat.',
      'Pour a small ladle of batter in — it should spread to about 10 cm with a frilled edge.',
      'Fry 2 minutes, spooning hot ghee over the top, until the edges are lacy and golden.',
      'Turn and fry 1 minute more.',
      'Lift out, drain briefly, and slide straight into the warm syrup.',
      'Soak 2 minutes, then lift onto a plate.',
      'Repeat with the rest and serve warm, scattered with pistachios.'
    ],
    tips: [
      'Shallow ghee, about a centimetre.',
      'Warm syrup, not hot.',
      'Two minutes in the syrup and no longer.'
    ],
    pair: ['Rabri', 'Masala chai', 'Fresh pomegranate'],
    store: 'Best warm. Keeps 2 days refrigerated in their syrup.',
    nut: [385, 6, 58, 15, 1, 42, 45]
  },

  'thandai': {
    d: 'Almonds, melon seeds, pepper and rose ground into cold milk. Holi\'s drink, and the best thing to hand someone in a heatwave.',
    meta: 'Indian thandai of almonds, melon seeds, fennel and peppercorns ground to a paste, whisked into cold milk with saffron and rose.',
    kw: ['thandai', 'thandai recipe', 'holi thandai', 'indian spiced milk', 'almond saffron drink'],
    why: 'Soak the nuts and seeds for at least four hours and peel the almonds. Unsoaked, they will not grind to a paste and the drink comes out gritty however long you blend it; unpeeled, the skins give a faint bitterness and speckle what should be pale gold. Strain the finished drink through muslin — that last step is the difference between thandai and almond milk with bits in.',
    ing: [
      '80 g almonds',
      '3 tbsp melon seeds',
      '2 tbsp poppy seeds',
      '1 tbsp fennel seeds',
      '1 tsp black peppercorns',
      '8 green cardamom pods, seeds only',
      '2 tbsp dried rose petals',
      '1 litre whole milk, chilled',
      '120 g caster sugar',
      '0.5 tsp saffron threads',
      '2 tbsp warm milk, for the saffron',
      '1 tsp rose water',
      '2 tbsp pistachios, slivered'
    ],
    st: [
      'Soak the almonds, melon seeds and poppy seeds in cold water for 4 hours.',
      'Drain and slip the skins off the almonds.',
      'Soak the saffron in the warm milk for 10 minutes and crush the threads against the cup.',
      'Grind the soaked nuts and seeds with the fennel, peppercorns, cardamom seeds, rose petals and 100 ml of the cold milk to a very smooth paste.',
      'Whisk the paste into the remaining cold milk with the sugar until the sugar dissolves.',
      'Stir in the saffron milk and the rose water.',
      'Strain the whole lot through muslin, pressing the solids to get everything through.',
      'Chill 2 hours.',
      'Stir well and pour into tall glasses over ice.',
      'Scatter the pistachios over and serve.'
    ],
    tips: [
      'Four hours of soaking, and peel the almonds.',
      'Strain through muslin, not a sieve.',
      'Two hours chilling — it tastes different cold.'
    ],
    pair: ['Malpua', 'Holi', 'Gujiya'],
    store: 'Keeps 3 days refrigerated. Shake before pouring.',
    nut: [285, 11, 34, 12, 2, 31, 110],
    rest: [360, 'soaking the nuts and chilling']
  },

  'aam-panna': {
    d: 'Green mangoes boiled, pulped and mixed with cumin, mint and black salt. Sour, savoury and the colour of a lawn.',
    meta: 'Indian aam panna of boiled raw green mango pulped with roasted cumin, black salt, mint and sugar, served cold over ice.',
    kw: ['aam panna', 'aam panna recipe', 'raw mango drink', 'indian summer cooler', 'kairi panna'],
    why: 'Boil the mangoes whole rather than peeling and chopping them first. The skin holds everything in, the flesh steams to a pulp that slips off the stone, and you lose none of the sourness to the water — peeled and cubed, half the flavour ends up in the pan. Black salt is not optional and ordinary salt will not do it: the sulphurous note is what makes this taste like aam panna.',
    ing: [
      '3 raw green mangoes, about 600 g',
      '800 ml water, for boiling',
      '120 g caster sugar',
      '2 tsp roasted cumin powder',
      '1.5 tsp black salt',
      '0.5 tsp fine sea salt',
      '0.5 tsp ground black pepper',
      '30 g mint leaves',
      '1 litre cold water',
      'ice, to serve'
    ],
    st: [
      'Put the whole mangoes in a pan with the boiling water, cover, and boil 20 minutes, until the skins wrinkle and give.',
      'Drain and cool under cold water.',
      'Squeeze the pulp out of the skins and off the stones into a bowl, discarding both.',
      'Blend the pulp with the sugar, cumin powder, black salt, sea salt, pepper and mint until completely smooth.',
      'Pass through a sieve, pressing the solids through.',
      'Stir in the cold water a little at a time until it is the strength you want.',
      'Taste and correct: it should be sour first, then salty, then sweet.',
      'Chill 1 hour.',
      'Pour over ice and serve with a mint leaf.'
    ],
    tips: [
      'Boil them whole and skin them after.',
      'Black salt, not table salt.',
      'Sour first, salty second, sweet third.'
    ],
    pair: ['A hot afternoon', 'Aloo chaat', 'Salted crisps'],
    store: 'The concentrate keeps 1 week refrigerated and freezes 3 months.',
    nut: [135, 1, 33, 0, 2, 30, 620],
    rest: [60, 'chilling']
  },

  'jaljeera': {
    d: 'Cumin, mint, tamarind and black salt in cold water. Fifteen minutes, no cooking, and it tastes like nothing else.',
    meta: 'Indian jaljeera of roasted cumin, mint, coriander, tamarind and black salt blended and served ice cold with boondi.',
    kw: ['jaljeera', 'jaljeera recipe', 'cumin drink', 'indian digestive drink', 'jal jeera masala'],
    why: 'Roast the cumin seeds and grind them yourself for this. Ready-ground cumin has lost the volatile oils that give jaljeera its whole character and the drink tastes dusty; seeds toasted for ninety seconds and pounded warm are a different ingredient. Black salt again — the sulphur is the point, and this drink is mostly salt, sour and cumin with water behind it.',
    ing: [
      '2 tbsp cumin seeds',
      '40 g mint leaves',
      '30 g coriander leaves',
      '2 tbsp tamarind paste',
      '2 green chillies',
      '2.5 cm ginger',
      '2 tsp black salt',
      '1 tsp fine sea salt',
      '2 tbsp caster sugar',
      '1 tsp amchur (dried mango powder)',
      '0.5 tsp ground black pepper',
      '1.2 litres ice-cold water',
      '4 tbsp boondi, to serve',
      'ice, to serve'
    ],
    st: [
      'Toast the cumin seeds in a dry pan for 90 seconds, until they darken and smell strong.',
      'Cool for 2 minutes, then grind to a powder.',
      'Blend the mint, coriander, chillies, ginger, tamarind and 200 ml of the water to a smooth green paste.',
      'Strain the paste through a sieve into a jug, pressing it through.',
      'Whisk in the ground cumin, black salt, sea salt, sugar, amchur and pepper.',
      'Add the remaining ice-cold water and stir until the sugar and salt dissolve.',
      'Taste and correct — it should be sharply salty and sour, only faintly sweet.',
      'Chill 30 minutes.',
      'Pour over ice, float a spoonful of boondi on each glass and serve at once.'
    ],
    tips: [
      'Toast and grind the cumin yourself.',
      'Strain the herb paste or it separates in the glass.',
      'Boondi goes in at the last second or it dissolves.'
    ],
    pair: ['Aloo chaat', 'Samosa chaat', 'A very hot day'],
    store: 'Keeps 3 days refrigerated. Stir before pouring.',
    nut: [65, 1, 15, 0, 1, 12, 1290]
  },

  'chaas': {
    d: 'Yoghurt thinned with water and seasoned with cumin, ginger and curry leaf. Ten minutes, and it is what an Indian household drinks after lunch.',
    meta: 'Indian chaas of whisked yoghurt thinned with cold water and seasoned with roasted cumin, ginger, green chilli and curry leaves.',
    kw: ['chaas', 'chaas recipe', 'masala chaas', 'spiced buttermilk', 'indian yoghurt drink'],
    why: 'Whisk the yoghurt on its own until it is completely smooth before any water goes in. Water added to lumpy yoghurt keeps it lumpy no matter how hard you work afterwards, because the lumps simply float. And use cold water: warm water splits the drink into curds and whey within a couple of minutes.',
    ing: [
      '400 g natural yoghurt',
      '800 ml ice-cold water',
      '1 tsp roasted cumin powder',
      '1 tsp black salt',
      '0.5 tsp fine sea salt',
      '2.5 cm ginger, grated',
      '1 green chilli, finely chopped',
      '15 curry leaves, finely chopped',
      '3 tbsp chopped coriander leaves',
      '0.25 tsp ground black pepper',
      'ice, to serve'
    ],
    st: [
      'Whisk the yoghurt on its own until it is completely smooth, about 1 minute.',
      'Add the ice-cold water a little at a time, whisking, until fully combined.',
      'Whisk in the cumin powder, black salt, sea salt and pepper.',
      'Stir in the grated ginger, green chilli and curry leaves.',
      'Taste and correct the salt — it should be clearly savoury, not bland.',
      'Chill 20 minutes so the aromatics infuse.',
      'Strain if you prefer it smooth, or leave it as it is.',
      'Pour over ice, scatter the coriander over and serve.'
    ],
    tips: [
      'Whisk the yoghurt smooth first, water after.',
      'Ice-cold water or it splits.',
      'Twenty minutes standing lets the ginger and curry leaf come through.'
    ],
    pair: ['Any Indian meal', 'Tawa pulao', 'A heatwave'],
    store: 'Keeps 2 days refrigerated. Whisk again before pouring.',
    nut: [85, 5, 8, 3, 0, 7, 890]
  },

  'filter-coffee': {
    d: 'Coffee dripped slowly through a two-part steel filter, mixed with hot milk and poured between two vessels until it froths.',
    meta: 'South Indian filter coffee brewed as decoction in a steel filter, mixed with hot milk and pulled between tumbler and davara.',
    kw: ['south indian filter coffee', 'filter coffee recipe', 'filter kaapi', 'indian coffee decoction', 'davara tumbler coffee'],
    why: 'The pouring between tumbler and davara is not showmanship. It aerates the coffee, cools it to drinking temperature and builds the foam that a good kaapi is judged on — three or four pulls from a good height is right. The decoction itself must drip, not be pressed: pushing the disc down hard extracts bitterness and produces a thin, harsh cup.',
    ing: [
      '4 tbsp coarsely ground South Indian coffee, with 20 per cent chicory',
      '200 ml boiling water',
      '400 ml whole milk',
      '4 tsp caster sugar, or to taste'
    ],
    st: [
      'Put the ground coffee in the upper chamber of a steel filter and level it.',
      'Set the perforated disc on top and press it gently — gently — into place.',
      'Pour 60 ml of the boiling water over the disc and leave 1 minute to bloom.',
      'Pour the remaining boiling water in, cover, and leave to drip for 15 minutes.',
      'Do not press the disc down. When dripping stops, you have the decoction.',
      'Heat the milk until it is steaming but not boiling.',
      'Put 2 tsp of decoction and 1 tsp of sugar in each tumbler.',
      'Pour the hot milk in and stir until the sugar dissolves.',
      'Pour the coffee from the tumbler into the davara and back again from a height, 4 times, until it froths.',
      'Serve immediately in the tumbler, sitting in the davara.'
    ],
    tips: [
      'Never press the disc down.',
      'Milk steaming, not boiled.',
      'Four pulls from a height for the froth.'
    ],
    pair: ['Medu vada', 'Mysore pak', 'The morning newspaper'],
    store: 'The decoction keeps 2 days refrigerated. Make the coffee to order.',
    nut: [145, 7, 18, 5, 0, 17, 90]
  },

  'bombay-sandwich': {
    d: 'Green chutney, sliced vegetables and butter between white bread, pressed on a griddle and buried in sev. Twenty-five minutes.',
    meta: 'Mumbai street sandwich of white bread layered with green chutney, potato, cucumber, tomato and onion, griddled in butter.',
    kw: ['bombay sandwich', 'bombay sandwich recipe', 'mumbai grilled sandwich', 'indian veg sandwich', 'chutney sandwich'],
    why: 'Butter one side and green chutney the other on every slice, including the ones in the middle. The butter waterproofs the bread against the wet vegetables and the chutney is the seasoning for everything — a sandwich with chutney only in the middle tastes of bread at the edges. Slice the vegetables thin enough to see through, or the whole thing collapses when you cut it.',
    ing: [
      '6 slices soft white bread',
      '60 g unsalted butter, softened',
      '6 tbsp coriander and mint chutney',
      '1 potato, boiled and thinly sliced',
      '1 cucumber, thinly sliced',
      '1 tomato, thinly sliced and deseeded',
      '1 red onion, thinly sliced',
      '1 beetroot, boiled and thinly sliced',
      '2 tsp chaat masala',
      '0.5 tsp fine sea salt',
      '60 g fine sev',
      '2 tbsp tomato ketchup'
    ],
    st: [
      'Butter one face of every slice of bread and spread green chutney on the other face.',
      'Lay two slices chutney-side up as the base.',
      'Cover with potato slices and dust with chaat masala and salt.',
      'Add cucumber, then tomato, then onion, then beetroot, dusting with chaat masala between layers.',
      'Lay a middle slice on each, chutney-side down, then butter side up.',
      'Add a second set of vegetable layers.',
      'Top with the last slices, chutney-side down.',
      'Press each sandwich in a hot griddle or sandwich press for 4 minutes, until golden and compressed.',
      'Cut into triangles.',
      'Pile sev over the top and serve with ketchup.'
    ],
    tips: [
      'Butter and chutney on every slice, both faces.',
      'Slice the vegetables almost transparent.',
      'Sev on top at the very end.'
    ],
    pair: ['Masala chai', 'Cutting chai', 'Extra green chutney'],
    store: 'Eat immediately. Griddled sandwiches do not keep.',
    nut: [485, 10, 62, 22, 6, 10, 1080]
  }
};
