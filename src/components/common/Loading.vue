<template>
  <div class="loading">
    <img :src="require(`@/assets/images/${image}`)">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    size: { default: 'small', type: String },
    text: { default: '', type: String }
  },
  computed: {
    image () {
      return this.size === 'small' ? 'loading.gif' : 'loading-big.gif'
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 5px 0 5px 0;

  img {
    margin-right: 10px;
  }
}
</style>