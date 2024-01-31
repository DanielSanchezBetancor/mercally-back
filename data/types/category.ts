type TCategoryRegex = {
  name: string;
  pattern: RegExp;
  excluders?: RegExp[];
};

interface ICategoriesRegex {
  [category: string]: TCategoryRegex;
}

export type { ICategoriesRegex, TCategoryRegex };
