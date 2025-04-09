import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockStocks } from '../data/mockData';

const chartData = [
  { name: '9:30', value: 100 },
  { name: '10:30', value: 102 },
  { name: '11:30', value: 101.5 },
  { name: '12:30', value: 101 },
  { name: '13:30', value: 102 },
  { name: '14:30', value: 103 },
  { name: '15:30', value: 105 },
  { name: '16:00', value: 107 },
];

export default function TrendingStocks() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Trending Stocks</h1>

        {/* Market Overview Chart */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
  <LineChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" label={{ value: 'Time', position: 'insideBottomRight', offset: -5 }} />
    <YAxis
      label={{ value: 'Index Value', angle: -90, position: 'insideLeft' }}
      interval={0}
      domain={['auto', 'auto']}
      tickCount={(chartData[chartData.length - 1].value - chartData[0].value) + 1}
    />
    <Tooltip />
    <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>

          </div>
        </div>

        {/* Top Gainers & Losers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Top Gainers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Symbol</th>
                    <th className="text-left py-3">Name</th>
                    <th className="text-right py-3">Price</th>
                    <th className="text-right py-3">Change %</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStocks
                    .filter((stock) => stock.changePercent > 0)
                    .sort((a, b) => b.changePercent - a.changePercent)
                    .map((stock) => (
                      <tr key={stock.symbol} className="border-b">
                        <td className="py-3 font-medium">{stock.symbol}</td>
                        <td className="py-3">{stock.name}</td>
                        <td className="py-3 text-right">${stock.price.toFixed(2)}</td>
                        <td className="py-3 text-right text-green-600">
                          +{stock.changePercent.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Top Losers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Symbol</th>
                    <th className="text-left py-3">Name</th>
                    <th className="text-right py-3">Price</th>
                    <th className="text-right py-3">Change %</th>
                  </tr>
                </thead>
                <tbody>
                  {mockStocks
                    .filter((stock) => stock.changePercent < 0)
                    .sort((a, b) => a.changePercent - b.changePercent)
                    .map((stock) => (
                      <tr key={stock.symbol} className="border-b">
                        <td className="py-3 font-medium">{stock.symbol}</td>
                        <td className="py-3">{stock.name}</td>
                        <td className="py-3 text-right">${stock.price.toFixed(2)}</td>
                        <td className="py-3 text-right text-red-600">
                          {stock.changePercent.toFixed(2)}%
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}