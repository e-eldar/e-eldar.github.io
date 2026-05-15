import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Inbox, LogOut, Mail, ShieldCheck } from 'lucide-react';
import { api } from '../api/client.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import SpotlightCard from '../components/reactbits/SpotlightCard.jsx';

export default function AdminDashboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const [messageData, statsData] = await Promise.all([api.messages(), api.stats()]);
        setMessages(messageData.messages || []);
        setStats(statsData);
      } catch (err) {
        setError(err.message);
        if (err.message.toLowerCase().includes('token') || err.message.toLowerCase().includes('unauthorized')) navigate('/admin/login');
      }
    }
    load();
  }, [navigate]);

  function logout() {
    localStorage.removeItem('portfolio_admin_token');
    navigate('/');
  }

  return (
    <main className="relative z-10 min-h-screen px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-panel/70 p-5 backdrop-blur-2xl sm:flex-row sm:items-center">
          <div>
            <Link to="/" className="font-display text-xl font-extrabold gradient-text">EL.DEV</Link>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-[-0.05em]">{t('admin.title')}</h1>
          </div>
          <button onClick={logout} className="btn-ghost"><LogOut size={17} /> {t('admin.logout')}</button>
        </div>

        {error && <div className="mb-6 rounded-2xl border border-rose/30 bg-rose/10 p-4 text-rose">{error}</div>}

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <SpotlightCard className="p-5"><Inbox className="text-aqua" /><div className="mt-4 text-3xl font-bold">{stats?.totalMessages ?? messages.length}</div><div className="font-mono text-xs uppercase tracking-[.16em] text-dim">{t('admin.total')}</div></SpotlightCard>
          <SpotlightCard className="p-5"><Mail className="text-violet" /><div className="mt-4 text-3xl font-bold">{stats?.todayMessages ?? 0}</div><div className="font-mono text-xs uppercase tracking-[.16em] text-dim">{t('admin.today')}</div></SpotlightCard>
          <SpotlightCard className="p-5"><ShieldCheck className="text-mint" /><div className="mt-4 text-3xl font-bold">JWT</div><div className="font-mono text-xs uppercase tracking-[.16em] text-dim">{t('admin.protected')}</div></SpotlightCard>
        </div>

        <SpotlightCard className="p-5 sm:p-7">
          <h2 className="mb-5 font-display text-2xl font-extrabold">{t('admin.messages')}</h2>
          <div className="space-y-4">
            {messages.length === 0 && <p className="text-muted">{t('admin.empty')}</p>}
            {messages.map(msg => (
              <div key={msg.id} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <div>
                    <div className="font-display text-xl font-bold text-white">{msg.subject}</div>
                    <div className="text-sm text-muted">{msg.name} · <a className="text-aqua" href={`mailto:${msg.email}`}>{msg.email}</a></div>
                  </div>
                  <div className="font-mono text-xs text-dim">{new Date(msg.created_at).toLocaleString()}</div>
                </div>
                <p className="mt-4 leading-7 text-muted">{msg.message}</p>
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </main>
  );
}
