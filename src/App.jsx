import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import RentPage from './pages/RentPage';
import { LoadingProvider } from './contexts/LoadingContext';
import DetailsPage from './pages/DetailsPage';
import './locales/i18n';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useEffect } from 'react';
import BrokeragePage from './pages/BrokeragePage';
import { Helmet } from 'react-helmet';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LoadingProvider>
      <Router>
        <Helmet>
          <meta
            name="description"
            content="Meiras Yachting ile Akdeniz ve Ege'nin eşsiz güzelliklerini keşfedin. Lüks yat kiralama ve satış hizmetlerimizle unutulmaz deneyimler yaşayın."
          />
          <meta
            name="keywords"
            content="yat kiralama, lüks yat, yat satış, Akdeniz, Ege, özel tur, Meiras Yachting, fethiye yat kiralama, marmaris yat kiralama, göcek yat kiralama, bodrum yat kiralama"
          />
          <meta property="og:title" content="Meiras Yachting" />
          <meta
            property="og:description"
            content="Meiras Yachting ile Akdeniz ve Ege'nin eşsiz güzelliklerini keşfedin. Lüks yat kiralama ve satış hizmetlerimizle unutulmaz deneyimler yaşayın."
          />
          <meta property="og:url" content="https://meirasyachting.com/" />
          <meta
            property="og:image"
            content="https://meirasyachting.com/assets/header.webp"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Meiras Yachting" />
          <meta
            name="twitter:description"
            content="Meiras Yachting ile Akdeniz ve Ege'nin eşsiz güzelliklerini keşfedin. Lüks yat kiralama ve satış hizmetlerimizle unutulmaz deneyimler yaşayın."
          />
          <meta
            name="twitter:image"
            content="https://meirasyachting.com/assets/header.webp"
          />
        </Helmet>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/rent/:id" element={<DetailsPage req="rent" />} />
          <Route path="/brokerage" element={<BrokeragePage />} />
          <Route
            path="/brokerage/:id"
            element={<DetailsPage req="brokerage" />}
          />
        </Routes>
        <Footer />
      </Router>
    </LoadingProvider>
  );
}
