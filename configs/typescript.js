/**
 * @type {import('eslint').ESLint.Config}
 **/
const config = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
};

module.exports = config;
