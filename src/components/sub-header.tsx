import { memo } from 'react';
import { Container, Stack, Typography } from '@mui/material';

interface Props {
  title: string;
  description?: string;
}

export const SubHeader = memo<Props>(({ title, description }) => {
  return (
    <Container maxWidth='xl'>
      <Stack direction='row' columnGap={8} alignItems='center' justifyContent='space-around'>
        <Typography variant='h1' fontWeight={700} flexBasis={500} fontSize={50} textTransform='uppercase'>
          {title}
        </Typography>
        <Typography variant='h6' fontSize={20} flexBasis={500}>
          {description}
        </Typography>
      </Stack>
    </Container>
  );
});

SubHeader.displayName = 'SubHeader';
