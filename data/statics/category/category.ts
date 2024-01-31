import { ICategoriesRegex, TCategoryRegex } from "../../types/category";
import BabyCategories from "./categories/baby";
import DrinksCategories, { DrinkPatterns } from "./categories/drinks";
import FridgeCategories, { FridgePatterns } from "./categories/fridge";
import HygieneCategories from "./categories/hygiene";
import NutritionCategories, { NutritionPatterns } from "./categories/nutrition";
import StoreRoomCategories, { StoreRoomPatterns } from "./categories/storeroom";
import CategoryPatterns from "./category-regex";

const STATIC_CATEGORIES: ICategoriesRegex = {
  Abrillantador: {
    name: "Abrillantador",
    pattern: /abrillantador/gi,
  },
  Bombon: {
    name: "Bombónes",
    pattern: /bomb[oó]n(es)?/gi,
  },

  Cereales: {
    name: "Cereales",
    pattern: /cereales/gi,
  },
  Panaderia: {
    name: "Panadería",
    pattern: /croissant|napolitanas|dorayaki|hojaldre|palmera|rosqui/gi,
  },
  ...FridgeCategories,
  ...DrinksCategories,
  ...StoreRoomCategories,
  ...BabyCategories,
  ...HygieneCategories,
  ...NutritionCategories,
};

const CATEGORIES: ICategoriesRegex = {
  Verduras: {
    name: "Verduras",
    pattern: CategoryPatterns.Verduras,
    excluders: [
      STATIC_CATEGORIES.Cereales.pattern,
      STATIC_CATEGORIES.Salsas.pattern,
    ],
  },
  Preparado: {
    name: "Comida preparada",
    pattern: CategoryPatterns.Preparado,
    excluders: [
      STATIC_CATEGORIES.Salsas.pattern,
      STATIC_CATEGORIES.Panaderia.pattern,
      CategoryPatterns.Verduras,
      NutritionPatterns.Aceitunas,
    ],
  },

  Azucar: {
    name: "Azúcar",
    pattern: /az[uú]car|panela|stevia|edulcorante|endulzante|sacarina/gi,
    excluders: [
      STATIC_CATEGORIES.Panaderia.pattern,
      DrinkPatterns.Bebida,
      DrinkPatterns.Smoothie,
      DrinkPatterns.Zumos,
      FridgePatterns.Yogur,
    ],
  },
};

const Categories: ICategoriesRegex = {
  ...STATIC_CATEGORIES,
  ...CATEGORIES,
};

const identifyCategory = (data: string, exclusiveCategory?: TCategoryRegex) => {
  const identifiedCategories = Object.keys(Categories).filter((categoryKey) => {
    const category = Categories[categoryKey];

    //Brand has an exclusive category
    if (exclusiveCategory) {
      const isCorrectCategory = category.name === exclusiveCategory.name;

      if (isCorrectCategory) {
        return true;
      }

      return false;
    }

    const regex = new RegExp(category.pattern);
    const categoryExists = regex.exec(data);

    if (categoryExists) {
      return true;
    }

    return false;
  });

  if (identifiedCategories) {
    const cloned = [...identifiedCategories];
    cloned.sort((a, b) => {
      if (
        Categories[a].excluders?.find((category) =>
          category.exec(Categories[b].pattern.source)
        )
      )
        return -1;
      return 1;
    });

    return Categories[cloned[0]];
  }
};

const identifyExcludedCategories = (excluders: RegExp[], data: string) => {
  const hasExcludedCategory = excluders.some((excluderRegex) => {
    const regex = new RegExp(excluderRegex);
    return regex.exec(data);
  });

  return hasExcludedCategory;
};

export { identifyCategory, identifyExcludedCategories };
export default Categories;
