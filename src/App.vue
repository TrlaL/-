<template>
  <div class="app container">
    <Header />
    <Menu />
    <div class="content">
      <Section class="left-section" />
      <transition mode="out-in" name="fade">
        <router-view class="right-section" />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import Section from '@/components/common/Section'

export default {
  components: {
    Header,
    Menu,
    Section,
    Footer
  },
  created () {
    this.$store.commit('SET_JUMPS', localStorage.jumps || 0)
  },
  watch: {
    '$route' () {
      this.$store.commit('INC_JUMPS')
      localStorage.jumps = this.$store.getters.jumps
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/general.scss';
@import './assets/scss/roboto.scss';
</style>