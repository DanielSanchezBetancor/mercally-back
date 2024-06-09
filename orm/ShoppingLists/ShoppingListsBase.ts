import BaseQuery from "../base/BaseQuery";

type ShoppingList = {
  id: number,
  code?: string,
}

type ShoppingListFields = Omit<ShoppingList, 'id'>;

class ShoppingListsBase extends BaseQuery<ShoppingListFields> {
  protected table = 'shopping_lists';
  protected fields: ShoppingListFields = {
    code: '',
  };
  protected primaryKey: string = 'id';

  constructor() {
    super();
  }
}

export { ShoppingList, ShoppingListFields }
export default ShoppingListsBase;