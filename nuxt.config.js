
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-i18n', {
      seo: true,
      locales: [
        {
          code: 'es',
          iso: 'es-ES',
          file: 'es-ES.js'
        }, 
        {
          code: 'en',
          iso: 'en-GB',
          file: 'en-EN.js'
        }
      ],
      lazy: true,
      langDir: 'locales/',
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        //cookieKey: 'i18n',
        alwaysRedirect: false, 
        fallbackLocale: 'es',
      },
      parsePages: false,
      pages: {}
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
