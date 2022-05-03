const path = require('path');

module.exports = {
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    es6: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'no-underscore-dangle': ['off'],
    'function-paren-newline': ['off'],
    'class-methods-use-this': ['off'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: [
          './services/budget-helper-api/tsconfig.json',
        ],
      },
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
};
