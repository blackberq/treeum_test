module.exports = {
  root: true,
  extends: ['expo', 'prettier'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/array-type': 'off',
    'no-unused-expressions': 'off',
    'react/display-name': 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['expo-env.d.ts'],
  // overrides: [
  //   {
  //     // Test files only
  //     files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', 'jest-setup.ts'],
  //     extends: ['plugin:testing-library/react'],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
};
