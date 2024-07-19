module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // 'media' 또는 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FF7F50', // Coral
        background: '#f0f0f0', // Light Gray
        sidebar: '#2c3e50', // Dark Slate Gray
        accent1: '#3498db', // Blue
        accent2: '#e74c3c', // Red
        'base-100': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // 커스텀 폰트 패밀리 추가
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem', // 커스텀 간격 추가
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // 커스텀 테두리 반경 추가
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
