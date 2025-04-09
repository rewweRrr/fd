import { memo } from 'react';
import { Box, Container, Stack } from '@mui/material';
import Image from 'next/image';

export const StickyImages = memo(() => {
  return (
    <Container maxWidth='xl'>
      <Stack alignItems='center' mt={10}>
        <Box position='sticky' top={86}>
          <Image src='/home/slider1.png' alt='' width={1000} height={532} />
        </Box>
        <Box position='sticky' top={86}>
          <Image src='/home/slider2.svg' alt='' width={1000} height={532} />
        </Box>
        <Box position='sticky' top={86}>
          <Image src='/home/slider3.svg' alt='' width={1000} height={532} />
        </Box>
      </Stack>
    </Container>
  );
});

StickyImages.displayName = 'StickyImages';
