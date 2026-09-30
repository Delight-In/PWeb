import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { RequestDemoModal } from './components/RequestDemoModal';
import { CapabilityModal } from './components/CapabilityModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResourceIntelligencePage } from './pages/ResourceIntelligencePage';
import { DigitalTransformationPage } from './pages/DigitalTransformationPage';
import { TriaxisPage } from './pages/TriaxisPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [capabilityModalOpen, setCapabilityModalOpen] = useState(false);
  const [demoDefaultPillar, setDemoDefaultPillar] = useState<string | undefined>(undefined);

  const handleOpenDemo = (pillar?: string) => {
    setDemoDefaultPillar(pillar);
    setDemoModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar onRequestDemo={() => handleOpenDemo()} />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onRequestDemo={() => handleOpenDemo()} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onRequestDemo={() => handleOpenDemo()} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/solutions/resource-intelligence" 
              element={
                <ResourceIntelligencePage 
                  onRequestDemo={() => handleOpenDemo('Resource Intelligence')} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/solutions/digital-transformation" 
              element={
                <DigitalTransformationPage 
                  onRequestDemo={() => handleOpenDemo('IT & Digital Transformation')} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/triaxis" 
              element={
                <TriaxisPage 
                  onRequestDemo={() => handleOpenDemo('TRIAXIS Consortium')} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/industries" 
              element={
                <IndustriesPage 
                  onRequestDemo={() => handleOpenDemo()} 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                />
              } 
            />
            <Route 
              path="/insights" 
              element={
                <InsightsPage 
                  onOpenCapability={() => setCapabilityModalOpen(true)} 
                  onRequestDemo={() => handleOpenDemo()} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  onRequestDemo={() => handleOpenDemo()} 
                />
              } 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer 
          onOpenCapability={() => setCapabilityModalOpen(true)} 
          onRequestDemo={() => handleOpenDemo()} 
        />

        {/* Global Modals */}
        <RequestDemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
          defaultPillar={demoDefaultPillar}
        />

        <CapabilityModal
          isOpen={capabilityModalOpen}
          onClose={() => setCapabilityModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
