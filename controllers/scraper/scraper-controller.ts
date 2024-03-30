import { NextFunction, Request, Response } from "express";
import { identifyBrand } from "../../data/statics/brands/brands";
import Categories, {
  identifyCategory,
  identifyExcludedCategories,
} from "../../data/statics/category/category";
import { getProductName, identifyUnits } from "../../data/statics/products";
import { TNewCatalog } from "../../data/types/catalog";
import { logIntoFile, saveLogFile } from "../../helpers/monitor";
import { TProduct } from "../../data/types/product";

interface ISaveCatalogRequest {
  catalog: string;
}

const saveCatalog = (
  req: Request<ISaveCatalogRequest>,
  res: Response,
  next: NextFunction
) => {
  if (!req?.body) {
    return stopExecution(res, next, "No request detected");
  }

  const {
    catalog,
    storeName,
  }: { catalog: ISaveCatalogRequest["catalog"]; storeName: string } = req.body;

  if (!catalog) {
    return stopExecution(res, next, "No request detected");
  }

  return parseCatalog(catalog, storeName).then(() => {
    return res.sendStatus(200);
  });
};

// Mover a donde toque
const stopExecution = (
  res: Response,
  next: NextFunction,
  msg: string | number
) => {
  res.send(msg);
  next();
};

const parseCatalog = (
  catalog: ISaveCatalogRequest["catalog"],
  storeName: string
) => {
  const newCatalog: TNewCatalog = {};

  const parsedCatalog: {
    productName: string;
  }[] = JSON.parse(catalog);

  logIntoFile("Catalogo recibido: ", catalog);

  for (let product of parsedCatalog) {
    const productName = product.productName;
    logIntoFile("Encontrado producto", productName, 1);
    logIntoFile("Analizando contenido", undefined, 1);

    // for (let categoryKey of Object.keys(Categories)) {
    //   processCategory(categoryKey, productName, newCatalog);
    // }
    processProduct(productName, newCatalog, storeName);
  }

  logIntoFile("Catálogo final", JSON.stringify(newCatalog));

  return saveLogFile();
};

const saveNewCatalog = (
  newCatalog: TNewCatalog,
  category: string,
  brand: string,
  product: string,
  unit: string
) => {
  const newProduct: TProduct = {
    name: product,
    brand,
    unit,
  };

  logIntoFile("Saving new product", newProduct, 3);

  if (!newCatalog[category]) {
    newCatalog[category] = [];
  }

  newCatalog[category].push(newProduct);
};
const processProduct = (
  productName: string,
  newCatalog: TNewCatalog,
  storeName: string
) => {
  const brand = identifyBrand(productName, storeName);

  if (!brand) {
    logIntoFile("Marca no encontrada", undefined, 2);
    return;
  }
  logIntoFile("Encontrada marca: ", brand.name, 2);

  const category = identifyCategory(productName, brand.onlyCategory);

  if (!category) {
    logIntoFile("Categoría no encontrada", undefined, 2);
    return;
  }

  const units = identifyUnits(productName);

  if (!units) {
    logIntoFile("Unidades no encontradas", undefined, 2);
    return;
  }
  const { name, pattern } = brand;
  const unit = units[0];
  const realProductName = getProductName(productName, pattern, unit);

  logIntoFile("Encontrada categoria: ", category.name, 2);
  logIntoFile("Encontrado peso: ", unit, 2);
  logIntoFile("Encontrado nombre: ", realProductName, 2);

  saveNewCatalog(newCatalog, category.name, name, realProductName, unit);
};

const processCategory = (
  categoryKey: string,
  productName: string,
  newCatalog: TNewCatalog,
  storeName: string
) => {
  const brand = identifyBrand(productName, storeName);

  if (brand) {
    const { name, pattern, onlyCategory } = brand;
    logIntoFile("Encontrada marca: ", name, 2);

    const category = Categories[categoryKey];
    const excluders = category.excluders ?? [];
    const categoryExists = identifyCategory(
      // category,
      productName
      // onlyCategory
    );
    const hasExcludedCategory = identifyExcludedCategories(
      excluders,
      productName
    );

    if (!hasExcludedCategory) {
      const units = identifyUnits(productName);

      if (categoryExists && units) {
        const unit = units[0];
        const realProductName = getProductName(productName, pattern, unit);

        logIntoFile("Encontrada categoria: ", categoryKey, 2);
        logIntoFile("Encontrado peso: ", unit, 2);
        logIntoFile("Encontrado nombre: ", realProductName, 2);

        saveNewCatalog(newCatalog, categoryKey, name, realProductName, unit);
      } else {
        logIntoFile(
          "Categoria / unidad no encontrada",
          {
            category: categoryKey,
            brand: brand?.name ?? "Unknown",
            units,
          },
          2
        );
      }
    } else {
      logIntoFile("Categoria con exclusion. Saltamos.", undefined, 3);
    }
  }
};

export { saveCatalog };
