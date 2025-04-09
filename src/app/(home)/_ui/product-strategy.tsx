import { memo } from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export const ProductStrategy = memo(() => {
  return (
    <Container maxWidth='xl'>
      <Stack rowGap={4} mt={10}>
        <Typography fontSize={40} fontWeight={700} textAlign='center' textTransform='uppercase'>
          СТРАТЕГИЯ РАЗВИТИЯ ПРОДУКТА
        </Typography>
        <Grid container spacing={2}>
          <Grid size={12} border='1px solid' p={2} display='flex' flexDirection='column' rowGap={2}>
            <Stack direction='row' columnGap={2} justifyContent='space-between'>
              <Typography fontSize={28} fontWeight={700} textAlign='center' textTransform='uppercase'>
                Внедрение на производства
              </Typography>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                borderRadius={2}
                bgcolor='#f3f3f3'
                px={2}
                py={1}
              >
                <Typography fontSize={16} fontWeight={500}>
                  2025
                </Typography>
              </Box>
            </Stack>
            <Box height={480} position='relative'>
              <Image src='/home/master_dashboard.svg' alt='' fill />
            </Box>
          </Grid>
          <Grid size={3} border='1px solid' p={2} display='flex' flexDirection='column' rowGap={2} height='400px'>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius={2}
              bgcolor='#f3f3f3'
              px={2}
              py={1}
              width='fit-content'
            >
              <Typography fontSize={16} fontWeight={500}>
                2026
              </Typography>
            </Box>
            <Typography fontSize={22} fontWeight={700}>
              Предиктивная аналитика
            </Typography>
            <Typography fontSize={16}>
              Предсказательные модели помогают минимизировать риски, предотвращать сбои и повышать точность планирования
            </Typography>
          </Grid>
          <Grid size={3} border='1px solid' p={2} display='flex' flexDirection='column' rowGap={2} height='400px'>
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius={2}
              bgcolor='#f3f3f3'
              px={2}
              py={1}
              width='fit-content'
            >
              <Typography fontSize={16} fontWeight={500}>
                2027
              </Typography>
            </Box>
            <Typography fontSize={22} fontWeight={700}>
              Искусственный интеллект
            </Typography>
            <Typography fontSize={16}>
              Повсеместное использование ИИ-агентов позволяет ускорять работу по созданию форм и отчётов
            </Typography>
          </Grid>
          <Grid
            position='relative'
            size={6}
            border='1px solid'
            p={2}
            display='flex'
            flexDirection='column'
            rowGap={2}
            height='400px'
            bgcolor='#141414'
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              borderRadius={2}
              bgcolor='#f3f3f3'
              px={2}
              py={1}
              width='fit-content'
            >
              <Typography fontSize={16} fontWeight={500}>
                2030
              </Typography>
            </Box>
            <Typography fontSize={28} fontWeight={700} color='#fff'>
              Индустрия 4.0
            </Typography>
            <Typography fontSize={16} fontWeight={500} color='#fff'>
              Factory Director использует передовые технологии, интегрируя автоматизацию и умные системы для повышения
              гибкости и скорости производства
            </Typography>
            <Image
              src='/home/polygon.svg'
              alt=''
              fill
              sizes='100vh'
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
});

ProductStrategy.displayName = 'ProductStrategy';
