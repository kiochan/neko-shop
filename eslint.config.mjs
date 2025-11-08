import path from 'node:path'
import gitignore from 'eslint-config-flat-gitignore'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import prettierConfig from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import { fixupPluginRules } from '@eslint/compat'

export default [
  // Apply ignore patterns from .gitignore
  gitignore(),

  // Treat .js and .mjs files as plain JavaScript
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-undef': 'off',
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  prettierConfig,

  // TypeScript source files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve('./tsconfig.json'),
        tsconfigRootDir: path.resolve('.'),
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        'eslint-import-resolver-typescript': {
          alwaysTryTypes: true,
          project: [path.resolve('./tsconfig.json')],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: [path.resolve('./src')],
        },
        alias: {
          map: [['@', path.resolve('./src')]],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
      react: { version: 'detect' },
    },
    plugins: {
      '@next/next': fixupPluginRules(nextPlugin),
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      'import/no-unresolved': [
        'error',
        { commonjs: true, caseSensitive: true, ignore: ['server-only'] },
      ],
    },
  },

  // Disable resolution checks for config files
  {
    files: ['eslint.config.*'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  {
    files: ['ecosystem.config.js'],
    languageOptions: {
      sourceType: 'script', // CommonJS
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
  },
]
