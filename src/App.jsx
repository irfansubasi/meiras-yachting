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
