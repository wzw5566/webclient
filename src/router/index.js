import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/layout/Home'
import Header from '../views/layout/Header'
import Dashborad from '../views/dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          component: Home,
          meta: { title: '主页'},
          children:[
              {
                  path: '/dashboard',
                  component:Dashborad,
                  meta: {title: '系统首页'}

              }
          ]
      },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home,
    //
    // },
    //
    //   {
    //       path: '/home',
    //       name: 'home',
    //       component: Home
    //   },
    // {
    //     path: '/header',
    //     name: 'header',
    //     component: Header
    // },

  ]
})
