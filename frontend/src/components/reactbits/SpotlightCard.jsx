import { useRef } from 'react';

export default function SpotlightCard({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);

  const onMove = event => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    ref.current.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--spot-x', '50%');
    ref.current.style.setProperty('--spot-y', '0%');
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`interactive-card group relative overflow-hidden rounded-3xl border border-white/10 bg-panel/70 backdrop-blur-2xl transition-colors duration-300 before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:[background:radial-gradient(520px_circle_at_var(--spot-x,50%)_var(--spot-y,0%),rgba(124,108,255,.20),transparent_42%)] hover:border-violet/40 hover:bg-panel/85 hover:before:opacity-100 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </Tag>
  );
}
