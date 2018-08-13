import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// const Home = r => require.ensure([], () => r(require('@/pages/home/Home.vue')), 'Home')
const Home = resolve => require(['@/pages/home/Home.vue'], resolve);
const Subscribe = resolve => require(['@/pages/subscribe/Subscribe.vue'], resolve);
const Merchandise = resolve => require(['@/pages/merchandise/Merchandise.vue'], resolve);
const Playtime = resolve => require(['@/pages/playtime/Playtime.vue'], resolve);
const Personal = resolve => require(['@/pages/personal/My.vue'], resolve);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
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
