import { TBrand } from "../../../types/brand";

const MoreBrands: TBrand[] = [
  {
    name: "El Dulze",
    pattern: /el\sdulze/gi,
  },
  {
    name: "Huercasa",
    pattern: /huercasa/gi,
  },
  {
    name: "Surinver",
    pattern: /surinver/gi,
  },
  {
    name: "Maybelline",
    pattern: /maybelline/gi,
  },
  {
    name: "Pharmadoct",
    pattern: /pharmadoct/gi,
  },
  {
    name: "Gio Giovanny",
    pattern: /gio\sgiovanny/gi,
  },
  {
    name: "Carmex",
    pattern: /carmex/gi,
  },
  {
    name: "Cutex",
    pattern: /cutex/gi,
  },
  {
    name: "Mystique",
    pattern: /mystique/gi,
  },
  {
    name: "Ebogón",
    pattern: /ebog[oó]n/gi,
  },
  {
    name: "Alibérico",
    pattern: /alib[eé]rico/gi,
  },
  {
    name: "Encendido",
    pattern: /encendido/gi,
  },
  {
    name: "Hisc",
    pattern: /hisc/gi,
  },
  {
    name: "Mionetto",
    pattern: /mionetto/gi,
  },
  {
    name: "Oinoz",
    pattern: /oinoz/gi,
  },
  {
    name: "Azevedo",
    pattern: /azevedo/gi,
  },
  {
    name: "Jardín Real",
    pattern: /jard[ií]n\sreal/gi,
  },
  {
    name: "Castelfino",
    pattern: /castelfino/gi,
  },
  {
    name: "Pazo",
    pattern: /pazo/gi,
  },
  {
    name: "Viña Esmeralda",
    pattern: /v\.\sesmeralda/gi,
  },
  {
    name: "Pago de Tharsys",
    pattern: /p\.de\stharsys/gi,
  },
  {
    name: "Bahía Denia",
    pattern: /bah[ií]a\sd[eé]nia/gi,
  },
  {
    name: "Verdes Castros",
    pattern: /verdes\scastr\.?/gi,
  },
  {
    name: "Ovación",
    pattern: /ovaci[oó]n/gi,
  },
  {
    name: "Moare",
    pattern: /moare/gi,
  },
  {
    name: "Fizzy",
    pattern: /fizzy/gi,
  },
  {
    name: "Alijares",
    pattern: /alijares/gi,
  },
  {
    name: "Val do Inferno",
    pattern: /v\.d\.inferno/gi,
  },
  {
    name: "Turbio",
    pattern: /turbio/gi,
  },
  {
    name: "Abilleira",
    pattern: /abilleira/gi,
  },
  {
    name: "Castillo Gui",
    pattern: /castillo\sgui/gi,
  },
  {
    name: "Vega Marinera",
    pattern: /v\.\smarinera/gi,
  },
  {
    name: "La Obejita Verde",
    pattern: /obejita\sverd/gi,
  },
  {
    name: "Perro Verde",
    pattern: /perro\sverde/gi,
  },
  {
    name: "Ariño",
    pattern: /(?:\s|^)ariño/gi,
  },
  {
    name: "Mara Martín",
    pattern: /mara\smart[ií]n/gi,
  },
  {
    name: "Lolo",
    pattern: /lolo/gi,
  },
  {
    name: "Galizeus",
    pattern: /galizeus/gi,
  },
  {
    name: "Canallas",
    pattern: /canallas/gi,
  },
  {
    name: "I Love Italy",
    pattern: /i\slove\sitaly/gi,
  },
  {
    name: "Marqués de Caceres",
    pattern: /(?:mq\.|marq\.|marqués\sde\s)caceres/gi,
  },
  {
    name: "Frutae",
    pattern: /frutae/gi,
  },
  {
    name: "Bahamas",
    pattern: /bahamas/gi,
  },
  {
    name: "Roler",
    pattern: /roler/gi,
  },
  {
    name: "Naturavia",
    pattern: /naturavia/gi,
  },
  {
    name: "Mari Paz",
    pattern: /mari\spaz/gi,
  },
  {
    name: "Embuena",
    pattern: /embuena/gi,
  },
  {
    name: "Carnes Frescas",
    pattern: /carnes\sfresc/gi,
  },
  {
    name: "Fergonvi",
    pattern: /fergonvi/gi,
  },
  {
    name: "Finura",
    pattern: /finura/gi,
  },
  {
    name: "Dalicia",
    pattern: /dalicia/gi,
  },
  {
    name: "Pujante",
    pattern: /pujante/gi,
  },
  {
    name: "Artesal",
    pattern: /artesal/gi,
  },
  {
    name: "Mafrica",
    pattern: /mafrica/gi,
  },
  {
    name: "Miguel Vergara",
    pattern: /m\.\svergara/gi,
  },
  {
    name: "Señor Pollo",
    pattern: /señor\spollo/gi,
  },
  {
    name: "Polgri",
    pattern: /polgri/gi,
  },
  {
    name: "Pamies",
    pattern: /pamies/gi,
  },
  {
    name: "Maya",
    pattern: /maya|cepillo/gi,
    priority: 2,
  },
  {
    name: "Airless",
    pattern: /airless/gi,
  },
  {
    name: "Feel Free",
    pattern: /feel\sfree/gi,
  },
  {
    name: "Caravan",
    pattern: /caravan/gi,
  },
  {
    name: "Victorio & Lucchino",
    pattern: /v&l/gi,
  },
  {
    name: "Pacha Ibiza",
    pattern: /pacha\sibiza/gi,
  },
  {
    name: "Shakira",
    pattern: /shakira/gi,
  },
  {
    name: "Paula Echevarria",
    pattern: /p\.echevarria|paula/gi,
  },
  {
    name: "Azur de Puig",
    pattern: /(?:azur\ de\s)?puig/gi,
  },
  {
    name: "Crossmen",
    pattern: /crossmen/gi,
  },
  {
    name: "Chanson Deau",
    pattern: /chanson\ deau/gi,
  },
  {
    name: "Rebel",
    pattern: /rebel/gi,
  },
  {
    name: "Disney",
    pattern: /disney/gi,
  },
  {
    name: "Laiseven",
    pattern: /laiseven/gi,
  },
  {
    name: "Benetton",
    pattern: /benetton/gi,
  },
  {
    name: "Lady Secret",
    pattern: /lady secret/gi,
  },
  {
    name: "Minions",
    pattern: /minions/gi,
  },
  {
    name: "Pret a Porte",
    pattern: /pret\sa\sporter/gi,
  },
  {
    name: "Batman",
    pattern: /batman/gi,
  },
  {
    name: "Lorenay",
    pattern: /lorenay/gi,
  },
  {
    name: "Salseo",
    pattern: /salseo/gi,
  },
  {
    name: "Go-Tang",
    pattern: /go-tang/gi,
  },
  {
    name: "Vega Cáceres",
    pattern: /vega\scaceres/gi,
  },
  {
    name: "El Avión",
    pattern: /el\sav[ií]on/gi,
  },
  {
    name: "Costa",
    pattern: /costa/gi,
  },
  {
    name: "Profiden",
    pattern: /profiden/gi,
  },
  {
    name: "409",
    pattern: /409/gi,
  },
  {
    name: "Cepa 21",
    pattern: /cepa\s21|aalto/gi,
  },
  {
    name: "Alión",
    pattern: /ali[oó]n/gi,
  },
  {
    name: "Zuazo Gastón",
    pattern: /zuazo\sgast[oó]n/gi,
  },
  {
    name: "Colegiata",
    pattern: /colegiata/gi,
  },
  {
    name: "Paspalitos",
    pattern: /paspalitos/gi,
  },
  {
    name: "Hypatia",
    pattern: /hypatia/gi,
  },
  {
    name: "Arteso Clarete",
    pattern: /arteso clarete/gi,
  },
  {
    name: "De Oro",
    pattern: /de\soro/gi,
  },
  {
    name: "Saborea",
    pattern: /saborea/gi,
  },
  {
    name: "Vital",
    pattern: /vital(?:\s|$)/gi,
  },
  {
    name: "Dunany",
    pattern: /dunany/gi,
  },
  {
    name: "Brooklyn",
    pattern: /(?<!alitas|ensalada)(?:\s|^)brooklyn/gi,
  },
  {
    name: "Selection Chef",
    pattern: /select\schef|foodvac/gi,
  },
  {
    name: "Sorianatural",
    pattern: /soria\s?natural/gi,
  },
  {
    name: "Bo de Debo",
    pattern: /(?:bo\s)?de\sdebo/gi,
  },
  {
    name: "Carnes Félix",
    pattern: /carnes\sf[eé]lix/gi,
  },
  {
    name: "Granja Gourmet",
    pattern: /granja\sgourm/gi,
  },
  {
    name: "A Tu Gusto",
    pattern: /a\stu\sgusto/gi,
  },
  {
    name: "Vianature",
    pattern: /vianature/gi,
  },
  {
    name: "Oust",
    pattern: /oust/gi,
  },
  {
    name: "La Levantina",
    pattern: /la\slevantina/gi,
  },
  {
    name: "Myhome",
    pattern: /myhome/gi,
  },
  {
    name: "Laboratorio Sys",
    pattern: /humidificador blanco brumizador/gi,
  },
  {
    name: "Splash",
    pattern: /splash/gi,
  },
  {
    name: "Picamos",
    pattern: /picamos/gi,
  },
  {
    name: "Autan",
    pattern: /autan/gi,
  },
  {
    name: "KH-7",
    pattern: /kh-7|desic/gi,
  },
  {
    name: "Efi-Protect",
    pattern: /efi-protect/gi,
  },
  {
    name: "Bichi-Ho",
    pattern: /bichi-ho/gi,
  },
  {
    name: "Relec",
    pattern: /relec/gi,
  },
  {
    name: "Paranix",
    pattern: /paranix/gi,
  },
  {
    name: "Newell",
    pattern: /newell/gi,
  },
  {
    name: "Byphasee",
    pattern: /byphasee/gi,
  },
  {
    name: "Dermocracy",
    pattern: /dermocracy/gi,
  },
  {
    name: "Brüggen",
    pattern: /brüggen/gi,
  },
  {
    name: "Belladieta",
    pattern: /belladieta/gi,
  },
  {
    name: "Los Ibéricos",
    pattern: /los ibéricos/gi,
  },
  {
    name: "La Selva",
    pattern: /la selva/gi,
  },
  {
    name: "Soroa",
    pattern: /soroa/gi,
  },
  {
    name: "Can Duran",
    pattern: /can\sduran/gi,
  },
  {
    name: "Embutidos España",
    pattern: /emb\.\sespaña/gi,
  },
  {
    name: "Gemi",
    pattern: /gemi/gi,
  },
  {
    name: "Ibher",
    pattern: /ibher/gi,
  },
  {
    name: "Entrecaños",
    pattern: /entrecaños/gi,
  },
  {
    name: "Jamones Vallejo",
    pattern: /j\.vallejo/gi,
  },
  {
    name: "Casademont",
    pattern: /casademont/gi,
  },
  {
    name: "Better Balance",
    pattern: /bett\.balance/gi,
  },
  {
    name: "Aguinaga",
    pattern: /aguinaga/gi,
  },
  {
    name: "Boreal",
    pattern: /boreal/gi,
  },
  {
    name: "Marines",
    pattern: /marines/gi,
  },
  {
    name: "Bruimar",
    pattern: /bruimar/gi,
  },
  {
    name: "Embumar",
    pattern: /embumar/gi,
  },
  {
    name: "Grand Cantábrico",
    pattern: /g\.cantábrico/gi,
  },
  {
    name: "Angolevante",
    pattern: /angolevante/gi,
  },
  {
    name: "Revuelta",
    pattern: /revuelta/gi,
  },
  {
    name: "La Laredana",
    pattern: /la\slaredana/gi,
  },
  {
    name: "Marina Best",
    pattern: /marina\best/gi,
  },
  {
    name: "Spherika",
    pattern: /spherika/gi,
  },
  {
    name: "Caprimar",
    pattern: /caprimar/gi,
  },
  {
    name: "Dimar",
    pattern: /dimar/gi,
  },
  {
    name: "Amatsu",
    pattern: /amatsu/gi,
  },
  {
    name: "Freskibo",
    pattern: /freskibo/gi,
  },
  {
    name: "Albamonte",
    pattern: /albamonte/gi,
  },
  {
    name: "Hegemonia Mayor",
    pattern: /hegemonia\smayor/gi,
  },
  {
    name: "Cobos",
    pattern: /cobos/gi,
  },
  {
    name: "Valdespino",
    pattern: /valdespino/gi,
  },
  {
    name: "Dos Pasas",
    pattern: /dos\spasas/gi,
  },
  {
    name: "La Gitana",
    pattern: /la\sgitana/gi,
  },
  {
    name: "Orgullo",
    pattern: /orgullo/gi,
  },
  {
    name: "Solera",
    pattern: /solera/gi,
  },
  {
    name: "Dry Sack",
    pattern: /dry\ssack/gi,
  },
  {
    name: "Artesano",
    pattern: /artesano/gi,
  },
  {
    name: "Barañano",
    pattern: /barañano/gi,
  },
  {
    name: "Peñagoloso",
    pattern: /peñagoloso/gi,
  },
  {
    name: "Ochoa",
    pattern: /ochoa/gi,
  },
  {
    name: "Mari Gorri",
    pattern: /mari\sgorri/gi,
  },
  {
    name: "Angostura",
    pattern: /angostura/gi,
  },
  {
    name: "Cruz Ruby",
    pattern: /cruz\sruby/gi,
  },
  {
    name: "Heredad de Hidalgo",
    pattern: /heredad\ de\ hidalgo/gi,
  },
  {
    name: "Alfonso",
    pattern: /alfonso(?!\si)/gi,
  },
  {
    name: "Astobiza",
    pattern: /astobiza/gi,
  },
  {
    name: "Mari Zuri",
    pattern: /mari\szuri/gi,
  },
  {
    name: "Montecristo",
    pattern: /montecristo/gi,
  },
  {
    name: "Noilly Prat",
    pattern: /noilly\sprat/gi,
  },
  {
    name: "Txurrut",
    pattern: /txurrut/gi,
  },
  {
    name: "Old Porter",
    pattern: /old\sporter/gi,
  },
  {
    name: "Sandeman",
    pattern: /sandeman/gi,
  },
  {
    name: "Garvey",
    pattern: /garvey/gi,
  },
  {
    name: "La Copa",
    pattern: /la\scopa/gi,
  },
  {
    name: "Los Amigos",
    pattern: /los\samigos/gi,
  },
  {
    name: "Señorío de Sarria",
    pattern: /señor[ií]o de sarria/gi,
  },
  {
    name: "Bandeira",
    pattern: /bandeira/gi,
  },
  {
    name: "Fino Quinta",
    pattern: /fino quinta/gi,
  },
  {
    name: "Uva D'Or",
    pattern: /uva\sd'or/gi,
  },
  {
    name: "Castillo de Peñíscola",
    pattern: /castillo de peñ[ií]scola/gi,
  },
  {
    name: "Viña AB",
    pattern: /viña ab/gi,
  },
  {
    name: "Camilo Castilla",
    pattern: /camilo castilla/gi,
  },
  {
    name: "Sabanindas",
    pattern: /sabanindas/gi,
  },
  {
    name: "Eroski",
    pattern: /eroski/gi,
  },
  {
    name: "Addermis",
    pattern: /addermis/gi,
  },
  {
    name: "Nutriben",
    pattern: /nutriben/gi,
  },
  {
    name: "Almirón",
    pattern: /almir[oó]n/gi,
  },
  {
    name: "Blemil",
    pattern: /blemil/gi,
  },
  {
    name: "Suavinex",
    pattern: /suavinex/gi,
  },
  {
    name: "Mustela",
    pattern: /mustela/gi,
  },
  {
    name: "Senti2",
    pattern: /senti2/gi,
  },
  {
    name: "Isdin",
    pattern: /(?:\s|^)isdin|Gel crema Fotoprotector FP50/gi,
  },
  {
    name: "Blevit",
    pattern: /blevit/gi,
  },
  {
    name: "Narhinel",
    pattern: /narhinel/gi,
  },
  {
    name: "Medela",
    pattern: /medela/gi,
  },
  {
    name: "Talquistina",
    pattern: /talquistina/gi,
  },
  {
    name: "Klorane",
    pattern: /klorane/gi,
  },
  {
    name: "Avent",
    pattern: /avent/gi,
  },
  {
    name: "Chicco",
    pattern: /chicco/gi,
  },
  {
    name: "Polar",
    pattern: /polar/gi,
  },
  {
    name: "Ozturk",
    pattern: /ozturk/gi,
  },
  {
    name: "Croqueta y Presumida",
    pattern: /croqueta y presumida/gi,
  },
  {
    name: "Barrenetxe",
    pattern: /barrenetxe/gi,
  },
  {
    name: "La Sirena",
    pattern: /la\ssirena/gi,
  },
  {
    name: "Lacturale",
    pattern: /lacturale/gi,
  },
  {
    name: "Jordans",
    pattern: /jordans/gi,
  },
  {
    name: "Alcampo",
    pattern: /producto\s(?:econ[óo]mico\s)?alcampo|alcampo (?:ecol[óo]gico|gourmet|cultivamos lo bueno)|auchan/gi,
  },
  {
    name: "Elgorriaga",
    pattern: /elgorriaga/gi,
  },
  {
    name: "Rume",
    pattern: /rume/gi,
  },
  {
    name: "Polen",
    pattern: /polen(?:\s|$)/gi,
  },
  {
    name: "Diat Radisson",
    pattern: /diat\sradisson/gi,
  },
  {
    name: "Tejedor",
    pattern: /tejedor/gi,
  },
  {
    name: "Pick Up",
    pattern: /pick\sup/gi,
  },
  {
    name: "Festival",
    pattern: /festival/gi,
  },
  {
    name: "Birba",
    pattern: /birba/gi,
  },
  {
    name: "Zü",
    pattern: /zü/gi,
  },
  {
    name: "Petritegi",
    pattern: /petritegi/gi,
  },
  {
    name: "True Fruits",
    pattern: /true\sfruits/gi,
  },
  {
    name: "Ready",
    pattern: /ready/gi,
  },
  {
    name: "Parogencyl",
    pattern: /parogencyl/gi,
  },
  {
    name: "Pilexil",
    pattern: /pilexil/gi,
  },
  {
    name: "Clean & Lens",
    pattern: /clean\s?&\s?lens/gi,
  },
  {
    name: "ZZZQuil",
    pattern: /zzzquil/gi,
  },
  {
    name: "Vitis",
    pattern: /vitis/gi,
  },
  {
    name: "Pharamset",
    pattern: /pharamset/gi,
  },
  {
    name: "Ureadin",
    pattern: /ureadin/gi,
  },
  {
    name: "Neutrógena",
    pattern: /neutr[oó]gena/gi,
  },
  {
    name: "Colnatur",
    pattern: /colnatur/gi,
  },
  {
    name: "Avéne",
    pattern: /av[éëè]ne/gi,
  },
  {
    name: "Roha",
    pattern: /roha/gi,
  },
  {
    name: "Ensure",
    pattern: /ensure/gi,
  },
  {
    name: "La Roche Posay",
    pattern: /la\sroche\sp[óo]say/gi,
  },
  {
    name: "Bexident",
    pattern: /bexident/gi,
  },
  {
    name: "Cerave",
    pattern: /cerave/gi,
  },
  {
    name: "Oralkin",
    pattern: /oralkin/gi,
  },
  {
    name: "Germisdin",
    pattern: /germisdin/gi,
  },
  {
    name: "Inibisa",
    pattern: /inibisa/gi,
  },
  {
    name: "Devor-Olor",
    pattern: /devor-olor/gi,
  },
  {
    name: "La Roche Posay",
    pattern: /lrp\santhelios/gi,
  },
  {
    name: "Nutrivigor",
    pattern: /nutrivigor/gi,
  },
  {
    name: "Multicentrum",
    pattern: /multicentrum/gi,
  },
  {
    name: "Ana Maria Lajusticia",
    pattern: /(?:ana|a\.)\s?(?:maria|m\.)?\s+lajusticia/gi,
  },
  {
    name: "La Gavilla",
    pattern: /la\sgavilla/gi,
  },
  {
    name: "Andrés",
    pattern: /andr[eé]s/gi,
  },
  {
    name: "Crifill",
    pattern: /crifill/gi,
  },
  {
    name: "Veritas",
    pattern: /veritas/gi,
  },
  {
    name: "Barnhouse",
    pattern: /barnhouse/gi,
  },
  {
    name: "Equimercado",
    pattern: /equimercado/gi,
  },
  {
    name: "Grillon D'Or",
    pattern: /grillon\sd'or/gi,
  },
  {
    name: "Moulin Piver",
    pattern: /moulin\spiver/gi,
  },
  {
    name: "Wikana",
    pattern: /wikana/gi,
  },
  {
    name: "Lima",
    pattern: /instant[aá]neo\slima/gi,
  },
  {
    name: "Abellán",
    pattern: /abell[áa]n/gi,
  },
  {
    name: "Gozo Gozoa",
    pattern: /gozo\sgozoa/gi,
  },
  {
    name: "Gure Eztia",
    pattern: /gure\seztia/gi,
  },
  {
    name: "Pedro Luis",
    pattern: /pedro\sluis/gi,
  },
  {
    name: "Coop. Agrícola",
    pattern: /coop\.\sagricola/gi,
  },
  {
    name: "Viña Solana",
    pattern: /viña\ssolana/gi,
  },
  {
    name: "Coto Elosegi",
    pattern: /coto\selosegi/gi,
  },
  {
    name: "Don Paulo",
    pattern: /don\spaulo/gi,
  },
  {
    name: "Vegas del Rivilla",
    pattern: /vegas\sdel\srivilla/gi,
  },
  {
    name: "Coyanza",
    pattern: /coyanza/gi,
  },
  {
    name: "Sabino",
    pattern: /sabino/gi,
  },
  {
    name: "Don Hugo",
    pattern: /don\shugo/gi,
  },
  {
    name: "Cresta Rosado",
    pattern: /cresta\rosado/gi,
  },
  {
    name: "Vite Selvate",
    pattern: /vite\sselvate/gi,
  },
  {
    name: "Pleno",
    pattern: /pleno/gi,
  },
  {
    name: "Echave",
    pattern: /echave/gi,
  },
  {
    name: "Sant'Orsola",
    pattern: /s\.\sorsola/gi,
  },
  {
    name: "Arnalte",
    pattern: /arnalte/gi,
  },
  {
    name: "Solar de Estraunza",
    pattern: /solar de estraunza/gi,
  },
  {
    name: "Mendiondo",
    pattern: /mendiondo/gi,
  },
  {
    name: "Inurrieta",
    pattern: /inurrieta/gi,
  },
  {
    name: "Eguren Ugarte",
    pattern: /eguren ugarte/gi,
  },
  {
    name: "Sadeyes",
    pattern: /sadeyes/gi,
  },
  {
    name: "Tierra Leal",
    pattern: /tierra leal/gi,
  },
  {
    name: "Amats",
    pattern: /amats/gi,
  },
  {
    name: "Viña del Mar",
    pattern: /viña del mar/gi,
  },
  {
    name: "Viñas de Anna",
    pattern: /viñas de anna/gi,
  },
  {
    name: "Las Campanas",
    pattern: /las campanas/gi,
  },
  {
    name: "De Casta",
    pattern: /de casta/gi,
  },
  {
    name: "Principe de Viana",
    pattern: /p\. de viana/gi,
  },
  {
    name: "Valdelosfrailes",
    pattern: /valdelosfrailes/gi,
  },
  {
    name: "Viña Tito",
    pattern: /viña tito/gi,
  },
  {
    name: "Vega Cubillas",
    pattern: /vega cubillas/gi,
  },
  {
    name: "Irache",
    pattern: /irache/gi,
  },
  {
    name: "Caldirola",
    pattern: /caldirola/gi,
  },
  {
    name: "Val Condes",
    pattern: /val condes/gi,
  },
  {
    name: "Monte Ory",
    pattern: /monte ory/gi,
  },
  {
    name: "Win",
    pattern: /win/gi,
  },
  {
    name: "Castillo San Javier",
    pattern: /castillo san javier/gi,
  },
];

export default MoreBrands;
