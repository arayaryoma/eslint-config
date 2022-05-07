import { runESLint } from "./runner.mjs";
import { expect, test } from "vitest";

test("typescript", async (t) => {
  const result = await runESLint(
    "presets/typescript.js",
    "test/fixtures/typescript/ok.ts"
  );
  expect(result.errorCount).toBe(0);
});
