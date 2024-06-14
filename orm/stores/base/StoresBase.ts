import BaseQuery from "../../base/BaseQuery";

type Store = {
  id: number,
  name: string,
  logo_url: string
}

class StoresBase extends BaseQuery<Store> {
  protected table = 'stores';
  protected fields: Store = {
    id: 0,
    name: '',
    logo_url: ''
  }

  constructor() {
    super()
  }
}

export { Store, StoresBase }