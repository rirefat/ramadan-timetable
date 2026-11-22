import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LocationProvider } from '@/domains/location/context/LocationContext';

export const metadata: Metadata = {
  metadataBase: new URL('https://ramadan-timetable.netlify.app'),
  title: 'Ramadan Calendar & Timetable 2025 | Sehri & Iftar Schedule',
  description:
    'Real-time Ramadan fasting schedule, live Sehri and Iftar countdowns, 64-district offset adjustments, and authentic Duas for the holy month of Ramadan.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Ramadan Calendar 2025 - Suhoor & Iftar Timetable',
    description: 'Accurate Ramadan fasting times, live countdowns, and daily prayers.',
    images: ['/img/ramadan-timetable-project-preview.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#060e32',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#eff2f9] text-slate-900 antialiased selection:bg-brand-500 selection:text-white">
        <LocationProvider>
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}
