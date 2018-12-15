<template>
  <div class="menu">
    <a class="item" v-for="(link, name) in links" :key="name" @click="go(name)">{{ link }}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: {
        'home': 'Главная',
        'new-items': 'Новинки',
        'hits': 'Хиты',
        'contacts': 'Контакты',
        'about': 'О Нас'
      }
    }
  },
  methods: {
    go (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background: #333;
  color: #fff;
  display: flex;
  font-size: 16px;
  user-select: none;
}

.item {
  border-right: 1px solid #777;
  color: #fff;
  cursor: pointer;
  flex: 1;
  padding: 10px;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: #444;
  }
}
</style>