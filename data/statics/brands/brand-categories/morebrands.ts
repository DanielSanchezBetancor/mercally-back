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
    pattern: /sorianatural/gi,
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
    name:"Bichi-Ho",
    pattern: /bichi-ho/gi,
  },
  {
    name:"Relec",
    pattern: /relec/gi,
  },
  {
    name:"Paranix",
    pattern: /paranix/gi,
  },
  {
    name:"Newell",
    pattern: /newell/gi,
  },
  {
    name:"Byphasee",
    pattern: /byphasee/gi,
  },
  {
    name:"Dermocracy",
    pattern: /dermocracy/gi,
  },
  {
    name:"Brüggen",
    pattern: /brüggen/gi,
  },
  {
    name:"Belladieta",
    pattern: /belladieta/gi,
  },
  {
    name:"Los Ibéricos",
    pattern: /los ibéricos/gi,
  },
  {
    name:"La Selva",
    pattern: /la selva/gi,
  },
  {
    name:"Soroa",
    pattern: /soroa/gi,
  },
  {
    name:"Can Duran",
    pattern: /can\sduran/gi,
  },
  {
    name:"Embutidos España",
    pattern: /emb\.\sespaña/gi,
  },
  {
    name:"Gemi",
    pattern: /gemi/gi,
  },
  {
    name:"Ibher",
    pattern: /ibher/gi,
  },
  {
    name:"Entrecaños",
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
];

export default MoreBrands;