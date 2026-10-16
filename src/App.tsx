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
import ReviewsPage from '@/pages/ReviewsPage';
import ResourcesPage from '@/pages/ResourcesPage';
import ArticleDetailPage from '@/pages/ArticleDetailPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import { parseServiceLocationUrl } from '@/lib/routes';
import ScrollToTop from '@/components/ScrollToTop';
import BackToTopButton from '@/components/BackToTopButton';
import MobileCallButton from '@/components/MobileCallButton';

function DynamicRouteHandler() {
  const location = useLocation();
  const isServiceLocation = parseServiceLocationUrl(location.pathname) !== null;

  if (isServiceLocation) {
    return <ServiceLocationPage />;
  }
  return <NotFound />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service-areas" element={<ServiceAreasPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/reviews" element={<ReviewsPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/resources/:slug" element={<ArticleDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/:slug" element={<DynamicRouteHandler />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
        <BackToTopButton />
        <MobileCallButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
