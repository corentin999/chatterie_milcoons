import Gallery from '@/components/cats/Gallery';
import { getCat, getPhotos } from '@/lib/api/client';
import Image from 'next/image';

export default async function CatPage({ params }: { params: { id: string } }) {
  const [{ data: cat }, { data: photos }] = await Promise.all([
    getCat(Number(params.id)),
    getPhotos(Number(params.id))
  ]);
  const list = photos?.data ?? photos ?? [];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row gap-6">
        {cat?.coverUrl && (
          <Image src={cat.coverUrl} alt={cat.name} width={600} height={400} className="rounded-2xl object-cover" />
        )}
        <div>
          <h1 className="text-3xl font-semibold">{cat?.name}</h1>
          <p className="text-gray-600 mt-2">{cat?.description}</p>
        </div>
      </div>
      <Gallery photos={list} />
    </div>
  );
}
