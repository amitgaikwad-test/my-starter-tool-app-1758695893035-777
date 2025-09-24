import { ESLint } from 'eslint';

export default [
  {
    files: ['*.js', '*.jsx'],
    rules: {
      'react/jsx-uses-react': 'error',
      'react/react-in-jsx-scope': 'error',
    },
  },
];
