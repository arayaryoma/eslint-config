/**
 * @type { import('eslint').ESLint.Config }
 **/

const config = {
  extends: [
    "../configs/base",
    "../configs/typescript",
    "../configs/react",
    "../configs/react-typescript",
  ],
};

module.exports = config;
