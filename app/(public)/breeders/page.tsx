/* eslint-disable @typescript-eslint/no-explicit-any */
import CatCard from '@/components/cats/CatCard';
import { getCats } from '@/lib/api/client';

export default async function BreedersPage() {
  const { data } = await getCats({ page: 1, limit: 20, status: undefined }); // selon ton openapi: filtre "role=breeder" si prévu
  const cats = data?.data  ?? [];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cats.map((c: any) => <CatCard key={c.id} cat={c} />)}
    </div>
  );
}
