export default {
  env: {
    strapiUrl: "http://localhost:1337",
    shopifyUrl: "https://maanfarms.myshopify.com"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "maanFarms",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
      },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/maan_farms.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/VueSlickCarousel.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/device", "@nuxtjs/axios"],

  axios: {
    baseURL: "https://service.maanfarms.com"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["bootstrap-vue/nuxt"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
