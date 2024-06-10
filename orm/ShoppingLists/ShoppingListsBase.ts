import BaseQuery from "../base/BaseQuery";

type ShoppingList = {
  id: number,
  code?: string,
}

class ShoppingListsBase extends BaseQuery<ShoppingList> {
  protected table = 'shopping_lists';
  protected fields: ShoppingList = {
    id: 0,
    code: '',
  };
  protected primaryKey: string = 'id';

  constructor() {
    super();
  }
}

export { ShoppingList }
export default ShoppingListsBase;