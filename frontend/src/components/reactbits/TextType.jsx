import { useEffect, useMemo, useState } from 'react';

export default function TextType({ words = [], className = '', speed = 54, pause = 1200 }) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return undefined;
    const full = safeWords[wordIndex % safeWords.length];
    const doneTyping = !deleting && text === full;
    const doneDeleting = deleting && text === '';

    const timer = setTimeout(() => {
      if (doneTyping) setDeleting(true);
      else if (doneDeleting) {
        setDeleting(false);
        setWordIndex(value => (value + 1) % safeWords.length);
      } else {
        setText(current => deleting ? full.slice(0, Math.max(0, current.length - 1)) : full.slice(0, current.length + 1));
      }
    }, doneTyping ? pause : deleting ? speed * 0.55 : speed);

    return () => clearTimeout(timer);
  }, [deleting, pause, safeWords, speed, text, wordIndex]);

  return <span className={`inline-flex items-center ${className}`}>{text}<span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-aqua" /></span>;
}
