/**
 * Weekly Delight — recipe catalog, volume sixteen. Italian.
 *
 * Sixty-three Italian recipes were already published, and they are the ones an
 * English-speaking kitchen already cooks: carbonara, bolognese, cacio e pepe,
 * the pizzas, tiramisu. What that list has almost none of is regional cooking.
 *
 * Italy did not become one country until 1861 and its food never really did.
 * So this volume is organised by region rather than by course: the Ligurian
 * chickpea and pesto dishes, the Roman quinto quarto offal, the Sicilian
 * sweet-sour and its Arab-descended pastry, the Sardinian pastas that exist
 * nowhere else, the Venetian sweet-sour fish, and the alpine north where the
 * cooking is closer to Austria than to Naples.
 *
 * Checked against the other 1,011 first: affogato and the negroni were already
 * published and are not repeated. Nor are carbonara, amatriciana, gricia,
 * cacio e pepe, puttanesca, arrabbiata, vongole, pesto genovese, ossobuco,
 * saltimbocca, vitello tonnato, caponata, panzanella, ribollita, tiramisu,
 * panna cotta, cannoli, biscotti or torta caprese.
 *
 * Twelve antipasti, twenty-one pastas and rice, seventeen mains and
 * vegetables, seventeen sweets and drinks.
 *
 * Unrated, for the reason given in catalog-4.js.
 *
 * c(slug, title, cuisine, category, difficulty, prepMin, cookMin, servings,
 *   rating, reviews, dietTags, badges, imageQuery?)
 */

function c(slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews, tags, badges, imageQuery) {
  return {
    slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews,
    tags: tags || [],
    badges: badges || [],
    imageQuery: imageQuery || title
  };
}

