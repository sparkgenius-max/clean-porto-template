
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkDetail from './pages/WorkDetail';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#FAFAFA] font-sans text-neutral-800">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      {PROJECTS.length > 0 && (
        <WorkDetail 
          project={PROJECTS[0]} 
          allProjects={PROJECTS} 
          onNavigateToProject={() => {}} 
        />
      )}
    </div>
  );
};

export default App;
