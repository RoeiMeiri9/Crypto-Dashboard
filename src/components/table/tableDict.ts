import { dict } from "../../dict";
import type { tableDict } from "./types";

export const TableDict: tableDict = {
  coinImage: {
    displayName: dict.tableDict.coinImage,
    type: "img",
    tag: "image",
  },
  name: {
    displayName: dict.tableDict.name,
    type: "string",
    tag: "name",
  },
  symbol: {
    displayName: dict.tableDict.symbol,
    type: "symbol",
    tag: "symbol",
  },
  currentPrice: {
    displayName: dict.tableDict.currentPrice,
    type: "price",
    tag: "current_price",
  },
  change24h: {
    displayName: dict.tableDict.change24h,
    type: "percentage",
    tag: "price_change_24h",
  },
};
