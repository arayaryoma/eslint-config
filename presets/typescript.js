/**
 * @type {import('eslint').ESLint.Config}
 **/
const config = {
  extends: ["../configs/base", "../configs/typescript", "prettier"],
};

module.exports = config;
