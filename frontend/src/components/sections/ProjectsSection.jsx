import { motion } from 'framer-motion';
import { ArrowUpRight, Layers3, Network, Sparkles } from 'lucide-react';
import { projects } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import ShinyText from '../reactbits/ShinyText.jsx';
import GlareHover from '../reactbits/GlareHover.jsx';

export default function ProjectsSection({ compact = false }) {
  const { t } = useLanguage();
  const list = compact ? projects.slice(0, 4) : projects;

  return (
    <section id="projects" className="relative z-10 py-24 sm:py-28">
      <div className="container-pro">
        <AnimatedContent className="mb-12 max-w-5xl">
          <div className="section-kicker">{t('sections.projectsTag')}</div>
          <h2 className="section-title mt-4">{t('sections.projectsTitle')}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{t('sections.projectsLead')}</p>
        </AnimatedContent>

        <div className="grid gap-5 lg:grid-cols-2">
          {list.map((project, index) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ delay: index * 0.06, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlareHover className="h-full">
                <SpotlightCard className="group h-full p-6 sm:p-7">
                  <div className="mb-7 flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-2 rounded-full border border-violet/25 bg-violet/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-violet">
                        <Sparkles size={13} /> {t(project.statusKey)}
                      </div>
                      <div className="mt-4 font-mono text-xs uppercase tracking-[0.22em] text-aqua">{t(project.typeKey)}</div>
                      <h3 className="mt-3 font-display text-2xl font-extrabold tracking-[-0.045em] text-white sm:text-3xl">
                        {t(project.titleKey)}
                      </h3>
                    </div>
                    <div className="font-display text-6xl font-extrabold leading-none text-white/[0.055] transition group-hover:text-violet/20">{project.number}</div>
                  </div>

                  <p className="leading-8 text-muted">{t(project.descriptionKey)}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="mb-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                        <Network size={14} /> {t('projects.labels.architecture')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.architecture.map(item => <span key={item} className="rounded-full border border-aqua/15 bg-aqua/10 px-2.5 py-1 font-mono text-[0.68rem] text-aqua/90">{item}</span>)}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="mb-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">
                        <Layers3 size={14} /> {t('projects.labels.stack')}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[0.68rem] text-muted">{tag}</span>)}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-violet/20 bg-violet/10 p-4 text-sm leading-7 text-violet">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-violet/80">{t('projects.labels.impact')} · </span>
                    <ShinyText>{t(project.impactKey)}</ShinyText>
                  </div>

                  <div className="mt-6 flex items-center justify-end text-aqua opacity-0 transition group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </SpotlightCard>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
