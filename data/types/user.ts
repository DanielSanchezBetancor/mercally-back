import { Store } from "./store";

type User = {
  idUser: number;
  preferredStores: Store['idStore'][];
  username: string;
  password: string;
  email: string;
  idRole: number;
  isPremium: boolean;
};

export type { User };
