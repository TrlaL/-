<template>
  <div class="catalog">
    <div class="main-title">{{ catalog ? catalog.name : 'Загрузка...' }}</div>
    <CatalogList class="list" v-if="isLoaded" :items="items" />
    <Loading v-else />
  </div>
</template>

<script>
import CatalogList from '@/components/catalog/CatalogList'
import Loading from '@/components/common/Loading'
import { getCatalogs } from '@/api/catalogs'
import { getKnifes } from '@/api/knifes'

export default {
  components: { CatalogList, Loading },
  data () {
    return {
      catalogs: [],
      knifes: [],
      isLoadedCatalogs: false,
      isLoadedKnifes: false
    }
  },
  computed: {
    catalog () {
      return this.catalogs.find(catalog => catalog.id === this.id)
    },
    isLoaded () {
      return this.isLoadedCatalogs && this.isLoadedKnifes
    },
    items () {
      return this.knifes.filter(item => item.catalog_id === this.id)
    },
    id () {
      return parseInt(this.$route.params.id)
    }
  },
  created () {
    this.getCatalogs()
    this.getKnifes()
  },
  methods: {
    async getCatalogs () {
      this.catalogs = await getCatalogs()
      this.isLoadedCatalogs = true
    },
    async getKnifes () {
      this.knifes = await getKnifes()
      this.isLoadedKnifes = true
    }
  }
}
</script>