module.exports = [
  /* Antipasti */
  c('bagna-cauda', 'Bagna Cauda', 'Italian', 'Appetizers', 'Easy', 15, 40, 6, 0, 0, ['Gluten-Free'], ['new'], 'Bagna cauda piedmont anchovy garlic dip'),
  c('carpaccio', 'Carpaccio di Manzo', 'Italian', 'Appetizers', 'Medium', 25, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'Carpaccio beef thin slices rocket parmesan'),
  c('baccala-mantecato', 'Baccalà Mantecato', 'Italian', 'Appetizers', 'Medium', 25, 30, 6, 0, 0, ['Gluten-Free'], ['new'], 'Baccala mantecato venetian whipped salt cod'),
  c('sarde-in-saor', 'Sarde in Saor', 'Italian', 'Appetizers', 'Medium', 30, 30, 6, 0, 0, ['Dairy-Free'], ['new'], 'Sarde in saor venetian sardines onions raisins'),
  c('insalata-di-mare', 'Insalata di Mare', 'Italian', 'Appetizers', 'Medium', 30, 25, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Insalata di mare seafood salad lemon'),
  c('fritto-misto', 'Fritto Misto', 'Italian', 'Appetizers', 'Medium', 25, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'Fritto misto fried seafood lemon'),
  c('carciofi-alla-romana', 'Carciofi alla Romana', 'Italian', 'Appetizers', 'Medium', 30, 40, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Carciofi alla romana braised artichokes mint'),
  c('carciofi-alla-giudia', 'Carciofi alla Giudia', 'Italian', 'Appetizers', 'Hard', 30, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Carciofi alla giudia fried flattened artichoke'),
  c('fiori-di-zucca', 'Fiori di Zucca Fritti', 'Italian', 'Appetizers', 'Medium', 25, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Fiori di zucca fried courgette flowers'),
  c('suppli', 'Supplì', 'Italian', 'Appetizers', 'Medium', 30, 30, 8, 0, 0, [], ['new'], 'Suppli roman rice croquettes mozzarella'),
  c('panelle', 'Panelle', 'Italian', 'Appetizers', 'Easy', 20, 25, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Panelle palermo chickpea fritters'),
  c('giardiniera', 'Giardiniera', 'Italian', 'Appetizers', 'Easy', 30, 15, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Giardiniera italian pickled vegetables jar'),

  /* Pasta and rice */
  c('tagliatelle-al-ragu', 'Tagliatelle al Ragù', 'Italian', 'Dinner', 'Medium', 30, 210, 6, 0, 0, [], ['new'], 'Tagliatelle al ragu bolognese fresh pasta'),
  c('tortellini-in-brodo', 'Tortellini in Brodo', 'Italian', 'Dinner', 'Hard', 90, 180, 6, 0, 0, [], ['new'], 'Tortellini in brodo emilia broth pasta'),
  c('agnolotti', 'Agnolotti del Plin', 'Italian', 'Dinner', 'Hard', 75, 60, 6, 0, 0, [], ['new'], 'Agnolotti del plin piedmont pinched pasta'),
  c('culurgiones', 'Culurgiones', 'Italian', 'Dinner', 'Hard', 70, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Culurgiones sardinian pasta wheat ear pleat'),
  c('malloreddus', 'Malloreddus alla Campidanese', 'Italian', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'Malloreddus sardinian gnocchetti sausage saffron'),
  c('strozzapreti', 'Strozzapreti alla Boscaiola', 'Italian', 'Dinner', 'Medium', 25, 35, 6, 0, 0, [], ['new'], 'Strozzapreti boscaiola mushrooms sausage cream'),
  c('pici-cacio-e-pepe', 'Pici all\'Aglione', 'Italian', 'Dinner', 'Medium', 40, 45, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pici all aglione tuscan hand rolled pasta garlic'),
  c('pappardelle-al-cinghiale', 'Pappardelle al Cinghiale', 'Italian', 'Dinner', 'Medium', 35, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'Pappardelle cinghiale wild boar ragu tuscan'),
  c('trofie-al-pesto', 'Trofie al Pesto', 'Italian', 'Dinner', 'Medium', 35, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Trofie al pesto ligurian potato green beans'),
  c('pizzoccheri', 'Pizzoccheri della Valtellina', 'Italian', 'Dinner', 'Medium', 30, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'Pizzoccheri buckwheat pasta cabbage cheese'),
  c('pasta-alla-genovese', 'Pasta alla Genovese', 'Italian', 'Dinner', 'Easy', 25, 240, 6, 0, 0, ['Dairy-Free'], ['new'], 'Pasta alla genovese neapolitan onion beef ragu'),
  c('pasta-e-ceci', 'Pasta e Ceci', 'Italian', 'Lunch', 'Easy', 15, 45, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pasta e ceci roman chickpea pasta soup'),
  c('pasta-con-le-sarde', 'Pasta con le Sarde', 'Italian', 'Dinner', 'Medium', 30, 35, 6, 0, 0, ['Dairy-Free'], ['new'], 'Pasta con le sarde sicilian fennel sardines'),
  c('busiate-trapanese', 'Busiate al Pesto Trapanese', 'Italian', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Busiate pesto trapanese almond tomato sicily'),
  c('anelletti-al-forno', 'Anelletti al Forno', 'Italian', 'Dinner', 'Medium', 35, 70, 8, 0, 0, [], ['new'], 'Anelletti al forno palermo baked ring pasta'),
  c('fregola', 'Fregola con Arselle', 'Italian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'Fregola con arselle sardinian pasta clams'),
  c('risotto-ai-funghi', 'Risotto ai Funghi Porcini', 'Italian', 'Dinner', 'Medium', 25, 35, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Risotto ai funghi porcini mushroom creamy'),
  c('risotto-al-nero', 'Risotto al Nero di Seppia', 'Italian', 'Dinner', 'Medium', 30, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Risotto nero di seppia black squid ink venice'),
  c('risi-e-bisi', 'Risi e Bisi', 'Italian', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'Risi e bisi venetian rice peas pancetta'),
  c('canederli', 'Canederli', 'Italian', 'Dinner', 'Medium', 30, 25, 6, 0, 0, [], ['new'], 'Canederli tyrolean bread dumplings broth'),
  c('testaroli', 'Testaroli al Pesto', 'Italian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'Testaroli lunigiana pancake pasta pesto'),

  /* Mains and vegetables */
  c('brasato-al-barolo', 'Brasato al Barolo', 'Italian', 'Dinner', 'Medium', 30, 210, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Brasato al barolo piedmont beef red wine'),
  c('bollito-misto', 'Bollito Misto', 'Italian', 'Dinner', 'Medium', 40, 210, 8, 0, 0, ['Dairy-Free'], ['new'], 'Bollito misto boiled meats salsa verde'),
  c('coda-alla-vaccinara', 'Coda alla Vaccinara', 'Italian', 'Dinner', 'Easy', 30, 240, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Coda alla vaccinara roman oxtail celery'),
  c('trippa-alla-romana', 'Trippa alla Romana', 'Italian', 'Dinner', 'Medium', 25, 150, 6, 0, 0, ['Gluten-Free'], ['new'], 'Trippa alla romana tripe tomato mint pecorino'),
  c('porchetta', 'Porchetta', 'Italian', 'Dinner', 'Hard', 45, 240, 10, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Porchetta rolled pork belly fennel crackling'),
  c('polpette-al-sugo', 'Polpette al Sugo', 'Italian', 'Dinner', 'Easy', 30, 60, 6, 0, 0, [], ['new'], 'Polpette al sugo italian meatballs tomato'),
  c('involtini-di-manzo', 'Involtini di Manzo', 'Italian', 'Dinner', 'Medium', 30, 75, 4, 0, 0, [], ['new'], 'Involtini di manzo beef rolls tomato sauce'),
  c('scaloppine-al-limone', 'Scaloppine al Limone', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'Scaloppine al limone veal lemon butter sauce'),
  c('cotoletta-alla-milanese', 'Cotoletta alla Milanese', 'Italian', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'Cotoletta alla milanese breaded veal bone'),
  c('cacciucco', 'Cacciucco', 'Italian', 'Dinner', 'Medium', 35, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Cacciucco livorno seafood stew tomato bread'),
  c('brodetto', 'Brodetto all\'Anconetana', 'Italian', 'Dinner', 'Medium', 30, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'Brodetto anconetana adriatic fish stew vinegar'),
  c('bagnun', 'Bagnùn di Acciughe', 'Italian', 'Lunch', 'Easy', 20, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bagnun ligurian anchovy tomato soup bread'),
  c('sarde-a-beccafico', 'Sarde a Beccafico', 'Italian', 'Dinner', 'Medium', 35, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Sarde a beccafico stuffed rolled sardines sicily'),
  c('parmigiana-bianca', 'Parmigiana Bianca', 'Italian', 'Dinner', 'Medium', 35, 55, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Parmigiana bianca white aubergine bake no tomato'),
  c('peperonata', 'Peperonata', 'Italian', 'Dinner', 'Easy', 20, 50, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Peperonata stewed peppers onion tomato'),
  c('farinata', 'Farinata', 'Italian', 'Appetizers', 'Easy', 15, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Farinata ligurian chickpea pancake copper pan'),
  c('torta-pasqualina', 'Torta Pasqualina', 'Italian', 'Dinner', 'Hard', 50, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'Torta pasqualina ligurian chard egg pie layers'),

  /* Sweets and drinks */
  c('sfogliatella', 'Sfogliatella Riccia', 'Italian', 'Desserts', 'Hard', 70, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'Sfogliatella riccia naples shell pastry ricotta'),
  c('baba-napoletano', 'Babà Napoletano', 'Italian', 'Desserts', 'Hard', 40, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'Baba napoletano rum soaked mushroom cake'),
  c('pastiera', 'Pastiera Napoletana', 'Italian', 'Desserts', 'Hard', 60, 75, 12, 0, 0, ['Vegetarian'], ['new'], 'Pastiera napoletana wheat ricotta easter tart'),
  c('cassata-siciliana', 'Cassata Siciliana', 'Italian', 'Desserts', 'Hard', 60, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Cassata siciliana ricotta marzipan candied fruit'),
  c('cuccidati', 'Cuccidati', 'Italian', 'Baking', 'Hard', 60, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Cuccidati sicilian fig cookies christmas'),
  c('struffoli', 'Struffoli', 'Italian', 'Desserts', 'Medium', 40, 25, 10, 0, 0, ['Vegetarian'], ['new'], 'Struffoli neapolitan honey dough balls'),
  c('zuppa-inglese', 'Zuppa Inglese', 'Italian', 'Desserts', 'Medium', 35, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Zuppa inglese alchermes custard trifle'),
  c('sbrisolona', 'Torta Sbrisolona', 'Italian', 'Baking', 'Easy', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Sbrisolona mantua crumbly almond cornmeal cake'),
  c('crostata-di-marmellata', 'Crostata di Marmellata', 'Italian', 'Baking', 'Easy', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Crostata di marmellata jam tart lattice'),
  c('ciambellone', 'Ciambellone', 'Italian', 'Baking', 'Easy', 15, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'Ciambellone italian ring cake breakfast'),
  c('colomba', 'Colomba Pasquale', 'Italian', 'Baking', 'Hard', 50, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Colomba pasquale easter dove bread almond'),
  c('pandoro', 'Pandoro', 'Italian', 'Baking', 'Hard', 60, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Pandoro verona star cake icing sugar'),
  c('amaretti', 'Amaretti Morbidi', 'Italian', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Amaretti morbidi soft almond biscuits cracked'),
  c('pizzelle', 'Pizzelle', 'Italian', 'Baking', 'Easy', 20, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Pizzelle abruzzo anise waffle cookies'),
  c('maritozzo', 'Maritozzo', 'Italian', 'Baking', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Maritozzo roman sweet bun whipped cream'),
  c('granita-di-caffe', 'Granita di Caffè', 'Italian', 'Desserts', 'Easy', 15, 10, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Granita di caffe sicilian coffee ice brioche'),
  c('bellini', 'Bellini', 'Italian', 'Drinks', 'Easy', 10, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Bellini white peach prosecco harry bar venice')
];
