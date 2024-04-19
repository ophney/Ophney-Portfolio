const dir = require("tailwindcss-dir");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Defines custom font families
        casablanca: ["casablanca", "serif"],
        TitrPlus: ["titrplus", "serif"],
        BYekan: ["BYekan", "serif"],
        soltan: ["soltan", "serif"],
        robotoBold: ["robotoBold", "serif"],
        summer: ["summer", "serif"],
      },
      fontSize: {
        14: "14px",
      },

      // Adds custom background colors, border widths, and other utilities
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "half-transparent-dark": "rgba(0, 0, 0, 0.5)",
        "half-transparent-light": "rgba(255, 255, 255, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        pic: "url('./assets/images/kid.jpg')",
        DigitalRepair: "url('./assets/images/DigitalRepair.png')",
        musicPlayer: "url('./assets/images/musicplayer.png')",
        dashboard: "url('./assets/images/dashboard.png')",
        weatherforecast: "url('./assets/images/weatherforecast.png')",
        alannews: "url('./assets/images/alannews.png')",
        cryptocurrency: "url('./assets/images/cryptocurrency.png')",
        business: "url('./assets/images/business.png')",
        GPT3: "url('./assets/images/GPT3.png')",
        quizapp: "url('./assets/images/quizapp.png')",
        SportWebsiteUI: "url('./assets/images/SportWebsiteUI.png')",
        dashboardUI: "url('./assets/images/dashboardUI.png')",
        bootstrapTemplate: "url('./assets/images/bootstrapTemplate.png')",
        videograph: "url('./assets/images/videograph.png')",
        eCommerceTemplate: "url('./assets/images/eCommerceTemplate.png')",
        littleProject: "url('./assets/images/littleProject.png')",
        legends_landingpage: "url('./assets/images/legends_landingpage.png')",
        SomeGames: "url('./assets/images/SomeGames.png')",
      },
    },
  },
  variants: {
    float: ["responsive", "direction"],
    margin: ["responsive", "direction"],
    padding: ["responsive", "direction"],
  },
  plugins: [dir()],
};
