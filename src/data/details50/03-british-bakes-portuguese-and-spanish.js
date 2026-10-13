'use strict';

/**
 * Volume fifty — Europe, Africa and Jewish cooking, third part.
 *
 * Twenty-five dishes: a panettone bread pudding, chocolate Easter nests and an
 * Italian Easter bread, harissa chicken, British cabinet pudding, rum nicky,
 * Chorley and Banbury cakes, Cornish fairings and Brown Windsor soup,
 * Portuguese bolo rei and torta de Santa Clara, and fifteen Spanish dishes
 * from torrijas to empanada gallega. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'panettone-bread-pudding': {
    d: 'Slices of panettone soaked in a vanilla and orange custard and baked until the top is crisp and the middle soft and rich.',
    meta: 'Panettone bread pudding: slices of panettone soaked in a vanilla and orange custard and baked until crisp on top. Eight servings, baked for 45 minutes.',
    kw: ['panettone bread pudding', 'panettone pudding', 'panettone bread and butter pudding', 'leftover panettone recipe', 'christmas panettone pudding'],
    why: 'The best use for leftover panettone is not toast, and it takes about five minutes of effort. Panettone is already enriched with eggs, butter, candied peel and raisins, which means that it needs less from the custard than plain bread. The result is a pudding that tastes like the best bread and butter pudding you have ever had, with a pleasant sweetness and a hint of orange.\n\nThe custard is milk, double cream, eggs, sugar, vanilla and orange zest. Whisk the eggs and sugar until the sugar dissolves, add the warm milk and cream, and pour over the sliced panettone. **Leave the pudding to soak for 20 minutes before baking.** The panettone is light and airy, and it needs time to take up the custard.\n\nOverlap the slices in a buttered dish, standing them slightly on their edges for a crisp top. Scatter with demerara sugar for a crunchy finish. Stand the dish in a roasting tin of hot water.\n\nBake at 160°C for 45 minutes. The edges should be golden and crisp, and the centre should be set but wobble slightly. Serve warm with cream, custard or a spoonful of brandy butter.',
    ing: [
      '500 g panettone, sliced 2 cm thick',
      '30 g butter, softened',
      '300 ml whole milk',
      '250 ml double cream',
      '4 eggs',
      '80 g caster sugar',
      '2 tsp vanilla extract',
      '1 orange, zest only',
      '2 tbsp demerara sugar'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan) and butter a 2-litre ovenproof dish.',
      'Butter the panettone slices lightly and overlap them in the dish.',
      'Warm the milk and cream until steaming. Whisk the eggs, caster sugar, vanilla and orange zest, then whisk in the warm milk mixture. Pour over the panettone and leave to soak for 20 minutes.',
      'Sprinkle with the demerara sugar. Stand the dish in a roasting tin and pour in hot water to come halfway up its sides.',
      'Bake for 45 minutes until golden on top and just set in the middle.'
    ],
    tips: [
      'Use stale panettone for the best texture.',
      'Do not skip the water bath.',
      'Serve warm with cream.'
    ],
    pair: ['Custard', 'Clotted cream', 'Brandy butter', 'Espresso'],
    store: 'Keeps in the fridge for 3 days. Reheat in a warm oven.',
    nut: [496, 10, 51, 28, 2, 33, 240]
  },

  'chocolate-nest-cakes': {
    d: 'Crunchy cornflake nests bound with melted chocolate, butter and golden syrup, filled with mini chocolate eggs for Easter.',
    meta: 'Chocolate nest cakes: crunchy cornflake nests bound with chocolate, butter and golden syrup, filled with mini eggs. Twelve servings, ready in 30 minutes.',
    kw: ['chocolate nest cakes', 'easter nest cakes', 'chocolate cornflake nests', 'easter chocolate nests recipe', 'cornflake nest cakes with mini eggs'],
    why: 'They are a child\'s recipe and an adult\'s guilty pleasure. Chocolate nest cakes, made in muffin tins every Easter, are cornflakes stuck together with a mixture of melted chocolate, butter and syrup, shaped into bird\'s nests and filled with chocolate eggs. No oven, no skill, and the children do most of the work.\n\nMelt the chocolate gently. Break 200 g of milk chocolate into pieces, put it in a bowl over a pan of barely simmering water, and stir in the butter and golden syrup as it melts. Don\'t let the bowl touch the water. **If the chocolate overheats, it turns grainy and stiff.** The mixture should be glossy and smooth.\n\nFold in the cornflakes carefully. Crushed lightly beforehand, they hold the shape better, and they coat evenly. Stir until every flake is covered, then spoon into paper cases in a muffin tin, pressing a well into the middle of each with the back of a spoon.\n\nChill for 30 minutes, until firm, then fill each nest with three mini chocolate eggs. They keep for days in a tin, though they rarely last that long.',
    ing: [
      '200 g milk chocolate',
      '50 g butter',
      '3 tbsp golden syrup',
      '120 g cornflakes',
      '36 mini chocolate eggs'
    ],
    st: [
      'Line a 12-hole muffin tin with paper cases.',
      'Melt the chocolate, butter and golden syrup in a bowl over barely simmering water, stirring, until smooth.',
      'Lightly crush the cornflakes and fold into the chocolate mixture until coated.',
      'Spoon into the paper cases and press a well into the middle of each. Chill for 30 minutes.',
      'Fill each nest with three mini eggs.'
    ],
    tips: [
      'Keep the heat low while melting the chocolate.',
      'Crush the cornflakes lightly.',
      'Use shredded wheat for a more rustic nest.'
    ],
    pair: ['Hot chocolate', 'Milk', 'Tea', 'Fresh strawberries'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [195, 11, 13, 11, 0, 5, 170]
  },

  'italian-easter-bread': {
    d: 'A sweet braided bread scented with lemon and anise, baked around whole dyed eggs and iced with coloured sprinkles.',
    meta: 'Italian Easter bread: a sweet braided bread scented with lemon and anise, baked around dyed eggs and iced with sprinkles. Eight servings, baked for 30 minutes.',
    kw: ['italian easter bread', 'pane di pasqua', 'italian easter egg bread', 'easter bread with dyed eggs', 'italian sweet braided easter bread'],
    why: 'In Italian-American homes, the Easter bread arrives on the table with its eggs baked into it, still in their shells and coloured pink, blue and yellow. They are not for decoration only. They are the Easter lunch\'s first mouthful: bread, an egg, a bite of something sweet.\n\nThe dough is a sweet, soft one: flour, sugar, yeast, milk, eggs, butter, lemon zest and a little anise extract or ground anise seed. Knead for 10 minutes until smooth and silky, then leave it to rise for 1 hour 30 minutes. **Do not rush the rise.** A well-risen dough makes a light, feathery bread that pulls apart in strips.\n\nDye the eggs raw: simmer them in water coloured with food colouring and a splash of vinegar for 5 minutes, then dry them. They finish cooking in the oven.\n\nDivide the dough into 3 ropes, braid, and shape into a ring. Tuck the dyed eggs into the braid and secure with thin strips of dough. Rise again for 30 minutes. Brush with egg and bake at 180°C for 30 minutes, until golden. Cool, then ice and scatter with sprinkles.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action dried yeast',
      '80 g caster sugar',
      '1/2 tsp salt',
      '1 lemon, zest only',
      '1/2 tsp anise extract',
      '150 ml warm milk',
      '2 eggs',
      '60 g butter, melted',
      '4 raw eggs, dyed',
      '1 egg, beaten, for brushing',
      '100 g icing sugar',
      '2 tbsp milk',
      '2 tbsp coloured sprinkles'
    ],
    st: [
      'Mix the flour, yeast, caster sugar, salt and lemon zest. Add the anise extract, warm milk, 2 eggs and butter and knead for 10 minutes. Cover and leave to rise for 90 minutes until doubled.',
      'Divide into 3 ropes, 50 cm long, and braid. Shape into a ring on a lined tray and tuck the dyed eggs into the braid, securing each with a thin strip of dough.',
      'Cover and leave to rise for 30 minutes.',
      'Heat the oven to 180°C (160°C fan). Brush with the beaten egg and bake for 30 minutes until deep golden.',
      'Cool. Mix the icing sugar with the milk, drizzle over the bread and scatter with the sprinkles.'
    ],
    tips: [
      'Dye the eggs raw so they cook in the oven.',
      'Tuck the eggs in firmly.',
      'The eggs are safe to eat for a day or two if kept refrigerated.'
    ],
    pair: ['Coffee', 'Sliced cured meats', 'Easter lunch', 'Butter'],
    store: 'Keeps in the fridge for 3 days. The bread freezes without the eggs.',
    nut: [401, 12, 59, 13, 2, 30, 520],
    rest: [120, 'Proving']
  },

  'harissa-chicken': {
    d: 'Chicken thighs marinated in harissa, yoghurt, lemon and garlic, then roasted until the skin is blistered and the juices are red.',
    meta: 'Harissa chicken: chicken thighs marinated in harissa, yoghurt, lemon and garlic, then roasted until blistered. Four servings, cooked for 40 minutes.',
    kw: ['harissa chicken', 'harissa chicken thighs', 'north african harissa chicken', 'harissa chicken recipe', 'roast harissa and yoghurt chicken'],
    why: 'Harissa does most of the work, and yoghurt does the rest. The chilli paste brings heat, smoke and a deep red colour, and the yoghurt carries it into the meat, tenderising as it goes, so that a marinade of only 30 minutes is enough to flavour the chicken to the bone.\n\nBuy a good harissa. Brands differ a great deal: some are mostly tomato paste and some are mostly chilli, and the amount of heat varies. Rose harissa has a floral edge, which is excellent with chicken. Taste a little before using it. **Start with 3 tablespoons and add more once you know the heat.** The yoghurt tempers it, but a hot harissa remains hot.\n\nSlash the thighs twice and rub with the marinade, which is harissa, yoghurt, lemon juice and zest, crushed garlic, cumin and salt. Marinate for 30 minutes at room temperature, or longer in the fridge.\n\nRoast skin-side up on a tray at 220°C for 40 minutes, until the skin is blistered and darkened in places and the juices run clear. Serve with the roasting juices spooned over, with couscous or flatbreads, a cooling yoghurt and a handful of herbs.',
    ing: [
      '8 chicken thighs on the bone, skin on, about 1 kg',
      '3 tbsp harissa paste',
      '150 g plain yoghurt',
      '1 lemon, zest and juice',
      '4 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1 tsp salt',
      '2 tbsp olive oil',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Slash each chicken thigh twice. Mix the harissa, yoghurt, lemon zest and juice, garlic, cumin, salt and oil and coat the chicken. Leave for 30 minutes.',
      'Heat the oven to 220°C (200°C fan).',
      'Lay the chicken skin-side up on a roasting tray and roast for 40 minutes, until blistered and cooked through.',
      'Spoon the pan juices over and scatter with the coriander.'
    ],
    tips: [
      'Use a tray large enough for the chicken to sit in one layer.',
      'Add peppers and onions to the tray for a one-tray meal.',
      'Marinate overnight for deeper flavour.'
    ],
    pair: ['Couscous', 'Flatbread', 'Plain yoghurt', 'Herb salad'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [416, 54, 5, 20, 1, 2, 1000]
  },

  'cabinet-pudding': {
    d: 'A baked pudding of cubed sponge cake, dried fruit and a rich egg custard, set in a dish and served warm with custard sauce.',
    meta: 'Cabinet pudding: a baked pudding of cubed sponge, dried fruit and a rich egg custard, served warm. Six servings, baked for 40 minutes.',
    kw: ['cabinet pudding', 'cabinet pudding recipe', 'old fashioned cabinet pudding', 'british sponge and custard pudding', 'chancellor\'s pudding'],
    why: 'An old English pudding, from the age of fruit cakes and steamed moulds, and a very good way to use up stale sponge. The recipe is simple: cubes of plain cake or sponge fingers, scattered with dried fruit and glacé cherries, are covered with a vanilla egg custard and baked until just set.\n\nThe cake should be dry and a day old. Fresh sponge dissolves in the custard and turns to mush. Cut it into 2 cm cubes and layer in a buttered dish with sultanas, chopped glacé cherries and candied peel. **Spread the fruit through the layers.** If it all sits on top it scorches and turns bitter.\n\nThe custard is milk, cream, eggs, sugar and vanilla, whisked together and poured over the cake. Leave it to soak for 15 minutes. The sponge will drink most of it.\n\nBake in a roasting tin of hot water at 160°C for 40 minutes, until the surface is golden and the custard set with only a slight wobble. Serve in thick slices with warm custard, jam sauce or a spoonful of cream.',
    ing: [
      '250 g plain sponge cake or madeira cake, one day old, cut into 2 cm cubes',
      '30 g butter, softened',
      '60 g sultanas',
      '30 g glacé cherries, chopped',
      '30 g mixed candied peel',
      '300 ml whole milk',
      '150 ml double cream',
      '3 eggs',
      '60 g caster sugar',
      '1 tsp vanilla extract',
      '1 pinch grated nutmeg'
    ],
    st: [
      'Heat the oven to 160°C (140°C fan) and butter a 1.5-litre ovenproof dish.',
      'Layer the cake cubes in the dish with the sultanas, cherries and candied peel.',
      'Warm the milk and cream until steaming. Whisk the eggs, sugar and vanilla, then whisk in the warm milk and cream. Pour over the cake and leave to soak for 15 minutes.',
      'Grate nutmeg over the top. Stand the dish in a roasting tin and pour in hot water to come halfway up the sides.',
      'Bake for 40 minutes until golden and just set.'
    ],
    tips: [
      'Use cake that is a day or two old.',
      'Add a splash of sherry or brandy to the custard if you like.',
      'Serve warm with custard.'
    ],
    pair: ['Custard', 'Jam sauce', 'Cream', 'Tea'],
    store: 'Keeps in the fridge for 3 days. Reheat gently.',
    nut: [483, 8, 52, 27, 1, 41, 210]
  },

  'cumberland-rum-nicky': {
    d: 'A sweet Cumbrian tart of dates, stem ginger, butter and brown sugar laced with rum, baked in shortcrust pastry.',
    meta: 'Cumberland rum nicky: a sweet Cumbrian tart of dates, ginger, butter and brown sugar laced with rum, baked in shortcrust pastry. Eight servings, baked for 45 minutes.',
    kw: ['cumberland rum nicky', 'rum nicky', 'cumbrian rum nicky recipe', 'date and ginger rum tart', 'cumberland rum nicky tart'],
    why: 'A speciality of the northwest coast, where ships brought in rum and dates. Rum nicky is a double-crust tart with a dense, fudgy filling of chopped dates, crystallised ginger, butter and soft brown sugar, soaked in dark rum. It is heavy, sticky and sweet, and it is served in thin slices.\n\nThe pastry is a simple shortcrust, made with flour, butter and cold water. Chill it for 30 minutes before rolling. It needs to be strong enough to hold the filling, so roll it to 3 mm. **Leave a small hole in the lid so that steam escapes.** Otherwise the filling bursts through the pastry.\n\nThe filling is a paste: chopped dates, stem ginger, butter, brown sugar and rum, mixed together in a bowl. Some cooks warm the butter and sugar first to help them blend. Spread the mixture evenly over the base, cover with the lid and seal the edges.\n\nBake at 180°C for 45 minutes, until the pastry is golden and the filling inside has melted into a toffee. Cool for 20 minutes before cutting. Serve warm with cream or brandy butter.',
    ing: [
      '# Pastry',
      '250 g plain flour',
      '125 g cold butter, diced',
      '3 tbsp cold water',
      '1 egg, beaten, for brushing',
      '# Filling',
      '200 g pitted dates, chopped',
      '4 pieces stem ginger in syrup, about 60 g, chopped',
      '75 g butter, softened',
      '100 g soft dark brown sugar',
      '4 tbsp dark rum'
    ],
    st: [
      'Rub the butter into the flour and mix in the water to form a dough. Wrap and chill for 30 minutes.',
      'Heat the oven to 180°C (160°C fan). Mix the dates, ginger, butter, sugar and rum to a thick paste.',
      'Roll out two-thirds of the pastry and line a 23 cm tin. Spread with the filling. Roll the remaining pastry and cover, sealing the edges and cutting a small steam hole.',
      'Brush with the beaten egg and bake for 45 minutes until golden. Cool for 20 minutes before cutting.'
    ],
    tips: [
      'Use dark rum for the best flavour.',
      'Cut the steam hole.',
      'Serve in thin slices.'
    ],
    pair: ['Clotted cream', 'Brandy butter', 'Hot tea', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [433, 5, 56, 21, 3, 28, 20]
  },

  'chorley-cakes': {
    d: 'Flat, round Lancashire pastries of buttery flaky pastry filled with currants and sugar, eaten plain or with Lancashire cheese.',
    meta: 'Chorley cakes: flat, round Lancashire pastries of flaky pastry filled with currants and sugar. Makes ten, baked in 20 minutes.',
    kw: ['chorley cakes', 'chorley cakes recipe', 'lancashire currant pastry', 'chorley cakes with lancashire cheese', 'flat currant cakes'],
    why: 'Chorley cakes are not eccles cakes, and anyone from Lancashire will tell you so. They are flatter, plainer and less sweet. The pastry is a flaky one, not puff, there is no sugar glaze, and the filling is currants and a little sugar with no spice. They are eaten for tea, buttered and with a slice of Lancashire cheese on the side.\n\nA flaky pastry is made by rolling and folding butter into dough. For speed, a good-quality shop-bought puff pastry gives a fine result. If making your own, use a rough method: grate frozen butter into the flour, add cold water, fold and roll four times. **Keep everything cold.** Warm butter melts into the flour and loses the layers.\n\nCut 10 cm rounds. Put a spoonful of currants mixed with brown sugar and a knob of butter in the middle, gather the edges together and press shut, then turn over so the seam is underneath. Roll gently with a rolling pin until the currants show through faintly.\n\nSlash the top three times, brush with milk and sprinkle with sugar. Bake at 200°C for 20 minutes, until golden. Eat warm or cold.',
    ing: [
      '500 g ready-made all-butter puff pastry',
      '150 g currants',
      '2 tbsp soft light brown sugar',
      '30 g butter, melted',
      '1 pinch mixed spice',
      '2 tbsp milk, for brushing',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Heat the oven to 200°C (180°C fan) and line a baking tray.',
      'Mix the currants, brown sugar, melted butter and mixed spice.',
      'Roll the pastry to 3 mm thick and cut 10 rounds, 10 cm across. Put a spoonful of filling in the centre of each, gather the edges and pinch to seal.',
      'Turn each over, seam-side down, and roll gently until the currants show through. Slash the tops three times.',
      'Brush with the milk, sprinkle with the caster sugar and bake for 20 minutes until golden.'
    ],
    tips: [
      'Keep the pastry cold.',
      'Do not roll too hard or the currants burst through.',
      'Serve with a wedge of Lancashire cheese.'
    ],
    pair: ['Lancashire cheese', 'Butter', 'Hot tea', 'Apple chutney'],
    store: 'Keeps in an airtight tin for 3 days.',
    nut: [283, 3, 34, 15, 2, 16, 300]
  },

  'banbury-cakes': {
    d: 'Oval pastry cakes filled with spiced currants, candied peel and rum, with slashes across the top and a sugar crust.',
    meta: 'Banbury cakes: oval pastry cakes filled with spiced currants, candied peel and rum, with a sugar crust. Makes ten, baked in 20 minutes.',
    kw: ['banbury cakes', 'banbury cakes recipe', 'oxfordshire banbury cakes', 'spiced currant oval pastries', 'banbury cake with puff pastry'],
    why: 'Oval, not round, and spicier than an Eccles. The Banbury cake is a pastry from Oxfordshire, with a filling of currants and candied peel flavoured with allspice, nutmeg, cinnamon and a splash of rum. The shape is the clue: it is oval, pointed at the ends, and slashed across the top in three places.\n\nPuff pastry is the usual casing. Ready-rolled all-butter puff pastry is the shortcut, and it gives a crisp, flaky shell. Cut it into rounds, roll them slightly into ovals, and fill. **Don\'t overfill.** A heaped spoonful is too much; use about a tablespoon, spread in the middle.\n\nThe filling is mixed with softened butter and brown sugar, which melts in the oven to form the sticky centre. Candied peel adds citrus and chew, and the rum gives the whole thing warmth. Allow the mixture to rest for 30 minutes so the currants plump up.\n\nFold the edges over to the centre and press them down, then turn the cake over and flatten it with a rolling pin to an oval about 12 cm long. Brush with egg white, sprinkle with sugar and slash the top. Bake at 200°C for 20 minutes, until golden.',
    ing: [
      '500 g ready-made all-butter puff pastry',
      '150 g currants',
      '40 g mixed candied peel, finely chopped',
      '40 g soft dark brown sugar',
      '30 g butter, softened',
      '1/2 tsp ground allspice',
      '1/2 tsp ground cinnamon',
      '1/4 tsp grated nutmeg',
      '2 tbsp dark rum',
      '1 egg white, lightly beaten',
      '1 tbsp caster sugar'
    ],
    st: [
      'Mix the currants, candied peel, brown sugar, butter, allspice, cinnamon, nutmeg and rum. Leave for 30 minutes.',
      'Heat the oven to 200°C (180°C fan) and line a baking tray.',
      'Roll the pastry to 3 mm thick and cut 10 rounds, 10 cm across. Put a tablespoon of filling in the centre of each. Fold the edges to the middle, press to seal, and turn over.',
      'Roll gently into ovals about 12 cm long. Brush with egg white, sprinkle with caster sugar and slash the tops three times.',
      'Bake for 20 minutes until golden and crisp.'
    ],
    tips: [
      'Seal the edges well.',
      'Let the filling stand for 30 minutes.',
      'Cool before eating; the filling is hot.'
    ],
    pair: ['Hot tea', 'Coffee', 'Cheddar', 'Clotted cream'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [299, 3, 38, 15, 2, 20, 310]
  },

  'cornish-fairings': {
    d: 'Crisp, cracked ginger biscuits made with golden syrup, mixed spice and bicarbonate of soda, a traditional Cornish fair-day treat.',
    meta: 'Cornish fairings: crisp, cracked ginger biscuits made with golden syrup, mixed spice and bicarbonate of soda. Makes 24, baked in 12 minutes.',
    kw: ['cornish fairings', 'cornish fairings recipe', 'cornish ginger biscuits', 'fairings biscuits', 'crisp ginger fairings'],
    why: 'They used to be sold at fairs as presents, wrapped in paper, and what makes them special is the crack. A good fairing has a surface that has split into a web of fine lines in the oven. That crackle is a sign of the right dough, the right oven and the right spices.\n\nThe dough is flour, ground ginger, mixed spice, cinnamon, bicarbonate of soda, sugar, butter and golden syrup. The syrup makes the biscuits crisp and chewy at the edges, and the bicarbonate of soda reacts with it to produce the spread and the crackle. The dough should be soft but not sticky. **Roll it into balls and space them 5 cm apart.** They spread a lot.\n\nBake at 180°C for 12 minutes, until they are deep golden-brown and flat, with cracks all over the top. Let them cool on the tray for 5 minutes, since they are soft when hot and firm up quickly.\n\nTraditional fairings are hard and snappy. For a chewier biscuit, bake for 9 minutes and cool on the tray. Store in a tin, and they keep for a week or more.',
    ing: [
      '225 g plain flour',
      '2 tsp ground ginger',
      '1 tsp mixed spice',
      '1/2 tsp ground cinnamon',
      '1 tsp bicarbonate of soda',
      '100 g butter',
      '75 g caster sugar',
      '4 tbsp golden syrup'
    ],
    st: [
      'Heat the oven to 180°C (160°C fan) and line two trays with baking paper.',
      'Mix the flour, ginger, mixed spice, cinnamon and bicarbonate of soda. Rub in the butter, then stir in the sugar.',
      'Warm the golden syrup until runny and stir in to form a soft dough.',
      'Roll into 24 balls and space them 5 cm apart on the trays. Bake for 12 minutes until deep golden and cracked.',
      'Cool on the trays for 5 minutes, then on a rack.'
    ],
    tips: [
      'Leave plenty of space between the biscuits.',
      'Do not press them flat.',
      'Cool them on the tray to firm up.'
    ],
    pair: ['Hot tea', 'Cornish cheese', 'Clotted cream', 'Apple'],
    store: 'Keeps in an airtight tin for 1 week.',
    nut: [79, 1, 12, 3, 0, 5, 60]
  },

  'brown-windsor-soup': {
    d: 'A thick, dark Victorian soup of beef, root vegetables and herbs, enriched with a splash of Madeira and blended smooth or left rustic.',
    meta: 'Brown Windsor soup: a thick, dark Victorian soup of beef, root vegetables and herbs, enriched with Madeira. Six servings, cooked for 90 minutes.',
    kw: ['brown windsor soup', 'brown windsor soup recipe', 'victorian beef soup', 'british brown beef and vegetable soup', 'old fashioned brown soup with madeira'],
    why: 'It was once the soup that British hotels served as the first course, and later the joke that a bad one was served. Made well, though, Brown Windsor is a deep, savoury beef broth with the sweetness of root vegetables, thick with barley or blended to a smooth velvet, and it can be superb. The trick is a proper stock and a dark base.\n\nThe flavour starts with the browning. Beef shin, cut into 3 cm pieces, is browned in batches in hot dripping or oil until deeply coloured, then removed. The onions, carrots, swede and celery are browned in the same pot for 10 minutes. **This is where the brown comes from.** The soup is only as dark and flavourful as the browning.\n\nAdd tomato purée, flour, a bay leaf, thyme and beef stock, return the beef and simmer gently for 90 minutes, until the meat is soft. A teaspoon of Worcestershire sauce and a splash of Madeira or sherry added in the last 5 minutes lift the flavour.\n\nServe it chunky, or remove the beef and blend the vegetables, then stir the beef back in. A slice of buttered toast on the side is entirely in order.',
    ing: [
      '3 tbsp beef dripping or vegetable oil',
      '500 g beef shin, cut into 3 cm pieces',
      '2 onions, about 300 g, chopped',
      '2 carrots, about 200 g, diced',
      '200 g swede, diced',
      '2 celery sticks, diced',
      '2 tbsp plain flour',
      '2 tbsp tomato purée',
      '1.5 litres beef stock',
      '1 bay leaf',
      '1 tsp dried thyme',
      '1 tsp Worcestershire sauce',
      '3 tbsp Madeira or dry sherry',
      '1 tsp salt',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Heat the dripping in a large pot and brown the beef in batches for 10 minutes. Remove.',
      'Add the onions, carrots, swede and celery and cook for 10 minutes until well browned.',
      'Stir in the flour and tomato purée and cook for 2 minutes. Add the stock, bay leaf, thyme and beef.',
      'Bring to a boil, then simmer gently for 90 minutes until the beef is tender.',
      'Stir in the Worcestershire sauce, Madeira, salt and pepper and simmer for 5 minutes. Remove the bay leaf.'
    ],
    tips: [
      'Brown the beef and vegetables well.',
      'Blend the vegetables for a smoother soup.',
      'Serve with buttered toast.'
    ],
    pair: ['Buttered toast', 'Crusty bread', 'Cheese', 'Sherry'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [306, 20, 16, 18, 3, 6, 1330]
  },

  'bolo-rei': {
    d: 'A Portuguese Christmas ring of rich, fruited sweet bread decorated with candied fruit and nuts, traditionally baked with a bean inside.',
    meta: 'Bolo rei: a Portuguese Christmas ring of rich, fruited sweet bread decorated with candied fruit and nuts. Ten servings, baked for 40 minutes.',
    kw: ['bolo rei', 'bolo rei recipe', 'portuguese king cake', 'portuguese christmas ring cake', 'bolo rei with candied fruit'],
    why: 'The name means king cake, and this is the one the Portuguese eat from Christmas Eve until Epiphany. It is a soft, buttery brioche-style ring, stuffed with raisins, pine nuts, walnuts and candied fruit, and crowned with more candied fruit. Traditionally, a dried broad bean and a small gift were hidden inside, and the finder of the bean paid for the next cake.\n\nThe dough is enriched: flour, sugar, yeast, eggs, butter, milk, orange zest and port or Madeira. Knead it for 10 minutes, until smooth, then work in the butter in small pieces. It is a soft, sticky dough, and the temptation is to add more flour. **Don\'t.** The softness is what makes the bread tender.\n\nLet it rise for 2 hours, until doubled. Mix in the raisins soaked in port, chopped walnuts, pine nuts and candied fruit. Shape the dough into a ring around an oiled ramekin, which keeps the hole open. Let it rise for 45 minutes.\n\nDecorate with halved candied cherries, orange slices and nuts, glaze with beaten egg and bake at 180°C for 40 minutes. Brush with warm apricot jam when it comes out. Serve in thick slices, with a coffee.',
    ing: [
      '500 g strong white bread flour',
      '7 g fast-action dried yeast',
      '100 g caster sugar',
      '1/2 tsp salt',
      '1 orange, zest only',
      '3 eggs',
      '100 ml warm milk',
      '100 g butter, softened',
      '3 tbsp port or Madeira',
      '80 g raisins',
      '40 g walnuts, chopped',
      '30 g pine nuts',
      '60 g mixed candied fruit, chopped',
      '1 egg, beaten, for brushing',
      '40 g candied fruit and cherries, for decoration',
      '3 tbsp apricot jam, warmed'
    ],
    st: [
      'Soak the raisins in the port for 30 minutes.',
      'Mix the flour, yeast, sugar, salt and orange zest. Add the 3 eggs and milk and knead for 10 minutes. Work in the butter a piece at a time until smooth. Cover and leave to rise for 2 hours.',
      'Knead in the raisins and port, walnuts, pine nuts and chopped candied fruit.',
      'Shape into a ring around an oiled ramekin on a lined tray. Cover and leave to rise for 45 minutes.',
      'Heat the oven to 180°C (160°C fan). Brush with the beaten egg, press in the decorative fruit, and bake for 40 minutes until golden. Brush with the warm apricot jam.'
    ],
    tips: [
      'Do not add extra flour to the dough.',
      'Cover with foil if the top browns too fast.',
      'Serve with port or coffee.'
    ],
    pair: ['Port', 'Coffee', 'Hot chocolate', 'Cheese'],
    store: 'Keeps wrapped for 4 days or freezes for up to 2 months.',
    nut: [409, 9, 55, 17, 3, 29, 410],
    rest: [195, 'Soaking the raisins and proving']
  },

  'torta-de-santa-clara': {
    d: 'A Portuguese convent sweet: shortcrust filled with a rich cream of egg yolks, sugar and ground almonds, baked until golden.',
    meta: 'Torta de Santa Clara: a Portuguese convent sweet of shortcrust filled with egg yolk, sugar and ground almond cream. Eight servings, baked for 35 minutes.',
    kw: ['torta de santa clara', 'santa clara tart', 'portuguese egg yolk and almond tart', 'portuguese convent sweet', 'torta de santa clara recipe'],
    why: 'Convents in Portugal used egg whites to starch clothes and to clarify wine, and were left with a mountain of yolks. The nuns turned the yolks into sweets, and Torta de Santa Clara is one of them: a tart with a filling of egg yolks, sugar and almonds in a rich, golden cream. It is intensely sweet, and a small slice is plenty.\n\nThe pastry is a simple sweet shortcrust with butter, sugar, an egg and lemon zest, chilled for 30 minutes before rolling. It lines a tin and is blind-baked for 15 minutes, until firm. **Blind-baking prevents a soggy base**, as this is a wet filling.\n\nFor the filling, make a sugar syrup of 200 g of sugar and 100 ml of water, boiled for 5 minutes until just thickened. Whisk the egg yolks, add the ground almonds and cinnamon, and pour in the warm syrup in a thin stream, whisking all the time. Cook gently over a low heat for 5 minutes until it thickens slightly.\n\nPour the filling into the pastry case and bake at 170°C for 20 minutes, until set and golden. Cool completely before slicing.',
    ing: [
      '# Pastry',
      '200 g plain flour',
      '100 g cold butter, diced',
      '50 g caster sugar',
      '1 egg',
      '1/2 lemon, zest only',
      '# Filling',
      '200 g caster sugar',
      '100 ml water',
      '8 egg yolks',
      '100 g ground almonds',
      '1/2 tsp ground cinnamon',
      '1 tbsp icing sugar'
    ],
    st: [
      'Rub the butter into the flour and sugar, then mix in the egg and lemon zest to form a dough. Wrap and chill for 30 minutes.',
      'Heat the oven to 180°C (160°C fan). Roll out the pastry and line a 23 cm tart tin. Blind bake with baking paper and beans for 15 minutes. Remove the paper and beans and bake for 5 minutes more.',
      'Boil the sugar and water for 5 minutes until slightly thickened. Whisk the egg yolks with the almonds and cinnamon, then pour in the warm syrup in a thin stream, whisking.',
      'Cook the mixture over a low heat for 5 minutes, stirring, until it thickens. Pour into the pastry case.',
      'Lower the oven to 170°C (150°C fan) and bake for 20 minutes until set and golden. Cool and dust with the icing sugar.'
    ],
    tips: [
      'Add the syrup slowly to avoid scrambling the yolks.',
      'Cool the tart completely before slicing.',
      'Serve in thin slices with strong coffee.'
    ],
    pair: ['Espresso', 'Port', 'Fresh fruit', 'Whipped cream'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [466, 12, 55, 22, 2, 34, 70]
  },

  'torrijas': {
    d: 'Slices of bread soaked in sweetened, spiced milk, coated in egg, fried until golden and rolled in cinnamon sugar, a Spanish Easter treat.',
    meta: 'Torrijas: slices of bread soaked in sweetened, spiced milk, coated in egg, fried until golden and rolled in cinnamon sugar. Six servings, cooked in 15 minutes.',
    kw: ['torrijas', 'torrijas recipe', 'spanish torrijas', 'spanish french toast', 'torrijas de semana santa'],
    why: 'Stale bread is the main ingredient. The bread has to be dry, dense and at least two days old, cut thick, because fresh bread falls apart in the milk. Torrijas are the Spanish take on French toast, eaten during Holy Week, and the milk used to soak them is infused with cinnamon, lemon peel and sugar. It is the soaking that makes them so soft.\n\nWarm the milk with the cinnamon stick, a strip of lemon peel and the sugar until the sugar dissolves, then let it cool slightly. The bread slices, about 2.5 cm thick, go into a shallow dish and the milk is poured over them. Soak for 5 to 10 minutes, turning once, until the slice is saturated but still holds together. **Lift them out with a spatula, not your fingers.** They are fragile.\n\nDip each slice in beaten egg, shake off the excess, and cook in 1 cm of hot olive or sunflower oil for 2 minutes on each side, until deep golden. Drain on kitchen paper.\n\nRoll the hot slices in a mix of caster sugar and cinnamon. Serve warm, on their own or with a drizzle of honey or a glass of sweet wine.',
    ing: [
      '6 slices stale bread, about 300 g, 2.5 cm thick',
      '500 ml whole milk',
      '1 cinnamon stick, about 3 g',
      '1 strip lemon peel',
      '3 tbsp caster sugar',
      '2 eggs, beaten',
      '150 ml olive oil or sunflower oil, for frying',
      '4 tbsp caster sugar',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Warm the milk with the cinnamon stick, lemon peel and 3 tbsp sugar until the sugar dissolves. Cool slightly.',
      'Lay the bread in a shallow dish and pour over the milk. Soak for 5 to 10 minutes, turning once.',
      'Heat the oil in a wide frying pan over a medium heat. Dip each slice in the beaten egg and fry for 2 minutes on each side until deep golden. Drain on kitchen paper.',
      'Mix the 4 tbsp sugar and the cinnamon on a plate and roll the warm torrijas in the mixture. Serve warm.'
    ],
    tips: [
      'Use bread that is at least two days old.',
      'Handle the soaked slices gently.',
      'Drizzle with honey or serve with sweet wine.'
    ],
    pair: ['Honey', 'Sweet wine', 'Coffee', 'Fresh fruit'],
    store: 'Best eaten the day they are made.',
    nut: [481, 10, 45, 29, 2, 22, 300]
  },

  'leche-frita': {
    d: 'Thick cinnamon-scented custard set in a tray, cut into squares, coated in flour and egg and cooked until golden with a creamy centre.',
    meta: 'Leche frita: thick cinnamon-scented custard set in a tray, cut into squares and cooked until golden with a creamy centre. Six servings, cooked in 15 minutes.',
    kw: ['leche frita', 'leche frita recipe', 'spanish fried milk', 'spanish custard squares', 'leche frita with cinnamon'],
    why: 'The name means fried milk, and it describes the dish perfectly. Leche frita is a thick custard, flavoured with cinnamon and lemon, poured into a tray and left to set, then cut into squares, dipped in egg and flour, and fried until crisp. Inside, it is hot, creamy and soft. Outside, it is a thin, golden crust.\n\nThe custard has to be firm enough to be cut. It is thickened with cornflour as well as egg yolks. Cook milk with the cinnamon stick and lemon peel, whisk in a mix of yolks, sugar and cornflour, and cook for 8 minutes, stirring all the time, until it is very thick, like a stiff paste. **Don\'t take it off the heat too early.** If it is too soft it will not hold its shape.\n\nPour into a lined tray and spread to 2 cm thick. Let it cool, then chill for at least 2 hours, until firm. Cut into squares of 5 cm.\n\nCoat each in flour, then in beaten egg, and fry in hot oil for 1 minute on each side, until golden. Dust with cinnamon sugar and serve straight away. The contrast between the crisp shell and the molten middle is the point.',
    ing: [
      '500 ml whole milk',
      '1 cinnamon stick, about 3 g',
      '1 strip lemon peel',
      '4 egg yolks',
      '100 g caster sugar',
      '50 g cornflour',
      '4 tbsp plain flour',
      '2 eggs, beaten',
      '150 ml olive oil or sunflower oil, for frying',
      '2 tbsp caster sugar',
      '1/2 tsp ground cinnamon'
    ],
    st: [
      'Warm 400 ml of the milk with the cinnamon stick and lemon peel for 5 minutes. Remove the cinnamon and peel.',
      'Whisk the remaining 100 ml milk with the egg yolks, 100 g sugar and cornflour until smooth. Pour in the warm milk, return to the pan and cook, stirring, for 8 minutes until very thick.',
      'Pour into a lined 20 cm tin to a depth of 2 cm. Cool, then chill for at least 2 hours until firm. Cut into 5 cm squares.',
      'Coat each square in flour, then beaten egg. Fry in hot oil for 1 minute on each side until golden.',
      'Drain, then dust with the 2 tbsp sugar mixed with the cinnamon.'
    ],
    tips: [
      'Cook the custard until very thick.',
      'Chill it thoroughly.',
      'Handle the squares gently.'
    ],
    pair: ['Coffee', 'Fresh fruit', 'Sweet wine', 'Ice cream'],
    store: 'The set custard keeps in the fridge for 2 days. Fry just before serving.',
    nut: [471, 10, 38, 31, 1, 25, 100],
    rest: [120, 'Chilling the custard']
  },

  'ensaimada': {
    d: 'A light Mallorcan spiral pastry of enriched dough rolled thin, coiled and baked, finished with icing sugar.',
    meta: 'Ensaimada: a light Mallorcan spiral pastry of enriched dough, rolled thin, coiled and baked, finished with icing sugar. Eight servings, baked for 25 minutes.',
    kw: ['ensaimada', 'mallorcan ensaimada', 'ensaimada recipe', 'spanish spiral pastry', 'ensaimada mallorquina'],
    why: 'On Mallorca, it is the pastry of breakfast, bought from a bakery in a hexagonal paper box and dusted with so much icing sugar that it gets everywhere. The dough is light and sweet, and the shape is a spiral. Everything about it comes from stretching the dough very thin and coating it in fat.\n\nThe traditional fat is saim, or pork lard, which gives the pastry its flaky tenderness. Lard can be found in good butchers. Butter is a reasonable replacement. The dough itself is flour, sugar, yeast, eggs, a little oil and water, kneaded for 10 minutes and left to rise overnight in the fridge, which develops flavour and makes the dough easy to stretch. **Rest the dough well between stretches.** If it springs back, it needs 10 more minutes.\n\nDivide the dough into 8 balls. Stretch each one until you can see the work surface through it, brush with melted lard, roll up into a rope, and coil into a spiral on a tray. Tuck the end underneath.\n\nLeave to rise for 2 hours until puffy, then bake at 180°C for 25 minutes, until pale gold. Dust with icing sugar while still warm.',
    ing: [
      '450 g strong white bread flour',
      '7 g fast-action dried yeast',
      '70 g caster sugar',
      '1/2 tsp salt',
      '2 eggs',
      '3 tbsp olive oil',
      '120 ml warm water',
      '80 g lard or butter, softened',
      '40 g lard or butter, melted',
      '4 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt. Add the eggs, oil and water and knead for 10 minutes to a smooth dough. Rub with oil, cover and refrigerate overnight.',
      'Divide into 8 balls and rest for 20 minutes. Stretch each very thin on an oiled surface and spread with the softened lard.',
      'Roll up each sheet like a rope and coil into a spiral on a lined tray. Tuck the end underneath.',
      'Cover and leave to rise for 2 hours. Heat the oven to 180°C (160°C fan).',
      'Brush with the melted lard and bake for 25 minutes until pale gold. Dust generously with the icing sugar.'
    ],
    tips: [
      'Oil your hands and the surface.',
      'Stretch the dough gently.',
      'Dust with plenty of icing sugar.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Fresh orange juice', 'Cheese'],
    store: 'Best the day they are baked. Keeps for 2 days in a tin.',
    nut: [380, 7, 43, 20, 2, 18, 440],
    rest: [600, 'Chilling overnight and proving']
  },

  'magdalenas': {
    d: 'Light, tall Spanish sponge cakes scented with lemon and olive oil, baked in paper cases with a characteristic peaked top.',
    meta: 'Magdalenas: light, tall Spanish sponge cakes scented with lemon and olive oil, baked in paper cases with a peaked top. Makes twelve, baked in 20 minutes.',
    kw: ['magdalenas', 'spanish magdalenas', 'magdalenas recipe', 'spanish lemon muffins', 'magdalenas with olive oil'],
    why: 'The peak is the proof. A real Spanish magdalena has a little dome on top that rises in the middle, and a lot of the secret is in the temperature. The batter is rested in the fridge for 30 minutes, and the oven starts very hot, at 220°C, for the first 5 minutes, then drops to 190°C. The sudden blast of heat makes the batter spring up in the centre and set into a peak.\n\nThey are not the French madeleine, which is shell-shaped. The Spanish magdalena is a muffin-like small sponge, made with olive oil rather than butter, and lemon zest. The oil gives a moist crumb that stays soft for days. Mild olive oil is better than strong extra virgin. **Don\'t beat the batter hard.** A smooth, thick batter, mixed just until combined, gives the best peak.\n\nWhisk the eggs and sugar for 5 minutes, until pale and tripled in volume. Fold in the flour and baking powder, then the oil, milk and lemon zest. Chill, then spoon into paper cases to three-quarters full.\n\nBake as described, and cool on a rack. They are best eaten the same day, with coffee at breakfast, in the Spanish manner.',
    ing: [
      '3 eggs',
      '150 g caster sugar',
      '1 lemon, zest only',
      '150 g plain flour',
      '1 tsp baking powder',
      '100 ml mild olive oil',
      '50 ml whole milk',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Whisk the eggs, 150 g sugar and lemon zest for 5 minutes until pale and thick.',
      'Fold in the flour and baking powder, then the oil and milk until just combined. Chill for 30 minutes.',
      'Heat the oven to 220°C (200°C fan). Line a 12-hole muffin tin with paper cases and fill each three-quarters full. Sprinkle with the 1 tbsp sugar.',
      'Bake for 5 minutes, then lower the oven to 190°C (170°C fan) and bake for 12 minutes until golden with peaked tops.',
      'Cool on a rack.'
    ],
    tips: [
      'Do not skip the chilling.',
      'Fill the cases only three-quarters full.',
      'Use a mild olive oil.'
    ],
    pair: ['Coffee', 'Hot chocolate', 'Fresh orange juice', 'Jam'],
    store: 'Best the day they are made. Keeps in a tin for 3 days.',
    nut: [189, 3, 24, 9, 1, 14, 60]
  },

  'ajo-blanco': {
    d: 'A cold white soup of ground almonds, garlic, bread and olive oil, served with green grapes and a drizzle of sherry vinegar.',
    meta: 'Ajo blanco: a cold white soup of ground almonds, garlic, bread and olive oil, served with green grapes. Four servings, no cooking.',
    kw: ['ajo blanco', 'ajo blanco recipe', 'spanish white gazpacho', 'cold almond and garlic soup', 'ajo blanco with grapes'],
    why: 'It is the white gazpacho, and it predates tomatoes. Ajo blanco is a cold soup from Andalusia, made from almonds, garlic, bread, olive oil and vinegar, and it comes from an era before the Americas supplied Spain with tomatoes. Ground almonds give it creaminess, and garlic gives it bite.\n\nThe key ingredient is blanched almonds. Marcona almonds, round and sweet, are best, but any blanched ones are good. Their skins give a bitter note and a grey colour, so do not use unblanched almonds. Soak 1 slice of stale white bread, without crusts, in water for 5 minutes, then squeeze it dry. The bread adds body.\n\nPut the almonds, bread, garlic and a pinch of salt in a high-speed blender with a little cold water and blend for 2 minutes until smooth. **Add the olive oil in a thin stream with the motor running.** The soup emulsifies and becomes pale and creamy.\n\nAdd sherry vinegar to taste, and then more cold water to loosen. Chill for at least 1 hour. The flavours deepen, and the soup becomes cooler. Serve it in small bowls with halved green grapes, a trickle of oil and a few toasted almonds.',
    ing: [
      '150 g blanched almonds',
      '2 slices stale white bread, about 60 g, crusts removed',
      '2 garlic cloves',
      '100 ml extra virgin olive oil',
      '2 tbsp sherry vinegar',
      '1/2 tsp salt',
      '400 ml cold water',
      '100 g green grapes, halved',
      '1 tbsp toasted flaked almonds'
    ],
    st: [
      'Soak the bread in cold water for 5 minutes and squeeze dry.',
      'Blend the almonds, bread, garlic, salt and 200 ml of the water for 2 minutes until smooth.',
      'With the motor running, add the olive oil in a thin stream, then the vinegar and remaining water.',
      'Strain if you want it very smooth. Chill for 1 hour.',
      'Serve in small bowls topped with the grapes and flaked almonds.'
    ],
    tips: [
      'Use blanched almonds only.',
      'Chill the soup well.',
      'Adjust the vinegar and salt after chilling.'
    ],
    pair: ['Crusty bread', 'Jamón', 'Manzanilla sherry', 'Melon'],
    store: 'Keeps in the fridge for 2 days. Stir before serving.',
    nut: [511, 10, 21, 43, 5, 6, 370],
    rest: [60, 'Chilling']
  },

  'gambas-pil-pil': {
    d: 'Prawns sizzling in olive oil with plenty of garlic and chilli, served bubbling in the pan with bread for mopping.',
    meta: 'Gambas pil pil: prawns sizzling in olive oil with plenty of garlic and chilli, served in the pan with bread. Four servings, cooked for 8 minutes.',
    kw: ['gambas pil pil', 'gambas pil pil recipe', 'spanish garlic chilli prawns', 'pil pil prawns', 'sizzling garlic prawns tapas'],
    why: 'The sound of this dish is part of it: the hiss of oil and garlic as the dish arrives at the table. Gambas pil pil is a tapas classic, prawns cooked in a clay dish or small pan with a lot of oil, a lot of garlic and a dried chilli, and served immediately while still bubbling. The oil is as much the dish as the prawns, and the bread is there to mop it up.\n\nThe oil must be good olive oil, and a generous amount, about 100 ml for four. It is cooked at a gentle heat with sliced garlic and dried chillies for 3 minutes, until the garlic just begins to turn gold. **Never let the garlic brown.** Browned garlic is bitter, and no amount of chilli covers that.\n\nThen the prawns go in. Raw king prawns, peeled but with tails on, need only 3 minutes: they turn pink and curl. Add a pinch of smoked paprika, a splash of sherry or lemon juice, and salt.\n\nTake the pan to the table at once and serve it still sizzling. Eat the prawns with a cocktail stick, then wipe up the oil with crusty bread. A cold fino sherry or a chilled white wine goes with it.',
    ing: [
      '100 ml extra virgin olive oil',
      '8 garlic cloves, thinly sliced',
      '2 dried chillies, broken in half',
      '500 g raw king prawns, peeled with tails on',
      '1 tsp smoked paprika',
      '1 tbsp dry sherry or lemon juice',
      '1/2 tsp flaky salt',
      '2 tbsp chopped fresh parsley',
      '200 g crusty bread, to serve'
    ],
    st: [
      'Heat the oil in a wide pan or clay dish over a medium-low heat. Add the garlic and chillies and cook for 3 minutes until the garlic is just golden.',
      'Raise the heat slightly. Add the prawns and cook for 3 minutes, turning once, until pink.',
      'Add the paprika, sherry and salt and cook for 30 seconds.',
      'Scatter with the parsley and serve at once with the bread.'
    ],
    tips: [
      'Do not let the garlic brown.',
      'Pat the prawns dry first.',
      'Serve while sizzling.'
    ],
    pair: ['Crusty bread', 'Fino sherry', 'Lemon wedges', 'Green salad'],
    store: 'Best eaten straight away.',
    nut: [457, 30, 28, 25, 2, 3, 730]
  },

  'escalivada': {
    d: 'Aubergine, red pepper and onion roasted whole until soft and smoky, peeled, torn into strips and dressed with olive oil, a Catalan classic.',
    meta: 'Escalivada: aubergine, red pepper and onion roasted whole until soft and smoky, peeled and dressed with olive oil. Four servings, cooked for 50 minutes.',
    kw: ['escalivada', 'catalan escalivada', 'escalivada recipe', 'roasted aubergine and pepper salad', 'catalan roasted vegetables with olive oil'],
    why: 'Char them hard, then steam them in their own skins: those are the two stages of a good escalivada, and the name comes from the Catalan word for cooking in embers. The vegetables go straight onto the heat, aubergine, pepper and onion, until the skin is black and the inside is soft and sweet. Then they are covered and left to cool, so the steam loosens the skins.\n\nIn a Catalan kitchen this is done in the coals of a fire. At home, a 220°C oven with the vegetables on a tray does the job, taking about 50 minutes. Turn them halfway. A gas flame gives the best smoky taste. **Don\'t cut the vegetables before roasting.** They steam in their skins and stay juicy.\n\nWhen black and collapsed, put the peppers in a covered bowl for 15 minutes to steam. Peel the skins off the aubergine, pepper and onion, and tear the flesh into long strips along the grain. The aubergine will release liquid; drain it.\n\nArrange in layers on a plate, season with salt, drizzle with plenty of olive oil, and add a few drops of sherry vinegar if you like. Serve warm or at room temperature, on bread or with grilled fish or meat.',
    ing: [
      '2 aubergines, about 600 g',
      '2 red peppers, about 400 g',
      '2 onions, about 300 g, in their skins',
      '4 tbsp extra virgin olive oil',
      '1 tsp flaky sea salt',
      '2 garlic cloves, finely sliced',
      '1 tsp sherry vinegar'
    ],
    st: [
      'Heat the oven to 220°C (200°C fan). Prick the aubergines and put them whole on a tray with the peppers and onions.',
      'Roast for 50 minutes, turning once, until the skins are black and blistered and the vegetables are soft.',
      'Put the peppers in a covered bowl and leave for 15 minutes. Peel the skins from the peppers, aubergines and onions.',
      'Tear the flesh into long strips, drain off any liquid, and arrange on a plate. Dress with the olive oil, salt, garlic and vinegar.'
    ],
    tips: [
      'Char the skins well.',
      'Tear the vegetables rather than cutting them.',
      'Serve with anchovies or salted cod.'
    ],
    pair: ['Crusty bread', 'Anchovies', 'Grilled sausage', 'Cava'],
    store: 'Keeps in the fridge for 3 days under a layer of oil.',
    nut: [226, 3, 22, 14, 8, 13, 600]
  },

  'calcots-with-romesco': {
    d: 'Charred spring onions or baby leeks, steamed in paper and dipped by hand into a nutty, smoky romesco sauce.',
    meta: 'Calçots with romesco: charred spring onions or baby leeks steamed in paper and dipped into a nutty romesco sauce. Four servings, cooked for 20 minutes.',
    kw: ['calcots with romesco', 'calçots', 'calcotada', 'calcots recipe', 'grilled leeks with romesco sauce'],
    why: 'It is a feast, a messy one, and it happens in late winter. In Catalonia, the calçotada is a day out: bundles of long, thick onions are grilled on an open fire until black outside and soft inside, wrapped in newspaper to steam, and eaten by hand with a bib. You peel the charred outer layer off with your fingers, dip the tender white heart into romesco, tip your head back, and lower it into your mouth.\n\nCalçots are a type of spring onion, grown by being earthed up. Outside Spain they are hard to find, but large spring onions or baby leeks, about 2 cm thick, are a good substitute. Trim the roots and leaves. **Char them over a very high heat until the outsides are completely black.** The charring is the flavour, and the layers underneath stay moist.\n\nWrap in paper or foil for 15 minutes to steam.\n\nRomesco is a Catalan sauce of roasted tomatoes, roasted red peppers, toasted almonds, garlic, a dried ñora pepper or paprika, bread fried in oil, sherry vinegar and olive oil. Blitz to a coarse paste. It should taste of smoke and nuts, with a pleasant sharpness. Serve the onions on a tile or board with the sauce.',
    ing: [
      '24 thick spring onions or baby leeks, about 600 g, trimmed',
      '# Romesco',
      '2 tomatoes, about 200 g, roasted',
      '1 red pepper, about 150 g, roasted and peeled',
      '50 g blanched almonds, toasted',
      '2 garlic cloves',
      '1 slice bread, about 30 g, fried in oil',
      '1 tsp smoked paprika',
      '2 tbsp sherry vinegar',
      '100 ml extra virgin olive oil',
      '1/2 tsp salt'
    ],
    st: [
      'Blend the roasted tomatoes, pepper, almonds, garlic, bread, paprika, vinegar and salt to a coarse paste. With the motor running, add the oil. Taste and adjust.',
      'Heat a griddle pan or barbecue to very hot. Cook the onions for 10 minutes, turning, until the outsides are completely black and the insides are soft.',
      'Wrap them in paper or foil and leave to steam for 15 minutes.',
      'Peel off the charred outer layers and serve the onions with the romesco for dipping.'
    ],
    tips: [
      'Char the outsides completely.',
      'Wrap them to steam.',
      'Provide napkins and bibs.'
    ],
    pair: ['Cava', 'Red wine', 'Grilled sausages', 'Crusty bread'],
    store: 'Best eaten straight away. The romesco keeps in the fridge for 4 days.',
    nut: [386, 7, 22, 30, 7, 7, 360]
  },

  'fideua': {
    d: 'Fine short noodles toasted and cooked in a saffron seafood stock with prawns and squid, served with garlic mayonnaise.',
    meta: 'Fideuà: fine short noodles toasted and cooked in a saffron seafood stock with prawns and squid, served with alioli. Four servings, cooked for 35 minutes.',
    kw: ['fideua', 'fideuà', 'spanish noodle paella', 'fideua recipe', 'fideua with seafood and alioli'],
    why: 'It is paella for people who like noodles, and in Valencia, it has its own devotees. Fideuà uses short, thin noodles instead of rice, toasted first in oil until golden, then cooked in a rich seafood stock. The noodles absorb the stock like rice does, and the base forms a thin, crisp crust, the socarrat, which people fight over.\n\nBuy fideo noodles, short cut-up strands of vermicelli, from a Spanish shop. In their absence, break spaghetti or angel hair into 2 cm pieces. The toasting is crucial. Cook the noodles in a dry pan, or in olive oil, stirring, for 3 or 4 minutes, until they turn deep golden-brown and smell of toast. **A pale noodle tastes of nothing and turns mushy.**\n\nThe sofrito is onion, tomato, garlic and sweet paprika, cooked down in a wide pan. Add squid rings, then the hot stock with saffron, then the noodles, spread evenly. Do not stir. Top with the prawns and cook for 10 minutes. The liquid is absorbed and the pan crackles at the end as the base crisps.\n\nServe from the pan, with alioli on the side and lemon wedges.',
    ing: [
      '4 tbsp olive oil',
      '250 g fideo noodles or broken thin spaghetti',
      '1 onion, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '2 tomatoes, about 200 g, grated',
      '1 tsp sweet paprika',
      '200 g squid, cleaned and cut into rings',
      '750 ml hot fish stock',
      '1 pinch saffron strands',
      '1/2 tsp salt',
      '300 g raw king prawns, shell on',
      '4 tbsp alioli',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat 2 tbsp of the oil in a wide pan and toast the noodles for 3 to 4 minutes, stirring, until deep golden. Remove.',
      'Add the remaining oil and cook the onion for 5 minutes. Add the garlic, tomatoes and paprika and cook for 5 minutes until thick. Add the squid and cook for 2 minutes.',
      'Add the stock, saffron and salt and bring to a boil. Spread the toasted noodles evenly across the pan and do not stir.',
      'Lay the prawns on top. Cook over a medium heat for 10 minutes until the liquid is absorbed and the base crackles.',
      'Rest for 2 minutes and serve with the alioli and lemon.'
    ],
    tips: [
      'Toast the noodles to a deep gold.',
      'Do not stir after the stock goes in.',
      'Use a wide pan so the noodles cook evenly.'
    ],
    pair: ['Alioli', 'Lemon wedges', 'Green salad', 'Albariño'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day.',
    nut: [611, 34, 58, 27, 4, 5, 1140]
  },

  'arroz-negro': {
    d: 'Black rice coloured and flavoured with squid ink, cooked with squid and sofrito in a wide pan and served with alioli.',
    meta: 'Arroz negro: black rice coloured and flavoured with squid ink, cooked with squid and sofrito and served with alioli. Four servings, cooked for 40 minutes.',
    kw: ['arroz negro', 'arroz negro recipe', 'spanish black rice', 'squid ink rice', 'black paella with squid and alioli'],
    why: 'The ink looks alarming and tastes of the sea. Arroz negro is a rice dish from the Valencian coast and Catalonia, in which rice is cooked in a stock coloured jet black with squid or cuttlefish ink. The flavour is briny, deep and a little sweet, and the dish needs a dollop of garlic mayonnaise to lift it.\n\nBuy the ink in small sachets from a fishmonger or a Spanish delicatessen. Two sachets, or about 8 g, are enough for 4 servings. Dissolve the ink in a ladle of hot stock before adding it to the pan, otherwise it stays in streaks. **Don\'t worry about the staining.** It washes out of everything except teeth, for a short while.\n\nThe base is a sofrito of onion, garlic, tomato and green pepper, cooked slowly in olive oil for 15 minutes. Add the squid, cut into small pieces, and cook for 3 minutes. Stir in the rice, add the ink stock, and bring to a boil. Do not stir after that.\n\nCook for 18 minutes over a medium heat, until the liquid is absorbed and the rice is tender. Rest for 5 minutes. Serve with alioli and lemon wedges.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '2 tomatoes, about 200 g, grated',
      '400 g squid, cleaned and cut into small pieces',
      '300 g paella rice',
      '800 ml hot fish stock',
      '8 g squid ink',
      '1/2 tsp salt',
      '4 tbsp alioli',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oil in a wide pan. Cook the onion, pepper and garlic for 10 minutes. Add the tomatoes and cook for 5 minutes until thick.',
      'Add the squid and cook for 3 minutes. Stir in the rice for 1 minute.',
      'Dissolve the squid ink in a ladle of hot stock and pour into the pan with the remaining stock and salt. Bring to a boil and do not stir.',
      'Cook over a medium heat for 18 minutes until the liquid is absorbed. Rest for 5 minutes.',
      'Serve with the alioli and lemon wedges.'
    ],
    tips: [
      'Dissolve the ink in a little stock first.',
      'Do not stir the rice.',
      'Serve with plenty of alioli.'
    ],
    pair: ['Alioli', 'Lemon wedges', 'Green salad', 'White wine'],
    store: 'Keeps in the fridge for 1 day. Reheat gently.',
    nut: [643, 25, 75, 27, 3, 5, 1090]
  },

  'marmitako': {
    d: 'A Basque stew of fresh tuna, potatoes, peppers and tomato cooked in a light fish stock, finished with the tuna just off the heat.',
    meta: 'Marmitako: a Basque stew of fresh tuna, potatoes, peppers and tomato in a light fish stock. Four servings, cooked for 35 minutes.',
    kw: ['marmitako', 'marmitako recipe', 'basque tuna and potato stew', 'marmitako de bonito', 'spanish tuna stew'],
    why: 'The tuna goes in last, and it barely cooks. That is the one rule of marmitako, a Basque fishermen\'s stew whose name means "from the pot". The fishermen cooked it on board in a large pot with potatoes, peppers and onion, and added the fresh tuna at the end, so that it stayed moist and pink at the centre.\n\nThe base is a slow-cooked sofrito: onion, green pepper and garlic in olive oil for 12 minutes, until soft and sweet. Add a spoonful of dried choricero pepper pulp or sweet paprika, then tomato, then the potatoes, which are cracked rather than cut. To crack a potato, cut a small notch with the knife and break off a piece: the rough edges release starch and thicken the stew. **Use waxy potatoes and break them into 3 cm pieces.**\n\nCover with fish stock and cook for 20 minutes, until the potatoes are tender. Cut the tuna into 3 cm cubes, season with salt, and stir into the hot stew. Turn off the heat, cover, and leave for 5 minutes.\n\nThe tuna should be rosy in the middle, not grey. Serve in a deep bowl with a bit of bread.',
    ing: [
      '4 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '1 tsp sweet smoked paprika',
      '2 tomatoes, about 200 g, grated',
      '800 g waxy potatoes, peeled and cracked into 3 cm pieces',
      '750 ml fish stock',
      '600 g fresh tuna steak, cut into 3 cm cubes',
      '1 tsp salt',
      '2 tbsp chopped fresh parsley'
    ],
    st: [
      'Heat the oil in a wide pot and cook the onion, pepper and garlic for 12 minutes. Stir in the paprika and tomatoes and cook for 5 minutes.',
      'Add the potatoes and fish stock. Bring to a boil, then simmer for 20 minutes until the potatoes are tender.',
      'Season the tuna with the salt. Stir into the hot stew, turn off the heat, cover and leave for 5 minutes.',
      'Scatter with the parsley and serve.'
    ],
    tips: [
      'Crack the potatoes rather than cutting them.',
      'Do not cook the tuna for long.',
      'Use the freshest tuna you can find.'
    ],
    pair: ['Crusty bread', 'Txakoli wine', 'Green salad', 'Piquillo peppers'],
    store: 'Best eaten straight away. Keeps in the fridge for 1 day; the tuna will cook through.',
    nut: [488, 42, 44, 16, 7, 6, 1290]
  },

  'caldo-gallego': {
    d: 'A hearty Galician soup of white beans, potatoes, turnip greens and ham hock, with chorizo for smoke and depth.',
    meta: 'Caldo gallego: a hearty Galician soup of white beans, potatoes, turnip greens and ham hock, with chorizo. Six servings, cooked for 90 minutes.',
    kw: ['caldo gallego', 'caldo gallego recipe', 'galician white bean soup', 'spanish bean and greens soup', 'caldo gallego with chorizo'],
    why: 'When it rains in Galicia, which is often, the answer is caldo gallego. The soup is thick, hot and filling, built from white beans, potatoes, a smoked ham hock and a bundle of greens, and it takes the chill off the coldest day. It is a peasant dish, and it has the generosity of one.\n\nThe beans must be soaked overnight. Cooked from dry, they take less time to reach tenderness once soaked, and their starch thickens the broth. Drain, then cover with fresh water with the ham hock and a chorizo and simmer for 1 hour. **Skim the foam in the first 15 minutes.** It carries the salt and makes the soup cloudy.\n\nAdd the potatoes, cut into chunks, and cook for another 20 minutes. Greens come last: turnip tops (grelos) are the Galician choice, bitter and peppery, but kale, spring greens or savoy cabbage will do. Add the sliced greens for the final 10 minutes, so they keep a little colour.\n\nRemove the hock, pull the meat off the bone, return it to the pot with the sliced chorizo. Taste for salt: the ham may have given enough. Serve with a slab of broa, or any dark, crusty bread.',
    ing: [
      '250 g dried white beans, soaked overnight and drained',
      '1 smoked ham hock, about 500 g',
      '150 g chorizo, in one piece',
      '2.5 litres water',
      '600 g potatoes, peeled and cut into chunks',
      '300 g turnip tops, kale or spring greens, sliced',
      '2 tbsp olive oil',
      '1/2 tsp salt'
    ],
    st: [
      'Put the beans, ham hock, chorizo and water in a large pot. Bring to a boil, skim, and simmer for 60 minutes.',
      'Add the potatoes and simmer for 20 minutes.',
      'Add the greens and cook for 10 minutes until tender.',
      'Remove the hock and chorizo. Strip the meat from the hock, slice the chorizo, and return both to the pot.',
      'Stir in the olive oil and salt to taste.'
    ],
    tips: [
      'Soak the beans overnight.',
      'Taste before adding salt.',
      'Add a drizzle of olive oil at the table.'
    ],
    pair: ['Crusty bread', 'Cornbread (broa)', 'Ribeiro wine', 'Cheese'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [379, 25, 27, 19, 5, 3, 1390],
    rest: [480, 'Soaking the beans']
  },

  'empanada-gallega': {
    d: 'A large Galician pie of yeasted dough filled with tuna cooked with onion, peppers and tomato, baked until golden and cut into squares.',
    meta: 'Empanada gallega: a large Galician pie of yeasted dough filled with tuna cooked with onion, peppers and tomato. Eight servings, baked for 45 minutes.',
    kw: ['empanada gallega', 'galician empanada', 'empanada gallega recipe', 'galician tuna pie', 'spanish tuna pie with sofrito'],
    why: 'The filling is more important than the dough in a Galician empanada, and the filling is a slow-cooked sofrito. Onions, red and green peppers, tomato and garlic are cooked in olive oil for 30 minutes until jammy, then mixed with tinned tuna. The sofrito is also what keeps the filling moist, since the pie will bake for 45 minutes.\n\nThe pastry is a bread dough, not a pie crust: flour, yeast, olive oil, warm white wine and water, kneaded for 10 minutes and left to rise for 1 hour. It bakes up soft and bready on the inside and crisp on the outside, a lot like pizza dough. **Roll it thin, no more than 4 mm.** A thick crust overwhelms the filling.\n\nDivide the dough into two. Roll one half to fit a baking tray and spread the cold filling over it, leaving a 2 cm border. Roll the second half and lay it on top, folding the border over and crimping to seal. Brush with beaten egg and cut a hole in the middle to let steam escape, and decorate with strips of dough if you like.\n\nBake at 200°C for 45 minutes, until deeply golden. Cool for 20 minutes before cutting into squares. It is excellent warm or cold.',
    ing: [
      '# Dough',
      '500 g strong white bread flour',
      '7 g fast-action dried yeast',
      '1 tsp salt',
      '4 tbsp olive oil',
      '100 ml warm dry white wine',
      '150 ml warm water',
      '# Filling',
      '5 tbsp olive oil',
      '3 onions, about 450 g, finely chopped',
      '1 red pepper, about 150 g, finely chopped',
      '1 green pepper, about 150 g, finely chopped',
      '3 garlic cloves, crushed',
      '3 tomatoes, about 300 g, grated',
      '1 tsp sweet paprika',
      '1/2 tsp salt',
      '480 g tinned tuna in olive oil, drained',
      '1 egg, beaten, for brushing'
    ],
    st: [
      'Mix the flour, yeast and salt. Add the oil, wine and water and knead for 10 minutes. Cover and leave to rise for 1 hour.',
      'For the filling, heat the oil and cook the onions, peppers and garlic for 20 minutes over a low heat. Add the tomatoes, paprika and salt and cook for 10 minutes until jammy. Cool, then fold in the flaked tuna.',
      'Heat the oven to 200°C (180°C fan). Divide the dough in two. Roll one half to 4 mm thick to fit a lined baking tray.',
      'Spread the filling over, leaving a 2 cm border. Roll the second half and lay it on top, folding the border over and crimping. Cut a steam hole.',
      'Brush with the beaten egg and bake for 45 minutes until deep golden. Cool for 20 minutes before cutting.'
    ],
    tips: [
      'Cool the filling before using.',
      'Roll the dough thin.',
      'Serve with a glass of Albariño.'
    ],
    pair: ['Albariño', 'Green salad', 'Olives', 'Cheese'],
    store: 'Keeps in the fridge for 3 days and freezes for up to 2 months.',
    nut: [463, 23, 41, 23, 4, 8, 970],
    rest: [60, 'Proving the dough']
  }
};
