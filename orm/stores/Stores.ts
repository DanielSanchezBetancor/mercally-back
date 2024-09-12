import { Store, StoresBase } from './base/StoresBase';

type A<T> = T & { id_product: number, id_store: number }
type MinMaxStoreProduct<T> = T & { id_product: number, cheap_id_store: number, expensive_id_store: number }
type QueryResultItem<A> = A & Store;

class Stores extends StoresBase {
  constructor() {
    super();
  }

  // Tiene que haber alguna manera de dinamizar esto para todos los ORM
  async fillWithOriginalStore<T>(products: A<T>[]) {
    const productsWithData: T[] & QueryResultItem<T>[] = [];

    for (const product of products) {
      const originalProduct = await this.getByPk(product.id_store);

      productsWithData.push({
        ...product,
        ...originalProduct,
      })
    }

    return productsWithData;
  }

  async fillMinMaxWithOriginalStore<T>(products: MinMaxStoreProduct<T>[]) {
    const productsWithData: T[] & QueryResultItem<T>[] = [];

    for (const product of products) {
      const cheapStore = await this.getByPk(product.cheap_id_store);
      const expensiveStore = await this.getByPk(product.expensive_id_store);

      console.log('cheapStore', cheapStore);
      

      productsWithData.push({
        ...product,
        cheapest_store: cheapStore.name,
        expensive_store: expensiveStore.name,
      })
    }

    return productsWithData;
  }
}

export { Stores };
