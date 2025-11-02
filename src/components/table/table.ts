import { TableDict } from "./tableDict";

const array = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];

export function table() {
  const tableContainer = document.createElement("div");
  const table = document.createElement("table");
  table.appendChild(thead());
  table.appendChild(tbody());

  tableContainer.classList.add("table");
  tableContainer.appendChild(table);
  return tableContainer;
}

function thead() {
  const thead = document.createElement("thead");
  Object.keys(TableDict).forEach((key) => thead.appendChild(th(key)));

  return thead;
}

function tbody() {
  const tbody = document.createElement("tbody");
  array.forEach((cell) => tbody.appendChild(tr(cell)));
  return tbody;
}

export function th(key: string) {
  const th = document.createElement("th");
  th.innerText = TableDict[key].displayName;
  return th;
}

function tr(row: string) {
  const tr = document.createElement("tr");

  Object.keys(TableDict).forEach((key) => tr.appendChild(td(key, row)));
  return tr;
}

function td(key: string, row: string) {
  const td = document.createElement("td");
  td.innerText = TableDict[key].tag;
  return td;
}
