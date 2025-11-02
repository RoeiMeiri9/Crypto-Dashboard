import { dict } from "../../../dict";
import { searchCurrency } from "../../../state";

export let searchElement: HTMLInputElement;

export function rightStrip() {
  const rightStrip = document.createElement("div");
  rightStrip.append(search());
  rightStrip.classList.add("rightStrip");

  return rightStrip;
}

function search() {
  searchElement = document.createElement("input");
  searchElement.placeholder = dict.interactions.search;

  searchElement.addEventListener("input", (event) =>
    searchCurrency((event.target as HTMLInputElement).value),
  );

  return searchElement;
}
