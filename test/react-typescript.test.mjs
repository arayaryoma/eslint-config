import { runESLint } from "./runner.mjs";
import { test, expect } from "vitest";

test("react-typescript", async (t) => {
  const result = await runESLint(
    "presets/react-typescript.js",
    "test/fixtures/react-typescript/ok.tsx"
  );
  expect(result.errorCount).toBe(0);
});
