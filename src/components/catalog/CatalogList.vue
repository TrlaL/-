<template>
  <div class="catalog-list">
    <CatalogItem class="item" v-for="(item, i) in items" :key="i" :item="item" />
  </div>
</template>

<script>
import CatalogItem from './CatalogItem'

export default {
  components: { CatalogItem },
  props: {
    items: { required: true, type: Array }
  }
}
</script>

<style lang="scss" scoped>
.catalog-list {
  display: flex;
  flex-wrap: wrap;
}

.item {
  margin: 10px;
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 30px);
}
</style>