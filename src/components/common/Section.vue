<template>
  <div class="section">
    <Catalog />
    <Reviews />
    <Visits />
  </div>
</template>

<script>
import Catalog from './Catalog'
import Reviews from './Reviews'
import Visits from './Visits'

export default {
  components: { Catalog, Reviews, Visits }
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