import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Catalog from './views/Catalog'
import Knife from './views/Knife'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog/:id',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/knife/:id',
      name: 'knife',
      component: Knife
    }
  ]
})