//filtering and search logic

import { fetchCoinGecko } from "./api";
import { updateDate } from "./components/controllers/strips/leftStrip";
import { updateTbodyContent } from "./components/table/components/tbody";
import type { currency } from "./types";
import { parseString } from "./utils";

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

export function searchCurrency(token: string) {
  if (!token.trim()) {
    updateTbodyContent(Currencies);
  } else {
    filteredCurrencies = Currencies.filter(
      (currency) =>
        parseString(currency["name"] as string).includes(
          parseString(token.toLowerCase()),
        ) ||
        parseString(currency["symbol"] as string).includes(
          parseString(token.toLowerCase()),
        ),
    );
    updateTbodyContent(filteredCurrencies);
  }
}

function callUpdateDate() {
  if (lastUpdateIntervalTimer) {
    clearInterval(lastUpdateIntervalTimer);
  }

  updateDate(lastUpdate);

  lastUpdateIntervalTimer = setInterval(
    () => updateDate(lastUpdate),
    60 * 1000,
  );
}
