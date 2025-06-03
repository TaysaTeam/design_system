import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
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
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/**/*",
          dest: "styles",
        },
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
