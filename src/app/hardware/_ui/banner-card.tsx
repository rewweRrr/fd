import { memo } from 'react';
import { Stack, Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';

interface Props {
  title: string;
  subTitle: string;
  backgroundColor: string;
  imageSrc: string;
  color?: TypographyProps['color'];
}

export const BannerCard = memo<Props>(({ imageSrc, title, subTitle, color, backgroundColor }) => {
  return (
    <Stack sx={{ position: 'relative', backgroundColor }} height={{ xs: 440, sm: 540, md: 410 }} p={2} rowGap={1}>
      <Typography variant='body1' fontSize={20} fontWeight={700} textTransform='uppercase' color={color}>
        {title}
      </Typography>
      <Typography variant='body1' fontSize={16} fontWeight={500} color={color}>
        {subTitle}
      </Typography>
      <Image src={imageSrc} alt='' fill sizes='100vw' style={{ objectPosition: 'bottom', objectFit: 'contain' }} />
    </Stack>
  );
});

BannerCard.displayName = 'BannerCard';
