import { ICategoriesRegex } from "../../../../types/category";
import { convertToRegex } from "../../category-regex";
import CellarCiderCava from "./cellar-cider-champagne-cava";
import CellarLiqueur from "./cellar-liqueur";

const CellarPatterns = {
  ...CellarCiderCava,
  ...CellarLiqueur,
}

const CellarRegex = convertToRegex(CellarPatterns)

const CellarCategories: ICategoriesRegex = {
  Bodega: {
    name: "Bodega",
    pattern: new RegExp(CellarRegex, "gi"),
  },
}

export { CellarPatterns }
export default CellarCategories;
