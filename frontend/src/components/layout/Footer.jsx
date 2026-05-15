import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="container-pro flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
        <div>
          <div className="font-display text-xl font-extrabold gradient-text">{profile.brand}</div>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-dim">© 2026 — {profile.name} · {profile.location}</p>
          <p className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('footer.built')}</p>
        </div>
        <div className="flex items-center gap-3">
          <a className="rounded-xl border border-white/10 p-3 text-muted transition hover:border-violet/60 hover:text-white" href={`mailto:${profile.email}`} aria-label={t('common.email')}><Mail size={18} /></a>
          <a className="rounded-xl border border-white/10 p-3 text-muted transition hover:border-violet/60 hover:text-white" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className="rounded-xl border border-white/10 p-3 text-muted transition hover:border-violet/60 hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className="rounded-xl border border-white/10 p-3 text-muted transition hover:border-violet/60 hover:text-white" href="#top" aria-label={t('footer.backTop')}><ArrowUp size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
