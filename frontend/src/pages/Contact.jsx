import { motion } from 'framer-motion';
import ContactSection from '../components/sections/ContactSection.jsx';
import { pageMotion } from '../utils/motion.js';

export default function Contact() {
  return (
    <motion.main {...pageMotion} className="pt-24">
      <ContactSection />
    </motion.main>
  );
}
