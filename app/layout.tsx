import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { CustomizationProvider } from '@/components/customization-provider';
import { GoogleAnalytics } from '@next/third-parties/google';
import icon2 from '../public/icons/icon2.png';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajkot Plumbing Services | Professional Plumbers in Rajkot, Gujarat',
  description: 'Expert plumbing services in Rajkot, Gujarat. 24/7 emergency plumber, pipe repairs, bathroom fitting, and more. Best-rated local plumbers near you.',
  keywords: 'plumbing services Rajkot, emergency plumber Rajkot, plumber near me, best plumber Rajkot, bathroom fitting Rajkot, pipe repair Gujarat, plumber in Rajkot, plumbing contractor Rajkot, water leakage repair Rajkot',
  openGraph: {
    title: 'Rajkot Plumbing Services | Professional Plumbers in Rajkot',
    description: 'Expert plumbing services in Rajkot. Available 24/7 for emergency repairs. Book your service now!',
    images: ['/og-image.jpg'],
    locale: 'en_IN',
    type: 'website',
    siteName: 'Rajkot Plumbing Services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-verification-code',
  },
  alternates: {
    canonical: 'https://rajkotplumbing.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Rajkot, Gujarat" />
        <meta name="geo.position" content="22.3039;70.8022" />
        <meta name="ICBM" content="22.3039, 70.8022" />
        <link rel="icon" href={icon2.src} type="image/png" />
      </head>
      <body className={inter.className}>
        <CustomizationProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </CustomizationProvider>
        <GoogleAnalytics gaId=" G-Y13740MGLH" />
      </body>
    </html>
  );
}
