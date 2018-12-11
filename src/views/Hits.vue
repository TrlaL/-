<template>
  <div class="hits">
    <div class="main-title">Хиты</div>
    <CatalogList :items="hits" />
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
    hits () {
      return this.knifes.filter(knife => knife.hit)
    },
  }
}
</script>