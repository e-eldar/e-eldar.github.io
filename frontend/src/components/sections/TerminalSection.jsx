import { profile } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import ShinyText from '../reactbits/ShinyText.jsx';

export default function TerminalSection() {
  const { t } = useLanguage();
  return (
    <section className="relative z-10 py-24 sm:py-28">
      <div className="container-pro">
        <AnimatedContent className="mx-auto mb-10 max-w-3xl text-center">
          <div className="section-kicker">{t('sections.terminalTag')}</div>
          <h2 className="section-title mt-4">{t('sections.terminalTitle')}</h2>
        </AnimatedContent>
        <AnimatedContent className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#080811]/90 shadow-card backdrop-blur-2xl">
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.035] px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-rose" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-mint" />
            <span className="ml-2 font-mono text-xs text-dim">bash — profile.json</span>
          </div>
          <div className="hide-scrollbar overflow-x-auto p-5 font-mono text-sm leading-8 text-muted sm:p-8">
            <div><span className="text-mint">$</span> {t('terminal.run')}</div>
            <div className="mt-3 text-muted">{'{'}</div>
            <div className="pl-5"><span className="text-aqua">"name"</span>: <span className="text-violet">"{profile.name}"</span>,</div>
            <div className="pl-5"><span className="text-aqua">"{t('terminal.role')}"</span>: <span className="text-violet">"{profile.title}"</span>,</div>
            <div className="pl-5"><span className="text-aqua">"{t('terminal.education')}"</span>: [<span className="text-mint">"FIŠ UNM"</span>, <span className="text-mint">"ŠC Krško"</span>],</div>
            <div className="pl-5"><span className="text-aqua">"frontend"</span>: [<span className="text-mint">"HTML"</span>, <span className="text-mint">"CSS"</span>, <span className="text-mint">"Tailwind"</span>, <span className="text-mint">"React"</span>],</div>
            <div className="pl-5"><span className="text-aqua">"backend"</span>: [<span className="text-mint">"Node"</span>, <span className="text-mint">"Express"</span>, <span className="text-mint">"SQLite"</span>, <span className="text-mint">"Auth"</span>],</div>
            <div className="pl-5"><span className="text-aqua">"{t('terminal.openTo')}"</span>: [<span className="text-mint">"{t('contact.availability.0') || t('contact.availability')[0]}"</span>, <span className="text-mint">"{t('contact.availability.1') || t('contact.availability')[1]}"</span>],</div>
            <div className="pl-5"><span className="text-aqua">"{t('terminal.motto')}"</span>: <span className="text-violet">"<ShinyText>{t('terminal.mottoValue')}</ShinyText>"</span></div>
            <div>{'}'}</div>
            <div className="mt-4"><span className="text-mint">$</span> <span className="inline-block h-4 w-2 animate-pulse bg-violet align-middle" /></div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
