import { ICategoriesRegex } from "../../../types/category";
import { convertToRegex } from "../category-regex";

const fruits = "frutos|fresas|ar[aá]ndanos|dátiles|pasas|ciruela";

const FruitsPatterns = {
  Frutas: new RegExp(fruits, "gi"),
};

const FruitsRegex = convertToRegex(FruitsPatterns);

const Fruits: ICategoriesRegex = {
  Frutas: {
    name: "Frutas",
    pattern: new RegExp(FruitsRegex, "gi"),
    excluders: [
      /cord[oón]|bowl|mascota|juguete|pelota|dentalife|perro|senior|dog|raza|par[aá]sit|hueso|cachorro|junior|cat|gato/gi,
    ],
  },
};

export { FruitsPatterns };
export default Fruits;
