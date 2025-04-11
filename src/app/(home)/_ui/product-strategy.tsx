import { memo } from 'react';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const ProductStrategy = memo(() => {
  return (
    <Container maxWidth='xl'>
      <Stack rowGap={4} mt={10}>
        <Typography fontSize={{ xs: 26, md: 40 }} fontWeight={700} textAlign='center' textTransform='uppercase'>
          СТРАТЕГИЯ РАЗВИТИЯ ПРОДУКТА
        </Typography>
        <Grid container spacing={2}>
          <Grid size={12} border='1px solid' p={2} display='flex' flexDirection='column' rowGap={2}>
            <Stack direction='row' columnGap={2} justifyContent='space-between'>
              <Typography fontSize={{ xs: 14, md: 28 }} fontWeight={700} textAlign='center' textTransform='uppercase'>
                Внедрение на производства
              </Typography>
              <Chip
                size='large'
                variant='square-fit'
                color='secondary'
                label={
                  <Typography fontSize={16} fontWeight={500}>
                    2025
                  </Typography>
                }
              />
            </Stack>
            <Box height={{ xs: 200, sm: 350, md: 480 }} position='relative'>
              <Image src='/home/master_dashboard.svg' alt='' fill />
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            border='1px solid'
            p={2}
            display='flex'
            flexDirection='column'
            rowGap={2}
            height='400px'
          >
            <Chip
              size='large'
              variant='square-fit'
              color='secondary'
              label={
                <Typography fontSize={16} fontWeight={500}>
                  2026
                </Typography>
              }
            />
            <Typography fontSize={22} fontWeight={700}>
              Предиктивная аналитика
            </Typography>
            <Typography fontSize={16}>
              Предсказательные модели помогают минимизировать риски, предотвращать сбои и повышать точность планирования
            </Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 3 }}
            border='1px solid'
            p={2}
            display='flex'
            flexDirection='column'
            rowGap={2}
            height='400px'
          >
            <Chip
              size='large'
              variant='square-fit'
              color='secondary'
              label={
                <Typography fontSize={16} fontWeight={500}>
                  2027
                </Typography>
              }
            />
            <Typography fontSize={22} fontWeight={700}>
              Искусственный интеллект
            </Typography>
            <Typography fontSize={16}>
              Повсеместное использование ИИ-агентов позволяет ускорять работу по созданию форм и отчётов
            </Typography>
          </Grid>
          <Grid
            position='relative'
            size={{ xs: 12, md: 6 }}
            border='1px solid'
            p={2}
            display='flex'
            flexDirection='column'
            rowGap={2}
            height='400px'
            bgcolor='#141414'
          >
            <Chip
              size='large'
              variant='square-fit'
              color='secondary'
              label={
                <Typography fontSize={16} fontWeight={500}>
                  2030
                </Typography>
              }
            />
            <Typography fontSize={28} fontWeight={700} color='secondary'>
              Индустрия 4.0
            </Typography>
            <Typography fontSize={16} fontWeight={500} color='secondary'>
              Factory Director использует передовые технологии, интегрируя автоматизацию и умные системы для повышения
              гибкости и скорости производства
            </Typography>
            <Image
              src='/home/polygon.svg'
              alt=''
              fill
              sizes='100vw'
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
});

ProductStrategy.displayName = 'ProductStrategy';
