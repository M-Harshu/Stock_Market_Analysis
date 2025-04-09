import { useState } from 'react';
import { mockStocks } from '../data/mockData';
import { Stock } from '../types/stock';

export default function StockScreener() {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    minPE: '',
    maxPE: '',
    minMarketCap: '',
    maxMarketCap: ''
  });

  const filterStocks = (stocks: Stock[]) => {
    return stocks.filter(stock => {
      if (filters.minPrice && stock.price < Number(filters.minPrice)) return false;
      if (filters.maxPrice && stock.price > Number(filters.maxPrice)) return false;
      if (filters.minPE && stock.peRatio < Number(filters.minPE)) return false;
      if (filters.maxPE && stock.peRatio > Number(filters.maxPE)) return false;
      if (filters.minMarketCap && stock.marketCap < Number(filters.minMarketCap) * 1e9) return false;
      if (filters.maxMarketCap && stock.marketCap > Number(filters.maxMarketCap) * 1e9) return false;
      return true;
    });
  };

  const filteredStocks = filterStocks(mockStocks);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Stock Screener</h1>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Price Range ($)</h3>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">P/E Ratio</h3>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="minPE"
                  placeholder="Min"
                  value={filters.minPE}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="maxPE"
                  placeholder="Max"
                  value={filters.maxPE}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Market Cap (Billions $)</h3>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="minMarketCap"
                  placeholder="Min"
                  value={filters.minMarketCap}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <input
                  type="number"
                  name="maxMarketCap"
                  placeholder="Max"
                  value={filters.maxMarketCap}
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Change %
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Market Cap
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    P/E Ratio
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Volume
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStocks.map((stock) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {stock.symbol}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-900">
                      ${stock.price.toFixed(2)}
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-right ${
                      stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500">
                      ${(stock.marketCap / 1e9).toFixed(2)}B
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500">
                      {stock.peRatio.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-500">
                      {(stock.volume / 1e6).toFixed(2)}M
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}