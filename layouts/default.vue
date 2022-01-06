<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <Copyright />
  </div>
</template>

<script>
import Header from '@/components/shared/Header/HeaderMain.vue'
import ListenWindow from '@/mixins/ListenWindow'
import Footer from '@/components/shared/Footer/FooterMain.vue'
import Copyright from '~/components/shared/Copyright/Copyright.vue'
export default {
  mixins: [ListenWindow],
  components: {
    Header,
    Footer,
    Copyright
  },
}
</script>