import { TBrand } from "../../../../types/brand";
import CellarCategories from "../../../category/categories/cellar/cellar";

const CellarLiqueur: TBrand[] = [
  {
    name: "Jägermeister",
    pattern: /j[äa]gg?ermeister/gi,
    onlyCategory: CellarCategories.Bodega
  },
]

export default CellarLiqueur;
