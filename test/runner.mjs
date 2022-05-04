import { ESLint } from "eslint";
import path from "node:path";

export async function runESLint(configFilePath, fixturePath) {
  const options = {
    overrideConfigFile: path.resolve(process.cwd(), configFilePath),
  };
  const eslint = new ESLint(options);
  const results = await eslint.lintFiles([
    path.resolve(process.cwd(), fixturePath),
  ]);
  const result = results[0];
  return result;
}
