const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {

            },
            colors: {
                'customBlack':{
                    DEFAULT: '#1A1A1A'
                },
                'borderColor':{
                    DEFAULT: "#BCBCBC",
                    error: "#EF5050",
                    correct: "#98E37E",
                    textError: "#E52F2F"
                },
                'inputColor':{
                    DEFAULT: "#0E80BF"
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
