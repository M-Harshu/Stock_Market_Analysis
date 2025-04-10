import { useState } from 'react';
import { mockStocks } from '../data/mockData';
import { Stock } from '../types/stock';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

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
    <div className="min-h-screen pt-16 bg-[#1e3a8a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Stock Screener</h1>

        {/* Filters Card with dark inputs */}
        <div className="bg-[#3b4e9a] rounded-2xl shadow-md p-6 mb-8 text-white">
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
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  name="maxPE"
                  placeholder="Max"
                  value={filters.maxPE}
                  onChange={handleFilterChange}
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="number"
                  name="maxMarketCap"
                  placeholder="Max"
                  value={filters.maxMarketCap}
                  onChange={handleFilterChange}
                  className="w-full rounded-md bg-[#2e449a] text-white placeholder:text-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stock Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredStocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-[#3b4e9a] rounded-2xl p-6 text-white shadow-lg flex flex-col justify-between"
            >
              <div className="text-lg font-semibold mb-2">{stock.name}</div>
              <div className="text-2xl font-bold mb-2">${stock.price.toFixed(2)}</div>
              <div className={`flex items-center text-sm font-medium ${
                stock.changePercent >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {stock.changePercent >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span className="ml-1">
                  {stock.changePercent >= 0 ? '+' : ''}
                  {stock.changePercent.toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
