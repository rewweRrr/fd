import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/theme/theme';
import { Footer } from '@/components/footer';

const fdFont = localFont({
  src: [
    {
      path: './_fonts/fd-font-montserrat.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-bold.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './_fonts/fd-font-montserrat-bold.woff2',
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
  variable: '--font-fd'
});

export const metadata: Metadata = {
  title: 'Factory Director',
  description: 'Цифровое решение для автоматизации производства',
  keywords: [
    'Factory Director',
    'автоматизации производства',
    '+10% к выручке',
    'управление производством',
    'эффективность заказов',
    'производственный процесс',
    'Внедрение на производства',
    'Предиктивная аналитика',
    'Искусственный интеллект'
  ]
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
