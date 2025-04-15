import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { getImageProps } from 'next/image';
import { getBackgroundImage } from '@/utils/image.utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Свяжитесь с нами для консультации. Телефон: +7 (916) 088-77-34, telegram: @BHtrue',
  keywords: [
    'Factory Director',
    'Контакты Factory Director',
    'телефон директора'
  ],
  openGraph: {
    type: "website",
    title: "Контакты | Factory Director",
    description: "Как связаться с нами: телефон, telegram",
    url: `${process.env.SITE_URL || 'https://fd-test-sigma.vercel.app'}/contacts`,
    siteName: "Factory Director",
    images: { url: '/factory_director_log.webp', width: 147, height: 34 },
    locale: "ru_RU",
  },
};

export default function Layout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const {
    props: { srcSet }
  } = getImageProps({ alt: '', width: 956, height: 956, src: '/green-gradient.webp' });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <Box
      sx={{
        backgroundImage,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '956px 956px',
        backgroundPosition: 'calc(100% + 472px) -472px'
      }}
    >
      {children}
    </Box>
  );
}
