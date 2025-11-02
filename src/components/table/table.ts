import { tbody } from "./components/tbody";
import { thead } from "./components/thead";

export function table() {
  const tableContainer = document.createElement("div");
  const table = document.createElement("table");
  table.appendChild(thead());

  table.appendChild(tbody());

  tableContainer.classList.add("table");
  tableContainer.appendChild(table);
  return tableContainer;
}
