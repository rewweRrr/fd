import { memo } from 'react';
import { Box } from '@mui/material';
import { GridBox } from '@/app/(home)/_ui/work-simplification/grid-box';
import Image from 'next/image';

interface Props {
  id: string;
}

export const OperatorTab = memo<Props>(({ id }) => {
  return (
    <Box
      id={id}
      display='grid'
      gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
      gridTemplateRows={{ md: '226px 226px 226px' }}
      gap={2}
      width='100%'
    >
      <GridBox gridColumn='1 / 3' gridRow='1 / 3' title='Автоматизированное рабочее место' bgcolor='#cde997'>
        <Image
          src='/home/operator-tab/dashboard-operator.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Разметка простоев' bgcolor='#f2f2f2'>
        <Image
          src='/home/operator-tab/downtime_reasons.webp'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Инструкции' bgcolor='#000' textSx={{ color: 'primary.contrastText' }}>
        <Image
          src='/home/operator-tab/instruction.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox title='Контроль качества' bgcolor='#f2f2f2'>
        <Image
          src='/home/operator-tab/quality_control.svg'
          alt=''
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes='100vw'
        />
      </GridBox>
      <GridBox
        title='Контроль технологических параметров'
        gridColumn='2 / 4'
        bgImageSrc='/home/operator-tab/bg-tech-control.webp'
        textSx={{ color: 'primary.contrastText' }}
      >
        <Image
          src='/home/operator-tab/L01.svg'
          alt=''
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'calc(50% + 110px) calc(50% + 50px)' }}
          sizes='100vw'
        />
        <Image
          src='/home/operator-tab/L02.svg'
          alt=''
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'calc(50% - 65px) calc(50% - 10px)' }}
          sizes='100vw'
        />
      </GridBox>
    </Box>
  );
});

OperatorTab.displayName = 'OperatorTab';
