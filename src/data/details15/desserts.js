'use strict';

/**
 * Volume fifteen — French desserts and pâtisserie.
 *
 * Twenty-two, running from the gâteau au yaourt a French child learns to make
 * by measuring everything in the empty yogurt pot, up to the opéra, which has
 * six components and no forgiving stages. The tarts and the choux family are
 * the two backbones; between them they account for most of what sits in a
 * pâtisserie window.
 */

module.exports = {
  'tarte-au-citron': {
    d: 'A thin pastry case filled with lemon curd set with butter and eggs. Sharp enough to make you blink, which is the whole point of it.',
    meta: 'A blind-baked pastry case filled with a sharp lemon cream set with butter and eggs, baked only until it just wobbles.',
    kw: ['tarte au citron', 'lemon tart', 'tarte au citron recipe', 'french lemon tart', 'lemon curd tart'],
    why: 'The filling is baked at a low temperature and pulled while the centre still wobbles, because it sets considerably as it cools — a tart baked until firm in the oven will be rubbery and weeping by the time it is cut. The pastry case must also be sealed with beaten egg after blind baking and returned to the oven for two minutes, which varnishes the surface and stops the wet filling soaking into it.',
    ing: [
      '# For the pastry',
      '250 g plain flour',
      '125 g cold butter, diced',
      '80 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '0.25 tsp fine sea salt',
      '# To seal',
      '1 egg, beaten',
      '# For the filling',
      '5 eggs',
      '180 g caster sugar',
      '200 ml lemon juice, about 6 lemons',
      'Zest of 3 lemons',
      '150 g butter, diced',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Rub the butter into the flour, icing sugar and salt to fine crumbs, then bring together with the yolk and water. Wrap and chill 60 minutes.',
      'Roll thin and line a 24 cm tart tin, leaving the excess hanging over the edge. Chill 30 minutes.',
      'Blind bake at 180°C / 350°F with beans for 20 minutes, remove the beans and bake 10 minutes more until sandy and pale gold.',
      'Brush the inside with beaten egg and return to the oven for 2 minutes to varnish it. Trim the overhang with a knife.',
      'Whisk the eggs, sugar, lemon juice and zest in a bowl over simmering water for 10 minutes, until thickened to a custard.',
      'Take off the heat and whisk in the butter a few pieces at a time until glossy. Strain into the case.',
      'Bake at 150°C / 300°F for 20 minutes, until set at the edges and still wobbling in the middle. Cool completely, then dust with icing sugar.'
    ],
    rest: [90, 'chilling the pastry'],
    tips: [
      'Seal the case with egg wash. It is what keeps the base crisp.',
      'Pull it while the middle wobbles. It sets as it cools.',
      'Trim the overhang after baking, not before.'
    ],
    pair: ['Crème fraîche', 'Espresso', 'Fresh raspberries'],
    store: 'Refrigerated for 3 days. Do not freeze — the filling weeps.',
    nut: [445, 7, 48, 25, 1, 30, 210]
  },

  'tarte-aux-pommes': {
    d: 'Apple slices fanned over an apple purée in a thin pastry case, glazed with apricot. The purée underneath is what most versions leave out.',
    meta: 'Thin apple slices fanned over a compote base in a pastry case, baked until the edges catch and glazed with apricot.',
    kw: ['tarte aux pommes', 'french apple tart', 'tarte aux pommes recipe', 'apple tart fanned', 'classic apple tart'],
    why: 'Two kinds of apple do two jobs. A cooking apple collapses into the compote that lines the base and keeps everything moist; a firm eating apple holds its shape in the fanned slices on top. Using one variety for both gives you either a dry tart or a soupy one. The apricot glaze is not decoration either — it seals the cut surfaces and stops them browning within the hour.',
    ing: [
      '# For the pastry',
      '250 g plain flour',
      '125 g cold butter, diced',
      '60 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '# For the compote',
      '4 Bramley or other cooking apples, peeled and chopped',
      '60 g caster sugar',
      '30 g butter',
      '1 tsp vanilla extract',
      '2 tbsp Calvados',
      '# For the top',
      '4 firm eating apples, such as Braeburn',
      '40 g butter, melted',
      '2 tbsp caster sugar',
      '# To glaze',
      '4 tbsp apricot jam',
      '1 tbsp water'
    ],
    st: [
      'Make the pastry as for the lemon tart, chill 60 minutes, line a 26 cm tin and blind bake at 180°C for 25 minutes until pale gold.',
      'Cook the chopped cooking apples with the sugar, butter and vanilla over medium heat for 15 minutes, until completely collapsed. Beat smooth and stir in the Calvados. Cool.',
      'Spread the compote over the base of the tart case in an even layer about 1.5 cm deep.',
      'Peel, halve and core the eating apples and slice them as thinly as you can.',
      'Fan the slices over the compote in overlapping concentric circles, working from the outside in and packing them tightly — they shrink.',
      'Brush with the melted butter, scatter with the sugar, and bake at 190°C / 375°F for 35 minutes, until the edges of the slices have caught and browned.',
      'Warm the jam with the water, sieve it, and brush it over the hot tart. Serve warm or at room temperature.'
    ],
    rest: [60, 'chilling the pastry'],
    tips: [
      'Two apple varieties: one to collapse, one to hold.',
      'Pack the slices tightly — they shrink considerably.',
      'Glaze while hot so it soaks in rather than sitting on top.'
    ],
    pair: ['Crème fraîche', 'Calvados', 'Vanilla ice cream'],
    store: 'Two days at room temperature. Refresh at 180°C for 8 minutes. It does not freeze.',
    nut: [425, 5, 62, 18, 4, 36, 180]
  },

  'tarte-normande': {
    d: 'Apples baked into an almond custard in a pastry case, with Calvados. Wetter and richer than a plain apple tart and considerably easier.',
    meta: 'Apples baked into an almond and Calvados custard in a pastry case, until puffed, set and deeply browned on top.',
    kw: ['tarte normande', 'norman apple tart', 'tarte normande recipe', 'apple almond custard tart', 'calvados tart'],
    why: 'The custard is poured over raw apples and they cook in it, which means they have to be cut thick — 1 cm wedges, not slices — or they disintegrate and turn the filling to mush. Ground almonds in the custard absorb the liquid the apples release, which is what stops the tart weeping. It is baked hotter than a plain custard tart because the almond protects it from curdling.',
    ing: [
      '# For the pastry',
      '250 g plain flour',
      '125 g cold butter, diced',
      '60 g icing sugar',
      '1 egg yolk',
      '2 tbsp cold water',
      '# For the filling',
      '4 firm eating apples, peeled and cut into 1 cm wedges',
      '2 eggs',
      '100 g caster sugar',
      '100 g ground almonds',
      '200 ml double cream',
      '3 tbsp Calvados',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      '# To finish',
      '2 tbsp flaked almonds',
      '1 tbsp caster sugar'
    ],
    st: [
      'Make the pastry and chill it 60 minutes, then line a 24 cm tin and blind bake at 180°C for 20 minutes.',
      'Arrange the apple wedges over the base in a single tight layer.',
      'Whisk the eggs with the sugar until pale, then beat in the ground almonds.',
      'Add the cream, Calvados, vanilla and salt and whisk to a smooth batter.',
      'Pour it over the apples — it should come just to the top of them.',
      'Scatter with the flaked almonds and the extra sugar.',
      'Bake at 190°C / 375°F for 45 minutes, until puffed, deep gold and set with only the faintest wobble. Cool at least 30 minutes before cutting.'
    ],
    rest: [90, 'chilling the pastry'],
    tips: [
      'Thick apple wedges. Thin slices dissolve into the custard.',
      'Ground almonds absorb the apple juice — do not reduce them.',
      'Cool before cutting or it runs.'
    ],
    pair: ['Crème fraîche', 'Calvados', 'Coffee'],
    store: 'Refrigerated for 3 days and good cold. It freezes for 2 months.',
    nut: [545, 10, 48, 34, 4, 32, 220]
  },

  'flan-parisien': {
    d: 'A deep custard tart with a thick, wobbling set and a scorched top. Sold by the slab in every French bakery and almost unknown elsewhere.',
    meta: 'A deep pastry case filled with thick vanilla custard, baked hot so the surface scorches while the inside stays soft.',
    kw: ['flan parisien', 'french custard tart', 'flan patissier', 'flan parisien recipe', 'parisian flan'],
    why: 'The custard is cooked on the hob to a thick pastry cream before it goes into the case, not poured in raw — that is what gives the flan its dense, sliceable set rather than a loose baked custard. The oven is then hot, 200°C, purely to scorch the surface: dark brown almost to black in patches is correct and is what a French bakery aims for. A pale flan is an underbaked one.',
    ing: [
      '# For the pastry',
      '250 g plain flour',
      '125 g cold butter, diced',
      '50 g caster sugar',
      '1 egg',
      '0.25 tsp fine sea salt',
      '# For the custard',
      '1 litre whole milk',
      '200 ml double cream',
      '200 g caster sugar',
      '110 g cornflour',
      '6 egg yolks',
      '2 vanilla pods, split and scraped',
      '0.5 tsp fine sea salt',
      '50 g butter'
    ],
    st: [
      'Rub the butter into the flour, sugar and salt, bring together with the egg, and chill 60 minutes.',
      'Roll and line a deep 22 cm cake tin, pressing the pastry up the sides. Chill while you make the custard.',
      'Heat the milk, cream and vanilla pods to steaming. Whisk the yolks, sugar and cornflour to a smooth paste.',
      'Pour a little hot milk onto the yolks, whisk, then return everything to the pan.',
      'Cook over medium heat, whisking constantly, until it thickens and then bubbles thickly for a full minute. It should be very stiff.',
      'Beat in the butter and salt, then pour the hot custard into the chilled case and smooth the top.',
      'Bake at 200°C / 400°F for 50 minutes, until the top is deeply browned and blistered almost black in places. Cool completely, then chill 240 minutes before cutting.'
    ],
    rest: [300, 'chilling the pastry and the finished flan'],
    tips: [
      'Cook the custard thick on the hob first. That is the set.',
      'A dark, scorched top. Pale means underbaked.',
      'Chill it properly — four hours minimum — or it will not slice.'
    ],
    pair: ['Espresso', 'Nothing else', 'A second slice'],
    store: 'Refrigerated for 3 days. It does not freeze.',
    nut: [485, 10, 62, 22, 1, 34, 290]
  },

  'far-breton': {
    d: 'A dense batter pudding with prunes, somewhere between a clafoutis and a flan. Brittany, and traditionally made with prunes soaked in tea.',
    meta: 'A dense Breton batter pudding baked with prunes soaked in tea and rum, set firm with a browned skin on top.',
    kw: ['far breton', 'breton prune pudding', 'far breton recipe', 'french prune flan', 'brittany dessert'],
    why: 'The prunes are soaked in hot tea rather than water, which sounds like an affectation and is not — tannin cuts the sweetness of the prune and stops the whole pudding being cloying. Rest the batter for an hour as well: it allows the flour to hydrate and gives the far its characteristic dense, almost rubbery set rather than a light spongy one, which would be a clafoutis.',
    ing: [
      '250 g pitted prunes',
      '300 ml hot strong black tea',
      '3 tbsp dark rum',
      '# For the batter',
      '150 g plain flour',
      '150 g caster sugar',
      '4 eggs',
      '750 ml whole milk',
      '1 tsp vanilla extract',
      '0.5 tsp fine sea salt',
      '50 g butter, melted',
      '# For the dish',
      '20 g butter',
      '1 tbsp caster sugar'
    ],
    st: [
      'Soak the prunes in the hot tea with the rum for 60 minutes, then drain them.',
      'Whisk the flour, sugar and salt, then beat in the eggs one at a time to a smooth thick paste.',
      'Add the milk gradually, whisking, followed by the vanilla and melted butter. The batter will be very thin.',
      'Rest the batter 60 minutes at room temperature.',
      'Heat the oven to 200°C / 400°F. Butter a 25 cm baking dish heavily and dust it with the sugar.',
      'Scatter the drained prunes over the base and pour the batter over them.',
      'Bake 45 minutes, until puffed, deeply browned and set with a slight wobble. It sinks as it cools, which is correct. Serve warm or cold.'
    ],
    rest: [120, 'soaking the prunes and resting the batter'],
    tips: [
      'Tea, not water, for the prunes. The tannin cuts the sweetness.',
      'Rest the batter an hour for the dense set.',
      'It sinks as it cools. That is not a failure.'
    ],
    pair: ['Salted butter caramel', 'Breton cider', 'Coffee'],
    store: 'Three days at room temperature, covered. It does not freeze well.',
    nut: [385, 9, 58, 13, 3, 38, 220]
  },

  'kouign-amann': {
    d: 'Laminated dough with sugar folded into the layers, so it caramelises against the tin and sets into glass. Breton for butter cake, which undersells it.',
    meta: 'Laminated dough with sugar folded into the butter layers, baked so the sugar caramelises against the tin into a glass shell.',
    kw: ['kouign amann', 'breton butter cake', 'kouign amann recipe', 'caramelised laminated pastry', 'brittany pastry'],
    why: 'Sugar is folded in with the butter during lamination, not sprinkled on, and it melts during baking and runs to the bottom of the tin where it caramelises into a hard shell. That means the tins must be well buttered and heavily sugared, and the pastries turned out within a minute of leaving the oven — leave them any longer and the caramel sets like cement and they will never come out. Work fast and keep the dough cold.',
    ing: [
      '# For the dough',
      '400 g strong white flour',
      '7 g fast-action dried yeast',
      '8 g fine sea salt',
      '250 ml cold water',
      '# For the lamination',
      '250 g cold butter, in a block',
      '200 g caster sugar',
      '# For the tins',
      '40 g butter, softened',
      '60 g caster sugar',
      '# To finish',
      '2 tbsp caster sugar'
    ],
    st: [
      'Mix the flour, yeast, salt and water into a dough and knead 6 minutes. Wrap and refrigerate 60 minutes.',
      'Beat the cold butter into a 16 cm square between paper and keep it cold.',
      'Roll the dough to 32 x 16 cm, lay the butter on one half, fold over and seal.',
      'Roll to 45 x 16 cm, scatter a third of the 200 g sugar over, and fold in three. Refrigerate 30 minutes. Repeat twice more, adding a third of the sugar each time.',
      'Butter and heavily sugar a 12-hole muffin tin.',
      'Roll the dough to 1 cm thick, cut into 12 squares, and press each into a hole with the corners pointing up.',
      'Prove 60 minutes, sprinkle with the last 2 tbsp sugar, and bake at 200°C / 400°F for 40 minutes until deep mahogany. Turn out within one minute of leaving the oven.'
    ],
    rest: [90, 'chilling between turns and proving'],
    tips: [
      'Sugar folded into the layers, not sprinkled on top.',
      'Turn them out within a minute or the caramel welds them in.',
      'Keep the dough cold between every turn.'
    ],
    pair: ['Coffee', 'Salted butter', 'Cider'],
    store: 'Best within hours. A day in a tin; refresh at 180°C for 5 minutes. They freeze baked for a month.',
    nut: [425, 5, 52, 22, 2, 28, 320]
  },

  'paris-brest': {
    d: 'A ring of choux split and filled with praline mousseline, made for a bicycle race and shaped like a wheel. The praline is the whole dish.',
    meta: 'A ring of choux pastry split and filled with hazelnut praline mousseline cream, topped with flaked almonds.',
    kw: ['paris brest', 'praline choux ring', 'paris brest recipe', 'french choux dessert', 'hazelnut praline cream'],
    why: 'Mousseline is pastry cream beaten with butter, and it splits if the two are at different temperatures — both must be at exactly room temperature before they meet, and if it does curdle, warming a third of the mixture gently and beating it back in will bring it round. The choux ring is baked until genuinely dry and dark; a pale ring collapses under the weight of the filling within minutes of being cut.',
    ing: [
      '# For the choux',
      '125 ml water',
      '125 ml whole milk',
      '110 g butter',
      '1 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '150 g plain flour',
      '4 eggs',
      '# To finish the ring',
      '1 egg, beaten',
      '50 g flaked almonds',
      '# For the praline',
      '150 g hazelnuts',
      '150 g caster sugar',
      '# For the mousseline',
      '500 ml whole milk',
      '4 egg yolks',
      '120 g caster sugar',
      '50 g cornflour',
      '250 g butter, at room temperature',
      '# To dust',
      '2 tbsp icing sugar'
    ],
    st: [
      'For the praline, roast the hazelnuts at 180°C for 10 minutes and rub off the skins. Melt the sugar to a dark caramel, pour it over the nuts on an oiled tray, cool, then blitz to a smooth paste.',
      'Make a pastry cream: heat the milk, whisk the yolks with the sugar and cornflour, combine and cook until very thick. Cover and cool to room temperature.',
      'For the choux, boil the water, milk, butter, sugar and salt, tip in the flour, beat to a ball and dry it over the heat 2 minutes. Cool 5 minutes, then beat in the eggs.',
      'Pipe a 22 cm ring onto a lined tray, pipe a second ring outside it touching, and a third on top of the join. Brush with egg and scatter with almonds.',
      'Bake at 200°C / 400°F for 20 minutes, then 170°C for 20 minutes more, until very dark and dry. Cool completely.',
      'Beat the room-temperature butter until pale, then beat in the cooled pastry cream a spoonful at a time, followed by the praline paste.',
      'Split the ring horizontally, pipe the mousseline generously into the base, replace the lid and dust with icing sugar.'
    ],
    tips: [
      'Butter and pastry cream both at room temperature or the mousseline splits.',
      'Bake the choux dark and dry. Pale rings collapse.',
      'If it splits, warm a third of it and beat it back in.'
    ],
    pair: ['Coffee', 'Nothing', 'A small glass of Armagnac'],
    store: 'Assembled, 24 hours refrigerated. The unfilled ring keeps 2 days and freezes for a month.',
    nut: [625, 10, 52, 42, 3, 34, 290]
  },

  'saint-honore': {
    d: 'Puff pastry base, choux buns dipped in caramel, and piped crème chiboust between them. Named after the patron saint of bakers and about as hard as home baking gets.',
    meta: 'A puff pastry base ringed with caramel-dipped choux buns and piped with crème chiboust, assembled at the last moment.',
    kw: ['saint honore', 'gateau saint honore', 'saint honore recipe', 'caramel choux cake', 'french patisserie'],
    why: 'Caramel is the dangerous part in both senses. It must be taken to a proper amber — pale caramel tastes only of sugar — and then used immediately, dipping the buns tops-down and setting them on paper to harden. It will burn skin badly, so keep a bowl of iced water beside you. Assemble within an hour of serving: caramel draws moisture from the air and turns sticky and dull, and chiboust weeps if it stands.',
    ing: [
      '# For the base',
      '250 g puff pastry',
      '# For the choux',
      '125 ml water',
      '60 g butter',
      '75 g plain flour',
      '0.25 tsp fine sea salt',
      '2 eggs',
      '# For the chiboust',
      '400 ml whole milk',
      '4 egg yolks',
      '90 g caster sugar',
      '40 g cornflour',
      '1 vanilla pod, split',
      '4 egg whites',
      '80 g caster sugar',
      '# For the caramel',
      '300 g caster sugar',
      '80 ml water'
    ],
    st: [
      'Roll the puff pastry into a 22 cm disc, prick it all over, and bake at 200°C between two trays for 20 minutes until flat and golden. Cool.',
      'Make the choux: boil the water and butter, add the flour and salt, beat to a ball, dry 2 minutes, cool, then beat in the eggs.',
      'Pipe 20 small buns onto a lined tray and bake at 200°C for 25 minutes until dark and dry. Cool.',
      'Make a pastry cream with the milk, yolks, sugar, cornflour and vanilla, cooking until very thick. While it is hot, whisk the egg whites to soft peaks with the 80 g sugar and fold them in — this is the chiboust.',
      'Fill the buns with some of the chiboust through a hole in the base.',
      'Boil the caramel sugar and water to a deep amber without stirring. Keep iced water nearby.',
      'Dip each bun top-down in the caramel and set it on paper. Then dip the bases and glue them in a ring around the pastry disc. Pipe the remaining chiboust into the centre and serve within the hour.'
    ],
    tips: [
      'Take the caramel to amber. Pale caramel tastes of nothing.',
      'Iced water beside you. Caramel burns are serious.',
      'Assemble within an hour of serving.'
    ],
    pair: ['Coffee', 'Champagne', 'An audience'],
    store: 'None once assembled. Components keep separately for a day.',
    nut: [545, 9, 72, 25, 1, 52, 210]
  },

  'religieuse': {
    d: 'A large choux bun with a small one on top, both filled and glazed, finished with a collar of buttercream. Meant to look like a nun, hence the name.',
    meta: 'Choux buns in two sizes filled with chocolate crème pâtissière, glazed in fondant and joined with a piped buttercream collar.',
    kw: ['religieuse', 'chocolate choux', 'religieuse recipe', 'french choux pastry', 'stacked eclair'],
    why: 'The buns are filled before they are glazed, never after — a glazed bun cannot be pierced without cracking the fondant, and the hole would show. The fondant needs to be warmed only to about 35°C: any hotter and it loses its shine and sets dull and streaky. Dip rather than spoon, and let the excess run off for a few seconds before turning the bun upright.',
    ing: [
      '# For the choux',
      '125 ml water',
      '125 ml whole milk',
      '110 g butter',
      '0.5 tsp fine sea salt',
      '1 tsp caster sugar',
      '150 g plain flour',
      '4 eggs',
      '# For the filling',
      '600 ml whole milk',
      '5 egg yolks',
      '120 g caster sugar',
      '50 g cornflour',
      '150 g dark chocolate, chopped',
      '30 g butter',
      '# For the glaze',
      '400 g fondant icing',
      '3 tbsp cocoa powder',
      '2 tbsp water',
      '# For the collar',
      '150 g butter, softened',
      '200 g icing sugar',
      '1 tbsp cocoa powder'
    ],
    st: [
      'Make the choux paste: boil the liquids with the butter, salt and sugar, beat in the flour, dry it 2 minutes over the heat, cool, then beat in the eggs.',
      'Pipe 8 large buns and 8 small ones onto lined trays. Bake at 200°C / 400°F for 20 minutes, then 170°C for 15 minutes, until dark and completely dry. Cool.',
      'Make a pastry cream with the milk, yolks, sugar and cornflour. While hot, beat in the chocolate and butter until smooth. Cool with film on the surface.',
      'Pierce the base of each bun and pipe the chocolate cream in until heavy.',
      'Warm the fondant with the cocoa and water to 35°C — no hotter, or it dries dull.',
      'Dip the top of each bun, let the excess run off, and set upright.',
      'Beat the butter, icing sugar and cocoa to a smooth buttercream. Sit each small bun on a large one and pipe a collar of buttercream around the join.'
    ],
    tips: [
      'Fill before glazing, always.',
      'Fondant at 35°C. Hotter and it sets dull.',
      'Bake the buns dry or they collapse when filled.'
    ],
    pair: ['Coffee', 'A cold glass of milk', 'More coffee'],
    store: 'Refrigerated for 24 hours. The unfilled buns freeze for a month.',
    nut: [545, 9, 68, 27, 2, 54, 290]
  },

  'opera': {
    d: 'Six layers: almond sponge soaked in coffee syrup, coffee buttercream, chocolate ganache, repeated, and a poured glaze. Every layer must be flat.',
    meta: 'Layers of coffee-soaked almond joconde sponge, coffee buttercream and chocolate ganache under a poured mirror glaze.',
    kw: ['opera cake', 'gateau opera', 'opera cake recipe', 'coffee chocolate layer cake', 'french patisserie cake'],
    why: 'Everything depends on each layer being genuinely flat and each one being set before the next goes on, so this is a dessert made over two days and chilled between every stage. The joconde sponge is baked thin and fast — seven minutes — so it stays flexible enough to layer without cracking. Trim the edges with a hot knife at the end, which is what gives the clean striped section the cake is judged on.',
    ing: [
      '# For the joconde',
      '180 g ground almonds',
      '180 g icing sugar',
      '5 eggs',
      '50 g plain flour',
      '5 egg whites',
      '30 g caster sugar',
      '40 g butter, melted',
      '# For the syrup',
      '150 ml strong espresso',
      '80 g caster sugar',
      '2 tbsp coffee liqueur',
      '# For the buttercream',
      '3 egg yolks',
      '150 g caster sugar',
      '60 ml water',
      '250 g butter, softened',
      '2 tbsp instant coffee dissolved in 1 tbsp water',
      '# For the ganache',
      '250 g dark chocolate, chopped',
      '250 ml double cream',
      '30 g butter',
      '# For the glaze',
      '150 g dark chocolate',
      '30 g sunflower oil'
    ],
    st: [
      'Whisk the ground almonds, icing sugar and whole eggs for 8 minutes until pale and tripled. Fold in the flour, then the whites whipped with the caster sugar, then the melted butter.',
      'Spread thinly over two lined 30 x 40 cm trays and bake at 220°C / 425°F for 7 minutes only. Cool, then cut into three equal rectangles.',
      'Boil the espresso and sugar, cool, and add the liqueur.',
      'For the buttercream, boil the sugar and water to 118°C, pour onto the whisking yolks, and beat until cool. Beat in the butter and the coffee.',
      'Melt the ganache chocolate into the hot cream, add the butter, and cool until spreadable.',
      'Layer in a frame: sponge, soak with syrup, half the buttercream, sponge, syrup, ganache, sponge, syrup, the rest of the buttercream. Chill 60 minutes between each layer.',
      'Melt the glaze chocolate with the oil, pour over the chilled cake, tilt to level, and chill 120 minutes. Trim all four edges with a hot knife.'
    ],
    rest: [180, 'chilling between every layer'],
    tips: [
      'Chill between every single layer. This is a two-day cake.',
      'Seven minutes for the sponge — it must stay flexible.',
      'Trim the edges with a hot knife for the stripes.'
    ],
    pair: ['Espresso', 'Nothing else at all', 'A very small glass of cognac'],
    store: 'Refrigerated for 4 days and it improves for the first two. It freezes for a month.',
    nut: [545, 9, 48, 36, 3, 40, 180]
  },

  'fraisier': {
    d: 'Strawberries stood upright around the edge of a génoise, packed in mousseline cream. Summer, and the strawberries must be cut flat so the sides look right.',
    meta: 'Génoise layered with mousseline cream and strawberries stood cut-side out around the edge, topped with marzipan.',
    kw: ['fraisier', 'strawberry cake french', 'fraisier recipe', 'strawberry mousseline cake', 'french strawberry gateau'],
    why: 'The strawberries around the edge are halved and pressed cut-side against the ring so the cross-section shows, and they need to be roughly the same height or the top layer sits crooked. Sort them by size before you start. The mousseline must be stiff enough to hold them in place, which means properly cooled pastry cream and butter beaten until it is genuinely aerated — a slack cream lets the fruit slide as it chills.',
    ing: [
      '# For the génoise',
      '4 eggs',
      '120 g caster sugar',
      '120 g plain flour',
      '40 g butter, melted',
      '# For the syrup',
      '100 ml water',
      '80 g caster sugar',
      '2 tbsp kirsch',
      '# For the mousseline',
      '500 ml whole milk',
      '4 egg yolks',
      '120 g caster sugar',
      '50 g cornflour',
      '1 vanilla pod, split',
      '250 g butter, at room temperature',
      '# To assemble',
      '800 g strawberries, sorted by size',
      '200 g marzipan',
      '2 tbsp icing sugar'
    ],
    st: [
      'Whisk the eggs and sugar over simmering water until warm, then off the heat for 8 minutes until tripled and holding a ribbon. Fold in the flour and melted butter.',
      'Bake in a lined 22 cm tin at 180°C for 25 minutes. Cool and split into two discs.',
      'Boil the syrup water and sugar, cool, add the kirsch.',
      'Make a pastry cream with the milk, yolks, sugar, cornflour and vanilla and cool it to room temperature. Beat the room-temperature butter until pale, then beat the cream into it a spoonful at a time.',
      'Set a 22 cm ring on a plate, lay in one sponge disc and brush generously with syrup.',
      'Halve the largest strawberries and stand them cut-side against the ring all the way round. Pipe mousseline between and behind them, then fill the centre with the remaining fruit and more cream.',
      'Top with the second sponge, brush with syrup, and chill 240 minutes. Roll the marzipan thin, lay it over the top, and remove the ring.'
    ],
    rest: [240, 'chilling to set'],
    tips: [
      'Sort the strawberries by size before you start.',
      'Cut faces against the ring, or the sides look wrong.',
      'Both mousseline components at room temperature.'
    ],
    pair: ['Champagne', 'Coffee', 'More strawberries'],
    store: 'Refrigerated for 2 days. It does not freeze — the strawberries collapse.',
    nut: [485, 8, 58, 25, 3, 42, 190]
  },

  'dacquoise': {
    d: 'Discs of nut meringue layered with buttercream. Chewy rather than crisp, which is what separates it from a vacherin.',
    meta: 'Discs of hazelnut and almond meringue layered with praline buttercream, baked soft so they stay chewy rather than crisp.',
    kw: ['dacquoise', 'nut meringue cake', 'dacquoise recipe', 'hazelnut meringue layers', 'french meringue gateau'],
    why: 'Ground nuts folded into the meringue keep it from drying out completely, so a dacquoise is baked at a moderate temperature for an hour rather than dried overnight like a pavlova — it should still give slightly under a finger when it comes out. Fold the nuts in with a light hand and stop the moment they are incorporated; over-folding knocks the air out and gives a flat, dense disc that never rises.',
    ing: [
      '# For the meringue',
      '6 egg whites, at room temperature',
      '200 g caster sugar',
      '150 g ground hazelnuts',
      '100 g ground almonds',
      '80 g icing sugar',
      '1 tbsp cornflour',
      '0.25 tsp fine sea salt',
      '# For the buttercream',
      '250 g butter, softened',
      '300 g icing sugar',
      '100 g praline paste, or hazelnut butter',
      '2 tbsp double cream',
      '# To finish',
      '50 g flaked almonds, toasted',
      '2 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 160°C / 325°F. Draw three 20 cm circles on baking paper.',
      'Whisk the egg whites with the salt to soft peaks, then add the caster sugar a spoonful at a time until stiff and glossy.',
      'Sift the ground nuts, icing sugar and cornflour together and fold them in with a large spoon. Stop the moment no dry patches remain.',
      'Spread the mixture into the three circles, level but not smoothed flat.',
      'Bake 60 minutes, until set and dry to the touch but still giving slightly when pressed. Cool completely on the paper.',
      'Beat the butter until very pale, then beat in the icing sugar, praline paste and cream.',
      'Stack the discs with buttercream between them, cover the top with more, and finish with toasted almonds and a dusting of icing sugar. Chill 60 minutes before cutting.'
    ],
    rest: [60, 'chilling before cutting'],
    tips: [
      'Stop folding the moment the nuts are in.',
      'It should still give under a finger. Crisp means overbaked.',
      'Cool on the paper — peeling them warm tears them.'
    ],
    pair: ['Coffee', 'Raspberries', 'A glass of Sauternes'],
    store: 'Assembled, 2 days refrigerated. The discs keep a week in a tin and are best made ahead.',
    nut: [545, 9, 48, 37, 3, 44, 160]
  },

  'mont-blanc': {
    d: 'Chestnut purée pushed through a ricer into vermicelli over meringue and cream, made to look like the mountain. Piped last, and eaten quickly.',
    meta: 'Sweetened chestnut purée pushed into vermicelli over a meringue nest and whipped cream, assembled just before serving.',
    kw: ['mont blanc', 'chestnut dessert', 'mont blanc recipe', 'chestnut vermicelli meringue', 'french chestnut cake'],
    why: 'The chestnut is pushed through a ricer or a mont-blanc nozzle at the very last moment, because the strands dry and stiffen within about twenty minutes and lose the delicate look entirely. The purée must also be loosened with cream to the point where it just holds — too stiff and it breaks into short pieces as it comes through, too loose and it collapses into a heap. Test a small amount first.',
    ing: [
      '# For the meringue',
      '3 egg whites',
      '150 g caster sugar',
      '0.5 tsp white wine vinegar',
      '1 tsp cornflour',
      '# For the chestnut',
      '400 g sweetened chestnut purée',
      '150 g chestnut spread, or crème de marrons',
      '3 tbsp double cream',
      '2 tbsp dark rum',
      '# For the cream',
      '350 ml double cream',
      '2 tbsp icing sugar',
      '1 tsp vanilla extract',
      '# To finish',
      '2 tbsp icing sugar',
      '6 marrons glacés'
    ],
    st: [
      'Whisk the whites to soft peaks, add the sugar gradually to stiff glossy peaks, then fold in the vinegar and cornflour.',
      'Pipe six 8 cm nests onto lined trays and bake at 120°C / 250°F for 60 minutes. Turn the oven off and leave them in it to cool.',
      'Beat the chestnut purée with the chestnut spread, the 3 tbsp cream and the rum until smooth and just soft enough to push through a ricer. Test a little.',
      'Whip the cream with the icing sugar and vanilla to firm peaks.',
      'Sit each meringue nest on a plate and pile the whipped cream into a dome on top.',
      'Push the chestnut mixture through a ricer or a mont-blanc nozzle directly over each dome, letting the strands fall naturally in a tangle.',
      'Dust with icing sugar, top each with a marron glacé, and serve within twenty minutes.'
    ],
    tips: [
      'Rice the chestnut at the last moment. It stiffens in twenty minutes.',
      'Test the consistency with a small amount first.',
      'Let the strands fall naturally — do not arrange them.'
    ],
    pair: ['Coffee', 'A glass of rum', 'Cold hands and a mountain'],
    store: 'Meringues keep a week in a tin. Assemble immediately before serving.',
    nut: [545, 5, 72, 27, 3, 62, 120]
  },

  'pithiviers': {
    d: 'Almond cream sealed between two discs of puff pastry, the top scored in curves from the centre. The scoring is what everyone recognises it by.',
    meta: 'Frangipane sealed between two discs of puff pastry, the top scored in curved rays and baked until dark and glossy.',
    kw: ['pithiviers', 'almond puff pastry', 'pithiviers recipe', 'galette frangipane', 'french almond pie'],
    why: 'The edges must be sealed by pressing down with the back of a knife and then scalloped, because frangipane expands considerably and will find any weakness — a leaked pithiviers burns onto the tray and deflates. Chill it hard before baking as well, which sets the butter in the pastry so it puffs in sheets rather than melting out. Score only through the top layer; cutting through releases the filling.',
    ing: [
      '500 g all-butter puff pastry',
      '# For the frangipane',
      '150 g butter, softened',
      '150 g caster sugar',
      '150 g ground almonds',
      '2 eggs',
      '30 g plain flour',
      '2 tbsp dark rum',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      '# To finish',
      '1 egg, beaten',
      '1 tbsp caster sugar'
    ],
    st: [
      'Beat the butter and sugar until pale, then beat in the eggs one at a time, followed by the ground almonds, flour, rum, vanilla and salt.',
      'Chill the frangipane 30 minutes so it firms up.',
      'Cut two discs from the pastry, one 24 cm and one 26 cm. Lay the smaller on a lined tray.',
      'Mound the frangipane in the centre, leaving a 3 cm border, and brush that border with beaten egg.',
      'Lay the larger disc over the top and press the border down firmly with the back of a knife, then scallop the edge.',
      'Chill 60 minutes. Brush the top with egg and score curved rays from the centre to the edge, cutting only through the top layer.',
      'Bake at 200°C / 400°F for 45 minutes, until deep brown and puffed. Dust with sugar and give it 3 minutes more to glaze.'
    ],
    rest: [90, 'chilling the frangipane and the assembled pastry'],
    tips: [
      'Seal and scallop the edges hard. Frangipane escapes.',
      'Chill before baking so the pastry puffs.',
      'Score the top layer only.'
    ],
    pair: ['Crème fraîche', 'Coffee', 'A glass of cider'],
    store: 'Two days at room temperature. Refresh at 180°C for 8 minutes. It freezes unbaked for 2 months.',
    nut: [585, 10, 48, 40, 3, 26, 320]
  },

  'baba-au-rhum': {
    d: 'A yeasted sponge soaked until it is saturated with rum syrup. It should be heavy with it — a dry baba is a failed one.',
    meta: 'A yeasted sponge baked dry and then soaked in warm rum syrup until saturated and heavy, served with whipped cream.',
    kw: ['baba au rhum', 'rum baba', 'baba au rhum recipe', 'yeasted rum cake', 'french rum sponge'],
    why: 'The baba is baked until genuinely dry — it looks overbaked and is exactly right — because a moist sponge cannot absorb syrup and simply falls apart in it. Some bakers leave them out overnight to stale further. The syrup goes on warm, not hot: boiling syrup cooks the outside of the sponge and seals it, so the middle stays dry however long you leave it in.',
    ing: [
      '# For the babas',
      '250 g strong white flour',
      '7 g fast-action dried yeast',
      '30 g caster sugar',
      '1 tsp fine sea salt',
      '4 eggs',
      '60 ml warm milk',
      '100 g butter, softened',
      '# For the syrup',
      '600 ml water',
      '350 g caster sugar',
      '1 vanilla pod, split',
      '2 strips orange peel',
      '200 ml dark rum',
      '# To serve',
      '300 ml double cream',
      '2 tbsp icing sugar',
      '3 tbsp dark rum, to finish'
    ],
    st: [
      'Beat the flour, yeast, sugar, salt, eggs and milk with a dough hook for 8 minutes, until elastic. Beat in the softened butter and continue 5 minutes more.',
      'Cover and prove 60 minutes until doubled.',
      'Pipe or spoon into eight buttered dariole moulds, filling them a third full. Prove 45 minutes until risen to the rim.',
      'Bake at 190°C / 375°F for 25 minutes, until very dark and completely dry. Turn out and leave to cool and dry further for at least an hour.',
      'Boil the syrup water, sugar, vanilla and orange peel for 5 minutes, then take off the heat and cool to warm. Stir in the 200 ml rum.',
      'Submerge the dry babas in the warm syrup and leave 20 minutes, turning once, until completely saturated and heavy.',
      'Lift out carefully, drizzle with the extra rum, and serve with cream whipped with the icing sugar.'
    ],
    rest: [165, 'both proves and drying the babas'],
    tips: [
      'Bake them dry. A moist baba cannot absorb syrup.',
      'Warm syrup, never hot. Hot syrup seals the outside.',
      'They should feel heavy when you lift them out.'
    ],
    pair: ['Whipped cream', 'More rum', 'Espresso'],
    store: 'Soaked, 2 days refrigerated. Unsoaked babas keep a week and freeze for 2 months.',
    nut: [545, 7, 68, 26, 1, 48, 320]
  },

  'creme-caramel': {
    d: 'Baked custard turned out so the caramel runs down it. The caramel goes into the moulds first and dissolves into a sauce while it chills.',
    meta: 'A baked vanilla custard set over hard caramel, chilled overnight so the caramel dissolves into a sauce, then turned out.',
    kw: ['creme caramel', 'flan custard', 'creme caramel recipe', 'caramel custard', 'french baked custard'],
    why: 'It has to chill overnight, and not for convenience — the hard caramel in the base only dissolves into a pourable sauce after several hours in contact with the cold custard. Turned out after two hours you get set custard and a layer of toffee stuck to the dish. The bain-marie water must also be no more than a bare tremble; a simmering water bath boils the custard and gives it a bubbled, curdled texture.',
    ing: [
      '# For the caramel',
      '200 g caster sugar',
      '60 ml water',
      '# For the custard',
      '600 ml whole milk',
      '200 ml double cream',
      '1 vanilla pod, split and scraped',
      '4 eggs',
      '2 egg yolks',
      '120 g caster sugar',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Boil the caramel sugar and water without stirring until it is a deep amber. Pour immediately into six ramekins, tilting to coat the bases. It will set hard.',
      'Heat the milk, cream and vanilla to steaming, then leave to infuse 15 minutes.',
      'Whisk the eggs, yolks, sugar and salt together without making them foam.',
      'Pour the warm milk onto the eggs, whisking gently, then strain the custard to remove any threads.',
      'Skim off every bubble from the surface — they bake into the finished custard as holes.',
      'Pour into the ramekins, stand them in a roasting dish, and pour in hot water to come halfway up. Bake at 150°C / 300°F for 45 minutes, until set with a faint wobble.',
      'Cool, then refrigerate at least 720 minutes. Run a knife round each and turn out onto a plate so the caramel runs.'
    ],
    rest: [720, 'chilling overnight so the caramel liquefies'],
    tips: [
      'Overnight in the fridge. That is when the caramel becomes a sauce.',
      'Skim the bubbles before baking.',
      'A bare tremble in the water bath, never a simmer.'
    ],
    pair: ['Espresso', 'A crisp biscuit', 'Nothing'],
    store: 'Refrigerated for 4 days in the ramekins. It does not freeze.',
    nut: [325, 9, 42, 14, 0, 40, 140]
  },

  'ile-flottante': {
    d: 'Poached meringue floating on crème anglaise under a thread of caramel. The meringue is poached in milk, not baked.',
    meta: 'Meringue quenelles poached briefly in milk and floated on vanilla crème anglaise under a thread of hard caramel.',
    kw: ['ile flottante', 'floating island', 'ile flottante recipe', 'poached meringue creme anglaise', 'french custard dessert'],
    why: 'Crème anglaise curdles above 85°C, so it is cooked over gentle heat and stirred constantly until it coats the back of a spoon and holds a line drawn through it. Keep a bowl of cold cream nearby to stop it fast if it starts to grain. The meringues poach in barely trembling milk for two minutes a side; boiling milk makes them swell and then collapse into shreds.',
    ing: [
      '# For the crème anglaise',
      '600 ml whole milk',
      '1 vanilla pod, split and scraped',
      '6 egg yolks',
      '120 g caster sugar',
      '# For the meringue',
      '6 egg whites',
      '150 g caster sugar',
      '0.25 tsp fine sea salt',
      '# For poaching',
      '600 ml whole milk',
      '# For the caramel',
      '150 g caster sugar',
      '40 ml water',
      '# To finish',
      '3 tbsp flaked almonds, toasted'
    ],
    st: [
      'Heat the 600 ml milk with the vanilla to steaming and infuse 15 minutes.',
      'Whisk the yolks and sugar until pale, pour the warm milk over, then return to a gentle heat.',
      'Stir constantly with a wooden spoon until it coats the back and a finger leaves a clean line — around 82°C. Strain immediately into a cold bowl and chill.',
      'Whisk the whites with the salt to soft peaks, then add the sugar gradually to a stiff, glossy meringue.',
      'Heat the poaching milk to a bare tremble. Shape quenelles between two spoons and poach them 2 minutes a side, turning once. Lift onto a cloth.',
      'Boil the caramel sugar and water to a deep amber.',
      'Pour the cold anglaise into bowls, float the meringues on it, thread the hot caramel over in fine lines and scatter with almonds.'
    ],
    tips: [
      'Take the anglaise off at 82°C. Above 85°C it scrambles.',
      'Poach in a bare tremble. Boiling milk shreds the meringue.',
      'Thread the caramel from a height for fine lines.'
    ],
    pair: ['Espresso', 'A crisp tuile', 'Nothing else'],
    store: 'The anglaise keeps 2 days refrigerated. Poach the meringues on the day and assemble to order.',
    nut: [345, 11, 52, 11, 0, 50, 160]
  },

  'riz-au-lait': {
    d: 'Rice cooked slowly in vanilla milk until it is creamy but the grains still hold. Served warm in the bowl it was cooked in, ideally.',
    meta: 'Round rice cooked slowly in vanilla milk until creamy but still distinct, enriched with egg yolk and a little cream.',
    kw: ['riz au lait', 'french rice pudding', 'riz au lait recipe', 'vanilla rice pudding', 'creamy rice dessert'],
    why: 'Round or pudding rice, never long-grain: the whole texture depends on the starch that short grains release, and a long-grain version stays thin and separate. It is stirred often but not constantly, and taken off the heat while still looser than you want it, because it thickens a great deal in the first ten minutes off the stove. The yolks go in off the heat as well, or they scramble in the hot rice.',
    ing: [
      '200 g round pudding rice',
      '1.2 litres whole milk',
      '1 vanilla pod, split and scraped',
      '120 g caster sugar',
      '0.25 tsp fine sea salt',
      '# To finish',
      '2 egg yolks',
      '100 ml double cream',
      '20 g butter'
    ],
    st: [
      'Rinse the rice briefly, then blanch it in boiling water for 2 minutes and drain. This removes the raw starch that would make it gluey.',
      'Bring the milk to a simmer with the vanilla pod, seeds and salt.',
      'Add the rice and cook at the barest simmer for 35 minutes, stirring every few minutes and scraping the base so it does not catch.',
      'Add the sugar and cook 8 minutes more. The rice should be tender with the grains still distinct, and the mixture noticeably looser than you want it.',
      'Take the pan off the heat.',
      'Whisk the yolks with the cream and stir them in off the heat, along with the butter.',
      'Leave 10 minutes to thicken, remove the vanilla pod, and serve warm.'
    ],
    tips: [
      'Round rice only. Long-grain gives a thin pudding.',
      'Blanch it first to wash off the raw starch.',
      'Off the heat looser than you want — it thickens fast.'
    ],
    pair: ['Salted caramel', 'Stewed rhubarb', 'A spoon'],
    store: 'Refrigerated for 3 days. Loosen with milk when reheating. It does not freeze.',
    nut: [385, 11, 56, 13, 0, 34, 180]
  },

  'financiers': {
    d: 'Small almond cakes made with brown butter and egg whites, baked hot so the edges crisp. Named for the gold-bar shape and the district that ate them.',
    meta: 'Small almond cakes made with beurre noisette and egg whites, baked hot so the edges crisp against a soft middle.',
    kw: ['financiers', 'almond cakes', 'financiers recipe', 'brown butter cakes', 'french petit four'],
    why: 'Beurre noisette is the entire flavour, so the butter must be taken past melted to genuinely nutty and brown — it should smell of hazelnuts and the solids at the bottom should be the colour of dark toast. Pull it off the heat a shade before it looks right, because it keeps cooking in the pan. Resting the batter overnight is the other thing professionals do and amateurs skip: it hydrates the almonds and improves the texture noticeably.',
    ing: [
      '150 g butter',
      '150 g icing sugar',
      '80 g ground almonds',
      '60 g plain flour',
      '0.25 tsp fine sea salt',
      '5 egg whites',
      '1 tsp vanilla extract',
      '# For the tins',
      '20 g butter, melted',
      '2 tbsp plain flour'
    ],
    st: [
      'Melt the butter in a pale-bottomed pan and cook it over medium heat until it foams, then subsides, and the solids turn deep brown and smell nutty — about 6 minutes.',
      'Pour it immediately into a cold bowl to stop the cooking, and leave to cool to warm.',
      'Whisk the icing sugar, ground almonds, flour and salt together.',
      'Add the egg whites and whisk to a smooth batter — they go in unwhipped, straight from the shells.',
      'Whisk in the warm brown butter, including the dark solids, and the vanilla.',
      'Refrigerate the batter at least 120 minutes, or overnight.',
      'Butter and flour financier moulds, fill them three-quarters full, and bake at 200°C / 400°F for 14 minutes, until risen with crisp brown edges and a soft centre.'
    ],
    rest: [120, 'resting the batter'],
    tips: [
      'Take the butter properly brown. It is the whole flavour.',
      'Egg whites unwhipped, straight in.',
      'Rest the batter. Overnight is better than two hours.'
    ],
    pair: ['Coffee', 'Raspberries', 'Tea'],
    store: 'Three days in a tin, though the edges soften. They freeze for 2 months.',
    nut: [185, 3, 20, 11, 1, 16, 90]
  },

  'palmiers': {
    d: 'Puff pastry rolled in sugar, folded into a heart and baked until the sugar caramelises on both faces. Three ingredients, one of which is optional.',
    meta: 'Puff pastry rolled in sugar rather than flour, folded into hearts and baked until the sugar caramelises on both sides.',
    kw: ['palmiers', 'elephant ears', 'palmiers recipe', 'puff pastry sugar biscuits', 'french palmier'],
    why: 'The pastry is rolled out in sugar instead of flour, which is what makes this work — the sugar gets pressed into the surface of the dough and caramelises against the tray. Flouring the bench and sprinkling sugar on afterwards gives you a much paler, less crisp biscuit. They are also turned halfway through baking so both faces caramelise, and they burn from perfectly bronzed to black in under a minute.',
    ing: [
      '500 g all-butter puff pastry',
      '200 g caster sugar',
      '0.5 tsp fine sea salt',
      '0.5 tsp ground cinnamon',
      '# To finish',
      '2 tbsp caster sugar'
    ],
    st: [
      'Mix the sugar with the salt and cinnamon and scatter a thick layer over the work surface.',
      'Lay the pastry on it, scatter more sugar over the top, and roll out to a 30 x 40 cm rectangle, using sugar and never flour to stop it sticking.',
      'Fold both long edges in to meet at the centre, then fold them in again to meet in the middle a second time.',
      'Fold one half over the other, like closing a book, to make a six-layer log.',
      'Wrap and refrigerate 60 minutes until firm.',
      'Cut into 1 cm slices and lay them cut-side up on lined trays, well spaced — they double in width.',
      'Bake at 200°C / 400°F for 12 minutes, turn each one over, and bake 8 minutes more until deeply caramelised on both sides. Watch them closely at the end.'
    ],
    rest: [60, 'chilling the folded log'],
    tips: [
      'Roll in sugar, never flour.',
      'Turn them halfway so both faces caramelise.',
      'They go from bronze to burnt in under a minute.'
    ],
    pair: ['Coffee', 'Tea', 'Vanilla ice cream'],
    store: 'A week in an airtight tin. They lose their crispness in humidity. The raw log freezes for 2 months.',
    nut: [185, 2, 24, 9, 1, 14, 120]
  },

  'chouquettes': {
    d: 'Small choux buns rolled in pearl sugar and baked empty. Sold by weight in paper bags and eaten before you get home.',
    meta: 'Small empty choux buns scattered with pearl sugar and baked until hollow, dry and deep gold.',
    kw: ['chouquettes', 'sugar choux buns', 'chouquettes recipe', 'pearl sugar puffs', 'french bakery buns'],
    why: 'Pearl sugar is not the same as any other sugar and there is no real substitute — it is compressed enough not to melt in the oven, so it stays as visible white nuggets. Granulated sugar dissolves into the surface and caramelises, giving something entirely different. The buns are also baked with the oven door propped open for the last five minutes, which lets the steam out and stops them going soft as they cool.',
    ing: [
      '125 ml water',
      '125 ml whole milk',
      '110 g butter',
      '1 tsp caster sugar',
      '0.5 tsp fine sea salt',
      '150 g plain flour',
      '4 eggs',
      '# To finish',
      '1 egg, beaten',
      '150 g pearl sugar'
    ],
    st: [
      'Bring the water, milk, butter, sugar and salt to a rolling boil.',
      'Tip in the flour all at once and beat hard to a smooth ball, then dry it over the heat for 2 minutes.',
      'Cool 5 minutes, then beat in the eggs one at a time until the paste falls slowly from the spoon in a V.',
      'Pipe walnut-sized mounds onto lined trays, well spaced, and flatten any peaks with a wet finger.',
      'Brush with beaten egg and scatter generously with pearl sugar, pressing it on lightly.',
      'Bake at 200°C / 400°F for 20 minutes, then lower to 170°C and bake 12 minutes more.',
      'Prop the oven door open with a wooden spoon for a final 5 minutes to dry them out, then cool on a rack.'
    ],
    tips: [
      'Pearl sugar only. Granulated melts away.',
      'Prop the door open at the end to dry them.',
      'They are meant to be empty. Do not fill them.'
    ],
    pair: ['Coffee', 'A paper bag', 'The walk home'],
    store: 'Best the day they are made. A day in a tin; refresh at 170°C for 4 minutes.',
    nut: [165, 4, 18, 9, 0, 12, 130]
  },

  'gateau-au-yaourt': {
    d: 'The cake every French child learns first, measured in the empty yogurt pot rather than on scales. Plain, reliable and better than it sounds.',
    meta: 'The classic French yogurt cake measured in the empty yogurt pot rather than by weight, plain and reliably moist.',
    kw: ['gateau au yaourt', 'french yogurt cake', 'gateau au yaourt recipe', 'yogurt pot cake', 'easy french cake'],
    why: 'The proportions are traditionally measured with the empty yogurt pot — one of yogurt, two of sugar, three of flour, half of oil — and they are given both ways here because the ratio is the recipe. Oil rather than butter is what keeps it moist for days, and the yogurt provides both the acid for the raising agent and enough fat that the crumb stays tender without creaming anything.',
    ing: [
      '1 pot plain yogurt, 125 g, pot kept for measuring',
      '2 pots caster sugar, about 250 g',
      '3 pots plain flour, about 220 g',
      '0.5 pot sunflower oil, about 60 ml',
      '3 eggs',
      '1 sachet baking powder, 11 g',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      'Zest of 1 lemon',
      '# For the tin',
      '20 g butter',
      '1 tbsp flour'
    ],
    st: [
      'Heat the oven to 180°C / 350°F and butter and flour a 22 cm cake tin.',
      'Tip the yogurt into a bowl and keep the pot — it is the measure for everything else.',
      'Beat in the sugar and the eggs, one at a time, until smooth.',
      'Add the oil, vanilla, lemon zest and salt.',
      'Fold in the flour and baking powder until just combined. Do not beat it — overworking makes it tough.',
      'Pour into the tin and level the top.',
      'Bake 40 minutes, until risen, golden and a skewer comes out clean. Cool 10 minutes in the tin before turning out.'
    ],
    tips: [
      'The pot is the measure. That is the recipe.',
      'Oil, not butter — it stays moist for days.',
      'Fold the flour in; do not beat it.'
    ],
    pair: ['Stewed fruit', 'A cup of tea', 'Crème fraîche'],
    store: 'Four days in a tin and it improves on day two. It freezes for 2 months.',
    nut: [325, 6, 48, 12, 1, 28, 220]
  }
};
