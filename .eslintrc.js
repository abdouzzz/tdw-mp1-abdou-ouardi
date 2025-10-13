module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Pour parser TS
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // support ES modules
  },
  env: {
    node: true, // pour 'module' et 'require'
    browser: false,
    es2021: true,
    jest: true, // si tu utilises Jest
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Prettier doit être le dernier
  ],
  rules: {
    'prettier/prettier': 'error',
    // ajoute tes règles spécifiques ici
  },
  ignorePatterns: ['node_modules/', 'dist/'], // fichiers à ignorer
};
