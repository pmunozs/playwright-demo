import globals from "globals";
import tseslint from "typescript-eslint";
import playwright from "eslint-plugin-playwright";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["tests/*.spec.ts"]},
  {plugins: {
    "playwright": playwright
    }
  },
  {languageOptions: { globals: globals.browser }},
  {rules: {
    ...playwright.configs["flat/recommended"].rules,
    'no-console': 'warn',                            // Warn about console logs
    'no-debugger': 'error',                          // Disallow the use of `debugger`
    'prefer-const': 'error',                         // Enforce `const` when variables are not reassigned
    'arrow-body-style': ['error', 'as-needed'],      // Enforce concise arrow function bodies
    'eqeqeq': ['error', 'always'],
    'semi': ["error", "always"],                     // Avoid missing semicolons
  }},
  ...tseslint.configs.recommended,
];