import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors:{
          primary: {
             DEFAULT: "#0F0F0F" 
          },
          primaryDark:{
             DEFAULT: "#808080"
          },
          secondary:{
            DEFAULT: "#5e646e",
            dark: "rgb(212 212 216 / 0.7)"
          },
          secondaryDark:{
            DEFAULT: "s"
          }
         
       }
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;
