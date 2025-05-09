    import { Routes, Route, useLocation } from 'react-router-dom';
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

    function AppContent() {
    const location = useLocation();

    const noNavRoutes = ['/signup', '/login'];

    return (
        <div className="flex flex-col min-h-screen bg-[#1E3A8A] text-black">
        {/* Navbar only if not in /signup or /login */}
        {!noNavRoutes.includes(location.pathname) && (
            <div className="bg-[#0D2818]">
            <Navbar />
            </div>
        )}

        {/* Main content */}
        <main className="flex-grow">
            <Routes>
                <Route path="/" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/home" element={<Home />} />
  <Route path="/trending" element={<TrendingStocks />} />
  <Route path="/news" element={<MarketNews />} />
  <Route path="/screener" element={<StockScreener />} />
  <Route path="/predictions" element={<StockPredictions />} />
  <Route path="/learn" element={<Learn />} />
  <Route path="/about" element={<About />} />
</Routes>

        </main>

        {/* Footer only if not in /signup or /login */}
        {!noNavRoutes.includes(location.pathname) && <Footer />}
        </div>
    );
    }

    export default AppContent;
