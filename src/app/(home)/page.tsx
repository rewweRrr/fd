import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { Stack, Typography } from '@mui/material';
import { DemoButton } from '@/components/demo-button';

const MARQUEE_LIST = ['ИНДУСТРИЯ 4.0', 'ПРЕДИКТИВНАЯ АНАЛИТИКА', 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ'];

export default function Home() {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_LIST} repeatCount={4} />
      <Stack alignItems='center' justifyContent='center' rowGap={5} pt={10} pb={8}>
        <Typography variant='h1' fontSize={42} fontWeight={700} textAlign='center' textTransform='uppercase'>
          Цифровое решение <br /> для автоматизации <br /> производства
        </Typography>
        <DemoButton size='large' />
      </Stack>
    </>
  );
}
