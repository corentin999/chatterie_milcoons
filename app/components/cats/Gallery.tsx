'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery({ photos }: { photos: { id: string; url: string; alt?: string }[] }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map(p => (
          <button key={p.id} onClick={() => setActive(p.url)} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image src={p.url} alt={p.alt || ''} fill className="object-cover" />
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-4xl aspect-[4/3]">
            <Image src={active} alt="" fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
