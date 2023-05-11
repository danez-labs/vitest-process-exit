import { execa } from "execa";
import { expect, test } from "vitest";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const dir = dirname(fileURLToPath(import.meta.url));
const fixtureDir = fileURLToPath(new URL("./fixture/", import.meta.url));

test("exit works by default", async () => {
  const { stdout } = await execa(
    join(dir, "../node_modules/.bin/vitest"),
    ["run"],
    {
      cwd: fixtureDir,
    }
  );

  expect(stdout).toContain("@@EXIT WORKED@@");
});

test("exit works with no threads", async () => {
  const { stdout } = await execa(
    join(dir, "../node_modules/.bin/vitest"),
    ["run", "--no-threads"],
    {
      cwd: fixtureDir,
    }
  );

  expect(stdout).toContain("@@EXIT WORKED@@");
});
