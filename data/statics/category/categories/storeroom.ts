import { ICategoriesRegex } from "../../../types/category";
import CategoryPatterns, { convertToRegex } from "../category-regex";
import { HygienePatterns } from "./hygiene";

const chips = "(?:papa|patata)s? frita";
const driedFruit = "frutos secos|cacahuete|anacardo|palomitas|ma[ií]z horneado";
const caramels = "nube|caramelo|goma|regaliz|chicle|golosina|gominola";
const snacks = "snacks|aperitivo";
const tuna = "at[uú]n";
const chocolates = "chocolate";
const spreadable = "paté|foie gras|untar";

const StoreRoomPatterns = {
  PapasFritas: new RegExp(`${chips}`, "gi"),
  FrutosSecos: new RegExp(`${driedFruit}`, "gi"),
  Caramelos: new RegExp(`${caramels}`, "gi"),
  Snacks: new RegExp(`${snacks}`, "gi"),
  Atun: new RegExp(`${tuna}`, "gi"),
  Chocolates: new RegExp(`${chocolates}`, "gi"),
  Untable: new RegExp(`${spreadable}`, "gi"),
};

const StoreRoomRegex = convertToRegex(StoreRoomPatterns);

const StoreRoomCategories: ICategoriesRegex = {
  Despensa: {
    name: "Despensa",
    pattern: new RegExp(StoreRoomRegex, "gi"),
    excluders: [
      CategoryPatterns.Verduras,
      /frutos|fresas|ar[aá]ndanos|dátiles|pasas|ciruela/gi,
      HygienePatterns.Limpiadores,
      CategoryPatterns.Preparado,
    ],
  },
};

export { StoreRoomPatterns };
export default StoreRoomCategories;
