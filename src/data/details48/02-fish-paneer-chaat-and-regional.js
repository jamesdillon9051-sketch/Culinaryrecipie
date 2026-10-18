'use strict';

/**
 * Volume forty-eight — Indian restaurant and regional favourites, second part.
 *
 * Twenty-five dishes: beef vindaloo, Goan and Kerala fish and prawn curries,
 * fish and paneer pakoras, crab masala, paneer curries, kala chana, aloo
 * baingan and aloo palak, three street-food chaats, moong dal kachori,
 * khandvi, methi thepla, undhiyu, handvo, rava dosa, avial and Kerala
 * parotta. Times are the recipe's own; waits of an hour or more are declared
 * as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'beef-vindaloo': {
    d: 'Beef cooked slowly in a sharp, hot paste of dried chillies, vinegar, garlic and whole spices until the sauce is thick and dark.',
    meta: 'Beef vindaloo: beef simmered in a hot paste of dried chillies, vinegar, garlic and whole spices. Six servings, cooked for 90 minutes.',
    kw: ['beef vindaloo', 'beef vindaloo recipe', 'authentic beef vindaloo', 'goan beef vindaloo', 'hot beef curry'],
    why: 'Autumn is when this earns its place: a pot on the back of the hob for an hour and a half, the kitchen smelling of chillies and vinegar. A vindaloo is not simply the hottest thing on the menu. It is a sour, garlicky curry in which the heat is one note among several.\n\nThe sourness comes from vinegar, and it does two jobs. It tenderises the beef during the marinade, and it gives the sauce a sharp edge that cuts through the richness. Use malt or white wine vinegar, and do not substitute lemon juice, which tastes different when cooked.\n\n**Grind the dried chillies, garlic and spices into a smooth paste before marinating.** A coarse paste gives a gritty sauce and uneven heat.\n\nMarinate the beef for 1 hour, then brown it in oil with the onions. Cook with the lid on for 90 minutes over a low heat, stirring now and then. The beef is ready when it breaks under a spoon, and the sauce coats it thickly. Potatoes can go in for the last 30 minutes.',
    ing: [
      '# Paste',
      '8 dried Kashmiri chillies, soaked in hot water for 15 minutes',
      '6 garlic cloves',
      '2 tbsp ginger, chopped',
      '1 tsp cumin seeds',
      '1 tsp mustard seeds',
      '1 tsp black peppercorns',
      '3 g cinnamon stick',
      '1 g cloves',
      '4 tbsp malt vinegar',
      '1 tsp ground turmeric',
      '# Curry',
      '900 g beef chuck, cut into 3 cm cubes',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, finely chopped',
      '1 tsp sugar',
      '1 tsp salt',
      '350 ml water',
      '300 g potatoes, peeled and cut into 3 cm chunks'
    ],
    st: [
      'Grind the drained chillies, garlic, ginger, cumin, mustard seeds, peppercorns, cinnamon, cloves, vinegar and turmeric to a smooth paste.',
      'Coat the beef with the paste, cover and refrigerate for 1 hour.',
      'Heat the oil in a heavy pan and cook the onions for 10 minutes until golden. Add the beef with all the paste and cook for 10 minutes, stirring, until the paste darkens.',
      'Add the sugar, salt and water. Cover and simmer over a low heat for 60 minutes.',
      'Add the potatoes and cook for 30 minutes more, until the beef and potatoes are tender and the sauce is thick.'
    ],
    tips: [
      'Wear gloves when grinding the soaked chillies.',
      'For less heat, remove the chilli seeds before soaking.',
      'Refrigerate the curry overnight if you can; the flavours settle and mellow.'
    ],
    pair: ['Steamed rice', 'Pao', 'Cucumber and onion salad', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months. Reheat gently.',
    nut: [439, 32, 17, 27, 3, 4, 510],
    rest: [75, 'Marinating']
  },

  'goan-fish-curry': {
    d: 'Firm white fish simmered in a tangy, coconut-based red curry of tamarind, dried chillies, coriander and turmeric.',
    meta: 'Goan fish curry: firm white fish in a tangy red coconut curry with tamarind and dried chillies. Four servings, cooked for 20 minutes.',
    kw: ['goan fish curry', 'goan fish curry recipe', 'goan style fish curry with coconut', 'fish curry with tamarind', 'indian coconut fish curry'],
    why: 'In the first hot week of the year, when nobody wants to stand over a stove for long, this is the curry to make. The sauce takes 10 minutes and the fish about 6, and the whole dish is on the table in 20.\n\nThe paste is the heart of it. Grated coconut, dried red chillies, coriander seeds, cumin, turmeric and garlic are ground with tamarind and a little water to a thick, bright red paste. The coconut makes it rich, the tamarind makes it sharp, and the chillies bring the heat. Taste the paste before you cook it; it should be tangy.\n\n**Add the fish last and barely stir.** Firm fish such as cod or haddock holds its shape if you leave it alone, and breaks into flakes if you do not.\n\nSimmer the sauce gently for 8 minutes before the fish goes in, and cook the fish for only 6 minutes, until it turns opaque and flakes at the edge. The curry improves if left to stand for 10 minutes off the heat.',
    ing: [
      '# Paste',
      '60 g grated coconut',
      '6 dried Kashmiri chillies',
      '1 tbsp coriander seeds',
      '1 tsp cumin seeds',
      '1/2 tsp ground turmeric',
      '4 garlic cloves',
      '1 tbsp tamarind paste',
      '150 ml water',
      '# Curry',
      '2 tbsp coconut oil',
      '1 onion, about 150 g, finely chopped',
      '1 tomato, about 100 g, chopped',
      '300 ml water',
      '1 tsp salt',
      '600 g firm white fish fillets, cut into 5 cm pieces',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the chillies in hot water for 10 minutes, then drain. Grind them with the coconut, coriander seeds, cumin, turmeric, garlic, tamarind and the first measure of water to a smooth paste.',
      'Heat the oil in a wide pan and cook the onion for 6 minutes until soft. Add the tomato and cook for 3 minutes.',
      'Add the paste, second measure of water and salt. Simmer gently for 8 minutes.',
      'Lay in the fish, spoon over some sauce, cover and cook for 6 minutes without stirring, until the fish is opaque.',
      'Scatter with coriander and serve.'
    ],
    tips: [
      'Shake the pan gently rather than stirring once the fish is in.',
      'Add the salt to the sauce, not the fish, so the fish stays firm.',
      'Use a pan wide enough for the fish to sit in one layer.'
    ],
    pair: ['Steamed rice', 'Pao', 'Fried papadums', 'Sliced onion with lime'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day; reheat very gently.',
    nut: [290, 29, 12, 14, 3, 7, 690]
  },

  'fish-moilee': {
    d: 'Chunks of white fish poached in a mild coconut milk sauce with turmeric, ginger, green chilli, onion and curry leaves.',
    meta: 'Fish moilee: white fish gently cooked in a mild coconut milk sauce with ginger, green chilli and curry leaves. Four servings, cooked for 20 minutes.',
    kw: ['fish moilee', 'kerala fish moilee', 'fish molee recipe', 'fish in coconut milk curry', 'mild fish curry with coconut milk'],
    why: 'Why does the coconut curry in restaurants sometimes taste flat and oily? Because the milk has been boiled hard. A moilee is a gentle dish: the coconut milk is added late and kept just below a simmer, so it stays creamy and sweet rather than splitting.\n\nStart with coconut oil, mustard seeds and curry leaves, then soften the onion, ginger and green chillies without browning them. The aim is a pale sauce with a gentle heat. Turmeric gives colour, and tomato adds a touch of sourness.\n\n**Add the thin coconut milk first and the thick one last.** If you only have one tin, use half at the start and the rest to finish. The fish poaches in the first half and the richness comes from the second.\n\nFirm fish such as cod, haddock or pollock holds together in the pan. Lay it in gently, cover, and cook for 6 minutes. A squeeze of lime at the end balances the sweetness.',
    ing: [
      '2 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 sprig curry leaves',
      '1 onion, about 150 g, thinly sliced',
      '1 tbsp ginger, grated',
      '2 green chillies, slit',
      '1/2 tsp ground turmeric',
      '1 tomato, about 100 g, chopped',
      '200 ml coconut milk, thinned with 100 ml water',
      '600 g firm white fish fillets, cut into 5 cm pieces',
      '1 tsp salt',
      '100 ml coconut milk',
      '1 tbsp lime juice'
    ],
    st: [
      'Heat the oil in a wide pan. Add the mustard seeds and curry leaves until they crackle.',
      'Add the onion, ginger and green chillies and cook for 5 minutes without browning. Stir in the turmeric and tomato for 2 minutes.',
      'Pour in the thinned coconut milk and salt and bring just to a simmer.',
      'Lay in the fish, cover and cook gently for 6 minutes until opaque.',
      'Pour in the remaining coconut milk and warm through for 2 minutes. Stir in the lime juice.'
    ],
    tips: [
      'Keep the heat low; boiling coconut milk can split.',
      'Do not stir the fish; tilt the pan to mix the sauce.',
      'Add lime juice off the heat so the sauce stays smooth.'
    ],
    pair: ['Appam', 'Steamed rice', 'Idiyappam', 'Cucumber salad'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [337, 29, 8, 21, 1, 4, 710]
  },

  'fish-pakora': {
    d: 'Cubes of white fish in a spiced gram flour batter with ajwain, chilli and lemon, cooked until crisp and golden.',
    meta: 'Fish pakora: cubes of white fish in a spiced gram flour batter, cooked until crisp. Four servings, cooked for 15 minutes.',
    kw: ['fish pakora', 'fish pakora recipe', 'crispy fish pakora', 'indian fish pakoras', 'gram flour battered fish'],
    why: 'Fish, gram flour, ajwain, chilli, lemon: five ingredients and a pan of hot oil. Gram flour gives the batter a nutty taste and a sturdy crunch that stays crisp longer than wheat flour does, and ajwain adds a sharp, thyme-like note that suits fish.\n\nThe fish matters. Choose a firm white fish such as cod, haddock or pollock, cut into 3 cm pieces so they cook through in the time the batter takes to brown. Pat the pieces dry and marinate them for 15 minutes in ginger, garlic, chilli powder, lemon juice and salt. Do not marinate longer or the acid will start to cook the fish.\n\n**Make the batter thick enough to coat a spoon.** Thin batter slides off, and the fish overcooks while the coating browns.\n\nThe oil should be at 180°C. Fry in small batches for 4 minutes, until deep golden, and drain on kitchen paper. Eat while hot, with lemon wedges and a green chutney.',
    ing: [
      '500 g firm white fish fillets, cut into 3 cm pieces',
      '1 tbsp ginger and garlic paste',
      '1 tsp chilli powder',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '100 g gram flour (besan)',
      '2 tbsp rice flour',
      '1 tsp ajwain seeds',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '120 ml cold water',
      '150 ml vegetable oil, for frying',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the fish with the ginger and garlic paste, chilli powder, lemon juice and the first 1/2 tsp salt. Leave for 15 minutes.',
      'Whisk the gram flour, rice flour, ajwain, turmeric and second 1/2 tsp salt with the water to a thick batter. Stir in the fish.',
      'Heat the oil in a small, deep pan to 180°C.',
      'Fry the fish in batches for 4 minutes each, until golden and crisp.',
      'Drain on kitchen paper and serve straight away with lemon wedges.'
    ],
    tips: [
      'Handle the fish gently so it does not break up in the batter.',
      'Check the oil temperature between batches.',
      'Serve at once; the coating softens as it cools.'
    ],
    pair: ['Mint chutney', 'Tamarind chutney', 'Sliced onion', 'Lemon wedges'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day and crisps up in a hot oven.',
    nut: [528, 26, 25, 36, 2, 1, 680]
  },

  'fish-amritsari': {
    d: 'Punjabi-style fish pieces coated in a tangy gram flour and carom seed batter with amchur and lemon, cooked until crisp.',
    meta: 'Fish Amritsari: fish in a tangy batter of gram flour, carom seeds, amchur and lemon, cooked until crisp. Four servings, cooked for 15 minutes.',
    kw: ['fish amritsari', 'amritsari fish', 'amritsari fish fry recipe', 'punjabi fish tikka', 'crispy fish with gram flour'],
    why: 'Salt the fish and leave it in the marinade for exactly half an hour. Any shorter and the flavour stays on the surface; any longer and the lemon juice turns the flesh mushy.\n\nAmritsari fish is a Punjabi favourite, and what sets it apart from a plain battered fish is the sharp, sour marinade. Ginger, garlic, red chilli, carom seeds and amchur (dried mango powder) are mixed with lemon juice and coated onto the fish first. The gram flour batter goes on afterwards, so the flavour lies between the flesh and the crust.\n\n**Use firm, boneless fish cut into 4 cm pieces.** Soft fish breaks as it is coated and turned.\n\nThe batter is thick, made with gram flour, rice flour and a little yoghurt for tang. Fry in oil heated to 180°C for 4 minutes, until deep golden and crisp. Dust with chaat masala as soon as the pieces come out of the oil, and squeeze over lemon. Serve with sliced onion and mint chutney.',
    ing: [
      '600 g firm white fish fillets, cut into 4 cm pieces',
      '1 tbsp ginger and garlic paste',
      '1 tsp chilli powder',
      '1 tsp ajwain seeds',
      '1 tsp amchur (dried mango powder)',
      '2 tbsp lemon juice',
      '1/2 tsp salt',
      '80 g gram flour (besan)',
      '2 tbsp rice flour',
      '2 tbsp plain yoghurt',
      '1/2 tsp salt',
      '100 ml cold water',
      '150 ml vegetable oil, for frying',
      '1 tsp chaat masala',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the ginger and garlic paste, chilli powder, ajwain, amchur, lemon juice and first 1/2 tsp salt. Coat the fish and leave for 30 minutes.',
      'Whisk the gram flour, rice flour, yoghurt, second 1/2 tsp salt and water to a thick batter. Fold in the fish.',
      'Heat the oil in a small, deep pan to 180°C.',
      'Fry the fish in batches for 4 minutes each, until golden and crisp.',
      'Drain, sprinkle with chaat masala and serve with lemon.'
    ],
    tips: [
      'Do not leave the fish in the marinade beyond 30 minutes.',
      'Use a slotted spoon to turn the pieces gently.',
      'Dust with chaat masala while the fish is still hot so it sticks.'
    ],
    pair: ['Mint chutney', 'Sliced red onion with lemon', 'Naan', 'Green salad'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [545, 31, 22, 37, 2, 1, 690]
  },

  'prawn-balchao': {
    d: 'Prawns in a dark, tangy Goan masala of dried chillies, vinegar, ginger and garlic, cooked until thick and slightly sweet.',
    meta: 'Prawn balchao: prawns in a dark, tangy Goan masala of dried chillies, vinegar and garlic. Four servings, cooked for 25 minutes.',
    kw: ['prawn balchao', 'goan prawn balchao', 'prawn balchao recipe', 'balchao masala prawns', 'tangy goan prawn curry'],
    why: 'Most home versions come out too sour or too thin, and the fix is to cook the masala for far longer than seems necessary. Balchao is a Goan preparation in which seafood is cooked in a paste of dried chillies and vinegar, and the paste has to be fried until the oil rises before the prawns go in.\n\nBlend soaked Kashmiri chillies with garlic, ginger, cumin, a little tamarind and vinegar to a thick paste. Fry onions until they are dark brown, add the paste, and cook for 10 minutes. **Wait until the oil separates at the edges of the pan.** At that point the raw vinegar edge has gone and the masala tastes round and sweet.\n\nA spoonful of sugar helps. Balchao should be sharp, hot and just sweet enough to hold the two together.\n\nThe prawns then need only 4 minutes. Add them to the thick masala, turn once, and take them off the heat when they curl. Balchao keeps for days and often tastes better the next morning.',
    ing: [
      '# Paste',
      '10 dried Kashmiri chillies, soaked in hot water for 15 minutes',
      '6 garlic cloves',
      '2 tbsp ginger, chopped',
      '1 tsp cumin seeds',
      '1 tbsp tamarind paste',
      '4 tbsp malt vinegar',
      '# Prawns',
      '4 tbsp vegetable oil',
      '2 onions, about 300 g, finely chopped',
      '1 tsp sugar',
      '1 tsp salt',
      '500 g raw king prawns, peeled',
      '1 sprig curry leaves'
    ],
    st: [
      'Grind the drained chillies, garlic, ginger, cumin, tamarind and vinegar to a thick paste.',
      'Heat the oil in a wide pan and cook the onions for 10 minutes until dark golden.',
      'Add the paste, sugar and salt and cook over a medium heat for 10 minutes, stirring, until the oil separates.',
      'Add the curry leaves and prawns and cook for 4 minutes, turning once, until the prawns curl and turn pink.'
    ],
    tips: [
      'Pat the prawns dry so they do not water down the masala.',
      'Use less chilli for a milder balchao.',
      'Stir often while frying the paste, as the sugar can catch.'
    ],
    pair: ['Pao', 'Steamed rice', 'Goan sausage pulao', 'Sliced onion'],
    store: 'Keeps in the fridge for 3 days; reheat gently so the prawns stay tender.',
    nut: [307, 27, 16, 15, 2, 8, 790]
  },

  'crab-masala': {
    d: 'Crab meat folded into a thick onion and tomato masala with ginger, garlic, coconut oil and black pepper.',
    meta: 'Crab masala: crab meat in a thick onion and tomato masala with ginger, garlic and black pepper. Four servings, cooked for 25 minutes.',
    kw: ['crab masala', 'indian crab masala', 'crab masala recipe', 'crab curry masala', 'south indian crab masala'],
    why: 'A dish for a table of four on a day when someone has been to the fishmonger, or when a pack of picked white and brown crab meat has been found in the shops. Crab masala is built on the same base as many South Indian seafood dishes, and its sweetness stands up well to spices.\n\nCook the base properly. Onions need 8 minutes to turn soft and golden, tomatoes need another 7 to break down, and the masala must be thick enough that a spoon leaves a trail. **Add the crab only once the oil shows at the edges.** Added earlier, the crab releases moisture that thins the masala.\n\nPicked crab meat is already cooked, so it needs only warming through. Stir gently to keep the white meat in flakes. Brown meat dissolves into the sauce and adds depth.\n\nCoconut oil, curry leaves and plenty of black pepper give the dish a South Indian character. Finish with lime juice and fresh coriander.',
    ing: [
      '3 tbsp coconut oil',
      '1 tsp mustard seeds',
      '1 sprig curry leaves',
      '2 onions, about 300 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 green chillies, slit',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '3 tomatoes, about 300 g, chopped',
      '1 tsp salt',
      '1 tsp ground black pepper',
      '400 g picked white and brown crab meat',
      '1 tbsp lime juice',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a wide pan. Add the mustard seeds and curry leaves until they crackle.',
      'Add the onions and cook for 8 minutes until golden. Add the ginger and garlic paste and green chillies for 1 minute.',
      'Stir in the coriander, turmeric and chilli powder, then add the tomatoes and salt. Cook for 7 minutes until thick and the oil shows at the edges.',
      'Fold in the crab meat and pepper. Warm gently for 4 minutes without stirring hard.',
      'Finish with the lime juice and fresh coriander.'
    ],
    tips: [
      'Check the crab meat for small pieces of shell.',
      'Do not cook the crab for long; it is already cooked.',
      'Serve at once, while the pepper is sharp.'
    ],
    pair: ['Steamed rice', 'Appam', 'Toasted bread', 'Lime wedges'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 1 day.',
    nut: [240, 20, 13, 12, 3, 6, 920]
  },

  'paneer-do-pyaza': {
    d: 'Cubes of paneer cooked with onion two ways, in a tomato masala, with peppers and a finish of garam masala.',
    meta: 'Paneer do pyaza: paneer and peppers in a tomato masala with onion cooked two ways. Four servings, cooked for 20 minutes.',
    kw: ['paneer do pyaza', 'paneer do pyaza recipe', 'paneer dopiaza', 'paneer with onions and tomato masala', 'indian paneer curry with onions'],
    why: 'Salt the paneer and leave it for ten minutes in hot water first; it sounds fussy, and it is the difference between rubbery cubes and soft ones. Soaking paneer in hot salted water softens it, so it does not toughen further in the sauce.\n\nDo pyaza means two onions. Here one onion is cooked down into the masala and a second is cut into thick petals that go in late, so they stay a little crisp. The contrast between the soft base and the crunchy onion is the point of the dish.\n\n**Fry the paneer cubes briefly until golden on two sides.** That gives them a light crust that holds up in the gravy and adds a nutty flavour.\n\nBuild the masala from onion, ginger, garlic and tomato, with cumin, coriander and a pinch of turmeric. Cook until the oil separates. The peppers and onion petals go in for the last 4 minutes, with the paneer, and a spoonful of garam masala finishes the dish.',
    ing: [
      '300 g paneer, cut into 3 cm cubes',
      '1 tsp salt, for soaking',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, about 300 g, pureed',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '1 onion, about 150 g, cut into petals',
      '1 green pepper, about 150 g, cut into 3 cm pieces',
      '1 tsp garam masala',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the paneer in hot water with the 1 tsp salt for 10 minutes. Drain and pat dry.',
      'Heat 1 tbsp of the oil in a frying pan and cook the paneer for 4 minutes until golden on two sides. Set aside.',
      'Heat the remaining oil in a wide pan and cook the chopped onion for 6 minutes. Add the ginger and garlic paste for 1 minute.',
      'Add the tomato puree, cumin, coriander, turmeric, chilli powder and salt. Cook for 6 minutes until thick and the oil shows.',
      'Add the onion petals, pepper and paneer and cook for 4 minutes. Stir in the garam masala and coriander.'
    ],
    tips: [
      'Do not stir the paneer too hard once it is in the sauce.',
      'Cut the onion petals thick so they keep some bite.',
      'Add a splash of water if the masala becomes too dry.'
    ],
    pair: ['Roti or naan', 'Jeera rice', 'Cucumber raita', 'Lemon wedges'],
    store: 'Keeps in the fridge for 2 days. The paneer firms up when cold; reheat gently with a splash of water.',
    nut: [380, 16, 16, 28, 4, 9, 940]
  },

  'paneer-jalfrezi': {
    d: 'Strips of paneer tossed over a high heat with peppers, onion and tomato in a thick, spiced masala that clings rather than pools.',
    meta: 'Paneer jalfrezi: paneer, peppers and onion stir-fried in a thick, spiced tomato masala. Four servings, cooked for 20 minutes.',
    kw: ['paneer jalfrezi', 'paneer jalfrezi recipe', 'veg paneer jalfrezi', 'paneer and pepper curry', 'indian paneer jalfrezi'],
    why: 'It looks like a curry and cooks like a stir-fry, which is why jalfrezi has a different feel from most Indian dishes. The vegetables stay in large, bright pieces and the sauce is just enough to coat them. There is no pool of gravy.\n\nHeat is the first rule. Use a wide, heavy pan over a high heat and cook the peppers and onion for only 3 or 4 minutes, so they keep their colour and bite. **Do not cover the pan.** Steam softens them and washes out the colour.\n\nThe masala is quick: cumin seeds, ginger, garlic, tomato and ground spices, cooked for 6 minutes until thick. A teaspoon of vinegar or lemon at the end gives the sharp edge jalfrezi is known for.\n\nPaneer needs a soak in hot water to soften it, then a gentle stir at the end. Cut it into strips about the same size as the peppers so each spoonful has a bit of everything. Serve straight away while the vegetables are still crisp.',
    ing: [
      '300 g paneer, cut into 4 cm strips',
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, cut into petals',
      '1 red pepper, about 150 g, cut into strips',
      '1 green pepper, about 150 g, cut into strips',
      '1 tbsp ginger and garlic paste',
      '3 tomatoes, about 300 g, chopped',
      '1 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '1 tsp garam masala',
      '1 tbsp lemon juice',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the paneer in hot water for 10 minutes. Drain and pat dry.',
      'Heat the oil in a wide pan over a high heat. Add the cumin seeds for 20 seconds, then the onion and peppers and cook for 4 minutes. Remove and set aside.',
      'Lower the heat to medium. Add the ginger and garlic paste, tomatoes and spices and salt. Cook for 6 minutes until thick.',
      'Return the vegetables to the pan with the paneer and cook for 3 minutes, tossing gently.',
      'Stir in the garam masala, lemon juice and fresh coriander.'
    ],
    tips: [
      'Cut the vegetables to a similar size so they cook together.',
      'Keep the heat high for the vegetables and lower for the sauce.',
      'Add a green chilli with the cumin seeds for extra heat.'
    ],
    pair: ['Chapati', 'Plain rice', 'Cucumber raita', 'Sliced onion'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 2 days; the peppers soften.',
    nut: [380, 16, 16, 28, 4, 9, 350]
  },

  'paneer-pakora': {
    d: 'Slices of paneer sandwiched with green chutney, dipped in a seasoned gram flour batter and cooked until crisp.',
    meta: 'Paneer pakora: paneer slices with green chutney in a seasoned gram flour batter, cooked until crisp. Four servings, cooked for 15 minutes.',
    kw: ['paneer pakora', 'paneer pakora recipe', 'crispy paneer pakoras', 'stuffed paneer pakora', 'paneer snack with chutney'],
    why: 'Cut the paneer thick. Slabs about 1 cm thick hold the batter, take the heat and stay soft in the middle, while thin slices dry out and turn leathery in the oil.\n\nThe batter is gram flour with a little rice flour for crunch, seasoned with chilli, ajwain and a pinch of turmeric. The consistency should be like double cream, thick enough to cling but still pourable. **Rest the batter for 10 minutes before using it.** The flour swells and the coating turns lighter.\n\nA smear of green chutney between two slices makes a sandwich that is a little more interesting than plain pakora. If the slices slide apart in the oil, press them together firmly before dipping them.\n\nHeat the oil to 180°C and cook the pakoras in two batches for 3 or 4 minutes each, until golden. The batter should be crisp and the paneer just warmed through. Serve them at once with chaat masala sprinkled over.',
    ing: [
      '300 g paneer, cut into 8 slices about 1 cm thick',
      '4 tbsp mint chutney',
      '100 g gram flour (besan)',
      '2 tbsp rice flour',
      '1 tsp chilli powder',
      '1 tsp ajwain seeds',
      '1/2 tsp ground turmeric',
      '1/2 tsp salt',
      '120 ml cold water',
      '150 ml vegetable oil, for frying',
      '1 tsp chaat masala'
    ],
    st: [
      'Spread 4 of the paneer slices with the mint chutney and top each with a second slice, pressing together.',
      'Whisk the gram flour, rice flour, chilli powder, ajwain, turmeric and salt with the water to a thick batter. Leave for 10 minutes.',
      'Heat the oil in a small, deep pan to 180°C.',
      'Dip the paneer sandwiches in the batter and fry in 2 batches for 3 to 4 minutes each, until crisp and golden.',
      'Drain on kitchen paper and sprinkle with chaat masala.'
    ],
    tips: [
      'Pat the paneer dry before spreading with chutney.',
      'Keep the oil hot; low heat gives greasy pakoras.',
      'Cut into triangles to serve.'
    ],
    pair: ['Mint chutney', 'Tamarind chutney', 'Masala chai', 'Sliced onion'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [660, 17, 31, 52, 2, 8, 450]
  },

  'paneer-kofta': {
    d: 'Soft dumplings of paneer and potato, stuffed with raisins and nuts, cooked and served in a smooth tomato and cashew gravy.',
    meta: 'Paneer kofta: paneer and potato dumplings in a smooth tomato and cashew gravy. Four servings, cooked for 30 minutes.',
    kw: ['paneer kofta', 'paneer kofta curry', 'paneer kofta recipe', 'paneer and potato kofta', 'kofta in tomato cashew gravy'],
    why: 'Most home versions fall apart in the oil, and the fix is to bind the mixture with the right amount of cornflour and to make sure the potato is cool and dry. Grate the paneer, mash the potato, and mix them with a spoonful of cornflour until the dough holds when squeezed.\n\nShape each kofta around a raisin and a piece of cashew. The sweet centre is a small surprise against the savoury shell, and it also gives you a reason to roll the balls tight. **Test one kofta in the oil first.** If it breaks, add another spoonful of cornflour.\n\nFry the koftas at 170°C, not hotter, so they brown without cracking. They take about 4 minutes in batches of four. Drain them and set them aside.\n\nThe gravy is tomato, onion and cashew, cooked until smooth and thick. Add the koftas only when serving, or they soak up too much sauce and turn soft. Spoon the gravy over them and finish with a swirl of cream.',
    ing: [
      '# Koftas',
      '200 g paneer, grated',
      '200 g boiled potato, mashed and cooled',
      '2 tbsp cornflour',
      '1/2 tsp salt',
      '1/2 tsp garam masala',
      '1 green chilli, finely chopped',
      '20 g raisins',
      '20 g cashew nuts, broken',
      '150 ml vegetable oil, for frying',
      '# Gravy',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger and garlic paste',
      '400 g tinned chopped tomatoes',
      '30 g cashew nuts',
      '1 tsp ground coriander',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1/2 tsp salt',
      '150 ml water',
      '50 ml double cream'
    ],
    st: [
      'Mix the paneer, potato, cornflour, salt, garam masala and chilli to a soft dough. Make 12 balls, pressing a raisin and a piece of cashew into the centre of each.',
      'Heat the frying oil to 170°C and fry the koftas in 3 batches for 4 minutes each, until golden. Drain on kitchen paper.',
      'For the gravy, heat the oil and cook the onion for 6 minutes. Add the ginger and garlic paste, tomatoes, cashews, spices and salt. Cook for 10 minutes.',
      'Blend the mixture with the water until smooth, return to the pan and simmer for 5 minutes. Stir in the cream.',
      'Place the koftas in a dish, pour the hot gravy over and serve.'
    ],
    tips: [
      'Cool the potato fully before mixing; warm potato makes a sticky dough.',
      'Fry a test kofta first and adjust the cornflour.',
      'Add the koftas to the gravy just before serving.'
    ],
    pair: ['Naan', 'Jeera rice', 'Sliced onion with lemon', 'Cucumber raita'],
    store: 'Keep the koftas and gravy separate in the fridge for 2 days. Combine when reheating.',
    nut: [747, 14, 31, 63, 4, 10, 640]
  },

  'kala-chana': {
    d: 'Dried black chickpeas soaked and simmered until tender, then cooked in a tomato and onion masala with roasted cumin and coriander.',
    meta: 'Kala chana: soaked black chickpeas simmered until tender in a tomato and onion masala. Four servings, cooked for 70 minutes.',
    kw: ['kala chana', 'kala chana recipe', 'black chickpea curry', 'kala chana masala', 'black chana curry'],
    why: 'Black chickpeas are smaller and darker than the usual pale ones, with a firmer bite and a nutty, earthy taste. They take longer to cook than other chickpeas, but they hold their shape through a long simmer, and they reward the wait.\n\nSoak them overnight, for at least 8 hours, in plenty of cold water. They double in size, so use a big bowl. Drain, rinse, and cook them in fresh water with a pinch of salt until a chickpea squashes between your fingers, about 60 minutes in a covered pan.\n\n**Keep the cooking water.** It has flavour, and you will use it to loosen the masala.\n\nThe masala is built from onion, ginger, garlic, tomato and a few ground spices. Cook it until the oil separates, add the drained chickpeas with some of their liquid, and simmer for 10 minutes to blend the flavours. Mashing a few chickpeas against the side of the pan thickens the sauce. Finish with garam masala, lemon juice and fresh coriander.',
    ing: [
      '250 g dried black chickpeas (kala chana)',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '2 tomatoes, about 200 g, chopped',
      '1 tsp ground coriander',
      '1 tsp ground cumin',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp garam masala',
      '1 tbsp lemon juice',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Soak the chickpeas in plenty of cold water overnight, for about 8 hours. Drain and rinse.',
      'Put the chickpeas in a pan with 1 litre of fresh water and the salt. Bring to the boil, cover and simmer for 60 minutes until tender. Drain, keeping the cooking water.',
      'Heat the oil in a pan and add the cumin seeds. Add the onion and cook for 6 minutes. Add the ginger and garlic paste for 1 minute.',
      'Add the tomatoes and spices and cook for 6 minutes until thick.',
      'Add the chickpeas and 200 ml of their cooking water. Simmer for 10 minutes, mashing a few against the pan. Stir in the garam masala, lemon juice and coriander.'
    ],
    tips: [
      'Do not add salt to the soaking water.',
      'Test a chickpea for tenderness before moving on; older ones take longer.',
      'Use a pressure cooker if you have one; it cuts the cooking time by more than half.'
    ],
    pair: ['Chapati', 'Steamed rice', 'Sliced onion with lemon', 'Cucumber raita'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [181, 6, 19, 9, 5, 5, 800],
    rest: [480, 'Soaking overnight']
  },

  'aloo-baingan': {
    d: 'A dry curry of potato and aubergine cooked with cumin, turmeric and tomato until soft, with a little sauce clinging to each piece.',
    meta: 'Aloo baingan: potato and aubergine cooked with cumin, turmeric and tomato in a dry curry. Four servings, cooked for 25 minutes.',
    kw: ['aloo baingan', 'aloo baingan recipe', 'potato and aubergine curry', 'aloo baingan masala', 'punjabi aloo baingan'],
    why: 'Potato, aubergine, onion, tomato: four ordinary vegetables, and the dish is in how long each one is given. Potato needs the longest, aubergine absorbs oil like a sponge, and the tomato should reduce to a paste.\n\nStart with the potatoes in a hot pan and give them a few minutes of colour before the aubergine goes in. That way they cook together and finish at the same time. Cut both into 3 cm pieces. Smaller aubergine pieces collapse into mush; larger ones stay raw in the middle.\n\n**Add the aubergine late and salt lightly.** It soaks up oil quickly, and too much salt draws out water and makes it soggy.\n\nCumin seeds crackle in the oil first, then onion, ginger and tomato make a base. Turmeric, coriander and chilli go in once the onion is soft. Cover the pan and cook on a low heat for 15 minutes, until both vegetables are tender. Stir only twice, or the potato will break up. Finish with garam masala and fresh coriander.',
    ing: [
      '3 tbsp vegetable oil',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, chopped',
      '1 tbsp ginger, grated',
      '300 g potatoes, peeled and cut into 3 cm pieces',
      '1 aubergine, about 300 g, cut into 3 cm pieces',
      '2 tomatoes, about 200 g, chopped',
      '1/2 tsp ground turmeric',
      '1 tsp ground coriander',
      '1/2 tsp chilli powder',
      '1 tsp salt',
      '100 ml water',
      '1 tsp garam masala',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oil in a wide pan. Add the cumin seeds for 20 seconds, then the onion and ginger and cook for 5 minutes.',
      'Add the potatoes and cook for 5 minutes, stirring, until lightly coloured.',
      'Add the aubergine, tomatoes, turmeric, coriander, chilli and salt. Cook for 3 minutes.',
      'Add the water, cover and cook over a low heat for 15 minutes, stirring twice, until the vegetables are tender.',
      'Stir in the garam masala and fresh coriander.'
    ],
    tips: [
      'Cut the potato and aubergine the same size.',
      'Keep the lid on so the vegetables steam in their own juices.',
      'Add the salt a little at a time and taste at the end.'
    ],
    pair: ['Chapati', 'Dal tadka', 'Steamed rice', 'Cucumber raita'],
    store: 'Keeps in the fridge for 2 days. Reheat gently with a splash of water.',
    nut: [207, 3, 24, 11, 6, 6, 610]
  },

  'aloo-palak': {
    d: 'Potato cubes simmered in a smooth spinach puree with garlic, ginger, cumin and a squeeze of lemon.',
    meta: 'Aloo palak: potato cubes in a smooth spinach sauce with garlic, ginger and cumin. Four servings, cooked for 20 minutes.',
    kw: ['aloo palak', 'aloo palak recipe', 'potato and spinach curry', 'aloo palak sabzi', 'spinach potato curry'],
    why: 'The first sign it is ready is the colour: a bright, deep green that fades to olive if the spinach is cooked too long. Aloo palak is a weeknight dish, and what keeps it green is speed.\n\nCook the potatoes first, in a little oil and water, until they are almost tender, about 10 minutes. Cut them into 2 cm cubes so they cook quickly. Meanwhile, blanch the spinach for 1 minute in boiling water, then plunge it into cold water and blend it with a green chilli. **Blanching and chilling locks in the colour.**\n\nThe sauce builds fast. Cumin seeds, garlic, ginger and onion go in the pan, then the spinach puree, then the potatoes. A pinch of garam masala and a spoonful of cream, if you like, make it rounder.\n\nSimmer for 5 minutes, no longer, and add the lemon juice at the end. The acid brightens the greens. If you have a bag of frozen spinach, thaw it and squeeze it dry first.',
    ing: [
      '3 tbsp vegetable oil',
      '500 g potatoes, peeled and cut into 2 cm cubes',
      '100 ml water',
      '300 g fresh spinach',
      '1 green chilli',
      '1 tsp cumin seeds',
      '1 onion, about 150 g, finely chopped',
      '1 tbsp ginger and garlic paste',
      '1/2 tsp ground turmeric',
      '1 tsp ground coriander',
      '3/4 tsp salt',
      '1 tsp garam masala',
      '1 tbsp lemon juice'
    ],
    st: [
      'Heat 1 tbsp of the oil in a pan, add the potatoes and cook for 3 minutes. Add the water, cover and cook for 7 minutes until nearly tender.',
      'Boil the spinach for 1 minute, drain, cool in cold water and squeeze dry. Blend with the green chilli to a smooth puree.',
      'In a second pan, heat the remaining oil. Add the cumin seeds, then the onion, and cook for 5 minutes. Add the ginger and garlic paste, turmeric, coriander and salt for 1 minute.',
      'Add the spinach puree and the potatoes with any liquid. Simmer for 5 minutes.',
      'Stir in the garam masala and lemon juice.'
    ],
    tips: [
      'Do not cover the spinach while it blanches or it loses colour.',
      'Cube the potatoes small so the dish stays quick.',
      'Add lemon juice only at the end.'
    ],
    pair: ['Chapati', 'Basmati rice', 'Dal', 'Plain yoghurt'],
    store: 'Keeps in the fridge for 2 days; the green dulls but the taste holds.',
    nut: [243, 6, 30, 11, 6, 3, 510]
  },

  'sev-puri': {
    d: 'Flat crisp puris topped with potato, onion, tomato, two chutneys and a crown of fine, crunchy chickpea noodles.',
    meta: 'Sev puri: flat crisp puris topped with potato, onion, tomato, chutneys and fine sev. Four servings, ready in about 40 minutes.',
    kw: ['sev puri', 'sev puri recipe', 'sev puri chaat', 'indian street food sev puri', 'mumbai sev puri'],
    why: 'An appetizer for a table of four, and the one to make when everyone arrives at different times. Sev puri is assembled, not cooked, and it can be laid out in minutes once the parts are ready.\n\nThe parts are simple. Flat puris (papdi), boiled potato, finely chopped onion and tomato, green chutney, tamarind chutney, chaat masala and sev. Each one adds a different texture or taste: crisp, soft, sharp, sweet, spicy.\n\n**Assemble just before eating.** Papdi soften within minutes under the toppings, and a puri that has sat for 10 minutes is a different dish from one that is eaten in the first two.\n\nBoil the potatoes until tender but not mushy, then cut them into small cubes so they sit evenly on the puri. Chop the onion fine and drain the tomato of its seeds, which are the wettest part. Lay out 12 papdi on a plate. Top each with potato, onion and tomato, spoon over the chutneys, dust with chaat masala, and cover with sev and coriander. Squeeze lemon over the lot.',
    ing: [
      '12 papdi (flat crisp wheat crackers), about 100 g',
      '250 g boiled potatoes, finely cubed',
      '1 small red onion, about 80 g, finely chopped',
      '1 tomato, about 100 g, seeds removed and finely chopped',
      '4 tbsp mint chutney',
      '4 tbsp tamarind chutney',
      '1 tsp chaat masala',
      '1/2 tsp chilli powder',
      '50 g sev (fine chickpea flour noodles)',
      '2 tbsp chopped fresh coriander',
      '1 tbsp lemon juice'
    ],
    st: [
      'Boil the potatoes in salted water for 15 minutes until tender, drain, cool and cut into small cubes.',
      'Lay the papdi on a large plate or tray in a single layer.',
      'Top each with a spoonful of potato, then onion and tomato.',
      'Spoon over the mint chutney and tamarind chutney, then sprinkle with chaat masala and chilli powder.',
      'Pile on the sev, scatter with coriander and finish with lemon juice. Serve at once.'
    ],
    tips: [
      'Keep the papdi and chutneys separate until the last minute.',
      'Use shop-bought papdi if you do not want to make your own.',
      'Add a few chopped green chillies for more heat.'
    ],
    pair: ['Masala chai', 'Pani puri', 'Lemon soda', 'Dahi vada'],
    store: 'Best eaten straight away. The toppings keep separately in the fridge for 1 day.',
    nut: [236, 5, 45, 4, 4, 14, 430]
  },

  'dahi-puri': {
    d: 'Crisp hollow puris filled with potato and chickpeas, topped with sweetened yoghurt, tamarind and mint chutneys and sev.',
    meta: 'Dahi puri: crisp hollow puris filled with potato and chickpeas, topped with yoghurt, chutneys and sev. Four servings, ready in about 30 minutes.',
    kw: ['dahi puri', 'dahi puri recipe', 'dahi puri chaat', 'dahi batata puri', 'indian yoghurt puri snack'],
    why: 'Puris, potato, chickpeas, yoghurt: four things from the cupboard and the fridge, and a tray of small bites that vanish as fast as you make them. Dahi puri is a Mumbai street snack, and the point is the contrast between cold yoghurt and the sharp chutneys against a shell that is still crisp.\n\nStart with the puris. Hollow, crisp golfball puris are sold in packets in Indian shops. Tap each one with a thumb to make a hole in the top and keep the rest intact. **Fill them and top them immediately.** A filled puri softens within 5 minutes.\n\nThe filling is boiled potato, cooked chickpeas, a pinch of salt and chaat masala. Sweeten the yoghurt with a spoonful of sugar and whisk it smooth, so it spoons easily and does not look curdled.\n\nOn top go the chutneys, a dusting of chilli and cumin, fine sev and fresh coriander. Serve them on a platter and eat each in one bite, so nothing spills.',
    ing: [
      '20 hollow puris (pani puri shells), about 100 g',
      '200 g cooked potatoes, finely cubed',
      '100 g tinned chickpeas, drained',
      '1/2 tsp salt',
      '1 tsp chaat masala',
      '200 g plain yoghurt',
      '1 tbsp sugar',
      '3 tbsp tamarind chutney',
      '3 tbsp mint chutney',
      '1/2 tsp ground cumin',
      '1/2 tsp chilli powder',
      '40 g sev (fine chickpea flour noodles)',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Whisk the yoghurt with the sugar until smooth. Chill.',
      'Toss the potato and chickpeas with the salt and chaat masala.',
      'Tap the top of each puri to make a small hole. Fill with the potato and chickpea mixture.',
      'Spoon a little yoghurt into each puri, then add tamarind and mint chutney.',
      'Dust with cumin and chilli, top with sev and coriander, and serve at once.'
    ],
    tips: [
      'Do not fill the puris until you are ready to serve.',
      'Chill the yoghurt well for a better contrast.',
      'Keep the sev in a sealed bag so it stays crisp.'
    ],
    pair: ['Masala chai', 'Sev puri', 'Lemon soda', 'Pani puri water'],
    store: 'Best eaten straight away. The filling keeps in the fridge for 1 day.',
    nut: [267, 12, 48, 3, 4, 15, 590]
  },

  'papdi-chaat': {
    d: 'Crisp fried dough wafers layered with potato, chickpeas, whisked yoghurt, two chutneys, pomegranate and sev.',
    meta: 'Papdi chaat: crisp wafers layered with potato, chickpeas, yoghurt, chutneys, pomegranate and sev. Four servings, ready in about 25 minutes.',
    kw: ['papdi chaat', 'papdi chaat recipe', 'delhi papdi chaat', 'dahi papdi chaat', 'indian street food chaat'],
    why: 'In the first week of a heatwave, a cold plate of chaat does more than any fan. Papdi chaat is the dish people eat standing at a street stall in the afternoon, and it works as well on a kitchen table as an appetizer or a light lunch.\n\nPapdi are small round wafers made from flour dough and cooked until crisp. They are sold in packets and keep for weeks. Layer them on a plate so every wafer is covered by a topping, and the plate looks full without being crowded.\n\nOn top: boiled potato, chickpeas, whisked sweetened yoghurt, tamarind chutney, mint chutney. The yoghurt cools, the tamarind sweetens, and the mint brings heat and freshness. **Spoon the yoghurt on last and keep it cold.** The contrast with the sharp chutneys is the point of the dish.\n\nFinish with pomegranate seeds for sweet pops of juice, a generous sprinkle of chaat masala, red chilli powder and a mound of sev. Serve immediately, as the papdi lose their snap within a few minutes.',
    ing: [
      '16 papdi (flat crisp wheat crackers), about 120 g',
      '200 g cooked potatoes, cubed',
      '150 g tinned chickpeas, drained',
      '200 g plain yoghurt',
      '1 tbsp sugar',
      '3 tbsp tamarind chutney',
      '3 tbsp mint chutney',
      '1 tsp chaat masala',
      '1/2 tsp chilli powder',
      '3 tbsp pomegranate seeds',
      '40 g sev (fine chickpea flour noodles)',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Whisk the yoghurt with the sugar until smooth and chill.',
      'Arrange the papdi on a large platter.',
      'Spread the potatoes and chickpeas over the papdi, pressing lightly.',
      'Spoon over the yoghurt, then drizzle with both chutneys.',
      'Sprinkle with chaat masala and chilli powder, top with pomegranate seeds, sev and coriander, and serve immediately.'
    ],
    tips: [
      'Assemble only when guests are ready to eat.',
      'Use thick yoghurt so it holds its shape.',
      'Warm the potatoes slightly if you like a contrast of temperature.'
    ],
    pair: ['Masala chai', 'Lime soda', 'Dahi puri', 'Aloo tikki'],
    store: 'Best eaten at once. The components keep separately in the fridge for 1 day.',
    nut: [322, 13, 54, 6, 5, 17, 540]
  },

  'moong-dal-kachori': {
    d: 'Crisp, flaky pastry rounds stuffed with spiced ground moong dal and cooked in hot oil until puffed and golden.',
    meta: 'Moong dal kachori: flaky pastry rounds stuffed with spiced ground moong dal, cooked in hot oil. Makes eight, cooked for about 30 minutes.',
    kw: ['moong dal kachori', 'moong dal kachori recipe', 'khasta kachori', 'rajasthani moong dal kachori', 'stuffed kachori with lentils'],
    why: 'A recipe for a weekend, not a Wednesday: the dal needs soaking, the filling needs cooking, and the dough needs a rest. Do those in order and the rest goes quickly, and the reward is a kachori with a crust that shatters.\n\nThe pastry gets its flake from fat rubbed into the flour. Use plenty, about a quarter of the weight of the flour, and rub until the mixture feels like damp sand. Add water slowly to make a firm dough, not a soft one. **A stiff dough puffs and stays crisp.** Soft dough gives a heavy kachori.\n\nFor the filling, soaked moong dal is ground coarsely and cooked in oil with fennel, cumin, ginger and chilli until dry. Cool it fully before using. A warm filling softens the pastry from the inside.\n\nShape the dough into discs, add a spoonful of filling, pinch the edges closed and press flat. Fry in oil at 150°C over a low heat, not higher. The pastry must cook slowly for 12 minutes, turning, until pale gold and crisp.',
    ing: [
      '# Filling',
      '100 g split moong dal, soaked for 2 hours and drained',
      '1 tbsp vegetable oil',
      '1 tsp fennel seeds',
      '1 tsp cumin seeds',
      '1 tsp ginger, grated',
      '1 green chilli, chopped',
      '1/2 tsp chilli powder',
      '1 tsp ground coriander',
      '1/2 tsp salt',
      '# Dough',
      '250 g plain flour',
      '60 g ghee or vegetable oil',
      '1/2 tsp salt',
      '100 ml warm water',
      '# Frying',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Grind the soaked dal coarsely with no water. Heat the oil, add the fennel and cumin seeds, then the ginger and chilli. Add the dal, chilli powder, coriander and salt and cook for 8 minutes, stirring, until dry. Cool completely.',
      'Rub the ghee into the flour and salt. Add the water gradually to make a firm dough. Knead briefly and rest, covered, for 20 minutes.',
      'Divide the dough into 8 balls. Flatten each, add a spoonful of filling, pinch closed and press into a flat disc.',
      'Heat the frying oil to 150°C. Fry the kachori in 2 batches over a low heat for 12 minutes each, turning, until pale gold and crisp.',
      'Drain on kitchen paper.'
    ],
    tips: [
      'Keep the oil temperature low; high heat browns the outside before the inside cooks.',
      'Press the edges firmly when sealing or the filling leaks into the oil.',
      'Let the kachori cool a little for the crispest result.'
    ],
    pair: ['Tamarind chutney', 'Aloo sabzi', 'Masala chai', 'Mint chutney'],
    store: 'Keeps in an airtight tin for 2 days. Warm in a low oven to crisp.',
    nut: [548, 6, 32, 44, 3, 1, 300],
    rest: [140, 'Soaking the dal and resting the dough']
  },

  'khandvi': {
    d: 'Thin, silky rolls of gram flour and buttermilk batter cooked until set, spread thin and finished with mustard seeds, sesame and coconut.',
    meta: 'Khandvi: thin rolls of gram flour and buttermilk batter finished with mustard seeds and coconut. Four servings, cooked for 20 minutes.',
    kw: ['khandvi', 'khandvi recipe', 'gujarati khandvi', 'gram flour rolls', 'khandvi with mustard seeds and coconut'],
    why: 'Most home versions come out lumpy or too thick to roll, and the fix is to whisk the batter smooth before the pan goes on the heat and to stir without stopping once it does. Khandvi is a gram flour and buttermilk batter cooked down until it sets, then spread thin and rolled while still warm.\n\nWhisk the gram flour, buttermilk, water, turmeric, salt and ginger until there are no lumps. Strain it if necessary. Pour into a heavy pan over a medium heat and stir all the time for 10 minutes, scraping the base. **The mixture is ready when it pulls away from the sides and forms a thick mass.** Test a small spoonful on a plate: after 1 minute it should set and peel off cleanly.\n\nSpread the hot batter very thinly on the back of an oiled tray or work surface. It sets within 2 minutes, so work quickly. Cut into strips about 5 cm wide and roll each up from the end.\n\nPour the tempering of hot oil, mustard seeds, sesame seeds and curry leaves over the top, and finish with fresh coconut and coriander.',
    ing: [
      '100 g gram flour (besan)',
      '200 g plain yoghurt',
      '300 ml water',
      '1/4 tsp ground turmeric',
      '1/2 tsp salt',
      '1 tsp ginger, grated',
      '1 green chilli, finely chopped',
      '1 tbsp vegetable oil, for greasing',
      '# Tempering',
      '2 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '1 tsp sesame seeds',
      '1 sprig curry leaves',
      '# To finish',
      '2 tbsp grated fresh coconut',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Whisk the gram flour, yoghurt, water, turmeric, salt, ginger and chilli until completely smooth. Strain into a heavy pan.',
      'Cook over a medium heat, stirring constantly, for 10 minutes until very thick and the mixture pulls away from the sides.',
      'Working quickly, spread the hot mixture thinly over 2 oiled trays or the back of oiled baking sheets. Leave to set for 2 minutes.',
      'Cut into strips 5 cm wide and roll each up from one end.',
      'Heat the 2 tbsp oil, add the mustard seeds, sesame seeds and curry leaves until they crackle, and pour over the rolls. Top with the coconut and coriander.'
    ],
    tips: [
      'Stir the batter all the time to prevent lumps and scorching.',
      'Work fast when spreading; the batter sets quickly as it cools.',
      'If the batter will not roll, it is undercooked; return it to the pan for a few more minutes.'
    ],
    pair: ['Mint chutney', 'Masala chai', 'Dhokla', 'Green chutney'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 2 days.',
    nut: [259, 8, 23, 15, 2, 3, 330]
  },

  'methi-thepla': {
    d: 'Soft Gujarati flatbreads of whole wheat flour, fresh fenugreek leaves, yoghurt, sesame and spices, cooked on a griddle.',
    meta: 'Methi thepla: soft Gujarati flatbreads with fresh fenugreek leaves, yoghurt, sesame and spices. Makes eight, cooked for 20 minutes.',
    kw: ['methi thepla', 'methi thepla recipe', 'gujarati thepla', 'fenugreek flatbread', 'thepla for breakfast'],
    why: 'Autumn is when fresh methi is at its best, and a bunch of it, chopped and kneaded into a dough, is the starting point for a flatbread that tastes of the season. Thepla is a Gujarati travel food that keeps well for days, which is why it is packed for journeys.\n\nThe dough is whole wheat flour, chopped fenugreek leaves, yoghurt, sesame seeds, turmeric, chilli powder and a spoonful of oil. The yoghurt makes the dough soft and the thepla stay soft after cooking. The fenugreek leaves bring a bitter, grassy flavour that is unlike anything else.\n\n**Knead with just enough water to make a smooth, firm dough.** A dough that is too soft sticks to the rolling pin. Rest it for 20 minutes, then roll each ball out thin. Cook on a hot griddle with a little oil, 1 minute on each side, until brown spots appear. They puff in places.\n\nBitterness softens with salt: if the leaves taste strong, sprinkle them with salt for 10 minutes and squeeze before kneading.',
    ing: [
      '250 g whole wheat flour (atta)',
      '60 g fresh fenugreek leaves, finely chopped',
      '100 g plain yoghurt',
      '1 tbsp sesame seeds',
      '1/2 tsp ground turmeric',
      '1 tsp chilli powder',
      '1 tsp ground cumin',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '80 ml water',
      '3 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Mix the flour, fenugreek, yoghurt, sesame seeds, spices, salt and the 2 tbsp oil. Add the water gradually and knead to a smooth, firm dough.',
      'Cover and rest for 20 minutes.',
      'Divide into 8 balls and roll each into a thin round about 15 cm across, dusting with flour as needed.',
      'Heat a griddle or frying pan over a medium-high heat. Cook each thepla for 1 minute on one side, flip, brush with a little oil, and cook for 1 minute more, pressing lightly.',
      'Stack the cooked thepla in a cloth to keep them soft.'
    ],
    tips: [
      'Roll thin; thick thepla stay doughy.',
      'Wrap in foil to keep for travel.',
      'Serve with pickle or plain yoghurt.'
    ],
    pair: ['Plain yoghurt', 'Mango pickle', 'Masala chai', 'Chundo (sweet mango relish)'],
    store: 'Keeps wrapped at room temperature for 2 days or in the fridge for 5 days. Reheat on a griddle.',
    nut: [303, 8, 34, 15, 8, 1, 410]
  },

  'undhiyu': {
    d: 'A Gujarati mixed vegetable dish of potato, sweet potato, aubergine and beans cooked in a coconut and green herb masala.',
    meta: 'Undhiyu: Gujarati mixed vegetables in a coconut and green herb masala. Six servings, cooked for 45 minutes.',
    kw: ['undhiyu', 'undhiyu recipe', 'gujarati undhiyu', 'mixed vegetable undhiyu', 'winter vegetable curry from gujarat'],
    why: 'A Sunday dish for a table of six, and better on Monday. Undhiyu is a Gujarati winter dish of mixed vegetables, and the point is the variety: each piece takes the green masala differently, and the whole pot is both rich and fresh.\n\nThe masala is made from grated coconut, coriander leaves, green chillies, ginger, garlic, sesame seeds, sugar and lemon. It is ground to a rough paste and half of it is used to stuff the small aubergines, while the rest is stirred into the pot. **Stuffing the aubergines is optional but worth it.** Slit each one in a cross, fill the gap with masala, and the flavour goes right to the centre.\n\nHeat the oil with ajwain and asafoetida, then add the vegetables in the order of their cooking time: potatoes and sweet potato first, then beans and aubergines. Cook covered over a low heat for 35 minutes, stirring gently only once or twice.\n\nUndhiyu is cooked without much water. The vegetables steam in their own juices, and the dish ends up moist but not wet.',
    ing: [
      '# Green masala',
      '80 g grated fresh coconut',
      '1 large bunch fresh coriander, about 80 g',
      '4 green chillies',
      '1 tbsp ginger, chopped',
      '4 garlic cloves',
      '1 tbsp sesame seeds',
      '1 tbsp sugar',
      '1 tbsp lemon juice',
      '1 tsp salt',
      '# Vegetables',
      '4 tbsp vegetable oil',
      '1/2 tsp ajwain seeds',
      '1/4 tsp asafoetida',
      '300 g small potatoes, halved',
      '250 g sweet potato, peeled and cut into 4 cm pieces',
      '6 baby aubergines, about 250 g',
      '150 g green beans, trimmed and halved',
      '1/2 tsp ground turmeric',
      '100 ml water'
    ],
    st: [
      'Grind the coconut, coriander, chillies, ginger, garlic, sesame seeds, sugar, lemon juice and salt to a rough paste.',
      'Slit each baby aubergine into quarters from the base, leaving the stalk end whole, and stuff with some of the paste.',
      'Heat the oil in a wide, heavy pan. Add the ajwain and asafoetida, then the potatoes and sweet potato with the turmeric. Cook for 5 minutes.',
      'Add the green beans, aubergines, the remaining masala and the water. Cover and cook over a low heat for 35 minutes, turning gently twice, until all the vegetables are tender.'
    ],
    tips: [
      'Do not stir roughly; the vegetables should stay whole.',
      'Use a wide pan so the vegetables sit in a single layer.',
      'Add a handful of fresh green peas if you have them.'
    ],
    pair: ['Puri', 'Plain rice and dal', 'Buttermilk', 'Jalebi for dessert'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [263, 4, 28, 15, 7, 8, 430]
  },

  'handvo': {
    d: 'A savoury Gujarati cake of fermented rice and lentil batter with grated bottle gourd, sesame and spices, cooked until golden with a crisp crust.',
    meta: 'Handvo: a savoury Gujarati cake of fermented rice and lentil batter with bottle gourd and sesame. Six servings, cooked for 40 minutes.',
    kw: ['handvo', 'handvo recipe', 'gujarati handvo', 'savoury lentil cake', 'bottle gourd handvo'],
    why: 'What is the difference between a savoury cake and a lentil pancake? Time. The batter for handvo is soaked overnight, ground, and left to ferment for 6 hours until it is bubbly and slightly sour. It rises in the pan the way a cake does, and it comes out with a crust.\n\nUse a mixture of rice and lentils: rice, chana dal, toor dal and urad dal, in roughly equal parts. Soak them together for 8 hours, then grind with a little yoghurt to a thick, coarse batter that falls off a spoon in ribbons. Stir in grated bottle gourd, ginger, green chilli, turmeric and sugar.\n\n**Stir the fermented batter lightly and do not beat the air out of it.** The bubbles are what make the cake rise.\n\nCook it in an oiled, heavy pan, covered, over a low heat for 20 minutes on each side. Flip it using a plate. The base should be dark gold and crisp, and the middle should be set and spongy. A tempering of mustard seeds and sesame seeds goes on the top before the pan is covered.',
    ing: [
      '100 g basmati rice',
      '40 g chana dal',
      '40 g toor dal',
      '20 g urad dal',
      '100 g plain yoghurt',
      '200 g bottle gourd, grated',
      '1 tbsp ginger, grated',
      '2 green chillies, chopped',
      '1/2 tsp ground turmeric',
      '1 tsp sugar',
      '1 tsp salt',
      '1/2 tsp bicarbonate of soda',
      '4 tbsp vegetable oil',
      '1 tsp mustard seeds',
      '2 tbsp sesame seeds',
      '1 sprig curry leaves'
    ],
    st: [
      'Soak the rice and all three dals together in cold water for 8 hours. Drain and grind with the yoghurt and a little water to a thick, coarse batter. Cover and ferment for 6 hours.',
      'Stir the bottle gourd, ginger, chillies, turmeric, sugar and salt into the batter. Just before cooking, stir in the bicarbonate of soda.',
      'Heat 2 tbsp of the oil in a heavy 24 cm non-stick pan. Add half the mustard seeds, sesame seeds and curry leaves until they crackle.',
      'Pour in the batter and smooth the top. Scatter over the remaining mustard and sesame seeds. Cover and cook over a low heat for 20 minutes.',
      'Turn the cake onto a plate, add the remaining oil to the pan and slide the cake back in. Cook, covered, for 20 minutes more until the base is crisp and golden.'
    ],
    tips: [
      'Keep the heat low so the centre cooks before the base burns.',
      'A skewer pushed into the middle should come out clean.',
      'Warm weather speeds fermentation; check the batter after 4 hours.'
    ],
    pair: ['Green chutney', 'Masala chai', 'Plain yoghurt', 'Garlic chutney'],
    store: 'Keeps in the fridge for 3 days. Reheat slices in a pan to crisp the crust.',
    nut: [244, 7, 27, 12, 4, 3, 520],
    rest: [840, 'Soaking and fermenting']
  },

  'rava-dosa': {
    d: 'Thin, lacy crepes of semolina, rice flour and plain flour with cumin and black pepper, poured from a height onto a hot pan.',
    meta: 'Rava dosa: thin, lacy crepes of semolina and rice flour with cumin and pepper. Four servings, cooked for 20 minutes.',
    kw: ['rava dosa', 'rava dosa recipe', 'instant rava dosa', 'crispy semolina dosa', 'onion rava dosa'],
    why: 'Rava dosa began as a shortcut, and it was made for people who did not want to wait for a batter to ferment overnight. Semolina (rava), rice flour and plain flour are mixed with sour yoghurt and water, rested for 30 minutes, and poured straight onto a hot pan.\n\nThe batter is very thin, much thinner than any pancake batter, about like single cream. That is why it makes holes. **Stir the batter before every dosa.** The semolina settles to the bottom in seconds, and the last dosa from an unstirred batter comes out thick and pale.\n\nThe pan has to be hot. Test it with a splash of water: it should sizzle and vanish. Pour the batter from a height of 10 cm, starting at the outside and working in a spiral to the middle, with gaps left on purpose. Drizzle oil around the edges.\n\nCook for 3 minutes without flipping, until the underside is golden and the surface looks dry. Fold and serve straight away. Rava dosa goes soft within minutes if it is left.',
    ing: [
      '100 g fine semolina (rava)',
      '50 g rice flour',
      '30 g plain flour',
      '100 g plain yoghurt',
      '500 ml water',
      '1 tsp cumin seeds',
      '1/2 tsp black peppercorns, crushed',
      '1 green chilli, finely chopped',
      '1 tbsp chopped fresh coriander',
      '1 small onion, about 80 g, finely chopped',
      '3/4 tsp salt',
      '4 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Whisk the semolina, rice flour, plain flour, yoghurt, water and salt to a very thin batter. Stir in the cumin, pepper, chilli and coriander. Rest for 30 minutes.',
      'Heat a flat non-stick or cast-iron pan over a medium-high heat until a splash of water sizzles and vanishes.',
      'Stir the batter well. Pour a ladleful from a height of 10 cm in a spiral, from the outside in, leaving gaps. Scatter with a little onion.',
      'Drizzle a teaspoon of oil around the edges and cook for 3 minutes until golden and crisp. Fold and serve at once.'
    ],
    tips: [
      'Keep stirring the batter between dosas.',
      'Lower the heat a little if the first dosa browns too fast.',
      'Do not flip; the top cooks from the steam.'
    ],
    pair: ['Coconut chutney', 'Sambar', 'Tomato chutney', 'Masala chai'],
    store: 'Best eaten at once. The batter keeps in the fridge for 1 day; stir well.',
    nut: [315, 8, 37, 15, 2, 2, 450]
  },

  'avial': {
    d: 'Mixed vegetables simmered until just tender and bound with a coarse paste of coconut, green chilli, cumin and yoghurt, finished with raw coconut oil.',
    meta: 'Avial: mixed vegetables bound with a coarse coconut, green chilli, cumin and yoghurt paste. Four servings, cooked for 25 minutes.',
    kw: ['avial', 'avial recipe', 'kerala avial', 'mixed vegetable avial', 'avial with coconut and yoghurt'],
    why: 'Coconut, curry leaves, green chillies, cumin, yoghurt: the list is short, and the dish depends on the vegetables being cut the right way. Avial uses long batons about 6 cm long and 1 cm thick, so every piece looks alike and cooks at the same speed.\n\nUse a mix of firm vegetables. Carrot, raw plantain, green beans, yam, courgette and drumstick are traditional. Add them in order of how long they take: firm roots first, softer ones later. They simmer in a little water with turmeric and salt until just tender, about 12 minutes. **Do not stir hard.** The vegetables should keep their shape.\n\nThe paste is grated coconut, green chillies and cumin ground to a coarse texture, not a smooth one. It is stirred into the pan, followed by whisked sour yoghurt. Warm it through for 2 minutes, but do not boil, or the yoghurt will split.\n\nThe last touch matters most: raw coconut oil and fresh curry leaves, stirred in off the heat. Their perfume is what makes it avial.',
    ing: [
      '200 g carrots, cut into 6 cm batons',
      '200 g raw plantain or potato, cut into batons',
      '150 g green beans, trimmed and halved',
      '150 g courgette, cut into batons',
      '1/2 tsp ground turmeric',
      '1 tsp salt',
      '150 ml water',
      '80 g grated fresh coconut',
      '3 green chillies',
      '1 tsp cumin seeds',
      '100 g plain yoghurt, whisked',
      '2 tbsp coconut oil',
      '2 sprigs curry leaves'
    ],
    st: [
      'Put the carrots and plantain in a wide pan with the turmeric, salt and water. Cover and cook for 6 minutes.',
      'Add the beans and courgette, cover and cook for 6 minutes more, until just tender.',
      'Grind the coconut, green chillies and cumin to a coarse paste with 2 tablespoons of water.',
      'Stir the paste into the vegetables and cook for 3 minutes. Lower the heat and stir in the yoghurt. Warm through for 2 minutes without boiling.',
      'Off the heat, stir in the coconut oil and curry leaves.'
    ],
    tips: [
      'Cut the vegetables evenly for even cooking.',
      'Use sour yoghurt if you can; it gives avial its tang.',
      'Add the coconut oil at the end; heat dulls its aroma.'
    ],
    pair: ['Steamed rice', 'Sambar', 'Kerala parotta', 'Papadums'],
    store: 'Best eaten the day it is made. Keeps in the fridge for 2 days.',
    nut: [279, 6, 30, 15, 6, 15, 650]
  },

  'kerala-parotta': {
    d: 'Flaky, layered flatbreads of plain flour dough rolled thin, coiled and flattened, then cooked on a hot griddle with oil.',
    meta: 'Kerala parotta: flaky layered flatbreads of plain flour dough, coiled and cooked on a hot griddle. Makes six, cooked for 20 minutes.',
    kw: ['kerala parotta', 'kerala parotta recipe', 'malabar parotta', 'layered flaky parotta', 'parotta with plain flour'],
    why: 'Rest the dough for two hours. Every other step of a parotta is manual skill, but this one is waiting, and it is the one that makes the layers separate.\n\nThe dough is plain flour, an egg, milk, sugar, salt, oil and water. It should be soft, a little sticky and quite oily. Knead for 10 minutes until smooth, then coat the dough balls in oil and leave them covered for 2 hours so the gluten relaxes. Stretchy, relaxed dough rolls paper thin without tearing.\n\n**Roll each ball as thin as you can, then pleat it like a fan.** The folds make the layers. Pleat the sheet into a long rope, coil it into a snail, and leave the coils to rest for 10 minutes.\n\nFlatten each coil gently with the heel of your hand and roll to a 15 cm disc. Cook on a hot griddle for 2 minutes a side with a little oil, then clap the cooked parotta between your palms to separate the layers. The sound is part of the technique.',
    ing: [
      '400 g plain flour',
      '1 egg',
      '100 ml milk',
      '1 tbsp sugar',
      '1 tsp salt',
      '4 tbsp vegetable oil, plus extra for coating',
      '120 ml warm water',
      '4 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Mix the flour, sugar and salt. Add the egg, milk, 4 tbsp oil and enough warm water to make a soft, slightly sticky dough. Knead for 10 minutes.',
      'Divide into 6 balls, coat each well in oil, cover and rest for 2 hours.',
      'Roll each ball into a very thin rectangle. Pleat it like a fan into a long rope, then coil into a spiral and tuck the end underneath. Rest for 10 minutes.',
      'Flatten each coil and roll to a 15 cm disc.',
      'Cook on a hot griddle with a little oil for 2 minutes on each side. Clap between your palms to open the layers.'
    ],
    tips: [
      'Oil your hands and the work surface generously.',
      'Do not skip the 2-hour rest; thin dough tears without it.',
      'Keep the cooked parotta wrapped in a cloth.'
    ],
    pair: ['Kerala beef curry', 'Kerala chicken curry', 'Vegetable korma', 'Egg roast'],
    store: 'Best eaten fresh. Keeps wrapped for 1 day and reheats on a griddle.',
    nut: [428, 8, 54, 20, 2, 3, 410],
    rest: [120, 'Resting the dough']
  }
};
