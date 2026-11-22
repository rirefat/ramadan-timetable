import type { Metadata } from 'next';
import './globals.css';
import KursorEffect from '@/components/KursorEffect/KursorEffect';

export const metadata: Metadata = {
  title: 'Ramadan Calendar 2025',
  description:
    'Introducing our Ramadan calendar web application - the perfect tool for keeping track of the daily suhoor and iftar times during the holy month of Ramadan. With our user-friendly interface, you can easily access the accurate timings for your location, helping you to plan your meals and prayer schedule accordingly.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        <KursorEffect />
      </body>
    </html>
  );
}
