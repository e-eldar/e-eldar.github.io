import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { profile } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';

function Flag({ code, alt }) {
  return <img src={`https://flagcdn.com/w40/${code}.png`} alt={alt} className="h-4 w-6 rounded-[4px] object-cover ring-1 ring-white/20" />;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang, languages } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const nav = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact'), cta: true },
  ];

  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-white/10 bg-ink/90 py-3 shadow-[0_20px_50px_rgba(0,0,0,.45)] backdrop-blur-2xl' : 'border-white/5 bg-ink/55 py-4 backdrop-blur-xl'}`}>
      <nav className="container-pro flex items-center justify-between gap-4">
        <Link to="/" className="site-brand font-display text-xl font-extrabold tracking-[-0.04em] gradient-text sm:text-2xl" onClick={() => setOpen(false)}>
          {profile.brand}
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {nav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => item.cta
                ? `rounded-full border px-4 py-2 text-sm uppercase tracking-[0.16em] transition ${isActive ? 'border-violet bg-violet/15 text-white' : 'border-violet/45 text-violet hover:bg-violet hover:text-white'}`
                : `font-mono text-xs uppercase tracking-[0.22em] transition ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(v => !v)}
              className="language-toggle inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 font-mono text-xs text-white transition hover:border-violet/60"
              aria-label="Change language"
            >
              <Flag code={languages[lang].flag} alt={languages[lang].label} />
              <span>{languages[lang].code}</span>
            </button>
            {langOpen && (
              <div className="language-menu absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-panel/95 p-2 shadow-card backdrop-blur-2xl">
                {Object.entries(languages).map(([code, meta]) => (
                  <button
                    type="button"
                    key={code}
                    onClick={() => { setLang(code); setLangOpen(false); }}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${code === lang ? 'bg-violet/20 text-white' : 'text-muted hover:bg-white/[0.06] hover:text-white'}`}
                  >
                    <Flag code={meta.flag} alt={meta.label} />
                    {meta.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-pro mobile-menu-holder mt-4 lg:hidden">
          <div className="mobile-menu-panel rounded-3xl border border-white/10 bg-panel/95 p-3 shadow-card backdrop-blur-2xl">
            {nav.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `flex items-center justify-between rounded-2xl px-4 py-4 font-mono text-xs uppercase tracking-[0.18em] ${isActive ? 'bg-violet/20 text-white' : 'text-muted hover:bg-white/[0.06] hover:text-white'}`}
              >
                {item.label}
                <span>↗</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
