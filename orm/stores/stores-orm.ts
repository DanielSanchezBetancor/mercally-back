import { ResultSetHeader } from "mysql2";
import { getConnection } from "../base/connection";
import { Store } from "../../data/types/store";

type StoreDataPacket = ResultSetHeader & Store;

const getStores = async () => {
  const conn = getConnection();
  const [stores] = await conn.query<StoreDataPacket[]>('SELECT * FROM stores');

  return stores;
}

export { getStores };