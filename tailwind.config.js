export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: '#2563EB',
        'brand-light': '#3B82F6',
        dark: '#0A0E1A',
        'dark-2': '#0F1624',
        'dark-3': '#151D2E',
        'dark-card': '#111827',
      },
    },
  },
  plugins: [],
}
