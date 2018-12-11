import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Cart from '@/views/Cart'
import Catalog from '@/views/Catalog'
import Hits from '@/views/Hits'
import Knife from '@/views/Knife'
import NewItems from '@/views/NewItems'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/catalog/:id',
      name: 'catalog',
      component: Catalog
    },
    {
      path: '/hits',
      name: 'hits',
      component: Hits
    },
    {
      path: '/knife/:id',
      name: 'knife',
      component: Knife
    },
    {
      path: '/new_items',
      name: 'new-items',
      component: NewItems
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})