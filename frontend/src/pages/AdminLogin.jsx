import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole } from 'lucide-react';
import { api } from '../api/client.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import SpotlightCard from '../components/reactbits/SpotlightCard.jsx';

export default function AdminLogin() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await api.login(form);
      localStorage.setItem('portfolio_admin_token', data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center px-5 py-16">
      <SpotlightCard className="w-full max-w-md p-7">
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet/30 bg-violet/10 text-violet"><LockKeyhole /></div>
          <div>
            <h1 className="font-display text-3xl font-extrabold text-white">{t('admin.login')}</h1>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-dim">JWT · SQLite · Admin</p>
          </div>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input className="input-pro" placeholder={t('admin.username')} value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
          <input className="input-pro" placeholder={t('admin.password')} type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
          {error && <div className="rounded-2xl border border-rose/30 bg-rose/10 px-4 py-3 text-sm text-rose">{error}</div>}
          <button className="btn-primary w-full" disabled={loading}>{loading ? '...' : t('admin.button')}</button>
        </form>
      </SpotlightCard>
    </main>
  );
}
