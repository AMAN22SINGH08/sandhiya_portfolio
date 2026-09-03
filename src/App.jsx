import React from 'react';
import SpaceBackground from './components/SpaceBackground';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Deep Space Starfield Canvas */}
      <SpaceBackground />

      {/* Scientific Coordinate Grid Lines Overlay */}
      <div className="sci-grid-overlay" />

      {/* Deep Space Vignette */}
      <div className="deep-vignette" />

      {/* Desktop Magnetic Cursor Glow */}
      <CursorGlow />

      {/* Floating Mission Control Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
