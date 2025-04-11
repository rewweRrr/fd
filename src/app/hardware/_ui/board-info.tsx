'use client';
import { memo } from 'react';
import { Box, Fade, Stack, Typography } from '@mui/material';
import { getImageProps } from 'next/image';
import { getBackgroundImage } from '@/utils/image.utils';
import { useInView } from 'react-intersection-observer';

interface Props {
  title: string;
  imageSrc: string;
  chars: string[];
  variant?: 'banner' | 'default';
}

export const BoardInfo = memo<Props>(({ imageSrc, title, chars, variant = 'default' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2, delay: 500 });
  const {
    props: { srcSet }
  } = getImageProps({ alt: '', width: 580, height: 312, src: imageSrc });
  const backgroundImage = getBackgroundImage(srcSet);

  let titleTextAlign: 'center' | 'start' = 'center';
  let titleGridColumn = '1/2';
  let titleGridRow = '1/2';

  let charsGridColumn = '1/2';
  let charsGridRow = '2/3';

  let imageGridColumn = '2/3';
  let imageGridRow = '1/3';

  if (variant === 'banner') {
    titleTextAlign = 'start';
    titleGridColumn = '1/3';
    titleGridRow = '1/2';

    charsGridColumn = '2/3';
    charsGridRow = '2/3';

    imageGridColumn = '1/2';
    imageGridRow = '2/3';
  }

  return (
    <Fade in={inView} ref={ref}>
      <Box
        display='grid'
        gridTemplateColumns={{ md: '1fr 1fr' }}
        gridTemplateRows={{ md: 'auto auto' }}
        gap={2}
        width='100%'
      >
        <Box gridColumn={{ md: titleGridColumn }} gridRow={{ md: titleGridRow }}>
          <Typography
            variant='body1'
            fontSize={36}
            fontWeight={700}
            textTransform='uppercase'
            textAlign={titleTextAlign}
          >
            {title}
          </Typography>
        </Box>
        <Box
          height={312}
          gridColumn={{ md: imageGridColumn }}
          gridRow={{ md: imageGridRow }}
          sx={{
            backgroundImage,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
        <Box gridColumn={{ md: charsGridColumn }} gridRow={{ md: charsGridRow }} display='flex' flexDirection='column'>
          {chars.map((char, index) => (
            <Stack key={char}>
              <Typography variant='body1' fontSize={16} py={2} fontWeight={500}>
                {char}
              </Typography>
              {index !== chars.length - 1 && <Box height='1px' width='100%' bgcolor='black' />}
            </Stack>
          ))}
        </Box>
      </Box>
    </Fade>
  );
});

BoardInfo.displayName = 'BoardInfo';
