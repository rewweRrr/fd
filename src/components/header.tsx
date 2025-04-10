import { AppBar, Button, ButtonBase, Container, Stack } from '@mui/material';
import { memo } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Navigation } from './navigation';
import { DemoButton } from './demo-button';

export const Header = memo(() => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: '#fff' }} variant='elevation'>
      <Container maxWidth='xl'>
        <Stack direction='row' columnGap={4} justifyContent='space-between' alignItems='center' py={3}>
          <ButtonBase component={NextLink} href='/'>
            <Image src='factory_director_log.svg' alt='logo' height={34} width={147} />
          </ButtonBase>
          <Navigation />
          <Stack direction='row' columnGap={1}>
            <Button>Скачать презентацию</Button>
            <DemoButton />
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
});

Header.displayName = 'Header';
