import { AppBar, Box, Button, ButtonBase, Container, Stack } from '@mui/material';
import { memo, PropsWithChildren } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Navigation } from './navigation';
import { DemoButton } from './demo-button';

type Props = PropsWithChildren;
export const Header = memo<Props>(({ children }) => {
  return (
    <Box>
      <AppBar position='static' color='transparent' variant='outlined'>
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
      {children}
    </Box>
  );
});

Header.displayName = 'Header';
