'use client';
import { memo } from 'react';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Navigation } from './navigation';
import { DemoButton } from '../demo-button';
import { HeaderMenu } from './header-menu';
import { PresentationButton } from './presentation-button';

export const HeaderContent = memo(() => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  if (mobile) return <HeaderMenu></HeaderMenu>;
  return (
    <>
      <Box>
        <Navigation />
      </Box>
      <Stack direction='row' columnGap={1}>
        <PresentationButton />
        <DemoButton />
      </Stack>
    </>
  );
});

HeaderContent.displayName = 'HeaderContent';
