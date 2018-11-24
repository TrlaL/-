<template>
  <div class="catalog">
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
    id () {
      return this.$route.params.id
    },
    items () {
      return this.$knifes.filter(knife => knife.catalog_id == this.id)
    }
  },
  afterRouteUpdate () {
    this.setCurrentCatalog()
  },
  created () {
    this.setCurrentCatalog()
  },
  methods: {
    setCurrentCatalog () {
      this.$store.commit('SET_CURRENT_CATALOG_ID', this.id)
    }
  }
}
</script>