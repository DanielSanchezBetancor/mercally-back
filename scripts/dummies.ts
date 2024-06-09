import { HistoryPrice } from "../orm/HistoryPrices/HistoryPricesBase";
import { Price } from "../orm/prices/base";
import { Product } from "../orm/products/base";

const ID_PRODUCTS = [1, 2, 3, 4, 5]
const ID_STORES = [1, 2, 3]
const FRUITS = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Watermelon']
const PRICES: Price[] = []
const HISTORY_PRICES: HistoryPrice[] = []
const PRODUCTS: Product[] = []
const DATES: string[] = [
  '2021-01-01',
  '2021-01-02',
  '2021-01-03',
]

ID_PRODUCTS.forEach(idProduct => {
  ID_STORES.forEach(idStore => {
    PRICES.push({
      id: PRICES.length,
      id_product: idProduct,
      id_store: idStore,
      price: (Math.random() * 10).toFixed(2),
      price_per_unit: (Math.random() * 2).toFixed(2),
    })
    DATES.forEach(date => {
      HISTORY_PRICES.push({
        id: HISTORY_PRICES.length + 1,
        id_product: idProduct,
        id_store: idStore,
        price: (Math.random() * 10).toFixed(2),
        price_per_unit: (Math.random() * 2).toFixed(2),
        date,
      })
    })
  })
  PRODUCTS.push({
    id: idProduct,
    name: FRUITS[idProduct - 1],
    is_white_brand: randomBoolean(),
    id_category: 1,
    id_brand: 1,
  })
})

function randomBoolean() {
  return Math.random() < 0.5 ? 0 : 1
}

export { PRICES, PRODUCTS, HISTORY_PRICES };
