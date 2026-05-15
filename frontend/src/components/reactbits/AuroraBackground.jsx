export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-hero-gradient">
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(124,108,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(124,108,255,.16)_1px,transparent_1px)] [background-size:80px_80px] animate-gridMove" />
      <div className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[110px] animate-aurora" />
      <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-aqua/15 blur-[120px] animate-aurora [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-mint/10 blur-[120px] animate-aurora [animation-delay:-8s]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.08),transparent_30%),linear-gradient(to_bottom,rgba(8,8,13,.25),#08080d_92%)]" />
    </div>
  );
}
