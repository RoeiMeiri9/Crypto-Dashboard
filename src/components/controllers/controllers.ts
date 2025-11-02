import { leftStrip } from "./strips/leftStrip";
import { rightStrip } from "./strips/rightStrip";

export function controllers() {
  const controllers = document.createElement("div");
  controllers.append(rightStrip());
  controllers.append(leftStrip());
  controllers.classList.add("controllers");

  return controllers;
}
