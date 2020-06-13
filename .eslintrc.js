module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.dev.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:react/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-import-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'sort-imports': 'error',
    "@typescript-eslint/camelcase": 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { overrides: { constructors: 'no-public' } },
    ],
    "@typescript-eslint/ban-types": 'off',
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ]
  },
};