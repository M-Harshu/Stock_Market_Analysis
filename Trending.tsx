import React, { useEffect, useState } from 'react';

interface Stock {
  Ticker: string;
  Company: string;
  Recommendation: string;
  [key: string]: any;
}

const StockPredictions = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stocks')
      .then(res => res.json())
      .then(data => setStocks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📈 Stock Recommendations</h2>
      {stocks.map(stock => (
        <div key={stock.Ticker} className="border p-4 mb-2 rounded shadow">
          <h3 className="font-semibold">{stock.Company} ({stock.Ticker})</h3>
          <p>Recommendation: <span className="font-bold">{stock.Recommendation}</span></p>
          <ul className="text-sm mt-2">
            {Object.entries(stock).map(([key, value]) => (
              key !== 'Ticker' && key !== 'Company' && key !== 'Recommendation' ? (
                <li key={key}><strong>{key}</strong>: {value}</li>
              ) : null
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StockPredictions;
