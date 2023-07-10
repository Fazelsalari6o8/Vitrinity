/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      '2xs' : '360px',
      'xs' : '480px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
    },
    fontFamily: {
      'Architects' : ['Architects Daughter'],
      'IRANSans' : ['IRANSans']
    },
    colors: {
      'main': {
        dark: '#22223a',
        default: '#4f4e60',
        light: '#d3d0cb',
        light2: '#e0e2db',
        pink: '#f0005e',
      },
      'black': {
        400: '#8a8a8a',
        300: '#dcdbdf',
        200: '#f1f1f1',
        100: '#f9f9f9',
      },
      'green': '#44d57a',
      'light': '#f6eff2',
      'white': '#ffffff',
      'redLight': '#f6eff2',
      'black': '#000000',
    },
    backgroundImage: {
      'banner-img': "url('/src/assets/images/banner-mobile.jpg')",
      'banner-img-web': "url('/src/assets/images/banner1.jpg')",
      'banner-img-web-xl': "url('/src/assets/images/banner.jpg')",
    },
  },
  plugins: [],
}

