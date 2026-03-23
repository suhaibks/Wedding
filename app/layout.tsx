import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ayaan Khan & Zara Sheikh | Wedding Invitation',
  description: 'A premium cinematic digital invitation for the wedding of Ayaan Khan and Zara Sheikh.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
