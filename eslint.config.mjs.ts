import next from 'eslint-config-next';

export default [
  ...next,
  {
    files: ['src/components/GradualBlur.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];