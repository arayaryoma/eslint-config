import { runESLint } from "./runner.mjs";

import { describe, test, expect } from "vitest";

describe("react-typescript", () => {
  test("ok.tsx must not has any errors", async () => {
    const result = await runESLint(
      "presets/react-typescript.js",
      "test/fixtures/react-typescript/ok.tsx"
    );
    expect(result.errorCount).toBe(0);
  });
});
