import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

// VVIP Fonts Setup
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Metadata for SEO and Play Store linking
export const metadata = {
  title: 'MS Manager - Apni Mobile Shop Digital Banayen',
  description: 'Pakistan ka No.1 Mobile Shop ERP. Stock, Sale, Khata - Sab ek jagah control karen. Abhi download karen!',
  icons: {
    icon: '/favicon.ico', // Agar aapke paas favicon ho to public folder mein dal den
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ur" className={`${spaceGrotesk.variable} ${jakartaSans.variable}`}>
      <body>
        {/* VVIP Sticky Header sab pages par ayega */}
        <Header />
        {/* Main page content yahan render hoga */}
        {children}
      </body>
    </html>
  );
}