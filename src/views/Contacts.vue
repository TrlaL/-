<template>
  <div class="contacts">
    <div class="main-title">Контакты</div>
    <div class="section">
      <div>Адрес:</div>
      <p><i class="fas fa-map-marked-alt"></i> 344003, г. Ростов-на-Дону, улица Мечникова 79А, кв. 228</p>
      <div class="map" ref="map"></div>
    </div>
    <div class="section">
      <div>Контактные телефоны:</div>
      <p><i class="fas fa-phone"></i> 8 (928) 148-82-28</p>
      <p><i class="fas fa-phone"></i> 8 (961) 298-54-53</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        center: [47.237412, 39.710162],
        controls: [],
        zoom: 16
      }
    }
  },
  created () {
    ymaps.ready(this.init)
  },
  methods: {
    init () {
      this.map = new ymaps.Map(this.$refs.map, this.options)
      this.placemark = new ymaps.Placemark(this.options.center)
      this.map.geoObjects.add(this.placemark)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin: 10px;

  div {
    font-size: 16px;
    font-weight: 500;
  }

  .map {
    height: 300px;
    width: 500px;
  }
}
</style>