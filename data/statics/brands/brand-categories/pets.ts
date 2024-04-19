import { TBrand } from "../../../types/brand";
import Categories from "../../category/category";

const PetsBrands: TBrand[] = [
  {
    name: "Félix",
    pattern: /(?<!carnes\s)f[eé]lix/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Friskies",
    pattern: /friskies/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Gourmet",
    pattern: /(?:\s|^)gourmet(?!\s?(cazorla|bolsa))/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Perfect Fit",
    pattern: /perfect fit/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Whiskas",
    pattern: /whiskas/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Purina",
    pattern: /purina/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Uc wet",
    pattern: /uc wet/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Affinity",
    pattern: /affinity/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Ultima",
    pattern: /ultima/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Brekkies",
    pattern: /brekkies/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Uc",
    pattern: /^Uc[ -]/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Cats Best",
    pattern: /cats best/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Catisfaction",
    pattern: /catisfaction/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Dixie",
    pattern: /dixie/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "One",
    pattern: /^one/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Vitakraft",
    pattern: /vitakraft/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Granzoo",
    pattern: /granzoo/gi,
  },
  {
    name: "Natura",
    pattern: /(?:^|\s)natura(?:\s|$)(?!nuova)/gi,
  },
  {
    name: "Delikuit",
    pattern: /delikuit/gi,
  },
  {
    name: "Compy",
    pattern: /compy/gi,
  },
  {
    name: "Krislin",
    pattern: /krislin/gi,
  },
  {
    name: "Nuske",
    pattern: /nuske/gi,
  },
  {
    name: "Single",
    pattern: /single/gi,
  },
  {
    name: "El Manisero",
    pattern: /el manisero/gi,
  },
  {
    name: "Frubis",
    pattern: /frubis/gi,
  },
  {
    name: "Chicón",
    pattern: /chic[oó]n/gi,
  },
  {
    name: "Pizarro",
    pattern: /pizarro/gi,
  },
  {
    name: "Lolita",
    pattern: /lolita/gi,
  },
  {
    name: "Mission",
    pattern: /mission/gi,
  },
  {
    name: "Excelencia",
    pattern: /excelencia/gi,
  },
  {
    name: "Blai Peris",
    pattern: /blai peris/gi,
  },
  {
    name: "Embajador",
    pattern: /embajador/gi,
  },
  {
    name: "Dacsa",
    pattern: /(?!cocas de)(?:\s|^)dacsa/gi,
  },
  {
    name: "Rex",
    pattern: /rex/gi,
  },
  {
    name: "Picuezo",
    pattern: /picuezo/gi,
  },
  {
    name: "Scotti",
    pattern: /scotti/gi,
  },
  {
    name: "Don Pedro",
    pattern: /don pedro/gi,
  },
  {
    name: "Tartana",
    pattern: /tartana/gi,
  },
  {
    name: "Guapizzima",
    pattern: /guapizzima/gi,
  },
  {
    name: "Cerelia",
    pattern: /cerelia/gi,
  },
  {
    name: "Tildasundari",
    pattern: /tildasundari/gi,
  },
  {
    // Marca de pasta, comida
    name: "Romero",
    pattern: /(?<!con\s)romero(?!\sfrasco)/gi,
  },
  {
    name: "JR",
    pattern: /(?:\s|^)jr(?:\s|$)/gi,
  },
  {
    name: "El Paeller",
    pattern: /el paeller/gi,
  },
  {
    name: "Mikeso",
    pattern: /mikeso/gi,
  },
  {
    name: "Punteiro",
    pattern: /punteiro/gi,
  },
  {
    name: "Villa Noble",
    pattern: /villa noble/gi,
  },
  {
    name: "Holland Corona",
    pattern: /holland(?:\scorona)?/gi,
  },
  {
    name: "Pannini",
    pattern: /pannini/gi,
  },
  {
    name: "Ristorante",
    pattern: /ristorante/gi,
  },
  {
    name: "Casa Di Mama",
    pattern: /casa di mama/gi,
  },
  {
    name: "Tradizionale",
    pattern: /tradizionale/gi,
  },
  {
    name: "Rustica",
    pattern: /rustica/gi,
  },
  {
    name: "Niña del Sur",
    pattern: /niña del sur/gi,
  },
  {
    name: "Valdes",
    pattern: /valdes/gi,
  },
  {
    name: "La Mia Grand",
    pattern: /la mia grand/gi,
  },
  {
    name: "Panaceliac",
    pattern: /panaceliac/gi,
  },
  {
    name: "Haagen Dazs",
    pattern: /haagen dazs/gi,
  },
  {
    name: "Frigo",
    pattern: /frigo(?:\s|$)/gi,
  },
  {
    name: "Royne",
    pattern: /royne/gi,
  },
  {
    name: "Monzo",
    pattern: /monzo/gi,
  },
  {
    name: "Jolly Time",
    pattern: /jolly time/gi,
  },
  {
    name: "Entrepinares",
    pattern: /entrepinares/gi,
  },
  {
    name: "Capsa Food",
    pattern: /capsa food|leche en polvo desnatada/gi,
  },
  {
    name: "Alitey",
    pattern: /alitey/gi,
  },
  {
    name: "Dee Thai",
    pattern: /dee thai/gi,
  },
  {
    name: "Nutricia",
    pattern: /nutricia/gi,
  },
  {
    name: "Campina",
    pattern: /campina/gi,
  },
  {
    name: "Mont Palau",
    pattern: /mont palau/gi,
  },
  {
    name: "Chantilly",
    pattern: /chantilly/gi,
  },
  {
    name: "Orache",
    pattern: /orache/gi,
  },
  {
    name: "Krisul",
    pattern: /krisul/gi,
  },
  {
    name: "Pastor",
    pattern: /pastor/gi,
  },
  {
    name: "Las Coronas",
    pattern: /las coronas/gi,
  },
  {
    name: "Mutti",
    pattern: /mutti/gi,
  },
  {
    name: "Kraft",
    pattern: /kraft/gi,
  },
  {
    name: "Pote",
    pattern: /pote/gi,
  },
  {
    name: "Frinsa",
    pattern: /frinsa/gi,
  },
  {
    name: "Maille",
    pattern: /maille/gi,
  },
  {
    name: "Beltoro",
    pattern: /beltoro/gi,
  },
  {
    name: "Pelli",
    pattern: /pelli/gi,
  },
  {
    name: "Gil",
    pattern: /gil/gi,
    priority: 2,
  },
  {
    name: "Maldon",
    pattern: /maldon/gi,
  },
  {
    name: "Pesasur",
    pattern: /pesasur/gi,
  },
  {
    name: "Vega Baja",
    pattern: /vega baja/gi,
  },
  {
    name: "D'Atenea",
    pattern: /d'atenea/gi,
  },
  {
    name: "La Pista",
    pattern: /la pista/gi,
  },
  {
    name: "Campos",
    pattern: /campos/gi,
  },
  {
    name: "Sol Archena",
    pattern: /sol archena/gi,
  },
  {
    name: "Naval",
    pattern: /naval/gi,
  },
  {
    name: "Toque",
    pattern: /(?<!al\s)toque/gi,
  },
  {
    name: "Leyenda",
    pattern: /leyenda/gi,
  },
  {
    name: "Cocktelea",
    pattern: /cocktelea/gi,
  },
  {
    name: "Finca Badenes",
    pattern: /finc[a\.]\s?badenes?/gi,
  },
  {
    name: "Turci",
    pattern: /turci/gi,
  },
  {
    name: "Genioliva",
    pattern: /genioliva/gi,
  },
  {
    name: "El Vesubio",
    pattern: /el vesubio/gi,
  },
  {
    name: "Aires",
    pattern: /aires/gi,
  },
  {
    name: "Aranca",
    pattern: /aranca/gi,
  },
  {
    name: "Alsur",
    pattern: /alsur/gi,
  },
  {
    name: "Acesur",
    pattern: /acesur/gi,
  },
  {
    name: "Flying Drago",
    pattern: /flying drago/gi,
  },
  {
    name: "Halos",
    pattern: /halos/gi,
  },
  {
    name: "Vinagrerías Riojanas",
    pattern: /v\.riojanas/gi,
  },
  {
    name: "Friscos",
    pattern: /friscos/gi,
  },
  {
    name: "Chalupa",
    pattern: /chalupa/gi,
  },
  {
    name: "Samare",
    pattern: /samare/gi,
  },
  {
    name: "Meivel",
    pattern: /meivel/gi,
  },
  {
    name: "Anela",
    pattern: /(?:\s|^)anela/gi,
  },
  {
    name: "Oatibix",
    pattern: /oatibix/gi,
  },
  {
    name: "Laly",
    pattern: /laly/gi,
  },
  {
    name: "Jungly",
    pattern: /jungly/gi,
  },
  {
    name: "Natur Fun",
    pattern: /natur fun/gi,
  },
  {
    name: "Oxfam",
    pattern: /oxfam/gi,
  },
  {
    name: "Crunch",
    pattern: /crunch(?:\s|$)/gi,
  },
  {
    name: "Polo",
    pattern: /(?<!licor\s|l\.)polo/gi,
  },
  {
    name: "Miguelete",
    pattern: /miguelete/gi,
  },
  {
    name: "La Bandera",
    pattern: /la bandera/gi,
  },
  {
    name: "Valiente",
    pattern: /valiente/gi,
  },
  {
    name: "Roura",
    pattern: /roura/gi,
  },
  {
    name: "Pez",
    pattern: /(?:\s|^)pez/gi,
  },
  {
    name: "Boomer",
    pattern: /boomer/gi,
  },
  {
    name: "La Tranquera",
    pattern: /la tranquera/gi,
  },
  {
    name: "La Cueva",
    pattern: /la cueva/gi,
  },
  {
    name: "Dicar",
    pattern: /dicar/gi,
  },
  {
    name: "Potax",
    pattern: /potax/gi,
  },
  {
    name: "Quely",
    pattern: /quely/gi,
  },
  {
    name: "Ketterer",
    pattern: /ketterer/gi,
  },
  {
    name: "Velarte",
    pattern: /velarte/gi,
  },
  {
    name: "Bondia",
    pattern: /bondia/gi,
  },
  {
    name: "Frumen",
    pattern: /frumen/gi,
  },
  {
    name: "Mastrigo",
    pattern: /mastrigo/gi,
  },
  {
    name: "Horno Tradicional",
    pattern: /horno trad\./gi,
  },
  {
    name: "Krambals",
    pattern: /krambals/gi,
  },
  {
    name: "Mendez",
    pattern: /mendez/gi,
  },
  {
    name: "Mas Protein",
    pattern: /mas protein/gi,
  },
  {
    name: "Doñarepa",
    pattern: /doñarepa/gi,
  },
  {
    name: "Yolanda",
    pattern: /yolanda/gi,
  },
  {
    name: "Harimsa",
    pattern: /harimsa/gi,
  },
  {
    name: "Choleck",
    pattern: /choleck/gi,
  },
  {
    name: "Almendrina",
    pattern: /almendrina/gi,
  },
  {
    name: "Monterde",
    pattern: /monterde/gi,
  },
  {
    name: "Goshua",
    pattern: /goshua/gi,
  },
  {
    name: "Mercader",
    pattern: /mercader/gi,
  },
  {
    name: "Benestare",
    pattern: /benestare/gi,
  },
  {
    name: "Kids World",
    pattern: /kids world/gi,
  },
  {
    name: "By Panach",
    pattern: /by panach/gi,
  },
  {
    name: "Ampro",
    pattern: /ampro/gi,
  },
  {
    name: "Dolce Pasticceria",
    pattern: /d\.pasticceri/gi,
  },
  {
    name: "Ehrmann",
    pattern: /ehrmann/gi,
  },
  {
    name: "La Vevida",
    pattern: /la vevida/gi,
  },
  {
    name: "Maison",
    pattern: /maison/gi,
  },
  {
    name: "Disaronno",
    pattern: /disaronno/gi,
  },
  {
    name: "Incarlopsa",
    pattern: /incarlopsa/gi,
  },
  {
    name: "Antonio Álvarez",
    pattern: /antonio álvarez/gi,
  },
  {
    name: "Paletas Marpa",
    pattern: /paletas marpa/gi,
  },
  {
    name: "El Ontanar",
    pattern: /el ontanar/gi,
  },
  {
    name: "Costa Brava",
    pattern: /costa brava/gi,
  },
  {
    name: "Embutidos Pajariel",
    pattern: /embutidos pajariel/gi,
  },
  {
    name: "Campo Extremadura",
    pattern: /campo extremadura/gi,
  },
  {
    name: "Laimon",
    pattern: /laimon/gi,
  },
  {
    name: "Antarctica",
    pattern: /antarctica/gi,
  },
  {
    name: "OKF",
    pattern: /okf/gi,
  },
  {
    name: "Tesoro Natur",
    pattern: /tesoro natur/gi,
  },
  {
    name: "Mun",
    pattern: /mun/gi,
  },
  {
    name: "Suiza",
    pattern: /suiza/gi,
  },
  {
    name: "Boffard",
    pattern: /boffard/gi,
  },
  {
    name: "Artepok",
    pattern: /artepok/gi,
  },
  {
    name: "Cati",
    pattern: /cati/gi,
  },
  {
    name: "Sa Naveta",
    pattern: /sa naveta/gi,
  },
  {
    name: "Belai",
    pattern: /belai/gi,
  },
  {
    name: "Saint Flour",
    pattern: /saint[\s-]flour/gi,
  },
  {
    name: "Don Julián",
    pattern: /don juli[aá]n/gi,
  },
  {
    name: "Pastourelle",
    pattern: /pastourelle/gi,
  },
  {
    name: "Green Nature",
    pattern: /green nature/gi,
  },
  {
    name: "Lida",
    pattern: /(?:\s|^)lida/gi,
  },
  {
    name: "Eucerin",
    pattern: /eucerin/gi,
  },
  {
    name: "Inibsa",
    pattern: /inibsa/gi,
  },
  {
    name: "Eudermin",
    pattern: /eudermin/gi,
  },
  {
    name: "Davidel",
    pattern: /davidel/gi,
  },
  {
    name: "Vitarelle",
    pattern: /vitarelle/gi,
  },
  {
    name: "Nattúru",
    pattern: /natt[uú]ru/gi,
  },
  {
    name: "Singular",
    pattern: /singular/gi,
  },
  {
    name: "Topaz",
    pattern: /topaz/gi,
  },
  {
    name: "Emina",
    pattern: /emina/gi,
  },
  {
    name: "Dante",
    pattern: /dante/gi,
  },
  {
    name: "Grand Astoria",
    pattern: /grand astoria/gi,
  },
  {
    name: "Sidrallero",
    pattern: /sidrallero/gi,
  },
  {
    name: "Cortina",
    pattern: /cortina/gi,
  },
  {
    name: "El Gaitero",
    pattern: /el gaitero/gi,
  },
  {
    name: "Via de la Plata",
    pattern: /via de la plata/gi,
  },
  {
    name: "Flaminia",
    pattern: /flaminia/gi,
  },
  {
    name: "Gran Feudo",
    pattern: /gran feudo/gi,
  },
  {
    name: "Barmon's",
    pattern: /barmon's/gi,
  },
  {
    name: "Mikanoff",
    pattern: /mikanoff/gi,
  },
  {
    name: "Bombay",
    pattern: /bombay/gi,
  },
  {
    name: "Finlandia",
    pattern: /finlandia/gi,
  },
  {
    name: "Narisara",
    pattern: /narisara/gi,
  },
  {
    name: "Velero",
    pattern: /velero/gi,
  },
  {
    name: "Burned",
    pattern: /burned/gi,
  },
  {
    name: "Douregal",
    pattern: /douregal/gi,
  },
  {
    name: "Dewars",
    pattern: /dewars/gi,
  },
  {
    name: "Jim Beam",
    pattern: /jim beam/gi,
  },
  {
    name: "Fireball",
    pattern: /fireball/gi,
  },
  {
    name: "Caribica",
    pattern: /caribica/gi,
  },
  {
    name: "Wordens",
    pattern: /wordens/gi,
  },
  {
    name: "Planeta Bebé",
    pattern: /planeta bebé/gi,
  },
  {
    name: "Botikit",
    pattern: /botikit/gi,
  },
  {
    name: "Petit Cheri",
    pattern: /petit cheri/gi,
  },
];

export default PetsBrands;
