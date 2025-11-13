import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TabBox } from '@/app/(home)/_ui/work-simplification/tab-box'

interface Props {
  id: string
}

export const MasterTab = memo<Props>(({ id }) => {
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
            <TabBox
              height={226}
              title="ОТСЛЕЖИВАНИЕ И КОНТРОЛЬ ВЫПОЛНЕНИЯ ЗАКАЗОВ"
              gridColumn="1 / 3"
              gridRow="1 / 3"
              bgcolor="#cde997"
            >
              <Image
                src="/home/master-tab/orders-control.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 0 16px 16px' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Мониторинг предприятия" bgcolor="#f2f2f2">
              <Image
                src="/home/master-tab/monitoring.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '16px 0 0' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="Контроль персонала" bgcolor="#f2f2f2">
              <Image
                src="/home/master-tab/staff-control.svg"
                alt=""
                fill
                style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 16px 16px' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox
              height={226}
              title="Планировщик заказов"
              textSx={{ color: 'primary.contrastText' }}
              bgImageSrc="/home/master-tab/bg-orders-plan.webp"
            >
              <Image
                src="/home/master-tab/in-work.svg"
                alt=""
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'bottom 16px right 16px' }}
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
      <TabBox title="ОТСЛЕЖИВАНИЕ И КОНТРОЛЬ ВЫПОЛНЕНИЯ ЗАКАЗОВ" gridColumn="1 / 3" gridRow="1 / 3" bgcolor="#cde997">
        <Image
          src="/home/master-tab/orders-control.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 0 16px 16px' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Мониторинг предприятия" gridRow="1 / 3" bgcolor="#f2f2f2">
        <Image
          src="/home/master-tab/monitoring.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="Контроль персонала" bgcolor="#f2f2f2">
        <Image
          src="/home/master-tab/staff-control.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 16px 16px' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox
        title="Планировщик заказов"
        gridColumn="2 / 4"
        textSx={{ color: 'primary.contrastText' }}
        bgImageSrc="/home/master-tab/bg-orders-plan.webp"
      >
        <Image
          src="/home/master-tab/in-work.svg"
          alt=""
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom 16px right 16px' }}
          sizes="100vw"
        />
      </TabBox>
    </Box>
  )
})

MasterTab.displayName = 'MasterTab'
