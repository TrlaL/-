<template>
  <div class="new-items">
    <div class="main-title">Корзина</div>
    <CartList :items="items" />
    <div class="registration" v-if="items.length">
      <div class="total">
        Итого: {{ total }}
      </div>
      <div class="section">
        <div class="title">Оформление заказа</div>
        <div class="form">
          <label>Контактный телефон</label>
          <input placeholder="Ваш контактный телефон" type="text">
        </div>
        <div class="form">
          <label>Имя</label>
          <input placeholder="Ваше имя" type="text">
        </div>
        <div class="form">
          <label>Почтовый ящик</label>
          <input placeholder="example@mail.ru" type="text">
        </div>
      </div>
      <div class="section">
        <div class="title">Оплата</div>
        <div class="form">
          <label>Номер кредитной карты</label>
          <input placeholder="1234123412341234" type="text">
        </div>
        <div class="form">
          <label>Срок действия</label>
          <input placeholder="ММ/ГГГГ" type="text">
        </div>
        <div class="form">
          <label>CVV/CVC</label>
          <input placeholder="123" type="text">
        </div>
      </div>
      <button class="pay" @click="pay">Оплатить</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/cart/CartList'

export default {
  components: { CartList },
  computed: {
    items () {
      return this.$store.getters.cart
    },
    prices () {
      return this.items.map(item => item.price * item.count)
    },
    total () {
      return this.prices.reduce((prev, current) => prev + current, 0)
    }
  },
  methods: {
    pay () {
      this.$store.commit('SET_PAID_STATUS', true)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.registration {
  margin-top: 30px;
  padding: 10px;
}

.total {
  font-size: 30px;
  margin-bottom: 30px;
  text-align: right;
}

.section {
  margin-bottom: 30px;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    color: #222;

    &::after {
      content: ':';
    }
  }

  input {
    border: 0;
    border-bottom: 1px solid #aaa;
    font: inherit;
    padding: 10px 0 10px 0;
  }
}

.pay {
  background: #209ABD;
  border: 1px solid #2268BE;
  color: #fff;
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  margin: 1px;
  padding: 10px;
  width: 100%;
}
</style>