import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { SubHeader } from '@/components/sub-header';
import { BoardInfo } from '@/app/hardware/_ui/board-info';
import { Box, Container, Grid, Stack } from '@mui/material';
import { BannerCard } from '@/app/hardware/_ui/banner-card';

const MARQUEE_LIST = [
  'Подключение по WiFi',
  'Модульные интерфейсы',
  'Кастомизируемая прошивка',
  'Установка на DIN-рейку'
];

export default function Hardware() {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_LIST} repeatCount={3} />
      <SubHeader
        title='Аппаратный комплекс'
        description='Подключение оборудования осуществляется
при помощи платы сбора и ретрансляции данных собственной разработки'
        maxWidth='lg'
      />
      <Container maxWidth='lg'>
        <Stack rowGap={4} alignItems='center' justifyContent='center'>
          <BoardInfo
            imageSrc='/hardware/temperature-control.webp'
            title='Основная плата'
            chars={[
              'Используется технология Fog Computing',
              'Предварительная обработка данных',
              'Устойчивость к перебоям в электроэнергии'
            ]}
          />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <BannerCard
                title='Агрегация и ретрансляция данных'
                subTitle='Отслеживает состояние линий от 4 раз в секунду для фиксации точного времени событий'
                backgroundColor='#f2f2f2'
                imageSrc='/hardware/lines_stat.svg'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BannerCard
                title='6 часов автономного сбора данных'
                subTitle='Сохранение показателей конечной продукции и событий на линии'
                backgroundColor='#9bd32e'
                imageSrc='/hardware/data_track.svg'
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <BannerCard
                title='Подключение по WIFI'
                subTitle='Пересылка данных на сервер дистанционно или по проводному Ethernet'
                backgroundColor='#141414'
                imageSrc='/hardware/wi_fi.svg'
                color='secondary'
              />
            </Grid>
          </Grid>
          <BoardInfo
            imageSrc='/hardware/interface-a1.webp'
            title='Интерфейс A1'
            chars={[
              '4x2 канала SPI до 150 КБ/с',
              '10 изолированных цифровых входов до 400В',
              '2x RS232 , 1xRS485',
              'Подключение датчиков',
              'Удобная настройка и отладка'
            ]}
          />
          <BoardInfo
            imageSrc='/hardware/temperature_pair.webp'
            title='Термопара'
            chars={[
              'Подключение до 2 термопар',
              'Подходит для термопар J и K типа',
              'Интерфейс SPI',
              'Подключение одним проводом'
            ]}
          />
        </Stack>
      </Container>
      <Box bgcolor='#9bd32e' py={20}>
        <Container maxWidth='lg'>
          <BoardInfo
            variant='banner'
            imageSrc='/hardware/integrated_interface.webp'
            title='Внедрение на производства'
            chars={[
              'Установка на DIN-рейку',
              'Интеграция в производственную линию',
              'Интерфейс SPI',
              'Компактный размер'
            ]}
          />
        </Container>
      </Box>
    </>
  );
}
