import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'

export const InnoFundBanner = memo(() => {
  return (
    <Container maxWidth="lg">
      <Stack flexDirection={{ md: 'row' }} gap={5} alignItems="center">
        <Image src="/home/inno_fund.webp" alt="" width={268} height={138} />
        <Typography fontSize={18} textAlign={{ xs: 'center', md: 'left' }}>
          «Проект создан при поддержке Федерального государственного бюджетного учреждения &#34;Фонд содействия развитию
          малых форм предприятий в научно-технической сфере&#34; в рамках программы &#34;Студенческий стартап&#34;
          федерального проекта &#34;Платформа университетского технологического предпринимательства&#34;»
        </Typography>
      </Stack>
    </Container>
  )
})

InnoFundBanner.displayName = 'InnoFundBanner'
