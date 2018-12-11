<template>
  <div class="catalog">
    <div class="main-title">{{ catalog.name }}</div>
    <CatalogList class="list" :items="items" />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'
import catalogs from '@/api/catalogs'
import knifes from '@/api/knifes'

export default {
  components: { CatalogList },
  data () {
    return {
      catalogs,
      knifes
    }
  },
  computed: {
    catalog () {
      return this.catalogs.find(catalog => catalog.id === this.id)
    },
    items () {
      return this.knifes.filter(item => item.catalog_id === this.id)
    },
    id () {
      return parseInt(this.$route.params.id)
    }
  }
}
</script>