export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"en","name":"en","iso":"en-GB","file":"en.js"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "lang/",
  rootRedirect: null,
  detectBrowserLanguage: false,
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: false,
  normalizedLocales: [{"code":"en","name":"en","iso":"en-GB","file":"en.js"}],
  localeCodes: ["en"],
  additionalMessages: [],
}
export const localeFiles = {
  0: "{",
  1: "\"",
  2: "e",
  3: "n",
  4: ".",
  5: "j",
  6: "s",
  7: "\"",
  8: ":",
  9: "\"",
  10: ".",
  11: ".",
  12: "/",
  13: "l",
  14: "a",
  15: "n",
  16: "g",
  17: "/",
  18: "e",
  19: "n",
  20: ".",
  21: "j",
  22: "s",
  23: "\"",
  24: "}",
}

export const localeMessages = {
  'en.js': () => import('../../lang/en.js' /* webpackChunkName: "lang-en.js" */),
}
