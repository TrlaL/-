<template>
  <transition name="fade">
    <div class="modal" v-if="isPaid">
      <div class="blackout" @click="close"></div>
      <div class="box">
        <i class="close fas fa-times" @click="close"></i>
        <div class="header">{{ title }}</div>
        <div class="modal-content">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: { default: 'Modal Window', type: String }
  },
  computed: {
    isPaid () {
      return this.$store.getters.isPaid
    }
  },
  methods: {
    close () {
      this.$store.commit('SET_PAID_STATUS', false)
      this.$store.commit('CLEAR_CART')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.blackout {
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100%;
  position: absolute;
  width: 100%;
}

.box {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin: 10px;
  max-height: 75%;
  max-width: 600px;
  overflow-y: auto;
  padding: 25px 80px 25px 80px;
  position: relative;
  width: 100%;
  z-index: 1;
}

.close {
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
}

.header {
  color: #3D3C3C;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
}

.modal-content {
  color: #111;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
}
</style>