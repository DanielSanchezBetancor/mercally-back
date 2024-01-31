import { TBrand } from "../../../types/brand";
import Categories from "../../category/category";

const PetsBrands: TBrand[] = [
  {
    name: "Félix",
    pattern: /f[eé]lix/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Friskies",
    pattern: /friskies/gi,
    onlyCategory: Categories.Mascotas,
  },
  // This brand is too generic, so we will add negative condition lookaheads
  {
    name: "Gourmet",
    pattern: /gourmet(?!\s?(cazorla))/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Perfect Fit",
    pattern: /perfect fit/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Whiskas",
    pattern: /whiskas/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Purina",
    pattern: /purina/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Uc wet",
    pattern: /uc wet/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Affinity",
    pattern: /affinity/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Ultima",
    pattern: /ultima/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Brekkies",
    pattern: /brekkies/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Uc",
    pattern: /^Uc[ -]/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Cats Best",
    pattern: /cats best/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Catisfaction",
    pattern: /catisfaction/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Dixie",
    pattern: /dixie/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "One",
    pattern: /^one/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Vitakraft",
    pattern: /vitakraft/gi,
    onlyCategory: Categories.Mascotas,
  },
  {
    name: "Granzoo",
    pattern: /granzoo/gi,
  },
  {
    name: "Natura",
    pattern: /natura/gi,
  },
  {
    name: "Delikuit",
    pattern: /delikuit/gi,
  },
  {
    name: "Compy",
    pattern: /compy/gi,
  },
  {
    name: "Krislin",
    pattern: /krislin/gi,
  },
  {
    name: "Nuske",
    pattern: /nuske/gi,
  },
  {
    name: "Single",
    pattern: /single/gi,
  }
];

export default PetsBrands;
