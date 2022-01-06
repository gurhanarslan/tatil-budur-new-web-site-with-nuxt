<template>
  <div class="app-promotion">
    <div class="left-side">
      <h1>
        TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!
      </h1>
      <img
        v-for="(app, i) in apps"
        :key="i"
        :src="app.image"
        :alt="app.title"
      />
    </div>
    <div class="right-left-side">
        <img src="/images/qr@2x.png" alt="qr code">
        <p>İndirmek için <br> QR Kodu Tarayın</p>
    </div>
    <div class="phone">
        <img src="/images/app.png" alt="app">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: [
        {
          id: 1,
          title: 'App Store Download',
          image: '/images/appstore@2x.png',
        },
        {
          id: 1,
          title: 'Google Play Download',
          image: '/images/googleplay@2x.png',
        },
        { id: 1, title: 'Huawei Download', image: '/images/huawei@2x.png' },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/AppPromotion.scss';
</style>