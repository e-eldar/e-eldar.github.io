import { motion } from 'framer-motion';
import { BadgeCheck, Braces, Code2, Cpu, Database, FileCode2, GitBranch, KeyRound, Layers3, Palette, Server, ShieldCheck, Sparkles, TerminalSquare, Wrench } from 'lucide-react';
import { skillGroups } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import ShinyText from '../reactbits/ShinyText.jsx';
import GlareHover from '../reactbits/GlareHover.jsx';

const iconMap = {
  HTML5: FileCode2,
  'CSS3 / Tailwind': Palette,
  Bootstrap: Layers3,
  'React + Vite': Code2,
  JavaScript: Braces,
  React: Code2,
  'Node.js / Express': Server,
  'SQL / SQLite': Database,
  Authentication: ShieldCheck,
  'REST APIs': GitBranch,
  Java: BadgeCheck,
  Python: TerminalSquare,
  'C++': Cpu,
  'Assembly x86': Wrench,
};

const labItems = [
  { label: 'React', icon: Code2 },
  { label: 'Tailwind', icon: Palette },
  { label: 'APIs', icon: GitBranch },
  { label: 'Auth', icon: KeyRound },
  { label: 'SQLite', icon: Database },
  { label: 'Node', icon: Server },
];

function levelLabel(level) {
  if (level >= 80) return 'strong';
  if (level >= 55) return 'building';
  return 'learning';
}

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative z-10 py-24 sm:py-28">
      <div className="container-pro">
        <div className="grid gap-12 lg:grid-cols-[.95fr_1.05fr] lg:items-center">
          <AnimatedContent>
            <div className="section-kicker">{t('sections.skillsTag')}</div>
            <h2 className="section-title mt-4">{t('sections.skillsTitle')}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{t('skills.lead')}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                ['scalability', 'React components · data driven UI'],
                ['maintainability', 'clean folders · reusable sections'],
                ['APIs + auth', 'Express · JWT · protected admin'],
                ['forms', 'validation · SQLite messages'],
              ].map(([title, value]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-violet">{title}</div>
                  <div className="mt-1 text-sm text-muted">{value}</div>
                </div>
              ))}
            </div>
          </AnimatedContent>

          <AnimatedContent delay={0.1}>
            <div className="stack-lab">
              <div className="stack-core"><span className="stack-core-logo">EJ</span></div>
              {labItems.map(({ label, icon: Icon }) => (
                <div key={label} className="stack-chip"><Icon size={15} /> {label}</div>
              ))}
            </div>
          </AnimatedContent>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <AnimatedContent key={group.id} delay={groupIndex * 0.06}>
              <GlareHover className="h-full">
                <SpotlightCard className="h-full p-5 sm:p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.22em] text-violet">{t(group.titleKey)}</div>
                      <h3 className="mt-2 font-display text-2xl font-extrabold text-white"><ShinyText>{group.id === 'frontend' ? 'Frontend' : group.id === 'backend' ? 'Backend' : 'Programming'}</ShinyText></h3>
                      <p className="mt-2 text-sm leading-6 text-dim">{t(group.subtitleKey)}</p>
                    </div>
                    <div className="rounded-2xl border border-aqua/15 bg-aqua/10 p-3 text-aqua"><Layers3 size={22} /></div>
                  </div>

                  <div className="grid gap-3">
                    {group.items.map(skill => {
                      const Icon = iconMap[skill.name] || Sparkles;
                      return (
                        <div key={skill.name} className="skill-chip rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300">
                          <div className="flex items-start gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-aqua/20 bg-aqua/10 text-aqua"><Icon size={19} /></div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-start justify-between gap-3">
                                <div className="font-display font-bold text-white">{skill.name}</div>
                                <div className="rounded-full border border-violet/20 bg-violet/10 px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-violet">{levelLabel(skill.level)}</div>
                              </div>
                              <div className="mt-1 font-mono text-xs leading-5 text-dim">// {t(skill.noteKey)}</div>
                              <div className="mt-3 flex items-center gap-3">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                                  <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                                    className="h-full rounded-full bg-gradient-to-r from-violet via-aqua to-mint"
                                  />
                                </div>
                                <span className="w-9 text-right font-mono text-[0.68rem] text-aqua">{skill.level}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
