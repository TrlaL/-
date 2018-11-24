<template>
  <div class="catalog">
    <div class="main-title">{{ catalog.name }}</div>
    <CatalogList class="list" :items="items" />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'

export default {
  components: {
    CatalogList
  },
  computed: {
    catalog () {
      return this.$catalogs.find(catalog => catalog.id == this.id)
    },
    id () {
      return this.$route.params.id
    },
    items () {
      return this.$knifes.filter(knife => knife.catalog_id == this.id)
    }
  }
}
</script>