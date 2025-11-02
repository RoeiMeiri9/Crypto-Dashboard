import type { currency } from "../../../types";
import { tr } from "./tr";

let tbodyElement: HTMLTableSectionElement;

export function tbody() {
  tbodyElement = document.createElement("tbody");
  return tbodyElement;
}

export function updateTbodyContent(currencies: currency[]) {
  tbodyElement.innerHTML = "";
  currencies.forEach((currency) => tbodyElement.appendChild(tr(currency)));
}
