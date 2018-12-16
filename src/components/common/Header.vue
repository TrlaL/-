<template>
  <div class="header">
    <div class="top-line"></div>
    <div class="section">
      <div class="logo" @click="go('home')">
        <div>TrialKnifes.RU</div>
        <div>магазин ножей</div>
      </div>
      <div class="cart" @click="go('cart')">
        <i class="fas fa-shopping-cart"></i>
        {{ totalCount }} {{ word }} - {{ totalPrice }} р.
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
    counts () {
      return this.cart.map(item => item.count)
    },
    totalCount () {
      return this.counts.reduce((prev, current) => prev + current, 0)
    },
    prices () {
      return this.cart.map(item => item.price * item.count)
    },
    totalPrice () {
      return this.prices.reduce((prev, current) => prev + current, 0)
    },
    word () {
      let lastDigit = Math.abs(this.totalCount % 10)
      return lastDigit === 1 ? 'товар' : lastDigit >= 2 && lastDigit <= 4 ? 'товара' : 'товаров'
    }
  },
  methods: {
    go (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  user-select: none;
}

.top-line {
  background: #333;
  border-bottom: 1px solid #111;
  height: 5px;
  width: 100%;
}

.section {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.logo {
  cursor: pointer;
  font-size: 32px;
  font-weight: 450;

  div:first-child {
    color: #333;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  div:last-child {
    color: #F17B08;
    font-size: 14px;
    font-weight: 500;
    text-align: right;
  }
}

.cart {
  border: 1px solid #777;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px 10px 20px;

  &:hover {
    background: #555;
    border-color: #333;
    color: #fff;
    transition: all 0.3s;
  }
}
</style>