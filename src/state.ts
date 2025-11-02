//filtering and search logic

import { fetchCoinGecko } from "./api";
import { updateDate } from "./components/controllers/strips/leftStrip";
import { updateTbodyContent } from "./components/table/components/tbody";
import type { currency } from "./types";
import { parseString } from "./utils";

const State = {  
  Currencies: [] as currency[],
  filteredCurrencies: [] as currency[],
  lastUpdate: new Date(),
  timer: 0,
}

export async function fetchCurrencies() {
  State.Currencies = await fetchCoinGecko();

  State.lastUpdate = new Date(Date.now());

  updateTbodyContent(State.Currencies);
  callUpdateDate();
}

export function searchCurrency(token: string) {
  if (!token.trim()) {
    updateTbodyContent(State.Currencies);
  } else {
    State.filteredCurrencies = State.Currencies.filter(
      (currency) =>
        parseString(currency["name"] as string).includes(
          parseString(token.toLowerCase()),
        ) ||
        parseString(currency["symbol"] as string).includes(
          parseString(token.toLowerCase()),
        ),
    );
    updateTbodyContent(State.filteredCurrencies);
  }
}

function callUpdateDate() {
  if (State.timer) {
    clearInterval(State.timer);
  }

  updateDate(State.lastUpdate);

  State.timer = setInterval(
    () => updateDate(State.lastUpdate),
    60 * 1000,
  );
}
