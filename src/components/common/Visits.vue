<template>
  <div class="visits">
    <div class="title">Счетчик посещений</div>
    <div class="content">
      Всего переходов: {{ jumps }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jumps () {
      return this.$store.getters.jumps
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  background: #ddd;
  border: 1px solid #bbb;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

.content {
  border: 1px solid #bbb;
  border-top: 0;
  padding: 5px;
}
</style>