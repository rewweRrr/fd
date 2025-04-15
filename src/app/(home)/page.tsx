import { Header } from '@/components/header/header';
import { Marquee } from '@/components/marquee';
import { ImagesBanner } from './_ui/images-banner';
import { MainBanner } from './_ui/main-banner';
import { StickyImages } from './_ui/sticky-images';
import { ProductStrategy } from './_ui/product-strategy';
import { FeedbackForm } from './_ui/feedback-form';
import { Stack } from '@mui/material';
import { ProductionTypes } from './_ui/production-types';
import { DemoBanner } from './_ui/demo-banner';
import { ConnectionStages } from '@/app/(home)/_ui/connection-stages/connection-stages';
import { WorkSimplification } from '@/app/(home)/_ui/work-simplification/work-simplification';

const MARQUEE_LIST = ['ИНДУСТРИЯ 4.0', 'ПРЕДИКТИВНАЯ АНАЛИТИКА', 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ'];

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
        <FeedbackForm />
      </Stack>
    </>
  );
}
