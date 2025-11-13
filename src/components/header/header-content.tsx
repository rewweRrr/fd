'use client'
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material'
import { memo } from 'react'
import { DemoButton } from '../demo-button'
import { HeaderMenu } from './header-menu'
import { Navigation } from './navigation'
import { PresentationButton } from './presentation-button'

export const HeaderContent = memo(() => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  if (mobile)
    return <HeaderMenu></HeaderMenu>
  return (
    <>
      <Box>
        <Navigation />
      </Box>
      <Stack direction="row" columnGap={1} flexShrink={0}>
        <PresentationButton />
        <DemoButton />
      </Stack>
    </>
  )
})

HeaderContent.displayName = 'HeaderContent'
