import { dict } from "../../dict";
import type { tableDict } from "./types";

export const TableDict: tableDict = {
  coinImage: {
    displayName: dict.tableDict.coinImage,
    tag: "image",
  },
  name: {
    displayName: dict.tableDict.name,
    tag: "name",
  },
  symbol: {
    displayName: dict.tableDict.symbol,
    tag: "symbol",
  },
  currentPrice: {
    displayName: dict.tableDict.currentPrice,
    tag: "current_price",
  },
  change24h: {
    displayName: dict.tableDict.change24h,
    tag: "price_change_24h",
  },
};
