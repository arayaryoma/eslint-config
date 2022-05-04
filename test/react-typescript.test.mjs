import { runESLint } from "./runner.mjs";
import test from "node:test";
import assert from "node:assert";

test("react-typescript", async (t) => {
  const result = await runESLint(
    "presets/react-typescript.js",
    "test/fixtures/react-typescript/ok.tsx"
  );
  assert.strictEqual(result.errorCount, 0);
});
