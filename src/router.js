import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/views/About'
import Cart from '@/views/Cart'
import Catalog from '@/views/Catalog'
import Contacts from '@/views/Contacts'
import Hits from '@/views/Hits'
import Home from '@/views/Home'
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
      path: '/about',
      name: 'about',
      component: About
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
      path: '/contacts',
      name: 'contacts',
      component: Contacts
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