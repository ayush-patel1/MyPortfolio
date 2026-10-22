import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CommandPalette from './components/CommandPalette';
import PortalHero from './components/PortalHero';
import AboutMindset from './components/AboutMindset';
import ThrowableDeck from './components/ThrowableDeck';
import ExperienceTimeline from './components/ExperienceTimeline';
import TechnicalArsenal from './components/TechnicalArsenal';
import SocialProfiles from './components/SocialProfiles';
import RecognitionSection from './components/RecognitionSection';
import CloseSection from './components/CloseSection';
import CaseStudy from './pages/CaseStudy';
import './App.css';

function MainLandingPage() {
  return (
    <main className="main-stage">
      {/* 1. Hero: Cinematic Portal Reveal */}
      <PortalHero />

      {/* 2. About: The Engineering Mindset */}
      <AboutMindset />

      {/* 3. Selected Work: 4 Projects Stacked Deck */}
      <ThrowableDeck />

      {/* 4. Experience: Zscaler Software Development Intern */}
      <ExperienceTimeline />

      {/* 5. Technical Arsenal: Tools of the Trade */}
      <TechnicalArsenal />

      {/* 6. Social profiles */}
      <SocialProfiles />

      {/* 7. Recognition: Honours, Cohorts & Community */}
      <RecognitionSection />

      {/* 8. Contact: Open to Interesting Problems & Grand Finale */}
      <CloseSection />
    </main>
  );
}

function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Global Fixed Navigation */}
      <Navigation onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<MainLandingPage />} />
        <Route path="/work/:projectId" element={<CaseStudy />} />
      </Routes>

      {/* Global Keyboard-Accessible Command Palette */}
      <CommandPalette 
        isOpen={commandPaletteOpen} 
        onClose={() => setCommandPaletteOpen(false)} 
      />
    </div>
  );
}

export default App;
