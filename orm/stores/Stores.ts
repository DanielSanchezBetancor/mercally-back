import { Store, StoresBase } from './base/StoresBase';

type A<T> = T & { id_product: number, id_store: number }
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
}

export { Stores };
