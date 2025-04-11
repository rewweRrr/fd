import { memo } from 'react';
import { Container, Stack, Typography } from '@mui/material';
import { Breakpoint } from '@mui/system';

interface Props {
  title: string;
  description?: string;
  maxWidth: Breakpoint;
}

export const SubHeader = memo<Props>(({ title, description, maxWidth }) => {
  return (
    <Container maxWidth={maxWidth}>
      <Stack direction={{ md: 'row' }} columnGap={16} rowGap={4} alignItems='center' py={12}>
        <Typography
          variant='h1'
          fontWeight={700}
          flexBasis={{ md: 520 }}
          fontSize={{ xs: 26, md: 50 }}
          textTransform='uppercase'
        >
          {title}
        </Typography>
        <Typography variant='h6' fontSize={20} flexBasis={{ md: 600 }}>
          {description}
        </Typography>
      </Stack>
    </Container>
  );
});

SubHeader.displayName = 'SubHeader';
