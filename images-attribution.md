# Image Attribution

Every photograph on CulinaryVault is freely licensed. Of 721
images, **621** are CC0 or public domain and carry no conditions at all, and
**100** are **Creative Commons Attribution (CC BY)** — free to use, adapt
and use commercially, on the single condition that the photographer is credited.

That condition is met in two places: underneath the photograph on the recipe
page itself, and in the table below. Both name the title, the photographer, the
licence and the source, which is what Creative Commons asks for.

Every image is resized and re-encoded to WebP and JPEG, which makes what this
site publishes an adaptation of the original. Where the licence is
Attribution-ShareAlike, that adaptation carries **the same licence as the
original**, and the credit beside the photograph on the recipe page says so.

No image here is NonCommercial — this site carries advertising — or
NoDerivatives, since resizing is precisely what that licence forbids
distributing. Both are filtered out at source rather than caught in review.

## How the images were sourced

Images were collected programmatically by `tools/fetch_images.py`, which:

1. Queries **Wikimedia Commons**, then re-checks the `LicenseShortName` field on
   every result and discards anything that is not CC0, public domain or CC BY.
   The search filter is treated as a hint; the licence field is the authority.
2. Rejects NonCommercial and NoDerivatives outright, including compound forms
   such as CC BY-NC-SA. The forbidden clause is looked for anywhere in the
   licence string rather than in a fixed position, so an unusual ordering like
   "CC BY-SA-NC" cannot slip past.
3. Scores each candidate for relevance against the dish name and rejects
   archival material, illustrations, packaging shots and portraits.
4. Downloads, centre-crops to 4:3, resizes, and writes both WebP and JPEG.

If no properly licensed photograph could be found for a dish, the site shows a
CSS gradient placeholder carrying the recipe name instead. We would rather show
nothing than use an image we do not have clear rights to.

## Summary

| | |
|---|---|
| Recipes | 600 |
| Hero images | 513 |
| Secondary "process" images | 208 |
| Total image files | 1442 (WebP + JPEG for each) |
| Recipes using a gradient placeholder | 87 |

### Licences used

| Licence | Images | Terms |
|---|---:|---|
| CC0 | 351 | No rights reserved — no attribution legally required |
| CC0 1.0 | 176 | No rights reserved — no attribution legally required |
| Public domain | 59 | No rights reserved — no attribution legally required |
| CC BY 2.0 | 40 | Free to use, adapt and use commercially **provided the photographer is credited** |
| Public Domain Mark 1.0 | 34 | No rights reserved — no attribution legally required |
| CC BY-SA 4.0 | 29 | Free to use, adapt and use commercially **provided the photographer is credited** and adaptations carry the same licence |
| CC BY-SA 2.0 | 8 | Free to use, adapt and use commercially **provided the photographer is credited** and adaptations carry the same licence |
| CC BY-SA 3.0 | 8 | Free to use, adapt and use commercially **provided the photographer is credited** and adaptations carry the same licence |
| CC BY 4.0 | 6 | Free to use, adapt and use commercially **provided the photographer is credited** |
| CC BY 2.5 | 4 | Free to use, adapt and use commercially **provided the photographer is credited** |
| CC BY 3.0 | 3 | Free to use, adapt and use commercially **provided the photographer is credited** |
| Public Domain | 1 | No rights reserved — no attribution legally required |
| CC BY 3.0 nl | 1 | Free to use, adapt and use commercially **provided the photographer is credited** |
| CC BY-SA 2.5 | 1 | Free to use, adapt and use commercially **provided the photographer is credited** and adaptations carry the same licence |

Licence texts:

- **CC0 1.0 Universal** — <https://creativecommons.org/publicdomain/zero/1.0/>
- **Public Domain Mark 1.0** — <https://creativecommons.org/publicdomain/mark/1.0/>
- **CC BY 4.0** — <https://creativecommons.org/licenses/by/4.0/>
- **CC BY 3.0** — <https://creativecommons.org/licenses/by/3.0/>
- **CC BY 2.0** — <https://creativecommons.org/licenses/by/2.0/>
- **CC BY-SA 4.0** — <https://creativecommons.org/licenses/by-sa/4.0/>
- **CC BY-SA 3.0** — <https://creativecommons.org/licenses/by-sa/3.0/>
- **CC BY-SA 2.0** — <https://creativecommons.org/licenses/by-sa/2.0/>

### Recipes without a photograph

These use the built-in gradient placeholder because no CC0, public-domain,
CC BY or CC BY-SA image of sufficient quality and relevance could be found:

- Brioche Loaf (`brioche`)
- Keema Matar (`keema-matar`)
- Queso Fundido (`queso-fundido`)
- Mexican Red Rice (`mexican-rice`)
- Chicken Pot Pie (`chicken-pot-pie`)
- Beer-Battered Onion Rings (`onion-rings`)
- Chocolate Milkshake (`chocolate-milkshake`)
- Toad in the Hole (`toad-in-the-hole`)
- Greek Keftedes (`keftedes`)
- Mujadara (`mujadara`)
- Cheese Börek (`borek`)
- Fabada Asturiana (`fabada-asturiana`)
- Bacalhau à Brás (`bacalhau-a-bras`)
- Samgyetang (`samgyetang`)
- Pão de Queijo (`pao-de-queijo`)
- Ahi Poke Bowl (`poke-bowl`)
- Lion's Head Meatballs (`lion-head-meatballs`)
- Welsh Cawl (`cawl`)
- Lobio (`lobio`)
- Greek Lemon Potatoes (`greek-lemon-potatoes`)
- Greek Yoghurt with Honey and Walnuts (`greek-yogurt-honey`)
- Israeli Couscous Salad (`israeli-couscous-salad`)
- Molokhia (`molokhia`)
- Cá Kho Tộ (`ca-kho-to`)
- Taiwanese Popcorn Chicken (`popcorn-chicken-taiwanese`)
- Martabak Manis (`martabak`)
- Sambal Goreng Tempeh (`sambal-goreng`)
- Nasi Lemak (`nasi-lemak`)
- Roti Canai (`roti-canai`)
- Ayam Masak Merah (`ayam-masak-merah`)
- Sinigang na Baboy (`sinigang`)
- Lechon Kawali (`lechon-kawali`)
- Pancit Canton (`pancit-canton`)
- Halo-Halo (`halo-halo`)
- Ropa Vieja (`ropa-vieja`)
- Bandeja Paisa (`bandeja-paisa`)
- Ajiaco (`ajiaco`)
- Colombian Empanadas (`empanadas-colombianas`)
- Causa Limeña (`causa-limena`)
- Pisco Sour (`pisco-sour`)
- Provoleta (`provoleta`)
- Milanesa Napolitana (`milanesa`)
- Dulce de Leche (`dulce-de-leche`)
- Pastel de Choclo (`pastel-de-choclo`)
- Completo Italiano (`completo`)
- Coxinha (`coxinha`)
- Caipirinha (`caipirinha`)
- Rice and Peas (`rice-and-peas`)
- Jamaican Beef Patty (`jamaican-patty`)
- Trinidadian Doubles (`doubles`)
- Callaloo (`callaloo`)
- Moin Moin (`moin-moin`)
- Nigerian Pepper Soup (`pepper-soup`)
- Waakye (`waakye`)
- Kelewele (`kelewele`)
- Nyama Choma (`nyama-choma`)
- Ugali and Sukuma Wiki (`ugali-sukuma`)
- Bunny Chow (`bunny-chow`)
- Malva Pudding (`malva-pudding`)
- Lamingtons (`lamingtons`)
- Pavlova (`pavlova`)
- Anzac Biscuits (`anzac-biscuits`)
- Kalua Pork (`kalua-pork`)
- Loco Moco (`loco-moco`)
- Breakfast Hash (`breakfast-hash`)
- Ribollita (`ribollita`)
- Roasted Vegetable Buddha Bowl (`buddha-bowl`)
- Affogato (`affogato`)
- Berry Smoothie Bowl (`smoothie-bowl`)
- Cold Brew Coffee (`cold-brew-coffee`)
- Chicken Milanese (`chicken-milanese`)
- Pasta Puttanesca (`pasta-puttanesca`)
- Pots de Crème (`pots-de-creme`)
- Salade de Chèvre Chaud (`salade-de-chevre-chaud`)
- Pork Shogayaki (`shogayaki`)
- Buta no Kakuni (`kakuni`)
- Shui Zhu Fish (`shui-zhu-fish`)
- Lo Bak Go (`turnip-cake`)
- Bhindi Masala (`bhindi-masala`)
- Shahi Paneer (`shahi-paneer`)
- Beef Barbacoa (`barbacoa`)
- Tinga Tostadas (`tostadas`)
- Buttermilk Biscuits (`biscuits-buttermilk`)
- Chicken and Waffles (`chicken-and-waffles`)
- Maryland Crab Cakes (`crab-cakes`)
- Bread and Butter Pudding (`bread-pudding`)
- Scotch Eggs (`scotch-eggs`)

## Brand assets

`favicon.svg`, `icon-192.png`, `icon-512.png` and `og-default.jpg` are original
work, generated by `tools/make_icons.py`, and are released under the same MIT
licence as the rest of this project.

## Full image index

