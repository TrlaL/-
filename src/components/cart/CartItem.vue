<template>
  <div class="cart-item">
    <img class="image" v-show="isImageLoaded" :src="item.image" @load="isImageLoaded = true">
    <Loading class="image" size="big" v-show="!isImageLoaded" />
    <div class="content">
      <div class="name">
        <div>{{ item.name }}</div>
        <div>{{ item.params.producer.value }}</div>
      </div>
      <Counter class="counter" v-model="item.count" @input="changeItem" />
      <div class="total">{{ total }} руб.</div>
      <div class="remove fas fa-times" @click="removeItem"></div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/common/Counter'
import Loading from '@/components/common/Loading'

export default {
  components: { Counter, Loading },
  props: {
    item: { required: true, type: Object }
  },
  data () {
    return {
      isImageLoaded: false
    }
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
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 100px;
}

.image {
  background: #eee;
  border-right: 1px solid #ddd;
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

    div:last-child {
      color: #777;
      font-size: 15px;
    }
  }

  .counter {
    display: flex;
    flex: 2;
    justify-content: center;
  }

  .total {
    flex: 2;
    font-size: 20px;
    text-align: center;
  }

  .remove {
    cursor: pointer;
    font-size: 21px;
    flex: 1;
    text-align: center;

    &:hover {
      color: #333;
      transition: all 0.3s;
    }
  }
}
</style>