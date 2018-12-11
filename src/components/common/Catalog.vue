<template>
  <div class="catalog">
    <div class="title">Каталог</div>
    <div class="items">
      <div class="item" v-for="(catalog, i) in catalogs" :key="i" @click="go(catalog.id)">
        <i class="fas fa-caret-right"></i> {{ catalog.name }}
      </div>
    </div>
  </div>
</template>

<script>
import catalogs from '@/api/catalogs'

export default {
  data () {
    return {
      catalogs
    }
  },
  methods: {
    go (id) {
      this.$router.push(`/catalog/${id}`)
    },
    selected (id) {
      return {
        selected: id === this.currentCatalogId
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  font-size: 15px;
}

.title {
  background: #ddd;
  border: 1px solid #bbb;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

.items {
  font-size: 13px;
}

.item {
  border: 1px solid #bbb;
  border-top: 0;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background: #eee;
  }

  a {
    color: inherit;
    display: block;
    padding: 10px;
    text-decoration: none;
  }
}
</style>