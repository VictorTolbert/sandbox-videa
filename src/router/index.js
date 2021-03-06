import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  { path: '/', name: 'index', component: require('pages') },
  { path: '/privacy', name: 'privacy', component: require('pages/privacy') },
  { path: '/terms', name: 'terms', component: require('pages/terms') },
  ...require('./morehouse1987-routes'),
  ...require('./example-routes'),
  ...require('./seller-routes'),
  ...require('./buyer-routes'),
  ...require('./tickets-routes'),
  { path: '*', component: require('pages') }
]

export default new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'v-link-active',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
