import type { currency } from "../../../types";
import type { cellType } from "../types";

export function td(key: string, currency: currency, type: cellType) {
  const td = document.createElement("td");
  switch (type) {
    case "img":
      td.appendChild(img(currency[key] as string));
      break;
    case "string":
      td.innerText = currency[key] as string;
      break;
    case "percentage":
      td.appendChild(percentageTag(currency, key));
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
