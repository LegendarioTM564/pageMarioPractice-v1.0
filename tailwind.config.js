/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'olaBlanca':'url(../public/images/olaBlanca.png)',
        'olaRosa': 'url(../public/images/olaRosa.png)',
        'puntosAmarillos': 'url(../public/images/puntosAmarillos.png)',
        'puntosBlancos': 'url(../public/images/puntosBlancos.png)',
        'backgroundRedIMG':'url(../public/images/bgImgRed.png)',
        'marioimg':'url(../public/images/marioImg.png)',
      }),
      screens:{
        'xsm': '320px',
      },
    },
  },
  plugins: [],
}
