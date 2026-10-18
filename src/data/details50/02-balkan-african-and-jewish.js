'use strict';

/**
 * Volume fifty — Europe, Africa and Jewish cooking, second part.
 *
 * Twenty-five dishes: Croatian peka, West African pounded yam, moi moi,
 * ofada rice, banku with okra stew and two Ghanaian soups, Ivorian attiéké,
 * Cameroonian ndolé, Ethiopian kitfo, gomen and Eritrean zigni, Somali rice
 * and sambusa, Zanzibar pizza, the Ugandan rolex, South African potjiekos and
 * pap, and seven Ashkenazi dishes: blintzes, gefilte fish, cholent, knish,
 * chopped liver, charoset and tzimmes. Waits of an hour or more are declared
 * as rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'croatian-peka': {
    d: 'Lamb, potatoes, carrots and onions slow-roasted together under a lid with rosemary, olive oil and white wine until the meat falls from the bone.',
    meta: 'Croatian peka: lamb, potatoes, carrots and onions slow-roasted under a lid with rosemary, olive oil and white wine. Six servings, cooked for 2 and a half hours.',
    kw: ['croatian peka', 'peka recipe', 'dalmatian peka', 'croatian lamb and vegetables under the bell', 'peka lamb with potatoes'],
    why: 'In Dalmatia, a peka is a heavy iron dome that is placed over a dish of meat and vegetables in a wood fire, and covered with hot embers. The food cooks slowly in its own steam and in the smoke, and comes out so tender that it falls apart under a spoon. A home oven and a heavy lidded casserole come surprisingly close.\n\nThe ingredients are plain: lamb shoulder or veal on the bone, waxy potatoes, carrots, onions, garlic, rosemary and olive oil. White wine goes in, and nothing else. No stock, no water. The vegetables sit under the meat and absorb its fat as it melts, so they cook in the richest juices. **Don\'t add more liquid than a glass of wine.** The meat releases plenty of its own.\n\nLayer the onions on the base, then the meat, then the potatoes and carrots, and drizzle everything with olive oil. Cover the dish with its lid, and seal the gap with a strip of foil. Bake at 170°C for 2 hours 30 minutes, without opening.\n\nTo finish, remove the lid for the last 20 minutes, raise the oven to 200°C and let the top brown. Bring the dish to the table and serve straight from it.',
    ing: [
      '1.5 kg lamb shoulder on the bone, cut into large pieces',
      '2 onions, about 300 g, sliced',
      '800 g waxy potatoes, halved',
      '4 carrots, about 400 g, cut into chunks',
      '8 garlic cloves, whole',
      '4 sprigs fresh rosemary',
      '4 tbsp olive oil',
      '150 ml dry white wine',
      '2 tsp salt',
      '1 tsp ground black pepper'
    ],
    st: [
      'Heat the oven to 170°C (150°C fan). Spread the onions in the base of a large, heavy casserole.',
      'Lay the lamb on the onions, tuck in the garlic and rosemary and season with half the salt and pepper.',
      'Arrange the potatoes and carrots around and on top. Season with the remaining salt and pepper, drizzle with the oil and pour in the wine.',
      'Cover with the lid, seal the gap with foil, and cook for 2 hours 10 minutes without opening.',
      'Remove the lid, raise the oven to 200°C (180°C fan) and cook for 20 minutes until browned on top.'
    ],
    tips: [
      'Seal the lid well.',
      'Do not open the oven during the covered cooking.',
      'Serve with a green salad and crusty bread.'
    ],
    pair: ['Green salad', 'Crusty bread', 'Red wine', 'Pickled peppers'],
    store: 'Keeps in the fridge for 3 days. Reheat in a covered dish.',
    nut: [872, 47, 36, 60, 6, 7, 1020]
  },

  'pounded-yam': {
    d: 'Boiled white yam pounded until smooth, stretchy and glossy, the classic Nigerian partner to egusi and other soups.',
    meta: 'Pounded yam: boiled white yam pounded until smooth, stretchy and glossy, served with Nigerian soups. Four servings, cooked for 25 minutes.',
    kw: ['pounded yam', 'pounded yam recipe', 'how to make pounded yam', 'nigerian pounded yam', 'pounded yam without mortar'],
    why: 'Does pounded yam need a mortar? Traditionally, yes, a wooden mortar and a pestle used with a rhythm, but in a modern kitchen a food processor or a stand mixer with a dough hook does the same work in minutes. The result is smooth, stretchy and slightly sticky, with no lumps.\n\nThe yam matters. Use white yam (the rough, brown, bark-skinned tuber from African grocers), not the orange sweet potato sold as yam in the US. Peel it thickly, cut into slabs, and boil in plain water for 25 minutes, until a knife slides through it with no resistance. **Drain well, and pound or blend it while it is still hot.** Cold yam turns hard and will not become smooth.\n\nPut the hot yam in a food processor in batches, with a spoonful of the cooking water, and pulse until a smooth dough forms. Then process for 1 to 2 minutes until the mass becomes stretchy and pulls away from the sides. If it is too stiff, add a spoonful of hot water. If it is too sticky, add a little more yam.\n\nShape into balls with wet hands, wrap in cling film for a moment to make them smooth, and serve with egusi soup or okra.',
    ing: [
      '1 kg white yam, peeled and cut into 5 cm slabs',
      '1 tsp salt',
      '1 litre water',
      '4 tbsp hot cooking water'
    ],
    st: [
      'Put the yam, salt and water in a pan. Bring to a boil and cook for 25 minutes until completely tender. Drain, keeping some of the water.',
      'While hot, blend the yam in 2 batches in a food processor with the hot cooking water until a smooth dough forms.',
      'Process for 1 to 2 minutes more until stretchy. Add a little more hot water if it is stiff.',
      'With wet hands, shape into 4 smooth balls and serve at once.'
    ],
    tips: [
      'Work with the yam while it is hot.',
      'Add water a spoonful at a time.',
      'Use yam flour as a shortcut: mix with boiling water and stir.'
    ],
    pair: ['Egusi soup', 'Efo riro', 'Okra soup', 'Ogbono soup'],
    store: 'Best eaten at once. Keeps wrapped in the fridge for 1 day; reheat in a microwave with a splash of water.',
    nut: [305, 4, 70, 1, 10, 1, 610]
  },

  'moi-moi': {
    d: 'A steamed pudding of blended black-eyed beans, red pepper, onion and oil, soft and savoury, cooked in small moulds or foil.',
    meta: 'Moi moi: a steamed pudding of blended black-eyed beans, red pepper, onion and oil. Six servings, steamed for 60 minutes.',
    kw: ['moi moi', 'moi moi recipe', 'nigerian moi moi', 'steamed bean pudding nigeria', 'moin moin black eyed bean pudding'],
    why: 'A party food in Nigeria, found at weddings and naming ceremonies next to jollof rice, moi moi is a steamed bean pudding, and it should be so soft that it can be cut with a spoon. The beans are blended to a very smooth batter with red peppers and onion, and the batter is seasoned, thickened with oil and steamed in small moulds.\n\nDry black-eyed beans are traditionally soaked and skinned by hand, which takes time. Tinned black-eyed beans, drained and rinsed, are a good shortcut: they blend to a smooth purée without peeling. **Blend the batter until it is completely silky, then beat it by hand for a minute.** The air makes the pudding light.\n\nThe seasoning is red pepper, onion, a little scotch bonnet, salt and plenty of vegetable oil or palm oil, which makes the finished moi moi rich and orange. A beaten egg or a few pieces of boiled fish or egg can be added to the mould.\n\nPour the batter into ramekins, foil cups or small tins, cover with foil, and steam over simmering water for 45 minutes. A skewer should come out clean. Serve warm, in slices, with pap or jollof rice.',
    ing: [
      '800 g tinned black-eyed beans, drained and rinsed',
      '1 red pepper, about 150 g, chopped',
      '1 onion, about 150 g, chopped',
      '1 scotch bonnet chilli, deseeded',
      '100 ml vegetable oil or palm oil',
      '200 ml hot water',
      '1 tsp salt',
      '2 eggs, boiled and sliced',
      '1 tbsp ground crayfish, optional'
    ],
    st: [
      'Blend the beans, pepper, onion and scotch bonnet with the hot water until completely smooth.',
      'Beat in the oil, salt and crayfish by hand for 1 minute until the batter is light.',
      'Pour the batter into 6 oiled ramekins or foil cups, filling to three-quarters. Add slices of egg to each.',
      'Cover each with foil and steam over simmering water for 45 minutes until firm.',
      'Cool for 5 minutes, then turn out or serve in the moulds.'
    ],
    tips: [
      'Blend the batter very smooth.',
      'Cover tightly so water does not drip in.',
      'Use a larger mould and cut into slices if you prefer.'
    ],
    pair: ['Jollof rice', 'Pap (ogi)', 'Fried plantain', 'Stew'],
    store: 'Keeps in the fridge for 3 days or freezes for up to 1 month. Reheat by steaming.',
    nut: [318, 12, 27, 18, 9, 5, 820]
  },

  'ofada-rice': {
    d: 'Nutty local brown rice served with ayamase, a fiery green pepper and palm oil stew with beef and boiled eggs, a Nigerian speciality.',
    meta: 'Ofada rice: nutty brown rice served with ayamase, a fiery green pepper and palm oil stew with beef and boiled eggs. Six servings, about an hour of cooking with the pans going side by side.',
    kw: ['ofada rice', 'ofada rice and ayamase', 'ofada stew', 'nigerian ofada rice recipe', 'ayamase green pepper stew'],
    why: 'The sauce is green, and the green is the point. Ayamase, sometimes called designer stew, is a Nigerian sauce built on a mountain of green peppers, scotch bonnets and plenty of palm oil, cooked until the oil separates and the peppers turn to a dark, fragrant olive paste. It goes with ofada rice, a local, unpolished, nutty rice that is a little sticky and has a strong aroma.\n\nOfada rice is hard to find in the UK and elsewhere, so brown basmati or a short-grain brown rice makes a good substitute. Wash it thoroughly, boil for 30 minutes, and drain. Traditional ofada is served in leaves, which gives a faint woody smell; banana leaves or baking paper are alternatives.\n\nThe stew begins with red palm oil, heated until it just starts to smoke and turns clear, then cooled slightly. Fry onions in it, add the blended green peppers and scotch bonnets, and cook for 25 minutes. **Do not rush the peppers.** They have to cook until the water has gone and the oil sits on top.\n\nAdd the beef, boiled until tender, and the boiled eggs, cooked in the sauce for 10 minutes. Serve with the rice.',
    ing: [
      '# Rice',
      '400 g brown rice',
      '1 tsp salt',
      '# Ayamase',
      '5 tbsp red palm oil',
      '2 onions, about 300 g, chopped',
      '4 green peppers, about 600 g',
      '3 scotch bonnet chillies, deseeded',
      '600 g beef shin, cut into 4 cm pieces',
      '1 litre water',
      '1 tsp salt',
      '1 tbsp ground crayfish',
      '4 eggs, boiled and peeled'
    ],
    st: [
      'Boil the beef in the water with a pinch of the salt for 50 minutes until tender. Keep the stock.',
      'While the beef cooks, boil the rice in plenty of water with the salt for 30 minutes. Drain.',
      'Meanwhile, blend the green peppers and scotch bonnets until nearly smooth. Cook in a dry pan for 10 minutes to drive off water.',
      'Heat the palm oil in a large pan until it just starts to smoke. Cool for 1 minute, add the onions and cook for 5 minutes. Add the peppers and cook for 25 minutes until dark and the oil separates.',
      'Add the beef, 150 ml of the stock, salt and crayfish. Simmer for 10 minutes, add the eggs and serve with the rice.'
    ],
    tips: [
      'Cook the pepper mixture until dry.',
      'Use less scotch bonnet for a milder stew.',
      'Serve with plantain on the side.'
    ],
    pair: ['Boiled eggs', 'Fried plantain', 'Cow skin (ponmo)', 'Cold drinks'],
    store: 'Keeps in the fridge for 3 days. Reheat the stew and rice separately.',
    nut: [645, 31, 65, 29, 4, 7, 910]
  },

  'banku-with-okra-stew': {
    d: 'Soft, slightly sour Ghanaian dough of corn and cassava flour stirred over heat, served with a tomato and okra stew.',
    meta: 'Banku with okra stew: soft Ghanaian dough of corn and cassava flour stirred over heat, with a tomato and okra stew. Four servings, cooked for 40 minutes.',
    kw: ['banku with okra stew', 'banku recipe', 'ghanaian banku and okra stew', 'banku and okro', 'ghana banku with fish stew'],
    why: 'Banku is made by stirring, and the stirring takes arm strength. A mixture of corn flour and cassava flour is cooked with water in a heavy pot, and as it thickens, it has to be beaten against the side with a wooden spoon, folded and beaten again until it is smooth, stretchy and shiny. The work takes 15 minutes and gives the dough its unique springy texture.\n\nTraditionally the dough is made from fermented corn and cassava dough, which gives a light tang. A good shortcut is to use fine corn flour and cassava flour, with a spoonful of plain yoghurt or lemon juice to add some sourness. **Mix the flours with cold water first, to a smooth batter.** Then cook it on a low heat, stirring.\n\nThe stew is simple and quick. Okra is sliced and cooked with onion, tomato, scotch bonnet and a little palm oil. It becomes slimy by design: the sticky okra is what makes it a dipping sauce. Smoked fish or prawns add a deep flavour.\n\nShape the banku into balls with a wet spoon, and serve in a bowl with the stew. Eat with the fingers: pinch off a piece, dip, and swallow.',
    ing: [
      '# Banku',
      '200 g fine corn flour',
      '100 g cassava flour',
      '2 tbsp plain yoghurt',
      '600 ml cold water, plus a little hot water',
      '1/2 tsp salt',
      '# Okra stew',
      '3 tbsp red palm oil or vegetable oil',
      '1 onion, about 150 g, chopped',
      '300 g okra, sliced',
      '3 tomatoes, about 300 g, blended',
      '1 scotch bonnet chilli, deseeded and chopped',
      '150 g smoked fish, flaked',
      '200 g raw prawns, peeled',
      '1 tsp salt',
      '100 ml water'
    ],
    st: [
      'For the stew, heat the oil and cook the onion for 5 minutes. Add the tomatoes and chilli and cook for 10 minutes.',
      'Add the okra, smoked fish, salt and water and simmer for 12 minutes. Add the prawns for the last 4 minutes.',
      'For the banku, whisk the corn flour, cassava flour, yoghurt, salt and cold water until smooth. Cook over a low heat, stirring constantly, for 5 minutes until it thickens.',
      'Beat the dough against the side of the pot with a wooden spoon for 10 minutes, adding a splash of hot water if it becomes too stiff, until smooth and stretchy.',
      'Shape into balls with a wet spoon and serve with the okra stew.'
    ],
    tips: [
      'Use a heavy pot and a strong wooden spoon.',
      'Add the hot water a splash at a time.',
      'Eat while hot.'
    ],
    pair: ['Fried fish', 'Shito (pepper sauce)', 'Grilled tilapia', 'Sliced onion'],
    store: 'Best eaten straight away. The stew keeps in the fridge for 2 days.',
    nut: [456, 27, 60, 12, 6, 6, 1310]
  },

  'groundnut-soup': {
    d: 'A thick Ghanaian soup of chicken simmered with peanut butter, tomato, ginger and scotch bonnet, served with rice balls or fufu.',
    meta: 'Groundnut soup: a thick Ghanaian soup of chicken simmered with peanut butter, tomato, ginger and scotch bonnet. Six servings, cooked for 60 minutes.',
    kw: ['groundnut soup', 'ghanaian groundnut soup', 'nkate nkwan', 'groundnut soup recipe', 'ghana peanut soup with chicken'],
    why: 'Peanut butter in soup sounds odd until you taste it. In Ghana, nkate nkwan is a staple of Sundays and funerals, and the creamy peanut broth is flavoured with ginger, tomato and chilli until it tastes like a savoury, spicy, nutty stew. It is nothing like a peanut sandwich.\n\nThe butter must be plain: unsweetened, unsalted if possible, with only peanuts in the jar. Sweetened butter turns the soup cloying. Whisk it with warm water until smooth before adding it to the pot, otherwise it forms lumps that do not dissolve. **Add the peanut paste once the chicken is half cooked, and not before.** Added too soon, the nut oil separates and burns on the base.\n\nThe soup begins with chicken pieces simmered with onion, ginger, garlic and a scotch bonnet, then a tomato purée, then the peanut mixture. It cooks for 40 minutes, uncovered, stirring every few minutes. The oil rises and floats on the surface, a good sign.\n\nTaste for salt and heat, then serve in bowls with omo tuo (rice balls), banku or plain boiled rice.',
    ing: [
      '800 g chicken pieces on the bone',
      '1 onion, about 150 g, chopped',
      '1 tbsp fresh ginger, grated',
      '4 garlic cloves, crushed',
      '1 scotch bonnet chilli, whole',
      '800 ml water',
      '1 tsp salt',
      '3 tomatoes, about 300 g, blended',
      '2 tbsp tomato purée',
      '150 g unsweetened peanut butter',
      '200 ml warm water'
    ],
    st: [
      'Put the chicken, onion, ginger, garlic, scotch bonnet, water and salt in a pot. Bring to a boil and simmer for 20 minutes.',
      'Add the blended tomatoes and tomato purée and simmer for 10 minutes.',
      'Whisk the peanut butter with the warm water until smooth. Stir into the soup.',
      'Simmer uncovered for 30 minutes, stirring every few minutes, until the oil floats on top and the soup is thick. Remove the whole scotch bonnet.'
    ],
    tips: [
      'Whisk the peanut butter smooth before adding.',
      'Leave the scotch bonnet whole for mild heat.',
      'Add smoked fish for extra flavour.'
    ],
    pair: ['Omo tuo (rice balls)', 'Fufu', 'Banku', 'Boiled rice'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [446, 33, 11, 30, 3, 4, 500]
  },

  'ghanaian-light-soup': {
    d: 'A thin, fiery tomato and ginger soup with chicken or goat, aubergine and scotch bonnet, served with fufu or rice.',
    meta: 'Ghanaian light soup: a thin, fiery tomato and ginger soup with chicken, aubergine and scotch bonnet. Four servings, cooked for 45 minutes.',
    kw: ['ghanaian light soup', 'light soup ghana', 'light soup recipe', 'ghana tomato pepper soup with chicken', 'light soup with fufu'],
    why: 'It is called light, but it is not mild. Light soup is a Ghanaian broth that is thin as water, orange-red from tomato and fiery with scotch bonnet and fresh ginger, and it is the soup people eat when they have a cold or when they want something comforting. The name refers to its clarity; there are no thickeners.\n\nThe base is made of onions, tomatoes, ginger, garlic and a scotch bonnet, blended together and boiled with chicken pieces. The soup is simmered, not stewed, so it keeps its freshness: 30 minutes is enough. The meat should be on the bone, because the bones give the broth body. **Use plenty of fresh ginger.** It is the dominant note.\n\nGarden eggs, the small white or green aubergines of West Africa, go in whole or halved for the last 10 minutes, where they turn soft and sweet. Ordinary aubergine, cut into chunks, does the same job. Add a few dried or smoked fish pieces for depth if you can find them.\n\nSeason with salt and a spoonful of ground dried shrimp or crayfish. Serve in a deep bowl, with fufu or plain rice on the side, and a spoon.',
    ing: [
      '800 g chicken pieces on the bone',
      '1 onion, about 150 g, chopped',
      '4 tomatoes, about 400 g',
      '3 cm piece fresh ginger',
      '4 garlic cloves',
      '1 scotch bonnet chilli',
      '1 litre water',
      '1 tsp salt',
      '1 aubergine, about 300 g, cut into 3 cm chunks',
      '1 tbsp ground crayfish or dried shrimp',
      '2 tbsp chopped fresh basil or scent leaves'
    ],
    st: [
      'Blend the onion, tomatoes, ginger, garlic and scotch bonnet until smooth.',
      'Put the chicken in a pot with the blended mixture, water and salt. Bring to a boil, then simmer for 30 minutes.',
      'Add the aubergine and crayfish and simmer for 10 minutes until tender.',
      'Stir in the basil and serve hot.'
    ],
    tips: [
      'Skim any foam from the surface.',
      'Use less scotch bonnet for a milder soup.',
      'Serve with fufu for authenticity.'
    ],
    pair: ['Fufu', 'Banku', 'Boiled yam', 'Plain rice'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [467, 41, 15, 27, 4, 7, 750]
  },

  'attieke': {
    d: 'Fine steamed cassava couscous from Côte d\'Ivoire, served with a fresh tomato and onion relish and quickly cooked mackerel.',
    meta: 'Attiéké: fine steamed cassava couscous from Côte d\'Ivoire, with a tomato and onion relish and quickly cooked mackerel. Four servings, cooked for 15 minutes.',
    kw: ['attieke', 'attiéké', 'ivorian attieke', 'attieke with fish', 'cassava couscous attieke'],
    why: 'It tastes of cassava with a faint, pleasant sourness, because attiéké is made from fermented grated cassava, steamed until light and fluffy. In Abidjan it is the standard side dish, eaten at lunch in the street under a plastic awning, with fried fish and a pile of raw onion and tomato.\n\nBuy it ready-made. Attiéké is sold in vacuum packs in African and Caribbean shops, either fresh or dried and rehydrated. The instructions are simple: sprinkle with a little water, then steam. **Do not boil it.** It turns to a paste in water, and what you want is light, separate grains.\n\nSteam for 5 minutes in a colander or steamer lined with muslin. Fluff with a fork, stir in a little oil, and cover to keep warm.\n\nThe relish is raw: chopped tomatoes, red onion, scotch bonnet, lime juice and salt. It should be sharp and fresh. The fish is mackerel, cooked in a hot pan with salt, pepper and a little oil for 4 minutes on each side, until the skin is crisp and charred. Serve all three together on a plate.',
    ing: [
      '500 g attiéké (cassava couscous)',
      '4 tbsp water',
      '2 tbsp vegetable oil',
      '4 tomatoes, about 400 g, chopped',
      '1 red onion, about 100 g, chopped',
      '1 scotch bonnet chilli, deseeded and finely chopped',
      '2 tbsp lime juice',
      '1/2 tsp salt',
      '4 mackerel fillets, about 400 g',
      '1/2 tsp salt, for the fish',
      '1/2 tsp ground black pepper',
      '1 tbsp vegetable oil, for the fish'
    ],
    st: [
      'Sprinkle the attiéké with the water and break up any lumps. Steam in a lined colander over boiling water for 5 minutes. Fluff with a fork and stir in the 2 tbsp oil.',
      'Mix the tomatoes, onion, chilli, lime juice and the first 1/2 tsp salt.',
      'Season the mackerel with the second 1/2 tsp salt and the pepper. Heat the 1 tbsp oil in a hot pan and cook the fillets skin-side down for 4 minutes, then turn and cook for 3 minutes.',
      'Serve the attiéké with the relish and fish.'
    ],
    tips: [
      'Do not add too much water to the attiéké.',
      'Cook the mackerel in a very hot pan.',
      'Add sliced cucumber and a boiled egg for a more complete plate.'
    ],
    pair: ['Sliced cucumber', 'Boiled egg', 'Fried plantain', 'Lime wedges'],
    store: 'Best eaten straight away. The attiéké keeps in the fridge for 2 days.',
    nut: [787, 37, 99, 27, 8, 5, 700]
  },

  'ndole': {
    d: 'A Cameroonian stew of bitter greens, ground peanuts, beef and prawns cooked in a deep, creamy sauce flavoured with garlic and crayfish.',
    meta: 'Ndolé: a Cameroonian stew of bitter greens, ground peanuts, beef and prawns in a deep, creamy sauce. Six servings, cooked for 60 minutes.',
    kw: ['ndole', 'ndolé', 'cameroonian ndole', 'ndole recipe', 'cameroon bitterleaf and peanut stew'],
    why: 'Ndolé is a national dish of Cameroon, served at weddings and on Sundays, and the leaves it is named for are bitter. Fresh ndolé leaves, from a Vernonia plant, are available frozen in African shops, and they must be boiled to remove their harshest bitterness before they go into the stew. Without them, a mix of spinach and kale with a handful of rocket gives a similar, gentler bitterness.\n\nThe sauce is the other half. Peanuts are skinned and ground to a smooth paste with onions, garlic and ginger. The paste is fried in oil until it darkens and smells sweet, then thinned with stock. **Stir it often while it cooks.** Peanut paste catches on the base very easily.\n\nBeef is boiled first with onions until tender. Prawns, smoked fish and ground crayfish go in at the end, adding salt and depth. The greens are squeezed dry and stirred in last, cooked for 10 minutes until their bitterness softens into the sauce.\n\nThe finished stew is dark green-brown, thick and oily. It is served with boiled plantain, bobolo (fermented cassava sticks) or rice, and fried onions on top.',
    ing: [
      '500 g beef stewing steak, cut into 3 cm pieces',
      '1 litre water',
      '2 onions, about 300 g, chopped',
      '1 tsp salt',
      '150 g roasted unsalted peanuts',
      '4 garlic cloves',
      '2 cm piece fresh ginger',
      '4 tbsp vegetable oil',
      '300 g fresh spinach',
      '200 g kale, stems removed',
      '50 g rocket',
      '200 g raw prawns, peeled',
      '2 tbsp ground crayfish',
      '1 tbsp fried onions'
    ],
    st: [
      'Boil the beef with half the onions, the salt and the water for 40 minutes until tender. Keep the stock.',
      'Blend the peanuts, garlic, ginger and the remaining onions to a smooth paste with a little stock. Fry in the oil for 8 minutes, stirring, until darker.',
      'Add 400 ml of the stock and simmer for 10 minutes.',
      'Boil the spinach, kale and rocket in water for 3 minutes, drain and squeeze dry. Chop finely.',
      'Add the beef, greens, prawns and crayfish to the pot and simmer for 10 minutes. Scatter with the fried onions.'
    ],
    tips: [
      'Squeeze the greens very dry.',
      'Stir the peanut paste often.',
      'Use frozen ndolé leaves if you can find them.'
    ],
    pair: ['Boiled plantain', 'Bobolo', 'Rice', 'Fried fish'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 3 months.',
    nut: [452, 35, 15, 28, 5, 4, 560]
  },

  'kitfo': {
    d: 'Ethiopian minced beef gently warmed in spiced clarified butter and mitmita chilli powder, served with fresh cheese and injera.',
    meta: 'Kitfo: Ethiopian minced beef gently warmed in spiced clarified butter and mitmita chilli powder. Four servings, cooked for 10 minutes.',
    kw: ['kitfo', 'ethiopian kitfo', 'kitfo recipe', 'ethiopian minced beef with spiced butter', 'kitfo with mitmita'],
    why: 'In Ethiopia, kitfo is eaten raw or barely warmed, and it is one of the dishes that makes a visitor remember the trip. It is minced beef mixed with niter kibbeh (spiced clarified butter) and mitmita (a fiery chilli powder with cardamom and cloves), and in the version served at home it is warmed through, not cooked.\n\nHere the beef is cooked rare to medium, which is safer and which many Ethiopians prefer when they make it at home. The meat should be extremely fresh and lean, minced once, with no fat other than the butter that goes through it. Buy a clean cut such as sirloin or fillet and ask the butcher to mince it, or chop it by hand with a sharp knife. **Never use pre-packed mince that has been sitting.**\n\nMelt the niter kibbeh in a pan over a low heat. Add the mitmita, a little cardamom and salt, then the beef, and stir for 2 to 3 minutes only, just until the meat turns from red to pink at the edges. It should still be soft.\n\nServe in a mound with a spoonful of ayib (fresh cheese), cooked greens (gomen) and injera. Use the bread to scoop.',
    ing: [
      '500 g lean beef (sirloin), finely minced',
      '3 tbsp niter kibbeh or ghee',
      '1 tsp mitmita',
      '1/2 tsp ground cardamom',
      '1 tsp salt',
      '1 tbsp lemon juice',
      '100 g cottage cheese (ayib)',
      '4 pieces injera or flatbread'
    ],
    st: [
      'Melt the niter kibbeh in a pan over a low heat. Stir in the mitmita, cardamom and salt.',
      'Add the beef and stir for 2 to 3 minutes over a low heat, just until warmed through and pink at the edges.',
      'Stir in the lemon juice.',
      'Serve at once with the cottage cheese and injera.'
    ],
    tips: [
      'Use very fresh beef.',
      'Cook for as short a time as you like; the beef should be tender.',
      'Make spiced butter by simmering ghee with garlic, ginger and cardamom.'
    ],
    pair: ['Injera', 'Gomen', 'Ayib (fresh cheese)', 'Tej or honey wine'],
    store: 'Best eaten straight away.',
    nut: [504, 35, 37, 24, 2, 2, 1110]
  },

  'gomen': {
    d: 'Collard greens simmered gently with onion, garlic, ginger and spiced butter until soft and silky, an Ethiopian staple.',
    meta: 'Gomen: collard greens simmered gently with onion, garlic, ginger and spiced butter until soft and silky. Four servings, cooked for 35 minutes.',
    kw: ['gomen', 'ethiopian gomen', 'gomen recipe', 'ethiopian collard greens', 'gomen wot'],
    why: 'Simmer them for a long time, longer than you think necessary: that is the instruction. Ethiopian gomen is made from collard greens cooked until they are completely soft, silky and fragrant, and the result is a world away from the squeaky, half-cooked greens of a stir-fry. It is a dish for fasting days, when the oil is vegetable rather than butter, and for feast days, when it is made with spiced butter.\n\nWash the collards well and strip the leaves from the thick central stems. Slice the leaves into 2 cm ribbons. The stems are tough and bitter and are best discarded. **Cook them in boiling water for 5 minutes first.** This removes the harshest bitterness and shortens the cooking later.\n\nIn a wide pan, cook sliced onion in oil until golden. Add garlic, ginger, a green chilli and a pinch of turmeric. Then add the drained greens with a splash of water, cover the pan, and cook for 25 minutes over a low heat, stirring now and then.\n\nThey are ready when the colour has deepened to olive and they fall apart on the spoon. Season with salt, add a spoonful of spiced butter if using, and serve alongside injera.',
    ing: [
      '600 g collard greens, stems removed and leaves sliced',
      '3 tbsp vegetable oil',
      '1 onion, about 150 g, thinly sliced',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '1 green chilli, sliced',
      '1/4 tsp ground turmeric',
      '100 ml water',
      '3/4 tsp salt',
      '1 tbsp niter kibbeh or ghee, optional'
    ],
    st: [
      'Boil the collards in plenty of water for 5 minutes. Drain well.',
      'Heat the oil in a wide pan and cook the onion for 8 minutes until golden. Add the garlic, ginger, chilli and turmeric for 1 minute.',
      'Add the greens, water and salt. Cover and cook over a low heat for 25 minutes, stirring now and then, until completely soft.',
      'Stir in the niter kibbeh if using and serve.'
    ],
    tips: [
      'Slice the leaves thin.',
      'Do not rush the cooking.',
      'Add a squeeze of lemon at the end for freshness.'
    ],
    pair: ['Injera', 'Doro wat', 'Misir wat', 'Tibs'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [207, 5, 13, 15, 7, 3, 470]
  },

  'zigni': {
    d: 'Eritrean beef stew built on slowly cooked onions and berbere spice paste, simmered until thick, dark red and rich.',
    meta: 'Zigni: Eritrean beef stew built on slowly cooked onions and berbere, simmered until thick, dark red and rich. Four servings, cooked for 60 minutes.',
    kw: ['zigni', 'eritrean zigni', 'zigni recipe', 'tsebhi zigni', 'eritrean beef stew with berbere'],
    why: 'The onions are cooked without any oil to begin with, and that surprise is how zigni starts. Chopped onions go into a dry pan and are cooked slowly, stirring, until they lose their water and begin to catch. Only then is the oil added. This technique gives a deeper, sweeter base than frying, and it is common to both Eritrean and Ethiopian stews.\n\nThe berbere is the other main part. A good berbere, a blend of chillies, fenugreek, coriander, cardamom, cloves and other spices, is deep red and warm rather than just hot. Fry it with the onions and a spoonful of tomato paste for 10 minutes, until the oil separates. **Add a splash of water whenever the pan looks dry.** Berbere scorches and turns bitter.\n\nBeef is added next, in 3 cm cubes, with garlic, ginger and some water. Cover and simmer for 45 minutes, until tender. The sauce should be thick and almost black-red, glossy with oil.\n\nHard-boiled eggs are added for the last 5 minutes. Serve on injera, with more injera on the side for scooping. Zigni can be made with lamb or with chicken, and it tastes better the next day.',
    ing: [
      '4 onions, about 600 g, finely chopped',
      '4 tbsp vegetable oil',
      '3 tbsp berbere spice mix',
      '1 tbsp tomato purée',
      '4 garlic cloves, crushed',
      '1 tbsp fresh ginger, grated',
      '700 g beef chuck, cut into 3 cm pieces',
      '500 ml water',
      '1 tsp salt',
      '4 eggs, boiled and peeled'
    ],
    st: [
      'Cook the onions in a dry, heavy pan over a medium heat for 15 minutes, stirring, until they have lost their water and are starting to brown.',
      'Add the oil, berbere and tomato purée and cook for 10 minutes, adding a splash of water if it catches.',
      'Add the garlic, ginger, beef, water and salt. Cover and simmer for 45 minutes until tender and the sauce is thick.',
      'Add the eggs for the last 5 minutes. Serve with injera.'
    ],
    tips: [
      'Stir often while the onions cook.',
      'Add water when needed to prevent burning.',
      'The stew improves overnight.'
    ],
    pair: ['Injera', 'Ayib (fresh cheese)', 'Gomen', 'Tej'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [622, 43, 18, 42, 4, 7, 780]
  },

  'bariis-iskukaris': {
    d: 'Somali spiced rice cooked in lamb stock with cardamom, cinnamon, cloves and cumin, with raisins and fried onions.',
    meta: 'Bariis iskukaris: Somali spiced rice cooked in lamb stock with cardamom, cinnamon, cloves and cumin. Six servings, cooked for 50 minutes.',
    kw: ['bariis iskukaris', 'somali rice', 'bariis iskukaris recipe', 'somali spiced rice with lamb', 'somali basmati rice with raisins'],
    why: 'On a Somali table, bariis comes with every celebration and with most Fridays. The rice is cooked with a mixture of spices known as xawaash: cumin, coriander, cardamom, cinnamon, cloves and black pepper, and the smell of it alone brings people into the kitchen. It is eaten with a banana on the side, which is a pairing that sounds strange and works perfectly.\n\nStart with the meat. Lamb on the bone is browned in oil with onions, then simmered with the xawaash and salt in water for 40 minutes, until tender. The cooking liquid becomes the rice stock. **Measure the liquid carefully: 1.5 parts stock to 1 part rice.** If the pan is too full, it becomes sticky.\n\nSoak the basmati for 20 minutes and drain. Fry it briefly in the oil left in the pot with whole cinnamon, cardamom and cloves, then add the measured stock. Cover tightly and cook over a low heat for 15 minutes.\n\nFold in the raisins and fried onions at the end, fluffing with a fork. The rice should be dry, separate and golden, with an aroma that fills the room. Serve with the lamb on top, a banana and a spoon of sauce.',
    ing: [
      '800 g lamb shoulder on the bone, cut into pieces',
      '4 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '2 tbsp xawaash spice mix',
      '1 tsp salt',
      '800 ml water',
      '400 g basmati rice, rinsed and soaked for 20 minutes',
      '3 g cinnamon stick',
      '2 g green cardamom pods',
      '1 g cloves',
      '60 g raisins',
      '2 bananas, to serve'
    ],
    st: [
      'Heat 2 tbsp of the oil in a large pot and brown the lamb for 8 minutes. Add half the onions and cook for 5 minutes.',
      'Add the xawaash, salt and water. Cover and simmer for 40 minutes until the lamb is tender. Lift out the lamb and measure 600 ml of the stock.',
      'Cook the remaining onions in the remaining oil in the pot for 8 minutes until golden. Add the drained rice, cinnamon, cardamom and cloves and cook for 2 minutes.',
      'Add the 600 ml stock, cover tightly and cook over a low heat for 15 minutes. Rest for 5 minutes, fold in the raisins and fluff.',
      'Serve with the lamb on top and a banana on the side.'
    ],
    tips: [
      'Do not stir the rice once the stock is in.',
      'Make your own xawaash if you can.',
      'Add a sliced green chilli for heat.'
    ],
    pair: ['Banana', 'Sliced tomato and onion', 'Hot sauce', 'Black tea with cardamom'],
    store: 'Keeps in the fridge for 3 days. Reheat with a splash of water.',
    nut: [757, 29, 77, 37, 4, 13, 490]
  },

  'somali-sambusa': {
    d: 'Crisp triangular pastries filled with spiced minced beef, leek and green chilli, a Somali staple at Ramadan.',
    meta: 'Somali sambusa: crisp triangular pastries filled with spiced minced beef, leek and green chilli. Makes about twenty, cooked for 20 minutes.',
    kw: ['somali sambusa', 'sambusa recipe', 'somali samosa', 'ramadan sambusa', 'sambusa with minced beef and leek'],
    why: 'Sambusa makes its appearance every evening of Ramadan, when the fast is broken, and the shape is the clue to the folding: a long, narrow triangle, quite unlike an Indian samosa. The pastry is thin, almost transparent, and crisp. The filling is minced beef, leek, green chilli and cumin, with a squeeze of lemon.\n\nThe key ingredient is the wrapper. Somali sambusa use thin sheets cut from spring roll pastry, available in packets in Asian shops. Cut the sheets into long strips about 8 cm wide. A homemade paste of flour and water seals the edges. **Keep the pastry covered with a damp cloth while you work.** It dries and cracks within minutes.\n\nCook the filling first: onion and garlic, then the beef and spices, until dry, then leeks and chillies and fresh coriander. Cool completely. A warm filling softens the pastry and makes it difficult to fold.\n\nPlace a spoonful at one end of a strip and fold the corner over to make a triangle, then fold again and again along the strip. Seal the end with the paste. Fry in oil at 170°C for 3 minutes, until deep golden and crisp, and serve with a lemon wedge and a chilli dip.',
    ing: [
      '# Filling',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '400 g minced beef',
      '1 tsp ground cumin',
      '1 tsp ground coriander',
      '1/2 tsp ground black pepper',
      '1 tsp salt',
      '1 leek, about 150 g, finely chopped',
      '2 green chillies, finely chopped',
      '3 tbsp chopped fresh coriander',
      '# Wrappers',
      '200 g spring roll pastry sheets',
      '2 tbsp plain flour mixed with 3 tbsp water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Heat the 2 tbsp oil and cook the onion and garlic for 5 minutes. Add the beef, cumin, coriander, pepper and salt and cook for 8 minutes until dry. Add the leek and chillies and cook for 4 minutes. Stir in the coriander and cool completely.',
      'Cut the pastry into strips 8 cm wide. Place a spoonful of filling at one end of a strip and fold the corner over to make a triangle. Continue folding along the strip, sealing the end with the flour paste. Make about 20.',
      'Heat the frying oil to 170°C. Fry the sambusa in batches for 3 minutes each until deep golden and crisp.',
      'Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Keep the pastry covered while you fold.',
      'Cool the filling fully.',
      'Freeze unfried sambusa for up to 1 month.'
    ],
    pair: ['Lemon wedges', 'Chilli sauce', 'Mint chutney', 'Spiced tea'],
    store: 'Best eaten hot. Keeps in the fridge for 2 days and crisps in a hot oven.',
    nut: [205, 5, 8, 17, 1, 1, 180]
  },

  'zanzibar-pizza': {
    d: 'A paper-thin dough parcel filled with minced meat, egg, onion and cheese, folded into a square and cooked on a hot griddle, a Zanzibar street food.',
    meta: 'Zanzibar pizza: a paper-thin dough parcel filled with minced meat, egg, onion and cheese, cooked on a hot griddle. Four servings, cooked for 15 minutes.',
    kw: ['zanzibar pizza', 'zanzibar pizza recipe', 'stuffed zanzibar pizza', 'tanzanian street food zanzibar pizza', 'zanzibari mkate wa nyama'],
    why: 'It has nothing to do with Italy, and it is a masterpiece of stuffed dough. The Zanzibar pizza is sold from stalls in the Forodhani Gardens at dusk, a thin dough stretched by hand until you can see through it, filled with meat, egg, onion and cheese, folded into a square envelope, and cooked on an oiled griddle until crisp and golden.\n\nStretch is the skill. The dough is flour, water, a little oil and salt, kneaded and then rested in oil for an hour so that it relaxes. Each ball is flattened on an oiled surface and pulled outwards, gently, from the middle to the edges, until it is a translucent sheet 30 cm across. **Don\'t worry about small holes.** The folds hide them.\n\nThe filling is cooked mince, spiced with garlic, curry powder and pepper, then mixed with chopped onion and peppers. Spread it in the centre of the sheet, add a cracked egg, cheese and a squeeze of mayonnaise, then fold the four sides in to make a neat package.\n\nCook on a lightly oiled griddle over a medium heat for 3 minutes on each side, until crisp and the egg is set. Cut into pieces and serve with chilli sauce.',
    ing: [
      '# Dough',
      '300 g plain flour',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '170 ml water',
      '3 tbsp vegetable oil, for coating',
      '# Filling',
      '1 tbsp vegetable oil',
      '1/2 onion, about 80 g, chopped',
      '200 g minced beef',
      '2 garlic cloves, crushed',
      '1 tsp curry powder',
      '1/2 tsp salt',
      '1 green pepper, about 120 g, finely chopped',
      '4 eggs',
      '80 g grated mozzarella',
      '2 tbsp mayonnaise',
      '3 tbsp vegetable oil, for cooking'
    ],
    st: [
      'Knead the flour, salt, 1 tbsp oil and water for 5 minutes. Divide into 4 balls, coat with the 3 tbsp oil, cover and rest for 1 hour.',
      'Heat the filling oil and cook the onion for 3 minutes. Add the beef, garlic, curry powder and salt and cook for 6 minutes until dry. Cool, then mix with the pepper.',
      'Stretch each dough ball on an oiled surface into a very thin 30 cm square. Spread a quarter of the filling in the centre, crack an egg on top, and add a quarter of the cheese and mayonnaise.',
      'Fold the four sides over to enclose the filling. Cook on an oiled griddle over a medium heat for 3 minutes on each side until crisp and the egg is set.'
    ],
    tips: [
      'Oil your hands and surface generously.',
      'Do not overfill the parcels.',
      'Serve with chilli sauce and a squeeze of lime.'
    ],
    pair: ['Chilli sauce', 'Lime wedges', 'Sugarcane juice', 'Tamarind sauce'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [796, 29, 62, 48, 3, 3, 850],
    rest: [60, 'Resting the dough']
  },

  'ugandan-rolex': {
    d: 'A chapati rolled around a thin omelette of eggs, tomato, onion and cabbage, a Ugandan street snack whose name comes from "rolled eggs".',
    meta: 'Ugandan rolex: a chapati rolled around a thin omelette of eggs, tomato, onion and cabbage. Two servings, cooked for 10 minutes.',
    kw: ['ugandan rolex', 'rolex uganda', 'rolex recipe', 'chapati egg roll', 'uganda street food rolex'],
    why: 'The name is a joke that stuck: "rolled eggs" said quickly sounds like a famous watch. In Uganda, a rolex is a chapati wrapped around an egg omelette, and it is the best quick breakfast in Kampala, made in front of you at a stall on the street corner for less than the price of a bus fare.\n\nThe omelette is where the skill lies. Eggs are beaten with finely chopped tomato, onion, cabbage and a pinch of salt, and a little pepper. Poured into a hot oiled pan, it should set in 1 to 2 minutes into a thin sheet. **Spread the mixture thin so it sets quickly.** A thick omelette is too heavy to roll.\n\nThe chapati can be homemade or bought. A good chapati is soft and layered; a flour tortilla is a decent substitute. Warm it in a dry pan for 30 seconds on each side. Lay it over the omelette in the pan so the two stick together while the egg is still slightly wet, then flip the whole thing out and roll it up.\n\nWrap it in paper or foil, as sold, so it holds its shape. Eat it hot, with a squeeze of chilli sauce if you like.',
    ing: [
      '4 eggs',
      '1 tomato, about 100 g, finely chopped',
      '1/2 onion, about 80 g, finely chopped',
      '50 g cabbage, finely shredded',
      '1/4 tsp salt',
      '1/4 tsp ground black pepper',
      '2 tbsp vegetable oil',
      '2 chapatis or flour tortillas, about 120 g'
    ],
    st: [
      'Beat the eggs with the tomato, onion, cabbage, salt and pepper.',
      'Heat half the oil in a frying pan over a medium heat. Pour in half the egg mixture and spread it thin. Cook for 1 to 2 minutes until just set.',
      'Place a warmed chapati over the omelette while the top is still slightly wet, press down, then flip the whole thing out onto a board.',
      'Roll up tightly. Repeat with the rest of the mixture. Serve hot, wrapped in paper.'
    ],
    tips: [
      'Spread the egg thin.',
      'Warm the chapati before using.',
      'Add sliced avocado for a richer rolex.'
    ],
    pair: ['Chilli sauce', 'Black tea', 'Fresh fruit', 'Avocado'],
    store: 'Best eaten straight away.',
    nut: [476, 19, 37, 28, 4, 6, 810]
  },

  'potjiekos': {
    d: 'A South African layered stew of meat, onions, carrots, potatoes and cabbage cooked slowly without stirring in a three-legged cast iron pot.',
    meta: 'Potjiekos: a South African layered stew of meat, onions, carrots, potatoes and cabbage cooked slowly without stirring. Six servings, cooked for 2 and a half hours.',
    kw: ['potjiekos', 'potjiekos recipe', 'south african potjie', 'potjie stew', 'south african layered stew in a cast iron pot'],
    why: 'No stirring, ever: that is the rule of potjiekos, and it is the whole method. The stew is built in layers in a heavy cast iron pot, the meat on the bottom, the vegetables above it, and then left to cook gently over low heat for hours. The lid stays on. The vegetables on top steam, and the meat below braises, and the flavours travel from layer to layer.\n\nAt a braai, the pot sits over coals. At home, a heavy casserole in a low oven does the job. Brown the meat first, in a hot pan, with onions: lamb neck or beef shin are the classic cuts. Season with salt, pepper and a bay leaf. Pour in a glass of red wine or beer. **Never pour in more than a cup of liquid.** The vegetables release plenty, and the stew should be moist, not wet.\n\nLayer the carrots, potatoes and cabbage on top of the meat in that order. Season each layer lightly. Cover and cook at 160°C for 2 hours 30 minutes without lifting the lid.\n\nWhen it is opened, the meat is tender, the vegetables are soft, and the sauce at the bottom is rich and dark. Serve it from the pot, with bread or rice, as South Africans do.',
    ing: [
      '1 kg lamb neck or beef shin, cut into large pieces',
      '3 tbsp vegetable oil',
      '2 onions, about 300 g, sliced',
      '4 garlic cloves, crushed',
      '2 bay leaves',
      '2 tsp salt',
      '1 tsp ground black pepper',
      '250 ml red wine or dark beer',
      '4 carrots, about 400 g, thickly sliced',
      '600 g potatoes, halved',
      '300 g white cabbage, cut into wedges',
      '2 tbsp chutney'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan). Heat the oil in a heavy casserole and brown the meat for 8 minutes. Remove.',
      'Cook the onions and garlic in the same pot for 5 minutes. Return the meat, add the bay leaves, half the salt and pepper, the chutney and the wine.',
      'Layer the carrots, then the potatoes, then the cabbage on top, seasoning each layer with the remaining salt and pepper. Do not stir.',
      'Cover and cook for 2 hours 30 minutes without lifting the lid.'
    ],
    tips: [
      'Use a pot with a tight lid.',
      'Do not stir at any point.',
      'Add the quick-cooking vegetables on top.'
    ],
    pair: ['Crusty bread', 'Rice', 'Pap', 'Cold beer'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [549, 37, 35, 29, 6, 10, 990]
  },

  'south-african-pap': {
    d: 'Stiff maize meal porridge cooked until it holds its shape, served with a tomato and onion gravy.',
    meta: 'South African pap: stiff maize meal porridge cooked until it holds its shape, served with a tomato and onion gravy. Four servings, cooked for 30 minutes.',
    kw: ['south african pap', 'pap recipe', 'stiff pap', 'pap and tomato gravy', 'mielie pap'],
    why: 'It is the plainest food on the plate, and it is eaten everywhere. Pap, from the Afrikaans and Dutch word for porridge, is cooked maize meal, and it is the staple of South Africa. It can be soft and creamy like polenta for breakfast, or stiff enough to be shaped with a spoon, for dinner. In its stiff form, it is used to scoop up stew, meat and gravy.\n\nUse white maize meal, fine milled. Polenta is the nearest available alternative but is coarser. Bring salted water to a boil, then add the maize meal in a thin stream, stirring constantly. **Pour the meal slowly, and stir without stopping for the first minute.** Lumps form when it goes in too fast.\n\nLower the heat to a minimum, cover and cook for 20 minutes, stirring from the bottom every 5 minutes. The pap thickens, steams, and pulls away from the sides. A wooden spoon should stand up in the middle.\n\nFor the gravy, cook onion in oil until soft, add chopped tomatoes, garlic, curry powder and a pinch of sugar, and simmer for 15 minutes into a rich sauce. Spoon the pap onto a plate, make a dip in the middle and fill it with gravy.',
    ing: [
      '# Pap',
      '750 ml water',
      '1 tsp salt',
      '300 g white maize meal',
      '# Gravy',
      '2 tbsp vegetable oil',
      '1 onion, about 150 g, chopped',
      '2 garlic cloves, crushed',
      '1 tsp curry powder',
      '4 tomatoes, about 400 g, chopped',
      '1 tsp sugar',
      '1/2 tsp salt',
      '100 ml water'
    ],
    st: [
      'For the gravy, heat the oil and cook the onion for 6 minutes. Add the garlic and curry powder for 1 minute, then the tomatoes, sugar, salt and water. Simmer for 15 minutes.',
      'Bring the water and salt to a boil. Pour in the maize meal in a thin stream, stirring constantly.',
      'Lower the heat, cover and cook for 20 minutes, stirring from the bottom every 5 minutes, until thick and stiff.',
      'Spoon onto plates and serve with the gravy.'
    ],
    tips: [
      'Add the maize meal slowly.',
      'Use a heavy pot to prevent sticking.',
      'Serve with boerewors for a braai meal.'
    ],
    pair: ['Boerewors', 'Braaied meat', 'Chakalaka', 'Spinach'],
    store: 'Keeps in the fridge for 3 days. Slice and pan-cook leftovers.',
    nut: [386, 7, 67, 10, 7, 6, 900]
  },

  'blintzes': {
    d: 'Thin crêpes filled with sweetened cream cheese and ricotta, folded into parcels and cooked in butter until golden.',
    meta: 'Blintzes: thin crêpes filled with sweetened cream cheese and ricotta, folded into parcels and cooked in butter. Six servings, cooked for 20 minutes.',
    kw: ['blintzes', 'cheese blintzes', 'jewish blintzes', 'blintzes recipe', 'cheese blintzes with sour cream'],
    why: 'A blintz is two things: a crêpe and a parcel. The crêpe is thin, delicate and cooked on one side only; the parcel is formed by wrapping the filling in the pale, cooked side and then browning it in butter. The result is crisp outside, soft and creamy inside, and it is a traditional dish for the Jewish festival of Shavuot.\n\nThe batter is flour, eggs, milk, water and a pinch of salt, whisked until smooth, and then rested for 15 minutes. It should be thin, like single cream. **Cook the crêpes on one side only.** The cooked side faces inwards, and the raw side browns later in butter.\n\nPour a small ladle of batter into a hot, buttered 18 cm pan, swirl it to coat, and cook for 1 minute, until the edges lift and the surface looks dry. Turn out onto a clean cloth. Repeat to make 12.\n\nThe filling is cream cheese, ricotta, sugar, egg yolk, vanilla and lemon zest. Place a spoonful on each crêpe, fold the sides in and roll up like an envelope. Cook the parcels seam-side down in butter for 2 minutes on each side, and serve with soured cream and berry jam.',
    ing: [
      '# Crêpes',
      '125 g plain flour',
      '2 eggs',
      '200 ml whole milk',
      '100 ml water',
      '1/4 tsp salt',
      '30 g butter, melted',
      '# Filling',
      '200 g cream cheese',
      '200 g ricotta',
      '3 tbsp caster sugar',
      '1 egg yolk',
      '1 tsp vanilla extract',
      '1 lemon, zest only',
      '# To cook and serve',
      '40 g butter',
      '150 g soured cream',
      '150 g blueberry or strawberry jam'
    ],
    st: [
      'Whisk the flour, eggs, milk, water, salt and melted butter until smooth. Rest for 15 minutes.',
      'Cook the crêpes in a hot buttered 18 cm pan, 1 minute on one side only, until the surface is dry. Turn out cooked-side up. Make 12.',
      'Mix the cream cheese, ricotta, sugar, egg yolk, vanilla and zest.',
      'Put 2 tablespoons of filling on the cooked side of each crêpe, fold in the sides and roll up.',
      'Melt the 40 g butter in a pan and cook the parcels seam-side down for 2 minutes on each side until golden. Serve with the soured cream and jam.'
    ],
    tips: [
      'Cook the crêpes on one side only.',
      'Do not overfill.',
      'Make the crêpes ahead and fill them later.'
    ],
    pair: ['Soured cream', 'Berry jam', 'Fresh berries', 'Coffee'],
    store: 'Filled blintzes keep in the fridge for 2 days. Brown them just before serving.',
    nut: [538, 13, 45, 34, 1, 26, 290]
  },

  'gefilte-fish': {
    d: 'Poached oval dumplings of minced white fish, onion and egg in a light fish and vegetable broth, served cold with beetroot horseradish.',
    meta: 'Gefilte fish: poached oval dumplings of minced white fish, onion and egg in a light broth, served cold with horseradish. Ten servings, cooked for 90 minutes.',
    kw: ['gefilte fish', 'gefilte fish recipe', 'homemade gefilte fish', 'jewish poached fish balls', 'gefilte fish with horseradish'],
    why: 'The jarred kind has given gefilte fish a bad reputation, and the homemade kind is nothing like it. The fish is fresh, delicate and gently seasoned, the broth is clear and sweet with onions and carrots, and the whole dish is served cold on Friday nights and Passover, with a spoonful of fiery horseradish. It is worth making once.\n\nThe fish is a mix: a firm, lean white fish such as cod or haddock, and a richer, oily one, such as salmon, for flavour and tenderness. In Eastern Europe, carp, whitefish and pike were used. Mince it all in a food processor with onion, egg, matzo meal, a little sugar, salt and white pepper. **Chill the mixture for at least 1 hour.** The matzo meal swells, and the mixture becomes firm enough to shape.\n\nThe broth is built from onion, carrots and fish bones or heads, simmered for 30 minutes. Strain it, then lower the dumplings in, shaped with wet hands into ovals, and poach them gently for 1 hour with the lid slightly open.\n\nCool them in the broth. Serve each dumpling cold, topped with a slice of cooked carrot and a dab of red horseradish, with a spoonful of the jellied broth.',
    ing: [
      '# Fish mixture',
      '600 g cod or haddock fillet',
      '300 g salmon fillet',
      '2 onions, about 300 g, chopped',
      '2 eggs',
      '4 tbsp matzo meal',
      '2 tbsp caster sugar',
      '2 tsp salt',
      '1/2 tsp white pepper',
      '100 ml cold water',
      '# Broth',
      '2 onions, about 300 g, sliced',
      '3 carrots, about 300 g, sliced',
      '1.5 litres water',
      '1 tsp salt',
      '1 tsp sugar',
      '# To serve',
      '4 tbsp beetroot horseradish (chrain)'
    ],
    st: [
      'Process the fish and chopped onions in batches in a food processor until finely minced. Mix in the eggs, matzo meal, sugar, salt, pepper and water. Cover and chill for 1 hour.',
      'Put the sliced onions, carrots, water, salt and sugar in a wide pan and simmer for 30 minutes.',
      'With wet hands, shape the fish mixture into 18 ovals. Lower them gently into the simmering broth.',
      'Cover with the lid slightly open and poach very gently for 1 hour.',
      'Cool in the broth, then chill. Serve cold with a slice of carrot and the horseradish.'
    ],
    tips: [
      'Keep the broth at a bare simmer.',
      'Wet your hands to shape the dumplings.',
      'The broth sets to a light jelly when chilled.'
    ],
    pair: ['Beetroot horseradish', 'Challah', 'Pickled cucumbers', 'Matzo'],
    store: 'Keeps in the fridge for 4 days in its broth.',
    nut: [177, 19, 14, 5, 2, 7, 820],
    rest: [60, 'Chilling the fish mixture']
  },

  'cholent': {
    d: 'A Sabbath stew of beef, beans, barley and potatoes cooked slowly overnight until dark, rich and tender.',
    meta: 'Cholent: a Sabbath stew of beef, beans, barley and potatoes cooked slowly overnight until dark, rich and tender. Eight servings, cooked for 8 hours.',
    kw: ['cholent', 'cholent recipe', 'jewish sabbath stew', 'overnight cholent with beef and beans', 'slow cooker cholent'],
    why: 'It was invented to solve a problem: no cooking is allowed on the Sabbath, so a pot is put in the oven on Friday afternoon, or on a slow-cooker timer, and left until the midday meal on Saturday. Eighteen hours is a long time, but cholent is a forgiving dish. The more it cooks, the better it tastes.\n\nThe foundation is beans, barley and potatoes, which swell and absorb the juices, and beef, usually flanken or brisket, which dissolves into tenderness. Soak the beans overnight. A whole egg in its shell goes in on top, where it darkens to the colour of tea and picks up a smoky flavour. **Do not stir during the cooking.** The layers cook best undisturbed.\n\nBrown the onions and meat first for depth, then layer the barley and beans on the bottom, the potatoes and meat over them, and the egg on top. Season well with paprika, black pepper, garlic and a spoonful of honey for a dark colour. Pour in boiling water to cover by 2 cm.\n\nCook at 100°C in the oven, or on low in a slow cooker, for 8 hours or overnight. The result is thick, dark brown and rich, with a slight sweetness.',
    ing: [
      '250 g dried haricot or butter beans, soaked overnight and drained',
      '150 g pearl barley, rinsed',
      '2 tbsp vegetable oil',
      '2 onions, about 300 g, chopped',
      '800 g beef flanken or brisket, cut into large pieces',
      '600 g potatoes, peeled and halved',
      '4 garlic cloves, crushed',
      '2 tsp paprika',
      '1 tsp ground black pepper',
      '2 tsp salt',
      '1 tbsp honey',
      '4 eggs, in their shells',
      '1.5 litres boiling water'
    ],
    st: [
      'Heat the oven to 100°C (80°C fan) or set a slow cooker to low. Heat the oil in a pan and brown the onions and beef for 10 minutes.',
      'Put the beans and barley in a large casserole. Add the beef, onions, potatoes and garlic, then the paprika, pepper, salt and honey.',
      'Nestle the eggs in the top and pour in the boiling water so that it covers by 2 cm.',
      'Cover tightly and cook for 8 hours or overnight. Do not stir.',
      'Peel the eggs and serve with the stew.'
    ],
    tips: [
      'Soak the beans overnight.',
      'Add more boiling water if it looks dry.',
      'Use a tight-fitting lid.'
    ],
    pair: ['Challah', 'Pickles', 'Kugel', 'Red wine'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [443, 29, 39, 19, 7, 5, 790],
    rest: [480, 'Soaking the beans']
  },

  'knish': {
    d: 'Baked pastry parcels filled with mashed potato and caramelised onion, a New York deli classic of Eastern European Jewish origin.',
    meta: 'Knish: baked pastry parcels filled with mashed potato and caramelised onion. Makes twelve, baked for 35 minutes.',
    kw: ['knish', 'potato knish', 'knish recipe', 'baked potato knish', 'jewish potato knish'],
    why: 'In New York, they are sold hot from a steamer at the corner, squarish and golden, split open and spread with mustard. At home, a baked knish is a plain thing, a soft pastry shell round a mound of mashed potato, with onions cooked until sweet and brown. It is heavy and comforting, and one is a meal.\n\nThe dough is oil-based, made without butter: flour, baking powder, oil, egg and water. It should be soft and slightly sticky. Rest it for 30 minutes, then roll it out very thin, to a rectangle about 30 by 40 cm. Thin dough is the key. **Roll it until you can see the board through it.** It folds around the filling and bakes crisp.\n\nThe filling is potato, boiled and mashed, mixed with onions caramelised for 25 minutes in oil, an egg, salt and a lot of black pepper. It should be thick and dry, not creamy. Wet filling makes the dough tear.\n\nSpread the filling along one long edge, roll up the dough, cut into 12 sections, and pinch the ends closed. Stand each upright, brush with egg and bake at 190°C for 35 minutes, until deep gold.',
    ing: [
      '# Dough',
      '300 g plain flour',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '1 egg',
      '4 tbsp vegetable oil',
      '100 ml warm water',
      '# Filling',
      '800 g potatoes, peeled and cut into chunks',
      '3 tbsp vegetable oil',
      '3 onions, about 450 g, finely chopped',
      '1 egg',
      '1 1/2 tsp salt',
      '1 tsp ground black pepper',
      '1 egg, beaten, for brushing'
    ],
    st: [
      'Mix the flour, baking powder and salt. Add the egg, oil and water and knead to a soft dough. Cover and rest for 30 minutes.',
      'Boil the potatoes for 20 minutes until soft. Drain, mash and cool.',
      'Cook the onions in the oil over a medium heat for 25 minutes until deep brown. Mix into the potatoes with the egg, salt and pepper.',
      'Heat the oven to 190°C (170°C fan). Roll the dough very thin into a rectangle about 30 by 40 cm. Spread the filling in a line along one long edge, roll up, and cut into 12 pieces. Pinch the ends closed.',
      'Stand the knishes upright on a lined tray, brush with the beaten egg and bake for 35 minutes until deep golden.'
    ],
    tips: [
      'Roll the dough thin.',
      'Make the filling quite dry.',
      'Serve with spicy mustard.'
    ],
    pair: ['Spicy brown mustard', 'Pickles', 'Soup', 'Salad'],
    store: 'Keeps in the fridge for 3 days or freezes for up to 2 months. Reheat in a hot oven.',
    nut: [250, 6, 34, 10, 3, 2, 450]
  },

  'chopped-liver': {
    d: 'A rich, savoury spread of chicken livers cooked with onions and mixed with hard-boiled eggs, chopped coarsely and served with rye bread.',
    meta: 'Chopped liver: a rich spread of chicken livers cooked with onions and mixed with hard-boiled eggs, served with rye bread. Eight servings, cooked for 20 minutes.',
    kw: ['chopped liver', 'jewish chopped liver', 'chicken liver pate with eggs', 'chopped liver recipe', 'deli chopped liver'],
    why: 'Does anyone really like liver? Some people do, and chopped liver is the dish that made them. The spread is mild, rich and savoury, with sweet onions cooked slowly in oil, and it is as much about the onions and eggs as the liver. It is a fixture of Jewish delis and holiday tables, and it is eaten cold on rye bread or crackers.\n\nThe liver is chicken liver, trimmed of any green patches or sinew and patted dry. Cook the onions first, in plenty of oil, over a low heat for 20 minutes until deep golden, because the sweetness balances the iron taste of the liver. Then cook the livers in a hot pan for 4 minutes, turning, until browned outside and just pink inside. **Do not overcook the livers.** Grey, dry liver is bitter and chalky.\n\nChop everything by hand with a big knife, or pulse in a food processor for a few seconds only. Hand-chopped gives the texture the dish is named for. Mix with chopped hard-boiled eggs, salt and pepper, and a spoonful of the onion oil.\n\nChill for at least 1 hour before serving. Garnish with chopped egg white, finely sliced radish or fried onions. Serve with rye bread and pickles.',
    ing: [
      '400 g chicken livers, trimmed',
      '4 tbsp vegetable oil',
      '3 onions, about 450 g, thinly sliced',
      '4 eggs, boiled and peeled',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1 tbsp fried onions, to garnish'
    ],
    st: [
      'Heat 3 tbsp of the oil in a wide pan and cook the onions over a low heat for 20 minutes until deep golden. Remove.',
      'Heat the remaining oil in the same pan over a high heat. Cook the livers for 4 minutes, turning, until browned outside and just pink inside.',
      'Chop the livers, onions and eggs together coarsely, or pulse briefly in a food processor.',
      'Mix with the salt and pepper. Chill for at least 1 hour and garnish with the fried onions.'
    ],
    tips: [
      'Do not overcook the livers.',
      'Chop by hand for the best texture.',
      'Add a splash of sweet wine for a variation.'
    ],
    pair: ['Rye bread', 'Pickles', 'Matzo crackers', 'Radishes'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [180, 12, 6, 12, 1, 3, 360],
    rest: [60, 'Chilling']
  },

  'charoset': {
    d: 'A sweet, chunky paste of chopped apples, walnuts, cinnamon and sweet red wine, eaten at the Passover seder to recall the mortar of the Israelites.',
    meta: 'Charoset: a sweet, chunky paste of chopped apples, walnuts, cinnamon and sweet red wine, eaten at the Passover seder. Ten servings, no cooking.',
    kw: ['charoset', 'charoset recipe', 'passover charoset', 'apple walnut charoset', 'ashkenazi charoset'],
    why: 'The texture is meant to recall mortar, and it should be coarse and sticky rather than smooth. Charoset is the sweet paste on the Passover plate, eaten between two pieces of matzo with bitter herbs, and it stands for the clay and straw the ancient Israelites used to build in Egypt. Every community has its version. This is the Ashkenazi one, of apples, walnuts, wine and cinnamon.\n\nChop the apples by hand, finely, to pieces about the size of a lentil. Use a sweet, firm variety such as Gala or Braeburn. Chop the walnuts to the same size. A food processor works, but pulse it a few times only. **Over-processing turns the mixture into a puree.** Mortar should have some grit.\n\nMix the apples and walnuts with sweet red wine, such as Manischewitz or any sweet kosher wine, a sprinkle of cinnamon and a spoonful of honey. The wine should dampen the mixture without drowning it. Taste: it should be sweet, spiced and a little tart.\n\nChill for an hour before serving. The apples soften and the wine soaks in. Use it on matzo with horseradish, or as a topping for yoghurt.',
    ing: [
      '4 apples, about 600 g, peeled, cored and finely chopped',
      '100 g walnuts, finely chopped',
      '4 tbsp sweet red wine',
      '1 tsp ground cinnamon',
      '1 tbsp honey',
      '1 tsp lemon juice'
    ],
    st: [
      'Toss the chopped apples with the lemon juice.',
      'Mix in the walnuts, wine, cinnamon and honey.',
      'Taste and adjust the sweetness.',
      'Chill for 1 hour before serving.'
    ],
    tips: [
      'Chop by hand for the best texture.',
      'Make it a few hours ahead.',
      'Add dates for a Sephardic variation.'
    ],
    pair: ['Matzo', 'Horseradish', 'Passover seder plate', 'Sweet wine'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [119, 2, 12, 7, 2, 8, 5],
    rest: [60, 'Chilling']
  },

  'tzimmes': {
    d: 'A sweet stew of carrots, sweet potato and prunes cooked slowly with honey, orange juice and cinnamon, a Jewish festival side dish.',
    meta: 'Tzimmes: a sweet stew of carrots, sweet potato and prunes cooked slowly with honey, orange juice and cinnamon. Eight servings, cooked for 60 minutes.',
    kw: ['tzimmes', 'tzimmes recipe', 'carrot tzimmes', 'jewish carrot and prune stew', 'rosh hashanah tzimmes'],
    why: 'The sweetness is the point, and it is meant to be a lot. Tzimmes is served at Rosh Hashanah, the Jewish New Year, as a wish for a sweet year, and the dish is made from the sweetest things in the cupboard: carrots, sweet potato, prunes, honey and orange juice. The word is also a Yiddish expression for making a fuss, because of the effort the dish was once thought to take.\n\nIn fact it is simple. Peel the carrots and sweet potato and cut into 3 cm chunks. Put them in a heavy ovenproof dish with the prunes, cinnamon, orange juice, honey, a little oil and a pinch of salt. Cover and bake at 180°C for 1 hour, stirring once. **Do not cut the vegetables too small.** They should keep their shape and just break at the edges.\n\nThe liquid cooks down to a glossy syrup that coats everything. If it is too thin at the end of the hour, remove the foil for the last 15 minutes. If it is dry, add a splash of water.\n\nServe it hot, as a side to roast chicken, brisket or turkey. Some cooks add a handful of raisins, a few dried apricots or a whole peeled orange.',
    ing: [
      '600 g carrots, peeled and cut into 3 cm chunks',
      '500 g sweet potato, peeled and cut into 3 cm chunks',
      '150 g pitted prunes',
      '250 ml orange juice',
      '3 tbsp honey',
      '1 tsp ground cinnamon',
      '2 tbsp vegetable oil',
      '1/2 tsp salt',
      '100 ml water'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan).',
      'Put the carrots, sweet potato and prunes in a large ovenproof dish. Add the orange juice, honey, cinnamon, oil, salt and water and stir.',
      'Cover with foil and bake for 45 minutes, stirring once.',
      'Remove the foil and bake for 15 minutes more until the vegetables are tender and the liquid has become a thick syrup.'
    ],
    tips: [
      'Cut the vegetables the same size.',
      'Stir gently to keep the pieces whole.',
      'Add a splash of water if the dish dries.'
    ],
    pair: ['Roast brisket', 'Roast chicken', 'Challah', 'Noodle kugel'],
    store: 'Keeps in the fridge for 4 days. Reheat gently.',
    nut: [212, 2, 42, 4, 5, 22, 230]
  }
};
