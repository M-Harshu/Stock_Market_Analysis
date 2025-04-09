import { Stock, NewsItem } from '../types/stock';

export const mockStocks: Stock[] = [
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 192.17,
    change: 1.91,
    changePercent: 1.00,
    marketCap: 2000000000000, // approx.
    peRatio: 58.2, // estimated
    volume: 52000000, // approx.
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 382.19,
    change: 6.79,
    changePercent: 1.81,
    marketCap: 2840000000000, // approx.
    peRatio: 35.6, // estimated
    volume: 28000000, // approx.
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 223.19,
    change: 1.06,
    changePercent: 0.48,
    marketCap: 3450000000000, // approx.
    peRatio: 29.4, // estimated
    volume: 79000000, // approx.
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 175.79,
    change: -4.67,
    changePercent: -2.59,
    marketCap: 560000000000, // approx.
    peRatio: 41.8, // estimated
    volume: 95000000, // approx.
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 157.07,
    change: 2.42,
    changePercent: 1.57,
    marketCap: 1950000000000, // approx.
    peRatio: 26.9, // estimated
    volume: 27000000, // approx.
  }
]

export const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Federal Reserve Holds Interest Rates Steady',
    description: 'The Federal Reserve maintained its benchmark interest rate at the current level, signaling a cautious approach to monetary policy.',
    source: 'Financial Times',
    date: '2024-03-20',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800',
    url: '#'
  },
  {
    id: '2',
    title: 'Tech Stocks Rally on Strong Earnings Reports',
    description: 'Major technology companies exceeded earnings expectations, driving a broad market rally.',
    source: 'Wall Street Journal',
    date: '2024-03-19',
    imageUrl: 'https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&w=800',
    url: '#'
  },
  {
    id: '3',
    title: 'Global Markets React to Economic Data',
    description: 'International markets show mixed reactions to latest economic indicators and trade developments.',
    source: 'Reuters',
    date: '2024-03-18',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800',
    url: '#'
  }
];

export const marketSummary = {
  sp500: { value: 5123.45, change: 45.67, changePercent: 0.90 },
  nasdaq: { value: 16234.56, change: 123.45, changePercent: 0.77 },
  dowJones: { value: 38567.89, change: -56.78, changePercent: -0.15 }
};