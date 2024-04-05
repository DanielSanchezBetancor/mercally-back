import { logIntoFile } from "../../../helpers/monitor";
import { TBrand } from "../../types/brand";
import Categories from "../category/category";
import BabyBrands from "./brand-categories/baby";
import Beauty from "./brand-categories/beauty";
import Drinks from "./brand-categories/drinks";
import GeneralBrands from "./brand-categories/general";
import PetsBrands from "./brand-categories/pets";
import PreparedBrands from "./brand-categories/prepared";
import StoreRoom from "./brand-categories/storeroom/storeroom";
import PerfumBrands from "./brand-categories/perfums";

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
		pattern: /abril(?:\s|$)(?!lenor)|abrilsol|abrisol/gi,
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
		pattern: /(?<!La Española aceite aove\s)(?:maestros de\s)?hojiblanca/gi,
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
		pattern: /hacendado|(?:furious|tropic)\senergy\sdrink/gi,
	},
	{
		name: "Casa Juncal",
		pattern: /casa juncal/gi,
	},
	{
		name: "Antonio",
		pattern: /antonio(?<!\sy ricardo)/gi,
	},
	{
		name: "Iliada",
		pattern: /iliada/gi,
	},
	{
		name: "La explanada",
		pattern: /la Explanada/gi,
	},
	{
		name: "Antequera",
		pattern: /^antequera/gi,
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
		pattern: /ferrero( rocher)?(?:\s|$)(?!bombon chocolate kinder)/gi,
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
		pattern: /carmencita|(?<!vahine\s)aroma vainilla/gi,
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
		pattern: /(?:\s|^)dul[zc][aá]n|sirope de agave/gi,
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
		// This brand is causes problems with the regex, let's make it more specific
		// - First specificity: The word needs an space after finishing
		name: "Bella",
		pattern: /^bella\s/gi,
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
		pattern: /l['´\s]?Or[eé]al/gi,
	},
	{
		name: "Elnett",
		pattern: /(?:l['\s]?Or[eé]al\s)?elnett/gi,
	},
	{
		name: "Indigo",
		pattern: /(?<!nike|spray)(?:\s|^)indigo(?<!desodorante)/gi,
	},
	{
		name: "Tabaiba",
		pattern: /tabaiba/gi,
	},
	{
		name: "Bel",
		pattern: /^bel\s/gi,
	},
	{
		name: "Johnson's",
		pattern: /johnson['\s]?s?(?:\sbaby)?/gi,
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
		pattern: /chupa[\s-]?chups/gi,
		onlyCategory: Categories.Caramelos,
	},
	{
		name: "Fiesta",
		pattern: /^fiesta/gi,
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
		pattern: /(?<!palo)(?:\s|^)melody/gi,
	},
	{
		name: "Mentolín",
		pattern: /mentol[ií]n/gi,
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
		name: "Cheebies",
		pattern: /cheebies/gi,
	},
	{
		// This is the only pattern that will respect the case
		name: "Disney",
		pattern: /Disney|rey león/g,
	},
	{
		name: "Fini",
		pattern: /^fini\s/gi,
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
		pattern: /flexi\s/gi,
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
		pattern: /(?<!royal\s)orange/gi,
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
		pattern: /[uú]ltima\s/gi,
	},
	{
		name: "Amigo",
		pattern: /amigo(?:\s|$)/gi,
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
		pattern: /(?<!plancha\s)tasty/gi,
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
		// This brand is causes problems with the regex, let's make it more specific
		// - First specificity: The word needs to be the first word
		name: "Golden",
		pattern: /^golden/gi,
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
		pattern: /harmony(?:\s|$)(?!naturmundo)/gi,
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
		pattern: /^whole(?:\searth)?/gi,
	},
	{
		name: "Allos",
		pattern: /^allos/gi,
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
		pattern: /natura\snuova/gi,
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
		pattern: /(?<!arco\s?)iris(?:\s|$)/gi,
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
		pattern: /(?:\s|^)sos(?:\s|$)/gi,
	},
	{
		name: "Blue Chameleon",
		pattern: /blue\schameleon/gi,
	},
	{
		name: "Burn",
		pattern: /burn(?:\s|$)/gi,
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
		// This brand is causes problems with the regex, let's make it more specific
		// - First specificity: The word needs an space after finishing
		// - Second specificity: The word needs to be the first word
		// - Third specificity: Still too generic, adding the word 'energy'
		name: "V",
		pattern: /^v\s.*(?:energ).*/gi,
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
		pattern: /mano\sde\ssanto/gi,
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
		pattern: /(?:\s|^)enjoy(?:\s|$)(?!naturmundo)/gi,
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
		pattern: /(?!mexicana|croquetas|sobrasada|salsa)(?:la)?(?:\s|^)casera(?:\s|$)/gi,
	},
	{
		name: "TriNa",
		pattern: /^trina/gi,
	},
	{
		name: "Sunny Delight",
		pattern: /sunny\s+delig(?:ht|th)/gi,
	},
	{
		name: "Coca Cola",
		pattern: /coca[\s-]cola/gi,
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
		pattern: /(?:bitter)?(?:\s|^)kas(?:\s|$)/gi,
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
		pattern: /^(?:casa\s)?westfalia/gi,
	},
	{
		name: "Casa Tarradellas",
		pattern: /(?:casa)?(?:\s|^)tarradellas/gi,
	},
	{
		name: "Cuyar Jabugo",
		pattern: /cuyar\sjabugo/gi,
	},
	{
		name: "Espina",
		pattern: /(?<!sin|con|ni)(?:\s|^)espina\s/gi,
	},
	{
		name: "Famila",
		pattern: /famila/gi,
	},
	{
		name: "Legado",
		pattern: /^legado/gi,
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
		pattern: /^argal/gi,
	},
	{
		name: "Boadas",
		pattern: /boadas|Jamón gran reserva 8 Kg/gi,
	},
	{
		name: "Embuastur",
		pattern: /embuastur/gi,
	},
	{
		name: "Illera",
		pattern: /(?:^|\s)illera/gi,
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
		pattern: /(?<!pizza)(?:\s|^)vegalia/gi,
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
		pattern: /^tello/gi,
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
		// This brand is causes problems with the regex, let's make it more specific
		// - First specificity: The word needs an space after finishing
		name: "Mina",
		pattern: /^mina\s/gi,
	},
	{
		name: "Vicente López",
		pattern: /vicente\s+lópez/gi,
	},
	{
		// This brand is causes problems with the regex, let's make it more specific
		// - First specificity: The word needs an space after finishing
		name: "Valle",
		pattern: /^valle\s(?<!garcía)/gi,
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
		pattern: /san\s+mart[ií]n/gi,
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
		pattern: /(?<!jam[oó]n)(?:\s|^|c\.)serrano|delisandwich/gi,
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
		pattern: /(?:\s|^)sol[aá]/gi,
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
		pattern: /(?:oscar|o\.)\s?mayer/gi,
	},
	{
		name: "Wurst Haus",
		pattern: /wurst\shaus/gi,
	},
	{
		name: "Ancares",
		pattern: /^ancares/gi,
	},
	{
		name: "Bridor",
		pattern: /bridor/gi,
	},
	{
		name: "Campera Nature",
		pattern: /campera\snature/gi,
	},
	{
		name: "Okin",
		pattern: /okin/gi,
	},
	{
		name: "Sinblat",
		pattern: /sinblat/gi,
	},
	{
		name: "La Bella Easo",
		pattern: /la\sbella\seaso/gi,
	},
	{
		name: "Panrico",
		pattern: /panrico/gi,
	},
	{
		name: "Pasquier",
		pattern: /pasquier/gi,
	},
	{
		name: "Dulcesol",
		pattern: /dulcesol/gi,
	},
	{
		name: "Bocatín",
		pattern: /bocat[ií]n/gi,
	},
	{
		name: "Cristallino",
		pattern: /cristallino/gi,
	},
	{
		name: "Oroweat",
		pattern: /oroweat/gi,
	},
	{
		name: "Panrico",
		pattern: /panrico/gi,
	},
	{
		name: "Sinblat",
		pattern: /sinblat/gi,
	},
	{
		name: "El Carril",
		pattern: /el\scarril(?:\s|$)/gi,
	},
	{
		name: "Harizán",
		pattern: /hariz[aá]n/gi,
	},
	{
		name: "Panceliac",
		pattern: /panceliac/gi,
	},
	{
		name: "Rialto",
		pattern: /rialto/gi,
	},
	{
		name: "Delser",
		pattern: /delser/gi,
	},
	{
		name: "Farinetes",
		pattern: /farinetes/gi,
	},
	{
		name: "La Pasión",
		pattern: /(?<!fruta de\s)la\spasi[oó]n/gi,
	},
	{
		name: "Rosquiart",
		pattern: /rosquiart/gi,
	},
	{
		name: "Delicias del Pan",
		pattern: /delicias del pan/gi,
	},
	{
		name: "Domingo",
		pattern: /domingo/gi,
	},
	{
		name: "Espiga blanca",
		pattern: /espiga\sblanca/gi,
	},
	{
		name: "Il Buon Pane",
		pattern: /il buon pane/gi,
	},
	{
		name: "Juncalillo",
		pattern: /juncalillo/gi,
	},
	{
		name: "Monti",
		pattern: /monti(?:\s|$)/gi,
	},
	{
		name: "Obando",
		pattern: /obando/gi,
	},
	{
		name: "Bonta Lucane",
		pattern: /bonta lucane/gi,
	},
	{
		name: "Casabad",
		pattern: /casabad/gi,
	},
	{
		name: "Panadería Jesús",
		pattern: /panader[ií]a jes[uú]s/gi,
	},
	{
		name: "Flor de Vetus",
		pattern: /flor\s(?:de\s)?vetus/gi,
	},
	{
		name: "Altos de Trevejos",
		pattern: /alt?os\s(?:de\s)?trevejos/gi,
	},
	{
		name: "Brezal",
		pattern: /brezal/gi,
	},
	{
		name: "Caldera",
		pattern: /caldera/gi,
	},
	{
		name: "Chiquita Locura",
		pattern: /chiquita\slocura/gi,
	},
	{
		name: "Crater",
		pattern: /crater/gi,
	},
	{
		name: "Cumbres de Abona",
		pattern: /cumbres\s(?:de\s)?abona/gi,
	},
	{
		name: "Domínguez",
		pattern: /dom[ií]nguez/gi,
	},
	{
		name: "Flor de Chasna",
		pattern: /flor\s(?:de\s)?chasna/gi,
	},
	{
		name: "Frontón de Oro",
		pattern: /front[oó]n\s(?:de\s)?oro/gi,
	},
	{
		name: "Gran Theyda",
		pattern: /gran\sth?eh?yda/gi,
	},
	{
		name: "La Geria",
		pattern: /la\sgeria/gi,
	},
	{
		name: "Lágrima de Listan",
		pattern: /l[aá]grima\s(?:de\s)?list[aá]n/gi,
	},
	{
		name: "Las Tirajanas",
		pattern: /las\stirajanas/gi,
	},
	{
		name: "Linaje del Pago",
		pattern: /linaje\s(?:del\s)?pago/gi,
	},
	{
		name: "Listán Negro",
		pattern: /list[aá]n\snegro/gi,
	},
	{
		name: "Monje",
		pattern: /monje/gi,
	},
	{
		name: "Betina",
		pattern: /Pan baguetina sin gluten/gi,
	},
	{
		name: "Campelos",
		pattern: /(?:pan baguetin lareira|barra 100% integral )/gi,
	},
	{
		name: "Berlys",
		pattern: /^nature\s(?!.*compagnie.*|valley)/gi,
	},
	{
		name: "Pantástico",
		pattern: /(?:pant[aá]stico|burguer 4 unidades)/gi,
	},
	{
		name: "Sabores de la Luisiana",
		pattern:
			/(?<!mendez\s)(?:colín palitos|rosquillas|sabores de la luisi?ana)(?:\s|$)(?!(?:de chocolate|al cacao) El molino de Dia|(?:de azúcar|integrales) Pelayo)/gi,
	},
	{
		name: "Gourmandise",
		pattern: /Crostao picatostes naturales resist/gi,
	},
	{
		name: "Bornatural",
		pattern: /Quinoa bolsa 500 g/gi,
	},
	...GeneralBrands,
	...Beauty,
	...Drinks,
	...StoreRoom,
	...BabyBrands,
	...PetsBrands,
	...PreparedBrands,
	...PerfumBrands,
];

// Esto ya lo llevare donde toque
const HOMEMADE_PATTERNS = [
	/(?:\s|^)pan(?:es)?(?:\s|$)(?!.*(?:molde|hamburguesa|regañá|picos))/gi,
	/panecillos?/gi,
	/baguettes?/gi,
	/chapata/gi,
	/hogaza/gi,
	/bocadillos?/gi,
	/pulguita/gi,
	/empanada de (?:at[uú]n|carne|pollo)/gi,
	/empanadilla\s(?:de\s)?(?:at[uú]n|carne|pollo|kebab)/gi,
	/pan pizza de (?:at[uú]n|jam[oó]n|pollo)/gi,
	/base pizza/gi,
	/magdalena/gi,
	/croissant/gi,
	/flauta de cacao/gi,
	/caña de crema/gi,
	/trenza de chocolate/gi,
	/almeja/gi,
	/berberecho/gi,
	/bogavante/gi,
	/obleas/gi,
	/lenguas/gi,
	/buey de mar/gi,
	/centollo/gi,
	/malla/gi,
	/mejill[oó]n/gi,
	/mejillones/gi,
	/ostra/gi,
	/abae/gi,
	/agriote/gi,
	/at[uú]n/gi,
	/bacaladilla/gi,
	/gambas?/gi,
	/torrijas/gi,
	/noodles/gi,
	/poke/gi,
	/gamb[oó]n/gi,
	/langostino/gi,
	/cangrejo/gi,
	/bacalao/gi,
	/bicuda/gi,
	/bocinegro/gi,
	/boquer[oó]n/gi,
	/breca/gi,
	/brotola/gi,
	/burro/gi,
	/caballa/gi,
	/cabrilla de senegal/gi,
	/cherne/gi,
	/chicharro/gi,
	/chopa/gi,
	/congrio/gi,
	/corvina/gi,
	/ajetes/gi,
	/(?:dientes de\s)?ajo/gi,
	/cebolla/gi,
	/cebolleta/gi,
	/cebollita/gi,
	/acelgas/gi,
	/albahaca/gi,
	/berros/gi,
	/eneldo/gi,
	/navajas/gi,
	/chirla/gi,
	// Meat
	/carne de\s(?:cerdo|cochinillo|jam[oó]n|lomo|panceta|pavo|pollo|ternera|cordero)/gi,
	/chuletas?\s(?:de)?\s?(?:lomo de cerdo|cerdo|lomo|ternera|cordero)/gi,
	/solomillo\s?(?:de)?\s?(?:cerdo|ternera|pavo|pollo|vacuno)/gi,
	/tiras de\s?(?:pollo|ternera|costilla)/gi,
	/paletilla de\s?(?:cerdo|cordero|lechal)/gi,
	/h[ií]gado de\s?(?:cerdo|ternera|pollo)/gi,
	/mollejas? de\s?(?:cerdo|ternera|pollo)/gi,
	/muslo de\s?(?:cerdo|pollo)/gi,
	/pierna de (?:cerdo|lechal)/gi,
	/(?:pavo|pollo)\s(?:entero|redondo)/gi,
	/perdiz/gi,
	/picantones/gi,
	/pechuga(?:\sde\spollo)?/gi,
	/(?:alas\sde\s)?pollo/gi,
	/solomillo/gi,
	/peceto/gi,
	/vacuno/gi,
	/croquetas de (?:at[uú]n|bacalao|carne|choco|espinacas|gambas|jam[oó]n|pollo|verduras)/gi,
	/longaniza/gi,
	/chorizo/gi,
	/chistorra/gi,
	/butifarra/gi,
	/embutido/gi,
	/rabas/gi,
	/berlina/gi,
	/berlichoco/gi,
	/berlicrema/gi,
	/bollo/gi,
	/cookie/gi,
	/herradura/gi,
	/trenza de chocolate/gi,
	/lima/gi,
	/lim[oó]n/gi,
	/mandarina/gi,
	/naranja/gi,
	/pomelo/gi,
	/arándano/gi,
	/tomates?/gi,
	/fresas?/gi,
	/fres[oó]n/gi,
	/cereza/gi,
	/ciruela/gi,
	/granada/gi,
	/melocot[oó]n/gi,
	/nectarina/gi,
	/batata/gi,
	/berenjena/gi,
	/calabacín/gi,
	/pepino/gi,
	/remolacha/gi,
	/manzanas?/gi,
	/zanahoria/gi,
	/pera/gi,
	/pl[aá]tano/gi,
	/mel[oó]n/gi,
	/sand[ií]a/gi,
	/aguacate/gi,
	/chirimoya/gi,
	/coco/gi,
	/kiwi/gi,
	/papaya/gi,
	/piña/gi,
	/uva/gi,
	/frambuesas/gi,
	/moras/gi,
	/filetes de/gi,
	/fogonero/gi,
	/gallo/gi,
	/alistado/gi,
	/lenguado/gi,
	/merluza/gi,
	/panga/gi,
	/perca/gi,
	/sardina/gi,
	/tacos de/gi,
	/tilapia/gi,
	/anillas de pota/gi,
	/tubo de pota/gi,
	/pulpo/gi,
	/rejo/gi,
	/calamar/gi,
	/sepia/gi,
	/helado/gi,
	/hielo/gi,
	/mayonesa en sobres individuales/gi,
	/salsa fresca setas/gi,
	/salsa de trufas/gi,
	/palmera/gi,
	/Recambios cepillo dental Eléctrico/gi,
	/dental con cera y sabor menta/gi,
	/monedas de chocolate con leche/gi,
	/huevo (?:crema al cacao|de chocolate)/gi,
	/burger/gi,
	/preparado/gi,
	/albóndigas/gi,
	/banana/gi,
	/puerros?/gi,
	/pimientos?\s?(?:rojos?|verdes?|tricolor)?/gi,
	/calabaza/gi,
	/brócoli/gi,
	/judía\s?(?:verde|plana)/gi,
	/bífidus/gi,
	/lomo adobado/gi,
	/pasas/gi,
	/picos/gi,
	/salchich[oó]n/gi,
	/(?:\s|^)lechuga/gi,
	/coliflor/gi,
	/patatas?/gi,
	/papas?/gi,
	/maquinilla de afeitar/gi,
	/morcilla/gi,
	/jamoncito/gi,
	/bdja/gi,
	/bandeja/gi,
	/lomo/gi,
	/hamburguesa/gi,
	/presa/gi,
	/añojo/gi,
	/esp[áa]rragos?/gi,
	/apio/gi,
	/perejil/gi,
	/acelga/gi,
	/hierbabuena/gi,
	/jengibre/gi,
	/lombarda/gi,
	/rabanito/gi,
	/ma[ií]z/gi,
	/salm[oó]n/gi,
	/dorada/gi,
	/lubina/gi,
	/rape/gi,
	/trucha/gi,
	/rodaballo/gi,
	/cilantro/gi,
	/mango/gi,
	/nueces/gi,
	/pastel/gi,
	/caracolas/gi,
	/ensaimada/gi,
	/napolitana/gi,
	/bizcocho/gi,
	/medias? noches/gi,
	/muffin/gi,
	/xuxu/gi,
	/mini saladas/gi,
	/paella/gi,
	/nuez/gi,
	/avellana/gi,
	/almendra/gi,
	/piscina/gi,
	/jam[oó]n/gi,
];

const identifyBrand = (productName: string, storeName: string): TBrand | undefined => {
	const matchedBrands = BRANDS.filter((brandName) => {
		const regex = new RegExp(brandName.pattern);
		return regex.exec(productName);
	});

	const hasBrand = matchedBrands.sort((a, b) => (a.priority || 1) - (b.priority || 1))[0];

	// There are products that come without brand. Some of them are products that the supermarket makes
	if (!hasBrand) {
		const homemade = HOMEMADE_PATTERNS.find((pattern) => {
			const regex = new RegExp(pattern);
			return regex.exec(productName);
		});

		if (homemade) {
			logIntoFile("No encontramos marca pero se encuentra entre recetas creadas por el supermercado");
			return {
				name: storeName,
				pattern: homemade,
			};
		}
	}

	return hasBrand;
};

export { identifyBrand };
