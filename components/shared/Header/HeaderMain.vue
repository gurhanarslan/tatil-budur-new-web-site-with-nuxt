<template>
  <header v-click-outside="onClickOutside">
    <Logo />
    <Nav @mega="showMegaMenu = true" />
    <Actions />
    <MegaMenu v-if="showMegaMenu" @mega="showMegaMenu = $event" />
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside'
import Actions from './components/Actions.vue'
import Logo from './components/LogoApp.vue'
import Nav from './components/Nav.vue'
import MegaMenu from './components/MegaMenu.vue'
export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: { Logo, Nav, Actions, MegaMenu },
  data() {
    return {
      showMegaMenu: false,
    }
  },
  methods: {
    onClickOutside() {
      this.showMegaMenu = false
    },
  },
  mounted() {
    window.addEventListener('resize', (e) => {
      const { LazyFile } = require('@/plugins/LazyCSSFile')
      const width = e.target.innerWidth
      console.log(width);
      if (width < 962) {
        LazyFile('response/mobile/header')
      }
    })
  },
}
</script>
<style lang="scss">
@import '~/static/scss/header.scss';
</style>