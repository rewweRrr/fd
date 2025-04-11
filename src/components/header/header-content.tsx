'use client';

import { memo } from 'react';
import { Button, IconButton, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Navigation } from '@/components/header/navigation';
import { DemoButton } from '@/components/demo-button';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderContent = memo(() => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  if (mobile)
    return (
      <>
        <IconButton color='primary' aria-label='menu'>
          <MenuIcon />
        </IconButton>
      </>
    );
  return (
    <>
      <Navigation />
      <Stack direction='row' columnGap={1}>
        <Button>Скачать презентацию</Button>
        <DemoButton />
      </Stack>
    </>
  );
});

HeaderContent.displayName = 'HeaderContent';
