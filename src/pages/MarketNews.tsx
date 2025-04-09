import { mockNews } from '../data/mockData';

export default function MarketNews() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Market News</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNews.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={news.imageUrl}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{news.source}</span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <a
                  href={news.url}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}