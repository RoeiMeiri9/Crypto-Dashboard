//handles all API calls

export async function fetchCoinGecko() {
  try{
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc",
    );
    if(!res.ok) throw new Error("Network error");
    return await res.json();
  } catch(err) {
    console.error("Failed to fetch currencies:", err)
    return [];
  }
}
