import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import { cn } from '@/utilities/cn';

const instrument = Instrument_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Devlink',
  description:
    'Create and share your profile anytime, from anywhere in the world!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={instrument.className + 'min-h-screen bg-lightgrey'}>
        <Header />
        <main className={cn('px-3')}>{children}</main>
      </body>
    </html>
  );
}
