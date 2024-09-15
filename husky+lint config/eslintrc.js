module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier', 'unused-imports', 'react'],
  rules: {
    // JavaScript rules
    'prefer-const': 'warn',
    'no-var': 'off',
    'no-unused-vars': ['off', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'object-shorthand': 'warn',
    'quote-props': ['warn', 'as-needed'],
    'no-unsafe-optional-chaining': 'off',
    // Automatically remove unused variables and imports
    'unused-imports/no-unused-vars': ['off', { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }],
    'unused-imports/no-unused-imports': 'off',
    // React rules
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'prettier/prettier': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-key': 'off',
    'react/jsx-no-undef': 'off',
    'no-undef': 'warn',
    'no-dupe-keys': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
