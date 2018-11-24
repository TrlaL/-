<template>
  <div class="app container">
    <Header />
    <Menu />
    <div class="content">
      <Section class="left-section" />
      <router-view class="right-section" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/common/Header'
import Menu from './components/common/Menu'
import Section from './components/common/Section'
import Footer from './components/common/Footer'

export default {
  components: {
    Header,
    Menu,
    Section,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';
@import './assets/scss/roboto.scss';
</style>