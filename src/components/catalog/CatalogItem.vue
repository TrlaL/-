<template>
  <div class="catalog-item">
    <router-link :to="`/knife/${item.id}`">
      <img class="image" :src="item.image">
    </router-link>
    <div class="section">
      <div class="name">{{ item.name }}</div>
      <div class="producer">{{ item.producer }}</div>
      <div class="controls">
        <div class="price">{{ item.price.toLocaleString() }} р.</div>
        <button class="add" @click="add">
          <i class="fas" :class="buttonIcon"></i>
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    buttonText () {
      return this.isAdded ? 'Добавлен' : 'В корзину'
    },
    buttonIcon () {
      return this.isAdded ? 'fa-check' : 'fa-shopping-cart'
    },
    isAdded () {
      return this.cart.includes(this.item.id)
    }
  },
  methods: {
    add () {
      if (this.isAdded) return
      this.$store.commit('ADD_CART_ITEM', this.item.id)
    }
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-item {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.image {
  background: #eee;
  height: 200px;
  object-fit: contain;
  width: 100%;
}

.section {
  padding: 10px;
}

.name {
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
}

.producer {
  color: #777;
  line-height: 30px;
}

.controls {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  .price {
    font-size: 20px;
    font-weight: 600;
  }

  .add {
    background: 0;
    border: 2px solid #333;
    border-radius: 5px;
    cursor: pointer;
    font: inherit;
    padding: 7px 15px 7px 15px;
  }
}
</style>