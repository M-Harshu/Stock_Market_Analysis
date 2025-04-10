import { useEffect, useState } from 'react';

interface StockData {
  Ticker: string;
  Company: string;
  [key: string]: string | number;
}

export default function StockPredictions() {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/stock-prediction', {
      method: 'POST',  // Ensure the correct method is used
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ticker: 'AAPL' }), // Passing a sample ticker
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch predictions');
        return res.json();
      })
      .then((data) => {
        console.log("Fetched predictions:", data);
        setStocks(data);  // Update the state with the fetched data
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-white">Loading predictions...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  if (stocks.length === 0) return <div className="p-4 text-white">No prediction data available.</div>;

  return (
    <div className="min-h-screen bg-[#1E3A8A] px-5 sm:px-10 text-white">
      <div className="bg-white/10 rounded-2xl shadow-lg p-8 backdrop-blur-md mt-6 mb-6">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Stock Predictions
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent rounded">
            <thead>
              <tr>
                {Object.keys(stocks[0]).map((key) => (
                  <th
                    key={key}
                    className="px-4 py-2 text-left text-sm font-semibold text-white/90"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock, idx) => (
                <tr key={idx} className="border-t border-white/20">
                  {Object.values(stock).map((value, i) => (
                    <td key={i} className="px-4 py-2 text-sm text-white/80">
                      {typeof value === 'number' ? value.toFixed(2) : value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
