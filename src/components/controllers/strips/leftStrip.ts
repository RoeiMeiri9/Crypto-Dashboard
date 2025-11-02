import { dict } from "../../../dict";
import { fetchCurrencies } from "../../../state";
import { dateCalculation } from "../../../utils";
import { searchElement } from "./rightStrip";

export let lastUpdate: HTMLSpanElement;

export function leftStrip() {
  const leftStrip = document.createElement("div");
  lastUpdate = document.createElement("span");

  leftStrip.append(lastUpdate);
  leftStrip.append(refresh());
  leftStrip.classList.add("leftStrip");

  return leftStrip;
}

function refresh() {
  const refresh = document.createElement("button");
  refresh.innerText = dict.interactions.refresh;

  refresh.addEventListener("click", () => {
    fetchCurrencies();
    searchElement.value = "";
  });

  return refresh;
}

export function updateDate(date: Date) {
  lastUpdate.innerText = `${dict.interactions.lastUpdate.static} ${dateCalculation(date)}`;
}
