export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Atlan Frontend Task - Ashutosh Tiwari",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/global.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "srch",
        path: "/",
        component: resolve(__dirname, "pages/search.vue")
      });
      routes.push({
        name: "Error",
        path: "*",
        component: resolve(__dirname, "pages/404.vue")
      });
    }
  },

  pwa: {
    meta: {
      theme_color: "#121212"
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  generate: {}
};
