import type { currency } from "../../../types";
import { TableDict } from "../tableDict";
import { td } from "./td";

export function tr(currency: currency) {
  const tr = document.createElement("tr");

  Object.keys(TableDict).forEach((key) =>
    tr.appendChild(td(TableDict[key].tag, currency, TableDict[key].type)),
  );
  return tr;
}
