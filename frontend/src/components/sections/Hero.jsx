import { ArrowRight, Braces, Code2, Database, LockKeyhole, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile, stats } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import MagneticButton from '../reactbits/MagneticButton.jsx';
import TextType from '../reactbits/TextType.jsx';
import ShinyText from '../reactbits/ShinyText.jsx';
import RotatingText from '../reactbits/RotatingText.jsx';
import GlareHover from '../reactbits/GlareHover.jsx';
import ScrollVelocity from '../reactbits/ScrollVelocity.jsx';

const techRail = ['React', 'Vite', 'Tailwind', 'React Bits', 'Node.js', 'Express', 'SQLite', 'Auth', 'REST APIs', 'Responsive UI'];

export default function Hero() {
  const { t } = useLanguage();
  const typedWords = t('hero.typed') || [];

  const cards = [
    { icon: Code2, label: t('hero.cards.frontend'), value: 'React + Tailwind' },
    { icon: Database, label: t('hero.cards.data'), value: 'SQL / SQLite' },
    { icon: LockKeyhole, label: t('hero.cards.systems'), value: 'Auth + APIs' },
    { icon: Sparkles, label: t('hero.cards.ui'), value: 'React Bits' },
  ];

  const proofChips = ['Clean UI', 'Responsive', 'API ready'];

  return (
    <section className="hero-section relative z-10 pt-28 sm:pt-32 xl:pt-36">
      <div className="container-pro hero-grid-responsive grid min-w-0 items-center gap-10 pb-14 md:pb-16 xl:gap-16">
        <div className="hero-copy min-w-0 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="hero-badge inline-flex max-w-full flex-wrap items-center gap-3 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-violet shadow-glow sm:text-[0.72rem]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-mint shadow-[0_0_20px_rgba(52,211,153,.75)]" />
            <ShinyText>{t('hero.badge')}</ShinyText>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title-safe mt-5"
            aria-label="Junior Full-Stack Web-Developer"
          >
            <span className="hero-title-line hero-title-line-junior">Junior</span>
            <span className="hero-title-line hero-title-line-stack">Full-Stack</span>
            <span className="hero-title-line hero-title-line-gradient hero-title-line-web">Web-Developer</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.29, duration: 0.7 }}
            className="hero-type-row mt-6 flex min-h-[2rem] flex-wrap items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="text-dim">builds:</span>
            <TextType words={typedWords} className="text-aqua" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.41, duration: 0.75 }}
            className="hero-lead mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg lg:text-xl"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="hero-proof-row mt-6 flex flex-wrap gap-3"
          >
            {proofChips.map((chip, index) => (
              <span key={chip} className="hero-proof-chip">
                {index === 0 && <Braces size={14} />}
                {index === 1 && <Sparkles size={14} />}
                {index === 2 && <Rocket size={14} />}
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton to="/projects" className="btn-primary">
              {t('hero.primary')} <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton to="/contact" className="btn-ghost">
              {t('hero.secondary')}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="hero-stats mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {stats.map(item => (
              <div key={item.labelKey} className="min-w-0">
                <div className="font-display text-3xl font-extrabold gradient-text">{item.value}</div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">{t(item.labelKey)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 26, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.34, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="hero-console-wrap relative min-w-0"
        >
          <div className="hero-console-glow absolute -inset-8 rounded-full bg-violet/20 blur-[110px]" />
          <GlareHover>
            <SpotlightCard className="hero-console-card mx-auto w-full p-5 sm:p-6 lg:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-dim">developer.profile</div>
                  <div className="mt-1 truncate font-display text-2xl font-extrabold text-white">{profile.name}</div>
                </div>
                <div className="shrink-0 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 font-mono text-xs text-mint">{t('common.live')}</div>
              </div>

              <div className="hero-terminal rounded-2xl border border-white/10 bg-black/45 p-4 font-mono text-sm shadow-inner">
                <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                  <div className="flex shrink-0 gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-mint" />
                  </div>
                  <span className="text-dim">developer.profile</span>
                </div>
                <pre className="console-pre whitespace-pre-wrap leading-7 text-muted">
<span className="text-mint">const</span> developer = {'{'}
  name: <span className="text-violet">'{profile.name}'</span>,
  role: <span className="text-aqua">'{profile.title}'</span>,
  location: <span className="text-violet">'{profile.location}'</span>,
  focus: <span className="text-aqua">'<RotatingText words={['frontend', 'backend', 'databases', 'auth']} />'</span>,
  mindset: <span className="text-violet">'build → test → improve'</span>
{'}'};
                </pre>
              </div>

              <div className="hero-card-grid mt-5 grid gap-3 sm:grid-cols-2">
                {cards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="hero-mini-card rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-aqua/40 hover:bg-aqua/5">
                    <Icon className="mb-3 text-aqua" size={20} />
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">{label}</div>
                    <div className="mt-1 font-display font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </GlareHover>
        </motion.div>
      </div>
      <ScrollVelocity items={techRail} />
    </section>
  );
}
