import { ICategoriesRegex } from "../../../types/category";
import { convertToRegex } from "../category-regex";
import { FruitsPatterns } from "./fruits";

const yoghurt = "danonino|petit|postre l[aá]cteo|yog[uú]r";
const frozen = "[ultra]congelad[oa]|hojaldre";

const FridgePatterns = {
  Yogur: new RegExp(yoghurt, "gi"),
  Congelados: new RegExp(frozen, "gi"),
};

const FridgeRegex = convertToRegex(FridgePatterns);

const FridgeCategories: ICategoriesRegex = {
  Nevera: {
    name: "Nevera",
    pattern: new RegExp(FridgeRegex, "gi"),
    excluders: [FruitsPatterns.Frutas],
  },
};

export { FridgePatterns };
export default FridgeCategories;
