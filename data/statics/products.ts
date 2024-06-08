const UNIT_REGEX = /\d+\s?(?:l|ml|cl|kg|g)/gi;

const identifyUnits = (data: string) => {
  const unitRegex = new RegExp(UNIT_REGEX);
  const units = unitRegex.exec(data);

  return units;
};

const getProductName = (productName: string, pattern: RegExp, unit: string) => {
  const productNameSplit = productName.split(pattern);

  const productNameWithoutBrand = Object.values(productNameSplit)
    .map((productName) => {
      if (productName) {
        const regex = new RegExp(pattern);

        if (!regex.exec(productName)) {
          return productName.trim();
        }
      }

      return "";
    })
    .join(" ");

  // Estoy suponiendo mucho que siempre sea ['nombre de producto', 'unidad'], pero hasta que falle :D
  const realProductName = productNameWithoutBrand.split(unit)[0].trim();

  return realProductName;
};

export { identifyUnits, getProductName };
