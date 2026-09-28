'use strict';

/**
 * Volume twenty-two — Scotland and Ireland.
 *
 * Ten Scottish and nine Irish recipes were already here — haggis, Scotch broth,
 * cranachan, colcannon, boxty, soda bread. This volume takes the rest of the
 * baker's and butcher's shelf: the Scotch pie, the Forfar bridie, the Lorne
 * sausage, the Selkirk bannock, black bun and clootie dumpling, and from
 * Ireland the soda farl, the Ulster fry and the Guinness cake. Potato farls
 * were left out, being tattie scones by another name.
 */

module.exports = {
  'irish-soda-farls': {
    d: 'Soda bread dough patted flat, cut into quarters and cooked on a dry griddle until golden. The Ulster breakfast bread, in twenty-five minutes.',
    meta: 'Irish soda farls: soda bread dough patted into a round, cut into four and cooked on a dry griddle until golden. Fast, no yeast, ideal with a fry-up.',
    kw: ['soda farls', 'irish soda farls', 'soda farls recipe', 'ulster fry soda bread', 'griddle soda bread'],
    why: 'A farl is soda bread without the oven: the same buttermilk-and-bicarbonate dough, patted flat rather than shaped into a loaf, cut into four quarters, the word farl meaning a fourth part, and cooked on a dry griddle so that it puffs, browns and cooks through in minutes. The acid in the buttermilk and the alkali in the bicarbonate react as soon as they meet, so the dough must be mixed and cooked quickly, before the fizz has gone. Handle it lightly, because kneading toughens it.',
    ing: [
      '250 g plain flour, plus extra for dusting',
      '0.5 tsp bicarbonate of soda',
      '0.5 tsp fine sea salt',
      '200 ml buttermilk',
      'Butter, to serve'
    ],
    st: [
      'Heat a dry griddle or heavy frying pan over medium heat.',
      'Sift the flour, bicarbonate and salt into a bowl and make a well in the centre.',
      'Pour in most of the buttermilk and mix quickly with your hand into a soft, slightly sticky dough, adding the rest only if it is needed.',
      'Turn onto a floured surface and pat gently into a round about 1.5 cm thick. Do not knead.',
      'Cut the round into four quarters.',
      'Cook the farls on the dry griddle for 6 to 7 minutes a side, until golden brown and cooked through, and hollow-sounding when tapped.',
      'Split and butter while warm, or fry them in bacon fat as part of a breakfast.'
    ],
    tips: [
      'Work quickly. The rise begins when the buttermilk meets the bicarbonate.',
      'Do not knead. It makes the farls tough.',
      'Use a dry griddle at medium heat so they cook through without burning.'
    ],
    pair: ['A fry-up', 'Butter and jam', 'Smoked salmon'],
    store: 'Best fresh. Keep wrapped 1 day and fry in butter to revive. Freeze for 2 months.',
    nut: [217, 8, 44, 1, 2, 3, 500]
  },

  'guinness-cake': {
    d: 'A dark, moist chocolate cake made with a pint of Guinness, topped with cream cheese frosting to look like the head on the pint. An hour and a half.',
    meta: 'Guinness cake: a dark, moist chocolate stout cake made with a can of Guinness, topped with a thick cream cheese frosting like the head on a pint.',
    kw: ['guinness cake', 'guinness chocolate cake', 'chocolate stout cake', 'irish guinness cake with cream cheese frosting', 'guinness cake recipe'],
    why: 'Stout and chocolate belong together because both are bitter and roasted, and the Guinness gives the cake a deep, malty richness rather than a taste of beer. It is melted into the butter and cocoa, so the cocoa dissolves and its flavour blooms, and the bicarbonate reacts with the acidity of the stout and the soured cream to make the cake rise and stay tender and moist. The cake is baked in a tin and cooled completely before it is topped with cream cheese frosting, and the white frosting is meant to look like the head on a pint.',
    ing: [
      '# For the cake',
      '250 ml Guinness',
      '250 g unsalted butter',
      '75 g unsweetened cocoa powder',
      '400 g caster sugar',
      '150 g soured cream',
      '2 large eggs',
      '1 tbsp vanilla extract',
      '275 g plain flour',
      '2.5 tsp bicarbonate of soda',
      '# For the topping',
      '300 g full-fat cream cheese',
      '150 g icing sugar, sifted',
      '125 ml double cream'
    ],
    st: [
      'Heat the oven to 180°C / 350°F and grease and line a 23 cm springform tin.',
      'Heat the Guinness and butter in a large saucepan over medium heat until the butter has melted. Take off the heat and whisk in the cocoa and sugar.',
      'Whisk the soured cream, eggs and vanilla together and whisk into the chocolate mixture.',
      'Whisk in the flour and bicarbonate until smooth. The batter will be thin.',
      'Pour into the tin and bake 45 to 50 minutes, until risen and a skewer comes out clean.',
      'Cool completely in the tin, about 1 hour, then turn out onto a plate.',
      'Beat the cream cheese and icing sugar until smooth, then whip in the cream until thick and spreadable.',
      'Cover the top of the cake with the topping, mounding it to look like the head on a pint.'
    ],
    tips: [
      'Do not worry that the batter is thin. It bakes into a moist, tender cake.',
      'Cool the cake completely before the topping goes on.',
      'Use full-fat cream cheese. Low-fat is too soft to hold its shape.'
    ],
    pair: ['A cup of tea', 'A pint of Guinness', 'Vanilla ice cream'],
    store: 'Refrigerate up to 5 days and bring to room temperature. Freeze un-iced for 3 months.',
    nut: [558, 6, 66, 30, 2, 50, 300],
    rest: [60, 'cooling the cake']
  },

  'selkirk-bannock': {
    d: 'A big round Borders fruit loaf of buttery yeast dough and sultanas, glazed and eaten sliced with butter. Just over three hours with rising.',
    meta: 'Selkirk bannock: a large, round, rich Scottish Borders fruit loaf of buttery yeast dough and sultanas, baked golden and glazed. Slice and butter.',
    kw: ['selkirk bannock', 'selkirk bannock recipe', 'scottish fruit bannock', 'borders sultana bread', 'traditional selkirk bannock'],
    why: 'A Selkirk bannock is a rich yeast bread, a kind of Scottish tea loaf, and the richness is in the butter and sugar and the sultanas, which are kneaded in at the end when the gluten is developed so they do not tear it. Like all enriched doughs it rises slowly and takes two risings to develop its structure and its light crumb, and the sugar glaze applied as it comes hot from the oven gives it a glossy, slightly sticky crust. Queen Victoria is said to have liked it, and the story is used to sell it to this day.',
    ing: [
      '450 g strong white bread flour',
      '7 g instant yeast',
      '1 tsp fine sea salt',
      '50 g caster sugar',
      '100 g unsalted butter, softened',
      '250 ml warm whole milk',
      '200 g sultanas',
      '1 egg, beaten, for glazing',
      '2 tbsp caster sugar, dissolved in 2 tbsp hot water, to glaze'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar in a large bowl, rub in the butter and add the milk. Mix to a soft dough.',
      'Knead 10 minutes until smooth and elastic, then knead in the sultanas.',
      'Cover and leave to rise for 1 hour, until doubled.',
      'Shape into a round, flatten slightly and set on a lined tray. Cover and prove for 45 minutes, until puffy.',
      'Heat the oven to 190°C / 375°F.',
      'Brush the loaf with the beaten egg and bake 30 to 35 minutes, until deep golden brown and hollow-sounding underneath.',
      'Brush the hot loaf with the sugar glaze and cool on a wire rack.'
    ],
    tips: [
      'Knead the sultanas in at the end so they do not tear the dough.',
      'Prove it until puffy before baking. Underproved loaves are dense.',
      'Glaze it hot for the traditional sticky, glossy crust.'
    ],
    pair: ['Butter', 'Mature cheddar', 'A pot of tea'],
    store: 'Keep wrapped 3 days and toast slices. Freeze for 2 months.',
    nut: [284, 7, 46, 8, 2, 20, 210],
    rest: [105, 'rising and proving the dough']
  },

  'black-bun': {
    d: 'A dense, spiced Hogmanay fruit cake soaked in whisky and baked inside a case of pastry. Make it ahead. Three and a half hours.',
    meta: 'Black bun: the dark, dense, spiced Scottish Hogmanay fruit cake soaked in whisky and baked in a buttery pastry case. Best made weeks ahead.',
    kw: ['black bun', 'black bun recipe', 'scottish black bun', 'hogmanay black bun', 'scottish fruit cake in pastry'],
    why: 'It is a fruit cake wrapped in pastry, and the pastry is what makes it a black bun and not just a Christmas cake: the cake inside is a very dark, dense, heavily spiced mixture, with more fruit than batter, that would dry out and burn in a naked bake, while the pastry case protects it through the long, slow baking and adds a buttery crust. It is baked at a low heat for two and a half hours so it cooks through, and, like other fruit cakes, it needs weeks to mature, which is why it is made before Christmas for Hogmanay.',
    ing: [
      '# For the pastry',
      '350 g plain flour',
      '1 tsp fine sea salt',
      '175 g cold unsalted butter, cubed',
      '6 to 8 tbsp cold water',
      '1 egg, beaten, for glazing',
      '# For the filling',
      '225 g plain flour',
      '100 g light muscovado sugar',
      '450 g raisins',
      '450 g currants',
      '100 g blanched almonds, chopped',
      '100 g candied mixed peel',
      '1 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1 tsp ground allspice',
      '1 tsp bicarbonate of soda',
      '4 tbsp whisky',
      '1 large egg',
      '100 ml buttermilk'
    ],
    st: [
      'For the pastry, rub the butter into the flour and salt and bind with the water into a firm dough. Wrap and chill 30 minutes.',
      'Heat the oven to 160°C / 320°F. Grease and line a 20 cm deep round cake tin.',
      'Roll out two thirds of the pastry and line the tin, leaving some overhang.',
      'Mix the flour, sugar, raisins, currants, almonds, peel, spices and bicarbonate in a large bowl. Stir in the whisky, egg and enough buttermilk to make a stiff, sticky mixture.',
      'Pack the filling firmly into the pastry case, leaving 1 cm at the top.',
      'Roll out the remaining pastry, brush the rim of the case with egg, lay the lid on top and crimp firmly to seal. Prick all over with a fork and brush with the beaten egg.',
      'Bake 2 hours 15 minutes to 2 hours 30 minutes, covering the top with foil if it browns too much, until a skewer inserted through the lid comes out clean.',
      'Cool completely in the tin, then wrap in baking paper and foil.'
    ],
    tips: [
      'Pack the filling in firmly so it slices cleanly.',
      'Cover the top with foil if the pastry browns before the fruit cooks.',
      'Make it a few weeks ahead. It matures and improves.'
    ],
    pair: ['A dram of whisky', 'Mature cheddar', 'A cup of tea'],
    store: 'Wrap in paper and foil and keep in a tin up to 1 month. Freeze for 3 months.',
    nut: [382, 6, 58, 14, 4, 40, 140]
  },

  'forfar-bridie': {
    d: 'A folded, crimped pastry semicircle filled with chopped steak and onion and baked until golden. The Angus pasty, in seventy minutes.',
    meta: 'Forfar bridie: a folded, crimped pastry semicircle filled with chopped steak, onion and beef suet, baked until golden. The Angus pasty, with no potato.',
    kw: ['forfar bridie', 'forfar bridie recipe', 'scottish bridie', 'steak bridie pastry', 'traditional forfar bridie'],
    why: 'A Forfar bridie is like a Cornish pasty with the vegetables taken out: the filling is steak, onion and a little suet, and nothing else, so the meat must be good, chopped rather than minced, and cut small so it cooks through in the short bake. The suet is what keeps it moist, melting into the meat and making a little gravy inside the pastry, and the pastry is a rough puff or a sturdy shortcrust, folded into a semicircle and crimped along the curved edge with a small vent.',
    ing: [
      '# For the pastry',
      '350 g plain flour',
      '175 g cold unsalted butter, cubed',
      '0.5 tsp fine sea salt',
      '5 to 6 tbsp ice water',
      '1 egg, beaten, for glazing',
      '# For the filling',
      '450 g rump or sirloin steak, cut into 5 mm dice',
      '1 onion, finely chopped',
      '50 g beef suet',
      '2 tbsp water',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Rub the butter into the flour and salt until it looks like breadcrumbs, then stir in the water until the dough holds. Wrap and chill 30 minutes.',
      'Heat the oven to 200°C / 400°F and line a tray with baking paper.',
      'Mix the steak, onion, suet, water, salt and pepper together in a bowl.',
      'Roll the pastry out to 4 mm thick and cut four rounds about 20 cm across.',
      'Put a quarter of the filling on one half of each round, leaving a 2 cm border. Brush the border with egg, fold the other half over, and crimp firmly along the edge.',
      'Set on the tray, cut a small steam hole in the top of each and brush with the egg.',
      'Bake 20 minutes, then lower the oven to 180°C / 350°F and bake 20 minutes more, until deep golden.',
      'Cool 10 minutes and eat hot or cold.'
    ],
    tips: [
      'Dice the steak small so it cooks through in the short bake.',
      'The suet keeps it moist. Do not leave it out.',
      'Crimp the edge firmly so the juices stay inside.'
    ],
    pair: ['Baked beans', 'Brown sauce', 'A pot of tea'],
    store: 'Refrigerate up to 3 days and eat cold or reheat at 180°C for 15 minutes. Freeze baked for 2 months.',
    nut: [648, 30, 42, 40, 3, 3, 800]
  },

  'scotch-pie': {
    d: 'A small, hand-raised hot-water-crust pie of peppery mutton or lamb, with a hollow top for the gravy. The football-terrace classic, in an hour and a half.',
    meta: 'Scotch pie: a small hand-raised hot-water-crust pie of peppery, mace-scented lamb with a hollow top for gravy or beans. The Scottish bakery classic.',
    kw: ['scotch pie', 'scotch pie recipe', 'scottish mutton pie', 'hot water crust lamb pie', 'football scotch pie'],
    why: 'The pastry is a hot water crust, made by melting fat into boiling water and stirring it into flour, which makes a dough that is pliable when warm and sets rigid when cool, so that it can be moulded round a jar into a free-standing case. That is why a Scotch pie has straight, sturdy sides and a top that sits slightly below the rim, a hollow to be filled with gravy, beans or mash. The filling is minced lamb or mutton seasoned heavily with black pepper and mace and cooked only in the pie itself.',
    ing: [
      '# For the pastry',
      '350 g plain flour',
      '1 tsp fine sea salt',
      '100 g lard',
      '150 ml water',
      '1 egg, beaten, for glazing',
      '# For the filling',
      '450 g lamb or mutton mince',
      '75 ml lamb or beef stock',
      '1 tsp fine sea salt',
      '1 tsp black pepper',
      '0.5 tsp ground mace'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Mix the meat with the stock, salt, pepper and mace and set aside.',
      'Sift the flour and salt into a bowl and make a well. Bring the lard and water to a boil in a small pan, pour into the flour and mix to a smooth, warm dough.',
      'Cut off a quarter of the dough for the lids and keep it warm, covered. Divide the rest into 6.',
      'Press each piece over the base of a jam jar or small ramekin to mould a case with straight sides, about 7 cm across, 4 cm deep. Slide the case off the mould and stand it on a tray.',
      'Pack a sixth of the filling into each case, level with the top.',
      'Roll out the lid dough and cut six lids, brush the edges of the cases with egg and press the lids on, pushing them slightly below the rim to make a hollow. Crimp the edges and cut a small hole in each lid.',
      'Bake 35 to 40 minutes, until deep golden.',
      'Cool 10 minutes and serve hot, filled with gravy, beans or mash.'
    ],
    tips: [
      'Work the dough while it is warm. It sets hard as it cools.',
      'Season the meat heavily. It is only lightly cooked in the pie.',
      'Press the lid slightly below the rim to make the hollow for gravy.'
    ],
    pair: ['Baked beans', 'Mashed potato', 'A pint of heavy'],
    store: 'Refrigerate up to 3 days and reheat at 180°C for 15 minutes. Freeze baked for 2 months.',
    nut: [514, 22, 30, 34, 2, 1, 800]
  },

  'clootie-dumpling': {
    d: 'A spiced fruit pudding boiled in a floured cloth, then dried in the oven to a dark, chewy skin. Just over three and a half hours.',
    meta: 'Clootie dumpling: a rich, spiced Scottish fruit pudding boiled in a floured cloth for three hours, then dried in the oven for a dark, chewy skin.',
    kw: ['clootie dumpling', 'clootie dumpling recipe', 'scottish clootie dumpling', 'boiled fruit pudding in a cloth', 'traditional clootie dumpling'],
    why: 'A clootie is a cloth, and the pudding is boiled in one, which is what gives it its skin: the cloth is scalded and floured so that a paste of flour forms on the surface, and after boiling the dumpling is dried in a low oven until that skin turns dark, dry and slightly chewy. It is a rich, dark, spiced fruit mixture, held together by suet and sweetened with treacle and syrup, and it is served hot with custard and cold, fried, at breakfast the next day. The cloth must be large enough to allow for expansion.',
    ing: [
      '225 g self-raising flour, plus extra for the cloth',
      '100 g shredded suet, or vegetable suet',
      '100 g caster sugar',
      '100 g sultanas',
      '100 g currants',
      '1 tsp ground cinnamon',
      '1 tsp ground ginger',
      '1 tsp mixed spice',
      '1 tsp bicarbonate of soda',
      '1 tbsp black treacle',
      '1 tbsp golden syrup',
      '1 large egg',
      '150 ml whole milk'
    ],
    st: [
      'Mix the flour, suet, sugar, sultanas, currants, spices and bicarbonate in a large bowl.',
      'Warm the treacle and syrup with the milk and whisk in the egg. Stir into the dry mixture to make a soft, dropping consistency.',
      'Dip a large clean cloth, about 60 cm square, into a pan of boiling water, wring it out and lay it on the counter. Dust it generously with flour.',
      'Spoon the mixture into the centre of the cloth, gather up the corners and tie with string, leaving room for the pudding to expand.',
      'Lower the bundle into a large pan of boiling water on an upturned saucer, so it does not touch the base. Cover and boil gently for 3 hours, topping up with boiling water as needed.',
      'Lift out, dip briefly in cold water so the cloth releases, and unwrap.',
      'Heat the oven to 160°C / 320°F. Set the dumpling on a tray and dry in the oven for 10 to 15 minutes, until the skin turns dark and dry.',
      'Serve in thick slices with custard.'
    ],
    tips: [
      'Flour the cloth generously. The flour makes the skin.',
      'Tie loosely. The pudding swells as it cooks.',
      'Keep the water at a gentle boil and top it up with boiling water, never cold.'
    ],
    pair: ['Homemade custard', 'Cream', 'A cup of tea'],
    store: 'Keep wrapped in the refrigerator up to 1 week. Slice and fry in butter for breakfast. Freeze for 3 months.',
    nut: [332, 4, 52, 12, 2, 32, 190]
  },

  'lorne-sausage': {
    d: 'Seasoned beef and pork pressed into a loaf tin, chilled and cut into square slices for frying. The Scottish breakfast staple, with two hours of chilling.',
    meta: 'Lorne sausage: seasoned beef and pork pressed into a tin, chilled firm and cut into square slices, then fried. The Scottish square sausage for a morning roll.',
    kw: ['lorne sausage', 'lorne sausage recipe', 'square sausage', 'scottish square sausage slices', 'lorne sausage roll'],
    why: 'A Lorne sausage is sausage meat in slab form: the mixture is a fine, well-seasoned blend of beef and pork bound with breadcrumbs, packed into a tin and chilled until solid, then sliced into squares that fit a bread roll. It must be packed firmly to remove air and chilled until stiff, or it will not slice, and it is fried, not baked, so that the surface browns in the fat and the inside stays juicy. The seasoning is simple, salt, pepper, nutmeg and coriander, so the meat itself carries the flavour.',
    ing: [
      '300 g beef mince, not too lean',
      '300 g pork mince',
      '80 g fine breadcrumbs',
      '75 ml cold water',
      '1.5 tsp fine sea salt',
      '1 tsp black pepper',
      '0.5 tsp freshly grated nutmeg',
      '0.5 tsp ground coriander',
      '1 tbsp vegetable oil, for frying'
    ],
    st: [
      'Put the beef, pork, breadcrumbs, water, salt, pepper, nutmeg and coriander in a large bowl and mix thoroughly with your hands for 2 minutes, until sticky and well combined.',
      'Line a 900 g loaf tin with cling film, leaving an overhang.',
      'Pack the mixture very firmly into the tin, pressing out any air pockets, and smooth the top. Fold the cling film over.',
      'Chill for at least 2 hours until completely firm.',
      'Lift out the block and slice into 1.5 cm squares.',
      'Heat the oil in a frying pan over medium heat and fry the slices 5 to 6 minutes a side, until deep brown and cooked through.',
      'Serve in a soft roll or as part of a fry-up.'
    ],
    tips: [
      'Pack the mixture firmly so there are no air pockets.',
      'Chill until stiff. A soft block will not slice.',
      'Fry over a medium heat so it browns and cooks through.'
    ],
    pair: ['A soft morning roll', 'Fried eggs', 'Brown sauce'],
    store: 'Refrigerate the uncooked block up to 3 days, or slice and freeze the raw slices for 3 months and fry from frozen.',
    nut: [300, 22, 8, 20, 0, 0, 900],
    rest: [120, 'chilling until firm']
  },

  'ulster-fry': {
    d: 'The Northern Irish fry-up: sausages, bacon, eggs, black pudding, tomatoes and fried soda farls, all on one plate. Forty-five minutes.',
    meta: 'The Ulster fry: sausages, bacon, fried eggs, black pudding, mushrooms and tomatoes served with fried soda farls. The Northern Irish full breakfast.',
    kw: ['ulster fry', 'ulster fry recipe', 'northern irish fry up', 'ulster fry with soda farls', 'irish breakfast fry'],
    why: 'The Ulster fry is a full fry-up with its own bread: soda farls, and potato bread or pancakes, fried in the fat of the pan alongside everything else. The order matters, because everything has to come to the plate hot at once. The sausages, which take longest, go on first, the black pudding and bacon after them, and the farls, eggs and tomatoes last, cooked in the fat that has rendered from the rest. There is no baked beans on an Ulster fry, and cooking everything in one pan is what gives it its flavour.',
    ing: [
      '4 pork sausages',
      '4 rashers back bacon',
      '4 slices black pudding',
      '2 soda farls, halved horizontally',
      '2 tomatoes, halved',
      '150 g button mushrooms',
      '2 large eggs',
      '1 tbsp vegetable oil, plus more as needed',
      'Salt and pepper, to taste',
      'Brown sauce, to serve'
    ],
    st: [
      'Heat the oil in a large heavy frying pan over medium heat and fry the sausages 12 to 15 minutes, turning, until golden and cooked through. Keep them warm in a low oven.',
      'Add the bacon and black pudding to the pan and fry 3 to 4 minutes a side until the bacon is crisp and the pudding is crusty. Keep warm.',
      'Add the tomatoes cut side down and the mushrooms and fry 4 minutes, turning once, until softened and browned. Keep warm.',
      'Fry the halved soda farls in the fat that remains for 2 minutes a side, until golden and crisp.',
      'Push everything to the side, add a little more oil if needed and fry the eggs to your liking, 2 to 3 minutes.',
      'Divide everything between two hot plates, season and serve with brown sauce and hot tea.'
    ],
    tips: [
      'Start the sausages first. They take longest.',
      'Fry the soda farls in the pan fat, for the flavour.',
      'Warm the plates so everything stays hot.'
    ],
    pair: ['A pot of tea', 'Brown sauce', 'Fresh orange juice'],
    store: 'Best eaten immediately. Refrigerate leftover sausages and bacon up to 3 days.',
    nut: [964, 48, 58, 60, 6, 8, 2600]
  }
};
