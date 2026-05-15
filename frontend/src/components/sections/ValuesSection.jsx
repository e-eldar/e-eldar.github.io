import { motion } from 'framer-motion';
import { values } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';

export default function ValuesSection() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 border-y border-white/10 bg-night/60 py-24 sm:py-28">
      <div className="container-pro">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="section-kicker">{t('sections.valuesTag')}</div>
          <h2 className="section-title mt-4">{t('sections.valuesTitle')}</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => (
            <motion.div key={item.titleKey} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.6 }}>
              <SpotlightCard className="h-full p-6">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-5 font-display text-xl font-extrabold text-white">{t(item.titleKey)}</h3>
                <p className="mt-3 leading-7 text-muted">{t(item.descKey)}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
