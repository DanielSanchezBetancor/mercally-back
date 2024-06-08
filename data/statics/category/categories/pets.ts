import { ICategoriesRegex } from "../../../types/category";
import CategoryPatterns, { convertToRegex } from "../category-regex";
import { StoreRoomPatterns } from "./storeroom/storeroom";

const toys = "cord[oón]|juguete|pelota|hueso";
const utils = "bowl";
const dogs = "perro|dog";
const cats = "cat|gato";
const pets = "mascota|senior|raza|cachorro|junior";
const health = "dentalife|par[aá]sit";

const PetsPatterns = {
  Juguetes: new RegExp(`${toys}`, "gi"),
  Utiles: new RegExp(`${utils}`, "gi"),
  Perros: new RegExp(dogs, "gi"),
  Gatos: new RegExp(cats, "gi"),
  Mascotas: new RegExp(pets, "gi"),
  Salud: new RegExp(health, "gi"),
};

const PetsRegex = convertToRegex(PetsPatterns);

const PetsCategories: ICategoriesRegex = {
  Mascotas: {
    name: "Mascotas",
    pattern: new RegExp(PetsRegex, "gi"),
    excluders: [
      StoreRoomPatterns.Snacks,
      StoreRoomPatterns.Atun,
      CategoryPatterns.Preparado,
    ],
  },
};

export { PetsPatterns };
export default PetsCategories;
