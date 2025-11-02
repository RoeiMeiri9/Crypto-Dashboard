import { dict } from "../dict";

export function header() {
  const header = document.createElement("header");
  header.innerHTML = `
  <img src="Ether (ETH).svg" width="36">
  <h3>${dict.title}</h3>
  `.trim();
  return header;
}
