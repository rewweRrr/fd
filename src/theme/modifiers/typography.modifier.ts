import { Components, Theme } from '@mui/material';

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: 'h1' },
          style: ({ theme }) => ({
            fontSize: theme.breakpoints.up('md') ? 50 : 26,
            fontWeight: theme.typography.fontWeightBold,
            textTransform: 'uppercase'
          })
        },
        {
          props: { variant: 'h2' },
          style: ({ theme }) => ({
            fontSize: theme.breakpoints.up('md') ? 40 : 26,
            fontWeight: theme.typography.fontWeightBold,
            textTransform: 'uppercase'
          })
        }
      ]
    }
  }
};
