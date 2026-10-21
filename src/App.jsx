import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

// Multi-page routes
import Home from './pages/Home';
import About from './pages/About';
import Engineering from './pages/Engineering';
import EventPlanning from './pages/EventPlanning';
import Portfolio from './pages/Portfolio';
import Enquiry from './pages/Enquiry';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

export default function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialData, setEnquiryInitialData] = useState(null);

  const handleOpenEnquiry = (initialData = null) => {
    setEnquiryInitialData(initialData);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryInitialData(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-cream-50 text-burgundy-950 flex flex-col selection:bg-cherry-200 selection:text-burgundy-900">
        {/* Persistent Multi-Page Navigation Header */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            {/* Primary Deliverable: Full Bespoke Home Page */}
            <Route 
              path="/" 
              element={<Home onOpenEnquiry={handleOpenEnquiry} />} 
            />

            {/* Dedicated About Us Page */}
            <Route 
              path="/about" 
              element={<About onOpenEnquiry={handleOpenEnquiry} />} 
            />

            {/* Dedicated Engineering & Staging Page */}
            <Route 
              path="/engineering" 
              element={<Engineering onOpenEnquiry={handleOpenEnquiry} />} 
            />

            {/* Dedicated Event Planning & Management Page */}
            <Route 
              path="/event-planning" 
              element={<EventPlanning onOpenEnquiry={handleOpenEnquiry} />} 
            />

            {/* Dedicated Project Portfolio Gallery */}
            <Route 
              path="/portfolio" 
              element={<Portfolio onOpenEnquiry={handleOpenEnquiry} />} 
            />

            {/* Dedicated Service Enquiry Brief Form */}
            <Route 
              path="/enquiry" 
              element={<Enquiry />} 
            />

            {/* Dedicated Contact & Google Maps Location */}
            <Route 
              path="/contact" 
              element={<Contact />} 
            />

            {/* Dedicated Privacy Policy Page */}
            <Route 
              path="/privacy-policy" 
              element={<PrivacyPolicy />} 
            />

            {/* Dedicated Terms & Conditions Page */}
            <Route 
              path="/terms-and-conditions" 
              element={<TermsConditions />} 
            />

            {/* Fallback route */}
            <Route 
              path="*" 
              element={<Home onOpenEnquiry={handleOpenEnquiry} />} 
            />
          </Routes>
        </main>

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={isEnquiryOpen}
          onClose={handleCloseEnquiry}
          initialData={enquiryInitialData}
        />

        {/* Global Floating WhatsApp Direct Access */}
        <WhatsAppButton />

        {/* Persistent Multi-Page Footer */}
        <Footer onOpenEnquiry={() => handleOpenEnquiry()} />
      </div>
    </BrowserRouter>
  );
}
