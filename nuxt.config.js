export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ave",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Online clothing shop for men and women"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/vue-lazyload.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@aceforth/nuxt-optimized-images",
    '@nuxt/image',
  ],

  optimizedImages: {
    optimizeImages: true
  },

  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },

    provider: 'ipx',
    ipx: {},

    // domains: ['picsum.photos'],/////change
    // alias: {
    //   picsum: 'https://picsum.photos'
    // },
    // vercel: {
    //   baseURL: 'https://ave-nine.vercel.app/_vercel/image'
    // }
  },

  serverMiddleware: {
    '/_ipx': '~/server/middleware/ipx.js'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  fontawesome: {
    component: "fa",
    icons: {
      solid: [
        "faSearch",
        "faShoppingCart",
        "faHeart",
        "faCompressAlt",
        "faInfoCircle"
      ],
      brands: ["faFacebookF", "faTwitter", "faInstagramSquare", "faPinterest"]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  ssr: true,
  target: "server",
  router: {
    base: "/"
  },
  modern: "server"
};
