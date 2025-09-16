/* eslint-disable @typescript-eslint/no-explicit-any */
import CatCard from '@/components/cats/CatCard';
import { getCats } from '@/lib/api/client';

export default async function KittensPage({ searchParams }: { searchParams: { status?: 'available'|'reserved'|'sold' } }) {
  const status = searchParams.status ?? 'available';
  const { data } = await getCats({ page: 1, limit: 24, status });
  const cats = data?.data ?? [];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold mb-4">Chatons — {status}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cats.map((c: any) => <CatCard key={c.id} cat={c} />)}
      </div>
    </section>
  );
}
