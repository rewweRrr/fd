import antfu from '@antfu/eslint-config'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'
import { globalIgnores } from 'eslint/config'

const eslintConfig = antfu([
  ...nextCoreWebVitals,
  ...nextTypescript,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
])

export default eslintConfig
