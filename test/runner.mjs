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
  if (result.errorCount !== 0) {
    const formatter = await eslint.loadFormatter("stylish");
    const resultsText = formatter.format(results);
    console.log(resultsText);
  }
  return result;
}
