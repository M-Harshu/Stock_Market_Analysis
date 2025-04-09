const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export async function getTrendingStocks() {
  const res = await fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US',
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
      },
    }
  );

  const json = await res.json();
  return json.finance.result[0].quotes; // <--- THIS is the important part
}
