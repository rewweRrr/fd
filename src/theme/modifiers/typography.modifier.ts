import type { Components, Theme } from '@mui/material'

export const MuiTypography: Components<Theme>['MuiTypography'] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: { variant: 'h1' },
          style: ({ theme }) => ({
            fontWeight: theme.typography.fontWeightBold,
            textTransform: 'uppercase',
            fontSize: 50,
            [theme.breakpoints.down('md')]: {
              fontSize: 26,
            },
          }),
        },
        {
          props: { variant: 'h2' },
          style: ({ theme }) => ({
            fontSize: 40,
            fontWeight: theme.typography.fontWeightBold,
            textTransform: 'uppercase',
            [theme.breakpoints.down('md')]: {
              fontSize: 26,
            },
          }),
        },
      ],
    },
  },
}
