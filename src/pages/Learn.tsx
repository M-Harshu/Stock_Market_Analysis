import React from 'react';

export default function Learn() {
  const terms = [
    {
      term: 'P/E Ratio (Price-to-Earnings)',
      description:
        'This ratio compares a company’s stock price to its earnings per share. A lower P/E may indicate undervaluation, while a high P/E could suggest overvaluation or high growth expectations.',
    },
    {
      term: 'Market Capitalization (Market Cap)',
      description:
        'The total value of a company’s outstanding shares, calculated by multiplying share price by the number of shares. Common classifications: Small Cap (< $2B), Mid Cap ($2B-$10B), Large Cap (> $10B).',
    },
    {
      term: 'Dividend Yield',
      description:
        'The percentage of a company’s share price that it pays out annually as dividends. Useful for income-focused investors.',
    },
    {
      term: 'Volume',
      description:
        'The number of shares traded during a given period. High volume may indicate higher interest or volatility.',
    },
    {
      term: 'Beta',
      description:
        'A measure of a stock’s volatility in relation to the market. A beta > 1 means more volatile than the market, < 1 means less volatile.',
    },
    {
      term: '52-Week High/Low',
      description:
        'The highest and lowest prices at which a stock has traded over the past year. Used to assess price performance and potential breakouts.',
    },
    {
      term: 'EPS (Earnings Per Share)',
      description:
        'The portion of a company’s profit allocated to each outstanding share of stock. A higher EPS often indicates greater profitability.',
    },
    {
      term: 'ROE (Return on Equity)',
      description:
        'A measure of financial performance calculated by dividing net income by shareholders’ equity. Indicates how effectively equity is used to generate profits.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E3A8A] text-white px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Stock Market Terms Explained
        </h1>
        <div className="space-y-6">
          {terms.map(({ term, description }, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold text-[#34D399]">{term}</h2>
              <p className="text-white/90 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
