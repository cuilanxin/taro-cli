module.exports = {
  extends: ['taro'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'prettier/prettier': 'warn',
    'react/no-unstable-nested-components': 'off',
    'no-invalid-this': 'off',
    'no-console': 'error',
    'react/sort-comp': 'off',
    'default-case-last': 'off',
    'grouped-accessor-pairs': 'off',
    'no-constructor-return': 'off',
    'no-dupe-else-if': 'off',
    'no-import-assign': 'off',
    'no-loss-of-precision': 'off',
    'no-promise-executor-return': 'off',
    'no-setter-return': 'off',
    'no-unreachable-loop': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-useless-backreference': 'off',
    'prefer-regex-literals': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'import/no-commonjs': 'off',
  },
  parser: 'babel-eslint',
};
