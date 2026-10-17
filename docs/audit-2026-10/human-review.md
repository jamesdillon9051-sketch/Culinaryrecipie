# Items for human review

Generated with the October 2026 audit. Each list is reproducible from the repository: the command that produced it is given.

## 1. Diet labels removed because an ingredient breaks them with no alternative (36 labels, 29 recipes)

Restore a label only by changing the recipe so it is true (and say so in the method), never by editing the audit. Lentil soup kept Vegetarian (it lost Vegan and Dairy-Free to its butter or ghee).

| Recipe | Removed | Line that breaks it |
| --- | --- | --- |
| [zaru-soba](https://weeklydelight.com/recipes/zaru-soba/) | Vegan | for the tsuyu :: dashi |
| [agedashi-tofu](https://weeklydelight.com/recipes/agedashi-tofu/) | Vegetarian | for the broth :: dashi |
| [michelada](https://weeklydelight.com/recipes/michelada/) | Vegan | for each drink :: worcestershire sauce |
| [welsh-rarebit](https://weeklydelight.com/recipes/welsh-rarebit/) | Vegetarian | worcestershire sauce |
| [olivier-salad](https://weeklydelight.com/recipes/olivier-salad/) | Vegetarian | cooked ham or bologna, diced |
| [lentil-soup](https://weeklydelight.com/recipes/lentil-soup/) | Vegan, Dairy-Free | for the sizzling butter :: butter or ghee |
| [bloody-mary](https://weeklydelight.com/recipes/bloody-mary/) | Vegan | for the drink :: worcestershire sauce |
| [bratwurst](https://weeklydelight.com/recipes/bratwurst/) | Gluten-Free | german lager or wheat beer |
| [papa-a-la-huancaina](https://weeklydelight.com/recipes/papa-a-la-huancaina/) | Gluten-Free | cream crackers |
| [hiyayakko](https://weeklydelight.com/recipes/hiyayakko/) | Vegan, Vegetarian | bonito flakes |
| [obatzda](https://weeklydelight.com/recipes/obatzda/) | Gluten-Free | wheat beer |
| [sea-bream-with-fennel](https://weeklydelight.com/recipes/sea-bream-with-fennel/) | Vegetarian, Vegan | whole sea bream, about 800 g, gutted and scaled |
| [gefilte-fish](https://weeklydelight.com/recipes/gefilte-fish/) | Gluten-Free | fish mixture :: matzo meal |
| [skillet-gnocchi-with-spinach](https://weeklydelight.com/recipes/skillet-gnocchi-with-spinach/) | Gluten-Free | shop-bought potato gnocchi |
| [huevos-divorciados](https://weeklydelight.com/recipes/huevos-divorciados/) | Dairy-Free | crumbled queso fresco |
| [no-bake-banana-pudding](https://weeklydelight.com/recipes/no-bake-banana-pudding/) | Gluten-Free | vanilla wafers |
| [no-bake-trifle](https://weeklydelight.com/recipes/no-bake-trifle/) | Gluten-Free | sponge fingers |
| [nutella-french-toast](https://weeklydelight.com/recipes/nutella-french-toast/) | Gluten-Free | brioche, 2 cm thick, about 320 g |
| [overnight-french-toast](https://weeklydelight.com/recipes/overnight-french-toast/) | Gluten-Free | day-old brioche, cut into 3 cm cubes |
| [dorade-royale](https://weeklydelight.com/recipes/dorade-royale/) | Vegetarian, Vegan | whole sea bream, about 700 g, scaled and gutted |
| [charlotte-aux-fraises](https://weeklydelight.com/recipes/charlotte-aux-fraises/) | Gluten-Free | sponge fingers, about 24 |
| [coniglio-alla-cacciatora](https://weeklydelight.com/recipes/coniglio-alla-cacciatora/) | Vegetarian, Vegan | rabbit, jointed |
| [spaghetti-alla-bottarga](https://weeklydelight.com/recipes/spaghetti-alla-bottarga/) | Vegetarian, Vegan | bottarga di muggine, grated |
| [tiramisu-alle-fragole](https://weeklydelight.com/recipes/tiramisu-alle-fragole/) | Gluten-Free | sponge fingers |
| [montaditos](https://weeklydelight.com/recipes/montaditos/) | Dairy-Free | manchego, shaved |
| [conejo-al-ajillo](https://weeklydelight.com/recipes/conejo-al-ajillo/) | Vegetarian | rabbit, jointed |
| [dorada-a-la-sal](https://weeklydelight.com/recipes/dorada-a-la-sal/) | Vegetarian | whole sea bream, scaled and gutted |
| [maltese-rabbit-stew](https://weeklydelight.com/recipes/maltese-rabbit-stew/) | Vegetarian, Vegan | rabbit, jointed |
| [hyderabadi-biryani](https://weeklydelight.com/recipes/hyderabadi-biryani/) | Gluten-Free | to finish :: plain flour and water, for the seal |

Two ingredient lines were clarified rather than the label removed, because the method already serves the item on the side: moules marinière ("1 baguette, to serve") and perfect scrambled eggs ("2 slices buttered toast, to serve"); both are now Gluten-free only when served without the bread. The focaccia step now reads "Stir the honey or sugar into the water".

## 2. Method steps that name only the non-compliant side (115)

`node tools/diet-audit.js --conditional`. The label already shows its condition; rewording the step ("stir in the honey or sugar") makes the method agree with it. Not changed automatically, because each is a change to a method.

| Recipe | Step | Word | Label |
| --- | --- | --- | --- |
| miso-soup | 2 | katsuobushi | Vegan |
| miso-soup | 2 | katsuobushi | Vegetarian |
| thai-fried-rice | 7 | fish | Vegetarian |
| lamb-kofta-kebabs | 9 | flatbreads | Gluten-Free |
| shakshuka | 8 | bread | Gluten-Free |
| gambas-al-ajillo | 7 | bread | Gluten-Free |
| tteokbokki | 4 | fish | Vegetarian |
| borscht | 9 | rye | Gluten-Free |
| moroccan-chicken-tagine | 9 | couscous | Gluten-Free |
| menemen | 7 | bread | Gluten-Free |
| rajma | 2 | ghee | Vegan |
| rajma | 6 | ghee | Vegan |
| rajma | 2 | ghee | Dairy-Free |
| rajma | 6 | ghee | Dairy-Free |
| nachos | 4 | beef | Vegetarian |
| nachos | 5 | beef | Vegetarian |
| refried-beans | 5 | lard | Vegetarian |
| bagels | 9 | egg | Vegan |
| cornbread | 1 | bacon | Vegetarian |
| mujadara | 9 | yoghurt | Vegan |
| mujadara | 9 | yoghurt | Dairy-Free |
| kibbeh | 9 | butter | Dairy-Free |
| manakish-zaatar | 9 | labneh | Vegan |
| manakish-zaatar | 9 | labneh | Dairy-Free |
| salmorejo | 9 | jamón | Vegetarian |
| gado-gado | 9 | crackers | Gluten-Free |
| blini | 10 | salmon | Vegetarian |
| gravlax | 10 | rye | Gluten-Free |
| acai-bowl | 3 | honey | Vegan |
| acai-bowl | 9 | honey | Vegan |
| pasta-e-fagioli | 2 | pancetta | Vegetarian |
| horchata | 4 | milk | Vegan |
| pulled-pork | 9 | buns | Gluten-Free |
| cawl | 9 | bread | Gluten-Free |
| raclette | 2 | ham | Vegetarian |
| belgian-frites | 4 | dripping | Vegetarian |
| norwegian-fish-soup | 9 | bread | Gluten-Free |
| salmon-soup-lohikeitto | 9 | rye | Gluten-Free |
| bigos | 10 | rye | Gluten-Free |
| mici | 8 | bread | Gluten-Free |
| lobio | 10 | cornbread | Gluten-Free |
| turkish-lentil-soup | 9 | bread | Gluten-Free |
| shish-taouk | 8 | flatbreads | Gluten-Free |
| joojeh-kabab | 10 | flatbread | Gluten-Free |
| harees | 7 | ghee | Dairy-Free |
| harees | 8 | ghee | Dairy-Free |
| chicken-tagine-olives | 10 | bread | Gluten-Free |
| shakshuka-tunisian | 9 | flatbread | Gluten-Free |
| nihari | 2 | ghee | Dairy-Free |
| nihari | 9 | ghee | Dairy-Free |
| seekh-kebab | 9 | naan | Gluten-Free |
| chapli-kebab | 10 | naan | Gluten-Free |
| roti-canai | 1 | milk | Vegan |
| roti-canai | 6 | ghee | Vegan |
| roti-canai | 9 | ghee | Vegan |
| provoleta | 9 | bread | Gluten-Free |
| rice-and-peas | 3 | butter | Vegan |
| callaloo | 10 | butter | Vegan |
| moin-moin | 3 | crayfish | Vegan |
| moin-moin | 3 | crayfish | Vegetarian |
| waakye | 9 | spaghetti | Gluten-Free |
| kalua-pork | 11 | macaroni | Gluten-Free |
| smoothie-bowl | 2 | yoghurt | Vegan |
| smoothie-bowl | 7 | honey | Vegan |
| savoury-cottage-cheese-bowl | 6 | toast | Gluten-Free |
| ful-medames | 7 | eggs | Vegan |
| mechouia-salad | 7 | tuna | Vegan |
| mechouia-salad | 7 | tuna | Vegetarian |
| basque-cheesecake | 5 | flour | Gluten-Free |
| latkes | 9 | cream | Dairy-Free |
| bacon-wrapped-asparagus | 7 | parmigiano | Dairy-Free |
| baked-avocado-eggs | 6 | bacon | Vegetarian |
| kibbeh-bil-sanieh | 7 | butter | Dairy-Free |
| riz-a-djaj | 3 | butter | Dairy-Free |
| riz-a-djaj | 6 | butter | Dairy-Free |
| freekeh-djaj | 6 | butter | Dairy-Free |
| shorbet-ads | 4 | pitta | Gluten-Free |
| hamam-mahshi | 1 | butter | Dairy-Free |
| hamam-mahshi | 6 | butter | Dairy-Free |
| sobia | 5 | milk | Vegan |
| sobia | 5 | milk | Dairy-Free |
| bsissa | 6 | honey | Vegan |
| ojja | 7 | bread | Gluten-Free |
| masfouf | 7 | buttermilk | Vegan |
| masfouf | 7 | buttermilk | Dairy-Free |
| poireaux-vinaigrette | 7 | egg | Vegan |
| garbure | 7 | bread | Gluten-Free |
| lotte-a-l-armoricaine | 7 | butter | Dairy-Free |
| piperade | 7 | ham | Vegetarian |
| piperade | 7 | bread | Gluten-Free |
| panelle | 7 | rolls | Gluten-Free |
| angels-on-horseback | 6 | butter | Dairy-Free |
| grilled-kippers | 5 | bread | Gluten-Free |
| grilled-kippers | 7 | bread | Gluten-Free |
| pan-haggerty | 1 | dripping | Vegetarian |
| spotted-dick | 2 | suet | Vegetarian |
| lemon-posset | 8 | shortbread | Gluten-Free |
| scrambled-eggs | 8 | toast | Gluten-Free |
| chicken-inasal | 1 | soy sauce | Gluten-Free |
| jerk-pork | 1 | soy sauce | Gluten-Free |
| baleadas | 1 | lard | Vegetarian |
| moules-mariniere | 10 | baguette | Gluten-Free |
| hiyayakko | 9 | soy sauce | Gluten-Free |
| whitebait-fritters | 7 | bread | Gluten-Free |
| gooseberry-fool | 7 | shortbread | Gluten-Free |
| grilled-moreton-bay-bugs | 6 | bread | Gluten-Free |
| banana-ice-cream | 4 | milk | Vegan |
| banana-ice-cream | 4 | milk | Dairy-Free |
| pepper-jelly | 6 | cream | Vegan |
| pepper-jelly | 6 | cream | Dairy-Free |
| pepper-jelly | 6 | crackers | Gluten-Free |
| chorizo-in-cider | 5 | bread | Gluten-Free |
| torrone | 1 | wafer | Gluten-Free |
| torrone | 5 | wafer | Gluten-Free |
| pasticada | 5 | gnocchi | Gluten-Free |

## 3. Conditional diet labels (290)

Each is printed on the recipe page as written here and left out of the Recipe JSON-LD. Check that the condition reads naturally and is something the recipe really offers.

| Recipe | Note on the page |
| --- | --- |
| margherita-pizza | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| fettuccine-alfredo | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| cacio-e-pepe | Vegetarian when made with a vegetarian alternative to the pecorino romano. |
| risotto-alla-milanese | Vegetarian when made with vegetable stock rather than chicken stock and made with a vegetarian alternative to the parmigiano-reggiano. |
| potato-gnocchi | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| pesto-genovese | Vegetarian when made with vegetarian versions of the parmigiano-reggiano and pecorino. |
| minestrone-soup | Vegan when made without the parmesan rind. |
| minestrone-soup | Dairy-free when made without the parmesan rind. |
| minestrone-soup | Vegetarian when made with a vegetarian alternative to the parmesan. |
| focaccia | Vegan when made with sugar rather than honey. |
| miso-soup | Vegan when made without the katsuobushi. |
| miso-soup | Vegetarian when made without the katsuobushi. |
| hot-and-sour-soup | Vegetarian when made with vegetable stock rather than chicken stock. |
| mac-and-cheese | Vegetarian when made with vegetarian versions of the gruyère and parmesan. |
| chicken-souvlaki | Gluten-free when served without the pita breads. |
| avgolemono-soup | Gluten-free when made with long-grain rice rather than orzo. |
| thai-fried-rice | Vegetarian when made with extra soy sauce rather than fish sauce. |
| lamb-kofta-kebabs | Gluten-free when served without the flatbreads. |
| shakshuka | Gluten-free when served without the crusty bread. |
| gazpacho | Vegan when served without the hard-boiled egg. |
| gambas-al-ajillo | Gluten-free when served without the crusty bread. |
| japchae | Vegan when made without the eggs. |
| tteokbokki | Vegetarian when made with vegetable stock rather than anchovy and kelp stock and made without the fish cake sheets. |
| goi-cuon | Gluten-free when made with hoisin sauce labelled gluten-free. |
| borscht | Vegetarian when made with vegetable stock rather than beef stock. |
| borscht | Gluten-free when served without the rye bread. |
| moroccan-chicken-tagine | Gluten-free when served without the couscous. |
| menemen | Gluten-free when served without the crusty bread. |
| melanzane-alla-parmigiana | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| orecchiette-cime-di-rapa | Dairy-free when made without the pecorino. |
| creamy-polenta | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| cannoli | Vegetarian when made with unsalted butter rather than lard. |
| pot-au-feu | Gluten-free when served without the toasted baguette. |
| baingan-bharta | Vegan when made with mustard oil rather than ghee. |
| baingan-bharta | Dairy-free when made with mustard oil rather than ghee. |
| rajma | Vegan when made with neutral oil rather than ghee and made without the cream. |
| rajma | Dairy-free when made with neutral oil rather than ghee and made without the cream. |
| idli-sambar | Vegan when made with coconut oil rather than ghee. |
| idli-sambar | Dairy-free when made with coconut oil rather than ghee. |
| chapati | Vegan when made with neutral oil rather than ghee. |
| chapati | Dairy-free when made with neutral oil rather than ghee. |
| nachos | Vegetarian when made without the minced beef. |
| queso-fundido | Gluten-free when made with warm corn tortillas rather than flour tortillas. |
| sopes | Vegetarian when made without the cooked shredded chicken or chorizo. |
| refried-beans | Vegetarian when made with neutral oil rather than lard. |
| bagels | Vegan when made with barley malt syrup rather than honey and made without the egg white. |
| cornbread | Vegetarian when made with neutral oil rather than bacon fat. |
| mujadara | Vegan when served without the yoghurt. |
| mujadara | Dairy-free when served without the yoghurt. |
| maqluba | Dairy-free when served with cucumber salad rather than plain yoghurt. |
| kibbeh | Dairy-free when made with olive oil rather than butter. |
| labneh | Gluten-free when served without the warm flatbread. |
| manakish-zaatar | Vegan when served without the labneh or feta. |
| manakish-zaatar | Dairy-free when served without the labneh or feta. |
| salmorejo | Vegetarian when served without the jamón serrano. |
| pan-con-tomate | Vegan when made without the jamón serrano or ibérico, anchovy fillets and manchego shavings. |
| pan-con-tomate | Dairy-free when made without the manchego shavings. |
| pan-con-tomate | Vegetarian when made without the jamón serrano or ibérico and anchovy fillets. |
| caldo-verde | Gluten-free when served without the broa or crusty bread. |
| dakgalbi | Dairy-free when made without the mozzarella. |
| gado-gado | Gluten-free when served without the prawn crackers. |
| pupusas | Vegetarian when made without the chicharrón. |
| blini | Vegetarian when served without the smoked salmon or gravlax and salmon roe or caviar. |
| golabki | Dairy-free when made without the soured cream. |
| sauerbraten | Dairy-free when made without the soured cream. |
| gravlax | Gluten-free when served without the rye bread or crispbread. |
| egusi-soup | Gluten-free when made with stock cubes labelled gluten-free. |
| suya | Gluten-free when made with stock cube labelled gluten-free. |
| ackee-and-saltfish | Gluten-free when served with fried plantain rather than fried dumplings. |
| acai-bowl | Vegan when made with maple syrup rather than honey. |
| chia-pudding | Vegan when made with maple syrup rather than honey and made without the greek yoghurt. |
| chia-pudding | Dairy-free when made without the greek yoghurt. |
| lentil-soup | Gluten-free when served without the flatbread. |
| pasta-e-fagioli | Vegetarian when made without the pancetta and made with a vegetarian alternative to the parmesan. |
| gnocchi-alla-sorrentina | Vegetarian when made with a vegetarian alternative to the parmesan. |
| soupe-au-pistou | Vegetarian when made with a vegetarian alternative to the parmesan. |
| horchata | Vegan when made with oat milk rather than whole milk. |
| pulled-pork | Gluten-free when served without the soft burger buns. |
| ploughmans-lunch | Vegetarian when made without the ham or pork pies. |
| cawl | Gluten-free when served without the crusty bread. |
| cheese-fondue | Vegetarian when made with a vegetarian alternative to the gruyère. |
| rosti | Vegetarian when made with a vegetarian alternative to the gruyère. |
| raclette | Vegetarian when made without the air-dried ham. |
| belgian-frites | Vegetarian when made with neutral oil rather than beef dripping. |
| norwegian-fish-soup | Gluten-free when served without the crusty bread. |
| salmon-soup-lohikeitto | Gluten-free when served without the rye bread. |
| bigos | Gluten-free when served without the rye bread. |
| mici | Gluten-free when served without the white bread. |
| lobio | Gluten-free when served without the cornbread. |
| greek-lemon-potatoes | Vegan when made with vegetable stock rather than chicken stock. |
| greek-lemon-potatoes | Vegetarian when made with vegetable stock rather than chicken stock. |
| turkish-lentil-soup | Vegan when made with olive oil rather than butter. |
| turkish-lentil-soup | Gluten-free when served without the bread. |
| shish-taouk | Gluten-free when served without the flatbreads. |
| moutabal | Vegan when made without the yoghurt. |
| moutabal | Gluten-free when served without the warm flatbread. |
| tahdig | Gluten-free when made with potatoes rather than lavash flatbread. |
| joojeh-kabab | Gluten-free when served without the flatbread. |
| israeli-couscous-salad | Vegan when made with maple syrup rather than honey. |
| harees | Dairy-free when made without the ghee. |
| chicken-tagine-olives | Gluten-free when served without the bread or couscous. |
| shakshuka-tunisian | Gluten-free when made without the warm flatbread. |
| nihari | Dairy-free when made with neutral oil rather than ghee. |
| seekh-kebab | Gluten-free when served without the naan. |
| chapli-kebab | Gluten-free when served without the naan. |
| roti-canai | Vegan when made with margarine rather than melted ghee, served with dhal rather than chicken curry and made without the condensed milk. |
| roti-canai | Vegetarian when served with dhal rather than chicken curry. |
| provoleta | Gluten-free when served without the crusty bread. |
| rice-and-peas | Vegan when made with coconut oil rather than butter. |
| jamaican-patty | Dairy-free when made with suet rather than cold butter. |
| callaloo | Vegan when made without the crab claws and butter. |
| callaloo | Vegetarian when made without the crab claws. |
| moin-moin | Vegan when made without the ground crayfish, hard boiled eggs and cooked fish or corned beef and made with a vegetable stock cube. |
| moin-moin | Gluten-free when made with stock cube labelled gluten-free. |
| moin-moin | Vegetarian when made without the ground crayfish and cooked fish or corned beef and made with a vegetable stock cube. |
| pepper-soup | Gluten-free when made with stock cubes labelled gluten-free. |
| waakye | Vegan when served without the boiled eggs. |
| waakye | Gluten-free when served without the spaghetti. |
| bunny-chow | Dairy-free when made with oil rather than ghee. |
| kalua-pork | Gluten-free when served without the macaroni salad. |
| breakfast-hash | Vegetarian when made with olive oil rather than bacon fat. |
| smoothie-bowl | Vegan when made with coconut yoghurt rather than yoghurt and made with maple syrup rather than honey. |
| cold-brew-coffee | Vegan when served with cold water rather than milk. |
| savoury-cottage-cheese-bowl | Gluten-free when served without the rye or sourdough toast. |
| spiced-lamb-lettuce-cups | Dairy-free when served without the greek yoghurt. |
| bandrek | Vegan when served without the condensed milk. |
| bandrek | Dairy-free when served without the condensed milk. |
| ful-medames | Vegan when served without the hard-boiled eggs. |
| ful-medames | Gluten-free when served without the flatbreads. |
| mechouia-salad | Vegan when served without the tuna in olive oil and hard-boiled eggs. |
| mechouia-salad | Vegetarian when served without the tuna in olive oil. |
| basque-cheesecake | Gluten-free when made with cornflour rather than plain flour. |
| air-fryer-chicken-wings | Dairy-free when served without the melted butter. |
| baked-ziti | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| penne-alla-vodka | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| frittata | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| spinach-artichoke-dip | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| creamed-spinach | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| latkes | Dairy-free when served without the soured cream. |
| cauliflower-mash | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| bacon-wrapped-asparagus | Dairy-free when made without the finely grated parmigiano-reggiano. |
| baked-avocado-eggs | Vegetarian when made without the cooked bacon. |
| cauliflower-cheese | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| lecso | Vegan when made with neutral oil rather than lard. |
| lecso | Vegetarian when made with neutral oil rather than lard. |
| stoemp | Vegetarian when served without the pork sausages. |
| aubergine-parmigiana | Vegetarian when made with a vegetarian alternative to the parmigiano-reggiano. |
| white-bean-stew | Gluten-free when served without the sourdough. |
| shanklish-salad | Gluten-free when served without the flatbread. |
| kibbeh-bil-sanieh | Dairy-free when made with olive oil rather than butter. |
| riz-a-djaj | Dairy-free when made with olive oil rather than butter. |
| koussa-mahshi | Dairy-free when made with olive oil rather than butter. |
| malfouf-mahshi | Dairy-free when made with olive oil rather than butter. |
| freekeh-djaj | Dairy-free when made with olive oil rather than butter. |
| shorbet-ads | Gluten-free when made without the pitta breads. |
| dukkah | Gluten-free when served without the aish baladi or flatbread. |
| roz-mermah | Vegetarian when made with hot water rather than chicken stock. |
| hawawshi | Dairy-free when made with olive oil rather than butter. |
| hamam-mahshi | Dairy-free when made with olive oil rather than butter. |
| renga | Dairy-free when made with water rather than milk. |
| renga | Gluten-free when served without the aish baladi. |
| gebna-domiati | Gluten-free when served without the aish baladi. |
| batarekh | Gluten-free when served without the aish baladi. |
| sobia | Vegan when made with coconut milk rather than whole milk. |
| sobia | Dairy-free when made with coconut milk rather than whole milk. |
| lablabi | Vegetarian when made without the tinned tuna in oil. |
| bsissa | Vegan when served with date syrup rather than honey and served with water rather than milk. |
| bsissa | Dairy-free when served with water rather than milk. |
| ojja | Gluten-free when served without the bread. |
| masfouf | Vegan when made with olive oil rather than butter, made with caster sugar rather than honey and served without the cold buttermilk. |
| masfouf | Dairy-free when made with olive oil rather than butter and served without the cold buttermilk. |
| poireaux-vinaigrette | Vegan when made without the hard-boiled egg. |
| escargots | Gluten-free when served without the baguette. |
| anchoiade | Gluten-free when served without the toasted baguette. |
| brandade-de-morue | Gluten-free when made without the toasted baguette. |
| vichyssoise | Vegetarian when made with vegetable stock rather than chicken stock. |
| garbure | Gluten-free when served without the country bread. |
| soupe-de-poisson | Dairy-free when served without the gruyère. |
| lotte-a-l-armoricaine | Dairy-free when made without the cold butter. |
| piperade | Vegetarian when served without the bayonne ham. |
| piperade | Gluten-free when served without the country bread. |
| gratin-de-courgettes | Vegetarian when made with a vegetarian alternative to the gruyère. |
| gratin-de-macaronis | Vegetarian when made with a vegetarian alternative to the gruyère. |
| bagna-cauda | Gluten-free when served without the grissini. |
| fiori-di-zucca | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| panelle | Gluten-free when served without the sesame rolls. |
| culurgiones | Vegetarian when made with a vegetarian alternative to the pecorino. |
| trofie-al-pesto | Vegetarian when made with vegetarian versions of the parmigiano reggiano and pecorino. |
| pizzoccheri | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| pasta-alla-genovese | Dairy-free when served without the parmigiano reggiano. |
| pasta-e-ceci | Vegan when made without the anchovy fillets. |
| pasta-e-ceci | Vegetarian when made without the anchovy fillets. |
| busiate-trapanese | Vegetarian when made with a vegetarian alternative to the pecorino. |
| risotto-ai-funghi | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| testaroli | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| parmigiana-bianca | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| parmigiana-bianca | Gluten-free when made with cornflour rather than plain flour. |
| torta-pasqualina | Vegetarian when made with a vegetarian alternative to the parmigiano reggiano. |
| angels-on-horseback | Dairy-free when served without the butter. |
| angels-on-horseback | Gluten-free when served without the bread. |
| grilled-kippers | Gluten-free when served without the brown bread. |
| bubble-and-squeak | Vegetarian when made with butter rather than dripping. |
| mushy-peas | Vegan when made with olive oil rather than butter. |
| mushy-peas | Dairy-free when made with olive oil rather than butter. |
| braised-red-cabbage | Vegan when made with olive oil rather than butter. |
| braised-red-cabbage | Dairy-free when made with olive oil rather than butter. |
| honey-roast-parsnips | Vegetarian when made with vegetable oil rather than beef dripping. |
| pan-haggerty | Vegetarian when made with vegetable oil rather than beef dripping. |
| spotted-dick | Vegetarian when made with vegetarian suet rather than shredded suet. |
| jam-roly-poly | Vegetarian when made with vegetarian suet rather than shredded suet. |
| lemon-posset | Gluten-free when served without the shortbread fingers. |
| jianbing | Vegetarian when made with crisp fried cracker rather than prawn crackers. |
| egg-drop-soup | Vegetarian when made with vegetable stock rather than chicken stock. |
| garlic-bread | Vegetarian when made with a vegetarian alternative to the parmesan. |
| minestrone | Vegan when made without the parmesan rind. |
| minestrone | Vegetarian when made with a vegetarian alternative to the parmesan. |
| minestrone | Dairy-free when made without the parmesan rind. |
| sakshuka-turkish | Vegan when made without the natural yoghurt. |
| sakshuka-turkish | Dairy-free when made without the natural yoghurt. |
| turkish-pilav | Vegetarian when made with vegetable stock rather than hot chicken stock. |
| scrambled-eggs | Gluten-free when served without the buttered toast. |
| pol-sambol | Vegan when made without the maldive fish flakes. |
| pol-sambol | Vegetarian when made without the maldive fish flakes. |
| chicken-inasal | Gluten-free when made with tamari rather than light soy sauce. |
| jerk-pork | Gluten-free when made with tamari rather than light soy sauce. |
| baleadas | Vegetarian when made with vegetable shortening rather than lard. |
| moules-mariniere | Gluten-free when served without the baguette. |
| hiyayakko | Gluten-free when made with tamari rather than light soy sauce. |
| dal-palak | Vegan when made with vegetable oil rather than ghee. |
| dal-palak | Dairy-free when made with vegetable oil rather than ghee. |
| grits | Vegetarian when made with vegetable stock rather than chicken stock. |
| sopa-de-tortilla | Vegetarian when made with vegetable stock rather than chicken stock. |
| garlic-knots | Vegetarian when made with a vegetarian alternative to the parmesan. |
| stuffed-shells | Vegetarian when made with a vegetarian alternative to the parmesan. |
| crustless-quiche | Vegetarian when made with a vegetarian alternative to the gruyère. |
| creamy-tuscan-pasta | Vegetarian when made with a vegetarian alternative to the parmesan. |
| whitebait-fritters | Gluten-free when served without the buttered white bread. |
| gooseberry-fool | Gluten-free when served without the shortbread biscuits. |
| cheese-straws | Vegetarian when made with a vegetarian alternative to the parmesan. |
| kumara-gnocchi | Vegetarian when made with a vegetarian alternative to the parmesan. |
| stuffed-mushrooms | Vegetarian when made with a vegetarian alternative to the parmesan. |
| jalapeno-poppers | Vegetarian when made with a vegetarian alternative to the parmesan. |
| alfredo-sauce | Vegetarian when made with a vegetarian alternative to the parmesan. |
| manicotti | Vegetarian when made with a vegetarian alternative to the parmesan. |
| grilled-moreton-bay-bugs | Gluten-free when served without the crusty bread. |
| banana-ice-cream | Vegan when made with oat milk rather than dairy milk. |
| banana-ice-cream | Dairy-free when made with oat milk rather than dairy milk. |
| amaretto-sour | Vegan when made with aquafaba rather than egg white. |
| greek-frappe | Vegan when made with cold water rather than milk. |
| greek-frappe | Dairy-free when made with cold water rather than milk. |
| santa-maria-tri-tip | Gluten-free when served without the grilled bread rolls. |
| stifado | Gluten-free when served without the orzo. |
| chicken-liver-pate | Gluten-free when served without the toasted brioche. |
| steak-and-eggs | Gluten-free when served with hash browns rather than buttered toast. |
| pepper-jelly | Vegan when served without the cream cheese. |
| pepper-jelly | Dairy-free when served without the cream cheese. |
| pepper-jelly | Gluten-free when served without the crackers. |
| chorizo-in-cider | Gluten-free when served without the crusty bread. |
| savory-oatmeal-with-egg-and-spinach | Vegetarian when made with a vegetarian alternative to the parmesan. |
| cauliflower-hash-browns | Vegetarian when made with a vegetarian alternative to the parmesan. |
| zucchini-soup | Vegetarian when made with a vegetarian alternative to the parmesan. |
| cauliflower-mac-and-cheese | Vegetarian when made with a vegetarian alternative to the parmesan. |
| cauliflower-risotto | Vegetarian when made with a vegetarian alternative to the parmesan. |
| zucchini-noodles-with-pesto | Vegetarian when made with a vegetarian alternative to the parmesan. |
| cheesy-cauliflower-casserole | Vegetarian when made with a vegetarian alternative to the parmesan. |
| roasted-asparagus-with-parmesan | Vegetarian when made with a vegetarian alternative to the parmesan. |
| stuffed-portobello-mushrooms | Vegetarian when made with a vegetarian alternative to the parmesan. |
| barley-risotto-with-mushrooms | Vegetarian when made with a vegetarian alternative to the parmesan. |
| parmesan-crisps | Vegetarian when made with a vegetarian alternative to the parmesan. |
| baked-zucchini-chips | Vegetarian when made with a vegetarian alternative to the parmesan. |
| cauliflower-tater-tots | Vegetarian when made with a vegetarian alternative to the parmesan. |
| asparagus-frittata | Vegetarian when made with a vegetarian alternative to the parmesan. |
| shaved-brussels-sprout-salad | Vegetarian when made with a vegetarian alternative to the parmesan. |
| lemon-arugula-salad-with-parmesan | Vegetarian when made with a vegetarian alternative to the parmesan. |
| zucchini-ribbon-salad | Vegetarian when made with a vegetarian alternative to the parmesan. |
| kale-and-apple-salad | Vegetarian when made with a vegetarian alternative to the parmesan. |
| eggplant-lasagna-roll-ups | Vegetarian when made with a vegetarian alternative to the parmesan. |
| spaghetti-squash-primavera | Vegetarian when made with a vegetarian alternative to the parmesan. |
| zucchini-roll-ups | Vegetarian when made with a vegetarian alternative to the parmesan. |
| potato-bake-with-cream | Vegetarian when made with a vegetarian alternative to the gruyere. |
| spinach-quiche | Vegetarian when made with a vegetarian alternative to the gruyere. |
| tomato-tart | Vegetarian when made with a vegetarian alternative to the gruyere. |
| onion-tart | Vegetarian when made with a vegetarian alternative to the gruyere. |
| potatoes-au-gratin | Vegetarian when made with a vegetarian alternative to the gruyere. |
| stovetop-mac-and-cheese | Vegetarian when made with a vegetarian alternative to the gruyère. |
| freezer-mac-and-cheese | Vegetarian when made with a vegetarian alternative to the gruyère. |
| tarte-aux-poireaux | Vegetarian when made with a vegetarian alternative to the gruyère. |
| gratin-de-blettes | Vegetarian when made with a vegetarian alternative to the gruyère. |
| torrone | Gluten-free when made with rice paper rather than wafer paper. |
| pasticada | Gluten-free when served without the potato gnocchi. |

## 4. Search descriptions rewritten because they promised a time the recipe cannot keep (14)

| Recipe | New description |
| --- | --- |
| panna-cotta | Silky vanilla panna cotta with the perfect wobble: a five-ingredient Italian dessert, 20 minutes of work and at least 4 hours in the fridge. |
| fudgy-brownies | Fudgy cocoa brownies with a shiny crackle top and dense centre. One bowl, no melted chocolate, 40 minutes of work, then 3 hours to cool. |
| bulgogi | Korean beef bulgogi with a soy, pear and sesame marinade, seared hard for caramelised edges. 30 minutes of cooking after freezing and marinating. |
| chocolate-pudding | Chocolate pudding: a smooth stovetop pudding made with cocoa, cornflour and milk. A very cheap dessert for four, 15 minutes of work, then chilled for 2 hours. |
| air-fryer-cinnamon-rolls | Air fryer cinnamon rolls: soft swirls with cream cheese icing, cooked for 12 minutes. Six servings, 32 minutes of work plus an hour's rise. |
| air-fryer-fried-chicken | Air fryer fried chicken: buttermilk-marinated, crunchy and juicy, cooked for 25 minutes. Four servings, after at least 2 hours in the marinade. |
| air-fryer-pork-belly | Air fryer pork belly with shattering crackling and soft, rich meat, cooked for 40 minutes after at least 2 hours drying uncovered in the fridge. |
| jerk-chicken-wings | Jerk chicken wings with scotch bonnet, allspice and thyme, baked for 40 minutes. Four servings, marinated for at least 4 hours first. |
| low-carb-brownies | Low-carb brownies with almond flour and cocoa, baked for 22 minutes, cooled and chilled for an hour before cutting. Makes 12 squares. |
| freezer-dumplings | Freezer dumplings with pork and cabbage: fold a batch of 30, freeze them on a tray for an hour, then steam from frozen in 10 minutes. |
| heringssalat | Heringssalat, German herring salad with pickled beetroot, apple and soured cream: 20 minutes of work, no cooking, then 2 hours in the fridge. |
| mojo-picon | Mojo picón, spicy red Canary Islands sauce with garlic, cumin and paprika: soak the peppers, blend in 10 minutes, rest an hour. No cooking. |
| kransekage | Kransekage, Danish marzipan ring tower with white icing: the dough is chilled for an hour, then the rings are baked for 25 minutes. Serves twelve. |
| poronkaristys | Poronkäristys, Finnish sautéed reindeer or venison with lingonberries and mash: the meat is part-frozen to slice thinly, then cooked for 20 minutes. |
