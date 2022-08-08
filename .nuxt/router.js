import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67849113 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _50e40eef = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _36f2d9ea = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _49b2cf37 = () => interopDefault(import('..\\pages\\photos\\index.vue' /* webpackChunkName: "pages/photos/index" */))
const _52ab06f4 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _46f7061c = () => interopDefault(import('..\\pages\\shows.vue' /* webpackChunkName: "pages/shows" */))
const _716d9942 = () => interopDefault(import('..\\pages\\photos\\_id.vue' /* webpackChunkName: "pages/photos/_id" */))
const _633cfbd8 = () => interopDefault(import('..\\pages\\products\\_item.vue' /* webpackChunkName: "pages/products/_item" */))
const _f1872850 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _67849113,
    name: "about"
  }, {
    path: "/login",
    component: _50e40eef,
    name: "login"
  }, {
    path: "/media",
    component: _36f2d9ea,
    name: "media"
  }, {
    path: "/photos",
    component: _49b2cf37,
    name: "photos"
  }, {
    path: "/products",
    component: _52ab06f4,
    name: "products"
  }, {
    path: "/shows",
    component: _46f7061c,
    name: "shows"
  }, {
    path: "/photos/:id",
    component: _716d9942,
    name: "photos-id"
  }, {
    path: "/products/:item",
    component: _633cfbd8,
    name: "products-item"
  }, {
    path: "/",
    component: _f1872850,
    name: "index"
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
