import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { index: "src/index.ts", oxfmt: "src/oxfmt.config.ts" },
  format: ["esm"],
  dts: true,
  clean: true,
  publint: true,
  platform: "node",
});
