module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'testproject',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    { src: '~plugins/vue-chartjs.js', ssr: false },
    '~plugins/filters.js',
    '~/plugins/fontawesome.js'
  ],
  css: [
    '@/assets/css/main.scss',
    'simple-keyboard/build/css/index.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  modules: [
    [
      'nuxt-i18n',
    ]
  ],
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          vt: 'Voltage',
          ch: 'Chart',
          txt: 'Input',
          'input-error': 'Must be a valid integer',
          sensor: 'Sensor: Volts',
          zero: 'Zero'
        },
        ru: {
          vt: 'Вольтаж',
          ch: 'Чарт',
          txt: 'Ввод',
          'input-error': 'Должен быть целым числом',
          sensor: 'Сенсор: Вольт',
          zero: 'Обнулить'
        }
      }
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

