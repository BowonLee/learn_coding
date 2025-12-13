/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'hopeful-yellow': '#FFD700',
                'growth-green': '#4CAF50',
                'soft-cream': '#FEFDF5',
                'deep-charcoal': '#333333',
                'vibrant-orange': '#FF8C00',
            },
            fontFamily: {
                sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
