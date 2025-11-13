'use client'
import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { DemoButton } from '@/components/demo-button'

export const DemoBanner = memo(() => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Box p={4} bgcolor={theme => theme.palette.common.black}>
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        {!mobile && (
          <Image
            src="/home/seo.webp"
            alt=""
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom right' }}
            sizes="100vw"
          />
        )}
        <Stack
          direction="row"
          columnGap={4}
          justifyContent="space-between"
          alignItems="center"
          height={{ xs: 414, md: 580 }}
          width="100%"
          position="relative"
        >
          <Stack rowGap={8}>
            <Stack rowGap={2}>
              <Typography variant="h2" sx={{ color: 'primary.contrastText' }}>
                ЗАПИШИТЕСЬ
                {' '}
                <br />
                НА ДЕМО
              </Typography>
              <Typography fontSize={18} fontWeight={500} sx={{ color: 'primary.contrastText' }}>
                Расскажем про продукт и обсудим
                {' '}
                <br />
                возможности внедрения Factory Director
                {' '}
                <br />
                на ваше предприятие
              </Typography>
            </Stack>
            <DemoButton
              size="large"
              sx={{ backgroundColor: 'primary.contrastText', color: 'primary.main', width: '280px' }}
            />
          </Stack>
          {!mobile && (
            <Typography fontSize={20} fontWeight={500} sx={{ color: 'primary.contrastText' }} alignSelf="end" p={4}>
              Борис Поляк
              <br />
              Тимлид разработки
              <br />
              Factory Director, ИФТТ РАН
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  )
})

DemoBanner.displayName = 'DemoBanner'
