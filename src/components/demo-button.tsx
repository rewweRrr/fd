import type { ButtonProps } from '@mui/material'
import type { LinkProps } from '@/components/link'
import { Button } from '@mui/material'
import { memo } from 'react'
import NextLink from '@/components/link'

interface Props {
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
  sx?: ButtonProps['sx']
  onClick?: LinkProps['onClick']
}

export const DemoButton = memo<Props>(({ variant = 'contained', ...rest }) => {
  return (
    <Button variant={variant} component={NextLink} href="/contacts" {...rest}>
      Заказать Демо
    </Button>
  )
})

DemoButton.displayName = 'DemoButton'
