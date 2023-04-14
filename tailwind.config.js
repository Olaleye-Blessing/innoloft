export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#FFFFFF',
          1: '#E5E7EB',
          2: '#F9FAFB',
          3: '#6B7280',
        },
        blue: {
          DEFAULT: '#00f',
          1: '#272E71',
        },
        black: {
          DEFAULT: '#000',
          1: '#374151',
        },
      },
    },
  },
  plugins: [],
}
