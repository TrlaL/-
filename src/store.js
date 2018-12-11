import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    isPaid: false,
    newItemsDate: 7 * 86400 * 1000
  },
  getters: {
    cart: (state) => state.cart,
    cartItem: (state) => (id) => state.cart.find(item => item.id === id),
    isPaid: (state) => state.isPaid,
    newItemsDate: (state) => state.newItemsDate
  },
  mutations: {
    ADD_CART_ITEM (state, item) {
      state.cart.push(item)
    },
    CLEAR_CART (state) {
      state.cart = []
    },
    CHANGE_CART_ITEM_COUNT (state, params) {
      state.cart.forEach(item => {
        if (item.id === params.id) state.count = params.count
      })
    },
    REMOVE_CART_ITEM (state, id) {
      state.cart = state.cart.filter(item => item.id !== id)
    },
    SET_PAID_STATUS (state, status) {
      state.isPaid = status
    }
  }
})