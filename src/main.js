import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import catalogs from './data/catalogs'
import knifes from './data/knifes'

Vue.config.productionTip = false
Vue.prototype.$catalogs = catalogs
Vue.prototype.$knifes = knifes

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
