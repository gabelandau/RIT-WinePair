import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/pair',
      beforeEnter (to, from, next) {
        next('/')
      }
    },
    {
      path: '/pair/:mode',
      name: 'pair',
      props: true,
      component: () => import('./views/Pair.vue')
    }
  ]
})
