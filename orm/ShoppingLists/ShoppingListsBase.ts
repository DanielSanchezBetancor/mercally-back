import BaseQuery from "../base/BaseQuery";

type ShoppingList = {
  id: number,
  name: string,
  id_background: number,
  code?: string,
}

class ShoppingListsBase extends BaseQuery<ShoppingList> {
  protected table = 'shopping_lists';
  protected fields: ShoppingList = {
    id: 0,
    code: '',
    name: '',
    id_background: 0,
  };
  protected primaryKey: string = 'id';

  constructor() {
    super();
  }
}

export { ShoppingList }
export default ShoppingListsBase;