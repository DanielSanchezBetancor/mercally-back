import { FieldPacket, ResultSetHeader } from "mysql2";
import { UserShoppingLists } from "../../../orm/UserShoppingLists/UserShoppingLists";

function getOriginalUserShoppingListsMock(id: number): { id_shopping_list: number } {
  return {
    id_shopping_list: id
  }
}

function mockUserShoppingListsQuery() {
  const querySpy = jest.spyOn(UserShoppingLists.prototype, "query").mockImplementation(async () => {
    return [[getOriginalUserShoppingListsMock(1)]] as unknown as [ResultSetHeader, FieldPacket[]]
  });

  return { querySpy };
}

export { mockUserShoppingListsQuery, getOriginalUserShoppingListsMock };