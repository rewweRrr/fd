import { Header } from '@/components/header';
import { Marquee } from '@/components/marquee';
import { SubHeader } from '@/components/sub-header';

const MARQUEE_LIST = [
  'Подключение по WiFi',
  'Модульные интерфейсы',
  'Кастомизируемая прошивка',
  'Установка на DIN-рейку'
];

export default function Hardware() {
  return (
    <>
      <Header>
        <Marquee items={MARQUEE_LIST} repeatCount={3} />
        <SubHeader
          title='Аппаратный комплекс'
          description='Подключение оборудования осуществляется
при помощи платы сбора и ретрансляции данных собственной разработки'
        />
      </Header>
    </>
  );
}
