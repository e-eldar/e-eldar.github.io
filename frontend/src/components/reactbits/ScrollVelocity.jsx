export default function ScrollVelocity({ items = [] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.025] py-4">
      <div className="marquee-track flex min-w-max gap-4 font-mono text-xs uppercase tracking-[0.22em] text-dim">
        {row.map((item, index) => <span key={`${item}-${index}`} className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">{item}</span>)}
      </div>
    </div>
  );
}
