import BaseQuery from "../base/BaseQuery";

type BrandsFields = {
  id: number;
  name: string;
}

class BrandsBase extends BaseQuery<BrandsFields> {
  protected table = 'brands';
  protected fields: BrandsFields = {
    id: 0,
    name: ''
  }

  constructor() {
    super()
  }
}

export type { BrandsFields };
export default BrandsBase;