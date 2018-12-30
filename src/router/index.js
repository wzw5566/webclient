import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/layout/Home'
import Header from '../views/layout/Header'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
        path: '/header',
        name: 'header',
        component: Header
    },

  ]
})
