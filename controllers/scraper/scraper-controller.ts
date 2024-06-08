import { NextFunction, Request, Response } from "express";
import { identifyBrand } from "../../data/statics/brands/brands";
import {
  identifyCategory
} from "../../data/statics/category/category";
import { getProductName, identifyUnits } from "../../data/statics/products";
import { TNewCatalog } from "../../data/types/catalog";
import { Product } from "../../data/types/product";
import { logIntoFile, saveLogFile } from "../../helpers/monitor";
import { insertProduct } from "../../orm/base/products";

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

const parseCatalog = async (
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

    await processProduct(productName, newCatalog, storeName);
  }

  logIntoFile("Catálogo final", JSON.stringify(newCatalog));

  return saveLogFile();
};

const saveNewCatalog = async (
  newCatalog: TNewCatalog,
  category: string,
  brand: string,
  product: string,
  unit: string
) => {
  const newProduct: Omit<Product, 'idProduct'> = {
    product,
    category,
    brand,
    unit,
  };

  logIntoFile("Saving new product", newProduct, 3);

  if (!newCatalog[category]) {
    newCatalog[category] = [];
  }

  newCatalog[category].push(newProduct);
  await insertProduct(newProduct);
};
const processProduct = async (
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

  await saveNewCatalog(newCatalog, category.name, name, realProductName, unit);
};

export { saveCatalog };
