import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold">Chatterie</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/breeders">Reproducteurs</Link>
          <Link href="/kittens">Chatons</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin/cats" className="opacity-70 hover:opacity-100">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
