import { Store } from "../../data/types/store"
const path = "../../orm/stores/stores-orm";

const mockStores: Store[] = [
  {
    idStore: 1,
    storeName: "Store 1",
  },
  {
    idStore: 2,
    storeName: "Store 2",
  }
];

function mockGetStores() {
  jest.mock(path, () => {
    const actualModule = jest.requireActual(path);

    return {
      ...actualModule,
      getStores: jest.fn(() => mockStores),
    }
  })
}

export { mockStores, mockGetStores };
