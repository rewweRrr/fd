'use client'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TabBox } from '@/app/(home)/_ui/work-simplification/tab-box'

interface Props {
  id: string
}

export const OperatorTab = memo<Props>(({ id }) => {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  if (mobile) {
    return (
      <Box id={id} width="100%">
        <Swiper
          className="fd-swiper-navigation"
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, horizontalClass: 'fd-swiper-bullets' }}
        >
          <SwiperSlide>
            <TabBox height={226} title="Автоматизированное рабочее место" bgcolor="#cde997">
              <Image
                src="/home/operator-tab/dashboard-operator.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Разметка простоев" bgcolor="#f2f2f2">
              <Image
                src="/home/operator-tab/downtime_reasons.webp"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0' }}
                sizes="100vw"
              />
              {' '}
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Инструкции" bgcolor="#000" textSx={{ color: 'primary.contrastText' }}>
              <Image
                src="/home/operator-tab/instruction.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Контроль качества" bgcolor="#f2f2f2">
              <Image
                src="/home/operator-tab/quality_control.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox
              height={226}
              title="Контроль технологических параметров"
              gridColumn="2 / 4"
              bgImageSrc="/home/operator-tab/bg-tech-control.webp"
              textSx={{ color: 'primary.contrastText' }}
            >
              <Image
                src="/home/operator-tab/L01.svg"
                alt=""
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'calc(50% + 110px) calc(50% + 50px)' }}
                sizes="100vw"
              />
              <Image
                src="/home/operator-tab/L02.svg"
                alt=""
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'calc(50% - 65px) calc(50% - 10px)' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
        </Swiper>
      </Box>
    )
  }

  return (
    <Box
      id={id}
      display="grid"
      gridTemplateColumns={{ md: '1fr 1fr 1fr' }}
      gridTemplateRows={{ md: '226px 226px 226px' }}
      gap={2}
      width="100%"
    >
      <TabBox gridColumn="1 / 3" gridRow="1 / 3" title="Автоматизированное рабочее место" bgcolor="#cde997">
        <Image
          src="/home/operator-tab/dashboard-operator.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Разметка простоев" bgcolor="#f2f2f2">
        <Image
          src="/home/operator-tab/downtime_reasons.webp"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Инструкции" bgcolor="#000" textSx={{ color: 'primary.contrastText' }}>
        <Image
          src="/home/operator-tab/instruction.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Контроль качества" bgcolor="#f2f2f2">
        <Image
          src="/home/operator-tab/quality_control.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox
        title="Контроль технологических параметров"
        gridColumn="2 / 4"
        bgImageSrc="/home/operator-tab/bg-tech-control.webp"
        textSx={{ color: 'primary.contrastText' }}
      >
        <Image
          src="/home/operator-tab/L01.svg"
          alt=""
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'calc(50% + 110px) calc(50% + 50px)' }}
          sizes="100vw"
        />
        <Image
          src="/home/operator-tab/L02.svg"
          alt=""
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'calc(50% - 65px) calc(50% - 10px)' }}
          sizes="100vw"
        />
      </TabBox>
    </Box>
  )
})

OperatorTab.displayName = 'OperatorTab'
