import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { PrishiBot } from './components/PrishiBot';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResourceIntelligencePage } from './pages/ResourceIntelligencePage';
import { DigitalTransformationPage } from './pages/DigitalTransformationPage';
import { TriaxisPage } from './pages/TriaxisPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

import { IndustrialDataFoundationPage } from './pages/platform/IndustrialDataFoundationPage';
import { DataConnectivityPage } from './pages/platform/DataConnectivityPage';
import { IndustrialDataOpsPage } from './pages/platform/IndustrialDataOpsPage';
import { EdgeIntelligencePage } from './pages/platform/EdgeIntelligencePage';
import { DataSecurityPage } from './pages/platform/DataSecurityPage';
import { DataGovernancePage } from './pages/platform/DataGovernancePage';
import { CentralManagementPage } from './pages/platform/CentralManagementPage';

function AppContent() {
  const navigate = useNavigate();

  const handleOpenDemo = (pillar?: string) => {
    navigate('/contact', { state: { pillar, fromDemo: true } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onRequestDemo={() => handleOpenDemo()} />
      
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onRequestDemo={() => handleOpenDemo()} 
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <AboutPage 
                onRequestDemo={() => handleOpenDemo()} 
              />
            } 
          />
          <Route 
            path="/solutions/resource-intelligence" 
            element={
              <ResourceIntelligencePage 
                onRequestDemo={() => handleOpenDemo('Resource Intelligence')} 
              />
            } 
          />
          <Route 
            path="/solutions/digital-transformation" 
            element={
              <DigitalTransformationPage 
                onRequestDemo={() => handleOpenDemo('IT & Digital Transformation')} 
              />
            } 
          />
          <Route 
            path="/triaxis" 
            element={
              <TriaxisPage 
                onRequestDemo={() => handleOpenDemo('TRIAXIS Consortium')} 
              />
            } 
          />
          <Route 
            path="/industries" 
            element={
              <IndustriesPage 
                onRequestDemo={() => handleOpenDemo()} 
              />
            } 
          />
          <Route 
            path="/insights" 
            element={
              <InsightsPage 
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

          {/* Industrial Data Platform Routes */}
          <Route 
            path="/platform" 
            element={
              <IndustrialDataFoundationPage 
                onRequestDemo={() => handleOpenDemo('Industrial Data Foundation')} 
              />
            } 
          />
          <Route 
            path="/platform/industrial-data-foundation" 
            element={
              <IndustrialDataFoundationPage 
                onRequestDemo={() => handleOpenDemo('Industrial Data Foundation')} 
              />
            } 
          />
          <Route 
            path="/industrial-data-foundation" 
            element={
              <IndustrialDataFoundationPage 
                onRequestDemo={() => handleOpenDemo('Industrial Data Foundation')} 
              />
            } 
          />
          <Route 
            path="/platform/data-connectivity" 
            element={
              <DataConnectivityPage 
                onRequestDemo={() => handleOpenDemo('Data Connectivity')} 
              />
            } 
          />
          <Route 
            path="/data-connectivity" 
            element={
              <DataConnectivityPage 
                onRequestDemo={() => handleOpenDemo('Data Connectivity')} 
              />
            } 
          />
          <Route 
            path="/platform/industrial-dataops" 
            element={
              <IndustrialDataOpsPage 
                onRequestDemo={() => handleOpenDemo('Industrial DataOps')} 
              />
            } 
          />
          <Route 
            path="/industrial-dataops" 
            element={
              <IndustrialDataOpsPage 
                onRequestDemo={() => handleOpenDemo('Industrial DataOps')} 
              />
            } 
          />
          <Route 
            path="/platform/edge-intelligence" 
            element={
              <EdgeIntelligencePage 
                onRequestDemo={() => handleOpenDemo('Edge Intelligence')} 
              />
            } 
          />
          <Route 
            path="/edge-intelligence" 
            element={
              <EdgeIntelligencePage 
                onRequestDemo={() => handleOpenDemo('Edge Intelligence')} 
              />
            } 
          />
          <Route 
            path="/platform/data-security" 
            element={
              <DataSecurityPage 
                onRequestDemo={() => handleOpenDemo('Data Security')} 
              />
            } 
          />
          <Route 
            path="/data-security" 
            element={
              <DataSecurityPage 
                onRequestDemo={() => handleOpenDemo('Data Security')} 
              />
            } 
          />
          <Route 
            path="/platform/data-governance" 
            element={
              <DataGovernancePage 
                onRequestDemo={() => handleOpenDemo('Data Governance')} 
              />
            } 
          />
          <Route 
            path="/data-governance" 
            element={
              <DataGovernancePage 
                onRequestDemo={() => handleOpenDemo('Data Governance')} 
              />
            } 
          />
          <Route 
            path="/platform/central-management" 
            element={
              <CentralManagementPage 
                onRequestDemo={() => handleOpenDemo('Central Management')} 
              />
            } 
          />
          <Route 
            path="/central-management" 
            element={
              <CentralManagementPage 
                onRequestDemo={() => handleOpenDemo('Central Management')} 
              />
            } 
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer 
        onRequestDemo={() => handleOpenDemo()} 
      />

      {/* Floating AI Knowledge & Direct Demo Dispatch Bot */}
      <PrishiBot 
        onOpenDemoModal={() => handleOpenDemo()}
      />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
