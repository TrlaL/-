<template>
  <div class="menu">
    <router-link class="item" to="/">Главная</router-link>
    <router-link class="item" to="/">Новинки</router-link>
    <router-link class="item" to="/">Хиты</router-link>
    <router-link class="item" to="/">Отзывы</router-link>
    <router-link class="item" to="/">Контакты</router-link>
    <router-link class="item" to="/">О нас</router-link>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  background: #333;
  color: #fff;
  display: flex;
  font-size: 16px;
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