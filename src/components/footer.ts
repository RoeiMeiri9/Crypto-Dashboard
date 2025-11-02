import { dict } from "../dict";

export function footer() {
  const footer = document.createElement("footer");
  const poweredBy = document.createElement("span");
  poweredBy.innerText = dict.poweredBy;
  footer.appendChild(poweredBy);
  return footer;
}
