const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Ventura - Agentes da Inovação',
    htmlAttrs: {
      lang: 'pt-BR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Ventura busca a inovação e disseminação da mesma, proporcionando às empresas e comunidades o desenvolvimento de soluções pela ótica do Design Thinking, utilizando metodologias do Design Thinking, SWOT, Gamification, Modelagem de Negócios e Ágile.' },

      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://venturainova.me/thumbnail.jpg'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Ventura - Agentes da Inovação'
      },
      { hid: 'og:title', name: 'og:title', content: 'Ventura - Agentes da Inovação' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'A Ventura busca a inovação e disseminação da mesma, proporcionando às empresas e comunidades o desenvolvimento de soluções pela ótica do Design Thinking, utilizando metodologias do Design Thinking, SWOT, Gamification, Modelagem de Negócios e Ágile.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;0,800;1,200;1,300;1,600;1,800&display=swap' }

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
    './assets/sass/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/icons.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Sitemap : https://github.com/nuxt-community/sitemap-module#sitemap-options
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  sitemap: {
    hostname: 'https://www.venturainova.me',
    exclude: [
      '/treinamentos'
    ],
    gzip: true,
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-168656584-1'
  },
  serverMiddleware: [
    { path: '~/api/contact' },
  ],
}
