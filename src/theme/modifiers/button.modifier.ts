import { Components, Theme } from '@mui/material';

export const MuiButton: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      variants: [
        {
          props: { variant: 'contained' },
          style: { borderRadius: 0 }
        }
      ]
    }
  }
};
