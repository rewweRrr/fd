import { memo } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  title: string;
  imageSrc: string;
  chars: string[];
}

export const BoardInfo = memo<Props>(({ imageSrc, title, chars }) => {
  return (
    <Stack direction='row' columnGap={3} width='100%' justifyContent='center'>
      <Stack rowGap={2} flexBasis={538}>
        <Typography variant='body1' fontSize={48} fontWeight={700} textTransform='uppercase'>
          {title}
        </Typography>
        <Stack>
          {chars.map((char, index) => (
            <Stack key={char}>
              <Typography variant='body1' fontSize={16} py={2} fontWeight={500}>
                {char}
              </Typography>
              {index !== chars.length - 1 && <Box height='1px' width='100%' bgcolor='black' />}
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Image src={imageSrc} alt='' width={580} height={312} />
    </Stack>
  );
});

BoardInfo.displayName = 'BoardInfo';
