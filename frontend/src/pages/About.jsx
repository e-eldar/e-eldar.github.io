import { motion } from 'framer-motion';
import AboutSection from '../components/sections/AboutSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import EducationSection from '../components/sections/EducationSection.jsx';
import TerminalSection from '../components/sections/TerminalSection.jsx';
import { pageMotion } from '../utils/motion.js';

export default function About() {
  return (
    <motion.main {...pageMotion} className="pt-24">
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <TerminalSection />
    </motion.main>
  );
}
