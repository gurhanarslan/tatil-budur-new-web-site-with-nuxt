<template>
  <div class="showcase section">
    <h1>Yazın ilk fırsatlarını kaçırma!</h1>
    <div class="tabs">
      <ul>
        <li
          v-for="(tab, i) in tabs"
          :key="i"
          :class="{ active: active === tab.id }"
        >
          {{ tab.title }}
        </li>
      </ul>
      <a href="#">Daha fazla göster</a>
    </div>
    <div class="row products">
      <div v-for="(product, i) in products" :key="i" class="col-3">
        <ShowcaseProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ShowcaseProduct from './components/ShowcaseProduct.vue'
export default {
  components: {
    ShowcaseProduct,
  },
  data() {
    return {
      active: 1,
      products: [
        {
          title: 'Vikingen İnfinity Resort & Spa Hotel',
          image: '/images/viking.png',
          tag: 'Ultra Her Şey Dahil',
          price: 230,
          region: 'Antalya',
          district: 'Alanya',
          point: 9,
          status: 'ÇOK İYİ'
        },
        {
          title: 'Le Meridien Bodrum Beach Resort',
          image: '/images/meridien.png',
          tag: 'Ultra Her Şey Dahil',
          price: 230,
          region: 'Antalya',
          district: 'Alanya',
          point: 9,
          status: 'ÇOK İYİ'
        },
        {
          title: 'La Quinta by Wyndham Bodrum',
          image: '/images/wyndham.png',
          tag: 'Ultra Her Şey Dahil',
          price: 230,
          region: 'Antalya',
          district: 'Alanya',
          point: 9,
          status: 'ÇOK İYİ'
        },
        {
          title: 'La Quinta by Wyndham Bodrum',
          image: '/images/wyndham2.png',
          tag: 'Ultra Her Şey Dahil',
          price: 230,
          region: 'Antalya',
          district: 'Alanya',
          point: 9,
          status: 'ÇOK İYİ'
        },
      ],
      tabs: [
        { id: 1, title: 'son gezdiğin oteller' },
        { id: 2, title: 'En çok aranan oteller' },
        { id: 3, title: 'Tükenmek üzere olan oteller' },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/Showcase.scss';
</style>