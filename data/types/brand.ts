import { TCategoryRegex } from "./category";

type TBrand = {
	name: string;
	pattern: RegExp;
	onlyCategory?: TCategoryRegex;
	priority?: number;
};

export type { TBrand };
