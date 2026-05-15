import { motion } from 'framer-motion';
import ProjectsSection from '../components/sections/ProjectsSection.jsx';
import ValuesSection from '../components/sections/ValuesSection.jsx';
import { pageMotion } from '../utils/motion.js';

export default function Projects() {
  return (
    <motion.main {...pageMotion} className="pt-24">
      <ProjectsSection />
      <ValuesSection />
    </motion.main>
  );
}
