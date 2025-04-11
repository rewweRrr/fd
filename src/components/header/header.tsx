import { AppBar, Container, Stack } from '@mui/material';
import { memo } from 'react';
import { HeaderContent } from '@/components/header/header-content';
import { Logo } from './logo';

export const Header = memo(() => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: '#fff' }} variant='elevation'>
      <Container maxWidth='xl'>
        <Stack direction='row' columnGap={3} justifyContent='space-between' alignItems='center' py={3}>
          <Logo />
          <HeaderContent />
        </Stack>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';
