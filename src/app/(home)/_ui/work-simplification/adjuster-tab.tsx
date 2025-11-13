import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TabBox } from '@/app/(home)/_ui/work-simplification/tab-box'

interface Props {
  id: string
}

export const AdjusterTab = memo<Props>(({ id }) => {
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
            <TabBox height={226} title="Автоматическое планирование ТО" bgcolor="#f2f2f2">
              <Image
                src="/home/adjuster-tab/to-notification.webp"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Мониторинг в реальном времени" bgcolor="#cde997">
              <Image
                src="/home/adjuster-tab/fabric-monitoring.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox
              height={226}
              title="История линий"
              textSx={{ color: 'primary.contrastText' }}
              bgImageSrc="/home/adjuster-tab/bg-history.webp"
            >
              <Image
                src="/home/adjuster-tab/line-history.svg"
                alt=""
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Журнал ТО" bgcolor="#f2f2f2">
              <Image
                src="/home/adjuster-tab/to-journal.webp"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Уведомление о неполадках" bgcolor="#f2f2f2">
              <Image
                src="/home/adjuster-tab/warning-notification.webp"
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
              title="Автоопределение Узла неисправности"
              bgcolor="#000"
              textSx={{ color: 'primary.contrastText' }}
            >
              <Image
                src="/home/adjuster-tab/detected-problem.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
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
      <TabBox title="Автоматическое планирование ТО" bgcolor="#f2f2f2">
        <Image
          src="/home/adjuster-tab/to-notification.webp"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox gridColumn="2 / 4" gridRow="1 / 3" title="Мониторинг в реальном времени" bgcolor="#cde997">
        <Image
          src="/home/adjuster-tab/fabric-monitoring.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 16px 0 ' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox
        title="История линий"
        textSx={{ color: 'primary.contrastText' }}
        bgImageSrc="/home/adjuster-tab/bg-history.webp"
      >
        <Image
          src="/home/adjuster-tab/line-history.svg"
          alt=""
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom right' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Журнал ТО" bgcolor="#f2f2f2">
        <Image
          src="/home/adjuster-tab/to-journal.webp"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Уведомление о неполадках" bgcolor="#f2f2f2">
        <Image
          src="/home/adjuster-tab/warning-notification.webp"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Автоопределение Узла неисправности" bgcolor="#000" textSx={{ color: 'primary.contrastText' }}>
        <Image
          src="/home/adjuster-tab/detected-problem.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
    </Box>
  )
})

AdjusterTab.displayName = 'AdjusterTab'
