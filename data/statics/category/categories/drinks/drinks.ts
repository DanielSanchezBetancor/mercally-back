import { ICategoriesRegex } from "../../../../types/category";
import { convertToRegex } from "../../category-regex";
import VegetalDrinksPatterns from "./vegetal-drinks";

const mixedJuices = "fruta + leche";
const juice = "zumo|n[eé]ctar";
const smoothie = "smoothie";
const drinks = "bebida";

/**
 * Bebidas cambiara por el que toque, 'bebida' es demasiado generico
 */
const DrinkPatterns = {
  Zumos: new RegExp(`${juice}|${mixedJuices}`, "gi"),
  Smoothie: new RegExp(`${smoothie}`, "gi"),
  Bebida: new RegExp(`${drinks}`, "gi"),
  ...VegetalDrinksPatterns,
};

const DrinksRegex = convertToRegex(DrinkPatterns);

const DrinksCategories: ICategoriesRegex = {
  Bebidas: {
    name: "Bebidas",
    pattern: new RegExp(DrinksRegex, "gi"),
  },
};

export { DrinkPatterns };
export default DrinksCategories;
