import { defineConfig } from "vite";
import { resolve } from "path";
import glsl from 'vite-plugin-glsl';  

export default defineConfig({
  plugins: [glsl()],
  build: {
    target: "esnext",
    minify: "terser",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "wd",
      formats: ["es", "umd", "iife"],
    },
    terserOptions: {
      module: true,
      compress: {
        drop_console: true,
        toplevel: true,
        unsafe_math: true,
        passes: 10,
      },
    },
  },
});