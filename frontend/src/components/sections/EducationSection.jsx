import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';

export default function EducationSection() {
  const { t } = useLanguage();
  const items = [
    { period: t('education.currentPeriod'), name: t('education.currentName'), desc: t('education.currentDesc'), live: true },
    { period: t('education.pastPeriod'), name: t('education.pastName'), desc: t('education.pastDesc'), live: false },
  ];

  return (
    <section className="relative z-10 border-y border-white/10 bg-night/60 py-24 sm:py-28">
      <div className="container-pro">
        <AnimatedContent className="mb-12 max-w-4xl">
          <div className="section-kicker">{t('sections.educationTag')}</div>
          <h2 className="section-title mt-4">{t('sections.educationTitle')}</h2>
        </AnimatedContent>

        <div className="relative grid gap-5 lg:grid-cols-2">
          {items.map((item, index) => (
            <AnimatedContent delay={index * 0.08} key={item.name}>
              <SpotlightCard className="h-full p-7">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="font-mono text-xs uppercase tracking-[0.22em] text-violet">{item.period}</div>
                  {item.live && <div className="rounded-full border border-mint/30 bg-mint/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mint">{t('common.live')}</div>}
                </div>
                <h3 className="font-display text-3xl font-extrabold tracking-[-0.04em] text-white">{item.name}</h3>
                <p className="mt-3 text-muted">{item.desc}</p>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}
