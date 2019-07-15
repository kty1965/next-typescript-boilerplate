module.exports = {
  extends:  [
    'standard',
    'airbnb',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions:  {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true,
  },
  plugins: [
    'react',
    'node',
    'promise',
    'import',
    'standard',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
};