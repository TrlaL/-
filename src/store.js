import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    isModalVisible: false,
    jumps: 0,
    newItemsDate: 7 * 86400 * 1000
  },
  getters: {
    cart: (state) => state.cart,
    cartItem: (state) => (id) => state.cart.find(item => item.id === id),
    jumps: (state) => state.jumps,
    isModalVisible: (state) => state.isModalVisible,
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
    INC_JUMPS (state) {
      state.jumps++
    },
    REMOVE_CART_ITEM (state, id) {
      state.cart = state.cart.filter(item => item.id !== id)
    },
    SET_JUMPS (state, value) {
      state.jumps = value
    },
    SET_MODAL_VISIBLE (state, visible) {
      state.isModalVisible = visible
    }
  }
})