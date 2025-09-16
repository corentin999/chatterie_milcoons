'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      setOk(res.ok);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input name="name" placeholder="Nom" required className="w-full rounded-xl border px-4 py-2" />
      <input type="email" name="email" placeholder="Email" required className="w-full rounded-xl border px-4 py-2" />
      <textarea name="message" placeholder="Message" required className="w-full rounded-xl border px-4 py-2 h-36" />
      <button disabled={loading} className="px-4 py-2 rounded-xl bg-gray-900 text-white">
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
      {ok === true && <p className="text-green-600">Message envoyé ✅</p>}
      {ok === false && <p className="text-red-600">Oups, réessaie plus tard.</p>}
    </form>
  );
}
