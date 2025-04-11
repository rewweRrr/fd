import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import Image from 'next/image';

export const ImagesBanner = memo(() => {
  return (
    <Grid container spacing={2} height={346}>
      <Grid size={4} position='relative' display={{ xs: 'none', md: 'block' }}>
        <Image src='/home/monitoring_cover.svg' alt='' fill style={{ objectFit: 'cover' }} sizes='100vw' />
      </Grid>
      <Grid
        size={{ xs: 12, md: 4 }}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        border='2px solid'
      >
        <Typography fontSize={50} fontWeight={700}>
          +10%
        </Typography>
        <Typography fontSize={16} fontWeight={600} textAlign='center'>
          к выручке за счёт полного <br /> контроля за производством
        </Typography>
      </Grid>
      <Grid size={4} position='relative' alignItems='center' display={{ xs: 'none', md: 'flex' }}>
        <Image src='/home/form_bg_cover.webp' alt='' fill style={{ zIndex: -1, objectFit: 'cover' }} sizes='100%' />
        <Image src='/home/form_cover.svg' alt='' width={251} height={342} style={{ marginLeft: '10px' }} />
      </Grid>
    </Grid>
  );
});

ImagesBanner.displayName = 'ImagesBanner';
