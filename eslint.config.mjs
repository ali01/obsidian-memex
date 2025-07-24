import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // TypeScript rules focused on correctness, not style
      '@typescript-eslint/no-explicit-any': 'warn', // Allow any but warn about it
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-floating-promises': 'error', // Important for async correctness
      '@typescript-eslint/no-misused-promises': 'error', // Important for async correctness
      '@typescript-eslint/await-thenable': 'error', // Prevent await on non-promises
      '@typescript-eslint/no-shadow': 'warn', // Warn about variable shadowing
      
      // Disabled strict rules that are more about style/preference
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/prefer-readonly': 'off',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/return-await': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/consistent-type-exports': 'off',
      '@typescript-eslint/naming-convention': 'off', // No naming enforcement

      // General JavaScript rules for correctness
      'no-console': 'off', // Allow console statements
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'warn',
      'no-caller': 'error',
      'no-labels': 'error',
      'no-iterator': 'error',
      'no-proto': 'error',
      'no-script-url': 'error',
      'no-throw-literal': 'error',
      'no-void': 'off',
      'no-with': 'error',
      'radix': 'warn',
      'require-atomic-updates': 'error',
      'no-promise-executor-return': 'error',
      'no-unreachable-loop': 'error',
      
      // Removed complexity rules - let developers organize code as needed
      'no-nested-ternary': 'off',
      'no-unneeded-ternary': 'warn',
      'complexity': 'off',
      'max-depth': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-params': 'off',
      'max-statements': 'off',

      // Code style - make prettier a warning
      'max-len': 'off', // Let prettier handle line length
      'prettier/prettier': ['warn', {
        'printWidth': 100,
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'none',
        'arrowParens': 'always',
        'endOfLine': 'lf'
      }]
    },
  },
  {
    ignores: [
      'node_modules/',
      'main.js',
      '**/*.test.ts',
      'jest.config.js',
      'esbuild.config.mjs',
      'src/__mocks__/**',
      '.eslintrc.json'
    ]
  }
);