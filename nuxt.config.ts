// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  css: ['~/assets/css/main.css'],
  alias:{
    '@':resolve(__dirname,"/")
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
