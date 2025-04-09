export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  marketCap: number;
  peRatio: number;
  volume: number;
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  imageUrl: string;
  url: string;
}