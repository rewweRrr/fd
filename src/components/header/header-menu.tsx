import { memo, useCallback, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Container, Dialog, Divider, IconButton, Stack } from '@mui/material';
import Image from 'next/image';
import { Navigation } from './navigation';
import { PresentationButton } from './presentation-button';
import { DemoButton } from '../demo-button';

export const HeaderMenu = memo(() => {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <>
      <IconButton color='primary' aria-label='menu' onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <AppBar sx={{ bgcolor: '#fff' }} variant='outlined' position='static'>
          <Container maxWidth='xl'>
            <Stack direction='row' columnGap={3} justifyContent='space-between' alignItems='center' py={3} width='100%'>
              <Image src='factory_director_log.svg' alt='logo' height={40} width={147} />
              <IconButton color='primary' aria-label='menu' onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Container>
        </AppBar>

        <Stack rowGap={1} pt={2}>
          <Navigation />
          <Divider />
          <PresentationButton />
          <DemoButton variant='text' onClick={handleClose} />
        </Stack>
      </Dialog>
    </>
  );
});

HeaderMenu.displayName = 'HeaderMenu';
