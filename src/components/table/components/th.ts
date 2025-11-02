import { TableDict } from "../tableDict";

export function th(key: string) {
  const th = document.createElement("th");
  th.innerText = TableDict[key].displayName;
  return th;
}
