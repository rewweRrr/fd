'use client';

import { Fragment, memo, useMemo } from 'react';
import { Box, keyframes, Stack, Typography } from '@mui/material';

type Props = {
  items: string[];
  repeatCount?: number;
};

const marqueeKeyframes = keyframes`
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  `;

export const Marquee = memo<Props>(({ items, repeatCount = 1 }) => {
  const fullList = useMemo(() => {
    const result = [...items];
    let count = repeatCount <= 0 ? 1 : repeatCount;

    while (count > 1) {
      count--;
      result.push(...items);
    }
    return result;
  }, [items, repeatCount]);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <Stack
        direction='row'
        columnGap={4}
        sx={{
          py: 2,
          animation: `${marqueeKeyframes} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused'
          }
        }}
      >
        {fullList.map((item, index) => (
          <Fragment key={index}>
            <Typography variant='body1' fontWeight={700} textTransform='uppercase'>
              {item}
            </Typography>
            {index !== fullList.length - 1 && (
              <Typography variant='body1' fontWeight={700} textTransform='uppercase'>
                •
              </Typography>
            )}
          </Fragment>
        ))}
      </Stack>
    </Box>
  );
});

Marquee.displayName = 'Marquee';
