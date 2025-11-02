//entry point (initialization)

import { app } from "./ui";
import "./style.css";
import { dict } from "./dict";
import { fetchCurrencies } from "./state";

document.title = dict.title;
const root = document.querySelector("#app");

app().forEach((component) => root?.appendChild(component));

fetchCurrencies();
