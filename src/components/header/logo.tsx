import { ButtonBase } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'
import NextLink from '@/components/link'

export const Logo = memo(() => {
  return (
    <ButtonBase component={NextLink} href="/">
      <Image src="factory_director_log.svg" alt="logo" height={40} width={147} />
    </ButtonBase>
  )
})

Logo.displayName = 'Logo'
