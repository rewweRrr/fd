import { Container, Stack, Typography } from '@mui/material'
import { memo } from 'react'
import { DemoButton } from '@/components/demo-button'

export const MainBanner = memo(() => {
  return (
    <Container maxWidth="xl">
      <Stack alignItems="center" justifyContent="center" rowGap={5}>
        <Typography variant="h1" fontSize={{ xs: 26, md: 42 }} textAlign="center">
          Цифровое решение
          {' '}
          <br />
          {' '}
          для автоматизации
          {' '}
          <br />
          {' '}
          производства
        </Typography>
        <DemoButton size="large" sx={{ width: '280px' }} />
      </Stack>
    </Container>
  )
})

MainBanner.displayName = 'MainBanner'
