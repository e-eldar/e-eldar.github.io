import { MapPin, GraduationCap, School, Target } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import GlareHover from '../reactbits/GlareHover.jsx';

export default function AboutSection() {
  const { t } = useLanguage();
  const cards = [
    { icon: MapPin, label: t('common.location'), value: t('about.cards.location') },
    { icon: GraduationCap, label: t('education.currentName'), value: t('about.cards.study') },
    { icon: School, label: t('education.pastName'), value: t('about.cards.school') },
    { icon: Target, label: t('common.stack'), value: t('about.cards.focus') },
  ];

  return (
    <section id="about" className="relative z-10 border-y border-white/10 bg-night/60 py-24 sm:py-28">
      <div className="container-pro grid gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-16">
        <AnimatedContent>
          <div className="section-kicker">{t('sections.aboutTag')}</div>
          <h2 className="section-title mt-4 max-w-3xl">{t('sections.aboutTitle')}</h2>
          <div className="mt-8 space-y-5 text-lg text-muted">
            <p className="leading-8">{t('about.p1')}</p>
            <p className="leading-8">{t('about.p2')}</p>
            <p className="leading-8">{t('about.p3')}</p>
          </div>
        </AnimatedContent>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map(({ icon: Icon, label, value }, index) => (
            <AnimatedContent delay={index * 0.06} key={label}>
              <GlareHover>
                <SpotlightCard className="p-5">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-aqua">
                      <Icon size={21} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-dim">{label}</div>
                      <div className="mt-1 font-display text-lg font-bold text-white">{value}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </GlareHover>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
