import { ICategoriesRegex } from "../../../types/category";
import { StoreRoomPatterns } from "./storeroom/storeroom";

const olive = "aceite|aove";
const olives = "aceituna|olivas|gildas|guindilla";
const pickled = "encurtido";
const vinegar = "vinagre";

const NutritionPatterns = {
  Aceite: new RegExp(`${olive}`, "gi"),
  Aceitunas: new RegExp(`${olives}`, "gi"),
  Encurtidos: new RegExp(`${pickled}`, "gi"),
  Vinagre: new RegExp(`${vinegar}`, "gi"),
};

// Esto serian subcategories en verdad
const NutritionCategories: ICategoriesRegex = {
  Aceite: {
    name: "Aceite",
    pattern: new RegExp(NutritionPatterns.Aceite, "gi"),
    excluders: [
      StoreRoomPatterns.Atun,
      /abrillantador/gi,
    ],
  },
  Vinagre: {
    name: "Vinagre",
    pattern: new RegExp(NutritionPatterns.Vinagre, "gi"),
  },
  Aceitunas: {
    name: "Aceitunas",
    pattern: new RegExp(NutritionPatterns.Aceitunas, "gi"),
  },
  Encurtidos: {
    name: "Encurtidos",
    pattern: new RegExp(NutritionPatterns.Encurtidos, "gi"),
  },
};

export { NutritionPatterns };
export default NutritionCategories;
