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
          <div class="row">
            <div>Производитель</div>
            <div>{{ item.producer }}</div>
          </div>
          <div class="row">
            <div>Тип стали</div>
            <div>{{ item.steel }}</div>
          </div>
          <div class="row">
            <div>Общая длина (мм)</div>
            <div>{{ item.total_length }}</div>
          </div>
        </div>
        <div class="row price">
          <div>Цена (рубли)</div>
          <div>{{ item.price }}</div>
        </div>
      </div>
      <div class="buttons">
        <button @click="add">
          <i class="fas" :class="buttonIcon"></i>
          {{ buttonText }}
        </button>
        <button>
          <i class="far fa-credit-card"></i>
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/common/Stars'

export default {
  components: {
    Stars
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
    id () {
      return this.$route.params.id
    },
    item () {
      return this.$knifes.find(knife => knife.id == this.id)
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
}
</style>