import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/**/*.js',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree','DejaVu Sans','Vazir', ...defaultTheme.fontFamily.sans],
                'irsans': ['IRANSans'],
                vazir: ['Vazir', 'sans-serif'],
            },
            
        },
    },

    plugins: [forms],
};
