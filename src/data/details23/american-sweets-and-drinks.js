'use strict';

/**
 * Volume twenty-three — American desserts and drinks by region.
 *
 * New Orleans (beignets, pralines, bananas Foster), New England (Indian
 * pudding), Pennsylvania (shoofly pie), the South (chess pie, sweet potato
 * pie, hummingbird cake, the mint julep), St. Louis (gooey butter cake) and
 * the soda fountain (the banana split and the root beer float).
 */

module.exports = {
  'beignets': {
    d: 'Squares of soft yeast dough fried until they puff, then buried in powdered sugar. The New Orleans coffee-stand pastry.',
    meta: 'New Orleans beignets: squares of soft yeast dough fried until puffed and golden, then buried in powdered sugar. Eat them hot with a cup of coffee.',
    kw: ['beignets', 'new orleans beignets', 'beignets recipe', 'homemade beignets', 'how to make beignets'],
    why: 'A beignet, in New Orleans, is a square of soft yeast dough, fried until it puffs into a hollow pillow and buried in powdered sugar, and it is eaten hot, with a cup of chicory coffee, at the cafés of the French Quarter. It is a French pastry that arrived with the city\'s Creole cooks. The dough is a soft, enriched one, and it is rolled thin, about 6 mm, since the beignet puffs to several times its thickness in the oil, and it is fried at 180°C, so that it browns evenly and cooks through. The sugar is dusted on thickly, and it is impossible to eat one without making a mess.',
    ing: [
      '350 g strong white bread flour, plus extra for dusting',
      '7 g (2 tsp) instant yeast',
      '50 g caster sugar',
      '0.5 tsp fine sea salt',
      '1 large egg',
      '180 ml lukewarm whole milk',
      '30 g unsalted butter, melted',
      '1 litre vegetable oil, for frying',
      '100 g icing sugar, for dusting'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt in a large bowl. Add the egg, milk and melted butter and mix to a soft dough. Knead on a lightly floured surface for 6 minutes, until smooth and slightly sticky.',
      'Put the dough in an oiled bowl, cover, and leave in a warm place for 1 hour, until doubled in size.',
      'Roll the dough out on a floured surface to 6 mm thick and cut it into 24 squares of about 5 cm. Cover loosely.',
      'Heat the oil in a deep, heavy pan to 180°C / 350°F.',
      'Fry the squares 4 or 5 at a time for 1 to 2 minutes per side, until puffed and golden brown. Drain on paper towels.',
      'Dust generously with icing sugar through a sieve and eat immediately, while hot.'
    ],
    tips: [
      'Roll the dough thin, about 6 mm. The beignets puff up to several times that in the oil.',
      'Keep the oil at 180°C. Cooler oil makes greasy beignets, and hotter oil browns them before they cook through.',
      'Dust with sugar at the last minute, when they are still hot and the sugar clings.'
    ],
    pair: ['Café au lait', 'Hot chocolate', 'Fresh berries'],
    store: 'Best eaten within minutes. Keep the dough covered in the fridge up to 1 day.',
    nut: [317, 6, 53, 9, 1, 20, 200],
    rest: [60, 'Rising']
  },

  'indian-pudding': {
    d: 'Cornmeal cooked in milk with molasses and warm spices, then baked for two hours until dark and creamy. A New England pudding served warm with ice cream.',
    meta: 'New England Indian pudding: cornmeal cooked in milk with molasses, ginger and cinnamon and baked slowly until dark, creamy and spoonable. Serve warm.',
    kw: ['indian pudding', 'new england indian pudding', 'baked indian pudding', 'cornmeal molasses pudding', 'indian pudding recipe'],
    why: 'Indian pudding is one of the oldest desserts of New England: cornmeal, milk and molasses baked slowly until it turns dark and creamy, and the name is a colonial one, given because the settlers used the Native American cornmeal for what was, in England, a wheat-flour pudding. It is thickened on the stove first, so that the cornmeal is soft, and then baked for two hours at a low temperature, which turns the milk and molasses to a deep caramel colour and flavour. The trick of the recipe is the cold milk poured on top just before baking, which is not stirred in but forms a creamy layer as the pudding cooks. It is served warm, with vanilla ice cream.',
    ing: [
      '1 litre whole milk, divided',
      '80 g fine yellow cornmeal',
      '80 ml molasses (not blackstrap)',
      '60 g dark brown sugar',
      '30 g unsalted butter, plus extra for the dish',
      '1 large egg, beaten',
      '1 tsp ground ginger',
      '0.5 tsp ground cinnamon',
      '0.25 tsp ground nutmeg',
      '0.5 tsp fine sea salt',
      'Vanilla ice cream, to serve'
    ],
    st: [
      'Heat the oven to 150°C / 300°F and butter a 1.5-litre baking dish.',
      'Heat 700 ml of the milk in a heavy saucepan until steaming. Whisk in the cornmeal gradually, then cook over medium-low heat, stirring, for 8 to 10 minutes, until thick.',
      'Take the pan off the heat and stir in the molasses, sugar, butter, ginger, cinnamon, nutmeg and salt. Whisk a ladleful of the hot mixture into the egg, then stir the egg into the pan.',
      'Pour into the dish. Pour the remaining 300 ml of cold milk gently over the top and do not stir.',
      'Bake for 2 hours, until the pudding is set around the edges and the top is dark brown.',
      'Stand for 15 minutes and serve warm, with vanilla ice cream.'
    ],
    tips: [
      'Whisk the cornmeal in gradually. It lumps if it goes in all at once.',
      'Pour the cold milk over the top and do not stir. It makes the creamy layer.',
      'Use plain molasses, not blackstrap. Blackstrap is bitter.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'A cup of coffee'],
    store: 'Keep covered in the fridge up to 4 days and reheat in the microwave.',
    nut: [295, 7, 42, 11, 1, 31, 400]
  },

  'apple-brown-betty': {
    d: 'Spiced apples layered with buttered breadcrumbs and baked until the top is golden and the apples are soft. An old American colonial pudding.',
    meta: 'Apple brown betty: layers of spiced apple slices and buttered breadcrumbs baked until golden on top and soft inside. An old American pudding, served warm.',
    kw: ['apple brown betty', 'brown betty', 'apple brown betty recipe', 'baked apple brown betty', 'old fashioned apple brown betty'],
    why: 'Apple brown betty is an old American pudding, a colonial way to use stale bread: sliced apples, sugar and spice, layered with buttered breadcrumbs and baked, so the crumbs soak up the apple juice and turn soft in the middle while the top layer bakes crisp and golden. It is not a crumble, as its crumbs are layered through the fruit and not sprinkled on top, and it is not a pudding of the sponge kind, as there is no batter. The dish is covered for the first half of baking, so the apples steam soft, and uncovered for the second, so the top browns. Tart apples, such as Bramley or Granny Smith, hold their shape.',
    ing: [
      '900 g cooking apples (about 6), peeled, cored and sliced 5 mm thick',
      '100 g dark brown sugar',
      '1 tsp ground cinnamon',
      '0.25 tsp ground nutmeg',
      '2 tbsp lemon juice',
      '100 g fresh white breadcrumbs',
      '60 g unsalted butter, melted',
      'Vanilla ice cream or cream, to serve'
    ],
    st: [
      'Heat the oven to 180°C / 350°F and butter a 1.5-litre baking dish.',
      'Toss the apple slices with the sugar, cinnamon, nutmeg and lemon juice in a large bowl.',
      'Toss the breadcrumbs with the melted butter until they are evenly coated.',
      'Spread a third of the crumbs in the dish, cover with half the apples, then another third of the crumbs and the rest of the apples. Finish with the remaining crumbs.',
      'Cover with foil and bake for 30 minutes. Remove the foil and bake for 15 minutes more, until the top is golden and the apples are tender.',
      'Stand for 10 minutes, then serve warm with ice cream or cream.'
    ],
    tips: [
      'Use tart apples such as Bramley or Granny Smith. Sweet apples turn to mush.',
      'Keep the crumbs buttery. Dry crumbs stay pale and sandy.',
      'Cover for the first 30 minutes. It steams the apples soft before the top browns.'
    ],
    pair: ['Vanilla ice cream', 'Pouring cream', 'Custard'],
    store: 'Keep covered in the fridge up to 3 days and reheat in a 160°C oven for 15 minutes.',
    nut: [280, 2, 50, 8, 4, 32, 200]
  },

  'shoofly-pie': {
    d: 'A Pennsylvania Dutch pie of dark molasses filling under a buttery brown sugar crumb topping. Sweet, sticky and best with strong coffee.',
    meta: 'Shoofly pie: a Pennsylvania Dutch pie with a gooey dark molasses filling under a buttery brown sugar crumb topping. Serve it with strong coffee.',
    kw: ['shoofly pie', 'pennsylvania dutch shoofly pie', 'shoofly pie recipe', 'molasses crumb pie', 'wet bottom shoofly pie'],
    why: 'Shoofly pie is a Pennsylvania Dutch pie, made from molasses, and it is said to be called that because the sweet, sticky filling drew flies that had to be shooed away from the cooling pie. It has two layers: a soft, dark molasses filling and a topping of buttery brown sugar crumbs, and the crumbs sink slightly into the filling as it bakes. This is the wet-bottom version, with a gooey, almost custardy layer under the crumbs, and it is the one most people prefer. The filling is thinned with hot water and set with a little bicarbonate of soda, which makes it foam and rise, then settle, as it cools. The pie is very sweet and is best with strong black coffee.',
    ing: [
      '# For the pastry',
      '190 g plain flour',
      '0.5 tsp fine sea salt',
      '1 tbsp caster sugar',
      '115 g cold unsalted butter, cubed',
      '4 to 5 tbsp ice water',
      '# For the crumbs',
      '150 g plain flour',
      '100 g dark brown sugar',
      '0.5 tsp ground cinnamon',
      '60 g cold unsalted butter, cubed',
      '# For the filling',
      '175 ml unsulphured molasses',
      '175 ml boiling water',
      '1 tsp bicarbonate of soda',
      '1 large egg, beaten'
    ],
    st: [
      'Pulse the flour, salt, sugar and butter in a food processor until it resembles coarse crumbs. Add the water a tablespoon at a time, pulsing until the dough clumps. Shape into a disc, wrap and chill for at least 30 minutes.',
      'Heat the oven to 200°C / 400°F with a baking tray on the middle shelf.',
      'Roll the pastry to 3 mm and line a 23 cm pie dish. Crimp the edge.',
      'Rub the butter into the flour, brown sugar and cinnamon for the crumbs until it looks like coarse crumbs.',
      'Stir the molasses and boiling water together, then stir in the bicarbonate of soda, which will foam, and the egg.',
      'Pour the filling into the pastry shell and scatter the crumbs evenly over the top.',
      'Set the pie on the hot tray and bake for 10 minutes. Lower the oven to 175°C / 350°F and bake for 30 to 35 minutes more, until the crumbs are golden and the filling is set with a slight wobble.',
      'Cool on a wire rack for at least 2 hours before slicing.'
    ],
    tips: [
      'Use plain unsulphured molasses, not blackstrap. Blackstrap makes the pie bitter.',
      'Pour the filling in before you scatter the crumbs, and scatter them gently so they do not sink.',
      'Let the pie cool. The filling sets as it cools and is too runny to slice hot.'
    ],
    pair: ['Strong black coffee', 'Whipped cream', 'Vanilla ice cream'],
    store: 'Keep covered at room temperature up to 3 days.',
    nut: [450, 5, 67, 18, 1, 34, 300],
    rest: [150, 'Chilling and cooling']
  },

  'sweet-potato-pie': {
    d: 'A smooth, spiced custard of roasted sweet potato in a crisp pastry shell. The Southern Thanksgiving and Christmas pie.',
    meta: 'Southern sweet potato pie: a smooth, spiced custard of roasted sweet potato, brown sugar and evaporated milk in a blind-baked shell. A holiday favourite.',
    kw: ['sweet potato pie', 'southern sweet potato pie', 'sweet potato pie recipe', 'old fashioned sweet potato pie', 'how to make sweet potato pie'],
    why: 'Sweet potato pie is a Southern holiday dessert, and it belongs to the African American table, where it has been a Thanksgiving and Christmas pie for generations. It is more like a custard than a pumpkin pie, smoother and sweeter and more delicately spiced with cinnamon, nutmeg and ginger. The sweet potatoes are roasted whole, not boiled, so their flavour concentrates and they do not take on water, and the flesh is beaten smooth. The shell is blind-baked before the filling goes in, so that its base is crisp, and the pie is baked until it is just set. It is cooled for at least 3 hours before slicing.',
    ing: [
      '# For the pastry',
      '190 g plain flour',
      '0.5 tsp fine sea salt',
      '1 tbsp caster sugar',
      '115 g cold unsalted butter, cubed',
      '4 to 5 tbsp ice water',
      '# For the filling',
      '2 large sweet potatoes (about 600 g)',
      '100 g dark brown sugar',
      '2 large eggs',
      '120 ml evaporated milk',
      '60 g unsalted butter, melted',
      '1 tsp vanilla extract',
      '1 tsp ground cinnamon',
      '0.5 tsp ground nutmeg',
      '0.25 tsp ground ginger',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Prick the sweet potatoes with a fork and roast them on a tray for 45 to 50 minutes, until very soft.',
      'Meanwhile, rub the butter into the flour, salt and sugar, mix in the ice water and shape into a disc. Wrap and chill for at least 30 minutes.',
      'Cool the roasted potatoes for 15 minutes, then scoop out the flesh and beat until smooth. You need about 400 g.',
      'Lower the oven to 175°C / 350°F. Roll out the pastry and line a 23 cm pie dish. Line with baking paper and fill with baking beans.',
      'Blind bake for 15 minutes, remove the paper and beans and bake for 5 minutes more.',
      'Beat the sugar, eggs, evaporated milk, melted butter, vanilla, spices and salt into the sweet potato until smooth.',
      'Pour the filling into the warm shell and bake for 40 to 45 minutes, until the edges are set and the centre has a slight wobble.',
      'Cool on a wire rack for at least 3 hours before slicing.'
    ],
    tips: [
      'Roast the sweet potatoes, do not boil them. Boiled sweet potato is watery and makes a loose filling.',
      'Beat the flesh until smooth, or push it through a sieve, to remove the stringy fibres.',
      'Blind-bake the shell. Without it, the base is pale and soft.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'A cup of coffee'],
    store: 'Keep covered in the fridge up to 4 days. Serve cold or at room temperature.',
    nut: [372, 6, 42, 20, 2, 18, 250],
    rest: [210, 'Chilling and cooling']
  },

  'chess-pie': {
    d: 'A Southern pie with a filling of butter, sugar and eggs, brightened with a spoonful of vinegar, baked until golden with a crackled top. It is very sweet.',
    meta: 'Southern chess pie: butter, sugar, eggs and a little cornmeal and vinegar, baked in a flaky shell until golden with a crackled top. A very sweet classic.',
    kw: ['chess pie', 'southern chess pie', 'chess pie recipe', 'old fashioned chess pie', 'how to make chess pie'],
    why: 'Chess pie is a Southern pie with a filling of just butter, sugar, eggs and a spoonful of cornmeal, baked until the top is golden and crackled and the inside is a firm, smooth, sweet custard. Nobody is sure about the name. One story says it came from "just pie", spoken with a Southern accent, another that the pies were kept in a pie chest. A spoonful of vinegar is the traditional and essential ingredient, because it cuts the sweetness, and a little cornmeal gives the filling body and a slight grain. The filling is not cooked first and is poured raw into an unbaked shell.',
    ing: [
      '# For the pastry',
      '190 g plain flour',
      '0.5 tsp fine sea salt',
      '1 tbsp caster sugar',
      '115 g cold unsalted butter, cubed',
      '4 to 5 tbsp ice water',
      '# For the filling',
      '115 g unsalted butter, melted and cooled',
      '250 g caster sugar',
      '3 large eggs',
      '1 tbsp fine cornmeal',
      '1 tbsp white vinegar',
      '1 tsp vanilla extract',
      '60 ml whole milk',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Pulse the flour, salt, sugar and butter in a food processor until it looks like coarse crumbs. Add the water a tablespoon at a time until the dough clumps. Shape into a disc, wrap and chill for at least 30 minutes.',
      'Heat the oven to 175°C / 350°F. Roll the pastry to 3 mm thick and line a 23 cm pie dish. Crimp the edge and prick the base with a fork.',
      'Whisk the sugar, cornmeal and salt in a bowl. Whisk in the eggs, melted butter, vinegar, vanilla and milk until smooth.',
      'Pour the filling into the unbaked shell.',
      'Bake for 40 to 45 minutes, until the top is golden and crackled and the centre has only a slight wobble.',
      'Cool on a wire rack for at least 3 hours before slicing.'
    ],
    tips: [
      'Do not skip the vinegar. It is the only thing that keeps the pie from tasting flat and sugary.',
      'Cool the melted butter before whisking it into the eggs, or it will scramble them.',
      'Serve small slices. The pie is very rich.'
    ],
    pair: ['Whipped cream', 'Fresh berries', 'Black coffee'],
    store: 'Keep covered in the fridge up to 4 days. Serve at room temperature.',
    nut: [449, 5, 51, 25, 1, 32, 250],
    rest: [210, 'Chilling and cooling']
  },

  'hummingbird-cake': {
    d: 'A tall, moist Southern layer cake with banana, pineapple and pecans, covered in cream cheese frosting. There is no mixer needed for the batter.',
    meta: 'Hummingbird cake: a moist Southern layer cake of banana, crushed pineapple and pecans, sandwiched and covered with a thick cream cheese frosting.',
    kw: ['hummingbird cake', 'southern hummingbird cake', 'hummingbird cake recipe', 'banana pineapple pecan cake', 'hummingbird cake with cream cheese frosting'],
    why: 'Hummingbird cake is the Southern layer cake of banana, pineapple and pecans, made famous when Southern Living magazine printed a recipe for it in 1978, and it is a cake that tastes better than it should. It is very moist, because it is made with oil and not butter, and with mashed banana and crushed pineapple, juice included. It is spiced lightly with cinnamon, and the pecans are chopped and stirred in. The batter is stirred by hand, in two bowls, and no mixer is needed. The cream cheese frosting is thick, tangy and sweet, and it keeps the layers from being cloying. The cake keeps well and is better on the second day.',
    ing: [
      '# For the cake',
      '300 g plain flour',
      '200 g caster sugar',
      '1 tsp bicarbonate of soda',
      '1 tsp ground cinnamon',
      '0.5 tsp fine sea salt',
      '3 large eggs',
      '240 ml vegetable oil',
      '1 tsp vanilla extract',
      '1 tin (227 g) crushed pineapple in juice, not drained',
      '2 ripe bananas (about 200 g), mashed',
      '100 g pecans, chopped',
      '# For the frosting',
      '225 g full-fat cream cheese, softened',
      '115 g unsalted butter, softened',
      '450 g icing sugar, sifted',
      '1 tsp vanilla extract',
      '30 g pecans, chopped and toasted, to decorate'
    ],
    st: [
      'Heat the oven to 175°C / 350°F and grease and line two 20 cm round cake tins.',
      'Whisk the flour, sugar, bicarbonate of soda, cinnamon and salt in a large bowl.',
      'In another bowl whisk the eggs, oil and vanilla, then stir in the pineapple with its juice and the bananas.',
      'Pour the wet mixture into the dry and stir just until combined. Fold in the pecans.',
      'Divide the batter between the tins and bake for 30 to 35 minutes, until a skewer comes out clean.',
      'Cool in the tins for 10 minutes, then turn out onto wire racks and cool completely, at least 1 hour.',
      'Beat the cream cheese and butter until smooth. Beat in the icing sugar a little at a time, then the vanilla, until fluffy.',
      'Sandwich the layers with a third of the frosting, cover the top and sides with the rest and press the toasted pecans onto the top.'
    ],
    tips: [
      'Stir the batter only until combined. Overmixing makes the cake tough.',
      'Cool the layers completely before frosting them. Warm cake melts the frosting.',
      'Chill the frosting for 15 minutes if it is soft. It spreads better when it is firm.'
    ],
    pair: ['A cup of tea', 'Strong coffee', 'A glass of milk'],
    store: 'Keep covered in the fridge up to 5 days. Bring to room temperature before serving. Freeze slices for 2 months.',
    nut: [730, 6, 82, 42, 2, 59, 400],
    rest: [60, 'Cooling']
  },

  'banana-split': {
    d: 'A banana split lengthwise, three scoops of ice cream, chocolate sauce, strawberries, pineapple, cream, nuts and a cherry. The soda-fountain sundae.',
    meta: 'Banana split: a banana halved lengthwise, three scoops of ice cream, warm chocolate sauce, strawberries, pineapple, whipped cream, nuts and a cherry on top.',
    kw: ['banana split', 'banana split recipe', 'classic banana split', 'homemade banana split with chocolate sauce', 'how to make a banana split'],
    why: 'The banana split is an American soda-fountain sundae, a banana cut in half lengthwise, laid in a long dish with three scoops of ice cream between the halves, and covered with sauces, whipped cream, nuts and a cherry. It is said to have been invented in Latrobe, Pennsylvania, in 1904 by a pharmacist, David Strickler, and it became a lasting American treat. The classic has vanilla, chocolate and strawberry ice cream, and three toppings, chocolate, strawberry and pineapple. The chocolate sauce here is a simple ganache, warm and glossy, and it takes 5 minutes. Use a firm ripe banana, since a soft one collapses when split.',
    ing: [
      '4 firm ripe bananas',
      '12 small scoops ice cream (4 vanilla, 4 chocolate and 4 strawberry)',
      '# For the chocolate sauce',
      '100 g dark chocolate, chopped',
      '100 ml double cream',
      '1 tbsp golden syrup',
      '# To top',
      '100 g strawberries, sliced',
      '100 g tinned pineapple pieces, drained',
      '100 ml double cream, whipped',
      '30 g roasted peanuts, chopped',
      '4 glacé cherries'
    ],
    st: [
      'Make the sauce: heat the cream and golden syrup in a small saucepan until steaming. Pour over the chocolate in a bowl, leave for 2 minutes, then stir until smooth and glossy. Keep warm.',
      'Peel the bananas and split each in half lengthways. Lay two halves in each of 4 long dishes, cut sides up.',
      'Put three scoops of ice cream in a row between the banana halves in each dish, one of each flavour.',
      'Spoon the warm chocolate sauce over the vanilla, the strawberries over the strawberry ice cream and the pineapple over the chocolate.',
      'Top with the whipped cream and peanuts, put a cherry on each and serve at once.'
    ],
    tips: [
      'Use firm ripe bananas with a little green left. Very ripe ones fall apart when split.',
      'Warm the chocolate sauce. It sets when it meets the ice cream and makes a fudgy shell.',
      'Assemble at the last minute. The ice cream melts quickly.'
    ],
    pair: ['A cup of coffee', 'A glass of milk', 'Wafers'],
    store: 'Assemble and eat at once. Keep the chocolate sauce in the fridge up to 1 week and warm gently.',
    nut: [705, 9, 75, 41, 6, 55, 100]
  },

  'root-beer-float': {
    d: 'Scoops of vanilla ice cream in a tall glass, covered with cold root beer. The fizz turns the top of the ice cream into a creamy foam.',
    meta: 'Root beer float: three scoops of vanilla ice cream in a chilled tall glass, topped with cold root beer that fizzes into a creamy foam. Serve with a straw.',
    kw: ['root beer float', 'root beer float recipe', 'black cow root beer float', 'ice cream root beer float', 'how to make a root beer float'],
    why: 'A root beer float is a scoop or two of vanilla ice cream in a tall glass, topped with cold root beer, and it is a soda-fountain classic said to have been invented in Colorado in the 1890s. The interest is in the reaction. The bubbles of the root beer nucleate on the surface of the ice cream, so the drink foams, and the ice cream and the root beer combine to form a creamy foam that tastes of vanilla and sassafras-like spice. The root beer is poured slowly down the side of the glass, so that the foam does not overflow, and the glass is chilled beforehand so that the ice cream melts slowly. A float is drunk and eaten at the same time.',
    ing: [
      '3 scoops (about 150 g) vanilla ice cream',
      '350 ml cold root beer',
      'Whipped cream, to top'
    ],
    st: [
      'Put a tall glass in the freezer for 10 minutes to chill.',
      'Put the scoops of ice cream in the glass.',
      'Pour the root beer slowly down the inside of the glass. The foam will rise, so stop and let it settle, then top up.',
      'Add a swirl of whipped cream and serve at once with a straw and a long spoon.'
    ],
    tips: [
      'Chill the glass and the root beer. Warm ingredients make an overflowing foam and a thin drink.',
      'Pour the root beer slowly, in stages, down the side of the glass.',
      'Use a good vanilla ice cream. A plain one is the whole flavour of the float.'
    ],
    pair: ['Salted pretzels', 'A burger', 'French fries'],
    store: 'Make to order. A float does not keep.',
    nut: [447, 5, 73, 15, 0, 68, 100]
  },

  'bananas-foster': {
    d: 'Bananas cooked in butter and brown sugar, flamed with rum and spooned over vanilla ice cream. A New Orleans dessert, finished at the table.',
    meta: 'Bananas Foster: bananas cooked in butter, brown sugar and cinnamon, flamed with rum and spooned over vanilla ice cream. A New Orleans dessert in 18 minutes.',
    kw: ['bananas foster', 'bananas foster recipe', 'new orleans bananas foster', 'flambe bananas with rum', 'how to make bananas foster'],
    why: 'Bananas Foster was invented in 1951 at Brennan\'s restaurant in New Orleans, named for a friend of the owner, and it has been set alight at the table ever since. It is a very simple dish, bananas cooked briefly in a sauce of butter, brown sugar and cinnamon, then flamed with rum and spooned over vanilla ice cream, and the flame is more than theatre: it burns off the harshness of the alcohol and caramelises the sugar in the sauce. The bananas should be firm, just ripe, so that they hold their shape. The dish takes 8 minutes to cook, and it must be served at once, while the sauce is hot and the ice cream is cold.',
    ing: [
      '4 firm ripe bananas',
      '60 g unsalted butter',
      '100 g dark brown sugar',
      '0.5 tsp ground cinnamon',
      '60 ml dark rum',
      '8 scoops vanilla ice cream'
    ],
    st: [
      'Peel the bananas, halve them lengthways and then across.',
      'Melt the butter in a wide frying pan over medium heat. Stir in the brown sugar and cinnamon and cook for 2 minutes, until smooth and bubbling.',
      'Add the bananas and cook for 1 to 2 minutes per side, until just soft and glazed.',
      'Take the pan off the heat, turn off any extractor fan and pour the rum around the edge. Return the pan to the heat and tilt it to catch the flame or light the sauce with a long match. Shake the pan gently for about 30 seconds until the flames die down.',
      'Spoon the bananas and sauce over the scoops of ice cream and serve immediately.'
    ],
    tips: [
      'Use firm, just-ripe bananas. Soft ones turn to mush in the pan.',
      'Take the pan off the heat before adding the rum, and never pour it straight from the bottle into a hot pan.',
      'Keep your hair and sleeves away from the pan, and stand back when the rum lights.'
    ],
    pair: ['Vanilla ice cream', 'Strong black coffee', 'Pecan shortbread'],
    store: 'Best eaten at once. Do not keep the bananas, since they turn dark and soft.',
    nut: [640, 6, 85, 28, 3, 59, 120]
  },

  'mint-julep': {
    d: 'Bourbon, sugar and fresh mint over a mound of crushed ice in a frosted cup. The drink of the Kentucky Derby.',
    meta: 'Mint julep: bourbon, sugar and gently pressed fresh mint over a dome of crushed ice in a frosted cup. The classic drink of the Kentucky Derby.',
    kw: ['mint julep', 'mint julep recipe', 'kentucky derby mint julep', 'classic bourbon mint julep', 'how to make a mint julep'],
    why: 'The mint julep is a Southern drink of bourbon, sugar, mint and crushed ice, and it is the drink of the Kentucky Derby, where over 100,000 are served each year. The mint is pressed gently against the sugar, not shredded, since bruising it releases its oils and fragrance without bitterness, and the drink is built in a metal cup that frosts on the outside as the ice chills it. Crushed ice is the essential part: it dilutes the bourbon at just the right rate and packs into a dome. The sprig of mint on top is the point of the garnish. It sits by your nose as you drink, and the smell of it is half of the flavour.',
    ing: [
      '10 fresh mint leaves, plus a sprig to garnish',
      '2 tsp caster sugar',
      '2 tsp water',
      '60 ml bourbon',
      'Crushed ice'
    ],
    st: [
      'Put the mint leaves, sugar and water in a julep cup or tumbler and press gently with a spoon or muddler, just to bruise the leaves and dissolve the sugar. Do not shred them.',
      'Add the bourbon and fill the cup with crushed ice.',
      'Stir with a long spoon until the outside of the cup frosts, then top up with more ice to make a dome.',
      'Slap the mint sprig against your hand to release its aroma, set it in the ice and serve with a short straw placed close to it.'
    ],
    tips: [
      'Press the mint gently. Shredded leaves make the drink bitter and grassy.',
      'Use crushed ice, made by wrapping ice cubes in a tea towel and hitting them with a rolling pin.',
      'Hold the cup by the rim or base so your hand does not warm the frost.'
    ],
    pair: ['Southern fried chicken', 'Pimento cheese', 'Country ham biscuits'],
    store: 'Make to order. It does not keep.',
    nut: [165, 0, 8, 0, 0, 8, 2]
  },

  'gooey-butter-cake': {
    d: 'A thin, buttery cake base under a rich, gooey layer of cream cheese, butter and sugar, dusted with icing sugar. The St. Louis coffee cake.',
    meta: 'St. Louis gooey butter cake: a thin, buttery cake base under a rich, gooey layer of cream cheese, eggs and sugar, dusted with icing sugar. Cut into squares.',
    kw: ['gooey butter cake', 'st louis gooey butter cake', 'gooey butter cake recipe', 'cream cheese gooey butter cake', 'how to make gooey butter cake'],
    why: 'Gooey butter cake is a St. Louis speciality, a coffee cake with a thin, dense, buttery base and a topping so rich and soft that it stays gooey in the middle even when cooked. It is said to have come about by accident in the 1930s, when a baker got the proportions wrong and the cake did not rise, and it was sold anyway. The base is a simple dough of flour, butter and egg pressed into the tin, and the topping is beaten from cream cheese, eggs, butter and icing sugar, and poured on. It is baked until the edges are golden and the centre still wobbles, and it firms as it cools, though it never sets solid. It is very sweet, and it is cut into small squares.',
    ing: [
      '# For the base',
      '190 g plain flour',
      '100 g caster sugar',
      '1 tsp baking powder',
      '0.25 tsp fine sea salt',
      '115 g unsalted butter, melted',
      '1 large egg',
      '2 tbsp whole milk',
      '1 tsp vanilla extract',
      '# For the gooey layer',
      '225 g cream cheese, softened',
      '2 large eggs',
      '75 g unsalted butter, melted',
      '300 g icing sugar, sifted, plus 20 g for dusting',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 175°C / 350°F and line a 23 x 33 cm tin with baking paper.',
      'Stir the flour, sugar, baking powder and salt together in a bowl. Add the melted butter, egg, milk and vanilla and mix to a soft, thick dough. Press it evenly into the tin.',
      'Beat the cream cheese until smooth. Beat in the eggs one at a time, then the melted butter. Add the icing sugar gradually with the vanilla and beat until smooth.',
      'Pour the mixture over the base and level the top.',
      'Bake for 35 to 40 minutes, until the edges are golden and the top is golden with a slight wobble in the centre.',
      'Cool in the tin for at least 1 hour, dust with the extra icing sugar and cut into 16 squares.'
    ],
    tips: [
      'Bake until the centre still wobbles. It sets as it cools and stays gooey.',
      'Beat the cream cheese until it is completely smooth before adding the sugar. Lumps do not disappear.',
      'Cut with a hot knife, and wipe it between squares.'
    ],
    pair: ['Strong black coffee', 'A glass of milk', 'Fresh berries'],
    store: 'Keep in the fridge up to 4 days and bring to room temperature before serving. Freeze for 2 months.',
    nut: [291, 3, 36, 15, 0, 27, 200],
    rest: [60, 'Cooling']
  },

  'pralines': {
    d: 'Soft, creamy pecan candies made from brown sugar, cream and butter, dropped in spoonfuls to set. The New Orleans sweet-shop classic.',
    meta: 'New Orleans pralines: soft, creamy pecan candies made by boiling sugar, cream and butter to 115°C, beating until thick and dropping in spoonfuls to set.',
    kw: ['pralines', 'new orleans pralines', 'pecan pralines', 'creamy pecan pralines recipe', 'how to make pralines'],
    why: 'The New Orleans praline is a creamy, sugary, pecan-studded candy, sold in the shops of the French Quarter, and it is a descendant of the French praline, which was made from almonds and hard caramel. In Louisiana, pecans replaced the almonds, and cream and butter were added, which changed the candy from a brittle to a soft, crumbly, fudge-like disc that dissolves on the tongue. The sugar syrup is boiled to 115°C, the soft-ball stage, and then beaten off the heat, which makes tiny sugar crystals form and gives the praline its creamy, slightly grainy texture. The candy sets quickly, so it is dropped onto paper in spoonfuls as soon as it thickens.',
    ing: [
      '200 g pecan halves',
      '200 g granulated sugar',
      '100 g dark brown sugar',
      '120 ml double cream',
      '30 g unsalted butter',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt'
    ],
    st: [
      'Line two baking trays with parchment paper.',
      'Put both sugars, the cream, butter and salt in a heavy saucepan and stir over medium heat until the sugar dissolves. Bring to a boil and cook, stirring occasionally, for 8 to 10 minutes, until a sugar thermometer reads 115°C / 240°F.',
      'Take the pan off the heat and stir in the pecans and vanilla. Beat with a wooden spoon for 1 to 2 minutes, until the mixture thickens and loses its gloss.',
      'Working quickly, drop tablespoons of the mixture onto the paper, spacing them apart, and leave them to set for 30 minutes.'
    ],
    tips: [
      'Use a thermometer and take the pan off at 115°C. Lower gives soft, sticky pralines and higher gives hard ones.',
      'Beat until the mixture loses its shine. That is the point at which the sugar crystallises.',
      'Work quickly once it thickens. It sets in a minute or two.'
    ],
    pair: ['Strong coffee', 'Vanilla ice cream', 'A glass of bourbon'],
    store: 'Keep in an airtight container between layers of parchment paper up to 1 week.',
    nut: [205, 1, 21, 13, 1, 19, 25]
  }
};
