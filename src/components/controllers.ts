import { dict } from "../dict";
import { dateCalculation } from "../utils";

export let lastUpdate: HTMLSpanElement;

export function controllers() {
  const controllers = document.createElement("div");
  controllers.append(rightStrip());
  controllers.append(leftStrip());
  controllers.classList.add("controllers");

  return controllers;
}

//TODO: Merge code and make it look better!!!
export function rightStrip() {
  const rightStrip = document.createElement("div");
  const search = document.createElement("input");
  search.placeholder = dict.interactions.search;

  const filter = document.createElement("button");
  filter.innerText = dict.interactions.filter;

  rightStrip.append(search);
  rightStrip.append(filter);

  rightStrip.classList.add("rightStrip");

  return rightStrip;
}

export function leftStrip() {
  const leftStrip = document.createElement("div");
  lastUpdate = document.createElement("span");

  const refresh = document.createElement("button");
  refresh.innerText = dict.interactions.refresh;

  leftStrip.append(lastUpdate);
  leftStrip.append(refresh);
  leftStrip.classList.add("leftStrip");

  return leftStrip;
}

export function updateDate(date: Date) {
  lastUpdate.innerText = `${dict.interactions.lastUpdate.static} ${dateCalculation(date)}`;
}
