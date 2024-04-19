import { TBrand } from "../../../types/brand";

const Drinks: TBrand[] = [
  {
    name: "Molen Bier",
    pattern: /molen bier/g,
  },
  {
    name: "Bifrutas",
    pattern: /bifrutas/gi,
  },
  {
    name: "Cuidacol",
    pattern: /cuidacol/gi,
  },
  {
    name: "Actimel",
    pattern: /actimel/gi,
  },
  {
    name: "Danacol",
    pattern: /danacol/gi,
  },
  {
    name: "Agusti Torello",
    pattern: /agust[ií] torello/gi,
  },
  {
    name: "Codorniú",
    pattern: /(?:anna\s)?codorn[ií][uú]?(?!z)/gi,
  },
  {
    name: "AT roca",
    pattern: /at roca/gi,
  },
  {
    name: "Blue",
    pattern: /^blue(?!\s?[dragon])/gi,
  },
  {
    name: "Campo de Estrellas",
    pattern: /campo de estrellas/gi,
  },
  {
    name: "Castell Llord",
    pattern: /castell llord/gi,
  },
  {
    name: "Cavas Hill",
    pattern: /cavas hill/gi,
  },
  {
    name: "Freixenet",
    pattern: /freix[ie]net/gi,
  },
  {
    name: "Jaume Serra",
    pattern: /jaume serra/gi,
  },
  {
    name: "Juve & Camps",
    pattern: /juve\s?&?\s?camps/gi,
  },
  {
    name: "Rondel",
    pattern: /rondel/gi,
  },
  {
    name: "Viña Romale",
    pattern: /viña romale/gi,
  },
  {
    name: "Andre Clouet",
    pattern: /andre clouet/gi,
  },
  {
    name: "Bollinger",
    pattern: /bollinger/gi,
  },
  {
    name: "Vessier",
    pattern: /vessier/gi,
  },
  {
    name: "Dom Pérignon",
    pattern: /dom p[eé]rignon/gi,
  },
  {
    name: "G. H. Mumm",
    pattern: /g.\s?h.\s?mumm/gi,
  },
  {
    name: "Moet & Chandon",
    pattern: /moet\s?&\s?chandon/gi,
  },
  {
    name: "Veuve Clicquot",
    pattern: /veuve clic?quot/gi,
  },
  {
    name: "Don Luciano",
    pattern: /don luciano/gi,
  },
  {
    name: "Gancia Asti",
    pattern: /gancia asti/gi,
  },
  {
    name: "La cacciatora",
    pattern: /la cacciatora/gi,
  },
  {
    name: "Príncipe frizzante",
    pattern: /pr[ií]ncipe frizzante/gi,
  },
  {
    name: "Sandara",
    pattern: /sandara/gi,
  },
  {
    name: "Contessa Carlotta",
    pattern: /(contessa\s)?carlotta/gi,
  },
  {
    name: "Raventós",
    pattern: /ravent[oó]s/gi,
  },
  {
    name: "Firgas",
    pattern: /firgas(?:\sfresh)?/gi,
  },
  {
    name: "Aquavia",
    pattern: /aquavia/gi,
  },
  {
    name: "Vitalia",
    pattern: /vitalia/gi,
  },
  {
    name: "Urban",
    pattern: /^urban/gi,
  },
  {
    name: "Sou Tea",
    pattern: /sou tea/gi,
  },
  {
    name: "Sou Tonic",
    pattern: /sou tonic/gi,
  },
  {
    name: "Font Vella",
    pattern: /font vella/gi,
  },
  {
    name: "Fonter",
    pattern: /fonter/gi,
  },
  {
    name: "Perrier",
    pattern: /perrier/gi,
  },
  {
    name: "San Pellegrino",
    pattern: /(?:san\s|s\.)?pellegrino/gi,
  },
  {
    name: "Vichy Catalán",
    pattern: /vichy(?:\scatal[aá]n)?/gi,
  },
  {
    name: "Aquabona",
    pattern: /aquabona/gi,
  },
  {
    name: "Bezoya",
    pattern: /bezoya/gi,
  },
  {
    name: "Evian",
    pattern: /evian/gi,
  },
  {
    name: "Fonteide",
    pattern: /fonteide/gi,
  },
  {
    name: "Fuente Liviana",
    pattern: /fuente liviana/gi,
  },
  {
    name: "Lanjarón",
    pattern: /lanjar[oó]n/gi,
  },
  {
    name: "Solán de Cabras",
    pattern: /sol[aá]n\sde\scabras|solan cabras/gi,
  },
  {
    name: "Veri",
    pattern: /^veri/gi,
  },
  {
    name: "Mayador",
    pattern: /mayador/gi,
  },
  {
    name: "Trabanco",
    pattern: /trabanco/gi,
  },
  {
    name: "Zarracina",
    pattern: /zarracina/gi,
  },
  {
    name: "Casal García",
    pattern: /casal\sgarc[ií]a/gi,
  },
  {
    name: "Peñasol",
    pattern: /peñasol/gi,
  },
  {
    name: "Sandevid",
    pattern: /sandevid/gi,
  },
  {
    name: "Linie",
    pattern: /linie/gi,
  },
  {
    name: "Anís del Mono",
    pattern: /(?:an[ií]s\sd)?el\smono(?:\s|$)|mono(?:\s|$)/gi,
  },
  {
    name: "La Castellana",
    pattern: /(?:la\s)?castellana(?!\svegecampo)/gi,
  },
  {
    name: "Chinchón",
    pattern: /chinch[oó]n/gi,
  },
  {
    name: "La Mocita",
    pattern: /la\smocita/gi,
  },
  {
    name: "Marie Brizard",
    pattern: /(?:marie\s|m\.)brizard/gi,
  },
  {
    name: "Ruavieja",
    pattern: /ruavieja/gi,
  },
  {
    name: "103",
    pattern: /(?<!deliplus)(?:\s|^)103(?!\sg)/gi,
  },
  {
    name: "Carlos I",
    pattern: /carlos\s[ií]/gi,
  },
  {
    name: "Fundador",
    pattern: /fundador/gi,
  },
  {
    name: "Gran Duque Alba",
    pattern: /gran\sduque\salba/gi,
  },
  {
    name: "Hennessy",
    pattern: /hennessy/gi,
  },
  {
    name: "Lepanto",
    pattern: /lepanto/gi,
  },
  {
    name: "Magno",
    pattern: /magno/gi,
  },
  {
    name: "Marquis de Montesquiou",
    pattern: /marquis\sde\smontesquiou/gi,
  },
  {
    name: "Soberano",
    pattern: /soberano/gi,
  },
  {
    name: "Terry",
    pattern: /terry/gi,
  },
  {
    name: "Torres",
    pattern: /(?<!hilario\s)torres/gi,
  },
  {
    name: "Veterano",
    pattern: /veterano/gi,
  },
  {
    name: "Baileys",
    pattern: /baileys/gi,
  },
  {
    name: "Buitral",
    pattern: /buitral/gi,
  },
  {
    name: "Carioca",
    pattern: /carioca/gi,
  },
  {
    name: "Moiled Original",
    pattern: /moiled\soriginal/gi,
  },
  {
    name: "Teichenné",
    pattern: /teichenn[eé]/gi,
  },
  {
    name: "Irish Valleys",
    pattern: /(?:irish\s)?valleys/gi,
  },
  {
    name: "Ampersand",
    pattern: /ampersand/gi,
  },
  {
    name: "Bombay Sapphire",
    pattern: /bombay\ssapp?h(?:ire)?/gi,
  },
  {
    name: "Carmela",
    pattern: /carmela/gi,
  },
  {
    name: "Citadelle",
    pattern: /citadelle/gi,
  },
  {
    name: "G-Vine",
    pattern: /g[\s-]vine/gi,
  },
  {
    name: "The Botanist",
    pattern: /the\sbotanist/gi,
  },
  {
    name: "Gordons",
    pattern: /gordons/gi,
  },
  {
    name: "Hendricks",
    pattern: /hendricks/gi,
  },
  {
    name: "Kinross",
    pattern: /kinross/gi,
  },
  {
    name: "Larios",
    pattern: /larios/gi,
  },
  {
    name: "Macaronesian",
    pattern: /macaronesian/gi,
  },
  {
    name: "Martin Millers",
    pattern: /(?:martin\s|m\.)miller[´]?s/gi,
  },
  {
    name: "Masters",
    pattern: /masters/gi,
  },
  {
    name: "MG",
    pattern: /^mg/gi,
  },
  {
    name: "Monkey 47",
    pattern: /monkey\s47/gi,
  },
  {
    name: "Nordés",
    pattern: /nord[ée]s(?:\sespaña)?/gi,
  },
  {
    name: "Puerto de Indias",
    pattern: /(?:puerto\s|p\.)de\sindias/gi,
  },
  {
    name: "Roku",
    pattern: /roku/gi,
  },
  {
    name: "Seagram's",
    pattern: /seagram[`'´]?s/gi,
  },
  {
    name: "Tanqueray",
    pattern: /tanqueray/gi,
  },
  {
    name: "V Colinas",
    pattern: /v\scolinas/gi,
  },
  {
    name: "White Fire",
    pattern: /white\sf?ire/gi,
  },
  {
    name: "Artemi",
    pattern: /artemi/gi,
  },
  {
    name: "Barbero Amaretto",
    pattern: /barbero(?:\samaretto)?/gi,
  },
  {
    name: "Bellamare",
    pattern: /bellamare/gi,
  },
  {
    name: "Caiman Love",
    pattern: /caiman\slove/gi,
  },
  {
    // I saw a case a 'Cambuncha'... Hiperdino is the worst
    name: "Cumbancha",
    pattern: /(?:cumbancha|cambuncha)/gi,
  },
  {
    name: "Cambure",
    pattern: /cambure/gi,
  },
  {
    name: "Catrina Love",
    pattern: /catrina\slove/gi,
  },
  {
    name: "Cobana",
    pattern: /cobana/gi,
  },
  {
    name: "Cointreau",
    pattern: /cointreau/gi,
  },
  {
    name: "Dama de Baza",
    pattern: /dama\sd[e|']\sbaza/gi,
  },
  {
    name: "Fernet Branca",
    pattern: /fernet\sbranca/gi,
  },
  {
    name: "Frangelico",
    pattern: /frangelico/gi,
  },
  {
    name: "Jägermeister",
    pattern: /j[äa]gg?ermeister/gi,
  },
  {
    name: "Licor 43",
    pattern: /licor\s43/gi,
  },
  {
    name: "Magua",
    pattern: /magua/gi,
  },
  {
    name: "Malibú",
    pattern: /malib[uú]/gi,
  },
  {
    name: "O'Millo",
    pattern: /(?:\s|^)o['`]?millo/gi,
  },
  {
    name: "Petroni",
    pattern: /petroni/gi,
  },
  {
    name: "Sheridans",
    pattern: /sheridans/gi,
  },
  {
    name: "Siroco",
    pattern: /siroco/gi,
  },
  {
    name: "Specht Pampelmuse",
    pattern: /specht\spampelmuse/gi,
  },
  {
    name: "Spritz & roll",
    pattern: /spritz\s&\sroll/gi,
  },
  {
    name: "Tia maria",
    pattern: /tia\smaria/gi,
  },
  {
    name: "Tunel",
    pattern: /tunel/gi,
  },
  {
    name: "Aguere",
    pattern: /aguere/gi,
  },
  {
    name: "Aldea",
    pattern: /aldea\s/gi,
  },
  {
    name: "Arehucas",
    pattern: /arehucas/gi,
  },
  {
    name: "Barceló",
    pattern: /barcel[oó]/gi,
  },
  {
    name: "Brugal",
    pattern: /brugal/gi,
  },
  {
    name: "Cacique",
    pattern: /cacique/gi,
  },
  {
    name: "Smirnoff",
    pattern: /smirnoff/gi,
  },
  {
    name: "Ketel One",
    pattern: /ketel\sone/gi,
  },
  {
    name: "Cîroc",
    pattern: /c[îi]roc/gi,
  },
  {
    name: "Jinzo",
    pattern: /jinzo/gi,
  },
  {
    name: "Tanqueray",
    pattern: /tanqueray/gi,
  },
  {
    name: "Gordon's",
    pattern: /gordon'?s/gi,
  },
  {
    name: "Zacapa",
    pattern: /zacapa/gi,
  },
  {
    name: "Pampero",
    pattern: /pampero/gi,
  },
  {
    name: "Captain Morgan",
    pattern: /captain\smorgan/gi,
  },
  {
    name: "Johnnie Walker",
    pattern: /(?:johnnie\s|j\.)walker/gi,
  },
  {
    name: "Black & White",
    pattern: /black\s+&\s+white/gi,
  },
  {
    name: "J&B",
    pattern: /j&b/gi,
  },
  {
    name: "Vat 69",
    pattern: /vat\s+69/gi,
  },
  {
    name: "Copper Dog",
    pattern: /copper\s+dog/gi,
  },
  {
    name: "White Horse",
    pattern: /white\s+horse/gi,
  },
  {
    name: "Windsor",
    pattern: /windsor/gi,
  },
  {
    name: "Single Malts",
    pattern: /single\s+malts/gi,
  },
  {
    name: "Cardhu",
    pattern: /cardhu/gi,
  },
  {
    name: "Mortlach",
    pattern: /mortlach/gi,
  },
  {
    name: "The Singleton",
    pattern: /(?:the\s)?singleton/gi,
  },
  {
    name: "Bell's",
    pattern: /bell's/gi,
  },
  {
    name: "Talisker",
    pattern: /talisker/gi,
  },
  {
    name: "Haig Club",
    pattern: /haig\s+club/gi,
  },
  {
    name: "Bulleit",
    pattern: /bulleit/gi,
  },
  {
    name: "Crown Royal",
    pattern: /crown\s+royal/gi,
  },
  {
    name: "Roe & CO",
    pattern: /roe\s+&\s+co/gi,
  },
  {
    name: "Don Julio",
    pattern: /don\s+julio/gi,
  },
  {
    name: "Baileys",
    pattern: /baileys/gi,
  },
  {
    name: "Belsazar",
    pattern: /belsazar/gi,
  },
  {
    name: "Pimm's",
    pattern: /pimm's/gi,
  },
  {
    name: "Guinness",
    pattern: /guin?ness/gi,
  },
  {
    name: "Smithwick's",
    pattern: /smithwick's/gi,
  },
  {
    name: "Diplomático",
    pattern: /diplom[aá]tico/gi,
  },
  {
    name: "Flor de Caña",
    pattern: /flor\sde\scaña/gi,
  },
  {
    name: "Guajiro",
    pattern: /guajiro/gi,
  },
  {
    name: "Havana Club",
    pattern: /havana(?:\sclub)?/gi,
  },
  {
    name: "Kojak",
    pattern: /kojak/gi,
  },
  {
    name: "Juanita",
    pattern: /juanita/gi,
  },
  {
    name: "Telde",
    pattern: /telde/gi,
  },
  {
    name: "Indias",
    pattern: /(?<!p\.de)(?:\s|^)indias/gi,
  },
  {
    name: "La Indiana",
    pattern: /la\sindiana/gi,
  },
  {
    name: "Matusalem",
    pattern: /matusalem/gi,
  },
  {
    name: "Chapala",
    pattern: /chapala/gi,
  },
  {
    name: "Jose Cuervo",
    pattern: /jos[eé]\scuervo/gi,
  },
  {
    name: "Sierra",
    pattern: /sierra/gi,
  },
  {
    name: "Aperol",
    pattern: /aperol/gi,
  },
  {
    name: "Campari",
    pattern: /campari/gi,
  },
  {
    name: "Cinzano",
    pattern: /cinzano/gi,
  },
  {
    name: "El 18",
    pattern: /(?:\s|^)el\s18/gi,
  },
  {
    name: "Ricard",
    pattern: /ricard\s/gi,
  },
  {
    name: "Yzaguirre",
    pattern: /yzaguirre/gi,
  },
  {
    name: "Absolut",
    pattern: /absolut(?!e\smen)(?:\s|$)/gi,
  },
  {
    name: "Beluga",
    pattern: /beluga/gi,
  },
  {
    name: "Belvedere",
    pattern: /belvedere/gi,
  },
  {
    name: "Blat",
    pattern: /blat/gi,
  },
  {
    name: "Grey Goose",
    pattern: /grey\s+goose/gi,
  },
  {
    name: "Karlova",
    pattern: /karlova/gi,
  },
  {
    name: "Koriv",
    pattern: /koriv/gi,
  },
  {
    name: "Mamont",
    pattern: /mamont/gi,
  },
  {
    name: "Moskovskaya",
    pattern: /moskovskaya/gi,
  },
  {
    name: "Rushkinoff",
    pattern: /rushkinoff/gi,
  },
  {
    name: "WKD",
    pattern: /wkd/gi,
  },
  {
    name: "100 pipers",
    pattern: /100\spipers/gi,
  },
  {
    name: "Ballantines",
    pattern: /ballantine'?s/gi,
  },
  {
    name: "Buchanan's",
    pattern: /buchanan[`'´]?s/gi,
  },
  {
    name: "Chivas",
    pattern: /chivas/gi,
  },
  {
    name: "Cutty Sark",
    pattern: /cutty\ssark/gi,
  },
  {
    name: "Dalmore",
    pattern: /dalmore/gi,
  },
  {
    name: "Doble V",
    pattern: /doble\sv(?:\s|$)/gi,
  },
  {
    name: "Drago Grain",
    pattern: /drago\sgrain/gi,
  },
  {
    name: "DYC",
    pattern: /dyc/gi,
  },
  {
    name: "Famous Grouse",
    pattern: /famous\sgrouse/gi,
  },
  {
    name: "Glenfiddich",
    pattern: /glenfiddich/gi,
  },
  {
    name: "Glenmorangie",
    pattern: /glenmorangie/gi,
  },
  {
    name: "Grants",
    pattern: /grants/gi,
  },
  {
    name: "Jack Daniels",
    pattern: /jack\s+daniel[']?s/gi,
  },
  {
    name: "Jameson",
    pattern: /jameson/gi,
  },
  {
    name: "John Haig",
    pattern: /john\shaig/gi,
  },
  {
    name: "Knockando",
    pattern: /knockando/gi,
  },
  {
    name: "Lagavulin",
    pattern: /lagavulin/gi,
  },
  {
    name: "Maciu",
    pattern: /maciu/gi,
  },
  {
    name: "Maker's Mark",
    pattern: /maker'?s\smark/gi,
  },
  {
    name: "Nikka",
    pattern: /nikka/gi,
  },
  {
    name: "Passport",
    pattern: /passport/gi,
  },
  {
    name: "James Webb",
    pattern: /james\swebb/gi,
  },
  {
    name: "Negrita",
    pattern: /negrita/gi,
  },
  {
    name: "La Recompensa",
    pattern: /la\srecompensa/gi,
  },
  {
    name: "Royal Swan",
    pattern: /royal\sswan/gi,
  },
  {
    name: "Knebep",
    pattern: /knebep/gi,
  },
  {
    name: "Dama Mayor",
    pattern: /dama\smayor/gi,
  },
  {
    name: "Puente Pazos",
    pattern: /puente\spazos/gi,
  },
  {
    name: "Franzini",
    pattern: /franzini/gi,
  },
  {
    name: "Amaretto Del Patriarca",
    pattern: /amaretto\sdel\spatriarca/gi,
  },
  {
    name: "El Mayu",
    pattern: /el\smayu/gi,
  },
  {
    name: "Polían",
    pattern: /pol[ií]an/gi,
  },
  {
    name: "El Lagar",
    pattern: /el\slagar/gi,
  },
  {
    name: "Cabré & Sabaté",
    pattern: /cabr[eé]\s&\ssabat[eé]/gi,
  },
  {
    name: "Magic",
    pattern: /(?<!deliplus\s)magic(?!.*malt.*)(?:\s|$)(?!clean)/gi,
  },
  {
    name: "Señorío De Requena",
    pattern: /señor[ií]o\sde\srequena/gi,
  },
  {
    name: "Viña Secret",
    pattern: /viña\ssecret/gi,
  },
  {
    name: "Max factor",
    pattern: /max\s+factor/gi,
  },
  {
    name: "Velvera",
    pattern: /velvera/gi,
  },
  {
    name: "Nuestra Señora del Carmen",
    pattern: /nuestra\sseñora\sd[ae]l\scarmen/gi,
  },
  {
    name: "Palmelita",
    pattern: /palmelita/gi,
  },
  {
    name: "St. Dalfour",
    pattern: /st\.?\sdalfour/gi,
  },
  {
    name: "La Lechera",
    pattern: /la\slechera/gi,
  },
  {
    name: "Belberry",
    pattern: /belberry/gi,
  },
  {
    name: "Del Monte",
    pattern: /del\smonte/gi,
  },
  {
    name: "Dole",
    pattern: /dole/gi,
  },
  {
    name: "Andros",
    pattern: /andros/gi,
  },
  {
    name: "Conchita",
    pattern: /conchita(?:\s|$)/gi,
  },
  {
    name: "Granja Flor",
    pattern: /granja\sflor/gi,
  },
  {
    name: "Bebé",
    pattern: /^beb[eé]/gi,
  },
  {
    name: "La Vieja Fábrica",
    pattern: /la\svieja\sf[aá]brica|vieja fabric/gi,
  },
  {
    name: "El apicultor",
    pattern: /el\sapicultor/gi,
  },
  {
    name: "Granja San Francisco",
    pattern: /granja\ssan\sfr?ancisco|granja s\.fco/gi,
  },
  {
    name: "Luna de Miel",
    pattern: /luna\sd[ea]\smiel/gi,
  },
  {
    name: "Agrisanz",
    pattern: /agrisanz/gi,
  },
  {
    name: "Montey",
    pattern: /montey/gi,
  },
  {
    name: "Fior Di Frutta",
    pattern: /fior\sd[ií]\sfrutta/gi,
  },
  {
    name: "Caña nature",
    pattern: /caña\snature/gi,
  },
  {
    name: "Freshmix",
    pattern: /freshmix/gi,
  },
  {
    name: "Rana",
    pattern: /(?:\s|^)rana(?:\s|$)/gi,
  },
  {
    name: "Taverna",
    pattern: /taverna/gi,
  },
  {
    name: "Fanta",
    pattern: /fanta(?:\s|$)/gi,
  },
  {
    name: "Finca Meleros",
    pattern: /finca\smeleros/gi,
  },
  {
    name: "Alvalle",
    pattern: /alvalle/gi,
  },
  {
    name: "Majao",
    pattern: /majao/gi,
  },
  {
    name: "Big Tom",
    pattern: /big\stom/gi,
  },
  {
    name: "La Huerta",
    pattern: /(?<!de\s)la\shuerta/gi,
  },
  {
    name: "Pombel",
    pattern: /pombel/gi,
  },
  {
    name: "Simón Life",
    pattern: /sim[oó]n\slife/gi,
  },
  {
    name: "Summum",
    pattern: /summum/gi,
  },
  {
    name: "Via nature",
    pattern: /via\snature/gi,
  },
  {
    name: "Cuatro Ríos",
    pattern: /cuatro\sr[ií]os/gi,
  },
  {
    name: "Mano de Hierro",
    pattern: /mano\sde\shierro/gi,
  },
  {
    name: "Moralejo",
    pattern: /moralejo/gi,
  },
  {
    name: "Doux",
    pattern: /doux/gi,
  },
  {
    name: "Menceyes",
    pattern: /menceyes/gi,
  },
  {
    name: "Sushita",
    pattern: /sushita/gi,
  },
  {
    name: "Piz Buin Tan & Protect",
    pattern: /piz\sbuin(?:\stan\s[&y]\sprotect)?/gi,
  },
  {
    name: "Delial",
    pattern: /delial/gi,
  },
  {
    name: "Krystal",
    pattern: /krystal/gi,
  },
  {
    name: "1916",
    pattern: /1916/gi,
  },
  {
    name: "Tulipán Negro",
    pattern: /\stn\s|tulip[aá]n negro|roll on deo|spray deo/gi,
  },
  {
    name: "Brummel",
    pattern: /brumm?el/gi,
  },
];

export default Drinks;
