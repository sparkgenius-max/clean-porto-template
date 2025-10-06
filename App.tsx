import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkDetailPage from './pages/WorkDetail';
import ScrollToTop from './components/ScrollToTop';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#FAFAFA] font-sans text-neutral-800 min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </>
          } />
          <Route path="/work/:projectId" element={<WorkDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;