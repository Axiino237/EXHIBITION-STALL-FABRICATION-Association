import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';

export const metadata: Metadata = {
  title: 'TNSFA | Tamil Nadu Stall Fabrication Association',
  description:
    'The apex state association and sangam uniting exhibition stall fabricators, 3D spatial designers, event contractors, and expo service providers across Tamil Nadu.',
  keywords: [
    'Tamil Nadu Stall Fabrication Association',
    'TNSFA',
    'Stall Fabricators Chennai',
    'Stall Fabricators Coimbatore',
    'Chennai Trade Centre Fabricators',
    'CODISSIA Coimbatore Stall Builders',
    'Madurai Exhibition Contractors',
    'Tamil Nadu Expo Sangam',
    'Trade Fair Stall Builders Tamil Nadu',
    '3D Stall Designers Chennai'
  ],
  authors: [{ name: 'TNSFA Secretariat' }],
  metadataBase: new URL('https://tnsfa.org'),
  openGraph: {
    title: 'Tamil Nadu Stall Fabrication Association (TNSFA)',
    description: 'Uniting the Exhibition Stall & Fabrication Industry across Tamil Nadu.',
    url: 'https://tnsfa.org',
    siteName: 'TNSFA',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Tamil Nadu Stall Fabrication Association (TNSFA)',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TNSFA | Tamil Nadu Stall Fabrication Association',
    description: 'Apex state body for exhibition stall builders, designers and expo service contractors in Tamil Nadu.',
    images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B1220] text-slate-100 antialiased selection:bg-[#F59E0B] selection:text-black flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
