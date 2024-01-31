const comidasFrias = "ensaladilla|ensalada|migas|gyoza|rosca|sobrasada";
const platosCalientes =
  "menestra|salteado|parrillada|tempura|pisto|rollitos|croqueta|wok|yakisoba|pizza|piadina";
const sopasYCaldos = "caldo|crema|sopa|fideos orientales|callos|fabada";
const tapasYEntrantes =
  "barquer?ta|salmorejo|hummus|pastel|s[aá]ndwich|gazpacho|tortilla|nuggets";
const guarniciones = "patatas con all?ioli|untap[aá]n|tofu|tabul[eé]|tsatsiki";
const otrosPlatos =
  "brioche|lasaña|canelon|spaghetti|macarrones|cocid[oa]|asado|frito|roti|confitad[oa]|guisad[oa]|yatekomo|vegetales|quiche|focaccia";

const foodToTheSomething = "a la (?:barbacoa|madrileña|riojana|jardinera)";
const FOOD_WITH_SOMETHING =
  "con (?:all?ioli|tomate|berenjenas|espinacas|proteina|setas)";

const CategoryPatterns = {
  Preparado: new RegExp(
    `${comidasFrias}|${platosCalientes}|${sopasYCaldos}|${tapasYEntrantes}|${guarniciones}|${otrosPlatos}|${foodToTheSomething}|${FOOD_WITH_SOMETHING}`,
    "gi"
  ),
  Verduras: new RegExp(
    /verdura|guisante|cebolla|ajo|alcachofa|espinaca|jud[ií]a|garraf[oó]n|ensaladilla|habita|haba|seta|pimiento|ma[ií]z|br[oó]coli|col[es] de bruselas|coliflor|perejil|soja|esparr[aá]go|espinacas|zanahoria|patata|papa|acelgas|champiñ[oó]n|beterrada/gi
  ),
};

const convertToRegex = (patterns: { [x: string]: RegExp }) => {
  return Object.values(patterns)
    .map((pattern) => pattern.source)
    .join("|");
};

export { convertToRegex };
export default CategoryPatterns;
