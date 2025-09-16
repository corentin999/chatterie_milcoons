import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import '../global.css';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
