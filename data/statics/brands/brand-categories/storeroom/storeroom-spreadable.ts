import { TBrand } from "../../../../types/brand";
import Categories from "../../../category/category";

const StoreRoomSpreadableBrands: TBrand[] = [
	{
		name: "Nutella",
		pattern: /nutella/gi,
		onlyCategory: Categories.Despensa,
	},
	{
		name: "La Piara",
		pattern: /la piara/gi,
		onlyCategory: Categories.Despensa,
	},
	{
		name: "Martiko",
		pattern: /martiko/gi,
		onlyCategory: Categories.Despensa,
	},
	{
		name: "Capdevila",
		pattern: /capdevila/gi,
	},
	{
		name: "Nenuco",
		pattern: /nenuco(?:\s|$)(?!flor)/gi,
	},
	{
		name: "Sevenkids",
		pattern: /sevenkids/gi,
	},
	{
		name: "Chelino",
		pattern: /chelino/gi,
	},
	{
		name: "Drynites",
		pattern: /drynites/gi,
	},
	{
		name: "Huggies",
		pattern: /huggies/gi,
	},
	{
		name: "Indasbed",
		pattern: /indasbed/gi,
	},
	{
		name: "Tigex",
		pattern: /tigex/gi,
	},
	{
		name: "Brevia",
		pattern: /brevia/gi,
	},
	{
		name: "Kandoo",
		pattern: /kandoo/gi,
	},
	{
		name: "Nunex",
		pattern: /nunex/gi,
	},
	{
		name: "Prevex",
		pattern: /prevex/gi,
	},
	{
		name: "Salustar",
		pattern: /salustar/gi,
	},
	{
		name: "Pastoret",
		pattern: /pastoret/gi,
	},
	{
		name: "Torras",
		pattern: /torras/gi,
	},
	{
		name: "La Aldeana",
		pattern: /la aldeana/gi,
	},
	{
		name: "Sanibac",
		pattern: /sanibac/gi,
	},
	{
		name: "Machandel",
		pattern: /machandel/gi,
	},
	{
		name: "Sol Natural",
		pattern: /sol natural/gi,
	},
	{
		name: "Captain kombucha",
		pattern: /captain kombucha/gi,
	},
	{
		name: "Komvida",
		pattern: /komvida/gi,
	},
	{
		name: "Lip",
		pattern: /^lip\s/gi,
	},
	{
		name: "Mbusto",
		pattern: /mbusto/gi,
	},
	{
		name: "Raw",
		pattern: /^raw\s/gi,
	},
	{
		name: "Biosabor",
		pattern: /biosabor/gi,
	},
	{
		name: "Costa Eco",
		pattern: /costa eco/gi,
	},
	{
		name: "Albert I Noya",
		pattern: /albert i noya/gi,
	},
	{
		name: "Cantaburros",
		pattern: /cantaburros/gi,
	},
	{
		name: "Maeloc",
		pattern: /maeloc/gi,
	},
	{
		name: "Sal de fiesta",
		pattern: /sal de fiesta/gi,
	},
	{
		name: "Hollinger",
		pattern: /hollinger/gi,
	},
	{
		name: "Vitamont",
		pattern: /vitamont/gi,
	},
	{
		name: "Koifer",
		pattern: /koifer/gi,
	},
	{
		name: "Villa Oro",
		pattern: /villa oro/gi,
	},
	{
		name: "Vegas Bañezanas",
		pattern: /vegas bañezanas/gi,
	},
	{
		name: "Atlantia",
		pattern: /atlantia/gi,
	},
	{
		name: "Sence",
		pattern: /(?:^|\s)sence/gi,
	},
	{
		name: "Islacao",
		pattern: /islacao/gi,
	},
	{
		name: "RAM",
		pattern: /^ram\s/gi,
	},
	{
		name: "Illy",
		pattern: /^illy/gi,
	},
	{
		name: "Gimoka",
		pattern: /gimoka/gi,
	},
	{
		name: "Lavazza",
		pattern: /lavazza/gi,
	},
	{
		name: "LOR",
		pattern: /^lor\s/gi,
	},
	{
		name: "Marcilla",
		pattern: /marcilla(?:\s|$)/gi,
	},
	{
		name: "Nescafé",
		pattern: /nescaf[eé]/gi,
	},
	{
		name: "Novell",
		pattern: /novell/gi,
	},
	{
		name: "Saimaza",
		pattern: /saimaza/gi,
	},
	{
		name: "Starbucks",
		pattern: /starbucks/gi,
	},
	{
		name: "La Flecha",
		pattern: /la flecha/gi,
	},
	{
		name: "Malongo",
		pattern: /malongo/gi,
	},
	{
		name: "Reina",
		pattern: /reina/gi,
	},
	{
		name: "Sol",
		pattern: /^sol\s(?!natural|archena)/gi,
	},
	{
		name: "Pocket",
		pattern: /(?<!lovely|pañuelos)(?:\s|^)pocket/gi,
	},
	{
		name: "Capitán Maní",
		pattern: /capit[aá]n\sman[ií]/gi,
	},
	{
		name: "Kernel King",
		pattern: /kernel king/gi,
	},
	{
		name: "Sun Pat",
		pattern: /sun pat/gi,
	},
	{
		name: "Arriaca",
		pattern: /arriaca/gi,
	},
	{
		name: "Iki",
		pattern: /(?:^|\s)iki(?:\s|$)/gi,
	},
	{
		name: "Jaira",
		pattern: /^jaira/gi,
	},
	{
		name: "La Sagra",
		pattern: /la sagra/gi,
	},
	{
		name: "Nao",
		pattern: /nao/gi,
	},
	{
		name: "Vagamundo",
		pattern: /vagamundo/gi,
	},
	{
		name: "1906",
		pattern: /^1906/gi,
	},
	{
		name: "Dorada",
		pattern: /^dorada(?:.*(?:cerveza|botella).*)/gi,
	},
	{
		name: "Kirin Ichiban",
		pattern: /kirin ichiban/gi,
	},
	{
		name: "San Miguel",
		pattern: /^san miguel/gi,
	},
	{
		name: "Alhambra",
		pattern: /alhambra/gi,
	},
	{
		name: "Amstel",
		pattern: /amstel(?:\sradler)?/gi,
	},
	{
		name: "Chérie",
		pattern: /cher[ié]e/gi,
	},
	{
		name: "Cruzcampo",
		pattern: /cruzcampo/gi,
	},
	{
		name: "Damm",
		pattern: /(?:daura|estrella|free|ak|voll)?\s?damm\s?(?:lemon)?/gi,
	},
	{
		name: "Desperados",
		pattern: /desperados/gi,
	},
	{
		name: "Mahou",
		pattern: /mahou/gi,
	},
	{
		name: "Mort Subite",
		pattern: /mort subite/gi,
	},
	{
		name: "Tropical",
		pattern: /(?<!refresco|leche|zumo|sabor)(?:\s|^)tropical(?!\srexona)/gi,
	},
	{
		name: "Abbaye D'aulne",
		pattern: /abbaye d[eé]aulne/gi,
	},
	{
		name: "Birra Moretti",
		pattern: /birra moretti/gi,
	},
	{
		name: "Brewdog",
		pattern: /brewdog/gi,
	},
	{
		name: "Budweiser",
		pattern: /budweiser/gi,
	},
	{
		name: "Carlsberg",
		pattern: /carlsberg/gi,
	},
	{
		name: "Chimay",
		pattern: /chimay/gi,
	},
	{
		name: "Coors",
		pattern: /coors/gi,
	},
	{
		name: "Corona",
		pattern: /(?<!holland\s)coron(?:a|ita)(?:\s|$)(?!blanca)/gi,
	},
	{
		name: "Grimbergen",
		pattern: /grimbergen/gi,
	},
	{
		name: "Heineken",
		pattern: /heineken/gi,
	},
	{
		name: "Hop Rider",
		pattern: /hop rider/gi,
	},
	{
		name: "Judas",
		pattern: /judas/gi,
	},
	{
		name: "Kelson",
		pattern: /kelson/gi,
	},
	{
		name: "Miller",
		pattern: /^miller/gi,
	},
	{
		name: "Paulaner",
		pattern: /paulaner/gi,
	},
	{
		name: "Peroni",
		pattern: /(?:\s|^)peroni/gi,
	},
	{
		name: "Schafferhofer",
		pattern: /schafferhofer/gi,
	},
	{
		name: "Stella Artois",
		pattern: /stella artois/gi,
	},
	{
		name: "Complot",
		pattern: /complot/gi,
	},
	{
		name: "El Águila",
		pattern: /el [áa]guila/gi,
	},
	{
		name: "Estrella del sur",
		pattern: /estrella del sur/gi,
	},
	{
		name: "Victoria",
		pattern: /victoria/gi,
	},
	{
		name: "Estrella Galicia",
		pattern: /(?:estrella\s|e\.)galicia/gi,
	},
	{
		name: "Magic Malt",
		pattern: /magic malt/gi,
	},
	{
		name: "Miya",
		pattern: /miya/gi,
	},
	{
		name: "Franziskaner",
		pattern: /franziskaner/gi,
	},
	{
		name: "Turia",
		pattern: /^turia/gi,
	},
	{
		name: "Kopparberg",
		pattern: /kopparberg/gi,
	},
	{
		name: "Ladrón de Manzanas",
		pattern: /(?:ladr[oó]n de\s|l\.)manzanas/gi,
	},
	{
		name: "Magners",
		pattern: /magners/gi,
	},
	{
		name: "Rekorderlig",
		pattern: /rekorderlig/gi,
	},
	{
		name: "Spring cider",
		pattern: /spring cider/gi,
	},
	{
		name: "Strongbow",
		pattern: /strongbow/gi,
	},
	{
		name: "D'Haubry",
		pattern: /de haubry/gi,
	},
	{
		name: "Balconi",
		pattern: /balconi/gi,
	},
	{
		name: "Campillero",
		pattern: /campillero/gi,
	},
	{
		name: "Codan",
		pattern: /codan/gi,
	},
	{
		name: "Dulcería Nublo Tejeda",
		pattern: /dulcer[ií]a nublo tejeda/gi,
	},
	{
		name: "Eidetesa",
		pattern: /eidetesa/gi,
	},
	{
		name: "El neo",
		pattern: /el neo/gi,
	},
	{
		name: "Fibre One",
		pattern: /fibre one/gi,
	},
	{
		name: "Gimar",
		pattern: /gimar/gi,
	},
	{
		name: "Inés Rosales",
		pattern: /in[eé]s rosales/gi,
	},
	{
		name: "JR. Brownie",
		pattern: /jr\.?\sbrownie/gi,
	},
	{
		name: "Kuchen Meister",
		pattern: /kuchen meister/gi,
	},
	{
		name: "Midi",
		pattern: /midi/gi,
	},
	{
		name: "Mildred",
		pattern: /mildred/gi,
	},
	{
		name: "Phoskitos",
		pattern: /phoskitos/gi,
	},
	{
		name: "Porta",
		pattern: /(?:repostería)?(?:\s|^)porta/gi,
	},
	{
		name: "Airos",
		pattern: /airos/gi,
	},
	{
		name: "Confitería",
		pattern: /confiter[ií]a/gi,
	},
	{
		name: "Don Doco",
		pattern: /don doco/gi,
	},
	{
		name: "Europastry",
		pattern: /europastry/gi,
	},
	{
		name: "Heras",
		pattern: /heras/gi,
	},
	{
		name: "La Nia",
		pattern: /la nia/gi,
	},
	{
		name: "Arruabarrena",
		pattern: /arruabarrena/gi,
	},
	{
		name: "La Herreña",
		pattern: /la herre[ñn]a/gi,
	},
	{
		name: "Pasteror",
		pattern: /pasteror|queque/gi,
	},
	{
		name: "Chaboco",
		pattern: /chaboco/gi,
	},
	{
		name: "Chivo",
		pattern: /chivo/gi,
	},
	{
		name: "Contiempo",
		pattern: /contiempo/gi,
	},
	{
		name: "El Lomo",
		pattern: /el lomo/gi,
	},
	{
		name: "El secreto de Eva",
		pattern: /el secreto de eva/gi,
	},
	{
		name: "Esencia 27",
		pattern: /esencia 27/gi,
	},
	{
		name: "La Jirafa",
		pattern: /la jirafa/gi,
	},
	{
		name: "Lagrima de Malvasia",
		pattern: /lagrima de malvasia/gi,
	},
	{
		name: "Miradero",
		pattern: /miradero/gi,
	},
	{
		name: "Moon",
		pattern: /moon/gi,
	},
	{
		name: "Ven al sur",
		pattern: /ven al sur/gi,
	},
	{
		name: "Viña Taoro",
		pattern: /viña taoro/gi,
	},
	{
		name: "Yaiza",
		pattern: /yaiza/gi,
	},
	{
		name: "Fransola",
		pattern: /fransola/gi,
	},
	{
		name: "Raimat",
		pattern: /raimat/gi,
	},
	{
		name: "San Valentín",
		pattern: /^san valent[ií]n/gi,
	},
	{
		name: "Viña Sol",
		pattern: /viña sol/gi,
	},
	{
		name: "Albariño de Fefiñanes",
		pattern: /albariño de fefiñanes/gi,
	},
	{
		name: "Alen de sanmartiño",
		pattern: /alen de sanmartiño/gi,
	},
	{
		name: "Castelo dos Condes",
		pattern: /castelo dos condes/gi,
	},
	{
		name: "Depende",
		pattern: /depende/gi,
	},
	{
		name: "Fefinanes",
		pattern: /fefinanes/gi,
	},
	{
		name: "Gargalo",
		pattern: /gargalo/gi,
	},
	{
		name: "Granbazán",
		pattern: /granbaz[aá]n/gi,
	},
	{
		name: "Guitiam",
		pattern: /guitiam/gi,
	},
	{
		name: "La mar",
		pattern: /la mar(?!i)/gi,
	},
	{
		name: "La Val",
		pattern: /(?:\s|^)la val/gi,
	},
	{
		name: "Leirana",
		pattern: /leirana/gi,
	},
	{
		name: "Mar de Frades",
		pattern: /mar de frades/gi,
	},
	{
		name: "Martín Codax",
		pattern: /mart[ií]n codax/gi,
	},
	{
		name: "Nora",
		pattern: /(?:\s|^)nora/gi,
	},
	{
		name: "O fillo da Condesa",
		pattern: /o fillo da condesa/gi,
	},
	{
		name: "O Luar do Sil",
		pattern: /o luar do sil/gi,
	},
	{
		name: "Paco & Lola",
		pattern: /paco&lola/gi,
	},
	{
		name: "Pazo das bruxas",
		pattern: /pazo das bruxas/gi,
	},
	{
		name: "Pazo de Monterrey",
		pattern: /pazo de monterrey/gi,
	},
	{
		name: "Rippa Avie",
		pattern: /rippa avie/gi,
	},
	{
		name: "Santiago Ruiz",
		pattern: /santiago ruiz/gi,
	},
	{
		name: "Terras Gaudas",
		pattern: /terras gaudas/gi,
	},
	{
		name: "Veiga Naum",
		pattern: /veiga naum/gi,
	},
	{
		name: "Villa Dauga",
		pattern: /villa dauga/gi,
	},
	{
		name: "Aveleda",
		pattern: /aveleda/gi,
	},
	{
		name: "Catela Alta",
		pattern: /catela alta/gi,
	},
	{
		name: "D.Trimbach",
		pattern: /d\.?\s?trimbach/gi,
	},
	{
		name: "Laboure Roi",
		pattern: /laboure roi/gi,
	},
	{
		name: "Saxenburg",
		pattern: /saxenburg/gi,
	},
	{
		name: "Stallmann",
		pattern: /stallmann/gi,
	},
	{
		name: "Wittmann",
		pattern: /wittmann/gi,
	},
	{
		name: "Polvorete",
		pattern: /polvorete/gi,
	},
	{
		name: "El Marido De Mi Amiga",
		pattern: /el marido de mi amiga/gi,
	},
	{
		name: "Naiades",
		pattern: /naiades/gi,
	},
	{
		name: "Platino Antaño",
		pattern: /platino antaño/gi,
	},
	{
		name: "Basa",
		pattern: /^basa/gi,
	},
	{
		name: "Blanco Nieva",
		pattern: /blanco nieva/gi,
	},
	{
		name: "Blume",
		pattern: /blume/gi,
	},
	{
		name: "Castillo Miraflores",
		pattern: /castillo miraflores/gi,
	},
	{
		name: "Cuatro Rayas",
		pattern: /cuatro rayas/gi,
	},
	{
		name: "Divino Minino",
		pattern: /divino minino/gi,
	},
	{
		name: "El Transistor",
		pattern: /el transistor/gi,
	},
	{
		name: "José Pariente",
		pattern: /jos[eé]\s?pariente/gi,
	},
	{
		name: "K-Naia",
		pattern: /k-naia/gi,
	},
	{
		name: "Luna Blanca",
		pattern: /luna blanca/gi,
	},
	{
		name: "Mantel",
		pattern: /mantel/gi,
	},
	{
		name: "Palomo cojo",
		pattern: /palomo cojo/gi,
	},
	{
		name: "Pampano",
		pattern: /pampano/gi,
	},
	{
		name: "Terranova",
		pattern: /terra\s?nova/gi,
	},
	{
		name: "Verdeo",
		pattern: /verdeo/gi,
	},
	{
		name: "15 Mil Gotas",
		pattern: /15 mil gotas/gi,
	},
	{
		name: "Aizpurua",
		pattern: /aizpurua/gi,
	},
	{
		name: "Alisios",
		pattern: /alisios/gi,
	},
	{
		name: "Azzulo",
		pattern: /azzulo/gi,
	},
	{
		name: "Barbadillo",
		pattern: /barbadillo/gi,
	},
	{
		name: "Casa de la Ermita",
		pattern: /casa de la ermita/gi,
	},
	{
		name: "Dulce corazón",
		pattern: /dulce coraz[oó]n/gi,
	},
	{
		name: "Dulce malicia",
		pattern: /dulce malicia/gi,
	},
	{
		name: "El Novio Perfecto",
		pattern: /el novio perfecto/gi,
	},
	{
		name: "El secreto de gara",
		pattern: /el secreto de gara/gi,
	},
	{
		name: "El Zarzal",
		pattern: /el zarzal/gi,
	},
	{
		name: "Finca Luzón",
		pattern: /finca luz[oó]n/gi,
	},
	{
		name: "Habla De Ti",
		pattern: /habla de ti/gi,
	},
	{
		name: "Marqués de Vizhoja",
		pattern: /marqu[eé]s de vizhoja/gi,
	},
	{
		name: "MR",
		pattern: /^mr.*vino.*/gi,
	},
	{
		name: "Oveja naranja",
		pattern: /oveja naranja/gi,
	},
	{
		name: "Quinta Apolonia",
		pattern: /quinta apolonia/gi,
	},
	{
		name: "Scanavino",
		pattern: /scanavino/gi,
	},
	{
		name: "Seducción",
		pattern: /^seducci[oó]n/gi,
	},
	{
		name: "Son 2 dias",
		pattern: /son 2 dias/gi,
	},
	{
		name: "Bergader",
		pattern: /bergader/gi,
	},
	{
		name: "Entremont",
		pattern: /entremont/gi,
	},
	{
		name: "President",
		pattern: /pr[eé]sident/gi,
	},
	{
		name: "Oro de Holanda",
		pattern: /oro de holanda/gi,
	},
	{
		name: "Burgo de Arias",
		pattern: /burgo (?:de\s)?arias|arias/gi,
	},
	{
		name: "Hochland",
		pattern: /hochland/gi,
	},
	{
		name: "Palancares",
		pattern: /palancares/gi,
	},
	{
		name: "Arla",
		pattern: /(?:\s|^)arla/gi,
	},
	{
		name: "El Caserío",
		pattern: /el caser[ií]o/gi,
	},
	{
		name: "Nurishh",
		pattern: /nurishh/gi,
	},
	{
		name: "Cathedral",
		pattern: /cathedral/gi,
	},
	{
		name: "Disquesa",
		pattern: /d?isquesa/gi,
	},
	{
		name: "Eatlean",
		pattern: /eatlean/gi,
	},
	{
		name: "Exquisa",
		pattern: /exquisa/gi,
	},
	{
		name: "Galbani",
		pattern: /galbani/gi,
	},
	{
		name: "Babybel",
		pattern: /babybel/gi,
	},
	{
		name: "La Vaca que Ríe",
		pattern: /(?:la\s)?vaca que r[ií]e/gi,
	},
	{
		name: "Tranchetes",
		pattern: /tranchetes/gi,
	},
	{
		name: "Ballarini",
		pattern: /ballarini/gi,
	},
	{
		name: "Flor de Burgos",
		pattern: /flor\s(?:de\s)?burgos/gi,
	},
	{
		name: "Bocatería",
		pattern: /bocater[ií]a/gi,
	},
	{
		name: "Sandra",
		pattern: /sandra/gi,
	},
	{
		name: "Arístides",
		pattern: /ar[ií]stides/gi,
	},
	{
		name: "Athos",
		pattern: /athos/gi,
	},
	{
		name: "Olimpus",
		pattern: /olimpus/gi,
	},
	{
		name: "Parrano",
		pattern: /parrano/gi,
	},
	{
		name: "Margui",
		pattern: /margui/gi,
	},
	{
		name: "Valio",
		pattern: /valio/gi,
	},
	{
		name: "Tres Oscos",
		pattern: /tres oscos/gi,
	},
	{
		name: "Millán vicente",
		pattern: /(?:mill[aá]n\s|m\.)vicente/gi,
	},
	{
		name: "El Ventero",
		pattern: /(?:el\s)?ventero/gi,
	},
	{
		name: "Navidul",
		pattern: /navidul/gi,
	},
	{
		name: "Almette",
		pattern: /almette/gi,
	},
	{
		name: "Castello",
		pattern: /castello/gi,
	},
	{
		name: "Toscanella",
		pattern: /toscanella/gi,
	},
	{
		name: "Ribera del Tajo",
		pattern: /ribera del tajo/gi,
	},
	{
		name: "Guía",
		pattern: /gu[ií]a/gi,
	},
	{
		name: "Mayflower",
		pattern: /mayflower/gi,
	},
	{
		name: "Super Mex",
		pattern: /super mex/gi,
	},
	{
		name: "Zanuy",
		pattern: /zanuy/gi,
	},
	{
		name: "Kung-Fu",
		pattern: /kung-fu/gi,
	},
	{
		name: "Soubry",
		pattern: /soubry/gi,
	},
	{
		name: "Eliodoro Gonzalez",
		pattern: /eliodoro gonzalez/gi,
	},
	{
		name: "Control",
		pattern: /^control/gi,
	},
	{
		name: "Family Natural",
		pattern: /family natural/gi,
	},
	{
		name: "Dr. SOS",
		pattern: /dr\.?\ssos/gi,
	},
	{
		name: "Hansaplast",
		pattern: /hansaplast/gi,
	},
	{
		name: "Liposan",
		pattern: /liposan/gi,
	},
	{
		name: "Mirabela",
		pattern: /mirabela/gi,
	},
	{
		name: "Salvelox",
		pattern: /salvelox/gi,
	},
	{
		name: "Salvequick",
		pattern: /salvequick/gi,
	},
	{
		name: "Hawaiian Tropic",
		pattern: /hawaiian tropic/gi,
	},
	{
		name: "La Cabine",
		pattern: /la\s?cabine/gi,
	},

	{
		name: "Salveped",
		pattern: /salveped/gi,
	},
	{
		name: "Andix",
		pattern: /andix/gi,
	},
	{
		name: "Noton",
		pattern: /noton/gi,
	},
	{
		name: "Indasec",
		pattern: /indasec/gi,
	},
	{
		name: "Indaslip",
		pattern: /indaslip/gi,
	},
	{
		name: "Natracare",
		pattern: /natracare/gi,
	},
	{
		name: "Neral",
		pattern: /(?:\s|^)neral/gi,
	},
	{
		name: "Tena",
		pattern: /^tena/gi,
	},
	{
		name: "Pharmaline",
		pattern: /pharmaline/gi,
	},
	{
		name: "Vaginesil",
		pattern: /vaginesil/gi,
	},
	{
		name: "Carefree",
		pattern: /carefree/gi,
	},
	{
		name: "Indasbad",
		pattern: /indasbad/gi,
	},
	{
		name: "O.B.",
		pattern: /o\.b\.?/gi,
	},
	{
		name: "Silvercare",
		pattern: /silvercare/gi,
	},
	{
		name: "Maronti",
		pattern: /maronti/gi,
	},
	{
		name: "Martini",
		pattern: /martini/gi,
	},
	{
		name: "Glivery",
		pattern: /glivery/gi,
	},
	{
		name: "Kingerly & Sons",
		pattern: /kingerly & sons/gi,
	},
	{
		name: "1185",
		pattern: /1185/gi,
	},
	{
		name: "Convidado de Baco",
		pattern: /convidado de baco/gi,
	},
	{
		name: "Puente Pazos",
		pattern: /puente pazos/gi,
	},
	{
		name: "Santa Concepción",
		pattern: /santa concepci[oó]n/gi,
	},
	{
		name: "Oibar",
		pattern: /oibar/gi,
	},
	{
		name: "Pi.omka",
		pattern: /pi\.omka/gi,
	},
	// Weird products that their brand doesnt come in the product name
	{
		name: "Herbes de la Conca",
		pattern: /organic infusión piramide/gi,
	},
	{
		name: "Luzón",
		pattern: /verdecillo tinto eco s\/su D.O Jumilla/gi,
	},
	{
		name: "Nast",
		pattern: /mascarilla.*negro/gi,
	},
	{
		name: "Comesa",
		pattern: /mascarilla.*infantil/gi,
	},
	{
		name: "Desesa",
		pattern: /Botella de plástico rellenable/gi,
	},
	{
		name: "Achuchonas",
		pattern: /achuchonas|Plantilla carbón bicolor talla única/gi,
	},
	{
		name: "Canaryceras",
		pattern: /Vela prisma repelente insectos/gi,
	},
];

export default StoreRoomSpreadableBrands;
