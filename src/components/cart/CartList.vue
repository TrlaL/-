<template>
  <div class="cart-list">
    <div v-if="items.length">
      <CartItem class="item" v-for="(item, i) in items" :key="i" :item="item" />
    </div>
    <div class="empty" v-else>
      <i class="fas fa-shopping-cart"></i> Корзина пуста
    </div>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  components: {
    CartItem
  },
  props: {
    items: { required: true, type: Array }
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin: 10px;
}

.empty {
  color: #333;
  font-size: 25px;
  padding-top: 100px;
  text-align: center;
  width: 100%;
}
</style>