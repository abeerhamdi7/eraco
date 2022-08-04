import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8378021c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _b0b90664 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _e49b706e = () => interopDefault(import('../pages/media.vue' /* webpackChunkName: "pages/media" */))
const _e52d2b22 = () => interopDefault(import('../pages/photos/index.vue' /* webpackChunkName: "pages/photos/index" */))
const _c493180a = () => interopDefault(import('../pages/shows.vue' /* webpackChunkName: "pages/shows" */))
const _404586d2 = () => interopDefault(import('../pages/photos/_id.vue' /* webpackChunkName: "pages/photos/_id" */))
const _44084c92 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _8378021c,
    name: "about"
  }, {
    path: "/login",
    component: _b0b90664,
    name: "login"
  }, {
    path: "/media",
    component: _e49b706e,
    name: "media"
  }, {
    path: "/photos",
    component: _e52d2b22,
    name: "photos"
  }, {
    path: "/shows",
    component: _c493180a,
    name: "shows"
  }, {
    path: "/photos/:id",
    component: _404586d2,
    name: "photos-id"
  }, {
    path: "/",
    component: _44084c92,
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
