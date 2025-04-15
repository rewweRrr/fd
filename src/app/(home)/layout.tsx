import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { getImageProps } from 'next/image';
import { getBackgroundImage } from '@/utils/image.utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Factory Director Цифровое решение для автоматизации производства',
  keywords: [
    'Factory Director',
    'автоматизации производства',
    '+10% к выручке',
    'управление производством',
    'эффективность заказов',
    'производственный процесс',
    'Внедрение на производства',
    'Предиктивная аналитика',
    'Искусственный интеллект',
    'Этапы подключения'
  ]
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
        backgroundPosition: '-472px -472px'
      }}
    >
      {children}
    </Box>
  );
}
