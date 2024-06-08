import Price from "../orm/prices/base";
import Products from "../orm/products/Products";

const ID_PRODUCTS = [1, 2, 3, 4, 5]
const ID_STORES = [1, 2, 3]
const FRUITS = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Watermelon']
const PRICES: ReturnType<Price["getFields"]>[] = []
const PRODUCTS: ReturnType<Products["getFields"]>[] = []

ID_PRODUCTS.forEach(idProduct => {
  ID_STORES.forEach(idStore => {
    PRICES.push({
      id_product: idProduct,
      id_store: idStore,
      price: (Math.random() * 10).toFixed(2),
      price_per_unit:(Math.random() * 2).toFixed(2),
    })
  })
  PRODUCTS.push({
    name: FRUITS[idProduct - 1],
    is_white_brand: randomBoolean(),
    id_category: 1,
  })
})

function randomBoolean() {
  return Math.random() < 0.5 ? 0 : 1
}

export { PRICES, PRODUCTS }