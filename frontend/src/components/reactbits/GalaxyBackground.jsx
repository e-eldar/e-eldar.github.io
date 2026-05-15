export default function GalaxyBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="galaxy-stars" />
      <div className="galaxy-stars galaxy-stars-two" />
      <div className="absolute left-[8%] top-[18%] h-80 w-80 rounded-full bg-violet/15 blur-[120px]" />
      <div className="absolute right-[8%] top-[6%] h-72 w-72 rounded-full bg-aqua/10 blur-[110px]" />
      <div className="absolute bottom-[8%] left-[42%] h-72 w-72 rounded-full bg-mint/10 blur-[120px]" />
    </div>
  );
}
