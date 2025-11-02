import { TableDict } from "../tableDict";
import { th } from "./th";

export function thead() {
  const thead = document.createElement("thead");
  Object.keys(TableDict).forEach((key) => thead.appendChild(th(key)));

  return thead;
}
