//DOM rendering and updates

import { footer } from "./components/footer";
import { header } from "./components/header";
import { main } from "./components/main";

export function app() {
  return [header(), main(), footer()];
}
