<template>
  <span class="stars" @click="handle">
    <i class="star fas fa-star" v-for="i in 5" :class="className(i)" :key="i" @mousemove="move(i)"></i>
  </span>
</template>

<script>
export default {
  props: {
    value: { default: 0, type: Number }
  },
  data () {
    return {
      current: this.value,
      saved: false
    }
  },
  methods: {
    className (i) {
      return {
        active: i <= this.current
      }
    },
    handle () {
      this.saved = this.current
      this.$emit('clicked', this.current)
    },
    move (i) {
      if (this.saved) return
      this.current = i
    }
  }
}
</script>

<style lang="scss" scoped>
.stars {
  color: #333;
}

.star {
  cursor: pointer;
}

.active {
  color: #FDC700;
}
</style>