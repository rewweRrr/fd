import { memo } from 'react';
import { Button, ButtonProps } from '@mui/material';
import NextLink from 'next/link';

type Props = {
  size?: ButtonProps['size'];
};

export const DemoButton = memo<Props>(({ size }) => {
  return (
    <Button variant='contained' size={size} component={NextLink} href='#feedback-form'>
      Заказать Демо
    </Button>
  );
});

DemoButton.displayName = 'DemoButton';
