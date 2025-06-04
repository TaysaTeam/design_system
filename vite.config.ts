import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  assetsInclude: ["**/*.woff", "**/*.woff2", "**/*.ttf"],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "",
        includePaths: ["src"],
      },
    },
  },
  plugins: [
    react(),
    dts(),
    cssInjectedByJsPlugin(),
    viteStaticCopy({
      targets: [
        { src: "src/styles/**/*", dest: "styles" },
        { src: "src/assets/fonts/*", dest: "assets/fonts" },
      ],
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyDesignSystem",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
