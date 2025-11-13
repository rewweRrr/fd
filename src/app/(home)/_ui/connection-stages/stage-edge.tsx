import type { ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'

interface Props {
  title: string
  subTitle: string
  icon: ReactNode
}

export const StageEdge = memo<Props>(({ title, subTitle, icon }) => {
  return (
    <Stack direction="row" columnGap={4} p={3} bgcolor="#fff" borderRadius={{ xs: 8, md: 20 }} alignItems="center">
      <Stack bgcolor="#9bd32e" borderRadius="50%" p={3.5} flexShrink={0} display={{ xs: 'none', md: 'flex' }}>
        {icon}
      </Stack>
      <Stack>
        <Typography fontSize={{ xs: 14, md: 28 }} fontWeight={700} textTransform="uppercase">
          {title}
        </Typography>
        <Typography fontSize={{ xs: 14, md: 20 }} fontWeight={500}>
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  )
})

StageEdge.displayName = 'StageEdge'
