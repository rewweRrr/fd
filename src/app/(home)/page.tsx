import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { ImagesBanner } from '@/app/(home)/_ui/images-banner';
import { MainBanner } from '@/app/(home)/_ui/main-banner';
import { StickyImages } from '@/app/(home)/_ui/sticky-images';
import { ProductStrategy } from '@/app/(home)/_ui/product-strategy';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';

const MARQUEE_LIST = ['ИНДУСТРИЯ 4.0', 'ПРЕДИКТИВНАЯ АНАЛИТИКА', 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ'];

export default function Home() {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_LIST} repeatCount={4} />
      <MainBanner />
      <ImagesBanner />
      <StickyImages />
      <ProductStrategy />
      <Container maxWidth='xl'>
        <Stack rowGap={4} alignItems='center' maxWidth={620} margin='0 auto'>
          <Stack rowGap={4}>
            <Typography fontSize={40} fontWeight={700} textAlign='center' textTransform='uppercase'>
              Закажите демо
            </Typography>
            <Typography textAlign='center'>
              Расскажите про свой запрос и оставьте контакты — мы свяжемся с вами!
            </Typography>
          </Stack>
          <Box
            component='form'
            id='form'
            display='flex'
            flexDirection='column'
            rowGap={3}
            alignItems='center'
            width='100%'
          >
            <TextField fullWidth variant='standard' label='Имя и Фамилия' name='name' autoComplete='name' />
            <TextField fullWidth variant='standard' label='Телефон' name='phoneNumber' autoComplete='tel' />
            <TextField fullWidth variant='standard' label='Название Компании' name='company' />
            <TextField fullWidth variant='standard' label='Запрос или комментарий' name='comment' multiline rows={4} />
            <Button variant='contained' size='large' type='submit' sx={{ width: 'fit-content' }}>
              Заказать Демо
            </Button>
          </Box>
          <Typography textAlign='center'>
            Нажимая «Заказать демо», вы соглашаетесь на обработку персональных данных
          </Typography>
        </Stack>
      </Container>
    </>
  );
}
