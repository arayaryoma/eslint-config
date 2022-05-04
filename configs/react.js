/**
 * @type { import('eslint').ESLint.Config }
 **/

const config = {
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: ">=17.0.0",
    },
  },
};

module.exports = config;
