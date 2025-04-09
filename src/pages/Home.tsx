import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { marketSummary } from '../data/mockData';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Make Smarter Investment Decisions
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Comprehensive stock market analysis and real-time data at your fingertips
            </p>
          </div>
        </div>
      </div>

      {/* Selected Stocks Summary */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Stock Summary</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 188.19	,
        change: 2.34,
        changePercent: +0.48,
      },
      {
        symbol: 'GOOGL',
        name: 'Alphabet Inc.',
        price: 157.07,
        change: +1.22,
        changePercent: +1.57,
      },
      {
        symbol: 'TSLA',
        name: 'Tesla, Inc.',
        price: 175.79,
        change: -4.55,
        changePercent: -2.59,
      }
    ].map((stock) => (
      <div key={stock.symbol} className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{stock.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${stock.price.toFixed(2)}</span>
          <div className={`flex items-center ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock.change >= 0 ? (
              <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            ) : (
              <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
            <span>{stock.changePercent.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Features Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose StockAnalytics?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <DollarSign className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
              <p className="text-gray-600">
                Access up-to-the-minute stock prices and market data to stay informed.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">
                Powerful tools and charts to analyze market trends and patterns.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <TrendingDown className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-gray-600">
                Expert analysis and news to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}