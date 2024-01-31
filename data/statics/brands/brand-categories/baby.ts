import { TBrand } from "../../../types/brand";
import Categories from "../../category/category";

const BabyBrands: TBrand[] = [
  {
    name: "Deliplus",
    pattern: /deliplus/gi,
    onlyCategory: Categories.Higiene,
  },
  {
    name: "Dodot",
    pattern: /dodot/gi,
  },
];

export default BabyBrands;
