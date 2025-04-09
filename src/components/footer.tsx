import { memo } from 'react';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const Footer = memo(() => {
  return (
    <Stack sx={{ backgroundColor: '#cde997' }} component='footer' alignItems='center' rowGap={5} py={5} px={2}>
      <Image src='factory_director_log.svg' alt='logo' height={34} width={147} />
      <Typography color='textSecondary'>© Все права защищены. Factory Director</Typography>
    </Stack>
  );
});

Footer.displayName = 'Footer';
