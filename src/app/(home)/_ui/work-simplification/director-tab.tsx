import { memo } from 'react';
import { Box } from '@mui/material';
import { GridBox } from '@/app/(home)/_ui/work-simplification/grid-box';
import Image from 'next/image';
interface Props {
  id: string;
}

export const DirectorTab = memo<Props>(({id}) => {
  return (
    <Box
      id={id}
      display='grid'
      gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
      gridTemplateRows={{ md: '226px 226px 226px' }}
      gap={2}
      width='100%'
    >
      <GridBox title='Сводные отчёты' bgcolor='#000' textSx={{ color: 'primary.contrastText' }}>
        <Image
          src='/home/director-tab/bg-reports.svg'
          alt=''
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox gridColumn='2 / 4' gridRow='1 / 3' title='Интерактивный дэшборд' bgcolor='#cde997'>
        <Image
          src='/home/director-tab/efficiency-dashboard.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox
        title='Контроль персонала'
        textSx={{ color: 'primary.contrastText' }}
        bgImageSrc='/home/director-tab/bg-personal-control.webp'
      />
      <GridBox title='Отслеживание аномалий' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/anomaly-detection.webp'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Реалтайм-мониторинг' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/realtime-monitoring.webp'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Предиктивная аналитика' bgcolor='#f2f2f2'>
        <Image
          src='/home/director-tab/predictive-analytics.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', paddingBottom: '16px' }}
          sizes='100vw'
        />
      </GridBox>
    </Box>
  );
});

DirectorTab.displayName = 'DirectorTab';
