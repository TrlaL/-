<template>
  <div class="section">
    <Catalog />
    <Reviews />
  </div>
</template>

<script>
import Catalog from './Catalog'
import Reviews from './Reviews'

export default {
  components: {
    Catalog,
    Reviews
  }
}
</script>

<style lang="scss" scoped>
.section * {
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }
}
</style>