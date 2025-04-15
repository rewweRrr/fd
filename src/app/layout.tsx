import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import { Footer } from '@/components/footer';
import { SITE_URL } from '@/constants/constants';

const fdFont = localFont({
  src: [
    {
      path: './_fonts/fd-font-montserrat-cyrillic.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-latin.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-cyrillic.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-latin.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-cyrillic.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-latin.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-druk.woff',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-fd',
  adjustFontFallback: 'Arial'
});

export const metadata: Metadata = {
  title: {
    template: '%s | Factory Director',
    default: 'Factory Director'
  },
  description: 'Factory Director Цифровое решение для автоматизации производства',
  openGraph: {
    type: 'website',
    title: 'Factory Director',
    description: 'Цифровое решение для автоматизации производства',
    url: SITE_URL,
    siteName: 'Factory Director',
    images: { url: `${SITE_URL}/factory_director_log.webp`, width: 147, height: 34 },
    locale: 'ru_RU'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='ru' className={fdFont.variable} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
