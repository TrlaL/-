<template>
  <div class="catalog">
    <div class="title">Каталог</div>
    <div class="items" v-if="isLoaded">
      <div class="item" v-for="(catalog, i) in catalogs" :key="i" @click="go(catalog.id)">
        <i class="fas fa-caret-right"></i> {{ catalog.name }}
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import Loading from '@/components/common/Loading'
import { getCatalogs } from '@/api/catalogs'

export default {
  components: { Loading },
  data () {
    return {
      catalogs: [],
      isLoaded: false
    }
  },
  created () {
    this.getCatalogs()
  },
  methods: {
    async getCatalogs () {
      this.catalogs = await getCatalogs()
      this.isLoaded = true
    },
    go (id) {
      this.$router.push({ name: 'catalog', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  border: 1px solid #bbb;
  font-size: 15px;
}

.title {
  background: #ddd;
  border-bottom: 1px solid #bbb;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

.items {
  font-size: 13px;
}

.item {
  border-bottom: 1px solid #bbb;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background: #ddd;
  }

  &:last-child {
    border: 0;
  }

  a {
    color: inherit;
    display: block;
    padding: 10px;
    text-decoration: none;
  }
}
</style>