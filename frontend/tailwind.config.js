/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // ✅ correct for tailwind to scan flowbite classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // ✅ correct plugin source
  ],
};
