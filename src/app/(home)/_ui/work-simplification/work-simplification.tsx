'use client'
import { Button, Container, Stack, Typography } from '@mui/material'
import { memo, useEffect, useMemo, useState } from 'react'
import { AdjusterTab } from '@/app/(home)/_ui/work-simplification/adjuster-tab'
import { ControllerTab } from '@/app/(home)/_ui/work-simplification/controller-tab'
import { DirectorTab } from '@/app/(home)/_ui/work-simplification/director-tab'
import { MasterTab } from '@/app/(home)/_ui/work-simplification/master-tab'
import { OperatorTab } from '@/app/(home)/_ui/work-simplification/operator-tab'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './work-simplification-swiper.css'

export const WorkSimplification = memo(() => {
  const tabs = useMemo(
    () => [
      {
        id: 'director-tab',
        label: 'Руководству',
        content: <DirectorTab id="director-tab" />,
      },
      {
        id: 'operator-tab',
        label: 'Оператору',
        content: <OperatorTab id="operator-tab" />,
      },
      {
        id: 'adjuster-tab',
        label: 'Наладчику',
        content: <AdjusterTab id="adjuster-tab" />,
      },
      {
        id: 'master-tab',
        label: 'Мастеру',
        content: <MasterTab id="master-tab" />,
      },
      {
        id: 'controller-tab',
        label: 'Контролеру',
        content: <ControllerTab id="controller-tab" />,
      },
    ],
    [],
  )

  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '')

  const activeTabContent = useMemo(() => tabs.find(tab => tab.id === activeTab)?.content, [activeTab, tabs])

  useEffect(() => {
    const handleHashChange = () => {
      const hash
        = typeof window !== 'undefined' ? decodeURIComponent(window.location.hash.replace('#', '')) : undefined
      if (hash && tabs.some(tab => tab.id === hash)) {
        setActiveTab(hash)
      }
    }
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [tabs])

  return (
    <Container maxWidth="xl">
      <Typography variant="h2" textAlign="center" mb={4}>
        ЭТАПЫ ПОДКЛЮЧЕНИЯ
      </Typography>

      <Stack rowGap={4} alignItems="center">
        <Stack direction="row" gap={2} flexWrap="wrap">
          {tabs.map(tab => (
            <Button
              key={tab.id}
              variant={tab.id === activeTab ? 'contained' : 'outlined'}
              href={`#${tab.id}`}
              size="large"
            >
              {tab.label}
            </Button>
          ))}
        </Stack>
        {activeTabContent}
      </Stack>
    </Container>
  )
})

WorkSimplification.displayName = 'WorkSimplification'
