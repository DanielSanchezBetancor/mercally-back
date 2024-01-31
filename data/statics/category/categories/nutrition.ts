import { ICategoriesRegex } from "../../../types/category";
import { StoreRoomPatterns } from "./storeroom";

const olive = "aceite|aove";
const olives = "aceituna|olivas|gildas|guindilla";
const pickled = "encurtido";
const vinegar = "vinagre";
const sauces = "mayonesa|ketchup|alioli";

const NutritionPatterns = {
  Aceite: new RegExp(`${olive}`, "gi"),
  Aceitunas: new RegExp(`${olives}`, "gi"),
  Encurtidos: new RegExp(`${pickled}`, "gi"),
  Vinagre: new RegExp(`${vinegar}`, "gi"),
  Salsas: new RegExp(`${sauces}`, "gi"),
};

// Esto serian subcategories en verdad
const NutritionCategories: ICategoriesRegex = {
  Aceite: {
    name: "Aceite",
    pattern: new RegExp(NutritionPatterns.Aceite, "gi"),
    excluders: [
      StoreRoomPatterns.Atun,
      /abrillantador/gi,
      NutritionPatterns.Salsas
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
  Salsas: {
    name: "Salsas",
    pattern: new RegExp(NutritionPatterns.Salsas, "gi"),
  },
};

export { NutritionPatterns };
export default NutritionCategories;
