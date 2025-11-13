import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import { Box, Container, Typography } from '@mui/material'
import { memo } from 'react'
import { Stage } from '@/app/(home)/_ui/connection-stages/stage'
import { StageEdge } from '@/app/(home)/_ui/connection-stages/stage-edge'

export const ConnectionStages = memo(() => {
  return (
    <Box py={4} px={{ xs: 0, md: 4 }} bgcolor="#cde997">
      <Container maxWidth="md">
        <Typography variant="h2" textAlign="center" mb={4}>
          ЭТАПЫ ПОДКЛЮЧЕНИЯ
        </Typography>
        <StageEdge
          title="НАЧАЛО СОТРУДНИЧЕСТВА"
          subTitle="Заключен договор"
          icon={<RocketLaunchIcon sx={{ fontSize: '40px', fill: '#fff' }} />}
        />
        <Box>
          <Stage
            title="ПЕРВИЧНЫЙ СКОРИНГ"
            chipText="3 мес"
            items={[
              'Сбор данных для ТЗ',
              'Описание бизнес-процессов AS IS и TO BE',
              'Утверждение набора функциональных модулей',
            ]}
          />
          <Stage
            title="НАЧАЛО ИНТЕГРАЦИИ"
            chipText="3 мес"
            items={[
              'Подключение оборудования',
              'Разработка уникальных модулей (по запросу)',
              'Утверждение набора функциональных модулей',
            ]}
          />
          <Stage
            title="ЗАВЕРШЕНИЕ ИНТЕГРАЦИИ"
            chipText="3 мес"
            items={[
              'Проверка работы на производстве',
              'Разработка уникальных модулей (по запросу)',
              'Доработки',
            ]}
          />
        </Box>
        <StageEdge
          title="УСПЕШНОЕ ПОДКЛЮЧЕНИЕ"
          subTitle="Гарантийная поддержка · Под ключ"
          icon={<AutoFixHighIcon sx={{ fontSize: '40px', fill: '#fff' }} />}
        />
      </Container>
    </Box>
  )
})

ConnectionStages.displayName = 'ConnectionStages'