| File | Recipe | Role | Original title | Photographer | Licence | Source |
|---|---|---|---|---|---|---|
| `margherita-pizza.webp` / `.jpg` | Margherita Pizza | Hero | Margherita pizza 55 | Swathi sri srinivasa raghavan | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Margherita_pizza_55.jpg) |
| `margherita-pizza-process.webp` / `.jpg` | Margherita Pizza | Process | Margarita Pizza | Douglas Perkins | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Margarita_Pizza.jpg) |
| `spaghetti-carbonara.webp` / `.jpg` | Spaghetti Carbonara | Hero | Spaghetti Carbonara with Japanese Raw Egg | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Spaghetti_Carbonara_with_Japanese_Raw_Egg.jpg) |
| `lasagna-bolognese.webp` / `.jpg` | Lasagna Bolognese | Hero | Aubergine Lasagne with salad - Jollof Café | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aubergine_Lasagne_with_salad_-_Jollof_Caf%C3%A9.jpg) |
| `lasagna-bolognese-process.webp` / `.jpg` | Lasagna Bolognese | Process | Halal Beef Lasagne and Cauliflowers - Foodilic 2024-08-12 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Halal_Beef_Lasagne_and_Cauliflowers_-_Foodilic_2024-08-12.jpg) |
| `fettuccine-alfredo.webp` / `.jpg` | Fettuccine Alfredo | Hero | Fettuccine | Popo le Chien | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fettuccine.jpg) |
| `cacio-e-pepe.webp` / `.jpg` | Cacio e Pepe | Hero | Spaghetti, cacio e pepe & bitter leaf salad - Tutto 2024-04-04 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Spaghetti,_cacio_e_pepe_%26_bitter_leaf_salad_-_Tutto_2024-04-04.jpg) |
| `cacio-e-pepe-process.webp` / `.jpg` | Cacio e Pepe | Process | Spaghetti, cacio e pepe & bitter leaf salad - Tutto 2024-04-04 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=147092362) |
| `penne-all-arrabbiata.webp` / `.jpg` | Penne all'Arrabbiata | Hero | Penne on plate with Arrabbiata 2025-02-12 01 | Leonhard Lenz | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Penne_on_plate_with_Arrabbiata_2025-02-12_01.jpg) |
| `risotto-alla-milanese.webp` / `.jpg` | Risotto alla Milanese | Hero | RISOTTO POLLO E FUNGHI - Marrocco's 2025-05-09 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:RISOTTO_POLLO_E_FUNGHI_-_Marrocco%27s_2025-05-09.jpg) |
| `risotto-alla-milanese-process.webp` / `.jpg` | Risotto alla Milanese | Process | Risotto, Mazatlán, 3 de mayo de 2023 05 | El Nuevo Doge | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Risotto,_Mazatl%C3%A1n,_3_de_mayo_de_2023_05.jpg) |
| `osso-buco.webp` / `.jpg` | Osso Buco alla Milanese | Hero | BradyTavernOssoBuco2 | User:Promking | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BradyTavernOssoBuco2.jpg) |
| `chicken-parmigiana.webp` / `.jpg` | Chicken Parmigiana | Hero | Chicken Kiev Parmigiana | Angusd84 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Kiev_Parmigiana.JPG) |
| `potato-gnocchi.webp` / `.jpg` | Potato Gnocchi with Sage Butter | Hero | Potato gnocchi, aubergine arrabiata | Siobhan Leachman | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Potato_gnocchi,_aubergine_arrabiata.jpg) |
| `pesto-genovese.webp` / `.jpg` | Pesto alla Genovese | Hero | BasilkumPesto | Flusel | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BasilkumPesto.jpg) |
| `minestrone-soup.webp` / `.jpg` | Minestrone Soup | Hero | Minestrone Soup | Intothewoods29 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Minestrone_Soup.JPG) |
| `caprese-salad.webp` / `.jpg` | Caprese Salad | Hero | Insalata Caprese | Gartenkralle | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Insalata_Caprese.JPG) |
| `caprese-salad-process.webp` / `.jpg` | Caprese Salad | Process | Insalatacaprese | Aboutspots | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Insalatacaprese.jpg) |
| `bruschetta.webp` / `.jpg` | Tomato Bruschetta | Hero | Closeup Bruschetta tomatoes | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/6040253/photo-image-public-domain-red-food) |
| `arancini.webp` / `.jpg` | Sicilian Arancini | Hero | Arancino - Pizza 500 2023-11-10 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Arancino_-_Pizza_500_2023-11-10.jpg) |
| `arancini-process.webp` / `.jpg` | Sicilian Arancini | Process | Arancino Pistacchio and Bacon - Monjibello, Brighton 2023-11-20 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Arancino_Pistacchio_and_Bacon_-_Monjibello,_Brighton_2023-11-20.jpg) |
| `focaccia.webp` / `.jpg` | Rosemary Focaccia | Hero | Almond & jam focaccia - Caccia and Tails 2025-05-26 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Almond_%26_jam_focaccia_-_Caccia_and_Tails_2025-05-26.jpg) |
| `tiramisu.webp` / `.jpg` | Classic Tiramisu | Hero | Italian Tiramisu (1) - Caffè Nero 2025-07-02 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Italian_Tiramisu_(1)_-_Caff%C3%A8_Nero_2025-07-02.jpg) |
| `tiramisu-process.webp` / `.jpg` | Classic Tiramisu | Process | Italian Tiramisu (2) - Caffè Nero 2025-07-02 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Italian_Tiramisu_(2)_-_Caff%C3%A8_Nero_2025-07-02.jpg) |
| `panna-cotta.webp` / `.jpg` | Vanilla Panna Cotta | Hero | Panna cotta | Restaurant Alexander The Hague | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/68131501@N08/17772330875) |
| `beef-bourguignon.webp` / `.jpg` | Beef Bourguignon | Hero | Boeuf Bourguignon | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/35144527) |
| `coq-au-vin.webp` / `.jpg` | Coq au Vin | Hero | Coq au vin, Linden | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Coq_au_vin,_Linden.jpg) |
| `french-onion-soup.webp` / `.jpg` | French Onion Soup | Hero | French Onion Soup. | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:French_Onion_Soup..JPG) |
| `french-onion-soup-process.webp` / `.jpg` | French Onion Soup | Process | French onion soup - Boston, MA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:French_onion_soup_-_Boston,_MA.jpg) |
| `ratatouille.webp` / `.jpg` | Provençal Ratatouille | Hero | Bouillon Croix-Rousse (Lyon) daurade et ratatouille en juillet 2022 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bouillon_Croix-Rousse_(Lyon)_daurade_et_ratatouille_en_juillet_2022.jpg) |
| `bouillabaisse.webp` / `.jpg` | Marseille Bouillabaisse | Hero | Re-Ment Grandma's European Kitchen 04 - Bouillabaisse | Kukolka 1:6 | CC0 1.0 | [Flickr](https://www.flickr.com/photos/137343926@N06/36799774072) |
| `bouillabaisse-process.webp` / `.jpg` | Marseille Bouillabaisse | Process | asht 'aroûb, black scorpionfish, black scorpion fish, bodeč, bouillabaisse, brauner drachenkopf, cabracho, çorba balıği, escarapota, escórpora fosca, european scorpionfish, harilik meripuuk, rascasse, scorpina, sea scorpion, small-scaled scorpion fish | Michael Bommerer | CC0 1.0 | [Inaturalist](https://www.inaturalist.org/photos/410997290) |
| `cassoulet.webp` / `.jpg` | Cassoulet de Toulouse | Hero | Cassoulet.cuit | GD. Guilhem06 21:37, 20 April 2007 (UTC) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cassoulet.cuit.jpg) |
| `steak-frites.webp` / `.jpg` | Steak Frites | Hero | Steak-frites as served at Le Relais de Venise - L'Entrecote | Dcollard | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steak-frites_as_served_at_Le_Relais_de_Venise_-_L%27Entrecote.jpg) |
| `steak-frites-process.webp` / `.jpg` | Steak Frites | Process | Steak frites - Boston, Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steak_frites_-_Boston,_Massachusetts.jpg) |
| `quiche-lorraine.webp` / `.jpg` | Quiche Lorraine | Hero | Quiche Lorraine - Julien Plumart 2025-05-12 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Quiche_Lorraine_-_Julien_Plumart_2025-05-12.jpg) |
| `salade-nicoise.webp` / `.jpg` | Salade Niçoise | Hero | Nicoise salad | משתמש:צחי לרנר]]. Original uploader was צחי לרנר at he.wikipedia | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nicoise_salad.JPG) |
| `salade-nicoise-process.webp` / `.jpg` | Salade Niçoise | Process | Salad Nicoise - San Francisco, CA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Salad_Nicoise_-_San_Francisco,_CA.jpg) |
| `croissants.webp` / `.jpg` | Butter Croissants | Hero | Apricot croissant - Caffè Nero 2024-12-12 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apricot_croissant_-_Caff%C3%A8_Nero_2024-12-12.jpg) |
| `baguette.webp` / `.jpg` | French Baguette | Hero | Bread-breakfast-baguette-sliced (24244220141) | www.Pixel.la Free Stock Photos | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bread-breakfast-baguette-sliced_(24244220141).jpg) |
| `baguette-process.webp` / `.jpg` | French Baguette | Process | Bread-food-bowl-baguette (24243445311) | www.Pixel.la Free Stock Photos | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bread-food-bowl-baguette_(24243445311).jpg) |
| `eclairs.webp` / `.jpg` | Chocolate Éclairs | Hero | Éclair au chocolat à Tokyo | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%C3%89clair_au_chocolat_%C3%A0_Tokyo.jpg) |
| `macarons.webp` / `.jpg` | French Macarons | Hero | Black Forest Macaron - Julien Plumart 2026-03-25 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Black_Forest_Macaron_-_Julien_Plumart_2026-03-25.jpg) |
| `macarons-process.webp` / `.jpg` | French Macarons | Process | Des macarons de chez Bouillet (mars 2023) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Des_macarons_de_chez_Bouillet_(mars_2023).jpg) |
| `creme-brulee.webp` / `.jpg` | Crème Brûlée | Hero | Creme brulée | Arnaud 25 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Creme_brul%C3%A9e.jpg) |
| `chocolate-souffle.webp` / `.jpg` | Chocolate Soufflé | Hero | Fondant au chocolat au Grand quartier en juin 2022 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fondant_au_chocolat_au_Grand_quartier_en_juin_2022.jpg) |
| `tarte-tatin.webp` / `.jpg` | Apple Tarte Tatin | Hero | Corner restaurant, Paris, tarte Tatin | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Corner_restaurant,_Paris,_tarte_Tatin.jpg) |
| `tonkotsu-ramen.webp` / `.jpg` | Tonkotsu Ramen | Hero | Char Siu Tonkotsu Ramen - Shogun Ramen 2023-10-11 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Char_Siu_Tonkotsu_Ramen_-_Shogun_Ramen_2023-10-11.jpg) |
| `tonkotsu-ramen-process.webp` / `.jpg` | Tonkotsu Ramen | Process | Clear tonkotsu ramen | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Clear_tonkotsu_ramen.jpg) |
| `chicken-katsu-curry.webp` / `.jpg` | Chicken Katsu Curry | Hero | Chicken katsu curry | DraftSaturn15 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_katsu_curry.jpg) |
| `chicken-teriyaki.webp` / `.jpg` | Chicken Teriyaki | Hero | Chicken teriyaki 20220503 122449 | GALAXY 2018 A7 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_teriyaki_20220503_122449.jpg) |
| `chicken-teriyaki-process.webp` / `.jpg` | Chicken Teriyaki | Process | Chicken teriyaki roll from Sarku | Ser Amantio di Nicolao | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_teriyaki_roll_from_Sarku.jpg) |
| `gyoza.webp` / `.jpg` | Pork Gyoza | Hero | JP 日本 Japan 沖繩 OKINAWA 那霸 Naha 琉球新麺 Ryukyu Shinmen 通堂 Tondo Orokuhonten 煎餃子 pan fried Gyoza dumpling January 2025 R12S 01 | Naha Mama Pavilionz | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:JP_%E6%97%A5%E6%9C%AC_Japan_%E6%B2%96%E7%B9%A9_OKINAWA_%E9%82%A3%E9%9C%B8_Naha_%E7%90%89%E7%90%83%E6%96%B0%E9%BA%BA_Ryukyu_Shinmen_%E9%80%9A%E5%A0%82_Tondo_Orokuhonten_%E7%85%8E%E9%A4%83%E5%AD%90_pan_fried_Gyoza_dumpling_January_2025_R12S_01.jpg) |
| `tempura.webp` / `.jpg` | Crispy Vegetable Tempura | Hero | KISU no TEMPURA or Sillaginidae Sand Borer Tempura 2021 | ウィキ太郎(WikiTaro) | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:KISU_no_TEMPURA_or_Sillaginidae_Sand_Borer_Tempura_2021.jpg) |
| `tempura-process.webp` / `.jpg` | Crispy Vegetable Tempura | Process | Maitake Mushroom Tempura 2021 Grifola frondosa 舞茸の天ぷら | ウィキ太郎(WikiTaro) | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Maitake_Mushroom_Tempura_2021_Grifola_frondosa_%E8%88%9E%E8%8C%B8%E3%81%AE%E5%A4%A9%E3%81%B7%E3%82%89.jpg) |
| `yakitori.webp` / `.jpg` | Yakitori Chicken Skewers | Hero | Typical yakitori 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Typical_yakitori_001.jpg) |
| `okonomiyaki.webp` / `.jpg` | Osaka Okonomiyaki | Hero | Okonomiyaki 001 | ume-y | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Okonomiyaki_001.jpg) |
| `okonomiyaki-process.webp` / `.jpg` | Osaka Okonomiyaki | Process | Okonomiyaki with tomato and cheeze (4716607523) | pelican from Tokyo, Japan | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Okonomiyaki_with_tomato_and_cheeze_(4716607523).jpg) |
| `miso-soup.webp` / `.jpg` | Miso Soup | Hero | Littleneck clam miso soup 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Littleneck_clam_miso_soup_001.jpg) |
| `udon-noodle-soup.webp` / `.jpg` | Kake Udon Noodle Soup | Hero | Mixed Vegetables with Singapore Laksa Noodles Soup with Japanese Udon Noodles - Noodles Street 2025-10-15 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mixed_Vegetables_with_Singapore_Laksa_Noodles_Soup_with_Japanese_Udon_Noodles_-_Noodles_Street_2025-10-15.jpg) |
| `udon-noodle-soup-process.webp` / `.jpg` | Kake Udon Noodle Soup | Process | Mixed Vegetables with Singapore Laksa Noodles Soup with Japanese Udon Noodles - Noodles Street 2025-10-15 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=176829169) |
| `california-roll.webp` / `.jpg` | California Roll | Hero | A wooden board with California rolls, soy sauce, wasabi, and pickled ginger. The California rolls are topped with sesame seeds and arranged in two rows. Additional sushi pieces are visible on a separate wooden board in the background. | Bigul Malayi | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/96267d2dd6/) |
| `japanese-cheesecake.webp` / `.jpg` | Japanese Cotton Cheesecake | Hero | Soufflé-style cheesecake 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Souffl%C3%A9-style_cheesecake_001.jpg) |
| `matcha-latte.webp` / `.jpg` | Iced Matcha Latte | Hero | Beetroot Latte and Matcha Latte, Purezza, Brighton | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beetroot_Latte_and_Matcha_Latte,_Purezza,_Brighton.jpg) |
| `tacos-al-pastor.webp` / `.jpg` | Tacos al Pastor | Hero | Tacos al pastor. Our first try. Delicious. (21094600130) | terri_bateman | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tacos_al_pastor._Our_first_try._Delicious._(21094600130).jpg) |
| `tacos-al-pastor-process.webp` / `.jpg` | Tacos al Pastor | Process | Tacosalpastor | Invisible_hurricane (talk) (Uploads) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tacosalpastor.JPG) |
| `chicken-enchiladas.webp` / `.jpg` | Chicken Enchiladas Rojas | Hero | Birria enchiladas with refried beans and rice from El Paso restaurant | Ser Amantio di Nicolao | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Birria_enchiladas_with_refried_beans_and_rice_from_El_Paso_restaurant.jpg) |
| `carnitas.webp` / `.jpg` | Slow-Braised Carnitas | Hero | Carnitas tacos with chips and gaucamole | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54074910191) |
| `fish-tacos.webp` / `.jpg` | Baja Fish Tacos | Hero | Fish Tacos Pronto! | cogdogblog | CC0 1.0 | [Flickr](https://www.flickr.com/photos/37996646802@N01/46808436981) |
| `quesadillas.webp` / `.jpg` | Cheese Quesadillas | Hero | Cheese quesadilla | Corn cheese | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cheese_quesadilla.jpg) |
| `quesadillas-process.webp` / `.jpg` | Cheese Quesadillas | Process | Chicken Quesadilla dish at Latin Bistro restaurant Summit NJ | Tomwsulcer | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Quesadilla_dish_at_Latin_Bistro_restaurant_Summit_NJ.JPG) |
| `huevos-rancheros.webp` / `.jpg` | Huevos Rancheros | Hero | Huevos rancheros - Pasadena, CA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Huevos_rancheros_-_Pasadena,_CA.jpg) |
| `chili-con-carne.webp` / `.jpg` | Chili con Carne | Hero | Chili con carne with beans | ssfaulkn | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/51812340@N00/16110589455) |
| `chili-con-carne-process.webp` / `.jpg` | Chili con Carne | Process | Plate of Chili Con Carne | Markus Spiske | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/431877/free-photo-image-hunger-chili-carne) |
| `pozole-rojo.webp` / `.jpg` | Pozole Rojo | Hero | Pozole rojo (2017) | Ivette Degollado | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pozole_rojo_(2017).jpg) |
| `mole-poblano.webp` / `.jpg` | Mole Poblano | Hero | Enchiladas de mole | Regenklang | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Enchiladas_de_mole.jpg) |
| `mole-poblano-process.webp` / `.jpg` | Mole Poblano | Process | Enchiladas de mole rosa | François Calvaresi | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Enchiladas_de_mole_rosa.jpg) |
| `tamales.webp` / `.jpg` | Pork Tamales | Hero | Preparando tamales oaxaqueños, Mazatlán, 27 de marzo de 2023 | El Nuevo Doge | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Preparando_tamales_oaxaque%C3%B1os,_Mazatl%C3%A1n,_27_de_marzo_de_2023.jpg) |
| `guacamole.webp` / `.jpg` | Authentic Guacamole | Hero | Flautas guacamole tortillas | Jon Sullivan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Flautas_guacamole_tortillas.jpg) |
| `guacamole-process.webp` / `.jpg` | Authentic Guacamole | Process | Guacamole 2016 | Fructibus | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Guacamole_2016.jpg) |
| `elote.webp` / `.jpg` | Elote — Mexican Street Corn | Hero | Kanpachi with chimichurri and elote corn - San Francisco | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kanpachi_with_chimichurri_and_elote_corn_-_San_Francisco.jpg) |
| `churros.webp` / `.jpg` | Cinnamon Churros | Hero | Churros - Prix 2024 | Renhour48 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Churros_-_Prix_2024.jpg) |
| `churros-process.webp` / `.jpg` | Cinnamon Churros | Process | Churros - September 2024 - Sarah Stierch | Missvain | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Churros_-_September_2024_-_Sarah_Stierch.jpg) |
| `classic-margarita.webp` / `.jpg` | Classic Margarita | Hero | Blended margarita cocktail drink | Jon Sullivan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blended_margarita_cocktail_drink.jpg) |
| `chicken-tikka-masala.webp` / `.jpg` | Chicken Tikka Masala | Hero | Chicken Tikka Masala - Mohammed - Spice Of Life | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Tikka_Masala_-_Mohammed_-_Spice_Of_Life.jpg) |
| `chicken-tikka-masala-process.webp` / `.jpg` | Chicken Tikka Masala | Process | Chicken Tikka Masala 1 | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Tikka_Masala_1.JPG) |
| `butter-chicken.webp` / `.jpg` | Butter Chicken (Murgh Makhani) | Hero | Butter chicken and naan chicken | Rajalakshmi duraikathiresan | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Butter_chicken_and_naan_chicken.jpg) |
| `rogan-josh.webp` / `.jpg` | Kashmiri Rogan Josh | Hero | Rogan Josh | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rogan_Josh.JPG) |
| `rogan-josh-process.webp` / `.jpg` | Kashmiri Rogan Josh | Process | Top-down view of an Indian-style meal on a white square plate with mutton rogan josh, naan bread, white posho, and pickled red onions. | Mohammed Kateregga | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/41969c85e2/) |
| `lamb-vindaloo.webp` / `.jpg` | Goan Lamb Vindaloo | Hero | Chicken Vindaloo | Carpathia at English Wikibooks | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Vindaloo.jpeg) |
| `chicken-biryani.webp` / `.jpg` | Hyderabadi Chicken Biryani | Hero | Chicken-biryani-recipe | Unknown authorUnknown author | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken-biryani-recipe.jpg) |
| `chicken-biryani-process.webp` / `.jpg` | Hyderabadi Chicken Biryani | Process | Chicken Biryani 3 | Apurv013 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Biryani_3.jpg) |
| `palak-paneer.webp` / `.jpg` | Palak Paneer | Hero | Palak Paneer | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Palak_Paneer.JPG) |
| `chana-masala.webp` / `.jpg` | Chana Masala | Hero | Chana Masala - Mohammed - Spice Of Life 2024-05-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chana_Masala_-_Mohammed_-_Spice_Of_Life_2024-05-27.jpg) |
| `dal-tadka.webp` / `.jpg` | Dal Tadka | Hero | Dal tadka Picture | Nithyasrm | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dal_tadka_Picture.JPG) |
| `aloo-gobi.webp` / `.jpg` | Aloo Gobi | Hero | Aloo gobi paratha - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aloo_gobi_paratha_-_Massachusetts.jpg) |
| `aloo-gobi-process.webp` / `.jpg` | Aloo Gobi | Process | Anchovies with chili, garlic, carrots, olive oil, and black pepper on rotini, plus aloo gobi paratha and hot Indian pickled lime - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Anchovies_with_chili,_garlic,_carrots,_olive_oil,_and_black_pepper_on_rotini,_plus_aloo_gobi_paratha_and_hot_Indian_pickled_lime_-_Massachusetts.jpg) |
| `masala-dosa.webp` / `.jpg` | Masala Dosa | Hero | Chicken masala dosa - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_masala_dosa_-_Massachusetts.jpg) |
| `samosas.webp` / `.jpg` | Punjabi Samosas | Hero | Aloo matar with samosa and green chili pickle - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aloo_matar_with_samosa_and_green_chili_pickle_-_Massachusetts.jpg) |
| `samosas-process.webp` / `.jpg` | Punjabi Samosas | Process | Meat pie samosa and spring roll | Aisha Yahuza | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meat_pie_samosa_and_spring_roll.jpg) |
| `vegetable-pakoras.webp` / `.jpg` | Vegetable Pakoras | Hero | Aaloo Pakora Curry | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aaloo_Pakora_Curry.JPG) |
| `tandoori-chicken.webp` / `.jpg` | Tandoori Chicken | Hero | 20251121 133159 Tandoori chicken | Saimmx | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20251121_133159_Tandoori_chicken.jpg) |
| `tandoori-chicken-process.webp` / `.jpg` | Tandoori Chicken | Process | 20251121 133209 Tandoori chicken | Saimmx | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20251121_133209_Tandoori_chicken.jpg) |
| `garlic-naan.webp` / `.jpg` | Garlic Butter Naan | Hero | Bánh mì Naan tỏi ở Tân Phú (1) | Phương Huy (thảo luận) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:B%C3%A1nh_m%C3%AC_Naan_t%E1%BB%8Fi_%E1%BB%9F_T%C3%A2n_Ph%C3%BA_(1).jpg) |
| `gulab-jamun.webp` / `.jpg` | Gulab Jamun | Hero | Gulab Jamun Diwali | Preethi 10 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gulab_Jamun_Diwali.jpg) |
| `gulab-jamun-process.webp` / `.jpg` | Gulab Jamun | Process | Gulab Jamun with Ice Cream - Worthing Indian Cafe & Bar 2026-04-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gulab_Jamun_with_Ice_Cream_-_Worthing_Indian_Cafe_%26_Bar_2026-04-27.jpg) |
| `mango-lassi.webp` / `.jpg` | Mango Lassi | Hero | Mango Lassi and Butter Milk - Vel South Indian Kitchen + Bar | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mango_Lassi_and_Butter_Milk_-_Vel_South_Indian_Kitchen_%2B_Bar.jpg) |
| `kung-pao-chicken.webp` / `.jpg` | Kung Pao Chicken | Hero | Kung Pao Chicken With Rice | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kung_Pao_Chicken_With_Rice.jpg) |
| `kung-pao-chicken-process.webp` / `.jpg` | Kung Pao Chicken | Process | Kung Pao chicken (western version) -1 | Alexander Marks (aomarks) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kung_Pao_chicken_(western_version)_-1.jpg) |
| `sweet-and-sour-pork.webp` / `.jpg` | Sweet and Sour Pork | Hero | Sweet and Sour Pork - RV90 - 22 August 2024 | RegionVisitor90 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sweet_and_Sour_Pork_-_RV90_-_22_August_2024.jpg) |
| `mapo-tofu.webp` / `.jpg` | Mapo Tofu | Hero | Sichuan pickled tofu | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sichuan_pickled_tofu.jpg) |
| `mapo-tofu-process.webp` / `.jpg` | Mapo Tofu | Process | Salt & Pepper Tofu Rice Bowl - Tiger Bites Pig 2025-11-20 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Salt_%26_Pepper_Tofu_Rice_Bowl_-_Tiger_Bites_Pig_2025-11-20.jpg) |
| `general-tsos-chicken.webp` / `.jpg` | General Tso's Chicken | Hero | General Tso's Chicken (packaged) - Arlington, MA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:General_Tso%27s_Chicken_(packaged)_-_Arlington,_MA.jpg) |
| `beef-and-broccoli.webp` / `.jpg` | Beef and Broccoli | Hero | Ground beef, roasted broccoli, green beans, and cherry tomatoes - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ground_beef,_roasted_broccoli,_green_beans,_and_cherry_tomatoes_-_Massachusetts.jpg) |
| `beef-and-broccoli-process.webp` / `.jpg` | Beef and Broccoli | Process | Ground beef on sticky rice with broccoli, pickled garlic, guacamole habanero sauce, and soy sauce - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ground_beef_on_sticky_rice_with_broccoli,_pickled_garlic,_guacamole_habanero_sauce,_and_soy_sauce_-_Massachusetts.jpg) |
| `egg-fried-rice.webp` / `.jpg` | Egg Fried Rice | Hero | Ka-phrao mu (basil fried pork) with rice & egg, Bangkok, 2019-03-31 (1) | Bitterschoko | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ka-phrao_mu_(basil_fried_pork)_with_rice_%26_egg,_Bangkok,_2019-03-31_(1).jpg) |
| `chow-mein.webp` / `.jpg` | Chicken Chow Mein | Hero | Chicken Chow Mein | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Chow_Mein.JPG) |
| `chow-mein-process.webp` / `.jpg` | Chicken Chow Mein | Process | Chinese Chicken Chow Mein | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chinese_Chicken_Chow_Mein.JPG) |
| `dan-dan-noodles.webp` / `.jpg` | Dan Dan Noodles | Hero | Dan-dan mein | ernie_nh7l | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/37789131@N08/48232752082) |
| `peking-duck.webp` / `.jpg` | Peking Duck | Hero | Lettuce to wrap peking duck - Peking Duck Dinner Top Gun Cantonese 27Aug2006 - 5 | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/226816198) |
| `peking-duck-process.webp` / `.jpg` | Peking Duck | Process | Pea Shoots - Peking Duck Dinner Top Gun Cantonese 27Aug2006 - 6 | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/226816006) |
| `char-siu.webp` / `.jpg` | Char Siu Pork | Hero | Char siu pork on green peas and dinosaur pasta, with antipasto, soy sauce, and olive oil - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Char_siu_pork_on_green_peas_and_dinosaur_pasta,_with_antipasto,_soy_sauce,_and_olive_oil_-_Massachusetts.jpg) |
| `pork-dumplings.webp` / `.jpg` | Steamed Pork Dumplings | Hero | Chengdu Zhong Dumpling(Zhong Jiaozi) | 유신예 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chengdu_Zhong_Dumpling(Zhong_Jiaozi).jpg) |
| `pork-dumplings-process.webp` / `.jpg` | Steamed Pork Dumplings | Process | 中国饺子（Jiaozi；Dumplings；餃子） | Nature42 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%9B%BD%E9%A5%BA%E5%AD%90%EF%BC%88Jiaozi%EF%BC%9BDumplings%EF%BC%9B%E9%A4%83%E5%AD%90%EF%BC%89.jpg) |
| `spring-rolls.webp` / `.jpg` | Crispy Spring Rolls | Hero | Excellent Bowl with spring rolls, pork, noodles and nuoc cham at Cafe Lu Quan | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/1893350) |
| `wonton-soup.webp` / `.jpg` | Wonton Soup | Hero | Wonton Soup | chooyutshing | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/25802865@N08/55317142735) |
| `wonton-soup-process.webp` / `.jpg` | Wonton Soup | Process | Free wonton soup image | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5901516/photo-image-public-domain-food-free) |
| `hot-and-sour-soup.webp` / `.jpg` | Hot and Sour Soup | Hero | Hot-and-Sour-Soup-Bowl | Evan-Amos | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hot-and-Sour-Soup-Bowl.jpg) |
| `classic-cheeseburger.webp` / `.jpg` | Classic Smash Cheeseburger | Hero | Cheeseburger | Renee Comet (photographer) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cheeseburger.jpg) |
| `classic-cheeseburger-process.webp` / `.jpg` | Classic Smash Cheeseburger | Process | Cheeseburger 2 | Kurtkaiser | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cheeseburger_2.jpg) |
| `bbq-baby-back-ribs.webp` / `.jpg` | BBQ Baby Back Ribs | Hero | Barbecue Ribs in my saucer | VladimirWorkspace | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Barbecue_Ribs_in_my_saucer.jpg) |
| `buffalo-wings.webp` / `.jpg` | Buffalo Wings | Hero | Buffalo wings | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/55174138176) |
| `buffalo-wings-process.webp` / `.jpg` | Buffalo Wings | Process | Buffalo Wings at Citizen Bar Chicago | COVERT NINE | CC0 1.0 | [Flickr](https://www.flickr.com/photos/14982376@N04/23849566651) |
| `southern-fried-chicken.webp` / `.jpg` | Southern Fried Chicken | Hero | Fried-Chicken-Set | Evan-Amos | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fried-Chicken-Set.jpg) |
| `mac-and-cheese.webp` / `.jpg` | Baked Mac and Cheese | Hero | Our birthday boy wanted macaroni and cheese for supper, so I made homemade mac & cheese using a béchamel sauce and 3 cheeses. | Kim Siever | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/57873306@N00/34098597631) |
| `mac-and-cheese-process.webp` / `.jpg` | Baked Mac and Cheese | Process | Decided to do homemade macaroni and cheese for supper. | Kim Siever | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/57873306@N00/37890824214) |
| `meatloaf.webp` / `.jpg` | Classic Meatloaf | Hero | MeatloafWithSauce | Renee Comet (photographer) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:MeatloafWithSauce.jpg) |
| `philly-cheesesteak.webp` / `.jpg` | Philly Cheesesteak | Hero | Top view of a Philly cheesesteak, fries, and ketchup on a wooden table | mdburnette | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/7176213e5d/) |
| `pulled-pork-sandwich.webp` / `.jpg` | Pulled Pork Sandwiches | Hero | Pulled-pork-sandwiches | Dktue | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pulled-pork-sandwiches.jpg) |
| `grilled-cheese-sandwich.webp` / `.jpg` | Skillet Grilled Cheese | Hero | Broccoli cheddar soup and grilled cheese sandwich | Photos of Japan | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Broccoli_cheddar_soup_and_grilled_cheese_sandwich.jpg) |
| `grilled-cheese-sandwich-process.webp` / `.jpg` | Skillet Grilled Cheese | Process | Grilled cheese sandwiches | Jon Sullivan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grilled_cheese_sandwiches.jpg) |
| `new-england-clam-chowder.webp` / `.jpg` | New England Clam Chowder | Hero | Clam Chowder Picnic (from McGuire Scrapbook) MET 267452 | William Holbrook Beard | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Clam_Chowder_Picnic_(from_McGuire_Scrapbook)_MET_267452.jpg) |
| `chicken-noodle-soup.webp` / `.jpg` | Chicken Noodle Soup | Hero | Chicken Noodle Soup and Salami Panini at Take 5 | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/104721) |
| `chicken-noodle-soup-process.webp` / `.jpg` | Chicken Noodle Soup | Process | Free Chinese chicken noodle soup | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5910547/image-background-public-domain-food) |
| `creamy-tomato-soup.webp` / `.jpg` | Creamy Tomato Soup | Hero | No Tomato Soup for you!! | Nelley | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/21206714@N03/48008376066) |
| `caesar-salad.webp` / `.jpg` | Caesar Salad | Hero | A Caesar salad | Altitonantis | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_Caesar_salad.jpg) |
| `caesar-salad-process.webp` / `.jpg` | Caesar Salad | Process | Caesar Salad - Purezza 2023-11-22 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Caesar_Salad_-_Purezza_2023-11-22.jpg) |
| `cobb-salad.webp` / `.jpg` | Cobb Salad | Hero | Cobb salad (packaged) - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cobb_salad_(packaged)_-_Massachusetts.jpg) |
| `buttermilk-pancakes.webp` / `.jpg` | Fluffy Buttermilk Pancakes | Hero | BLACK FOREST PANCAKES - 17 GRAMS 2025-05-28 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BLACK_FOREST_PANCAKES_-_17_GRAMS_2025-05-28.jpg) |
| `buttermilk-pancakes-process.webp` / `.jpg` | Fluffy Buttermilk Pancakes | Process | Bacon Pancakes - Moksha Caffè 2026-05-03 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bacon_Pancakes_-_Moksha_Caff%C3%A8_2026-05-03.jpg) |
| `eggs-benedict.webp` / `.jpg` | Eggs Benedict | Hero | Burger, fries, and eggs benedict - La Tessa | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Burger,_fries,_and_eggs_benedict_-_La_Tessa.jpg) |
| `french-toast.webp` / `.jpg` | Brioche French Toast | Hero | FRENCH TOAST - Keys & Co. 2025-03-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:FRENCH_TOAST_-_Keys_%26_Co._2025-03-27.jpg) |
| `french-toast-process.webp` / `.jpg` | Brioche French Toast | Process | French Toast with Nutella - Snais's Cafe 2025-11-26 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:French_Toast_with_Nutella_-_Snais%27s_Cafe_2025-11-26.jpg) |
| `classic-waffles.webp` / `.jpg` | Crisp Belgian-Style Waffles | Hero | Waffles bake and eggs | Wallboat | CC0 1.0 | [Flickr](https://www.flickr.com/photos/151415985@N06/35080292476) |
| `breakfast-burrito.webp` / `.jpg` | Loaded Breakfast Burrito | Hero | Breakfast Burrito - 1UP Cafe 2024-02-18 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Breakfast_Burrito_-_1UP_Cafe_2024-02-18.jpg) |
| `breakfast-burrito-process.webp` / `.jpg` | Loaded Breakfast Burrito | Process | Breakfast Burrito with Tomato Ketchup - Cafe Traditionale 2026-01-28 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Breakfast_Burrito_with_Tomato_Ketchup_-_Cafe_Traditionale_2026-01-28.jpg) |
| `banana-bread.webp` / `.jpg` | One-Bowl Banana Bread | Hero | Banana bread toasted with butter - Tilt 2024-03-29 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Banana_bread_toasted_with_butter_-_Tilt_2024-03-29.jpg) |
| `blueberry-muffins.webp` / `.jpg` | Bakery-Style Blueberry Muffins | Hero | Blueberry Muffin | Jeromy Huber | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blueberry_Muffin.JPG) |
| `blueberry-muffins-process.webp` / `.jpg` | Bakery-Style Blueberry Muffins | Process | Blueberry muffin - Cosy Cottage 2025-04-21 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blueberry_muffin_-_Cosy_Cottage_2025-04-21.jpg) |
| `chocolate-chip-cookies.webp` / `.jpg` | Brown Butter Chocolate Chip Cookies | Hero | Choc-Chip-Cookie | Evan-Amos | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Choc-Chip-Cookie.jpg) |
| `cinnamon-rolls.webp` / `.jpg` | Overnight Cinnamon Rolls | Hero | Cinnamon Roll - Olea 2025-07-03 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cinnamon_Roll_-_Olea_2025-07-03.jpg) |
| `cinnamon-rolls-process.webp` / `.jpg` | Overnight Cinnamon Rolls | Process | Unbaked cinnamon rolls | Shoodho | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Unbaked_cinnamon_rolls.jpg) |
| `sourdough-bread.webp` / `.jpg` | Artisan Sourdough Bread | Hero | Loaf of sourdough bread cooling | Nutrition, Food Safety & Health | CC0 1.0 | [Flickr](https://www.flickr.com/photos/93936679@N05/36682456853) |
| `fudgy-brownies.webp` / `.jpg` | Fudgy Cocoa Brownies | Hero | chocolate-dessert-brownies-cake | pixellaphoto | CC0 1.0 | [Flickr](https://www.flickr.com/photos/137643065@N06/23698710074) |
| `fudgy-brownies-process.webp` / `.jpg` | Fudgy Cocoa Brownies | Process | brownies | D - 15 photography | CC0 1.0 | [Flickr](https://www.flickr.com/photos/94606278@N02/13921075040) |
| `new-york-cheesecake.webp` / `.jpg` | New York Cheesecake | Hero | New York cheesecake 3 | Muago | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:New_York_cheesecake_3.jpg) |
| `apple-pie.webp` / `.jpg` | Deep-Dish Apple Pie | Hero | A Apple Pie, C | Kate Greenaway | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_Apple_Pie,_C.jpg) |
| `apple-pie-process.webp` / `.jpg` | Deep-Dish Apple Pie | Process | A Apple Pie, G | Kate Greenaway (1846-1901) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_Apple_Pie,_G.jpg) |
| `key-lime-pie.webp` / `.jpg` | Key Lime Pie | Hero | 2012.09.11.165126 Key lime pie Pine Country Restaurant Williams Arizona USA | Hermann Luyken | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2012.09.11.165126_Key_lime_pie_Pine_Country_Restaurant_Williams_Arizona_USA.jpg) |
| `red-velvet-cake.webp` / `.jpg` | Red Velvet Cake | Hero | Bûche de Noël façon Red Velvet Cupcake, décembre 2023 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:B%C3%BBche_de_No%C3%ABl_fa%C3%A7on_Red_Velvet_Cupcake,_d%C3%A9cembre_2023.JPG) |
| `red-velvet-cake-process.webp` / `.jpg` | Red Velvet Cake | Process | Delicious Red Velvet Cupcake | Renter2000 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Delicious_Red_Velvet_Cupcake.jpg) |
| `carrot-cake.webp` / `.jpg` | Spiced Carrot Cake | Hero | Carrot Cake Cupcake (Unsplash) | Joseph Gonzalez miracletwentyone | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Carrot_Cake_Cupcake_(Unsplash).jpg) |
| `chocolate-lava-cake.webp` / `.jpg` | Molten Chocolate Lava Cake | Hero | Molten lava cake | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/55004427430) |
| `roast-turkey.webp` / `.jpg` | Herb-Butter Roast Turkey | Hero | Balsamic Roasted Turkey Salad | Alabama Extension | CC0 1.0 | [Flickr](https://www.flickr.com/photos/184594136@N08/49164001303) |
| `pumpkin-pie.webp` / `.jpg` | Classic Pumpkin Pie | Hero | Pop-Tarts-Pumpkin-Pie | Evan-Amos | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pop-Tarts-Pumpkin-Pie.jpg) |
| `pumpkin-pie-process.webp` / `.jpg` | Classic Pumpkin Pie | Process | Pumpkin Pie | Peggy Greb | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pumpkin_Pie.jpg) |
| `gingerbread-cookies.webp` / `.jpg` | Gingerbread Cookies | Hero | Gingerbread cookies and milk (31275892750) | freestocks.org from Olsztyn, Poland | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gingerbread_cookies_and_milk_(31275892750).jpg) |
| `greek-salad.webp` / `.jpg` | Horiatiki Greek Salad | Hero | Greek Salad at Pizza a Fetta | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/79628869) |
| `greek-salad-process.webp` / `.jpg` | Horiatiki Greek Salad | Process | Greek Salad Feta Cheese, Red | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5968295/photo-image-public-domain-plant-red) |
| `moussaka.webp` / `.jpg` | Moussaka | Hero | Meat Moussaka - Kouzina, Brighton 2023-11-24 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Meat_Moussaka_-_Kouzina,_Brighton_2023-11-24.jpg) |
| `chicken-souvlaki.webp` / `.jpg` | Chicken Souvlaki | Hero | Greek Souvlaki - Duncan Road, Gillingham, Medway | Sunolafjagtenben-hur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Greek_Souvlaki_-_Duncan_Road,_Gillingham,_Medway.jpg) |
| `chicken-souvlaki-process.webp` / `.jpg` | Chicken Souvlaki | Process | Greek souvlaki | NikosLikomitros | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Greek_souvlaki.jpg) |
| `gyros.webp` / `.jpg` | Pork Gyros | Hero | Cheese burger - Archipelagos Gyros 2023-12-09 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cheese_burger_-_Archipelagos_Gyros_2023-12-09.jpg) |
| `spanakopita.webp` / `.jpg` | Spanakopita | Hero | spanakopita | terri_bateman | CC0 1.0 | [Flickr](https://www.flickr.com/photos/134468672@N06/20265738272) |
| `spanakopita-process.webp` / `.jpg` | Spanakopita | Process | Day 190 spanakopita factory | terri_bateman | CC0 1.0 | [Flickr](https://www.flickr.com/photos/134468672@N06/43285247322) |
| `tzatziki.webp` / `.jpg` | Tzatziki | Hero | Préparation d'un tzatzíki maison en mars 2020 (003) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pr%C3%A9paration_d%27un_tzatz%C3%ADki_maison_en_mars_2020_(003).jpg) |
| `avgolemono-soup.webp` / `.jpg` | Avgolemono Soup | Hero | Avgolemono soup | robin.norwood | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Avgolemono_soup.jpg) |
| `avgolemono-soup-process.webp` / `.jpg` | Avgolemono Soup | Process | Avgolemono - Sarah Stierch | Missvain | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Avgolemono_-_Sarah_Stierch.jpg) |
| `baklava.webp` / `.jpg` | Pistachio Baklava | Hero | Baklava | Leonid Yaitskiy | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/40369546@N00/35861810165) |
| `pad-thai.webp` / `.jpg` | Pad Thai | Hero | Pad Thai 2017-12-17 (2) | Index Librorum Permissorum | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pad_Thai_2017-12-17_(2).jpg) |
| `pad-thai-process.webp` / `.jpg` | Pad Thai | Process | Pad Thai 2018-01-07 (1) | Index Librorum Permissorum | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pad_Thai_2018-01-07_(1).jpg) |
| `thai-green-curry.webp` / `.jpg` | Thai Green Curry | Hero | Beef green curry - Chiang Mai - 2017-07-08 (001) | Iudexvivorum | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_green_curry_-_Chiang_Mai_-_2017-07-08_(001).jpg) |
| `massaman-curry.webp` / `.jpg` | Massaman Beef Curry | Hero | Free Asian coconut curry image | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5909826/image-public-domain-food-free) |
| `pad-kra-pao.webp` / `.jpg` | Pad Kra Pao (Thai Basil Chicken) | Hero | Ka-phrao mu (basil fried pork) with rice & egg, Bangkok, 2019-03-31 (1) | Bitterschoko | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ka-phrao_mu_(basil_fried_pork)_with_rice_%26_egg,_Bangkok,_2019-03-31_(1).jpg) |
| `tom-yum-goong.webp` / `.jpg` | Tom Yum Goong | Hero | Tom Yum Goong Noodle Soup - Nok Nok Kitchen at The Cow 2024-03-28 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tom_Yum_Goong_Noodle_Soup_-_Nok_Nok_Kitchen_at_The_Cow_2024-03-28.jpg) |
| `tom-yum-goong-process.webp` / `.jpg` | Tom Yum Goong | Process | Tom Yum Soup | David | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tom_Yum_Soup.JPG) |
| `tom-kha-gai.webp` / `.jpg` | Tom Kha Gai | Hero | Tom Kha Gai Polevka Zlaty Klas 2025 | Mojmir Churavy | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tom_Kha_Gai_Polevka_Zlaty_Klas_2025.jpg) |
| `som-tam.webp` / `.jpg` | Som Tam (Green Papaya Salad) | Hero | Som Tom (Papaya Salad) - Little Thai 2024-06-14 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Som_Tom_(Papaya_Salad)_-_Little_Thai_2024-06-14.jpg) |
| `som-tam-process.webp` / `.jpg` | Som Tam (Green Papaya Salad) | Process | Papaya Salad 2018-05-23 (1) | Index Librorum Permissorum | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Papaya_Salad_2018-05-23_(1).jpg) |
| `thai-fried-rice.webp` / `.jpg` | Thai Pineapple Fried Rice | Hero | Khao Pad (Rosa's Fried Rice) with Chicken - Rosa's Thai 2025-07-22 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Khao_Pad_(Rosa%27s_Fried_Rice)_with_Chicken_-_Rosa%27s_Thai_2025-07-22.jpg) |
| `mango-sticky-rice.webp` / `.jpg` | Mango Sticky Rice | Hero | Mango Sticky Rice Vendor (22525075347) | Mustang Joe | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mango_Sticky_Rice_Vendor_(22525075347).jpg) |
| `mango-sticky-rice-process.webp` / `.jpg` | Mango Sticky Rice | Process | Mango sticky rice | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/6030903/photo-image-public-domain-plant-fruit) |
| `hummus.webp` / `.jpg` | Silky Hummus | Hero | Falafel and Homemade Hummus - Lavash 2024-09-11 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Falafel_and_Homemade_Hummus_-_Lavash_2024-09-11.jpg) |
| `falafel.webp` / `.jpg` | Crispy Falafel | Hero | A falafel platter at Agasi, Lajpat Nagar, Delhi | Contrapunctus-1 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_falafel_platter_at_Agasi,_Lajpat_Nagar,_Delhi.jpg) |
| `falafel-process.webp` / `.jpg` | Crispy Falafel | Process | Abu Sukar falafel place | Iainsimpsonstewart | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Abu_Sukar_falafel_place.png) |
| `chicken-shawarma.webp` / `.jpg` | Chicken Shawarma | Hero | CHICKEN SHAWARMA | Salma kyari | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CHICKEN_SHAWARMA.jpg) |
| `baba-ganoush.webp` / `.jpg` | Baba Ganoush | Hero | BABA GANOUSH - Efes Town Turkish Cuisine 2026-01-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:BABA_GANOUSH_-_Efes_Town_Turkish_Cuisine_2026-01-27.jpg) |
| `baba-ganoush-process.webp` / `.jpg` | Baba Ganoush | Process | Falafel & Baba Ganoush - Lavash 2023-12-13 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Falafel_%26_Baba_Ganoush_-_Lavash_2023-12-13.jpg) |
| `tabbouleh.webp` / `.jpg` | Tabbouleh | Hero | Armenian tabbouleh in France (March 2020) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Armenian_tabbouleh_in_France_(March_2020).jpg) |
| `fattoush.webp` / `.jpg` | Fattoush Salad | Hero | Fattoush | Unknown | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fattoush.JPG) |
| `fattoush-process.webp` / `.jpg` | Fattoush Salad | Process | Fattoush 1 | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fattoush_1.JPG) |
| `lamb-kofta-kebabs.webp` / `.jpg` | Lamb Kofta Kebabs | Hero | Kafta shish kebab and grilled vegetables on salad - Cambridge, MA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kafta_shish_kebab_and_grilled_vegetables_on_salad_-_Cambridge,_MA.jpg) |
| `shakshuka.webp` / `.jpg` | Shakshuka | Hero | Green shakshuka from Oren's Hummus | Yaron Koren | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Green_shakshuka_from_Oren%27s_Hummus.jpg) |
| `shakshuka-process.webp` / `.jpg` | Shakshuka | Process | Shakshuka - Black Mocha 2025-03-13 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Shakshuka_-_Black_Mocha_2025-03-13.jpg) |
| `knafeh.webp` / `.jpg` | Knafeh | Hero | Knafeh From Yaffa Knafeh | Theipu | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Knafeh_From_Yaffa_Knafeh.jpg) |
| `paella-valenciana.webp` / `.jpg` | Paella Valenciana | Hero | Who wants paella? | CazzJj | CC0 1.0 | [Flickr](https://www.flickr.com/photos/64249609@N08/36034328786) |
| `paella-valenciana-process.webp` / `.jpg` | Paella Valenciana | Process | Paella! | karenblakeman | CC0 1.0 | [Flickr](https://www.flickr.com/photos/11569642@N00/18824849255) |
| `gazpacho.webp` / `.jpg` | Andalusian Gazpacho | Hero | Gazpacho 001 | Nasobema lyricum | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gazpacho_001.jpg) |
| `patatas-bravas.webp` / `.jpg` | Patatas Bravas | Hero | Tapas (Spanish “patatas bravas”) | Javier Casares | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/23563f8ab0/) |
| `patatas-bravas-process.webp` / `.jpg` | Patatas Bravas | Process | A close-up view of a plate of Patatas Bravas crispy potato chips or fries topped with a creamy sauce and a generous dusting of paprika. | Laulove2001 | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/266877f00c/) |
| `tortilla-espanola.webp` / `.jpg` | Tortilla Española | Hero | Tortilla española, Mazatlán, 19 de abril de 2023 | El Nuevo Doge | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tortilla_espa%C3%B1ola,_Mazatl%C3%A1n,_19_de_abril_de_2023.jpg) |
| `gambas-al-ajillo.webp` / `.jpg` | Gambas al Ajillo | Hero | Gambas con ajillo, La Mata, La Palma | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gambas_con_ajillo,_La_Mata,_La_Palma.jpg) |
| `sangria.webp` / `.jpg` | Red Wine Sangria | Hero | Sangria | svensmail | CC0 1.0 | [Flickr](https://www.flickr.com/photos/92799244@N00/14004120833) |
| `bibimbap.webp` / `.jpg` | Bibimbap | Hero | Beef Bibimbap - SAERO 2025-11-06 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Bibimbap_-_SAERO_2025-11-06.jpg) |
| `bibimbap-process.webp` / `.jpg` | Bibimbap | Process | Bokkeum Bibimbap and Little Piggy Bao Bun by Bao Bun Brighton | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bokkeum_Bibimbap_and_Little_Piggy_Bao_Bun_by_Bao_Bun_Brighton.jpg) |
| `korean-fried-chicken.webp` / `.jpg` | Korean Fried Chicken | Hero | Korean Fried Chicken | Preethi 10 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korean_Fried_Chicken.jpg) |
| `bulgogi.webp` / `.jpg` | Beef Bulgogi | Hero | Bulgogi-jeongol 1 | hyun chun kim | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bulgogi-jeongol_1.jpg) |
| `bulgogi-process.webp` / `.jpg` | Beef Bulgogi | Process | Bulgogi (Marinated beef. Served with rice) - Kogi 2023-09-11 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bulgogi_(Marinated_beef._Served_with_rice)_-_Kogi_2023-09-11.jpg) |
| `japchae.webp` / `.jpg` | Japchae | Hero | 2016.06.11.105029 Japchae Heidelberg | Hermann Luyken | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2016.06.11.105029_Japchae_Heidelberg.jpg) |
| `tteokbokki.webp` / `.jpg` | Tteokbokki | Hero | Garaetteok Tteokbokki | Kimseoeun2023079825 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Garaetteok_Tteokbokki.jpg) |
| `tteokbokki-process.webp` / `.jpg` | Tteokbokki | Process | Korean rice cake (tteokbokki) | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korean_rice_cake_(tteokbokki).jpg) |
| `kimchi.webp` / `.jpg` | Napa Cabbage Kimchi | Hero | Kimchi-bokkeum-bap (Kimchi fried rice) - Kogi 2023-09-11 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kimchi-bokkeum-bap_(Kimchi_fried_rice)_-_Kogi_2023-09-11.jpg) |
| `kimchi-jjigae.webp` / `.jpg` | Kimchi Jjigae | Hero | Beef, tofu and kimchi stew of Matsuya | 毒島みるく | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef,_tofu_and_kimchi_stew_of_Matsuya.jpg) |
| `kimchi-jjigae-process.webp` / `.jpg` | Kimchi Jjigae | Process | Kimchi jjigae - Kogi, Brighton 2023-11-15 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kimchi_jjigae_-_Kogi,_Brighton_2023-11-15.jpg) |
| `pho-bo.webp` / `.jpg` | Phở Bò (Beef Noodle Soup) | Hero | 2016.10.14.133502 Noodle soup beef Pho Bac Vietnamese restaurant Seattle Washington USA | Hermann Luyken | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2016.10.14.133502_Noodle_soup_beef_Pho_Bac_Vietnamese_restaurant_Seattle_Washington_USA.jpg) |
| `banh-mi.webp` / `.jpg` | Bánh Mì | Hero | CYCLO Banh mi(Ebisu) | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CYCLO_Banh_mi(Ebisu).jpg) |
| `banh-mi-process.webp` / `.jpg` | Bánh Mì | Process | EBISU BANH MI BAKERY | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:EBISU_BANH_MI_BAKERY.jpg) |
| `goi-cuon.webp` / `.jpg` | Gỏi Cuốn (Fresh Spring Rolls) | Hero | Takeaway Vietnamese fresh spring rolls | Jakub Kapusnak | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/447669/free-photo-image-takeaway-pho-goi-cuon) |
| `bun-cha.webp` / `.jpg` | Bún Chả | Hero | Eating Vietnamese Bun Cha | Jakub Kapusnak | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/447606/free-photo-image-noodles-rice-dish) |
| `bun-cha-process.webp` / `.jpg` | Bún Chả | Process | Rice vermicelli for Bun Cha | Jakub Kapusnak | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/447704/free-photo-image-rice-dish-appetite) |
| `vietnamese-iced-coffee.webp` / `.jpg` | Cà Phê Sữa Đá | Hero | Viet-coffee | Mike Verdone | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Viet-coffee.jpg) |
| `fish-and-chips.webp` / `.jpg` | Beer-Battered Fish and Chips | Hero | Betty's Fish and Chips - November 2024 - Sarah Stierch 07 | Missvain | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Betty%27s_Fish_and_Chips_-_November_2024_-_Sarah_Stierch_07.jpg) |
| `fish-and-chips-process.webp` / `.jpg` | Beer-Battered Fish and Chips | Process | Fish & Chips - Off the Hook 2025-02-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fish_%26_Chips_-_Off_the_Hook_2025-02-27.jpg) |
| `shepherds-pie.webp` / `.jpg` | Shepherd's Pie | Hero | Bermuda (UK) image number 123 Shepherds Pie dinner dish at restaurant | Tomwsulcer | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bermuda_(UK)_image_number_123_Shepherds_Pie_dinner_dish_at_restaurant.jpg) |
| `beef-wellington.webp` / `.jpg` | Beef Wellington | Hero | Beef Wellington | PDphoto.org | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Wellington.jpg) |
| `beef-wellington-process.webp` / `.jpg` | Beef Wellington | Process | Beef Wellington - Boston, MA - 20191207 130555 | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Wellington_-_Boston,_MA_-_20191207_130555.jpg) |
| `full-english-breakfast.webp` / `.jpg` | Full English Breakfast | Hero | Full English Breakfast, Mature Cheddar & Vine Tomatoes Toasties, by Monella, Hove | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Full_English_Breakfast,_Mature_Cheddar_%26_Vine_Tomatoes_Toasties,_by_Monella,_Hove.jpg) |
| `bangers-and-mash.webp` / `.jpg` | Bangers and Mash with Onion Gravy | Hero | Bangers and mash - The Perkin Warbeck 2025-07-26 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bangers_and_mash_-_The_Perkin_Warbeck_2025-07-26.jpg) |
| `bangers-and-mash-process.webp` / `.jpg` | Bangers and Mash with Onion Gravy | Process | Bangers mash on old China plate on wooden table | Andrew McMillan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bangers_mash_on_old_China_plate_on_wooden_table.jpg) |
| `english-scones.webp` / `.jpg` | English Scones | Hero | Classic cream tea - Nymans Garden Riding House | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Classic_cream_tea_-_Nymans_Garden_Riding_House.jpg) |
| `sticky-toffee-pudding.webp` / `.jpg` | Sticky Toffee Pudding | Hero | Sticky Toffee Pudding - The Roundhill Pub 2023-09-24 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sticky_Toffee_Pudding_-_The_Roundhill_Pub_2023-09-24.jpg) |
| `sticky-toffee-pudding-process.webp` / `.jpg` | Sticky Toffee Pudding | Process | Sticky Toffee Pudding Cheesecake - Caffè Nero 2025-12-11 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sticky_Toffee_Pudding_Cheesecake_-_Caff%C3%A8_Nero_2025-12-11.jpg) |
| `pork-schnitzel.webp` / `.jpg` | Pork Schnitzel | Hero | CHICKEN SCHNITZEL - M&S cafe 2025-05-16 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CHICKEN_SCHNITZEL_-_M%26S_cafe_2025-05-16.jpg) |
| `soft-pretzels.webp` / `.jpg` | Bavarian Soft Pretzels | Hero | Bavarian Pretzels | Coconut-Cove | CC0 1.0 | [Flickr](https://www.flickr.com/photos/143573972@N07/28806524982) |
| `soft-pretzels-process.webp` / `.jpg` | Bavarian Soft Pretzels | Process | Bavarian Pretzel Factory | Greenville, SC Daily Photo | CC0 1.0 | [Flickr](https://www.flickr.com/photos/120143184@N05/47939949041) |
| `black-forest-cake.webp` / `.jpg` | Black Forest Cake | Hero | A slice of black forest cake | Mehraz Morshed | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/29265c09b0/) |
| `german-potato-salad.webp` / `.jpg` | Warm German Potato Salad | Hero | Otto Schade (Osch) Aachen Germany Potato Salad Graffiti | Tim-desser | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Otto_Schade_(Osch)_Aachen_Germany_Potato_Salad_Graffiti.jpg) |
| `german-potato-salad-process.webp` / `.jpg` | Warm German Potato Salad | Process | Picknick on trail along Emsbach, near Gnadenthal, potato-cucumber salad | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Picknick_on_trail_along_Emsbach,_near_Gnadenthal,_potato-cucumber_salad.jpg) |
| `borscht.webp` / `.jpg` | Ukrainian Borscht | Hero | Belorussian borscht - 2015 AD | Pracar | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Belorussian_borscht_-_2015_AD.JPG) |
| `beef-stroganoff.webp` / `.jpg` | Beef Stroganoff | Hero | Beef stroganoff of cut steak set meal of Matsuya | 毒島みるく | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_stroganoff_of_cut_steak_set_meal_of_Matsuya.jpg) |
| `beef-stroganoff-process.webp` / `.jpg` | Beef Stroganoff | Process | Hamburger Helper Beef Stroganoff | Di (they-them) | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Hamburger_Helper_Beef_Stroganoff.jpg) |
| `pierogi.webp` / `.jpg` | Potato and Cheese Pierogi | Hero | Pierogi Poutine | Alan Levine | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pierogi_Poutine.jpg) |
| `hungarian-goulash.webp` / `.jpg` | Hungarian Goulash | Hero | Roll assortment - great with goulash or other soup! | ralphnordenhold | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/9241419@N05/49142967832) |
| `hungarian-goulash-process.webp` / `.jpg` | Hungarian Goulash | Process | Goulash hungarian | RitaE | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=91233117) |
| `swedish-meatballs.webp` / `.jpg` | Swedish Meatballs | Hero | IKEA Swedish-style meatballs | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:IKEA_Swedish-style_meatballs.jpg) |
| `feijoada.webp` / `.jpg` | Feijoada Brasileira | Hero | Braian-Rizzo-Behind-the-Scenes-of-the-Feijoada-Temaki | EstellaBueno | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Braian-Rizzo-Behind-the-Scenes-of-the-Feijoada-Temaki.jpg) |
| `feijoada-process.webp` / `.jpg` | Feijoada Brasileira | Process | Brazilian food Feijoada | Wilfredor | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brazilian_food_Feijoada.jpg) |
| `ceviche.webp` / `.jpg` | Peruvian Ceviche | Hero | Ceviche at Peru | ProjectManhattan | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ceviche_at_Peru.jpg) |
| `beef-empanadas.webp` / `.jpg` | Beef Empanadas | Hero | Beef Empanada - Malo Argentinian Empanadas, Brighton 2023-11-25 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Empanada_-_Malo_Argentinian_Empanadas,_Brighton_2023-11-25.jpg) |
| `beef-empanadas-process.webp` / `.jpg` | Beef Empanadas | Process | Beef soup with hard-boiled egg, empanadas,Barreirinhas | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_soup_with_hard-boiled_egg,_empanadas,Barreirinhas.jpg) |
| `jerk-chicken.webp` / `.jpg` | Jamaican Jerk Chicken | Hero | Spicy jerk chicke | Jon Sullivan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Spicy_jerk_chicke.jpg) |
| `cuban-sandwich.webp` / `.jpg` | Cuban Sandwich | Hero | Ham, Cheese, Pickle Sandwich | TheHolyCessna553 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ham,_Cheese,_Pickle_Sandwich.jpg) |
| `cuban-sandwich-process.webp` / `.jpg` | Cuban Sandwich | Process | Ham & cheese toasted sandwich - Potatoast 2026-05-02 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ham_%26_cheese_toasted_sandwich_-_Potatoast_2026-05-02.jpg) |
| `moroccan-chicken-tagine.webp` / `.jpg` | Moroccan Chicken Tagine | Hero | Traditional Moroccan Tagine Pot with Blue Patterns | Vineyi826 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Traditional_Moroccan_Tagine_Pot_with_Blue_Patterns.jpg) |
| `harira.webp` / `.jpg` | Harira Soup | Hero | Ansichtkaart Ramadan Kareem tijdens corona the harira, asset dVWF9FaTKVOEpRUcNPm5Zra6 | Unknown authorUnknown author | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ansichtkaart_Ramadan_Kareem_tijdens_corona_the_harira,_asset_dVWF9FaTKVOEpRUcNPm5Zra6.jpg) |
| `harira-process.webp` / `.jpg` | Harira Soup | Process | Harira. | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Harira..JPG) |
| `koshari.webp` / `.jpg` | Egyptian Koshari | Hero | Koshari | Youmna9115 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Koshari.jpg) |
| `menemen.webp` / `.jpg` | Menemen | Hero | Free pouched egg spicy tomato | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5924077/photo-image-public-domain-food-free) |
| `lahmacun.webp` / `.jpg` | Lahmacun | Hero | Armenian lahmacun (1) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Armenian_lahmacun_(1).JPG) |
| `turkish-coffee.webp` / `.jpg` | Turkish Coffee | Hero | Turkish Coffee - Lavash 2023-12-13 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Turkish_Coffee_-_Lavash_2023-12-13.jpg) |
| `turkish-coffee-process.webp` / `.jpg` | Turkish Coffee | Process | Turkish coffee - Olea 2025-08-17 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Turkish_coffee_-_Olea_2025-08-17.jpg) |
| `mojito.webp` / `.jpg` | Classic Mojito | Hero | Cocktail Mojito | https://unsplash.com/@varshesh | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cocktail_Mojito.jpg) |
| `espresso-martini.webp` / `.jpg` | Espresso Martini | Hero | Espresso Martini with bow | Carolineliebes | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Espresso_Martini_with_bow.jpg) |
| `espresso-martini-process.webp` / `.jpg` | Espresso Martini | Process | Espresso martini - November 2024 - Sarah Stierch | Missvain | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Espresso_martini_-_November_2024_-_Sarah_Stierch.jpg) |
| `hot-chocolate.webp` / `.jpg` | French-Style Hot Chocolate | Hero | A cup of almost finished hot chocolate with marshmallows. | ᐃᓄᒃᑎᑐᑦ | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_cup_of_almost_finished_hot_chocolate_with_marshmallows..jpg) |
| `avocado-toast.webp` / `.jpg` | Ultimate Avocado Toast | Hero | Avocado & Smoked Salmon On Sourdough Toast - Amo 2026-02-04 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Avocado_%26_Smoked_Salmon_On_Sourdough_Toast_-_Amo_2026-02-04.jpg) |
| `avocado-toast-process.webp` / `.jpg` | Ultimate Avocado Toast | Process | Smashed Avocado - Potatoast 2026-05-02 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Smashed_Avocado_-_Potatoast_2026-05-02.jpg) |
| `overnight-oats.webp` / `.jpg` | Overnight Oats | Hero | Free overnight oats image | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5907604/photo-image-light-public-domain-food) |
| `spaghetti-aglio-e-olio.webp` / `.jpg` | Spaghetti Aglio e Olio | Hero | Spaghetti aglio | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5957145/free-public-domain-cc0-photo) |
| `spaghetti-aglio-e-olio-process.webp` / `.jpg` | Spaghetti Aglio e Olio | Process | Spaghetti aglio | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5943770/free-public-domain-cc0-photo) |
| `bucatini-all-amatriciana.webp` / `.jpg` | Bucatini all'Amatriciana | Hero | Bucatini allamatriciana | Popo le Chien | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bucatini_allamatriciana.jpg) |
| `pasta-alla-norma.webp` / `.jpg` | Pasta alla Norma | Hero | Pasta alla Norma - Wiki Loves Sicilia | 8w9d | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pasta_alla_Norma_-_Wiki_Loves_Sicilia.jpg) |
| `pasta-alla-norma-process.webp` / `.jpg` | Pasta alla Norma | Process | Pasta alla Norma - Wiki Loves Sicilia | 8w9d | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=165398200) |
| `melanzane-alla-parmigiana.webp` / `.jpg` | Melanzane alla Parmigiana | Hero | Melanzane alla parmigiana | Sugarfree at Italian Wikipedia | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Melanzane_alla_parmigiana.jpg) |
| `saltimbocca-alla-romana.webp` / `.jpg` | Saltimbocca alla Romana | Hero | Saltimbocca-2 | Joachim Pietzowski | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Saltimbocca-2.jpg) |
| `saltimbocca-alla-romana-process.webp` / `.jpg` | Saltimbocca alla Romana | Process | Saltimbocca at French restaurant in Tokyo | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Saltimbocca_at_French_restaurant_in_Tokyo.jpg) |
| `spaghetti-alle-vongole.webp` / `.jpg` | Spaghetti alle Vongole | Hero | Spaghetti alle vongole et crevettes | Arnaud 25 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Spaghetti_alle_vongole_et_crevettes.jpg) |
| `orecchiette-cime-di-rapa.webp` / `.jpg` | Orecchiette con Cime di Rapa | Hero | Lyon 7e - Restaurant Veronatuti - Orecchiette con le cime di rapa (plat originaire des Pouilles) | Romainbehar | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lyon_7e_-_Restaurant_Veronatuti_-_Orecchiette_con_le_cime_di_rapa_(plat_originaire_des_Pouilles).jpg) |
| `orecchiette-cime-di-rapa-process.webp` / `.jpg` | Orecchiette con Cime di Rapa | Process | Orecchiette con le cime di rapa nel pentolone | Florixc | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Orecchiette_con_le_cime_di_rapa_nel_pentolone.jpeg) |
| `panzanella.webp` / `.jpg` | Tuscan Panzanella | Hero | Fatto a Mano - Panzanella Salad and Guanciale Carbonara Pizza | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fatto_a_Mano_-_Panzanella_Salad_and_Guanciale_Carbonara_Pizza.jpg) |
| `creamy-polenta.webp` / `.jpg` | Creamy Parmesan Polenta | Hero | Crispy Polenta Wedges with Tomato Tapenade | jonel18 | CC0 1.0 | [Flickr](https://www.flickr.com/photos/138664879@N06/39437204865) |
| `creamy-polenta-process.webp` / `.jpg` | Creamy Parmesan Polenta | Process | PLAT CHICKEN FINGERS SAUCE CURRY LEGUME PROVENCAUX POLENTA | fonteynethekitchen | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/124368215@N08/29131049882) |
| `cannoli.webp` / `.jpg` | Sicilian Cannoli | Hero | CANNOLI ph Salvatore Farina | EraclitoPantaRei | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:CANNOLI_ph_Salvatore_Farina.jpg) |
| `tiramisu-gelato.webp` / `.jpg` | Vanilla Gelato | Hero | GELATO AL CAFFE' - ph Salvatore Farina | EraclitoPantaRei | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:GELATO_AL_CAFFE%27_-_ph_Salvatore_Farina.jpg) |
| `tiramisu-gelato-process.webp` / `.jpg` | Vanilla Gelato | Process | Gelato - Napier, New Zealand | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gelato_-_Napier,_New_Zealand.jpg) |
| `biscotti.webp` / `.jpg` | Almond Biscotti | Hero | Affogato with Amarretti Biscotti - Tavola Di Famiglia 2026-02-27 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Affogato_with_Amarretti_Biscotti_-_Tavola_Di_Famiglia_2026-02-27.jpg) |
| `torta-caprese.webp` / `.jpg` | Torta Caprese | Hero | Tortacaprese10quat | Mgdongarra | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tortacaprese10quat.jpeg) |
| `torta-caprese-process.webp` / `.jpg` | Torta Caprese | Process | Tortacapresespot | Mgdongarra | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tortacapresespot.jpeg) |
| `croque-monsieur.webp` / `.jpg` | Croque Monsieur | Hero | Croque Monsieur | Benoit5656 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Croque_Monsieur.jpg) |
| `gratin-dauphinois.webp` / `.jpg` | Gratin Dauphinois | Hero | A gratin d auphinois on april 2025 | GinoOnassis | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_gratin_d_auphinois_on_april_2025.jpg) |
| `gratin-dauphinois-process.webp` / `.jpg` | Gratin Dauphinois | Process | Gratin Dauphinois à l'Auberge Rouge (Saint-Maurice-de-Beynost) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gratin_Dauphinois_%C3%A0_l%27Auberge_Rouge_(Saint-Maurice-de-Beynost).JPG) |
| `blanquette-de-veau.webp` / `.jpg` | Blanquette de Veau | Hero | Blanquette de veau, Julien, Paris | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blanquette_de_veau,_Julien,_Paris.jpg) |
| `moules-marinieres.webp` / `.jpg` | Moules Marinières | Hero | Des moules marinières au Harenguier à Beynost en janvier 2022 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Des_moules_marini%C3%A8res_au_Harenguier_%C3%A0_Beynost_en_janvier_2022.jpg) |
| `moules-marinieres-process.webp` / `.jpg` | Moules Marinières | Process | Moules marinières 04 | Arnaud 25 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moules_marini%C3%A8res_04.jpg) |
| `tartiflette.webp` / `.jpg` | Tartiflette | Hero | Portion de tartiflette dans une assiette | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Portion_de_tartiflette_dans_une_assiette.jpg) |
| `pissaladiere.webp` / `.jpg` | Pissaladière | Hero | Pissaladière.familiale | Paul Munhoven | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pissaladi%C3%A8re.familiale.jpg) |
| `pot-au-feu.webp` / `.jpg` | Pot-au-Feu | Hero | Chabrot sur un pot-au-feu | Unknown early 1900s | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chabrot_sur_un_pot-au-feu.jpg) |
| `pot-au-feu-process.webp` / `.jpg` | Pot-au-Feu | Process | Pot-au-feu 3 | Arnaud 25 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pot-au-feu_3.jpg) |
| `sole-meuniere.webp` / `.jpg` | Sole Meunière | Hero | 700g Dover sole "à la meuniere" - English's of Brighton 2025-07-29 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:700g_Dover_sole_%22%C3%A0_la_meuniere%22_-_English%27s_of_Brighton_2025-07-29.jpg) |
| `sole-meuniere-process.webp` / `.jpg` | Sole Meunière | Process | Sole meunière - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sole_meuni%C3%A8re_-_Massachusetts.jpg) |
| `crepes-suzette.webp` / `.jpg` | Crêpes Suzette | Hero | Crépe Suzette 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cr%C3%A9pe_Suzette_001.jpg) |
| `profiteroles.webp` / `.jpg` | Profiteroles | Hero | Homemade profiteroles | Bellunese | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Homemade_profiteroles.jpg) |
| `profiteroles-process.webp` / `.jpg` | Profiteroles | Process | Lemon Meringue Profiterole - Milfey Patisserie 2026-03-20 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lemon_Meringue_Profiterole_-_Milfey_Patisserie_2026-03-20.jpg) |
| `mille-feuille.webp` / `.jpg` | Mille-Feuille | Hero | Mille-feuille, Paris | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mille-feuille,_Paris.jpg) |
| `clafoutis.webp` / `.jpg` | Cherry Clafoutis | Hero | Clafouti 1 | Brücke-Osteuropa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Clafouti_1.JPG) |
| `clafoutis-process.webp` / `.jpg` | Cherry Clafoutis | Process | Clafouti 2 | Brücke-Osteuropa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Clafouti_2.JPG) |
| `madeleines.webp` / `.jpg` | Madeleines | Hero | Kitayama madeleine 20200510 | Hahifuheho | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=90096886) |
| `chicken-karaage.webp` / `.jpg` | Chicken Karaage | Hero | Classic Chicken Karaage - Sunoso 2023-11-28 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=141523884) |
| `oyakodon.webp` / `.jpg` | Oyakodon | Hero | Oyakodon 005 | Ocdp | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=91262953) |
| `oyakodon-process.webp` / `.jpg` | Oyakodon | Process | Oyakodon 004 | Ocdp | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=91262952) |
| `omurice.webp` / `.jpg` | Omurice | Hero | Omurice with Demi-glace Sause in Osaka, Japan | 高砂の浦 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=120673052) |
| `takoyaki.webp` / `.jpg` | Takoyaki | Hero | Takoyaki dish | sayo ts | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=98953030) |
| `takoyaki-process.webp` / `.jpg` | Takoyaki | Process | File:06749jfCuisine Foods Takoyaki cooking Balut Penoy Baliuag Bulacanfvf 30.jpg | Judgefloro | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=61675033) |
| `zaru-soba.webp` / `.jpg` | Zaru Soba | Hero | Zaru-Soba-1 | Evelyn-rose | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=82147966) |
| `sukiyaki.webp` / `.jpg` | Sukiyaki | Hero | Sukiyaki hot pot, Japanese food | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/6743047/image-public-domain-illustrations-food) |
| `sukiyaki-process.webp` / `.jpg` | Sukiyaki | Process | Sukiyaki hot pot, Japanese food | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/6742968/image-public-domain-illustrations-food) |
| `agedashi-tofu.webp` / `.jpg` | Agedashi Tofu | Hero | Agedashi Tofu | LingLass | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=140935024) |
| `chawanmushi.webp` / `.jpg` | Chawanmushi | Hero | Chawanmushi | yanayrosen | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/187878392@N04/53047158750) |
| `chawanmushi-process.webp` / `.jpg` | Chawanmushi | Process | Le homard Breton,Chawanmushi, huile de fenouil. L'Anthocyane, Lannion | Syced | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=176885471) |
| `tamagoyaki.webp` / `.jpg` | Tamagoyaki | Hero | Tamagoyaki (3099935773) | Jessica Spengler from Brighton, United Kingdom | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tamagoyaki_(3099935773).jpg) |
| `dorayaki.webp` / `.jpg` | Dorayaki | Hero | Dorayaki 004 | Ocdp | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=119280668) |
| `dorayaki-process.webp` / `.jpg` | Dorayaki | Process | An-dorayaki roll | Syced | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=175244921) |
| `mochi.webp` / `.jpg` | Strawberry Daifuku Mochi | Hero | Daifuku 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Daifuku_001.jpg) |
| `japanese-milk-bread.webp` / `.jpg` | Japanese Milk Bread (Shokupan) | Hero | A top-down view of a breakfast plate containing sliced bread with butter, pastries, croissants, a donut, a glass of milk, and sunglasses. | Alina Kakshapati | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/9506a0c155/) |
| `japanese-milk-bread-process.webp` / `.jpg` | Japanese Milk Bread (Shokupan) | Process | Ankimo Pate, Milk Bread, Raspberries | yanayrosen | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/187878392@N04/52432089637) |
| `orange-chicken.webp` / `.jpg` | Orange Chicken | Hero | Orange Chicken - Thai Pad Thai 2025-12-03 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=179428367) |
| `sesame-chicken.webp` / `.jpg` | Sesame Chicken | Hero | Fried chicken pieces coated in sauce with sesame seeds 2025 | Faisal Ahammad | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=173798821) |
| `sesame-chicken-process.webp` / `.jpg` | Sesame Chicken | Process | Chicken Sesame-Soy Bowl | Red Lobster Lover Joe twitter:RLLoverJoe | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/164188154@N05/53714189781) |
| `hong-shao-rou.webp` / `.jpg` | Red-Braised Pork Belly | Hero | Red-Braised-Pork-Belly | duhao28989 | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/145458598@N05/32284895868) |
| `twice-cooked-pork.webp` / `.jpg` | Twice-Cooked Pork | Hero | Twice cooked pork of Gyoza-no-Manshu | 毒島みるく | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=89349602) |
| `twice-cooked-pork-process.webp` / `.jpg` | Twice-Cooked Pork | Process | Twice cooked pork lunch of Matsuya | 毒島みるく | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=81644549) |
| `xiao-long-bao.webp` / `.jpg` | Xiao Long Bao | Hero | Xiao Long Bao | chooyutshing | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/25802865@N08/55400955779) |
| `char-siu-bao.webp` / `.jpg` | Char Siu Bao | Hero | Char Siu Pork Bao : BBQ Roasted Pork Belly, Cucumber, Iceberg Lettuce and Pickled Chilies. | Swetha B Chandran | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/5065c4ecaa/) |
| `lo-mein.webp` / `.jpg` | Chicken Lo Mein | Hero | Lo mein noodles | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5955508/free-public-domain-cc0-photo) |
| `singapore-noodles.webp` / `.jpg` | Singapore Noodles | Hero | Singapore noodles | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5954552/free-public-domain-cc0-photo) |
| `singapore-noodles-process.webp` / `.jpg` | Singapore Noodles | Process | Mixed Vegetables with Singapore Laksa Noodles Soup - Noodles Soup, Brighton | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=129908014) |
| `cumin-lamb.webp` / `.jpg` | Xinjiang Cumin Lamb | Hero | Freshippo Mt. Dabie black sheep cumin lamb kebabs | Fumikas Sagisavas | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=151818207) |
| `tomato-egg-stir-fry.webp` / `.jpg` | Tomato and Egg Stir-Fry | Hero | Free tomato, mushroom eggs dish | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5903581/photo-image-public-domain-green-red) |
| `tomato-egg-stir-fry-process.webp` / `.jpg` | Tomato and Egg Stir-Fry | Process | A rich and creamy chicken curry (chicken maharaja) topped with boiled eggs, fresh coriander, cashews, and a drizzle of cream. Fresh tomato slices add color to this delicious dish. Captured in Nadakkavu, Kozhikode, Kerala. | Bigul Malayi | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/6076a663a9/) |
| `salt-and-pepper-squid.webp` / `.jpg` | Salt and Pepper Squid | Hero | Salt and Pepper Fresh Squid with Steamed Rice - CK Bistro 2024-07-17 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=150445387) |
| `congee.webp` / `.jpg` | Century Egg Congee | Hero | Purple sweet potato and black rice porridge | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Purple_sweet_potato_and_black_rice_porridge.jpg) |
| `congee-process.webp` / `.jpg` | Century Egg Congee | Process | Yonghui purple sweet potato and black rice porridge | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Yonghui_purple_sweet_potato_and_black_rice_porridge.jpg) |
| `paneer-tikka.webp` / `.jpg` | Paneer Tikka | Hero | Paneer tikka masala is an Indian dish of paneer tikka cheese served in a spiced gravy. | Raju Alam | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/3165c5006e/) |
| `chicken-korma.webp` / `.jpg` | Chicken Korma | Hero | Black Cardamom Chicken Korma - Leon 2023-10-14 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=139149685) |
| `chicken-korma-process.webp` / `.jpg` | Chicken Korma | Process | Chicken White Qorma (Korma) | Miansari66 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=16978862) |
| `malai-kofta.webp` / `.jpg` | Malai Kofta | Hero | Kofta Curry (cropped) | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kofta_Curry_(cropped).JPG) |
| `baingan-bharta.webp` / `.jpg` | Baingan Bharta | Hero | Baingan Ka Bhurta | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Baingan_Ka_Bhurta.JPG) |
| `baingan-bharta-process.webp` / `.jpg` | Baingan Bharta | Process | Baingan Ka Bhurta cropped | Miansari66 (original file) ; cropped by Off-shell | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Baingan_Ka_Bhurta_cropped.JPG) |
| `rajma.webp` / `.jpg` | Rajma Masala | Hero | Rajma. | Miansari66 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=24727937) |
| `pav-bhaji.webp` / `.jpg` | Pav Bhaji | Hero | Spicy pav bhaji with butter on top, served with soft toasted buns and onions. A popular Mumbai dish captured in Kurla, Mumbai. | Bigul Malayi | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/27069d9b35/) |
| `pav-bhaji-process.webp` / `.jpg` | Pav Bhaji | Process | Pav bhaji !2 | Khushi Shah 280 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=178301192) |
| `chole-bhature.webp` / `.jpg` | Chole Bhature | Hero | Chhola Bhatura, also known as Chole Bhature. An Indian north Indian traditional cuisine, combination of spicy white chickpeas and deep-fried bread made from refined wheat flour | Hemant Kumar Chhapoliya | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/72265bde74/) |
| `idli-sambar.webp` / `.jpg` | Idli Sambar | Hero | File:Breakfast idli sambar.jpg | PrasanthR | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=24253524) |
| `idli-sambar-process.webp` / `.jpg` | Idli Sambar | Process | Sambar-idli | Mowglee | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=14496374) |
| `kerala-fish-curry.webp` / `.jpg` | Kerala Fish Curry | Hero | A traditional Kerala fish curry with tomatoes, and coconut milk, served in a black pot with a spoon, on a kitchen counter. | Ajith R N | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/7016637de7/) |
| `kerala-fish-curry-process.webp` / `.jpg` | Kerala Fish Curry | Process | Kerala Style Kappa Puzhukku (Mashed Tapioca) and Fish Curry. | Ajith R N | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/71765729d9/) |
| `chapati.webp` / `.jpg` | Chapati (Roti) | Hero | A golden-brown flatbread (roti/chapati) freshly cooked in a small black pan, held up against a lush green meadow. | appealdahal | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/7876a26595/) |
| `kheer.webp` / `.jpg` | Rice Kheer | Hero | Creamy rice pudding topped with raisins. A simple, homemade comfort food to brighten the day! | Sohail Anwar | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/5106a88d4b/) |
| `kheer-process.webp` / `.jpg` | Rice Kheer | Process | A long buffet table is laden with an assortment of breakfast pastries, including croissants, muffins, sliced cakes, and a bowl of rice pudding. | Faisal Ahammad | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/72768c90e4/) |
| `jalebi.webp` / `.jpg` | Jalebi | Hero | A close-up of bright orange jalebis piled on a metal tray, with syrup glistening to create a warm, indulgent feel. | Tawhid Sadman | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/5686967b2a/) |
| `aloo-paratha.webp` / `.jpg` | Aloo Paratha | Hero | A aloo paratha with visible pieces of onions and spices is being cooked on a black pan. | Milan Hamal | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/33167fd10c/) |
| `aloo-paratha-process.webp` / `.jpg` | Aloo Paratha | Process | Tapenade and green olives on aloo gobi paratha - Massachusetts | Daderot | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=127772760) |
| `birria-tacos.webp` / `.jpg` | Birria Tacos | Hero | Tacos de Birria with consomé and Agua Fresca | Itissuggested | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=146036547) |
| `chilaquiles.webp` / `.jpg` | Chilaquiles Verdes | Hero | Chilaquiles | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54003785014) |
| `mission-burrito.webp` / `.jpg` | Mission-Style Burrito | Hero | Burrito | samuelfernandezrivera | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=113332258) |
| `nachos.webp` / `.jpg` | Loaded Nachos | Hero | 2018-02-01-Guacamole mit Nachos-7937 | Superbass | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=66570396) |
| `cochinita-pibil.webp` / `.jpg` | Cochinita Pibil | Hero | Cochinita pibil, Mazatlán, 22 de marzo de 2023 02 | El Nuevo Doge | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=129876562) |
| `sopes.webp` / `.jpg` | Sopes | Hero | Sopes al pastor - Roland in Vancouver 2431 | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/161893830) |
| `refried-beans.webp` / `.jpg` | Refried Beans | Hero | Tacos with refried beans and textured vegetable protein, plus salad with homemade tea egg, plus cheddar cheese, olive oil, and black pepper - Massachusetts | Daderot | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=117590334) |
| `flan-napolitano.webp` / `.jpg` | Flan Napolitano | Hero | Flan caramel custard | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5960607/free-public-domain-cc0-photo) |
| `tres-leches-cake.webp` / `.jpg` | Tres Leches Cake | Hero | File:TresLechesCake.jpg | Lorelei Norman (Beau002 (talk)) | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=9768560) |
| `michelada.webp` / `.jpg` | Michelada | Hero | Michelada Alcohol | Kh%FCrt%20Williams | CC0 1.0 | [Stocksnap](https://stocksnap.io/photo/michelada-alcohol-KD9M9FXFPL) |
| `michelada-process.webp` / `.jpg` | Michelada | Process | Michelada | Radeksz | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Michelada.jpg) |
| `beef-stew.webp` / `.jpg` | Hearty Beef Stew | Hero | Beef stew at Ben.z - Roland in Vancouver (021) | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/216211056) |
| `jambalaya.webp` / `.jpg` | Louisiana Jambalaya | Hero | Campfire Jambalaya | cogdogblog | CC0 1.0 | [Flickr](https://www.flickr.com/photos/37996646802@N01/55473799630) |
| `gumbo.webp` / `.jpg` | Chicken and Sausage Gumbo | Hero | Gumbo and cheese grits French Press Lafayette Louisiana | amanderson2 | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/49399018@N00/37235887595) |
| `shrimp-and-grits.webp` / `.jpg` | Shrimp and Grits | Hero | Cheesy Shrimp and Grits | Nile Flores | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/9664937d74/) |
| `chicken-fried-steak.webp` / `.jpg` | Chicken Fried Steak | Hero | Chicken fried steak | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5963401/free-public-domain-cc0-photo) |
| `lobster-roll.webp` / `.jpg` | Maine Lobster Roll | Hero | Maine-style lobster roll | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54696160151) |
| `reuben-sandwich.webp` / `.jpg` | Reuben Sandwich | Hero | Reuben sandwich | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54096609663) |
| `blt-sandwich.webp` / `.jpg` | The Perfect BLT | Hero | BLT sandwich table American deli | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/3305390/free-photo-image-food-restaurant-blt-sandwich) |
| `tuna-melt.webp` / `.jpg` | Tuna Melt | Hero | Tuna melt - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tuna_melt_-_Massachusetts.jpg) |
| `tuna-melt-process.webp` / `.jpg` | Tuna Melt | Process | Tuna melt with cheddar, mustard or guacamole, and black pepper - Massachusets | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tuna_melt_with_cheddar,_mustard_or_guacamole,_and_black_pepper_-_Massachusets.jpg) |
| `deviled-eggs.webp` / `.jpg` | Deviled Eggs | Hero | Kimchi Deviled Eggs | Nile Flores | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/165649495c/) |
| `buffalo-chicken-dip.webp` / `.jpg` | Buffalo Chicken Dip | Hero | Buffalo chicken | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5949111/free-public-domain-cc0-photo) |
| `buffalo-chicken-dip-process.webp` / `.jpg` | Buffalo Chicken Dip | Process | Buffalo chicken | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5946558/free-public-domain-cc0-photo) |
| `mozzarella-sticks.webp` / `.jpg` | Mozzarella Sticks | Hero | Mozzarella sticks | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54076133872) |
| `mozzarella-sticks-process.webp` / `.jpg` | Mozzarella Sticks | Process | Mozzarella sticks | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/53953060106) |
| `creamy-coleslaw.webp` / `.jpg` | Creamy Coleslaw | Hero | Coleslaw | Red Lobster Lover Joe twitter:RLLoverJoe | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/164188154@N05/55348353519) |
| `classic-potato-salad.webp` / `.jpg` | Classic Potato Salad | Hero | Kartoffelsalat mit Borretsch | Schnobby | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kartoffelsalat_mit_Borretsch.jpg) |
| `classic-potato-salad-process.webp` / `.jpg` | Classic Potato Salad | Process | Schwäbischer Kartoffelsalat mit Maultaschen | Brücke-Osteuropa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Schw%C3%A4bischer_Kartoffelsalat_mit_Maultaschen.JPG) |
| `boston-baked-beans.webp` / `.jpg` | Boston Baked Beans | Hero | Baked beans with molasses | U.S. Fish and Wildlife Service - Midwest Region | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/49208525@N08/4974247795) |
| `classic-omelette.webp` / `.jpg` | Three-Egg Omelette | Hero | Prawns & Feta Omelette | o.tacke | CC0 1.0 | [Flickr](https://www.flickr.com/photos/89882948@N05/22723171948) |
| `classic-omelette-process.webp` / `.jpg` | Three-Egg Omelette | Process | Japaness Omelette (5) | 林彌猴 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=154065265) |
| `hash-browns.webp` / `.jpg` | Crispy Hash Browns | Hero | Bacon, hash browns, and waffle - Auckland, New Zealand | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bacon,_hash_browns,_and_waffle_-_Auckland,_New_Zealand.jpg) |
| `biscuits-and-gravy.webp` / `.jpg` | Biscuits and Sausage Gravy | Hero | Biscuits and gravy | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/53959838431) |
| `biscuits-and-gravy-process.webp` / `.jpg` | Biscuits and Sausage Gravy | Process | Closeup of American biscuits and gravy in a cast iron pan. Cinnamon swirl toast and breakfast casserole in the background. | Topher | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/73967f7c30/) |
| `cinnamon-sugar-donuts.webp` / `.jpg` | Cinnamon Sugar Doughnuts | Hero | Doughnuts | Worlds Direction | CC0 1.0 | [Flickr](https://www.flickr.com/photos/144661696@N05/34353027753) |
| `bagels.webp` / `.jpg` | New York Bagels | Hero | Bagels | o.tacke | CC0 1.0 | [Flickr](https://www.flickr.com/photos/89882948@N05/22518837754) |
| `bagels-process.webp` / `.jpg` | New York Bagels | Process | Bagels and Cream Cheese | Midwest Region FJMC | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/72297159@N07/14122317271) |
| `cornbread.webp` / `.jpg` | Skillet Cornbread | Hero | New Cornbread Recipe | cogdogblog | CC0 1.0 | [Flickr](https://www.flickr.com/photos/37996646802@N01/31063929372) |
| `snickerdoodles.webp` / `.jpg` | Snickerdoodles | Hero | Snickerdoodle cookies with a surprise: a yummy streak of gochujang pepper paste inside each one. | developerjustin | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/714659170c/) |
| `snickerdoodles-process.webp` / `.jpg` | Snickerdoodles | Process | Freshly baked snickerdoodle sugar cookies | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/3282865/free-photo-image-cookie-biscuit-cc0) |
| `peanut-butter-cookies.webp` / `.jpg` | Peanut Butter Cookies | Hero | Peanut butter cookies | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5962893/free-public-domain-cc0-photo) |
| `pecan-pie.webp` / `.jpg` | Pecan Pie | Hero | Apple pecan pie | Nutrition, Food Safety & Health | CC0 1.0 | [Flickr](https://www.flickr.com/photos/93936679@N05/46304157621) |
| `pecan-pie-process.webp` / `.jpg` | Pecan Pie | Process | Pecan Pie | cogdogblog | CC0 1.0 | [Flickr](https://www.flickr.com/photos/37996646802@N01/49280372621) |
| `lemon-meringue-pie.webp` / `.jpg` | Lemon Meringue Pie | Hero | Made lemon meringue pie today. | Kim Siever | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/57873306@N00/24482268722) |
| `smores.webp` / `.jpg` | S'mores | Hero | smores | WPAUMC | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/125163985@N05/36067643652) |
| `smores-process.webp` / `.jpg` | S'mores | Process | Smores dessert served sundae cup | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/11524477/photo-image-woman-public-domain-wedding) |
| `vanilla-cupcakes.webp` / `.jpg` | Vanilla Cupcakes | Hero | Engagement cupcakes with chocolate frosting and pink decorations | Kristin Ausk | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Engagement_cupcakes_with_chocolate_frosting_and_pink_decorations.jpg) |
| `cottage-pie.webp` / `.jpg` | Cottage Pie | Hero | Cottage pie | sarahstierch | CC0 1.0 | [Flickr](https://www.flickr.com/photos/7633518@N08/54327261307) |
| `cornish-pasty.webp` / `.jpg` | Cornish Pasty | Hero | Cornish pasties at Cornish Pasty Shop, Brighton 2023-06-19 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cornish_pasties_at_Cornish_Pasty_Shop,_Brighton_2023-06-19.jpg) |
| `roast-beef-yorkshire.webp` / `.jpg` | Roast Beef and Yorkshire Puddings | Hero | Roast Topside of Beef - Sheppy's 2025-07-27 | Andy Li | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=171283080) |
| `welsh-rarebit.webp` / `.jpg` | Welsh Rarebit | Hero | Welsh Rarebit - Hoogly Tea Lodge 2024-03-24 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Welsh_Rarebit_-_Hoogly_Tea_Lodge_2024-03-24.jpg) |
| `eton-mess.webp` / `.jpg` | Eton Mess | Hero | Psycadelic Eton mess | terri_bateman | CC0 1.0 | [Flickr](https://www.flickr.com/photos/134468672@N06/38483557254) |
| `eton-mess-process.webp` / `.jpg` | Eton Mess | Process | A Tasty Mess | comedy_nose | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/23408922@N07/16375419628) |
| `victoria-sponge.webp` / `.jpg` | Victoria Sponge | Hero | A piece of Victoria Sponge - T @ The Dials 2024-01-06 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_piece_of_Victoria_Sponge_-_T_@_The_Dials_2024-01-06.jpg) |
| `bakewell-tart.webp` / `.jpg` | Bakewell Tart | Hero | Almond bakewell - Cafe Coho 2025-07-21 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Almond_bakewell_-_Cafe_Coho_2025-07-21.jpg) |
| `bakewell-tart-process.webp` / `.jpg` | Bakewell Tart | Process | Blueberry bakewell - Bread & Milk 2025-01-23 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blueberry_bakewell_-_Bread_%26_Milk_2025-01-23.jpg) |
| `lemon-drizzle-cake.webp` / `.jpg` | Lemon Drizzle Cake | Hero | Lemon Drizzle Slice - Café W 2025-12-26 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lemon_Drizzle_Slice_-_Caf%C3%A9_W_2025-12-26.jpg) |
| `shortbread.webp` / `.jpg` | Scottish Shortbread | Hero | Free shortbread biscuit plate image | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5925298/photo-image-background-public-domain-food) |
| `pastitsio.webp` / `.jpg` | Pastitsio | Hero | Pastitsio | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5959452/free-public-domain-cc0-photo) |
| `saganaki.webp` / `.jpg` | Saganaki | Hero | Fried cheese platter | Jakub Kapusnak | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/447889/free-photo-image-sampling-food-platter-cc0) |
| `fasolada.webp` / `.jpg` | Fasolada | Hero | Community size vegetarian fresh green bean soup, tomatos, pot, kitchen, Breitenbush Hot Springs, Breitenbush, Oregon, USA | Wonderlane | CC0 1.0 | [Flickr](https://www.flickr.com/photos/71401718@N00/6231887789) |
| `fasolada-process.webp` / `.jpg` | Fasolada | Process | Yummy bean and noodle soup at Sciue | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/60973633) |
| `galaktoboureko.webp` / `.jpg` | Galaktoboureko | Hero | Galaktoboureko | Badseed | CC BY 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Galaktoboureko.jpg) |
| `loukoumades.webp` / `.jpg` | Loukoumades | Hero | honey coated fritter-Gala Seafood Restaurant 26nov05 - 8 | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/68218950) |
| `maqluba.webp` / `.jpg` | Maqluba | Hero | Modern Iraqi maqluba with two different rice colors | Ghazwan Mattoka | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Modern_Iraqi_maqluba_with_two_different_rice_colors.jpg) |
| `maqluba-process.webp` / `.jpg` | Maqluba | Process | طبخة المقلوبة Maqluba | Ramadan9044 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%D8%B7%D8%A8%D8%AE%D8%A9_%D8%A7%D9%84%D9%85%D9%82%D9%84%D9%88%D8%A8%D8%A9_Maqluba.jpg) |
| `kibbeh.webp` / `.jpg` | Baked Kibbeh | Hero | Fried lamb kibbeh 1 | Dr. Bernd Gross | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fried_lamb_kibbeh_1.JPG) |
| `labneh.webp` / `.jpg` | Labneh with Za'atar | Hero | Labneh (5196911587) | Leslie Seaton from Seattle, WA, USA | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Labneh_(5196911587).jpg) |
| `labneh-process.webp` / `.jpg` | Labneh with Za'atar | Process | Labneh (9328907408) | Karen and Brad Emerson | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Labneh_(9328907408).jpg) |
| `manakish-zaatar.webp` / `.jpg` | Manakish Za'atar | Hero | Manakish Za'atar | myahya | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Manakish_Za%27atar.jpg) |
| `basbousa.webp` / `.jpg` | Basbousa | Hero | Corn revani | さえぼー | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Corn_revani.jpg) |
| `basbousa-process.webp` / `.jpg` | Basbousa | Process | Greek revani | Akerbeltz | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Greek_revani.JPG) |
| `lamb-mandi.webp` / `.jpg` | Lamb Mandi | Hero | Mandi Lamb Shank, Lepak @ Sultan, 62 Bussorah St, Singapore (01) | Moheen Reeyad | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mandi_Lamb_Shank,_Lepak_@_Sultan,_62_Bussorah_St,_Singapore_(01).jpg) |
| `imam-bayildi.webp` / `.jpg` | Imam Bayildi | Hero | Imam bayıldı | E4024 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Imam_bay%C4%B1ld%C4%B1.jpg) |
| `imam-bayildi-process.webp` / `.jpg` | Imam Bayildi | Process | İmam bayıldı AvL | AlexanderVanLoon | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%C4%B0mam_bay%C4%B1ld%C4%B1_AvL.JPG) |
| `turkish-pide.webp` / `.jpg` | Turkish Pide | Hero | Nazilli-Tahinli-Pide-20160711 203037 | Erdalkara | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nazilli-Tahinli-Pide-20160711_203037.jpg) |
| `turkish-delight.webp` / `.jpg` | Turkish Delight | Hero | Turkish Delight | Laceandsugarfrills | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/134899956@N07/29549729287) |
| `salmorejo.webp` / `.jpg` | Salmorejo | Hero | Food. Salmorejo, ensaladilla, poke. Food served at WordCamp Sevilla 2024. | Luis Rull | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/222673115a/) |
| `salmorejo-process.webp` / `.jpg` | Salmorejo | Process | A plate of four open-faced sandwiches on a white napkin. Each sandwich has a thick layer of salmorejo topped with chopped herbs, small pieces of boiled egg, and bits of ibérico. There are a small glass of water and a cup of dark coffee in a saucer are visible in the background. | Nilo Velez | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/874685c105/) |
| `pan-con-tomate.webp` / `.jpg` | Pan con Tomate | Hero | toasted bread tomato | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5942156/free-public-domain-cc0-photo) |
| `pulpo-a-la-gallega.webp` / `.jpg` | Pulpo a la Gallega | Hero | pulpo (polbo) a la gallega | M. Martin Vicente | CC0 1.0 | [Flickr](https://www.flickr.com/photos/32179778@N00/53804211699) |
| `pastel-de-nata.webp` / `.jpg` | Pastéis de Nata | Hero | Pastel de nata closeu up Porto Portugal | amanderson2 | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/49399018@N00/52787047151) |
| `pastel-de-nata-process.webp` / `.jpg` | Pastéis de Nata | Process | Pastel de Nata Porto Portugal | amanderson2 | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/49399018@N00/52786494622) |
| `caldo-verde.webp` / `.jpg` | Caldo Verde | Hero | Caldo Verde | Michael | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Caldo_Verde.jpg) |
| `piri-piri-chicken.webp` / `.jpg` | Piri Piri Chicken | Hero | 2018-02-03 Chicken Piri-Piri, Albufeira | Kolforn (Kolforn) I'd appreciate if you could mail me (Kolforn@gmail.com) if you want to use this picture out of the Wikimedia project scope. This file is licensed under the Creative Commons Attribution-Share Alike 4.0 International license. You are free: to share – to copy, distribute and transmit the work to remix – to adapt the work Under the following conditions: attribution – You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use. share alike – If you remix, transform, or build upon the material, you must distribute your contributions under the same or compatible license as the original.https://creativecommons.org/licenses/by-sa/4.0CC BY-SA 4.0 Creative Commons Attribution-Share Alike 4.0 truetrue | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:2018-02-03_Chicken_Piri-Piri,_Albufeira.JPG) |
| `khao-soi.webp` / `.jpg` | Khao Soi | Hero | Khao soi - Bangkok - 2017-05-07 (002) | Iudexvivorum | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=58876601) |
| `larb-gai.webp` / `.jpg` | Larb Gai | Hero | Duck larb | ernie_nh7l | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/37789131@N08/48849223896) |
| `thai-red-curry.webp` / `.jpg` | Thai Red Curry | Hero | Red curry | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/3282967/free-photo-image-thai-food-photography-spicy) |
| `pad-see-ew.webp` / `.jpg` | Pad See Ew | Hero | Chicken pad see ew at Rice and Noodles Restaurant in Franconia | Ser Amantio di Nicolao | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_pad_see_ew_at_Rice_and_Noodles_Restaurant_in_Franconia.jpg) |
| `thai-iced-tea.webp` / `.jpg` | Thai Iced Tea | Hero | Cannon Beach Thai Cuisine Thai Iced Tea | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/79456295) |
| `bun-bo-hue.webp` / `.jpg` | Bún Bò Huế | Hero | Bun Bo Hue Homemade | Loufleur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bun_Bo_Hue_Homemade.jpg) |
| `com-tam.webp` / `.jpg` | Cơm Tấm | Hero | Cơm tấm SG, sườn cọng nướng, ng23th8n2022 (2) | Phương Huy | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:C%C6%A1m_t%E1%BA%A5m_SG,_s%C6%B0%E1%BB%9Dn_c%E1%BB%8Dng_n%C6%B0%E1%BB%9Bng,_ng23th8n2022_(2).jpg) |
| `com-tam-process.webp` / `.jpg` | Cơm Tấm | Process | Cơm tấm SG, sườn cọng nướng, ng23th8n2022 (3) | Phương Huy | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:C%C6%A1m_t%E1%BA%A5m_SG,_s%C6%B0%E1%BB%9Dn_c%E1%BB%8Dng_n%C6%B0%E1%BB%9Bng,_ng23th8n2022_(3).jpg) |
| `cha-gio.webp` / `.jpg` | Chả Giò | Hero | Golden-brown spring rolls on paper, resting on a patterned plate. The rolls appear crisp and freshly fried, conveying a warm and appetizing tone. | Tawhid Sadman | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/38769d3a75/) |
| `kimbap.webp` / `.jpg` | Kimbap | Hero | Kimbap | yanayrosen | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/187878392@N04/52201736125) |
| `kimbap-process.webp` / `.jpg` | Kimbap | Process | Kimbap | yanayrosen | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/187878392@N04/52200237802) |
| `sundubu-jjigae.webp` / `.jpg` | Sundubu Jjigae | Hero | Haemul-sundubu-jjigae | Ajumeoni | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Haemul-sundubu-jjigae.jpg) |
| `galbi.webp` / `.jpg` | Galbi (Korean Short Ribs) | Hero | Korean braised beef short ribs-Galbijjim | by Junho Jung at Flickr from South Korea | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korean_braised_beef_short_ribs-Galbijjim.jpg) |
| `galbi-process.webp` / `.jpg` | Galbi (Korean Short Ribs) | Process | Korean beef short ribs | Tim Evanson | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Korean_beef_short_ribs.jpg) |
| `haemul-pajeon.webp` / `.jpg` | Haemul Pajeon | Hero | Pajeon | Brücke-Osteuropa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pajeon.jpg) |
| `dakgalbi.webp` / `.jpg` | Dakgalbi | Hero | Chuncheon sizzling chicken (Dakgalbi) | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chuncheon_sizzling_chicken_(Dakgalbi).jpg) |
| `naengmyeon.webp` / `.jpg` | Mul Naengmyeon | Hero | Naengmyeon old noodle in Korea | Suohros | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Naengmyeon_old_noodle_in_Korea.jpg) |
| `naengmyeon-process.webp` / `.jpg` | Mul Naengmyeon | Process | Naengmyeon (cold noodles) | wjlee4284 | CC BY 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Naengmyeon_(cold_noodles).jpg) |
| `nasi-goreng.webp` / `.jpg` | Nasi Goreng | Hero | Nasi goreng | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5959832/free-public-domain-cc0-photo) |
| `beef-rendang.webp` / `.jpg` | Beef Rendang | Hero | Rendang Rasa | さえぼー | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=182477517) |
| `chicken-satay.webp` / `.jpg` | Chicken Satay | Hero | Grilling chicken satay | Jakub Kapusnak | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/447747/free-photo-image-grilling-grill-chicken-food-cart) |
| `gado-gado.webp` / `.jpg` | Gado-Gado | Hero | Gado gado at Dewi Sri in Rotterdam - Roland in NL (113) | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/275615037) |
| `gado-gado-process.webp` / `.jpg` | Gado-Gado | Process | Gado gado at Indo Cafe | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/39415813) |
| `laksa.webp` / `.jpg` | Curry Laksa | Hero | Local food - hot and spicy laksa | GeorgeTan#2...INACTIVE NOW | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/171425013@N02/48129073581) |
| `char-kway-teow.webp` / `.jpg` | Char Kway Teow | Hero | Char Kway Teow | chooyutshing | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/25802865@N08/55264429771) |
| `char-kway-teow-process.webp` / `.jpg` | Char Kway Teow | Process | Char Kway Teow | chooyutshing | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/25802865@N08/55070290127) |
| `hainanese-chicken-rice.webp` / `.jpg` | Hainanese Chicken Rice | Hero | Poached Chicken with Soy Sauce | chooyutshing | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/25802865@N08/55045042151) |
| `chicken-adobo.webp` / `.jpg` | Chicken Adobo | Hero | 0959Filipino chicken adobo with potatoes in lemon grass 02 | JFVelasquez Floro | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=103180175) |
| `arepas.webp` / `.jpg` | Arepas | Hero | Arepas de maiz amarillo | maguVE | CC0 1.0 | [Flickr](https://www.flickr.com/photos/57467279@N03/52614577366) |
| `pupusas.webp` / `.jpg` | Pupusas | Hero | Condiments for Pupusas in El Salvador 2012 | Ll1324 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Condiments_for_Pupusas_in_El_Salvador_2012.jpg) |
| `pupusas-process.webp` / `.jpg` | Pupusas | Process | Dando la vuelta a las pupusas | Ll1324 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dando_la_vuelta_a_las_pupusas.jpg) |
| `chimichurri-steak.webp` / `.jpg` | Chimichurri Steak | Hero | Skirt steak with chimichurri sauce, scrambled eggs, potatoes, and a salad - San Francisco, CA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Skirt_steak_with_chimichurri_sauce,_scrambled_eggs,_potatoes,_and_a_salad_-_San_Francisco,_CA.jpg) |
| `lomo-saltado.webp` / `.jpg` | Lomo Saltado | Hero | Lomo Saltado. Cocina Peruana | MI PERÚ | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/134894678@N07/25528534673) |
| `aji-de-gallina.webp` / `.jpg` | Ají de Gallina | Hero | aji de gallina, cayenne pepper, paprika, pimiento | 葉子 | CC0 1.0 | [Inaturalist](https://www.inaturalist.org/photos/56579632) |
| `moqueca.webp` / `.jpg` | Moqueca Baiana | Hero | Brazilian Fish Moqueca | Mutsch Ado about History | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brazilian_Fish_Moqueca.jpg) |
| `moqueca-process.webp` / `.jpg` | Moqueca Baiana | Process | Moqueca | BR | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moqueca.jpg) |
| `alfajores.webp` / `.jpg` | Alfajores | Hero | Alfajores de quinoa dinkenesh | Nicoviveros | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Alfajores_de_quinoa_dinkenesh.jpg) |
| `chicken-kiev.webp` / `.jpg` | Chicken Kiev | Hero | Chicken kiev | Jon Sullivan | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_kiev.jpg) |
| `blini.webp` / `.jpg` | Blini with Soured Cream | Hero | Blini Tanya | The original uploader was Hugo.arg at Lithuanian Wikipedia. | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Blini_Tanya.jpg) |
| `blini-process.webp` / `.jpg` | Blini with Soured Cream | Process | Slicing Pancakes with Fork 374819 | Shared Food | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Slicing_Pancakes_with_Fork_374819.jpg) |
| `olivier-salad.webp` / `.jpg` | Olivier Salad | Hero | Russian Olivier salad | AlMare | CC BY 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Russian_Olivier_salad.jpg) |
| `golabki.webp` / `.jpg` | Gołąbki | Hero | Cabbage rolls in oven pan | Kotivalo | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cabbage_rolls_in_oven_pan.jpg) |
| `spaetzle.webp` / `.jpg` | Käsespätzle | Hero | Käsespätzle Wurstküche Tübingen | Dktue | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:K%C3%A4sesp%C3%A4tzle_Wurstk%C3%BCche_T%C3%BCbingen.jpg) |
| `sauerbraten.webp` / `.jpg` | Sauerbraten | Hero | Sauerbraten with potato dumplings | Jameres | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sauerbraten_with_potato_dumplings.jpg) |
| `gravlax.webp` / `.jpg` | Gravlax | Hero | Gravlax 02 | Arnaud 25 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=184749869) |
| `kanelbullar.webp` / `.jpg` | Kanelbullar | Hero | cinnamon bun | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/6066158/free-public-domain-cc0-photo) |
| `kanelbullar-process.webp` / `.jpg` | Kanelbullar | Process | Cinnamon Pastries | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5968233/cinnamon-pastries) |
| `jollof-rice.webp` / `.jpg` | Jollof Rice | Hero | Jollof rice and egg | KISUMAR123 | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=177742540) |
| `egusi-soup.webp` / `.jpg` | Egusi Soup | Hero | Egusi soup with beef | Fatimah Bello | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Egusi_soup_with_beef.jpg) |
| `egusi-soup-process.webp` / `.jpg` | Egusi Soup | Process | Egusi Delicacy | Ourlibrary | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Egusi_Delicacy.jpg) |
| `suya.webp` / `.jpg` | Beef Suya | Hero | SuyavarietiesTX | WhisperToMe | CC0 1.0 | [Wikimedia](https://commons.wikimedia.org/w/index.php?curid=28189563) |
| `doro-wat.webp` / `.jpg` | Doro Wat | Hero | Doro Wat at Three Muses New Orleans June 2018 1 | Infrogmation of New Orleans | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Doro_Wat_at_Three_Muses_New_Orleans_June_2018_1.jpg) |
| `doro-wat-process.webp` / `.jpg` | Doro Wat | Process | Injera and doro wat | Edsel Little | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Injera_and_doro_wat.jpg) |
| `bobotie.webp` / `.jpg` | Bobotie | Hero | Bitesized morsel of bobotie | Stefan Magdalinski from Cape Town, South Africa | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bitesized_morsel_of_bobotie.jpg) |
| `jamaican-curry-goat.webp` / `.jpg` | Jamaican Curry Goat | Hero | Curry Goat and Rice | Leon Brocard from London, UK | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Curry_Goat_and_Rice.jpg) |
| `jamaican-curry-goat-process.webp` / `.jpg` | Jamaican Curry Goat | Process | Curry Goat | MaxMahem | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Curry_Goat.jpg) |
| `ackee-and-saltfish.webp` / `.jpg` | Ackee and Saltfish | Hero | Ackee-saltfish | Dug Song from Ann Arbor, MI, USA | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ackee-saltfish.jpg) |
| `fried-plantain.webp` / `.jpg` | Fried Sweet Plantain | Hero | A plate with a seasoned chicken leg, rice with red beans, and two fried plantain slices. | diegolopez97 | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/8406a57100/) |
| `fried-plantain-process.webp` / `.jpg` | Fried Sweet Plantain | Process | Fried plantain | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5961254/free-public-domain-cc0-photo) |
| `acai-bowl.webp` / `.jpg` | Açaí Bowl | Hero | Healthy smoothie acai bowl berries | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/3282999/free-photo-image-organic-food-healthy-breakfast-bowl) |
| `acai-bowl-process.webp` / `.jpg` | Açaí Bowl | Process | Free photo Acai bowl filled | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5925657/photo-image-public-domain-plant-wood) |
| `chia-pudding.webp` / `.jpg` | Chia Pudding | Hero | Free colorful chia pudding coconut | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5918754/photo-image-public-domain-blue-food) |
| `granola.webp` / `.jpg` | Maple Pecan Granola | Hero | Muesli Granola | JESHOOTS.com | CC0 1.0 | [Stocksnap](https://stocksnap.io/photo/muesli-granola-IG3CNZ7B8L) |
| `granola-process.webp` / `.jpg` | Maple Pecan Granola | Process | Yogurt Granola | Daria Nepriakhina | CC0 1.0 | [Stocksnap](https://stocksnap.io/photo/yogurt-granola-ELZKUZYJK0) |
| `quinoa-salad.webp` / `.jpg` | Lemon Herb Quinoa Salad | Hero | Quinoa salad | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5963648/free-public-domain-cc0-photo) |
| `lentil-soup.webp` / `.jpg` | Spiced Red Lentil Soup | Hero | Fresh creamy lentil soup, white | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5926638/photo-image-public-domain-plant-food) |
| `lentil-soup-process.webp` / `.jpg` | Spiced Red Lentil Soup | Process | A traditional Nepali thakali thali with rice, dal (lentil soup), mixed vegetables, pickled vegetables, and a green salad, all served on a round brass plate. | Alina Kakshapati | CC0 1.0 | [Wordpress](https://wordpress.org/photos/photo/26968aea0e/) |
| `negroni.webp` / `.jpg` | Negroni | Hero | Negroni cocktail | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5951428/free-public-domain-cc0-photo) |
| `pina-colada.webp` / `.jpg` | Piña Colada | Hero | Free pina colada beach background | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5904619/photo-image-cloud-public-domain-art) |
| `bloody-mary.webp` / `.jpg` | Bloody Mary | Hero | [20/365] Bloody Mary | pasukaru76 | CC0 1.0 | [Flickr](https://www.flickr.com/photos/38451115@N04/5009140626) |
| `bubble-tea.webp` / `.jpg` | Brown Sugar Bubble Tea | Hero | bubble tea in the morning | cclogg | CC0 1.0 | [Flickr](https://www.flickr.com/photos/46244586@N02/9735657636) |
| `bubble-tea-process.webp` / `.jpg` | Brown Sugar Bubble Tea | Process | Mon01Sep2004:Driving Home - Gastown to Bubble Tea on Burrard | roland | CC0 1.0 | [Flickr](https://www.flickr.com/photos/35034347371@N01/320177) |
| `mulled-wine.webp` / `.jpg` | Mulled Wine | Hero | Free mulled wine image | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5917422/image-christmas-public-domain-free) |
| `ragu-napoletano.webp` / `.jpg` | Ragù Napoletano | Hero | Short rib ragu on homemade pappardelle | Jeremy Keith | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Short_rib_ragu_on_homemade_pappardelle.jpg) |
| `pasta-e-fagioli.webp` / `.jpg` | Pasta e Fagioli | Hero | Pasta e fagioli - minestra | valtercirillo | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pasta_e_fagioli_-_minestra.jpg) |
| `vitello-tonnato.webp` / `.jpg` | Vitello Tonnato | Hero | Vitello tonnato | jules | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Vitello_tonnato.jpg) |
| `focaccia-genovese.webp` / `.jpg` | Focaccia Genovese | Hero | Focaccia salata e prosciutto | Osteria delle Taverne | Public Domain Mark 1.0 | [Flickr](https://www.flickr.com/photos/135949150@N02/22980680231) |
| `gnocchi-alla-sorrentina.webp` / `.jpg` | Gnocchi alla Sorrentina | Hero | Gluten free Gnocchi (Unsplash) | Toa Heftiba heftiba | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gluten_free_Gnocchi_(Unsplash).jpg) |
| `gnocchi-alla-sorrentina-process.webp` / `.jpg` | Gnocchi alla Sorrentina | Process | Gnocchi Carbonara - Moontone | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gnocchi_Carbonara_-_Moontone.jpg) |
| `pasta-alla-gricia.webp` / `.jpg` | Pasta alla Gricia | Hero | Pasta alla Gricia | Luca Nebuloni from Milan, Italy | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pasta_alla_Gricia.jpg) |
| `pasta-alla-gricia-process.webp` / `.jpg` | Pasta alla Gricia | Process | Gricia (7378890110) | Luca Nebuloni from Milan, Italy | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gricia_(7378890110).jpg) |
| `caponata.webp` / `.jpg` | Sicilian Caponata | Hero | Pizzeria Bella Italia (Crépieux-la-Pape) - caponata (1) (février 2020) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pizzeria_Bella_Italia_(Cr%C3%A9pieux-la-Pape)_-_caponata_(1)_(f%C3%A9vrier_2020).jpg) |
| `caponata-process.webp` / `.jpg` | Sicilian Caponata | Process | Pizzeria Bella Italia (Crépieux-la-Pape) - caponata (2) (février 2020) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pizzeria_Bella_Italia_(Cr%C3%A9pieux-la-Pape)_-_caponata_(2)_(f%C3%A9vrier_2020).jpg) |
| `zeppole.webp` / `.jpg` | Zeppole | Hero | Zeppole | Unknown | CC0 1.0 | [Rawpixel](https://www.rawpixel.com/image/5953133/free-public-domain-cc0-photo) |
| `panettone.webp` / `.jpg` | Panettone | Hero | Panettone Coffee Cream-Mascarpone - Milos 2025-11-16 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Panettone_Coffee_Cream-Mascarpone_-_Milos_2025-11-16.jpg) |
| `panettone-process.webp` / `.jpg` | Panettone | Process | Panettone Glassato con Mandorle* | DinaBenedettoFerrandina | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Panettone_Glassato_con_Mandorle*.jpg) |
| `duck-confit.webp` / `.jpg` | Duck Confit | Hero | Manchons de canard confit et haricots blancs (mars 2022) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Manchons_de_canard_confit_et_haricots_blancs_(mars_2022).JPG) |
| `soupe-au-pistou.webp` / `.jpg` | Soupe au Pistou | Hero | 01 Soupe au pistou dans les Alpes provençales | ADT 04 | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:01_Soupe_au_pistou_dans_les_Alpes_proven%C3%A7ales.jpg) |
| `coquilles-saint-jacques.webp` / `.jpg` | Coquilles Saint-Jacques | Hero | Coquille Saint-Jacques (petite) de pélerin, de la rue de la Collégiale, AY991 | Unknown authorUnknown author | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Coquille_Saint-Jacques_(petite)_de_p%C3%A9lerin,_de_la_rue_de_la_Coll%C3%A9giale,_AY991.jpg) |
| `salade-lyonnaise.webp` / `.jpg` | Salade Lyonnaise | Hero | Lyon 4e - Café du Gros Caillou - Salade lyonnaise | Romainbehar | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lyon_4e_-_Caf%C3%A9_du_Gros_Caillou_-_Salade_lyonnaise.jpeg) |
| `salade-lyonnaise-process.webp` / `.jpg` | Salade Lyonnaise | Process | Salade lyonnaise Bistrot Bonnel (Lyon) en février 2023 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Salade_lyonnaise_Bistrot_Bonnel_(Lyon)_en_f%C3%A9vrier_2023.jpg) |
| `canele.webp` / `.jpg` | Canelés de Bordeaux | Hero | Boxes of Baillardran canelés, Bordeaux, 2015 | DimiTalen | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Boxes_of_Baillardran_canel%C3%A9s,_Bordeaux,_2015.jpg) |
| `gateau-basque.webp` / `.jpg` | Gâteau Basque | Hero | Gateau basque avec Lauburu | Tangopaso | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gateau_basque_avec_Lauburu.jpg) |
| `gateau-basque-process.webp` / `.jpg` | Gâteau Basque | Process | Gateau basque et croix basques | Tangopaso | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gateau_basque_et_croix_basques.jpg) |
| `katsu-curry.webp` / `.jpg` | Katsu Curry | Hero | Chicken katsu curry | DraftSaturn15 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_katsu_curry.jpg) |
| `miso-ramen.webp` / `.jpg` | Miso Ramen | Hero | Butter corn miso ramen of Yokohama Hakkeirou | 毒島みるく | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Butter_corn_miso_ramen_of_Yokohama_Hakkeirou.jpg) |
| `miso-ramen-process.webp` / `.jpg` | Miso Ramen | Process | Chicken miso butter ramen - Goemon Ramen Bar | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_miso_butter_ramen_-_Goemon_Ramen_Bar.jpg) |
| `unagi-don.webp` / `.jpg` | Unagi Don | Hero | Tofu Shouga Yakin Don and Unagi Don - Pompoko 2023-08-03 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tofu_Shouga_Yakin_Don_and_Unagi_Don_-_Pompoko_2023-08-03.jpg) |
| `nikujaga.webp` / `.jpg` | Nikujaga | Hero | Nikujaga at yakiniku restaurant just outside Moon Beach | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nikujaga_at_yakiniku_restaurant_just_outside_Moon_Beach.jpg) |
| `gyudon.webp` / `.jpg` | Gyudon | Hero | JP 日本 Japan 京都 Kyoto 四條 Shijo side Sukiya Restaurant food Gyudon 牛肉丼 beef toppings and rice bowl June 2026 N13P 15 | TKdows 2026 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:JP_%E6%97%A5%E6%9C%AC_Japan_%E4%BA%AC%E9%83%BD_Kyoto_%E5%9B%9B%E6%A2%9D_Shijo_side_Sukiya_Restaurant_food_Gyudon_%E7%89%9B%E8%82%89%E4%B8%BC_beef_toppings_and_rice_bowl_June_2026_N13P_15.jpg) |
| `yakisoba.webp` / `.jpg` | Yakisoba | Hero | Chicken yakisoba - Korpan | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_yakisoba_-_Korpan.jpg) |
| `yakisoba-process.webp` / `.jpg` | Yakisoba | Process | Fukaya Negi Curry Yakisoba by Kaede | M yanagisawa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fukaya_Negi_Curry_Yakisoba_by_Kaede.jpg) |
| `castella.webp` / `.jpg` | Castella Cake | Hero | Castella 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Castella_001.jpg) |
| `mapo-eggplant.webp` / `.jpg` | Mapo Eggplant | Hero | 東京の中華料理店で麻婆茄子 | Syced | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%E6%9D%B1%E4%BA%AC%E3%81%AE%E4%B8%AD%E8%8F%AF%E6%96%99%E7%90%86%E5%BA%97%E3%81%A7%E9%BA%BB%E5%A9%86%E8%8C%84%E5%AD%90.jpg) |
| `scallion-pancakes.webp` / `.jpg` | Scallion Pancakes | Hero | 20251106 214906 Shengli scallion pancake | Saimmx | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20251106_214906_Shengli_scallion_pancake.jpg) |
| `scallion-pancakes-process.webp` / `.jpg` | Scallion Pancakes | Process | Duck and kimchi pancake, with soy scallion sauce - Cambridge, MA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Duck_and_kimchi_pancake,_with_soy_scallion_sauce_-_Cambridge,_MA.jpg) |
| `beef-chow-fun.webp` / `.jpg` | Beef Chow Fun | Hero | Dry Fried Beef Ho Fun - Ho Chiak 2023-12-08 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dry_Fried_Beef_Ho_Fun_-_Ho_Chiak_2023-12-08.jpg) |
| `egg-tarts.webp` / `.jpg` | Hong Kong Egg Tarts | Hero | HK WC 灣仔 Wan Chai 利東街 Lee Tung Avenue shop 蛋撻王 King Bakery egg tarts April 2024 R12S | YUEO YRUAIN LUKAM | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HK_WC_%E7%81%A3%E4%BB%94_Wan_Chai_%E5%88%A9%E6%9D%B1%E8%A1%97_Lee_Tung_Avenue_shop_%E8%9B%8B%E6%92%BB%E7%8E%8B_King_Bakery_egg_tarts_April_2024_R12S.jpg) |
| `wonton-noodle-soup.webp` / `.jpg` | Wonton Noodle Soup | Hero | Gfp-noodle-soup-with-shrimp-dumplings | Yinan Chen | Public Domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Gfp-noodle-soup-with-shrimp-dumplings.jpg) |
| `wonton-noodle-soup-process.webp` / `.jpg` | Wonton Noodle Soup | Process | SZ 深圳 Shenzhen 福田 Futian 水圍村 Shui Wai Cun 沙縣小吃 ShaXian Snacks Noodle Shop night 云吞 wunton soup February 2025 R12S 02 | LAAePSts Lusnsaz WHA | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_%E7%A6%8F%E7%94%B0_Futian_%E6%B0%B4%E5%9C%8D%E6%9D%91_Shui_Wai_Cun_%E6%B2%99%E7%B8%A3%E5%B0%8F%E5%90%83_ShaXian_Snacks_Noodle_Shop_night_%E4%BA%91%E5%90%9E_wunton_soup_February_2025_R12S_02.jpg) |
| `lamb-rogan-josh.webp` / `.jpg` | Lamb Rogan Josh | Hero | Rogan Josh | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rogan_Josh.JPG) |
| `dal-makhani.webp` / `.jpg` | Dal Makhani | Hero | Dal Makhani. | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dal_Makhani..JPG) |
| `dal-makhani-process.webp` / `.jpg` | Dal Makhani | Process | Dal Makhani (1) | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dal_Makhani_(1).JPG) |
| `hyderabadi-biryani.webp` / `.jpg` | Hyderabadi Biryani | Hero | Chicken Dum Biryani from Hyderabadi Zaiqa | Nycexploring | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chicken_Dum_Biryani_from_Hyderabadi_Zaiqa.jpg) |
| `vada-pav.webp` / `.jpg` | Vada Pav | Hero | Jumbo Vada Pav | Mayur.thakare at English Wikipedia | CC BY 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jumbo_Vada_Pav.jpg) |
| `vada-pav-process.webp` / `.jpg` | Vada Pav | Process | Jumbo Vada Pav (dodged) | Uploader of original version was Mayur.thakare at en.wikipedia | CC BY 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Jumbo_Vada_Pav_(dodged).jpg) |
| `masala-chai.webp` / `.jpg` | Masala Chai | Hero | Masala Chai | Miansari66 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Masala_Chai.JPG) |
| `misal-pav.webp` / `.jpg` | Misal Pav | Hero | Misal Pav Vishwanand 2026-01-28 | Sakurakat | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Misal_Pav_Vishwanand_2026-01-28.jpg) |
| `naan.webp` / `.jpg` | Garlic Naan | Hero | Bánh mì Naan tỏi ở Tân Phú (1) | Phương Huy (thảo luận) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:B%C3%A1nh_m%C3%AC_Naan_t%E1%BB%8Fi_%E1%BB%9F_T%C3%A2n_Ph%C3%BA_(1).jpg) |
| `enchiladas-verdes.webp` / `.jpg` | Enchiladas Verdes | Hero | Enchiladas de carnitas de pato. Salsa de pipián verde. (Puebla, Puebla) | Joselu Blanco | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Enchiladas_de_carnitas_de_pato._Salsa_de_pipi%C3%A1n_verde._(Puebla,_Puebla).jpg) |
| `enchiladas-verdes-process.webp` / `.jpg` | Enchiladas Verdes | Process | Enchiladas verdes en Tonatico | Wotancito | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Enchiladas_verdes_en_Tonatico.jpg) |
| `aguachile.webp` / `.jpg` | Aguachile | Hero | Aguachile contemporáneo, Mazatlán, 3 de julio de 2023 | El Nuevo Doge | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Aguachile_contempor%C3%A1neo,_Mazatl%C3%A1n,_3_de_julio_de_2023.jpg) |
| `horchata.webp` / `.jpg` | Horchata | Hero | Horchata, my drink of choice in Mexico - Merida Yucatan 21 March 2021 | Sharon Hahn Darlin | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Horchata,_my_drink_of_choice_in_Mexico_-_Merida_Yucatan_21_March_2021.jpg) |
| `pulled-pork.webp` / `.jpg` | Carolina Pulled Pork | Hero | Easter dinner of pulled pork with Kansas City barbecue sauce, potato pancake with scallions and onion, bell peppers, celery, and carrots - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Easter_dinner_of_pulled_pork_with_Kansas_City_barbecue_sauce,_potato_pancake_with_scallions_and_onion,_bell_peppers,_celery,_and_carrots_-_Massachusetts.jpg) |
| `brisket.webp` / `.jpg` | Texas Smoked Brisket | Hero | Smoked brisket, white bread, horseradish, slaw, (15452301364) | T.Tseng | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Smoked_brisket,_white_bread,_horseradish,_slaw,_(15452301364).jpg) |
| `brisket-process.webp` / `.jpg` | Texas Smoked Brisket | Process | Smoked brisket, white bread, horseradish, slaw, (15888843867) | T.Tseng | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Smoked_brisket,_white_bread,_horseradish,_slaw,_(15888843867).jpg) |
| `cioppino.webp` / `.jpg` | Cioppino | Hero | Cioppino from Della Terra (Los Angeles), July 2022 (1) | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cioppino_from_Della_Terra_(Los_Angeles),_July_2022_(1).jpg) |
| `sloppy-joes.webp` / `.jpg` | Sloppy Joes | Hero | Sloppy joe sandwich with French fries | jeffreyw | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sloppy_joe_sandwich_with_French_fries.jpg) |
| `sloppy-joes-process.webp` / `.jpg` | Sloppy Joes | Process | Sloppy joe sandwiches | jeffreyw | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sloppy_joe_sandwiches.jpg) |
| `corn-dogs.webp` / `.jpg` | Corn Dogs | Hero | Corn dog | Tasy Hong | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Corn_dog.jpg) |
| `corn-dogs-process.webp` / `.jpg` | Corn Dogs | Process | Corn dog 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Corn_dog_001.jpg) |
| `philly-soft-pretzel.webp` / `.jpg` | Philadelphia Soft Pretzels | Hero | Auntie Anne's Classic Soft Frozen Pretzels - Sarah Stierch | Missvain | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Auntie_Anne%27s_Classic_Soft_Frozen_Pretzels_-_Sarah_Stierch.jpg) |
| `boston-cream-pie.webp` / `.jpg` | Boston Cream Pie | Hero | Boston cream pie with chocolate drizzle | Francisco Seoane Perez | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Boston_cream_pie_with_chocolate_drizzle.jpg) |
| `steak-and-ale-pie.webp` / `.jpg` | Steak and Ale Pie | Hero | Steak and Pepper Pie @ Mount Pleasant Bakery & Cafe 20250111-130728 | RegionVisitor90 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steak_and_Pepper_Pie_@_Mount_Pleasant_Bakery_%26_Cafe_20250111-130728.jpg) |
| `steak-and-ale-pie-process.webp` / `.jpg` | Steak and Ale Pie | Process | Steak and Wine Pie by Jarrod Baniqued | Jarrod Baniqued | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Steak_and_Wine_Pie_by_Jarrod_Baniqued.jpg) |
| `trifle.webp` / `.jpg` | English Trifle | Hero | Trifle-(custard-layer)-profile | Benjah-bmm27 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trifle-(custard-layer)-profile.jpg) |
| `crumpets.webp` / `.jpg` | Crumpets | Hero | Two crumpets copy | Joe Nixon from Leeds, United Kingdom | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Two_crumpets_copy.jpg) |
| `crumpets-process.webp` / `.jpg` | Crumpets | Process | Crumpets & Scones - English Tea Room, Covington, Louisiana | Infrogmation of New Orleans | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Crumpets_%26_Scones_-_English_Tea_Room,_Covington,_Louisiana.jpg) |
| `ploughmans-lunch.webp` / `.jpg` | Ploughman's Lunch | Hero | Ploughmans lunch | Clothahump (talk) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ploughmans_lunch.jpg) |
| `irish-stew.webp` / `.jpg` | Irish Stew | Hero | Irish stew 2007 | me | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Irish_stew_2007.jpg) |
| `soda-bread.webp` / `.jpg` | Irish Soda Bread | Hero | Irish soda bread (21 of 68) | Wheeler Cowperthwaite | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Irish_soda_bread_(21_of_68).jpg) |
| `colcannon.webp` / `.jpg` | Colcannon | Hero | Colcannon | Alison Cassidy | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Colcannon.JPG) |
| `colcannon-process.webp` / `.jpg` | Colcannon | Process | Colcannon 4215w | Sarah777 at en.wikipedia | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Colcannon_4215w.jpg) |
| `boxty.webp` / `.jpg` | Boxty | Hero | Ansolas boxty 2 | さえぼー | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ansolas_boxty_2.jpg) |
| `cullen-skink.webp` / `.jpg` | Cullen Skink | Hero | Cullen Skink - Depot Cinema and Restaurant 2025-03-06 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cullen_Skink_-_Depot_Cinema_and_Restaurant_2025-03-06.jpg) |
| `cullen-skink-process.webp` / `.jpg` | Cullen Skink | Process | Cullen Skink 01 - Feb 27, 2015 | Iain Cameron | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cullen_Skink_01_-_Feb_27,_2015.jpg) |
| `haggis-neeps-tatties.webp` / `.jpg` | Haggis, Neeps and Tatties | Hero | Haggis, neeps and tatties at The Cramond Inn, Edinburgh (2660769244) | Edinburgh Blog | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Haggis,_neeps_and_tatties_at_The_Cramond_Inn,_Edinburgh_(2660769244).jpg) |
| `cranachan.webp` / `.jpg` | Cranachan | Hero | Cranachan (4332953688) | Saskia van de Nieuwenhof from Edinburgh, United Kingdom | CC BY-SA 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cranachan_(4332953688).jpg) |
| `bara-brith.webp` / `.jpg` | Bara Brith | Hero | Bara Brith | Matthew R Dunn | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bara_Brith.jpg) |
| `bara-brith-process.webp` / `.jpg` | Bara Brith | Process | Bara Brith (3320696816) | zingyyellow...! from Wales Cymru UK | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bara_Brith_(3320696816).jpg) |
| `schnitzel.webp` / `.jpg` | German Pork Schnitzel | Hero | Wiener Schnitzel, Aachen | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wiener_Schnitzel,_Aachen.jpg) |
| `bratwurst.webp` / `.jpg` | Bratwurst with Sauerkraut | Hero | Sauerkraut and mustard on grilled bratwurst - Massachusetts | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sauerkraut_and_mustard_on_grilled_bratwurst_-_Massachusetts.jpg) |
| `bratwurst-process.webp` / `.jpg` | Bratwurst with Sauerkraut | Process | WV German banner Beer bratwurst sauerkraut | Ypsilon from Finland | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:WV_German_banner_Beer_bratwurst_sauerkraut.jpg) |
| `pretzel-brezel.webp` / `.jpg` | Bavarian Brezel | Hero | Bavarian pretzels🥨 | Fumikas Sagisavas | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bavarian_pretzels%F0%9F%A5%A8.jpg) |
| `apple-strudel.webp` / `.jpg` | Apple Strudel | Hero | Apfelstrudel et glace vanille | Arnaud 25 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apfelstrudel_et_glace_vanille.jpg) |
| `apple-strudel-process.webp` / `.jpg` | Apple Strudel | Process | Apfelstrudel im Collegium in Tübingen | Dktue | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apfelstrudel_im_Collegium_in_T%C3%BCbingen.jpg) |
| `sachertorte.webp` / `.jpg` | Sachertorte | Hero | 01 Sachertorte | Jennifer Woodard Maderazo | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:01_Sachertorte.jpg) |
| `kaiserschmarrn.webp` / `.jpg` | Kaiserschmarrn | Hero | Kaiserschmarrn, Munich | Gerda Arendt | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kaiserschmarrn,_Munich.jpg) |
| `kaiserschmarrn-process.webp` / `.jpg` | Kaiserschmarrn | Process | Kaiserschmarrn-mitPreiselbeeren | Hans-Werner Roth | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kaiserschmarrn-mitPreiselbeeren.jpg) |
| `cheese-fondue.webp` / `.jpg` | Cheese Fondue | Hero | Swiss cheese fondue | Brücke-Osteuropa | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Swiss_cheese_fondue.JPG) |
| `cheese-fondue-process.webp` / `.jpg` | Cheese Fondue | Process | Fondue au fromage | BiiJii | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fondue_au_fromage.jpg) |
| `rosti.webp` / `.jpg` | Rösti | Hero | GV Fribourg BR Rösti | Stefan Gall | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:GV_Fribourg_BR_R%C3%B6sti.jpg) |
| `rosti-process.webp` / `.jpg` | Rösti | Process | Sweet potato rosti - Malt Cafe 2026-01-14 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sweet_potato_rosti_-_Malt_Cafe_2026-01-14.jpg) |
| `raclette.webp` / `.jpg` | Raclette | Hero | Raclette - 001 | Martin Steiger | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Raclette_-_001.jpg) |
| `belgian-waffles.webp` / `.jpg` | Belgian Waffles | Hero | Belgian Waffles - Flickr - Jackie L Chan | J c | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Belgian_Waffles_-_Flickr_-_Jackie_L_Chan.jpg) |
| `belgian-waffles-process.webp` / `.jpg` | Belgian Waffles | Process | Belgian waffles - Brussels, Belgium, 2011 (2011-05-22 11.55.35 by Thomas Quine) | Thomas Quine | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Belgian_waffles_-_Brussels,_Belgium,_2011_(2011-05-22_11.55.35_by_Thomas_Quine).jpg) |
| `carbonnade-flamande.webp` / `.jpg` | Carbonnade Flamande | Hero | Carbonnade flamande à la bière | Francisco Antunes | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Carbonnade_flamande_%C3%A0_la_bi%C3%A8re.jpg) |
| `belgian-frites.webp` / `.jpg` | Belgian Frites | Hero | Belgian fries with sauce andalouse in Brussels | CCPictureHunters WikipediaShare | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Belgian_fries_with_sauce_andalouse_in_Brussels.jpg) |
| `belgian-frites-process.webp` / `.jpg` | Belgian Frites | Process | HK SKD TKO South 將軍澳南海濱 Tseung Kwan O South Promenade 澳南海岸 O'South Coast restaurants February 2024 R12S 20 Frites | Hongang PettyHtan Loong01 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HK_SKD_TKO_South_%E5%B0%87%E8%BB%8D%E6%BE%B3%E5%8D%97%E6%B5%B7%E6%BF%B1_Tseung_Kwan_O_South_Promenade_%E6%BE%B3%E5%8D%97%E6%B5%B7%E5%B2%B8_O%27South_Coast_restaurants_February_2024_R12S_20_Frites.jpg) |
| `stroopwafel.webp` / `.jpg` | Stroopwafels | Hero | Mr Stroopwafel - April 2025 - Sarah Stierch 02 | Missvain | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mr_Stroopwafel_-_April_2025_-_Sarah_Stierch_02.jpg) |
| `bitterballen.webp` / `.jpg` | Bitterballen | Hero | Bitterballen | Globered13 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bitterballen.JPG) |
| `bitterballen-process.webp` / `.jpg` | Bitterballen | Process | Bitterballen with Dijon mustard - Taproom ‘t Blauwe Theehuis 2024-11-26 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bitterballen_with_Dijon_mustard_-_Taproom_%E2%80%98t_Blauwe_Theehuis_2024-11-26.jpg) |
| `poffertjes.webp` / `.jpg` | Poffertjes | Hero | Brouwer van de poffertjeskraam deelt ter gelegenheid van zijn 76ste verjaardag poffertjes uit | Olaf Kraak (UP de Boer) | CC BY 3.0 nl | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brouwer_van_de_poffertjeskraam_deelt_ter_gelegenheid_van_zijn_76ste_verjaardag_poffertjes_uit.jpg) |
| `smorrebrod.webp` / `.jpg` | Smørrebrød | Hero | Smørrebrød. Rejemad på franskbrød fra Hallernes Smørrebrød. Torvehallerne i København. Foto Hans Christian Hansen | XYZA-2400 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sm%C3%B8rrebr%C3%B8d._Rejemad_p%C3%A5_franskbr%C3%B8d_fra_Hallernes_Sm%C3%B8rrebr%C3%B8d._Torvehallerne_i_K%C3%B8benhavn._Foto_Hans_Christian_Hansen.jpg) |
| `smorrebrod-process.webp` / `.jpg` | Smørrebrød | Process | Smørrebrød (Vester Voldgade) | Orf3us | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sm%C3%B8rrebr%C3%B8d_(Vester_Voldgade).JPG) |
| `danish-pastry.webp` / `.jpg` | Danish Pastries | Hero | Cherry pistachio pinwheel Danish pastry | Funknendai | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cherry_pistachio_pinwheel_Danish_pastry.png) |
| `frikadeller.webp` / `.jpg` | Frikadeller | Hero | Frikadeller - Hallwylska museet - 86897 | Unknown authorUnknown author | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frikadeller_-_Hallwylska_museet_-_86897.tif) |
| `frikadeller-process.webp` / `.jpg` | Frikadeller | Process | Frikadeller og stuvet hvidkål | Nillerdk | CC BY 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frikadeller_og_stuvet_hvidk%C3%A5l.jpg) |
| `norwegian-fish-soup.webp` / `.jpg` | Norwegian Fish Soup | Hero | Fish soup in Bergen | Flickr user: Tu Grand Forks, ND, USA https://www.flickr.com/people/tuey/ | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fish_soup_in_Bergen.jpg) |
| `krumkake.webp` / `.jpg` | Krumkake | Hero | Krumkake panorama | NorskPower | CC BY 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Krumkake_panorama.jpg) |
| `karelian-pies.webp` / `.jpg` | Karelian Pies | Hero | Karjalanpiirakka (Karelian pies) | Armineaghayan | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Karjalanpiirakka_(Karelian_pies).jpg) |
| `salmon-soup-lohikeitto.webp` / `.jpg` | Lohikeitto | Hero | Finnish salmon soup | JIP | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Finnish_salmon_soup.jpg) |
| `prinsesstarta.webp` / `.jpg` | Prinsesstårta | Hero | Princess Cake 2025-Oct-02 | MarcellusW | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Princess_Cake_2025-Oct-02.jpg) |
| `toast-skagen.webp` / `.jpg` | Toast Skagen | Hero | Toast Skagen on a plate | Apinanaivot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Toast_Skagen_on_a_plate.jpg) |
| `bigos.webp` / `.jpg` | Bigos | Hero | Bigos-445017 | bykst | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bigos-445017.jpg) |
| `bigos-process.webp` / `.jpg` | Bigos | Process | Bigos hultajski | Szczeniowski, Tytus (1808-1880) | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bigos_hultajski.png) |
| `zurek.webp` / `.jpg` | Żurek | Hero | Food of Poland - żurek soup served in bread | Chris Olszewski | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Food_of_Poland_-_%C5%BCurek_soup_served_in_bread.jpg) |
| `svickova.webp` / `.jpg` | Svíčková | Hero | Svíčková a Perner 🍺 v Pardubickém Momentu | Ladabohac | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sv%C3%AD%C4%8Dkov%C3%A1_a_Perner_%F0%9F%8D%BA_v_Pardubick%C3%A9m_Momentu.jpg) |
| `svickova-process.webp` / `.jpg` | Svíčková | Process | Svíčková omáčka 20240810 120242 | IMG 4512 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sv%C3%AD%C4%8Dkov%C3%A1_om%C3%A1%C4%8Dka_20240810_120242.jpg) |
| `trdelnik.webp` / `.jpg` | Trdelník | Hero | Trdelnik Praha | MOs810 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trdelnik_Praha.JPG) |
| `pelmeni.webp` / `.jpg` | Pelmeni | Hero | Mini-Pelmeni | Brücke-Osteuropa | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mini-Pelmeni.JPG) |
| `pelmeni-process.webp` / `.jpg` | Pelmeni | Process | Moscow, TC Gagarinsky Feb.2025 - Auchan - Pelmeni 01 | Retired electrician | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moscow,_TC_Gagarinsky_Feb.2025_-_Auchan_-_Pelmeni_01.jpg) |
| `chicken-paprikash.webp` / `.jpg` | Chicken Paprikash | Hero | Bratislava - Chicken Paprikash | Hemant Bedekar | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bratislava_-_Chicken_Paprikash.jpg) |
| `langos.webp` / `.jpg` | Lángos | Hero | Budapest, Békásmegyer, piac, bolognai lángos | Random photos 1989 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Budapest,_B%C3%A9k%C3%A1smegyer,_piac,_bolognai_l%C3%A1ngos.jpg) |
| `langos-process.webp` / `.jpg` | Lángos | Process | Budapest, Békásmegyer, piac, sajtos-tejfölös lángos | Random photos 1989 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Budapest,_B%C3%A9k%C3%A1smegyer,_piac,_sajtos-tejf%C3%B6l%C3%B6s_l%C3%A1ngos.jpg) |
| `sarmale.webp` / `.jpg` | Sarmale | Hero | Sarmale | No machine-readable author provided. Zserghei assumed (based on copyright claims). | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sarmale.jpg) |
| `mici.webp` / `.jpg` | Mici | Hero | Rumänischer Mixed-Grill mit Mici und Beilagen | Sacha47 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rum%C3%A4nischer_Mixed-Grill_mit_Mici_und_Beilagen.jpg) |
| `khachapuri.webp` / `.jpg` | Adjaruli Khachapuri | Hero | Adjarian Khachapuri. Saint Petersburg, 2024-07-24 | Bestalex | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Adjarian_Khachapuri._Saint_Petersburg,_2024-07-24.jpg) |
| `khinkali.webp` / `.jpg` | Khinkali | Hero | Kazbegi, Khinkali, Georgia | Vyacheslav Argenberg | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kazbegi,_Khinkali,_Georgia.jpg) |
| `khinkali-process.webp` / `.jpg` | Khinkali | Process | Tbilisi, Khachapuri and khinkali, Georgian traditional food, Georgia | Vyacheslav Argenberg | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tbilisi,_Khachapuri_and_khinkali,_Georgian_traditional_food,_Georgia.jpg) |
| `dolmades.webp` / `.jpg` | Dolmades | Hero | Dolmades with Tomato Wedges (5045976611) | Geoff Peters from Vancouver, BC, Canada | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dolmades_with_Tomato_Wedges_(5045976611).jpg) |
| `iskender-kebab.webp` / `.jpg` | İskender Kebab | Hero | Iskender kebap | Lakerda at English Wikipedia | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Iskender_kebap.jpg) |
| `turkish-lentil-soup.webp` / `.jpg` | Turkish Lentil Soup | Hero | Kapellenstraße München — mercimek çorbası — afiyet olsun 20201210 215041 | no bias — קיין אומוויסנדיקע פּרעפֿערענצן — keyn umvisndike | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kapellenstra%C3%9Fe_M%C3%BCnchen_%E2%80%94_mercimek_%C3%A7orbas%C4%B1_%E2%80%94_afiyet_olsun_20201210_215041.jpg) |
| `turkish-lentil-soup-process.webp` / `.jpg` | Turkish Lentil Soup | Process | Mercimek çorbasi | E4024 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mercimek_%C3%A7orbasi.jpg) |
| `kunefe.webp` / `.jpg` | Künefe | Hero | 20250206 Künefe in Tarsus | Basak | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:20250206_K%C3%BCnefe_in_Tarsus.jpg) |
| `shish-taouk.webp` / `.jpg` | Shish Taouk | Hero | Armenian Shish taouk (Carousel Restaurant Hollywood) July 2023 | Benoît Prieur | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Armenian_Shish_taouk_(Carousel_Restaurant_Hollywood)_July_2023.JPG) |
| `shish-taouk-process.webp` / `.jpg` | Shish Taouk | Process | Raw Shish Taouk | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Raw_Shish_Taouk.JPG) |
| `moutabal.webp` / `.jpg` | Moutabal | Hero | متبل Mutabbal (Las Siete Orillas project) | El Mono Español | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%D9%85%D8%AA%D8%A8%D9%84_Mutabbal_(Las_Siete_Orillas_project).jpg) |
| `maamoul.webp` / `.jpg` | Maamoul | Hero | Maamoul (241884747) | Father.Jack from Coventry, UK | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Maamoul_(241884747).jpg) |
| `ghormeh-sabzi.webp` / `.jpg` | Ghormeh Sabzi | Hero | Ghormeh Sabzi | Amin Majidi | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ghormeh_Sabzi.JPG) |
| `fesenjan.webp` / `.jpg` | Fesenjan | Hero | Khoresht-e fesenjan | stringparts | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Khoresht-e_fesenjan.jpg) |
| `tahdig.webp` / `.jpg` | Tahdig | Hero | Tahdig rice with B2 picture | Nizzan Cohen | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tahdig_rice_with_B2_picture.jpg) |
| `joojeh-kabab.webp` / `.jpg` | Joojeh Kabab | Hero | Joojeh-kabab | Nasser-sadeghi | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Joojeh-kabab.JPG) |
| `ash-reshteh.webp` / `.jpg` | Ash Reshteh | Hero | Ash Reshteh | AilinParsa | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ash_Reshteh.JPG) |
| `sabich.webp` / `.jpg` | Sabich | Hero | Liat Portal for Foodie Disorder - Open sabich (personal variation) | HaJunkiyada | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Open_sabich_(personal_variation).jpg) |
| `sabich-process.webp` / `.jpg` | Sabich | Process | Ovad's Sabich place | Laliv g | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ovad%27s_Sabich_place.jpg) |
| `malabi.webp` / `.jpg` | Malabi | Hero | Baklava and Malabi desserts | Cabeza2000 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Baklava_and_Malabi_desserts.jpg) |
| `musakhan.webp` / `.jpg` | Musakhan | Hero | Musakhan | Amaiursancho5 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Musakhan.jpg) |
| `harees.webp` / `.jpg` | Harees | Hero | Harees | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Harees.JPG) |
| `harees-process.webp` / `.jpg` | Harees | Process | Al fanar harees (7797136886) | Krista | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Al_fanar_harees_(7797136886).jpg) |
| `knafeh-nabulsi.webp` / `.jpg` | Knafeh Nabulsi | Hero | Knafeh From Yaffa Knafeh | Theipu | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Knafeh_From_Yaffa_Knafeh.jpg) |
| `chicken-tagine-olives.webp` / `.jpg` | Chicken Tagine with Olives | Hero | Moroccan food-Chicken tagine with preserved lemons and olives-01 | Foodista | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-01.jpg) |
| `chicken-tagine-olives-process.webp` / `.jpg` | Chicken Tagine with Olives | Process | Moroccan food-Chicken tagine with preserved lemons and olives-02 | Foodista | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-02.jpg) |
| `msemen.webp` / `.jpg` | Msemen | Hero | Rghaif (detalle) | Tamorlan | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rghaif_(detalle).jpg) |
| `moroccan-mint-tea.webp` / `.jpg` | Moroccan Mint Tea | Hero | Moroccan mint tea-01 | Dan4th Nicholas | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moroccan_mint_tea-01.jpg) |
| `moroccan-mint-tea-process.webp` / `.jpg` | Moroccan Mint Tea | Process | Moroccan Mint Tea | Tola Akindipe | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Moroccan_Mint_Tea.jpg) |
| `brik.webp` / `.jpg` | Tunisian Brik | Hero | Tunisian brik or birik | Rusty Clark ~ 100K Photos | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tunisian_brik_or_birik.jpg) |
| `brik-process.webp` / `.jpg` | Tunisian Brik | Process | Tunisian Briks | Souad Anane Lesina | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Tunisian_Briks.JPG) |
| `shakshuka-tunisian.webp` / `.jpg` | Merguez Shakshuka | Hero | Merguez Shakshouka | ABSzar | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Merguez_Shakshouka.jpg) |
| `croquetas.webp` / `.jpg` | Jamón Croquetas | Hero | Croquetas 3 | Popo le Chien | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Croquetas_3.JPG) |
| `croquetas-process.webp` / `.jpg` | Jamón Croquetas | Process | Plantains, guacamole, and croquetas - Cambridge, MA | Daderot | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Plantains,_guacamole,_and_croquetas_-_Cambridge,_MA.jpg) |
| `crema-catalana.webp` / `.jpg` | Crema Catalana | Hero | Cazuelita con crema catalana. Postre | Juan Emilio Prades Bel | CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cazuelita_con_crema_catalana._Postre.jpg) |
| `francesinha.webp` / `.jpg` | Francesinha | Hero | Francesinha Poveira | Inclusion et Aequalitate | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Francesinha_Poveira.jpg) |
| `francesinha-process.webp` / `.jpg` | Francesinha | Process | Francesinha encaixados porto portugal | Ih8connecticut | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Francesinha_encaixados_porto_portugal.jpg) |
| `arroz-de-marisco.webp` / `.jpg` | Arroz de Marisco | Hero | Arroz con mariscos 002 | Wilfredor | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Arroz_con_mariscos_002.jpg) |
| `bifana.webp` / `.jpg` | Bifana | Hero | Delicious Bifana Sandwich, As Bifana do Afonso (49652989992) | Sonse | CC BY 2.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Delicious_Bifana_Sandwich,_As_Bifana_do_Afonso_(49652989992).jpg) |
| `bifana-process.webp` / `.jpg` | Bifana | Process | Bifana | Schokifaktor | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Bifana.jpg) |
| `beef-noodle-soup.webp` / `.jpg` | Taiwanese Beef Noodle Soup | Hero | TW 台湾 Taiwan 台北 Taipei shop 林东芳牛肉麵 Lin Dong Fang Beef Noodles March 2024 R12S 01 | Ounfs Robmmy 238 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:TW_%E5%8F%B0%E6%B9%BE_Taiwan_%E5%8F%B0%E5%8C%97_Taipei_shop_%E6%9E%97%E4%B8%9C%E8%8A%B3%E7%89%9B%E8%82%89%E9%BA%B5_Lin_Dong_Fang_Beef_Noodles_March_2024_R12S_01.jpg) |
| `beef-noodle-soup-process.webp` / `.jpg` | Taiwanese Beef Noodle Soup | Process | TW 台湾 Taiwan 台北 Taipei shop 林东芳牛肉麵 Lin Dong Fang Beef Noodles March 2024 R12S 11 | Ounfs Robmmy 238 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:TW_%E5%8F%B0%E6%B9%BE_Taiwan_%E5%8F%B0%E5%8C%97_Taipei_shop_%E6%9E%97%E4%B8%9C%E8%8A%B3%E7%89%9B%E8%82%89%E9%BA%B5_Lin_Dong_Fang_Beef_Noodles_March_2024_R12S_11.jpg) |
| `lu-rou-fan.webp` / `.jpg` | Lu Rou Fan | Hero | Lurou fan(Taiwanese cuisine) | Jzest | CC BY-SA 2.5 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lurou_fan(Taiwanese_cuisine).jpg) |
| `pineapple-cake.webp` / `.jpg` | Pineapple Cake | Hero | Taiwanese Pineapple Cake 001 | Ocdp | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Taiwanese_Pineapple_Cake_001.jpg) |
| `nihari.webp` / `.jpg` | Nihari | Hero | Beef Nihari | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Nihari.JPG) |
| `nihari-process.webp` / `.jpg` | Nihari | Process | Beef Nihari Meat | Miansari66 | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Beef_Nihari_Meat.JPG) |
| `haleem.webp` / `.jpg` | Haleem | Hero | Haleem | Miansari66 | Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Haleem.JPG) |
| `seekh-kebab.webp` / `.jpg` | Seekh Kebab | Hero | Seekh kebab | Vivid mongoose | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Seekh_kebab.jpg) |
| `seekh-kebab-process.webp` / `.jpg` | Seekh Kebab | Process | Kebab roll - chaiiwala 2024-02-10 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kebab_roll_-_chaiiwala_2024-02-10.jpg) |
| `chapli-kebab.webp` / `.jpg` | Chapli Kebab | Hero | Chapli Kebab | Murcotipton | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Chapli_Kebab.jpg) |
| `sri-lankan-fish-curry.webp` / `.jpg` | Sri Lankan Fish Curry | Hero | J D Wetherspoon Sri Lankan prawn and fish curry, The Tanners Hall, Skinnergate, Darlington (20th November 2025) | Mtaylor848 | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:J_D_Wetherspoon_Sri_Lankan_prawn_and_fish_curry,_The_Tanners_Hall,_Skinnergate,_Darlington_(20th_November_2025).jpg) |
| `sri-lankan-fish-curry-process.webp` / `.jpg` | Sri Lankan Fish Curry | Process | Srilankan fish curry | Jkwinter | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Srilankan_fish_curry.JPG) |
| `hoppers.webp` / `.jpg` | Egg Hoppers | Hero | Egg Hopper - The Coconut Island 2025-10-05 | Andy Li | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Egg_Hopper_-_The_Coconut_Island_2025-10-05.jpg) |
| `kottu-roti.webp` / `.jpg` | Kottu Roti | Hero | Kottu Roti | Chamal N | CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kottu_Roti.jpg) |
| `kottu-roti-process.webp` / `.jpg` | Kottu Roti | Process | Kottu Roti (mit Meeresfrüchten) | Dankesie | CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kottu_Roti_(mit_Meeresfr%C3%BCchten).jpg) |
| `soto-ayam.webp` / `.jpg` | Soto Ayam | Hero | Kuliner Mang Gito Soto Ayam Bubur Ayam Bubur Sop Ayam (1) | LintasGiat | CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Kuliner_Mang_Gito_Soto_Ayam_Bubur_Ayam_Bubur_Sop_Ayam_(1).jpg) |

---

*Regenerate this file with `npm run attribution`.*
