export type cellType = "img" | "string" | "symbol" | "price" | "percentage";
export type tableDict = {
  [key: string]: { displayName: string; type: cellType; tag: string };
};
