<template>
  <div class="cart-item">
    <img class="image" :src="item.image">
    <div class="content">
      <div class="name">{{ item.name }}</div>
      <Counter class="counter" v-model="item.count" @input="changeItem" />
      <div class="total">{{ total }} руб.</div>
      <button class="remove" @click="removeItem">Удалить</button>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/common/Counter'

export default {
  components: { Counter },
  props: {
    item: { required: true, type: Object }
  },
  computed: {
    total () {
      return this.item.count * this.item.price
    }
  },
  methods: {
    changeItem () {
      this.$store.commit('CHANGE_CART_ITEM_COUNT', { id: this.item.id, count: this.count })
    },
    removeItem () {
      this.$store.commit('REMOVE_CART_ITEM', this.item.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-item {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100px;
}

.image {
  height: 100%;
  object-fit: fill;
  width: 200px;
}

.content {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px;

  .name {
    flex: 4;
    font-size: 18px;
    font-weight: 400;
  }

  .counter {
    display: flex;
    flex: 3;
    justify-content: center;
  }

  .total {
    flex: 2;
    font-size: 20px;
    text-align: center;
  }

  .remove {
    background: #fff;
    border: 2px solid #333;
    color: #111;
    cursor: pointer;
    flex: 1;
    font: inherit;
  }
}
</style>