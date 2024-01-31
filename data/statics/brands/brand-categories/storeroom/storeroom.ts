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
    pattern: /lay'?s/gi,
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
    pattern: /risi|mios/gi,
  },
  {
    name: "Soldanza",
    pattern: /soldanza/gi,
  },
  {
    name: "Antonio",
    pattern: /antonio/gi,
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
    pattern: /eagle/gi,
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
    name: "Takis",
    pattern: /takis/gi,
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
    pattern: /(?:lindt )?Lindor(?: lindt)?/gi,
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
    pattern: /castillo/gi,
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
    pattern: /el pastor/gi,
  },
  {
    name: "La Jaira",
    pattern: /la jaira/gi,
  },
  {
    name: "Portillo",
    pattern: /portillo/gi,
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
    pattern: /flor de esgueva/gi,
  },
  {
    name: "García Baquero",
    pattern: /garc[íi]a baquero/gi,
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
    pattern: /distribuidor [de ]?quesos canarios/gi,
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
    pattern: /parti/gi,
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
    pattern: /de\sjuan/gi,
  },
  {
    name: "Munchos",
    pattern: /munchos/gi,
  },
  {
    name: "Estrella",
    pattern: /estrella/gi,
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
    pattern: /filipinos/gi,
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
    pattern: /coral/gi,
  },
  {
    name: "Tosta Rica",
    pattern: /tosta\s?rica/gi,
  },
  {
    name: "Napolitanas",
    pattern: /napolitanas/gi,
  },
  {
    name: "Flakes",
    pattern: /flakes?/gi,
  },
  {
    name: "Krit",
    pattern: /krit/gi,
  },
  {
    name: "Bocaditos",
    pattern: /bocaditos/gi,
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
    pattern: /cu[eé]tara\s.*(?:galletas?|barquillos?)/gi,
  },
  {
    name: "Fabián Martín",
    pattern: /fabi[aá]n\s+mart[ií]n/gi,
  },
  {
    name: "Gullón",
    pattern: /(?:digestive|gull[oó]n)/gi,
  },
  {
    name: "Merci",
    pattern: /merci/gi,
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
    pattern: /mels/gi,
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
    pattern: /lacta/gi,
  },
  {
    name: "Lu",
    pattern: /^lu/gi,
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
    pattern: /milka/gi,
  },
  {
    name: "Oreo",
    pattern: /oreo/gi,
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
    pattern: /royal/gi,
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
    pattern: /tang/gi,
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
    pattern: /tuc/gi,
  },
  {
    name: "Wheat Thins",
    pattern: /wheat\s+thins/gi,
  },
  {
    name: "Pirulín",
    pattern: /pirul[ií]n/gi,
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
    pattern: /rita/gi,
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
    pattern: /the\s+rustik\s+bakery/gi,
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
    name: "Pantera Rosa",
    pattern: /pantera\s+rosa/gi,
  },
  {
    name: "Bimbo",
    pattern: /bimbo/gi,
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
    pattern: /donuts/gi,
  },
  {
    name: "Weikis",
    pattern: /weikis/gi,
  },
  {
    name: "Qé",
    pattern: /qé/gi,
  },
  {
    name: "Family Biscuits",
    pattern: /(?:^fb|family\s+biscuits)/gi,
  },
  {
    name: "Lotus",
    pattern: /lotus/gi,
  },
  {
    name: "Reglero",
    pattern: /reglero/gi,
  },
  {
    name: "Jumbo",
    pattern: /jumbo/gi,
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
    pattern: /moment/gi,
  },
  {
    name: "Colacao",
    pattern: /colacao/gi,
  },
  {
    name: "Nocilla",
    pattern: /nocilla/gi,
  },
  {
    name: "Paladin",
    pattern: /paladin/gi,
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
    pattern: /regal/gi,
  },
  {
    name: "Anyi",
    pattern: /anyi/gi,
  },
  {
    name: "Barber",
    pattern: /barber/gi,
  },
  {
    name: "Prima",
    pattern: /prima/gi,
  },
  {
    name: "La Cañada",
    pattern: /la\s+cañada/gi,
  },
  {
    name: "La Pasion",
    pattern: /la\s+pasion/gi,
  },
  ...StoreRoomSpreadableBrands,
];

export default StoreRoom;
