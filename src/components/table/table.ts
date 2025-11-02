import type { currency } from "../../types";
import { TableDict } from "./tableDict";
import type { cellType } from "./types";

let tbodyElement: HTMLTableSectionElement;

export function table() {
  const tableContainer = document.createElement("div");
  const table = document.createElement("table");
  table.appendChild(thead());

  tbodyElement = document.createElement("tbody");
  table.appendChild(tbodyElement);

  tableContainer.classList.add("table");
  tableContainer.appendChild(table);
  return tableContainer;
}

function thead() {
  const thead = document.createElement("thead");
  Object.keys(TableDict).forEach((key) => thead.appendChild(th(key)));

  return thead;
}

export function updateTbodyContent(currencies: currency[]) {
  tbodyElement.innerHTML = "";
  currencies.forEach((currency) => tbodyElement.appendChild(tr(currency)));
}

export function th(key: string) {
  const th = document.createElement("th");
  th.innerText = TableDict[key].displayName;
  return th;
}

function tr(currency: currency) {
  const tr = document.createElement("tr");

  Object.keys(TableDict).forEach((key) =>
    tr.appendChild(td(TableDict[key].tag, currency, TableDict[key].type)),
  );
  return tr;
}

function td(key: string, currency: currency, type: cellType) {
  const td = document.createElement("td");
  switch (type) {
    case "img":
      td.appendChild(img(currency[key] as string));
      break;
    case "string":
      td.innerText = currency[key] as string;
      break;
    case "percentage":
      td.appendChild(percentageTag(currency, key))
      break;
    case "price":
      td.innerText = (currency[key] as number) + "$";
      break;
    case "symbol":
      td.innerText = (currency[key] as string).toUpperCase();
      break;
  }

  return td;
}

function percentageTag(currency: currency, key: string) {
  const tag = document.createElement("div");

  const change = (currency[key] as number) * 100;
  tag.innerText = change.toPrecision(6) + "%";
  change < 0 ? tag.classList.add("red") : tag.classList.add("green");

  return tag;
}

function img(path: string) {
  const img = document.createElement("img");
  img.width = 30;
  img.src = path;
  return img;
}
