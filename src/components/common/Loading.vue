<template>
  <div class="loading">
    <img src="@/assets/images/loading.gif">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: { default: 'загрузка...', type: String }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  padding: 5px 0 5px 0;

  img {
    margin-right: 10px;
  }
}
</style>