import { memo } from 'react';
import { GridBox } from '@/app/(home)/_ui/work-simplification/grid-box';
import Image from 'next/image';
import { Box } from '@mui/material';

interface Props {
  id: string;
}

export const MasterTab = memo<Props>(({ id }) => {
  return (
    <Box
      id={id}
      display='grid'
      gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
      gridTemplateRows={{ md: '226px 226px 226px' }}
      gap={2}
      width='100%'
    >
      <GridBox title='ОТСЛЕЖИВАНИЕ И КОНТРОЛЬ ВЫПОЛНЕНИЯ ЗАКАЗОВ' gridColumn='1 / 3' gridRow='1 / 3' bgcolor='#cde997'>
        <Image
          src='/home/master-tab/orders-control.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 0 16px 16px' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Мониторинг предприятия' gridRow='1 / 3' bgcolor='#f2f2f2'>
        <Image
          src='/home/master-tab/monitoring.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Контроль персонала' bgcolor='#f2f2f2'>
        <Image
          src='/home/master-tab/staff-control.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 16px 16px' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Планировщик заказов' gridColumn='2 / 4' textSx={{ color: 'primary.contrastText' }} bgImageSrc='/home/master-tab/bg-orders-plan.webp'>
        <Image
          src='/home/master-tab/in-work.svg'
          alt=''
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom 16px right 16px' }}
          sizes='100vw'
        />
      </GridBox>
    </Box>
  );
});

MasterTab.displayName = 'MasterTab';