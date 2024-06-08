import { TBrand } from "../../../../types/brand";
import CellarCategories from "../../../category/categories/cellar/cellar";

const CellarCiderChampagneCava: TBrand[] = [
  {
    name: "Menendez Natural",
    pattern: /menendez natural/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "Ladrón de Manzanas",
    pattern: /(?:ladr[oó]n de\s|l\.)manzanas/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "El Gaitero",
    pattern: /el gaitero?/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "Trabanco",
    pattern: /trabanco/gi,
    onlyCategory: CellarCategories.Bodega
  },

  {
    name: "Möet & Chandon",
    pattern: /m[öo]et\s?&\s?chandon/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "Veuve Clicquot",
    pattern: /veuve clic?quot/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "G. H. Mumm",
    pattern: /g.\s?h.\s?mumm/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "Charles De Courance",
    pattern: /charles de courance/gi,
    onlyCategory: CellarCategories.Bodega
  },
  {
    name: "Piper-Heidsieck",
    pattern: /piper-heidsieck/gi,
    onlyCategory: CellarCategories.Bodega
  },
];

export default CellarCiderChampagneCava;
