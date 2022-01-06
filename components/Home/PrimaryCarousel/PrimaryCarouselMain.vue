<template>
  <section class="primary-carousel">
    <div class="carousel-card container">
      <div class="content">
        <div class="tabs">
          <ul>
            <li
              v-for="(tab, i) in tabs"
              :key="i"
              :class="{ active: active === tab.id }"
            >
              <img class="tab-icon" :src="tab.src" :alt="tab.title" /> {{ tab.title }}
            </li>
          </ul>
        </div>
        <div class="tab-items">
          <TabItem />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TabItem from './components/TabItem.vue'
export default {
  components: {
    TabItem,
  },
  data() {
    return {
      active: 1,
      tabs: [
        { id: 1, title: 'otel ara', src: '/images/icons/hotel.svg' },
        { id: 2, title: 'uçak ara', src: '/images/icons/plane.svg' },
        { id: 3, title: 'tur ara', src: '/images/icons/suitcase.svg' },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '~/static/scss/PrimaryCarousel.scss';
</style>