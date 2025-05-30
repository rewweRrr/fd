import { Header } from '@/components/header/header';
import { SubHeader } from '@/components/sub-header';
import { ContactCard } from './_ui/contact-card';
import { Container, Stack } from '@mui/material';

export default function Contacts() {
  return (
    <>
      <Header />
      <Stack mt={11} rowGap={{ xs: 4, md: 10 }} pb={{ xs: 4, md: 8 }}>
        <SubHeader title='Свяжитесь с нами' maxWidth='xl' />
        <Container maxWidth='xl'>
          <Stack rowGap={4}>
            <ContactCard
              imageSrc='/contacts/boris_photo.webp'
              title='Борис Поляк'
              subTitle='Тимлид разработки'
              phone='+7 (916) 088-77-34'
              telegram='BHtrue'
            />
            <ContactCard
              imageSrc='/contacts/alexey_photo.webp'
              title='Алексей Зенькович'
              subTitle='Директор по развитию'
              phone='+7 (916) 698-27-77'
              telegram='alekseizenkovich'
            />
          </Stack>
        </Container>
      </Stack>
    </>
  );
}
