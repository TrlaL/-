<template>
  <div class="hits">
    <div class="main-title">Хиты</div>
    <CatalogList v-if="isLoaded" :items="hits" />
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
    hits () {
      return this.knifes.filter(knife => knife.hit)
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