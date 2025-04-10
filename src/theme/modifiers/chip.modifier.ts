import { Components, Theme } from '@mui/material';

export const MuiChip: Components<Theme>['MuiChip'] = {
  variants: [
    {
      props: { size: 'large' },
      style: ({ theme }) => ({
        height: 40,
        padding: `0 ${theme.spacing(1)}`
      })
    },
    {
      props: { variant: 'square-fit' },
      style: ({ theme }) => ({
        width: 'fit-content',
        borderRadius: 2 * theme.shape.borderRadius
      })
    }
  ]
};
