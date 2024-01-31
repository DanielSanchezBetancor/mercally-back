import { ICategoriesRegex } from "../../../types/category";
import { convertToRegex } from "../category-regex";

const brushes = "cepillo";
const cleaners =
  "limpiador|crem[ae]|s[eé]rum|gel|bastoncillos|jab[oó]n|toallita";
const face =
  "ampolla|contorno|arrugas|hyaluron|manchas|m[aá]scar|maquilla|age|facial|micelar|antimancha|parche";

const HygienePatterns = {
  Cepillos: new RegExp(`${brushes}`, "gi"),
  Limpiadores: new RegExp(`${cleaners}`, "gi"),
  Cara: new RegExp(face, "gi"),
};

const HygieneRegex = convertToRegex(HygienePatterns);

const HygieneCategories: ICategoriesRegex = {
  Higiene: {
    name: "Higiene",
    pattern: new RegExp(HygieneRegex, "gi"),
    excluders: [/croissant|napolitanas|dorayaki|hojaldre|palmera|rosqui/gi],
  },
};

export { HygienePatterns };
export default HygieneCategories;
