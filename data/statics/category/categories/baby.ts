import { ICategoriesRegex } from "../../../types/category";
import { convertToRegex } from "../category-regex";
import { HygienePatterns } from "./hygiene";
import { PetsPatterns } from "./pets";

const baby = "beb[eé]|infantil";
const diapers = "pañal|cambiador";
const tissues = "toallitas";

const BabyPatterns = {
  Bebe: new RegExp(`${baby}`, "gi"),
  Panales: new RegExp(`${diapers}`, "gi"),
  Toallitas: new RegExp(tissues, "gi"),
};

const BabyRegex = convertToRegex(BabyPatterns);

const BabyCategories: ICategoriesRegex = {
  Bebe: {
    name: "Bebé",
    pattern: new RegExp(BabyRegex, "gi"),
    excluders: [HygienePatterns.Limpiadores, PetsPatterns.Mascotas],
  },
};

export { BabyPatterns };
export default BabyCategories;
