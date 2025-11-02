import { controllers } from "./controllers/controllers";
import { table } from "./table/table";

export function main() {
  const main = document.createElement("main");

  const card = document.createElement("div");
  card.classList.add("card");
  card.appendChild(controllers());
  card.appendChild(table());

  main.appendChild(card);

  return main;
}
