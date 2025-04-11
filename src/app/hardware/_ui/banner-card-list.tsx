'use client';
import { memo } from 'react';
import { Grid, Grow } from '@mui/material';
import { BannerCard } from '@/app/hardware/_ui/banner-card';
import { useInView } from 'react-intersection-observer';

export const BannerCardList = memo(() => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2, delay: 500 });

  return (
    <Grid container spacing={2} ref={ref}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Grow in={inView}>
          <BannerCard
            title='Агрегация и ретрансляция данных'
            subTitle='Отслеживает состояние линий от 4 раз в секунду для фиксации точного времени событий'
            backgroundColor='#f2f2f2'
            imageSrc='/hardware/lines_stat.svg'
          />
        </Grow>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} {...(inView ? { timeout: 1000 } : {})}>
          <BannerCard
            title='6 часов автономного сбора данных'
            subTitle='Сохранение показателей конечной продукции и событий на линии'
            backgroundColor='#9bd32e'
            imageSrc='/hardware/data_track.svg'
          />
        </Grow>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Grow in={inView} style={{ transformOrigin: '0 0 0' }} {...(inView ? { timeout: 2000 } : {})}>
          <BannerCard
            title='Подключение по WIFI'
            subTitle='Пересылка данных на сервер дистанционно или по проводному Ethernet'
            backgroundColor='#141414'
            imageSrc='/hardware/wi_fi.svg'
            color='secondary'
          />
        </Grow>
      </Grid>
    </Grid>
  );
});

BannerCardList.displayName = 'BannerCardList';
