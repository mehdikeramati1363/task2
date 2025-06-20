import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/css/calendar.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
       assetsInlineLimit: 1, // غیرفعال کردن inline کردن فونت‌ها
      },
});
