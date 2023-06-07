// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/gsap-landing-page/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/style/main.css"],
  build: {
    transpile: ["gsap"],
  },
});
