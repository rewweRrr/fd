import { Header } from '@/components/header/header';
import { Marquee } from '@/components/marquee';
import { ImagesBanner } from '@/app/(home)/_ui/images-banner';
import { MainBanner } from '@/app/(home)/_ui/main-banner';
import { StickyImages } from '@/app/(home)/_ui/sticky-images';
import { ProductStrategy } from '@/app/(home)/_ui/product-strategy';
import { FeedbackForm } from '@/app/(home)/_ui/feedback-form';
import { Stack } from '@mui/material';
import { ProductionTypes } from '@/app/(home)/_ui/production-types';

const MARQUEE_LIST = ['ИНДУСТРИЯ 4.0', 'ПРЕДИКТИВНАЯ АНАЛИТИКА', 'ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ'];

export default function Home() {
  return (
    <>
      <Header />
      <Marquee items={MARQUEE_LIST} repeatCount={4} />
      <Stack mt={11} rowGap={{ xs: 4, md: 10 }} pb={{ xs: 4, md: 8 }}>
        <MainBanner />
        <ImagesBanner />
        <StickyImages />
        <ProductStrategy />
        <ProductionTypes />
        <FeedbackForm />
      </Stack>
    </>
  );
}
