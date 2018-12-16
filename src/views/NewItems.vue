<template>
  <div class="new-items">
    <div class="main-title">Новинки</div>
    <CatalogList v-if="isLoaded" :items="newItems" />
    <Loading v-else />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'
import Loading from '@/components/common/Loading'
import { getKnifes } from '@/api/knifes'

export default {
  components: { CatalogList, Loading },
  data () {
    return {
      knifes: [],
      isLoaded: false
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
  },
  created () {
    this.getKnifes()
  },
  methods: {
    async getKnifes () {
      this.knifes = await getKnifes()
      this.isLoaded = true
    }
  }
}
</script>