import type { Metadata } from 'next';
import { Alegreya } from 'next/font/google';
import './globals.css';
import { DonationProvider } from '@/context/DonationContext';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'HopeSpring | Hope for Humanity',
  description: 'Join us in bringing hope to orphans, providing clean water, food, and support to people struck by catastrophes across Africa.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("font-body antialiased", alegreya.variable)}>
        <DonationProvider>
          {children}
          <Toaster />
        </DonationProvider>
      </body>
    </html>
  );
}
