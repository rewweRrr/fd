import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import NextLink, { LinkProps } from 'next/link';

type Props = {
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
  onClick?: LinkProps['onClick'];
};

export const DemoButton = memo<Props>(({ size, variant = 'contained', onClick }) => {
  return (
    <Button variant={variant} size={size} component={NextLink} href='/#feedback-form' onClick={onClick}>
      Заказать Демо
    </Button>
  );
});

DemoButton.displayName = 'DemoButton';
