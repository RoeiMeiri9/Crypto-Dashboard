//filtering and search logic

import { fetchCoinGecko } from "./api";
import { updateDate } from "./components/controllers";
import { updateTbodyContent } from "./components/table/table";
import type { currency } from "./types";

let Currencies: currency[];
let filteredCurrencies: currency[];
let lastUpdate: Date;
let lastUpdateIntervalTimer: number;

export async function fetchCurrencies() {
  Currencies = await fetchCoinGecko();

  lastUpdate = new Date(Date.now());

  updateTbodyContent(Currencies);
  callUpdateDate();
}

function callUpdateDate() {
  if (lastUpdateIntervalTimer) {
    clearInterval(lastUpdateIntervalTimer);
  }

  updateDate(lastUpdate);

  lastUpdateIntervalTimer = setInterval(() => updateDate(lastUpdate), 60 * 1000);
}
