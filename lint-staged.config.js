module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  '*.{md,mdx,css,yaml,yml}': [
    'prettier --write',
    'prettier --check',
    'git add',
  ],
};
