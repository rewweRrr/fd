import { Stack } from '@mui/material'
import { ConnectionStages } from '@/app/(home)/_ui/connection-stages/connection-stages'
import { InnoFundBanner } from '@/app/(home)/_ui/inno-fund-banner'
import { WorkSimplification } from '@/app/(home)/_ui/work-simplification/work-simplification'
import { Header } from '@/components/header/header'
import { Marquee } from '@/components/marquee'
import { DemoBanner } from './_ui/demo-banner'
import { ImagesBanner } from './_ui/images-banner'
import { MainBanner } from './_ui/main-banner'
import { ProductStrategy } from './_ui/product-strategy'
import { ProductionTypes } from './_ui/production-types'
import { StickyImages } from './_ui/sticky-images'

const MARQUEE_LIST = ['ИНДУСТРИЯ 4.0', 'ПРЕДИКТИВНАЯ АНАЛИТИКА', 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ']

export default function Home() {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_LIST} repeatCount={4} />
      <Stack mt={11} rowGap={{ xs: 4, md: 10 }}>
        <MainBanner />
        <ImagesBanner />
        <StickyImages />
        <ProductStrategy />
        <WorkSimplification />
        <DemoBanner />
      </Stack>
      <ConnectionStages />
      <Stack mt={{ xs: 4, md: 10 }} rowGap={{ xs: 4, md: 10 }} pb={{ xs: 4, md: 8 }}>
        <ProductionTypes />
        {/* <FeedbackForm /> */}
        <InnoFundBanner />
      </Stack>
    </>
  )
}
