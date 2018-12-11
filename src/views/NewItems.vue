<template>
  <div class="new-items">
    <div class="main-title">Новинки</div>
    <CatalogList :items="newItems" />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'
import knifes from '@/api/knifes'

export default {
  components: { CatalogList },
  data () {
    return {
      knifes
    }
  },
  computed: {
    newItems () {
      return this.knifes.filter(knife => {
        let current = new Date().getTime()
        let date = new Date(knife.date)
        return Math.abs(current - date) < this.newItemsDate
      })
    },
    newItemsDate () {
      return this.$store.getters.newItemsDate
    }
  }
}
</script>