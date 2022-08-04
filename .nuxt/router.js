import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b5df72c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _589efb74 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _8c81657e = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _619dfb8e = () => interopDefault(import('..\\pages\\photos\\index.vue' /* webpackChunkName: "pages/photos/index" */))
const _6c790d1a = () => interopDefault(import('..\\pages\\shows.vue' /* webpackChunkName: "pages/shows" */))
const _608026f4 = () => interopDefault(import('..\\pages\\photos\\photo\\_item.vue' /* webpackChunkName: "pages/photos/photo/_item" */))
const _67f18976 = () => interopDefault(import('..\\pages\\photos\\_id.vue' /* webpackChunkName: "pages/photos/_id" */))
const _0a08df2f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2b5df72c,
    name: "about"
  }, {
    path: "/login",
    component: _589efb74,
    name: "login"
  }, {
    path: "/media",
    component: _8c81657e,
    name: "media"
  }, {
    path: "/photos",
    component: _619dfb8e,
    name: "photos"
  }, {
    path: "/shows",
    component: _6c790d1a,
    name: "shows"
  }, {
    path: "/photos/photo/:item?",
    component: _608026f4,
    name: "photos-photo-item"
  }, {
    path: "/photos/:id",
    component: _67f18976,
    name: "photos-id"
  }, {
    path: "/",
    component: _0a08df2f,
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
