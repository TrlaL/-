<template>
  <div class="new-items">
    <Modal title="Предупреждение">{{ message }}</Modal>
    <div class="main-title">Корзина</div>
    <CartList :items="items" />
    <div class="registration" v-if="items.length">
      <div class="total">
        Итого: <b>{{ total }}</b> руб.
      </div>
      <div class="section">
        <div class="title">Оформление заказа</div>
        <div class="form">
          <label>Контактный телефон:</label>
          <input autocomplete="off" name="number" type="text" v-validate="'required|numeric|min:5'" :class="check('number')">
        </div>
        <div class="form">
          <label>Имя:</label>
          <input autocomplete="off" name="name" type="text" v-validate="'required'" :class="check('name')">
        </div>
        <div class="form">
          <label>Почтовый ящик:</label>
          <input autocomplete="off" name="email" type="text" v-validate="'required|email'" :class="check('email')">
        </div>
        <div class="form">
          <label>Адрес:</label>
          <input autocomplete="off" name="address" type="text" v-validate="'required'" :class="check('address')">
        </div>
      </div>
      <div class="section">
        <div class="title">Оплата</div>
        <div class="form">
          <label>Номер кредитной карты:</label>
          <input autocomplete="off" name="card" type="text" v-validate="'required|numeric|min:16'" :class="check('card')">
        </div>
        <div class="form">
          <label>Срок действия:</label>
          <input autocomplete="off" name="expireDate" type="text" v-validate="'required|date_format:MM/YYYY'" :class="check('expireDate')">
        </div>
        <div class="form">
          <label>CVV/CVC:</label>
          <input autocomplete="off" name="cvv" type="text" v-validate="'required|numeric|min:3|max:4'" :class="check('cvv')">
        </div>
      </div>
      <button class="pay" @click="pay">Оплатить</button>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/cart/CartList'
import Modal from '@/components/common/Modal'

export default {
  components: { CartList, Modal },
  data () {
    return {
      message: ''
    }
  },
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
    check (name) {
      let hasErrors = this.errors.has(name)
      return { error: hasErrors }
    },
    pay () {
      this.$validator.validateAll().then(checked => {
        if (!checked) return this.showModal('Исправьте ошибки в форме и попробуйте снова!')
        this.$store.commit('SET_MODAL_VISIBLE', true)
        this.$router.push({ name: 'home' })
      })
    },
    showModal (message) {
      this.message = message
      this.$store.commit('SET_MODAL_VISIBLE', true)
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
  color: #111;
  font-size: 25px;
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
  }

  input {
    border: 0;
    border-bottom: 1px solid #aaa;
    font: inherit;
    padding: 10px 0 10px 0;
  }

  .error {
    border-color: #E12828;
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