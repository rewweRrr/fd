import { ReactNode } from 'react';
import { Box } from '@mui/material';
import { getImageProps } from 'next/image';
import { getBackgroundImage } from '@/utils/image.utils';

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
