type TCategoryRegex = {
  name: string;
  pattern: RegExp;
  excluders?: RegExp[];
  priority?: number;
};

interface ICategoriesRegex {
  [category: string]: TCategoryRegex;
}

export type { ICategoriesRegex, TCategoryRegex };
