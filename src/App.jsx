import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RentPage from './pages/RentPage';
import { LoadingProvider } from './contexts/LoadingContext';
import DetailsPage from './pages/DetailsPage';
import SoonPage from './pages/SoonPage';

export default function App() {
  return (
    <LoadingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/rent/:id" element={<DetailsPage />} />
          <Route path="/brokerage" element={<SoonPage />} />
        </Routes>
      </Router>
    </LoadingProvider>
  );
}
