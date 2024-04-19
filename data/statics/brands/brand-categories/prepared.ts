import { TBrand } from "../../../types/brand";

// Reorganize
const PreparedBrands: TBrand[] = [
  {
    name: "L'Illa",
    pattern: /(?:\s|^)l'?illa/gi,
  },
  {
    name: "Iberia",
    pattern: /iberia/gi,
  },
  {
    name: "Norit",
    pattern: /norit/gi,
  },
  {
    name: "Botanical origin",
    pattern: /botanical origin/gi,
  },
  {
    name: "Elena",
    pattern: /elena/gi,
  },
  {
    name: "Flota",
    pattern: /flota/gi,
  },
  {
    name: "Luzil",
    pattern: /luzil/gi,
  },
  {
    name: "Micolor",
    pattern: /micolor/gi,
  },
  {
    name: "Perlan",
    pattern: /perlan/gi,
  },
  {
    name: "Skip",
    pattern: /skip/gi,
  },
  {
    name: "Wipp",
    pattern: /wipp/gi,
  },
  {
    name: "Puntomatic",
    pattern: /puntomatic/gi,
  },
  {
    name: "Polenghi",
    pattern: /polenghi/gi,
  },
  {
    name: "Solimon",
    pattern: /solimon/gi,
  },
  {
    name: "La Barca",
    pattern: /la barca/gi,
  },
  {
    name: "Amalur",
    pattern: /amalur/gi,
  },
  {
    name: "Ducros",
    pattern: /ducros/gi,
  },
  {
    name: "Fortaleza",
    pattern: /fortaleza/gi,
  },
  {
    name: "Mccormick",
    pattern: /mc\s?cormick/gi,
  },
  {
    name: "Las Hermanas",
    pattern: /las hermanas/gi,
  },
  {
    name: "Safrina",
    pattern: /safrina/gi,
  },
  {
    name: "Trevijano",
    pattern: /trevijano/gi,
  },
  {
    name: "Zelva",
    pattern: /zelva/gi,
  },
  {
    name: "Janubio",
    pattern: /janubio/gi,
  },
  {
    name: "Más que dos",
    pattern: /más que dos/gi,
  },
  {
    name: "Roca",
    pattern: /roca\s/gi,
  },
  {
    name: "La Comadre",
    pattern: /la comadre/gi,
  },
  {
    name: "Maggie",
    pattern: /(?:\s|^)maggie?/gi,
  },
  {
    name: "Ponti",
    pattern: /ponti/gi,
  },
  {
    name: "Galileo",
    pattern: /galileo/gi,
  },
  {
    name: "Beefeater",
    pattern: /beefeater/gi,
  },
  {
    name: "Brockmans",
    pattern: /brockmans/gi,
  },
  {
    name: "Bulldog",
    pattern: /bulldog/gi,
  },
  {
    name: "Legendario",
    pattern: /legendario/gi,
  },
  {
    name: "Santa Cruz",
    pattern: /santa cruz/gi,
  },
  {
    name: "Hero",
    pattern: /[\^\s]hero[\$\s]/gi,
  },
  {
    name: "Hero Baby",
    pattern: /(?:\s|^)hero(?:\sbaby)?(?:\s|$)/gi,
  },
  {
    name: "Puleva",
    pattern: /puleva(?:\s|$)(?!peques)/gi,
  },
  {
    name: "Puleva Peques",
    pattern: /puleva peques/gi,
  },
  {
    name: "Be Plus",
    pattern: /be plus/gi,
  },
  {
    name: "Beech nut",
    pattern: /beech nut/gi,
  },
  {
    name: "Gerber",
    pattern: /gerber/gi,
  },
  {
    name: "Pascual",
    pattern: /pascual/gi,
  },
  {
    name: "Smileat",
    pattern: /smileat/gi,
  },
  {
    name: "Big Ben",
    pattern: /big ben/gi,
  },
  {
    name: "Boom",
    pattern: /(?:\s|^)boom(?:\s|$)/gi,
  },
  {
    name: "Bounty",
    pattern: /bounty/gi,
  },
  {
    name: "Kinder",
    pattern: /kinder/gi,
  },
  {
    name: "Lacasa",
    pattern: /lacasa|patrulla canina/gi,
  },
  {
    name: "M&M",
    pattern: /m&m/gi,
  },
  {
    name: "Maltesers",
    pattern: /maltesers/gi,
  },
  {
    name: "Mars",
    pattern: /mars(?:\s|$)/gi,
  },
  {
    name: "Mikado",
    pattern: /mikado/gi,
  },
  {
    name: "Milky Way",
    pattern: /milky way/gi,
  },
  {
    name: "Pecosos",
    pattern: /pecosos/gi,
  },
  {
    name: "Peppa Pig",
    pattern: /pepp?a pig/gi,
  },
  {
    name: "Smarties",
    pattern: /smarties/gi,
  },
  {
    name: "Snickers",
    pattern: /snickers/gi,
  },
  {
    name: "Twix",
    pattern: /twix/gi,
  },
  {
    name: "Ritter Sport",
    pattern: /ritter sport/gi,
  },
  {
    name: "London",
    pattern: /^london/gi,
  },
  {
    name: "Mariebel",
    pattern: /mariebel/gi,
  },
  {
    name: "Obradoiro",
    pattern: /obradoiro/gi,
  },
  {
    name: "Ensalandia",
    pattern: /ensalandia/gi,
  },
  {
    name: "Popp",
    pattern: /popp/gi,
  },
  {
    name: "Pom'bel",
    pattern: /pom'?bel/gi,
  },
  {
    name: "Bens Original",
    pattern: /bens original/gi,
  },
  {
    name: "Bonnatura",
    pattern: /bonnatura/gi,
  },
  {
    name: "Casa Más",
    pattern: /casa m[aá]s/gi,
  },
  {
    name: "Fatti Bene",
    pattern: /fatti bene/gi,
  },
  {
    name: "Panna Pomodoro",
    pattern: /panna[\s&]pomodoro/gi,
  },
  {
    name: "Artesana",
    pattern: /^artesana/gi,
  },
  {
    name: "Revulgreen",
    pattern: /revulgreen/gi,
  },
  {
    name: "Bonchef",
    pattern: /bonchef/gi,
  },
  {
    name: "Campo Rico",
    pattern: /campo rico/gi,
  },
  {
    name: "Gesprocarn",
    pattern: /gesprocarn/gi,
  },
  {
    name: "Go Vegg",
    pattern: /go vegg/gi,
  },
  {
    name: "O'lysee",
    pattern: /o'?lysee/gi,
  },
  {
    name: "Ultrex",
    pattern: /ultrex/gi,
  },
  {
    name: "Eidetesa",
    pattern: /eidetesa/gi,
  },
  {
    name: "Monells",
    pattern: /monells/gi,
  },
  {
    name: "Moltex",
    pattern: /moltex/gi,
  },
  {
    name: "La Toja",
    pattern: /la toja/gi,
  },
  {
    name: "Lea",
    pattern: /(?:\s|^)lea(?:\s|$)/gi,
  },
  {
    name: "Wilkinson",
    pattern: /wilkinson/gi,
  },
  {
    name: "Old Spice",
    pattern: /old spice/gi,
  },
  {
    name: "Bic",
    pattern: /(?:\s|^)bic(?:\s|$)/gi,
  },
  {
    name: "Cocomi",
    pattern: /cocomi/gi,
  },
  {
    name: "El Cantero de Letur",
    pattern: /(?:el\s)?cantero(?:\sde)?\sletur/gi,
  },
  {
    name: "Naturlan",
    pattern: /nar?turlan/gi,
  },
  {
    name: "Lindahls",
    pattern: /lindahls/gi,
  },
  {
    name: "Royal Greenland",
    pattern: /royal greenland/gi,
  },
  {
    name: "El Sibarita",
    pattern: /el sibarita/gi,
  },
  {
    name: "Green Cuisine",
    pattern: /green cuisine?/gi,
  },
  {
    name: "Amura",
    pattern: /amura/gi,
  },
  {
    name: "Byly",
    pattern: /byly/gi,
  },
  {
    name: "Palmolive",
    pattern: /palmolive/gi,
  },
  {
    name: "Sanex",
    pattern: /sanex/gi,
  },
  {
    name: "Lactovit",
    pattern: /lactovit/gi,
  },
  {
    name: "Mum",
    pattern: /mum/gi,
  },
  {
    name: "Axe",
    pattern: /axe/gi,
  },
  {
    name: "Rexona",
    pattern: /rexona/gi,
  },
  {
    name: "Falke",
    pattern: /falke/gi,
  },
  {
    name: "Maredeus",
    pattern: /maredeus/gi,
  },
  {
    name: "Nortindal",
    pattern: /nortindal/gi,
  },
  {
    name: "Crabss",
    pattern: /crabss/gi,
  },
  {
    name: "Marcillat",
    pattern: /marcillat/gi,
  },
  {
    name: "Enterizo",
    pattern: /v\.enterizo/gi,
  },
  {
    name: "Barrica 88",
    pattern: /barrica 88/gi,
  },
  {
    name: "Vinitium",
    pattern: /vinitium/gi,
  },
  {
    name: "El Miracle",
    pattern: /el miracle/gi,
  },
  {
    name: "Guardianes",
    pattern: /guardianes/gi,
  },
  {
    name: "Hoya Cadenas",
    pattern: /hoya cadenas/gi,
  },
  {
    name: "Barón Turis",
    pattern: /(?:bar[oó]n\s)?turis/gi,
  },
  {
    name: "Monasterio Viñas",
    pattern: /(?:monasterio\s|monast\.)viñas/gi,
  },
  {
    name: "Roixela",
    pattern: /roixela/gi,
  },
  {
    name: "Viña Corba",
    pattern: /viña corba/gi,
  },
  {
    name: "Dehesas Viejas",
    pattern: /dehes\.viejas/gi,
  },
  {
    name: "Marqués de Verdellano",
    pattern: /m\.verdellano/gi,
  },
  {
    name: "Abadía Mercier",
    pattern: /a\.mercier/gi,
  },
  {
    name: "Juan de Juanes",
    pattern: /j\.\sde\sjuanes/gi,
  },
  {
    name: "Duque Nardos",
    pattern: /duque nardos/gi,
  },
  {
    name: "La Traca",
    pattern: /la traca/gi,
  },
  {
    name: "Carlades",
    pattern: /carlades/gi,
  },
  {
    name: "Pluvium",
    pattern: /pluvium/gi,
  },
  {
    name: "Flavium",
    pattern: /flavium/gi,
  },
  {
    name: "Viña Alcanta",
    pattern: /viña alcanta/gi,
  },
  {
    name: "Castillo de Covanegra",
    pattern: /c\.\scovanegra/gi,
  },
  {
    name: "Bautista Marti",
    pattern: /(?:bautis\.|b\.)marti/gi,
  },
  {
    name: "Viña Lerden",
    pattern: /viña lerden/gi,
  },
  {
    name: "Valdeoliva",
    pattern: /valdeoliva/gi,
  },
  {
    name: "Parque Real",
    pattern: /parque real/gi,
  },
  {
    name: "La Tremenda",
    pattern: /la tremenda/gi,
  },
  {
    name: "Castillo San Simón",
    pattern: /cast\.s\.simon/gi,
  },
  {
    name: "Dominiq de los Duques",
    pattern: /domn\.duques/gi,
  },
  {
    name: "Icono",
    pattern: /icono/gi,
  },
  {
    name: "Les Alcusses",
    pattern: /les alcusses/gi,
  },
  {
    name: "Martín Berdugo",
    pattern: /(?:martin\s|m\.)berdugo/gi,
  },
  {
    name: "Lopez Haro",
    pattern: /lopez haro/gi,
  },
  {
    name: "Arraez",
    pattern: /arraez/gi,
  },
  {
    name: "Sommos",
    pattern: /sommos/gi,
  },
  {
    name: "Castillo de Menara",
    pattern: /(?:castillo de\s|cast\.)menara/gi,
  },
  {
    name: "Bo",
    pattern: /(?:\s|^)bo(?:\s|$)/gi,
  },
  {
    name: "Homenaje",
    pattern: /homenaje/gi,
  },
  {
    name: "Clea",
    pattern: /clea/gi,
  },
  {
    name: "Finca Resalso",
    pattern: /(?:finca\s|fin\.)resalso/gi,
  },
  {
    name: "Cepas Viejas",
    pattern: /cepas viejas/gi,
  },
  {
    name: "Laya",
    pattern: /laya/gi,
  },
  {
    name: "Marqués Griñón",
    pattern: /m\.griñon/gi,
  },
  {
    name: "Las Viñas del Señorío",
    pattern: /viñas señori/gi,
  },
  {
    name: "Alius",
    pattern: /alius/gi,
  },
  {
    name: "Carlota Suria",
    pattern: /c\.suria/gi,
  },
  {
    name: "Semele",
    pattern: /semele/gi,
  },
  {
    name: "El Garabato",
    pattern: /el garabato/gi,
  },
  {
    name: "Huella",
    pattern: /huella/gi,
  },
  {
    name: "Nebla",
    pattern: /nebla/gi,
  },
  {
    name: "Baby Cream",
    pattern: /baby cream/gi,
  },
  {
    name: "Corega",
    pattern: /corega/gi,
  },
  {
    name: "Denivit",
    pattern: /denivit/gi,
  },
  {
    name: "Lacer",
    pattern: /lacer/gi,
  },
  {
    name: "Nickelodeon",
    pattern: /cepillo de dientes infantil 1 u/gi,
  },
  {
    name: "Oraldine",
    pattern: /oraldine/gi,
  },
  {
    name: "Fluocaril",
    pattern: /fluocaril/gi,
  },
  {
    name: "Foramen",
    pattern: /foramen/gi,
  },
  {
    name: "Aquafresh",
    pattern: /aquafresh/gi,
  },
  {
    name: "Profarma",
    pattern: /profarma/gi,
  },
  {
    name: "Dentinet",
    pattern: /dentinet/gi,
  },
  {
    name: "NextGen",
    pattern: /nextgen/gi,
  },
  {
    name: "Pinord",
    pattern: /pinord|pinord\sgran\schef/gi,
  },
  {
    name: "Bia",
    pattern: /(?:\s|^)bia/gi,
  },
  {
    name: "Acecook",
    pattern: /acecook/gi,
  },
  {
    name: "Ta-Tung",
    pattern: /ta-tung/gi,
  },
  {
    name: "Go-Tan",
    pattern: /go-tan/gi,
  },
  {
    name: "Yang-Tse",
    pattern: /yang-tse/gi,
  },
  {
    name: "EOS",
    pattern: /eos(?:\s|$)/gi,
  },
  {
    name: "Delinatur",
    pattern: /delinatur/gi,
  },
  {
    name: "Pekis",
    pattern: /pekis/gi,
  },
  {
    name: "Prozis",
    pattern: /prozis/gi,
  },
  {
    name: "Aquarel",
    pattern: /aquarel/gi,
  },
  {
    name: "Benasal",
    pattern: /benasal/gi,
  },
  {
    name: "Cabreiroa",
    pattern: /cabreiroa/gi,
  },
  {
    name: "Teleno",
    pattern: /teleno/gi,
  },
  {
    name: "Segura Viudas",
    pattern: /seg\.viudas/gi,
  },
  {
    name: "Dominio de la Vega",
    pattern: /d\.de la vega/gi,
  },
  {
    name: "Carta Nevada",
    pattern: /carta nevada/gi,
  },
  {
    name: "ARS Collecta",
    pattern: /ars collecta/gi,
  },
  {
    name: "Dubois",
    pattern: /dubois/gi,
  },
  {
    name: "Dominio D Tharsys",
    pattern: /dom\.tharsys/gi,
  },
  {
    name: "Canals & Nubiola",
    pattern: /c\.\snubiola/,
  },

  {
    name: "Canals & Nubiola",
    pattern: /c\.\snubiola/gi,
  },
  {
    name: "Reymos",
    pattern: /reymos/gi,
  },
  {
    name: "Cordón Negro",
    pattern: /cord[oó]n negro/gi,
  },
  {
    name: "Gala D'or",
    pattern: /gala d'or/gi,
  },
  {
    name: "Bisila",
    pattern: /bisila/gi,
  },
  {
    name: "Gobernador",
    pattern: /gobernador/gi,
  },
  {
    name: "Idilicum",
    pattern: /idilicum/gi,
  },
  {
    name: "Expression",
    pattern: /expression/gi,
  },
  {
    name: "Ladrón de Lunas",
    pattern: /ladron lunas/gi,
  },
  {
    name: "Platino",
    pattern: /platino/gi,
  },
  {
    name: "Montecasino",
    pattern: /montecasino/gi,
  },
  {
    name: "D'Armanville",
    pattern: /d'?armanville/gi,
  },
  {
    name: "Staropramen",
    pattern: /staropramen/gi,
  },
];

export default PreparedBrands;
