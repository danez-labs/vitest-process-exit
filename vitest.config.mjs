/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["tests/test.test.mjs"],
    deps: {
      interopDefault: false,
    },
  },
});
