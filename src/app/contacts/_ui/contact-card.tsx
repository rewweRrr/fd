import { memo } from 'react';
import { Fade, Stack, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  imageSrc: string;
  title: string;
  subTitle: string;
  phone: string;
  telegram: string;
}

export const ContactCard = memo<Props>(({ imageSrc, title, subTitle, phone, telegram }) => {
  return (
    <Fade in timeout={500}>
      <Stack direction={{ md: 'row' }} columnGap={4} rowGap={2}>
        <Image src={imageSrc} alt={subTitle} width={320} height={320} />
        <Stack rowGap={1}>
          <Typography variant='h2' fontSize={44} fontWeight={700} textTransform='uppercase'>
            {title}
          </Typography>
          <Typography variant='body1' fontSize={22}>
            {subTitle}
          </Typography>
          <Stack direction='row' columnGap={1}>
            <Image src='/icons/phone-icon.svg' alt='' width={24} height={24} />
            <Typography variant='body1' fontSize={18}>
              {phone}
            </Typography>
          </Stack>
          <Stack direction='row' columnGap={1}>
            <Image src='/icons/telegram-icon.svg' alt='' width={24} height={24} />
            <Typography variant='body1' fontSize={18}>
              {telegram}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Fade>
  );
});

ContactCard.displayName = 'ContactCard';
