import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function AnimatedNumber({ value }) {
  if (typeof value !== 'number') return <span>{value}</span>;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1200, bounce: 0 });
  const rounded = useTransform(spring, latest => Math.round(latest));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
