module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    document: true,
    window: true,
    process: true
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['.']
      }
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'func-names': 2,
    'global-require': 0,
    'linebreak-style': [2, 'unix'],
    'max-len': 0,
    'no-confusing-arrow': 0,
    'no-console': 0,
    'no-debugger': 0,
    'no-mixed-operators': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [2, 'never'],
    'import/first': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/no-danger': 2,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'jsx-a11y/html-has-lang': 0, // override for html element in _document.jsx
    'import/newline-after-import': 0,
    'function-paren-newline': 0,
    'arrow-parens': 0
  }
}
