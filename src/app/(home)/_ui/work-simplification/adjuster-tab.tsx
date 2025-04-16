import { memo } from 'react';
import { GridBox } from '@/app/(home)/_ui/work-simplification/grid-box';
import Image from 'next/image';
import { Box } from '@mui/material';

interface Props {
  id: string;
}

export const AdjusterTab = memo<Props>(({id}) => {
  return <Box
    id={id}
    display='grid'
    gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
    gridTemplateRows={{ md: '226px 226px 226px' }}
    gap={2}
    width='100%'
  >
    <GridBox title='Автоматическое планирование ТО' bgcolor='#f2f2f2' >
      <Image
        src='/home/adjuster-tab/to-notification.webp'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox gridColumn='2 / 4' gridRow='1 / 3' title='Мониторинг в реальном времени' bgcolor='#cde997'>
      <Image
        src='/home/adjuster-tab/fabric-monitoring.svg'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox
      title='История линий'
      textSx={{ color: 'primary.contrastText' }}
      bgImageSrc='/home/adjuster-tab/bg-history.webp'
    >
      <Image
        src='/home/adjuster-tab/line-history.svg'
        alt=''
        fill
        style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox title='Журнал ТО' bgcolor='#f2f2f2'>
      <Image
        src='/home/adjuster-tab/to-journal.webp'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox title='Уведомление о неполадках' bgcolor='#f2f2f2'>
      <Image
        src='/home/adjuster-tab/warning-notification.webp'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox title='Автоопределение Узла неисправности' bgcolor='#000' textSx={{ color: 'primary.contrastText' }}>
      <Image
        src='/home/adjuster-tab/detected-problem.svg'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom'}}
        sizes='100vw'
      />
    </GridBox>
  </Box>;
});

AdjusterTab.displayName = 'AdjusterTab'
