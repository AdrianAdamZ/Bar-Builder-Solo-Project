module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'parser': '@babel/eslint-parser',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  ignorePatterns: [
    'dist/'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    },
  },
  'plugins': ['react', 'react-hooks'],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {
    'quotes': ['error', 'single'],
    // we want to force semicolons
    'semi': ['error', 'always'],
    // we use 2 spaces to indent our code
    'indent': ['error', 2],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
    // we want to avoid trailing spaces
    'no-trailing-spaces': ['error'],
    // we want to disable react scope rule (not necessary with React 17)
    'react/react-in-jsx-scope': 'off',
  }
};
