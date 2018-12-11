<template>
  <div class="reviews">
    <div class="title">Отзывы</div>
    <div class="items">
      <div class="item">
        <div class="info">
          <div class="name">Владимир</div>
          <div class="date">18.11.1996</div>
        </div>
        <Stars :value="1" />
        <div class="review">Хуета</div>
      </div>
      <div class="item">
        <div class="info">
          <div class="name">Василий</div>
          <div class="date">18.11.1998</div>
        </div>
        <Stars :value="1" />
        <div class="review">+1</div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from './Stars'

export default {
  components: { Stars }
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

.item {
  border: 1px solid #bbb;
  border-top: 0;
  font-size: 14px;
  padding: 5px;
}

.info {
  display: flex;
  justify-content: space-between;

  .name {
    flex: 0;
    margin-right: 10px;
  }

  .date {
    color: #777;
    flex: 0;
  }
}

.review {
  margin-top: 5px;
}
</style>