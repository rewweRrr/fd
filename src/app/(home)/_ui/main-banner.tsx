import { memo } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { DemoButton } from '@/components/demo-button';

export const MainBanner = memo(() => {
  return (
    <Container maxWidth='xl'>
      <Stack alignItems='center' justifyContent='center' rowGap={5} pt={10} pb={8}>
        <Typography variant='h1' fontSize={42} fontWeight={700} textAlign='center' textTransform='uppercase'>
          Цифровое решение <br /> для автоматизации <br /> производства
        </Typography>
        <DemoButton size='large' />
      </Stack>
    </Container>
  );
});

MainBanner.displayName = 'MainBanner';
