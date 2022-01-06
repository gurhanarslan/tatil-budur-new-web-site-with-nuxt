export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "TatilBudur ile %50'ye Varan İndirimli Tatil Fırsatlarını Kaçırmayın!",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "En iyi tatil fırsatları, %50'ye varan indirim ve taksit imkanlarıyla TatilBudur'da. Otel ve tur fiyatlarını incelemek için hemen buraya tıklayın!" },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "Tatilbudur.com" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.tatilbudur.com",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "TatilBudur ile %50'ye Varan İndirimli Tatil Fırsatlarını Kaçırmayın!",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "En iyi tatil fırsatları, %50'ye varan indirim ve taksit imkanlarıyla TatilBudur'da. Otel ve tur fiyatlarını incelemek için hemen buraya tıklayın!",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://ucdn.tatilbudur.net/Banner/855x426/Banner_432905.jpg",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', media: "screen and (max-device-width: 961px)", href: '/scss/tablet/tablet.scss' }
      // { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/scss/main.scss',
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: './plugins/vue-slick-carousel.js' }, { src: './plugins/FakeApi.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
 
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
