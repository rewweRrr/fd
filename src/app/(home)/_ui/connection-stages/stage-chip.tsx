'use client';
import { memo } from 'react';
import { Chip, Typography, useMediaQuery, useTheme } from '@mui/material';

interface Props {
  text: string;
}

export const StageChip = memo<Props>(({ text }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Chip
      size={mobile ? 'medium' : 'large'}
      variant='square-fit'
      color='secondary'
      label={<Typography fontSize={{ xs: 14, md: 18 }}>{text}</Typography>}
    />
  );
});

StageChip.displayName = 'StageChip';
