import { memo } from 'react';
import { Button } from '@mui/material';
import NextLink, { LinkProps } from 'next/link';

interface Props {
  onClick?: LinkProps['onClick'];
}
export const PresentationButton = memo<Props>(({ onClick }) => {
  return (
    <Button
      component={NextLink}
      href='https://drive.google.com/file/d/17clEs1RU_IYiLI41jAbRMp9ZStTyjPKQ/view'
      target='_blank'
      onClick={onClick}
    >
      Скачать презентацию
    </Button>
  );
});

PresentationButton.displayName = 'PresentationButton';
