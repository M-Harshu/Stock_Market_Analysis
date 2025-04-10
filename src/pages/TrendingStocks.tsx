import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { mockStocks } from '../data/mockData';
import graphImage from '../assets/graph.png';


function StockRow({ name, price, changePercent }: { name: string; price: number; changePercent: number }) {
  const isPositive = changePercent >= 0;
  const ArrowIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  const textColor = isPositive ? 'text-green-400' : 'text-red-400';

  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10 last:border-none">
      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-white/70">${price.toFixed(2)}</span>
      </div>
      <div className={`flex items-center gap-1 ${textColor}`}>
        <ArrowIcon className="w-4 h-4" />
        <span>{Math.abs(changePercent).toFixed(2)}%</span>
      </div>
    </div>
  );
}

export default function TrendingStocks() {
  const gainers = mockStocks.filter((s) => s.changePercent > 0).sort((a, b) => b.changePercent - a.changePercent);
  const losers = mockStocks.filter((s) => s.changePercent < 0).sort((a, b) => a.changePercent - b.changePercent);

  return (
    <div className="min-h-screen bg-[#1e3a8a] py-6 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Trending Stocks</h1>

        {/* Market Overview Image */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <div className="h-[400px] flex justify-center items-center">
            {/* Image displaying the saved graph */}
            <img
  src={graphImage} // Step 3
  alt="Market Overview Graph"
  className="max-w-full max-h-full"
/>
          </div>
        </div>

        {/* Gainers and Losers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gainers */}
          <div className="bg-[#334CA2] rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Top Gainers</h2>
            {gainers.map((stock) => (
              <StockRow
                key={stock.symbol}
                name={stock.name}
                price={stock.price}
                changePercent={stock.changePercent}
              />
            ))}
          </div>

          {/* Losers */}
          <div className="bg-[#334CA2] rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Top Losers</h2>
            {losers.map((stock) => (
              <StockRow
                key={stock.symbol}
                name={stock.name}
                price={stock.price}
                changePercent={stock.changePercent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
