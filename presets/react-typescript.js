/**
 * @type { import('eslint').ESLint.Config }
 **/

const config = {
  extends: [
    "../configs/base",
    "../configs/typescript",
    "../configs/react",
    "../configs/react-typescript",
    "eslint:recommended",
  ],
};

module.exports = config;
