import { defineConfig } from "tsdown";

export default defineConfig({
  entry: { oxfmt: "src/oxfmt.config.ts", oxlint: "src/oxlint.config.ts" },
  format: ["esm"],
  dts: true,
  clean: true,
  publint: true,
  platform: "node",
});
