import { memo } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = memo(() => {
  return (
    <Stack
      flexDirection={{ md: 'row' }}
      sx={{ backgroundColor: '#cde997' }}
      component='footer'
      alignItems='center'
      justifyContent='space-between'
      gap={5}
      py={6}
      px={2}
    >
      <Image src='factory_director_log.svg' alt='logo' height={34} width={147} />
      <Stack rowGap={2} flexBasis={{ md: 400 }}>
        <Typography textAlign='center'>ООО «Фактори Директор»</Typography>
        <Typography textAlign='center'>
          Юр. адрес: 141701, Россия, Московская область, г.о. Долгопрудный, г. Долгопрудный, ул. Первомайская, д. 3, к.
          5, помещ. 1, ком. 24
        </Typography>
      </Stack>
      <Stack flexDirection='row'>
        <IconButton color='primary' href='https://t.me/FactoryDirector_official' target='_blank'>
          <TelegramIcon />
        </IconButton>
        <IconButton color='primary' href='mailto:factorydirector2024@yandex.ru' target='_blank'>
          <EmailIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
});

Footer.displayName = 'Footer';
