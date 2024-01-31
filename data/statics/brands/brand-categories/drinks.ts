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
    pattern: /codorn[ií][uú]/gi,
  },
  {
    name: "AT roca",
    pattern: /at roca/gi,
  },
  //This is too generic, causes too much conflicts so we will specify negative lookaheads
  {
    name: "Blue",
    pattern: /blue(?!\s?[dragon])/gi,
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
    pattern: /juve\s?&\s?camps/gi,
  },
  {
    name: "Rondel",
    pattern: /rondel/gi,
  },
  {
    name: "Romale",
    pattern: /romale/gi,
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
    pattern: /veuve clicquot/gi,
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
    pattern: /urban/gi,
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
    pattern: /san pellegrino/gi,
  },
  {
    name: "Vichy Catalán",
    pattern: /vichy\scatal[aá]n/gi,
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
    pattern: /sol[aá]n\sde\scabras/gi,
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
    pattern: /(?:an[ií]s\sd)?el\smono/gi,
  },
  {
    name: "La Castellana",
    pattern: /(?:la\s)?castellana/gi,
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
    pattern: /marie\sbrizard/gi,
  },
  {
    name: "Ruavieja",
    pattern: /ruavieja/gi,
  },
  {
    name: "103",
    pattern: /103/gi,
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
    pattern: /torres/gi,
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
    pattern: /bombay\ssapp?hire/gi,
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
    pattern: /martin\smillers/gi,
  },
  {
    name: "Masters",
    pattern: /masters/gi,
  },
  {
    name: "MG",
    pattern: /mg/gi,
  },
  {
    name: "Monkey 47",
    pattern: /monkey\s47/gi,
  },
  {
    name: "Nordes",
    pattern: /nordes(?:\sespaña)?/gi,
  },
  {
    name: "Puerto de Indias",
    pattern: /puerto\sde\sindias/gi,
  },
  {
    name: "Roku",
    pattern: /roku/gi,
  },
  {
    name: "Seagram's",
    pattern: /seagram'?s/gi,
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
    pattern: /dama\sd(?:e|')\sbaza/gi,
  },
  {
    name: "Fernet Branca",
    pattern: /fernet\sbranca/gi,
  },
  {
    name: "Frangelico",
    pattern: /frangelico/gi,
  }
];

export default Drinks;
