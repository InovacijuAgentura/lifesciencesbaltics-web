import axios from 'axios';
const i18n_config = {
  defaultLocale: 'en',
  seo: false,
  detectBrowserLanguage: false,
  locales: [
    {
      code: 'en',
      name: 'en',
      iso: 'en-GB',
      file: 'en.js'
    },
    // {
    //   code: 'en',
    //   name: 'en',
    //   iso: 'en-GB',
    //   file: 'en.js'
    // },
  ],
  lazy: true,
  langDir: 'lang/',
  vueI18nLoader: false,

};
export default {
  loading: {
    color: '#DA85B6'
  },
  server: {
    port: 3333 // default: 3000
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Life Sciences Baltics',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: '//cdn.cookie-script.com/s/5d2b550add97f206d518d4dd01f86755.js'
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: process.env.API_BASE_URL,
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Light.woff2',
        as: 'font',
        type: 'font/woff2',
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
      },
      {
        rel: 'preload',
        href: '/fonts/MyriadPro-Bold.woff2',
        as: 'font',
        type: 'font/woff2',
      },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    '@/assets/css/global.css',
  ],
  pageTransition: {
    name: 'page',
    mode: 'out-in',
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/preview.client.js'},
    { src: '~/plugins/vue-lazysizes.client.js'},
    { src: '~/plugins/vue-final-modal.js'},
    { src: '~/plugins/gtm.client.js', ssr: false },
    { src: '~/plugins/vue-youtube.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    'nuxt-mq',
    '@nuxtjs/i18n',
    '@nuxtjs/gtm',
  ],
  mq: {
    defaultBreakpoint: 'lg',
    breakpoints: {
      xs: 769,
      sm: 992,
      md: 1025,
      lg: Infinity,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_BASE_URL
  },
  i18n: i18n_config,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-intersect', 'gsap', 'vue-final-modal', 'swiper'],
    // postcss: {
    //   // Add plugin names as key and arguments as value
    //   // Install them before as dependencies with npm or yarn
    //   plugins: [
    //     postcssant(),
    //   ],
    // },
    extend (config, { isDev, isClient, loaders: { vue } }) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      });
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_BASE_URL
    },
  },
  svgLoader: {
    svgoConfig: {
      plugins: [
        { prefixIds: false },
        { cleanupIDs: false},
        {removeHiddenElems: false},
      ]
    }
  },
  image: {
    domains: ['localhost', process.env.API_BASE_URL, 'https://img.youtube.com'],
  },
  router: {
    //trailingSlash: true,
  },
  generate: {
    fallback: '404.html', //isjungti prod versijoje, atkesiti 404 puslapio name failuose, ir ijungti router generatrvima
    crawler: false,
    routes(callback) {
      const requestArray = [];
      const requestArrayGloabal = [];

      let routes_array = [];
      const locales = i18n_config.locales;

      let menu = [];
      let options = [];
      locales.forEach(locale => {
        const menu_rq = axios.get(`${process.env.API_BASE_URL}/wp-json/data/v1/get_menu?lang=${locale.code}`).then(res => {
          menu[locale.code] = res.data;
        });
        requestArrayGloabal.push(menu_rq);
        const options_rq = axios.get(`${process.env.API_BASE_URL}/wp-json/data/v1/get_options?lang=${locale.code}`).then(res => {
          options[locale.code] = res.data;
        });
        requestArrayGloabal.push(options_rq);
      });

      axios.all(requestArrayGloabal).then(() => {
        locales.forEach(locale => {


            const pages_rq =  axios.get(`${process.env.API_BASE_URL}/wp-json/data/v1/get_all_pages?lang=${locale.code}`).then(res => {
              if (res.data) {
                const data = res.data.map(page => {
                  return {
                    route: page.url,
                    payload: {data: page, menu: menu[locale.code], options: options[locale.code]  }
                  };
                });
                routes_array = routes_array.concat(data);
              }
            });
            requestArray.push(pages_rq);



            const news_rq =  axios.get(`${process.env.API_BASE_URL}/wp-json/data/v1/get_all_news?lang=${locale.code}`).then(res => {
              if (res.data) {
                const data = res.data.map(naujiena => {
                  return {
                    route: naujiena.url,
                    payload: {data: naujiena, menu: menu[locale.code], options: options[locale.code] }
                  };
                });
                routes_array = routes_array.concat(data);
              }
            });
            requestArray.push(news_rq);

            const members_rq =  axios.get(`${process.env.API_BASE_URL}/wp-json/data/v1/get_all_members?lang=${locale.code}`).then(res => {
              if (res.data) {
                const data = res.data.map(member => {
                  return {
                    route: member.url,
                    payload: {data: member, menu: menu[locale.code], options: options[locale.code] }
                  };
                });
                routes_array = routes_array.concat(data);
              }
            });
            requestArray.push(members_rq);




        });

        axios.all(requestArray).then(() => {
          //console.log(routes_array);
          callback(null, routes_array);
        }).catch((error) => {
          callback(null, []);
        });

      });
    },
  },
}
