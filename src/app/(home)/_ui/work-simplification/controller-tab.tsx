import { memo } from 'react';
import { GridBox } from '@/app/(home)/_ui/work-simplification/grid-box';
import Image from 'next/image';
import { Box } from '@mui/material';

interface Props {
  id: string;
}

export const ControllerTab = memo<Props>(({ id }) => {
  return <Box
    id={id}
    display='grid'
    gridTemplateColumns={{ md: '1fr 1fr' }}
    gridTemplateRows={{ md: '339px 339px' }}
    gap={2}
    width='100%'
  >
    <GridBox gridColumn='1 / 2' gridRow='1 / 4' title='УДОБНЫЕ ФОРМЫ КОНТРОЛЯ' bgcolor='#cde997'>
      <Image
        src='/home/controller-tab/forms.svg'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom',  padding: '60px 40px 0' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox title='КОНСТРУКТОР ФОРМ' bgcolor='#f2f2f2'>
      <Image
        src='/home/controller-tab/form-constructor.webp'
        alt=''
        fill
        style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 40px 40px' }}
        sizes='100vw'
      />
    </GridBox>
    <GridBox gridRow='2 / 4' title='ИНТЕГРАЦИЯ ПРОГРАММ ПО КОНТРОЛЮ КАЧЕСТВА' bgcolor='#000' textSx={{ color: 'primary.contrastText' }}>
      <Image
        src='/home/controller-tab/quality-control.svg'
        alt=''
        fill
        style={{ objectFit: 'scale-down', objectPosition: 'bottom 40px right 40px' }}
        sizes='100vw'
      />
    </GridBox>
  </Box>;
});

ControllerTab.displayName = 'ControllerTab';
