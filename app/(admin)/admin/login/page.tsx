'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const qp = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email: form.get('email'), password: form.get('password') }),
      headers: { 'Content-Type': 'application/json' }
    });
    setLoading(false);
    if (res.ok) {
      router.push(qp.get('redirect') || '/admin/cats');
    } else {
      const text = await res.text();
      setErr(text || 'Identifiants invalides');
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Admin — Connexion</h1>
      <input name="email" type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-2" required />
      <input name="password" type="password" placeholder="Mot de passe" className="w-full rounded-xl border px-4 py-2" required />
      {err && <p className="text-red-600 text-sm">{err}</p>}
      <button disabled={loading} className="px-4 py-2 rounded-xl bg-gray-900 text-white w-full">
        {loading ? 'Connexion...' : 'Se connecter'}
      </button>
    </form>
  );
}
