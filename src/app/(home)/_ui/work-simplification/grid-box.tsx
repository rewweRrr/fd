import { memo, PropsWithChildren } from 'react';
import { Box, BoxProps, Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';

interface Props extends BoxProps, PropsWithChildren {
  title: string;
  bgImageSrc?: string;
  textSx?: TypographyProps['sx'];
}

export const GridBox = memo<Props>(({ title, bgImageSrc, textSx, children, ...rest }) => {
  return (
    <Box p={2} position='relative' display='flex' {...rest}>
      {bgImageSrc && <Image src={bgImageSrc} alt='' fill style={{ objectFit: 'cover' }} sizes='100vw' />}
      {children}
      <Typography fontSize={{ xs: 14, md: 20 }} fontWeight={700} textTransform='uppercase' zIndex={2} sx={textSx}>
        {title}
      </Typography>
    </Box>
  );
});

GridBox.displayName = 'GridBox';
