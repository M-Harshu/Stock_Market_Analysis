import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen pt-16 bg-[#1E3A8A] text-white">
      {/* Hero Section */}
<div className="py-20 bg-[#1E3A8A] px-2 sm:px-4">
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 text-center w-full max-w-none">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Make Smarter Investment Decisions
    </h1>
    <p className="text-lg md:text-xl text-white/90">
      Comprehensive stock market analysis and real-time data at your fingertips
    </p>
  </div>
</div>


      {/* Stock Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">Stock Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              symbol: 'AAPL',
              name: 'Apple Inc.',
              price: 190.05,
              change: -4.43,
              changePercent: -4.43,
            },
            {
              symbol: 'GOOGL',
              name: 'Alphabet Inc.',
              price: 155.66,
              change: -1.22,
              changePercent: -1.22,
            },
            {
              symbol: 'TSLA',
              name: 'Tesla, Inc.',
              price: 248.42,
              change: -8.57,
              changePercent: -8.57,
            },
          ].map((stock) => (
            <div key={stock.symbol} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">{stock.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${stock.price.toFixed(2)}</span>
                <div className={`flex items-center ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
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
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose StockAnalytics?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl shadow-md p-6">
              <DollarSign className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Data</h3>
              <p className="text-white/90">
                Access up-to-the-minute stock prices and market data to stay informed.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl shadow-md p-6">
              <TrendingUp className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-white/90">
                Powerful tools and charts to analyze market trends and patterns.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl shadow-md p-6">
              <TrendingDown className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-white/90">
                Expert analysis and news to help you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
