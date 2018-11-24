<template>
  <div class="header">
    <div class="top-line"></div>
    <div class="section">
      <div class="logo">
        <div>TrialKnifes.RU</div>
        <div>магазин ножей</div>
      </div>
      <div class="search">
        <input type="text">
        <i class="fas fa-search"></i>
      </div>
      <div class="cart">
        <i class="fas fa-shopping-cart"></i>
        {{ cart. length }} товаров - {{ total }} р.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      total: 0
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    knifes () {
      return this.$knifes.filter(knife => this.cart.includes(knife.id))
    }
  },
  watch: {
    knifes (item) {
      let total = 0
      item.forEach(item => total += item.price)
      this.total = total
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
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
  font-size: 32px;
  font-weight: 450;

  div:first-child {
    color: #333;
  }

  div:last-child {
    color: #F17B08;
    font-size: 14px;
    font-weight: 500;
    text-align: right;
  }
}

.search {
  display: flex;

  input {
    border: 0;
    border-bottom: 1px solid #777;
    padding: 8px 0 8px 0;
    width: 100%;
  }

  i {
    border-bottom: 1px solid #777;
    cursor: pointer;
    padding: 8px;
  }
}

.cart {
  border: 1px solid #777;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px 10px 20px;
}
</style>