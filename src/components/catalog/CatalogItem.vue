<template>
  <div class="catalog-item">
    <img class="image" :src="item.image" @click="go">
    <div class="section">
      <div class="main">
        <div class="name">{{ item.name }}</div>
        <div class="producer">{{ item.params.producer.value }}</div>
      </div>
      <div class="controls">
        <div class="price">{{ item.price.toLocaleString() }} р.</div>
        <button class="add" :class="className" @click="toggle">
          <i class="fas" :class="buttonIcon"></i>
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { required: true, type: Object }
  },
  computed: {
    buttonText () {
      return this.isAdded ? 'Добавлен' : 'В корзину'
    },
    buttonIcon () {
      return this.isAdded ? 'fa-check' : 'fa-shopping-cart'
    },
    className () {
      return { added: this.isAdded }
    },
    isAdded () {
      return this.$store.getters.cartItem(this.item.id)
    }
  },
  methods: {
    go () {
      this.$router.push({ name: 'knife', params: { id: this.item.id } })
    },
    toggle () {
      if (this.isAdded) return this.$store.commit('REMOVE_CART_ITEM', this.item.id)
      this.$store.commit('ADD_CART_ITEM', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog-item {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
}

.image {
  background: #eee;
  cursor: pointer;
  height: 200px;
  object-fit: contain;
  width: 100%;
}

.section {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  .main {
    flex: 1;
  }
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

    &:hover {
      background: #aaa;
      transition: all 0.3s;
    }
  }

  .added {
    background: #444 !important;
    color: #fff;
  }
}
</style>