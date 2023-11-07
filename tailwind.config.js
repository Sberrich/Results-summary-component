/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./public/**/*/{html,js}"],
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {

        // ### Primary
        Lightred: 'hsl(0, 100%, 67%)',
        Orangeyellow: 'hsl(39, 100%, 56%)',
        Greenteal: 'hsl(166, 100%, 37%)',
        Cobaltblue: 'hsl(234, 85%, 45%)',

        // ## Gradients
        Lightslateblue: 'hsl(252, 100%, 67%)',
        Lightroyalblue: 'hsl(241, 81%, 54%)',
        Violetblue: 'hsla(256, 72%, 46%, 1)',
        Persianblue: 'hsla(241, 72%, 46%, 0)',

        // ### Neutral
        White: 'hsl(0, 0%, 100%)',
        Paleblue: 'hsl(221, 100%, 96%)',
        Lightlavender: 'hsl(241, 100%, 89%)',
        Darkgrayblue: 'hsl(224, 30%, 27%)',

      },
      fontFamily:{
        Hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      fontWeight: {
        customnormal: 500,
        customBold: 700,
        customExtrabold: 800,
      },
      fontSize:{
        customSize: '18px',
      }
    },
  },
  plugins: [],
}