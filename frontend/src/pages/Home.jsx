import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import EducationSection from '../components/sections/EducationSection.jsx';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import ValuesSection from '../components/sections/ValuesSection.jsx';
import TerminalSection from '../components/sections/TerminalSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import { pageMotion } from '../utils/motion.js';

export default function Home() {
  return (
    <motion.main id="top" {...pageMotion}>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection compact />
      <ValuesSection />
      <TerminalSection />
      <ContactSection />
    </motion.main>
  );
}
