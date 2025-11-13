import type { LinkProps } from '@/components/link'
import { Button } from '@mui/material'
import { memo } from 'react'
import NextLink from '@/components/link'

interface Props {
  onClick?: LinkProps['onClick']
}
export const PresentationButton = memo<Props>(({ onClick }) => {
  return (
    <Button
      component={NextLink}
      href="https://drive.google.com/file/d/17clEs1RU_IYiLI41jAbRMp9ZStTyjPKQ/view"
      target="_blank"
      onClick={onClick}
    >
      Скачать презентацию
    </Button>
  )
})

PresentationButton.displayName = 'PresentationButton'
