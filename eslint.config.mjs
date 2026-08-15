// eslint-config-next 16 ships native flat configs, so these are spread
// directly. Do not route them through FlatCompat — it throws on the
// self-referencing `plugins.react` object in the modern config.
import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'next-env.d.ts',
      'tsconfig.tsbuildinfo',
      'convert-logo.js',
    ],
  },
  ...coreWebVitals,
  ...typescript,
]

export default eslintConfig
