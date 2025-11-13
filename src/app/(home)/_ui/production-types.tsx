import { Box, Chip, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'

export const ProductionTypes = memo(() => {
  return (
    <Container maxWidth="xl">
      <Stack rowGap={4}>
        <Typography variant="h2" textAlign="center">
          ДЛЯ ВСЕХ ВИДОВ ПРОИЗВОДСТВ
        </Typography>
        <Stack gap={2} direction={{ sx: 'column', md: 'row' }} alignItems="center" justifyContent="center">
          <Stack
            rowGap={2}
            p={2}
            bgcolor="#9bd32e"
            height={{ xs: 350, md: 504 }}
            width="100%"
            maxWidth={594}
            position="relative"
          >
            <Typography fontSize={{ xs: 14, md: 28 }} fontWeight={700} textTransform="uppercase">
              ДИСКРЕТНЫЕ
            </Typography>
            <Stack direction="row" gap={1} flexWrap="wrap">
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Чайные
                  </Typography>
                )}
              />
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Молочные
                  </Typography>
                )}
              />
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Любые фасовочные
                  </Typography>
                )}
              />
            </Stack>
            <Box position="absolute" left="16px" right={0} top={0} bottom={0} width="calc(100% - 16px)">
              <Image
                src="/home/discrete.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom 16px left 0' }}
                sizes="100vw"
              />
            </Box>
          </Stack>
          <Stack
            rowGap={2}
            p={2}
            bgcolor="#9bd32e"
            height={{ xs: 350, md: 504 }}
            width="100%"
            maxWidth={594}
            position="relative"
          >
            <Typography fontSize={{ xs: 14, md: 28 }} fontWeight={700} textTransform="uppercase">
              НЕПРЕРЫВНЫЕ
            </Typography>
            <Stack direction="row" gap={1} flexWrap="wrap">
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Кабельные
                  </Typography>
                )}
              />
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Угольные
                  </Typography>
                )}
              />
              <Chip
                size="large"
                variant="square-fit"
                color="secondary"
                label={(
                  <Typography fontSize={16} fontWeight={500}>
                    Нефтяные
                  </Typography>
                )}
              />
            </Stack>
            <Image
              src="/home/continuous.svg"
              alt=""
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom 16px left 0' }}
              sizes="100vw"
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
})

ProductionTypes.displayName = 'ProductionTypes'
