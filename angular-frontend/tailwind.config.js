/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {
      fontFamily: {
        'sans': ['Assistant', 'sans-serif'],
      },
      colors: {
        'omni-red': {
          50: '#FFE7E8',
          100: '#FFC2C5',
          200: '#FF999E',
          300: '#FF7076', 
          400: '#FF474E',
          500: '#E73A3A', 
          600: '#D03336',
          700: '#B82C2E',
          800: '#A02526',
          900: '#891E1F',
        },
        
        'omni-schwarz': {
          50: '#F2F2F2',
          100: '#E5E5E5',
          200: '#D9D9D9',
          300: '#CCCCCC',
          400: '#B8B8B8',
          500: '#A5A5A5',
          600: '#8C8C8C',
          700: '#25282B', 
          800: '#171714',
          900: '#0A0A0A',
        },
        
        'omni-grey': {
          50: '#FDFDFD',
          100: '#F8F9FA', 
          200: '#D1D1D1', 
          300: '#B5B5B5',
          400: '#999999',
          500: '#7D7D7D',
          600: '#606060',
          700: '#4D4D4D',
          800: '#333333',
          900: '#1A1A1A',
        },
      },
    },
    
  },
  plugins: [],
};
