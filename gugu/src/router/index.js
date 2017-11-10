import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Fujin from '@/pages/fujin'
import Order from '@/pages/Order'
import User from '@/pages/User'


Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    },

    {
      path: '/Fujin',
      name: 'Fujin',
      component: Fujin
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
  ]
})
