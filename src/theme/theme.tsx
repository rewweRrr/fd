'use client';
import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import { MuiButton } from '@/theme/modifiers/button.modifier';
import { MuiChip } from '@/theme/modifiers/chip.modifier';

export const theme = createTheme(
  {
    cssVariables: {
      colorSchemeSelector: 'class'
    },
    typography: {
      fontFamily: 'var(--font-fd)'
    },
    colorSchemes: { light: true },
    palette: {
      primary: {
        main: '#141414',
        light: '#f3f3f3'
      },
      secondary: {
        main: '#f3f3f3'
      }
    },
    components: {
      MuiButton,
      MuiChip
    }
  },
  ruRU
);
