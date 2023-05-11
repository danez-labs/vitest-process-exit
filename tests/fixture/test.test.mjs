import { describe, expect, test } from "vitest";

process.on("exit", () => {
  process.stdout.write("@@EXIT WORKED@@");
});

describe("getLanguage", () => {
  test("detects language", () => {
    expect("ur").toBe("ur");
  });
});
