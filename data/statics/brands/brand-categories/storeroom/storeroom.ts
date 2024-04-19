import { TBrand } from "../../../../types/brand";
import StoreRoomSpreadableBrands from "./storeroom-spreadable";

const StoreRoom: TBrand[] = [
  {
    name: "Borges",
    pattern: /borges/gi,
  },
  {
    name: "Herrs",
    pattern: /herrs/gi,
  },
  {
    name: "Mr Free D",
    pattern: /mr free ?d/gi,
  },
  {
    name: "Sal de Ibiza",
    pattern: /sal de ibiza/gi,
  },
  {
    name: "San Nicasio",
    pattern: /san nicasio/gi,
  },
  {
    name: "Sarriegui",
    pattern: /sarriegui/gi,
  },
  {
    name: "Tyrrells",
    pattern: /tyrrells/gi,
  },
  {
    name: "Zubelzu",
    pattern: /zubelzu/gi,
  },
  {
    name: "Grefusa",
    pattern: /grefusa/gi,
  },
  {
    name: "Aspil",
    pattern: /aspil/gi,
  },
  {
    name: "Aspitos",
    pattern: /aspitos/gi,
  },
  {
    name: "Jumpers",
    pattern: /jumpers/gi,
  },

  {
    name: "Popitas",
    pattern: /popitas/gi,
  },

  {
    name: "Vicente Vidal",
    pattern: /vicente vidal/gi,
  },

  {
    name: "Marinas",
    pattern: /marinas/gi,
  },

  {
    name: "Espada",
    pattern: /espada/gi,
  },

  {
    name: "Aitana",
    pattern: /aitana/gi,
  },

  {
    name: "Emilio Arias Lizano",
    pattern: /emilio arias lizano/gi,
  },

  {
    name: "Mikso",
    pattern: /mikso/gi,
  },

  {
    name: "PopUp",
    pattern: /pop[ -]?up/gi,
  },

  {
    name: "Santo Reino",
    pattern: /santo reino/gi,
  },
  {
    name: "Batatitos",
    pattern: /batatitos/gi,
  },
  {
    name: "Bimbachitos",
    pattern: /bimbachitos/gi,
  },
  {
    name: "Cheetos",
    pattern: /cheetos/gi,
  },
  {
    name: "Lays",
    pattern: /(?:\s|^)lay'?s/gi,
  },
  {
    name: "Doritos",
    pattern: /doritos/gi,
  },
  {
    name: "Sun Bites",
    pattern: /sun ?bites/gi,
  },
  {
    name: "Ruffles",
    pattern: /ruffles/gi,
  },
  {
    name: "Quaker Cruesli",
    pattern: /quaker cruesli/gi,
  },
  {
    name: "Matutano",
    pattern: /matutano|munchitos/gi,
  },
  {
    name: "Santa Ana",
    pattern: /santa ?ana/gi,
  },
  {
    name: "Chipicao",
    pattern: /chipicao/gi,
  },
  {
    name: "Cumba",
    pattern: /cumba|palitrokes/gi,
  },
  {
    name: "Facundo",
    pattern: /facundo/gi,
  },
  {
    name: "Frit Ravich",
    pattern: /frit ravich|Coctel xtreme/gi,
  },
  {
    name: "Risi",
    pattern: /(?:\s|^)risi|mios/gi,
  },
  {
    name: "Soldanza",
    pattern: /soldanza/gi,
  },
  {
    name: "Diamante",
    pattern: /diamante/gi,
  },
  {
    name: "Fragata",
    pattern: /fragata/gi,
  },
  {
    name: "Helios",
    pattern: /helios/gi,
  },
  {
    name: "Hengstenberg",
    pattern: /hengstenberg/gi,
  },
  {
    name: "Noliko",
    pattern: /noliko/gi,
  },
  {
    name: "Ríoverde",
    pattern: /r[ií]overde/gi,
  },
  {
    name: "Casa Ricardo",
    pattern: /casa ricardo/gi,
  },
  {
    name: "La Dama de la Vera",
    pattern: /la dama de la vera|cuello de dama/gi,
  },
  {
    name: "Isola",
    pattern: /isola/gi,
  },
  {
    name: "Campo y Tierra",
    pattern: /campo y tierra/gi,
  },
  {
    name: "Churruca",
    pattern: /churruca/gi,
  },
  {
    name: "Eagle",
    pattern: /(?!takis)(?:\s|^)eagle/gi,
  },
  {
    name: "Escamilla",
    pattern: /escamilla/gi,
  },
  {
    name: "Medjoul",
    pattern: /medjoul/gi,
  },
  {
    name: "Najor",
    pattern: /najor/gi,
  },
  {
    name: "Pipas canarionas",
    pattern: /pipas canarionas/gi,
  },
  {
    name: "Piponazo",
    pattern: /piponazo/gi,
  },
  {
    name: "Salysol",
    pattern: /salysol/gi,
  },
  {
    name: "Wonderful",
    pattern: /wonderful/gi,
  },
  {
    name: "Hermach",
    pattern: /hermach/gi,
  },
  {
    name: "Añavieja",
    pattern: /añavieja/gi,
  },
  {
    name: "Cynara",
    pattern: /cynara/gi,
  },
  {
    name: "Eat Real",
    pattern: /eat real/gi,
  },
  {
    name: "Argente",
    pattern: /argente/gi,
  },
  {
    name: "Pringles",
    pattern: /pringles/gi,
  },
  {
    name: "Sabores de La Esteban",
    pattern: /sabores de la esteban/gi,
  },
  {
    name: "Valor",
    pattern: /valor/gi,
  },
  {
    name: "Royal Mints",
    pattern: /royal mints/gi,
  },
  {
    name: "Kit Kat",
    pattern: /kit[ -]?kat/gi,
  },
  {
    name: "Pintarolas",
    pattern: /pintarolas/gi,
  },
  {
    name: "Senzza",
    pattern: /senzza/gi,
  },
  {
    name: "Cadbury",
    pattern: /cadbury/gi,
  },
  {
    name: "Caja Roja",
    pattern: /caja roja(?: nestl[eé])?/gi,
  },
  {
    name: "Lindtr Lindor",
    pattern: /(?:(?:lindt\s)?(?:lindt|lindor)(?:\slindt)?)|gold bunny/gi,
  },
  {
    name: "Mondose",
    pattern: /mondose/gi,
  },
  {
    name: "La Boutique del Praliné",
    pattern: /la boutique del pralin[eé]/gi,
  },
  {
    name: "Chimbote",
    pattern: /chimbote/gi,
  },
  {
    name: "Lamb Weston",
    pattern: /lamb ?weston/gi,
  },
  {
    name: "Castillo de Holanda",
    pattern: /castillo(?:de holanda|.*queso.*)/gi,
  },
  {
    name: "Colliers",
    pattern: /collier'?s/gi,
  },
  {
    name: "Oldenburguer",
    pattern: /oldenburguer/gi,
  },
  {
    name: "El Parral",
    pattern: /el parral/gi,
  },
  {
    name: "El Pastor",
    pattern: /el pastor(?:\s|$)/gi,
  },
  {
    name: "La Jaira",
    pattern: /la jaira/gi,
  },
  {
    name: "Portillo",
    pattern: /(?:\s|^)portillo/gi,
  },
  {
    name: "Maxorata",
    pattern: /maxorata/gi,
  },
  {
    name: "El Tofio",
    pattern: /el tofio/gi,
  },
  {
    name: "Selectum",
    pattern: /selectum/gi,
  },
  {
    name: "Tobar del Oso",
    pattern: /tobar del oso/gi,
  },
  {
    name: "Herreño",
    pattern: /herreño/gi,
  },
  {
    name: "El Faro",
    pattern: /el faro/gi,
  },
  {
    name: "La Vaca Afortunada",
    pattern: /la vaca afortunada/gi,
  },
  {
    name: "Lomo Gallego",
    pattern: /lomo gallego/gi,
  },
  {
    name: "San Mateo",
    pattern: /san mateo/gi,
  },
  {
    name: "Valsequillo",
    pattern: /valsequillo/gi,
  },
  {
    name: "Cerrato",
    pattern: /cerrato/gi,
  },
  {
    name: "Flor De Esgueva",
    pattern: /flor\s(de\s)?esgueva/gi,
  },
  {
    name: "García Baquero",
    pattern: /(?:garc[íi]a|g.)?\s?baquero/gi,
  },
  {
    name: "Gran Capitán",
    pattern: /gran capit[áa]n/gi,
  },
  {
    name: "Quesar",
    pattern: /quesar/gi,
  },
  {
    name: "Bolaños",
    pattern: /bolaños/gi,
  },
  {
    name: "De La Cumbre",
    pattern: /de la cumbre/gi,
  },
  {
    name: "Distribuidor de Quesos Canarios",
    pattern: /distribuidor (?:de\s)?quesos canarios/gi,
  },
  {
    name: "Isla Bonita",
    pattern: /isla bonita/gi,
  },
  {
    name: "Islas Canarias",
    pattern: /islas canarias/gi,
  },
  {
    name: "Madrelagua",
    pattern: /(?:medianías )?madrelagua/gi,
  },
  {
    name: "Pajonales",
    pattern: /pajonales/gi,
  },
  {
    name: "Tindaya",
    pattern: /tindaya/gi,
  },
  {
    name: "Argavanzal",
    pattern: /argavanzal/gi,
  },
  {
    name: "Emmi",
    pattern: /emmi/gi,
  },
  {
    name: "Parti",
    pattern: /parti(?:\s|$)/gi,
  },
  {
    name: "Pazo do queixo",
    pattern: /pazo do queixo/gi,
  },
  {
    name: "Reny Picot",
    pattern: /reny picot/gi,
  },
  {
    name: "Siete Coronas",
    pattern: /siete coronas/gi,
  },
  {
    name: "Societé",
    pattern: /societ[ée]/gi,
  },
  {
    name: "Zanetti",
    pattern: /zanetti/gi,
  },
  {
    name: "Sánchez Romero Carvajal",
    pattern: /sánchez romero carvajal/gi,
  },
  {
    name: "Santa Teresa",
    pattern: /santa teresa/gi,
  },
  {
    name: "Ve-Ga",
    pattern: /vega\sgourmet/gi,
  },
  {
    name: "Leerdammer",
    pattern: /leerdammer/gi,
  },
  {
    name: "Salakis",
    pattern: /salakis?/gi,
  },
  {
    name: "Tgt",
    pattern: /tgt/gi,
  },
  {
    name: "Belnut",
    pattern: /belnut/gi,
  },
  {
    name: "Fundo Sofruco",
    pattern: /fundo sofruco/gi,
  },
  {
    name: "Villacruz",
    pattern: /villacruz/gi,
  },
  {
    name: "De Juan",
    pattern: /de\sjuan(?:\s|$)/gi,
  },
  {
    name: "Munchos",
    pattern: /munchos/gi,
  },
  {
    name: "Estrella",
    pattern: /estrella(?:\s|$)(?!cerveza|galicia|del sur|damm)/gi,
  },
  {
    name: "La Llanura",
    pattern: /la\sllanura/gi,
  },
  {
    name: "Snakis",
    pattern: /snakis/gi,
  },
  {
    name: "Artiach",
    pattern: /artiach/gi,
  },
  {
    name: "Chiquilin",
    pattern: /chiquilin/gi,
  },
  {
    name: "Dinosaurus",
    pattern: /dinosaurus/gi,
  },
  {
    name: "Filipinos",
    pattern: /(?<!con\s)filipinos/gi,
  },
  {
    name: "Marbú Doradas",
    pattern: /marb[uú](?:\sdoradas)?/gi,
  },
  {
    name: "Princesa",
    pattern: /princesa/gi,
  },
  {
    name: "Artiach",
    pattern: /artiach/gi,
  },
  {
    name: "Coral",
    pattern: /(?<!desodorante|nº\d\s|19\s)coral/gi,
  },
  {
    name: "Tosta Rica",
    pattern: /tosta\s?rica/gi,
  },
  {
    name: "Napolitanas",
    pattern: /(?<!consum)(?:\s|^)napolitanas/gi,
  },
  {
    name: "Flakes",
    pattern: /(?<!corn|choco)(?:\s|^)flakes?/gi,
  },
  {
    name: "Krit",
    pattern: /(!saladas)(?:\s|^)krit(?:\s|$)/gi,
  },
  {
    name: "Bocaditos",
    pattern: /^bocaditos(?:\s|$)(?!en\ssalsa|de cacao)/gi,
  },
  {
    name: "El Auténtico",
    pattern: /el\s+auténtico/gi,
  },
  {
    name: "AvenaCol",
    pattern: /avenacol/gi,
  },
  {
    name: "Fibralia",
    pattern: /fibralia/gi,
  },
  {
    name: "Campurrianas",
    pattern: /campurrianas/gi,
  },
  {
    name: "Cookienss",
    pattern: /cookienss/gi,
  },
  {
    name: "María Oro",
    pattern: /cu[eé]tara.*mar[ií]a(?:\s+oro)?/gi,
  },
  {
    name: "Marías & Tostadas",
    pattern: /marías\s+&\s+tostadas/gi,
  },
  {
    name: "Cuétara Galletas",
    pattern: /cu[eé]tara\s?(?:galletas?|barquillos?)?/gi,
  },
  {
    name: "Fabián Martín",
    pattern: /fabi[aá]n\s+mart[ií]n/gi,
  },
  {
    name: "Gullón",
    pattern:
      /(?!(?:mcvities|santiveri|consum)\sgalletas\s)digestive(?:\s|$)(?!(?:con chocolate|con avena y trigo)?\s?Galleteca|(?:finas\s)?con chocolate (?:con leche|negro) Fontaneda|original Fontaneda)|gull[oó]n/gi,
  },
  {
    name: "Merci",
    pattern: /merci(?:\s|$)/gi,
  },
  {
    name: "Knoppers",
    pattern: /knoppers?/gi,
  },
  {
    name: "Toffifee",
    pattern: /toffifee/gi,
  },
  {
    name: "Mels",
    pattern: /mels|brazo nata/gi,
  },
  {
    name: "D. Sancho Melero",
    pattern: /d.\ssancho\s+melero/gi,
  },
  {
    name: "La Flor de Antequera",
    pattern: /(?:^fa\s|la\s+flor\s+de\s+antequera)/gi,
  },
  {
    name: "La Castaña",
    pattern: /la\s+castaña/gi,
  },
  {
    name: "Carmen Lupiañez",
    pattern: /c.?(armen)?\s+lupiañez/gi,
  },
  {
    name: "La Molleria",
    pattern: /la\s+molleria/gi,
  },
  {
    name: "Pan de Ángel",
    pattern: /pan\s+de\s+ángel/gi,
  },
  {
    name: "Mantequera",
    pattern: /mantequera/gi,
  },
  {
    name: "5 Star",
    pattern: /5\s+star/gi,
  },
  {
    name: "7Days",
    pattern: /7days/gi,
  },
  {
    name: "Alpen Gold",
    pattern: /alpen\s+gold/gi,
  },
  {
    name: "Barni",
    pattern: /barni/gi,
  },
  {
    name: "Belvita",
    pattern: /belvita/gi,
  },
  {
    name: "Bournvita",
    pattern: /bournvita/gi,
  },
  {
    name: "Cadbury",
    pattern: /cadbury/gi,
  },
  {
    name: "Cadbury Dairy Milk",
    pattern: /cadbury\s+dairy\s+milk/gi,
  },
  {
    name: "Chips Ahoy!",
    pattern: /chips\s+ahoy!?/gi,
  },
  {
    name: "Clif",
    pattern: /clif/gi,
  },
  {
    name: "Clorets",
    pattern: /clorets/gi,
  },
  {
    name: "Club Social",
    pattern: /club\s+social/gi,
  },
  {
    name: "Côte d'Or",
    pattern: /côte\s+d'or/gi,
  },
  {
    name: "Daim",
    pattern: /daim/gi,
  },
  {
    name: "Enjoy Life Foods",
    pattern: /enjoy\s+life\s+foods/gi,
  },
  {
    name: "Freia",
    pattern: /freia/gi,
  },
  {
    name: "Grenade",
    pattern: /grenade/gi,
  },
  {
    name: "Halls",
    pattern: /halls/gi,
  },
  {
    name: "Honey Maid",
    pattern: /honey\s+maid/gi,
  },
  {
    name: "Hu",
    pattern: /hu\s/gi,
  },
  {
    name: "Kinh Do",
    pattern: /kinh\s+do/gi,
  },
  {
    name: "Lacta",
    pattern: /lacta\s/gi,
  },
  {
    name: "Lu",
    pattern: /(?<!marie)(?:\s|^)lu(?:\s|$)/gi,
  },
  {
    name: "Marabou",
    pattern: /marabou/gi,
  },
  {
    name: "Maynards Bassetts",
    pattern: /maynards\s+bassetts/gi,
  },
  {
    name: "Mikado",
    pattern: /mikado/gi,
  },
  {
    name: "Milka",
    pattern: /milka(?!\sroyal)/gi,
  },
  {
    name: "Oreo",
    pattern: /oreo(?!\sroyal)/gi,
  },
  {
    name: "Perfect Snacks",
    pattern: /perfect\s+snacks/gi,
  },
  {
    name: "Philadelphia",
    pattern: /philadelphia/gi,
  },
  {
    name: "Prince",
    pattern: /prince/gi,
  },
  {
    name: "Ritz",
    pattern: /ritz/gi,
  },
  {
    name: "Royal",
    pattern: /royal(?:\s|$)(?!swan|greenland)/gi,
  },
  {
    name: "Sour Patch Kids",
    pattern: /sour\s+patch\s+kids/gi,
  },
  {
    name: "Stride",
    pattern: /stride/gi,
  },
  {
    name: "Tang",
    pattern: /(?<!go-)tang\s/gi,
  },
  {
    name: "Tate's Bake Shop",
    pattern: /tate's\s+bake\s+shop/gi,
  },
  {
    name: "Tiger",
    pattern: /tiger/gi,
  },
  {
    name: "Toblerone",
    pattern: /toblerone/gi,
  },
  {
    name: "Triscuit",
    pattern: /triscuit/gi,
  },
  {
    name: "Tuc",
    pattern: /tuc(?:\s|$)/gi,
  },
  {
    name: "Wheat Thins",
    pattern: /wheat\s+thins/gi,
  },
  {
    name: "Pirulín",
    pattern: /(?:^|\s)pirul[ií]n/gi,
  },
  {
    name: "Pirucream",
    pattern: /pirucream/gi,
  },
  {
    name: "Trabel",
    pattern: /trabel/gi,
  },
  {
    name: "Doramas",
    pattern: /doramas/gi,
  },
  {
    name: "Fontaneda",
    pattern: /(?:Marie-Lu\s)?fontaneda/gi,
  },
  {
    name: "Griesson",
    pattern: /griesson/gi,
  },
  {
    name: "Sancho Panza",
    pattern: /sancho\spanza/gi,
  },
  {
    name: "Danesita",
    pattern: /danesita/gi,
  },
  {
    name: "Daveiga",
    pattern: /daveiga/gi,
  },
  {
    name: "BN",
    pattern: /bn/gi,
  },
  {
    name: "Carr's",
    pattern: /carr's/gi,
  },
  {
    name: "Flipz",
    pattern: /flipz/gi,
  },
  {
    name: "Go Ahead",
    pattern: /go\s+ahead/gi,
  },
  {
    name: "Godiva",
    pattern: /godiva/gi,
  },
  {
    name: "Jacob's",
    pattern: /jacob's/gi,
  },
  {
    name: "McVitie's",
    pattern: /mcvitie'?s/gi,
  },
  {
    name: "Ülker",
    pattern: /ülker/gi,
  },
  {
    name: "Poppies",
    pattern: /poppies/gi,
  },
  {
    name: "Delizza",
    pattern: /delizza/gi,
  },
  {
    name: "Rita",
    pattern: /^rita/gi,
  },
  {
    name: "Oroweat",
    pattern: /oroweat/gi,
  },
  {
    name: "Ortiz",
    pattern: /ortiz/gi,
  },
  {
    name: "Silueta",
    pattern: /silueta/gi,
  },
  {
    name: "Thins",
    pattern: /thins/gi,
  },
  {
    name: "The Rustik Bakery",
    pattern: /the\s+rustik\s+bakery|mini magdalenas|rustik baker/gi,
  },
  {
    name: "Martínez",
    pattern: /martínez/gi,
  },
  {
    name: "Bollycao",
    pattern: /bollycao/gi,
  },
  {
    name: "Bimbo",
    pattern: /bimbo|pantera\s+rosa/gi,
  },
  {
    name: "Little Bites",
    pattern: /little\s+bites/gi,
  },
  {
    name: "La Bella Easo",
    pattern: /la\s+bella\s+easo/gi,
  },
  {
    name: "PopUp",
    pattern: /popup/gi,
  },
  {
    name: "Takis",
    pattern: /takis/gi,
  },
  {
    name: "Tigretón",
    pattern: /tigretón/gi,
  },
  {
    name: "Donettes",
    pattern: /donettes/gi,
  },
  {
    name: "Donuts",
    pattern: /(?<!eidetesa\s(?:[0-9]\s)?(?:mini\s)?)donuts?/gi,
  },
  {
    name: "Weikis",
    pattern: /weikis/gi,
  },
  {
    name: "Qé",
    pattern: /qé!?/gi,
  },
  {
    name: "Family Biscuits",
    pattern: /(?:^fb|family\s+biscuits)/gi,
  },
  {
    name: "Lotus",
    pattern: /lotus(?:\sbiscoff)?/gi,
  },
  {
    name: "Reglero",
    pattern: /reglero/gi,
  },
  {
    name: "Jumbo",
    pattern: /(?<!xl\s)jumbo/gi,
  },
  {
    // I saw a case as 'Santivery'...
    name: "Santiveri",
    pattern: /santiver[iy]/gi,
  },
  {
    name: "Conguitos",
    pattern: /conguitos/gi,
  },
  {
    name: "Florbú",
    pattern: /florb[uú]/gi,
  },
  {
    name: "Moment",
    pattern: /moment(?!\snatural)/gi,
  },
  {
    name: "Colacao",
    pattern: /cola\s?cao/gi,
  },
  {
    name: "Nocilla",
    pattern: /nocilla/gi,
  },
  {
    name: "Paladin",
    pattern: /palad[ií]n/gi,
  },
  {
    name: "Okey",
    pattern: /okey/gi,
  },
  {
    name: "Principe",
    pattern: /pr[ií]ncipe/gi,
  },
  {
    name: "Danish",
    pattern: /danish/gi,
  },
  {
    name: "Highland",
    pattern: /highland/gi,
  },
  {
    name: "Royal Danks",
    pattern: /royal\s+danks/gi,
  },
  {
    name: "Kjeldsens",
    pattern: /kjeldsens/gi,
  },
  {
    name: "Designer tins",
    pattern: /designer\s+tins/gi,
  },
  {
    name: "Classic Brands",
    pattern: /classic\s+brands/gi,
  },
  {
    name: "Saint Aubert",
    pattern: /saint\s+aubert/gi,
  },
  {
    name: "Filet Bleu",
    pattern: /filet\s+bleu/gi,
  },
  {
    name: "Gavottes",
    pattern: /gavottes/gi,
  },
  {
    name: "Grandma Wilds",
    pattern: /grandma\s+w(?:ilds)?/gi,
  },
  {
    name: "Jules Destrooper",
    pattern: /jules\s+destrooper/gi,
  },
  {
    name: "Kambly",
    pattern: /kambly/gi,
  },
  {
    name: "Bolands",
    pattern: /bolands/gi,
  },
  {
    name: "Regal",
    pattern: /(?:\s|^)regal(?:\s|$)/gi,
  },
  {
    name: "Anyi",
    pattern: /anyi/gi,
  },
  {
    name: "Barber",
    pattern: /barber(?:\s|$)/gi,
  },
  {
    name: "La Cañada",
    pattern: /la\s+cañada/gi,
  },
  {
    name: "La Pasion",
    pattern: /la\s+pasion/gi,
  },
  {
    name: "Palique canario",
    pattern: /palique\scanario/gi,
  },
  {
    name: "Presas Ocampo",
    pattern: /presas\socampo/gi,
  },
  {
    name: "Trancao",
    pattern: /(?:tentaci[oó]n|trancao)/gi,
  },
  {
    name: "Vega Norte",
    pattern: /vega\snorte/gi,
  },
  {
    name: "Viña Arese",
    pattern: /viña\sarese/gi,
  },
  {
    name: "Viña Norte",
    pattern: /viña\snorte/gi,
  },
  {
    name: "Las piedras",
    pattern: /las\spiedras/gi,
  },
  {
    name: "Care",
    pattern: /^care\s/gi,
  },
  {
    name: "Bach",
    pattern: /^bach/gi,
  },
  {
    name: "Conde de Caralt",
    pattern: /conde\s(?:de\s)?caralt?/gi,
  },
  {
    name: "Marqués de Griñón",
    pattern: /marqu[eé]s\sde\sgriñ[oó]n/gi,
  },
  {
    name: "Natureo",
    pattern: /natureo/gi,
  },
  {
    name: "Perpetual",
    pattern: /perpetual/gi,
  },
  {
    name: "Rene Barbier",
    pattern: /rene\sbarbier/gi,
  },
  {
    name: "Salmos",
    pattern: /salmos/gi,
  },
  {
    name: "Sangre de Toro",
    pattern: /sangre\nde\storo/gi,
  },
  {
    name: "Algueira",
    pattern: /algueira/gi,
  },
  {
    name: "Alamos",
    pattern: /alamos/gi,
  },
  {
    name: "Burklin",
    pattern: /burklin/gi,
  },
  {
    name: "Catena",
    pattern: /catena/gi,
  },
  {
    name: "Chateau Brejou",
    pattern: /chateau\sbrejou/gi,
  },
  {
    name: "Donnhoff",
    pattern: /donnhoff/gi,
  },
  {
    name: "Les Rabassieres",
    pattern: /les\srabassieres/gi,
  },
  {
    name: "Maestri Cantinieri",
    pattern: /maestri\scantinieri/gi,
  },
  {
    name: "Niepoort",
    pattern: /niepoort/gi,
  },
  {
    name: "The Chocolate Block",
    pattern: /the\s+chocolate\s+block/gi,
  },
  {
    name: "El abuelo",
    pattern: /el\sabuelo/gi,
  },
  {
    name: "El Vínculo",
    pattern: /el\sv[ií]nculo/gi,
  },
  {
    name: "Martúe",
    pattern: /mart[uú]e/gi,
  },
  {
    name: "Matsu",
    pattern: /matsu/gi,
    priority: 2,
  },
  {
    name: "Meque13",
    pattern: /meque13/gi,
  },
  {
    name: "Piqueras",
    pattern: /piqueras/gi,
  },
  {
    name: "Mucho más",
    pattern: /mucho\sm[aá]s/gi,
  },
  {
    name: "Viña Cancel",
    pattern: /viña\scancel/gi,
  },
  {
    name: "Doña Isabella",
    pattern: /doña\sisabella/gi,
  },
  {
    name: "Le Naturel",
    pattern: /le\snaturel/gi,
  },
  {
    name: "Viña Onquiola",
    pattern: /viña\sonquiola/gi,
  },
  {
    name: "409",
    pattern: /409(?:\s|$)(?:autor)?/gi,
  },
  {
    name: "Aalto",
    pattern: /aalto/gi,
  },
  {
    name: "Abadía San Quice",
    pattern: /abad[ií]a\ssan\squice/gi,
  },
  {
    name: "Alión",
    pattern: /ali[oó]n/gi,
  },
  {
    name: "Alonso del Yerro",
    pattern: /alonso\sdel\syerro/gi,
  },
  {
    name: "Altos de Tamarón",
    pattern: /(?:altos\sdel?\s|alt\.)tamar[oó]n/gi,
  },
  {
    name: "Antídoto",
    pattern: /ant[ií]doto/gi,
  },
  {
    name: "Arzuaga",
    pattern: /arzuaga/gi,
  },
  {
    name: "Bardos",
    pattern: /bardos/gi,
  },
  {
    name: "Tierras de Cair",
    pattern: /(?:tierras\sde\s)?cair(?:\s|$)/gi,
  },
  {
    name: "Canta Perdices",
    pattern: /canta\sperdices/gi,
  },
  {
    name: "Carmelo Rodero",
    pattern: /carmelo\srodero/gi,
  },
  {
    name: "Carramimbre",
    pattern: /carramimbre/gi,
  },
  {
    name: "Celeste",
    pattern: /celeste(?!\ssp berner)/gi,
  },
  {
    name: "Cepa 21",
    pattern: /(?:cepa\s21|hito vino tinto|malabrig)/gi,
  },
  {
    name: "Cepa Gavilán",
    pattern: /cepa\sgavil[aá]n/gi,
  },
  {
    name: "Cillar de Silos",
    pattern: /cillar\de\ssilos/gi,
  },
  {
    name: "Condado de Haza",
    pattern: /condado\s(?:de\s)?haza/gi,
  },
  {
    name: "Corimbo",
    pattern: /corimbo/gi,
  },
  {
    name: "Cune",
    pattern: /cune/gi,
  },
  {
    name: "Dehesa de los Canónigos",
    pattern: /dehesa\s(?:de\slos\s)?can[oó]nigos/gi,
  },
  {
    name: "Dominio de Atauta",
    pattern: /dominio\sde\satauta/gi,
  },
  {
    name: "Durón",
    pattern: /dur[oó]n/gi,
  },
  {
    name: "Ederra",
    pattern: /ederra/gi,
  },
  {
    name: "Emilio Moro",
    pattern: /emilio\smoro/gi,
  },
  {
    name: "Erial",
    pattern: /(?:\s|^)erial/gi,
  },
  {
    name: "Etcétera",
    pattern: /etcetera/gi,
  },
  {
    name: "Figuero",
    pattern: /figuero/gi,
  },
  {
    name: "Gazur",
    pattern: /gazur/gi,
  },
  {
    name: "Hacienda Monasterio",
    pattern: /(?:hacienda|h\.)\smonasterio/gi,
  },
  {
    name: "La Cometa",
    pattern: /la\scometa/gi,
  },
  {
    name: "La Planta",
    pattern: /la\splanta/gi,
  },
  {
    name: "Legaris",
    pattern: /legaris/gi,
  },
  {
    name: "Lágrima Negra",
    pattern: /l[aá]grima\snegra/gi,
  },
  {
    name: "Emilio Moro",
    pattern: /(?:Malleolus Valderramiro)/gi,
  },
  {
    name: "Matarromera",
    pattern: /^matarromera/gi,
  },
  {
    name: "Melior de Matarromera",
    pattern: /melior(?:\sde\smatarromera)?/gi,
  },
  {
    name: "Mayor de Castilla",
    pattern: /(?:mayor\sde\s|may\.)castilla/gi,
  },
  {
    name: "Monasterio San Miguel",
    pattern: /monasterio\ssan\smiguel/gi,
  },
  {
    name: "Ocho dos dos",
    pattern: /ocho\sdos\sdos/gi,
  },
  {
    name: "Pago de los Capellanes",
    pattern: /pago\sde\s(?:los\s)?capellanes/gi,
  },
  {
    name: "Pago de Carraovejas",
    pattern: /pago\sde\scarraovejas/gi,
  },
  {
    name: "Pago de Fuentevega",
    pattern: /pago\sde\sfuentevega/gi,
  },
  {
    name: "Parada de Atauta",
    pattern: /parada\sde\satauta/gi,
  },
  {
    name: "Pesquera",
    pattern: /pesquera/gi,
  },
  {
    name: "Portia",
    pattern: /portia/gi,
  },
  {
    name: "Pradorey",
    pattern: /pradorey/gi,
  },
  {
    name: "Protos",
    pattern: /protos/gi,
  },
  {
    name: "Pruno",
    pattern: /pruno/gi,
  },
  {
    name: "Psi",
    pattern: /^psi/gi,
  },
  {
    name: "Rivendel",
    pattern: /rivendel/gi,
  },
  {
    name: "Tomás Postigo",
    pattern: /tom[aá]s\spostigo/gi,
  },
  {
    name: "Vega Sicilia",
    pattern: /vega\ssicilia/gi,
  },
  {
    name: "Venta las Vacas",
    pattern: /venta\slas\svacas/gi,
  },
  {
    name: "Vizcarra",
    pattern: /vizcarra/gi,
  },
  {
    name: "Viña Mayor",
    pattern: /viña\smayor/gi,
  },
  {
    name: "Viña Pedrosa",
    pattern: /viña\spedrosa/gi,
  },
  {
    // This brand is causing problems with the pattern, let's make it more specific
    // - First specific pattern: It should be the first word in the string
    name: "LAN",
    pattern: /^(?:lan(?:\sa mano)?(?:\s|$)|7 metros crianza do rioja)/gi,
  },
  {
    name: "Alcorta",
    pattern: /alcorta/gi,
  },
  {
    name: "Altos Ibéricos",
    pattern: /altos\sib[eé]ricos/gi,
  },
  {
    name: "Amaren",
    pattern: /(?:[aá]ngeles\sde\s)?amaren/gi,
  },
  {
    name: "Azpilicueta",
    pattern: /azpilicueta/gi,
  },
  {
    name: "Baigorri",
    pattern: /baigorri/gi,
  },
  {
    name: "Barón de Ley",
    pattern: /bar[oó]n\sde\sley/gi,
  },
  {
    name: "Barón Hayarza",
    pattern: /bar[oó]n\shayarza/gi,
  },
  {
    name: "Berberana",
    pattern: /berberana/gi,
  },
  {
    name: "Beronia",
    pattern: /beronia/gi,
  },
  {
    name: "Campillo",
    pattern: /campillo/gi,
  },
  {
    name: "Campo Viejo",
    pattern: /campo\sviejo/gi,
  },
  {
    name: "Castillo de Albai",
    pattern: /(?:castillo\sde\s|cast\.)albai/gi,
  },
  {
    name: "Cerro Añón",
    pattern: /cerro\s(?:de\s)?añ[oó]n/gi,
  },
  {
    name: "Conde de Basalu",
    pattern: /conde\sde\sbasalu/gi,
  },
  {
    name: "Contino",
    pattern: /contino/gi,
  },
  {
    name: "Corriente",
    pattern: /corriente/gi,
  },
  {
    name: "Coto de imaz",
    pattern: /coto\s(?:de\s)?imaz/gi,
  },
  {
    name: "El Coto",
    pattern: /(?:el\s)?coto(?:\s|$)(?!imaz)/gi,
  },
  {
    name: "Dinastía Vivanco",
    pattern: /dinast[ií]a\svivanco/gi,
  },
  {
    name: "Faustino Rivero Ulecia",
    pattern: /(?:faustino\s|faust\.)rivero(?:\sulecia)?/gi,
  },
  {
    name: "Faustino",
    pattern: /faustint?o(?!\sVII)/gi,
  },
  {
    name: "Fernández de Pieróla",
    pattern: /fern[aá]ndez\sde\spier[oó]la/gi,
  },
  {
    name: "Glorioso",
    pattern: /glorioso/gi,
  },
  {
    name: "La Bicicleta Voladora",
    pattern: /la\sbicicleta\svoladora/gi,
  },
  {
    name: "La Vicalanda",
    pattern: /la\svicalanda/gi,
  },
  {
    name: "Lagunilla",
    pattern: /lagunilla/gi,
  },
  ...StoreRoomSpreadableBrands,
  {
    name: "Lanzaga",
    pattern: /lanzaga/gi,
  },
  {
    name: "Lindes Remelluri",
    pattern: /(?:lindes\s)?remelluri/gi,
  },
  {
    name: "Luis Cañas",
    pattern: /luis\scañas/gi,
  },
  {
    name: "LZ 12",
    pattern: /lz\s12/gi,
  },
  {
    name: "López de Haro",
    pattern: /l[oó]pez\sde\sharo/gi,
  },
  {
    name: "Marqués Concordia",
    pattern: /marqu[eé]s\sconcordia|marq\.concord/gi,
  },
  {
    name: "Marqués de Cáceres",
    pattern: /(?:marqu[eé]s\s|marq\.)(?:de\s)?c[aá]ceres/gi,
  },
  {
    name: "Marqués de Murrieta",
    pattern: /marqu[eé]s\sde\smurrieta/gi,
  },
  {
    name: "Marqués Riscal",
    pattern: /(?:marqu[eé]s\s|marq\.)riscal/gi,
  },
  {
    name: "Martínez Lacuesta",
    pattern: /mart[ií]nez\slacuesta/gi,
  },
  {
    name: "Mayor de Ondarre",
    pattern: /mayor\sde\sondarre/gi,
  },
  {
    name: "Milflores",
    pattern: /(?<!miel)(?:\s|^)milflores/gi,
  },
  {
    name: "Monte Real",
    pattern: /monte\sreal/gi,
  },
  {
    name: "Montecillo",
    pattern: /montecillo/gi,
  },
  {
    name: "Monólogo",
    pattern: /mon[oó]logo/gi,
  },
  {
    name: "Muga",
    pattern: /(?:(?:torre\s)?muga|prado enea)/gi,
  },
  {
    name: "Murua",
    pattern: /murua/gi,
  },
  {
    name: "Obalo",
    pattern: /obalo/gi,
  },
  {
    name: "Orben",
    pattern: /^orben/gi,
  },
  {
    name: "Orube",
    pattern: /orube/gi,
  },
  {
    name: "Otoñal",
    pattern: /otoñal/gi,
  },
  {
    name: "Paco García",
    pattern: /paco\sgarc[ií]a/gi,
  },
  {
    name: "Pata Negra",
    pattern: /pata\snegra/gi,
  },
  {
    name: "Paternina",
    pattern: /paternina/gi,
  },
  {
    name: "Predicador",
    pattern: /predicador/gi,
  },
  {
    name: "Puerta Vieja",
    pattern: /puerta\svieja/gi,
  },
  {
    name: "Ramón Bilbao",
    pattern: /ram[oó]n\s(?:bilbao|bilbo)/gi,
  },
  {
    name: "Roda",
    pattern: /roda\s/gi,
  },
  {
    name: "Sela",
    pattern: /(?:\s|^)sela/gi,
  },
  {
    name: "Solar Viejo",
    pattern: /solar\sviejo/gi,
  },
  {
    name: "Vallobera",
    pattern: /vallobera/gi,
  },
  {
    name: "Viña Alberdi",
    pattern: /viña\salberdi/gi,
  },
  {
    name: "Viña Albina",
    pattern: /viña\salbina/gi,
  },
  {
    name: "Viña Arana",
    pattern: /viña\sarana/gi,
  },
  {
    name: "Viña Ardanza",
    pattern: /viña\sardanza/gi,
  },
  {
    name: "Viña Hayarza",
    pattern: /viña\shayarza/gi,
  },
  {
    name: "Viña Herminia",
    pattern: /viña\sherminia/gi,
  },
  {
    name: "Viña Izadi",
    pattern: /(?:viña\s)?izadii?/gi,
  },
  {
    name: "Viña Pomal",
    pattern: /viña\spomal/gi,
  },
  {
    name: "Viña Tondonia",
    pattern: /viña\stondonia/gi,
  },
  {
    name: "Viña Albali",
    pattern: /viña\salbali/gi,
  },
  {
    name: "Viñestral",
    pattern: /viñestral/gi,
  },
  {
    name: "Ysios",
    pattern: /ysios/gi,
  },
  {
    name: "Los Molinos",
    pattern: /los\smolinos/gi,
  },
  {
    name: "Señorío de los Llanos",
    pattern: /(?:señor[ií]o\sde\slos\s|señor\.)llanos/gi,
  },
  {
    name: "Abadía Retuerta",
    pattern: /abad[ií]a\sretuerta/gi,
  },
  {
    name: "Alaja",
    pattern: /alaja/gi,
  },
  {
    name: "Audiencia",
    pattern: /audiencia/gi,
  },
  {
    name: "Bajoz",
    pattern: /(?:gran\s)?bajoz/gi,
  },
  {
    name: "Balancines",
    pattern: /balancines/gi,
  },
  {
    name: "Borsao",
    pattern: /borsao/gi,
  },
  {
    name: "Castillo de Liria",
    pattern: /castillo\sde\sliria/gi,
  },
  {
    name: "Castro Ventosa",
    pattern: /castro\sventosa/gi,
  },
  {
    name: "Celsus",
    pattern: /celsus/gi,
  },
  {
    name: "Vía Cenit",
    pattern: /(?:v[ií]a\s)?cenit/gi,
  },
  {
    name: "Colos ancestral",
    pattern: /co?los\sancestral/gi,
  },
  {
    name: "Corazón Loco",
    pattern: /coraz[oó]n\sloco/gi,
  },
  {
    name: "Dehesa Gago",
    pattern: /(?:dehesa\s)?gago/gi,
  },
  {
    name: "Dehesa La Granja",
    pattern: /dehesa\sla\sgranja/gi,
  },
  {
    name: "Demuerte",
    pattern: /demuerte/gi,
  },
  {
    name: "Domino de Valdepusa",
    pattern: /domino\sde\svaldepusa/gi,
  },
  {
    name: "Don Ramón",
    pattern: /don\sram[oó]n/gi,
  },
  {
    name: "Enrique Mendoza",
    pattern: /(?:enrique|e.)\smendon?za/gi,
  },
  {
    name: "Enate",
    pattern: /enate/gi,
  },
  {
    name: "Finca Terrerazo",
    pattern: /finca\sterrerazo/gi,
  },
  {
    name: "Gaba Do XiL",
    pattern: /gaba\sdo\sxil/gi,
  },
  {
    name: "La Garnacha Salvaje del Moncayo",
    pattern: /(?:la\s)?garnacha\ssalvaje\sdel\smoncayo|gar\.salvaje/gi,
  },
  {
    name: "Habla de la Tierra",
    pattern: /habla\sde\sla\stierra/gi,
  },
  {
    name: "Habla del Silencio",
    pattern: /habla\sdel\ssilencio/gi,
  },
  {
    name: "Honoro",
    pattern: /honoro/gi,
  },
  {
    name: "Huno",
    pattern: /huno/gi,
  },
  {
    name: "Infiltrado",
    pattern: /infiltrado/gi,
  },
  {
    name: "Juan Gil",
    pattern: /juan\sgil/gi,
  },
  {
    name: "Lunático",
    pattern: /lun[aá]tico/gi,
  },
  {
    name: "Mala Vida",
    pattern: /mala\svida/gi,
  },
  {
    name: "Mano a Mano",
    pattern: /mano\s(?:a\s)?mano/gi,
  },
  {
    name: "Marqués de Toro",
    pattern: /marqu[eé]s\sde\storo/gi,
  },
  {
    name: "Mas de Leda",
    pattern: /mas\sde\sleda/gi,
  },
  {
    name: "Mestizaje",
    pattern: /mestizaje/gi,
  },
  {
    name: "Murviedro",
    pattern: /murviedro/gi,
  },
  {
    name: "Nº Zero",
    pattern: /n[ºo] zero/gi,
  },
  {
    name: "Oloroso Alburejo",
    pattern: /oloroso\salburejo/gi,
  },
  {
    name: "Peñamonte",
    pattern: /peñamonte/gi,
  },
  {
    name: "Pintia",
    pattern: /pintia/gi,
  },
  {
    name: "Pétalos del Bierzo",
    pattern: /p[eé]talos\sdel\sbierzo/gi,
  },
  {
    name: "Quercus",
    pattern: /quercus/gi,
  },
  {
    name: "Quota 29",
    pattern: /quota\s29/gi,
  },
  {
    name: "Scanavino",
    pattern: /scanavino/gi,
  },
  {
    name: "Solaz",
    pattern: /solaz/gi,
  },
  {
    name: "Ultrei",
    pattern: /ultrei/gi,
  },
  {
    name: "Valle García",
    pattern: /valle\sgarc[ií]a/gi,
  },
  {
    name: "Valpincia",
    pattern: /valpincia/gi,
  },
  {
    name: "Venta la Ossa",
    pattern: /venta\sla\sossa/gi,
  },
  {
    name: "Viña de Moya",
    pattern: /viña\sde\smoya/gi,
  },
  {
    name: "Yllera",
    pattern: /yllera/gi,
  },
  {
    name: "Álvarez de toledo",
    pattern: /[aá]lvarez\sde\stoledo/gi,
  },
];

export default StoreRoom;
