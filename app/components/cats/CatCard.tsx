import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CatCard({ cat }: { cat: any }) {
  return (
    <article className="rounded-2xl border overflow-hidden">
      {cat.coverUrl && (
        <Image src={cat.coverUrl} alt={cat.name} width={800} height={600} className="w-full h-56 object-cover" />
      )}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{cat.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{cat.description}</p>
        <Link href={`/cats/${cat.id}`} className="inline-block text-sm font-medium underline">Voir la fiche</Link>
      </div>
    </article>
  );
}
