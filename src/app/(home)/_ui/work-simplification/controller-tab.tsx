import { Box, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TabBox } from '@/app/(home)/_ui/work-simplification/tab-box'

interface Props {
  id: string
}

export const ControllerTab = memo<Props>(({ id }) => {
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
            <TabBox height={226} title="УДОБНЫЕ ФОРМЫ КОНТРОЛЯ" bgcolor="#cde997">
              <Image
                src="/home/controller-tab/forms.svg"
                alt=""
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top', padding: '60px 40px 0' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox height={226} title="КОНСТРУКТОР ФОРМ" bgcolor="#f2f2f2">
              <Image
                src="/home/controller-tab/form-constructor.webp"
                alt=""
                fill
                style={{ objectFit: 'cover', objectPosition: 'left top', padding: '10px 0 0' }}
                sizes="100vw"
              />
            </TabBox>
          </SwiperSlide>
          <SwiperSlide>
            <TabBox
              height={226}
              title="ИНТЕГРАЦИЯ ПРОГРАММ ПО КОНТРОЛЮ КАЧЕСТВА"
              bgcolor="#000"
              textSx={{ color: 'primary.contrastText' }}
            >
              <Image
                src="/home/controller-tab/quality-control.svg"
                alt=""
                fill
                style={{ objectFit: 'scale-down', objectPosition: 'bottom 40px right 40px' }}
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
      gridTemplateColumns={{ md: '1fr 1fr' }}
      gridTemplateRows={{ md: '339px 339px' }}
      gap={2}
      width="100%"
    >
      <TabBox gridColumn="1 / 2" gridRow="1 / 4" title="УДОБНЫЕ ФОРМЫ КОНТРОЛЯ" bgcolor="#cde997">
        <Image
          src="/home/controller-tab/forms.svg"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '60px 40px 0' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox title="КОНСТРУКТОР ФОРМ" bgcolor="#f2f2f2">
        <Image
          src="/home/controller-tab/form-constructor.webp"
          alt=""
          fill
          style={{ objectFit: 'contain', objectPosition: 'bottom', padding: '0 40px 40px' }}
          sizes="100vw"
        />
      </TabBox>
      <TabBox
        gridRow="2 / 4"
        title="ИНТЕГРАЦИЯ ПРОГРАММ ПО КОНТРОЛЮ КАЧЕСТВА"
        bgcolor="#000"
        textSx={{ color: 'primary.contrastText' }}
      >
        <Image
          src="/home/controller-tab/quality-control.svg"
          alt=""
          fill
          style={{ objectFit: 'scale-down', objectPosition: 'bottom 40px right 40px' }}
          sizes="100vw"
        />
      </TabBox>
    </Box>
  )
})

ControllerTab.displayName = 'ControllerTab'
