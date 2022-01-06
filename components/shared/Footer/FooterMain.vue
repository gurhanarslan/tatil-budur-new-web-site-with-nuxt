<template>
  <footer class="section">
    <FooterHeader></FooterHeader>
    <FooterBody></FooterBody>
    <FooterOfFooter></FooterOfFooter>
    <img class="call-center" src="/images/cagrimerkezi-model@2x.png" alt="cagrimerkezi">
    <div class="alert">
      Afişe edilen tüm fiyatlar, ilgili üründe kontenjan olması durumunda geçerli olup seçeceğiniz döneme göre fiyatlar değişkenlik gösterebilir.
    </div>
  </footer>
</template>

<script>
import FooterHeader from './components/FooterofHeader.vue'
import FooterBody from './components/FooterofBody.vue'
import FooterOfFooter from './components/Footer.vue'
export default {
  components: { FooterHeader, FooterBody, FooterOfFooter },
}
</script>
<style lang="scss">
@import '~/static/scss/footer.scss';
</style>