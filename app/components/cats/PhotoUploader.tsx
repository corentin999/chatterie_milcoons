'use client';
import { useState } from 'react';

export default function PhotoUploader({ catId, onDone }: { catId: string; onDone?: () => void }) {
  const [loading, setLoading] = useState(false);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || !files.length) return;
    setLoading(true);
    const fd = new FormData();
    Array.from(files).forEach(f => fd.append('file', f));
    fd.append('catId', catId);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/photos/upload`, {
      method: 'POST',
      body: fd,
      credentials: 'include', // au cas où le back lit le cookie ; sinon inutile
    });
    setLoading(false);
    if (res.ok) onDone?.();
  }

  return (
    <label className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer">
      <input type="file" multiple className="hidden" onChange={onUpload} />
      {loading ? 'Upload…' : 'Ajouter des photos'}
    </label>
  );
}
