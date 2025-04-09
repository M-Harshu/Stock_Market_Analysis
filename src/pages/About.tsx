import { BarChart2, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About StockAnalytics</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-6">
            At StockAnalytics, we're committed to providing investors with comprehensive, accurate, and timely market data
            and analysis tools. Our platform is designed to help both novice and experienced investors make informed
            decisions in the complex world of stock market investing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <Globe className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
            <p className="text-gray-600">
              Access real-time data and analysis for stocks across major global markets and exchanges.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <BarChart2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">
              Utilize powerful screening tools and technical analysis features to identify investment opportunities.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Join a community of investors sharing insights and strategies for better market understanding.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We are dedicated to providing the highest quality financial data and analysis tools to our users. Our team
              works tirelessly to ensure that our platform remains:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accurate and reliable with real-time market data</li>
              <li>User-friendly and accessible to investors of all experience levels</li>
              <li>Comprehensive in coverage of global markets</li>
              <li>Innovative with regular updates and new features</li>
              <li>Secure and compliant with financial regulations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}