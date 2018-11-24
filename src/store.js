import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    currentCatalogId: 0
  },
  getters: {
    cart (state) {
      return state.cart
    },
    currentCatalogId (state) {
      return state.currentCatalogId
    }
  },
  mutations: {
    ADD_CART_ITEM (state, id) {
      state.cart.push(id)
    },
    REMOVE_CART_ITEM (state, id) {
      let index = state.cart.indexOf(id)
      if (state.cart.indexOf(id) === -1) {
        state.cart.splice(index, 1)
      }
    },
    SET_CURRENT_CATALOG_ID (state, id) {
      state.currentCatalogId = id
    }
  }
})