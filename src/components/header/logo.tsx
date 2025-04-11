import { memo } from 'react';
import { ButtonBase } from '@mui/material';
import NextLink from 'next/link';
import Image from 'next/image';

export const Logo = memo(() => {
  return (
    <ButtonBase component={NextLink} href='/'>
      <Image src='factory_director_log.svg' alt='logo' height={40} width={147} />
    </ButtonBase>
  );
});

Logo.displayName = 'Logo';
