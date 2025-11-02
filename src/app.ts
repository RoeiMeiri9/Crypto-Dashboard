//entry point (initialization)

import { app } from "./ui";
import "./style.css";
import { dict } from "./dict";
import { fetchCurrencies } from "./state";

document.title = dict.title;
app().forEach((component) =>
  document.querySelector("#app")?.appendChild(component),
);

fetchCurrencies();
