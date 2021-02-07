module.exports = {
  purge: {
    enabled:true,
    content:['./public/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'ss':['Poppins'],
        's':['Prata'],
      },
      colors:{
        primary:'#293341',
        secondary:'#c91f28',
        light_green:'#71899b',
        light_blue:'#e5edf3'
      },
    },
  },
  variants: {
    extend: {
      outline:['hover','active'],
      fontWeight: ['hover', 'focus'],
      padding:['hover', 'focus']
    },
  },
  plugins: [],
}
