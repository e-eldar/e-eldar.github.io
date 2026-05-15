import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function RotatingText({ words = [], className = '' }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (words.length <= 1) return undefined;
    const id = setInterval(() => setIndex(value => (value + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);

  if (!words.length) return null;
  return (
    <span className={`relative inline-grid min-h-[1.4em] overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 22, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -22, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.35 }}
          className="gradient-text"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
