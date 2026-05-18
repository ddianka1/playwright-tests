// @ts-check

import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
{
     languageOptions: {
      parserOptions: {
        projectService: {
            allowDefaultProject: [
            "eslint.config.mjs",
            "playwright.config.ts",
            "tests/*.ts",
            "tests/mocking/*.ts",
            "pages/*.ts",
            "utils/*.ts",
            "fixtures/*.ts",
            "helpers/*.ts",
          

          ],
        },
      },
    },
   },
  {
    rules: {
        "@typescript-eslint/no-explicit-any": 'error',
        "@typescript-eslint/no-floating-promises": "error",
        '@typescript-eslint/no-unsafe-member-access': 'off'
    }
  },
  {
    files: ['tests/**'],
    extends: [playwright.configs['flat/recommended']],
    rules: {
      // Customize Playwright rules
      // ...
    },
  },
);