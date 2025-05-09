import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TrendingStocks from './pages/TrendingStocks';
import MarketNews from './pages/MarketNews';
import StockScreener from './pages/StockScreener';
import Learn from './pages/Learn';
import About from './pages/About';
import StockPredictions from './pages/StockPredictions';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1E3A8A] text-black">
        {/* Top Navigation Bar */}
        <div className="bg-[#0D2818]">
          <Navbar />
        </div>

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            {/* Initial Route */}
            <Route path="/" element={<Signup />} /> {/* First route to sign up */}

            {/* Other Routes */}t
            <Route path="/home" element={<Home />} />
            <Route path="/trending" element={<TrendingStocks />} />
            <Route path="/news" element={<MarketNews />} />
            <Route path="/screener" element={<StockScreener />} />
            <Route path="/predictions" element={<StockPredictions />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} /> {/* Login page */}
          </Routes>
        </main>

        {/* Bottom Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
