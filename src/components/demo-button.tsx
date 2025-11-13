import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import NextLink, { LinkProps } from '@/components/link';

type Props = {
  size?: ButtonProps['size'];
  variant?: ButtonProps['variant'];
  sx?: ButtonProps['sx'];
  onClick?: LinkProps['onClick'];
};

export const DemoButton = memo<Props>(({ variant = 'contained', ...rest }) => {
  return (
    <Button variant={variant} component={NextLink} href='/contacts' {...rest}>
      Заказать Демо
    </Button>
  );
});

DemoButton.displayName = 'DemoButton';
