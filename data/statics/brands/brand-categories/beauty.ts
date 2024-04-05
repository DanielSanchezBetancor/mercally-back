import { TBrand } from "../../../types/brand";

const Beauty: TBrand[] = [
  {
    name: "Kado",
    pattern: /(?:^|\s)kado/gi,
  },
  {
    name: "Huesitos",
    pattern: /huesitos/gi,
  },
  {
    name: "Tokke",
    pattern: /tokke/gi,
  },
  {
    name: "Trolli",
    pattern: /trolli/gi,
  },
  {
    name: "Al Diante",
    pattern: /al\sdiante/gi,
  },
  {
    name: "Gallo",
    pattern: /gallo(?:\s|$)(?!pequeño|mediano)/gi,
  },
  {
    name: "Dalla Costa",
    pattern: /dalla\scosta/gi,
  },
  {
    name: "Selección Mundial",
    pattern: /selección\smundial/gi,
  },
  {
    name: "Naturmundo",
    pattern: /naturmundo/gi,
  },
  {
    name: "Weider",
    pattern: /weider/gi,
  },
  {
    name: "Mourama",
    pattern: /mourama/gi,
  },
  {
    name: "Castle Loan",
    pattern: /castle\sloan/gi,
  },
  {
    name: "Alvini",
    pattern: /alvini/gi,
  },
  {
    name: "Riska",
    pattern: /riska/gi,
  },
  {
    name: "Sargento Tequela",
    pattern: /sargento\stequela/gi,
  },
  {
    name: "La Estepa",
    pattern: /la\sestepa/gi,
  },
  {
    name: "Soñador",
    pattern: /soñador/gi,
  },
  {
    name: "Gorzalka",
    pattern: /gorzalka/gi,
  },
  {
    name: "Zoco",
    pattern: /zoco/gi,
  },
  {
    name: "1902",
    pattern: /1902/gi,
  },
  {
    name: "Abadía da Cova",
    pattern: /abadía\sda\scova/gi,
  },
  {
    name: "Nuestra Alacena",
    pattern: /nuestra\salacena/gi,
  },
  {
    name: "Mrm",
    pattern: /mrm/gi,
  },
  {
    name: "Volatin",
    pattern: /volatin/gi,
  },
  {
    name: "Legado Iberico",
    pattern: /legado\siberico/gi,
  },
  {
    name: "Vegecampo",
    pattern: /vegecampo/gi,
  },
  {
    name: "Al Punto",
    pattern: /(?:\s|^)al\spunto(?!\sde\ssal)/gi,
  },
  {
    name: "El Forsane",
    pattern: /el\sforsane/gi,
  },
  {
    name: "La Almazara del Olivar",
    pattern: /la\salmazara\sdel\solivar/gi,
  },
  {
    name: "Diasol",
    pattern: /diasol/gi,
  },
  {
    name: "Dcoop",
    pattern: /dcoop/gi,
  },
  {
    name: "Oro de Génave",
    pattern: /oro\sde\sg[eé]nave/gi,
  },
  {
    name: "Capricho andaluz",
    pattern: /capricho\sandaluz/gi,
  },
  {
    name: "Dia",
    pattern: /(?:\s|^)dia(?:\s|$)/gi,
  },
  {
    name: "Coosol",
    pattern: /coosol/gi,
  },
  {
    name: "Bio",
    pattern: /(?<!prebiotic|membrillo|vegana|vivera tofu|eudermin)(?:\s|^)bio(?:\s|$)(?!frasco)/gi,
	priority: 2,
  },
  {
    name: "Jaencoop",
    pattern: /jaencoop/gi,
  },
  {
    name: "Aliña tu Dia",
    pattern: /aliña\stu\sdia/gi,
  },
  {
    name: "Selección Mundial",
    pattern: /selección\smundial/gi,
  },
  {
    name: "Delicias de Dia",
    pattern: /delicias\sde\sdia/gi,
  },
  {
    name: "Riojavina",
    pattern: /riojavina/gi,
  },
  {
    name: "Vulpi",
    pattern: /vulpi/gi,
  },
  {
    name: "Ramblers",
    pattern: /ramblers/gi,
  },
  {
    name: "San Miguel",
    pattern: /san\smiguel/gi,
  },
  {
    name: "Ambar",
    pattern: /ambar/gi,
  },
  {
    name: "Buckler",
    pattern: /buckler/gi,
  },
  {
    name: "Pony",
    pattern: /pony/gi,
  },
  {
    name: "Imaqe",
    pattern: /imaqe/gi,
  },
  {
    name: "Bonté Professional",
    pattern: /bonté\s(?:professional|everyday)?/gi,
  },
  {
    name: "Cazorla",
    pattern: /cazorla/gi,
  },
  {
    name: "Laumont",
    pattern: /laumont/gi,
  },
  {
    name: "Gli Aironi",
    pattern: /gli\saironi/gi,
  },
  {
    name: "Ducs de Gascogne",
    pattern: /ducs\sde\sgascogne/gi,
  },
  {
    name: "Selectos Castilla",
    pattern: /selectos\scastilla/gi,
  },
  {
    name: "Herpac",
    pattern: /herpac/gi,
  },
  {
    name: "Monvisco",
    pattern: /monvisco/gi,
  },
  {
    name: "Macarons de Pauline",
    pattern: /macarons\sde\spauline/gi,
  },
  {
    name: "Cipriani",
    pattern: /cipriani/gi,
  },
  {
    name: "Di Martino D&G",
    pattern: /di\smartino\sd&g/gi,
  },
  {
    name: "Bermejo",
    pattern: /bermejo/gi,
  },
  {
    name: "Mari Marinera",
    pattern: /mari\smarinera/gi,
  },
  {
    name: "Kiele",
    pattern: /kiele/gi,
  },
  {
    name: "Aguinamar",
    pattern: /aguinamar/gi,
  },
  {
    name: "Nuchar",
    pattern: /nuchar/gi,
  },
  {
    name: "La gula del Norte",
    pattern: /la\sgula\sdel\snorte/gi,
  },
  {
    name: "Krissia",
    pattern: /krissia/gi,
  },
  {
    name: "L-Casei",
    pattern: /l-casei/gi,
  },
  {
    name: "Suerte Ampanera",
    pattern: /suerte\sampanera/gi,
  },
  {
    name: "Caprichoso",
    pattern: /caprichoso/gi,
  },
  {
    name: "Danet",
    pattern: /danet/gi,
  },
  {
    name: "Clesa",
    pattern: /clesa/gi,
  },
  {
    name: "Dhul",
    pattern: /dhul/gi,
  },
  {
    name: "Dairy for fun",
    pattern: /dairy\sfor\sfun/gi,
  },
  {
    name: "Snack Maniac",
    pattern: /snack\smaniac/gi,
  },
  {
    name: "Snatt's",
    pattern: /snatt's/gi,
  },
  {
    name: "Pafritas",
    pattern: /pafritas/gi,
  },
  {
    name: "Tendilla",
    pattern: /tendilla/gi,
  },
  {
    name: "Tosfrit",
    pattern: /tosfrit/gi,
  },
  {
    name: "Fritos",
    pattern: /(?<!cacahuetes|anacardos|ma[ií]z|harina|picatostes)(?:\s|^)fritos/gi,
  },
  {
    name: "Sarasa",
    pattern: /sarasa/gi,
  },
  {
    name: "La Sota",
    pattern: /la\ssota/gi,
  },
  {
    name: "Serpis",
    pattern: /serpis/gi,
  },
  {
    name: "Jolca",
    pattern: /jolca/gi,
  },
  {
    name: "Super Paco",
    pattern: /super\spaco/gi,
  },
  {
    name: "Sp berner",
    pattern: /sp\sberner/gi,
  },
  {
    name: "Scotch Brite",
    pattern: /scotch\s*brite/gi,
  },
  {
    name: "Ballerina",
    pattern: /ballerina/gi,
  },
  {
    name: "Bayeco",
    pattern: /bayeco/gi,
  },
  {
    name: "Vileda",
    pattern: /vileda/gi,
  },
  {
    name: "Spontex",
    pattern: /spontex/gi,
  },
  {
    name: "Rozenbal",
    pattern: /rozenbal/gi,
  },
  {
    name: "Cisne",
    pattern: /cisne/gi,
  },
  {
    name: "Limpiamas",
    pattern: /limpiamas/gi,
  },
  {
    name: "Cloromax",
    pattern: /cloromax/gi,
  },
  {
    name: "Blanco Nuclear",
    pattern: /blanco\snuclear/gi,
  },
  {
    name: "Funky Frank",
    pattern: /funky\sfrank/gi,
  },
  {
    name: "Schara",
    pattern: /schara/gi,
  },
  {
    name: "Revolugreen",
    pattern: /revolu\s?green/gi,
  },
  {
    name: "Mina",
    pattern: /(?:\s|^)mina/gi,
  },
  {
    name: "La Cuina",
    pattern: /la\scuina/gi,
  },
  {
    name: "Vegedia",
    pattern: /vegedia/gi,
  },
  {
    name: "Iberitos",
    pattern: /iberitos/gi,
  },
  {
    name: "Carlota organic",
    pattern: /carlota\sorganic/gi,
  },
  {
    name: "Sivore",
    pattern: /sivore/gi,
  },
  {
    name: "Vallina",
    pattern: /vallina/gi,
  },
  {
    name: "Emcesa",
    pattern: /emcesa/gi,
  },
  {
    name: "Tetería",
    pattern: /tetería/gi,
  },
  {
    name: "Compañía de las Indias",
    pattern: /compañía\sde\slas\sindias/gi,
  },
  {
    name: "Azucarera",
    pattern: /azucarera/gi,
  },
  {
    name: "Sidul",
    pattern: /sidul/gi,
  },
  {
    name: "Bonsweet",
    pattern: /bonsweet/gi,
  },
  {
    name: "Truvia",
    pattern: /truvia/gi,
  },
  {
    name: "Natur Wassy",
    pattern: /natur\swassy/gi,
  },
  {
    name: "Green Panela",
    pattern: /green\s*panela/gi,
  },
  {
    name: "Mielove",
    pattern: /mielove/gi,
  },
  {
    name: "Ramiflor",
    pattern: /ramiflor/gi,
  },
  {
    name: "Castillo de Velasco",
    pattern: /castillo\sde\svelasco/gi,
  },
  {
    name: "Castillo de Haro",
    pattern: /castillo\sde\sharo/gi,
  },
  {
    name: "Ribera de Algodor",
    pattern: /ribera\sde\salgodor/gi,
  },
  {
    name: "Viña Albalí",
    pattern: /viña\salbalí/gi,
  },
  {
    name: "Arco del Sol",
    pattern: /arco\sdel\ssol/gi,
  },
  {
    name: "Valle Rojo",
    pattern: /valle\srojo/gi,
  },
  {
    name: "Señorío de Ondas",
    pattern: /señorío\sde\sondas/gi,
  },
  {
    name: "Campo curero",
    pattern: /campo\scurero/gi,
  },
  {
    name: "Cvne",
    pattern: /cvne/gi,
  },
  {
    name: "Faustino VII",
    pattern: /faustino\s*VII/gi,
  },
  {
    name: "Carta de Plata",
    pattern: /carta\sde\splata/gi,
  },
  {
    name: "Pinta en Copas",
    pattern: /pinta\sen\scopas/gi,
  },
  {
    name: "Señorío de Ayerbe",
    pattern: /señorío\sde\sayerbe/gi,
  },
  {
    name: "Heredad baran",
    pattern: /heredad\sbaran/gi,
  },
  {
    name: "Puerta de Alcalá",
    pattern: /puerta\sde\salcalá/gi,
  },
  {
    name: "Cumbre de Gredos",
    pattern: /cumbre\sde\sgredos/gi,
  },
  {
    name: "Molinos",
    pattern: /molinos/gi,
  },
  {
    name: "Viña Tabora",
    pattern: /viña\stabora/gi,
  },
  {
    name: "Viñas del Vero",
    pattern: /viñas\sdel\svero/gi,
  },
  {
    name: "Viña Ardanche",
    pattern: /viña\sardanche/gi,
  },
  {
    name: "Estola",
    pattern: /estola/gi,
  },
  {
    name: "Garnacha salvaje moncayo",
    pattern: /garnacha\ssalvaje\smoncayo/gi,
  },
  {
    name: "Valderivero",
    pattern: /valderivero/gi,
  },
  {
    name: "Cariñena Geraldino",
    pattern: /cariñena\sgeraldino/gi,
  },
  {
    name: "Jumilla Sismicus",
    pattern: /jumilla\ssismicus/gi,
  },
  {
    name: "Abstractio",
    pattern: /abstractio/gi,
  },
  {
    name: "Utiel Requena Mirandoli",
    pattern: /utiel\srequena\smirandoli/gi,
  },
  {
    name: "Viña Danza",
    pattern: /viña\sdanza/gi,
  },
  {
    name: "Finca Moncloa",
    pattern: /finca\smoncloa/gi,
  },
  {
    name: "Solell de Flix",
    pattern: /solell\sde\sflix/gi,
  },
  {
    name: "Matarromera",
    pattern: /matarromera/gi,
  },
  {
    name: "Ribera del Antaño",
    pattern: /ribera\sdel\santaño/gi,
  },
  {
    name: "Sangre Toro",
    pattern: /sangre\storo/gi,
  },
  {
    name: "Williams",
    pattern: /williams/gi,
  },
  {
    name: "Vega del Báron",
    pattern: /vega\sdel\sb[aá]ron/gi,
  },
  {
    name: "Condominium",
    pattern: /condominium/gi,
  },
  {
    name: "Oceanus",
    pattern: /oceanus/gi,
  },
  {
    name: "Veliterra",
    pattern: /veliterra/gi,
  },
  {
    name: "Penedés",
    pattern: /penedés/gi,
  },
  {
    name: "Libalis",
    pattern: /libalis/gi,
  },
  {
    name: "Gran Leiriña",
    pattern: /gran\sleiriña/gi,
  },
  {
    name: "Serantello",
    pattern: /serantello/gi,
  },
  {
    name: "Ameztoi",
    pattern: /ameztoi/gi,
  },
  {
    name: "Dulce María",
    pattern: /dulce\smaría/gi,
  },
  {
    name: "Rioseco",
    pattern: /rioseco/gi,
  },
  {
    name: "Ropaz",
    pattern: /ropaz/gi,
  },
  {
    name: "Geraldino",
    pattern: /geraldino/gi,
  },
  {
    name: "Pescador",
    pattern: /pescador/gi,
  },
  {
    name: "Ribera del Duero",
    pattern: /ribera\sdel\sduero/gi,
  },
  {
    name: "Antaño",
    pattern: /antaño/gi,
  },
  {
    name: "Temptation",
    pattern: /temptation(?:\s|$)(?!\d)/gi,
  },
  {
    name: "Cafetería",
    pattern: /cafetería/gi,
  },
  {
    name: "Bonka",
    pattern: /bonka(?:\s|$)(?!c[aá]psulas)/gi,
  },
  {
    name: "Arom'arte",
    pattern: /arom'arte/gi,
  },
  {
    name: "L'Or",
    pattern: /l'or/gi,
  },
  {
    name: "Mascaf",
    pattern: /mascaf/gi,
  },
  {
    name: "Segafredo",
    pattern: /segafredo/gi,
  },
  {
    name: "Toscaf",
    pattern: /toscaf/gi,
  },
  {
    name: "Fidias",
    pattern: /fidias/gi,
  },
  {
    name: "Picken",
    pattern: /picken/gi,
  },
  {
    name: "Nerds",
    pattern: /nerds/gi,
  },
  {
    name: "La Broche de la Pila",
    pattern: /(?:la broche de\s)?la pila/gi,
  },
  {
    name: "La Noreñense",
    pattern: /la\snoreñense/gi,
  },
  {
    name: "Gancedo",
    pattern: /gancedo/gi,
  },
  {
    name: "DiqueSí",
    pattern: /diquesí/gi,
  },
  {
    name: "Ensalandia",
    pattern: /ensalandia/gi,
  },
  {
    name: "Aldelis",
    pattern: /aldelis/gi,
  },
  {
    name: "Lamberti",
    pattern: /lamberti/gi,
  },
  {
    name: "Galica",
    pattern: /galica/gi,
  },
  {
    name: "Dani",
    pattern: /dani(?:\s|$)/gi,
  },
  {
    name: "Cabo de Hornos",
    pattern: /cabo\de\shornos/gi,
  },
  {
    name: "Legado Ibérico",
    pattern: /legado\sibérico/gi,
  },
  {
    name: "Vic",
    pattern: /(?:\s|^)vic(?:\s|$)/gi,
  },
  {
    name: "España e Hijos",
    pattern: /españa\se\shijos/gi,
  },
  {
    name: "Joyas del Valle",
    pattern: /joyas\sdel\svalle/gi,
  },
  {
    name: "Emperatriz",
    pattern: /emperatriz/gi,
  },
  {
    name: "Calzado",
    pattern: /calzado/gi,
  },
  {
    name: "Diamir",
    pattern: /diamir/gi,
  },
  {
    name: "Carcar",
    pattern: /carcar/gi,
  },
  {
    name: "Dantza",
    pattern: /dantza/gi,
  },
  {
    name: "Alsuir",
    pattern: /alsuir/gi,
  },
  {
    name: "Medisalad",
    pattern: /medisalad/gi,
  },
  {
    name: "Delicias de Dia",
    pattern: /delicias\sde\sdia/gi,
  },
  {
    name: "Bujanda",
    pattern: /bujanda/gi,
  },
  {
    name: "Casagrande",
    pattern: /casagrande/gi,
  },
  {
    name: "Gigante Verde",
    pattern: /gigante\sverde/gi,
  },
  {
    name: "Patatas Unidas",
    pattern: /patatas\sunidas/gi,
  },
  {
    name: "Cremlux",
    pattern: /cremlux/gi,
  },
  {
    name: "Suquipa",
    pattern: /suquipa/gi,
  },
  {
    name: "Aneto",
    pattern: /aneto/gi,
  },
  {
    name: "Itsu",
    pattern: /itsu/gi,
  },
  {
    name: "Iroha",
    pattern: /iroha/gi,
  },
  {
    name: "Kinesia",
    pattern: /kinesia/gi,
  },
  {
    name: "Iber",
    pattern: /gel de ducha avena botella/gi,
  },
  {
    name: "Moussel",
    pattern: /moussel/gi,
  },
  {
    name: "Kinesia",
    pattern: /kinesia/gi,
  },
  {
    name: "Air-Val",
    pattern: /gel de ducha y champú (?:spiderman|my unicorn)/gi,
  },
  {
    name: "Hidrogenesse",
    pattern: /hidrogenesse/gi,
  },
  {
    name: "Alba",
    pattern: /alba(?:\s|^)/gi,
  },
  {
    name: "Morelli",
    pattern: /morelli/gi,
  },
  {
    name: "Sulmare",
    pattern: /sulmare/gi,
  },
  {
    name: "Minigrill",
    pattern: /minigrill/gi,
  },
  {
    name: "Wasa",
    pattern: /wasa/gi,
  },
  {
    name: "Bachman",
    pattern: /bachman/gi,
  },
  {
    name: "Galbusera",
    pattern: /galbusera/gi,
  },
  {
    name: "Kleenex",
    pattern: /kleenex/gi,
  },
  {
    name: "Scottex",
    pattern: /scottex/gi,
  },
  {
    name: "Clean&Soft",
    pattern: /c&s|clean&soft/gi,
  },
  {
    name: "Colhogar",
    pattern: /colhogar/gi,
  },
  {
    name: "Foxy",
    pattern: /foxy/gi,
  },
  {
    name: "Les Fans",
    pattern: /les\sfans/gi,
  },
  {
    name: "Suavecel",
    pattern: /suavecel/gi,
  },
  {
    name: "Suaveceina",
    pattern: /suaveceina/gi,
  },
  {
    name: "Lord",
    pattern: /(?:\s|^)lord/gi,
  },
  {
    name: "Nupik",
    pattern: /pack\s50\sservilletas\s40\s?x\s?40/gi,
  },
  {
    name: "Marina Alta",
    pattern: /marina\salta/gi,
  },
  {
    name: "Indómito",
    pattern: /indómito/gi,
  },
  {
    name: "Pazo de Orantes",
    pattern: /pazo\sde\sorantes/gi,
  },
  {
    name: "Finca La Malcriada",
    pattern: /finca\sla\smalcriada/gi,
  },
  {
    name: "Ponte Tamuxe",
    pattern: /ponte\stamuxe/gi,
  },
  {
    name: "Castelo de Moinhos",
    pattern: /castelo\sde\smoinhos/gi,
  },
  {
    name: "Ponce de Albayda",
    pattern: /ponce\sde\salbayda/gi,
  },
  {
    name: "Condado de Teón",
    pattern: /condado\sde\steón/gi,
  },
  {
    name: "El Pescaito",
    pattern: /el\spescaito/gi,
  },
  {
    name: "Allegretto Alba",
    pattern: /allegretto\salba/gi,
  },
  {
    name: "Real Tesoro",
    pattern: /real\stesoro/gi,
  },
  {
    name: "Mig Segle",
    pattern: /mig\ssegle/gi,
  },
  {
    name: "Corredera",
    pattern: /corredera/gi,
  },
  {
    name: "Castillo de Salobreña",
    pattern: /castillo\sde\ssalobreña/gi,
  },
  {
    name: "Piccolo Giovanni",
    pattern: /piccolo\sgiovanni/gi,
  },
  {
    name: "DulZ.Ze",
    pattern: /dulz\.ze/gi,
  },
  {
    name: "Peñascal",
    pattern: /peñascal/gi,
  },
  {
    name: "San Roque",
    pattern: /san\sroque/gi,
  },
  {
    name: "Anitin",
    pattern: /anitin/gi,
  },
  {
    name: "Juver",
    pattern: /juver|(?!levite|sensación)(?:\s|^)bebida refrescante de/gi,
  },
  {
    name: "Lambda",
    pattern: /lambda/gi,
  },
  {
    name: "Natural Bites",
    pattern: /natural\sbites/gi,
  },
  {
    name: "Capricho",
    pattern: /(?<!pescanova\s)capricho/gi,
  },
  {
    name: "Beltrán",
    pattern: /beltrán/gi,
  },
  {
    name: "Manzanares",
    pattern: /manzanares/gi,
  },
  {
    name: "Mister Corn",
    pattern: /mister\s?corn/gi,
  },
  {
    name: "Tenso Pro",
    pattern: /tenso\spro/gi,
  },
  {
    name: "Sanicentro",
    pattern: /sanicentro/gi,
  },
  {
    name: "Cristasol",
    pattern: /cristasol/gi,
  },
  {
    name: "Ecocleox",
    pattern: /ecocleox/gi,
  },
  {
    name: "Hechicera",
    pattern: /hechicera/gi,
  },
];

export default Beauty;
