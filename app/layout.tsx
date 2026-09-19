import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';

export const metadata: Metadata = {
  title: 'ESFA India | Expo & Stall Fabricators Association',
  description:
    'The premier national association and sangam uniting exhibition stall fabricators, 3D spatial designers, event contractors, and exhibition service providers across India.',
  keywords: [
    'Exhibition Stall Fabricators India',
    'Stall Fabrication Association',
    'Exhibition Sangam India',
    'Trade Fair Stall Builders',
    '3D Stall Designers',
    'Exhibition Event Contractors',
    'Pragati Maidan Fabricators',
    'BEC Mumbai Stall Builders',
    'BIEC Bangalore Expo Vendors'
  ],
  authors: [{ name: 'ESFA Secretariat' }],
  metadataBase: new URL('https://esfa-india.org'),
  openGraph: {
    title: 'Expo & Stall Fabricators Association (ESFA India)',
    description: 'Uniting the Exhibition Stall & Fabrication Industry across India.',
    url: 'https://esfa-india.org',
    siteName: 'ESFA India',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'ESFA Expo & Stall Fabricators Association India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ESFA India | Expo & Stall Fabricators Association',
    description: 'National body for exhibition stall builders, designers and service contractors.',
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
