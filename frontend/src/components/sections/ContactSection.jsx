import { useState } from 'react';
import { CheckCircle2, Github, Linkedin, Mail, MapPin, MessageSquareText, Send, ShieldCheck, Sparkles, TerminalSquare, Zap } from 'lucide-react';
import { profile } from '../../data/profile.js';
import { useLanguage } from '../../context/LanguageContext.jsx';
import { api } from '../../api/client.js';
import SpotlightCard from '../reactbits/SpotlightCard.jsx';
import AnimatedContent from '../reactbits/AnimatedContent.jsx';
import ShinyText from '../reactbits/ShinyText.jsx';
import TextType from '../reactbits/TextType.jsx';
import GlareHover from '../reactbits/GlareHover.jsx';
import MagneticButton from '../reactbits/MagneticButton.jsx';

const initial = { name: '', email: '', subject: '', message: '' };

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const change = event => setForm(prev => ({ ...prev, [event.target.name]: event.target.value }));

  const submit = async event => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await api.sendMessage(form);
      setForm(initial);
      setStatus({ type: 'success', message: t('contact.success') });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || t('contact.error') });
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    { icon: Mail, label: t('common.email'), value: profile.email, href: `mailto:${profile.email}`, accent: 'text-mint border-mint/20 bg-mint/10' },
    { icon: Github, label: t('common.github'), value: 'github.com/e-eldar', href: profile.github, accent: 'text-aqua border-aqua/20 bg-aqua/10' },
    { icon: Linkedin, label: t('common.linkedin'), value: 'linkedin.com/in/eldar-jusić', href: profile.linkedin, accent: 'text-violet border-violet/20 bg-violet/10' },
  ];

  return (
    <section id="contact" className="relative z-10 overflow-hidden bg-night/40 py-24 sm:py-28">
      <div className="container-pro">
        <AnimatedContent className="mx-auto mb-12 max-w-4xl text-center">
          <div className="section-kicker">{t('sections.contactTag')}</div>
          <h2 className="section-title mt-4">{t('sections.contactTitle')}</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted">{t('sections.contactLead')}</p>
        </AnimatedContent>

        <div className="grid gap-6 lg:grid-cols-[.88fr_1.12fr] lg:gap-8">
          <div className="space-y-5">
            <AnimatedContent>
              <GlareHover>
                <SpotlightCard className="p-6 sm:p-7">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-mint">
                    <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(52,211,153,.75)]" />
                    {t('contact.badge')}
                  </div>
                  <h3 className="font-display text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-4xl">
                    <ShinyText>{t('contact.panelTitle')}</ShinyText>
                  </h3>
                  <p className="mt-4 leading-8 text-muted">{t('contact.lead')}</p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-4 font-mono text-sm">
                    <div className="mb-3 flex items-center gap-2 text-dim"><TerminalSquare size={16} /> contact.flow</div>
                    <div className="text-muted">status: <span className="text-mint">ready</span></div>
                    <div className="text-muted">api: <span className="text-aqua">Express</span> · db: <span className="text-aqua">SQLite</span></div>
                    <div className="text-muted">open_to: <TextType words={t('contact.availability')} className="text-violet" /></div>
                  </div>
                </SpotlightCard>
              </GlareHover>
            </AnimatedContent>

            <AnimatedContent delay={0.08}>
              <div className="grid gap-3">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-dim">{t('contact.directTitle')}</div>
                {contactLinks.map(({ icon: Icon, label, value, href, accent }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="contact-tile group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${accent}`}><Icon size={20} /></div>
                      <div className="min-w-0">
                        <div className="font-mono text-xs uppercase tracking-[0.18em] text-dim">{label}</div>
                        <div className="break-all text-white transition group-hover:text-aqua">{value}</div>
                      </div>
                    </div>
                  </a>
                ))}
                <div className="contact-tile rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition duration-300">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet/20 bg-violet/10 text-violet"><MapPin size={20} /></div>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-[0.18em] text-dim">{t('common.location')}</div>
                      <div className="text-white">{profile.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent delay={0.12}>
            <div className="relative rounded-[2rem] p-[1px] shadow-card">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet/55 via-aqua/30 to-mint/35 opacity-70 blur-[2px]" />
              <SpotlightCard className="relative p-5 sm:p-7 lg:p-8">
                <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-mint/25 bg-mint/10 text-mint"><MessageSquareText size={22} /></div>
                    <div>
                      <div className="font-display text-2xl font-extrabold text-white">{t('contact.panelTitle')}</div>
                      <div className="font-mono text-xs uppercase tracking-[0.16em] text-dim">{t('contact.panelSubtitle')}</div>
                    </div>
                  </div>
                  <div className="inline-flex w-fit items-center gap-1 rounded-full border border-violet/25 bg-violet/10 px-3 py-1 font-mono text-xs text-violet"><Sparkles size={13} /> API</div>
                </div>

                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block"><span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.name')}</span><input className="input-pro" name="name" value={form.name} onChange={change} placeholder="Eldar" required minLength={2} /></label>
                    <label className="block"><span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.email')}</span><input className="input-pro" name="email" type="email" value={form.email} onChange={change} placeholder="ime@email.com" required /></label>
                  </div>
                  <label className="block"><span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.subject')}</span><input className="input-pro" name="subject" value={form.subject} onChange={change} placeholder="Internship / project / collaboration" required minLength={2} /></label>
                  <label className="block"><span className="mb-2 block font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.message')}</span><textarea className="input-pro min-h-44 resize-y" name="message" value={form.message} onChange={change} placeholder="Write a short message..." required minLength={10} /></label>

                  {status.message && (
                    <div className={`rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-mint/30 bg-mint/10 text-mint' : 'border-rose/30 bg-rose/10 text-rose'}`}>{status.message}</div>
                  )}

                  <MagneticButton disabled={loading} className="btn-primary w-full" type="submit">
                    {loading ? t('contact.sending') : t('contact.button')} <Send size={17} />
                  </MagneticButton>
                </form>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.workflowTitle')}</div>
                    <div className="mt-3 space-y-2">
                      {t('contact.workflow').map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-muted"><CheckCircle2 size={15} className="shrink-0 text-mint" /> {item}</div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-dim">{t('contact.availabilityTitle')}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {t('contact.availability').map(item => <span key={item} className="rounded-full border border-aqua/15 bg-aqua/10 px-2.5 py-1 font-mono text-[0.68rem] text-aqua/90">{item}</span>)}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
