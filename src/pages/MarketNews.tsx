import React from 'react';

const stockNews = [
  {
    id: 1,
    imageUrl: "https://img.youtube.com/vi/3b40op3L2os/0.jpg",
    url: "https://youtu.be/3b40op3L2os?si=Sx-IWUFPBSDk_-qa",
    source: "YouTube",
    date: "Apr 2025"
  },
  {
    id: 2,
    imageUrl: "https://img.youtube.com/vi/lsGGhGsQ-qU/0.jpg",
    url: "https://youtu.be/lsGGhGsQ-qU?si=jB8ik7-sSjufB1gl",
    source: "YouTube",
    date: "Apr 2025"
  }
];

const stockBasics = [
  {
    id: 3,
    imageUrl: "https://img.youtube.com/vi/qIw-yFC-HNU/0.jpg",
    url: "https://youtu.be/qIw-yFC-HNU?si=hps8QzHlhOukFKU6",
    source: "YouTube",
    date: "Apr 2025"
  },
  {
    id: 4,
    imageUrl: "https://img.youtube.com/vi/A7fZp9dwELo/0.jpg",
    url: "https://youtu.be/A7fZp9dwELo?si=NG2z8gZPL-nlovIE",
    source: "YouTube",
    date: "Apr 2025"
  }
];

const tutorialGuidance = [
  {
    id: 5,
    imageUrl: "https://img.youtube.com/vi/QaKbnXndWUY/0.jpg",
    url: "https://youtu.be/QaKbnXndWUY?si=-Z3Vu5b3BiQFVKO5",
    source: "YouTube",
    date: "Apr 2025"
  }
];

const NewsSection = ({ title, data }: { title: string; data: typeof stockNews }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-white mb-6 text-center">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {data.map((news) => (
        <div
          key={news.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-[1.01]"
        >
          <img
            src={news.imageUrl}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
              <span>{news.source}</span>
              <span>{news.date}</span>
            </div>

            <a
              href={news.url}
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function MarketNews() {
  return (
    <div className="min-h-screen bg-[#1e3a8a] px-4 py-6">
      <h1 className="text-3xl font-bold text-white mb-12 text-center">
        Market News & Learning
      </h1>
      <NewsSection title="📈 Stock News" data={stockNews} />
      <NewsSection title="📚 Stock Basics" data={stockBasics} />
      <NewsSection title="🎯 Tutorial Guidance" data={tutorialGuidance} />
    </div>
  );
}
