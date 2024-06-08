import { TBrand } from "../../../../types/brand";
import CellarCiderChampagneCava from "./cellar-cider-champagne-cava";
import CellarLiqueur from "./cellar-liqueur";

const Cellar: TBrand[] = [
  ...CellarCiderChampagneCava,
  ...CellarLiqueur
]

export default Cellar;
