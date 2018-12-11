<template>
  <div class="knife">
    <img class="image" :src="item.image">
    <div class="section">
      <div class="name">
        {{ item.name }}
        <Stars class="stars" :value="item.stars" />
      </div>
      <div class="description">{{ item.description }}</div>
      <div class="params">
        <div class="header">Информация о ноже:</div>
        <div class="table">
          <div class="row" v-for="(param, i) in item.params" :key="i">
            <div>{{ param.name }}</div>
            <div>{{ param.value }}</div>
          </div>
        </div>
        <div class="row price">
          <div>Цена (рубли)</div>
          <div>{{ item.price }}</div>
        </div>
      </div>
      <div class="buttons">
        <button :class="className" @click="toggle">
          <i class="fas" :class="buttonIcon"></i>
          {{ buttonText }}
        </button>
        <button @click="pay">
          <i class="far fa-credit-card"></i>
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/common/Stars'
import knifes from '@/api/knifes'

export default {
  components: { Stars },
  data () {
    return {
      knifes
    }
  },
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
    className () {
      return { added: this.isAdded }
    },
    id () {
      return parseInt(this.$route.params.id)
    },
    isAdded () {
      return this.$store.getters.cartItem(this.item.id)
    },
    item () {
      return this.knifes.find(knife => knife.id === this.id)
    }
  },
  methods: {
    pay () {
      this.$router.push({ name: 'cart' })
    },
    toggle () {
      if (this.isAdded) return this.$store.commit('REMOVE_CART_ITEM', this.item.id)
      this.$store.commit('ADD_CART_ITEM', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
.image {
  background: #eee;
  border-bottom: 1px solid #ddd;
  height: 400px;
  object-fit: contain;
  width: 100%;
}

.section {
  padding: 10px;
}

.name {
  display: flex;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;

  .stars {
    margin-left: 20px;
  }
}

.description {
  font-size: 14px;
  line-height: 20px;
}

.params {
  margin-top: 10px;

  .header {
    background: #ddd;
    border: 1px solid #bbb;
    font-weight: 450;
    padding: 10px;
  }

  .row {
    display: flex;

    div {
      border: 1px solid #bbb;
      border-right: 0;
      border-top: 0;
      flex: 1;
      padding: 10px;

      &:last-child {
        border-right: 1px solid #bbb;
      }
    }
  }

  .price {
    background: #eee;
    font-weight: bold;
  }
}

.buttons {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    background: #fff;
    border: 2px solid #333;
    border-right: 0;
    color: #111;
    cursor: pointer;
    flex: 1;
    font: inherit;
    padding: 10px;

    &:last-child {
      border-right: 2px solid #333;
    }
  }

  .added {
    background: #444;
    color: #fff;
  }
}
</style>