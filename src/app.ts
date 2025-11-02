//main port of the program

import { app } from "./ui";
import "./style.css";
import { dict } from "./dict";

document.title = dict.title;
app().forEach((component) =>
  document.querySelector("#app")?.appendChild(component),
);
