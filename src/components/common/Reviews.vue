<template>
  <div class="reviews">
    <div class="title">Отзывы</div>
    <div class="main">
      <div class="items" v-if="reviews.length">
        <div class="item" v-for="(review, i) in reviews" :key="i">
          <div class="info">
            <div class="name">{{ review.name }}</div>
            <div class="date">{{ review.date }}</div>
          </div>
          <Stars :value="review.stars" />
          <div class="review">{{ review.message }}</div>
        </div>
      </div>
      <div class="item" v-else>Отзывов нет</div>
    </div>
  </div>
</template>

<script>
import Stars from './Stars'

export default {
  components: { Stars },
  computed: {
    reviews () {
      return this.$store.getters.reviews
    }
  },
  created () {
    this.$store.commit('ADD_REVIEW', {
      name: 'Марк',
      date: '13.12.2018',
      message: 'Сайтом доволен',
      stars: 5
    })
    this.$store.commit('ADD_REVIEW', {
      name: 'Иван',
      date: '11.12.2018',
      message: 'Не понял, что это',
      stars: 2
    })
  }
}
</script>

<style lang="scss" scoped>
.reviews {
  border: 1px solid #bbb;
}

.main {
  padding: 5px;
}

.title {
  background: #ddd;
  border-bottom: 1px solid #bbb;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

.item {
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  margin-bottom: 5px;
  padding: 3px 0 3px 0;

  &:last-child {
    border: 0;
    margin: 0;
  }
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