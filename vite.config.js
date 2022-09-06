import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/app.js'
      ],
      refresh: true,
    }),
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'resources/images'),
      '@components': path.resolve(__dirname, 'resources/js/components'),
      '@views': path.resolve(__dirname, 'resources/js/views')
    }
  }
});
