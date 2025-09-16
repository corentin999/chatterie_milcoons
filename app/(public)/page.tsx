import Link from 'next/link';

export default async function HomePage() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold">Notre chatterie</h1>
        <p className="text-lg text-gray-600">Chats reproducteurs, chatons disponibles et un accompagnement aux petits oignons 🐾</p>
        <div className="flex justify-center gap-3">
          <Link href="/kittens" className="px-4 py-2 rounded-xl bg-gray-900 text-white">Voir les chatons</Link>
          <Link href="/breeders" className="px-4 py-2 rounded-xl border border-gray-300">Nos reproducteurs</Link>
        </div>
      </div>
    </section>
  );
}
