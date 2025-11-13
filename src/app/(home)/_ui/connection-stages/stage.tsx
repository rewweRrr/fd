import CheckIcon from '@mui/icons-material/Check'
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye'
import { Box, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { StageChip } from '@/app/(home)/_ui/connection-stages/stage-chip'

interface StageProps {
  title: string
  chipText: string
  items: string[]
}

export const Stage = memo<StageProps>(({ chipText, items, title }) => {
  return (
    <Stack
      direction="row"
      columnGap={7}
      ml={{ xs: 0, sm: 3, md: 9 }}
      position="relative"
      borderLeft={{ xs: 'none', md: '1px solid #000' }}
      py={2}
      sx={{
        ':first-child': {
          paddingTop: 8,
        },
        ':last-child': {
          paddingBottom: 8,
        },
      }}
    >
      <Box display={{ xs: 'none', md: 'block' }}>
        <PanoramaFishEyeIcon sx={{ transform: 'translate3d(-12px,0,0)', backgroundColor: '#cde997' }} />
      </Box>
      <Stack rowGap={4}>
        <Stack direction="row" columnGap={{ xs: 1, md: 2 }} alignItems="center">
          <Typography fontSize={{ xs: 14, md: 28 }} fontWeight={700} textTransform="uppercase">
            {title}
          </Typography>
          <StageChip text={chipText} />
        </Stack>
        <Stack rowGap={2}>
          {items.map(item => (
            <Stack direction="row" columnGap={4} key={item}>
              <CheckIcon />
              <Typography fontSize={{ xs: 14, md: 20 }} fontWeight={500}>
                {item}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
})

Stage.displayName = 'Stage'
