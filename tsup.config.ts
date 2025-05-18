import { defineConfig } from 'tsup';
import copy from 'esbuild-plugin-copy';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  outDir: 'dist',
  esbuildPlugins: [
    copy({
      assets: [
        {
          from: ['./src/styles/**/*'],
          to: ['./dist/styles'],
        },
      ],
      watch: true,
    }),
  ],
});
