import { TBrand } from "../../../types/brand";
import Categories from "../../category/category";

const BabyBrands: TBrand[] = [
  {
    name: "Deliplus",
    pattern: /deliplus/gi,
    onlyCategory: Categories.Higiene,
  },
  {
    name: "Dodot",
    pattern: /dodot/gi,
  },
  {
    name: "Gotas de Oro",
    pattern: /gotas de oro/gi,
  },
  {
    name: "Natural Honey",
    pattern: /(?:natural\s|nat\.)honey?/gi,
  },
  {
    name: "Sairo",
    pattern: /sairo/gi,
  },
  {
    name: "Adidas",
    pattern: /adidas/gi,
  },
  {
    name: "Coronel Tapioca",
    pattern: /coronel tapioca/gi,
  },
  {
    name: "Nike",
    pattern: /nike|nk a sparkling/gi,
  },
  {
    name: "Poseidón",
    pattern: /poseid[oó]n/gi,
  },
  {
    name: "Saphir",
    pattern: /sa(?:hp|ph)ir/gi,
  },
  {
    name: "Titto Bluni",
    pattern: /titto bluni/gi,
  },
  {
    name: "Aire de Sevilla",
    pattern: /(?:aire\s|a\.)de sevilla/gi,
  },
  {
    name: "AQC",
    pattern: /aqc/gi,
  },
  {
    name: "Aquar",
    pattern: /aquar(?:\s|$)/gi,
  },
  {
    name: "Tipiak",
    pattern: /tipiak/gi,
  },
  {
    name: "Felicia",
    pattern: /felicia/gi,
  },
  {
    name: "Armando",
    pattern: /armando/gi,
  },
  {
    name: "Pagani",
    pattern: /pagani/gi,
  },
  {
    name: "El Pavo",
    pattern: /el pavo/gi,
  },
  {
    name: "Mon Cheri",
    pattern: /mon cheri/gi,
  },
  {
    name: "Raffaello",
    pattern: /raffaello/gi,
  },
  {
    name: "Sorini",
    pattern: /sorini/gi,
  },
  {
    name: "Trapa",
    pattern: /(?:\s|^)trapa/gi,
  },
  {
    name: "Anthon Berg",
    pattern: /anthon berg/gi,
  },
  {
    name: "Chocomiro",
    pattern: /chocomiro/gi,
  },
  {
    name: "Corona Blanca",
    pattern: /corona blanca/gi,
  },
  {
    name: "Cudié",
    pattern: /cudi[ée]/gi,
  },
  {
    name: "Cupido",
    pattern: /cupido/gi,
  },
  {
    name: "Bip",
    pattern: /(?:\s|^)bip/gi,
  },
  {
    name: "Lacasitos",
    pattern: /(?<!lacasa mini|lacasa)(?:\s|^)lacasitos/gi,
  },
  {
    name: "Pancracio",
    pattern: /pancracio/gi,
  },
  {
    name: "Yak",
    pattern: /(?:\s|^)yak(?:\s|$)/gi,
  },
  {
    name: "Bouchard Finlayson",
    pattern: /bouchard finlayson/gi,
  },
  {
    name: "Castillo Liria",
    pattern: /(?:castillo\s|cast\.)liria/gi,
  },
  {
    name: "La Guita",
    pattern: /la guita/gi,
  },
  {
    name: "Muy Fina",
    pattern: /muy fina/gi,
  },
  {
    name: "Tío Pepe",
    pattern: /t[ií]o pepe/gi,
  },
  {
    name: "Viejo Antón",
    pattern: /viejo ant[óo]n/gi,
  },
  {
    name: "Viña Ureta",
    pattern: /viña ureta/gi,
  },
  {
    name: "Casal Blanco",
    pattern: /casal blanco/gi,
  },
  {
    name: "Floralis",
    pattern: /floralis/gi,
  },
  {
    name: "Málaga Virgen",
    pattern: /(?:m[aá]laga\s|mal\.)v[ií]rgen/gi,
  },
  {
    name: "Osborne Pedro Ximenez",
    pattern: /(?:osborne\s)?pedro ximenez/gi,
  },
  {
    name: "Reccua",
    pattern: /reccua/gi,
  },
  {
    name: "Sanson",
    pattern: /sanson/gi,
  },
  {
    name: "Mateus",
    pattern: /mateus(?:\srose)?/gi,
  },
  {
    name: "Moncigale",
    pattern: /moncigale/gi,
  },
  {
    name: "Habla Rita",
    pattern: /habla rita/gi,
  },
  {
    name: "La Novia Ideal",
    pattern: /la novia ideal/gi,
  },
  {
    name: "La Cocinera",
    pattern: /(?:la\s)?cocinera/gi,
  },
  {
    name: "Maheso",
    pattern: /maheso/gi,
  },
  {
    name: "Garden Gourmet",
    pattern: /garden(?:\sgourm)?(?:et)?/gi,
  },
  {
    name: "Senén",
    pattern: /sen[ée]n/gi,
  },
  {
    name: "Casa Mauleon",
    pattern: /casa mauleon/gi,
  },
  {
    name: "Fripozo",
    pattern: /fripozo/gi,
  },
  {
    name: "Findus",
    pattern: /findus|salto menestra/gi,
  },
  {
    name: "Pescanova",
    pattern: /pescanova/gi,
  },
  {
    name: "Alfrio",
    pattern: /alfrio/gi,
  },
  {
    name: "Aligator",
    pattern: /aligator|cola de langosta surimi/gi,
  },
  {
    name: "Antonio y Ricardo",
    pattern: /antonio y ricardo/gi,
  },
  {
    name: "Cocinarte",
    pattern: /cocinarte/gi,
  },
  {
    name: "Exkimo",
    pattern: /exkimo/gi,
  },
  {
    name: "Ibercook",
    pattern: /ibercook/gi,
  },
  {
    name: "Buga-Buga",
    pattern: /buga-buga/gi,
  },
  {
    name: "Mel",
    pattern: /(?:\s|^)mel(?:\s|$)/gi,
  },
  {
    name: "Chocomel",
    pattern: /chocomel/gi,
  },
  {
    name: "Yopro",
    pattern: /yopro/gi,
  },
  {
    name: "Chufi",
    pattern: /chufi/gi,
  },
  {
    name: "Vegetanea",
    pattern: /vegetanea/gi,
  },
  {
    name: "Oat-Ly!",
    pattern: /oat-?ly!?/gi,
  },
  {
    name: "Ovonatur",
    pattern: /ovonatur/gi,
  },
  {
    name: "Ovonovo",
    pattern: /ovonovo/gi,
  },
  {
    name: "Rujamar",
    pattern: /rujamar/gi,
  },
  {
    name: "Velasco",
    pattern: /(?<!castillo\sde\s)velasco/gi,
  },
  {
    name: "Avícola Morales",
    pattern: /av[ií]cola morales/gi,
  },
  {
    name: "Aura",
    pattern: /(?:\s|^)aura/gi,
  },
  {
    name: "La Salud",
    pattern: /la salud/gi,
  },
  {
    name: "Lejinex",
    pattern: /lejinex/gi,
  },
  {
    name: "Zotal",
    pattern: /zotal/gi,
  },
  {
    name: "Aladdin",
    pattern: /aladdin/gi,
  },
  {
    name: "Babybio",
    pattern: /babybio/gi,
  },
  {
    name: "Sopinstant",
    pattern: /sopinstant/gi,
  },
  {
    name: "Di Carlo",
    pattern: /di carlo/gi,
  },
  {
    name: "Cubitón",
    pattern: /cubit[oó]n/gi,
  },
  {
    name: "Bakoka",
    pattern: /bakoka/gi,
  },
  {
    name: "Bio Ice",
    pattern: /bio ice/gi,
  },
  {
    name: "Albert Adriá",
    pattern: /albert adri[aá]/gi,
  },
  {
    name: "Steinburg",
    pattern: /steinburg/gi,
  },
  {
    name: "Krombacher",
    pattern: /krombacher/gi,
  },
  {
    name: "1897",
    pattern: /cerveza doble malta/gi,
  },
  {
    name: "1906",
    pattern: /1906/gi,
  },
  {
    name: "La Rubia",
    pattern: /(?:\s|^)la rubia/gi,
  },
  {
    name: "Wild Panther",
    pattern: /wild panther/gi,
  },
  {
    name: "Shandy",
    pattern: /shandy/gi,
  },
  {
    name: "Montesinos",
    pattern: /montesinos/gi,
  },
  {
    name: "Viking",
    pattern: /viking/gi,
  },
  {
    name: "Liptana",
    pattern: /liptana/gi,
  },
  {
    name: "Completa",
    pattern: /(?<!limpieza|protecci[oó]n|acci[oó]n|ensalada|wraps|chef)(?:\s|^)completa/gi,
  },
  {
    name: "Granja Riosol",
    pattern: /granja riosol/gi,
  },
  {
    name: "Ideal",
    pattern: /ideal/gi,
    priority: 2
  },
  {
    name: "Pastor de Aranda",
    pattern: /pastor de aranda/gi,
  },
  {
    name: "Rottaler",
    pattern: /rottaler/gi,
  },
  {
    name: "Elloermol",
    pattern: /elloermol/gi,
  },
  {
    name: "Jotis",
    pattern: /jotis/gi,
  },
  {
    name: "Jordan",
    pattern: /advanced medium cepillo de dientes/gi,
  },
  {
    name: "Colgate",
    pattern: /colgate|minions cepillo dental/gi,
  },
  {
    name: "Licor del Polo",
    pattern: /(?:licor del\s|l\.)polo/gi,
  },
  {
    name: "Oral B",
    pattern: /oral b/gi,
  },
  {
    name: "Pierrot",
    pattern: /pierrot/gi,
  },
  {
    name: "Sensodyne",
    pattern: /sensodyne/gi,
  },
  {
    name: "Algasiv",
    pattern: /algasiv/gi,
  },
  {
    name: "Kin",
    pattern: /(?:\s|^)kin(?:\s|$|,)/gi,
  },
  {
    name: "Polident",
    pattern: /polident/gi,
  },
  {
    name: "Actoner",
    pattern: /actoner/gi,
  },
  {
    name: "Listerine",
    pattern: /listerine/gi,
  },
  {
    name: "Parodontax",
    pattern: /parodontax/gi,
  },
  {
    name: "Signal",
    pattern: /sin?gn?al/gi,
  },
  {
    name: "Iso Drink",
    pattern: /iso drink/gi,
  },
  {
    name: "Enervit",
    pattern: /enervit/gi,
  },
  {
    name: "Maltín Polar",
    pattern: /malt[ií]n polar/gi,
  },
  {
    name: "Buen Lugar",
    pattern: /buen lugar/gi,
  },
  {
    name: "El Guanche",
    pattern: /el guanche/gi,
  },
  {
    name: "Las Breñas",
    pattern: /las breñas/gi,
  },
  {
    name: "Arepasan",
    pattern: /arepasan/gi,
  },
  {
    name: "El Molino",
    pattern: /el molino?/gi,
  },
  {
    name: "Maizcorn",
    pattern: /maizcorn/gi,
  },
  {
    name: "P.A.N",
    pattern: /p\.a\.n/gi,
  },
  {
    name: "Santa Rita",
    pattern: /santa rita/gi,
  },
  {
    name: "Tinguaro",
    pattern: /tinguaro/gi,
  },
  {
    name: "Hornimans",
    pattern: /hornimans/gi,
  },
  {
    name: "Playadito",
    pattern: /playadito/gi,
  },
  {
    name: "Susarón",
    pattern: /susar[oó]n/gi,
  },
  {
    name: "Lipton",
    pattern: /lipton/gi,
  },
  {
    name: "Tetley",
    pattern: /tetley/gi,
  },
  {
    name: "Mister Jones",
    pattern: /mister jones/gi,
  },
  {
    name: "Penelas",
    pattern: /penelas/gi,
  },
  {
    name: "La Cuerva",
    pattern: /la cuerva/gi,
  },
  {
    name: "Mc Cain",
    pattern: /mc\s?cain/gi,
  },
  {
    name: "Coca Cola",
    pattern: /coca(?:\s|-)?cola(?:\s|-)?(zero|light)/gi,
  },
  {
    name: "Gold Spring",
    pattern: /gold spring/gi,
  },
  {
    name: "Trina",
    pattern: /trina/gi,
  },
  {
    name: "Huerta de Barros",
    pattern: /huerta de barros/gi,
  },
  {
    name: "Campo Real Guerra",
    pattern: /campo real guerra/gi,
  },
  {
    name: "Convite",
    pattern: /convite/gi,
  },
  {
    name: "Tapa",
    pattern: /(?:\s|^)cortezas(?:\s|$)/gi,
  },
  {
    name: "Moldex",
    pattern: /moldex/gi,
  },
  {
    name: "Gerhard Mann",
    pattern: /lágrimas hidratantes para ojos secos/gi,
  },
  {
    name: "MilaRosa",
    pattern: /milarosa/gi,
  },
  {
    name: "On",
    pattern: /(?<!roll)(?:\s|^)on(?:\s|$)(?!black)/gi,
  },
  {
    name: "Alpen",
    pattern: /alpen/gi,
  },
  {
    name: "Kellogg's",
    pattern: /kellogg[`'´]?s/gi,
  },
  {
    name: "Kölln",
    pattern: /k[oö]lln/gi,
  },
  {
    name: "Special K",
    pattern: /special k/gi,
  },
  {
    name: "Weetabix",
    pattern: /weetabix/gi,
  },
  {
    name: "Be-Kind",
    pattern: /be-?kind/gi,
  },
  {
    name: "Corny",
    pattern: /corny/gi,
  },
  {
    name: "El Almendro",
    pattern: /el almendro/gi,
  },
  {
    name: "Emco",
    pattern: /emco/gi,
  },
  {
    name: "Nakd",
    pattern: /nakd/gi,
  },
  {
    name: "Nature Valley",
    pattern: /nature valley/gi,
  },
  {
    name: "Cheerios",
    pattern: /cheerios/gi,
  },
  {
    name: "Hahne",
    pattern: /hahne/gi,
  },
  {
    name: "Cochoteen",
    pattern: /cochoteen/gi,
  },
  {
    name: "Bornier",
    pattern: /bornier/gi,
  },
  {
    name: "Papillon",
    pattern: /papillon/gi,
  },
  {
    name: "Caseificio",
    pattern: /caseificio/gi,
  },
  {
    name: "Spiga",
    pattern: /(?:\s|^)spiga/gi,
  },
  {
    name: "Ahinsa",
    pattern: /ahimsa/gi,
  },
  {
    name: "Blancafort",
    pattern: /blancafort/gi,
  },
  {
    name: "Etter",
    pattern: /(?:\s|^)etter/gi,
  },
  {
    name: "Happy Bio",
    pattern: /happy bio/gi,
  },
  {
    name: "Natural",
    pattern: /(?<!\sal|sabor|rallado|bífidus|100%||griego)(?:\s|^)natural(?:\s|$)(?!l-casei|bonka|colombia)/gi,
  },
  {
    name: "Heno de Pravia",
    pattern: /heno (?:de\s)?pravia/gi,
  },
  {
    name: "9.60",
    pattern: /9\.60/gi,
  },
  {
    name: "Agua Fresca de Ruy",
    pattern: /agua fresca de (?:naranjos|rosas)/gi,
  },
  {
    name: "Gotitas de Oro",
    pattern: /gotitas de oro/gi,
  },
  {
    name: "Martinelia",
    pattern: /martinelia/gi,
  },
  {
    name: "Consorcio",
    pattern: /consorcio/gi,
  },
  {
    name: "Lorea",
    pattern: /lorea(?:\s|$)/gi,
  },
  {
    name: "Cabo de Peñas",
    pattern: /cabo(?:\sde)?\speñas/gi,
  },
  {
    name: "Costatun",
    pattern: /costatun/gi,
  },
  {
    name: "Eureka",
    pattern: /eureka/gi,
  },
  {
    name: "Massó",
    pattern: /mass[oó]/gi,
  },
  {
    name: "Palacio de Oriente",
    pattern: /palacio de oriente/gi,
  },
  {
    name: "Pescamar",
    pattern: /pescamar/gi,
  },
  {
    name: "Tunapesca",
    pattern: /tunapesca/gi,
  },
  {
    name: "Usisa",
    pattern: /usisa/gi,
  },
  {
    name: "Dorita",
    pattern: /dorita/gi,
  },
  {
    name: "Minerva",
    pattern: /minerva/gi,
  },
  {
    name: "Ubago",
    pattern: /ubago/gi,
  },
  {
    name: "Noly",
    pattern: /noly/gi,
  },
  {
    name: "Ría de Arosa",
    pattern: /r[ií]a de arosa/gi,
  },
  {
    name: "Marea",
    pattern: /marea/gi,
  },
  {
    name: "Conservas Cambados",
    pattern: /conservas cambados/gi,
  },
  {
    name: "Abuela Carola",
    pattern: /abuela carola/gi,
  },
  {
    name: "Merry",
    pattern: /merry/gi,
  },
  {
    name: "Polasal",
    pattern: /polasal/gi,
  },
  {
    name: "Hida",
    pattern: /hida(?:\s|$|,)/gi,
  },
  {
    name: "J-Lek",
    pattern: /j-lek/gi,
  },
  {
    name: "Fuente Dehesa",
    pattern: /fuente dehesa/gi,
  },
  {
    name: "Bezoya",
    pattern: /bezoya/gi,
  },
  {
    name: "Aguadoy",
    pattern: /aguadoy/gi,
  },
  {
    name: "Liviana",
    pattern: /liviana/gi,
  },
  {
    name: "La Casa",
    pattern: /(?<!de\s)la casa/gi,
  },
  {
    name: "Parot",
    pattern: /parot/gi,
  },
  {
    name: "Quartett",
    pattern: /quartett/gi,
  },
  {
    name: "Chérie",
    pattern: /ch[eé]rie/gi,
  },
  {
    name: "Kemphor",
    pattern: /kemphor/gi,
  },
  {
    name: "Casón Histórico",
    pattern: /cas[oó]n hist[oó]rico/gi,
  },
  {
    name: "Elegido",
    pattern: /elegido/gi,
  },
  {
    name: "Dominio de Borgia",
    pattern: /dominio de borgia/gi,
  },
  {
    name: "Masía de Altigón",
    pattern: /mas[ií]a de altig[oó]n/gi,
  },
  {
    name: "Hacienda Zargón",
    pattern: /hacienda zarg[oó]n/gi,
  },
  {
    name: "Comportillo",
    pattern: /comportillo/gi,
  },
  {
    name: "Fidencio",
    pattern: /fidencio/gi,
  },
  {
    name: "Condado de Egara",
    pattern: /condado de egara/gi,
  },
  {
    name: "Mimbral",
    pattern: /mimbral/gi,
  },
  {
    name: "Abadía Mantrús",
    pattern: /abad[ií]a mantr[uú]s/gi,
  },
  {
    name: "Hacienda Zorita",
    pattern: /hacienda zorita/gi,
  },
  {
    name: "Arribeño",
    pattern: /arribe[ñn]o/gi,
  },
  {
    name: "Atardecer",
    pattern: /atardecer(?:\s|$)(?!magn[eé]tico)/gi,
  },
  {
    name: "Sangue di Giuda",
    pattern: /sangue di giuda/gi,
  },
  {
    name: "El Mandamás",
    pattern: /el mandam[aá]s/gi,
  },
  {
    name: "Fin del Río",
    pattern: /fin del r[ií]o/gi,
  },
  {
    name: "Davida",
    pattern: /davida/gi,
  },
  {
    name: "Porto Tawny",
    pattern: /(?:porto|cruz|grahams)\stawny|grahams/gi,
  },
  {
    name: "Mar de Uvas",
    pattern: /mar de uvas/gi,
  },
  {
    name: "Arribeño",
    pattern: /arribe[ñn]o/gi,
  },
  {
    name: "Sierra",
    pattern: /sierra/gi,
  },
  {
    name: "Torre Oria",
    pattern: /torre oria/gi,
  },
  {
    name: "Para Pecar",
    pattern: /para pecar/gi,
  },
  {
    name: "La Chocolatera",
    pattern: /la chocolatera/gi,
  },
  {
    name: "Dolce Gusto",
    pattern: /dolce\s?gusto/gi,
  },
  {
    name: "Tassimo",
    pattern: /tassimo/gi,
  },
  {
    name: "Benfix",
    pattern: /benfix/gi,
  },
  {
    name: "Bellsola",
    pattern: /bellsola/gi,
  },
  {
    name: "Activia",
    pattern: /activia/gi,
  },
  {
    name: "Vitalinea",
    pattern: /vitalinea/gi,
  },
  {
    name: "Oikos",
    pattern: /oikos/gi,
  },
  {
    name: "Yaos",
    pattern: /yaos/gi,
  },
  {
    name: "Body Natur",
    pattern: /body\s?natur/gi,
  },
  {
    name: "Taky",
    pattern: /taky/gi,
  },
  {
    name: "Flor",
    pattern: /(?<!esponja)(?:\s|^)flor(?:\s|$)(?!de mayo|de tiaré|de sal|(?:de\s)?burgos)/gi,
  },
  {
    name: "Mimosin",
    pattern: /mimosin/gi,
  },
  {
    name: "San Perfumador",
    pattern: /san\sperfumador/gi,
  },
  {
    name: "El Blanquito",
    pattern: /el\sblanquito/gi,
  },
  {
    name: "Calgón",
    pattern: /calg[oó]n/gi,
  },
  {
    name: "Cebralín",
    pattern: /cebral[ií]n/gi,
  },
  {
    name: "Dr Beckmann",
    pattern: /dr\sbeckmann/gi,
  },
  {
    name: "Vanish",
    pattern: /vanish/gi,
  },
  {
    name: "Rayen",
    pattern: /rayen/gi,
  },
];

export default BabyBrands;
