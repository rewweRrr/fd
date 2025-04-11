import { Header } from '@/components/header/header';
import { Marquee } from '@/components/marquee';
import { SubHeader } from '@/components/sub-header';
import { BoardInfo } from '@/app/hardware/_ui/board-info';
import { Box, Container, Stack } from '@mui/material';
import { BannerCardList } from '@/app/hardware/_ui/banner-card-list';

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
        <Stack rowGap={12} alignItems='center' justifyContent='center'>
          <BoardInfo
            imageSrc='/hardware/temperature-control.webp'
            title='Основная плата'
            chars={[
              'Используется технология Fog Computing',
              'Предварительная обработка данных',
              'Устойчивость к перебоям в электроэнергии'
            ]}
          />
          <BannerCardList />
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
