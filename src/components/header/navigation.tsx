'use client'
import { Button, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import { memo } from 'react'
import NextLink from '@/components/link'

export const Navigation = memo(() => {
  const pathname = usePathname()
  return (
    <>
      <Button size="small" component={NextLink} href="/">
        <Typography fontWeight={pathname === '/' ? 600 : undefined}>Главная</Typography>
      </Button>
      <Button size="small" component={NextLink} href="/hardware">
        <Typography fontWeight={pathname === '/hardware' ? 600 : undefined}>Аппаратный комплекс</Typography>
      </Button>
      <Button size="small" component={NextLink} href="/contacts">
        <Typography fontWeight={pathname === '/contacts' ? 600 : undefined}>Контакты</Typography>
      </Button>
    </>
  )
})

Navigation.displayName = 'Navigation'
