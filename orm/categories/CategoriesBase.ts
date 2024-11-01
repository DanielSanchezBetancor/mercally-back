import BaseQuery from "../base/BaseQuery";

type CategoryTableData = {
  id: number;
  name: string;
}

class CategoriesBase extends BaseQuery<CategoryTableData> {
  protected table = 'categories';
  protected fields: CategoryTableData = {
    id: 0,
    name: ''
  }

  constructor() {
    super()
  }
}

export type { CategoryTableData };
export default CategoriesBase;