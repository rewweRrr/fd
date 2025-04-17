'use client';
import { memo } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { TabBox } from '@/app/(home)/_ui/work-simplification/tab-box';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

interface Props {
  id: string;
}

export const DirectorTab = memo<Props>(({ id }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  if (mobile) {
    return (
      <Box id={id} width='100%'>
        <Swiper
          className='fd-swiper-navigation'
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, horizontalClass: 'fd-swiper-bullets' }}
        >
          <SwiperSlide>
            <TabBox title='Сводные отчёты' bgcolor='#000' height={226} textSx={{ color: 'primary.contrastText' }}>
              <Image
                src='/home/director-tab/bg-reports.svg'
                alt=''
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
                sizes='100vw'
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title='Интерактивный дэшборд' bgcolor='#cde997'>
              <Image
                src='/home/director-tab/efficiency-dashboard.svg'
                alt=''
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
                sizes='100vw'
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox
              title='Контроль персонала'
              textSx={{ color: 'primary.contrastText' }}
              height={226}
              bgImageSrc='/home/director-tab/bg-personal-control.webp'
            />
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title='Отслеживание аномалий' bgcolor='#f2f2f2'>
              <Image
                src='/home/director-tab/anomaly-detection.webp'
                alt=''
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes='100vw'
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title='Реалтайм-мониторинг' bgcolor='#f2f2f2'>
              <Image
                src='/home/director-tab/realtime-monitoring.webp'
                alt=''
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
                sizes='100vw'
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title='Предиктивная аналитика' bgcolor='#f2f2f2'>
              <Image
                src='/home/director-tab/predictive-analytics.svg'
                alt=''
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
                sizes='100vw'
              />
            </TabBox>
          </SwiperSlide>
        </Swiper>
      </Box>
    );
  }

  return (
    <Box
      id={id}
      display='grid'
      gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
      gridTemplateRows={{ md: '226px 226px 226px' }}
      gap={2}
      width='100%'
    >
      <TabBox title='Сводные отчёты' bgcolor='#000' textSx={{ color: 'primary.contrastText' }}>
        <Image
          src='/home/director-tab/bg-reports.svg'
          alt=''
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
          sizes='100vw'
        />
      </TabBox>
      <TabBox gridColumn='2 / 4' gridRow='1 / 3' title='Интерактивный дэшборд' bgcolor='#cde997'>
        <Image
          src='/home/director-tab/efficiency-dashboard.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
          sizes='100vw'
        />
      </TabBox>
      <TabBox
        title='Контроль персонала'
        textSx={{ color: 'primary.contrastText' }}
        bgImageSrc='/home/director-tab/bg-personal-control.webp'
      />
      <TabBox title='Отслеживание аномалий' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/anomaly-detection.webp'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes='100vw'
        />
      </TabBox>
      <TabBox title='Реалтайм-мониторинг' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/realtime-monitoring.webp'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
          sizes='100vw'
        />
      </TabBox>
      <TabBox title='Предиктивная аналитика' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/predictive-analytics.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
          sizes='100vw'
        />
      </TabBox>
    </Box>
  );
});

DirectorTab.displayName = 'DirectorTab';
