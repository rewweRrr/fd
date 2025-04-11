'use client';
import { memo } from 'react';
import { Box, Button, Typography } from '@mui/material';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = memo(() => {
  const pathname = usePathname();
  return (
    <Box>
      <Button component={NextLink} href='/hardware'>
        <Typography fontWeight={pathname === '/hardware' ? 600 : undefined}>Аппаратный комплекс</Typography>
      </Button>
      <Button component={NextLink} href='/contacts'>
        <Typography fontWeight={pathname === '/contacts' ? 600 : undefined}>Контакты</Typography>
      </Button>
    </Box>
  );
});

Navigation.displayName = 'Navigation';
