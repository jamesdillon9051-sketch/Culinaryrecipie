'use strict';

/**
 * Volume forty-eight — Indian restaurant and regional favourites, first part.
 *
 * Twenty-five meat and seafood dishes from Indian home and restaurant
 * cooking: prawn bhuna, keema naan, butter chicken pizza, Goan, Kolhapuri and
 * Mughlai chicken, Kerala chicken and beef, and lamb curries and kebabs.
 * Times are the recipe's own; hobs differ, so each method says what to look
 * for. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'prawn-bhuna': {
    d: 'King prawns cooked in a thick, dry-edged bhuna masala of browned onion, tomato and ground spices, finished with coriander.',
    meta: 'Prawn bhuna: king prawns in a thick masala of browned onion, tomato and ground spices. Four servings, cooked for 25 minutes.',
    kw: ['prawn bhuna', 'king prawn bhuna', 'prawn bhuna curry', 'prawn bhuna recipe', 'indian prawn curry'],
    why: 'Prawns, onions, tomatoes, a few ground spices: the list is short, and the whole dish depends on how long the onions are cooked. Bhuna is the name of the technique as much as the curry. The masala is fried down until it is thick and clinging, with oil visible at the edges, and only then do the prawns go in.\n\nCook the onions for a full 10 minutes, until deep golden rather than just soft. Add the ginger, garlic and spices and stir for a minute so the raw smell goes. Then add the tomatoes and keep cooking until the mixture turns to a paste. **Wait for the oil to separate before adding the prawns.**\n\nPrawns need very little time. They turn from grey to pink and curl into a loose C within 4 minutes. A tight O means they are overcooked and will be rubbery.\n\nA splash of water loosens the sauce but should not turn it into soup. Bhuna is meant to coat the prawns, not surround them.',
    ing: [
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger, grated',
      '4 garlic cloves, crushed',
      '1 tsp ground cumin',
      '2 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '3 tomatoes, about 300 g, chopped',
      '400 g raw king prawns, peeled',
      '1 tsp garam masala',
      '1/2 tsp salt',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a wide pan over a medium heat. Add the onions and cook for 10 minutes, stirring often, until deep golden.',
      'Add the ginger, garlic, cumin, coriander, turmeric and chilli powder. Stir for 1 minute.',
      'Add the tomatoes and salt. Cook for 8 minutes, mashing the tomatoes with the back of a spoon, until the mixture is thick and the oil shows at the edges.',
      'Add the prawns and a splash of water. Cook for 4 minutes, turning once, until pink and curled.',
      'Stir in the garam masala and fresh coriander and serve.'
    ],
    tips: [
      'Pat the prawns dry before they go in so they do not thin the masala.',
      'If the masala catches on the pan, add a tablespoon of water and scrape.',
      'Take the pan off the heat the moment the prawns are pink; they keep cooking in the sauce.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Lemon wedges'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day; reheat gently so the prawns do not toughen.',
    nut: [239, 22, 13, 11, 3, 5, 470]
  },

  'keema-naan': {
    d: 'Soft yeasted flatbreads stuffed with spiced minced lamb, rolled out and cooked in a hot dry pan until blistered.',
    meta: 'Keema naan: yeasted flatbreads stuffed with spiced minced lamb and cooked in a hot pan. Makes six, about 15 minutes cooking.',
    kw: ['keema naan', 'stuffed keema naan', 'lamb keema naan', 'keema naan recipe', 'minced lamb naan bread'],
    why: 'The usual way stuffed bread goes wrong is a wet filling that tears the dough. The fix is to cook the keema until it is almost dry, then let it cool completely before it goes anywhere near the dough.\n\nThe dough is a soft yeasted one made with yoghurt, and it should be tacky but not sticky. Knead it for 8 minutes until smooth and elastic, then leave it to prove for 1 hour until doubled. Warm weather speeds this up, a cold kitchen slows it.\n\nShape each ball into a disc, put a spoonful of filling in the middle, and pull the edges up and over to seal. **Pinch the seam shut and turn it seam-side down.** Roll gently with light pressure, so the filling spreads rather than bursts out.\n\nCook in a heavy dry pan over a high heat. Bubbles appear within a minute. Turn when the underside has brown spots, and brush with melted butter the moment it comes off the heat.',
    ing: [
      '# Dough',
      '300 g strong white bread flour',
      '1 tsp fast-action dried yeast',
      '1 tsp sugar',
      '1/2 tsp salt',
      '100 g plain yoghurt',
      '100 ml warm water',
      '1 tbsp vegetable oil',
      '# Filling',
      '1 tbsp vegetable oil',
      '1/2 onion, about 80 g, finely chopped',
      '1 tsp ginger, grated',
      '1 garlic clove, crushed',
      '200 g minced lamb',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp chilli powder',
      '1/2 tsp salt',
      '2 tbsp chopped fresh coriander',
      '# To finish',
      '30 g butter, melted'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the yoghurt, water and oil and mix to a soft dough. Knead for 8 minutes until smooth.',
      'Cover and leave to prove for 1 hour, until doubled in size.',
      'For the filling, heat the oil and cook the onion for 5 minutes. Add the ginger, garlic and lamb and cook for 8 minutes, breaking up the mince, until no liquid remains. Stir in the spices, salt and fresh coriander, then leave to cool completely.',
      'Divide the dough into 6 balls. Flatten each, add a spoonful of filling, pinch the edges together and roll out to about 18 cm, seam-side down.',
      'Heat a heavy frying pan until very hot. Cook each naan for 2 minutes on each side, until blistered and brown in spots. Brush with melted butter.'
    ],
    tips: [
      'Cool the filling fully; a warm filling softens the dough and makes it tear.',
      'Keep the rolling pin light; heavy pressure pushes the mince through the dough.',
      'Cover cooked naan with a clean cloth so they stay soft.',
      'If the pan smokes, lower the heat slightly; the bread should brown, not scorch.'
    ],
    pair: ['Cucumber raita', 'Dal tadka', 'Mint chutney', 'Sliced onion with lemon'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days and reheats in a dry pan.',
    nut: [317, 13, 28, 17, 2, 4, 670],
    rest: [60, 'Proving']
  },

  'butter-chicken-pizza': {
    d: 'A pizza base spread with butter chicken sauce, topped with tender chicken, mozzarella and red onion, then baked until bubbling.',
    meta: 'Butter chicken pizza: pizza dough topped with a creamy tomato butter sauce, chicken and mozzarella. Four servings, cooked for 25 minutes.',
    kw: ['butter chicken pizza', 'indian butter chicken pizza', 'butter chicken pizza recipe', 'curry pizza', 'chicken makhani pizza'],
    why: 'Why does a curry sauce work on a pizza? Because butter chicken sauce is already built like a pizza sauce: tomato, cream, a little sweetness and enough spice to stand up to cheese. It is thick enough to stay put on the dough, which is the main thing a pizza sauce needs to do.\n\nCook the chicken in the sauce first. Small pieces, about 2 cm, cook through in 8 minutes and soak up the flavour, so the topping is seasoned all the way through rather than just coated. **Reduce the sauce until it is thick enough to hold a spoon trail.** A thin sauce makes a soggy base.\n\nStretch the dough thin and bake it hot, at 240°C, on a preheated tray. The pizza needs only 12 minutes.\n\nAdd the red onion and coriander after baking. They stay crisp and bright against the rich sauce, and a squeeze of lemon lifts the whole thing.',
    ing: [
      '# Sauce and chicken',
      '1 tbsp vegetable oil',
      '300 g boneless skinless chicken thighs, cut into 2 cm pieces',
      '1 tbsp ginger and garlic paste',
      '1 tsp garam masala',
      '1/2 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '200 g passata',
      '30 g butter',
      '50 ml double cream',
      '1/2 tsp salt',
      '# Pizza',
      '400 g pizza dough',
      '1 tbsp plain flour, for dusting',
      '150 g grated mozzarella',
      '1/2 red onion, thinly sliced',
      '2 tbsp chopped fresh coriander',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 240°C (220°C fan) and put a baking tray in to heat.',
      'Heat the oil in a pan and cook the chicken for 4 minutes. Add the ginger and garlic paste and spices and stir for 1 minute.',
      'Add the passata, butter and salt. Simmer for 8 minutes until thick, then stir in the cream.',
      'Stretch the dough on a floured sheet of baking paper to a thin round, about 30 cm.',
      'Spread with the chicken and sauce, leaving a 2 cm border, and scatter over the mozzarella.',
      'Slide the paper onto the hot tray and bake for 12 minutes, until the crust is golden and the cheese is bubbling. Top with the onion and coriander and serve with lemon.'
    ],
    tips: [
      'Reduce the sauce well; a wet topping leaves the middle of the pizza soft.',
      'Stretch the dough with your hands rather than a rolling pin to keep some air in the crust.',
      'If the base is browning faster than the top, move the tray down a shelf.'
    ],
    pair: ['Cucumber raita', 'Green salad', 'Mango lassi', 'Mint chutney'],
    store: 'Best eaten hot. Leftover slices keep in the fridge for 1 day; reheat in a hot oven rather than a microwave.',
    nut: [642, 34, 59, 30, 4, 7, 1150]
  },

  'chicken-xacuti': {
    d: 'A Goan chicken curry built on a dark paste of toasted coconut, dried red chillies, poppy seeds and whole spices.',
    meta: 'Chicken xacuti: chicken in a Goan paste of toasted coconut, dried chillies, poppy seeds and whole spices. Four servings, cooked for 40 minutes.',
    kw: ['chicken xacuti', 'goan chicken xacuti', 'xacuti curry', 'chicken xacuti recipe', 'goan chicken curry'],
    why: 'Xacuti, pronounced something like "sha-koo-tee", is a Goan curry, and what sets it apart is the paste. Coconut, dried red chillies, poppy seeds and whole spices are toasted in a dry pan before they are ground, and that toasting is where the dark colour and the nutty depth come from.\n\nWatch the pan closely. The coconut should turn the colour of light toast, and the spices should smell warm and strong within 3 minutes. If anything blackens, the curry will taste bitter and it is better to start again than to carry on.\n\n**Grind the toasted spices with water to a smooth paste.** A coarse paste gives a gritty sauce.\n\nCook the onions until golden, add the paste and fry until the oil comes up around the edges, then add the chicken. The curry needs 25 minutes with the lid half on, which is long enough for the chicken to cook and the sauce to thicken to a coating consistency.',
    ing: [
      '# Xacuti paste',
      '4 tbsp desiccated coconut',
      '6 dried red chillies',
      '1 tbsp poppy seeds',
      '2 tsp coriander seeds',
      '1 tsp cumin seeds',
      '1 g star anise',
      '1 g cloves',
      '1 g nutmeg, grated',
      '# Curry',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '700 g chicken thighs on the bone, skinned',
      '1/2 tsp ground turmeric',
      '1 tbsp tamarind paste',
      '1 tsp salt',
      '300 ml water'
    ],
    st: [
      'Toast the coconut, chillies, poppy seeds, coriander seeds, cumin seeds, star anise and cloves in a dry pan for 3 minutes, stirring, until fragrant. Cool slightly, add the nutmeg and grind with 100 ml of the water to a smooth paste.',
      'Heat the oil in a wide pan and cook the onions for 10 minutes until golden. Add the ginger and garlic paste and cook for 1 minute.',
      'Add the paste and turmeric and cook for 5 minutes, stirring, until the oil separates.',
      'Add the chicken, tamarind, salt and the remaining water. Bring to a simmer and cook with the lid half on for 25 minutes, stirring now and then, until the chicken is cooked through and the sauce is thick.'
    ],
    tips: [
      'Toast in small batches if your pan is small so the spices brown evenly.',
      'If the sauce is too thick, add a splash of water; if too thin, simmer with the lid off.',
      'Taste the tamarind before adding more; it varies a lot between brands.',
      'Use a spice grinder if you have one for the smoothest paste.'
    ],
    pair: ['Steamed rice', 'Pao or soft bread rolls', 'Sliced onion with lemon', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days, and the flavour improves overnight. Reheat gently.',
    nut: [473, 37, 16, 29, 5, 7, 760]
  },

  'chicken-kolhapuri': {
    d: 'A fiery chicken curry from Maharashtra built on a roasted paste of dried chillies, coconut and whole spices, finished with a little tomato.',
    meta: 'Chicken kolhapuri: chicken in a fiery paste of roasted dried chillies, coconut and whole spices. Four servings, cooked for 35 minutes.',
    kw: ['chicken kolhapuri', 'kolhapuri chicken', 'kolhapuri chicken curry', 'chicken kolhapuri recipe', 'spicy maharashtrian chicken curry'],
    why: 'Most home versions come out either blandly red or so hot nobody can finish it, and the way out is to build the heat from dried chillies rather than powder. Kashmiri chillies add colour with modest heat, and a few hotter ones give the kick. Soaked and ground, they make a paste that tastes of chilli rather than just burning.\n\nRoast the coconut, coriander seeds, cumin and peppercorns in a dry pan until they smell nutty, about 3 minutes, then grind them with the soaked chillies. **Taste the paste before cooking, and adjust the number of chillies next time.** What you taste raw is roughly what you will get on the plate.\n\nBrown the onion well, then fry the paste in the oil until it darkens and the oil rises. Tomato balances the heat with a little sourness.\n\nSimmer the chicken for 25 minutes, until tender, with just enough water to make a thick, clinging gravy.',
    ing: [
      '# Kolhapuri paste',
      '6 dried Kashmiri chillies, soaked in hot water for 15 minutes',
      '2 dried hot red chillies, soaked',
      '3 tbsp desiccated coconut',
      '1 tbsp coriander seeds',
      '1 tsp cumin seeds',
      '1 tsp black peppercorns',
      '4 garlic cloves',
      '# Curry',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, thinly sliced',
      '2 tomatoes, about 200 g, chopped',
      '700 g chicken thighs on the bone, skinned',
      '1/2 tsp ground turmeric',
      '1 tsp salt',
      '250 ml water',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Toast the coconut, coriander seeds, cumin and peppercorns in a dry pan for 3 minutes. Grind with the drained chillies, garlic and a splash of water to a smooth paste.',
      'Heat the oil in a wide pan and cook the onions for 10 minutes until browned.',
      'Add the paste and turmeric and fry for 5 minutes, until the oil rises. Add the tomatoes and cook for 4 minutes.',
      'Add the chicken, salt and water. Cover and simmer for 25 minutes until the chicken is tender and the gravy is thick.',
      'Stir in the fresh coriander and serve.'
    ],
    tips: [
      'Wear gloves when you handle the soaked chillies.',
      'For a milder curry, deseed the chillies before soaking.',
      'Fry the paste patiently; raw paste tastes harsh.'
    ],
    pair: ['Chapati', 'Steamed rice', 'Sliced raw onion', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water.',
    nut: [442, 37, 15, 26, 4, 6, 760]
  },

  'chicken-handi': {
    d: 'Chicken simmered in a creamy tomato and onion sauce with ginger, garlic and mild spices, traditionally served in the pot it is cooked in.',
    meta: 'Chicken handi: chicken in a creamy tomato and onion sauce with ginger, garlic and mild spices. Four servings, cooked for 35 minutes.',
    kw: ['chicken handi', 'chicken handi recipe', 'handi chicken', 'restaurant style chicken handi', 'creamy indian chicken curry'],
    why: 'Handi is the pot. Chicken handi takes its name from the round, narrow-necked clay or metal vessel the dish is cooked and served in, and the shape matters: the narrow top keeps steam in, so the chicken cooks in its own juices as much as in the sauce.\n\nAny heavy pan with a lid does the job. What counts is a low heat and a lid that fits.\n\nStart with the onions, cooked until soft and pale gold, then add ginger, garlic and the tomatoes. **Cook the tomatoes until the sauce has darkened and thickened.** That takes about 10 minutes and gives the dish its depth; rushing it leaves a sharp, raw tomato taste.\n\nThe chicken goes in with yoghurt and spices and cooks covered for 20 minutes. The cream goes in at the end, off a hard boil, so it stays smooth. A spoonful of crushed dried fenugreek leaves is the finishing touch.',
    ing: [
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, about 300 g, chopped',
      '700 g chicken thighs on the bone, skinned',
      '3 tbsp plain yoghurt',
      '1 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1/2 tsp chilli powder',
      '1 tsp salt',
      '100 ml double cream',
      '1 tsp dried fenugreek leaves',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a heavy pan over a medium heat. Cook the onions for 8 minutes until soft and pale gold.',
      'Add the ginger and garlic paste and cook for 1 minute. Add the tomatoes and cook for 10 minutes, mashing them down, until thick and dark.',
      'Add the chicken, yoghurt, spices and salt. Stir well, cover and cook over a low heat for 20 minutes, stirring once or twice.',
      'Stir in the cream and fenugreek leaves and simmer for 2 minutes without boiling hard.',
      'Scatter with the fresh coriander and serve.'
    ],
    tips: [
      'Whisk the yoghurt smooth before adding it so it does not split.',
      'Rub the fenugreek leaves between your palms to release their aroma.',
      'Keep the heat low once the cream is in.'
    ],
    pair: ['Garlic naan', 'Jeera rice', 'Sliced onion salad', 'Cucumber raita'],
    store: 'Keeps in the fridge for 2 days. Reheat gently and add a splash of water if it has thickened.',
    nut: [456, 38, 13, 28, 3, 6, 770]
  },

  'chicken-changezi': {
    d: 'A rich Mughlai chicken curry of onion, cashew and yoghurt sauce with whole spices, thickened to a smooth, mild-spiced gravy.',
    meta: 'Chicken changezi: chicken in a smooth Mughlai sauce of browned onion, cashews and yoghurt. Four servings, cooked for 35 minutes.',
    kw: ['chicken changezi', 'changezi chicken', 'chicken changezi recipe', 'mughlai chicken changezi', 'chicken changezi gravy'],
    why: 'Most rich Mughlai-style curries go wrong in the same way: the gravy splits or tastes of raw onion. The cure is to cook the onions properly, blend them with cashews to a very smooth paste, and add the yoghurt slowly over a low heat.\n\nBoil the sliced onions and cashews briefly, about 8 minutes, until soft, and blend them with a little of their cooking water. This gives a pale, creamy base with no frying needed, and the sauce stays light in colour.\n\nFor the chicken, brown it lightly in oil with the whole spices first. Cardamom, cloves and cinnamon go in for a few seconds until fragrant. **Add the yoghurt a spoonful at a time, stirring constantly.** Cold yoghurt added in one go on a hot pan curdles.\n\nAfter that, the sauce simmers with the lid half on for 20 minutes. A little cream and a pinch of garam masala finish it.',
    ing: [
      '2 onions, about 300 g, sliced',
      '50 g cashew nuts',
      '3 tbsp vegetable oil',
      '2 g green cardamom pods',
      '1 g cloves',
      '3 g cinnamon stick',
      '700 g chicken thighs on the bone, skinned',
      '1 tbsp ginger and garlic paste',
      '150 g plain yoghurt, whisked smooth',
      '1/2 tsp ground turmeric',
      '1 tsp ground coriander',
      '1/2 tsp chilli powder',
      '1 tsp salt',
      '50 ml double cream',
      '1/2 tsp garam masala'
    ],
    st: [
      'Boil the onions and cashews in 300 ml water for 8 minutes until soft. Blend with their water until completely smooth.',
      'Heat the oil in a wide pan. Add the cardamom, cloves and cinnamon for 20 seconds, then add the chicken and cook for 5 minutes, turning, until lightly coloured.',
      'Add the ginger and garlic paste and cook for 1 minute. Add the spices and salt, then the yoghurt a spoonful at a time, stirring.',
      'Add the onion and cashew paste. Cover with the lid half on and simmer for 20 minutes, stirring now and then, until the chicken is cooked and the sauce is thick.',
      'Stir in the cream and garam masala and heat for 1 minute.'
    ],
    tips: [
      'Strain the sauce through a sieve for a restaurant-smooth finish.',
      'Keep the heat low when the yoghurt goes in.',
      'Do not add the garam masala earlier; it fades with long cooking.'
    ],
    pair: ['Butter naan', 'Pilau rice', 'Sliced onion with lemon', 'Mint chutney'],
    store: 'Keeps in the fridge for 2 days. Reheat over a low heat with a splash of water.',
    nut: [489, 42, 15, 29, 3, 6, 780]
  },

  'chicken-malai-tikka': {
    d: 'Chicken pieces marinated in cream, cheese, cashew paste and mild spices, then cooked until tender with light char.',
    meta: 'Chicken malai tikka: chicken marinated in cream, cheese and cashew paste, cooked until tender. Four servings, cooked for 20 minutes.',
    kw: ['chicken malai tikka', 'malai chicken tikka', 'chicken malai tikka recipe', 'creamy chicken tikka', 'white chicken tikka'],
    why: 'What makes malai tikka different from red tikka? There is no chilli powder and no food colouring: the marinade is cream, grated cheese, ground cashews, ginger, garlic and white pepper, and the result is pale, mild and soft.\n\nThe marinade needs 30 minutes. Longer is fine, but the mixture is rich, so there is no need for overnight. Pat the chicken dry first, so the marinade clings rather than sliding off.\n\nThe usual problem is dry chicken. Use thigh meat, which stays juicy, and cut it into pieces of the same size, about 3 cm, so they finish together. **Thread them loosely on the skewers.** Pieces packed tight steam instead of browning.\n\nCook under a hot grill for about 18 minutes, turning, until the edges take colour and the juices run clear. Brush with melted butter in the last few minutes, then rest for 3 minutes before serving with lemon.',
    ing: [
      '600 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '100 ml double cream',
      '50 g grated cheddar cheese',
      '30 g cashew nuts, ground',
      '1 tbsp ginger and garlic paste',
      '1 tbsp lemon juice',
      '1/2 tsp ground cardamom',
      '1/2 tsp white pepper',
      '1 tsp salt',
      '1 tbsp melted butter',
      '1 lemon, cut into wedges',
      '1 red onion, sliced'
    ],
    st: [
      'Mix the cream, cheese, cashews, ginger and garlic paste, lemon juice, cardamom, pepper and salt. Add the chicken, coat well and leave for 30 minutes.',
      'Heat the grill to high. Thread the chicken onto skewers, leaving small gaps between the pieces.',
      'Grill for 18 minutes, turning every 5 minutes, until golden at the edges and cooked through. Brush with the melted butter in the last 3 minutes.',
      'Rest for 3 minutes and serve with the onion and lemon wedges.'
    ],
    tips: [
      'Use a thermometer if you like: chicken is done at 75°C in the thickest piece.',
      'If the cream marinade catches, move the skewers further from the heat.',
      'Soak wooden skewers for 20 minutes first so they do not burn.'
    ],
    pair: ['Mint chutney', 'Naan', 'Onion and lemon salad', 'Basmati rice'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven or pan so the outside stays crisp.',
    nut: [406, 35, 8, 26, 1, 3, 820]
  },

  'chicken-reshmi-kebab': {
    d: 'Silky minced chicken kebabs with cream, cashew paste, green chilli and cardamom, cooked on skewers or in a pan until just firm.',
    meta: 'Chicken reshmi kebab: soft minced chicken kebabs with cream, cashew and cardamom. Four servings, cooked for 20 minutes.',
    kw: ['chicken reshmi kebab', 'reshmi kebab', 'reshmi chicken kebab recipe', 'silky chicken kebab', 'minced chicken kebab'],
    why: 'Reshmi means silk, and the name tells you what the texture should be: soft and smooth, with none of the dense chewiness of a plain minced kebab. Fat, cream and a very fine mince do the work.\n\nUse thigh mince, or chop boneless thighs fine in a food processor. Breast meat alone comes out dry. A spoonful of cashew paste and a little cream bind the mixture and keep it tender, and a piece of cold butter helps too.\n\nMixing is the key step. **Work the mixture for 2 minutes until it turns sticky and pulls away from the bowl.** That is what holds the kebabs on the skewer.\n\nChill the mixture for 30 minutes so it firms up. Wet your hands, press the mixture around oiled skewers or shape small patties, and cook over a medium-high heat for about 15 minutes, turning, until golden and just firm. Overcooking turns silk to rubber.',
    ing: [
      '500 g minced chicken thigh',
      '30 g cashew nuts, ground to a paste',
      '50 ml double cream',
      '20 g cold butter, grated',
      '1 tbsp ginger and garlic paste',
      '1 green chilli, finely chopped',
      '1/2 tsp ground cardamom',
      '1/2 tsp white pepper',
      '1 tsp salt',
      '2 tbsp chopped fresh coriander',
      '1 tbsp vegetable oil, for brushing',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the chicken, cashew paste, cream, butter, ginger and garlic paste, chilli, cardamom, pepper, salt and coriander. Work the mixture for 2 minutes until sticky.',
      'Chill for 30 minutes.',
      'With wet hands, shape the mixture around 8 oiled skewers into long kebabs, or form 12 small patties.',
      'Brush a griddle pan or frying pan with oil and cook over a medium-high heat for 15 minutes, turning every 4 minutes, until golden and cooked through.',
      'Serve with lemon wedges.'
    ],
    tips: [
      'Keep your hands wet when shaping so the mixture does not stick.',
      'If the kebabs fall off the skewer, chill the mixture a little longer.',
      'Do not press the kebabs while they cook; the juices stay in if you leave them alone.'
    ],
    pair: ['Mint chutney', 'Roomali roti or naan', 'Onion rings', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan with a little oil.',
    nut: [355, 23, 5, 27, 1, 1, 680]
  },

  'chicken-pakora': {
    d: 'Bite-size pieces of chicken coated in a spiced gram flour batter and deep-fried until crisp and golden.',
    meta: 'Chicken pakora: chicken pieces in a spiced gram flour batter, cooked in hot oil until crisp. Four servings, cooked for 15 minutes.',
    kw: ['chicken pakora', 'chicken pakora recipe', 'crispy chicken pakora', 'indian chicken pakora', 'chicken pakoda'],
    why: 'Why do some pakoras come out soggy and others stay crisp for an hour? The batter and the oil temperature. A thick batter, made with gram flour and a little rice flour, grips the chicken and fries to a crunch, while a thin batter slides off and soaks up oil.\n\nThe consistency to aim for is thick pancake batter that coats the back of a spoon. Add the water a little at a time. Whisk well to remove lumps; gram flour clumps easily.\n\nThe oil should be at 180°C. Without a thermometer, drop in a little batter: it should rise and sizzle at once. **Fry in small batches and do not crowd the pan.** Too many pieces at once cool the oil and give greasy results.\n\nCook for 5 to 6 minutes until deep golden and the chicken is cooked through. Cut one open to check. Drain on kitchen paper and serve straight away with lemon and chutney.',
    ing: [
      '500 g boneless skinless chicken thighs, cut into 3 cm pieces',
      '1 tbsp ginger and garlic paste',
      '1 tbsp lemon juice',
      '1/2 tsp salt',
      '100 g gram flour (besan)',
      '2 tbsp rice flour',
      '1 tsp ground cumin',
      '1 tsp chilli powder',
      '1/2 tsp ground turmeric',
      '1 tsp ajwain seeds',
      '1/2 tsp salt',
      '150 ml cold water',
      '150 ml vegetable oil, for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the chicken with the ginger and garlic paste, lemon juice and the first 1/2 tsp salt. Leave for 15 minutes.',
      'Whisk the gram flour, rice flour, cumin, chilli powder, turmeric, ajwain and second 1/2 tsp salt with enough water to make a thick batter. Stir in the chicken.',
      'Heat the oil in a small, deep pan to 180°C; it should be about 3 cm deep.',
      'Fry the chicken in batches, 5 to 6 minutes per batch, until deep golden and cooked through.',
      'Drain on kitchen paper and serve hot with lemon wedges.'
    ],
    tips: [
      'Add water to the batter gradually; it is easy to thin but hard to thicken.',
      'Keep the finished batches warm in a low oven while you fry the rest.',
      'Cut the largest piece open to check it is cooked before you serve.'
    ],
    pair: ['Mint chutney', 'Tamarind chutney', 'Sliced onion', 'Lemon wedges'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and crisps up again in a hot oven.',
    nut: [581, 28, 25, 41, 2, 1, 720]
  },

  'chicken-pulao': {
    d: 'Basmati rice cooked with chicken, whole spices and caramelised onion in one pot, so the grains take on the flavour of the stock.',
    meta: 'Chicken pulao: basmati rice cooked with chicken, whole spices and browned onion in one pot. Four servings, cooked for 35 minutes.',
    kw: ['chicken pulao', 'chicken pulao recipe', 'indian chicken pulao', 'chicken pilau rice', 'chicken pulao with basmati rice'],
    why: 'It looks like biryani and cooks like a risotto without the stirring, which is why pulao is the simpler dish: the rice and chicken cook together in one pot, in the same measured amount of liquid, with no layering and no separate par-boiling.\n\nThe flavour comes from the first 15 minutes. Onions cooked until deep brown, then whole spices, then the chicken browned in the same fat. Everything the pan has built up is lifted by the stock.\n\nWash the rice until the water runs nearly clear, then soak it for 20 minutes. This removes surface starch, so the grains stay separate. **Measure the liquid exactly: 1.5 parts stock to 1 part rice.** Too much water gives a mush.\n\nOnce the lid goes on, leave it alone. Cook on the lowest heat for 15 minutes, then rest off the heat for 10 minutes before fluffing with a fork. The result should be fluffy, with every grain separate and glossy.',
    ing: [
      '300 g basmati rice',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, thinly sliced',
      '2 g green cardamom pods',
      '1 g cloves',
      '3 g cinnamon stick',
      '1 bay leaf',
      '600 g chicken thighs on the bone, skinned',
      '1 tbsp ginger and garlic paste',
      '1 tsp ground cumin',
      '1 tsp salt',
      '450 ml chicken stock',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Rinse the rice in several changes of water until clear, then soak in cold water for 20 minutes. Drain.',
      'Heat the oil in a heavy pan and cook the onions for 12 minutes until deep brown. Remove half and set aside.',
      'Add the cardamom, cloves, cinnamon and bay leaf for 20 seconds, then add the chicken and cook for 5 minutes. Add the ginger and garlic paste, cumin and salt.',
      'Add the drained rice and stock. Bring to a boil, cover tightly and cook over the lowest heat for 15 minutes.',
      'Rest off the heat for 10 minutes. Fluff with a fork, scatter with the reserved onions and the coriander.'
    ],
    tips: [
      'Use a pan with a tight lid; a loose lid lets steam escape and leaves the top rice hard.',
      'Do not lift the lid during cooking.',
      'Brown the onions slowly; burnt onions turn the rice bitter.'
    ],
    pair: ['Cucumber raita', 'Mint chutney', 'Sliced onion with lemon', 'Papadums'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water until steaming hot.',
    nut: [590, 37, 70, 18, 3, 3, 1100]
  },

  'kerala-chicken-curry': {
    d: 'Chicken simmered with onion, ginger, curry leaves, coconut oil and a roasted spice blend, finished with a spoonful of coconut milk.',
    meta: 'Kerala chicken curry: chicken with onion, ginger, curry leaves and spices in coconut oil. Four servings, cooked for 40 minutes.',
    kw: ['kerala chicken curry', 'kerala style chicken curry', 'nadan chicken curry', 'kerala chicken curry recipe', 'chicken curry with coconut oil'],
    why: 'Kerala cooking leans on three things: coconut oil, curry leaves and black pepper. This curry uses all of them, and without them it is just a chicken curry.\n\nCoconut oil gives a faintly sweet, nutty base that other oils cannot copy. It is worth buying a jar for this dish. Curry leaves are fried in the hot oil at the start, and they crackle and release their scent within seconds. Dried ones are a poor substitute; leave them out rather than use stale ones.\n\n**Cook the onions until they turn golden and soft, not brown.** Kerala curries are usually milder and lighter in colour than northern ones.\n\nThe spice blend is toasted dry first for 3 minutes and then ground, which brings out the pepper heat. Add the chicken with the ground spices and tomatoes, simmer for 25 minutes, and finish with coconut milk. The sauce should coat the chicken but remain loose enough to spoon over rice.',
    ing: [
      '3 tbsp coconut oil',
      '1 tsp mustard seeds',
      '2 sprigs curry leaves',
      '2 onions, about 300 g, thinly sliced',
      '1 tbsp ginger, grated',
      '4 garlic cloves, crushed',
      '2 green chillies, slit',
      '2 tsp ground coriander',
      '1 tsp ground black pepper',
      '1/2 tsp ground turmeric',
      '1 tsp garam masala',
      '2 tomatoes, about 200 g, chopped',
      '700 g chicken thighs on the bone, skinned',
      '1 tsp salt',
      '200 ml water',
      '100 ml coconut milk'
    ],
    st: [
      'Heat the oil in a wide pan. Add the mustard seeds and, when they pop, the curry leaves.',
      'Add the onions, ginger, garlic and green chillies and cook for 10 minutes until soft and golden.',
      'Stir in the coriander, pepper, turmeric and garam masala for 1 minute. Add the tomatoes and cook for 5 minutes.',
      'Add the chicken, salt and water. Cover and simmer for 25 minutes until the chicken is tender.',
      'Stir in the coconut milk and simmer for 3 minutes.'
    ],
    tips: [
      'Stand back when the curry leaves go in; they spit.',
      'Add the coconut milk last and do not boil it hard.',
      'Black pepper gives the heat here, so grind it fresh.'
    ],
    pair: ['Kerala parotta', 'Steamed rice', 'Appam', 'Cucumber salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [407, 37, 13, 23, 3, 5, 770]
  },

  'chicken-ghee-roast': {
    d: 'Chicken cooked in ghee with a paste of dried red chillies, coriander, fenugreek and tamarind until dark, thick and clinging.',
    meta: 'Chicken ghee roast: chicken cooked in ghee with a dark red chilli and spice paste until thick. Four servings, cooked for 35 minutes.',
    kw: ['chicken ghee roast', 'mangalorean chicken ghee roast', 'ghee roast chicken', 'chicken ghee roast recipe', 'dry chicken curry with ghee'],
    why: 'A dish for a table of friends who like heat, and the one to make when the freezer has chicken and the cupboard has dried chillies. Ghee roast is from the Mangalore coast, and it is as much about the ghee as the chillies.\n\nThe paste uses Kashmiri chillies for colour, soaked in hot water and ground with coriander seeds, fenugreek, black pepper and tamarind. It looks alarmingly red. The ghee tames it, and the long frying turns it dark brick.\n\n**Fry the paste in ghee for a full 8 minutes before adding the chicken.** Pull it early and the roast tastes raw and sharp.\n\nThe chicken then cooks in the paste with only a few spoonfuls of water, so the dish ends up nearly dry, with a thick coating on each piece. Keep the heat medium and stir often towards the end, because the sugar in the tamarind can catch. A final spoonful of ghee gives the glossy finish.',
    ing: [
      '# Paste',
      '8 dried Kashmiri chillies, soaked in hot water for 15 minutes',
      '1 tbsp coriander seeds',
      '1 tsp cumin seeds',
      '1/2 tsp fenugreek seeds',
      '1 tsp black peppercorns',
      '5 garlic cloves',
      '1 tbsp tamarind paste',
      '# Roast',
      '4 tbsp ghee, plus 1 tbsp to finish',
      '1 sprig curry leaves',
      '700 g chicken thighs on the bone, skinned',
      '1 tsp salt',
      '1 tsp sugar',
      '3 tbsp water',
      '1 tbsp plain yoghurt'
    ],
    st: [
      'Toast the coriander, cumin, fenugreek and peppercorns in a dry pan for 2 minutes. Grind with the drained chillies, garlic and tamarind to a smooth paste.',
      'Heat the 4 tbsp ghee in a wide pan. Add the curry leaves, then the paste, and fry for 8 minutes over a medium heat until dark and the ghee separates.',
      'Add the chicken, salt, sugar and water. Stir to coat, cover and cook for 20 minutes, stirring now and then.',
      'Stir in the yoghurt and cook uncovered for 5 minutes until the coating is thick and dark.',
      'Stir in the final tablespoon of ghee.'
    ],
    tips: [
      'Wear gloves to handle the soaked chillies.',
      'Keep the heat at medium; high heat scorches the paste.',
      'Serve with something cooling, because this is a hot dish.'
    ],
    pair: ['Neer dosa or plain dosa', 'Steamed rice', 'Raita', 'Sliced cucumber'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan with a teaspoon of ghee.',
    nut: [379, 36, 7, 23, 1, 4, 750]
  },

  'chicken-sukka': {
    d: 'A dry-style coastal chicken dish coated in a roasted coconut and spice masala, stirred until little liquid remains.',
    meta: 'Chicken sukka: chicken in a dry roasted coconut and spice masala, cooked until the sauce clings. Four servings, cooked for 30 minutes.',
    kw: ['chicken sukka', 'mangalorean chicken sukka', 'chicken sukka recipe', 'dry chicken curry', 'kori sukka'],
    why: 'It looks like a curry that ran out of sauce, and that is the point. Sukka means dry, and the dish is cooked until the masala forms a thick, clinging coating on each piece of chicken, with no gravy to spoon.\n\nWhere a curry is judged by its sauce, sukka is judged by its coating. The masala is built from coconut, dried red chillies, coriander seeds, cumin, pepper and fenugreek, all roasted until deep brown. The roasting is the flavour, and it needs your full attention for the 5 minutes it takes.\n\n**Stir constantly while roasting.** Spices go from toasted to burnt in seconds, and coconut browns unevenly if left to sit.\n\nThe chicken is cooked in a little water until nearly done, then the roasted masala is added and everything is stirred over the heat until the moisture is gone. A squeeze of lemon at the end brightens the dark, earthy flavours.',
    ing: [
      '# Masala',
      '4 tbsp desiccated coconut',
      '6 dried red chillies',
      '1 tbsp coriander seeds',
      '1 tsp cumin seeds',
      '1 tsp black peppercorns',
      '1/2 tsp fenugreek seeds',
      '1/2 tsp ground turmeric',
      '# Chicken',
      '3 tbsp coconut oil',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '1 sprig curry leaves',
      '700 g boneless chicken thighs, cut into 4 cm pieces',
      '1 tsp salt',
      '100 ml water',
      '1 tbsp lemon juice'
    ],
    st: [
      'Dry-roast the coconut, chillies, coriander, cumin, peppercorns and fenugreek in a pan for 5 minutes, stirring constantly, until deep brown. Grind coarsely with the turmeric.',
      'Heat the oil in a wide pan. Add the curry leaves and onion and cook for 6 minutes until golden. Add the ginger and garlic paste for 1 minute.',
      'Add the chicken, salt and water. Cover and cook for 12 minutes until almost cooked through.',
      'Add the ground masala and stir over a medium heat for 8 minutes until the moisture has gone and the masala clings to the chicken.',
      'Finish with the lemon juice.'
    ],
    tips: [
      'Roast the spices over a low to medium heat so they colour evenly.',
      'Add a spoonful of water if the masala starts to stick before the chicken is ready.',
      'Grind the masala coarsely for the right texture on the chicken.'
    ],
    pair: ['Neer dosa', 'Plain rice and dal', 'Sliced onion with lemon', 'Papadums'],
    store: 'Keeps in the fridge for 2 days. Reheat in a dry pan.',
    nut: [440, 37, 10, 28, 4, 4, 760]
  },

  'chicken-cafreal': {
    d: 'Chicken marinated in a bright green paste of coriander, green chillies, garlic and spices, then pan-cooked until the paste turns into a dry, fragrant coating.',
    meta: 'Chicken cafreal: chicken in a green coriander, chilli and garlic paste, pan-cooked until dry and fragrant. Four servings, cooked for 30 minutes.',
    kw: ['chicken cafreal', 'goan chicken cafreal', 'chicken cafreal recipe', 'green masala chicken', 'cafreal chicken'],
    why: 'Salt the paste, not the chicken, and leave it for half an hour; everything else in the recipe depends on what that green paste has to do. Cafreal paste is made from a large bunch of fresh coriander, green chillies, garlic, ginger, cumin and a little vinegar, and it works as both marinade and sauce.\n\nBlend it smooth with just enough vinegar to move the blades. A watery paste gives a boiled chicken. A thick one fries into a coating.\n\nThe colour is the thing to protect. **Cook over a medium heat and do not cover for long.** High heat and long cooking turn the paste from bright green to a dull khaki, though the flavour stays good.\n\nSkin-on pieces on the bone stay juiciest. Cook them for 30 minutes in total, turning, until the paste has dried to a coating and the chicken is cooked through. Some cooks finish the pieces under the grill for a little char, which suits this dish well.',
    ing: [
      '# Green paste',
      '1 large bunch fresh coriander, about 80 g',
      '4 green chillies',
      '6 garlic cloves',
      '2 tbsp ginger, chopped',
      '1 tsp ground cumin',
      '1/2 tsp ground black pepper',
      '3 tbsp white wine vinegar',
      '1 tsp salt',
      '# Chicken',
      '800 g chicken thighs and drumsticks on the bone, skin on',
      '3 tbsp vegetable oil',
      '1 lime, cut into wedges'
    ],
    st: [
      'Blend the coriander, chillies, garlic, ginger, cumin, pepper, vinegar and salt to a thick, smooth paste.',
      'Slash the chicken pieces twice with a knife, rub with the paste and leave for 30 minutes.',
      'Heat the oil in a wide pan over a medium heat. Add the chicken, skin-side down, with all the paste.',
      'Cook for 30 minutes, turning every 8 minutes, until the chicken is cooked through and the paste has dried to a coating.',
      'Serve with lime wedges.'
    ],
    tips: [
      'Keep the heat at medium so the paste fries instead of burning.',
      'Use the tender coriander stalks as well as the leaves; they carry plenty of flavour.',
      'Check a thick piece is cooked by cutting into it; the juices should run clear.'
    ],
    pair: ['Pao or soft bread rolls', 'Steamed rice', 'Sliced onion salad', 'Chips or fried potatoes'],
    store: 'Keeps in the fridge for 2 days. Reheat in a pan or a hot oven.',
    nut: [368, 41, 6, 20, 1, 1, 780]
  },

  'chicken-rezala': {
    d: 'A white Bengali-style chicken curry of yoghurt, poppy seed and cashew paste with whole spices, mild, aromatic and pale.',
    meta: 'Chicken rezala: chicken in a pale yoghurt, poppy seed and cashew sauce with whole spices. Four servings, cooked for 40 minutes.',
    kw: ['chicken rezala', 'bengali chicken rezala', 'chicken rezala recipe', 'white chicken curry', 'kolkata chicken rezala'],
    why: 'Most home versions of this white curry come out grey or grainy, and the fix is to keep the heat low and the paste very smooth. Rezala is made without turmeric or chilli powder, so the colour of the sauce depends entirely on what you do not brown.\n\nCook the onions in ghee on a gentle heat, just until translucent. Colour here is a fault. Blend the cashews and poppy seeds with a little water until completely smooth; a sieve afterwards makes sure.\n\nWhisked yoghurt goes into the pan with the chicken and the whole spices, with cardamom, cloves, cinnamon and green chillies giving the heat. **Stir the yoghurt in gradually and keep the pan at a low simmer.** A hard boil splits it into curds.\n\nAfter 30 minutes the chicken is tender and the sauce coats a spoon. A few drops of kewra water at the end, if you have it, gives the floral note the dish is known for. Rose water works in tiny amounts.',
    ing: [
      '3 tbsp ghee',
      '2 g green cardamom pods',
      '1 g cloves',
      '3 g cinnamon stick',
      '2 onions, about 300 g, thinly sliced',
      '1 tbsp ginger and garlic paste',
      '700 g chicken thighs on the bone, skinned',
      '200 g plain yoghurt, whisked smooth',
      '30 g cashew nuts',
      '1 tbsp white poppy seeds',
      '3 green chillies, slit',
      '1 tsp white pepper',
      '1 tsp salt',
      '1 tsp sugar',
      '200 ml water',
      '1/2 tsp kewra water'
    ],
    st: [
      'Soak the cashews and poppy seeds in hot water for 15 minutes, then blend with 3 tablespoons of water to a smooth paste.',
      'Heat the ghee in a heavy pan. Add the cardamom, cloves and cinnamon for 20 seconds, then the onions. Cook over a low heat for 8 minutes until soft but not coloured.',
      'Add the ginger and garlic paste and the chicken. Cook for 5 minutes, turning, without browning.',
      'Add the yoghurt a spoonful at a time, then the nut paste, chillies, pepper, salt, sugar and water.',
      'Cover and simmer very gently for 25 minutes until the chicken is tender and the sauce is thick. Stir in the kewra water.'
    ],
    tips: [
      'Use white pepper and white poppy seeds, not black, to keep the sauce pale.',
      'Do not let the sauce boil hard.',
      'Add the kewra water off the heat so the scent is not lost.'
    ],
    pair: ['Plain pulao', 'Luchi or naan', 'Cucumber salad', 'Mint chutney'],
    store: 'Keeps in the fridge for 2 days. Reheat gently over a low heat.',
    nut: [457, 43, 15, 25, 3, 7, 770]
  },

  'lamb-keema': {
    d: 'Minced lamb cooked with onion, ginger, garlic, tomato and ground spices into a dry, savoury mince curry.',
    meta: 'Lamb keema: minced lamb cooked with onion, tomato, ginger, garlic and ground spices. Four servings, cooked for 35 minutes.',
    kw: ['lamb keema', 'lamb keema recipe', 'minced lamb curry', 'keema curry', 'indian lamb mince'],
    why: 'Lamb mince, onions, tomatoes, ginger, garlic: five things from the shops, and half an hour. Keema is the curry to make on a weeknight, and it is better than it has any right to be for the effort.\n\nBrown the mince properly. Press it flat against the base of a hot pan and leave it for 2 minutes before stirring, so it fries rather than steams. **Break it into small pieces as it cooks.** Big lumps make a heavy, coarse curry.\n\nThe fat that comes out of lamb is flavour, and a little of it should stay in the pan to fry the onions and spices. Skim only if there is a lot.\n\nOnce the spices are in, add the tomatoes and let them cook down until the oil comes back to the surface. Add a splash of water, cover, and simmer for 15 minutes. Finish with garam masala and fresh coriander. The dish should be moist but not wet.',
    ing: [
      '2 tbsp vegetable oil',
      '500 g minced lamb',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger, grated',
      '4 garlic cloves, crushed',
      '1 tsp ground cumin',
      '2 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '3 tomatoes, about 300 g, chopped',
      '1 tsp salt',
      '100 ml water',
      '1 tsp garam masala',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a wide pan over a high heat. Add the lamb, press flat and cook for 2 minutes before stirring. Break up and cook for 8 minutes until browned.',
      'Add the onions and cook for 8 minutes until soft and golden.',
      'Add the ginger, garlic and spices and stir for 1 minute. Add the tomatoes and salt and cook for 5 minutes until thick.',
      'Add the water, cover and simmer for 15 minutes.',
      'Stir in the garam masala and fresh coriander.'
    ],
    tips: [
      'Do not stir the mince constantly at first; let it brown.',
      'If the mince is very fatty, spoon off some of the fat before adding the onions.',
      'Add frozen peas for the last 5 minutes if you like.'
    ],
    pair: ['Chapati or naan', 'Basmati rice', 'Cucumber raita', 'Lemon wedges'],
    store: 'Keeps in the fridge for 3 days and freezes well for up to 3 months. Reheat until steaming hot.',
    nut: [441, 23, 13, 33, 3, 5, 700]
  },

  'lamb-korma': {
    d: 'Diced lamb simmered slowly in a creamy sauce of yoghurt, almonds, onion and mild spices until the meat is tender.',
    meta: 'Lamb korma: diced lamb simmered in a creamy yoghurt and almond sauce with mild spices. Four servings, cooked for 75 minutes.',
    kw: ['lamb korma', 'lamb korma recipe', 'creamy lamb korma', 'mild lamb curry', 'indian lamb korma'],
    why: 'Salt the lamb and leave it in the yoghurt for half an hour; that is the single most useful instruction in the recipe. The yoghurt tenderises the meat gently, and the lamb arrives at the pan already seasoned.\n\nKorma is a mild, creamy dish, and the sauce depends on three things: onions cooked slowly without colouring, ground almonds for body, and yoghurt added gradually. Rush any of them and the sauce turns thin, coloured or curdled.\n\n**Brown the lamb lightly in batches before it joins the sauce.** Crowding the pan makes it steam, and the sauce loses the savoury edge that browning gives.\n\nShoulder is the best cut. It has enough fat and connective tissue to turn soft and silky in 75 minutes, while leg dries out. Keep the pan at a very gentle simmer with the lid on. The dish is ready when a piece of lamb falls apart under a spoon and the sauce has thickened to coat the back of it.',
    ing: [
      '700 g lamb shoulder, cut into 3 cm cubes',
      '150 g plain yoghurt',
      '1 tsp salt',
      '3 tbsp ghee or vegetable oil',
      '2 onions, about 300 g, thinly sliced',
      '1 tbsp ginger and garlic paste',
      '2 g green cardamom pods',
      '1 g cloves',
      '3 g cinnamon stick',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp chilli powder',
      '50 g ground almonds',
      '300 ml water',
      '50 ml double cream',
      '1 tsp garam masala'
    ],
    st: [
      'Mix the lamb with the yoghurt and salt and leave for 30 minutes.',
      'Heat the ghee in a heavy pan. Cook the onions for 10 minutes until soft and just starting to colour. Add the whole spices and the ginger and garlic paste and cook for 1 minute.',
      'Add the lamb with its marinade and the ground coriander, cumin and chilli. Cook for 8 minutes, stirring.',
      'Add the almonds and water. Cover and simmer very gently for 60 minutes until the lamb is tender.',
      'Stir in the cream and garam masala and simmer for 2 minutes.'
    ],
    tips: [
      'Keep the heat low once the yoghurt is in.',
      'Add a splash of water if the sauce thickens too much before the lamb is tender.',
      'Toasted flaked almonds on top look good and add texture.'
    ],
    pair: ['Pilau rice', 'Naan', 'Cucumber raita', 'Mango chutney'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 2 months. Reheat gently.',
    nut: [721, 38, 14, 57, 4, 6, 740]
  },

  'lamb-dopiaza': {
    d: 'Diced lamb cooked with onions twice: first browned into the sauce, then added again in chunks near the end.',
    meta: 'Lamb dopiaza: diced lamb with onion cooked two ways, browned into the sauce and added in chunks. Four servings, cooked for 80 minutes.',
    kw: ['lamb dopiaza', 'lamb dopiaza recipe', 'dopiaza curry', 'lamb curry with onions', 'indian lamb dopiaza'],
    why: 'It looks like an ordinary lamb curry and tastes of onions in two distinct ways. Dopiaza means two onions, and the name describes the method: part of the onion is cooked down into the sauce, and part is added later in thick pieces that keep their bite.\n\nThe first half goes into the pan thinly sliced and is cooked until deep brown, about 12 minutes. That gives the sauce its sweetness and colour. The second half is cut into wedges and stirred in for the last 10 minutes, so it softens but still has texture.\n\n**Do not skip the long browning of the first onions.** Pale onions give a thin, sharp sauce.\n\nLamb shoulder suits the long cook and stays tender. Simmer with the lid on for 60 minutes, until the meat is soft. Then add the onion wedges and cook uncovered so the sauce reduces. A little garam masala and coriander at the end finish it.',
    ing: [
      '700 g lamb shoulder, cut into 3 cm cubes',
      '3 tbsp vegetable oil',
      '3 onions, about 450 g: 2 thinly sliced, 1 cut into wedges',
      '1 tbsp ginger and garlic paste',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp salt',
      '300 ml water',
      '1 tsp garam masala',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a heavy pan. Add the sliced onions and cook for 12 minutes until deep brown.',
      'Add the ginger and garlic paste and cook for 1 minute. Add the lamb and spices and cook for 8 minutes, stirring, until the lamb is coloured.',
      'Add the tomatoes, salt and water. Cover and simmer gently for 60 minutes until the lamb is tender.',
      'Add the onion wedges and cook uncovered for 10 minutes until they have softened but still hold their shape.',
      'Stir in the garam masala and fresh coriander.'
    ],
    tips: [
      'Cut the wedges thick; thin ones disappear into the sauce.',
      'Stir only now and then once the lid is on.',
      'If the sauce is thin at the end, simmer uncovered for a few more minutes.'
    ],
    pair: ['Basmati rice', 'Naan', 'Cucumber raita', 'Sliced green chillies'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 2 months.',
    nut: [602, 32, 15, 46, 3, 6, 730]
  },

  'lamb-pasanda': {
    d: 'Thin slices or small pieces of lamb cooked in a mild, creamy sauce of yoghurt, ground almonds and cardamom.',
    meta: 'Lamb pasanda: tender lamb in a mild creamy sauce of yoghurt, ground almonds and cardamom. Four servings, cooked for 75 minutes.',
    kw: ['lamb pasanda', 'lamb pasanda recipe', 'pasanda curry', 'mild creamy lamb curry', 'indian lamb pasanda'],
    why: 'A dish for a special dinner for four, and the one most likely to be ordered by people who do not like heat. Pasanda is mild, rich and gently sweet, with cardamom and almonds giving a fragrance more than a spice.\n\nThe name refers to the meat: pasanda is traditionally the most tender cut, sliced thin and beaten flat. At home, lamb leg steaks or shoulder cut into small, thin pieces work well. Cut across the grain so the pieces are tender.\n\nMarinate the lamb in yoghurt, ginger and garlic for 30 minutes. This is not a long marinade, but it is enough to season the meat and start the tenderising. **Cook the onions slowly, with no colour.** A pale sauce is the aim, and browned onions turn it tan.\n\nGround almonds thicken the sauce and add a nutty sweetness. Simmer covered for 60 minutes until the lamb is tender, and stir in cream at the end. Sugar is optional; taste first.',
    ing: [
      '700 g lamb leg or shoulder, cut into thin 3 cm pieces',
      '150 g plain yoghurt',
      '1 tbsp ginger and garlic paste',
      '1 tsp salt',
      '3 tbsp ghee',
      '2 onions, about 300 g, finely chopped',
      '2 g green cardamom pods, crushed',
      '3 g cinnamon stick',
      '2 tsp ground coriander',
      '1 tsp ground cumin',
      '60 g ground almonds',
      '300 ml water',
      '100 ml double cream',
      '1 tsp sugar',
      '1 tbsp flaked almonds, toasted'
    ],
    st: [
      'Mix the lamb with the yoghurt, ginger and garlic paste and salt. Leave for 30 minutes.',
      'Heat the ghee in a heavy pan. Add the cardamom and cinnamon for 20 seconds, then the onions. Cook over a low heat for 10 minutes until soft but not coloured.',
      'Add the lamb with its marinade, coriander and cumin. Cook for 8 minutes, stirring.',
      'Add the ground almonds and water. Cover and simmer very gently for 60 minutes until tender.',
      'Stir in the cream and sugar and simmer for 2 minutes. Scatter with the toasted almonds.'
    ],
    tips: [
      'Cut the lamb across the grain for the most tender result.',
      'Taste before adding sugar; the almonds are already sweet.',
      'Keep the lid on so the lamb stays moist.'
    ],
    pair: ['Pilau rice', 'Peshwari naan', 'Mango chutney', 'Cucumber raita'],
    store: 'Keeps in the fridge for 3 days. Reheat gently over a low heat.',
    nut: [654, 44, 16, 46, 4, 7, 740]
  },

  'lamb-shami-kebab': {
    d: 'Soft patties of minced lamb and split chickpeas with whole spices, shaped by hand and shallow-fried until crusty outside.',
    meta: 'Lamb shami kebab: spiced minced lamb and chana dal patties, shallow-fried until crisp. Six servings, cooked for 20 minutes.',
    kw: ['lamb shami kebab', 'shami kebab', 'shami kebab recipe', 'lamb and lentil kebab', 'pakistani shami kebab'],
    why: 'A Sunday dish for a table of six, and one that rewards patience in the first half hour. The mince and chana dal are cooked together with whole spices until the pot is almost dry, then ground to a paste that is smooth enough to hold a shape.\n\nThe dal is what binds the kebab. Split chickpeas (chana dal) soften in the pan along with the lamb, and when blended they give the patties their soft, slightly crumbly texture. Without them the kebabs would be firm and dense.\n\n**The mixture must be dry before it is ground.** Cook off every trace of liquid, or the patties will fall apart in the pan. Chopped onion, green chilli, mint and coriander are folded in after grinding. That keeps them fresh and crunchy against the soft base.\n\nChill the patties for 30 minutes, then shallow-fry for 4 minutes a side in a little oil until a dark crust forms. Handle them gently when turning.',
    ing: [
      '250 g minced lamb',
      '100 g chana dal, soaked for 2 hours and drained',
      '1 onion, about 150 g, roughly chopped',
      '1 tbsp ginger and garlic paste',
      '4 dried red chillies',
      '1 tsp cumin seeds',
      '1 g cloves',
      '2 g green cardamom pods',
      '3 g cinnamon stick',
      '1 tsp salt',
      '400 ml water',
      '1 onion, about 100 g, finely chopped',
      '2 green chillies, finely chopped',
      '2 tbsp chopped fresh mint',
      '2 tbsp chopped fresh coriander',
      '1 egg',
      '4 tbsp vegetable oil, for frying'
    ],
    st: [
      'Put the lamb, chana dal, roughly chopped onion, ginger and garlic paste, dried chillies, cumin, cloves, cardamom, cinnamon, salt and water in a pan. Bring to the boil, cover and simmer for 40 minutes until the dal is soft.',
      'Uncover and cook for 10 minutes, stirring, until no liquid remains. Remove the cinnamon stick, cool for 10 minutes, then grind to a smooth, thick paste.',
      'Fold in the chopped onion, green chillies, mint, coriander and egg.',
      'Chill the mixture for 30 minutes, then shape into 12 patties with wet hands.',
      'Heat the oil in a frying pan over a medium heat and cook the patties for 4 minutes on each side, until deep brown and crisp.'
    ],
    tips: [
      'Test the mixture by rolling a ball; if it cracks, add a spoonful of water.',
      'Handle the patties gently when they are in the pan.',
      'Freeze the shaped, uncooked patties for up to 1 month and fry from frozen.'
    ],
    pair: ['Mint chutney', 'Sliced onion with lemon', 'Naan', 'Raita'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan with a little oil.',
    nut: [296, 13, 16, 20, 4, 3, 450],
    rest: [150, 'Soaking the dal and chilling the mixture']
  },

  'tandoori-lamb-chops': {
    d: 'Lamb chops marinated in yoghurt, ginger, garlic and tandoori spices, then cooked hot and fast until charred outside and pink inside.',
    meta: 'Tandoori lamb chops: lamb chops in a yoghurt and spice marinade, cooked hot until charred. Four servings, cooked for 15 minutes.',
    kw: ['tandoori lamb chops', 'lamb chops tandoori', 'tandoori lamb chops recipe', 'indian lamb chops', 'spiced yoghurt lamb chops'],
    why: 'Salt the chops and leave them in the yoghurt for at least an hour; that is the instruction everything else rests on. The marinade tenderises and seasons, and the thick coating chars at the edges under high heat.\n\nTandoori flavour comes from a mix: Kashmiri chilli for colour, garam masala, cumin, coriander, ginger, garlic and lemon juice. Mustard oil gives a sharp edge in some versions; plain oil works well too. Do not scrape the marinade off before cooking. The thick coating is what turns black and sweet.\n\nA home oven at its highest setting, or a very hot grill, comes closest to a tandoor. **Preheat the tray so the chops sizzle when they land.** That gives a crust in the first minutes.\n\nCook for 12 to 15 minutes, turning once, for chops that are still pink in the middle. Rest them for 5 minutes under foil, then squeeze over lemon.',
    ing: [
      '8 lamb chops, about 800 g',
      '150 g plain yoghurt',
      '1 tbsp ginger and garlic paste',
      '2 tbsp lemon juice',
      '1 tbsp Kashmiri chilli powder',
      '1 tsp garam masala',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 lemon, cut into wedges',
      '1 red onion, sliced'
    ],
    st: [
      'Mix the yoghurt, ginger and garlic paste, lemon juice, spices, salt and oil. Coat the chops well and refrigerate for at least 1 hour, or up to 8 hours.',
      'Heat the oven to 240°C (220°C fan) and put a baking tray in to heat.',
      'Lay the chops on the hot tray, leaving gaps between them.',
      'Roast for 12 to 15 minutes, turning once, until charred at the edges and pink in the middle.',
      'Rest under foil for 5 minutes. Serve with lemon wedges and sliced onion.'
    ],
    tips: [
      'Take the chops out of the fridge 20 minutes before cooking.',
      'Use the grill setting for more char, watching closely.',
      'Cook for a few minutes longer if you prefer lamb well done.'
    ],
    pair: ['Mint chutney', 'Naan', 'Onion and lemon salad', 'Jeera rice'],
    store: 'Best eaten straight away. Keeps in the fridge for 2 days; eat cold or reheat briefly.',
    nut: [710, 39, 8, 58, 2, 3, 770],
    rest: [60, 'Marinating']
  },

  'mutton-biryani': {
    d: 'Layers of spiced mutton and part-cooked basmati rice with fried onions, mint and saffron milk, sealed and cooked slowly in the pot.',
    meta: 'Mutton biryani: spiced mutton layered with basmati rice, fried onions, mint and saffron, then steamed in the pot. Six servings, cooked for 90 minutes.',
    kw: ['mutton biryani', 'mutton biryani recipe', 'goat biryani', 'lamb biryani', 'dum mutton biryani'],
    why: 'Why does biryani take so long? Because it is two dishes cooked separately and then finished together: a spiced meat curry and a pot of rice cooked just short of done, brought together by steam.\n\nThe mutton comes first. Marinate it in yoghurt and spices for an hour, then cook it until tender in its own juices. Goat is traditional, and mature lamb or hogget is the nearest alternative. Whichever you use, the meat should be soft but not falling apart, since it still has time in the oven.\n\nThe rice is par-boiled in salted water with whole spices until it is 70 per cent cooked. **Drain it while it still has a firm bite in the middle.** It will finish cooking in steam, and overcooked rice turns to paste.\n\nThen layer: meat, rice, fried onion, mint, saffron milk. Seal the pot with foil and a tight lid, and cook on the lowest heat for 25 minutes. Rest, then dig down to the bottom so every portion has all the layers.',
    ing: [
      '# Mutton',
      '800 g mutton or lamb shoulder, cut into 4 cm pieces',
      '200 g plain yoghurt',
      '2 tbsp ginger and garlic paste',
      '2 tsp chilli powder',
      '1 tsp ground turmeric',
      '2 tsp garam masala',
      '1 tsp salt',
      '4 tbsp ghee',
      '3 onions, about 450 g, thinly sliced',
      '# Rice',
      '400 g basmati rice',
      '1 tbsp salt',
      '2 g green cardamom pods',
      '1 g cloves',
      '3 g cinnamon stick',
      '1 bay leaf',
      '# Layers',
      '50 ml hot milk',
      '1 pinch saffron strands',
      '1 handful fresh mint leaves',
      '1 handful fresh coriander'
    ],
    st: [
      'Mix the mutton with the yoghurt, ginger and garlic paste, chilli, turmeric, garam masala and salt. Leave for 1 hour.',
      'Heat the ghee in a large heavy pot and fry the onions for 15 minutes until deep brown. Take out half and set aside.',
      'Add the mutton and marinade to the pot. Cover and cook over a low heat for 60 minutes, until the mutton is tender and the sauce is thick.',
      'Meanwhile, soak the rice in cold water for 30 minutes, then drain. Boil in plenty of salted water with the whole spices for 5 minutes, until 70 per cent cooked. Drain.',
      'Soak the saffron in the hot milk. Spread the rice over the mutton, then scatter with the reserved onions, mint and coriander. Drizzle over the saffron milk.',
      'Cover with foil and a tight lid. Cook over the lowest heat for 25 minutes. Rest for 10 minutes before serving.'
    ],
    tips: [
      'Use a heavy pot, or put a tawa under the pot, to stop the base catching.',
      'Do not stir the layers; spoon from the side down to the bottom.',
      'Check the rice is nearly done before draining: a grain should snap rather than crush.'
    ],
    pair: ['Cucumber raita', 'Mirchi ka salan', 'Sliced onion with lemon', 'Boiled eggs'],
    store: 'Keeps in the fridge for 2 days. Reheat with a splash of water in a covered pan.',
    nut: [730, 32, 65, 38, 3, 5, 1700],
    rest: [90, 'Marinating and soaking the rice']
  },

  'kerala-beef-curry': {
    d: 'Beef simmered slowly with onion, coconut slices, black pepper and a roasted spice blend in coconut oil until soft and dark.',
    meta: 'Kerala beef curry: beef simmered with onion, black pepper and roasted spices in coconut oil. Four servings, cooked for 90 minutes.',
    kw: ['kerala beef curry', 'kerala style beef curry', 'beef curry with coconut oil', 'nadan beef curry', 'kerala beef curry recipe'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Beef shin, chuck or brisket cooked slowly in a little liquid turns soft and gives the sauce its body, while fast boiling leaves it tough.\n\nThe flavour starts with coconut oil, curry leaves, shallots or onions, ginger and garlic. Black pepper does the heat here, not chilli, and the dish is spiced with coriander, fennel and a touch of turmeric. Toast the whole spices first and grind them, or buy a good meat masala.\n\n**Brown the onions until they are quite dark.** In a long-cooked curry, their sweetness is what balances the pepper.\n\nThe beef cooks in just enough water to keep it moist, covered, for about 90 minutes. Check it after an hour and add a splash of water if the pan looks dry. When the beef is tender and the sauce has reduced to a thick coating, add the coconut slices or a spoonful of coconut milk.',
    ing: [
      '3 tbsp coconut oil',
      '1 tsp mustard seeds',
      '2 sprigs curry leaves',
      '2 onions, about 300 g, thinly sliced',
      '1 tbsp ginger, grated',
      '5 garlic cloves, crushed',
      '700 g beef shin or chuck, cut into 3 cm cubes',
      '2 tsp ground coriander',
      '1 tsp ground fennel',
      '1 tsp ground black pepper',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp salt',
      '250 ml water',
      '2 tbsp coconut slices or 3 tbsp coconut milk'
    ],
    st: [
      'Heat the oil in a heavy pan. Add the mustard seeds and curry leaves until they crackle.',
      'Add the onions, ginger and garlic and cook for 12 minutes until deep golden brown.',
      'Add the spices and stir for 1 minute. Add the beef and salt and stir to coat.',
      'Add the water, cover and simmer very gently for 90 minutes, stirring now and then, until the beef is tender.',
      'Uncover, add the coconut and cook for 10 minutes to thicken the sauce.'
    ],
    tips: [
      'Check the water level after an hour and top up with a splash if the pan looks dry.',
      'Cut the beef into even pieces so they cook at the same speed.',
      'The curry tastes better the next day.'
    ],
    pair: ['Kerala parotta', 'Steamed rice', 'Appam', 'Sliced onion with lemon'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [503, 36, 11, 35, 2, 3, 730]
  },

  'beef-ularthiyathu': {
    d: 'Kerala-style dry-roasted beef, simmered until tender then stir-fried with coconut slices, curry leaves and black pepper until dark and glossy.',
    meta: 'Beef ularthiyathu: Kerala dry-roasted beef with coconut slices, curry leaves and pepper. Four servings, cooked for 90 minutes.',
    kw: ['beef ularthiyathu', 'kerala beef ularthiyathu', 'beef ularthiyathu recipe', 'kerala beef fry', 'beef roast kerala style'],
    why: 'Ularthiyathu means dry-roasted, and the way to cook it is in two stages: first simmer the beef until tender, then fry it with coconut and spices until nearly all the liquid has gone. Skip the first stage and the meat is tough; skip the second and the dish is just a stew.\n\nThe first stage is simple. Cook the beef with turmeric, chilli, coriander, black pepper and salt in a pan with a lid, for about 60 minutes, until a piece can be cut with a spoon. Use a heavy pan, and add only a splash of water.\n\nFor the second stage, heat coconut oil and fry thin slices of coconut with shallots, curry leaves, ginger and garlic. **Add the beef and fry until the pieces turn deep brown and the oil comes out.** This takes 25 minutes of patient stirring.\n\nThe finish is black pepper and a few curry leaves. The result is dry and dark, with crisp coconut slices through it, and it is best eaten with something soft to soak up the heat.',
    ing: [
      '# Simmering the beef',
      '700 g beef chuck, cut into 3 cm cubes',
      '1 tsp ground turmeric',
      '1 tsp chilli powder',
      '2 tsp ground coriander',
      '1 tsp ground black pepper',
      '1 tsp salt',
      '100 ml water',
      '# Frying',
      '4 tbsp coconut oil',
      '40 g desiccated coconut or thick coconut flakes',
      '8 shallots, about 120 g, sliced',
      '2 tbsp ginger, sliced into thin strips',
      '5 garlic cloves, sliced',
      '2 sprigs curry leaves',
      '1 tsp ground black pepper',
      '1 tsp garam masala'
    ],
    st: [
      'Put the beef, turmeric, chilli, coriander, first measure of pepper, salt and water in a heavy pan. Cover and simmer for 60 minutes until the beef is tender and most of the liquid has gone.',
      'Heat the coconut oil in a wide pan. Add the coconut slices and fry for 2 minutes until golden, then remove.',
      'Add the shallots, ginger and garlic to the same oil and cook for 8 minutes until browned. Add the curry leaves.',
      'Add the cooked beef and fry over a medium heat for 25 minutes, stirring often, until dark brown and dry.',
      'Stir in the second measure of pepper, the garam masala and the fried coconut.'
    ],
    tips: [
      'Stir frequently in the last 10 minutes so the beef does not catch.',
      'The beef should look nearly black; that is the flavour, not burning.',
      'Cut the coconut slices thin so they crisp rather than chew.'
    ],
    pair: ['Kerala parotta', 'Steamed rice', 'Sliced onion with lemon', 'Boiled tapioca'],
    store: 'Keeps in the fridge for 4 days. Reheat in a dry pan.',
    nut: [579, 36, 12, 43, 4, 3, 720]
  }
};
