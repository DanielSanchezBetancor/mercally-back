const cider = "sidra|cider";
const cava = "cava";
const champagne = "champagne";

const CellarCiderChampagneCava = {
  Sidra: new RegExp(cider, "gi"),
  Cava: new RegExp(cava, "gi"),
  Champan: new RegExp(champagne, "gi"),
};

export default CellarCiderChampagneCava;
