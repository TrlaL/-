<template>
  <div class="stars">
    <i class="fas fa-star" v-for="i in 5" :class="className(i)" :key="i"></i>
  </div>
</template>

<script>
export default {
  methods: {
    className (i) {
      return {
        active: i <= this.value
      }
    }
  },
  props: {
    value: {
      default: 0,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.stars {
  color: #333;
}

.active {
  color: #FDC700;
}
</style>