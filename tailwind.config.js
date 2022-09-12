/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#111111',
            "gray-dark": '#2e2e2e',
            gray: '#7f7f7f',
            "gray-light": '#bfbfbf',
            white: '#fafafa',
        },
        extend: {},
    },
    plugins: [],
}
