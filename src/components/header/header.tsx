import { AppBar, ButtonBase, Container, Stack } from '@mui/material';
import { memo } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { HeaderContent } from '@/components/header/header-content';

export const Header = memo(() => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: '#fff' }} variant='elevation'>
      <Container maxWidth='xl'>
        <Stack direction='row' columnGap={3} justifyContent='space-between' alignItems='center' py={3}>
          <ButtonBase component={NextLink} href='/'>
            <Image src='factory_director_log.svg' alt='logo' height={40} width={147} />
          </ButtonBase>
          <HeaderContent />
        </Stack>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';
