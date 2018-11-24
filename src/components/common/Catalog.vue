<template>
  <div class="catalog">
    <div class="title">Каталог</div>
    <div class="items">
      <div
        class="item"
        v-for="(catalog, i) in $catalogs"
        :class="selected(catalog.id)"
        :key="i"
        @click="setCurrentCatalog(catalog.id)"
      >
        <router-link :to="`/catalog/${catalog.id}`">
          <i class="fas fa-caret-right"></i> {{ catalog.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentCatalogId () {
      return this.$store.getters.currentCatalogId
    }
  },
  methods: {
    selected (id) {
      return {
        selected: id == this.currentCatalogId
      }
    },
    setCurrentCatalog (id) {
      this.$store.commit('SET_CURRENT_CATALOG_ID', id)
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

  &.selected {
    background: #eee;
    font-weight: 500;
    text-decoration: underline;
  }

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