import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'Richard Obaitan',
  description: 'Front End Engineer | Designer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-950 leading-relaxed text-zinc-400 antialiased selection:bg-amber-400/20 selection:text-amber-200 overflow-x-hidden ${lato.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
