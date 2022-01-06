<template>
  <div class="mega-menu" @mouseleave="$emit('mega', false)">
    <div class="row">
      <div class="col-12 col-md-4 left-side">
        <ul class="menu">
          <li
            v-for="(menu, i) in menus"
            :key="i"
            :class="{ active: active === i }"
            @click="active = i"
          >
            <div class="menu">
              <img :src="menu.image" :alt="menu.title" class="title" />
              <span>{{ menu.title }} </span>
            </div>
            <small v-if="active === i"
              ><img src="/images/icons/down.svg" :alt="menu.title" class="icon"
            /></small>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-8 right-side">
        <div class="row">
          <div class="col-12 col-md-6">
            <ul class="hotels">
              <li v-for="(hotel, i) in hotels" :key="i">
                  <span><a href="#">{{hotel.title}}</a></span>
                  <small>{{hotel.count}} Otel</small>
              </li>
            </ul>
            <div class="view-all">
              Tümünü Gör →
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="advertisements">
              <div class="adv" v-for="(item, i) in advertisements" :key="i">
                <img class="adv-img" :src="`/images/${item.image}.png`" :alt="item.title">
                <div class="filigran">
                  <div class="item">
                    <img :src="`images/icons/${item.icon}.png`" alt="" class="item-img">
                    <h4>{{item.title}}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="alert-warning">
              <img src="/images/icons/transfer@2x.png" alt="transfer" class="alert">
              <span>Ulaşım & Transfer Hizmetleri</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      advertisements: [
        { id: 1, title: 'Pandemi Döneminde Güvenli Tatil', icon: 'pandemic', image: 'mega-pic-1' },
        { id: 2, title: 'Popüler Kayak Otelleri', icon: 'kayak', image: 'mega-pic-2' },
      ],
      hotels:[
          { id: 1, title: 'Antalya Otelleri', count:1242},
          { id: 2, title: 'Bodrum Otelleri', count:255},
          { id: 3, title: 'Alanya Otelleri', count:445},
          { id: 4, title: 'Marmaris Otelleri', count:1242},
          { id: 5, title: 'Didim Otelleri', count:255},
          { id: 6, title: 'Fethiye Otelleri', count:445},
          { id: 7, title: 'Çeşme Otelleri', count:1242},
          { id: 8, title: 'Ayvalık Otelleri', count:255}
      ],
      menus: [
        { id: 1, image: '/images/yurt-ici.png', title: 'Yurt İçi Otelleri' },
        { id: 2, image: '/images/termal.png', title: 'Termal Otelleri' },
        {
          id: 3,
          image: '/images/kibris-otelleri.png',
          title: 'Kıbrıs Otelleri',
        },
        { id: 4, image: '/images/sehir-otelleri.png', title: 'Şehir Otelleri' },
        { id: 5, image: '/images/kayak-otelleri.png', title: 'Kayak Otelleri' },
        {
          id: 6,
          image: '/images/hafta-sonu-otelleri.png',
          title: 'Hafta Sonu Otelleri',
        },
        { id: 7, image: '/images/otel-temaları.png', title: 'Otel Temaları' },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/components/MegaMenu.scss';
</style>