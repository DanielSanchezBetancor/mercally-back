import { TBrand } from "../../../../types/brand";
import Categories from "../../../category/category";

const StoreRoomSpreadableBrands: TBrand[] = [
  {
    name: "Nutella",
    pattern: /nutella/gi,
    onlyCategory: Categories.Despensa,
  },
  {
    name: "La Piara",
    pattern: /la piara/gi,
    onlyCategory: Categories.Despensa,
  },
  {
    name: "Martiko",
    pattern: /martiko/gi,
    onlyCategory: Categories.Despensa,
  },
  {
    name: "Capdevila",
    pattern: /capdevila/gi
  },
  {
    name: "Gourmet Cazorla",
    pattern: /gourmet cazorla/gi
  },
];

export default StoreRoomSpreadableBrands;
