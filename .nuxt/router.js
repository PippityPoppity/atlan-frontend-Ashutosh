import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3290dd1a = () => interopDefault(import('..\\pages\\404.vue' /* webpackChunkName: "pages/404" */))
const _6a71e886 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/404",
    component: _3290dd1a,
    name: "404"
  }, {
    path: "/search",
    component: _6a71e886,
    name: "search"
  }, {
    path: "/",
    component: _6a71e886,
    name: "srch"
  }, {
    path: "*",
    component: _3290dd1a,
    name: "Error"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
