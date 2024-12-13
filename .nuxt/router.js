import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6bc99a9a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3ee947a3 = () => interopDefault(import('../pages/new/_slug.vue' /* webpackChunkName: "pages/new/_slug" */))
const _fbe29ce6 = () => interopDefault(import('../pages/team-member/_slug.vue' /* webpackChunkName: "pages/team-member/_slug" */))
const _a59d08b2 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _6bc99a9a,
    name: "index___en"
  }, {
    path: "/new/:slug?",
    component: _3ee947a3,
    name: "new-slug___en"
  }, {
    path: "/team-member/:slug?",
    component: _fbe29ce6,
    name: "team-member-slug___en"
  }, {
    path: "/*",
    component: _a59d08b2,
    name: "all___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
