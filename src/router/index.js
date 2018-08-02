import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/subscribe',
      name: 'subscribe',
      component: Subscribe
    },
    {
      path: '/merchandise',
      name: 'merchandise',
      component: Merchandise
    },
    {
      path: '/playtime',
      name: 'playtime',
      component: Playtime
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal 
    }
  ]
})
