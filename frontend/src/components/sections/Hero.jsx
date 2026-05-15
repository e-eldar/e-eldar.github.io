import { ArrowRight, Code2, Database, LockKeyhole, Sparkles } from 'lucide-react';
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
  // Hero title is locked to 3 clean lines so it never gets hidden by the card.
  const heroTitleLines = ['Junior', 'Full-Stack', 'Web-Developer'];

  return (
    <section className="relative z-10 overflow-visible pt-32 sm:pt-36 lg:pt-40">
      <div className="container-pro hero-layout-grid grid min-h-[calc(100vh-6rem)] min-w-0 items-center gap-12 pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.68fr)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.66fr)]">
        <div className="min-w-0 max-w-[40rem] overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="inline-flex flex-wrap items-center gap-3 rounded-full border border-violet/30 bg-violet/10 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-violet shadow-glow"
          >
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_20px_rgba(52,211,153,.75)]" />
            <ShinyText>{t('hero.badge')}</ShinyText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8 }}
            className="mt-6 font-mono text-xs uppercase tracking-[0.24em] text-dim"
          >
            {t('hero.eyebrow')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 34, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hero-title-safe mt-5"
          >
            {heroTitleLines.map((line, index) => (
              <span
                key={line}
                className={index === 2 ? 'hero-title-line hero-title-line-gradient' : 'hero-title-line'}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.7 }}
            className="mt-5 flex min-h-[2rem] flex-wrap items-center gap-3 font-mono text-sm text-muted"
          >
            <span className="text-dim">builds:</span>
            <TextType words={typedWords} className="text-aqua" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.75 }}
            className="mt-6 max-w-2xl text-lg leading-9 text-muted sm:text-xl"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.56, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton to="/projects" className="btn-primary">
              {t('hero.primary')} <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton to="/contact" className="btn-ghost">
              {t('hero.secondary')}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.7 }}
            className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {stats.map(item => (
              <div key={item.labelKey}>
                <div className="font-display text-3xl font-extrabold gradient-text">{item.value}</div>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">{t(item.labelKey)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-10 rounded-full bg-violet/20 blur-[120px]" />
          <GlareHover>
            <SpotlightCard className="mx-auto max-w-[28rem] p-5 sm:p-6 lg:p-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-dim">{t('hero.consoleTitle')}</div>
                  <div className="mt-1 font-display text-2xl font-extrabold text-white">{profile.name}</div>
                </div>
                <div className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 font-mono text-xs text-mint">{t('common.live')}</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/45 p-4 font-mono text-sm shadow-inner">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-rose" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-mint" /></div>
                  <span className="text-dim">developer.profile</span>
                </div>
                <pre className="whitespace-pre-wrap leading-7 text-muted">
<span className="text-mint">const</span> developer = {'{'}
  name: <span className="text-violet">'{profile.name}'</span>,
  role: <span className="text-aqua">'{profile.title}'</span>,
  location: <span className="text-violet">'{profile.location}'</span>,
  focus: <span className="text-aqua">'<RotatingText words={['frontend', 'backend', 'databases', 'auth']} />'</span>,
  mindset: <span className="text-violet">'build → test → improve'</span>
{'}'};
                </pre>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {cards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-aqua/40 hover:bg-aqua/5">
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
