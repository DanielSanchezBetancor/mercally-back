import { ICategoriesRegex } from "../../../../types/category";
import { convertToRegex } from "../../category-regex";
import PantrySoupBroth from "./pantry-soup-broth";
import PantrySauces from "./pantry-sauces";

const PantryPatterns = {
  ...PantrySoupBroth,
  ...PantrySauces,
}

const PantryRegex = convertToRegex(PantryPatterns)

const PantryCategories: ICategoriesRegex = {
  Despensa: {
    name: "Despensa",
    pattern: new RegExp(PantryRegex, "gi"),
  },
}

export { PantryPatterns }
export default PantryCategories;
