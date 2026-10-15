import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFound from '@/components/NotFound';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import { parseServiceLocationUrl } from '@/lib/routes';

function AppRoutes() {
  const location = useLocation();
  const path = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const isServiceLocation = parseServiceLocationUrl(`/${path}`) !== null;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      {isServiceLocation && <Route path={path} element={<ServiceLocationPage />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
