import { TBrand } from "../../types/brand";
import Categories from "../category/category";
import BabyBrands from "./brand-categories/baby";
import Beauty from "./brand-categories/beauty";
import Drinks from "./brand-categories/drinks";
import GeneralBrands from "./brand-categories/general";
import PetsBrands from "./brand-categories/pets";
import PreparedBrands from "./brand-categories/prepared";
import StoreRoom from "./brand-categories/storeroom/storeroom";

/**
 * Array with the possibles brands with their patterns
 * - Careful with the patterns, we need to considerate human errors on the store we consume
 */
const BRANDS: TBrand[] = [
  {
    name: "5 Elementos",
    pattern: /5 elementos/gi,
  },
  {
    name: "Abril",
    pattern: /abril |abrilsol|abrisol/gi,
  },
  {
    name: "Koipesol Asua",
    pattern: /koipe|koipesol|koipesol asua/gi,
  },
  {
    name: "Carbonell",
    pattern: /carbonell/gi,
  },
  {
    name: "Castillo de Canena",
    pattern: /castillo de canena/gi,
  },
  {
    name: "Coosur",
    pattern: /coosur/gi,
  },
  {
    name: "Egregio",
    pattern: /egregio/gi,
  },
  {
    name: "HappyDay",
    pattern: /happyday/gi,
  },
  {
    name: "Hojiblanca",
    pattern: /(?:maestros de\s)?hojiblanca/gi,
  },
  {
    name: "La Chinata",
    pattern: /la chinata/gi,
  },
  {
    name: "La Española",
    pattern: /la española/gi,
  },
  {
    name: "La Masía",
    pattern: /la mas[i|í]a|masiasol/gi,
    onlyCategory: Categories.Aceite,
  },
  {
    name: "Masarah",
    pattern: /masarah/gi,
  },
  {
    name: "Molino de la arsenia",
    pattern: /molino de la arsenia/gi,
  },
  {
    name: "Oleoestepa",
    pattern: /oleoestepa/gi,
  },
  {
    name: "Oro Bailén",
    pattern: /oro bail[e|é]n/gi,
  },
  {
    name: "Teguerey",
    pattern: /teguerey/gi,
  },
  {
    name: "Ybarra",
    pattern: /ybarra/gi,
  },
  {
    name: "Hacendado",
    pattern: /hacendado/gi,
  },
  {
    name: "Casa Juncal",
    pattern: /casa juncal/gi,
  },
  {
    name: "Antonio",
    pattern: /antonio/gi,
  },
  {
    name: "Iliada",
    pattern: /iliada/gi,
  },
  {
    name: "La explanada",
    pattern: /la explanada/gi,
  },
  {
    name: "Antequera",
    pattern: /antequera/gi,
  },
  {
    name: "Kalios",
    pattern: /kalios/gi,
  },
  {
    name: "La Cala",
    pattern: /la cala/gi,
  },
  {
    name: "After Eight",
    pattern: /after eight/gi,
  },
  {
    name: "Ferrero Rocher",
    pattern: /ferrero( rocher)?/gi,
    onlyCategory: Categories.Bombon,
  },
  {
    name: "Abedul",
    pattern: /abedul/gi,
  },
  {
    name: "Amagoldi",
    pattern: /amagoldi/gi,
  },
  {
    name: "Carmencita",
    pattern: /carmencita/gi,
  },
  {
    name: "Comeztier",
    pattern: /comeztier/gi,
  },
  {
    name: "Dulglas",
    pattern: /dulglas/gi,
  },
  {
    name: "Dulzán",
    pattern: /dulz[aá]n/gi,
  },
  {
    name: "Edulcán",
    pattern: /edulcán/gi,
  },
  {
    name: "Escogido",
    pattern: /escogido/gi,
  },
  {
    name: "Dulzán",
    pattern: /dulzán/gi,
  },
  {
    name: "Dulzán",
    pattern: /dulzán/gi,
  },
  {
    name: "Natreen",
    pattern: /natreen/gi,
  },
  {
    name: "Ortega",
    pattern: /ortega/gi,
  },
  {
    name: "Idc institute",
    pattern: /idc( institute)?/gi,
  },
  {
    name: "Garnier",
    pattern: /garnier/gi,
  },
  {
    name: "Ejove",
    pattern: /ejove/gi,
  },
  {
    name: "Diadermine",
    pattern: /diadermine/gi,
    onlyCategory: Categories.Higiene,
  },
  {
    name: "Bella",
    pattern: /bella/gi,
    onlyCategory: Categories.Higiene,
  },
  {
    name: "Babaria",
    pattern: /babaria/gi,
  },
  {
    name: "Ponette",
    pattern: /ponette/gi,
  },
  {
    name: "Beter",
    pattern: /beter/gi,
  },
  {
    name: "Nivea",
    pattern: /nivea/gi,
  },
  {
    name: "L'Oreal",
    pattern: /l['\s]?Or[eé]al/gi,
  },
  {
    name: "Elnett",
    pattern: /(?:l['\s]?Or[eé]al\s)?elnett/gi,
  },
  {
    name: "Indigo",
    pattern: /indigo/gi,
  },
  {
    name: "Tabaiba",
    pattern: /tabaiba/gi,
  },
  {
    name: "Bel",
    pattern: /^bel/gi,
  },
  {
    name: "Johnson's",
    pattern: /johnson's/gi,
  },
  {
    name: "Clean&Clear",
    pattern: /clean&clear/gi,
  },
  {
    name: "Men expert",
    pattern: /men exp/gi,
  },
  {
    name: "Naturafemme",
    pattern: /naturafemme/gi,
  },
  {
    name: "Rimmel",
    pattern: /rimmel/gi,
  },
  {
    name: "Fuente El Pino",
    pattern: /fuente el pino/gi,
  },
  {
    name: "Florette",
    pattern: /florette/gi,
  },
  {
    name: "La Verja",
    pattern: /la verja/gi,
  },
  {
    name: "Danone",
    pattern: /danone/gi,
  },
  {
    name: "Nesquik",
    pattern: /nesquik/gi,
  },
  {
    name: "Nesquik",
    pattern: /nesquik/gi,
  },
  {
    name: "Nesquik",
    pattern: /nesquik/gi,
  },
  {
    name: "Nesquik",
    pattern: /nesquik/gi,
  },
  {
    name: "Yogolino",
    pattern: /yogolino/gi,
  },
  {
    name: "Go-Lácteo",
    pattern: /go-?l[aá]cteo/gi,
  },
  {
    name: "Sweets",
    pattern: /sweets/gi,
  },
  {
    name: "Chupa Chups",
    pattern: /chupa chups/gi,
    onlyCategory: Categories.Caramelos,
  },
  {
    name: "Fiesta",
    pattern: /fiesta/gi,
  },
  {
    name: "Haribo",
    pattern: /haribo/gi,
  },
  {
    name: "Skittles",
    pattern: /skittles/gi,
  },
  {
    name: "License",
    pattern: /license/gi,
  },
  {
    name: "Mamba",
    pattern: /mamba/gi,
  },
  {
    name: "Melody",
    pattern: /melody/gi,
  },
  {
    name: "Mentolín",
    pattern: /mentolín/gi,
  },
  {
    name: "Mentos",
    pattern: /^mentos/gi,
  },
  {
    name: "Miguelañez",
    pattern: /miguelañez/gi,
  },
  {
    name: "Pictolin",
    pattern: /pictolin/gi,
  },
  {
    name: "Pikotas",
    pattern: /pikotas/gi,
  },
  {
    name: "Rosyten",
    pattern: /rosyten/gi,
  },
  {
    name: "Smint",
    pattern: /smint/gi,
  },
  {
    name: "Solano",
    pattern: /solano/gi,
  },
  {
    name: "Storck",
    pattern: /storck/gi,
  },
  {
    name: "Tirma",
    pattern: /tirma/gi,
  },
  {
    name: "Verquin",
    pattern: /verquin/gi,
  },
  {
    name: "Werthers",
    pattern: /werthers/gi,
  },
  // {
  //   name: "Zero",
  //   pattern: /zero/gi,
  // },
  {
    name: "Five",
    pattern: /five/gi,
  },
  {
    name: "King Regal",
    pattern: /king reg?al/gi,
  },
  {
    name: "Orbit",
    pattern: /orbit/gi,
  },
  {
    name: "Trident",
    pattern: /trident/gi,
  },
  {
    name: "Gardiners",
    pattern: /gardiners/gi,
  },
  {
    name: "Wonka",
    pattern: /wonka/gi,
  },
  {
    name: "Cheebies",
    pattern: /cheebies/gi,
  },
  {
    name: "Disney",
    pattern: /disney/gi,
  },
  {
    name: "Fini",
    pattern: /^fini/gi,
  },
  {
    name: "Hamlet",
    pattern: /hamlet/gi,
  },
  {
    name: "Kavy",
    pattern: /kavy/gi,
  },
  {
    name: "Midel",
    pattern: /midel/gi,
  },
  {
    name: "Napoleón",
    pattern: /napole[oó]n/gi,
  },
  {
    name: "Polaretti",
    pattern: /polaretti/gi,
  },
  {
    name: "Simon Coll",
    pattern: /simon coll/gi,
  },
  {
    name: "Snackitos",
    pattern: /snackitos/gi,
  },
  {
    name: "Flexi",
    pattern: /flexi/gi,
  },
  {
    name: "LM",
    pattern: /^lm/gi,
  },
  {
    name: "Pedigree",
    pattern: /pedigree/gi,
  },
  {
    name: "Orange",
    pattern: /orange/gi,
  },
  {
    name: "Cesar",
    pattern: /^c[eé]sar/gi,
  },
  {
    name: "Beyond",
    pattern: /beyond/gi,
  },
  {
    name: "Última",
    pattern: /[uú]ltima/gi,
  },
  {
    name: "Amigo",
    pattern: /amigo/gi,
  },
  {
    name: "Bon Menu",
    pattern: /bon menu/gi,
  },
  {
    name: "Frolic",
    pattern: /frolic/gi,
  },
  {
    name: "Sandimas",
    pattern: /sandimas/gi,
  },
  {
    name: "Tasty",
    pattern: /tasty/gi,
  },
  {
    name: "Adventuros",
    pattern: /adventuros/gi,
  },
  {
    name: "Sheba Pouch",
    pattern: /sheba pouch/gi,
  },
  {
    name: "Tidy Cats",
    pattern: /tidy\scats/gi,
  },
  {
    name: "Dentalife",
    pattern: /dentalife/gi,
  },
  {
    name: "Listo para Comer",
    pattern: /listo\spara\scomer/gi,
  },
  {
    name: "Dr. Oetker",
    pattern: /dr\.?\s?oetker/gi,
  },
  {
    name: "Golden",
    pattern: /golden/gi,
  },
  {
    name: "Márdel",
    pattern: /m[aá]rdel/gi,
  },
  {
    name: "Tate & Llyle",
    pattern: /tate\s?&\s?llyle/gi,
  },
  {
    name: "Vahiné",
    pattern: /vahin[eé]/gi,
  },
  {
    name: "Top Dessert",
    pattern: /top\s?dessert/gi,
  },
  {
    name: "Pearce Duff",
    pattern: /pearce\s?duff/gi,
  },
  {
    name: "La Irlandesa",
    pattern: /la\s+irlandesa/gi,
  },
  {
    name: "Citterio",
    pattern: /citterio/gi,
  },
  {
    name: "Harmony",
    pattern: /harmony/gi,
  },
  {
    name: "Levanova",
    pattern: /levanova/gi,
  },
  {
    name: "Mississippi belle",
    pattern: /mississippi\sbelle/gi,
  },
  {
    name: "Taste of Nature",
    pattern: /taste\sof\snature/gi,
  },
  {
    name: "Andunatura",
    pattern: /andunatura/gi,
  },
  {
    name: "Yukibio",
    pattern: /y[uo]k[iy]bio/gi,
  },
  {
    name: "Almamel",
    pattern: /almamel/gi,
  },
  {
    name: "Bonamel",
    pattern: /bonamel/gi,
  },
  {
    name: "Cubaba",
    pattern: /cubaba/gi,
  },
  {
    name: "Monki",
    pattern: /monki/gi,
  },
  {
    name: "San Telmo",
    pattern: /san\stelmo/gi,
  },
  {
    name: "Whole Earth",
    pattern: /whole(?:\searth)?/gi,
  },
  {
    name: "Allos",
    pattern: /allos/gi,
  },
  {
    name: "Heura",
    pattern: /heura/gi,
  },
  {
    name: "Natruly",
    pattern: /natruly/gi,
  },
  {
    name: "Natura Nuova",
    pattern: /natura\snueva/gi,
  },
  {
    name: "Medina",
    pattern: /medina/gi,
  },
  {
    name: "Alce Nero",
    pattern: /alce\snero/gi,
  },
  {
    name: "Carolina",
    pattern: /carolina/gi,
  },
  {
    name: "Germinal",
    pattern: /germinal/gi,
  },
  {
    name: "Sottolestelle",
    pattern: /sottolest(?:elle)?/gi,
  },
  {
    name: "La Piña",
    pattern: /la\spiña/gi,
  },
  {
    name: "Maizena",
    pattern: /maizena/gi,
  },
  {
    name: "Calvo",
    pattern: /calvo/gi,
  },
  {
    name: "Brioche Pasquier",
    pattern: /brioche\spasquier/gi,
  },
  {
    name: "Recondo",
    pattern: /recondo/gi,
  },
  {
    name: "Jardin Bio",
    pattern: /(?:bio\sjard[ií]n|Jardin Bio)/gi,
  },
  {
    name: "Iris",
    pattern: /iris/gi,
  },
  {
    name: "King Soba",
    pattern: /king\ssoba/gi,
  },
  {
    name: "La Isleña",
    pattern: /la\sisleña/gi,
  },
  {
    name: "SOS",
    pattern: /sos/gi,
  },
  {
    name: "Blue Chameleon",
    pattern: /blue\schameleon/gi,
  },
  {
    name: "Burn",
    pattern: /burn/gi,
  },
  {
    name: "Dum",
    pattern: /dum/gi,
  },
  {
    name: "Monster",
    pattern: /monster/gi,
  },
  {
    name: "Nocco",
    pattern: /nocco/gi,
  },
  {
    name: "Red Bull",
    pattern: /red\sbull/gi,
  },
  {
    // I saw a case as 'Reing'...
    name: "Reign",
    pattern: /rei(?:gn|ng)/gi,
  },
  {
    name: "V",
    pattern: /^v\s/gi,
  },
  {
    name: "Aquarius",
    pattern: /aquarius/gi,
  },
  {
    name: "Gatorade",
    pattern: /gatorade/gi,
  },
  {
    name: "Mano de santo",
    pattern: /mano\ssanto/gi,
  },
  {
    name: "Powerade",
    pattern: /powerade/gi,
  },
  {
    name: "Fuente Primavera",
    pattern: /fuente\s+primavera/gi,
  },
  {
    name: "Font Natura",
    pattern: /font\s+natura/gi,
  },
  {
    name: "San Benedetto",
    pattern: /san\s+benedetto/gi,
  },
  {
    name: "Fuencisla",
    pattern: /fuencisla/gi,
  },
  {
    name: "Enjoy",
    pattern: /enjoy/gi,
  },
  {
    name: "Upgrade",
    pattern: /upgrade/gi,
  },
  {
    name: "Quizza Happy",
    pattern: /quizza\s+happy/gi,
  },
  {
    name: "Schweppes",
    pattern: /schweppes/gi,
  },
  {
    name: "La Casera",
    pattern: /la\s+casera/gi,
  },
  {
    name: "TriNa",
    pattern: /trina/gi,
  },
  {
    name: "Sunny Delight",
    pattern: /sunny\s+delight/gi,
  },
  {
    name: "Coca Cola",
    pattern: /coca\s+cola/gi,
  },
  {
    name: "Green Cola",
    pattern: /green\s+cola/gi,
  },
  {
    name: "Pepsi",
    pattern: /pepsi(?:\smax)?/gi,
  },
  {
    name: "Clipper",
    pattern: /clipper/gi,
  },
  {
    name: "7Up",
    pattern: /(?:7|seven)\s?up/gi,
  },
  {
    name: "Sprite",
    pattern: /sprite/gi,
  },
  {
    name: "Bitter Kas",
    pattern: /(?:bitter\s)?kas/gi,
  },
  {
    name: "Limón&Nada",
    pattern: /lim[oó]n\s?&\s?nada/gi,
  },
  {
    name: "Appletiser",
    pattern: /appletiser/gi,
  },
  {
    name: "Capri Sun",
    pattern: /capri\s?sun/gi,
  },
  {
    name: "Champín",
    pattern: /champ[ií]n/gi,
  },
  {
    name: "So",
    pattern: /^so\s/gi,
  },
  {
    name: "Vitamin Well",
    pattern: /vitamin\swell/gi,
  },
  {
    name: "Fuze",
    pattern: /fuze/gi,
  },
  {
    name: "Nestea",
    pattern: /nestea/gi,
  },
  {
    name: "1724",
    pattern: /1724/gi,
  },
  {
    name: "Fever Tree",
    pattern: /fever\stree/gi,
  },
  {
    name: "Nordic Mist",
    pattern: /nordic\smist/gi,
  },
  {
    name: "Royal Bliss",
    pattern: /royal\sbliss/gi,
  },
  {
    name: "El Pozo",
    pattern: /el\s?pozo/gi,
  },
  {
    name: "Westfalia",
    pattern: /(?:casa\s)?westfalia/gi,
  },
  {
    name: "Casa Tarradellas",
    pattern: /casa\starradellas/gi,
  },
  {
    name: "Cuyar Jabugo",
    pattern: /cuyar\sjabugo/gi,
  },
  {
    name: "Espina",
    pattern: /espina/gi,
  },
  {
    name: "Famila",
    pattern: /famila/gi,
  },
  {
    name: "Legado",
    pattern: /legado/gi,
  },
  {
    name: "Montesano",
    pattern: /montesano/gi,
  },
  {
    name: "Sierra Jerez",
    pattern: /sierra\s+jerez/gi,
  },
  {
    name: "Monte Roble",
    pattern: /monte\s+roble/gi,
  },
  {
    name: "Sierra de Sevilla",
    pattern: /sierra\s+de\s+sevilla/gi,
  },
  {
    name: "Essencia",
    pattern: /essencia/gi,
  },
  {
    name: "Sombras del Encinar",
    pattern: /sombras\s+del\s+encinar/gi,
  },
  {
    name: "Xtradibéricus",
    pattern: /xtradibéricus/gi,
  },
  {
    name: "Argal",
    pattern: /argal/gi,
  },
  {
    name: "Boadas",
    pattern: /boadas/gi,
  },
  {
    name: "Embuastur",
    pattern: /embuastur/gi,
  },
  {
    name: "Illera",
    pattern: /illera/gi,
  },
  {
    name: "Jucarne",
    pattern: /jucarne/gi,
  },
  {
    name: "Los Nueces",
    pattern: /los\s+nueces/gi,
  },
  {
    name: "Pavofrío",
    pattern: /pavofr[ií]o/gi,
  },
  {
    name: "Finíssimas",
    pattern: /fin[ií]ssimas/gi,
  },
  {
    name: "Cuida-T +",
    pattern: /cuida-t\s?\+/gi,
  },
  {
    name: "Vegalia",
    pattern: /vegalia/gi,
  },
  {
    name: "Snack'in",
    pattern: /snack'in/gi,
  },
  {
    name: "Campofrío",
    pattern: /campofr[ií]o/gi,
  },
  {
    name: "Peña Cruz",
    pattern: /peña\scruz/gi,
  },
  {
    name: "Revilla",
    pattern: /revilla/gi,
  },
  {
    name: "Tello",
    pattern: /tello/gi,
  },
  {
    name: "Sánchez Montero",
    pattern: /sánchez\s+montero/gi,
  },
  {
    name: "Pamplonica",
    pattern: /pamplonica/gi,
  },
  {
    name: "Mina",
    pattern: /mina/gi,
  },
  {
    name: "Vicente López",
    pattern: /vicente\s+lópez/gi,
  },
  {
    name: "Valle",
    pattern: /valle/gi,
  },
  {
    name: "Frial",
    pattern: /frial/gi,
  },
  {
    name: "Villar",
    pattern: /villar/gi,
  },
  {
    name: "Álvarez",
    pattern: /[áa]lvarez/gi,
  },
  {
    name: "Halal",
    pattern: /halal/gi,
  },
  {
    name: "Maybe",
    pattern: /maybe/gi,
  },
  {
    name: "Noel",
    pattern: /noel/gi,
  },
  {
    name: "Pazo de Coruxo",
    pattern: /pazo\s+de\scoruxo/gi,
  },
  {
    name: "Palacios",
    pattern: /palacios/gi,
  },
  {
    name: "Floristán",
    pattern: /florist[aá]n/gi,
  },
  {
    name: "San Martín",
    pattern: /san\s+martín/gi,
  },
  {
    name: "Fuentetaja",
    pattern: /fuentetaja/gi,
  },
  {
    name: "Naysa",
    pattern: /naysa/gi,
  },
  {
    name: "Pastry Factory",
    pattern: /pastry\s+factory/gi,
  },
  {
    name: "Rhokett",
    pattern: /rhokett/gi,
  },
  {
    name: "La Encina",
    pattern: /la\s+encina/gi,
  },
  {
    name: "Monte Nevado",
    pattern: /monte\s+nevado/gi,
  },
  {
    name: "Serrano",
    pattern: /(?:serrano|delisandwich)/gi,
  },
  {
    name: "El calero",
    pattern: /el\s+calero/gi,
  },
  {
    name: "La Carloteña",
    pattern: /la\s+carloteña/gi,
  },
  {
    name: "Placeres Tradición",
    pattern: /placeres\stradici[oó]n/gi,
  },
  {
    name: "Verday",
    pattern: /verday/gi,
  },
  {
    name: "Pirineus",
    pattern: /pirineus/gi,
  },
  {
    name: "Arroyo",
    pattern: /arroyo/gi,
  },
  {
    name: "Aire Sano",
    pattern: /aire\s?sano/gi,
  },
  {
    name: "Altos Iberia",
    pattern: /altos\siberia/gi,
  },
  {
    name: "Industrias Reunidas",
    pattern: /Flor Sierra de Jabugo/gi,
  },
  {
    name: "Juan Luna",
    pattern: /juan\sluna/gi,
  },
  {
    name: "Manuel de Montejo",
    pattern: /(?:manuel\sde\smontejo|m\.montejo)/gi,
  },
  {
    name: "Sánchez Alcaraz",
    pattern: /s[aá]nchez\s+alcaraz/gi,
  },
  {
    name: "Aoste",
    pattern: /aoste/gi,
  },
  {
    name: "El Zagal",
    pattern: /el\s+zagal/gi,
  },
  {
    name: "La Danesa",
    pattern: /la\sdanesa/gi,
  },
  {
    name: "Solá",
    pattern: /sol[aá]/gi,
  },
  {
    name: "Baró",
    pattern: /bar[oó]/gi,
  },
  {
    name: "Max Zander",
    pattern: /max\s+zander/gi,
  },
  {
    name: "Oscar mayer",
    pattern: /oscar\smayer/gi,
  },
  {
    name: "Wurst Haus",
    pattern: /wurst\shaus/gi,
  },
  ...GeneralBrands,
  ...Beauty,
  ...Drinks,
  ...StoreRoom,
  ...BabyBrands,
  ...PetsBrands,
  ...PreparedBrands,
];

const identifyBrand = (productName: string) => {
  return BRANDS.find((brandName) => {
    const regex = new RegExp(brandName.pattern);
    return regex.exec(productName);
  });
};

export { identifyBrand };
