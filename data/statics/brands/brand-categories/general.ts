import { TBrand } from "../../../types/brand";

const GeneralBrands: TBrand[] = [
  {
    name: "El Conchel",
    pattern: /el conchel/gi,
  },
  {
    name: "Emicela",
    pattern: /emicela/gi,
  },
  {
    name: "Don Simón",
    pattern: /don sim[oó]n/gi,
  },
  {
    name: "Hiperdino",
    pattern: /(?:hiper\s?|^)dino\s/gi,
  },
  {
    name: "Ifa Eliges",
    pattern: /(?:dino-)?ifa[\s-](?:eliges|unnia|sabe|amigo|Hiperdino)?/gi,
  },
  // En algun momento, unir arriba
  {
    name: "Ifa Eliges",
    pattern: /isa sabe/gi,
  },
  {
    name: "Desiam",
    pattern: /desiam/gi,
  },
  {
    name: "Enso",
    pattern: /(?:\s|^)enso/gi,
  },
  {
    name: "Old El Paso",
    pattern: /old el paso/gi,
  },
  {
    name: "La Tejea",
    pattern: /la tejea/gi,
  },
  {
    name: "Heinz",
    pattern: /heinz/gi,
  },
  {
    name: "Hellmans",
    pattern: /hellmann?'?s/gi,
  },
  {
    name: "Intercasa",
    pattern: /intercasa/gi,
  },
  {
    name: "Libbys",
    pattern: /libbys/gi,
  },
  {
    name: "Orlando",
    pattern: /orlando/gi,
  },
  {
    name: "Tomcoex",
    pattern: /tomcoex/gi,
  },
  {
    name: "Calvé",
    pattern: /calv[eé]/gi,
  },
  {
    name: "Choví",
    pattern: /chov[ií]/gi,
  },
  {
    name: "Ligeresa",
    pattern: /ligeresa/gi,
  },
  {
    name: "Musa",
    pattern: /musa/gi,
  },
  {
    name: "Sontime",
    pattern: /sontime/gi,
  },
  {
    name: "Argodey Fortaleza",
    pattern: /argodey(\sfortaleza)?/gi,
  },
  {
    name: "Bruvic",
    pattern: /bruvic/gi,
  },
  {
    name: "Conde Canseco",
    pattern: /conde canseco/gi,
  },
  {
    name: "Louit",
    pattern: /louit/gi,
  },
  {
    name: "Savora",
    pattern: /savora/gi,
  },
  {
    name: "Avecrem",
    pattern: /avecrem/gi,
  },
  {
    name: "Knorr",
    pattern: /knorr/gi,
  },
  {
    name: "Cascina",
    pattern: /cascina/gi,
  },
  {
    name: "La Abuela Flora",
    pattern: /la abuela flora/gi,
  },
  {
    name: "Remia",
    pattern: /remia/gi,
  },
  {
    name: "Stubbs",
    pattern: /stubbs/gi,
  },
  {
    name: "Wilkin&Sons",
    pattern: /Wilkin&Sons/gi,
  },
  {
    name: "Ahumados Dominguez",
    pattern: /(?:a\.|ahumados) dominguez/gi,
  },
  {
    name: "Amazon",
    pattern: /amazon(?:\s|$)/gi,
  },
  {
    name: "Asian delicatessen",
    pattern: /asian delicatessen/gi,
  },
  {
    name: "Blue Dragon",
    pattern: /blue dragon/gi,
  },
  {
    name: "Bovril",
    pattern: /bovril/gi,
  },
  {
    name: "Bulls Eye",
    pattern: /bulls eye/gi,
  },
  {
    name: "Clemente jacques",
    pattern: /clemente jacques/gi,
  },
  {
    name: "Goya",
    pattern: /goya/gi,
  },
  {
    name: "HP",
    pattern: /(?:\s|^)hp/gi,
  },
  {
    name: "Kikkoman",
    pattern: /kikkoman/gi,
  },
  {
    name: "La Costeña",
    pattern: /la costeña/gi,
  },
  {
    name: "Lea&Perrins",
    pattern: /lea&perrins/gi,
  },
  {
    name: "Pataks",
    pattern: /patak[`']?s/gi,
  },
  {
    name: "Salsas Asturianas",
    pattern: /salsas asturianas/gi,
  },
  {
    name: "Scana",
    pattern: /scana\s/gi,
  },
  {
    name: "Sharwoods",
    pattern: /sharwoods/gi,
  },
  {
    name: "Supadane",
    pattern: /supadane/gi,
  },
  {
    name: "Tabasco",
    pattern: /tabasco/gi,
  },
  {
    name: "Tajín",
    pattern: /tajín/gi,
  },
  {
    name: "Thomy",
    pattern: /thomy/gi,
  },
  {
    name: "Tiger Khan",
    pattern: /tiger khan/gi,
  },
  {
    name: "Yang Tse",
    pattern: /yang tse/gi,
  },
  {
    name: "Barilla",
    pattern: /barilla/gi,
  },
  {
    name: "Buitoni",
    pattern: /buitoni/gi,
  },
  {
    name: "Conga Organics",
    pattern: /conga\sorganics?/gi,
  },
  {
    name: "Gallina Blanca",
    pattern: /(?:gallina\s|g\.)blanca/gi,
  },
  {
    name: "Garofalo",
    pattern: /garofalo/gi,
  },
  {
    name: "GIA",
    pattern: /(?:\s|^)gia\s/gi,
  },
  {
    name: "Saclá",
    pattern: /sacl[aá]/gi,
  },
  {
    name: "Apis",
    pattern: /apis/gi,
  },
  {
    name: "Solís",
    pattern: /sol[ií]s/gi,
  },
  {
    name: "Starlux",
    pattern: /starlux/gi,
  },
  {
    name: "Bandama",
    pattern: /bandama/gi,
  },
  {
    name: "Virginias",
    pattern: /virginias/gi,
  },
  {
    name: "Arluy",
    pattern: /arluy/gi,
  },
  {
    name: "La Asturiana",
    pattern: /(?<!fabada|lechera)(?:la)?(?:\s|^)asturiana(?!.*mayu)/gi,
  },
  {
    name: "Australiana",
    pattern: /australiana/gi,
  },
  {
    name: "Kerrygold",
    pattern: /kerrygold/gi,
  },
  {
    name: "Lorenzana",
    pattern: /lorenzana/gi,
  },
  {
    name: "Lurpak",
    pattern: /lurpak/gi,
  },
  {
    name: "Tulipán",
    pattern: /tulip[aá]n(?!\snegro)/gi,
  },
  {
    name: "Village",
    pattern: /village/gi,
  },
  {
    // This brand is causing problems with the pattern, let's make it more specific
    // - First specific pattern: It should be the first word in the string
    name: "Flora",
    pattern: /^flora[\$\s]/gi,
  },
  {
    name: "Becel",
    pattern: /becel/gi,
  },
  {
    name: "ProActiv",
    pattern: /proactiv/gi,
  },
  {
    name: "Country Crock",
    pattern: /country\s+crock/gi,
  },
  {
    name: "BlueBand",
    pattern: /blueband/gi,
  },
  {
    name: "Violife",
    pattern: /violife/gi,
  },
  {
    name: "LÄTTA",
    pattern: /l[aä]tta/gi,
  },
  {
    name: "I Can't Believe It's Not Butter",
    pattern: /i\s+can't\s+believe\s+it's\s+not\s+butter/gi,
  },
  {
    name: "Bertolli",
    pattern: /bertolli/gi,
  },
  {
    name: "Fruit d'Or",
    pattern: /fruit\s+d'or/gi,
  },
  {
    name: "Planta Fin",
    pattern: /planta\s+fin/gi,
  },
  {
    name: "Bosque Verde",
    pattern:
      /bosque\s+verde|funda para lavadora|insecticida antimosquitos|pulsera de citronela/gi,
  },
  {
    name: "Cuidaplus Forte",
    pattern: /cuidaplus(?:\s+forte)?/gi,
  },
  {
    name: "Foresan",
    pattern: /foresan/gi,
  },
  {
    name: "IAN",
    pattern: /(?:\s|^)ian/gi,
  },
  {
    name: "Alesves",
    pattern: /alesves/gi,
  },
  {
    name: "Comaro",
    pattern: /comaro/gi,
  },
  {
    name: "La nureñense",
    pattern: /la\s+nureñense/gi,
  },
  {
    name: "Taboada",
    pattern: /taboada/gi,
  },
  {
    name: "Carretilla",
    pattern: /carretilla/gi,
  },
  {
    name: "Coren",
    pattern: /coren/gi,
  },
  {
    name: "Mamía",
    pattern: /mam[ií]a/gi,
  },
  {
    name: "Bajamar",
    pattern: /bajamar/gi,
  },
  {
    name: "Prima",
    pattern: /prima\s/gi,
  },
  {
    name: "Rio Mare",
    pattern: /rio\s+mare/gi,
  },
  {
    name: "Saupiquet",
    pattern: /saupiquet/gi,
  },
  {
    name: "Isabel",
    pattern: /(?:\s|^)isabel(?:\s|$)/gi,
  },
  {
    name: "Wild Planet",
    pattern: /wild\s+planet/gi,
  },
  {
    name: "Simmenthal",
    pattern: /simmenthal/gi,
  },
  {
    name: "Cuca",
    pattern: /cuca\s/gi,
  },
  {
    name: "WC Net",
    pattern: /wc\s+net/gi,
  },
  {
    name: "Smac",
    pattern: /smac(?:\s|$)/gi,
  },
  {
    name: "Omino Bianco",
    pattern: /omino\s+bianco/gi,
  },
  {
    name: "Cillit Bang",
    pattern: /cillit\s+bang/gi,
  },
  {
    name: "Cif",
    pattern: /[\^\s]cif/gi,
  },
  {
    name: "Ajax",
    pattern: /ajax/gi,
  },
  {
    name: "Ayudín",
    pattern: /ayud[ií]n/gi,
  },
  {
    name: "Bref",
    pattern: /bref/gi,
  },
  {
    name: "Cocinero",
    pattern: /cocinero/gi,
  },
  {
    name: "Dixan",
    pattern: /dixan/gi,
  },
  {
    name: "Don Limpio",
    pattern: /don\s+limpio/gi,
  },
  {
    name: "Dove",
    pattern: /dove/gi,
  },
  {
    name: "Eau Ecarlate",
    pattern: /eau\s+ecarlate/gi,
  },
  {
    name: "Ecover",
    pattern: /ecover/gi,
  },
  {
    name: "Fairy",
    pattern: /fairy/gi,
  },
  {
    name: "Finish",
    pattern: /finish/gi,
  },
  {
    name: "Carolin",
    pattern: /carolin/gi,
  },
  {
    name: "Winni's Naturel",
    pattern: /winni's\s+naturel/gi,
  },
  {
    name: "Deox",
    pattern: /deox/gi,
  },
  {
    name: "Citrosil",
    pattern: /citrosil/gi,
  },
  {
    name: "Sipuro",
    pattern: /sipuro/gi,
  },
  {
    name: "Overlay",
    pattern: /overlay/gi,
  },
  {
    name: "Meglio",
    pattern: /meglio/gi,
  },
  {
    name: "Dubro",
    pattern: /dubro/gi,
  },
  {
    name: "Argentil",
    pattern: /argentil/gi,
  },
  {
    name: "Vetril",
    pattern: /vetril/gi,
  },
  {
    name: "Merito",
    pattern: /merito/gi,
  },
  {
    name: "Borotalco",
    pattern: /borotalco/gi,
  },
  {
    name: "Chilly",
    pattern: /chilly/gi,
  },
  {
    name: "Cavaillés",
    pattern: /cavaill[eé]s/gi,
  },
  {
    name: "Somatoline",
    pattern: /somatoline/gi,
  },
  {
    name: "Omia",
    pattern: /omia/gi,
  },
  {
    name: "Neutro Roberts",
    pattern: /neutro\s+roberts/gi,
  },
  {
    name: "Acqua Alle Rose",
    pattern: /acqua\s+alle\s+rose/gi,
  },
  {
    name: "Bilboa",
    pattern: /bilboa/gi,
  },
  {
    name: "Sanogyl",
    pattern: /sanogyl/gi,
  },
  {
    name: "Citrosil",
    pattern: /citrosil/gi,
  },
  {
    name: "Vrioschi",
    pattern: /vrioschi/gi,
  },
  {
    name: "Botot",
    pattern: /botot/gi,
  },
  {
    name: "Collistar",
    pattern: /collistar/gi,
  },
  {
    name: "Albo",
    pattern: /albo/gi,
  },
  {
    name: "Litoral",
    pattern: /litoral/gi,
  },
  {
    name: "Nesquick",
    pattern: /nesquick/gi,
  },
  {
    name: "Quality Street",
    pattern: /quality\s+street/gi,
  },
  {
    name: "Nestlé",
    pattern: /nestl?[eé]|cono extreme|extreme (?:cono|cookie|mini)|(?<!lacasa chocolate\s)extrafino/gi,
  },
  {
    name: "Cini Minis",
    pattern: /cini\s+minis/gi,
  },
  {
    name: "Rosara",
    pattern: /rosara/gi,
  },
  {
    name: "Terrazza",
    pattern: /terrazza/gi,
  },
  {
    name: "Brillante",
    pattern: /(?:\s|^)brillante/gi,
  },
  {
    name: "Gastraval",
    pattern: /gastraval/gi,
  },
  {
    name: "Celorrio",
    pattern: /celorrio/gi,
  },
  {
    name: "El Encierro",
    pattern: /el\s+encierro/gi,
  },
  {
    name: "El Pilar",
    pattern: /el\s+pilar/gi,
  },
  {
    name: "Miau",
    pattern: /miau/gi,
  },
  {
    name: "Mimo",
    pattern: /mimo(?:\s|$)/gi,
  },
  {
    name: "Rombo d'Oro",
    pattern: /rombo\s+d'oro/gi,
  },
  {
    name: "Verdegal",
    pattern: /verdegal/gi,
  },
  {
    name: "Zalea",
    pattern: /(?:\s|^)zalea/gi,
  },
  {
    name: "Don Celorrio",
    pattern: /don\s+celorrio/gi,
  },
  {
    name: "Don Celorrio Selección",
    pattern: /don\s+celorrio\s+selección/gi,
  },
  {
    name: "Monje",
    pattern: /monje/gi,
  },
  {
    name: "Campoverde",
    pattern: /campoverde/gi,
  },
  {
    name: "Conservas Misdelicias",
    pattern: /conservas\s+misdelicias/gi,
  },
  {
    name: "Com & Com",
    pattern: /com\s+&\s+com/gi,
  },
  {
    name: "Vástagos de Rúbal",
    pattern: /v[aá]stagos\s+de\s+r[uú]bal/gi,
  },
  {
    name: "Cantara",
    pattern: /cantara/gi,
  },
  {
    name: "Coronas de Labarra",
    pattern: /coronas\s+de\s+labarra/gi,
  },
  {
    name: "Conservas Martínez",
    pattern: /conservas\s+martínez/gi,
  },
  {
    name: "MaryCarmen",
    pattern: /marycarmen/gi,
  },
  {
    name: "Vis",
    pattern: /^vis/gi,
  },
  {
    name: "Campo Rioja",
    pattern: /campo\s+rioja/gi,
  },
  {
    name: "Don Abilio",
    pattern: /don\s+abilio/gi,
  },
  {
    name: "Castillalta",
    pattern: /castillalta/gi,
  },
  {
    name: "Castillo de Monjes",
    pattern: /castillo\s+de\s+monjes/gi,
  },
  {
    name: "Chef",
    pattern: /^chef/gi,
  },
  {
    name: "OaeO",
    pattern: /oaeo/gi,
  },
  {
    name: "Juana Mary",
    pattern: /juana\s+mary/gi,
  },
  {
    name: "Gurutxe",
    pattern: /gurutxe/gi,
  },
  {
    name: "Alaxne",
    pattern: /alaxne/gi,
  },
  {
    name: "Xibanya",
    pattern: /xibanya/gi,
  },
  {
    name: "La Campesina Riojana",
    pattern: /la\s+campesina\s+riojana/gi,
  },
  {
    name: "Villa Sarnago",
    pattern: /villa\s+sarnago/gi,
  },
  {
    name: "Friend Cook",
    pattern: /friend\s+cook/gi,
  },
  {
    name: "Tres Jotas",
    pattern: /tres\s+jotas/gi,
  },
  {
    name: "La Huerta de al Lado",
    pattern: /la\s+huerta\s+de\s+al\s+lado/gi,
  },
  {
    name: "Presea",
    pattern: /presea/gi,
  },
  {
    name: "Arribillaga",
    pattern: /arribillaga/gi,
  },
  {
    name: "Juan José Jiménez",
    pattern: /juan\s+josé\s+jiménez/gi,
  },
  {
    name: "Bonduelle",
    pattern: /bonduelle/gi,
  },
  {
    name: "Cassegrain",
    pattern: /cassegrain/gi,
  },
  {
    name: "Globus",
    pattern: /globus/gi,
  },
  {
    name: "Ready Pac Bistro",
    pattern: /(ready\s+pac\s+)?bistro/gi,
  },
  {
    name: "El Campanillo",
    pattern: /el\s+campanillo/gi,
  },
  {
    name: "Cidacos",
    pattern: /cidacos/gi,
  },
  {
    name: "Lozano",
    pattern: /lozano/gi,
  },
  {
    name: "Luengo",
    pattern: /luengo/gi,
  },
  {
    name: "Bocadelia",
    pattern: /bocadelia/gi,
  },
  {
    name: "Cabezón",
    pattern: /cabez[oó]n/gi,
  },
  {
    name: "Ibsa",
    pattern: /(?:\s|^)ibsa/gi,
  },
  {
    name: "Laurel",
    pattern: /(?<!ducros|sabater)(?:\s|^)laurel/gi,
  },
  {
    name: "La Molisana",
    pattern: /la\s+molisana/gi,
  },
  {
    name: "El Navarrico",
    pattern: /el\s+navarrico/gi,
  },
  {
    name: "Izidoro",
    pattern: /izidoro/gi,
  },
  {
    name: "Bicentury",
    pattern: /bicentury|^tortita de maiz (?:yogur|choco negro|mini setas)/gi,
  },
  {
    name: "Bimanán",
    pattern: /biman[aá]n/gi,
  },
  {
    name: "NaturTierra",
    pattern: /naturtierra/gi,
  },
  {
    name: "Vittalíssima",
    pattern: /vittal[ií]ssima/gi,
  },
  {
    name: "Vive",
    pattern: /(?:\s|^)vive\s/gi,
  },
  {
    name: "Gerblé",
    pattern: /gerbl[eé]/gi,
  },
  {
    name: "Santiveri",
    pattern:
      /(?:(?:santiveri\s)?noglut|galletas?\s(?:digestive espelta|sesamo doble zero))/gi,
  },
  {
    name: "Pagesa",
    pattern: /pagesa/gi,
  },
  {
    name: "Schär",
    pattern: /sch[aä]r(?:\s|$)/gi,
  },
  {
    name: "Barebells",
    pattern: /barebells/gi,
  },
  {
    name: "Goldnutrition",
    pattern: /gold\s?nutrition/gi,
  },
  {
    name: "Just loading",
    pattern: /just\s+loading/gi,
  },
  {
    name: "PowerBar",
    pattern: /powerbar/gi,
  },
  {
    name: "Premier",
    pattern: /(?<!colgate\s)premier/gi,
  },
  {
    name: "Pompadour",
    pattern: /pompadour/gi,
  },
  {
    name: "Kordis",
    pattern: /kordis/gi,
  },
  {
    name: "Calypso",
    pattern: /calypso/gi,
  },
  {
    name: "Mundo Floral",
    pattern: /mundo\s+floral/gi,
  },
  {
    name: "Suavipiel",
    pattern: /suavipiel/gi,
  },
  {
    name: "Tobain",
    pattern: /tobain/gi,
  },
  {
    name: "Ecran",
    pattern: /ecran/gi,
  },
  {
    name: "Beauty Smile",
    pattern: /beauty\s+smile/gi,
  },
  {
    name: "Beautyka",
    pattern: /beautyka/gi,
  },
  {
    name: "Becasan Nature",
    pattern: /becasan(?:\s+nature)?/gi,
  },
  {
    name: "Anian",
    pattern: /anian/gi,
  },
  {
    name: "Elvive",
    pattern: /elvive/gi,
  },
  {
    name: "Flex",
    pattern: /(?:\s|^)flex(?:\s|$)/gi,
  },
  {
    name: "Garnier",
    pattern: /garnier/gi,
  },
  {
    name: "Fructis",
    pattern: /(?:garnier\s)?fructis/gi,
  },
  {
    name: "Original Remedies",
    pattern: /(?:garnier\s)?original\s+remedies/gi,
  },
  {
    name: "Skin Active",
    pattern: /(?:garnier\s)?skin\s+active/gi,
  },
  {
    name: "Belle Color",
    pattern: /(?:garnier\s)?belle\s+color/gi,
  },
  {
    name: "Good",
    pattern: /garnier\sgood/gi,
  },
  {
    name: "Nutrisse",
    pattern: /(?:garnier\s)?nutrisse/gi,
  },
  {
    name: "Giorgi",
    pattern: /giorgi/gi,
  },
  {
    name: "Schwarzkopf",
    pattern: /schwarzkopf/gi,
  },
  // A partir de aqui como garnier en grupo opcional con Schwarzkopf
  {
    name: "Nordic Blonde",
    pattern: /(schwarzkopf\s)?nordic\s+blonde/gi,
  },
  {
    name: "Palette",
    pattern: /(schwarzkopf\s)?palette/gi,
  },
  {
    name: "Retouch",
    pattern: /(schwarzkopf\s)?retouch(?:er)?/gi,
  },
  {
    name: "Taft",
    pattern: /(schwarzkopf\s)?taft/gi,
  },
  {
    name: "Gliss",
    pattern: /(schwarzkopf\s)?gliss/gi,
  },
  {
    name: "Dodot",
    pattern: /dodot/gi,
  },
  {
    name: "Ariel",
    pattern: /(?:\s|^)ariel/gi,
  },
  {
    name: "Lenor",
    pattern: /lenor/gi,
  },
  {
    name: "Ausonia",
    pattern: /ausonia/gi,
  },
  {
    name: "Evax",
    pattern: /evax/gi,
  },
  {
    name: "Tampax",
    pattern: /tampax/gi,
  },
  {
    name: "Braun",
    pattern: /braun/gi,
  },
  {
    name: "Gillete",
    pattern: /gillett?e/gi,
  },
  {
    name: "Venus",
    pattern: /venus/gi,
  },
  {
    name: "Aussie",
    pattern: /aussie/gi,
  },
  {
    name: "H&S",
    pattern: /h&s/gi,
  },
  {
    name: "Herbal Essences",
    pattern: /(?<!colgate\s)herbal(\sessences)?(?!\sdeliplus)/gi,
  },
  {
    name: "Pantene",
    pattern: /pantene/gi,
  },
  {
    name: "Ambi Pur",
    pattern: /ambi\s+pur/gi,
  },
  {
    name: "Don Limpio",
    pattern: /don\s+limpio/gi,
  },
  {
    name: "Fairy",
    pattern: /fairy/gi,
  },
  {
    name: "Swiffer",
    pattern: /swiffer/gi,
  },
  {
    name: "Viakal",
    pattern: /viakal/gi,
  },
  {
    name: "Oral-b",
    pattern: /oral-b/gi,
  },
  {
    name: "Kukident",
    pattern: /kukident/gi,
  },
  {
    name: "La Maison",
    pattern: /la\s+maison/gi,
  },
  {
    name: "Maui",
    pattern: /maui/gi,
  },
  {
    name: "Naturvital",
    pattern: /natur\s?vital/gi,
  },
  {
    name: "OGX",
    pattern: /ogx/gi,
  },
  {
    name: "Revlon",
    pattern: /revlon/gi,
  },
  {
    name: "Syoss",
    pattern: /syoss/gi,
  },
  // We really need to be careful with human errors
  {
    name: "Tresemmé",
    pattern: /tr?esemm[eé]/gi,
  },
  {
    name: "Batiste",
    pattern: /batiste/gi,
  },
  {
    name: "Biosei",
    pattern: /biosei/gi,
  },
  {
    name: "Denenes",
    pattern: /denenes/gi,
  },
  {
    name: "Instituto Español",
    pattern: /(?:instituto|inst)(?:\s|^|\.)español/gi,
  },
  {
    name: "Kerzo",
    pattern: /kerzo/gi,
  },
  {
    name: "Mr Gentle",
    pattern: /mr\s+gentle/gi,
  },
  {
    name: "Nelly",
    pattern: /nelly/gi,
  },
  {
    name: "Just For Men",
    pattern: /just\sfor\smen/gi,
  },
  {
    name: "Llongueras",
    pattern: /llongueras/gi,
  },
  {
    name: "Naturtint",
    pattern: /naturtint/gi,
  },
  {
    name: "Wella",
    pattern: /wella/gi,
  },
  {
    name: "Got2b",
    pattern: /got2b/gi,
  },
  {
    name: "Stylista",
    pattern: /stylista/gi,
  },
  {
    name: "Almendrola",
    pattern: /almendrola/gi,
  },
  {
    name: "Yosoy",
    pattern: /yo\s?soy/gi,
  },
  {
    name: "Alpro",
    pattern: /alpro/gi,
  },
  {
    name: "Ecomil",
    pattern: /ecomil(?:\sdiemilk)?|diemilk/gi,
  },
  {
    name: "Kaiku",
    pattern: /kaiku(?:\sbegetal)?/gi,
  },
  {
    name: "Vivesoy",
    pattern: /vivesoy/gi,
  },
  {
    name: "Provamel",
    pattern: /provamel|promavel/gi,
  },
  {
    name: "Vivibio",
    pattern: /vivibio/gi,
  },
  {
    name: "Kalise",
    pattern: /kalise/gi,
  },
  {
    name: "Agerul",
    pattern: /agerul/gi,
  },
  {
    name: "Airborne",
    pattern: /airborne/gi,
  },
  {
    name: "Air Wick",
    pattern: /air\s?wick/gi,
  },
  {
    name: "Biofreeze",
    pattern: /biofreeze/gi,
  },
  {
    name: "Calgon",
    pattern: /calgon/gi,
  },
  {
    name: "Cillit Bang",
    pattern: /cillit\s+bang/gi,
  },
  {
    name: "Clearasil",
    pattern: /clearasil/gi,
  },
  {
    name: "Dettol",
    pattern: /dettol/gi,
  },
  {
    name: "Durex",
    pattern: /durex/gi,
  },
  {
    name: "Enfamil",
    pattern: /enfamil/gi,
  },
  {
    name: "Gaviscon",
    pattern: /gaviscon/gi,
  },
  {
    name: "Harpic",
    pattern: /harpic/gi,
  },
  {
    name: "K-Y",
    pattern: /k-y/gi,
  },
  {
    name: "Lysol",
    pattern: /lysol/gi,
  },
  {
    name: "Mortein",
    pattern: /mortein/gi,
  },
  {
    name: "Move Free",
    pattern: /move\s+free/gi,
  },
  {
    name: "Mucinex",
    pattern: /mucinex/gi,
  },
  {
    name: "Neuriva",
    pattern: /neuriva/gi,
  },
  {
    name: "Nurofen",
    pattern: /nurofen/gi,
  },
  {
    name: "Nutramigen",
    pattern: /nutramigen/gi,
  },
  {
    name: "Queen V",
    pattern: /queen\s+v/gi,
  },
  {
    name: "Strepsils",
    pattern: /strepsils/gi,
  },
  {
    // This brand causes collitions with 'Colón'. I'm going to make it more specific but we need to be careful
    name: "Vanish",
    pattern: /^vanish/gi,
  },
  {
    name: "Veet",
    pattern: /veet/gi,
  },
  {
    name: "Woolite",
    pattern: /woolite/gi,
  },
  {
    name: "Ambar Perfums",
    pattern: /ambar(?!\s(?:lata|cerveza))/gi,
  },
  {
    name: "Don Algodon Ambients",
    pattern: /don\salgodon\s(?:ambients)?/gi,
  },
  {
    name: "The Fruit Company",
    pattern: /(?:the fruit company|fruit company|the fruit)/gi,
  },
  {
    name: "Dr.Zoo",
    pattern: /dr\.zoo/gi,
  },
  {
    name: "Ambienair",
    pattern: /ambient?air/gi,
  },
  {
    name: "Lumar Aromatic",
    pattern:
      /lumar\saromatic|pack [23]0 tealights|tabla incienso colores|vaso yogurt perf\.|velas día de San Valentín/gi,
  },
  {
    name: "Aromatium",
    pattern: /aromatium/gi,
  },
  {
    name: "Velas Lumar",
    pattern: /velas\slumar/gi,
  },
  {
    name: "Luminum",
    pattern: /luminum/gi,
  },
  {
    name: "Botanica",
    pattern: /bot[aá]nica/gi,
  },
  {
    name: "La Casa de los aromas",
    pattern: /(?:la\s)?casa\sde\slos\saromas/gi,
  },
  {
    name: "Cristalinas",
    pattern: /cristalinas/gi,
  },
  {
    name: "Glade",
    pattern: /glade/gi,
  },
  {
    name: "Natuaromatic",
    pattern: /natua?romatic/gi,
  },
  {
    name: "Orion",
    pattern: /orion/gi,
  },
  /* This brand is causing problems, we will need to be more specific
   * - First specific match: Being the first word in the string
   **/
  {
    name: "Oro",
    pattern: /^oro/gi,
  },
  {
    name: "Sanytol",
    pattern: /sanytol/gi,
  },
  {
    name: "Sufflor",
    pattern: /suff?lor/gi,
  },
  {
    name: "Elefante",
    pattern: /elefante/gi,
  },
  {
    name: "Disiclin",
    pattern: /disi?clin/gi,
  },
  {
    name: "Humydry",
    pattern: /humydry/gi,
  },
  {
    name: "Cuchol",
    pattern: /cuchol/gi,
  },
  {
    name: "IQ",
    pattern: /^iq/gi,
  },
  {
    name: "Asevi",
    pattern: /asevi/gi,
  },
  {
    name: "PonsPro",
    pattern: /ponspro/gi,
  },
  {
    name: "Mi Casa",
    pattern: /mi\s+casa/gi,
  },
  {
    name: "MPL",
    pattern: /^mpl/gi,
  },
  {
    name: "Pato",
    pattern: /(?<!\sde|h[ií]gado)(?:^|\s)pato(?:$|\s)/gi,
  },
  {
    name: "Pattex",
    pattern: /pattex/gi,
  },
  {
    name: "Tenn",
    pattern: /tenn(?:\s|$)/gi,
  },
  {
    name: "Albal",
    pattern: /(?:\s|^)albal(?:\s|$)/gi,
  },
  {
    name: "Macopack",
    pattern: /macopack/gi,
  },
  {
    name: "Baygon",
    pattern: /baygon/gi,
  },
  {
    name: "Bloom",
    pattern: /bloom/gi,
  },
  {
    name: "Carcomin",
    pattern: /carcomin/gi,
  },
  {
    name: "Casa Jardín",
    pattern: /casa\s+jard[ií]n/gi,
  },
  {
    name: "Cucal",
    pattern: /cucal/gi,
  },
  {
    name: "Eco-Stop",
    pattern: /eco-stop/gi,
  },
  {
    name: "Kill Paff",
    pattern: /kill\s+paff/gi,
  },
  {
    name: "Raid",
    pattern: /raid/gi,
  },
  {
    // This brand is causing problems, we will need to be more specific
    // - First specific match: Being the first word in the string
    // - Second specific match: The word should have an space after
    name: "Zum",
    pattern: /^zum\s/gi,
  },
  {
    name: "Farmazum",
    pattern: /farmazum/gi,
  },
  {
    name: "Garant",
    pattern: /garant/gi,
  },
  {
    name: "Lafin",
    pattern: /lafin/gi,
  },
  {
    name: "Flota",
    pattern: /flota/gi,
  },
  {
    name: "Induclen",
    pattern: /induclen/gi,
  },
  {
    name: "KH-7",
    pattern: /kh-?7/gi,
  },
  {
    name: "Mistol",
    pattern: /mistol/gi,
  },
  {
    name: "Sidol",
    pattern: /sidol/gi,
  },
  {
    name: "Somat",
    pattern: /somat/gi,
  },
  {
    name: "Vitroclen",
    pattern: /vitroclen/gi,
  },
  {
    name: "La Sabandeña",
    pattern: /la\s+sabandeña/gi,
  },
  {
    name: "Vinfermatón",
    pattern: /vinfermat[oó]n/gi,
  },
  {
    name: "Las 3 Brujas",
    pattern: /las\s+3\s+brujas/gi,
  },
  {
    name: "Búfalo",
    pattern: /b[uú]falo/gi,
  },
  {
    name: "Unex",
    pattern: /unex/gi,
  },
  {
    name: "Conejo",
    pattern: /^conejo/gi,
  },
  {
    name: "Domestos",
    pattern: /domestos/gi,
  },
  {
    name: "La lavandera",
    pattern: /la\s+lavandera/gi,
  },
  {
    name: "Colón",
    pattern: /col[oó]n(?:\s|$)/gi,
  },
  {
    name: "Handy Bag",
    pattern: /handy\s+bag/gi,
  },
  {
    name: "Inoxclen",
    pattern: /inoxclen/gi,
  },
  {
    name: "Lejiplus",
    pattern: /lejiplus/gi,
  },
  {
    name: "Neutrex",
    pattern: /neutrex/gi,
  },
  {
    name: "Tres Sietes",
    pattern: /tres\s+sietes?/gi,
  },
  {
    name: "Volvone",
    pattern: /volvone/gi,
  },
  {
    name: "Alex",
    pattern: /alex/gi,
  },
  {
    name: "Destop",
    pattern: /destop/gi,
  },
  {
    name: "La Piel",
    pattern: /(?:\s|^)la\s+piel(?!\sbonté)/gi,
  },
  {
    name: "Palc",
    pattern: /palc(?:\s|$)/gi,
  },
  {
    name: "Pronto",
    pattern: /pronto/gi,
  },
  {
    name: "Toke",
    pattern: /toke/gi,
  },
  {
    name: "Glassex",
    pattern: /glassex/gi,
  },
  {
    name: "El Milagrito",
    pattern: /el\s+milagrito/gi,
  },
  {
    name: "Flor de olivo",
    pattern: /flor\s+de\s+olivo/gi,
  },
  {
    // I saw a case a 'natugeen'...
    name: "Naturgreen",
    pattern: /naturgr?een/gi,
  },
  {
    name: "Olifix",
    pattern: /olifix/gi,
  },
  {
    name: "Olivado",
    pattern: /olivado/gi,
  },
  {
    name: "Voelkel",
    pattern: /voelkel/gi,
  },
  {
    name: "Anaconda",
    pattern: /anaconda/gi,
  },
  {
    name: "Born",
    pattern: /[\^\s]born[\$\s]/gi,
  },
  {
    // I saw a case a 'ecoesta'...
    name: "Eco Cesta",
    pattern: /eco\s?c?esta/gi,
  },
  {
    name: "Finestra",
    pattern: /finestra/gi,
  },
  {
    name: "Tetera Azul",
    pattern: /tetera\s+azul/gi,
  },
  {
    name: "Yogi Tea",
    pattern: /yogi(?:\stea)?/gi,
  },
  {
    name: "Gvtarra",
    pattern: /g[uv]tarra/gi,
  },
  {
    name: "Ethiquable",
    pattern: /eth?iquable/gi,
  },
  {
    name: "Cupper",
    pattern: /cupper/gi,
  },
  {
    name: "Kitu",
    pattern: /kitu/gi,
  },
  {
    name: "Quinua Real",
    pattern: /quinua\s+real/gi,
  },
  {
    name: "Taste nature",
    pattern: /taste\s*nature/gi,
  },
  {
    name: "Vitasnack",
    pattern: /vitasnack/gi,
  },
  {
    name: "Alternativa 3",
    pattern: /alternativa\s+3/gi,
  },
  {
    name: "Granovita",
    pattern: /granovita/gi,
  },
  {
    // I saw a case a 'Asagio'...
    name: "Rigoni di Asiago",
    pattern: /rigoni\s+di\s+asi?agi?o/gi,
  },
  {
    name: "Nocciolata",
    pattern: /nocciolata/gi,
  },
  {
    name: "Suchard",
    pattern: /suchard/gi,
  },
  {
    name: "Casa Amella",
    pattern: /casa\s+amella/gi,
  },
  {
    name: "Natur Compagnie",
    pattern: /nature?\s+compagnie/gi,
  },
  {
    name: "Bjorg",
    pattern: /bjorg/gi,
  },
  {
    name: "EKO",
    pattern: /(?:\s|^)eko/gi,
  },
  {
    // I saw a case a 'ganero'...
    name: "El Granero",
    pattern: /(?:el\s)?gr?anero/gi,
  },
  {
    name: "Bifemme",
    pattern: /bifemme/gi,
  },
  {
    name: "EcoZen",
    pattern: /ecozen/gi,
  },
  {
    name: "Fitosol",
    pattern: /fitosol/gi,
  },
  {
    name: "Fitosol Retard",
    pattern: /fitosol\s+retard/gi,
  },
  {
    name: "Hijas Del Sol Bio",
    pattern: /hijas\s+del\s+sol\s+bio/gi,
  },
  {
    name: "Hijas Del Sol",
    pattern: /hijas\s+del\s+sol/gi,
  },
  {
    name: "KL Protein",
    pattern: /kl\s+protein/gi,
  },
  {
    name: "Línea OB",
    pattern: /línea\s+ob/gi,
  },
  {
    name: "Model 10",
    pattern: /model\s+10/gi,
  },
  {
    name: "NaturaFemme",
    pattern: /naturafemme/gi,
  },
  {
    name: "Nutri DX",
    pattern: /nutri\s+dx/gi,
  },
  {
    name: "Nutriox Cosmetics",
    pattern: /nutriox\s+cosmetics/gi,
  },
  {
    name: "Nutriox Program",
    pattern: /nutriox\s+program/gi,
  },
  {
    name: "Phytogreen",
    pattern: /phytogreen/gi,
  },
  {
    name: "Vitaminas y Minerales",
    pattern: /vitaminas\s+y\s+minerales/gi,
  },
  {
    name: "Ynsadiet",
    pattern: /ynsadiet/gi,
  },
  {
    name: "Zentrum",
    pattern: /zentrum/gi,
  },
  {
    name: "Linwoods",
    pattern: /linwoods/gi,
  },
];

export default GeneralBrands;
