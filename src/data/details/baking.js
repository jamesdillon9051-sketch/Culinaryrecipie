/** American baking, desserts & holiday recipe details. See ./italian.js for the field schema. */

module.exports = {
  'banana-bread': {
    rest: [60, 'cooling'],
    d: 'One bowl, one whisk, and the darkest bananas you can find. Browning the butter first adds a nutty depth that turns an everyday loaf into something people ask you about.',
    meta: 'One-bowl banana bread with brown butter and very ripe bananas. Moist, deeply flavoured, and impossible to get wrong.',
    kw: ['banana bread recipe', 'easy banana bread', 'brown butter banana bread', 'one bowl baking'],
    why: 'As bananas ripen, their starch converts to sugar and their cell walls break down, which is why black-spotted fruit gives both more sweetness and more moisture. Browning the butter drives off water and toasts the milk solids, creating nutty aromatic compounds that survive baking.',
    ing: [
      '4 very ripe bananas, heavily spotted, about 450 g peeled',
      '115 g unsalted butter',
      '150 g light brown sugar',
      '50 g caster sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '100 g soured cream or Greek yogurt',
      '250 g plain flour',
      '1 tsp bicarbonate of soda',
      '0.75 tsp fine sea salt',
      '1 tsp ground cinnamon',
      '80 g walnuts, chopped, optional',
      '1 tbsp demerara sugar, for the top'
    ],
    st: [
      'Line a 900 g loaf tin with baking paper, letting it hang over the long sides as a sling.',
      'Melt the butter in a light-coloured pan over medium heat. Keep cooking, swirling, for 4 to 5 minutes as it foams, subsides and the solids turn golden brown and smell nutty. Pour into a large bowl and cool 5 minutes.',
      'Whisk both sugars into the warm butter, then the eggs one at a time, then the vanilla and soured cream.',
      'Mash the bananas thoroughly with a fork — leave a few small lumps for texture — and whisk them in.',
      'Sift the flour, bicarbonate of soda, salt and cinnamon over the top and fold with a spatula until only just combined. Stop while a few streaks of flour remain.',
      'Fold in the walnuts if using, then scrape into the tin and level the top.',
      'Scatter with demerara sugar and bake at 175°C / 345°F for 55 to 65 minutes, until a skewer in the centre comes out with a few moist crumbs.',
      'If the top darkens before the centre sets, tent it with foil at the 40-minute mark.',
      'Cool in the tin for 15 minutes, then lift out and cool on a rack for at least an hour before slicing.'
    ],
    tips: [
      'Freeze overripe bananas as you get them. Thawed, they release liquid you should whisk straight into the batter.',
      'Do not over-mix once the flour is in. Banana bread turns gummy and tunnelled if you develop the gluten.',
      'A split down the middle of the crust is a sign of a well-risen loaf, not a fault.'
    ],
    pair: ['Strong coffee or a cup of tea', 'Serve toasted with salted butter', 'Excellent alongside vanilla ice cream'],
    store: 'Keeps 4 days wrapped at room temperature and freezes 3 months whole or sliced. It is noticeably better on day two.',
    nut: [342, 5, 46, 16, 2, 26, 320]
  },

  'blueberry-muffins': {
    d: 'Tall domed muffins with a crunchy sugar top and berries that stay suspended rather than sinking. The high-then-low oven trick is what gives you that bakery peak.',
    meta: 'Bakery-style blueberry muffins with tall domes and crunchy sugar tops. The two-temperature baking trick explained.',
    kw: ['blueberry muffins recipe', 'bakery style muffins', 'easy muffin recipe', 'breakfast baking'],
    why: 'Starting at 220°C causes a rapid burst of steam and gas that forces the batter upward before the crumb sets, creating the domed top; dropping to 190°C then lets the interior bake through without burning. Tossing the berries in a spoonful of the dry mix coats them so they grip the batter instead of sinking.',
    ing: [
      '320 g plain flour',
      '200 g caster sugar',
      '2.5 tsp baking powder',
      '0.75 tsp fine sea salt',
      '2 large eggs',
      '180 ml whole milk',
      '120 ml neutral oil',
      '60 g unsalted butter, melted',
      '2 tsp vanilla extract',
      '1 lemon, zested',
      '300 g blueberries, fresh or frozen',
      '3 tbsp demerara sugar, for the tops'
    ],
    st: [
      'Line a 12-hole muffin tin with tall paper cases. Heat the oven to 220°C / 430°F.',
      'Whisk the flour, sugar, baking powder and salt together. Remove 1 tablespoon of this mix and toss it with the blueberries.',
      'In a jug, whisk the eggs, milk, oil, melted butter, vanilla and lemon zest.',
      'Pour the wet into the dry and fold with a spatula for about 12 strokes — the batter should be thick and lumpy, not smooth.',
      'Fold in the coated blueberries with two or three more strokes.',
      'Rest the batter for 15 minutes. This hydrates the flour and thickens the batter, which helps it rise upward rather than spread.',
      'Divide between the cases, filling them right to the top, and sprinkle generously with demerara.',
      'Bake at 220°C for 7 minutes, then, without opening the door, reduce the oven to 190°C / 375°F and bake a further 15 to 18 minutes until golden and springy.',
      'Cool in the tin for 5 minutes, then move to a rack.'
    ],
    tips: [
      'Fill the cases completely. Half-filled cases make flat, sad muffins.',
      'Frozen blueberries work well and bleed less if you use them straight from the freezer without thawing.',
      'A thick batter is the goal. If it pours easily, it will spread rather than dome.'
    ],
    pair: ['Coffee or a milky tea', 'Serve warm with salted butter', 'Follow with fresh fruit'],
    store: 'Keeps 3 days in a loosely covered tin. Freezes 2 months; reheat from frozen at 160°C / 320°F for 12 minutes.',
    nut: [312, 5, 44, 14, 2, 24, 280]
  },

  'chocolate-chip-cookies': {
    d: 'Brown butter, a 24-hour rest and two sizes of chocolate produce cookies with crisp edges, a chewy middle and pools of melted chocolate. Worth planning a day ahead for.',
    meta: 'Brown butter chocolate chip cookies with crisp edges, chewy centres and molten chocolate pools. Rest the dough — it matters.',
    kw: ['chocolate chip cookies recipe', 'brown butter cookies', 'best cookie recipe', 'chewy cookies'],
    why: 'Resting the dough for 24 hours lets the flour fully hydrate and gives enzymes time to break starches into simpler sugars, which deepens both flavour and browning. Brown butter contributes toasted milk-solid aromatics, and using chopped chocolate rather than chips creates layers and puddles rather than isolated dots.',
    ing: [
      '225 g unsalted butter',
      '200 g light brown sugar',
      '100 g caster sugar',
      '2 large eggs, plus 1 yolk',
      '2 tsp vanilla extract',
      '340 g plain flour',
      '1 tsp bicarbonate of soda',
      '1 tsp fine sea salt',
      '200 g dark chocolate, 70%, roughly chopped',
      '150 g milk chocolate, roughly chopped',
      '1 tsp flaky sea salt, to finish'
    ],
    st: [
      'Brown the butter in a light pan over medium heat for 5 to 6 minutes, swirling, until the solids are deep golden and it smells of toffee. Scrape everything, including the browned bits, into a bowl and cool for 20 minutes until it is thick but still liquid.',
      'Whisk in both sugars and beat for 2 minutes until glossy and slightly lightened.',
      'Beat in the eggs and yolk one at a time, then the vanilla. Beat for a further minute — the mixture should look like caramel.',
      'Fold in the flour, bicarbonate of soda and fine salt until only just combined, then fold in both chocolates.',
      'Cover and refrigerate for at least 24 hours, and up to 72. This is the step that makes the difference.',
      'Scoop into 60 g balls, roll lightly, and space six per tray on lined baking sheets.',
      'Bake at 180°C / 355°F for 11 to 13 minutes, until the edges are set and browned but the centres still look pale and underdone.',
      'Bang the tray firmly on the counter as they come out — this deflates the centre and creates the rippled edge.',
      'Sprinkle with flaky salt and cool on the tray for 10 minutes before moving.'
    ],
    tips: [
      'Pull them out looking underbaked. They set on the tray, and a fully baked cookie is a hard cookie once cool.',
      'Chopped chocolate from a bar melts into pools; chips are formulated to hold their shape and will not.',
      'Freeze the scooped balls and bake from frozen, adding 2 minutes — fresh cookies whenever you want them.'
    ],
    pair: ['A glass of cold milk, unimprovably', 'Serve warm with vanilla ice cream', 'Excellent with strong coffee'],
    store: 'Keeps 4 days in an airtight tin with a slice of bread to hold moisture. Dough balls freeze 3 months.',
    nut: [286, 4, 34, 16, 2, 22, 180]
  },

  'cinnamon-rolls': {
    rest: [540, 'chilling'],
    d: 'Soft, tall rolls made with a tangzhong starter that keeps them pillowy for days, filled with cinnamon-butter and finished with cream cheese frosting. Shape them the night before and bake in the morning.',
    meta: 'Overnight cinnamon rolls with a tangzhong starter for lasting softness, plus tangy cream cheese frosting.',
    kw: ['cinnamon rolls recipe', 'overnight cinnamon rolls', 'tangzhong dough', 'cream cheese frosting'],
    why: 'Tangzhong — a cooked paste of flour and milk — gelatinises the starch so it can hold roughly three times its weight in water, and that extra bound moisture keeps the crumb soft for days instead of hours. The overnight cold prove also develops flavour and makes the sticky dough far easier to handle.',
    ing: [
      '# For the tangzhong',
      '30 g strong white bread flour',
      '75 ml whole milk',
      '75 ml water',
      '# For the dough',
      '450 g strong white bread flour',
      '60 g caster sugar',
      '7 g instant dried yeast',
      '1.5 tsp fine sea salt',
      '150 ml whole milk, warm',
      '1 large egg',
      '70 g unsalted butter, softened',
      '# For the filling',
      '120 g unsalted butter, very soft',
      '180 g light brown sugar',
      '2 tbsp ground cinnamon',
      '0.5 tsp fine sea salt',
      '# For the frosting',
      '150 g cream cheese, at room temperature',
      '60 g unsalted butter, softened',
      '150 g icing sugar',
      '1 tsp vanilla extract',
      '1 pinch fine sea salt'
    ],
    st: [
      'Whisk the tangzhong ingredients in a small pan over medium heat for 2 to 3 minutes until it thickens into a pudding-like paste. Cool to room temperature.',
      'Combine the flour, sugar, yeast and salt. Add the tangzhong, warm milk and egg and mix to a shaggy dough.',
      'Knead for 8 minutes, then add the softened butter a piece at a time, kneading 6 to 8 minutes more until the dough is smooth, elastic and passes the windowpane test.',
      'Prove, covered, for 1 to 1.5 hours until doubled.',
      'Roll out on a lightly floured surface to a 40 x 30 cm rectangle.',
      'Beat the filling ingredients together and spread over the dough, leaving a 2 cm border along one long edge.',
      'Roll up tightly from the opposite long edge, then cut into 12 pieces using unflavoured dental floss slid underneath and pulled crosswise — a knife squashes them.',
      'Arrange in a buttered 33 x 23 cm dish, cover, and refrigerate overnight, or prove at room temperature for 45 minutes.',
      'Take from the fridge and let them come to room temperature and finish proving for 60 to 90 minutes, until puffy and touching.',
      'Bake at 180°C / 355°F for 25 to 30 minutes until golden. Beat the frosting ingredients smooth and spread over while the rolls are still warm.'
    ],
    tips: [
      'Very soft, spreadable butter for the filling — melted butter runs out during baking and pools in the tin.',
      'Dental floss gives clean rounds. A knife compresses the spiral and they bake lopsided.',
      'Frost while warm for a glaze that soaks in, or fully cool for a thick, standing layer.'
    ],
    pair: ['Strong coffee, ideally black to cut the sweetness', 'Serve for brunch alongside fresh fruit', 'Follow with nothing'],
    store: 'Keeps 3 days covered at room temperature. Reheat individually for 20 seconds in a microwave. Unbaked shaped rolls freeze 1 month.',
    nut: [486, 7, 62, 24, 2, 32, 380]
  },

  'sourdough-bread': {
    rest: [1230, 'chilling'],
    d: 'An open-crumb country loaf with a blistered, mahogany crust and a genuine tang. Long autolyse, gentle handling and a Dutch oven are the three things that matter.',
    meta: 'Artisan sourdough with an open crumb and blistered crust, baked in a Dutch oven. Full schedule and timings included.',
    kw: ['sourdough bread recipe', 'artisan sourdough', 'open crumb sourdough', 'dutch oven bread'],
    why: 'A Dutch oven traps the loaf\'s own steam for the first twenty minutes, keeping the crust flexible so the bread can expand fully before setting — the same effect commercial steam-injected ovens produce. The long bulk fermentation builds both the acids that give sourdough its flavour and the gluten network that traps gas into large, irregular holes.',
    ing: [
      '100 g active sourdough starter, doubled and bubbly',
      '400 g strong white bread flour',
      '100 g wholemeal flour',
      '360 ml water at 28°C',
      '11 g fine sea salt',
      '2 tbsp rice flour, for dusting the banneton'
    ],
    st: [
      'Mix both flours with 340 ml of the water until no dry patches remain. Cover and rest for 1 hour — this autolyse hydrates the flour and begins gluten development with no work from you.',
      'Add the starter and squeeze it through the dough until fully incorporated. Rest 30 minutes.',
      'Add the salt and the remaining 20 ml of water and squeeze through again. The dough will loosen, then come back together.',
      'Over the next 3 hours, perform four sets of coil folds 45 minutes apart: wet your hands, lift the dough from the middle, let it stretch, and fold it under itself, rotating a quarter turn each time.',
      'Continue bulk fermentation at 24 to 26°C until the dough has risen by about 60%, feels airy and jiggly, and shows bubbles on the surface — typically 5 to 7 hours in total.',
      'Turn out gently onto a lightly floured surface and pre-shape into a loose round. Rest, uncovered, for 25 minutes.',
      'Shape into a tight boule or bâtard, building surface tension by dragging the dough toward you across the counter. Place seam-side up in a banneton dusted heavily with rice flour.',
      'Cover and refrigerate for 12 to 16 hours. The cold retard develops flavour and firms the dough for scoring.',
      'Heat a Dutch oven inside the oven at 250°C / 480°F for 45 minutes. Turn the loaf out onto baking paper, score decisively with a blade at a 30-degree angle, and lower it in.',
      'Bake covered for 20 minutes, then uncovered at 220°C / 430°F for 22 to 25 minutes until deep brown. Cool on a rack for at least 2 hours before cutting.'
    ],
    tips: [
      'Judge bulk fermentation by rise and feel, not the clock. Kitchen temperature changes everything.',
      'Score once, deeply and confidently. Tentative scoring produces a loaf that bursts at the side.',
      'Cutting into a hot loaf gives you a gummy crumb — the starch is still setting as it cools.'
    ],
    pair: ['Good butter and flaky salt', 'Serve with soup, cheese or olive oil', 'Use day-old slices for the best toast of your life'],
    store: 'Cut-side down on a board for 3 days, or freeze sliced for 3 months. Never refrigerate bread — it stales several times faster.',
    nut: [232, 8, 46, 1, 3, 1, 540]
  },

  'fudgy-brownies': {
    rest: [180, 'cooling'],
    d: 'Cocoa-based brownies with a paper-thin crackly top and a dense, fudgy middle. No chocolate to melt, no mixer needed, and they are better than most bakery versions.',
    meta: 'Fudgy cocoa brownies with a shiny crackle top and dense centre. One bowl, no melted chocolate, ready in 40 minutes.',
    kw: ['brownie recipe', 'fudgy brownies', 'cocoa brownies', 'easy chocolate dessert'],
    why: 'The shiny crackled top forms when sugar dissolves fully into hot fat and egg, creating a thin meringue-like layer that sets on baking — which is why the butter must be hot and the sugar beaten in vigorously. A low flour-to-fat ratio keeps the interior dense and fudgy rather than cakey.',
    ing: [
      '200 g unsalted butter',
      '300 g caster sugar',
      '100 g light brown sugar',
      '85 g unsweetened cocoa powder',
      '3 large eggs, plus 1 yolk, at room temperature',
      '2 tsp vanilla extract',
      '110 g plain flour',
      '1 tsp fine sea salt',
      '150 g dark chocolate, 70%, chopped',
      '1 tsp flaky sea salt, to finish'
    ],
    st: [
      'Line a 23 cm square tin with baking paper, leaving an overhang on two sides.',
      'Melt the butter in a saucepan until hot and just beginning to bubble, then take off the heat.',
      'Whisk in both sugars and the cocoa powder immediately, while the butter is still hot. The mixture will look grainy — that is correct at this stage.',
      'Let it cool for 5 minutes, then add the eggs and yolk one at a time, beating hard for 30 seconds after each.',
      'Now beat vigorously for a full 2 minutes with a wooden spoon. The batter will transform from grainy to thick, glossy and ribbon-like. This is what creates the crackly top.',
      'Stir in the vanilla, then fold in the flour and fine salt until just combined.',
      'Fold through two-thirds of the chopped chocolate and scrape into the tin. Scatter the rest over the top.',
      'Bake at 175°C / 345°F for 28 to 32 minutes, until the top is set and shiny and a skewer 5 cm from the edge comes out with moist crumbs. The centre should still be soft.',
      'Sprinkle with flaky salt and cool completely in the tin — at least 3 hours — before lifting out and cutting with a hot, dry knife.'
    ],
    tips: [
      'Do not skip the two minutes of beating. It is the entire mechanism behind the shiny top.',
      'Under-bake rather than over-bake. Brownies firm up considerably as they cool.',
      'Chill them for an hour before cutting for perfectly clean edges.'
    ],
    pair: ['A glass of cold milk or a strong espresso', 'Serve warm with vanilla ice cream and salted caramel', 'Follow a light meal'],
    store: 'Keeps 5 days in an airtight tin and freezes 3 months. The texture actually improves after a night.',
    nut: [312, 4, 38, 17, 3, 28, 190]
  },

  'new-york-cheesecake': {
    rest: [540, 'chilling'],
    d: 'Dense, tall and creamy with a faint tang, on a buttery biscuit base. The water bath and a slow cool in the switched-off oven are what stop it cracking.',
    meta: 'Classic New York cheesecake — dense, tall and crack-free thanks to a water bath and slow cooling. Worth the wait.',
    kw: ['new york cheesecake recipe', 'baked cheesecake', 'crack free cheesecake', 'classic dessert'],
    why: 'Cheesecake cracks when the outside sets and contracts faster than the centre. A water bath holds the oven humid and the edges gentle, and cooling the cake gradually in the switched-off oven means the whole thing contracts at the same rate. Room-temperature cream cheese is essential — cold cheese leaves lumps that no amount of beating removes.',
    ing: [
      '# For the base',
      '250 g digestive biscuits or graham crackers',
      '110 g unsalted butter, melted',
      '2 tbsp caster sugar',
      '0.25 tsp fine sea salt',
      '# For the filling',
      '900 g full-fat cream cheese, at room temperature',
      '250 g caster sugar',
      '3 tbsp cornflour',
      '4 large eggs, at room temperature',
      '1 large egg yolk',
      '200 ml soured cream',
      '120 ml double cream',
      '2 tsp vanilla extract',
      '1 lemon, zested',
      '1 tbsp lemon juice',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Blitz the biscuits to fine crumbs and mix with the melted butter, sugar and salt. Press firmly into the base and 3 cm up the sides of a 23 cm springform tin.',
      'Bake at 180°C / 355°F for 10 minutes, then cool. Wrap the outside of the tin in three layers of heavy foil to keep water out.',
      'Beat the cream cheese on low speed for 3 minutes until completely smooth, scraping the bowl often. Low speed throughout — beating air in causes cracks.',
      'Add the sugar, cornflour and salt and beat 2 minutes more.',
      'Add the eggs and yolk one at a time on the lowest speed, mixing only until each disappears.',
      'Mix in the soured cream, double cream, vanilla, lemon zest and juice until just combined. Do not overbeat.',
      'Pour into the tin, tap it firmly on the counter to release bubbles, and set it in a roasting tin. Pour in boiling water to a depth of 3 cm.',
      'Bake at 160°C / 320°F for 70 to 80 minutes, until the outer 5 cm is set and the centre still wobbles as a single mass.',
      'Turn the oven off, prop the door open with a wooden spoon, and leave the cheesecake inside for 1 hour.',
      'Cool to room temperature, then refrigerate at least 8 hours or overnight. Run a warm knife around the edge before releasing the tin.'
    ],
    tips: [
      'Everything at room temperature — cheese, eggs, cream. This one rule prevents most cheesecake problems.',
      'Beat on the lowest speed. Air bubbles expand in the oven and then collapse, taking the surface with them.',
      'Cut with a long knife dipped in hot water and wiped dry between every slice.'
    ],
    pair: ['A cup of strong coffee or a dessert wine', 'Serve plain, or with a sharp berry compote', 'Follows a light meal best'],
    store: 'Refrigerate up to 5 days, covered. Freezes 2 months whole or in slices; thaw overnight in the fridge.',
    nut: [612, 11, 48, 42, 1, 36, 480]
  },

  'apple-pie': {
    rest: [360, 'chilling'],
    d: 'A deep-dish pie with a properly crisp bottom crust and apples that hold their shape. Pre-cooking the filling is the unglamorous step that solves every apple pie problem at once.',
    meta: 'Deep-dish apple pie with a crisp bottom crust and apples that keep their shape. The pre-cooked filling method.',
    kw: ['apple pie recipe', 'homemade apple pie', 'flaky pie crust', 'classic american dessert'],
    why: 'Raw apples release a great deal of water in the oven, which both steams the bottom crust and leaves a gap under the lid as the fruit shrinks. Cooking the filling first drives that water off and, crucially, holds the apples at around 60°C long enough for their pectin to set, so the slices stay intact through baking.',
    ing: [
      '# For the pastry',
      '400 g plain flour',
      '280 g cold unsalted butter, cubed',
      '1 tbsp caster sugar',
      '1.5 tsp fine sea salt',
      '120 ml ice-cold water',
      '1 tbsp cider vinegar',
      '# For the filling',
      '1.4 kg mixed apples, such as Bramley and Braeburn, peeled and sliced 1 cm thick',
      '150 g light brown sugar',
      '3 tbsp cornflour',
      '2 tsp ground cinnamon',
      '0.5 tsp freshly grated nutmeg',
      '0.25 tsp ground allspice',
      '0.5 tsp fine sea salt',
      '2 tbsp lemon juice',
      '40 g unsalted butter',
      '# To finish',
      '1 large egg, beaten',
      '2 tbsp demerara sugar'
    ],
    st: [
      'Rub or pulse the butter into the flour, sugar and salt until you have a mix of coarse crumbs and flat, pea-sized butter pieces — those flat pieces become the flaky layers.',
      'Combine the ice water and vinegar and add just enough to bring the dough together in clumps. Divide into two discs, wrap and chill at least 2 hours.',
      'Toss the apples with the sugar, spices, salt and lemon juice and leave 30 minutes, then drain, reserving the juices.',
      'Cook the apples with the butter in a wide pan over medium heat for 8 to 10 minutes, stirring, until just tender at the edges but still holding their shape.',
      'Whisk the cornflour into the reserved juices, add to the pan and cook 2 minutes until thickened and glossy. Cool completely — this is essential.',
      'Roll one disc and line a 23 cm deep pie dish. Chill 20 minutes. Roll the second disc for the lid.',
      'Fill with the cooled apples, mounding slightly. Lay the lid over, trim, and crimp the edges firmly. Cut four steam vents.',
      'Chill the assembled pie for 30 minutes, then brush with egg and sprinkle with demerara.',
      'Bake on a preheated baking sheet at 220°C / 430°F for 20 minutes, then reduce to 190°C / 375°F for 40 to 45 minutes until deep golden and bubbling through the vents.',
      'Cool for at least 3 hours before cutting so the filling sets.'
    ],
    tips: [
      'Bake on a preheated baking sheet. Direct bottom heat is what crisps the base crust.',
      'Use two apple varieties: one that collapses for sauciness, one that holds for texture.',
      'Cooling for three hours feels absurd but a warm pie will run across the plate.'
    ],
    pair: ['A cup of coffee, or a glass of Calvados', 'Serve with vanilla ice cream or a wedge of sharp cheddar', 'Follows a roast dinner'],
    store: 'Keeps 2 days at room temperature, 4 refrigerated. Reheat slices at 180°C / 355°F for 12 minutes. Freezes 3 months.',
    nut: [548, 6, 68, 29, 5, 34, 420]
  },

  'key-lime-pie': {
    rest: [240, 'chilling'],
    d: 'Sharp, silky lime custard in a buttery graham crust, set by nothing but the chemical reaction between lime juice and condensed milk. Twenty minutes of work and no fuss.',
    meta: 'Tangy key lime pie with a silky set filling and buttery graham crust. Four filling ingredients, 35 minutes of work.',
    kw: ['key lime pie recipe', 'lime dessert', 'condensed milk pie', 'easy summer dessert'],
    why: 'Lime juice acidifies the condensed milk enough to denature its proteins, which link together and thicken the mixture without any heat — a process called acid-set curdling. Baking it briefly at a low temperature simply sets the egg yolks, sharpening the texture from soft to sliceable.',
    ing: [
      '# For the crust',
      '250 g digestive biscuits or graham crackers',
      '100 g unsalted butter, melted',
      '2 tbsp light brown sugar',
      '0.25 tsp fine sea salt',
      '# For the filling',
      '400 g sweetened condensed milk',
      '4 large egg yolks',
      '150 ml lime juice, from about 12 key limes or 6 regular limes',
      '2 tbsp lime zest',
      '0.25 tsp fine sea salt',
      '# For the topping',
      '300 ml double cream, cold',
      '2 tbsp icing sugar',
      '1 tsp vanilla extract',
      '1 lime, zested'
    ],
    st: [
      'Blitz the biscuits to fine crumbs, mix with the melted butter, sugar and salt, and press firmly into a 23 cm pie dish, up the sides.',
      'Bake at 175°C / 345°F for 10 minutes until fragrant and set. Leave the oven on.',
      'Whisk the egg yolks and lime zest together for 2 minutes until pale and slightly thickened — this releases the zest oils into the yolks.',
      'Whisk in the condensed milk and salt until smooth.',
      'Add the lime juice and whisk for 1 minute. The mixture will visibly thicken as the acid works on the milk proteins.',
      'Pour into the warm crust and bake for 15 minutes, until the filling is set at the edges with a slight wobble at the centre.',
      'Cool to room temperature, then refrigerate for at least 4 hours, ideally overnight.',
      'Whip the cream with the icing sugar and vanilla to soft peaks and spread or pipe over the chilled pie.',
      'Finish with lime zest and serve cold.'
    ],
    tips: [
      'Real key limes are smaller and more floral, but ordinary limes make an excellent pie. Bottled juice does not.',
      'Zest before juicing. It is nearly impossible afterwards.',
      'The pie needs a full overnight chill to reach its proper sliceable texture.'
    ],
    pair: ['A cold beer, oddly enough, or a glass of Prosecco', 'Serve after seafood or barbecue', 'Follow with strong coffee'],
    store: 'Refrigerate up to 3 days. Add the cream topping on the day of serving. Freezes 1 month without the cream.',
    nut: [486, 8, 52, 28, 1, 42, 320]
  },

  'red-velvet-cake': {
    rest: [150, 'cooling'],
    d: 'A tender buttermilk cake with a whisper of cocoa, a tang from vinegar and buttermilk, and a proper cream cheese frosting. The colour is the least interesting thing about it.',
    meta: 'Classic red velvet cake with a tender buttermilk crumb, subtle cocoa tang and cream cheese frosting.',
    kw: ['red velvet cake recipe', 'cream cheese frosting', 'layer cake recipe', 'classic american cake'],
    why: 'The acid from buttermilk and vinegar reacts with bicarbonate of soda for lift, and also keeps the crumb tender by limiting gluten development. Originally that same acid reddened the anthocyanins in unprocessed cocoa; modern Dutched cocoa does not react, which is why colouring is now added.',
    ing: [
      '# For the cake',
      '340 g plain flour',
      '400 g caster sugar',
      '2 tbsp unsweetened cocoa powder',
      '1.5 tsp bicarbonate of soda',
      '1 tsp fine sea salt',
      '2 large eggs, at room temperature',
      '300 ml buttermilk',
      '240 ml neutral oil',
      '2 tsp vanilla extract',
      '1 tbsp white vinegar',
      '2 tbsp red food colouring, gel or liquid',
      '# For the frosting',
      '400 g full-fat cream cheese, cold',
      '200 g unsalted butter, softened',
      '450 g icing sugar, sifted',
      '2 tsp vanilla extract',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Line and grease two 20 cm cake tins. Heat the oven to 175°C / 345°F.',
      'Whisk the flour, sugar, cocoa, bicarbonate of soda and salt together thoroughly.',
      'In a jug, whisk the eggs, buttermilk, oil, vanilla, vinegar and food colouring until uniform.',
      'Pour the wet into the dry and whisk for 45 seconds until smooth. Oil-based batters tolerate mixing better than butter cakes, but do not go beyond smooth.',
      'Divide between the tins and bake for 28 to 32 minutes, until a skewer comes out clean and the tops spring back.',
      'Cool in the tins 10 minutes, then turn out onto a rack and cool completely — at least 2 hours.',
      'For the frosting, beat the butter alone for 3 minutes until pale, then add the icing sugar in two additions and beat smooth.',
      'Add the cold cream cheese and beat on low for no more than 60 seconds. Over-beating cream cheese frosting makes it soupy.',
      'Level the cakes, sandwich with a third of the frosting, and cover the top and sides with the rest. Chill 30 minutes before slicing.'
    ],
    tips: [
      'Cold cream cheese, soft butter. This combination is the key to a frosting that holds its shape.',
      'Gel colouring gives a deeper red with far less liquid than the bottled kind.',
      'Level the domed tops with a serrated knife and eat the offcuts. That is the baker\'s fee.'
    ],
    pair: ['Coffee or a glass of cold milk', 'Serve at celebrations; it slices beautifully', 'Follow a light dinner'],
    store: 'Refrigerate 4 days in a covered container, bringing slices to room temperature 30 minutes before serving. Unfrosted layers freeze 3 months.',
    nut: [682, 7, 88, 35, 1, 68, 480]
  },

  'carrot-cake': {
    d: 'A properly spiced carrot cake, moist from oil and crushed pineapple, with walnuts for bite and a tangy cream cheese frosting. The kind that improves for two days.',
    meta: 'Moist spiced carrot cake with walnuts, crushed pineapple and tangy cream cheese frosting. Better on day two.',
    kw: ['carrot cake recipe', 'moist carrot cake', 'cream cheese frosting', 'spiced cake'],
    why: 'Oil stays liquid at room temperature where butter solidifies, which is why oil-based cakes read as moister even days later. Grated carrot and crushed pineapple both contribute water and pectin that keeps the crumb tender, while toasting the walnuts first prevents them going soft in the batter.',
    ing: [
      '# For the cake',
      '300 g plain flour',
      '2 tsp bicarbonate of soda',
      '1 tsp fine sea salt',
      '2.5 tsp ground cinnamon',
      '1 tsp ground ginger',
      '0.5 tsp freshly grated nutmeg',
      '0.25 tsp ground cloves',
      '250 g light brown sugar',
      '150 g caster sugar',
      '4 large eggs',
      '280 ml neutral oil',
      '2 tsp vanilla extract',
      '400 g carrots, finely grated',
      '150 g crushed pineapple, drained',
      '120 g walnuts, toasted and chopped',
      '# For the frosting',
      '400 g full-fat cream cheese, cold',
      '180 g unsalted butter, softened',
      '400 g icing sugar, sifted',
      '2 tsp vanilla extract',
      '0.5 tsp fine sea salt',
      '60 g walnut halves, to decorate'
    ],
    st: [
      'Line and grease two 20 cm cake tins. Heat the oven to 175°C / 345°F.',
      'Toast the walnuts on a tray for 8 minutes, then cool and chop.',
      'Whisk the flour, bicarbonate of soda, salt and all the spices together.',
      'In a large bowl, whisk both sugars with the eggs for 2 minutes until slightly thickened, then whisk in the oil and vanilla.',
      'Fold in the dry ingredients until only just combined.',
      'Fold through the grated carrot, drained pineapple and chopped walnuts.',
      'Divide between the tins and bake for 35 to 40 minutes, until a skewer comes out with a few moist crumbs.',
      'Cool in the tins 15 minutes, then turn out and cool completely.',
      'Beat the butter for 3 minutes, add the icing sugar in two additions, then beat in the cold cream cheese, vanilla and salt on low for under a minute.',
      'Sandwich and frost the cake, then finish with walnut halves around the edge. Chill 30 minutes to set before slicing.'
    ],
    tips: [
      'Grate the carrots on the fine side of a box grater. Food processor shreds are too coarse and stay crunchy.',
      'Squeeze the pineapple properly — excess juice makes the centre sink.',
      'The cake genuinely tastes better on the second day, once the spices have bloomed into the crumb.'
    ],
    pair: ['A cup of strong tea or coffee', 'Serve for afternoon tea or as a birthday cake', 'Follow a light meal'],
    store: 'Refrigerate 5 days covered; serve at room temperature. Unfrosted layers freeze 3 months.',
    nut: [724, 9, 84, 42, 3, 62, 520]
  },

  'chocolate-lava-cake': {
    d: 'Individual chocolate cakes with a liquid centre, from oven to table in twenty minutes. The whole trick is pulling them out while the middle is still raw batter.',
    meta: 'Molten chocolate lava cakes with a liquid centre in 25 minutes. Make-ahead friendly and reliably dramatic.',
    kw: ['chocolate lava cake recipe', 'molten chocolate cake', 'easy dessert', 'dinner party dessert'],
    why: 'There is no trick filling — the molten centre is simply under-baked batter. The cake sets from the outside in, so pulling it at the point where the edges are firm and the middle still wobbles leaves a liquid core. Ramekins buttered and dusted with cocoa rather than flour release cleanly without leaving a pale coating.',
    ing: [
      '200 g dark chocolate, 70% cocoa, chopped',
      '180 g unsalted butter, plus extra for the ramekins',
      '4 large eggs',
      '2 large egg yolks',
      '120 g caster sugar',
      '60 g plain flour',
      '2 tbsp unsweetened cocoa powder, for dusting',
      '1 tsp vanilla extract',
      '0.5 tsp fine sea salt',
      '2 tbsp icing sugar, to serve',
      '200 ml double cream, to serve'
    ],
    st: [
      'Butter six 175 ml ramekins thoroughly, brushing upward, then dust with cocoa powder and tap out the excess. Chill them.',
      'Melt the chocolate and butter together over a pan of barely simmering water, stirring until smooth. Cool for 5 minutes.',
      'Whisk the eggs, yolks, sugar, vanilla and salt for 3 to 4 minutes until pale, thick and roughly doubled in volume.',
      'Fold a third of the egg mixture into the chocolate to loosen, then fold in the rest gently.',
      'Sift over the flour and fold until just combined, with no dry streaks.',
      'Divide between the ramekins, filling them three-quarters full. At this point they can be refrigerated for up to 24 hours.',
      'Bake at 200°C / 390°F on a preheated tray for 11 to 13 minutes — 14 to 15 from chilled — until the edges are set and risen but the centre still jiggles distinctly.',
      'Rest for 60 seconds, then run a knife around the edge, invert onto plates and lift the ramekin away.',
      'Dust with icing sugar and serve immediately with cold cream.'
    ],
    tips: [
      'Bake one as a test the first time. Ovens vary and 60 seconds is the difference between molten and merely soft.',
      'Assemble ahead and bake straight from the fridge — this is the ideal dinner party dessert.',
      'Cocoa, not flour, for dusting the ramekins. Flour leaves an unattractive white film.'
    ],
    pair: ['A tawny port or an espresso', 'Serve with cold cream or vanilla ice cream', 'Follows a light main course'],
    store: 'Unbaked, filled ramekins keep 24 hours refrigerated or 1 month frozen. Baked lava cakes must be eaten immediately.',
    nut: [568, 9, 46, 40, 4, 34, 220]
  },

  'pumpkin-pie': {
    rest: [270, 'chilling'],
    d: 'A silky custard pie with proper spice and a blind-baked base that stays crisp. Cooking the purée down first concentrates it and eliminates the watery edge that spoils most versions.',
    meta: 'Classic pumpkin pie with a silky spiced custard and crisp blind-baked crust. The purée-reduction trick for deeper flavour.',
    kw: ['pumpkin pie recipe', 'thanksgiving pie', 'spiced custard pie', 'holiday dessert'],
    why: 'Tinned pumpkin carries a lot of water, and cooking it down with the spices before adding dairy both concentrates the flavour and blooms the fat-soluble spice compounds. A fully blind-baked, egg-sealed shell keeps the custard from soaking into the pastry during its long, slow bake.',
    ing: [
      '# For the crust',
      '250 g plain flour',
      '170 g cold unsalted butter, cubed',
      '1 tbsp caster sugar',
      '1 tsp fine sea salt',
      '75 ml ice-cold water',
      '# For the filling',
      '425 g pumpkin purée',
      '150 g light brown sugar',
      '50 g caster sugar',
      '2 tsp ground cinnamon',
      '1 tsp ground ginger',
      '0.5 tsp freshly grated nutmeg',
      '0.25 tsp ground cloves',
      '0.5 tsp fine sea salt',
      '250 ml double cream',
      '120 ml whole milk',
      '3 large eggs, plus 1 yolk',
      '1 tbsp bourbon or vanilla extract'
    ],
    st: [
      'Rub the butter into the flour, sugar and salt until it holds pea-sized pieces, add the ice water, and bring together. Chill 1 hour.',
      'Roll out and line a 23 cm pie dish, leaving an overhang. Crimp the edge and freeze for 30 minutes.',
      'Line with foil and baking beans and bake at 200°C / 390°F for 20 minutes. Remove the beans and bake 12 minutes more until the base is dry and sandy.',
      'Brush the hot shell with a little beaten egg and return to the oven for 2 minutes to seal it. Reduce the oven to 160°C / 320°F.',
      'Meanwhile, cook the pumpkin purée with both sugars, all the spices and the salt in a wide pan over medium heat for 6 to 8 minutes, stirring, until it darkens, thickens and begins to sputter.',
      'Take off the heat and whisk in the cream and milk, then cool for 5 minutes.',
      'Whisk in the eggs, yolk and bourbon, then strain through a sieve for a perfectly smooth custard.',
      'Pour into the warm shell and bake for 45 to 55 minutes, until the outer edge is set and the central 8 cm wobbles as one piece.',
      'Cool completely on a rack — at least 3 hours — then refrigerate 2 hours before serving with whipped cream.'
    ],
    tips: [
      'Do not overbake. A cracked pumpkin pie has gone past its setting point and turns grainy.',
      'Pour the filling into a warm shell — cold filling in a cold shell takes far longer and soaks in.',
      'Use pumpkin purée, not pumpkin pie filling, which is already sweetened and spiced.'
    ],
    pair: ['Coffee, or a glass of bourbon', 'Serve with lightly whipped cream', 'The traditional close to Thanksgiving dinner'],
    store: 'Refrigerate 3 days. Freeze up to 1 month, though the crust softens slightly. Serve at cool room temperature.',
    nut: [462, 7, 48, 27, 3, 28, 380]
  },

  'gingerbread-cookies': {
    rest: [120, 'chilling'],
    d: 'Cut-out gingerbread that holds a sharp edge, tastes strongly of spice and molasses, and stays chewy rather than turning to rubble. The dough rolls between paper so it never needs extra flour.',
    meta: 'Chewy cut-out gingerbread cookies that hold sharp edges and taste properly of spice and molasses. Ideal for decorating.',
    kw: ['gingerbread cookies recipe', 'christmas cookies', 'cut out cookies', 'holiday baking'],
    why: 'Rolling the dough between sheets of baking paper avoids working in extra flour, which is what makes gingerbread dry and brittle. Chilling the cut shapes just before baking sets the butter so the edges hold rather than spreading, which is essential for anything you plan to ice.',
    ing: [
      '# For the cookies',
      '420 g plain flour',
      '1 tbsp ground ginger',
      '2 tsp ground cinnamon',
      '0.5 tsp ground cloves',
      '0.5 tsp freshly grated nutmeg',
      '1 tsp bicarbonate of soda',
      '0.75 tsp fine sea salt',
      '170 g unsalted butter, softened',
      '150 g dark brown sugar',
      '1 large egg',
      '170 g black treacle or molasses',
      '1 tsp vanilla extract',
      '# For the royal icing',
      '1 large egg white',
      '250 g icing sugar, sifted',
      '0.5 tsp lemon juice'
    ],
    st: [
      'Whisk the flour, all the spices, bicarbonate of soda and salt together.',
      'Beat the butter and brown sugar for 3 minutes until light, then beat in the egg, treacle and vanilla. The mixture may look split — it will come back together.',
      'Add the dry ingredients and mix on low until just combined into a soft, sticky dough.',
      'Divide in two, flatten into discs between sheets of baking paper, and roll each to 5 mm thick while still in the paper.',
      'Chill the rolled sheets flat for at least 2 hours, or overnight.',
      'Peel off the top paper and cut out shapes, transferring them to lined trays with a palette knife. Re-roll offcuts between paper.',
      'Freeze the cut shapes on their trays for 10 minutes — this is what keeps the edges sharp.',
      'Bake at 175°C / 345°F for 8 to 10 minutes, until the edges are set and the centres still look slightly soft. They firm up as they cool.',
      'Cool completely on a rack. Whisk the egg white, icing sugar and lemon juice to a pipeable royal icing and decorate.'
    ],
    tips: [
      'Rolling the dough before chilling, rather than after, saves you fighting a rock-hard disc later.',
      'Bake shapes of similar size together so they finish at the same moment.',
      'For crisp gingerbread, roll to 3 mm and bake 2 minutes longer.'
    ],
    pair: ['Mulled wine or hot chocolate', 'Serve through the festive season with tea', 'Make extras for gifts'],
    store: 'Keeps 2 weeks in an airtight tin. Undecorated cookies freeze 3 months; the dough freezes 3 months rolled and wrapped.',
    nut: [168, 2, 30, 5, 1, 16, 120]
  }
};
