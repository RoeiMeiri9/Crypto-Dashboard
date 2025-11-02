//handles all API calls

export async function fetchCoinGecko() {
  const currencies = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc",
  );
  return await currencies.json();
}
