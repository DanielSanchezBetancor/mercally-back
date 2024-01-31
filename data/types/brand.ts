import { TCategoryRegex } from "./category";

type TBrand = {
  name: string;
  pattern: RegExp;
  onlyCategory?: TCategoryRegex;
};

export type { TBrand };
