import { memo } from 'react';
import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';

export const StickyImages = memo(() => {
  return (
    <Container maxWidth='xl'>
      <Stack alignItems='center' mt={10}>
        <Box position='sticky' top={86} height={{ xs: 200, sm: 350, md: 532 }} width='100%'>
          <Image src='/home/slider1.png' alt='' fill style={{ objectFit: 'contain' }} sizes='100vw' />
        </Box>
        <Box position='sticky' top={86} height={{ xs: 200, sm: 350, md: 532 }} width='100%'>
          <Image src='/home/slider2.svg' alt='' fill style={{ objectFit: 'contain' }} sizes='100vw' />
        </Box>
        <Box position='sticky' top={86} height={{ xs: 200, sm: 350, md: 532 }} width='100%'>
          <Image src='/home/slider3.svg' alt='' fill style={{ objectFit: 'contain' }} sizes='100vw' />
        </Box>
      </Stack>
    </Container>
  );
});

StickyImages.displayName = 'StickyImages';
