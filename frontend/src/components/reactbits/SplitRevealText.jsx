import { motion } from 'framer-motion';

export default function SplitRevealText({ text, className = '', gradient = false, delay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${gradient ? 'gradient-text' : ''}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: delay + wordIndex * 0.055, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
